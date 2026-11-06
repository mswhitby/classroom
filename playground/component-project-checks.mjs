// Practice feedback only; ownership, voting and integration require teacher review.
export function componentProjectCheckSource(step){
 if(!['plan','build','review','integrate'].includes(step))throw Error('Unknown component project step.');
 if(step==='plan'||step==='review')return `send('project-checks',{results:[{label:'This checkpoint needs teacher review of your issue, contract, and peer feedback. No code result is recorded.',pass:false}]});`;
 return `(()=>{
  const results=[], record=(label,pass)=>results.push({label,pass:!!pass});
  const cards=[...document.querySelectorAll('[data-component="event-card"]')];
  record('An event card has a heading, native button, and status paragraph.',cards.length>0&&cards.every(card=>card.querySelector('h2')?.textContent.trim()&&card.querySelector('button[type="button"]')&&card.querySelector('[role="status"]')));
  const testCard=card=>{
   const button=card.querySelector('button'),status=card.querySelector('[role="status"]');
   if(!button||!status)return false;
   const pressed=button.getAttribute('aria-pressed'),text=status.textContent;
   button.click();const changed=button.getAttribute('aria-pressed')!==pressed&&status.textContent!==text;
   button.click();return changed&&button.getAttribute('aria-pressed')===pressed&&status.textContent===text;
  };
  record('Save and unsave update aria-pressed and the status.',cards.length>0&&cards.every(testCard));
  if(${JSON.stringify(step)}==='integrate'){
   let independent=false;
   if(cards.length>=2){const a=cards[0].querySelector('button'),b=cards[1].querySelector('button'),status=cards[1].querySelector('[role="status"]');if(a&&b&&status){const before=b.getAttribute('aria-pressed'),message=status.textContent;a.click();independent=b.getAttribute('aria-pressed')===before&&status.textContent===message;a.click();}}
   record('Two cards work independently.',independent);
  }
  record('The preview fits without sideways page scrolling.',document.documentElement.scrollWidth<=innerWidth+1);
  send('project-checks',{results});
 })();`;
}
