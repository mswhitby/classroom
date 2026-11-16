/* Run Python away from the UI thread. This worker can be restarted after timeout. */
const CDN = "https://cdn.jsdelivr.net/pyodide/v0.29.1/full/";
let pyodide;
(async () => {
  try {
    importScripts(CDN+"pyodide.js");
    pyodide = await loadPyodide({indexURL: CDN});
    postMessage({type:"ready"});
  } catch (error) {
    postMessage({type:"load-error",message:String(error)});
  }
})();
onmessage = (event) => {
  const {type,code,id} = event.data;
  if (type !== "run" || !pyodide) return;
  try {
    pyodide.globals.set("_student_script", code);
    const result = pyodide.runPython(`
import io as _io
import traceback as _trace
import contextlib as _ctx
_output = _io.StringIO()
_success = True
try:
    with _ctx.redirect_stdout(_output), _ctx.redirect_stderr(_output):
        exec(_student_script, {"__name__": "__main__"})
except BaseException:
    _success = False
    _trace.print_exc(file=_output)
(_success, _output.getvalue())
`);
    const [success,output] = result.toJs();
    result.destroy();
    postMessage({type:"result",id,success,output:String(output).slice(0,18000)});
  } catch(error) {
    postMessage({type:"result",id,success:false,output:String(error)});
  }
};