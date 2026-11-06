var Km=Object.defineProperty;var Qm=(s,i,l)=>i in s?Km(s,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[i]=l;var Le=(s,i,l)=>Qm(s,typeof i!="symbol"?i+"":i,l);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function l(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(d){if(d.ep)return;d.ep=!0;const p=l(d);fetch(d.href,p)}})();function Jm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Kl={exports:{}},Ei={},Ql={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function Xm(){if(np)return ge;np=1;var s=Symbol.for("react.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),g=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),k=Symbol.iterator;function j(C){return C===null||typeof C!="object"?null:(C=k&&C[k]||C["@@iterator"],typeof C=="function"?C:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,P={};function z(C,O,he){this.props=C,this.context=O,this.refs=P,this.updater=he||F}z.prototype.isReactComponent={},z.prototype.setState=function(C,O){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,O,"setState")},z.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function q(){}q.prototype=z.prototype;function ue(C,O,he){this.props=C,this.context=O,this.refs=P,this.updater=he||F}var pe=ue.prototype=new q;pe.constructor=ue,H(pe,z.prototype),pe.isPureReactComponent=!0;var ae=Array.isArray,ce=Object.prototype.hasOwnProperty,ye={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function oe(C,O,he){var fe,ve={},te=null,Re=null;if(O!=null)for(fe in O.ref!==void 0&&(Re=O.ref),O.key!==void 0&&(te=""+O.key),O)ce.call(O,fe)&&!X.hasOwnProperty(fe)&&(ve[fe]=O[fe]);var Te=arguments.length-2;if(Te===1)ve.children=he;else if(1<Te){for(var Oe=Array(Te),vn=0;vn<Te;vn++)Oe[vn]=arguments[vn+2];ve.children=Oe}if(C&&C.defaultProps)for(fe in Te=C.defaultProps,Te)ve[fe]===void 0&&(ve[fe]=Te[fe]);return{$$typeof:s,type:C,key:te,ref:Re,props:ve,_owner:ye.current}}function $e(C,O){return{$$typeof:s,type:C.type,key:O,ref:C.ref,props:C.props,_owner:C._owner}}function Se(C){return typeof C=="object"&&C!==null&&C.$$typeof===s}function W(C){var O={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(he){return O[he]})}var Ee=/\/+/g;function Z(C,O){return typeof C=="object"&&C!==null&&C.key!=null?W(""+C.key):O.toString(36)}function xe(C,O,he,fe,ve){var te=typeof C;(te==="undefined"||te==="boolean")&&(C=null);var Re=!1;if(C===null)Re=!0;else switch(te){case"string":case"number":Re=!0;break;case"object":switch(C.$$typeof){case s:case i:Re=!0}}if(Re)return Re=C,ve=ve(Re),C=fe===""?"."+Z(Re,0):fe,ae(ve)?(he="",C!=null&&(he=C.replace(Ee,"$&/")+"/"),xe(ve,O,he,"",function(vn){return vn})):ve!=null&&(Se(ve)&&(ve=$e(ve,he+(!ve.key||Re&&Re.key===ve.key?"":(""+ve.key).replace(Ee,"$&/")+"/")+C)),O.push(ve)),1;if(Re=0,fe=fe===""?".":fe+":",ae(C))for(var Te=0;Te<C.length;Te++){te=C[Te];var Oe=fe+Z(te,Te);Re+=xe(te,O,he,Oe,ve)}else if(Oe=j(C),typeof Oe=="function")for(C=Oe.call(C),Te=0;!(te=C.next()).done;)te=te.value,Oe=fe+Z(te,Te++),Re+=xe(te,O,he,Oe,ve);else if(te==="object")throw O=String(C),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return Re}function Ce(C,O,he){if(C==null)return C;var fe=[],ve=0;return xe(C,fe,"","",function(te){return O.call(he,te,ve++)}),fe}function en(C){if(C._status===-1){var O=C._result;O=O(),O.then(function(he){(C._status===0||C._status===-1)&&(C._status=1,C._result=he)},function(he){(C._status===0||C._status===-1)&&(C._status=2,C._result=he)}),C._status===-1&&(C._status=0,C._result=O)}if(C._status===1)return C._result.default;throw C._result}var je={current:null},I={transition:null},ee={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:I,ReactCurrentOwner:ye};function $(){throw Error("act(...) is not supported in production builds of React.")}return ge.Children={map:Ce,forEach:function(C,O,he){Ce(C,function(){O.apply(this,arguments)},he)},count:function(C){var O=0;return Ce(C,function(){O++}),O},toArray:function(C){return Ce(C,function(O){return O})||[]},only:function(C){if(!Se(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ge.Component=z,ge.Fragment=l,ge.Profiler=d,ge.PureComponent=ue,ge.StrictMode=c,ge.Suspense=v,ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,ge.act=$,ge.cloneElement=function(C,O,he){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var fe=H({},C.props),ve=C.key,te=C.ref,Re=C._owner;if(O!=null){if(O.ref!==void 0&&(te=O.ref,Re=ye.current),O.key!==void 0&&(ve=""+O.key),C.type&&C.type.defaultProps)var Te=C.type.defaultProps;for(Oe in O)ce.call(O,Oe)&&!X.hasOwnProperty(Oe)&&(fe[Oe]=O[Oe]===void 0&&Te!==void 0?Te[Oe]:O[Oe])}var Oe=arguments.length-2;if(Oe===1)fe.children=he;else if(1<Oe){Te=Array(Oe);for(var vn=0;vn<Oe;vn++)Te[vn]=arguments[vn+2];fe.children=Te}return{$$typeof:s,type:C.type,key:ve,ref:te,props:fe,_owner:Re}},ge.createContext=function(C){return C={$$typeof:g,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:p,_context:C},C.Consumer=C},ge.createElement=oe,ge.createFactory=function(C){var O=oe.bind(null,C);return O.type=C,O},ge.createRef=function(){return{current:null}},ge.forwardRef=function(C){return{$$typeof:f,render:C}},ge.isValidElement=Se,ge.lazy=function(C){return{$$typeof:w,_payload:{_status:-1,_result:C},_init:en}},ge.memo=function(C,O){return{$$typeof:x,type:C,compare:O===void 0?null:O}},ge.startTransition=function(C){var O=I.transition;I.transition={};try{C()}finally{I.transition=O}},ge.unstable_act=$,ge.useCallback=function(C,O){return je.current.useCallback(C,O)},ge.useContext=function(C){return je.current.useContext(C)},ge.useDebugValue=function(){},ge.useDeferredValue=function(C){return je.current.useDeferredValue(C)},ge.useEffect=function(C,O){return je.current.useEffect(C,O)},ge.useId=function(){return je.current.useId()},ge.useImperativeHandle=function(C,O,he){return je.current.useImperativeHandle(C,O,he)},ge.useInsertionEffect=function(C,O){return je.current.useInsertionEffect(C,O)},ge.useLayoutEffect=function(C,O){return je.current.useLayoutEffect(C,O)},ge.useMemo=function(C,O){return je.current.useMemo(C,O)},ge.useReducer=function(C,O,he){return je.current.useReducer(C,O,he)},ge.useRef=function(C){return je.current.useRef(C)},ge.useState=function(C){return je.current.useState(C)},ge.useSyncExternalStore=function(C,O,he){return je.current.useSyncExternalStore(C,O,he)},ge.useTransition=function(){return je.current.useTransition()},ge.version="18.3.1",ge}var tp;function _u(){return tp||(tp=1,Ql.exports=Xm()),Ql.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp;function Zm(){if(rp)return Ei;rp=1;var s=_u(),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function g(f,v,x){var w,k={},j=null,F=null;x!==void 0&&(j=""+x),v.key!==void 0&&(j=""+v.key),v.ref!==void 0&&(F=v.ref);for(w in v)c.call(v,w)&&!p.hasOwnProperty(w)&&(k[w]=v[w]);if(f&&f.defaultProps)for(w in v=f.defaultProps,v)k[w]===void 0&&(k[w]=v[w]);return{$$typeof:i,type:f,key:j,ref:F,props:k,_owner:d.current}}return Ei.Fragment=l,Ei.jsx=g,Ei.jsxs=g,Ei}var sp;function ef(){return sp||(sp=1,Kl.exports=Zm()),Kl.exports}var a=ef(),G=_u();const nf=Jm(G);var Ka={},Jl={exports:{}},In={},Xl={exports:{}},Zl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function tf(){return ip||(ip=1,(function(s){function i(I,ee){var $=I.length;I.push(ee);e:for(;0<$;){var C=$-1>>>1,O=I[C];if(0<d(O,ee))I[C]=ee,I[$]=O,$=C;else break e}}function l(I){return I.length===0?null:I[0]}function c(I){if(I.length===0)return null;var ee=I[0],$=I.pop();if($!==ee){I[0]=$;e:for(var C=0,O=I.length,he=O>>>1;C<he;){var fe=2*(C+1)-1,ve=I[fe],te=fe+1,Re=I[te];if(0>d(ve,$))te<O&&0>d(Re,ve)?(I[C]=Re,I[te]=$,C=te):(I[C]=ve,I[fe]=$,C=fe);else if(te<O&&0>d(Re,$))I[C]=Re,I[te]=$,C=te;else break e}}return ee}function d(I,ee){var $=I.sortIndex-ee.sortIndex;return $!==0?$:I.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var g=Date,f=g.now();s.unstable_now=function(){return g.now()-f}}var v=[],x=[],w=1,k=null,j=3,F=!1,H=!1,P=!1,z=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function pe(I){for(var ee=l(x);ee!==null;){if(ee.callback===null)c(x);else if(ee.startTime<=I)c(x),ee.sortIndex=ee.expirationTime,i(v,ee);else break;ee=l(x)}}function ae(I){if(P=!1,pe(I),!H)if(l(v)!==null)H=!0,en(ce);else{var ee=l(x);ee!==null&&je(ae,ee.startTime-I)}}function ce(I,ee){H=!1,P&&(P=!1,q(oe),oe=-1),F=!0;var $=j;try{for(pe(ee),k=l(v);k!==null&&(!(k.expirationTime>ee)||I&&!W());){var C=k.callback;if(typeof C=="function"){k.callback=null,j=k.priorityLevel;var O=C(k.expirationTime<=ee);ee=s.unstable_now(),typeof O=="function"?k.callback=O:k===l(v)&&c(v),pe(ee)}else c(v);k=l(v)}if(k!==null)var he=!0;else{var fe=l(x);fe!==null&&je(ae,fe.startTime-ee),he=!1}return he}finally{k=null,j=$,F=!1}}var ye=!1,X=null,oe=-1,$e=5,Se=-1;function W(){return!(s.unstable_now()-Se<$e)}function Ee(){if(X!==null){var I=s.unstable_now();Se=I;var ee=!0;try{ee=X(!0,I)}finally{ee?Z():(ye=!1,X=null)}}else ye=!1}var Z;if(typeof ue=="function")Z=function(){ue(Ee)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Ce=xe.port2;xe.port1.onmessage=Ee,Z=function(){Ce.postMessage(null)}}else Z=function(){z(Ee,0)};function en(I){X=I,ye||(ye=!0,Z())}function je(I,ee){oe=z(function(){I(s.unstable_now())},ee)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_continueExecution=function(){H||F||(H=!0,en(ce))},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$e=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return j},s.unstable_getFirstCallbackNode=function(){return l(v)},s.unstable_next=function(I){switch(j){case 1:case 2:case 3:var ee=3;break;default:ee=j}var $=j;j=ee;try{return I()}finally{j=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(I,ee){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=j;j=I;try{return ee()}finally{j=$}},s.unstable_scheduleCallback=function(I,ee,$){var C=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?C+$:C):$=C,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=$+O,I={id:w++,callback:ee,priorityLevel:I,startTime:$,expirationTime:O,sortIndex:-1},$>C?(I.sortIndex=$,i(x,I),l(v)===null&&I===l(x)&&(P?(q(oe),oe=-1):P=!0,je(ae,$-C))):(I.sortIndex=O,i(v,I),H||F||(H=!0,en(ce))),I},s.unstable_shouldYield=W,s.unstable_wrapCallback=function(I){var ee=j;return function(){var $=j;j=ee;try{return I.apply(this,arguments)}finally{j=$}}}})(Zl)),Zl}var ap;function rf(){return ap||(ap=1,Xl.exports=tf()),Xl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function sf(){if(op)return In;op=1;var s=_u(),i=rf();function l(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,d={};function p(e,n){g(e,n),g(e+"Capture",n)}function g(e,n){for(d[e]=n,e=0;e<n.length;e++)c.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},k={};function j(e){return v.call(k,e)?!0:v.call(w,e)?!1:x.test(e)?k[e]=!0:(w[e]=!0,!1)}function F(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H(e,n,t,r){if(n===null||typeof n>"u"||F(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function P(e,n,t,r,o,u,h){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=u,this.removeEmptyString=h}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new P(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];z[n]=new P(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new P(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new P(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new P(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){z[e]=new P(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){z[e]=new P(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){z[e]=new P(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){z[e]=new P(e,5,!1,e.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(q,ue);z[n]=new P(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(q,ue);z[n]=new P(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(q,ue);z[n]=new P(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){z[e]=new P(e,1,!1,e.toLowerCase(),null,!1,!1)}),z.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){z[e]=new P(e,1,!1,e.toLowerCase(),null,!0,!0)});function pe(e,n,t,r){var o=z.hasOwnProperty(n)?z[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(H(n,t,o,r)&&(t=null),r||o===null?j(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var ae=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ce=Symbol.for("react.element"),ye=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),$e=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),W=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),I=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,C;function O(e){if(C===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);C=n&&n[1]||""}return`
`+C+e}var he=!1;function fe(e,n){if(!e||he)return"";he=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(N){var r=N}Reflect.construct(e,[],n)}else{try{n.call()}catch(N){r=N}e.call(n.prototype)}else{try{throw Error()}catch(N){r=N}e()}}catch(N){if(N&&r&&typeof N.stack=="string"){for(var o=N.stack.split(`
`),u=r.stack.split(`
`),h=o.length-1,y=u.length-1;1<=h&&0<=y&&o[h]!==u[y];)y--;for(;1<=h&&0<=y;h--,y--)if(o[h]!==u[y]){if(h!==1||y!==1)do if(h--,y--,0>y||o[h]!==u[y]){var b=`
`+o[h].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=h&&0<=y);break}}}finally{he=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?O(e):""}function ve(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=fe(e.type,!1),e;case 11:return e=fe(e.type.render,!1),e;case 1:return e=fe(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case ye:return"Portal";case $e:return"Profiler";case oe:return"StrictMode";case Z:return"Suspense";case xe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case W:return(e.displayName||"Context")+".Consumer";case Se:return(e._context.displayName||"Context")+".Provider";case Ee:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return n=e.displayName||null,n!==null?n:te(e.type)||"Memo";case en:n=e._payload,e=e._init;try{return te(e(n))}catch{}}return null}function Re(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(n);case 8:return n===oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function vn(e){var n=Oe(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,u=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(h){r=""+h,u.call(this,h)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(h){r=""+h},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Jr(e){e._valueTracker||(e._valueTracker=vn(e))}function Bi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Oe(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Us(e,n){var t=n.checked;return $({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ws(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Te(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ae(e,n){n=n.checked,n!=null&&pe(e,"checked",n,!1)}function wr(e,n){Ae(e,n);var t=Te(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?kr(e,n.type,t):n.hasOwnProperty("defaultValue")&&kr(e,n.type,Te(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ie(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function kr(e,n,t){(n!=="number"||xr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var hn=Array.isArray;function Bn(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Te(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Xr(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(l(91));return $({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zn(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(l(92));if(hn(t)){if(1<t.length)throw Error(l(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Te(t)}}function Bs(e,n){var t=Te(n.value),r=Te(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Zr(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function br(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Hs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _n,ct=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(_n=_n||document.createElement("div"),_n.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=_n.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function On(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var jt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},es=["Webkit","ms","Moz","O"];Object.keys(jt).forEach(function(e){es.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),jt[n]=jt[e]})});function _r(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||jt.hasOwnProperty(e)&&jt[e]?(""+n).trim():n+"px"}function ns(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=_r(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Gt=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kt(e,n){if(n){if(Gt[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(l(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(l(61))}if(n.style!=null&&typeof n.style!="object")throw Error(l(62))}}function Qt(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ts=null;function rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ss=null,dt=null,pt=null;function ht(e){if(e=hi(e)){if(typeof ss!="function")throw Error(l(280));var n=e.stateNode;n&&(n=ca(n),ss(e.stateNode,e.type,n))}}function Tt(e){dt?pt?pt.push(e):pt=[e]:dt=e}function mt(){if(dt){var e=dt,n=pt;if(pt=dt=null,ht(e),n)for(e=0;e<n.length;e++)ht(n[e])}}function $s(e,n){return e(n)}function qs(){}var is=!1;function Vs(e,n,t){if(is)return e(n,t);is=!0;try{return $s(e,n,t)}finally{is=!1,(dt!==null||pt!==null)&&(qs(),mt())}}function Jt(e,n){var t=e.stateNode;if(t===null)return null;var r=ca(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,n,typeof t));return t}var Xt=!1;if(f)try{var ft={};Object.defineProperty(ft,"passive",{get:function(){Xt=!0}}),window.addEventListener("test",ft,ft),window.removeEventListener("test",ft,ft)}catch{Xt=!1}function Hn(e,n,t,r,o,u,h,y,b){var N=Array.prototype.slice.call(arguments,3);try{n.apply(t,N)}catch(M){this.onError(M)}}var $n=!1,Zt=null,er=!1,Ys=null,Hi={onError:function(e){$n=!0,Zt=e}};function Gs(e,n,t,r,o,u,h,y,b){$n=!1,Zt=null,Hn.apply(Hi,arguments)}function $i(e,n,t,r,o,u,h,y,b){if(Gs.apply(this,arguments),$n){if($n){var N=Zt;$n=!1,Zt=null}else throw Error(l(198));er||(er=!0,Ys=N)}}function et(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function qi(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function nr(e){if(et(e)!==e)throw Error(l(188))}function xo(e){var n=e.alternate;if(!n){if(n=et(e),n===null)throw Error(l(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var u=o.alternate;if(u===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===t)return nr(o),e;if(u===r)return nr(o),n;u=u.sibling}throw Error(l(188))}if(t.return!==r.return)t=o,r=u;else{for(var h=!1,y=o.child;y;){if(y===t){h=!0,t=o,r=u;break}if(y===r){h=!0,r=o,t=u;break}y=y.sibling}if(!h){for(y=u.child;y;){if(y===t){h=!0,t=u,r=o;break}if(y===r){h=!0,r=u,t=o;break}y=y.sibling}if(!h)throw Error(l(189))}}if(t.alternate!==r)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:n}function Vi(e){return e=xo(e),e!==null?Fe(e):null}function Fe(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Fe(e);if(n!==null)return n;e=e.sibling}return null}var Et=i.unstable_scheduleCallback,Yi=i.unstable_cancelCallback,Gi=i.unstable_shouldYield,Ks=i.unstable_requestPaint,Ue=i.unstable_now,Ki=i.unstable_getCurrentPriorityLevel,Qs=i.unstable_ImmediatePriority,Qi=i.unstable_UserBlockingPriority,as=i.unstable_NormalPriority,wo=i.unstable_LowPriority,nt=i.unstable_IdlePriority,Sr=null,Sn=null;function tr(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Sr,e,void 0,(e.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:Zs,Js=Math.log,Xs=Math.LN2;function Zs(e){return e>>>=0,e===0?32:31-(Js(e)/Xs|0)|0}var os=64,Cr=4194304;function jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ls(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,u=e.pingedLanes,h=t&268435455;if(h!==0){var y=h&~o;y!==0?r=jr(y):(u&=h,u!==0&&(r=jr(u)))}else h=t&~o,h!==0?r=jr(h):u!==0&&(r=jr(u));if(r===0)return 0;if(n!==0&&n!==r&&(n&o)===0&&(o=r&-r,u=n&-n,o>=u||o===16&&(u&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Cn(n),o=1<<t,r|=e[t],n&=~o;return r}function ko(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bo(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,u=e.pendingLanes;0<u;){var h=31-Cn(u),y=1<<h,b=o[h];b===-1?((y&t)===0||(y&r)!==0)&&(o[h]=ko(y,n)):b<=n&&(e.expiredLanes|=y),u&=~y}}function us(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ji(){var e=os;return os<<=1,(os&4194240)===0&&(os=64),e}function cs(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Nt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Cn(n),e[n]=t}function ds(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Cn(t),u=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~u}}function Tr(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Cn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var be=0;function Er(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var tt,Pt,jn,Xi,Nr,ei=!1,Pr=[],xn=null,qn=null,rt=null,Rr=new Map,rr=new Map,gt=[],_o="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ni(e,n){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":rt=null;break;case"pointerover":case"pointerout":Rr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(n.pointerId)}}function Rt(e,n,t,r,o,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:u,targetContainers:[o]},n!==null&&(n=hi(n),n!==null&&Pt(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Ar(e,n,t,r,o){switch(n){case"focusin":return xn=Rt(xn,e,n,t,r,o),!0;case"dragenter":return qn=Rt(qn,e,n,t,r,o),!0;case"mouseover":return rt=Rt(rt,e,n,t,r,o),!0;case"pointerover":var u=o.pointerId;return Rr.set(u,Rt(Rr.get(u)||null,e,n,t,r,o)),!0;case"gotpointercapture":return u=o.pointerId,rr.set(u,Rt(rr.get(u)||null,e,n,t,r,o)),!0}return!1}function ps(e){var n=Ir(e.target);if(n!==null){var t=et(n);if(t!==null){if(n=t.tag,n===13){if(n=qi(t),n!==null){e.blockedOn=n,Nr(e.priority,function(){jn(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function L(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=rn(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ts=r,t.target.dispatchEvent(r),ts=null}else return n=hi(t),n!==null&&Pt(n),e.blockedOn=t,!1;n.shift()}return!0}function m(e,n,t){L(e)&&t.delete(n)}function _(){ei=!1,xn!==null&&L(xn)&&(xn=null),qn!==null&&L(qn)&&(qn=null),rt!==null&&L(rt)&&(rt=null),Rr.forEach(m),rr.forEach(m)}function R(e,n){e.blockedOn===n&&(e.blockedOn=null,ei||(ei=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,_)))}function A(e){function n(o){return R(o,e)}if(0<Pr.length){R(Pr[0],e);for(var t=1;t<Pr.length;t++){var r=Pr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(xn!==null&&R(xn,e),qn!==null&&R(qn,e),rt!==null&&R(rt,e),Rr.forEach(n),rr.forEach(n),t=0;t<gt.length;t++)r=gt[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(t=gt[0],t.blockedOn===null);)ps(t),t.blockedOn===null&&gt.shift()}var Q=ae.ReactCurrentBatchConfig,re=!0;function me(e,n,t,r){var o=be,u=Q.transition;Q.transition=null;try{be=1,Tn(e,n,t,r)}finally{be=o,Q.transition=u}}function Ke(e,n,t,r){var o=be,u=Q.transition;Q.transition=null;try{be=4,Tn(e,n,t,r)}finally{be=o,Q.transition=u}}function Tn(e,n,t,r){if(re){var o=rn(e,n,t,r);if(o===null)Fo(e,n,r,Je,t),ni(e,r);else if(Ar(o,e,n,t,r))r.stopPropagation();else if(ni(e,r),n&4&&-1<_o.indexOf(e)){for(;o!==null;){var u=hi(o);if(u!==null&&tt(u),u=rn(e,n,t,r),u===null&&Fo(e,n,r,Je,t),u===o)break;o=u}o!==null&&r.stopPropagation()}else Fo(e,n,r,null,t)}}var Je=null;function rn(e,n,t,r){if(Je=null,e=rs(r),e=Ir(e),e!==null)if(n=et(e),n===null)e=null;else if(t=n.tag,t===13){if(e=qi(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Je=e,null}function At(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ki()){case Qs:return 1;case Qi:return 4;case as:case wo:return 16;case nt:return 536870912;default:return 16}default:return 16}}var qe=null,hs=null,Zi=null;function Bu(){if(Zi)return Zi;var e,n=hs,t=n.length,r,o="value"in qe?qe.value:qe.textContent,u=o.length;for(e=0;e<t&&n[e]===o[e];e++);var h=t-e;for(r=1;r<=h&&n[t-r]===o[u-r];r++);return Zi=o.slice(e,1<r?1-r:void 0)}function ea(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function na(){return!0}function Hu(){return!1}function Dn(e){function n(t,r,o,u,h){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(t=e[y],this[y]=t?t(u):u[y]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?na:Hu,this.isPropagationStopped=Hu,this}return $(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),n}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=Dn(ms),ti=$({},ms,{view:0,detail:0}),bh=Dn(ti),Co,jo,ri,ta=$({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(Co=e.screenX-ri.screenX,jo=e.screenY-ri.screenY):jo=Co=0,ri=e),Co)},movementY:function(e){return"movementY"in e?e.movementY:jo}}),$u=Dn(ta),_h=$({},ta,{dataTransfer:0}),Sh=Dn(_h),Ch=$({},ti,{relatedTarget:0}),To=Dn(Ch),jh=$({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Th=Dn(jh),Eh=$({},ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nh=Dn(Eh),Ph=$({},ms,{data:0}),qu=Dn(Ph),Rh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ah={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ih[e])?!!n[e]:!1}function Eo(){return Lh}var Oh=$({},ti,{key:function(e){if(e.key){var n=Rh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ea(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ah[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eo,charCode:function(e){return e.type==="keypress"?ea(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ea(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dh=Dn(Oh),zh=$({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vu=Dn(zh),Mh=$({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eo}),Fh=Dn(Mh),Uh=$({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wh=Dn(Uh),Bh=$({},ta,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hh=Dn(Bh),$h=[9,13,27,32],No=f&&"CompositionEvent"in window,si=null;f&&"documentMode"in document&&(si=document.documentMode);var qh=f&&"TextEvent"in window&&!si,Yu=f&&(!No||si&&8<si&&11>=si),Gu=" ",Ku=!1;function Qu(e,n){switch(e){case"keyup":return $h.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ju(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fs=!1;function Vh(e,n){switch(e){case"compositionend":return Ju(n);case"keypress":return n.which!==32?null:(Ku=!0,Gu);case"textInput":return e=n.data,e===Gu&&Ku?null:e;default:return null}}function Yh(e,n){if(fs)return e==="compositionend"||!No&&Qu(e,n)?(e=Bu(),Zi=hs=qe=null,fs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yu&&n.locale!=="ko"?null:n.data;default:return null}}var Gh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Gh[e.type]:n==="textarea"}function Zu(e,n,t,r){Tt(r),n=oa(n,"onChange"),0<n.length&&(t=new So("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var ii=null,ai=null;function Kh(e){yc(e,0)}function ra(e){var n=ws(e);if(Bi(n))return e}function Qh(e,n){if(e==="change")return n}var ec=!1;if(f){var Po;if(f){var Ro="oninput"in document;if(!Ro){var nc=document.createElement("div");nc.setAttribute("oninput","return;"),Ro=typeof nc.oninput=="function"}Po=Ro}else Po=!1;ec=Po&&(!document.documentMode||9<document.documentMode)}function tc(){ii&&(ii.detachEvent("onpropertychange",rc),ai=ii=null)}function rc(e){if(e.propertyName==="value"&&ra(ai)){var n=[];Zu(n,ai,e,rs(e)),Vs(Kh,n)}}function Jh(e,n,t){e==="focusin"?(tc(),ii=n,ai=t,ii.attachEvent("onpropertychange",rc)):e==="focusout"&&tc()}function Xh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ra(ai)}function Zh(e,n){if(e==="click")return ra(n)}function em(e,n){if(e==="input"||e==="change")return ra(n)}function nm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var st=typeof Object.is=="function"?Object.is:nm;function oi(e,n){if(st(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!v.call(n,o)||!st(e[o],n[o]))return!1}return!0}function sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ic(e,n){var t=sc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=sc(t)}}function ac(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ac(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function oc(){for(var e=window,n=xr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=xr(e.document)}return n}function Ao(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function tm(e){var n=oc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ac(t.ownerDocument.documentElement,t)){if(r!==null&&Ao(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,u=Math.min(r.start,o);r=r.end===void 0?u:Math.min(r.end,o),!e.extend&&u>r&&(o=r,r=u,u=o),o=ic(t,u);var h=ic(t,r);o&&h&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),u>r?(e.addRange(n),e.extend(h.node,h.offset)):(n.setEnd(h.node,h.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rm=f&&"documentMode"in document&&11>=document.documentMode,gs=null,Io=null,li=null,Lo=!1;function lc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Lo||gs==null||gs!==xr(r)||(r=gs,"selectionStart"in r&&Ao(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),li&&oi(li,r)||(li=r,r=oa(Io,"onSelect"),0<r.length&&(n=new So("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=gs)))}function sa(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ys={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},Oo={},uc={};f&&(uc=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function ia(e){if(Oo[e])return Oo[e];if(!ys[e])return e;var n=ys[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in uc)return Oo[e]=n[t];return e}var cc=ia("animationend"),dc=ia("animationiteration"),pc=ia("animationstart"),hc=ia("transitionend"),mc=new Map,fc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(e,n){mc.set(e,n),p(n,[e])}for(var Do=0;Do<fc.length;Do++){var zo=fc[Do],sm=zo.toLowerCase(),im=zo[0].toUpperCase()+zo.slice(1);sr(sm,"on"+im)}sr(cc,"onAnimationEnd"),sr(dc,"onAnimationIteration"),sr(pc,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(hc,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),am=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function gc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,$i(r,n,void 0,e),e.currentTarget=null}function yc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var u=void 0;if(n)for(var h=r.length-1;0<=h;h--){var y=r[h],b=y.instance,N=y.currentTarget;if(y=y.listener,b!==u&&o.isPropagationStopped())break e;gc(o,y,N),u=b}else for(h=0;h<r.length;h++){if(y=r[h],b=y.instance,N=y.currentTarget,y=y.listener,b!==u&&o.isPropagationStopped())break e;gc(o,y,N),u=b}}}if(er)throw e=Ys,er=!1,Ys=null,e}function ze(e,n){var t=n[qo];t===void 0&&(t=n[qo]=new Set);var r=e+"__bubble";t.has(r)||(vc(n,e,2,!1),t.add(r))}function Mo(e,n,t){var r=0;n&&(r|=4),vc(t,e,r,n)}var aa="_reactListening"+Math.random().toString(36).slice(2);function ci(e){if(!e[aa]){e[aa]=!0,c.forEach(function(t){t!=="selectionchange"&&(am.has(t)||Mo(t,!1,e),Mo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[aa]||(n[aa]=!0,Mo("selectionchange",!1,n))}}function vc(e,n,t,r){switch(At(n)){case 1:var o=me;break;case 4:o=Ke;break;default:o=Tn}t=o.bind(null,n,t,e),o=void 0,!Xt||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Fo(e,n,t,r,o){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var h=r.tag;if(h===3||h===4){var y=r.stateNode.containerInfo;if(y===o||y.nodeType===8&&y.parentNode===o)break;if(h===4)for(h=r.return;h!==null;){var b=h.tag;if((b===3||b===4)&&(b=h.stateNode.containerInfo,b===o||b.nodeType===8&&b.parentNode===o))return;h=h.return}for(;y!==null;){if(h=Ir(y),h===null)return;if(b=h.tag,b===5||b===6){r=u=h;continue e}y=y.parentNode}}r=r.return}Vs(function(){var N=u,M=rs(t),U=[];e:{var D=mc.get(e);if(D!==void 0){var V=So,K=e;switch(e){case"keypress":if(ea(t)===0)break e;case"keydown":case"keyup":V=Dh;break;case"focusin":K="focus",V=To;break;case"focusout":K="blur",V=To;break;case"beforeblur":case"afterblur":V=To;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=$u;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Fh;break;case cc:case dc:case pc:V=Th;break;case hc:V=Wh;break;case"scroll":V=bh;break;case"wheel":V=Hh;break;case"copy":case"cut":case"paste":V=Nh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Vu}var J=(n&4)!==0,Qe=!J&&e==="scroll",T=J?D!==null?D+"Capture":null:D;J=[];for(var S=N,E;S!==null;){E=S;var B=E.stateNode;if(E.tag===5&&B!==null&&(E=B,T!==null&&(B=Jt(S,T),B!=null&&J.push(di(S,B,E)))),Qe)break;S=S.return}0<J.length&&(D=new V(D,K,null,t,M),U.push({event:D,listeners:J}))}}if((n&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",D&&t!==ts&&(K=t.relatedTarget||t.fromElement)&&(Ir(K)||K[It]))break e;if((V||D)&&(D=M.window===M?M:(D=M.ownerDocument)?D.defaultView||D.parentWindow:window,V?(K=t.relatedTarget||t.toElement,V=N,K=K?Ir(K):null,K!==null&&(Qe=et(K),K!==Qe||K.tag!==5&&K.tag!==6)&&(K=null)):(V=null,K=N),V!==K)){if(J=$u,B="onMouseLeave",T="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(J=Vu,B="onPointerLeave",T="onPointerEnter",S="pointer"),Qe=V==null?D:ws(V),E=K==null?D:ws(K),D=new J(B,S+"leave",V,t,M),D.target=Qe,D.relatedTarget=E,B=null,Ir(M)===N&&(J=new J(T,S+"enter",K,t,M),J.target=E,J.relatedTarget=Qe,B=J),Qe=B,V&&K)n:{for(J=V,T=K,S=0,E=J;E;E=vs(E))S++;for(E=0,B=T;B;B=vs(B))E++;for(;0<S-E;)J=vs(J),S--;for(;0<E-S;)T=vs(T),E--;for(;S--;){if(J===T||T!==null&&J===T.alternate)break n;J=vs(J),T=vs(T)}J=null}else J=null;V!==null&&xc(U,D,V,J,!1),K!==null&&Qe!==null&&xc(U,Qe,K,J,!0)}}e:{if(D=N?ws(N):window,V=D.nodeName&&D.nodeName.toLowerCase(),V==="select"||V==="input"&&D.type==="file")var ne=Qh;else if(Xu(D))if(ec)ne=em;else{ne=Xh;var se=Jh}else(V=D.nodeName)&&V.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(ne=Zh);if(ne&&(ne=ne(e,N))){Zu(U,ne,t,M);break e}se&&se(e,D,N),e==="focusout"&&(se=D._wrapperState)&&se.controlled&&D.type==="number"&&kr(D,"number",D.value)}switch(se=N?ws(N):window,e){case"focusin":(Xu(se)||se.contentEditable==="true")&&(gs=se,Io=N,li=null);break;case"focusout":li=Io=gs=null;break;case"mousedown":Lo=!0;break;case"contextmenu":case"mouseup":case"dragend":Lo=!1,lc(U,t,M);break;case"selectionchange":if(rm)break;case"keydown":case"keyup":lc(U,t,M)}var ie;if(No)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else fs?Qu(e,t)&&(le="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(le="onCompositionStart");le&&(Yu&&t.locale!=="ko"&&(fs||le!=="onCompositionStart"?le==="onCompositionEnd"&&fs&&(ie=Bu()):(qe=M,hs="value"in qe?qe.value:qe.textContent,fs=!0)),se=oa(N,le),0<se.length&&(le=new qu(le,e,null,t,M),U.push({event:le,listeners:se}),ie?le.data=ie:(ie=Ju(t),ie!==null&&(le.data=ie)))),(ie=qh?Vh(e,t):Yh(e,t))&&(N=oa(N,"onBeforeInput"),0<N.length&&(M=new qu("onBeforeInput","beforeinput",null,t,M),U.push({event:M,listeners:N}),M.data=ie))}yc(U,n)})}function di(e,n,t){return{instance:e,listener:n,currentTarget:t}}function oa(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,u=o.stateNode;o.tag===5&&u!==null&&(o=u,u=Jt(e,t),u!=null&&r.unshift(di(e,u,o)),u=Jt(e,n),u!=null&&r.push(di(e,u,o))),e=e.return}return r}function vs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xc(e,n,t,r,o){for(var u=n._reactName,h=[];t!==null&&t!==r;){var y=t,b=y.alternate,N=y.stateNode;if(b!==null&&b===r)break;y.tag===5&&N!==null&&(y=N,o?(b=Jt(t,u),b!=null&&h.unshift(di(t,b,y))):o||(b=Jt(t,u),b!=null&&h.push(di(t,b,y)))),t=t.return}h.length!==0&&e.push({event:n,listeners:h})}var om=/\r\n?/g,lm=/\u0000|\uFFFD/g;function wc(e){return(typeof e=="string"?e:""+e).replace(om,`
`).replace(lm,"")}function la(e,n,t){if(n=wc(n),wc(e)!==n&&t)throw Error(l(425))}function ua(){}var Uo=null,Wo=null;function Bo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ho=typeof setTimeout=="function"?setTimeout:void 0,um=typeof clearTimeout=="function"?clearTimeout:void 0,kc=typeof Promise=="function"?Promise:void 0,cm=typeof queueMicrotask=="function"?queueMicrotask:typeof kc<"u"?function(e){return kc.resolve(null).then(e).catch(dm)}:Ho;function dm(e){setTimeout(function(){throw e})}function $o(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),A(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);A(n)}function ir(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function bc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var xs=Math.random().toString(36).slice(2),yt="__reactFiber$"+xs,pi="__reactProps$"+xs,It="__reactContainer$"+xs,qo="__reactEvents$"+xs,pm="__reactListeners$"+xs,hm="__reactHandles$"+xs;function Ir(e){var n=e[yt];if(n)return n;for(var t=e.parentNode;t;){if(n=t[It]||t[yt]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=bc(e);e!==null;){if(t=e[yt])return t;e=bc(e)}return n}e=t,t=e.parentNode}return null}function hi(e){return e=e[yt]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ws(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function ca(e){return e[pi]||null}var Vo=[],ks=-1;function ar(e){return{current:e}}function Me(e){0>ks||(e.current=Vo[ks],Vo[ks]=null,ks--)}function De(e,n){ks++,Vo[ks]=e.current,e.current=n}var or={},mn=ar(or),En=ar(!1),Lr=or;function bs(e,n){var t=e.type.contextTypes;if(!t)return or;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},u;for(u in t)o[u]=n[u];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Nn(e){return e=e.childContextTypes,e!=null}function da(){Me(En),Me(mn)}function _c(e,n,t){if(mn.current!==or)throw Error(l(168));De(mn,n),De(En,t)}function Sc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(l(108,Re(e)||"Unknown",o));return $({},t,r)}function pa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||or,Lr=mn.current,De(mn,e),De(En,En.current),!0}function Cc(e,n,t){var r=e.stateNode;if(!r)throw Error(l(169));t?(e=Sc(e,n,Lr),r.__reactInternalMemoizedMergedChildContext=e,Me(En),Me(mn),De(mn,e)):Me(En),De(En,t)}var Lt=null,ha=!1,Yo=!1;function jc(e){Lt===null?Lt=[e]:Lt.push(e)}function mm(e){ha=!0,jc(e)}function lr(){if(!Yo&&Lt!==null){Yo=!0;var e=0,n=be;try{var t=Lt;for(be=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Lt=null,ha=!1}catch(o){throw Lt!==null&&(Lt=Lt.slice(e+1)),Et(Qs,lr),o}finally{be=n,Yo=!1}}return null}var _s=[],Ss=0,ma=null,fa=0,Vn=[],Yn=0,Or=null,Ot=1,Dt="";function Dr(e,n){_s[Ss++]=fa,_s[Ss++]=ma,ma=e,fa=n}function Tc(e,n,t){Vn[Yn++]=Ot,Vn[Yn++]=Dt,Vn[Yn++]=Or,Or=e;var r=Ot;e=Dt;var o=32-Cn(r)-1;r&=~(1<<o),t+=1;var u=32-Cn(n)+o;if(30<u){var h=o-o%5;u=(r&(1<<h)-1).toString(32),r>>=h,o-=h,Ot=1<<32-Cn(n)+o|t<<o|r,Dt=u+e}else Ot=1<<u|t<<o|r,Dt=e}function Go(e){e.return!==null&&(Dr(e,1),Tc(e,1,0))}function Ko(e){for(;e===ma;)ma=_s[--Ss],_s[Ss]=null,fa=_s[--Ss],_s[Ss]=null;for(;e===Or;)Or=Vn[--Yn],Vn[Yn]=null,Dt=Vn[--Yn],Vn[Yn]=null,Ot=Vn[--Yn],Vn[Yn]=null}var zn=null,Mn=null,We=!1,it=null;function Ec(e,n){var t=Jn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Nc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,zn=e,Mn=ir(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,zn=e,Mn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Or!==null?{id:Ot,overflow:Dt}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Jn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,zn=e,Mn=null,!0):!1;default:return!1}}function Qo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jo(e){if(We){var n=Mn;if(n){var t=n;if(!Nc(e,n)){if(Qo(e))throw Error(l(418));n=ir(t.nextSibling);var r=zn;n&&Nc(e,n)?Ec(r,t):(e.flags=e.flags&-4097|2,We=!1,zn=e)}}else{if(Qo(e))throw Error(l(418));e.flags=e.flags&-4097|2,We=!1,zn=e}}}function Pc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zn=e}function ga(e){if(e!==zn)return!1;if(!We)return Pc(e),We=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Bo(e.type,e.memoizedProps)),n&&(n=Mn)){if(Qo(e))throw Rc(),Error(l(418));for(;n;)Ec(e,n),n=ir(n.nextSibling)}if(Pc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Mn=ir(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Mn=null}}else Mn=zn?ir(e.stateNode.nextSibling):null;return!0}function Rc(){for(var e=Mn;e;)e=ir(e.nextSibling)}function Cs(){Mn=zn=null,We=!1}function Xo(e){it===null?it=[e]:it.push(e)}var fm=ae.ReactCurrentBatchConfig;function mi(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(l(309));var r=t.stateNode}if(!r)throw Error(l(147,e));var o=r,u=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===u?n.ref:(n=function(h){var y=o.refs;h===null?delete y[u]:y[u]=h},n._stringRef=u,n)}if(typeof e!="string")throw Error(l(284));if(!t._owner)throw Error(l(290,e))}return e}function ya(e,n){throw e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ac(e){var n=e._init;return n(e._payload)}function Ic(e){function n(T,S){if(e){var E=T.deletions;E===null?(T.deletions=[S],T.flags|=16):E.push(S)}}function t(T,S){if(!e)return null;for(;S!==null;)n(T,S),S=S.sibling;return null}function r(T,S){for(T=new Map;S!==null;)S.key!==null?T.set(S.key,S):T.set(S.index,S),S=S.sibling;return T}function o(T,S){return T=gr(T,S),T.index=0,T.sibling=null,T}function u(T,S,E){return T.index=E,e?(E=T.alternate,E!==null?(E=E.index,E<S?(T.flags|=2,S):E):(T.flags|=2,S)):(T.flags|=1048576,S)}function h(T){return e&&T.alternate===null&&(T.flags|=2),T}function y(T,S,E,B){return S===null||S.tag!==6?(S=Hl(E,T.mode,B),S.return=T,S):(S=o(S,E),S.return=T,S)}function b(T,S,E,B){var ne=E.type;return ne===X?M(T,S,E.props.children,B,E.key):S!==null&&(S.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===en&&Ac(ne)===S.type)?(B=o(S,E.props),B.ref=mi(T,S,E),B.return=T,B):(B=Wa(E.type,E.key,E.props,null,T.mode,B),B.ref=mi(T,S,E),B.return=T,B)}function N(T,S,E,B){return S===null||S.tag!==4||S.stateNode.containerInfo!==E.containerInfo||S.stateNode.implementation!==E.implementation?(S=$l(E,T.mode,B),S.return=T,S):(S=o(S,E.children||[]),S.return=T,S)}function M(T,S,E,B,ne){return S===null||S.tag!==7?(S=$r(E,T.mode,B,ne),S.return=T,S):(S=o(S,E),S.return=T,S)}function U(T,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Hl(""+S,T.mode,E),S.return=T,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ce:return E=Wa(S.type,S.key,S.props,null,T.mode,E),E.ref=mi(T,null,S),E.return=T,E;case ye:return S=$l(S,T.mode,E),S.return=T,S;case en:var B=S._init;return U(T,B(S._payload),E)}if(hn(S)||ee(S))return S=$r(S,T.mode,E,null),S.return=T,S;ya(T,S)}return null}function D(T,S,E,B){var ne=S!==null?S.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return ne!==null?null:y(T,S,""+E,B);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ce:return E.key===ne?b(T,S,E,B):null;case ye:return E.key===ne?N(T,S,E,B):null;case en:return ne=E._init,D(T,S,ne(E._payload),B)}if(hn(E)||ee(E))return ne!==null?null:M(T,S,E,B,null);ya(T,E)}return null}function V(T,S,E,B,ne){if(typeof B=="string"&&B!==""||typeof B=="number")return T=T.get(E)||null,y(S,T,""+B,ne);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case ce:return T=T.get(B.key===null?E:B.key)||null,b(S,T,B,ne);case ye:return T=T.get(B.key===null?E:B.key)||null,N(S,T,B,ne);case en:var se=B._init;return V(T,S,E,se(B._payload),ne)}if(hn(B)||ee(B))return T=T.get(E)||null,M(S,T,B,ne,null);ya(S,B)}return null}function K(T,S,E,B){for(var ne=null,se=null,ie=S,le=S=0,on=null;ie!==null&&le<E.length;le++){ie.index>le?(on=ie,ie=null):on=ie.sibling;var _e=D(T,ie,E[le],B);if(_e===null){ie===null&&(ie=on);break}e&&ie&&_e.alternate===null&&n(T,ie),S=u(_e,S,le),se===null?ne=_e:se.sibling=_e,se=_e,ie=on}if(le===E.length)return t(T,ie),We&&Dr(T,le),ne;if(ie===null){for(;le<E.length;le++)ie=U(T,E[le],B),ie!==null&&(S=u(ie,S,le),se===null?ne=ie:se.sibling=ie,se=ie);return We&&Dr(T,le),ne}for(ie=r(T,ie);le<E.length;le++)on=V(ie,T,le,E[le],B),on!==null&&(e&&on.alternate!==null&&ie.delete(on.key===null?le:on.key),S=u(on,S,le),se===null?ne=on:se.sibling=on,se=on);return e&&ie.forEach(function(yr){return n(T,yr)}),We&&Dr(T,le),ne}function J(T,S,E,B){var ne=ee(E);if(typeof ne!="function")throw Error(l(150));if(E=ne.call(E),E==null)throw Error(l(151));for(var se=ne=null,ie=S,le=S=0,on=null,_e=E.next();ie!==null&&!_e.done;le++,_e=E.next()){ie.index>le?(on=ie,ie=null):on=ie.sibling;var yr=D(T,ie,_e.value,B);if(yr===null){ie===null&&(ie=on);break}e&&ie&&yr.alternate===null&&n(T,ie),S=u(yr,S,le),se===null?ne=yr:se.sibling=yr,se=yr,ie=on}if(_e.done)return t(T,ie),We&&Dr(T,le),ne;if(ie===null){for(;!_e.done;le++,_e=E.next())_e=U(T,_e.value,B),_e!==null&&(S=u(_e,S,le),se===null?ne=_e:se.sibling=_e,se=_e);return We&&Dr(T,le),ne}for(ie=r(T,ie);!_e.done;le++,_e=E.next())_e=V(ie,T,le,_e.value,B),_e!==null&&(e&&_e.alternate!==null&&ie.delete(_e.key===null?le:_e.key),S=u(_e,S,le),se===null?ne=_e:se.sibling=_e,se=_e);return e&&ie.forEach(function(Gm){return n(T,Gm)}),We&&Dr(T,le),ne}function Qe(T,S,E,B){if(typeof E=="object"&&E!==null&&E.type===X&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ce:e:{for(var ne=E.key,se=S;se!==null;){if(se.key===ne){if(ne=E.type,ne===X){if(se.tag===7){t(T,se.sibling),S=o(se,E.props.children),S.return=T,T=S;break e}}else if(se.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===en&&Ac(ne)===se.type){t(T,se.sibling),S=o(se,E.props),S.ref=mi(T,se,E),S.return=T,T=S;break e}t(T,se);break}else n(T,se);se=se.sibling}E.type===X?(S=$r(E.props.children,T.mode,B,E.key),S.return=T,T=S):(B=Wa(E.type,E.key,E.props,null,T.mode,B),B.ref=mi(T,S,E),B.return=T,T=B)}return h(T);case ye:e:{for(se=E.key;S!==null;){if(S.key===se)if(S.tag===4&&S.stateNode.containerInfo===E.containerInfo&&S.stateNode.implementation===E.implementation){t(T,S.sibling),S=o(S,E.children||[]),S.return=T,T=S;break e}else{t(T,S);break}else n(T,S);S=S.sibling}S=$l(E,T.mode,B),S.return=T,T=S}return h(T);case en:return se=E._init,Qe(T,S,se(E._payload),B)}if(hn(E))return K(T,S,E,B);if(ee(E))return J(T,S,E,B);ya(T,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,S!==null&&S.tag===6?(t(T,S.sibling),S=o(S,E),S.return=T,T=S):(t(T,S),S=Hl(E,T.mode,B),S.return=T,T=S),h(T)):t(T,S)}return Qe}var js=Ic(!0),Lc=Ic(!1),va=ar(null),xa=null,Ts=null,Zo=null;function el(){Zo=Ts=xa=null}function nl(e){var n=va.current;Me(va),e._currentValue=n}function tl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Es(e,n){xa=e,Zo=Ts=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Pn=!0),e.firstContext=null)}function Gn(e){var n=e._currentValue;if(Zo!==e)if(e={context:e,memoizedValue:n,next:null},Ts===null){if(xa===null)throw Error(l(308));Ts=e,xa.dependencies={lanes:0,firstContext:e}}else Ts=Ts.next=e;return n}var zr=null;function rl(e){zr===null?zr=[e]:zr.push(e)}function Oc(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,rl(n)):(t.next=o.next,o.next=t),n.interleaved=t,zt(e,r)}function zt(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ur=!1;function sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function cr(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(we&2)!==0){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,zt(e,t)}return o=r.interleaved,o===null?(n.next=n,rl(r)):(n.next=o.next,o.next=n),r.interleaved=n,zt(e,t)}function wa(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Tr(e,t)}}function zc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var h={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};u===null?o=u=h:u=u.next=h,t=t.next}while(t!==null);u===null?o=u=n:u=u.next=n}else o=u=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ka(e,n,t,r){var o=e.updateQueue;ur=!1;var u=o.firstBaseUpdate,h=o.lastBaseUpdate,y=o.shared.pending;if(y!==null){o.shared.pending=null;var b=y,N=b.next;b.next=null,h===null?u=N:h.next=N,h=b;var M=e.alternate;M!==null&&(M=M.updateQueue,y=M.lastBaseUpdate,y!==h&&(y===null?M.firstBaseUpdate=N:y.next=N,M.lastBaseUpdate=b))}if(u!==null){var U=o.baseState;h=0,M=N=b=null,y=u;do{var D=y.lane,V=y.eventTime;if((r&D)===D){M!==null&&(M=M.next={eventTime:V,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var K=e,J=y;switch(D=n,V=t,J.tag){case 1:if(K=J.payload,typeof K=="function"){U=K.call(V,U,D);break e}U=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=J.payload,D=typeof K=="function"?K.call(V,U,D):K,D==null)break e;U=$({},U,D);break e;case 2:ur=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,D=o.effects,D===null?o.effects=[y]:D.push(y))}else V={eventTime:V,lane:D,tag:y.tag,payload:y.payload,callback:y.callback,next:null},M===null?(N=M=V,b=U):M=M.next=V,h|=D;if(y=y.next,y===null){if(y=o.shared.pending,y===null)break;D=y,y=D.next,D.next=null,o.lastBaseUpdate=D,o.shared.pending=null}}while(!0);if(M===null&&(b=U),o.baseState=b,o.firstBaseUpdate=N,o.lastBaseUpdate=M,n=o.shared.interleaved,n!==null){o=n;do h|=o.lane,o=o.next;while(o!==n)}else u===null&&(o.shared.lanes=0);Ur|=h,e.lanes=h,e.memoizedState=U}}function Mc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(l(191,o));o.call(r)}}}var fi={},vt=ar(fi),gi=ar(fi),yi=ar(fi);function Mr(e){if(e===fi)throw Error(l(174));return e}function il(e,n){switch(De(yi,n),De(gi,e),De(vt,fi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:br(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=br(n,e)}Me(vt),De(vt,n)}function Ns(){Me(vt),Me(gi),Me(yi)}function Fc(e){Mr(yi.current);var n=Mr(vt.current),t=br(n,e.type);n!==t&&(De(gi,e),De(vt,t))}function al(e){gi.current===e&&(Me(vt),Me(gi))}var Ve=ar(0);function ba(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ol=[];function ll(){for(var e=0;e<ol.length;e++)ol[e]._workInProgressVersionPrimary=null;ol.length=0}var _a=ae.ReactCurrentDispatcher,ul=ae.ReactCurrentBatchConfig,Fr=0,Ye=null,nn=null,sn=null,Sa=!1,vi=!1,xi=0,gm=0;function fn(){throw Error(l(321))}function cl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!st(e[t],n[t]))return!1;return!0}function dl(e,n,t,r,o,u){if(Fr=u,Ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_a.current=e===null||e.memoizedState===null?wm:km,e=t(r,o),vi){u=0;do{if(vi=!1,xi=0,25<=u)throw Error(l(301));u+=1,sn=nn=null,n.updateQueue=null,_a.current=bm,e=t(r,o)}while(vi)}if(_a.current=Ta,n=nn!==null&&nn.next!==null,Fr=0,sn=nn=Ye=null,Sa=!1,n)throw Error(l(300));return e}function pl(){var e=xi!==0;return xi=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Ye.memoizedState=sn=e:sn=sn.next=e,sn}function Kn(){if(nn===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=nn.next;var n=sn===null?Ye.memoizedState:sn.next;if(n!==null)sn=n,nn=e;else{if(e===null)throw Error(l(310));nn=e,e={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},sn===null?Ye.memoizedState=sn=e:sn=sn.next=e}return sn}function wi(e,n){return typeof n=="function"?n(e):n}function hl(e){var n=Kn(),t=n.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var r=nn,o=r.baseQueue,u=t.pending;if(u!==null){if(o!==null){var h=o.next;o.next=u.next,u.next=h}r.baseQueue=o=u,t.pending=null}if(o!==null){u=o.next,r=r.baseState;var y=h=null,b=null,N=u;do{var M=N.lane;if((Fr&M)===M)b!==null&&(b=b.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),r=N.hasEagerState?N.eagerState:e(r,N.action);else{var U={lane:M,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};b===null?(y=b=U,h=r):b=b.next=U,Ye.lanes|=M,Ur|=M}N=N.next}while(N!==null&&N!==u);b===null?h=r:b.next=y,st(r,n.memoizedState)||(Pn=!0),n.memoizedState=r,n.baseState=h,n.baseQueue=b,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do u=o.lane,Ye.lanes|=u,Ur|=u,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ml(e){var n=Kn(),t=n.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,u=n.memoizedState;if(o!==null){t.pending=null;var h=o=o.next;do u=e(u,h.action),h=h.next;while(h!==o);st(u,n.memoizedState)||(Pn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),t.lastRenderedState=u}return[u,r]}function Uc(){}function Wc(e,n){var t=Ye,r=Kn(),o=n(),u=!st(r.memoizedState,o);if(u&&(r.memoizedState=o,Pn=!0),r=r.queue,fl($c.bind(null,t,r,e),[e]),r.getSnapshot!==n||u||sn!==null&&sn.memoizedState.tag&1){if(t.flags|=2048,ki(9,Hc.bind(null,t,r,o,n),void 0,null),an===null)throw Error(l(349));(Fr&30)!==0||Bc(t,n,o)}return o}function Bc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ye.updateQueue,n===null?(n={lastEffect:null,stores:null},Ye.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Hc(e,n,t,r){n.value=t,n.getSnapshot=r,qc(n)&&Vc(e)}function $c(e,n,t){return t(function(){qc(n)&&Vc(e)})}function qc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!st(e,t)}catch{return!0}}function Vc(e){var n=zt(e,1);n!==null&&ut(n,e,1,-1)}function Yc(e){var n=xt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:e},n.queue=e,e=e.dispatch=xm.bind(null,Ye,e),[n.memoizedState,e]}function ki(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Ye.updateQueue,n===null?(n={lastEffect:null,stores:null},Ye.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Gc(){return Kn().memoizedState}function Ca(e,n,t,r){var o=xt();Ye.flags|=e,o.memoizedState=ki(1|n,t,void 0,r===void 0?null:r)}function ja(e,n,t,r){var o=Kn();r=r===void 0?null:r;var u=void 0;if(nn!==null){var h=nn.memoizedState;if(u=h.destroy,r!==null&&cl(r,h.deps)){o.memoizedState=ki(n,t,u,r);return}}Ye.flags|=e,o.memoizedState=ki(1|n,t,u,r)}function Kc(e,n){return Ca(8390656,8,e,n)}function fl(e,n){return ja(2048,8,e,n)}function Qc(e,n){return ja(4,2,e,n)}function Jc(e,n){return ja(4,4,e,n)}function Xc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zc(e,n,t){return t=t!=null?t.concat([e]):null,ja(4,4,Xc.bind(null,n,e),t)}function gl(){}function ed(e,n){var t=Kn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&cl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function nd(e,n){var t=Kn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&cl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function td(e,n,t){return(Fr&21)===0?(e.baseState&&(e.baseState=!1,Pn=!0),e.memoizedState=t):(st(t,n)||(t=Ji(),Ye.lanes|=t,Ur|=t,e.baseState=!0),n)}function ym(e,n){var t=be;be=t!==0&&4>t?t:4,e(!0);var r=ul.transition;ul.transition={};try{e(!1),n()}finally{be=t,ul.transition=r}}function rd(){return Kn().memoizedState}function vm(e,n,t){var r=mr(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},sd(e))id(n,t);else if(t=Oc(e,n,t,r),t!==null){var o=kn();ut(t,e,r,o),ad(t,n,r)}}function xm(e,n,t){var r=mr(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(sd(e))id(n,o);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var h=n.lastRenderedState,y=u(h,t);if(o.hasEagerState=!0,o.eagerState=y,st(y,h)){var b=n.interleaved;b===null?(o.next=o,rl(n)):(o.next=b.next,b.next=o),n.interleaved=o;return}}catch{}finally{}t=Oc(e,n,o,r),t!==null&&(o=kn(),ut(t,e,r,o),ad(t,n,r))}}function sd(e){var n=e.alternate;return e===Ye||n!==null&&n===Ye}function id(e,n){vi=Sa=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ad(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Tr(e,t)}}var Ta={readContext:Gn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},wm={readContext:Gn,useCallback:function(e,n){return xt().memoizedState=[e,n===void 0?null:n],e},useContext:Gn,useEffect:Kc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ca(4194308,4,Xc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ca(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ca(4,2,e,n)},useMemo:function(e,n){var t=xt();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=xt();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=vm.bind(null,Ye,e),[r.memoizedState,e]},useRef:function(e){var n=xt();return e={current:e},n.memoizedState=e},useState:Yc,useDebugValue:gl,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=Yc(!1),n=e[0];return e=ym.bind(null,e[1]),xt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Ye,o=xt();if(We){if(t===void 0)throw Error(l(407));t=t()}else{if(t=n(),an===null)throw Error(l(349));(Fr&30)!==0||Bc(r,n,t)}o.memoizedState=t;var u={value:t,getSnapshot:n};return o.queue=u,Kc($c.bind(null,r,u,e),[e]),r.flags|=2048,ki(9,Hc.bind(null,r,u,t,n),void 0,null),t},useId:function(){var e=xt(),n=an.identifierPrefix;if(We){var t=Dt,r=Ot;t=(r&~(1<<32-Cn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=xi++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=gm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},km={readContext:Gn,useCallback:ed,useContext:Gn,useEffect:fl,useImperativeHandle:Zc,useInsertionEffect:Qc,useLayoutEffect:Jc,useMemo:nd,useReducer:hl,useRef:Gc,useState:function(){return hl(wi)},useDebugValue:gl,useDeferredValue:function(e){var n=Kn();return td(n,nn.memoizedState,e)},useTransition:function(){var e=hl(wi)[0],n=Kn().memoizedState;return[e,n]},useMutableSource:Uc,useSyncExternalStore:Wc,useId:rd,unstable_isNewReconciler:!1},bm={readContext:Gn,useCallback:ed,useContext:Gn,useEffect:fl,useImperativeHandle:Zc,useInsertionEffect:Qc,useLayoutEffect:Jc,useMemo:nd,useReducer:ml,useRef:Gc,useState:function(){return ml(wi)},useDebugValue:gl,useDeferredValue:function(e){var n=Kn();return nn===null?n.memoizedState=e:td(n,nn.memoizedState,e)},useTransition:function(){var e=ml(wi)[0],n=Kn().memoizedState;return[e,n]},useMutableSource:Uc,useSyncExternalStore:Wc,useId:rd,unstable_isNewReconciler:!1};function at(e,n){if(e&&e.defaultProps){n=$({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function yl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:$({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ea={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=kn(),o=mr(e),u=Mt(r,o);u.payload=n,t!=null&&(u.callback=t),n=cr(e,u,o),n!==null&&(ut(n,e,o,r),wa(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=kn(),o=mr(e),u=Mt(r,o);u.tag=1,u.payload=n,t!=null&&(u.callback=t),n=cr(e,u,o),n!==null&&(ut(n,e,o,r),wa(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=kn(),r=mr(e),o=Mt(t,r);o.tag=2,n!=null&&(o.callback=n),n=cr(e,o,r),n!==null&&(ut(n,e,r,t),wa(n,e,r))}};function od(e,n,t,r,o,u,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,h):n.prototype&&n.prototype.isPureReactComponent?!oi(t,r)||!oi(o,u):!0}function ld(e,n,t){var r=!1,o=or,u=n.contextType;return typeof u=="object"&&u!==null?u=Gn(u):(o=Nn(n)?Lr:mn.current,r=n.contextTypes,u=(r=r!=null)?bs(e,o):or),n=new n(t,u),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ea,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=u),n}function ud(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ea.enqueueReplaceState(n,n.state,null)}function vl(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},sl(e);var u=n.contextType;typeof u=="object"&&u!==null?o.context=Gn(u):(u=Nn(n)?Lr:mn.current,o.context=bs(e,u)),o.state=e.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(yl(e,n,u,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Ea.enqueueReplaceState(o,o.state,null),ka(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ps(e,n){try{var t="",r=n;do t+=ve(r),r=r.return;while(r);var o=t}catch(u){o=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:n,stack:o,digest:null}}function xl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function wl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var _m=typeof WeakMap=="function"?WeakMap:Map;function cd(e,n,t){t=Mt(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Oa||(Oa=!0,Ol=r),wl(e,n)},t}function dd(e,n,t){t=Mt(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){wl(e,n)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){wl(e,n),typeof r!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})}),t}function pd(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new _m;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=zm.bind(null,e,n,t),n.then(e,e))}function hd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function md(e,n,t,r,o){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Mt(-1,1),n.tag=2,cr(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Sm=ae.ReactCurrentOwner,Pn=!1;function wn(e,n,t,r){n.child=e===null?Lc(n,null,t,r):js(n,e.child,t,r)}function fd(e,n,t,r,o){t=t.render;var u=n.ref;return Es(n,o),r=dl(e,n,t,r,u,o),t=pl(),e!==null&&!Pn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Ft(e,n,o)):(We&&t&&Go(n),n.flags|=1,wn(e,n,r,o),n.child)}function gd(e,n,t,r,o){if(e===null){var u=t.type;return typeof u=="function"&&!Bl(u)&&u.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=u,yd(e,n,u,r,o)):(e=Wa(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,(e.lanes&o)===0){var h=u.memoizedProps;if(t=t.compare,t=t!==null?t:oi,t(h,r)&&e.ref===n.ref)return Ft(e,n,o)}return n.flags|=1,e=gr(u,r),e.ref=n.ref,e.return=n,n.child=e}function yd(e,n,t,r,o){if(e!==null){var u=e.memoizedProps;if(oi(u,r)&&e.ref===n.ref)if(Pn=!1,n.pendingProps=r=u,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Pn=!0);else return n.lanes=e.lanes,Ft(e,n,o)}return kl(e,n,t,r,o)}function vd(e,n,t){var r=n.pendingProps,o=r.children,u=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(As,Fn),Fn|=t;else{if((t&1073741824)===0)return e=u!==null?u.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,De(As,Fn),Fn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=u!==null?u.baseLanes:t,De(As,Fn),Fn|=r}else u!==null?(r=u.baseLanes|t,n.memoizedState=null):r=t,De(As,Fn),Fn|=r;return wn(e,n,o,t),n.child}function xd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function kl(e,n,t,r,o){var u=Nn(t)?Lr:mn.current;return u=bs(n,u),Es(n,o),t=dl(e,n,t,r,u,o),r=pl(),e!==null&&!Pn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Ft(e,n,o)):(We&&r&&Go(n),n.flags|=1,wn(e,n,t,o),n.child)}function wd(e,n,t,r,o){if(Nn(t)){var u=!0;pa(n)}else u=!1;if(Es(n,o),n.stateNode===null)Pa(e,n),ld(n,t,r),vl(n,t,r,o),r=!0;else if(e===null){var h=n.stateNode,y=n.memoizedProps;h.props=y;var b=h.context,N=t.contextType;typeof N=="object"&&N!==null?N=Gn(N):(N=Nn(t)?Lr:mn.current,N=bs(n,N));var M=t.getDerivedStateFromProps,U=typeof M=="function"||typeof h.getSnapshotBeforeUpdate=="function";U||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==r||b!==N)&&ud(n,h,r,N),ur=!1;var D=n.memoizedState;h.state=D,ka(n,r,h,o),b=n.memoizedState,y!==r||D!==b||En.current||ur?(typeof M=="function"&&(yl(n,t,M,r),b=n.memoizedState),(y=ur||od(n,t,y,r,D,b,N))?(U||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=b),h.props=r,h.state=b,h.context=N,r=y):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{h=n.stateNode,Dc(e,n),y=n.memoizedProps,N=n.type===n.elementType?y:at(n.type,y),h.props=N,U=n.pendingProps,D=h.context,b=t.contextType,typeof b=="object"&&b!==null?b=Gn(b):(b=Nn(t)?Lr:mn.current,b=bs(n,b));var V=t.getDerivedStateFromProps;(M=typeof V=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==U||D!==b)&&ud(n,h,r,b),ur=!1,D=n.memoizedState,h.state=D,ka(n,r,h,o);var K=n.memoizedState;y!==U||D!==K||En.current||ur?(typeof V=="function"&&(yl(n,t,V,r),K=n.memoizedState),(N=ur||od(n,t,N,r,D,K,b)||!1)?(M||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(r,K,b),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(r,K,b)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=K),h.props=r,h.state=K,h.context=b,r=N):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),r=!1)}return bl(e,n,t,r,u,o)}function bl(e,n,t,r,o,u){xd(e,n);var h=(n.flags&128)!==0;if(!r&&!h)return o&&Cc(n,t,!1),Ft(e,n,u);r=n.stateNode,Sm.current=n;var y=h&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&h?(n.child=js(n,e.child,null,u),n.child=js(n,null,y,u)):wn(e,n,y,u),n.memoizedState=r.state,o&&Cc(n,t,!0),n.child}function kd(e){var n=e.stateNode;n.pendingContext?_c(e,n.pendingContext,n.pendingContext!==n.context):n.context&&_c(e,n.context,!1),il(e,n.containerInfo)}function bd(e,n,t,r,o){return Cs(),Xo(o),n.flags|=256,wn(e,n,t,r),n.child}var _l={dehydrated:null,treeContext:null,retryLane:0};function Sl(e){return{baseLanes:e,cachePool:null,transitions:null}}function _d(e,n,t){var r=n.pendingProps,o=Ve.current,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(o&2)!==0),y?(u=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),De(Ve,o&1),e===null)return Jo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(h=r.children,e=r.fallback,u?(r=n.mode,u=n.child,h={mode:"hidden",children:h},(r&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=h):u=Ba(h,r,0,null),e=$r(e,r,t,null),u.return=n,e.return=n,u.sibling=e,n.child=u,n.child.memoizedState=Sl(t),n.memoizedState=_l,e):Cl(n,h));if(o=e.memoizedState,o!==null&&(y=o.dehydrated,y!==null))return Cm(e,n,h,r,y,o,t);if(u){u=r.fallback,h=n.mode,o=e.child,y=o.sibling;var b={mode:"hidden",children:r.children};return(h&1)===0&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=b,n.deletions=null):(r=gr(o,b),r.subtreeFlags=o.subtreeFlags&14680064),y!==null?u=gr(y,u):(u=$r(u,h,t,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,r=u,u=n.child,h=e.child.memoizedState,h=h===null?Sl(t):{baseLanes:h.baseLanes|t,cachePool:null,transitions:h.transitions},u.memoizedState=h,u.childLanes=e.childLanes&~t,n.memoizedState=_l,r}return u=e.child,e=u.sibling,r=gr(u,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Cl(e,n){return n=Ba({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Na(e,n,t,r){return r!==null&&Xo(r),js(n,e.child,null,t),e=Cl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Cm(e,n,t,r,o,u,h){if(t)return n.flags&256?(n.flags&=-257,r=xl(Error(l(422))),Na(e,n,h,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(u=r.fallback,o=n.mode,r=Ba({mode:"visible",children:r.children},o,0,null),u=$r(u,o,h,null),u.flags|=2,r.return=n,u.return=n,r.sibling=u,n.child=r,(n.mode&1)!==0&&js(n,e.child,null,h),n.child.memoizedState=Sl(h),n.memoizedState=_l,u);if((n.mode&1)===0)return Na(e,n,h,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var y=r.dgst;return r=y,u=Error(l(419)),r=xl(u,r,void 0),Na(e,n,h,r)}if(y=(h&e.childLanes)!==0,Pn||y){if(r=an,r!==null){switch(h&-h){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|h))!==0?0:o,o!==0&&o!==u.retryLane&&(u.retryLane=o,zt(e,o),ut(r,e,o,-1))}return Wl(),r=xl(Error(l(421))),Na(e,n,h,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Mm.bind(null,e),o._reactRetry=n,null):(e=u.treeContext,Mn=ir(o.nextSibling),zn=n,We=!0,it=null,e!==null&&(Vn[Yn++]=Ot,Vn[Yn++]=Dt,Vn[Yn++]=Or,Ot=e.id,Dt=e.overflow,Or=n),n=Cl(n,r.children),n.flags|=4096,n)}function Sd(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),tl(e.return,n,t)}function jl(e,n,t,r,o){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=t,u.tailMode=o)}function Cd(e,n,t){var r=n.pendingProps,o=r.revealOrder,u=r.tail;if(wn(e,n,r.children,t),r=Ve.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,t,n);else if(e.tag===19)Sd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(De(Ve,r),(n.mode&1)===0)n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&ba(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),jl(n,!1,o,t,u);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&ba(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}jl(n,!0,t,null,u);break;case"together":jl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Pa(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ft(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ur|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,t=gr(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=gr(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function jm(e,n,t){switch(n.tag){case 3:kd(n),Cs();break;case 5:Fc(n);break;case 1:Nn(n.type)&&pa(n);break;case 4:il(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;De(va,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(De(Ve,Ve.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?_d(e,n,t):(De(Ve,Ve.current&1),e=Ft(e,n,t),e!==null?e.sibling:null);De(Ve,Ve.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Cd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),De(Ve,Ve.current),r)break;return null;case 22:case 23:return n.lanes=0,vd(e,n,t)}return Ft(e,n,t)}var jd,Tl,Td,Ed;jd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Tl=function(){},Td=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Mr(vt.current);var u=null;switch(t){case"input":o=Us(e,o),r=Us(e,r),u=[];break;case"select":o=$({},o,{value:void 0}),r=$({},r,{value:void 0}),u=[];break;case"textarea":o=Xr(e,o),r=Xr(e,r),u=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ua)}Kt(t,r);var h;t=null;for(N in o)if(!r.hasOwnProperty(N)&&o.hasOwnProperty(N)&&o[N]!=null)if(N==="style"){var y=o[N];for(h in y)y.hasOwnProperty(h)&&(t||(t={}),t[h]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(d.hasOwnProperty(N)?u||(u=[]):(u=u||[]).push(N,null));for(N in r){var b=r[N];if(y=o!=null?o[N]:void 0,r.hasOwnProperty(N)&&b!==y&&(b!=null||y!=null))if(N==="style")if(y){for(h in y)!y.hasOwnProperty(h)||b&&b.hasOwnProperty(h)||(t||(t={}),t[h]="");for(h in b)b.hasOwnProperty(h)&&y[h]!==b[h]&&(t||(t={}),t[h]=b[h])}else t||(u||(u=[]),u.push(N,t)),t=b;else N==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,y=y?y.__html:void 0,b!=null&&y!==b&&(u=u||[]).push(N,b)):N==="children"?typeof b!="string"&&typeof b!="number"||(u=u||[]).push(N,""+b):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(d.hasOwnProperty(N)?(b!=null&&N==="onScroll"&&ze("scroll",e),u||y===b||(u=[])):(u=u||[]).push(N,b))}t&&(u=u||[]).push("style",t);var N=u;(n.updateQueue=N)&&(n.flags|=4)}},Ed=function(e,n,t,r){t!==r&&(n.flags|=4)};function bi(e,n){if(!We)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function gn(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Tm(e,n,t){var r=n.pendingProps;switch(Ko(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(n),null;case 1:return Nn(n.type)&&da(),gn(n),null;case 3:return r=n.stateNode,Ns(),Me(En),Me(mn),ll(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ga(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,it!==null&&(Ml(it),it=null))),Tl(e,n),gn(n),null;case 5:al(n);var o=Mr(yi.current);if(t=n.type,e!==null&&n.stateNode!=null)Td(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(l(166));return gn(n),null}if(e=Mr(vt.current),ga(n)){r=n.stateNode,t=n.type;var u=n.memoizedProps;switch(r[yt]=n,r[pi]=u,e=(n.mode&1)!==0,t){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(o=0;o<ui.length;o++)ze(ui[o],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":Ws(r,u),ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},ze("invalid",r);break;case"textarea":Zn(r,u),ze("invalid",r)}Kt(t,u),o=null;for(var h in u)if(u.hasOwnProperty(h)){var y=u[h];h==="children"?typeof y=="string"?r.textContent!==y&&(u.suppressHydrationWarning!==!0&&la(r.textContent,y,e),o=["children",y]):typeof y=="number"&&r.textContent!==""+y&&(u.suppressHydrationWarning!==!0&&la(r.textContent,y,e),o=["children",""+y]):d.hasOwnProperty(h)&&y!=null&&h==="onScroll"&&ze("scroll",r)}switch(t){case"input":Jr(r),Ie(r,u,!0);break;case"textarea":Jr(r),Zr(r);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(r.onclick=ua)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{h=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=h.createElement(t,{is:r.is}):(e=h.createElement(t),t==="select"&&(h=e,r.multiple?h.multiple=!0:r.size&&(h.size=r.size))):e=h.createElementNS(e,t),e[yt]=n,e[pi]=r,jd(e,n,!1,!1),n.stateNode=e;e:{switch(h=Qt(t,r),t){case"dialog":ze("cancel",e),ze("close",e),o=r;break;case"iframe":case"object":case"embed":ze("load",e),o=r;break;case"video":case"audio":for(o=0;o<ui.length;o++)ze(ui[o],e);o=r;break;case"source":ze("error",e),o=r;break;case"img":case"image":case"link":ze("error",e),ze("load",e),o=r;break;case"details":ze("toggle",e),o=r;break;case"input":Ws(e,r),o=Us(e,r),ze("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=$({},r,{value:void 0}),ze("invalid",e);break;case"textarea":Zn(e,r),o=Xr(e,r),ze("invalid",e);break;default:o=r}Kt(t,o),y=o;for(u in y)if(y.hasOwnProperty(u)){var b=y[u];u==="style"?ns(e,b):u==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&ct(e,b)):u==="children"?typeof b=="string"?(t!=="textarea"||b!=="")&&On(e,b):typeof b=="number"&&On(e,""+b):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(d.hasOwnProperty(u)?b!=null&&u==="onScroll"&&ze("scroll",e):b!=null&&pe(e,u,b,h))}switch(t){case"input":Jr(e),Ie(e,r,!1);break;case"textarea":Jr(e),Zr(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Te(r.value));break;case"select":e.multiple=!!r.multiple,u=r.value,u!=null?Bn(e,!!r.multiple,u,!1):r.defaultValue!=null&&Bn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ua)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return gn(n),null;case 6:if(e&&n.stateNode!=null)Ed(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(l(166));if(t=Mr(yi.current),Mr(vt.current),ga(n)){if(r=n.stateNode,t=n.memoizedProps,r[yt]=n,(u=r.nodeValue!==t)&&(e=zn,e!==null))switch(e.tag){case 3:la(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&la(r.nodeValue,t,(e.mode&1)!==0)}u&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[yt]=n,n.stateNode=r}return gn(n),null;case 13:if(Me(Ve),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(We&&Mn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Rc(),Cs(),n.flags|=98560,u=!1;else if(u=ga(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[yt]=n}else Cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;gn(n),u=!1}else it!==null&&(Ml(it),it=null),u=!0;if(!u)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ve.current&1)!==0?tn===0&&(tn=3):Wl())),n.updateQueue!==null&&(n.flags|=4),gn(n),null);case 4:return Ns(),Tl(e,n),e===null&&ci(n.stateNode.containerInfo),gn(n),null;case 10:return nl(n.type._context),gn(n),null;case 17:return Nn(n.type)&&da(),gn(n),null;case 19:if(Me(Ve),u=n.memoizedState,u===null)return gn(n),null;if(r=(n.flags&128)!==0,h=u.rendering,h===null)if(r)bi(u,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=ba(e),h!==null){for(n.flags|=128,bi(u,!1),r=h.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)u=t,e=r,u.flags&=14680066,h=u.alternate,h===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=h.childLanes,u.lanes=h.lanes,u.child=h.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=h.memoizedProps,u.memoizedState=h.memoizedState,u.updateQueue=h.updateQueue,u.type=h.type,e=h.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return De(Ve,Ve.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ue()>Is&&(n.flags|=128,r=!0,bi(u,!1),n.lanes=4194304)}else{if(!r)if(e=ba(h),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),bi(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!We)return gn(n),null}else 2*Ue()-u.renderingStartTime>Is&&t!==1073741824&&(n.flags|=128,r=!0,bi(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(t=u.last,t!==null?t.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ue(),n.sibling=null,t=Ve.current,De(Ve,r?t&1|2:t&1),n):(gn(n),null);case 22:case 23:return Ul(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(Fn&1073741824)!==0&&(gn(n),n.subtreeFlags&6&&(n.flags|=8192)):gn(n),null;case 24:return null;case 25:return null}throw Error(l(156,n.tag))}function Em(e,n){switch(Ko(n),n.tag){case 1:return Nn(n.type)&&da(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ns(),Me(En),Me(mn),ll(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return al(n),null;case 13:if(Me(Ve),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));Cs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Me(Ve),null;case 4:return Ns(),null;case 10:return nl(n.type._context),null;case 22:case 23:return Ul(),null;case 24:return null;default:return null}}var Ra=!1,yn=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Rs(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ge(e,n,r)}else t.current=null}function El(e,n,t){try{t()}catch(r){Ge(e,n,r)}}var Nd=!1;function Pm(e,n){if(Uo=re,e=oc(),Ao(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var h=0,y=-1,b=-1,N=0,M=0,U=e,D=null;n:for(;;){for(var V;U!==t||o!==0&&U.nodeType!==3||(y=h+o),U!==u||r!==0&&U.nodeType!==3||(b=h+r),U.nodeType===3&&(h+=U.nodeValue.length),(V=U.firstChild)!==null;)D=U,U=V;for(;;){if(U===e)break n;if(D===t&&++N===o&&(y=h),D===u&&++M===r&&(b=h),(V=U.nextSibling)!==null)break;U=D,D=U.parentNode}U=V}t=y===-1||b===-1?null:{start:y,end:b}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wo={focusedElem:e,selectionRange:t},re=!1,Y=n;Y!==null;)if(n=Y,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Y=e;else for(;Y!==null;){n=Y;try{var K=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var J=K.memoizedProps,Qe=K.memoizedState,T=n.stateNode,S=T.getSnapshotBeforeUpdate(n.elementType===n.type?J:at(n.type,J),Qe);T.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var E=n.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(B){Ge(n,n.return,B)}if(e=n.sibling,e!==null){e.return=n.return,Y=e;break}Y=n.return}return K=Nd,Nd=!1,K}function _i(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var u=o.destroy;o.destroy=void 0,u!==void 0&&El(n,t,u)}o=o.next}while(o!==r)}}function Aa(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Nl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Pd(e){var n=e.alternate;n!==null&&(e.alternate=null,Pd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[yt],delete n[pi],delete n[qo],delete n[pm],delete n[hm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rd(e){return e.tag===5||e.tag===3||e.tag===4}function Ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ua));else if(r!==4&&(e=e.child,e!==null))for(Pl(e,n,t),e=e.sibling;e!==null;)Pl(e,n,t),e=e.sibling}function Rl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rl(e,n,t),e=e.sibling;e!==null;)Rl(e,n,t),e=e.sibling}var un=null,ot=!1;function dr(e,n,t){for(t=t.child;t!==null;)Id(e,n,t),t=t.sibling}function Id(e,n,t){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Sr,t)}catch{}switch(t.tag){case 5:yn||Rs(t,n);case 6:var r=un,o=ot;un=null,dr(e,n,t),un=r,ot=o,un!==null&&(ot?(e=un,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):un.removeChild(t.stateNode));break;case 18:un!==null&&(ot?(e=un,t=t.stateNode,e.nodeType===8?$o(e.parentNode,t):e.nodeType===1&&$o(e,t),A(e)):$o(un,t.stateNode));break;case 4:r=un,o=ot,un=t.stateNode.containerInfo,ot=!0,dr(e,n,t),un=r,ot=o;break;case 0:case 11:case 14:case 15:if(!yn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var u=o,h=u.destroy;u=u.tag,h!==void 0&&((u&2)!==0||(u&4)!==0)&&El(t,n,h),o=o.next}while(o!==r)}dr(e,n,t);break;case 1:if(!yn&&(Rs(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(y){Ge(t,n,y)}dr(e,n,t);break;case 21:dr(e,n,t);break;case 22:t.mode&1?(yn=(r=yn)||t.memoizedState!==null,dr(e,n,t),yn=r):dr(e,n,t);break;default:dr(e,n,t)}}function Ld(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Nm),n.forEach(function(r){var o=Fm.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function lt(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var u=e,h=n,y=h;e:for(;y!==null;){switch(y.tag){case 5:un=y.stateNode,ot=!1;break e;case 3:un=y.stateNode.containerInfo,ot=!0;break e;case 4:un=y.stateNode.containerInfo,ot=!0;break e}y=y.return}if(un===null)throw Error(l(160));Id(u,h,o),un=null,ot=!1;var b=o.alternate;b!==null&&(b.return=null),o.return=null}catch(N){Ge(o,n,N)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Od(n,e),n=n.sibling}function Od(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(n,e),wt(e),r&4){try{_i(3,e,e.return),Aa(3,e)}catch(J){Ge(e,e.return,J)}try{_i(5,e,e.return)}catch(J){Ge(e,e.return,J)}}break;case 1:lt(n,e),wt(e),r&512&&t!==null&&Rs(t,t.return);break;case 5:if(lt(n,e),wt(e),r&512&&t!==null&&Rs(t,t.return),e.flags&32){var o=e.stateNode;try{On(o,"")}catch(J){Ge(e,e.return,J)}}if(r&4&&(o=e.stateNode,o!=null)){var u=e.memoizedProps,h=t!==null?t.memoizedProps:u,y=e.type,b=e.updateQueue;if(e.updateQueue=null,b!==null)try{y==="input"&&u.type==="radio"&&u.name!=null&&Ae(o,u),Qt(y,h);var N=Qt(y,u);for(h=0;h<b.length;h+=2){var M=b[h],U=b[h+1];M==="style"?ns(o,U):M==="dangerouslySetInnerHTML"?ct(o,U):M==="children"?On(o,U):pe(o,M,U,N)}switch(y){case"input":wr(o,u);break;case"textarea":Bs(o,u);break;case"select":var D=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!u.multiple;var V=u.value;V!=null?Bn(o,!!u.multiple,V,!1):D!==!!u.multiple&&(u.defaultValue!=null?Bn(o,!!u.multiple,u.defaultValue,!0):Bn(o,!!u.multiple,u.multiple?[]:"",!1))}o[pi]=u}catch(J){Ge(e,e.return,J)}}break;case 6:if(lt(n,e),wt(e),r&4){if(e.stateNode===null)throw Error(l(162));o=e.stateNode,u=e.memoizedProps;try{o.nodeValue=u}catch(J){Ge(e,e.return,J)}}break;case 3:if(lt(n,e),wt(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{A(n.containerInfo)}catch(J){Ge(e,e.return,J)}break;case 4:lt(n,e),wt(e);break;case 13:lt(n,e),wt(e),o=e.child,o.flags&8192&&(u=o.memoizedState!==null,o.stateNode.isHidden=u,!u||o.alternate!==null&&o.alternate.memoizedState!==null||(Ll=Ue())),r&4&&Ld(e);break;case 22:if(M=t!==null&&t.memoizedState!==null,e.mode&1?(yn=(N=yn)||M,lt(n,e),yn=N):lt(n,e),wt(e),r&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!M&&(e.mode&1)!==0)for(Y=e,M=e.child;M!==null;){for(U=Y=M;Y!==null;){switch(D=Y,V=D.child,D.tag){case 0:case 11:case 14:case 15:_i(4,D,D.return);break;case 1:Rs(D,D.return);var K=D.stateNode;if(typeof K.componentWillUnmount=="function"){r=D,t=D.return;try{n=r,K.props=n.memoizedProps,K.state=n.memoizedState,K.componentWillUnmount()}catch(J){Ge(r,t,J)}}break;case 5:Rs(D,D.return);break;case 22:if(D.memoizedState!==null){Md(U);continue}}V!==null?(V.return=D,Y=V):Md(U)}M=M.sibling}e:for(M=null,U=e;;){if(U.tag===5){if(M===null){M=U;try{o=U.stateNode,N?(u=o.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(y=U.stateNode,b=U.memoizedProps.style,h=b!=null&&b.hasOwnProperty("display")?b.display:null,y.style.display=_r("display",h))}catch(J){Ge(e,e.return,J)}}}else if(U.tag===6){if(M===null)try{U.stateNode.nodeValue=N?"":U.memoizedProps}catch(J){Ge(e,e.return,J)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;M===U&&(M=null),U=U.return}M===U&&(M=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:lt(n,e),wt(e),r&4&&Ld(e);break;case 21:break;default:lt(n,e),wt(e)}}function wt(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Rd(t)){var r=t;break e}t=t.return}throw Error(l(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(On(o,""),r.flags&=-33);var u=Ad(e);Rl(e,u,o);break;case 3:case 4:var h=r.stateNode.containerInfo,y=Ad(e);Pl(e,y,h);break;default:throw Error(l(161))}}catch(b){Ge(e,e.return,b)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Rm(e,n,t){Y=e,Dd(e)}function Dd(e,n,t){for(var r=(e.mode&1)!==0;Y!==null;){var o=Y,u=o.child;if(o.tag===22&&r){var h=o.memoizedState!==null||Ra;if(!h){var y=o.alternate,b=y!==null&&y.memoizedState!==null||yn;y=Ra;var N=yn;if(Ra=h,(yn=b)&&!N)for(Y=o;Y!==null;)h=Y,b=h.child,h.tag===22&&h.memoizedState!==null?Fd(o):b!==null?(b.return=h,Y=b):Fd(o);for(;u!==null;)Y=u,Dd(u),u=u.sibling;Y=o,Ra=y,yn=N}zd(e)}else(o.subtreeFlags&8772)!==0&&u!==null?(u.return=o,Y=u):zd(e)}}function zd(e){for(;Y!==null;){var n=Y;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:yn||Aa(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!yn)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:at(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var u=n.updateQueue;u!==null&&Mc(n,u,r);break;case 3:var h=n.updateQueue;if(h!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Mc(n,h,t)}break;case 5:var y=n.stateNode;if(t===null&&n.flags&4){t=y;var b=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&t.focus();break;case"img":b.src&&(t.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var N=n.alternate;if(N!==null){var M=N.memoizedState;if(M!==null){var U=M.dehydrated;U!==null&&A(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}yn||n.flags&512&&Nl(n)}catch(D){Ge(n,n.return,D)}}if(n===e){Y=null;break}if(t=n.sibling,t!==null){t.return=n.return,Y=t;break}Y=n.return}}function Md(e){for(;Y!==null;){var n=Y;if(n===e){Y=null;break}var t=n.sibling;if(t!==null){t.return=n.return,Y=t;break}Y=n.return}}function Fd(e){for(;Y!==null;){var n=Y;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Aa(4,n)}catch(b){Ge(n,t,b)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(b){Ge(n,o,b)}}var u=n.return;try{Nl(n)}catch(b){Ge(n,u,b)}break;case 5:var h=n.return;try{Nl(n)}catch(b){Ge(n,h,b)}}}catch(b){Ge(n,n.return,b)}if(n===e){Y=null;break}var y=n.sibling;if(y!==null){y.return=n.return,Y=y;break}Y=n.return}}var Am=Math.ceil,Ia=ae.ReactCurrentDispatcher,Al=ae.ReactCurrentOwner,Qn=ae.ReactCurrentBatchConfig,we=0,an=null,Xe=null,cn=0,Fn=0,As=ar(0),tn=0,Si=null,Ur=0,La=0,Il=0,Ci=null,Rn=null,Ll=0,Is=1/0,Ut=null,Oa=!1,Ol=null,pr=null,Da=!1,hr=null,za=0,ji=0,Dl=null,Ma=-1,Fa=0;function kn(){return(we&6)!==0?Ue():Ma!==-1?Ma:Ma=Ue()}function mr(e){return(e.mode&1)===0?1:(we&2)!==0&&cn!==0?cn&-cn:fm.transition!==null?(Fa===0&&(Fa=Ji()),Fa):(e=be,e!==0||(e=window.event,e=e===void 0?16:At(e.type)),e)}function ut(e,n,t,r){if(50<ji)throw ji=0,Dl=null,Error(l(185));Nt(e,t,r),((we&2)===0||e!==an)&&(e===an&&((we&2)===0&&(La|=t),tn===4&&fr(e,cn)),An(e,r),t===1&&we===0&&(n.mode&1)===0&&(Is=Ue()+500,ha&&lr()))}function An(e,n){var t=e.callbackNode;bo(e,n);var r=ls(e,e===an?cn:0);if(r===0)t!==null&&Yi(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Yi(t),n===1)e.tag===0?mm(Wd.bind(null,e)):jc(Wd.bind(null,e)),cm(function(){(we&6)===0&&lr()}),t=null;else{switch(Er(r)){case 1:t=Qs;break;case 4:t=Qi;break;case 16:t=as;break;case 536870912:t=nt;break;default:t=as}t=Kd(t,Ud.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ud(e,n){if(Ma=-1,Fa=0,(we&6)!==0)throw Error(l(327));var t=e.callbackNode;if(Ls()&&e.callbackNode!==t)return null;var r=ls(e,e===an?cn:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Ua(e,r);else{n=r;var o=we;we|=2;var u=Hd();(an!==e||cn!==n)&&(Ut=null,Is=Ue()+500,Br(e,n));do try{Om();break}catch(y){Bd(e,y)}while(!0);el(),Ia.current=u,we=o,Xe!==null?n=0:(an=null,cn=0,n=tn)}if(n!==0){if(n===2&&(o=us(e),o!==0&&(r=o,n=zl(e,o))),n===1)throw t=Si,Br(e,0),fr(e,r),An(e,Ue()),t;if(n===6)fr(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Im(o)&&(n=Ua(e,r),n===2&&(u=us(e),u!==0&&(r=u,n=zl(e,u))),n===1))throw t=Si,Br(e,0),fr(e,r),An(e,Ue()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(l(345));case 2:Hr(e,Rn,Ut);break;case 3:if(fr(e,r),(r&130023424)===r&&(n=Ll+500-Ue(),10<n)){if(ls(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){kn(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ho(Hr.bind(null,e,Rn,Ut),n);break}Hr(e,Rn,Ut);break;case 4:if(fr(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var h=31-Cn(r);u=1<<h,h=n[h],h>o&&(o=h),r&=~u}if(r=o,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Am(r/1960))-r,10<r){e.timeoutHandle=Ho(Hr.bind(null,e,Rn,Ut),r);break}Hr(e,Rn,Ut);break;case 5:Hr(e,Rn,Ut);break;default:throw Error(l(329))}}}return An(e,Ue()),e.callbackNode===t?Ud.bind(null,e):null}function zl(e,n){var t=Ci;return e.current.memoizedState.isDehydrated&&(Br(e,n).flags|=256),e=Ua(e,n),e!==2&&(n=Rn,Rn=t,n!==null&&Ml(n)),e}function Ml(e){Rn===null?Rn=e:Rn.push.apply(Rn,e)}function Im(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],u=o.getSnapshot;o=o.value;try{if(!st(u(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fr(e,n){for(n&=~Il,n&=~La,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Cn(n),r=1<<t;e[t]=-1,n&=~r}}function Wd(e){if((we&6)!==0)throw Error(l(327));Ls();var n=ls(e,0);if((n&1)===0)return An(e,Ue()),null;var t=Ua(e,n);if(e.tag!==0&&t===2){var r=us(e);r!==0&&(n=r,t=zl(e,r))}if(t===1)throw t=Si,Br(e,0),fr(e,n),An(e,Ue()),t;if(t===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Hr(e,Rn,Ut),An(e,Ue()),null}function Fl(e,n){var t=we;we|=1;try{return e(n)}finally{we=t,we===0&&(Is=Ue()+500,ha&&lr())}}function Wr(e){hr!==null&&hr.tag===0&&(we&6)===0&&Ls();var n=we;we|=1;var t=Qn.transition,r=be;try{if(Qn.transition=null,be=1,e)return e()}finally{be=r,Qn.transition=t,we=n,(we&6)===0&&lr()}}function Ul(){Fn=As.current,Me(As)}function Br(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,um(t)),Xe!==null)for(t=Xe.return;t!==null;){var r=t;switch(Ko(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&da();break;case 3:Ns(),Me(En),Me(mn),ll();break;case 5:al(r);break;case 4:Ns();break;case 13:Me(Ve);break;case 19:Me(Ve);break;case 10:nl(r.type._context);break;case 22:case 23:Ul()}t=t.return}if(an=e,Xe=e=gr(e.current,null),cn=Fn=n,tn=0,Si=null,Il=La=Ur=0,Rn=Ci=null,zr!==null){for(n=0;n<zr.length;n++)if(t=zr[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,u=t.pending;if(u!==null){var h=u.next;u.next=o,r.next=h}t.pending=r}zr=null}return e}function Bd(e,n){do{var t=Xe;try{if(el(),_a.current=Ta,Sa){for(var r=Ye.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Sa=!1}if(Fr=0,sn=nn=Ye=null,vi=!1,xi=0,Al.current=null,t===null||t.return===null){tn=1,Si=n,Xe=null;break}e:{var u=e,h=t.return,y=t,b=n;if(n=cn,y.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var N=b,M=y,U=M.tag;if((M.mode&1)===0&&(U===0||U===11||U===15)){var D=M.alternate;D?(M.updateQueue=D.updateQueue,M.memoizedState=D.memoizedState,M.lanes=D.lanes):(M.updateQueue=null,M.memoizedState=null)}var V=hd(h);if(V!==null){V.flags&=-257,md(V,h,y,u,n),V.mode&1&&pd(u,N,n),n=V,b=N;var K=n.updateQueue;if(K===null){var J=new Set;J.add(b),n.updateQueue=J}else K.add(b);break e}else{if((n&1)===0){pd(u,N,n),Wl();break e}b=Error(l(426))}}else if(We&&y.mode&1){var Qe=hd(h);if(Qe!==null){(Qe.flags&65536)===0&&(Qe.flags|=256),md(Qe,h,y,u,n),Xo(Ps(b,y));break e}}u=b=Ps(b,y),tn!==4&&(tn=2),Ci===null?Ci=[u]:Ci.push(u),u=h;do{switch(u.tag){case 3:u.flags|=65536,n&=-n,u.lanes|=n;var T=cd(u,b,n);zc(u,T);break e;case 1:y=b;var S=u.type,E=u.stateNode;if((u.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(pr===null||!pr.has(E)))){u.flags|=65536,n&=-n,u.lanes|=n;var B=dd(u,y,n);zc(u,B);break e}}u=u.return}while(u!==null)}qd(t)}catch(ne){n=ne,Xe===t&&t!==null&&(Xe=t=t.return);continue}break}while(!0)}function Hd(){var e=Ia.current;return Ia.current=Ta,e===null?Ta:e}function Wl(){(tn===0||tn===3||tn===2)&&(tn=4),an===null||(Ur&268435455)===0&&(La&268435455)===0||fr(an,cn)}function Ua(e,n){var t=we;we|=2;var r=Hd();(an!==e||cn!==n)&&(Ut=null,Br(e,n));do try{Lm();break}catch(o){Bd(e,o)}while(!0);if(el(),we=t,Ia.current=r,Xe!==null)throw Error(l(261));return an=null,cn=0,tn}function Lm(){for(;Xe!==null;)$d(Xe)}function Om(){for(;Xe!==null&&!Gi();)$d(Xe)}function $d(e){var n=Gd(e.alternate,e,Fn);e.memoizedProps=e.pendingProps,n===null?qd(e):Xe=n,Al.current=null}function qd(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Tm(t,n,Fn),t!==null){Xe=t;return}}else{if(t=Em(t,n),t!==null){t.flags&=32767,Xe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tn=6,Xe=null;return}}if(n=n.sibling,n!==null){Xe=n;return}Xe=n=e}while(n!==null);tn===0&&(tn=5)}function Hr(e,n,t){var r=be,o=Qn.transition;try{Qn.transition=null,be=1,Dm(e,n,t,r)}finally{Qn.transition=o,be=r}return null}function Dm(e,n,t,r){do Ls();while(hr!==null);if((we&6)!==0)throw Error(l(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var u=t.lanes|t.childLanes;if(ds(e,u),e===an&&(Xe=an=null,cn=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Da||(Da=!0,Kd(as,function(){return Ls(),null})),u=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||u){u=Qn.transition,Qn.transition=null;var h=be;be=1;var y=we;we|=4,Al.current=null,Pm(e,t),Od(t,e),tm(Wo),re=!!Uo,Wo=Uo=null,e.current=t,Rm(t),Ks(),we=y,be=h,Qn.transition=u}else e.current=t;if(Da&&(Da=!1,hr=e,za=o),u=e.pendingLanes,u===0&&(pr=null),tr(t.stateNode),An(e,Ue()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Oa)throw Oa=!1,e=Ol,Ol=null,e;return(za&1)!==0&&e.tag!==0&&Ls(),u=e.pendingLanes,(u&1)!==0?e===Dl?ji++:(ji=0,Dl=e):ji=0,lr(),null}function Ls(){if(hr!==null){var e=Er(za),n=Qn.transition,t=be;try{if(Qn.transition=null,be=16>e?16:e,hr===null)var r=!1;else{if(e=hr,hr=null,za=0,(we&6)!==0)throw Error(l(331));var o=we;for(we|=4,Y=e.current;Y!==null;){var u=Y,h=u.child;if((Y.flags&16)!==0){var y=u.deletions;if(y!==null){for(var b=0;b<y.length;b++){var N=y[b];for(Y=N;Y!==null;){var M=Y;switch(M.tag){case 0:case 11:case 15:_i(8,M,u)}var U=M.child;if(U!==null)U.return=M,Y=U;else for(;Y!==null;){M=Y;var D=M.sibling,V=M.return;if(Pd(M),M===N){Y=null;break}if(D!==null){D.return=V,Y=D;break}Y=V}}}var K=u.alternate;if(K!==null){var J=K.child;if(J!==null){K.child=null;do{var Qe=J.sibling;J.sibling=null,J=Qe}while(J!==null)}}Y=u}}if((u.subtreeFlags&2064)!==0&&h!==null)h.return=u,Y=h;else e:for(;Y!==null;){if(u=Y,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:_i(9,u,u.return)}var T=u.sibling;if(T!==null){T.return=u.return,Y=T;break e}Y=u.return}}var S=e.current;for(Y=S;Y!==null;){h=Y;var E=h.child;if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Y=E;else e:for(h=S;Y!==null;){if(y=Y,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:Aa(9,y)}}catch(ne){Ge(y,y.return,ne)}if(y===h){Y=null;break e}var B=y.sibling;if(B!==null){B.return=y.return,Y=B;break e}Y=y.return}}if(we=o,lr(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Sr,e)}catch{}r=!0}return r}finally{be=t,Qn.transition=n}}return!1}function Vd(e,n,t){n=Ps(t,n),n=cd(e,n,1),e=cr(e,n,1),n=kn(),e!==null&&(Nt(e,1,n),An(e,n))}function Ge(e,n,t){if(e.tag===3)Vd(e,e,t);else for(;n!==null;){if(n.tag===3){Vd(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))){e=Ps(t,e),e=dd(n,e,1),n=cr(n,e,1),e=kn(),n!==null&&(Nt(n,1,e),An(n,e));break}}n=n.return}}function zm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=kn(),e.pingedLanes|=e.suspendedLanes&t,an===e&&(cn&t)===t&&(tn===4||tn===3&&(cn&130023424)===cn&&500>Ue()-Ll?Br(e,0):Il|=t),An(e,n)}function Yd(e,n){n===0&&((e.mode&1)===0?n=1:(n=Cr,Cr<<=1,(Cr&130023424)===0&&(Cr=4194304)));var t=kn();e=zt(e,n),e!==null&&(Nt(e,n,t),An(e,t))}function Mm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Yd(e,t)}function Fm(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(n),Yd(e,t)}var Gd;Gd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||En.current)Pn=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Pn=!1,jm(e,n,t);Pn=(e.flags&131072)!==0}else Pn=!1,We&&(n.flags&1048576)!==0&&Tc(n,fa,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Pa(e,n),e=n.pendingProps;var o=bs(n,mn.current);Es(n,t),o=dl(null,n,r,e,o,t);var u=pl();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Nn(r)?(u=!0,pa(n)):u=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,sl(n),o.updater=Ea,n.stateNode=o,o._reactInternals=n,vl(n,r,e,t),n=bl(null,n,r,!0,u,t)):(n.tag=0,We&&u&&Go(n),wn(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Pa(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Wm(r),e=at(r,e),o){case 0:n=kl(null,n,r,e,t);break e;case 1:n=wd(null,n,r,e,t);break e;case 11:n=fd(null,n,r,e,t);break e;case 14:n=gd(null,n,r,at(r.type,e),t);break e}throw Error(l(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:at(r,o),kl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:at(r,o),wd(e,n,r,o,t);case 3:e:{if(kd(n),e===null)throw Error(l(387));r=n.pendingProps,u=n.memoizedState,o=u.element,Dc(e,n),ka(n,r,null,t);var h=n.memoizedState;if(r=h.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){o=Ps(Error(l(423)),n),n=bd(e,n,r,t,o);break e}else if(r!==o){o=Ps(Error(l(424)),n),n=bd(e,n,r,t,o);break e}else for(Mn=ir(n.stateNode.containerInfo.firstChild),zn=n,We=!0,it=null,t=Lc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Cs(),r===o){n=Ft(e,n,t);break e}wn(e,n,r,t)}n=n.child}return n;case 5:return Fc(n),e===null&&Jo(n),r=n.type,o=n.pendingProps,u=e!==null?e.memoizedProps:null,h=o.children,Bo(r,o)?h=null:u!==null&&Bo(r,u)&&(n.flags|=32),xd(e,n),wn(e,n,h,t),n.child;case 6:return e===null&&Jo(n),null;case 13:return _d(e,n,t);case 4:return il(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=js(n,null,r,t):wn(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:at(r,o),fd(e,n,r,o,t);case 7:return wn(e,n,n.pendingProps,t),n.child;case 8:return wn(e,n,n.pendingProps.children,t),n.child;case 12:return wn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,u=n.memoizedProps,h=o.value,De(va,r._currentValue),r._currentValue=h,u!==null)if(st(u.value,h)){if(u.children===o.children&&!En.current){n=Ft(e,n,t);break e}}else for(u=n.child,u!==null&&(u.return=n);u!==null;){var y=u.dependencies;if(y!==null){h=u.child;for(var b=y.firstContext;b!==null;){if(b.context===r){if(u.tag===1){b=Mt(-1,t&-t),b.tag=2;var N=u.updateQueue;if(N!==null){N=N.shared;var M=N.pending;M===null?b.next=b:(b.next=M.next,M.next=b),N.pending=b}}u.lanes|=t,b=u.alternate,b!==null&&(b.lanes|=t),tl(u.return,t,n),y.lanes|=t;break}b=b.next}}else if(u.tag===10)h=u.type===n.type?null:u.child;else if(u.tag===18){if(h=u.return,h===null)throw Error(l(341));h.lanes|=t,y=h.alternate,y!==null&&(y.lanes|=t),tl(h,t,n),h=u.sibling}else h=u.child;if(h!==null)h.return=u;else for(h=u;h!==null;){if(h===n){h=null;break}if(u=h.sibling,u!==null){u.return=h.return,h=u;break}h=h.return}u=h}wn(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Es(n,t),o=Gn(o),r=r(o),n.flags|=1,wn(e,n,r,t),n.child;case 14:return r=n.type,o=at(r,n.pendingProps),o=at(r.type,o),gd(e,n,r,o,t);case 15:return yd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:at(r,o),Pa(e,n),n.tag=1,Nn(r)?(e=!0,pa(n)):e=!1,Es(n,t),ld(n,r,o),vl(n,r,o,t),bl(null,n,r,!0,e,t);case 19:return Cd(e,n,t);case 22:return vd(e,n,t)}throw Error(l(156,n.tag))};function Kd(e,n){return Et(e,n)}function Um(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,t,r){return new Um(e,n,t,r)}function Bl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wm(e){if(typeof e=="function")return Bl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ee)return 11;if(e===Ce)return 14}return 2}function gr(e,n){var t=e.alternate;return t===null?(t=Jn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Wa(e,n,t,r,o,u){var h=2;if(r=e,typeof e=="function")Bl(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case X:return $r(t.children,o,u,n);case oe:h=8,o|=8;break;case $e:return e=Jn(12,t,n,o|2),e.elementType=$e,e.lanes=u,e;case Z:return e=Jn(13,t,n,o),e.elementType=Z,e.lanes=u,e;case xe:return e=Jn(19,t,n,o),e.elementType=xe,e.lanes=u,e;case je:return Ba(t,o,u,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Se:h=10;break e;case W:h=9;break e;case Ee:h=11;break e;case Ce:h=14;break e;case en:h=16,r=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return n=Jn(h,t,n,o),n.elementType=e,n.type=r,n.lanes=u,n}function $r(e,n,t,r){return e=Jn(7,e,r,n),e.lanes=t,e}function Ba(e,n,t,r){return e=Jn(22,e,r,n),e.elementType=je,e.lanes=t,e.stateNode={isHidden:!1},e}function Hl(e,n,t){return e=Jn(6,e,null,n),e.lanes=t,e}function $l(e,n,t){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Bm(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cs(0),this.expirationTimes=cs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ql(e,n,t,r,o,u,h,y,b){return e=new Bm(e,n,t,y,b),n===1?(n=1,u===!0&&(n|=8)):n=0,u=Jn(3,null,null,n),e.current=u,u.stateNode=e,u.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},sl(u),e}function Hm(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Qd(e){if(!e)return or;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(l(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Nn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(l(171))}if(e.tag===1){var t=e.type;if(Nn(t))return Sc(e,t,n)}return n}function Jd(e,n,t,r,o,u,h,y,b){return e=ql(t,r,!0,e,o,u,h,y,b),e.context=Qd(null),t=e.current,r=kn(),o=mr(t),u=Mt(r,o),u.callback=n??null,cr(t,u,o),e.current.lanes=o,Nt(e,o,r),An(e,r),e}function Ha(e,n,t,r){var o=n.current,u=kn(),h=mr(o);return t=Qd(t),n.context===null?n.context=t:n.pendingContext=t,n=Mt(u,h),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=cr(o,n,h),e!==null&&(ut(e,o,h,u),wa(e,o,h)),h}function $a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Vl(e,n){Xd(e,n),(e=e.alternate)&&Xd(e,n)}function $m(){return null}var Zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yl(e){this._internalRoot=e}qa.prototype.render=Yl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));Ha(e,n,null,null)},qa.prototype.unmount=Yl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Wr(function(){Ha(null,e,null,null)}),n[It]=null}};function qa(e){this._internalRoot=e}qa.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xi();e={blockedOn:null,target:e,priority:n};for(var t=0;t<gt.length&&n!==0&&n<gt[t].priority;t++);gt.splice(t,0,e),t===0&&ps(e)}};function Gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ep(){}function qm(e,n,t,r,o){if(o){if(typeof r=="function"){var u=r;r=function(){var N=$a(h);u.call(N)}}var h=Jd(n,r,e,0,null,!1,!1,"",ep);return e._reactRootContainer=h,e[It]=h.current,ci(e.nodeType===8?e.parentNode:e),Wr(),h}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var y=r;r=function(){var N=$a(b);y.call(N)}}var b=ql(e,0,!1,null,null,!1,!1,"",ep);return e._reactRootContainer=b,e[It]=b.current,ci(e.nodeType===8?e.parentNode:e),Wr(function(){Ha(n,b,t,r)}),b}function Ya(e,n,t,r,o){var u=t._reactRootContainer;if(u){var h=u;if(typeof o=="function"){var y=o;o=function(){var b=$a(h);y.call(b)}}Ha(n,h,e,o)}else h=qm(t,n,e,o,r);return $a(h)}tt=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=jr(n.pendingLanes);t!==0&&(Tr(n,t|1),An(n,Ue()),(we&6)===0&&(Is=Ue()+500,lr()))}break;case 13:Wr(function(){var r=zt(e,1);if(r!==null){var o=kn();ut(r,e,1,o)}}),Vl(e,1)}},Pt=function(e){if(e.tag===13){var n=zt(e,134217728);if(n!==null){var t=kn();ut(n,e,134217728,t)}Vl(e,134217728)}},jn=function(e){if(e.tag===13){var n=mr(e),t=zt(e,n);if(t!==null){var r=kn();ut(t,e,n,r)}Vl(e,n)}},Xi=function(){return be},Nr=function(e,n){var t=be;try{return be=e,n()}finally{be=t}},ss=function(e,n,t){switch(n){case"input":if(wr(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=ca(r);if(!o)throw Error(l(90));Bi(r),wr(r,o)}}}break;case"textarea":Bs(e,t);break;case"select":n=t.value,n!=null&&Bn(e,!!t.multiple,n,!1)}},$s=Fl,qs=Wr;var Vm={usingClientEntryPoint:!1,Events:[hi,ws,ca,Tt,mt,Fl]},Ti={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ym={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vi(e),e===null?null:e.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance||$m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{Sr=Ga.inject(Ym),Sn=Ga}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vm,In.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gl(n))throw Error(l(200));return Hm(e,n,null,t)},In.createRoot=function(e,n){if(!Gl(e))throw Error(l(299));var t=!1,r="",o=Zd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=ql(e,1,!1,null,null,t,!1,r,o),e[It]=n.current,ci(e.nodeType===8?e.parentNode:e),new Yl(n)},In.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Vi(n),e=e===null?null:e.stateNode,e},In.flushSync=function(e){return Wr(e)},In.hydrate=function(e,n,t){if(!Va(n))throw Error(l(200));return Ya(null,e,n,!0,t)},In.hydrateRoot=function(e,n,t){if(!Gl(e))throw Error(l(405));var r=t!=null&&t.hydratedSources||null,o=!1,u="",h=Zd;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(u=t.identifierPrefix),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),n=Jd(n,null,e,1,t??null,o,!1,u,h),e[It]=n.current,ci(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new qa(n)},In.render=function(e,n,t){if(!Va(n))throw Error(l(200));return Ya(null,e,n,!1,t)},In.unmountComponentAtNode=function(e){if(!Va(e))throw Error(l(40));return e._reactRootContainer?(Wr(function(){Ya(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1},In.unstable_batchedUpdates=Fl,In.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Va(t))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Ya(e,n,t,!1,r)},In.version="18.3.1-next-f1338f8080-20240426",In}var lp;function af(){if(lp)return Jl.exports;lp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Jl.exports=sf(),Jl.exports}var up;function of(){if(up)return Ka;up=1;var s=af();return Ka.createRoot=s.createRoot,Ka.hydrateRoot=s.hydrateRoot,Ka}var lf=of();const uf=[["Avery","Morgan","averym","Avery","p1"],["Jordan","Brooks","jbrooks17","Jordan Brooks","p1"],["Taylor","Reed","treed","T. Reed","p1"],["Casey","Nguyen","cnguyen","Casey","p1"],["Riley","Davis","rileyd","Riley","p1"],["Maya","Patel","maya-p","Maya","p3"],["Cameron","Lee","clee","Cameron Lee","p3"],["Sydney","Wilson","sydneyw","Sydney","p3"],["Quinn","Martinez","qmartinez","Quinn","p3"],["Bailey","Adams","bailey_a","Bailey","p5"],["Sam","Rivera","rivera-s","Sam","p5"],["Charlie","Brown","charlieb","Charlie","p6"],["Drew","Johnson","drewj","Drew","p6"],["Alex","Kim","alexk","Alex","p7"],["Robin","Clark","robin-c","Robin","p7"],["Jamie","Flores","jflores","Jamie","p8"]],Za=uf.map(([s,i,l,c,d],p)=>({id:`sample-${p+1}`,first:s,last:i,sheetName:p===3||p===11?null:`${s} ${i}`,github:l,studentName:c,sections:p===0?["p1","p3"]:[d],status:p%5===0?"Active now":p%4===0?"Viewing page":"No recent signal",current:p%3===0?"Strings and Variables":p%3===1?"Format a Summary":"Intro to Arrays",assignments:[{id:"strings",name:"Strings and Variables",type:"Lesson",status:"Completed",score:p%4===0?null:8+p%3,possible:10,submitted:"2026-11-02"},{id:"summary",name:"Format a Summary",type:"Challenge",status:p%4===0?"Started":"Completed",score:p%4===0?null:11+p%5,possible:15,submitted:"2026-11-03"},{id:"decisions",name:"Decision Tree",type:"Challenge",status:p%3===0?"Submitted":"Needs revision",score:p%3===0?10:null,possible:20,submitted:"2026-10-28"},{id:"reflection",name:"Debugging Reflection",type:"Lesson",status:"Practice completed",score:null,possible:5,submitted:"2026-10-26"}],weekly:{"2026-11-02":p%4===0?0:19+p%6,"2026-10-26":p%3===0?12:8+p%5}})),cf=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function eo(s=new Date){const i=Object.fromEntries(cf.formatToParts(s).filter(c=>c.type!=="literal").map(c=>[c.type,c.value])),l=new Date(Date.UTC(Number(i.year),Number(i.month)-1,Number(i.day)));return l.setUTCDate(l.getUTCDate()-(l.getUTCDay()+6)%7),l.toISOString().slice(0,10)}function hu(s=new Date,i=8){const l=new Date(eo(s)+"T12:00:00Z");return Array.from({length:i},(c,d)=>{const p=new Date(l);return p.setUTCDate(p.getUTCDate()-d*7),p.toISOString().slice(0,10)})}const zs=s=>new Date(s+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"America/Chicago"}),df=(s,i,l)=>`${s}|${i}|${l}`;function pf({response:s,type:i,aiUse:l,aiDetails:c}){return["essay","logic-puzzle"].includes(i)?String(s).trim().length<10?"Write your answer and explain your thinking.":["none","disclosed"].includes(l)?l==="disclosed"&&String(c).trim().length<5?"Describe which parts involved AI.":"":"Complete the AI-use declaration.":"Select an essay or logic puzzle."}const hf=[{id:"seed-journal-1",sectionId:"p1",studentId:"sample-2",studentName:"Jordan Brooks",courseId:"computer-science-1",week:eo(),type:"essay",response:"When I debug code, I first reproduce the problem and read the error carefully. Next I try one small change and test again. I keep notes so I can explain what fixed the problem and why.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()},{id:"seed-journal-2",sectionId:"p1",studentId:"sample-3",studentName:"Taylor Reed",courseId:"computer-science-1",week:eo(),type:"logic-puzzle",response:"The differences are 4, 6, 8, and 10. The next difference is 12, so the next number is 42. This also follows the pattern n(n+1), starting at n = 1.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()}],kt={"game-programming":[{id:"csharp-foundations",title:"C# Foundations",description:"Build the logic behind games.",lessons:["csharp-variables","csharp-conditionals"]},{id:"unity-systems",title:"Unity Gameplay",description:"Connect scripts and game mechanics.",lessons:["unity-colliders","unity-player-controller","unity-score"]}],"mobile-app-dev":[{id:"web-basics",title:"Web Foundations",description:"Create and style interface elements.",lessons:["web-layout","web-events"]},{id:"react-foundations",title:"React Essentials",description:"Build reusable and interactive UI.",lessons:["react-components","react-state"]}],uil:[{id:"java-language",title:"Java Language & Tracing",description:"Reason about loops and variables.",lessons:["uil-loops","uil-methods"]},{id:"java-data",title:"Data Structures",description:"Trace arrays and string operations.",lessons:["uil-arrays","uil-strings"]}],"tsi-math":[{id:"tsi-quantitative",title:"Quantitative Reasoning",description:"Rates, ratios, percentages, and proportions.",lessons:["tsi-ratios","tsi-percents"]},{id:"tsi-algebra",title:"Algebraic Reasoning",description:"Solve equations and interpret graphs.",lessons:["tsi-equations","tsi-slope"]}],capstone:[{id:"capstone-discover",title:"Discover the Problem",description:"Investigate a need worth solving.",lessons:["capstone-discovery","capstone-interviews"]},{id:"capstone-validate",title:"Prototype & Validate",description:"Turn evidence into an iterated prototype.",lessons:["capstone-prototype","capstone-feedback"]}]},mf=[{id:"01-how-programs-work/01-first-message",unit:1,unitName:"How Programs Work",lesson:1,slug:"01-first-message",title:"Instructions and output",concept:"Output and strings",summary:"Tell a computer what to display using a simple Python instruction.",mode:"script",starter:`# Use print() to display the exact welcome message.
# Your program should display one line.
`,cases:[{expected:"Welcome to Computer Science I"}],points:5,hints:["Which Python function displays a message?","Place the exact words in matching quotation marks.","Check spacing and capitalization. The checker looks at the output, not at your preferred wording."],markdown:"01-how-programs-work/01-instructions-and-output.md",existingPassKey:"cs1:unit01:pass:01-first-message",existingDraftKey:"cs1:unit01:draft:01-first-message",language:"python",markdownSource:`# Lesson 01 — Instructions and Output

## What is a program?

A **program** is a set of instructions a computer follows. A **programming language** gives us a precise way to write those instructions. Python is one such language.

A computer does not infer your intentions. It follows the instructions you actually write. Even a small spelling or punctuation mistake can change what happens.

## Your first Python instruction

\`\`\`python
print("Hello, Python!")
\`\`\`

**Output**

\`\`\`text
Hello, Python!
\`\`\`

\`print()\` displays information. The parentheses hold the value to display, and the quotation marks tell Python that the contents are text (a **string**). The quotation marks are not printed.

Try changing the text and running again:

\`\`\`python
print("I can make a computer display my message.")
\`\`\`

You can use either single quotes or double quotes around a string as long as the opening and closing quote match.

\`\`\`python
print('Welcome')
print("Welcome")
\`\`\`

## Vocabulary

- **Python interpreter:** software that executes Python instructions.
- **Source code:** the instructions written by a programmer.
- **String:** a piece of text surrounded by matching quotation marks.
- **Output:** information a program displays or produces.
- **Syntax:** rules for writing valid instructions.

## Practice: First Message

Write a program that displays exactly:

\`\`\`text
Welcome to Computer Science I
\`\`\`

Use \`print()\`. Matching capitalization and spacing matter. Open [the starter file](practice/01-first-message/main.py) or choose **First Message** in the browser app.

## Stop and think

1. Why is \`print(Hello)\` different from \`print("Hello")\`?
2. What happens if you forget a closing parenthesis?
3. How could you verify that your program did what you intended?
`},{id:"01-how-programs-work/02-startup-sequence",unit:1,unitName:"How Programs Work",lesson:2,slug:"02-startup-sequence",title:"Sequence and tracing",concept:"Program sequence",summary:"Learn how the order of instructions changes the result.",mode:"script",starter:`# These lines are correct, but they are in the wrong order.
# Rearrange them so the robot reports its startup steps correctly.
print("Checking sensors...")
print("Ready.")
print("Booting...")
`,cases:[{expected:`Booting...
Checking sensors...
Ready.`}],points:5,hints:["Look at the first line of the expected output.","Move existing statements; do not rewrite their messages.","Check the result line by line, including punctuation."],markdown:"01-how-programs-work/02-sequence-and-tracing.md",existingPassKey:"cs1:unit01:pass:02-startup-sequence",existingDraftKey:"cs1:unit01:draft:02-startup-sequence",language:"python",markdownSource:`# Lesson 02 — Sequence and Tracing

## Computers follow an order

Python usually executes instructions **top to bottom**, one line at a time.

\`\`\`python
print("First")
print("Second")
print("Third")
\`\`\`

**Output**

\`\`\`text
First
Second
Third
\`\`\`

Reversing two lines changes the result.

A **trace** is a record of what a program does, step by step. Before running a program, try predicting its output.

| Line executed | Output added |
|---|---|
| \`print("Checking battery")\` | \`Checking battery\` |
| \`print("Starting motor")\` | \`Starting motor\` |

\`print()\` normally ends with a new line, so each call displays its message on a separate line.

## Practice: Startup Sequence

A robot should display these three messages in the following order:

\`\`\`text
Booting...
Checking sensors...
Ready.
\`\`\`

The starter code contains the right messages but in the wrong order. Move the instructions into the correct sequence. [View starter](practice/02-startup-sequence/main.py).

## Stop and think

- Can all three messages be correct while the overall output is wrong?
- Why should a programmer test the **order** of output as well as the words themselves?
`},{id:"01-how-programs-work/03-fix-the-messages",unit:1,unitName:"How Programs Work",lesson:3,slug:"03-fix-the-messages",title:"Comments and debugging",concept:"Comments and debugging",summary:"Read an error message, repair the instructions, and try again.",mode:"script",starter:`# This program has syntax errors. Find and repair them.
print("Debugging in progress"
print('Problem solved")
`,cases:[{expected:`Debugging in progress
Problem solved`}],points:5,hints:["Run the starter first. What type of error appears?","Match every opening parenthesis with a closing one.","Match each opening quotation mark with the same kind of closing quote, then try again."],markdown:"01-how-programs-work/03-comments-and-debugging.md",existingPassKey:"cs1:unit01:pass:03-fix-the-messages",existingDraftKey:"cs1:unit01:draft:03-fix-the-messages",language:"python",markdownSource:`# Lesson 03 — Comments and Debugging

## Comments explain code

A comment starts with \`#\`. Python ignores the comment when running the program.

\`\`\`python
# Explain what this program is doing.
print("Systems ready")
\`\`\`

**Output**

\`\`\`text
Systems ready
\`\`\`

Comments can make code more understandable, but they do not fix incorrect instructions.

## Not all bugs are the same

A **syntax error** means Python cannot understand the code's structure. For example:

\`\`\`python
print("Starting..."
\`\`\`

Python reports an error because the parentheses are unbalanced.

A **logic error** means the program runs but produces the wrong behavior:

\`\`\`python
print("Task finished")
print("Task started")
\`\`\`

Both instructions are valid. Their order might be incorrect for the intended task.

## A debugging habit

1. Read the expected behavior.
2. Run the program and look closely at the error or output.
3. Change one thing you believe is wrong.
4. Run again and compare.

## Practice: Fix the Messages

The starter has punctuation mistakes that prevent the program from running. Correct them so the program displays exactly:

\`\`\`text
Debugging in progress
Problem solved
\`\`\`

[View starter](practice/03-fix-the-messages/main.py).

## Stop and think

- Does a program that runs without errors always produce the correct output?
- How can an error message help narrow down where a mistake happened?
`},{id:"01-how-programs-work/04-robotics-status",unit:1,unitName:"How Programs Work",lesson:4,slug:"04-robotics-status",title:"Cumulative mini-project",concept:"Cumulative project",summary:"Combine printing, sequence, and comments in a program you write yourself.",mode:"script",starter:`# Write a three-line robotics status display.
# Include a comment explaining the purpose of your program.
`,cases:[{expected:`Wagner Robotics
System online
Ready to launch`}],points:5,hints:["Remember how Python moves from one line to the next.","The earlier lessons showed how to display text on separate lines.","Include one comment explaining the purpose of your script."],markdown:"01-how-programs-work/04-mini-project.md",existingPassKey:"cs1:unit01:pass:04-robotics-status",existingDraftKey:"cs1:unit01:draft:04-robotics-status",language:"python",markdownSource:`# Lesson 04 — Cumulative Mini-Project: Robotics Status

You've practiced producing output, arranging instructions, and debugging syntax. Now combine these skills without a step-by-step code template.

## Scenario

A student robotics team is preparing a display for a demonstration. When the status program starts, it should display exactly these three lines, in order:

\`\`\`text
Wagner Robotics
System online
Ready to launch
\`\`\`

## Your task

In [\`practice/04-robotics-status/main.py\`](practice/04-robotics-status/main.py), write your own Python instructions.

Requirements:

- Use the Python skills from this unit.
- Include a short comment stating the purpose of the program.
- Display the messages in the required order.
- Match capitalization, spelling, punctuation, and spaces.
- No keyboard input, variables, loops, or custom functions are required.

## Before checking

Read your script from the top down and **predict** its output. Then run it and compare what appears.

If your code produces an error, use the debugging routine from Lesson 03.

## Reflection

In one or two sentences, explain why precise instructions matter when writing a program for a real robot, mobile app, or website.
`}],ff=[{id:"02-values-and-variables/01-meet-variables",unit:2,unitName:"Values, Variables & Expressions",lesson:1,slug:"01-meet-variables",title:"Names for changing information",concept:"Variables and assignment  ",summary:"Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.",mode:"script",starter:`# Name the player with a variable, then display the required message.
`,cases:[{expected:"Player: Nova"}],points:5,hints:["How do you store text in a variable?","`print()` can accept a label and a variable separated by a comma.","Check the space after the colon in the displayed output."],markdown:"02-values-and-variables/lessons/01-meet-variables.md",language:"python",markdownSource:`# Values, Variables & Expressions — Lesson 1: Names for changing information

**New skill:** Variables and assignment  
**Previously learned:** Unit 01 — output, execution, and debugging

## Why this matters

Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.

## Study this example

\`\`\`python
player = 'Nova'
print('Player:', player)
player = 'Atlas'
print('Player:', player)
\`\`\`

Assignment uses a single equals sign. Python uses the current value when it reaches each print statement. Renaming the player changes later output, not previous output.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

What does the second print statement show? Why?

## Common mistake

Text values require quotation marks, but variable names do not.

## Practice: Names for changing information

Create a variable named \`player\` storing the text \`Nova\`. Display exactly \`Player: Nova\` using the variable and \`print()\`.

**Expected console output**

\`\`\`text
Player: Nova
\`\`\`

**Starter file:** [\`main.py\`](../practice/01-meet-variables/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

How do you store text in a variable?

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

\`print()\` can accept a label and a variable separated by a comma.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Check the space after the colon in the displayed output.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
`},{id:"02-values-and-variables/02-numbers-and-operations",unit:2,unitName:"Values, Variables & Expressions",lesson:2,slug:"02-numbers-and-operations",title:"Calculate with numbers",concept:"Integer arithmetic  ",summary:"Unlike strings, integers support calculations. Python evaluates arithmetic expressions before producing output.",mode:"script",starter:`# How many minutes are spent in three sessions?
sessions = 3
minutes = 45
# Calculate and print the total.
`,cases:[{expected:"135"}],points:5,hints:["Identify the operation that combines repeated equal durations.","Use the two existing variables rather than printing 135 directly.","`print()` should display the numeric result."],markdown:"02-values-and-variables/lessons/02-numbers-and-operations.md",language:"python",markdownSource:`# Values, Variables & Expressions — Lesson 2: Calculate with numbers

**New skill:** Integer arithmetic  
**Previously learned:** Unit 01 — output, execution, and debugging

## Why this matters

Unlike strings, integers support calculations. Python evaluates arithmetic expressions before producing output.

## Study this example

\`\`\`python
minutes = 30
sessions = 4
print(minutes * sessions)
print(15 // 4)
print(15 % 4)
\`\`\`

\`*\` multiplies. \`//\` gives a whole-number quotient; \`%\` gives a remainder. The result of 30 × 4 is 120. You can keep numbers in variables and compute when needed.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

Predict \`7 * 6\`, \`17 // 5\`, and \`17 % 5\` before running.

## Common mistake

Quoted numbers such as \`'12'\` are strings, not integers.

## Practice: Calculate with numbers

A robotics club runs \`3\` sessions lasting \`45\` minutes each. Use variables named \`sessions\` and \`minutes\` to calculate and print the **total number of minutes**: \`135\`.

**Expected console output**

\`\`\`text
135
\`\`\`

**Starter file:** [\`main.py\`](../practice/02-numbers-and-operations/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

Identify the operation that combines repeated equal durations.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

Use the two existing variables rather than printing 135 directly.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

\`print()\` should display the numeric result.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
`},{id:"02-values-and-variables/03-types-and-conversion",unit:2,unitName:"Values, Variables & Expressions",lesson:3,slug:"03-types-and-conversion",title:"Numbers aren't always text",concept:"String, int, float, conversion  ",summary:"Python gives values different types. Strings hold text; integers hold whole numbers; floats hold decimal numbers.",mode:"script",starter:`# Give the two variables their correct numeric types.
quantity = 8
price = 2.5
# Display each type name on its own line.
`,cases:[{expected:`int
float`}],points:10,hints:["Review `type(value).__name__` in the example.","You need two print statements, in the correct order.","Do not put quotation marks around the number 8."],markdown:"02-values-and-variables/lessons/03-types-and-conversion.md",language:"python",markdownSource:`# Values, Variables & Expressions — Lesson 3: Numbers aren't always text

**New skill:** String, int, float, conversion  
**Previously learned:** Unit 01 — output, execution, and debugging

## Why this matters

Python gives values different types. Strings hold text; integers hold whole numbers; floats hold decimal numbers.

## Study this example

\`\`\`python
count = 6
rate = 2.5
print(type(count).__name__)
print(type(rate).__name__)
print(int('8') + count)
\`\`\`

\`type()\` identifies a value's type, and \`.__name__\` provides its readable name. \`int('8')\` turns a numeric string into an integer so arithmetic works.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

What happens if you try \`'8' + 6\` without conversion?

## Common mistake

\`'5' + '2'\` joins strings into \`'52'\`, rather than adding them to get 7.

## Practice: Numbers aren't always text

Set \`quantity = 8\` as an integer and \`price = 2.5\` as a float. Print the type name of \`quantity\` on the first line and the type name of \`price\` on the second. The output must be exactly \`int\` then \`float\`.

**Expected console output**

\`\`\`text
int
float
\`\`\`

**Starter file:** [\`main.py\`](../practice/03-types-and-conversion/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

Review \`type(value).__name__\` in the example.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

You need two print statements, in the correct order.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Do not put quotation marks around the number 8.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
`},{id:"02-values-and-variables/04-build-a-price-calculator",unit:2,unitName:"Values, Variables & Expressions",lesson:4,slug:"04-build-a-price-calculator",title:"Ticket Cost",concept:"Variables and expressions together  ",summary:"Real programs calculate new information using values they've stored. This mini-project applies your variable and arithmetic skills.",mode:"script",starter:`# Build a small price calculator with variables.
passes = 4
price = 12
# Compute the result and print the labeled total.
`,cases:[{expected:"Total: 48"}],points:15,hints:["Multiply the number of passes by the price.","You can store the calculation in a `total` variable.","Print a label and the computed value in a single statement."],markdown:"02-values-and-variables/lessons/04-build-a-price-calculator.md",language:"python",markdownSource:`# Values, Variables & Expressions — Lesson 4: Build: Ticket Cost

**New skill:** Variables and expressions together  
**Previously learned:** Unit 01 — output, execution, and debugging

## Why this matters

Real programs calculate new information using values they've stored. This mini-project applies your variable and arithmetic skills.

## Study this example

\`\`\`python
items = 2
cost_each = 7
subtotal = items * cost_each
print('Subtotal:', subtotal)
\`\`\`

The variable \`subtotal\` captures a calculated value, making the code clearer and easier to change. Notice that print separates the label and number with a space.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

If \`items\` becomes 5, which line must change?

## Common mistake

Do not hardcode the answer when you can calculate from the given variables.

## Practice: Build: Ticket Cost

A club sells \`4\` passes at \`$12\` each. Define variables \`passes\` and \`price\`, calculate the total, and display exactly \`Total: 48\`.

**Expected console output**

\`\`\`text
Total: 48
\`\`\`

**Starter file:** [\`main.py\`](../practice/04-build-a-price-calculator/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

Multiply the number of passes by the price.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

You can store the calculation in a \`total\` variable.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Print a label and the computed value in a single statement.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
`}],gf=[{id:"03-functions-and-parameters/01-functions-return",unit:3,unitName:"Functions, Parameters & Return Values",lesson:1,slug:"01-functions-return",title:"Returning an answer",concept:"Function definitions and return  ",summary:"A function packages instructions into a reusable operation. A function can give a result back with `return`.",mode:"function",starter:`def increment_number(number):
    # Return the number that comes immediately after this one.
    pass
`,cases:[{call:"increment_number(4)",expected:"5"},{call:"increment_number(-1)",expected:"0"},{call:"increment_number(99)",expected:"100"}],points:5,hints:["The input arrives in a parameter called `number`.","Use addition with the value given to you.","The grader needs `return`, not `print`."],markdown:"03-functions-and-parameters/lessons/01-functions-return.md",functionName:"increment_number",language:"python",markdownSource:`# Functions, Parameters & Return Values — Lesson 1: Returning an answer

**New skill:** Function definitions and return  
**Previously learned:** Unit 02 — data types, variables, expressions

## Why this matters

A function packages instructions into a reusable operation. A function can give a result back with \`return\`.

## Study this example

\`\`\`python
def double(n):
    return n * 2

print(double(4))
\`\`\`

\`def\` starts a function definition. Its indented body runs when called. \`return\` gives a value to the caller. A function with no explicit return produces \`None\`.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

How does \`double(7)\` differ from printing the number 14 inside the function?

## Common mistake

Printing a value is not the same as returning it.

## Practice: Returning an answer

Complete \`increment_number(number)\` so it returns \`number + 1\`, without printing the answer.

**Example 1 — Input**

\`\`\`python
increment_number(4)
\`\`\`

**Output**

\`\`\`python
5
\`\`\`

**Example 2 — Input**

\`\`\`python
increment_number(-1)
\`\`\`

**Output**

\`\`\`python
0
\`\`\`

**Example 3 — Input**

\`\`\`python
increment_number(99)
\`\`\`

**Output**

\`\`\`python
100
\`\`\`

**Starter file:** [\`main.py\`](../practice/01-functions-return/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

The input arrives in a parameter called \`number\`.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

Use addition with the value given to you.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

The grader needs \`return\`, not \`print\`.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
`},{id:"03-functions-and-parameters/02-parameters",unit:3,unitName:"Functions, Parameters & Return Values",lesson:2,slug:"02-parameters",title:"Working with two inputs",concept:"Parameters and arguments  ",summary:"Functions can have more than one parameter. An argument is the actual value supplied for a parameter when a function is called.",mode:"function",starter:`def calculate_pay(hours, rate):
    # Compute pay from the two given parameters.
    pass
`,cases:[{call:"calculate_pay(3, 12)",expected:"36"},{call:"calculate_pay(0, 14)",expected:"0"},{call:"calculate_pay(2, 7.5)",expected:"15.0"}],points:5,hints:["Look at which parameter is hours and which is rate.","A multiplication expression produces the total pay.","Return the numeric answer."],markdown:"03-functions-and-parameters/lessons/02-parameters.md",functionName:"calculate_pay",language:"python",markdownSource:`# Functions, Parameters & Return Values — Lesson 2: Working with two inputs

**New skill:** Parameters and arguments  
**Previously learned:** Unit 02 — data types, variables, expressions

## Why this matters

Functions can have more than one parameter. An argument is the actual value supplied for a parameter when a function is called.

## Study this example

\`\`\`python
def perimeter(width, height):
    return 2 * (width + height)

print(perimeter(3, 5))
\`\`\`

When called with \`(3, 5)\`, \`width\` is 3 and \`height\` is 5. The expression calculates the perimeter and returns 16.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

What would the example return for width 2 and height 4?

## Common mistake

Don't swap parameters accidentally when their positions have different meanings.

## Practice: Working with two inputs

Complete \`calculate_pay(hours, rate)\` to return the total pay calculated by multiplying hours by the hourly rate.

**Example 1 — Input**

\`\`\`python
calculate_pay(3, 12)
\`\`\`

**Output**

\`\`\`python
36
\`\`\`

**Example 2 — Input**

\`\`\`python
calculate_pay(0, 14)
\`\`\`

**Output**

\`\`\`python
0
\`\`\`

**Example 3 — Input**

\`\`\`python
calculate_pay(2, 7.5)
\`\`\`

**Output**

\`\`\`python
15.0
\`\`\`

**Starter file:** [\`main.py\`](../practice/02-parameters/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

Look at which parameter is hours and which is rate.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

A multiplication expression produces the total pay.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Return the numeric answer.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
`},{id:"03-functions-and-parameters/03-strings-from-functions",unit:3,unitName:"Functions, Parameters & Return Values",lesson:3,slug:"03-strings-from-functions",title:"Return a string",concept:"String expressions and return types  ",summary:"Functions don't have to return numbers. A function can construct and return a message using text and its inputs.",mode:"function",starter:`def create_greeting(username):
    # Build a welcome string using the argument.
    pass
`,cases:[{call:"create_greeting('Riley')",expected:"'Welcome, Riley!'"},{call:"create_greeting('Kai')",expected:"'Welcome, Kai!'"},{call:"create_greeting('')",expected:"'Welcome, !'"}],points:10,hints:["You can join smaller strings with `+`.","Use the parameter between the greeting and the exclamation mark.","The result should be a string returned by the function."],markdown:"03-functions-and-parameters/lessons/03-strings-from-functions.md",functionName:"create_greeting",language:"python",markdownSource:`# Functions, Parameters & Return Values — Lesson 3: Return a string

**New skill:** String expressions and return types  
**Previously learned:** Unit 02 — data types, variables, expressions

## Why this matters

Functions don't have to return numbers. A function can construct and return a message using text and its inputs.

## Study this example

\`\`\`python
def tag(name):
    return 'Hi, ' + name

print(tag('Sam'))
\`\`\`

The \`+\` operator concatenates strings when both sides are text. The returned value has type \`str\`.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

Why do you need the space after the comma in \`'Hi, '\`?

## Common mistake

\`return 'Hi, name'\` returns the literal word name, not the parameter's value.

## Practice: Return a string

Complete \`create_greeting(username)\` to return \`Welcome, <username>!\` with the actual username inserted. Preserve the exact punctuation.

**Example 1 — Input**

\`\`\`python
create_greeting('Riley')
\`\`\`

**Output**

\`\`\`python
'Welcome, Riley!'
\`\`\`

**Example 2 — Input**

\`\`\`python
create_greeting('Kai')
\`\`\`

**Output**

\`\`\`python
'Welcome, Kai!'
\`\`\`

**Example 3 — Input**

\`\`\`python
create_greeting('')
\`\`\`

**Output**

\`\`\`python
'Welcome, !'
\`\`\`

**Starter file:** [\`main.py\`](../practice/03-strings-from-functions/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

You can join smaller strings with \`+\`.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

Use the parameter between the greeting and the exclamation mark.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

The result should be a string returned by the function.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
`},{id:"03-functions-and-parameters/04-build-area-tool",unit:3,unitName:"Functions, Parameters & Return Values",lesson:4,slug:"04-build-area-tool",title:"Rectangle Area Tool",concept:"Reusable functions and expressions  ",summary:"A classroom design app needs a reusable calculation rather than manually recalculating the area of every rectangle.",mode:"function",starter:`def calculate_rectangle_area(width, height):
    # Return the area based on the supplied dimensions.
    pass
`,cases:[{call:"calculate_rectangle_area(5, 3)",expected:"15"},{call:"calculate_rectangle_area(0, 10)",expected:"0"},{call:"calculate_rectangle_area(2.5, 4)",expected:"10.0"}],points:15,hints:["Area is width multiplied by height.","Don't display output with `print()`.","Return the calculated value directly or save it to a variable before returning."],markdown:"03-functions-and-parameters/lessons/04-build-area-tool.md",functionName:"calculate_rectangle_area",language:"python",markdownSource:`# Functions, Parameters & Return Values — Lesson 4: Build: Rectangle Area Tool

**New skill:** Reusable functions and expressions  
**Previously learned:** Unit 02 — data types, variables, expressions

## Why this matters

A classroom design app needs a reusable calculation rather than manually recalculating the area of every rectangle.

## Study this example

\`\`\`python
def square_area(side):
    return side * side

print(square_area(5))
\`\`\`

The caller provides a value, and the function returns a result. One function works for many different input values.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

Which parts of the function are general enough to work with a different square size?

## Common mistake

Do not hardcode the sample result; the checker will use additional arguments.

## Practice: Build: Rectangle Area Tool

Complete \`calculate_rectangle_area(width, height)\` to return the area of a rectangle (\`width * height\`). It must work with positive and zero dimensions.

**Example 1 — Input**

\`\`\`python
calculate_rectangle_area(5, 3)
\`\`\`

**Output**

\`\`\`python
15
\`\`\`

**Example 2 — Input**

\`\`\`python
calculate_rectangle_area(0, 10)
\`\`\`

**Output**

\`\`\`python
0
\`\`\`

**Example 3 — Input**

\`\`\`python
calculate_rectangle_area(2.5, 4)
\`\`\`

**Output**

\`\`\`python
10.0
\`\`\`

**Starter file:** [\`main.py\`](../practice/04-build-area-tool/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

Area is width multiplied by height.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

Don't display output with \`print()\`.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Return the calculated value directly or save it to a variable before returning.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
`}],yf=[{id:"04-comparisons-and-boolean-logic/01-comparisons",unit:4,unitName:"Comparisons & Boolean Logic",lesson:1,slug:"01-comparisons",title:"Ask Python a question",concept:"Comparison operators and Boolean values  ",summary:"A comparison is a question that evaluates to a Boolean value: `True` or `False`.",mode:"function",starter:`def has_required_points(current, required):
    # Return whether current meets or exceeds required.
    pass
`,cases:[{call:"has_required_points(8, 5)",expected:"True"},{call:"has_required_points(5, 5)",expected:"True"},{call:"has_required_points(4, 5)",expected:"False"}],points:5,hints:["Which operator means greater than **or equal to**?","A comparison already produces `True` or `False`.","Return the result of the comparison."],markdown:"04-comparisons-and-boolean-logic/lessons/01-comparisons.md",functionName:"has_required_points",language:"python",markdownSource:`# Comparisons & Boolean Logic — Lesson 1: Ask Python a question

**New skill:** Comparison operators and Boolean values  
**Previously learned:** Unit 03 — parameters and return values

## Why this matters

A comparison is a question that evaluates to a Boolean value: \`True\` or \`False\`.

## Study this example

\`\`\`python
print(7 > 3)
print(4 == 4)
print(2 != 2)
\`\`\`

\`>\` asks whether one value is larger. \`==\` checks equality. \`!=\` checks inequality. The result is a Boolean, not the string \`'True'\`.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

Predict \`5 >= 5\` and \`5 > 5\`.

## Common mistake

Use \`==\` for comparison and \`=\` for assignment.

## Practice: Ask Python a question

Complete \`has_required_points(current, required)\` to return \`True\` if the current score is at least the required score, or \`False\` otherwise.

**Example 1 — Input**

\`\`\`python
has_required_points(8, 5)
\`\`\`

**Output**

\`\`\`python
True
\`\`\`

**Example 2 — Input**

\`\`\`python
has_required_points(5, 5)
\`\`\`

**Output**

\`\`\`python
True
\`\`\`

**Example 3 — Input**

\`\`\`python
has_required_points(4, 5)
\`\`\`

**Output**

\`\`\`python
False
\`\`\`

**Starter file:** [\`main.py\`](../practice/01-comparisons/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

Which operator means greater than **or equal to**?

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

A comparison already produces \`True\` or \`False\`.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Return the result of the comparison.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
`},{id:"04-comparisons-and-boolean-logic/02-equality",unit:4,unitName:"Comparisons & Boolean Logic",lesson:2,slug:"02-equality",title:"Exact matches matter",concept:"Equality and inequality  ",summary:"Some actions should only happen when two values match exactly.",mode:"function",starter:`def codes_match(expected_code, entered_code):
    # Compare both strings without changing them.
    pass
`,cases:[{call:"codes_match('AB7', 'AB7')",expected:"True"},{call:"codes_match('AB7', 'ab7')",expected:"False"},{call:"codes_match('', '')",expected:"True"}],points:5,hints:["String comparison is case-sensitive by default.","Use the equality operator.","Return a Boolean, not a text message."],markdown:"04-comparisons-and-boolean-logic/lessons/02-equality.md",functionName:"codes_match",language:"python",markdownSource:`# Comparisons & Boolean Logic — Lesson 2: Exact matches matter

**New skill:** Equality and inequality  
**Previously learned:** Unit 03 — parameters and return values

## Why this matters

Some actions should only happen when two values match exactly.

## Study this example

\`\`\`python
entered = 'UP'
correct = 'UP'
print(entered == correct)
print(entered != 'up')
\`\`\`

String equality is case-sensitive. \`'UP'\` equals \`'UP'\`, but it does not equal \`'up'\`.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

Would a string password match if its capitalization changes?

## Common mistake

Avoid confusing assignment (\`=\`) and equality (\`==\`).

## Practice: Exact matches matter

Complete \`codes_match(expected_code, entered_code)\` so it returns a Boolean indicating whether the two strings match exactly.

**Example 1 — Input**

\`\`\`python
codes_match('AB7', 'AB7')
\`\`\`

**Output**

\`\`\`python
True
\`\`\`

**Example 2 — Input**

\`\`\`python
codes_match('AB7', 'ab7')
\`\`\`

**Output**

\`\`\`python
False
\`\`\`

**Example 3 — Input**

\`\`\`python
codes_match('', '')
\`\`\`

**Output**

\`\`\`python
True
\`\`\`

**Starter file:** [\`main.py\`](../practice/02-equality/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

String comparison is case-sensitive by default.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

Use the equality operator.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Return a Boolean, not a text message.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
`},{id:"04-comparisons-and-boolean-logic/03-and-or-not",unit:4,unitName:"Comparisons & Boolean Logic",lesson:3,slug:"03-and-or-not",title:"Combine conditions",concept:"Logical operators  ",summary:"Real decisions often require more than one condition. Python combines Boolean expressions with `and`, `or`, and `not`.",mode:"function",starter:`def can_send_notification(online, muted):
    # Combine both Boolean inputs.
    pass
`,cases:[{call:"can_send_notification(True, False)",expected:"True"},{call:"can_send_notification(True, True)",expected:"False"},{call:"can_send_notification(False, False)",expected:"False"}],points:10,hints:["Both online and not muted must be true.","`not` reverses the muted flag.","Combine the conditions with `and`."],markdown:"04-comparisons-and-boolean-logic/lessons/03-and-or-not.md",functionName:"can_send_notification",language:"python",markdownSource:`# Comparisons & Boolean Logic — Lesson 3: Combine conditions

**New skill:** Logical operators  
**Previously learned:** Unit 03 — parameters and return values

## Why this matters

Real decisions often require more than one condition. Python combines Boolean expressions with \`and\`, \`or\`, and \`not\`.

## Study this example

\`\`\`python
has_pass = True
is_late = False
print(has_pass and not is_late)
print(has_pass or is_late)
\`\`\`

\`and\` requires both sides to be true. \`or\` requires at least one side true. \`not\` reverses a Boolean.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

Would \`False or True\` be true? What about \`True and False\`?

## Common mistake

Use lowercase keywords \`and\`, \`or\`, \`not\`, but capitalized Boolean values \`True\` and \`False\`.

## Practice: Combine conditions

Complete \`can_send_notification(online, muted)\` to return \`True\` only when the player is online **and not muted**.

**Example 1 — Input**

\`\`\`python
can_send_notification(True, False)
\`\`\`

**Output**

\`\`\`python
True
\`\`\`

**Example 2 — Input**

\`\`\`python
can_send_notification(True, True)
\`\`\`

**Output**

\`\`\`python
False
\`\`\`

**Example 3 — Input**

\`\`\`python
can_send_notification(False, False)
\`\`\`

**Output**

\`\`\`python
False
\`\`\`

**Starter file:** [\`main.py\`](../practice/03-and-or-not/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

Both online and not muted must be true.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

\`not\` reverses the muted flag.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Combine the conditions with \`and\`.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
`},{id:"04-comparisons-and-boolean-logic/04-build-entry-check",unit:4,unitName:"Comparisons & Boolean Logic",lesson:4,slug:"04-build-entry-check",title:"Entry Check",concept:"Combining comparisons and logical operators  ",summary:"An event app can decide whether a person qualifies based on a pass or an age threshold.",mode:"function",starter:`def can_enter_event(has_pass, age):
    # Allow a valid pass OR meeting the age requirement.
    pass
`,cases:[{call:"can_enter_event(True, 12)",expected:"True"},{call:"can_enter_event(False, 18)",expected:"True"},{call:"can_enter_event(False, 17)",expected:"False"},{call:"can_enter_event(False, 35)",expected:"True"}],points:15,hints:["Identify the two ways a person can qualify.","Age must be compared to 18, including 18 itself.","Join the two qualification conditions using `or`."],markdown:"04-comparisons-and-boolean-logic/lessons/04-build-entry-check.md",functionName:"can_enter_event",language:"python",markdownSource:`# Comparisons & Boolean Logic — Lesson 4: Build: Entry Check

**New skill:** Combining comparisons and logical operators  
**Previously learned:** Unit 03 — parameters and return values

## Why this matters

An event app can decide whether a person qualifies based on a pass or an age threshold.

## Study this example

\`\`\`python
def can_watch(age, has_ticket):
    return age >= 13 and has_ticket
\`\`\`

The comparison \`age >= 13\` returns a Boolean. \`and\` combines that with the second Boolean parameter.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

Does the sample function allow a twelve-year-old with a ticket?

## Common mistake

Be explicit about whether the rule requires both conditions or only one.

## Practice: Build: Entry Check

Complete \`can_enter_event(has_pass, age)\` so entry is allowed (\`True\`) if the person has a pass **or** is at least \`18\` years old. Otherwise return \`False\`.

**Example 1 — Input**

\`\`\`python
can_enter_event(True, 12)
\`\`\`

**Output**

\`\`\`python
True
\`\`\`

**Example 2 — Input**

\`\`\`python
can_enter_event(False, 18)
\`\`\`

**Output**

\`\`\`python
True
\`\`\`

**Example 3 — Input**

\`\`\`python
can_enter_event(False, 17)
\`\`\`

**Output**

\`\`\`python
False
\`\`\`

**Example 4 — Input**

\`\`\`python
can_enter_event(False, 35)
\`\`\`

**Output**

\`\`\`python
True
\`\`\`

**Starter file:** [\`main.py\`](../practice/04-build-entry-check/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

Identify the two ways a person can qualify.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

Age must be compared to 18, including 18 itself.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Join the two qualification conditions using \`or\`.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
`}],vf=[{id:"05-conditional-execution/01-first-if",unit:5,unitName:"Conditional Execution",lesson:1,slug:"01-first-if",title:"Make a choice with if",concept:"If statements and indentation  ",summary:"Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.",mode:"function",starter:`def classify_temperature(temperature):
    message = 'Normal'
    # Change the message when the temperature is below 10.
    return message
`,cases:[{call:"classify_temperature(5)",expected:"'Cold alert'"},{call:"classify_temperature(10)",expected:"'Normal'"},{call:"classify_temperature(-4)",expected:"'Cold alert'"}],points:5,hints:["Choose the comparison for below 10.","Only update `message` when your condition is true.","Keep `return message` after the conditional block."],markdown:"05-conditional-execution/lessons/01-first-if.md",functionName:"classify_temperature",language:"python",markdownSource:`# Conditional Execution — Lesson 1: Make a choice with if

**New skill:** If statements and indentation  
**Previously learned:** Unit 04 — comparisons and Boolean logic

## Why this matters

Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.

## Study this example

\`\`\`python
def warning(battery):
    message = 'Ready'
    if battery < 20:
        message = 'Charge needed'
    return message
\`\`\`

For \`warning(15)\` the condition is true, so the message changes. For \`warning(90)\` Python skips the indented assignment and returns 'Ready'. The colon and indentation are required.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

What would \`warning(20)\` return? What does the indentation tell Python?

## Common mistake

The colon after if and the indentation underneath it are part of Python syntax.

## Practice

Complete \`classify_temperature(temperature)\` so it returns \`'Cold alert'\` for temperatures **below 10**, and \`'Normal'\` otherwise.

### Public example 1

**Input**

\`\`\`python
classify_temperature(5)
\`\`\`

**Output**

\`\`\`python
'Cold alert'
\`\`\`

### Public example 2

**Input**

\`\`\`python
classify_temperature(10)
\`\`\`

**Output**

\`\`\`python
'Normal'
\`\`\`

### Public example 3

**Input**

\`\`\`python
classify_temperature(-4)
\`\`\`

**Output**

\`\`\`python
'Cold alert'
\`\`\`

**[Open the Python starter](../practice/01-first-if/main.py)**

<details>
<summary>Hint 1</summary>

Choose the comparison for below 10.

</details>

<details>
<summary>Hint 2</summary>

Only update \`message\` when your condition is true.

</details>

<details>
<summary>Hint 3</summary>

Keep \`return message\` after the conditional block.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
`},{id:"05-conditional-execution/02-if-else",unit:5,unitName:"Conditional Execution",lesson:2,slug:"02-if-else",title:"Two possible paths",concept:"If and else  ",summary:"An `if`/`else` structure guarantees that exactly one of two branches runs.",mode:"function",starter:`def classify_pass_status(points):
    # Decide between the two exact messages.
    pass
`,cases:[{call:"classify_pass_status(70)",expected:"'Pass'"},{call:"classify_pass_status(69)",expected:"'Retry'"},{call:"classify_pass_status(100)",expected:"'Pass'"}],points:5,hints:["Which comparison includes 70?","Write one branch for meeting the threshold and one for failing it.","Return the exact capitalized word requested."],markdown:"05-conditional-execution/lessons/02-if-else.md",functionName:"classify_pass_status",language:"python",markdownSource:`# Conditional Execution — Lesson 2: Two possible paths

**New skill:** If and else  
**Previously learned:** Unit 04 — comparisons and Boolean logic

## Why this matters

An \`if\`/\`else\` structure guarantees that exactly one of two branches runs.

## Study this example

\`\`\`python
def can_start(energy):
    if energy >= 50:
        return 'Start'
    else:
        return 'Recharge'
\`\`\`

When the comparison is true, the first branch returns. Otherwise, the else branch returns. Both return values are strings.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

What does \`can_start(50)\` return, and why?

## Common mistake

Avoid returning a Boolean when the prompt explicitly requires a string.

## Practice

Complete \`classify_pass_status(points)\` so it returns \`'Pass'\` for scores at least **70**, and \`'Retry'\` otherwise.

### Public example 1

**Input**

\`\`\`python
classify_pass_status(70)
\`\`\`

**Output**

\`\`\`python
'Pass'
\`\`\`

### Public example 2

**Input**

\`\`\`python
classify_pass_status(69)
\`\`\`

**Output**

\`\`\`python
'Retry'
\`\`\`

### Public example 3

**Input**

\`\`\`python
classify_pass_status(100)
\`\`\`

**Output**

\`\`\`python
'Pass'
\`\`\`

**[Open the Python starter](../practice/02-if-else/main.py)**

<details>
<summary>Hint 1</summary>

Which comparison includes 70?

</details>

<details>
<summary>Hint 2</summary>

Write one branch for meeting the threshold and one for failing it.

</details>

<details>
<summary>Hint 3</summary>

Return the exact capitalized word requested.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
`},{id:"05-conditional-execution/03-elif-bands",unit:5,unitName:"Conditional Execution",lesson:3,slug:"03-elif-bands",title:"More than two outcomes",concept:"Elif chains and mutually exclusive ranges  ",summary:"Use `elif` to check another condition after the first fails. In a chain, Python selects the first true branch.",mode:"function",starter:`def classify_score(score):
    # Choose exactly one award band.
    pass
`,cases:[{call:"classify_score(92)",expected:"'Gold'"},{call:"classify_score(70)",expected:"'Silver'"},{call:"classify_score(69)",expected:"'Bronze'"},{call:"classify_score(90)",expected:"'Gold'"}],points:10,hints:["Check the highest threshold first.","After scores of 90+ are handled, what does >= 70 mean?","Use `else` for every remaining score."],markdown:"05-conditional-execution/lessons/03-elif-bands.md",functionName:"classify_score",language:"python",markdownSource:`# Conditional Execution — Lesson 3: More than two outcomes

**New skill:** Elif chains and mutually exclusive ranges  
**Previously learned:** Unit 04 — comparisons and Boolean logic

## Why this matters

Use \`elif\` to check another condition after the first fails. In a chain, Python selects the first true branch.

## Study this example

\`\`\`python
def light(status):
    if status >= 80:
        return 'Green'
    elif status >= 40:
        return 'Yellow'
    else:
        return 'Red'
\`\`\`

A value of 90 chooses the first branch. A value of 60 skips the first but matches the second. A value of 20 reaches else.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

Why does \`light(95)\` return 'Green' rather than 'Yellow' even though 95 is also >= 40?

## Common mistake

Always order comparisons with overlapping ranges carefully; earlier matching branches win.

## Practice

Complete \`classify_score(score)\` to return \`'Gold'\` for **90 or above**, \`'Silver'\` for **70 through 89**, and \`'Bronze'\` for anything below 70.

### Public example 1

**Input**

\`\`\`python
classify_score(92)
\`\`\`

**Output**

\`\`\`python
'Gold'
\`\`\`

### Public example 2

**Input**

\`\`\`python
classify_score(70)
\`\`\`

**Output**

\`\`\`python
'Silver'
\`\`\`

### Public example 3

**Input**

\`\`\`python
classify_score(69)
\`\`\`

**Output**

\`\`\`python
'Bronze'
\`\`\`

### Public example 4

**Input**

\`\`\`python
classify_score(90)
\`\`\`

**Output**

\`\`\`python
'Gold'
\`\`\`

**[Open the Python starter](../practice/03-elif-bands/main.py)**

<details>
<summary>Hint 1</summary>

Check the highest threshold first.

</details>

<details>
<summary>Hint 2</summary>

After scores of 90+ are handled, what does >= 70 mean?

</details>

<details>
<summary>Hint 3</summary>

Use \`else\` for every remaining score.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
`},{id:"05-conditional-execution/04-build-ride-classifier",unit:5,unitName:"Conditional Execution",lesson:4,slug:"04-build-ride-classifier",title:"Event Ticket Classifier",concept:"Conditionals and Boolean logic together  ",summary:"A student event app classifies each ticket request using more than one condition.",mode:"function",starter:`def classify_ticket(age, has_pass):
    # A valid pass takes priority over age bands.
    pass
`,cases:[{call:"classify_ticket(15, True)",expected:"'Member'"},{call:"classify_ticket(15, False)",expected:"'Youth'"},{call:"classify_ticket(18, False)",expected:"'Guest'"},{call:"classify_ticket(30, True)",expected:"'Member'"}],points:15,hints:["Check the pass before classifying by age.","An age of 18 belongs to the Guest branch.","Use if / elif / else to select one exact label."],markdown:"05-conditional-execution/lessons/04-build-ride-classifier.md",functionName:"classify_ticket",language:"python",markdownSource:`# Conditional Execution — Lesson 4: Build: Event Ticket Classifier

**New skill:** Conditionals and Boolean logic together  
**Previously learned:** Unit 04 — comparisons and Boolean logic

## Why this matters

A student event app classifies each ticket request using more than one condition.

## Study this example

\`\`\`python
def category(age, vip):
    if vip:
        return 'Priority'
    elif age < 13:
        return 'Junior'
    else:
        return 'General'
\`\`\`

Priority comes first, so it applies even if the guest is also younger than 13. The order of the checks communicates the intended rule.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

Why does \`category(10, True)\` return 'Priority'?

## Common mistake

Do not test the age band before the VIP condition if priority must take precedence.

## Practice

Complete \`classify_ticket(age, has_pass)\` to return \`'Member'\` if \`has_pass\` is true, otherwise \`'Youth'\` if \`age\` is **under 18**, otherwise \`'Guest'\`. Return a string in every case.

### Public example 1

**Input**

\`\`\`python
classify_ticket(15, True)
\`\`\`

**Output**

\`\`\`python
'Member'
\`\`\`

### Public example 2

**Input**

\`\`\`python
classify_ticket(15, False)
\`\`\`

**Output**

\`\`\`python
'Youth'
\`\`\`

### Public example 3

**Input**

\`\`\`python
classify_ticket(18, False)
\`\`\`

**Output**

\`\`\`python
'Guest'
\`\`\`

### Public example 4

**Input**

\`\`\`python
classify_ticket(30, True)
\`\`\`

**Output**

\`\`\`python
'Member'
\`\`\`

**[Open the Python starter](../practice/04-build-ride-classifier/main.py)**

<details>
<summary>Hint 1</summary>

Check the pass before classifying by age.

</details>

<details>
<summary>Hint 2</summary>

An age of 18 belongs to the Guest branch.

</details>

<details>
<summary>Hint 3</summary>

Use if / elif / else to select one exact label.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
`}],xf=[{id:"06-iteration/01-for-ranges",unit:6,unitName:"Iteration & Accumulation",lesson:1,slug:"01-for-ranges",title:"Repeat an instruction",concept:"For loops and ranges  ",summary:"A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.",mode:"script",starter:`# Use one loop to print the integers 1 through 4.
`,cases:[{expected:`1
2
3
4`}],points:5,hints:["`range()` controls how many loop iterations occur.","The ending argument is not included.","Place a single print call inside the loop."],markdown:"06-iteration/lessons/01-for-ranges.md",language:"python",markdownSource:`# Iteration & Accumulation — Lesson 1: Repeat an instruction

**New skill:** For loops and ranges  
**Previously learned:** Unit 05 — conditional execution

## Why this matters

A loop makes Python repeat an instruction without copying the same line over and over. \`range()\` produces a sequence of integer values.

## Study this example

\`\`\`python
for checkpoint in range(1, 5):
    print(checkpoint)
\`\`\`

The displayed values are 1, 2, 3, 4. The final argument of \`range()\` is exclusive. The body must be indented.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

What values are produced by \`range(2, 6)\`?

## Common mistake

\`range(1, 5)\` does not include 5. Use \`range(1, 6)\` when you need to include 5.

## Practice

Use a loop with \`range()\` to display the integers **1, 2, 3, 4** on separate lines. Do not use four individual print statements.

**Expected console output**

\`\`\`text
1
2
3
4
\`\`\`

**[Open the Python starter](../practice/01-for-ranges/main.py)**

<details>
<summary>Hint 1</summary>

\`range()\` controls how many loop iterations occur.

</details>

<details>
<summary>Hint 2</summary>

The ending argument is not included.

</details>

<details>
<summary>Hint 3</summary>

Place a single print call inside the loop.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
`},{id:"06-iteration/02-running-total",unit:6,unitName:"Iteration & Accumulation",lesson:2,slug:"02-running-total",title:"Add values as you go",concept:"Accumulator variable  ",summary:"A running total begins at a starting value and changes every time a loop visits another item.",mode:"function",starter:`def sum_to_limit(limit):
    # Add every integer from 1 up to and including limit.
    pass
`,cases:[{call:"sum_to_limit(4)",expected:"10"},{call:"sum_to_limit(0)",expected:"0"},{call:"sum_to_limit(1)",expected:"1"},{call:"sum_to_limit(8)",expected:"36"}],points:5,hints:["Start a total variable at zero.","Remember the endpoint rule for `range()`.","Update the total on each iteration and return it at the end."],markdown:"06-iteration/lessons/02-running-total.md",functionName:"sum_to_limit",language:"python",markdownSource:`# Iteration & Accumulation — Lesson 2: Add values as you go

**New skill:** Accumulator variable  
**Previously learned:** Unit 05 — conditional execution

## Why this matters

A running total begins at a starting value and changes every time a loop visits another item.

## Study this example

\`\`\`python
total = 0
for number in range(1, 4):
    total += number
print(total)
\`\`\`

First total is 0. The loop adds 1, then 2, then 3, producing 6. \`+=\` is shorthand for assigning the previous value plus a new amount.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

What happens if the starting total is 10 instead of 0?

## Common mistake

Initialize the accumulator **before** the loop. Inside the loop would reset it on every iteration.

## Practice

Complete \`sum_to_limit(limit)\` to return the **sum of every integer from 1 through limit, inclusive**. \`limit\` is a nonnegative integer.

### Public example 1

**Input**

\`\`\`python
sum_to_limit(4)
\`\`\`

**Output**

\`\`\`python
10
\`\`\`

### Public example 2

**Input**

\`\`\`python
sum_to_limit(0)
\`\`\`

**Output**

\`\`\`python
0
\`\`\`

### Public example 3

**Input**

\`\`\`python
sum_to_limit(1)
\`\`\`

**Output**

\`\`\`python
1
\`\`\`

### Public example 4

**Input**

\`\`\`python
sum_to_limit(8)
\`\`\`

**Output**

\`\`\`python
36
\`\`\`

**[Open the Python starter](../practice/02-running-total/main.py)**

<details>
<summary>Hint 1</summary>

Start a total variable at zero.

</details>

<details>
<summary>Hint 2</summary>

Remember the endpoint rule for \`range()\`.

</details>

<details>
<summary>Hint 3</summary>

Update the total on each iteration and return it at the end.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
`},{id:"06-iteration/03-count-matches",unit:6,unitName:"Iteration & Accumulation",lesson:3,slug:"03-count-matches",title:"Count matches in a range",concept:"Counters, modulo, and conditional loops  ",summary:"You can combine an if statement with a loop to count how many numbers meet a rule.",mode:"function",starter:`def count_multiples_of_three(limit):
    # Count numbers in the range that are divisible by 3.
    pass
`,cases:[{call:"count_multiples_of_three(10)",expected:"3"},{call:"count_multiples_of_three(3)",expected:"1"},{call:"count_multiples_of_three(2)",expected:"0"},{call:"count_multiples_of_three(15)",expected:"5"}],points:10,hints:["Which operator checks if division has no remainder?","Visit each integer in the inclusive interval.","Only increase the counter for numbers divisible by 3."],markdown:"06-iteration/lessons/03-count-matches.md",functionName:"count_multiples_of_three",language:"python",markdownSource:`# Iteration & Accumulation — Lesson 3: Count matches in a range

**New skill:** Counters, modulo, and conditional loops  
**Previously learned:** Unit 05 — conditional execution

## Why this matters

You can combine an if statement with a loop to count how many numbers meet a rule.

## Study this example

\`\`\`python
count = 0
for n in range(1, 7):
    if n % 2 == 0:
        count += 1
print(count)
\`\`\`

The modulo operator \`%\` gives the remainder. Values divisible by 2 have a remainder of 0; among 1 through 6, there are three even numbers.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

How many even numbers are there from 1 through 9?

## Common mistake

Increment the count only if a number satisfies the condition, not on every loop iteration.

## Practice

Complete \`count_multiples_of_three(limit)\` to return how many positive integers from **1 through limit, inclusive** are divisible by **3**. \`limit\` is a nonnegative integer.

### Public example 1

**Input**

\`\`\`python
count_multiples_of_three(10)
\`\`\`

**Output**

\`\`\`python
3
\`\`\`

### Public example 2

**Input**

\`\`\`python
count_multiples_of_three(3)
\`\`\`

**Output**

\`\`\`python
1
\`\`\`

### Public example 3

**Input**

\`\`\`python
count_multiples_of_three(2)
\`\`\`

**Output**

\`\`\`python
0
\`\`\`

### Public example 4

**Input**

\`\`\`python
count_multiples_of_three(15)
\`\`\`

**Output**

\`\`\`python
5
\`\`\`

**[Open the Python starter](../practice/03-count-matches/main.py)**

<details>
<summary>Hint 1</summary>

Which operator checks if division has no remainder?

</details>

<details>
<summary>Hint 2</summary>

Visit each integer in the inclusive interval.

</details>

<details>
<summary>Hint 3</summary>

Only increase the counter for numbers divisible by 3.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
`},{id:"06-iteration/04-build-launch-countdown",unit:6,unitName:"Iteration & Accumulation",lesson:4,slug:"04-build-launch-countdown",title:"Launch Countdown",concept:"Loops, conditions, strings and return values  ",summary:"A robotics launch controller needs to report every countdown number and then announce launch.",mode:"function",starter:`def create_countdown(start):
    # Build and return a countdown string.
    pass
`,cases:[{call:"create_countdown(3)",expected:"'3\\n2\\n1\\nLaunch!'"},{call:"create_countdown(1)",expected:"'1\\nLaunch!'"},{call:"create_countdown(5)",expected:"'5\\n4\\n3\\n2\\n1\\nLaunch!'"}],points:15,hints:["You'll need a loop that visits numbers in reverse order.","Use `str()` to turn each number into text before appending.","Use `\\n` between lines and add `Launch!` only once at the end."],markdown:"06-iteration/lessons/04-build-launch-countdown.md",functionName:"create_countdown",language:"python",markdownSource:`# Iteration & Accumulation — Lesson 4: Build: Launch Countdown

**New skill:** Loops, conditions, strings and return values  
**Previously learned:** Unit 05 — conditional execution

## Why this matters

A robotics launch controller needs to report every countdown number and then announce launch.

## Study this example

\`\`\`python
def count_up(stop):
    message = ''
    for n in range(1, stop + 1):
        message += str(n) + '\\n'
    return message + 'Done'
\`\`\`

Here \`str(n)\` turns a number into text. The newline \`\\n\` separates lines within one returned string. The final message is added after the loop finishes.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

Why is \`str(n)\` necessary before joining it to a string with \`+\`?

## Common mistake

Building and returning one string is different from printing multiple separate lines.

## Practice

Complete \`create_countdown(start)\` to **return one string** containing a countdown from \`start\` to \`1\`, each on its own line, followed by \`Launch!\`. \`start\` is a positive integer. Example for 3: \`3\\n2\\n1\\nLaunch!\`.

### Public example 1

**Input**

\`\`\`python
create_countdown(3)
\`\`\`

**Output**

\`\`\`python
'3\\n2\\n1\\nLaunch!'
\`\`\`

### Public example 2

**Input**

\`\`\`python
create_countdown(1)
\`\`\`

**Output**

\`\`\`python
'1\\nLaunch!'
\`\`\`

### Public example 3

**Input**

\`\`\`python
create_countdown(5)
\`\`\`

**Output**

\`\`\`python
'5\\n4\\n3\\n2\\n1\\nLaunch!'
\`\`\`

**[Open the Python starter](../practice/04-build-launch-countdown/main.py)**

<details>
<summary>Hint 1</summary>

You'll need a loop that visits numbers in reverse order.

</details>

<details>
<summary>Hint 2</summary>

Use \`str()\` to turn each number into text before appending.

</details>

<details>
<summary>Hint 3</summary>

Use \`\\n\` between lines and add \`Launch!\` only once at the end.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
`}],wf=[{id:"07-strings-and-text/01-index-and-length",unit:7,unitName:"Strings & Text Processing",lesson:1,slug:"01-index-and-length",title:"Read characters by position",concept:"String indexing and length",summary:"A string is an ordered sequence of characters. Positions start at zero, and negative indexes count from the end.",mode:"function",starter:`def edge_letters(text):
    # Return the first and last characters, in that order.
    pass
`,cases:[{call:"edge_letters('robot')",expected:"'rt'"},{call:"edge_letters('AA')",expected:"'AA'"},{call:"edge_letters('Python')",expected:"'Pn'"},{call:"edge_letters('Z9')",expected:"'Z9'"}],points:5,hints:["Access the first character with index 0.","A negative index can select the final character.","Join the two selected characters with `+`."],markdown:"07-strings-and-text/lessons/01-index-and-length.md",functionName:"edge_letters",language:"python",markdownSource:`# Strings & Text Processing — Lesson 1: Read characters by position

**New skill:** String indexing and length  
**Previously learned:** Units 01–06

## Why this matters

Player names, QR labels, and message codes are strings. Programs often need to inspect just a few characters.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
label = 'T-BIRD'
print(len(label))
print(label[0])
print(label[-1])
\`\`\`

## Step 2 — Trace the code

1. Run the example and note that the string has six characters.
2. Trace index 0 to the first character, then trace index -1 to the final character.
3. Notice that indexing reads a character but does not change the original string.

## Step 3 — Check your understanding

For the text \`ROBOT\`, predict \`text[1]\` and \`len(text)\` before running.

## Step 4 — Watch for this mistake

\`text[len(text)]\` goes one position beyond the last valid index. Use \`len(text) - 1\` or \`-1\`.

## Practice: Read characters by position

Complete \`edge_letters(text)\` to return the first and last characters joined into a two-character string. The input contains at least two characters.

**Function contract:** \`edge_letters(text)\`  
**Starter file:** [\`main.py\`](../../practice/01-index-and-length/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Access the first character with index 0.

</details>

<details>
<summary>Hint 2 — Build</summary>

A negative index can select the final character.

</details>

<details>
<summary>Hint 3 — Test</summary>

Join the two selected characters with \`+\`.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`},{id:"07-strings-and-text/02-slices-and-substrings",unit:7,unitName:"Strings & Text Processing",lesson:2,slug:"02-slices-and-substrings",title:"Take a slice of a string",concept:"Slicing, bounds and uppercasing",summary:"A slice extracts part of a string without modifying it; the ending position is excluded.",mode:"function",starter:`def short_code(text):
    # Take three characters and return their uppercase version.
    pass
`,cases:[{call:"short_code('computer')",expected:"'COM'"},{call:"short_code('app')",expected:"'APP'"},{call:"short_code('robotics')",expected:"'ROB'"},{call:"short_code('XyZ987')",expected:"'XYZ'"}],points:5,hints:["Use a slice that starts at the beginning.","Remember that the stop index is excluded.","Call the string method `.upper()` on the slice."],markdown:"07-strings-and-text/lessons/02-slices-and-substrings.md",functionName:"short_code",language:"python",markdownSource:`# Strings & Text Processing — Lesson 2: Take a slice of a string

**New skill:** Slicing, bounds and uppercasing  
**Previously learned:** Units 01–06

## Why this matters

Apps create short category tags, previews, and IDs from longer names.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
word = 'playground'
print(word[:4])
print(word[4:])
print(word[:4].upper())
\`\`\`

## Step 2 — Trace the code

1. Read \`word[:4]\` as characters from the beginning up to, but not including, index 4.
2. Change the ending index and compare the outputs.
3. Apply \`.upper()\` to a slice to create an uppercase code.

## Step 3 — Check your understanding

Predict \`'coding'[1:4]\`. Which letters does Python include?

## Step 4 — Watch for this mistake

A slice uses an exclusive end position. \`[:3]\` takes three characters, not four.

## Practice: Take a slice of a string

Complete \`short_code(text)\` to return the first three characters of \`text\` in uppercase. Inputs contain at least three characters.

**Function contract:** \`short_code(text)\`  
**Starter file:** [\`main.py\`](../../practice/02-slices-and-substrings/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Use a slice that starts at the beginning.

</details>

<details>
<summary>Hint 2 — Build</summary>

Remember that the stop index is excluded.

</details>

<details>
<summary>Hint 3 — Test</summary>

Call the string method \`.upper()\` on the slice.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`},{id:"07-strings-and-text/03-clean-up-input",unit:7,unitName:"Strings & Text Processing",lesson:3,slug:"03-clean-up-input",title:"Clean messy text",concept:"strip, lower, replace",summary:"String methods can normalize inconsistent user input without requiring the user to type perfectly.",mode:"function",starter:`def normalize_tag(tag):
    # Normalize the input into a lowercase hyphenated tag.
    pass
`,cases:[{call:"normalize_tag('  Coding Club  ')",expected:"'coding-club'"},{call:"normalize_tag('Python')",expected:"'python'"},{call:"normalize_tag('  A B C ')",expected:"'a-b-c'"},{call:"normalize_tag('Game Design')",expected:"'game-design'"}],points:10,hints:["Begin with `.strip()`.","Chain `.lower()` after removing outside spaces.","Use `.replace(' ', '-')` for internal spaces."],markdown:"07-strings-and-text/lessons/03-clean-up-input.md",functionName:"normalize_tag",language:"python",markdownSource:`# Strings & Text Processing — Lesson 3: Clean messy text

**New skill:** strip, lower, replace  
**Previously learned:** Units 01–06

## Why this matters

Searching and tagging work better when extra spaces and inconsistent capitalization are removed.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
tag = '  Coding Club  '
print(tag.strip())
print(tag.strip().lower())
print(tag.strip().lower().replace(' ', '-'))
\`\`\`

## Step 2 — Trace the code

1. \`.strip()\` removes leading and trailing spaces.
2. \`.lower()\` makes letter case consistent.
3. \`.replace(' ', '-')\` changes internal spaces into hyphens. Apply the operations in order.

## Step 3 — Check your understanding

What does \`'  Game Design  '.strip().lower()\` produce? What remains between the words?

## Step 4 — Watch for this mistake

\`.strip()\` does not remove spaces between words, and string methods return new strings.

## Practice: Clean messy text

Complete \`normalize_tag(tag)\` to remove surrounding whitespace, lowercase letters, and replace every internal space with a hyphen.

**Function contract:** \`normalize_tag(tag)\`  
**Starter file:** [\`main.py\`](../../practice/03-clean-up-input/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Begin with \`.strip()\`.

</details>

<details>
<summary>Hint 2 — Build</summary>

Chain \`.lower()\` after removing outside spaces.

</details>

<details>
<summary>Hint 3 — Test</summary>

Use \`.replace(' ', '-')\` for internal spaces.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`},{id:"07-strings-and-text/04-build-a-badge",unit:7,unitName:"Strings & Text Processing",lesson:4,slug:"04-build-a-badge",title:"Build a digital name badge",concept:"Formatting and multiple parameters",summary:"A function can combine several cleaned input strings into a single, precisely formatted message.",mode:"function",starter:`def format_badge(name, role):
    # Format two pieces of text as one badge label.
    pass
`,cases:[{call:"format_badge('  nova  ', ' student ')",expected:"'Nova | STUDENT'"},{call:"format_badge('lee', 'helper')",expected:"'Lee | HELPER'"},{call:"format_badge('  alex kim ', 'team lead ')",expected:"'Alex Kim | TEAM LEAD'"},{call:"format_badge('JORDAN', ' staff')",expected:"'Jordan | STAFF'"}],points:15,hints:["Use `.strip().title()` for the name.","Use `.strip().upper()` for the role.","Return the formatted string instead of printing it."],markdown:"07-strings-and-text/lessons/04-build-a-badge.md",functionName:"format_badge",language:"python",markdownSource:`# Strings & Text Processing — Lesson 4: Build a digital name badge

**New skill:** Formatting and multiple parameters  
**Previously learned:** Units 01–06

## Why this matters

The same formatting rules can serve an event sign-in screen, classroom app, or simple roster.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
name = '  nOVA  '
role = ' student '
clean_name = name.strip().title()
clean_role = role.strip().upper()
print(clean_name + ' | ' + clean_role)
\`\`\`

## Step 2 — Trace the code

1. Normalize each input separately, so each rule is easy to test.
2. Use \`.title()\` for the display name and \`.upper()\` for the role.
3. Combine the results with the exact separator \`' | '\`.

## Step 3 — Check your understanding

Predict the output when the name is \`'  aLEX KIM '\` and the role is \`'helper'\`.

## Step 4 — Watch for this mistake

Output punctuation and spaces are part of the function contract. Do not add extra quotation marks around the result.

## Practice: Build a digital name badge

Complete \`format_badge(name, role)\` to return the trimmed name in title case, then \` | \`, then the trimmed role in uppercase.

**Function contract:** \`format_badge(name, role)\`  
**Starter file:** [\`main.py\`](../../practice/04-build-a-badge/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Use \`.strip().title()\` for the name.

</details>

<details>
<summary>Hint 2 — Build</summary>

Use \`.strip().upper()\` for the role.

</details>

<details>
<summary>Hint 3 — Test</summary>

Return the formatted string instead of printing it.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`}],kf=[{id:"08-lists-and-collections/01-list-indexing",unit:8,unitName:"Lists & Collections",lesson:1,slug:"01-list-indexing",title:"Read values from a list",concept:"Lists, indexes, negative positions",summary:"A list stores several values in order, and each can be read using its position.",mode:"function",starter:`def end_points(values):
    # Return a new two-item list, not the original list.
    pass
`,cases:[{call:"end_points([4, 7, 9])",expected:"[4, 9]"},{call:"end_points([2])",expected:"[2, 2]"},{call:"end_points(['a', 'b'])",expected:"['a', 'b']"},{call:"end_points([0, -1, 3, 8])",expected:"[0, 8]"}],points:5,hints:["Select the value at index 0.","Use index -1 for the final value.","Wrap the two values in square brackets."],markdown:"08-lists-and-collections/lessons/01-list-indexing.md",functionName:"end_points",language:"python",markdownSource:`# Lists & Collections — Lesson 1: Read values from a list

**New skill:** Lists, indexes, negative positions  
**Previously learned:** Units 01–07

## Why this matters

Scores, sensor readings, and attendance check-ins often arrive as groups of values.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
scores = [8, 12, 15]
print(scores[0])
print(scores[-1])
print(len(scores))
\`\`\`

## Step 2 — Trace the code

1. Find the square brackets that group values into one list.
2. Identify the first item at index 0 and the last with index -1.
3. Use \`len()\` to count items, not the characters inside them.

## Step 3 — Check your understanding

What does \`[5, 10, 15, 20][1]\` return?

## Step 4 — Watch for this mistake

A list of three items has indexes 0, 1 and 2. Its last item is not at index 3.

## Practice: Read values from a list

Complete \`end_points(values)\` to return a two-item list containing the first and last input items. The input always contains at least one item.

**Function contract:** \`end_points(values)\`  
**Starter file:** [\`main.py\`](../../practice/01-list-indexing/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Select the value at index 0.

</details>

<details>
<summary>Hint 2 — Build</summary>

Use index -1 for the final value.

</details>

<details>
<summary>Hint 3 — Test</summary>

Wrap the two values in square brackets.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`},{id:"08-lists-and-collections/02-copy-and-change",unit:8,unitName:"Lists & Collections",lesson:2,slug:"02-copy-and-change",title:"Update a copy, not the original",concept:"List copying and assignment",summary:"Lists are mutable, so programs should decide carefully whether to change the caller's data or return a modified copy.",mode:"function",starter:`def replace_last(items, value):
    # Make a copy, edit the copy, then return it.
    pass
`,cases:[{call:"replace_last([2, 4, 6], 8)",expected:"[2, 4, 8]"},{call:"replace_last(['old'], 'new')",expected:"['new']"},{call:"replace_last([0, 0], 3)",expected:"[0, 3]"},{call:"replace_last(['a', 'b'], 'z')",expected:"['a', 'z']"}],points:10,hints:["Use `items.copy()` first.","Update position -1 in the copied list.","Return the copy."],markdown:"08-lists-and-collections/lessons/02-copy-and-change.md",functionName:"replace_last",language:"python",markdownSource:`# Lists & Collections — Lesson 2: Update a copy, not the original

**New skill:** List copying and assignment  
**Previously learned:** Units 01–07

## Why this matters

A class app might preview edited settings without overwriting the original choices.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
original = ['red', 'blue']
updated = original.copy()
updated[-1] = 'green'
print(original)
print(updated)
\`\`\`

## Step 2 — Trace the code

1. Create a new list with \`.copy()\`.
2. Assign a new value at an existing index.
3. Confirm that the original list still has its previous value.

## Step 3 — Check your understanding

If \`a = [1, 2]\` and \`b = a\`, what changes when \`b[0] = 9\`? Compare with \`.copy()\`.

## Step 4 — Watch for this mistake

\`copy = items\` gives two names to the same list. It does not make an independent copy.

## Practice: Update a copy, not the original

Complete \`replace_last(items, value)\` to return a new list with its final item replaced. Do not modify \`items\`. The list is nonempty.

**Function contract:** \`replace_last(items, value)\`  
**Starter file:** [\`main.py\`](../../practice/02-copy-and-change/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Use \`items.copy()\` first.

</details>

<details>
<summary>Hint 2 — Build</summary>

Update position -1 in the copied list.

</details>

<details>
<summary>Hint 3 — Test</summary>

Return the copy.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`},{id:"08-lists-and-collections/03-filter-a-list",unit:8,unitName:"Lists & Collections",lesson:3,slug:"03-filter-a-list",title:"Keep values that meet a rule",concept:"For loops, if statements, accumulators",summary:"A loop can inspect a collection and build a new list containing only matching items.",mode:"function",starter:`def positive_values(numbers):
    # Keep positive numbers in a new list.
    pass
`,cases:[{call:"positive_values([-2, 7, 0, 4])",expected:"[7, 4]"},{call:"positive_values([])",expected:"[]"},{call:"positive_values([-5, -1])",expected:"[]"},{call:"positive_values([3, 2, 1])",expected:"[3, 2, 1]"}],points:10,hints:["Begin with an empty list.","Use a `for` loop over the input list.","Append only when the value is strictly greater than zero."],markdown:"08-lists-and-collections/lessons/03-filter-a-list.md",functionName:"positive_values",language:"python",markdownSource:`# Lists & Collections — Lesson 3: Keep values that meet a rule

**New skill:** For loops, if statements, accumulators  
**Previously learned:** Units 01–07

## Why this matters

Apps filter notifications, positive readings, and completed tasks using the same pattern.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
numbers = [-2, 7, 0, 4]
positive = []
for number in numbers:
    if number > 0:
        positive.append(number)
print(positive)
\`\`\`

## Step 2 — Trace the code

1. Start with an empty result list.
2. Visit each input value using a \`for\` loop.
3. Append a value only when its condition is true.

## Step 3 — Check your understanding

For \`[-1, 0, 2]\`, which values pass \`number > 0\`?

## Step 4 — Watch for this mistake

\`.append()\` changes an existing list. Calling it does not return the updated list.

## Practice: Keep values that meet a rule

Complete \`positive_values(numbers)\` to return a new list containing only numbers greater than zero, in their original order.

**Function contract:** \`positive_values(numbers)\`  
**Starter file:** [\`main.py\`](../../practice/03-filter-a-list/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Begin with an empty list.

</details>

<details>
<summary>Hint 2 — Build</summary>

Use a \`for\` loop over the input list.

</details>

<details>
<summary>Hint 3 — Test</summary>

Append only when the value is strictly greater than zero.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`},{id:"08-lists-and-collections/04-build-a-leaderboard",unit:8,unitName:"Lists & Collections",lesson:4,slug:"04-build-a-leaderboard",title:"Build a score leaderboard",concept:"Sorted lists, reverse order and preserving data",summary:"A leaderboard orders numeric scores while leaving the original score list unchanged.",mode:"function",starter:`def top_two(scores):
    # Return two highest scores without modifying the input.
    pass
`,cases:[{call:"top_two([12, 28, 19])",expected:"[28, 19]"},{call:"top_two([9, 9, 3])",expected:"[9, 9]"},{call:"top_two([-3, -1, -5])",expected:"[-1, -3]"},{call:"top_two([4, 2])",expected:"[4, 2]"}],points:15,hints:["Make a descending copy with `sorted()`.","Use `reverse=True` rather than manually swapping values.","Return a slice containing the first two items."],markdown:"08-lists-and-collections/lessons/04-build-a-leaderboard.md",functionName:"top_two",language:"python",markdownSource:`# Lists & Collections — Lesson 4: Build a score leaderboard

**New skill:** Sorted lists, reverse order and preserving data  
**Previously learned:** Units 01–07

## Why this matters

Sorting is useful for game rankings, robotics competitions, and class progress views.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
scores = [12, 28, 19]
ranked = sorted(scores, reverse=True)
print(ranked)
print(scores)
\`\`\`

## Step 2 — Trace the code

1. Use \`sorted()\` to create a new ordered list.
2. Set \`reverse=True\` to put larger values first.
3. Use a slice to select only the two top results.

## Step 3 — Check your understanding

What are the first two values of \`sorted([7, 9, 9, 3], reverse=True)\`?

## Step 4 — Watch for this mistake

\`.sort()\` changes a list in place and returns \`None\`; \`sorted()\` creates a new list.

## Practice: Build a score leaderboard

Complete \`top_two(scores)\` to return the two highest scores in descending order. Duplicates count. There will be at least two scores.

**Function contract:** \`top_two(scores)\`  
**Starter file:** [\`main.py\`](../../practice/04-build-a-leaderboard/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Make a descending copy with \`sorted()\`.

</details>

<details>
<summary>Hint 2 — Build</summary>

Use \`reverse=True\` rather than manually swapping values.

</details>

<details>
<summary>Hint 3 — Test</summary>

Return a slice containing the first two items.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`}],bf=[{id:"09-dictionaries-and-data/01-keys-and-values",unit:9,unitName:"Dictionaries & Data",lesson:1,slug:"01-keys-and-values",title:"Look up information by key",concept:"Dictionary lookup and get",summary:"Dictionaries connect unique keys with values, letting a program retrieve information by name.",mode:"function",starter:`def price_for(prices, item):
    # Look up a price with a safe default.
    pass
`,cases:[{call:"price_for({'pen': 2, 'book': 5}, 'book')",expected:"5"},{call:"price_for({'pen': 2}, 'eraser')",expected:"0"},{call:"price_for({}, 'missing')",expected:"0"},{call:"price_for({'x': 0, 'y': 7}, 'x')",expected:"0"}],points:5,hints:["Use `.get()` on the dictionary.","Pass `item` as the key.","Use zero as the fallback value."],markdown:"09-dictionaries-and-data/lessons/01-keys-and-values.md",functionName:"price_for",language:"python",markdownSource:`# Dictionaries & Data — Lesson 1: Look up information by key

**New skill:** Dictionary lookup and get  
**Previously learned:** Units 01–08

## Why this matters

Apps use lookup tables for labels, inventory prices, and configuration values.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
prices = {'pen': 2, 'notebook': 5}
print(prices['pen'])
print(prices.get('eraser', 0))
\`\`\`

## Step 2 — Trace the code

1. Identify a key and its value in each key-value pair.
2. Use square brackets when the key is known to exist.
3. Use \`.get(key, default)\` to handle a key that may be missing.

## Step 3 — Check your understanding

What does \`{'a': 3}.get('b', 0)\` return, and why?

## Step 4 — Watch for this mistake

A missing key causes \`KeyError\` with square brackets, but \`.get()\` can supply a default.

## Practice: Look up information by key

Complete \`price_for(prices, item)\` to return the item's numeric price, or 0 if the item is not in the dictionary.

**Function contract:** \`price_for(prices, item)\`  
**Starter file:** [\`main.py\`](../../practice/01-keys-and-values/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Use \`.get()\` on the dictionary.

</details>

<details>
<summary>Hint 2 — Build</summary>

Pass \`item\` as the key.

</details>

<details>
<summary>Hint 3 — Test</summary>

Use zero as the fallback value.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`},{id:"09-dictionaries-and-data/02-count-with-dictionaries",unit:9,unitName:"Dictionaries & Data",lesson:2,slug:"02-count-with-dictionaries",title:"Count repeated events",concept:"Frequency tables and dictionary updates",summary:"A frequency table records how many times each event appears.",mode:"function",starter:`def event_counts(events):
    # Count how many times each label occurs.
    pass
`,cases:[{call:"event_counts(['run', 'jump', 'run'])",expected:"{'run': 2, 'jump': 1}"},{call:"event_counts([])",expected:"{}"},{call:"event_counts(['a', 'a', 'a'])",expected:"{'a': 3}"},{call:"event_counts(['x', 'y'])",expected:"{'x': 1, 'y': 1}"}],points:10,hints:["Create an empty dictionary for the counts.","Loop over each event label.","Assign `counts[event] = counts.get(event, 0) + 1`."],markdown:"09-dictionaries-and-data/lessons/02-count-with-dictionaries.md",functionName:"event_counts",language:"python",markdownSource:`# Dictionaries & Data — Lesson 2: Count repeated events

**New skill:** Frequency tables and dictionary updates  
**Previously learned:** Units 01–08

## Why this matters

A classroom app could tally survey choices or event types without a fixed list of categories.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
events = ['run', 'jump', 'run']
counts = {}
for event in events:
    counts[event] = counts.get(event, 0) + 1
print(counts)
\`\`\`

## Step 2 — Trace the code

1. Start with an empty dictionary.
2. For each event, get the current count (default 0).
3. Add one and save the updated count under that event key.

## Step 3 — Check your understanding

Trace the counts after each item in \`['A','B','A']\`.

## Step 4 — Watch for this mistake

Overwriting every count with 1 loses the previous total. Increment the existing count.

## Practice: Count repeated events

Complete \`event_counts(events)\` to return a dictionary mapping each event string to how many times it occurred.

**Function contract:** \`event_counts(events)\`  
**Starter file:** [\`main.py\`](../../practice/02-count-with-dictionaries/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Create an empty dictionary for the counts.

</details>

<details>
<summary>Hint 2 — Build</summary>

Loop over each event label.

</details>

<details>
<summary>Hint 3 — Test</summary>

Assign \`counts[event] = counts.get(event, 0) + 1\`.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`},{id:"09-dictionaries-and-data/03-records-and-fields",unit:9,unitName:"Dictionaries & Data",lesson:3,slug:"03-records-and-fields",title:"Read a collection of records",concept:"Lists of dictionaries, fields and comparison",summary:"A list of dictionaries can represent several records with the same field names.",mode:"function",starter:`def best_student(records):
    # Compare record scores, keeping the first in a tie.
    pass
`,cases:[{call:"best_student([{'name': 'Kai', 'score': 11}, {'name': 'Lee', 'score': 15}])",expected:"'Lee'"},{call:"best_student([{'name': 'A', 'score': 5}, {'name': 'B', 'score': 5}])",expected:"'A'"},{call:"best_student([{'name': 'Solo', 'score': -2}])",expected:"'Solo'"},{call:"best_student([{'name': 'A', 'score': -5}, {'name': 'B', 'score': -1}])",expected:"'B'"}],points:10,hints:["Start with the first record as your best.","Compare the `score` fields, not the names.","Use `>` rather than `>=` to preserve the first name in a tie."],markdown:"09-dictionaries-and-data/lessons/03-records-and-fields.md",functionName:"best_student",language:"python",markdownSource:`# Dictionaries & Data — Lesson 3: Read a collection of records

**New skill:** Lists of dictionaries, fields and comparison  
**Previously learned:** Units 01–08

## Why this matters

This pattern appears in scoreboards, check-in logs, and reports built from data.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
records = [{'name': 'Kai', 'score': 11}, {'name': 'Lee', 'score': 15}]
best = records[0]
for record in records:
    if record['score'] > best['score']:
        best = record
print(best['name'])
\`\`\`

## Step 2 — Trace the code

1. Read each record as a dictionary with \`name\` and \`score\` keys.
2. Begin with the first record as the current best.
3. Visit each record and replace the best only for a strictly higher score.

## Step 3 — Check your understanding

Which name wins if two records share the highest score and we compare using \`>\`?

## Step 4 — Watch for this mistake

Starting the best score at 0 fails when every score is negative. Start from the first record.

## Practice: Read a collection of records

Complete \`best_student(records)\` to return the name belonging to the highest score. In a tie, choose the first student. The input is nonempty.

**Function contract:** \`best_student(records)\`  
**Starter file:** [\`main.py\`](../../practice/03-records-and-fields/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Start with the first record as your best.

</details>

<details>
<summary>Hint 2 — Build</summary>

Compare the \`score\` fields, not the names.

</details>

<details>
<summary>Hint 3 — Test</summary>

Use \`>\` rather than \`>=\` to preserve the first name in a tie.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`},{id:"09-dictionaries-and-data/04-inventory-calculator",unit:9,unitName:"Dictionaries & Data",lesson:4,slug:"04-inventory-calculator",title:"Calculate an inventory order",concept:"Dictionary items, nested lookup, accumulators",summary:"A short program can combine quantities and prices from separate dictionaries to calculate a total.",mode:"function",starter:`def order_total(quantities, prices):
    # Multiply each quantity by its price and total the order.
    pass
`,cases:[{call:"order_total({'pen': 3, 'notebook': 2}, {'pen': 2, 'notebook': 5})",expected:"16"},{call:"order_total({'pen': 2, 'unknown': 4}, {'pen': 3})",expected:"6"},{call:"order_total({}, {'x': 10})",expected:"0"},{call:"order_total({'badge': 5}, {'badge': 0})",expected:"0"}],points:15,hints:["Start a numeric total at zero.","Loop over `quantities.items()`.","Multiply each count by `prices.get(item, 0)` before adding it."],markdown:"09-dictionaries-and-data/lessons/04-inventory-calculator.md",functionName:"order_total",language:"python",markdownSource:`# Dictionaries & Data — Lesson 4: Calculate an inventory order

**New skill:** Dictionary items, nested lookup, accumulators  
**Previously learned:** Units 01–08

## Why this matters

Inventory and checkout tools combine multiple data sources while handling missing information carefully.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
quantities = {'pen': 3, 'notebook': 2}
prices = {'pen': 2, 'notebook': 5}
total = 0
for item, count in quantities.items():
    total += count * prices.get(item, 0)
print(total)
\`\`\`

## Step 2 — Trace the code

1. Read \`.items()\` as pairs of an item name and its quantity.
2. Find the price for each name with a default of zero.
3. Multiply quantity by price and add the subtotal to a running total.

## Step 3 — Check your understanding

What is the total for two pens at 3 each and one binder at 7?

## Step 4 — Watch for this mistake

Do not add quantities directly to prices. Multiply each item's quantity by its price.

## Practice: Calculate an inventory order

Complete \`order_total(quantities, prices)\` to return the total price. Missing prices count as zero.

**Function contract:** \`order_total(quantities, prices)\`  
**Starter file:** [\`main.py\`](../../practice/04-inventory-calculator/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Start a numeric total at zero.

</details>

<details>
<summary>Hint 2 — Build</summary>

Loop over \`quantities.items()\`.

</details>

<details>
<summary>Hint 3 — Test</summary>

Multiply each count by \`prices.get(item, 0)\` before adding it.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`}],_f=[{id:"10-algorithms-and-testing/01-while-and-sentinels",unit:10,unitName:"Algorithms & Testing",lesson:1,slug:"01-while-and-sentinels",title:"Repeat until a stop signal",concept:"While loops and sentinel values",summary:"A `while` loop repeats until a condition changes, making it useful when the stopping point is part of the input.",mode:"function",starter:`def before_stop(events):
    # Count items until the sentinel 'stop' or the end.
    pass
`,cases:[{call:"before_stop(['tap', 'tap', 'stop', 'tap'])",expected:"2"},{call:"before_stop(['stop', 'tap'])",expected:"0"},{call:"before_stop(['a', 'b'])",expected:"2"},{call:"before_stop([])",expected:"0"}],points:10,hints:["Begin an index or counter at zero.","While the index is in bounds and the current value is not `'stop'`, move forward.","Return the number of events visited."],markdown:"10-algorithms-and-testing/lessons/01-while-and-sentinels.md",functionName:"before_stop",language:"python",markdownSource:`# Algorithms & Testing — Lesson 1: Repeat until a stop signal

**New skill:** While loops and sentinel values  
**Previously learned:** Units 01–09

## Why this matters

Apps process a sequence of events until a logout, shutdown, or special signal.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
events = ['tap', 'tap', 'stop', 'tap']
index = 0
while index < len(events) and events[index] != 'stop':
    index += 1
print(index)
\`\`\`

## Step 2 — Trace the code

1. Track the index that tells the loop which item to inspect.
2. Use \`and\` so you never index past the end of the list.
3. Stop before processing the special text \`'stop'\`.

## Step 3 — Check your understanding

How many events occur before \`'stop'\` in \`['a', 'b', 'stop', 'c']\`?

## Step 4 — Watch for this mistake

A while loop can run forever when you forget to update the variable in its condition.

## Practice: Repeat until a stop signal

Complete \`before_stop(events)\` to return how many values appear before the first \`'stop'\`. If no stop signal appears, count the entire list.

**Function contract:** \`before_stop(events)\`  
**Starter file:** [\`main.py\`](../../practice/01-while-and-sentinels/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Begin an index or counter at zero.

</details>

<details>
<summary>Hint 2 — Build</summary>

While the index is in bounds and the current value is not \`'stop'\`, move forward.

</details>

<details>
<summary>Hint 3 — Test</summary>

Return the number of events visited.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`},{id:"10-algorithms-and-testing/02-decompose-a-problem",unit:10,unitName:"Algorithms & Testing",lesson:2,slug:"02-decompose-a-problem",title:"Break a problem into helper functions",concept:"Decomposition, pure functions",summary:"Small functions can each handle one responsibility and work together to solve a larger task.",mode:"function",starter:`def total_with_bonus(scores, bonus):
    # Add positive scores only, then include the bonus.
    pass
`,cases:[{call:"total_with_bonus([8, -2, 5], 3)",expected:"16"},{call:"total_with_bonus([], 10)",expected:"10"},{call:"total_with_bonus([-4, 0], 2)",expected:"2"},{call:"total_with_bonus([1, 2, 3], 0)",expected:"6"}],points:10,hints:["Start a total at zero.","Only add a score when it is greater than zero.","Return the total plus the bonus after the loop."],markdown:"10-algorithms-and-testing/lessons/02-decompose-a-problem.md",functionName:"total_with_bonus",language:"python",markdownSource:`# Algorithms & Testing — Lesson 2: Break a problem into helper functions

**New skill:** Decomposition, pure functions  
**Previously learned:** Units 01–09

## Why this matters

Large apps become easier to debug when their calculation rules are separated into reusable pieces.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
def nonnegative(value):
    return max(0, value)

def total_points(scores):
    total = 0
    for score in scores:
        total += nonnegative(score)
    return total

print(total_points([8, -2, 5]))
\`\`\`

## Step 2 — Trace the code

1. Read the helper's contract: negative numbers become zero.
2. Trace how the main function calls the helper for each item.
3. Combine helper results into a total rather than writing one giant expression.

## Step 3 — Check your understanding

What does \`total_points([-2, -1, 7])\` return?

## Step 4 — Watch for this mistake

Do not forget the \`return\` statement in either function. A missing return produces \`None\`.

## Practice: Break a problem into helper functions

Complete \`total_with_bonus(scores, bonus)\` to sum only positive scores, then add \`bonus\`. Zero and negative scores contribute nothing. You may create helper functions.

**Function contract:** \`total_with_bonus(scores, bonus)\`  
**Starter file:** [\`main.py\`](../../practice/02-decompose-a-problem/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Start a total at zero.

</details>

<details>
<summary>Hint 2 — Build</summary>

Only add a score when it is greater than zero.

</details>

<details>
<summary>Hint 3 — Test</summary>

Return the total plus the bonus after the loop.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`},{id:"10-algorithms-and-testing/03-search-for-a-match",unit:10,unitName:"Algorithms & Testing",lesson:3,slug:"03-search-for-a-match",title:"Find the first matching position",concept:"Linear search and enumerate",summary:"A linear search visits items in order and stops once it finds the first matching value.",mode:"function",starter:`def first_position(values, target):
    # Search in order and return the first matching index.
    pass
`,cases:[{call:"first_position(['Ava', 'Kai', 'Ava'], 'Ava')",expected:"0"},{call:"first_position([2, 5, 2], 5)",expected:"1"},{call:"first_position([], 'x')",expected:"-1"},{call:"first_position(['a', 'b'], 'z')",expected:"-1"}],points:10,hints:["Loop using `enumerate(values)`.","Return the index as soon as the value matches.","Return -1 after checking every item without a match."],markdown:"10-algorithms-and-testing/lessons/03-search-for-a-match.md",functionName:"first_position",language:"python",markdownSource:`# Algorithms & Testing — Lesson 3: Find the first matching position

**New skill:** Linear search and enumerate  
**Previously learned:** Units 01–09

## Why this matters

Search underlies app menus, student rosters, and debugging lists of events.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
names = ['Ava', 'Kai', 'Ava']
for index, name in enumerate(names):
    if name == 'Kai':
        print(index)
        break
\`\`\`

## Step 2 — Trace the code

1. Use \`enumerate()\` when you need both the index and the value.
2. Compare each item with the target using \`==\`.
3. Return immediately on a match, otherwise return -1 after the loop.

## Step 3 — Check your understanding

What index should a search return for the first \`'Ava'\`? What if the name is missing?

## Step 4 — Watch for this mistake

A \`return -1\` placed inside the loop ends the search after checking only the first item.

## Practice: Find the first matching position

Complete \`first_position(values, target)\` to return the index of the first equal value, or -1 when not found.

**Function contract:** \`first_position(values, target)\`  
**Starter file:** [\`main.py\`](../../practice/03-search-for-a-match/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Loop using \`enumerate(values)\`.

</details>

<details>
<summary>Hint 2 — Build</summary>

Return the index as soon as the value matches.

</details>

<details>
<summary>Hint 3 — Test</summary>

Return -1 after checking every item without a match.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`},{id:"10-algorithms-and-testing/04-build-an-event-report",unit:10,unitName:"Algorithms & Testing",lesson:4,slug:"04-build-an-event-report",title:"Build a data-informed event report",concept:"Counting, sorting, formatting and testing",summary:"Turn raw event records into a consistent, readable summary using several Python skills together.",mode:"function",starter:`def event_report(events):
    # Count events, sort the labels, and return one report string.
    pass
`,cases:[{call:"event_report(['run', 'jump', 'run'])",expected:"'jump:1 | run:2'"},{call:"event_report([])",expected:"''"},{call:"event_report(['tap'])",expected:"'tap:1'"},{call:"event_report(['b', 'a', 'b', 'c', 'a'])",expected:"'a:2 | b:2 | c:1'"}],points:20,hints:["Build a dictionary of counts using `.get()`.","Use `sorted(counts)` to visit names alphabetically.","Create strings `name + ':' + str(count)` and join them using `' | '`."],markdown:"10-algorithms-and-testing/lessons/04-build-an-event-report.md",functionName:"event_report",language:"python",markdownSource:`# Algorithms & Testing — Lesson 4: Build a data-informed event report

**New skill:** Counting, sorting, formatting and testing  
**Previously learned:** Units 01–09

## Why this matters

Real apps do more than count data: they communicate what happened in a format people can use.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

\`\`\`python
counts = {'jump': 1, 'run': 2}
parts = []
for key in sorted(counts):
    parts.append(key + ':' + str(counts[key]))
print(' | '.join(parts))
\`\`\`

## Step 2 — Trace the code

1. Build a frequency table while visiting the event list.
2. Sort keys alphabetically for predictable output.
3. Convert counts into strings and join labeled pieces using the exact separator.

## Step 3 — Check your understanding

Predict how \`['jump', 'run', 'run']\` becomes the text \`jump:1 | run:2\`.

## Step 4 — Watch for this mistake

Dictionary insertion order is not the same as alphabetical order. Explicitly sort keys for the report.

## Practice: Build a data-informed event report

Complete \`event_report(events)\` to return alphabetically ordered \`label:count\` pairs separated by \` | \`. Return the empty string for an empty input.

**Function contract:** \`event_report(events)\`  
**Starter file:** [\`main.py\`](../../practice/04-build-an-event-report/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Build a dictionary of counts using \`.get()\`.

</details>

<details>
<summary>Hint 2 — Build</summary>

Use \`sorted(counts)\` to visit names alphabetically.

</details>

<details>
<summary>Hint 3 — Test</summary>

Create strings \`name + ':' + str(count)\` and join them using \`' | '\`.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
`}],Sf=[...mf,...ff,...gf,...yf,...vf,...xf,...wf,...kf,...bf,..._f],Mp={"python-strings":{title:"Strings and Variables",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Create a greeting using a name and a favorite topic.",starter:`name = "Jordan"
topic = "coding"

# Print a greeting using both variables.
`,console:"Run is simulated in this frontend-only design lab."},"python-formatting":{title:"Format a Summary",kind:"Challenge",difficulty:"Medium",points:15,language:"python",challenge:"Given a player name and points, create a clearly formatted one-line report.",starter:`player = "Avery"
points = 18

# Build a formatted summary with an f-string.
`,console:"Output will appear here after you click Mock run."},"csharp-variables":{title:"Variables for a Game",kind:"Lesson",difficulty:"Easy",points:10,language:"csharp",challenge:"Choose variables to describe a player and calculate a new score.",starter:`int score = 20;
int bonus = 5;

// Calculate the final score.
`,console:"C# is not compiled in the design lab."},"react-components":{title:"Your First React Card",kind:"Lesson",difficulty:"Easy",points:10,language:"jsx",challenge:"Design a component that shows a title, a value, and a button.",starter:`export default function ScoreCard() {
  return <div>My card</div>;
}
`,console:"JSX preview is a visual mockup, not a runtime compiler."},"uil-arrays":{title:"Trace a Java Array",kind:"Challenge",difficulty:"Medium",points:15,language:"java",challenge:"Predict the values after a loop modifies an integer array.",starter:`int[] scores = {2, 4, 6};
for (int i = 0; i < scores.length; i++) {
    scores[i] += i;
}
`,console:"This local sandbox does not run Java."},"tsi-ratios":{title:"Ratios and Rates",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Explain how a ratio becomes a rate, then solve a proportional relationship.",starter:`A class uses 3 markers for every 5 students.

What is the rate of markers per student?
`,console:"TSI problems are a static design preview."},"capstone-discovery":{title:"Find an Inefficiency",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Describe one recurring problem and identify who experiences it.",starter:`Problem:
People affected:
How often it happens:
Evidence to collect:
`,console:"No real submission is sent."},"python-variables":{title:"Variables and Data Types",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Use strings and numbers to model a student profile.",starter:`name = "Avery"
age = 15
# Print a friendly profile summary.
`,console:"Run, Check and Submit are simulated in this React design lab."},"python-decisions":{title:"Decision Making",kind:"Challenge",difficulty:"Medium",points:15,language:"python",challenge:"Use a condition to choose a helpful response.",starter:`temperature = 82
# Print a message based on the temperature.
`,console:"Run, Check and Submit are simulated in this React design lab."},"python-loops":{title:"For Loops",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Repeat a task with a Python for loop.",starter:`for day in range(1, 6):
    # Print the day number
    pass
`,console:"Run, Check and Submit are simulated in this React design lab."},"python-lists":{title:"Lists and Indexing",kind:"Challenge",difficulty:"Medium",points:15,language:"python",challenge:"Work with a list of scores.",starter:`scores = [8, 12, 15, 10]
# Print the highest score.
`,console:"Run, Check and Submit are simulated in this React design lab."},"csharp-conditionals":{title:"Player Decisions",kind:"Lesson",difficulty:"Easy",points:10,language:"csharp",challenge:"Use if statements to respond to changing game state.",starter:`int health = 40;
// Show a warning when health is low.
`,console:"Run, Check and Submit are simulated in this React design lab."},"unity-colliders":{title:"Collision Events",kind:"Lesson",difficulty:"Medium",points:10,language:"csharp",challenge:"Plan what happens when a player touches an item.",starter:`// Pseudocode: react when the player collides with a coin.
`,console:"Run, Check and Submit are simulated in this React design lab."},"unity-player-controller":{title:"Build a Player Controller",kind:"Lesson",difficulty:"Medium",points:15,language:"csharp",challenge:"Build a player controller from a blank script. Make the player turn and move with keyboard input. Open Learn for guided steps.",starter:`using UnityEngine;

public class PlayerController : MonoBehaviour
{
}
`,console:"Choose a step in Learn to build your controller."},"unity-score":{title:"Score and Feedback",kind:"Challenge",difficulty:"Medium",points:15,language:"csharp",challenge:"Build and update a score counter.",starter:`int score = 0;
// Add points when a goal is completed.
`,console:"Run, Check and Submit are simulated in this React design lab."},"web-layout":{title:"Responsive Layouts",kind:"Lesson",difficulty:"Easy",points:10,language:"jsx",challenge:"Organize information with semantic HTML and CSS.",starter:`function App() {
  return <main><h1>My site</h1></main>;
}
`,console:"Run, Check and Submit are simulated in this React design lab."},"web-events":{title:"Events and Forms",kind:"Challenge",difficulty:"Medium",points:15,language:"jsx",challenge:"Design a form that reacts to user input.",starter:`export default function App() {
  return <button>Click me</button>;
}
`,console:"Run, Check and Submit are simulated in this React design lab."},"react-state":{title:"Interactive React State",kind:"Lesson",difficulty:"Medium",points:10,language:"jsx",challenge:"Describe state changes that update the UI.",starter:`import { useState } from "react";
// Make a counter component.
`,console:"Run, Check and Submit are simulated in this React design lab."},"uil-loops":{title:"Trace Java Loops",kind:"Lesson",difficulty:"Easy",points:10,language:"java",challenge:"Predict output from Java for and while loops.",starter:`for (int i = 1; i <= 3; i++) {
    System.out.println(i * 2);
}
`,console:"Run, Check and Submit are simulated in this React design lab."},"uil-methods":{title:"Method Calls and Scope",kind:"Challenge",difficulty:"Medium",points:15,language:"java",challenge:"Trace how arguments pass through methods.",starter:`static int doubleIt(int x) { return x * 2; }
`,console:"Run, Check and Submit are simulated in this React design lab."},"uil-strings":{title:"String Indexing",kind:"Lesson",difficulty:"Medium",points:10,language:"java",challenge:"Predict output of substring and charAt.",starter:`String team = "UIL";
System.out.println(team.substring(1));
`,console:"Run, Check and Submit are simulated in this React design lab."},"capstone-interviews":{title:"Interview for Evidence",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Write neutral questions for potential users.",starter:`Who is affected?
What have you observed?
What would you ask users?
`,console:"Run, Check and Submit are simulated in this React design lab."},"capstone-prototype":{title:"Make a Minimum Viable Prototype",kind:"Lesson",difficulty:"Medium",points:10,language:"text",challenge:"Choose the smallest version of your idea that can be tested.",starter:`Core feature:
What will you test?
How will you know it works?
`,console:"Run, Check and Submit are simulated in this React design lab."},"capstone-feedback":{title:"Interpret User Feedback",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Turn qualitative feedback into an action plan.",starter:`Feedback observed:
Pattern:
What to change next:
`,console:"Run, Check and Submit are simulated in this React design lab."},"tsi-percents":{title:"Percents and Discounts",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Use percentages in everyday situations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-equations":{title:"Solve Linear Equations",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Solve a one-variable equation with inverse operations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-slope":{title:"Slope and Rate of Change",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Interpret slope from a table of values.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."}};function Vr(s){return typeof s=="string"?s:typeof(s==null?void 0:s.id)=="string"?s.id:""}function Vt(s){return String((s==null?void 0:s.title)||(s==null?void 0:s.unitName)||(s==null?void 0:s.name)||"Lessons")}function co(s,i=1){return(s==null?void 0:s.number)??(s==null?void 0:s.unit)??i}function Yt(s){return((s==null?void 0:s.lessons)||[]).map(Vr).filter(Boolean)}function no(s){return Array.isArray(s==null?void 0:s.units)?s.units.flatMap(Yt):Array.isArray(s==null?void 0:s.lessons)?s.lessons.map(Vr).filter(Boolean):[]}function Cf(s,i){return((s==null?void 0:s.units)||[]).some(l=>Yt(l).includes(i))}function zi(s,i,l=Mp){var v,x;if(!i)return null;const c=((s==null?void 0:s.units)||[]).find(w=>Yt(w).includes(i)),d=((c==null?void 0:c.lessons)||[]).find(w=>Vr(w)===i),p=typeof d=="object"&&d||((v=c==null?void 0:c.lessonMeta)==null?void 0:v[i])||((x=s==null?void 0:s.lessonRecords)==null?void 0:x[i])||{},g=(l==null?void 0:l[i])||{},f=String(p.title||p.name||g.title||i.split("/").at(-1));return{...g,...p,id:i,title:f,kind:p.kind||g.kind||"Lesson",difficulty:p.difficulty||g.difficulty||"",points:p.points??g.points??null,language:p.language||g.language||(s==null?void 0:s.language)||"text",challenge:p.challenge||p.summary||g.challenge||"",starter:p.starter||g.starter||"",console:g.console||(p.markdownSource?"Run Python to see your output. Checks use published examples only.":""),ready:!!(l!=null&&l[i])||typeof p.markdownSource=="string"&&p.starter!==void 0,isPublished:typeof p.markdownSource=="string"&&p.starter!==void 0}}function Fs(s,i,l=Mp){var c;return((c=zi(s,i,l))==null?void 0:c.title)||""}function jf(s){const i=Array.isArray(s)?{lessons:s}:s||{},l=new Map,c=new Set,d=[],p=(f,v,x,w)=>{const k=String(f);let j=d.find(F=>F.id===k);return j||(j={id:k,title:String(v||"Lessons"),description:String(x||""),number:w,lessons:[]},d.push(j)),j},g=(f,v)=>{const x=Vr(v);!x||c.has(x)||(c.add(x),f.lessons.push(x),l.set(x,typeof v=="string"?{id:x}:{...v}))};return Array.isArray(i.units)?i.units.forEach((f,v)=>{const x=p(f.id||`unit-${v+1}`,Vt(f),f.description||f.summary,co(f,v+1));(f.lessons||[]).forEach(w=>g(x,w))}):Array.isArray(i.lessons)&&i.lessons.forEach((f,v)=>{if(!f||!Vr(f))return;const x=f.unit||null,w=Vr(f).indexOf("/"),k=x!=null?w>=0?Vr(f).slice(0,w):`unit-${x}`:f.competency?`topic-${String(f.competency).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`:"lessons",j=f.unitName||f.competency||"Lessons",F=p(k,j,"",x??d.length+1);g(F,f)}),{units:d,lessonRecords:Object.fromEntries(l),lessons:d.flatMap(Yt)}}const eu=jf(Sf),St=[{id:"computer-science-1",units:eu.units,lessonRecords:eu.lessonRecords,language:"python",publishedContent:!0,slug:"computer-science-1",label:"Computer Science I",short:"Python",glyph:"py",color:"#6366F1",description:"Build your problem-solving toolkit with Python.",lessons:eu.lessons,topics:["Variables","Strings","Formatting","Conditions","Lists"]},{id:"game-programming",units:kt["game-programming"],slug:"game-programming",label:"Game Programming & Design",short:"C# · Unity",glyph:"C#",color:"#C052EB",description:"Make ideas playable with Unity and C#.",lessons:kt["game-programming"].flatMap(s=>s.lessons),topics:["C# Basics","Rigidbody","Colliders"]},{id:"mobile-app-dev",units:kt["mobile-app-dev"],slug:"mobile-app-web",label:"Mobile App & Web",short:"React · JavaScript",glyph:"js",color:"#27BBD2",description:"Create useful websites and mobile applications.",lessons:kt["mobile-app-dev"].flatMap(s=>s.lessons),topics:["HTML","CSS","JavaScript","React"]},{id:"capstone",units:kt.capstone,slug:"capstone",label:"Capstone",short:"Build for someone",glyph:"++",color:"#FF2D55",description:"Research a problem, prototype, and test a solution.",lessons:kt.capstone.flatMap(s=>s.lessons),topics:["Research","Prototype","Pitch"]},{id:"uil",units:kt.uil,slug:"uil",label:"UIL Computer Science",short:"Java",glyph:"jv",color:"#FF9F0A",description:"Trace Java, explain your reasoning, and practice.",lessons:kt.uil.flatMap(s=>s.lessons),topics:["Java","Arrays","Written","Programming"]},{id:"tsi-math",units:kt["tsi-math"],slug:"tsi-math",label:"TSI Math Advisory",short:"Math · Open access",glyph:"ma",color:"#30C85A",description:"Quantitative reasoning and algebra practice.",lessons:kt["tsi-math"].flatMap(s=>s.lessons),topics:["Percents","Ratios","Equations"]}],Wn=s=>St.find(i=>i.id===s),Su=s=>{var i;return(i=Wn(s))==null?void 0:i.label};function po(s){return typeof s=="string"&&/^#[0-9a-fA-F]{6}$/.test(s)}function Tf(s,i={}){const l=i&&typeof i=="object"?i[s.id]:null;return po(l)?l.toUpperCase():s.color}function Ef(s){if(!po(s))return"#101012";const i=[1,3,5].map(c=>parseInt(s.slice(c,c+2),16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);return i[0]*.2126+i[1]*.7152+i[2]*.0722>.179?"#101012":"#FFFFFF"}function Nf(s,i,l=document.documentElement){for(const c of i){const d=`--student-course-color-${c.id}`,p=s&&typeof s=="object"?s[c.id]:null,g=`--student-course-ink-${c.id}`;po(p)?(l.style.setProperty(d,p),l.style.setProperty(g,Ef(p))):(l.style.removeProperty(d),l.style.removeProperty(g))}}function Be(s,i){const[l,c]=G.useState(()=>{try{const d=localStorage.getItem(s);return d===null?i:JSON.parse(d)}catch{return i}});return G.useEffect(()=>{try{localStorage.setItem(s,JSON.stringify(l))}catch{}},[s,l]),[l,c]}function Pf(s,i=[]){return Array.isArray(i)&&i.includes(s)}function Fp(s,i=[]){const l=no(s),c=l.filter(d=>Pf(d,i)).length;return{completed:c,total:l.length,percent:l.length?Math.round(c/l.length*100):0}}function Rf(s,i){const l=Array.isArray(s)?s:[];return l.includes(i)?l.filter(c=>c!==i):[...l,i]}const Af=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function If(s=new Date){const i=Object.fromEntries(Af.formatToParts(s).filter(l=>l.type!=="literal").map(l=>[l.type,l.value]));return`${i.year}-${i.month}-${i.day}`}function to(s){return s?new Date(s+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}):""}function Mi(s,i=[]){return i.find(l=>l.id===s)||null}function Lf(s,i=[]){return i.find(l=>l.id===s)||null}function ho(s,{assignments:i=[],grades:l=[],completedLessons:c=[],today:d=If()}={}){const p=Lf(s,i),g=Mi(s,l),f=s.startsWith("lesson:")&&c.includes(s.slice(7)),v=!!g||f;return p!=null&&p.dueDate?{state:v?"completed":p.dueDate<d?"overdue":"assigned",dueDate:p.dueDate,grade:g,completed:v}:{state:v?"completed":"unassigned",dueDate:null,grade:g,completed:v}}function mu(s=[]){const i=s.reduce((c,d)=>c+d.earned,0),l=s.reduce((c,d)=>c+d.possible,0);return{earned:i,possible:l,percent:l?Math.round(100*i/l):null,count:s.length}}function Of(s=[]){const i=new Map;return s.forEach(l=>{const c=eo(new Date(l.gradedAt+"T12:00:00Z"));i.has(c)||i.set(c,[]),i.get(c).push(l)}),[...i.entries()].map(([l,c])=>({week:l,...mu(c)})).sort((l,c)=>c.week.localeCompare(l.week))}function Df(s=[],i=[]){return[...new Set([...Array.isArray(s)?s:[],...i.filter(l=>l.id.startsWith("lesson:")).map(l=>l.id.slice(7))])]}const zf=[{id:"lesson:python-strings",courseId:"computer-science-1",earned:8,possible:10,gradedAt:"2026-10-28"},{id:"lesson:python-variables",courseId:"computer-science-1",earned:10,possible:10,gradedAt:"2026-11-04"},{id:"lesson:web-layout",courseId:"mobile-app-dev",earned:9,possible:10,gradedAt:"2026-11-03"},{id:"lesson:capstone-discovery",courseId:"capstone",earned:10,possible:10,gradedAt:"2026-10-30"},{id:"lesson:uil-loops",courseId:"uil",earned:10,possible:10,gradedAt:"2026-11-05"},{id:"challenge:confidence-total",courseId:"computer-science-1",earned:12,possible:15,gradedAt:"2026-11-02",language:"python"},{id:"challenge:count-matches",courseId:"computer-science-1",earned:10,possible:10,gradedAt:"2026-11-06",language:"python"},{id:"challenge:score-line",courseId:"mobile-app-dev",earned:8,possible:10,gradedAt:"2026-10-27",language:"javascript"}],Up=[{id:"lesson:python-strings",courseId:"computer-science-1",dueDate:"2026-11-03"},{id:"lesson:python-variables",courseId:"computer-science-1",dueDate:"2026-11-06"},{id:"lesson:python-formatting",courseId:"computer-science-1",dueDate:"2026-11-10"},{id:"lesson:python-decisions",courseId:"computer-science-1",dueDate:"2026-11-02"},{id:"lesson:csharp-variables",courseId:"game-programming",dueDate:"2026-11-05"},{id:"lesson:unity-player-controller",courseId:"game-programming",dueDate:"2026-11-13"},{id:"lesson:web-layout",courseId:"mobile-app-dev",dueDate:"2026-11-04"},{id:"lesson:react-components",courseId:"mobile-app-dev",dueDate:"2026-11-11"},{id:"lesson:capstone-discovery",courseId:"capstone",dueDate:"2026-11-02"},{id:"lesson:uil-loops",courseId:"uil",dueDate:"2026-11-04"},{id:"lesson:tsi-ratios",courseId:"tsi-math",dueDate:"2026-11-09"},{id:"challenge:confidence-total",courseId:"computer-science-1",dueDate:"2026-11-05"},{id:"challenge:count-matches",courseId:"computer-science-1",dueDate:"2026-11-09"},{id:"challenge:target-pairs",courseId:"uil",dueDate:"2026-11-04"}],_t=(...s)=>s.filter(Boolean).join(" "),Mf=["temperature-alert","count-matches","sum-positives","score-line","attendance-percent","longest-win-streak","confidence-total","second-largest-distinct","target-pairs","competition-ranks"],Ff="/playground/preview/react/",Uf="/"+Ff.replace(/^\/+|\/+$/g,""),Kr=s=>`${Uf}/#${s}`,Oi=()=>Kr("/"),cp=()=>Kr("/teacher"),Wf=()=>Kr("/journals"),Bf=()=>Kr("/grades"),Os=(s=null)=>Kr(s?`/challenges/course/${encodeURIComponent(s)}`:"/challenges"),Wp=s=>Kr(`/challenges/${encodeURIComponent(s)}`);function Cu(s,i){const l=typeof s=="string"?Wn(s):s;if(!l)return Oi();const c=`/playgrounds/${encodeURIComponent(l.slug)}`;return Kr(i?`${c}/lessons/${encodeURIComponent(i)}`:c)}function nu(s,i=St){const p=((typeof window<"u"&&window.location.hash.slice(1)||"/").replace(/\/+$/,"")||"/").slice("".length)||"/";if(p==="/")return{page:"home"};if(p==="/teacher")return{page:"teacher"};if(p==="/journals")return{page:"journals"};if(p==="/grades")return{page:"grades"};if(p==="/challenges")return{page:"challenges",filterCourse:null};if(p.startsWith("/challenges/")){const w=p.split("/").filter(Boolean);try{if(w.length===3&&w[1]==="course"){const k=decodeURIComponent(w[2]);return Wn(k)?{page:"challenges",filterCourse:k}:{page:"not-found"}}if(w.length===2){const k=decodeURIComponent(w[1]);return Mf.includes(k)?{page:"challenge",challengeId:k}:{page:"not-found"}}}catch{return{page:"not-found"}}return{page:"not-found"}}const g=p.split("/").filter(Boolean);if(g[0]!=="playgrounds"||![2,4].includes(g.length))return{page:"not-found"};let f,v;try{f=decodeURIComponent(g[1]),v=g.length===4?decodeURIComponent(g[3]):void 0}catch{return{page:"not-found"}}const x=i.find(w=>w.slug===f);return!x||g.length===4&&g[2]!=="lessons"?{page:"not-found"}:v&&!Cf(x,v)?{page:"not-found"}:{page:"course",courseId:x.id,lessonId:v??null}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bp=(...s)=>s.filter((i,l,c)=>!!i&&i.trim()!==""&&c.indexOf(i)===l).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=G.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:d="",children:p,iconNode:g,...f},v)=>G.createElement("svg",{ref:v,...$f,width:i,height:i,stroke:s,strokeWidth:c?Number(l)*24/Number(i):l,className:Bp("lucide",d),...f},[...g.map(([x,w])=>G.createElement(x,w)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=(s,i)=>{const l=G.forwardRef(({className:c,...d},p)=>G.createElement(qf,{ref:p,iconNode:i,className:Bp(`lucide-${Hf(s)}`,c),...d}));return l.displayName=`${s}`,l};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=de("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=de("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=de("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=de("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=de("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=de("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=de("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=de("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=de("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=de("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=de("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=de("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=de("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=de("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=de("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=de("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=de("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=de("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=de("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=de("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=de("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=de("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=de("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=de("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=de("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=de("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=de("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=de("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=de("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=de("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=de("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=de("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=de("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=de("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=de("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=de("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=de("SquareTerminal",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=de("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=de("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=de("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=de("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=de("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Ct({children:s,tone:i=""}){return a.jsx("span",{className:_t("chip",i&&`chip-${i}`),children:s})}const yg=[{id:"coral",label:"Coral"},{id:"purple",label:"Purple"}];function vg({theme:s,setTheme:i,accent:l,setAccent:c}){const d=s==="dark";return a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"icon-button",title:d?"Switch to light mode":"Switch to dark mode","aria-label":"Toggle light and dark mode",onClick:()=>i(d?"light":"dark"),children:d?a.jsx(mg,{size:17}):a.jsx(lg,{size:17})}),yg.map(p=>a.jsx("button",{className:_t("accent-swatch",l===p.id&&"swatch-active"),title:`${p.label} accent`,"aria-label":`Use ${p.id} accent`,onClick:()=>c(p.id),"data-swatch":p.id},p.id))]})}function xg({sidebarOpen:s,onToggleSidebar:i,onHome:l,theme:c,setTheme:d,accent:p,setAccent:g}){return a.jsx("header",{className:"topbar",children:a.jsxs("div",{className:"topbar-inner",children:[a.jsx("button",{className:"icon-button nav-toggle",onClick:i,"aria-label":"Toggle navigation",children:s?a.jsx(ug,{size:18}):a.jsx(og,{size:18})}),a.jsxs("button",{className:"brand",onClick:l,children:[a.jsx("span",{className:"brand-logo",children:"{ }"}),a.jsx("strong",{children:"Ms. Whitby's Playground"}),a.jsx("span",{className:"brand-compact",children:"React Lab"})]}),a.jsx("div",{className:"topbar-spacer"}),a.jsx(Ct,{children:"LOCAL DESIGN LAB"}),a.jsx(vg,{theme:c,setTheme:d,accent:p,setAccent:g}),a.jsx("span",{className:"user-circle",children:"W"})]})})}const wg=[["home","Home",ig],["challenges","Challenge Bank",fo],["journals","Weekly journals",Tu],["grades","Grades",rg],["teacher","Teacher dashboard",Eu]];function kg({open:s,page:i,courseId:l,lessonId:c,setPage:d,openCourse:p,completedLessons:g=[],assignments:f=[],grades:v=[]}){const x=i==="course"?Wn(l):null;return a.jsxs("aside",{className:_t("main-sidebar",!s&&"collapsed"),"aria-label":"Playground navigation",children:[a.jsx("div",{className:"side-title",children:"EXPLORE"}),wg.map(([w,k,j])=>a.jsxs("button",{className:_t("nav-item",(i===w||w==="challenges"&&i==="challenge")&&"active"),onClick:()=>d(w),title:k,children:[a.jsx(j,{size:19}),a.jsx("span",{children:k})]},w)),x&&a.jsxs("section",{className:"course-outline","data-course":x.id,"aria-label":`${x.label} outline`,children:[a.jsx("div",{className:"side-rule"}),a.jsx("div",{className:"side-title",children:"COURSE CONTENT"}),a.jsxs("button",{className:_t("outline-overview",!c&&"active"),onClick:()=>p(x.id),children:[a.jsx(ju,{size:16}),a.jsx("span",{children:"Course overview"})]}),x.units.map((w,k)=>a.jsxs("details",{className:"outline-unit",open:Yt(w).includes(c)||!c&&k===0?!0:void 0,children:[a.jsxs("summary",{children:[a.jsx("span",{className:"outline-unit-number",children:String(co(w,k+1)).padStart(2,"0")}),a.jsx("span",{className:"outline-unit-title",title:Vt(w),children:Vt(w)}),a.jsx(qp,{size:14})]}),a.jsx("div",{className:"outline-lesson-list",children:Yt(w).map(j=>{const F=Fs(x,j),H=ho("lesson:"+j,{assignments:f,grades:v,completedLessons:g}),P=H.dueDate?H.state:"",z=P==="completed"?"Completed":P==="overdue"?"Overdue":P==="assigned"?"Assigned":"";return a.jsxs("button",{onClick:()=>p(x.id,j),className:_t("outline-lesson",j===c&&"selected"),"aria-label":z?`${F}, ${z.toLowerCase()}`:F,title:z?`${F} · ${z}`:F,"aria-current":j===c?"page":void 0,children:[a.jsx("span",{className:"outline-lesson-name",children:F}),z&&a.jsx("span",{className:`assignment-dot ${P}`,"aria-hidden":"true"})]},j)})})]},`${x.id}-${w.id}-${c||"overview"}`))]}),a.jsx("div",{className:"side-rule"}),a.jsx("div",{className:"side-title",children:"PLAYGROUNDS"}),St.map(w=>a.jsxs("button",{"data-course":w.id,className:_t("nav-item course-nav-item",i==="course"&&l===w.id&&"active"),onClick:()=>p(w.id),title:w.label,children:[a.jsx("span",{className:"nav-dot"}),a.jsx("span",{children:w.label})]},w.id)),a.jsxs("div",{className:"sidebar-bottom",children:[a.jsx(Xf,{size:17}),a.jsx("span",{children:"Your learning spaces"})]})]})}function bg(){return a.jsxs("footer",{className:"site-footer",children:[a.jsx("span",{children:"Ms. Whitby's Playground · React design lab"}),a.jsx("span",{children:"Fictional data · No authentication or backend · No real code execution"})]})}const _g={"computer-science-1":mo,"game-programming":tg,"mobile-app-dev":pg,uil:Yp,"tsi-math":$p,capstone:cg};function Sg({course:s,onOpen:i,completedLessons:l=[]}){const{completed:c,total:d}=Fp(s,l),p=_g[s.id]||mo;function g(f){f.button!==0||f.metaKey||f.ctrlKey||f.shiftKey||f.altKey||(f.preventDefault(),i())}return a.jsxs("a",{className:"course-card","data-course":s.id,href:Cu(s),onClick:g,children:[a.jsxs("div",{className:"course-card-heading",children:[a.jsx("span",{className:"course-glyph","aria-hidden":"true",children:a.jsx(p,{size:24,strokeWidth:2.2})}),a.jsxs("div",{children:[a.jsx("h2",{children:s.label}),a.jsx("p",{children:s.short})]})]}),a.jsx("p",{className:"course-description",children:s.description}),a.jsxs("div",{className:"course-card-footer",children:[a.jsxs("div",{className:"course-meta",children:[a.jsxs("span",{children:[d," ",d===1?"lesson":"lessons"]}),a.jsxs("span",{children:[c," completed"]})]}),a.jsx("progress",{className:"course-progress-track",value:c,max:Math.max(d,1),"aria-label":`${s.label}: ${c} of ${d} lessons completed`})]})]})}function Cg({onClick:s}){return a.jsxs("button",{className:"wide-shortcut",onClick:s,children:[a.jsx(Eu,{size:18}),a.jsxs("span",{children:[a.jsx("strong",{children:"Teacher Dashboard preview"}),a.jsx("small",{children:"Section roster, expanded student assignments, account matching, and weekly points"})]}),a.jsx(Yr,{size:18})]})}function jg({openCourse:s,openTeacher:i,openChallenges:l,completedLessons:c=[]}){return a.jsxs("div",{className:"main-content",children:[a.jsxs("div",{className:"welcome",children:[a.jsx("div",{className:"eyebrow",children:"Your learning spaces"}),a.jsx("h1",{children:"Your playgrounds"}),a.jsx("p",{children:"Choose a course to continue learning. Complete lessons to fill your progress bars."})]}),a.jsx("div",{className:"course-card-grid",children:St.map(d=>a.jsx(Sg,{course:d,completedLessons:c,onOpen:()=>s(d.id)},d.id))}),a.jsxs("button",{type:"button",className:"wide-shortcut challenge-bank-shortcut",onClick:l,children:[a.jsx(fo,{size:23}),a.jsxs("span",{children:[a.jsx("strong",{children:"Shared Challenge Bank"}),a.jsx("small",{children:"Practice one problem in Python, Java, JavaScript, or C#."})]}),a.jsx("span",{"aria-hidden":"true",children:"→"})]}),a.jsx(Cg,{onClick:i})]})}function Tg({course:s,openCourse:i,openChallenges:l,completedLessons:c=[],assignments:d=[],grades:p=[],courseColors:g={},onSetCourseColor:f,onResetCourseColor:v}){const x=Fp(s,c),[w,k]=G.useState(!1),j=Tf(s,g);return a.jsxs("div",{className:"course-landing",children:[a.jsxs("header",{className:"course-hero surface-card",children:[a.jsx("button",{type:"button",className:"icon-button course-color-settings",onClick:()=>k(F=>!F),"aria-label":w?"Close course color settings":`Change ${s.label} color`,title:w?"Close settings":"Course color","aria-expanded":w,"aria-controls":"course-color-controls",children:w?a.jsx(Au,{size:17}):a.jsx(Ru,{size:17})}),a.jsx("div",{className:"eyebrow",children:"Course overview"}),a.jsx("h1",{children:s.label}),a.jsx("p",{children:s.description}),a.jsxs("div",{className:"course-hero-stats",children:[a.jsxs("span",{children:[a.jsx(ag,{size:16})," ",s.units.length," units"]}),a.jsxs("span",{children:[a.jsx(ju,{size:16})," ",no(s).length," lessons"]})]}),a.jsxs("button",{className:"btn primary",onClick:()=>i(s.id,no(s)[0]),children:["Start learning ",a.jsx(Yr,{size:16})]}),w&&a.jsxs("section",{id:"course-color-controls",className:"course-color-controls","aria-label":"Choose a course color",children:[a.jsxs("div",{className:"course-color-control-copy",children:[a.jsx("strong",{children:"Course color"}),a.jsx("p",{children:"Make this course your own. The color updates throughout your Playground."})]}),a.jsxs("label",{className:"course-color-picker",children:[a.jsx("input",{type:"color",value:j,onChange:F=>f==null?void 0:f(s.id,F.target.value),"aria-label":`Choose a color for ${s.label}`}),a.jsx("span",{children:"Choose color"})]}),a.jsx("button",{type:"button",className:"btn",onClick:()=>v==null?void 0:v(s.id),children:"Reset to default"}),a.jsx("button",{type:"button",className:"btn",onClick:()=>k(!1),children:"Done"})]})]}),s.publishedContent&&a.jsx("p",{className:"course-published-note",children:"Explore the complete Computer Science I lessons. Practice here won't change your grades."}),a.jsxs("p",{className:"course-landing-progress",children:[x.completed," of ",x.total," lessons completed · ",x.percent,"%"]}),a.jsx("div",{className:"course-landing-heading",children:a.jsxs("div",{children:[a.jsx("h2",{children:"Units & lessons"}),a.jsx("p",{children:"Choose a unit or jump directly into a lesson."})]})}),a.jsx("div",{className:"unit-card-grid",children:s.units.map((F,H)=>a.jsxs("section",{className:"unit-card surface-card",children:[a.jsxs("header",{className:"unit-card-header",children:[a.jsxs("span",{className:"unit-badge",children:["UNIT ",String(co(F,H+1)).padStart(2,"0")]}),a.jsx("h3",{title:Vt(F),children:Vt(F)}),F.description&&a.jsx("p",{children:F.description})]}),a.jsx("div",{className:"unit-lessons",children:Yt(F).map((P,z)=>a.jsxs("a",{className:"unit-lesson-link",href:Cu(s,P),onClick:q=>{q.button!==0||q.metaKey||q.ctrlKey||q.shiftKey||q.altKey||(q.preventDefault(),i(s.id,P))},children:[a.jsx("span",{className:"unit-lesson-index",children:z+1}),a.jsxs("span",{className:"unit-lesson-label",children:[a.jsx("strong",{title:Fs(s,P),children:Fs(s,P)}),(()=>{var ue,pe;const q=ho("lesson:"+P,{assignments:d,grades:p,completedLessons:c});return q.dueDate?a.jsxs("span",{className:"unit-assignment-meta",children:[a.jsx("span",{className:`assignment-status ${q.state}`,children:q.state==="completed"?"Completed":q.state==="overdue"?"Overdue":"Assigned"}),a.jsxs("small",{children:["Due ",to(q.dueDate)]}),q.grade&&a.jsxs("small",{children:[q.grade.earned," / ",q.grade.possible," pts"]})]}):a.jsxs("small",{children:[(ue=zi(s,P))==null?void 0:ue.kind,(pe=zi(s,P))!=null&&pe.difficulty?` · ${zi(s,P).difficulty}`:""]})})()]}),a.jsx(Hp,{size:16})]},P))})]},F.id))}),a.jsxs("section",{className:"course-challenges-shelf surface-card",children:[a.jsxs("div",{children:[a.jsx("div",{className:"eyebrow",children:"Shared practice library"}),a.jsx("h2",{children:"Related programming challenges"}),a.jsx("p",{children:"Browse reusable problems suited to this course. Review each challenge's prerequisites before recommending it to students."})]}),a.jsxs("a",{href:Os(s.id),className:"btn",onClick:F=>{F.button!==0||F.metaKey||F.ctrlKey||F.shiftKey||F.altKey||(F.preventDefault(),l(s.id))},children:[a.jsx(fo,{size:16})," Browse challenges"]})]})]})}function so({axis:s,onDrag:i}){const l=G.useRef(!1),c=s==="columns",d=()=>l.current=!1;return a.jsx("div",{className:_t("splitter",c?"column-split":"row-split"),role:"separator","aria-label":c?"Resize instructions and editor":"Resize editor and console","aria-orientation":c?"vertical":"horizontal",tabIndex:0,onPointerDown:p=>{p.preventDefault(),p.currentTarget.setPointerCapture(p.pointerId),l.current=!0},onPointerMove:p=>{l.current&&p.buttons===1&&i(p)},onPointerUp:d,onLostPointerCapture:d,children:a.jsx("span",{})})}function Gp({eyebrow:s,children:i,actions:l}){return a.jsxs("div",{className:"page-title-row",children:[a.jsxs("div",{children:[s&&a.jsx("div",{className:"eyebrow",children:s}),a.jsx("h1",{children:i})]}),l&&a.jsx("div",{className:"page-actions",children:l})]})}function dp({task:s,unit:i,unitNumber:l,isTsi:c,isCompleted:d=!1,assignment:p=null,grade:g=null,onToggleCompleted:f}){const v=(p==null?void 0:p.id)||(g==null?void 0:g.id)||"",x=ho(v,{assignments:p?[p]:[],grades:g?[g]:[],completedLessons:d?[v.replace(/^lesson:/,"")]:[]});return a.jsxs("div",{className:"lesson-header",children:[a.jsxs("div",{className:"eyebrow",children:["Unit ",co(i,l)," · ",Vt(i)," ",a.jsx("span",{className:"dot",children:"·"})," ",s.kind]}),a.jsx(Gp,{actions:a.jsxs("div",{className:"lesson-heading-actions",children:[!c&&(s==null?void 0:s.points)!=null&&a.jsx("span",{className:"points-tag",children:g?`${g.earned} / ${g.possible} pts`:`${s.points} points available`}),g?a.jsxs("span",{className:"btn completion-toggle completed",children:[a.jsx(fu,{size:16})," Completed"]}):a.jsxs("button",{type:"button",className:`btn completion-toggle ${d?"completed":""}`,"aria-pressed":d,onClick:f,children:[d?a.jsx(fu,{size:16}):a.jsx(Zf,{size:16}),d?"Completed":"Mark complete"]})]}),children:s.title}),a.jsx("p",{children:s.challenge}),(p==null?void 0:p.dueDate)&&a.jsxs("div",{className:"lesson-assignment-info",children:[a.jsx("span",{className:`assignment-status ${x.state}`,children:x.state==="completed"?"Completed":x.state==="overdue"?"Overdue":"Assigned"}),a.jsxs("span",{children:["Due ",to(p.dueDate)]})]})]})}const Kp={"tsi-ratios":{prompt:"A recipe uses 3 cups of water for every 5 cups of rice. How many cups of water are needed for 15 cups of rice?",options:["5 cups","9 cups","12 cups","25 cups"],correct:1,explanation:"15 is three times 5, so multiply the 3 cups of water by 3 to get 9."},"tsi-percents":{prompt:"A $60 backpack is discounted by 25%. What is the sale price?",options:["$15","$35","$45","$75"],correct:2,explanation:"25% of $60 is $15; subtract $15 from $60 to get $45."},"tsi-equations":{prompt:"Solve for x: 4x + 6 = 22.",options:["2","4","6","7"],correct:1,explanation:"Subtract 6 from both sides to get 4x = 16, then divide by 4: x = 4."},"tsi-slope":{prompt:"A table gives points (1, 3), (2, 5), and (3, 7). What is the slope?",options:["1","2","3","4"],correct:1,explanation:"As x goes up by 1, y goes up by 2, so slope = 2/1 = 2."}},Eg=`# Find an Inefficiency

## Learn

An inefficiency is an unnecessary obstacle that makes a process slower, more confusing, or more difficult.

Start by observing what people actually do rather than guessing what they need.

### Questions to ask

- Who experiences the problem?
- What happens today?
- What evidence demonstrates the problem?
- What would a better outcome look like?

## Practice

Write a short problem statement. Identify one observation you can collect to test whether the problem is real.
`,Ng=`# Interpret User Feedback

## Learn

Turn qualitative feedback into an action plan.

Start with the model below and identify the key inputs and operations.

\`\`\`text
Feedback observed:
Pattern:
What to change next:
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Turn qualitative feedback into an action plan.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`,Pg=`# Interview for Evidence

## Learn

Write neutral questions for potential users.

Start with the model below and identify the key inputs and operations.

\`\`\`text
Who is affected?
What have you observed?
What would you ask users?
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Write neutral questions for potential users.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`,Rg=`# Make a Minimum Viable Prototype

## Learn

Choose the smallest version of your idea that can be tested.

Start with the model below and identify the key inputs and operations.

\`\`\`text
Core feature:
What will you test?
How will you know it works?
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Choose the smallest version of your idea that can be tested.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`,Ag=`# Player Decisions

## Learn

Use if statements to respond to changing game state.

Start with the model below and identify the key inputs and operations.

\`\`\`csharp
int health = 40;
// Show a warning when health is low.
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Use if statements to respond to changing game state.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`,Ig=`# Variables for a Game

## Learn

In C#, a variable has a type. Numbers like a score can use \`int\`, while names can use \`string\`.

\`\`\`csharp
int score = 20;
int bonus = 5;
int total = score + bonus;
\`\`\`

## Practice

Add the bonus to the player's score, then decide whether they have enough points to unlock an upgrade.

> Design lab note: This is an editable Markdown example. The editor is a visual mock and does not compile C#.
`,Lg=`# Decision Making

## Learn

Use a condition to choose a helpful response.

Start with the model below and identify the key inputs and operations.

\`\`\`python
temperature = 82
# Print a message based on the temperature.
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Use a condition to choose a helpful response.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`,Og=`# Format a Summary

## Learn

Formatting transforms raw data into something a reader can understand. Python's **f-strings** make that easier.

\`\`\`python
player = "Avery"
points = 18
summary = f"{player} scored {points} points"
print(summary)
\`\`\`

You can also control the number of decimals displayed:

\`\`\`python
average = 17.625
print(f"Average: {average:.1f}")
\`\`\`

## Practice

Given the player's name and points, print one polished summary line.

**Success criteria:** The summary contains the player's name, a numerical point value, and a clear description of what the number represents.
`,Dg=`# Lists and Indexing

## Learn

Work with a list of scores.

Start with the model below and identify the key inputs and operations.

\`\`\`python
scores = [8, 12, 15, 10]
# Print the highest score.
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Work with a list of scores.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`,zg=`# For Loops

## Learn

Repeat a task with a Python for loop.

Start with the model below and identify the key inputs and operations.

\`\`\`python
for day in range(1, 6):
    # Print the day number
    pass
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Repeat a task with a Python for loop.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`,Mg=`# Strings and Variables

## Learn

A **string** is text inside quotation marks. A variable stores a value so that your program can use it again.

\`\`\`python
name = "Jordan"
print(name)
\`\`\`

### Step 1 · Store a value

Create two variables: a person's name and a topic they enjoy.

### Step 2 · Combine information

Use an **f-string** to include variables inside one message:

\`\`\`python
message = f"{name} enjoys coding"
print(message)
\`\`\`

### Step 3 · Check your understanding

- Why does Python need quotation marks around text?
- How is the variable \`name\` different from the string \`"name"\`?

## Practice

Create a greeting using the provided name and topic. Your program should include both pieces of information in a single sentence. Try another pair of values afterward.
`,Fg=`<!-- Learning example adapted from mswhitby/computer-science-1/docs/units/content/02-values-and-variables/lessons/01-meet-variables.md; displayed in independent React preview. -->
# Values, Variables & Expressions — Lesson 1: Names for changing information

**New skill:** Variables and assignment  
**Previously learned:** Unit 01 — output, execution, and debugging

## Why this matters

Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.

## Study this example

\`\`\`python
player = 'Nova'
print('Player:', player)
player = 'Atlas'
print('Player:', player)
\`\`\`

Assignment uses a single equals sign. Python uses the current value when it reaches each print statement. Renaming the player changes later output, not previous output.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

What does the second print statement show? Why?

## Common mistake

Text values require quotation marks, but variable names do not.

## Practice: Names for changing information

Create a variable named \`player\` storing the text \`Nova\`. Display exactly \`Player: Nova\` using the variable and \`print()\`.

**Expected console output**

\`\`\`text
Player: Nova
\`\`\`

**Starter file:** [\`main.py\`](../practice/01-meet-variables/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

How do you store text in a variable?

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

\`print()\` can accept a label and a variable separated by a comma.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Check the space after the colon in the displayed output.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
`,Ug=`# Your First React Card

## Learn

React components are functions that return elements. Each component can accept **props** so it displays different information.

\`\`\`jsx
function StatCard({ label, value }) {
  return <div><strong>{value}</strong><span>{label}</span></div>;
}
\`\`\`

### Step by step

1. Create a named function.
2. Return one wrapping element.
3. Display a title and a number.
4. Add a button with an accessible label.

## Practice

Create a card that shows a player name, current score, and a button. Style the card for desktop and mobile.
`,Wg=`# Interactive React State

## Learn

Describe state changes that update the UI.

Start with the model below and identify the key inputs and operations.

\`\`\`jsx
import { useState } from "react";
// Make a counter component.
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Describe state changes that update the UI.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`,Bg=`# Solve Linear Equations

## Learn

Solve an equation by doing the same operation to both sides. For 3x + 5 = 20, first subtract 5, then divide by 3.

### Example

Explain the quantities and operations before calculating.

## Practice

Solve 4x + 6 = 22. Explain each step.

Choose an answer in the practice card.
`,Hg=`# Percents and Discounts

## Learn

A percent compares a quantity with 100. To find 20% of 50, multiply 0.20 × 50 = 10.

### Example

Explain the quantities and operations before calculating.

## Practice

A backpack costs $60 and is discounted by 25%. What is the sale price?

Choose an answer in the practice card.
`,$g=`# Ratios and Rates

## Learn

A ratio compares quantities. A **unit rate** tells us how many of one item correspond to one unit of another.

Example: If 3 markers are shared by 5 students, the number of markers per student is:

**3 ÷ 5 = 0.6 markers per student.**

## Practice

A group of 15 students needs markers at the same rate. How many markers are needed? Explain how you know.
`,qg=`# Slope and Rate of Change

## Learn

Slope is the change in y divided by the change in x. A constant rate makes a linear relationship.

### Example

Explain the quantities and operations before calculating.

## Practice

The table gives (1, 3), (2, 5), and (3, 7). What is the slope?

Choose an answer in the practice card.
`,Vg=`# Trace a Java Array

## Learn

An array holds multiple values. Java arrays start at index **0**.

\`\`\`java
int[] scores = {2, 4, 6};
System.out.println(scores[0]); // 2
\`\`\`

## Practice

Trace the loop in the starter code. Record every index and the updated element value in a table. Then write the final array.
`,Yg=`# Trace Java Loops

## Learn

Predict output from Java for and while loops.

Start with the model below and identify the key inputs and operations.

\`\`\`java
for (int i = 1; i <= 3; i++) {
    System.out.println(i * 2);
}
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Predict output from Java for and while loops.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`,Gg=`# Method Calls and Scope

## Learn

Trace how arguments pass through methods.

Start with the model below and identify the key inputs and operations.

\`\`\`java
static int doubleIt(int x) { return x * 2; }
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Trace how arguments pass through methods.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`,Kg=`# String Indexing

## Learn

Predict output of substring and charAt.

Start with the model below and identify the key inputs and operations.

\`\`\`java
String team = "UIL";
System.out.println(team.substring(1));
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Predict output of substring and charAt.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`,Qg=`# Collision Events

## Learn

Plan what happens when a player touches an item.

Start with the model below and identify the key inputs and operations.

\`\`\`csharp
// Pseudocode: react when the player collides with a coin.
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Plan what happens when a player touches an item.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`,Jg=`<!-- Learning example adapted from mswhitby/game-programming/samples/PlayerController.md (sample-lessons); displayed in independent React preview. -->
# Lab Guide: Building a Physics-Based Player Controller from Scratch

This student guide breaks down how to construct a custom player controller piece by piece. Each step shows the exact state of the script so students never lose track of where to type new code.

---

## 📋 Prerequisites
Ensure your project has the following setup before beginning:
* **The Input System Package:** Installed via \`Window > Package Manager\` (choose *Unity Registry*, look up *Input System*, and click *Install*).
* **A Player GameObject:** A 3D Primitive capsule or cube with a **Rigidbody** component attached. Under its Rigidbody **Constraints**, check **Freeze Rotation X and Z** to keep the player standing upright.

---

## 🛠️ Step 1: Base Structure and Namespaces
When you create a blank script, it imports standard packages. We need to add Unity's modern input handling system at the very top of the file so our script can read the keyboard.

### 📝 Your Script Should Look Like This Now:
\`\`\`csharp
using UnityEngine;
using UnityEngine.InputSystem; // Added this line

public class PlayerController : MonoBehaviour
{
    // The inside of the class is currently empty
}
\`\`\`

---

## 🛠️ Step 2: Adding Movement Variables
Now we will add variables inside the class braces \`{ }\`. These variables control the player's speed and allow us to hold onto our physics component later.

### 📝 Your Script Should Look Like This Now:
\`\`\`csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    // --- NEW VARIABLES ADDED HERE ---
    [Header("Movement Settings")]
    [Tooltip("Forward/back speed (units per second).")]
    public float speed = 5.0f;

    [Tooltip("Turn speed (degrees per second).")]
    public float rotationSpeed = 120.0f;

    private Rigidbody rb; 
    // --------------------------------
}
\`\`\`

---

## 🛠️ Step 3: Initializing the Rigidbody Component
When the game starts, the script needs to search our object for its physical Rigidbody component. We do this inside the \`Start()\` method right below our variables.

### 📝 Your Script Should Look Like This Now:
\`\`\`csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    [Header("Movement Settings")]
    public float speed = 5.0f;
    public float rotationSpeed = 120.0f;

    private Rigidbody rb;

    // --- NEW START METHOD ADDED HERE ---
    private void Start()
    {
        // Find and store the Rigidbody component
        rb = GetComponent<Rigidbody>();
        
        // Safety check: print a warning if we forgot to add a Rigidbody in Unity
        if (rb == null) 
        {
            Debug.LogWarning("PlayerController requires a Rigidbody component on this GameObject.");
        }
    }
    // -----------------------------------
}
\`\`\`

---

## 🛠️ Step 4: Setting up the Physics Loop and Gathering Input
We need a dedicated physics loop called \`FixedUpdate()\` below the \`Start()\` method. Inside it, we will read real-time keyboard inputs to see if the player is trying to move or turn.

### 📝 Your Script Should Look Like This Now:
\`\`\`csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    [Header("Movement Settings")]
    public float speed = 5.0f;
    public float rotationSpeed = 120.0f;

    private Rigidbody rb;

    private void Start()
    {
        rb = GetComponent<Rigidbody>();
        if (rb == null) 
        {
            Debug.LogWarning("PlayerController requires a Rigidbody component on this GameObject.");
        }
    }

    // --- NEW FIXEDUPDATE METHOD AND INPUT LOGIC ADDED HERE ---
    private void FixedUpdate()
    {
        // If the Rigidbody is missing, stop running code to prevent errors
        if (rb == null) return;

        // Create a blank 2D coordinate to track button presses
        Vector2 moveInput = Vector2.zero;

        // Check Forward/Backward Input (Y axis)
        if (Keyboard.current.wKey.isPressed || Keyboard.current.upArrowKey.isPressed) 
            moveInput.y = 1f;
        if (Keyboard.current.sKey.isPressed || Keyboard.current.downArrowKey.isPressed) 
            moveInput.y = -1f;

        // Check Left/Right Rotation Input (X axis)
        if (Keyboard.current.dKey.isPressed || Keyboard.current.rightArrowKey.isPressed) 
            moveInput.x = 1f;
        if (Keyboard.current.aKey.isPressed || Keyboard.current.leftArrowKey.isPressed) 
            moveInput.x = -1f;
    }
    // ---------------------------------------------------------
}
\`\`\`

---

## 🛠️ Step 5: Applying Turning (Rotation) Physics
Now we will use the horizontal input (\`moveInput.x\`) to turn the player around on its Y-axis. This code goes directly inside the bottom of the \`FixedUpdate()\` method.

### 📝 Your Script Should Look Like This Now:
\`\`\`csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    [Header("Movement Settings")]
    public float speed = 5.0f;
    public float rotationSpeed = 120.0f;

    private Rigidbody rb;

    private void Start()
    {
        rb = GetComponent<Rigidbody>();
        if (rb == null) 
        {
            Debug.LogWarning("PlayerController requires a Rigidbody component on this GameObject.");
        }
    }

    private void FixedUpdate()
    {
        if (rb == null) return;

        Vector2 moveInput = Vector2.zero;

        if (Keyboard.current.wKey.isPressed || Keyboard.current.upArrowKey.isPressed) 
            moveInput.y = 1f;
        if (Keyboard.current.sKey.isPressed || Keyboard.current.downArrowKey.isPressed) 
            moveInput.y = -1f;

        if (Keyboard.current.dKey.isPressed || Keyboard.current.rightArrowKey.isPressed) 
            moveInput.x = 1f;
        if (Keyboard.current.aKey.isPressed || Keyboard.current.leftArrowKey.isPressed) 
            moveInput.x = -1f;

        // --- NEW ROTATION PHYSICS ADDED HERE ---
        float turn = moveInput.x * rotationSpeed * Time.fixedDeltaTime;
        Quaternion turnRotation = Quaternion.Euler(0f, turn, 0f);
        rb.MoveRotation(rb.rotation * turnRotation);
        // ---------------------------------------
    }
}
\`\`\`

---

## 🛠️ Step 6: Applying Forward/Backward Movement Physics
Finally, we calculate movement. The player must move relative to the direction they face. This goes at the very end of the \`FixedUpdate()\` method to finish our script.

### 📝 Your Final Completed Script:
\`\`\`csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    [Header("Movement Settings")]
    public float speed = 5.0f;
    public float rotationSpeed = 120.0f;

    private Rigidbody rb;

    private void Start()
    {
        rb = GetComponent<Rigidbody>();
        if (rb == null) 
        {
            Debug.LogWarning("PlayerController requires a Rigidbody component on this GameObject.");
        }
    }

    private void FixedUpdate()
    {
        if (rb == null) return;

        Vector2 moveInput = Vector2.zero;

        if (Keyboard.current.wKey.isPressed || Keyboard.current.upArrowKey.isPressed) 
            moveInput.y = 1f;
        if (Keyboard.current.sKey.isPressed || Keyboard.current.downArrowKey.isPressed) 
            moveInput.y = -1f;

        if (Keyboard.current.dKey.isPressed || Keyboard.current.rightArrowKey.isPressed) 
            moveInput.x = 1f;
        if (Keyboard.current.aKey.isPressed || Keyboard.current.leftArrowKey.isPressed) 
            moveInput.x = -1f;

        float turn = moveInput.x * rotationSpeed * Time.fixedDeltaTime;
        Quaternion turnRotation = Quaternion.Euler(0f, turn, 0f);
        rb.MoveRotation(rb.rotation * turnRotation);

        // --- NEW MOVEMENT PHYSICS ADDED HERE ---
        Vector3 movement = transform.forward * moveInput.y * speed * Time.fixedDeltaTime;
        rb.MovePosition(rb.position + movement);
        // ---------------------------------------
    }
}
\`\`\`
`,Xg=`# Score and Feedback

## Learn

Build and update a score counter.

Start with the model below and identify the key inputs and operations.

\`\`\`csharp
int score = 0;
// Add points when a goal is completed.
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Build and update a score counter.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`,Zg=`# Events and Forms

## Learn

Design a form that reacts to user input.

Start with the model below and identify the key inputs and operations.

\`\`\`jsx
export default function App() {
  return <button>Click me</button>;
}
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Design a form that reacts to user input.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`,ey=`# Responsive Layouts

## Learn

Organize information with semantic HTML and CSS.

Start with the model below and identify the key inputs and operations.

\`\`\`jsx
function App() {
  return <main><h1>My site</h1></main>;
}
\`\`\`

### Think about it

Which steps would you test first?

## Practice

Organize information with semantic HTML and CSS.

1. Read the task carefully.
2. Try a small example.
3. Explain or code your solution, then check it.
`;function Iu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Qr=Iu();function Qp(s){Qr=s}var Fi={exec:()=>null};function Ne(s,i=""){let l=typeof s=="string"?s:s.source;const c={replace:(d,p)=>{let g=typeof p=="string"?p:p.source;return g=g.replace(bn.caret,"$1"),l=l.replace(d,g),c},getRegex:()=>new RegExp(l,i)};return c}var bn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:s=>new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}#`),htmlBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}<(?:[a-z].*>|!--)`,"i")},ny=/^(?:[ \t]*(?:\n|$))+/,ty=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ry=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ui=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,sy=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Lu=/(?:[*+-]|\d{1,9}[.)])/,Jp=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Xp=Ne(Jp).replace(/bull/g,Lu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),iy=Ne(Jp).replace(/bull/g,Lu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ou=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ay=/^[^\n]+/,Du=/(?!\s*\])(?:\\.|[^\[\]\\])+/,oy=Ne(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Du).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ly=Ne(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Lu).getRegex(),go="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",zu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,uy=Ne("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",zu).replace("tag",go).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Zp=Ne(Ou).replace("hr",Ui).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",go).getRegex(),cy=Ne(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Zp).getRegex(),Mu={blockquote:cy,code:ty,def:oy,fences:ry,heading:sy,hr:Ui,html:uy,lheading:Xp,list:ly,newline:ny,paragraph:Zp,table:Fi,text:ay},pp=Ne("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ui).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",go).getRegex(),dy={...Mu,lheading:iy,table:pp,paragraph:Ne(Ou).replace("hr",Ui).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",pp).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",go).getRegex()},py={...Mu,html:Ne(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",zu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Fi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ne(Ou).replace("hr",Ui).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Xp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},hy=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,my=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,eh=/^( {2,}|\\)\n(?!\s*$)/,fy=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,yo=/[\p{P}\p{S}]/u,Fu=/[\s\p{P}\p{S}]/u,nh=/[^\s\p{P}\p{S}]/u,gy=Ne(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Fu).getRegex(),th=/(?!~)[\p{P}\p{S}]/u,yy=/(?!~)[\s\p{P}\p{S}]/u,vy=/(?:[^\s\p{P}\p{S}]|~)/u,xy=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,rh=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,wy=Ne(rh,"u").replace(/punct/g,yo).getRegex(),ky=Ne(rh,"u").replace(/punct/g,th).getRegex(),sh="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",by=Ne(sh,"gu").replace(/notPunctSpace/g,nh).replace(/punctSpace/g,Fu).replace(/punct/g,yo).getRegex(),_y=Ne(sh,"gu").replace(/notPunctSpace/g,vy).replace(/punctSpace/g,yy).replace(/punct/g,th).getRegex(),Sy=Ne("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,nh).replace(/punctSpace/g,Fu).replace(/punct/g,yo).getRegex(),Cy=Ne(/\\(punct)/,"gu").replace(/punct/g,yo).getRegex(),jy=Ne(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ty=Ne(zu).replace("(?:-->|$)","-->").getRegex(),Ey=Ne("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ty).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),io=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ny=Ne(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",io).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ih=Ne(/^!?\[(label)\]\[(ref)\]/).replace("label",io).replace("ref",Du).getRegex(),ah=Ne(/^!?\[(ref)\](?:\[\])?/).replace("ref",Du).getRegex(),Py=Ne("reflink|nolink(?!\\()","g").replace("reflink",ih).replace("nolink",ah).getRegex(),Uu={_backpedal:Fi,anyPunctuation:Cy,autolink:jy,blockSkip:xy,br:eh,code:my,del:Fi,emStrongLDelim:wy,emStrongRDelimAst:by,emStrongRDelimUnd:Sy,escape:hy,link:Ny,nolink:ah,punctuation:gy,reflink:ih,reflinkSearch:Py,tag:Ey,text:fy,url:Fi},Ry={...Uu,link:Ne(/^!?\[(label)\]\((.*?)\)/).replace("label",io).getRegex(),reflink:Ne(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",io).getRegex()},gu={...Uu,emStrongRDelimAst:_y,emStrongLDelim:ky,url:Ne(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ay={...gu,br:Ne(eh).replace("{2,}","*").getRegex(),text:Ne(gu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Qa={normal:Mu,gfm:dy,pedantic:py},Ni={normal:Uu,gfm:gu,breaks:Ay,pedantic:Ry},Iy={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},hp=s=>Iy[s];function bt(s,i){if(i){if(bn.escapeTest.test(s))return s.replace(bn.escapeReplace,hp)}else if(bn.escapeTestNoEncode.test(s))return s.replace(bn.escapeReplaceNoEncode,hp);return s}function mp(s){try{s=encodeURI(s).replace(bn.percentDecode,"%")}catch{return null}return s}function fp(s,i){var p;const l=s.replace(bn.findPipe,(g,f,v)=>{let x=!1,w=f;for(;--w>=0&&v[w]==="\\";)x=!x;return x?"|":" |"}),c=l.split(bn.splitPipe);let d=0;if(c[0].trim()||c.shift(),c.length>0&&!((p=c.at(-1))!=null&&p.trim())&&c.pop(),i)if(c.length>i)c.splice(i);else for(;c.length<i;)c.push("");for(;d<c.length;d++)c[d]=c[d].trim().replace(bn.slashPipe,"|");return c}function Pi(s,i,l){const c=s.length;if(c===0)return"";let d=0;for(;d<c&&s.charAt(c-d-1)===i;)d++;return s.slice(0,c-d)}function Ly(s,i){if(s.indexOf(i[1])===-1)return-1;let l=0;for(let c=0;c<s.length;c++)if(s[c]==="\\")c++;else if(s[c]===i[0])l++;else if(s[c]===i[1]&&(l--,l<0))return c;return l>0?-2:-1}function gp(s,i,l,c,d){const p=i.href,g=i.title||null,f=s[1].replace(d.other.outputLinkReplace,"$1");c.state.inLink=!0;const v={type:s[0].charAt(0)==="!"?"image":"link",raw:l,href:p,title:g,text:f,tokens:c.inlineTokens(f)};return c.state.inLink=!1,v}function Oy(s,i,l){const c=s.match(l.other.indentCodeCompensation);if(c===null)return i;const d=c[1];return i.split(`
`).map(p=>{const g=p.match(l.other.beginningSpace);if(g===null)return p;const[f]=g;return f.length>=d.length?p.slice(d.length):p}).join(`
`)}var ao=class{constructor(s){Le(this,"options");Le(this,"rules");Le(this,"lexer");this.options=s||Qr}space(s){const i=this.rules.block.newline.exec(s);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(s){const i=this.rules.block.code.exec(s);if(i){const l=i[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?l:Pi(l,`
`)}}}fences(s){const i=this.rules.block.fences.exec(s);if(i){const l=i[0],c=Oy(l,i[3]||"",this.rules);return{type:"code",raw:l,lang:i[2]?i[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):i[2],text:c}}}heading(s){const i=this.rules.block.heading.exec(s);if(i){let l=i[2].trim();if(this.rules.other.endingHash.test(l)){const c=Pi(l,"#");(this.options.pedantic||!c||this.rules.other.endingSpaceChar.test(c))&&(l=c.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:l,tokens:this.lexer.inline(l)}}}hr(s){const i=this.rules.block.hr.exec(s);if(i)return{type:"hr",raw:Pi(i[0],`
`)}}blockquote(s){const i=this.rules.block.blockquote.exec(s);if(i){let l=Pi(i[0],`
`).split(`
`),c="",d="";const p=[];for(;l.length>0;){let g=!1;const f=[];let v;for(v=0;v<l.length;v++)if(this.rules.other.blockquoteStart.test(l[v]))f.push(l[v]),g=!0;else if(!g)f.push(l[v]);else break;l=l.slice(v);const x=f.join(`
`),w=x.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");c=c?`${c}
${x}`:x,d=d?`${d}
${w}`:w;const k=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(w,p,!0),this.lexer.state.top=k,l.length===0)break;const j=p.at(-1);if((j==null?void 0:j.type)==="code")break;if((j==null?void 0:j.type)==="blockquote"){const F=j,H=F.raw+`
`+l.join(`
`),P=this.blockquote(H);p[p.length-1]=P,c=c.substring(0,c.length-F.raw.length)+P.raw,d=d.substring(0,d.length-F.text.length)+P.text;break}else if((j==null?void 0:j.type)==="list"){const F=j,H=F.raw+`
`+l.join(`
`),P=this.list(H);p[p.length-1]=P,c=c.substring(0,c.length-j.raw.length)+P.raw,d=d.substring(0,d.length-F.raw.length)+P.raw,l=H.substring(p.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:c,tokens:p,text:d}}}list(s){let i=this.rules.block.list.exec(s);if(i){let l=i[1].trim();const c=l.length>1,d={type:"list",raw:"",ordered:c,start:c?+l.slice(0,-1):"",loose:!1,items:[]};l=c?`\\d{1,9}\\${l.slice(-1)}`:`\\${l}`,this.options.pedantic&&(l=c?l:"[*+-]");const p=this.rules.other.listItemRegex(l);let g=!1;for(;s;){let v=!1,x="",w="";if(!(i=p.exec(s))||this.rules.block.hr.test(s))break;x=i[0],s=s.substring(x.length);let k=i[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,q=>" ".repeat(3*q.length)),j=s.split(`
`,1)[0],F=!k.trim(),H=0;if(this.options.pedantic?(H=2,w=k.trimStart()):F?H=i[1].length+1:(H=i[2].search(this.rules.other.nonSpaceChar),H=H>4?1:H,w=k.slice(H),H+=i[1].length),F&&this.rules.other.blankLine.test(j)&&(x+=j+`
`,s=s.substring(j.length+1),v=!0),!v){const q=this.rules.other.nextBulletRegex(H),ue=this.rules.other.hrRegex(H),pe=this.rules.other.fencesBeginRegex(H),ae=this.rules.other.headingBeginRegex(H),ce=this.rules.other.htmlBeginRegex(H);for(;s;){const ye=s.split(`
`,1)[0];let X;if(j=ye,this.options.pedantic?(j=j.replace(this.rules.other.listReplaceNesting,"  "),X=j):X=j.replace(this.rules.other.tabCharGlobal,"    "),pe.test(j)||ae.test(j)||ce.test(j)||q.test(j)||ue.test(j))break;if(X.search(this.rules.other.nonSpaceChar)>=H||!j.trim())w+=`
`+X.slice(H);else{if(F||k.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||pe.test(k)||ae.test(k)||ue.test(k))break;w+=`
`+j}!F&&!j.trim()&&(F=!0),x+=ye+`
`,s=s.substring(ye.length+1),k=X.slice(H)}}d.loose||(g?d.loose=!0:this.rules.other.doubleBlankLine.test(x)&&(g=!0));let P=null,z;this.options.gfm&&(P=this.rules.other.listIsTask.exec(w),P&&(z=P[0]!=="[ ] ",w=w.replace(this.rules.other.listReplaceTask,""))),d.items.push({type:"list_item",raw:x,task:!!P,checked:z,loose:!1,text:w,tokens:[]}),d.raw+=x}const f=d.items.at(-1);if(f)f.raw=f.raw.trimEnd(),f.text=f.text.trimEnd();else return;d.raw=d.raw.trimEnd();for(let v=0;v<d.items.length;v++)if(this.lexer.state.top=!1,d.items[v].tokens=this.lexer.blockTokens(d.items[v].text,[]),!d.loose){const x=d.items[v].tokens.filter(k=>k.type==="space"),w=x.length>0&&x.some(k=>this.rules.other.anyLine.test(k.raw));d.loose=w}if(d.loose)for(let v=0;v<d.items.length;v++)d.items[v].loose=!0;return d}}html(s){const i=this.rules.block.html.exec(s);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(s){const i=this.rules.block.def.exec(s);if(i){const l=i[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),c=i[2]?i[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",d=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):i[3];return{type:"def",tag:l,raw:i[0],href:c,title:d}}}table(s){var g;const i=this.rules.block.table.exec(s);if(!i||!this.rules.other.tableDelimiter.test(i[2]))return;const l=fp(i[1]),c=i[2].replace(this.rules.other.tableAlignChars,"").split("|"),d=(g=i[3])!=null&&g.trim()?i[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],p={type:"table",raw:i[0],header:[],align:[],rows:[]};if(l.length===c.length){for(const f of c)this.rules.other.tableAlignRight.test(f)?p.align.push("right"):this.rules.other.tableAlignCenter.test(f)?p.align.push("center"):this.rules.other.tableAlignLeft.test(f)?p.align.push("left"):p.align.push(null);for(let f=0;f<l.length;f++)p.header.push({text:l[f],tokens:this.lexer.inline(l[f]),header:!0,align:p.align[f]});for(const f of d)p.rows.push(fp(f,p.header.length).map((v,x)=>({text:v,tokens:this.lexer.inline(v),header:!1,align:p.align[x]})));return p}}lheading(s){const i=this.rules.block.lheading.exec(s);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(s){const i=this.rules.block.paragraph.exec(s);if(i){const l=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:l,tokens:this.lexer.inline(l)}}}text(s){const i=this.rules.block.text.exec(s);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(s){const i=this.rules.inline.escape.exec(s);if(i)return{type:"escape",raw:i[0],text:i[1]}}tag(s){const i=this.rules.inline.tag.exec(s);if(i)return!this.lexer.state.inLink&&this.rules.other.startATag.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(s){const i=this.rules.inline.link.exec(s);if(i){const l=i[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(l)){if(!this.rules.other.endAngleBracket.test(l))return;const p=Pi(l.slice(0,-1),"\\");if((l.length-p.length)%2===0)return}else{const p=Ly(i[2],"()");if(p===-2)return;if(p>-1){const f=(i[0].indexOf("!")===0?5:4)+i[1].length+p;i[2]=i[2].substring(0,p),i[0]=i[0].substring(0,f).trim(),i[3]=""}}let c=i[2],d="";if(this.options.pedantic){const p=this.rules.other.pedanticHrefTitle.exec(c);p&&(c=p[1],d=p[3])}else d=i[3]?i[3].slice(1,-1):"";return c=c.trim(),this.rules.other.startAngleBracket.test(c)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(l)?c=c.slice(1):c=c.slice(1,-1)),gp(i,{href:c&&c.replace(this.rules.inline.anyPunctuation,"$1"),title:d&&d.replace(this.rules.inline.anyPunctuation,"$1")},i[0],this.lexer,this.rules)}}reflink(s,i){let l;if((l=this.rules.inline.reflink.exec(s))||(l=this.rules.inline.nolink.exec(s))){const c=(l[2]||l[1]).replace(this.rules.other.multipleSpaceGlobal," "),d=i[c.toLowerCase()];if(!d){const p=l[0].charAt(0);return{type:"text",raw:p,text:p}}return gp(l,d,l[0],this.lexer,this.rules)}}emStrong(s,i,l=""){let c=this.rules.inline.emStrongLDelim.exec(s);if(!c||c[3]&&l.match(this.rules.other.unicodeAlphaNumeric))return;if(!(c[1]||c[2]||"")||!l||this.rules.inline.punctuation.exec(l)){const p=[...c[0]].length-1;let g,f,v=p,x=0;const w=c[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(w.lastIndex=0,i=i.slice(-1*s.length+p);(c=w.exec(i))!=null;){if(g=c[1]||c[2]||c[3]||c[4]||c[5]||c[6],!g)continue;if(f=[...g].length,c[3]||c[4]){v+=f;continue}else if((c[5]||c[6])&&p%3&&!((p+f)%3)){x+=f;continue}if(v-=f,v>0)continue;f=Math.min(f,f+v+x);const k=[...c[0]][0].length,j=s.slice(0,p+c.index+k+f);if(Math.min(p,f)%2){const H=j.slice(1,-1);return{type:"em",raw:j,text:H,tokens:this.lexer.inlineTokens(H)}}const F=j.slice(2,-2);return{type:"strong",raw:j,text:F,tokens:this.lexer.inlineTokens(F)}}}}codespan(s){const i=this.rules.inline.code.exec(s);if(i){let l=i[2].replace(this.rules.other.newLineCharGlobal," ");const c=this.rules.other.nonSpaceChar.test(l),d=this.rules.other.startingSpaceChar.test(l)&&this.rules.other.endingSpaceChar.test(l);return c&&d&&(l=l.substring(1,l.length-1)),{type:"codespan",raw:i[0],text:l}}}br(s){const i=this.rules.inline.br.exec(s);if(i)return{type:"br",raw:i[0]}}del(s){const i=this.rules.inline.del.exec(s);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(s){const i=this.rules.inline.autolink.exec(s);if(i){let l,c;return i[2]==="@"?(l=i[1],c="mailto:"+l):(l=i[1],c=l),{type:"link",raw:i[0],text:l,href:c,tokens:[{type:"text",raw:l,text:l}]}}}url(s){var l;let i;if(i=this.rules.inline.url.exec(s)){let c,d;if(i[2]==="@")c=i[0],d="mailto:"+c;else{let p;do p=i[0],i[0]=((l=this.rules.inline._backpedal.exec(i[0]))==null?void 0:l[0])??"";while(p!==i[0]);c=i[0],i[1]==="www."?d="http://"+i[0]:d=i[0]}return{type:"link",raw:i[0],text:c,href:d,tokens:[{type:"text",raw:c,text:c}]}}}inlineText(s){const i=this.rules.inline.text.exec(s);if(i){const l=this.lexer.state.inRawBlock;return{type:"text",raw:i[0],text:i[0],escaped:l}}}},Ht=class yu{constructor(i){Le(this,"tokens");Le(this,"options");Le(this,"state");Le(this,"tokenizer");Le(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=i||Qr,this.options.tokenizer=this.options.tokenizer||new ao,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const l={other:bn,block:Qa.normal,inline:Ni.normal};this.options.pedantic?(l.block=Qa.pedantic,l.inline=Ni.pedantic):this.options.gfm&&(l.block=Qa.gfm,this.options.breaks?l.inline=Ni.breaks:l.inline=Ni.gfm),this.tokenizer.rules=l}static get rules(){return{block:Qa,inline:Ni}}static lex(i,l){return new yu(l).lex(i)}static lexInline(i,l){return new yu(l).inlineTokens(i)}lex(i){i=i.replace(bn.carriageReturn,`
`),this.blockTokens(i,this.tokens);for(let l=0;l<this.inlineQueue.length;l++){const c=this.inlineQueue[l];this.inlineTokens(c.src,c.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(i,l=[],c=!1){var d,p,g;for(this.options.pedantic&&(i=i.replace(bn.tabCharGlobal,"    ").replace(bn.spaceLine,""));i;){let f;if((p=(d=this.options.extensions)==null?void 0:d.block)!=null&&p.some(x=>(f=x.call({lexer:this},i,l))?(i=i.substring(f.raw.length),l.push(f),!0):!1))continue;if(f=this.tokenizer.space(i)){i=i.substring(f.raw.length);const x=l.at(-1);f.raw.length===1&&x!==void 0?x.raw+=`
`:l.push(f);continue}if(f=this.tokenizer.code(i)){i=i.substring(f.raw.length);const x=l.at(-1);(x==null?void 0:x.type)==="paragraph"||(x==null?void 0:x.type)==="text"?(x.raw+=`
`+f.raw,x.text+=`
`+f.text,this.inlineQueue.at(-1).src=x.text):l.push(f);continue}if(f=this.tokenizer.fences(i)){i=i.substring(f.raw.length),l.push(f);continue}if(f=this.tokenizer.heading(i)){i=i.substring(f.raw.length),l.push(f);continue}if(f=this.tokenizer.hr(i)){i=i.substring(f.raw.length),l.push(f);continue}if(f=this.tokenizer.blockquote(i)){i=i.substring(f.raw.length),l.push(f);continue}if(f=this.tokenizer.list(i)){i=i.substring(f.raw.length),l.push(f);continue}if(f=this.tokenizer.html(i)){i=i.substring(f.raw.length),l.push(f);continue}if(f=this.tokenizer.def(i)){i=i.substring(f.raw.length);const x=l.at(-1);(x==null?void 0:x.type)==="paragraph"||(x==null?void 0:x.type)==="text"?(x.raw+=`
`+f.raw,x.text+=`
`+f.raw,this.inlineQueue.at(-1).src=x.text):this.tokens.links[f.tag]||(this.tokens.links[f.tag]={href:f.href,title:f.title});continue}if(f=this.tokenizer.table(i)){i=i.substring(f.raw.length),l.push(f);continue}if(f=this.tokenizer.lheading(i)){i=i.substring(f.raw.length),l.push(f);continue}let v=i;if((g=this.options.extensions)!=null&&g.startBlock){let x=1/0;const w=i.slice(1);let k;this.options.extensions.startBlock.forEach(j=>{k=j.call({lexer:this},w),typeof k=="number"&&k>=0&&(x=Math.min(x,k))}),x<1/0&&x>=0&&(v=i.substring(0,x+1))}if(this.state.top&&(f=this.tokenizer.paragraph(v))){const x=l.at(-1);c&&(x==null?void 0:x.type)==="paragraph"?(x.raw+=`
`+f.raw,x.text+=`
`+f.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=x.text):l.push(f),c=v.length!==i.length,i=i.substring(f.raw.length);continue}if(f=this.tokenizer.text(i)){i=i.substring(f.raw.length);const x=l.at(-1);(x==null?void 0:x.type)==="text"?(x.raw+=`
`+f.raw,x.text+=`
`+f.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=x.text):l.push(f);continue}if(i){const x="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(x);break}else throw new Error(x)}}return this.state.top=!0,l}inline(i,l=[]){return this.inlineQueue.push({src:i,tokens:l}),l}inlineTokens(i,l=[]){var f,v,x;let c=i,d=null;if(this.tokens.links){const w=Object.keys(this.tokens.links);if(w.length>0)for(;(d=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)w.includes(d[0].slice(d[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(d=this.tokenizer.rules.inline.anyPunctuation.exec(c))!=null;)c=c.slice(0,d.index)+"++"+c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(d=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let p=!1,g="";for(;i;){p||(g=""),p=!1;let w;if((v=(f=this.options.extensions)==null?void 0:f.inline)!=null&&v.some(j=>(w=j.call({lexer:this},i,l))?(i=i.substring(w.raw.length),l.push(w),!0):!1))continue;if(w=this.tokenizer.escape(i)){i=i.substring(w.raw.length),l.push(w);continue}if(w=this.tokenizer.tag(i)){i=i.substring(w.raw.length),l.push(w);continue}if(w=this.tokenizer.link(i)){i=i.substring(w.raw.length),l.push(w);continue}if(w=this.tokenizer.reflink(i,this.tokens.links)){i=i.substring(w.raw.length);const j=l.at(-1);w.type==="text"&&(j==null?void 0:j.type)==="text"?(j.raw+=w.raw,j.text+=w.text):l.push(w);continue}if(w=this.tokenizer.emStrong(i,c,g)){i=i.substring(w.raw.length),l.push(w);continue}if(w=this.tokenizer.codespan(i)){i=i.substring(w.raw.length),l.push(w);continue}if(w=this.tokenizer.br(i)){i=i.substring(w.raw.length),l.push(w);continue}if(w=this.tokenizer.del(i)){i=i.substring(w.raw.length),l.push(w);continue}if(w=this.tokenizer.autolink(i)){i=i.substring(w.raw.length),l.push(w);continue}if(!this.state.inLink&&(w=this.tokenizer.url(i))){i=i.substring(w.raw.length),l.push(w);continue}let k=i;if((x=this.options.extensions)!=null&&x.startInline){let j=1/0;const F=i.slice(1);let H;this.options.extensions.startInline.forEach(P=>{H=P.call({lexer:this},F),typeof H=="number"&&H>=0&&(j=Math.min(j,H))}),j<1/0&&j>=0&&(k=i.substring(0,j+1))}if(w=this.tokenizer.inlineText(k)){i=i.substring(w.raw.length),w.raw.slice(-1)!=="_"&&(g=w.raw.slice(-1)),p=!0;const j=l.at(-1);(j==null?void 0:j.type)==="text"?(j.raw+=w.raw,j.text+=w.text):l.push(w);continue}if(i){const j="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(j);break}else throw new Error(j)}}return l}},oo=class{constructor(s){Le(this,"options");Le(this,"parser");this.options=s||Qr}space(s){return""}code({text:s,lang:i,escaped:l}){var p;const c=(p=(i||"").match(bn.notSpaceStart))==null?void 0:p[0],d=s.replace(bn.endingNewline,"")+`
`;return c?'<pre><code class="language-'+bt(c)+'">'+(l?d:bt(d,!0))+`</code></pre>
`:"<pre><code>"+(l?d:bt(d,!0))+`</code></pre>
`}blockquote({tokens:s}){return`<blockquote>
${this.parser.parse(s)}</blockquote>
`}html({text:s}){return s}heading({tokens:s,depth:i}){return`<h${i}>${this.parser.parseInline(s)}</h${i}>
`}hr(s){return`<hr>
`}list(s){const i=s.ordered,l=s.start;let c="";for(let g=0;g<s.items.length;g++){const f=s.items[g];c+=this.listitem(f)}const d=i?"ol":"ul",p=i&&l!==1?' start="'+l+'"':"";return"<"+d+p+`>
`+c+"</"+d+`>
`}listitem(s){var l;let i="";if(s.task){const c=this.checkbox({checked:!!s.checked});s.loose?((l=s.tokens[0])==null?void 0:l.type)==="paragraph"?(s.tokens[0].text=c+" "+s.tokens[0].text,s.tokens[0].tokens&&s.tokens[0].tokens.length>0&&s.tokens[0].tokens[0].type==="text"&&(s.tokens[0].tokens[0].text=c+" "+bt(s.tokens[0].tokens[0].text),s.tokens[0].tokens[0].escaped=!0)):s.tokens.unshift({type:"text",raw:c+" ",text:c+" ",escaped:!0}):i+=c+" "}return i+=this.parser.parse(s.tokens,!!s.loose),`<li>${i}</li>
`}checkbox({checked:s}){return"<input "+(s?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:s}){return`<p>${this.parser.parseInline(s)}</p>
`}table(s){let i="",l="";for(let d=0;d<s.header.length;d++)l+=this.tablecell(s.header[d]);i+=this.tablerow({text:l});let c="";for(let d=0;d<s.rows.length;d++){const p=s.rows[d];l="";for(let g=0;g<p.length;g++)l+=this.tablecell(p[g]);c+=this.tablerow({text:l})}return c&&(c=`<tbody>${c}</tbody>`),`<table>
<thead>
`+i+`</thead>
`+c+`</table>
`}tablerow({text:s}){return`<tr>
${s}</tr>
`}tablecell(s){const i=this.parser.parseInline(s.tokens),l=s.header?"th":"td";return(s.align?`<${l} align="${s.align}">`:`<${l}>`)+i+`</${l}>
`}strong({tokens:s}){return`<strong>${this.parser.parseInline(s)}</strong>`}em({tokens:s}){return`<em>${this.parser.parseInline(s)}</em>`}codespan({text:s}){return`<code>${bt(s,!0)}</code>`}br(s){return"<br>"}del({tokens:s}){return`<del>${this.parser.parseInline(s)}</del>`}link({href:s,title:i,tokens:l}){const c=this.parser.parseInline(l),d=mp(s);if(d===null)return c;s=d;let p='<a href="'+s+'"';return i&&(p+=' title="'+bt(i)+'"'),p+=">"+c+"</a>",p}image({href:s,title:i,text:l,tokens:c}){c&&(l=this.parser.parseInline(c,this.parser.textRenderer));const d=mp(s);if(d===null)return bt(l);s=d;let p=`<img src="${s}" alt="${l}"`;return i&&(p+=` title="${bt(i)}"`),p+=">",p}text(s){return"tokens"in s&&s.tokens?this.parser.parseInline(s.tokens):"escaped"in s&&s.escaped?s.text:bt(s.text)}},Wu=class{strong({text:s}){return s}em({text:s}){return s}codespan({text:s}){return s}del({text:s}){return s}html({text:s}){return s}text({text:s}){return s}link({text:s}){return""+s}image({text:s}){return""+s}br(){return""}},$t=class vu{constructor(i){Le(this,"options");Le(this,"renderer");Le(this,"textRenderer");this.options=i||Qr,this.options.renderer=this.options.renderer||new oo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Wu}static parse(i,l){return new vu(l).parse(i)}static parseInline(i,l){return new vu(l).parseInline(i)}parse(i,l=!0){var d,p;let c="";for(let g=0;g<i.length;g++){const f=i[g];if((p=(d=this.options.extensions)==null?void 0:d.renderers)!=null&&p[f.type]){const x=f,w=this.options.extensions.renderers[x.type].call({parser:this},x);if(w!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(x.type)){c+=w||"";continue}}const v=f;switch(v.type){case"space":{c+=this.renderer.space(v);continue}case"hr":{c+=this.renderer.hr(v);continue}case"heading":{c+=this.renderer.heading(v);continue}case"code":{c+=this.renderer.code(v);continue}case"table":{c+=this.renderer.table(v);continue}case"blockquote":{c+=this.renderer.blockquote(v);continue}case"list":{c+=this.renderer.list(v);continue}case"html":{c+=this.renderer.html(v);continue}case"paragraph":{c+=this.renderer.paragraph(v);continue}case"text":{let x=v,w=this.renderer.text(x);for(;g+1<i.length&&i[g+1].type==="text";)x=i[++g],w+=`
`+this.renderer.text(x);l?c+=this.renderer.paragraph({type:"paragraph",raw:w,text:w,tokens:[{type:"text",raw:w,text:w,escaped:!0}]}):c+=w;continue}default:{const x='Token with "'+v.type+'" type was not found.';if(this.options.silent)return console.error(x),"";throw new Error(x)}}}return c}parseInline(i,l=this.renderer){var d,p;let c="";for(let g=0;g<i.length;g++){const f=i[g];if((p=(d=this.options.extensions)==null?void 0:d.renderers)!=null&&p[f.type]){const x=this.options.extensions.renderers[f.type].call({parser:this},f);if(x!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(f.type)){c+=x||"";continue}}const v=f;switch(v.type){case"escape":{c+=l.text(v);break}case"html":{c+=l.html(v);break}case"link":{c+=l.link(v);break}case"image":{c+=l.image(v);break}case"strong":{c+=l.strong(v);break}case"em":{c+=l.em(v);break}case"codespan":{c+=l.codespan(v);break}case"br":{c+=l.br(v);break}case"del":{c+=l.del(v);break}case"text":{c+=l.text(v);break}default:{const x='Token with "'+v.type+'" type was not found.';if(this.options.silent)return console.error(x),"";throw new Error(x)}}}return c}},pu,Xa=(pu=class{constructor(s){Le(this,"options");Le(this,"block");this.options=s||Qr}preprocess(s){return s}postprocess(s){return s}processAllTokens(s){return s}provideLexer(){return this.block?Ht.lex:Ht.lexInline}provideParser(){return this.block?$t.parse:$t.parseInline}},Le(pu,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),pu),Dy=class{constructor(...s){Le(this,"defaults",Iu());Le(this,"options",this.setOptions);Le(this,"parse",this.parseMarkdown(!0));Le(this,"parseInline",this.parseMarkdown(!1));Le(this,"Parser",$t);Le(this,"Renderer",oo);Le(this,"TextRenderer",Wu);Le(this,"Lexer",Ht);Le(this,"Tokenizer",ao);Le(this,"Hooks",Xa);this.use(...s)}walkTokens(s,i){var c,d;let l=[];for(const p of s)switch(l=l.concat(i.call(this,p)),p.type){case"table":{const g=p;for(const f of g.header)l=l.concat(this.walkTokens(f.tokens,i));for(const f of g.rows)for(const v of f)l=l.concat(this.walkTokens(v.tokens,i));break}case"list":{const g=p;l=l.concat(this.walkTokens(g.items,i));break}default:{const g=p;(d=(c=this.defaults.extensions)==null?void 0:c.childTokens)!=null&&d[g.type]?this.defaults.extensions.childTokens[g.type].forEach(f=>{const v=g[f].flat(1/0);l=l.concat(this.walkTokens(v,i))}):g.tokens&&(l=l.concat(this.walkTokens(g.tokens,i)))}}return l}use(...s){const i=this.defaults.extensions||{renderers:{},childTokens:{}};return s.forEach(l=>{const c={...l};if(c.async=this.defaults.async||c.async||!1,l.extensions&&(l.extensions.forEach(d=>{if(!d.name)throw new Error("extension name required");if("renderer"in d){const p=i.renderers[d.name];p?i.renderers[d.name]=function(...g){let f=d.renderer.apply(this,g);return f===!1&&(f=p.apply(this,g)),f}:i.renderers[d.name]=d.renderer}if("tokenizer"in d){if(!d.level||d.level!=="block"&&d.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const p=i[d.level];p?p.unshift(d.tokenizer):i[d.level]=[d.tokenizer],d.start&&(d.level==="block"?i.startBlock?i.startBlock.push(d.start):i.startBlock=[d.start]:d.level==="inline"&&(i.startInline?i.startInline.push(d.start):i.startInline=[d.start]))}"childTokens"in d&&d.childTokens&&(i.childTokens[d.name]=d.childTokens)}),c.extensions=i),l.renderer){const d=this.defaults.renderer||new oo(this.defaults);for(const p in l.renderer){if(!(p in d))throw new Error(`renderer '${p}' does not exist`);if(["options","parser"].includes(p))continue;const g=p,f=l.renderer[g],v=d[g];d[g]=(...x)=>{let w=f.apply(d,x);return w===!1&&(w=v.apply(d,x)),w||""}}c.renderer=d}if(l.tokenizer){const d=this.defaults.tokenizer||new ao(this.defaults);for(const p in l.tokenizer){if(!(p in d))throw new Error(`tokenizer '${p}' does not exist`);if(["options","rules","lexer"].includes(p))continue;const g=p,f=l.tokenizer[g],v=d[g];d[g]=(...x)=>{let w=f.apply(d,x);return w===!1&&(w=v.apply(d,x)),w}}c.tokenizer=d}if(l.hooks){const d=this.defaults.hooks||new Xa;for(const p in l.hooks){if(!(p in d))throw new Error(`hook '${p}' does not exist`);if(["options","block"].includes(p))continue;const g=p,f=l.hooks[g],v=d[g];Xa.passThroughHooks.has(p)?d[g]=x=>{if(this.defaults.async)return Promise.resolve(f.call(d,x)).then(k=>v.call(d,k));const w=f.call(d,x);return v.call(d,w)}:d[g]=(...x)=>{let w=f.apply(d,x);return w===!1&&(w=v.apply(d,x)),w}}c.hooks=d}if(l.walkTokens){const d=this.defaults.walkTokens,p=l.walkTokens;c.walkTokens=function(g){let f=[];return f.push(p.call(this,g)),d&&(f=f.concat(d.call(this,g))),f}}this.defaults={...this.defaults,...c}}),this}setOptions(s){return this.defaults={...this.defaults,...s},this}lexer(s,i){return Ht.lex(s,i??this.defaults)}parser(s,i){return $t.parse(s,i??this.defaults)}parseMarkdown(s){return(l,c)=>{const d={...c},p={...this.defaults,...d},g=this.onError(!!p.silent,!!p.async);if(this.defaults.async===!0&&d.async===!1)return g(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof l>"u"||l===null)return g(new Error("marked(): input parameter is undefined or null"));if(typeof l!="string")return g(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(l)+", string expected"));p.hooks&&(p.hooks.options=p,p.hooks.block=s);const f=p.hooks?p.hooks.provideLexer():s?Ht.lex:Ht.lexInline,v=p.hooks?p.hooks.provideParser():s?$t.parse:$t.parseInline;if(p.async)return Promise.resolve(p.hooks?p.hooks.preprocess(l):l).then(x=>f(x,p)).then(x=>p.hooks?p.hooks.processAllTokens(x):x).then(x=>p.walkTokens?Promise.all(this.walkTokens(x,p.walkTokens)).then(()=>x):x).then(x=>v(x,p)).then(x=>p.hooks?p.hooks.postprocess(x):x).catch(g);try{p.hooks&&(l=p.hooks.preprocess(l));let x=f(l,p);p.hooks&&(x=p.hooks.processAllTokens(x)),p.walkTokens&&this.walkTokens(x,p.walkTokens);let w=v(x,p);return p.hooks&&(w=p.hooks.postprocess(w)),w}catch(x){return g(x)}}}onError(s,i){return l=>{if(l.message+=`
Please report this to https://github.com/markedjs/marked.`,s){const c="<p>An error occurred:</p><pre>"+bt(l.message+"",!0)+"</pre>";return i?Promise.resolve(c):c}if(i)return Promise.reject(l);throw l}}},Gr=new Dy;function Pe(s,i){return Gr.parse(s,i)}Pe.options=Pe.setOptions=function(s){return Gr.setOptions(s),Pe.defaults=Gr.defaults,Qp(Pe.defaults),Pe};Pe.getDefaults=Iu;Pe.defaults=Qr;Pe.use=function(...s){return Gr.use(...s),Pe.defaults=Gr.defaults,Qp(Pe.defaults),Pe};Pe.walkTokens=function(s,i){return Gr.walkTokens(s,i)};Pe.parseInline=Gr.parseInline;Pe.Parser=$t;Pe.parser=$t.parse;Pe.Renderer=oo;Pe.TextRenderer=Wu;Pe.Lexer=Ht;Pe.lexer=Ht.lex;Pe.Tokenizer=ao;Pe.Hooks=Xa;Pe.parse=Pe;Pe.options;Pe.setOptions;Pe.use;Pe.walkTokens;Pe.parseInline;$t.parse;Ht.lex;/*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE */function yp(s,i){(i==null||i>s.length)&&(i=s.length);for(var l=0,c=Array(i);l<i;l++)c[l]=s[l];return c}function zy(s){if(Array.isArray(s))return s}function My(s,i){var l=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(l!=null){var c,d,p,g,f=[],v=!0,x=!1;try{if(p=(l=l.call(s)).next,i!==0)for(;!(v=(c=p.call(l)).done)&&(f.push(c.value),f.length!==i);v=!0);}catch(w){x=!0,d=w}finally{try{if(!v&&l.return!=null&&(g=l.return(),Object(g)!==g))return}finally{if(x)throw d}}return f}}function Fy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function Uy(s,i){return zy(s)||My(s,i)||Wy(s,i)||Fy()}function Wy(s,i){if(s){if(typeof s=="string")return yp(s,i);var l={}.toString.call(s).slice(8,-1);return l==="Object"&&s.constructor&&(l=s.constructor.name),l==="Map"||l==="Set"?Array.from(s):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?yp(s,i):void 0}}const oh=Object.entries,vp=Object.setPrototypeOf,By=Object.isFrozen,lh=Object.getPrototypeOf,uh=Object.getOwnPropertyDescriptor;let ln=Object.freeze,pn=Object.seal,Ds=Object.create,ch=typeof Reflect<"u"&&Reflect,xu=ch.apply,wu=ch.construct;ln||(ln=function(i){return i});pn||(pn=function(i){return i});xu||(xu=function(i,l){for(var c=arguments.length,d=new Array(c>2?c-2:0),p=2;p<c;p++)d[p-2]=arguments[p];return i.apply(l,d)});wu||(wu=function(i){for(var l=arguments.length,c=new Array(l>1?l-1:0),d=1;d<l;d++)c[d-1]=arguments[d];return new i(...c)});const Wt=He(Array.prototype.forEach),Hy=He(Array.prototype.lastIndexOf),xp=He(Array.prototype.pop),Ri=He(Array.prototype.push),$y=He(Array.prototype.slice),qy=He(Array.prototype.splice),Ms=Array.isArray,tu=dh(Set),ru=He(Set.prototype.add),Ai=He(Set.prototype.has),qr=He(String.prototype.toLowerCase),su=He(String.prototype.toString),wp=He(String.prototype.match),Ii=He(String.prototype.replace),kp=He(String.prototype.indexOf),Vy=He(String.prototype.trim),Yy=He(Number.prototype.toString),Gy=He(Boolean.prototype.toString),bp=typeof BigInt>"u"?null:He(BigInt.prototype.toString),_p=typeof Symbol>"u"?null:He(Symbol.prototype.toString),Ln=He(Object.prototype.hasOwnProperty),Li=He(Object.prototype.toString),dn=He(RegExp.prototype.test),Bt=dh(TypeError);function He(s){return function(i){i instanceof RegExp&&(i.lastIndex=0);for(var l=arguments.length,c=new Array(l>1?l-1:0),d=1;d<l;d++)c[d-1]=arguments[d];return xu(s,i,c)}}function dh(s){return function(){for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return wu(s,l)}}function ke(s,i){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:qr;if(vp&&vp(s,null),!Ms(i))return s;let c=i.length;for(;c--;){let d=i[c];if(typeof d=="string"){const p=l(d);p!==d&&(By(i)||(i[c]=p),d=p)}s[d]=!0}return s}function Ky(s){for(let i=0;i<s.length;i++)Ln(s,i)||(s[i]=null);return s}function Un(s){const i=Ds(null);for(const c of oh(s)){var l=Uy(c,2);const d=l[0],p=l[1];Ln(s,d)&&(Ms(p)?i[d]=Ky(p):p&&typeof p=="object"&&p.constructor===Object?i[d]=Un(p):i[d]=p)}return i}function Qy(s){switch(typeof s){case"string":return s;case"number":return Yy(s);case"boolean":return Gy(s);case"bigint":return bp?bp(s):"0";case"symbol":return _p?_p(s):"Symbol()";case"undefined":return Li(s);case"function":case"object":{if(s===null)return Li(s);const i=s,l=Xn(i,"toString");if(typeof l=="function"){const c=l(i);return typeof c=="string"?c:Li(c)}return Li(s)}default:return Li(s)}}function Xn(s,i){for(;s!==null;){const c=uh(s,i);if(c){if(c.get)return He(c.get);if(typeof c.value=="function")return He(c.value)}s=lh(s)}function l(){return null}return l}function Jy(s,i){for(;s!==null;){const l=uh(s,i);if(l)return l.get?He(l.get):null;s=lh(s)}return null}function Xy(s){try{return dn(s,""),!0}catch{return!1}}const Sp=ln(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),iu=ln(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),au=ln(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Zy=ln(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ou=ln(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ev=ln(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Cp=ln(["#text"]),jp=ln(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),lu=ln(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Tp=ln(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ja=ln(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),nv=pn(/{{[\w\W]*|^[\w\W]*}}/g),tv=pn(/<%[\w\W]*|^[\w\W]*%>/g),rv=pn(/\${[\w\W]*/g),sv=pn(/^data-[\-\w.\u00B7-\uFFFF]+$/),iv=pn(/^aria-[\-\w]+$/),Ep=pn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),av=pn(/^(?:\w+script|data):/i),ov=pn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),lv=pn(/^html$/i),uv=pn(/^[a-z][.\w]*(-[.\w]+)+$/i),uu=pn(/<[/\w!]/g),Np=pn(/<[/\w]/g),cv=pn(/<\/no(script|embed|frames)/i),Pp=pn(/\/>/i),Ze={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},dv=ln(ke({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),pv=function(){return typeof window>"u"?null:window},hv=function(i,l){if(typeof i!="object"||typeof i.createPolicy!="function")return null;let c=null;const d="data-tt-policy-suffix";l&&l.hasAttribute(d)&&(c=l.getAttribute(d));const p="dompurify"+(c?"#"+c:"");try{return i.createPolicy(p,{createHTML(g){return g},createScriptURL(g){return g}})}catch{return console.warn("TrustedTypes policy "+p+" could not be created."),null}},Rp=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},vr=function(i,l,c,d){return Ln(i,l)&&Ms(i[l])?ke(d.base?Un(d.base):{},i[l],d.transform):c},cu=function(i,l,c){const d=Ln(i,l)?i[l]:void 0;return d&&typeof d=="object"?Un(d):c()};function ph(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:pv();const i=L=>ph(L);if(i.version="3.4.17",i.removed=[],!s||!s.document||s.document.nodeType!==Ze.document||!s.Element)return i.isSupported=!1,i;let l=s.document;const c=l,d=c.currentScript;s.DocumentFragment;const p=s.HTMLTemplateElement,g=s.Node,f=s.Element,v=s.NodeFilter;s.NamedNodeMap===void 0&&(s.NamedNodeMap||s.MozNamedAttrMap),s.HTMLFormElement;const x=s.DOMParser,w=s.trustedTypes,k=f.prototype,j=Xn(k,"cloneNode"),F=Xn(k,"remove"),H=Xn(k,"removeAttributeNode"),P=Xn(k,"nextSibling"),z=Xn(k,"childNodes"),q=Xn(k,"parentNode"),ue=Xn(k,"shadowRoot"),pe=Xn(k,"attributes"),ae=g&&g.prototype?Xn(g.prototype,"nodeType"):null,ce=g&&g.prototype?Xn(g.prototype,"nodeName"):null,ye=g&&g.prototype?Xn(g.prototype,"ownerDocument"):null,X=function(m){return ae?ae(m):m.nodeType},oe=function(m){return ce?ce(m):m.nodeName},$e=Jy(k,"namespaceURI"),Se=function(m){return $e?$e(m):m.namespaceURI};if(typeof p=="function"){const L=l.createElement("template");L.content&&L.content.ownerDocument&&(l=L.content.ownerDocument)}let W,Ee="",Z,xe=!1,Ce=0;const en=function(){if(Ce>0)throw Bt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},je=function(m){en(),Ce++;try{return W.createHTML(m)}finally{Ce--}},I=function(m){en(),Ce++;try{return W.createScriptURL(m)}finally{Ce--}},ee=function(){return xe||(Z=hv(w,d),xe=!0),Z},$=l,C=$.implementation,O=$.createNodeIterator,he=$.createDocumentFragment,fe=$.getElementsByTagName,ve=c.importNode;let te=Rp();i.isSupported=typeof oh=="function"&&typeof q=="function"&&C&&C.createHTMLDocument!==void 0;const Re=nv,Te=tv,Oe=rv,vn=sv,Jr=iv,Bi=av,xr=ov,Us=uv;let Ws=Ep,Ae=null;const wr=ke({},[...Sp,...iu,...au,...ou,...Cp]);let Ie=null;const kr=ke({},[...jp,...lu,...Tp,...Ja]);let hn=Object.seal(Ds(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Bn=null,Xr=null;const Zn=Object.seal(Ds(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Bs=!0,Zr=!0,Hs=!1,br=!0,_n=!1,ct=!0,On=!1,jt=!1,es=null,_r=null,ns=!1,Gt=!1,Kt=!1,Qt=!1,ts=!0,rs=!1;const ss="user-content-";let dt=!0,pt=!1,ht=null,Tt={},mt=null;const $s=ke({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let qs=null;const is=ke({},["audio","video","img","source","image","track"]);let Vs=null;const Jt=ke({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Xt="http://www.w3.org/1998/Math/MathML",ft="http://www.w3.org/2000/svg",Hn="http://www.w3.org/1999/xhtml";let $n=Hn,Zt=!1,er=null;const Ys=ke({},[Xt,ft,Hn],su),Hi=ln(["mi","mo","mn","ms","mtext"]);let Gs=ke({},Hi);const $i=ln(["annotation-xml"]);let et=ke({},$i);const qi=ke({},["title","style","font","a","script"]);let nr=null;const xo=["application/xhtml+xml","text/html"],Vi="text/html";let Fe=null,Et=null;const Yi=l.createElement("form"),Gi=function(m){return m instanceof RegExp||m instanceof Function},Ks=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Et&&Et===m)return;(!m||typeof m!="object")&&(m={}),m=Un(m),nr=xo.indexOf(m.PARSER_MEDIA_TYPE)===-1?Vi:m.PARSER_MEDIA_TYPE,Fe=nr==="application/xhtml+xml"?su:qr,Ae=vr(m,"ALLOWED_TAGS",wr,{transform:Fe}),Ie=vr(m,"ALLOWED_ATTR",kr,{transform:Fe}),er=vr(m,"ALLOWED_NAMESPACES",Ys,{transform:su}),Vs=vr(m,"ADD_URI_SAFE_ATTR",Jt,{transform:Fe,base:Jt}),qs=vr(m,"ADD_DATA_URI_TAGS",is,{transform:Fe,base:is}),mt=vr(m,"FORBID_CONTENTS",$s,{transform:Fe}),Bn=vr(m,"FORBID_TAGS",Un({}),{transform:Fe}),Xr=vr(m,"FORBID_ATTR",Un({}),{transform:Fe}),Tt=Ln(m,"USE_PROFILES")?m.USE_PROFILES&&typeof m.USE_PROFILES=="object"?Un(m.USE_PROFILES):m.USE_PROFILES:!1,Bs=m.ALLOW_ARIA_ATTR!==!1,Zr=m.ALLOW_DATA_ATTR!==!1,Hs=m.ALLOW_UNKNOWN_PROTOCOLS||!1,br=m.ALLOW_SELF_CLOSE_IN_ATTR!==!1,_n=m.SAFE_FOR_TEMPLATES||!1,ct=m.SAFE_FOR_XML!==!1,On=m.WHOLE_DOCUMENT||!1,Gt=m.RETURN_DOM||!1,Kt=m.RETURN_DOM_FRAGMENT||!1,Qt=m.RETURN_TRUSTED_TYPE||!1,ns=m.FORCE_BODY||!1,ts=m.SANITIZE_DOM!==!1,rs=m.SANITIZE_NAMED_PROPS||!1,dt=m.KEEP_CONTENT!==!1,pt=m.IN_PLACE||!1,Ws=Xy(m.ALLOWED_URI_REGEXP)?m.ALLOWED_URI_REGEXP:Ep,$n=typeof m.NAMESPACE=="string"?m.NAMESPACE:Hn,Gs=cu(m,"MATHML_TEXT_INTEGRATION_POINTS",()=>ke({},Hi)),et=cu(m,"HTML_INTEGRATION_POINTS",()=>ke({},$i));const _=cu(m,"CUSTOM_ELEMENT_HANDLING",()=>Ds(null));if(hn=Ds(null),Ln(_,"tagNameCheck")&&Gi(_.tagNameCheck)&&(hn.tagNameCheck=_.tagNameCheck),Ln(_,"attributeNameCheck")&&Gi(_.attributeNameCheck)&&(hn.attributeNameCheck=_.attributeNameCheck),Ln(_,"allowCustomizedBuiltInElements")&&typeof _.allowCustomizedBuiltInElements=="boolean"&&(hn.allowCustomizedBuiltInElements=_.allowCustomizedBuiltInElements),pn(hn),_n&&(Zr=!1),Kt&&(Gt=!0),Tt&&(Ae=ke({},Cp),Ie=Ds(null),Tt.html===!0&&(ke(Ae,Sp),ke(Ie,jp)),Tt.svg===!0&&(ke(Ae,iu),ke(Ie,lu),ke(Ie,Ja)),Tt.svgFilters===!0&&(ke(Ae,au),ke(Ie,lu),ke(Ie,Ja)),Tt.mathMl===!0&&(ke(Ae,ou),ke(Ie,Tp),ke(Ie,Ja))),Zn.tagCheck=null,Zn.attributeCheck=null,Ln(m,"ADD_TAGS")&&(typeof m.ADD_TAGS=="function"?Zn.tagCheck=m.ADD_TAGS:Ms(m.ADD_TAGS)&&(Ae===wr&&(Ae=Un(Ae)),ke(Ae,m.ADD_TAGS,Fe))),Ln(m,"ADD_ATTR")&&(typeof m.ADD_ATTR=="function"?Zn.attributeCheck=m.ADD_ATTR:Ms(m.ADD_ATTR)&&(Ie===kr&&(Ie=Un(Ie)),ke(Ie,m.ADD_ATTR,Fe))),Ln(m,"ADD_FORBID_CONTENTS")&&Ms(m.ADD_FORBID_CONTENTS)&&(mt===$s&&(mt=Un(mt)),ke(mt,m.ADD_FORBID_CONTENTS,Fe)),dt&&(Ae["#text"]=!0),On&&ke(Ae,["html","head","body"]),Ae.table&&(ke(Ae,["tbody"]),delete Bn.tbody),m.TRUSTED_TYPES_POLICY){if(typeof m.TRUSTED_TYPES_POLICY.createHTML!="function")throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof m.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const R=W;W=m.TRUSTED_TYPES_POLICY;try{Ee=je("")}catch(A){throw W=R,A}}else m.TRUSTED_TYPES_POLICY===null?(W=void 0,Ee=""):(W===void 0&&(W=ee()),W&&typeof Ee=="string"&&(Ee=je("")));ln&&ln(m),Et=m},Ue=ke({},[...iu,...au,...Zy]),Ki=ke({},[...ou,...ev]),Qs=function(m,_,R){return _.namespaceURI===Hn?m==="svg":_.namespaceURI===Xt?m==="svg"&&(R==="annotation-xml"||Gs[R]):!!Ue[m]},Qi=function(m,_,R){return _.namespaceURI===Hn?m==="math":_.namespaceURI===ft?m==="math"&&et[R]:!!Ki[m]},as=function(m,_,R){return _.namespaceURI===ft&&!et[R]||_.namespaceURI===Xt&&!Gs[R]?!1:!Ki[m]&&(qi[m]||!Ue[m])},wo=function(m){const _=Se(m),R=qr(oe(m)),A=q(m);let Q,re;return A&&X(A)===Ze.element?(Q={namespaceURI:Se(A)},re=qr(oe(A))):(Q={namespaceURI:$n},re="template"),er[_]?_===ft?Qs(R,Q,re):_===Xt?Qi(R,Q,re):_===Hn?as(R,Q,re):!!(nr==="application/xhtml+xml"&&er[_]):!1},nt=function(m){Ri(i.removed,{element:m});try{q(m).removeChild(m)}catch{if(F(m),!q(m))throw Bt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Sr=function(m,_,R){try{H(m,_)}catch{try{m.removeAttribute(R)}catch{}}},Sn=function(m){Xs(m);const _=z(m);_&&Wt($y(_),A=>{try{F(A)}catch{}});const R=X(m)===Ze.element?pe(m):null;if(R)for(let A=R.length-1;A>=0;--A){const Q=R[A],re=Q&&Q.name;typeof re=="string"&&Sr(m,Q,re)}},tr=function(m,_,R){if(!R)try{R=_.getAttributeNode(m)}catch{R=null}Ri(i.removed,{attribute:R||null,from:_});try{R?H(_,R):_.removeAttribute(m)}catch{try{_.removeAttribute(m)}catch{}}if(m==="is")if(Gt||Kt)try{nt(_)}catch{}else try{_.setAttribute(m,"")}catch{}},Cn=function(m){const _=pe(m);if(_)for(let R=_.length-1;R>=0;--R){const A=_[R],Q=A&&A.name;typeof Q!="string"||Ie[Fe(Q)]||Sr(m,A,Q)}},Js=function(m,_){let R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const A=[m];for(;A.length>0;){const Q=A.pop();if(_(Q)===!1)continue;if(R&&X(Q)===Ze.element){const me=ue(Q);tt(me)&&A.push(me)}const re=z(Q);if(re)for(let me=re.length-1;me>=0;--me)A.push(re[me])}},Xs=function(m){Js(m,_=>{X(_)===Ze.element&&Cn(_)})},Zs=function(m){const _=[];return Js(m,R=>{_.push(R)},!0),_},os=function(m,_){const R=tu();Wt(Zs(m),A=>{X(A)===Ze.element&&ru(R,A)}),Wt(_,A=>{X(A)===Ze.element&&!Ai(R,A)&&Cn(A)})},Cr=function(m,_){let R=!1;return Wt(i.removed,A=>{A.element&&(R=R||A.element===m,Xs(A.element))}),os(m,_),R},jr=8,ls=function(m,_){const R=ht;let A=null;const Q=()=>(A||(A=tu(),Wt(_,re=>{ru(A,re)})),A);for(let re=0;;re++){const me=Zs(m),Ke=[m];let Tn=!1;if(Wt(me,Je=>{X(Je)===Ze.documentFragment?Ri(Ke,Je):!Tn&&!Ai(R,Je)&&(Tn=Ai(Q(),Je))}),!Tn)return;if(re>=jr)throw Bt("the tree kept changing during in-place sanitization; refusing to return it");Wt(Ke,(Je,rn)=>{ko(Je,rn>0,m,Q())})}},ko=function(m,_,R,A){const Q=Nt(m);let re;for(;re=Q.nextNode();)!Ai(A,re)||Ai(ht,re)||(_&&jn(te.uponSanitizeShadowNode,re,null),qn(re,R),Rt(re,R),tt(re.content)&&Ar(re.content))},bo=function(m){ht&&ru(ht,m)},us=function(m,_){return ct?m==="patchsrc"?!0:m==="for"&&_!=="label"&&_!=="output":!1},Ji=function(m){ct&&Js(m,_=>{const R=X(_);if(R===Ze.processingInstruction||R===Ze.comment&&dn(Np,_.data)){try{F(_)}catch{}return!1}if(R===Ze.element){const A=_,Q=Fe(oe(_));try{A.hasAttribute&&A.hasAttribute("patchsrc")&&A.removeAttribute("patchsrc"),A.hasAttribute&&A.hasAttribute("for")&&us("for",Q)&&A.removeAttribute("for")}catch{}}return!0})},cs=function(m){let _=null,R=null;if(ns)m="<remove></remove>"+m;else{const re=wp(m,/^[\r\n\t ]+/);R=re&&re[0]}nr==="application/xhtml+xml"&&$n===Hn&&(m='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+m+"</body></html>");const A=W?je(m):m;if($n===Hn)try{_=new x().parseFromString(A,nr)}catch{}if(!_||!_.documentElement){_=C.createDocument($n,"template",null);try{_.documentElement.innerHTML=Zt?Ee:A}catch{}}const Q=_.body||_.documentElement;return m&&R&&Q.insertBefore(l.createTextNode(R),Q.childNodes[0]||null),$n===Hn?fe.call(_,On?"html":"body")[0]:On?_.documentElement:Q},Nt=function(m){const _=ye?ye(m):m.ownerDocument;return O.call(_||m,m,v.SHOW_ELEMENT|v.SHOW_COMMENT|v.SHOW_TEXT|v.SHOW_PROCESSING_INSTRUCTION|v.SHOW_CDATA_SECTION,null)},ds=function(m){return m=Ii(m,Re," "),m=Ii(m,Te," "),m=Ii(m,Oe," "),m},Tr=function(m){var _;be(m);const R=(_=m.querySelectorAll)===null||_===void 0?void 0:_.call(m,"template");R&&Wt(R,A=>{tt(A.content)&&Tr(A.content)})},be=function(m){m.normalize();const _=ye?ye(m):m.ownerDocument,R=O.call(_||m,m,v.SHOW_TEXT|v.SHOW_COMMENT|v.SHOW_CDATA_SECTION|v.SHOW_PROCESSING_INSTRUCTION,null);let A=R.nextNode();for(;A;)A.data=ds(A.data),A=R.nextNode()},Er=function(m){const _=ce?ce(m):null;return typeof _!="string"||Fe(_)!=="form"?!1:typeof m.nodeName!="string"||typeof m.textContent!="string"||typeof m.removeChild!="function"||m.attributes!==pe(m)||typeof m.removeAttribute!="function"||typeof m.removeAttributeNode!="function"||typeof m.getAttributeNode!="function"||typeof m.setAttribute!="function"||typeof m.namespaceURI!="string"||typeof m.insertBefore!="function"||typeof m.hasChildNodes!="function"||m.nodeType!==ae(m)||m.childNodes!==z(m)},tt=function(m){if(!ae||typeof m!="object"||m===null)return!1;try{return ae(m)===Ze.documentFragment}catch{return!1}},Pt=function(m){if(!ae||typeof m!="object"||m===null)return!1;try{return typeof ae(m)=="number"}catch{return!1}};function jn(L,m,_){L.length!==0&&Wt(L,R=>{R.call(i,m,_,Et)})}const Xi=function(m,_){return!!(ct&&m.hasChildNodes()&&!Pt(m.firstElementChild)&&dn(uu,m.textContent)&&dn(uu,m.innerHTML)||ct&&dv[_]&&X(m)===Ze.element&&Se(m)===Hn&&(Pt(m.firstElementChild)||typeof m.textContent=="string"&&dn(uu,m.textContent))||m.nodeType===Ze.processingInstruction||ct&&m.nodeType===Ze.comment&&dn(Np,m.data))},Nr=function(m,_){if(m instanceof RegExp)return dn(m,_);if(m instanceof Function){for(var R=arguments.length,A=new Array(R>2?R-2:0),Q=2;Q<R;Q++)A[Q-2]=arguments[Q];return!!m(_,...A)}return!1},ei=function(m,_,R){if(!Bn[_]&&rr(_)&&Nr(hn.tagNameCheck,_))return!1;if(dt&&!mt[_]&&!mt[qr(_)]){const A=q(m),Q=z(m);if(Q&&A){const re=Q.length;for(let me=re-1;me>=0;--me){const Ke=m===R?j(Q[me],!0):Q[me];A.insertBefore(Ke,P(m))}}}return nt(m),!0},Pr=function(m,_,R,A){return m.length===0?_:_===R||_===A?Un(_):_},xn=function(m,_){return m===_||q(m)!==null?!1:(pt&&Xs(m),!0)},qn=function(m,_){if(bo(m),jn(te.beforeSanitizeElements,m,null),xn(m,_))return!0;if(Er(m))return nt(m),!0;const R=Fe(oe(m));if(Ae=Pr(te.uponSanitizeElement,Ae,wr,es),jn(te.uponSanitizeElement,m,{tagName:R,allowedTags:Ae}),xn(m,_))return!0;if(Xi(m,R))return nt(m),!0;if(Bn[R]||!(Zn.tagCheck instanceof Function&&Zn.tagCheck(R))&&!Ae[R]){const A=ei(m,R,_);return A===!1&&(jn(te.afterSanitizeElements,m,null),xn(m,_))?!0:A}if(X(m)===Ze.element&&!wo(m)||(R==="noscript"||R==="noembed"||R==="noframes")&&dn(cv,m.innerHTML))return nt(m),!0;if(_n&&m.nodeType===Ze.text){const A=ds(m.textContent);m.textContent!==A&&(Ri(i.removed,{element:m.cloneNode()}),m.textContent=A)}return jn(te.afterSanitizeElements,m,null),xn(m,_)},rt=function(m,_,R){if(Xr[_]||us(_,m)||ts&&(_==="id"||_==="name")&&(R in l||R in Yi))return!1;const A=Ie[_]||Zn.attributeCheck instanceof Function&&Zn.attributeCheck(_,m);return Zr&&dn(vn,_)||Bs&&dn(Jr,_)?!0:A?Vs[_]||dn(Ws,Ii(R,xr,""))||(_==="src"||_==="xlink:href"||_==="href")&&m!=="script"&&kp(R,"data:")===0&&qs[m]||Hs&&!dn(Bi,Ii(R,xr,""))?!0:!R:rr(m)&&Nr(hn.tagNameCheck,m)&&Nr(hn.attributeNameCheck,_,m)||_==="is"&&hn.allowCustomizedBuiltInElements&&Nr(hn.tagNameCheck,R)},Rr=ke({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),rr=function(m){return!Rr[qr(m)]&&dn(Us,m)},gt=function(m,_,R,A){if(W&&typeof w=="object"&&typeof w.getAttributeType=="function"&&!R)switch(w.getAttributeType(m,_)){case"TrustedHTML":return je(A);case"TrustedScriptURL":return I(A)}return A},_o=function(m,_,R,A){try{return R?m.setAttributeNS(R,_,A):m.setAttribute(_,A),Er(m)?(nt(m),!1):!0}catch{return tr(_,m),!1}},ni=function(m,_){return ct&&dn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,_)?!0:qr(m)==="attributename"&&wp(_,"href")!==null},Rt=function(m,_){if(jn(te.beforeSanitizeAttributes,m,null),xn(m,_))return;const R=m.attributes;if(!R||Er(m))return;Ie=Pr(te.uponSanitizeAttribute,Ie,kr,_r);const A={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ie,forceKeepAttr:void 0};let Q=R.length;const re=Fe(m.nodeName);for(;Q--;){const me=R[Q],Ke=me.name,Tn=me.namespaceURI,Je=me.value,rn=Fe(Ke),At=Je;let qe=Ke==="value"?At:Vy(At),hs=!1;if(A.attrName=rn,A.attrValue=qe,A.keepAttr=!0,A.forceKeepAttr=void 0,jn(te.uponSanitizeAttribute,m,A),qe=A.attrValue,rs&&(rn==="id"||rn==="name")&&kp(qe,ss)!==0&&(tr(Ke,m,me),qe=ss+qe,hs=!0),ni(Ke,qe)){tr(Ke,m,me);continue}if(!A.forceKeepAttr){if(!A.keepAttr){tr(Ke,m,me);continue}if(!br&&dn(Pp,qe)){tr(Ke,m,me);continue}if(_n&&(qe=ds(qe)),!rt(re,rn,qe)){tr(Ke,m,me);continue}qe=gt(re,rn,Tn,qe),qe!==At&&_o(m,Ke,Tn,qe)&&hs&&xp(i.removed)}}jn(te.afterSanitizeAttributes,m,null),xn(m,_)},Ar=function(m){let _=null;const R=Nt(m);for(jn(te.beforeSanitizeShadowDOM,m,null);_=R.nextNode();)if(jn(te.uponSanitizeShadowNode,_,null),qn(_,m),Rt(_,m),tt(_.content)&&Ar(_.content),X(_)===Ze.element){const A=ue(_);tt(A)&&(ps(A),Ar(A))}_n&&be(m),jn(te.afterSanitizeShadowDOM,m,null)},ps=function(m){const _=[{node:m,shadow:null}];for(;_.length>0;){const R=_.pop();if(R.shadow){Ar(R.shadow);continue}const A=R.node,Q=X(A)===Ze.element,re=z(A);if(re)for(let me=re.length-1;me>=0;--me)_.push({node:re[me],shadow:null});if(Q){const me=ce?ce(A):null;if(typeof me=="string"&&Fe(me)==="template"){const Ke=A.content;tt(Ke)&&_.push({node:Ke,shadow:null})}}if(Q){const me=ue(A);tt(me)&&_.push({node:null,shadow:me},{node:me,shadow:null})}}};return i.sanitize=function(L){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=null,R=null,A=null,Q=null;if(Zt=!L,Zt&&(L="<!-->"),typeof L!="string"&&!Pt(L)&&(L=Qy(L),typeof L!="string"))throw Bt("dirty is not a string, aborting");if(!i.isSupported)return L;jt?(Ae=es,Ie=_r):Ks(m),(te.uponSanitizeElement.length>0||te.uponSanitizeAttribute.length>0)&&(Ae=Un(Ae)),te.uponSanitizeAttribute.length>0&&(Ie=Un(Ie)),i.removed=[];const re=pt&&typeof L!="string"&&Pt(L);let me=[];const Ke=ht;if(re){Ji(L);const rn=oe(L);if(typeof rn=="string"){const At=Fe(rn);if(!Ae[At]||Bn[At])throw Sn(L),Bt("root node is forbidden and cannot be sanitized in-place")}if(Er(L))throw Sn(L),Bt("root node is clobbered and cannot be sanitized in-place");me=Zs(L),ht=tu()}else if(Pt(L))_=cs("<!---->"),R=_.ownerDocument.importNode(L,!0),R.nodeType===Ze.element&&R.nodeName==="BODY"||R.nodeName==="HTML"?_=R:_.appendChild(R),ps(_);else{if(!Gt&&!_n&&!On&&L.indexOf("<")===-1)return W&&Qt?je(L):L;if(_=cs(L),!_)return Gt?null:Qt?Ee:""}_&&ns&&nt(_.firstChild);const Tn=re?L:_;try{re&&ps(L);const rn=Nt(Tn);for(;A=rn.nextNode();)qn(A,Tn),Rt(A,Tn),tt(A.content)&&Ar(A.content);re&&ls(L,me)}catch(rn){throw re&&(Sn(L),Cr(L,me)),rn}finally{ht=Ke}if(re){if(Cr(L,me))throw Bt("a node selected for removal could not be safely returned; refusing to sanitize in place");return _n&&Tr(L),L}if(Gt){if(_n&&Tr(_),Kt)for(Q=he.call(_.ownerDocument);_.firstChild;)Q.appendChild(_.firstChild);else Q=_;return(Ie.shadowroot||Ie.shadowrootmode)&&(Q=ve.call(c,Q,!0)),Q}let Je=On?_.outerHTML:_.innerHTML;return On&&Ae["!doctype"]&&_.ownerDocument&&_.ownerDocument.doctype&&_.ownerDocument.doctype.name&&dn(lv,_.ownerDocument.doctype.name)&&(Je="<!DOCTYPE "+_.ownerDocument.doctype.name+`>
`+Je),_n&&(Je=ds(Je)),W&&Qt?je(Je):Je},i.setConfig=function(){let L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ks(L),jt=!0,es=Ae,_r=Ie},i.clearConfig=function(){Et=null,jt=!1,es=null,_r=null,W=Z,Ee=""},i.isValidAttribute=function(L,m,_){Et||Ks({});const R=Fe(L),A=Fe(m);return typeof _=="string"&&(ni(m,_)||!br&&dn(Pp,_))?!1:rt(R,A,_)},i.addHook=function(L,m){typeof m=="function"&&Ln(te,L)&&Ri(te[L],m)},i.removeHook=function(L,m){if(Ln(te,L)){if(m!==void 0){const _=Hy(te[L],m);return _===-1?void 0:qy(te[L],_,1)[0]}return xp(te[L])}},i.removeHooks=function(L){Ln(te,L)&&(te[L]=[])},i.removeAllHooks=function(){te=Rp()},i}var mv=ph();function fv(s,i=null){const l=String(s||""),c=l.split(`
`),d=c.findIndex(v=>/^##\s+(?:Practice|Solve)(?:\s*[:—-].*)?\s*$/i.test(v)),p=d===-1?-1:c.findIndex((v,x)=>x>d&&/^##\s+(?:Reflect(?:ion)?|Learn|Stop and think|Optional reading)(?:\b|\s*[:—-])/i.test(v)),g=d>=0?c.slice(d,p<0?c.length:p).join(`
`):`# Solve

${(i==null?void 0:i.challenge)||"Try the lesson task before looking at the guide."}`,f=d>=0?[...c.slice(0,d),...p<0?[]:c.slice(p)].join(`
`).trim():l;return{solve:g,learn:f}}function gv(s){const i=String(s||"").split(`
`),l=[];let c=null;i.forEach((g,f)=>{const v=g.trim(),x=/^(`{3,}|~{3,})/.exec(v);if(x){const F=x[1];c?c.char===F[0]&&F.length>=c.length&&(c=null):c={char:F[0],length:F.length};return}if(c)return;const w=/^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(g);if(!w)return;const k=w[2],j=/\bStep\s+\d+(?=\s*(?:[:.·–—-]|$))/i.test(k);l.push({index:f,level:w[1].length,numbered:j})});const d=l.filter(g=>g.numbered),p=(d.length?d:l.filter(g=>g.level===2)).map(g=>g.index);return p.length?{intro:i.slice(0,p[0]).join(`
`).trim(),steps:p.map((g,f)=>i.slice(g,p[f+1]??i.length).join(`
`).trim())}:{intro:i.join(`
`),steps:[]}}const yv=Object.assign({"../content/capstone-discovery.md":Eg,"../content/capstone-feedback.md":Ng,"../content/capstone-interviews.md":Pg,"../content/capstone-prototype.md":Rg,"../content/csharp-conditionals.md":Ag,"../content/csharp-variables.md":Ig,"../content/python-decisions.md":Lg,"../content/python-formatting.md":Og,"../content/python-lists.md":Dg,"../content/python-loops.md":zg,"../content/python-strings.md":Mg,"../content/python-variables.md":Fg,"../content/react-components.md":Ug,"../content/react-state.md":Wg,"../content/tsi-equations.md":Bg,"../content/tsi-percents.md":Hg,"../content/tsi-ratios.md":$g,"../content/tsi-slope.md":qg,"../content/uil-arrays.md":Vg,"../content/uil-loops.md":Yg,"../content/uil-methods.md":Gg,"../content/uil-strings.md":Kg,"../content/unity-colliders.md":Qg,"../content/unity-player-controller.md":Jg,"../content/unity-score.md":Xg,"../content/web-events.md":Zg,"../content/web-layout.md":ey}),vv="# Add a Markdown lesson\n\nSave a new `.md` file inside `src/content/`.\n",xv=s=>yv[`../content/${s}.md`]||vv,hh=s=>mv.sanitize(Pe.parse(s,{breaks:!1,gfm:!0}));function wv(s,i=""){if(!(s!=null&&s.isPublished))return"";let l="";const c=Array.isArray(s.cases)?s.cases:[];c.length&&!/##\s+(?:Published )?Examples\b/i.test(i)&&(l+=`

### Published examples
`,c.forEach((p,g)=>{l+=`
**Example `+(g+1)+`**

`,p.call&&(l+="Input: `"+p.call+`\`

`),l+=s.mode==="function"?`Expected return:
`:`Expected output:
`,l+="\n```text\n"+String(p.expected??"")+"\n```\n"}));const d=Array.isArray(s.hints)?s.hints:[];return d.length&&!/<details(?:\s|>)/i.test(i)&&(l+=`

### Need a hint?
`,d.forEach((p,g)=>{l+=`
<details>
<summary>Hint `+(g+1)+`</summary>

`+String(p).replaceAll("<","&lt;")+`

</details>
`})),l}function Ap(s,i){if(!i)return s;const l="https://github.com/mswhitby/computer-science-1/blob/main/units/",c=new URL(i,l);return String(s).replace(/\]\(([^)]+)\)/g,(d,p)=>{if(/^(?:https?:|mailto:|#|data:)/i.test(p))return d;const[g,...f]=p.split(" ");try{const v=new URL(g,c);return v.origin!==c.origin?d:"]("+v.href+(f.length?" "+f.join(" "):"")+")"}catch{return d}})}const mh={markdown:s=>`designlab:md:${s}`,code:s=>`designlab:code:${s}`};function lo(s){try{return localStorage.getItem(s)}catch{return null}}function uo(s,i){try{localStorage.setItem(s,i)}catch{}}function kv(s){try{localStorage.removeItem(s)}catch{}}function Ip({lessonId:s,task:i,isTsi:l=!1,tsiAnswer:c=null}){var ae;const d=(i==null?void 0:i.markdownSource)||xv(s),p=mh.markdown(s),[g,f]=G.useState(d),[v,x]=G.useState(l?"learn":"solve"),[w,k]=G.useState(0),[j,F]=G.useState(!1);G.useEffect(()=>{f(lo(p)??d),x(l?"learn":"solve"),k(0),F(!1)},[p,d,l]);const H=G.useMemo(()=>{const ce=fv(g,i),ye=ce.solve+wv(i,ce.solve);return{solve:Ap(ye,i==null?void 0:i.markdown),learn:Ap(ce.learn,i==null?void 0:i.markdown)}},[g,i]),P=G.useMemo(()=>gv(H.learn),[H.learn]),z=!l&&v==="learn"&&P.steps.length>0,q=Math.min(w,Math.max(0,P.steps.length-1)),ue=l?H.learn:v==="solve"?H.solve:z?P.intro+`

`+P.steps[q]:H.learn,pe=G.useMemo(()=>hh(ue),[ue]);return a.jsxs("section",{className:"instructions-pane",children:[a.jsxs("div",{className:"pane-header",children:[l?a.jsx("strong",{className:"tsi-learn-title",children:"Learn"}):a.jsxs("div",{className:"tabs compact",role:"tablist","aria-label":"Lesson views",children:[a.jsx("button",{role:"tab","aria-selected":v==="solve",className:v==="solve"?"active":"",onClick:()=>{x("solve"),k(0)},children:"Solve"}),a.jsx("button",{role:"tab","aria-selected":v==="learn",className:v==="learn"?"active":"",onClick:()=>{x("learn"),k(0)},children:"Learn"})]}),a.jsx("button",{type:"button",className:_t("icon-button",j&&"active"),title:"Edit lesson text","aria-label":"Edit lesson text",onClick:()=>F(!j),children:a.jsx(eg,{size:16})})]}),j?a.jsxs("div",{className:"markdown-source",children:[a.jsx("p",{className:"hint",children:"Try editing these instructions. Changes here are just for your preview."}),a.jsx("textarea",{"aria-label":"Markdown source",value:g,onChange:ce=>{f(ce.target.value),k(0),uo(p,ce.target.value)}}),a.jsx("button",{type:"button",className:"btn",onClick:()=>{kv(p),f(d),k(0)},children:"Reset lesson text"})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"markdown-preview",role:"tabpanel",children:[a.jsx("div",{dangerouslySetInnerHTML:{__html:pe}}),l&&c&&a.jsxs("section",{className:"tsi-worked-solution",role:"status",children:[a.jsx("h3",{children:c.correct?"Why that works":"Review the solution"}),a.jsx("p",{children:(ae=Kp[s])==null?void 0:ae.explanation})]})]}),z&&a.jsxs("nav",{className:"lesson-step-controls","aria-label":"Learning steps",children:[a.jsxs("button",{type:"button",className:"btn primary",disabled:q===0,onClick:()=>k(ce=>Math.max(0,ce-1)),children:[a.jsx(Jf,{size:16})," Previous step"]}),a.jsxs("span",{children:["Step ",q+1," of ",P.steps.length]}),a.jsxs("button",{type:"button",className:"btn primary",disabled:q===P.steps.length-1,onClick:()=>k(ce=>Math.min(P.steps.length-1,ce+1)),children:["Next step ",a.jsx(Yr,{size:16})]})]})]})]})}const Lp={"react-components":{title:"Score Card",subtitle:"Player score",value:"18 points",action:"View details"},"react-state":{title:"Counter",subtitle:"Current count",value:"0",action:"Increase"},"web-layout":{title:"Responsive page",subtitle:"Welcome",value:"Your page content",action:"Explore"},"web-events":{title:"Form button",subtitle:"Contact form",value:"Ready",action:"Send"}};function bv({text:s,checksText:i,language:l,lessonId:c,activeTab:d,onTabChange:p}){const g=l==="jsx"?["Preview","Console","Checks"]:["Console","Checks"],f=Lp[c]||Lp["react-components"];return a.jsxs("section",{className:"console-pane","aria-label":"Workspace output",children:[a.jsxs("div",{className:"console-heading",children:[a.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Output views",children:g.map(v=>a.jsxs("button",{type:"button",role:"tab","aria-selected":d===v,className:d===v?"active":"",onClick:()=>p(v),children:[v==="Console"&&a.jsx(fg,{size:14}),v]},v))}),a.jsx("span",{children:"Demo"})]}),d==="Preview"&&l==="jsx"?a.jsxs("div",{className:"console-preview",role:"tabpanel","aria-label":"Interface preview",children:[a.jsxs("div",{className:"console-preview-card",children:[a.jsx("small",{children:f.title}),a.jsx("strong",{children:f.value}),a.jsx("p",{children:f.subtitle}),a.jsx("span",{className:"console-preview-action",children:f.action})]}),a.jsx("p",{className:"console-preview-note",children:"Sample layout. Your code isn't rendered here yet."})]}):a.jsx("pre",{role:"tabpanel","aria-label":d==="Checks"?"Check feedback":"Console output",children:d==="Checks"?i:s})]})}function du(s,i,l){switch(s){case"Reset":return"Editor reset to sample starter code.";case"Submit":return"Local preview only: no assignment was submitted and no grade or points were awarded.";case"Run":return`Run preview: code is not executed here.

Your draft contains `+i.split(`
`).length+" lines.";default:return"Sample check: "+(i.trim().length>l.starter.trim().length?"You added content. This is not an automated correctness check.":"Starter code is unchanged. This is only a UI preview.")}}class _v{constructor({onStatus:i=()=>{},workerFactory:l=p=>new Worker(p),loadTimeout:c=6e4,runTimeout:d=6e3}={}){Object.assign(this,{onStatus:i,workerFactory:l,loadTimeout:c,runTimeout:d}),this.sequence=0,this.worker=null,this.loading=null,this.pending=null,this.closed=!1}init(){if(this.closed)return Promise.reject(Error("Python workspace closed."));if(this.loading)return this.loading;this.onStatus("Loading Python…"),this.loading=new Promise((l,c)=>{this.rejectLoad=c,this.loadTimer=setTimeout(()=>this.stop("Python could not load in time. Try again."),this.loadTimeout);try{this.worker=this.workerFactory(new URL("/playground/preview/react/python-worker.js",window.location.origin)),this.worker.onmessage=({data:d})=>{var p;if(d.type==="ready")clearTimeout(this.loadTimer),this.rejectLoad=null,this.onStatus("Python ready"),l();else if(d.type==="load-error")this.stop(d.message||"Python could not load.");else if(d.type==="result"&&d.id===((p=this.pending)==null?void 0:p.id)){const g=this.pending;clearTimeout(g.timer),this.pending=null,this.onStatus("Python ready"),g.resolve(d)}},this.worker.onerror=()=>this.stop("Python worker failed. Try again.")}catch(d){this.stop(d.message)}});const i=this.loading;return i.catch(()=>{this.loading===i&&(this.loading=null)}),i}async run(i){if(await this.init(),this.closed)throw Error("Python workspace closed.");if(this.pending)throw Error("Python is already running.");return this.onStatus("Running…"),new Promise((l,c)=>{const d=++this.sequence,p=setTimeout(()=>this.stop("Execution timed out after 6 seconds. Inspect your loops and retry."),this.runTimeout);this.pending={id:d,timer:p,resolve:l,reject:c},this.worker.postMessage({type:"run",id:d,code:i})})}stop(i="Python stopped."){var c,d;clearTimeout(this.loadTimer),(c=this.worker)==null||c.terminate(),this.worker=null;const l=this.pending;this.pending=null,l&&(clearTimeout(l.timer),l.reject(Error(i))),(d=this.rejectLoad)==null||d.call(this,Error(i)),this.rejectLoad=null,this.loading=null,this.onStatus(i)}dispose(){this.closed=!0,this.stop("Python workspace closed.")}}const ku="PUBLIC_CHECK_RESULTS=";function Sv(s,i){const l=Array.isArray(s==null?void 0:s.cases)?s.cases:[],c=JSON.stringify(String(i)),d=JSON.stringify(JSON.stringify(l));return["import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx","import traceback as __trace","__student = "+c,"__cases = __json.loads("+d+")","__results = []","for __example in __cases:","    __out = __io.StringIO()","    try:",'        __env = {"__name__": "__main__"}',"        with __ctx.redirect_stdout(__out), __ctx.redirect_stderr(__out):",'            exec(compile(__student, "main.py", "exec"), __env)',(s==null?void 0:s.mode)==="function"?'            __actual = eval(compile(__ast.parse(__example["call"], mode="eval"), "example", "eval"), __env)':'            __actual = __out.getvalue().rstrip("\\n")',(s==null?void 0:s.mode)==="function"?'        __expected = __ast.literal_eval(__example["expected"])':'        __expected = __example["expected"].rstrip("\\n")',(s==null?void 0:s.mode)==="function"?"        __ok = type(__actual) is type(__expected) and __actual == __expected":"        __ok = __actual == __expected",'        __results.append({"ok":__ok,"actual":str(__actual)[:240],"expected":str(__expected)[:240],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","expected":str(__example.get("expected",""))[:240],"error":type(__error).__name__+": "+str(__error)[:200]})','print("'+ku+'"+__json.dumps(__results))'].join(`
`)+`
`}function Cv(s,i){const l=String(s||"").split(`
`).find(c=>c.startsWith(ku));if(!l)return"Checks did not finish. Review the Console output and try again.";try{const c=JSON.parse(l.slice(ku.length));if(!Array.isArray(c)||c.length!==i)throw Error("Incomplete check results");return[`${c.filter(p=>p.ok).length} of ${c.length} published examples matched.`,...c.map((p,g)=>p.ok?`✓ Example ${g+1}: matched`:`✗ Example ${g+1}: ${p.error||"Expected "+p.expected+"; received "+p.actual}`),"","These are practice checks only. No grade or points were recorded."].join(`
`)}catch{return"Checks returned an unexpected result. Please run the code again."}}function jv({lessonId:s,task:i}){const l=mh.code(s),c=G.useRef(null),d=G.useRef(null),[p,g]=G.useState(!1),f=!!(i.isPublished&&i.language==="python"),[v,x]=G.useState(i.starter),[w,k]=G.useState(i.console),[j,F]=G.useState(""),[H,P]=G.useState("Choose Check to review this draft. Results are for demonstration only."),[z,q]=G.useState(i.language==="jsx"?"Preview":"Console"),[ue,pe]=Be("designlab:editor-height",300);G.useEffect(()=>{x(lo(l)??i.starter),k(i.console),P("Choose Check to review this draft. Results are for demonstration only."),q(i.language==="jsx"?"Preview":"Console")},[l,i]),G.useEffect(()=>()=>{var X;(X=d.current)==null||X.dispose()},[]);async function ae(X){var $e;if(p)return;g(!0);const oe=X==="Check";q(oe?"Checks":"Console"),oe?P("Checking published examples…"):k("Preparing Python…"),d.current||(d.current=new _v({onStatus:Se=>{oe||k(Se)}}));try{const Se=oe?Sv(i,v):v,W=await d.current.run(Se);oe?P(W.success?Cv(W.output,(($e=i.cases)==null?void 0:$e.length)||0):"Checks could not finish. Review your code and try again."):k(W.output||(W.success?"Program finished with no printed output.":"The program stopped without output."))}catch(Se){const W=String((Se==null?void 0:Se.message)||Se);oe?P("Checks unavailable: "+W):k("Python unavailable: "+W)}finally{g(!1)}}function ce(X){if(!c.current)return;const oe=c.current.getBoundingClientRect();pe(Math.max(160,Math.min(oe.height-120,X.clientY-oe.top)))}function ye(X){if(!p){if(f&&(X==="Run"||X==="Check")){ae(X);return}if(X==="Save"){uo(l,v),F("Draft saved in this browser only.");return}if(X==="Reset"){x(i.starter),P("Choose Check to review this draft. Results are for demonstration only."),k(du("Reset",v,i)),q(i.language==="jsx"?"Preview":"Console");return}if(X==="Check"){P(du(X,v,i)),q("Checks");return}k(du(X,v,i)),q("Console")}}return a.jsxs("div",{className:"code-pane",children:[a.jsxs("div",{className:"pane-header",children:[a.jsxs("strong",{children:[a.jsx(mo,{size:16})," Editor"]}),a.jsxs("div",{className:"right-meta",children:[i.language.toUpperCase()," ",a.jsx(Ct,{children:f?"Practice":"Demo"})]})]}),a.jsxs("div",{className:"code-workspace",ref:c,style:{"--editor-height":`${ue}px`},children:[a.jsx("textarea",{spellCheck:"false",className:"code-editor","aria-label":"Code editor",value:v,onChange:X=>{x(X.target.value),F(""),P("Your code has changed. Choose Check to review this draft.")}}),a.jsx(so,{axis:"rows",onDrag:ce}),a.jsx(bv,{text:w,checksText:H,language:i.language,lessonId:s,activeTab:z,onTabChange:q})]}),a.jsxs("div",{className:"editor-controls",children:[a.jsx("div",{children:["Run","Check","Reset"].map(X=>a.jsx("button",{className:"btn",disabled:p,onClick:()=>ye(X),children:X},X))}),a.jsxs("div",{children:[a.jsxs("button",{className:"btn",disabled:p,onClick:()=>ye("Save"),children:[a.jsx(ro,{size:15})," Save"]}),a.jsxs("button",{className:"btn submit",disabled:p,onClick:()=>ye("Submit"),children:[a.jsx(Pu,{size:15})," Submit"]})]})]}),a.jsx("div",{className:"editor-note",children:j||(f?"Run your Python code and check the published examples. No scores are recorded here.":"Drag the dividers to resize your workspace. Runs and checks are examples, not grades.")})]})}function Tv({lessonId:s,onAnswerChecked:i}){const l=Kp[s],[c,d]=G.useState(null),[p,g]=G.useState(!1);function f(){g(!0),i==null||i({selected:c,correct:c===l.correct})}function v(){d(null),g(!1),i==null||i(null)}return a.jsxs("section",{className:"tsi-practice","aria-label":"Math question",children:[a.jsxs("div",{className:"tsi-practice-heading",children:[a.jsx($p,{size:20}),a.jsxs("div",{children:[a.jsx("h2",{children:"Try this question"}),a.jsx("p",{children:"Choose an answer, then review the explanation on the right."})]})]}),a.jsxs("div",{className:"tsi-question-card",children:[a.jsx("div",{className:"eyebrow",children:"Question"}),a.jsx("h3",{children:l.prompt}),a.jsx("div",{className:"tsi-answers",role:"radiogroup","aria-label":"Choose the correct answer",children:l.options.map((x,w)=>a.jsxs("label",{className:`tsi-choice ${c===w?"selected":""} ${p&&w===l.correct?"correct":""}`,children:[a.jsx("input",{type:"radio",name:`tsi-${s}`,checked:c===w,disabled:p,onChange:()=>d(w)}),a.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+w)}),a.jsx("span",{children:x})]},x))}),p&&a.jsx("p",{className:"tsi-answer-status",role:"status",children:c===l.correct?"Correct! Read why on the right.":"Not quite. Review the explanation on the right."}),a.jsxs("div",{className:"tsi-buttons",children:[a.jsx("button",{className:"btn primary",disabled:c===null||p,onClick:f,children:"Check answer"}),a.jsxs("button",{className:"btn",onClick:v,children:[a.jsx(Nu,{size:15})," Try again"]})]})]})]})}function Ev({lessonId:s,course:i,unit:l,unitNumber:c,isCompleted:d=!1,assignment:p=null,grade:g=null,onToggleCompleted:f}){const v=zi(i,s),x=G.useRef(null),[w,k]=G.useState(null),[j,F]=Be("designlab:left-width",420);function H(z){if(!x.current)return;const q=x.current.getBoundingClientRect();F(Math.max(260,Math.min(q.width-340,z.clientX-q.left)))}const P=i.id==="tsi-math";return v!=null&&v.ready?a.jsxs("div",{className:"lesson-screen",children:[a.jsx(dp,{task:v,unit:l,unitNumber:c,isTsi:P,isCompleted:d,assignment:p,grade:g,onToggleCompleted:f}),a.jsxs("div",{className:`workspace-grid ${P?"tsi-workspace":""}`,ref:x,style:{"--left-pane":`${j}px`},children:[P?a.jsx(Tv,{lessonId:s,onAnswerChecked:k}):a.jsx(Ip,{lessonId:s,task:v}),a.jsx(so,{axis:"columns",onDrag:H}),P?a.jsx(Ip,{lessonId:s,task:v,isTsi:!0,tsiAnswer:w}):a.jsx(jv,{lessonId:s,task:v})]})]}):a.jsxs("div",{className:"lesson-screen",children:[a.jsx(dp,{task:v,unit:l,unitNumber:c,isTsi:P,isCompleted:d,assignment:p,grade:g,onToggleCompleted:f}),a.jsxs("section",{className:"lesson-content-pending surface-card",children:[a.jsx("h2",{children:"Lesson coming soon"}),a.jsx("p",{children:"The lesson materials are being prepared."})]})]})}function Nv({courseId:s,lessonId:i,openCourse:l,openChallenges:c,completedLessons:d=[],assignments:p=[],grades:g=[],onToggleLessonComplete:f,courseColors:v={},onSetCourseColor:x,onResetCourseColor:w}){const k=Wn(s)||St[0],j=no(k),F=k.units.findIndex(z=>Yt(z).includes(i)),H=k.units[F],P=j.indexOf(i);return a.jsx("div",{className:"course-layout integrated-course","data-course":k.id,children:a.jsxs("div",{className:"course-main",children:[a.jsxs("div",{className:"course-breadcrumb",children:[a.jsx("button",{onClick:()=>l(null),children:"All playgrounds"}),a.jsx(Yr,{size:14}),i?a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>l(k.id),children:k.label}),a.jsx(Yr,{size:14}),a.jsx("span",{className:"breadcrumb-unit-name",title:H?Vt(H):"",children:H?Vt(H):""})]}):a.jsx("span",{children:k.label})]}),i?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"lesson-mobile-navigation",children:[a.jsx("label",{htmlFor:"lesson-select",children:"Lesson"}),a.jsx("select",{id:"lesson-select",value:i,onChange:z=>l(k.id,z.target.value),children:k.units.map((z,q)=>a.jsx("optgroup",{label:`Unit ${q+1} · ${Vt(z)}`,children:Yt(z).map(ue=>a.jsx("option",{value:ue,children:Fs(k,ue)},ue))},z.id))})]}),a.jsx(Ev,{lessonId:i,course:k,unit:H,unitNumber:F+1,isCompleted:d.includes(i),assignment:p.find(z=>z.id==="lesson:"+i),grade:g.find(z=>z.id==="lesson:"+i),onToggleCompleted:()=>f==null?void 0:f(i)},i),a.jsxs("nav",{className:"lesson-next-bar","aria-label":"Lesson sequence",children:[a.jsx("button",{className:"btn primary",disabled:P<=0,onClick:()=>l(k.id,j[P-1]),children:"← Prev"}),P<j.length-1&&a.jsxs("button",{className:"btn primary",onClick:()=>l(k.id,j[P+1]),children:["Next: ",Fs(k,j[P+1])," ",a.jsx(Yr,{size:16})]})]})]}):a.jsx(Tg,{course:k,openCourse:l,openChallenges:c,completedLessons:d,assignments:p,grades:g,courseColors:v,onSetCourseColor:x,onResetCourseColor:w})]})})}const qt=[{id:"p1",period:"1",name:"Period 1",course:"computer-science-1"},{id:"p3",period:"3",name:"Period 3",course:"computer-science-1"},{id:"p5",period:"5",name:"Period 5",course:"mobile-app-dev"},{id:"p6",period:"6",name:"Period 6",course:"game-programming"},{id:"p7",period:"7",name:"Period 7",course:"mobile-app-dev"},{id:"p8",period:"8",name:"Period 8",course:"computer-science-1"}],fh=s=>qt.find(i=>i.id===s),gh=s=>{var i;return(i=fh(s))==null?void 0:i.period},Pv=[...new Set(qt.map(s=>s.period))].sort((s,i)=>Number(s)-Number(i)),yh=[{key:"2026-11-02",label:"Nov 2 – Nov 8, 2026"},{key:"2026-10-26",label:"Oct 26 – Nov 1, 2026"}],Wi=s=>{var i,l;return((i=s.sheetName)==null?void 0:i.trim())||((l=s.studentName)==null?void 0:l.trim())||s.github},Op=s=>(s.sheetName||s.studentName||"").trim().split(/\s+/),vh=(s,i,l)=>{const c=d=>l==="github"?d.github.toLowerCase():l==="first"?(Op(d)[0]||d.github).toLowerCase():(Op(d).at(-1)||d.github).toLowerCase();return c(s).localeCompare(c(i),void 0,{numeric:!0})||s.github.localeCompare(i.github)},Rv=[["last","Last name"],["first","First name"],["github","GitHub username"]];function Av({sectionId:s,onSectionChange:i,onReset:l}){return a.jsxs("div",{className:"teacher-toolbar",children:[a.jsxs("label",{children:["Class section",a.jsx("select",{value:s,onChange:c=>i(c.target.value),children:qt.map(c=>a.jsxs("option",{value:c.id,children:[c.name," · ",Su(c.course)]},c.id))})]}),a.jsxs("button",{className:"btn",onClick:l,children:[a.jsx(Nu,{size:15})," Reset sample records"]})]})}const Iv=[["overview","Class overview",Eu],["journals","Journals",Tu],["accounts","Accounts",gg],["setup","Section setup",Ru]];function Lv({tab:s,onChange:i}){return a.jsx("div",{className:"tabs teacher-tabs",role:"tablist","aria-label":"Teacher dashboard tabs",children:Iv.map(([l,c,d])=>a.jsxs("button",{role:"tab","aria-selected":s===l,className:s===l?"active":"",onClick:()=>i(l),children:[a.jsx(d,{size:16}),c]},l))})}function Ov({section:s}){return a.jsxs("div",{className:"section-banner",children:[a.jsxs("div",{children:[a.jsx("div",{className:"eyebrow",children:"Selected section"}),a.jsxs("h2",{children:[s.name," ",a.jsxs("span",{className:"muted",children:["· ",Su(s.course)]})]})]}),a.jsx(Ct,{children:"Demo join code: LOCAL01"})]})}function Dv({students:s}){const i=[[s.length,"Enrolled students"],[s.filter(l=>l.status==="Active now").length,"Recently interacting"],[s.filter(l=>l.sheetName).length,"Sheet names matched"]];return a.jsx("div",{className:"stat-grid",children:i.map(([l,c])=>a.jsxs("div",{className:"stat-card",children:[a.jsx("strong",{children:l}),a.jsx("span",{children:c})]},c))})}function zv({students:s,week:i,setWeek:l}){const c=G.useMemo(()=>[...s].sort((d,p)=>(p.weekly[i]||0)-(d.weekly[i]||0)),[s,i]);return a.jsxs("section",{className:"panel",children:[a.jsxs("div",{className:"section-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Weekly points"}),a.jsx("p",{children:"Mock verified points · Monday–Sunday in Central Time"})]}),a.jsxs("label",{children:["Week",a.jsx("select",{value:i,onChange:d=>l(d.target.value),children:yh.map(d=>a.jsx("option",{value:d.key,children:d.label},d.key))})]})]}),a.jsx("div",{className:"overflow",children:a.jsxs("table",{className:"data-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Student"}),a.jsx("th",{children:"Weekly points"}),a.jsx("th",{children:"Sample assignments"})]})}),a.jsx("tbody",{children:c.map(d=>a.jsxs("tr",{children:[a.jsxs("th",{children:[Wi(d),a.jsxs("small",{children:["@",d.github]})]}),a.jsx("td",{children:a.jsx("strong",{children:d.weekly[i]||0})}),a.jsx("td",{children:d.assignments.filter(p=>p.score!==null).length})]},d.id))})]})})]})}function xh({label:s,value:i,onChange:l}){return a.jsxs("label",{children:[s,a.jsx("select",{value:i,onChange:c=>l(c.target.value),children:Rv.map(([c,d])=>a.jsx("option",{value:c,children:d},c))})]})}const Mv=s=>s.includes("Completed")?"success":s==="Needs revision"?"warning":"";function Fv({student:s,week:i}){const[l,c]=G.useState(null),d=s.assignments,p=d.filter(f=>f.status==="Completed"||f.status==="Practice completed").length,g=d.filter(f=>f.score!==null).length;return a.jsxs("div",{className:"expanded-student",children:[a.jsxs("div",{className:"expanded-header",children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Assignment history"}),a.jsxs("p",{className:"muted",children:["Sample records for ",Wi(s),". No student data is loaded."]})]}),a.jsxs(Ct,{tone:"success",children:[s.weekly[i]||0," verified pts this week"]})]}),a.jsxs("div",{className:"mini-stats",children:[a.jsxs("span",{children:[a.jsx("strong",{children:p})," completed"]}),a.jsxs("span",{children:[a.jsx("strong",{children:g})," graded"]}),a.jsxs("span",{children:[a.jsx("strong",{children:d.length})," tracked"]})]}),a.jsx("div",{className:"overflow",children:a.jsxs("table",{className:"data-table assignment-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Assignment"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Score"}),a.jsx("th",{children:"Updated"}),a.jsx("th",{children:"Action"})]})}),a.jsx("tbody",{children:d.map(f=>{const v=l===f.id;return a.jsxs(G.Fragment,{children:[a.jsxs("tr",{children:[a.jsxs("th",{children:[f.name,a.jsx("small",{children:f.type})]}),a.jsx("td",{children:a.jsx(Ct,{tone:Mv(f.status),children:f.status})}),a.jsx("td",{children:f.score===null?"—":`${f.score} / ${f.possible}`}),a.jsx("td",{children:f.submitted}),a.jsx("td",{children:a.jsx("button",{className:"small-link",onClick:()=>c(v?null:f.id),children:v?"Hide details":"View details"})})]}),v&&a.jsx("tr",{className:"receipt-preview",children:a.jsxs("td",{colSpan:"5",children:[a.jsx("strong",{children:"Sample assignment detail"}),a.jsx("p",{children:"This is a mock submitted-copy preview for layout testing, not the student's actual code."})]})})]},f.id)})})]})})]})}function Uv({students:s,week:i,sort:l,setSort:c,expanded:d,setExpanded:p}){return a.jsxs("section",{className:"panel",children:[a.jsxs("div",{className:"section-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Section roster & activity"}),a.jsx("p",{children:"Click a student's name to expand their assignments directly inside the roster."})]}),a.jsx(xh,{label:"Sort students by",value:l,onChange:c})]}),a.jsx("div",{className:"overflow",children:a.jsxs("table",{className:"data-table roster-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Student"}),a.jsx("th",{children:"Activity signal"}),a.jsx("th",{children:"Current activity"}),a.jsx("th",{children:"Practice"}),a.jsx("th",{children:"Hand-ins"})]})}),a.jsx("tbody",{children:s.map(g=>{const f=d===g.id;return a.jsxs(G.Fragment,{children:[a.jsxs("tr",{className:f?"selected-row":"",children:[a.jsxs("th",{children:[a.jsxs("button",{className:"student-name-button","aria-expanded":f,onClick:()=>p(f?null:g.id),children:[f?a.jsx(qp,{size:16}):a.jsx(Yr,{size:16})," ",Wi(g)]}),a.jsxs("small",{children:["@",g.github,g.sections.length>1?" · Sheet periods 1, 3":""]})]}),a.jsx("td",{children:a.jsx(Ct,{tone:g.status==="Active now"?"success":"",children:g.status})}),a.jsx("td",{children:g.current}),a.jsxs("td",{children:[g.assignments.filter(v=>v.status.includes("Completed")).length," complete"]}),a.jsx("td",{children:g.assignments.filter(v=>v.score!==null).length})]}),f&&a.jsx("tr",{className:"expansion-row",children:a.jsx("td",{colSpan:"5",children:a.jsx(Fv,{student:g,week:i})})})]},g.id)})})]})})]})}function Wv({section:s,students:i,week:l,setWeek:c,sort:d,setSort:p,expanded:g,setExpanded:f}){return a.jsxs(a.Fragment,{children:[a.jsx(Ov,{section:s}),a.jsx(Dv,{students:i}),a.jsx(zv,{students:i,week:l,setWeek:c}),a.jsx(Uv,{students:i,week:l,sort:d,setSort:p,expanded:g,setExpanded:f})]})}function Bv({children:s}){return a.jsx("div",{className:"empty",children:s})}function Hv({student:s,isEditing:i,onToggleEdit:l,onDone:c,onPatch:d}){const p=Wi(s);return a.jsxs("article",{className:"account-card",children:[a.jsxs("div",{className:"account-row",children:[a.jsx("span",{className:"avatar",children:p.slice(0,1).toUpperCase()}),a.jsxs("div",{className:"account-identity",children:[a.jsx("h3",{children:p}),a.jsxs("small",{children:["@",s.github]})]}),a.jsx("button",{className:"icon-button","aria-label":`Edit ${p}`,onClick:l,children:i?a.jsx(Au,{size:17}):a.jsx(Ru,{size:17})})]}),a.jsxs("div",{className:"account-footer",children:[a.jsx(Ct,{tone:s.sheetName?"success":"",children:s.sheetName?"Sheet matched":"Student name fallback"}),s.sections.map(g=>a.jsxs(Ct,{children:["Period ",gh(g)]},g))]}),i&&a.jsxs("div",{className:"account-edit",children:[a.jsxs("label",{children:["Google Sheet name",a.jsx("input",{value:s.sheetName||"",onChange:g=>d({sheetName:g.target.value||null})})]}),a.jsxs("label",{children:["Student-provided backup",a.jsx("input",{value:s.studentName||"",onChange:g=>d({studentName:g.target.value})})]}),a.jsx("button",{className:"btn",onClick:c,children:"Done"})]})]})}function $v({students:s,sort:i,setSort:l,patchStudent:c}){const[d,p]=Be("designlab:period-filter","all"),[g,f]=G.useState(""),[v,x]=G.useState(null),w=G.useMemo(()=>{const k=g.toLowerCase();return s.filter(j=>(d==="all"||j.sections.some(F=>gh(F)===d))&&[Wi(j),j.github,j.studentName].some(F=>F.toLowerCase().includes(k))).sort((j,F)=>vh(j,F,i))},[s,d,i,g]);return a.jsxs("section",{className:"panel",children:[a.jsxs("div",{className:"section-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Accounts"}),a.jsx("p",{children:"Google Sheet name first, student-entered name second, then GitHub name."})]}),a.jsxs(Ct,{children:[w.length," accounts"]})]}),a.jsxs("div",{className:"filters",children:[a.jsxs("label",{children:[a.jsx(Vp,{size:16})," ",a.jsx("input",{"aria-label":"Search accounts",value:g,placeholder:"Search name or GitHub username",onChange:k=>f(k.target.value)})]}),a.jsxs("label",{children:["Class period",a.jsxs("select",{value:d,onChange:k=>p(k.target.value),children:[a.jsx("option",{value:"all",children:"All periods"}),Pv.map(k=>a.jsx("option",{children:k},k))]})]}),a.jsx(xh,{label:"Sort",value:i,onChange:l})]}),a.jsx("p",{className:"info-text",children:"Change a sample Sheet name to test precedence and fallback behavior. These edits are saved only in browser storage."}),a.jsx("div",{className:"account-grid",children:w.map(k=>a.jsx(Hv,{student:k,isEditing:v===k.id,onToggleEdit:()=>x(v===k.id?null:k.id),onDone:()=>x(null),onPatch:j=>c(k.id,j)},k.id))}),!w.length&&a.jsx(Bv,{children:"No accounts match those filters."})]})}function qv({students:s}){return a.jsxs("section",{className:"panel",children:[a.jsx("h2",{children:"Section setup"}),a.jsx("p",{children:"Visual preview of configured sections. This sandbox cannot create live classes or assign students."}),a.jsx("div",{className:"setup-grid",children:qt.map(i=>a.jsxs("div",{className:"setup-card",children:[a.jsx("div",{className:"eyebrow",children:i.name}),a.jsx("h3",{children:Su(i.course)}),a.jsxs("span",{children:[s.filter(l=>l.sections.includes(i.id)).length," sample students"]})]},i.id))})]})}function Vv({section:s,students:i,submissions:l}){const[c,d]=G.useState(hu()[0]),[p,g]=G.useState(null),f=hu(),v=i.map(w=>{const k=l.filter(j=>j.studentId===w.id&&j.sectionId===s.id&&j.week===c);return{student:w,copies:k,latest:k.at(-1)}}),x=v.filter(w=>w.latest).length;return a.jsxs("section",{className:"panel journal-inbox",children:[a.jsxs("div",{className:"section-heading",children:[a.jsxs("div",{children:[a.jsx("div",{className:"eyebrow",children:"Teacher review · Sample records"}),a.jsxs("h2",{children:[a.jsx(Tu,{size:19})," Weekly journal submissions"]}),a.jsx("p",{children:"Review essays and logic puzzles from this section. Journals are never automatically graded."})]}),a.jsxs("label",{children:["Journal week ",a.jsx("select",{value:c,onChange:w=>{d(w.target.value),g(null)},children:f.map(w=>a.jsx("option",{value:w,children:zs(w)},w))})]})]}),a.jsxs("div",{className:"stat-grid",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("strong",{children:x}),a.jsx("span",{children:"Submitted"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("strong",{children:v.length-x}),a.jsx("span",{children:"Missing"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("strong",{children:v.length}),a.jsx("span",{children:"Students in section"})]})]}),a.jsx("div",{className:"journal-inbox-rows",children:v.map(({student:w,latest:k,copies:j})=>a.jsxs("div",{className:"journal-inbox-row",children:[a.jsxs("div",{children:[a.jsxs("strong",{children:[w.first," ",w.last]}),a.jsxs("small",{children:["@",w.github]})]}),a.jsx("span",{className:`journal-status-pill ${k?"submitted":""}`,children:k?"Submitted":"Missing"}),a.jsx("span",{className:"journal-inbox-date",children:k?new Date(k.submittedAt).toLocaleString():"—"}),a.jsx("button",{className:"btn",disabled:!k,onClick:()=>g(p===w.id?null:w.id),children:p===w.id?"Close":"Review"}),p===w.id&&k&&a.jsxs("div",{className:"journal-review-detail",children:[a.jsxs("div",{className:"eyebrow",children:[k.type.replace("-"," ")," · ",j.length," ",j.length===1?"hand-in":"hand-ins"," · Manual review"]}),a.jsx("div",{className:"journal-history-answer",children:k.response}),a.jsxs("p",{className:"hint",children:["AI declaration: ",k.aiUse==="none"?"No AI reported":`Disclosed · ${k.aiDetails}`]})]})]},w.id))}),a.jsx("p",{className:"hint",children:"This inbox uses fictional students and demo submissions created in this browser. No grades or messages are sent."})]})}function Yv({students:s,setStudents:i,journalSubmissions:l}){const[c,d]=Be("designlab:teacher-tab","overview"),[p,g]=Be("designlab:section","p1"),[f,v]=Be("designlab:sort","last"),[x,w]=Be("designlab:week",yh[0].key),[k,j]=G.useState(null),F=fh(p)||qt[0],H=G.useMemo(()=>s.filter(z=>z.sections.includes(p)).sort((z,q)=>vh(z,q,f)),[s,p,f]),P=(z,q)=>i(ue=>ue.map(pe=>pe.id===z?{...pe,...q}:pe));return a.jsxs("div",{className:"main-content teacher-screen",children:[a.jsx(Gp,{eyebrow:"Your classroom · Frontend mockup",actions:a.jsx(Ct,{children:"Sample data only"}),children:"Teacher dashboard"}),a.jsx("p",{className:"page-subtitle",children:"Switch tabs, sort students, expand their assignment cards, and experiment with weekly scores. Everything stays in this local browser."}),a.jsx(Av,{sectionId:p,onSectionChange:z=>{g(z),j(null)},onReset:()=>{i(Za),j(null)}}),a.jsx(Lv,{tab:c,onChange:z=>{d(z),j(null)}}),c==="overview"&&a.jsx(Wv,{section:F,students:H,week:x,setWeek:w,sort:f,setSort:v,expanded:k,setExpanded:j}),c==="journals"&&a.jsx(Vv,{section:F,students:H,submissions:l}),c==="accounts"&&a.jsx($v,{students:s,sort:f,setSort:v,patchStudent:P}),c==="setup"&&a.jsx(qv,{students:s})]})}const Gv={essay:"Think about a time you solved a difficult problem. Explain what you tried first, how you changed your approach, and what you learned. Use specific evidence.","logic-puzzle":"A robot follows this pattern: 2, 6, 12, 20, 30, __. Find the next number. Explain the pattern and show why your answer fits."},Dp={response:"",type:"essay",aiUse:"",aiDetails:""};function Kv({submissions:s,setSubmissions:i}){var Se;const[l,c]=Be("designlab:journal-section",qt[0].id),d=qt.find(W=>W.id===l)||qt[0],p=Za.filter(W=>W.sections.includes(d.id)),[g,f]=Be("designlab:journal-student",Za[0].id),v=p.find(W=>W.id===g)||p[0],x=G.useMemo(()=>hu(),[]),[w,k]=Be("designlab:journal-week",x[0]),j=x.includes(w)?w:x[0],[F,H]=Be("designlab:journal-drafts",{}),[P,z]=G.useState(""),[q,ue]=G.useState(!1),pe=df(d.id,v.id,j),ae=F[pe]||Dp,ce=s.filter(W=>W.studentId===v.id&&W.sectionId===d.id&&W.week===j),ye=ce.at(-1),X=ae.response.trim()?ae.response.trim().split(/\s+/).length:0;function oe(W,Ee){H(Z=>({...Z,[pe]:{...Z[pe]||Dp,[W]:Ee}})),z("Draft saved in this browser.")}function $e(W){W.preventDefault();const Ee=pf(ae);if(Ee){z(Ee);return}const Z={id:`demo-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,sectionId:d.id,studentId:v.id,studentName:`${v.first} ${v.last}`,courseId:d.course,week:j,response:ae.response.trim(),type:ae.type,aiUse:ae.aiUse,aiDetails:ae.aiDetails.trim(),submittedAt:new Date().toISOString()};i(xe=>[...xe,Z]),z("Demo submission saved locally. Check the Teacher dashboard → Journals tab to review it.")}return a.jsxs("div",{className:"main-content journal-screen",children:[a.jsx("div",{className:"eyebrow",children:"Your classes · Written work"}),a.jsxs("header",{className:"journal-heading",children:[a.jsxs("div",{children:[a.jsx("h1",{children:"Weekly Journals"}),a.jsx("p",{children:"Essay responses, reflections, and logic puzzles—all in one place."})]}),a.jsxs("span",{className:"chip",children:[a.jsx(dg,{size:14})," Local demo only"]})]}),a.jsxs("section",{className:"journal-card journal-selection","aria-label":"Select a journal",children:[a.jsxs("label",{children:["Class section",a.jsx("select",{value:d.id,onChange:W=>{c(W.target.value),z("")},children:qt.map(W=>{var Ee;return a.jsxs("option",{value:W.id,children:[W.name," · ",(Ee=Wn(W.course))==null?void 0:Ee.label]},W.id)})})]}),a.jsxs("label",{children:["Preview as student",a.jsx("select",{value:v.id,onChange:W=>{f(W.target.value),z("")},children:p.map(W=>a.jsxs("option",{value:W.id,children:[W.first," ",W.last," (sample)"]},W.id))})]}),a.jsxs("label",{children:["Journal week",a.jsx("select",{value:j,onChange:W=>{k(W.target.value),z("")},children:x.map(W=>a.jsxs("option",{value:W,children:["Week of ",zs(W)]},W))})]})]}),a.jsxs("section",{className:"journal-card journal-editor-card",children:[a.jsxs("div",{className:"journal-section-heading",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"eyebrow",children:[(Se=Wn(d.course))==null?void 0:Se.label," · ",d.name]}),a.jsxs("h2",{children:["Journal · Week of ",zs(j)]})]}),a.jsx("span",{className:`journal-status-pill ${ye?"submitted":""}`,children:ye?"Submitted":"Not submitted"})]}),a.jsx("p",{className:"journal-instructions",children:"This is a fictional prompt for design testing. In production, your teacher would publish the weekly assignment."}),a.jsxs("form",{onSubmit:$e,children:[a.jsxs("label",{children:["Response type",a.jsxs("select",{value:ae.type,onChange:W=>oe("type",W.target.value),children:[a.jsx("option",{value:"essay",children:"Essay or written reflection"}),a.jsx("option",{value:"logic-puzzle",children:"Logic puzzle or reasoning task"})]})]}),a.jsxs("div",{className:"journal-prompt",children:[a.jsx("strong",{children:"Sample prompt"}),a.jsx("p",{children:Gv[ae.type]})]}),a.jsx("label",{htmlFor:"journal-answer",children:"Your response"}),a.jsx("textarea",{id:"journal-answer",rows:"13",maxLength:"100000",spellCheck:!0,placeholder:"Write your explanation here. Show steps and reasoning for logic puzzles.",value:ae.response,onChange:W=>oe("response",W.target.value)}),a.jsxs("div",{className:"journal-writing-meta",children:[a.jsxs("span",{children:[X," words"]}),a.jsxs("span",{children:[a.jsx(ro,{size:13})," Autosaved in this browser"]})]}),a.jsxs("div",{className:"journal-integrity",children:[a.jsxs("label",{children:["AI-use declaration",a.jsxs("select",{value:ae.aiUse,onChange:W=>oe("aiUse",W.target.value),children:[a.jsx("option",{value:"",children:"Choose one"}),a.jsx("option",{value:"none",children:"I did not use AI-generated content"}),a.jsx("option",{value:"disclosed",children:"I used AI and will explain how"})]})]}),a.jsx("p",{className:"hint",children:"This is a declaration for review, not an automatic grade. Follow your teacher's classroom AI policy."}),ae.aiUse==="disclosed"&&a.jsxs("label",{children:["Describe the AI assistance",a.jsx("textarea",{rows:"3",value:ae.aiDetails,onChange:W=>oe("aiDetails",W.target.value),placeholder:"Identify which parts involved AI assistance."})]})]}),a.jsxs("div",{className:"journal-actions",children:[a.jsxs("button",{type:"button",className:"btn",onClick:()=>{z("Draft saved in this browser.")},children:[a.jsx(ro,{size:15})," Save draft"]}),a.jsxs("button",{type:"submit",className:"btn submit",children:[a.jsx(Pu,{size:15})," Demo submit"]})]}),a.jsx("p",{role:"status",className:"journal-submit-status",children:P})]}),a.jsxs("div",{className:"journal-bottom-row",children:[a.jsx("p",{className:"hint",children:"No real submissions are sent. Each demo submission records a separate copy; drafts remain editable."}),a.jsxs("button",{type:"button",className:"btn",onClick:()=>ue(W=>!W),children:[a.jsx(sg,{size:15})," ",q?"Hide history":`Submission history (${ce.length})`]})]}),q&&a.jsx("div",{className:"journal-history",children:ce.length?ce.map(W=>a.jsxs("details",{className:"journal-history-item",children:[a.jsxs("summary",{children:[a.jsx(fu,{size:16})," Submitted ",new Date(W.submittedAt).toLocaleString()," · ",W.type]}),a.jsx("div",{className:"journal-history-answer",children:W.response})]},W.id)):a.jsx("p",{className:"muted",children:"No submissions yet for this week."})})]})]})}const Qv=`# Attendance Percentage

Convert an attendance fraction into a whole-number percentage.

## Problem

Given the number of students present and the total number enrolled, return the whole-number attendance percentage, **rounding down**. Calculate \`floor(100 × present / total)\`. The total will always be greater than zero.

## Input and output

Implement the supplied function and **return** a value. Do not print the answer unless your language runner explicitly requests it.

## Examples

**Example 1**

\`\`\`json
{
  "arguments": [
    18,
    20
  ],
  "expected": 90
}
\`\`\`

**Example 2**

\`\`\`json
{
  "arguments": [
    2,
    3
  ],
  "expected": 66
}
\`\`\`

**Example 3**

\`\`\`json
{
  "arguments": [
    0,
    30
  ],
  "expected": 0
}
\`\`\`

**Example 4**

\`\`\`json
{
  "arguments": [
    7,
    7
  ],
  "expected": 100
}
\`\`\`

## Constraints

- 1 ≤ total ≤ 10000
- 0 ≤ present ≤ total

## Skills

arithmetic, integer-division, functions.

## How to approach it

Identify the inputs and expected return value, trace the provided examples, then write and test your own implementation.
`,Jv=`# Competition Leaderboard Ranks

Assign ranks while handling tied scores and skipped positions.

## Problem

Given an array of integer scores in the **original participant order**, return an array of ranks using competition ranking: the highest score is rank \`1\`; equal scores share a rank; after a tie, the next rank skips the occupied positions. For scores \`[50,50,40]\`, the ranks are \`[1,1,3]\`. Do not reorder the output.

## Input and output

Implement the supplied function and **return** a value. Do not print the answer unless your language runner explicitly requests it.

## Examples

**Example 1**

\`\`\`json
{
  "arguments": [
    [
      50,
      50,
      40,
      20,
      40
    ]
  ],
  "expected": [
    1,
    1,
    3,
    5,
    3
  ]
}
\`\`\`

**Example 2**

\`\`\`json
{
  "arguments": [
    [
      7,
      12,
      9
    ]
  ],
  "expected": [
    3,
    1,
    2
  ]
}
\`\`\`

**Example 3**

\`\`\`json
{
  "arguments": [
    [
      5,
      5,
      5
    ]
  ],
  "expected": [
    1,
    1,
    1
  ]
}
\`\`\`

**Example 4**

\`\`\`json
{
  "arguments": [
    []
  ],
  "expected": []
}
\`\`\`

## Constraints

- 0 ≤ participant count ≤ 300
- -100000 ≤ each score ≤ 100000

## Skills

arrays, sorting, ties.

## How to approach it

Identify the inputs and expected return value, trace the provided examples, then write and test your own implementation.
`,Xv=`# Confidence Pool Total

Compute the points earned from predictions.

## Problem

Given two arrays of equal length, \`correct\` (booleans) and \`weights\` (positive integers), return the sum of the weights at positions where \`correct[i]\` is \`true\`. The arrays are aligned by index. Return \`0\` for empty arrays. This is a generic weighted-prediction scoring task, not a betting exercise.

## Input and output

Implement the supplied function and **return** a value. Do not print the answer unless your language runner explicitly requests it.

## Examples

**Example 1**

\`\`\`json
{
  "arguments": [
    [
      true,
      false,
      true
    ],
    [
      20,
      18,
      15
    ]
  ],
  "expected": 35
}
\`\`\`

**Example 2**

\`\`\`json
{
  "arguments": [
    [
      false,
      false
    ],
    [
      5,
      8
    ]
  ],
  "expected": 0
}
\`\`\`

**Example 3**

\`\`\`json
{
  "arguments": [
    [],
    []
  ],
  "expected": 0
}
\`\`\`

## Constraints

- 0 ≤ array length ≤ 200
- 1 ≤ each weight ≤ 100

## Skills

arrays, loops, parallel-arrays.

## How to approach it

Identify the inputs and expected return value, trace the provided examples, then write and test your own implementation.
`,Zv=`# Count Matching Events

Count how often a particular event code appears.

## Problem

Given an array of integer event codes and a target integer, return the number of positions whose value matches the target. Every occurrence counts, including duplicates. Return \`0\` for an empty array.

## Input and output

Implement the supplied function and **return** a value. Do not print the answer unless your language runner explicitly requests it.

## Examples

**Example 1**

\`\`\`json
{
  "arguments": [
    [
      2,
      1,
      2,
      3,
      2
    ],
    2
  ],
  "expected": 3
}
\`\`\`

**Example 2**

\`\`\`json
{
  "arguments": [
    [],
    7
  ],
  "expected": 0
}
\`\`\`

**Example 3**

\`\`\`json
{
  "arguments": [
    [
      3,
      4
    ],
    5
  ],
  "expected": 0
}
\`\`\`

## Constraints

- 0 ≤ event count ≤ 200
- -1000 ≤ codes and target ≤ 1000

## Skills

arrays, loops, comparisons.

## How to approach it

Identify the inputs and expected return value, trace the provided examples, then write and test your own implementation.
`,ex=`# Longest Winning Streak

Find the longest consecutive run of winning results.

## Problem

Given an array of booleans (\`true\` means a win and \`false\` means a loss), return the length of the longest consecutive run of \`true\` values. The streak resets after each loss. Return \`0\` if there are no wins.

## Input and output

Implement the supplied function and **return** a value. Do not print the answer unless your language runner explicitly requests it.

## Examples

**Example 1**

\`\`\`json
{
  "arguments": [
    [
      true,
      true,
      false,
      true,
      true,
      true
    ]
  ],
  "expected": 3
}
\`\`\`

**Example 2**

\`\`\`json
{
  "arguments": [
    [
      false,
      false
    ]
  ],
  "expected": 0
}
\`\`\`

**Example 3**

\`\`\`json
{
  "arguments": [
    []
  ],
  "expected": 0
}
\`\`\`

**Example 4**

\`\`\`json
{
  "arguments": [
    [
      true,
      true
    ]
  ],
  "expected": 2
}
\`\`\`

## Constraints

- 0 ≤ match count ≤ 500

## Skills

arrays, loops, state.

## How to approach it

Identify the inputs and expected return value, trace the provided examples, then write and test your own implementation.
`,nx=`# Format a Score Line

Format a player score as a clear single line of text.

## Problem

Given a player name and an integer points value, return a string using this **exact** format: \`Name: N points\`. Preserve the original spelling and spacing of the name. Use one space after the colon and before \`points\`.

## Input and output

Implement the supplied function and **return** a value. Do not print the answer unless your language runner explicitly requests it.

## Examples

**Example 1**

\`\`\`json
{
  "arguments": [
    "Avery",
    18
  ],
  "expected": "Avery: 18 points"
}
\`\`\`

**Example 2**

\`\`\`json
{
  "arguments": [
    "Jordan Lee",
    0
  ],
  "expected": "Jordan Lee: 0 points"
}
\`\`\`

**Example 3**

\`\`\`json
{
  "arguments": [
    "Mia",
    -2
  ],
  "expected": "Mia: -2 points"
}
\`\`\`

## Constraints

- 1 ≤ name length ≤ 50
- -1000 ≤ points ≤ 1000

## Skills

strings, formatting, functions.

## How to approach it

Identify the inputs and expected return value, trace the provided examples, then write and test your own implementation.
`,tx=`# Second Largest Distinct Value

Return the second-highest unique integer in a collection.

## Problem

Given an array of integers, return the **second-largest distinct value**, not the value at the second index after sorting with duplicates. If fewer than two different values exist, return \`null\` (\`None\` in Python). Negative numbers are valid.

## Input and output

Implement the supplied function and **return** a value. Do not print the answer unless your language runner explicitly requests it.

## Examples

**Example 1**

\`\`\`json
{
  "arguments": [
    [
      3,
      1,
      3,
      2
    ]
  ],
  "expected": 2
}
\`\`\`

**Example 2**

\`\`\`json
{
  "arguments": [
    [
      5,
      5
    ]
  ],
  "expected": null
}
\`\`\`

**Example 3**

\`\`\`json
{
  "arguments": [
    [
      -10,
      -7,
      -7,
      -2
    ]
  ],
  "expected": -7
}
\`\`\`

**Example 4**

\`\`\`json
{
  "arguments": [
    [
      1
    ]
  ],
  "expected": null
}
\`\`\`

## Constraints

- 0 ≤ array length ≤ 500
- -100000 ≤ each value ≤ 100000

## Skills

arrays, comparisons, distinct-values.

## How to approach it

Identify the inputs and expected return value, trace the provided examples, then write and test your own implementation.
`,rx=`# Sum Positive Values

Add only the positive values in a data set.

## Problem

Given an array of integers, add only values strictly **greater than zero**. Ignore zeros and negative values. Return \`0\` if no positive values are present.

## Input and output

Implement the supplied function and **return** a value. Do not print the answer unless your language runner explicitly requests it.

## Examples

**Example 1**

\`\`\`json
{
  "arguments": [
    [
      -3,
      6,
      0,
      2,
      -1
    ]
  ],
  "expected": 8
}
\`\`\`

**Example 2**

\`\`\`json
{
  "arguments": [
    [
      -5,
      0,
      -1
    ]
  ],
  "expected": 0
}
\`\`\`

**Example 3**

\`\`\`json
{
  "arguments": [
    []
  ],
  "expected": 0
}
\`\`\`

## Constraints

- 0 ≤ number count ≤ 200
- -1000 ≤ each value ≤ 1000

## Skills

arrays, loops, accumulators.

## How to approach it

Identify the inputs and expected return value, trace the provided examples, then write and test your own implementation.
`,sx=`# Count Pairs With Target Sum

Count every pair of positions that reaches a target sum.

## Problem

Given an integer array and a target integer, count pairs of **different indices** \`(i, j)\` where \`i < j\` and \`numbers[i] + numbers[j] == target\`. Duplicate values at different positions create distinct pairs. Return \`0\` if no pairs exist.

## Input and output

Implement the supplied function and **return** a value. Do not print the answer unless your language runner explicitly requests it.

## Examples

**Example 1**

\`\`\`json
{
  "arguments": [
    [
      1,
      3,
      2,
      2,
      4
    ],
    4
  ],
  "expected": 2
}
\`\`\`

**Example 2**

\`\`\`json
{
  "arguments": [
    [
      2,
      2,
      2
    ],
    4
  ],
  "expected": 3
}
\`\`\`

**Example 3**

\`\`\`json
{
  "arguments": [
    [
      1,
      2,
      3
    ],
    9
  ],
  "expected": 0
}
\`\`\`

**Example 4**

\`\`\`json
{
  "arguments": [
    [],
    1
  ],
  "expected": 0
}
\`\`\`

## Constraints

- 0 ≤ array length ≤ 300
- -1000 ≤ numbers and target ≤ 1000

## Skills

arrays, nested-loops, counting.

## How to approach it

Identify the inputs and expected return value, trace the provided examples, then write and test your own implementation.
`,ix=`# Temperature Alert

Choose a status label based on a temperature reading.

## Problem

Given an integer temperature in degrees Fahrenheit, return \`"Freeze"\` when the value is **32 or below**, \`"Heat"\` when it is **90 or above**, and \`"Normal"\` otherwise. Treat boundary values as inclusive.

## Input and output

Implement the supplied function and **return** a value. Do not print the answer unless your language runner explicitly requests it.

## Examples

**Example 1**

\`\`\`json
{
  "arguments": [
    32
  ],
  "expected": "Freeze"
}
\`\`\`

**Example 2**

\`\`\`json
{
  "arguments": [
    90
  ],
  "expected": "Heat"
}
\`\`\`

**Example 3**

\`\`\`json
{
  "arguments": [
    72
  ],
  "expected": "Normal"
}
\`\`\`

**Example 4**

\`\`\`json
{
  "arguments": [
    -5
  ],
  "expected": "Freeze"
}
\`\`\`

## Constraints

- -100 ≤ degrees ≤ 150

## Skills

conditionals, comparisons, functions.

## How to approach it

Identify the inputs and expected return value, trace the provided examples, then write and test your own implementation.
`,ax=`using System;

public static class Solution {
    public static int AttendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,ox=`public class Solution {
    public static int attendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,lx=`export function attendancePercent(present, total) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,ux=`def attendance_percent(present: int, total: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,cx=`using System;

public static class Solution {
    public static int[] CompetitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,dx=`public class Solution {
    public static int[] competitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,px=`export function competitionRanks(scores) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,hx=`def competition_ranks(scores: list[int]) -> list[int]:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,mx=`using System;

public static class Solution {
    public static int ConfidenceTotal(bool[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,fx=`public class Solution {
    public static int confidenceTotal(boolean[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,gx=`export function confidenceTotal(correct, weights) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,yx=`def confidence_total(correct: list[bool], weights: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,vx=`using System;

public static class Solution {
    public static int CountMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,xx=`public class Solution {
    public static int countMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,wx=`export function countMatches(events, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,kx=`def count_matches(events: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,bx=`using System;

public static class Solution {
    public static int LongestWinStreak(bool[] wins) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,_x=`public class Solution {
    public static int longestWinStreak(boolean[] wins) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Sx=`export function longestWinStreak(wins) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Cx=`def longest_win_streak(wins: list[bool]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,jx=`using System;

public static class Solution {
    public static string ScoreLine(string name, int points) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Tx=`public class Solution {
    public static String scoreLine(String name, int points) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Ex=`export function scoreLine(name, points) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Nx=`def score_line(name: str, points: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Px=`using System;

public static class Solution {
    public static int? SecondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Rx=`public class Solution {
    public static Integer secondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Ax=`export function secondLargestDistinct(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Ix=`def second_largest_distinct(numbers: list[int]) -> int | None:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Lx=`using System;

public static class Solution {
    public static int SumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Ox=`public class Solution {
    public static int sumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Dx=`export function sumPositives(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,zx=`def sum_positives(numbers: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Mx=`using System;

public static class Solution {
    public static int TargetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Fx=`public class Solution {
    public static int targetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Ux=`export function targetPairs(numbers, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Wx=`def target_pairs(numbers: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Bx=`using System;

public static class Solution {
    public static string TemperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Hx=`public class Solution {
    public static String temperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,$x=`export function temperatureAlert(degrees) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,qx=`def temperature_alert(degrees: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Vx="attendance-percent",Yx=[{input:[18,20],expected:90},{input:[2,3],expected:66},{input:[0,30],expected:0},{input:[7,7],expected:100}],Gx={challengeId:Vx,cases:Yx},Kx="competition-ranks",Qx=[{input:[[50,50,40,20,40]],expected:[1,1,3,5,3]},{input:[[7,12,9]],expected:[3,1,2]},{input:[[5,5,5]],expected:[1,1,1]},{input:[[]],expected:[]}],Jx={challengeId:Kx,cases:Qx},Xx="confidence-total",Zx=[{input:[[!0,!1,!0],[20,18,15]],expected:35},{input:[[!1,!1],[5,8]],expected:0},{input:[[],[]],expected:0}],e1={challengeId:Xx,cases:Zx},n1="count-matches",t1=[{input:[[2,1,2,3,2],2],expected:3},{input:[[],7],expected:0},{input:[[3,4],5],expected:0}],r1={challengeId:n1,cases:t1},s1="longest-win-streak",i1=[{input:[[!0,!0,!1,!0,!0,!0]],expected:3},{input:[[!1,!1]],expected:0},{input:[[]],expected:0},{input:[[!0,!0]],expected:2}],a1={challengeId:s1,cases:i1},o1="score-line",l1=[{input:["Avery",18],expected:"Avery: 18 points"},{input:["Jordan Lee",0],expected:"Jordan Lee: 0 points"},{input:["Mia",-2],expected:"Mia: -2 points"}],u1={challengeId:o1,cases:l1},c1="second-largest-distinct",d1=[{input:[[3,1,3,2]],expected:2},{input:[[5,5]],expected:null},{input:[[-10,-7,-7,-2]],expected:-7},{input:[[1]],expected:null}],p1={challengeId:c1,cases:d1},h1="sum-positives",m1=[{input:[[-3,6,0,2,-1]],expected:8},{input:[[-5,0,-1]],expected:0},{input:[[]],expected:0}],f1={challengeId:h1,cases:m1},g1="target-pairs",y1=[{input:[[1,3,2,2,4],4],expected:2},{input:[[2,2,2],4],expected:3},{input:[[1,2,3],9],expected:0},{input:[[],1],expected:0}],v1={challengeId:g1,cases:y1},x1="temperature-alert",w1=[{input:[32],expected:"Freeze"},{input:[90],expected:"Heat"},{input:[72],expected:"Normal"},{input:[-5],expected:"Freeze"}],k1={challengeId:x1,cases:w1},b1=["python","java","javascript","csharp"],_1=[{id:"temperature-alert",title:"Temperature Alert",summary:"Choose a status label based on a temperature reading.",difficulty:"Very Easy",points:5,tags:["conditionals","comparisons","functions"],prerequisites:["functions","conditionals"],suggestedCourses:["computer-science-1","game-programming","uil"],languages:["python","java","javascript","csharp"],path:"problems/temperature-alert"},{id:"count-matches",title:"Count Matching Events",summary:"Count how often a particular event code appears.",difficulty:"Easy",points:10,tags:["arrays","loops","comparisons"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/count-matches"},{id:"sum-positives",title:"Sum Positive Values",summary:"Add only the positive values in a data set.",difficulty:"Easy",points:10,tags:["arrays","loops","accumulators"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/sum-positives"},{id:"score-line",title:"Format a Score Line",summary:"Format a player score as a clear single line of text.",difficulty:"Easy",points:10,tags:["strings","formatting","functions"],prerequisites:["variables","strings","functions"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/score-line"},{id:"attendance-percent",title:"Attendance Percentage",summary:"Convert an attendance fraction into a whole-number percentage.",difficulty:"Easy",points:10,tags:["arithmetic","integer-division","functions"],prerequisites:["variables","functions","arithmetic"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/attendance-percent"},{id:"longest-win-streak",title:"Longest Winning Streak",summary:"Find the longest consecutive run of winning results.",difficulty:"Medium",points:15,tags:["arrays","loops","state"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/longest-win-streak"},{id:"confidence-total",title:"Confidence Pool Total",summary:"Compute the points earned from predictions.",difficulty:"Medium",points:15,tags:["arrays","loops","parallel-arrays"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/confidence-total"},{id:"second-largest-distinct",title:"Second Largest Distinct Value",summary:"Return the second-highest unique integer in a collection.",difficulty:"Medium",points:20,tags:["arrays","comparisons","distinct-values"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/second-largest-distinct"},{id:"target-pairs",title:"Count Pairs With Target Sum",summary:"Count pairs of positions that add to a target.",difficulty:"Hard",points:25,tags:["arrays","nested-loops","counting"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/target-pairs"},{id:"competition-ranks",title:"Competition Leaderboard Ranks",summary:"Assign ranks while handling tied scores and skipped positions.",difficulty:"Hard",points:25,tags:["arrays","sorting","ties"],prerequisites:["functions","loops","arrays","sorting"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/competition-ranks"}],wh={languages:b1,challenges:_1},S1=Object.assign({"../challenge-bank/problems/attendance-percent/problem.md":Qv,"../challenge-bank/problems/competition-ranks/problem.md":Jv,"../challenge-bank/problems/confidence-total/problem.md":Xv,"../challenge-bank/problems/count-matches/problem.md":Zv,"../challenge-bank/problems/longest-win-streak/problem.md":ex,"../challenge-bank/problems/score-line/problem.md":nx,"../challenge-bank/problems/second-largest-distinct/problem.md":tx,"../challenge-bank/problems/sum-positives/problem.md":rx,"../challenge-bank/problems/target-pairs/problem.md":sx,"../challenge-bank/problems/temperature-alert/problem.md":ix}),C1=Object.assign({"../challenge-bank/problems/attendance-percent/starters/Solution.cs":ax,"../challenge-bank/problems/attendance-percent/starters/Solution.java":ox,"../challenge-bank/problems/attendance-percent/starters/javascript.js":lx,"../challenge-bank/problems/attendance-percent/starters/python.py":ux,"../challenge-bank/problems/competition-ranks/starters/Solution.cs":cx,"../challenge-bank/problems/competition-ranks/starters/Solution.java":dx,"../challenge-bank/problems/competition-ranks/starters/javascript.js":px,"../challenge-bank/problems/competition-ranks/starters/python.py":hx,"../challenge-bank/problems/confidence-total/starters/Solution.cs":mx,"../challenge-bank/problems/confidence-total/starters/Solution.java":fx,"../challenge-bank/problems/confidence-total/starters/javascript.js":gx,"../challenge-bank/problems/confidence-total/starters/python.py":yx,"../challenge-bank/problems/count-matches/starters/Solution.cs":vx,"../challenge-bank/problems/count-matches/starters/Solution.java":xx,"../challenge-bank/problems/count-matches/starters/javascript.js":wx,"../challenge-bank/problems/count-matches/starters/python.py":kx,"../challenge-bank/problems/longest-win-streak/starters/Solution.cs":bx,"../challenge-bank/problems/longest-win-streak/starters/Solution.java":_x,"../challenge-bank/problems/longest-win-streak/starters/javascript.js":Sx,"../challenge-bank/problems/longest-win-streak/starters/python.py":Cx,"../challenge-bank/problems/score-line/starters/Solution.cs":jx,"../challenge-bank/problems/score-line/starters/Solution.java":Tx,"../challenge-bank/problems/score-line/starters/javascript.js":Ex,"../challenge-bank/problems/score-line/starters/python.py":Nx,"../challenge-bank/problems/second-largest-distinct/starters/Solution.cs":Px,"../challenge-bank/problems/second-largest-distinct/starters/Solution.java":Rx,"../challenge-bank/problems/second-largest-distinct/starters/javascript.js":Ax,"../challenge-bank/problems/second-largest-distinct/starters/python.py":Ix,"../challenge-bank/problems/sum-positives/starters/Solution.cs":Lx,"../challenge-bank/problems/sum-positives/starters/Solution.java":Ox,"../challenge-bank/problems/sum-positives/starters/javascript.js":Dx,"../challenge-bank/problems/sum-positives/starters/python.py":zx,"../challenge-bank/problems/target-pairs/starters/Solution.cs":Mx,"../challenge-bank/problems/target-pairs/starters/Solution.java":Fx,"../challenge-bank/problems/target-pairs/starters/javascript.js":Ux,"../challenge-bank/problems/target-pairs/starters/python.py":Wx,"../challenge-bank/problems/temperature-alert/starters/Solution.cs":Bx,"../challenge-bank/problems/temperature-alert/starters/Solution.java":Hx,"../challenge-bank/problems/temperature-alert/starters/javascript.js":$x,"../challenge-bank/problems/temperature-alert/starters/python.py":qx}),j1=Object.assign({"../challenge-bank/problems/attendance-percent/examples.json":Gx,"../challenge-bank/problems/competition-ranks/examples.json":Jx,"../challenge-bank/problems/confidence-total/examples.json":e1,"../challenge-bank/problems/count-matches/examples.json":r1,"../challenge-bank/problems/longest-win-streak/examples.json":a1,"../challenge-bank/problems/score-line/examples.json":u1,"../challenge-bank/problems/second-largest-distinct/examples.json":p1,"../challenge-bank/problems/sum-positives/examples.json":f1,"../challenge-bank/problems/target-pairs/examples.json":v1,"../challenge-bank/problems/temperature-alert/examples.json":k1}),vo=wh.challenges,bu=wh.languages,Di={python:"Python",java:"Java",javascript:"JavaScript",csharp:"C#"},T1={python:"python.py",java:"Solution.java",javascript:"javascript.js",csharp:"Solution.cs"};function kh(s){return vo.find(i=>i.id===s)||null}function E1(s){return S1[`../challenge-bank/problems/${s}/problem.md`]??""}function N1(s,i){return C1[`../challenge-bank/problems/${s}/starters/${T1[i]}`]??""}function P1(s){var i;return((i=j1[`../challenge-bank/problems/${s}/examples.json`])==null?void 0:i.cases)??[]}const R1=[...new Set(vo.flatMap(s=>s.tags))].sort((s,i)=>s.localeCompare(i)),A1=["Very Easy","Easy","Medium","Hard"];function I1({query:s="",topic:i="all",difficulty:l="all",course:c="all",language:d="all"}={}){const p=s.trim().toLocaleLowerCase();return vo.filter(g=>(!p||[g.title,g.summary,...g.tags].join(" ").toLowerCase().includes(p))&&(i==="all"||g.tags.includes(i))&&(l==="all"||g.difficulty===l)&&(c==="all"||g.suggestedCourses.includes(c))&&(d==="all"||g.languages.includes(d))).slice().sort((g,f)=>g.title.localeCompare(f.title))}function zp(s,i){var p;const[l,...c]=s.split(":"),d=c.join(":");return l==="lesson"?Fs(Wn(i),d):((p=kh(d))==null?void 0:p.title)||d}function L1({grades:s=[],assignments:i=Up,completedLessons:l=[]}){const[c,d]=G.useState("all"),p=c==="all"?s:s.filter(k=>k.courseId===c),g=mu(p),f=Of(p),v=f[0],x=St.map(k=>({...k,...mu(s.filter(j=>j.courseId===k.id))})),w=i.filter(k=>c==="all"||k.courseId===c).map(k=>({...k,status:ho(k.id,{assignments:i,grades:s,completedLessons:l})})).filter(k=>k.status.state==="assigned"||k.status.state==="overdue").sort((k,j)=>k.dueDate.localeCompare(j.dueDate));return a.jsxs("div",{className:"main-content grades-screen",children:[a.jsxs("header",{className:"grades-heading",children:[a.jsxs("div",{children:[a.jsx("div",{className:"eyebrow",children:"Your progress"}),a.jsx("h1",{children:"Grades"}),a.jsx("p",{children:"See your earned points, weekly scores, and work still due."})]}),a.jsxs("label",{className:"grades-filter",children:["Course",a.jsxs("select",{value:c,onChange:k=>d(k.target.value),children:[a.jsx("option",{value:"all",children:"All courses"}),St.map(k=>a.jsx("option",{value:k.id,children:k.label},k.id))]})]})]}),a.jsx("p",{className:"grades-preview-note",children:"These are sample scores to help preview the page. Only graded work counts toward earned points."}),a.jsxs("div",{className:"grades-summary",children:[a.jsxs("div",{className:"grades-stat surface-card",children:[a.jsx(Kf,{size:19}),a.jsx("span",{children:"Points earned"}),a.jsxs("strong",{children:[g.earned," ",a.jsxs("small",{children:["/ ",g.possible]})]}),a.jsx("p",{children:g.percent===null?"No graded work yet":`${g.percent}% of graded points`})]}),a.jsxs("div",{className:"grades-stat surface-card",children:[a.jsx(Yp,{size:19}),a.jsx("span",{children:"Graded activities"}),a.jsx("strong",{children:g.count}),a.jsx("p",{children:"Lessons and challenges"})]}),a.jsxs("div",{className:"grades-stat surface-card",children:[a.jsx(Gf,{size:19}),a.jsx("span",{children:"Most recent scored week"}),a.jsx("strong",{children:v?`${v.earned} / ${v.possible}`:"—"}),a.jsx("p",{children:v?`Week of ${zs(v.week)}`:"No scores yet"})]})]}),a.jsxs("section",{className:"grades-panel surface-card",children:[a.jsx("h2",{children:"Weekly scores"}),f.length?a.jsx("div",{className:"grades-weeks",children:f.map(k=>a.jsxs("div",{className:"grades-week",children:[a.jsxs("div",{children:[a.jsxs("strong",{children:["Week of ",zs(k.week)]}),a.jsxs("small",{children:[k.count," scored ",k.count===1?"activity":"activities"]})]}),a.jsxs("div",{className:"grades-week-score",children:[a.jsxs("strong",{children:[k.earned," / ",k.possible," pts"]}),a.jsx("progress",{value:k.earned,max:Math.max(k.possible,1),"aria-label":`Week of ${zs(k.week)}: ${k.earned} of ${k.possible} points`})]})]},k.week))}):a.jsx("p",{children:"No graded work in this selection."})]}),c==="all"&&a.jsxs("section",{className:"grades-panel surface-card",children:[a.jsx("h2",{children:"By course"}),a.jsx("div",{className:"grades-course-list",children:x.map(k=>a.jsxs("div",{className:"grades-course-row","data-course":k.id,children:[a.jsx("span",{className:"grades-course-dot","aria-hidden":"true"}),a.jsx("strong",{children:k.label}),a.jsx("span",{children:k.count?`${k.earned} / ${k.possible} pts`:"No grades yet"})]},k.id))})]}),a.jsxs("section",{className:"grades-panel surface-card",children:[a.jsx("h2",{children:"Scored work"}),p.length?a.jsx("div",{className:"grades-entries",children:p.slice().sort((k,j)=>j.gradedAt.localeCompare(k.gradedAt)).map(k=>{var j;return a.jsxs("div",{className:"grades-entry",children:[a.jsxs("div",{children:[a.jsx("strong",{children:zp(k.id,k.courseId)}),a.jsxs("small",{children:[a.jsx(ju,{size:13}),((j=Wn(k.courseId))==null?void 0:j.label)||k.courseId," · ",to(k.gradedAt)]})]}),a.jsxs("strong",{children:[k.earned," / ",k.possible," pts"]})]},k.id)})}):a.jsx("p",{children:"No scored lessons or challenges yet."})]}),a.jsxs("section",{className:"grades-panel surface-card",children:[a.jsx("h2",{children:"Still to complete"}),w.length?a.jsx("div",{className:"grades-entries",children:w.map(k=>{var j;return a.jsxs("div",{className:"grades-entry",children:[a.jsxs("div",{children:[a.jsx("strong",{children:zp(k.id,k.courseId)}),a.jsx("small",{children:((j=Wn(k.courseId))==null?void 0:j.label)||k.courseId})]}),a.jsxs("div",{className:"grades-due-meta",children:[a.jsx("span",{className:`assignment-status ${k.status.state}`,children:k.status.state==="overdue"?"Overdue":"Assigned"}),a.jsxs("small",{children:["Due ",to(k.dueDate)]})]})]},k.id)})}):a.jsx("p",{children:"Nothing outstanding in this selection."})]})]})}function O1({filterCourse:s,onSelect:i,onBrowseCourse:l,grades:c=[]}){const[d,p]=G.useState(""),[g,f]=G.useState("all"),[v,x]=G.useState("all"),[w,k]=G.useState("all"),j=s||"all",F=G.useMemo(()=>I1({query:d,difficulty:g,topic:v,language:w,course:j}),[d,g,v,w,j]),H=()=>{p(""),f("all"),x("all"),k("all"),l(null)};return a.jsxs("div",{className:"main-content challenge-bank-screen",children:[a.jsxs("header",{className:"challenge-bank-intro",children:[a.jsxs("div",{className:"eyebrow",children:[a.jsx(fo,{size:15})," Shared programming practice"]}),a.jsx("h1",{children:"Challenge Bank"}),a.jsx("p",{children:"One problem library for every class. Choose Python, Java, JavaScript, or C# when solving—without duplicating problems across courses."}),a.jsxs("div",{className:"challenge-summary",children:[a.jsx("strong",{children:vo.length})," original challenges · ",a.jsx("strong",{children:"4"})," languages · ",a.jsx("strong",{children:"1"})," shared library"]})]}),a.jsxs("section",{className:"challenge-filters surface-card","aria-label":"Filter challenges",children:[a.jsxs("div",{className:"filter-title",children:[a.jsx(ng,{size:17}),a.jsx("strong",{children:"Find a challenge"}),a.jsxs("button",{type:"button",className:"filter-clear",onClick:H,children:[a.jsx(Au,{size:14})," Clear filters"]})]}),a.jsxs("div",{className:"challenge-filter-grid",children:[a.jsxs("label",{className:"challenge-search-label",children:["Search",a.jsxs("span",{className:"challenge-search",children:[a.jsx(Vp,{size:16}),a.jsx("input",{type:"search",value:d,placeholder:"Problem, skill, or topic",onChange:P=>p(P.target.value)})]})]}),a.jsxs("label",{children:["Course view",a.jsxs("select",{value:j,onChange:P=>l(P.target.value==="all"?null:P.target.value),children:[a.jsx("option",{value:"all",children:"All courses"}),St.filter(P=>P.id!=="tsi-math").map(P=>a.jsx("option",{value:P.id,children:P.label},P.id))]})]}),a.jsxs("label",{children:["Difficulty",a.jsxs("select",{value:g,onChange:P=>f(P.target.value),children:[a.jsx("option",{value:"all",children:"Any difficulty"}),A1.map(P=>a.jsx("option",{value:P,children:P},P))]})]}),a.jsxs("label",{children:["Topic",a.jsxs("select",{value:v,onChange:P=>x(P.target.value),children:[a.jsx("option",{value:"all",children:"Any topic"}),R1.map(P=>a.jsx("option",{value:P,children:P},P))]})]}),a.jsxs("label",{children:["Language",a.jsxs("select",{value:w,onChange:P=>k(P.target.value),children:[a.jsx("option",{value:"all",children:"Any language"}),bu.map(P=>a.jsx("option",{value:P,children:Di[P]},P))]})]})]}),a.jsx("p",{className:"challenge-filter-note",children:"Course matching is informational. Confirm students have learned the prerequisite skills before assigning problems."})]}),a.jsxs("div",{className:"challenge-results-heading",children:[a.jsxs("h2",{children:["Available challenges ",a.jsxs("span",{children:["(",F.length,")"]})]}),a.jsx("span",{children:"Alphabetical order"})]}),F.length?a.jsx("div",{className:"challenge-card-grid",children:F.map(P=>a.jsxs("a",{className:"challenge-card surface-card",href:Wp(P.id),onClick:z=>{z.button!==0||z.metaKey||z.ctrlKey||z.shiftKey||z.altKey||(z.preventDefault(),i(P.id))},children:[a.jsxs("div",{className:"challenge-card-top",children:[a.jsx("span",{className:"challenge-level level-"+P.difficulty.toLowerCase().replace(" ","-"),children:P.difficulty}),a.jsx("span",{className:"challenge-points",children:Mi("challenge:"+P.id,c)?`${Mi("challenge:"+P.id,c).earned} / ${Mi("challenge:"+P.id,c).possible} pts earned`:`${P.points} pts available`})]}),a.jsx("h3",{children:P.title}),a.jsx("p",{children:P.summary}),a.jsx("div",{className:"challenge-tags",children:P.tags.map(z=>a.jsx("span",{children:z},z))}),a.jsxs("div",{className:"challenge-course-tags",children:[P.suggestedCourses.slice(0,3).map(z=>{var q,ue;return a.jsx("span",{title:(q=Wn(z))==null?void 0:q.label,children:((ue=Wn(z))==null?void 0:ue.short)||z},z)}),P.suggestedCourses.length>3&&a.jsxs("span",{children:["+",P.suggestedCourses.length-3]})]}),a.jsxs("span",{className:"challenge-open",children:["Open challenge ",a.jsx(Hp,{size:16})]})]},P.id))}):a.jsxs("div",{className:"challenge-empty surface-card",children:[a.jsx("h3",{children:"No matching challenges"}),a.jsx("p",{children:"Try a broader topic or clear the filters."}),a.jsx("button",{className:"btn",onClick:H,children:"Show all challenges"})]}),a.jsx("p",{className:"hint challenge-bottom-note",children:"Choose a problem, work through its examples, and compare your approach. Practice here does not count toward your grade."})]})}const D1=(s,i)=>"designlab:challenge-code:"+s+":"+i;function z1({challengeId:s,onBack:i,grades:l=[]}){const c=kh(s),d=Mi("challenge:"+s,l),[p,g]=Be("designlab:challenge-language","python"),f=bu.includes(p)?p:"python",v=D1(s,f),x=N1(s,f),[w,k]=G.useState(()=>lo(v)??x),[j,F]=G.useState("Run and Check are simulations. This preview does not execute code."),[H,P]=G.useState(""),[z,q]=G.useState("Choose Check to review the published examples."),[ue,pe]=G.useState("Console"),[ae,ce]=Be("designlab:challenge-attempts",[]),[ye,X]=Be("designlab:challenge-left-width",420),[oe,$e]=Be("designlab:challenge-editor-height",330),Se=G.useRef(null),W=G.useRef(null),Ee=P1(s),Z=ae.filter(I=>I.challengeId===s);G.useEffect(()=>{k(lo(v)??x),F("Run / Check are design-only controls—no program is executed."),P(""),q("Choose Check to review the published examples."),pe("Console")},[v,x]);const xe=I=>{k(I),uo(v,I),P("Draft saved in this browser for "+Di[f]+".")},Ce=I=>{if(I==="Reset"){xe(x),F("Starter restored; nothing was executed."),q("Choose Check to review the published examples."),pe("Console");return}if(I==="Save"){uo(v,w),P("Draft saved in this browser.");return}if(I==="Submit"){ce($=>[...$,{id:"demo-"+Date.now()+"-"+Math.random().toString(36).slice(2),challengeId:s,language:f,code:w,submittedAt:new Date().toISOString()}]),P("Demo hand-in recorded locally. No code was graded or delivered to a teacher.");return}const ee=Ee.map(($,C)=>"Example "+(C+1)+": input "+JSON.stringify($.input)+" → expected "+JSON.stringify($.expected)).join(`
`);I==="Check"?(q(`Published examples (not checked against your code):

`+ee),pe("Checks")):(F(`Expected sample outputs (your code has not run):

`+ee),pe("Console"))},en=I=>{if(!Se.current)return;const ee=Se.current.getBoundingClientRect();X(Math.max(280,Math.min(ee.width-360,I.clientX-ee.left)))},je=I=>{if(!W.current)return;const ee=W.current.getBoundingClientRect();$e(Math.max(180,Math.min(ee.height-130,I.clientY-ee.top)))};return c?a.jsxs("div",{className:"challenge-detail-page",children:[a.jsxs("div",{className:"challenge-breadcrumb",children:[a.jsxs("button",{onClick:i,children:[a.jsx(Vf,{size:16})," Challenge Bank"]}),a.jsx("span",{children:"/"}),a.jsx("span",{children:c.title})]}),a.jsxs("header",{className:"challenge-detail-heading surface-card",children:[a.jsxs("div",{className:"eyebrow",children:["Shared challenge · ",c.difficulty," · ",c.points," possible points"]}),a.jsx("h1",{children:c.title}),a.jsx("p",{children:c.summary}),d&&a.jsxs("div",{className:"challenge-earned-points",children:["Completed · ",d.earned," / ",d.possible," points earned"]}),a.jsxs("div",{className:"challenge-prerequisites",children:[a.jsx("strong",{children:"Prerequisites:"}),c.prerequisites.map(I=>a.jsx("span",{children:I},I))]})]}),a.jsxs("div",{className:"challenge-workspace",ref:Se,style:{"--challenge-left":ye+"px"},children:[a.jsxs("section",{className:"challenge-instructions",children:[a.jsxs("div",{className:"pane-header",children:[a.jsxs("strong",{children:[a.jsx(Yf,{size:16})," Problem & examples"]}),a.jsxs("span",{className:"challenge-points",children:[c.points," pts"]})]}),a.jsx("div",{className:"markdown-preview challenge-markdown",dangerouslySetInnerHTML:{__html:hh(E1(s))}})]}),a.jsx(so,{axis:"columns",onDrag:en}),a.jsxs("section",{className:"challenge-editor-panel",children:[a.jsxs("div",{className:"pane-header",children:[a.jsxs("strong",{children:[a.jsx(mo,{size:16})," Solution editor"]}),a.jsxs("label",{className:"challenge-language-selector",children:["Language ",a.jsx("select",{"aria-label":"Solution language",value:f,onChange:I=>g(I.target.value),children:bu.map(I=>a.jsx("option",{value:I,children:Di[I]},I))})]})]}),a.jsxs("div",{className:"challenge-code-layout",ref:W,style:{"--challenge-editor-height":oe+"px"},children:[a.jsx("textarea",{className:"code-editor challenge-editor",spellCheck:!1,"aria-label":Di[f]+" solution editor",value:w,onChange:I=>xe(I.target.value)}),a.jsx(so,{axis:"rows",onDrag:je}),a.jsxs("div",{className:"console-pane",children:[a.jsxs("div",{className:"console-heading",children:[a.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Challenge results",children:["Console","Checks"].map(I=>a.jsxs("button",{type:"button",role:"tab","aria-selected":ue===I,className:ue===I?"active":"",onClick:()=>pe(I),children:[I==="Console"&&a.jsx(hg,{size:14})," ",I]},I))}),a.jsx("span",{children:"Demo"})]}),a.jsx("pre",{role:"tabpanel","aria-label":ue==="Checks"?"Checks":"Console output",children:ue==="Checks"?z:j})]})]}),a.jsxs("div",{className:"editor-controls challenge-controls",children:[a.jsxs("div",{children:[a.jsx("button",{className:"btn",onClick:()=>Ce("Run"),children:"Run"}),a.jsxs("button",{className:"btn",onClick:()=>Ce("Check"),children:[a.jsx(Qf,{size:15})," Check"]}),a.jsxs("button",{className:"btn",onClick:()=>Ce("Reset"),children:[a.jsx(Nu,{size:15})," Reset"]})]}),a.jsxs("div",{children:[a.jsxs("button",{className:"btn",onClick:()=>Ce("Save"),children:[a.jsx(ro,{size:15})," Save"]}),a.jsxs("button",{className:"btn submit",onClick:()=>Ce("Submit"),children:[a.jsx(Pu,{size:15})," Demo submit"]})]})]}),a.jsx("p",{className:"challenge-editor-message",role:"status",children:H||"Drag the dividers to resize your workspace. Each language keeps its own draft."})]})]}),Z.length>0&&a.jsxs("section",{className:"challenge-history surface-card",children:[a.jsxs("h2",{children:["Demo hand-ins (",Z.length,")"]}),a.jsx("p",{children:"These are saved only in your browser, not real grades."}),Z.slice().reverse().map(I=>a.jsxs("details",{children:[a.jsxs("summary",{children:[Di[I.language]," · ",new Date(I.submittedAt).toLocaleString()]}),a.jsx("pre",{children:I.code})]},I.id))]})]}):a.jsxs("div",{className:"main-content",children:[a.jsx("h1",{children:"Challenge not found"}),a.jsx("button",{className:"btn",onClick:i,children:"Back to bank"})]})}function M1(){const[s,i]=G.useState(()=>nu()),[l,c]=Be("designlab:course","computer-science-1"),[d,p]=Be("designlab:theme","dark"),[g,f]=Be("designlab:accent","purple"),[v,x]=Be("designlab:course-colors",{}),[w,k]=Be("designlab:sidebar",!0),[j,F]=Be("designlab:completed-lessons",[]),[H]=Be("designlab:sample-gradebook",zf),P=H.filter(Z=>Z.courseId!=="computer-science-1"),z=Up.filter(Z=>Z.courseId!=="computer-science-1"),q=Df(j,P),[ue,pe]=Be("designlab:students",Za),[ae,ce]=Be("designlab:journal-submissions",hf);G.useEffect(()=>{document.documentElement.dataset.theme=d,document.documentElement.dataset.accent=g},[d,g]),G.useEffect(()=>{Nf(v,St)},[v]);function ye(Z,xe){!St.some(Ce=>Ce.id===Z)||!po(xe)||x(Ce=>({...Ce&&typeof Ce=="object"?Ce:{},[Z]:xe.toUpperCase()}))}function X(Z){x(xe=>{const Ce={...xe&&typeof xe=="object"?xe:{}};return delete Ce[Z],Ce})}G.useEffect(()=>{var xe;s.page==="course"&&c(s.courseId);const Z=s.page==="course"?(xe=Wn(s.courseId))==null?void 0:xe.label:s.page==="teacher"?"Teacher dashboard":s.page==="grades"?"Grades":s.page==="journals"?"Weekly journals":s.page==="challenges"?"Challenge Bank":s.page==="challenge"?"Coding challenge":"Your playgrounds";document.title=`${Z||"Playground"} | Ms. Whitby's Playground — React Lab`},[s.page,s.courseId,c]),G.useEffect(()=>{const Z=()=>i(nu());return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);const oe=G.useCallback(Z=>{window.location.pathname!==Z&&window.history.pushState({},"",Z),i(nu()),window.scrollTo({top:0,behavior:"auto"})},[]);function $e(Z,xe){if(!Z)return oe(Oi());c(Z),oe(Cu(Z,xe))}function Se(Z){Z==="teacher"?oe(cp()):Z==="journals"?oe(Wf()):Z==="grades"?oe(Bf()):Z==="challenges"?oe(Os()):Z==="course"?$e(s.page==="course"?s.courseId:l):oe(Oi())}const W=s.page,Ee=s.courseId||l;return a.jsxs("div",{className:"app-shell",children:[a.jsx(xg,{sidebarOpen:w,onToggleSidebar:()=>k(!w),onHome:()=>oe(Oi()),theme:d,setTheme:p,accent:g,setAccent:f}),a.jsxs("div",{className:_t("app-layout",!w&&"sidebar-closed"),children:[a.jsx(kg,{open:w,page:W,courseId:Ee,lessonId:s.page==="course"?s.lessonId:null,setPage:Se,openCourse:$e,completedLessons:q,assignments:z,grades:P}),a.jsx("main",{className:"main-panel",children:W==="home"?a.jsx(jg,{completedLessons:q,openCourse:$e,openTeacher:()=>oe(cp()),openChallenges:()=>oe(Os())}):W==="course"?a.jsx(Nv,{courseId:s.courseId,lessonId:s.lessonId,openCourse:$e,openChallenges:Z=>oe(Os(Z)),completedLessons:q,assignments:z,grades:P,onToggleLessonComplete:Z=>F(xe=>Rf(xe,Z)),courseColors:v,onSetCourseColor:ye,onResetCourseColor:X},s.courseId):W==="grades"?a.jsx(L1,{grades:P,assignments:z,completedLessons:q}):W==="challenges"?a.jsx(O1,{grades:P,filterCourse:s.filterCourse,onSelect:Z=>oe(Wp(Z)),onBrowseCourse:Z=>oe(Os(Z))}):W==="challenge"?a.jsx(z1,{challengeId:s.challengeId,grades:P,onBack:()=>oe(Os())},s.challengeId):W==="journals"?a.jsx(Kv,{submissions:ae,setSubmissions:ce}):W==="teacher"?a.jsx(Yv,{students:ue,setStudents:pe,journalSubmissions:ae}):a.jsxs("div",{className:"main-content route-not-found",children:[a.jsx("div",{className:"eyebrow",children:"Link not found"}),a.jsx("h1",{children:"That playground page doesn't exist."}),a.jsx("p",{children:"Check the link or return to the list of playgrounds."}),a.jsx("button",{className:"btn primary",onClick:()=>oe(Oi()),children:"See all playgrounds"})]})})]}),a.jsx(bg,{})]})}lf.createRoot(document.getElementById("root")).render(a.jsx(nf.StrictMode,{children:a.jsx(M1,{})}));
