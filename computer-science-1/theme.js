(() => {
"use strict";
const name="cs1:theme",allowed=["light","purple","dark","dark-purple"];
function current(){try{const t=localStorage.getItem(name);return allowed.includes(t)?t:"light"}catch{return "light"}}
function apply(t){document.documentElement.dataset.theme=t;try{localStorage.setItem(name,t)}catch{}
 document.querySelectorAll("[data-theme-select]").forEach(s=>s.value=t);
 document.querySelectorAll("[data-choice]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.choice===t)));
}

function setupMenu(){
 const sidebar=document.querySelector(".layout > .sidebar"),layout=sidebar?.parentElement;
 const header=document.querySelector(".top"),logo=header?.querySelector(".logo");
 if(!sidebar||!layout||!header||!logo)return;
 const key="cs1:menu-collapsed";
 if(!sidebar.id)sidebar.id="course-menu";
 const group=document.createElement("div");group.className="menu-brand";
 const toggle=document.createElement("button");toggle.type="button";toggle.className="menu-toggle";
 toggle.setAttribute("aria-controls",sidebar.id);
 header.insertBefore(group,logo);group.append(toggle,logo);
 function setCollapsed(collapsed){
  if(collapsed&&sidebar.contains(document.activeElement))toggle.focus();
  sidebar.hidden=collapsed;layout.classList.toggle("menu-collapsed",collapsed);
  toggle.setAttribute("aria-expanded",String(!collapsed));
  toggle.textContent=collapsed?"☰ Show menu":"☰ Hide menu";
  try{localStorage.setItem(key,String(collapsed))}catch{}
 }
 let collapsed=false;try{collapsed=localStorage.getItem(key)==="true"}catch{}
 setCollapsed(collapsed);
 toggle.addEventListener("click",()=>setCollapsed(!sidebar.hidden));
}

apply(current());
document.addEventListener("DOMContentLoaded",()=>{
 setupMenu();
 document.querySelectorAll("[data-theme-select]").forEach(select=>{select.value=current();select.addEventListener("change",()=>apply(select.value))});
 document.querySelectorAll("[data-choice]").forEach(b=>b.addEventListener("click",()=>apply(b.dataset.choice)));
});
})();