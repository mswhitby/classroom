// Keep the outline compact while revealing clipped names outside its scroll area.
export function sidebarTitles(sidebar){
 if(!sidebar)return;
 const tip=document.createElement('div');tip.id='sidebar-full-title';tip.className='sidebar-full-title';tip.setAttribute('role','tooltip');tip.hidden=true;document.body.append(tip);
 let active=null;
 const hide=()=>{if(active)active.removeAttribute('aria-describedby');active=null;tip.hidden=true};
 const show=link=>{
  const label=link?.querySelector('.lname,.uname');
  if(!label||label.scrollWidth<=label.clientWidth){hide();return}
  hide();active=link;tip.textContent=link.dataset.fullTitle||label.textContent;tip.hidden=false;link.setAttribute('aria-describedby',tip.id);
  const row=link.getBoundingClientRect(),box=tip.getBoundingClientRect();
  tip.style.left=Math.max(8,Math.min(row.right+12,innerWidth-box.width-8))+'px';
  tip.style.top=Math.max(8,Math.min(row.top,innerHeight-box.height-8))+'px';
 };
 sidebar.addEventListener('pointerover',e=>{if(e.pointerType!=='touch')show(e.target.closest('.lesson-link,.unit-title'))});
 sidebar.addEventListener('pointerout',e=>{if(active&&!active.contains(e.relatedTarget))hide()});
 sidebar.addEventListener('focusin',e=>show(e.target.closest('.lesson-link,.unit-title')));
 sidebar.addEventListener('focusout',hide);
 sidebar.addEventListener('scroll',hide,true);sidebar.addEventListener('click',hide);
 document.addEventListener('keydown',e=>{if(e.key==='Escape')hide()});addEventListener('resize',hide);addEventListener('hashchange',hide);
}
