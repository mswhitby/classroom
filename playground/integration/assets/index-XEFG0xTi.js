var Rg=Object.defineProperty;var Ig=(l,u,d)=>u in l?Rg(l,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[u]=d;var on=(l,u,d)=>Ig(l,typeof u!="symbol"?u+"":u,d);(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))f(g);new MutationObserver(g=>{for(const v of g)if(v.type==="childList")for(const k of v.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&f(k)}).observe(document,{childList:!0,subtree:!0});function d(g){const v={};return g.integrity&&(v.integrity=g.integrity),g.referrerPolicy&&(v.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?v.credentials="include":g.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function f(g){if(g.ep)return;g.ep=!0;const v=d(g);fetch(g.href,v)}})();function pm(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Lp={exports:{}},Yu={},Ap={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function Og(){if(Jh)return Pt;Jh=1;var l=Symbol.for("react.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),k=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),O=Symbol.iterator;function L(D){return D===null||typeof D!="object"?null:(D=O&&D[O]||D["@@iterator"],typeof D=="function"?D:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,B={};function J(D,Z,Ce){this.props=D,this.context=Z,this.refs=B,this.updater=Ce||Y}J.prototype.isReactComponent={},J.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},J.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function I(){}I.prototype=J.prototype;function z(D,Z,Ce){this.props=D,this.context=Z,this.refs=B,this.updater=Ce||Y}var q=z.prototype=new I;q.constructor=z,U(q,J.prototype),q.isPureReactComponent=!0;var W=Array.isArray,G=Object.prototype.hasOwnProperty,X={current:null},se={key:!0,ref:!0,__self:!0,__source:!0};function ve(D,Z,Ce){var Ie,qe={},Oe=null,_e=null;if(Z!=null)for(Ie in Z.ref!==void 0&&(_e=Z.ref),Z.key!==void 0&&(Oe=""+Z.key),Z)G.call(Z,Ie)&&!se.hasOwnProperty(Ie)&&(qe[Ie]=Z[Ie]);var Ue=arguments.length-2;if(Ue===1)qe.children=Ce;else if(1<Ue){for(var $e=Array(Ue),tt=0;tt<Ue;tt++)$e[tt]=arguments[tt+2];qe.children=$e}if(D&&D.defaultProps)for(Ie in Ue=D.defaultProps,Ue)qe[Ie]===void 0&&(qe[Ie]=Ue[Ie]);return{$$typeof:l,type:D,key:Oe,ref:_e,props:qe,_owner:X.current}}function De(D,Z){return{$$typeof:l,type:D.type,key:Z,ref:D.ref,props:D.props,_owner:D._owner}}function be(D){return typeof D=="object"&&D!==null&&D.$$typeof===l}function ne(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Ce){return Z[Ce]})}var Le=/\/+/g;function ue(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?ne(""+D.key):Z.toString(36)}function xe(D,Z,Ce,Ie,qe){var Oe=typeof D;(Oe==="undefined"||Oe==="boolean")&&(D=null);var _e=!1;if(D===null)_e=!0;else switch(Oe){case"string":case"number":_e=!0;break;case"object":switch(D.$$typeof){case l:case u:_e=!0}}if(_e)return _e=D,qe=qe(_e),D=Ie===""?"."+ue(_e,0):Ie,W(qe)?(Ce="",D!=null&&(Ce=D.replace(Le,"$&/")+"/"),xe(qe,Z,Ce,"",function(tt){return tt})):qe!=null&&(be(qe)&&(qe=De(qe,Ce+(!qe.key||_e&&_e.key===qe.key?"":(""+qe.key).replace(Le,"$&/")+"/")+D)),Z.push(qe)),1;if(_e=0,Ie=Ie===""?".":Ie+":",W(D))for(var Ue=0;Ue<D.length;Ue++){Oe=D[Ue];var $e=Ie+ue(Oe,Ue);_e+=xe(Oe,Z,Ce,$e,qe)}else if($e=L(D),typeof $e=="function")for(D=$e.call(D),Ue=0;!(Oe=D.next()).done;)Oe=Oe.value,$e=Ie+ue(Oe,Ue++),_e+=xe(Oe,Z,Ce,$e,qe);else if(Oe==="object")throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return _e}function A(D,Z,Ce){if(D==null)return D;var Ie=[],qe=0;return xe(D,Ie,"","",function(Oe){return Z.call(Ce,Oe,qe++)}),Ie}function ee(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(Ce){(D._status===0||D._status===-1)&&(D._status=1,D._result=Ce)},function(Ce){(D._status===0||D._status===-1)&&(D._status=2,D._result=Ce)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var Q={current:null},T={transition:null},P={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:T,ReactCurrentOwner:X};function H(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:A,forEach:function(D,Z,Ce){A(D,function(){Z.apply(this,arguments)},Ce)},count:function(D){var Z=0;return A(D,function(){Z++}),Z},toArray:function(D){return A(D,function(Z){return Z})||[]},only:function(D){if(!be(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Pt.Component=J,Pt.Fragment=d,Pt.Profiler=g,Pt.PureComponent=z,Pt.StrictMode=f,Pt.Suspense=w,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,Pt.act=H,Pt.cloneElement=function(D,Z,Ce){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ie=U({},D.props),qe=D.key,Oe=D.ref,_e=D._owner;if(Z!=null){if(Z.ref!==void 0&&(Oe=Z.ref,_e=X.current),Z.key!==void 0&&(qe=""+Z.key),D.type&&D.type.defaultProps)var Ue=D.type.defaultProps;for($e in Z)G.call(Z,$e)&&!se.hasOwnProperty($e)&&(Ie[$e]=Z[$e]===void 0&&Ue!==void 0?Ue[$e]:Z[$e])}var $e=arguments.length-2;if($e===1)Ie.children=Ce;else if(1<$e){Ue=Array($e);for(var tt=0;tt<$e;tt++)Ue[tt]=arguments[tt+2];Ie.children=Ue}return{$$typeof:l,type:D.type,key:qe,ref:Oe,props:Ie,_owner:_e}},Pt.createContext=function(D){return D={$$typeof:k,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:v,_context:D},D.Consumer=D},Pt.createElement=ve,Pt.createFactory=function(D){var Z=ve.bind(null,D);return Z.type=D,Z},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(D){return{$$typeof:_,render:D}},Pt.isValidElement=be,Pt.lazy=function(D){return{$$typeof:N,_payload:{_status:-1,_result:D},_init:ee}},Pt.memo=function(D,Z){return{$$typeof:C,type:D,compare:Z===void 0?null:Z}},Pt.startTransition=function(D){var Z=T.transition;T.transition={};try{D()}finally{T.transition=Z}},Pt.unstable_act=H,Pt.useCallback=function(D,Z){return Q.current.useCallback(D,Z)},Pt.useContext=function(D){return Q.current.useContext(D)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(D){return Q.current.useDeferredValue(D)},Pt.useEffect=function(D,Z){return Q.current.useEffect(D,Z)},Pt.useId=function(){return Q.current.useId()},Pt.useImperativeHandle=function(D,Z,Ce){return Q.current.useImperativeHandle(D,Z,Ce)},Pt.useInsertionEffect=function(D,Z){return Q.current.useInsertionEffect(D,Z)},Pt.useLayoutEffect=function(D,Z){return Q.current.useLayoutEffect(D,Z)},Pt.useMemo=function(D,Z){return Q.current.useMemo(D,Z)},Pt.useReducer=function(D,Z,Ce){return Q.current.useReducer(D,Z,Ce)},Pt.useRef=function(D){return Q.current.useRef(D)},Pt.useState=function(D){return Q.current.useState(D)},Pt.useSyncExternalStore=function(D,Z,Ce){return Q.current.useSyncExternalStore(D,Z,Ce)},Pt.useTransition=function(){return Q.current.useTransition()},Pt.version="18.3.1",Pt}var Xh;function dh(){return Xh||(Xh=1,Ap.exports=Og()),Ap.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function Dg(){if(Qh)return Yu;Qh=1;var l=dh(),u=Symbol.for("react.element"),d=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,g=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function k(_,w,C){var N,O={},L=null,Y=null;C!==void 0&&(L=""+C),w.key!==void 0&&(L=""+w.key),w.ref!==void 0&&(Y=w.ref);for(N in w)f.call(w,N)&&!v.hasOwnProperty(N)&&(O[N]=w[N]);if(_&&_.defaultProps)for(N in w=_.defaultProps,w)O[N]===void 0&&(O[N]=w[N]);return{$$typeof:u,type:_,key:L,ref:Y,props:O,_owner:g.current}}return Yu.Fragment=d,Yu.jsx=k,Yu.jsxs=k,Yu}var Zh;function Mg(){return Zh||(Zh=1,Lp.exports=Dg()),Lp.exports}var c=Mg(),ye=dh();const zg=pm(ye);var md={},Rp={exports:{}},ti={},Ip={exports:{}},Op={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function Fg(){return ef||(ef=1,(function(l){function u(T,P){var H=T.length;T.push(P);e:for(;0<H;){var D=H-1>>>1,Z=T[D];if(0<g(Z,P))T[D]=P,T[H]=Z,H=D;else break e}}function d(T){return T.length===0?null:T[0]}function f(T){if(T.length===0)return null;var P=T[0],H=T.pop();if(H!==P){T[0]=H;e:for(var D=0,Z=T.length,Ce=Z>>>1;D<Ce;){var Ie=2*(D+1)-1,qe=T[Ie],Oe=Ie+1,_e=T[Oe];if(0>g(qe,H))Oe<Z&&0>g(_e,qe)?(T[D]=_e,T[Oe]=H,D=Oe):(T[D]=qe,T[Ie]=H,D=Ie);else if(Oe<Z&&0>g(_e,H))T[D]=_e,T[Oe]=H,D=Oe;else break e}}return P}function g(T,P){var H=T.sortIndex-P.sortIndex;return H!==0?H:T.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var v=performance;l.unstable_now=function(){return v.now()}}else{var k=Date,_=k.now();l.unstable_now=function(){return k.now()-_}}var w=[],C=[],N=1,O=null,L=3,Y=!1,U=!1,B=!1,J=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(T){for(var P=d(C);P!==null;){if(P.callback===null)f(C);else if(P.startTime<=T)f(C),P.sortIndex=P.expirationTime,u(w,P);else break;P=d(C)}}function W(T){if(B=!1,q(T),!U)if(d(w)!==null)U=!0,ee(G);else{var P=d(C);P!==null&&Q(W,P.startTime-T)}}function G(T,P){U=!1,B&&(B=!1,I(ve),ve=-1),Y=!0;var H=L;try{for(q(P),O=d(w);O!==null&&(!(O.expirationTime>P)||T&&!ne());){var D=O.callback;if(typeof D=="function"){O.callback=null,L=O.priorityLevel;var Z=D(O.expirationTime<=P);P=l.unstable_now(),typeof Z=="function"?O.callback=Z:O===d(w)&&f(w),q(P)}else f(w);O=d(w)}if(O!==null)var Ce=!0;else{var Ie=d(C);Ie!==null&&Q(W,Ie.startTime-P),Ce=!1}return Ce}finally{O=null,L=H,Y=!1}}var X=!1,se=null,ve=-1,De=5,be=-1;function ne(){return!(l.unstable_now()-be<De)}function Le(){if(se!==null){var T=l.unstable_now();be=T;var P=!0;try{P=se(!0,T)}finally{P?ue():(X=!1,se=null)}}else X=!1}var ue;if(typeof z=="function")ue=function(){z(Le)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,A=xe.port2;xe.port1.onmessage=Le,ue=function(){A.postMessage(null)}}else ue=function(){J(Le,0)};function ee(T){se=T,X||(X=!0,ue())}function Q(T,P){ve=J(function(){T(l.unstable_now())},P)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(T){T.callback=null},l.unstable_continueExecution=function(){U||Y||(U=!0,ee(G))},l.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):De=0<T?Math.floor(1e3/T):5},l.unstable_getCurrentPriorityLevel=function(){return L},l.unstable_getFirstCallbackNode=function(){return d(w)},l.unstable_next=function(T){switch(L){case 1:case 2:case 3:var P=3;break;default:P=L}var H=L;L=P;try{return T()}finally{L=H}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(T,P){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var H=L;L=T;try{return P()}finally{L=H}},l.unstable_scheduleCallback=function(T,P,H){var D=l.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?D+H:D):H=D,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=H+Z,T={id:N++,callback:P,priorityLevel:T,startTime:H,expirationTime:Z,sortIndex:-1},H>D?(T.sortIndex=H,u(C,T),d(w)===null&&T===d(C)&&(B?(I(ve),ve=-1):B=!0,Q(W,H-D))):(T.sortIndex=Z,u(w,T),U||Y||(U=!0,ee(G))),T},l.unstable_shouldYield=ne,l.unstable_wrapCallback=function(T){var P=L;return function(){var H=L;L=P;try{return T.apply(this,arguments)}finally{L=H}}}})(Op)),Op}var tf;function Wg(){return tf||(tf=1,Ip.exports=Fg()),Ip.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function Hg(){if(nf)return ti;nf=1;var l=dh(),u=Wg();function d(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,g={};function v(t,r){k(t,r),k(t+"Capture",r)}function k(t,r){for(g[t]=r,t=0;t<r.length;t++)f.add(r[t])}var _=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=Object.prototype.hasOwnProperty,C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},O={};function L(t){return w.call(O,t)?!0:w.call(N,t)?!1:C.test(t)?O[t]=!0:(N[t]=!0,!1)}function Y(t,r,o,p){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return p?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function U(t,r,o,p){if(r===null||typeof r>"u"||Y(t,r,o,p))return!0;if(p)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function B(t,r,o,p,m,x,R){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=p,this.attributeNamespace=m,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=x,this.removeEmptyString=R}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){J[t]=new B(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];J[r]=new B(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){J[t]=new B(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){J[t]=new B(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){J[t]=new B(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){J[t]=new B(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){J[t]=new B(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){J[t]=new B(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){J[t]=new B(t,5,!1,t.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function z(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(I,z);J[r]=new B(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(I,z);J[r]=new B(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(I,z);J[r]=new B(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){J[t]=new B(t,1,!1,t.toLowerCase(),null,!1,!1)}),J.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){J[t]=new B(t,1,!1,t.toLowerCase(),null,!0,!0)});function q(t,r,o,p){var m=J.hasOwnProperty(r)?J[r]:null;(m!==null?m.type!==0:p||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(U(r,o,m,p)&&(o=null),p||m===null?L(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):m.mustUseProperty?t[m.propertyName]=o===null?m.type===3?!1:"":o:(r=m.attributeName,p=m.attributeNamespace,o===null?t.removeAttribute(r):(m=m.type,o=m===3||m===4&&o===!0?"":""+o,p?t.setAttributeNS(p,r,o):t.setAttribute(r,o))))}var W=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),X=Symbol.for("react.portal"),se=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),De=Symbol.for("react.profiler"),be=Symbol.for("react.provider"),ne=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),T=Symbol.iterator;function P(t){return t===null||typeof t!="object"?null:(t=T&&t[T]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,D;function Z(t){if(D===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+t}var Ce=!1;function Ie(t,r){if(!t||Ce)return"";Ce=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(fe){var p=fe}Reflect.construct(t,[],r)}else{try{r.call()}catch(fe){p=fe}t.call(r.prototype)}else{try{throw Error()}catch(fe){p=fe}t()}}catch(fe){if(fe&&p&&typeof fe.stack=="string"){for(var m=fe.stack.split(`
`),x=p.stack.split(`
`),R=m.length-1,V=x.length-1;1<=R&&0<=V&&m[R]!==x[V];)V--;for(;1<=R&&0<=V;R--,V--)if(m[R]!==x[V]){if(R!==1||V!==1)do if(R--,V--,0>V||m[R]!==x[V]){var te=`
`+m[R].replace(" at new "," at ");return t.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",t.displayName)),te}while(1<=R&&0<=V);break}}}finally{Ce=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?Z(t):""}function qe(t){switch(t.tag){case 5:return Z(t.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return t=Ie(t.type,!1),t;case 11:return t=Ie(t.type.render,!1),t;case 1:return t=Ie(t.type,!0),t;default:return""}}function Oe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case se:return"Fragment";case X:return"Portal";case De:return"Profiler";case ve:return"StrictMode";case ue:return"Suspense";case xe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ne:return(t.displayName||"Context")+".Consumer";case be:return(t._context.displayName||"Context")+".Provider";case Le:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case A:return r=t.displayName||null,r!==null?r:Oe(t.type)||"Memo";case ee:r=t._payload,t=t._init;try{return Oe(t(r))}catch{}}return null}function _e(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(r);case 8:return r===ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ue(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $e(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function tt(t){var r=$e(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),p=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var m=o.get,x=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return m.call(this)},set:function(R){p=""+R,x.call(this,R)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return p},setValue:function(R){p=""+R},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ke(t){t._valueTracker||(t._valueTracker=tt(t))}function zt(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),p="";return t&&(p=$e(t)?t.checked?"true":"false":t.value),t=p,t!==o?(r.setValue(t),!0):!1}function Yt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ht(t,r){var o=r.checked;return H({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Tt(t,r){var o=r.defaultValue==null?"":r.defaultValue,p=r.checked!=null?r.checked:r.defaultChecked;o=Ue(r.value!=null?r.value:o),t._wrapperState={initialChecked:p,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ze(t,r){r=r.checked,r!=null&&q(t,"checked",r,!1)}function We(t,r){Ze(t,r);var o=Ue(r.value),p=r.type;if(o!=null)p==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(p==="submit"||p==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?ct(t,r.type,o):r.hasOwnProperty("defaultValue")&&ct(t,r.type,Ue(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function st(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var p=r.type;if(!(p!=="submit"&&p!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ct(t,r,o){(r!=="number"||Yt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Je=Array.isArray;function ft(t,r,o,p){if(t=t.options,r){r={};for(var m=0;m<o.length;m++)r["$"+o[m]]=!0;for(o=0;o<t.length;o++)m=r.hasOwnProperty("$"+t[o].value),t[o].selected!==m&&(t[o].selected=m),m&&p&&(t[o].defaultSelected=!0)}else{for(o=""+Ue(o),r=null,m=0;m<t.length;m++){if(t[m].value===o){t[m].selected=!0,p&&(t[m].defaultSelected=!0);return}r!==null||t[m].disabled||(r=t[m])}r!==null&&(r.selected=!0)}}function le(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(d(91));return H({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Se(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(d(92));if(Je(o)){if(1<o.length)throw Error(d(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:Ue(o)}}function he(t,r){var o=Ue(r.value),p=Ue(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),p!=null&&(t.defaultValue=""+p)}function wt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Ye(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ot(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Ye(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var et,yt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,p,m){MSApp.execUnsafeLocalFunction(function(){return t(r,o,p,m)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(et=et||document.createElement("div"),et.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=et.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function ht(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nr=["Webkit","ms","Moz","O"];Object.keys(Xt).forEach(function(t){nr.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Xt[r]=Xt[t]})});function _r(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Xt.hasOwnProperty(t)&&Xt[t]?(""+r).trim():r+"px"}function Ir(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var p=o.indexOf("--")===0,m=_r(o,r[o],p);o==="float"&&(o="cssFloat"),p?t.setProperty(o,m):t[o]=m}}var Ur=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qr(t,r){if(r){if(Ur[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(d(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(d(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(d(61))}if(r.style!=null&&typeof r.style!="object")throw Error(d(62))}}function xt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function rt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cr=null,tn=null,Rt=null;function qt(t){if(t=pn(t)){if(typeof Cr!="function")throw Error(d(280));var r=t.stateNode;r&&(r=gn(r),Cr(t.stateNode,t.type,r))}}function xn(t){tn?Rt?Rt.push(t):Rt=[t]:tn=t}function mn(){if(tn){var t=tn,r=Rt;if(Rt=tn=null,qt(t),r)for(t=0;t<r.length;t++)qt(r[t])}}function Nn(t,r){return t(r)}function bn(){}var ri=!1;function In(t,r,o){if(ri)return t(r,o);ri=!0;try{return Nn(t,r,o)}finally{ri=!1,(tn!==null||Rt!==null)&&(bn(),mn())}}function pr(t,r){var o=t.stateNode;if(o===null)return null;var p=gn(o);if(p===null)return null;o=p[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(p=!p.disabled)||(t=t.type,p=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!p;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(d(231,r,typeof o));return o}var gi=!1;if(_)try{var En={};Object.defineProperty(En,"passive",{get:function(){gi=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{gi=!1}function as(t,r,o,p,m,x,R,V,te){var fe=Array.prototype.slice.call(arguments,3);try{r.apply(o,fe)}catch(Re){this.onError(Re)}}var wn=!1,Tr=null,$r=!1,Or=null,jr={onError:function(t){wn=!0,Tr=t}};function yi(t,r,o,p,m,x,R,V,te){wn=!1,Tr=null,as.apply(jr,arguments)}function os(t,r,o,p,m,x,R,V,te){if(yi.apply(this,arguments),wn){if(wn){var fe=Tr;wn=!1,Tr=null}else throw Error(d(198));$r||($r=!0,Or=fe)}}function On(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function ls(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Mi(t){if(On(t)!==t)throw Error(d(188))}function Dr(t){var r=t.alternate;if(!r){if(r=On(t),r===null)throw Error(d(188));return r!==t?null:t}for(var o=t,p=r;;){var m=o.return;if(m===null)break;var x=m.alternate;if(x===null){if(p=m.return,p!==null){o=p;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===o)return Mi(m),t;if(x===p)return Mi(m),r;x=x.sibling}throw Error(d(188))}if(o.return!==p.return)o=m,p=x;else{for(var R=!1,V=m.child;V;){if(V===o){R=!0,o=m,p=x;break}if(V===p){R=!0,p=m,o=x;break}V=V.sibling}if(!R){for(V=x.child;V;){if(V===o){R=!0,o=x,p=m;break}if(V===p){R=!0,p=x,o=m;break}V=V.sibling}if(!R)throw Error(d(189))}}if(o.alternate!==p)throw Error(d(190))}if(o.tag!==3)throw Error(d(188));return o.stateNode.current===o?t:r}function Gn(t){return t=Dr(t),t!==null?vi(t):null}function vi(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=vi(t);if(r!==null)return r;t=t.sibling}return null}var zi=u.unstable_scheduleCallback,Bt=u.unstable_cancelCallback,Mr=u.unstable_shouldYield,us=u.unstable_requestPaint,At=u.unstable_now,Fi=u.unstable_getCurrentPriorityLevel,ii=u.unstable_ImmediatePriority,Vt=u.unstable_UserBlockingPriority,Xe=u.unstable_NormalPriority,si=u.unstable_LowPriority,cs=u.unstable_IdlePriority,Yn=null,E=null;function $(t){if(E&&typeof E.onCommitFiberRoot=="function")try{E.onCommitFiberRoot(Yn,t,void 0,(t.current.flags&128)===128)}catch{}}var me=Math.clz32?Math.clz32:Be,je=Math.log,pe=Math.LN2;function Be(t){return t>>>=0,t===0?32:31-(je(t)/pe|0)|0}var Ct=64,Qt=4194304;function kn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kr(t,r){var o=t.pendingLanes;if(o===0)return 0;var p=0,m=t.suspendedLanes,x=t.pingedLanes,R=o&268435455;if(R!==0){var V=R&~m;V!==0?p=kn(V):(x&=R,x!==0&&(p=kn(x)))}else R=o&~m,R!==0?p=kn(R):x!==0&&(p=kn(x));if(p===0)return 0;if(r!==0&&r!==p&&(r&m)===0&&(m=p&-p,x=r&-r,m>=x||m===16&&(x&4194240)!==0))return r;if((p&4)!==0&&(p|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=p;0<r;)o=31-me(r),m=1<<o,p|=t[o],r&=~m;return p}function sl(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vt(t,r){for(var o=t.suspendedLanes,p=t.pingedLanes,m=t.expirationTimes,x=t.pendingLanes;0<x;){var R=31-me(x),V=1<<R,te=m[R];te===-1?((V&o)===0||(V&p)!==0)&&(m[R]=sl(V,r)):te<=r&&(t.expiredLanes|=V),x&=~V}}function io(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function so(){var t=Ct;return Ct<<=1,(Ct&4194240)===0&&(Ct=64),t}function Wi(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function rr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-me(r),t[r]=o}function ao(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var p=t.eventTimes;for(t=t.expirationTimes;0<o;){var m=31-me(o),x=1<<m;r[m]=0,p[m]=-1,t[m]=-1,o&=~x}}function Hi(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var p=31-me(o),m=1<<p;m&r|t[p]&r&&(t[p]|=r),o&=~m}}var jt=0;function ds(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Is,xi,ya,bi,Bi,ir=!1,va=[],zr=null,ai=null,Dn=null,Gr=new Map,Os=new Map,Nr=[],Ds="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oo(t,r){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":ai=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Gr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(r.pointerId)}}function Ms(t,r,o,p,m,x){return t===null||t.nativeEvent!==x?(t={blockedOn:r,domEventName:o,eventSystemFlags:p,nativeEvent:x,targetContainers:[m]},r!==null&&(r=pn(r),r!==null&&xi(r)),t):(t.eventSystemFlags|=p,r=t.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),t)}function Jl(t,r,o,p,m){switch(r){case"focusin":return zr=Ms(zr,t,r,o,p,m),!0;case"dragenter":return ai=Ms(ai,t,r,o,p,m),!0;case"mouseover":return Dn=Ms(Dn,t,r,o,p,m),!0;case"pointerover":var x=m.pointerId;return Gr.set(x,Ms(Gr.get(x)||null,t,r,o,p,m)),!0;case"gotpointercapture":return x=m.pointerId,Os.set(x,Ms(Os.get(x)||null,t,r,o,p,m)),!0}return!1}function lo(t){var r=Pn(t.target);if(r!==null){var o=On(r);if(o!==null){if(r=o.tag,r===13){if(r=ls(o),r!==null){t.blockedOn=r,Bi(t.priority,function(){ya(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ps(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=_t(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var p=new o.constructor(o.type,o);mi=p,o.target.dispatchEvent(p),mi=null}else return r=pn(o),r!==null&&xi(r),t.blockedOn=o,!1;r.shift()}return!0}function zs(t,r,o){ps(t)&&o.delete(r)}function uo(){ir=!1,zr!==null&&ps(zr)&&(zr=null),ai!==null&&ps(ai)&&(ai=null),Dn!==null&&ps(Dn)&&(Dn=null),Gr.forEach(zs),Os.forEach(zs)}function wi(t,r){t.blockedOn===r&&(t.blockedOn=null,ir||(ir=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,uo)))}function Te(t){function r(m){return wi(m,t)}if(0<va.length){wi(va[0],t);for(var o=1;o<va.length;o++){var p=va[o];p.blockedOn===t&&(p.blockedOn=null)}}for(zr!==null&&wi(zr,t),ai!==null&&wi(ai,t),Dn!==null&&wi(Dn,t),Gr.forEach(r),Os.forEach(r),o=0;o<Nr.length;o++)p=Nr[o],p.blockedOn===t&&(p.blockedOn=null);for(;0<Nr.length&&(o=Nr[0],o.blockedOn===null);)lo(o),o.blockedOn===null&&Nr.shift()}var M=W.ReactCurrentBatchConfig,ie=!0;function we(t,r,o,p){var m=jt,x=M.transition;M.transition=null;try{jt=1,nt(t,r,o,p)}finally{jt=m,M.transition=x}}function Ee(t,r,o,p){var m=jt,x=M.transition;M.transition=null;try{jt=4,nt(t,r,o,p)}finally{jt=m,M.transition=x}}function nt(t,r,o,p){if(ie){var m=_t(t,r,o,p);if(m===null)fu(t,r,p,dt,o),oo(t,p);else if(Jl(m,t,r,o,p))p.stopPropagation();else if(oo(t,p),r&4&&-1<Ds.indexOf(t)){for(;m!==null;){var x=pn(m);if(x!==null&&Is(x),x=_t(t,r,o,p),x===null&&fu(t,r,p,dt,o),x===m)break;m=x}m!==null&&p.stopPropagation()}else fu(t,r,p,null,o)}}var dt=null;function _t(t,r,o,p){if(dt=null,t=rt(p),t=Pn(t),t!==null)if(r=On(t),r===null)t=null;else if(o=r.tag,o===13){if(t=ls(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return dt=t,null}function cn(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fi()){case ii:return 1;case Vt:return 4;case Xe:case si:return 16;case cs:return 536870912;default:return 16}default:return 16}}var $t=null,hr=null,Vn=null;function fr(){if(Vn)return Vn;var t,r=hr,o=r.length,p,m="value"in $t?$t.value:$t.textContent,x=m.length;for(t=0;t<o&&r[t]===m[t];t++);var R=o-t;for(p=1;p<=R&&r[o-p]===m[x-p];p++);return Vn=m.slice(t,1<p?1-p:void 0)}function dn(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Er(){return!0}function al(){return!1}function Sn(t){function r(o,p,m,x,R){this._reactName=o,this._targetInst=m,this.type=p,this.nativeEvent=x,this.target=R,this.currentTarget=null;for(var V in t)t.hasOwnProperty(V)&&(o=t[V],this[V]=o?o(x):x[V]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Er:al,this.isPropagationStopped=al,this}return H(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),r}var Ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=Sn(Ui),ki=H({},Ui,{view:0,detail:0}),Gd=Sn(ki),Xl,Ql,po,ho=H({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(Xl=t.screenX-po.screenX,Ql=t.screenY-po.screenY):Ql=Xl=0,po=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Zl=Sn(ho),Yd=H({},ho,{dataTransfer:0}),Vd=Sn(Yd),Jd=H({},ki,{relatedTarget:0}),eu=Sn(Jd),gc=H({},Ui,{animationName:0,elapsedTime:0,pseudoElement:0}),Xd=Sn(gc),yc=H({},Ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ol=Sn(yc),xa=H({},Ui,{data:0}),vc=Sn(xa),Qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mn(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=fo[t])?!!r[t]:!1}function tu(){return Mn}var xc=H({},ki,{key:function(t){if(t.key){var r=Qd[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=dn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?dn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mo=Sn(xc),ep=H({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nu=Sn(ep),tp=H({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),ru=Sn(tp),bc=H({},Ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),np=Sn(bc),rp=H({},ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wc=Sn(rp),kc=[9,13,27,32],iu=_&&"CompositionEvent"in window,qi=null;_&&"documentMode"in document&&(qi=document.documentMode);var $i=_&&"TextEvent"in window&&!qi,go=_&&(!iu||qi&&8<qi&&11>=qi),ll=" ",su=!1;function oi(t,r){switch(t){case"keyup":return kc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function ip(t,r){switch(t){case"compositionend":return hs(r);case"keypress":return r.which!==32?null:(su=!0,ll);case"textInput":return t=r.data,t===ll&&su?null:t;default:return null}}function Sc(t,r){if(fs)return t==="compositionend"||!iu&&oi(t,r)?(t=fr(),Vn=hr=$t=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return go&&r.locale!=="ko"?null:r.data;default:return null}}var sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function au(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!sp[t.type]:r==="textarea"}function ul(t,r,o,p){xn(p),r=Ca(r,"onChange"),0<r.length&&(o=new co("onChange","change",null,o,p),t.push({event:o,listeners:r}))}var Si=null,Pr=null;function _c(t){xl(t,0)}function yo(t){var r=Cn(t);if(zt(r))return t}function ap(t,r){if(t==="change")return r}var Cc=!1;if(_){var ou;if(_){var cl="oninput"in document;if(!cl){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),cl=typeof lu.oninput=="function"}ou=cl}else ou=!1;Cc=ou&&(!document.documentMode||9<document.documentMode)}function ba(){Si&&(Si.detachEvent("onpropertychange",uu),Pr=Si=null)}function uu(t){if(t.propertyName==="value"&&yo(Pr)){var r=[];ul(r,Pr,t,rt(t)),In(_c,r)}}function Tc(t,r,o){t==="focusin"?(ba(),Si=r,Pr=o,Si.attachEvent("onpropertychange",uu)):t==="focusout"&&ba()}function cu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yo(Pr)}function dl(t,r){if(t==="click")return yo(r)}function jc(t,r){if(t==="input"||t==="change")return yo(r)}function pl(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var _n=typeof Object.is=="function"?Object.is:pl;function wa(t,r){if(_n(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),p=Object.keys(r);if(o.length!==p.length)return!1;for(p=0;p<o.length;p++){var m=o[p];if(!w.call(r,m)||!_n(t[m],r[m]))return!1}return!0}function hl(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fl(t,r){var o=hl(t);t=0;for(var p;o;){if(o.nodeType===3){if(p=t+o.textContent.length,t<=r&&p>=r)return{node:o,offset:r-t};t=p}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=hl(o)}}function du(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?du(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function pu(){for(var t=window,r=Yt();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Yt(t.document)}return r}function vo(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function op(t){var r=pu(),o=t.focusedElem,p=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&du(o.ownerDocument.documentElement,o)){if(p!==null&&vo(o)){if(r=p.start,t=p.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var m=o.textContent.length,x=Math.min(p.start,m);p=p.end===void 0?x:Math.min(p.end,m),!t.extend&&x>p&&(m=p,p=x,x=m),m=fl(o,x);var R=fl(o,p);m&&R&&(t.rangeCount!==1||t.anchorNode!==m.node||t.anchorOffset!==m.offset||t.focusNode!==R.node||t.focusOffset!==R.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),t.removeAllRanges(),x>p?(t.addRange(r),t.extend(R.node,R.offset)):(r.setEnd(R.node,R.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lp=_&&"documentMode"in document&&11>=document.documentMode,ka=null,Ki=null,_i=null,ms=!1;function ml(t,r,o){var p=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ms||ka==null||ka!==Yt(p)||(p=ka,"selectionStart"in p&&vo(p)?p={start:p.selectionStart,end:p.selectionEnd}:(p=(p.ownerDocument&&p.ownerDocument.defaultView||window).getSelection(),p={anchorNode:p.anchorNode,anchorOffset:p.anchorOffset,focusNode:p.focusNode,focusOffset:p.focusOffset}),_i&&wa(_i,p)||(_i=p,p=Ca(Ki,"onSelect"),0<p.length&&(r=new co("onSelect","select",null,r,o),t.push({event:r,listeners:p}),r.target=ka)))}function Sa(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Fs={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},xo={},gs={};_&&(gs=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Ci(t){if(xo[t])return xo[t];if(!Fs[t])return t;var r=Fs[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in gs)return xo[t]=r[o];return t}var sr=Ci("animationend"),Gi=Ci("animationiteration"),Yi=Ci("animationstart"),bo=Ci("transitionend"),Nc=new Map,hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(t,r){Nc.set(t,r),v(r,[t])}for(var gl=0;gl<hu.length;gl++){var wo=hu[gl],yl=wo.toLowerCase(),up=wo[0].toUpperCase()+wo.slice(1);Yr(yl,"on"+up)}Yr(sr,"onAnimationEnd"),Yr(Gi,"onAnimationIteration"),Yr(Yi,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(bo,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),v("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),v("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),v("onBeforeInput",["compositionend","keypress","textInput","paste"]),v("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ec=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function vl(t,r,o){var p=t.type||"unknown-event";t.currentTarget=o,os(p,r,void 0,t),t.currentTarget=null}function xl(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var p=t[o],m=p.event;p=p.listeners;e:{var x=void 0;if(r)for(var R=p.length-1;0<=R;R--){var V=p[R],te=V.instance,fe=V.currentTarget;if(V=V.listener,te!==x&&m.isPropagationStopped())break e;vl(m,V,fe),x=te}else for(R=0;R<p.length;R++){if(V=p[R],te=V.instance,fe=V.currentTarget,V=V.listener,te!==x&&m.isPropagationStopped())break e;vl(m,V,fe),x=te}}}if($r)throw t=Or,$r=!1,Or=null,t}function Ft(t,r){var o=r[mu];o===void 0&&(o=r[mu]=new Set);var p=t+"__bubble";o.has(p)||(Pc(r,t,2,!1),o.add(p))}function _a(t,r,o){var p=0;r&&(p|=4),Pc(o,t,p,r)}var ko="_reactListening"+Math.random().toString(36).slice(2);function ys(t){if(!t[ko]){t[ko]=!0,f.forEach(function(o){o!=="selectionchange"&&(Ec.has(o)||_a(o,!1,t),_a(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ko]||(r[ko]=!0,_a("selectionchange",!1,r))}}function Pc(t,r,o,p){switch(cn(r)){case 1:var m=we;break;case 4:m=Ee;break;default:m=nt}o=m.bind(null,r,o,t),m=void 0,!gi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),p?m!==void 0?t.addEventListener(r,o,{capture:!0,passive:m}):t.addEventListener(r,o,!0):m!==void 0?t.addEventListener(r,o,{passive:m}):t.addEventListener(r,o,!1)}function fu(t,r,o,p,m){var x=p;if((r&1)===0&&(r&2)===0&&p!==null)e:for(;;){if(p===null)return;var R=p.tag;if(R===3||R===4){var V=p.stateNode.containerInfo;if(V===m||V.nodeType===8&&V.parentNode===m)break;if(R===4)for(R=p.return;R!==null;){var te=R.tag;if((te===3||te===4)&&(te=R.stateNode.containerInfo,te===m||te.nodeType===8&&te.parentNode===m))return;R=R.return}for(;V!==null;){if(R=Pn(V),R===null)return;if(te=R.tag,te===5||te===6){p=x=R;continue e}V=V.parentNode}}p=p.return}In(function(){var fe=x,Re=rt(o),Me=[];e:{var Pe=Nc.get(t);if(Pe!==void 0){var Qe=co,it=t;switch(t){case"keypress":if(dn(o)===0)break e;case"keydown":case"keyup":Qe=mo;break;case"focusin":it="focus",Qe=eu;break;case"focusout":it="blur",Qe=eu;break;case"beforeblur":case"afterblur":Qe=eu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=Zl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=Vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=ru;break;case sr:case Gi:case Yi:Qe=Xd;break;case bo:Qe=np;break;case"scroll":Qe=Gd;break;case"wheel":Qe=wc;break;case"copy":case"cut":case"paste":Qe=ol;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=nu}var at=(r&4)!==0,qn=!at&&t==="scroll",ce=at?Pe!==null?Pe+"Capture":null:Pe;at=[];for(var ae=fe,de;ae!==null;){de=ae;var He=de.stateNode;if(de.tag===5&&He!==null&&(de=He,ce!==null&&(He=pr(ae,ce),He!=null&&at.push(So(ae,He,de)))),qn)break;ae=ae.return}0<at.length&&(Pe=new Qe(Pe,it,null,o,Re),Me.push({event:Pe,listeners:at}))}}if((r&7)===0){e:{if(Pe=t==="mouseover"||t==="pointerover",Qe=t==="mouseout"||t==="pointerout",Pe&&o!==mi&&(it=o.relatedTarget||o.fromElement)&&(Pn(it)||it[Xi]))break e;if((Qe||Pe)&&(Pe=Re.window===Re?Re:(Pe=Re.ownerDocument)?Pe.defaultView||Pe.parentWindow:window,Qe?(it=o.relatedTarget||o.toElement,Qe=fe,it=it?Pn(it):null,it!==null&&(qn=On(it),it!==qn||it.tag!==5&&it.tag!==6)&&(it=null)):(Qe=null,it=fe),Qe!==it)){if(at=Zl,He="onMouseLeave",ce="onMouseEnter",ae="mouse",(t==="pointerout"||t==="pointerover")&&(at=nu,He="onPointerLeave",ce="onPointerEnter",ae="pointer"),qn=Qe==null?Pe:Cn(Qe),de=it==null?Pe:Cn(it),Pe=new at(He,ae+"leave",Qe,o,Re),Pe.target=qn,Pe.relatedTarget=de,He=null,Pn(Re)===fe&&(at=new at(ce,ae+"enter",it,o,Re),at.target=de,at.relatedTarget=qn,He=at),qn=He,Qe&&it)t:{for(at=Qe,ce=it,ae=0,de=at;de;de=vs(de))ae++;for(de=0,He=ce;He;He=vs(He))de++;for(;0<ae-de;)at=vs(at),ae--;for(;0<de-ae;)ce=vs(ce),de--;for(;ae--;){if(at===ce||ce!==null&&at===ce.alternate)break t;at=vs(at),ce=vs(ce)}at=null}else at=null;Qe!==null&&Hs(Me,Pe,Qe,at,!1),it!==null&&qn!==null&&Hs(Me,qn,it,at,!0)}}e:{if(Pe=fe?Cn(fe):window,Qe=Pe.nodeName&&Pe.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&Pe.type==="file")var ut=ap;else if(au(Pe))if(Cc)ut=jc;else{ut=cu;var mt=Tc}else(Qe=Pe.nodeName)&&Qe.toLowerCase()==="input"&&(Pe.type==="checkbox"||Pe.type==="radio")&&(ut=dl);if(ut&&(ut=ut(t,fe))){ul(Me,ut,o,Re);break e}mt&&mt(t,Pe,fe),t==="focusout"&&(mt=Pe._wrapperState)&&mt.controlled&&Pe.type==="number"&&ct(Pe,"number",Pe.value)}switch(mt=fe?Cn(fe):window,t){case"focusin":(au(mt)||mt.contentEditable==="true")&&(ka=mt,Ki=fe,_i=null);break;case"focusout":_i=Ki=ka=null;break;case"mousedown":ms=!0;break;case"contextmenu":case"mouseup":case"dragend":ms=!1,ml(Me,o,Re);break;case"selectionchange":if(lp)break;case"keydown":case"keyup":ml(Me,o,Re)}var gt;if(iu)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else fs?oi(t,o)&&(bt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(bt="onCompositionStart");bt&&(go&&o.locale!=="ko"&&(fs||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&fs&&(gt=fr()):($t=Re,hr="value"in $t?$t.value:$t.textContent,fs=!0)),mt=Ca(fe,bt),0<mt.length&&(bt=new vc(bt,t,null,o,Re),Me.push({event:bt,listeners:mt}),gt?bt.data=gt:(gt=hs(o),gt!==null&&(bt.data=gt)))),(gt=$i?ip(t,o):Sc(t,o))&&(fe=Ca(fe,"onBeforeInput"),0<fe.length&&(Re=new vc("onBeforeInput","beforeinput",null,o,Re),Me.push({event:Re,listeners:fe}),Re.data=gt))}xl(Me,r)})}function So(t,r,o){return{instance:t,listener:r,currentTarget:o}}function Ca(t,r){for(var o=r+"Capture",p=[];t!==null;){var m=t,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=pr(t,o),x!=null&&p.unshift(So(t,x,m)),x=pr(t,r),x!=null&&p.push(So(t,x,m))),t=t.return}return p}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hs(t,r,o,p,m){for(var x=r._reactName,R=[];o!==null&&o!==p;){var V=o,te=V.alternate,fe=V.stateNode;if(te!==null&&te===p)break;V.tag===5&&fe!==null&&(V=fe,m?(te=pr(o,x),te!=null&&R.unshift(So(o,te,V))):m||(te=pr(o,x),te!=null&&R.push(So(o,te,V)))),o=o.return}R.length!==0&&t.push({event:r,listeners:R})}var _o=/\r\n?/g,cp=/\u0000|\uFFFD/g;function Co(t){return(typeof t=="string"?t:""+t).replace(_o,`
`).replace(cp,"")}function To(t,r,o){if(r=Co(r),Co(t)!==r&&o)throw Error(d(425))}function xs(){}var bl=null,Vi=null;function Bs(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,jo=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,Lc=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(t){return Us.resolve(null).then(t).catch(Ac)}:Ji;function Ac(t){setTimeout(function(){throw t})}function wl(t,r){var o=r,p=0;do{var m=o.nextSibling;if(t.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(p===0){t.removeChild(m),Te(r);return}p--}else o!=="$"&&o!=="$?"&&o!=="$!"||p++;o=m}while(o);Te(r)}function bs(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function ws(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Vr,No="__reactProps$"+Vr,Xi="__reactContainer$"+Vr,mu="__reactEvents$"+Vr,dp="__reactListeners$"+Vr,pp="__reactHandles$"+Vr;function Pn(t){var r=t[Ti];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Xi]||o[Ti]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=ws(t);t!==null;){if(o=t[Ti])return o;t=ws(t)}return r}t=o,o=t.parentNode}return null}function pn(t){return t=t[Ti]||t[Xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(d(33))}function gn(t){return t[No]||null}var qs=[],Ta=-1;function li(t){return{current:t}}function nn(t){0>Ta||(t.current=qs[Ta],qs[Ta]=null,Ta--)}function Zt(t,r){Ta++,qs[Ta]=t.current,t.current=r}var ks={},Jn=li(ks),mr=li(!1),Qi=ks;function ja(t,r){var o=t.type.contextTypes;if(!o)return ks;var p=t.stateNode;if(p&&p.__reactInternalMemoizedUnmaskedChildContext===r)return p.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in o)m[x]=r[x];return p&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=m),m}function ar(t){return t=t.childContextTypes,t!=null}function Na(){nn(mr),nn(Jn)}function gu(t,r,o){if(Jn.current!==ks)throw Error(d(168));Zt(Jn,r),Zt(mr,o)}function yu(t,r,o){var p=t.stateNode;if(r=r.childContextTypes,typeof p.getChildContext!="function")return o;p=p.getChildContext();for(var m in p)if(!(m in r))throw Error(d(108,_e(t)||"Unknown",m));return H({},o,p)}function Ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ks,Qi=Jn.current,Zt(Jn,t),Zt(mr,mr.current),!0}function vu(t,r,o){var p=t.stateNode;if(!p)throw Error(d(169));o?(t=yu(t,r,Qi),p.__reactInternalMemoizedMergedChildContext=t,nn(mr),nn(Jn),Zt(Jn,t)):nn(mr),Zt(mr,o)}var Fr=null,kl=!1,Pa=!1;function ji(t){Fr===null?Fr=[t]:Fr.push(t)}function Rc(t){kl=!0,ji(t)}function Ss(){if(!Pa&&Fr!==null){Pa=!0;var t=0,r=jt;try{var o=Fr;for(jt=1;t<o.length;t++){var p=o[t];do p=p(!0);while(p!==null)}Fr=null,kl=!1}catch(m){throw Fr!==null&&(Fr=Fr.slice(t+1)),zi(ii,Ss),m}finally{jt=r,Pa=!1}}return null}var $s=[],Xn=0,Lt=null,Lr=0,zn=[],Fn=0,_s=null,ui=1,Ni="";function Ks(t,r){$s[Xn++]=Lr,$s[Xn++]=Lt,Lt=t,Lr=r}function Sl(t,r,o){zn[Fn++]=ui,zn[Fn++]=Ni,zn[Fn++]=_s,_s=t;var p=ui;t=Ni;var m=32-me(p)-1;p&=~(1<<m),o+=1;var x=32-me(r)+m;if(30<x){var R=m-m%5;x=(p&(1<<R)-1).toString(32),p>>=R,m-=R,ui=1<<32-me(r)+m|o<<m|p,Ni=x+t}else ui=1<<x|o<<m|p,Ni=t}function Gs(t){t.return!==null&&(Ks(t,1),Sl(t,1,0))}function _l(t){for(;t===Lt;)Lt=$s[--Xn],$s[Xn]=null,Lr=$s[--Xn],$s[Xn]=null;for(;t===_s;)_s=zn[--Fn],zn[Fn]=null,Ni=zn[--Fn],zn[Fn]=null,ui=zn[--Fn],zn[Fn]=null}var gr=null,Ln=null,rn=!1,Jr=null;function Ic(t,r){var o=Oi(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Eo(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,gr=t,Ln=bs(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,gr=t,Ln=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=_s!==null?{id:ui,overflow:Ni}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Oi(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,gr=t,Ln=null,!0):!1;default:return!1}}function Po(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cl(t){if(rn){var r=Ln;if(r){var o=r;if(!Eo(t,r)){if(Po(t))throw Error(d(418));r=bs(o.nextSibling);var p=gr;r&&Eo(t,r)?Ic(p,o):(t.flags=t.flags&-4097|2,rn=!1,gr=t)}}else{if(Po(t))throw Error(d(418));t.flags=t.flags&-4097|2,rn=!1,gr=t}}}function Oc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gr=t}function Lo(t){if(t!==gr)return!1;if(!rn)return Oc(t),rn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Bs(t.type,t.memoizedProps)),r&&(r=Ln)){if(Po(t))throw Dc(),Error(d(418));for(;r;)Ic(t,r),r=bs(r.nextSibling)}if(Oc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Ln=bs(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Ln=null}}else Ln=gr?bs(t.stateNode.nextSibling):null;return!0}function Dc(){for(var t=Ln;t;)t=bs(t.nextSibling)}function La(){Ln=gr=null,rn=!1}function Aa(t){Jr===null?Jr=[t]:Jr.push(t)}var Mc=W.ReactCurrentBatchConfig;function Ao(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(d(309));var p=o.stateNode}if(!p)throw Error(d(147,t));var m=p,x=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(R){var V=m.refs;R===null?delete V[x]:V[x]=R},r._stringRef=x,r)}if(typeof t!="string")throw Error(d(284));if(!o._owner)throw Error(d(290,t))}return t}function Tl(t,r){throw t=Object.prototype.toString.call(r),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function xu(t){var r=t._init;return r(t._payload)}function Ys(t){function r(ce,ae){if(t){var de=ce.deletions;de===null?(ce.deletions=[ae],ce.flags|=16):de.push(ae)}}function o(ce,ae){if(!t)return null;for(;ae!==null;)r(ce,ae),ae=ae.sibling;return null}function p(ce,ae){for(ce=new Map;ae!==null;)ae.key!==null?ce.set(ae.key,ae):ce.set(ae.index,ae),ae=ae.sibling;return ce}function m(ce,ae){return ce=Ja(ce,ae),ce.index=0,ce.sibling=null,ce}function x(ce,ae,de){return ce.index=de,t?(de=ce.alternate,de!==null?(de=de.index,de<ae?(ce.flags|=2,ae):de):(ce.flags|=2,ae)):(ce.flags|=1048576,ae)}function R(ce){return t&&ce.alternate===null&&(ce.flags|=2),ce}function V(ce,ae,de,He){return ae===null||ae.tag!==6?(ae=Cp(de,ce.mode,He),ae.return=ce,ae):(ae=m(ae,de),ae.return=ce,ae)}function te(ce,ae,de,He){var ut=de.type;return ut===se?Re(ce,ae,de.props.children,He,de.key):ae!==null&&(ae.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===ee&&xu(ut)===ae.type)?(He=m(ae,de.props),He.ref=Ao(ce,ae,de),He.return=ce,He):(He=od(de.type,de.key,de.props,null,ce.mode,He),He.ref=Ao(ce,ae,de),He.return=ce,He)}function fe(ce,ae,de,He){return ae===null||ae.tag!==4||ae.stateNode.containerInfo!==de.containerInfo||ae.stateNode.implementation!==de.implementation?(ae=Tp(de,ce.mode,He),ae.return=ce,ae):(ae=m(ae,de.children||[]),ae.return=ce,ae)}function Re(ce,ae,de,He,ut){return ae===null||ae.tag!==7?(ae=Vo(de,ce.mode,He,ut),ae.return=ce,ae):(ae=m(ae,de),ae.return=ce,ae)}function Me(ce,ae,de){if(typeof ae=="string"&&ae!==""||typeof ae=="number")return ae=Cp(""+ae,ce.mode,de),ae.return=ce,ae;if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case G:return de=od(ae.type,ae.key,ae.props,null,ce.mode,de),de.ref=Ao(ce,null,ae),de.return=ce,de;case X:return ae=Tp(ae,ce.mode,de),ae.return=ce,ae;case ee:var He=ae._init;return Me(ce,He(ae._payload),de)}if(Je(ae)||P(ae))return ae=Vo(ae,ce.mode,de,null),ae.return=ce,ae;Tl(ce,ae)}return null}function Pe(ce,ae,de,He){var ut=ae!==null?ae.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return ut!==null?null:V(ce,ae,""+de,He);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case G:return de.key===ut?te(ce,ae,de,He):null;case X:return de.key===ut?fe(ce,ae,de,He):null;case ee:return ut=de._init,Pe(ce,ae,ut(de._payload),He)}if(Je(de)||P(de))return ut!==null?null:Re(ce,ae,de,He,null);Tl(ce,de)}return null}function Qe(ce,ae,de,He,ut){if(typeof He=="string"&&He!==""||typeof He=="number")return ce=ce.get(de)||null,V(ae,ce,""+He,ut);if(typeof He=="object"&&He!==null){switch(He.$$typeof){case G:return ce=ce.get(He.key===null?de:He.key)||null,te(ae,ce,He,ut);case X:return ce=ce.get(He.key===null?de:He.key)||null,fe(ae,ce,He,ut);case ee:var mt=He._init;return Qe(ce,ae,de,mt(He._payload),ut)}if(Je(He)||P(He))return ce=ce.get(de)||null,Re(ae,ce,He,ut,null);Tl(ae,He)}return null}function it(ce,ae,de,He){for(var ut=null,mt=null,gt=ae,bt=ae=0,ur=null;gt!==null&&bt<de.length;bt++){gt.index>bt?(ur=gt,gt=null):ur=gt.sibling;var Wt=Pe(ce,gt,de[bt],He);if(Wt===null){gt===null&&(gt=ur);break}t&&gt&&Wt.alternate===null&&r(ce,gt),ae=x(Wt,ae,bt),mt===null?ut=Wt:mt.sibling=Wt,mt=Wt,gt=ur}if(bt===de.length)return o(ce,gt),rn&&Ks(ce,bt),ut;if(gt===null){for(;bt<de.length;bt++)gt=Me(ce,de[bt],He),gt!==null&&(ae=x(gt,ae,bt),mt===null?ut=gt:mt.sibling=gt,mt=gt);return rn&&Ks(ce,bt),ut}for(gt=p(ce,gt);bt<de.length;bt++)ur=Qe(gt,ce,bt,de[bt],He),ur!==null&&(t&&ur.alternate!==null&&gt.delete(ur.key===null?bt:ur.key),ae=x(ur,ae,bt),mt===null?ut=ur:mt.sibling=ur,mt=ur);return t&&gt.forEach(function(Xa){return r(ce,Xa)}),rn&&Ks(ce,bt),ut}function at(ce,ae,de,He){var ut=P(de);if(typeof ut!="function")throw Error(d(150));if(de=ut.call(de),de==null)throw Error(d(151));for(var mt=ut=null,gt=ae,bt=ae=0,ur=null,Wt=de.next();gt!==null&&!Wt.done;bt++,Wt=de.next()){gt.index>bt?(ur=gt,gt=null):ur=gt.sibling;var Xa=Pe(ce,gt,Wt.value,He);if(Xa===null){gt===null&&(gt=ur);break}t&&gt&&Xa.alternate===null&&r(ce,gt),ae=x(Xa,ae,bt),mt===null?ut=Xa:mt.sibling=Xa,mt=Xa,gt=ur}if(Wt.done)return o(ce,gt),rn&&Ks(ce,bt),ut;if(gt===null){for(;!Wt.done;bt++,Wt=de.next())Wt=Me(ce,Wt.value,He),Wt!==null&&(ae=x(Wt,ae,bt),mt===null?ut=Wt:mt.sibling=Wt,mt=Wt);return rn&&Ks(ce,bt),ut}for(gt=p(ce,gt);!Wt.done;bt++,Wt=de.next())Wt=Qe(gt,ce,bt,Wt.value,He),Wt!==null&&(t&&Wt.alternate!==null&&gt.delete(Wt.key===null?bt:Wt.key),ae=x(Wt,ae,bt),mt===null?ut=Wt:mt.sibling=Wt,mt=Wt);return t&&gt.forEach(function(Ag){return r(ce,Ag)}),rn&&Ks(ce,bt),ut}function qn(ce,ae,de,He){if(typeof de=="object"&&de!==null&&de.type===se&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case G:e:{for(var ut=de.key,mt=ae;mt!==null;){if(mt.key===ut){if(ut=de.type,ut===se){if(mt.tag===7){o(ce,mt.sibling),ae=m(mt,de.props.children),ae.return=ce,ce=ae;break e}}else if(mt.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===ee&&xu(ut)===mt.type){o(ce,mt.sibling),ae=m(mt,de.props),ae.ref=Ao(ce,mt,de),ae.return=ce,ce=ae;break e}o(ce,mt);break}else r(ce,mt);mt=mt.sibling}de.type===se?(ae=Vo(de.props.children,ce.mode,He,de.key),ae.return=ce,ce=ae):(He=od(de.type,de.key,de.props,null,ce.mode,He),He.ref=Ao(ce,ae,de),He.return=ce,ce=He)}return R(ce);case X:e:{for(mt=de.key;ae!==null;){if(ae.key===mt)if(ae.tag===4&&ae.stateNode.containerInfo===de.containerInfo&&ae.stateNode.implementation===de.implementation){o(ce,ae.sibling),ae=m(ae,de.children||[]),ae.return=ce,ce=ae;break e}else{o(ce,ae);break}else r(ce,ae);ae=ae.sibling}ae=Tp(de,ce.mode,He),ae.return=ce,ce=ae}return R(ce);case ee:return mt=de._init,qn(ce,ae,mt(de._payload),He)}if(Je(de))return it(ce,ae,de,He);if(P(de))return at(ce,ae,de,He);Tl(ce,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,ae!==null&&ae.tag===6?(o(ce,ae.sibling),ae=m(ae,de),ae.return=ce,ce=ae):(o(ce,ae),ae=Cp(de,ce.mode,He),ae.return=ce,ce=ae),R(ce)):o(ce,ae)}return qn}var Cs=Ys(!0),Ro=Ys(!1),Io=li(null),Ra=null,Vs=null,bu=null;function jl(){bu=Vs=Ra=null}function Wn(t){var r=Io.current;nn(Io),t._currentValue=r}function Ia(t,r,o){for(;t!==null;){var p=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,p!==null&&(p.childLanes|=r)):p!==null&&(p.childLanes&r)!==r&&(p.childLanes|=r),t===o)break;t=t.return}}function Js(t,r){Ra=t,bu=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(er=!0),t.firstContext=null)}function Wr(t){var r=t._currentValue;if(bu!==t)if(t={context:t,memoizedValue:r,next:null},Vs===null){if(Ra===null)throw Error(d(308));Vs=t,Ra.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return r}var Ts=null;function js(t){Ts===null?Ts=[t]:Ts.push(t)}function Oo(t,r,o,p){var m=r.interleaved;return m===null?(o.next=o,js(r)):(o.next=m.next,m.next=o),r.interleaved=o,Ei(t,p)}function Ei(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Zi=!1;function Nl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xs(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function ci(t,r,o){var p=t.updateQueue;if(p===null)return null;if(p=p.shared,(pt&2)!==0){var m=p.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),p.pending=r,Ei(t,o)}return m=p.interleaved,m===null?(r.next=r,js(p)):(r.next=m.next,m.next=r),p.interleaved=r,Ei(t,o)}function Do(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var p=r.lanes;p&=t.pendingLanes,o|=p,r.lanes=o,Hi(t,o)}}function Oa(t,r){var o=t.updateQueue,p=t.alternate;if(p!==null&&(p=p.updateQueue,o===p)){var m=null,x=null;if(o=o.firstBaseUpdate,o!==null){do{var R={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};x===null?m=x=R:x=x.next=R,o=o.next}while(o!==null);x===null?m=x=r:x=x.next=r}else m=x=r;o={baseState:p.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:p.shared,effects:p.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function El(t,r,o,p){var m=t.updateQueue;Zi=!1;var x=m.firstBaseUpdate,R=m.lastBaseUpdate,V=m.shared.pending;if(V!==null){m.shared.pending=null;var te=V,fe=te.next;te.next=null,R===null?x=fe:R.next=fe,R=te;var Re=t.alternate;Re!==null&&(Re=Re.updateQueue,V=Re.lastBaseUpdate,V!==R&&(V===null?Re.firstBaseUpdate=fe:V.next=fe,Re.lastBaseUpdate=te))}if(x!==null){var Me=m.baseState;R=0,Re=fe=te=null,V=x;do{var Pe=V.lane,Qe=V.eventTime;if((p&Pe)===Pe){Re!==null&&(Re=Re.next={eventTime:Qe,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var it=t,at=V;switch(Pe=r,Qe=o,at.tag){case 1:if(it=at.payload,typeof it=="function"){Me=it.call(Qe,Me,Pe);break e}Me=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=at.payload,Pe=typeof it=="function"?it.call(Qe,Me,Pe):it,Pe==null)break e;Me=H({},Me,Pe);break e;case 2:Zi=!0}}V.callback!==null&&V.lane!==0&&(t.flags|=64,Pe=m.effects,Pe===null?m.effects=[V]:Pe.push(V))}else Qe={eventTime:Qe,lane:Pe,tag:V.tag,payload:V.payload,callback:V.callback,next:null},Re===null?(fe=Re=Qe,te=Me):Re=Re.next=Qe,R|=Pe;if(V=V.next,V===null){if(V=m.shared.pending,V===null)break;Pe=V,V=Pe.next,Pe.next=null,m.lastBaseUpdate=Pe,m.shared.pending=null}}while(!0);if(Re===null&&(te=Me),m.baseState=te,m.firstBaseUpdate=fe,m.lastBaseUpdate=Re,r=m.shared.interleaved,r!==null){m=r;do R|=m.lane,m=m.next;while(m!==r)}else x===null&&(m.shared.lanes=0);kr|=R,t.lanes=R,t.memoizedState=Me}}function Qs(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var p=t[r],m=p.callback;if(m!==null){if(p.callback=null,p=o,typeof m!="function")throw Error(d(191,m));m.call(p)}}}var Da={},di=li(Da),Ma=li(Da),es=li(Da);function pi(t){if(t===Da)throw Error(d(174));return t}function Zs(t,r){switch(Zt(es,r),Zt(Ma,t),Zt(di,Da),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ot(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=ot(r,t)}nn(di),Zt(di,r)}function Li(){nn(di),nn(Ma),nn(es)}function wu(t){pi(es.current);var r=pi(di.current),o=ot(r,t.type);r!==o&&(Zt(Ma,t),Zt(di,o))}function ku(t){Ma.current===t&&(nn(di),nn(Ma))}var ln=li(0);function hi(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ns=[];function ea(){for(var t=0;t<Ns.length;t++)Ns[t]._workInProgressVersionPrimary=null;Ns.length=0}var Pl=W.ReactCurrentDispatcher,Ll=W.ReactCurrentBatchConfig,ta=0,hn=null,Hn=null,It=null,Mo=!1,zo=!1,Fo=0,hp=0;function Zn(){throw Error(d(321))}function Al(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!_n(t[o],r[o]))return!1;return!0}function Rl(t,r,o,p,m,x){if(ta=x,hn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Pl.current=t===null||t.memoizedState===null?mp:Iu,t=o(p,m),zo){x=0;do{if(zo=!1,Fo=0,25<=x)throw Error(d(301));x+=1,It=Hn=null,r.updateQueue=null,Pl.current=Ho,t=o(p,m)}while(zo)}if(Pl.current=Wo,r=Hn!==null&&Hn.next!==null,ta=0,It=Hn=hn=null,Mo=!1,r)throw Error(d(300));return t}function Su(){var t=Fo!==0;return Fo=0,t}function Ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?hn.memoizedState=It=t:It=It.next=t,It}function Xr(){if(Hn===null){var t=hn.alternate;t=t!==null?t.memoizedState:null}else t=Hn.next;var r=It===null?hn.memoizedState:It.next;if(r!==null)It=r,Hn=t;else{if(t===null)throw Error(d(310));Hn=t,t={memoizedState:Hn.memoizedState,baseState:Hn.baseState,baseQueue:Hn.baseQueue,queue:Hn.queue,next:null},It===null?hn.memoizedState=It=t:It=It.next=t}return It}function Qr(t,r){return typeof r=="function"?r(t):r}function na(t){var r=Xr(),o=r.queue;if(o===null)throw Error(d(311));o.lastRenderedReducer=t;var p=Hn,m=p.baseQueue,x=o.pending;if(x!==null){if(m!==null){var R=m.next;m.next=x.next,x.next=R}p.baseQueue=m=x,o.pending=null}if(m!==null){x=m.next,p=p.baseState;var V=R=null,te=null,fe=x;do{var Re=fe.lane;if((ta&Re)===Re)te!==null&&(te=te.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),p=fe.hasEagerState?fe.eagerState:t(p,fe.action);else{var Me={lane:Re,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};te===null?(V=te=Me,R=p):te=te.next=Me,hn.lanes|=Re,kr|=Re}fe=fe.next}while(fe!==null&&fe!==x);te===null?R=p:te.next=V,_n(p,r.memoizedState)||(er=!0),r.memoizedState=p,r.baseState=R,r.baseQueue=te,o.lastRenderedState=p}if(t=o.interleaved,t!==null){m=t;do x=m.lane,hn.lanes|=x,kr|=x,m=m.next;while(m!==t)}else m===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function za(t){var r=Xr(),o=r.queue;if(o===null)throw Error(d(311));o.lastRenderedReducer=t;var p=o.dispatch,m=o.pending,x=r.memoizedState;if(m!==null){o.pending=null;var R=m=m.next;do x=t(x,R.action),R=R.next;while(R!==m);_n(x,r.memoizedState)||(er=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),o.lastRenderedState=x}return[x,p]}function Fa(){}function Ri(t,r){var o=hn,p=Xr(),m=r(),x=!_n(p.memoizedState,m);if(x&&(p.memoizedState=m,er=!0),p=p.queue,ju(ra.bind(null,o,p,t),[t]),p.getSnapshot!==r||x||It!==null&&It.memoizedState.tag&1){if(o.flags|=2048,Es(9,Fc.bind(null,o,p,m,r),void 0,null),Mt===null)throw Error(d(349));(ta&30)!==0||zc(o,r,m)}return m}function zc(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Fc(t,r,o,p){r.value=o,r.getSnapshot=p,_u(r)&&Cu(t)}function ra(t,r,o){return o(function(){_u(r)&&Cu(t)})}function _u(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!_n(t,o)}catch{return!0}}function Cu(t){var r=Ei(t,1);r!==null&&ns(r,t,1,-1)}function Tu(t){var r=Ai();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:t},r.queue=t,t=t.dispatch=Lu.bind(null,hn,t),[r.memoizedState,t]}function Es(t,r,o,p){return t={tag:t,create:r,destroy:o,deps:p,next:null},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(p=o.next,o.next=t,t.next=p,r.lastEffect=t)),t}function ia(){return Xr().memoizedState}function Wa(t,r,o,p){var m=Ai();hn.flags|=t,m.memoizedState=Es(1|r,o,void 0,p===void 0?null:p)}function Ha(t,r,o,p){var m=Xr();p=p===void 0?null:p;var x=void 0;if(Hn!==null){var R=Hn.memoizedState;if(x=R.destroy,p!==null&&Al(p,R.deps)){m.memoizedState=Es(r,o,x,p);return}}hn.flags|=t,m.memoizedState=Es(1|r,o,x,p)}function Il(t,r){return Wa(8390656,8,t,r)}function ju(t,r){return Ha(2048,8,t,r)}function Ba(t,r){return Ha(4,2,t,r)}function Nu(t,r){return Ha(4,4,t,r)}function Wc(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Eu(t,r,o){return o=o!=null?o.concat([t]):null,Ha(4,4,Wc.bind(null,r,t),o)}function Ua(){}function Hc(t,r){var o=Xr();r=r===void 0?null:r;var p=o.memoizedState;return p!==null&&r!==null&&Al(r,p[1])?p[0]:(o.memoizedState=[t,r],t)}function Bc(t,r){var o=Xr();r=r===void 0?null:r;var p=o.memoizedState;return p!==null&&r!==null&&Al(r,p[1])?p[0]:(t=t(),o.memoizedState=[t,r],t)}function qa(t,r,o){return(ta&21)===0?(t.baseState&&(t.baseState=!1,er=!0),t.memoizedState=o):(_n(o,r)||(o=so(),hn.lanes|=o,kr|=o,t.baseState=!0),r)}function Uc(t,r){var o=jt;jt=o!==0&&4>o?o:4,t(!0);var p=Ll.transition;Ll.transition={};try{t(!1),r()}finally{jt=o,Ll.transition=p}}function Pu(){return Xr().memoizedState}function fp(t,r,o){var p=Ya(t);if(o={lane:p,action:o,hasEagerState:!1,eagerState:null,next:null},Au(t))qc(r,o);else if(o=Oo(t,r,o,p),o!==null){var m=Hr();ns(o,t,p,m),Ru(o,r,p)}}function Lu(t,r,o){var p=Ya(t),m={lane:p,action:o,hasEagerState:!1,eagerState:null,next:null};if(Au(t))qc(r,m);else{var x=t.alternate;if(t.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var R=r.lastRenderedState,V=x(R,o);if(m.hasEagerState=!0,m.eagerState=V,_n(V,R)){var te=r.interleaved;te===null?(m.next=m,js(r)):(m.next=te.next,te.next=m),r.interleaved=m;return}}catch{}finally{}o=Oo(t,r,m,p),o!==null&&(m=Hr(),ns(o,t,p,m),Ru(o,r,p))}}function Au(t){var r=t.alternate;return t===hn||r!==null&&r===hn}function qc(t,r){zo=Mo=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Ru(t,r,o){if((o&4194240)!==0){var p=r.lanes;p&=t.pendingLanes,o|=p,r.lanes=o,Hi(t,o)}}var Wo={readContext:Wr,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useInsertionEffect:Zn,useLayoutEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useMutableSource:Zn,useSyncExternalStore:Zn,useId:Zn,unstable_isNewReconciler:!1},mp={readContext:Wr,useCallback:function(t,r){return Ai().memoizedState=[t,r===void 0?null:r],t},useContext:Wr,useEffect:Il,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Wa(4194308,4,Wc.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Wa(4194308,4,t,r)},useInsertionEffect:function(t,r){return Wa(4,2,t,r)},useMemo:function(t,r){var o=Ai();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var p=Ai();return r=o!==void 0?o(r):r,p.memoizedState=p.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},p.queue=t,t=t.dispatch=fp.bind(null,hn,t),[p.memoizedState,t]},useRef:function(t){var r=Ai();return t={current:t},r.memoizedState=t},useState:Tu,useDebugValue:Ua,useDeferredValue:function(t){return Ai().memoizedState=t},useTransition:function(){var t=Tu(!1),r=t[0];return t=Uc.bind(null,t[1]),Ai().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var p=hn,m=Ai();if(rn){if(o===void 0)throw Error(d(407));o=o()}else{if(o=r(),Mt===null)throw Error(d(349));(ta&30)!==0||zc(p,r,o)}m.memoizedState=o;var x={value:o,getSnapshot:r};return m.queue=x,Il(ra.bind(null,p,x,t),[t]),p.flags|=2048,Es(9,Fc.bind(null,p,x,o,r),void 0,null),o},useId:function(){var t=Ai(),r=Mt.identifierPrefix;if(rn){var o=Ni,p=ui;o=(p&~(1<<32-me(p)-1)).toString(32)+o,r=":"+r+"R"+o,o=Fo++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=hp++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Iu={readContext:Wr,useCallback:Hc,useContext:Wr,useEffect:ju,useImperativeHandle:Eu,useInsertionEffect:Ba,useLayoutEffect:Nu,useMemo:Bc,useReducer:na,useRef:ia,useState:function(){return na(Qr)},useDebugValue:Ua,useDeferredValue:function(t){var r=Xr();return qa(r,Hn.memoizedState,t)},useTransition:function(){var t=na(Qr)[0],r=Xr().memoizedState;return[t,r]},useMutableSource:Fa,useSyncExternalStore:Ri,useId:Pu,unstable_isNewReconciler:!1},Ho={readContext:Wr,useCallback:Hc,useContext:Wr,useEffect:ju,useImperativeHandle:Eu,useInsertionEffect:Ba,useLayoutEffect:Nu,useMemo:Bc,useReducer:za,useRef:ia,useState:function(){return za(Qr)},useDebugValue:Ua,useDeferredValue:function(t){var r=Xr();return Hn===null?r.memoizedState=t:qa(r,Hn.memoizedState,t)},useTransition:function(){var t=za(Qr)[0],r=Xr().memoizedState;return[t,r]},useMutableSource:Fa,useSyncExternalStore:Ri,useId:Pu,unstable_isNewReconciler:!1};function yr(t,r){if(t&&t.defaultProps){r=H({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Ou(t,r,o,p){r=t.memoizedState,o=o(p,r),o=o==null?r:H({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Bo={isMounted:function(t){return(t=t._reactInternals)?On(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var p=Hr(),m=Ya(t),x=Pi(p,m);x.payload=r,o!=null&&(x.callback=o),r=ci(t,x,m),r!==null&&(ns(r,t,m,p),Do(r,t,m))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var p=Hr(),m=Ya(t),x=Pi(p,m);x.tag=1,x.payload=r,o!=null&&(x.callback=o),r=ci(t,x,m),r!==null&&(ns(r,t,m,p),Do(r,t,m))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Hr(),p=Ya(t),m=Pi(o,p);m.tag=2,r!=null&&(m.callback=r),r=ci(t,m,p),r!==null&&(ns(r,t,p,o),Do(r,t,p))}};function $c(t,r,o,p,m,x,R){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(p,x,R):r.prototype&&r.prototype.isPureReactComponent?!wa(o,p)||!wa(m,x):!0}function Kc(t,r,o){var p=!1,m=ks,x=r.contextType;return typeof x=="object"&&x!==null?x=Wr(x):(m=ar(r)?Qi:Jn.current,p=r.contextTypes,x=(p=p!=null)?ja(t,m):ks),r=new r(o,x),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Bo,t.stateNode=r,r._reactInternals=t,p&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=m,t.__reactInternalMemoizedMaskedChildContext=x),r}function Gc(t,r,o,p){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,p),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,p),r.state!==t&&Bo.enqueueReplaceState(r,r.state,null)}function Du(t,r,o,p){var m=t.stateNode;m.props=o,m.state=t.memoizedState,m.refs={},Nl(t);var x=r.contextType;typeof x=="object"&&x!==null?m.context=Wr(x):(x=ar(r)?Qi:Jn.current,m.context=ja(t,x)),m.state=t.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Ou(t,r,x,o),m.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Bo.enqueueReplaceState(m,m.state,null),El(t,o,m,p),m.state=t.memoizedState),typeof m.componentDidMount=="function"&&(t.flags|=4194308)}function sa(t,r){try{var o="",p=r;do o+=qe(p),p=p.return;while(p);var m=o}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:t,source:r,stack:m,digest:null}}function Mu(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function zu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Yc=typeof WeakMap=="function"?WeakMap:Map;function Ol(t,r,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var p=r.value;return o.callback=function(){td||(td=!0,yp=p),zu(t,r)},o}function Fu(t,r,o){o=Pi(-1,o),o.tag=3;var p=t.type.getDerivedStateFromError;if(typeof p=="function"){var m=r.value;o.payload=function(){return p(m)},o.callback=function(){zu(t,r)}}var x=t.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(o.callback=function(){zu(t,r),typeof p!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})}),o}function Vc(t,r,o){var p=t.pingCache;if(p===null){p=t.pingCache=new Yc;var m=new Set;p.set(r,m)}else m=p.get(r),m===void 0&&(m=new Set,p.set(r,m));m.has(o)||(m.add(o),t=wg.bind(null,t,r,o),r.then(t,t))}function Wu(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function aa(t,r,o,p,m){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Pi(-1,1),r.tag=2,ci(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=m,t)}var Jc=W.ReactCurrentOwner,er=!1;function vr(t,r,o,p){r.child=t===null?Ro(r,null,o,p):Cs(r,t.child,o,p)}function Xc(t,r,o,p,m){o=o.render;var x=r.ref;return Js(r,m),p=Rl(t,r,o,p,x,m),o=Su(),t!==null&&!er?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~m,Ar(t,r,m)):(rn&&o&&Gs(r),r.flags|=1,vr(t,r,p,m),r.child)}function Qc(t,r,o,p,m){if(t===null){var x=o.type;return typeof x=="function"&&!_p(x)&&x.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=x,en(t,r,x,p,m)):(t=od(o.type,null,p,r,r.mode,m),t.ref=r.ref,t.return=r,r.child=t)}if(x=t.child,(t.lanes&m)===0){var R=x.memoizedProps;if(o=o.compare,o=o!==null?o:wa,o(R,p)&&t.ref===r.ref)return Ar(t,r,m)}return r.flags|=1,t=Ja(x,p),t.ref=r.ref,t.return=r,r.child=t}function en(t,r,o,p,m){if(t!==null){var x=t.memoizedProps;if(wa(x,p)&&t.ref===r.ref)if(er=!1,r.pendingProps=p=x,(t.lanes&m)!==0)(t.flags&131072)!==0&&(er=!0);else return r.lanes=t.lanes,Ar(t,r,m)}return oa(t,r,o,p,m)}function Zc(t,r,o){var p=r.pendingProps,m=p.children,x=t!==null?t.memoizedState:null;if(p.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(wr,Ut),Ut|=o;else{if((o&1073741824)===0)return t=x!==null?x.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Zt(wr,Ut),Ut|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},p=x!==null?x.baseLanes:o,Zt(wr,Ut),Ut|=p}else x!==null?(p=x.baseLanes|o,r.memoizedState=null):p=o,Zt(wr,Ut),Ut|=p;return vr(t,r,m,o),r.child}function Dl(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function oa(t,r,o,p,m){var x=ar(o)?Qi:Jn.current;return x=ja(r,x),Js(r,m),o=Rl(t,r,o,p,x,m),p=Su(),t!==null&&!er?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~m,Ar(t,r,m)):(rn&&p&&Gs(r),r.flags|=1,vr(t,r,o,m),r.child)}function Zr(t,r,o,p,m){if(ar(o)){var x=!0;Ea(r)}else x=!1;if(Js(r,m),r.stateNode===null)Ul(t,r),Kc(r,o,p),Du(r,o,p,m),p=!0;else if(t===null){var R=r.stateNode,V=r.memoizedProps;R.props=V;var te=R.context,fe=o.contextType;typeof fe=="object"&&fe!==null?fe=Wr(fe):(fe=ar(o)?Qi:Jn.current,fe=ja(r,fe));var Re=o.getDerivedStateFromProps,Me=typeof Re=="function"||typeof R.getSnapshotBeforeUpdate=="function";Me||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(V!==p||te!==fe)&&Gc(r,R,p,fe),Zi=!1;var Pe=r.memoizedState;R.state=Pe,El(r,p,R,m),te=r.memoizedState,V!==p||Pe!==te||mr.current||Zi?(typeof Re=="function"&&(Ou(r,o,Re,p),te=r.memoizedState),(V=Zi||$c(r,o,V,p,Pe,te,fe))?(Me||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(r.flags|=4194308)):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=p,r.memoizedState=te),R.props=p,R.state=te,R.context=fe,p=V):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),p=!1)}else{R=r.stateNode,Xs(t,r),V=r.memoizedProps,fe=r.type===r.elementType?V:yr(r.type,V),R.props=fe,Me=r.pendingProps,Pe=R.context,te=o.contextType,typeof te=="object"&&te!==null?te=Wr(te):(te=ar(o)?Qi:Jn.current,te=ja(r,te));var Qe=o.getDerivedStateFromProps;(Re=typeof Qe=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(V!==Me||Pe!==te)&&Gc(r,R,p,te),Zi=!1,Pe=r.memoizedState,R.state=Pe,El(r,p,R,m);var it=r.memoizedState;V!==Me||Pe!==it||mr.current||Zi?(typeof Qe=="function"&&(Ou(r,o,Qe,p),it=r.memoizedState),(fe=Zi||$c(r,o,fe,p,Pe,it,te)||!1)?(Re||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(p,it,te),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(p,it,te)),typeof R.componentDidUpdate=="function"&&(r.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof R.componentDidUpdate!="function"||V===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||V===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=1024),r.memoizedProps=p,r.memoizedState=it),R.props=p,R.state=it,R.context=te,p=fe):(typeof R.componentDidUpdate!="function"||V===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||V===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=1024),p=!1)}return $a(t,r,o,p,x,m)}function $a(t,r,o,p,m,x){Dl(t,r);var R=(r.flags&128)!==0;if(!p&&!R)return m&&vu(r,o,!1),Ar(t,r,x);p=r.stateNode,Jc.current=r;var V=R&&typeof o.getDerivedStateFromError!="function"?null:p.render();return r.flags|=1,t!==null&&R?(r.child=Cs(r,t.child,null,x),r.child=Cs(r,null,V,x)):vr(t,r,V,x),r.memoizedState=p.state,m&&vu(r,o,!0),r.child}function Ml(t){var r=t.stateNode;r.pendingContext?gu(t,r.pendingContext,r.pendingContext!==r.context):r.context&&gu(t,r.context,!1),Zs(t,r.containerInfo)}function Hu(t,r,o,p,m){return La(),Aa(m),r.flags|=256,vr(t,r,o,p),r.child}var zl={dehydrated:null,treeContext:null,retryLane:0};function Fl(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wl(t,r,o){var p=r.pendingProps,m=ln.current,x=!1,R=(r.flags&128)!==0,V;if((V=R)||(V=t!==null&&t.memoizedState===null?!1:(m&2)!==0),V?(x=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(m|=1),Zt(ln,m&1),t===null)return Cl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(R=p.children,t=p.fallback,x?(p=r.mode,x=r.child,R={mode:"hidden",children:R},(p&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=R):x=ld(R,p,0,null),t=Vo(t,p,o,null),x.return=r,t.return=r,x.sibling=t,r.child=x,r.child.memoizedState=Fl(o),r.memoizedState=zl,t):Hl(r,R));if(m=t.memoizedState,m!==null&&(V=m.dehydrated,V!==null))return Bu(t,r,R,p,V,m,o);if(x){x=p.fallback,R=r.mode,m=t.child,V=m.sibling;var te={mode:"hidden",children:p.children};return(R&1)===0&&r.child!==m?(p=r.child,p.childLanes=0,p.pendingProps=te,r.deletions=null):(p=Ja(m,te),p.subtreeFlags=m.subtreeFlags&14680064),V!==null?x=Ja(V,x):(x=Vo(x,R,o,null),x.flags|=2),x.return=r,p.return=r,p.sibling=x,r.child=p,p=x,x=r.child,R=t.child.memoizedState,R=R===null?Fl(o):{baseLanes:R.baseLanes|o,cachePool:null,transitions:R.transitions},x.memoizedState=R,x.childLanes=t.childLanes&~o,r.memoizedState=zl,p}return x=t.child,t=x.sibling,p=Ja(x,{mode:"visible",children:p.children}),(r.mode&1)===0&&(p.lanes=o),p.return=r,p.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=p,r.memoizedState=null,p}function Hl(t,r){return r=ld({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Bl(t,r,o,p){return p!==null&&Aa(p),Cs(r,t.child,null,o),t=Hl(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Bu(t,r,o,p,m,x,R){if(o)return r.flags&256?(r.flags&=-257,p=Mu(Error(d(422))),Bl(t,r,R,p)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(x=p.fallback,m=r.mode,p=ld({mode:"visible",children:p.children},m,0,null),x=Vo(x,m,R,null),x.flags|=2,p.return=r,x.return=r,p.sibling=x,r.child=p,(r.mode&1)!==0&&Cs(r,t.child,null,R),r.child.memoizedState=Fl(R),r.memoizedState=zl,x);if((r.mode&1)===0)return Bl(t,r,R,null);if(m.data==="$!"){if(p=m.nextSibling&&m.nextSibling.dataset,p)var V=p.dgst;return p=V,x=Error(d(419)),p=Mu(x,p,void 0),Bl(t,r,R,p)}if(V=(R&t.childLanes)!==0,er||V){if(p=Mt,p!==null){switch(R&-R){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(p.suspendedLanes|R))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,Ei(t,m),ns(p,t,m,-1))}return Sp(),p=Mu(Error(d(421))),Bl(t,r,R,p)}return m.data==="$?"?(r.flags|=128,r.child=t.child,r=kg.bind(null,t),m._reactRetry=r,null):(t=x.treeContext,Ln=bs(m.nextSibling),gr=r,rn=!0,Jr=null,t!==null&&(zn[Fn++]=ui,zn[Fn++]=Ni,zn[Fn++]=_s,ui=t.id,Ni=t.overflow,_s=r),r=Hl(r,p.children),r.flags|=4096,r)}function Uu(t,r,o){t.lanes|=r;var p=t.alternate;p!==null&&(p.lanes|=r),Ia(t.return,r,o)}function Ot(t,r,o,p,m){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:p,tail:o,tailMode:m}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=p,x.tail=o,x.tailMode=m)}function qu(t,r,o){var p=r.pendingProps,m=p.revealOrder,x=p.tail;if(vr(t,r,p.children,o),p=ln.current,(p&2)!==0)p=p&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uu(t,o,r);else if(t.tag===19)Uu(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}p&=1}if(Zt(ln,p),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(o=r.child,m=null;o!==null;)t=o.alternate,t!==null&&hi(t)===null&&(m=o),o=o.sibling;o=m,o===null?(m=r.child,r.child=null):(m=o.sibling,o.sibling=null),Ot(r,!1,m,o,x);break;case"backwards":for(o=null,m=r.child,r.child=null;m!==null;){if(t=m.alternate,t!==null&&hi(t)===null){r.child=m;break}t=m.sibling,m.sibling=o,o=m,m=t}Ot(r,!0,o,null,x);break;case"together":Ot(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ul(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Ar(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),kr|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(d(153));if(r.child!==null){for(t=r.child,o=Ja(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Ja(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function gp(t,r,o){switch(r.tag){case 3:Ml(r),La();break;case 5:wu(r);break;case 1:ar(r.type)&&Ea(r);break;case 4:Zs(r,r.stateNode.containerInfo);break;case 10:var p=r.type._context,m=r.memoizedProps.value;Zt(Io,p._currentValue),p._currentValue=m;break;case 13:if(p=r.memoizedState,p!==null)return p.dehydrated!==null?(Zt(ln,ln.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Wl(t,r,o):(Zt(ln,ln.current&1),t=Ar(t,r,o),t!==null?t.sibling:null);Zt(ln,ln.current&1);break;case 19:if(p=(o&r.childLanes)!==0,(t.flags&128)!==0){if(p)return qu(t,r,o);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Zt(ln,ln.current),p)break;return null;case 22:case 23:return r.lanes=0,Zc(t,r,o)}return Ar(t,r,o)}var Uo,$u,fn,ed;Uo=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},$u=function(){},fn=function(t,r,o,p){var m=t.memoizedProps;if(m!==p){t=r.stateNode,pi(di.current);var x=null;switch(o){case"input":m=Ht(t,m),p=Ht(t,p),x=[];break;case"select":m=H({},m,{value:void 0}),p=H({},p,{value:void 0}),x=[];break;case"textarea":m=le(t,m),p=le(t,p),x=[];break;default:typeof m.onClick!="function"&&typeof p.onClick=="function"&&(t.onclick=xs)}qr(o,p);var R;o=null;for(fe in m)if(!p.hasOwnProperty(fe)&&m.hasOwnProperty(fe)&&m[fe]!=null)if(fe==="style"){var V=m[fe];for(R in V)V.hasOwnProperty(R)&&(o||(o={}),o[R]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(g.hasOwnProperty(fe)?x||(x=[]):(x=x||[]).push(fe,null));for(fe in p){var te=p[fe];if(V=m!=null?m[fe]:void 0,p.hasOwnProperty(fe)&&te!==V&&(te!=null||V!=null))if(fe==="style")if(V){for(R in V)!V.hasOwnProperty(R)||te&&te.hasOwnProperty(R)||(o||(o={}),o[R]="");for(R in te)te.hasOwnProperty(R)&&V[R]!==te[R]&&(o||(o={}),o[R]=te[R])}else o||(x||(x=[]),x.push(fe,o)),o=te;else fe==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,V=V?V.__html:void 0,te!=null&&V!==te&&(x=x||[]).push(fe,te)):fe==="children"?typeof te!="string"&&typeof te!="number"||(x=x||[]).push(fe,""+te):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(g.hasOwnProperty(fe)?(te!=null&&fe==="onScroll"&&Ft("scroll",t),x||V===te||(x=[])):(x=x||[]).push(fe,te))}o&&(x=x||[]).push("style",o);var fe=x;(r.updateQueue=fe)&&(r.flags|=4)}},ed=function(t,r,o,p){o!==p&&(r.flags|=4)};function qo(t,r){if(!rn)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var p=null;o!==null;)o.alternate!==null&&(p=o),o=o.sibling;p===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:p.sibling=null}}function or(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,p=0;if(r)for(var m=t.child;m!==null;)o|=m.lanes|m.childLanes,p|=m.subtreeFlags&14680064,p|=m.flags&14680064,m.return=t,m=m.sibling;else for(m=t.child;m!==null;)o|=m.lanes|m.childLanes,p|=m.subtreeFlags,p|=m.flags,m.return=t,m=m.sibling;return t.subtreeFlags|=p,t.childLanes=o,r}function ql(t,r,o){var p=r.pendingProps;switch(_l(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return or(r),null;case 1:return ar(r.type)&&Na(),or(r),null;case 3:return p=r.stateNode,Li(),nn(mr),nn(Jn),ea(),p.pendingContext&&(p.context=p.pendingContext,p.pendingContext=null),(t===null||t.child===null)&&(Lo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Jr!==null&&(bp(Jr),Jr=null))),$u(t,r),or(r),null;case 5:ku(r);var m=pi(es.current);if(o=r.type,t!==null&&r.stateNode!=null)fn(t,r,o,p,m),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!p){if(r.stateNode===null)throw Error(d(166));return or(r),null}if(t=pi(di.current),Lo(r)){p=r.stateNode,o=r.type;var x=r.memoizedProps;switch(p[Ti]=r,p[No]=x,t=(r.mode&1)!==0,o){case"dialog":Ft("cancel",p),Ft("close",p);break;case"iframe":case"object":case"embed":Ft("load",p);break;case"video":case"audio":for(m=0;m<Ws.length;m++)Ft(Ws[m],p);break;case"source":Ft("error",p);break;case"img":case"image":case"link":Ft("error",p),Ft("load",p);break;case"details":Ft("toggle",p);break;case"input":Tt(p,x),Ft("invalid",p);break;case"select":p._wrapperState={wasMultiple:!!x.multiple},Ft("invalid",p);break;case"textarea":Se(p,x),Ft("invalid",p)}qr(o,x),m=null;for(var R in x)if(x.hasOwnProperty(R)){var V=x[R];R==="children"?typeof V=="string"?p.textContent!==V&&(x.suppressHydrationWarning!==!0&&To(p.textContent,V,t),m=["children",V]):typeof V=="number"&&p.textContent!==""+V&&(x.suppressHydrationWarning!==!0&&To(p.textContent,V,t),m=["children",""+V]):g.hasOwnProperty(R)&&V!=null&&R==="onScroll"&&Ft("scroll",p)}switch(o){case"input":Ke(p),st(p,x,!0);break;case"textarea":Ke(p),wt(p);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(p.onclick=xs)}p=m,r.updateQueue=p,p!==null&&(r.flags|=4)}else{R=m.nodeType===9?m:m.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ye(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=R.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof p.is=="string"?t=R.createElement(o,{is:p.is}):(t=R.createElement(o),o==="select"&&(R=t,p.multiple?R.multiple=!0:p.size&&(R.size=p.size))):t=R.createElementNS(t,o),t[Ti]=r,t[No]=p,Uo(t,r,!1,!1),r.stateNode=t;e:{switch(R=xt(o,p),o){case"dialog":Ft("cancel",t),Ft("close",t),m=p;break;case"iframe":case"object":case"embed":Ft("load",t),m=p;break;case"video":case"audio":for(m=0;m<Ws.length;m++)Ft(Ws[m],t);m=p;break;case"source":Ft("error",t),m=p;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),m=p;break;case"details":Ft("toggle",t),m=p;break;case"input":Tt(t,p),m=Ht(t,p),Ft("invalid",t);break;case"option":m=p;break;case"select":t._wrapperState={wasMultiple:!!p.multiple},m=H({},p,{value:void 0}),Ft("invalid",t);break;case"textarea":Se(t,p),m=le(t,p),Ft("invalid",t);break;default:m=p}qr(o,m),V=m;for(x in V)if(V.hasOwnProperty(x)){var te=V[x];x==="style"?Ir(t,te):x==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,te!=null&&yt(t,te)):x==="children"?typeof te=="string"?(o!=="textarea"||te!=="")&&ht(t,te):typeof te=="number"&&ht(t,""+te):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(g.hasOwnProperty(x)?te!=null&&x==="onScroll"&&Ft("scroll",t):te!=null&&q(t,x,te,R))}switch(o){case"input":Ke(t),st(t,p,!1);break;case"textarea":Ke(t),wt(t);break;case"option":p.value!=null&&t.setAttribute("value",""+Ue(p.value));break;case"select":t.multiple=!!p.multiple,x=p.value,x!=null?ft(t,!!p.multiple,x,!1):p.defaultValue!=null&&ft(t,!!p.multiple,p.defaultValue,!0);break;default:typeof m.onClick=="function"&&(t.onclick=xs)}switch(o){case"button":case"input":case"select":case"textarea":p=!!p.autoFocus;break e;case"img":p=!0;break e;default:p=!1}}p&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return or(r),null;case 6:if(t&&r.stateNode!=null)ed(t,r,t.memoizedProps,p);else{if(typeof p!="string"&&r.stateNode===null)throw Error(d(166));if(o=pi(es.current),pi(di.current),Lo(r)){if(p=r.stateNode,o=r.memoizedProps,p[Ti]=r,(x=p.nodeValue!==o)&&(t=gr,t!==null))switch(t.tag){case 3:To(p.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&To(p.nodeValue,o,(t.mode&1)!==0)}x&&(r.flags|=4)}else p=(o.nodeType===9?o:o.ownerDocument).createTextNode(p),p[Ti]=r,r.stateNode=p}return or(r),null;case 13:if(nn(ln),p=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rn&&Ln!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Dc(),La(),r.flags|=98560,x=!1;else if(x=Lo(r),p!==null&&p.dehydrated!==null){if(t===null){if(!x)throw Error(d(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(d(317));x[Ti]=r}else La(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;or(r),x=!1}else Jr!==null&&(bp(Jr),Jr=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(p=p!==null,p!==(t!==null&&t.memoizedState!==null)&&p&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(ln.current&1)!==0?Et===0&&(Et=3):Sp())),r.updateQueue!==null&&(r.flags|=4),or(r),null);case 4:return Li(),$u(t,r),t===null&&ys(r.stateNode.containerInfo),or(r),null;case 10:return Wn(r.type._context),or(r),null;case 17:return ar(r.type)&&Na(),or(r),null;case 19:if(nn(ln),x=r.memoizedState,x===null)return or(r),null;if(p=(r.flags&128)!==0,R=x.rendering,R===null)if(p)qo(x,!1);else{if(Et!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(R=hi(t),R!==null){for(r.flags|=128,qo(x,!1),p=R.updateQueue,p!==null&&(r.updateQueue=p,r.flags|=4),r.subtreeFlags=0,p=o,o=r.child;o!==null;)x=o,t=p,x.flags&=14680066,R=x.alternate,R===null?(x.childLanes=0,x.lanes=t,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=R.childLanes,x.lanes=R.lanes,x.child=R.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=R.memoizedProps,x.memoizedState=R.memoizedState,x.updateQueue=R.updateQueue,x.type=R.type,t=R.dependencies,x.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Zt(ln,ln.current&1|2),r.child}t=t.sibling}x.tail!==null&&At()>$l&&(r.flags|=128,p=!0,qo(x,!1),r.lanes=4194304)}else{if(!p)if(t=hi(R),t!==null){if(r.flags|=128,p=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),qo(x,!0),x.tail===null&&x.tailMode==="hidden"&&!R.alternate&&!rn)return or(r),null}else 2*At()-x.renderingStartTime>$l&&o!==1073741824&&(r.flags|=128,p=!0,qo(x,!1),r.lanes=4194304);x.isBackwards?(R.sibling=r.child,r.child=R):(o=x.last,o!==null?o.sibling=R:r.child=R,x.last=R)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=At(),r.sibling=null,o=ln.current,Zt(ln,p?o&1|2:o&1),r):(or(r),null);case 22:case 23:return kp(),p=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==p&&(r.flags|=8192),p&&(r.mode&1)!==0?(Ut&1073741824)!==0&&(or(r),r.subtreeFlags&6&&(r.flags|=8192)):or(r),null;case 24:return null;case 25:return null}throw Error(d(156,r.tag))}function e(t,r){switch(_l(r),r.tag){case 1:return ar(r.type)&&Na(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Li(),nn(mr),nn(Jn),ea(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return ku(r),null;case 13:if(nn(ln),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(d(340));La()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return nn(ln),null;case 4:return Li(),null;case 10:return Wn(r.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var n=!1,s=!1,i=typeof WeakSet=="function"?WeakSet:Set,a=null;function h(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(p){Rn(t,r,p)}else o.current=null}function y(t,r,o){try{o()}catch(p){Rn(t,r,p)}}var b=!1;function S(t,r){if(bl=ie,t=pu(),vo(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var p=o.getSelection&&o.getSelection();if(p&&p.rangeCount!==0){o=p.anchorNode;var m=p.anchorOffset,x=p.focusNode;p=p.focusOffset;try{o.nodeType,x.nodeType}catch{o=null;break e}var R=0,V=-1,te=-1,fe=0,Re=0,Me=t,Pe=null;t:for(;;){for(var Qe;Me!==o||m!==0&&Me.nodeType!==3||(V=R+m),Me!==x||p!==0&&Me.nodeType!==3||(te=R+p),Me.nodeType===3&&(R+=Me.nodeValue.length),(Qe=Me.firstChild)!==null;)Pe=Me,Me=Qe;for(;;){if(Me===t)break t;if(Pe===o&&++fe===m&&(V=R),Pe===x&&++Re===p&&(te=R),(Qe=Me.nextSibling)!==null)break;Me=Pe,Pe=Me.parentNode}Me=Qe}o=V===-1||te===-1?null:{start:V,end:te}}else o=null}o=o||{start:0,end:0}}else o=null;for(Vi={focusedElem:t,selectionRange:o},ie=!1,a=r;a!==null;)if(r=a,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,a=t;else for(;a!==null;){r=a;try{var it=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var at=it.memoizedProps,qn=it.memoizedState,ce=r.stateNode,ae=ce.getSnapshotBeforeUpdate(r.elementType===r.type?at:yr(r.type,at),qn);ce.__reactInternalSnapshotBeforeUpdate=ae}break;case 3:var de=r.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(He){Rn(r,r.return,He)}if(t=r.sibling,t!==null){t.return=r.return,a=t;break}a=r.return}return it=b,b=!1,it}function j(t,r,o){var p=r.updateQueue;if(p=p!==null?p.lastEffect:null,p!==null){var m=p=p.next;do{if((m.tag&t)===t){var x=m.destroy;m.destroy=void 0,x!==void 0&&y(r,o,x)}m=m.next}while(m!==p)}}function F(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var p=o.create;o.destroy=p()}o=o.next}while(o!==r)}}function K(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function oe(t){var r=t.alternate;r!==null&&(t.alternate=null,oe(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ti],delete r[No],delete r[mu],delete r[dp],delete r[pp])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function re(t){return t.tag===5||t.tag===3||t.tag===4}function ge(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||re(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ke(t,r,o){var p=t.tag;if(p===5||p===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=xs));else if(p!==4&&(t=t.child,t!==null))for(ke(t,r,o),t=t.sibling;t!==null;)ke(t,r,o),t=t.sibling}function Ae(t,r,o){var p=t.tag;if(p===5||p===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(p!==4&&(t=t.child,t!==null))for(Ae(t,r,o),t=t.sibling;t!==null;)Ae(t,r,o),t=t.sibling}var Ne=null,Fe=!1;function ze(t,r,o){for(o=o.child;o!==null;)Ge(t,r,o),o=o.sibling}function Ge(t,r,o){if(E&&typeof E.onCommitFiberUnmount=="function")try{E.onCommitFiberUnmount(Yn,o)}catch{}switch(o.tag){case 5:s||h(o,r);case 6:var p=Ne,m=Fe;Ne=null,ze(t,r,o),Ne=p,Fe=m,Ne!==null&&(Fe?(t=Ne,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ne.removeChild(o.stateNode));break;case 18:Ne!==null&&(Fe?(t=Ne,o=o.stateNode,t.nodeType===8?wl(t.parentNode,o):t.nodeType===1&&wl(t,o),Te(t)):wl(Ne,o.stateNode));break;case 4:p=Ne,m=Fe,Ne=o.stateNode.containerInfo,Fe=!0,ze(t,r,o),Ne=p,Fe=m;break;case 0:case 11:case 14:case 15:if(!s&&(p=o.updateQueue,p!==null&&(p=p.lastEffect,p!==null))){m=p=p.next;do{var x=m,R=x.destroy;x=x.tag,R!==void 0&&((x&2)!==0||(x&4)!==0)&&y(o,r,R),m=m.next}while(m!==p)}ze(t,r,o);break;case 1:if(!s&&(h(o,r),p=o.stateNode,typeof p.componentWillUnmount=="function"))try{p.props=o.memoizedProps,p.state=o.memoizedState,p.componentWillUnmount()}catch(V){Rn(o,r,V)}ze(t,r,o);break;case 21:ze(t,r,o);break;case 22:o.mode&1?(s=(p=s)||o.memoizedState!==null,ze(t,r,o),s=p):ze(t,r,o);break;default:ze(t,r,o)}}function lt(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new i),r.forEach(function(p){var m=Sg.bind(null,t,p);o.has(p)||(o.add(p),p.then(m,m))})}}function Ve(t,r){var o=r.deletions;if(o!==null)for(var p=0;p<o.length;p++){var m=o[p];try{var x=t,R=r,V=R;e:for(;V!==null;){switch(V.tag){case 5:Ne=V.stateNode,Fe=!1;break e;case 3:Ne=V.stateNode.containerInfo,Fe=!0;break e;case 4:Ne=V.stateNode.containerInfo,Fe=!0;break e}V=V.return}if(Ne===null)throw Error(d(160));Ge(x,R,m),Ne=null,Fe=!1;var te=m.alternate;te!==null&&(te.return=null),m.return=null}catch(fe){Rn(m,r,fe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)kt(r,t),r=r.sibling}function kt(t,r){var o=t.alternate,p=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ve(r,t),Nt(t),p&4){try{j(3,t,t.return),F(3,t)}catch(at){Rn(t,t.return,at)}try{j(5,t,t.return)}catch(at){Rn(t,t.return,at)}}break;case 1:Ve(r,t),Nt(t),p&512&&o!==null&&h(o,o.return);break;case 5:if(Ve(r,t),Nt(t),p&512&&o!==null&&h(o,o.return),t.flags&32){var m=t.stateNode;try{ht(m,"")}catch(at){Rn(t,t.return,at)}}if(p&4&&(m=t.stateNode,m!=null)){var x=t.memoizedProps,R=o!==null?o.memoizedProps:x,V=t.type,te=t.updateQueue;if(t.updateQueue=null,te!==null)try{V==="input"&&x.type==="radio"&&x.name!=null&&Ze(m,x),xt(V,R);var fe=xt(V,x);for(R=0;R<te.length;R+=2){var Re=te[R],Me=te[R+1];Re==="style"?Ir(m,Me):Re==="dangerouslySetInnerHTML"?yt(m,Me):Re==="children"?ht(m,Me):q(m,Re,Me,fe)}switch(V){case"input":We(m,x);break;case"textarea":he(m,x);break;case"select":var Pe=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var Qe=x.value;Qe!=null?ft(m,!!x.multiple,Qe,!1):Pe!==!!x.multiple&&(x.defaultValue!=null?ft(m,!!x.multiple,x.defaultValue,!0):ft(m,!!x.multiple,x.multiple?[]:"",!1))}m[No]=x}catch(at){Rn(t,t.return,at)}}break;case 6:if(Ve(r,t),Nt(t),p&4){if(t.stateNode===null)throw Error(d(162));m=t.stateNode,x=t.memoizedProps;try{m.nodeValue=x}catch(at){Rn(t,t.return,at)}}break;case 3:if(Ve(r,t),Nt(t),p&4&&o!==null&&o.memoizedState.isDehydrated)try{Te(r.containerInfo)}catch(at){Rn(t,t.return,at)}break;case 4:Ve(r,t),Nt(t);break;case 13:Ve(r,t),Nt(t),m=t.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||($o=At())),p&4&&lt(t);break;case 22:if(Re=o!==null&&o.memoizedState!==null,t.mode&1?(s=(fe=s)||Re,Ve(r,t),s=fe):Ve(r,t),Nt(t),p&8192){if(fe=t.memoizedState!==null,(t.stateNode.isHidden=fe)&&!Re&&(t.mode&1)!==0)for(a=t,Re=t.child;Re!==null;){for(Me=a=Re;a!==null;){switch(Pe=a,Qe=Pe.child,Pe.tag){case 0:case 11:case 14:case 15:j(4,Pe,Pe.return);break;case 1:h(Pe,Pe.return);var it=Pe.stateNode;if(typeof it.componentWillUnmount=="function"){p=Pe,o=Pe.return;try{r=p,it.props=r.memoizedProps,it.state=r.memoizedState,it.componentWillUnmount()}catch(at){Rn(p,o,at)}}break;case 5:h(Pe,Pe.return);break;case 22:if(Pe.memoizedState!==null){lr(Me);continue}}Qe!==null?(Qe.return=Pe,a=Qe):lr(Me)}Re=Re.sibling}e:for(Re=null,Me=t;;){if(Me.tag===5){if(Re===null){Re=Me;try{m=Me.stateNode,fe?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(V=Me.stateNode,te=Me.memoizedProps.style,R=te!=null&&te.hasOwnProperty("display")?te.display:null,V.style.display=_r("display",R))}catch(at){Rn(t,t.return,at)}}}else if(Me.tag===6){if(Re===null)try{Me.stateNode.nodeValue=fe?"":Me.memoizedProps}catch(at){Rn(t,t.return,at)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===t)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===t)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===t)break e;Re===Me&&(Re=null),Me=Me.return}Re===Me&&(Re=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Ve(r,t),Nt(t),p&4&&lt(t);break;case 21:break;default:Ve(r,t),Nt(t)}}function Nt(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(re(o)){var p=o;break e}o=o.return}throw Error(d(160))}switch(p.tag){case 5:var m=p.stateNode;p.flags&32&&(ht(m,""),p.flags&=-33);var x=ge(t);Ae(t,x,m);break;case 3:case 4:var R=p.stateNode.containerInfo,V=ge(t);ke(t,V,R);break;default:throw Error(d(161))}}catch(te){Rn(t,t.return,te)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Bn(t,r,o){a=t,sn(t)}function sn(t,r,o){for(var p=(t.mode&1)!==0;a!==null;){var m=a,x=m.child;if(m.tag===22&&p){var R=m.memoizedState!==null||n;if(!R){var V=m.alternate,te=V!==null&&V.memoizedState!==null||s;V=n;var fe=s;if(n=R,(s=te)&&!fe)for(a=m;a!==null;)R=a,te=R.child,R.tag===22&&R.memoizedState!==null?yn(m):te!==null?(te.return=R,a=te):yn(m);for(;x!==null;)a=x,sn(x),x=x.sibling;a=m,n=V,s=fe}xr(t)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,a=x):xr(t)}}function xr(t){for(;a!==null;){var r=a;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:s||F(5,r);break;case 1:var p=r.stateNode;if(r.flags&4&&!s)if(o===null)p.componentDidMount();else{var m=r.elementType===r.type?o.memoizedProps:yr(r.type,o.memoizedProps);p.componentDidUpdate(m,o.memoizedState,p.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Qs(r,x,p);break;case 3:var R=r.updateQueue;if(R!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Qs(r,R,o)}break;case 5:var V=r.stateNode;if(o===null&&r.flags&4){o=V;var te=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":te.autoFocus&&o.focus();break;case"img":te.src&&(o.src=te.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var fe=r.alternate;if(fe!==null){var Re=fe.memoizedState;if(Re!==null){var Me=Re.dehydrated;Me!==null&&Te(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}s||r.flags&512&&K(r)}catch(Pe){Rn(r,r.return,Pe)}}if(r===t){a=null;break}if(o=r.sibling,o!==null){o.return=r.return,a=o;break}a=r.return}}function lr(t){for(;a!==null;){var r=a;if(r===t){a=null;break}var o=r.sibling;if(o!==null){o.return=r.return,a=o;break}a=r.return}}function yn(t){for(;a!==null;){var r=a;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{F(4,r)}catch(te){Rn(r,o,te)}break;case 1:var p=r.stateNode;if(typeof p.componentDidMount=="function"){var m=r.return;try{p.componentDidMount()}catch(te){Rn(r,m,te)}}var x=r.return;try{K(r)}catch(te){Rn(r,x,te)}break;case 5:var R=r.return;try{K(r)}catch(te){Rn(r,R,te)}}}catch(te){Rn(r,r.return,te)}if(r===t){a=null;break}var V=r.sibling;if(V!==null){V.return=r.return,a=V;break}a=r.return}}var br=Math.ceil,Tn=W.ReactCurrentDispatcher,vn=W.ReactCurrentOwner,Dt=W.ReactCurrentBatchConfig,pt=0,Mt=null,an=null,un=0,Ut=0,wr=li(0),Et=0,la=null,kr=0,Ii=0,ts=0,An=null,Un=null,$o=0,$l=1/0,ua=null,td=!1,yp=null,Ka=null,nd=!1,Ga=null,rd=0,Ku=0,vp=null,id=-1,sd=0;function Hr(){return(pt&6)!==0?At():id!==-1?id:id=At()}function Ya(t){return(t.mode&1)===0?1:(pt&2)!==0&&un!==0?un&-un:Mc.transition!==null?(sd===0&&(sd=so()),sd):(t=jt,t!==0||(t=window.event,t=t===void 0?16:cn(t.type)),t)}function ns(t,r,o,p){if(50<Ku)throw Ku=0,vp=null,Error(d(185));rr(t,o,p),((pt&2)===0||t!==Mt)&&(t===Mt&&((pt&2)===0&&(Ii|=o),Et===4&&Va(t,un)),ei(t,p),o===1&&pt===0&&(r.mode&1)===0&&($l=At()+500,kl&&Ss()))}function ei(t,r){var o=t.callbackNode;vt(t,r);var p=Kr(t,t===Mt?un:0);if(p===0)o!==null&&Bt(o),t.callbackNode=null,t.callbackPriority=0;else if(r=p&-p,t.callbackPriority!==r){if(o!=null&&Bt(o),r===1)t.tag===0?Rc(Dh.bind(null,t)):ji(Dh.bind(null,t)),Lc(function(){(pt&6)===0&&Ss()}),o=null;else{switch(ds(p)){case 1:o=ii;break;case 4:o=Vt;break;case 16:o=Xe;break;case 536870912:o=cs;break;default:o=Xe}o=qh(o,Oh.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Oh(t,r){if(id=-1,sd=0,(pt&6)!==0)throw Error(d(327));var o=t.callbackNode;if(Kl()&&t.callbackNode!==o)return null;var p=Kr(t,t===Mt?un:0);if(p===0)return null;if((p&30)!==0||(p&t.expiredLanes)!==0||r)r=ad(t,p);else{r=p;var m=pt;pt|=2;var x=zh();(Mt!==t||un!==r)&&(ua=null,$l=At()+500,Go(t,r));do try{xg();break}catch(V){Mh(t,V)}while(!0);jl(),Tn.current=x,pt=m,an!==null?r=0:(Mt=null,un=0,r=Et)}if(r!==0){if(r===2&&(m=io(t),m!==0&&(p=m,r=xp(t,m))),r===1)throw o=la,Go(t,0),Va(t,p),ei(t,At()),o;if(r===6)Va(t,p);else{if(m=t.current.alternate,(p&30)===0&&!yg(m)&&(r=ad(t,p),r===2&&(x=io(t),x!==0&&(p=x,r=xp(t,x))),r===1))throw o=la,Go(t,0),Va(t,p),ei(t,At()),o;switch(t.finishedWork=m,t.finishedLanes=p,r){case 0:case 1:throw Error(d(345));case 2:Yo(t,Un,ua);break;case 3:if(Va(t,p),(p&130023424)===p&&(r=$o+500-At(),10<r)){if(Kr(t,0)!==0)break;if(m=t.suspendedLanes,(m&p)!==p){Hr(),t.pingedLanes|=t.suspendedLanes&m;break}t.timeoutHandle=Ji(Yo.bind(null,t,Un,ua),r);break}Yo(t,Un,ua);break;case 4:if(Va(t,p),(p&4194240)===p)break;for(r=t.eventTimes,m=-1;0<p;){var R=31-me(p);x=1<<R,R=r[R],R>m&&(m=R),p&=~x}if(p=m,p=At()-p,p=(120>p?120:480>p?480:1080>p?1080:1920>p?1920:3e3>p?3e3:4320>p?4320:1960*br(p/1960))-p,10<p){t.timeoutHandle=Ji(Yo.bind(null,t,Un,ua),p);break}Yo(t,Un,ua);break;case 5:Yo(t,Un,ua);break;default:throw Error(d(329))}}}return ei(t,At()),t.callbackNode===o?Oh.bind(null,t):null}function xp(t,r){var o=An;return t.current.memoizedState.isDehydrated&&(Go(t,r).flags|=256),t=ad(t,r),t!==2&&(r=Un,Un=o,r!==null&&bp(r)),t}function bp(t){Un===null?Un=t:Un.push.apply(Un,t)}function yg(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var p=0;p<o.length;p++){var m=o[p],x=m.getSnapshot;m=m.value;try{if(!_n(x(),m))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Va(t,r){for(r&=~ts,r&=~Ii,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-me(r),p=1<<o;t[o]=-1,r&=~p}}function Dh(t){if((pt&6)!==0)throw Error(d(327));Kl();var r=Kr(t,0);if((r&1)===0)return ei(t,At()),null;var o=ad(t,r);if(t.tag!==0&&o===2){var p=io(t);p!==0&&(r=p,o=xp(t,p))}if(o===1)throw o=la,Go(t,0),Va(t,r),ei(t,At()),o;if(o===6)throw Error(d(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Yo(t,Un,ua),ei(t,At()),null}function wp(t,r){var o=pt;pt|=1;try{return t(r)}finally{pt=o,pt===0&&($l=At()+500,kl&&Ss())}}function Ko(t){Ga!==null&&Ga.tag===0&&(pt&6)===0&&Kl();var r=pt;pt|=1;var o=Dt.transition,p=jt;try{if(Dt.transition=null,jt=1,t)return t()}finally{jt=p,Dt.transition=o,pt=r,(pt&6)===0&&Ss()}}function kp(){Ut=wr.current,nn(wr)}function Go(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,jo(o)),an!==null)for(o=an.return;o!==null;){var p=o;switch(_l(p),p.tag){case 1:p=p.type.childContextTypes,p!=null&&Na();break;case 3:Li(),nn(mr),nn(Jn),ea();break;case 5:ku(p);break;case 4:Li();break;case 13:nn(ln);break;case 19:nn(ln);break;case 10:Wn(p.type._context);break;case 22:case 23:kp()}o=o.return}if(Mt=t,an=t=Ja(t.current,null),un=Ut=r,Et=0,la=null,ts=Ii=kr=0,Un=An=null,Ts!==null){for(r=0;r<Ts.length;r++)if(o=Ts[r],p=o.interleaved,p!==null){o.interleaved=null;var m=p.next,x=o.pending;if(x!==null){var R=x.next;x.next=m,p.next=R}o.pending=p}Ts=null}return t}function Mh(t,r){do{var o=an;try{if(jl(),Pl.current=Wo,Mo){for(var p=hn.memoizedState;p!==null;){var m=p.queue;m!==null&&(m.pending=null),p=p.next}Mo=!1}if(ta=0,It=Hn=hn=null,zo=!1,Fo=0,vn.current=null,o===null||o.return===null){Et=1,la=r,an=null;break}e:{var x=t,R=o.return,V=o,te=r;if(r=un,V.flags|=32768,te!==null&&typeof te=="object"&&typeof te.then=="function"){var fe=te,Re=V,Me=Re.tag;if((Re.mode&1)===0&&(Me===0||Me===11||Me===15)){var Pe=Re.alternate;Pe?(Re.updateQueue=Pe.updateQueue,Re.memoizedState=Pe.memoizedState,Re.lanes=Pe.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Qe=Wu(R);if(Qe!==null){Qe.flags&=-257,aa(Qe,R,V,x,r),Qe.mode&1&&Vc(x,fe,r),r=Qe,te=fe;var it=r.updateQueue;if(it===null){var at=new Set;at.add(te),r.updateQueue=at}else it.add(te);break e}else{if((r&1)===0){Vc(x,fe,r),Sp();break e}te=Error(d(426))}}else if(rn&&V.mode&1){var qn=Wu(R);if(qn!==null){(qn.flags&65536)===0&&(qn.flags|=256),aa(qn,R,V,x,r),Aa(sa(te,V));break e}}x=te=sa(te,V),Et!==4&&(Et=2),An===null?An=[x]:An.push(x),x=R;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var ce=Ol(x,te,r);Oa(x,ce);break e;case 1:V=te;var ae=x.type,de=x.stateNode;if((x.flags&128)===0&&(typeof ae.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(Ka===null||!Ka.has(de)))){x.flags|=65536,r&=-r,x.lanes|=r;var He=Fu(x,V,r);Oa(x,He);break e}}x=x.return}while(x!==null)}Wh(o)}catch(ut){r=ut,an===o&&o!==null&&(an=o=o.return);continue}break}while(!0)}function zh(){var t=Tn.current;return Tn.current=Wo,t===null?Wo:t}function Sp(){(Et===0||Et===3||Et===2)&&(Et=4),Mt===null||(kr&268435455)===0&&(Ii&268435455)===0||Va(Mt,un)}function ad(t,r){var o=pt;pt|=2;var p=zh();(Mt!==t||un!==r)&&(ua=null,Go(t,r));do try{vg();break}catch(m){Mh(t,m)}while(!0);if(jl(),pt=o,Tn.current=p,an!==null)throw Error(d(261));return Mt=null,un=0,Et}function vg(){for(;an!==null;)Fh(an)}function xg(){for(;an!==null&&!Mr();)Fh(an)}function Fh(t){var r=Uh(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,r===null?Wh(t):an=r,vn.current=null}function Wh(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=ql(o,r,Ut),o!==null){an=o;return}}else{if(o=e(o,r),o!==null){o.flags&=32767,an=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,an=null;return}}if(r=r.sibling,r!==null){an=r;return}an=r=t}while(r!==null);Et===0&&(Et=5)}function Yo(t,r,o){var p=jt,m=Dt.transition;try{Dt.transition=null,jt=1,bg(t,r,o,p)}finally{Dt.transition=m,jt=p}return null}function bg(t,r,o,p){do Kl();while(Ga!==null);if((pt&6)!==0)throw Error(d(327));o=t.finishedWork;var m=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(d(177));t.callbackNode=null,t.callbackPriority=0;var x=o.lanes|o.childLanes;if(ao(t,x),t===Mt&&(an=Mt=null,un=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||nd||(nd=!0,qh(Xe,function(){return Kl(),null})),x=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||x){x=Dt.transition,Dt.transition=null;var R=jt;jt=1;var V=pt;pt|=4,vn.current=null,S(t,o),kt(o,t),op(Vi),ie=!!bl,Vi=bl=null,t.current=o,Bn(o),us(),pt=V,jt=R,Dt.transition=x}else t.current=o;if(nd&&(nd=!1,Ga=t,rd=m),x=t.pendingLanes,x===0&&(Ka=null),$(o.stateNode),ei(t,At()),r!==null)for(p=t.onRecoverableError,o=0;o<r.length;o++)m=r[o],p(m.value,{componentStack:m.stack,digest:m.digest});if(td)throw td=!1,t=yp,yp=null,t;return(rd&1)!==0&&t.tag!==0&&Kl(),x=t.pendingLanes,(x&1)!==0?t===vp?Ku++:(Ku=0,vp=t):Ku=0,Ss(),null}function Kl(){if(Ga!==null){var t=ds(rd),r=Dt.transition,o=jt;try{if(Dt.transition=null,jt=16>t?16:t,Ga===null)var p=!1;else{if(t=Ga,Ga=null,rd=0,(pt&6)!==0)throw Error(d(331));var m=pt;for(pt|=4,a=t.current;a!==null;){var x=a,R=x.child;if((a.flags&16)!==0){var V=x.deletions;if(V!==null){for(var te=0;te<V.length;te++){var fe=V[te];for(a=fe;a!==null;){var Re=a;switch(Re.tag){case 0:case 11:case 15:j(8,Re,x)}var Me=Re.child;if(Me!==null)Me.return=Re,a=Me;else for(;a!==null;){Re=a;var Pe=Re.sibling,Qe=Re.return;if(oe(Re),Re===fe){a=null;break}if(Pe!==null){Pe.return=Qe,a=Pe;break}a=Qe}}}var it=x.alternate;if(it!==null){var at=it.child;if(at!==null){it.child=null;do{var qn=at.sibling;at.sibling=null,at=qn}while(at!==null)}}a=x}}if((x.subtreeFlags&2064)!==0&&R!==null)R.return=x,a=R;else e:for(;a!==null;){if(x=a,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:j(9,x,x.return)}var ce=x.sibling;if(ce!==null){ce.return=x.return,a=ce;break e}a=x.return}}var ae=t.current;for(a=ae;a!==null;){R=a;var de=R.child;if((R.subtreeFlags&2064)!==0&&de!==null)de.return=R,a=de;else e:for(R=ae;a!==null;){if(V=a,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:F(9,V)}}catch(ut){Rn(V,V.return,ut)}if(V===R){a=null;break e}var He=V.sibling;if(He!==null){He.return=V.return,a=He;break e}a=V.return}}if(pt=m,Ss(),E&&typeof E.onPostCommitFiberRoot=="function")try{E.onPostCommitFiberRoot(Yn,t)}catch{}p=!0}return p}finally{jt=o,Dt.transition=r}}return!1}function Hh(t,r,o){r=sa(o,r),r=Ol(t,r,1),t=ci(t,r,1),r=Hr(),t!==null&&(rr(t,1,r),ei(t,r))}function Rn(t,r,o){if(t.tag===3)Hh(t,t,o);else for(;r!==null;){if(r.tag===3){Hh(r,t,o);break}else if(r.tag===1){var p=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof p.componentDidCatch=="function"&&(Ka===null||!Ka.has(p))){t=sa(o,t),t=Fu(r,t,1),r=ci(r,t,1),t=Hr(),r!==null&&(rr(r,1,t),ei(r,t));break}}r=r.return}}function wg(t,r,o){var p=t.pingCache;p!==null&&p.delete(r),r=Hr(),t.pingedLanes|=t.suspendedLanes&o,Mt===t&&(un&o)===o&&(Et===4||Et===3&&(un&130023424)===un&&500>At()-$o?Go(t,0):ts|=o),ei(t,r)}function Bh(t,r){r===0&&((t.mode&1)===0?r=1:(r=Qt,Qt<<=1,(Qt&130023424)===0&&(Qt=4194304)));var o=Hr();t=Ei(t,r),t!==null&&(rr(t,r,o),ei(t,o))}function kg(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Bh(t,o)}function Sg(t,r){var o=0;switch(t.tag){case 13:var p=t.stateNode,m=t.memoizedState;m!==null&&(o=m.retryLane);break;case 19:p=t.stateNode;break;default:throw Error(d(314))}p!==null&&p.delete(r),Bh(t,o)}var Uh;Uh=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||mr.current)er=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return er=!1,gp(t,r,o);er=(t.flags&131072)!==0}else er=!1,rn&&(r.flags&1048576)!==0&&Sl(r,Lr,r.index);switch(r.lanes=0,r.tag){case 2:var p=r.type;Ul(t,r),t=r.pendingProps;var m=ja(r,Jn.current);Js(r,o),m=Rl(null,r,p,t,m,o);var x=Su();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ar(p)?(x=!0,Ea(r)):x=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Nl(r),m.updater=Bo,r.stateNode=m,m._reactInternals=r,Du(r,p,t,o),r=$a(null,r,p,!0,x,o)):(r.tag=0,rn&&x&&Gs(r),vr(null,r,m,o),r=r.child),r;case 16:p=r.elementType;e:{switch(Ul(t,r),t=r.pendingProps,m=p._init,p=m(p._payload),r.type=p,m=r.tag=Cg(p),t=yr(p,t),m){case 0:r=oa(null,r,p,t,o);break e;case 1:r=Zr(null,r,p,t,o);break e;case 11:r=Xc(null,r,p,t,o);break e;case 14:r=Qc(null,r,p,yr(p.type,t),o);break e}throw Error(d(306,p,""))}return r;case 0:return p=r.type,m=r.pendingProps,m=r.elementType===p?m:yr(p,m),oa(t,r,p,m,o);case 1:return p=r.type,m=r.pendingProps,m=r.elementType===p?m:yr(p,m),Zr(t,r,p,m,o);case 3:e:{if(Ml(r),t===null)throw Error(d(387));p=r.pendingProps,x=r.memoizedState,m=x.element,Xs(t,r),El(r,p,null,o);var R=r.memoizedState;if(p=R.element,x.isDehydrated)if(x={element:p,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){m=sa(Error(d(423)),r),r=Hu(t,r,p,o,m);break e}else if(p!==m){m=sa(Error(d(424)),r),r=Hu(t,r,p,o,m);break e}else for(Ln=bs(r.stateNode.containerInfo.firstChild),gr=r,rn=!0,Jr=null,o=Ro(r,null,p,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(La(),p===m){r=Ar(t,r,o);break e}vr(t,r,p,o)}r=r.child}return r;case 5:return wu(r),t===null&&Cl(r),p=r.type,m=r.pendingProps,x=t!==null?t.memoizedProps:null,R=m.children,Bs(p,m)?R=null:x!==null&&Bs(p,x)&&(r.flags|=32),Dl(t,r),vr(t,r,R,o),r.child;case 6:return t===null&&Cl(r),null;case 13:return Wl(t,r,o);case 4:return Zs(r,r.stateNode.containerInfo),p=r.pendingProps,t===null?r.child=Cs(r,null,p,o):vr(t,r,p,o),r.child;case 11:return p=r.type,m=r.pendingProps,m=r.elementType===p?m:yr(p,m),Xc(t,r,p,m,o);case 7:return vr(t,r,r.pendingProps,o),r.child;case 8:return vr(t,r,r.pendingProps.children,o),r.child;case 12:return vr(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(p=r.type._context,m=r.pendingProps,x=r.memoizedProps,R=m.value,Zt(Io,p._currentValue),p._currentValue=R,x!==null)if(_n(x.value,R)){if(x.children===m.children&&!mr.current){r=Ar(t,r,o);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var V=x.dependencies;if(V!==null){R=x.child;for(var te=V.firstContext;te!==null;){if(te.context===p){if(x.tag===1){te=Pi(-1,o&-o),te.tag=2;var fe=x.updateQueue;if(fe!==null){fe=fe.shared;var Re=fe.pending;Re===null?te.next=te:(te.next=Re.next,Re.next=te),fe.pending=te}}x.lanes|=o,te=x.alternate,te!==null&&(te.lanes|=o),Ia(x.return,o,r),V.lanes|=o;break}te=te.next}}else if(x.tag===10)R=x.type===r.type?null:x.child;else if(x.tag===18){if(R=x.return,R===null)throw Error(d(341));R.lanes|=o,V=R.alternate,V!==null&&(V.lanes|=o),Ia(R,o,r),R=x.sibling}else R=x.child;if(R!==null)R.return=x;else for(R=x;R!==null;){if(R===r){R=null;break}if(x=R.sibling,x!==null){x.return=R.return,R=x;break}R=R.return}x=R}vr(t,r,m.children,o),r=r.child}return r;case 9:return m=r.type,p=r.pendingProps.children,Js(r,o),m=Wr(m),p=p(m),r.flags|=1,vr(t,r,p,o),r.child;case 14:return p=r.type,m=yr(p,r.pendingProps),m=yr(p.type,m),Qc(t,r,p,m,o);case 15:return en(t,r,r.type,r.pendingProps,o);case 17:return p=r.type,m=r.pendingProps,m=r.elementType===p?m:yr(p,m),Ul(t,r),r.tag=1,ar(p)?(t=!0,Ea(r)):t=!1,Js(r,o),Kc(r,p,m),Du(r,p,m,o),$a(null,r,p,!0,t,o);case 19:return qu(t,r,o);case 22:return Zc(t,r,o)}throw Error(d(156,r.tag))};function qh(t,r){return zi(t,r)}function _g(t,r,o,p){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=p,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oi(t,r,o,p){return new _g(t,r,o,p)}function _p(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cg(t){if(typeof t=="function")return _p(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Le)return 11;if(t===A)return 14}return 2}function Ja(t,r){var o=t.alternate;return o===null?(o=Oi(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function od(t,r,o,p,m,x){var R=2;if(p=t,typeof t=="function")_p(t)&&(R=1);else if(typeof t=="string")R=5;else e:switch(t){case se:return Vo(o.children,m,x,r);case ve:R=8,m|=8;break;case De:return t=Oi(12,o,r,m|2),t.elementType=De,t.lanes=x,t;case ue:return t=Oi(13,o,r,m),t.elementType=ue,t.lanes=x,t;case xe:return t=Oi(19,o,r,m),t.elementType=xe,t.lanes=x,t;case Q:return ld(o,m,x,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case be:R=10;break e;case ne:R=9;break e;case Le:R=11;break e;case A:R=14;break e;case ee:R=16,p=null;break e}throw Error(d(130,t==null?t:typeof t,""))}return r=Oi(R,o,r,m),r.elementType=t,r.type=p,r.lanes=x,r}function Vo(t,r,o,p){return t=Oi(7,t,p,r),t.lanes=o,t}function ld(t,r,o,p){return t=Oi(22,t,p,r),t.elementType=Q,t.lanes=o,t.stateNode={isHidden:!1},t}function Cp(t,r,o){return t=Oi(6,t,null,r),t.lanes=o,t}function Tp(t,r,o){return r=Oi(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Tg(t,r,o,p,m){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wi(0),this.expirationTimes=Wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.identifierPrefix=p,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function jp(t,r,o,p,m,x,R,V,te){return t=new Tg(t,r,o,V,te),r===1?(r=1,x===!0&&(r|=8)):r=0,x=Oi(3,null,null,r),t.current=x,x.stateNode=t,x.memoizedState={element:p,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nl(x),t}function jg(t,r,o){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:p==null?null:""+p,children:t,containerInfo:r,implementation:o}}function $h(t){if(!t)return ks;t=t._reactInternals;e:{if(On(t)!==t||t.tag!==1)throw Error(d(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ar(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(d(171))}if(t.tag===1){var o=t.type;if(ar(o))return yu(t,o,r)}return r}function Kh(t,r,o,p,m,x,R,V,te){return t=jp(o,p,!0,t,m,x,R,V,te),t.context=$h(null),o=t.current,p=Hr(),m=Ya(o),x=Pi(p,m),x.callback=r??null,ci(o,x,m),t.current.lanes=m,rr(t,m,p),ei(t,p),t}function ud(t,r,o,p){var m=r.current,x=Hr(),R=Ya(m);return o=$h(o),r.context===null?r.context=o:r.pendingContext=o,r=Pi(x,R),r.payload={element:t},p=p===void 0?null:p,p!==null&&(r.callback=p),t=ci(m,r,R),t!==null&&(ns(t,m,R,x),Do(t,m,R)),R}function cd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gh(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function Np(t,r){Gh(t,r),(t=t.alternate)&&Gh(t,r)}function Ng(){return null}var Yh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ep(t){this._internalRoot=t}dd.prototype.render=Ep.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(d(409));ud(t,r,null,null)},dd.prototype.unmount=Ep.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Ko(function(){ud(null,t,null,null)}),r[Xi]=null}};function dd(t){this._internalRoot=t}dd.prototype.unstable_scheduleHydration=function(t){if(t){var r=bi();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Nr.length&&r!==0&&r<Nr[o].priority;o++);Nr.splice(o,0,t),o===0&&lo(t)}};function Pp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vh(){}function Eg(t,r,o,p,m){if(m){if(typeof p=="function"){var x=p;p=function(){var fe=cd(R);x.call(fe)}}var R=Kh(r,p,t,0,null,!1,!1,"",Vh);return t._reactRootContainer=R,t[Xi]=R.current,ys(t.nodeType===8?t.parentNode:t),Ko(),R}for(;m=t.lastChild;)t.removeChild(m);if(typeof p=="function"){var V=p;p=function(){var fe=cd(te);V.call(fe)}}var te=jp(t,0,!1,null,null,!1,!1,"",Vh);return t._reactRootContainer=te,t[Xi]=te.current,ys(t.nodeType===8?t.parentNode:t),Ko(function(){ud(r,te,o,p)}),te}function hd(t,r,o,p,m){var x=o._reactRootContainer;if(x){var R=x;if(typeof m=="function"){var V=m;m=function(){var te=cd(R);V.call(te)}}ud(r,R,t,m)}else R=Eg(o,r,t,m,p);return cd(R)}Is=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=kn(r.pendingLanes);o!==0&&(Hi(r,o|1),ei(r,At()),(pt&6)===0&&($l=At()+500,Ss()))}break;case 13:Ko(function(){var p=Ei(t,1);if(p!==null){var m=Hr();ns(p,t,1,m)}}),Np(t,1)}},xi=function(t){if(t.tag===13){var r=Ei(t,134217728);if(r!==null){var o=Hr();ns(r,t,134217728,o)}Np(t,134217728)}},ya=function(t){if(t.tag===13){var r=Ya(t),o=Ei(t,r);if(o!==null){var p=Hr();ns(o,t,r,p)}Np(t,r)}},bi=function(){return jt},Bi=function(t,r){var o=jt;try{return jt=t,r()}finally{jt=o}},Cr=function(t,r,o){switch(r){case"input":if(We(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var p=o[r];if(p!==t&&p.form===t.form){var m=gn(p);if(!m)throw Error(d(90));zt(p),We(p,m)}}}break;case"textarea":he(t,o);break;case"select":r=o.value,r!=null&&ft(t,!!o.multiple,r,!1)}},Nn=wp,bn=Ko;var Pg={usingClientEntryPoint:!1,Events:[pn,Cn,gn,xn,mn,wp]},Gu={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lg={bundleType:Gu.bundleType,version:Gu.version,rendererPackageName:Gu.rendererPackageName,rendererConfig:Gu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gn(t),t===null?null:t.stateNode},findFiberByHostInstance:Gu.findFiberByHostInstance||Ng,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fd.isDisabled&&fd.supportsFiber)try{Yn=fd.inject(Lg),E=fd}catch{}}return ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pg,ti.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pp(r))throw Error(d(200));return jg(t,r,null,o)},ti.createRoot=function(t,r){if(!Pp(t))throw Error(d(299));var o=!1,p="",m=Yh;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(p=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=jp(t,1,!1,null,null,o,!1,p,m),t[Xi]=r.current,ys(t.nodeType===8?t.parentNode:t),new Ep(r)},ti.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=Gn(r),t=t===null?null:t.stateNode,t},ti.flushSync=function(t){return Ko(t)},ti.hydrate=function(t,r,o){if(!pd(r))throw Error(d(200));return hd(null,t,r,!0,o)},ti.hydrateRoot=function(t,r,o){if(!Pp(t))throw Error(d(405));var p=o!=null&&o.hydratedSources||null,m=!1,x="",R=Yh;if(o!=null&&(o.unstable_strictMode===!0&&(m=!0),o.identifierPrefix!==void 0&&(x=o.identifierPrefix),o.onRecoverableError!==void 0&&(R=o.onRecoverableError)),r=Kh(r,null,t,1,o??null,m,!1,x,R),t[Xi]=r.current,ys(t),p)for(t=0;t<p.length;t++)o=p[t],m=o._getVersion,m=m(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,m]:r.mutableSourceEagerHydrationData.push(o,m);return new dd(r)},ti.render=function(t,r,o){if(!pd(r))throw Error(d(200));return hd(null,t,r,!1,o)},ti.unmountComponentAtNode=function(t){if(!pd(t))throw Error(d(40));return t._reactRootContainer?(Ko(function(){hd(null,null,t,!1,function(){t._reactRootContainer=null,t[Xi]=null})}),!0):!1},ti.unstable_batchedUpdates=wp,ti.unstable_renderSubtreeIntoContainer=function(t,r,o,p){if(!pd(o))throw Error(d(200));if(t==null||t._reactInternals===void 0)throw Error(d(38));return hd(t,r,o,!1,p)},ti.version="18.3.1-next-f1338f8080-20240426",ti}var rf;function Bg(){if(rf)return Rp.exports;rf=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Rp.exports=Hg(),Rp.exports}var sf;function Ug(){if(sf)return md;sf=1;var l=Bg();return md.createRoot=l.createRoot,md.hydrateRoot=l.hydrateRoot,md}var qg=Ug();const $g=[["Avery","Morgan","averym","Avery","p1"],["Jordan","Brooks","jbrooks17","Jordan Brooks","p1"],["Taylor","Reed","treed","T. Reed","p1"],["Casey","Nguyen","cnguyen","Casey","p1"],["Riley","Davis","rileyd","Riley","p1"],["Maya","Patel","maya-p","Maya","p3"],["Cameron","Lee","clee","Cameron Lee","p3"],["Sydney","Wilson","sydneyw","Sydney","p3"],["Quinn","Martinez","qmartinez","Quinn","p3"],["Bailey","Adams","bailey_a","Bailey","p5"],["Sam","Rivera","rivera-s","Sam","p5"],["Charlie","Brown","charlieb","Charlie","p6"],["Drew","Johnson","drewj","Drew","p6"],["Alex","Kim","alexk","Alex","p7"],["Robin","Clark","robin-c","Robin","p7"],["Jamie","Flores","jflores","Jamie","p8"]],Zp=$g.map(([l,u,d,f,g],v)=>({id:`sample-${v+1}`,first:l,last:u,sheetName:v===3||v===11?null:`${l} ${u}`,github:d,studentName:f,sections:v===0?["p1","p3"]:[g],status:v%5===0?"Active now":v%4===0?"Viewing page":"No recent signal",current:v%3===0?"Strings and Variables":v%3===1?"Format a Summary":"Intro to Arrays",assignments:[{id:"strings",name:"Strings and Variables",type:"Lesson",status:"Completed",score:v%4===0?null:8+v%3,possible:10,submitted:"2026-11-02"},{id:"summary",name:"Format a Summary",type:"Challenge",status:v%4===0?"Started":"Completed",score:v%4===0?null:11+v%5,possible:15,submitted:"2026-11-03"},{id:"decisions",name:"Decision Tree",type:"Challenge",status:v%3===0?"Submitted":"Needs revision",score:v%3===0?10:null,possible:20,submitted:"2026-10-28"},{id:"reflection",name:"Debugging Reflection",type:"Lesson",status:"Practice completed",score:null,possible:5,submitted:"2026-10-26"}],weekly:{"2026-11-02":v%4===0?0:19+v%6,"2026-10-26":v%3===0?12:8+v%5}})),Kg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function Nd(l=new Date){const u=Object.fromEntries(Kg.formatToParts(l).filter(f=>f.type!=="literal").map(f=>[f.type,f.value])),d=new Date(Date.UTC(Number(u.year),Number(u.month)-1,Number(u.day)));return d.setUTCDate(d.getUTCDate()-(d.getUTCDay()+6)%7),d.toISOString().slice(0,10)}function Gg(l=new Date,u=8){const d=new Date(Nd(l)+"T12:00:00Z");return Array.from({length:u},(f,g)=>{const v=new Date(d);return v.setUTCDate(v.getUTCDate()-g*7),v.toISOString().slice(0,10)})}const sc=l=>new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"America/Chicago"}),Yg=(l,u,d)=>`${l}|${u}|${d}`;function Vg({response:l,type:u,aiUse:d,aiDetails:f}){return["essay","logic-puzzle"].includes(u)?String(l).trim().length<10?"Write your answer and explain your thinking.":["none","disclosed"].includes(d)?d==="disclosed"&&String(f).trim().length<5?"Describe which parts involved AI.":"":"Complete the AI-use declaration.":"Select an essay or logic puzzle."}const Jg=[{id:"seed-journal-1",sectionId:"p1",studentId:"sample-2",studentName:"Jordan Brooks",courseId:"computer-science-1",week:Nd(),type:"essay",response:"When I debug code, I first reproduce the problem and read the error carefully. Next I try one small change and test again. I keep notes so I can explain what fixed the problem and why.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()},{id:"seed-journal-2",sectionId:"p1",studentId:"sample-3",studentName:"Taylor Reed",courseId:"computer-science-1",week:Nd(),type:"logic-puzzle",response:"The differences are 4, 6, 8, and 10. The next difference is 12, so the next number is 42. This also follows the pattern n(n+1), starting at n = 1.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()}],Ps={"game-programming":[{id:"csharp-foundations",title:"C# Foundations",description:"Build the logic behind games.",lessons:["csharp-variables","csharp-conditionals"]},{id:"unity-systems",title:"Unity Gameplay",description:"Connect scripts and game mechanics.",lessons:["unity-colliders","unity-player-controller","unity-score"]}],"mobile-app-dev":[{id:"web-basics",title:"Web Foundations",description:"Create and style interface elements.",lessons:["web-layout","web-events"]},{id:"react-foundations",title:"React Essentials",description:"Build reusable and interactive UI.",lessons:["react-components","react-state"]}],uil:[{id:"java-language",title:"Java Language & Tracing",description:"Reason about loops and variables.",lessons:["uil-loops","uil-methods"]},{id:"java-data",title:"Data Structures",description:"Trace arrays and string operations.",lessons:["uil-arrays","uil-strings"]}],"tsi-math":[{id:"tsi-quantitative",title:"Quantitative Reasoning",description:"Rates, ratios, percentages, and proportions.",lessons:["tsi-ratios","tsi-percents"]},{id:"tsi-algebra",title:"Algebraic Reasoning",description:"Solve equations and interpret graphs.",lessons:["tsi-equations","tsi-slope"]}],capstone:[{id:"capstone-discover",title:"Discover the Problem",description:"Investigate a need worth solving.",lessons:["capstone-discovery","capstone-interviews"]},{id:"capstone-validate",title:"Prototype & Validate",description:"Turn evidence into an iterated prototype.",lessons:["capstone-prototype","capstone-feedback"]}]},dc=[{id:"asvab",title:"ASVAB",subtitle:"Military aptitude",description:"Start with the four AFQT subjects; technical subtests can be added later.",reference:"https://www.officialasvab.com/applicants/sample-questions/",topics:[{id:"asvab-ar",title:"Arithmetic Reasoning",description:"Use math to solve everyday word problems.",questions:[{id:"asvab-ar-sample-01",prompt:"A supply team divides 96 bolts equally among 8 tool kits. How many bolts go into each kit?",options:["8","10","12","16"],correct:2,explanation:"Divide 96 by 8. Each tool kit receives 12 bolts."},{id:"asvab-ar-sample-02",prompt:"A delivery vehicle travels 180 miles in 3 hours at a steady speed. What is its average speed?",options:["45 mph","60 mph","75 mph","90 mph"],correct:1,explanation:"Average speed equals distance divided by time: 180 ÷ 3 = 60 mph."}]},{id:"asvab-wk",title:"Word Knowledge",description:"Practice synonyms and vocabulary in context.",questions:[{id:"asvab-wk-sample-01",prompt:'In the sentence "The technician was meticulous when checking each connection," meticulous most nearly means:',options:["hurried","careful","uninterested","unprepared"],correct:1,explanation:"Meticulous describes someone who gives careful attention to detail."},{id:"asvab-wk-sample-02",prompt:'The word "scarce" most nearly means:',options:["plentiful","fragile","limited","unusual"],correct:2,explanation:"If something is scarce, there is not much of it available."}]},{id:"asvab-pc",title:"Paragraph Comprehension",description:"Identify main ideas and supporting details.",questions:[{id:"asvab-pc-sample-01",prompt:"Passage: The neighborhood library added Saturday hours because weekday attendance had increased. Staff hope the extra day will help working families visit. Why did the library extend its schedule?",options:["To replace weekday hours","To make visits easier for more people","To reduce staff","To host only weekend events"],correct:1,explanation:"The passage says Saturday hours respond to demand and help working families visit."},{id:"asvab-pc-sample-02",prompt:"Passage: Before using the lab, workers inspect equipment, record damaged items, and report problems. This routine helps prevent interruptions and injuries. What is the main purpose of the routine?",options:["Improving safety and reliability","Making the lab look new","Reducing all written records","Increasing equipment costs"],correct:0,explanation:"The checklist catches problems early and lowers risk to people and equipment."}]},{id:"asvab-mk",title:"Mathematics Knowledge",description:"Review algebra, geometry, and number sense.",questions:[{id:"asvab-mk-sample-01",prompt:"Solve for x: 3(x − 2) = 15.",options:["3","5","7","9"],correct:2,explanation:"Divide by 3: x − 2 = 5. Add 2: x = 7."},{id:"asvab-mk-sample-02",prompt:"What is the area of a triangle with a base of 10 units and a height of 7 units?",options:["17 square units","35 square units","70 square units","140 square units"],correct:1,explanation:"Triangle area is one-half times base times height: (10 × 7) ÷ 2 = 35."}]}]},{id:"sat",title:"SAT",subtitle:"Digital SAT",description:"Practice the Reading and Writing and Math sections. These samples are not adaptive and do not produce SAT scores.",reference:"https://satsuite.collegeboard.org/sat/practice-preparation",topics:[{id:"sat-rw",title:"Reading and Writing",description:"Interpret short passages, revise sentences, and choose transitions.",questions:[{id:"sat-rw-sample-01",prompt:'Choose the best transition: "Maya planned to bike to school. _____, heavy rain forced her to take the bus."',options:["For example","However","Similarly","Therefore"],correct:1,explanation:"However signals the contrast between Maya's plan and what happened."},{id:"sat-rw-sample-02",prompt:"Choose the grammatically correct sentence.",options:["Each of the notebooks have a label.","Each of the notebooks has a label.","Each of the notebooks are labeled.","Each of the notebook have labels."],correct:1,explanation:"The subject each is singular, so it takes has."}]},{id:"sat-math",title:"Math",description:"Use algebra and problem-solving strategies.",questions:[{id:"sat-math-sample-01",prompt:"If f(x) = 2x + 5, what is f(4)?",options:["9","11","13","18"],correct:2,explanation:"Substitute 4 for x: f(4) = 2(4) + 5 = 13."},{id:"sat-math-sample-02",prompt:"If 2x + y = 11 and y = 3, what is x?",options:["3","4","5","7"],correct:1,explanation:"Replace y with 3: 2x + 3 = 11, so 2x = 8 and x = 4."}]}]},{id:"act",title:"ACT",subtitle:"Enhanced ACT",description:"Practice English, Math, Reading, and optional Science using the updated ACT structure.",reference:"https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/act-exam-sections-and-structure.html",topics:[{id:"act-english",title:"English",description:"Revise sentences for grammar and clarity.",questions:[{id:"act-english-sample-01",prompt:'Choose the correct verb: "The team of engineers _____ ready to begin."',options:["are","is","were","have"],correct:1,explanation:"The singular subject team takes the singular verb is."},{id:"act-english-sample-02",prompt:"Choose the correctly punctuated sentence.",options:["After the storm the street was quiet.","After the storm, the street was quiet.","After, the storm the street was quiet.","After the storm the, street was quiet."],correct:1,explanation:"An introductory phrase is commonly followed by a comma."}]},{id:"act-math",title:"Math",description:"Practice algebra, geometry, and problem solving.",questions:[{id:"act-math-sample-01",prompt:"What is the slope of the line through (2, 1) and (6, 9)?",options:["1","2","4","8"],correct:1,explanation:"Slope = change in y ÷ change in x = (9 − 1) ÷ (6 − 2) = 8 ÷ 4 = 2."},{id:"act-math-sample-02",prompt:"A rectangle measures 8 inches by 5 inches. What is its perimeter?",options:["13 inches","26 inches","40 inches","80 inches"],correct:1,explanation:"Perimeter = 2(length + width) = 2(8 + 5) = 26 inches."}]},{id:"act-reading",title:"Reading",description:"Find key details and reasonable inferences.",questions:[{id:"act-reading-sample-01",prompt:"Passage: Lena repaired an old bicycle rather than buy a new one. She replaced the chain and adjusted the brakes so she could use it to commute. Which statement is supported?",options:["Lena sold the bike.","Lena intends to ride the repaired bike.","Lena cannot fix brakes.","Lena purchased a new bike."],correct:1,explanation:"The passage explicitly says Lena repaired the bike to use it for commuting."},{id:"act-reading-sample-02",prompt:"Passage: Residents created a neighborhood garden on an empty lot. Volunteers donated seeds, installed raised beds, and shared the harvest. What best describes the project?",options:["A commercial farm run by one company","A volunteer project that benefits neighbors","A plan to close the lot permanently","An indoor science experiment"],correct:1,explanation:"The volunteers worked together on a shared garden and harvest."}]},{id:"act-science",title:"Science (optional)",description:"Interpret experimental results, charts, and evidence.",questions:[{id:"act-science-sample-01",prompt:"In an experiment, a plant grew 2 cm at 10°C, 4 cm at 20°C, and 6 cm at 30°C over the same period. What pattern is shown?",options:["Growth decreases as temperature increases.","Growth remains constant.","Growth increases with temperature in these trials.","Temperature has no measurable relationship."],correct:2,explanation:"The recorded growth rises from 2 to 4 to 6 cm as temperature increases across these trials."},{id:"act-science-sample-02",prompt:"Two identical seedlings get the same light and water. One receives fertilizer and the other does not. Which variable is intentionally changed?",options:["Amount of light","Amount of water","Type of plant","Use of fertilizer"],correct:3,explanation:"Fertilizer is the independent variable; the other conditions are kept the same."}]}]}],af=dc.map(l=>({id:l.id,title:l.title,description:l.description,lessons:l.topics.map(u=>u.id)})),Xg=Object.fromEntries(dc.flatMap(l=>l.topics.map(u=>[u.id,{id:u.id,title:u.title,summary:u.description,language:"text",kind:"Sample practice",trackId:l.id}]))),Qg=l=>{for(const u of dc){const d=u.topics.find(f=>f.id===l);if(d)return{track:u,topic:d}}return null};dc.reduce((l,u)=>l+u.topics.reduce((d,f)=>d+f.questions.length,0),0);const Zg=[{id:"01-how-programs-work/01-first-message",unit:1,unitName:"How Programs Work",lesson:1,slug:"01-first-message",title:"Instructions and Output",concept:"Output and strings",summary:"Tell a computer what to display using a simple Python instruction.",mode:"script",starter:`# Use print() to display the exact welcome message.
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
`},{id:"01-how-programs-work/02-startup-sequence",unit:1,unitName:"How Programs Work",lesson:2,slug:"02-startup-sequence",title:"Sequence and Tracing",concept:"Program sequence",summary:"Learn how the order of instructions changes the result.",mode:"script",starter:`# These lines are correct, but they are in the wrong order.
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
`},{id:"01-how-programs-work/03-fix-the-messages",unit:1,unitName:"How Programs Work",lesson:3,slug:"03-fix-the-messages",title:"Comments and Debugging",concept:"Comments and debugging",summary:"Read an error message, repair the instructions, and try again.",mode:"script",starter:`# This program has syntax errors. Find and repair them.
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
`},{id:"01-how-programs-work/04-robotics-status",unit:1,unitName:"How Programs Work",lesson:4,slug:"04-robotics-status",title:"Cumulative Mini-Project",concept:"Cumulative project",summary:"Combine printing, sequence, and comments in a program you write yourself.",mode:"script",starter:`# Write a three-line robotics status display.
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
`}],ey=[{id:"02-values-and-variables/01-meet-variables",unit:2,unitName:"Values, Variables & Expressions",lesson:1,slug:"01-meet-variables",title:"Names for Changing Information",concept:"Variables and assignment  ",summary:"Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.",mode:"script",starter:`# Name the player with a variable, then display the required message.
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
`},{id:"02-values-and-variables/02-numbers-and-operations",unit:2,unitName:"Values, Variables & Expressions",lesson:2,slug:"02-numbers-and-operations",title:"Calculate with Numbers",concept:"Integer arithmetic  ",summary:"Unlike strings, integers support calculations. Python evaluates arithmetic expressions before producing output.",mode:"script",starter:`# How many minutes are spent in three sessions?
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
`},{id:"02-values-and-variables/03-types-and-conversion",unit:2,unitName:"Values, Variables & Expressions",lesson:3,slug:"03-types-and-conversion",title:"Numbers Aren't Always Text",concept:"String, int, float, conversion  ",summary:"Python gives values different types. Strings hold text; integers hold whole numbers; floats hold decimal numbers.",mode:"script",starter:`# Give the two variables their correct numeric types.
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
`}],ty=[{id:"03-functions-and-parameters/01-functions-return",unit:3,unitName:"Functions, Parameters & Return Values",lesson:1,slug:"01-functions-return",title:"Returning an Answer",concept:"Function definitions and return  ",summary:"A function packages instructions into a reusable operation. A function can give a result back with `return`.",mode:"function",starter:`def increment_number(number):
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
`},{id:"03-functions-and-parameters/02-parameters",unit:3,unitName:"Functions, Parameters & Return Values",lesson:2,slug:"02-parameters",title:"Working with Two Inputs",concept:"Parameters and arguments  ",summary:"Functions can have more than one parameter. An argument is the actual value supplied for a parameter when a function is called.",mode:"function",starter:`def calculate_pay(hours, rate):
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
`},{id:"03-functions-and-parameters/03-strings-from-functions",unit:3,unitName:"Functions, Parameters & Return Values",lesson:3,slug:"03-strings-from-functions",title:"Return a String",concept:"String expressions and return types  ",summary:"Functions don't have to return numbers. A function can construct and return a message using text and its inputs.",mode:"function",starter:`def create_greeting(username):
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
`}],ny=[{id:"04-comparisons-and-boolean-logic/01-comparisons",unit:4,unitName:"Comparisons & Boolean Logic",lesson:1,slug:"01-comparisons",title:"Ask Python a Question",concept:"Comparison operators and Boolean values  ",summary:"A comparison is a question that evaluates to a Boolean value: `True` or `False`.",mode:"function",starter:`def has_required_points(current, required):
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
`},{id:"04-comparisons-and-boolean-logic/02-equality",unit:4,unitName:"Comparisons & Boolean Logic",lesson:2,slug:"02-equality",title:"Exact Matches Matter",concept:"Equality and inequality  ",summary:"Some actions should only happen when two values match exactly.",mode:"function",starter:`def codes_match(expected_code, entered_code):
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
`},{id:"04-comparisons-and-boolean-logic/03-and-or-not",unit:4,unitName:"Comparisons & Boolean Logic",lesson:3,slug:"03-and-or-not",title:"Combine Conditions",concept:"Logical operators  ",summary:"Real decisions often require more than one condition. Python combines Boolean expressions with `and`, `or`, and `not`.",mode:"function",starter:`def can_send_notification(online, muted):
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
`}],ry=[{id:"05-conditional-execution/01-first-if",unit:5,unitName:"Conditional Execution",lesson:1,slug:"01-first-if",title:"Make a Choice with if",concept:"If statements and indentation  ",summary:"Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.",mode:"function",starter:`def classify_temperature(temperature):
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
`},{id:"05-conditional-execution/02-if-else",unit:5,unitName:"Conditional Execution",lesson:2,slug:"02-if-else",title:"Two Possible Paths",concept:"If and else  ",summary:"An `if`/`else` structure guarantees that exactly one of two branches runs.",mode:"function",starter:`def classify_pass_status(points):
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
`},{id:"05-conditional-execution/03-elif-bands",unit:5,unitName:"Conditional Execution",lesson:3,slug:"03-elif-bands",title:"More than Two Outcomes",concept:"Elif chains and mutually exclusive ranges  ",summary:"Use `elif` to check another condition after the first fails. In a chain, Python selects the first true branch.",mode:"function",starter:`def classify_score(score):
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
`}],iy=[{id:"06-iteration/01-for-ranges",unit:6,unitName:"Iteration & Accumulation",lesson:1,slug:"01-for-ranges",title:"Repeat an Instruction",concept:"For loops and ranges  ",summary:"A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.",mode:"script",starter:`# Use one loop to print the integers 1 through 4.
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
`},{id:"06-iteration/02-running-total",unit:6,unitName:"Iteration & Accumulation",lesson:2,slug:"02-running-total",title:"Add Values as You Go",concept:"Accumulator variable  ",summary:"A running total begins at a starting value and changes every time a loop visits another item.",mode:"function",starter:`def sum_to_limit(limit):
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
`},{id:"06-iteration/03-count-matches",unit:6,unitName:"Iteration & Accumulation",lesson:3,slug:"03-count-matches",title:"Count Matches in a Range",concept:"Counters, modulo, and conditional loops  ",summary:"You can combine an if statement with a loop to count how many numbers meet a rule.",mode:"function",starter:`def count_multiples_of_three(limit):
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
`}],sy=[{id:"07-strings-and-text/01-index-and-length",unit:7,unitName:"Strings & Text Processing",lesson:1,slug:"01-index-and-length",title:"Read Characters by Position",concept:"String indexing and length",summary:"A string is an ordered sequence of characters. Positions start at zero, and negative indexes count from the end.",mode:"function",starter:`def edge_letters(text):
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
`},{id:"07-strings-and-text/02-slices-and-substrings",unit:7,unitName:"Strings & Text Processing",lesson:2,slug:"02-slices-and-substrings",title:"Take a Slice of a String",concept:"Slicing, bounds and uppercasing",summary:"A slice extracts part of a string without modifying it; the ending position is excluded.",mode:"function",starter:`def short_code(text):
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
`},{id:"07-strings-and-text/03-clean-up-input",unit:7,unitName:"Strings & Text Processing",lesson:3,slug:"03-clean-up-input",title:"Clean Messy Text",concept:"strip, lower, replace",summary:"String methods can normalize inconsistent user input without requiring the user to type perfectly.",mode:"function",starter:`def normalize_tag(tag):
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
`},{id:"07-strings-and-text/04-build-a-badge",unit:7,unitName:"Strings & Text Processing",lesson:4,slug:"04-build-a-badge",title:"Build a Digital Name Badge",concept:"Formatting and multiple parameters",summary:"A function can combine several cleaned input strings into a single, precisely formatted message.",mode:"function",starter:`def format_badge(name, role):
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
`}],ay=[{id:"08-lists-and-collections/01-list-indexing",unit:8,unitName:"Lists & Collections",lesson:1,slug:"01-list-indexing",title:"Read Values from a List",concept:"Lists, indexes, negative positions",summary:"A list stores several values in order, and each can be read using its position.",mode:"function",starter:`def end_points(values):
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
`},{id:"08-lists-and-collections/02-copy-and-change",unit:8,unitName:"Lists & Collections",lesson:2,slug:"02-copy-and-change",title:"Update a Copy, Not the Original",concept:"List copying and assignment",summary:"Lists are mutable, so programs should decide carefully whether to change the caller's data or return a modified copy.",mode:"function",starter:`def replace_last(items, value):
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
`},{id:"08-lists-and-collections/03-filter-a-list",unit:8,unitName:"Lists & Collections",lesson:3,slug:"03-filter-a-list",title:"Keep Values That Meet a Rule",concept:"For loops, if statements, accumulators",summary:"A loop can inspect a collection and build a new list containing only matching items.",mode:"function",starter:`def positive_values(numbers):
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
`},{id:"08-lists-and-collections/04-build-a-leaderboard",unit:8,unitName:"Lists & Collections",lesson:4,slug:"04-build-a-leaderboard",title:"Build a Score Leaderboard",concept:"Sorted lists, reverse order and preserving data",summary:"A leaderboard orders numeric scores while leaving the original score list unchanged.",mode:"function",starter:`def top_two(scores):
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
`}],oy=[{id:"09-dictionaries-and-data/01-keys-and-values",unit:9,unitName:"Dictionaries & Data",lesson:1,slug:"01-keys-and-values",title:"Look Up Information by Key",concept:"Dictionary lookup and get",summary:"Dictionaries connect unique keys with values, letting a program retrieve information by name.",mode:"function",starter:`def price_for(prices, item):
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
`},{id:"09-dictionaries-and-data/02-count-with-dictionaries",unit:9,unitName:"Dictionaries & Data",lesson:2,slug:"02-count-with-dictionaries",title:"Count Repeated Events",concept:"Frequency tables and dictionary updates",summary:"A frequency table records how many times each event appears.",mode:"function",starter:`def event_counts(events):
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
`},{id:"09-dictionaries-and-data/03-records-and-fields",unit:9,unitName:"Dictionaries & Data",lesson:3,slug:"03-records-and-fields",title:"Read a Collection of Records",concept:"Lists of dictionaries, fields and comparison",summary:"A list of dictionaries can represent several records with the same field names.",mode:"function",starter:`def best_student(records):
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
`},{id:"09-dictionaries-and-data/04-inventory-calculator",unit:9,unitName:"Dictionaries & Data",lesson:4,slug:"04-inventory-calculator",title:"Calculate an Inventory Order",concept:"Dictionary items, nested lookup, accumulators",summary:"A short program can combine quantities and prices from separate dictionaries to calculate a total.",mode:"function",starter:`def order_total(quantities, prices):
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
`}],ly=[{id:"10-algorithms-and-testing/01-while-and-sentinels",unit:10,unitName:"Algorithms & Testing",lesson:1,slug:"01-while-and-sentinels",title:"Repeat Until a Stop Signal",concept:"While loops and sentinel values",summary:"A `while` loop repeats until a condition changes, making it useful when the stopping point is part of the input.",mode:"function",starter:`def before_stop(events):
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
`},{id:"10-algorithms-and-testing/02-decompose-a-problem",unit:10,unitName:"Algorithms & Testing",lesson:2,slug:"02-decompose-a-problem",title:"Break a Problem into Helper Functions",concept:"Decomposition, pure functions",summary:"Small functions can each handle one responsibility and work together to solve a larger task.",mode:"function",starter:`def total_with_bonus(scores, bonus):
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
`},{id:"10-algorithms-and-testing/03-search-for-a-match",unit:10,unitName:"Algorithms & Testing",lesson:3,slug:"03-search-for-a-match",title:"Find the First Matching Position",concept:"Linear search and enumerate",summary:"A linear search visits items in order and stops once it finds the first matching value.",mode:"function",starter:`def first_position(values, target):
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
`},{id:"10-algorithms-and-testing/04-build-an-event-report",unit:10,unitName:"Algorithms & Testing",lesson:4,slug:"04-build-an-event-report",title:"Build a Data-Informed Event Report",concept:"Counting, sorting, formatting and testing",summary:"Turn raw event records into a consistent, readable summary using several Python skills together.",mode:"function",starter:`def event_report(events):
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
`}],uy=[...Zg,...ey,...ty,...ny,...ry,...iy,...sy,...ay,...oy,...ly],hm={"python-strings":{title:"Strings and Variables",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Create a greeting using a name and a favorite topic.",starter:`name = "Jordan"
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
`,console:"Run, Check and Submit are simulated in this React design lab."},"tsi-percents":{title:"Percents and Discounts",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Use percentages in everyday situations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-equations":{title:"Solve Linear Equations",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Solve a one-variable equation with inverse operations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-slope":{title:"Slope and Rate of Change",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Interpret slope from a table of values.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."}};function eo(l){return typeof l=="string"?l:typeof(l==null?void 0:l.id)=="string"?l.id:""}function Rs(l){return String((l==null?void 0:l.title)||(l==null?void 0:l.unitName)||(l==null?void 0:l.name)||"Lessons")}function pc(l,u=1){return(l==null?void 0:l.number)??(l==null?void 0:l.unit)??u}function is(l){return((l==null?void 0:l.lessons)||[]).map(eo).filter(Boolean)}function ac(l){return Array.isArray(l==null?void 0:l.units)?l.units.flatMap(is):Array.isArray(l==null?void 0:l.lessons)?l.lessons.map(eo).filter(Boolean):[]}function cy(l,u){return((l==null?void 0:l.units)||[]).some(d=>is(d).includes(u))}function to(l,u,d=hm){var w,C;if(!u)return null;const f=((l==null?void 0:l.units)||[]).find(N=>is(N).includes(u)),g=((f==null?void 0:f.lessons)||[]).find(N=>eo(N)===u),v=typeof g=="object"&&g||((w=f==null?void 0:f.lessonMeta)==null?void 0:w[u])||((C=l==null?void 0:l.lessonRecords)==null?void 0:C[u])||{},k=(d==null?void 0:d[u])||{},_=String(v.title||v.name||k.title||u.split("/").at(-1));return{...k,...v,id:u,title:_,kind:v.kind||k.kind||"Lesson",difficulty:v.difficulty||k.difficulty||"",points:v.points??k.points??null,language:v.language||k.language||(l==null?void 0:l.language)||"text",challenge:v.challenge||v.summary||k.challenge||"",starter:v.starter||k.starter||"",console:k.console||(v.markdownSource?v.language==="python"?"Run Python to see your output. Checks use published examples only.":"Preview-only workspace. Use the production Playground for functional language runners and verified checks.":""),ready:!!(d!=null&&d[u])||typeof v.markdownSource=="string"&&v.starter!==void 0,isPublished:typeof v.markdownSource=="string"&&v.starter!==void 0}}function no(l,u,d=hm){var f;return((f=to(l,u,d))==null?void 0:f.title)||""}function rl(l){const u=Array.isArray(l)?{lessons:l}:l||{},d=new Map,f=new Set,g=[],v=(w,C,N,O)=>{const L=String(w);let Y=g.find(U=>U.id===L);return Y||(Y={id:L,title:String(C||"Lessons"),description:String(N||""),number:O,lessons:[]},g.push(Y)),Y},k=(w,C)=>{const N=eo(C);!N||f.has(N)||(f.add(N),w.lessons.push(N),d.set(N,typeof C=="string"?{id:N}:{...C}))};Array.isArray(u.units)?u.units.forEach((w,C)=>{const N=v(w.id||`unit-${C+1}`,Rs(w),w.description||w.summary,pc(w,C+1));(w.lessons||[]).forEach(O=>k(N,O))}):Array.isArray(u.lessons)&&u.lessons.forEach((w,C)=>{if(!w||!eo(w))return;const N=w.unit||null,O=eo(w).indexOf("/"),L=N!=null?O>=0?eo(w).slice(0,O):`unit-${N}`:w.competency?`topic-${String(w.competency).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`:"lessons",Y=w.unitName||w.competency||"Lessons",U=v(L,Y,"",N??g.length+1);k(U,w)});const _=Object.fromEntries((u.challenges||[]).filter(Boolean).map(w=>[eo(w),{...w}]).filter(([w])=>w));return{units:g,lessonRecords:Object.fromEntries(d),lessons:g.flatMap(is),challengeRecords:_,challenges:Object.keys(_)}}const Dp=rl(uy),rs=[{id:"computer-science-1",units:Dp.units,lessonRecords:Dp.lessonRecords,language:"python",publishedContent:!0,slug:"computer-science-1",label:"Computer Science I",short:"Python",glyph:"py",color:"#6366F1",description:"Build your problem-solving toolkit with Python.",lessons:Dp.lessons,topics:["Variables","Strings","Formatting","Conditions","Lists"]},{id:"game-programming",units:Ps["game-programming"],slug:"game-programming",label:"Game Programming & Design",short:"C# · Unity",glyph:"C#",color:"#C052EB",description:"Make ideas playable with Unity and C#.",lessons:Ps["game-programming"].flatMap(l=>l.lessons),topics:["C# Basics","Rigidbody","Colliders"]},{id:"mobile-app-dev",units:Ps["mobile-app-dev"],slug:"mobile-app-web",label:"Mobile App & Web",short:"React · JavaScript",glyph:"js",color:"#27BBD2",description:"Create useful websites and mobile applications.",lessons:Ps["mobile-app-dev"].flatMap(l=>l.lessons),topics:["HTML","CSS","JavaScript","React"]},{id:"capstone",units:Ps.capstone,slug:"capstone",label:"Capstone",short:"Build for someone",glyph:"++",color:"#FF2D55",description:"Research a problem, prototype, and test a solution.",lessons:Ps.capstone.flatMap(l=>l.lessons),topics:["Research","Prototype","Pitch"]},{id:"uil",units:Ps.uil,slug:"uil",label:"UIL Computer Science",short:"Java",glyph:"jv",color:"#FF9F0A",description:"Trace Java, explain your reasoning, and practice.",lessons:Ps.uil.flatMap(l=>l.lessons),topics:["Java","Arrays","Written","Programming"]},{id:"test-prep",units:af,lessonRecords:Xg,slug:"test-prep",label:"Test Prep",short:"TSI · ASVAB · SAT · ACT",glyph:"ex",color:"#15B7A3",description:"College readiness and military aptitude study, all in one place.",lessons:af.flatMap(l=>l.lessons),topics:["TSI","ASVAB","SAT","ACT"]},{id:"tsi-math",units:Ps["tsi-math"],slug:"tsi-math",label:"TSI Math Advisory",short:"Math · Open access",glyph:"ma",color:"#30C85A",description:"Quantitative reasoning and algebra practice.",lessons:Ps["tsi-math"].flatMap(l=>l.lessons),topics:["Percents","Ratios","Equations"]}],Sr=l=>rs.find(u=>u.id===l),fm=l=>{var u;return(u=Sr(l))==null?void 0:u.label};function Md(l){return typeof l=="string"&&/^#[0-9a-fA-F]{6}$/.test(l)}function dy(l,u={}){const d=u&&typeof u=="object"?u[l.id]:null;return Md(d)?d.toUpperCase():l.color}function py(l){if(!Md(l))return"#101012";const u=[1,3,5].map(f=>parseInt(l.slice(f,f+2),16)/255).map(f=>f<=.04045?f/12.92:((f+.055)/1.055)**2.4);return u[0]*.2126+u[1]*.7152+u[2]*.0722>.179?"#101012":"#FFFFFF"}function hy(l,u,d=document.documentElement){for(const f of u){const g=`--student-course-color-${f.id}`,v=l&&typeof l=="object"?l[f.id]:null,k=`--student-course-ink-${f.id}`;Md(v)?(d.style.setProperty(g,v),d.style.setProperty(k,py(v))):(d.style.removeProperty(g),d.style.removeProperty(k))}}function Kn(l,u){const[d,f]=ye.useState(()=>{try{const g=localStorage.getItem(l);return g===null?u:JSON.parse(g)}catch{return u}});return ye.useEffect(()=>{try{localStorage.setItem(l,JSON.stringify(d))}catch{}},[l,d]),[d,f]}function fy(l,u=[]){return Array.isArray(u)&&u.includes(l)}function mm(l,u=[]){const d=ac(l),f=d.filter(g=>fy(g,u)).length;return{completed:f,total:d.length,percent:d.length?Math.round(f/d.length*100):0}}const my=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function gy(l=new Date){const u=Object.fromEntries(my.formatToParts(l).filter(d=>d.type!=="literal").map(d=>[d.type,d.value]));return`${u.year}-${u.month}-${u.day}`}function Ed(l){return l?new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}):""}function Sd(l,u=[]){return u.find(d=>d.id===l)||null}function yy(l,u=[]){return u.find(d=>d.id===l)||null}function zd(l,{assignments:u=[],grades:d=[],completedLessons:f=[],today:g=gy()}={}){const v=yy(l,u),k=Sd(l,d),_=l.startsWith("lesson:")&&f.includes(l.slice(7)),w=!!k||_;return v!=null&&v.dueDate?{state:w?"completed":v.dueDate<g?"overdue":"assigned",dueDate:v.dueDate,grade:k,completed:w}:{state:w?"completed":"unassigned",dueDate:null,grade:k,completed:w}}function eh(l=[]){const u=l.reduce((f,g)=>f+g.earned,0),d=l.reduce((f,g)=>f+g.possible,0);return{earned:u,possible:d,percent:d?Math.round(100*u/d):null,count:l.length}}function vy(l=[]){const u=new Map;return l.forEach(d=>{const f=Nd(new Date(d.gradedAt+"T12:00:00Z"));u.has(f)||u.set(f,[]),u.get(f).push(d)}),[...u.entries()].map(([d,f])=>({week:d,...eh(f)})).sort((d,f)=>f.week.localeCompare(d.week))}function xy(l=[],u=[]){return[...new Set([...Array.isArray(l)?l:[],...u.filter(d=>d.id.startsWith("lesson:")).map(d=>d.id.slice(7))])]}const by="/playground/data",wy=new Set(["game-programming","mobile-app-dev","uil","tsi-math"]);function ky(l){if(typeof l!="string"||!l||l.startsWith("/")||l.includes("\\")||l.includes("?")||l.includes("#")||l.split("/").some(u=>u===".."||u==="."||u===""))throw new Error("Invalid curriculum resource path");return l}function hc(l,u){if(!wy.has(l))throw new Error("Unknown published course");return by+"/"+l+"/"+ky(u)}async function tr(l,u,d,f,g=!1){const v=await d(hc(l,u),{signal:f,cache:"no-store"});if(!v.ok)throw new Error("Published "+l+" resource unavailable: "+u);return g?v.json():v.text()}function ph(l,u,d,f,g){var v,k,_;return{...l,markdownSource:u,starter:d??"",language:f,markdownUrl:hc(g,l.markdown),kind:"Lesson",challenge:((v=l.exercise)==null?void 0:v.prompt)||l.summary||l.objective||l.title||"",points:l.points??null,cases:((k=l.exercise)==null?void 0:k.examples)||l.cases||[],hints:((_=l.exercise)==null?void 0:_.hints)||l.hints||[],mode:l.exercise?"function":"script"}}async function Sy(l,u){const d="game-programming",f=await tr(d,"course.json",l,u,!0),g=await Promise.all(f.units.map(async v=>({id:v.id,number:v.number,title:v.title,description:v.summary||"",lessons:await Promise.all(v.lessons.map(async k=>{var C,N,O,L,Y;const _=await tr(d,k.markdown,l,u);return{...ph(k,_,(C=k.exercise)==null?void 0:C.starter,"csharp",d),starter:((N=k.exercise)==null?void 0:N.starter)||"",kind:"Lesson",exerciseId:(O=k.exercise)==null?void 0:O.id,challenge:((L=k.exercise)==null?void 0:L.prompt)||k.title,unityTask:k.unityTask||[],markdownSource:_+((Y=k.unityTask)!=null&&Y.length?`

### Unity activity
`+k.unityTask.map(U=>"- "+U).join(`
`):"")}}))})));return{...rl({units:g}),source:"published",projects:[]}}async function of(l,u,d,f){if(!u)return null;const g=Object.keys(u);if(!g.includes("index.html")||!g.includes("styles.css")||!g.includes("script.js")&&!g.includes("App.jsx"))throw Error("A Mobile App starterFiles entry requires index.html, styles.css and script.js (or App.jsx).");return Object.fromEntries(await Promise.all(g.map(async v=>[v,await tr(l,u[v],d,f)])))}async function _y(l,u){const d="mobile-app-dev",f=await tr(d,"course.json",l,u,!0),g=await Promise.all(f.lessons.map(async k=>{const[_,w,C]=await Promise.all([tr(d,k.markdown,l,u),k.starterFile?tr(d,k.starterFile,l,u):Promise.resolve(""),of(d,k.starterFiles,l,u)]);return{...ph(k,_,w,k.language==="react"?"jsx":k.language,d),...C?{starterFiles:C}:{}}})),v=await Promise.all((f.projects||[]).map(async k=>{const[_,w]=await Promise.all([k.starterFile?tr(d,k.starterFile,l,u):Promise.resolve(""),of(d,k.starterFiles,l,u)]),C=await Promise.all(k.steps.map(async N=>({...N,focus:N.focus||N.title,markdownSource:await tr(d,N.markdown,l,u),markdownUrl:hc(d,N.markdown)})));return{id:k.id,title:k.title,summary:k.summary,skills:k.skills||[],starter:_,language:"html",steps:C,...w?{starterFiles:w}:{}}}));return{...rl({lessons:g}),projects:v,source:"published"}}async function Cy(l,u){const f=await tr("uil","course.json",l,u,!0),g=await tr("uil",f.written.markdown,l,u),v=await tr("uil",f.written.practice,l,u,!0),_=(Array.isArray(v)?v:v.questions||[]).map((O,L)=>{const Y=O.choices||O.options||[];return"### Practice question "+(L+1)+`

`+String(O.prompt||O.question||"")+`

`+Y.map((U,B)=>String.fromCharCode(65+B)+". "+U).join(`

`)}).join(`

`),w={id:"written",title:"Written practice",language:"text",markdown:f.written.markdown,markdownSource:g+`

## Published practice questions

`+_,markdownUrl:hc("uil",f.written.markdown),starter:"",kind:"Practice",challenge:"Review Java reasoning and the published written-practice questions."},C=await Promise.all(f.lessons.map(async O=>{const[L,Y]=await Promise.all([tr("uil",O.markdown,l,u),tr("uil",O.starterFile,l,u)]);return ph(O,L,Y,"java","uil")}));return{...rl({units:[{id:"written-preparation",number:1,title:"Written preparation",lessons:[w]},{id:"programming-practice",number:2,title:"Java programming practice",lessons:C}]}),source:"published",projects:[]}}async function Ty(l,u){const d="tsi-math",[f,g,v,k]=await Promise.all([tr(d,"content/20-day-program.json",l,u,!0),tr(d,"content/strand-lessons-v1.json",l,u,!0),tr(d,"content/diagnostic-24-mc-v2.json",l,u,!0),tr(d,"content/math-locator-profiles.json",l,u,!0)]),_=(f.days||[]).map(C=>({id:C.id,title:C.title,challenge:"Day "+C.day+" · "+C.strand+" · 30 minutes",kind:"Planned session",language:"text",starter:"",ready:!1,status:"planned"})),w=await Promise.all((g.lessons||[]).map(async C=>{const[N,O]=await Promise.all([tr(d,C.student_lesson,l,u),tr(d,C.teacher_key,l,u,!0)]);return{id:C.id,title:C.title,kind:"Draft practice",status:"draft",language:"text",markdown:C.student_lesson,markdownUrl:hc(d,C.student_lesson),markdownSource:N,tsiKey:O,tsiStrandDraft:!0,starter:"",challenge:"Currently authored draft lesson · "+C.minutes+" minutes"}}));return{...rl({units:[{id:"study-schedule",number:1,title:"20-day study schedule (in development)",lessons:_},{id:"authored-strands",number:2,title:"Available draft strand lessons",lessons:w}]}),source:"published-draft",projects:[],tsiDraft:!0,diagnosticItems:v.items||[],locatorProfiles:k.profiles||[]}}async function jy(l,{fetchImpl:u=fetch,signal:d}={}){if(l==="game-programming")return Sy(u,d);if(l==="mobile-app-dev")return _y(u,d);if(l==="uil")return Cy(u,d);if(l==="tsi-math")return Ty(u,d);throw new Error("Unknown published course")}const Jo=!0;async function Ny(){const l="/playground/integration/account-bridge.js",{readOnlyCs1Snapshot:u}=await import(l);return u()}const Ey="/playground/integration/data/computer-science-1/course.json";async function Py({fetchImpl:l=fetch,signal:u}={}){const d=await l(Ey,{signal:u,cache:"no-store"});if(!d.ok)throw new Error("Published Computer Science I catalog is unavailable.");return d.json()}function Ly(l,u){if(!l||!Array.isArray(u==null?void 0:u.lessons))return l;const d=new Map(u.lessons.filter(v=>v==null?void 0:v.id).map(v=>[v.id,v])),f=Object.fromEntries(Object.entries(l.lessonRecords||{}).map(([v,k])=>[v,{...k,...d.get(v)||{},id:v}])),g=(l.units||[]).map(v=>{const k=(v.lessons||[])[0],_=d.get(k);return{...v,title:(_==null?void 0:_.unitName)||v.title}});return{...l,units:g,lessonRecords:f,publishedContent:!0}}const gm="Python challenges are available now. More languages are coming later.";function Ay(l){return Array.isArray(l==null?void 0:l.challenges)?l.challenges.filter(u=>u&&typeof u.id=="string"&&typeof u.starter=="string"&&Array.isArray(u.examples)&&u.examples.length>0&&u.examples.every(d=>typeof d.call=="string"&&typeof d.expected=="string")).map(u=>({id:u.id,title:String(u.title||u.id),difficulty:String(u.difficulty||"Easy"),points:Number(u.points)||0,scenario:String(u.scenario||""),parameters:String(u.parameters||""),behavior:String(u.behavior||""),starter:u.starter,examples:u.examples.map(d=>({call:d.call,expected:d.expected})),skills:typeof u.skills=="string"?u.skills:null,source:"published-cs1",summary:String(u.scenario||""),tags:Array.isArray(u.topics)?u.topics.filter(d=>typeof d=="string"):[],suggestedCourses:["computer-science-1"],languages:["python"],prerequisites:[]})).sort((u,d)=>u.title.localeCompare(d.title)):[]}function Ry(l,{query:u="",topic:d="all",difficulty:f="all",course:g="all",language:v="all"}={}){const k=u.trim().toLocaleLowerCase();return l.filter(_=>(!k||[_.title,_.summary,..._.tags].join(" ").toLocaleLowerCase().includes(k))&&(d==="all"||_.tags.includes(d))&&(f==="all"||_.difficulty===f)&&(g==="all"||_.suggestedCourses.includes(g))&&(v==="all"||_.languages.includes(v)))}function Iy(l){if(!l||l.source!=="published-cs1")return"";const u=String(l.behavior||"").replace(/\[Review the optional skills guide\]\(skills\.md\)/g,"See the optional skills guide below."),d=(l.examples||[]).map((f,g)=>"### Example "+(g+1)+"\n\n```python\n"+f.call+`
# Expected: `+f.expected+"\n```").join(`

`);return["## Scenario",l.scenario||"","## Parameters",l.parameters||"","## Required behavior",u,"## Published examples",d,l.skills?`## Optional skills guide

`+l.skills:""].filter(Boolean).join(`

`)}function Oy(l){return"cs1:challenges:2026-10-26:draft:"+l}const pa=(...l)=>l.filter(Boolean).join(" "),Dy=["temperature-alert","count-matches","sum-positives","score-line","attendance-percent","longest-win-streak","confidence-total","second-largest-distinct","target-pairs","competition-ranks"],My="/playground/integration/",zy="/"+My.replace(/^\/+|\/+$/g,""),ga=l=>`${zy}/#${l}`,Yl=()=>ga("/"),lf=()=>ga("/teacher"),Fy=()=>ga("/admin"),Wy=()=>ga("/journals"),Hy=()=>ga("/grades"),Gl=(l=null)=>ga(l?`/challenges/course/${encodeURIComponent(l)}`:"/challenges"),ym=l=>ga(`/challenges/${encodeURIComponent(l)}`);function vm(l,u,d=null){const f=typeof l=="string"?Sr(l):l;if(!f||!u)return Yl();const g=`/playgrounds/${encodeURIComponent(f.slug)}/projects/${encodeURIComponent(u)}`;return ga(d?`${g}/steps/${encodeURIComponent(d)}`:g)}function Fd(l,u){const d=typeof l=="string"?Sr(l):l;if(!d)return Yl();const f=`/playgrounds/${encodeURIComponent(d.slug)}`;return ga(u?`${f}/lessons/${encodeURIComponent(u)}`:f)}function gd(l,u=rs,d=Dy){const k=((typeof window<"u"&&window.location.hash.slice(1)||"/").replace(/\/+$/,"")||"/").slice("".length)||"/";if(k==="/")return{page:"home"};if(k==="/teacher")return{page:"teacher"};if(k==="/admin")return{page:"admin"};if(k==="/journals")return{page:"journals"};if(k==="/grades")return{page:"grades"};if(k==="/challenges")return{page:"challenges",filterCourse:null};if(k.startsWith("/challenges/")){const O=k.split("/").filter(Boolean);try{if(O.length===3&&O[1]==="course"){const L=decodeURIComponent(O[2]);return Sr(L)?{page:"challenges",filterCourse:L}:{page:"not-found"}}if(O.length===2){const L=decodeURIComponent(O[1]);return d.includes(L)?{page:"challenge",challengeId:L}:{page:"not-found"}}}catch{return{page:"not-found"}}return{page:"not-found"}}const _=k.split("/").filter(Boolean);if(_[0]!=="playgrounds"||![2,4,6].includes(_.length))return{page:"not-found"};let w,C;try{w=decodeURIComponent(_[1]),C=_.length===4?decodeURIComponent(_[3]):void 0}catch{return{page:"not-found"}}const N=u.find(O=>O.slug===w);if(!N)return{page:"not-found"};if(_[2]==="projects"&&(_.length===4||_.length===6))try{const O=decodeURIComponent(_[3]),L=(N.projects||[]).find(U=>U.id===O),Y=_.length===6?decodeURIComponent(_[5]):null;return!L||Y&&(_[4]!=="steps"||!L.steps.some(U=>U.id===Y))?{page:"not-found"}:{page:"course",courseId:N.id,lessonId:null,projectId:O,stepId:Y}}catch{return{page:"not-found"}}return _.length!==2&&(_.length!==4||_[2]!=="lessons")?{page:"not-found"}:C&&!cy(N,C)?{page:"not-found"}:{page:"course",courseId:N.id,lessonId:C??null}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xm=(...l)=>l.filter((u,d,f)=>!!u&&u.trim()!==""&&f.indexOf(u)===d).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Uy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=ye.forwardRef(({color:l="currentColor",size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f,className:g="",children:v,iconNode:k,..._},w)=>ye.createElement("svg",{ref:w,...Uy,width:u,height:u,stroke:l,strokeWidth:f?Number(d)*24/Number(u):d,className:xm("lucide",g),..._},[...k.map(([C,N])=>ye.createElement(C,N)),...Array.isArray(v)?v:[v]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=(l,u)=>{const d=ye.forwardRef(({className:f,...g},v)=>ye.createElement(qy,{ref:v,iconNode:u,className:xm(`lucide-${By(l)}`,f),...g}));return d.displayName=`${l}`,d};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=St("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=St("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=St("BookOpenCheck",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=St("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=St("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=St("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=St("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=St("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=St("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=St("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=St("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=St("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=St("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=St("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=St("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=St("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=St("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=St("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=St("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=St("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=St("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=St("FlaskConical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=St("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=St("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=St("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=St("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=St("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=St("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=St("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=St("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=St("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=St("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=St("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=St("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=St("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=St("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=St("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=St("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=St("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=St("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=St("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=St("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=St("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=St("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=St("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function fi({children:l,tone:u=""}){return c.jsx("span",{className:pa("chip",u&&`chip-${u}`),children:l})}function hv({theme:l,setTheme:u}){const d=l==="dark";return c.jsx("button",{className:"icon-button",title:d?"Switch to light mode":"Switch to dark mode","aria-label":"Toggle light and dark mode",onClick:()=>u(d?"light":"dark"),children:d?c.jsx(dv,{size:17}):c.jsx(ov,{size:17})})}function fv({sidebarOpen:l,onToggleSidebar:u,onHome:d,theme:f,setTheme:g,readOnlyMode:v=!1,accountLabel:k=null}){var _;return c.jsx("header",{className:"topbar",children:c.jsxs("div",{className:"topbar-inner",children:[c.jsx("button",{className:"icon-button nav-toggle",onClick:u,"aria-label":"Toggle navigation",children:l?c.jsx(lv,{size:18}):c.jsx(av,{size:18})}),c.jsxs("button",{className:"brand",onClick:d,children:[c.jsx("span",{className:"brand-logo",children:"{ }"}),c.jsx("strong",{children:"Ms. Whitby's Playground"}),c.jsx("span",{className:"brand-compact",children:"React Lab"})]}),c.jsx("div",{className:"topbar-spacer"}),c.jsx(fi,{children:v?"CS1 READ-ONLY TEST":"LOCAL DESIGN LAB"}),c.jsx(hv,{theme:f,setTheme:g}),c.jsx("span",{className:"user-circle",title:k||"Read-only preview",children:((_=k==null?void 0:k[0])==null?void 0:_.toUpperCase())||"W"})]})})}const mv=[["home","Home",iv],["challenges","Challenge Bank",Bd],["journals","Weekly Journals",hh],["grades","Grades",nv],["teacher","Teacher Dashboard",fh],["admin","Admin Dashboard",Cm]];function gv({open:l,page:u,courseId:d,lessonId:f,setPage:g,openCourse:v,onOpenProject:k,availableCourses:_=rs,completedLessons:w=[],assignments:C=[],grades:N=[],readOnlyMode:O=!1}){var Y;const L=u==="course"?_.find(U=>U.id===d):null;return c.jsxs("aside",{className:pa("main-sidebar",!l&&"collapsed"),"aria-label":"Playground navigation",children:[c.jsx("div",{className:"side-title",children:"EXPLORE"}),mv.filter(([U])=>!O||["home","challenges","grades","teacher","admin"].includes(U)).map(([U,B,J])=>c.jsxs("button",{className:pa("nav-item",(u===U||U==="challenges"&&u==="challenge")&&"active"),onClick:()=>g(U),title:B,children:[c.jsx(J,{size:19}),c.jsx("span",{children:B})]},U)),L&&c.jsxs("section",{className:"course-outline","data-course":L.id,"aria-label":`${L.label} outline`,children:[c.jsx("div",{className:"side-rule"}),c.jsx("div",{className:"side-title",children:"COURSE CONTENT"}),c.jsxs("button",{className:pa("outline-overview",!f&&"active"),onClick:()=>v(L.id),children:[c.jsx(ro,{size:16}),c.jsx("span",{children:"Course Overview"})]}),L.units.map((U,B)=>c.jsxs("details",{className:"outline-unit",open:is(U).includes(f)||!f&&B===0?!0:void 0,children:[c.jsxs("summary",{children:[c.jsx("span",{className:"outline-unit-number",children:String(pc(U,B+1)).padStart(2,"0")}),c.jsx("span",{className:"outline-unit-title",title:Rs(U),children:Rs(U)}),c.jsx(km,{size:14})]}),c.jsx("div",{className:"outline-lesson-list",children:is(U).map(J=>{const I=no(L,J),z=zd("lesson:"+J,{assignments:C,grades:N,completedLessons:w}),q=z.completed?"completed":z.dueDate?z.state:"",W=q==="completed"?"Completed":q==="overdue"?"Overdue":q==="assigned"?"Assigned":"";return c.jsxs("button",{onClick:()=>v(L.id,J),className:pa("outline-lesson",J===f&&"selected"),"aria-label":W?`${I}, ${W.toLowerCase()}`:I,title:W?`${I} · ${W}`:I,"aria-current":J===f?"page":void 0,children:[c.jsx("span",{className:"outline-lesson-name",children:I}),W&&c.jsx("span",{className:`assignment-dot ${q}`,"aria-hidden":"true"})]},J)})})]},`${L.id}-${U.id}-${f||"overview"}`)),!!((Y=L.projects)!=null&&Y.length)&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"side-section-title",children:"PROJECTS"}),L.projects.map(U=>c.jsx("button",{type:"button",className:"outline-lesson",title:U.title,onClick:()=>k==null?void 0:k(L.id,U.id),children:c.jsx("span",{className:"outline-lesson-name",children:U.title})},U.id))]})]}),c.jsx("div",{className:"side-rule"}),c.jsx("div",{className:"side-title",children:"PLAYGROUNDS"}),_.filter(U=>U.id!=="tsi-math").map(U=>c.jsxs("button",{"data-course":U.id,className:pa("nav-item course-nav-item",u==="course"&&d===U.id&&"active"),onClick:()=>v(U.id),title:U.label,children:[c.jsx("span",{className:"nav-dot"}),c.jsx("span",{children:U.label})]},U.id)),c.jsxs("div",{className:"sidebar-bottom",children:[c.jsx(Yy,{size:17}),c.jsx("span",{children:"Your learning spaces"})]})]})}function yv(){return c.jsxs("footer",{className:"site-footer",children:[c.jsx("span",{children:"Ms. Whitby's Playground · React design lab"}),c.jsx("span",{children:"Fictional data · No authentication or backend · No real code execution"})]})}const vv={"computer-science-1":Hd,"game-programming":tv,"mobile-app-dev":cv,uil:Tm,"tsi-math":wm,"test-prep":Jy,capstone:uv};function xv({course:l,onOpen:u,completedLessons:d=[]}){const{completed:f,total:g}=mm(l,d),v=vv[l.id]||Hd;function k(_){_.button!==0||_.metaKey||_.ctrlKey||_.shiftKey||_.altKey||(_.preventDefault(),u())}return c.jsxs("a",{className:"course-card","data-course":l.id,href:Fd(l),onClick:k,children:[c.jsxs("div",{className:"course-card-heading",children:[c.jsx("span",{className:"course-glyph","aria-hidden":"true",children:c.jsx(v,{size:24,strokeWidth:2.2})}),c.jsxs("div",{children:[c.jsx("h2",{children:l.label}),c.jsx("p",{children:l.short})]})]}),c.jsx("p",{className:"course-description",children:l.description}),c.jsxs("div",{className:"course-card-footer",children:[c.jsxs("div",{className:"course-meta",children:[c.jsxs("span",{children:[g," ",g===1?"lesson":"lessons"]}),c.jsxs("span",{children:[f," completed"]})]}),c.jsx("progress",{className:"course-progress-track",value:f,max:Math.max(g,1),"aria-label":`${l.label}: ${f} of ${g} lessons completed`})]})]})}function bv({onClick:l}){return c.jsxs("button",{className:"wide-shortcut",onClick:l,children:[c.jsx(fh,{size:18}),c.jsxs("span",{children:[c.jsx("strong",{children:"Teacher Dashboard preview"}),c.jsx("small",{children:"Section roster, expanded student assignments, account matching, and weekly points"})]}),c.jsx(ni,{size:18})]})}function wv({openCourse:l,openTeacher:u,openChallenges:d,availableCourses:f=rs,completedLessons:g=[],readOnlyMode:v=!1}){return c.jsxs("div",{className:"main-content",children:[c.jsxs("div",{className:"welcome",children:[c.jsx("div",{className:"eyebrow",children:"Your learning spaces"}),c.jsx("h1",{children:"Your Playgrounds"}),c.jsxs("p",{children:["Choose a course to continue learning. ",v?"Review Computer Science I lessons and your existing verified results. Practice is local to this test build.":"Complete lessons to fill your progress bars."]})]}),c.jsx("div",{className:"course-card-grid",children:f.filter(k=>k.id!=="tsi-math").map(k=>c.jsx(xv,{course:k,completedLessons:g,onOpen:()=>l(k.id)},k.id))}),c.jsxs("button",{type:"button",className:"wide-shortcut challenge-bank-shortcut",onClick:d,children:[c.jsx(Bd,{size:23}),c.jsxs("span",{children:[c.jsx("strong",{children:"Shared Challenge Bank"}),c.jsx("small",{children:v?"Practice published Python challenges. More languages are coming later.":"Practice one problem in Python, Java, JavaScript, or C#."})]}),c.jsx("span",{"aria-hidden":"true",children:"→"})]}),!v&&c.jsx(bv,{onClick:u})]})}function kv({course:l,openCourse:u,openProject:d,openChallenges:f,completedLessons:g=[],assignments:v=[],grades:k=[],courseColors:_={},onSetCourseColor:w,onResetCourseColor:C,readOnlyMode:N=!1}){var B;const O=mm(l,g),[L,Y]=ye.useState(!1),U=dy(l,_);return c.jsxs("div",{className:"course-landing",children:[c.jsxs("header",{className:"course-hero surface-card",children:[c.jsx("button",{type:"button",className:"icon-button course-color-settings",onClick:()=>Y(J=>!J),"aria-label":L?"Close course color settings":`Change ${l.label} color`,title:L?"Close settings":"Course color","aria-expanded":L,"aria-controls":"course-color-controls",children:L?c.jsx(Ud,{size:17}):c.jsx(yh,{size:17})}),c.jsx("div",{className:"eyebrow",children:"Course overview"}),c.jsx("h1",{children:l.label}),c.jsx("p",{children:l.description}),c.jsxs("div",{className:"course-hero-stats",children:[c.jsxs("span",{children:[c.jsx(sv,{size:16})," ",l.units.length," units"]}),c.jsxs("span",{children:[c.jsx(ro,{size:16})," ",ac(l).length," lessons"]})]}),c.jsxs("button",{className:"btn primary",disabled:!ac(l).length,onClick:()=>u(l.id,ac(l)[0]),children:["Start learning ",c.jsx(ni,{size:16})]}),L&&c.jsxs("section",{id:"course-color-controls",className:"course-color-controls","aria-label":"Choose a course color",children:[c.jsxs("div",{className:"course-color-control-copy",children:[c.jsx("strong",{children:"Course color"}),c.jsx("p",{children:"Make this course your own. The color updates throughout your Playground."})]}),c.jsxs("label",{className:"course-color-picker",children:[c.jsx("input",{type:"color",value:U,onChange:J=>w==null?void 0:w(l.id,J.target.value),"aria-label":`Choose a color for ${l.label}`}),c.jsx("span",{children:"Choose color"})]}),c.jsx("button",{type:"button",className:"btn",onClick:()=>C==null?void 0:C(l.id),children:"Reset to default"}),c.jsx("button",{type:"button",className:"btn",onClick:()=>Y(!1),children:"Done"})]})]}),l.publishedContent&&c.jsx("p",{className:"course-published-note",children:"Real published lessons are shown here. Practice in this preview does not change your grades."}),l.contentLoadingError&&c.jsxs("p",{className:"course-published-note",role:"alert",children:["Published course materials could not be loaded: ",l.contentLoadingError,". Sample lessons are not substituted."]}),!l.publishedContent&&!l.contentLoadingError&&c.jsx("p",{className:"course-published-note",children:"Course materials are not yet published here. This is a design preview, not a course to assign."}),l.tsiDraft&&c.jsx("p",{className:"course-published-note",children:"The 20-day TSI schedule is an outline; four strand lessons are drafts. Unwritten sessions are not available for practice."}),c.jsxs("p",{className:"course-landing-progress",children:[O.completed," of ",O.total," lessons ",N?"with verified grades":l.publishedContent?"marked complete in preview":"completed"," · ",O.percent,"%"]}),c.jsx("div",{className:"course-landing-heading",children:c.jsxs("div",{children:[c.jsx("h2",{children:"Units & lessons"}),c.jsx("p",{children:"Choose a unit or jump directly into a lesson."})]})}),c.jsx("div",{className:"unit-card-grid",children:l.units.map((J,I)=>c.jsxs("section",{className:"unit-card surface-card",children:[c.jsxs("header",{className:"unit-card-header",children:[c.jsxs("span",{className:"unit-badge",children:["UNIT ",String(pc(J,I+1)).padStart(2,"0")]}),c.jsx("h3",{title:Rs(J),children:Rs(J)}),J.description&&c.jsx("p",{children:J.description})]}),c.jsx("div",{className:"unit-lessons",children:is(J).map((z,q)=>c.jsxs("a",{className:"unit-lesson-link",href:Fd(l,z),onClick:W=>{W.button!==0||W.metaKey||W.ctrlKey||W.shiftKey||W.altKey||(W.preventDefault(),u(l.id,z))},children:[c.jsx("span",{className:"unit-lesson-index",children:q+1}),c.jsxs("span",{className:"unit-lesson-label",children:[c.jsx("strong",{title:no(l,z),children:no(l,z)}),(()=>{var G,X;const W=zd("lesson:"+z,{assignments:v,grades:k,completedLessons:g});return W.dueDate||W.completed?c.jsxs("span",{className:"unit-assignment-meta",children:[c.jsxs("span",{className:`assignment-status ${W.state}`,children:[c.jsx("span",{className:`assignment-dot ${W.state}`,"aria-hidden":"true"}),W.completed?"Completed":W.state==="overdue"?"Overdue":"Assigned"]}),W.dueDate&&c.jsxs("small",{children:["Due ",Ed(W.dueDate)]}),W.grade&&c.jsxs("small",{children:[W.grade.earned," / ",W.grade.possible," pts"]})]}):c.jsxs("small",{children:[(G=to(l,z))==null?void 0:G.kind,(X=to(l,z))!=null&&X.difficulty?` · ${to(l,z).difficulty}`:""]})})()]}),c.jsx(th,{size:16})]},z))})]},J.id))}),!!((B=l.projects)!=null&&B.length)&&c.jsxs("section",{className:"course-projects surface-card",children:[c.jsx("div",{className:"eyebrow",children:"Published guided projects"}),c.jsx("h2",{children:"Projects"}),c.jsx("div",{className:"unit-card-grid",children:l.projects.map(J=>c.jsxs("a",{className:"unit-lesson-link",href:vm(l,J.id),onClick:I=>{I.button!==0||I.metaKey||I.ctrlKey||I.shiftKey||I.altKey||(I.preventDefault(),d(l.id,J.id))},children:[c.jsxs("span",{className:"unit-lesson-label",children:[c.jsx("strong",{children:J.title}),c.jsxs("small",{children:[J.steps.length," steps · ",J.summary]})]}),c.jsx(th,{size:16})]},J.id))})]}),c.jsxs("section",{className:"course-challenges-shelf surface-card",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Shared practice library"}),c.jsx("h2",{children:"Related programming challenges"}),c.jsx("p",{children:"Browse reusable problems suited to this course. Review each challenge's prerequisites before recommending it to students."})]}),c.jsxs("a",{href:Gl(l.id),className:"btn",onClick:J=>{J.button!==0||J.metaKey||J.ctrlKey||J.shiftKey||J.altKey||(J.preventDefault(),f(l.id))},children:[c.jsx(Bd,{size:16})," Browse challenges"]})]})]})}function Sv({selectedTopic:l,attempts:u,setAttempts:d,openCourse:f,completedLessons:g,onToggleLessonComplete:v}){const{track:k,topic:_}=l,[w,C]=ye.useState(0),[N,O]=ye.useState(null),[L,Y]=ye.useState(!1),U=_.questions[w],B=_.questions.filter(W=>u[W.id]!==void 0).length,J=g.includes(_.id);function I(W){C(W),O(null),Y(!1)}function z(){N===null||L||(Y(!0),d(W=>({...W,[U.id]:{chosen:N,correct:N===U.correct}})))}const q=N===U.correct;return c.jsxs("section",{className:"test-prep-practice",children:[c.jsxs("button",{type:"button",className:"test-prep-back",onClick:()=>f("test-prep"),children:[c.jsx(bm,{size:16})," All Test Prep"]}),c.jsxs("div",{className:"surface-card test-prep-practice-header",children:[c.jsxs("div",{className:"eyebrow",children:[k.title," / ",_.title]}),c.jsx("h1",{children:_.title}),c.jsx("p",{children:_.description}),c.jsx("p",{className:"muted",children:"Original sample questions only. Your practice results are not official exam scores."}),c.jsxs("div",{className:"test-prep-practice-meta",children:[c.jsxs("span",{children:[B," of ",_.questions.length," attempted"]}),J&&c.jsxs("span",{className:"test-prep-complete",children:[c.jsx(lc,{size:16})," Practiced"]})]})]}),c.jsxs("div",{className:"surface-card test-prep-question",children:[c.jsxs("div",{className:"test-prep-question-top",children:[c.jsxs("strong",{children:["Question ",w+1," of ",_.questions.length]}),c.jsx("span",{className:"muted",children:"Practice / multiple choice"})]}),c.jsx("h2",{children:U.prompt}),c.jsxs("fieldset",{className:"test-prep-options",disabled:L,children:[c.jsx("legend",{className:"sr-only",children:"Choose your answer"}),U.options.map((W,G)=>c.jsxs("label",{className:"test-prep-option "+(N===G?"selected ":"")+(L&&G===U.correct?"correct":""),children:[c.jsx("input",{type:"radio",name:U.id,checked:N===G,onChange:()=>O(G)}),c.jsx("span",{className:"test-prep-letter",children:String.fromCharCode(65+G)}),c.jsx("span",{children:W})]},G))]}),L&&c.jsxs("div",{className:"test-prep-feedback "+(q?"is-correct":"is-incorrect"),role:"status",children:[c.jsx("strong",{children:q?"Correct!":"Review this answer"}),c.jsx("p",{children:U.explanation})]}),c.jsxs("div",{className:"test-prep-actions",children:[c.jsx("button",{type:"button",className:"btn primary",disabled:N===null||L,onClick:z,children:"Check answer"}),c.jsxs("button",{type:"button",className:"btn",onClick:()=>{O(null),Y(!1)},children:[c.jsx(mh,{size:14})," Try again"]})]})]}),c.jsxs("nav",{className:"test-prep-topic-nav","aria-label":"Sample question navigation",children:[w>0?c.jsxs("button",{type:"button",className:"btn",onClick:()=>I(w-1),children:[c.jsx(Wd,{size:16})," Previous"]}):c.jsx("span",{}),w<_.questions.length-1?c.jsxs("button",{type:"button",className:"btn",onClick:()=>I(w+1),children:["Next question ",c.jsx(ni,{size:16})]}):c.jsx("span",{})]}),B===_.questions.length&&!J&&c.jsxs("div",{className:"test-prep-completion surface-card",children:[c.jsx("span",{children:"You've attempted every sample in this subject."}),c.jsx("button",{type:"button",className:"btn primary",onClick:()=>v==null?void 0:v(_.id),children:"Mark topic practiced"})]}),c.jsxs("p",{className:"test-prep-official",children:["Need more questions? ",c.jsxs("a",{href:k.reference,target:"_blank",rel:"noreferrer",children:["Visit official ",k.title," preparation resources ",c.jsx(Sm,{size:13})]})]})]})}function _v({lessonId:l,openCourse:u,completedLessons:d=[],onToggleLessonComplete:f}){const[g,v]=Kn("designlab:test-prep-sample-answers",{}),k=l?Qg(l):null;return c.jsx("div",{className:"course-layout integrated-course","data-course":"test-prep",children:c.jsxs("div",{className:"course-main",children:[c.jsxs("div",{className:"course-breadcrumb",children:[c.jsx("button",{type:"button",onClick:()=>u(null),children:"All playgrounds"}),c.jsx(ni,{size:14}),l?c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",onClick:()=>u("test-prep"),children:"Test Prep"}),c.jsx(ni,{size:14}),c.jsx("span",{children:k==null?void 0:k.topic.title})]}):c.jsx("span",{children:"Test Prep"})]}),k?c.jsx(Sv,{selectedTopic:k,attempts:g,setAttempts:v,openCourse:u,completedLessons:d,onToggleLessonComplete:f},l):c.jsxs("div",{className:"test-prep-hub",children:[c.jsxs("header",{className:"surface-card test-prep-hero",children:[c.jsx("div",{className:"eyebrow",children:"Test Prep / Self-study"}),c.jsx("h1",{children:"Choose a test to prepare for"}),c.jsx("p",{children:"Study in short sessions, answer original sample questions, and review the reasoning behind each answer. No class code required."}),c.jsx("p",{className:"muted",children:"This is a preview. Practice history stays in this browser. No scores are sent to a teacher, and no official exam scores are predicted."})]}),c.jsxs("div",{className:"test-prep-exams",children:[c.jsxs("section",{className:"surface-card test-prep-exam","data-exam":"tsi",children:[c.jsx("div",{className:"test-prep-exam-icon",children:c.jsx(uf,{size:23})}),c.jsx("div",{className:"eyebrow",children:"College readiness"}),c.jsx("h2",{children:"TSI Math"}),c.jsx("p",{children:"Continue the existing TSIA2 math curriculum and diagnostic work without changing old lesson links."}),c.jsx("p",{className:"test-prep-exam-meta",children:"Existing course / classroom study"}),c.jsxs("button",{type:"button",className:"btn primary",onClick:()=>u("tsi-math"),children:["Open TSI Math ",c.jsx(ni,{size:16})]})]}),dc.map(_=>{const w=_.topics.reduce((N,O)=>N+O.questions.length,0),C=_.topics.reduce((N,O)=>N+O.questions.filter(L=>g[L.id]!==void 0).length,0);return c.jsxs("section",{className:"surface-card test-prep-exam","data-exam":_.id,children:[c.jsx("div",{className:"test-prep-exam-icon",children:_.id==="act"?c.jsx(ev,{size:23}):c.jsx(uf,{size:23})}),c.jsx("div",{className:"eyebrow",children:_.subtitle}),c.jsx("h2",{children:_.title}),c.jsx("p",{children:_.description}),c.jsxs("p",{className:"test-prep-exam-meta",children:[_.topics.length," subjects · ",C,"/",w," samples attempted"]}),c.jsx("progress",{className:"course-progress-track",value:C,max:w,"aria-label":_.title+" sample practice progress"}),c.jsx("div",{className:"test-prep-topic-links",children:_.topics.map(N=>c.jsxs("button",{type:"button",onClick:()=>u("test-prep",N.id),children:[c.jsx("span",{children:N.title}),c.jsx(ni,{size:15})]},N.id))}),c.jsxs("button",{type:"button",className:"btn primary",onClick:()=>u("test-prep",_.topics[0].id),children:["Start ",_.title," samples ",c.jsx(ni,{size:16})]})]},_.id)})]})]})]})})}function fc({axis:l,onDrag:u}){const d=ye.useRef(!1),f=l==="columns",g=()=>d.current=!1;return c.jsx("div",{className:pa("splitter",f?"column-split":"row-split"),role:"separator","aria-label":f?"Resize instructions and editor":"Resize editor and console","aria-orientation":f?"vertical":"horizontal",tabIndex:0,onPointerDown:v=>{v.preventDefault(),v.currentTarget.setPointerCapture(v.pointerId),d.current=!0},onPointerMove:v=>{d.current&&v.buttons===1&&u(v)},onPointerUp:g,onLostPointerCapture:g,children:c.jsx("span",{})})}function vh({eyebrow:l,children:u,actions:d}){return c.jsxs("div",{className:"page-title-row",children:[c.jsxs("div",{children:[l&&c.jsx("div",{className:"eyebrow",children:l}),c.jsx("h1",{children:u})]}),d&&c.jsx("div",{className:"page-actions",children:d})]})}function Vu({task:l,unit:u,unitNumber:d,isTsi:f,isCompleted:g=!1,assignment:v=null,grade:k=null,onToggleCompleted:_,readOnlyMode:w=!1}){const C=(v==null?void 0:v.id)||(k==null?void 0:k.id)||"",N=zd(C,{assignments:v?[v]:[],grades:k?[k]:[],completedLessons:g?[C.replace(/^lesson:/,"")]:[]});return c.jsxs("div",{className:"lesson-header",children:[c.jsxs("div",{className:"eyebrow",children:["Unit ",pc(u,d)," · ",Rs(u)," ",c.jsx("span",{className:"dot",children:"·"})," ",l.kind]}),c.jsx(vh,{actions:c.jsxs("div",{className:"lesson-heading-actions",children:[!f&&(l==null?void 0:l.points)!=null&&c.jsx("span",{className:"points-tag",children:k?`${k.earned} / ${k.possible} pts`:`${l.points} points available`}),w&&!k?c.jsx("span",{className:"points-tag",children:"Verified scores only"}):k?c.jsxs("span",{className:"btn completion-toggle completed",children:[c.jsx(lc,{size:16})," Completed"]}):c.jsxs("button",{type:"button",className:`btn completion-toggle ${g?"completed":""}`,"aria-pressed":g,onClick:_,children:[g?c.jsx(lc,{size:16}):c.jsx(Vy,{size:16}),g?"Completed":"Mark complete"]})]}),children:l.title}),c.jsx("p",{children:l.challenge}),(v==null?void 0:v.dueDate)&&c.jsxs("div",{className:"lesson-assignment-info",children:[c.jsx("span",{className:`assignment-status ${N.state}`,children:N.state==="completed"?"Completed":N.state==="overdue"?"Overdue":"Assigned"}),c.jsxs("span",{children:["Due ",Ed(v.dueDate)]})]})]})}const xh={"tsi-ratios":{prompt:"A recipe uses 3 cups of water for every 5 cups of rice. How many cups of water are needed for 15 cups of rice?",options:["5 cups","9 cups","12 cups","25 cups"],correct:1,explanation:"15 is three times 5, so multiply the 3 cups of water by 3 to get 9."},"tsi-percents":{prompt:"A $60 backpack is discounted by 25%. What is the sale price?",options:["$15","$35","$45","$75"],correct:2,explanation:"25% of $60 is $15; subtract $15 from $60 to get $45."},"tsi-equations":{prompt:"Solve for x: 4x + 6 = 22.",options:["2","4","6","7"],correct:1,explanation:"Subtract 6 from both sides to get 4x = 16, then divide by 4: x = 4."},"tsi-slope":{prompt:"A table gives points (1, 3), (2, 5), and (3, 7). What is the slope?",options:["1","2","3","4"],correct:1,explanation:"As x goes up by 1, y goes up by 2, so slope = 2/1 = 2."}},Cv=`# Find an Inefficiency

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
`,Tv=`# Interpret User Feedback

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
`,jv=`# Interview for Evidence

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
`,Nv=`# Make a Minimum Viable Prototype

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
`,Ev=`# Player Decisions

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
`,Pv=`# Variables for a Game

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
`,Lv=`# Decision Making

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
`,Av=`# Format a Summary

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
`,Rv=`# Lists and Indexing

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
`,Iv=`# For Loops

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
`,Ov=`# Strings and Variables

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
`,Dv=`<!-- Learning example adapted from mswhitby/computer-science-1/docs/units/content/02-values-and-variables/lessons/01-meet-variables.md; displayed in independent React preview. -->
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
`,Mv=`# Your First React Card

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
`,zv=`# Interactive React State

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
`,Fv=`# Solve Linear Equations

## Learn

Solve an equation by doing the same operation to both sides. For 3x + 5 = 20, first subtract 5, then divide by 3.

### Example

Explain the quantities and operations before calculating.

## Practice

Solve 4x + 6 = 22. Explain each step.

Choose an answer in the practice card.
`,Wv=`# Percents and Discounts

## Learn

A percent compares a quantity with 100. To find 20% of 50, multiply 0.20 × 50 = 10.

### Example

Explain the quantities and operations before calculating.

## Practice

A backpack costs $60 and is discounted by 25%. What is the sale price?

Choose an answer in the practice card.
`,Hv=`# Ratios and Rates

## Learn

A ratio compares quantities. A **unit rate** tells us how many of one item correspond to one unit of another.

Example: If 3 markers are shared by 5 students, the number of markers per student is:

**3 ÷ 5 = 0.6 markers per student.**

## Practice

A group of 15 students needs markers at the same rate. How many markers are needed? Explain how you know.
`,Bv=`# Slope and Rate of Change

## Learn

Slope is the change in y divided by the change in x. A constant rate makes a linear relationship.

### Example

Explain the quantities and operations before calculating.

## Practice

The table gives (1, 3), (2, 5), and (3, 7). What is the slope?

Choose an answer in the practice card.
`,Uv=`# Trace a Java Array

## Learn

An array holds multiple values. Java arrays start at index **0**.

\`\`\`java
int[] scores = {2, 4, 6};
System.out.println(scores[0]); // 2
\`\`\`

## Practice

Trace the loop in the starter code. Record every index and the updated element value in a table. Then write the final array.
`,qv=`# Trace Java Loops

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
`,$v=`# Method Calls and Scope

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
`,Kv=`# String Indexing

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
`,Gv=`# Collision Events

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
`,Yv=`<!-- Learning example adapted from mswhitby/game-programming/samples/PlayerController.md (sample-lessons); displayed in independent React preview. -->
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
`,Vv=`# Score and Feedback

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
`,Jv=`# Events and Forms

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
`,Xv=`# Responsive Layouts

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
`;function bh(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var il=bh();function jm(l){il=l}var oc={exec:()=>null};function Gt(l,u=""){let d=typeof l=="string"?l:l.source;const f={replace:(g,v)=>{let k=typeof v=="string"?v:v.source;return k=k.replace(Br.caret,"$1"),d=d.replace(g,k),f},getRegex:()=>new RegExp(d,u)};return f}var Br={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:l=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}#`),htmlBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}<(?:[a-z].*>|!--)`,"i")},Qv=/^(?:[ \t]*(?:\n|$))+/,Zv=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ex=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,mc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,tx=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,wh=/(?:[*+-]|\d{1,9}[.)])/,Nm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Em=Gt(Nm).replace(/bull/g,wh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),nx=Gt(Nm).replace(/bull/g,wh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),kh=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,rx=/^[^\n]+/,Sh=/(?!\s*\])(?:\\.|[^\[\]\\])+/,ix=Gt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Sh).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),sx=Gt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,wh).getRegex(),qd="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",_h=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ax=Gt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",_h).replace("tag",qd).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Pm=Gt(kh).replace("hr",mc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qd).getRegex(),ox=Gt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Pm).getRegex(),Ch={blockquote:ox,code:Zv,def:ix,fences:ex,heading:tx,hr:mc,html:ax,lheading:Em,list:sx,newline:Qv,paragraph:Pm,table:oc,text:rx},df=Gt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",mc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qd).getRegex(),lx={...Ch,lheading:nx,table:df,paragraph:Gt(kh).replace("hr",mc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",df).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qd).getRegex()},ux={...Ch,html:Gt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",_h).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:oc,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Gt(kh).replace("hr",mc).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Em).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},cx=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,dx=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Lm=/^( {2,}|\\)\n(?!\s*$)/,px=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,$d=/[\p{P}\p{S}]/u,Th=/[\s\p{P}\p{S}]/u,Am=/[^\s\p{P}\p{S}]/u,hx=Gt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Th).getRegex(),Rm=/(?!~)[\p{P}\p{S}]/u,fx=/(?!~)[\s\p{P}\p{S}]/u,mx=/(?:[^\s\p{P}\p{S}]|~)/u,gx=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Im=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,yx=Gt(Im,"u").replace(/punct/g,$d).getRegex(),vx=Gt(Im,"u").replace(/punct/g,Rm).getRegex(),Om="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",xx=Gt(Om,"gu").replace(/notPunctSpace/g,Am).replace(/punctSpace/g,Th).replace(/punct/g,$d).getRegex(),bx=Gt(Om,"gu").replace(/notPunctSpace/g,mx).replace(/punctSpace/g,fx).replace(/punct/g,Rm).getRegex(),wx=Gt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Am).replace(/punctSpace/g,Th).replace(/punct/g,$d).getRegex(),kx=Gt(/\\(punct)/,"gu").replace(/punct/g,$d).getRegex(),Sx=Gt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),_x=Gt(_h).replace("(?:-->|$)","-->").getRegex(),Cx=Gt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",_x).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ld=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Tx=Gt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Ld).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Dm=Gt(/^!?\[(label)\]\[(ref)\]/).replace("label",Ld).replace("ref",Sh).getRegex(),Mm=Gt(/^!?\[(ref)\](?:\[\])?/).replace("ref",Sh).getRegex(),jx=Gt("reflink|nolink(?!\\()","g").replace("reflink",Dm).replace("nolink",Mm).getRegex(),jh={_backpedal:oc,anyPunctuation:kx,autolink:Sx,blockSkip:gx,br:Lm,code:dx,del:oc,emStrongLDelim:yx,emStrongRDelimAst:xx,emStrongRDelimUnd:wx,escape:cx,link:Tx,nolink:Mm,punctuation:hx,reflink:Dm,reflinkSearch:jx,tag:Cx,text:px,url:oc},Nx={...jh,link:Gt(/^!?\[(label)\]\((.*?)\)/).replace("label",Ld).getRegex(),reflink:Gt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ld).getRegex()},nh={...jh,emStrongRDelimAst:bx,emStrongLDelim:vx,url:Gt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ex={...nh,br:Gt(Lm).replace("{2,}","*").getRegex(),text:Gt(nh.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},yd={normal:Ch,gfm:lx,pedantic:ux},Ju={normal:jh,gfm:nh,breaks:Ex,pedantic:Nx},Px={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},pf=l=>Px[l];function Ls(l,u){if(u){if(Br.escapeTest.test(l))return l.replace(Br.escapeReplace,pf)}else if(Br.escapeTestNoEncode.test(l))return l.replace(Br.escapeReplaceNoEncode,pf);return l}function hf(l){try{l=encodeURI(l).replace(Br.percentDecode,"%")}catch{return null}return l}function ff(l,u){var v;const d=l.replace(Br.findPipe,(k,_,w)=>{let C=!1,N=_;for(;--N>=0&&w[N]==="\\";)C=!C;return C?"|":" |"}),f=d.split(Br.splitPipe);let g=0;if(f[0].trim()||f.shift(),f.length>0&&!((v=f.at(-1))!=null&&v.trim())&&f.pop(),u)if(f.length>u)f.splice(u);else for(;f.length<u;)f.push("");for(;g<f.length;g++)f[g]=f[g].trim().replace(Br.slashPipe,"|");return f}function Xu(l,u,d){const f=l.length;if(f===0)return"";let g=0;for(;g<f&&l.charAt(f-g-1)===u;)g++;return l.slice(0,f-g)}function Lx(l,u){if(l.indexOf(u[1])===-1)return-1;let d=0;for(let f=0;f<l.length;f++)if(l[f]==="\\")f++;else if(l[f]===u[0])d++;else if(l[f]===u[1]&&(d--,d<0))return f;return d>0?-2:-1}function mf(l,u,d,f,g){const v=u.href,k=u.title||null,_=l[1].replace(g.other.outputLinkReplace,"$1");f.state.inLink=!0;const w={type:l[0].charAt(0)==="!"?"image":"link",raw:d,href:v,title:k,text:_,tokens:f.inlineTokens(_)};return f.state.inLink=!1,w}function Ax(l,u,d){const f=l.match(d.other.indentCodeCompensation);if(f===null)return u;const g=f[1];return u.split(`
`).map(v=>{const k=v.match(d.other.beginningSpace);if(k===null)return v;const[_]=k;return _.length>=g.length?v.slice(g.length):v}).join(`
`)}var Ad=class{constructor(l){on(this,"options");on(this,"rules");on(this,"lexer");this.options=l||il}space(l){const u=this.rules.block.newline.exec(l);if(u&&u[0].length>0)return{type:"space",raw:u[0]}}code(l){const u=this.rules.block.code.exec(l);if(u){const d=u[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:u[0],codeBlockStyle:"indented",text:this.options.pedantic?d:Xu(d,`
`)}}}fences(l){const u=this.rules.block.fences.exec(l);if(u){const d=u[0],f=Ax(d,u[3]||"",this.rules);return{type:"code",raw:d,lang:u[2]?u[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):u[2],text:f}}}heading(l){const u=this.rules.block.heading.exec(l);if(u){let d=u[2].trim();if(this.rules.other.endingHash.test(d)){const f=Xu(d,"#");(this.options.pedantic||!f||this.rules.other.endingSpaceChar.test(f))&&(d=f.trim())}return{type:"heading",raw:u[0],depth:u[1].length,text:d,tokens:this.lexer.inline(d)}}}hr(l){const u=this.rules.block.hr.exec(l);if(u)return{type:"hr",raw:Xu(u[0],`
`)}}blockquote(l){const u=this.rules.block.blockquote.exec(l);if(u){let d=Xu(u[0],`
`).split(`
`),f="",g="";const v=[];for(;d.length>0;){let k=!1;const _=[];let w;for(w=0;w<d.length;w++)if(this.rules.other.blockquoteStart.test(d[w]))_.push(d[w]),k=!0;else if(!k)_.push(d[w]);else break;d=d.slice(w);const C=_.join(`
`),N=C.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");f=f?`${f}
${C}`:C,g=g?`${g}
${N}`:N;const O=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(N,v,!0),this.lexer.state.top=O,d.length===0)break;const L=v.at(-1);if((L==null?void 0:L.type)==="code")break;if((L==null?void 0:L.type)==="blockquote"){const Y=L,U=Y.raw+`
`+d.join(`
`),B=this.blockquote(U);v[v.length-1]=B,f=f.substring(0,f.length-Y.raw.length)+B.raw,g=g.substring(0,g.length-Y.text.length)+B.text;break}else if((L==null?void 0:L.type)==="list"){const Y=L,U=Y.raw+`
`+d.join(`
`),B=this.list(U);v[v.length-1]=B,f=f.substring(0,f.length-L.raw.length)+B.raw,g=g.substring(0,g.length-Y.raw.length)+B.raw,d=U.substring(v.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:f,tokens:v,text:g}}}list(l){let u=this.rules.block.list.exec(l);if(u){let d=u[1].trim();const f=d.length>1,g={type:"list",raw:"",ordered:f,start:f?+d.slice(0,-1):"",loose:!1,items:[]};d=f?`\\d{1,9}\\${d.slice(-1)}`:`\\${d}`,this.options.pedantic&&(d=f?d:"[*+-]");const v=this.rules.other.listItemRegex(d);let k=!1;for(;l;){let w=!1,C="",N="";if(!(u=v.exec(l))||this.rules.block.hr.test(l))break;C=u[0],l=l.substring(C.length);let O=u[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,I=>" ".repeat(3*I.length)),L=l.split(`
`,1)[0],Y=!O.trim(),U=0;if(this.options.pedantic?(U=2,N=O.trimStart()):Y?U=u[1].length+1:(U=u[2].search(this.rules.other.nonSpaceChar),U=U>4?1:U,N=O.slice(U),U+=u[1].length),Y&&this.rules.other.blankLine.test(L)&&(C+=L+`
`,l=l.substring(L.length+1),w=!0),!w){const I=this.rules.other.nextBulletRegex(U),z=this.rules.other.hrRegex(U),q=this.rules.other.fencesBeginRegex(U),W=this.rules.other.headingBeginRegex(U),G=this.rules.other.htmlBeginRegex(U);for(;l;){const X=l.split(`
`,1)[0];let se;if(L=X,this.options.pedantic?(L=L.replace(this.rules.other.listReplaceNesting,"  "),se=L):se=L.replace(this.rules.other.tabCharGlobal,"    "),q.test(L)||W.test(L)||G.test(L)||I.test(L)||z.test(L))break;if(se.search(this.rules.other.nonSpaceChar)>=U||!L.trim())N+=`
`+se.slice(U);else{if(Y||O.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||q.test(O)||W.test(O)||z.test(O))break;N+=`
`+L}!Y&&!L.trim()&&(Y=!0),C+=X+`
`,l=l.substring(X.length+1),O=se.slice(U)}}g.loose||(k?g.loose=!0:this.rules.other.doubleBlankLine.test(C)&&(k=!0));let B=null,J;this.options.gfm&&(B=this.rules.other.listIsTask.exec(N),B&&(J=B[0]!=="[ ] ",N=N.replace(this.rules.other.listReplaceTask,""))),g.items.push({type:"list_item",raw:C,task:!!B,checked:J,loose:!1,text:N,tokens:[]}),g.raw+=C}const _=g.items.at(-1);if(_)_.raw=_.raw.trimEnd(),_.text=_.text.trimEnd();else return;g.raw=g.raw.trimEnd();for(let w=0;w<g.items.length;w++)if(this.lexer.state.top=!1,g.items[w].tokens=this.lexer.blockTokens(g.items[w].text,[]),!g.loose){const C=g.items[w].tokens.filter(O=>O.type==="space"),N=C.length>0&&C.some(O=>this.rules.other.anyLine.test(O.raw));g.loose=N}if(g.loose)for(let w=0;w<g.items.length;w++)g.items[w].loose=!0;return g}}html(l){const u=this.rules.block.html.exec(l);if(u)return{type:"html",block:!0,raw:u[0],pre:u[1]==="pre"||u[1]==="script"||u[1]==="style",text:u[0]}}def(l){const u=this.rules.block.def.exec(l);if(u){const d=u[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),f=u[2]?u[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",g=u[3]?u[3].substring(1,u[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):u[3];return{type:"def",tag:d,raw:u[0],href:f,title:g}}}table(l){var k;const u=this.rules.block.table.exec(l);if(!u||!this.rules.other.tableDelimiter.test(u[2]))return;const d=ff(u[1]),f=u[2].replace(this.rules.other.tableAlignChars,"").split("|"),g=(k=u[3])!=null&&k.trim()?u[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],v={type:"table",raw:u[0],header:[],align:[],rows:[]};if(d.length===f.length){for(const _ of f)this.rules.other.tableAlignRight.test(_)?v.align.push("right"):this.rules.other.tableAlignCenter.test(_)?v.align.push("center"):this.rules.other.tableAlignLeft.test(_)?v.align.push("left"):v.align.push(null);for(let _=0;_<d.length;_++)v.header.push({text:d[_],tokens:this.lexer.inline(d[_]),header:!0,align:v.align[_]});for(const _ of g)v.rows.push(ff(_,v.header.length).map((w,C)=>({text:w,tokens:this.lexer.inline(w),header:!1,align:v.align[C]})));return v}}lheading(l){const u=this.rules.block.lheading.exec(l);if(u)return{type:"heading",raw:u[0],depth:u[2].charAt(0)==="="?1:2,text:u[1],tokens:this.lexer.inline(u[1])}}paragraph(l){const u=this.rules.block.paragraph.exec(l);if(u){const d=u[1].charAt(u[1].length-1)===`
`?u[1].slice(0,-1):u[1];return{type:"paragraph",raw:u[0],text:d,tokens:this.lexer.inline(d)}}}text(l){const u=this.rules.block.text.exec(l);if(u)return{type:"text",raw:u[0],text:u[0],tokens:this.lexer.inline(u[0])}}escape(l){const u=this.rules.inline.escape.exec(l);if(u)return{type:"escape",raw:u[0],text:u[1]}}tag(l){const u=this.rules.inline.tag.exec(l);if(u)return!this.lexer.state.inLink&&this.rules.other.startATag.test(u[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(u[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(u[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(u[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:u[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:u[0]}}link(l){const u=this.rules.inline.link.exec(l);if(u){const d=u[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(d)){if(!this.rules.other.endAngleBracket.test(d))return;const v=Xu(d.slice(0,-1),"\\");if((d.length-v.length)%2===0)return}else{const v=Lx(u[2],"()");if(v===-2)return;if(v>-1){const _=(u[0].indexOf("!")===0?5:4)+u[1].length+v;u[2]=u[2].substring(0,v),u[0]=u[0].substring(0,_).trim(),u[3]=""}}let f=u[2],g="";if(this.options.pedantic){const v=this.rules.other.pedanticHrefTitle.exec(f);v&&(f=v[1],g=v[3])}else g=u[3]?u[3].slice(1,-1):"";return f=f.trim(),this.rules.other.startAngleBracket.test(f)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(d)?f=f.slice(1):f=f.slice(1,-1)),mf(u,{href:f&&f.replace(this.rules.inline.anyPunctuation,"$1"),title:g&&g.replace(this.rules.inline.anyPunctuation,"$1")},u[0],this.lexer,this.rules)}}reflink(l,u){let d;if((d=this.rules.inline.reflink.exec(l))||(d=this.rules.inline.nolink.exec(l))){const f=(d[2]||d[1]).replace(this.rules.other.multipleSpaceGlobal," "),g=u[f.toLowerCase()];if(!g){const v=d[0].charAt(0);return{type:"text",raw:v,text:v}}return mf(d,g,d[0],this.lexer,this.rules)}}emStrong(l,u,d=""){let f=this.rules.inline.emStrongLDelim.exec(l);if(!f||f[3]&&d.match(this.rules.other.unicodeAlphaNumeric))return;if(!(f[1]||f[2]||"")||!d||this.rules.inline.punctuation.exec(d)){const v=[...f[0]].length-1;let k,_,w=v,C=0;const N=f[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(N.lastIndex=0,u=u.slice(-1*l.length+v);(f=N.exec(u))!=null;){if(k=f[1]||f[2]||f[3]||f[4]||f[5]||f[6],!k)continue;if(_=[...k].length,f[3]||f[4]){w+=_;continue}else if((f[5]||f[6])&&v%3&&!((v+_)%3)){C+=_;continue}if(w-=_,w>0)continue;_=Math.min(_,_+w+C);const O=[...f[0]][0].length,L=l.slice(0,v+f.index+O+_);if(Math.min(v,_)%2){const U=L.slice(1,-1);return{type:"em",raw:L,text:U,tokens:this.lexer.inlineTokens(U)}}const Y=L.slice(2,-2);return{type:"strong",raw:L,text:Y,tokens:this.lexer.inlineTokens(Y)}}}}codespan(l){const u=this.rules.inline.code.exec(l);if(u){let d=u[2].replace(this.rules.other.newLineCharGlobal," ");const f=this.rules.other.nonSpaceChar.test(d),g=this.rules.other.startingSpaceChar.test(d)&&this.rules.other.endingSpaceChar.test(d);return f&&g&&(d=d.substring(1,d.length-1)),{type:"codespan",raw:u[0],text:d}}}br(l){const u=this.rules.inline.br.exec(l);if(u)return{type:"br",raw:u[0]}}del(l){const u=this.rules.inline.del.exec(l);if(u)return{type:"del",raw:u[0],text:u[2],tokens:this.lexer.inlineTokens(u[2])}}autolink(l){const u=this.rules.inline.autolink.exec(l);if(u){let d,f;return u[2]==="@"?(d=u[1],f="mailto:"+d):(d=u[1],f=d),{type:"link",raw:u[0],text:d,href:f,tokens:[{type:"text",raw:d,text:d}]}}}url(l){var d;let u;if(u=this.rules.inline.url.exec(l)){let f,g;if(u[2]==="@")f=u[0],g="mailto:"+f;else{let v;do v=u[0],u[0]=((d=this.rules.inline._backpedal.exec(u[0]))==null?void 0:d[0])??"";while(v!==u[0]);f=u[0],u[1]==="www."?g="http://"+u[0]:g=u[0]}return{type:"link",raw:u[0],text:f,href:g,tokens:[{type:"text",raw:f,text:f}]}}}inlineText(l){const u=this.rules.inline.text.exec(l);if(u){const d=this.lexer.state.inRawBlock;return{type:"text",raw:u[0],text:u[0],escaped:d}}}},fa=class rh{constructor(u){on(this,"tokens");on(this,"options");on(this,"state");on(this,"tokenizer");on(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=u||il,this.options.tokenizer=this.options.tokenizer||new Ad,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const d={other:Br,block:yd.normal,inline:Ju.normal};this.options.pedantic?(d.block=yd.pedantic,d.inline=Ju.pedantic):this.options.gfm&&(d.block=yd.gfm,this.options.breaks?d.inline=Ju.breaks:d.inline=Ju.gfm),this.tokenizer.rules=d}static get rules(){return{block:yd,inline:Ju}}static lex(u,d){return new rh(d).lex(u)}static lexInline(u,d){return new rh(d).inlineTokens(u)}lex(u){u=u.replace(Br.carriageReturn,`
`),this.blockTokens(u,this.tokens);for(let d=0;d<this.inlineQueue.length;d++){const f=this.inlineQueue[d];this.inlineTokens(f.src,f.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(u,d=[],f=!1){var g,v,k;for(this.options.pedantic&&(u=u.replace(Br.tabCharGlobal,"    ").replace(Br.spaceLine,""));u;){let _;if((v=(g=this.options.extensions)==null?void 0:g.block)!=null&&v.some(C=>(_=C.call({lexer:this},u,d))?(u=u.substring(_.raw.length),d.push(_),!0):!1))continue;if(_=this.tokenizer.space(u)){u=u.substring(_.raw.length);const C=d.at(-1);_.raw.length===1&&C!==void 0?C.raw+=`
`:d.push(_);continue}if(_=this.tokenizer.code(u)){u=u.substring(_.raw.length);const C=d.at(-1);(C==null?void 0:C.type)==="paragraph"||(C==null?void 0:C.type)==="text"?(C.raw+=`
`+_.raw,C.text+=`
`+_.text,this.inlineQueue.at(-1).src=C.text):d.push(_);continue}if(_=this.tokenizer.fences(u)){u=u.substring(_.raw.length),d.push(_);continue}if(_=this.tokenizer.heading(u)){u=u.substring(_.raw.length),d.push(_);continue}if(_=this.tokenizer.hr(u)){u=u.substring(_.raw.length),d.push(_);continue}if(_=this.tokenizer.blockquote(u)){u=u.substring(_.raw.length),d.push(_);continue}if(_=this.tokenizer.list(u)){u=u.substring(_.raw.length),d.push(_);continue}if(_=this.tokenizer.html(u)){u=u.substring(_.raw.length),d.push(_);continue}if(_=this.tokenizer.def(u)){u=u.substring(_.raw.length);const C=d.at(-1);(C==null?void 0:C.type)==="paragraph"||(C==null?void 0:C.type)==="text"?(C.raw+=`
`+_.raw,C.text+=`
`+_.raw,this.inlineQueue.at(-1).src=C.text):this.tokens.links[_.tag]||(this.tokens.links[_.tag]={href:_.href,title:_.title});continue}if(_=this.tokenizer.table(u)){u=u.substring(_.raw.length),d.push(_);continue}if(_=this.tokenizer.lheading(u)){u=u.substring(_.raw.length),d.push(_);continue}let w=u;if((k=this.options.extensions)!=null&&k.startBlock){let C=1/0;const N=u.slice(1);let O;this.options.extensions.startBlock.forEach(L=>{O=L.call({lexer:this},N),typeof O=="number"&&O>=0&&(C=Math.min(C,O))}),C<1/0&&C>=0&&(w=u.substring(0,C+1))}if(this.state.top&&(_=this.tokenizer.paragraph(w))){const C=d.at(-1);f&&(C==null?void 0:C.type)==="paragraph"?(C.raw+=`
`+_.raw,C.text+=`
`+_.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=C.text):d.push(_),f=w.length!==u.length,u=u.substring(_.raw.length);continue}if(_=this.tokenizer.text(u)){u=u.substring(_.raw.length);const C=d.at(-1);(C==null?void 0:C.type)==="text"?(C.raw+=`
`+_.raw,C.text+=`
`+_.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=C.text):d.push(_);continue}if(u){const C="Infinite loop on byte: "+u.charCodeAt(0);if(this.options.silent){console.error(C);break}else throw new Error(C)}}return this.state.top=!0,d}inline(u,d=[]){return this.inlineQueue.push({src:u,tokens:d}),d}inlineTokens(u,d=[]){var _,w,C;let f=u,g=null;if(this.tokens.links){const N=Object.keys(this.tokens.links);if(N.length>0)for(;(g=this.tokenizer.rules.inline.reflinkSearch.exec(f))!=null;)N.includes(g[0].slice(g[0].lastIndexOf("[")+1,-1))&&(f=f.slice(0,g.index)+"["+"a".repeat(g[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(g=this.tokenizer.rules.inline.anyPunctuation.exec(f))!=null;)f=f.slice(0,g.index)+"++"+f.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(g=this.tokenizer.rules.inline.blockSkip.exec(f))!=null;)f=f.slice(0,g.index)+"["+"a".repeat(g[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let v=!1,k="";for(;u;){v||(k=""),v=!1;let N;if((w=(_=this.options.extensions)==null?void 0:_.inline)!=null&&w.some(L=>(N=L.call({lexer:this},u,d))?(u=u.substring(N.raw.length),d.push(N),!0):!1))continue;if(N=this.tokenizer.escape(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.tag(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.link(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.reflink(u,this.tokens.links)){u=u.substring(N.raw.length);const L=d.at(-1);N.type==="text"&&(L==null?void 0:L.type)==="text"?(L.raw+=N.raw,L.text+=N.text):d.push(N);continue}if(N=this.tokenizer.emStrong(u,f,k)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.codespan(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.br(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.del(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.autolink(u)){u=u.substring(N.raw.length),d.push(N);continue}if(!this.state.inLink&&(N=this.tokenizer.url(u))){u=u.substring(N.raw.length),d.push(N);continue}let O=u;if((C=this.options.extensions)!=null&&C.startInline){let L=1/0;const Y=u.slice(1);let U;this.options.extensions.startInline.forEach(B=>{U=B.call({lexer:this},Y),typeof U=="number"&&U>=0&&(L=Math.min(L,U))}),L<1/0&&L>=0&&(O=u.substring(0,L+1))}if(N=this.tokenizer.inlineText(O)){u=u.substring(N.raw.length),N.raw.slice(-1)!=="_"&&(k=N.raw.slice(-1)),v=!0;const L=d.at(-1);(L==null?void 0:L.type)==="text"?(L.raw+=N.raw,L.text+=N.text):d.push(N);continue}if(u){const L="Infinite loop on byte: "+u.charCodeAt(0);if(this.options.silent){console.error(L);break}else throw new Error(L)}}return d}},Rd=class{constructor(l){on(this,"options");on(this,"parser");this.options=l||il}space(l){return""}code({text:l,lang:u,escaped:d}){var v;const f=(v=(u||"").match(Br.notSpaceStart))==null?void 0:v[0],g=l.replace(Br.endingNewline,"")+`
`;return f?'<pre><code class="language-'+Ls(f)+'">'+(d?g:Ls(g,!0))+`</code></pre>
`:"<pre><code>"+(d?g:Ls(g,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:u}){return`<h${u}>${this.parser.parseInline(l)}</h${u}>
`}hr(l){return`<hr>
`}list(l){const u=l.ordered,d=l.start;let f="";for(let k=0;k<l.items.length;k++){const _=l.items[k];f+=this.listitem(_)}const g=u?"ol":"ul",v=u&&d!==1?' start="'+d+'"':"";return"<"+g+v+`>
`+f+"</"+g+`>
`}listitem(l){var d;let u="";if(l.task){const f=this.checkbox({checked:!!l.checked});l.loose?((d=l.tokens[0])==null?void 0:d.type)==="paragraph"?(l.tokens[0].text=f+" "+l.tokens[0].text,l.tokens[0].tokens&&l.tokens[0].tokens.length>0&&l.tokens[0].tokens[0].type==="text"&&(l.tokens[0].tokens[0].text=f+" "+Ls(l.tokens[0].tokens[0].text),l.tokens[0].tokens[0].escaped=!0)):l.tokens.unshift({type:"text",raw:f+" ",text:f+" ",escaped:!0}):u+=f+" "}return u+=this.parser.parse(l.tokens,!!l.loose),`<li>${u}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let u="",d="";for(let g=0;g<l.header.length;g++)d+=this.tablecell(l.header[g]);u+=this.tablerow({text:d});let f="";for(let g=0;g<l.rows.length;g++){const v=l.rows[g];d="";for(let k=0;k<v.length;k++)d+=this.tablecell(v[k]);f+=this.tablerow({text:d})}return f&&(f=`<tbody>${f}</tbody>`),`<table>
<thead>
`+u+`</thead>
`+f+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){const u=this.parser.parseInline(l.tokens),d=l.header?"th":"td";return(l.align?`<${d} align="${l.align}">`:`<${d}>`)+u+`</${d}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${Ls(l,!0)}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:u,tokens:d}){const f=this.parser.parseInline(d),g=hf(l);if(g===null)return f;l=g;let v='<a href="'+l+'"';return u&&(v+=' title="'+Ls(u)+'"'),v+=">"+f+"</a>",v}image({href:l,title:u,text:d,tokens:f}){f&&(d=this.parser.parseInline(f,this.parser.textRenderer));const g=hf(l);if(g===null)return Ls(d);l=g;let v=`<img src="${l}" alt="${d}"`;return u&&(v+=` title="${Ls(u)}"`),v+=">",v}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):"escaped"in l&&l.escaped?l.text:Ls(l.text)}},Nh=class{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}},ma=class ih{constructor(u){on(this,"options");on(this,"renderer");on(this,"textRenderer");this.options=u||il,this.options.renderer=this.options.renderer||new Rd,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Nh}static parse(u,d){return new ih(d).parse(u)}static parseInline(u,d){return new ih(d).parseInline(u)}parse(u,d=!0){var g,v;let f="";for(let k=0;k<u.length;k++){const _=u[k];if((v=(g=this.options.extensions)==null?void 0:g.renderers)!=null&&v[_.type]){const C=_,N=this.options.extensions.renderers[C.type].call({parser:this},C);if(N!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(C.type)){f+=N||"";continue}}const w=_;switch(w.type){case"space":{f+=this.renderer.space(w);continue}case"hr":{f+=this.renderer.hr(w);continue}case"heading":{f+=this.renderer.heading(w);continue}case"code":{f+=this.renderer.code(w);continue}case"table":{f+=this.renderer.table(w);continue}case"blockquote":{f+=this.renderer.blockquote(w);continue}case"list":{f+=this.renderer.list(w);continue}case"html":{f+=this.renderer.html(w);continue}case"paragraph":{f+=this.renderer.paragraph(w);continue}case"text":{let C=w,N=this.renderer.text(C);for(;k+1<u.length&&u[k+1].type==="text";)C=u[++k],N+=`
`+this.renderer.text(C);d?f+=this.renderer.paragraph({type:"paragraph",raw:N,text:N,tokens:[{type:"text",raw:N,text:N,escaped:!0}]}):f+=N;continue}default:{const C='Token with "'+w.type+'" type was not found.';if(this.options.silent)return console.error(C),"";throw new Error(C)}}}return f}parseInline(u,d=this.renderer){var g,v;let f="";for(let k=0;k<u.length;k++){const _=u[k];if((v=(g=this.options.extensions)==null?void 0:g.renderers)!=null&&v[_.type]){const C=this.options.extensions.renderers[_.type].call({parser:this},_);if(C!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(_.type)){f+=C||"";continue}}const w=_;switch(w.type){case"escape":{f+=d.text(w);break}case"html":{f+=d.html(w);break}case"link":{f+=d.link(w);break}case"image":{f+=d.image(w);break}case"strong":{f+=d.strong(w);break}case"em":{f+=d.em(w);break}case"codespan":{f+=d.codespan(w);break}case"br":{f+=d.br(w);break}case"del":{f+=d.del(w);break}case"text":{f+=d.text(w);break}default:{const C='Token with "'+w.type+'" type was not found.';if(this.options.silent)return console.error(C),"";throw new Error(C)}}}return f}},Qp,_d=(Qp=class{constructor(l){on(this,"options");on(this,"block");this.options=l||il}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}provideLexer(){return this.block?fa.lex:fa.lexInline}provideParser(){return this.block?ma.parse:ma.parseInline}},on(Qp,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Qp),Rx=class{constructor(...l){on(this,"defaults",bh());on(this,"options",this.setOptions);on(this,"parse",this.parseMarkdown(!0));on(this,"parseInline",this.parseMarkdown(!1));on(this,"Parser",ma);on(this,"Renderer",Rd);on(this,"TextRenderer",Nh);on(this,"Lexer",fa);on(this,"Tokenizer",Ad);on(this,"Hooks",_d);this.use(...l)}walkTokens(l,u){var f,g;let d=[];for(const v of l)switch(d=d.concat(u.call(this,v)),v.type){case"table":{const k=v;for(const _ of k.header)d=d.concat(this.walkTokens(_.tokens,u));for(const _ of k.rows)for(const w of _)d=d.concat(this.walkTokens(w.tokens,u));break}case"list":{const k=v;d=d.concat(this.walkTokens(k.items,u));break}default:{const k=v;(g=(f=this.defaults.extensions)==null?void 0:f.childTokens)!=null&&g[k.type]?this.defaults.extensions.childTokens[k.type].forEach(_=>{const w=k[_].flat(1/0);d=d.concat(this.walkTokens(w,u))}):k.tokens&&(d=d.concat(this.walkTokens(k.tokens,u)))}}return d}use(...l){const u=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(d=>{const f={...d};if(f.async=this.defaults.async||f.async||!1,d.extensions&&(d.extensions.forEach(g=>{if(!g.name)throw new Error("extension name required");if("renderer"in g){const v=u.renderers[g.name];v?u.renderers[g.name]=function(...k){let _=g.renderer.apply(this,k);return _===!1&&(_=v.apply(this,k)),_}:u.renderers[g.name]=g.renderer}if("tokenizer"in g){if(!g.level||g.level!=="block"&&g.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const v=u[g.level];v?v.unshift(g.tokenizer):u[g.level]=[g.tokenizer],g.start&&(g.level==="block"?u.startBlock?u.startBlock.push(g.start):u.startBlock=[g.start]:g.level==="inline"&&(u.startInline?u.startInline.push(g.start):u.startInline=[g.start]))}"childTokens"in g&&g.childTokens&&(u.childTokens[g.name]=g.childTokens)}),f.extensions=u),d.renderer){const g=this.defaults.renderer||new Rd(this.defaults);for(const v in d.renderer){if(!(v in g))throw new Error(`renderer '${v}' does not exist`);if(["options","parser"].includes(v))continue;const k=v,_=d.renderer[k],w=g[k];g[k]=(...C)=>{let N=_.apply(g,C);return N===!1&&(N=w.apply(g,C)),N||""}}f.renderer=g}if(d.tokenizer){const g=this.defaults.tokenizer||new Ad(this.defaults);for(const v in d.tokenizer){if(!(v in g))throw new Error(`tokenizer '${v}' does not exist`);if(["options","rules","lexer"].includes(v))continue;const k=v,_=d.tokenizer[k],w=g[k];g[k]=(...C)=>{let N=_.apply(g,C);return N===!1&&(N=w.apply(g,C)),N}}f.tokenizer=g}if(d.hooks){const g=this.defaults.hooks||new _d;for(const v in d.hooks){if(!(v in g))throw new Error(`hook '${v}' does not exist`);if(["options","block"].includes(v))continue;const k=v,_=d.hooks[k],w=g[k];_d.passThroughHooks.has(v)?g[k]=C=>{if(this.defaults.async)return Promise.resolve(_.call(g,C)).then(O=>w.call(g,O));const N=_.call(g,C);return w.call(g,N)}:g[k]=(...C)=>{let N=_.apply(g,C);return N===!1&&(N=w.apply(g,C)),N}}f.hooks=g}if(d.walkTokens){const g=this.defaults.walkTokens,v=d.walkTokens;f.walkTokens=function(k){let _=[];return _.push(v.call(this,k)),g&&(_=_.concat(g.call(this,k))),_}}this.defaults={...this.defaults,...f}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,u){return fa.lex(l,u??this.defaults)}parser(l,u){return ma.parse(l,u??this.defaults)}parseMarkdown(l){return(d,f)=>{const g={...f},v={...this.defaults,...g},k=this.onError(!!v.silent,!!v.async);if(this.defaults.async===!0&&g.async===!1)return k(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof d>"u"||d===null)return k(new Error("marked(): input parameter is undefined or null"));if(typeof d!="string")return k(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(d)+", string expected"));v.hooks&&(v.hooks.options=v,v.hooks.block=l);const _=v.hooks?v.hooks.provideLexer():l?fa.lex:fa.lexInline,w=v.hooks?v.hooks.provideParser():l?ma.parse:ma.parseInline;if(v.async)return Promise.resolve(v.hooks?v.hooks.preprocess(d):d).then(C=>_(C,v)).then(C=>v.hooks?v.hooks.processAllTokens(C):C).then(C=>v.walkTokens?Promise.all(this.walkTokens(C,v.walkTokens)).then(()=>C):C).then(C=>w(C,v)).then(C=>v.hooks?v.hooks.postprocess(C):C).catch(k);try{v.hooks&&(d=v.hooks.preprocess(d));let C=_(d,v);v.hooks&&(C=v.hooks.processAllTokens(C)),v.walkTokens&&this.walkTokens(C,v.walkTokens);let N=w(C,v);return v.hooks&&(N=v.hooks.postprocess(N)),N}catch(C){return k(C)}}}onError(l,u){return d=>{if(d.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const f="<p>An error occurred:</p><pre>"+Ls(d.message+"",!0)+"</pre>";return u?Promise.resolve(f):f}if(u)return Promise.reject(d);throw d}}},el=new Rx;function Jt(l,u){return el.parse(l,u)}Jt.options=Jt.setOptions=function(l){return el.setOptions(l),Jt.defaults=el.defaults,jm(Jt.defaults),Jt};Jt.getDefaults=bh;Jt.defaults=il;Jt.use=function(...l){return el.use(...l),Jt.defaults=el.defaults,jm(Jt.defaults),Jt};Jt.walkTokens=function(l,u){return el.walkTokens(l,u)};Jt.parseInline=el.parseInline;Jt.Parser=ma;Jt.parser=ma.parse;Jt.Renderer=Rd;Jt.TextRenderer=Nh;Jt.Lexer=fa;Jt.lexer=fa.lex;Jt.Tokenizer=Ad;Jt.Hooks=_d;Jt.parse=Jt;Jt.options;Jt.setOptions;Jt.use;Jt.walkTokens;Jt.parseInline;ma.parse;fa.lex;/*! @license DOMPurify 3.4.18 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.18/LICENSE */function gf(l,u){(u==null||u>l.length)&&(u=l.length);for(var d=0,f=Array(u);d<u;d++)f[d]=l[d];return f}function Ix(l){if(Array.isArray(l))return l}function Ox(l,u){var d=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(d!=null){var f,g,v,k,_=[],w=!0,C=!1;try{if(v=(d=d.call(l)).next,u!==0)for(;!(w=(f=v.call(d)).done)&&(_.push(f.value),_.length!==u);w=!0);}catch(N){C=!0,g=N}finally{try{if(!w&&d.return!=null&&(k=d.return(),Object(k)!==k))return}finally{if(C)throw g}}return _}}function Dx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function Mx(l,u){return Ix(l)||Ox(l,u)||zx(l,u)||Dx()}function zx(l,u){if(l){if(typeof l=="string")return gf(l,u);var d={}.toString.call(l).slice(8,-1);return d==="Object"&&l.constructor&&(d=l.constructor.name),d==="Map"||d==="Set"?Array.from(l):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?gf(l,u):void 0}}const zm=Object.entries,Fx=Object.keys,yf=Object.setPrototypeOf,Wx=Object.isFrozen,Fm=Object.getPrototypeOf,Wm=Object.getOwnPropertyDescriptor;let dr=Object.freeze,Qn=Object.seal,Za=Object.create,Hm=typeof Reflect<"u"&&Reflect,Id=Hm.apply,sh=Hm.construct;dr||(dr=function(u){return u});Qn||(Qn=function(u){return u});Id||(Id=function(u,d){for(var f=arguments.length,g=new Array(f>2?f-2:0),v=2;v<f;v++)g[v-2]=arguments[v];return u.apply(d,g)});sh||(sh=function(u){for(var d=arguments.length,f=new Array(d>1?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];return new u(...f)});const ca=jn(Array.prototype.forEach),Hx=jn(Array.prototype.lastIndexOf),vf=jn(Array.prototype.pop),Qu=jn(Array.prototype.push),Bx=jn(Array.prototype.slice),Ux=jn(Array.prototype.splice),Vl=Array.isArray,Mp=Bm(Set),zp=jn(Set.prototype.add),Zu=jn(Set.prototype.has),Xo=jn(String.prototype.toLowerCase),Fp=jn(String.prototype.toString),qx=jn(String.prototype.match),vd=jn(String.prototype.replace),Wp=jn(String.prototype.indexOf),$x=jn(String.prototype.trim),Kx=jn(Number.prototype.toString),Gx=jn(Boolean.prototype.toString),xf=typeof BigInt>"u"?null:jn(BigInt.prototype.toString),bf=typeof Symbol>"u"?null:jn(Symbol.prototype.toString),Rr=jn(Object.prototype.hasOwnProperty),ec=jn(Object.prototype.toString),Yx=RegExp.prototype.test,cr=function(u,d){return u instanceof RegExp&&(u.lastIndex=0),Id(Yx,u,[d])},da=Bm(TypeError);function jn(l){return function(u){for(var d=arguments.length,f=new Array(d>1?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];return Id(l,u,f)}}function Bm(l){return function(){for(var u=arguments.length,d=new Array(u),f=0;f<u;f++)d[f]=arguments[f];return sh(l,d)}}function Kt(l,u){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Xo;if(yf&&yf(l,null),!Vl(u))return l;let f=u.length;for(;f--;){let g=u[f];if(typeof g=="string"){const v=d(g);v!==g&&(Wx(u)||(u[f]=v),g=v)}l[g]=!0}return l}function Vx(l){for(let u=0;u<l.length;u++)Rr(l,u)||(l[u]=null);return l}function Od(l){const u=Za(null);for(const f of zm(l)){var d=Mx(f,2);const g=d[0],v=d[1];Rr(l,g)&&(Vl(v)?u[g]=Vx(v):v&&typeof v=="object"&&v.constructor===Object?u[g]=Od(v):u[g]=v)}return u}function ic(l){const u=Za(null),d=Fx(l);let f=d.length;for(;f--;)u[d[f]]=l[d[f]];return u}function Jx(l){switch(typeof l){case"string":return l;case"number":return Kx(l);case"boolean":return Gx(l);case"bigint":return xf?xf(l):"0";case"symbol":return bf?bf(l):"Symbol()";case"undefined":return ec(l);case"function":case"object":{if(l===null)return ec(l);const u=l,d=Di(u,"toString");if(typeof d=="function"){const f=d(u);return typeof f=="string"?f:ec(f)}return ec(l)}default:return ec(l)}}function Di(l,u){for(;l!==null;){const f=Wm(l,u);if(f){if(f.get)return jn(f.get);if(typeof f.value=="function")return jn(f.value)}l=Fm(l)}function d(){return null}return d}function Xx(l,u){for(;l!==null;){const d=Wm(l,u);if(d)return d.get?jn(d.get):null;l=Fm(l)}return null}function Qx(l){if(!l)return!1;try{return cr(l,""),!0}catch{return!1}}const wf=dr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Hp=dr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Bp=dr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Zx=dr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Up=dr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),eb=dr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),kf=dr(["#text"]),Sf=dr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),qp=dr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),_f=dr(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),xd=dr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),tb=Qn(/{{[\w\W]*|^[\w\W]*}}/g),nb=Qn(/<%[\w\W]*|^[\w\W]*%>/g),rb=Qn(/\${[\w\W]*/g),ib=Qn(/{{|}}|\${|<%|%>|&lt;%|%&gt;/),sb=Qn(/^data-[\-\w.\u00B7-\uFFFF]+$/),ab=Qn(/^aria-[\-\w]+$/),Cf=Qn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ob=Qn(/^(?:\w+script|data):/i),lb=Qn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ub=Qn(/^html$/i),cb=Qn(/^[a-z][.\w]*(-[.\w]+)+$/i),$p=Qn(/<[/\w!]/g),Tf=Qn(/<[/\w]/g),db=Qn(/<\/no(script|embed|frames)/i),jf=Qn(/\/>/i),pb=Qn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i),hb=Qn(/^[\r\n\t ]+/),$n={element:1,text:3,processingInstruction:7,comment:8,document:9,documentFragment:11},fb=dr(Kt({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),mb=function(){return typeof window>"u"?null:window},gb=function(u,d){if(typeof u!="object"||typeof u.createPolicy!="function")return null;let f=null;const g="data-tt-policy-suffix";d&&d.hasAttribute(g)&&(f=d.getAttribute(g));const v="dompurify"+(f?"#"+f:"");try{return u.createPolicy(v,{createHTML(k){return k},createScriptURL(k){return k}})}catch{return console.warn("TrustedTypes policy "+v+" could not be created."),null}},Nf=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Qa=function(u,d,f,g){return Rr(u,d)&&Vl(u[d])?Kt(g.base?ic(g.base):{},u[d],g.transform):f},Kp=function(u,d,f){const g=Rr(u,d)?u[d]:void 0;return g&&typeof g=="object"?Od(g):f};function Um(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:mb();const u=Te=>Um(Te);if(u.version="3.4.18",u.removed=[],!l||!l.document||l.document.nodeType!==$n.document||!l.Element)return u.isSupported=!1,u;let d=l.document;const f=d,g=f.currentScript,v=l.HTMLTemplateElement,k=l.Node,_=l.Element,w=l.NodeFilter,C=l.DOMParser,N=l.trustedTypes,O=_.prototype,L=Di(O,"cloneNode"),Y=Di(O,"remove"),U=Di(O,"removeAttributeNode"),B=Di(O,"nextSibling"),J=Di(O,"childNodes"),I=Di(O,"parentNode"),z=Di(O,"shadowRoot"),q=Di(O,"attributes"),W=k&&k.prototype?Di(k.prototype,"nodeType"):null,G=k&&k.prototype?Di(k.prototype,"nodeName"):null,X=k&&k.prototype?Di(k.prototype,"ownerDocument"):null,se=function(M){return W?W(M):M.nodeType},ve=function(M){return G?G(M):M.nodeName},De=Xx(O,"namespaceURI"),be=function(M){return De?De(M):M.namespaceURI};if(typeof v=="function"){const Te=d.createElement("template");Te.content&&Te.content.ownerDocument&&(d=Te.content.ownerDocument)}let ne,Le="",ue,xe=!1,A=0;const ee=function(){if(A>0)throw da('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Q=function(M){ee(),A++;try{return ne.createHTML(M)}finally{A--}},T=function(M){return ne&&mi?Q(M):M},P=function(M){ee(),A++;try{return ne.createScriptURL(M)}finally{A--}},H=function(){return xe||(ue=gb(N,g),xe=!0),ue},D=d,Z=D.implementation,Ce=D.createNodeIterator,Ie=D.createDocumentFragment,qe=D.getElementsByTagName,Oe=f.importNode;let _e=Nf();u.isSupported=typeof zm=="function"&&typeof I=="function"&&Z&&Z.createHTMLDocument!==void 0;const Ue=tb,$e=nb,tt=rb,Ke=sb,zt=ab,Yt=ob,Ht=lb,Tt=cb;let Ze=Cf,We=null;const st=Kt({},[...wf,...Hp,...Bp,...Up,...kf]);let ct=null;const Je=Kt({},[...Sf,...qp,..._f,...xd]);let ft=null,le=null,Se=null;const he=Object.seal(Za(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let wt=!0,Ye=!0,ot=!1,et=!0,yt=!1,ht=!0,Xt=!1,nr=!1,_r=null,Ir=null,Ur=!1,qr=!1,xt=!1,mi=!1,rt=!0,Cr=!1;const tn="user-content-";let Rt=!0,qt=!1,xn=null,mn=!1,Nn=null;const bn=Kt({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let ri=null;const In=Kt({},["audio","video","img","source","image","track"]);let pr=null;const gi=Kt({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),En="http://www.w3.org/1998/Math/MathML",as="http://www.w3.org/2000/svg",wn="http://www.w3.org/1999/xhtml";let Tr=wn,$r=!1,Or=null;const jr=Kt({},[En,as,wn],Fp),yi=dr(Kt({},["mi","mo","mn","ms","mtext"]));let os=null;const On=dr(Kt({},["annotation-xml"]));let ls=null;const Mi=dr(Za(null)),Dr=Kt({},["title","style","font","a","script"]);let Gn=null;const vi=["application/xhtml+xml","text/html"],zi="text/html";let Bt=null,Mr=null;const us=d.createElement("form"),At=function(M){return M instanceof RegExp||M instanceof Function},Fi=function(){let M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(!M||typeof M!="object")&&(M={}),M=Od(M),Gn=vi.indexOf(M.PARSER_MEDIA_TYPE)===-1?zi:M.PARSER_MEDIA_TYPE,Bt=Gn==="application/xhtml+xml"?Fp:Xo,We=Qa(M,"ALLOWED_TAGS",st,{transform:Bt}),ct=Qa(M,"ALLOWED_ATTR",Je,{transform:Bt}),Or=Qa(M,"ALLOWED_NAMESPACES",jr,{transform:Fp}),pr=Qa(M,"ADD_URI_SAFE_ATTR",gi,{transform:Bt,base:gi}),ri=Qa(M,"ADD_DATA_URI_TAGS",In,{transform:Bt,base:In}),Nn=Qa(M,"FORBID_CONTENTS",bn,{transform:Bt}),le=Qa(M,"FORBID_TAGS",Za(null),{transform:Bt}),Se=Qa(M,"FORBID_ATTR",Za(null),{transform:Bt}),mn=Rr(M,"USE_PROFILES")?M.USE_PROFILES&&typeof M.USE_PROFILES=="object"?Od(M.USE_PROFILES):M.USE_PROFILES:!1,wt=M.ALLOW_ARIA_ATTR!==!1,Ye=M.ALLOW_DATA_ATTR!==!1,ot=M.ALLOW_UNKNOWN_PROTOCOLS||!1,et=M.ALLOW_SELF_CLOSE_IN_ATTR!==!1,yt=M.SAFE_FOR_TEMPLATES||!1,ht=M.SAFE_FOR_XML!==!1,Xt=M.WHOLE_DOCUMENT||!1,qr=M.RETURN_DOM||!1,xt=M.RETURN_DOM_FRAGMENT||!1,mi=M.RETURN_TRUSTED_TYPE||!1,Ur=M.FORCE_BODY||!1,rt=M.SANITIZE_DOM!==!1,Cr=M.SANITIZE_NAMED_PROPS||!1,Rt=M.KEEP_CONTENT!==!1,qt=M.IN_PLACE||!1,Ze=Qx(M.ALLOWED_URI_REGEXP)?M.ALLOWED_URI_REGEXP:Cf,Tr=typeof M.NAMESPACE=="string"?M.NAMESPACE:wn,os=Kp(M,"MATHML_TEXT_INTEGRATION_POINTS",yi),ls=Kp(M,"HTML_INTEGRATION_POINTS",On);const ie=Kp(M,"CUSTOM_ELEMENT_HANDLING",Mi);if(ft=Za(null),Rr(ie,"tagNameCheck")&&At(ie.tagNameCheck)&&(ft.tagNameCheck=ie.tagNameCheck),Rr(ie,"attributeNameCheck")&&At(ie.attributeNameCheck)&&(ft.attributeNameCheck=ie.attributeNameCheck),Rr(ie,"allowCustomizedBuiltInElements")&&typeof ie.allowCustomizedBuiltInElements=="boolean"&&(ft.allowCustomizedBuiltInElements=ie.allowCustomizedBuiltInElements),Qn(ft),yt&&(Ye=!1),xt&&(qr=!0),mn&&((Rr(M,"ALLOWED_TAGS")||Rr(M,"ALLOWED_ATTR"))&&typeof console<"u"&&typeof console.warn=="function"&&console.warn("DOMPurify: USE_PROFILES overrides ALLOWED_TAGS and ALLOWED_ATTR. Do not use these options together."),We=Kt({},kf),ct=Za(null),mn.html===!0&&(Kt(We,wf),Kt(ct,Sf)),mn.svg===!0&&(Kt(We,Hp),Kt(ct,qp),Kt(ct,xd)),mn.svgFilters===!0&&(Kt(We,Bp),Kt(ct,qp),Kt(ct,xd)),mn.mathMl===!0&&(Kt(We,Up),Kt(ct,_f),Kt(ct,xd))),he.tagCheck=null,he.attributeCheck=null,Rr(M,"ADD_TAGS")&&(typeof M.ADD_TAGS=="function"?he.tagCheck=M.ADD_TAGS:Vl(M.ADD_TAGS)&&(We===st&&(We=ic(We)),Kt(We,M.ADD_TAGS,Bt))),Rr(M,"ADD_ATTR")&&(typeof M.ADD_ATTR=="function"?he.attributeCheck=M.ADD_ATTR:Vl(M.ADD_ATTR)&&(ct===Je&&(ct=ic(ct)),Kt(ct,M.ADD_ATTR,Bt))),Rr(M,"ADD_FORBID_CONTENTS")&&Vl(M.ADD_FORBID_CONTENTS)&&(Nn===bn&&(Nn=ic(Nn)),Kt(Nn,M.ADD_FORBID_CONTENTS,Bt)),Rt&&(We["#text"]=!0),Xt&&Kt(We,["html","head","body"]),We.table&&(We.tbody=!0,delete le.tbody),M.TRUSTED_TYPES_POLICY){if(typeof M.TRUSTED_TYPES_POLICY.createHTML!="function")throw da('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof M.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw da('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const we=ne;ne=M.TRUSTED_TYPES_POLICY;try{Le=Q("")}catch(Ee){throw ne=we,Ee}}else M.TRUSTED_TYPES_POLICY===null?(ne=void 0,Le=""):(ne===void 0&&(ne=H()),ne&&typeof Le=="string"&&(Le=Q("")));Mr=dr(M)},ii=Kt({},[...Hp,...Bp,...Zx]),Vt=Kt({},[...Up,...eb]),Xe=function(M,ie,we){return ie===wn?M==="svg":ie===En?M==="svg"&&(we==="annotation-xml"||os[we]):!!ii[M]},si=function(M,ie,we){return ie===wn?M==="math":ie===as?M==="math"&&ls[we]:!!Vt[M]},cs=function(M,ie,we){return ie===as&&!ls[we]||ie===En&&!os[we]?!1:!Vt[M]&&(Dr[M]||!ii[M])},Yn=function(M){const ie=be(M),we=Xo(ve(M)),Ee=I(M);let nt=Tr,dt="template";return Ee&&se(Ee)===$n.element&&(nt=be(Ee),dt=Xo(ve(Ee))),Or[ie]?ie===as?Xe(we,nt,dt):ie===En?si(we,nt,dt):ie===wn?cs(we,nt,dt):Gn==="application/xhtml+xml":!1},E=function(M){Qu(u.removed,{element:M});try{I(M).removeChild(M)}catch{if(Y(M),!I(M))throw da("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},$=function(M,ie,we){try{U(M,ie)}catch{try{M.removeAttribute(we)}catch{}}},me=function(M){Ct(M);const ie=J(M);ie&&ca(Bx(ie),we=>{try{Y(we)}catch{}}),se(M)===$n.element&&pe(M,!1)},je=function(M,ie,we){if(!we)try{we=ie.getAttributeNode(M)}catch{we=null}if(Qu(u.removed,{attribute:we||null,from:ie}),we)$(ie,we,M);else try{ie.removeAttribute(M)}catch{}if(M==="is")if(qr||xt)try{E(ie)}catch{}else try{ie.setAttribute(M,"")}catch{}},pe=function(M,ie){const we=q(M);if(we)for(let Ee=we.length-1;Ee>=0;--Ee){const nt=we[Ee],dt=nt&&nt.name;typeof dt=="string"&&!(ie&&ct[Bt(dt)])&&$(M,nt,dt)}},Be=function(M,ie){let we=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const Ee=[M];for(;Ee.length>0;){const nt=Ee.pop();if(ie(nt)===!1)continue;if(we&&se(nt)===$n.element){const _t=z(nt);bi(_t)&&Ee.push(_t)}const dt=J(nt);if(dt)for(let _t=dt.length-1;_t>=0;--_t)Ee.push(dt[_t])}},Ct=function(M){Be(M,ie=>{se(ie)===$n.element&&pe(ie,!0)})},Qt=function(M){const ie=[];return Be(M,we=>{ie.push(we)},!0),ie},kn=function(M,ie){const we=Mp();ca(Qt(M),Ee=>{se(Ee)===$n.element&&zp(we,Ee)}),ca(ie,Ee=>{se(Ee)===$n.element&&!Zu(we,Ee)&&pe(Ee,!0)})},Kr=function(M,ie){let we=!1;return ca(u.removed,Ee=>{Ee.element&&(we=we||Ee.element===M,Ct(Ee.element))}),kn(M,ie),we},sl=8,vt=function(M,ie){const we=xn;let Ee=null;const nt=()=>(Ee||(Ee=Mp(),ca(ie,dt=>{zp(Ee,dt)})),Ee);for(let dt=0;;dt++){const _t=Qt(M),cn=[M];let $t=!1;if(ca(_t,hr=>{se(hr)===$n.documentFragment?Qu(cn,hr):!$t&&!Zu(we,hr)&&($t=Zu(nt(),hr))}),!$t)return;if(dt>=sl)throw da("the tree kept changing during in-place sanitization; refusing to return it");ca(cn,(hr,Vn)=>{io(hr,Vn>0,M,nt())})}},io=function(M,ie,we,Ee){const nt=Hi(M);let dt;for(;dt=nt.nextNode();)!Zu(Ee,dt)||Zu(xn,dt)||(ie&&ir(_e.uponSanitizeShadowNode,dt,null),zs(dt,we))},so=function(M){xn&&zp(xn,M)},Wi=function(M,ie){return ht?M==="patchsrc"?!0:M==="for"&&ie!=="label"&&ie!=="output":!1},rr=function(M){ht&&Be(M,ie=>{const we=se(ie);if(we===$n.processingInstruction||we===$n.comment&&cr(Tf,ie.data)){try{Y(ie)}catch{}return!1}if(we===$n.element){const Ee=ie,nt=Bt(ve(ie));try{Ee.hasAttribute&&Ee.hasAttribute("patchsrc")&&Ee.removeAttribute("patchsrc"),Ee.hasAttribute&&Ee.hasAttribute("for")&&Wi("for",nt)&&Ee.removeAttribute("for")}catch{}}return!0})},ao=function(M){let ie=null,we=null;if(Ur)M="<remove></remove>"+M;else{const dt=qx(M,hb);we=dt&&dt[0]}Gn==="application/xhtml+xml"&&Tr===wn&&(M='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+M+"</body></html>");const Ee=ne?Q(M):M;if(Tr===wn)try{ie=new C().parseFromString(Ee,Gn)}catch{}if(!ie||!ie.documentElement){ie=Z.createDocument(Tr,"template",null);try{ie.documentElement.innerHTML=$r?Le:Ee}catch{}}const nt=ie.body||ie.documentElement;return M&&we&&nt.insertBefore(d.createTextNode(we),nt.childNodes[0]||null),Tr===wn?qe.call(ie,Xt?"html":"body")[0]:Xt?ie.documentElement:nt},Hi=function(M){let ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const we=X?X(M):M.ownerDocument;return Ce.call(we||M,M,(ie?0:w.SHOW_ELEMENT)|w.SHOW_COMMENT|w.SHOW_TEXT|w.SHOW_PROCESSING_INSTRUCTION|w.SHOW_CDATA_SECTION,null)},jt=function(M){return M=vd(M,Ue," "),M=vd(M,$e," "),M=vd(M,tt," "),M},ds=function(M){var ie;Is(M);const we=(ie=M.querySelectorAll)===null||ie===void 0?void 0:ie.call(M,"template");we&&ca(we,Ee=>{bi(Ee.content)&&ds(Ee.content)})},Is=function(M){M.normalize();const ie=Hi(M,!0);let we=ie.nextNode();for(;we;)we.data=jt(we.data),we=ie.nextNode()},xi=function(M){const ie=G?G(M):null;return typeof ie!="string"||Bt(ie)!=="form"?!1:typeof M.nodeName!="string"||typeof M.textContent!="string"||typeof M.removeChild!="function"||M.attributes!==q(M)||typeof M.removeAttribute!="function"||typeof M.removeAttributeNode!="function"||typeof M.getAttributeNode!="function"||typeof M.setAttribute!="function"||typeof M.namespaceURI!="string"||typeof M.insertBefore!="function"||typeof M.hasChildNodes!="function"||M.nodeType!==W(M)||M.childNodes!==J(M)},ya=function(M){if(!W||typeof M!="object"||M===null)return null;try{const ie=W(M);return typeof ie=="number"?ie:null}catch{return null}},bi=function(M){return ya(M)===$n.documentFragment},Bi=function(M){return ya(M)!==null};function ir(Te,M,ie){Te.length!==0&&ca(Te,we=>{we.call(u,M,ie,Mr)})}const va=function(M,ie,we){return!!(ht&&we===$n.element&&M.hasChildNodes()&&!Bi(M.firstElementChild)&&cr($p,M.textContent)&&cr($p,M.innerHTML)||ht&&fb[ie]&&we===$n.element&&be(M)===wn&&(Bi(M.firstElementChild)||typeof M.textContent=="string"&&cr($p,M.textContent))||we===$n.processingInstruction||ht&&we===$n.comment&&cr(Tf,M.data))},zr=function(M,ie){if(M instanceof RegExp)return cr(M,ie);if(M instanceof Function){for(var we=arguments.length,Ee=new Array(we>2?we-2:0),nt=2;nt<we;nt++)Ee[nt-2]=arguments[nt];return!!M(ie,...Ee)}return!1},ai=function(M,ie,we){if(!le[ie]&&oo(ie)&&zr(ft.tagNameCheck,ie))return!1;if(Rt&&!Nn[ie]&&!Nn[Xo(ie)]){const Ee=I(M),nt=J(M);if(nt&&Ee){const dt=nt.length;for(let _t=dt-1;_t>=0;--_t){const cn=M===we?L(nt[_t],!0):nt[_t];Ee.insertBefore(cn,B(M))}}}return E(M),!0},Dn=function(M,ie,we,Ee){return M.length===0?ie:ie===we||ie===Ee?ic(ie):ie},Gr=function(M,ie){return M===ie||I(M)!==null?!1:(qt&&Ct(M),!0)},Os=function(M,ie){if(so(M),ir(_e.beforeSanitizeElements,M,null),Gr(M,ie))return!0;if(xi(M))return E(M),!0;const we=Bt(ve(M)),Ee=se(M);if(We=Dn(_e.uponSanitizeElement,We,st,_r),ir(_e.uponSanitizeElement,M,{tagName:we,allowedTags:We}),Gr(M,ie))return!0;if(va(M,we,Ee))return E(M),!0;if(le[we]||!(he.tagCheck instanceof Function&&he.tagCheck(we))&&!We[we]){const nt=ai(M,we,ie);return nt===!1&&(ir(_e.afterSanitizeElements,M,null),Gr(M,ie))?!0:nt}if(Ee===$n.element&&!Yn(M)||(we==="noscript"||we==="noembed"||we==="noframes")&&cr(db,M.innerHTML))return E(M),!0;if(yt&&Ee===$n.text){const nt=M.textContent,dt=jt(nt);nt!==dt&&(Qu(u.removed,{element:M.cloneNode()}),M.textContent=dt)}return ir(_e.afterSanitizeElements,M,null),Gr(M,ie)},Nr=function(M,ie,we){if(Se[ie]||Wi(ie,M)||rt&&(ie==="id"||ie==="name")&&(we in d||we in us))return!1;const Ee=ct[ie]||he.attributeCheck instanceof Function&&he.attributeCheck(ie,M);if(Ye&&cr(Ke,ie)||wt&&cr(zt,ie))return!0;if(!Ee)return oo(M)&&zr(ft.tagNameCheck,M)&&zr(ft.attributeNameCheck,ie,M)||ie==="is"&&ft.allowCustomizedBuiltInElements&&zr(ft.tagNameCheck,we);if(pr[ie])return!0;const nt=vd(we,Ht,"");return cr(Ze,nt)||(ie==="src"||ie==="xlink:href"||ie==="href")&&M!=="script"&&Wp(we,"data:")===0&&ri[M]||ot&&!cr(Yt,nt)?!0:!we},Ds=Kt({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),oo=function(M){return!Ds[Xo(M)]&&cr(Tt,M)},Ms=function(M,ie,we,Ee){if(ne&&typeof N=="object"&&typeof N.getAttributeType=="function"&&!we)switch(N.getAttributeType(M,ie)){case"TrustedHTML":return Q(Ee);case"TrustedScriptURL":return P(Ee)}return Ee},Jl=function(M,ie,we,Ee){try{return we?M.setAttributeNS(we,ie,Ee):M.setAttribute(ie,Ee),xi(M)?(E(M),!1):!0}catch{return je(ie,M),!1}},lo=function(M,ie){return ht&&cr(pb,ie)?!0:Xo(M)==="attributename"&&Wp(ie,"href")!==-1},ps=function(M,ie){if(ir(_e.beforeSanitizeAttributes,M,null),Gr(M,ie))return;const we=M.attributes;if(!we||xi(M))return;ct=Dn(_e.uponSanitizeAttribute,ct,Je,Ir);const Ee={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ct,forceKeepAttr:void 0};let nt=we.length;const dt=Bt(ve(M));for(;nt--;){const _t=we[nt],cn=_t.name,$t=_t.namespaceURI,hr=_t.value,Vn=Bt(cn),fr=hr;let dn=cn==="value"?fr:$x(fr),Er=!1;if(Ee.attrName=Vn,Ee.attrValue=dn,Ee.keepAttr=!0,Ee.forceKeepAttr=void 0,ir(_e.uponSanitizeAttribute,M,Ee),dn=Ee.attrValue,Cr&&(Vn==="id"||Vn==="name")&&Wp(dn,tn)!==0&&(je(cn,M,_t),dn=tn+dn,Er=!0),lo(cn,dn)){je(cn,M,_t);continue}if(!Ee.forceKeepAttr){if(!Ee.keepAttr){je(cn,M,_t);continue}if(!et&&cr(jf,dn)){je(cn,M,_t);continue}if(yt&&(dn=jt(dn)),!Nr(dt,Vn,dn)){je(cn,M,_t);continue}dn=Ms(dt,Vn,$t,dn),dn!==fr&&Jl(M,cn,$t,dn)&&Er&&vf(u.removed)}}ir(_e.afterSanitizeAttributes,M,null),Gr(M,ie)},zs=function(M,ie){Os(M,ie),ps(M,ie),bi(M.content)&&uo(M.content)},uo=function(M){let ie=null;const we=Hi(M);for(ir(_e.beforeSanitizeShadowDOM,M,null);ie=we.nextNode();)if(ir(_e.uponSanitizeShadowNode,ie,null),zs(ie,M),se(ie)===$n.element){const Ee=z(ie);bi(Ee)&&(wi(Ee),uo(Ee))}yt&&Is(M),ir(_e.afterSanitizeShadowDOM,M,null)},wi=function(M){const ie=[{node:M,shadow:null}];for(;ie.length>0;){const we=ie.pop();if(we.shadow){uo(we.shadow);continue}const Ee=we.node,nt=se(Ee)===$n.element,dt=J(Ee);if(dt)for(let _t=dt.length-1;_t>=0;--_t)ie.push({node:dt[_t],shadow:null});if(nt){const _t=G?G(Ee):null;if(typeof _t=="string"&&Bt(_t)==="template"){const cn=Ee.content;bi(cn)&&ie.push({node:cn,shadow:null})}}if(nt){const _t=z(Ee);bi(_t)&&ie.push({node:null,shadow:_t},{node:_t,shadow:null})}}};return u.sanitize=function(Te){let M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ie=null,we=null,Ee=null,nt=null;if($r=!Te,$r&&(Te="<!-->"),typeof Te!="string"&&!Bi(Te)&&(Te=Jx(Te),typeof Te!="string"))throw da("dirty is not a string, aborting");if(!u.isSupported)return Te;nr?(We=_r,ct=Ir):Fi(M),u.removed=[];const dt=qt&&typeof Te!="string"&&Bi(Te);let _t=[];const cn=xn;if(dt){rr(Te);const fr=ve(Te);if(typeof fr=="string"){const dn=Bt(fr);if(!We[dn]||le[dn])throw me(Te),da("root node is forbidden and cannot be sanitized in-place")}if(xi(Te))throw me(Te),da("root node is clobbered and cannot be sanitized in-place");_t=Qt(Te),xn=Mp()}else if(Bi(Te))ie=ao("<!---->"),we=ie.ownerDocument.importNode(Te,!0),we.nodeType===$n.element&&we.nodeName==="BODY"||we.nodeName==="HTML"?ie=we:ie.appendChild(we),wi(ie);else{if(!qr&&!yt&&!Xt&&Te.indexOf("<")===-1)return T(Te);if(ie=ao(Te),!ie)return qr?null:mi?Le:""}ie&&Ur&&E(ie.firstChild);const $t=dt?Te:ie;try{dt&&wi(Te);const fr=Hi($t);for(;Ee=fr.nextNode();)zs(Ee,$t);dt&&vt(Te,_t)}catch(fr){throw dt&&(me(Te),Kr(Te,_t)),fr}finally{xn=cn}if(dt){if(Kr(Te,_t))throw da("a node selected for removal could not be safely returned; refusing to sanitize in place");return yt&&ds(Te),Te}if(qr){if(yt&&ds(ie),xt)for(nt=Ie.call(ie.ownerDocument);ie.firstChild;)nt.appendChild(ie.firstChild);else nt=ie;return(ct.shadowroot||ct.shadowrootmode)&&(nt=Oe.call(f,nt,!0)),nt}const hr=()=>Xt?ie.outerHTML:ie.innerHTML;let Vn=hr();return yt&&cr(ib,Vn)&&(Is(ie),Vn=hr()),Xt&&We["!doctype"]&&ie.ownerDocument&&ie.ownerDocument.doctype&&ie.ownerDocument.doctype.name&&cr(ub,ie.ownerDocument.doctype.name)&&(Vn="<!DOCTYPE "+ie.ownerDocument.doctype.name+`>
`+Vn),T(Vn)},u.setConfig=function(){let Te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Fi(Te),nr=!0,_r=We,Ir=ct},u.clearConfig=function(){Mr=null,nr=!1,_r=null,Ir=null,ne=ue,Le=""},u.isValidAttribute=function(Te,M,ie){Mr||Fi({});const we=Bt(Te),Ee=Bt(M);return typeof ie=="string"&&(lo(M,ie)||!et&&cr(jf,ie))?!1:Nr(we,Ee,ie)},u.addHook=function(Te,M){typeof M=="function"&&Rr(_e,Te)&&Qu(_e[Te],M)},u.removeHook=function(Te,M){if(Rr(_e,Te)){if(M!==void 0){const ie=Hx(_e[Te],M);return ie===-1?void 0:Ux(_e[Te],ie,1)[0]}return vf(_e[Te])}},u.removeHooks=function(Te){Rr(_e,Te)&&(_e[Te]=[])},u.removeAllHooks=function(){_e=Nf()},u}var yb=Um();function vb(l,u=null){const d=String(l||""),f=d.split(`
`),g=f.findIndex(w=>/^##\s+(?:Practice|Solve)(?:\s*[:—-].*)?\s*$/i.test(w)),v=g===-1?-1:f.findIndex((w,C)=>C>g&&/^##\s+(?:Reflect(?:ion)?|Learn|Stop and think|Optional reading)(?:\b|\s*[:—-])/i.test(w)),k=g>=0?f.slice(g,v<0?f.length:v).join(`
`):`# Solve

${(u==null?void 0:u.challenge)||"Try the lesson task before looking at the guide."}`,_=g>=0?[...f.slice(0,g),...v<0?[]:f.slice(v)].join(`
`).trim():d;return{solve:k,learn:_}}function xb(l){const u=String(l||"").split(`
`),d=[];let f=null;u.forEach((k,_)=>{const w=k.trim(),C=/^(`{3,}|~{3,})/.exec(w);if(C){const Y=C[1];f?f.char===Y[0]&&Y.length>=f.length&&(f=null):f={char:Y[0],length:Y.length};return}if(f)return;const N=/^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(k);if(!N)return;const O=N[2],L=/\bStep\s+\d+(?=\s*(?:[:.·–—-]|$))/i.test(O);d.push({index:_,level:N[1].length,numbered:L})});const g=d.filter(k=>k.numbered),v=(g.length?g:d.filter(k=>k.level===2)).map(k=>k.index);return v.length?{intro:u.slice(0,v[0]).join(`
`).trim(),steps:v.map((k,_)=>u.slice(k,v[_+1]??u.length).join(`
`).trim())}:{intro:u.join(`
`),steps:[]}}const bb=Object.assign({"../content/capstone-discovery.md":Cv,"../content/capstone-feedback.md":Tv,"../content/capstone-interviews.md":jv,"../content/capstone-prototype.md":Nv,"../content/csharp-conditionals.md":Ev,"../content/csharp-variables.md":Pv,"../content/python-decisions.md":Lv,"../content/python-formatting.md":Av,"../content/python-lists.md":Rv,"../content/python-loops.md":Iv,"../content/python-strings.md":Ov,"../content/python-variables.md":Dv,"../content/react-components.md":Mv,"../content/react-state.md":zv,"../content/tsi-equations.md":Fv,"../content/tsi-percents.md":Wv,"../content/tsi-ratios.md":Hv,"../content/tsi-slope.md":Bv,"../content/uil-arrays.md":Uv,"../content/uil-loops.md":qv,"../content/uil-methods.md":$v,"../content/uil-strings.md":Kv,"../content/unity-colliders.md":Gv,"../content/unity-player-controller.md":Yv,"../content/unity-score.md":Vv,"../content/web-events.md":Jv,"../content/web-layout.md":Xv}),wb="# Add a Markdown lesson\n\nSave a new `.md` file inside `src/content/`.\n",kb=l=>bb[`../content/${l}.md`]||wb,tl=l=>yb.sanitize(Jt.parse(l,{breaks:!1,gfm:!0}));function Sb(l,u=""){if(!(l!=null&&l.isPublished))return"";let d="";const f=Array.isArray(l.cases)?l.cases:[];f.length&&!/##\s+(?:Published )?Examples\b/i.test(u)&&(d+=`

### Published examples
`,f.forEach((v,k)=>{d+=`
**Example `+(k+1)+`**

`,v.call&&(d+="Input: `"+v.call+`\`

`),d+=l.mode==="function"?`Expected return:
`:`Expected output:
`,d+="\n```text\n"+String(v.expected??"")+"\n```\n"}));const g=Array.isArray(l.hints)?l.hints:[];return g.length&&!/<details(?:\s|>)/i.test(u)&&(d+=`

### Need a hint?
`,g.forEach((v,k)=>{d+=`
<details>
<summary>Hint `+(k+1)+`</summary>

`+String(v).replaceAll("<","&lt;")+`

</details>
`})),d}function Ef(l,u){if(!u)return l;const d="https://github.com/mswhitby/computer-science-1/blob/main/units/",f=u.startsWith("/playground/data/")?new URL(u,"https://www.mswhitby.com"):new URL(u,d);return String(l).replace(/\]\(([^)]+)\)/g,(g,v)=>{if(/^(?:https?:|mailto:|#|data:)/i.test(v))return g;const[k,..._]=v.split(" ");try{const w=new URL(k,f);return w.origin!==f.origin?g:"]("+w.href+(_.length?" "+_.join(" "):"")+")"}catch{return g}})}const Eh={markdown:l=>`designlab:md:${l}`,code:l=>`designlab:code:${l}`};function Dd(l){try{return localStorage.getItem(l)}catch{return null}}function ha(l,u){try{localStorage.setItem(l,u)}catch{}}function _b(l){try{localStorage.removeItem(l)}catch{}}function Pf({lessonId:l,task:u,isTsi:d=!1,tsiAnswer:f=null}){var W;const g=(u==null?void 0:u.markdownSource)||kb(l),v=Eh.markdown(l),[k,_]=ye.useState(g),[w,C]=ye.useState(d?"learn":"solve"),[N,O]=ye.useState(0),[L,Y]=ye.useState(!1);ye.useEffect(()=>{_(Dd(v)??g),C(d?"learn":"solve"),O(0),Y(!1)},[v,g,d]);const U=ye.useMemo(()=>{const G=vb(k,u),X=G.solve+Sb(u,G.solve);return{solve:Ef(X,(u==null?void 0:u.markdownUrl)||(u==null?void 0:u.markdown)),learn:Ef(G.learn,(u==null?void 0:u.markdownUrl)||(u==null?void 0:u.markdown))}},[k,u]),B=ye.useMemo(()=>xb(U.learn),[U.learn]),J=!d&&w==="learn"&&B.steps.length>0,I=Math.min(N,Math.max(0,B.steps.length-1)),z=d?U.learn:w==="solve"?U.solve:J?B.intro+`

`+B.steps[I]:U.learn,q=ye.useMemo(()=>tl(z),[z]);return c.jsxs("section",{className:"instructions-pane",children:[c.jsxs("div",{className:"pane-header",children:[d?c.jsx("strong",{className:"tsi-learn-title",children:"Learn"}):c.jsxs("div",{className:"tabs compact",role:"tablist","aria-label":"Lesson views",children:[c.jsx("button",{role:"tab","aria-selected":w==="solve",className:w==="solve"?"active":"",onClick:()=>{C("solve"),O(0)},children:"Solve"}),c.jsx("button",{role:"tab","aria-selected":w==="learn",className:w==="learn"?"active":"",onClick:()=>{C("learn"),O(0)},children:"Learn"})]}),c.jsx("button",{type:"button",className:pa("icon-button",L&&"active"),title:"Edit lesson text","aria-label":"Edit lesson text",onClick:()=>Y(!L),children:c.jsx(Qy,{size:16})})]}),L?c.jsxs("div",{className:"markdown-source",children:[c.jsx("p",{className:"hint",children:"Try editing these instructions. Changes here are just for your preview."}),c.jsx("textarea",{"aria-label":"Markdown source",value:k,onChange:G=>{_(G.target.value),O(0),ha(v,G.target.value)}}),c.jsx("button",{type:"button",className:"btn",onClick:()=>{_b(v),_(g),O(0)},children:"Reset lesson text"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"markdown-preview",role:"tabpanel",children:[c.jsx("div",{dangerouslySetInnerHTML:{__html:q}}),d&&f&&c.jsxs("section",{className:"tsi-worked-solution",role:"status",children:[c.jsx("h3",{children:f.correct?"Why that works":"Review the solution"}),c.jsx("p",{children:(W=xh[l])==null?void 0:W.explanation})]})]}),J&&c.jsxs("nav",{className:"lesson-step-controls","aria-label":"Learning steps",children:[I>0&&c.jsxs("button",{type:"button",className:"step-link previous",onClick:()=>O(G=>Math.max(0,G-1)),children:[c.jsx(Wd,{size:16,"aria-hidden":"true"})," Previous"]}),c.jsxs("span",{children:["Step ",I+1," of ",B.steps.length]}),I<B.steps.length-1&&c.jsxs("button",{type:"button",className:"step-link next",onClick:()=>O(G=>Math.min(B.steps.length-1,G+1)),children:["Next ",c.jsx(ni,{size:16,"aria-hidden":"true"})]})]})]})]})}var Cd={exports:{}},Cb=Cd.exports,Lf;function ss(){return Lf||(Lf=1,(function(l,u){(function(d,f){l.exports=f()})(Cb,(function(){var d=navigator.userAgent,f=navigator.platform,g=/gecko\/\d/i.test(d),v=/MSIE \d/.test(d),k=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(d),_=/Edge\/(\d+)/.exec(d),w=v||k||_,C=w&&(v?document.documentMode||6:+(_||k)[1]),N=!_&&/WebKit\//.test(d),O=N&&/Qt\/\d+\.\d+/.test(d),L=!_&&/Chrome\/(\d+)/.exec(d),Y=L&&+L[1],U=/Opera\//.test(d),B=/Apple Computer/.test(navigator.vendor),J=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(d),I=/PhantomJS/.test(d),z=B&&(/Mobile\/\w+/.test(d)||navigator.maxTouchPoints>2),q=/Android/.test(d),W=z||q||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(d),G=z||/Mac/.test(f),X=/\bCrOS\b/.test(d),se=/win/i.test(f),ve=U&&d.match(/Version\/(\d*\.\d*)/);ve&&(ve=Number(ve[1])),ve&&ve>=15&&(U=!1,N=!0);var De=G&&(O||U&&(ve==null||ve<12.11)),be=g||w&&C>=9;function ne(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var Le=function(e,n){var s=e.className,i=ne(n).exec(s);if(i){var a=s.slice(i.index+i[0].length);e.className=s.slice(0,i.index)+(a?i[1]+a:"")}};function ue(e){for(var n=e.childNodes.length;n>0;--n)e.removeChild(e.firstChild);return e}function xe(e,n){return ue(e).appendChild(n)}function A(e,n,s,i){var a=document.createElement(e);if(s&&(a.className=s),i&&(a.style.cssText=i),typeof n=="string")a.appendChild(document.createTextNode(n));else if(n)for(var h=0;h<n.length;++h)a.appendChild(n[h]);return a}function ee(e,n,s,i){var a=A(e,n,s,i);return a.setAttribute("role","presentation"),a}var Q;document.createRange?Q=function(e,n,s,i){var a=document.createRange();return a.setEnd(i||e,s),a.setStart(e,n),a}:Q=function(e,n,s){var i=document.body.createTextRange();try{i.moveToElementText(e.parentNode)}catch{return i}return i.collapse(!0),i.moveEnd("character",s),i.moveStart("character",n),i};function T(e,n){if(n.nodeType==3&&(n=n.parentNode),e.contains)return e.contains(n);do if(n.nodeType==11&&(n=n.host),n==e)return!0;while(n=n.parentNode)}function P(e){var n=e.ownerDocument||e,s;try{s=e.activeElement}catch{s=n.body||null}for(;s&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function H(e,n){var s=e.className;ne(n).test(s)||(e.className+=(s?" ":"")+n)}function D(e,n){for(var s=e.split(" "),i=0;i<s.length;i++)s[i]&&!ne(s[i]).test(n)&&(n+=" "+s[i]);return n}var Z=function(e){e.select()};z?Z=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:w&&(Z=function(e){try{e.select()}catch{}});function Ce(e){return e.display.wrapper.ownerDocument}function Ie(e){return qe(e.display.wrapper)}function qe(e){return e.getRootNode?e.getRootNode():e.ownerDocument}function Oe(e){return Ce(e).defaultView}function _e(e){var n=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,n)}}function Ue(e,n,s){n||(n={});for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s!==!1||!Object.prototype.hasOwnProperty.call(n,i))&&(n[i]=e[i]);return n}function $e(e,n,s,i,a){n==null&&(n=e.search(/[^\s\u00a0]/),n==-1&&(n=e.length));for(var h=i||0,y=a||0;;){var b=e.indexOf("	",h);if(b<0||b>=n)return y+(n-h);y+=b-h,y+=s-y%s,h=b+1}}var tt=function(){this.id=null,this.f=null,this.time=0,this.handler=_e(this.onTimeout,this)};tt.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},tt.prototype.set=function(e,n){this.f=n;var s=+new Date+e;(!this.id||s<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=s)};function Ke(e,n){for(var s=0;s<e.length;++s)if(e[s]==n)return s;return-1}var zt=50,Yt={toString:function(){return"CodeMirror.Pass"}},Ht={scroll:!1},Tt={origin:"*mouse"},Ze={origin:"+move"};function We(e,n,s){for(var i=0,a=0;;){var h=e.indexOf("	",i);h==-1&&(h=e.length);var y=h-i;if(h==e.length||a+y>=n)return i+Math.min(y,n-a);if(a+=h-i,a+=s-a%s,i=h+1,a>=n)return i}}var st=[""];function ct(e){for(;st.length<=e;)st.push(Je(st)+" ");return st[e]}function Je(e){return e[e.length-1]}function ft(e,n){for(var s=[],i=0;i<e.length;i++)s[i]=n(e[i],i);return s}function le(e,n,s){for(var i=0,a=s(n);i<e.length&&s(e[i])<=a;)i++;e.splice(i,0,n)}function Se(){}function he(e,n){var s;return Object.create?s=Object.create(e):(Se.prototype=e,s=new Se),n&&Ue(n,s),s}var wt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function Ye(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||wt.test(e))}function ot(e,n){return n?n.source.indexOf("\\w")>-1&&Ye(e)?!0:n.test(e):Ye(e)}function et(e){for(var n in e)if(e.hasOwnProperty(n)&&e[n])return!1;return!0}var yt=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function ht(e){return e.charCodeAt(0)>=768&&yt.test(e)}function Xt(e,n,s){for(;(s<0?n>0:n<e.length)&&ht(e.charAt(n));)n+=s;return n}function nr(e,n,s){for(var i=n>s?-1:1;;){if(n==s)return n;var a=(n+s)/2,h=i<0?Math.ceil(a):Math.floor(a);if(h==n)return e(h)?n:s;e(h)?s=h:n=h+i}}function _r(e,n,s,i){if(!e)return i(n,s,"ltr",0);for(var a=!1,h=0;h<e.length;++h){var y=e[h];(y.from<s&&y.to>n||n==s&&y.to==n)&&(i(Math.max(y.from,n),Math.min(y.to,s),y.level==1?"rtl":"ltr",h),a=!0)}a||i(n,s,"ltr")}var Ir=null;function Ur(e,n,s){var i;Ir=null;for(var a=0;a<e.length;++a){var h=e[a];if(h.from<n&&h.to>n)return a;h.to==n&&(h.from!=h.to&&s=="before"?i=a:Ir=a),h.from==n&&(h.from!=h.to&&s!="before"?i=a:Ir=a)}return i??Ir}var qr=(function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function s(j){return j<=247?e.charAt(j):1424<=j&&j<=1524?"R":1536<=j&&j<=1785?n.charAt(j-1536):1774<=j&&j<=2220?"r":8192<=j&&j<=8203?"w":j==8204?"b":"L"}var i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,a=/[stwN]/,h=/[LRr]/,y=/[Lb1n]/,b=/[1n]/;function S(j,F,K){this.level=j,this.from=F,this.to=K}return function(j,F){var K=F=="ltr"?"L":"R";if(j.length==0||F=="ltr"&&!i.test(j))return!1;for(var oe=j.length,re=[],ge=0;ge<oe;++ge)re.push(s(j.charCodeAt(ge)));for(var ke=0,Ae=K;ke<oe;++ke){var Ne=re[ke];Ne=="m"?re[ke]=Ae:Ae=Ne}for(var Fe=0,ze=K;Fe<oe;++Fe){var Ge=re[Fe];Ge=="1"&&ze=="r"?re[Fe]="n":h.test(Ge)&&(ze=Ge,Ge=="r"&&(re[Fe]="R"))}for(var lt=1,Ve=re[0];lt<oe-1;++lt){var kt=re[lt];kt=="+"&&Ve=="1"&&re[lt+1]=="1"?re[lt]="1":kt==","&&Ve==re[lt+1]&&(Ve=="1"||Ve=="n")&&(re[lt]=Ve),Ve=kt}for(var Nt=0;Nt<oe;++Nt){var Bn=re[Nt];if(Bn==",")re[Nt]="N";else if(Bn=="%"){var sn=void 0;for(sn=Nt+1;sn<oe&&re[sn]=="%";++sn);for(var xr=Nt&&re[Nt-1]=="!"||sn<oe&&re[sn]=="1"?"1":"N",lr=Nt;lr<sn;++lr)re[lr]=xr;Nt=sn-1}}for(var yn=0,br=K;yn<oe;++yn){var Tn=re[yn];br=="L"&&Tn=="1"?re[yn]="L":h.test(Tn)&&(br=Tn)}for(var vn=0;vn<oe;++vn)if(a.test(re[vn])){var Dt=void 0;for(Dt=vn+1;Dt<oe&&a.test(re[Dt]);++Dt);for(var pt=(vn?re[vn-1]:K)=="L",Mt=(Dt<oe?re[Dt]:K)=="L",an=pt==Mt?pt?"L":"R":K,un=vn;un<Dt;++un)re[un]=an;vn=Dt-1}for(var Ut=[],wr,Et=0;Et<oe;)if(y.test(re[Et])){var la=Et;for(++Et;Et<oe&&y.test(re[Et]);++Et);Ut.push(new S(0,la,Et))}else{var kr=Et,Ii=Ut.length,ts=F=="rtl"?1:0;for(++Et;Et<oe&&re[Et]!="L";++Et);for(var An=kr;An<Et;)if(b.test(re[An])){kr<An&&(Ut.splice(Ii,0,new S(1,kr,An)),Ii+=ts);var Un=An;for(++An;An<Et&&b.test(re[An]);++An);Ut.splice(Ii,0,new S(2,Un,An)),Ii+=ts,kr=An}else++An;kr<Et&&Ut.splice(Ii,0,new S(1,kr,Et))}return F=="ltr"&&(Ut[0].level==1&&(wr=j.match(/^\s+/))&&(Ut[0].from=wr[0].length,Ut.unshift(new S(0,0,wr[0].length))),Je(Ut).level==1&&(wr=j.match(/\s+$/))&&(Je(Ut).to-=wr[0].length,Ut.push(new S(0,oe-wr[0].length,oe)))),F=="rtl"?Ut.reverse():Ut}})();function xt(e,n){var s=e.order;return s==null&&(s=e.order=qr(e.text,n)),s}var mi=[],rt=function(e,n,s){if(e.addEventListener)e.addEventListener(n,s,!1);else if(e.attachEvent)e.attachEvent("on"+n,s);else{var i=e._handlers||(e._handlers={});i[n]=(i[n]||mi).concat(s)}};function Cr(e,n){return e._handlers&&e._handlers[n]||mi}function tn(e,n,s){if(e.removeEventListener)e.removeEventListener(n,s,!1);else if(e.detachEvent)e.detachEvent("on"+n,s);else{var i=e._handlers,a=i&&i[n];if(a){var h=Ke(a,s);h>-1&&(i[n]=a.slice(0,h).concat(a.slice(h+1)))}}}function Rt(e,n){var s=Cr(e,n);if(s.length)for(var i=Array.prototype.slice.call(arguments,2),a=0;a<s.length;++a)s[a].apply(null,i)}function qt(e,n,s){return typeof n=="string"&&(n={type:n,preventDefault:function(){this.defaultPrevented=!0}}),Rt(e,s||n.type,e,n),In(n)||n.codemirrorIgnore}function xn(e){var n=e._handlers&&e._handlers.cursorActivity;if(n)for(var s=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),i=0;i<n.length;++i)Ke(s,n[i])==-1&&s.push(n[i])}function mn(e,n){return Cr(e,n).length>0}function Nn(e){e.prototype.on=function(n,s){rt(this,n,s)},e.prototype.off=function(n,s){tn(this,n,s)}}function bn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ri(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function In(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==!1}function pr(e){bn(e),ri(e)}function gi(e){return e.target||e.srcElement}function En(e){var n=e.which;return n==null&&(e.button&1?n=1:e.button&2?n=3:e.button&4&&(n=2)),G&&e.ctrlKey&&n==1&&(n=3),n}var as=(function(){if(w&&C<9)return!1;var e=A("div");return"draggable"in e||"dragDrop"in e})(),wn;function Tr(e){if(wn==null){var n=A("span","​");xe(e,A("span",[n,document.createTextNode("x")])),e.firstChild.offsetHeight!=0&&(wn=n.offsetWidth<=1&&n.offsetHeight>2&&!(w&&C<8))}var s=wn?A("span","​"):A("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return s.setAttribute("cm-text",""),s}var $r;function Or(e){if($r!=null)return $r;var n=xe(e,document.createTextNode("AخA")),s=Q(n,0,1).getBoundingClientRect(),i=Q(n,1,2).getBoundingClientRect();return ue(e),!s||s.left==s.right?!1:$r=i.right-s.right<3}var jr=`

b`.split(/\n/).length!=3?function(e){for(var n=0,s=[],i=e.length;n<=i;){var a=e.indexOf(`
`,n);a==-1&&(a=e.length);var h=e.slice(n,e.charAt(a-1)=="\r"?a-1:a),y=h.indexOf("\r");y!=-1?(s.push(h.slice(0,y)),n+=y+1):(s.push(h),n=a+1)}return s}:function(e){return e.split(/\r\n?|\n/)},yi=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch{return!1}}:function(e){var n;try{n=e.ownerDocument.selection.createRange()}catch{}return!n||n.parentElement()!=e?!1:n.compareEndPoints("StartToEnd",n)!=0},os=(function(){var e=A("div");return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),typeof e.oncopy=="function")})(),On=null;function ls(e){if(On!=null)return On;var n=xe(e,A("span","x")),s=n.getBoundingClientRect(),i=Q(n,0,1).getBoundingClientRect();return On=Math.abs(s.left-i.left)>1}var Mi={},Dr={};function Gn(e,n){arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),Mi[e]=n}function vi(e,n){Dr[e]=n}function zi(e){if(typeof e=="string"&&Dr.hasOwnProperty(e))e=Dr[e];else if(e&&typeof e.name=="string"&&Dr.hasOwnProperty(e.name)){var n=Dr[e.name];typeof n=="string"&&(n={name:n}),e=he(n,e),e.name=n.name}else{if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return zi("application/xml");if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return zi("application/json")}return typeof e=="string"?{name:e}:e||{name:"null"}}function Bt(e,n){n=zi(n);var s=Mi[n.name];if(!s)return Bt(e,"text/plain");var i=s(e,n);if(Mr.hasOwnProperty(n.name)){var a=Mr[n.name];for(var h in a)a.hasOwnProperty(h)&&(i.hasOwnProperty(h)&&(i["_"+h]=i[h]),i[h]=a[h])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var y in n.modeProps)i[y]=n.modeProps[y];return i}var Mr={};function us(e,n){var s=Mr.hasOwnProperty(e)?Mr[e]:Mr[e]={};Ue(n,s)}function At(e,n){if(n===!0)return n;if(e.copyState)return e.copyState(n);var s={};for(var i in n){var a=n[i];a instanceof Array&&(a=a.concat([])),s[i]=a}return s}function Fi(e,n){for(var s;e.innerMode&&(s=e.innerMode(n),!(!s||s.mode==e));)n=s.state,e=s.mode;return s||{mode:e,state:n}}function ii(e,n,s){return e.startState?e.startState(n,s):!0}var Vt=function(e,n,s){this.pos=this.start=0,this.string=e,this.tabSize=n||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=s};Vt.prototype.eol=function(){return this.pos>=this.string.length},Vt.prototype.sol=function(){return this.pos==this.lineStart},Vt.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Vt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Vt.prototype.eat=function(e){var n=this.string.charAt(this.pos),s;if(typeof e=="string"?s=n==e:s=n&&(e.test?e.test(n):e(n)),s)return++this.pos,n},Vt.prototype.eatWhile=function(e){for(var n=this.pos;this.eat(e););return this.pos>n},Vt.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Vt.prototype.skipToEnd=function(){this.pos=this.string.length},Vt.prototype.skipTo=function(e){var n=this.string.indexOf(e,this.pos);if(n>-1)return this.pos=n,!0},Vt.prototype.backUp=function(e){this.pos-=e},Vt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=$e(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?$e(this.string,this.lineStart,this.tabSize):0)},Vt.prototype.indentation=function(){return $e(this.string,null,this.tabSize)-(this.lineStart?$e(this.string,this.lineStart,this.tabSize):0)},Vt.prototype.match=function(e,n,s){if(typeof e=="string"){var i=function(y){return s?y.toLowerCase():y},a=this.string.substr(this.pos,e.length);if(i(a)==i(e))return n!==!1&&(this.pos+=e.length),!0}else{var h=this.string.slice(this.pos).match(e);return h&&h.index>0?null:(h&&n!==!1&&(this.pos+=h[0].length),h)}},Vt.prototype.current=function(){return this.string.slice(this.start,this.pos)},Vt.prototype.hideFirstChars=function(e,n){this.lineStart+=e;try{return n()}finally{this.lineStart-=e}},Vt.prototype.lookAhead=function(e){var n=this.lineOracle;return n&&n.lookAhead(e)},Vt.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};function Xe(e,n){if(n-=e.first,n<0||n>=e.size)throw new Error("There is no line "+(n+e.first)+" in the document.");for(var s=e;!s.lines;)for(var i=0;;++i){var a=s.children[i],h=a.chunkSize();if(n<h){s=a;break}n-=h}return s.lines[n]}function si(e,n,s){var i=[],a=n.line;return e.iter(n.line,s.line+1,function(h){var y=h.text;a==s.line&&(y=y.slice(0,s.ch)),a==n.line&&(y=y.slice(n.ch)),i.push(y),++a}),i}function cs(e,n,s){var i=[];return e.iter(n,s,function(a){i.push(a.text)}),i}function Yn(e,n){var s=n-e.height;if(s)for(var i=e;i;i=i.parent)i.height+=s}function E(e){if(e.parent==null)return null;for(var n=e.parent,s=Ke(n.lines,e),i=n.parent;i;n=i,i=i.parent)for(var a=0;i.children[a]!=n;++a)s+=i.children[a].chunkSize();return s+n.first}function $(e,n){var s=e.first;e:do{for(var i=0;i<e.children.length;++i){var a=e.children[i],h=a.height;if(n<h){e=a;continue e}n-=h,s+=a.chunkSize()}return s}while(!e.lines);for(var y=0;y<e.lines.length;++y){var b=e.lines[y],S=b.height;if(n<S)break;n-=S}return s+y}function me(e,n){return n>=e.first&&n<e.first+e.size}function je(e,n){return String(e.lineNumberFormatter(n+e.firstLineNumber))}function pe(e,n,s){if(s===void 0&&(s=null),!(this instanceof pe))return new pe(e,n,s);this.line=e,this.ch=n,this.sticky=s}function Be(e,n){return e.line-n.line||e.ch-n.ch}function Ct(e,n){return e.sticky==n.sticky&&Be(e,n)==0}function Qt(e){return pe(e.line,e.ch)}function kn(e,n){return Be(e,n)<0?n:e}function Kr(e,n){return Be(e,n)<0?e:n}function sl(e,n){return Math.max(e.first,Math.min(n,e.first+e.size-1))}function vt(e,n){if(n.line<e.first)return pe(e.first,0);var s=e.first+e.size-1;return n.line>s?pe(s,Xe(e,s).text.length):io(n,Xe(e,n.line).text.length)}function io(e,n){var s=e.ch;return s==null||s>n?pe(e.line,n):s<0?pe(e.line,0):e}function so(e,n){for(var s=[],i=0;i<n.length;i++)s[i]=vt(e,n[i]);return s}var Wi=function(e,n){this.state=e,this.lookAhead=n},rr=function(e,n,s,i){this.state=n,this.doc=e,this.line=s,this.maxLookAhead=i||0,this.baseTokens=null,this.baseTokenPos=1};rr.prototype.lookAhead=function(e){var n=this.doc.getLine(this.line+e);return n!=null&&e>this.maxLookAhead&&(this.maxLookAhead=e),n},rr.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var n=this.baseTokens[this.baseTokenPos+1];return{type:n&&n.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},rr.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},rr.fromSaved=function(e,n,s){return n instanceof Wi?new rr(e,At(e.mode,n.state),s,n.lookAhead):new rr(e,At(e.mode,n),s)},rr.prototype.save=function(e){var n=e!==!1?At(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new Wi(n,this.maxLookAhead):n};function ao(e,n,s,i){var a=[e.state.modeGen],h={};ir(e,n.text,e.doc.mode,s,function(j,F){return a.push(j,F)},h,i);for(var y=s.state,b=function(j){s.baseTokens=a;var F=e.state.overlays[j],K=1,oe=0;s.state=!0,ir(e,n.text,F.mode,s,function(re,ge){for(var ke=K;oe<re;){var Ae=a[K];Ae>re&&a.splice(K,1,re,a[K+1],Ae),K+=2,oe=Math.min(re,Ae)}if(ge)if(F.opaque)a.splice(ke,K-ke,re,"overlay "+ge),K=ke+2;else for(;ke<K;ke+=2){var Ne=a[ke+1];a[ke+1]=(Ne?Ne+" ":"")+"overlay "+ge}},h),s.state=y,s.baseTokens=null,s.baseTokenPos=1},S=0;S<e.state.overlays.length;++S)b(S);return{styles:a,classes:h.bgClass||h.textClass?h:null}}function Hi(e,n,s){if(!n.styles||n.styles[0]!=e.state.modeGen){var i=jt(e,E(n)),a=n.text.length>e.options.maxHighlightLength&&At(e.doc.mode,i.state),h=ao(e,n,i);a&&(i.state=a),n.stateAfter=i.save(!a),n.styles=h.styles,h.classes?n.styleClasses=h.classes:n.styleClasses&&(n.styleClasses=null),s===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return n.styles}function jt(e,n,s){var i=e.doc,a=e.display;if(!i.mode.startState)return new rr(i,!0,n);var h=va(e,n,s),y=h>i.first&&Xe(i,h-1).stateAfter,b=y?rr.fromSaved(i,y,h):new rr(i,ii(i.mode),h);return i.iter(h,n,function(S){ds(e,S.text,b);var j=b.line;S.stateAfter=j==n-1||j%5==0||j>=a.viewFrom&&j<a.viewTo?b.save():null,b.nextLine()}),s&&(i.modeFrontier=b.line),b}function ds(e,n,s,i){var a=e.doc.mode,h=new Vt(n,e.options.tabSize,s);for(h.start=h.pos=i||0,n==""&&Is(a,s.state);!h.eol();)xi(a,h,s.state),h.start=h.pos}function Is(e,n){if(e.blankLine)return e.blankLine(n);if(e.innerMode){var s=Fi(e,n);if(s.mode.blankLine)return s.mode.blankLine(s.state)}}function xi(e,n,s,i){for(var a=0;a<10;a++){i&&(i[0]=Fi(e,s).mode);var h=e.token(n,s);if(n.pos>n.start)return h}throw new Error("Mode "+e.name+" failed to advance stream.")}var ya=function(e,n,s){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=n||null,this.state=s};function bi(e,n,s,i){var a=e.doc,h=a.mode,y;n=vt(a,n);var b=Xe(a,n.line),S=jt(e,n.line,s),j=new Vt(b.text,e.options.tabSize,S),F;for(i&&(F=[]);(i||j.pos<n.ch)&&!j.eol();)j.start=j.pos,y=xi(h,j,S.state),i&&F.push(new ya(j,y,At(a.mode,S.state)));return i?F:new ya(j,y,S.state)}function Bi(e,n){if(e)for(;;){var s=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!s)break;e=e.slice(0,s.index)+e.slice(s.index+s[0].length);var i=s[1]?"bgClass":"textClass";n[i]==null?n[i]=s[2]:new RegExp("(?:^|\\s)"+s[2]+"(?:$|\\s)").test(n[i])||(n[i]+=" "+s[2])}return e}function ir(e,n,s,i,a,h,y){var b=s.flattenSpans;b==null&&(b=e.options.flattenSpans);var S=0,j=null,F=new Vt(n,e.options.tabSize,i),K,oe=e.options.addModeClass&&[null];for(n==""&&Bi(Is(s,i.state),h);!F.eol();){if(F.pos>e.options.maxHighlightLength?(b=!1,y&&ds(e,n,i,F.pos),F.pos=n.length,K=null):K=Bi(xi(s,F,i.state,oe),h),oe){var re=oe[0].name;re&&(K="m-"+(K?re+" "+K:re))}if(!b||j!=K){for(;S<F.start;)S=Math.min(F.start,S+5e3),a(S,j);j=K}F.start=F.pos}for(;S<F.pos;){var ge=Math.min(F.pos,S+5e3);a(ge,j),S=ge}}function va(e,n,s){for(var i,a,h=e.doc,y=s?-1:n-(e.doc.mode.innerMode?1e3:100),b=n;b>y;--b){if(b<=h.first)return h.first;var S=Xe(h,b-1),j=S.stateAfter;if(j&&(!s||b+(j instanceof Wi?j.lookAhead:0)<=h.modeFrontier))return b;var F=$e(S.text,null,e.options.tabSize);(a==null||i>F)&&(a=b-1,i=F)}return a}function zr(e,n){if(e.modeFrontier=Math.min(e.modeFrontier,n),!(e.highlightFrontier<n-10)){for(var s=e.first,i=n-1;i>s;i--){var a=Xe(e,i).stateAfter;if(a&&(!(a instanceof Wi)||i+a.lookAhead<n)){s=i+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,s)}}var ai=!1,Dn=!1;function Gr(){ai=!0}function Os(){Dn=!0}function Nr(e,n,s){this.marker=e,this.from=n,this.to=s}function Ds(e,n){if(e)for(var s=0;s<e.length;++s){var i=e[s];if(i.marker==n)return i}}function oo(e,n){for(var s,i=0;i<e.length;++i)e[i]!=n&&(s||(s=[])).push(e[i]);return s}function Ms(e,n,s){var i=s&&window.WeakSet&&(s.markedSpans||(s.markedSpans=new WeakSet));i&&e.markedSpans&&i.has(e.markedSpans)?e.markedSpans.push(n):(e.markedSpans=e.markedSpans?e.markedSpans.concat([n]):[n],i&&i.add(e.markedSpans)),n.marker.attachLine(e)}function Jl(e,n,s){var i;if(e)for(var a=0;a<e.length;++a){var h=e[a],y=h.marker,b=h.from==null||(y.inclusiveLeft?h.from<=n:h.from<n);if(b||h.from==n&&y.type=="bookmark"&&(!s||!h.marker.insertLeft)){var S=h.to==null||(y.inclusiveRight?h.to>=n:h.to>n);(i||(i=[])).push(new Nr(y,h.from,S?null:h.to))}}return i}function lo(e,n,s){var i;if(e)for(var a=0;a<e.length;++a){var h=e[a],y=h.marker,b=h.to==null||(y.inclusiveRight?h.to>=n:h.to>n);if(b||h.from==n&&y.type=="bookmark"&&(!s||h.marker.insertLeft)){var S=h.from==null||(y.inclusiveLeft?h.from<=n:h.from<n);(i||(i=[])).push(new Nr(y,S?null:h.from-n,h.to==null?null:h.to-n))}}return i}function ps(e,n){if(n.full)return null;var s=me(e,n.from.line)&&Xe(e,n.from.line).markedSpans,i=me(e,n.to.line)&&Xe(e,n.to.line).markedSpans;if(!s&&!i)return null;var a=n.from.ch,h=n.to.ch,y=Be(n.from,n.to)==0,b=Jl(s,a,y),S=lo(i,h,y),j=n.text.length==1,F=Je(n.text).length+(j?a:0);if(b)for(var K=0;K<b.length;++K){var oe=b[K];if(oe.to==null){var re=Ds(S,oe.marker);re?j&&(oe.to=re.to==null?null:re.to+F):oe.to=a}}if(S)for(var ge=0;ge<S.length;++ge){var ke=S[ge];if(ke.to!=null&&(ke.to+=F),ke.from==null){var Ae=Ds(b,ke.marker);Ae||(ke.from=F,j&&(b||(b=[])).push(ke))}else ke.from+=F,j&&(b||(b=[])).push(ke)}b&&(b=zs(b)),S&&S!=b&&(S=zs(S));var Ne=[b];if(!j){var Fe=n.text.length-2,ze;if(Fe>0&&b)for(var Ge=0;Ge<b.length;++Ge)b[Ge].to==null&&(ze||(ze=[])).push(new Nr(b[Ge].marker,null,null));for(var lt=0;lt<Fe;++lt)Ne.push(ze);Ne.push(S)}return Ne}function zs(e){for(var n=0;n<e.length;++n){var s=e[n];s.from!=null&&s.from==s.to&&s.marker.clearWhenEmpty!==!1&&e.splice(n--,1)}return e.length?e:null}function uo(e,n,s){var i=null;if(e.iter(n.line,s.line+1,function(re){if(re.markedSpans)for(var ge=0;ge<re.markedSpans.length;++ge){var ke=re.markedSpans[ge].marker;ke.readOnly&&(!i||Ke(i,ke)==-1)&&(i||(i=[])).push(ke)}}),!i)return null;for(var a=[{from:n,to:s}],h=0;h<i.length;++h)for(var y=i[h],b=y.find(0),S=0;S<a.length;++S){var j=a[S];if(!(Be(j.to,b.from)<0||Be(j.from,b.to)>0)){var F=[S,1],K=Be(j.from,b.from),oe=Be(j.to,b.to);(K<0||!y.inclusiveLeft&&!K)&&F.push({from:j.from,to:b.from}),(oe>0||!y.inclusiveRight&&!oe)&&F.push({from:b.to,to:j.to}),a.splice.apply(a,F),S+=F.length-3}}return a}function wi(e){var n=e.markedSpans;if(n){for(var s=0;s<n.length;++s)n[s].marker.detachLine(e);e.markedSpans=null}}function Te(e,n){if(n){for(var s=0;s<n.length;++s)n[s].marker.attachLine(e);e.markedSpans=n}}function M(e){return e.inclusiveLeft?-1:0}function ie(e){return e.inclusiveRight?1:0}function we(e,n){var s=e.lines.length-n.lines.length;if(s!=0)return s;var i=e.find(),a=n.find(),h=Be(i.from,a.from)||M(e)-M(n);if(h)return-h;var y=Be(i.to,a.to)||ie(e)-ie(n);return y||n.id-e.id}function Ee(e,n){var s=Dn&&e.markedSpans,i;if(s)for(var a=void 0,h=0;h<s.length;++h)a=s[h],a.marker.collapsed&&(n?a.from:a.to)==null&&(!i||we(i,a.marker)<0)&&(i=a.marker);return i}function nt(e){return Ee(e,!0)}function dt(e){return Ee(e,!1)}function _t(e,n){var s=Dn&&e.markedSpans,i;if(s)for(var a=0;a<s.length;++a){var h=s[a];h.marker.collapsed&&(h.from==null||h.from<n)&&(h.to==null||h.to>n)&&(!i||we(i,h.marker)<0)&&(i=h.marker)}return i}function cn(e,n,s,i,a){var h=Xe(e,n),y=Dn&&h.markedSpans;if(y)for(var b=0;b<y.length;++b){var S=y[b];if(S.marker.collapsed){var j=S.marker.find(0),F=Be(j.from,s)||M(S.marker)-M(a),K=Be(j.to,i)||ie(S.marker)-ie(a);if(!(F>=0&&K<=0||F<=0&&K>=0)&&(F<=0&&(S.marker.inclusiveRight&&a.inclusiveLeft?Be(j.to,s)>=0:Be(j.to,s)>0)||F>=0&&(S.marker.inclusiveRight&&a.inclusiveLeft?Be(j.from,i)<=0:Be(j.from,i)<0)))return!0}}}function $t(e){for(var n;n=nt(e);)e=n.find(-1,!0).line;return e}function hr(e){for(var n;n=dt(e);)e=n.find(1,!0).line;return e}function Vn(e){for(var n,s;n=dt(e);)e=n.find(1,!0).line,(s||(s=[])).push(e);return s}function fr(e,n){var s=Xe(e,n),i=$t(s);return s==i?n:E(i)}function dn(e,n){if(n>e.lastLine())return n;var s=Xe(e,n),i;if(!Er(e,s))return n;for(;i=dt(s);)s=i.find(1,!0).line;return E(s)+1}function Er(e,n){var s=Dn&&n.markedSpans;if(s){for(var i=void 0,a=0;a<s.length;++a)if(i=s[a],!!i.marker.collapsed){if(i.from==null)return!0;if(!i.marker.widgetNode&&i.from==0&&i.marker.inclusiveLeft&&al(e,n,i))return!0}}}function al(e,n,s){if(s.to==null){var i=s.marker.find(1,!0);return al(e,i.line,Ds(i.line.markedSpans,s.marker))}if(s.marker.inclusiveRight&&s.to==n.text.length)return!0;for(var a=void 0,h=0;h<n.markedSpans.length;++h)if(a=n.markedSpans[h],a.marker.collapsed&&!a.marker.widgetNode&&a.from==s.to&&(a.to==null||a.to!=s.from)&&(a.marker.inclusiveLeft||s.marker.inclusiveRight)&&al(e,n,a))return!0}function Sn(e){e=$t(e);for(var n=0,s=e.parent,i=0;i<s.lines.length;++i){var a=s.lines[i];if(a==e)break;n+=a.height}for(var h=s.parent;h;s=h,h=s.parent)for(var y=0;y<h.children.length;++y){var b=h.children[y];if(b==s)break;n+=b.height}return n}function Ui(e){if(e.height==0)return 0;for(var n=e.text.length,s,i=e;s=nt(i);){var a=s.find(0,!0);i=a.from.line,n+=a.from.ch-a.to.ch}for(i=e;s=dt(i);){var h=s.find(0,!0);n-=i.text.length-h.from.ch,i=h.to.line,n+=i.text.length-h.to.ch}return n}function co(e){var n=e.display,s=e.doc;n.maxLine=Xe(s,s.first),n.maxLineLength=Ui(n.maxLine),n.maxLineChanged=!0,s.iter(function(i){var a=Ui(i);a>n.maxLineLength&&(n.maxLineLength=a,n.maxLine=i)})}var ki=function(e,n,s){this.text=e,Te(this,n),this.height=s?s(this):1};ki.prototype.lineNo=function(){return E(this)},Nn(ki);function Gd(e,n,s,i){e.text=n,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),e.order!=null&&(e.order=null),wi(e),Te(e,s);var a=i?i(e):1;a!=e.height&&Yn(e,a)}function Xl(e){e.parent=null,wi(e)}var Ql={},po={};function ho(e,n){if(!e||/^\s*$/.test(e))return null;var s=n.addModeClass?po:Ql;return s[e]||(s[e]=e.replace(/\S+/g,"cm-$&"))}function Zl(e,n){var s=ee("span",null,null,N?"padding-right: .1px":null),i={pre:ee("pre",[s],"CodeMirror-line"),content:s,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};n.measure={};for(var a=0;a<=(n.rest?n.rest.length:0);a++){var h=a?n.rest[a-1]:n.line,y=void 0;i.pos=0,i.addToken=Vd,Or(e.display.measure)&&(y=xt(h,e.doc.direction))&&(i.addToken=eu(i.addToken,y)),i.map=[];var b=n!=e.display.externalMeasured&&E(h);Xd(h,i,Hi(e,h,b)),h.styleClasses&&(h.styleClasses.bgClass&&(i.bgClass=D(h.styleClasses.bgClass,i.bgClass||"")),h.styleClasses.textClass&&(i.textClass=D(h.styleClasses.textClass,i.textClass||""))),i.map.length==0&&i.map.push(0,0,i.content.appendChild(Tr(e.display.measure))),a==0?(n.measure.map=i.map,n.measure.cache={}):((n.measure.maps||(n.measure.maps=[])).push(i.map),(n.measure.caches||(n.measure.caches=[])).push({}))}if(N){var S=i.content.lastChild;(/\bcm-tab\b/.test(S.className)||S.querySelector&&S.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return Rt(e,"renderLine",e,n.line,i.pre),i.pre.className&&(i.textClass=D(i.pre.className,i.textClass||"")),i}function Yd(e){var n=A("span","•","cm-invalidchar");return n.title="\\u"+e.charCodeAt(0).toString(16),n.setAttribute("aria-label",n.title),n}function Vd(e,n,s,i,a,h,y){if(n){var b=e.splitSpaces?Jd(n,e.trailingSpace):n,S=e.cm.state.specialChars,j=!1,F;if(!S.test(n))e.col+=n.length,F=document.createTextNode(b),e.map.push(e.pos,e.pos+n.length,F),w&&C<9&&(j=!0),e.pos+=n.length;else{F=document.createDocumentFragment();for(var K=0;;){S.lastIndex=K;var oe=S.exec(n),re=oe?oe.index-K:n.length-K;if(re){var ge=document.createTextNode(b.slice(K,K+re));w&&C<9?F.appendChild(A("span",[ge])):F.appendChild(ge),e.map.push(e.pos,e.pos+re,ge),e.col+=re,e.pos+=re}if(!oe)break;K+=re+1;var ke=void 0;if(oe[0]=="	"){var Ae=e.cm.options.tabSize,Ne=Ae-e.col%Ae;ke=F.appendChild(A("span",ct(Ne),"cm-tab")),ke.setAttribute("role","presentation"),ke.setAttribute("cm-text","	"),e.col+=Ne}else oe[0]=="\r"||oe[0]==`
`?(ke=F.appendChild(A("span",oe[0]=="\r"?"␍":"␤","cm-invalidchar")),ke.setAttribute("cm-text",oe[0]),e.col+=1):(ke=e.cm.options.specialCharPlaceholder(oe[0]),ke.setAttribute("cm-text",oe[0]),w&&C<9?F.appendChild(A("span",[ke])):F.appendChild(ke),e.col+=1);e.map.push(e.pos,e.pos+1,ke),e.pos++}}if(e.trailingSpace=b.charCodeAt(n.length-1)==32,s||i||a||j||h||y){var Fe=s||"";i&&(Fe+=i),a&&(Fe+=a);var ze=A("span",[F],Fe,h);if(y)for(var Ge in y)y.hasOwnProperty(Ge)&&Ge!="style"&&Ge!="class"&&ze.setAttribute(Ge,y[Ge]);return e.content.appendChild(ze)}e.content.appendChild(F)}}function Jd(e,n){if(e.length>1&&!/  /.test(e))return e;for(var s=n,i="",a=0;a<e.length;a++){var h=e.charAt(a);h==" "&&s&&(a==e.length-1||e.charCodeAt(a+1)==32)&&(h=" "),i+=h,s=h==" "}return i}function eu(e,n){return function(s,i,a,h,y,b,S){a=a?a+" cm-force-border":"cm-force-border";for(var j=s.pos,F=j+i.length;;){for(var K=void 0,oe=0;oe<n.length&&(K=n[oe],!(K.to>j&&K.from<=j));oe++);if(K.to>=F)return e(s,i,a,h,y,b,S);e(s,i.slice(0,K.to-j),a,h,null,b,S),h=null,i=i.slice(K.to-j),j=K.to}}}function gc(e,n,s,i){var a=!i&&s.widgetNode;a&&e.map.push(e.pos,e.pos+n,a),!i&&e.cm.display.input.needsContentAttribute&&(a||(a=e.content.appendChild(document.createElement("span"))),a.setAttribute("cm-marker",s.id)),a&&(e.cm.display.input.setUneditable(a),e.content.appendChild(a)),e.pos+=n,e.trailingSpace=!1}function Xd(e,n,s){var i=e.markedSpans,a=e.text,h=0;if(!i){for(var y=1;y<s.length;y+=2)n.addToken(n,a.slice(h,h=s[y]),ho(s[y+1],n.cm.options));return}for(var b=a.length,S=0,j=1,F="",K,oe,re=0,ge,ke,Ae,Ne,Fe;;){if(re==S){ge=ke=Ae=oe="",Fe=null,Ne=null,re=1/0;for(var ze=[],Ge=void 0,lt=0;lt<i.length;++lt){var Ve=i[lt],kt=Ve.marker;if(kt.type=="bookmark"&&Ve.from==S&&kt.widgetNode)ze.push(kt);else if(Ve.from<=S&&(Ve.to==null||Ve.to>S||kt.collapsed&&Ve.to==S&&Ve.from==S)){if(Ve.to!=null&&Ve.to!=S&&re>Ve.to&&(re=Ve.to,ke=""),kt.className&&(ge+=" "+kt.className),kt.css&&(oe=(oe?oe+";":"")+kt.css),kt.startStyle&&Ve.from==S&&(Ae+=" "+kt.startStyle),kt.endStyle&&Ve.to==re&&(Ge||(Ge=[])).push(kt.endStyle,Ve.to),kt.title&&((Fe||(Fe={})).title=kt.title),kt.attributes)for(var Nt in kt.attributes)(Fe||(Fe={}))[Nt]=kt.attributes[Nt];kt.collapsed&&(!Ne||we(Ne.marker,kt)<0)&&(Ne=Ve)}else Ve.from>S&&re>Ve.from&&(re=Ve.from)}if(Ge)for(var Bn=0;Bn<Ge.length;Bn+=2)Ge[Bn+1]==re&&(ke+=" "+Ge[Bn]);if(!Ne||Ne.from==S)for(var sn=0;sn<ze.length;++sn)gc(n,0,ze[sn]);if(Ne&&(Ne.from||0)==S){if(gc(n,(Ne.to==null?b+1:Ne.to)-S,Ne.marker,Ne.from==null),Ne.to==null)return;Ne.to==S&&(Ne=!1)}}if(S>=b)break;for(var xr=Math.min(b,re);;){if(F){var lr=S+F.length;if(!Ne){var yn=lr>xr?F.slice(0,xr-S):F;n.addToken(n,yn,K?K+ge:ge,Ae,S+yn.length==re?ke:"",oe,Fe)}if(lr>=xr){F=F.slice(xr-S),S=xr;break}S=lr,Ae=""}F=a.slice(h,h=s[j++]),K=ho(s[j++],n.cm.options)}}}function yc(e,n,s){this.line=n,this.rest=Vn(n),this.size=this.rest?E(Je(this.rest))-s+1:1,this.node=this.text=null,this.hidden=Er(e,n)}function ol(e,n,s){for(var i=[],a,h=n;h<s;h=a){var y=new yc(e.doc,Xe(e.doc,h),h);a=h+y.size,i.push(y)}return i}var xa=null;function vc(e){xa?xa.ops.push(e):e.ownsGroup=xa={ops:[e],delayedCallbacks:[]}}function Qd(e){var n=e.delayedCallbacks,s=0;do{for(;s<n.length;s++)n[s].call(null);for(var i=0;i<e.ops.length;i++){var a=e.ops[i];if(a.cursorActivityHandlers)for(;a.cursorActivityCalled<a.cursorActivityHandlers.length;)a.cursorActivityHandlers[a.cursorActivityCalled++].call(null,a.cm)}}while(s<n.length)}function Zd(e,n){var s=e.ownsGroup;if(s)try{Qd(s)}finally{xa=null,n(s)}}var fo=null;function Mn(e,n){var s=Cr(e,n);if(s.length){var i=Array.prototype.slice.call(arguments,2),a;xa?a=xa.delayedCallbacks:fo?a=fo:(a=fo=[],setTimeout(tu,0));for(var h=function(b){a.push(function(){return s[b].apply(null,i)})},y=0;y<s.length;++y)h(y)}}function tu(){var e=fo;fo=null;for(var n=0;n<e.length;++n)e[n]()}function xc(e,n,s,i){for(var a=0;a<n.changes.length;a++){var h=n.changes[a];h=="text"?tp(e,n):h=="gutter"?bc(e,n,s,i):h=="class"?ru(e,n):h=="widget"&&np(e,n,i)}n.changes=null}function mo(e){return e.node==e.text&&(e.node=A("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),w&&C<8&&(e.node.style.zIndex=2)),e.node}function ep(e,n){var s=n.bgClass?n.bgClass+" "+(n.line.bgClass||""):n.line.bgClass;if(s&&(s+=" CodeMirror-linebackground"),n.background)s?n.background.className=s:(n.background.parentNode.removeChild(n.background),n.background=null);else if(s){var i=mo(n);n.background=i.insertBefore(A("div",null,s),i.firstChild),e.display.input.setUneditable(n.background)}}function nu(e,n){var s=e.display.externalMeasured;return s&&s.line==n.line?(e.display.externalMeasured=null,n.measure=s.measure,s.built):Zl(e,n)}function tp(e,n){var s=n.text.className,i=nu(e,n);n.text==n.node&&(n.node=i.pre),n.text.parentNode.replaceChild(i.pre,n.text),n.text=i.pre,i.bgClass!=n.bgClass||i.textClass!=n.textClass?(n.bgClass=i.bgClass,n.textClass=i.textClass,ru(e,n)):s&&(n.text.className=s)}function ru(e,n){ep(e,n),n.line.wrapClass?mo(n).className=n.line.wrapClass:n.node!=n.text&&(n.node.className="");var s=n.textClass?n.textClass+" "+(n.line.textClass||""):n.line.textClass;n.text.className=s||""}function bc(e,n,s,i){if(n.gutter&&(n.node.removeChild(n.gutter),n.gutter=null),n.gutterBackground&&(n.node.removeChild(n.gutterBackground),n.gutterBackground=null),n.line.gutterClass){var a=mo(n);n.gutterBackground=A("div",null,"CodeMirror-gutter-background "+n.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(n.gutterBackground),a.insertBefore(n.gutterBackground,n.text)}var h=n.line.gutterMarkers;if(e.options.lineNumbers||h){var y=mo(n),b=n.gutter=A("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(b.setAttribute("aria-hidden","true"),e.display.input.setUneditable(b),y.insertBefore(b,n.text),n.line.gutterClass&&(b.className+=" "+n.line.gutterClass),e.options.lineNumbers&&(!h||!h["CodeMirror-linenumbers"])&&(n.lineNumber=b.appendChild(A("div",je(e.options,s),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),h)for(var S=0;S<e.display.gutterSpecs.length;++S){var j=e.display.gutterSpecs[S].className,F=h.hasOwnProperty(j)&&h[j];F&&b.appendChild(A("div",[F],"CodeMirror-gutter-elt","left: "+i.gutterLeft[j]+"px; width: "+i.gutterWidth[j]+"px"))}}}function np(e,n,s){n.alignable&&(n.alignable=null);for(var i=ne("CodeMirror-linewidget"),a=n.node.firstChild,h=void 0;a;a=h)h=a.nextSibling,i.test(a.className)&&n.node.removeChild(a);wc(e,n,s)}function rp(e,n,s,i){var a=nu(e,n);return n.text=n.node=a.pre,a.bgClass&&(n.bgClass=a.bgClass),a.textClass&&(n.textClass=a.textClass),ru(e,n),bc(e,n,s,i),wc(e,n,i),n.node}function wc(e,n,s){if(kc(e,n.line,n,s,!0),n.rest)for(var i=0;i<n.rest.length;i++)kc(e,n.rest[i],n,s,!1)}function kc(e,n,s,i,a){if(n.widgets)for(var h=mo(s),y=0,b=n.widgets;y<b.length;++y){var S=b[y],j=A("div",[S.node],"CodeMirror-linewidget"+(S.className?" "+S.className:""));S.handleMouseEvents||j.setAttribute("cm-ignore-events","true"),iu(S,j,s,i),e.display.input.setUneditable(j),a&&S.above?h.insertBefore(j,s.gutter||s.text):h.appendChild(j),Mn(S,"redraw")}}function iu(e,n,s,i){if(e.noHScroll){(s.alignable||(s.alignable=[])).push(n);var a=i.wrapperWidth;n.style.left=i.fixedPos+"px",e.coverGutter||(a-=i.gutterTotalWidth,n.style.paddingLeft=i.gutterTotalWidth+"px"),n.style.width=a+"px"}e.coverGutter&&(n.style.zIndex=5,n.style.position="relative",e.noHScroll||(n.style.marginLeft=-i.gutterTotalWidth+"px"))}function qi(e){if(e.height!=null)return e.height;var n=e.doc.cm;if(!n)return 0;if(!T(document.body,e.node)){var s="position: relative;";e.coverGutter&&(s+="margin-left: -"+n.display.gutters.offsetWidth+"px;"),e.noHScroll&&(s+="width: "+n.display.wrapper.clientWidth+"px;"),xe(n.display.measure,A("div",[e.node],null,s))}return e.height=e.node.parentNode.offsetHeight}function $i(e,n){for(var s=gi(n);s!=e.wrapper;s=s.parentNode)if(!s||s.nodeType==1&&s.getAttribute("cm-ignore-events")=="true"||s.parentNode==e.sizer&&s!=e.mover)return!0}function go(e){return e.lineSpace.offsetTop}function ll(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function su(e){if(e.cachedPaddingH)return e.cachedPaddingH;var n=xe(e.measure,A("pre","x","CodeMirror-line-like")),s=window.getComputedStyle?window.getComputedStyle(n):n.currentStyle,i={left:parseInt(s.paddingLeft),right:parseInt(s.paddingRight)};return!isNaN(i.left)&&!isNaN(i.right)&&(e.cachedPaddingH=i),i}function oi(e){return zt-e.display.nativeBarWidth}function hs(e){return e.display.scroller.clientWidth-oi(e)-e.display.barWidth}function fs(e){return e.display.scroller.clientHeight-oi(e)-e.display.barHeight}function ip(e,n,s){var i=e.options.lineWrapping,a=i&&hs(e);if(!n.measure.heights||i&&n.measure.width!=a){var h=n.measure.heights=[];if(i){n.measure.width=a;for(var y=n.text.firstChild.getClientRects(),b=0;b<y.length-1;b++){var S=y[b],j=y[b+1];Math.abs(S.bottom-j.bottom)>2&&h.push((S.bottom+j.top)/2-s.top)}}h.push(s.bottom-s.top)}}function Sc(e,n,s){if(e.line==n)return{map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var i=0;i<e.rest.length;i++)if(e.rest[i]==n)return{map:e.measure.maps[i],cache:e.measure.caches[i]};for(var a=0;a<e.rest.length;a++)if(E(e.rest[a])>s)return{map:e.measure.maps[a],cache:e.measure.caches[a],before:!0}}}function sp(e,n){n=$t(n);var s=E(n),i=e.display.externalMeasured=new yc(e.doc,n,s);i.lineN=s;var a=i.built=Zl(e,i);return i.text=a.pre,xe(e.display.lineMeasure,a.pre),i}function au(e,n,s,i){return Pr(e,Si(e,n),s,i)}function ul(e,n){if(n>=e.display.viewFrom&&n<e.display.viewTo)return e.display.view[Ci(e,n)];var s=e.display.externalMeasured;if(s&&n>=s.lineN&&n<s.lineN+s.size)return s}function Si(e,n){var s=E(n),i=ul(e,s);i&&!i.text?i=null:i&&i.changes&&(xc(e,i,s,ml(e)),e.curOp.forceUpdate=!0),i||(i=sp(e,n));var a=Sc(i,n,s);return{line:n,view:i,rect:null,map:a.map,cache:a.cache,before:a.before,hasHeights:!1}}function Pr(e,n,s,i,a){n.before&&(s=-1);var h=s+(i||""),y;return n.cache.hasOwnProperty(h)?y=n.cache[h]:(n.rect||(n.rect=n.view.text.getBoundingClientRect()),n.hasHeights||(ip(e,n.view,n.rect),n.hasHeights=!0),y=Cc(e,n,s,i),y.bogus||(n.cache[h]=y)),{left:y.left,right:y.right,top:a?y.rtop:y.top,bottom:a?y.rbottom:y.bottom}}var _c={left:0,right:0,top:0,bottom:0};function yo(e,n,s){for(var i,a,h,y,b,S,j=0;j<e.length;j+=3)if(b=e[j],S=e[j+1],n<b?(a=0,h=1,y="left"):n<S?(a=n-b,h=a+1):(j==e.length-3||n==S&&e[j+3]>n)&&(h=S-b,a=h-1,n>=S&&(y="right")),a!=null){if(i=e[j+2],b==S&&s==(i.insertLeft?"left":"right")&&(y=s),s=="left"&&a==0)for(;j&&e[j-2]==e[j-3]&&e[j-1].insertLeft;)i=e[(j-=3)+2],y="left";if(s=="right"&&a==S-b)for(;j<e.length-3&&e[j+3]==e[j+4]&&!e[j+5].insertLeft;)i=e[(j+=3)+2],y="right";break}return{node:i,start:a,end:h,collapse:y,coverStart:b,coverEnd:S}}function ap(e,n){var s=_c;if(n=="left")for(var i=0;i<e.length&&(s=e[i]).left==s.right;i++);else for(var a=e.length-1;a>=0&&(s=e[a]).left==s.right;a--);return s}function Cc(e,n,s,i){var a=yo(n.map,s,i),h=a.node,y=a.start,b=a.end,S=a.collapse,j;if(h.nodeType==3){for(var F=0;F<4;F++){for(;y&&ht(n.line.text.charAt(a.coverStart+y));)--y;for(;a.coverStart+b<a.coverEnd&&ht(n.line.text.charAt(a.coverStart+b));)++b;if(w&&C<9&&y==0&&b==a.coverEnd-a.coverStart?j=h.parentNode.getBoundingClientRect():j=ap(Q(h,y,b).getClientRects(),i),j.left||j.right||y==0)break;b=y,y=y-1,S="right"}w&&C<11&&(j=ou(e.display.measure,j))}else{y>0&&(S=i="right");var K;e.options.lineWrapping&&(K=h.getClientRects()).length>1?j=K[i=="right"?K.length-1:0]:j=h.getBoundingClientRect()}if(w&&C<9&&!y&&(!j||!j.left&&!j.right)){var oe=h.parentNode.getClientRects()[0];oe?j={left:oe.left,right:oe.left+ms(e.display),top:oe.top,bottom:oe.bottom}:j=_c}for(var re=j.top-n.rect.top,ge=j.bottom-n.rect.top,ke=(re+ge)/2,Ae=n.view.measure.heights,Ne=0;Ne<Ae.length-1&&!(ke<Ae[Ne]);Ne++);var Fe=Ne?Ae[Ne-1]:0,ze=Ae[Ne],Ge={left:(S=="right"?j.right:j.left)-n.rect.left,right:(S=="left"?j.left:j.right)-n.rect.left,top:Fe,bottom:ze};return!j.left&&!j.right&&(Ge.bogus=!0),e.options.singleCursorHeightPerLine||(Ge.rtop=re,Ge.rbottom=ge),Ge}function ou(e,n){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!ls(e))return n;var s=screen.logicalXDPI/screen.deviceXDPI,i=screen.logicalYDPI/screen.deviceYDPI;return{left:n.left*s,right:n.right*s,top:n.top*i,bottom:n.bottom*i}}function cl(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var n=0;n<e.rest.length;n++)e.measure.caches[n]={}}function lu(e){e.display.externalMeasure=null,ue(e.display.lineMeasure);for(var n=0;n<e.display.view.length;n++)cl(e.display.view[n])}function ba(e){lu(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function uu(e){return L&&q?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function Tc(e){return L&&q?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function cu(e){var n=$t(e),s=n.widgets,i=0;if(s)for(var a=0;a<s.length;++a)s[a].above&&(i+=qi(s[a]));return i}function dl(e,n,s,i,a){if(!a){var h=cu(n);s.top+=h,s.bottom+=h}if(i=="line")return s;i||(i="local");var y=Sn(n);if(i=="local"?y+=go(e.display):y-=e.display.viewOffset,i=="page"||i=="window"){var b=e.display.lineSpace.getBoundingClientRect();y+=b.top+(i=="window"?0:Tc(Ce(e)));var S=b.left+(i=="window"?0:uu(Ce(e)));s.left+=S,s.right+=S}return s.top+=y,s.bottom+=y,s}function jc(e,n,s){if(s=="div")return n;var i=n.left,a=n.top;if(s=="page")i-=uu(Ce(e)),a-=Tc(Ce(e));else if(s=="local"||!s){var h=e.display.sizer.getBoundingClientRect();i+=h.left,a+=h.top}var y=e.display.lineSpace.getBoundingClientRect();return{left:i-y.left,top:a-y.top}}function pl(e,n,s,i,a){return i||(i=Xe(e.doc,n.line)),dl(e,i,au(e,i,n.ch,a),s)}function _n(e,n,s,i,a,h){i=i||Xe(e.doc,n.line),a||(a=Si(e,i));function y(ge,ke){var Ae=Pr(e,a,ge,ke?"right":"left",h);return ke?Ae.left=Ae.right:Ae.right=Ae.left,dl(e,i,Ae,s)}var b=xt(i,e.doc.direction),S=n.ch,j=n.sticky;if(S>=i.text.length?(S=i.text.length,j="before"):S<=0&&(S=0,j="after"),!b)return y(j=="before"?S-1:S,j=="before");function F(ge,ke,Ae){var Ne=b[ke],Fe=Ne.level==1;return y(Ae?ge-1:ge,Fe!=Ae)}var K=Ur(b,S,j),oe=Ir,re=F(S,K,j=="before");return oe!=null&&(re.other=F(S,oe,j!="before")),re}function wa(e,n){var s=0;n=vt(e.doc,n),e.options.lineWrapping||(s=ms(e.display)*n.ch);var i=Xe(e.doc,n.line),a=Sn(i)+go(e.display);return{left:s,right:s,top:a,bottom:a+i.height}}function hl(e,n,s,i,a){var h=pe(e,n,s);return h.xRel=a,i&&(h.outside=i),h}function fl(e,n,s){var i=e.doc;if(s+=e.display.viewOffset,s<0)return hl(i.first,0,null,-1,-1);var a=$(i,s),h=i.first+i.size-1;if(a>h)return hl(i.first+i.size-1,Xe(i,h).text.length,null,1,1);n<0&&(n=0);for(var y=Xe(i,a);;){var b=op(e,y,a,n,s),S=_t(y,b.ch+(b.xRel>0||b.outside>0?1:0));if(!S)return b;var j=S.find(1);if(j.line==a)return j;y=Xe(i,a=j.line)}}function du(e,n,s,i){i-=cu(n);var a=n.text.length,h=nr(function(y){return Pr(e,s,y-1).bottom<=i},a,0);return a=nr(function(y){return Pr(e,s,y).top>i},h,a),{begin:h,end:a}}function pu(e,n,s,i){s||(s=Si(e,n));var a=dl(e,n,Pr(e,s,i),"line").top;return du(e,n,s,a)}function vo(e,n,s,i){return e.bottom<=s?!1:e.top>s?!0:(i?e.left:e.right)>n}function op(e,n,s,i,a){a-=Sn(n);var h=Si(e,n),y=cu(n),b=0,S=n.text.length,j=!0,F=xt(n,e.doc.direction);if(F){var K=(e.options.lineWrapping?ka:lp)(e,n,s,h,F,i,a);j=K.level!=1,b=j?K.from:K.to-1,S=j?K.to:K.from-1}var oe=null,re=null,ge=nr(function(lt){var Ve=Pr(e,h,lt);return Ve.top+=y,Ve.bottom+=y,vo(Ve,i,a,!1)?(Ve.top<=a&&Ve.left<=i&&(oe=lt,re=Ve),!0):!1},b,S),ke,Ae,Ne=!1;if(re){var Fe=i-re.left<re.right-i,ze=Fe==j;ge=oe+(ze?0:1),Ae=ze?"after":"before",ke=Fe?re.left:re.right}else{!j&&(ge==S||ge==b)&&ge++,Ae=ge==0?"after":ge==n.text.length?"before":Pr(e,h,ge-(j?1:0)).bottom+y<=a==j?"after":"before";var Ge=_n(e,pe(s,ge,Ae),"line",n,h);ke=Ge.left,Ne=a<Ge.top?-1:a>=Ge.bottom?1:0}return ge=Xt(n.text,ge,1),hl(s,ge,Ae,Ne,i-ke)}function lp(e,n,s,i,a,h,y){var b=nr(function(K){var oe=a[K],re=oe.level!=1;return vo(_n(e,pe(s,re?oe.to:oe.from,re?"before":"after"),"line",n,i),h,y,!0)},0,a.length-1),S=a[b];if(b>0){var j=S.level!=1,F=_n(e,pe(s,j?S.from:S.to,j?"after":"before"),"line",n,i);vo(F,h,y,!0)&&F.top>y&&(S=a[b-1])}return S}function ka(e,n,s,i,a,h,y){var b=du(e,n,i,y),S=b.begin,j=b.end;/\s/.test(n.text.charAt(j-1))&&j--;for(var F=null,K=null,oe=0;oe<a.length;oe++){var re=a[oe];if(!(re.from>=j||re.to<=S)){var ge=re.level!=1,ke=Pr(e,i,ge?Math.min(j,re.to)-1:Math.max(S,re.from)).right,Ae=ke<h?h-ke+1e9:ke-h;(!F||K>Ae)&&(F=re,K=Ae)}}return F||(F=a[a.length-1]),F.from<S&&(F={from:S,to:F.to,level:F.level}),F.to>j&&(F={from:F.from,to:j,level:F.level}),F}var Ki;function _i(e){if(e.cachedTextHeight!=null)return e.cachedTextHeight;if(Ki==null){Ki=A("pre",null,"CodeMirror-line-like");for(var n=0;n<49;++n)Ki.appendChild(document.createTextNode("x")),Ki.appendChild(A("br"));Ki.appendChild(document.createTextNode("x"))}xe(e.measure,Ki);var s=Ki.offsetHeight/50;return s>3&&(e.cachedTextHeight=s),ue(e.measure),s||1}function ms(e){if(e.cachedCharWidth!=null)return e.cachedCharWidth;var n=A("span","xxxxxxxxxx"),s=A("pre",[n],"CodeMirror-line-like");xe(e.measure,s);var i=n.getBoundingClientRect(),a=(i.right-i.left)/10;return a>2&&(e.cachedCharWidth=a),a||10}function ml(e){for(var n=e.display,s={},i={},a=n.gutters.clientLeft,h=n.gutters.firstChild,y=0;h;h=h.nextSibling,++y){var b=e.display.gutterSpecs[y].className;s[b]=h.offsetLeft+h.clientLeft+a,i[b]=h.clientWidth}return{fixedPos:Sa(n),gutterTotalWidth:n.gutters.offsetWidth,gutterLeft:s,gutterWidth:i,wrapperWidth:n.wrapper.clientWidth}}function Sa(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Fs(e){var n=_i(e.display),s=e.options.lineWrapping,i=s&&Math.max(5,e.display.scroller.clientWidth/ms(e.display)-3);return function(a){if(Er(e.doc,a))return 0;var h=0;if(a.widgets)for(var y=0;y<a.widgets.length;y++)a.widgets[y].height&&(h+=a.widgets[y].height);return s?h+(Math.ceil(a.text.length/i)||1)*n:h+n}}function xo(e){var n=e.doc,s=Fs(e);n.iter(function(i){var a=s(i);a!=i.height&&Yn(i,a)})}function gs(e,n,s,i){var a=e.display;if(!s&&gi(n).getAttribute("cm-not-content")=="true")return null;var h,y,b=a.lineSpace.getBoundingClientRect();try{h=n.clientX-b.left,y=n.clientY-b.top}catch{return null}var S=fl(e,h,y),j;if(i&&S.xRel>0&&(j=Xe(e.doc,S.line).text).length==S.ch){var F=$e(j,j.length,e.options.tabSize)-j.length;S=pe(S.line,Math.max(0,Math.round((h-su(e.display).left)/ms(e.display))-F))}return S}function Ci(e,n){if(n>=e.display.viewTo||(n-=e.display.viewFrom,n<0))return null;for(var s=e.display.view,i=0;i<s.length;i++)if(n-=s[i].size,n<0)return i}function sr(e,n,s,i){n==null&&(n=e.doc.first),s==null&&(s=e.doc.first+e.doc.size),i||(i=0);var a=e.display;if(i&&s<a.viewTo&&(a.updateLineNumbers==null||a.updateLineNumbers>n)&&(a.updateLineNumbers=n),e.curOp.viewChanged=!0,n>=a.viewTo)Dn&&fr(e.doc,n)<a.viewTo&&Yi(e);else if(s<=a.viewFrom)Dn&&dn(e.doc,s+i)>a.viewFrom?Yi(e):(a.viewFrom+=i,a.viewTo+=i);else if(n<=a.viewFrom&&s>=a.viewTo)Yi(e);else if(n<=a.viewFrom){var h=bo(e,s,s+i,1);h?(a.view=a.view.slice(h.index),a.viewFrom=h.lineN,a.viewTo+=i):Yi(e)}else if(s>=a.viewTo){var y=bo(e,n,n,-1);y?(a.view=a.view.slice(0,y.index),a.viewTo=y.lineN):Yi(e)}else{var b=bo(e,n,n,-1),S=bo(e,s,s+i,1);b&&S?(a.view=a.view.slice(0,b.index).concat(ol(e,b.lineN,S.lineN)).concat(a.view.slice(S.index)),a.viewTo+=i):Yi(e)}var j=a.externalMeasured;j&&(s<j.lineN?j.lineN+=i:n<j.lineN+j.size&&(a.externalMeasured=null))}function Gi(e,n,s){e.curOp.viewChanged=!0;var i=e.display,a=e.display.externalMeasured;if(a&&n>=a.lineN&&n<a.lineN+a.size&&(i.externalMeasured=null),!(n<i.viewFrom||n>=i.viewTo)){var h=i.view[Ci(e,n)];if(h.node!=null){var y=h.changes||(h.changes=[]);Ke(y,s)==-1&&y.push(s)}}}function Yi(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function bo(e,n,s,i){var a=Ci(e,n),h,y=e.display.view;if(!Dn||s==e.doc.first+e.doc.size)return{index:a,lineN:s};for(var b=e.display.viewFrom,S=0;S<a;S++)b+=y[S].size;if(b!=n){if(i>0){if(a==y.length-1)return null;h=b+y[a].size-n,a++}else h=b-n;n+=h,s+=h}for(;fr(e.doc,s)!=s;){if(a==(i<0?0:y.length-1))return null;s+=i*y[a-(i<0?1:0)].size,a+=i}return{index:a,lineN:s}}function Nc(e,n,s){var i=e.display,a=i.view;a.length==0||n>=i.viewTo||s<=i.viewFrom?(i.view=ol(e,n,s),i.viewFrom=n):(i.viewFrom>n?i.view=ol(e,n,i.viewFrom).concat(i.view):i.viewFrom<n&&(i.view=i.view.slice(Ci(e,n))),i.viewFrom=n,i.viewTo<s?i.view=i.view.concat(ol(e,i.viewTo,s)):i.viewTo>s&&(i.view=i.view.slice(0,Ci(e,s)))),i.viewTo=s}function hu(e){for(var n=e.display.view,s=0,i=0;i<n.length;i++){var a=n[i];!a.hidden&&(!a.node||a.changes)&&++s}return s}function Yr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function gl(e,n){n===void 0&&(n=!0);var s=e.doc,i={},a=i.cursors=document.createDocumentFragment(),h=i.selection=document.createDocumentFragment(),y=e.options.$customCursor;y&&(n=!0);for(var b=0;b<s.sel.ranges.length;b++)if(!(!n&&b==s.sel.primIndex)){var S=s.sel.ranges[b];if(!(S.from().line>=e.display.viewTo||S.to().line<e.display.viewFrom)){var j=S.empty();if(y){var F=y(e,S);F&&wo(e,F,a)}else(j||e.options.showCursorWhenSelecting)&&wo(e,S.head,a);j||up(e,S,h)}}return i}function wo(e,n,s){var i=_n(e,n,"div",null,null,!e.options.singleCursorHeightPerLine),a=s.appendChild(A("div"," ","CodeMirror-cursor"));if(a.style.left=i.left+"px",a.style.top=i.top+"px",a.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var h=pl(e,n,"div",null,null),y=h.right-h.left;a.style.width=(y>0?y:e.defaultCharWidth())+"px"}if(i.other){var b=s.appendChild(A("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));b.style.display="",b.style.left=i.other.left+"px",b.style.top=i.other.top+"px",b.style.height=(i.other.bottom-i.other.top)*.85+"px"}}function yl(e,n){return e.top-n.top||e.left-n.left}function up(e,n,s){var i=e.display,a=e.doc,h=document.createDocumentFragment(),y=su(e.display),b=y.left,S=Math.max(i.sizerWidth,hs(e)-i.sizer.offsetLeft)-y.right,j=a.direction=="ltr";function F(ze,Ge,lt,Ve){Ge<0&&(Ge=0),Ge=Math.round(Ge),Ve=Math.round(Ve),h.appendChild(A("div",null,"CodeMirror-selected","position: absolute; left: "+ze+`px;
                             top: `+Ge+"px; width: "+(lt??S-ze)+`px;
                             height: `+(Ve-Ge)+"px"))}function K(ze,Ge,lt){var Ve=Xe(a,ze),kt=Ve.text.length,Nt,Bn;function sn(yn,br){return pl(e,pe(ze,yn),"div",Ve,br)}function xr(yn,br,Tn){var vn=pu(e,Ve,null,yn),Dt=br=="ltr"==(Tn=="after")?"left":"right",pt=Tn=="after"?vn.begin:vn.end-(/\s/.test(Ve.text.charAt(vn.end-1))?2:1);return sn(pt,Dt)[Dt]}var lr=xt(Ve,a.direction);return _r(lr,Ge||0,lt??kt,function(yn,br,Tn,vn){var Dt=Tn=="ltr",pt=sn(yn,Dt?"left":"right"),Mt=sn(br-1,Dt?"right":"left"),an=Ge==null&&yn==0,un=lt==null&&br==kt,Ut=vn==0,wr=!lr||vn==lr.length-1;if(Mt.top-pt.top<=3){var Et=(j?an:un)&&Ut,la=(j?un:an)&&wr,kr=Et?b:(Dt?pt:Mt).left,Ii=la?S:(Dt?Mt:pt).right;F(kr,pt.top,Ii-kr,pt.bottom)}else{var ts,An,Un,$o;Dt?(ts=j&&an&&Ut?b:pt.left,An=j?S:xr(yn,Tn,"before"),Un=j?b:xr(br,Tn,"after"),$o=j&&un&&wr?S:Mt.right):(ts=j?xr(yn,Tn,"before"):b,An=!j&&an&&Ut?S:pt.right,Un=!j&&un&&wr?b:Mt.left,$o=j?xr(br,Tn,"after"):S),F(ts,pt.top,An-ts,pt.bottom),pt.bottom<Mt.top&&F(b,pt.bottom,null,Mt.top),F(Un,Mt.top,$o-Un,Mt.bottom)}(!Nt||yl(pt,Nt)<0)&&(Nt=pt),yl(Mt,Nt)<0&&(Nt=Mt),(!Bn||yl(pt,Bn)<0)&&(Bn=pt),yl(Mt,Bn)<0&&(Bn=Mt)}),{start:Nt,end:Bn}}var oe=n.from(),re=n.to();if(oe.line==re.line)K(oe.line,oe.ch,re.ch);else{var ge=Xe(a,oe.line),ke=Xe(a,re.line),Ae=$t(ge)==$t(ke),Ne=K(oe.line,oe.ch,Ae?ge.text.length+1:null).end,Fe=K(re.line,Ae?0:null,re.ch).start;Ae&&(Ne.top<Fe.top-2?(F(Ne.right,Ne.top,null,Ne.bottom),F(b,Fe.top,Fe.left,Fe.bottom)):F(Ne.right,Ne.top,Fe.left-Ne.right,Ne.bottom)),Ne.bottom<Fe.top&&F(b,Ne.bottom,null,Fe.top)}s.appendChild(h)}function Ws(e){if(e.state.focused){var n=e.display;clearInterval(n.blinker);var s=!0;n.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?n.blinker=setInterval(function(){e.hasFocus()||Ft(e),n.cursorDiv.style.visibility=(s=!s)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(n.cursorDiv.style.visibility="hidden")}}function Ec(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||xl(e))}function vl(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Ft(e))},100)}function xl(e,n){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),e.options.readOnly!="nocursor"&&(e.state.focused||(Rt(e,"focus",e,n),e.state.focused=!0,H(e.display.wrapper,"CodeMirror-focused"),!e.curOp&&e.display.selForContextMenu!=e.doc.sel&&(e.display.input.reset(),N&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Ws(e))}function Ft(e,n){e.state.delayingBlurEvent||(e.state.focused&&(Rt(e,"blur",e,n),e.state.focused=!1,Le(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function _a(e){for(var n=e.display,s=n.lineDiv.offsetTop,i=Math.max(0,n.scroller.getBoundingClientRect().top),a=n.lineDiv.getBoundingClientRect().top,h=0,y=0;y<n.view.length;y++){var b=n.view[y],S=e.options.lineWrapping,j=void 0,F=0;if(!b.hidden){if(a+=b.line.height,w&&C<8){var K=b.node.offsetTop+b.node.offsetHeight;j=K-s,s=K}else{var oe=b.node.getBoundingClientRect();j=oe.bottom-oe.top,!S&&b.text.firstChild&&(F=b.text.firstChild.getBoundingClientRect().right-oe.left-1)}var re=b.line.height-j;if((re>.005||re<-.005)&&(a<i&&(h-=re),Yn(b.line,j),ko(b.line),b.rest))for(var ge=0;ge<b.rest.length;ge++)ko(b.rest[ge]);if(F>e.display.sizerWidth){var ke=Math.ceil(F/ms(e.display));ke>e.display.maxLineLength&&(e.display.maxLineLength=ke,e.display.maxLine=b.line,e.display.maxLineChanged=!0)}}}Math.abs(h)>2&&(n.scroller.scrollTop+=h)}function ko(e){if(e.widgets)for(var n=0;n<e.widgets.length;++n){var s=e.widgets[n],i=s.node.parentNode;i&&(s.height=i.offsetHeight)}}function ys(e,n,s){var i=s&&s.top!=null?Math.max(0,s.top):e.scroller.scrollTop;i=Math.floor(i-go(e));var a=s&&s.bottom!=null?s.bottom:i+e.wrapper.clientHeight,h=$(n,i),y=$(n,a);if(s&&s.ensure){var b=s.ensure.from.line,S=s.ensure.to.line;b<h?(h=b,y=$(n,Sn(Xe(n,b))+e.wrapper.clientHeight)):Math.min(S,n.lastLine())>=y&&(h=$(n,Sn(Xe(n,S))-e.wrapper.clientHeight),y=S)}return{from:h,to:Math.max(y,h+1)}}function Pc(e,n){if(!qt(e,"scrollCursorIntoView")){var s=e.display,i=s.sizer.getBoundingClientRect(),a=null,h=s.wrapper.ownerDocument;if(n.top+i.top<0?a=!0:n.bottom+i.top>(h.defaultView.innerHeight||h.documentElement.clientHeight)&&(a=!1),a!=null&&!I){var y=A("div","​",null,`position: absolute;
                         top: `+(n.top-s.viewOffset-go(e.display))+`px;
                         height: `+(n.bottom-n.top+oi(e)+s.barHeight)+`px;
                         left: `+n.left+"px; width: "+Math.max(2,n.right-n.left)+"px;");e.display.lineSpace.appendChild(y),y.scrollIntoView(a),e.display.lineSpace.removeChild(y)}}}function fu(e,n,s,i){i==null&&(i=0);var a;!e.options.lineWrapping&&n==s&&(s=n.sticky=="before"?pe(n.line,n.ch+1,"before"):n,n=n.ch?pe(n.line,n.sticky=="before"?n.ch-1:n.ch,"after"):n);for(var h=0;h<5;h++){var y=!1,b=_n(e,n),S=!s||s==n?b:_n(e,s);a={left:Math.min(b.left,S.left),top:Math.min(b.top,S.top)-i,right:Math.max(b.left,S.left),bottom:Math.max(b.bottom,S.bottom)+i};var j=Ca(e,a),F=e.doc.scrollTop,K=e.doc.scrollLeft;if(j.scrollTop!=null&&(xs(e,j.scrollTop),Math.abs(e.doc.scrollTop-F)>1&&(y=!0)),j.scrollLeft!=null&&(Vi(e,j.scrollLeft),Math.abs(e.doc.scrollLeft-K)>1&&(y=!0)),!y)break}return a}function So(e,n){var s=Ca(e,n);s.scrollTop!=null&&xs(e,s.scrollTop),s.scrollLeft!=null&&Vi(e,s.scrollLeft)}function Ca(e,n){var s=e.display,i=_i(e.display);n.top<0&&(n.top=0);var a=e.curOp&&e.curOp.scrollTop!=null?e.curOp.scrollTop:s.scroller.scrollTop,h=fs(e),y={};n.bottom-n.top>h&&(n.bottom=n.top+h);var b=e.doc.height+ll(s),S=n.top<i,j=n.bottom>b-i;if(n.top<a)y.scrollTop=S?0:n.top;else if(n.bottom>a+h){var F=Math.min(n.top,(j?b:n.bottom)-h);F!=a&&(y.scrollTop=F)}var K=e.options.fixedGutter?0:s.gutters.offsetWidth,oe=e.curOp&&e.curOp.scrollLeft!=null?e.curOp.scrollLeft:s.scroller.scrollLeft-K,re=hs(e)-s.gutters.offsetWidth,ge=n.right-n.left>re;return ge&&(n.right=n.left+re),n.left<10?y.scrollLeft=0:n.left<oe?y.scrollLeft=Math.max(0,n.left+K-(ge?0:10)):n.right>re+oe-3&&(y.scrollLeft=n.right+(ge?0:10)-re),y}function vs(e,n){n!=null&&(Co(e),e.curOp.scrollTop=(e.curOp.scrollTop==null?e.doc.scrollTop:e.curOp.scrollTop)+n)}function Hs(e){Co(e);var n=e.getCursor();e.curOp.scrollToPos={from:n,to:n,margin:e.options.cursorScrollMargin}}function _o(e,n,s){(n!=null||s!=null)&&Co(e),n!=null&&(e.curOp.scrollLeft=n),s!=null&&(e.curOp.scrollTop=s)}function cp(e,n){Co(e),e.curOp.scrollToPos=n}function Co(e){var n=e.curOp.scrollToPos;if(n){e.curOp.scrollToPos=null;var s=wa(e,n.from),i=wa(e,n.to);To(e,s,i,n.margin)}}function To(e,n,s,i){var a=Ca(e,{left:Math.min(n.left,s.left),top:Math.min(n.top,s.top)-i,right:Math.max(n.right,s.right),bottom:Math.max(n.bottom,s.bottom)+i});_o(e,a.scrollLeft,a.scrollTop)}function xs(e,n){Math.abs(e.doc.scrollTop-n)<2||(g||Qi(e,{top:n}),bl(e,n,!0),g&&Qi(e),qs(e,100))}function bl(e,n,s){n=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,n)),!(e.display.scroller.scrollTop==n&&!s)&&(e.doc.scrollTop=n,e.display.scrollbars.setScrollTop(n),e.display.scroller.scrollTop!=n&&(e.display.scroller.scrollTop=n))}function Vi(e,n,s,i){n=Math.max(0,Math.min(n,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),!((s?n==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-n)<2)&&!i)&&(e.doc.scrollLeft=n,gu(e),e.display.scroller.scrollLeft!=n&&(e.display.scroller.scrollLeft=n),e.display.scrollbars.setScrollLeft(n))}function Bs(e){var n=e.display,s=n.gutters.offsetWidth,i=Math.round(e.doc.height+ll(e.display));return{clientHeight:n.scroller.clientHeight,viewHeight:n.wrapper.clientHeight,scrollWidth:n.scroller.scrollWidth,clientWidth:n.scroller.clientWidth,viewWidth:n.wrapper.clientWidth,barLeft:e.options.fixedGutter?s:0,docHeight:i,scrollHeight:i+oi(e)+n.barHeight,nativeBarWidth:n.nativeBarWidth,gutterWidth:s}}var Ji=function(e,n,s){this.cm=s;var i=this.vert=A("div",[A("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),a=this.horiz=A("div",[A("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=a.tabIndex=-1,e(i),e(a),rt(i,"scroll",function(){i.clientHeight&&n(i.scrollTop,"vertical")}),rt(a,"scroll",function(){a.clientWidth&&n(a.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,w&&C<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Ji.prototype.update=function(e){var n=e.scrollWidth>e.clientWidth+1,s=e.scrollHeight>e.clientHeight+1,i=e.nativeBarWidth;if(s){this.vert.style.display="block",this.vert.style.bottom=n?i+"px":"0";var a=e.viewHeight-(n?i:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+a)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(n){this.horiz.style.display="block",this.horiz.style.right=s?i+"px":"0",this.horiz.style.left=e.barLeft+"px";var h=e.viewWidth-e.barLeft-(s?i:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+h)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(i==0&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:s?i:0,bottom:n?i:0}},Ji.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Ji.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Ji.prototype.zeroWidthHack=function(){var e=G&&!J?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new tt,this.disableVert=new tt},Ji.prototype.enableZeroWidthBar=function(e,n,s){e.style.visibility="";function i(){var a=e.getBoundingClientRect(),h=s=="vert"?document.elementFromPoint(a.right-1,(a.top+a.bottom)/2):document.elementFromPoint((a.right+a.left)/2,a.bottom-1);h!=e?e.style.visibility="hidden":n.set(1e3,i)}n.set(1e3,i)},Ji.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var jo=function(){};jo.prototype.update=function(){return{bottom:0,right:0}},jo.prototype.setScrollLeft=function(){},jo.prototype.setScrollTop=function(){},jo.prototype.clear=function(){};function Us(e,n){n||(n=Bs(e));var s=e.display.barWidth,i=e.display.barHeight;Lc(e,n);for(var a=0;a<4&&s!=e.display.barWidth||i!=e.display.barHeight;a++)s!=e.display.barWidth&&e.options.lineWrapping&&_a(e),Lc(e,Bs(e)),s=e.display.barWidth,i=e.display.barHeight}function Lc(e,n){var s=e.display,i=s.scrollbars.update(n);s.sizer.style.paddingRight=(s.barWidth=i.right)+"px",s.sizer.style.paddingBottom=(s.barHeight=i.bottom)+"px",s.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(s.scrollbarFiller.style.display="block",s.scrollbarFiller.style.height=i.bottom+"px",s.scrollbarFiller.style.width=i.right+"px"):s.scrollbarFiller.style.display="",i.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(s.gutterFiller.style.display="block",s.gutterFiller.style.height=i.bottom+"px",s.gutterFiller.style.width=n.gutterWidth+"px"):s.gutterFiller.style.display=""}var Ac={native:Ji,null:jo};function wl(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Le(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Ac[e.options.scrollbarStyle](function(n){e.display.wrapper.insertBefore(n,e.display.scrollbarFiller),rt(n,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),n.setAttribute("cm-not-content","true")},function(n,s){s=="horizontal"?Vi(e,n):xs(e,n)},e),e.display.scrollbars.addClass&&H(e.display.wrapper,e.display.scrollbars.addClass)}var bs=0;function ws(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++bs,markArrays:null},vc(e.curOp)}function Vr(e){var n=e.curOp;n&&Zd(n,function(s){for(var i=0;i<s.ops.length;i++)s.ops[i].cm.curOp=null;Ti(s)})}function Ti(e){for(var n=e.ops,s=0;s<n.length;s++)No(n[s]);for(var i=0;i<n.length;i++)Xi(n[i]);for(var a=0;a<n.length;a++)mu(n[a]);for(var h=0;h<n.length;h++)dp(n[h]);for(var y=0;y<n.length;y++)pp(n[y])}function No(e){var n=e.cm,s=n.display;nn(n),e.updateMaxLine&&co(n),e.mustUpdate=e.viewChanged||e.forceUpdate||e.scrollTop!=null||e.scrollToPos&&(e.scrollToPos.from.line<s.viewFrom||e.scrollToPos.to.line>=s.viewTo)||s.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new li(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Xi(e){e.updatedDisplay=e.mustUpdate&&Jn(e.cm,e.update)}function mu(e){var n=e.cm,s=n.display;e.updatedDisplay&&_a(n),e.barMeasure=Bs(n),s.maxLineChanged&&!n.options.lineWrapping&&(e.adjustWidthTo=au(n,s.maxLine,s.maxLine.text.length).left+3,n.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(s.scroller.clientWidth,s.sizer.offsetLeft+e.adjustWidthTo+oi(n)+n.display.barWidth),e.maxScrollLeft=Math.max(0,s.sizer.offsetLeft+e.adjustWidthTo-hs(n))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=s.input.prepareSelection())}function dp(e){var n=e.cm;e.adjustWidthTo!=null&&(n.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<n.doc.scrollLeft&&Vi(n,Math.min(n.display.scroller.scrollLeft,e.maxScrollLeft),!0),n.display.maxLineChanged=!1);var s=e.focus&&e.focus==P(Ie(n));e.preparedSelection&&n.display.input.showSelection(e.preparedSelection,s),(e.updatedDisplay||e.startHeight!=n.doc.height)&&Us(n,e.barMeasure),e.updatedDisplay&&Na(n,e.barMeasure),e.selectionChanged&&Ws(n),n.state.focused&&e.updateInput&&n.display.input.reset(e.typing),s&&Ec(e.cm)}function pp(e){var n=e.cm,s=n.display,i=n.doc;if(e.updatedDisplay&&mr(n,e.update),s.wheelStartX!=null&&(e.scrollTop!=null||e.scrollLeft!=null||e.scrollToPos)&&(s.wheelStartX=s.wheelStartY=null),e.scrollTop!=null&&bl(n,e.scrollTop,e.forceScroll),e.scrollLeft!=null&&Vi(n,e.scrollLeft,!0,!0),e.scrollToPos){var a=fu(n,vt(i,e.scrollToPos.from),vt(i,e.scrollToPos.to),e.scrollToPos.margin);Pc(n,a)}var h=e.maybeHiddenMarkers,y=e.maybeUnhiddenMarkers;if(h)for(var b=0;b<h.length;++b)h[b].lines.length||Rt(h[b],"hide");if(y)for(var S=0;S<y.length;++S)y[S].lines.length&&Rt(y[S],"unhide");s.wrapper.offsetHeight&&(i.scrollTop=n.display.scroller.scrollTop),e.changeObjs&&Rt(n,"changes",n,e.changeObjs),e.update&&e.update.finish()}function Pn(e,n){if(e.curOp)return n();ws(e);try{return n()}finally{Vr(e)}}function pn(e,n){return function(){if(e.curOp)return n.apply(e,arguments);ws(e);try{return n.apply(e,arguments)}finally{Vr(e)}}}function Cn(e){return function(){if(this.curOp)return e.apply(this,arguments);ws(this);try{return e.apply(this,arguments)}finally{Vr(this)}}}function gn(e){return function(){var n=this.cm;if(!n||n.curOp)return e.apply(this,arguments);ws(n);try{return e.apply(this,arguments)}finally{Vr(n)}}}function qs(e,n){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(n,_e(Ta,e))}function Ta(e){var n=e.doc;if(!(n.highlightFrontier>=e.display.viewTo)){var s=+new Date+e.options.workTime,i=jt(e,n.highlightFrontier),a=[];n.iter(i.line,Math.min(n.first+n.size,e.display.viewTo+500),function(h){if(i.line>=e.display.viewFrom){var y=h.styles,b=h.text.length>e.options.maxHighlightLength?At(n.mode,i.state):null,S=ao(e,h,i,!0);b&&(i.state=b),h.styles=S.styles;var j=h.styleClasses,F=S.classes;F?h.styleClasses=F:j&&(h.styleClasses=null);for(var K=!y||y.length!=h.styles.length||j!=F&&(!j||!F||j.bgClass!=F.bgClass||j.textClass!=F.textClass),oe=0;!K&&oe<y.length;++oe)K=y[oe]!=h.styles[oe];K&&a.push(i.line),h.stateAfter=i.save(),i.nextLine()}else h.text.length<=e.options.maxHighlightLength&&ds(e,h.text,i),h.stateAfter=i.line%5==0?i.save():null,i.nextLine();if(+new Date>s)return qs(e,e.options.workDelay),!0}),n.highlightFrontier=i.line,n.modeFrontier=Math.max(n.modeFrontier,i.line),a.length&&Pn(e,function(){for(var h=0;h<a.length;h++)Gi(e,a[h],"text")})}}var li=function(e,n,s){var i=e.display;this.viewport=n,this.visible=ys(i,e.doc,n),this.editorIsHidden=!i.wrapper.offsetWidth,this.wrapperHeight=i.wrapper.clientHeight,this.wrapperWidth=i.wrapper.clientWidth,this.oldDisplayWidth=hs(e),this.force=s,this.dims=ml(e),this.events=[]};li.prototype.signal=function(e,n){mn(e,n)&&this.events.push(arguments)},li.prototype.finish=function(){for(var e=0;e<this.events.length;e++)Rt.apply(null,this.events[e])};function nn(e){var n=e.display;!n.scrollbarsClipped&&n.scroller.offsetWidth&&(n.nativeBarWidth=n.scroller.offsetWidth-n.scroller.clientWidth,n.heightForcer.style.height=oi(e)+"px",n.sizer.style.marginBottom=-n.nativeBarWidth+"px",n.sizer.style.borderRightWidth=oi(e)+"px",n.scrollbarsClipped=!0)}function Zt(e){if(e.hasFocus())return null;var n=P(Ie(e));if(!n||!T(e.display.lineDiv,n))return null;var s={activeElt:n};if(window.getSelection){var i=Oe(e).getSelection();i.anchorNode&&i.extend&&T(e.display.lineDiv,i.anchorNode)&&(s.anchorNode=i.anchorNode,s.anchorOffset=i.anchorOffset,s.focusNode=i.focusNode,s.focusOffset=i.focusOffset)}return s}function ks(e){if(!(!e||!e.activeElt||e.activeElt==P(qe(e.activeElt)))&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&T(document.body,e.anchorNode)&&T(document.body,e.focusNode))){var n=e.activeElt.ownerDocument,s=n.defaultView.getSelection(),i=n.createRange();i.setEnd(e.anchorNode,e.anchorOffset),i.collapse(!1),s.removeAllRanges(),s.addRange(i),s.extend(e.focusNode,e.focusOffset)}}function Jn(e,n){var s=e.display,i=e.doc;if(n.editorIsHidden)return Yi(e),!1;if(!n.force&&n.visible.from>=s.viewFrom&&n.visible.to<=s.viewTo&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo)&&s.renderedView==s.view&&hu(e)==0)return!1;yu(e)&&(Yi(e),n.dims=ml(e));var a=i.first+i.size,h=Math.max(n.visible.from-e.options.viewportMargin,i.first),y=Math.min(a,n.visible.to+e.options.viewportMargin);s.viewFrom<h&&h-s.viewFrom<20&&(h=Math.max(i.first,s.viewFrom)),s.viewTo>y&&s.viewTo-y<20&&(y=Math.min(a,s.viewTo)),Dn&&(h=fr(e.doc,h),y=dn(e.doc,y));var b=h!=s.viewFrom||y!=s.viewTo||s.lastWrapHeight!=n.wrapperHeight||s.lastWrapWidth!=n.wrapperWidth;Nc(e,h,y),s.viewOffset=Sn(Xe(e.doc,s.viewFrom)),e.display.mover.style.top=s.viewOffset+"px";var S=hu(e);if(!b&&S==0&&!n.force&&s.renderedView==s.view&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo))return!1;var j=Zt(e);return S>4&&(s.lineDiv.style.display="none"),ja(e,s.updateLineNumbers,n.dims),S>4&&(s.lineDiv.style.display=""),s.renderedView=s.view,ks(j),ue(s.cursorDiv),ue(s.selectionDiv),s.gutters.style.height=s.sizer.style.minHeight=0,b&&(s.lastWrapHeight=n.wrapperHeight,s.lastWrapWidth=n.wrapperWidth,qs(e,400)),s.updateLineNumbers=null,!0}function mr(e,n){for(var s=n.viewport,i=!0;;i=!1){if(!i||!e.options.lineWrapping||n.oldDisplayWidth==hs(e)){if(s&&s.top!=null&&(s={top:Math.min(e.doc.height+ll(e.display)-fs(e),s.top)}),n.visible=ys(e.display,e.doc,s),n.visible.from>=e.display.viewFrom&&n.visible.to<=e.display.viewTo)break}else i&&(n.visible=ys(e.display,e.doc,s));if(!Jn(e,n))break;_a(e);var a=Bs(e);Yr(e),Us(e,a),Na(e,a),n.force=!1}n.signal(e,"update",e),(e.display.viewFrom!=e.display.reportedViewFrom||e.display.viewTo!=e.display.reportedViewTo)&&(n.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Qi(e,n){var s=new li(e,n);if(Jn(e,s)){_a(e),mr(e,s);var i=Bs(e);Yr(e),Us(e,i),Na(e,i),s.finish()}}function ja(e,n,s){var i=e.display,a=e.options.lineNumbers,h=i.lineDiv,y=h.firstChild;function b(ge){var ke=ge.nextSibling;return N&&G&&e.display.currentWheelTarget==ge?ge.style.display="none":ge.parentNode.removeChild(ge),ke}for(var S=i.view,j=i.viewFrom,F=0;F<S.length;F++){var K=S[F];if(!K.hidden)if(!K.node||K.node.parentNode!=h){var oe=rp(e,K,j,s);h.insertBefore(oe,y)}else{for(;y!=K.node;)y=b(y);var re=a&&n!=null&&n<=j&&K.lineNumber;K.changes&&(Ke(K.changes,"gutter")>-1&&(re=!1),xc(e,K,j,s)),re&&(ue(K.lineNumber),K.lineNumber.appendChild(document.createTextNode(je(e.options,j)))),y=K.node.nextSibling}j+=K.size}for(;y;)y=b(y)}function ar(e){var n=e.gutters.offsetWidth;e.sizer.style.marginLeft=n+"px",Mn(e,"gutterChanged",e)}function Na(e,n){e.display.sizer.style.minHeight=n.docHeight+"px",e.display.heightForcer.style.top=n.docHeight+"px",e.display.gutters.style.height=n.docHeight+e.display.barHeight+oi(e)+"px"}function gu(e){var n=e.display,s=n.view;if(!(!n.alignWidgets&&(!n.gutters.firstChild||!e.options.fixedGutter))){for(var i=Sa(n)-n.scroller.scrollLeft+e.doc.scrollLeft,a=n.gutters.offsetWidth,h=i+"px",y=0;y<s.length;y++)if(!s[y].hidden){e.options.fixedGutter&&(s[y].gutter&&(s[y].gutter.style.left=h),s[y].gutterBackground&&(s[y].gutterBackground.style.left=h));var b=s[y].alignable;if(b)for(var S=0;S<b.length;S++)b[S].style.left=h}e.options.fixedGutter&&(n.gutters.style.left=i+a+"px")}}function yu(e){if(!e.options.lineNumbers)return!1;var n=e.doc,s=je(e.options,n.first+n.size-1),i=e.display;if(s.length!=i.lineNumChars){var a=i.measure.appendChild(A("div",[A("div",s)],"CodeMirror-linenumber CodeMirror-gutter-elt")),h=a.firstChild.offsetWidth,y=a.offsetWidth-h;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(h,i.lineGutter.offsetWidth-y)+1,i.lineNumWidth=i.lineNumInnerWidth+y,i.lineNumChars=i.lineNumInnerWidth?s.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",ar(e.display),!0}return!1}function Ea(e,n){for(var s=[],i=!1,a=0;a<e.length;a++){var h=e[a],y=null;if(typeof h!="string"&&(y=h.style,h=h.className),h=="CodeMirror-linenumbers")if(n)i=!0;else continue;s.push({className:h,style:y})}return n&&!i&&s.push({className:"CodeMirror-linenumbers",style:null}),s}function vu(e){var n=e.gutters,s=e.gutterSpecs;ue(n),e.lineGutter=null;for(var i=0;i<s.length;++i){var a=s[i],h=a.className,y=a.style,b=n.appendChild(A("div",null,"CodeMirror-gutter "+h));y&&(b.style.cssText=y),h=="CodeMirror-linenumbers"&&(e.lineGutter=b,b.style.width=(e.lineNumWidth||1)+"px")}n.style.display=s.length?"":"none",ar(e)}function Fr(e){vu(e.display),sr(e),gu(e)}function kl(e,n,s,i){var a=this;this.input=s,a.scrollbarFiller=A("div",null,"CodeMirror-scrollbar-filler"),a.scrollbarFiller.setAttribute("cm-not-content","true"),a.gutterFiller=A("div",null,"CodeMirror-gutter-filler"),a.gutterFiller.setAttribute("cm-not-content","true"),a.lineDiv=ee("div",null,"CodeMirror-code"),a.selectionDiv=A("div",null,null,"position: relative; z-index: 1"),a.cursorDiv=A("div",null,"CodeMirror-cursors"),a.measure=A("div",null,"CodeMirror-measure"),a.lineMeasure=A("div",null,"CodeMirror-measure"),a.lineSpace=ee("div",[a.measure,a.lineMeasure,a.selectionDiv,a.cursorDiv,a.lineDiv],null,"position: relative; outline: none");var h=ee("div",[a.lineSpace],"CodeMirror-lines");a.mover=A("div",[h],null,"position: relative"),a.sizer=A("div",[a.mover],"CodeMirror-sizer"),a.sizerWidth=null,a.heightForcer=A("div",null,null,"position: absolute; height: "+zt+"px; width: 1px;"),a.gutters=A("div",null,"CodeMirror-gutters"),a.lineGutter=null,a.scroller=A("div",[a.sizer,a.heightForcer,a.gutters],"CodeMirror-scroll"),a.scroller.setAttribute("tabIndex","-1"),a.wrapper=A("div",[a.scrollbarFiller,a.gutterFiller,a.scroller],"CodeMirror"),L&&Y===105&&(a.wrapper.style.clipPath="inset(0px)"),a.wrapper.setAttribute("translate","no"),w&&C<8&&(a.gutters.style.zIndex=-1,a.scroller.style.paddingRight=0),!N&&!(g&&W)&&(a.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(a.wrapper):e(a.wrapper)),a.viewFrom=a.viewTo=n.first,a.reportedViewFrom=a.reportedViewTo=n.first,a.view=[],a.renderedView=null,a.externalMeasured=null,a.viewOffset=0,a.lastWrapHeight=a.lastWrapWidth=0,a.updateLineNumbers=null,a.nativeBarWidth=a.barHeight=a.barWidth=0,a.scrollbarsClipped=!1,a.lineNumWidth=a.lineNumInnerWidth=a.lineNumChars=null,a.alignWidgets=!1,a.cachedCharWidth=a.cachedTextHeight=a.cachedPaddingH=null,a.maxLine=null,a.maxLineLength=0,a.maxLineChanged=!1,a.wheelDX=a.wheelDY=a.wheelStartX=a.wheelStartY=null,a.shift=!1,a.selForContextMenu=null,a.activeTouch=null,a.gutterSpecs=Ea(i.gutters,i.lineNumbers),vu(a),s.init(a)}var Pa=0,ji=null;w?ji=-.53:g?ji=15:L?ji=-.7:B&&(ji=-1/3);function Rc(e){var n=e.wheelDeltaX,s=e.wheelDeltaY;return n==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(n=e.detail),s==null&&e.detail&&e.axis==e.VERTICAL_AXIS?s=e.detail:s==null&&(s=e.wheelDelta),{x:n,y:s}}function Ss(e){var n=Rc(e);return n.x*=ji,n.y*=ji,n}function $s(e,n){L&&Y==102&&(e.display.chromeScrollHack==null?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout(function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""},100));var s=Rc(n),i=s.x,a=s.y,h=ji;n.deltaMode===0&&(i=n.deltaX,a=n.deltaY,h=1);var y=e.display,b=y.scroller,S=b.scrollWidth>b.clientWidth,j=b.scrollHeight>b.clientHeight;if(i&&S||a&&j){if(a&&G&&N){e:for(var F=n.target,K=y.view;F!=b;F=F.parentNode)for(var oe=0;oe<K.length;oe++)if(K[oe].node==F){e.display.currentWheelTarget=F;break e}}if(i&&!g&&!U&&h!=null){a&&j&&xs(e,Math.max(0,b.scrollTop+a*h)),Vi(e,Math.max(0,b.scrollLeft+i*h)),(!a||a&&j)&&bn(n),y.wheelStartX=null;return}if(a&&h!=null){var re=a*h,ge=e.doc.scrollTop,ke=ge+y.wrapper.clientHeight;re<0?ge=Math.max(0,ge+re-50):ke=Math.min(e.doc.height,ke+re+50),Qi(e,{top:ge,bottom:ke})}Pa<20&&n.deltaMode!==0&&(y.wheelStartX==null?(y.wheelStartX=b.scrollLeft,y.wheelStartY=b.scrollTop,y.wheelDX=i,y.wheelDY=a,setTimeout(function(){if(y.wheelStartX!=null){var Ae=b.scrollLeft-y.wheelStartX,Ne=b.scrollTop-y.wheelStartY,Fe=Ne&&y.wheelDY&&Ne/y.wheelDY||Ae&&y.wheelDX&&Ae/y.wheelDX;y.wheelStartX=y.wheelStartY=null,Fe&&(ji=(ji*Pa+Fe)/(Pa+1),++Pa)}},200)):(y.wheelDX+=i,y.wheelDY+=a))}}var Xn=function(e,n){this.ranges=e,this.primIndex=n};Xn.prototype.primary=function(){return this.ranges[this.primIndex]},Xn.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var n=0;n<this.ranges.length;n++){var s=this.ranges[n],i=e.ranges[n];if(!Ct(s.anchor,i.anchor)||!Ct(s.head,i.head))return!1}return!0},Xn.prototype.deepCopy=function(){for(var e=[],n=0;n<this.ranges.length;n++)e[n]=new Lt(Qt(this.ranges[n].anchor),Qt(this.ranges[n].head));return new Xn(e,this.primIndex)},Xn.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Xn.prototype.contains=function(e,n){n||(n=e);for(var s=0;s<this.ranges.length;s++){var i=this.ranges[s];if(Be(n,i.from())>=0&&Be(e,i.to())<=0)return s}return-1};var Lt=function(e,n){this.anchor=e,this.head=n};Lt.prototype.from=function(){return Kr(this.anchor,this.head)},Lt.prototype.to=function(){return kn(this.anchor,this.head)},Lt.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function Lr(e,n,s){var i=e&&e.options.selectionsMayTouch,a=n[s];n.sort(function(oe,re){return Be(oe.from(),re.from())}),s=Ke(n,a);for(var h=1;h<n.length;h++){var y=n[h],b=n[h-1],S=Be(b.to(),y.from());if(i&&!y.empty()?S>0:S>=0){var j=Kr(b.from(),y.from()),F=kn(b.to(),y.to()),K=b.empty()?y.from()==y.head:b.from()==b.head;h<=s&&--s,n.splice(--h,2,new Lt(K?F:j,K?j:F))}}return new Xn(n,s)}function zn(e,n){return new Xn([new Lt(e,n||e)],0)}function Fn(e){return e.text?pe(e.from.line+e.text.length-1,Je(e.text).length+(e.text.length==1?e.from.ch:0)):e.to}function _s(e,n){if(Be(e,n.from)<0)return e;if(Be(e,n.to)<=0)return Fn(n);var s=e.line+n.text.length-(n.to.line-n.from.line)-1,i=e.ch;return e.line==n.to.line&&(i+=Fn(n).ch-n.to.ch),pe(s,i)}function ui(e,n){for(var s=[],i=0;i<e.sel.ranges.length;i++){var a=e.sel.ranges[i];s.push(new Lt(_s(a.anchor,n),_s(a.head,n)))}return Lr(e.cm,s,e.sel.primIndex)}function Ni(e,n,s){return e.line==n.line?pe(s.line,e.ch-n.ch+s.ch):pe(s.line+(e.line-n.line),e.ch)}function Ks(e,n,s){for(var i=[],a=pe(e.first,0),h=a,y=0;y<n.length;y++){var b=n[y],S=Ni(b.from,a,h),j=Ni(Fn(b),a,h);if(a=b.to,h=j,s=="around"){var F=e.sel.ranges[y],K=Be(F.head,F.anchor)<0;i[y]=new Lt(K?j:S,K?S:j)}else i[y]=new Lt(S,S)}return new Xn(i,e.sel.primIndex)}function Sl(e){e.doc.mode=Bt(e.options,e.doc.modeOption),Gs(e)}function Gs(e){e.doc.iter(function(n){n.stateAfter&&(n.stateAfter=null),n.styles&&(n.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,qs(e,100),e.state.modeGen++,e.curOp&&sr(e)}function _l(e,n){return n.from.ch==0&&n.to.ch==0&&Je(n.text)==""&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function gr(e,n,s,i){function a(Fe){return s?s[Fe]:null}function h(Fe,ze,Ge){Gd(Fe,ze,Ge,i),Mn(Fe,"change",Fe,n)}function y(Fe,ze){for(var Ge=[],lt=Fe;lt<ze;++lt)Ge.push(new ki(j[lt],a(lt),i));return Ge}var b=n.from,S=n.to,j=n.text,F=Xe(e,b.line),K=Xe(e,S.line),oe=Je(j),re=a(j.length-1),ge=S.line-b.line;if(n.full)e.insert(0,y(0,j.length)),e.remove(j.length,e.size-j.length);else if(_l(e,n)){var ke=y(0,j.length-1);h(K,K.text,re),ge&&e.remove(b.line,ge),ke.length&&e.insert(b.line,ke)}else if(F==K)if(j.length==1)h(F,F.text.slice(0,b.ch)+oe+F.text.slice(S.ch),re);else{var Ae=y(1,j.length-1);Ae.push(new ki(oe+F.text.slice(S.ch),re,i)),h(F,F.text.slice(0,b.ch)+j[0],a(0)),e.insert(b.line+1,Ae)}else if(j.length==1)h(F,F.text.slice(0,b.ch)+j[0]+K.text.slice(S.ch),a(0)),e.remove(b.line+1,ge);else{h(F,F.text.slice(0,b.ch)+j[0],a(0)),h(K,oe+K.text.slice(S.ch),re);var Ne=y(1,j.length-1);ge>1&&e.remove(b.line+1,ge-1),e.insert(b.line+1,Ne)}Mn(e,"change",e,n)}function Ln(e,n,s){function i(a,h,y){if(a.linked)for(var b=0;b<a.linked.length;++b){var S=a.linked[b];if(S.doc!=h){var j=y&&S.sharedHist;s&&!j||(n(S.doc,j),i(S.doc,a,j))}}}i(e,null,!0)}function rn(e,n){if(n.cm)throw new Error("This document is already in use.");e.doc=n,n.cm=e,xo(e),Sl(e),Jr(e),e.options.direction=n.direction,e.options.lineWrapping||co(e),e.options.mode=n.modeOption,sr(e)}function Jr(e){(e.doc.direction=="rtl"?H:Le)(e.display.lineDiv,"CodeMirror-rtl")}function Ic(e){Pn(e,function(){Jr(e),sr(e)})}function Eo(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function Po(e,n){var s={from:Qt(n.from),to:Fn(n),text:si(e,n.from,n.to)};return Mc(e,s,n.from.line,n.to.line+1),Ln(e,function(i){return Mc(i,s,n.from.line,n.to.line+1)},!0),s}function Cl(e){for(;e.length;){var n=Je(e);if(n.ranges)e.pop();else break}}function Oc(e,n){if(n)return Cl(e.done),Je(e.done);if(e.done.length&&!Je(e.done).ranges)return Je(e.done);if(e.done.length>1&&!e.done[e.done.length-2].ranges)return e.done.pop(),Je(e.done)}function Lo(e,n,s,i){var a=e.history;a.undone.length=0;var h=+new Date,y,b;if((a.lastOp==i||a.lastOrigin==n.origin&&n.origin&&(n.origin.charAt(0)=="+"&&a.lastModTime>h-(e.cm?e.cm.options.historyEventDelay:500)||n.origin.charAt(0)=="*"))&&(y=Oc(a,a.lastOp==i)))b=Je(y.changes),Be(n.from,n.to)==0&&Be(n.from,b.to)==0?b.to=Fn(n):y.changes.push(Po(e,n));else{var S=Je(a.done);for((!S||!S.ranges)&&Aa(e.sel,a.done),y={changes:[Po(e,n)],generation:a.generation},a.done.push(y);a.done.length>a.undoDepth;)a.done.shift(),a.done[0].ranges||a.done.shift()}a.done.push(s),a.generation=++a.maxGeneration,a.lastModTime=a.lastSelTime=h,a.lastOp=a.lastSelOp=i,a.lastOrigin=a.lastSelOrigin=n.origin,b||Rt(e,"historyAdded")}function Dc(e,n,s,i){var a=n.charAt(0);return a=="*"||a=="+"&&s.ranges.length==i.ranges.length&&s.somethingSelected()==i.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function La(e,n,s,i){var a=e.history,h=i&&i.origin;s==a.lastSelOp||h&&a.lastSelOrigin==h&&(a.lastModTime==a.lastSelTime&&a.lastOrigin==h||Dc(e,h,Je(a.done),n))?a.done[a.done.length-1]=n:Aa(n,a.done),a.lastSelTime=+new Date,a.lastSelOrigin=h,a.lastSelOp=s,i&&i.clearRedo!==!1&&Cl(a.undone)}function Aa(e,n){var s=Je(n);s&&s.ranges&&s.equals(e)||n.push(e)}function Mc(e,n,s,i){var a=n["spans_"+e.id],h=0;e.iter(Math.max(e.first,s),Math.min(e.first+e.size,i),function(y){y.markedSpans&&((a||(a=n["spans_"+e.id]={}))[h]=y.markedSpans),++h})}function Ao(e){if(!e)return null;for(var n,s=0;s<e.length;++s)e[s].marker.explicitlyCleared?n||(n=e.slice(0,s)):n&&n.push(e[s]);return n?n.length?n:null:e}function Tl(e,n){var s=n["spans_"+e.id];if(!s)return null;for(var i=[],a=0;a<n.text.length;++a)i.push(Ao(s[a]));return i}function xu(e,n){var s=Tl(e,n),i=ps(e,n);if(!s)return i;if(!i)return s;for(var a=0;a<s.length;++a){var h=s[a],y=i[a];if(h&&y)e:for(var b=0;b<y.length;++b){for(var S=y[b],j=0;j<h.length;++j)if(h[j].marker==S.marker)continue e;h.push(S)}else y&&(s[a]=y)}return s}function Ys(e,n,s){for(var i=[],a=0;a<e.length;++a){var h=e[a];if(h.ranges){i.push(s?Xn.prototype.deepCopy.call(h):h);continue}var y=h.changes,b=[];i.push({changes:b});for(var S=0;S<y.length;++S){var j=y[S],F=void 0;if(b.push({from:j.from,to:j.to,text:j.text}),n)for(var K in j)(F=K.match(/^spans_(\d+)$/))&&Ke(n,Number(F[1]))>-1&&(Je(b)[K]=j[K],delete j[K])}}return i}function Cs(e,n,s,i){if(i){var a=e.anchor;if(s){var h=Be(n,a)<0;h!=Be(s,a)<0?(a=n,n=s):h!=Be(n,s)<0&&(n=s)}return new Lt(a,n)}else return new Lt(s||n,n)}function Ro(e,n,s,i,a){a==null&&(a=e.cm&&(e.cm.display.shift||e.extend)),Wn(e,new Xn([Cs(e.sel.primary(),n,s,a)],0),i)}function Io(e,n,s){for(var i=[],a=e.cm&&(e.cm.display.shift||e.extend),h=0;h<e.sel.ranges.length;h++)i[h]=Cs(e.sel.ranges[h],n[h],null,a);var y=Lr(e.cm,i,e.sel.primIndex);Wn(e,y,s)}function Ra(e,n,s,i){var a=e.sel.ranges.slice(0);a[n]=s,Wn(e,Lr(e.cm,a,e.sel.primIndex),i)}function Vs(e,n,s,i){Wn(e,zn(n,s),i)}function bu(e,n,s){var i={ranges:n.ranges,update:function(a){this.ranges=[];for(var h=0;h<a.length;h++)this.ranges[h]=new Lt(vt(e,a[h].anchor),vt(e,a[h].head))},origin:s&&s.origin};return Rt(e,"beforeSelectionChange",e,i),e.cm&&Rt(e.cm,"beforeSelectionChange",e.cm,i),i.ranges!=n.ranges?Lr(e.cm,i.ranges,i.ranges.length-1):n}function jl(e,n,s){var i=e.history.done,a=Je(i);a&&a.ranges?(i[i.length-1]=n,Ia(e,n,s)):Wn(e,n,s)}function Wn(e,n,s){Ia(e,n,s),La(e,e.sel,e.cm?e.cm.curOp.id:NaN,s)}function Ia(e,n,s){(mn(e,"beforeSelectionChange")||e.cm&&mn(e.cm,"beforeSelectionChange"))&&(n=bu(e,n,s));var i=s&&s.bias||(Be(n.primary().head,e.sel.primary().head)<0?-1:1);Js(e,Ts(e,n,i,!0)),!(s&&s.scroll===!1)&&e.cm&&e.cm.getOption("readOnly")!="nocursor"&&Hs(e.cm)}function Js(e,n){n.equals(e.sel)||(e.sel=n,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,xn(e.cm)),Mn(e,"cursorActivity",e))}function Wr(e){Js(e,Ts(e,e.sel,null,!1))}function Ts(e,n,s,i){for(var a,h=0;h<n.ranges.length;h++){var y=n.ranges[h],b=n.ranges.length==e.sel.ranges.length&&e.sel.ranges[h],S=Oo(e,y.anchor,b&&b.anchor,s,i),j=y.head==y.anchor?S:Oo(e,y.head,b&&b.head,s,i);(a||S!=y.anchor||j!=y.head)&&(a||(a=n.ranges.slice(0,h)),a[h]=new Lt(S,j))}return a?Lr(e.cm,a,n.primIndex):n}function js(e,n,s,i,a){var h=Xe(e,n.line);if(h.markedSpans)for(var y=0;y<h.markedSpans.length;++y){var b=h.markedSpans[y],S=b.marker,j="selectLeft"in S?!S.selectLeft:S.inclusiveLeft,F="selectRight"in S?!S.selectRight:S.inclusiveRight;if((b.from==null||(j?b.from<=n.ch:b.from<n.ch))&&(b.to==null||(F?b.to>=n.ch:b.to>n.ch))){if(a&&(Rt(S,"beforeCursorEnter"),S.explicitlyCleared))if(h.markedSpans){--y;continue}else break;if(!S.atomic)continue;if(s){var K=S.find(i<0?1:-1),oe=void 0;if((i<0?F:j)&&(K=Ei(e,K,-i,K&&K.line==n.line?h:null)),K&&K.line==n.line&&(oe=Be(K,s))&&(i<0?oe<0:oe>0))return js(e,K,n,i,a)}var re=S.find(i<0?-1:1);return(i<0?j:F)&&(re=Ei(e,re,i,re.line==n.line?h:null)),re?js(e,re,n,i,a):null}}return n}function Oo(e,n,s,i,a){var h=i||1,y=js(e,n,s,h,a)||!a&&js(e,n,s,h,!0)||js(e,n,s,-h,a)||!a&&js(e,n,s,-h,!0);return y||(e.cantEdit=!0,pe(e.first,0))}function Ei(e,n,s,i){return s<0&&n.ch==0?n.line>e.first?vt(e,pe(n.line-1)):null:s>0&&n.ch==(i||Xe(e,n.line)).text.length?n.line<e.first+e.size-1?pe(n.line+1,0):null:new pe(n.line,n.ch+s)}function Zi(e){e.setSelection(pe(e.firstLine(),0),pe(e.lastLine()),Ht)}function Nl(e,n,s){var i={canceled:!1,from:n.from,to:n.to,text:n.text,origin:n.origin,cancel:function(){return i.canceled=!0}};return s&&(i.update=function(a,h,y,b){a&&(i.from=vt(e,a)),h&&(i.to=vt(e,h)),y&&(i.text=y),b!==void 0&&(i.origin=b)}),Rt(e,"beforeChange",e,i),e.cm&&Rt(e.cm,"beforeChange",e.cm,i),i.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:i.from,to:i.to,text:i.text,origin:i.origin}}function Xs(e,n,s){if(e.cm){if(!e.cm.curOp)return pn(e.cm,Xs)(e,n,s);if(e.cm.state.suppressEdits)return}if(!((mn(e,"beforeChange")||e.cm&&mn(e.cm,"beforeChange"))&&(n=Nl(e,n,!0),!n))){var i=ai&&!s&&uo(e,n.from,n.to);if(i)for(var a=i.length-1;a>=0;--a)Pi(e,{from:i[a].from,to:i[a].to,text:a?[""]:n.text,origin:n.origin});else Pi(e,n)}}function Pi(e,n){if(!(n.text.length==1&&n.text[0]==""&&Be(n.from,n.to)==0)){var s=ui(e,n);Lo(e,n,s,e.cm?e.cm.curOp.id:NaN),Oa(e,n,s,ps(e,n));var i=[];Ln(e,function(a,h){!h&&Ke(i,a.history)==-1&&(Ma(a.history,n),i.push(a.history)),Oa(a,n,null,ps(a,n))})}}function ci(e,n,s){var i=e.cm&&e.cm.state.suppressEdits;if(!(i&&!s)){for(var a=e.history,h,y=e.sel,b=n=="undo"?a.done:a.undone,S=n=="undo"?a.undone:a.done,j=0;j<b.length&&(h=b[j],!(s?h.ranges&&!h.equals(e.sel):!h.ranges));j++);if(j!=b.length){for(a.lastOrigin=a.lastSelOrigin=null;;)if(h=b.pop(),h.ranges){if(Aa(h,S),s&&!h.equals(e.sel)){Wn(e,h,{clearRedo:!1});return}y=h}else if(i){b.push(h);return}else break;var F=[];Aa(y,S),S.push({changes:F,generation:a.generation}),a.generation=h.generation||++a.maxGeneration;for(var K=mn(e,"beforeChange")||e.cm&&mn(e.cm,"beforeChange"),oe=function(ke){var Ae=h.changes[ke];if(Ae.origin=n,K&&!Nl(e,Ae,!1))return b.length=0,{};F.push(Po(e,Ae));var Ne=ke?ui(e,Ae):Je(b);Oa(e,Ae,Ne,xu(e,Ae)),!ke&&e.cm&&e.cm.scrollIntoView({from:Ae.from,to:Fn(Ae)});var Fe=[];Ln(e,function(ze,Ge){!Ge&&Ke(Fe,ze.history)==-1&&(Ma(ze.history,Ae),Fe.push(ze.history)),Oa(ze,Ae,null,xu(ze,Ae))})},re=h.changes.length-1;re>=0;--re){var ge=oe(re);if(ge)return ge.v}}}}function Do(e,n){if(n!=0&&(e.first+=n,e.sel=new Xn(ft(e.sel.ranges,function(a){return new Lt(pe(a.anchor.line+n,a.anchor.ch),pe(a.head.line+n,a.head.ch))}),e.sel.primIndex),e.cm)){sr(e.cm,e.first,e.first-n,n);for(var s=e.cm.display,i=s.viewFrom;i<s.viewTo;i++)Gi(e.cm,i,"gutter")}}function Oa(e,n,s,i){if(e.cm&&!e.cm.curOp)return pn(e.cm,Oa)(e,n,s,i);if(n.to.line<e.first){Do(e,n.text.length-1-(n.to.line-n.from.line));return}if(!(n.from.line>e.lastLine())){if(n.from.line<e.first){var a=n.text.length-1-(e.first-n.from.line);Do(e,a),n={from:pe(e.first,0),to:pe(n.to.line+a,n.to.ch),text:[Je(n.text)],origin:n.origin}}var h=e.lastLine();n.to.line>h&&(n={from:n.from,to:pe(h,Xe(e,h).text.length),text:[n.text[0]],origin:n.origin}),n.removed=si(e,n.from,n.to),s||(s=ui(e,n)),e.cm?El(e.cm,n,i):gr(e,n,i),Ia(e,s,Ht),e.cantEdit&&Oo(e,pe(e.firstLine(),0))&&(e.cantEdit=!1)}}function El(e,n,s){var i=e.doc,a=e.display,h=n.from,y=n.to,b=!1,S=h.line;e.options.lineWrapping||(S=E($t(Xe(i,h.line))),i.iter(S,y.line+1,function(re){if(re==a.maxLine)return b=!0,!0})),i.sel.contains(n.from,n.to)>-1&&xn(e),gr(i,n,s,Fs(e)),e.options.lineWrapping||(i.iter(S,h.line+n.text.length,function(re){var ge=Ui(re);ge>a.maxLineLength&&(a.maxLine=re,a.maxLineLength=ge,a.maxLineChanged=!0,b=!1)}),b&&(e.curOp.updateMaxLine=!0)),zr(i,h.line),qs(e,400);var j=n.text.length-(y.line-h.line)-1;n.full?sr(e):h.line==y.line&&n.text.length==1&&!_l(e.doc,n)?Gi(e,h.line,"text"):sr(e,h.line,y.line+1,j);var F=mn(e,"changes"),K=mn(e,"change");if(K||F){var oe={from:h,to:y,text:n.text,removed:n.removed,origin:n.origin};K&&Mn(e,"change",e,oe),F&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(oe)}e.display.selForContextMenu=null}function Qs(e,n,s,i,a){var h;i||(i=s),Be(i,s)<0&&(h=[i,s],s=h[0],i=h[1]),typeof n=="string"&&(n=e.splitLines(n)),Xs(e,{from:s,to:i,text:n,origin:a})}function Da(e,n,s,i){s<e.line?e.line+=i:n<e.line&&(e.line=n,e.ch=0)}function di(e,n,s,i){for(var a=0;a<e.length;++a){var h=e[a],y=!0;if(h.ranges){h.copied||(h=e[a]=h.deepCopy(),h.copied=!0);for(var b=0;b<h.ranges.length;b++)Da(h.ranges[b].anchor,n,s,i),Da(h.ranges[b].head,n,s,i);continue}for(var S=0;S<h.changes.length;++S){var j=h.changes[S];if(s<j.from.line)j.from=pe(j.from.line+i,j.from.ch),j.to=pe(j.to.line+i,j.to.ch);else if(n<=j.to.line){y=!1;break}}y||(e.splice(0,a+1),a=0)}}function Ma(e,n){var s=n.from.line,i=n.to.line,a=n.text.length-(i-s)-1;di(e.done,s,i,a),di(e.undone,s,i,a)}function es(e,n,s,i){var a=n,h=n;return typeof n=="number"?h=Xe(e,sl(e,n)):a=E(n),a==null?null:(i(h,a)&&e.cm&&Gi(e.cm,a,s),h)}function pi(e){this.lines=e,this.parent=null;for(var n=0,s=0;s<e.length;++s)e[s].parent=this,n+=e[s].height;this.height=n}pi.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,n){for(var s=e,i=e+n;s<i;++s){var a=this.lines[s];this.height-=a.height,Xl(a),Mn(a,"delete")}this.lines.splice(e,n)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,n,s){this.height+=s,this.lines=this.lines.slice(0,e).concat(n).concat(this.lines.slice(e));for(var i=0;i<n.length;++i)n[i].parent=this},iterN:function(e,n,s){for(var i=e+n;e<i;++e)if(s(this.lines[e]))return!0}};function Zs(e){this.children=e;for(var n=0,s=0,i=0;i<e.length;++i){var a=e[i];n+=a.chunkSize(),s+=a.height,a.parent=this}this.size=n,this.height=s,this.parent=null}Zs.prototype={chunkSize:function(){return this.size},removeInner:function(e,n){this.size-=n;for(var s=0;s<this.children.length;++s){var i=this.children[s],a=i.chunkSize();if(e<a){var h=Math.min(n,a-e),y=i.height;if(i.removeInner(e,h),this.height-=y-i.height,a==h&&(this.children.splice(s--,1),i.parent=null),(n-=h)==0)break;e=0}else e-=a}if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof pi))){var b=[];this.collapse(b),this.children=[new pi(b)],this.children[0].parent=this}},collapse:function(e){for(var n=0;n<this.children.length;++n)this.children[n].collapse(e)},insertInner:function(e,n,s){this.size+=n.length,this.height+=s;for(var i=0;i<this.children.length;++i){var a=this.children[i],h=a.chunkSize();if(e<=h){if(a.insertInner(e,n,s),a.lines&&a.lines.length>50){for(var y=a.lines.length%25+25,b=y;b<a.lines.length;){var S=new pi(a.lines.slice(b,b+=25));a.height-=S.height,this.children.splice(++i,0,S),S.parent=this}a.lines=a.lines.slice(0,y),this.maybeSpill()}break}e-=h}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var n=e.children.splice(e.children.length-5,5),s=new Zs(n);if(e.parent){e.size-=s.size,e.height-=s.height;var a=Ke(e.parent.children,e);e.parent.children.splice(a+1,0,s)}else{var i=new Zs(e.children);i.parent=e,e.children=[i,s],e=i}s.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,n,s){for(var i=0;i<this.children.length;++i){var a=this.children[i],h=a.chunkSize();if(e<h){var y=Math.min(n,h-e);if(a.iterN(e,y,s))return!0;if((n-=y)==0)break;e=0}else e-=h}}};var Li=function(e,n,s){if(s)for(var i in s)s.hasOwnProperty(i)&&(this[i]=s[i]);this.doc=e,this.node=n};Li.prototype.clear=function(){var e=this.doc.cm,n=this.line.widgets,s=this.line,i=E(s);if(!(i==null||!n)){for(var a=0;a<n.length;++a)n[a]==this&&n.splice(a--,1);n.length||(s.widgets=null);var h=qi(this);Yn(s,Math.max(0,s.height-h)),e&&(Pn(e,function(){wu(e,s,-h),Gi(e,i,"widget")}),Mn(e,"lineWidgetCleared",e,this,i))}},Li.prototype.changed=function(){var e=this,n=this.height,s=this.doc.cm,i=this.line;this.height=null;var a=qi(this)-n;a&&(Er(this.doc,i)||Yn(i,i.height+a),s&&Pn(s,function(){s.curOp.forceUpdate=!0,wu(s,i,a),Mn(s,"lineWidgetChanged",s,e,E(i))}))},Nn(Li);function wu(e,n,s){Sn(n)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&vs(e,s)}function ku(e,n,s,i){var a=new Li(e,s,i),h=e.cm;return h&&a.noHScroll&&(h.display.alignWidgets=!0),es(e,n,"widget",function(y){var b=y.widgets||(y.widgets=[]);if(a.insertAt==null?b.push(a):b.splice(Math.min(b.length,Math.max(0,a.insertAt)),0,a),a.line=y,h&&!Er(e,y)){var S=Sn(y)<e.scrollTop;Yn(y,y.height+qi(a)),S&&vs(h,a.height),h.curOp.forceUpdate=!0}return!0}),h&&Mn(h,"lineWidgetAdded",h,a,typeof n=="number"?n:E(n)),a}var ln=0,hi=function(e,n){this.lines=[],this.type=n,this.doc=e,this.id=++ln};hi.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,n=e&&!e.curOp;if(n&&ws(e),mn(this,"clear")){var s=this.find();s&&Mn(this,"clear",s.from,s.to)}for(var i=null,a=null,h=0;h<this.lines.length;++h){var y=this.lines[h],b=Ds(y.markedSpans,this);e&&!this.collapsed?Gi(e,E(y),"text"):e&&(b.to!=null&&(a=E(y)),b.from!=null&&(i=E(y))),y.markedSpans=oo(y.markedSpans,b),b.from==null&&this.collapsed&&!Er(this.doc,y)&&e&&Yn(y,_i(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var S=0;S<this.lines.length;++S){var j=$t(this.lines[S]),F=Ui(j);F>e.display.maxLineLength&&(e.display.maxLine=j,e.display.maxLineLength=F,e.display.maxLineChanged=!0)}i!=null&&e&&this.collapsed&&sr(e,i,a+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&Wr(e.doc)),e&&Mn(e,"markerCleared",e,this,i,a),n&&Vr(e),this.parent&&this.parent.clear()}},hi.prototype.find=function(e,n){e==null&&this.type=="bookmark"&&(e=1);for(var s,i,a=0;a<this.lines.length;++a){var h=this.lines[a],y=Ds(h.markedSpans,this);if(y.from!=null&&(s=pe(n?h:E(h),y.from),e==-1))return s;if(y.to!=null&&(i=pe(n?h:E(h),y.to),e==1))return i}return s&&{from:s,to:i}},hi.prototype.changed=function(){var e=this,n=this.find(-1,!0),s=this,i=this.doc.cm;!n||!i||Pn(i,function(){var a=n.line,h=E(n.line),y=ul(i,h);if(y&&(cl(y),i.curOp.selectionChanged=i.curOp.forceUpdate=!0),i.curOp.updateMaxLine=!0,!Er(s.doc,a)&&s.height!=null){var b=s.height;s.height=null;var S=qi(s)-b;S&&Yn(a,a.height+S)}Mn(i,"markerChanged",i,e)})},hi.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(!n.maybeHiddenMarkers||Ke(n.maybeHiddenMarkers,this)==-1)&&(n.maybeUnhiddenMarkers||(n.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},hi.prototype.detachLine=function(e){if(this.lines.splice(Ke(this.lines,e),1),!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(n.maybeHiddenMarkers||(n.maybeHiddenMarkers=[])).push(this)}},Nn(hi);function Ns(e,n,s,i,a){if(i&&i.shared)return Pl(e,n,s,i,a);if(e.cm&&!e.cm.curOp)return pn(e.cm,Ns)(e,n,s,i,a);var h=new hi(e,a),y=Be(n,s);if(i&&Ue(i,h,!1),y>0||y==0&&h.clearWhenEmpty!==!1)return h;if(h.replacedWith&&(h.collapsed=!0,h.widgetNode=ee("span",[h.replacedWith],"CodeMirror-widget"),i.handleMouseEvents||h.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(h.widgetNode.insertLeft=!0)),h.collapsed){if(cn(e,n.line,n,s,h)||n.line!=s.line&&cn(e,s.line,n,s,h))throw new Error("Inserting collapsed marker partially overlapping an existing one");Os()}h.addToHistory&&Lo(e,{from:n,to:s,origin:"markText"},e.sel,NaN);var b=n.line,S=e.cm,j;if(e.iter(b,s.line+1,function(K){S&&h.collapsed&&!S.options.lineWrapping&&$t(K)==S.display.maxLine&&(j=!0),h.collapsed&&b!=n.line&&Yn(K,0),Ms(K,new Nr(h,b==n.line?n.ch:null,b==s.line?s.ch:null),e.cm&&e.cm.curOp),++b}),h.collapsed&&e.iter(n.line,s.line+1,function(K){Er(e,K)&&Yn(K,0)}),h.clearOnEnter&&rt(h,"beforeCursorEnter",function(){return h.clear()}),h.readOnly&&(Gr(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),h.collapsed&&(h.id=++ln,h.atomic=!0),S){if(j&&(S.curOp.updateMaxLine=!0),h.collapsed)sr(S,n.line,s.line+1);else if(h.className||h.startStyle||h.endStyle||h.css||h.attributes||h.title)for(var F=n.line;F<=s.line;F++)Gi(S,F,"text");h.atomic&&Wr(S.doc),Mn(S,"markerAdded",S,h)}return h}var ea=function(e,n){this.markers=e,this.primary=n;for(var s=0;s<e.length;++s)e[s].parent=this};ea.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();Mn(this,"clear")}},ea.prototype.find=function(e,n){return this.primary.find(e,n)},Nn(ea);function Pl(e,n,s,i,a){i=Ue(i),i.shared=!1;var h=[Ns(e,n,s,i,a)],y=h[0],b=i.widgetNode;return Ln(e,function(S){b&&(i.widgetNode=b.cloneNode(!0)),h.push(Ns(S,vt(S,n),vt(S,s),i,a));for(var j=0;j<S.linked.length;++j)if(S.linked[j].isParent)return;y=Je(h)}),new ea(h,y)}function Ll(e){return e.findMarks(pe(e.first,0),e.clipPos(pe(e.lastLine())),function(n){return n.parent})}function ta(e,n){for(var s=0;s<n.length;s++){var i=n[s],a=i.find(),h=e.clipPos(a.from),y=e.clipPos(a.to);if(Be(h,y)){var b=Ns(e,h,y,i.primary,i.primary.type);i.markers.push(b),b.parent=i}}}function hn(e){for(var n=function(i){var a=e[i],h=[a.primary.doc];Ln(a.primary.doc,function(S){return h.push(S)});for(var y=0;y<a.markers.length;y++){var b=a.markers[y];Ke(h,b.doc)==-1&&(b.parent=null,a.markers.splice(y--,1))}},s=0;s<e.length;s++)n(s)}var Hn=0,It=function(e,n,s,i,a){if(!(this instanceof It))return new It(e,n,s,i,a);s==null&&(s=0),Zs.call(this,[new pi([new ki("",null)])]),this.first=s,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=s;var h=pe(s,0);this.sel=zn(h),this.history=new Eo(null),this.id=++Hn,this.modeOption=n,this.lineSep=i,this.direction=a=="rtl"?"rtl":"ltr",this.extend=!1,typeof e=="string"&&(e=this.splitLines(e)),gr(this,{from:h,to:h,text:e}),Wn(this,zn(h),Ht)};It.prototype=he(Zs.prototype,{constructor:It,iter:function(e,n,s){s?this.iterN(e-this.first,n-e,s):this.iterN(this.first,this.first+this.size,e)},insert:function(e,n){for(var s=0,i=0;i<n.length;++i)s+=n[i].height;this.insertInner(e-this.first,n,s)},remove:function(e,n){this.removeInner(e-this.first,n)},getValue:function(e){var n=cs(this,this.first,this.first+this.size);return e===!1?n:n.join(e||this.lineSeparator())},setValue:gn(function(e){var n=pe(this.first,0),s=this.first+this.size-1;Xs(this,{from:n,to:pe(s,Xe(this,s).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&_o(this.cm,0,0),Wn(this,zn(n),Ht)}),replaceRange:function(e,n,s,i){n=vt(this,n),s=s?vt(this,s):n,Qs(this,e,n,s,i)},getRange:function(e,n,s){var i=si(this,vt(this,e),vt(this,n));return s===!1?i:s===""?i.join(""):i.join(s||this.lineSeparator())},getLine:function(e){var n=this.getLineHandle(e);return n&&n.text},getLineHandle:function(e){if(me(this,e))return Xe(this,e)},getLineNumber:function(e){return E(e)},getLineHandleVisualStart:function(e){return typeof e=="number"&&(e=Xe(this,e)),$t(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return vt(this,e)},getCursor:function(e){var n=this.sel.primary(),s;return e==null||e=="head"?s=n.head:e=="anchor"?s=n.anchor:e=="end"||e=="to"||e===!1?s=n.to():s=n.from(),s},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:gn(function(e,n,s){Vs(this,vt(this,typeof e=="number"?pe(e,n||0):e),null,s)}),setSelection:gn(function(e,n,s){Vs(this,vt(this,e),vt(this,n||e),s)}),extendSelection:gn(function(e,n,s){Ro(this,vt(this,e),n&&vt(this,n),s)}),extendSelections:gn(function(e,n){Io(this,so(this,e),n)}),extendSelectionsBy:gn(function(e,n){var s=ft(this.sel.ranges,e);Io(this,so(this,s),n)}),setSelections:gn(function(e,n,s){if(e.length){for(var i=[],a=0;a<e.length;a++)i[a]=new Lt(vt(this,e[a].anchor),vt(this,e[a].head||e[a].anchor));n==null&&(n=Math.min(e.length-1,this.sel.primIndex)),Wn(this,Lr(this.cm,i,n),s)}}),addSelection:gn(function(e,n,s){var i=this.sel.ranges.slice(0);i.push(new Lt(vt(this,e),vt(this,n||e))),Wn(this,Lr(this.cm,i,i.length-1),s)}),getSelection:function(e){for(var n=this.sel.ranges,s,i=0;i<n.length;i++){var a=si(this,n[i].from(),n[i].to());s=s?s.concat(a):a}return e===!1?s:s.join(e||this.lineSeparator())},getSelections:function(e){for(var n=[],s=this.sel.ranges,i=0;i<s.length;i++){var a=si(this,s[i].from(),s[i].to());e!==!1&&(a=a.join(e||this.lineSeparator())),n[i]=a}return n},replaceSelection:function(e,n,s){for(var i=[],a=0;a<this.sel.ranges.length;a++)i[a]=e;this.replaceSelections(i,n,s||"+input")},replaceSelections:gn(function(e,n,s){for(var i=[],a=this.sel,h=0;h<a.ranges.length;h++){var y=a.ranges[h];i[h]={from:y.from(),to:y.to(),text:this.splitLines(e[h]),origin:s}}for(var b=n&&n!="end"&&Ks(this,i,n),S=i.length-1;S>=0;S--)Xs(this,i[S]);b?jl(this,b):this.cm&&Hs(this.cm)}),undo:gn(function(){ci(this,"undo")}),redo:gn(function(){ci(this,"redo")}),undoSelection:gn(function(){ci(this,"undo",!0)}),redoSelection:gn(function(){ci(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,n=0,s=0,i=0;i<e.done.length;i++)e.done[i].ranges||++n;for(var a=0;a<e.undone.length;a++)e.undone[a].ranges||++s;return{undo:n,redo:s}},clearHistory:function(){var e=this;this.history=new Eo(this.history),Ln(this,function(n){return n.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Ys(this.history.done),undone:Ys(this.history.undone)}},setHistory:function(e){var n=this.history=new Eo(this.history);n.done=Ys(e.done.slice(0),null,!0),n.undone=Ys(e.undone.slice(0),null,!0)},setGutterMarker:gn(function(e,n,s){return es(this,e,"gutter",function(i){var a=i.gutterMarkers||(i.gutterMarkers={});return a[n]=s,!s&&et(a)&&(i.gutterMarkers=null),!0})}),clearGutter:gn(function(e){var n=this;this.iter(function(s){s.gutterMarkers&&s.gutterMarkers[e]&&es(n,s,"gutter",function(){return s.gutterMarkers[e]=null,et(s.gutterMarkers)&&(s.gutterMarkers=null),!0})})}),lineInfo:function(e){var n;if(typeof e=="number"){if(!me(this,e)||(n=e,e=Xe(this,e),!e))return null}else if(n=E(e),n==null)return null;return{line:n,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:gn(function(e,n,s){return es(this,e,n=="gutter"?"gutter":"class",function(i){var a=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass";if(!i[a])i[a]=s;else{if(ne(s).test(i[a]))return!1;i[a]+=" "+s}return!0})}),removeLineClass:gn(function(e,n,s){return es(this,e,n=="gutter"?"gutter":"class",function(i){var a=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass",h=i[a];if(h)if(s==null)i[a]=null;else{var y=h.match(ne(s));if(!y)return!1;var b=y.index+y[0].length;i[a]=h.slice(0,y.index)+(!y.index||b==h.length?"":" ")+h.slice(b)||null}else return!1;return!0})}),addLineWidget:gn(function(e,n,s){return ku(this,e,n,s)}),removeLineWidget:function(e){e.clear()},markText:function(e,n,s){return Ns(this,vt(this,e),vt(this,n),s,s&&s.type||"range")},setBookmark:function(e,n){var s={replacedWith:n&&(n.nodeType==null?n.widget:n),insertLeft:n&&n.insertLeft,clearWhenEmpty:!1,shared:n&&n.shared,handleMouseEvents:n&&n.handleMouseEvents};return e=vt(this,e),Ns(this,e,e,s,"bookmark")},findMarksAt:function(e){e=vt(this,e);var n=[],s=Xe(this,e.line).markedSpans;if(s)for(var i=0;i<s.length;++i){var a=s[i];(a.from==null||a.from<=e.ch)&&(a.to==null||a.to>=e.ch)&&n.push(a.marker.parent||a.marker)}return n},findMarks:function(e,n,s){e=vt(this,e),n=vt(this,n);var i=[],a=e.line;return this.iter(e.line,n.line+1,function(h){var y=h.markedSpans;if(y)for(var b=0;b<y.length;b++){var S=y[b];!(S.to!=null&&a==e.line&&e.ch>=S.to||S.from==null&&a!=e.line||S.from!=null&&a==n.line&&S.from>=n.ch)&&(!s||s(S.marker))&&i.push(S.marker.parent||S.marker)}++a}),i},getAllMarks:function(){var e=[];return this.iter(function(n){var s=n.markedSpans;if(s)for(var i=0;i<s.length;++i)s[i].from!=null&&e.push(s[i].marker)}),e},posFromIndex:function(e){var n,s=this.first,i=this.lineSeparator().length;return this.iter(function(a){var h=a.text.length+i;if(h>e)return n=e,!0;e-=h,++s}),vt(this,pe(s,n))},indexFromPos:function(e){e=vt(this,e);var n=e.ch;if(e.line<this.first||e.ch<0)return 0;var s=this.lineSeparator().length;return this.iter(this.first,e.line,function(i){n+=i.text.length+s}),n},copy:function(e){var n=new It(cs(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,n.sel=this.sel,n.extend=!1,e&&(n.history.undoDepth=this.history.undoDepth,n.setHistory(this.getHistory())),n},linkedDoc:function(e){e||(e={});var n=this.first,s=this.first+this.size;e.from!=null&&e.from>n&&(n=e.from),e.to!=null&&e.to<s&&(s=e.to);var i=new It(cs(this,n,s),e.mode||this.modeOption,n,this.lineSep,this.direction);return e.sharedHist&&(i.history=this.history),(this.linked||(this.linked=[])).push({doc:i,sharedHist:e.sharedHist}),i.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],ta(i,Ll(this)),i},unlinkDoc:function(e){if(e instanceof en&&(e=e.doc),this.linked)for(var n=0;n<this.linked.length;++n){var s=this.linked[n];if(s.doc==e){this.linked.splice(n,1),e.unlinkDoc(this),hn(Ll(this));break}}if(e.history==this.history){var i=[e.id];Ln(e,function(a){return i.push(a.id)},!0),e.history=new Eo(null),e.history.done=Ys(this.history.done,i),e.history.undone=Ys(this.history.undone,i)}},iterLinkedDocs:function(e){Ln(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):jr(e)},lineSeparator:function(){return this.lineSep||`
`},setDirection:gn(function(e){e!="rtl"&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(n){return n.order=null}),this.cm&&Ic(this.cm))})}),It.prototype.eachLine=It.prototype.iter;var Mo=0;function zo(e){var n=this;if(Zn(n),!(qt(n,e)||$i(n.display,e))){bn(e),w&&(Mo=+new Date);var s=gs(n,e,!0),i=e.dataTransfer.files;if(!(!s||n.isReadOnly()))if(i&&i.length&&window.FileReader&&window.File)for(var a=i.length,h=Array(a),y=0,b=function(){++y==a&&pn(n,function(){s=vt(n.doc,s);var re={from:s,to:s,text:n.doc.splitLines(h.filter(function(ge){return ge!=null}).join(n.doc.lineSeparator())),origin:"paste"};Xs(n.doc,re),jl(n.doc,zn(vt(n.doc,s),vt(n.doc,Fn(re))))})()},S=function(re,ge){if(n.options.allowDropFileTypes&&Ke(n.options.allowDropFileTypes,re.type)==-1){b();return}var ke=new FileReader;ke.onerror=function(){return b()},ke.onload=function(){var Ae=ke.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(Ae)){b();return}h[ge]=Ae,b()},ke.readAsText(re)},j=0;j<i.length;j++)S(i[j],j);else{if(n.state.draggingText&&n.doc.sel.contains(s)>-1){n.state.draggingText(e),setTimeout(function(){return n.display.input.focus()},20);return}try{var F=e.dataTransfer.getData("Text");if(F){var K;if(n.state.draggingText&&!n.state.draggingText.copy&&(K=n.listSelections()),Ia(n.doc,zn(s,s)),K)for(var oe=0;oe<K.length;++oe)Qs(n.doc,"",K[oe].anchor,K[oe].head,"drag");n.replaceSelection(F,"around","paste"),n.display.input.focus()}}catch{}}}}function Fo(e,n){if(w&&(!e.state.draggingText||+new Date-Mo<100)){pr(n);return}if(!(qt(e,n)||$i(e.display,n))&&(n.dataTransfer.setData("Text",e.getSelection()),n.dataTransfer.effectAllowed="copyMove",n.dataTransfer.setDragImage&&!B)){var s=A("img",null,null,"position: fixed; left: 0; top: 0;");s.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",U&&(s.width=s.height=1,e.display.wrapper.appendChild(s),s._top=s.offsetTop),n.dataTransfer.setDragImage(s,0,0),U&&s.parentNode.removeChild(s)}}function hp(e,n){var s=gs(e,n);if(s){var i=document.createDocumentFragment();wo(e,s,i),e.display.dragCursor||(e.display.dragCursor=A("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),xe(e.display.dragCursor,i)}}function Zn(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Al(e){if(document.getElementsByClassName){for(var n=document.getElementsByClassName("CodeMirror"),s=[],i=0;i<n.length;i++){var a=n[i].CodeMirror;a&&s.push(a)}s.length&&s[0].operation(function(){for(var h=0;h<s.length;h++)e(s[h])})}}var Rl=!1;function Su(){Rl||(Ai(),Rl=!0)}function Ai(){var e;rt(window,"resize",function(){e==null&&(e=setTimeout(function(){e=null,Al(Xr)},100))}),rt(window,"blur",function(){return Al(Ft)})}function Xr(e){var n=e.display;n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.scrollbarsClipped=!1,e.setSize()}for(var Qr={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},na=0;na<10;na++)Qr[na+48]=Qr[na+96]=String(na);for(var za=65;za<=90;za++)Qr[za]=String.fromCharCode(za);for(var Fa=1;Fa<=12;Fa++)Qr[Fa+111]=Qr[Fa+63235]="F"+Fa;var Ri={};Ri.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ri.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ri.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Ri.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ri.default=G?Ri.macDefault:Ri.pcDefault;function zc(e){var n=e.split(/-(?!$)/);e=n[n.length-1];for(var s,i,a,h,y=0;y<n.length-1;y++){var b=n[y];if(/^(cmd|meta|m)$/i.test(b))h=!0;else if(/^a(lt)?$/i.test(b))s=!0;else if(/^(c|ctrl|control)$/i.test(b))i=!0;else if(/^s(hift)?$/i.test(b))a=!0;else throw new Error("Unrecognized modifier name: "+b)}return s&&(e="Alt-"+e),i&&(e="Ctrl-"+e),h&&(e="Cmd-"+e),a&&(e="Shift-"+e),e}function Fc(e){var n={};for(var s in e)if(e.hasOwnProperty(s)){var i=e[s];if(/^(name|fallthrough|(de|at)tach)$/.test(s))continue;if(i=="..."){delete e[s];continue}for(var a=ft(s.split(" "),zc),h=0;h<a.length;h++){var y=void 0,b=void 0;h==a.length-1?(b=a.join(" "),y=i):(b=a.slice(0,h+1).join(" "),y="...");var S=n[b];if(!S)n[b]=y;else if(S!=y)throw new Error("Inconsistent bindings for "+b)}delete e[s]}for(var j in n)e[j]=n[j];return e}function ra(e,n,s,i){n=Es(n);var a=n.call?n.call(e,i):n[e];if(a===!1)return"nothing";if(a==="...")return"multi";if(a!=null&&s(a))return"handled";if(n.fallthrough){if(Object.prototype.toString.call(n.fallthrough)!="[object Array]")return ra(e,n.fallthrough,s,i);for(var h=0;h<n.fallthrough.length;h++){var y=ra(e,n.fallthrough[h],s,i);if(y)return y}}}function _u(e){var n=typeof e=="string"?e:Qr[e.keyCode];return n=="Ctrl"||n=="Alt"||n=="Shift"||n=="Mod"}function Cu(e,n,s){var i=e;return n.altKey&&i!="Alt"&&(e="Alt-"+e),(De?n.metaKey:n.ctrlKey)&&i!="Ctrl"&&(e="Ctrl-"+e),(De?n.ctrlKey:n.metaKey)&&i!="Mod"&&(e="Cmd-"+e),!s&&n.shiftKey&&i!="Shift"&&(e="Shift-"+e),e}function Tu(e,n){if(U&&e.keyCode==34&&e.char)return!1;var s=Qr[e.keyCode];return s==null||e.altGraphKey?!1:(e.keyCode==3&&e.code&&(s=e.code),Cu(s,e,n))}function Es(e){return typeof e=="string"?Ri[e]:e}function ia(e,n){for(var s=e.doc.sel.ranges,i=[],a=0;a<s.length;a++){for(var h=n(s[a]);i.length&&Be(h.from,Je(i).to)<=0;){var y=i.pop();if(Be(y.from,h.from)<0){h.from=y.from;break}}i.push(h)}Pn(e,function(){for(var b=i.length-1;b>=0;b--)Qs(e.doc,"",i[b].from,i[b].to,"+delete");Hs(e)})}function Wa(e,n,s){var i=Xt(e.text,n+s,s);return i<0||i>e.text.length?null:i}function Ha(e,n,s){var i=Wa(e,n.ch,s);return i==null?null:new pe(n.line,i,s<0?"after":"before")}function Il(e,n,s,i,a){if(e){n.doc.direction=="rtl"&&(a=-a);var h=xt(s,n.doc.direction);if(h){var y=a<0?Je(h):h[0],b=a<0==(y.level==1),S=b?"after":"before",j;if(y.level>0||n.doc.direction=="rtl"){var F=Si(n,s);j=a<0?s.text.length-1:0;var K=Pr(n,F,j).top;j=nr(function(oe){return Pr(n,F,oe).top==K},a<0==(y.level==1)?y.from:y.to-1,j),S=="before"&&(j=Wa(s,j,1))}else j=a<0?y.to:y.from;return new pe(i,j,S)}}return new pe(i,a<0?s.text.length:0,a<0?"before":"after")}function ju(e,n,s,i){var a=xt(n,e.doc.direction);if(!a)return Ha(n,s,i);s.ch>=n.text.length?(s.ch=n.text.length,s.sticky="before"):s.ch<=0&&(s.ch=0,s.sticky="after");var h=Ur(a,s.ch,s.sticky),y=a[h];if(e.doc.direction=="ltr"&&y.level%2==0&&(i>0?y.to>s.ch:y.from<s.ch))return Ha(n,s,i);var b=function(Ne,Fe){return Wa(n,Ne instanceof pe?Ne.ch:Ne,Fe)},S,j=function(Ne){return e.options.lineWrapping?(S=S||Si(e,n),pu(e,n,S,Ne)):{begin:0,end:n.text.length}},F=j(s.sticky=="before"?b(s,-1):s.ch);if(e.doc.direction=="rtl"||y.level==1){var K=y.level==1==i<0,oe=b(s,K?1:-1);if(oe!=null&&(K?oe<=y.to&&oe<=F.end:oe>=y.from&&oe>=F.begin)){var re=K?"before":"after";return new pe(s.line,oe,re)}}var ge=function(Ne,Fe,ze){for(var Ge=function(Nt,Bn){return Bn?new pe(s.line,b(Nt,1),"before"):new pe(s.line,Nt,"after")};Ne>=0&&Ne<a.length;Ne+=Fe){var lt=a[Ne],Ve=Fe>0==(lt.level!=1),kt=Ve?ze.begin:b(ze.end,-1);if(lt.from<=kt&&kt<lt.to||(kt=Ve?lt.from:b(lt.to,-1),ze.begin<=kt&&kt<ze.end))return Ge(kt,Ve)}},ke=ge(h+i,i,F);if(ke)return ke;var Ae=i>0?F.end:b(F.begin,-1);return Ae!=null&&!(i>0&&Ae==n.text.length)&&(ke=ge(i>0?0:a.length-1,i,j(Ae)),ke)?ke:null}var Ba={selectAll:Zi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),Ht)},killLine:function(e){return ia(e,function(n){if(n.empty()){var s=Xe(e.doc,n.head.line).text.length;return n.head.ch==s&&n.head.line<e.lastLine()?{from:n.head,to:pe(n.head.line+1,0)}:{from:n.head,to:pe(n.head.line,s)}}else return{from:n.from(),to:n.to()}})},deleteLine:function(e){return ia(e,function(n){return{from:pe(n.from().line,0),to:vt(e.doc,pe(n.to().line+1,0))}})},delLineLeft:function(e){return ia(e,function(n){return{from:pe(n.from().line,0),to:n.from()}})},delWrappedLineLeft:function(e){return ia(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return{from:i,to:n.from()}})},delWrappedLineRight:function(e){return ia(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div");return{from:n.from(),to:i}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(pe(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(pe(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(n){return Nu(e,n.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(n){return Eu(e,n.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(n){return Wc(e,n.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div")},Ze)},goLineLeft:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:0,top:s},"div")},Ze)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return i.ch<e.getLine(i.line).search(/\S/)?Eu(e,n.head):i},Ze)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("	")},insertSoftTab:function(e){for(var n=[],s=e.listSelections(),i=e.options.tabSize,a=0;a<s.length;a++){var h=s[a].from(),y=$e(e.getLine(h.line),h.ch,i);n.push(ct(i-y%i))}e.replaceSelections(n)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return Pn(e,function(){for(var n=e.listSelections(),s=[],i=0;i<n.length;i++)if(n[i].empty()){var a=n[i].head,h=Xe(e.doc,a.line).text;if(h){if(a.ch==h.length&&(a=new pe(a.line,a.ch-1)),a.ch>0)a=new pe(a.line,a.ch+1),e.replaceRange(h.charAt(a.ch-1)+h.charAt(a.ch-2),pe(a.line,a.ch-2),a,"+transpose");else if(a.line>e.doc.first){var y=Xe(e.doc,a.line-1).text;y&&(a=new pe(a.line,1),e.replaceRange(h.charAt(0)+e.doc.lineSeparator()+y.charAt(y.length-1),pe(a.line-1,y.length-1),a,"+transpose"))}}s.push(new Lt(a,a))}e.setSelections(s)})},newlineAndIndent:function(e){return Pn(e,function(){for(var n=e.listSelections(),s=n.length-1;s>=0;s--)e.replaceRange(e.doc.lineSeparator(),n[s].anchor,n[s].head,"+input");n=e.listSelections();for(var i=0;i<n.length;i++)e.indentLine(n[i].from().line,null,!0);Hs(e)})},openLine:function(e){return e.replaceSelection(`
`,"start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function Nu(e,n){var s=Xe(e.doc,n),i=$t(s);return i!=s&&(n=E(i)),Il(!0,e,i,n,1)}function Wc(e,n){var s=Xe(e.doc,n),i=hr(s);return i!=s&&(n=E(i)),Il(!0,e,s,n,-1)}function Eu(e,n){var s=Nu(e,n.line),i=Xe(e.doc,s.line),a=xt(i,e.doc.direction);if(!a||a[0].level==0){var h=Math.max(s.ch,i.text.search(/\S/)),y=n.line==s.line&&n.ch<=h&&n.ch;return pe(s.line,y?0:h,s.sticky)}return s}function Ua(e,n,s){if(typeof n=="string"&&(n=Ba[n],!n))return!1;e.display.input.ensurePolled();var i=e.display.shift,a=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),s&&(e.display.shift=!1),a=n(e)!=Yt}finally{e.display.shift=i,e.state.suppressEdits=!1}return a}function Hc(e,n,s){for(var i=0;i<e.state.keyMaps.length;i++){var a=ra(n,e.state.keyMaps[i],s,e);if(a)return a}return e.options.extraKeys&&ra(n,e.options.extraKeys,s,e)||ra(n,e.options.keyMap,s,e)}var Bc=new tt;function qa(e,n,s,i){var a=e.state.keySeq;if(a){if(_u(n))return"handled";if(/\'$/.test(n)?e.state.keySeq=null:Bc.set(50,function(){e.state.keySeq==a&&(e.state.keySeq=null,e.display.input.reset())}),Uc(e,a+" "+n,s,i))return!0}return Uc(e,n,s,i)}function Uc(e,n,s,i){var a=Hc(e,n,i);return a=="multi"&&(e.state.keySeq=n),a=="handled"&&Mn(e,"keyHandled",e,n,s),(a=="handled"||a=="multi")&&(bn(s),Ws(e)),!!a}function Pu(e,n){var s=Tu(n,!0);return s?n.shiftKey&&!e.state.keySeq?qa(e,"Shift-"+s,n,function(i){return Ua(e,i,!0)})||qa(e,s,n,function(i){if(typeof i=="string"?/^go[A-Z]/.test(i):i.motion)return Ua(e,i)}):qa(e,s,n,function(i){return Ua(e,i)}):!1}function fp(e,n,s){return qa(e,"'"+s+"'",n,function(i){return Ua(e,i,!0)})}var Lu=null;function Au(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&(n.curOp.focus=P(Ie(n)),!qt(n,e))){w&&C<11&&e.keyCode==27&&(e.returnValue=!1);var s=e.keyCode;n.display.shift=s==16||e.shiftKey;var i=Pu(n,e);U&&(Lu=i?s:null,!i&&s==88&&!os&&(G?e.metaKey:e.ctrlKey)&&n.replaceSelection("",null,"cut")),g&&!G&&!i&&s==46&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),s==18&&!/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className)&&qc(n)}}function qc(e){var n=e.display.lineDiv;H(n,"CodeMirror-crosshair");function s(i){(i.keyCode==18||!i.altKey)&&(Le(n,"CodeMirror-crosshair"),tn(document,"keyup",s),tn(document,"mouseover",s))}rt(document,"keyup",s),rt(document,"mouseover",s)}function Ru(e){e.keyCode==16&&(this.doc.sel.shift=!1),qt(this,e)}function Wo(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&!($i(n.display,e)||qt(n,e)||e.ctrlKey&&!e.altKey||G&&e.metaKey)){var s=e.keyCode,i=e.charCode;if(U&&s==Lu){Lu=null,bn(e);return}if(!(U&&(!e.which||e.which<10)&&Pu(n,e))){var a=String.fromCharCode(i??s);a!="\b"&&(fp(n,e,a)||n.display.input.onKeyPress(e))}}}var mp=400,Iu=function(e,n,s){this.time=e,this.pos=n,this.button=s};Iu.prototype.compare=function(e,n,s){return this.time+mp>e&&Be(n,this.pos)==0&&s==this.button};var Ho,yr;function Ou(e,n){var s=+new Date;return yr&&yr.compare(s,e,n)?(Ho=yr=null,"triple"):Ho&&Ho.compare(s,e,n)?(yr=new Iu(s,e,n),Ho=null,"double"):(Ho=new Iu(s,e,n),yr=null,"single")}function Bo(e){var n=this,s=n.display;if(!(qt(n,e)||s.activeTouch&&s.input.supportsTouch())){if(s.input.ensurePolled(),s.shift=e.shiftKey,$i(s,e)){N||(s.scroller.draggable=!1,setTimeout(function(){return s.scroller.draggable=!0},100));return}if(!Ol(n,e)){var i=gs(n,e),a=En(e),h=i?Ou(i,a):"single";Oe(n).focus(),a==1&&n.state.selectingText&&n.state.selectingText(e),!(i&&$c(n,a,i,h,e))&&(a==1?i?Gc(n,i,h,e):gi(e)==s.scroller&&bn(e):a==2?(i&&Ro(n.doc,i),setTimeout(function(){return s.input.focus()},20)):a==3&&(be?n.display.input.onContextMenu(e):vl(n)))}}}function $c(e,n,s,i,a){var h="Click";return i=="double"?h="Double"+h:i=="triple"&&(h="Triple"+h),h=(n==1?"Left":n==2?"Middle":"Right")+h,qa(e,Cu(h,a),a,function(y){if(typeof y=="string"&&(y=Ba[y]),!y)return!1;var b=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),b=y(e,s)!=Yt}finally{e.state.suppressEdits=!1}return b})}function Kc(e,n,s){var i=e.getOption("configureMouse"),a=i?i(e,n,s):{};if(a.unit==null){var h=X?s.shiftKey&&s.metaKey:s.altKey;a.unit=h?"rectangle":n=="single"?"char":n=="double"?"word":"line"}return(a.extend==null||e.doc.extend)&&(a.extend=e.doc.extend||s.shiftKey),a.addNew==null&&(a.addNew=G?s.metaKey:s.ctrlKey),a.moveOnDrag==null&&(a.moveOnDrag=!(G?s.altKey:s.ctrlKey)),a}function Gc(e,n,s,i){w?setTimeout(_e(Ec,e),0):e.curOp.focus=P(Ie(e));var a=Kc(e,s,i),h=e.doc.sel,y;e.options.dragDrop&&as&&!e.isReadOnly()&&s=="single"&&(y=h.contains(n))>-1&&(Be((y=h.ranges[y]).from(),n)<0||n.xRel>0)&&(Be(y.to(),n)>0||n.xRel<0)?Du(e,i,n,a):Mu(e,i,n,a)}function Du(e,n,s,i){var a=e.display,h=!1,y=pn(e,function(j){N&&(a.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:vl(e)),tn(a.wrapper.ownerDocument,"mouseup",y),tn(a.wrapper.ownerDocument,"mousemove",b),tn(a.scroller,"dragstart",S),tn(a.scroller,"drop",y),h||(bn(j),i.addNew||Ro(e.doc,s,null,null,i.extend),N&&!B||w&&C==9?setTimeout(function(){a.wrapper.ownerDocument.body.focus({preventScroll:!0}),a.input.focus()},20):a.input.focus())}),b=function(j){h=h||Math.abs(n.clientX-j.clientX)+Math.abs(n.clientY-j.clientY)>=10},S=function(){return h=!0};N&&(a.scroller.draggable=!0),e.state.draggingText=y,y.copy=!i.moveOnDrag,rt(a.wrapper.ownerDocument,"mouseup",y),rt(a.wrapper.ownerDocument,"mousemove",b),rt(a.scroller,"dragstart",S),rt(a.scroller,"drop",y),e.state.delayingBlurEvent=!0,setTimeout(function(){return a.input.focus()},20),a.scroller.dragDrop&&a.scroller.dragDrop()}function sa(e,n,s){if(s=="char")return new Lt(n,n);if(s=="word")return e.findWordAt(n);if(s=="line")return new Lt(pe(n.line,0),vt(e.doc,pe(n.line+1,0)));var i=s(e,n);return new Lt(i.from,i.to)}function Mu(e,n,s,i){w&&vl(e);var a=e.display,h=e.doc;bn(n);var y,b,S=h.sel,j=S.ranges;if(i.addNew&&!i.extend?(b=h.sel.contains(s),b>-1?y=j[b]:y=new Lt(s,s)):(y=h.sel.primary(),b=h.sel.primIndex),i.unit=="rectangle")i.addNew||(y=new Lt(s,s)),s=gs(e,n,!0,!0),b=-1;else{var F=sa(e,s,i.unit);i.extend?y=Cs(y,F.anchor,F.head,i.extend):y=F}i.addNew?b==-1?(b=j.length,Wn(h,Lr(e,j.concat([y]),b),{scroll:!1,origin:"*mouse"})):j.length>1&&j[b].empty()&&i.unit=="char"&&!i.extend?(Wn(h,Lr(e,j.slice(0,b).concat(j.slice(b+1)),0),{scroll:!1,origin:"*mouse"}),S=h.sel):Ra(h,b,y,Tt):(b=0,Wn(h,new Xn([y],0),Tt),S=h.sel);var K=s;function oe(ze){if(Be(K,ze)!=0)if(K=ze,i.unit=="rectangle"){for(var Ge=[],lt=e.options.tabSize,Ve=$e(Xe(h,s.line).text,s.ch,lt),kt=$e(Xe(h,ze.line).text,ze.ch,lt),Nt=Math.min(Ve,kt),Bn=Math.max(Ve,kt),sn=Math.min(s.line,ze.line),xr=Math.min(e.lastLine(),Math.max(s.line,ze.line));sn<=xr;sn++){var lr=Xe(h,sn).text,yn=We(lr,Nt,lt);Nt==Bn?Ge.push(new Lt(pe(sn,yn),pe(sn,yn))):lr.length>yn&&Ge.push(new Lt(pe(sn,yn),pe(sn,We(lr,Bn,lt))))}Ge.length||Ge.push(new Lt(s,s)),Wn(h,Lr(e,S.ranges.slice(0,b).concat(Ge),b),{origin:"*mouse",scroll:!1}),e.scrollIntoView(ze)}else{var br=y,Tn=sa(e,ze,i.unit),vn=br.anchor,Dt;Be(Tn.anchor,vn)>0?(Dt=Tn.head,vn=Kr(br.from(),Tn.anchor)):(Dt=Tn.anchor,vn=kn(br.to(),Tn.head));var pt=S.ranges.slice(0);pt[b]=zu(e,new Lt(vt(h,vn),Dt)),Wn(h,Lr(e,pt,b),Tt)}}var re=a.wrapper.getBoundingClientRect(),ge=0;function ke(ze){var Ge=++ge,lt=gs(e,ze,!0,i.unit=="rectangle");if(lt)if(Be(lt,K)!=0){e.curOp.focus=P(Ie(e)),oe(lt);var Ve=ys(a,h);(lt.line>=Ve.to||lt.line<Ve.from)&&setTimeout(pn(e,function(){ge==Ge&&ke(ze)}),150)}else{var kt=ze.clientY<re.top?-20:ze.clientY>re.bottom?20:0;kt&&setTimeout(pn(e,function(){ge==Ge&&(a.scroller.scrollTop+=kt,ke(ze))}),50)}}function Ae(ze){e.state.selectingText=!1,ge=1/0,ze&&(bn(ze),a.input.focus()),tn(a.wrapper.ownerDocument,"mousemove",Ne),tn(a.wrapper.ownerDocument,"mouseup",Fe),h.history.lastSelOrigin=null}var Ne=pn(e,function(ze){ze.buttons===0||!En(ze)?Ae(ze):ke(ze)}),Fe=pn(e,Ae);e.state.selectingText=Fe,rt(a.wrapper.ownerDocument,"mousemove",Ne),rt(a.wrapper.ownerDocument,"mouseup",Fe)}function zu(e,n){var s=n.anchor,i=n.head,a=Xe(e.doc,s.line);if(Be(s,i)==0&&s.sticky==i.sticky)return n;var h=xt(a);if(!h)return n;var y=Ur(h,s.ch,s.sticky),b=h[y];if(b.from!=s.ch&&b.to!=s.ch)return n;var S=y+(b.from==s.ch==(b.level!=1)?0:1);if(S==0||S==h.length)return n;var j;if(i.line!=s.line)j=(i.line-s.line)*(e.doc.direction=="ltr"?1:-1)>0;else{var F=Ur(h,i.ch,i.sticky),K=F-y||(i.ch-s.ch)*(b.level==1?-1:1);F==S-1||F==S?j=K<0:j=K>0}var oe=h[S+(j?-1:0)],re=j==(oe.level==1),ge=re?oe.from:oe.to,ke=re?"after":"before";return s.ch==ge&&s.sticky==ke?n:new Lt(new pe(s.line,ge,ke),i)}function Yc(e,n,s,i){var a,h;if(n.touches)a=n.touches[0].clientX,h=n.touches[0].clientY;else try{a=n.clientX,h=n.clientY}catch{return!1}if(a>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;i&&bn(n);var y=e.display,b=y.lineDiv.getBoundingClientRect();if(h>b.bottom||!mn(e,s))return In(n);h-=b.top-y.viewOffset;for(var S=0;S<e.display.gutterSpecs.length;++S){var j=y.gutters.childNodes[S];if(j&&j.getBoundingClientRect().right>=a){var F=$(e.doc,h),K=e.display.gutterSpecs[S];return Rt(e,s,e,F,K.className,n),In(n)}}}function Ol(e,n){return Yc(e,n,"gutterClick",!0)}function Fu(e,n){$i(e.display,n)||Vc(e,n)||qt(e,n,"contextmenu")||be||e.display.input.onContextMenu(n)}function Vc(e,n){return mn(e,"gutterContextMenu")?Yc(e,n,"gutterContextMenu",!1):!1}function Wu(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),ba(e)}var aa={toString:function(){return"CodeMirror.Init"}},Jc={},er={};function vr(e){var n=e.optionHandlers;function s(i,a,h,y){e.defaults[i]=a,h&&(n[i]=y?function(b,S,j){j!=aa&&h(b,S,j)}:h)}e.defineOption=s,e.Init=aa,s("value","",function(i,a){return i.setValue(a)},!0),s("mode",null,function(i,a){i.doc.modeOption=a,Sl(i)},!0),s("indentUnit",2,Sl,!0),s("indentWithTabs",!1),s("smartIndent",!0),s("tabSize",4,function(i){Gs(i),ba(i),sr(i)},!0),s("lineSeparator",null,function(i,a){if(i.doc.lineSep=a,!!a){var h=[],y=i.doc.first;i.doc.iter(function(S){for(var j=0;;){var F=S.text.indexOf(a,j);if(F==-1)break;j=F+a.length,h.push(pe(y,F))}y++});for(var b=h.length-1;b>=0;b--)Qs(i.doc,a,h[b],pe(h[b].line,h[b].ch+a.length))}}),s("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,function(i,a,h){i.state.specialChars=new RegExp(a.source+(a.test("	")?"":"|	"),"g"),h!=aa&&i.refresh()}),s("specialCharPlaceholder",Yd,function(i){return i.refresh()},!0),s("electricChars",!0),s("inputStyle",W?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),s("spellcheck",!1,function(i,a){return i.getInputField().spellcheck=a},!0),s("autocorrect",!1,function(i,a){return i.getInputField().autocorrect=a},!0),s("autocapitalize",!1,function(i,a){return i.getInputField().autocapitalize=a},!0),s("rtlMoveVisually",!se),s("wholeLineUpdateBefore",!0),s("theme","default",function(i){Wu(i),Fr(i)},!0),s("keyMap","default",function(i,a,h){var y=Es(a),b=h!=aa&&Es(h);b&&b.detach&&b.detach(i,y),y.attach&&y.attach(i,b||null)}),s("extraKeys",null),s("configureMouse",null),s("lineWrapping",!1,Qc,!0),s("gutters",[],function(i,a){i.display.gutterSpecs=Ea(a,i.options.lineNumbers),Fr(i)},!0),s("fixedGutter",!0,function(i,a){i.display.gutters.style.left=a?Sa(i.display)+"px":"0",i.refresh()},!0),s("coverGutterNextToScrollbar",!1,function(i){return Us(i)},!0),s("scrollbarStyle","native",function(i){wl(i),Us(i),i.display.scrollbars.setScrollTop(i.doc.scrollTop),i.display.scrollbars.setScrollLeft(i.doc.scrollLeft)},!0),s("lineNumbers",!1,function(i,a){i.display.gutterSpecs=Ea(i.options.gutters,a),Fr(i)},!0),s("firstLineNumber",1,Fr,!0),s("lineNumberFormatter",function(i){return i},Fr,!0),s("showCursorWhenSelecting",!1,Yr,!0),s("resetSelectionOnContextMenu",!0),s("lineWiseCopyCut",!0),s("pasteLinesPerSelection",!0),s("selectionsMayTouch",!1),s("readOnly",!1,function(i,a){a=="nocursor"&&(Ft(i),i.display.input.blur()),i.display.input.readOnlyChanged(a)}),s("screenReaderLabel",null,function(i,a){a=a===""?null:a,i.display.input.screenReaderLabelChanged(a)}),s("disableInput",!1,function(i,a){a||i.display.input.reset()},!0),s("dragDrop",!0,Xc),s("allowDropFileTypes",null),s("cursorBlinkRate",530),s("cursorScrollMargin",0),s("cursorHeight",1,Yr,!0),s("singleCursorHeightPerLine",!0,Yr,!0),s("workTime",100),s("workDelay",100),s("flattenSpans",!0,Gs,!0),s("addModeClass",!1,Gs,!0),s("pollInterval",100),s("undoDepth",200,function(i,a){return i.doc.history.undoDepth=a}),s("historyEventDelay",1250),s("viewportMargin",10,function(i){return i.refresh()},!0),s("maxHighlightLength",1e4,Gs,!0),s("moveInputWithCursor",!0,function(i,a){a||i.display.input.resetPosition()}),s("tabindex",null,function(i,a){return i.display.input.getField().tabIndex=a||""}),s("autofocus",null),s("direction","ltr",function(i,a){return i.doc.setDirection(a)},!0),s("phrases",null)}function Xc(e,n,s){var i=s&&s!=aa;if(!n!=!i){var a=e.display.dragFunctions,h=n?rt:tn;h(e.display.scroller,"dragstart",a.start),h(e.display.scroller,"dragenter",a.enter),h(e.display.scroller,"dragover",a.over),h(e.display.scroller,"dragleave",a.leave),h(e.display.scroller,"drop",a.drop)}}function Qc(e){e.options.lineWrapping?(H(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Le(e.display.wrapper,"CodeMirror-wrap"),co(e)),xo(e),sr(e),ba(e),setTimeout(function(){return Us(e)},100)}function en(e,n){var s=this;if(!(this instanceof en))return new en(e,n);this.options=n=n?Ue(n):{},Ue(Jc,n,!1);var i=n.value;typeof i=="string"?i=new It(i,n.mode,null,n.lineSeparator,n.direction):n.mode&&(i.modeOption=n.mode),this.doc=i;var a=new en.inputStyles[n.inputStyle](this),h=this.display=new kl(e,i,a,n);h.wrapper.CodeMirror=this,Wu(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),wl(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new tt,keySeq:null,specialChars:null},n.autofocus&&!W&&h.input.focus(),w&&C<11&&setTimeout(function(){return s.display.input.reset(!0)},20),Zc(this),Su(),ws(this),this.curOp.forceUpdate=!0,rn(this,i),n.autofocus&&!W||this.hasFocus()?setTimeout(function(){s.hasFocus()&&!s.state.focused&&xl(s)},20):Ft(this);for(var y in er)er.hasOwnProperty(y)&&er[y](this,n[y],aa);yu(this),n.finishInit&&n.finishInit(this);for(var b=0;b<Dl.length;++b)Dl[b](this);Vr(this),N&&n.lineWrapping&&getComputedStyle(h.lineDiv).textRendering=="optimizelegibility"&&(h.lineDiv.style.textRendering="auto")}en.defaults=Jc,en.optionHandlers=er;function Zc(e){var n=e.display;rt(n.scroller,"mousedown",pn(e,Bo)),w&&C<11?rt(n.scroller,"dblclick",pn(e,function(S){if(!qt(e,S)){var j=gs(e,S);if(!(!j||Ol(e,S)||$i(e.display,S))){bn(S);var F=e.findWordAt(j);Ro(e.doc,F.anchor,F.head)}}})):rt(n.scroller,"dblclick",function(S){return qt(e,S)||bn(S)}),rt(n.scroller,"contextmenu",function(S){return Fu(e,S)}),rt(n.input.getField(),"contextmenu",function(S){n.scroller.contains(S.target)||Fu(e,S)});var s,i={end:0};function a(){n.activeTouch&&(s=setTimeout(function(){return n.activeTouch=null},1e3),i=n.activeTouch,i.end=+new Date)}function h(S){if(S.touches.length!=1)return!1;var j=S.touches[0];return j.radiusX<=1&&j.radiusY<=1}function y(S,j){if(j.left==null)return!0;var F=j.left-S.left,K=j.top-S.top;return F*F+K*K>400}rt(n.scroller,"touchstart",function(S){if(!qt(e,S)&&!h(S)&&!Ol(e,S)){n.input.ensurePolled(),clearTimeout(s);var j=+new Date;n.activeTouch={start:j,moved:!1,prev:j-i.end<=300?i:null},S.touches.length==1&&(n.activeTouch.left=S.touches[0].pageX,n.activeTouch.top=S.touches[0].pageY)}}),rt(n.scroller,"touchmove",function(){n.activeTouch&&(n.activeTouch.moved=!0)}),rt(n.scroller,"touchend",function(S){var j=n.activeTouch;if(j&&!$i(n,S)&&j.left!=null&&!j.moved&&new Date-j.start<300){var F=e.coordsChar(n.activeTouch,"page"),K;!j.prev||y(j,j.prev)?K=new Lt(F,F):!j.prev.prev||y(j,j.prev.prev)?K=e.findWordAt(F):K=new Lt(pe(F.line,0),vt(e.doc,pe(F.line+1,0))),e.setSelection(K.anchor,K.head),e.focus(),bn(S)}a()}),rt(n.scroller,"touchcancel",a),rt(n.scroller,"scroll",function(){n.scroller.clientHeight&&(xs(e,n.scroller.scrollTop),Vi(e,n.scroller.scrollLeft,!0),Rt(e,"scroll",e))}),rt(n.scroller,"mousewheel",function(S){return $s(e,S)}),rt(n.scroller,"DOMMouseScroll",function(S){return $s(e,S)}),rt(n.wrapper,"scroll",function(){return n.wrapper.scrollTop=n.wrapper.scrollLeft=0}),n.dragFunctions={enter:function(S){qt(e,S)||pr(S)},over:function(S){qt(e,S)||(hp(e,S),pr(S))},start:function(S){return Fo(e,S)},drop:pn(e,zo),leave:function(S){qt(e,S)||Zn(e)}};var b=n.input.getField();rt(b,"keyup",function(S){return Ru.call(e,S)}),rt(b,"keydown",pn(e,Au)),rt(b,"keypress",pn(e,Wo)),rt(b,"focus",function(S){return xl(e,S)}),rt(b,"blur",function(S){return Ft(e,S)})}var Dl=[];en.defineInitHook=function(e){return Dl.push(e)};function oa(e,n,s,i){var a=e.doc,h;s==null&&(s="add"),s=="smart"&&(a.mode.indent?h=jt(e,n).state:s="prev");var y=e.options.tabSize,b=Xe(a,n),S=$e(b.text,null,y);b.stateAfter&&(b.stateAfter=null);var j=b.text.match(/^\s*/)[0],F;if(!i&&!/\S/.test(b.text))F=0,s="not";else if(s=="smart"&&(F=a.mode.indent(h,b.text.slice(j.length),b.text),F==Yt||F>150)){if(!i)return;s="prev"}s=="prev"?n>a.first?F=$e(Xe(a,n-1).text,null,y):F=0:s=="add"?F=S+e.options.indentUnit:s=="subtract"?F=S-e.options.indentUnit:typeof s=="number"&&(F=S+s),F=Math.max(0,F);var K="",oe=0;if(e.options.indentWithTabs)for(var re=Math.floor(F/y);re;--re)oe+=y,K+="	";if(oe<F&&(K+=ct(F-oe)),K!=j)return Qs(a,K,pe(n,0),pe(n,j.length),"+input"),b.stateAfter=null,!0;for(var ge=0;ge<a.sel.ranges.length;ge++){var ke=a.sel.ranges[ge];if(ke.head.line==n&&ke.head.ch<j.length){var Ae=pe(n,j.length);Ra(a,ge,new Lt(Ae,Ae));break}}}var Zr=null;function $a(e){Zr=e}function Ml(e,n,s,i,a){var h=e.doc;e.display.shift=!1,i||(i=h.sel);var y=+new Date-200,b=a=="paste"||e.state.pasteIncoming>y,S=jr(n),j=null;if(b&&i.ranges.length>1)if(Zr&&Zr.text.join(`
`)==n){if(i.ranges.length%Zr.text.length==0){j=[];for(var F=0;F<Zr.text.length;F++)j.push(h.splitLines(Zr.text[F]))}}else S.length==i.ranges.length&&e.options.pasteLinesPerSelection&&(j=ft(S,function(Ne){return[Ne]}));for(var K=e.curOp.updateInput,oe=i.ranges.length-1;oe>=0;oe--){var re=i.ranges[oe],ge=re.from(),ke=re.to();re.empty()&&(s&&s>0?ge=pe(ge.line,ge.ch-s):e.state.overwrite&&!b?ke=pe(ke.line,Math.min(Xe(h,ke.line).text.length,ke.ch+Je(S).length)):b&&Zr&&Zr.lineWise&&Zr.text.join(`
`)==S.join(`
`)&&(ge=ke=pe(ge.line,0)));var Ae={from:ge,to:ke,text:j?j[oe%j.length]:S,origin:a||(b?"paste":e.state.cutIncoming>y?"cut":"+input")};Xs(e.doc,Ae),Mn(e,"inputRead",e,Ae)}n&&!b&&zl(e,n),Hs(e),e.curOp.updateInput<2&&(e.curOp.updateInput=K),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Hu(e,n){var s=e.clipboardData&&e.clipboardData.getData("Text");if(s)return e.preventDefault(),!n.isReadOnly()&&!n.options.disableInput&&n.hasFocus()&&Pn(n,function(){return Ml(n,s,0,null,"paste")}),!0}function zl(e,n){if(!(!e.options.electricChars||!e.options.smartIndent))for(var s=e.doc.sel,i=s.ranges.length-1;i>=0;i--){var a=s.ranges[i];if(!(a.head.ch>100||i&&s.ranges[i-1].head.line==a.head.line)){var h=e.getModeAt(a.head),y=!1;if(h.electricChars){for(var b=0;b<h.electricChars.length;b++)if(n.indexOf(h.electricChars.charAt(b))>-1){y=oa(e,a.head.line,"smart");break}}else h.electricInput&&h.electricInput.test(Xe(e.doc,a.head.line).text.slice(0,a.head.ch))&&(y=oa(e,a.head.line,"smart"));y&&Mn(e,"electricInput",e,a.head.line)}}}function Fl(e){for(var n=[],s=[],i=0;i<e.doc.sel.ranges.length;i++){var a=e.doc.sel.ranges[i].head.line,h={anchor:pe(a,0),head:pe(a+1,0)};s.push(h),n.push(e.getRange(h.anchor,h.head))}return{text:n,ranges:s}}function Wl(e,n,s,i){e.setAttribute("autocorrect",s?"on":"off"),e.setAttribute("autocapitalize",i?"on":"off"),e.setAttribute("spellcheck",!!n)}function Hl(){var e=A("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),n=A("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return N?e.style.width="1000px":e.setAttribute("wrap","off"),z&&(e.style.border="1px solid black"),n}function Bl(e){var n=e.optionHandlers,s=e.helpers={};e.prototype={constructor:e,focus:function(){Oe(this).focus(),this.display.input.focus()},setOption:function(i,a){var h=this.options,y=h[i];h[i]==a&&i!="mode"||(h[i]=a,n.hasOwnProperty(i)&&pn(this,n[i])(this,a,y),Rt(this,"optionChange",this,i))},getOption:function(i){return this.options[i]},getDoc:function(){return this.doc},addKeyMap:function(i,a){this.state.keyMaps[a?"push":"unshift"](Es(i))},removeKeyMap:function(i){for(var a=this.state.keyMaps,h=0;h<a.length;++h)if(a[h]==i||a[h].name==i)return a.splice(h,1),!0},addOverlay:Cn(function(i,a){var h=i.token?i:e.getMode(this.options,i);if(h.startState)throw new Error("Overlays may not be stateful.");le(this.state.overlays,{mode:h,modeSpec:i,opaque:a&&a.opaque,priority:a&&a.priority||0},function(y){return y.priority}),this.state.modeGen++,sr(this)}),removeOverlay:Cn(function(i){for(var a=this.state.overlays,h=0;h<a.length;++h){var y=a[h].modeSpec;if(y==i||typeof i=="string"&&y.name==i){a.splice(h,1),this.state.modeGen++,sr(this);return}}}),indentLine:Cn(function(i,a,h){typeof a!="string"&&typeof a!="number"&&(a==null?a=this.options.smartIndent?"smart":"prev":a=a?"add":"subtract"),me(this.doc,i)&&oa(this,i,a,h)}),indentSelection:Cn(function(i){for(var a=this.doc.sel.ranges,h=-1,y=0;y<a.length;y++){var b=a[y];if(b.empty())b.head.line>h&&(oa(this,b.head.line,i,!0),h=b.head.line,y==this.doc.sel.primIndex&&Hs(this));else{var S=b.from(),j=b.to(),F=Math.max(h,S.line);h=Math.min(this.lastLine(),j.line-(j.ch?0:1))+1;for(var K=F;K<h;++K)oa(this,K,i);var oe=this.doc.sel.ranges;S.ch==0&&a.length==oe.length&&oe[y].from().ch>0&&Ra(this.doc,y,new Lt(S,oe[y].to()),Ht)}}}),getTokenAt:function(i,a){return bi(this,i,a)},getLineTokens:function(i,a){return bi(this,pe(i),a,!0)},getTokenTypeAt:function(i){i=vt(this.doc,i);var a=Hi(this,Xe(this.doc,i.line)),h=0,y=(a.length-1)/2,b=i.ch,S;if(b==0)S=a[2];else for(;;){var j=h+y>>1;if((j?a[j*2-1]:0)>=b)y=j;else if(a[j*2+1]<b)h=j+1;else{S=a[j*2+2];break}}var F=S?S.indexOf("overlay "):-1;return F<0?S:F==0?null:S.slice(0,F-1)},getModeAt:function(i){var a=this.doc.mode;return a.innerMode?e.innerMode(a,this.getTokenAt(i).state).mode:a},getHelper:function(i,a){return this.getHelpers(i,a)[0]},getHelpers:function(i,a){var h=[];if(!s.hasOwnProperty(a))return h;var y=s[a],b=this.getModeAt(i);if(typeof b[a]=="string")y[b[a]]&&h.push(y[b[a]]);else if(b[a])for(var S=0;S<b[a].length;S++){var j=y[b[a][S]];j&&h.push(j)}else b.helperType&&y[b.helperType]?h.push(y[b.helperType]):y[b.name]&&h.push(y[b.name]);for(var F=0;F<y._global.length;F++){var K=y._global[F];K.pred(b,this)&&Ke(h,K.val)==-1&&h.push(K.val)}return h},getStateAfter:function(i,a){var h=this.doc;return i=sl(h,i??h.first+h.size-1),jt(this,i+1,a).state},cursorCoords:function(i,a){var h,y=this.doc.sel.primary();return i==null?h=y.head:typeof i=="object"?h=vt(this.doc,i):h=i?y.from():y.to(),_n(this,h,a||"page")},charCoords:function(i,a){return pl(this,vt(this.doc,i),a||"page")},coordsChar:function(i,a){return i=jc(this,i,a||"page"),fl(this,i.left,i.top)},lineAtHeight:function(i,a){return i=jc(this,{top:i,left:0},a||"page").top,$(this.doc,i+this.display.viewOffset)},heightAtLine:function(i,a,h){var y=!1,b;if(typeof i=="number"){var S=this.doc.first+this.doc.size-1;i<this.doc.first?i=this.doc.first:i>S&&(i=S,y=!0),b=Xe(this.doc,i)}else b=i;return dl(this,b,{top:0,left:0},a||"page",h||y).top+(y?this.doc.height-Sn(b):0)},defaultTextHeight:function(){return _i(this.display)},defaultCharWidth:function(){return ms(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(i,a,h,y,b){var S=this.display;i=_n(this,vt(this.doc,i));var j=i.bottom,F=i.left;if(a.style.position="absolute",a.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(a),S.sizer.appendChild(a),y=="over")j=i.top;else if(y=="above"||y=="near"){var K=Math.max(S.wrapper.clientHeight,this.doc.height),oe=Math.max(S.sizer.clientWidth,S.lineSpace.clientWidth);(y=="above"||i.bottom+a.offsetHeight>K)&&i.top>a.offsetHeight?j=i.top-a.offsetHeight:i.bottom+a.offsetHeight<=K&&(j=i.bottom),F+a.offsetWidth>oe&&(F=oe-a.offsetWidth)}a.style.top=j+"px",a.style.left=a.style.right="",b=="right"?(F=S.sizer.clientWidth-a.offsetWidth,a.style.right="0px"):(b=="left"?F=0:b=="middle"&&(F=(S.sizer.clientWidth-a.offsetWidth)/2),a.style.left=F+"px"),h&&So(this,{left:F,top:j,right:F+a.offsetWidth,bottom:j+a.offsetHeight})},triggerOnKeyDown:Cn(Au),triggerOnKeyPress:Cn(Wo),triggerOnKeyUp:Ru,triggerOnMouseDown:Cn(Bo),execCommand:function(i){if(Ba.hasOwnProperty(i))return Ba[i].call(null,this)},triggerElectric:Cn(function(i){zl(this,i)}),findPosH:function(i,a,h,y){var b=1;a<0&&(b=-1,a=-a);for(var S=vt(this.doc,i),j=0;j<a&&(S=Bu(this.doc,S,b,h,y),!S.hitSide);++j);return S},moveH:Cn(function(i,a){var h=this;this.extendSelectionsBy(function(y){return h.display.shift||h.doc.extend||y.empty()?Bu(h.doc,y.head,i,a,h.options.rtlMoveVisually):i<0?y.from():y.to()},Ze)}),deleteH:Cn(function(i,a){var h=this.doc.sel,y=this.doc;h.somethingSelected()?y.replaceSelection("",null,"+delete"):ia(this,function(b){var S=Bu(y,b.head,i,a,!1);return i<0?{from:S,to:b.head}:{from:b.head,to:S}})}),findPosV:function(i,a,h,y){var b=1,S=y;a<0&&(b=-1,a=-a);for(var j=vt(this.doc,i),F=0;F<a;++F){var K=_n(this,j,"div");if(S==null?S=K.left:K.left=S,j=Uu(this,K,b,h),j.hitSide)break}return j},moveV:Cn(function(i,a){var h=this,y=this.doc,b=[],S=!this.display.shift&&!y.extend&&y.sel.somethingSelected();if(y.extendSelectionsBy(function(F){if(S)return i<0?F.from():F.to();var K=_n(h,F.head,"div");F.goalColumn!=null&&(K.left=F.goalColumn),b.push(K.left);var oe=Uu(h,K,i,a);return a=="page"&&F==y.sel.primary()&&vs(h,pl(h,oe,"div").top-K.top),oe},Ze),b.length)for(var j=0;j<y.sel.ranges.length;j++)y.sel.ranges[j].goalColumn=b[j]}),findWordAt:function(i){var a=this.doc,h=Xe(a,i.line).text,y=i.ch,b=i.ch;if(h){var S=this.getHelper(i,"wordChars");(i.sticky=="before"||b==h.length)&&y?--y:++b;for(var j=h.charAt(y),F=ot(j,S)?function(K){return ot(K,S)}:/\s/.test(j)?function(K){return/\s/.test(K)}:function(K){return!/\s/.test(K)&&!ot(K)};y>0&&F(h.charAt(y-1));)--y;for(;b<h.length&&F(h.charAt(b));)++b}return new Lt(pe(i.line,y),pe(i.line,b))},toggleOverwrite:function(i){i!=null&&i==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?H(this.display.cursorDiv,"CodeMirror-overwrite"):Le(this.display.cursorDiv,"CodeMirror-overwrite"),Rt(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==P(Ie(this))},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:Cn(function(i,a){_o(this,i,a)}),getScrollInfo:function(){var i=this.display.scroller;return{left:i.scrollLeft,top:i.scrollTop,height:i.scrollHeight-oi(this)-this.display.barHeight,width:i.scrollWidth-oi(this)-this.display.barWidth,clientHeight:fs(this),clientWidth:hs(this)}},scrollIntoView:Cn(function(i,a){i==null?(i={from:this.doc.sel.primary().head,to:null},a==null&&(a=this.options.cursorScrollMargin)):typeof i=="number"?i={from:pe(i,0),to:null}:i.from==null&&(i={from:i,to:null}),i.to||(i.to=i.from),i.margin=a||0,i.from.line!=null?cp(this,i):To(this,i.from,i.to,i.margin)}),setSize:Cn(function(i,a){var h=this,y=function(S){return typeof S=="number"||/^\d+$/.test(String(S))?S+"px":S};i!=null&&(this.display.wrapper.style.width=y(i)),a!=null&&(this.display.wrapper.style.height=y(a)),this.options.lineWrapping&&lu(this);var b=this.display.viewFrom;this.doc.iter(b,this.display.viewTo,function(S){if(S.widgets){for(var j=0;j<S.widgets.length;j++)if(S.widgets[j].noHScroll){Gi(h,b,"widget");break}}++b}),this.curOp.forceUpdate=!0,Rt(this,"refresh",this)}),operation:function(i){return Pn(this,i)},startOperation:function(){return ws(this)},endOperation:function(){return Vr(this)},refresh:Cn(function(){var i=this.display.cachedTextHeight;sr(this),this.curOp.forceUpdate=!0,ba(this),_o(this,this.doc.scrollLeft,this.doc.scrollTop),ar(this.display),(i==null||Math.abs(i-_i(this.display))>.5||this.options.lineWrapping)&&xo(this),Rt(this,"refresh",this)}),swapDoc:Cn(function(i){var a=this.doc;return a.cm=null,this.state.selectingText&&this.state.selectingText(),rn(this,i),ba(this),this.display.input.reset(),_o(this,i.scrollLeft,i.scrollTop),this.curOp.forceScroll=!0,Mn(this,"swapDoc",this,a),a}),phrase:function(i){var a=this.options.phrases;return a&&Object.prototype.hasOwnProperty.call(a,i)?a[i]:i},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Nn(e),e.registerHelper=function(i,a,h){s.hasOwnProperty(i)||(s[i]=e[i]={_global:[]}),s[i][a]=h},e.registerGlobalHelper=function(i,a,h,y){e.registerHelper(i,a,y),s[i]._global.push({pred:h,val:y})}}function Bu(e,n,s,i,a){var h=n,y=s,b=Xe(e,n.line),S=a&&e.direction=="rtl"?-s:s;function j(){var Fe=n.line+S;return Fe<e.first||Fe>=e.first+e.size?!1:(n=new pe(Fe,n.ch,n.sticky),b=Xe(e,Fe))}function F(Fe){var ze;if(i=="codepoint"){var Ge=b.text.charCodeAt(n.ch+(s>0?0:-1));if(isNaN(Ge))ze=null;else{var lt=s>0?Ge>=55296&&Ge<56320:Ge>=56320&&Ge<57343;ze=new pe(n.line,Math.max(0,Math.min(b.text.length,n.ch+s*(lt?2:1))),-s)}}else a?ze=ju(e.cm,b,n,s):ze=Ha(b,n,s);if(ze==null)if(!Fe&&j())n=Il(a,e.cm,b,n.line,S);else return!1;else n=ze;return!0}if(i=="char"||i=="codepoint")F();else if(i=="column")F(!0);else if(i=="word"||i=="group")for(var K=null,oe=i=="group",re=e.cm&&e.cm.getHelper(n,"wordChars"),ge=!0;!(s<0&&!F(!ge));ge=!1){var ke=b.text.charAt(n.ch)||`
`,Ae=ot(ke,re)?"w":oe&&ke==`
`?"n":!oe||/\s/.test(ke)?null:"p";if(oe&&!ge&&!Ae&&(Ae="s"),K&&K!=Ae){s<0&&(s=1,F(),n.sticky="after");break}if(Ae&&(K=Ae),s>0&&!F(!ge))break}var Ne=Oo(e,n,h,y,!0);return Ct(h,Ne)&&(Ne.hitSide=!0),Ne}function Uu(e,n,s,i){var a=e.doc,h=n.left,y;if(i=="page"){var b=Math.min(e.display.wrapper.clientHeight,Oe(e).innerHeight||a(e).documentElement.clientHeight),S=Math.max(b-.5*_i(e.display),3);y=(s>0?n.bottom:n.top)+s*S}else i=="line"&&(y=s>0?n.bottom+3:n.top-3);for(var j;j=fl(e,h,y),!!j.outside;){if(s<0?y<=0:y>=a.height){j.hitSide=!0;break}y+=s*5}return j}var Ot=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new tt,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};Ot.prototype.init=function(e){var n=this,s=this,i=s.cm,a=s.div=e.lineDiv;a.contentEditable=!0,Wl(a,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize);function h(b){for(var S=b.target;S;S=S.parentNode){if(S==a)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(S.className))break}return!1}rt(a,"paste",function(b){!h(b)||qt(i,b)||Hu(b,i)||C<=11&&setTimeout(pn(i,function(){return n.updateFromDOM()}),20)}),rt(a,"compositionstart",function(b){n.composing={data:b.data,done:!1}}),rt(a,"compositionupdate",function(b){n.composing||(n.composing={data:b.data,done:!1})}),rt(a,"compositionend",function(b){n.composing&&(b.data!=n.composing.data&&n.readFromDOMSoon(),n.composing.done=!0)}),rt(a,"touchstart",function(){return s.forceCompositionEnd()}),rt(a,"input",function(){n.composing||n.readFromDOMSoon()});function y(b){if(!(!h(b)||qt(i,b))){if(i.somethingSelected())$a({lineWise:!1,text:i.getSelections()}),b.type=="cut"&&i.replaceSelection("",null,"cut");else if(i.options.lineWiseCopyCut){var S=Fl(i);$a({lineWise:!0,text:S.text}),b.type=="cut"&&i.operation(function(){i.setSelections(S.ranges,0,Ht),i.replaceSelection("",null,"cut")})}else return;if(b.clipboardData){b.clipboardData.clearData();var j=Zr.text.join(`
`);if(b.clipboardData.setData("Text",j),b.clipboardData.getData("Text")==j){b.preventDefault();return}}var F=Hl(),K=F.firstChild;Wl(K),i.display.lineSpace.insertBefore(F,i.display.lineSpace.firstChild),K.value=Zr.text.join(`
`);var oe=P(qe(a));Z(K),setTimeout(function(){i.display.lineSpace.removeChild(F),oe.focus(),oe==a&&s.showPrimarySelection()},50)}}rt(a,"copy",y),rt(a,"cut",y)},Ot.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Ot.prototype.prepareSelection=function(){var e=gl(this.cm,!1);return e.focus=P(qe(this.div))==this.div,e},Ot.prototype.showSelection=function(e,n){!e||!this.cm.display.view.length||((e.focus||n)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Ot.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Ot.prototype.showPrimarySelection=function(){var e=this.getSelection(),n=this.cm,s=n.doc.sel.primary(),i=s.from(),a=s.to();if(n.display.viewTo==n.display.viewFrom||i.line>=n.display.viewTo||a.line<n.display.viewFrom){e.removeAllRanges();return}var h=Uo(n,e.anchorNode,e.anchorOffset),y=Uo(n,e.focusNode,e.focusOffset);if(!(h&&!h.bad&&y&&!y.bad&&Be(Kr(h,y),i)==0&&Be(kn(h,y),a)==0)){var b=n.display.view,S=i.line>=n.display.viewFrom&&qu(n,i)||{node:b[0].measure.map[2],offset:0},j=a.line<n.display.viewTo&&qu(n,a);if(!j){var F=b[b.length-1].measure,K=F.maps?F.maps[F.maps.length-1]:F.map;j={node:K[K.length-1],offset:K[K.length-2]-K[K.length-3]}}if(!S||!j){e.removeAllRanges();return}var oe=e.rangeCount&&e.getRangeAt(0),re;try{re=Q(S.node,S.offset,j.offset,j.node)}catch{}re&&(!g&&n.state.focused?(e.collapse(S.node,S.offset),re.collapsed||(e.removeAllRanges(),e.addRange(re))):(e.removeAllRanges(),e.addRange(re)),oe&&e.anchorNode==null?e.addRange(oe):g&&this.startGracePeriod()),this.rememberSelection()}},Ot.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Ot.prototype.showMultipleSelections=function(e){xe(this.cm.display.cursorDiv,e.cursors),xe(this.cm.display.selectionDiv,e.selection)},Ot.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Ot.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var n=e.getRangeAt(0).commonAncestorContainer;return T(this.div,n)},Ot.prototype.focus=function(){this.cm.options.readOnly!="nocursor"&&((!this.selectionInEditor()||P(qe(this.div))!=this.div)&&this.showSelection(this.prepareSelection(),!0),this.div.focus())},Ot.prototype.blur=function(){this.div.blur()},Ot.prototype.getField=function(){return this.div},Ot.prototype.supportsTouch=function(){return!0},Ot.prototype.receivedFocus=function(){var e=this,n=this;this.selectionInEditor()?setTimeout(function(){return e.pollSelection()},20):Pn(this.cm,function(){return n.cm.curOp.selectionChanged=!0});function s(){n.cm.state.focused&&(n.pollSelection(),n.polling.set(n.cm.options.pollInterval,s))}this.polling.set(this.cm.options.pollInterval,s)},Ot.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Ot.prototype.pollSelection=function(){if(!(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged())){var e=this.getSelection(),n=this.cm;if(q&&L&&this.cm.display.gutterSpecs.length&&Ul(e.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();return}if(!this.composing){this.rememberSelection();var s=Uo(n,e.anchorNode,e.anchorOffset),i=Uo(n,e.focusNode,e.focusOffset);s&&i&&Pn(n,function(){Wn(n.doc,zn(s,i),Ht),(s.bad||i.bad)&&(n.curOp.selectionChanged=!0)})}}},Ot.prototype.pollContent=function(){this.readDOMTimeout!=null&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e=this.cm,n=e.display,s=e.doc.sel.primary(),i=s.from(),a=s.to();if(i.ch==0&&i.line>e.firstLine()&&(i=pe(i.line-1,Xe(e.doc,i.line-1).length)),a.ch==Xe(e.doc,a.line).text.length&&a.line<e.lastLine()&&(a=pe(a.line+1,0)),i.line<n.viewFrom||a.line>n.viewTo-1)return!1;var h,y,b;i.line==n.viewFrom||(h=Ci(e,i.line))==0?(y=E(n.view[0].line),b=n.view[0].node):(y=E(n.view[h].line),b=n.view[h-1].node.nextSibling);var S=Ci(e,a.line),j,F;if(S==n.view.length-1?(j=n.viewTo-1,F=n.lineDiv.lastChild):(j=E(n.view[S+1].line)-1,F=n.view[S+1].node.previousSibling),!b)return!1;for(var K=e.doc.splitLines(gp(e,b,F,y,j)),oe=si(e.doc,pe(y,0),pe(j,Xe(e.doc,j).text.length));K.length>1&&oe.length>1;)if(Je(K)==Je(oe))K.pop(),oe.pop(),j--;else if(K[0]==oe[0])K.shift(),oe.shift(),y++;else break;for(var re=0,ge=0,ke=K[0],Ae=oe[0],Ne=Math.min(ke.length,Ae.length);re<Ne&&ke.charCodeAt(re)==Ae.charCodeAt(re);)++re;for(var Fe=Je(K),ze=Je(oe),Ge=Math.min(Fe.length-(K.length==1?re:0),ze.length-(oe.length==1?re:0));ge<Ge&&Fe.charCodeAt(Fe.length-ge-1)==ze.charCodeAt(ze.length-ge-1);)++ge;if(K.length==1&&oe.length==1&&y==i.line)for(;re&&re>i.ch&&Fe.charCodeAt(Fe.length-ge-1)==ze.charCodeAt(ze.length-ge-1);)re--,ge++;K[K.length-1]=Fe.slice(0,Fe.length-ge).replace(/^\u200b+/,""),K[0]=K[0].slice(re).replace(/\u200b+$/,"");var lt=pe(y,re),Ve=pe(j,oe.length?Je(oe).length-ge:0);if(K.length>1||K[0]||Be(lt,Ve))return Qs(e.doc,K,lt,Ve,"+input"),!0},Ot.prototype.ensurePolled=function(){this.forceCompositionEnd()},Ot.prototype.reset=function(){this.forceCompositionEnd()},Ot.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Ot.prototype.readFromDOMSoon=function(){var e=this;this.readDOMTimeout==null&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing)if(e.composing.done)e.composing=null;else return;e.updateFromDOM()},80))},Ot.prototype.updateFromDOM=function(){var e=this;(this.cm.isReadOnly()||!this.pollContent())&&Pn(this.cm,function(){return sr(e.cm)})},Ot.prototype.setUneditable=function(e){e.contentEditable="false"},Ot.prototype.onKeyPress=function(e){e.charCode==0||this.composing||(e.preventDefault(),this.cm.isReadOnly()||pn(this.cm,Ml)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0))},Ot.prototype.readOnlyChanged=function(e){this.div.contentEditable=String(e!="nocursor")},Ot.prototype.onContextMenu=function(){},Ot.prototype.resetPosition=function(){},Ot.prototype.needsContentAttribute=!0;function qu(e,n){var s=ul(e,n.line);if(!s||s.hidden)return null;var i=Xe(e.doc,n.line),a=Sc(s,i,n.line),h=xt(i,e.doc.direction),y="left";if(h){var b=Ur(h,n.ch);y=b%2?"right":"left"}var S=yo(a.map,n.ch,y);return S.offset=S.collapse=="right"?S.end:S.start,S}function Ul(e){for(var n=e;n;n=n.parentNode)if(/CodeMirror-gutter-wrapper/.test(n.className))return!0;return!1}function Ar(e,n){return n&&(e.bad=!0),e}function gp(e,n,s,i,a){var h="",y=!1,b=e.doc.lineSeparator(),S=!1;function j(re){return function(ge){return ge.id==re}}function F(){y&&(h+=b,S&&(h+=b),y=S=!1)}function K(re){re&&(F(),h+=re)}function oe(re){if(re.nodeType==1){var ge=re.getAttribute("cm-text");if(ge){K(ge);return}var ke=re.getAttribute("cm-marker"),Ae;if(ke){var Ne=e.findMarks(pe(i,0),pe(a+1,0),j(+ke));Ne.length&&(Ae=Ne[0].find(0))&&K(si(e.doc,Ae.from,Ae.to).join(b));return}if(re.getAttribute("contenteditable")=="false")return;var Fe=/^(pre|div|p|li|table|br)$/i.test(re.nodeName);if(!/^br$/i.test(re.nodeName)&&re.textContent.length==0)return;Fe&&F();for(var ze=0;ze<re.childNodes.length;ze++)oe(re.childNodes[ze]);/^(pre|p)$/i.test(re.nodeName)&&(S=!0),Fe&&(y=!0)}else re.nodeType==3&&K(re.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;oe(n),n!=s;)n=n.nextSibling,S=!1;return h}function Uo(e,n,s){var i;if(n==e.display.lineDiv){if(i=e.display.lineDiv.childNodes[s],!i)return Ar(e.clipPos(pe(e.display.viewTo-1)),!0);n=null,s=0}else for(i=n;;i=i.parentNode){if(!i||i==e.display.lineDiv)return null;if(i.parentNode&&i.parentNode==e.display.lineDiv)break}for(var a=0;a<e.display.view.length;a++){var h=e.display.view[a];if(h.node==i)return $u(h,n,s)}}function $u(e,n,s){var i=e.text.firstChild,a=!1;if(!n||!T(i,n))return Ar(pe(E(e.line),0),!0);if(n==i&&(a=!0,n=i.childNodes[s],s=0,!n)){var h=e.rest?Je(e.rest):e.line;return Ar(pe(E(h),h.text.length),a)}var y=n.nodeType==3?n:null,b=n;for(!y&&n.childNodes.length==1&&n.firstChild.nodeType==3&&(y=n.firstChild,s&&(s=y.nodeValue.length));b.parentNode!=i;)b=b.parentNode;var S=e.measure,j=S.maps;function F(Ae,Ne,Fe){for(var ze=-1;ze<(j?j.length:0);ze++)for(var Ge=ze<0?S.map:j[ze],lt=0;lt<Ge.length;lt+=3){var Ve=Ge[lt+2];if(Ve==Ae||Ve==Ne){var kt=E(ze<0?e.line:e.rest[ze]),Nt=Ge[lt]+Fe;return(Fe<0||Ve!=Ae)&&(Nt=Ge[lt+(Fe?1:0)]),pe(kt,Nt)}}}var K=F(y,b,s);if(K)return Ar(K,a);for(var oe=b.nextSibling,re=y?y.nodeValue.length-s:0;oe;oe=oe.nextSibling){if(K=F(oe,oe.firstChild,0),K)return Ar(pe(K.line,K.ch-re),a);re+=oe.textContent.length}for(var ge=b.previousSibling,ke=s;ge;ge=ge.previousSibling){if(K=F(ge,ge.firstChild,-1),K)return Ar(pe(K.line,K.ch+ke),a);ke+=ge.textContent.length}}var fn=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new tt,this.hasSelection=!1,this.composing=null,this.resetting=!1};fn.prototype.init=function(e){var n=this,s=this,i=this.cm;this.createField(e);var a=this.textarea;e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),z&&(a.style.width="0px"),rt(a,"input",function(){w&&C>=9&&n.hasSelection&&(n.hasSelection=null),s.poll()}),rt(a,"paste",function(y){qt(i,y)||Hu(y,i)||(i.state.pasteIncoming=+new Date,s.fastPoll())});function h(y){if(!qt(i,y)){if(i.somethingSelected())$a({lineWise:!1,text:i.getSelections()});else if(i.options.lineWiseCopyCut){var b=Fl(i);$a({lineWise:!0,text:b.text}),y.type=="cut"?i.setSelections(b.ranges,null,Ht):(s.prevInput="",a.value=b.text.join(`
`),Z(a))}else return;y.type=="cut"&&(i.state.cutIncoming=+new Date)}}rt(a,"cut",h),rt(a,"copy",h),rt(e.scroller,"paste",function(y){if(!($i(e,y)||qt(i,y))){if(!a.dispatchEvent){i.state.pasteIncoming=+new Date,s.focus();return}var b=new Event("paste");b.clipboardData=y.clipboardData,a.dispatchEvent(b)}}),rt(e.lineSpace,"selectstart",function(y){$i(e,y)||bn(y)}),rt(a,"compositionstart",function(){var y=i.getCursor("from");s.composing&&s.composing.range.clear(),s.composing={start:y,range:i.markText(y,i.getCursor("to"),{className:"CodeMirror-composing"})}}),rt(a,"compositionend",function(){s.composing&&(s.poll(),s.composing.range.clear(),s.composing=null)})},fn.prototype.createField=function(e){this.wrapper=Hl(),this.textarea=this.wrapper.firstChild;var n=this.cm.options;Wl(this.textarea,n.spellcheck,n.autocorrect,n.autocapitalize)},fn.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},fn.prototype.prepareSelection=function(){var e=this.cm,n=e.display,s=e.doc,i=gl(e);if(e.options.moveInputWithCursor){var a=_n(e,s.sel.primary().head,"div"),h=n.wrapper.getBoundingClientRect(),y=n.lineDiv.getBoundingClientRect();i.teTop=Math.max(0,Math.min(n.wrapper.clientHeight-10,a.top+y.top-h.top)),i.teLeft=Math.max(0,Math.min(n.wrapper.clientWidth-10,a.left+y.left-h.left))}return i},fn.prototype.showSelection=function(e){var n=this.cm,s=n.display;xe(s.cursorDiv,e.cursors),xe(s.selectionDiv,e.selection),e.teTop!=null&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},fn.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var n=this.cm;if(this.resetting=!0,n.somethingSelected()){this.prevInput="";var s=n.getSelection();this.textarea.value=s,n.state.focused&&Z(this.textarea),w&&C>=9&&(this.hasSelection=s)}else e||(this.prevInput=this.textarea.value="",w&&C>=9&&(this.hasSelection=null));this.resetting=!1}},fn.prototype.getField=function(){return this.textarea},fn.prototype.supportsTouch=function(){return!1},fn.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!W||P(qe(this.textarea))!=this.textarea))try{this.textarea.focus()}catch{}},fn.prototype.blur=function(){this.textarea.blur()},fn.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},fn.prototype.receivedFocus=function(){this.slowPoll()},fn.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},fn.prototype.fastPoll=function(){var e=!1,n=this;n.pollingFast=!0;function s(){var i=n.poll();!i&&!e?(e=!0,n.polling.set(60,s)):(n.pollingFast=!1,n.slowPoll())}n.polling.set(20,s)},fn.prototype.poll=function(){var e=this,n=this.cm,s=this.textarea,i=this.prevInput;if(this.contextMenuPending||this.resetting||!n.state.focused||yi(s)&&!i&&!this.composing||n.isReadOnly()||n.options.disableInput||n.state.keySeq)return!1;var a=s.value;if(a==i&&!n.somethingSelected())return!1;if(w&&C>=9&&this.hasSelection===a||G&&/[\uf700-\uf7ff]/.test(a))return n.display.input.reset(),!1;if(n.doc.sel==n.display.selForContextMenu){var h=a.charCodeAt(0);if(h==8203&&!i&&(i="​"),h==8666)return this.reset(),this.cm.execCommand("undo")}for(var y=0,b=Math.min(i.length,a.length);y<b&&i.charCodeAt(y)==a.charCodeAt(y);)++y;return Pn(n,function(){Ml(n,a.slice(y),i.length-y,null,e.composing?"*compose":null),a.length>1e3||a.indexOf(`
`)>-1?s.value=e.prevInput="":e.prevInput=a,e.composing&&(e.composing.range.clear(),e.composing.range=n.markText(e.composing.start,n.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},fn.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},fn.prototype.onKeyPress=function(){w&&C>=9&&(this.hasSelection=null),this.fastPoll()},fn.prototype.onContextMenu=function(e){var n=this,s=n.cm,i=s.display,a=n.textarea;n.contextMenuPending&&n.contextMenuPending();var h=gs(s,e),y=i.scroller.scrollTop;if(!h||U)return;var b=s.options.resetSelectionOnContextMenu;b&&s.doc.sel.contains(h)==-1&&pn(s,Wn)(s.doc,zn(h),Ht);var S=a.style.cssText,j=n.wrapper.style.cssText,F=n.wrapper.offsetParent.getBoundingClientRect();n.wrapper.style.cssText="position: static",a.style.cssText=`position: absolute; width: 30px; height: 30px;
      top: `+(e.clientY-F.top-5)+"px; left: "+(e.clientX-F.left-5)+`px;
      z-index: 1000; background: `+(w?"rgba(255, 255, 255, .05)":"transparent")+`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;var K;N&&(K=a.ownerDocument.defaultView.scrollY),i.input.focus(),N&&a.ownerDocument.defaultView.scrollTo(null,K),i.input.reset(),s.somethingSelected()||(a.value=n.prevInput=" "),n.contextMenuPending=re,i.selForContextMenu=s.doc.sel,clearTimeout(i.detectingSelectAll);function oe(){if(a.selectionStart!=null){var ke=s.somethingSelected(),Ae="​"+(ke?a.value:"");a.value="⇚",a.value=Ae,n.prevInput=ke?"":"​",a.selectionStart=1,a.selectionEnd=Ae.length,i.selForContextMenu=s.doc.sel}}function re(){if(n.contextMenuPending==re&&(n.contextMenuPending=!1,n.wrapper.style.cssText=j,a.style.cssText=S,w&&C<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=y),a.selectionStart!=null)){(!w||w&&C<9)&&oe();var ke=0,Ae=function(){i.selForContextMenu==s.doc.sel&&a.selectionStart==0&&a.selectionEnd>0&&n.prevInput=="​"?pn(s,Zi)(s):ke++<10?i.detectingSelectAll=setTimeout(Ae,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(Ae,200)}}if(w&&C>=9&&oe(),be){pr(e);var ge=function(){tn(window,"mouseup",ge),setTimeout(re,20)};rt(window,"mouseup",ge)}else setTimeout(re,50)},fn.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled=e=="nocursor",this.textarea.readOnly=!!e},fn.prototype.setUneditable=function(){},fn.prototype.needsContentAttribute=!1;function ed(e,n){if(n=n?Ue(n):{},n.value=e.value,!n.tabindex&&e.tabIndex&&(n.tabindex=e.tabIndex),!n.placeholder&&e.placeholder&&(n.placeholder=e.placeholder),n.autofocus==null){var s=P(qe(e));n.autofocus=s==e||e.getAttribute("autofocus")!=null&&s==document.body}function i(){e.value=b.getValue()}var a;if(e.form&&(rt(e.form,"submit",i),!n.leaveSubmitMethodAlone)){var h=e.form;a=h.submit;try{var y=h.submit=function(){i(),h.submit=a,h.submit(),h.submit=y}}catch{}}n.finishInit=function(S){S.save=i,S.getTextArea=function(){return e},S.toTextArea=function(){S.toTextArea=isNaN,i(),e.parentNode.removeChild(S.getWrapperElement()),e.style.display="",e.form&&(tn(e.form,"submit",i),!n.leaveSubmitMethodAlone&&typeof e.form.submit=="function"&&(e.form.submit=a))}},e.style.display="none";var b=en(function(S){return e.parentNode.insertBefore(S,e.nextSibling)},n);return b}function qo(e){e.off=tn,e.on=rt,e.wheelEventPixels=Ss,e.Doc=It,e.splitLines=jr,e.countColumn=$e,e.findColumn=We,e.isWordChar=Ye,e.Pass=Yt,e.signal=Rt,e.Line=ki,e.changeEnd=Fn,e.scrollbarModel=Ac,e.Pos=pe,e.cmpPos=Be,e.modes=Mi,e.mimeModes=Dr,e.resolveMode=zi,e.getMode=Bt,e.modeExtensions=Mr,e.extendMode=us,e.copyState=At,e.startState=ii,e.innerMode=Fi,e.commands=Ba,e.keyMap=Ri,e.keyName=Tu,e.isModifierKey=_u,e.lookupKey=ra,e.normalizeKeyMap=Fc,e.StringStream=Vt,e.SharedTextMarker=ea,e.TextMarker=hi,e.LineWidget=Li,e.e_preventDefault=bn,e.e_stopPropagation=ri,e.e_stop=pr,e.addClass=H,e.contains=T,e.rmClass=Le,e.keyNames=Qr}vr(en),Bl(en);var or="iter insert remove copy getEditor constructor".split(" ");for(var ql in It.prototype)It.prototype.hasOwnProperty(ql)&&Ke(or,ql)<0&&(en.prototype[ql]=(function(e){return function(){return e.apply(this.doc,arguments)}})(It.prototype[ql]));return Nn(It),en.inputStyles={textarea:fn,contenteditable:Ot},en.defineMode=function(e){!en.defaults.mode&&e!="null"&&(en.defaults.mode=e),Gn.apply(this,arguments)},en.defineMIME=vi,en.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),en.defineMIME("text/plain","null"),en.defineExtension=function(e,n){en.prototype[e]=n},en.defineDocExtension=function(e,n){It.prototype[e]=n},en.fromTextArea=ed,qo(en),en.version="5.65.21",en}))})(Cd)),Cd.exports}var Tb=ss();const Af=pm(Tb);var Rf={exports:{}},If;function jb(){return If||(If=1,(function(l,u){(function(d){d(ss())})(function(d){function f(C){return new RegExp("^(("+C.join(")|(")+"))\\b")}var g=f(["and","or","not","is"]),v=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],k=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];d.registerHelper("hintWords","python",v.concat(k).concat(["exec","print"]));function _(C){return C.scopes[C.scopes.length-1]}d.defineMode("python",function(C,N){for(var O="error",L=N.delimiters||N.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,Y=[N.singleOperators,N.doubleOperators,N.doubleDelimiters,N.tripleDelimiters,N.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],U=0;U<Y.length;U++)Y[U]||Y.splice(U--,1);var B=N.hangingIndent||C.indentUnit,J=v,I=k;N.extra_keywords!=null&&(J=J.concat(N.extra_keywords)),N.extra_builtins!=null&&(I=I.concat(N.extra_builtins));var z=!(N.version&&Number(N.version)<3);if(z){var q=N.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;J=J.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),I=I.concat(["ascii","bytes","exec","print"]);var W=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var q=N.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;J=J.concat(["exec","print"]),I=I.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var W=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var G=f(J),X=f(I);function se(ee,Q){var T=ee.sol()&&Q.lastToken!="\\";if(T&&(Q.indent=ee.indentation()),T&&_(Q).type=="py"){var P=_(Q).offset;if(ee.eatSpace()){var H=ee.indentation();return H>P?ne(Q):H<P&&ue(ee,Q)&&ee.peek()!="#"&&(Q.errorToken=!0),null}else{var D=ve(ee,Q);return P>0&&ue(ee,Q)&&(D+=" "+O),D}}return ve(ee,Q)}function ve(ee,Q,T){if(ee.eatSpace())return null;if(!T&&ee.match(/^#.*/))return"comment";if(ee.match(/^[0-9\.]/,!1)){var P=!1;if(ee.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(P=!0),ee.match(/^[\d_]+\.\d*/)&&(P=!0),ee.match(/^\.\d+/)&&(P=!0),P)return ee.eat(/J/i),"number";var H=!1;if(ee.match(/^0x[0-9a-f_]+/i)&&(H=!0),ee.match(/^0b[01_]+/i)&&(H=!0),ee.match(/^0o[0-7_]+/i)&&(H=!0),ee.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(ee.eat(/J/i),H=!0),ee.match(/^0(?![\dx])/i)&&(H=!0),H)return ee.eat(/L/i),"number"}if(ee.match(W)){var D=ee.current().toLowerCase().indexOf("f")!==-1;return D?(Q.tokenize=De(ee.current(),Q.tokenize),Q.tokenize(ee,Q)):(Q.tokenize=be(ee.current(),Q.tokenize),Q.tokenize(ee,Q))}for(var Z=0;Z<Y.length;Z++)if(ee.match(Y[Z]))return"operator";return ee.match(L)?"punctuation":Q.lastToken=="."&&ee.match(q)?"property":ee.match(G)||ee.match(g)?"keyword":ee.match(X)?"builtin":ee.match(/^(self|cls)\b/)?"variable-2":ee.match(q)?Q.lastToken=="def"||Q.lastToken=="class"?"def":"variable":(ee.next(),T?null:O)}function De(ee,Q){for(;"rubf".indexOf(ee.charAt(0).toLowerCase())>=0;)ee=ee.substr(1);var T=ee.length==1,P="string";function H(Z){return function(Ce,Ie){var qe=ve(Ce,Ie,!0);return qe=="punctuation"&&(Ce.current()=="{"?Ie.tokenize=H(Z+1):Ce.current()=="}"&&(Z>1?Ie.tokenize=H(Z-1):Ie.tokenize=D)),qe}}function D(Z,Ce){for(;!Z.eol();)if(Z.eatWhile(/[^'"\{\}\\]/),Z.eat("\\")){if(Z.next(),T&&Z.eol())return P}else{if(Z.match(ee))return Ce.tokenize=Q,P;if(Z.match("{{"))return P;if(Z.match("{",!1))return Ce.tokenize=H(0),Z.current()?P:Ce.tokenize(Z,Ce);if(Z.match("}}"))return P;if(Z.match("}"))return O;Z.eat(/['"]/)}if(T){if(N.singleLineStringErrors)return O;Ce.tokenize=Q}return P}return D.isString=!0,D}function be(ee,Q){for(;"rubf".indexOf(ee.charAt(0).toLowerCase())>=0;)ee=ee.substr(1);var T=ee.length==1,P="string";function H(D,Z){for(;!D.eol();)if(D.eatWhile(/[^'"\\]/),D.eat("\\")){if(D.next(),T&&D.eol())return P}else{if(D.match(ee))return Z.tokenize=Q,P;D.eat(/['"]/)}if(T){if(N.singleLineStringErrors)return O;Z.tokenize=Q}return P}return H.isString=!0,H}function ne(ee){for(;_(ee).type!="py";)ee.scopes.pop();ee.scopes.push({offset:_(ee).offset+C.indentUnit,type:"py",align:null})}function Le(ee,Q,T){var P=ee.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:ee.column()+1;Q.scopes.push({offset:Q.indent+B,type:T,align:P})}function ue(ee,Q){for(var T=ee.indentation();Q.scopes.length>1&&_(Q).offset>T;){if(_(Q).type!="py")return!0;Q.scopes.pop()}return _(Q).offset!=T}function xe(ee,Q){ee.sol()&&(Q.beginningOfLine=!0,Q.dedent=!1);var T=Q.tokenize(ee,Q),P=ee.current();if(Q.beginningOfLine&&P=="@")return ee.match(q,!1)?"meta":z?"operator":O;if(/\S/.test(P)&&(Q.beginningOfLine=!1),(T=="variable"||T=="builtin")&&Q.lastToken=="meta"&&(T="meta"),(P=="pass"||P=="return")&&(Q.dedent=!0),P=="lambda"&&(Q.lambda=!0),P==":"&&!Q.lambda&&_(Q).type=="py"&&ee.match(/^\s*(?:#|$)/,!1)&&ne(Q),P.length==1&&!/string|comment/.test(T)){var H="[({".indexOf(P);if(H!=-1&&Le(ee,Q,"])}".slice(H,H+1)),H="])}".indexOf(P),H!=-1)if(_(Q).type==P)Q.indent=Q.scopes.pop().offset-B;else return O}return Q.dedent&&ee.eol()&&_(Q).type=="py"&&Q.scopes.length>1&&Q.scopes.pop(),T}var A={startState:function(ee){return{tokenize:se,scopes:[{offset:ee||0,type:"py",align:null}],indent:ee||0,lastToken:null,lambda:!1,dedent:0}},token:function(ee,Q){var T=Q.errorToken;T&&(Q.errorToken=!1);var P=xe(ee,Q);return P&&P!="comment"&&(Q.lastToken=P=="keyword"||P=="punctuation"?ee.current():P),P=="punctuation"&&(P=null),ee.eol()&&Q.lambda&&(Q.lambda=!1),T?P+" "+O:P},indent:function(ee,Q){if(ee.tokenize!=se)return ee.tokenize.isString?d.Pass:0;var T=_(ee),P=T.type==Q.charAt(0)||T.type=="py"&&!ee.dedent&&/^(else:|elif |except |finally:)/.test(Q);return T.align!=null?T.align-(P?1:0):T.offset-(P?B:0)},electricInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,closeBrackets:{triples:`'"`},lineComment:"#",fold:"indent"};return A}),d.defineMIME("text/x-python","python");var w=function(C){return C.split(" ")};d.defineMIME("text/x-cython",{name:"python",extra_keywords:w("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})})})()),Rf.exports}jb();var Of={exports:{}},Df;function qm(){return Df||(Df=1,(function(l,u){(function(d){d(ss())})(function(d){d.defineMode("javascript",function(f,g){var v=f.indentUnit,k=g.statementIndent,_=g.jsonld,w=g.json||_,C=g.trackScope!==!1,N=g.typescript,O=g.wordCharacters||/[\w$\xa1-\uffff]/,L=(function(){function E(Qt){return{type:Qt,style:"keyword"}}var $=E("keyword a"),me=E("keyword b"),je=E("keyword c"),pe=E("keyword d"),Be=E("operator"),Ct={type:"atom",style:"atom"};return{if:E("if"),while:$,with:$,else:me,do:me,try:me,finally:me,return:pe,break:pe,continue:pe,new:E("new"),delete:je,void:je,throw:je,debugger:E("debugger"),var:E("var"),const:E("var"),let:E("var"),function:E("function"),catch:E("catch"),for:E("for"),switch:E("switch"),case:E("case"),default:E("default"),in:Be,typeof:Be,instanceof:Be,true:Ct,false:Ct,null:Ct,undefined:Ct,NaN:Ct,Infinity:Ct,this:E("this"),class:E("class"),super:E("atom"),yield:je,export:E("export"),import:E("import"),extends:je,await:je}})(),Y=/[+\-*&%=<>!?|~^@]/,U=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function B(E){for(var $=!1,me,je=!1;(me=E.next())!=null;){if(!$){if(me=="/"&&!je)return;me=="["?je=!0:je&&me=="]"&&(je=!1)}$=!$&&me=="\\"}}var J,I;function z(E,$,me){return J=E,I=me,$}function q(E,$){var me=E.next();if(me=='"'||me=="'")return $.tokenize=W(me),$.tokenize(E,$);if(me=="."&&E.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return z("number","number");if(me=="."&&E.match(".."))return z("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(me))return z(me);if(me=="="&&E.eat(">"))return z("=>","operator");if(me=="0"&&E.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return z("number","number");if(/\d/.test(me))return E.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),z("number","number");if(me=="/")return E.eat("*")?($.tokenize=G,G(E,$)):E.eat("/")?(E.skipToEnd(),z("comment","comment")):Yn(E,$,1)?(B(E),E.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),z("regexp","string-2")):(E.eat("="),z("operator","operator",E.current()));if(me=="`")return $.tokenize=X,X(E,$);if(me=="#"&&E.peek()=="!")return E.skipToEnd(),z("meta","meta");if(me=="#"&&E.eatWhile(O))return z("variable","property");if(me=="<"&&E.match("!--")||me=="-"&&E.match("->")&&!/\S/.test(E.string.slice(0,E.start)))return E.skipToEnd(),z("comment","comment");if(Y.test(me))return(me!=">"||!$.lexical||$.lexical.type!=">")&&(E.eat("=")?(me=="!"||me=="=")&&E.eat("="):/[<>*+\-|&?]/.test(me)&&(E.eat(me),me==">"&&E.eat(me))),me=="?"&&E.eat(".")?z("."):z("operator","operator",E.current());if(O.test(me)){E.eatWhile(O);var je=E.current();if($.lastType!="."){if(L.propertyIsEnumerable(je)){var pe=L[je];return z(pe.type,pe.style,je)}if(je=="async"&&E.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return z("async","keyword",je)}return z("variable","variable",je)}}function W(E){return function($,me){var je=!1,pe;if(_&&$.peek()=="@"&&$.match(U))return me.tokenize=q,z("jsonld-keyword","meta");for(;(pe=$.next())!=null&&!(pe==E&&!je);)je=!je&&pe=="\\";return je||(me.tokenize=q),z("string","string")}}function G(E,$){for(var me=!1,je;je=E.next();){if(je=="/"&&me){$.tokenize=q;break}me=je=="*"}return z("comment","comment")}function X(E,$){for(var me=!1,je;(je=E.next())!=null;){if(!me&&(je=="`"||je=="$"&&E.eat("{"))){$.tokenize=q;break}me=!me&&je=="\\"}return z("quasi","string-2",E.current())}var se="([{}])";function ve(E,$){$.fatArrowAt&&($.fatArrowAt=null);var me=E.string.indexOf("=>",E.start);if(!(me<0)){if(N){var je=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(E.string.slice(E.start,me));je&&(me=je.index)}for(var pe=0,Be=!1,Ct=me-1;Ct>=0;--Ct){var Qt=E.string.charAt(Ct),kn=se.indexOf(Qt);if(kn>=0&&kn<3){if(!pe){++Ct;break}if(--pe==0){Qt=="("&&(Be=!0);break}}else if(kn>=3&&kn<6)++pe;else if(O.test(Qt))Be=!0;else if(/["'\/`]/.test(Qt))for(;;--Ct){if(Ct==0)return;var Kr=E.string.charAt(Ct-1);if(Kr==Qt&&E.string.charAt(Ct-2)!="\\"){Ct--;break}}else if(Be&&!pe){++Ct;break}}Be&&!pe&&($.fatArrowAt=Ct)}}var De={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function be(E,$,me,je,pe,Be){this.indented=E,this.column=$,this.type=me,this.prev=pe,this.info=Be,je!=null&&(this.align=je)}function ne(E,$){if(!C)return!1;for(var me=E.localVars;me;me=me.next)if(me.name==$)return!0;for(var je=E.context;je;je=je.prev)for(var me=je.vars;me;me=me.next)if(me.name==$)return!0}function Le(E,$,me,je,pe){var Be=E.cc;for(ue.state=E,ue.stream=pe,ue.marked=null,ue.cc=Be,ue.style=$,E.lexical.hasOwnProperty("align")||(E.lexical.align=!0);;){var Ct=Be.length?Be.pop():w?Ke:$e;if(Ct(me,je)){for(;Be.length&&Be[Be.length-1].lex;)Be.pop()();return ue.marked?ue.marked:me=="variable"&&ne(E,je)?"variable-2":$}}}var ue={state:null,marked:null,cc:null};function xe(){for(var E=arguments.length-1;E>=0;E--)ue.cc.push(arguments[E])}function A(){return xe.apply(null,arguments),!0}function ee(E,$){for(var me=$;me;me=me.next)if(me.name==E)return!0;return!1}function Q(E){var $=ue.state;if(ue.marked="def",!!C){if($.context){if($.lexical.info=="var"&&$.context&&$.context.block){var me=T(E,$.context);if(me!=null){$.context=me;return}}else if(!ee(E,$.localVars)){$.localVars=new D(E,$.localVars);return}}g.globalVars&&!ee(E,$.globalVars)&&($.globalVars=new D(E,$.globalVars))}}function T(E,$){if($)if($.block){var me=T(E,$.prev);return me?me==$.prev?$:new H(me,$.vars,!0):null}else return ee(E,$.vars)?$:new H($.prev,new D(E,$.vars),!1);else return null}function P(E){return E=="public"||E=="private"||E=="protected"||E=="abstract"||E=="readonly"}function H(E,$,me){this.prev=E,this.vars=$,this.block=me}function D(E,$){this.name=E,this.next=$}var Z=new D("this",new D("arguments",null));function Ce(){ue.state.context=new H(ue.state.context,ue.state.localVars,!1),ue.state.localVars=Z}function Ie(){ue.state.context=new H(ue.state.context,ue.state.localVars,!0),ue.state.localVars=null}Ce.lex=Ie.lex=!0;function qe(){ue.state.localVars=ue.state.context.vars,ue.state.context=ue.state.context.prev}qe.lex=!0;function Oe(E,$){var me=function(){var je=ue.state,pe=je.indented;if(je.lexical.type=="stat")pe=je.lexical.indented;else for(var Be=je.lexical;Be&&Be.type==")"&&Be.align;Be=Be.prev)pe=Be.indented;je.lexical=new be(pe,ue.stream.column(),E,null,je.lexical,$)};return me.lex=!0,me}function _e(){var E=ue.state;E.lexical.prev&&(E.lexical.type==")"&&(E.indented=E.lexical.indented),E.lexical=E.lexical.prev)}_e.lex=!0;function Ue(E){function $(me){return me==E?A():E==";"||me=="}"||me==")"||me=="]"?xe():A($)}return $}function $e(E,$){return E=="var"?A(Oe("vardef",$),ri,Ue(";"),_e):E=="keyword a"?A(Oe("form"),Yt,$e,_e):E=="keyword b"?A(Oe("form"),$e,_e):E=="keyword d"?ue.stream.match(/^\s*$/,!1)?A():A(Oe("stat"),Tt,Ue(";"),_e):E=="debugger"?A(Ue(";")):E=="{"?A(Oe("}"),Ie,nr,_e,qe):E==";"?A():E=="if"?(ue.state.lexical.info=="else"&&ue.state.cc[ue.state.cc.length-1]==_e&&ue.state.cc.pop()(),A(Oe("form"),Yt,$e,_e,wn)):E=="function"?A(jr):E=="for"?A(Oe("form"),Ie,Tr,$e,qe,_e):E=="class"||N&&$=="interface"?(ue.marked="keyword",A(Oe("form",E=="class"?E:$),Mi,_e)):E=="variable"?N&&$=="declare"?(ue.marked="keyword",A($e)):N&&($=="module"||$=="enum"||$=="type")&&ue.stream.match(/^\s*\w/,!1)?(ue.marked="keyword",$=="enum"?A(Xe):$=="type"?A(os,Ue("operator"),xt,Ue(";")):A(Oe("form"),In,Ue("{"),Oe("}"),nr,_e,_e)):N&&$=="namespace"?(ue.marked="keyword",A(Oe("form"),Ke,$e,_e)):N&&$=="abstract"?(ue.marked="keyword",A($e)):A(Oe("stat"),wt):E=="switch"?A(Oe("form"),Yt,Ue("{"),Oe("}","switch"),Ie,nr,_e,_e,qe):E=="case"?A(Ke,Ue(":")):E=="default"?A(Ue(":")):E=="catch"?A(Oe("form"),Ce,tt,$e,_e,qe):E=="export"?A(Oe("stat"),zi,_e):E=="import"?A(Oe("stat"),Mr,_e):E=="async"?A($e):$=="@"?A(Ke,$e):xe(Oe("stat"),Ke,Ue(";"),_e)}function tt(E){if(E=="(")return A(On,Ue(")"))}function Ke(E,$){return Ht(E,$,!1)}function zt(E,$){return Ht(E,$,!0)}function Yt(E){return E!="("?xe():A(Oe(")"),Tt,Ue(")"),_e)}function Ht(E,$,me){if(ue.state.fatArrowAt==ue.stream.start){var je=me?ft:Je;if(E=="(")return A(Ce,Oe(")"),ht(On,")"),_e,Ue("=>"),je,qe);if(E=="variable")return xe(Ce,In,Ue("=>"),je,qe)}var pe=me?We:Ze;return De.hasOwnProperty(E)?A(pe):E=="function"?A(jr,pe):E=="class"||N&&$=="interface"?(ue.marked="keyword",A(Oe("form"),ls,_e)):E=="keyword c"||E=="async"?A(me?zt:Ke):E=="("?A(Oe(")"),Tt,Ue(")"),_e,pe):E=="operator"||E=="spread"?A(me?zt:Ke):E=="["?A(Oe("]"),Vt,_e,pe):E=="{"?Xt(ot,"}",null,pe):E=="quasi"?xe(st,pe):E=="new"?A(le(me)):A()}function Tt(E){return E.match(/[;\}\)\],]/)?xe():xe(Ke)}function Ze(E,$){return E==","?A(Tt):We(E,$,!1)}function We(E,$,me){var je=me==!1?Ze:We,pe=me==!1?Ke:zt;if(E=="=>")return A(Ce,me?ft:Je,qe);if(E=="operator")return/\+\+|--/.test($)||N&&$=="!"?A(je):N&&$=="<"&&ue.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?A(Oe(">"),ht(xt,">"),_e,je):$=="?"?A(Ke,Ue(":"),pe):A(pe);if(E=="quasi")return xe(st,je);if(E!=";"){if(E=="(")return Xt(zt,")","call",je);if(E==".")return A(Ye,je);if(E=="[")return A(Oe("]"),Tt,Ue("]"),_e,je);if(N&&$=="as")return ue.marked="keyword",A(xt,je);if(E=="regexp")return ue.state.lastType=ue.marked="operator",ue.stream.backUp(ue.stream.pos-ue.stream.start-1),A(pe)}}function st(E,$){return E!="quasi"?xe():$.slice($.length-2)!="${"?A(st):A(Tt,ct)}function ct(E){if(E=="}")return ue.marked="string-2",ue.state.tokenize=X,A(st)}function Je(E){return ve(ue.stream,ue.state),xe(E=="{"?$e:Ke)}function ft(E){return ve(ue.stream,ue.state),xe(E=="{"?$e:zt)}function le(E){return function($){return $=="."?A(E?he:Se):$=="variable"&&N?A(mn,E?We:Ze):xe(E?zt:Ke)}}function Se(E,$){if($=="target")return ue.marked="keyword",A(Ze)}function he(E,$){if($=="target")return ue.marked="keyword",A(We)}function wt(E){return E==":"?A(_e,$e):xe(Ze,Ue(";"),_e)}function Ye(E){if(E=="variable")return ue.marked="property",A()}function ot(E,$){if(E=="async")return ue.marked="property",A(ot);if(E=="variable"||ue.style=="keyword"){if(ue.marked="property",$=="get"||$=="set")return A(et);var me;return N&&ue.state.fatArrowAt==ue.stream.start&&(me=ue.stream.match(/^\s*:\s*/,!1))&&(ue.state.fatArrowAt=ue.stream.pos+me[0].length),A(yt)}else{if(E=="number"||E=="string")return ue.marked=_?"property":ue.style+" property",A(yt);if(E=="jsonld-keyword")return A(yt);if(N&&P($))return ue.marked="keyword",A(ot);if(E=="[")return A(Ke,_r,Ue("]"),yt);if(E=="spread")return A(zt,yt);if($=="*")return ue.marked="keyword",A(ot);if(E==":")return xe(yt)}}function et(E){return E!="variable"?xe(yt):(ue.marked="property",A(jr))}function yt(E){if(E==":")return A(zt);if(E=="(")return xe(jr)}function ht(E,$,me){function je(pe,Be){if(me?me.indexOf(pe)>-1:pe==","){var Ct=ue.state.lexical;return Ct.info=="call"&&(Ct.pos=(Ct.pos||0)+1),A(function(Qt,kn){return Qt==$||kn==$?xe():xe(E)},je)}return pe==$||Be==$?A():me&&me.indexOf(";")>-1?xe(E):A(Ue($))}return function(pe,Be){return pe==$||Be==$?A():xe(E,je)}}function Xt(E,$,me){for(var je=3;je<arguments.length;je++)ue.cc.push(arguments[je]);return A(Oe($,me),ht(E,$),_e)}function nr(E){return E=="}"?A():xe($e,nr)}function _r(E,$){if(N){if(E==":")return A(xt);if($=="?")return A(_r)}}function Ir(E,$){if(N&&(E==":"||$=="in"))return A(xt)}function Ur(E){if(N&&E==":")return ue.stream.match(/^\s*\w+\s+is\b/,!1)?A(Ke,qr,xt):A(xt)}function qr(E,$){if($=="is")return ue.marked="keyword",A()}function xt(E,$){if($=="keyof"||$=="typeof"||$=="infer"||$=="readonly")return ue.marked="keyword",A($=="typeof"?zt:xt);if(E=="variable"||$=="void")return ue.marked="type",A(xn);if($=="|"||$=="&")return A(xt);if(E=="string"||E=="number"||E=="atom")return A(xn);if(E=="[")return A(Oe("]"),ht(xt,"]",","),_e,xn);if(E=="{")return A(Oe("}"),rt,_e,xn);if(E=="(")return A(ht(qt,")"),mi,xn);if(E=="<")return A(ht(xt,">"),xt);if(E=="quasi")return xe(tn,xn)}function mi(E){if(E=="=>")return A(xt)}function rt(E){return E.match(/[\}\)\]]/)?A():E==","||E==";"?A(rt):xe(Cr,rt)}function Cr(E,$){if(E=="variable"||ue.style=="keyword")return ue.marked="property",A(Cr);if($=="?"||E=="number"||E=="string")return A(Cr);if(E==":")return A(xt);if(E=="[")return A(Ue("variable"),Ir,Ue("]"),Cr);if(E=="(")return xe(yi,Cr);if(!E.match(/[;\}\)\],]/))return A()}function tn(E,$){return E!="quasi"?xe():$.slice($.length-2)!="${"?A(tn):A(xt,Rt)}function Rt(E){if(E=="}")return ue.marked="string-2",ue.state.tokenize=X,A(tn)}function qt(E,$){return E=="variable"&&ue.stream.match(/^\s*[?:]/,!1)||$=="?"?A(qt):E==":"?A(xt):E=="spread"?A(qt):xe(xt)}function xn(E,$){if($=="<")return A(Oe(">"),ht(xt,">"),_e,xn);if($=="|"||E=="."||$=="&")return A(xt);if(E=="[")return A(xt,Ue("]"),xn);if($=="extends"||$=="implements")return ue.marked="keyword",A(xt);if($=="?")return A(xt,Ue(":"),xt)}function mn(E,$){if($=="<")return A(Oe(">"),ht(xt,">"),_e,xn)}function Nn(){return xe(xt,bn)}function bn(E,$){if($=="=")return A(xt)}function ri(E,$){return $=="enum"?(ue.marked="keyword",A(Xe)):xe(In,_r,En,as)}function In(E,$){if(N&&P($))return ue.marked="keyword",A(In);if(E=="variable")return Q($),A();if(E=="spread")return A(In);if(E=="[")return Xt(gi,"]");if(E=="{")return Xt(pr,"}")}function pr(E,$){return E=="variable"&&!ue.stream.match(/^\s*:/,!1)?(Q($),A(En)):(E=="variable"&&(ue.marked="property"),E=="spread"?A(In):E=="}"?xe():E=="["?A(Ke,Ue("]"),Ue(":"),pr):A(Ue(":"),In,En))}function gi(){return xe(In,En)}function En(E,$){if($=="=")return A(zt)}function as(E){if(E==",")return A(ri)}function wn(E,$){if(E=="keyword b"&&$=="else")return A(Oe("form","else"),$e,_e)}function Tr(E,$){if($=="await")return A(Tr);if(E=="(")return A(Oe(")"),$r,_e)}function $r(E){return E=="var"?A(ri,Or):E=="variable"?A(Or):xe(Or)}function Or(E,$){return E==")"?A():E==";"?A(Or):$=="in"||$=="of"?(ue.marked="keyword",A(Ke,Or)):xe(Ke,Or)}function jr(E,$){if($=="*")return ue.marked="keyword",A(jr);if(E=="variable")return Q($),A(jr);if(E=="(")return A(Ce,Oe(")"),ht(On,")"),_e,Ur,$e,qe);if(N&&$=="<")return A(Oe(">"),ht(Nn,">"),_e,jr)}function yi(E,$){if($=="*")return ue.marked="keyword",A(yi);if(E=="variable")return Q($),A(yi);if(E=="(")return A(Ce,Oe(")"),ht(On,")"),_e,Ur,qe);if(N&&$=="<")return A(Oe(">"),ht(Nn,">"),_e,yi)}function os(E,$){if(E=="keyword"||E=="variable")return ue.marked="type",A(os);if($=="<")return A(Oe(">"),ht(Nn,">"),_e)}function On(E,$){return $=="@"&&A(Ke,On),E=="spread"?A(On):N&&P($)?(ue.marked="keyword",A(On)):N&&E=="this"?A(_r,En):xe(In,_r,En)}function ls(E,$){return E=="variable"?Mi(E,$):Dr(E,$)}function Mi(E,$){if(E=="variable")return Q($),A(Dr)}function Dr(E,$){if($=="<")return A(Oe(">"),ht(Nn,">"),_e,Dr);if($=="extends"||$=="implements"||N&&E==",")return $=="implements"&&(ue.marked="keyword"),A(N?xt:Ke,Dr);if(E=="{")return A(Oe("}"),Gn,_e)}function Gn(E,$){if(E=="async"||E=="variable"&&($=="static"||$=="get"||$=="set"||N&&P($))&&ue.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return ue.marked="keyword",A(Gn);if(E=="variable"||ue.style=="keyword")return ue.marked="property",A(vi,Gn);if(E=="number"||E=="string")return A(vi,Gn);if(E=="[")return A(Ke,_r,Ue("]"),vi,Gn);if($=="*")return ue.marked="keyword",A(Gn);if(N&&E=="(")return xe(yi,Gn);if(E==";"||E==",")return A(Gn);if(E=="}")return A();if($=="@")return A(Ke,Gn)}function vi(E,$){if($=="!"||$=="?")return A(vi);if(E==":")return A(xt,En);if($=="=")return A(zt);var me=ue.state.lexical.prev,je=me&&me.info=="interface";return xe(je?yi:jr)}function zi(E,$){return $=="*"?(ue.marked="keyword",A(ii,Ue(";"))):$=="default"?(ue.marked="keyword",A(Ke,Ue(";"))):E=="{"?A(ht(Bt,"}"),ii,Ue(";")):xe($e)}function Bt(E,$){if($=="as")return ue.marked="keyword",A(Ue("variable"));if(E=="variable")return xe(zt,Bt)}function Mr(E){return E=="string"?A():E=="("?xe(Ke):E=="."?xe(Ze):xe(us,At,ii)}function us(E,$){return E=="{"?Xt(us,"}"):(E=="variable"&&Q($),$=="*"&&(ue.marked="keyword"),A(Fi))}function At(E){if(E==",")return A(us,At)}function Fi(E,$){if($=="as")return ue.marked="keyword",A(us)}function ii(E,$){if($=="from")return ue.marked="keyword",A(Ke)}function Vt(E){return E=="]"?A():xe(ht(zt,"]"))}function Xe(){return xe(Oe("form"),In,Ue("{"),Oe("}"),ht(si,"}"),_e,_e)}function si(){return xe(In,En)}function cs(E,$){return E.lastType=="operator"||E.lastType==","||Y.test($.charAt(0))||/[,.]/.test($.charAt(0))}function Yn(E,$,me){return $.tokenize==q&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test($.lastType)||$.lastType=="quasi"&&/\{\s*$/.test(E.string.slice(0,E.pos-(me||0)))}return{startState:function(E){var $={tokenize:q,lastType:"sof",cc:[],lexical:new be((E||0)-v,0,"block",!1),localVars:g.localVars,context:g.localVars&&new H(null,null,!1),indented:E||0};return g.globalVars&&typeof g.globalVars=="object"&&($.globalVars=g.globalVars),$},token:function(E,$){if(E.sol()&&($.lexical.hasOwnProperty("align")||($.lexical.align=!1),$.indented=E.indentation(),ve(E,$)),$.tokenize!=G&&E.eatSpace())return null;var me=$.tokenize(E,$);return J=="comment"?me:($.lastType=J=="operator"&&(I=="++"||I=="--")?"incdec":J,Le($,me,J,I,E))},indent:function(E,$){if(E.tokenize==G||E.tokenize==X)return d.Pass;if(E.tokenize!=q)return 0;var me=$&&$.charAt(0),je=E.lexical,pe;if(!/^\s*else\b/.test($))for(var Be=E.cc.length-1;Be>=0;--Be){var Ct=E.cc[Be];if(Ct==_e)je=je.prev;else if(Ct!=wn&&Ct!=qe)break}for(;(je.type=="stat"||je.type=="form")&&(me=="}"||(pe=E.cc[E.cc.length-1])&&(pe==Ze||pe==We)&&!/^[,\.=+\-*:?[\(]/.test($));)je=je.prev;k&&je.type==")"&&je.prev.type=="stat"&&(je=je.prev);var Qt=je.type,kn=me==Qt;return Qt=="vardef"?je.indented+(E.lastType=="operator"||E.lastType==","?je.info.length+1:0):Qt=="form"&&me=="{"?je.indented:Qt=="form"?je.indented+v:Qt=="stat"?je.indented+(cs(E,$)?k||v:0):je.info=="switch"&&!kn&&g.doubleIndentSwitch!=!1?je.indented+(/^(?:case|default)\b/.test($)?v:2*v):je.align?je.column+(kn?0:1):je.indented+(kn?0:v)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:w?null:"/*",blockCommentEnd:w?null:"*/",blockCommentContinue:w?null:" * ",lineComment:w?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:w?"json":"javascript",jsonldMode:_,jsonMode:w,expressionAllowed:Yn,skipExpression:function(E){Le(E,"atom","atom","true",new d.StringStream("",2,null))}}}),d.registerHelper("wordChars","javascript",/[\w$]/),d.defineMIME("text/javascript","javascript"),d.defineMIME("text/ecmascript","javascript"),d.defineMIME("application/javascript","javascript"),d.defineMIME("application/x-javascript","javascript"),d.defineMIME("application/ecmascript","javascript"),d.defineMIME("application/json",{name:"javascript",json:!0}),d.defineMIME("application/x-json",{name:"javascript",json:!0}),d.defineMIME("application/manifest+json",{name:"javascript",json:!0}),d.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),d.defineMIME("text/typescript",{name:"javascript",typescript:!0}),d.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})()),Of.exports}qm();var Mf={exports:{}},zf;function Nb(){return zf||(zf=1,(function(l,u){(function(d){d(ss())})(function(d){function f(T,P,H,D,Z,Ce){this.indented=T,this.column=P,this.type=H,this.info=D,this.align=Z,this.prev=Ce}function g(T,P,H,D){var Z=T.indented;return T.context&&T.context.type=="statement"&&H!="statement"&&(Z=T.context.indented),T.context=new f(Z,P,H,D,null,T.context)}function v(T){var P=T.context.type;return(P==")"||P=="]"||P=="}")&&(T.indented=T.context.indented),T.context=T.context.prev}function k(T,P,H){if(P.prevToken=="variable"||P.prevToken=="type"||/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(T.string.slice(0,H))||P.typeAtEndOfLine&&T.column()==T.indentation())return!0}function _(T){for(;;){if(!T||T.type=="top")return!0;if(T.type=="}"&&T.prev.info!="namespace")return!1;T=T.prev}}d.defineMode("clike",function(T,P){var H=T.indentUnit,D=P.statementIndentUnit||H,Z=P.dontAlignCalls,Ce=P.keywords||{},Ie=P.types||{},qe=P.builtin||{},Oe=P.blockKeywords||{},_e=P.defKeywords||{},Ue=P.atoms||{},$e=P.hooks||{},tt=P.multiLineStrings,Ke=P.indentStatements!==!1,zt=P.indentSwitch!==!1,Yt=P.namespaceSeparator,Ht=P.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,Tt=P.numberStart||/[\d\.]/,Ze=P.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,We=P.isOperatorChar||/[+\-*&%=<>!?|\/]/,st=P.isIdentifierChar||/[\w\$_\xa1-\uffff]/,ct=P.isReservedIdentifier||!1,Je,ft;function le(Ye,ot){var et=Ye.next();if($e[et]){var yt=$e[et](Ye,ot);if(yt!==!1)return yt}if(et=='"'||et=="'")return ot.tokenize=Se(et),ot.tokenize(Ye,ot);if(Tt.test(et)){if(Ye.backUp(1),Ye.match(Ze))return"number";Ye.next()}if(Ht.test(et))return Je=et,null;if(et=="/"){if(Ye.eat("*"))return ot.tokenize=he,he(Ye,ot);if(Ye.eat("/"))return Ye.skipToEnd(),"comment"}if(We.test(et)){for(;!Ye.match(/^\/[\/*]/,!1)&&Ye.eat(We););return"operator"}if(Ye.eatWhile(st),Yt)for(;Ye.match(Yt);)Ye.eatWhile(st);var ht=Ye.current();return C(Ce,ht)?(C(Oe,ht)&&(Je="newstatement"),C(_e,ht)&&(ft=!0),"keyword"):C(Ie,ht)?"type":C(qe,ht)||ct&&ct(ht)?(C(Oe,ht)&&(Je="newstatement"),"builtin"):C(Ue,ht)?"atom":"variable"}function Se(Ye){return function(ot,et){for(var yt=!1,ht,Xt=!1;(ht=ot.next())!=null;){if(ht==Ye&&!yt){Xt=!0;break}yt=!yt&&ht=="\\"}return(Xt||!(yt||tt))&&(et.tokenize=null),"string"}}function he(Ye,ot){for(var et=!1,yt;yt=Ye.next();){if(yt=="/"&&et){ot.tokenize=null;break}et=yt=="*"}return"comment"}function wt(Ye,ot){P.typeFirstDefinitions&&Ye.eol()&&_(ot.context)&&(ot.typeAtEndOfLine=k(Ye,ot,Ye.pos))}return{startState:function(Ye){return{tokenize:null,context:new f((Ye||0)-H,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(Ye,ot){var et=ot.context;if(Ye.sol()&&(et.align==null&&(et.align=!1),ot.indented=Ye.indentation(),ot.startOfLine=!0),Ye.eatSpace())return wt(Ye,ot),null;Je=ft=null;var yt=(ot.tokenize||le)(Ye,ot);if(yt=="comment"||yt=="meta")return yt;if(et.align==null&&(et.align=!0),Je==";"||Je==":"||Je==","&&Ye.match(/^\s*(?:\/\/.*)?$/,!1))for(;ot.context.type=="statement";)v(ot);else if(Je=="{")g(ot,Ye.column(),"}");else if(Je=="[")g(ot,Ye.column(),"]");else if(Je=="(")g(ot,Ye.column(),")");else if(Je=="}"){for(;et.type=="statement";)et=v(ot);for(et.type=="}"&&(et=v(ot));et.type=="statement";)et=v(ot)}else Je==et.type?v(ot):Ke&&((et.type=="}"||et.type=="top")&&Je!=";"||et.type=="statement"&&Je=="newstatement")&&g(ot,Ye.column(),"statement",Ye.current());if(yt=="variable"&&(ot.prevToken=="def"||P.typeFirstDefinitions&&k(Ye,ot,Ye.start)&&_(ot.context)&&Ye.match(/^\s*\(/,!1))&&(yt="def"),$e.token){var ht=$e.token(Ye,ot,yt);ht!==void 0&&(yt=ht)}return yt=="def"&&P.styleDefs===!1&&(yt="variable"),ot.startOfLine=!1,ot.prevToken=ft?"def":yt||Je,wt(Ye,ot),yt},indent:function(Ye,ot){if(Ye.tokenize!=le&&Ye.tokenize!=null||Ye.typeAtEndOfLine&&_(Ye.context))return d.Pass;var et=Ye.context,yt=ot&&ot.charAt(0),ht=yt==et.type;if(et.type=="statement"&&yt=="}"&&(et=et.prev),P.dontIndentStatements)for(;et.type=="statement"&&P.dontIndentStatements.test(et.info);)et=et.prev;if($e.indent){var Xt=$e.indent(Ye,et,ot,H);if(typeof Xt=="number")return Xt}var nr=et.prev&&et.prev.info=="switch";if(P.allmanIndentation&&/[{(]/.test(yt)){for(;et.type!="top"&&et.type!="}";)et=et.prev;return et.indented}return et.type=="statement"?et.indented+(yt=="{"?0:D):et.align&&(!Z||et.type!=")")?et.column+(ht?0:1):et.type==")"&&!ht?et.indented+D:et.indented+(ht?0:H)+(!ht&&nr&&!/^(?:case|default)\b/.test(ot)?H:0)},electricInput:zt?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});function w(T){for(var P={},H=T.split(" "),D=0;D<H.length;++D)P[H[D]]=!0;return P}function C(T,P){return typeof T=="function"?T(P):T.propertyIsEnumerable(P)}var N="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",O="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",L="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",Y="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",U=w("int long char short double float unsigned signed void bool"),B=w("SEL instancetype id Class Protocol BOOL");function J(T){return C(U,T)||/.+_t$/.test(T)}function I(T){return J(T)||C(B,T)}var z="case do else for if switch while struct enum union",q="struct enum union";function W(T,P){if(!P.startOfLine)return!1;for(var H,D=null;H=T.peek();){if(H=="\\"&&T.match(/^.$/)){D=W;break}else if(H=="/"&&T.match(/^\/[\/\*]/,!1))break;T.next()}return P.tokenize=D,"meta"}function G(T,P){return P.prevToken=="type"?"type":!1}function X(T){return!T||T.length<2||T[0]!="_"?!1:T[1]=="_"||T[1]!==T[1].toLowerCase()}function se(T){return T.eatWhile(/[\w\.']/),"number"}function ve(T,P){if(T.backUp(1),T.match(/^(?:R|u8R|uR|UR|LR)/)){var H=T.match(/^"([^\s\\()]{0,16})\(/);return H?(P.cpp11RawStringDelim=H[1],P.tokenize=ne,ne(T,P)):!1}return T.match(/^(?:u8|u|U|L)/)?T.match(/^["']/,!1)?"string":!1:(T.next(),!1)}function De(T){var P=/(\w+)::~?(\w+)$/.exec(T);return P&&P[1]==P[2]}function be(T,P){for(var H;(H=T.next())!=null;)if(H=='"'&&!T.eat('"')){P.tokenize=null;break}return"string"}function ne(T,P){var H=P.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),D=T.match(new RegExp(".*?\\)"+H+'"'));return D?P.tokenize=null:T.skipToEnd(),"string"}function Le(T,P){typeof T=="string"&&(T=[T]);var H=[];function D(Ce){if(Ce)for(var Ie in Ce)Ce.hasOwnProperty(Ie)&&H.push(Ie)}D(P.keywords),D(P.types),D(P.builtin),D(P.atoms),H.length&&(P.helperType=T[0],d.registerHelper("hintWords",T[0],H));for(var Z=0;Z<T.length;++Z)d.defineMIME(T[Z],P)}Le(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:w(N),types:J,blockKeywords:w(z),defKeywords:w(q),typeFirstDefinitions:!0,atoms:w("NULL true false"),isReservedIdentifier:X,hooks:{"#":W,"*":G},modeProps:{fold:["brace","include"]}}),Le(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:w(N+" "+O),types:J,blockKeywords:w(z+" class try catch"),defKeywords:w(q+" class namespace"),typeFirstDefinitions:!0,atoms:w("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:X,hooks:{"#":W,"*":G,u:ve,U:ve,L:ve,R:ve,0:se,1:se,2:se,3:se,4:se,5:se,6:se,7:se,8:se,9:se,token:function(T,P,H){if(H=="variable"&&T.peek()=="("&&(P.prevToken==";"||P.prevToken==null||P.prevToken=="}")&&De(T.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Le("text/x-java",{name:"clike",keywords:w("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:w("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:w("catch class do else finally for if switch try while"),defKeywords:w("class interface enum @interface"),typeFirstDefinitions:!0,atoms:w("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(T){return T.match("interface",!1)?!1:(T.eatWhile(/[\w\$_]/),"meta")},'"':function(T,P){return T.match(/""$/)?(P.tokenize=ue,P.tokenize(T,P)):!1}},modeProps:{fold:["brace","import"]}}),Le("text/x-csharp",{name:"clike",keywords:w("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:w("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:w("catch class do else finally for foreach if struct switch try while"),defKeywords:w("class interface namespace record struct var"),typeFirstDefinitions:!0,atoms:w("true false null"),hooks:{"@":function(T,P){return T.eat('"')?(P.tokenize=be,be(T,P)):(T.eatWhile(/[\w\$_]/),"meta")}}});function ue(T,P){for(var H=!1;!T.eol();){if(!H&&T.match('"""')){P.tokenize=null;break}H=T.next()=="\\"&&!H}return"string"}function xe(T){return function(P,H){for(var D;D=P.next();)if(D=="*"&&P.eat("/"))if(T==1){H.tokenize=null;break}else return H.tokenize=xe(T-1),H.tokenize(P,H);else if(D=="/"&&P.eat("*"))return H.tokenize=xe(T+1),H.tokenize(P,H);return"comment"}}Le("text/x-scala",{name:"clike",keywords:w("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:w("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:w("catch class enum do else finally for forSome if match switch try while"),defKeywords:w("class enum def object package trait type val var"),atoms:w("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(T){return T.eatWhile(/[\w\$_]/),"meta"},'"':function(T,P){return T.match('""')?(P.tokenize=ue,P.tokenize(T,P)):!1},"'":function(T){return T.match(/^(\\[^'\s]+|[^\\'])'/)?"string-2":(T.eatWhile(/[\w\$_\xa1-\uffff]/),"atom")},"=":function(T,P){var H=P.context;return H.type=="}"&&H.align&&T.eat(">")?(P.context=new f(H.indented,H.column,H.type,H.info,null,H.prev),"operator"):!1},"/":function(T,P){return T.eat("*")?(P.tokenize=xe(1),P.tokenize(T,P)):!1}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}});function A(T){return function(P,H){for(var D=!1,Z,Ce=!1;!P.eol();){if(!T&&!D&&P.match('"')){Ce=!0;break}if(T&&P.match('"""')){Ce=!0;break}Z=P.next(),!D&&Z=="$"&&P.match("{")&&P.skipTo("}"),D=!D&&Z=="\\"&&!T}return(Ce||!T)&&(H.tokenize=null),"string"}}Le("text/x-kotlin",{name:"clike",keywords:w("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"),types:w("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),indentSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(ul?|l|f)?/i,blockKeywords:w("catch class do else finally for if where try while enum"),defKeywords:w("class val var object interface fun"),atoms:w("true false null this"),hooks:{"@":function(T){return T.eatWhile(/[\w\$_]/),"meta"},"*":function(T,P){return P.prevToken=="."?"variable":"operator"},'"':function(T,P){return P.tokenize=A(T.match('""')),P.tokenize(T,P)},"/":function(T,P){return T.eat("*")?(P.tokenize=xe(1),P.tokenize(T,P)):!1},indent:function(T,P,H,D){var Z=H&&H.charAt(0);if((T.prevToken=="}"||T.prevToken==")")&&H=="")return T.indented;if(T.prevToken=="operator"&&H!="}"&&T.context.type!="}"||T.prevToken=="variable"&&Z=="."||(T.prevToken=="}"||T.prevToken==")")&&Z==".")return D*2+P.indented;if(P.align&&P.type=="}")return P.indented+(T.context.type==(H||"").charAt(0)?0:D)}},modeProps:{closeBrackets:{triples:'"'}}}),Le(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:w("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:w("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:w("for while do if else struct"),builtin:w("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:w("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":W},modeProps:{fold:["brace","include"]}}),Le("text/x-nesc",{name:"clike",keywords:w(N+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:J,blockKeywords:w(z),atoms:w("null true false"),hooks:{"#":W},modeProps:{fold:["brace","include"]}}),Le("text/x-objectivec",{name:"clike",keywords:w(N+" "+L),types:I,builtin:w(Y),blockKeywords:w(z+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:w(q+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:w("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:X,hooks:{"#":W,"*":G},modeProps:{fold:["brace","include"]}}),Le("text/x-objectivec++",{name:"clike",keywords:w(N+" "+L+" "+O),types:I,builtin:w(Y),blockKeywords:w(z+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:w(q+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:w("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:X,hooks:{"#":W,"*":G,u:ve,U:ve,L:ve,R:ve,0:se,1:se,2:se,3:se,4:se,5:se,6:se,7:se,8:se,9:se,token:function(T,P,H){if(H=="variable"&&T.peek()=="("&&(P.prevToken==";"||P.prevToken==null||P.prevToken=="}")&&De(T.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Le("text/x-squirrel",{name:"clike",keywords:w("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:J,blockKeywords:w("case catch class else for foreach if switch try while"),defKeywords:w("function local class"),typeFirstDefinitions:!0,atoms:w("true false null"),hooks:{"#":W},modeProps:{fold:["brace","include"]}});var ee=null;function Q(T){return function(P,H){for(var D=!1,Z,Ce=!1;!P.eol();){if(!D&&P.match('"')&&(T=="single"||P.match('""'))){Ce=!0;break}if(!D&&P.match("``")){ee=Q(T),Ce=!0;break}Z=P.next(),D=T=="single"&&!D&&Z=="\\"}return Ce&&(H.tokenize=null),"string"}}Le("text/x-ceylon",{name:"clike",keywords:w("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(T){var P=T.charAt(0);return P===P.toUpperCase()&&P!==P.toLowerCase()},blockKeywords:w("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:w("class dynamic function interface module object package value"),builtin:w("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:w("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(T){return T.eatWhile(/[\w\$_]/),"meta"},'"':function(T,P){return P.tokenize=Q(T.match('""')?"triple":"single"),P.tokenize(T,P)},"`":function(T,P){return!ee||!T.match("`")?!1:(P.tokenize=ee,ee=null,P.tokenize(T,P))},"'":function(T){return T.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(T,P,H){if((H=="variable"||H=="type")&&P.prevToken==".")return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})})})()),Mf.exports}Nb();var Ff={exports:{}},Wf;function $m(){return Wf||(Wf=1,(function(l,u){(function(d){d(ss())})(function(d){var f={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},g={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};d.defineMode("xml",function(v,k){var _=v.indentUnit,w={},C=k.htmlMode?f:g;for(var N in C)w[N]=C[N];for(var N in k)w[N]=k[N];var O,L;function Y(A,ee){function Q(H){return ee.tokenize=H,H(A,ee)}var T=A.next();if(T=="<")return A.eat("!")?A.eat("[")?A.match("CDATA[")?Q(J("atom","]]>")):null:A.match("--")?Q(J("comment","-->")):A.match("DOCTYPE",!0,!0)?(A.eatWhile(/[\w\._\-]/),Q(I(1))):null:A.eat("?")?(A.eatWhile(/[\w\._\-]/),ee.tokenize=J("meta","?>"),"meta"):(O=A.eat("/")?"closeTag":"openTag",ee.tokenize=U,"tag bracket");if(T=="&"){var P;return A.eat("#")?A.eat("x")?P=A.eatWhile(/[a-fA-F\d]/)&&A.eat(";"):P=A.eatWhile(/[\d]/)&&A.eat(";"):P=A.eatWhile(/[\w\.\-:]/)&&A.eat(";"),P?"atom":"error"}else return A.eatWhile(/[^&<]/),null}Y.isInText=!0;function U(A,ee){var Q=A.next();if(Q==">"||Q=="/"&&A.eat(">"))return ee.tokenize=Y,O=Q==">"?"endTag":"selfcloseTag","tag bracket";if(Q=="=")return O="equals",null;if(Q=="<"){ee.tokenize=Y,ee.state=X,ee.tagName=ee.tagStart=null;var T=ee.tokenize(A,ee);return T?T+" tag error":"tag error"}else return/[\'\"]/.test(Q)?(ee.tokenize=B(Q),ee.stringStartCol=A.column(),ee.tokenize(A,ee)):(A.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function B(A){var ee=function(Q,T){for(;!Q.eol();)if(Q.next()==A){T.tokenize=U;break}return"string"};return ee.isInAttribute=!0,ee}function J(A,ee){return function(Q,T){for(;!Q.eol();){if(Q.match(ee)){T.tokenize=Y;break}Q.next()}return A}}function I(A){return function(ee,Q){for(var T;(T=ee.next())!=null;){if(T=="<")return Q.tokenize=I(A+1),Q.tokenize(ee,Q);if(T==">")if(A==1){Q.tokenize=Y;break}else return Q.tokenize=I(A-1),Q.tokenize(ee,Q)}return"meta"}}function z(A){return A&&A.toLowerCase()}function q(A,ee,Q){this.prev=A.context,this.tagName=ee||"",this.indent=A.indented,this.startOfLine=Q,(w.doNotIndent.hasOwnProperty(ee)||A.context&&A.context.noIndent)&&(this.noIndent=!0)}function W(A){A.context&&(A.context=A.context.prev)}function G(A,ee){for(var Q;;){if(!A.context||(Q=A.context.tagName,!w.contextGrabbers.hasOwnProperty(z(Q))||!w.contextGrabbers[z(Q)].hasOwnProperty(z(ee))))return;W(A)}}function X(A,ee,Q){return A=="openTag"?(Q.tagStart=ee.column(),se):A=="closeTag"?ve:X}function se(A,ee,Q){return A=="word"?(Q.tagName=ee.current(),L="tag",ne):w.allowMissingTagName&&A=="endTag"?(L="tag bracket",ne(A,ee,Q)):(L="error",se)}function ve(A,ee,Q){if(A=="word"){var T=ee.current();return Q.context&&Q.context.tagName!=T&&w.implicitlyClosed.hasOwnProperty(z(Q.context.tagName))&&W(Q),Q.context&&Q.context.tagName==T||w.matchClosing===!1?(L="tag",De):(L="tag error",be)}else return w.allowMissingTagName&&A=="endTag"?(L="tag bracket",De(A,ee,Q)):(L="error",be)}function De(A,ee,Q){return A!="endTag"?(L="error",De):(W(Q),X)}function be(A,ee,Q){return L="error",De(A,ee,Q)}function ne(A,ee,Q){if(A=="word")return L="attribute",Le;if(A=="endTag"||A=="selfcloseTag"){var T=Q.tagName,P=Q.tagStart;return Q.tagName=Q.tagStart=null,A=="selfcloseTag"||w.autoSelfClosers.hasOwnProperty(z(T))?G(Q,T):(G(Q,T),Q.context=new q(Q,T,P==Q.indented)),X}return L="error",ne}function Le(A,ee,Q){return A=="equals"?ue:(w.allowMissing||(L="error"),ne(A,ee,Q))}function ue(A,ee,Q){return A=="string"?xe:A=="word"&&w.allowUnquoted?(L="string",ne):(L="error",ne(A,ee,Q))}function xe(A,ee,Q){return A=="string"?xe:ne(A,ee,Q)}return{startState:function(A){var ee={tokenize:Y,state:X,indented:A||0,tagName:null,tagStart:null,context:null};return A!=null&&(ee.baseIndent=A),ee},token:function(A,ee){if(!ee.tagName&&A.sol()&&(ee.indented=A.indentation()),A.eatSpace())return null;O=null;var Q=ee.tokenize(A,ee);return(Q||O)&&Q!="comment"&&(L=null,ee.state=ee.state(O||Q,A,ee),L&&(Q=L=="error"?Q+" error":L)),Q},indent:function(A,ee,Q){var T=A.context;if(A.tokenize.isInAttribute)return A.tagStart==A.indented?A.stringStartCol+1:A.indented+_;if(T&&T.noIndent)return d.Pass;if(A.tokenize!=U&&A.tokenize!=Y)return Q?Q.match(/^(\s*)/)[0].length:0;if(A.tagName)return w.multilineTagIndentPastTag!==!1?A.tagStart+A.tagName.length+2:A.tagStart+_*(w.multilineTagIndentFactor||1);if(w.alignCDATA&&/<!\[CDATA\[/.test(ee))return 0;var P=ee&&/^<(\/)?([\w_:\.-]*)/.exec(ee);if(P&&P[1])for(;T;)if(T.tagName==P[2]){T=T.prev;break}else if(w.implicitlyClosed.hasOwnProperty(z(T.tagName)))T=T.prev;else break;else if(P)for(;T;){var H=w.contextGrabbers[z(T.tagName)];if(H&&H.hasOwnProperty(z(P[2])))T=T.prev;else break}for(;T&&T.prev&&!T.startOfLine;)T=T.prev;return T?T.indent+_:A.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:w.htmlMode?"html":"xml",helperType:w.htmlMode?"html":"xml",skipAttribute:function(A){A.state==ue&&(A.state=ne)},xmlCurrentTag:function(A){return A.tagName?{name:A.tagName,close:A.type=="closeTag"}:null},xmlCurrentContext:function(A){for(var ee=[],Q=A.context;Q;Q=Q.prev)ee.push(Q.tagName);return ee.reverse()}}}),d.defineMIME("text/xml","xml"),d.defineMIME("application/xml","xml"),d.mimeModes.hasOwnProperty("text/html")||d.defineMIME("text/html",{name:"xml",htmlMode:!0})})})()),Ff.exports}$m();var Hf={exports:{}},Bf;function Km(){return Bf||(Bf=1,(function(l,u){(function(d){d(ss())})(function(d){d.defineMode("css",function(be,ne){var Le=ne.inline;ne.propertyKeywords||(ne=d.resolveMode("text/css"));var ue=be.indentUnit,xe=ne.tokenHooks,A=ne.documentTypes||{},ee=ne.mediaTypes||{},Q=ne.mediaFeatures||{},T=ne.mediaValueKeywords||{},P=ne.propertyKeywords||{},H=ne.nonStandardPropertyKeywords||{},D=ne.fontProperties||{},Z=ne.counterDescriptors||{},Ce=ne.colorKeywords||{},Ie=ne.valueKeywords||{},qe=ne.allowNested,Oe=ne.lineComment,_e=ne.supportsAtComponent===!0,Ue=be.highlightNonStandardPropertyKeywords!==!1,$e,tt;function Ke(le,Se){return $e=Se,le}function zt(le,Se){var he=le.next();if(xe[he]){var wt=xe[he](le,Se);if(wt!==!1)return wt}if(he=="@")return le.eatWhile(/[\w\\\-]/),Ke("def",le.current());if(he=="="||(he=="~"||he=="|")&&le.eat("="))return Ke(null,"compare");if(he=='"'||he=="'")return Se.tokenize=Yt(he),Se.tokenize(le,Se);if(he=="#")return le.eatWhile(/[\w\\\-]/),Ke("atom","hash");if(he=="!")return le.match(/^\s*\w*/),Ke("keyword","important");if(/\d/.test(he)||he=="."&&le.eat(/\d/))return le.eatWhile(/[\w.%]/),Ke("number","unit");if(he==="-"){if(/[\d.]/.test(le.peek()))return le.eatWhile(/[\w.%]/),Ke("number","unit");if(le.match(/^-[\w\\\-]*/))return le.eatWhile(/[\w\\\-]/),le.match(/^\s*:/,!1)?Ke("variable-2","variable-definition"):Ke("variable-2","variable");if(le.match(/^\w+-/))return Ke("meta","meta")}else return/[,+>*\/]/.test(he)?Ke(null,"select-op"):he=="."&&le.match(/^-?[_a-z][_a-z0-9-]*/i)?Ke("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(he)?Ke(null,he):le.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(le.current())&&(Se.tokenize=Ht),Ke("variable callee","variable")):/[\w\\\-]/.test(he)?(le.eatWhile(/[\w\\\-]/),Ke("property","word")):Ke(null,null)}function Yt(le){return function(Se,he){for(var wt=!1,Ye;(Ye=Se.next())!=null;){if(Ye==le&&!wt){le==")"&&Se.backUp(1);break}wt=!wt&&Ye=="\\"}return(Ye==le||!wt&&le!=")")&&(he.tokenize=null),Ke("string","string")}}function Ht(le,Se){return le.next(),le.match(/^\s*[\"\')]/,!1)?Se.tokenize=null:Se.tokenize=Yt(")"),Ke(null,"(")}function Tt(le,Se,he){this.type=le,this.indent=Se,this.prev=he}function Ze(le,Se,he,wt){return le.context=new Tt(he,Se.indentation()+(wt===!1?0:ue),le.context),he}function We(le){return le.context.prev&&(le.context=le.context.prev),le.context.type}function st(le,Se,he){return ft[he.context.type](le,Se,he)}function ct(le,Se,he,wt){for(var Ye=wt||1;Ye>0;Ye--)he.context=he.context.prev;return st(le,Se,he)}function Je(le){var Se=le.current().toLowerCase();Ie.hasOwnProperty(Se)?tt="atom":Ce.hasOwnProperty(Se)?tt="keyword":tt="variable"}var ft={};return ft.top=function(le,Se,he){if(le=="{")return Ze(he,Se,"block");if(le=="}"&&he.context.prev)return We(he);if(_e&&/@component/i.test(le))return Ze(he,Se,"atComponentBlock");if(/^@(-moz-)?document$/i.test(le))return Ze(he,Se,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(le))return Ze(he,Se,"atBlock");if(/^@(font-face|counter-style)/i.test(le))return he.stateArg=le,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(le))return"keyframes";if(le&&le.charAt(0)=="@")return Ze(he,Se,"at");if(le=="hash")tt="builtin";else if(le=="word")tt="tag";else{if(le=="variable-definition")return"maybeprop";if(le=="interpolation")return Ze(he,Se,"interpolation");if(le==":")return"pseudo";if(qe&&le=="(")return Ze(he,Se,"parens")}return he.context.type},ft.block=function(le,Se,he){if(le=="word"){var wt=Se.current().toLowerCase();return P.hasOwnProperty(wt)?(tt="property","maybeprop"):H.hasOwnProperty(wt)?(tt=Ue?"string-2":"property","maybeprop"):qe?(tt=Se.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(tt+=" error","maybeprop")}else return le=="meta"?"block":!qe&&(le=="hash"||le=="qualifier")?(tt="error","block"):ft.top(le,Se,he)},ft.maybeprop=function(le,Se,he){return le==":"?Ze(he,Se,"prop"):st(le,Se,he)},ft.prop=function(le,Se,he){if(le==";")return We(he);if(le=="{"&&qe)return Ze(he,Se,"propBlock");if(le=="}"||le=="{")return ct(le,Se,he);if(le=="(")return Ze(he,Se,"parens");if(le=="hash"&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(Se.current()))tt+=" error";else if(le=="word")Je(Se);else if(le=="interpolation")return Ze(he,Se,"interpolation");return"prop"},ft.propBlock=function(le,Se,he){return le=="}"?We(he):le=="word"?(tt="property","maybeprop"):he.context.type},ft.parens=function(le,Se,he){return le=="{"||le=="}"?ct(le,Se,he):le==")"?We(he):le=="("?Ze(he,Se,"parens"):le=="interpolation"?Ze(he,Se,"interpolation"):(le=="word"&&Je(Se),"parens")},ft.pseudo=function(le,Se,he){return le=="meta"?"pseudo":le=="word"?(tt="variable-3",he.context.type):st(le,Se,he)},ft.documentTypes=function(le,Se,he){return le=="word"&&A.hasOwnProperty(Se.current())?(tt="tag",he.context.type):ft.atBlock(le,Se,he)},ft.atBlock=function(le,Se,he){if(le=="(")return Ze(he,Se,"atBlock_parens");if(le=="}"||le==";")return ct(le,Se,he);if(le=="{")return We(he)&&Ze(he,Se,qe?"block":"top");if(le=="interpolation")return Ze(he,Se,"interpolation");if(le=="word"){var wt=Se.current().toLowerCase();wt=="only"||wt=="not"||wt=="and"||wt=="or"?tt="keyword":ee.hasOwnProperty(wt)?tt="attribute":Q.hasOwnProperty(wt)?tt="property":T.hasOwnProperty(wt)?tt="keyword":P.hasOwnProperty(wt)?tt="property":H.hasOwnProperty(wt)?tt=Ue?"string-2":"property":Ie.hasOwnProperty(wt)?tt="atom":Ce.hasOwnProperty(wt)?tt="keyword":tt="error"}return he.context.type},ft.atComponentBlock=function(le,Se,he){return le=="}"?ct(le,Se,he):le=="{"?We(he)&&Ze(he,Se,qe?"block":"top",!1):(le=="word"&&(tt="error"),he.context.type)},ft.atBlock_parens=function(le,Se,he){return le==")"?We(he):le=="{"||le=="}"?ct(le,Se,he,2):ft.atBlock(le,Se,he)},ft.restricted_atBlock_before=function(le,Se,he){return le=="{"?Ze(he,Se,"restricted_atBlock"):le=="word"&&he.stateArg=="@counter-style"?(tt="variable","restricted_atBlock_before"):st(le,Se,he)},ft.restricted_atBlock=function(le,Se,he){return le=="}"?(he.stateArg=null,We(he)):le=="word"?(he.stateArg=="@font-face"&&!D.hasOwnProperty(Se.current().toLowerCase())||he.stateArg=="@counter-style"&&!Z.hasOwnProperty(Se.current().toLowerCase())?tt="error":tt="property","maybeprop"):"restricted_atBlock"},ft.keyframes=function(le,Se,he){return le=="word"?(tt="variable","keyframes"):le=="{"?Ze(he,Se,"top"):st(le,Se,he)},ft.at=function(le,Se,he){return le==";"?We(he):le=="{"||le=="}"?ct(le,Se,he):(le=="word"?tt="tag":le=="hash"&&(tt="builtin"),"at")},ft.interpolation=function(le,Se,he){return le=="}"?We(he):le=="{"||le==";"?ct(le,Se,he):(le=="word"?tt="variable":le!="variable"&&le!="("&&le!=")"&&(tt="error"),"interpolation")},{startState:function(le){return{tokenize:null,state:Le?"block":"top",stateArg:null,context:new Tt(Le?"block":"top",le||0,null)}},token:function(le,Se){if(!Se.tokenize&&le.eatSpace())return null;var he=(Se.tokenize||zt)(le,Se);return he&&typeof he=="object"&&($e=he[1],he=he[0]),tt=he,$e!="comment"&&(Se.state=ft[Se.state]($e,le,Se)),tt},indent:function(le,Se){var he=le.context,wt=Se&&Se.charAt(0),Ye=he.indent;return he.type=="prop"&&(wt=="}"||wt==")")&&(he=he.prev),he.prev&&(wt=="}"&&(he.type=="block"||he.type=="top"||he.type=="interpolation"||he.type=="restricted_atBlock")?(he=he.prev,Ye=he.indent):(wt==")"&&(he.type=="parens"||he.type=="atBlock_parens")||wt=="{"&&(he.type=="at"||he.type=="atBlock"))&&(Ye=Math.max(0,he.indent-ue))),Ye},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:Oe,fold:"brace"}});function f(be){for(var ne={},Le=0;Le<be.length;++Le)ne[be[Le].toLowerCase()]=!0;return ne}var g=["domain","regexp","url","url-prefix"],v=f(g),k=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],_=f(k),w=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],C=f(w),N=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],O=f(N),L=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],Y=f(L),U=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],B=f(U),J=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],I=f(J),z=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],q=f(z),W=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],G=f(W),X=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],se=f(X),ve=g.concat(k).concat(w).concat(N).concat(L).concat(U).concat(W).concat(X);d.registerHelper("hintWords","css",ve);function De(be,ne){for(var Le=!1,ue;(ue=be.next())!=null;){if(Le&&ue=="/"){ne.tokenize=null;break}Le=ue=="*"}return["comment","comment"]}d.defineMIME("text/css",{documentTypes:v,mediaTypes:_,mediaFeatures:C,mediaValueKeywords:O,propertyKeywords:Y,nonStandardPropertyKeywords:B,fontProperties:I,counterDescriptors:q,colorKeywords:G,valueKeywords:se,tokenHooks:{"/":function(be,ne){return be.eat("*")?(ne.tokenize=De,De(be,ne)):!1}},name:"css"}),d.defineMIME("text/x-scss",{mediaTypes:_,mediaFeatures:C,mediaValueKeywords:O,propertyKeywords:Y,nonStandardPropertyKeywords:B,colorKeywords:G,valueKeywords:se,fontProperties:I,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(be,ne){return be.eat("/")?(be.skipToEnd(),["comment","comment"]):be.eat("*")?(ne.tokenize=De,De(be,ne)):["operator","operator"]},":":function(be){return be.match(/^\s*\{/,!1)?[null,null]:!1},$:function(be){return be.match(/^[\w-]+/),be.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(be){return be.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),d.defineMIME("text/x-less",{mediaTypes:_,mediaFeatures:C,mediaValueKeywords:O,propertyKeywords:Y,nonStandardPropertyKeywords:B,colorKeywords:G,valueKeywords:se,fontProperties:I,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(be,ne){return be.eat("/")?(be.skipToEnd(),["comment","comment"]):be.eat("*")?(ne.tokenize=De,De(be,ne)):["operator","operator"]},"@":function(be){return be.eat("{")?[null,"interpolation"]:be.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)?!1:(be.eatWhile(/[\w\\\-]/),be.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),d.defineMIME("text/x-gss",{documentTypes:v,mediaTypes:_,mediaFeatures:C,propertyKeywords:Y,nonStandardPropertyKeywords:B,fontProperties:I,counterDescriptors:q,colorKeywords:G,valueKeywords:se,supportsAtComponent:!0,tokenHooks:{"/":function(be,ne){return be.eat("*")?(ne.tokenize=De,De(be,ne)):!1}},name:"css",helperType:"gss"})})})()),Hf.exports}Km();var Uf={exports:{}},qf;function Eb(){return qf||(qf=1,(function(l,u){(function(d){d(ss(),$m(),qm(),Km())})(function(d){var f={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function g(O,L,Y){var U=O.current(),B=U.search(L);return B>-1?O.backUp(U.length-B):U.match(/<\/?$/)&&(O.backUp(U.length),O.match(L,!1)||O.match(U)),Y}var v={};function k(O){var L=v[O];return L||(v[O]=new RegExp("\\s+"+O+`\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))}function _(O,L){var Y=O.match(k(L));return Y?/^\s*(.*?)\s*$/.exec(Y[2])[1]:""}function w(O,L){return new RegExp((L?"^":"")+"</\\s*"+O+"\\s*>","i")}function C(O,L){for(var Y in O)for(var U=L[Y]||(L[Y]=[]),B=O[Y],J=B.length-1;J>=0;J--)U.unshift(B[J])}function N(O,L){for(var Y=0;Y<O.length;Y++){var U=O[Y];if(!U[0]||U[1].test(_(L,U[0])))return U[2]}}d.defineMode("htmlmixed",function(O,L){var Y=d.getMode(O,{name:"xml",htmlMode:!0,multilineTagIndentFactor:L.multilineTagIndentFactor,multilineTagIndentPastTag:L.multilineTagIndentPastTag,allowMissingTagName:L.allowMissingTagName}),U={},B=L&&L.tags,J=L&&L.scriptTypes;if(C(f,U),B&&C(B,U),J)for(var I=J.length-1;I>=0;I--)U.script.unshift(["type",J[I].matches,J[I].mode]);function z(q,W){var G=Y.token(q,W.htmlState),X=/\btag\b/.test(G),se;if(X&&!/[<>\s\/]/.test(q.current())&&(se=W.htmlState.tagName&&W.htmlState.tagName.toLowerCase())&&U.hasOwnProperty(se))W.inTag=se+" ";else if(W.inTag&&X&&/>$/.test(q.current())){var ve=/^([\S]+) (.*)/.exec(W.inTag);W.inTag=null;var De=q.current()==">"&&N(U[ve[1]],ve[2]),be=d.getMode(O,De),ne=w(ve[1],!0),Le=w(ve[1],!1);W.token=function(ue,xe){return ue.match(ne,!1)?(xe.token=z,xe.localState=xe.localMode=null,null):g(ue,Le,xe.localMode.token(ue,xe.localState))},W.localMode=be,W.localState=d.startState(be,Y.indent(W.htmlState,"",""))}else W.inTag&&(W.inTag+=q.current(),q.eol()&&(W.inTag+=" "));return G}return{startState:function(){var q=d.startState(Y);return{token:z,inTag:null,localMode:null,localState:null,htmlState:q}},copyState:function(q){var W;return q.localState&&(W=d.copyState(q.localMode,q.localState)),{token:q.token,inTag:q.inTag,localMode:q.localMode,localState:W,htmlState:d.copyState(Y,q.htmlState)}},token:function(q,W){return W.token(q,W)},indent:function(q,W,G){return!q.localMode||/^\s*<\//.test(W)?Y.indent(q.htmlState,W,G):q.localMode.indent?q.localMode.indent(q.localState,W,G):d.Pass},innerMode:function(q){return{state:q.localState||q.htmlState,mode:q.localMode||Y}}}},"xml","javascript","css"),d.defineMIME("text/html","htmlmixed")})})()),Uf.exports}Eb();var $f={exports:{}},Kf;function Pb(){return Kf||(Kf=1,(function(l,u){(function(d){d(ss())})(function(d){var f={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},g=d.Pos;d.defineOption("autoCloseBrackets",!1,function(I,z,q){q&&q!=d.Init&&(I.removeKeyMap(k),I.state.closeBrackets=null),z&&(_(v(z,"pairs")),I.state.closeBrackets=z,I.addKeyMap(k))});function v(I,z){return z=="pairs"&&typeof I=="string"?I:typeof I=="object"&&I[z]!=null?I[z]:f[z]}var k={Backspace:N,Enter:O};function _(I){for(var z=0;z<I.length;z++){var q=I.charAt(z),W="'"+q+"'";k[W]||(k[W]=w(q))}}_(f.pairs+"`");function w(I){return function(z){return U(z,I)}}function C(I){var z=I.state.closeBrackets;if(!z||z.override)return z;var q=I.getModeAt(I.getCursor());return q.closeBrackets||z}function N(I){var z=C(I);if(!z||I.getOption("disableInput"))return d.Pass;for(var q=v(z,"pairs"),W=I.listSelections(),G=0;G<W.length;G++){if(!W[G].empty())return d.Pass;var X=B(I,W[G].head);if(!X||q.indexOf(X)%2!=0)return d.Pass}for(var G=W.length-1;G>=0;G--){var se=W[G].head;I.replaceRange("",g(se.line,se.ch-1),g(se.line,se.ch+1),"+delete")}}function O(I){var z=C(I),q=z&&v(z,"explode");if(!q||I.getOption("disableInput"))return d.Pass;for(var W=I.listSelections(),G=0;G<W.length;G++){if(!W[G].empty())return d.Pass;var X=B(I,W[G].head);if(!X||q.indexOf(X)%2!=0)return d.Pass}I.operation(function(){var se=I.lineSeparator()||`
`;I.replaceSelection(se+se,null),L(I,-1),W=I.listSelections();for(var ve=0;ve<W.length;ve++){var De=W[ve].head.line;I.indentLine(De,null,!0),I.indentLine(De+1,null,!0)}})}function L(I,z){for(var q=[],W=I.listSelections(),G=0,X=0;X<W.length;X++){var se=W[X];se.head==I.getCursor()&&(G=X);var ve=se.head.ch||z>0?{line:se.head.line,ch:se.head.ch+z}:{line:se.head.line-1};q.push({anchor:ve,head:ve})}I.setSelections(q,G)}function Y(I){var z=d.cmpPos(I.anchor,I.head)>0;return{anchor:new g(I.anchor.line,I.anchor.ch+(z?-1:1)),head:new g(I.head.line,I.head.ch+(z?1:-1))}}function U(I,z){var q=C(I);if(!q||I.getOption("disableInput"))return d.Pass;var W=v(q,"pairs"),G=W.indexOf(z);if(G==-1)return d.Pass;for(var X=v(q,"closeBefore"),se=v(q,"triples"),ve=W.charAt(G+1)==z,De=I.listSelections(),be=G%2==0,ne,Le=0;Le<De.length;Le++){var ue=De[Le],xe=ue.head,A,ee=I.getRange(xe,g(xe.line,xe.ch+1));if(be&&!ue.empty())A="surround";else if((ve||!be)&&ee==z)ve&&J(I,xe)?A="both":se.indexOf(z)>=0&&I.getRange(xe,g(xe.line,xe.ch+3))==z+z+z?A="skipThree":A="skip";else if(ve&&xe.ch>1&&se.indexOf(z)>=0&&I.getRange(g(xe.line,xe.ch-2),xe)==z+z){if(xe.ch>2&&/\bstring/.test(I.getTokenTypeAt(g(xe.line,xe.ch-2))))return d.Pass;A="addFour"}else if(ve){var Q=xe.ch==0?" ":I.getRange(g(xe.line,xe.ch-1),xe);if(!d.isWordChar(ee)&&Q!=z&&!d.isWordChar(Q))A="both";else return d.Pass}else if(be&&(ee.length===0||/\s/.test(ee)||X.indexOf(ee)>-1))A="both";else return d.Pass;if(!ne)ne=A;else if(ne!=A)return d.Pass}var T=G%2?W.charAt(G-1):z,P=G%2?z:W.charAt(G+1);I.operation(function(){if(ne=="skip")L(I,1);else if(ne=="skipThree")L(I,3);else if(ne=="surround"){for(var H=I.getSelections(),D=0;D<H.length;D++)H[D]=T+H[D]+P;I.replaceSelections(H,"around"),H=I.listSelections().slice();for(var D=0;D<H.length;D++)H[D]=Y(H[D]);I.setSelections(H)}else ne=="both"?(I.replaceSelection(T+P,null),I.triggerElectric(T+P),L(I,-1)):ne=="addFour"&&(I.replaceSelection(T+T+T+T,"before"),L(I,1))})}function B(I,z){var q=I.getRange(g(z.line,z.ch-1),g(z.line,z.ch+1));return q.length==2?q:null}function J(I,z){var q=I.getTokenAt(g(z.line,z.ch+1));return/\bstring/.test(q.type)&&q.start==z.ch&&(z.ch==0||!/\bstring/.test(I.getTokenTypeAt(z)))}})})()),$f.exports}Pb();var Gf={exports:{}},Yf;function Lb(){return Yf||(Yf=1,(function(l,u){(function(d){d(ss())})(function(d){var f=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),g=d.Pos,v={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function k(L){return L&&L.bracketRegex||/[(){}[\]]/}function _(L,Y,U){var B=L.getLineHandle(Y.line),J=Y.ch-1,I=U&&U.afterCursor;I==null&&(I=/(^| )cm-fat-cursor($| )/.test(L.getWrapperElement().className));var z=k(U),q=!I&&J>=0&&z.test(B.text.charAt(J))&&v[B.text.charAt(J)]||z.test(B.text.charAt(J+1))&&v[B.text.charAt(++J)];if(!q)return null;var W=q.charAt(1)==">"?1:-1;if(U&&U.strict&&W>0!=(J==Y.ch))return null;var G=L.getTokenTypeAt(g(Y.line,J+1)),X=w(L,g(Y.line,J+(W>0?1:0)),W,G,U);return X==null?null:{from:g(Y.line,J),to:X&&X.pos,match:X&&X.ch==q.charAt(0),forward:W>0}}function w(L,Y,U,B,J){for(var I=J&&J.maxScanLineLength||1e4,z=J&&J.maxScanLines||1e3,q=[],W=k(J),G=U>0?Math.min(Y.line+z,L.lastLine()+1):Math.max(L.firstLine()-1,Y.line-z),X=Y.line;X!=G;X+=U){var se=L.getLine(X);if(se){var ve=U>0?0:se.length-1,De=U>0?se.length:-1;if(!(se.length>I))for(X==Y.line&&(ve=Y.ch-(U<0?1:0));ve!=De;ve+=U){var be=se.charAt(ve);if(W.test(be)&&(B===void 0||(L.getTokenTypeAt(g(X,ve+1))||"")==(B||""))){var ne=v[be];if(ne&&ne.charAt(1)==">"==U>0)q.push(be);else if(q.length)q.pop();else return{pos:g(X,ve),ch:be}}}}}return X-U==(U>0?L.lastLine():L.firstLine())?!1:null}function C(L,Y,U){for(var B=L.state.matchBrackets.maxHighlightLineLength||1e3,J=U&&U.highlightNonMatching,I=[],z=L.listSelections(),q=0;q<z.length;q++){var W=z[q].empty()&&_(L,z[q].head,U);if(W&&(W.match||J!==!1)&&L.getLine(W.from.line).length<=B){var G=W.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";I.push(L.markText(W.from,g(W.from.line,W.from.ch+1),{className:G})),W.to&&L.getLine(W.to.line).length<=B&&I.push(L.markText(W.to,g(W.to.line,W.to.ch+1),{className:G}))}}if(I.length){f&&L.state.focused&&L.focus();var X=function(){L.operation(function(){for(var se=0;se<I.length;se++)I[se].clear()})};if(Y)setTimeout(X,800);else return X}}function N(L){L.operation(function(){L.state.matchBrackets.currentlyHighlighted&&(L.state.matchBrackets.currentlyHighlighted(),L.state.matchBrackets.currentlyHighlighted=null),L.state.matchBrackets.currentlyHighlighted=C(L,!1,L.state.matchBrackets)})}function O(L){L.state.matchBrackets&&L.state.matchBrackets.currentlyHighlighted&&(L.state.matchBrackets.currentlyHighlighted(),L.state.matchBrackets.currentlyHighlighted=null)}d.defineOption("matchBrackets",!1,function(L,Y,U){U&&U!=d.Init&&(L.off("cursorActivity",N),L.off("focus",N),L.off("blur",O),O(L)),Y&&(L.state.matchBrackets=typeof Y=="object"?Y:{},L.on("cursorActivity",N),L.on("focus",N),L.on("blur",O))}),d.defineExtension("matchBrackets",function(){C(this,!0)}),d.defineExtension("findMatchingBracket",function(L,Y,U){return(U||typeof Y=="boolean")&&(U?(U.strict=Y,Y=U):Y=Y?{strict:!0}:null),_(this,L,Y)}),d.defineExtension("scanForBracket",function(L,Y,U,B){return w(this,L,Y,U,B)})})})()),Gf.exports}Lb();var Vf={exports:{}},Jf;function Ab(){return Jf||(Jf=1,(function(l,u){(function(d){d(ss())})(function(d){var f="CodeMirror-hint",g="CodeMirror-hint-active";d.showHint=function(I,z,q){if(!z)return I.showHint(q);q&&q.async&&(z.async=!0);var W={hint:z};if(q)for(var G in q)W[G]=q[G];return I.showHint(W)},d.defineExtension("showHint",function(I){I=w(this,this.getCursor("start"),I);var z=this.listSelections();if(!(z.length>1)){if(this.somethingSelected()){if(!I.hint.supportsSelection)return;for(var q=0;q<z.length;q++)if(z[q].head.line!=z[q].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var W=this.state.completionActive=new v(this,I);W.options.hint&&(d.signal(this,"startCompletion",this),W.update(!0))}}),d.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function v(I,z){if(this.cm=I,this.options=z,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var q=this;I.on("cursorActivity",this.activityFunc=function(){q.cursorActivity()})}}var k=window.requestAnimationFrame||function(I){return setTimeout(I,1e3/60)},_=window.cancelAnimationFrame||clearTimeout;v.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&d.signal(this.data,"close"),this.widget&&this.widget.close(),d.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(I,z){var q=I.list[z],W=this;this.cm.operation(function(){q.hint?q.hint(W.cm,I,q):W.cm.replaceRange(C(q),q.from||I.from,q.to||I.to,"complete"),d.signal(I,"pick",q),W.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(_(this.debounce),this.debounce=0);var I=this.startPos;this.data&&(I=this.data.from);var z=this.cm.getCursor(),q=this.cm.getLine(z.line);if(z.line!=this.startPos.line||q.length-z.ch!=this.startLen-this.startPos.ch||z.ch<I.ch||this.cm.somethingSelected()||!z.ch||this.options.closeCharacters.test(q.charAt(z.ch-1)))this.close();else{var W=this;this.debounce=k(function(){W.update()}),this.widget&&this.widget.disable()}},update:function(I){if(this.tick!=null){var z=this,q=++this.tick;U(this.options.hint,this.cm,this.options,function(W){z.tick==q&&z.finishUpdate(W,I)})}},finishUpdate:function(I,z){this.data&&d.signal(this.data,"update");var q=this.widget&&this.widget.picked||z&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=I,I&&I.list.length&&(q&&I.list.length==1?this.pick(I,0):(this.widget=new L(this,I),d.signal(I,"shown")))}};function w(I,z,q){var W=I.options.hintOptions,G={};for(var X in J)G[X]=J[X];if(W)for(var X in W)W[X]!==void 0&&(G[X]=W[X]);if(q)for(var X in q)q[X]!==void 0&&(G[X]=q[X]);return G.hint.resolve&&(G.hint=G.hint.resolve(I,z)),G}function C(I){return typeof I=="string"?I:I.text}function N(I,z){var q={Up:function(){z.moveFocus(-1)},Down:function(){z.moveFocus(1)},PageUp:function(){z.moveFocus(-z.menuSize()+1,!0)},PageDown:function(){z.moveFocus(z.menuSize()-1,!0)},Home:function(){z.setFocus(0)},End:function(){z.setFocus(z.length-1)},Enter:z.pick,Tab:z.pick,Esc:z.close},W=/Mac/.test(navigator.platform);W&&(q["Ctrl-P"]=function(){z.moveFocus(-1)},q["Ctrl-N"]=function(){z.moveFocus(1)});var G=I.options.customKeys,X=G?{}:q;function se(be,ne){var Le;typeof ne!="string"?Le=function(ue){return ne(ue,z)}:q.hasOwnProperty(ne)?Le=q[ne]:Le=ne,X[be]=Le}if(G)for(var ve in G)G.hasOwnProperty(ve)&&se(ve,G[ve]);var De=I.options.extraKeys;if(De)for(var ve in De)De.hasOwnProperty(ve)&&se(ve,De[ve]);return X}function O(I,z){for(;z&&z!=I;){if(z.nodeName.toUpperCase()==="LI"&&z.parentNode==I)return z;z=z.parentNode}}function L(I,z){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=I,this.data=z,this.picked=!1;var q=this,W=I.cm,G=W.getInputField().ownerDocument,X=G.defaultView||G.parentWindow,se=this.hints=G.createElement("ul");se.setAttribute("role","listbox"),se.setAttribute("aria-expanded","true"),se.id=this.id;var ve=I.cm.options.theme;se.className="CodeMirror-hints "+ve,this.selectedHint=z.selectedHint||0;for(var De=z.list,be=0;be<De.length;++be){var ne=se.appendChild(G.createElement("li")),Le=De[be],ue=f+(be!=this.selectedHint?"":" "+g);Le.className!=null&&(ue=Le.className+" "+ue),ne.className=ue,be==this.selectedHint&&ne.setAttribute("aria-selected","true"),ne.id=this.id+"-"+be,ne.setAttribute("role","option"),Le.render?Le.render(ne,z,Le):ne.appendChild(G.createTextNode(Le.displayText||C(Le))),ne.hintId=be}var xe=I.options.container||G.body,A=W.cursorCoords(I.options.alignWithWord?z.from:null),ee=A.left,Q=A.bottom,T=!0,P=0,H=0;if(xe!==G.body){var D=["absolute","relative","fixed"].indexOf(X.getComputedStyle(xe).position)!==-1,Z=D?xe:xe.offsetParent,Ce=Z.getBoundingClientRect(),Ie=G.body.getBoundingClientRect();P=Ce.left-Ie.left-Z.scrollLeft,H=Ce.top-Ie.top-Z.scrollTop}se.style.left=ee-P+"px",se.style.top=Q-H+"px";var qe=X.innerWidth||Math.max(G.body.offsetWidth,G.documentElement.offsetWidth),Oe=X.innerHeight||Math.max(G.body.offsetHeight,G.documentElement.offsetHeight);xe.appendChild(se),W.getInputField().setAttribute("aria-autocomplete","list"),W.getInputField().setAttribute("aria-owns",this.id),W.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var _e=I.options.moveOnOverlap?se.getBoundingClientRect():new DOMRect,Ue=I.options.paddingForScrollbar?se.scrollHeight>se.clientHeight+1:!1,$e;setTimeout(function(){$e=W.getScrollInfo()});var tt=_e.bottom-Oe;if(tt>0){var Ke=_e.bottom-_e.top,zt=_e.top-(A.bottom-A.top)-2;Oe-_e.top<zt?(Ke>zt&&(se.style.height=(Ke=zt)+"px"),se.style.top=(Q=A.top-Ke)-H+"px",T=!1):se.style.height=Oe-_e.top-2+"px"}var Yt=_e.right-qe;if(Ue&&(Yt+=W.display.nativeBarWidth),Yt>0&&(_e.right-_e.left>qe&&(se.style.width=qe-5+"px",Yt-=_e.right-_e.left-qe),se.style.left=(ee=Math.max(A.left-Yt-P,0))+"px"),Ue)for(var Ht=se.firstChild;Ht;Ht=Ht.nextSibling)Ht.style.paddingRight=W.display.nativeBarWidth+"px";if(W.addKeyMap(this.keyMap=N(I,{moveFocus:function(We,st){q.changeActive(q.selectedHint+We,st)},setFocus:function(We){q.changeActive(We)},menuSize:function(){return q.screenAmount()},length:De.length,close:function(){I.close()},pick:function(){q.pick()},data:z})),I.options.closeOnUnfocus){var Tt;W.on("blur",this.onBlur=function(){Tt=setTimeout(function(){I.close()},100)}),W.on("focus",this.onFocus=function(){clearTimeout(Tt)})}W.on("scroll",this.onScroll=function(){var We=W.getScrollInfo(),st=W.getWrapperElement().getBoundingClientRect();$e||($e=W.getScrollInfo());var ct=Q+$e.top-We.top,Je=ct-(X.pageYOffset||(G.documentElement||G.body).scrollTop);if(T||(Je+=se.offsetHeight),Je<=st.top||Je>=st.bottom)return I.close();se.style.top=ct+"px",se.style.left=ee+$e.left-We.left+"px"}),d.on(se,"dblclick",function(We){var st=O(se,We.target||We.srcElement);st&&st.hintId!=null&&(q.changeActive(st.hintId),q.pick())}),d.on(se,"click",function(We){var st=O(se,We.target||We.srcElement);st&&st.hintId!=null&&(q.changeActive(st.hintId),I.options.completeOnSingleClick&&q.pick())}),d.on(se,"mousedown",function(){setTimeout(function(){W.focus()},20)});var Ze=this.getSelectedHintRange();return(Ze.from!==0||Ze.to!==0)&&this.scrollToActive(),d.signal(z,"select",De[this.selectedHint],se.childNodes[this.selectedHint]),!0}L.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var I=this.completion.cm.getInputField();I.removeAttribute("aria-activedescendant"),I.removeAttribute("aria-owns");var z=this.completion.cm;this.completion.options.closeOnUnfocus&&(z.off("blur",this.onBlur),z.off("focus",this.onFocus)),z.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var I=this;this.keyMap={Enter:function(){I.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(I,z){if(I>=this.data.list.length?I=z?this.data.list.length-1:0:I<0&&(I=z?0:this.data.list.length-1),this.selectedHint!=I){var q=this.hints.childNodes[this.selectedHint];q&&(q.className=q.className.replace(" "+g,""),q.removeAttribute("aria-selected")),q=this.hints.childNodes[this.selectedHint=I],q.className+=" "+g,q.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",q.id),this.scrollToActive(),d.signal(this.data,"select",this.data.list[this.selectedHint],q)}},scrollToActive:function(){var I=this.getSelectedHintRange(),z=this.hints.childNodes[I.from],q=this.hints.childNodes[I.to],W=this.hints.firstChild;z.offsetTop<this.hints.scrollTop?this.hints.scrollTop=z.offsetTop-W.offsetTop:q.offsetTop+q.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=q.offsetTop+q.offsetHeight-this.hints.clientHeight+W.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var I=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-I),to:Math.min(this.data.list.length-1,this.selectedHint+I)}}};function Y(I,z){if(!I.somethingSelected())return z;for(var q=[],W=0;W<z.length;W++)z[W].supportsSelection&&q.push(z[W]);return q}function U(I,z,q,W){if(I.async)I(z,W,q);else{var G=I(z,q);G&&G.then?G.then(W):W(G)}}function B(I,z){var q=I.getHelpers(z,"hint"),W;if(q.length){var G=function(X,se,ve){var De=Y(X,q);function be(ne){if(ne==De.length)return se(null);U(De[ne],X,ve,function(Le){Le&&Le.list.length>0?se(Le):be(ne+1)})}be(0)};return G.async=!0,G.supportsSelection=!0,G}else return(W=I.getHelper(I.getCursor(),"hintWords"))?function(X){return d.hint.fromList(X,{words:W})}:d.hint.anyword?function(X,se){return d.hint.anyword(X,se)}:function(){}}d.registerHelper("hint","auto",{resolve:B}),d.registerHelper("hint","fromList",function(I,z){var q=I.getCursor(),W=I.getTokenAt(q),G,X=d.Pos(q.line,W.start),se=q;W.start<q.ch&&/\w/.test(W.string.charAt(q.ch-W.start-1))?G=W.string.substr(0,q.ch-W.start):(G="",X=q);for(var ve=[],De=0;De<z.words.length;De++){var be=z.words[De];be.slice(0,G.length)==G&&ve.push(be)}if(ve.length)return{list:ve,from:X,to:se}}),d.commands.autocomplete=d.showHint;var J={hint:d.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};d.defineOption("hintOptions",null)})})()),Vf.exports}Ab();var Xf={exports:{}},Qf;function Rb(){return Qf||(Qf=1,(function(l,u){(function(d){d(ss())})(function(d){var f=/[\w$]+/,g=500;d.registerHelper("hint","anyword",function(v,k){for(var _=k&&k.word||f,w=k&&k.range||g,C=v.getCursor(),N=v.getLine(C.line),O=C.ch,L=O;L&&_.test(N.charAt(L-1));)--L;for(var Y=L!=O&&N.slice(L,O),U=k&&k.list||[],B={},J=new RegExp(_.source,"g"),I=-1;I<=1;I+=2)for(var z=C.line,q=Math.min(Math.max(z+I*w,v.firstLine()),v.lastLine())+I;z!=q;z+=I)for(var W=v.getLine(z),G;G=J.exec(W);)z==C.line&&G[0]===Y||(!Y||G[0].lastIndexOf(Y,0)==0)&&!Object.prototype.hasOwnProperty.call(B,G[0])&&(B[G[0]]=!0,U.push(G[0]));return{list:U,from:d.Pos(C.line,L),to:d.Pos(C.line,O)}})})})()),Xf.exports}Rb();function Ib(l){return l==="python"?"python":l==="csharp"?"text/x-csharp":l==="java"?"text/x-java":l==="jsx"?{name:"javascript",jsx:!0}:l==="javascript"?"javascript":l==="html"?"htmlmixed":l==="css"?"css":"text/plain"}function Gm({value:l,onChange:u,language:d}){const f=ye.useRef(null),g=ye.useRef(null),v=ye.useRef(u);return v.current=u,ye.useEffect(()=>{const k=Af.fromTextArea(f.current,{mode:Ib(d),lineNumbers:!0,lineWrapping:!1,indentUnit:4,tabSize:4,indentWithTabs:!1,smartIndent:!0,electricChars:!0,autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,extraKeys:{Tab(w){if(w.somethingSelected())w.execCommand("indentMore");else{const C=w.getOption("indentUnit")-w.getCursor().ch%w.getOption("indentUnit");w.replaceSelection(" ".repeat(C),"end")}},"Shift-Tab":w=>w.execCommand("indentLess"),"Ctrl-Space":w=>w.showHint({hint:Af.hint.anyword,completeSingle:!1})}});k.getInputField().setAttribute("aria-label","Code editor"),k.on("change",w=>{var C;return(C=v.current)==null?void 0:C.call(v,w.getValue())}),g.current=k;const _=typeof ResizeObserver<"u"?new ResizeObserver(()=>k.refresh()):null;return _==null||_.observe(k.getWrapperElement()),()=>{_==null||_.disconnect(),k.toTextArea(),g.current=null}},[d]),ye.useEffect(()=>{const k=g.current;if(k&&k.getValue()!==l){const _=k.getCursor();k.setValue(l??""),k.setCursor(_)}},[l]),c.jsx("div",{className:"code-editor-wrap",children:c.jsx("textarea",{ref:f,"aria-label":"Code editor",defaultValue:l,spellCheck:!1})})}const bd=l=>String(l??"").replace(/\r\n/g,`
`).replace(/\n$/,"");function Ob(l){const u=Array.isArray(l)?l:[];return{passed:u.filter(d=>d.passed===!0).length,total:u.length}}function Zf(l,u){const d=String(l||"").split(/\r?\n/).find(g=>g.startsWith("PUBLIC_CHECK_RESULTS="));if(!d)throw new Error("Python returned no example-check results. See Console for errors.");const f=JSON.parse(d.slice(21));if(!Array.isArray(f)||f.length!==u.length)throw new Error("Python did not finish every published example.");return u.map((g,v)=>({call:g.call||"Example "+(v+1),expected:String(g.expected??""),received:String(f[v].actual??""),error:String(f[v].error||""),passed:f[v].ok===!0}))}function Db(l,u){return u.map((d,f)=>{var g,v,k,_;return{call:"main("+JSON.stringify(d.args||[])+")",expected:bd(d.expected),received:bd((g=l[f])==null?void 0:g.stdout),error:String(((v=l[f])==null?void 0:v.diagnostics)||((k=l[f])==null?void 0:k.stderr)||""),passed:((_=l[f])==null?void 0:_.success)===!0&&bd(l[f].stdout)===bd(d.expected)}})}function Mb(l,u,d){return d(l,u.length).map(g=>({call:u[g.index].call,expected:g.expected,received:g.received,error:g.error,passed:g.passed}))}function Ym(l){return(l||[]).map((u,d)=>({call:String(u.call||u.label||"Check "+(d+1)),expected:String(u.expected??"Requirement met"),received:String(u.received??(u.pass===!0||u.passed===!0?"Requirement met":"Not yet met")),error:String(u.error||""),passed:u.pass===!0||u.passed===!0}))}function zb(l){var u;return((u=/^\s*(?:async\s+)?def\s+([A-Za-z_]\w*)\s*\(/m.exec(l))==null?void 0:u[1])||null}function uc(l,u){var d,f,g;return u==="python"?zb(l):u==="javascript"?((d=/(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:d[1])||null:u==="csharp"?((f=/\b(?:public\s+)?static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:f[1])||null:u==="java"&&((g=/\bpublic\s+static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:g[1])||null}const Fb=uc;function ah(l,u,d=null){if(typeof l=="string")return JSON.stringify(l);if(l===null)return"null";if(typeof l=="boolean")return String(l);if(typeof l=="number")return Number.isFinite(l)?String(l):"0";if(Array.isArray(l)){const f=l.every(w=>Number.isInteger(w)),g=l.every(w=>typeof w=="string"),v=l.every(w=>typeof w=="boolean"),k=l.length===0&&d?d:f?"int":g?"string":v?"bool":"double";return"new "+(u==="java"?k==="string"?"String":k==="bool"?"boolean":k:k)+"[]{"+l.map(w=>ah(w,u)).join(",")+"}"}throw new Error("This example uses a data type unsupported by the browser checker.")}function oh(l,u,d){var k;const f=uc(d,u)||uc(l.starter||"",u);if(!f)throw new Error("The checker could not find a function declaration.");const g=l.challengeExamples||[],v=(((k=g[0])==null?void 0:k.input)||[]).map((_,w)=>{const C=g.map(N=>{var O;return(O=N.input)==null?void 0:O[w]}).find(N=>Array.isArray(N)&&N.length>0);return Array.isArray(C)?typeof C[0]=="boolean"?"bool":typeof C[0]=="string"?"string":Number.isInteger(C[0])?"int":"double":null});return g.map(_=>({..._,call:f+"("+(_.input||[]).map((w,C)=>ah(w,u,v[C])).join(", ")+")",expectedLiteral:ah(_.expected,u),expected:String(_.expected)}))}function Wb(l,u,d=!0){const f=uc(l,"python")||uc(u.starter||"","python");if(!f)throw new Error("Define the challenge function before running it.");const g=u.challengeExamples||[];return["import json as __json, io as __io, contextlib as __ctx","__source = "+JSON.stringify(l),"__cases = __json.loads("+JSON.stringify(JSON.stringify(d?g:g.slice(0,1)))+")","__results = []","for __case in __cases:","    try:",'        __env = {"__name__":"student"}','        with __ctx.redirect_stdout(__io.StringIO()): exec(compile(__source,"main.py","exec"),__env)',"        __actual = __env["+JSON.stringify(f)+'](*__case["input"])','        __ok = type(__actual) is type(__case["expected"]) and __actual == __case["expected"]','        __results.append({"ok":__ok,"actual":repr(__actual)[:300],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","error":type(__error).__name__+": "+str(__error)[:300]})','print("PUBLIC_CHECK_RESULTS="+__json.dumps(__results))'].join(`
`)}function Hb(l,u){const d=oh(u,"java",l);if(!d.length)throw new Error("No visible examples are available.");const f=d.map((g,v)=>`try{Object actual=Solution.${g.call}; Object expected=${g.expectedLiteral}; boolean ok=java.util.Objects.deepEquals(actual,expected); String received=java.util.Arrays.deepToString(new Object[]{actual}); received=received.substring(1,received.length()-1); System.out.println("PLAYGROUND_CASE:${v}:"+(ok?"1":"0")+":"+received);}catch(Throwable error){System.out.println("PLAYGROUND_CASE:${v}:0:ERROR "+error.getClass().getSimpleName()+" "+error.getMessage());}`);return l+`
class __PlaygroundPracticeChecks {public static void main(String[] args) {`+f.join(`
`)+"}}"}function Bb(l,u){const d=String(l||"").split(/\r?\n/).filter(f=>f.startsWith("PLAYGROUND_CASE:"));if(d.length!==u.length)throw new Error("Java did not return all published examples.");return u.map((f,g)=>{const v=d[g],k=/^PLAYGROUND_CASE:(\d+):([01]):([\s\S]*)$/.exec(v);if(!k||Number(k[1])!==g)throw Error("Java returned invalid check data.");return{call:f.call,expected:f.expected,received:k[3],passed:k[2]==="1",error:k[3].startsWith("ERROR ")?k[3]:""}})}function Vm({text:l="",checksText:u="",checkRows:d=null,points:f=null,language:g,activeTab:v,onTabChange:k,previewEnabled:_=!1,previewDoc:w="",previewRef:C}){const N=_?["Preview","Console","Checks"]:["Console","Checks"],O=Array.isArray(d),{passed:L,total:Y}=Ob(d),U=Number.isFinite(Number(f))&&f!==null&&Y?Number(f)*L/Y:null;return c.jsxs("section",{className:"console-pane","aria-label":"Workspace output",children:[c.jsxs("div",{className:"console-heading",children:[c.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Output views",children:N.map(B=>c.jsxs("button",{type:"button",role:"tab","aria-selected":v===B,className:v===B?"active":"",onClick:()=>k(B),children:[B==="Console"&&c.jsx(pv,{size:14}),B]},B))}),c.jsx("span",{children:"Practice · no submissions"})]}),["html","css","javascript","jsx"].includes(g)&&c.jsx("div",{className:"console-preview",hidden:!_||v!=="Preview",children:c.jsx("iframe",{ref:C,title:"Live student code preview",className:"live-preview-frame",sandbox:"allow-scripts allow-forms",srcDoc:w||"<p>Choose Run to preview your code.</p>"})}),v==="Checks"?c.jsx("div",{className:"practice-check-content",role:"tabpanel","aria-label":"Check feedback",children:O?c.jsxs(c.Fragment,{children:[c.jsxs("p",{className:"check-summary",children:["Checks ",c.jsxs("strong",{children:[L," of ",Y," passing"]})]}),c.jsx("p",{className:"check-next",children:L===Y?"All published practice checks passed.":"Revise your code, then check again."}),c.jsx("div",{className:"practice-check-cards",children:d.map((B,J)=>c.jsxs("article",{className:"practice-check-card "+(B.passed?"passed":"needs-revision"),children:[c.jsxs("header",{children:[c.jsx("code",{children:B.call||"Example "+(J+1)}),c.jsx("span",{children:B.passed?"Pass":"Review"})]}),c.jsxs("dl",{children:[c.jsx("dt",{children:"Expected"}),c.jsx("dd",{children:c.jsx("pre",{children:B.expected??""})}),c.jsx("dt",{children:B.error?"Error":"Received"}),c.jsx("dd",{children:c.jsx("pre",{children:B.error||B.received||"None"})})]})]},J))}),U!==null&&c.jsxs("p",{className:"check-practice-score",children:["Public-check score: ",Number(U.toFixed(2)),"/",f," practice points · ",L,"/",Y," examples passed."]}),c.jsx("p",{className:"check-disclaimer",children:"Public examples only. These results do not award grades, completion, or earned points."})]}):c.jsx("pre",{className:"practice-check-message",children:u})}):v==="Console"?c.jsx("pre",{role:"tabpanel","aria-label":"Console output",children:l}):null]})}const Ub="PUBLIC_CHECK_RESULTS=";function em(l,u){const d=Array.isArray(l==null?void 0:l.cases)?l.cases:[],f=JSON.stringify(String(u)),g=JSON.stringify(JSON.stringify(d));return["import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx","import traceback as __trace","__student = "+f,"__cases = __json.loads("+g+")","__results = []","for __example in __cases:","    __out = __io.StringIO()","    try:",'        __env = {"__name__": "__main__"}',"        with __ctx.redirect_stdout(__out), __ctx.redirect_stderr(__out):",'            exec(compile(__student, "main.py", "exec"), __env)',(l==null?void 0:l.mode)==="function"?'            __actual = eval(compile(__ast.parse(__example["call"], mode="eval"), "example", "eval"), __env)':'            __actual = __out.getvalue().rstrip("\\n")',(l==null?void 0:l.mode)==="function"?'        __expected = __ast.literal_eval(__example["expected"])':'        __expected = __example["expected"].rstrip("\\n")',(l==null?void 0:l.mode)==="function"?"        __ok = type(__actual) is type(__expected) and __actual == __expected":"        __ok = __actual == __expected",'        __results.append({"ok":__ok,"actual":str(__actual)[:240],"expected":str(__expected)[:240],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","expected":str(__example.get("expected",""))[:240],"error":type(__error).__name__+": "+str(__error)[:200]})','print("'+Ub+'"+__json.dumps(__results))'].join(`
`)+`
`}function tm(l,u){const d=String(u).split("(",1)[0].trim();return["import ast as __ast, io as __io, json as __json, contextlib as __ctx",'__env={"__name__":"student"}',"__stream=__io.StringIO()","with __ctx.redirect_stdout(__stream):","    exec(compile("+JSON.stringify(String(l))+',"main.py","exec"),__env)',"    __name="+JSON.stringify(d),'    if __name not in __env and callable(__env.get("solution")): __env[__name]=__env["solution"]',"    __value=eval(compile(__ast.parse("+JSON.stringify(String(u))+',mode="eval"),"sample call","eval"),__env)','print("PLAYGROUND_PREVIEW="+__json.dumps({"call":'+JSON.stringify(String(u))+',"returned":repr(__value)[:5000],"printed":__stream.getvalue()[:10000]}))'].join(`
`)}const qb="modulepreload",$b=function(l){return"/playground/integration/"+l},nm={},Jm=function(u,d,f){let g=Promise.resolve();if(d&&d.length>0){let k=function(C){return Promise.all(C.map(N=>Promise.resolve(N).then(O=>({status:"fulfilled",value:O}),O=>({status:"rejected",reason:O}))))};document.getElementsByTagName("link");const _=document.querySelector("meta[property=csp-nonce]"),w=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));g=k(d.map(C=>{if(C=$b(C),C in nm)return;nm[C]=!0;const N=C.endsWith(".css"),O=N?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${C}"]${O}`))return;const L=document.createElement("link");if(L.rel=N?"stylesheet":qb,N||(L.as="script"),L.crossOrigin="",L.href=C,w&&L.setAttribute("nonce",w),document.head.appendChild(L),N)return new Promise((Y,U)=>{L.addEventListener("load",Y),L.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${C}`)))})}))}function v(k){const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=k,window.dispatchEvent(_),!_.defaultPrevented)throw k}return g.then(k=>{for(const _ of k||[])_.status==="rejected"&&v(_.reason);return u().catch(v)})},As="/playground/";async function Kb(l,u=()=>{}){if(l==="python"){const{PythonRunner:d}=await Jm(async()=>{const{PythonRunner:f}=await import("./pythonRunner-Camw9ZBH.js");return{PythonRunner:f}},[]);return{kind:"python",instance:new d({onStatus:u})}}if(l==="java"){const{JavaRunner:d}=await import(As+"java-runner.mjs");return{kind:"java",instance:new d(u)}}if(l==="csharp"){const[{CSharpRunner:d},f]=await Promise.all([import(As+"csharp-runner.mjs"),import(As+"csharp-protocol.mjs")]);return{kind:"csharp",instance:new d({onStatus:u}),protocol:f}}throw Error("No code compiler for "+l)}function Gb(l){var u;return((u=/\b(?:public\s+)?(?:static\s+)?class\s+([A-Za-z_]\w*)/.exec(String(l||"")))==null?void 0:u[1])||""}const rm='<main class="event-card"><h1>Robotics meetup</h1><p>Thursday at 4 PM in the lab.</p><p>Attendees: <span id="count">0</span></p><button id="join">Join</button></main>',Td=l=>JSON.stringify(String(l)).replace(/</g,"\\u003c");function Yb(l){return l==="html"?`(()=>{
   const rows=[{label:'Heading',pass:!!document.querySelector('h1')?.textContent.trim()},
     {label:'Meeting details',pass:!!document.querySelector('p')?.textContent.trim()},
     {label:'Working link',pass:!!document.querySelector('a[href]')}];
   send('checks',{results:rows});
  })();`:l==="css"?`(()=>{
   const card=document.querySelector('.event-card'),s=card&&getComputedStyle(card);
   const rows=[{label:'Visible padding',pass:!!s&&parseFloat(s.paddingTop)>0},
     {label:'Maximum width',pass:!!s&&s.maxWidth!=='none'},
     {label:'Visible border',pass:!!s&&parseFloat(s.borderTopWidth)>0},
     {label:'Background color',pass:!!s&&s.backgroundColor!=='rgba(0, 0, 0, 0)'}];
   send('checks',{results:rows});
  })();`:`(()=>{
   const button=document.querySelector('#join'),count=document.querySelector('#count');
   if(!button||!count){send('checks',{results:[{label:'Join button and attendee count',pass:false}]});return;}
   const before=Number(count.textContent);
   button.click();
   setTimeout(()=>send('checks',{results:[{label:'Join increments the attendee count',pass:Number(count.textContent)===before+1}]}),150);
  })();`}function Vb(l,u,d){var k;const f=(u.challengeExamples||[]).slice(0,d?void 0:1);if(!f.length)throw Error("No public challenge examples were published.");const g=(k=/\b(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:k[1];if(!g)throw Error("Define and export the challenge function.");const v=String(l).replace(/\bexport\s+(?=(?:async\s+)?function|const|let|class)/g,"");return`(()=>{
    const cases=${JSON.stringify(f)};
    const results=[];
    try{
      const fn=new Function(${Td(v+"; return "+g+";")})();
      for(const row of cases){
        try{
          const got=fn(...row.input);
          const expected=row.expected;
          const pass=JSON.stringify(got)===JSON.stringify(expected);
          results.push({label:${Td(g)}+'('+row.input.map(x=>JSON.stringify(x)).join(', ')+')',
            expected:JSON.stringify(expected),received:JSON.stringify(got),pass});
        }catch(e){results.push({label:${Td(g)}+'(...)',expected:JSON.stringify(row.expected),
          received:'',error:e.name+': '+e.message,pass:false});}
      }
      if(${d?"true":"false"})send('checks',{results});
      else results.forEach(row=>send('log',{level:row.pass?'info':'warn',text:row.label+' → '+(row.error || row.received)+' (expected '+row.expected+')'}));
    }catch(e){send('error',{text:e.name+': '+e.message});}
  })();`}function Jb(l){return"<script>"+l.replace(/<\/script/gi,"<\\/script")+"<\/script>"}async function Ph({code:l,language:u,lessonId:d,task:f={},token:g,check:v=!0}){if(!g)throw Error("A preview token is required.");if(f.webFiles){const{assembleWebFiles:B}=await Jm(async()=>{const{assembleWebFiles:se}=await Promise.resolve().then(()=>e0);return{assembleWebFiles:se}},[]),J=u==="jsx"?"App.jsx":"script.js";let I=null;u==="jsx"&&(typeof window.PlaygroundJSX!="function"&&await new Promise((se,ve)=>{const De=document.createElement("script");De.src=As+"vendor/learning/jsx.js",De.onload=se,De.onerror=()=>ve(Error("React JSX compiler could not load.")),document.head.append(De)}),I=window.PlaygroundJSX(f.webFiles["App.jsx"]||""));const{html:z,linkedStyle:q,linkedScript:W}=B(f.webFiles,{scriptName:J,scriptOverride:I});if(f.projectId){const{buildProjectPreview:se}=await import(As+"project-preview.mjs");return se(z,{token:g,step:f.stepId,projectId:f.projectId,check:v})}const G='<script src="'+As+'vendor/learning/react.js"><\/script>',X=u==="jsx"?/<\/head\s*>/i.test(z)?z.replace(/<\/head\s*>/i,G+"</head>"):G+z:z;return Ph({code:X,language:"html",lessonId:d,task:{},token:g,check:v})}if(f.projectId){const{buildProjectPreview:B}=await import(As+"project-preview.mjs");return B(l,{token:g,step:f.stepId,projectId:f.projectId,check:v})}const{previewConsoleBridge:k}=await import(As+"console-drawer.mjs"),_=Jb(k(g)),w=Td;let C="",N="",O="";if(f.isChallenge&&u==="javascript")C="<main><h2>JavaScript challenge</h2><p>See the Checks and Console tabs for actual function results.</p></main>",N=Vb(l,f,v);else if(u==="html")C=String(l);else if(u==="css")C="<style>"+String(l).replace(/<\/style/gi,"")+"</style>"+rm;else if(u==="javascript")C=rm,N=l;else if(u==="jsx")C='<div id="root"></div>',typeof window.PlaygroundJSX!="function"&&await new Promise((B,J)=>{const I=document.createElement("script");I.src=As+"vendor/learning/jsx.js",I.onload=B,I.onerror=()=>J(Error("React JSX compiler could not load.")),document.head.append(I)}),N=window.PlaygroundJSX(l),O='<script src="'+As+'vendor/learning/react.js"><\/script>';else throw Error("Preview is not supported for "+u);const L=f.isChallenge&&u==="javascript"?"":Yb(d),Y=f.isChallenge&&u==="javascript"?"<script>try{"+N+';send("ready");}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>':"<script>try{(0,eval)("+w(N)+');setTimeout(()=>{send("ready");'+(v?L:"")+'},180)}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>',U='<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="form-action &apos;none&apos;"><style>body{font:16px/1.55 system-ui,sans-serif;padding:16px}button{padding:8px 15px}</style>'+_+O;if(u==="html"){const B=String(C).replace(/^\s*<!doctype[^>]*>/i,"");return"<!doctype html>"+(/<head(?:\s[^>]*)?>/i.test(B)?B.replace(/<head(?:\s[^>]*)?>/i,I=>I+U):"<head>"+U+"</head>"+B)+Y}return"<!doctype html><html><head>"+U+"</head><body>"+C+Y+"</body></html>"}function Xm({lessonId:l,task:u}){const d=u.storageKey||Eh.code(l),f=!!u.projectDraft,g=!!u.isChallenge,v=ye.useRef(null),k=ye.useRef(null),_=ye.useRef(null),w=ye.useRef(null),C=ye.useRef(null),[N,O]=ye.useState(!1),[L,Y]=ye.useState(u.starter||""),[U,B]=ye.useState(u.console||"Press Run to execute the code."),[J,I]=ye.useState(""),[z,q]=ye.useState("Choose Check to run the published examples. Your scores are not recorded."),[W,G]=ye.useState(null),[X,se]=ye.useState(""),ve=["html","css","javascript","jsx"].includes(u.language),De=ve&&!g,[be,ne]=ye.useState(De?"Preview":"Console"),[Le,ue]=Kn("designlab:editor-height",300);ye.useEffect(()=>{Y(Dd(d)??u.starter??""),B(u.console||"Run to see your program output."),q("Choose Check to run the published examples. Your scores are not recorded."),G(null),ne(ve&&!g?"Preview":"Console"),se(""),I("")},[d,u.language,u.starter,u.console,ve,g]),ye.useEffect(()=>()=>{var P;clearTimeout(C.current),w.current=null,(P=k.current)==null||P.instance.dispose(),k.current=null},[]),ye.useEffect(()=>{function P(H){var Ce;const D=w.current;if(!D||!_.current||H.source!==_.current.contentWindow||((Ce=H.data)==null?void 0:Ce.token)!==D.token)return;const Z=H.data;Z.kind==="log"&&B(Ie=>(Ie==="Run to see your program output."?"":Ie)+"["+(Z.level||"log")+"] "+Z.text+`
`),Z.kind==="clear"&&B(""),Z.kind==="error"&&(clearTimeout(C.current),B(Ie=>Ie+"Error: "+Z.text+`
`),D.check&&q("Fix the runtime error, then try Check again."),w.current=null,O(!1),ne("Console")),(Z.kind==="checks"||Z.kind==="project-checks")&&(clearTimeout(C.current),G(Ym(Z.results||(Z.text?[{label:Z.text,pass:Z.pass}]:[]))),w.current=null,O(!1),ne("Checks")),Z.kind==="ready"&&!D.check&&(clearTimeout(C.current),w.current=null,O(!1))}return window.addEventListener("message",P),()=>window.removeEventListener("message",P)},[]);function xe(P){if(!v.current)return;const H=v.current.getBoundingClientRect();ue(Math.max(160,Math.min(H.height-120,P.clientY-H.top)))}async function A(){var P;if(!k.current||k.current.language!==u.language){(P=k.current)==null||P.instance.dispose();const H=await Kb(u.language,D=>B(D));k.current={...H,language:u.language}}return k.current}async function ee(P){var Z,Ce,Ie,qe,Oe,_e,Ue,$e,tt,Ke,zt,Yt,Ht;const H=u.language;if(H==="java"&&u.environment==="ide")throw Error("This activity uses Java 26 file I/O and requires a full Java IDE. Browser execution is not supported for this exercise.");const D=await A();if(H==="python"){let Tt=L;if(g)if(u.publicPythonCases){if(!((Z=u.challengeExamples)!=null&&Z.length))throw Error("This challenge has no published Python examples.");Tt=P?em({cases:u.challengeExamples,mode:"function"},L):tm(L,u.challengeExamples[0].call)}else Tt=Wb(L,{...u,starter:u.starter},P);else if(P){if(!((Ce=u.cases)!=null&&Ce.length))throw Error("This lesson has no published examples.");Tt=em(u,L)}else u.mode==="function"&&((qe=(Ie=u.cases)==null?void 0:Ie[0])!=null&&qe.call)&&(Tt=tm(L,u.cases[0].call));const Ze=await D.instance.run(Tt);if(P){const We=g?u.publicPythonCases?u.challengeExamples:u.challengeExamples.map(st=>({call:(Fb(L,"python")||"Function")+"("+st.input.map(ct=>JSON.stringify(ct)).join(", ")+")",expected:JSON.stringify(st.expected)})):u.cases;G(Zf(Ze.output,We)),B("Python completed the public checks. Review individual results in Checks.")}else if(g)if(u.publicPythonCases){const We=String(Ze.output||"").split(`
`).find(ct=>ct.startsWith("PLAYGROUND_PREVIEW="));if(!We)throw Error("The Python example did not return a result. Review your code and retry.");const st=JSON.parse(We.slice(19));B(st.call+`
Returned: `+st.returned+(st.printed?`
Printed: `+st.printed:""))}else{const We=Zf(Ze.output,[{call:"First published example",expected:JSON.stringify(u.challengeExamples[0].expected)}]);B(We[0].error||"First example returned "+We[0].received+". Expected "+We[0].expected+".")}else if(u.mode==="function"&&((_e=(Oe=u.cases)==null?void 0:Oe[0])!=null&&_e.call)){const We=String(Ze.output||"").split(`
`).find(st=>st.startsWith("PLAYGROUND_PREVIEW="));if(We){const st=JSON.parse(We.slice(19));B(st.call+`
Returned: `+st.returned+(st.printed?`
Printed: `+st.printed:""))}else B(Ze.output||"No return value was captured. See your code and retry.")}else B(Ze.output||(Ze.success?"Program finished with no printed output.":"The Python program stopped."))}if(H==="java"){if(u.environment==="ide")throw Error("This lesson uses Java 26 file input and must run in a full Java IDE. Browser execution is not supported.");if(g){const Tt=oh(u,"java",L),Ze=P?Tt:Tt.slice(0,1),We=await D.instance.run(Hb(L,{...u,challengeExamples:Ze}),[]);if(!We.success)throw Error([We.stdout,We.stderr,We.diagnostics].filter(Boolean).join(`
`));const st=Bb(We.stdout,Ze);P?G(st):B(st.map(ct=>ct.call+`
Received: `+ct.received+`
Expected: `+ct.expected).join(`
`))}else{const Tt=P?u.cases||[]:[{args:u.runArgs||(($e=(Ue=u.cases)==null?void 0:Ue[0])==null?void 0:$e.args)||[]}];if(P&&!Tt.length)throw Error("No public Java examples are available for this exercise.");const Ze=[];for(const We of Tt){const st=await D.instance.run(L,We.args||[]);if(Ze.push(st),!st.success)break}if(P){const We=Db(Ze,Tt);if(Ze.length!==Tt.length)throw Error("Java stopped before completing all published examples: "+(((tt=Ze.at(-1))==null?void 0:tt.diagnostics)||((Ke=Ze.at(-1))==null?void 0:Ke.stderr)||"Unknown error"));G(We),B("Java completed the published checks. Review the Checks tab.")}else B([(zt=Ze[0])==null?void 0:zt.stdout,(Yt=Ze[0])==null?void 0:Yt.stderr,(Ht=Ze[0])==null?void 0:Ht.diagnostics].filter(Boolean).join(`
`)||"Java ran without printed output.")}}if(H==="csharp"){const Tt=D.protocol,Ze=g?oh(u,"csharp",L).map(Se=>({...Se,call:Array.isArray(Se.expected)?Se.call+".SequenceEqual("+Se.expectedLiteral+")":Se.call,arrayResult:Array.isArray(Se.expected),expected:Array.isArray(Se.expected)?"true":Se.expectedLiteral})):u.cases||[],We=g?"Solution":Gb(L),st=P||g&&Ze.length>0;if(P&&!Ze.length)throw Error("No public C# examples are available for this exercise.");if(st&&!We)throw Error("The C# checker could not find the public class name.");const ct=P?Ze:Ze.slice(0,1),Je=st?Tt.buildChecks(ct,We):null,ft=Je&&ct.some(Se=>Se.arrayResult)?`using System.Linq;
`+Je:Je,le=await D.instance.run(L,ft);if(!le.compiled||!le.success)throw Error([le.diagnostics,le.stderr].filter(Boolean).join(`
`)||"C# could not execute.");if(st){const Se=Mb(le.stdout,ct,Tt.parseChecks);P?G(Se):B(Se.map(he=>he.call+`
Received: `+he.received+`
Expected: `+he.expected).join(`
`))}else B(le.stdout||"C# executed without printed output.")}}async function Q(P){if(!N){O(!0),I(""),G(null),P?(q("Running published example checks…"),ne("Checks")):(B("Preparing runner…"),ne(De?"Preview":"Console"));try{if(ve){const H=crypto.randomUUID();w.current={token:H,check:P};const D=await Ph({code:L,language:u.language,lessonId:l,task:u,token:H,check:P});se(D),B(""),clearTimeout(C.current),C.current=setTimeout(()=>{var Z;((Z=w.current)==null?void 0:Z.token)===H&&(w.current=null,O(!1),B("The preview did not finish within 7 seconds. Check for errors or an infinite loop."),q("Practice timed out. No result was recorded."),_.current&&(_.current.srcdoc="<p>Preview stopped after timeout.</p>"),ne("Console"))},7e3)}else await ee(P),O(!1)}catch(H){clearTimeout(C.current),w.current=null,O(!1);const D=String((H==null?void 0:H.message)||H);B(D),ne("Console"),P&&q("Check unavailable: "+D)}}}function T(P){if(!N){if(P==="Run"||P==="Check"){Q(P==="Check");return}if(P==="Save"){ha(d,L),I("Draft saved in this browser only.");return}P==="Reset"&&(Y(u.starter||""),ha(d,u.starter||""),G(null),se(""),q("Choose Check to run published examples again."),B("Starter code restored. No points were recorded."),ne(De?"Preview":"Console"))}}return c.jsxs("div",{className:"code-pane",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx(Hd,{size:16})," Editor"]}),c.jsxs("div",{className:"right-meta",children:[u.language.toUpperCase()," ",c.jsx(fi,{children:"Live practice"})]})]}),c.jsxs("div",{className:"code-workspace",ref:v,style:{"--editor-height":Le+"px"},children:[c.jsx(Gm,{value:L,language:u.language,onChange:P=>{Y(P),(f||g)&&ha(d,P),I(""),G(null),q("Code changed. Choose Check to run fresh examples.")}}),c.jsx(fc,{axis:"rows",onDrag:xe}),c.jsx(Vm,{text:U,checksText:z,checkRows:W,points:u.points,language:u.language,lessonId:l,previewEnabled:De,previewDoc:X,previewRef:_,activeTab:be,onTabChange:ne})]}),c.jsxs("div",{className:"editor-controls",children:[c.jsxs("div",{children:[["Run","Check","Reset"].map(P=>c.jsx("button",{type:"button",className:"btn",disabled:N,onClick:()=>T(P),children:P},P)),N&&c.jsx("button",{type:"button",className:"btn",onClick:()=>{var P,H,D;(D=(P=k.current)==null?void 0:(H=P.instance).stop)==null||D.call(H),w.current=null,clearTimeout(C.current),O(!1),B("Execution stopped.")},children:"Stop"})]}),c.jsxs("div",{children:[c.jsxs("button",{type:"button",className:"btn",disabled:N,onClick:()=>T("Save"),children:[c.jsx(Pd,{size:15})," Save"]}),c.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submission and official grading are not connected in this preview",children:[c.jsx(gh,{size:15})," Submit (not enabled)"]})]})]}),c.jsx("div",{className:"editor-note",role:"status",children:J||"Run executes code locally; Check tests public examples only. No grades, points or hand-ins are recorded."})]})}const Lh=Object.freeze(["index.html","styles.css","script.js"]),Ah=Object.freeze(["index.html","styles.css","App.jsx"]),Qm=l=>l==="jsx"?Ah:Lh,lh=`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Robotics meetup</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="event-card"><h1>Robotics meetup</h1><p>Thursday at 4 PM in the lab.</p><p>Attendees: <span id="count">0</span></p><button id="join">Join</button></main>
  <script src="script.js" defer><\/script>
</body>
</html>`,Xb=`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>React meetup</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="root"></div>
  <script src="App.jsx" defer><\/script>
</body>
</html>`;function Zm(l){return l.endsWith(".html")?"html":l.endsWith(".css")?"css":l.endsWith(".jsx")?"jsx":"javascript"}function uh(l,u=""){const d=String(u).toLowerCase();return l==="jsx"||d==="react"?"App.jsx":l==="css"||/css|style|readable|responsive/.test(d)?"styles.css":l==="javascript"||/\bjs\b|javascript|script|function|array|object|dom|event|state|team|matchup|pick|scor|leaderboard|test|integrat|interact/.test(d)?"script.js":"index.html"}function Qb(l,u="script.js"){if(!l.trim())return"";let d=l;if(!/<link\b[^>]*href\s*=\s*["']styles\.css["'][^>]*>/i.test(d)){const f=`  <link rel="stylesheet" href="styles.css">
`;d=/<\/head\s*>/i.test(d)?d.replace(/<\/head\s*>/i,f+"</head>"):f+d}if(!d.includes('src="'+u+'"')&&!d.includes("src='"+u+"'")){const f='  <script src="'+u+`" defer><\/script>
`;d=/<\/body\s*>/i.test(d)?d.replace(/<\/body\s*>/i,f+"</body>"):d+`
`+f}return d}function cc(l){let u=String(l??"");const d=[],f=[];return u=u.replace(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi,(g,v)=>(d.push(v.trim().replace(/^(?: {4}|\t)/gm,"")),"")),u=u.replace(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi,(g,v,k)=>/\bsrc\s*=/.test(v)||/\btype\s*=\s*["'](?:application\/json|application\/ld\+json|importmap)["']/i.test(v)?g:(f.push(k.trim().replace(/^(?: {4}|\t)/gm,"")),"")),{"index.html":Qb(u.replace(/\n{3,}/g,`

`).trim(),"script.js"),"styles.css":d.join(`

`),"script.js":f.join(`

`)}}function eg(l,u){const d=String(u??"");if(l==="jsx")return{"index.html":Xb,"styles.css":"","App.jsx":d};if(l==="html")return cc(d);if(l==="css")return{"index.html":lh,"styles.css":d,"script.js":""};if(l==="javascript")return{"index.html":lh,"styles.css":"","script.js":d};throw Error("Not a web lesson: "+l)}const tg=l=>cc(l);function Qo(l,u){if(![...Lh,...Ah].includes(u))throw Error("Unknown workspace file");return l+":file:"+u}function ng({base:l,starters:u,legacy:d,read:f,write:g}){const v=Object.keys(u),k=Object.fromEntries(v.map(N=>[N,f(Qo(l,N))]));if(v.some(N=>k[N]!==null&&k[N]!==void 0))return Object.fromEntries(v.map(N=>[N,k[N]??u[N]??""]));const w=d!=null?u["App.jsx"]!==void 0?{...u,"App.jsx":d}:Object.prototype.hasOwnProperty.call(u,"index.html")&&(u["styles.css"]||u["script.js"])&&/<html|<style|<script/i.test(d)||u["index.html"]!==void 0&&/<html|<!doctype|<body/i.test(d)?cc(d):{...u,[u["index.html"]===lh?u["script.js"]?"script.js":"styles.css":"index.html"]:d}:u,C=Object.fromEntries(v.map(N=>[N,w[N]??u[N]??""]));return v.forEach(N=>g(Qo(l,N),C[N])),C}function im(l,u){return String(l??"").replace(new RegExp("</"+u,"gi"),"<\\/"+u)}function Zb(l,{scriptName:u="script.js",scriptOverride:d=null}={}){let f=String((l==null?void 0:l["index.html"])??"");const g=String((l==null?void 0:l["styles.css"])??""),v=String(d===null?(l==null?void 0:l[u])??"":d);let k=!1,_=!1;if(f=f.replace(/<link\b[^>]*>/gi,w=>/\bhref\s*=\s*["'](?:\.\/)?styles\.css["']/i.test(w)&&/\brel\s*=\s*["']stylesheet["']/i.test(w)?(k=!0,'<style data-web-file="styles.css">'+im(g,"style")+"</style>"):w),f=f.replace(/<script\b([^>]*)>\s*<\/script\s*>/gi,(w,C)=>{const N=/\bsrc\s*=\s*["']([^"']+)["']/i.exec(C);return N&&N[1].replace(/^\.\//,"")===u?(_=!0,""):w}),_){const w='<script data-web-file="'+u+'">'+im(v,"script")+"<\/script>";f=/<\/body\s*>/i.test(f)?f.replace(/<\/body\s*>/i,w+`
</body>`):f+`
`+w}return{html:f,linkedStyle:k,linkedScript:_}}const e0=Object.freeze(Object.defineProperty({__proto__:null,REACT_FILE_NAMES:Ah,WEB_FILE_NAMES:Lh,assembleWebFiles:Zb,fileLanguage:Zm,fileNamesFor:Qm,initialFocus:uh,lessonStarterFiles:eg,loadWebDrafts:ng,projectStarterFiles:tg,splitEmbeddedWebSource:cc,webDraftKey:Qo},Symbol.toStringTag,{value:"Module"}));function rg({lessonId:l,task:u}){const d=Eh.code(l),f=Qm(u.language),g=u.starterFiles||(u.projectDraft?tg(u.starter):eg(u.language,u.starter)),[v,k]=ye.useState(()=>ng({base:d,starters:g,legacy:Dd(d),read:Dd,write:ha})),[_,w]=ye.useState(()=>uh(u.language,u.focus)),[C,N]=ye.useState("Run to render all your linked files together."),[O,L]=ye.useState("Check runs the current published practice requirements."),[Y,U]=ye.useState(null),[B,J]=ye.useState(""),[I,z]=ye.useState("Preview"),[q,W]=ye.useState(""),[G,X]=ye.useState(!1),[se,ve]=Kn("designlab:web-files-editor-height",310),De=ye.useRef(null),be=ye.useRef(null),ne=ye.useRef(null),Le=ye.useRef(null);ye.useEffect(()=>{const D=uh(u.language,u.focus);w(f.includes(D)?D:"index.html")},[u.stepId,u.focus,u.language]),ye.useEffect(()=>{const D=Z=>{var qe;const Ce=be.current;if(!Ce||!De.current||Z.source!==De.current.contentWindow||((qe=Z.data)==null?void 0:qe.token)!==Ce.token)return;const Ie=Z.data;Ie.kind==="log"&&N(Oe=>Oe+(Ie.level==="error"?"Error: ":"")+Ie.text+`
`),Ie.kind==="clear"&&N(""),Ie.kind==="error"&&(clearTimeout(ne.current),be.current=null,N(Oe=>Oe+"Error: "+Ie.text+`
`),L("Fix the error reported in Console before checking again."),z("Console"),X(!1)),(Ie.kind==="checks"||Ie.kind==="project-checks")&&(clearTimeout(ne.current),be.current=null,U(Ym(Ie.results||(Ie.text?[{label:Ie.text,pass:Ie.pass}]:[]))),z("Checks"),X(!1)),Ie.kind==="ready"&&!Ce.check&&(clearTimeout(ne.current),be.current=null,X(!1))};return window.addEventListener("message",D),()=>{clearTimeout(ne.current),be.current=null,window.removeEventListener("message",D)}},[]);function ue(D){k(Z=>({...Z,[_]:D})),ha(Qo(d,_),D),W(""),U(null),L("Code changed. Check again to update the results.")}function xe(){f.forEach(D=>ha(Qo(d,D),v[D]??"")),W("All three files saved in this browser only.")}function A(){window.confirm("Restore all three starter files? Your current saved changes will be replaced.")&&(k({...g}),f.forEach(D=>ha(Qo(d,D),g[D]??"")),U(null),J(""),N("Starter files restored."),L("Run Check to evaluate the restored files."),z("Preview"),W("Starter files restored for this lesson or project."))}function ee(){const D=v[_]||"",Z=document.createElement("a"),Ce=URL.createObjectURL(new Blob([D],{type:"text/plain;charset=utf-8"}));Z.href=Ce,Z.download=_,document.body.append(Z),Z.click(),Z.remove(),setTimeout(()=>URL.revokeObjectURL(Ce),2e3)}function Q(){clearTimeout(ne.current),be.current=null,X(!1),J("<p>Preview stopped.</p>"),N("Preview stopped. Check your script for an endless loop."),z("Console")}async function T(D){var Z;if(!G){X(!0),U(null),W(""),N(""),L(D?"Checking the published requirements…":"Run Check to review the published requirements."),z(D?"Checks":"Preview");try{P();const Ce=crypto.randomUUID();be.current={token:Ce,check:D};const Ie=await Ph({language:u.language,code:v[_]||"",lessonId:u.lessonFocus||l,task:{...u,webFiles:v},token:Ce,check:D});if(((Z=be.current)==null?void 0:Z.token)!==Ce)return;J(Ie),clearTimeout(ne.current),ne.current=setTimeout(()=>{var qe;((qe=be.current)==null?void 0:qe.token)===Ce&&(Q(),L("The preview timed out. No result was recorded."))},7e3)}catch(Ce){clearTimeout(ne.current),be.current=null,X(!1),N(String((Ce==null?void 0:Ce.message)||Ce)),L("Checks unavailable: "+String((Ce==null?void 0:Ce.message)||Ce)),z("Console")}}}function P(){f.forEach(D=>ha(Qo(d,D),v[D]||""))}function H(D){if(!Le.current)return;const Z=Le.current.getBoundingClientRect();ve(Math.max(160,Math.min(Z.height-120,D.clientY-Z.top)))}return c.jsxs("div",{className:"code-pane web-files-pane",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx(Hd,{size:16})," Project files"]}),c.jsxs("span",{className:"web-file-badge",children:["HTML + CSS + ",u.language==="jsx"?"React":"JavaScript"]})]}),c.jsx("div",{className:"web-file-tabs",role:"tablist","aria-label":"Source files",children:f.map(D=>c.jsx("button",{type:"button",role:"tab","aria-selected":D===_,className:D===_?"active":"",onClick:()=>w(D),children:D},D))}),c.jsxs("div",{className:"code-workspace",ref:Le,style:{"--editor-height":se+"px"},children:[c.jsx(Gm,{value:v[_]??"",language:Zm(_),onChange:ue},_),c.jsx(fc,{axis:"rows",onDrag:H}),c.jsx(Vm,{text:C,checksText:O,checkRows:Y,points:null,language:"html",previewEnabled:!0,previewDoc:B,previewRef:De,activeTab:I,onTabChange:z})]}),c.jsxs("div",{className:"editor-controls",children:[c.jsxs("div",{children:[c.jsx("button",{type:"button",className:"btn",disabled:G,onClick:()=>T(!1),children:"Run"}),c.jsx("button",{type:"button",className:"btn",disabled:G,onClick:()=>T(!0),children:"Check"}),c.jsx("button",{type:"button",className:"btn",disabled:G,onClick:A,children:"Reset"}),G&&c.jsx("button",{type:"button",className:"btn",onClick:Q,children:"Stop"})]}),c.jsxs("div",{children:[c.jsxs("button",{type:"button",className:"btn",disabled:G,onClick:ee,children:[c.jsx(Xy,{size:15})," Download file"]}),c.jsxs("button",{type:"button",className:"btn",disabled:G,onClick:xe,children:[c.jsx(Pd,{size:15})," Save"]}),c.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submissions and grading are not connected",children:[c.jsx(gh,{size:15})," Submit (not enabled)"]})]})]}),c.jsx("div",{className:"editor-note",role:"status",children:q||"Edit one file at a time. The HTML link to styles.css and script tag for script.js (or App.jsx) connect the files. Drafts save locally; practice checks award no points."})]})}function t0({lessonId:l,onAnswerChecked:u}){const d=xh[l],[f,g]=ye.useState(null),[v,k]=ye.useState(!1);function _(){k(!0),u==null||u({selected:f,correct:f===d.correct})}function w(){g(null),k(!1),u==null||u(null)}return c.jsxs("section",{className:"tsi-practice","aria-label":"Math question",children:[c.jsxs("div",{className:"tsi-practice-heading",children:[c.jsx(wm,{size:20}),c.jsxs("div",{children:[c.jsx("h2",{children:"Try this question"}),c.jsx("p",{children:"Choose an answer, then review the explanation on the right."})]})]}),c.jsxs("div",{className:"tsi-question-card",children:[c.jsx("div",{className:"eyebrow",children:"Question"}),c.jsx("h3",{children:d.prompt}),c.jsx("div",{className:"tsi-answers",role:"radiogroup","aria-label":"Choose the correct answer",children:d.options.map((C,N)=>c.jsxs("label",{className:`tsi-choice ${f===N?"selected":""} ${v&&N===d.correct?"correct":""}`,children:[c.jsx("input",{type:"radio",name:`tsi-${l}`,checked:f===N,disabled:v,onChange:()=>g(N)}),c.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+N)}),c.jsx("span",{children:C})]},C))}),v&&c.jsx("p",{className:"tsi-answer-status",role:"status",children:f===d.correct?"Correct! Read why on the right.":"Not quite. Review the explanation on the right."}),c.jsxs("div",{className:"tsi-buttons",children:[c.jsx("button",{className:"btn primary",disabled:f===null||v,onClick:_,children:"Check answer"}),c.jsxs("button",{className:"btn",onClick:w,children:[c.jsx(mh,{size:15})," Try again"]})]})]})]})}function n0(l){const u=String(l||""),d=u.indexOf("## Learn"),f=u.indexOf("## Practice"),g=u.indexOf("## Reflect");if(d<0||f<d)return{learn:"",reflect:"",questions:[]};const v=u.slice(d,f).trim(),k=u.slice(f,g>f?g:void 0),_=g>f?u.slice(g).trim():"",w=[...k.matchAll(/###\s+(\d+)\.\s+([^\n]+)\n([\s\S]*?)(?=\n###\s+\d+\.|$)/g)].map(C=>({number:Number(C[1]),prompt:C[2].trim(),options:[...C[3].matchAll(/-\s+\*\*([A-D])\.\*\*\s+([^\n]+)/g)].map(N=>({letter:N[1],text:N[2].trim()}))}));return{learn:v,reflect:_,questions:w}}function r0({task:l}){var N;const u=ye.useMemo(()=>n0(l.markdownSource),[l.markdownSource]),d=((N=l.tsiKey)==null?void 0:N.items)||[],[f,g]=ye.useState({}),[v,k]=ye.useState(!1),_=u.questions.filter(O=>{var L;return f[O.number]===((L=d.find(Y=>Y.question===O.number))==null?void 0:L.correct)}).length,w=u.questions.length===4&&u.questions.every(O=>O.options.length===4),C=w&&d.length===4&&Object.keys(f).length===4;return w?c.jsxs("div",{className:"tsi-strand-workspace",children:[c.jsxs("section",{className:"surface-card tsi-strand-questions","aria-label":"TSI math questions",children:[c.jsxs("div",{className:"tsi-strand-panel-heading",children:[c.jsx("span",{className:"eyebrow",children:"Practice"}),c.jsx("h2",{children:"Questions"}),c.jsx("p",{children:"Solve each problem, then check your answers against the explanations on the right."})]}),c.jsxs("form",{onSubmit:O=>{O.preventDefault(),C&&k(!0)},children:[u.questions.map(O=>{var Y;const L=(Y=d.find(U=>U.question===O.number))==null?void 0:Y.correct;return c.jsxs("fieldset",{className:"tsi-strand-question",disabled:v,children:[c.jsxs("legend",{children:[c.jsx("span",{className:"tsi-strand-question-number",children:O.number})," ",O.prompt]}),c.jsx("div",{className:"tsi-strand-options",children:O.options.map(U=>c.jsxs("label",{className:["tsi-strand-option",f[O.number]===U.letter?"selected":"",v&&L===U.letter?"correct":""].filter(Boolean).join(" "),children:[c.jsx("input",{type:"radio",name:l.id+"-q"+O.number,value:U.letter,checked:f[O.number]===U.letter,onChange:()=>{g(B=>({...B,[O.number]:U.letter})),k(!1)}}),c.jsx("span",{className:"tsi-strand-letter",children:U.letter}),c.jsx("span",{children:U.text})]},U.letter))}),v&&c.jsx("p",{className:"tsi-strand-question-status",role:"status",children:f[O.number]===L?"Correct":"Review question "+O.number+" on the right"})]},O.number)}),c.jsxs("div",{className:"tsi-strand-actions",children:[c.jsx("button",{type:"submit",className:"btn primary",disabled:!C||v,children:"Check answers"}),c.jsxs("button",{type:"button",className:"btn",onClick:()=>{g({}),k(!1)},children:[c.jsx(mh,{size:15})," Try again"]})]}),c.jsx("p",{className:"tsi-strand-progress",role:"status",children:v?_+" of 4 correct · instructional practice only":Object.keys(f).length+" of 4 answered"})]})]}),c.jsxs("section",{className:"surface-card tsi-strand-explanations","aria-label":"Math explanations",children:[c.jsxs("div",{className:"tsi-strand-panel-heading",children:[c.jsx("span",{className:"eyebrow",children:"Learn"}),c.jsxs("h2",{children:[c.jsx(ro,{size:20,"aria-hidden":"true"})," Worked explanations"]})]}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:tl(u.learn)}}),c.jsxs("div",{className:"tsi-strand-review","aria-live":"polite",children:[c.jsx("h3",{children:v?c.jsxs(c.Fragment,{children:[c.jsx(lc,{size:18})," Answer explanations"]}):"Review your answers"}),v?u.questions.map(O=>{const L=d.find(Y=>Y.question===O.number);return c.jsxs("article",{className:"tsi-strand-answer",children:[c.jsxs("h4",{children:["Question ",O.number," · ",f[O.number]===(L==null?void 0:L.correct)?"Correct":"Needs review"]}),c.jsxs("p",{children:["Your choice: ",f[O.number]," · Correct: ",L==null?void 0:L.correct]}),c.jsx("p",{children:(L==null?void 0:L.explanation)||"A worked explanation is not yet available."})]},O.number)}):c.jsxs("p",{children:["Complete all four questions and choose ",c.jsx("strong",{children:"Check answers"})," to see the explanations for each."]})]}),u.reflect&&c.jsx("div",{className:"tsi-strand-reflect markdown-preview",dangerouslySetInnerHTML:{__html:tl(u.reflect)}})]}),c.jsx("p",{className:"tsi-strand-disclaimer",children:"Draft TSI instructional practice · 30 minutes · Not an official TSIA2 assessment. Answers in this React preview are not submitted or graded."})]}):c.jsxs("section",{className:"surface-card tsi-strand-error",role:"alert",children:[c.jsx("h2",{children:"Practice questions unavailable"}),c.jsx("p",{children:"This draft lesson's multiple-choice questions could not be loaded. No sample questions were substituted."})]})}const jd=[["quantitative","Quantitative Reasoning"],["algebraic","Algebraic Reasoning"],["geometry","Geometric and Spatial Reasoning"],["statistics","Probabilistic and Statistical Reasoning"]];function i0(l){const u=l.answer,d=Number.isInteger(u)?Math.max(1,Math.round(Math.abs(u)*.15)):Math.max(.125,Math.round(Math.abs(u)*.2*1e3)/1e3),f=[u+d,u-d,u+2*d].map(g=>Number(g.toFixed(4)));return f.splice(l.correct_index??0,0,u),f}function s0(l,u){return Object.fromEntries(jd.map(([d])=>{const f=l.filter(v=>v.strand===d),g=f.filter(v=>u[v.id]!=="skip"&&Number(u[v.id])===v.answer).length;return[d,{correct:g,total:f.length,level:g===f.length?"Advanced":g>=Math.ceil(f.length*.6)?"Proficient":"Basic"}]}))}function a0({items:l=[],profiles:u=[]}){var J,I,z;const[d,f]=ye.useState({}),[g,v]=ye.useState(""),[k,_]=ye.useState(""),[w,C]=Kn("designlab:tsi-math-placement",{}),[N,O]=ye.useState(null),L=ye.useMemo(()=>jd.map(([q,W])=>({id:q,title:W,items:l.filter(G=>G.strand===q)})),[l]),Y=N||((J=w.diagnostic)==null?void 0:J.latest)&&w.diagnostic.latest.placement;function U(q){q.preventDefault();const W=u.find(G=>G.code===g.trim().toUpperCase());if(!W){_("Enter a valid MATH01–MATH81 study code.");return}C(G=>({...G,code:W.code,levels:W.levels})),_("Study code applied in this browser. It does not enroll you in a class.")}function B(q){if(q.preventDefault(),l.some(se=>d[se.id]===void 0)){_("Answer or select Not sure for every question.");return}const W=s0(l,d),G=Object.fromEntries(Object.entries(W).map(([se,ve])=>[se,ve.level])),X={at:new Date().toISOString(),placement:W,levels:G,answers:d};C(se=>{var ve;return{...se,levels:G,diagnostic:{first:((ve=se.diagnostic)==null?void 0:ve.first)||X,latest:X}}}),O(W),_("Your recommended starting levels are ready. Results are stored in this browser only.")}return c.jsxs("div",{className:"published-reading surface-card tsi-diagnostic",children:[c.jsx("h2",{children:"Find your starting point"}),c.jsx("p",{children:"This is the existing 24-question, four-strand practice diagnostic. It suggests what to study; it does not predict an official TSIA2 score or assign an enrolled class."}),c.jsxs("form",{onSubmit:U,className:"tsi-code-entry",children:[c.jsx("label",{htmlFor:"math-locator-code",children:"Pearson study code (MATH01–MATH81)"}),c.jsx("input",{id:"math-locator-code",type:"text",placeholder:"MATH01",maxLength:6,value:g,onChange:q=>v(q.target.value)}),c.jsx("button",{className:"btn",type:"submit",children:"Apply code"})]}),!!w.code&&c.jsxs("p",{role:"status",children:["Current code: ",c.jsx("strong",{children:w.code}),"."," ","Recommended levels: ",jd.map(([q,W])=>{var G;return W+": "+((G=w.levels)==null?void 0:G[q])}).join(" · ")]}),c.jsxs("form",{onSubmit:B,children:[c.jsx("h3",{children:"Take the diagnostic"}),c.jsxs("p",{children:["Choose one answer or Not sure for all ",l.length," questions. This open practice records your first and latest attempts in this browser, not the live gradebook."]}),L.map((q,W)=>c.jsxs("section",{className:"tsi-diagnostic-strand surface-card",children:[c.jsxs("div",{className:"tsi-strand-panel-heading",children:[c.jsxs("span",{className:"eyebrow",children:["Strand ",W+1," of ",L.length]}),c.jsx("h3",{children:q.title}),c.jsxs("p",{children:[q.items.length," questions · Choose an answer or Not sure for each question."]})]}),q.items.map((G,X)=>c.jsxs("fieldset",{className:"tsi-strand-question",children:[c.jsxs("legend",{children:[c.jsx("span",{className:"tsi-strand-question-number",children:X+1})," ",G.prompt]}),c.jsxs("div",{className:"tsi-strand-options",children:[i0(G).map((se,ve)=>c.jsxs("label",{className:"tsi-strand-option "+(d[G.id]===String(se)?"selected":""),children:[c.jsx("input",{type:"radio",name:G.id,value:se,checked:d[G.id]===String(se),onChange:()=>f(De=>({...De,[G.id]:String(se)}))}),c.jsx("span",{className:"tsi-strand-letter",children:String.fromCharCode(65+ve)}),c.jsx("span",{children:se})]},ve)),c.jsxs("label",{className:"tsi-strand-option tsi-diagnostic-unsure "+(d[G.id]==="skip"?"selected":""),children:[c.jsx("input",{type:"radio",name:G.id,value:"skip",checked:d[G.id]==="skip",onChange:()=>f(se=>({...se,[G.id]:"skip"}))}),c.jsx("span",{className:"tsi-strand-letter",children:"?"}),c.jsx("span",{children:"Not sure"})]})]})]},G.id))]},q.id)),c.jsx("button",{type:"submit",className:"btn primary",children:"Get my recommended levels"})]}),!!k&&c.jsx("p",{role:"status",children:k}),Y&&c.jsxs("section",{className:"tsi-diagnostic-results","aria-label":"Diagnostic results",children:[c.jsx("h3",{children:"Recommended starting levels"}),jd.map(([q,W])=>c.jsxs("p",{children:[c.jsxs("strong",{children:[W,": ",Y[q].level]})," (",Y[q].correct," of ",Y[q].total," correct)"]},q)),c.jsx("p",{children:"This diagnostic is instructional, not a verified measure of college readiness. All published lessons remain available regardless of recommendation."}),!!((I=w.diagnostic)!=null&&I.first)&&!!((z=w.diagnostic)!=null&&z.latest)&&c.jsxs("p",{children:["First attempt: ",new Date(w.diagnostic.first.at).toLocaleDateString()," · Latest: ",new Date(w.diagnostic.latest.at).toLocaleDateString()]})]})]})}function o0({lessonId:l,course:u,unit:d,unitNumber:f,isCompleted:g=!1,assignment:v=null,grade:k=null,onToggleCompleted:_,readOnlyMode:w=!1}){var I;const C=to(u,l),N=ye.useRef(null),[O,L]=ye.useState(null),[Y,U]=Kn("designlab:left-width",420);function B(z){if(!N.current)return;const q=N.current.getBoundingClientRect();U(Math.max(260,Math.min(q.width-340,z.clientX-q.left)))}const J=u.id==="tsi-math";return J&&l==="tsi-20d-d01"&&((I=u.diagnosticItems)!=null&&I.length)?c.jsxs("div",{className:"lesson-screen",children:[c.jsxs("header",{className:"lesson-header",children:[c.jsx("div",{className:"eyebrow",children:"Day 1 · TSI Math Advisory"}),c.jsx("h1",{children:C.title}),c.jsx("p",{children:"Diagnostic placement · 30-minute advisory plan"})]}),c.jsx(a0,{items:u.diagnosticItems,profiles:u.locatorProfiles})]}):C!=null&&C.ready?J&&C.tsiStrandDraft?c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:C,unit:d,unitNumber:f,isTsi:!0,isCompleted:g,assignment:v,grade:k,onToggleCompleted:_,readOnlyMode:w}),c.jsx(r0,{task:C})]}):C.language==="text"&&!J?c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:C,unit:d,unitNumber:f,isTsi:!1,isCompleted:g,assignment:v,grade:k,onToggleCompleted:_,readOnlyMode:w}),c.jsxs("section",{className:"surface-card published-reading",children:[c.jsx("p",{className:"muted",children:"Published written-practice material. Answer checking and verified scores remain on the current Playground."}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:tl(C.markdownSource)}})]})]}):J&&!xh[l]?c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:C,unit:d,unitNumber:f,isTsi:!0,isCompleted:g,assignment:v,grade:k,onToggleCompleted:_,readOnlyMode:w}),c.jsxs("section",{className:"surface-card published-reading",children:[c.jsx("p",{className:"muted",children:"Published draft lesson · practice shown for learning, not an official TSIA2 score predictor."}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:tl(C.markdownSource)}})]})]}):c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:C,unit:d,unitNumber:f,isTsi:J,isCompleted:g,assignment:v,grade:k,onToggleCompleted:_,readOnlyMode:w}),c.jsxs("div",{className:`workspace-grid ${J?"tsi-workspace":""}`,ref:N,style:{"--left-pane":`${Y}px`},children:[J?c.jsx(t0,{lessonId:l,onAnswerChecked:L}):c.jsx(Pf,{lessonId:l,task:C}),c.jsx(fc,{axis:"columns",onDrag:B}),J?c.jsx(Pf,{lessonId:l,task:C,isTsi:!0,tsiAnswer:O}):u.id==="mobile-app-dev"&&["html","css","javascript","jsx"].includes(C.language)?c.jsx(rg,{lessonId:l,task:{...C,lessonFocus:l}},l):c.jsx(Xm,{lessonId:l,task:C})]})]}):c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:C,unit:d,unitNumber:f,isTsi:J,isCompleted:g,assignment:v,grade:k,onToggleCompleted:_,readOnlyMode:w}),c.jsxs("section",{className:"lesson-content-pending surface-card",children:[c.jsx("h2",{children:"Lesson coming soon"}),c.jsx("p",{children:"This scheduled lesson has not been authored yet. No practice or scores are available."})]})]})}function l0({course:l,project:u,stepId:d,openProject:f}){const g=u.steps||[],v=Math.max(0,g.findIndex(Y=>Y.id===d)),k=g[v],_=ye.useRef(null),[w,C]=Kn("designlab:project-left-width",430),N="project:"+l.id+":"+u.id,O={id:N,title:u.title,language:u.language||"html",starter:u.starter||"",starterFiles:u.starterFiles||null,challenge:u.summary||"",console:"Run to see your actual page. Check tests the published step requirements in a sandboxed browser preview.",projectDraft:!0,isPublished:!1,projectId:u.id,stepId:k.id,focus:k.focus};function L(Y){if(!_.current)return;const U=_.current.getBoundingClientRect();C(Math.max(260,Math.min(U.width-340,Y.clientX-U.left)))}return c.jsxs("div",{className:"lesson-screen project-workspace",children:[c.jsxs("header",{className:"lesson-header",children:[c.jsxs("div",{className:"eyebrow",children:["Published guided project · ",g.length," steps"]}),c.jsx("h1",{children:u.title}),c.jsx("p",{children:u.summary}),c.jsx("p",{className:"muted",children:"Run renders your actual project and Check tests the current step. Drafts save in this browser; Submit and verified grading remain disabled."})]}),c.jsx("nav",{className:"project-step-list","aria-label":"Project steps",children:g.map((Y,U)=>c.jsxs("button",{type:"button","aria-current":U===v?"step":void 0,className:U===v?"btn primary":"btn",onClick:()=>f(l.id,u.id,Y.id),children:[U+1,". ",Y.title]},Y.id))}),c.jsxs("div",{className:"workspace-grid",ref:_,style:{"--left-pane":w+"px"},children:[c.jsxs("section",{className:"instructions-pane project-reading",children:[c.jsx("div",{className:"pane-header",children:c.jsxs("strong",{children:["Step ",v+1,": ",k.title]})}),c.jsxs("p",{className:"web-files-reading-note",children:["This published walkthrough was originally written for one HTML file. When it says to add a <style> or <script> block, put that code in",c.jsx("code",{children:"styles.css"})," or ",c.jsx("code",{children:"script.js"})," instead. Keep the file links in",c.jsx("code",{children:"index.html"}),"; Run connects them automatically."]}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:tl(k.markdownSource)}})]}),c.jsx(fc,{axis:"columns",onDrag:L}),c.jsx(rg,{lessonId:N,task:O})]}),c.jsxs("nav",{className:"lesson-next-bar","aria-label":"Project step navigation",children:[v>0&&c.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>f(l.id,u.id,g[v-1].id),children:[c.jsx(Wd,{size:16})," ",c.jsxs("span",{children:["Prev: ",g[v-1].title]})]}),v<g.length-1&&c.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>f(l.id,u.id,g[v+1].id),children:[c.jsxs("span",{children:["Next: ",g[v+1].title]})," ",c.jsx(ni,{size:16})]})]})]})}function u0({courseId:l,lessonId:u,projectId:d,projectStepId:f,availableCourses:g=rs,openCourse:v,openProject:k,openChallenges:_,completedLessons:w=[],assignments:C=[],grades:N=[],onToggleLessonComplete:O,courseColors:L={},onSetCourseColor:Y,onResetCourseColor:U,readOnlyMode:B=!1}){const J=g.find(X=>X.id===l)||g[0];if(J.id==="test-prep")return c.jsx(_v,{lessonId:u,openCourse:v,completedLessons:w,onToggleLessonComplete:O});const I=(J.projects||[]).find(X=>X.id===d),z=ac(J),q=J.units.findIndex(X=>is(X).includes(u)),W=J.units[q],G=z.indexOf(u);return c.jsx("div",{className:"course-layout integrated-course","data-course":J.id,children:c.jsxs("div",{className:"course-main",children:[c.jsxs("div",{className:"course-breadcrumb",children:[c.jsx("button",{onClick:()=>v(null),children:"All playgrounds"}),c.jsx(ni,{size:14}),u||I?c.jsxs(c.Fragment,{children:[c.jsx("button",{onClick:()=>v(J.id),children:J.label}),c.jsx(ni,{size:14}),c.jsx("span",{className:"breadcrumb-unit-name",title:W?Rs(W):"",children:W?Rs(W):(I==null?void 0:I.title)||""})]}):c.jsx("span",{children:J.label})]}),I?c.jsx(l0,{course:J,project:I,stepId:f,openProject:k},I.id):u?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"lesson-mobile-navigation",children:[c.jsx("label",{htmlFor:"lesson-select",children:"Lesson"}),c.jsx("select",{id:"lesson-select",value:u,onChange:X=>v(J.id,X.target.value),children:J.units.map((X,se)=>c.jsx("optgroup",{label:`Unit ${se+1} · ${Rs(X)}`,children:is(X).map(ve=>c.jsx("option",{value:ve,children:no(J,ve)},ve))},X.id))})]}),c.jsx(o0,{lessonId:u,course:J,unit:W,unitNumber:q+1,isCompleted:w.includes(u),assignment:C.find(X=>X.id==="lesson:"+u),grade:N.find(X=>X.id==="lesson:"+u),onToggleCompleted:()=>O==null?void 0:O(u),readOnlyMode:B},u),c.jsxs("nav",{className:"lesson-next-bar","aria-label":"Lesson sequence",children:[G>0&&c.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>v(J.id,z[G-1]),children:[c.jsx(Wd,{size:16,"aria-hidden":"true"}),c.jsxs("span",{children:["Prev: ",no(J,z[G-1])]})]}),G>=0&&G<z.length-1&&c.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>v(J.id,z[G+1]),children:[c.jsxs("span",{children:["Next: ",no(J,z[G+1])]}),c.jsx(ni,{size:16,"aria-hidden":"true"})]})]})]}):c.jsx(kv,{course:J,openCourse:v,openProject:k,openChallenges:_,completedLessons:w,assignments:C,grades:N,courseColors:L,onSetCourseColor:Y,onResetCourseColor:U,readOnlyMode:B})]})})}const Zo=[{id:"p1",period:"1",name:"Period 1",course:"computer-science-1"},{id:"p3",period:"3",name:"Period 3",course:"computer-science-1"},{id:"p5",period:"5",name:"Period 5",course:"mobile-app-dev"},{id:"p6",period:"6",name:"Period 6",course:"game-programming"},{id:"p7",period:"7",name:"Period 7",course:"mobile-app-dev"},{id:"p8",period:"8",name:"Period 8",course:"computer-science-1"}],c0=l=>Zo.find(u=>u.id===l),ig=l=>{var u;return(u=c0(l))==null?void 0:u.period},d0=[...new Set(Zo.map(l=>l.period))].sort((l,u)=>Number(l)-Number(u)),p0=[{key:"2026-11-02",label:"Nov 2 – Nov 8, 2026"},{key:"2026-10-26",label:"Oct 26 – Nov 1, 2026"}],nl=l=>{var u,d,f;return((u=l.teacherName)==null?void 0:u.trim())||((d=l.sheetName)==null?void 0:d.trim())||((f=l.studentName)==null?void 0:f.trim())||l.github},sm=l=>(l.teacherName||l.sheetName||l.studentName||"").trim().split(/\s+/),sg=(l,u,d)=>{const f=g=>d==="github"?g.github.toLowerCase():d==="first"?(sm(g)[0]||g.github).toLowerCase():(sm(g).at(-1)||g.github).toLowerCase();return f(l).localeCompare(f(u),void 0,{numeric:!0})||l.github.localeCompare(u.github)},h0=[["last","Last name"],["first","First name"],["github","GitHub username"]];function f0({sectionId:l,onSectionChange:u,setupOpen:d,onToggleSetup:f,sections:g=Zo,readOnlyMode:v=!1}){return c.jsxs("div",{className:"teacher-toolbar",children:[c.jsxs("label",{children:["Class section",c.jsx("select",{value:l,onChange:k=>u(k.target.value),children:g.map(k=>c.jsxs("option",{value:k.id,children:[k.name," · ",fm(k.course)]},k.id))})]}),!v&&c.jsxs("button",{type:"button",className:"btn section-setup-toggle","aria-expanded":d,"aria-controls":"teacher-section-setup",onClick:f,children:[d?c.jsx(Ud,{size:16}):c.jsx(yh,{size:16}),d?"Close section setup":"Section setup"]})]})}const m0=[["overview","Class Overview",fh],["curriculum","Curriculum",ro],["journals","Journals",hh]];function g0({tab:l,onChange:u}){return c.jsx("div",{className:"tabs teacher-tabs",role:"tablist","aria-label":"Teacher dashboard tabs",children:m0.map(([d,f,g])=>c.jsxs("button",{type:"button",role:"tab","aria-selected":l===d,className:l===d?"active":"",onClick:()=>u(d),children:[c.jsx(g,{size:16}),f]},d))})}function am({section:l}){const u=(l==null?void 0:l.join_code)||(l==null?void 0:l.joinCode);return c.jsxs("div",{className:"section-banner",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Selected section"}),c.jsxs("h2",{children:[l.name," ",c.jsxs("span",{className:"muted",children:["· ",fm(l.course)]})]})]}),u?c.jsxs(fi,{children:["Join code: ",u]}):c.jsx(fi,{children:"Join code unavailable"})]})}function y0({students:l,week:u,setWeek:d,availableWeeks:f=p0,readOnlyMode:g=!1}){const v=ye.useMemo(()=>[...l].sort((k,_)=>(_.weekly[u]||0)-(k.weekly[u]||0)),[l,u]);return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Weekly points"}),c.jsx("p",{children:g?"Server-verified score improvements · Monday–Sunday in Central Time":"Mock verified points · Monday–Sunday in Central Time"})]}),c.jsxs("label",{children:["Week",c.jsx("select",{value:u,onChange:k=>d(k.target.value),children:f.map(k=>c.jsx("option",{value:k.key,children:k.label},k.key))})]})]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Student"}),c.jsx("th",{children:"Weekly points"}),c.jsx("th",{children:g?"Improved assignments":"Sample assignments"})]})}),c.jsx("tbody",{children:v.map(k=>{var _;return c.jsxs("tr",{children:[c.jsxs("th",{children:[nl(k),c.jsxs("small",{children:["@",k.github]})]}),c.jsx("td",{children:c.jsx("strong",{children:k.weekly[u]||0})}),c.jsx("td",{children:g?((_=k.weeklyAssignments)==null?void 0:_[u])||0:k.assignments.filter(w=>w.score!==null).length})]},k.id)})})]})})]})}function ag({label:l,value:u,onChange:d}){return c.jsxs("label",{children:[l,c.jsx("select",{value:u,onChange:f=>d(f.target.value),children:h0.map(([f,g])=>c.jsx("option",{value:f,children:g},f))})]})}function v0(l={}){const u=String(l.type||l.activity_kind||"").trim().toLowerCase(),d=String(l.id||l.activity_id||"").trim().toLowerCase();return u.includes("challenge")||d.startsWith("challenge:")?"challenge":u.includes("lesson")||d.startsWith("lesson:")?"lesson":"other"}function om(l=[]){const u=()=>({completed:0,graded:0,tracked:0,earned:0,possible:0}),d={lessons:u(),challenges:u(),other:u()};for(const f of l||[]){const g=v0(f),v=g==="lesson"?d.lessons:g==="challenge"?d.challenges:d.other;if(v.tracked++,(f.status==="Completed"||f.status==="Practice completed")&&v.completed++,f.score!==null&&f.score!==void 0){v.graded++;const k=Number(f.score),_=Number(f.possible);Number.isFinite(k)&&(v.earned+=k),Number.isFinite(_)&&(v.possible+=_)}}return d}const x0=l=>l.includes("Completed")?"success":l==="Needs revision"?"warning":"";function b0({student:l,week:u,readOnlyMode:d=!1}){const[f,g]=ye.useState(null),v=l.assignments,k=om(v),_=v.reduce((O,L)=>{const Y=L.week||"undated";return(O[Y]||(O[Y]=[])).push(L),O},{}),w=Object.keys(_).sort((O,L)=>L.localeCompare(O)),C=O=>{var L;return Number((L=l.weekly)==null?void 0:L[O])||0},N=O=>{if(O==="undated")return"Earlier / undated activity";const L=new Date(O+"T12:00:00Z"),Y=new Date(L);Y.setUTCDate(Y.getUTCDate()+6);const U=B=>B.toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return U(L)+" – "+U(Y)+", "+Y.getUTCFullYear()};return c.jsxs("div",{className:"expanded-student",children:[c.jsxs("div",{className:"expanded-header",children:[c.jsxs("div",{children:[c.jsx("h3",{children:"Assignment history"}),c.jsx("p",{className:"muted",children:d?`Verified submission history for ${nl(l)}. Practice checks are not grades.`:`Sample records for ${nl(l)}. No student data is loaded.`})]}),c.jsx(fi,{tone:"success",children:d?Object.values(l.weekly||{}).reduce((O,L)=>O+(Number(L)||0),0)+" total verified pts":(l.weekly[u]||0)+" verified pts this week"})]}),c.jsxs("div",{className:"assignment-kind-summary","aria-label":"Lesson and challenge history totals",children:[c.jsxs("div",{className:"assignment-kind-row",children:[c.jsx("small",{className:"assignment-kind-label",children:"Lessons"}),c.jsxs("div",{className:"mini-stats",children:[c.jsxs("span",{children:[c.jsx("strong",{children:k.lessons.completed})," completed"]}),c.jsxs("span",{children:[c.jsx("strong",{children:k.lessons.graded})," graded"]}),c.jsxs("span",{children:[c.jsx("strong",{children:k.lessons.tracked})," tracked"]})]})]}),c.jsxs("div",{className:"assignment-kind-row",children:[c.jsx("small",{className:"assignment-kind-label",children:"Challenges"}),c.jsxs("div",{className:"mini-stats",children:[c.jsxs("span",{children:[c.jsx("strong",{children:k.challenges.completed})," completed"]}),c.jsxs("span",{children:[c.jsx("strong",{children:k.challenges.graded})," graded"]}),c.jsxs("span",{children:[c.jsx("strong",{children:k.challenges.tracked})," tracked"]})]})]})]}),(d?w:["all"]).map(O=>c.jsxs("details",{open:d?void 0:!0,className:d?"panel":"assignment-history-all",style:d?{marginTop:12,padding:12}:{},children:[c.jsxs("summary",{style:d?{cursor:"pointer",fontWeight:600}:{display:"none"},children:[N(O)," · ",(()=>{const L=om(_[O]||[]);return L.lessons.completed+" lessons · "+L.challenges.completed+" challenges"})()," · ",O==="undated"?"No weekly points":C(O)+" verified pts"]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table assignment-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Assignment"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Score"}),c.jsx("th",{children:"Updated"}),c.jsx("th",{children:"Action"})]})}),c.jsx("tbody",{children:(d?_[O]:v).map(L=>{const Y=f===L.id;return c.jsxs(ye.Fragment,{children:[c.jsxs("tr",{children:[c.jsxs("th",{children:[L.name,c.jsx("small",{children:L.type})]}),c.jsx("td",{children:c.jsx(fi,{tone:x0(L.status),children:L.status})}),c.jsx("td",{children:L.score===null?"—":`${L.score} / ${L.possible}`}),c.jsx("td",{children:L.submitted}),c.jsx("td",{children:c.jsx("button",{className:"small-link",onClick:()=>g(Y?null:L.id),children:Y?"Hide details":"View details"})})]}),Y&&c.jsx("tr",{className:"receipt-preview",children:c.jsxs("td",{colSpan:"5",children:[c.jsx("strong",{children:d?"Submission details":"Sample assignment detail"}),c.jsx("p",{children:d?"Submitted code and protected receipts are not loaded in this read-only integration.":"This is a mock submitted-copy preview for layout testing, not the student's actual code."})]})})]},L.id)})})]})})]},O))]})}function w0({students:l,week:u,sort:d,setSort:f,expanded:g,setExpanded:v,readOnlyMode:k=!1,historyLoading:_=!1,onExpand:w}){return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Section roster & activity"}),c.jsx("p",{children:"Click a student's name to expand their assignments directly inside the roster."})]}),c.jsx(ag,{label:"Sort students by",value:d,onChange:f})]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table roster-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Student"}),c.jsx("th",{children:"Activity signal"}),c.jsx("th",{children:"Current activity"}),c.jsx("th",{children:"Practice"}),c.jsx("th",{children:"Hand-ins"})]})}),c.jsx("tbody",{children:l.map(C=>{const N=g===C.id;return c.jsxs(ye.Fragment,{children:[c.jsxs("tr",{className:N?"selected-row":"",children:[c.jsxs("th",{children:[c.jsxs("button",{className:"student-name-button","aria-expanded":N,onClick:()=>{v(N?null:C.id),N||w==null||w(C.id)},children:[N?c.jsx(km,{size:16}):c.jsx(ni,{size:16})," ",nl(C)]}),c.jsxs("small",{children:["@",C.github,!k&&C.sections.length>1?" · Sheet periods 1, 3":""]})]}),c.jsx("td",{children:c.jsx(fi,{tone:C.status==="Active now"?"success":"",children:C.status})}),c.jsx("td",{children:C.current}),c.jsx("td",{children:k?C.practiceCount+" checks":C.assignments.filter(O=>O.status.includes("Completed")).length+" complete"}),c.jsx("td",{children:k?C.handinCount===null?"Expand to view":C.handinCount:C.assignments.filter(O=>O.score!==null).length})]}),N&&c.jsx("tr",{className:"expansion-row",children:c.jsx("td",{colSpan:"5",children:_?c.jsx("p",{role:"status",children:"Loading assignment history…"}):c.jsx(b0,{student:C,week:u,readOnlyMode:k})})})]},C.id)})})]})})]})}function og(l,u){return l+"::"+u}function k0(l,u=[]){if(!(l!=null&&l.sectionId)||!l.lessonId)return"Choose a section and lesson.";if(l.sectionCourseId&&l.sectionCourseId!=="computer-science-1")return"This section uses a different course. Only Computer Science I is connected.";if(!/^\d{4}-\d{2}-\d{2}$/.test(l.dueDate||""))return"Choose a valid due date.";const[d,f,g]=l.dueDate.split("-").map(Number);if(new Date(Date.UTC(d,f-1,g)).toISOString().slice(0,10)!==l.dueDate)return"Choose a valid due date.";const k=Number(l.points);if(!Number.isFinite(k)||!Number.isInteger(k)||k<0||k>1e3)return"Points must be a whole number between 0 and 1,000.";if(l.scope!=="section"&&l.scope!=="selected")return"Choose who receives the assignment.";if(l.scope==="selected"){const _=new Set(u.map(C=>C.id)),w=[...new Set(l.studentIds||[])];if(!w.length||w.some(C=>!_.has(C)))return"Select at least one student from this section."}return null}function S0(l,u=[]){const d=k0(l,u);if(d)throw new Error(d);return{id:og(l.sectionId,l.lessonId),sectionId:l.sectionId,courseId:"computer-science-1",lessonId:l.lessonId,scope:l.scope,studentIds:l.scope==="selected"?[...new Set(l.studentIds)].sort():[],dueDate:l.dueDate,points:Number(l.points)}}function _0(l,u){return[...(Array.isArray(l)?l:[]).filter(d=>d.id!==u.id),u]}function Gp(l,u,d){return(l||[]).find(f=>f.id===og(u,d))||null}const tc=Sr("computer-science-1");function C0({section:l,students:u=[],assignments:d=[],setAssignments:f,readOnlyMode:g=!1}){const v=g?"/playground/integration/data/computer-science-1/course.json":"/playground/data/computer-science-1/course.json",[k,_]=ye.useState(null),[w,C]=ye.useState("loading"),[N,O]=ye.useState(tc.lessons[0]),[L,Y]=ye.useState("section"),[U,B]=ye.useState([]),[J,I]=ye.useState(""),[z,q]=ye.useState(""),[W,G]=ye.useState("starter"),[X,se]=ye.useState("");ye.useEffect(()=>{const P=new AbortController;return fetch(v,{signal:P.signal,cache:"no-store"}).then(H=>{if(!H.ok)throw new Error("Curriculum unavailable");return H.json()}).then(H=>{if(!Array.isArray(H.lessons)||!H.lessons.length)throw new Error("Unexpected curriculum response");_(rl(H)),C("live")}).catch(H=>{H.name!=="AbortError"&&C("snapshot")}),()=>P.abort()},[]);const ve=ye.useMemo(()=>k?{...tc,...k}:tc,[k]),De=ve.lessons,be=De.includes(N)?N:De[0],ne=to(ve,be),Le=De.reduce((P,H)=>{var D;return P+(Number((D=to(ve,H))==null?void 0:D.points)||0)},0),ue=tc.lessons.includes(be),xe=(l==null?void 0:l.course)==="computer-science-1",A=Gp(d,l==null?void 0:l.id,be),ee=u.filter(P=>P.sections.includes(l==null?void 0:l.id));ye.useEffect(()=>{var H;const P=Gp(d,l==null?void 0:l.id,be);Y((P==null?void 0:P.scope)||"section"),B((P==null?void 0:P.studentIds)||[]),I((P==null?void 0:P.dueDate)||""),q(String((P==null?void 0:P.points)??((H=to(ve,be))==null?void 0:H.points)??0)),se(""),G("starter")},[be,l==null?void 0:l.id]);function Q(P){P.preventDefault();try{const H=S0({sectionId:l==null?void 0:l.id,sectionCourseId:l==null?void 0:l.course,lessonId:be,scope:L,studentIds:U,dueDate:J,points:z},ee);if(g)throw Error("Assignment changes are disabled in this integration test.");f==null||f(D=>_0(D,H)),se("Preview assignment saved in this browser. No students were notified.")}catch(H){se(H.message)}}function T(){if(g){se("Assignment changes are disabled in this integration test.");return}f==null||f(P=>(P||[]).filter(H=>H.id!==(A==null?void 0:A.id))),se("Preview assignment cleared. Live student records were not changed.")}return c.jsxs("section",{className:"panel curriculum-panel","aria-label":"Published curriculum",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsxs("h2",{children:[c.jsx(ro,{size:18})," Computer Science I curriculum"]}),c.jsxs("p",{children:[ve.units.length," original units · ",De.length," lessons · ",Le," available lesson points"]})]}),c.jsx("span",{className:"curriculum-source",role:"status",children:w==="live"?"Published course • current":w==="loading"?"Checking published course…":"Bundled preview snapshot"})]}),c.jsx("p",{className:"curriculum-explanation",children:"Lesson titles, published points, starter code, and unit order come from the real CS1 catalog. Assignment controls below are a browser-only preview and do not affect live students."}),c.jsxs("div",{className:"curriculum-grid",children:[c.jsx("div",{className:"curriculum-units","aria-label":"Unit and lesson list",children:ve.units.map((P,H)=>c.jsxs("details",{open:is(P).includes(be)||H===0,children:[c.jsxs("summary",{children:["Unit ",pc(P,H+1)," · ",Rs(P)]}),c.jsx("div",{children:is(P).map(D=>c.jsxs("button",{type:"button",className:D===be?"curriculum-lesson selected":"curriculum-lesson","aria-current":D===be?"true":void 0,onClick:()=>O(D),children:[no(ve,D),Gp(d,l==null?void 0:l.id,D)&&c.jsx("small",{children:" · Assigned in preview"})]},D))})]},P.id))}),c.jsxs("article",{className:"curriculum-lesson-preview",children:[c.jsx("div",{className:"eyebrow",children:"Published lesson"}),c.jsx("h3",{children:ne.title}),c.jsx("p",{children:ne.summary||ne.challenge||"Practice the skills from this unit."}),c.jsxs("div",{className:"curriculum-meta",children:[c.jsxs("span",{children:[ne.points??0," published points"]}),c.jsxs("span",{children:[ne.mode==="function"?"Function":"Script"," · Python"]})]}),c.jsxs("div",{className:"curriculum-code-tabs",role:"tablist","aria-label":"Lesson code",children:[c.jsx("button",{type:"button",role:"tab","aria-selected":W==="starter",className:W==="starter"?"active":"",onClick:()=>G("starter"),children:"Starter code"}),c.jsxs("button",{type:"button",role:"tab","aria-selected":W==="solution",className:W==="solution"?"active":"",onClick:()=>G("solution"),children:[c.jsx(cf,{size:14})," Solution"]})]}),W==="starter"?c.jsx("pre",{className:"curriculum-code",children:c.jsx("code",{children:ne.starter||"# No starter code provided"})}):c.jsxs("div",{className:"curriculum-solution-locked",role:"status",children:[c.jsx(cf,{size:20}),c.jsxs("div",{children:[c.jsx("strong",{children:"Teacher-only solutions"}),c.jsx("p",{children:"Solutions must be loaded from protected storage after teacher sign-in and authorization. Answer keys are not included in the public React preview."})]})]}),ue?c.jsxs("a",{className:"btn",href:Fd(tc,be),children:["Open lesson in React preview ",c.jsx(Sm,{size:14})]}):c.jsx("p",{className:"muted",children:"This newer published lesson is not yet in the React snapshot."}),c.jsxs("div",{className:"curriculum-assignment-editor",children:[c.jsx("h4",{children:"Assign lesson"}),xe?c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"curriculum-assignment-warning",children:g?"Read-only integration: assignments cannot be saved or changed.":"Preview only. Assignments are saved in this browser, not sent to students or the live gradebook."}),c.jsx("form",{onSubmit:Q,className:"curriculum-assignment-form",children:c.jsxs("fieldset",{disabled:g,style:{border:0,padding:0,margin:0,minWidth:0},children:[c.jsxs("label",{children:["Assign to",c.jsxs("select",{value:L,onChange:P=>Y(P.target.value),children:[c.jsxs("option",{value:"section",children:["Whole class · ",ee.length," students"]}),c.jsx("option",{value:"selected",children:"Selected students"})]})]}),L==="selected"&&c.jsxs("fieldset",{className:"curriculum-recipient-picker",children:[c.jsx("legend",{children:"Choose students"}),ee.length?ee.map(P=>c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:U.includes(P.id),onChange:H=>B(D=>H.target.checked?[...D,P.id]:D.filter(Z=>Z!==P.id))}),c.jsx("span",{children:nl(P)})]},P.id)):c.jsx("p",{children:"No students are enrolled in this section."})]}),c.jsxs("div",{className:"curriculum-assignment-fields",children:[c.jsxs("label",{children:["Due date",c.jsx("input",{type:"date",required:!0,value:J,onChange:P=>I(P.target.value)})]}),c.jsxs("label",{children:["Points",c.jsx("input",{type:"number",required:!0,min:"0",max:"1000",step:"1",value:z,onChange:P=>q(P.target.value)})]})]}),c.jsxs("div",{className:"curriculum-assignment-actions",children:[c.jsx("button",{type:"submit",className:"btn primary",children:A?"Update preview assignment":"Save preview assignment"}),A&&c.jsx("button",{type:"button",className:"btn",onClick:T,children:"Remove assignment"})]})]})}),A&&c.jsxs("p",{className:"curriculum-current-assignment",children:["Saved for ",A.scope==="section"?"whole class":A.studentIds.length+" selected students"," · ","Due ",A.dueDate," · ",A.points," points"]}),X&&c.jsx("p",{className:"curriculum-assignment-feedback",role:"status",children:X})]}):c.jsxs("p",{className:"curriculum-assignment-warning",children:[(l==null?void 0:l.name)||"This section"," uses a different course. Choose a Computer Science I section to assign CS1 lessons."]})]})]})]})]})}function T0(l){const u=(l==null?void 0:l.lessonRecords)||{},d=new Map;for(const[g,v]of Object.entries(u)){const k=v.stableId||v.id||g;for(const _ of[g,v.id,k,...v.legacyIds||[]].filter(Boolean)){if(d.has(_)&&d.get(_)!==g)throw Error("Ambiguous lesson alias: "+_);d.set(_,g)}}function f(g){const v=String(g||"").trim(),k=v.replace(/^(lesson|challenge|project):/,""),_=d.get(v)||d.get(k);return _?{key:_,record:u[_],stableId:u[_].stableId||_}:null}return{resolve:f,canonicalId:g=>{var v;return((v=f(g))==null?void 0:v.stableId)||g},title:g=>{var v;return((v=f(g))==null?void 0:v.record.title)||null}}}const Yp=()=>({teacher:new Map,sheet:new Map,directory:[],loading:!0,error:""}),lg=l=>String(l||"").trim().replace(/^@/,"").toLowerCase();function j0(l=[],u=[],d=[]){const f=new Map((Array.isArray(l)?l:[]).filter(w=>{var C;return w.user_id&&((C=w.display_name)==null?void 0:C.trim())}).map(w=>[w.user_id,w.display_name.trim()])),g=new Map((Array.isArray(u)?u:[]).filter(w=>w.user_id).map(w=>[w.user_id,w])),v=Array.isArray(d)?d:[],k=new Map(v.filter(w=>w.user_id).map(w=>[w.user_id,w])),_=new Map(v.filter(w=>w.github_account).map(w=>[lg(w.github_account),w]));return{teacher:f,sheet:g,directory:v,byId:k,byGithub:_,loading:!1,error:""}}function ug(l,u){var _,w,C,N;const d=u.user_id||u.id,f=((_=l.byId)==null?void 0:_.get(d))||((w=l.byGithub)==null?void 0:w.get(lg(u.github_account||u.github)))||{},g=f.user_id||d,v=u.github_account||f.github_account||u.github||"",k=(C=l.sheet)==null?void 0:C.get(g);return{teacherName:((N=l.teacher)==null?void 0:N.get(g))||"",sheetName:(k==null?void 0:k.name)||"",studentName:f.student_name||u.student_name||u.display_name||"",github:v}}function cg(l,u=0){const[d,f]=ye.useState(Yp);return ye.useEffect(()=>{if((l==null?void 0:l.status)!=="ready"){f(Yp());return}let g=!0;return Promise.all([l.rpc("playground_teacher_names"),l.rpc("playground_teacher_sheet_roster"),l.rpc("playground_teacher_directory")]).then(([v,k,_])=>{g&&f(j0(v,k,_))}).catch(()=>{g&&f({...Yp(),loading:!1,error:"Names and account directory could not be loaded."})}),()=>{g=!1}},[l,u]),d}const N0="/playground/integration/teacher-bridge.js";function Vp(l,u=Sr("computer-science-1")){var N;const d=String(l||"").trim(),f=d.replace(/^(lesson|challenge|project):/,""),g=T0(u).title(f);if(g)return g;const v=(u==null?void 0:u.lessonRecords)||{},k=(u==null?void 0:u.challengeRecords)||{},_=[d,f,f.split("/").at(-1)];if(d.startsWith("challenge:")||k[f]){for(const O of _){const L=k[O];if(L!=null&&L.title)return L.title}for(const O of Object.values(k))if((O==null?void 0:O.stableId)===f||((O==null?void 0:O.legacyIds)||[]).includes(f))return O.title||f}for(const O of _){const L=v[O];if(L!=null&&L.title)return L.title}const w=f.split("/").at(-1),C=Object.entries(v).filter(([O])=>O.split("/").at(-1)===w);return C.length===1&&((N=C[0][1])!=null&&N.title)?C[0][1].title:w.replace(/^\\d+-/,"").replace(/[-_]/g," ").replace(/\b[a-z]/g,O=>O.toUpperCase())||"Untitled activity"}function E0(l){if(!l||Number.isNaN(Date.parse(l)))return null;const u=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(l)).filter(f=>f.type!=="literal").map(f=>[f.type,f.value])),d=new Date(u.year+"-"+u.month+"-"+u.day+"T12:00:00Z");return d.setUTCDate(d.getUTCDate()-(d.getUTCDay()+6)%7),d.toISOString().slice(0,10)}function P0(l){const u=new Date(l+"T12:00:00Z");if(Number.isNaN(u.getTime()))return l;const d=new Date(u);d.setUTCDate(d.getUTCDate()+6);const f=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return f.format(u)+" – "+f.format(d)+", "+d.getUTCFullYear()}function L0(){const l=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date).filter(d=>d.type!=="literal").map(d=>[d.type,d.value])),u=new Date(l.year+"-"+l.month+"-"+l.day+"T12:00:00Z");return u.setUTCDate(u.getUTCDate()-(u.getUTCDay()+6)%7),u.toISOString().slice(0,10)}function A0(){var Q;const[l,u]=ye.useState(null),[d,f]=ye.useState("loading"),[g,v]=ye.useState(""),[k,_]=ye.useState("overview"),[w,C]=ye.useState(null),[N,O]=ye.useState(null),[L,Y]=ye.useState(null),[U,B]=ye.useState(L0),[J,I]=ye.useState("last"),[z,q]=ye.useState(null),[W,G]=ye.useState(null),[X,se]=ye.useState("");ye.useEffect(()=>{let T=!0;return fetch("/playground/integration/data/computer-science-1/course.json",{cache:"no-store"}).then(P=>{if(!P.ok)throw Error("catalog");return P.json()}).then(P=>{T&&Y(rl(P))}).catch(()=>{T&&Y(null)}),()=>{T=!1}},[]),ye.useEffect(()=>{let T=!0;return import(N0).then(P=>P.teacherReadOnlyClient()).then(P=>{var H;T&&(u(P),f(P.status),P.status==="ready"&&v(((H=P.classes[0])==null?void 0:H.id)||""))}).catch(()=>{T&&f("unavailable")}),()=>{T=!1}},[]),ye.useEffect(()=>{if(!g||(l==null?void 0:l.status)!=="ready")return;let T=!0;return C(null),O(null),q(null),G(null),se(""),Promise.all([l.rpc("playground_teacher_snapshot",{p_class:g}),l.rpc("playground_teacher_weekly_points",{p_class:g})]).then(([P,H])=>{T&&(C(P),O(H))}).catch(()=>{T&&se("Could not load this section. No records were changed.")}),()=>{T=!1}},[g,l]),ye.useEffect(()=>{if(!z||!g||!l)return;let T=!0;return G(null),l.rpc("playground_teacher_student_history",{p_class:g,p_student:z}).then(P=>{T&&G(P)}).catch(()=>{T&&G({error:"Student history unavailable"})}),()=>{T=!1}},[z,g,l]);const ve=cg(l),De=(Q=l==null?void 0:l.classes)==null?void 0:Q.find(T=>T.id===g),be=((w==null?void 0:w.roster)||[]).filter(T=>T.status==="approved"),ne=((w==null?void 0:w.roster)||[]).filter(T=>T.status==="pending"),Le=[...new Set([U,...((N==null?void 0:N.weeks)||[]).map(T=>T.week_start)])].sort().reverse(),ue=new Map(((N==null?void 0:N.weeks)||[]).filter(T=>T.week_start===U).map(T=>[T.user_id,T])),xe=new Map(((w==null?void 0:w.checks)||[]).map(T=>[T.user_id,T])),A=be.map(T=>{var P;return{id:T.user_id,...ug(ve,T),sections:[g],status:"Not connected",current:"—",weekly:Object.fromEntries(((N==null?void 0:N.weeks)||[]).filter(H=>H.user_id===T.user_id).map(H=>[H.week_start,Number(H.points)||0])),weeklyAssignments:Object.fromEntries(((N==null?void 0:N.weeks)||[]).filter(H=>H.user_id===T.user_id).map(H=>[H.week_start,Number(H.assignments)||0])),assignments:z===T.user_id&&W&&!W.error?R0(W,L):[],practiceCount:Number((P=xe.get(T.user_id))==null?void 0:P.checks)||0,handinCount:z===T.user_id&&W&&!W.error?(W.submissions||[]).length:null}}).sort((T,P)=>sg(T,P,J)),ee=De?{id:De.id,name:De.name,course:De.course_id,join_code:De.join_code}:null;return c.jsxs("div",{className:"main-content teacher-screen",children:[c.jsx(vh,{eyebrow:"Your classroom · Connected integration",actions:c.jsx(fi,{children:"Authorized teacher · Read only"}),children:"Teacher Dashboard"}),c.jsx("p",{className:"page-subtitle",children:"The original React dashboard layout, connected to your existing authorized class data. No student records can be changed here."}),d==="loading"?c.jsx("p",{role:"status",children:"Checking your teacher session…"}):d==="signed-out"?c.jsxs("p",{children:["Sign in through the ",c.jsx("a",{href:"/playground/",children:"current Playground"}),", then return here."]}):d==="forbidden"?c.jsx("p",{role:"alert",children:"This account does not have teacher access."}):d!=="ready"?c.jsx("p",{role:"alert",children:"Teacher data is unavailable."}):c.jsxs(c.Fragment,{children:[c.jsx(f0,{sectionId:g,sections:l.classes.map(T=>({id:T.id,name:T.name,course:T.course_id,join_code:T.join_code})),onSectionChange:T=>{v(T),q(null)},readOnlyMode:!0}),c.jsx(g0,{tab:k,onChange:T=>{_(T),q(null)}}),X||ve.error?c.jsx("p",{role:"alert",children:X||ve.error}):!w||!N||ve.loading?c.jsx("p",{role:"status",children:"Loading section information and verified names…"}):c.jsxs(c.Fragment,{children:[k==="overview"&&c.jsxs(c.Fragment,{children:[c.jsx(am,{section:ee}),c.jsxs("div",{className:"stat-grid",children:[c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:be.length}),c.jsx("span",{children:"Enrolled students"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:ne.length}),c.jsx("span",{children:"Pending enrollment requests"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:be.reduce((T,P)=>{var H;return T+(Number((H=ue.get(P.user_id))==null?void 0:H.points)||0)},0)}),c.jsx("span",{children:"Verified weekly points"})]})]}),c.jsx(y0,{students:A,week:U,setWeek:B,readOnlyMode:!0,availableWeeks:Le.map(T=>({key:T,label:P0(T)}))}),c.jsx(w0,{students:A,week:U,sort:J,setSort:I,expanded:z,setExpanded:q,readOnlyMode:!0,historyLoading:!!(z&&!W)})]}),k==="curriculum"&&c.jsxs(c.Fragment,{children:[c.jsx(am,{section:ee}),(ee==null?void 0:ee.course)==="computer-science-1"?c.jsx(C0,{section:ee,students:A,assignments:[],readOnlyMode:!0}):c.jsxs("section",{className:"panel",children:[c.jsxs("h2",{children:[c.jsx(ro,{size:18})," Curriculum"]}),c.jsx("p",{children:"Course-specific assignments will be connected after authorization and content verification."})]})]}),k==="journals"&&c.jsxs("section",{className:"panel",children:[c.jsx("div",{className:"section-heading",children:c.jsxs("h2",{children:[c.jsx(hh,{size:18})," Weekly Journal Submissions"]})}),c.jsx("p",{children:"Journal access will be connected to authorized section records. No fictional student submissions are shown."})]})]})]})]})}function R0(l,u){const d=new Map;for(const f of l.practice||[]){const g=f.activity_id;if(!g)continue;const v=d.get(g)||{id:g,name:Vp(g,u||Sr("computer-science-1")),type:f.activity_kind||"Lesson",status:"Started",score:null,possible:null,submitted:"—"};f.status==="completed"?v.status="Practice completed":f.status==="needs_revision"&&v.status==="Started"&&(v.status="Needs revision"),v.submitted=f.updated_at||v.submitted,d.set(g,v)}for(const f of l.submissions||[]){const g=f.activity_id;if(!g)continue;const v=d.get(g)||{id:g,name:Vp(g,u||Sr("computer-science-1")),type:f.activity_kind||"Lesson",status:"Submitted",score:null,possible:null,submitted:"—"};f.grade_status==="graded"&&Number.isFinite(Number(f.points))&&Number.isFinite(Number(f.possible))?((v.score===null||Number(f.points)>v.score)&&(v.score=Number(f.points),v.possible=Number(f.possible)),v.status="Completed"):v.score===null&&(v.status="Submitted"),(!v.submitted||v.submitted==="—"||Date.parse(f.submitted_at)>Date.parse(v.submitted))&&(v.submitted=f.submitted_at),d.set(g,v)}for(const f of l.checks||[]){const g=f.activity_id;g&&(d.has(g)||d.set(g,{id:g,name:Vp(g,u||Sr("computer-science-1")),type:"Practice",status:"Started",score:null,possible:null,submitted:f.last_check||"—"}))}return[...d.values()].sort((f,g)=>Date.parse(g.submitted||0)-Date.parse(f.submitted||0)).map(f=>({...f,week:E0(f.submitted),submitted:f.submitted==="—"?"—":new Date(f.submitted).toLocaleDateString("en-US")}))}const dg=l=>{const u=String(l||"").trim(),d=u.match(/^https?:\/\/(?:www\.)?github\.com\/([^/?#\s]+)\/?$/i);return(d?d[1]:u).replace(/^@/,"").trim().toLowerCase()},Rh=l=>{const u=String(l??"").trim();return/^\d{1,2}$/.test(u)?String(Number(u)):null};function I0(l){const u=String(l??"").match(/\bperiod\s*#?\s*(\d{1,2})\b/i);return u?Rh(u[1]):null}function pg(l=[]){return(Array.isArray(l)?l:[]).filter(u=>u.status==="approved"||u.status==="pending")}function O0(l=[],u=[]){const d=[...(Array.isArray(l)?l:[]).map(Rh),...pg(u).map(f=>I0(f.name))];return[...new Set(d.filter(Boolean))].sort((f,g)=>Number(f)-Number(g))}function D0(l=[]){return[...new Set((l||[]).flatMap(u=>Array.isArray(u.periods)?u.periods.map(Rh):[]).filter(Boolean))].sort((u,d)=>Number(u)-Number(d))}function M0(l=[]){const u=new Map,d=new Set;for(const f of Array.isArray(l)?l:[]){const g=dg(f==null?void 0:f.github);g&&(u.has(g)?(d.add(g),u.delete(g)):d.has(g)||u.set(g,f))}return{byGithub:u,duplicates:d}}function z0({children:l}){return c.jsx("div",{className:"empty",children:l})}function F0({student:l,isEditing:u,onToggleEdit:d,onDone:f,onPatch:g,readOnlyMode:v=!1}){const k=nl(l);return c.jsxs("article",{className:"account-card",children:[c.jsxs("div",{className:"account-row",children:[c.jsx("span",{className:"avatar",children:k.slice(0,1).toUpperCase()}),c.jsxs("div",{className:"account-identity",children:[c.jsx("h3",{children:k}),c.jsxs("small",{children:["@",l.github]})]}),!v&&c.jsx("button",{className:"icon-button","aria-label":`Edit ${k}`,onClick:d,children:u?c.jsx(Ud,{size:17}):c.jsx(yh,{size:17})})]}),c.jsxs("div",{className:"account-footer",children:[c.jsx(fi,{tone:l.teacherName||l.sheetName?"success":"",children:l.teacherName?"Teacher name":l.sheetName?"Sheet matched":l.studentName?"Signup name":"GitHub fallback"}),(v?l.periods||[]:l.sections.map(_=>ig(_)).filter(Boolean)).map(_=>c.jsxs(fi,{children:["Period ",_]},_)),v&&l.kind==="client"&&c.jsx(fi,{children:"Private client"})]}),u&&c.jsxs("div",{className:"account-edit",children:[c.jsxs("label",{children:["Google Sheet name",c.jsx("input",{value:l.sheetName||"",onChange:_=>g({sheetName:_.target.value||null})})]}),c.jsxs("label",{children:["Student-provided backup",c.jsx("input",{value:l.studentName||"",onChange:_=>g({studentName:_.target.value})})]}),c.jsx("button",{className:"btn",onClick:f,children:"Done"})]})]})}function W0({students:l,sort:u,setSort:d,patchStudent:f,readOnlyMode:g=!1,onRefresh:v,sheetDuplicateCount:k=0}){const[_,w]=Kn("designlab:period-filter","all"),[C,N]=Kn("designlab:account-filter","all"),[O,L]=ye.useState(""),[Y,U]=ye.useState(null),B=ye.useMemo(()=>g?D0(l):d0,[l,g]),J=ye.useMemo(()=>{const I=O.trim().toLowerCase();return l.filter(z=>{const q=z.memberships||[],W=q.length>0;return C==="enrolled"&&(z.kind!=="student"||!W)||C==="unassigned"&&(z.kind!=="student"||W)||C==="client"&&z.kind!=="client"||C==="without-sheet"&&z.sheetMatched||_!=="all"&&(g?!(z.periods||[]).includes(_):!z.sections.some(G=>ig(G)===_))?!1:I?[nl(z),z.github,z.studentName,z.sheetName,...z.periods||[],...q.map(G=>G.name),...q.map(G=>G.course_id)].some(G=>String(G||"").toLowerCase().includes(I)):!0}).sort((z,q)=>sg(z,q,u))},[l,_,C,u,O,g]);return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Accounts"}),c.jsx("p",{children:"Teacher name, then connected Sheet, signup name, and GitHub fallback."})]}),c.jsxs(fi,{children:[J.length," accounts"]})]}),c.jsxs("div",{className:"filters",children:[c.jsxs("label",{children:[c.jsx(_m,{size:16})," ",c.jsx("input",{"aria-label":"Search accounts",value:O,placeholder:"Search name or GitHub username",onChange:I=>L(I.target.value)})]}),c.jsxs("label",{children:["Show",c.jsxs("select",{value:C,onChange:I=>N(I.target.value),children:[c.jsx("option",{value:"all",children:"All accounts"}),c.jsx("option",{value:"enrolled",children:"Enrolled students"}),c.jsx("option",{value:"unassigned",children:"Unassigned students"}),c.jsx("option",{value:"client",children:"Private clients"}),c.jsx("option",{value:"without-sheet",children:"No Sheet match"})]})]}),c.jsxs("label",{children:["Class period",c.jsxs("select",{value:B.includes(_)?_:"all",onChange:I=>w(I.target.value),children:[c.jsx("option",{value:"all",children:"All periods"}),B.map(I=>c.jsx("option",{children:I},I))]})]}),c.jsx(ag,{label:"Sort",value:u,onChange:d}),g&&c.jsx("button",{type:"button",className:"btn secondary",onClick:v,children:"Refresh accounts"})]}),c.jsx("p",{className:"info-text",children:g?"Authorized account directory · read-only. Sheet names and periods can be refreshed here; account and section edits remain disabled."+(k?" "+k+" duplicate Sheet GitHub "+(k===1?"username was":"usernames were")+" skipped.":""):"Sample account edits are saved only in browser storage."}),c.jsx("div",{className:"account-grid",children:J.map(I=>c.jsx(F0,{student:I,isEditing:Y===I.id,onToggleEdit:()=>U(Y===I.id?null:I.id),onDone:()=>U(null),onPatch:z=>f==null?void 0:f(I.id,z),readOnlyMode:g},I.id))}),!J.length&&c.jsx(z0,{children:"No accounts match those filters."})]})}const H0="https://www.googleapis.com/auth/spreadsheets.readonly",Jp="playground:google-sheets-client-id",nc="playground:teacher-google-sheet-url";function Ih(l){let u;try{u=new URL(String(l||"").trim())}catch{throw Error("Paste a full Google Sheets link.")}if(u.protocol!=="https:"||u.hostname!=="docs.google.com")throw Error("Use a Google Sheets URL from docs.google.com.");const d=u.pathname.match(/^\/spreadsheets\/d\/([a-zA-Z0-9_-]+)(?:\/|$)/);if(!d)throw Error("This URL does not contain a spreadsheet ID.");const f=new URLSearchParams(u.hash.replace(/^#/,"")),g=u.searchParams.get("gid")||f.get("gid");if(g!==null&&!/^\d+$/.test(g))throw Error("Invalid sheet tab (gid).");return{id:d[1],gid:g===null?null:Number(g)}}const lm=l=>String(l||"").replace(/\s+/g," ").trim().toLowerCase();function hg(l){const d=["class period","first name","last name","github username"].map(g=>l.findIndex(v=>lm(v)===g));if(d.some(g=>g<0))throw Error("The Sheet must have Class Period, First Name, Last Name and GitHub Username headers.");const f=l.findIndex(g=>/^class period 2(?:\b|\s|\()/i.test(lm(g)));return[...d,...f>=0?[f]:[]]}const B0=l=>String(l||"").trim().replace(/^@/,"").replace(/^https?:\/\/(?:www\.)?github\.com\//i,"").replace(/\/$/,"").toLowerCase();function U0(l,u){hg(l);const[d,f,g,v,k]=u,_=Math.max(...u.map(C=>(C==null?void 0:C.length)||0),0),w=[];for(let C=0;C<_;C++){const N=B0(v==null?void 0:v[C]);if(!N)continue;const O=String((f==null?void 0:f[C])||"").trim(),L=String((g==null?void 0:g[C])||"").trim(),Y=String((d==null?void 0:d[C])||"").trim(),U=String((k==null?void 0:k[C])||"").trim();w.push({github:N,period:Y,periods:[...new Set([Y,U].filter(Boolean))],firstName:O,lastName:L,name:[O,L].filter(Boolean).join(" "),row:C+2})}return w}function um(l){let u=l+1,d="";for(;u;)u--,d=String.fromCharCode(65+u%26)+d,u=Math.floor(u/26);return d}async function Xp(l,u){const d=await fetch(l,{headers:{Authorization:"Bearer "+u},cache:"no-store"});if(!d.ok)throw d.status===401?Error("Google session expired. Connect Google again."):d.status===403?Error("Google denied access. Check Sheet access and the Sheets API."):d.status===404?Error("Google could not find this spreadsheet or tab."):Error("Google Sheets request failed ("+d.status+").");return d.json()}async function q0(l,u){var B;const d=Ih(l),f="https://sheets.googleapis.com/v4/spreadsheets/"+encodeURIComponent(d.id),g=await Xp(f+"?fields=sheets(properties(sheetId,title))",u),v=g.sheets||[],k=d.gid===null?v[0]:v.find(J=>J.properties.sheetId===d.gid);if(!k)throw Error("The selected sheet tab was not found.");const _=k.properties.title,w="'"+_.replace(/'/g,"''")+"'",C=await Xp(f+"/values/"+encodeURIComponent(w+"!1:1"),u),N=((B=C.values)==null?void 0:B[0])||[],O=hg(N),L=new URLSearchParams({majorDimension:"COLUMNS"});for(const J of O)L.append("ranges",w+"!"+um(J)+"2:"+um(J));const Y=await Xp(f+"/values:batchGet?"+L.toString(),u),U=(Y.valueRanges||[]).map(J=>{var I;return((I=J.values)==null?void 0:I[0])||[]});return{rows:U0(N,U),title:_}}let rc;function $0(){var l,u;return(u=(l=globalThis.google)==null?void 0:l.accounts)!=null&&u.oauth2?Promise.resolve():rc||(rc=new Promise((d,f)=>{const g=document.createElement("script");g.src="https://accounts.google.com/gsi/client",g.async=!0,g.onload=()=>{var v,k;return(k=(v=globalThis.google)==null?void 0:v.accounts)!=null&&k.oauth2?d():f(Error("Google sign-in did not load."))},g.onerror=()=>f(Error("Google sign-in is blocked or unavailable on this network.")),document.head.append(g)}).catch(d=>{throw rc=null,d}),rc)}async function K0(l,u){if(Ih(l),!/^\d+-[a-z0-9_-]+\.apps\.googleusercontent\.com$/i.test(String(u||"").trim()))throw Error("Enter a valid Google Cloud Web OAuth client ID.");return await $0(),new Promise((d,f)=>{globalThis.google.accounts.oauth2.initTokenClient({client_id:u.trim(),scope:H0,callback:async v=>{if(v.error||!v.access_token){f(Error("Google authorization was not completed."));return}try{d(await q0(l,v.access_token))}catch(k){f(k)}},error_callback:()=>f(Error("Google authorization popup was closed or blocked."))}).requestAccessToken({prompt:""})})}const wd=l=>{try{return localStorage.getItem(l)||""}catch{return""}},kd=(l,u)=>{try{return u?localStorage.setItem(l,u):localStorage.removeItem(l),!0}catch{return!1}};function G0({onRows:l=()=>{}}){const[u,d]=ye.useState(()=>wd(nc)),[f,g]=ye.useState(()=>wd(Jp)),[v,k]=ye.useState(u?"Saved Sheet link restored from this browser. Reconnect Google to refresh names and periods.":""),[_,w]=ye.useState(!1);async function C(){try{Ih(u)}catch(O){k(O.message);return}kd(nc,u.trim()),kd(Jp,f.trim()),w(!0),k("Opening Google authorization…");try{const O=await K0(u,f);l(O.rows||[]),k("Sheet loaded: "+O.title+" · "+(O.rows||[]).length+" rows with GitHub usernames. Read-only integration: nothing was synchronized to the database.")}catch(O){k(O.message||"Could not load the Google Sheet.")}finally{w(!1)}}function N(){kd(nc,""),d(""),l([]),k("Saved Sheet link cleared from this browser. Google permissions remain managed in your Google account.")}return c.jsxs("details",{className:"panel admin-sheet-panel",children:[c.jsx("summary",{children:"Google Sheet roster (optional)"}),c.jsx("p",{children:"Use the same private roster connection as the live dashboard. This integration reads names, GitHub usernames, and up to two class periods in your browser only; it does not synchronize or change account records."}),c.jsxs("label",{children:["Google Sheet link",c.jsx("input",{type:"url",value:u,onChange:O=>d(O.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",autoComplete:"off"})]}),c.jsxs("div",{className:"admin-sheet-actions",children:[c.jsx("button",{type:"button",className:"btn",disabled:_,onClick:C,children:_?"Connecting…":u===wd(nc)&&u?"Reconnect Google & load saved sheet":"Connect Google & load sheet"}),wd(nc)&&c.jsx("button",{type:"button",className:"btn secondary",disabled:_,onClick:N,children:"Forget saved link"})]}),c.jsxs("details",{children:[c.jsx("summary",{children:"One-time Google authorization setup"}),c.jsx("p",{children:"Use the same Google Cloud Web OAuth client configured for the live Playground. The client ID is public configuration, not a secret."}),c.jsxs("label",{children:["Google OAuth client ID",c.jsx("input",{type:"text",value:f,onChange:O=>g(O.target.value),placeholder:"12345-abc.apps.googleusercontent.com",autoComplete:"off"})]}),c.jsx("button",{type:"button",className:"btn secondary",onClick:()=>{kd(Jp,f.trim()),k("Google OAuth client ID saved on this browser.")},children:"Save browser configuration"})]}),v&&c.jsx("p",{className:"info-text",role:"status",children:v})]})}const Y0="/playground/integration/teacher-bridge.js";function V0(){const[l,u]=ye.useState(null),[d,f]=ye.useState("loading"),[g,v]=ye.useState("last"),[k,_]=ye.useState([]),[w,C]=ye.useState(0);ye.useEffect(()=>{let Y=!0;return import(Y0).then(U=>U.teacherReadOnlyClient()).then(U=>{Y&&(u(U),f(U.status))}).catch(()=>{Y&&f("unavailable")}),()=>{Y=!1}},[]);const N=cg(l,w),O=M0(k),L=N.directory.map(Y=>{var q;const U=pg(Y.memberships||[]),B=(q=N.sheet)==null?void 0:q.get(Y.user_id),I=O.byGithub.get(dg(Y.github_account))||B,z=ug(N,Y);return{id:Y.user_id,...z,sheetName:(I==null?void 0:I.name)||z.sheetName||"",sections:U.map(W=>W.class_id),memberships:U,periods:O0((I==null?void 0:I.periods)||[],U),sheetMatched:!!I,kind:Y.kind||"student"}});return c.jsxs("div",{className:"main-content teacher-screen admin-screen",children:[c.jsx(vh,{eyebrow:"Global management · Connected integration",actions:c.jsx(fi,{children:"Teacher/Admin · Read only"}),children:"Admin Dashboard"}),c.jsx("p",{className:"page-subtitle",children:"Connected account management for the current sole teacher/admin account. This integration remains read only; no account records can be changed here."}),d==="loading"?c.jsx("p",{role:"status",children:"Checking access…"}):d!=="ready"?c.jsx("p",{role:"alert",children:d==="signed-out"?"Sign in through the current Playground first.":"Account directory is unavailable or access was denied."}):N.loading?c.jsx("p",{role:"status",children:"Loading account directory…"}):N.error?c.jsx("p",{role:"alert",children:N.error}):c.jsxs(c.Fragment,{children:[c.jsx(G0,{onRows:_}),c.jsx(W0,{students:L,sort:g,setSort:v,readOnlyMode:!0,onRefresh:()=>C(Y=>Y+1),sheetDuplicateCount:O.duplicates.size})]})]})}const J0={essay:"Think about a time you solved a difficult problem. Explain what you tried first, how you changed your approach, and what you learned. Use specific evidence.","logic-puzzle":"A robot follows this pattern: 2, 6, 12, 20, 30, __. Find the next number. Explain the pattern and show why your answer fits."},cm={response:"",type:"essay",aiUse:"",aiDetails:""};function X0({submissions:l,setSubmissions:u}){var be;const[d,f]=Kn("designlab:journal-section",Zo[0].id),g=Zo.find(ne=>ne.id===d)||Zo[0],v=Zp.filter(ne=>ne.sections.includes(g.id)),[k,_]=Kn("designlab:journal-student",Zp[0].id),w=v.find(ne=>ne.id===k)||v[0],C=ye.useMemo(()=>Gg(),[]),[N,O]=Kn("designlab:journal-week",C[0]),L=C.includes(N)?N:C[0],[Y,U]=Kn("designlab:journal-drafts",{}),[B,J]=ye.useState(""),[I,z]=ye.useState(!1),q=Yg(g.id,w.id,L),W=Y[q]||cm,G=l.filter(ne=>ne.studentId===w.id&&ne.sectionId===g.id&&ne.week===L),X=G.at(-1),se=W.response.trim()?W.response.trim().split(/\s+/).length:0;function ve(ne,Le){U(ue=>({...ue,[q]:{...ue[q]||cm,[ne]:Le}})),J("Draft saved in this browser.")}function De(ne){ne.preventDefault();const Le=Vg(W);if(Le){J(Le);return}const ue={id:`demo-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,sectionId:g.id,studentId:w.id,studentName:`${w.first} ${w.last}`,courseId:g.course,week:L,response:W.response.trim(),type:W.type,aiUse:W.aiUse,aiDetails:W.aiDetails.trim(),submittedAt:new Date().toISOString()};u(xe=>[...xe,ue]),J("Demo submission saved locally. Check the Teacher Dashboard → Journals tab to review it.")}return c.jsxs("div",{className:"main-content journal-screen",children:[c.jsx("div",{className:"eyebrow",children:"Your classes · Written work"}),c.jsxs("header",{className:"journal-heading",children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Weekly Journals"}),c.jsx("p",{children:"Essay responses, reflections, and logic puzzles—all in one place."})]}),c.jsxs("span",{className:"chip",children:[c.jsx(Cm,{size:14})," Local demo only"]})]}),c.jsxs("section",{className:"journal-card journal-selection","aria-label":"Select a journal",children:[c.jsxs("label",{children:["Class section",c.jsx("select",{value:g.id,onChange:ne=>{f(ne.target.value),J("")},children:Zo.map(ne=>{var Le;return c.jsxs("option",{value:ne.id,children:[ne.name," · ",(Le=Sr(ne.course))==null?void 0:Le.label]},ne.id)})})]}),c.jsxs("label",{children:["Preview as student",c.jsx("select",{value:w.id,onChange:ne=>{_(ne.target.value),J("")},children:v.map(ne=>c.jsxs("option",{value:ne.id,children:[ne.first," ",ne.last," (sample)"]},ne.id))})]}),c.jsxs("label",{children:["Journal week",c.jsx("select",{value:L,onChange:ne=>{O(ne.target.value),J("")},children:C.map(ne=>c.jsxs("option",{value:ne,children:["Week of ",sc(ne)]},ne))})]})]}),c.jsxs("section",{className:"journal-card journal-editor-card",children:[c.jsxs("div",{className:"journal-section-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"eyebrow",children:[(be=Sr(g.course))==null?void 0:be.label," · ",g.name]}),c.jsxs("h2",{children:["Journal · Week of ",sc(L)]})]}),c.jsx("span",{className:`journal-status-pill ${X?"submitted":""}`,children:X?"Submitted":"Not submitted"})]}),c.jsx("p",{className:"journal-instructions",children:"This is a fictional prompt for design testing. In production, your teacher would publish the weekly assignment."}),c.jsxs("form",{onSubmit:De,children:[c.jsxs("label",{children:["Response type",c.jsxs("select",{value:W.type,onChange:ne=>ve("type",ne.target.value),children:[c.jsx("option",{value:"essay",children:"Essay or written reflection"}),c.jsx("option",{value:"logic-puzzle",children:"Logic puzzle or reasoning task"})]})]}),c.jsxs("div",{className:"journal-prompt",children:[c.jsx("strong",{children:"Sample prompt"}),c.jsx("p",{children:J0[W.type]})]}),c.jsx("label",{htmlFor:"journal-answer",children:"Your response"}),c.jsx("textarea",{id:"journal-answer",rows:"13",maxLength:"100000",spellCheck:!0,placeholder:"Write your explanation here. Show steps and reasoning for logic puzzles.",value:W.response,onChange:ne=>ve("response",ne.target.value)}),c.jsxs("div",{className:"journal-writing-meta",children:[c.jsxs("span",{children:[se," words"]}),c.jsxs("span",{children:[c.jsx(Pd,{size:13})," Autosaved in this browser"]})]}),c.jsxs("div",{className:"journal-integrity",children:[c.jsxs("label",{children:["AI-use declaration",c.jsxs("select",{value:W.aiUse,onChange:ne=>ve("aiUse",ne.target.value),children:[c.jsx("option",{value:"",children:"Choose one"}),c.jsx("option",{value:"none",children:"I did not use AI-generated content"}),c.jsx("option",{value:"disclosed",children:"I used AI and will explain how"})]})]}),c.jsx("p",{className:"hint",children:"This is a declaration for review, not an automatic grade. Follow your teacher's classroom AI policy."}),W.aiUse==="disclosed"&&c.jsxs("label",{children:["Describe the AI assistance",c.jsx("textarea",{rows:"3",value:W.aiDetails,onChange:ne=>ve("aiDetails",ne.target.value),placeholder:"Identify which parts involved AI assistance."})]})]}),c.jsxs("div",{className:"journal-actions",children:[c.jsxs("button",{type:"button",className:"btn",onClick:()=>{J("Draft saved in this browser.")},children:[c.jsx(Pd,{size:15})," Save draft"]}),c.jsxs("button",{type:"submit",className:"btn submit",children:[c.jsx(gh,{size:15})," Demo submit"]})]}),c.jsx("p",{role:"status",className:"journal-submit-status",children:B})]}),c.jsxs("div",{className:"journal-bottom-row",children:[c.jsx("p",{className:"hint",children:"No real submissions are sent. Each demo submission records a separate copy; drafts remain editable."}),c.jsxs("button",{type:"button",className:"btn",onClick:()=>z(ne=>!ne),children:[c.jsx(rv,{size:15})," ",I?"Hide history":`Submission history (${G.length})`]})]}),I&&c.jsx("div",{className:"journal-history",children:G.length?G.map(ne=>c.jsxs("details",{className:"journal-history-item",children:[c.jsxs("summary",{children:[c.jsx(lc,{size:16})," Submitted ",new Date(ne.submittedAt).toLocaleString()," · ",ne.type]}),c.jsx("div",{className:"journal-history-answer",children:ne.response})]},ne.id)):c.jsx("p",{className:"muted",children:"No submissions yet for this week."})})]})]})}const Q0=`# Attendance Percentage

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
`,Z0=`# Competition Leaderboard Ranks

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
`,ew=`# Confidence Pool Total

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
`,tw=`# Count Matching Events

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
`,nw=`# Longest Winning Streak

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
`,rw=`# Format a Score Line

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
`,iw=`# Second Largest Distinct Value

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
`,sw=`# Sum Positive Values

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
`,aw=`# Count Pairs With Target Sum

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
`,ow=`# Temperature Alert

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
`,lw=`using System;

public static class Solution {
    public static int AttendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,uw=`public class Solution {
    public static int attendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,cw=`export function attendancePercent(present, total) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,dw=`def attendance_percent(present: int, total: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,pw=`using System;

public static class Solution {
    public static int[] CompetitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,hw=`public class Solution {
    public static int[] competitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,fw=`export function competitionRanks(scores) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,mw=`def competition_ranks(scores: list[int]) -> list[int]:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,gw=`using System;

public static class Solution {
    public static int ConfidenceTotal(bool[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,yw=`public class Solution {
    public static int confidenceTotal(boolean[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,vw=`export function confidenceTotal(correct, weights) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,xw=`def confidence_total(correct: list[bool], weights: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,bw=`using System;

public static class Solution {
    public static int CountMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,ww=`public class Solution {
    public static int countMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,kw=`export function countMatches(events, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Sw=`def count_matches(events: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,_w=`using System;

public static class Solution {
    public static int LongestWinStreak(bool[] wins) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Cw=`public class Solution {
    public static int longestWinStreak(boolean[] wins) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Tw=`export function longestWinStreak(wins) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,jw=`def longest_win_streak(wins: list[bool]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Nw=`using System;

public static class Solution {
    public static string ScoreLine(string name, int points) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Ew=`public class Solution {
    public static String scoreLine(String name, int points) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Pw=`export function scoreLine(name, points) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Lw=`def score_line(name: str, points: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Aw=`using System;

public static class Solution {
    public static int? SecondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Rw=`public class Solution {
    public static Integer secondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Iw=`export function secondLargestDistinct(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Ow=`def second_largest_distinct(numbers: list[int]) -> int | None:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Dw=`using System;

public static class Solution {
    public static int SumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Mw=`public class Solution {
    public static int sumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,zw=`export function sumPositives(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Fw=`def sum_positives(numbers: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Ww=`using System;

public static class Solution {
    public static int TargetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Hw=`public class Solution {
    public static int targetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Bw=`export function targetPairs(numbers, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Uw=`def target_pairs(numbers: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,qw=`using System;

public static class Solution {
    public static string TemperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,$w=`public class Solution {
    public static String temperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Kw=`export function temperatureAlert(degrees) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Gw=`def temperature_alert(degrees: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Yw="attendance-percent",Vw=[{input:[18,20],expected:90},{input:[2,3],expected:66},{input:[0,30],expected:0},{input:[7,7],expected:100}],Jw={challengeId:Yw,cases:Vw},Xw="competition-ranks",Qw=[{input:[[50,50,40,20,40]],expected:[1,1,3,5,3]},{input:[[7,12,9]],expected:[3,1,2]},{input:[[5,5,5]],expected:[1,1,1]},{input:[[]],expected:[]}],Zw={challengeId:Xw,cases:Qw},ek="confidence-total",tk=[{input:[[!0,!1,!0],[20,18,15]],expected:35},{input:[[!1,!1],[5,8]],expected:0},{input:[[],[]],expected:0}],nk={challengeId:ek,cases:tk},rk="count-matches",ik=[{input:[[2,1,2,3,2],2],expected:3},{input:[[],7],expected:0},{input:[[3,4],5],expected:0}],sk={challengeId:rk,cases:ik},ak="longest-win-streak",ok=[{input:[[!0,!0,!1,!0,!0,!0]],expected:3},{input:[[!1,!1]],expected:0},{input:[[]],expected:0},{input:[[!0,!0]],expected:2}],lk={challengeId:ak,cases:ok},uk="score-line",ck=[{input:["Avery",18],expected:"Avery: 18 points"},{input:["Jordan Lee",0],expected:"Jordan Lee: 0 points"},{input:["Mia",-2],expected:"Mia: -2 points"}],dk={challengeId:uk,cases:ck},pk="second-largest-distinct",hk=[{input:[[3,1,3,2]],expected:2},{input:[[5,5]],expected:null},{input:[[-10,-7,-7,-2]],expected:-7},{input:[[1]],expected:null}],fk={challengeId:pk,cases:hk},mk="sum-positives",gk=[{input:[[-3,6,0,2,-1]],expected:8},{input:[[-5,0,-1]],expected:0},{input:[[]],expected:0}],yk={challengeId:mk,cases:gk},vk="target-pairs",xk=[{input:[[1,3,2,2,4],4],expected:2},{input:[[2,2,2],4],expected:3},{input:[[1,2,3],9],expected:0},{input:[[],1],expected:0}],bk={challengeId:vk,cases:xk},wk="temperature-alert",kk=[{input:[32],expected:"Freeze"},{input:[90],expected:"Heat"},{input:[72],expected:"Normal"},{input:[-5],expected:"Freeze"}],Sk={challengeId:wk,cases:kk},_k=["python","java","javascript","csharp"],Ck=[{id:"temperature-alert",title:"Temperature Alert",summary:"Choose a status label based on a temperature reading.",difficulty:"Very Easy",points:5,tags:["conditionals","comparisons","functions"],prerequisites:["functions","conditionals"],suggestedCourses:["computer-science-1","game-programming","uil"],languages:["python","java","javascript","csharp"],path:"problems/temperature-alert"},{id:"count-matches",title:"Count Matching Events",summary:"Count how often a particular event code appears.",difficulty:"Easy",points:10,tags:["arrays","loops","comparisons"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/count-matches"},{id:"sum-positives",title:"Sum Positive Values",summary:"Add only the positive values in a data set.",difficulty:"Easy",points:10,tags:["arrays","loops","accumulators"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/sum-positives"},{id:"score-line",title:"Format a Score Line",summary:"Format a player score as a clear single line of text.",difficulty:"Easy",points:10,tags:["strings","formatting","functions"],prerequisites:["variables","strings","functions"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/score-line"},{id:"attendance-percent",title:"Attendance Percentage",summary:"Convert an attendance fraction into a whole-number percentage.",difficulty:"Easy",points:10,tags:["arithmetic","integer-division","functions"],prerequisites:["variables","functions","arithmetic"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/attendance-percent"},{id:"longest-win-streak",title:"Longest Winning Streak",summary:"Find the longest consecutive run of winning results.",difficulty:"Medium",points:15,tags:["arrays","loops","state"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/longest-win-streak"},{id:"confidence-total",title:"Confidence Pool Total",summary:"Compute the points earned from predictions.",difficulty:"Medium",points:15,tags:["arrays","loops","parallel-arrays"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/confidence-total"},{id:"second-largest-distinct",title:"Second Largest Distinct Value",summary:"Return the second-highest unique integer in a collection.",difficulty:"Medium",points:20,tags:["arrays","comparisons","distinct-values"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/second-largest-distinct"},{id:"target-pairs",title:"Count Pairs With Target Sum",summary:"Count pairs of positions that add to a target.",difficulty:"Hard",points:25,tags:["arrays","nested-loops","counting"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/target-pairs"},{id:"competition-ranks",title:"Competition Leaderboard Ranks",summary:"Assign ranks while handling tied scores and skipped positions.",difficulty:"Hard",points:25,tags:["arrays","sorting","ties"],prerequisites:["functions","loops","arrays","sorting"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/competition-ranks"}],fg={languages:_k,challenges:Ck},Tk=Object.assign({"../challenge-bank/problems/attendance-percent/problem.md":Q0,"../challenge-bank/problems/competition-ranks/problem.md":Z0,"../challenge-bank/problems/confidence-total/problem.md":ew,"../challenge-bank/problems/count-matches/problem.md":tw,"../challenge-bank/problems/longest-win-streak/problem.md":nw,"../challenge-bank/problems/score-line/problem.md":rw,"../challenge-bank/problems/second-largest-distinct/problem.md":iw,"../challenge-bank/problems/sum-positives/problem.md":sw,"../challenge-bank/problems/target-pairs/problem.md":aw,"../challenge-bank/problems/temperature-alert/problem.md":ow}),jk=Object.assign({"../challenge-bank/problems/attendance-percent/starters/Solution.cs":lw,"../challenge-bank/problems/attendance-percent/starters/Solution.java":uw,"../challenge-bank/problems/attendance-percent/starters/javascript.js":cw,"../challenge-bank/problems/attendance-percent/starters/python.py":dw,"../challenge-bank/problems/competition-ranks/starters/Solution.cs":pw,"../challenge-bank/problems/competition-ranks/starters/Solution.java":hw,"../challenge-bank/problems/competition-ranks/starters/javascript.js":fw,"../challenge-bank/problems/competition-ranks/starters/python.py":mw,"../challenge-bank/problems/confidence-total/starters/Solution.cs":gw,"../challenge-bank/problems/confidence-total/starters/Solution.java":yw,"../challenge-bank/problems/confidence-total/starters/javascript.js":vw,"../challenge-bank/problems/confidence-total/starters/python.py":xw,"../challenge-bank/problems/count-matches/starters/Solution.cs":bw,"../challenge-bank/problems/count-matches/starters/Solution.java":ww,"../challenge-bank/problems/count-matches/starters/javascript.js":kw,"../challenge-bank/problems/count-matches/starters/python.py":Sw,"../challenge-bank/problems/longest-win-streak/starters/Solution.cs":_w,"../challenge-bank/problems/longest-win-streak/starters/Solution.java":Cw,"../challenge-bank/problems/longest-win-streak/starters/javascript.js":Tw,"../challenge-bank/problems/longest-win-streak/starters/python.py":jw,"../challenge-bank/problems/score-line/starters/Solution.cs":Nw,"../challenge-bank/problems/score-line/starters/Solution.java":Ew,"../challenge-bank/problems/score-line/starters/javascript.js":Pw,"../challenge-bank/problems/score-line/starters/python.py":Lw,"../challenge-bank/problems/second-largest-distinct/starters/Solution.cs":Aw,"../challenge-bank/problems/second-largest-distinct/starters/Solution.java":Rw,"../challenge-bank/problems/second-largest-distinct/starters/javascript.js":Iw,"../challenge-bank/problems/second-largest-distinct/starters/python.py":Ow,"../challenge-bank/problems/sum-positives/starters/Solution.cs":Dw,"../challenge-bank/problems/sum-positives/starters/Solution.java":Mw,"../challenge-bank/problems/sum-positives/starters/javascript.js":zw,"../challenge-bank/problems/sum-positives/starters/python.py":Fw,"../challenge-bank/problems/target-pairs/starters/Solution.cs":Ww,"../challenge-bank/problems/target-pairs/starters/Solution.java":Hw,"../challenge-bank/problems/target-pairs/starters/javascript.js":Bw,"../challenge-bank/problems/target-pairs/starters/python.py":Uw,"../challenge-bank/problems/temperature-alert/starters/Solution.cs":qw,"../challenge-bank/problems/temperature-alert/starters/Solution.java":$w,"../challenge-bank/problems/temperature-alert/starters/javascript.js":Kw,"../challenge-bank/problems/temperature-alert/starters/python.py":Gw}),Nk=Object.assign({"../challenge-bank/problems/attendance-percent/examples.json":Jw,"../challenge-bank/problems/competition-ranks/examples.json":Zw,"../challenge-bank/problems/confidence-total/examples.json":nk,"../challenge-bank/problems/count-matches/examples.json":sk,"../challenge-bank/problems/longest-win-streak/examples.json":lk,"../challenge-bank/problems/score-line/examples.json":dk,"../challenge-bank/problems/second-largest-distinct/examples.json":fk,"../challenge-bank/problems/sum-positives/examples.json":yk,"../challenge-bank/problems/target-pairs/examples.json":bk,"../challenge-bank/problems/temperature-alert/examples.json":Sk}),Kd=fg.challenges,ch=fg.languages,mg={python:"Python",java:"Java",javascript:"JavaScript",csharp:"C#"},Ek={python:"python.py",java:"Solution.java",javascript:"javascript.js",csharp:"Solution.cs"};function gg(l){return Kd.find(u=>u.id===l)||null}function Pk(l){return Tk[`../challenge-bank/problems/${l}/problem.md`]??""}function Lk(l,u){return jk[`../challenge-bank/problems/${l}/starters/${Ek[u]}`]??""}function Ak(l){var u;return((u=Nk[`../challenge-bank/problems/${l}/examples.json`])==null?void 0:u.cases)??[]}const Rk=[...new Set(Kd.flatMap(l=>l.tags))].sort((l,u)=>l.localeCompare(u)),Ik=["Very Easy","Easy","Medium","Hard"];function Ok({query:l="",topic:u="all",difficulty:d="all",course:f="all",language:g="all"}={}){const v=l.trim().toLocaleLowerCase();return Kd.filter(k=>(!v||[k.title,k.summary,...k.tags].join(" ").toLowerCase().includes(v))&&(u==="all"||k.tags.includes(u))&&(d==="all"||k.difficulty===d)&&(f==="all"||k.suggestedCourses.includes(f))&&(g==="all"||k.languages.includes(g))).slice().sort((k,_)=>k.title.localeCompare(_.title))}function Dk(l,u=""){const d=String(u).toLowerCase();if(d==="lesson"||d==="challenge")return d;const f=String(l||"");return f.startsWith("lesson:")?"lesson":f.startsWith("challenge:")?"challenge":null}function Mk({lessons:l=[],challenges:u=[],grades:d=[],completedLessons:f=[],completedChallenges:g=[]}={}){const v={lessons:{available:l.length,completed:0,earned:0,possible:0,graded:0},challenges:{available:u.length,completed:0,earned:0,possible:0,graded:0}},k={lesson:new Set(f),challenge:new Set(g)},_={lesson:new Set(l.map(C=>typeof C=="string"?C:C.id)),challenge:new Set(u.map(C=>typeof C=="string"?C:C.id))},w=new Map;for(const C of d){const N=String(C.activity_id||C.id||""),O=N.match(/^(lesson|challenge):/),L=O?N.slice(O[0].length):N,Y=Dk(N,C.activity_kind||C.kind)||(_.lesson.has(L)&&!_.challenge.has(L)?"lesson":_.challenge.has(L)&&!_.lesson.has(L)?"challenge":null);if(!Y)continue;const U=Y+":"+L,B=Number(C.earned??C.points??0),J=Number(C.possible??0);if(!Number.isFinite(B)||!Number.isFinite(J))continue;const I=w.get(U);(!I||B>I.earned)&&w.set(U,{kind:Y,id:L,earned:B,possible:J})}for(const C of w.values()){const N=v[C.kind==="lesson"?"lessons":"challenges"];N.earned+=C.earned,N.possible+=C.possible,N.graded++,k[C.kind].add(C.id)}return v.lessons.completed=k.lesson.size,v.challenges.completed=k.challenge.size,v}function dm(l,u){var v;const[d,...f]=l.split(":"),g=f.join(":");return d==="lesson"?no(Sr(u),g):((v=gg(g))==null?void 0:v.title)||g}function zk({grades:l=[],assignments:u=[],completedLessons:d=[],readOnlyMode:f=!1,weeklyPoints:g=[],accountStatus:v="disabled"}){const[k,_]=ye.useState("all"),w=k==="all"?l:l.filter(B=>B.courseId===k),C=eh(w),N=Mk({grades:w,completedLessons:k==="all"||k==="computer-science-1"?d:[]}),O=f?k==="all"||k==="computer-science-1"?g:[]:vy(w),L=O[0],Y=rs.filter(B=>!f||B.id==="computer-science-1").map(B=>({...B,...eh(l.filter(J=>J.courseId===B.id))})),U=u.filter(B=>k==="all"||B.courseId===k).map(B=>({...B,status:zd(B.id,{assignments:u,grades:l,completedLessons:d})})).filter(B=>B.status.state==="assigned"||B.status.state==="overdue").sort((B,J)=>B.dueDate.localeCompare(J.dueDate));return c.jsxs("div",{className:"main-content grades-screen",children:[c.jsxs("header",{className:"grades-heading",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Your progress"}),c.jsx("h1",{children:"Grades"}),c.jsx("p",{children:f?"Verified Computer Science I scores and weekly improvements. Assignments are not yet connected here.":"See your earned points, weekly scores, and work still due."})]}),c.jsxs("label",{className:"grades-filter",children:["Course",c.jsxs("select",{value:k,onChange:B=>_(B.target.value),children:[c.jsx("option",{value:"all",children:"All courses"}),rs.map(B=>c.jsx("option",{value:B.id,children:B.label},B.id))]})]})]}),c.jsx("p",{className:"grades-preview-note",children:f?v==="signed-in"?"Verified Computer Science I results from your existing Playground account. Submissions and grading remain in the current Playground.":"Sign in on the current Playground to see your own verified results here. No changes are made from this test build.":"This preview does not display real student grades or assignments. Verified scores remain in the current Playground."}),c.jsx("div",{className:"grades-summary","aria-label":"Separate lesson and challenge progress",children:[["Lessons",N.lessons],["Challenges",N.challenges]].map(([B,J])=>c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(ro,{size:19}),c.jsx("span",{children:B}),c.jsxs("strong",{children:[J.completed," completed"]}),c.jsxs("p",{children:[J.graded," graded · ",J.earned," / ",J.possible," graded points"]})]},B))}),c.jsxs("div",{className:"grades-summary",children:[c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(Gy,{size:19}),c.jsx("span",{children:"Points earned"}),c.jsxs("strong",{children:[C.earned," ",c.jsxs("small",{children:["/ ",C.possible]})]}),c.jsx("p",{children:C.percent===null?"No graded work yet":`${C.percent}% of graded points`})]}),c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(Tm,{size:19}),c.jsx("span",{children:"Graded activities"}),c.jsx("strong",{children:C.count}),c.jsx("p",{children:"Combined graded activity count"})]}),c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(Ky,{size:19}),c.jsx("span",{children:"Most recent scored week"}),c.jsx("strong",{children:L?f?`+${L.earned}`:`${L.earned} / ${L.possible}`:"—"}),c.jsx("p",{children:L?`Week of ${sc(L.week)}`:"No scores yet"})]})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:f?"Weekly verified point increases":"Weekly scores"}),O.length?c.jsx("div",{className:"grades-weeks",children:O.map(B=>c.jsxs("div",{className:"grades-week",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:["Week of ",sc(B.week)]}),c.jsxs("small",{children:[B.count," scored ",B.count===1?"activity":"activities"]})]}),c.jsxs("div",{className:"grades-week-score",children:[c.jsx("strong",{children:f?`+${B.earned} pts`:`${B.earned} / ${B.possible} pts`}),!f&&c.jsx("progress",{value:B.earned,max:Math.max(B.possible,1),"aria-label":`Week of ${sc(B.week)}: ${B.earned} of ${B.possible} points`})]})]},B.week))}):c.jsx("p",{children:"No graded work in this selection."})]}),k==="all"&&c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"By course"}),c.jsx("div",{className:"grades-course-list",children:Y.map(B=>c.jsxs("div",{className:"grades-course-row","data-course":B.id,children:[c.jsx("span",{className:"grades-course-dot","aria-hidden":"true"}),c.jsx("strong",{children:B.label}),c.jsx("span",{children:B.count?`${B.earned} / ${B.possible} pts`:"No grades yet"})]},B.id))})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"Scored work"}),w.length?c.jsx("div",{className:"grades-entries",children:w.slice().sort((B,J)=>J.gradedAt.localeCompare(B.gradedAt)).map(B=>{var J;return c.jsxs("div",{className:"grades-entry",children:[c.jsxs("div",{children:[c.jsx("strong",{children:dm(B.id,B.courseId)}),c.jsxs("small",{children:[c.jsx(ro,{size:13}),((J=Sr(B.courseId))==null?void 0:J.label)||B.courseId," · ",Ed(B.gradedAt)]})]}),c.jsxs("strong",{children:[B.earned," / ",B.possible," pts"]})]},B.id)})}):c.jsx("p",{children:"No scored lessons or challenges yet."})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"Still to complete"}),f?c.jsx("p",{children:"Assignment and due-date data will be connected in the next integration stage."}):U.length?c.jsx("div",{className:"grades-entries",children:U.map(B=>{var J;return c.jsxs("div",{className:"grades-entry",children:[c.jsxs("div",{children:[c.jsx("strong",{children:dm(B.id,B.courseId)}),c.jsx("small",{children:((J=Sr(B.courseId))==null?void 0:J.label)||B.courseId})]}),c.jsxs("div",{className:"grades-due-meta",children:[c.jsx("span",{className:`assignment-status ${B.status.state}`,children:B.status.state==="overdue"?"Overdue":"Assigned"}),c.jsxs("small",{children:["Due ",Ed(B.dueDate)]})]})]},B.id)})}):c.jsx("p",{children:"Nothing outstanding in this selection."})]})]})}function Fk({filterCourse:l,onSelect:u,onBrowseCourse:d,grades:f=[],catalog:g=null,pythonOnly:v=!1,loading:k=!1,error:_=null}){const[w,C]=ye.useState(""),[N,O]=ye.useState("all"),[L,Y]=ye.useState("all"),[U,B]=ye.useState("all"),J=l||"all",I=v?g||[]:Kd,z=v?["python"]:ch,q=v?[...new Set(I.flatMap(X=>X.tags))].sort((X,se)=>X.localeCompare(se)):Rk,W=ye.useMemo(()=>v?Ry(I,{query:w,difficulty:N,topic:L,language:U,course:J}):Ok({query:w,difficulty:N,topic:L,language:U,course:J}),[w,N,L,U,J,v,g]),G=()=>{C(""),O("all"),Y("all"),B("all"),d(null)};return c.jsxs("div",{className:"main-content challenge-bank-screen",children:[c.jsxs("header",{className:"challenge-bank-intro",children:[c.jsxs("div",{className:"eyebrow",children:[c.jsx(Bd,{size:15})," Shared programming practice"]}),c.jsx("h1",{children:"Challenge Bank"}),c.jsx("p",{children:v?"One shared challenge page, beginning with authentic Computer Science I Python problems.":"One problem library for every class. Choose Python, Java, JavaScript, or C# when solving—without duplicating problems across courses."}),c.jsxs("div",{className:"challenge-summary",children:[c.jsx("strong",{children:I.length})," published challenges · ",c.jsx("strong",{children:z.length})," available language",z.length===1?"":"s"," · ",c.jsx("strong",{children:"1"})," shared library"]}),v&&c.jsxs("p",{className:"challenge-python-notice",role:"note",children:[gm," Run and Check use published examples; official submissions and grading remain in the existing workflow."]})]}),c.jsxs("section",{className:"challenge-filters surface-card","aria-label":"Filter challenges",children:[c.jsxs("div",{className:"filter-title",children:[c.jsx(Zy,{size:17}),c.jsx("strong",{children:"Find a challenge"}),c.jsxs("button",{type:"button",className:"filter-clear",onClick:G,children:[c.jsx(Ud,{size:14})," Clear filters"]})]}),c.jsxs("div",{className:"challenge-filter-grid",children:[c.jsxs("label",{className:"challenge-search-label",children:["Search",c.jsxs("span",{className:"challenge-search",children:[c.jsx(_m,{size:16}),c.jsx("input",{type:"search",value:w,placeholder:"Problem, skill, or topic",onChange:X=>C(X.target.value)})]})]}),c.jsxs("label",{children:["Course view",c.jsxs("select",{value:J,onChange:X=>d(X.target.value==="all"?null:X.target.value),children:[c.jsx("option",{value:"all",children:"All courses"}),rs.filter(X=>v?X.id==="computer-science-1":X.id!=="tsi-math").map(X=>c.jsx("option",{value:X.id,children:X.label},X.id))]})]}),c.jsxs("label",{children:["Difficulty",c.jsxs("select",{value:N,onChange:X=>O(X.target.value),children:[c.jsx("option",{value:"all",children:"Any difficulty"}),Ik.map(X=>c.jsx("option",{value:X,children:X},X))]})]}),c.jsxs("label",{children:["Topic",c.jsxs("select",{value:L,onChange:X=>Y(X.target.value),children:[c.jsx("option",{value:"all",children:"Any topic"}),q.map(X=>c.jsx("option",{value:X,children:X},X))]})]}),c.jsxs("label",{children:["Language",c.jsxs("select",{value:U,onChange:X=>B(X.target.value),children:[c.jsx("option",{value:"all",children:"Any language"}),z.map(X=>c.jsx("option",{value:X,children:mg[X]},X))]})]})]}),c.jsx("p",{className:"challenge-filter-note",children:"Course matching is informational. Confirm students have learned the prerequisite skills before assigning problems."})]}),c.jsxs("div",{className:"challenge-results-heading",children:[c.jsxs("h2",{children:["Available challenges ",c.jsxs("span",{children:["(",W.length,")"]})]}),c.jsx("span",{children:"Alphabetical order"})]}),k&&c.jsx("p",{className:"challenge-filter-note",role:"status",children:"Loading the published CS1 Python challenge catalog…"}),_&&v&&c.jsxs("p",{role:"alert",children:["Could not load the published CS1 challenges: ",_,". No demo problems were substituted."]}),W.length?c.jsx("div",{className:"challenge-card-grid",children:W.map(X=>c.jsxs("a",{className:"challenge-card surface-card",href:ym(X.id),onClick:se=>{se.button!==0||se.metaKey||se.ctrlKey||se.shiftKey||se.altKey||(se.preventDefault(),u(X.id))},children:[c.jsxs("div",{className:"challenge-card-top",children:[c.jsx("span",{className:"challenge-level level-"+X.difficulty.toLowerCase().replace(" ","-"),children:X.difficulty}),c.jsx("span",{className:"challenge-points",children:Sd("challenge:"+X.id,f)?`${Sd("challenge:"+X.id,f).earned} / ${Sd("challenge:"+X.id,f).possible} pts earned`:v?`${X.points} pts · practice only`:`${X.points} pts available`})]}),c.jsx("h3",{children:X.title}),c.jsx("p",{children:X.summary}),c.jsx("div",{className:"challenge-tags",children:X.tags.map(se=>c.jsx("span",{children:se},se))}),c.jsxs("div",{className:"challenge-course-tags",children:[X.suggestedCourses.slice(0,3).map(se=>{var ve,De;return c.jsx("span",{title:(ve=Sr(se))==null?void 0:ve.label,children:((De=Sr(se))==null?void 0:De.short)||se},se)}),X.suggestedCourses.length>3&&c.jsxs("span",{children:["+",X.suggestedCourses.length-3]})]}),c.jsxs("span",{className:"challenge-open",children:["Open challenge ",c.jsx(th,{size:16})]})]},X.id))}):c.jsxs("div",{className:"challenge-empty surface-card",children:[c.jsx("h3",{children:"No matching challenges"}),c.jsx("p",{children:"Try a broader topic or clear the filters."}),c.jsx("button",{className:"btn",onClick:G,children:"Show all challenges"})]}),c.jsx("p",{className:"hint challenge-bottom-note",children:"Choose a problem, work through its examples, and compare your approach. Practice here does not submit code or award verified points."})]})}const Wk=(l,u)=>"designlab:challenge-code:"+l+":"+u;function Hk({challengeId:l,onBack:u,publishedChallenge:d=null,pythonOnly:f=!1}){const g=f?d:gg(l),v=f&&(g==null?void 0:g.source)==="published-cs1",[k,_]=Kn("designlab:challenge-language","python"),w=f?"python":ch.includes(k)?k:"python",[C,N]=Kn("designlab:challenge-left-width",420),O=ye.useRef(null);if(!g)return c.jsxs("div",{className:"main-content",children:[c.jsx("h1",{children:"Challenge not found"}),c.jsx("button",{className:"btn",onClick:u,children:"Back to bank"})]});const L=v?g.starter:Lk(l,w),Y={id:l,title:g.title,language:w,starter:L,kind:"Challenge",challenge:g.summary,points:g.points,console:"Run or Check executes published examples in your selected language.",storageKey:v?Oy(l):Wk(l,w),challengeExamples:v?g.examples:Ak(l),publicPythonCases:v,mode:v?"function":void 0,isChallenge:!0,isPublished:v},U=B=>{if(!O.current)return;const J=O.current.getBoundingClientRect();N(Math.max(280,Math.min(J.width-360,B.clientX-J.left)))};return c.jsxs("div",{className:"challenge-detail-page",children:[c.jsxs("div",{className:"challenge-breadcrumb",children:[c.jsxs("button",{onClick:u,children:[c.jsx(bm,{size:16})," Challenge Bank"]}),c.jsx("span",{children:"/"}),c.jsx("span",{children:g.title})]}),c.jsxs("header",{className:"challenge-detail-heading surface-card",children:[c.jsxs("div",{className:"eyebrow",children:["Shared challenge · ",g.difficulty," · ",g.points," published points"]}),c.jsx("h1",{children:g.title}),c.jsx("p",{children:g.summary}),c.jsx("p",{children:"Run and Check execute student code using only published examples. No submissions, official points or hidden grading are connected here."}),v&&c.jsxs("p",{className:"challenge-python-notice",role:"note",children:[gm," Existing official challenge submissions still use the established GitHub workflow."]}),c.jsxs("div",{className:"challenge-prerequisites",children:[c.jsx("strong",{children:v?"Topics:":"Prerequisites:"}),(v?g.tags:g.prerequisites).map(B=>c.jsx("span",{children:B},B))]})]}),c.jsxs("div",{className:"challenge-workspace",ref:O,style:{"--challenge-left":C+"px"},children:[c.jsxs("section",{className:"challenge-instructions",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx($y,{size:16})," Problem & examples"]}),c.jsx("span",{className:"challenge-points",children:"Practice only"})]}),c.jsx("div",{className:"markdown-preview challenge-markdown",dangerouslySetInnerHTML:{__html:tl(v?Iy(g):Pk(l))}})]}),c.jsx(fc,{axis:"columns",onDrag:U}),c.jsxs("section",{className:"challenge-editor-panel",children:[c.jsxs("div",{className:"challenge-runtime-toolbar",children:[c.jsxs("label",{className:"challenge-language-selector",children:["Language",v?c.jsx("strong",{children:"Python"}):c.jsx("select",{"aria-label":"Solution language",value:w,onChange:B=>_(B.target.value),children:ch.map(B=>c.jsx("option",{value:B,children:mg[B]},B))})]}),c.jsx("span",{children:"Live public-example checks"})]}),c.jsx(Xm,{lessonId:"challenge:"+l+":"+w,task:Y},l+":"+w)]})]})]})}function Bk(){var Q;const[l,u]=ye.useState(()=>gd()),[d,f]=Kn("designlab:course","computer-science-1"),[g,v]=Kn("designlab:theme","dark"),[k,_]=Kn("designlab:course-colors",{}),[w,C]=Kn("designlab:sidebar",!0);Kn("designlab:completed-lessons",[]);const[N,O]=ye.useState({status:"loading",grades:[],weeklyPoints:[]}),L=N.grades,Y=[],U=xy([],L),[B,J]=ye.useState({}),[I,z]=ye.useState({}),[q,W]=ye.useState(!0),G=ye.useMemo(()=>rs.filter(T=>T.id==="computer-science-1").map(T=>{if(T.id==="computer-science-1")return Ly(T,B[T.id]);if(T.id==="test-prep")return T;if(T.id==="capstone")return{...T,units:[],lessons:[],lessonRecords:{},publishedContent:!1,projects:[]};const P=B[T.id];return P?{...T,...P,publishedContent:!0}:{...T,units:[],lessons:[],lessonRecords:{},projects:[],contentLoadingError:I[T.id]||null}}),[B,I]),X=ye.useMemo(()=>Ay(B["computer-science-1"]),[B]);ye.useEffect(()=>{let T=!0;return Ny().then(P=>{T&&O(P)}).catch(()=>{T&&O({status:"unavailable",grades:[],weeklyPoints:[],message:"Account lookup unavailable. No production records were changed."})}),()=>{T=!1}},[]),ye.useEffect(()=>{const T=new AbortController;let P=!0;const H=["computer-science-1"];return Promise.all(H.map(async D=>{try{return{courseId:D,data:D==="computer-science-1"?await Py({signal:T.signal}):await jy(D,{signal:T.signal})}}catch(Z){return{courseId:D,error:String((Z==null?void 0:Z.message)||Z)}}})).then(D=>{if(!P)return;const Z={},Ce={};for(const Ie of D)Ie.data?Z[Ie.courseId]=Ie.data:Ce[Ie.courseId]=Ie.error;J(Z),z(Ce),W(!1)}),()=>{P=!1,T.abort()}},[]),ye.useEffect(()=>{u(gd(window.location.pathname,G,X==null?void 0:X.map(T=>T.id)))},[G,X]),Kn("designlab:students",Zp);const[se,ve]=Kn("designlab:journal-submissions",Jg);ye.useEffect(()=>{document.documentElement.dataset.theme=g},[g]),ye.useEffect(()=>{hy(k,rs)},[k]);function De(T,P){!rs.some(H=>H.id===T)||!Md(P)||_(H=>({...H&&typeof H=="object"?H:{},[T]:P.toUpperCase()}))}function be(T){_(P=>{const H={...P&&typeof P=="object"?P:{}};return delete H[T],H})}ye.useEffect(()=>{var P;l.page==="course"&&f(l.courseId);const T=l.page==="course"?(P=Sr(l.courseId))==null?void 0:P.label:l.page==="admin"?"Admin Dashboard":l.page==="teacher"?"Teacher Dashboard":l.page==="grades"?"Grades":l.page==="journals"?"Weekly Journals":l.page==="challenges"?"Challenge Bank":l.page==="challenge"?"Coding Challenge":"Your Playgrounds";document.title=`${T||"Playground"} | Ms. Whitby's Playground — React Lab`},[l.page,l.courseId,f]),ye.useEffect(()=>{const T=()=>u(gd(window.location.pathname,G,X==null?void 0:X.map(P=>P.id)));return window.addEventListener("popstate",T),window.addEventListener("hashchange",T),()=>{window.removeEventListener("popstate",T),window.removeEventListener("hashchange",T)}},[G,X]);const ne=ye.useCallback(T=>{window.location.pathname!==T&&window.history.pushState({},"",T),u(gd(window.location.pathname,G,X==null?void 0:X.map(P=>P.id))),window.scrollTo({top:0,behavior:"auto"})},[G,X]);function Le(T,P){if(!T)return ne(Yl());f(T),ne(Fd(T,P))}function ue(T,P,H=null){ne(vm(T,P,H))}function xe(T){T==="teacher"?ne(lf()):T==="admin"?ne(Fy()):T==="journals"?ne(Wy()):T==="grades"?ne(Hy()):T==="challenges"?ne(Gl()):T==="course"?Le(l.page==="course"?l.courseId:d):ne(Yl())}const A=l.page,ee=l.courseId||d;return c.jsxs("div",{className:"app-shell",children:[c.jsx(fv,{sidebarOpen:w,onToggleSidebar:()=>C(!w),onHome:()=>ne(Yl()),theme:g,setTheme:v,readOnlyMode:Jo,accountLabel:(Q=N.user)==null?void 0:Q.handle}),c.jsxs("div",{className:pa("app-layout",!w&&"sidebar-closed"),children:[c.jsx(gv,{open:w,page:A,courseId:ee,lessonId:l.page==="course"?l.lessonId:null,setPage:xe,openCourse:Le,completedLessons:U,assignments:Y,grades:L,availableCourses:G,readOnlyMode:Jo,onOpenProject:ue}),c.jsxs("main",{className:"main-panel",children:[c.jsxs("section",{className:"cs1-integration-notice",role:"status",children:[c.jsx("strong",{children:"Computer Science I · read-only integration test"}),c.jsx("span",{children:N.status==="loading"?"Checking your existing Playground session…":N.status==="signed-in"?"Signed in as "+N.user.handle+" · Your own verified grades are shown.":N.status==="signed-out"?"Sign in on the current Playground to view your existing results.":N.message||"Could not verify your existing session."}),c.jsx("a",{href:"/playground/",children:"Open current Playground"})]}),["home","course","grades","teacher","admin","challenges","challenge"].includes(A)?A==="home"?c.jsx(wv,{availableCourses:G,completedLessons:U,openCourse:Le,openTeacher:()=>ne(lf()),openChallenges:()=>ne(Gl()),readOnlyMode:Jo}):A==="course"?c.jsx(u0,{courseId:l.courseId,lessonId:l.lessonId,projectId:l.projectId,projectStepId:l.stepId,availableCourses:G,openCourse:Le,openProject:ue,openChallenges:T=>ne(Gl(T)),completedLessons:U,assignments:Y,grades:L,readOnlyMode:Jo,onToggleLessonComplete:void 0,courseColors:k,onSetCourseColor:De,onResetCourseColor:be},l.courseId):A==="grades"?c.jsx(zk,{grades:L,assignments:Y,completedLessons:U,readOnlyMode:Jo,weeklyPoints:N.weeklyPoints,accountStatus:N.status}):A==="challenges"?c.jsx(Fk,{grades:L,filterCourse:l.filterCourse,onSelect:T=>ne(ym(T)),onBrowseCourse:T=>ne(Gl(T)),catalog:X,pythonOnly:Jo,loading:q,error:I["computer-science-1"]}):A==="challenge"?c.jsx(Hk,{challengeId:l.challengeId,grades:L,onBack:()=>ne(Gl()),publishedChallenge:X==null?void 0:X.find(T=>T.id===l.challengeId),pythonOnly:Jo},l.challengeId):A==="journals"?c.jsx(X0,{submissions:se,setSubmissions:ve}):A==="teacher"?c.jsx(A0,{}):A==="admin"?c.jsx(V0,{}):q?c.jsxs("div",{className:"main-content route-not-found",role:"status",children:[c.jsx("h1",{children:"Loading published course materials…"}),c.jsx("p",{children:"The lesson and project links will appear once the course catalogs are loaded."})]}):c.jsxs("div",{className:"main-content route-not-found",children:[c.jsx("div",{className:"eyebrow",children:"Link not found"}),c.jsx("h1",{children:"That playground page doesn't exist."}),c.jsx("p",{children:"Check the link or return to the list of playgrounds."}),c.jsx("button",{className:"btn primary",onClick:()=>ne(Yl()),children:"See all playgrounds"})]}):c.jsxs("div",{className:"main-content",children:[c.jsx("h1",{children:"Not enabled in this test build"}),c.jsx("p",{children:"Teacher tools, journals, challenges, and submissions remain in the current Playground until their permissions and data are integrated."}),c.jsx("a",{href:"/playground/",children:"Return to current Playground"})]})]})]}),c.jsx(yv,{})]})}qg.createRoot(document.getElementById("root")).render(c.jsx(zg.StrictMode,{children:c.jsx(Bk,{})}));
