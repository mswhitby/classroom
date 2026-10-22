(() => {
"use strict";
const name="cs1:theme",allowed=["light","purple","dark","dark-purple"];
function current(){try{const t=localStorage.getItem(name);return allowed.includes(t)?t:"light"}catch{return "light"}}
function apply(t){document.documentElement.dataset.theme=t;try{localStorage.setItem(name,t)}catch{}
 document.querySelectorAll("[data-theme-select]").forEach(s=>s.value=t);
 document.querySelectorAll("[data-choice]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.choice===t)));
}
apply(current());
document.addEventListener("DOMContentLoaded",()=>{
 document.querySelectorAll("[data-theme-select]").forEach(select=>{select.value=current();select.addEventListener("change",()=>apply(select.value))});
 document.querySelectorAll("[data-choice]").forEach(b=>b.addEventListener("click",()=>apply(b.dataset.choice)));
});
})();