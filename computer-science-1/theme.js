(() => {
"use strict";
function setupMenu(){
 const sidebar=document.querySelector(".layout > .sidebar"),layout=sidebar?.parentElement;
 if(!sidebar||!layout)return;
 const key="cs1:menu-collapsed";
 if(!sidebar.id)sidebar.id="course-menu";
 const toggle=document.createElement("button");toggle.type="button";toggle.className="menu-toggle";
 toggle.setAttribute("aria-controls",sidebar.id);
 layout.append(toggle);
 function setCollapsed(collapsed){
  if(collapsed&&sidebar.contains(document.activeElement))toggle.focus();
  sidebar.hidden=collapsed;layout.classList.toggle("menu-collapsed",collapsed);
  toggle.setAttribute("aria-expanded",String(!collapsed));
  toggle.textContent=collapsed?"›":"‹";
  toggle.setAttribute("aria-label",collapsed?"Show menu":"Hide menu");
  toggle.title=collapsed?"Show menu":"Hide menu";
  try{localStorage.setItem(key,String(collapsed))}catch{}
 }
 let collapsed=false;try{collapsed=localStorage.getItem(key)==="true"}catch{}
 setCollapsed(collapsed);
 toggle.addEventListener("click",()=>setCollapsed(!sidebar.hidden));
}

document.addEventListener('DOMContentLoaded',setupMenu);
})();
