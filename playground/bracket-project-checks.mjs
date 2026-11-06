// Browser-only practice checks for the fictional eight-team bracket mini-project.
// These checks are advisory. No client-side result is a trusted server grade.
export function bracketProjectCheckSource(step){
 const allowed=['scaffold','page','style','matchups','teams','layout','picks','scoring','leaderboard','test'];
 if(!allowed.includes(step))throw Error('Unknown bracket project step.');
 return `(async()=>{
 const results=[];
 const record=(label,pass)=>results.push({label,pass:!!pass});
 const target=${JSON.stringify(step)};
 const app=window.bracketApp;
 const includes=id=>target==='test'||target===id;
 const elements=selector=>[...document.querySelectorAll(selector)];
 const status=document.getElementById('entry-status');
 const previousStatus=status?.textContent;
 const leaderboard=document.getElementById('leaderboard');
 const previousLeaderboard=leaderboard?.innerHTML;
 const oldPicks=app?.picks?{...app.picks}:null;
 const entryRef=typeof app?.getEntries==='function'?app.getEntries():null;
 const oldEntries=Array.isArray(entryRef)?entryRef.map(entry=>({...entry,picks:{...entry.picks}})):null;
 try {
  if(target==='scaffold')record('The document has a language, title, and mobile viewport.',document.documentElement.lang==='en'&&document.title==='Bracket Challenge'&&document.querySelector('meta[name="viewport"]'));
  if(target==='page')record('The page has a title, bracket area, and labeled nickname form.',document.querySelector('main h1')&&document.getElementById('bracket')&&document.querySelector('label[for="entry-name"]')&&document.querySelector('#entry-form input#entry-name'));
  if(target==='style'){
   const board=document.getElementById('bracket');
   record('The bracket uses a responsive grid.',board&&getComputedStyle(board).display==='grid');
   record('The page fits this viewport.',document.documentElement.scrollWidth<=innerWidth+1);
  }
  if(target==='matchups')record('The first game finds two teams; later rounds wait for winners.',app?.getMatchup?.(0,0)?.[0]?.id==='north'&&app?.getMatchup?.(0,0)?.[1]?.id==='pine'&&app?.getMatchup?.(1,0)?.every(t=>t===null));
  if(includes('teams')){
   const teams=app?.teams,open=app?.openingMatchups;
   const ids=Array.isArray(teams)?teams.map(t=>t.id):[];
   record('Eight unique named teams with numeric seeds.',Array.isArray(teams)&&teams.length===8&&new Set(ids).size===8&&teams.every(t=>t.id&&t.name&&Number.isInteger(t.seed)));
   const allIds=Array.isArray(open)?open.flat():[];
   record('Four first-round matchups use all eight teams exactly once.',
    Array.isArray(open)&&open.length===4&&open.every(g=>Array.isArray(g)&&g.length===2)
     &&allIds.length===8&&new Set(allIds).size===8&&allIds.every(id=>ids.includes(id)));
   record('Three named rounds are defined in the tournament data.',
    typeof ROUND_NAMES!=='undefined'&&Array.isArray(ROUND_NAMES)&&ROUND_NAMES.length===3&&ROUND_NAMES.every(Boolean));
  }
  if(includes('layout')){
   const board=document.querySelector('#bracket');
   const columns=elements('#bracket .round'),games=elements('#bracket .game');
   record('The bracket displays three rounds and seven matchup cards.',columns.length===3&&games.length===7);
   record('The four first-round games each show two team buttons.',
    columns[0]&&columns[0].querySelectorAll('.game').length===4
    &&[...columns[0].querySelectorAll('.game')].every(g=>g.querySelectorAll('button.team').length===2));
   const layout=board&&getComputedStyle(board),card=games[0]&&getComputedStyle(games[0]);
   record('Rounds have a readable flexible layout and game-card spacing.',
    layout&&['grid','flex'].includes(layout.display)&&card&&parseFloat(card.paddingTop)>0&&parseFloat(card.borderTopWidth)>0);
  }
  if(includes('picks')){
   if(typeof app?.chooseWinner!=='function'||typeof app?.getMatchup!=='function'||!oldPicks){
    record('A team choice advances to the next round.',false);
    record('Changing an earlier winner clears impossible later picks.',false);
   }else{
    Object.keys(app.picks).forEach(key=>delete app.picks[key]);
    app.renderBracket?.();
    const selected=app.chooseWinner(0,0,'north');
    const inSemi=app.getMatchup(1,0)?.some(t=>t?.id==='north');
    record('Choosing North Harbor advances that team into the first semifinal.',selected!==false&&app.picks['0-0']==='north'&&inSemi);
    app.chooseWinner(0,1,'river');
    app.chooseWinner(1,0,'north');
    app.chooseWinner(0,0,'pine');
    const semiStillValid=!app.picks['1-0']||app.getMatchup(1,0)?.some(t=>t?.id===app.picks['1-0']);
    record('Changing an earlier winner clears impossible later picks.',
      app.picks['0-0']==='pine'&&semiStillValid&&app.picks['1-0']!=='north');
   }
  }
  if(includes('scoring')){
   const score=app?.scorePicks;
   const partial={'0-0':'north','0-1':'glen','1-1':'summit','2-0':'summit'};
   const before=JSON.stringify(partial);
   record('Empty picks earn zero and correct picks earn 12.',
     typeof score==='function'&&score({})===0&&score(app.results)===12);
   record('Partial picks are weighted 1, 2, and 4 points without mutating the input.',
     typeof score==='function'&&score(partial)===7&&JSON.stringify(partial)===before);
  }
  if(includes('leaderboard')){
   if(!app?.saveEntry||!app?.getEntries||!app?.picks||!app?.results){
    record('A completed entry can be saved with a nickname.',false);
    record('Entries sort by score and duplicate nicknames are updated.',false);
   }else{
    Object.keys(app.picks).forEach(key=>delete app.picks[key]);
    const incomplete=app.saveEntry('Autocheck');
    Object.assign(app.picks,app.results);
    const saved=app.saveEntry('Autocheck');
    const once=app.getEntries().filter(e=>e.name==='Autocheck').length;
    const updated=app.saveEntry('Autocheck');
    const ranked=elements('#leaderboard li').map(li=>li.textContent);
    record('Incomplete brackets are rejected and a seven-pick entry is saved.',
      incomplete===false&&saved===true&&once===1);
    record('Entries appear on the leaderboard, sorted by their score, with no duplicate nickname.',
      updated===true&&app.getEntries().filter(e=>e.name==='Autocheck').length===1&&
      ranked.some(t=>t.includes('Autocheck'))&&
      ranked.length===app.getEntries().length&&
      app.getEntries().every(e=>e.name&&!Number.isNaN(app.scorePicks(e.picks))));
   }
  }
 }catch(error){
  record('Your code runs without an error during this checkpoint.',false);
  console.warn('Bracket checkpoint:',error.message);
 }finally{
  if(oldPicks&&app?.picks){
   Object.keys(app.picks).forEach(key=>delete app.picks[key]);
   Object.assign(app.picks,oldPicks);
   try{app.renderBracket?.()}catch{}
  }
  if(oldEntries&&Array.isArray(entryRef)){
   entryRef.splice(0,entryRef.length,...oldEntries);
  }
  if(leaderboard&&previousLeaderboard!==undefined)leaderboard.innerHTML=previousLeaderboard;
  if(status)status.textContent=previousStatus||'';
 }
 send('project-checks',{results});
})().catch(error=>send('error',{text:error.name+': '+error.message}));`;
}
