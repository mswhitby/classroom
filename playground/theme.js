/* One appearance preference across all four course areas and the Python pages. */
(() => {
 const key='playground:appearance:v1',media=matchMedia('(prefers-color-scheme: dark)');
 const normalize=v=>['dark','dark-purple'].includes(v)?'dark':['light','purple'].includes(v)?'light':'system';
 function load(){try{const value=localStorage.getItem(key);if(value)return normalize(value);let previous=localStorage.getItem('playground:theme');if(previous){try{previous=JSON.parse(previous)}catch{}return normalize(previous)}const old=localStorage.getItem('cs1:theme');return old?normalize(old):'system'}catch{return 'system'}}
 let preference=load();
 function apply(){const resolved=preference==='system'?(media.matches?'dark':'light'):preference;document.documentElement.dataset.theme=resolved;document.documentElement.dataset.bsTheme=resolved;document.documentElement.dataset.appearance=preference;document.querySelectorAll('[data-theme-select],#theme').forEach(s=>s.value=preference);const meta=document.querySelector('meta[name=theme-color]');if(meta)meta.content=resolved==='dark'?'#1c1b26':'#fffdfd'}
 function set(value){preference=normalize(value);try{localStorage.setItem(key,preference)}catch{}apply()}
 window.PlaygroundTheme={get:()=>preference,set};apply();
 media.addEventListener('change',apply);addEventListener('storage',e=>{if(e.key===key){preference=load();apply()}});
 document.addEventListener('change',e=>{if(e.target.matches('[data-theme-select],#theme'))set(e.target.value)});
 document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-theme-select]').forEach(select=>{
   select.innerHTML='<option value="system">Use device setting</option><option value="light">Light</option><option value="dark">Dark</option>';
   const picker=select.closest('.theme-picker');if(picker){
    const details=document.createElement('details');details.className='material-preferences';
    details.innerHTML='<summary aria-label="Account and preferences" title="Account and preferences"><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.1 13a7 7 0 0 0 0-2l2-1.5-2-3.5-2.3.9a7 7 0 0 0-1.7-1L14.7 3h-4l-.4 2.9a7 7 0 0 0-1.7 1L6.3 6 4.3 9.5l2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.5 2.3-.9a7 7 0 0 0 1.7 1l.4 2.9h4l.4-2.9a7 7 0 0 0 1.7-1l2.3.9 2-3.5-2-1.5ZM12.7 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg></summary><div><strong>Account & preferences</strong><label>Appearance</label></div>';
    const label=details.querySelector('label');label.htmlFor=select.id;label.after(select);picker.replaceWith(details);
   }
  });apply();
 });
})();
