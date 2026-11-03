// Published Python checker contract, extracted from the original lesson engine.
export function harness(source,cases){
 const data=JSON.stringify(JSON.stringify(cases));
 return [
 "import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx",
 "__student = "+JSON.stringify(source),
 "__cases = __json.loads("+data+")",
 "__results=[]",
 "for __case in __cases:",
 "    try:",
 "        __env={'__name__':'student'}",
 "        with __ctx.redirect_stdout(__io.StringIO()):",
 "            exec(compile(__student,'main.py','exec'),__env)",
 "            __name=__case['call'].split('(',1)[0].strip()",
 "            if __name not in __env and callable(__env.get('solution')): __env[__name]=__env['solution']",
 "            if not callable(__env.get(__name)): raise NameError('Define '+__name)",
 "            __actual=eval(compile(__ast.parse(__case['call'],mode='eval'),'case','eval'),__env)",
 "        __expected=__ast.literal_eval(__case['expected'])",
 "        __ok=type(__actual) is type(__expected) and __actual==__expected",
 "        __results.append({'ok':__ok,'received':repr(__actual)[:300],'error':''})",
 "    except BaseException as __ex:",
 "        __results.append({'ok':False,'received':'','error':(type(__ex).__name__+': '+str(__ex))[:300]})",
 "print('UNIT_TEST_RESULTS='+__json.dumps(__results))"
 ].join("\n")
}
export function normalize(s){return String(s||"").replace(/\r\n/g,"\n").replace(/\n$/,"")}
