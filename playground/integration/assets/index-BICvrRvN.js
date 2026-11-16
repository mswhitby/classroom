var Lg=Object.defineProperty;var Pg=(l,u,d)=>u in l?Lg(l,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[u]=d;var an=(l,u,d)=>Pg(l,typeof u!="symbol"?u+"":u,d);(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))f(g);new MutationObserver(g=>{for(const v of g)if(v.type==="childList")for(const k of v.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&f(k)}).observe(document,{childList:!0,subtree:!0});function d(g){const v={};return g.integrity&&(v.integrity=g.integrity),g.referrerPolicy&&(v.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?v.credentials="include":g.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function f(g){if(g.ep)return;g.ep=!0;const v=d(g);fetch(g.href,v)}})();function cm(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Pp={exports:{}},Gu={},Ap={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function Ag(){if(Jh)return Pt;Jh=1;var l=Symbol.for("react.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),k=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),O=Symbol.iterator;function L(M){return M===null||typeof M!="object"?null:(M=O&&M[O]||M["@@iterator"],typeof M=="function"?M:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,F={};function V(M,Z,Ce){this.props=M,this.context=Z,this.refs=F,this.updater=Ce||Y}V.prototype.isReactComponent={},V.prototype.setState=function(M,Z){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Z,"setState")},V.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function I(){}I.prototype=V.prototype;function z(M,Z,Ce){this.props=M,this.context=Z,this.refs=F,this.updater=Ce||Y}var B=z.prototype=new I;B.constructor=z,U(B,V.prototype),B.isPureReactComponent=!0;var H=Array.isArray,J=Object.prototype.hasOwnProperty,ce={current:null},ae={key:!0,ref:!0,__self:!0,__source:!0};function be(M,Z,Ce){var ze,qe={},Oe=null,Se=null;if(Z!=null)for(ze in Z.ref!==void 0&&(Se=Z.ref),Z.key!==void 0&&(Oe=""+Z.key),Z)J.call(Z,ze)&&!ae.hasOwnProperty(ze)&&(qe[ze]=Z[ze]);var Be=arguments.length-2;if(Be===1)qe.children=Ce;else if(1<Be){for(var $e=Array(Be),et=0;et<Be;et++)$e[et]=arguments[et+2];qe.children=$e}if(M&&M.defaultProps)for(ze in Be=M.defaultProps,Be)qe[ze]===void 0&&(qe[ze]=Be[ze]);return{$$typeof:l,type:M,key:Oe,ref:Se,props:qe,_owner:ce.current}}function Re(M,Z){return{$$typeof:l,type:M.type,key:Z,ref:M.ref,props:M.props,_owner:M._owner}}function xe(M){return typeof M=="object"&&M!==null&&M.$$typeof===l}function se(M){var Z={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(Ce){return Z[Ce]})}var Ie=/\/+/g;function le(M,Z){return typeof M=="object"&&M!==null&&M.key!=null?se(""+M.key):Z.toString(36)}function fe(M,Z,Ce,ze,qe){var Oe=typeof M;(Oe==="undefined"||Oe==="boolean")&&(M=null);var Se=!1;if(M===null)Se=!0;else switch(Oe){case"string":case"number":Se=!0;break;case"object":switch(M.$$typeof){case l:case u:Se=!0}}if(Se)return Se=M,qe=qe(Se),M=ze===""?"."+le(Se,0):ze,H(qe)?(Ce="",M!=null&&(Ce=M.replace(Ie,"$&/")+"/"),fe(qe,Z,Ce,"",function(et){return et})):qe!=null&&(xe(qe)&&(qe=Re(qe,Ce+(!qe.key||Se&&Se.key===qe.key?"":(""+qe.key).replace(Ie,"$&/")+"/")+M)),Z.push(qe)),1;if(Se=0,ze=ze===""?".":ze+":",H(M))for(var Be=0;Be<M.length;Be++){Oe=M[Be];var $e=ze+le(Oe,Be);Se+=fe(Oe,Z,Ce,$e,qe)}else if($e=L(M),typeof $e=="function")for(M=$e.call(M),Be=0;!(Oe=M.next()).done;)Oe=Oe.value,$e=ze+le(Oe,Be++),Se+=fe(Oe,Z,Ce,$e,qe);else if(Oe==="object")throw Z=String(M),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return Se}function A(M,Z,Ce){if(M==null)return M;var ze=[],qe=0;return fe(M,ze,"","",function(Oe){return Z.call(Ce,Oe,qe++)}),ze}function Q(M){if(M._status===-1){var Z=M._result;Z=Z(),Z.then(function(Ce){(M._status===0||M._status===-1)&&(M._status=1,M._result=Ce)},function(Ce){(M._status===0||M._status===-1)&&(M._status=2,M._result=Ce)}),M._status===-1&&(M._status=0,M._result=Z)}if(M._status===1)return M._result.default;throw M._result}var q={current:null},T={transition:null},P={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:T,ReactCurrentOwner:ce};function $(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:A,forEach:function(M,Z,Ce){A(M,function(){Z.apply(this,arguments)},Ce)},count:function(M){var Z=0;return A(M,function(){Z++}),Z},toArray:function(M){return A(M,function(Z){return Z})||[]},only:function(M){if(!xe(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Pt.Component=V,Pt.Fragment=d,Pt.Profiler=g,Pt.PureComponent=z,Pt.StrictMode=f,Pt.Suspense=w,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,Pt.act=$,Pt.cloneElement=function(M,Z,Ce){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var ze=U({},M.props),qe=M.key,Oe=M.ref,Se=M._owner;if(Z!=null){if(Z.ref!==void 0&&(Oe=Z.ref,Se=ce.current),Z.key!==void 0&&(qe=""+Z.key),M.type&&M.type.defaultProps)var Be=M.type.defaultProps;for($e in Z)J.call(Z,$e)&&!ae.hasOwnProperty($e)&&(ze[$e]=Z[$e]===void 0&&Be!==void 0?Be[$e]:Z[$e])}var $e=arguments.length-2;if($e===1)ze.children=Ce;else if(1<$e){Be=Array($e);for(var et=0;et<$e;et++)Be[et]=arguments[et+2];ze.children=Be}return{$$typeof:l,type:M.type,key:qe,ref:Oe,props:ze,_owner:Se}},Pt.createContext=function(M){return M={$$typeof:k,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:v,_context:M},M.Consumer=M},Pt.createElement=be,Pt.createFactory=function(M){var Z=be.bind(null,M);return Z.type=M,Z},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(M){return{$$typeof:C,render:M}},Pt.isValidElement=xe,Pt.lazy=function(M){return{$$typeof:N,_payload:{_status:-1,_result:M},_init:Q}},Pt.memo=function(M,Z){return{$$typeof:_,type:M,compare:Z===void 0?null:Z}},Pt.startTransition=function(M){var Z=T.transition;T.transition={};try{M()}finally{T.transition=Z}},Pt.unstable_act=$,Pt.useCallback=function(M,Z){return q.current.useCallback(M,Z)},Pt.useContext=function(M){return q.current.useContext(M)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(M){return q.current.useDeferredValue(M)},Pt.useEffect=function(M,Z){return q.current.useEffect(M,Z)},Pt.useId=function(){return q.current.useId()},Pt.useImperativeHandle=function(M,Z,Ce){return q.current.useImperativeHandle(M,Z,Ce)},Pt.useInsertionEffect=function(M,Z){return q.current.useInsertionEffect(M,Z)},Pt.useLayoutEffect=function(M,Z){return q.current.useLayoutEffect(M,Z)},Pt.useMemo=function(M,Z){return q.current.useMemo(M,Z)},Pt.useReducer=function(M,Z,Ce){return q.current.useReducer(M,Z,Ce)},Pt.useRef=function(M){return q.current.useRef(M)},Pt.useState=function(M){return q.current.useState(M)},Pt.useSyncExternalStore=function(M,Z,Ce){return q.current.useSyncExternalStore(M,Z,Ce)},Pt.useTransition=function(){return q.current.useTransition()},Pt.version="18.3.1",Pt}var Xh;function dh(){return Xh||(Xh=1,Ap.exports=Ag()),Ap.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function Rg(){if(Qh)return Gu;Qh=1;var l=dh(),u=Symbol.for("react.element"),d=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,g=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function k(C,w,_){var N,O={},L=null,Y=null;_!==void 0&&(L=""+_),w.key!==void 0&&(L=""+w.key),w.ref!==void 0&&(Y=w.ref);for(N in w)f.call(w,N)&&!v.hasOwnProperty(N)&&(O[N]=w[N]);if(C&&C.defaultProps)for(N in w=C.defaultProps,w)O[N]===void 0&&(O[N]=w[N]);return{$$typeof:u,type:C,key:L,ref:Y,props:O,_owner:g.current}}return Gu.Fragment=d,Gu.jsx=k,Gu.jsxs=k,Gu}var Zh;function Ig(){return Zh||(Zh=1,Pp.exports=Rg()),Pp.exports}var c=Ig(),ve=dh();const Og=cm(ve);var md={},Rp={exports:{}},ti={},Ip={exports:{}},Op={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function Dg(){return ef||(ef=1,(function(l){function u(T,P){var $=T.length;T.push(P);e:for(;0<$;){var M=$-1>>>1,Z=T[M];if(0<g(Z,P))T[M]=P,T[$]=Z,$=M;else break e}}function d(T){return T.length===0?null:T[0]}function f(T){if(T.length===0)return null;var P=T[0],$=T.pop();if($!==P){T[0]=$;e:for(var M=0,Z=T.length,Ce=Z>>>1;M<Ce;){var ze=2*(M+1)-1,qe=T[ze],Oe=ze+1,Se=T[Oe];if(0>g(qe,$))Oe<Z&&0>g(Se,qe)?(T[M]=Se,T[Oe]=$,M=Oe):(T[M]=qe,T[ze]=$,M=ze);else if(Oe<Z&&0>g(Se,$))T[M]=Se,T[Oe]=$,M=Oe;else break e}}return P}function g(T,P){var $=T.sortIndex-P.sortIndex;return $!==0?$:T.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var v=performance;l.unstable_now=function(){return v.now()}}else{var k=Date,C=k.now();l.unstable_now=function(){return k.now()-C}}var w=[],_=[],N=1,O=null,L=3,Y=!1,U=!1,F=!1,V=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(T){for(var P=d(_);P!==null;){if(P.callback===null)f(_);else if(P.startTime<=T)f(_),P.sortIndex=P.expirationTime,u(w,P);else break;P=d(_)}}function H(T){if(F=!1,B(T),!U)if(d(w)!==null)U=!0,Q(J);else{var P=d(_);P!==null&&q(H,P.startTime-T)}}function J(T,P){U=!1,F&&(F=!1,I(be),be=-1),Y=!0;var $=L;try{for(B(P),O=d(w);O!==null&&(!(O.expirationTime>P)||T&&!se());){var M=O.callback;if(typeof M=="function"){O.callback=null,L=O.priorityLevel;var Z=M(O.expirationTime<=P);P=l.unstable_now(),typeof Z=="function"?O.callback=Z:O===d(w)&&f(w),B(P)}else f(w);O=d(w)}if(O!==null)var Ce=!0;else{var ze=d(_);ze!==null&&q(H,ze.startTime-P),Ce=!1}return Ce}finally{O=null,L=$,Y=!1}}var ce=!1,ae=null,be=-1,Re=5,xe=-1;function se(){return!(l.unstable_now()-xe<Re)}function Ie(){if(ae!==null){var T=l.unstable_now();xe=T;var P=!0;try{P=ae(!0,T)}finally{P?le():(ce=!1,ae=null)}}else ce=!1}var le;if(typeof z=="function")le=function(){z(Ie)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,A=fe.port2;fe.port1.onmessage=Ie,le=function(){A.postMessage(null)}}else le=function(){V(Ie,0)};function Q(T){ae=T,ce||(ce=!0,le())}function q(T,P){be=V(function(){T(l.unstable_now())},P)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(T){T.callback=null},l.unstable_continueExecution=function(){U||Y||(U=!0,Q(J))},l.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<T?Math.floor(1e3/T):5},l.unstable_getCurrentPriorityLevel=function(){return L},l.unstable_getFirstCallbackNode=function(){return d(w)},l.unstable_next=function(T){switch(L){case 1:case 2:case 3:var P=3;break;default:P=L}var $=L;L=P;try{return T()}finally{L=$}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(T,P){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var $=L;L=T;try{return P()}finally{L=$}},l.unstable_scheduleCallback=function(T,P,$){var M=l.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?M+$:M):$=M,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=$+Z,T={id:N++,callback:P,priorityLevel:T,startTime:$,expirationTime:Z,sortIndex:-1},$>M?(T.sortIndex=$,u(_,T),d(w)===null&&T===d(_)&&(F?(I(be),be=-1):F=!0,q(H,$-M))):(T.sortIndex=Z,u(w,T),U||Y||(U=!0,Q(J))),T},l.unstable_shouldYield=se,l.unstable_wrapCallback=function(T){var P=L;return function(){var $=L;L=P;try{return T.apply(this,arguments)}finally{L=$}}}})(Op)),Op}var tf;function Mg(){return tf||(tf=1,Ip.exports=Dg()),Ip.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function zg(){if(nf)return ti;nf=1;var l=dh(),u=Mg();function d(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,g={};function v(t,r){k(t,r),k(t+"Capture",r)}function k(t,r){for(g[t]=r,t=0;t<r.length;t++)f.add(r[t])}var C=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},O={};function L(t){return w.call(O,t)?!0:w.call(N,t)?!1:_.test(t)?O[t]=!0:(N[t]=!0,!1)}function Y(t,r,a,p){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return p?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function U(t,r,a,p){if(r===null||typeof r>"u"||Y(t,r,a,p))return!0;if(p)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function F(t,r,a,p,m,x,R){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=p,this.attributeNamespace=m,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=x,this.removeEmptyString=R}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){V[t]=new F(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];V[r]=new F(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){V[t]=new F(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){V[t]=new F(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){V[t]=new F(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){V[t]=new F(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){V[t]=new F(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){V[t]=new F(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){V[t]=new F(t,5,!1,t.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function z(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(I,z);V[r]=new F(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(I,z);V[r]=new F(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(I,z);V[r]=new F(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){V[t]=new F(t,1,!1,t.toLowerCase(),null,!1,!1)}),V.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){V[t]=new F(t,1,!1,t.toLowerCase(),null,!0,!0)});function B(t,r,a,p){var m=V.hasOwnProperty(r)?V[r]:null;(m!==null?m.type!==0:p||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(U(r,a,m,p)&&(a=null),p||m===null?L(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):m.mustUseProperty?t[m.propertyName]=a===null?m.type===3?!1:"":a:(r=m.attributeName,p=m.attributeNamespace,a===null?t.removeAttribute(r):(m=m.type,a=m===3||m===4&&a===!0?"":""+a,p?t.setAttributeNS(p,r,a):t.setAttribute(r,a))))}var H=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),ce=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),Re=Symbol.for("react.profiler"),xe=Symbol.for("react.provider"),se=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),T=Symbol.iterator;function P(t){return t===null||typeof t!="object"?null:(t=T&&t[T]||t["@@iterator"],typeof t=="function"?t:null)}var $=Object.assign,M;function Z(t){if(M===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);M=r&&r[1]||""}return`
`+M+t}var Ce=!1;function ze(t,r){if(!t||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(me){var p=me}Reflect.construct(t,[],r)}else{try{r.call()}catch(me){p=me}t.call(r.prototype)}else{try{throw Error()}catch(me){p=me}t()}}catch(me){if(me&&p&&typeof me.stack=="string"){for(var m=me.stack.split(`
`),x=p.stack.split(`
`),R=m.length-1,X=x.length-1;1<=R&&0<=X&&m[R]!==x[X];)X--;for(;1<=R&&0<=X;R--,X--)if(m[R]!==x[X]){if(R!==1||X!==1)do if(R--,X--,0>X||m[R]!==x[X]){var ee=`
`+m[R].replace(" at new "," at ");return t.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",t.displayName)),ee}while(1<=R&&0<=X);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?Z(t):""}function qe(t){switch(t.tag){case 5:return Z(t.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return t=ze(t.type,!1),t;case 11:return t=ze(t.type.render,!1),t;case 1:return t=ze(t.type,!0),t;default:return""}}function Oe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ae:return"Fragment";case ce:return"Portal";case Re:return"Profiler";case be:return"StrictMode";case le:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case se:return(t.displayName||"Context")+".Consumer";case xe:return(t._context.displayName||"Context")+".Provider";case Ie:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case A:return r=t.displayName||null,r!==null?r:Oe(t.type)||"Memo";case Q:r=t._payload,t=t._init;try{return Oe(t(r))}catch{}}return null}function Se(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(r);case 8:return r===be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $e(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function et(t){var r=$e(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),p=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var m=a.get,x=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return m.call(this)},set:function(R){p=""+R,x.call(this,R)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return p},setValue:function(R){p=""+R},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ke(t){t._valueTracker||(t._valueTracker=et(t))}function Ft(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),p="";return t&&(p=$e(t)?t.checked?"true":"false":t.value),t=p,t!==a?(r.setValue(t),!0):!1}function Yt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ct(t,r){var a=r.checked;return $({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function xt(t,r){var a=r.defaultValue==null?"":r.defaultValue,p=r.checked!=null?r.checked:r.defaultChecked;a=Be(r.value!=null?r.value:a),t._wrapperState={initialChecked:p,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function tt(t,r){r=r.checked,r!=null&&B(t,"checked",r,!1)}function Ue(t,r){tt(t,r);var a=Be(r.value),p=r.type;if(a!=null)p==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(p==="submit"||p==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?yt(t,r.type,a):r.hasOwnProperty("defaultValue")&&yt(t,r.type,Be(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function vt(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var p=r.type;if(!(p!=="submit"&&p!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function yt(t,r,a){(r!=="number"||Yt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Qe=Array.isArray;function ut(t,r,a,p){if(t=t.options,r){r={};for(var m=0;m<a.length;m++)r["$"+a[m]]=!0;for(a=0;a<t.length;a++)m=r.hasOwnProperty("$"+t[a].value),t[a].selected!==m&&(t[a].selected=m),m&&p&&(t[a].defaultSelected=!0)}else{for(a=""+Be(a),r=null,m=0;m<t.length;m++){if(t[m].value===a){t[m].selected=!0,p&&(t[m].defaultSelected=!0);return}r!==null||t[m].disabled||(r=t[m])}r!==null&&(r.selected=!0)}}function oe(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(d(91));return $({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Te(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(d(92));if(Qe(a)){if(1<a.length)throw Error(d(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:Be(a)}}function he(t,r){var a=Be(r.value),p=Be(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),p!=null&&(t.defaultValue=""+p)}function kt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Ye(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ot(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Ye(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ze,mt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,p,m){MSApp.execUnsafeLocalFunction(function(){return t(r,a,p,m)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ze=Ze||document.createElement("div"),Ze.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ze.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function pt(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var Xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nr=["Webkit","ms","Moz","O"];Object.keys(Xt).forEach(function(t){nr.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Xt[r]=Xt[t]})});function _r(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Xt.hasOwnProperty(t)&&Xt[t]?(""+r).trim():r+"px"}function Ir(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var p=a.indexOf("--")===0,m=_r(a,r[a],p);a==="float"&&(a="cssFloat"),p?t.setProperty(a,m):t[a]=m}}var Ur=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qr(t,r){if(r){if(Ur[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(d(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(d(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(d(61))}if(r.style!=null&&typeof r.style!="object")throw Error(d(62))}}function bt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function rt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cr=null,tn=null,It=null;function qt(t){if(t=pn(t)){if(typeof Cr!="function")throw Error(d(280));var r=t.stateNode;r&&(r=gn(r),Cr(t.stateNode,t.type,r))}}function xn(t){tn?It?It.push(t):It=[t]:tn=t}function mn(){if(tn){var t=tn,r=It;if(It=tn=null,qt(t),r)for(t=0;t<r.length;t++)qt(r[t])}}function Nn(t,r){return t(r)}function bn(){}var ri=!1;function In(t,r,a){if(ri)return t(r,a);ri=!0;try{return Nn(t,r,a)}finally{ri=!1,(tn!==null||It!==null)&&(bn(),mn())}}function pr(t,r){var a=t.stateNode;if(a===null)return null;var p=gn(a);if(p===null)return null;a=p[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(p=!p.disabled)||(t=t.type,p=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!p;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(d(231,r,typeof a));return a}var gi=!1;if(C)try{var En={};Object.defineProperty(En,"passive",{get:function(){gi=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{gi=!1}function os(t,r,a,p,m,x,R,X,ee){var me=Array.prototype.slice.call(arguments,3);try{r.apply(a,me)}catch(Ae){this.onError(Ae)}}var wn=!1,Tr=null,$r=!1,Or=null,jr={onError:function(t){wn=!0,Tr=t}};function yi(t,r,a,p,m,x,R,X,ee){wn=!1,Tr=null,os.apply(jr,arguments)}function as(t,r,a,p,m,x,R,X,ee){if(yi.apply(this,arguments),wn){if(wn){var me=Tr;wn=!1,Tr=null}else throw Error(d(198));$r||($r=!0,Or=me)}}function On(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function ls(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Mi(t){if(On(t)!==t)throw Error(d(188))}function Dr(t){var r=t.alternate;if(!r){if(r=On(t),r===null)throw Error(d(188));return r!==t?null:t}for(var a=t,p=r;;){var m=a.return;if(m===null)break;var x=m.alternate;if(x===null){if(p=m.return,p!==null){a=p;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===a)return Mi(m),t;if(x===p)return Mi(m),r;x=x.sibling}throw Error(d(188))}if(a.return!==p.return)a=m,p=x;else{for(var R=!1,X=m.child;X;){if(X===a){R=!0,a=m,p=x;break}if(X===p){R=!0,p=m,a=x;break}X=X.sibling}if(!R){for(X=x.child;X;){if(X===a){R=!0,a=x,p=m;break}if(X===p){R=!0,p=x,a=m;break}X=X.sibling}if(!R)throw Error(d(189))}}if(a.alternate!==p)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?t:r}function Gn(t){return t=Dr(t),t!==null?vi(t):null}function vi(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=vi(t);if(r!==null)return r;t=t.sibling}return null}var zi=u.unstable_scheduleCallback,Bt=u.unstable_cancelCallback,Mr=u.unstable_shouldYield,us=u.unstable_requestPaint,Rt=u.unstable_now,Fi=u.unstable_getCurrentPriorityLevel,ii=u.unstable_ImmediatePriority,Vt=u.unstable_UserBlockingPriority,Je=u.unstable_NormalPriority,si=u.unstable_LowPriority,cs=u.unstable_IdlePriority,Yn=null,E=null;function K(t){if(E&&typeof E.onCommitFiberRoot=="function")try{E.onCommitFiberRoot(Yn,t,void 0,(t.current.flags&128)===128)}catch{}}var ge=Math.clz32?Math.clz32:He,je=Math.log,pe=Math.LN2;function He(t){return t>>>=0,t===0?32:31-(je(t)/pe|0)|0}var jt=64,Qt=4194304;function kn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kr(t,r){var a=t.pendingLanes;if(a===0)return 0;var p=0,m=t.suspendedLanes,x=t.pingedLanes,R=a&268435455;if(R!==0){var X=R&~m;X!==0?p=kn(X):(x&=R,x!==0&&(p=kn(x)))}else R=a&~m,R!==0?p=kn(R):x!==0&&(p=kn(x));if(p===0)return 0;if(r!==0&&r!==p&&(r&m)===0&&(m=p&-p,x=r&-r,m>=x||m===16&&(x&4194240)!==0))return r;if((p&4)!==0&&(p|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=p;0<r;)a=31-ge(r),m=1<<a,p|=t[a],r&=~m;return p}function il(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(t,r){for(var a=t.suspendedLanes,p=t.pingedLanes,m=t.expirationTimes,x=t.pendingLanes;0<x;){var R=31-ge(x),X=1<<R,ee=m[R];ee===-1?((X&a)===0||(X&p)!==0)&&(m[R]=il(X,r)):ee<=r&&(t.expiredLanes|=X),x&=~X}}function sa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function oa(){var t=jt;return jt<<=1,(jt&4194240)===0&&(jt=64),t}function Wi(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function rr(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-ge(r),t[r]=a}function aa(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var p=t.eventTimes;for(t=t.expirationTimes;0<a;){var m=31-ge(a),x=1<<m;r[m]=0,p[m]=-1,t[m]=-1,a&=~x}}function Hi(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var p=31-ge(a),m=1<<p;m&r|t[p]&r&&(t[p]|=r),a&=~m}}var Nt=0;function ds(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Is,xi,vo,bi,Bi,ir=!1,xo=[],zr=null,oi=null,Dn=null,Gr=new Map,Os=new Map,Nr=[],Ds="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function la(t,r){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Gr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(r.pointerId)}}function Ms(t,r,a,p,m,x){return t===null||t.nativeEvent!==x?(t={blockedOn:r,domEventName:a,eventSystemFlags:p,nativeEvent:x,targetContainers:[m]},r!==null&&(r=pn(r),r!==null&&xi(r)),t):(t.eventSystemFlags|=p,r=t.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),t)}function Vl(t,r,a,p,m){switch(r){case"focusin":return zr=Ms(zr,t,r,a,p,m),!0;case"dragenter":return oi=Ms(oi,t,r,a,p,m),!0;case"mouseover":return Dn=Ms(Dn,t,r,a,p,m),!0;case"pointerover":var x=m.pointerId;return Gr.set(x,Ms(Gr.get(x)||null,t,r,a,p,m)),!0;case"gotpointercapture":return x=m.pointerId,Os.set(x,Ms(Os.get(x)||null,t,r,a,p,m)),!0}return!1}function ua(t){var r=Ln(t.target);if(r!==null){var a=On(r);if(a!==null){if(r=a.tag,r===13){if(r=ls(a),r!==null){t.blockedOn=r,Bi(t.priority,function(){vo(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ps(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=Tt(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var p=new a.constructor(a.type,a);mi=p,a.target.dispatchEvent(p),mi=null}else return r=pn(a),r!==null&&xi(r),t.blockedOn=a,!1;r.shift()}return!0}function zs(t,r,a){ps(t)&&a.delete(r)}function ca(){ir=!1,zr!==null&&ps(zr)&&(zr=null),oi!==null&&ps(oi)&&(oi=null),Dn!==null&&ps(Dn)&&(Dn=null),Gr.forEach(zs),Os.forEach(zs)}function wi(t,r){t.blockedOn===r&&(t.blockedOn=null,ir||(ir=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,ca)))}function _e(t){function r(m){return wi(m,t)}if(0<xo.length){wi(xo[0],t);for(var a=1;a<xo.length;a++){var p=xo[a];p.blockedOn===t&&(p.blockedOn=null)}}for(zr!==null&&wi(zr,t),oi!==null&&wi(oi,t),Dn!==null&&wi(Dn,t),Gr.forEach(r),Os.forEach(r),a=0;a<Nr.length;a++)p=Nr[a],p.blockedOn===t&&(p.blockedOn=null);for(;0<Nr.length&&(a=Nr[0],a.blockedOn===null);)ua(a),a.blockedOn===null&&Nr.shift()}var D=H.ReactCurrentBatchConfig,ne=!0;function we(t,r,a,p){var m=Nt,x=D.transition;D.transition=null;try{Nt=1,nt(t,r,a,p)}finally{Nt=m,D.transition=x}}function Ee(t,r,a,p){var m=Nt,x=D.transition;D.transition=null;try{Nt=4,nt(t,r,a,p)}finally{Nt=m,D.transition=x}}function nt(t,r,a,p){if(ne){var m=Tt(t,r,a,p);if(m===null)hu(t,r,p,ct,a),la(t,p);else if(Vl(m,t,r,a,p))p.stopPropagation();else if(la(t,p),r&4&&-1<Ds.indexOf(t)){for(;m!==null;){var x=pn(m);if(x!==null&&Is(x),x=Tt(t,r,a,p),x===null&&hu(t,r,p,ct,a),x===m)break;m=x}m!==null&&p.stopPropagation()}else hu(t,r,p,null,a)}}var ct=null;function Tt(t,r,a,p){if(ct=null,t=rt(p),t=Ln(t),t!==null)if(r=On(t),r===null)t=null;else if(a=r.tag,a===13){if(t=ls(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ct=t,null}function cn(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fi()){case ii:return 1;case Vt:return 4;case Je:case si:return 16;case cs:return 536870912;default:return 16}default:return 16}}var $t=null,hr=null,Vn=null;function fr(){if(Vn)return Vn;var t,r=hr,a=r.length,p,m="value"in $t?$t.value:$t.textContent,x=m.length;for(t=0;t<a&&r[t]===m[t];t++);var R=a-t;for(p=1;p<=R&&r[a-p]===m[x-p];p++);return Vn=m.slice(t,1<p?1-p:void 0)}function dn(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Er(){return!0}function sl(){return!1}function Sn(t){function r(a,p,m,x,R){this._reactName=a,this._targetInst=m,this.type=p,this.nativeEvent=x,this.target=R,this.currentTarget=null;for(var X in t)t.hasOwnProperty(X)&&(a=t[X],this[X]=a?a(x):x[X]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Er:sl,this.isPropagationStopped=sl,this}return $(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),r}var Ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},da=Sn(Ui),ki=$({},Ui,{view:0,detail:0}),Gd=Sn(ki),Jl,Xl,pa,ha=$({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pa&&(pa&&t.type==="mousemove"?(Jl=t.screenX-pa.screenX,Xl=t.screenY-pa.screenY):Xl=Jl=0,pa=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),Ql=Sn(ha),Yd=$({},ha,{dataTransfer:0}),Vd=Sn(Yd),Jd=$({},ki,{relatedTarget:0}),Zl=Sn(Jd),gc=$({},Ui,{animationName:0,elapsedTime:0,pseudoElement:0}),Xd=Sn(gc),yc=$({},Ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ol=Sn(yc),bo=$({},Ui,{data:0}),vc=Sn(bo),Qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fa={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mn(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=fa[t])?!!r[t]:!1}function eu(){return Mn}var xc=$({},ki,{key:function(t){if(t.key){var r=Qd[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=dn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?dn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ma=Sn(xc),ep=$({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=Sn(ep),tp=$({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),nu=Sn(tp),bc=$({},Ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),np=Sn(bc),rp=$({},ha,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wc=Sn(rp),kc=[9,13,27,32],ru=C&&"CompositionEvent"in window,qi=null;C&&"documentMode"in document&&(qi=document.documentMode);var $i=C&&"TextEvent"in window&&!qi,ga=C&&(!ru||qi&&8<qi&&11>=qi),al=" ",iu=!1;function ai(t,r){switch(t){case"keyup":return kc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function ip(t,r){switch(t){case"compositionend":return hs(r);case"keypress":return r.which!==32?null:(iu=!0,al);case"textInput":return t=r.data,t===al&&iu?null:t;default:return null}}function Sc(t,r){if(fs)return t==="compositionend"||!ru&&ai(t,r)?(t=fr(),Vn=hr=$t=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ga&&r.locale!=="ko"?null:r.data;default:return null}}var sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function su(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!sp[t.type]:r==="textarea"}function ll(t,r,a,p){xn(p),r=To(r,"onChange"),0<r.length&&(a=new da("onChange","change",null,a,p),t.push({event:a,listeners:r}))}var Si=null,Lr=null;function _c(t){vl(t,0)}function ya(t){var r=Cn(t);if(Ft(r))return t}function op(t,r){if(t==="change")return r}var Cc=!1;if(C){var ou;if(C){var ul="oninput"in document;if(!ul){var au=document.createElement("div");au.setAttribute("oninput","return;"),ul=typeof au.oninput=="function"}ou=ul}else ou=!1;Cc=ou&&(!document.documentMode||9<document.documentMode)}function wo(){Si&&(Si.detachEvent("onpropertychange",lu),Lr=Si=null)}function lu(t){if(t.propertyName==="value"&&ya(Lr)){var r=[];ll(r,Lr,t,rt(t)),In(_c,r)}}function Tc(t,r,a){t==="focusin"?(wo(),Si=r,Lr=a,Si.attachEvent("onpropertychange",lu)):t==="focusout"&&wo()}function uu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ya(Lr)}function cl(t,r){if(t==="click")return ya(r)}function jc(t,r){if(t==="input"||t==="change")return ya(r)}function dl(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var _n=typeof Object.is=="function"?Object.is:dl;function ko(t,r){if(_n(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),p=Object.keys(r);if(a.length!==p.length)return!1;for(p=0;p<a.length;p++){var m=a[p];if(!w.call(r,m)||!_n(t[m],r[m]))return!1}return!0}function pl(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hl(t,r){var a=pl(t);t=0;for(var p;a;){if(a.nodeType===3){if(p=t+a.textContent.length,t<=r&&p>=r)return{node:a,offset:r-t};t=p}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pl(a)}}function cu(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?cu(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function du(){for(var t=window,r=Yt();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Yt(t.document)}return r}function va(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function ap(t){var r=du(),a=t.focusedElem,p=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&cu(a.ownerDocument.documentElement,a)){if(p!==null&&va(a)){if(r=p.start,t=p.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var m=a.textContent.length,x=Math.min(p.start,m);p=p.end===void 0?x:Math.min(p.end,m),!t.extend&&x>p&&(m=p,p=x,x=m),m=hl(a,x);var R=hl(a,p);m&&R&&(t.rangeCount!==1||t.anchorNode!==m.node||t.anchorOffset!==m.offset||t.focusNode!==R.node||t.focusOffset!==R.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),t.removeAllRanges(),x>p?(t.addRange(r),t.extend(R.node,R.offset)):(r.setEnd(R.node,R.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lp=C&&"documentMode"in document&&11>=document.documentMode,So=null,Ki=null,_i=null,ms=!1;function fl(t,r,a){var p=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ms||So==null||So!==Yt(p)||(p=So,"selectionStart"in p&&va(p)?p={start:p.selectionStart,end:p.selectionEnd}:(p=(p.ownerDocument&&p.ownerDocument.defaultView||window).getSelection(),p={anchorNode:p.anchorNode,anchorOffset:p.anchorOffset,focusNode:p.focusNode,focusOffset:p.focusOffset}),_i&&ko(_i,p)||(_i=p,p=To(Ki,"onSelect"),0<p.length&&(r=new da("onSelect","select",null,r,a),t.push({event:r,listeners:p}),r.target=So)))}function _o(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Fs={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},xa={},gs={};C&&(gs=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Ci(t){if(xa[t])return xa[t];if(!Fs[t])return t;var r=Fs[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in gs)return xa[t]=r[a];return t}var sr=Ci("animationend"),Gi=Ci("animationiteration"),Yi=Ci("animationstart"),ba=Ci("transitionend"),Nc=new Map,pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(t,r){Nc.set(t,r),v(r,[t])}for(var ml=0;ml<pu.length;ml++){var wa=pu[ml],gl=wa.toLowerCase(),up=wa[0].toUpperCase()+wa.slice(1);Yr(gl,"on"+up)}Yr(sr,"onAnimationEnd"),Yr(Gi,"onAnimationIteration"),Yr(Yi,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(ba,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),v("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),v("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),v("onBeforeInput",["compositionend","keypress","textInput","paste"]),v("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ec=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function yl(t,r,a){var p=t.type||"unknown-event";t.currentTarget=a,as(p,r,void 0,t),t.currentTarget=null}function vl(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var p=t[a],m=p.event;p=p.listeners;e:{var x=void 0;if(r)for(var R=p.length-1;0<=R;R--){var X=p[R],ee=X.instance,me=X.currentTarget;if(X=X.listener,ee!==x&&m.isPropagationStopped())break e;yl(m,X,me),x=ee}else for(R=0;R<p.length;R++){if(X=p[R],ee=X.instance,me=X.currentTarget,X=X.listener,ee!==x&&m.isPropagationStopped())break e;yl(m,X,me),x=ee}}}if($r)throw t=Or,$r=!1,Or=null,t}function Wt(t,r){var a=r[fu];a===void 0&&(a=r[fu]=new Set);var p=t+"__bubble";a.has(p)||(Lc(r,t,2,!1),a.add(p))}function Co(t,r,a){var p=0;r&&(p|=4),Lc(a,t,p,r)}var ka="_reactListening"+Math.random().toString(36).slice(2);function ys(t){if(!t[ka]){t[ka]=!0,f.forEach(function(a){a!=="selectionchange"&&(Ec.has(a)||Co(a,!1,t),Co(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ka]||(r[ka]=!0,Co("selectionchange",!1,r))}}function Lc(t,r,a,p){switch(cn(r)){case 1:var m=we;break;case 4:m=Ee;break;default:m=nt}a=m.bind(null,r,a,t),m=void 0,!gi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),p?m!==void 0?t.addEventListener(r,a,{capture:!0,passive:m}):t.addEventListener(r,a,!0):m!==void 0?t.addEventListener(r,a,{passive:m}):t.addEventListener(r,a,!1)}function hu(t,r,a,p,m){var x=p;if((r&1)===0&&(r&2)===0&&p!==null)e:for(;;){if(p===null)return;var R=p.tag;if(R===3||R===4){var X=p.stateNode.containerInfo;if(X===m||X.nodeType===8&&X.parentNode===m)break;if(R===4)for(R=p.return;R!==null;){var ee=R.tag;if((ee===3||ee===4)&&(ee=R.stateNode.containerInfo,ee===m||ee.nodeType===8&&ee.parentNode===m))return;R=R.return}for(;X!==null;){if(R=Ln(X),R===null)return;if(ee=R.tag,ee===5||ee===6){p=x=R;continue e}X=X.parentNode}}p=p.return}In(function(){var me=x,Ae=rt(a),De=[];e:{var Le=Nc.get(t);if(Le!==void 0){var Xe=da,it=t;switch(t){case"keypress":if(dn(a)===0)break e;case"keydown":case"keyup":Xe=ma;break;case"focusin":it="focus",Xe=Zl;break;case"focusout":it="blur",Xe=Zl;break;case"beforeblur":case"afterblur":Xe=Zl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=Ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=Vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=nu;break;case sr:case Gi:case Yi:Xe=Xd;break;case ba:Xe=np;break;case"scroll":Xe=Gd;break;case"wheel":Xe=wc;break;case"copy":case"cut":case"paste":Xe=ol;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=tu}var st=(r&4)!==0,qn=!st&&t==="scroll",ue=st?Le!==null?Le+"Capture":null:Le;st=[];for(var re=me,de;re!==null;){de=re;var We=de.stateNode;if(de.tag===5&&We!==null&&(de=We,ue!==null&&(We=pr(re,ue),We!=null&&st.push(Sa(re,We,de)))),qn)break;re=re.return}0<st.length&&(Le=new Xe(Le,it,null,a,Ae),De.push({event:Le,listeners:st}))}}if((r&7)===0){e:{if(Le=t==="mouseover"||t==="pointerover",Xe=t==="mouseout"||t==="pointerout",Le&&a!==mi&&(it=a.relatedTarget||a.fromElement)&&(Ln(it)||it[Xi]))break e;if((Xe||Le)&&(Le=Ae.window===Ae?Ae:(Le=Ae.ownerDocument)?Le.defaultView||Le.parentWindow:window,Xe?(it=a.relatedTarget||a.toElement,Xe=me,it=it?Ln(it):null,it!==null&&(qn=On(it),it!==qn||it.tag!==5&&it.tag!==6)&&(it=null)):(Xe=null,it=me),Xe!==it)){if(st=Ql,We="onMouseLeave",ue="onMouseEnter",re="mouse",(t==="pointerout"||t==="pointerover")&&(st=tu,We="onPointerLeave",ue="onPointerEnter",re="pointer"),qn=Xe==null?Le:Cn(Xe),de=it==null?Le:Cn(it),Le=new st(We,re+"leave",Xe,a,Ae),Le.target=qn,Le.relatedTarget=de,We=null,Ln(Ae)===me&&(st=new st(ue,re+"enter",it,a,Ae),st.target=de,st.relatedTarget=qn,We=st),qn=We,Xe&&it)t:{for(st=Xe,ue=it,re=0,de=st;de;de=vs(de))re++;for(de=0,We=ue;We;We=vs(We))de++;for(;0<re-de;)st=vs(st),re--;for(;0<de-re;)ue=vs(ue),de--;for(;re--;){if(st===ue||ue!==null&&st===ue.alternate)break t;st=vs(st),ue=vs(ue)}st=null}else st=null;Xe!==null&&Hs(De,Le,Xe,st,!1),it!==null&&qn!==null&&Hs(De,qn,it,st,!0)}}e:{if(Le=me?Cn(me):window,Xe=Le.nodeName&&Le.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&Le.type==="file")var lt=op;else if(su(Le))if(Cc)lt=jc;else{lt=uu;var ht=Tc}else(Xe=Le.nodeName)&&Xe.toLowerCase()==="input"&&(Le.type==="checkbox"||Le.type==="radio")&&(lt=cl);if(lt&&(lt=lt(t,me))){ll(De,lt,a,Ae);break e}ht&&ht(t,Le,me),t==="focusout"&&(ht=Le._wrapperState)&&ht.controlled&&Le.type==="number"&&yt(Le,"number",Le.value)}switch(ht=me?Cn(me):window,t){case"focusin":(su(ht)||ht.contentEditable==="true")&&(So=ht,Ki=me,_i=null);break;case"focusout":_i=Ki=So=null;break;case"mousedown":ms=!0;break;case"contextmenu":case"mouseup":case"dragend":ms=!1,fl(De,a,Ae);break;case"selectionchange":if(lp)break;case"keydown":case"keyup":fl(De,a,Ae)}var ft;if(ru)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else fs?ai(t,a)&&(wt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(wt="onCompositionStart");wt&&(ga&&a.locale!=="ko"&&(fs||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&fs&&(ft=fr()):($t=Ae,hr="value"in $t?$t.value:$t.textContent,fs=!0)),ht=To(me,wt),0<ht.length&&(wt=new vc(wt,t,null,a,Ae),De.push({event:wt,listeners:ht}),ft?wt.data=ft:(ft=hs(a),ft!==null&&(wt.data=ft)))),(ft=$i?ip(t,a):Sc(t,a))&&(me=To(me,"onBeforeInput"),0<me.length&&(Ae=new vc("onBeforeInput","beforeinput",null,a,Ae),De.push({event:Ae,listeners:me}),Ae.data=ft))}vl(De,r)})}function Sa(t,r,a){return{instance:t,listener:r,currentTarget:a}}function To(t,r){for(var a=r+"Capture",p=[];t!==null;){var m=t,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=pr(t,a),x!=null&&p.unshift(Sa(t,x,m)),x=pr(t,r),x!=null&&p.push(Sa(t,x,m))),t=t.return}return p}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hs(t,r,a,p,m){for(var x=r._reactName,R=[];a!==null&&a!==p;){var X=a,ee=X.alternate,me=X.stateNode;if(ee!==null&&ee===p)break;X.tag===5&&me!==null&&(X=me,m?(ee=pr(a,x),ee!=null&&R.unshift(Sa(a,ee,X))):m||(ee=pr(a,x),ee!=null&&R.push(Sa(a,ee,X)))),a=a.return}R.length!==0&&t.push({event:r,listeners:R})}var _a=/\r\n?/g,cp=/\u0000|\uFFFD/g;function Ca(t){return(typeof t=="string"?t:""+t).replace(_a,`
`).replace(cp,"")}function Ta(t,r,a){if(r=Ca(r),Ca(t)!==r&&a)throw Error(d(425))}function xs(){}var xl=null,Vi=null;function Bs(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,ja=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,Pc=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(t){return Us.resolve(null).then(t).catch(Ac)}:Ji;function Ac(t){setTimeout(function(){throw t})}function bl(t,r){var a=r,p=0;do{var m=a.nextSibling;if(t.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(p===0){t.removeChild(m),_e(r);return}p--}else a!=="$"&&a!=="$?"&&a!=="$!"||p++;a=m}while(a);_e(r)}function bs(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function ws(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Vr,Na="__reactProps$"+Vr,Xi="__reactContainer$"+Vr,fu="__reactEvents$"+Vr,dp="__reactListeners$"+Vr,pp="__reactHandles$"+Vr;function Ln(t){var r=t[Ti];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Xi]||a[Ti]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=ws(t);t!==null;){if(a=t[Ti])return a;t=ws(t)}return r}t=a,a=t.parentNode}return null}function pn(t){return t=t[Ti]||t[Xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(d(33))}function gn(t){return t[Na]||null}var qs=[],jo=-1;function li(t){return{current:t}}function nn(t){0>jo||(t.current=qs[jo],qs[jo]=null,jo--)}function Zt(t,r){jo++,qs[jo]=t.current,t.current=r}var ks={},Jn=li(ks),mr=li(!1),Qi=ks;function No(t,r){var a=t.type.contextTypes;if(!a)return ks;var p=t.stateNode;if(p&&p.__reactInternalMemoizedUnmaskedChildContext===r)return p.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in a)m[x]=r[x];return p&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=m),m}function or(t){return t=t.childContextTypes,t!=null}function Eo(){nn(mr),nn(Jn)}function mu(t,r,a){if(Jn.current!==ks)throw Error(d(168));Zt(Jn,r),Zt(mr,a)}function gu(t,r,a){var p=t.stateNode;if(r=r.childContextTypes,typeof p.getChildContext!="function")return a;p=p.getChildContext();for(var m in p)if(!(m in r))throw Error(d(108,Se(t)||"Unknown",m));return $({},a,p)}function Lo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ks,Qi=Jn.current,Zt(Jn,t),Zt(mr,mr.current),!0}function yu(t,r,a){var p=t.stateNode;if(!p)throw Error(d(169));a?(t=gu(t,r,Qi),p.__reactInternalMemoizedMergedChildContext=t,nn(mr),nn(Jn),Zt(Jn,t)):nn(mr),Zt(mr,a)}var Fr=null,wl=!1,Po=!1;function ji(t){Fr===null?Fr=[t]:Fr.push(t)}function Rc(t){wl=!0,ji(t)}function Ss(){if(!Po&&Fr!==null){Po=!0;var t=0,r=Nt;try{var a=Fr;for(Nt=1;t<a.length;t++){var p=a[t];do p=p(!0);while(p!==null)}Fr=null,wl=!1}catch(m){throw Fr!==null&&(Fr=Fr.slice(t+1)),zi(ii,Ss),m}finally{Nt=r,Po=!1}}return null}var $s=[],Xn=0,At=null,Pr=0,zn=[],Fn=0,_s=null,ui=1,Ni="";function Ks(t,r){$s[Xn++]=Pr,$s[Xn++]=At,At=t,Pr=r}function kl(t,r,a){zn[Fn++]=ui,zn[Fn++]=Ni,zn[Fn++]=_s,_s=t;var p=ui;t=Ni;var m=32-ge(p)-1;p&=~(1<<m),a+=1;var x=32-ge(r)+m;if(30<x){var R=m-m%5;x=(p&(1<<R)-1).toString(32),p>>=R,m-=R,ui=1<<32-ge(r)+m|a<<m|p,Ni=x+t}else ui=1<<x|a<<m|p,Ni=t}function Gs(t){t.return!==null&&(Ks(t,1),kl(t,1,0))}function Sl(t){for(;t===At;)At=$s[--Xn],$s[Xn]=null,Pr=$s[--Xn],$s[Xn]=null;for(;t===_s;)_s=zn[--Fn],zn[Fn]=null,Ni=zn[--Fn],zn[Fn]=null,ui=zn[--Fn],zn[Fn]=null}var gr=null,Pn=null,rn=!1,Jr=null;function Ic(t,r){var a=Oi(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function Ea(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,gr=t,Pn=bs(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,gr=t,Pn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=_s!==null?{id:ui,overflow:Ni}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Oi(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,gr=t,Pn=null,!0):!1;default:return!1}}function La(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _l(t){if(rn){var r=Pn;if(r){var a=r;if(!Ea(t,r)){if(La(t))throw Error(d(418));r=bs(a.nextSibling);var p=gr;r&&Ea(t,r)?Ic(p,a):(t.flags=t.flags&-4097|2,rn=!1,gr=t)}}else{if(La(t))throw Error(d(418));t.flags=t.flags&-4097|2,rn=!1,gr=t}}}function Oc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gr=t}function Pa(t){if(t!==gr)return!1;if(!rn)return Oc(t),rn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Bs(t.type,t.memoizedProps)),r&&(r=Pn)){if(La(t))throw Dc(),Error(d(418));for(;r;)Ic(t,r),r=bs(r.nextSibling)}if(Oc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){Pn=bs(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}Pn=null}}else Pn=gr?bs(t.stateNode.nextSibling):null;return!0}function Dc(){for(var t=Pn;t;)t=bs(t.nextSibling)}function Ao(){Pn=gr=null,rn=!1}function Ro(t){Jr===null?Jr=[t]:Jr.push(t)}var Mc=H.ReactCurrentBatchConfig;function Aa(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(d(309));var p=a.stateNode}if(!p)throw Error(d(147,t));var m=p,x=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(R){var X=m.refs;R===null?delete X[x]:X[x]=R},r._stringRef=x,r)}if(typeof t!="string")throw Error(d(284));if(!a._owner)throw Error(d(290,t))}return t}function Cl(t,r){throw t=Object.prototype.toString.call(r),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function vu(t){var r=t._init;return r(t._payload)}function Ys(t){function r(ue,re){if(t){var de=ue.deletions;de===null?(ue.deletions=[re],ue.flags|=16):de.push(re)}}function a(ue,re){if(!t)return null;for(;re!==null;)r(ue,re),re=re.sibling;return null}function p(ue,re){for(ue=new Map;re!==null;)re.key!==null?ue.set(re.key,re):ue.set(re.index,re),re=re.sibling;return ue}function m(ue,re){return ue=Xo(ue,re),ue.index=0,ue.sibling=null,ue}function x(ue,re,de){return ue.index=de,t?(de=ue.alternate,de!==null?(de=de.index,de<re?(ue.flags|=2,re):de):(ue.flags|=2,re)):(ue.flags|=1048576,re)}function R(ue){return t&&ue.alternate===null&&(ue.flags|=2),ue}function X(ue,re,de,We){return re===null||re.tag!==6?(re=Cp(de,ue.mode,We),re.return=ue,re):(re=m(re,de),re.return=ue,re)}function ee(ue,re,de,We){var lt=de.type;return lt===ae?Ae(ue,re,de.props.children,We,de.key):re!==null&&(re.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===Q&&vu(lt)===re.type)?(We=m(re,de.props),We.ref=Aa(ue,re,de),We.return=ue,We):(We=ad(de.type,de.key,de.props,null,ue.mode,We),We.ref=Aa(ue,re,de),We.return=ue,We)}function me(ue,re,de,We){return re===null||re.tag!==4||re.stateNode.containerInfo!==de.containerInfo||re.stateNode.implementation!==de.implementation?(re=Tp(de,ue.mode,We),re.return=ue,re):(re=m(re,de.children||[]),re.return=ue,re)}function Ae(ue,re,de,We,lt){return re===null||re.tag!==7?(re=Va(de,ue.mode,We,lt),re.return=ue,re):(re=m(re,de),re.return=ue,re)}function De(ue,re,de){if(typeof re=="string"&&re!==""||typeof re=="number")return re=Cp(""+re,ue.mode,de),re.return=ue,re;if(typeof re=="object"&&re!==null){switch(re.$$typeof){case J:return de=ad(re.type,re.key,re.props,null,ue.mode,de),de.ref=Aa(ue,null,re),de.return=ue,de;case ce:return re=Tp(re,ue.mode,de),re.return=ue,re;case Q:var We=re._init;return De(ue,We(re._payload),de)}if(Qe(re)||P(re))return re=Va(re,ue.mode,de,null),re.return=ue,re;Cl(ue,re)}return null}function Le(ue,re,de,We){var lt=re!==null?re.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return lt!==null?null:X(ue,re,""+de,We);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case J:return de.key===lt?ee(ue,re,de,We):null;case ce:return de.key===lt?me(ue,re,de,We):null;case Q:return lt=de._init,Le(ue,re,lt(de._payload),We)}if(Qe(de)||P(de))return lt!==null?null:Ae(ue,re,de,We,null);Cl(ue,de)}return null}function Xe(ue,re,de,We,lt){if(typeof We=="string"&&We!==""||typeof We=="number")return ue=ue.get(de)||null,X(re,ue,""+We,lt);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case J:return ue=ue.get(We.key===null?de:We.key)||null,ee(re,ue,We,lt);case ce:return ue=ue.get(We.key===null?de:We.key)||null,me(re,ue,We,lt);case Q:var ht=We._init;return Xe(ue,re,de,ht(We._payload),lt)}if(Qe(We)||P(We))return ue=ue.get(de)||null,Ae(re,ue,We,lt,null);Cl(re,We)}return null}function it(ue,re,de,We){for(var lt=null,ht=null,ft=re,wt=re=0,ur=null;ft!==null&&wt<de.length;wt++){ft.index>wt?(ur=ft,ft=null):ur=ft.sibling;var Ht=Le(ue,ft,de[wt],We);if(Ht===null){ft===null&&(ft=ur);break}t&&ft&&Ht.alternate===null&&r(ue,ft),re=x(Ht,re,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht,ft=ur}if(wt===de.length)return a(ue,ft),rn&&Ks(ue,wt),lt;if(ft===null){for(;wt<de.length;wt++)ft=De(ue,de[wt],We),ft!==null&&(re=x(ft,re,wt),ht===null?lt=ft:ht.sibling=ft,ht=ft);return rn&&Ks(ue,wt),lt}for(ft=p(ue,ft);wt<de.length;wt++)ur=Xe(ft,ue,wt,de[wt],We),ur!==null&&(t&&ur.alternate!==null&&ft.delete(ur.key===null?wt:ur.key),re=x(ur,re,wt),ht===null?lt=ur:ht.sibling=ur,ht=ur);return t&&ft.forEach(function(Qo){return r(ue,Qo)}),rn&&Ks(ue,wt),lt}function st(ue,re,de,We){var lt=P(de);if(typeof lt!="function")throw Error(d(150));if(de=lt.call(de),de==null)throw Error(d(151));for(var ht=lt=null,ft=re,wt=re=0,ur=null,Ht=de.next();ft!==null&&!Ht.done;wt++,Ht=de.next()){ft.index>wt?(ur=ft,ft=null):ur=ft.sibling;var Qo=Le(ue,ft,Ht.value,We);if(Qo===null){ft===null&&(ft=ur);break}t&&ft&&Qo.alternate===null&&r(ue,ft),re=x(Qo,re,wt),ht===null?lt=Qo:ht.sibling=Qo,ht=Qo,ft=ur}if(Ht.done)return a(ue,ft),rn&&Ks(ue,wt),lt;if(ft===null){for(;!Ht.done;wt++,Ht=de.next())Ht=De(ue,Ht.value,We),Ht!==null&&(re=x(Ht,re,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht);return rn&&Ks(ue,wt),lt}for(ft=p(ue,ft);!Ht.done;wt++,Ht=de.next())Ht=Xe(ft,ue,wt,Ht.value,We),Ht!==null&&(t&&Ht.alternate!==null&&ft.delete(Ht.key===null?wt:Ht.key),re=x(Ht,re,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht);return t&&ft.forEach(function(Eg){return r(ue,Eg)}),rn&&Ks(ue,wt),lt}function qn(ue,re,de,We){if(typeof de=="object"&&de!==null&&de.type===ae&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case J:e:{for(var lt=de.key,ht=re;ht!==null;){if(ht.key===lt){if(lt=de.type,lt===ae){if(ht.tag===7){a(ue,ht.sibling),re=m(ht,de.props.children),re.return=ue,ue=re;break e}}else if(ht.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===Q&&vu(lt)===ht.type){a(ue,ht.sibling),re=m(ht,de.props),re.ref=Aa(ue,ht,de),re.return=ue,ue=re;break e}a(ue,ht);break}else r(ue,ht);ht=ht.sibling}de.type===ae?(re=Va(de.props.children,ue.mode,We,de.key),re.return=ue,ue=re):(We=ad(de.type,de.key,de.props,null,ue.mode,We),We.ref=Aa(ue,re,de),We.return=ue,ue=We)}return R(ue);case ce:e:{for(ht=de.key;re!==null;){if(re.key===ht)if(re.tag===4&&re.stateNode.containerInfo===de.containerInfo&&re.stateNode.implementation===de.implementation){a(ue,re.sibling),re=m(re,de.children||[]),re.return=ue,ue=re;break e}else{a(ue,re);break}else r(ue,re);re=re.sibling}re=Tp(de,ue.mode,We),re.return=ue,ue=re}return R(ue);case Q:return ht=de._init,qn(ue,re,ht(de._payload),We)}if(Qe(de))return it(ue,re,de,We);if(P(de))return st(ue,re,de,We);Cl(ue,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,re!==null&&re.tag===6?(a(ue,re.sibling),re=m(re,de),re.return=ue,ue=re):(a(ue,re),re=Cp(de,ue.mode,We),re.return=ue,ue=re),R(ue)):a(ue,re)}return qn}var Cs=Ys(!0),Ra=Ys(!1),Ia=li(null),Io=null,Vs=null,xu=null;function Tl(){xu=Vs=Io=null}function Wn(t){var r=Ia.current;nn(Ia),t._currentValue=r}function Oo(t,r,a){for(;t!==null;){var p=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,p!==null&&(p.childLanes|=r)):p!==null&&(p.childLanes&r)!==r&&(p.childLanes|=r),t===a)break;t=t.return}}function Js(t,r){Io=t,xu=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(er=!0),t.firstContext=null)}function Wr(t){var r=t._currentValue;if(xu!==t)if(t={context:t,memoizedValue:r,next:null},Vs===null){if(Io===null)throw Error(d(308));Vs=t,Io.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return r}var Ts=null;function js(t){Ts===null?Ts=[t]:Ts.push(t)}function Oa(t,r,a,p){var m=r.interleaved;return m===null?(a.next=a,js(r)):(a.next=m.next,m.next=a),r.interleaved=a,Ei(t,p)}function Ei(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Zi=!1;function jl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xs(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function ci(t,r,a){var p=t.updateQueue;if(p===null)return null;if(p=p.shared,(dt&2)!==0){var m=p.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),p.pending=r,Ei(t,a)}return m=p.interleaved,m===null?(r.next=r,js(p)):(r.next=m.next,m.next=r),p.interleaved=r,Ei(t,a)}function Da(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var p=r.lanes;p&=t.pendingLanes,a|=p,r.lanes=a,Hi(t,a)}}function Do(t,r){var a=t.updateQueue,p=t.alternate;if(p!==null&&(p=p.updateQueue,a===p)){var m=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var R={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?m=x=R:x=x.next=R,a=a.next}while(a!==null);x===null?m=x=r:x=x.next=r}else m=x=r;a={baseState:p.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:p.shared,effects:p.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function Nl(t,r,a,p){var m=t.updateQueue;Zi=!1;var x=m.firstBaseUpdate,R=m.lastBaseUpdate,X=m.shared.pending;if(X!==null){m.shared.pending=null;var ee=X,me=ee.next;ee.next=null,R===null?x=me:R.next=me,R=ee;var Ae=t.alternate;Ae!==null&&(Ae=Ae.updateQueue,X=Ae.lastBaseUpdate,X!==R&&(X===null?Ae.firstBaseUpdate=me:X.next=me,Ae.lastBaseUpdate=ee))}if(x!==null){var De=m.baseState;R=0,Ae=me=ee=null,X=x;do{var Le=X.lane,Xe=X.eventTime;if((p&Le)===Le){Ae!==null&&(Ae=Ae.next={eventTime:Xe,lane:0,tag:X.tag,payload:X.payload,callback:X.callback,next:null});e:{var it=t,st=X;switch(Le=r,Xe=a,st.tag){case 1:if(it=st.payload,typeof it=="function"){De=it.call(Xe,De,Le);break e}De=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=st.payload,Le=typeof it=="function"?it.call(Xe,De,Le):it,Le==null)break e;De=$({},De,Le);break e;case 2:Zi=!0}}X.callback!==null&&X.lane!==0&&(t.flags|=64,Le=m.effects,Le===null?m.effects=[X]:Le.push(X))}else Xe={eventTime:Xe,lane:Le,tag:X.tag,payload:X.payload,callback:X.callback,next:null},Ae===null?(me=Ae=Xe,ee=De):Ae=Ae.next=Xe,R|=Le;if(X=X.next,X===null){if(X=m.shared.pending,X===null)break;Le=X,X=Le.next,Le.next=null,m.lastBaseUpdate=Le,m.shared.pending=null}}while(!0);if(Ae===null&&(ee=De),m.baseState=ee,m.firstBaseUpdate=me,m.lastBaseUpdate=Ae,r=m.shared.interleaved,r!==null){m=r;do R|=m.lane,m=m.next;while(m!==r)}else x===null&&(m.shared.lanes=0);kr|=R,t.lanes=R,t.memoizedState=De}}function Qs(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var p=t[r],m=p.callback;if(m!==null){if(p.callback=null,p=a,typeof m!="function")throw Error(d(191,m));m.call(p)}}}var Mo={},di=li(Mo),zo=li(Mo),es=li(Mo);function pi(t){if(t===Mo)throw Error(d(174));return t}function Zs(t,r){switch(Zt(es,r),Zt(zo,t),Zt(di,Mo),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ot(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=ot(r,t)}nn(di),Zt(di,r)}function Pi(){nn(di),nn(zo),nn(es)}function bu(t){pi(es.current);var r=pi(di.current),a=ot(r,t.type);r!==a&&(Zt(zo,t),Zt(di,a))}function wu(t){zo.current===t&&(nn(di),nn(zo))}var ln=li(0);function hi(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ns=[];function eo(){for(var t=0;t<Ns.length;t++)Ns[t]._workInProgressVersionPrimary=null;Ns.length=0}var El=H.ReactCurrentDispatcher,Ll=H.ReactCurrentBatchConfig,to=0,hn=null,Hn=null,Ot=null,Ma=!1,za=!1,Fa=0,hp=0;function Zn(){throw Error(d(321))}function Pl(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!_n(t[a],r[a]))return!1;return!0}function Al(t,r,a,p,m,x){if(to=x,hn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,El.current=t===null||t.memoizedState===null?mp:Ru,t=a(p,m),za){x=0;do{if(za=!1,Fa=0,25<=x)throw Error(d(301));x+=1,Ot=Hn=null,r.updateQueue=null,El.current=Ha,t=a(p,m)}while(za)}if(El.current=Wa,r=Hn!==null&&Hn.next!==null,to=0,Ot=Hn=hn=null,Ma=!1,r)throw Error(d(300));return t}function ku(){var t=Fa!==0;return Fa=0,t}function Ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?hn.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Xr(){if(Hn===null){var t=hn.alternate;t=t!==null?t.memoizedState:null}else t=Hn.next;var r=Ot===null?hn.memoizedState:Ot.next;if(r!==null)Ot=r,Hn=t;else{if(t===null)throw Error(d(310));Hn=t,t={memoizedState:Hn.memoizedState,baseState:Hn.baseState,baseQueue:Hn.baseQueue,queue:Hn.queue,next:null},Ot===null?hn.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Qr(t,r){return typeof r=="function"?r(t):r}function no(t){var r=Xr(),a=r.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var p=Hn,m=p.baseQueue,x=a.pending;if(x!==null){if(m!==null){var R=m.next;m.next=x.next,x.next=R}p.baseQueue=m=x,a.pending=null}if(m!==null){x=m.next,p=p.baseState;var X=R=null,ee=null,me=x;do{var Ae=me.lane;if((to&Ae)===Ae)ee!==null&&(ee=ee.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),p=me.hasEagerState?me.eagerState:t(p,me.action);else{var De={lane:Ae,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};ee===null?(X=ee=De,R=p):ee=ee.next=De,hn.lanes|=Ae,kr|=Ae}me=me.next}while(me!==null&&me!==x);ee===null?R=p:ee.next=X,_n(p,r.memoizedState)||(er=!0),r.memoizedState=p,r.baseState=R,r.baseQueue=ee,a.lastRenderedState=p}if(t=a.interleaved,t!==null){m=t;do x=m.lane,hn.lanes|=x,kr|=x,m=m.next;while(m!==t)}else m===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Fo(t){var r=Xr(),a=r.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var p=a.dispatch,m=a.pending,x=r.memoizedState;if(m!==null){a.pending=null;var R=m=m.next;do x=t(x,R.action),R=R.next;while(R!==m);_n(x,r.memoizedState)||(er=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),a.lastRenderedState=x}return[x,p]}function Wo(){}function Ri(t,r){var a=hn,p=Xr(),m=r(),x=!_n(p.memoizedState,m);if(x&&(p.memoizedState=m,er=!0),p=p.queue,Tu(ro.bind(null,a,p,t),[t]),p.getSnapshot!==r||x||Ot!==null&&Ot.memoizedState.tag&1){if(a.flags|=2048,Es(9,Fc.bind(null,a,p,m,r),void 0,null),zt===null)throw Error(d(349));(to&30)!==0||zc(a,r,m)}return m}function zc(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Fc(t,r,a,p){r.value=a,r.getSnapshot=p,Su(r)&&_u(t)}function ro(t,r,a){return a(function(){Su(r)&&_u(t)})}function Su(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!_n(t,a)}catch{return!0}}function _u(t){var r=Ei(t,1);r!==null&&ns(r,t,1,-1)}function Cu(t){var r=Ai();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:t},r.queue=t,t=t.dispatch=Lu.bind(null,hn,t),[r.memoizedState,t]}function Es(t,r,a,p){return t={tag:t,create:r,destroy:a,deps:p,next:null},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(p=a.next,a.next=t,t.next=p,r.lastEffect=t)),t}function io(){return Xr().memoizedState}function Ho(t,r,a,p){var m=Ai();hn.flags|=t,m.memoizedState=Es(1|r,a,void 0,p===void 0?null:p)}function Bo(t,r,a,p){var m=Xr();p=p===void 0?null:p;var x=void 0;if(Hn!==null){var R=Hn.memoizedState;if(x=R.destroy,p!==null&&Pl(p,R.deps)){m.memoizedState=Es(r,a,x,p);return}}hn.flags|=t,m.memoizedState=Es(1|r,a,x,p)}function Rl(t,r){return Ho(8390656,8,t,r)}function Tu(t,r){return Bo(2048,8,t,r)}function Uo(t,r){return Bo(4,2,t,r)}function ju(t,r){return Bo(4,4,t,r)}function Wc(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Nu(t,r,a){return a=a!=null?a.concat([t]):null,Bo(4,4,Wc.bind(null,r,t),a)}function qo(){}function Hc(t,r){var a=Xr();r=r===void 0?null:r;var p=a.memoizedState;return p!==null&&r!==null&&Pl(r,p[1])?p[0]:(a.memoizedState=[t,r],t)}function Bc(t,r){var a=Xr();r=r===void 0?null:r;var p=a.memoizedState;return p!==null&&r!==null&&Pl(r,p[1])?p[0]:(t=t(),a.memoizedState=[t,r],t)}function $o(t,r,a){return(to&21)===0?(t.baseState&&(t.baseState=!1,er=!0),t.memoizedState=a):(_n(a,r)||(a=oa(),hn.lanes|=a,kr|=a,t.baseState=!0),r)}function Uc(t,r){var a=Nt;Nt=a!==0&&4>a?a:4,t(!0);var p=Ll.transition;Ll.transition={};try{t(!1),r()}finally{Nt=a,Ll.transition=p}}function Eu(){return Xr().memoizedState}function fp(t,r,a){var p=Vo(t);if(a={lane:p,action:a,hasEagerState:!1,eagerState:null,next:null},Pu(t))qc(r,a);else if(a=Oa(t,r,a,p),a!==null){var m=Hr();ns(a,t,p,m),Au(a,r,p)}}function Lu(t,r,a){var p=Vo(t),m={lane:p,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pu(t))qc(r,m);else{var x=t.alternate;if(t.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var R=r.lastRenderedState,X=x(R,a);if(m.hasEagerState=!0,m.eagerState=X,_n(X,R)){var ee=r.interleaved;ee===null?(m.next=m,js(r)):(m.next=ee.next,ee.next=m),r.interleaved=m;return}}catch{}finally{}a=Oa(t,r,m,p),a!==null&&(m=Hr(),ns(a,t,p,m),Au(a,r,p))}}function Pu(t){var r=t.alternate;return t===hn||r!==null&&r===hn}function qc(t,r){za=Ma=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function Au(t,r,a){if((a&4194240)!==0){var p=r.lanes;p&=t.pendingLanes,a|=p,r.lanes=a,Hi(t,a)}}var Wa={readContext:Wr,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useInsertionEffect:Zn,useLayoutEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useMutableSource:Zn,useSyncExternalStore:Zn,useId:Zn,unstable_isNewReconciler:!1},mp={readContext:Wr,useCallback:function(t,r){return Ai().memoizedState=[t,r===void 0?null:r],t},useContext:Wr,useEffect:Rl,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Ho(4194308,4,Wc.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Ho(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ho(4,2,t,r)},useMemo:function(t,r){var a=Ai();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var p=Ai();return r=a!==void 0?a(r):r,p.memoizedState=p.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},p.queue=t,t=t.dispatch=fp.bind(null,hn,t),[p.memoizedState,t]},useRef:function(t){var r=Ai();return t={current:t},r.memoizedState=t},useState:Cu,useDebugValue:qo,useDeferredValue:function(t){return Ai().memoizedState=t},useTransition:function(){var t=Cu(!1),r=t[0];return t=Uc.bind(null,t[1]),Ai().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var p=hn,m=Ai();if(rn){if(a===void 0)throw Error(d(407));a=a()}else{if(a=r(),zt===null)throw Error(d(349));(to&30)!==0||zc(p,r,a)}m.memoizedState=a;var x={value:a,getSnapshot:r};return m.queue=x,Rl(ro.bind(null,p,x,t),[t]),p.flags|=2048,Es(9,Fc.bind(null,p,x,a,r),void 0,null),a},useId:function(){var t=Ai(),r=zt.identifierPrefix;if(rn){var a=Ni,p=ui;a=(p&~(1<<32-ge(p)-1)).toString(32)+a,r=":"+r+"R"+a,a=Fa++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=hp++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Ru={readContext:Wr,useCallback:Hc,useContext:Wr,useEffect:Tu,useImperativeHandle:Nu,useInsertionEffect:Uo,useLayoutEffect:ju,useMemo:Bc,useReducer:no,useRef:io,useState:function(){return no(Qr)},useDebugValue:qo,useDeferredValue:function(t){var r=Xr();return $o(r,Hn.memoizedState,t)},useTransition:function(){var t=no(Qr)[0],r=Xr().memoizedState;return[t,r]},useMutableSource:Wo,useSyncExternalStore:Ri,useId:Eu,unstable_isNewReconciler:!1},Ha={readContext:Wr,useCallback:Hc,useContext:Wr,useEffect:Tu,useImperativeHandle:Nu,useInsertionEffect:Uo,useLayoutEffect:ju,useMemo:Bc,useReducer:Fo,useRef:io,useState:function(){return Fo(Qr)},useDebugValue:qo,useDeferredValue:function(t){var r=Xr();return Hn===null?r.memoizedState=t:$o(r,Hn.memoizedState,t)},useTransition:function(){var t=Fo(Qr)[0],r=Xr().memoizedState;return[t,r]},useMutableSource:Wo,useSyncExternalStore:Ri,useId:Eu,unstable_isNewReconciler:!1};function yr(t,r){if(t&&t.defaultProps){r=$({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function Iu(t,r,a,p){r=t.memoizedState,a=a(p,r),a=a==null?r:$({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ba={isMounted:function(t){return(t=t._reactInternals)?On(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var p=Hr(),m=Vo(t),x=Li(p,m);x.payload=r,a!=null&&(x.callback=a),r=ci(t,x,m),r!==null&&(ns(r,t,m,p),Da(r,t,m))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var p=Hr(),m=Vo(t),x=Li(p,m);x.tag=1,x.payload=r,a!=null&&(x.callback=a),r=ci(t,x,m),r!==null&&(ns(r,t,m,p),Da(r,t,m))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Hr(),p=Vo(t),m=Li(a,p);m.tag=2,r!=null&&(m.callback=r),r=ci(t,m,p),r!==null&&(ns(r,t,p,a),Da(r,t,p))}};function $c(t,r,a,p,m,x,R){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(p,x,R):r.prototype&&r.prototype.isPureReactComponent?!ko(a,p)||!ko(m,x):!0}function Kc(t,r,a){var p=!1,m=ks,x=r.contextType;return typeof x=="object"&&x!==null?x=Wr(x):(m=or(r)?Qi:Jn.current,p=r.contextTypes,x=(p=p!=null)?No(t,m):ks),r=new r(a,x),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ba,t.stateNode=r,r._reactInternals=t,p&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=m,t.__reactInternalMemoizedMaskedChildContext=x),r}function Gc(t,r,a,p){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,p),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,p),r.state!==t&&Ba.enqueueReplaceState(r,r.state,null)}function Ou(t,r,a,p){var m=t.stateNode;m.props=a,m.state=t.memoizedState,m.refs={},jl(t);var x=r.contextType;typeof x=="object"&&x!==null?m.context=Wr(x):(x=or(r)?Qi:Jn.current,m.context=No(t,x)),m.state=t.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Iu(t,r,x,a),m.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Ba.enqueueReplaceState(m,m.state,null),Nl(t,a,m,p),m.state=t.memoizedState),typeof m.componentDidMount=="function"&&(t.flags|=4194308)}function so(t,r){try{var a="",p=r;do a+=qe(p),p=p.return;while(p);var m=a}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:t,source:r,stack:m,digest:null}}function Du(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function Mu(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Yc=typeof WeakMap=="function"?WeakMap:Map;function Il(t,r,a){a=Li(-1,a),a.tag=3,a.payload={element:null};var p=r.value;return a.callback=function(){td||(td=!0,yp=p),Mu(t,r)},a}function zu(t,r,a){a=Li(-1,a),a.tag=3;var p=t.type.getDerivedStateFromError;if(typeof p=="function"){var m=r.value;a.payload=function(){return p(m)},a.callback=function(){Mu(t,r)}}var x=t.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){Mu(t,r),typeof p!="function"&&(Go===null?Go=new Set([this]):Go.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})}),a}function Vc(t,r,a){var p=t.pingCache;if(p===null){p=t.pingCache=new Yc;var m=new Set;p.set(r,m)}else m=p.get(r),m===void 0&&(m=new Set,p.set(r,m));m.has(a)||(m.add(a),t=vg.bind(null,t,r,a),r.then(t,t))}function Fu(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function oo(t,r,a,p,m){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Li(-1,1),r.tag=2,ci(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=m,t)}var Jc=H.ReactCurrentOwner,er=!1;function vr(t,r,a,p){r.child=t===null?Ra(r,null,a,p):Cs(r,t.child,a,p)}function Xc(t,r,a,p,m){a=a.render;var x=r.ref;return Js(r,m),p=Al(t,r,a,p,x,m),a=ku(),t!==null&&!er?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~m,Ar(t,r,m)):(rn&&a&&Gs(r),r.flags|=1,vr(t,r,p,m),r.child)}function Qc(t,r,a,p,m){if(t===null){var x=a.type;return typeof x=="function"&&!_p(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=x,en(t,r,x,p,m)):(t=ad(a.type,null,p,r,r.mode,m),t.ref=r.ref,t.return=r,r.child=t)}if(x=t.child,(t.lanes&m)===0){var R=x.memoizedProps;if(a=a.compare,a=a!==null?a:ko,a(R,p)&&t.ref===r.ref)return Ar(t,r,m)}return r.flags|=1,t=Xo(x,p),t.ref=r.ref,t.return=r,r.child=t}function en(t,r,a,p,m){if(t!==null){var x=t.memoizedProps;if(ko(x,p)&&t.ref===r.ref)if(er=!1,r.pendingProps=p=x,(t.lanes&m)!==0)(t.flags&131072)!==0&&(er=!0);else return r.lanes=t.lanes,Ar(t,r,m)}return ao(t,r,a,p,m)}function Zc(t,r,a){var p=r.pendingProps,m=p.children,x=t!==null?t.memoizedState:null;if(p.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(wr,Ut),Ut|=a;else{if((a&1073741824)===0)return t=x!==null?x.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Zt(wr,Ut),Ut|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},p=x!==null?x.baseLanes:a,Zt(wr,Ut),Ut|=p}else x!==null?(p=x.baseLanes|a,r.memoizedState=null):p=a,Zt(wr,Ut),Ut|=p;return vr(t,r,m,a),r.child}function Ol(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function ao(t,r,a,p,m){var x=or(a)?Qi:Jn.current;return x=No(r,x),Js(r,m),a=Al(t,r,a,p,x,m),p=ku(),t!==null&&!er?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~m,Ar(t,r,m)):(rn&&p&&Gs(r),r.flags|=1,vr(t,r,a,m),r.child)}function Zr(t,r,a,p,m){if(or(a)){var x=!0;Lo(r)}else x=!1;if(Js(r,m),r.stateNode===null)Bl(t,r),Kc(r,a,p),Ou(r,a,p,m),p=!0;else if(t===null){var R=r.stateNode,X=r.memoizedProps;R.props=X;var ee=R.context,me=a.contextType;typeof me=="object"&&me!==null?me=Wr(me):(me=or(a)?Qi:Jn.current,me=No(r,me));var Ae=a.getDerivedStateFromProps,De=typeof Ae=="function"||typeof R.getSnapshotBeforeUpdate=="function";De||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(X!==p||ee!==me)&&Gc(r,R,p,me),Zi=!1;var Le=r.memoizedState;R.state=Le,Nl(r,p,R,m),ee=r.memoizedState,X!==p||Le!==ee||mr.current||Zi?(typeof Ae=="function"&&(Iu(r,a,Ae,p),ee=r.memoizedState),(X=Zi||$c(r,a,X,p,Le,ee,me))?(De||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(r.flags|=4194308)):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=p,r.memoizedState=ee),R.props=p,R.state=ee,R.context=me,p=X):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),p=!1)}else{R=r.stateNode,Xs(t,r),X=r.memoizedProps,me=r.type===r.elementType?X:yr(r.type,X),R.props=me,De=r.pendingProps,Le=R.context,ee=a.contextType,typeof ee=="object"&&ee!==null?ee=Wr(ee):(ee=or(a)?Qi:Jn.current,ee=No(r,ee));var Xe=a.getDerivedStateFromProps;(Ae=typeof Xe=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(X!==De||Le!==ee)&&Gc(r,R,p,ee),Zi=!1,Le=r.memoizedState,R.state=Le,Nl(r,p,R,m);var it=r.memoizedState;X!==De||Le!==it||mr.current||Zi?(typeof Xe=="function"&&(Iu(r,a,Xe,p),it=r.memoizedState),(me=Zi||$c(r,a,me,p,Le,it,ee)||!1)?(Ae||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(p,it,ee),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(p,it,ee)),typeof R.componentDidUpdate=="function"&&(r.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof R.componentDidUpdate!="function"||X===t.memoizedProps&&Le===t.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||X===t.memoizedProps&&Le===t.memoizedState||(r.flags|=1024),r.memoizedProps=p,r.memoizedState=it),R.props=p,R.state=it,R.context=ee,p=me):(typeof R.componentDidUpdate!="function"||X===t.memoizedProps&&Le===t.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||X===t.memoizedProps&&Le===t.memoizedState||(r.flags|=1024),p=!1)}return Ko(t,r,a,p,x,m)}function Ko(t,r,a,p,m,x){Ol(t,r);var R=(r.flags&128)!==0;if(!p&&!R)return m&&yu(r,a,!1),Ar(t,r,x);p=r.stateNode,Jc.current=r;var X=R&&typeof a.getDerivedStateFromError!="function"?null:p.render();return r.flags|=1,t!==null&&R?(r.child=Cs(r,t.child,null,x),r.child=Cs(r,null,X,x)):vr(t,r,X,x),r.memoizedState=p.state,m&&yu(r,a,!0),r.child}function Dl(t){var r=t.stateNode;r.pendingContext?mu(t,r.pendingContext,r.pendingContext!==r.context):r.context&&mu(t,r.context,!1),Zs(t,r.containerInfo)}function Wu(t,r,a,p,m){return Ao(),Ro(m),r.flags|=256,vr(t,r,a,p),r.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function zl(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fl(t,r,a){var p=r.pendingProps,m=ln.current,x=!1,R=(r.flags&128)!==0,X;if((X=R)||(X=t!==null&&t.memoizedState===null?!1:(m&2)!==0),X?(x=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(m|=1),Zt(ln,m&1),t===null)return _l(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(R=p.children,t=p.fallback,x?(p=r.mode,x=r.child,R={mode:"hidden",children:R},(p&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=R):x=ld(R,p,0,null),t=Va(t,p,a,null),x.return=r,t.return=r,x.sibling=t,r.child=x,r.child.memoizedState=zl(a),r.memoizedState=Ml,t):Wl(r,R));if(m=t.memoizedState,m!==null&&(X=m.dehydrated,X!==null))return Hu(t,r,R,p,X,m,a);if(x){x=p.fallback,R=r.mode,m=t.child,X=m.sibling;var ee={mode:"hidden",children:p.children};return(R&1)===0&&r.child!==m?(p=r.child,p.childLanes=0,p.pendingProps=ee,r.deletions=null):(p=Xo(m,ee),p.subtreeFlags=m.subtreeFlags&14680064),X!==null?x=Xo(X,x):(x=Va(x,R,a,null),x.flags|=2),x.return=r,p.return=r,p.sibling=x,r.child=p,p=x,x=r.child,R=t.child.memoizedState,R=R===null?zl(a):{baseLanes:R.baseLanes|a,cachePool:null,transitions:R.transitions},x.memoizedState=R,x.childLanes=t.childLanes&~a,r.memoizedState=Ml,p}return x=t.child,t=x.sibling,p=Xo(x,{mode:"visible",children:p.children}),(r.mode&1)===0&&(p.lanes=a),p.return=r,p.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=p,r.memoizedState=null,p}function Wl(t,r){return r=ld({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Hl(t,r,a,p){return p!==null&&Ro(p),Cs(r,t.child,null,a),t=Wl(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Hu(t,r,a,p,m,x,R){if(a)return r.flags&256?(r.flags&=-257,p=Du(Error(d(422))),Hl(t,r,R,p)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(x=p.fallback,m=r.mode,p=ld({mode:"visible",children:p.children},m,0,null),x=Va(x,m,R,null),x.flags|=2,p.return=r,x.return=r,p.sibling=x,r.child=p,(r.mode&1)!==0&&Cs(r,t.child,null,R),r.child.memoizedState=zl(R),r.memoizedState=Ml,x);if((r.mode&1)===0)return Hl(t,r,R,null);if(m.data==="$!"){if(p=m.nextSibling&&m.nextSibling.dataset,p)var X=p.dgst;return p=X,x=Error(d(419)),p=Du(x,p,void 0),Hl(t,r,R,p)}if(X=(R&t.childLanes)!==0,er||X){if(p=zt,p!==null){switch(R&-R){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(p.suspendedLanes|R))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,Ei(t,m),ns(p,t,m,-1))}return Sp(),p=Du(Error(d(421))),Hl(t,r,R,p)}return m.data==="$?"?(r.flags|=128,r.child=t.child,r=xg.bind(null,t),m._reactRetry=r,null):(t=x.treeContext,Pn=bs(m.nextSibling),gr=r,rn=!0,Jr=null,t!==null&&(zn[Fn++]=ui,zn[Fn++]=Ni,zn[Fn++]=_s,ui=t.id,Ni=t.overflow,_s=r),r=Wl(r,p.children),r.flags|=4096,r)}function Bu(t,r,a){t.lanes|=r;var p=t.alternate;p!==null&&(p.lanes|=r),Oo(t.return,r,a)}function Dt(t,r,a,p,m){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:p,tail:a,tailMode:m}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=p,x.tail=a,x.tailMode=m)}function Uu(t,r,a){var p=r.pendingProps,m=p.revealOrder,x=p.tail;if(vr(t,r,p.children,a),p=ln.current,(p&2)!==0)p=p&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bu(t,a,r);else if(t.tag===19)Bu(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}p&=1}if(Zt(ln,p),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(a=r.child,m=null;a!==null;)t=a.alternate,t!==null&&hi(t)===null&&(m=a),a=a.sibling;a=m,a===null?(m=r.child,r.child=null):(m=a.sibling,a.sibling=null),Dt(r,!1,m,a,x);break;case"backwards":for(a=null,m=r.child,r.child=null;m!==null;){if(t=m.alternate,t!==null&&hi(t)===null){r.child=m;break}t=m.sibling,m.sibling=a,a=m,m=t}Dt(r,!0,a,null,x);break;case"together":Dt(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Bl(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Ar(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),kr|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(d(153));if(r.child!==null){for(t=r.child,a=Xo(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Xo(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function gp(t,r,a){switch(r.tag){case 3:Dl(r),Ao();break;case 5:bu(r);break;case 1:or(r.type)&&Lo(r);break;case 4:Zs(r,r.stateNode.containerInfo);break;case 10:var p=r.type._context,m=r.memoizedProps.value;Zt(Ia,p._currentValue),p._currentValue=m;break;case 13:if(p=r.memoizedState,p!==null)return p.dehydrated!==null?(Zt(ln,ln.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Fl(t,r,a):(Zt(ln,ln.current&1),t=Ar(t,r,a),t!==null?t.sibling:null);Zt(ln,ln.current&1);break;case 19:if(p=(a&r.childLanes)!==0,(t.flags&128)!==0){if(p)return Uu(t,r,a);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Zt(ln,ln.current),p)break;return null;case 22:case 23:return r.lanes=0,Zc(t,r,a)}return Ar(t,r,a)}var Ua,qu,fn,ed;Ua=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},qu=function(){},fn=function(t,r,a,p){var m=t.memoizedProps;if(m!==p){t=r.stateNode,pi(di.current);var x=null;switch(a){case"input":m=Ct(t,m),p=Ct(t,p),x=[];break;case"select":m=$({},m,{value:void 0}),p=$({},p,{value:void 0}),x=[];break;case"textarea":m=oe(t,m),p=oe(t,p),x=[];break;default:typeof m.onClick!="function"&&typeof p.onClick=="function"&&(t.onclick=xs)}qr(a,p);var R;a=null;for(me in m)if(!p.hasOwnProperty(me)&&m.hasOwnProperty(me)&&m[me]!=null)if(me==="style"){var X=m[me];for(R in X)X.hasOwnProperty(R)&&(a||(a={}),a[R]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(g.hasOwnProperty(me)?x||(x=[]):(x=x||[]).push(me,null));for(me in p){var ee=p[me];if(X=m!=null?m[me]:void 0,p.hasOwnProperty(me)&&ee!==X&&(ee!=null||X!=null))if(me==="style")if(X){for(R in X)!X.hasOwnProperty(R)||ee&&ee.hasOwnProperty(R)||(a||(a={}),a[R]="");for(R in ee)ee.hasOwnProperty(R)&&X[R]!==ee[R]&&(a||(a={}),a[R]=ee[R])}else a||(x||(x=[]),x.push(me,a)),a=ee;else me==="dangerouslySetInnerHTML"?(ee=ee?ee.__html:void 0,X=X?X.__html:void 0,ee!=null&&X!==ee&&(x=x||[]).push(me,ee)):me==="children"?typeof ee!="string"&&typeof ee!="number"||(x=x||[]).push(me,""+ee):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(g.hasOwnProperty(me)?(ee!=null&&me==="onScroll"&&Wt("scroll",t),x||X===ee||(x=[])):(x=x||[]).push(me,ee))}a&&(x=x||[]).push("style",a);var me=x;(r.updateQueue=me)&&(r.flags|=4)}},ed=function(t,r,a,p){a!==p&&(r.flags|=4)};function qa(t,r){if(!rn)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var p=null;a!==null;)a.alternate!==null&&(p=a),a=a.sibling;p===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:p.sibling=null}}function ar(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,p=0;if(r)for(var m=t.child;m!==null;)a|=m.lanes|m.childLanes,p|=m.subtreeFlags&14680064,p|=m.flags&14680064,m.return=t,m=m.sibling;else for(m=t.child;m!==null;)a|=m.lanes|m.childLanes,p|=m.subtreeFlags,p|=m.flags,m.return=t,m=m.sibling;return t.subtreeFlags|=p,t.childLanes=a,r}function Ul(t,r,a){var p=r.pendingProps;switch(Sl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ar(r),null;case 1:return or(r.type)&&Eo(),ar(r),null;case 3:return p=r.stateNode,Pi(),nn(mr),nn(Jn),eo(),p.pendingContext&&(p.context=p.pendingContext,p.pendingContext=null),(t===null||t.child===null)&&(Pa(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Jr!==null&&(bp(Jr),Jr=null))),qu(t,r),ar(r),null;case 5:wu(r);var m=pi(es.current);if(a=r.type,t!==null&&r.stateNode!=null)fn(t,r,a,p,m),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!p){if(r.stateNode===null)throw Error(d(166));return ar(r),null}if(t=pi(di.current),Pa(r)){p=r.stateNode,a=r.type;var x=r.memoizedProps;switch(p[Ti]=r,p[Na]=x,t=(r.mode&1)!==0,a){case"dialog":Wt("cancel",p),Wt("close",p);break;case"iframe":case"object":case"embed":Wt("load",p);break;case"video":case"audio":for(m=0;m<Ws.length;m++)Wt(Ws[m],p);break;case"source":Wt("error",p);break;case"img":case"image":case"link":Wt("error",p),Wt("load",p);break;case"details":Wt("toggle",p);break;case"input":xt(p,x),Wt("invalid",p);break;case"select":p._wrapperState={wasMultiple:!!x.multiple},Wt("invalid",p);break;case"textarea":Te(p,x),Wt("invalid",p)}qr(a,x),m=null;for(var R in x)if(x.hasOwnProperty(R)){var X=x[R];R==="children"?typeof X=="string"?p.textContent!==X&&(x.suppressHydrationWarning!==!0&&Ta(p.textContent,X,t),m=["children",X]):typeof X=="number"&&p.textContent!==""+X&&(x.suppressHydrationWarning!==!0&&Ta(p.textContent,X,t),m=["children",""+X]):g.hasOwnProperty(R)&&X!=null&&R==="onScroll"&&Wt("scroll",p)}switch(a){case"input":Ke(p),vt(p,x,!0);break;case"textarea":Ke(p),kt(p);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(p.onclick=xs)}p=m,r.updateQueue=p,p!==null&&(r.flags|=4)}else{R=m.nodeType===9?m:m.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ye(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=R.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof p.is=="string"?t=R.createElement(a,{is:p.is}):(t=R.createElement(a),a==="select"&&(R=t,p.multiple?R.multiple=!0:p.size&&(R.size=p.size))):t=R.createElementNS(t,a),t[Ti]=r,t[Na]=p,Ua(t,r,!1,!1),r.stateNode=t;e:{switch(R=bt(a,p),a){case"dialog":Wt("cancel",t),Wt("close",t),m=p;break;case"iframe":case"object":case"embed":Wt("load",t),m=p;break;case"video":case"audio":for(m=0;m<Ws.length;m++)Wt(Ws[m],t);m=p;break;case"source":Wt("error",t),m=p;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),m=p;break;case"details":Wt("toggle",t),m=p;break;case"input":xt(t,p),m=Ct(t,p),Wt("invalid",t);break;case"option":m=p;break;case"select":t._wrapperState={wasMultiple:!!p.multiple},m=$({},p,{value:void 0}),Wt("invalid",t);break;case"textarea":Te(t,p),m=oe(t,p),Wt("invalid",t);break;default:m=p}qr(a,m),X=m;for(x in X)if(X.hasOwnProperty(x)){var ee=X[x];x==="style"?Ir(t,ee):x==="dangerouslySetInnerHTML"?(ee=ee?ee.__html:void 0,ee!=null&&mt(t,ee)):x==="children"?typeof ee=="string"?(a!=="textarea"||ee!=="")&&pt(t,ee):typeof ee=="number"&&pt(t,""+ee):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(g.hasOwnProperty(x)?ee!=null&&x==="onScroll"&&Wt("scroll",t):ee!=null&&B(t,x,ee,R))}switch(a){case"input":Ke(t),vt(t,p,!1);break;case"textarea":Ke(t),kt(t);break;case"option":p.value!=null&&t.setAttribute("value",""+Be(p.value));break;case"select":t.multiple=!!p.multiple,x=p.value,x!=null?ut(t,!!p.multiple,x,!1):p.defaultValue!=null&&ut(t,!!p.multiple,p.defaultValue,!0);break;default:typeof m.onClick=="function"&&(t.onclick=xs)}switch(a){case"button":case"input":case"select":case"textarea":p=!!p.autoFocus;break e;case"img":p=!0;break e;default:p=!1}}p&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return ar(r),null;case 6:if(t&&r.stateNode!=null)ed(t,r,t.memoizedProps,p);else{if(typeof p!="string"&&r.stateNode===null)throw Error(d(166));if(a=pi(es.current),pi(di.current),Pa(r)){if(p=r.stateNode,a=r.memoizedProps,p[Ti]=r,(x=p.nodeValue!==a)&&(t=gr,t!==null))switch(t.tag){case 3:Ta(p.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(p.nodeValue,a,(t.mode&1)!==0)}x&&(r.flags|=4)}else p=(a.nodeType===9?a:a.ownerDocument).createTextNode(p),p[Ti]=r,r.stateNode=p}return ar(r),null;case 13:if(nn(ln),p=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rn&&Pn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Dc(),Ao(),r.flags|=98560,x=!1;else if(x=Pa(r),p!==null&&p.dehydrated!==null){if(t===null){if(!x)throw Error(d(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(d(317));x[Ti]=r}else Ao(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;ar(r),x=!1}else Jr!==null&&(bp(Jr),Jr=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(p=p!==null,p!==(t!==null&&t.memoizedState!==null)&&p&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(ln.current&1)!==0?Lt===0&&(Lt=3):Sp())),r.updateQueue!==null&&(r.flags|=4),ar(r),null);case 4:return Pi(),qu(t,r),t===null&&ys(r.stateNode.containerInfo),ar(r),null;case 10:return Wn(r.type._context),ar(r),null;case 17:return or(r.type)&&Eo(),ar(r),null;case 19:if(nn(ln),x=r.memoizedState,x===null)return ar(r),null;if(p=(r.flags&128)!==0,R=x.rendering,R===null)if(p)qa(x,!1);else{if(Lt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(R=hi(t),R!==null){for(r.flags|=128,qa(x,!1),p=R.updateQueue,p!==null&&(r.updateQueue=p,r.flags|=4),r.subtreeFlags=0,p=a,a=r.child;a!==null;)x=a,t=p,x.flags&=14680066,R=x.alternate,R===null?(x.childLanes=0,x.lanes=t,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=R.childLanes,x.lanes=R.lanes,x.child=R.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=R.memoizedProps,x.memoizedState=R.memoizedState,x.updateQueue=R.updateQueue,x.type=R.type,t=R.dependencies,x.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Zt(ln,ln.current&1|2),r.child}t=t.sibling}x.tail!==null&&Rt()>ql&&(r.flags|=128,p=!0,qa(x,!1),r.lanes=4194304)}else{if(!p)if(t=hi(R),t!==null){if(r.flags|=128,p=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),qa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!R.alternate&&!rn)return ar(r),null}else 2*Rt()-x.renderingStartTime>ql&&a!==1073741824&&(r.flags|=128,p=!0,qa(x,!1),r.lanes=4194304);x.isBackwards?(R.sibling=r.child,r.child=R):(a=x.last,a!==null?a.sibling=R:r.child=R,x.last=R)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=Rt(),r.sibling=null,a=ln.current,Zt(ln,p?a&1|2:a&1),r):(ar(r),null);case 22:case 23:return kp(),p=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==p&&(r.flags|=8192),p&&(r.mode&1)!==0?(Ut&1073741824)!==0&&(ar(r),r.subtreeFlags&6&&(r.flags|=8192)):ar(r),null;case 24:return null;case 25:return null}throw Error(d(156,r.tag))}function e(t,r){switch(Sl(r),r.tag){case 1:return or(r.type)&&Eo(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Pi(),nn(mr),nn(Jn),eo(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return wu(r),null;case 13:if(nn(ln),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(d(340));Ao()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return nn(ln),null;case 4:return Pi(),null;case 10:return Wn(r.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var n=!1,s=!1,i=typeof WeakSet=="function"?WeakSet:Set,o=null;function h(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(p){Rn(t,r,p)}else a.current=null}function y(t,r,a){try{a()}catch(p){Rn(t,r,p)}}var b=!1;function S(t,r){if(xl=ne,t=du(),va(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var p=a.getSelection&&a.getSelection();if(p&&p.rangeCount!==0){a=p.anchorNode;var m=p.anchorOffset,x=p.focusNode;p=p.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var R=0,X=-1,ee=-1,me=0,Ae=0,De=t,Le=null;t:for(;;){for(var Xe;De!==a||m!==0&&De.nodeType!==3||(X=R+m),De!==x||p!==0&&De.nodeType!==3||(ee=R+p),De.nodeType===3&&(R+=De.nodeValue.length),(Xe=De.firstChild)!==null;)Le=De,De=Xe;for(;;){if(De===t)break t;if(Le===a&&++me===m&&(X=R),Le===x&&++Ae===p&&(ee=R),(Xe=De.nextSibling)!==null)break;De=Le,Le=De.parentNode}De=Xe}a=X===-1||ee===-1?null:{start:X,end:ee}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vi={focusedElem:t,selectionRange:a},ne=!1,o=r;o!==null;)if(r=o,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,o=t;else for(;o!==null;){r=o;try{var it=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var st=it.memoizedProps,qn=it.memoizedState,ue=r.stateNode,re=ue.getSnapshotBeforeUpdate(r.elementType===r.type?st:yr(r.type,st),qn);ue.__reactInternalSnapshotBeforeUpdate=re}break;case 3:var de=r.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(We){Rn(r,r.return,We)}if(t=r.sibling,t!==null){t.return=r.return,o=t;break}o=r.return}return it=b,b=!1,it}function j(t,r,a){var p=r.updateQueue;if(p=p!==null?p.lastEffect:null,p!==null){var m=p=p.next;do{if((m.tag&t)===t){var x=m.destroy;m.destroy=void 0,x!==void 0&&y(r,a,x)}m=m.next}while(m!==p)}}function W(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var p=a.create;a.destroy=p()}a=a.next}while(a!==r)}}function G(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function ie(t){var r=t.alternate;r!==null&&(t.alternate=null,ie(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ti],delete r[Na],delete r[fu],delete r[dp],delete r[pp])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function te(t){return t.tag===5||t.tag===3||t.tag===4}function ye(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||te(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ke(t,r,a){var p=t.tag;if(p===5||p===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=xs));else if(p!==4&&(t=t.child,t!==null))for(ke(t,r,a),t=t.sibling;t!==null;)ke(t,r,a),t=t.sibling}function Pe(t,r,a){var p=t.tag;if(p===5||p===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(p!==4&&(t=t.child,t!==null))for(Pe(t,r,a),t=t.sibling;t!==null;)Pe(t,r,a),t=t.sibling}var Ne=null,Fe=!1;function Me(t,r,a){for(a=a.child;a!==null;)Ge(t,r,a),a=a.sibling}function Ge(t,r,a){if(E&&typeof E.onCommitFiberUnmount=="function")try{E.onCommitFiberUnmount(Yn,a)}catch{}switch(a.tag){case 5:s||h(a,r);case 6:var p=Ne,m=Fe;Ne=null,Me(t,r,a),Ne=p,Fe=m,Ne!==null&&(Fe?(t=Ne,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Ne.removeChild(a.stateNode));break;case 18:Ne!==null&&(Fe?(t=Ne,a=a.stateNode,t.nodeType===8?bl(t.parentNode,a):t.nodeType===1&&bl(t,a),_e(t)):bl(Ne,a.stateNode));break;case 4:p=Ne,m=Fe,Ne=a.stateNode.containerInfo,Fe=!0,Me(t,r,a),Ne=p,Fe=m;break;case 0:case 11:case 14:case 15:if(!s&&(p=a.updateQueue,p!==null&&(p=p.lastEffect,p!==null))){m=p=p.next;do{var x=m,R=x.destroy;x=x.tag,R!==void 0&&((x&2)!==0||(x&4)!==0)&&y(a,r,R),m=m.next}while(m!==p)}Me(t,r,a);break;case 1:if(!s&&(h(a,r),p=a.stateNode,typeof p.componentWillUnmount=="function"))try{p.props=a.memoizedProps,p.state=a.memoizedState,p.componentWillUnmount()}catch(X){Rn(a,r,X)}Me(t,r,a);break;case 21:Me(t,r,a);break;case 22:a.mode&1?(s=(p=s)||a.memoizedState!==null,Me(t,r,a),s=p):Me(t,r,a);break;default:Me(t,r,a)}}function at(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new i),r.forEach(function(p){var m=bg.bind(null,t,p);a.has(p)||(a.add(p),p.then(m,m))})}}function Ve(t,r){var a=r.deletions;if(a!==null)for(var p=0;p<a.length;p++){var m=a[p];try{var x=t,R=r,X=R;e:for(;X!==null;){switch(X.tag){case 5:Ne=X.stateNode,Fe=!1;break e;case 3:Ne=X.stateNode.containerInfo,Fe=!0;break e;case 4:Ne=X.stateNode.containerInfo,Fe=!0;break e}X=X.return}if(Ne===null)throw Error(d(160));Ge(x,R,m),Ne=null,Fe=!1;var ee=m.alternate;ee!==null&&(ee.return=null),m.return=null}catch(me){Rn(m,r,me)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)St(r,t),r=r.sibling}function St(t,r){var a=t.alternate,p=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ve(r,t),Et(t),p&4){try{j(3,t,t.return),W(3,t)}catch(st){Rn(t,t.return,st)}try{j(5,t,t.return)}catch(st){Rn(t,t.return,st)}}break;case 1:Ve(r,t),Et(t),p&512&&a!==null&&h(a,a.return);break;case 5:if(Ve(r,t),Et(t),p&512&&a!==null&&h(a,a.return),t.flags&32){var m=t.stateNode;try{pt(m,"")}catch(st){Rn(t,t.return,st)}}if(p&4&&(m=t.stateNode,m!=null)){var x=t.memoizedProps,R=a!==null?a.memoizedProps:x,X=t.type,ee=t.updateQueue;if(t.updateQueue=null,ee!==null)try{X==="input"&&x.type==="radio"&&x.name!=null&&tt(m,x),bt(X,R);var me=bt(X,x);for(R=0;R<ee.length;R+=2){var Ae=ee[R],De=ee[R+1];Ae==="style"?Ir(m,De):Ae==="dangerouslySetInnerHTML"?mt(m,De):Ae==="children"?pt(m,De):B(m,Ae,De,me)}switch(X){case"input":Ue(m,x);break;case"textarea":he(m,x);break;case"select":var Le=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var Xe=x.value;Xe!=null?ut(m,!!x.multiple,Xe,!1):Le!==!!x.multiple&&(x.defaultValue!=null?ut(m,!!x.multiple,x.defaultValue,!0):ut(m,!!x.multiple,x.multiple?[]:"",!1))}m[Na]=x}catch(st){Rn(t,t.return,st)}}break;case 6:if(Ve(r,t),Et(t),p&4){if(t.stateNode===null)throw Error(d(162));m=t.stateNode,x=t.memoizedProps;try{m.nodeValue=x}catch(st){Rn(t,t.return,st)}}break;case 3:if(Ve(r,t),Et(t),p&4&&a!==null&&a.memoizedState.isDehydrated)try{_e(r.containerInfo)}catch(st){Rn(t,t.return,st)}break;case 4:Ve(r,t),Et(t);break;case 13:Ve(r,t),Et(t),m=t.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||($a=Rt())),p&4&&at(t);break;case 22:if(Ae=a!==null&&a.memoizedState!==null,t.mode&1?(s=(me=s)||Ae,Ve(r,t),s=me):Ve(r,t),Et(t),p&8192){if(me=t.memoizedState!==null,(t.stateNode.isHidden=me)&&!Ae&&(t.mode&1)!==0)for(o=t,Ae=t.child;Ae!==null;){for(De=o=Ae;o!==null;){switch(Le=o,Xe=Le.child,Le.tag){case 0:case 11:case 14:case 15:j(4,Le,Le.return);break;case 1:h(Le,Le.return);var it=Le.stateNode;if(typeof it.componentWillUnmount=="function"){p=Le,a=Le.return;try{r=p,it.props=r.memoizedProps,it.state=r.memoizedState,it.componentWillUnmount()}catch(st){Rn(p,a,st)}}break;case 5:h(Le,Le.return);break;case 22:if(Le.memoizedState!==null){lr(De);continue}}Xe!==null?(Xe.return=Le,o=Xe):lr(De)}Ae=Ae.sibling}e:for(Ae=null,De=t;;){if(De.tag===5){if(Ae===null){Ae=De;try{m=De.stateNode,me?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(X=De.stateNode,ee=De.memoizedProps.style,R=ee!=null&&ee.hasOwnProperty("display")?ee.display:null,X.style.display=_r("display",R))}catch(st){Rn(t,t.return,st)}}}else if(De.tag===6){if(Ae===null)try{De.stateNode.nodeValue=me?"":De.memoizedProps}catch(st){Rn(t,t.return,st)}}else if((De.tag!==22&&De.tag!==23||De.memoizedState===null||De===t)&&De.child!==null){De.child.return=De,De=De.child;continue}if(De===t)break e;for(;De.sibling===null;){if(De.return===null||De.return===t)break e;Ae===De&&(Ae=null),De=De.return}Ae===De&&(Ae=null),De.sibling.return=De.return,De=De.sibling}}break;case 19:Ve(r,t),Et(t),p&4&&at(t);break;case 21:break;default:Ve(r,t),Et(t)}}function Et(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(te(a)){var p=a;break e}a=a.return}throw Error(d(160))}switch(p.tag){case 5:var m=p.stateNode;p.flags&32&&(pt(m,""),p.flags&=-33);var x=ye(t);Pe(t,x,m);break;case 3:case 4:var R=p.stateNode.containerInfo,X=ye(t);ke(t,X,R);break;default:throw Error(d(161))}}catch(ee){Rn(t,t.return,ee)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Bn(t,r,a){o=t,sn(t)}function sn(t,r,a){for(var p=(t.mode&1)!==0;o!==null;){var m=o,x=m.child;if(m.tag===22&&p){var R=m.memoizedState!==null||n;if(!R){var X=m.alternate,ee=X!==null&&X.memoizedState!==null||s;X=n;var me=s;if(n=R,(s=ee)&&!me)for(o=m;o!==null;)R=o,ee=R.child,R.tag===22&&R.memoizedState!==null?yn(m):ee!==null?(ee.return=R,o=ee):yn(m);for(;x!==null;)o=x,sn(x),x=x.sibling;o=m,n=X,s=me}xr(t)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,o=x):xr(t)}}function xr(t){for(;o!==null;){var r=o;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:s||W(5,r);break;case 1:var p=r.stateNode;if(r.flags&4&&!s)if(a===null)p.componentDidMount();else{var m=r.elementType===r.type?a.memoizedProps:yr(r.type,a.memoizedProps);p.componentDidUpdate(m,a.memoizedState,p.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Qs(r,x,p);break;case 3:var R=r.updateQueue;if(R!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Qs(r,R,a)}break;case 5:var X=r.stateNode;if(a===null&&r.flags&4){a=X;var ee=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":ee.autoFocus&&a.focus();break;case"img":ee.src&&(a.src=ee.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var me=r.alternate;if(me!==null){var Ae=me.memoizedState;if(Ae!==null){var De=Ae.dehydrated;De!==null&&_e(De)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}s||r.flags&512&&G(r)}catch(Le){Rn(r,r.return,Le)}}if(r===t){o=null;break}if(a=r.sibling,a!==null){a.return=r.return,o=a;break}o=r.return}}function lr(t){for(;o!==null;){var r=o;if(r===t){o=null;break}var a=r.sibling;if(a!==null){a.return=r.return,o=a;break}o=r.return}}function yn(t){for(;o!==null;){var r=o;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{W(4,r)}catch(ee){Rn(r,a,ee)}break;case 1:var p=r.stateNode;if(typeof p.componentDidMount=="function"){var m=r.return;try{p.componentDidMount()}catch(ee){Rn(r,m,ee)}}var x=r.return;try{G(r)}catch(ee){Rn(r,x,ee)}break;case 5:var R=r.return;try{G(r)}catch(ee){Rn(r,R,ee)}}}catch(ee){Rn(r,r.return,ee)}if(r===t){o=null;break}var X=r.sibling;if(X!==null){X.return=r.return,o=X;break}o=r.return}}var br=Math.ceil,Tn=H.ReactCurrentDispatcher,vn=H.ReactCurrentOwner,Mt=H.ReactCurrentBatchConfig,dt=0,zt=null,on=null,un=0,Ut=0,wr=li(0),Lt=0,lo=null,kr=0,Ii=0,ts=0,An=null,Un=null,$a=0,ql=1/0,uo=null,td=!1,yp=null,Go=null,nd=!1,Yo=null,rd=0,$u=0,vp=null,id=-1,sd=0;function Hr(){return(dt&6)!==0?Rt():id!==-1?id:id=Rt()}function Vo(t){return(t.mode&1)===0?1:(dt&2)!==0&&un!==0?un&-un:Mc.transition!==null?(sd===0&&(sd=oa()),sd):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:cn(t.type)),t)}function ns(t,r,a,p){if(50<$u)throw $u=0,vp=null,Error(d(185));rr(t,a,p),((dt&2)===0||t!==zt)&&(t===zt&&((dt&2)===0&&(Ii|=a),Lt===4&&Jo(t,un)),ei(t,p),a===1&&dt===0&&(r.mode&1)===0&&(ql=Rt()+500,wl&&Ss()))}function ei(t,r){var a=t.callbackNode;gt(t,r);var p=Kr(t,t===zt?un:0);if(p===0)a!==null&&Bt(a),t.callbackNode=null,t.callbackPriority=0;else if(r=p&-p,t.callbackPriority!==r){if(a!=null&&Bt(a),r===1)t.tag===0?Rc(Dh.bind(null,t)):ji(Dh.bind(null,t)),Pc(function(){(dt&6)===0&&Ss()}),a=null;else{switch(ds(p)){case 1:a=ii;break;case 4:a=Vt;break;case 16:a=Je;break;case 536870912:a=cs;break;default:a=Je}a=qh(a,Oh.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function Oh(t,r){if(id=-1,sd=0,(dt&6)!==0)throw Error(d(327));var a=t.callbackNode;if($l()&&t.callbackNode!==a)return null;var p=Kr(t,t===zt?un:0);if(p===0)return null;if((p&30)!==0||(p&t.expiredLanes)!==0||r)r=od(t,p);else{r=p;var m=dt;dt|=2;var x=zh();(zt!==t||un!==r)&&(uo=null,ql=Rt()+500,Ga(t,r));do try{gg();break}catch(X){Mh(t,X)}while(!0);Tl(),Tn.current=x,dt=m,on!==null?r=0:(zt=null,un=0,r=Lt)}if(r!==0){if(r===2&&(m=sa(t),m!==0&&(p=m,r=xp(t,m))),r===1)throw a=lo,Ga(t,0),Jo(t,p),ei(t,Rt()),a;if(r===6)Jo(t,p);else{if(m=t.current.alternate,(p&30)===0&&!fg(m)&&(r=od(t,p),r===2&&(x=sa(t),x!==0&&(p=x,r=xp(t,x))),r===1))throw a=lo,Ga(t,0),Jo(t,p),ei(t,Rt()),a;switch(t.finishedWork=m,t.finishedLanes=p,r){case 0:case 1:throw Error(d(345));case 2:Ya(t,Un,uo);break;case 3:if(Jo(t,p),(p&130023424)===p&&(r=$a+500-Rt(),10<r)){if(Kr(t,0)!==0)break;if(m=t.suspendedLanes,(m&p)!==p){Hr(),t.pingedLanes|=t.suspendedLanes&m;break}t.timeoutHandle=Ji(Ya.bind(null,t,Un,uo),r);break}Ya(t,Un,uo);break;case 4:if(Jo(t,p),(p&4194240)===p)break;for(r=t.eventTimes,m=-1;0<p;){var R=31-ge(p);x=1<<R,R=r[R],R>m&&(m=R),p&=~x}if(p=m,p=Rt()-p,p=(120>p?120:480>p?480:1080>p?1080:1920>p?1920:3e3>p?3e3:4320>p?4320:1960*br(p/1960))-p,10<p){t.timeoutHandle=Ji(Ya.bind(null,t,Un,uo),p);break}Ya(t,Un,uo);break;case 5:Ya(t,Un,uo);break;default:throw Error(d(329))}}}return ei(t,Rt()),t.callbackNode===a?Oh.bind(null,t):null}function xp(t,r){var a=An;return t.current.memoizedState.isDehydrated&&(Ga(t,r).flags|=256),t=od(t,r),t!==2&&(r=Un,Un=a,r!==null&&bp(r)),t}function bp(t){Un===null?Un=t:Un.push.apply(Un,t)}function fg(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var p=0;p<a.length;p++){var m=a[p],x=m.getSnapshot;m=m.value;try{if(!_n(x(),m))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Jo(t,r){for(r&=~ts,r&=~Ii,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-ge(r),p=1<<a;t[a]=-1,r&=~p}}function Dh(t){if((dt&6)!==0)throw Error(d(327));$l();var r=Kr(t,0);if((r&1)===0)return ei(t,Rt()),null;var a=od(t,r);if(t.tag!==0&&a===2){var p=sa(t);p!==0&&(r=p,a=xp(t,p))}if(a===1)throw a=lo,Ga(t,0),Jo(t,r),ei(t,Rt()),a;if(a===6)throw Error(d(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Ya(t,Un,uo),ei(t,Rt()),null}function wp(t,r){var a=dt;dt|=1;try{return t(r)}finally{dt=a,dt===0&&(ql=Rt()+500,wl&&Ss())}}function Ka(t){Yo!==null&&Yo.tag===0&&(dt&6)===0&&$l();var r=dt;dt|=1;var a=Mt.transition,p=Nt;try{if(Mt.transition=null,Nt=1,t)return t()}finally{Nt=p,Mt.transition=a,dt=r,(dt&6)===0&&Ss()}}function kp(){Ut=wr.current,nn(wr)}function Ga(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,ja(a)),on!==null)for(a=on.return;a!==null;){var p=a;switch(Sl(p),p.tag){case 1:p=p.type.childContextTypes,p!=null&&Eo();break;case 3:Pi(),nn(mr),nn(Jn),eo();break;case 5:wu(p);break;case 4:Pi();break;case 13:nn(ln);break;case 19:nn(ln);break;case 10:Wn(p.type._context);break;case 22:case 23:kp()}a=a.return}if(zt=t,on=t=Xo(t.current,null),un=Ut=r,Lt=0,lo=null,ts=Ii=kr=0,Un=An=null,Ts!==null){for(r=0;r<Ts.length;r++)if(a=Ts[r],p=a.interleaved,p!==null){a.interleaved=null;var m=p.next,x=a.pending;if(x!==null){var R=x.next;x.next=m,p.next=R}a.pending=p}Ts=null}return t}function Mh(t,r){do{var a=on;try{if(Tl(),El.current=Wa,Ma){for(var p=hn.memoizedState;p!==null;){var m=p.queue;m!==null&&(m.pending=null),p=p.next}Ma=!1}if(to=0,Ot=Hn=hn=null,za=!1,Fa=0,vn.current=null,a===null||a.return===null){Lt=1,lo=r,on=null;break}e:{var x=t,R=a.return,X=a,ee=r;if(r=un,X.flags|=32768,ee!==null&&typeof ee=="object"&&typeof ee.then=="function"){var me=ee,Ae=X,De=Ae.tag;if((Ae.mode&1)===0&&(De===0||De===11||De===15)){var Le=Ae.alternate;Le?(Ae.updateQueue=Le.updateQueue,Ae.memoizedState=Le.memoizedState,Ae.lanes=Le.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var Xe=Fu(R);if(Xe!==null){Xe.flags&=-257,oo(Xe,R,X,x,r),Xe.mode&1&&Vc(x,me,r),r=Xe,ee=me;var it=r.updateQueue;if(it===null){var st=new Set;st.add(ee),r.updateQueue=st}else it.add(ee);break e}else{if((r&1)===0){Vc(x,me,r),Sp();break e}ee=Error(d(426))}}else if(rn&&X.mode&1){var qn=Fu(R);if(qn!==null){(qn.flags&65536)===0&&(qn.flags|=256),oo(qn,R,X,x,r),Ro(so(ee,X));break e}}x=ee=so(ee,X),Lt!==4&&(Lt=2),An===null?An=[x]:An.push(x),x=R;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var ue=Il(x,ee,r);Do(x,ue);break e;case 1:X=ee;var re=x.type,de=x.stateNode;if((x.flags&128)===0&&(typeof re.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(Go===null||!Go.has(de)))){x.flags|=65536,r&=-r,x.lanes|=r;var We=zu(x,X,r);Do(x,We);break e}}x=x.return}while(x!==null)}Wh(a)}catch(lt){r=lt,on===a&&a!==null&&(on=a=a.return);continue}break}while(!0)}function zh(){var t=Tn.current;return Tn.current=Wa,t===null?Wa:t}function Sp(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),zt===null||(kr&268435455)===0&&(Ii&268435455)===0||Jo(zt,un)}function od(t,r){var a=dt;dt|=2;var p=zh();(zt!==t||un!==r)&&(uo=null,Ga(t,r));do try{mg();break}catch(m){Mh(t,m)}while(!0);if(Tl(),dt=a,Tn.current=p,on!==null)throw Error(d(261));return zt=null,un=0,Lt}function mg(){for(;on!==null;)Fh(on)}function gg(){for(;on!==null&&!Mr();)Fh(on)}function Fh(t){var r=Uh(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,r===null?Wh(t):on=r,vn.current=null}function Wh(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=Ul(a,r,Ut),a!==null){on=a;return}}else{if(a=e(a,r),a!==null){a.flags&=32767,on=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,on=null;return}}if(r=r.sibling,r!==null){on=r;return}on=r=t}while(r!==null);Lt===0&&(Lt=5)}function Ya(t,r,a){var p=Nt,m=Mt.transition;try{Mt.transition=null,Nt=1,yg(t,r,a,p)}finally{Mt.transition=m,Nt=p}return null}function yg(t,r,a,p){do $l();while(Yo!==null);if((dt&6)!==0)throw Error(d(327));a=t.finishedWork;var m=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(d(177));t.callbackNode=null,t.callbackPriority=0;var x=a.lanes|a.childLanes;if(aa(t,x),t===zt&&(on=zt=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||nd||(nd=!0,qh(Je,function(){return $l(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=Mt.transition,Mt.transition=null;var R=Nt;Nt=1;var X=dt;dt|=4,vn.current=null,S(t,a),St(a,t),ap(Vi),ne=!!xl,Vi=xl=null,t.current=a,Bn(a),us(),dt=X,Nt=R,Mt.transition=x}else t.current=a;if(nd&&(nd=!1,Yo=t,rd=m),x=t.pendingLanes,x===0&&(Go=null),K(a.stateNode),ei(t,Rt()),r!==null)for(p=t.onRecoverableError,a=0;a<r.length;a++)m=r[a],p(m.value,{componentStack:m.stack,digest:m.digest});if(td)throw td=!1,t=yp,yp=null,t;return(rd&1)!==0&&t.tag!==0&&$l(),x=t.pendingLanes,(x&1)!==0?t===vp?$u++:($u=0,vp=t):$u=0,Ss(),null}function $l(){if(Yo!==null){var t=ds(rd),r=Mt.transition,a=Nt;try{if(Mt.transition=null,Nt=16>t?16:t,Yo===null)var p=!1;else{if(t=Yo,Yo=null,rd=0,(dt&6)!==0)throw Error(d(331));var m=dt;for(dt|=4,o=t.current;o!==null;){var x=o,R=x.child;if((o.flags&16)!==0){var X=x.deletions;if(X!==null){for(var ee=0;ee<X.length;ee++){var me=X[ee];for(o=me;o!==null;){var Ae=o;switch(Ae.tag){case 0:case 11:case 15:j(8,Ae,x)}var De=Ae.child;if(De!==null)De.return=Ae,o=De;else for(;o!==null;){Ae=o;var Le=Ae.sibling,Xe=Ae.return;if(ie(Ae),Ae===me){o=null;break}if(Le!==null){Le.return=Xe,o=Le;break}o=Xe}}}var it=x.alternate;if(it!==null){var st=it.child;if(st!==null){it.child=null;do{var qn=st.sibling;st.sibling=null,st=qn}while(st!==null)}}o=x}}if((x.subtreeFlags&2064)!==0&&R!==null)R.return=x,o=R;else e:for(;o!==null;){if(x=o,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:j(9,x,x.return)}var ue=x.sibling;if(ue!==null){ue.return=x.return,o=ue;break e}o=x.return}}var re=t.current;for(o=re;o!==null;){R=o;var de=R.child;if((R.subtreeFlags&2064)!==0&&de!==null)de.return=R,o=de;else e:for(R=re;o!==null;){if(X=o,(X.flags&2048)!==0)try{switch(X.tag){case 0:case 11:case 15:W(9,X)}}catch(lt){Rn(X,X.return,lt)}if(X===R){o=null;break e}var We=X.sibling;if(We!==null){We.return=X.return,o=We;break e}o=X.return}}if(dt=m,Ss(),E&&typeof E.onPostCommitFiberRoot=="function")try{E.onPostCommitFiberRoot(Yn,t)}catch{}p=!0}return p}finally{Nt=a,Mt.transition=r}}return!1}function Hh(t,r,a){r=so(a,r),r=Il(t,r,1),t=ci(t,r,1),r=Hr(),t!==null&&(rr(t,1,r),ei(t,r))}function Rn(t,r,a){if(t.tag===3)Hh(t,t,a);else for(;r!==null;){if(r.tag===3){Hh(r,t,a);break}else if(r.tag===1){var p=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof p.componentDidCatch=="function"&&(Go===null||!Go.has(p))){t=so(a,t),t=zu(r,t,1),r=ci(r,t,1),t=Hr(),r!==null&&(rr(r,1,t),ei(r,t));break}}r=r.return}}function vg(t,r,a){var p=t.pingCache;p!==null&&p.delete(r),r=Hr(),t.pingedLanes|=t.suspendedLanes&a,zt===t&&(un&a)===a&&(Lt===4||Lt===3&&(un&130023424)===un&&500>Rt()-$a?Ga(t,0):ts|=a),ei(t,r)}function Bh(t,r){r===0&&((t.mode&1)===0?r=1:(r=Qt,Qt<<=1,(Qt&130023424)===0&&(Qt=4194304)));var a=Hr();t=Ei(t,r),t!==null&&(rr(t,r,a),ei(t,a))}function xg(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),Bh(t,a)}function bg(t,r){var a=0;switch(t.tag){case 13:var p=t.stateNode,m=t.memoizedState;m!==null&&(a=m.retryLane);break;case 19:p=t.stateNode;break;default:throw Error(d(314))}p!==null&&p.delete(r),Bh(t,a)}var Uh;Uh=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||mr.current)er=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return er=!1,gp(t,r,a);er=(t.flags&131072)!==0}else er=!1,rn&&(r.flags&1048576)!==0&&kl(r,Pr,r.index);switch(r.lanes=0,r.tag){case 2:var p=r.type;Bl(t,r),t=r.pendingProps;var m=No(r,Jn.current);Js(r,a),m=Al(null,r,p,t,m,a);var x=ku();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,or(p)?(x=!0,Lo(r)):x=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,jl(r),m.updater=Ba,r.stateNode=m,m._reactInternals=r,Ou(r,p,t,a),r=Ko(null,r,p,!0,x,a)):(r.tag=0,rn&&x&&Gs(r),vr(null,r,m,a),r=r.child),r;case 16:p=r.elementType;e:{switch(Bl(t,r),t=r.pendingProps,m=p._init,p=m(p._payload),r.type=p,m=r.tag=kg(p),t=yr(p,t),m){case 0:r=ao(null,r,p,t,a);break e;case 1:r=Zr(null,r,p,t,a);break e;case 11:r=Xc(null,r,p,t,a);break e;case 14:r=Qc(null,r,p,yr(p.type,t),a);break e}throw Error(d(306,p,""))}return r;case 0:return p=r.type,m=r.pendingProps,m=r.elementType===p?m:yr(p,m),ao(t,r,p,m,a);case 1:return p=r.type,m=r.pendingProps,m=r.elementType===p?m:yr(p,m),Zr(t,r,p,m,a);case 3:e:{if(Dl(r),t===null)throw Error(d(387));p=r.pendingProps,x=r.memoizedState,m=x.element,Xs(t,r),Nl(r,p,null,a);var R=r.memoizedState;if(p=R.element,x.isDehydrated)if(x={element:p,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){m=so(Error(d(423)),r),r=Wu(t,r,p,a,m);break e}else if(p!==m){m=so(Error(d(424)),r),r=Wu(t,r,p,a,m);break e}else for(Pn=bs(r.stateNode.containerInfo.firstChild),gr=r,rn=!0,Jr=null,a=Ra(r,null,p,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ao(),p===m){r=Ar(t,r,a);break e}vr(t,r,p,a)}r=r.child}return r;case 5:return bu(r),t===null&&_l(r),p=r.type,m=r.pendingProps,x=t!==null?t.memoizedProps:null,R=m.children,Bs(p,m)?R=null:x!==null&&Bs(p,x)&&(r.flags|=32),Ol(t,r),vr(t,r,R,a),r.child;case 6:return t===null&&_l(r),null;case 13:return Fl(t,r,a);case 4:return Zs(r,r.stateNode.containerInfo),p=r.pendingProps,t===null?r.child=Cs(r,null,p,a):vr(t,r,p,a),r.child;case 11:return p=r.type,m=r.pendingProps,m=r.elementType===p?m:yr(p,m),Xc(t,r,p,m,a);case 7:return vr(t,r,r.pendingProps,a),r.child;case 8:return vr(t,r,r.pendingProps.children,a),r.child;case 12:return vr(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(p=r.type._context,m=r.pendingProps,x=r.memoizedProps,R=m.value,Zt(Ia,p._currentValue),p._currentValue=R,x!==null)if(_n(x.value,R)){if(x.children===m.children&&!mr.current){r=Ar(t,r,a);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var X=x.dependencies;if(X!==null){R=x.child;for(var ee=X.firstContext;ee!==null;){if(ee.context===p){if(x.tag===1){ee=Li(-1,a&-a),ee.tag=2;var me=x.updateQueue;if(me!==null){me=me.shared;var Ae=me.pending;Ae===null?ee.next=ee:(ee.next=Ae.next,Ae.next=ee),me.pending=ee}}x.lanes|=a,ee=x.alternate,ee!==null&&(ee.lanes|=a),Oo(x.return,a,r),X.lanes|=a;break}ee=ee.next}}else if(x.tag===10)R=x.type===r.type?null:x.child;else if(x.tag===18){if(R=x.return,R===null)throw Error(d(341));R.lanes|=a,X=R.alternate,X!==null&&(X.lanes|=a),Oo(R,a,r),R=x.sibling}else R=x.child;if(R!==null)R.return=x;else for(R=x;R!==null;){if(R===r){R=null;break}if(x=R.sibling,x!==null){x.return=R.return,R=x;break}R=R.return}x=R}vr(t,r,m.children,a),r=r.child}return r;case 9:return m=r.type,p=r.pendingProps.children,Js(r,a),m=Wr(m),p=p(m),r.flags|=1,vr(t,r,p,a),r.child;case 14:return p=r.type,m=yr(p,r.pendingProps),m=yr(p.type,m),Qc(t,r,p,m,a);case 15:return en(t,r,r.type,r.pendingProps,a);case 17:return p=r.type,m=r.pendingProps,m=r.elementType===p?m:yr(p,m),Bl(t,r),r.tag=1,or(p)?(t=!0,Lo(r)):t=!1,Js(r,a),Kc(r,p,m),Ou(r,p,m,a),Ko(null,r,p,!0,t,a);case 19:return Uu(t,r,a);case 22:return Zc(t,r,a)}throw Error(d(156,r.tag))};function qh(t,r){return zi(t,r)}function wg(t,r,a,p){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=p,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oi(t,r,a,p){return new wg(t,r,a,p)}function _p(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kg(t){if(typeof t=="function")return _p(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ie)return 11;if(t===A)return 14}return 2}function Xo(t,r){var a=t.alternate;return a===null?(a=Oi(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function ad(t,r,a,p,m,x){var R=2;if(p=t,typeof t=="function")_p(t)&&(R=1);else if(typeof t=="string")R=5;else e:switch(t){case ae:return Va(a.children,m,x,r);case be:R=8,m|=8;break;case Re:return t=Oi(12,a,r,m|2),t.elementType=Re,t.lanes=x,t;case le:return t=Oi(13,a,r,m),t.elementType=le,t.lanes=x,t;case fe:return t=Oi(19,a,r,m),t.elementType=fe,t.lanes=x,t;case q:return ld(a,m,x,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xe:R=10;break e;case se:R=9;break e;case Ie:R=11;break e;case A:R=14;break e;case Q:R=16,p=null;break e}throw Error(d(130,t==null?t:typeof t,""))}return r=Oi(R,a,r,m),r.elementType=t,r.type=p,r.lanes=x,r}function Va(t,r,a,p){return t=Oi(7,t,p,r),t.lanes=a,t}function ld(t,r,a,p){return t=Oi(22,t,p,r),t.elementType=q,t.lanes=a,t.stateNode={isHidden:!1},t}function Cp(t,r,a){return t=Oi(6,t,null,r),t.lanes=a,t}function Tp(t,r,a){return r=Oi(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Sg(t,r,a,p,m){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wi(0),this.expirationTimes=Wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.identifierPrefix=p,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function jp(t,r,a,p,m,x,R,X,ee){return t=new Sg(t,r,a,X,ee),r===1?(r=1,x===!0&&(r|=8)):r=0,x=Oi(3,null,null,r),t.current=x,x.stateNode=t,x.memoizedState={element:p,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},jl(x),t}function _g(t,r,a){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:p==null?null:""+p,children:t,containerInfo:r,implementation:a}}function $h(t){if(!t)return ks;t=t._reactInternals;e:{if(On(t)!==t||t.tag!==1)throw Error(d(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(d(171))}if(t.tag===1){var a=t.type;if(or(a))return gu(t,a,r)}return r}function Kh(t,r,a,p,m,x,R,X,ee){return t=jp(a,p,!0,t,m,x,R,X,ee),t.context=$h(null),a=t.current,p=Hr(),m=Vo(a),x=Li(p,m),x.callback=r??null,ci(a,x,m),t.current.lanes=m,rr(t,m,p),ei(t,p),t}function ud(t,r,a,p){var m=r.current,x=Hr(),R=Vo(m);return a=$h(a),r.context===null?r.context=a:r.pendingContext=a,r=Li(x,R),r.payload={element:t},p=p===void 0?null:p,p!==null&&(r.callback=p),t=ci(m,r,R),t!==null&&(ns(t,m,R,x),Da(t,m,R)),R}function cd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gh(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function Np(t,r){Gh(t,r),(t=t.alternate)&&Gh(t,r)}function Cg(){return null}var Yh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ep(t){this._internalRoot=t}dd.prototype.render=Ep.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(d(409));ud(t,r,null,null)},dd.prototype.unmount=Ep.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Ka(function(){ud(null,t,null,null)}),r[Xi]=null}};function dd(t){this._internalRoot=t}dd.prototype.unstable_scheduleHydration=function(t){if(t){var r=bi();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Nr.length&&r!==0&&r<Nr[a].priority;a++);Nr.splice(a,0,t),a===0&&ua(t)}};function Lp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vh(){}function Tg(t,r,a,p,m){if(m){if(typeof p=="function"){var x=p;p=function(){var me=cd(R);x.call(me)}}var R=Kh(r,p,t,0,null,!1,!1,"",Vh);return t._reactRootContainer=R,t[Xi]=R.current,ys(t.nodeType===8?t.parentNode:t),Ka(),R}for(;m=t.lastChild;)t.removeChild(m);if(typeof p=="function"){var X=p;p=function(){var me=cd(ee);X.call(me)}}var ee=jp(t,0,!1,null,null,!1,!1,"",Vh);return t._reactRootContainer=ee,t[Xi]=ee.current,ys(t.nodeType===8?t.parentNode:t),Ka(function(){ud(r,ee,a,p)}),ee}function hd(t,r,a,p,m){var x=a._reactRootContainer;if(x){var R=x;if(typeof m=="function"){var X=m;m=function(){var ee=cd(R);X.call(ee)}}ud(r,R,t,m)}else R=Tg(a,r,t,m,p);return cd(R)}Is=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=kn(r.pendingLanes);a!==0&&(Hi(r,a|1),ei(r,Rt()),(dt&6)===0&&(ql=Rt()+500,Ss()))}break;case 13:Ka(function(){var p=Ei(t,1);if(p!==null){var m=Hr();ns(p,t,1,m)}}),Np(t,1)}},xi=function(t){if(t.tag===13){var r=Ei(t,134217728);if(r!==null){var a=Hr();ns(r,t,134217728,a)}Np(t,134217728)}},vo=function(t){if(t.tag===13){var r=Vo(t),a=Ei(t,r);if(a!==null){var p=Hr();ns(a,t,r,p)}Np(t,r)}},bi=function(){return Nt},Bi=function(t,r){var a=Nt;try{return Nt=t,r()}finally{Nt=a}},Cr=function(t,r,a){switch(r){case"input":if(Ue(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var p=a[r];if(p!==t&&p.form===t.form){var m=gn(p);if(!m)throw Error(d(90));Ft(p),Ue(p,m)}}}break;case"textarea":he(t,a);break;case"select":r=a.value,r!=null&&ut(t,!!a.multiple,r,!1)}},Nn=wp,bn=Ka;var jg={usingClientEntryPoint:!1,Events:[pn,Cn,gn,xn,mn,wp]},Ku={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ng={bundleType:Ku.bundleType,version:Ku.version,rendererPackageName:Ku.rendererPackageName,rendererConfig:Ku.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gn(t),t===null?null:t.stateNode},findFiberByHostInstance:Ku.findFiberByHostInstance||Cg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fd.isDisabled&&fd.supportsFiber)try{Yn=fd.inject(Ng),E=fd}catch{}}return ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jg,ti.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lp(r))throw Error(d(200));return _g(t,r,null,a)},ti.createRoot=function(t,r){if(!Lp(t))throw Error(d(299));var a=!1,p="",m=Yh;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(p=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=jp(t,1,!1,null,null,a,!1,p,m),t[Xi]=r.current,ys(t.nodeType===8?t.parentNode:t),new Ep(r)},ti.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=Gn(r),t=t===null?null:t.stateNode,t},ti.flushSync=function(t){return Ka(t)},ti.hydrate=function(t,r,a){if(!pd(r))throw Error(d(200));return hd(null,t,r,!0,a)},ti.hydrateRoot=function(t,r,a){if(!Lp(t))throw Error(d(405));var p=a!=null&&a.hydratedSources||null,m=!1,x="",R=Yh;if(a!=null&&(a.unstable_strictMode===!0&&(m=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(R=a.onRecoverableError)),r=Kh(r,null,t,1,a??null,m,!1,x,R),t[Xi]=r.current,ys(t),p)for(t=0;t<p.length;t++)a=p[t],m=a._getVersion,m=m(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,m]:r.mutableSourceEagerHydrationData.push(a,m);return new dd(r)},ti.render=function(t,r,a){if(!pd(r))throw Error(d(200));return hd(null,t,r,!1,a)},ti.unmountComponentAtNode=function(t){if(!pd(t))throw Error(d(40));return t._reactRootContainer?(Ka(function(){hd(null,null,t,!1,function(){t._reactRootContainer=null,t[Xi]=null})}),!0):!1},ti.unstable_batchedUpdates=wp,ti.unstable_renderSubtreeIntoContainer=function(t,r,a,p){if(!pd(a))throw Error(d(200));if(t==null||t._reactInternals===void 0)throw Error(d(38));return hd(t,r,a,!1,p)},ti.version="18.3.1-next-f1338f8080-20240426",ti}var rf;function Fg(){if(rf)return Rp.exports;rf=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Rp.exports=zg(),Rp.exports}var sf;function Wg(){if(sf)return md;sf=1;var l=Fg();return md.createRoot=l.createRoot,md.hydrateRoot=l.hydrateRoot,md}var Hg=Wg();const Bg=[["Avery","Morgan","averym","Avery","p1"],["Jordan","Brooks","jbrooks17","Jordan Brooks","p1"],["Taylor","Reed","treed","T. Reed","p1"],["Casey","Nguyen","cnguyen","Casey","p1"],["Riley","Davis","rileyd","Riley","p1"],["Maya","Patel","maya-p","Maya","p3"],["Cameron","Lee","clee","Cameron Lee","p3"],["Sydney","Wilson","sydneyw","Sydney","p3"],["Quinn","Martinez","qmartinez","Quinn","p3"],["Bailey","Adams","bailey_a","Bailey","p5"],["Sam","Rivera","rivera-s","Sam","p5"],["Charlie","Brown","charlieb","Charlie","p6"],["Drew","Johnson","drewj","Drew","p6"],["Alex","Kim","alexk","Alex","p7"],["Robin","Clark","robin-c","Robin","p7"],["Jamie","Flores","jflores","Jamie","p8"]],Zp=Bg.map(([l,u,d,f,g],v)=>({id:`sample-${v+1}`,first:l,last:u,sheetName:v===3||v===11?null:`${l} ${u}`,github:d,studentName:f,sections:v===0?["p1","p3"]:[g],status:v%5===0?"Active now":v%4===0?"Viewing page":"No recent signal",current:v%3===0?"Strings and Variables":v%3===1?"Format a Summary":"Intro to Arrays",assignments:[{id:"strings",name:"Strings and Variables",type:"Lesson",status:"Completed",score:v%4===0?null:8+v%3,possible:10,submitted:"2026-11-02"},{id:"summary",name:"Format a Summary",type:"Challenge",status:v%4===0?"Started":"Completed",score:v%4===0?null:11+v%5,possible:15,submitted:"2026-11-03"},{id:"decisions",name:"Decision Tree",type:"Challenge",status:v%3===0?"Submitted":"Needs revision",score:v%3===0?10:null,possible:20,submitted:"2026-10-28"},{id:"reflection",name:"Debugging Reflection",type:"Lesson",status:"Practice completed",score:null,possible:5,submitted:"2026-10-26"}],weekly:{"2026-11-02":v%4===0?0:19+v%6,"2026-10-26":v%3===0?12:8+v%5}})),Ug=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function Nd(l=new Date){const u=Object.fromEntries(Ug.formatToParts(l).filter(f=>f.type!=="literal").map(f=>[f.type,f.value])),d=new Date(Date.UTC(Number(u.year),Number(u.month)-1,Number(u.day)));return d.setUTCDate(d.getUTCDate()-(d.getUTCDay()+6)%7),d.toISOString().slice(0,10)}function qg(l=new Date,u=8){const d=new Date(Nd(l)+"T12:00:00Z");return Array.from({length:u},(f,g)=>{const v=new Date(d);return v.setUTCDate(v.getUTCDate()-g*7),v.toISOString().slice(0,10)})}const sc=l=>new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"America/Chicago"}),$g=(l,u,d)=>`${l}|${u}|${d}`;function Kg({response:l,type:u,aiUse:d,aiDetails:f}){return["essay","logic-puzzle"].includes(u)?String(l).trim().length<10?"Write your answer and explain your thinking.":["none","disclosed"].includes(d)?d==="disclosed"&&String(f).trim().length<5?"Describe which parts involved AI.":"":"Complete the AI-use declaration.":"Select an essay or logic puzzle."}const Gg=[{id:"seed-journal-1",sectionId:"p1",studentId:"sample-2",studentName:"Jordan Brooks",courseId:"computer-science-1",week:Nd(),type:"essay",response:"When I debug code, I first reproduce the problem and read the error carefully. Next I try one small change and test again. I keep notes so I can explain what fixed the problem and why.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()},{id:"seed-journal-2",sectionId:"p1",studentId:"sample-3",studentName:"Taylor Reed",courseId:"computer-science-1",week:Nd(),type:"logic-puzzle",response:"The differences are 4, 6, 8, and 10. The next difference is 12, so the next number is 42. This also follows the pattern n(n+1), starting at n = 1.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()}],Ls={"game-programming":[{id:"csharp-foundations",title:"C# Foundations",description:"Build the logic behind games.",lessons:["csharp-variables","csharp-conditionals"]},{id:"unity-systems",title:"Unity Gameplay",description:"Connect scripts and game mechanics.",lessons:["unity-colliders","unity-player-controller","unity-score"]}],"mobile-app-dev":[{id:"web-basics",title:"Web Foundations",description:"Create and style interface elements.",lessons:["web-layout","web-events"]},{id:"react-foundations",title:"React Essentials",description:"Build reusable and interactive UI.",lessons:["react-components","react-state"]}],uil:[{id:"java-language",title:"Java Language & Tracing",description:"Reason about loops and variables.",lessons:["uil-loops","uil-methods"]},{id:"java-data",title:"Data Structures",description:"Trace arrays and string operations.",lessons:["uil-arrays","uil-strings"]}],"tsi-math":[{id:"tsi-quantitative",title:"Quantitative Reasoning",description:"Rates, ratios, percentages, and proportions.",lessons:["tsi-ratios","tsi-percents"]},{id:"tsi-algebra",title:"Algebraic Reasoning",description:"Solve equations and interpret graphs.",lessons:["tsi-equations","tsi-slope"]}],capstone:[{id:"capstone-discover",title:"Discover the Problem",description:"Investigate a need worth solving.",lessons:["capstone-discovery","capstone-interviews"]},{id:"capstone-validate",title:"Prototype & Validate",description:"Turn evidence into an iterated prototype.",lessons:["capstone-prototype","capstone-feedback"]}]},dc=[{id:"asvab",title:"ASVAB",subtitle:"Military aptitude",description:"Start with the four AFQT subjects; technical subtests can be added later.",reference:"https://www.officialasvab.com/applicants/sample-questions/",topics:[{id:"asvab-ar",title:"Arithmetic Reasoning",description:"Use math to solve everyday word problems.",questions:[{id:"asvab-ar-sample-01",prompt:"A supply team divides 96 bolts equally among 8 tool kits. How many bolts go into each kit?",options:["8","10","12","16"],correct:2,explanation:"Divide 96 by 8. Each tool kit receives 12 bolts."},{id:"asvab-ar-sample-02",prompt:"A delivery vehicle travels 180 miles in 3 hours at a steady speed. What is its average speed?",options:["45 mph","60 mph","75 mph","90 mph"],correct:1,explanation:"Average speed equals distance divided by time: 180 ÷ 3 = 60 mph."}]},{id:"asvab-wk",title:"Word Knowledge",description:"Practice synonyms and vocabulary in context.",questions:[{id:"asvab-wk-sample-01",prompt:'In the sentence "The technician was meticulous when checking each connection," meticulous most nearly means:',options:["hurried","careful","uninterested","unprepared"],correct:1,explanation:"Meticulous describes someone who gives careful attention to detail."},{id:"asvab-wk-sample-02",prompt:'The word "scarce" most nearly means:',options:["plentiful","fragile","limited","unusual"],correct:2,explanation:"If something is scarce, there is not much of it available."}]},{id:"asvab-pc",title:"Paragraph Comprehension",description:"Identify main ideas and supporting details.",questions:[{id:"asvab-pc-sample-01",prompt:"Passage: The neighborhood library added Saturday hours because weekday attendance had increased. Staff hope the extra day will help working families visit. Why did the library extend its schedule?",options:["To replace weekday hours","To make visits easier for more people","To reduce staff","To host only weekend events"],correct:1,explanation:"The passage says Saturday hours respond to demand and help working families visit."},{id:"asvab-pc-sample-02",prompt:"Passage: Before using the lab, workers inspect equipment, record damaged items, and report problems. This routine helps prevent interruptions and injuries. What is the main purpose of the routine?",options:["Improving safety and reliability","Making the lab look new","Reducing all written records","Increasing equipment costs"],correct:0,explanation:"The checklist catches problems early and lowers risk to people and equipment."}]},{id:"asvab-mk",title:"Mathematics Knowledge",description:"Review algebra, geometry, and number sense.",questions:[{id:"asvab-mk-sample-01",prompt:"Solve for x: 3(x − 2) = 15.",options:["3","5","7","9"],correct:2,explanation:"Divide by 3: x − 2 = 5. Add 2: x = 7."},{id:"asvab-mk-sample-02",prompt:"What is the area of a triangle with a base of 10 units and a height of 7 units?",options:["17 square units","35 square units","70 square units","140 square units"],correct:1,explanation:"Triangle area is one-half times base times height: (10 × 7) ÷ 2 = 35."}]}]},{id:"sat",title:"SAT",subtitle:"Digital SAT",description:"Practice the Reading and Writing and Math sections. These samples are not adaptive and do not produce SAT scores.",reference:"https://satsuite.collegeboard.org/sat/practice-preparation",topics:[{id:"sat-rw",title:"Reading and Writing",description:"Interpret short passages, revise sentences, and choose transitions.",questions:[{id:"sat-rw-sample-01",prompt:'Choose the best transition: "Maya planned to bike to school. _____, heavy rain forced her to take the bus."',options:["For example","However","Similarly","Therefore"],correct:1,explanation:"However signals the contrast between Maya's plan and what happened."},{id:"sat-rw-sample-02",prompt:"Choose the grammatically correct sentence.",options:["Each of the notebooks have a label.","Each of the notebooks has a label.","Each of the notebooks are labeled.","Each of the notebook have labels."],correct:1,explanation:"The subject each is singular, so it takes has."}]},{id:"sat-math",title:"Math",description:"Use algebra and problem-solving strategies.",questions:[{id:"sat-math-sample-01",prompt:"If f(x) = 2x + 5, what is f(4)?",options:["9","11","13","18"],correct:2,explanation:"Substitute 4 for x: f(4) = 2(4) + 5 = 13."},{id:"sat-math-sample-02",prompt:"If 2x + y = 11 and y = 3, what is x?",options:["3","4","5","7"],correct:1,explanation:"Replace y with 3: 2x + 3 = 11, so 2x = 8 and x = 4."}]}]},{id:"act",title:"ACT",subtitle:"Enhanced ACT",description:"Practice English, Math, Reading, and optional Science using the updated ACT structure.",reference:"https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/act-exam-sections-and-structure.html",topics:[{id:"act-english",title:"English",description:"Revise sentences for grammar and clarity.",questions:[{id:"act-english-sample-01",prompt:'Choose the correct verb: "The team of engineers _____ ready to begin."',options:["are","is","were","have"],correct:1,explanation:"The singular subject team takes the singular verb is."},{id:"act-english-sample-02",prompt:"Choose the correctly punctuated sentence.",options:["After the storm the street was quiet.","After the storm, the street was quiet.","After, the storm the street was quiet.","After the storm the, street was quiet."],correct:1,explanation:"An introductory phrase is commonly followed by a comma."}]},{id:"act-math",title:"Math",description:"Practice algebra, geometry, and problem solving.",questions:[{id:"act-math-sample-01",prompt:"What is the slope of the line through (2, 1) and (6, 9)?",options:["1","2","4","8"],correct:1,explanation:"Slope = change in y ÷ change in x = (9 − 1) ÷ (6 − 2) = 8 ÷ 4 = 2."},{id:"act-math-sample-02",prompt:"A rectangle measures 8 inches by 5 inches. What is its perimeter?",options:["13 inches","26 inches","40 inches","80 inches"],correct:1,explanation:"Perimeter = 2(length + width) = 2(8 + 5) = 26 inches."}]},{id:"act-reading",title:"Reading",description:"Find key details and reasonable inferences.",questions:[{id:"act-reading-sample-01",prompt:"Passage: Lena repaired an old bicycle rather than buy a new one. She replaced the chain and adjusted the brakes so she could use it to commute. Which statement is supported?",options:["Lena sold the bike.","Lena intends to ride the repaired bike.","Lena cannot fix brakes.","Lena purchased a new bike."],correct:1,explanation:"The passage explicitly says Lena repaired the bike to use it for commuting."},{id:"act-reading-sample-02",prompt:"Passage: Residents created a neighborhood garden on an empty lot. Volunteers donated seeds, installed raised beds, and shared the harvest. What best describes the project?",options:["A commercial farm run by one company","A volunteer project that benefits neighbors","A plan to close the lot permanently","An indoor science experiment"],correct:1,explanation:"The volunteers worked together on a shared garden and harvest."}]},{id:"act-science",title:"Science (optional)",description:"Interpret experimental results, charts, and evidence.",questions:[{id:"act-science-sample-01",prompt:"In an experiment, a plant grew 2 cm at 10°C, 4 cm at 20°C, and 6 cm at 30°C over the same period. What pattern is shown?",options:["Growth decreases as temperature increases.","Growth remains constant.","Growth increases with temperature in these trials.","Temperature has no measurable relationship."],correct:2,explanation:"The recorded growth rises from 2 to 4 to 6 cm as temperature increases across these trials."},{id:"act-science-sample-02",prompt:"Two identical seedlings get the same light and water. One receives fertilizer and the other does not. Which variable is intentionally changed?",options:["Amount of light","Amount of water","Type of plant","Use of fertilizer"],correct:3,explanation:"Fertilizer is the independent variable; the other conditions are kept the same."}]}]}],of=dc.map(l=>({id:l.id,title:l.title,description:l.description,lessons:l.topics.map(u=>u.id)})),Yg=Object.fromEntries(dc.flatMap(l=>l.topics.map(u=>[u.id,{id:u.id,title:u.title,summary:u.description,language:"text",kind:"Sample practice",trackId:l.id}]))),Vg=l=>{for(const u of dc){const d=u.topics.find(f=>f.id===l);if(d)return{track:u,topic:d}}return null};dc.reduce((l,u)=>l+u.topics.reduce((d,f)=>d+f.questions.length,0),0);const Jg=[{id:"01-how-programs-work/01-first-message",unit:1,unitName:"How Programs Work",lesson:1,slug:"01-first-message",title:"Instructions and output",concept:"Output and strings",summary:"Tell a computer what to display using a simple Python instruction.",mode:"script",starter:`# Use print() to display the exact welcome message.
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
`}],Xg=[{id:"02-values-and-variables/01-meet-variables",unit:2,unitName:"Values, Variables & Expressions",lesson:1,slug:"01-meet-variables",title:"Names for changing information",concept:"Variables and assignment  ",summary:"Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.",mode:"script",starter:`# Name the player with a variable, then display the required message.
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
`}],Qg=[{id:"03-functions-and-parameters/01-functions-return",unit:3,unitName:"Functions, Parameters & Return Values",lesson:1,slug:"01-functions-return",title:"Returning an answer",concept:"Function definitions and return  ",summary:"A function packages instructions into a reusable operation. A function can give a result back with `return`.",mode:"function",starter:`def increment_number(number):
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
`}],Zg=[{id:"04-comparisons-and-boolean-logic/01-comparisons",unit:4,unitName:"Comparisons & Boolean Logic",lesson:1,slug:"01-comparisons",title:"Ask Python a question",concept:"Comparison operators and Boolean values  ",summary:"A comparison is a question that evaluates to a Boolean value: `True` or `False`.",mode:"function",starter:`def has_required_points(current, required):
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
`}],ey=[{id:"05-conditional-execution/01-first-if",unit:5,unitName:"Conditional Execution",lesson:1,slug:"01-first-if",title:"Make a choice with if",concept:"If statements and indentation  ",summary:"Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.",mode:"function",starter:`def classify_temperature(temperature):
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
`}],ty=[{id:"06-iteration/01-for-ranges",unit:6,unitName:"Iteration & Accumulation",lesson:1,slug:"01-for-ranges",title:"Repeat an instruction",concept:"For loops and ranges  ",summary:"A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.",mode:"script",starter:`# Use one loop to print the integers 1 through 4.
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
`}],ny=[{id:"07-strings-and-text/01-index-and-length",unit:7,unitName:"Strings & Text Processing",lesson:1,slug:"01-index-and-length",title:"Read characters by position",concept:"String indexing and length",summary:"A string is an ordered sequence of characters. Positions start at zero, and negative indexes count from the end.",mode:"function",starter:`def edge_letters(text):
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
`}],ry=[{id:"08-lists-and-collections/01-list-indexing",unit:8,unitName:"Lists & Collections",lesson:1,slug:"01-list-indexing",title:"Read values from a list",concept:"Lists, indexes, negative positions",summary:"A list stores several values in order, and each can be read using its position.",mode:"function",starter:`def end_points(values):
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
`}],iy=[{id:"09-dictionaries-and-data/01-keys-and-values",unit:9,unitName:"Dictionaries & Data",lesson:1,slug:"01-keys-and-values",title:"Look up information by key",concept:"Dictionary lookup and get",summary:"Dictionaries connect unique keys with values, letting a program retrieve information by name.",mode:"function",starter:`def price_for(prices, item):
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
`}],sy=[{id:"10-algorithms-and-testing/01-while-and-sentinels",unit:10,unitName:"Algorithms & Testing",lesson:1,slug:"01-while-and-sentinels",title:"Repeat until a stop signal",concept:"While loops and sentinel values",summary:"A `while` loop repeats until a condition changes, making it useful when the stopping point is part of the input.",mode:"function",starter:`def before_stop(events):
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
`}],oy=[...Jg,...Xg,...Qg,...Zg,...ey,...ty,...ny,...ry,...iy,...sy],dm={"python-strings":{title:"Strings and Variables",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Create a greeting using a name and a favorite topic.",starter:`name = "Jordan"
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
`,console:"Run, Check and Submit are simulated in this React design lab."},"tsi-percents":{title:"Percents and Discounts",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Use percentages in everyday situations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-equations":{title:"Solve Linear Equations",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Solve a one-variable equation with inverse operations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-slope":{title:"Slope and Rate of Change",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Interpret slope from a table of values.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."}};function ta(l){return typeof l=="string"?l:typeof(l==null?void 0:l.id)=="string"?l.id:""}function Rs(l){return String((l==null?void 0:l.title)||(l==null?void 0:l.unitName)||(l==null?void 0:l.name)||"Lessons")}function pc(l,u=1){return(l==null?void 0:l.number)??(l==null?void 0:l.unit)??u}function is(l){return((l==null?void 0:l.lessons)||[]).map(ta).filter(Boolean)}function oc(l){return Array.isArray(l==null?void 0:l.units)?l.units.flatMap(is):Array.isArray(l==null?void 0:l.lessons)?l.lessons.map(ta).filter(Boolean):[]}function ay(l,u){return((l==null?void 0:l.units)||[]).some(d=>is(d).includes(u))}function na(l,u,d=dm){var w,_;if(!u)return null;const f=((l==null?void 0:l.units)||[]).find(N=>is(N).includes(u)),g=((f==null?void 0:f.lessons)||[]).find(N=>ta(N)===u),v=typeof g=="object"&&g||((w=f==null?void 0:f.lessonMeta)==null?void 0:w[u])||((_=l==null?void 0:l.lessonRecords)==null?void 0:_[u])||{},k=(d==null?void 0:d[u])||{},C=String(v.title||v.name||k.title||u.split("/").at(-1));return{...k,...v,id:u,title:C,kind:v.kind||k.kind||"Lesson",difficulty:v.difficulty||k.difficulty||"",points:v.points??k.points??null,language:v.language||k.language||(l==null?void 0:l.language)||"text",challenge:v.challenge||v.summary||k.challenge||"",starter:v.starter||k.starter||"",console:k.console||(v.markdownSource?v.language==="python"?"Run Python to see your output. Checks use published examples only.":"Preview-only workspace. Use the production Playground for functional language runners and verified checks.":""),ready:!!(d!=null&&d[u])||typeof v.markdownSource=="string"&&v.starter!==void 0,isPublished:typeof v.markdownSource=="string"&&v.starter!==void 0}}function ra(l,u,d=dm){var f;return((f=na(l,u,d))==null?void 0:f.title)||""}function nl(l){const u=Array.isArray(l)?{lessons:l}:l||{},d=new Map,f=new Set,g=[],v=(w,_,N,O)=>{const L=String(w);let Y=g.find(U=>U.id===L);return Y||(Y={id:L,title:String(_||"Lessons"),description:String(N||""),number:O,lessons:[]},g.push(Y)),Y},k=(w,_)=>{const N=ta(_);!N||f.has(N)||(f.add(N),w.lessons.push(N),d.set(N,typeof _=="string"?{id:N}:{..._}))};Array.isArray(u.units)?u.units.forEach((w,_)=>{const N=v(w.id||`unit-${_+1}`,Rs(w),w.description||w.summary,pc(w,_+1));(w.lessons||[]).forEach(O=>k(N,O))}):Array.isArray(u.lessons)&&u.lessons.forEach((w,_)=>{if(!w||!ta(w))return;const N=w.unit||null,O=ta(w).indexOf("/"),L=N!=null?O>=0?ta(w).slice(0,O):`unit-${N}`:w.competency?`topic-${String(w.competency).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`:"lessons",Y=w.unitName||w.competency||"Lessons",U=v(L,Y,"",N??g.length+1);k(U,w)});const C=Object.fromEntries((u.challenges||[]).filter(Boolean).map(w=>[ta(w),{...w}]).filter(([w])=>w));return{units:g,lessonRecords:Object.fromEntries(d),lessons:g.flatMap(is),challengeRecords:C,challenges:Object.keys(C)}}const Dp=nl(oy),rs=[{id:"computer-science-1",units:Dp.units,lessonRecords:Dp.lessonRecords,language:"python",publishedContent:!0,slug:"computer-science-1",label:"Computer Science I",short:"Python",glyph:"py",color:"#6366F1",description:"Build your problem-solving toolkit with Python.",lessons:Dp.lessons,topics:["Variables","Strings","Formatting","Conditions","Lists"]},{id:"game-programming",units:Ls["game-programming"],slug:"game-programming",label:"Game Programming & Design",short:"C# · Unity",glyph:"C#",color:"#C052EB",description:"Make ideas playable with Unity and C#.",lessons:Ls["game-programming"].flatMap(l=>l.lessons),topics:["C# Basics","Rigidbody","Colliders"]},{id:"mobile-app-dev",units:Ls["mobile-app-dev"],slug:"mobile-app-web",label:"Mobile App & Web",short:"React · JavaScript",glyph:"js",color:"#27BBD2",description:"Create useful websites and mobile applications.",lessons:Ls["mobile-app-dev"].flatMap(l=>l.lessons),topics:["HTML","CSS","JavaScript","React"]},{id:"capstone",units:Ls.capstone,slug:"capstone",label:"Capstone",short:"Build for someone",glyph:"++",color:"#FF2D55",description:"Research a problem, prototype, and test a solution.",lessons:Ls.capstone.flatMap(l=>l.lessons),topics:["Research","Prototype","Pitch"]},{id:"uil",units:Ls.uil,slug:"uil",label:"UIL Computer Science",short:"Java",glyph:"jv",color:"#FF9F0A",description:"Trace Java, explain your reasoning, and practice.",lessons:Ls.uil.flatMap(l=>l.lessons),topics:["Java","Arrays","Written","Programming"]},{id:"test-prep",units:of,lessonRecords:Yg,slug:"test-prep",label:"Test Prep",short:"TSI · ASVAB · SAT · ACT",glyph:"ex",color:"#15B7A3",description:"College readiness and military aptitude study, all in one place.",lessons:of.flatMap(l=>l.lessons),topics:["TSI","ASVAB","SAT","ACT"]},{id:"tsi-math",units:Ls["tsi-math"],slug:"tsi-math",label:"TSI Math Advisory",short:"Math · Open access",glyph:"ma",color:"#30C85A",description:"Quantitative reasoning and algebra practice.",lessons:Ls["tsi-math"].flatMap(l=>l.lessons),topics:["Percents","Ratios","Equations"]}],Sr=l=>rs.find(u=>u.id===l),pm=l=>{var u;return(u=Sr(l))==null?void 0:u.label};function Md(l){return typeof l=="string"&&/^#[0-9a-fA-F]{6}$/.test(l)}function ly(l,u={}){const d=u&&typeof u=="object"?u[l.id]:null;return Md(d)?d.toUpperCase():l.color}function uy(l){if(!Md(l))return"#101012";const u=[1,3,5].map(f=>parseInt(l.slice(f,f+2),16)/255).map(f=>f<=.04045?f/12.92:((f+.055)/1.055)**2.4);return u[0]*.2126+u[1]*.7152+u[2]*.0722>.179?"#101012":"#FFFFFF"}function cy(l,u,d=document.documentElement){for(const f of u){const g=`--student-course-color-${f.id}`,v=l&&typeof l=="object"?l[f.id]:null,k=`--student-course-ink-${f.id}`;Md(v)?(d.style.setProperty(g,v),d.style.setProperty(k,uy(v))):(d.style.removeProperty(g),d.style.removeProperty(k))}}function Kn(l,u){const[d,f]=ve.useState(()=>{try{const g=localStorage.getItem(l);return g===null?u:JSON.parse(g)}catch{return u}});return ve.useEffect(()=>{try{localStorage.setItem(l,JSON.stringify(d))}catch{}},[l,d]),[d,f]}function dy(l,u=[]){return Array.isArray(u)&&u.includes(l)}function hm(l,u=[]){const d=oc(l),f=d.filter(g=>dy(g,u)).length;return{completed:f,total:d.length,percent:d.length?Math.round(f/d.length*100):0}}const py=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function hy(l=new Date){const u=Object.fromEntries(py.formatToParts(l).filter(d=>d.type!=="literal").map(d=>[d.type,d.value]));return`${u.year}-${u.month}-${u.day}`}function Ed(l){return l?new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}):""}function Sd(l,u=[]){return u.find(d=>d.id===l)||null}function fy(l,u=[]){return u.find(d=>d.id===l)||null}function zd(l,{assignments:u=[],grades:d=[],completedLessons:f=[],today:g=hy()}={}){const v=fy(l,u),k=Sd(l,d),C=l.startsWith("lesson:")&&f.includes(l.slice(7)),w=!!k||C;return v!=null&&v.dueDate?{state:w?"completed":v.dueDate<g?"overdue":"assigned",dueDate:v.dueDate,grade:k,completed:w}:{state:w?"completed":"unassigned",dueDate:null,grade:k,completed:w}}function eh(l=[]){const u=l.reduce((f,g)=>f+g.earned,0),d=l.reduce((f,g)=>f+g.possible,0);return{earned:u,possible:d,percent:d?Math.round(100*u/d):null,count:l.length}}function my(l=[]){const u=new Map;return l.forEach(d=>{const f=Nd(new Date(d.gradedAt+"T12:00:00Z"));u.has(f)||u.set(f,[]),u.get(f).push(d)}),[...u.entries()].map(([d,f])=>({week:d,...eh(f)})).sort((d,f)=>f.week.localeCompare(d.week))}function gy(l=[],u=[]){return[...new Set([...Array.isArray(l)?l:[],...u.filter(d=>d.id.startsWith("lesson:")).map(d=>d.id.slice(7))])]}const yy="/playground/data",vy=new Set(["game-programming","mobile-app-dev","uil","tsi-math"]);function xy(l){if(typeof l!="string"||!l||l.startsWith("/")||l.includes("\\")||l.includes("?")||l.includes("#")||l.split("/").some(u=>u===".."||u==="."||u===""))throw new Error("Invalid curriculum resource path");return l}function hc(l,u){if(!vy.has(l))throw new Error("Unknown published course");return yy+"/"+l+"/"+xy(u)}async function tr(l,u,d,f,g=!1){const v=await d(hc(l,u),{signal:f,cache:"no-store"});if(!v.ok)throw new Error("Published "+l+" resource unavailable: "+u);return g?v.json():v.text()}function ph(l,u,d,f,g){var v,k,C;return{...l,markdownSource:u,starter:d??"",language:f,markdownUrl:hc(g,l.markdown),kind:"Lesson",challenge:((v=l.exercise)==null?void 0:v.prompt)||l.summary||l.objective||l.title||"",points:l.points??null,cases:((k=l.exercise)==null?void 0:k.examples)||l.cases||[],hints:((C=l.exercise)==null?void 0:C.hints)||l.hints||[],mode:l.exercise?"function":"script"}}async function by(l,u){const d="game-programming",f=await tr(d,"course.json",l,u,!0),g=await Promise.all(f.units.map(async v=>({id:v.id,number:v.number,title:v.title,description:v.summary||"",lessons:await Promise.all(v.lessons.map(async k=>{var _,N,O,L,Y;const C=await tr(d,k.markdown,l,u);return{...ph(k,C,(_=k.exercise)==null?void 0:_.starter,"csharp",d),starter:((N=k.exercise)==null?void 0:N.starter)||"",kind:"Lesson",exerciseId:(O=k.exercise)==null?void 0:O.id,challenge:((L=k.exercise)==null?void 0:L.prompt)||k.title,unityTask:k.unityTask||[],markdownSource:C+((Y=k.unityTask)!=null&&Y.length?`

### Unity activity
`+k.unityTask.map(U=>"- "+U).join(`
`):"")}}))})));return{...nl({units:g}),source:"published",projects:[]}}async function af(l,u,d,f){if(!u)return null;const g=Object.keys(u);if(!g.includes("index.html")||!g.includes("styles.css")||!g.includes("script.js")&&!g.includes("App.jsx"))throw Error("A Mobile App starterFiles entry requires index.html, styles.css and script.js (or App.jsx).");return Object.fromEntries(await Promise.all(g.map(async v=>[v,await tr(l,u[v],d,f)])))}async function wy(l,u){const d="mobile-app-dev",f=await tr(d,"course.json",l,u,!0),g=await Promise.all(f.lessons.map(async k=>{const[C,w,_]=await Promise.all([tr(d,k.markdown,l,u),k.starterFile?tr(d,k.starterFile,l,u):Promise.resolve(""),af(d,k.starterFiles,l,u)]);return{...ph(k,C,w,k.language==="react"?"jsx":k.language,d),..._?{starterFiles:_}:{}}})),v=await Promise.all((f.projects||[]).map(async k=>{const[C,w]=await Promise.all([k.starterFile?tr(d,k.starterFile,l,u):Promise.resolve(""),af(d,k.starterFiles,l,u)]),_=await Promise.all(k.steps.map(async N=>({...N,focus:N.focus||N.title,markdownSource:await tr(d,N.markdown,l,u),markdownUrl:hc(d,N.markdown)})));return{id:k.id,title:k.title,summary:k.summary,skills:k.skills||[],starter:C,language:"html",steps:_,...w?{starterFiles:w}:{}}}));return{...nl({lessons:g}),projects:v,source:"published"}}async function ky(l,u){const f=await tr("uil","course.json",l,u,!0),g=await tr("uil",f.written.markdown,l,u),v=await tr("uil",f.written.practice,l,u,!0),C=(Array.isArray(v)?v:v.questions||[]).map((O,L)=>{const Y=O.choices||O.options||[];return"### Practice question "+(L+1)+`

`+String(O.prompt||O.question||"")+`

`+Y.map((U,F)=>String.fromCharCode(65+F)+". "+U).join(`

`)}).join(`

`),w={id:"written",title:"Written practice",language:"text",markdown:f.written.markdown,markdownSource:g+`

## Published practice questions

`+C,markdownUrl:hc("uil",f.written.markdown),starter:"",kind:"Practice",challenge:"Review Java reasoning and the published written-practice questions."},_=await Promise.all(f.lessons.map(async O=>{const[L,Y]=await Promise.all([tr("uil",O.markdown,l,u),tr("uil",O.starterFile,l,u)]);return ph(O,L,Y,"java","uil")}));return{...nl({units:[{id:"written-preparation",number:1,title:"Written preparation",lessons:[w]},{id:"programming-practice",number:2,title:"Java programming practice",lessons:_}]}),source:"published",projects:[]}}async function Sy(l,u){const d="tsi-math",[f,g,v,k]=await Promise.all([tr(d,"content/20-day-program.json",l,u,!0),tr(d,"content/strand-lessons-v1.json",l,u,!0),tr(d,"content/diagnostic-24-mc-v2.json",l,u,!0),tr(d,"content/math-locator-profiles.json",l,u,!0)]),C=(f.days||[]).map(_=>({id:_.id,title:_.title,challenge:"Day "+_.day+" · "+_.strand+" · 30 minutes",kind:"Planned session",language:"text",starter:"",ready:!1,status:"planned"})),w=await Promise.all((g.lessons||[]).map(async _=>{const[N,O]=await Promise.all([tr(d,_.student_lesson,l,u),tr(d,_.teacher_key,l,u,!0)]);return{id:_.id,title:_.title,kind:"Draft practice",status:"draft",language:"text",markdown:_.student_lesson,markdownUrl:hc(d,_.student_lesson),markdownSource:N,tsiKey:O,tsiStrandDraft:!0,starter:"",challenge:"Currently authored draft lesson · "+_.minutes+" minutes"}}));return{...nl({units:[{id:"study-schedule",number:1,title:"20-day study schedule (in development)",lessons:C},{id:"authored-strands",number:2,title:"Available draft strand lessons",lessons:w}]}),source:"published-draft",projects:[],tsiDraft:!0,diagnosticItems:v.items||[],locatorProfiles:k.profiles||[]}}async function _y(l,{fetchImpl:u=fetch,signal:d}={}){if(l==="game-programming")return by(u,d);if(l==="mobile-app-dev")return wy(u,d);if(l==="uil")return ky(u,d);if(l==="tsi-math")return Sy(u,d);throw new Error("Unknown published course")}const Yu=!0;async function Cy(){const l="/playground/integration/account-bridge.js",{readOnlyCs1Snapshot:u}=await import(l);return u()}const ho=(...l)=>l.filter(Boolean).join(" "),Ty=["temperature-alert","count-matches","sum-positives","score-line","attendance-percent","longest-win-streak","confidence-total","second-largest-distinct","target-pairs","competition-ranks"],jy="/playground/integration/",Ny="/"+jy.replace(/^\/+|\/+$/g,""),yo=l=>`${Ny}/#${l}`,Gl=()=>yo("/"),lf=()=>yo("/teacher"),Ey=()=>yo("/admin"),Ly=()=>yo("/journals"),Py=()=>yo("/grades"),Kl=(l=null)=>yo(l?`/challenges/course/${encodeURIComponent(l)}`:"/challenges"),fm=l=>yo(`/challenges/${encodeURIComponent(l)}`);function mm(l,u,d=null){const f=typeof l=="string"?Sr(l):l;if(!f||!u)return Gl();const g=`/playgrounds/${encodeURIComponent(f.slug)}/projects/${encodeURIComponent(u)}`;return yo(d?`${g}/steps/${encodeURIComponent(d)}`:g)}function Fd(l,u){const d=typeof l=="string"?Sr(l):l;if(!d)return Gl();const f=`/playgrounds/${encodeURIComponent(d.slug)}`;return yo(u?`${f}/lessons/${encodeURIComponent(u)}`:f)}function gd(l,u=rs){const v=((typeof window<"u"&&window.location.hash.slice(1)||"/").replace(/\/+$/,"")||"/").slice("".length)||"/";if(v==="/")return{page:"home"};if(v==="/teacher")return{page:"teacher"};if(v==="/admin")return{page:"admin"};if(v==="/journals")return{page:"journals"};if(v==="/grades")return{page:"grades"};if(v==="/challenges")return{page:"challenges",filterCourse:null};if(v.startsWith("/challenges/")){const N=v.split("/").filter(Boolean);try{if(N.length===3&&N[1]==="course"){const O=decodeURIComponent(N[2]);return Sr(O)?{page:"challenges",filterCourse:O}:{page:"not-found"}}if(N.length===2){const O=decodeURIComponent(N[1]);return Ty.includes(O)?{page:"challenge",challengeId:O}:{page:"not-found"}}}catch{return{page:"not-found"}}return{page:"not-found"}}const k=v.split("/").filter(Boolean);if(k[0]!=="playgrounds"||![2,4,6].includes(k.length))return{page:"not-found"};let C,w;try{C=decodeURIComponent(k[1]),w=k.length===4?decodeURIComponent(k[3]):void 0}catch{return{page:"not-found"}}const _=u.find(N=>N.slug===C);if(!_)return{page:"not-found"};if(k[2]==="projects"&&(k.length===4||k.length===6))try{const N=decodeURIComponent(k[3]),O=(_.projects||[]).find(Y=>Y.id===N),L=k.length===6?decodeURIComponent(k[5]):null;return!O||L&&(k[4]!=="steps"||!O.steps.some(Y=>Y.id===L))?{page:"not-found"}:{page:"course",courseId:_.id,lessonId:null,projectId:N,stepId:L}}catch{return{page:"not-found"}}return k.length!==2&&(k.length!==4||k[2]!=="lessons")?{page:"not-found"}:w&&!ay(_,w)?{page:"not-found"}:{page:"course",courseId:_.id,lessonId:w??null}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gm=(...l)=>l.filter((u,d,f)=>!!u&&u.trim()!==""&&f.indexOf(u)===d).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ry={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=ve.forwardRef(({color:l="currentColor",size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f,className:g="",children:v,iconNode:k,...C},w)=>ve.createElement("svg",{ref:w,...Ry,width:u,height:u,stroke:l,strokeWidth:f?Number(d)*24/Number(u):d,className:gm("lucide",g),...C},[...k.map(([_,N])=>ve.createElement(_,N)),...Array.isArray(v)?v:[v]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=(l,u)=>{const d=ve.forwardRef(({className:f,...g},v)=>ve.createElement(Iy,{ref:v,iconNode:u,className:gm(`lucide-${Ay(l)}`,f),...g}));return d.displayName=`${l}`,d};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=_t("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=_t("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=_t("BookOpenCheck",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=_t("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=_t("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=_t("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=_t("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=_t("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=_t("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=_t("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=_t("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=_t("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=_t("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=_t("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=_t("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=_t("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=_t("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=_t("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=_t("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=_t("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=_t("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=_t("FlaskConical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=_t("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=_t("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=_t("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=_t("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=_t("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=_t("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=_t("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=_t("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=_t("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=_t("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=_t("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=_t("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=_t("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=_t("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=_t("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=_t("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=_t("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=_t("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=_t("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=_t("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=_t("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=_t("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=_t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function fi({children:l,tone:u=""}){return c.jsx("span",{className:ho("chip",u&&`chip-${u}`),children:l})}function rv({theme:l,setTheme:u}){const d=l==="dark";return c.jsx("button",{className:"icon-button",title:d?"Switch to light mode":"Switch to dark mode","aria-label":"Toggle light and dark mode",onClick:()=>u(d?"light":"dark"),children:d?c.jsx(tv,{size:17}):c.jsx(Xy,{size:17})})}function iv({sidebarOpen:l,onToggleSidebar:u,onHome:d,theme:f,setTheme:g,readOnlyMode:v=!1,accountLabel:k=null}){var C;return c.jsx("header",{className:"topbar",children:c.jsxs("div",{className:"topbar-inner",children:[c.jsx("button",{className:"icon-button nav-toggle",onClick:u,"aria-label":"Toggle navigation",children:l?c.jsx(Qy,{size:18}):c.jsx(Jy,{size:18})}),c.jsxs("button",{className:"brand",onClick:d,children:[c.jsx("span",{className:"brand-logo",children:"{ }"}),c.jsx("strong",{children:"Ms. Whitby's Playground"}),c.jsx("span",{className:"brand-compact",children:"React Lab"})]}),c.jsx("div",{className:"topbar-spacer"}),c.jsx(fi,{children:v?"CS1 READ-ONLY TEST":"LOCAL DESIGN LAB"}),c.jsx(rv,{theme:f,setTheme:g}),c.jsx("span",{className:"user-circle",title:k||"Read-only preview",children:((C=k==null?void 0:k[0])==null?void 0:C.toUpperCase())||"W"})]})})}const sv=[["home","Home",Yy],["challenges","Challenge Bank",Bd],["journals","Weekly Journals",hh],["grades","Grades",Ky],["teacher","Teacher Dashboard",fh],["admin","Admin Dashboard",km]];function ov({open:l,page:u,courseId:d,lessonId:f,setPage:g,openCourse:v,onOpenProject:k,availableCourses:C=rs,completedLessons:w=[],assignments:_=[],grades:N=[],readOnlyMode:O=!1}){var Y;const L=u==="course"?C.find(U=>U.id===d):null;return c.jsxs("aside",{className:ho("main-sidebar",!l&&"collapsed"),"aria-label":"Playground navigation",children:[c.jsx("div",{className:"side-title",children:"EXPLORE"}),sv.filter(([U])=>!O||["home","grades","teacher","admin"].includes(U)).map(([U,F,V])=>c.jsxs("button",{className:ho("nav-item",(u===U||U==="challenges"&&u==="challenge")&&"active"),onClick:()=>g(U),title:F,children:[c.jsx(V,{size:19}),c.jsx("span",{children:F})]},U)),L&&c.jsxs("section",{className:"course-outline","data-course":L.id,"aria-label":`${L.label} outline`,children:[c.jsx("div",{className:"side-rule"}),c.jsx("div",{className:"side-title",children:"COURSE CONTENT"}),c.jsxs("button",{className:ho("outline-overview",!f&&"active"),onClick:()=>v(L.id),children:[c.jsx(ia,{size:16}),c.jsx("span",{children:"Course Overview"})]}),L.units.map((U,F)=>c.jsxs("details",{className:"outline-unit",open:is(U).includes(f)||!f&&F===0?!0:void 0,children:[c.jsxs("summary",{children:[c.jsx("span",{className:"outline-unit-number",children:String(pc(U,F+1)).padStart(2,"0")}),c.jsx("span",{className:"outline-unit-title",title:Rs(U),children:Rs(U)}),c.jsx(xm,{size:14})]}),c.jsx("div",{className:"outline-lesson-list",children:is(U).map(V=>{const I=ra(L,V),z=zd("lesson:"+V,{assignments:_,grades:N,completedLessons:w}),B=z.completed?"completed":z.dueDate?z.state:"",H=B==="completed"?"Completed":B==="overdue"?"Overdue":B==="assigned"?"Assigned":"";return c.jsxs("button",{onClick:()=>v(L.id,V),className:ho("outline-lesson",V===f&&"selected"),"aria-label":H?`${I}, ${H.toLowerCase()}`:I,title:H?`${I} · ${H}`:I,"aria-current":V===f?"page":void 0,children:[c.jsx("span",{className:"outline-lesson-name",children:I}),H&&c.jsx("span",{className:`assignment-dot ${B}`,"aria-hidden":"true"})]},V)})})]},`${L.id}-${U.id}-${f||"overview"}`)),!!((Y=L.projects)!=null&&Y.length)&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"side-section-title",children:"PROJECTS"}),L.projects.map(U=>c.jsx("button",{type:"button",className:"outline-lesson",title:U.title,onClick:()=>k==null?void 0:k(L.id,U.id),children:c.jsx("span",{className:"outline-lesson-name",children:U.title})},U.id))]})]}),c.jsx("div",{className:"side-rule"}),c.jsx("div",{className:"side-title",children:"PLAYGROUNDS"}),C.filter(U=>U.id!=="tsi-math").map(U=>c.jsxs("button",{"data-course":U.id,className:ho("nav-item course-nav-item",u==="course"&&d===U.id&&"active"),onClick:()=>v(U.id),title:U.label,children:[c.jsx("span",{className:"nav-dot"}),c.jsx("span",{children:U.label})]},U.id)),c.jsxs("div",{className:"sidebar-bottom",children:[c.jsx(zy,{size:17}),c.jsx("span",{children:"Your learning spaces"})]})]})}function av(){return c.jsxs("footer",{className:"site-footer",children:[c.jsx("span",{children:"Ms. Whitby's Playground · React design lab"}),c.jsx("span",{children:"Fictional data · No authentication or backend · No real code execution"})]})}const lv={"computer-science-1":Hd,"game-programming":$y,"mobile-app-dev":ev,uil:Sm,"tsi-math":vm,"test-prep":Wy,capstone:Zy};function uv({course:l,onOpen:u,completedLessons:d=[]}){const{completed:f,total:g}=hm(l,d),v=lv[l.id]||Hd;function k(C){C.button!==0||C.metaKey||C.ctrlKey||C.shiftKey||C.altKey||(C.preventDefault(),u())}return c.jsxs("a",{className:"course-card","data-course":l.id,href:Fd(l),onClick:k,children:[c.jsxs("div",{className:"course-card-heading",children:[c.jsx("span",{className:"course-glyph","aria-hidden":"true",children:c.jsx(v,{size:24,strokeWidth:2.2})}),c.jsxs("div",{children:[c.jsx("h2",{children:l.label}),c.jsx("p",{children:l.short})]})]}),c.jsx("p",{className:"course-description",children:l.description}),c.jsxs("div",{className:"course-card-footer",children:[c.jsxs("div",{className:"course-meta",children:[c.jsxs("span",{children:[g," ",g===1?"lesson":"lessons"]}),c.jsxs("span",{children:[f," completed"]})]}),c.jsx("progress",{className:"course-progress-track",value:f,max:Math.max(g,1),"aria-label":`${l.label}: ${f} of ${g} lessons completed`})]})]})}function cv({onClick:l}){return c.jsxs("button",{className:"wide-shortcut",onClick:l,children:[c.jsx(fh,{size:18}),c.jsxs("span",{children:[c.jsx("strong",{children:"Teacher Dashboard preview"}),c.jsx("small",{children:"Section roster, expanded student assignments, account matching, and weekly points"})]}),c.jsx(ni,{size:18})]})}function dv({openCourse:l,openTeacher:u,openChallenges:d,availableCourses:f=rs,completedLessons:g=[],readOnlyMode:v=!1}){return c.jsxs("div",{className:"main-content",children:[c.jsxs("div",{className:"welcome",children:[c.jsx("div",{className:"eyebrow",children:"Your learning spaces"}),c.jsx("h1",{children:"Your Playgrounds"}),c.jsxs("p",{children:["Choose a course to continue learning. ",v?"Review Computer Science I lessons and your existing verified results. Practice is local to this test build.":"Complete lessons to fill your progress bars."]})]}),c.jsx("div",{className:"course-card-grid",children:f.filter(k=>k.id!=="tsi-math").map(k=>c.jsx(uv,{course:k,completedLessons:g,onOpen:()=>l(k.id)},k.id))}),!v&&c.jsxs("button",{type:"button",className:"wide-shortcut challenge-bank-shortcut",onClick:d,children:[c.jsx(Bd,{size:23}),c.jsxs("span",{children:[c.jsx("strong",{children:"Shared Challenge Bank"}),c.jsx("small",{children:"Practice one problem in Python, Java, JavaScript, or C#."})]}),c.jsx("span",{"aria-hidden":"true",children:"→"})]}),!v&&c.jsx(cv,{onClick:u})]})}function pv({course:l,openCourse:u,openProject:d,openChallenges:f,completedLessons:g=[],assignments:v=[],grades:k=[],courseColors:C={},onSetCourseColor:w,onResetCourseColor:_,readOnlyMode:N=!1}){var F;const O=hm(l,g),[L,Y]=ve.useState(!1),U=ly(l,C);return c.jsxs("div",{className:"course-landing",children:[c.jsxs("header",{className:"course-hero surface-card",children:[c.jsx("button",{type:"button",className:"icon-button course-color-settings",onClick:()=>Y(V=>!V),"aria-label":L?"Close course color settings":`Change ${l.label} color`,title:L?"Close settings":"Course color","aria-expanded":L,"aria-controls":"course-color-controls",children:L?c.jsx(Ud,{size:17}):c.jsx(yh,{size:17})}),c.jsx("div",{className:"eyebrow",children:"Course overview"}),c.jsx("h1",{children:l.label}),c.jsx("p",{children:l.description}),c.jsxs("div",{className:"course-hero-stats",children:[c.jsxs("span",{children:[c.jsx(Vy,{size:16})," ",l.units.length," units"]}),c.jsxs("span",{children:[c.jsx(ia,{size:16})," ",oc(l).length," lessons"]})]}),c.jsxs("button",{className:"btn primary",disabled:!oc(l).length,onClick:()=>u(l.id,oc(l)[0]),children:["Start learning ",c.jsx(ni,{size:16})]}),L&&c.jsxs("section",{id:"course-color-controls",className:"course-color-controls","aria-label":"Choose a course color",children:[c.jsxs("div",{className:"course-color-control-copy",children:[c.jsx("strong",{children:"Course color"}),c.jsx("p",{children:"Make this course your own. The color updates throughout your Playground."})]}),c.jsxs("label",{className:"course-color-picker",children:[c.jsx("input",{type:"color",value:U,onChange:V=>w==null?void 0:w(l.id,V.target.value),"aria-label":`Choose a color for ${l.label}`}),c.jsx("span",{children:"Choose color"})]}),c.jsx("button",{type:"button",className:"btn",onClick:()=>_==null?void 0:_(l.id),children:"Reset to default"}),c.jsx("button",{type:"button",className:"btn",onClick:()=>Y(!1),children:"Done"})]})]}),l.publishedContent&&c.jsx("p",{className:"course-published-note",children:"Real published lessons are shown here. Practice in this preview does not change your grades."}),l.contentLoadingError&&c.jsxs("p",{className:"course-published-note",role:"alert",children:["Published course materials could not be loaded: ",l.contentLoadingError,". Sample lessons are not substituted."]}),!l.publishedContent&&!l.contentLoadingError&&c.jsx("p",{className:"course-published-note",children:"Course materials are not yet published here. This is a design preview, not a course to assign."}),l.tsiDraft&&c.jsx("p",{className:"course-published-note",children:"The 20-day TSI schedule is an outline; four strand lessons are drafts. Unwritten sessions are not available for practice."}),c.jsxs("p",{className:"course-landing-progress",children:[O.completed," of ",O.total," lessons ",N?"with verified grades":l.publishedContent?"marked complete in preview":"completed"," · ",O.percent,"%"]}),c.jsx("div",{className:"course-landing-heading",children:c.jsxs("div",{children:[c.jsx("h2",{children:"Units & lessons"}),c.jsx("p",{children:"Choose a unit or jump directly into a lesson."})]})}),c.jsx("div",{className:"unit-card-grid",children:l.units.map((V,I)=>c.jsxs("section",{className:"unit-card surface-card",children:[c.jsxs("header",{className:"unit-card-header",children:[c.jsxs("span",{className:"unit-badge",children:["UNIT ",String(pc(V,I+1)).padStart(2,"0")]}),c.jsx("h3",{title:Rs(V),children:Rs(V)}),V.description&&c.jsx("p",{children:V.description})]}),c.jsx("div",{className:"unit-lessons",children:is(V).map((z,B)=>c.jsxs("a",{className:"unit-lesson-link",href:Fd(l,z),onClick:H=>{H.button!==0||H.metaKey||H.ctrlKey||H.shiftKey||H.altKey||(H.preventDefault(),u(l.id,z))},children:[c.jsx("span",{className:"unit-lesson-index",children:B+1}),c.jsxs("span",{className:"unit-lesson-label",children:[c.jsx("strong",{title:ra(l,z),children:ra(l,z)}),(()=>{var J,ce;const H=zd("lesson:"+z,{assignments:v,grades:k,completedLessons:g});return H.dueDate||H.completed?c.jsxs("span",{className:"unit-assignment-meta",children:[c.jsxs("span",{className:`assignment-status ${H.state}`,children:[c.jsx("span",{className:`assignment-dot ${H.state}`,"aria-hidden":"true"}),H.completed?"Completed":H.state==="overdue"?"Overdue":"Assigned"]}),H.dueDate&&c.jsxs("small",{children:["Due ",Ed(H.dueDate)]}),H.grade&&c.jsxs("small",{children:[H.grade.earned," / ",H.grade.possible," pts"]})]}):c.jsxs("small",{children:[(J=na(l,z))==null?void 0:J.kind,(ce=na(l,z))!=null&&ce.difficulty?` · ${na(l,z).difficulty}`:""]})})()]}),c.jsx(th,{size:16})]},z))})]},V.id))}),!!((F=l.projects)!=null&&F.length)&&c.jsxs("section",{className:"course-projects surface-card",children:[c.jsx("div",{className:"eyebrow",children:"Published guided projects"}),c.jsx("h2",{children:"Projects"}),c.jsx("div",{className:"unit-card-grid",children:l.projects.map(V=>c.jsxs("a",{className:"unit-lesson-link",href:mm(l,V.id),onClick:I=>{I.button!==0||I.metaKey||I.ctrlKey||I.shiftKey||I.altKey||(I.preventDefault(),d(l.id,V.id))},children:[c.jsxs("span",{className:"unit-lesson-label",children:[c.jsx("strong",{children:V.title}),c.jsxs("small",{children:[V.steps.length," steps · ",V.summary]})]}),c.jsx(th,{size:16})]},V.id))})]}),c.jsxs("section",{className:"course-challenges-shelf surface-card",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Shared practice library"}),c.jsx("h2",{children:"Related programming challenges"}),c.jsx("p",{children:"Browse reusable problems suited to this course. Review each challenge's prerequisites before recommending it to students."})]}),c.jsxs("a",{href:Kl(l.id),className:"btn",onClick:V=>{V.button!==0||V.metaKey||V.ctrlKey||V.shiftKey||V.altKey||(V.preventDefault(),f(l.id))},children:[c.jsx(Bd,{size:16})," Browse challenges"]})]})]})}function hv({selectedTopic:l,attempts:u,setAttempts:d,openCourse:f,completedLessons:g,onToggleLessonComplete:v}){const{track:k,topic:C}=l,[w,_]=ve.useState(0),[N,O]=ve.useState(null),[L,Y]=ve.useState(!1),U=C.questions[w],F=C.questions.filter(H=>u[H.id]!==void 0).length,V=g.includes(C.id);function I(H){_(H),O(null),Y(!1)}function z(){N===null||L||(Y(!0),d(H=>({...H,[U.id]:{chosen:N,correct:N===U.correct}})))}const B=N===U.correct;return c.jsxs("section",{className:"test-prep-practice",children:[c.jsxs("button",{type:"button",className:"test-prep-back",onClick:()=>f("test-prep"),children:[c.jsx(ym,{size:16})," All Test Prep"]}),c.jsxs("div",{className:"surface-card test-prep-practice-header",children:[c.jsxs("div",{className:"eyebrow",children:[k.title," / ",C.title]}),c.jsx("h1",{children:C.title}),c.jsx("p",{children:C.description}),c.jsx("p",{className:"muted",children:"Original sample questions only. Your practice results are not official exam scores."}),c.jsxs("div",{className:"test-prep-practice-meta",children:[c.jsxs("span",{children:[F," of ",C.questions.length," attempted"]}),V&&c.jsxs("span",{className:"test-prep-complete",children:[c.jsx(lc,{size:16})," Practiced"]})]})]}),c.jsxs("div",{className:"surface-card test-prep-question",children:[c.jsxs("div",{className:"test-prep-question-top",children:[c.jsxs("strong",{children:["Question ",w+1," of ",C.questions.length]}),c.jsx("span",{className:"muted",children:"Practice / multiple choice"})]}),c.jsx("h2",{children:U.prompt}),c.jsxs("fieldset",{className:"test-prep-options",disabled:L,children:[c.jsx("legend",{className:"sr-only",children:"Choose your answer"}),U.options.map((H,J)=>c.jsxs("label",{className:"test-prep-option "+(N===J?"selected ":"")+(L&&J===U.correct?"correct":""),children:[c.jsx("input",{type:"radio",name:U.id,checked:N===J,onChange:()=>O(J)}),c.jsx("span",{className:"test-prep-letter",children:String.fromCharCode(65+J)}),c.jsx("span",{children:H})]},J))]}),L&&c.jsxs("div",{className:"test-prep-feedback "+(B?"is-correct":"is-incorrect"),role:"status",children:[c.jsx("strong",{children:B?"Correct!":"Review this answer"}),c.jsx("p",{children:U.explanation})]}),c.jsxs("div",{className:"test-prep-actions",children:[c.jsx("button",{type:"button",className:"btn primary",disabled:N===null||L,onClick:z,children:"Check answer"}),c.jsxs("button",{type:"button",className:"btn",onClick:()=>{O(null),Y(!1)},children:[c.jsx(mh,{size:14})," Try again"]})]})]}),c.jsxs("nav",{className:"test-prep-topic-nav","aria-label":"Sample question navigation",children:[w>0?c.jsxs("button",{type:"button",className:"btn",onClick:()=>I(w-1),children:[c.jsx(Wd,{size:16})," Previous"]}):c.jsx("span",{}),w<C.questions.length-1?c.jsxs("button",{type:"button",className:"btn",onClick:()=>I(w+1),children:["Next question ",c.jsx(ni,{size:16})]}):c.jsx("span",{})]}),F===C.questions.length&&!V&&c.jsxs("div",{className:"test-prep-completion surface-card",children:[c.jsx("span",{children:"You've attempted every sample in this subject."}),c.jsx("button",{type:"button",className:"btn primary",onClick:()=>v==null?void 0:v(C.id),children:"Mark topic practiced"})]}),c.jsxs("p",{className:"test-prep-official",children:["Need more questions? ",c.jsxs("a",{href:k.reference,target:"_blank",rel:"noreferrer",children:["Visit official ",k.title," preparation resources ",c.jsx(bm,{size:13})]})]})]})}function fv({lessonId:l,openCourse:u,completedLessons:d=[],onToggleLessonComplete:f}){const[g,v]=Kn("designlab:test-prep-sample-answers",{}),k=l?Vg(l):null;return c.jsx("div",{className:"course-layout integrated-course","data-course":"test-prep",children:c.jsxs("div",{className:"course-main",children:[c.jsxs("div",{className:"course-breadcrumb",children:[c.jsx("button",{type:"button",onClick:()=>u(null),children:"All playgrounds"}),c.jsx(ni,{size:14}),l?c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",onClick:()=>u("test-prep"),children:"Test Prep"}),c.jsx(ni,{size:14}),c.jsx("span",{children:k==null?void 0:k.topic.title})]}):c.jsx("span",{children:"Test Prep"})]}),k?c.jsx(hv,{selectedTopic:k,attempts:g,setAttempts:v,openCourse:u,completedLessons:d,onToggleLessonComplete:f},l):c.jsxs("div",{className:"test-prep-hub",children:[c.jsxs("header",{className:"surface-card test-prep-hero",children:[c.jsx("div",{className:"eyebrow",children:"Test Prep / Self-study"}),c.jsx("h1",{children:"Choose a test to prepare for"}),c.jsx("p",{children:"Study in short sessions, answer original sample questions, and review the reasoning behind each answer. No class code required."}),c.jsx("p",{className:"muted",children:"This is a preview. Practice history stays in this browser. No scores are sent to a teacher, and no official exam scores are predicted."})]}),c.jsxs("div",{className:"test-prep-exams",children:[c.jsxs("section",{className:"surface-card test-prep-exam","data-exam":"tsi",children:[c.jsx("div",{className:"test-prep-exam-icon",children:c.jsx(uf,{size:23})}),c.jsx("div",{className:"eyebrow",children:"College readiness"}),c.jsx("h2",{children:"TSI Math"}),c.jsx("p",{children:"Continue the existing TSIA2 math curriculum and diagnostic work without changing old lesson links."}),c.jsx("p",{className:"test-prep-exam-meta",children:"Existing course / classroom study"}),c.jsxs("button",{type:"button",className:"btn primary",onClick:()=>u("tsi-math"),children:["Open TSI Math ",c.jsx(ni,{size:16})]})]}),dc.map(C=>{const w=C.topics.reduce((N,O)=>N+O.questions.length,0),_=C.topics.reduce((N,O)=>N+O.questions.filter(L=>g[L.id]!==void 0).length,0);return c.jsxs("section",{className:"surface-card test-prep-exam","data-exam":C.id,children:[c.jsx("div",{className:"test-prep-exam-icon",children:C.id==="act"?c.jsx(qy,{size:23}):c.jsx(uf,{size:23})}),c.jsx("div",{className:"eyebrow",children:C.subtitle}),c.jsx("h2",{children:C.title}),c.jsx("p",{children:C.description}),c.jsxs("p",{className:"test-prep-exam-meta",children:[C.topics.length," subjects · ",_,"/",w," samples attempted"]}),c.jsx("progress",{className:"course-progress-track",value:_,max:w,"aria-label":C.title+" sample practice progress"}),c.jsx("div",{className:"test-prep-topic-links",children:C.topics.map(N=>c.jsxs("button",{type:"button",onClick:()=>u("test-prep",N.id),children:[c.jsx("span",{children:N.title}),c.jsx(ni,{size:15})]},N.id))}),c.jsxs("button",{type:"button",className:"btn primary",onClick:()=>u("test-prep",C.topics[0].id),children:["Start ",C.title," samples ",c.jsx(ni,{size:16})]})]},C.id)})]})]})]})})}function fc({axis:l,onDrag:u}){const d=ve.useRef(!1),f=l==="columns",g=()=>d.current=!1;return c.jsx("div",{className:ho("splitter",f?"column-split":"row-split"),role:"separator","aria-label":f?"Resize instructions and editor":"Resize editor and console","aria-orientation":f?"vertical":"horizontal",tabIndex:0,onPointerDown:v=>{v.preventDefault(),v.currentTarget.setPointerCapture(v.pointerId),d.current=!0},onPointerMove:v=>{d.current&&v.buttons===1&&u(v)},onPointerUp:g,onLostPointerCapture:g,children:c.jsx("span",{})})}function vh({eyebrow:l,children:u,actions:d}){return c.jsxs("div",{className:"page-title-row",children:[c.jsxs("div",{children:[l&&c.jsx("div",{className:"eyebrow",children:l}),c.jsx("h1",{children:u})]}),d&&c.jsx("div",{className:"page-actions",children:d})]})}function Vu({task:l,unit:u,unitNumber:d,isTsi:f,isCompleted:g=!1,assignment:v=null,grade:k=null,onToggleCompleted:C,readOnlyMode:w=!1}){const _=(v==null?void 0:v.id)||(k==null?void 0:k.id)||"",N=zd(_,{assignments:v?[v]:[],grades:k?[k]:[],completedLessons:g?[_.replace(/^lesson:/,"")]:[]});return c.jsxs("div",{className:"lesson-header",children:[c.jsxs("div",{className:"eyebrow",children:["Unit ",pc(u,d)," · ",Rs(u)," ",c.jsx("span",{className:"dot",children:"·"})," ",l.kind]}),c.jsx(vh,{actions:c.jsxs("div",{className:"lesson-heading-actions",children:[!f&&(l==null?void 0:l.points)!=null&&c.jsx("span",{className:"points-tag",children:k?`${k.earned} / ${k.possible} pts`:`${l.points} points available`}),w&&!k?c.jsx("span",{className:"points-tag",children:"Verified scores only"}):k?c.jsxs("span",{className:"btn completion-toggle completed",children:[c.jsx(lc,{size:16})," Completed"]}):c.jsxs("button",{type:"button",className:`btn completion-toggle ${g?"completed":""}`,"aria-pressed":g,onClick:C,children:[g?c.jsx(lc,{size:16}):c.jsx(Fy,{size:16}),g?"Completed":"Mark complete"]})]}),children:l.title}),c.jsx("p",{children:l.challenge}),(v==null?void 0:v.dueDate)&&c.jsxs("div",{className:"lesson-assignment-info",children:[c.jsx("span",{className:`assignment-status ${N.state}`,children:N.state==="completed"?"Completed":N.state==="overdue"?"Overdue":"Assigned"}),c.jsxs("span",{children:["Due ",Ed(v.dueDate)]})]})]})}const xh={"tsi-ratios":{prompt:"A recipe uses 3 cups of water for every 5 cups of rice. How many cups of water are needed for 15 cups of rice?",options:["5 cups","9 cups","12 cups","25 cups"],correct:1,explanation:"15 is three times 5, so multiply the 3 cups of water by 3 to get 9."},"tsi-percents":{prompt:"A $60 backpack is discounted by 25%. What is the sale price?",options:["$15","$35","$45","$75"],correct:2,explanation:"25% of $60 is $15; subtract $15 from $60 to get $45."},"tsi-equations":{prompt:"Solve for x: 4x + 6 = 22.",options:["2","4","6","7"],correct:1,explanation:"Subtract 6 from both sides to get 4x = 16, then divide by 4: x = 4."},"tsi-slope":{prompt:"A table gives points (1, 3), (2, 5), and (3, 7). What is the slope?",options:["1","2","3","4"],correct:1,explanation:"As x goes up by 1, y goes up by 2, so slope = 2/1 = 2."}},mv=`# Find an Inefficiency

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
`,gv=`# Interpret User Feedback

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
`,yv=`# Interview for Evidence

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
`,vv=`# Make a Minimum Viable Prototype

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
`,xv=`# Player Decisions

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
`,bv=`# Variables for a Game

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
`,wv=`# Decision Making

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
`,kv=`# Format a Summary

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
`,Sv=`# Lists and Indexing

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
`,_v=`# For Loops

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
`,Cv=`# Strings and Variables

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
`,Tv=`<!-- Learning example adapted from mswhitby/computer-science-1/docs/units/content/02-values-and-variables/lessons/01-meet-variables.md; displayed in independent React preview. -->
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
`,jv=`# Your First React Card

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
`,Nv=`# Interactive React State

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
`,Ev=`# Solve Linear Equations

## Learn

Solve an equation by doing the same operation to both sides. For 3x + 5 = 20, first subtract 5, then divide by 3.

### Example

Explain the quantities and operations before calculating.

## Practice

Solve 4x + 6 = 22. Explain each step.

Choose an answer in the practice card.
`,Lv=`# Percents and Discounts

## Learn

A percent compares a quantity with 100. To find 20% of 50, multiply 0.20 × 50 = 10.

### Example

Explain the quantities and operations before calculating.

## Practice

A backpack costs $60 and is discounted by 25%. What is the sale price?

Choose an answer in the practice card.
`,Pv=`# Ratios and Rates

## Learn

A ratio compares quantities. A **unit rate** tells us how many of one item correspond to one unit of another.

Example: If 3 markers are shared by 5 students, the number of markers per student is:

**3 ÷ 5 = 0.6 markers per student.**

## Practice

A group of 15 students needs markers at the same rate. How many markers are needed? Explain how you know.
`,Av=`# Slope and Rate of Change

## Learn

Slope is the change in y divided by the change in x. A constant rate makes a linear relationship.

### Example

Explain the quantities and operations before calculating.

## Practice

The table gives (1, 3), (2, 5), and (3, 7). What is the slope?

Choose an answer in the practice card.
`,Rv=`# Trace a Java Array

## Learn

An array holds multiple values. Java arrays start at index **0**.

\`\`\`java
int[] scores = {2, 4, 6};
System.out.println(scores[0]); // 2
\`\`\`

## Practice

Trace the loop in the starter code. Record every index and the updated element value in a table. Then write the final array.
`,Iv=`# Trace Java Loops

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
`,Ov=`# Method Calls and Scope

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
`,Dv=`# String Indexing

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
`,Mv=`# Collision Events

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
`,zv=`<!-- Learning example adapted from mswhitby/game-programming/samples/PlayerController.md (sample-lessons); displayed in independent React preview. -->
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
`,Fv=`# Score and Feedback

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
`,Wv=`# Events and Forms

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
`,Hv=`# Responsive Layouts

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
`;function bh(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var rl=bh();function _m(l){rl=l}var ac={exec:()=>null};function Gt(l,u=""){let d=typeof l=="string"?l:l.source;const f={replace:(g,v)=>{let k=typeof v=="string"?v:v.source;return k=k.replace(Br.caret,"$1"),d=d.replace(g,k),f},getRegex:()=>new RegExp(d,u)};return f}var Br={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:l=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}#`),htmlBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}<(?:[a-z].*>|!--)`,"i")},Bv=/^(?:[ \t]*(?:\n|$))+/,Uv=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,qv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,mc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,$v=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,wh=/(?:[*+-]|\d{1,9}[.)])/,Cm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Tm=Gt(Cm).replace(/bull/g,wh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Kv=Gt(Cm).replace(/bull/g,wh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),kh=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Gv=/^[^\n]+/,Sh=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Yv=Gt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Sh).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Vv=Gt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,wh).getRegex(),qd="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",_h=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Jv=Gt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",_h).replace("tag",qd).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),jm=Gt(kh).replace("hr",mc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qd).getRegex(),Xv=Gt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",jm).getRegex(),Ch={blockquote:Xv,code:Uv,def:Yv,fences:qv,heading:$v,hr:mc,html:Jv,lheading:Tm,list:Vv,newline:Bv,paragraph:jm,table:ac,text:Gv},df=Gt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",mc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qd).getRegex(),Qv={...Ch,lheading:Kv,table:df,paragraph:Gt(kh).replace("hr",mc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",df).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qd).getRegex()},Zv={...Ch,html:Gt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",_h).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ac,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Gt(kh).replace("hr",mc).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Tm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ex=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,tx=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Nm=/^( {2,}|\\)\n(?!\s*$)/,nx=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,$d=/[\p{P}\p{S}]/u,Th=/[\s\p{P}\p{S}]/u,Em=/[^\s\p{P}\p{S}]/u,rx=Gt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Th).getRegex(),Lm=/(?!~)[\p{P}\p{S}]/u,ix=/(?!~)[\s\p{P}\p{S}]/u,sx=/(?:[^\s\p{P}\p{S}]|~)/u,ox=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Pm=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,ax=Gt(Pm,"u").replace(/punct/g,$d).getRegex(),lx=Gt(Pm,"u").replace(/punct/g,Lm).getRegex(),Am="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ux=Gt(Am,"gu").replace(/notPunctSpace/g,Em).replace(/punctSpace/g,Th).replace(/punct/g,$d).getRegex(),cx=Gt(Am,"gu").replace(/notPunctSpace/g,sx).replace(/punctSpace/g,ix).replace(/punct/g,Lm).getRegex(),dx=Gt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Em).replace(/punctSpace/g,Th).replace(/punct/g,$d).getRegex(),px=Gt(/\\(punct)/,"gu").replace(/punct/g,$d).getRegex(),hx=Gt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),fx=Gt(_h).replace("(?:-->|$)","-->").getRegex(),mx=Gt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",fx).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Pd=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,gx=Gt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Pd).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Rm=Gt(/^!?\[(label)\]\[(ref)\]/).replace("label",Pd).replace("ref",Sh).getRegex(),Im=Gt(/^!?\[(ref)\](?:\[\])?/).replace("ref",Sh).getRegex(),yx=Gt("reflink|nolink(?!\\()","g").replace("reflink",Rm).replace("nolink",Im).getRegex(),jh={_backpedal:ac,anyPunctuation:px,autolink:hx,blockSkip:ox,br:Nm,code:tx,del:ac,emStrongLDelim:ax,emStrongRDelimAst:ux,emStrongRDelimUnd:dx,escape:ex,link:gx,nolink:Im,punctuation:rx,reflink:Rm,reflinkSearch:yx,tag:mx,text:nx,url:ac},vx={...jh,link:Gt(/^!?\[(label)\]\((.*?)\)/).replace("label",Pd).getRegex(),reflink:Gt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Pd).getRegex()},nh={...jh,emStrongRDelimAst:cx,emStrongLDelim:lx,url:Gt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},xx={...nh,br:Gt(Nm).replace("{2,}","*").getRegex(),text:Gt(nh.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},yd={normal:Ch,gfm:Qv,pedantic:Zv},Ju={normal:jh,gfm:nh,breaks:xx,pedantic:vx},bx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},pf=l=>bx[l];function Ps(l,u){if(u){if(Br.escapeTest.test(l))return l.replace(Br.escapeReplace,pf)}else if(Br.escapeTestNoEncode.test(l))return l.replace(Br.escapeReplaceNoEncode,pf);return l}function hf(l){try{l=encodeURI(l).replace(Br.percentDecode,"%")}catch{return null}return l}function ff(l,u){var v;const d=l.replace(Br.findPipe,(k,C,w)=>{let _=!1,N=C;for(;--N>=0&&w[N]==="\\";)_=!_;return _?"|":" |"}),f=d.split(Br.splitPipe);let g=0;if(f[0].trim()||f.shift(),f.length>0&&!((v=f.at(-1))!=null&&v.trim())&&f.pop(),u)if(f.length>u)f.splice(u);else for(;f.length<u;)f.push("");for(;g<f.length;g++)f[g]=f[g].trim().replace(Br.slashPipe,"|");return f}function Xu(l,u,d){const f=l.length;if(f===0)return"";let g=0;for(;g<f&&l.charAt(f-g-1)===u;)g++;return l.slice(0,f-g)}function wx(l,u){if(l.indexOf(u[1])===-1)return-1;let d=0;for(let f=0;f<l.length;f++)if(l[f]==="\\")f++;else if(l[f]===u[0])d++;else if(l[f]===u[1]&&(d--,d<0))return f;return d>0?-2:-1}function mf(l,u,d,f,g){const v=u.href,k=u.title||null,C=l[1].replace(g.other.outputLinkReplace,"$1");f.state.inLink=!0;const w={type:l[0].charAt(0)==="!"?"image":"link",raw:d,href:v,title:k,text:C,tokens:f.inlineTokens(C)};return f.state.inLink=!1,w}function kx(l,u,d){const f=l.match(d.other.indentCodeCompensation);if(f===null)return u;const g=f[1];return u.split(`
`).map(v=>{const k=v.match(d.other.beginningSpace);if(k===null)return v;const[C]=k;return C.length>=g.length?v.slice(g.length):v}).join(`
`)}var Ad=class{constructor(l){an(this,"options");an(this,"rules");an(this,"lexer");this.options=l||rl}space(l){const u=this.rules.block.newline.exec(l);if(u&&u[0].length>0)return{type:"space",raw:u[0]}}code(l){const u=this.rules.block.code.exec(l);if(u){const d=u[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:u[0],codeBlockStyle:"indented",text:this.options.pedantic?d:Xu(d,`
`)}}}fences(l){const u=this.rules.block.fences.exec(l);if(u){const d=u[0],f=kx(d,u[3]||"",this.rules);return{type:"code",raw:d,lang:u[2]?u[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):u[2],text:f}}}heading(l){const u=this.rules.block.heading.exec(l);if(u){let d=u[2].trim();if(this.rules.other.endingHash.test(d)){const f=Xu(d,"#");(this.options.pedantic||!f||this.rules.other.endingSpaceChar.test(f))&&(d=f.trim())}return{type:"heading",raw:u[0],depth:u[1].length,text:d,tokens:this.lexer.inline(d)}}}hr(l){const u=this.rules.block.hr.exec(l);if(u)return{type:"hr",raw:Xu(u[0],`
`)}}blockquote(l){const u=this.rules.block.blockquote.exec(l);if(u){let d=Xu(u[0],`
`).split(`
`),f="",g="";const v=[];for(;d.length>0;){let k=!1;const C=[];let w;for(w=0;w<d.length;w++)if(this.rules.other.blockquoteStart.test(d[w]))C.push(d[w]),k=!0;else if(!k)C.push(d[w]);else break;d=d.slice(w);const _=C.join(`
`),N=_.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");f=f?`${f}
${_}`:_,g=g?`${g}
${N}`:N;const O=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(N,v,!0),this.lexer.state.top=O,d.length===0)break;const L=v.at(-1);if((L==null?void 0:L.type)==="code")break;if((L==null?void 0:L.type)==="blockquote"){const Y=L,U=Y.raw+`
`+d.join(`
`),F=this.blockquote(U);v[v.length-1]=F,f=f.substring(0,f.length-Y.raw.length)+F.raw,g=g.substring(0,g.length-Y.text.length)+F.text;break}else if((L==null?void 0:L.type)==="list"){const Y=L,U=Y.raw+`
`+d.join(`
`),F=this.list(U);v[v.length-1]=F,f=f.substring(0,f.length-L.raw.length)+F.raw,g=g.substring(0,g.length-Y.raw.length)+F.raw,d=U.substring(v.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:f,tokens:v,text:g}}}list(l){let u=this.rules.block.list.exec(l);if(u){let d=u[1].trim();const f=d.length>1,g={type:"list",raw:"",ordered:f,start:f?+d.slice(0,-1):"",loose:!1,items:[]};d=f?`\\d{1,9}\\${d.slice(-1)}`:`\\${d}`,this.options.pedantic&&(d=f?d:"[*+-]");const v=this.rules.other.listItemRegex(d);let k=!1;for(;l;){let w=!1,_="",N="";if(!(u=v.exec(l))||this.rules.block.hr.test(l))break;_=u[0],l=l.substring(_.length);let O=u[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,I=>" ".repeat(3*I.length)),L=l.split(`
`,1)[0],Y=!O.trim(),U=0;if(this.options.pedantic?(U=2,N=O.trimStart()):Y?U=u[1].length+1:(U=u[2].search(this.rules.other.nonSpaceChar),U=U>4?1:U,N=O.slice(U),U+=u[1].length),Y&&this.rules.other.blankLine.test(L)&&(_+=L+`
`,l=l.substring(L.length+1),w=!0),!w){const I=this.rules.other.nextBulletRegex(U),z=this.rules.other.hrRegex(U),B=this.rules.other.fencesBeginRegex(U),H=this.rules.other.headingBeginRegex(U),J=this.rules.other.htmlBeginRegex(U);for(;l;){const ce=l.split(`
`,1)[0];let ae;if(L=ce,this.options.pedantic?(L=L.replace(this.rules.other.listReplaceNesting,"  "),ae=L):ae=L.replace(this.rules.other.tabCharGlobal,"    "),B.test(L)||H.test(L)||J.test(L)||I.test(L)||z.test(L))break;if(ae.search(this.rules.other.nonSpaceChar)>=U||!L.trim())N+=`
`+ae.slice(U);else{if(Y||O.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||B.test(O)||H.test(O)||z.test(O))break;N+=`
`+L}!Y&&!L.trim()&&(Y=!0),_+=ce+`
`,l=l.substring(ce.length+1),O=ae.slice(U)}}g.loose||(k?g.loose=!0:this.rules.other.doubleBlankLine.test(_)&&(k=!0));let F=null,V;this.options.gfm&&(F=this.rules.other.listIsTask.exec(N),F&&(V=F[0]!=="[ ] ",N=N.replace(this.rules.other.listReplaceTask,""))),g.items.push({type:"list_item",raw:_,task:!!F,checked:V,loose:!1,text:N,tokens:[]}),g.raw+=_}const C=g.items.at(-1);if(C)C.raw=C.raw.trimEnd(),C.text=C.text.trimEnd();else return;g.raw=g.raw.trimEnd();for(let w=0;w<g.items.length;w++)if(this.lexer.state.top=!1,g.items[w].tokens=this.lexer.blockTokens(g.items[w].text,[]),!g.loose){const _=g.items[w].tokens.filter(O=>O.type==="space"),N=_.length>0&&_.some(O=>this.rules.other.anyLine.test(O.raw));g.loose=N}if(g.loose)for(let w=0;w<g.items.length;w++)g.items[w].loose=!0;return g}}html(l){const u=this.rules.block.html.exec(l);if(u)return{type:"html",block:!0,raw:u[0],pre:u[1]==="pre"||u[1]==="script"||u[1]==="style",text:u[0]}}def(l){const u=this.rules.block.def.exec(l);if(u){const d=u[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),f=u[2]?u[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",g=u[3]?u[3].substring(1,u[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):u[3];return{type:"def",tag:d,raw:u[0],href:f,title:g}}}table(l){var k;const u=this.rules.block.table.exec(l);if(!u||!this.rules.other.tableDelimiter.test(u[2]))return;const d=ff(u[1]),f=u[2].replace(this.rules.other.tableAlignChars,"").split("|"),g=(k=u[3])!=null&&k.trim()?u[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],v={type:"table",raw:u[0],header:[],align:[],rows:[]};if(d.length===f.length){for(const C of f)this.rules.other.tableAlignRight.test(C)?v.align.push("right"):this.rules.other.tableAlignCenter.test(C)?v.align.push("center"):this.rules.other.tableAlignLeft.test(C)?v.align.push("left"):v.align.push(null);for(let C=0;C<d.length;C++)v.header.push({text:d[C],tokens:this.lexer.inline(d[C]),header:!0,align:v.align[C]});for(const C of g)v.rows.push(ff(C,v.header.length).map((w,_)=>({text:w,tokens:this.lexer.inline(w),header:!1,align:v.align[_]})));return v}}lheading(l){const u=this.rules.block.lheading.exec(l);if(u)return{type:"heading",raw:u[0],depth:u[2].charAt(0)==="="?1:2,text:u[1],tokens:this.lexer.inline(u[1])}}paragraph(l){const u=this.rules.block.paragraph.exec(l);if(u){const d=u[1].charAt(u[1].length-1)===`
`?u[1].slice(0,-1):u[1];return{type:"paragraph",raw:u[0],text:d,tokens:this.lexer.inline(d)}}}text(l){const u=this.rules.block.text.exec(l);if(u)return{type:"text",raw:u[0],text:u[0],tokens:this.lexer.inline(u[0])}}escape(l){const u=this.rules.inline.escape.exec(l);if(u)return{type:"escape",raw:u[0],text:u[1]}}tag(l){const u=this.rules.inline.tag.exec(l);if(u)return!this.lexer.state.inLink&&this.rules.other.startATag.test(u[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(u[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(u[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(u[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:u[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:u[0]}}link(l){const u=this.rules.inline.link.exec(l);if(u){const d=u[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(d)){if(!this.rules.other.endAngleBracket.test(d))return;const v=Xu(d.slice(0,-1),"\\");if((d.length-v.length)%2===0)return}else{const v=wx(u[2],"()");if(v===-2)return;if(v>-1){const C=(u[0].indexOf("!")===0?5:4)+u[1].length+v;u[2]=u[2].substring(0,v),u[0]=u[0].substring(0,C).trim(),u[3]=""}}let f=u[2],g="";if(this.options.pedantic){const v=this.rules.other.pedanticHrefTitle.exec(f);v&&(f=v[1],g=v[3])}else g=u[3]?u[3].slice(1,-1):"";return f=f.trim(),this.rules.other.startAngleBracket.test(f)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(d)?f=f.slice(1):f=f.slice(1,-1)),mf(u,{href:f&&f.replace(this.rules.inline.anyPunctuation,"$1"),title:g&&g.replace(this.rules.inline.anyPunctuation,"$1")},u[0],this.lexer,this.rules)}}reflink(l,u){let d;if((d=this.rules.inline.reflink.exec(l))||(d=this.rules.inline.nolink.exec(l))){const f=(d[2]||d[1]).replace(this.rules.other.multipleSpaceGlobal," "),g=u[f.toLowerCase()];if(!g){const v=d[0].charAt(0);return{type:"text",raw:v,text:v}}return mf(d,g,d[0],this.lexer,this.rules)}}emStrong(l,u,d=""){let f=this.rules.inline.emStrongLDelim.exec(l);if(!f||f[3]&&d.match(this.rules.other.unicodeAlphaNumeric))return;if(!(f[1]||f[2]||"")||!d||this.rules.inline.punctuation.exec(d)){const v=[...f[0]].length-1;let k,C,w=v,_=0;const N=f[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(N.lastIndex=0,u=u.slice(-1*l.length+v);(f=N.exec(u))!=null;){if(k=f[1]||f[2]||f[3]||f[4]||f[5]||f[6],!k)continue;if(C=[...k].length,f[3]||f[4]){w+=C;continue}else if((f[5]||f[6])&&v%3&&!((v+C)%3)){_+=C;continue}if(w-=C,w>0)continue;C=Math.min(C,C+w+_);const O=[...f[0]][0].length,L=l.slice(0,v+f.index+O+C);if(Math.min(v,C)%2){const U=L.slice(1,-1);return{type:"em",raw:L,text:U,tokens:this.lexer.inlineTokens(U)}}const Y=L.slice(2,-2);return{type:"strong",raw:L,text:Y,tokens:this.lexer.inlineTokens(Y)}}}}codespan(l){const u=this.rules.inline.code.exec(l);if(u){let d=u[2].replace(this.rules.other.newLineCharGlobal," ");const f=this.rules.other.nonSpaceChar.test(d),g=this.rules.other.startingSpaceChar.test(d)&&this.rules.other.endingSpaceChar.test(d);return f&&g&&(d=d.substring(1,d.length-1)),{type:"codespan",raw:u[0],text:d}}}br(l){const u=this.rules.inline.br.exec(l);if(u)return{type:"br",raw:u[0]}}del(l){const u=this.rules.inline.del.exec(l);if(u)return{type:"del",raw:u[0],text:u[2],tokens:this.lexer.inlineTokens(u[2])}}autolink(l){const u=this.rules.inline.autolink.exec(l);if(u){let d,f;return u[2]==="@"?(d=u[1],f="mailto:"+d):(d=u[1],f=d),{type:"link",raw:u[0],text:d,href:f,tokens:[{type:"text",raw:d,text:d}]}}}url(l){var d;let u;if(u=this.rules.inline.url.exec(l)){let f,g;if(u[2]==="@")f=u[0],g="mailto:"+f;else{let v;do v=u[0],u[0]=((d=this.rules.inline._backpedal.exec(u[0]))==null?void 0:d[0])??"";while(v!==u[0]);f=u[0],u[1]==="www."?g="http://"+u[0]:g=u[0]}return{type:"link",raw:u[0],text:f,href:g,tokens:[{type:"text",raw:f,text:f}]}}}inlineText(l){const u=this.rules.inline.text.exec(l);if(u){const d=this.lexer.state.inRawBlock;return{type:"text",raw:u[0],text:u[0],escaped:d}}}},mo=class rh{constructor(u){an(this,"tokens");an(this,"options");an(this,"state");an(this,"tokenizer");an(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=u||rl,this.options.tokenizer=this.options.tokenizer||new Ad,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const d={other:Br,block:yd.normal,inline:Ju.normal};this.options.pedantic?(d.block=yd.pedantic,d.inline=Ju.pedantic):this.options.gfm&&(d.block=yd.gfm,this.options.breaks?d.inline=Ju.breaks:d.inline=Ju.gfm),this.tokenizer.rules=d}static get rules(){return{block:yd,inline:Ju}}static lex(u,d){return new rh(d).lex(u)}static lexInline(u,d){return new rh(d).inlineTokens(u)}lex(u){u=u.replace(Br.carriageReturn,`
`),this.blockTokens(u,this.tokens);for(let d=0;d<this.inlineQueue.length;d++){const f=this.inlineQueue[d];this.inlineTokens(f.src,f.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(u,d=[],f=!1){var g,v,k;for(this.options.pedantic&&(u=u.replace(Br.tabCharGlobal,"    ").replace(Br.spaceLine,""));u;){let C;if((v=(g=this.options.extensions)==null?void 0:g.block)!=null&&v.some(_=>(C=_.call({lexer:this},u,d))?(u=u.substring(C.raw.length),d.push(C),!0):!1))continue;if(C=this.tokenizer.space(u)){u=u.substring(C.raw.length);const _=d.at(-1);C.raw.length===1&&_!==void 0?_.raw+=`
`:d.push(C);continue}if(C=this.tokenizer.code(u)){u=u.substring(C.raw.length);const _=d.at(-1);(_==null?void 0:_.type)==="paragraph"||(_==null?void 0:_.type)==="text"?(_.raw+=`
`+C.raw,_.text+=`
`+C.text,this.inlineQueue.at(-1).src=_.text):d.push(C);continue}if(C=this.tokenizer.fences(u)){u=u.substring(C.raw.length),d.push(C);continue}if(C=this.tokenizer.heading(u)){u=u.substring(C.raw.length),d.push(C);continue}if(C=this.tokenizer.hr(u)){u=u.substring(C.raw.length),d.push(C);continue}if(C=this.tokenizer.blockquote(u)){u=u.substring(C.raw.length),d.push(C);continue}if(C=this.tokenizer.list(u)){u=u.substring(C.raw.length),d.push(C);continue}if(C=this.tokenizer.html(u)){u=u.substring(C.raw.length),d.push(C);continue}if(C=this.tokenizer.def(u)){u=u.substring(C.raw.length);const _=d.at(-1);(_==null?void 0:_.type)==="paragraph"||(_==null?void 0:_.type)==="text"?(_.raw+=`
`+C.raw,_.text+=`
`+C.raw,this.inlineQueue.at(-1).src=_.text):this.tokens.links[C.tag]||(this.tokens.links[C.tag]={href:C.href,title:C.title});continue}if(C=this.tokenizer.table(u)){u=u.substring(C.raw.length),d.push(C);continue}if(C=this.tokenizer.lheading(u)){u=u.substring(C.raw.length),d.push(C);continue}let w=u;if((k=this.options.extensions)!=null&&k.startBlock){let _=1/0;const N=u.slice(1);let O;this.options.extensions.startBlock.forEach(L=>{O=L.call({lexer:this},N),typeof O=="number"&&O>=0&&(_=Math.min(_,O))}),_<1/0&&_>=0&&(w=u.substring(0,_+1))}if(this.state.top&&(C=this.tokenizer.paragraph(w))){const _=d.at(-1);f&&(_==null?void 0:_.type)==="paragraph"?(_.raw+=`
`+C.raw,_.text+=`
`+C.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=_.text):d.push(C),f=w.length!==u.length,u=u.substring(C.raw.length);continue}if(C=this.tokenizer.text(u)){u=u.substring(C.raw.length);const _=d.at(-1);(_==null?void 0:_.type)==="text"?(_.raw+=`
`+C.raw,_.text+=`
`+C.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=_.text):d.push(C);continue}if(u){const _="Infinite loop on byte: "+u.charCodeAt(0);if(this.options.silent){console.error(_);break}else throw new Error(_)}}return this.state.top=!0,d}inline(u,d=[]){return this.inlineQueue.push({src:u,tokens:d}),d}inlineTokens(u,d=[]){var C,w,_;let f=u,g=null;if(this.tokens.links){const N=Object.keys(this.tokens.links);if(N.length>0)for(;(g=this.tokenizer.rules.inline.reflinkSearch.exec(f))!=null;)N.includes(g[0].slice(g[0].lastIndexOf("[")+1,-1))&&(f=f.slice(0,g.index)+"["+"a".repeat(g[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(g=this.tokenizer.rules.inline.anyPunctuation.exec(f))!=null;)f=f.slice(0,g.index)+"++"+f.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(g=this.tokenizer.rules.inline.blockSkip.exec(f))!=null;)f=f.slice(0,g.index)+"["+"a".repeat(g[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let v=!1,k="";for(;u;){v||(k=""),v=!1;let N;if((w=(C=this.options.extensions)==null?void 0:C.inline)!=null&&w.some(L=>(N=L.call({lexer:this},u,d))?(u=u.substring(N.raw.length),d.push(N),!0):!1))continue;if(N=this.tokenizer.escape(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.tag(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.link(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.reflink(u,this.tokens.links)){u=u.substring(N.raw.length);const L=d.at(-1);N.type==="text"&&(L==null?void 0:L.type)==="text"?(L.raw+=N.raw,L.text+=N.text):d.push(N);continue}if(N=this.tokenizer.emStrong(u,f,k)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.codespan(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.br(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.del(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.autolink(u)){u=u.substring(N.raw.length),d.push(N);continue}if(!this.state.inLink&&(N=this.tokenizer.url(u))){u=u.substring(N.raw.length),d.push(N);continue}let O=u;if((_=this.options.extensions)!=null&&_.startInline){let L=1/0;const Y=u.slice(1);let U;this.options.extensions.startInline.forEach(F=>{U=F.call({lexer:this},Y),typeof U=="number"&&U>=0&&(L=Math.min(L,U))}),L<1/0&&L>=0&&(O=u.substring(0,L+1))}if(N=this.tokenizer.inlineText(O)){u=u.substring(N.raw.length),N.raw.slice(-1)!=="_"&&(k=N.raw.slice(-1)),v=!0;const L=d.at(-1);(L==null?void 0:L.type)==="text"?(L.raw+=N.raw,L.text+=N.text):d.push(N);continue}if(u){const L="Infinite loop on byte: "+u.charCodeAt(0);if(this.options.silent){console.error(L);break}else throw new Error(L)}}return d}},Rd=class{constructor(l){an(this,"options");an(this,"parser");this.options=l||rl}space(l){return""}code({text:l,lang:u,escaped:d}){var v;const f=(v=(u||"").match(Br.notSpaceStart))==null?void 0:v[0],g=l.replace(Br.endingNewline,"")+`
`;return f?'<pre><code class="language-'+Ps(f)+'">'+(d?g:Ps(g,!0))+`</code></pre>
`:"<pre><code>"+(d?g:Ps(g,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:u}){return`<h${u}>${this.parser.parseInline(l)}</h${u}>
`}hr(l){return`<hr>
`}list(l){const u=l.ordered,d=l.start;let f="";for(let k=0;k<l.items.length;k++){const C=l.items[k];f+=this.listitem(C)}const g=u?"ol":"ul",v=u&&d!==1?' start="'+d+'"':"";return"<"+g+v+`>
`+f+"</"+g+`>
`}listitem(l){var d;let u="";if(l.task){const f=this.checkbox({checked:!!l.checked});l.loose?((d=l.tokens[0])==null?void 0:d.type)==="paragraph"?(l.tokens[0].text=f+" "+l.tokens[0].text,l.tokens[0].tokens&&l.tokens[0].tokens.length>0&&l.tokens[0].tokens[0].type==="text"&&(l.tokens[0].tokens[0].text=f+" "+Ps(l.tokens[0].tokens[0].text),l.tokens[0].tokens[0].escaped=!0)):l.tokens.unshift({type:"text",raw:f+" ",text:f+" ",escaped:!0}):u+=f+" "}return u+=this.parser.parse(l.tokens,!!l.loose),`<li>${u}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let u="",d="";for(let g=0;g<l.header.length;g++)d+=this.tablecell(l.header[g]);u+=this.tablerow({text:d});let f="";for(let g=0;g<l.rows.length;g++){const v=l.rows[g];d="";for(let k=0;k<v.length;k++)d+=this.tablecell(v[k]);f+=this.tablerow({text:d})}return f&&(f=`<tbody>${f}</tbody>`),`<table>
<thead>
`+u+`</thead>
`+f+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){const u=this.parser.parseInline(l.tokens),d=l.header?"th":"td";return(l.align?`<${d} align="${l.align}">`:`<${d}>`)+u+`</${d}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${Ps(l,!0)}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:u,tokens:d}){const f=this.parser.parseInline(d),g=hf(l);if(g===null)return f;l=g;let v='<a href="'+l+'"';return u&&(v+=' title="'+Ps(u)+'"'),v+=">"+f+"</a>",v}image({href:l,title:u,text:d,tokens:f}){f&&(d=this.parser.parseInline(f,this.parser.textRenderer));const g=hf(l);if(g===null)return Ps(d);l=g;let v=`<img src="${l}" alt="${d}"`;return u&&(v+=` title="${Ps(u)}"`),v+=">",v}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):"escaped"in l&&l.escaped?l.text:Ps(l.text)}},Nh=class{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}},go=class ih{constructor(u){an(this,"options");an(this,"renderer");an(this,"textRenderer");this.options=u||rl,this.options.renderer=this.options.renderer||new Rd,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Nh}static parse(u,d){return new ih(d).parse(u)}static parseInline(u,d){return new ih(d).parseInline(u)}parse(u,d=!0){var g,v;let f="";for(let k=0;k<u.length;k++){const C=u[k];if((v=(g=this.options.extensions)==null?void 0:g.renderers)!=null&&v[C.type]){const _=C,N=this.options.extensions.renderers[_.type].call({parser:this},_);if(N!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(_.type)){f+=N||"";continue}}const w=C;switch(w.type){case"space":{f+=this.renderer.space(w);continue}case"hr":{f+=this.renderer.hr(w);continue}case"heading":{f+=this.renderer.heading(w);continue}case"code":{f+=this.renderer.code(w);continue}case"table":{f+=this.renderer.table(w);continue}case"blockquote":{f+=this.renderer.blockquote(w);continue}case"list":{f+=this.renderer.list(w);continue}case"html":{f+=this.renderer.html(w);continue}case"paragraph":{f+=this.renderer.paragraph(w);continue}case"text":{let _=w,N=this.renderer.text(_);for(;k+1<u.length&&u[k+1].type==="text";)_=u[++k],N+=`
`+this.renderer.text(_);d?f+=this.renderer.paragraph({type:"paragraph",raw:N,text:N,tokens:[{type:"text",raw:N,text:N,escaped:!0}]}):f+=N;continue}default:{const _='Token with "'+w.type+'" type was not found.';if(this.options.silent)return console.error(_),"";throw new Error(_)}}}return f}parseInline(u,d=this.renderer){var g,v;let f="";for(let k=0;k<u.length;k++){const C=u[k];if((v=(g=this.options.extensions)==null?void 0:g.renderers)!=null&&v[C.type]){const _=this.options.extensions.renderers[C.type].call({parser:this},C);if(_!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(C.type)){f+=_||"";continue}}const w=C;switch(w.type){case"escape":{f+=d.text(w);break}case"html":{f+=d.html(w);break}case"link":{f+=d.link(w);break}case"image":{f+=d.image(w);break}case"strong":{f+=d.strong(w);break}case"em":{f+=d.em(w);break}case"codespan":{f+=d.codespan(w);break}case"br":{f+=d.br(w);break}case"del":{f+=d.del(w);break}case"text":{f+=d.text(w);break}default:{const _='Token with "'+w.type+'" type was not found.';if(this.options.silent)return console.error(_),"";throw new Error(_)}}}return f}},Qp,_d=(Qp=class{constructor(l){an(this,"options");an(this,"block");this.options=l||rl}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}provideLexer(){return this.block?mo.lex:mo.lexInline}provideParser(){return this.block?go.parse:go.parseInline}},an(Qp,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Qp),Sx=class{constructor(...l){an(this,"defaults",bh());an(this,"options",this.setOptions);an(this,"parse",this.parseMarkdown(!0));an(this,"parseInline",this.parseMarkdown(!1));an(this,"Parser",go);an(this,"Renderer",Rd);an(this,"TextRenderer",Nh);an(this,"Lexer",mo);an(this,"Tokenizer",Ad);an(this,"Hooks",_d);this.use(...l)}walkTokens(l,u){var f,g;let d=[];for(const v of l)switch(d=d.concat(u.call(this,v)),v.type){case"table":{const k=v;for(const C of k.header)d=d.concat(this.walkTokens(C.tokens,u));for(const C of k.rows)for(const w of C)d=d.concat(this.walkTokens(w.tokens,u));break}case"list":{const k=v;d=d.concat(this.walkTokens(k.items,u));break}default:{const k=v;(g=(f=this.defaults.extensions)==null?void 0:f.childTokens)!=null&&g[k.type]?this.defaults.extensions.childTokens[k.type].forEach(C=>{const w=k[C].flat(1/0);d=d.concat(this.walkTokens(w,u))}):k.tokens&&(d=d.concat(this.walkTokens(k.tokens,u)))}}return d}use(...l){const u=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(d=>{const f={...d};if(f.async=this.defaults.async||f.async||!1,d.extensions&&(d.extensions.forEach(g=>{if(!g.name)throw new Error("extension name required");if("renderer"in g){const v=u.renderers[g.name];v?u.renderers[g.name]=function(...k){let C=g.renderer.apply(this,k);return C===!1&&(C=v.apply(this,k)),C}:u.renderers[g.name]=g.renderer}if("tokenizer"in g){if(!g.level||g.level!=="block"&&g.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const v=u[g.level];v?v.unshift(g.tokenizer):u[g.level]=[g.tokenizer],g.start&&(g.level==="block"?u.startBlock?u.startBlock.push(g.start):u.startBlock=[g.start]:g.level==="inline"&&(u.startInline?u.startInline.push(g.start):u.startInline=[g.start]))}"childTokens"in g&&g.childTokens&&(u.childTokens[g.name]=g.childTokens)}),f.extensions=u),d.renderer){const g=this.defaults.renderer||new Rd(this.defaults);for(const v in d.renderer){if(!(v in g))throw new Error(`renderer '${v}' does not exist`);if(["options","parser"].includes(v))continue;const k=v,C=d.renderer[k],w=g[k];g[k]=(..._)=>{let N=C.apply(g,_);return N===!1&&(N=w.apply(g,_)),N||""}}f.renderer=g}if(d.tokenizer){const g=this.defaults.tokenizer||new Ad(this.defaults);for(const v in d.tokenizer){if(!(v in g))throw new Error(`tokenizer '${v}' does not exist`);if(["options","rules","lexer"].includes(v))continue;const k=v,C=d.tokenizer[k],w=g[k];g[k]=(..._)=>{let N=C.apply(g,_);return N===!1&&(N=w.apply(g,_)),N}}f.tokenizer=g}if(d.hooks){const g=this.defaults.hooks||new _d;for(const v in d.hooks){if(!(v in g))throw new Error(`hook '${v}' does not exist`);if(["options","block"].includes(v))continue;const k=v,C=d.hooks[k],w=g[k];_d.passThroughHooks.has(v)?g[k]=_=>{if(this.defaults.async)return Promise.resolve(C.call(g,_)).then(O=>w.call(g,O));const N=C.call(g,_);return w.call(g,N)}:g[k]=(..._)=>{let N=C.apply(g,_);return N===!1&&(N=w.apply(g,_)),N}}f.hooks=g}if(d.walkTokens){const g=this.defaults.walkTokens,v=d.walkTokens;f.walkTokens=function(k){let C=[];return C.push(v.call(this,k)),g&&(C=C.concat(g.call(this,k))),C}}this.defaults={...this.defaults,...f}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,u){return mo.lex(l,u??this.defaults)}parser(l,u){return go.parse(l,u??this.defaults)}parseMarkdown(l){return(d,f)=>{const g={...f},v={...this.defaults,...g},k=this.onError(!!v.silent,!!v.async);if(this.defaults.async===!0&&g.async===!1)return k(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof d>"u"||d===null)return k(new Error("marked(): input parameter is undefined or null"));if(typeof d!="string")return k(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(d)+", string expected"));v.hooks&&(v.hooks.options=v,v.hooks.block=l);const C=v.hooks?v.hooks.provideLexer():l?mo.lex:mo.lexInline,w=v.hooks?v.hooks.provideParser():l?go.parse:go.parseInline;if(v.async)return Promise.resolve(v.hooks?v.hooks.preprocess(d):d).then(_=>C(_,v)).then(_=>v.hooks?v.hooks.processAllTokens(_):_).then(_=>v.walkTokens?Promise.all(this.walkTokens(_,v.walkTokens)).then(()=>_):_).then(_=>w(_,v)).then(_=>v.hooks?v.hooks.postprocess(_):_).catch(k);try{v.hooks&&(d=v.hooks.preprocess(d));let _=C(d,v);v.hooks&&(_=v.hooks.processAllTokens(_)),v.walkTokens&&this.walkTokens(_,v.walkTokens);let N=w(_,v);return v.hooks&&(N=v.hooks.postprocess(N)),N}catch(_){return k(_)}}}onError(l,u){return d=>{if(d.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const f="<p>An error occurred:</p><pre>"+Ps(d.message+"",!0)+"</pre>";return u?Promise.resolve(f):f}if(u)return Promise.reject(d);throw d}}},Za=new Sx;function Jt(l,u){return Za.parse(l,u)}Jt.options=Jt.setOptions=function(l){return Za.setOptions(l),Jt.defaults=Za.defaults,_m(Jt.defaults),Jt};Jt.getDefaults=bh;Jt.defaults=rl;Jt.use=function(...l){return Za.use(...l),Jt.defaults=Za.defaults,_m(Jt.defaults),Jt};Jt.walkTokens=function(l,u){return Za.walkTokens(l,u)};Jt.parseInline=Za.parseInline;Jt.Parser=go;Jt.parser=go.parse;Jt.Renderer=Rd;Jt.TextRenderer=Nh;Jt.Lexer=mo;Jt.lexer=mo.lex;Jt.Tokenizer=Ad;Jt.Hooks=_d;Jt.parse=Jt;Jt.options;Jt.setOptions;Jt.use;Jt.walkTokens;Jt.parseInline;go.parse;mo.lex;/*! @license DOMPurify 3.4.18 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.18/LICENSE */function gf(l,u){(u==null||u>l.length)&&(u=l.length);for(var d=0,f=Array(u);d<u;d++)f[d]=l[d];return f}function _x(l){if(Array.isArray(l))return l}function Cx(l,u){var d=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(d!=null){var f,g,v,k,C=[],w=!0,_=!1;try{if(v=(d=d.call(l)).next,u!==0)for(;!(w=(f=v.call(d)).done)&&(C.push(f.value),C.length!==u);w=!0);}catch(N){_=!0,g=N}finally{try{if(!w&&d.return!=null&&(k=d.return(),Object(k)!==k))return}finally{if(_)throw g}}return C}}function Tx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function jx(l,u){return _x(l)||Cx(l,u)||Nx(l,u)||Tx()}function Nx(l,u){if(l){if(typeof l=="string")return gf(l,u);var d={}.toString.call(l).slice(8,-1);return d==="Object"&&l.constructor&&(d=l.constructor.name),d==="Map"||d==="Set"?Array.from(l):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?gf(l,u):void 0}}const Om=Object.entries,Ex=Object.keys,yf=Object.setPrototypeOf,Lx=Object.isFrozen,Dm=Object.getPrototypeOf,Mm=Object.getOwnPropertyDescriptor;let dr=Object.freeze,Qn=Object.seal,ea=Object.create,zm=typeof Reflect<"u"&&Reflect,Id=zm.apply,sh=zm.construct;dr||(dr=function(u){return u});Qn||(Qn=function(u){return u});Id||(Id=function(u,d){for(var f=arguments.length,g=new Array(f>2?f-2:0),v=2;v<f;v++)g[v-2]=arguments[v];return u.apply(d,g)});sh||(sh=function(u){for(var d=arguments.length,f=new Array(d>1?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];return new u(...f)});const co=jn(Array.prototype.forEach),Px=jn(Array.prototype.lastIndexOf),vf=jn(Array.prototype.pop),Qu=jn(Array.prototype.push),Ax=jn(Array.prototype.slice),Rx=jn(Array.prototype.splice),Yl=Array.isArray,Mp=Fm(Set),zp=jn(Set.prototype.add),Zu=jn(Set.prototype.has),Ja=jn(String.prototype.toLowerCase),Fp=jn(String.prototype.toString),Ix=jn(String.prototype.match),vd=jn(String.prototype.replace),Wp=jn(String.prototype.indexOf),Ox=jn(String.prototype.trim),Dx=jn(Number.prototype.toString),Mx=jn(Boolean.prototype.toString),xf=typeof BigInt>"u"?null:jn(BigInt.prototype.toString),bf=typeof Symbol>"u"?null:jn(Symbol.prototype.toString),Rr=jn(Object.prototype.hasOwnProperty),ec=jn(Object.prototype.toString),zx=RegExp.prototype.test,cr=function(u,d){return u instanceof RegExp&&(u.lastIndex=0),Id(zx,u,[d])},po=Fm(TypeError);function jn(l){return function(u){for(var d=arguments.length,f=new Array(d>1?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];return Id(l,u,f)}}function Fm(l){return function(){for(var u=arguments.length,d=new Array(u),f=0;f<u;f++)d[f]=arguments[f];return sh(l,d)}}function Kt(l,u){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ja;if(yf&&yf(l,null),!Yl(u))return l;let f=u.length;for(;f--;){let g=u[f];if(typeof g=="string"){const v=d(g);v!==g&&(Lx(u)||(u[f]=v),g=v)}l[g]=!0}return l}function Fx(l){for(let u=0;u<l.length;u++)Rr(l,u)||(l[u]=null);return l}function Od(l){const u=ea(null);for(const f of Om(l)){var d=jx(f,2);const g=d[0],v=d[1];Rr(l,g)&&(Yl(v)?u[g]=Fx(v):v&&typeof v=="object"&&v.constructor===Object?u[g]=Od(v):u[g]=v)}return u}function ic(l){const u=ea(null),d=Ex(l);let f=d.length;for(;f--;)u[d[f]]=l[d[f]];return u}function Wx(l){switch(typeof l){case"string":return l;case"number":return Dx(l);case"boolean":return Mx(l);case"bigint":return xf?xf(l):"0";case"symbol":return bf?bf(l):"Symbol()";case"undefined":return ec(l);case"function":case"object":{if(l===null)return ec(l);const u=l,d=Di(u,"toString");if(typeof d=="function"){const f=d(u);return typeof f=="string"?f:ec(f)}return ec(l)}default:return ec(l)}}function Di(l,u){for(;l!==null;){const f=Mm(l,u);if(f){if(f.get)return jn(f.get);if(typeof f.value=="function")return jn(f.value)}l=Dm(l)}function d(){return null}return d}function Hx(l,u){for(;l!==null;){const d=Mm(l,u);if(d)return d.get?jn(d.get):null;l=Dm(l)}return null}function Bx(l){if(!l)return!1;try{return cr(l,""),!0}catch{return!1}}const wf=dr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Hp=dr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Bp=dr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ux=dr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Up=dr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),qx=dr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),kf=dr(["#text"]),Sf=dr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),qp=dr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),_f=dr(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),xd=dr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),$x=Qn(/{{[\w\W]*|^[\w\W]*}}/g),Kx=Qn(/<%[\w\W]*|^[\w\W]*%>/g),Gx=Qn(/\${[\w\W]*/g),Yx=Qn(/{{|}}|\${|<%|%>|&lt;%|%&gt;/),Vx=Qn(/^data-[\-\w.\u00B7-\uFFFF]+$/),Jx=Qn(/^aria-[\-\w]+$/),Cf=Qn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Xx=Qn(/^(?:\w+script|data):/i),Qx=Qn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Zx=Qn(/^html$/i),eb=Qn(/^[a-z][.\w]*(-[.\w]+)+$/i),$p=Qn(/<[/\w!]/g),Tf=Qn(/<[/\w]/g),tb=Qn(/<\/no(script|embed|frames)/i),jf=Qn(/\/>/i),nb=Qn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i),rb=Qn(/^[\r\n\t ]+/),$n={element:1,text:3,processingInstruction:7,comment:8,document:9,documentFragment:11},ib=dr(Kt({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),sb=function(){return typeof window>"u"?null:window},ob=function(u,d){if(typeof u!="object"||typeof u.createPolicy!="function")return null;let f=null;const g="data-tt-policy-suffix";d&&d.hasAttribute(g)&&(f=d.getAttribute(g));const v="dompurify"+(f?"#"+f:"");try{return u.createPolicy(v,{createHTML(k){return k},createScriptURL(k){return k}})}catch{return console.warn("TrustedTypes policy "+v+" could not be created."),null}},Nf=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Zo=function(u,d,f,g){return Rr(u,d)&&Yl(u[d])?Kt(g.base?ic(g.base):{},u[d],g.transform):f},Kp=function(u,d,f){const g=Rr(u,d)?u[d]:void 0;return g&&typeof g=="object"?Od(g):f};function Wm(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:sb();const u=_e=>Wm(_e);if(u.version="3.4.18",u.removed=[],!l||!l.document||l.document.nodeType!==$n.document||!l.Element)return u.isSupported=!1,u;let d=l.document;const f=d,g=f.currentScript,v=l.HTMLTemplateElement,k=l.Node,C=l.Element,w=l.NodeFilter,_=l.DOMParser,N=l.trustedTypes,O=C.prototype,L=Di(O,"cloneNode"),Y=Di(O,"remove"),U=Di(O,"removeAttributeNode"),F=Di(O,"nextSibling"),V=Di(O,"childNodes"),I=Di(O,"parentNode"),z=Di(O,"shadowRoot"),B=Di(O,"attributes"),H=k&&k.prototype?Di(k.prototype,"nodeType"):null,J=k&&k.prototype?Di(k.prototype,"nodeName"):null,ce=k&&k.prototype?Di(k.prototype,"ownerDocument"):null,ae=function(D){return H?H(D):D.nodeType},be=function(D){return J?J(D):D.nodeName},Re=Hx(O,"namespaceURI"),xe=function(D){return Re?Re(D):D.namespaceURI};if(typeof v=="function"){const _e=d.createElement("template");_e.content&&_e.content.ownerDocument&&(d=_e.content.ownerDocument)}let se,Ie="",le,fe=!1,A=0;const Q=function(){if(A>0)throw po('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},q=function(D){Q(),A++;try{return se.createHTML(D)}finally{A--}},T=function(D){return se&&mi?q(D):D},P=function(D){Q(),A++;try{return se.createScriptURL(D)}finally{A--}},$=function(){return fe||(le=ob(N,g),fe=!0),le},M=d,Z=M.implementation,Ce=M.createNodeIterator,ze=M.createDocumentFragment,qe=M.getElementsByTagName,Oe=f.importNode;let Se=Nf();u.isSupported=typeof Om=="function"&&typeof I=="function"&&Z&&Z.createHTMLDocument!==void 0;const Be=$x,$e=Kx,et=Gx,Ke=Vx,Ft=Jx,Yt=Xx,Ct=Qx,xt=eb;let tt=Cf,Ue=null;const vt=Kt({},[...wf,...Hp,...Bp,...Up,...kf]);let yt=null;const Qe=Kt({},[...Sf,...qp,..._f,...xd]);let ut=null,oe=null,Te=null;const he=Object.seal(ea(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let kt=!0,Ye=!0,ot=!1,Ze=!0,mt=!1,pt=!0,Xt=!1,nr=!1,_r=null,Ir=null,Ur=!1,qr=!1,bt=!1,mi=!1,rt=!0,Cr=!1;const tn="user-content-";let It=!0,qt=!1,xn=null,mn=!1,Nn=null;const bn=Kt({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let ri=null;const In=Kt({},["audio","video","img","source","image","track"]);let pr=null;const gi=Kt({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),En="http://www.w3.org/1998/Math/MathML",os="http://www.w3.org/2000/svg",wn="http://www.w3.org/1999/xhtml";let Tr=wn,$r=!1,Or=null;const jr=Kt({},[En,os,wn],Fp),yi=dr(Kt({},["mi","mo","mn","ms","mtext"]));let as=null;const On=dr(Kt({},["annotation-xml"]));let ls=null;const Mi=dr(ea(null)),Dr=Kt({},["title","style","font","a","script"]);let Gn=null;const vi=["application/xhtml+xml","text/html"],zi="text/html";let Bt=null,Mr=null;const us=d.createElement("form"),Rt=function(D){return D instanceof RegExp||D instanceof Function},Fi=function(){let D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(!D||typeof D!="object")&&(D={}),D=Od(D),Gn=vi.indexOf(D.PARSER_MEDIA_TYPE)===-1?zi:D.PARSER_MEDIA_TYPE,Bt=Gn==="application/xhtml+xml"?Fp:Ja,Ue=Zo(D,"ALLOWED_TAGS",vt,{transform:Bt}),yt=Zo(D,"ALLOWED_ATTR",Qe,{transform:Bt}),Or=Zo(D,"ALLOWED_NAMESPACES",jr,{transform:Fp}),pr=Zo(D,"ADD_URI_SAFE_ATTR",gi,{transform:Bt,base:gi}),ri=Zo(D,"ADD_DATA_URI_TAGS",In,{transform:Bt,base:In}),Nn=Zo(D,"FORBID_CONTENTS",bn,{transform:Bt}),oe=Zo(D,"FORBID_TAGS",ea(null),{transform:Bt}),Te=Zo(D,"FORBID_ATTR",ea(null),{transform:Bt}),mn=Rr(D,"USE_PROFILES")?D.USE_PROFILES&&typeof D.USE_PROFILES=="object"?Od(D.USE_PROFILES):D.USE_PROFILES:!1,kt=D.ALLOW_ARIA_ATTR!==!1,Ye=D.ALLOW_DATA_ATTR!==!1,ot=D.ALLOW_UNKNOWN_PROTOCOLS||!1,Ze=D.ALLOW_SELF_CLOSE_IN_ATTR!==!1,mt=D.SAFE_FOR_TEMPLATES||!1,pt=D.SAFE_FOR_XML!==!1,Xt=D.WHOLE_DOCUMENT||!1,qr=D.RETURN_DOM||!1,bt=D.RETURN_DOM_FRAGMENT||!1,mi=D.RETURN_TRUSTED_TYPE||!1,Ur=D.FORCE_BODY||!1,rt=D.SANITIZE_DOM!==!1,Cr=D.SANITIZE_NAMED_PROPS||!1,It=D.KEEP_CONTENT!==!1,qt=D.IN_PLACE||!1,tt=Bx(D.ALLOWED_URI_REGEXP)?D.ALLOWED_URI_REGEXP:Cf,Tr=typeof D.NAMESPACE=="string"?D.NAMESPACE:wn,as=Kp(D,"MATHML_TEXT_INTEGRATION_POINTS",yi),ls=Kp(D,"HTML_INTEGRATION_POINTS",On);const ne=Kp(D,"CUSTOM_ELEMENT_HANDLING",Mi);if(ut=ea(null),Rr(ne,"tagNameCheck")&&Rt(ne.tagNameCheck)&&(ut.tagNameCheck=ne.tagNameCheck),Rr(ne,"attributeNameCheck")&&Rt(ne.attributeNameCheck)&&(ut.attributeNameCheck=ne.attributeNameCheck),Rr(ne,"allowCustomizedBuiltInElements")&&typeof ne.allowCustomizedBuiltInElements=="boolean"&&(ut.allowCustomizedBuiltInElements=ne.allowCustomizedBuiltInElements),Qn(ut),mt&&(Ye=!1),bt&&(qr=!0),mn&&((Rr(D,"ALLOWED_TAGS")||Rr(D,"ALLOWED_ATTR"))&&typeof console<"u"&&typeof console.warn=="function"&&console.warn("DOMPurify: USE_PROFILES overrides ALLOWED_TAGS and ALLOWED_ATTR. Do not use these options together."),Ue=Kt({},kf),yt=ea(null),mn.html===!0&&(Kt(Ue,wf),Kt(yt,Sf)),mn.svg===!0&&(Kt(Ue,Hp),Kt(yt,qp),Kt(yt,xd)),mn.svgFilters===!0&&(Kt(Ue,Bp),Kt(yt,qp),Kt(yt,xd)),mn.mathMl===!0&&(Kt(Ue,Up),Kt(yt,_f),Kt(yt,xd))),he.tagCheck=null,he.attributeCheck=null,Rr(D,"ADD_TAGS")&&(typeof D.ADD_TAGS=="function"?he.tagCheck=D.ADD_TAGS:Yl(D.ADD_TAGS)&&(Ue===vt&&(Ue=ic(Ue)),Kt(Ue,D.ADD_TAGS,Bt))),Rr(D,"ADD_ATTR")&&(typeof D.ADD_ATTR=="function"?he.attributeCheck=D.ADD_ATTR:Yl(D.ADD_ATTR)&&(yt===Qe&&(yt=ic(yt)),Kt(yt,D.ADD_ATTR,Bt))),Rr(D,"ADD_FORBID_CONTENTS")&&Yl(D.ADD_FORBID_CONTENTS)&&(Nn===bn&&(Nn=ic(Nn)),Kt(Nn,D.ADD_FORBID_CONTENTS,Bt)),It&&(Ue["#text"]=!0),Xt&&Kt(Ue,["html","head","body"]),Ue.table&&(Ue.tbody=!0,delete oe.tbody),D.TRUSTED_TYPES_POLICY){if(typeof D.TRUSTED_TYPES_POLICY.createHTML!="function")throw po('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof D.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw po('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const we=se;se=D.TRUSTED_TYPES_POLICY;try{Ie=q("")}catch(Ee){throw se=we,Ee}}else D.TRUSTED_TYPES_POLICY===null?(se=void 0,Ie=""):(se===void 0&&(se=$()),se&&typeof Ie=="string"&&(Ie=q("")));Mr=dr(D)},ii=Kt({},[...Hp,...Bp,...Ux]),Vt=Kt({},[...Up,...qx]),Je=function(D,ne,we){return ne===wn?D==="svg":ne===En?D==="svg"&&(we==="annotation-xml"||as[we]):!!ii[D]},si=function(D,ne,we){return ne===wn?D==="math":ne===os?D==="math"&&ls[we]:!!Vt[D]},cs=function(D,ne,we){return ne===os&&!ls[we]||ne===En&&!as[we]?!1:!Vt[D]&&(Dr[D]||!ii[D])},Yn=function(D){const ne=xe(D),we=Ja(be(D)),Ee=I(D);let nt=Tr,ct="template";return Ee&&ae(Ee)===$n.element&&(nt=xe(Ee),ct=Ja(be(Ee))),Or[ne]?ne===os?Je(we,nt,ct):ne===En?si(we,nt,ct):ne===wn?cs(we,nt,ct):Gn==="application/xhtml+xml":!1},E=function(D){Qu(u.removed,{element:D});try{I(D).removeChild(D)}catch{if(Y(D),!I(D))throw po("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},K=function(D,ne,we){try{U(D,ne)}catch{try{D.removeAttribute(we)}catch{}}},ge=function(D){jt(D);const ne=V(D);ne&&co(Ax(ne),we=>{try{Y(we)}catch{}}),ae(D)===$n.element&&pe(D,!1)},je=function(D,ne,we){if(!we)try{we=ne.getAttributeNode(D)}catch{we=null}if(Qu(u.removed,{attribute:we||null,from:ne}),we)K(ne,we,D);else try{ne.removeAttribute(D)}catch{}if(D==="is")if(qr||bt)try{E(ne)}catch{}else try{ne.setAttribute(D,"")}catch{}},pe=function(D,ne){const we=B(D);if(we)for(let Ee=we.length-1;Ee>=0;--Ee){const nt=we[Ee],ct=nt&&nt.name;typeof ct=="string"&&!(ne&&yt[Bt(ct)])&&K(D,nt,ct)}},He=function(D,ne){let we=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const Ee=[D];for(;Ee.length>0;){const nt=Ee.pop();if(ne(nt)===!1)continue;if(we&&ae(nt)===$n.element){const Tt=z(nt);bi(Tt)&&Ee.push(Tt)}const ct=V(nt);if(ct)for(let Tt=ct.length-1;Tt>=0;--Tt)Ee.push(ct[Tt])}},jt=function(D){He(D,ne=>{ae(ne)===$n.element&&pe(ne,!0)})},Qt=function(D){const ne=[];return He(D,we=>{ne.push(we)},!0),ne},kn=function(D,ne){const we=Mp();co(Qt(D),Ee=>{ae(Ee)===$n.element&&zp(we,Ee)}),co(ne,Ee=>{ae(Ee)===$n.element&&!Zu(we,Ee)&&pe(Ee,!0)})},Kr=function(D,ne){let we=!1;return co(u.removed,Ee=>{Ee.element&&(we=we||Ee.element===D,jt(Ee.element))}),kn(D,ne),we},il=8,gt=function(D,ne){const we=xn;let Ee=null;const nt=()=>(Ee||(Ee=Mp(),co(ne,ct=>{zp(Ee,ct)})),Ee);for(let ct=0;;ct++){const Tt=Qt(D),cn=[D];let $t=!1;if(co(Tt,hr=>{ae(hr)===$n.documentFragment?Qu(cn,hr):!$t&&!Zu(we,hr)&&($t=Zu(nt(),hr))}),!$t)return;if(ct>=il)throw po("the tree kept changing during in-place sanitization; refusing to return it");co(cn,(hr,Vn)=>{sa(hr,Vn>0,D,nt())})}},sa=function(D,ne,we,Ee){const nt=Hi(D);let ct;for(;ct=nt.nextNode();)!Zu(Ee,ct)||Zu(xn,ct)||(ne&&ir(Se.uponSanitizeShadowNode,ct,null),zs(ct,we))},oa=function(D){xn&&zp(xn,D)},Wi=function(D,ne){return pt?D==="patchsrc"?!0:D==="for"&&ne!=="label"&&ne!=="output":!1},rr=function(D){pt&&He(D,ne=>{const we=ae(ne);if(we===$n.processingInstruction||we===$n.comment&&cr(Tf,ne.data)){try{Y(ne)}catch{}return!1}if(we===$n.element){const Ee=ne,nt=Bt(be(ne));try{Ee.hasAttribute&&Ee.hasAttribute("patchsrc")&&Ee.removeAttribute("patchsrc"),Ee.hasAttribute&&Ee.hasAttribute("for")&&Wi("for",nt)&&Ee.removeAttribute("for")}catch{}}return!0})},aa=function(D){let ne=null,we=null;if(Ur)D="<remove></remove>"+D;else{const ct=Ix(D,rb);we=ct&&ct[0]}Gn==="application/xhtml+xml"&&Tr===wn&&(D='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+D+"</body></html>");const Ee=se?q(D):D;if(Tr===wn)try{ne=new _().parseFromString(Ee,Gn)}catch{}if(!ne||!ne.documentElement){ne=Z.createDocument(Tr,"template",null);try{ne.documentElement.innerHTML=$r?Ie:Ee}catch{}}const nt=ne.body||ne.documentElement;return D&&we&&nt.insertBefore(d.createTextNode(we),nt.childNodes[0]||null),Tr===wn?qe.call(ne,Xt?"html":"body")[0]:Xt?ne.documentElement:nt},Hi=function(D){let ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const we=ce?ce(D):D.ownerDocument;return Ce.call(we||D,D,(ne?0:w.SHOW_ELEMENT)|w.SHOW_COMMENT|w.SHOW_TEXT|w.SHOW_PROCESSING_INSTRUCTION|w.SHOW_CDATA_SECTION,null)},Nt=function(D){return D=vd(D,Be," "),D=vd(D,$e," "),D=vd(D,et," "),D},ds=function(D){var ne;Is(D);const we=(ne=D.querySelectorAll)===null||ne===void 0?void 0:ne.call(D,"template");we&&co(we,Ee=>{bi(Ee.content)&&ds(Ee.content)})},Is=function(D){D.normalize();const ne=Hi(D,!0);let we=ne.nextNode();for(;we;)we.data=Nt(we.data),we=ne.nextNode()},xi=function(D){const ne=J?J(D):null;return typeof ne!="string"||Bt(ne)!=="form"?!1:typeof D.nodeName!="string"||typeof D.textContent!="string"||typeof D.removeChild!="function"||D.attributes!==B(D)||typeof D.removeAttribute!="function"||typeof D.removeAttributeNode!="function"||typeof D.getAttributeNode!="function"||typeof D.setAttribute!="function"||typeof D.namespaceURI!="string"||typeof D.insertBefore!="function"||typeof D.hasChildNodes!="function"||D.nodeType!==H(D)||D.childNodes!==V(D)},vo=function(D){if(!H||typeof D!="object"||D===null)return null;try{const ne=H(D);return typeof ne=="number"?ne:null}catch{return null}},bi=function(D){return vo(D)===$n.documentFragment},Bi=function(D){return vo(D)!==null};function ir(_e,D,ne){_e.length!==0&&co(_e,we=>{we.call(u,D,ne,Mr)})}const xo=function(D,ne,we){return!!(pt&&we===$n.element&&D.hasChildNodes()&&!Bi(D.firstElementChild)&&cr($p,D.textContent)&&cr($p,D.innerHTML)||pt&&ib[ne]&&we===$n.element&&xe(D)===wn&&(Bi(D.firstElementChild)||typeof D.textContent=="string"&&cr($p,D.textContent))||we===$n.processingInstruction||pt&&we===$n.comment&&cr(Tf,D.data))},zr=function(D,ne){if(D instanceof RegExp)return cr(D,ne);if(D instanceof Function){for(var we=arguments.length,Ee=new Array(we>2?we-2:0),nt=2;nt<we;nt++)Ee[nt-2]=arguments[nt];return!!D(ne,...Ee)}return!1},oi=function(D,ne,we){if(!oe[ne]&&la(ne)&&zr(ut.tagNameCheck,ne))return!1;if(It&&!Nn[ne]&&!Nn[Ja(ne)]){const Ee=I(D),nt=V(D);if(nt&&Ee){const ct=nt.length;for(let Tt=ct-1;Tt>=0;--Tt){const cn=D===we?L(nt[Tt],!0):nt[Tt];Ee.insertBefore(cn,F(D))}}}return E(D),!0},Dn=function(D,ne,we,Ee){return D.length===0?ne:ne===we||ne===Ee?ic(ne):ne},Gr=function(D,ne){return D===ne||I(D)!==null?!1:(qt&&jt(D),!0)},Os=function(D,ne){if(oa(D),ir(Se.beforeSanitizeElements,D,null),Gr(D,ne))return!0;if(xi(D))return E(D),!0;const we=Bt(be(D)),Ee=ae(D);if(Ue=Dn(Se.uponSanitizeElement,Ue,vt,_r),ir(Se.uponSanitizeElement,D,{tagName:we,allowedTags:Ue}),Gr(D,ne))return!0;if(xo(D,we,Ee))return E(D),!0;if(oe[we]||!(he.tagCheck instanceof Function&&he.tagCheck(we))&&!Ue[we]){const nt=oi(D,we,ne);return nt===!1&&(ir(Se.afterSanitizeElements,D,null),Gr(D,ne))?!0:nt}if(Ee===$n.element&&!Yn(D)||(we==="noscript"||we==="noembed"||we==="noframes")&&cr(tb,D.innerHTML))return E(D),!0;if(mt&&Ee===$n.text){const nt=D.textContent,ct=Nt(nt);nt!==ct&&(Qu(u.removed,{element:D.cloneNode()}),D.textContent=ct)}return ir(Se.afterSanitizeElements,D,null),Gr(D,ne)},Nr=function(D,ne,we){if(Te[ne]||Wi(ne,D)||rt&&(ne==="id"||ne==="name")&&(we in d||we in us))return!1;const Ee=yt[ne]||he.attributeCheck instanceof Function&&he.attributeCheck(ne,D);if(Ye&&cr(Ke,ne)||kt&&cr(Ft,ne))return!0;if(!Ee)return la(D)&&zr(ut.tagNameCheck,D)&&zr(ut.attributeNameCheck,ne,D)||ne==="is"&&ut.allowCustomizedBuiltInElements&&zr(ut.tagNameCheck,we);if(pr[ne])return!0;const nt=vd(we,Ct,"");return cr(tt,nt)||(ne==="src"||ne==="xlink:href"||ne==="href")&&D!=="script"&&Wp(we,"data:")===0&&ri[D]||ot&&!cr(Yt,nt)?!0:!we},Ds=Kt({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),la=function(D){return!Ds[Ja(D)]&&cr(xt,D)},Ms=function(D,ne,we,Ee){if(se&&typeof N=="object"&&typeof N.getAttributeType=="function"&&!we)switch(N.getAttributeType(D,ne)){case"TrustedHTML":return q(Ee);case"TrustedScriptURL":return P(Ee)}return Ee},Vl=function(D,ne,we,Ee){try{return we?D.setAttributeNS(we,ne,Ee):D.setAttribute(ne,Ee),xi(D)?(E(D),!1):!0}catch{return je(ne,D),!1}},ua=function(D,ne){return pt&&cr(nb,ne)?!0:Ja(D)==="attributename"&&Wp(ne,"href")!==-1},ps=function(D,ne){if(ir(Se.beforeSanitizeAttributes,D,null),Gr(D,ne))return;const we=D.attributes;if(!we||xi(D))return;yt=Dn(Se.uponSanitizeAttribute,yt,Qe,Ir);const Ee={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:yt,forceKeepAttr:void 0};let nt=we.length;const ct=Bt(be(D));for(;nt--;){const Tt=we[nt],cn=Tt.name,$t=Tt.namespaceURI,hr=Tt.value,Vn=Bt(cn),fr=hr;let dn=cn==="value"?fr:Ox(fr),Er=!1;if(Ee.attrName=Vn,Ee.attrValue=dn,Ee.keepAttr=!0,Ee.forceKeepAttr=void 0,ir(Se.uponSanitizeAttribute,D,Ee),dn=Ee.attrValue,Cr&&(Vn==="id"||Vn==="name")&&Wp(dn,tn)!==0&&(je(cn,D,Tt),dn=tn+dn,Er=!0),ua(cn,dn)){je(cn,D,Tt);continue}if(!Ee.forceKeepAttr){if(!Ee.keepAttr){je(cn,D,Tt);continue}if(!Ze&&cr(jf,dn)){je(cn,D,Tt);continue}if(mt&&(dn=Nt(dn)),!Nr(ct,Vn,dn)){je(cn,D,Tt);continue}dn=Ms(ct,Vn,$t,dn),dn!==fr&&Vl(D,cn,$t,dn)&&Er&&vf(u.removed)}}ir(Se.afterSanitizeAttributes,D,null),Gr(D,ne)},zs=function(D,ne){Os(D,ne),ps(D,ne),bi(D.content)&&ca(D.content)},ca=function(D){let ne=null;const we=Hi(D);for(ir(Se.beforeSanitizeShadowDOM,D,null);ne=we.nextNode();)if(ir(Se.uponSanitizeShadowNode,ne,null),zs(ne,D),ae(ne)===$n.element){const Ee=z(ne);bi(Ee)&&(wi(Ee),ca(Ee))}mt&&Is(D),ir(Se.afterSanitizeShadowDOM,D,null)},wi=function(D){const ne=[{node:D,shadow:null}];for(;ne.length>0;){const we=ne.pop();if(we.shadow){ca(we.shadow);continue}const Ee=we.node,nt=ae(Ee)===$n.element,ct=V(Ee);if(ct)for(let Tt=ct.length-1;Tt>=0;--Tt)ne.push({node:ct[Tt],shadow:null});if(nt){const Tt=J?J(Ee):null;if(typeof Tt=="string"&&Bt(Tt)==="template"){const cn=Ee.content;bi(cn)&&ne.push({node:cn,shadow:null})}}if(nt){const Tt=z(Ee);bi(Tt)&&ne.push({node:null,shadow:Tt},{node:Tt,shadow:null})}}};return u.sanitize=function(_e){let D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ne=null,we=null,Ee=null,nt=null;if($r=!_e,$r&&(_e="<!-->"),typeof _e!="string"&&!Bi(_e)&&(_e=Wx(_e),typeof _e!="string"))throw po("dirty is not a string, aborting");if(!u.isSupported)return _e;nr?(Ue=_r,yt=Ir):Fi(D),u.removed=[];const ct=qt&&typeof _e!="string"&&Bi(_e);let Tt=[];const cn=xn;if(ct){rr(_e);const fr=be(_e);if(typeof fr=="string"){const dn=Bt(fr);if(!Ue[dn]||oe[dn])throw ge(_e),po("root node is forbidden and cannot be sanitized in-place")}if(xi(_e))throw ge(_e),po("root node is clobbered and cannot be sanitized in-place");Tt=Qt(_e),xn=Mp()}else if(Bi(_e))ne=aa("<!---->"),we=ne.ownerDocument.importNode(_e,!0),we.nodeType===$n.element&&we.nodeName==="BODY"||we.nodeName==="HTML"?ne=we:ne.appendChild(we),wi(ne);else{if(!qr&&!mt&&!Xt&&_e.indexOf("<")===-1)return T(_e);if(ne=aa(_e),!ne)return qr?null:mi?Ie:""}ne&&Ur&&E(ne.firstChild);const $t=ct?_e:ne;try{ct&&wi(_e);const fr=Hi($t);for(;Ee=fr.nextNode();)zs(Ee,$t);ct&&gt(_e,Tt)}catch(fr){throw ct&&(ge(_e),Kr(_e,Tt)),fr}finally{xn=cn}if(ct){if(Kr(_e,Tt))throw po("a node selected for removal could not be safely returned; refusing to sanitize in place");return mt&&ds(_e),_e}if(qr){if(mt&&ds(ne),bt)for(nt=ze.call(ne.ownerDocument);ne.firstChild;)nt.appendChild(ne.firstChild);else nt=ne;return(yt.shadowroot||yt.shadowrootmode)&&(nt=Oe.call(f,nt,!0)),nt}const hr=()=>Xt?ne.outerHTML:ne.innerHTML;let Vn=hr();return mt&&cr(Yx,Vn)&&(Is(ne),Vn=hr()),Xt&&Ue["!doctype"]&&ne.ownerDocument&&ne.ownerDocument.doctype&&ne.ownerDocument.doctype.name&&cr(Zx,ne.ownerDocument.doctype.name)&&(Vn="<!DOCTYPE "+ne.ownerDocument.doctype.name+`>
`+Vn),T(Vn)},u.setConfig=function(){let _e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Fi(_e),nr=!0,_r=Ue,Ir=yt},u.clearConfig=function(){Mr=null,nr=!1,_r=null,Ir=null,se=le,Ie=""},u.isValidAttribute=function(_e,D,ne){Mr||Fi({});const we=Bt(_e),Ee=Bt(D);return typeof ne=="string"&&(ua(D,ne)||!Ze&&cr(jf,ne))?!1:Nr(we,Ee,ne)},u.addHook=function(_e,D){typeof D=="function"&&Rr(Se,_e)&&Qu(Se[_e],D)},u.removeHook=function(_e,D){if(Rr(Se,_e)){if(D!==void 0){const ne=Px(Se[_e],D);return ne===-1?void 0:Rx(Se[_e],ne,1)[0]}return vf(Se[_e])}},u.removeHooks=function(_e){Rr(Se,_e)&&(Se[_e]=[])},u.removeAllHooks=function(){Se=Nf()},u}var ab=Wm();function lb(l,u=null){const d=String(l||""),f=d.split(`
`),g=f.findIndex(w=>/^##\s+(?:Practice|Solve)(?:\s*[:—-].*)?\s*$/i.test(w)),v=g===-1?-1:f.findIndex((w,_)=>_>g&&/^##\s+(?:Reflect(?:ion)?|Learn|Stop and think|Optional reading)(?:\b|\s*[:—-])/i.test(w)),k=g>=0?f.slice(g,v<0?f.length:v).join(`
`):`# Solve

${(u==null?void 0:u.challenge)||"Try the lesson task before looking at the guide."}`,C=g>=0?[...f.slice(0,g),...v<0?[]:f.slice(v)].join(`
`).trim():d;return{solve:k,learn:C}}function ub(l){const u=String(l||"").split(`
`),d=[];let f=null;u.forEach((k,C)=>{const w=k.trim(),_=/^(`{3,}|~{3,})/.exec(w);if(_){const Y=_[1];f?f.char===Y[0]&&Y.length>=f.length&&(f=null):f={char:Y[0],length:Y.length};return}if(f)return;const N=/^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(k);if(!N)return;const O=N[2],L=/\bStep\s+\d+(?=\s*(?:[:.·–—-]|$))/i.test(O);d.push({index:C,level:N[1].length,numbered:L})});const g=d.filter(k=>k.numbered),v=(g.length?g:d.filter(k=>k.level===2)).map(k=>k.index);return v.length?{intro:u.slice(0,v[0]).join(`
`).trim(),steps:v.map((k,C)=>u.slice(k,v[C+1]??u.length).join(`
`).trim())}:{intro:u.join(`
`),steps:[]}}const cb=Object.assign({"../content/capstone-discovery.md":mv,"../content/capstone-feedback.md":gv,"../content/capstone-interviews.md":yv,"../content/capstone-prototype.md":vv,"../content/csharp-conditionals.md":xv,"../content/csharp-variables.md":bv,"../content/python-decisions.md":wv,"../content/python-formatting.md":kv,"../content/python-lists.md":Sv,"../content/python-loops.md":_v,"../content/python-strings.md":Cv,"../content/python-variables.md":Tv,"../content/react-components.md":jv,"../content/react-state.md":Nv,"../content/tsi-equations.md":Ev,"../content/tsi-percents.md":Lv,"../content/tsi-ratios.md":Pv,"../content/tsi-slope.md":Av,"../content/uil-arrays.md":Rv,"../content/uil-loops.md":Iv,"../content/uil-methods.md":Ov,"../content/uil-strings.md":Dv,"../content/unity-colliders.md":Mv,"../content/unity-player-controller.md":zv,"../content/unity-score.md":Fv,"../content/web-events.md":Wv,"../content/web-layout.md":Hv}),db="# Add a Markdown lesson\n\nSave a new `.md` file inside `src/content/`.\n",pb=l=>cb[`../content/${l}.md`]||db,el=l=>ab.sanitize(Jt.parse(l,{breaks:!1,gfm:!0}));function hb(l,u=""){if(!(l!=null&&l.isPublished))return"";let d="";const f=Array.isArray(l.cases)?l.cases:[];f.length&&!/##\s+(?:Published )?Examples\b/i.test(u)&&(d+=`

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
`})),d}function Ef(l,u){if(!u)return l;const d="https://github.com/mswhitby/computer-science-1/blob/main/units/",f=u.startsWith("/playground/data/")?new URL(u,"https://www.mswhitby.com"):new URL(u,d);return String(l).replace(/\]\(([^)]+)\)/g,(g,v)=>{if(/^(?:https?:|mailto:|#|data:)/i.test(v))return g;const[k,...C]=v.split(" ");try{const w=new URL(k,f);return w.origin!==f.origin?g:"]("+w.href+(C.length?" "+C.join(" "):"")+")"}catch{return g}})}const Eh={markdown:l=>`designlab:md:${l}`,code:l=>`designlab:code:${l}`};function Dd(l){try{return localStorage.getItem(l)}catch{return null}}function fo(l,u){try{localStorage.setItem(l,u)}catch{}}function fb(l){try{localStorage.removeItem(l)}catch{}}function Lf({lessonId:l,task:u,isTsi:d=!1,tsiAnswer:f=null}){var H;const g=(u==null?void 0:u.markdownSource)||pb(l),v=Eh.markdown(l),[k,C]=ve.useState(g),[w,_]=ve.useState(d?"learn":"solve"),[N,O]=ve.useState(0),[L,Y]=ve.useState(!1);ve.useEffect(()=>{C(Dd(v)??g),_(d?"learn":"solve"),O(0),Y(!1)},[v,g,d]);const U=ve.useMemo(()=>{const J=lb(k,u),ce=J.solve+hb(u,J.solve);return{solve:Ef(ce,(u==null?void 0:u.markdownUrl)||(u==null?void 0:u.markdown)),learn:Ef(J.learn,(u==null?void 0:u.markdownUrl)||(u==null?void 0:u.markdown))}},[k,u]),F=ve.useMemo(()=>ub(U.learn),[U.learn]),V=!d&&w==="learn"&&F.steps.length>0,I=Math.min(N,Math.max(0,F.steps.length-1)),z=d?U.learn:w==="solve"?U.solve:V?F.intro+`

`+F.steps[I]:U.learn,B=ve.useMemo(()=>el(z),[z]);return c.jsxs("section",{className:"instructions-pane",children:[c.jsxs("div",{className:"pane-header",children:[d?c.jsx("strong",{className:"tsi-learn-title",children:"Learn"}):c.jsxs("div",{className:"tabs compact",role:"tablist","aria-label":"Lesson views",children:[c.jsx("button",{role:"tab","aria-selected":w==="solve",className:w==="solve"?"active":"",onClick:()=>{_("solve"),O(0)},children:"Solve"}),c.jsx("button",{role:"tab","aria-selected":w==="learn",className:w==="learn"?"active":"",onClick:()=>{_("learn"),O(0)},children:"Learn"})]}),c.jsx("button",{type:"button",className:ho("icon-button",L&&"active"),title:"Edit lesson text","aria-label":"Edit lesson text",onClick:()=>Y(!L),children:c.jsx(By,{size:16})})]}),L?c.jsxs("div",{className:"markdown-source",children:[c.jsx("p",{className:"hint",children:"Try editing these instructions. Changes here are just for your preview."}),c.jsx("textarea",{"aria-label":"Markdown source",value:k,onChange:J=>{C(J.target.value),O(0),fo(v,J.target.value)}}),c.jsx("button",{type:"button",className:"btn",onClick:()=>{fb(v),C(g),O(0)},children:"Reset lesson text"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"markdown-preview",role:"tabpanel",children:[c.jsx("div",{dangerouslySetInnerHTML:{__html:B}}),d&&f&&c.jsxs("section",{className:"tsi-worked-solution",role:"status",children:[c.jsx("h3",{children:f.correct?"Why that works":"Review the solution"}),c.jsx("p",{children:(H=xh[l])==null?void 0:H.explanation})]})]}),V&&c.jsxs("nav",{className:"lesson-step-controls","aria-label":"Learning steps",children:[I>0&&c.jsxs("button",{type:"button",className:"step-link previous",onClick:()=>O(J=>Math.max(0,J-1)),children:[c.jsx(Wd,{size:16,"aria-hidden":"true"})," Previous"]}),c.jsxs("span",{children:["Step ",I+1," of ",F.steps.length]}),I<F.steps.length-1&&c.jsxs("button",{type:"button",className:"step-link next",onClick:()=>O(J=>Math.min(F.steps.length-1,J+1)),children:["Next ",c.jsx(ni,{size:16,"aria-hidden":"true"})]})]})]})]})}var Cd={exports:{}},mb=Cd.exports,Pf;function ss(){return Pf||(Pf=1,(function(l,u){(function(d,f){l.exports=f()})(mb,(function(){var d=navigator.userAgent,f=navigator.platform,g=/gecko\/\d/i.test(d),v=/MSIE \d/.test(d),k=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(d),C=/Edge\/(\d+)/.exec(d),w=v||k||C,_=w&&(v?document.documentMode||6:+(C||k)[1]),N=!C&&/WebKit\//.test(d),O=N&&/Qt\/\d+\.\d+/.test(d),L=!C&&/Chrome\/(\d+)/.exec(d),Y=L&&+L[1],U=/Opera\//.test(d),F=/Apple Computer/.test(navigator.vendor),V=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(d),I=/PhantomJS/.test(d),z=F&&(/Mobile\/\w+/.test(d)||navigator.maxTouchPoints>2),B=/Android/.test(d),H=z||B||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(d),J=z||/Mac/.test(f),ce=/\bCrOS\b/.test(d),ae=/win/i.test(f),be=U&&d.match(/Version\/(\d*\.\d*)/);be&&(be=Number(be[1])),be&&be>=15&&(U=!1,N=!0);var Re=J&&(O||U&&(be==null||be<12.11)),xe=g||w&&_>=9;function se(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var Ie=function(e,n){var s=e.className,i=se(n).exec(s);if(i){var o=s.slice(i.index+i[0].length);e.className=s.slice(0,i.index)+(o?i[1]+o:"")}};function le(e){for(var n=e.childNodes.length;n>0;--n)e.removeChild(e.firstChild);return e}function fe(e,n){return le(e).appendChild(n)}function A(e,n,s,i){var o=document.createElement(e);if(s&&(o.className=s),i&&(o.style.cssText=i),typeof n=="string")o.appendChild(document.createTextNode(n));else if(n)for(var h=0;h<n.length;++h)o.appendChild(n[h]);return o}function Q(e,n,s,i){var o=A(e,n,s,i);return o.setAttribute("role","presentation"),o}var q;document.createRange?q=function(e,n,s,i){var o=document.createRange();return o.setEnd(i||e,s),o.setStart(e,n),o}:q=function(e,n,s){var i=document.body.createTextRange();try{i.moveToElementText(e.parentNode)}catch{return i}return i.collapse(!0),i.moveEnd("character",s),i.moveStart("character",n),i};function T(e,n){if(n.nodeType==3&&(n=n.parentNode),e.contains)return e.contains(n);do if(n.nodeType==11&&(n=n.host),n==e)return!0;while(n=n.parentNode)}function P(e){var n=e.ownerDocument||e,s;try{s=e.activeElement}catch{s=n.body||null}for(;s&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function $(e,n){var s=e.className;se(n).test(s)||(e.className+=(s?" ":"")+n)}function M(e,n){for(var s=e.split(" "),i=0;i<s.length;i++)s[i]&&!se(s[i]).test(n)&&(n+=" "+s[i]);return n}var Z=function(e){e.select()};z?Z=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:w&&(Z=function(e){try{e.select()}catch{}});function Ce(e){return e.display.wrapper.ownerDocument}function ze(e){return qe(e.display.wrapper)}function qe(e){return e.getRootNode?e.getRootNode():e.ownerDocument}function Oe(e){return Ce(e).defaultView}function Se(e){var n=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,n)}}function Be(e,n,s){n||(n={});for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s!==!1||!Object.prototype.hasOwnProperty.call(n,i))&&(n[i]=e[i]);return n}function $e(e,n,s,i,o){n==null&&(n=e.search(/[^\s\u00a0]/),n==-1&&(n=e.length));for(var h=i||0,y=o||0;;){var b=e.indexOf("	",h);if(b<0||b>=n)return y+(n-h);y+=b-h,y+=s-y%s,h=b+1}}var et=function(){this.id=null,this.f=null,this.time=0,this.handler=Se(this.onTimeout,this)};et.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},et.prototype.set=function(e,n){this.f=n;var s=+new Date+e;(!this.id||s<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=s)};function Ke(e,n){for(var s=0;s<e.length;++s)if(e[s]==n)return s;return-1}var Ft=50,Yt={toString:function(){return"CodeMirror.Pass"}},Ct={scroll:!1},xt={origin:"*mouse"},tt={origin:"+move"};function Ue(e,n,s){for(var i=0,o=0;;){var h=e.indexOf("	",i);h==-1&&(h=e.length);var y=h-i;if(h==e.length||o+y>=n)return i+Math.min(y,n-o);if(o+=h-i,o+=s-o%s,i=h+1,o>=n)return i}}var vt=[""];function yt(e){for(;vt.length<=e;)vt.push(Qe(vt)+" ");return vt[e]}function Qe(e){return e[e.length-1]}function ut(e,n){for(var s=[],i=0;i<e.length;i++)s[i]=n(e[i],i);return s}function oe(e,n,s){for(var i=0,o=s(n);i<e.length&&s(e[i])<=o;)i++;e.splice(i,0,n)}function Te(){}function he(e,n){var s;return Object.create?s=Object.create(e):(Te.prototype=e,s=new Te),n&&Be(n,s),s}var kt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function Ye(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||kt.test(e))}function ot(e,n){return n?n.source.indexOf("\\w")>-1&&Ye(e)?!0:n.test(e):Ye(e)}function Ze(e){for(var n in e)if(e.hasOwnProperty(n)&&e[n])return!1;return!0}var mt=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function pt(e){return e.charCodeAt(0)>=768&&mt.test(e)}function Xt(e,n,s){for(;(s<0?n>0:n<e.length)&&pt(e.charAt(n));)n+=s;return n}function nr(e,n,s){for(var i=n>s?-1:1;;){if(n==s)return n;var o=(n+s)/2,h=i<0?Math.ceil(o):Math.floor(o);if(h==n)return e(h)?n:s;e(h)?s=h:n=h+i}}function _r(e,n,s,i){if(!e)return i(n,s,"ltr",0);for(var o=!1,h=0;h<e.length;++h){var y=e[h];(y.from<s&&y.to>n||n==s&&y.to==n)&&(i(Math.max(y.from,n),Math.min(y.to,s),y.level==1?"rtl":"ltr",h),o=!0)}o||i(n,s,"ltr")}var Ir=null;function Ur(e,n,s){var i;Ir=null;for(var o=0;o<e.length;++o){var h=e[o];if(h.from<n&&h.to>n)return o;h.to==n&&(h.from!=h.to&&s=="before"?i=o:Ir=o),h.from==n&&(h.from!=h.to&&s!="before"?i=o:Ir=o)}return i??Ir}var qr=(function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function s(j){return j<=247?e.charAt(j):1424<=j&&j<=1524?"R":1536<=j&&j<=1785?n.charAt(j-1536):1774<=j&&j<=2220?"r":8192<=j&&j<=8203?"w":j==8204?"b":"L"}var i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,h=/[LRr]/,y=/[Lb1n]/,b=/[1n]/;function S(j,W,G){this.level=j,this.from=W,this.to=G}return function(j,W){var G=W=="ltr"?"L":"R";if(j.length==0||W=="ltr"&&!i.test(j))return!1;for(var ie=j.length,te=[],ye=0;ye<ie;++ye)te.push(s(j.charCodeAt(ye)));for(var ke=0,Pe=G;ke<ie;++ke){var Ne=te[ke];Ne=="m"?te[ke]=Pe:Pe=Ne}for(var Fe=0,Me=G;Fe<ie;++Fe){var Ge=te[Fe];Ge=="1"&&Me=="r"?te[Fe]="n":h.test(Ge)&&(Me=Ge,Ge=="r"&&(te[Fe]="R"))}for(var at=1,Ve=te[0];at<ie-1;++at){var St=te[at];St=="+"&&Ve=="1"&&te[at+1]=="1"?te[at]="1":St==","&&Ve==te[at+1]&&(Ve=="1"||Ve=="n")&&(te[at]=Ve),Ve=St}for(var Et=0;Et<ie;++Et){var Bn=te[Et];if(Bn==",")te[Et]="N";else if(Bn=="%"){var sn=void 0;for(sn=Et+1;sn<ie&&te[sn]=="%";++sn);for(var xr=Et&&te[Et-1]=="!"||sn<ie&&te[sn]=="1"?"1":"N",lr=Et;lr<sn;++lr)te[lr]=xr;Et=sn-1}}for(var yn=0,br=G;yn<ie;++yn){var Tn=te[yn];br=="L"&&Tn=="1"?te[yn]="L":h.test(Tn)&&(br=Tn)}for(var vn=0;vn<ie;++vn)if(o.test(te[vn])){var Mt=void 0;for(Mt=vn+1;Mt<ie&&o.test(te[Mt]);++Mt);for(var dt=(vn?te[vn-1]:G)=="L",zt=(Mt<ie?te[Mt]:G)=="L",on=dt==zt?dt?"L":"R":G,un=vn;un<Mt;++un)te[un]=on;vn=Mt-1}for(var Ut=[],wr,Lt=0;Lt<ie;)if(y.test(te[Lt])){var lo=Lt;for(++Lt;Lt<ie&&y.test(te[Lt]);++Lt);Ut.push(new S(0,lo,Lt))}else{var kr=Lt,Ii=Ut.length,ts=W=="rtl"?1:0;for(++Lt;Lt<ie&&te[Lt]!="L";++Lt);for(var An=kr;An<Lt;)if(b.test(te[An])){kr<An&&(Ut.splice(Ii,0,new S(1,kr,An)),Ii+=ts);var Un=An;for(++An;An<Lt&&b.test(te[An]);++An);Ut.splice(Ii,0,new S(2,Un,An)),Ii+=ts,kr=An}else++An;kr<Lt&&Ut.splice(Ii,0,new S(1,kr,Lt))}return W=="ltr"&&(Ut[0].level==1&&(wr=j.match(/^\s+/))&&(Ut[0].from=wr[0].length,Ut.unshift(new S(0,0,wr[0].length))),Qe(Ut).level==1&&(wr=j.match(/\s+$/))&&(Qe(Ut).to-=wr[0].length,Ut.push(new S(0,ie-wr[0].length,ie)))),W=="rtl"?Ut.reverse():Ut}})();function bt(e,n){var s=e.order;return s==null&&(s=e.order=qr(e.text,n)),s}var mi=[],rt=function(e,n,s){if(e.addEventListener)e.addEventListener(n,s,!1);else if(e.attachEvent)e.attachEvent("on"+n,s);else{var i=e._handlers||(e._handlers={});i[n]=(i[n]||mi).concat(s)}};function Cr(e,n){return e._handlers&&e._handlers[n]||mi}function tn(e,n,s){if(e.removeEventListener)e.removeEventListener(n,s,!1);else if(e.detachEvent)e.detachEvent("on"+n,s);else{var i=e._handlers,o=i&&i[n];if(o){var h=Ke(o,s);h>-1&&(i[n]=o.slice(0,h).concat(o.slice(h+1)))}}}function It(e,n){var s=Cr(e,n);if(s.length)for(var i=Array.prototype.slice.call(arguments,2),o=0;o<s.length;++o)s[o].apply(null,i)}function qt(e,n,s){return typeof n=="string"&&(n={type:n,preventDefault:function(){this.defaultPrevented=!0}}),It(e,s||n.type,e,n),In(n)||n.codemirrorIgnore}function xn(e){var n=e._handlers&&e._handlers.cursorActivity;if(n)for(var s=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),i=0;i<n.length;++i)Ke(s,n[i])==-1&&s.push(n[i])}function mn(e,n){return Cr(e,n).length>0}function Nn(e){e.prototype.on=function(n,s){rt(this,n,s)},e.prototype.off=function(n,s){tn(this,n,s)}}function bn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ri(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function In(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==!1}function pr(e){bn(e),ri(e)}function gi(e){return e.target||e.srcElement}function En(e){var n=e.which;return n==null&&(e.button&1?n=1:e.button&2?n=3:e.button&4&&(n=2)),J&&e.ctrlKey&&n==1&&(n=3),n}var os=(function(){if(w&&_<9)return!1;var e=A("div");return"draggable"in e||"dragDrop"in e})(),wn;function Tr(e){if(wn==null){var n=A("span","​");fe(e,A("span",[n,document.createTextNode("x")])),e.firstChild.offsetHeight!=0&&(wn=n.offsetWidth<=1&&n.offsetHeight>2&&!(w&&_<8))}var s=wn?A("span","​"):A("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return s.setAttribute("cm-text",""),s}var $r;function Or(e){if($r!=null)return $r;var n=fe(e,document.createTextNode("AخA")),s=q(n,0,1).getBoundingClientRect(),i=q(n,1,2).getBoundingClientRect();return le(e),!s||s.left==s.right?!1:$r=i.right-s.right<3}var jr=`

b`.split(/\n/).length!=3?function(e){for(var n=0,s=[],i=e.length;n<=i;){var o=e.indexOf(`
`,n);o==-1&&(o=e.length);var h=e.slice(n,e.charAt(o-1)=="\r"?o-1:o),y=h.indexOf("\r");y!=-1?(s.push(h.slice(0,y)),n+=y+1):(s.push(h),n=o+1)}return s}:function(e){return e.split(/\r\n?|\n/)},yi=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch{return!1}}:function(e){var n;try{n=e.ownerDocument.selection.createRange()}catch{}return!n||n.parentElement()!=e?!1:n.compareEndPoints("StartToEnd",n)!=0},as=(function(){var e=A("div");return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),typeof e.oncopy=="function")})(),On=null;function ls(e){if(On!=null)return On;var n=fe(e,A("span","x")),s=n.getBoundingClientRect(),i=q(n,0,1).getBoundingClientRect();return On=Math.abs(s.left-i.left)>1}var Mi={},Dr={};function Gn(e,n){arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),Mi[e]=n}function vi(e,n){Dr[e]=n}function zi(e){if(typeof e=="string"&&Dr.hasOwnProperty(e))e=Dr[e];else if(e&&typeof e.name=="string"&&Dr.hasOwnProperty(e.name)){var n=Dr[e.name];typeof n=="string"&&(n={name:n}),e=he(n,e),e.name=n.name}else{if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return zi("application/xml");if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return zi("application/json")}return typeof e=="string"?{name:e}:e||{name:"null"}}function Bt(e,n){n=zi(n);var s=Mi[n.name];if(!s)return Bt(e,"text/plain");var i=s(e,n);if(Mr.hasOwnProperty(n.name)){var o=Mr[n.name];for(var h in o)o.hasOwnProperty(h)&&(i.hasOwnProperty(h)&&(i["_"+h]=i[h]),i[h]=o[h])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var y in n.modeProps)i[y]=n.modeProps[y];return i}var Mr={};function us(e,n){var s=Mr.hasOwnProperty(e)?Mr[e]:Mr[e]={};Be(n,s)}function Rt(e,n){if(n===!0)return n;if(e.copyState)return e.copyState(n);var s={};for(var i in n){var o=n[i];o instanceof Array&&(o=o.concat([])),s[i]=o}return s}function Fi(e,n){for(var s;e.innerMode&&(s=e.innerMode(n),!(!s||s.mode==e));)n=s.state,e=s.mode;return s||{mode:e,state:n}}function ii(e,n,s){return e.startState?e.startState(n,s):!0}var Vt=function(e,n,s){this.pos=this.start=0,this.string=e,this.tabSize=n||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=s};Vt.prototype.eol=function(){return this.pos>=this.string.length},Vt.prototype.sol=function(){return this.pos==this.lineStart},Vt.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Vt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Vt.prototype.eat=function(e){var n=this.string.charAt(this.pos),s;if(typeof e=="string"?s=n==e:s=n&&(e.test?e.test(n):e(n)),s)return++this.pos,n},Vt.prototype.eatWhile=function(e){for(var n=this.pos;this.eat(e););return this.pos>n},Vt.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Vt.prototype.skipToEnd=function(){this.pos=this.string.length},Vt.prototype.skipTo=function(e){var n=this.string.indexOf(e,this.pos);if(n>-1)return this.pos=n,!0},Vt.prototype.backUp=function(e){this.pos-=e},Vt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=$e(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?$e(this.string,this.lineStart,this.tabSize):0)},Vt.prototype.indentation=function(){return $e(this.string,null,this.tabSize)-(this.lineStart?$e(this.string,this.lineStart,this.tabSize):0)},Vt.prototype.match=function(e,n,s){if(typeof e=="string"){var i=function(y){return s?y.toLowerCase():y},o=this.string.substr(this.pos,e.length);if(i(o)==i(e))return n!==!1&&(this.pos+=e.length),!0}else{var h=this.string.slice(this.pos).match(e);return h&&h.index>0?null:(h&&n!==!1&&(this.pos+=h[0].length),h)}},Vt.prototype.current=function(){return this.string.slice(this.start,this.pos)},Vt.prototype.hideFirstChars=function(e,n){this.lineStart+=e;try{return n()}finally{this.lineStart-=e}},Vt.prototype.lookAhead=function(e){var n=this.lineOracle;return n&&n.lookAhead(e)},Vt.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};function Je(e,n){if(n-=e.first,n<0||n>=e.size)throw new Error("There is no line "+(n+e.first)+" in the document.");for(var s=e;!s.lines;)for(var i=0;;++i){var o=s.children[i],h=o.chunkSize();if(n<h){s=o;break}n-=h}return s.lines[n]}function si(e,n,s){var i=[],o=n.line;return e.iter(n.line,s.line+1,function(h){var y=h.text;o==s.line&&(y=y.slice(0,s.ch)),o==n.line&&(y=y.slice(n.ch)),i.push(y),++o}),i}function cs(e,n,s){var i=[];return e.iter(n,s,function(o){i.push(o.text)}),i}function Yn(e,n){var s=n-e.height;if(s)for(var i=e;i;i=i.parent)i.height+=s}function E(e){if(e.parent==null)return null;for(var n=e.parent,s=Ke(n.lines,e),i=n.parent;i;n=i,i=i.parent)for(var o=0;i.children[o]!=n;++o)s+=i.children[o].chunkSize();return s+n.first}function K(e,n){var s=e.first;e:do{for(var i=0;i<e.children.length;++i){var o=e.children[i],h=o.height;if(n<h){e=o;continue e}n-=h,s+=o.chunkSize()}return s}while(!e.lines);for(var y=0;y<e.lines.length;++y){var b=e.lines[y],S=b.height;if(n<S)break;n-=S}return s+y}function ge(e,n){return n>=e.first&&n<e.first+e.size}function je(e,n){return String(e.lineNumberFormatter(n+e.firstLineNumber))}function pe(e,n,s){if(s===void 0&&(s=null),!(this instanceof pe))return new pe(e,n,s);this.line=e,this.ch=n,this.sticky=s}function He(e,n){return e.line-n.line||e.ch-n.ch}function jt(e,n){return e.sticky==n.sticky&&He(e,n)==0}function Qt(e){return pe(e.line,e.ch)}function kn(e,n){return He(e,n)<0?n:e}function Kr(e,n){return He(e,n)<0?e:n}function il(e,n){return Math.max(e.first,Math.min(n,e.first+e.size-1))}function gt(e,n){if(n.line<e.first)return pe(e.first,0);var s=e.first+e.size-1;return n.line>s?pe(s,Je(e,s).text.length):sa(n,Je(e,n.line).text.length)}function sa(e,n){var s=e.ch;return s==null||s>n?pe(e.line,n):s<0?pe(e.line,0):e}function oa(e,n){for(var s=[],i=0;i<n.length;i++)s[i]=gt(e,n[i]);return s}var Wi=function(e,n){this.state=e,this.lookAhead=n},rr=function(e,n,s,i){this.state=n,this.doc=e,this.line=s,this.maxLookAhead=i||0,this.baseTokens=null,this.baseTokenPos=1};rr.prototype.lookAhead=function(e){var n=this.doc.getLine(this.line+e);return n!=null&&e>this.maxLookAhead&&(this.maxLookAhead=e),n},rr.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var n=this.baseTokens[this.baseTokenPos+1];return{type:n&&n.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},rr.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},rr.fromSaved=function(e,n,s){return n instanceof Wi?new rr(e,Rt(e.mode,n.state),s,n.lookAhead):new rr(e,Rt(e.mode,n),s)},rr.prototype.save=function(e){var n=e!==!1?Rt(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new Wi(n,this.maxLookAhead):n};function aa(e,n,s,i){var o=[e.state.modeGen],h={};ir(e,n.text,e.doc.mode,s,function(j,W){return o.push(j,W)},h,i);for(var y=s.state,b=function(j){s.baseTokens=o;var W=e.state.overlays[j],G=1,ie=0;s.state=!0,ir(e,n.text,W.mode,s,function(te,ye){for(var ke=G;ie<te;){var Pe=o[G];Pe>te&&o.splice(G,1,te,o[G+1],Pe),G+=2,ie=Math.min(te,Pe)}if(ye)if(W.opaque)o.splice(ke,G-ke,te,"overlay "+ye),G=ke+2;else for(;ke<G;ke+=2){var Ne=o[ke+1];o[ke+1]=(Ne?Ne+" ":"")+"overlay "+ye}},h),s.state=y,s.baseTokens=null,s.baseTokenPos=1},S=0;S<e.state.overlays.length;++S)b(S);return{styles:o,classes:h.bgClass||h.textClass?h:null}}function Hi(e,n,s){if(!n.styles||n.styles[0]!=e.state.modeGen){var i=Nt(e,E(n)),o=n.text.length>e.options.maxHighlightLength&&Rt(e.doc.mode,i.state),h=aa(e,n,i);o&&(i.state=o),n.stateAfter=i.save(!o),n.styles=h.styles,h.classes?n.styleClasses=h.classes:n.styleClasses&&(n.styleClasses=null),s===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return n.styles}function Nt(e,n,s){var i=e.doc,o=e.display;if(!i.mode.startState)return new rr(i,!0,n);var h=xo(e,n,s),y=h>i.first&&Je(i,h-1).stateAfter,b=y?rr.fromSaved(i,y,h):new rr(i,ii(i.mode),h);return i.iter(h,n,function(S){ds(e,S.text,b);var j=b.line;S.stateAfter=j==n-1||j%5==0||j>=o.viewFrom&&j<o.viewTo?b.save():null,b.nextLine()}),s&&(i.modeFrontier=b.line),b}function ds(e,n,s,i){var o=e.doc.mode,h=new Vt(n,e.options.tabSize,s);for(h.start=h.pos=i||0,n==""&&Is(o,s.state);!h.eol();)xi(o,h,s.state),h.start=h.pos}function Is(e,n){if(e.blankLine)return e.blankLine(n);if(e.innerMode){var s=Fi(e,n);if(s.mode.blankLine)return s.mode.blankLine(s.state)}}function xi(e,n,s,i){for(var o=0;o<10;o++){i&&(i[0]=Fi(e,s).mode);var h=e.token(n,s);if(n.pos>n.start)return h}throw new Error("Mode "+e.name+" failed to advance stream.")}var vo=function(e,n,s){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=n||null,this.state=s};function bi(e,n,s,i){var o=e.doc,h=o.mode,y;n=gt(o,n);var b=Je(o,n.line),S=Nt(e,n.line,s),j=new Vt(b.text,e.options.tabSize,S),W;for(i&&(W=[]);(i||j.pos<n.ch)&&!j.eol();)j.start=j.pos,y=xi(h,j,S.state),i&&W.push(new vo(j,y,Rt(o.mode,S.state)));return i?W:new vo(j,y,S.state)}function Bi(e,n){if(e)for(;;){var s=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!s)break;e=e.slice(0,s.index)+e.slice(s.index+s[0].length);var i=s[1]?"bgClass":"textClass";n[i]==null?n[i]=s[2]:new RegExp("(?:^|\\s)"+s[2]+"(?:$|\\s)").test(n[i])||(n[i]+=" "+s[2])}return e}function ir(e,n,s,i,o,h,y){var b=s.flattenSpans;b==null&&(b=e.options.flattenSpans);var S=0,j=null,W=new Vt(n,e.options.tabSize,i),G,ie=e.options.addModeClass&&[null];for(n==""&&Bi(Is(s,i.state),h);!W.eol();){if(W.pos>e.options.maxHighlightLength?(b=!1,y&&ds(e,n,i,W.pos),W.pos=n.length,G=null):G=Bi(xi(s,W,i.state,ie),h),ie){var te=ie[0].name;te&&(G="m-"+(G?te+" "+G:te))}if(!b||j!=G){for(;S<W.start;)S=Math.min(W.start,S+5e3),o(S,j);j=G}W.start=W.pos}for(;S<W.pos;){var ye=Math.min(W.pos,S+5e3);o(ye,j),S=ye}}function xo(e,n,s){for(var i,o,h=e.doc,y=s?-1:n-(e.doc.mode.innerMode?1e3:100),b=n;b>y;--b){if(b<=h.first)return h.first;var S=Je(h,b-1),j=S.stateAfter;if(j&&(!s||b+(j instanceof Wi?j.lookAhead:0)<=h.modeFrontier))return b;var W=$e(S.text,null,e.options.tabSize);(o==null||i>W)&&(o=b-1,i=W)}return o}function zr(e,n){if(e.modeFrontier=Math.min(e.modeFrontier,n),!(e.highlightFrontier<n-10)){for(var s=e.first,i=n-1;i>s;i--){var o=Je(e,i).stateAfter;if(o&&(!(o instanceof Wi)||i+o.lookAhead<n)){s=i+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,s)}}var oi=!1,Dn=!1;function Gr(){oi=!0}function Os(){Dn=!0}function Nr(e,n,s){this.marker=e,this.from=n,this.to=s}function Ds(e,n){if(e)for(var s=0;s<e.length;++s){var i=e[s];if(i.marker==n)return i}}function la(e,n){for(var s,i=0;i<e.length;++i)e[i]!=n&&(s||(s=[])).push(e[i]);return s}function Ms(e,n,s){var i=s&&window.WeakSet&&(s.markedSpans||(s.markedSpans=new WeakSet));i&&e.markedSpans&&i.has(e.markedSpans)?e.markedSpans.push(n):(e.markedSpans=e.markedSpans?e.markedSpans.concat([n]):[n],i&&i.add(e.markedSpans)),n.marker.attachLine(e)}function Vl(e,n,s){var i;if(e)for(var o=0;o<e.length;++o){var h=e[o],y=h.marker,b=h.from==null||(y.inclusiveLeft?h.from<=n:h.from<n);if(b||h.from==n&&y.type=="bookmark"&&(!s||!h.marker.insertLeft)){var S=h.to==null||(y.inclusiveRight?h.to>=n:h.to>n);(i||(i=[])).push(new Nr(y,h.from,S?null:h.to))}}return i}function ua(e,n,s){var i;if(e)for(var o=0;o<e.length;++o){var h=e[o],y=h.marker,b=h.to==null||(y.inclusiveRight?h.to>=n:h.to>n);if(b||h.from==n&&y.type=="bookmark"&&(!s||h.marker.insertLeft)){var S=h.from==null||(y.inclusiveLeft?h.from<=n:h.from<n);(i||(i=[])).push(new Nr(y,S?null:h.from-n,h.to==null?null:h.to-n))}}return i}function ps(e,n){if(n.full)return null;var s=ge(e,n.from.line)&&Je(e,n.from.line).markedSpans,i=ge(e,n.to.line)&&Je(e,n.to.line).markedSpans;if(!s&&!i)return null;var o=n.from.ch,h=n.to.ch,y=He(n.from,n.to)==0,b=Vl(s,o,y),S=ua(i,h,y),j=n.text.length==1,W=Qe(n.text).length+(j?o:0);if(b)for(var G=0;G<b.length;++G){var ie=b[G];if(ie.to==null){var te=Ds(S,ie.marker);te?j&&(ie.to=te.to==null?null:te.to+W):ie.to=o}}if(S)for(var ye=0;ye<S.length;++ye){var ke=S[ye];if(ke.to!=null&&(ke.to+=W),ke.from==null){var Pe=Ds(b,ke.marker);Pe||(ke.from=W,j&&(b||(b=[])).push(ke))}else ke.from+=W,j&&(b||(b=[])).push(ke)}b&&(b=zs(b)),S&&S!=b&&(S=zs(S));var Ne=[b];if(!j){var Fe=n.text.length-2,Me;if(Fe>0&&b)for(var Ge=0;Ge<b.length;++Ge)b[Ge].to==null&&(Me||(Me=[])).push(new Nr(b[Ge].marker,null,null));for(var at=0;at<Fe;++at)Ne.push(Me);Ne.push(S)}return Ne}function zs(e){for(var n=0;n<e.length;++n){var s=e[n];s.from!=null&&s.from==s.to&&s.marker.clearWhenEmpty!==!1&&e.splice(n--,1)}return e.length?e:null}function ca(e,n,s){var i=null;if(e.iter(n.line,s.line+1,function(te){if(te.markedSpans)for(var ye=0;ye<te.markedSpans.length;++ye){var ke=te.markedSpans[ye].marker;ke.readOnly&&(!i||Ke(i,ke)==-1)&&(i||(i=[])).push(ke)}}),!i)return null;for(var o=[{from:n,to:s}],h=0;h<i.length;++h)for(var y=i[h],b=y.find(0),S=0;S<o.length;++S){var j=o[S];if(!(He(j.to,b.from)<0||He(j.from,b.to)>0)){var W=[S,1],G=He(j.from,b.from),ie=He(j.to,b.to);(G<0||!y.inclusiveLeft&&!G)&&W.push({from:j.from,to:b.from}),(ie>0||!y.inclusiveRight&&!ie)&&W.push({from:b.to,to:j.to}),o.splice.apply(o,W),S+=W.length-3}}return o}function wi(e){var n=e.markedSpans;if(n){for(var s=0;s<n.length;++s)n[s].marker.detachLine(e);e.markedSpans=null}}function _e(e,n){if(n){for(var s=0;s<n.length;++s)n[s].marker.attachLine(e);e.markedSpans=n}}function D(e){return e.inclusiveLeft?-1:0}function ne(e){return e.inclusiveRight?1:0}function we(e,n){var s=e.lines.length-n.lines.length;if(s!=0)return s;var i=e.find(),o=n.find(),h=He(i.from,o.from)||D(e)-D(n);if(h)return-h;var y=He(i.to,o.to)||ne(e)-ne(n);return y||n.id-e.id}function Ee(e,n){var s=Dn&&e.markedSpans,i;if(s)for(var o=void 0,h=0;h<s.length;++h)o=s[h],o.marker.collapsed&&(n?o.from:o.to)==null&&(!i||we(i,o.marker)<0)&&(i=o.marker);return i}function nt(e){return Ee(e,!0)}function ct(e){return Ee(e,!1)}function Tt(e,n){var s=Dn&&e.markedSpans,i;if(s)for(var o=0;o<s.length;++o){var h=s[o];h.marker.collapsed&&(h.from==null||h.from<n)&&(h.to==null||h.to>n)&&(!i||we(i,h.marker)<0)&&(i=h.marker)}return i}function cn(e,n,s,i,o){var h=Je(e,n),y=Dn&&h.markedSpans;if(y)for(var b=0;b<y.length;++b){var S=y[b];if(S.marker.collapsed){var j=S.marker.find(0),W=He(j.from,s)||D(S.marker)-D(o),G=He(j.to,i)||ne(S.marker)-ne(o);if(!(W>=0&&G<=0||W<=0&&G>=0)&&(W<=0&&(S.marker.inclusiveRight&&o.inclusiveLeft?He(j.to,s)>=0:He(j.to,s)>0)||W>=0&&(S.marker.inclusiveRight&&o.inclusiveLeft?He(j.from,i)<=0:He(j.from,i)<0)))return!0}}}function $t(e){for(var n;n=nt(e);)e=n.find(-1,!0).line;return e}function hr(e){for(var n;n=ct(e);)e=n.find(1,!0).line;return e}function Vn(e){for(var n,s;n=ct(e);)e=n.find(1,!0).line,(s||(s=[])).push(e);return s}function fr(e,n){var s=Je(e,n),i=$t(s);return s==i?n:E(i)}function dn(e,n){if(n>e.lastLine())return n;var s=Je(e,n),i;if(!Er(e,s))return n;for(;i=ct(s);)s=i.find(1,!0).line;return E(s)+1}function Er(e,n){var s=Dn&&n.markedSpans;if(s){for(var i=void 0,o=0;o<s.length;++o)if(i=s[o],!!i.marker.collapsed){if(i.from==null)return!0;if(!i.marker.widgetNode&&i.from==0&&i.marker.inclusiveLeft&&sl(e,n,i))return!0}}}function sl(e,n,s){if(s.to==null){var i=s.marker.find(1,!0);return sl(e,i.line,Ds(i.line.markedSpans,s.marker))}if(s.marker.inclusiveRight&&s.to==n.text.length)return!0;for(var o=void 0,h=0;h<n.markedSpans.length;++h)if(o=n.markedSpans[h],o.marker.collapsed&&!o.marker.widgetNode&&o.from==s.to&&(o.to==null||o.to!=s.from)&&(o.marker.inclusiveLeft||s.marker.inclusiveRight)&&sl(e,n,o))return!0}function Sn(e){e=$t(e);for(var n=0,s=e.parent,i=0;i<s.lines.length;++i){var o=s.lines[i];if(o==e)break;n+=o.height}for(var h=s.parent;h;s=h,h=s.parent)for(var y=0;y<h.children.length;++y){var b=h.children[y];if(b==s)break;n+=b.height}return n}function Ui(e){if(e.height==0)return 0;for(var n=e.text.length,s,i=e;s=nt(i);){var o=s.find(0,!0);i=o.from.line,n+=o.from.ch-o.to.ch}for(i=e;s=ct(i);){var h=s.find(0,!0);n-=i.text.length-h.from.ch,i=h.to.line,n+=i.text.length-h.to.ch}return n}function da(e){var n=e.display,s=e.doc;n.maxLine=Je(s,s.first),n.maxLineLength=Ui(n.maxLine),n.maxLineChanged=!0,s.iter(function(i){var o=Ui(i);o>n.maxLineLength&&(n.maxLineLength=o,n.maxLine=i)})}var ki=function(e,n,s){this.text=e,_e(this,n),this.height=s?s(this):1};ki.prototype.lineNo=function(){return E(this)},Nn(ki);function Gd(e,n,s,i){e.text=n,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),e.order!=null&&(e.order=null),wi(e),_e(e,s);var o=i?i(e):1;o!=e.height&&Yn(e,o)}function Jl(e){e.parent=null,wi(e)}var Xl={},pa={};function ha(e,n){if(!e||/^\s*$/.test(e))return null;var s=n.addModeClass?pa:Xl;return s[e]||(s[e]=e.replace(/\S+/g,"cm-$&"))}function Ql(e,n){var s=Q("span",null,null,N?"padding-right: .1px":null),i={pre:Q("pre",[s],"CodeMirror-line"),content:s,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};n.measure={};for(var o=0;o<=(n.rest?n.rest.length:0);o++){var h=o?n.rest[o-1]:n.line,y=void 0;i.pos=0,i.addToken=Vd,Or(e.display.measure)&&(y=bt(h,e.doc.direction))&&(i.addToken=Zl(i.addToken,y)),i.map=[];var b=n!=e.display.externalMeasured&&E(h);Xd(h,i,Hi(e,h,b)),h.styleClasses&&(h.styleClasses.bgClass&&(i.bgClass=M(h.styleClasses.bgClass,i.bgClass||"")),h.styleClasses.textClass&&(i.textClass=M(h.styleClasses.textClass,i.textClass||""))),i.map.length==0&&i.map.push(0,0,i.content.appendChild(Tr(e.display.measure))),o==0?(n.measure.map=i.map,n.measure.cache={}):((n.measure.maps||(n.measure.maps=[])).push(i.map),(n.measure.caches||(n.measure.caches=[])).push({}))}if(N){var S=i.content.lastChild;(/\bcm-tab\b/.test(S.className)||S.querySelector&&S.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return It(e,"renderLine",e,n.line,i.pre),i.pre.className&&(i.textClass=M(i.pre.className,i.textClass||"")),i}function Yd(e){var n=A("span","•","cm-invalidchar");return n.title="\\u"+e.charCodeAt(0).toString(16),n.setAttribute("aria-label",n.title),n}function Vd(e,n,s,i,o,h,y){if(n){var b=e.splitSpaces?Jd(n,e.trailingSpace):n,S=e.cm.state.specialChars,j=!1,W;if(!S.test(n))e.col+=n.length,W=document.createTextNode(b),e.map.push(e.pos,e.pos+n.length,W),w&&_<9&&(j=!0),e.pos+=n.length;else{W=document.createDocumentFragment();for(var G=0;;){S.lastIndex=G;var ie=S.exec(n),te=ie?ie.index-G:n.length-G;if(te){var ye=document.createTextNode(b.slice(G,G+te));w&&_<9?W.appendChild(A("span",[ye])):W.appendChild(ye),e.map.push(e.pos,e.pos+te,ye),e.col+=te,e.pos+=te}if(!ie)break;G+=te+1;var ke=void 0;if(ie[0]=="	"){var Pe=e.cm.options.tabSize,Ne=Pe-e.col%Pe;ke=W.appendChild(A("span",yt(Ne),"cm-tab")),ke.setAttribute("role","presentation"),ke.setAttribute("cm-text","	"),e.col+=Ne}else ie[0]=="\r"||ie[0]==`
`?(ke=W.appendChild(A("span",ie[0]=="\r"?"␍":"␤","cm-invalidchar")),ke.setAttribute("cm-text",ie[0]),e.col+=1):(ke=e.cm.options.specialCharPlaceholder(ie[0]),ke.setAttribute("cm-text",ie[0]),w&&_<9?W.appendChild(A("span",[ke])):W.appendChild(ke),e.col+=1);e.map.push(e.pos,e.pos+1,ke),e.pos++}}if(e.trailingSpace=b.charCodeAt(n.length-1)==32,s||i||o||j||h||y){var Fe=s||"";i&&(Fe+=i),o&&(Fe+=o);var Me=A("span",[W],Fe,h);if(y)for(var Ge in y)y.hasOwnProperty(Ge)&&Ge!="style"&&Ge!="class"&&Me.setAttribute(Ge,y[Ge]);return e.content.appendChild(Me)}e.content.appendChild(W)}}function Jd(e,n){if(e.length>1&&!/  /.test(e))return e;for(var s=n,i="",o=0;o<e.length;o++){var h=e.charAt(o);h==" "&&s&&(o==e.length-1||e.charCodeAt(o+1)==32)&&(h=" "),i+=h,s=h==" "}return i}function Zl(e,n){return function(s,i,o,h,y,b,S){o=o?o+" cm-force-border":"cm-force-border";for(var j=s.pos,W=j+i.length;;){for(var G=void 0,ie=0;ie<n.length&&(G=n[ie],!(G.to>j&&G.from<=j));ie++);if(G.to>=W)return e(s,i,o,h,y,b,S);e(s,i.slice(0,G.to-j),o,h,null,b,S),h=null,i=i.slice(G.to-j),j=G.to}}}function gc(e,n,s,i){var o=!i&&s.widgetNode;o&&e.map.push(e.pos,e.pos+n,o),!i&&e.cm.display.input.needsContentAttribute&&(o||(o=e.content.appendChild(document.createElement("span"))),o.setAttribute("cm-marker",s.id)),o&&(e.cm.display.input.setUneditable(o),e.content.appendChild(o)),e.pos+=n,e.trailingSpace=!1}function Xd(e,n,s){var i=e.markedSpans,o=e.text,h=0;if(!i){for(var y=1;y<s.length;y+=2)n.addToken(n,o.slice(h,h=s[y]),ha(s[y+1],n.cm.options));return}for(var b=o.length,S=0,j=1,W="",G,ie,te=0,ye,ke,Pe,Ne,Fe;;){if(te==S){ye=ke=Pe=ie="",Fe=null,Ne=null,te=1/0;for(var Me=[],Ge=void 0,at=0;at<i.length;++at){var Ve=i[at],St=Ve.marker;if(St.type=="bookmark"&&Ve.from==S&&St.widgetNode)Me.push(St);else if(Ve.from<=S&&(Ve.to==null||Ve.to>S||St.collapsed&&Ve.to==S&&Ve.from==S)){if(Ve.to!=null&&Ve.to!=S&&te>Ve.to&&(te=Ve.to,ke=""),St.className&&(ye+=" "+St.className),St.css&&(ie=(ie?ie+";":"")+St.css),St.startStyle&&Ve.from==S&&(Pe+=" "+St.startStyle),St.endStyle&&Ve.to==te&&(Ge||(Ge=[])).push(St.endStyle,Ve.to),St.title&&((Fe||(Fe={})).title=St.title),St.attributes)for(var Et in St.attributes)(Fe||(Fe={}))[Et]=St.attributes[Et];St.collapsed&&(!Ne||we(Ne.marker,St)<0)&&(Ne=Ve)}else Ve.from>S&&te>Ve.from&&(te=Ve.from)}if(Ge)for(var Bn=0;Bn<Ge.length;Bn+=2)Ge[Bn+1]==te&&(ke+=" "+Ge[Bn]);if(!Ne||Ne.from==S)for(var sn=0;sn<Me.length;++sn)gc(n,0,Me[sn]);if(Ne&&(Ne.from||0)==S){if(gc(n,(Ne.to==null?b+1:Ne.to)-S,Ne.marker,Ne.from==null),Ne.to==null)return;Ne.to==S&&(Ne=!1)}}if(S>=b)break;for(var xr=Math.min(b,te);;){if(W){var lr=S+W.length;if(!Ne){var yn=lr>xr?W.slice(0,xr-S):W;n.addToken(n,yn,G?G+ye:ye,Pe,S+yn.length==te?ke:"",ie,Fe)}if(lr>=xr){W=W.slice(xr-S),S=xr;break}S=lr,Pe=""}W=o.slice(h,h=s[j++]),G=ha(s[j++],n.cm.options)}}}function yc(e,n,s){this.line=n,this.rest=Vn(n),this.size=this.rest?E(Qe(this.rest))-s+1:1,this.node=this.text=null,this.hidden=Er(e,n)}function ol(e,n,s){for(var i=[],o,h=n;h<s;h=o){var y=new yc(e.doc,Je(e.doc,h),h);o=h+y.size,i.push(y)}return i}var bo=null;function vc(e){bo?bo.ops.push(e):e.ownsGroup=bo={ops:[e],delayedCallbacks:[]}}function Qd(e){var n=e.delayedCallbacks,s=0;do{for(;s<n.length;s++)n[s].call(null);for(var i=0;i<e.ops.length;i++){var o=e.ops[i];if(o.cursorActivityHandlers)for(;o.cursorActivityCalled<o.cursorActivityHandlers.length;)o.cursorActivityHandlers[o.cursorActivityCalled++].call(null,o.cm)}}while(s<n.length)}function Zd(e,n){var s=e.ownsGroup;if(s)try{Qd(s)}finally{bo=null,n(s)}}var fa=null;function Mn(e,n){var s=Cr(e,n);if(s.length){var i=Array.prototype.slice.call(arguments,2),o;bo?o=bo.delayedCallbacks:fa?o=fa:(o=fa=[],setTimeout(eu,0));for(var h=function(b){o.push(function(){return s[b].apply(null,i)})},y=0;y<s.length;++y)h(y)}}function eu(){var e=fa;fa=null;for(var n=0;n<e.length;++n)e[n]()}function xc(e,n,s,i){for(var o=0;o<n.changes.length;o++){var h=n.changes[o];h=="text"?tp(e,n):h=="gutter"?bc(e,n,s,i):h=="class"?nu(e,n):h=="widget"&&np(e,n,i)}n.changes=null}function ma(e){return e.node==e.text&&(e.node=A("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),w&&_<8&&(e.node.style.zIndex=2)),e.node}function ep(e,n){var s=n.bgClass?n.bgClass+" "+(n.line.bgClass||""):n.line.bgClass;if(s&&(s+=" CodeMirror-linebackground"),n.background)s?n.background.className=s:(n.background.parentNode.removeChild(n.background),n.background=null);else if(s){var i=ma(n);n.background=i.insertBefore(A("div",null,s),i.firstChild),e.display.input.setUneditable(n.background)}}function tu(e,n){var s=e.display.externalMeasured;return s&&s.line==n.line?(e.display.externalMeasured=null,n.measure=s.measure,s.built):Ql(e,n)}function tp(e,n){var s=n.text.className,i=tu(e,n);n.text==n.node&&(n.node=i.pre),n.text.parentNode.replaceChild(i.pre,n.text),n.text=i.pre,i.bgClass!=n.bgClass||i.textClass!=n.textClass?(n.bgClass=i.bgClass,n.textClass=i.textClass,nu(e,n)):s&&(n.text.className=s)}function nu(e,n){ep(e,n),n.line.wrapClass?ma(n).className=n.line.wrapClass:n.node!=n.text&&(n.node.className="");var s=n.textClass?n.textClass+" "+(n.line.textClass||""):n.line.textClass;n.text.className=s||""}function bc(e,n,s,i){if(n.gutter&&(n.node.removeChild(n.gutter),n.gutter=null),n.gutterBackground&&(n.node.removeChild(n.gutterBackground),n.gutterBackground=null),n.line.gutterClass){var o=ma(n);n.gutterBackground=A("div",null,"CodeMirror-gutter-background "+n.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(n.gutterBackground),o.insertBefore(n.gutterBackground,n.text)}var h=n.line.gutterMarkers;if(e.options.lineNumbers||h){var y=ma(n),b=n.gutter=A("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(b.setAttribute("aria-hidden","true"),e.display.input.setUneditable(b),y.insertBefore(b,n.text),n.line.gutterClass&&(b.className+=" "+n.line.gutterClass),e.options.lineNumbers&&(!h||!h["CodeMirror-linenumbers"])&&(n.lineNumber=b.appendChild(A("div",je(e.options,s),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),h)for(var S=0;S<e.display.gutterSpecs.length;++S){var j=e.display.gutterSpecs[S].className,W=h.hasOwnProperty(j)&&h[j];W&&b.appendChild(A("div",[W],"CodeMirror-gutter-elt","left: "+i.gutterLeft[j]+"px; width: "+i.gutterWidth[j]+"px"))}}}function np(e,n,s){n.alignable&&(n.alignable=null);for(var i=se("CodeMirror-linewidget"),o=n.node.firstChild,h=void 0;o;o=h)h=o.nextSibling,i.test(o.className)&&n.node.removeChild(o);wc(e,n,s)}function rp(e,n,s,i){var o=tu(e,n);return n.text=n.node=o.pre,o.bgClass&&(n.bgClass=o.bgClass),o.textClass&&(n.textClass=o.textClass),nu(e,n),bc(e,n,s,i),wc(e,n,i),n.node}function wc(e,n,s){if(kc(e,n.line,n,s,!0),n.rest)for(var i=0;i<n.rest.length;i++)kc(e,n.rest[i],n,s,!1)}function kc(e,n,s,i,o){if(n.widgets)for(var h=ma(s),y=0,b=n.widgets;y<b.length;++y){var S=b[y],j=A("div",[S.node],"CodeMirror-linewidget"+(S.className?" "+S.className:""));S.handleMouseEvents||j.setAttribute("cm-ignore-events","true"),ru(S,j,s,i),e.display.input.setUneditable(j),o&&S.above?h.insertBefore(j,s.gutter||s.text):h.appendChild(j),Mn(S,"redraw")}}function ru(e,n,s,i){if(e.noHScroll){(s.alignable||(s.alignable=[])).push(n);var o=i.wrapperWidth;n.style.left=i.fixedPos+"px",e.coverGutter||(o-=i.gutterTotalWidth,n.style.paddingLeft=i.gutterTotalWidth+"px"),n.style.width=o+"px"}e.coverGutter&&(n.style.zIndex=5,n.style.position="relative",e.noHScroll||(n.style.marginLeft=-i.gutterTotalWidth+"px"))}function qi(e){if(e.height!=null)return e.height;var n=e.doc.cm;if(!n)return 0;if(!T(document.body,e.node)){var s="position: relative;";e.coverGutter&&(s+="margin-left: -"+n.display.gutters.offsetWidth+"px;"),e.noHScroll&&(s+="width: "+n.display.wrapper.clientWidth+"px;"),fe(n.display.measure,A("div",[e.node],null,s))}return e.height=e.node.parentNode.offsetHeight}function $i(e,n){for(var s=gi(n);s!=e.wrapper;s=s.parentNode)if(!s||s.nodeType==1&&s.getAttribute("cm-ignore-events")=="true"||s.parentNode==e.sizer&&s!=e.mover)return!0}function ga(e){return e.lineSpace.offsetTop}function al(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function iu(e){if(e.cachedPaddingH)return e.cachedPaddingH;var n=fe(e.measure,A("pre","x","CodeMirror-line-like")),s=window.getComputedStyle?window.getComputedStyle(n):n.currentStyle,i={left:parseInt(s.paddingLeft),right:parseInt(s.paddingRight)};return!isNaN(i.left)&&!isNaN(i.right)&&(e.cachedPaddingH=i),i}function ai(e){return Ft-e.display.nativeBarWidth}function hs(e){return e.display.scroller.clientWidth-ai(e)-e.display.barWidth}function fs(e){return e.display.scroller.clientHeight-ai(e)-e.display.barHeight}function ip(e,n,s){var i=e.options.lineWrapping,o=i&&hs(e);if(!n.measure.heights||i&&n.measure.width!=o){var h=n.measure.heights=[];if(i){n.measure.width=o;for(var y=n.text.firstChild.getClientRects(),b=0;b<y.length-1;b++){var S=y[b],j=y[b+1];Math.abs(S.bottom-j.bottom)>2&&h.push((S.bottom+j.top)/2-s.top)}}h.push(s.bottom-s.top)}}function Sc(e,n,s){if(e.line==n)return{map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var i=0;i<e.rest.length;i++)if(e.rest[i]==n)return{map:e.measure.maps[i],cache:e.measure.caches[i]};for(var o=0;o<e.rest.length;o++)if(E(e.rest[o])>s)return{map:e.measure.maps[o],cache:e.measure.caches[o],before:!0}}}function sp(e,n){n=$t(n);var s=E(n),i=e.display.externalMeasured=new yc(e.doc,n,s);i.lineN=s;var o=i.built=Ql(e,i);return i.text=o.pre,fe(e.display.lineMeasure,o.pre),i}function su(e,n,s,i){return Lr(e,Si(e,n),s,i)}function ll(e,n){if(n>=e.display.viewFrom&&n<e.display.viewTo)return e.display.view[Ci(e,n)];var s=e.display.externalMeasured;if(s&&n>=s.lineN&&n<s.lineN+s.size)return s}function Si(e,n){var s=E(n),i=ll(e,s);i&&!i.text?i=null:i&&i.changes&&(xc(e,i,s,fl(e)),e.curOp.forceUpdate=!0),i||(i=sp(e,n));var o=Sc(i,n,s);return{line:n,view:i,rect:null,map:o.map,cache:o.cache,before:o.before,hasHeights:!1}}function Lr(e,n,s,i,o){n.before&&(s=-1);var h=s+(i||""),y;return n.cache.hasOwnProperty(h)?y=n.cache[h]:(n.rect||(n.rect=n.view.text.getBoundingClientRect()),n.hasHeights||(ip(e,n.view,n.rect),n.hasHeights=!0),y=Cc(e,n,s,i),y.bogus||(n.cache[h]=y)),{left:y.left,right:y.right,top:o?y.rtop:y.top,bottom:o?y.rbottom:y.bottom}}var _c={left:0,right:0,top:0,bottom:0};function ya(e,n,s){for(var i,o,h,y,b,S,j=0;j<e.length;j+=3)if(b=e[j],S=e[j+1],n<b?(o=0,h=1,y="left"):n<S?(o=n-b,h=o+1):(j==e.length-3||n==S&&e[j+3]>n)&&(h=S-b,o=h-1,n>=S&&(y="right")),o!=null){if(i=e[j+2],b==S&&s==(i.insertLeft?"left":"right")&&(y=s),s=="left"&&o==0)for(;j&&e[j-2]==e[j-3]&&e[j-1].insertLeft;)i=e[(j-=3)+2],y="left";if(s=="right"&&o==S-b)for(;j<e.length-3&&e[j+3]==e[j+4]&&!e[j+5].insertLeft;)i=e[(j+=3)+2],y="right";break}return{node:i,start:o,end:h,collapse:y,coverStart:b,coverEnd:S}}function op(e,n){var s=_c;if(n=="left")for(var i=0;i<e.length&&(s=e[i]).left==s.right;i++);else for(var o=e.length-1;o>=0&&(s=e[o]).left==s.right;o--);return s}function Cc(e,n,s,i){var o=ya(n.map,s,i),h=o.node,y=o.start,b=o.end,S=o.collapse,j;if(h.nodeType==3){for(var W=0;W<4;W++){for(;y&&pt(n.line.text.charAt(o.coverStart+y));)--y;for(;o.coverStart+b<o.coverEnd&&pt(n.line.text.charAt(o.coverStart+b));)++b;if(w&&_<9&&y==0&&b==o.coverEnd-o.coverStart?j=h.parentNode.getBoundingClientRect():j=op(q(h,y,b).getClientRects(),i),j.left||j.right||y==0)break;b=y,y=y-1,S="right"}w&&_<11&&(j=ou(e.display.measure,j))}else{y>0&&(S=i="right");var G;e.options.lineWrapping&&(G=h.getClientRects()).length>1?j=G[i=="right"?G.length-1:0]:j=h.getBoundingClientRect()}if(w&&_<9&&!y&&(!j||!j.left&&!j.right)){var ie=h.parentNode.getClientRects()[0];ie?j={left:ie.left,right:ie.left+ms(e.display),top:ie.top,bottom:ie.bottom}:j=_c}for(var te=j.top-n.rect.top,ye=j.bottom-n.rect.top,ke=(te+ye)/2,Pe=n.view.measure.heights,Ne=0;Ne<Pe.length-1&&!(ke<Pe[Ne]);Ne++);var Fe=Ne?Pe[Ne-1]:0,Me=Pe[Ne],Ge={left:(S=="right"?j.right:j.left)-n.rect.left,right:(S=="left"?j.left:j.right)-n.rect.left,top:Fe,bottom:Me};return!j.left&&!j.right&&(Ge.bogus=!0),e.options.singleCursorHeightPerLine||(Ge.rtop=te,Ge.rbottom=ye),Ge}function ou(e,n){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!ls(e))return n;var s=screen.logicalXDPI/screen.deviceXDPI,i=screen.logicalYDPI/screen.deviceYDPI;return{left:n.left*s,right:n.right*s,top:n.top*i,bottom:n.bottom*i}}function ul(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var n=0;n<e.rest.length;n++)e.measure.caches[n]={}}function au(e){e.display.externalMeasure=null,le(e.display.lineMeasure);for(var n=0;n<e.display.view.length;n++)ul(e.display.view[n])}function wo(e){au(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function lu(e){return L&&B?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function Tc(e){return L&&B?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function uu(e){var n=$t(e),s=n.widgets,i=0;if(s)for(var o=0;o<s.length;++o)s[o].above&&(i+=qi(s[o]));return i}function cl(e,n,s,i,o){if(!o){var h=uu(n);s.top+=h,s.bottom+=h}if(i=="line")return s;i||(i="local");var y=Sn(n);if(i=="local"?y+=ga(e.display):y-=e.display.viewOffset,i=="page"||i=="window"){var b=e.display.lineSpace.getBoundingClientRect();y+=b.top+(i=="window"?0:Tc(Ce(e)));var S=b.left+(i=="window"?0:lu(Ce(e)));s.left+=S,s.right+=S}return s.top+=y,s.bottom+=y,s}function jc(e,n,s){if(s=="div")return n;var i=n.left,o=n.top;if(s=="page")i-=lu(Ce(e)),o-=Tc(Ce(e));else if(s=="local"||!s){var h=e.display.sizer.getBoundingClientRect();i+=h.left,o+=h.top}var y=e.display.lineSpace.getBoundingClientRect();return{left:i-y.left,top:o-y.top}}function dl(e,n,s,i,o){return i||(i=Je(e.doc,n.line)),cl(e,i,su(e,i,n.ch,o),s)}function _n(e,n,s,i,o,h){i=i||Je(e.doc,n.line),o||(o=Si(e,i));function y(ye,ke){var Pe=Lr(e,o,ye,ke?"right":"left",h);return ke?Pe.left=Pe.right:Pe.right=Pe.left,cl(e,i,Pe,s)}var b=bt(i,e.doc.direction),S=n.ch,j=n.sticky;if(S>=i.text.length?(S=i.text.length,j="before"):S<=0&&(S=0,j="after"),!b)return y(j=="before"?S-1:S,j=="before");function W(ye,ke,Pe){var Ne=b[ke],Fe=Ne.level==1;return y(Pe?ye-1:ye,Fe!=Pe)}var G=Ur(b,S,j),ie=Ir,te=W(S,G,j=="before");return ie!=null&&(te.other=W(S,ie,j!="before")),te}function ko(e,n){var s=0;n=gt(e.doc,n),e.options.lineWrapping||(s=ms(e.display)*n.ch);var i=Je(e.doc,n.line),o=Sn(i)+ga(e.display);return{left:s,right:s,top:o,bottom:o+i.height}}function pl(e,n,s,i,o){var h=pe(e,n,s);return h.xRel=o,i&&(h.outside=i),h}function hl(e,n,s){var i=e.doc;if(s+=e.display.viewOffset,s<0)return pl(i.first,0,null,-1,-1);var o=K(i,s),h=i.first+i.size-1;if(o>h)return pl(i.first+i.size-1,Je(i,h).text.length,null,1,1);n<0&&(n=0);for(var y=Je(i,o);;){var b=ap(e,y,o,n,s),S=Tt(y,b.ch+(b.xRel>0||b.outside>0?1:0));if(!S)return b;var j=S.find(1);if(j.line==o)return j;y=Je(i,o=j.line)}}function cu(e,n,s,i){i-=uu(n);var o=n.text.length,h=nr(function(y){return Lr(e,s,y-1).bottom<=i},o,0);return o=nr(function(y){return Lr(e,s,y).top>i},h,o),{begin:h,end:o}}function du(e,n,s,i){s||(s=Si(e,n));var o=cl(e,n,Lr(e,s,i),"line").top;return cu(e,n,s,o)}function va(e,n,s,i){return e.bottom<=s?!1:e.top>s?!0:(i?e.left:e.right)>n}function ap(e,n,s,i,o){o-=Sn(n);var h=Si(e,n),y=uu(n),b=0,S=n.text.length,j=!0,W=bt(n,e.doc.direction);if(W){var G=(e.options.lineWrapping?So:lp)(e,n,s,h,W,i,o);j=G.level!=1,b=j?G.from:G.to-1,S=j?G.to:G.from-1}var ie=null,te=null,ye=nr(function(at){var Ve=Lr(e,h,at);return Ve.top+=y,Ve.bottom+=y,va(Ve,i,o,!1)?(Ve.top<=o&&Ve.left<=i&&(ie=at,te=Ve),!0):!1},b,S),ke,Pe,Ne=!1;if(te){var Fe=i-te.left<te.right-i,Me=Fe==j;ye=ie+(Me?0:1),Pe=Me?"after":"before",ke=Fe?te.left:te.right}else{!j&&(ye==S||ye==b)&&ye++,Pe=ye==0?"after":ye==n.text.length?"before":Lr(e,h,ye-(j?1:0)).bottom+y<=o==j?"after":"before";var Ge=_n(e,pe(s,ye,Pe),"line",n,h);ke=Ge.left,Ne=o<Ge.top?-1:o>=Ge.bottom?1:0}return ye=Xt(n.text,ye,1),pl(s,ye,Pe,Ne,i-ke)}function lp(e,n,s,i,o,h,y){var b=nr(function(G){var ie=o[G],te=ie.level!=1;return va(_n(e,pe(s,te?ie.to:ie.from,te?"before":"after"),"line",n,i),h,y,!0)},0,o.length-1),S=o[b];if(b>0){var j=S.level!=1,W=_n(e,pe(s,j?S.from:S.to,j?"after":"before"),"line",n,i);va(W,h,y,!0)&&W.top>y&&(S=o[b-1])}return S}function So(e,n,s,i,o,h,y){var b=cu(e,n,i,y),S=b.begin,j=b.end;/\s/.test(n.text.charAt(j-1))&&j--;for(var W=null,G=null,ie=0;ie<o.length;ie++){var te=o[ie];if(!(te.from>=j||te.to<=S)){var ye=te.level!=1,ke=Lr(e,i,ye?Math.min(j,te.to)-1:Math.max(S,te.from)).right,Pe=ke<h?h-ke+1e9:ke-h;(!W||G>Pe)&&(W=te,G=Pe)}}return W||(W=o[o.length-1]),W.from<S&&(W={from:S,to:W.to,level:W.level}),W.to>j&&(W={from:W.from,to:j,level:W.level}),W}var Ki;function _i(e){if(e.cachedTextHeight!=null)return e.cachedTextHeight;if(Ki==null){Ki=A("pre",null,"CodeMirror-line-like");for(var n=0;n<49;++n)Ki.appendChild(document.createTextNode("x")),Ki.appendChild(A("br"));Ki.appendChild(document.createTextNode("x"))}fe(e.measure,Ki);var s=Ki.offsetHeight/50;return s>3&&(e.cachedTextHeight=s),le(e.measure),s||1}function ms(e){if(e.cachedCharWidth!=null)return e.cachedCharWidth;var n=A("span","xxxxxxxxxx"),s=A("pre",[n],"CodeMirror-line-like");fe(e.measure,s);var i=n.getBoundingClientRect(),o=(i.right-i.left)/10;return o>2&&(e.cachedCharWidth=o),o||10}function fl(e){for(var n=e.display,s={},i={},o=n.gutters.clientLeft,h=n.gutters.firstChild,y=0;h;h=h.nextSibling,++y){var b=e.display.gutterSpecs[y].className;s[b]=h.offsetLeft+h.clientLeft+o,i[b]=h.clientWidth}return{fixedPos:_o(n),gutterTotalWidth:n.gutters.offsetWidth,gutterLeft:s,gutterWidth:i,wrapperWidth:n.wrapper.clientWidth}}function _o(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Fs(e){var n=_i(e.display),s=e.options.lineWrapping,i=s&&Math.max(5,e.display.scroller.clientWidth/ms(e.display)-3);return function(o){if(Er(e.doc,o))return 0;var h=0;if(o.widgets)for(var y=0;y<o.widgets.length;y++)o.widgets[y].height&&(h+=o.widgets[y].height);return s?h+(Math.ceil(o.text.length/i)||1)*n:h+n}}function xa(e){var n=e.doc,s=Fs(e);n.iter(function(i){var o=s(i);o!=i.height&&Yn(i,o)})}function gs(e,n,s,i){var o=e.display;if(!s&&gi(n).getAttribute("cm-not-content")=="true")return null;var h,y,b=o.lineSpace.getBoundingClientRect();try{h=n.clientX-b.left,y=n.clientY-b.top}catch{return null}var S=hl(e,h,y),j;if(i&&S.xRel>0&&(j=Je(e.doc,S.line).text).length==S.ch){var W=$e(j,j.length,e.options.tabSize)-j.length;S=pe(S.line,Math.max(0,Math.round((h-iu(e.display).left)/ms(e.display))-W))}return S}function Ci(e,n){if(n>=e.display.viewTo||(n-=e.display.viewFrom,n<0))return null;for(var s=e.display.view,i=0;i<s.length;i++)if(n-=s[i].size,n<0)return i}function sr(e,n,s,i){n==null&&(n=e.doc.first),s==null&&(s=e.doc.first+e.doc.size),i||(i=0);var o=e.display;if(i&&s<o.viewTo&&(o.updateLineNumbers==null||o.updateLineNumbers>n)&&(o.updateLineNumbers=n),e.curOp.viewChanged=!0,n>=o.viewTo)Dn&&fr(e.doc,n)<o.viewTo&&Yi(e);else if(s<=o.viewFrom)Dn&&dn(e.doc,s+i)>o.viewFrom?Yi(e):(o.viewFrom+=i,o.viewTo+=i);else if(n<=o.viewFrom&&s>=o.viewTo)Yi(e);else if(n<=o.viewFrom){var h=ba(e,s,s+i,1);h?(o.view=o.view.slice(h.index),o.viewFrom=h.lineN,o.viewTo+=i):Yi(e)}else if(s>=o.viewTo){var y=ba(e,n,n,-1);y?(o.view=o.view.slice(0,y.index),o.viewTo=y.lineN):Yi(e)}else{var b=ba(e,n,n,-1),S=ba(e,s,s+i,1);b&&S?(o.view=o.view.slice(0,b.index).concat(ol(e,b.lineN,S.lineN)).concat(o.view.slice(S.index)),o.viewTo+=i):Yi(e)}var j=o.externalMeasured;j&&(s<j.lineN?j.lineN+=i:n<j.lineN+j.size&&(o.externalMeasured=null))}function Gi(e,n,s){e.curOp.viewChanged=!0;var i=e.display,o=e.display.externalMeasured;if(o&&n>=o.lineN&&n<o.lineN+o.size&&(i.externalMeasured=null),!(n<i.viewFrom||n>=i.viewTo)){var h=i.view[Ci(e,n)];if(h.node!=null){var y=h.changes||(h.changes=[]);Ke(y,s)==-1&&y.push(s)}}}function Yi(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function ba(e,n,s,i){var o=Ci(e,n),h,y=e.display.view;if(!Dn||s==e.doc.first+e.doc.size)return{index:o,lineN:s};for(var b=e.display.viewFrom,S=0;S<o;S++)b+=y[S].size;if(b!=n){if(i>0){if(o==y.length-1)return null;h=b+y[o].size-n,o++}else h=b-n;n+=h,s+=h}for(;fr(e.doc,s)!=s;){if(o==(i<0?0:y.length-1))return null;s+=i*y[o-(i<0?1:0)].size,o+=i}return{index:o,lineN:s}}function Nc(e,n,s){var i=e.display,o=i.view;o.length==0||n>=i.viewTo||s<=i.viewFrom?(i.view=ol(e,n,s),i.viewFrom=n):(i.viewFrom>n?i.view=ol(e,n,i.viewFrom).concat(i.view):i.viewFrom<n&&(i.view=i.view.slice(Ci(e,n))),i.viewFrom=n,i.viewTo<s?i.view=i.view.concat(ol(e,i.viewTo,s)):i.viewTo>s&&(i.view=i.view.slice(0,Ci(e,s)))),i.viewTo=s}function pu(e){for(var n=e.display.view,s=0,i=0;i<n.length;i++){var o=n[i];!o.hidden&&(!o.node||o.changes)&&++s}return s}function Yr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function ml(e,n){n===void 0&&(n=!0);var s=e.doc,i={},o=i.cursors=document.createDocumentFragment(),h=i.selection=document.createDocumentFragment(),y=e.options.$customCursor;y&&(n=!0);for(var b=0;b<s.sel.ranges.length;b++)if(!(!n&&b==s.sel.primIndex)){var S=s.sel.ranges[b];if(!(S.from().line>=e.display.viewTo||S.to().line<e.display.viewFrom)){var j=S.empty();if(y){var W=y(e,S);W&&wa(e,W,o)}else(j||e.options.showCursorWhenSelecting)&&wa(e,S.head,o);j||up(e,S,h)}}return i}function wa(e,n,s){var i=_n(e,n,"div",null,null,!e.options.singleCursorHeightPerLine),o=s.appendChild(A("div"," ","CodeMirror-cursor"));if(o.style.left=i.left+"px",o.style.top=i.top+"px",o.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var h=dl(e,n,"div",null,null),y=h.right-h.left;o.style.width=(y>0?y:e.defaultCharWidth())+"px"}if(i.other){var b=s.appendChild(A("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));b.style.display="",b.style.left=i.other.left+"px",b.style.top=i.other.top+"px",b.style.height=(i.other.bottom-i.other.top)*.85+"px"}}function gl(e,n){return e.top-n.top||e.left-n.left}function up(e,n,s){var i=e.display,o=e.doc,h=document.createDocumentFragment(),y=iu(e.display),b=y.left,S=Math.max(i.sizerWidth,hs(e)-i.sizer.offsetLeft)-y.right,j=o.direction=="ltr";function W(Me,Ge,at,Ve){Ge<0&&(Ge=0),Ge=Math.round(Ge),Ve=Math.round(Ve),h.appendChild(A("div",null,"CodeMirror-selected","position: absolute; left: "+Me+`px;
                             top: `+Ge+"px; width: "+(at??S-Me)+`px;
                             height: `+(Ve-Ge)+"px"))}function G(Me,Ge,at){var Ve=Je(o,Me),St=Ve.text.length,Et,Bn;function sn(yn,br){return dl(e,pe(Me,yn),"div",Ve,br)}function xr(yn,br,Tn){var vn=du(e,Ve,null,yn),Mt=br=="ltr"==(Tn=="after")?"left":"right",dt=Tn=="after"?vn.begin:vn.end-(/\s/.test(Ve.text.charAt(vn.end-1))?2:1);return sn(dt,Mt)[Mt]}var lr=bt(Ve,o.direction);return _r(lr,Ge||0,at??St,function(yn,br,Tn,vn){var Mt=Tn=="ltr",dt=sn(yn,Mt?"left":"right"),zt=sn(br-1,Mt?"right":"left"),on=Ge==null&&yn==0,un=at==null&&br==St,Ut=vn==0,wr=!lr||vn==lr.length-1;if(zt.top-dt.top<=3){var Lt=(j?on:un)&&Ut,lo=(j?un:on)&&wr,kr=Lt?b:(Mt?dt:zt).left,Ii=lo?S:(Mt?zt:dt).right;W(kr,dt.top,Ii-kr,dt.bottom)}else{var ts,An,Un,$a;Mt?(ts=j&&on&&Ut?b:dt.left,An=j?S:xr(yn,Tn,"before"),Un=j?b:xr(br,Tn,"after"),$a=j&&un&&wr?S:zt.right):(ts=j?xr(yn,Tn,"before"):b,An=!j&&on&&Ut?S:dt.right,Un=!j&&un&&wr?b:zt.left,$a=j?xr(br,Tn,"after"):S),W(ts,dt.top,An-ts,dt.bottom),dt.bottom<zt.top&&W(b,dt.bottom,null,zt.top),W(Un,zt.top,$a-Un,zt.bottom)}(!Et||gl(dt,Et)<0)&&(Et=dt),gl(zt,Et)<0&&(Et=zt),(!Bn||gl(dt,Bn)<0)&&(Bn=dt),gl(zt,Bn)<0&&(Bn=zt)}),{start:Et,end:Bn}}var ie=n.from(),te=n.to();if(ie.line==te.line)G(ie.line,ie.ch,te.ch);else{var ye=Je(o,ie.line),ke=Je(o,te.line),Pe=$t(ye)==$t(ke),Ne=G(ie.line,ie.ch,Pe?ye.text.length+1:null).end,Fe=G(te.line,Pe?0:null,te.ch).start;Pe&&(Ne.top<Fe.top-2?(W(Ne.right,Ne.top,null,Ne.bottom),W(b,Fe.top,Fe.left,Fe.bottom)):W(Ne.right,Ne.top,Fe.left-Ne.right,Ne.bottom)),Ne.bottom<Fe.top&&W(b,Ne.bottom,null,Fe.top)}s.appendChild(h)}function Ws(e){if(e.state.focused){var n=e.display;clearInterval(n.blinker);var s=!0;n.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?n.blinker=setInterval(function(){e.hasFocus()||Wt(e),n.cursorDiv.style.visibility=(s=!s)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(n.cursorDiv.style.visibility="hidden")}}function Ec(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||vl(e))}function yl(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Wt(e))},100)}function vl(e,n){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),e.options.readOnly!="nocursor"&&(e.state.focused||(It(e,"focus",e,n),e.state.focused=!0,$(e.display.wrapper,"CodeMirror-focused"),!e.curOp&&e.display.selForContextMenu!=e.doc.sel&&(e.display.input.reset(),N&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Ws(e))}function Wt(e,n){e.state.delayingBlurEvent||(e.state.focused&&(It(e,"blur",e,n),e.state.focused=!1,Ie(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Co(e){for(var n=e.display,s=n.lineDiv.offsetTop,i=Math.max(0,n.scroller.getBoundingClientRect().top),o=n.lineDiv.getBoundingClientRect().top,h=0,y=0;y<n.view.length;y++){var b=n.view[y],S=e.options.lineWrapping,j=void 0,W=0;if(!b.hidden){if(o+=b.line.height,w&&_<8){var G=b.node.offsetTop+b.node.offsetHeight;j=G-s,s=G}else{var ie=b.node.getBoundingClientRect();j=ie.bottom-ie.top,!S&&b.text.firstChild&&(W=b.text.firstChild.getBoundingClientRect().right-ie.left-1)}var te=b.line.height-j;if((te>.005||te<-.005)&&(o<i&&(h-=te),Yn(b.line,j),ka(b.line),b.rest))for(var ye=0;ye<b.rest.length;ye++)ka(b.rest[ye]);if(W>e.display.sizerWidth){var ke=Math.ceil(W/ms(e.display));ke>e.display.maxLineLength&&(e.display.maxLineLength=ke,e.display.maxLine=b.line,e.display.maxLineChanged=!0)}}}Math.abs(h)>2&&(n.scroller.scrollTop+=h)}function ka(e){if(e.widgets)for(var n=0;n<e.widgets.length;++n){var s=e.widgets[n],i=s.node.parentNode;i&&(s.height=i.offsetHeight)}}function ys(e,n,s){var i=s&&s.top!=null?Math.max(0,s.top):e.scroller.scrollTop;i=Math.floor(i-ga(e));var o=s&&s.bottom!=null?s.bottom:i+e.wrapper.clientHeight,h=K(n,i),y=K(n,o);if(s&&s.ensure){var b=s.ensure.from.line,S=s.ensure.to.line;b<h?(h=b,y=K(n,Sn(Je(n,b))+e.wrapper.clientHeight)):Math.min(S,n.lastLine())>=y&&(h=K(n,Sn(Je(n,S))-e.wrapper.clientHeight),y=S)}return{from:h,to:Math.max(y,h+1)}}function Lc(e,n){if(!qt(e,"scrollCursorIntoView")){var s=e.display,i=s.sizer.getBoundingClientRect(),o=null,h=s.wrapper.ownerDocument;if(n.top+i.top<0?o=!0:n.bottom+i.top>(h.defaultView.innerHeight||h.documentElement.clientHeight)&&(o=!1),o!=null&&!I){var y=A("div","​",null,`position: absolute;
                         top: `+(n.top-s.viewOffset-ga(e.display))+`px;
                         height: `+(n.bottom-n.top+ai(e)+s.barHeight)+`px;
                         left: `+n.left+"px; width: "+Math.max(2,n.right-n.left)+"px;");e.display.lineSpace.appendChild(y),y.scrollIntoView(o),e.display.lineSpace.removeChild(y)}}}function hu(e,n,s,i){i==null&&(i=0);var o;!e.options.lineWrapping&&n==s&&(s=n.sticky=="before"?pe(n.line,n.ch+1,"before"):n,n=n.ch?pe(n.line,n.sticky=="before"?n.ch-1:n.ch,"after"):n);for(var h=0;h<5;h++){var y=!1,b=_n(e,n),S=!s||s==n?b:_n(e,s);o={left:Math.min(b.left,S.left),top:Math.min(b.top,S.top)-i,right:Math.max(b.left,S.left),bottom:Math.max(b.bottom,S.bottom)+i};var j=To(e,o),W=e.doc.scrollTop,G=e.doc.scrollLeft;if(j.scrollTop!=null&&(xs(e,j.scrollTop),Math.abs(e.doc.scrollTop-W)>1&&(y=!0)),j.scrollLeft!=null&&(Vi(e,j.scrollLeft),Math.abs(e.doc.scrollLeft-G)>1&&(y=!0)),!y)break}return o}function Sa(e,n){var s=To(e,n);s.scrollTop!=null&&xs(e,s.scrollTop),s.scrollLeft!=null&&Vi(e,s.scrollLeft)}function To(e,n){var s=e.display,i=_i(e.display);n.top<0&&(n.top=0);var o=e.curOp&&e.curOp.scrollTop!=null?e.curOp.scrollTop:s.scroller.scrollTop,h=fs(e),y={};n.bottom-n.top>h&&(n.bottom=n.top+h);var b=e.doc.height+al(s),S=n.top<i,j=n.bottom>b-i;if(n.top<o)y.scrollTop=S?0:n.top;else if(n.bottom>o+h){var W=Math.min(n.top,(j?b:n.bottom)-h);W!=o&&(y.scrollTop=W)}var G=e.options.fixedGutter?0:s.gutters.offsetWidth,ie=e.curOp&&e.curOp.scrollLeft!=null?e.curOp.scrollLeft:s.scroller.scrollLeft-G,te=hs(e)-s.gutters.offsetWidth,ye=n.right-n.left>te;return ye&&(n.right=n.left+te),n.left<10?y.scrollLeft=0:n.left<ie?y.scrollLeft=Math.max(0,n.left+G-(ye?0:10)):n.right>te+ie-3&&(y.scrollLeft=n.right+(ye?0:10)-te),y}function vs(e,n){n!=null&&(Ca(e),e.curOp.scrollTop=(e.curOp.scrollTop==null?e.doc.scrollTop:e.curOp.scrollTop)+n)}function Hs(e){Ca(e);var n=e.getCursor();e.curOp.scrollToPos={from:n,to:n,margin:e.options.cursorScrollMargin}}function _a(e,n,s){(n!=null||s!=null)&&Ca(e),n!=null&&(e.curOp.scrollLeft=n),s!=null&&(e.curOp.scrollTop=s)}function cp(e,n){Ca(e),e.curOp.scrollToPos=n}function Ca(e){var n=e.curOp.scrollToPos;if(n){e.curOp.scrollToPos=null;var s=ko(e,n.from),i=ko(e,n.to);Ta(e,s,i,n.margin)}}function Ta(e,n,s,i){var o=To(e,{left:Math.min(n.left,s.left),top:Math.min(n.top,s.top)-i,right:Math.max(n.right,s.right),bottom:Math.max(n.bottom,s.bottom)+i});_a(e,o.scrollLeft,o.scrollTop)}function xs(e,n){Math.abs(e.doc.scrollTop-n)<2||(g||Qi(e,{top:n}),xl(e,n,!0),g&&Qi(e),qs(e,100))}function xl(e,n,s){n=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,n)),!(e.display.scroller.scrollTop==n&&!s)&&(e.doc.scrollTop=n,e.display.scrollbars.setScrollTop(n),e.display.scroller.scrollTop!=n&&(e.display.scroller.scrollTop=n))}function Vi(e,n,s,i){n=Math.max(0,Math.min(n,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),!((s?n==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-n)<2)&&!i)&&(e.doc.scrollLeft=n,mu(e),e.display.scroller.scrollLeft!=n&&(e.display.scroller.scrollLeft=n),e.display.scrollbars.setScrollLeft(n))}function Bs(e){var n=e.display,s=n.gutters.offsetWidth,i=Math.round(e.doc.height+al(e.display));return{clientHeight:n.scroller.clientHeight,viewHeight:n.wrapper.clientHeight,scrollWidth:n.scroller.scrollWidth,clientWidth:n.scroller.clientWidth,viewWidth:n.wrapper.clientWidth,barLeft:e.options.fixedGutter?s:0,docHeight:i,scrollHeight:i+ai(e)+n.barHeight,nativeBarWidth:n.nativeBarWidth,gutterWidth:s}}var Ji=function(e,n,s){this.cm=s;var i=this.vert=A("div",[A("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),o=this.horiz=A("div",[A("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=o.tabIndex=-1,e(i),e(o),rt(i,"scroll",function(){i.clientHeight&&n(i.scrollTop,"vertical")}),rt(o,"scroll",function(){o.clientWidth&&n(o.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,w&&_<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Ji.prototype.update=function(e){var n=e.scrollWidth>e.clientWidth+1,s=e.scrollHeight>e.clientHeight+1,i=e.nativeBarWidth;if(s){this.vert.style.display="block",this.vert.style.bottom=n?i+"px":"0";var o=e.viewHeight-(n?i:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+o)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(n){this.horiz.style.display="block",this.horiz.style.right=s?i+"px":"0",this.horiz.style.left=e.barLeft+"px";var h=e.viewWidth-e.barLeft-(s?i:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+h)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(i==0&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:s?i:0,bottom:n?i:0}},Ji.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Ji.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Ji.prototype.zeroWidthHack=function(){var e=J&&!V?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new et,this.disableVert=new et},Ji.prototype.enableZeroWidthBar=function(e,n,s){e.style.visibility="";function i(){var o=e.getBoundingClientRect(),h=s=="vert"?document.elementFromPoint(o.right-1,(o.top+o.bottom)/2):document.elementFromPoint((o.right+o.left)/2,o.bottom-1);h!=e?e.style.visibility="hidden":n.set(1e3,i)}n.set(1e3,i)},Ji.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var ja=function(){};ja.prototype.update=function(){return{bottom:0,right:0}},ja.prototype.setScrollLeft=function(){},ja.prototype.setScrollTop=function(){},ja.prototype.clear=function(){};function Us(e,n){n||(n=Bs(e));var s=e.display.barWidth,i=e.display.barHeight;Pc(e,n);for(var o=0;o<4&&s!=e.display.barWidth||i!=e.display.barHeight;o++)s!=e.display.barWidth&&e.options.lineWrapping&&Co(e),Pc(e,Bs(e)),s=e.display.barWidth,i=e.display.barHeight}function Pc(e,n){var s=e.display,i=s.scrollbars.update(n);s.sizer.style.paddingRight=(s.barWidth=i.right)+"px",s.sizer.style.paddingBottom=(s.barHeight=i.bottom)+"px",s.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(s.scrollbarFiller.style.display="block",s.scrollbarFiller.style.height=i.bottom+"px",s.scrollbarFiller.style.width=i.right+"px"):s.scrollbarFiller.style.display="",i.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(s.gutterFiller.style.display="block",s.gutterFiller.style.height=i.bottom+"px",s.gutterFiller.style.width=n.gutterWidth+"px"):s.gutterFiller.style.display=""}var Ac={native:Ji,null:ja};function bl(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Ie(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Ac[e.options.scrollbarStyle](function(n){e.display.wrapper.insertBefore(n,e.display.scrollbarFiller),rt(n,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),n.setAttribute("cm-not-content","true")},function(n,s){s=="horizontal"?Vi(e,n):xs(e,n)},e),e.display.scrollbars.addClass&&$(e.display.wrapper,e.display.scrollbars.addClass)}var bs=0;function ws(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++bs,markArrays:null},vc(e.curOp)}function Vr(e){var n=e.curOp;n&&Zd(n,function(s){for(var i=0;i<s.ops.length;i++)s.ops[i].cm.curOp=null;Ti(s)})}function Ti(e){for(var n=e.ops,s=0;s<n.length;s++)Na(n[s]);for(var i=0;i<n.length;i++)Xi(n[i]);for(var o=0;o<n.length;o++)fu(n[o]);for(var h=0;h<n.length;h++)dp(n[h]);for(var y=0;y<n.length;y++)pp(n[y])}function Na(e){var n=e.cm,s=n.display;nn(n),e.updateMaxLine&&da(n),e.mustUpdate=e.viewChanged||e.forceUpdate||e.scrollTop!=null||e.scrollToPos&&(e.scrollToPos.from.line<s.viewFrom||e.scrollToPos.to.line>=s.viewTo)||s.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new li(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Xi(e){e.updatedDisplay=e.mustUpdate&&Jn(e.cm,e.update)}function fu(e){var n=e.cm,s=n.display;e.updatedDisplay&&Co(n),e.barMeasure=Bs(n),s.maxLineChanged&&!n.options.lineWrapping&&(e.adjustWidthTo=su(n,s.maxLine,s.maxLine.text.length).left+3,n.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(s.scroller.clientWidth,s.sizer.offsetLeft+e.adjustWidthTo+ai(n)+n.display.barWidth),e.maxScrollLeft=Math.max(0,s.sizer.offsetLeft+e.adjustWidthTo-hs(n))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=s.input.prepareSelection())}function dp(e){var n=e.cm;e.adjustWidthTo!=null&&(n.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<n.doc.scrollLeft&&Vi(n,Math.min(n.display.scroller.scrollLeft,e.maxScrollLeft),!0),n.display.maxLineChanged=!1);var s=e.focus&&e.focus==P(ze(n));e.preparedSelection&&n.display.input.showSelection(e.preparedSelection,s),(e.updatedDisplay||e.startHeight!=n.doc.height)&&Us(n,e.barMeasure),e.updatedDisplay&&Eo(n,e.barMeasure),e.selectionChanged&&Ws(n),n.state.focused&&e.updateInput&&n.display.input.reset(e.typing),s&&Ec(e.cm)}function pp(e){var n=e.cm,s=n.display,i=n.doc;if(e.updatedDisplay&&mr(n,e.update),s.wheelStartX!=null&&(e.scrollTop!=null||e.scrollLeft!=null||e.scrollToPos)&&(s.wheelStartX=s.wheelStartY=null),e.scrollTop!=null&&xl(n,e.scrollTop,e.forceScroll),e.scrollLeft!=null&&Vi(n,e.scrollLeft,!0,!0),e.scrollToPos){var o=hu(n,gt(i,e.scrollToPos.from),gt(i,e.scrollToPos.to),e.scrollToPos.margin);Lc(n,o)}var h=e.maybeHiddenMarkers,y=e.maybeUnhiddenMarkers;if(h)for(var b=0;b<h.length;++b)h[b].lines.length||It(h[b],"hide");if(y)for(var S=0;S<y.length;++S)y[S].lines.length&&It(y[S],"unhide");s.wrapper.offsetHeight&&(i.scrollTop=n.display.scroller.scrollTop),e.changeObjs&&It(n,"changes",n,e.changeObjs),e.update&&e.update.finish()}function Ln(e,n){if(e.curOp)return n();ws(e);try{return n()}finally{Vr(e)}}function pn(e,n){return function(){if(e.curOp)return n.apply(e,arguments);ws(e);try{return n.apply(e,arguments)}finally{Vr(e)}}}function Cn(e){return function(){if(this.curOp)return e.apply(this,arguments);ws(this);try{return e.apply(this,arguments)}finally{Vr(this)}}}function gn(e){return function(){var n=this.cm;if(!n||n.curOp)return e.apply(this,arguments);ws(n);try{return e.apply(this,arguments)}finally{Vr(n)}}}function qs(e,n){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(n,Se(jo,e))}function jo(e){var n=e.doc;if(!(n.highlightFrontier>=e.display.viewTo)){var s=+new Date+e.options.workTime,i=Nt(e,n.highlightFrontier),o=[];n.iter(i.line,Math.min(n.first+n.size,e.display.viewTo+500),function(h){if(i.line>=e.display.viewFrom){var y=h.styles,b=h.text.length>e.options.maxHighlightLength?Rt(n.mode,i.state):null,S=aa(e,h,i,!0);b&&(i.state=b),h.styles=S.styles;var j=h.styleClasses,W=S.classes;W?h.styleClasses=W:j&&(h.styleClasses=null);for(var G=!y||y.length!=h.styles.length||j!=W&&(!j||!W||j.bgClass!=W.bgClass||j.textClass!=W.textClass),ie=0;!G&&ie<y.length;++ie)G=y[ie]!=h.styles[ie];G&&o.push(i.line),h.stateAfter=i.save(),i.nextLine()}else h.text.length<=e.options.maxHighlightLength&&ds(e,h.text,i),h.stateAfter=i.line%5==0?i.save():null,i.nextLine();if(+new Date>s)return qs(e,e.options.workDelay),!0}),n.highlightFrontier=i.line,n.modeFrontier=Math.max(n.modeFrontier,i.line),o.length&&Ln(e,function(){for(var h=0;h<o.length;h++)Gi(e,o[h],"text")})}}var li=function(e,n,s){var i=e.display;this.viewport=n,this.visible=ys(i,e.doc,n),this.editorIsHidden=!i.wrapper.offsetWidth,this.wrapperHeight=i.wrapper.clientHeight,this.wrapperWidth=i.wrapper.clientWidth,this.oldDisplayWidth=hs(e),this.force=s,this.dims=fl(e),this.events=[]};li.prototype.signal=function(e,n){mn(e,n)&&this.events.push(arguments)},li.prototype.finish=function(){for(var e=0;e<this.events.length;e++)It.apply(null,this.events[e])};function nn(e){var n=e.display;!n.scrollbarsClipped&&n.scroller.offsetWidth&&(n.nativeBarWidth=n.scroller.offsetWidth-n.scroller.clientWidth,n.heightForcer.style.height=ai(e)+"px",n.sizer.style.marginBottom=-n.nativeBarWidth+"px",n.sizer.style.borderRightWidth=ai(e)+"px",n.scrollbarsClipped=!0)}function Zt(e){if(e.hasFocus())return null;var n=P(ze(e));if(!n||!T(e.display.lineDiv,n))return null;var s={activeElt:n};if(window.getSelection){var i=Oe(e).getSelection();i.anchorNode&&i.extend&&T(e.display.lineDiv,i.anchorNode)&&(s.anchorNode=i.anchorNode,s.anchorOffset=i.anchorOffset,s.focusNode=i.focusNode,s.focusOffset=i.focusOffset)}return s}function ks(e){if(!(!e||!e.activeElt||e.activeElt==P(qe(e.activeElt)))&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&T(document.body,e.anchorNode)&&T(document.body,e.focusNode))){var n=e.activeElt.ownerDocument,s=n.defaultView.getSelection(),i=n.createRange();i.setEnd(e.anchorNode,e.anchorOffset),i.collapse(!1),s.removeAllRanges(),s.addRange(i),s.extend(e.focusNode,e.focusOffset)}}function Jn(e,n){var s=e.display,i=e.doc;if(n.editorIsHidden)return Yi(e),!1;if(!n.force&&n.visible.from>=s.viewFrom&&n.visible.to<=s.viewTo&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo)&&s.renderedView==s.view&&pu(e)==0)return!1;gu(e)&&(Yi(e),n.dims=fl(e));var o=i.first+i.size,h=Math.max(n.visible.from-e.options.viewportMargin,i.first),y=Math.min(o,n.visible.to+e.options.viewportMargin);s.viewFrom<h&&h-s.viewFrom<20&&(h=Math.max(i.first,s.viewFrom)),s.viewTo>y&&s.viewTo-y<20&&(y=Math.min(o,s.viewTo)),Dn&&(h=fr(e.doc,h),y=dn(e.doc,y));var b=h!=s.viewFrom||y!=s.viewTo||s.lastWrapHeight!=n.wrapperHeight||s.lastWrapWidth!=n.wrapperWidth;Nc(e,h,y),s.viewOffset=Sn(Je(e.doc,s.viewFrom)),e.display.mover.style.top=s.viewOffset+"px";var S=pu(e);if(!b&&S==0&&!n.force&&s.renderedView==s.view&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo))return!1;var j=Zt(e);return S>4&&(s.lineDiv.style.display="none"),No(e,s.updateLineNumbers,n.dims),S>4&&(s.lineDiv.style.display=""),s.renderedView=s.view,ks(j),le(s.cursorDiv),le(s.selectionDiv),s.gutters.style.height=s.sizer.style.minHeight=0,b&&(s.lastWrapHeight=n.wrapperHeight,s.lastWrapWidth=n.wrapperWidth,qs(e,400)),s.updateLineNumbers=null,!0}function mr(e,n){for(var s=n.viewport,i=!0;;i=!1){if(!i||!e.options.lineWrapping||n.oldDisplayWidth==hs(e)){if(s&&s.top!=null&&(s={top:Math.min(e.doc.height+al(e.display)-fs(e),s.top)}),n.visible=ys(e.display,e.doc,s),n.visible.from>=e.display.viewFrom&&n.visible.to<=e.display.viewTo)break}else i&&(n.visible=ys(e.display,e.doc,s));if(!Jn(e,n))break;Co(e);var o=Bs(e);Yr(e),Us(e,o),Eo(e,o),n.force=!1}n.signal(e,"update",e),(e.display.viewFrom!=e.display.reportedViewFrom||e.display.viewTo!=e.display.reportedViewTo)&&(n.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Qi(e,n){var s=new li(e,n);if(Jn(e,s)){Co(e),mr(e,s);var i=Bs(e);Yr(e),Us(e,i),Eo(e,i),s.finish()}}function No(e,n,s){var i=e.display,o=e.options.lineNumbers,h=i.lineDiv,y=h.firstChild;function b(ye){var ke=ye.nextSibling;return N&&J&&e.display.currentWheelTarget==ye?ye.style.display="none":ye.parentNode.removeChild(ye),ke}for(var S=i.view,j=i.viewFrom,W=0;W<S.length;W++){var G=S[W];if(!G.hidden)if(!G.node||G.node.parentNode!=h){var ie=rp(e,G,j,s);h.insertBefore(ie,y)}else{for(;y!=G.node;)y=b(y);var te=o&&n!=null&&n<=j&&G.lineNumber;G.changes&&(Ke(G.changes,"gutter")>-1&&(te=!1),xc(e,G,j,s)),te&&(le(G.lineNumber),G.lineNumber.appendChild(document.createTextNode(je(e.options,j)))),y=G.node.nextSibling}j+=G.size}for(;y;)y=b(y)}function or(e){var n=e.gutters.offsetWidth;e.sizer.style.marginLeft=n+"px",Mn(e,"gutterChanged",e)}function Eo(e,n){e.display.sizer.style.minHeight=n.docHeight+"px",e.display.heightForcer.style.top=n.docHeight+"px",e.display.gutters.style.height=n.docHeight+e.display.barHeight+ai(e)+"px"}function mu(e){var n=e.display,s=n.view;if(!(!n.alignWidgets&&(!n.gutters.firstChild||!e.options.fixedGutter))){for(var i=_o(n)-n.scroller.scrollLeft+e.doc.scrollLeft,o=n.gutters.offsetWidth,h=i+"px",y=0;y<s.length;y++)if(!s[y].hidden){e.options.fixedGutter&&(s[y].gutter&&(s[y].gutter.style.left=h),s[y].gutterBackground&&(s[y].gutterBackground.style.left=h));var b=s[y].alignable;if(b)for(var S=0;S<b.length;S++)b[S].style.left=h}e.options.fixedGutter&&(n.gutters.style.left=i+o+"px")}}function gu(e){if(!e.options.lineNumbers)return!1;var n=e.doc,s=je(e.options,n.first+n.size-1),i=e.display;if(s.length!=i.lineNumChars){var o=i.measure.appendChild(A("div",[A("div",s)],"CodeMirror-linenumber CodeMirror-gutter-elt")),h=o.firstChild.offsetWidth,y=o.offsetWidth-h;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(h,i.lineGutter.offsetWidth-y)+1,i.lineNumWidth=i.lineNumInnerWidth+y,i.lineNumChars=i.lineNumInnerWidth?s.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",or(e.display),!0}return!1}function Lo(e,n){for(var s=[],i=!1,o=0;o<e.length;o++){var h=e[o],y=null;if(typeof h!="string"&&(y=h.style,h=h.className),h=="CodeMirror-linenumbers")if(n)i=!0;else continue;s.push({className:h,style:y})}return n&&!i&&s.push({className:"CodeMirror-linenumbers",style:null}),s}function yu(e){var n=e.gutters,s=e.gutterSpecs;le(n),e.lineGutter=null;for(var i=0;i<s.length;++i){var o=s[i],h=o.className,y=o.style,b=n.appendChild(A("div",null,"CodeMirror-gutter "+h));y&&(b.style.cssText=y),h=="CodeMirror-linenumbers"&&(e.lineGutter=b,b.style.width=(e.lineNumWidth||1)+"px")}n.style.display=s.length?"":"none",or(e)}function Fr(e){yu(e.display),sr(e),mu(e)}function wl(e,n,s,i){var o=this;this.input=s,o.scrollbarFiller=A("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=A("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=Q("div",null,"CodeMirror-code"),o.selectionDiv=A("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=A("div",null,"CodeMirror-cursors"),o.measure=A("div",null,"CodeMirror-measure"),o.lineMeasure=A("div",null,"CodeMirror-measure"),o.lineSpace=Q("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none");var h=Q("div",[o.lineSpace],"CodeMirror-lines");o.mover=A("div",[h],null,"position: relative"),o.sizer=A("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=A("div",null,null,"position: absolute; height: "+Ft+"px; width: 1px;"),o.gutters=A("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=A("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=A("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),L&&Y===105&&(o.wrapper.style.clipPath="inset(0px)"),o.wrapper.setAttribute("translate","no"),w&&_<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),!N&&!(g&&H)&&(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=n.first,o.reportedViewFrom=o.reportedViewTo=n.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,o.gutterSpecs=Lo(i.gutters,i.lineNumbers),yu(o),s.init(o)}var Po=0,ji=null;w?ji=-.53:g?ji=15:L?ji=-.7:F&&(ji=-1/3);function Rc(e){var n=e.wheelDeltaX,s=e.wheelDeltaY;return n==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(n=e.detail),s==null&&e.detail&&e.axis==e.VERTICAL_AXIS?s=e.detail:s==null&&(s=e.wheelDelta),{x:n,y:s}}function Ss(e){var n=Rc(e);return n.x*=ji,n.y*=ji,n}function $s(e,n){L&&Y==102&&(e.display.chromeScrollHack==null?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout(function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""},100));var s=Rc(n),i=s.x,o=s.y,h=ji;n.deltaMode===0&&(i=n.deltaX,o=n.deltaY,h=1);var y=e.display,b=y.scroller,S=b.scrollWidth>b.clientWidth,j=b.scrollHeight>b.clientHeight;if(i&&S||o&&j){if(o&&J&&N){e:for(var W=n.target,G=y.view;W!=b;W=W.parentNode)for(var ie=0;ie<G.length;ie++)if(G[ie].node==W){e.display.currentWheelTarget=W;break e}}if(i&&!g&&!U&&h!=null){o&&j&&xs(e,Math.max(0,b.scrollTop+o*h)),Vi(e,Math.max(0,b.scrollLeft+i*h)),(!o||o&&j)&&bn(n),y.wheelStartX=null;return}if(o&&h!=null){var te=o*h,ye=e.doc.scrollTop,ke=ye+y.wrapper.clientHeight;te<0?ye=Math.max(0,ye+te-50):ke=Math.min(e.doc.height,ke+te+50),Qi(e,{top:ye,bottom:ke})}Po<20&&n.deltaMode!==0&&(y.wheelStartX==null?(y.wheelStartX=b.scrollLeft,y.wheelStartY=b.scrollTop,y.wheelDX=i,y.wheelDY=o,setTimeout(function(){if(y.wheelStartX!=null){var Pe=b.scrollLeft-y.wheelStartX,Ne=b.scrollTop-y.wheelStartY,Fe=Ne&&y.wheelDY&&Ne/y.wheelDY||Pe&&y.wheelDX&&Pe/y.wheelDX;y.wheelStartX=y.wheelStartY=null,Fe&&(ji=(ji*Po+Fe)/(Po+1),++Po)}},200)):(y.wheelDX+=i,y.wheelDY+=o))}}var Xn=function(e,n){this.ranges=e,this.primIndex=n};Xn.prototype.primary=function(){return this.ranges[this.primIndex]},Xn.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var n=0;n<this.ranges.length;n++){var s=this.ranges[n],i=e.ranges[n];if(!jt(s.anchor,i.anchor)||!jt(s.head,i.head))return!1}return!0},Xn.prototype.deepCopy=function(){for(var e=[],n=0;n<this.ranges.length;n++)e[n]=new At(Qt(this.ranges[n].anchor),Qt(this.ranges[n].head));return new Xn(e,this.primIndex)},Xn.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Xn.prototype.contains=function(e,n){n||(n=e);for(var s=0;s<this.ranges.length;s++){var i=this.ranges[s];if(He(n,i.from())>=0&&He(e,i.to())<=0)return s}return-1};var At=function(e,n){this.anchor=e,this.head=n};At.prototype.from=function(){return Kr(this.anchor,this.head)},At.prototype.to=function(){return kn(this.anchor,this.head)},At.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function Pr(e,n,s){var i=e&&e.options.selectionsMayTouch,o=n[s];n.sort(function(ie,te){return He(ie.from(),te.from())}),s=Ke(n,o);for(var h=1;h<n.length;h++){var y=n[h],b=n[h-1],S=He(b.to(),y.from());if(i&&!y.empty()?S>0:S>=0){var j=Kr(b.from(),y.from()),W=kn(b.to(),y.to()),G=b.empty()?y.from()==y.head:b.from()==b.head;h<=s&&--s,n.splice(--h,2,new At(G?W:j,G?j:W))}}return new Xn(n,s)}function zn(e,n){return new Xn([new At(e,n||e)],0)}function Fn(e){return e.text?pe(e.from.line+e.text.length-1,Qe(e.text).length+(e.text.length==1?e.from.ch:0)):e.to}function _s(e,n){if(He(e,n.from)<0)return e;if(He(e,n.to)<=0)return Fn(n);var s=e.line+n.text.length-(n.to.line-n.from.line)-1,i=e.ch;return e.line==n.to.line&&(i+=Fn(n).ch-n.to.ch),pe(s,i)}function ui(e,n){for(var s=[],i=0;i<e.sel.ranges.length;i++){var o=e.sel.ranges[i];s.push(new At(_s(o.anchor,n),_s(o.head,n)))}return Pr(e.cm,s,e.sel.primIndex)}function Ni(e,n,s){return e.line==n.line?pe(s.line,e.ch-n.ch+s.ch):pe(s.line+(e.line-n.line),e.ch)}function Ks(e,n,s){for(var i=[],o=pe(e.first,0),h=o,y=0;y<n.length;y++){var b=n[y],S=Ni(b.from,o,h),j=Ni(Fn(b),o,h);if(o=b.to,h=j,s=="around"){var W=e.sel.ranges[y],G=He(W.head,W.anchor)<0;i[y]=new At(G?j:S,G?S:j)}else i[y]=new At(S,S)}return new Xn(i,e.sel.primIndex)}function kl(e){e.doc.mode=Bt(e.options,e.doc.modeOption),Gs(e)}function Gs(e){e.doc.iter(function(n){n.stateAfter&&(n.stateAfter=null),n.styles&&(n.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,qs(e,100),e.state.modeGen++,e.curOp&&sr(e)}function Sl(e,n){return n.from.ch==0&&n.to.ch==0&&Qe(n.text)==""&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function gr(e,n,s,i){function o(Fe){return s?s[Fe]:null}function h(Fe,Me,Ge){Gd(Fe,Me,Ge,i),Mn(Fe,"change",Fe,n)}function y(Fe,Me){for(var Ge=[],at=Fe;at<Me;++at)Ge.push(new ki(j[at],o(at),i));return Ge}var b=n.from,S=n.to,j=n.text,W=Je(e,b.line),G=Je(e,S.line),ie=Qe(j),te=o(j.length-1),ye=S.line-b.line;if(n.full)e.insert(0,y(0,j.length)),e.remove(j.length,e.size-j.length);else if(Sl(e,n)){var ke=y(0,j.length-1);h(G,G.text,te),ye&&e.remove(b.line,ye),ke.length&&e.insert(b.line,ke)}else if(W==G)if(j.length==1)h(W,W.text.slice(0,b.ch)+ie+W.text.slice(S.ch),te);else{var Pe=y(1,j.length-1);Pe.push(new ki(ie+W.text.slice(S.ch),te,i)),h(W,W.text.slice(0,b.ch)+j[0],o(0)),e.insert(b.line+1,Pe)}else if(j.length==1)h(W,W.text.slice(0,b.ch)+j[0]+G.text.slice(S.ch),o(0)),e.remove(b.line+1,ye);else{h(W,W.text.slice(0,b.ch)+j[0],o(0)),h(G,ie+G.text.slice(S.ch),te);var Ne=y(1,j.length-1);ye>1&&e.remove(b.line+1,ye-1),e.insert(b.line+1,Ne)}Mn(e,"change",e,n)}function Pn(e,n,s){function i(o,h,y){if(o.linked)for(var b=0;b<o.linked.length;++b){var S=o.linked[b];if(S.doc!=h){var j=y&&S.sharedHist;s&&!j||(n(S.doc,j),i(S.doc,o,j))}}}i(e,null,!0)}function rn(e,n){if(n.cm)throw new Error("This document is already in use.");e.doc=n,n.cm=e,xa(e),kl(e),Jr(e),e.options.direction=n.direction,e.options.lineWrapping||da(e),e.options.mode=n.modeOption,sr(e)}function Jr(e){(e.doc.direction=="rtl"?$:Ie)(e.display.lineDiv,"CodeMirror-rtl")}function Ic(e){Ln(e,function(){Jr(e),sr(e)})}function Ea(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function La(e,n){var s={from:Qt(n.from),to:Fn(n),text:si(e,n.from,n.to)};return Mc(e,s,n.from.line,n.to.line+1),Pn(e,function(i){return Mc(i,s,n.from.line,n.to.line+1)},!0),s}function _l(e){for(;e.length;){var n=Qe(e);if(n.ranges)e.pop();else break}}function Oc(e,n){if(n)return _l(e.done),Qe(e.done);if(e.done.length&&!Qe(e.done).ranges)return Qe(e.done);if(e.done.length>1&&!e.done[e.done.length-2].ranges)return e.done.pop(),Qe(e.done)}function Pa(e,n,s,i){var o=e.history;o.undone.length=0;var h=+new Date,y,b;if((o.lastOp==i||o.lastOrigin==n.origin&&n.origin&&(n.origin.charAt(0)=="+"&&o.lastModTime>h-(e.cm?e.cm.options.historyEventDelay:500)||n.origin.charAt(0)=="*"))&&(y=Oc(o,o.lastOp==i)))b=Qe(y.changes),He(n.from,n.to)==0&&He(n.from,b.to)==0?b.to=Fn(n):y.changes.push(La(e,n));else{var S=Qe(o.done);for((!S||!S.ranges)&&Ro(e.sel,o.done),y={changes:[La(e,n)],generation:o.generation},o.done.push(y);o.done.length>o.undoDepth;)o.done.shift(),o.done[0].ranges||o.done.shift()}o.done.push(s),o.generation=++o.maxGeneration,o.lastModTime=o.lastSelTime=h,o.lastOp=o.lastSelOp=i,o.lastOrigin=o.lastSelOrigin=n.origin,b||It(e,"historyAdded")}function Dc(e,n,s,i){var o=n.charAt(0);return o=="*"||o=="+"&&s.ranges.length==i.ranges.length&&s.somethingSelected()==i.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function Ao(e,n,s,i){var o=e.history,h=i&&i.origin;s==o.lastSelOp||h&&o.lastSelOrigin==h&&(o.lastModTime==o.lastSelTime&&o.lastOrigin==h||Dc(e,h,Qe(o.done),n))?o.done[o.done.length-1]=n:Ro(n,o.done),o.lastSelTime=+new Date,o.lastSelOrigin=h,o.lastSelOp=s,i&&i.clearRedo!==!1&&_l(o.undone)}function Ro(e,n){var s=Qe(n);s&&s.ranges&&s.equals(e)||n.push(e)}function Mc(e,n,s,i){var o=n["spans_"+e.id],h=0;e.iter(Math.max(e.first,s),Math.min(e.first+e.size,i),function(y){y.markedSpans&&((o||(o=n["spans_"+e.id]={}))[h]=y.markedSpans),++h})}function Aa(e){if(!e)return null;for(var n,s=0;s<e.length;++s)e[s].marker.explicitlyCleared?n||(n=e.slice(0,s)):n&&n.push(e[s]);return n?n.length?n:null:e}function Cl(e,n){var s=n["spans_"+e.id];if(!s)return null;for(var i=[],o=0;o<n.text.length;++o)i.push(Aa(s[o]));return i}function vu(e,n){var s=Cl(e,n),i=ps(e,n);if(!s)return i;if(!i)return s;for(var o=0;o<s.length;++o){var h=s[o],y=i[o];if(h&&y)e:for(var b=0;b<y.length;++b){for(var S=y[b],j=0;j<h.length;++j)if(h[j].marker==S.marker)continue e;h.push(S)}else y&&(s[o]=y)}return s}function Ys(e,n,s){for(var i=[],o=0;o<e.length;++o){var h=e[o];if(h.ranges){i.push(s?Xn.prototype.deepCopy.call(h):h);continue}var y=h.changes,b=[];i.push({changes:b});for(var S=0;S<y.length;++S){var j=y[S],W=void 0;if(b.push({from:j.from,to:j.to,text:j.text}),n)for(var G in j)(W=G.match(/^spans_(\d+)$/))&&Ke(n,Number(W[1]))>-1&&(Qe(b)[G]=j[G],delete j[G])}}return i}function Cs(e,n,s,i){if(i){var o=e.anchor;if(s){var h=He(n,o)<0;h!=He(s,o)<0?(o=n,n=s):h!=He(n,s)<0&&(n=s)}return new At(o,n)}else return new At(s||n,n)}function Ra(e,n,s,i,o){o==null&&(o=e.cm&&(e.cm.display.shift||e.extend)),Wn(e,new Xn([Cs(e.sel.primary(),n,s,o)],0),i)}function Ia(e,n,s){for(var i=[],o=e.cm&&(e.cm.display.shift||e.extend),h=0;h<e.sel.ranges.length;h++)i[h]=Cs(e.sel.ranges[h],n[h],null,o);var y=Pr(e.cm,i,e.sel.primIndex);Wn(e,y,s)}function Io(e,n,s,i){var o=e.sel.ranges.slice(0);o[n]=s,Wn(e,Pr(e.cm,o,e.sel.primIndex),i)}function Vs(e,n,s,i){Wn(e,zn(n,s),i)}function xu(e,n,s){var i={ranges:n.ranges,update:function(o){this.ranges=[];for(var h=0;h<o.length;h++)this.ranges[h]=new At(gt(e,o[h].anchor),gt(e,o[h].head))},origin:s&&s.origin};return It(e,"beforeSelectionChange",e,i),e.cm&&It(e.cm,"beforeSelectionChange",e.cm,i),i.ranges!=n.ranges?Pr(e.cm,i.ranges,i.ranges.length-1):n}function Tl(e,n,s){var i=e.history.done,o=Qe(i);o&&o.ranges?(i[i.length-1]=n,Oo(e,n,s)):Wn(e,n,s)}function Wn(e,n,s){Oo(e,n,s),Ao(e,e.sel,e.cm?e.cm.curOp.id:NaN,s)}function Oo(e,n,s){(mn(e,"beforeSelectionChange")||e.cm&&mn(e.cm,"beforeSelectionChange"))&&(n=xu(e,n,s));var i=s&&s.bias||(He(n.primary().head,e.sel.primary().head)<0?-1:1);Js(e,Ts(e,n,i,!0)),!(s&&s.scroll===!1)&&e.cm&&e.cm.getOption("readOnly")!="nocursor"&&Hs(e.cm)}function Js(e,n){n.equals(e.sel)||(e.sel=n,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,xn(e.cm)),Mn(e,"cursorActivity",e))}function Wr(e){Js(e,Ts(e,e.sel,null,!1))}function Ts(e,n,s,i){for(var o,h=0;h<n.ranges.length;h++){var y=n.ranges[h],b=n.ranges.length==e.sel.ranges.length&&e.sel.ranges[h],S=Oa(e,y.anchor,b&&b.anchor,s,i),j=y.head==y.anchor?S:Oa(e,y.head,b&&b.head,s,i);(o||S!=y.anchor||j!=y.head)&&(o||(o=n.ranges.slice(0,h)),o[h]=new At(S,j))}return o?Pr(e.cm,o,n.primIndex):n}function js(e,n,s,i,o){var h=Je(e,n.line);if(h.markedSpans)for(var y=0;y<h.markedSpans.length;++y){var b=h.markedSpans[y],S=b.marker,j="selectLeft"in S?!S.selectLeft:S.inclusiveLeft,W="selectRight"in S?!S.selectRight:S.inclusiveRight;if((b.from==null||(j?b.from<=n.ch:b.from<n.ch))&&(b.to==null||(W?b.to>=n.ch:b.to>n.ch))){if(o&&(It(S,"beforeCursorEnter"),S.explicitlyCleared))if(h.markedSpans){--y;continue}else break;if(!S.atomic)continue;if(s){var G=S.find(i<0?1:-1),ie=void 0;if((i<0?W:j)&&(G=Ei(e,G,-i,G&&G.line==n.line?h:null)),G&&G.line==n.line&&(ie=He(G,s))&&(i<0?ie<0:ie>0))return js(e,G,n,i,o)}var te=S.find(i<0?-1:1);return(i<0?j:W)&&(te=Ei(e,te,i,te.line==n.line?h:null)),te?js(e,te,n,i,o):null}}return n}function Oa(e,n,s,i,o){var h=i||1,y=js(e,n,s,h,o)||!o&&js(e,n,s,h,!0)||js(e,n,s,-h,o)||!o&&js(e,n,s,-h,!0);return y||(e.cantEdit=!0,pe(e.first,0))}function Ei(e,n,s,i){return s<0&&n.ch==0?n.line>e.first?gt(e,pe(n.line-1)):null:s>0&&n.ch==(i||Je(e,n.line)).text.length?n.line<e.first+e.size-1?pe(n.line+1,0):null:new pe(n.line,n.ch+s)}function Zi(e){e.setSelection(pe(e.firstLine(),0),pe(e.lastLine()),Ct)}function jl(e,n,s){var i={canceled:!1,from:n.from,to:n.to,text:n.text,origin:n.origin,cancel:function(){return i.canceled=!0}};return s&&(i.update=function(o,h,y,b){o&&(i.from=gt(e,o)),h&&(i.to=gt(e,h)),y&&(i.text=y),b!==void 0&&(i.origin=b)}),It(e,"beforeChange",e,i),e.cm&&It(e.cm,"beforeChange",e.cm,i),i.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:i.from,to:i.to,text:i.text,origin:i.origin}}function Xs(e,n,s){if(e.cm){if(!e.cm.curOp)return pn(e.cm,Xs)(e,n,s);if(e.cm.state.suppressEdits)return}if(!((mn(e,"beforeChange")||e.cm&&mn(e.cm,"beforeChange"))&&(n=jl(e,n,!0),!n))){var i=oi&&!s&&ca(e,n.from,n.to);if(i)for(var o=i.length-1;o>=0;--o)Li(e,{from:i[o].from,to:i[o].to,text:o?[""]:n.text,origin:n.origin});else Li(e,n)}}function Li(e,n){if(!(n.text.length==1&&n.text[0]==""&&He(n.from,n.to)==0)){var s=ui(e,n);Pa(e,n,s,e.cm?e.cm.curOp.id:NaN),Do(e,n,s,ps(e,n));var i=[];Pn(e,function(o,h){!h&&Ke(i,o.history)==-1&&(zo(o.history,n),i.push(o.history)),Do(o,n,null,ps(o,n))})}}function ci(e,n,s){var i=e.cm&&e.cm.state.suppressEdits;if(!(i&&!s)){for(var o=e.history,h,y=e.sel,b=n=="undo"?o.done:o.undone,S=n=="undo"?o.undone:o.done,j=0;j<b.length&&(h=b[j],!(s?h.ranges&&!h.equals(e.sel):!h.ranges));j++);if(j!=b.length){for(o.lastOrigin=o.lastSelOrigin=null;;)if(h=b.pop(),h.ranges){if(Ro(h,S),s&&!h.equals(e.sel)){Wn(e,h,{clearRedo:!1});return}y=h}else if(i){b.push(h);return}else break;var W=[];Ro(y,S),S.push({changes:W,generation:o.generation}),o.generation=h.generation||++o.maxGeneration;for(var G=mn(e,"beforeChange")||e.cm&&mn(e.cm,"beforeChange"),ie=function(ke){var Pe=h.changes[ke];if(Pe.origin=n,G&&!jl(e,Pe,!1))return b.length=0,{};W.push(La(e,Pe));var Ne=ke?ui(e,Pe):Qe(b);Do(e,Pe,Ne,vu(e,Pe)),!ke&&e.cm&&e.cm.scrollIntoView({from:Pe.from,to:Fn(Pe)});var Fe=[];Pn(e,function(Me,Ge){!Ge&&Ke(Fe,Me.history)==-1&&(zo(Me.history,Pe),Fe.push(Me.history)),Do(Me,Pe,null,vu(Me,Pe))})},te=h.changes.length-1;te>=0;--te){var ye=ie(te);if(ye)return ye.v}}}}function Da(e,n){if(n!=0&&(e.first+=n,e.sel=new Xn(ut(e.sel.ranges,function(o){return new At(pe(o.anchor.line+n,o.anchor.ch),pe(o.head.line+n,o.head.ch))}),e.sel.primIndex),e.cm)){sr(e.cm,e.first,e.first-n,n);for(var s=e.cm.display,i=s.viewFrom;i<s.viewTo;i++)Gi(e.cm,i,"gutter")}}function Do(e,n,s,i){if(e.cm&&!e.cm.curOp)return pn(e.cm,Do)(e,n,s,i);if(n.to.line<e.first){Da(e,n.text.length-1-(n.to.line-n.from.line));return}if(!(n.from.line>e.lastLine())){if(n.from.line<e.first){var o=n.text.length-1-(e.first-n.from.line);Da(e,o),n={from:pe(e.first,0),to:pe(n.to.line+o,n.to.ch),text:[Qe(n.text)],origin:n.origin}}var h=e.lastLine();n.to.line>h&&(n={from:n.from,to:pe(h,Je(e,h).text.length),text:[n.text[0]],origin:n.origin}),n.removed=si(e,n.from,n.to),s||(s=ui(e,n)),e.cm?Nl(e.cm,n,i):gr(e,n,i),Oo(e,s,Ct),e.cantEdit&&Oa(e,pe(e.firstLine(),0))&&(e.cantEdit=!1)}}function Nl(e,n,s){var i=e.doc,o=e.display,h=n.from,y=n.to,b=!1,S=h.line;e.options.lineWrapping||(S=E($t(Je(i,h.line))),i.iter(S,y.line+1,function(te){if(te==o.maxLine)return b=!0,!0})),i.sel.contains(n.from,n.to)>-1&&xn(e),gr(i,n,s,Fs(e)),e.options.lineWrapping||(i.iter(S,h.line+n.text.length,function(te){var ye=Ui(te);ye>o.maxLineLength&&(o.maxLine=te,o.maxLineLength=ye,o.maxLineChanged=!0,b=!1)}),b&&(e.curOp.updateMaxLine=!0)),zr(i,h.line),qs(e,400);var j=n.text.length-(y.line-h.line)-1;n.full?sr(e):h.line==y.line&&n.text.length==1&&!Sl(e.doc,n)?Gi(e,h.line,"text"):sr(e,h.line,y.line+1,j);var W=mn(e,"changes"),G=mn(e,"change");if(G||W){var ie={from:h,to:y,text:n.text,removed:n.removed,origin:n.origin};G&&Mn(e,"change",e,ie),W&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(ie)}e.display.selForContextMenu=null}function Qs(e,n,s,i,o){var h;i||(i=s),He(i,s)<0&&(h=[i,s],s=h[0],i=h[1]),typeof n=="string"&&(n=e.splitLines(n)),Xs(e,{from:s,to:i,text:n,origin:o})}function Mo(e,n,s,i){s<e.line?e.line+=i:n<e.line&&(e.line=n,e.ch=0)}function di(e,n,s,i){for(var o=0;o<e.length;++o){var h=e[o],y=!0;if(h.ranges){h.copied||(h=e[o]=h.deepCopy(),h.copied=!0);for(var b=0;b<h.ranges.length;b++)Mo(h.ranges[b].anchor,n,s,i),Mo(h.ranges[b].head,n,s,i);continue}for(var S=0;S<h.changes.length;++S){var j=h.changes[S];if(s<j.from.line)j.from=pe(j.from.line+i,j.from.ch),j.to=pe(j.to.line+i,j.to.ch);else if(n<=j.to.line){y=!1;break}}y||(e.splice(0,o+1),o=0)}}function zo(e,n){var s=n.from.line,i=n.to.line,o=n.text.length-(i-s)-1;di(e.done,s,i,o),di(e.undone,s,i,o)}function es(e,n,s,i){var o=n,h=n;return typeof n=="number"?h=Je(e,il(e,n)):o=E(n),o==null?null:(i(h,o)&&e.cm&&Gi(e.cm,o,s),h)}function pi(e){this.lines=e,this.parent=null;for(var n=0,s=0;s<e.length;++s)e[s].parent=this,n+=e[s].height;this.height=n}pi.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,n){for(var s=e,i=e+n;s<i;++s){var o=this.lines[s];this.height-=o.height,Jl(o),Mn(o,"delete")}this.lines.splice(e,n)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,n,s){this.height+=s,this.lines=this.lines.slice(0,e).concat(n).concat(this.lines.slice(e));for(var i=0;i<n.length;++i)n[i].parent=this},iterN:function(e,n,s){for(var i=e+n;e<i;++e)if(s(this.lines[e]))return!0}};function Zs(e){this.children=e;for(var n=0,s=0,i=0;i<e.length;++i){var o=e[i];n+=o.chunkSize(),s+=o.height,o.parent=this}this.size=n,this.height=s,this.parent=null}Zs.prototype={chunkSize:function(){return this.size},removeInner:function(e,n){this.size-=n;for(var s=0;s<this.children.length;++s){var i=this.children[s],o=i.chunkSize();if(e<o){var h=Math.min(n,o-e),y=i.height;if(i.removeInner(e,h),this.height-=y-i.height,o==h&&(this.children.splice(s--,1),i.parent=null),(n-=h)==0)break;e=0}else e-=o}if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof pi))){var b=[];this.collapse(b),this.children=[new pi(b)],this.children[0].parent=this}},collapse:function(e){for(var n=0;n<this.children.length;++n)this.children[n].collapse(e)},insertInner:function(e,n,s){this.size+=n.length,this.height+=s;for(var i=0;i<this.children.length;++i){var o=this.children[i],h=o.chunkSize();if(e<=h){if(o.insertInner(e,n,s),o.lines&&o.lines.length>50){for(var y=o.lines.length%25+25,b=y;b<o.lines.length;){var S=new pi(o.lines.slice(b,b+=25));o.height-=S.height,this.children.splice(++i,0,S),S.parent=this}o.lines=o.lines.slice(0,y),this.maybeSpill()}break}e-=h}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var n=e.children.splice(e.children.length-5,5),s=new Zs(n);if(e.parent){e.size-=s.size,e.height-=s.height;var o=Ke(e.parent.children,e);e.parent.children.splice(o+1,0,s)}else{var i=new Zs(e.children);i.parent=e,e.children=[i,s],e=i}s.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,n,s){for(var i=0;i<this.children.length;++i){var o=this.children[i],h=o.chunkSize();if(e<h){var y=Math.min(n,h-e);if(o.iterN(e,y,s))return!0;if((n-=y)==0)break;e=0}else e-=h}}};var Pi=function(e,n,s){if(s)for(var i in s)s.hasOwnProperty(i)&&(this[i]=s[i]);this.doc=e,this.node=n};Pi.prototype.clear=function(){var e=this.doc.cm,n=this.line.widgets,s=this.line,i=E(s);if(!(i==null||!n)){for(var o=0;o<n.length;++o)n[o]==this&&n.splice(o--,1);n.length||(s.widgets=null);var h=qi(this);Yn(s,Math.max(0,s.height-h)),e&&(Ln(e,function(){bu(e,s,-h),Gi(e,i,"widget")}),Mn(e,"lineWidgetCleared",e,this,i))}},Pi.prototype.changed=function(){var e=this,n=this.height,s=this.doc.cm,i=this.line;this.height=null;var o=qi(this)-n;o&&(Er(this.doc,i)||Yn(i,i.height+o),s&&Ln(s,function(){s.curOp.forceUpdate=!0,bu(s,i,o),Mn(s,"lineWidgetChanged",s,e,E(i))}))},Nn(Pi);function bu(e,n,s){Sn(n)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&vs(e,s)}function wu(e,n,s,i){var o=new Pi(e,s,i),h=e.cm;return h&&o.noHScroll&&(h.display.alignWidgets=!0),es(e,n,"widget",function(y){var b=y.widgets||(y.widgets=[]);if(o.insertAt==null?b.push(o):b.splice(Math.min(b.length,Math.max(0,o.insertAt)),0,o),o.line=y,h&&!Er(e,y)){var S=Sn(y)<e.scrollTop;Yn(y,y.height+qi(o)),S&&vs(h,o.height),h.curOp.forceUpdate=!0}return!0}),h&&Mn(h,"lineWidgetAdded",h,o,typeof n=="number"?n:E(n)),o}var ln=0,hi=function(e,n){this.lines=[],this.type=n,this.doc=e,this.id=++ln};hi.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,n=e&&!e.curOp;if(n&&ws(e),mn(this,"clear")){var s=this.find();s&&Mn(this,"clear",s.from,s.to)}for(var i=null,o=null,h=0;h<this.lines.length;++h){var y=this.lines[h],b=Ds(y.markedSpans,this);e&&!this.collapsed?Gi(e,E(y),"text"):e&&(b.to!=null&&(o=E(y)),b.from!=null&&(i=E(y))),y.markedSpans=la(y.markedSpans,b),b.from==null&&this.collapsed&&!Er(this.doc,y)&&e&&Yn(y,_i(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var S=0;S<this.lines.length;++S){var j=$t(this.lines[S]),W=Ui(j);W>e.display.maxLineLength&&(e.display.maxLine=j,e.display.maxLineLength=W,e.display.maxLineChanged=!0)}i!=null&&e&&this.collapsed&&sr(e,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&Wr(e.doc)),e&&Mn(e,"markerCleared",e,this,i,o),n&&Vr(e),this.parent&&this.parent.clear()}},hi.prototype.find=function(e,n){e==null&&this.type=="bookmark"&&(e=1);for(var s,i,o=0;o<this.lines.length;++o){var h=this.lines[o],y=Ds(h.markedSpans,this);if(y.from!=null&&(s=pe(n?h:E(h),y.from),e==-1))return s;if(y.to!=null&&(i=pe(n?h:E(h),y.to),e==1))return i}return s&&{from:s,to:i}},hi.prototype.changed=function(){var e=this,n=this.find(-1,!0),s=this,i=this.doc.cm;!n||!i||Ln(i,function(){var o=n.line,h=E(n.line),y=ll(i,h);if(y&&(ul(y),i.curOp.selectionChanged=i.curOp.forceUpdate=!0),i.curOp.updateMaxLine=!0,!Er(s.doc,o)&&s.height!=null){var b=s.height;s.height=null;var S=qi(s)-b;S&&Yn(o,o.height+S)}Mn(i,"markerChanged",i,e)})},hi.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(!n.maybeHiddenMarkers||Ke(n.maybeHiddenMarkers,this)==-1)&&(n.maybeUnhiddenMarkers||(n.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},hi.prototype.detachLine=function(e){if(this.lines.splice(Ke(this.lines,e),1),!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(n.maybeHiddenMarkers||(n.maybeHiddenMarkers=[])).push(this)}},Nn(hi);function Ns(e,n,s,i,o){if(i&&i.shared)return El(e,n,s,i,o);if(e.cm&&!e.cm.curOp)return pn(e.cm,Ns)(e,n,s,i,o);var h=new hi(e,o),y=He(n,s);if(i&&Be(i,h,!1),y>0||y==0&&h.clearWhenEmpty!==!1)return h;if(h.replacedWith&&(h.collapsed=!0,h.widgetNode=Q("span",[h.replacedWith],"CodeMirror-widget"),i.handleMouseEvents||h.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(h.widgetNode.insertLeft=!0)),h.collapsed){if(cn(e,n.line,n,s,h)||n.line!=s.line&&cn(e,s.line,n,s,h))throw new Error("Inserting collapsed marker partially overlapping an existing one");Os()}h.addToHistory&&Pa(e,{from:n,to:s,origin:"markText"},e.sel,NaN);var b=n.line,S=e.cm,j;if(e.iter(b,s.line+1,function(G){S&&h.collapsed&&!S.options.lineWrapping&&$t(G)==S.display.maxLine&&(j=!0),h.collapsed&&b!=n.line&&Yn(G,0),Ms(G,new Nr(h,b==n.line?n.ch:null,b==s.line?s.ch:null),e.cm&&e.cm.curOp),++b}),h.collapsed&&e.iter(n.line,s.line+1,function(G){Er(e,G)&&Yn(G,0)}),h.clearOnEnter&&rt(h,"beforeCursorEnter",function(){return h.clear()}),h.readOnly&&(Gr(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),h.collapsed&&(h.id=++ln,h.atomic=!0),S){if(j&&(S.curOp.updateMaxLine=!0),h.collapsed)sr(S,n.line,s.line+1);else if(h.className||h.startStyle||h.endStyle||h.css||h.attributes||h.title)for(var W=n.line;W<=s.line;W++)Gi(S,W,"text");h.atomic&&Wr(S.doc),Mn(S,"markerAdded",S,h)}return h}var eo=function(e,n){this.markers=e,this.primary=n;for(var s=0;s<e.length;++s)e[s].parent=this};eo.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();Mn(this,"clear")}},eo.prototype.find=function(e,n){return this.primary.find(e,n)},Nn(eo);function El(e,n,s,i,o){i=Be(i),i.shared=!1;var h=[Ns(e,n,s,i,o)],y=h[0],b=i.widgetNode;return Pn(e,function(S){b&&(i.widgetNode=b.cloneNode(!0)),h.push(Ns(S,gt(S,n),gt(S,s),i,o));for(var j=0;j<S.linked.length;++j)if(S.linked[j].isParent)return;y=Qe(h)}),new eo(h,y)}function Ll(e){return e.findMarks(pe(e.first,0),e.clipPos(pe(e.lastLine())),function(n){return n.parent})}function to(e,n){for(var s=0;s<n.length;s++){var i=n[s],o=i.find(),h=e.clipPos(o.from),y=e.clipPos(o.to);if(He(h,y)){var b=Ns(e,h,y,i.primary,i.primary.type);i.markers.push(b),b.parent=i}}}function hn(e){for(var n=function(i){var o=e[i],h=[o.primary.doc];Pn(o.primary.doc,function(S){return h.push(S)});for(var y=0;y<o.markers.length;y++){var b=o.markers[y];Ke(h,b.doc)==-1&&(b.parent=null,o.markers.splice(y--,1))}},s=0;s<e.length;s++)n(s)}var Hn=0,Ot=function(e,n,s,i,o){if(!(this instanceof Ot))return new Ot(e,n,s,i,o);s==null&&(s=0),Zs.call(this,[new pi([new ki("",null)])]),this.first=s,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=s;var h=pe(s,0);this.sel=zn(h),this.history=new Ea(null),this.id=++Hn,this.modeOption=n,this.lineSep=i,this.direction=o=="rtl"?"rtl":"ltr",this.extend=!1,typeof e=="string"&&(e=this.splitLines(e)),gr(this,{from:h,to:h,text:e}),Wn(this,zn(h),Ct)};Ot.prototype=he(Zs.prototype,{constructor:Ot,iter:function(e,n,s){s?this.iterN(e-this.first,n-e,s):this.iterN(this.first,this.first+this.size,e)},insert:function(e,n){for(var s=0,i=0;i<n.length;++i)s+=n[i].height;this.insertInner(e-this.first,n,s)},remove:function(e,n){this.removeInner(e-this.first,n)},getValue:function(e){var n=cs(this,this.first,this.first+this.size);return e===!1?n:n.join(e||this.lineSeparator())},setValue:gn(function(e){var n=pe(this.first,0),s=this.first+this.size-1;Xs(this,{from:n,to:pe(s,Je(this,s).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&_a(this.cm,0,0),Wn(this,zn(n),Ct)}),replaceRange:function(e,n,s,i){n=gt(this,n),s=s?gt(this,s):n,Qs(this,e,n,s,i)},getRange:function(e,n,s){var i=si(this,gt(this,e),gt(this,n));return s===!1?i:s===""?i.join(""):i.join(s||this.lineSeparator())},getLine:function(e){var n=this.getLineHandle(e);return n&&n.text},getLineHandle:function(e){if(ge(this,e))return Je(this,e)},getLineNumber:function(e){return E(e)},getLineHandleVisualStart:function(e){return typeof e=="number"&&(e=Je(this,e)),$t(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return gt(this,e)},getCursor:function(e){var n=this.sel.primary(),s;return e==null||e=="head"?s=n.head:e=="anchor"?s=n.anchor:e=="end"||e=="to"||e===!1?s=n.to():s=n.from(),s},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:gn(function(e,n,s){Vs(this,gt(this,typeof e=="number"?pe(e,n||0):e),null,s)}),setSelection:gn(function(e,n,s){Vs(this,gt(this,e),gt(this,n||e),s)}),extendSelection:gn(function(e,n,s){Ra(this,gt(this,e),n&&gt(this,n),s)}),extendSelections:gn(function(e,n){Ia(this,oa(this,e),n)}),extendSelectionsBy:gn(function(e,n){var s=ut(this.sel.ranges,e);Ia(this,oa(this,s),n)}),setSelections:gn(function(e,n,s){if(e.length){for(var i=[],o=0;o<e.length;o++)i[o]=new At(gt(this,e[o].anchor),gt(this,e[o].head||e[o].anchor));n==null&&(n=Math.min(e.length-1,this.sel.primIndex)),Wn(this,Pr(this.cm,i,n),s)}}),addSelection:gn(function(e,n,s){var i=this.sel.ranges.slice(0);i.push(new At(gt(this,e),gt(this,n||e))),Wn(this,Pr(this.cm,i,i.length-1),s)}),getSelection:function(e){for(var n=this.sel.ranges,s,i=0;i<n.length;i++){var o=si(this,n[i].from(),n[i].to());s=s?s.concat(o):o}return e===!1?s:s.join(e||this.lineSeparator())},getSelections:function(e){for(var n=[],s=this.sel.ranges,i=0;i<s.length;i++){var o=si(this,s[i].from(),s[i].to());e!==!1&&(o=o.join(e||this.lineSeparator())),n[i]=o}return n},replaceSelection:function(e,n,s){for(var i=[],o=0;o<this.sel.ranges.length;o++)i[o]=e;this.replaceSelections(i,n,s||"+input")},replaceSelections:gn(function(e,n,s){for(var i=[],o=this.sel,h=0;h<o.ranges.length;h++){var y=o.ranges[h];i[h]={from:y.from(),to:y.to(),text:this.splitLines(e[h]),origin:s}}for(var b=n&&n!="end"&&Ks(this,i,n),S=i.length-1;S>=0;S--)Xs(this,i[S]);b?Tl(this,b):this.cm&&Hs(this.cm)}),undo:gn(function(){ci(this,"undo")}),redo:gn(function(){ci(this,"redo")}),undoSelection:gn(function(){ci(this,"undo",!0)}),redoSelection:gn(function(){ci(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,n=0,s=0,i=0;i<e.done.length;i++)e.done[i].ranges||++n;for(var o=0;o<e.undone.length;o++)e.undone[o].ranges||++s;return{undo:n,redo:s}},clearHistory:function(){var e=this;this.history=new Ea(this.history),Pn(this,function(n){return n.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Ys(this.history.done),undone:Ys(this.history.undone)}},setHistory:function(e){var n=this.history=new Ea(this.history);n.done=Ys(e.done.slice(0),null,!0),n.undone=Ys(e.undone.slice(0),null,!0)},setGutterMarker:gn(function(e,n,s){return es(this,e,"gutter",function(i){var o=i.gutterMarkers||(i.gutterMarkers={});return o[n]=s,!s&&Ze(o)&&(i.gutterMarkers=null),!0})}),clearGutter:gn(function(e){var n=this;this.iter(function(s){s.gutterMarkers&&s.gutterMarkers[e]&&es(n,s,"gutter",function(){return s.gutterMarkers[e]=null,Ze(s.gutterMarkers)&&(s.gutterMarkers=null),!0})})}),lineInfo:function(e){var n;if(typeof e=="number"){if(!ge(this,e)||(n=e,e=Je(this,e),!e))return null}else if(n=E(e),n==null)return null;return{line:n,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:gn(function(e,n,s){return es(this,e,n=="gutter"?"gutter":"class",function(i){var o=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass";if(!i[o])i[o]=s;else{if(se(s).test(i[o]))return!1;i[o]+=" "+s}return!0})}),removeLineClass:gn(function(e,n,s){return es(this,e,n=="gutter"?"gutter":"class",function(i){var o=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass",h=i[o];if(h)if(s==null)i[o]=null;else{var y=h.match(se(s));if(!y)return!1;var b=y.index+y[0].length;i[o]=h.slice(0,y.index)+(!y.index||b==h.length?"":" ")+h.slice(b)||null}else return!1;return!0})}),addLineWidget:gn(function(e,n,s){return wu(this,e,n,s)}),removeLineWidget:function(e){e.clear()},markText:function(e,n,s){return Ns(this,gt(this,e),gt(this,n),s,s&&s.type||"range")},setBookmark:function(e,n){var s={replacedWith:n&&(n.nodeType==null?n.widget:n),insertLeft:n&&n.insertLeft,clearWhenEmpty:!1,shared:n&&n.shared,handleMouseEvents:n&&n.handleMouseEvents};return e=gt(this,e),Ns(this,e,e,s,"bookmark")},findMarksAt:function(e){e=gt(this,e);var n=[],s=Je(this,e.line).markedSpans;if(s)for(var i=0;i<s.length;++i){var o=s[i];(o.from==null||o.from<=e.ch)&&(o.to==null||o.to>=e.ch)&&n.push(o.marker.parent||o.marker)}return n},findMarks:function(e,n,s){e=gt(this,e),n=gt(this,n);var i=[],o=e.line;return this.iter(e.line,n.line+1,function(h){var y=h.markedSpans;if(y)for(var b=0;b<y.length;b++){var S=y[b];!(S.to!=null&&o==e.line&&e.ch>=S.to||S.from==null&&o!=e.line||S.from!=null&&o==n.line&&S.from>=n.ch)&&(!s||s(S.marker))&&i.push(S.marker.parent||S.marker)}++o}),i},getAllMarks:function(){var e=[];return this.iter(function(n){var s=n.markedSpans;if(s)for(var i=0;i<s.length;++i)s[i].from!=null&&e.push(s[i].marker)}),e},posFromIndex:function(e){var n,s=this.first,i=this.lineSeparator().length;return this.iter(function(o){var h=o.text.length+i;if(h>e)return n=e,!0;e-=h,++s}),gt(this,pe(s,n))},indexFromPos:function(e){e=gt(this,e);var n=e.ch;if(e.line<this.first||e.ch<0)return 0;var s=this.lineSeparator().length;return this.iter(this.first,e.line,function(i){n+=i.text.length+s}),n},copy:function(e){var n=new Ot(cs(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,n.sel=this.sel,n.extend=!1,e&&(n.history.undoDepth=this.history.undoDepth,n.setHistory(this.getHistory())),n},linkedDoc:function(e){e||(e={});var n=this.first,s=this.first+this.size;e.from!=null&&e.from>n&&(n=e.from),e.to!=null&&e.to<s&&(s=e.to);var i=new Ot(cs(this,n,s),e.mode||this.modeOption,n,this.lineSep,this.direction);return e.sharedHist&&(i.history=this.history),(this.linked||(this.linked=[])).push({doc:i,sharedHist:e.sharedHist}),i.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],to(i,Ll(this)),i},unlinkDoc:function(e){if(e instanceof en&&(e=e.doc),this.linked)for(var n=0;n<this.linked.length;++n){var s=this.linked[n];if(s.doc==e){this.linked.splice(n,1),e.unlinkDoc(this),hn(Ll(this));break}}if(e.history==this.history){var i=[e.id];Pn(e,function(o){return i.push(o.id)},!0),e.history=new Ea(null),e.history.done=Ys(this.history.done,i),e.history.undone=Ys(this.history.undone,i)}},iterLinkedDocs:function(e){Pn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):jr(e)},lineSeparator:function(){return this.lineSep||`
`},setDirection:gn(function(e){e!="rtl"&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(n){return n.order=null}),this.cm&&Ic(this.cm))})}),Ot.prototype.eachLine=Ot.prototype.iter;var Ma=0;function za(e){var n=this;if(Zn(n),!(qt(n,e)||$i(n.display,e))){bn(e),w&&(Ma=+new Date);var s=gs(n,e,!0),i=e.dataTransfer.files;if(!(!s||n.isReadOnly()))if(i&&i.length&&window.FileReader&&window.File)for(var o=i.length,h=Array(o),y=0,b=function(){++y==o&&pn(n,function(){s=gt(n.doc,s);var te={from:s,to:s,text:n.doc.splitLines(h.filter(function(ye){return ye!=null}).join(n.doc.lineSeparator())),origin:"paste"};Xs(n.doc,te),Tl(n.doc,zn(gt(n.doc,s),gt(n.doc,Fn(te))))})()},S=function(te,ye){if(n.options.allowDropFileTypes&&Ke(n.options.allowDropFileTypes,te.type)==-1){b();return}var ke=new FileReader;ke.onerror=function(){return b()},ke.onload=function(){var Pe=ke.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(Pe)){b();return}h[ye]=Pe,b()},ke.readAsText(te)},j=0;j<i.length;j++)S(i[j],j);else{if(n.state.draggingText&&n.doc.sel.contains(s)>-1){n.state.draggingText(e),setTimeout(function(){return n.display.input.focus()},20);return}try{var W=e.dataTransfer.getData("Text");if(W){var G;if(n.state.draggingText&&!n.state.draggingText.copy&&(G=n.listSelections()),Oo(n.doc,zn(s,s)),G)for(var ie=0;ie<G.length;++ie)Qs(n.doc,"",G[ie].anchor,G[ie].head,"drag");n.replaceSelection(W,"around","paste"),n.display.input.focus()}}catch{}}}}function Fa(e,n){if(w&&(!e.state.draggingText||+new Date-Ma<100)){pr(n);return}if(!(qt(e,n)||$i(e.display,n))&&(n.dataTransfer.setData("Text",e.getSelection()),n.dataTransfer.effectAllowed="copyMove",n.dataTransfer.setDragImage&&!F)){var s=A("img",null,null,"position: fixed; left: 0; top: 0;");s.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",U&&(s.width=s.height=1,e.display.wrapper.appendChild(s),s._top=s.offsetTop),n.dataTransfer.setDragImage(s,0,0),U&&s.parentNode.removeChild(s)}}function hp(e,n){var s=gs(e,n);if(s){var i=document.createDocumentFragment();wa(e,s,i),e.display.dragCursor||(e.display.dragCursor=A("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),fe(e.display.dragCursor,i)}}function Zn(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Pl(e){if(document.getElementsByClassName){for(var n=document.getElementsByClassName("CodeMirror"),s=[],i=0;i<n.length;i++){var o=n[i].CodeMirror;o&&s.push(o)}s.length&&s[0].operation(function(){for(var h=0;h<s.length;h++)e(s[h])})}}var Al=!1;function ku(){Al||(Ai(),Al=!0)}function Ai(){var e;rt(window,"resize",function(){e==null&&(e=setTimeout(function(){e=null,Pl(Xr)},100))}),rt(window,"blur",function(){return Pl(Wt)})}function Xr(e){var n=e.display;n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.scrollbarsClipped=!1,e.setSize()}for(var Qr={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},no=0;no<10;no++)Qr[no+48]=Qr[no+96]=String(no);for(var Fo=65;Fo<=90;Fo++)Qr[Fo]=String.fromCharCode(Fo);for(var Wo=1;Wo<=12;Wo++)Qr[Wo+111]=Qr[Wo+63235]="F"+Wo;var Ri={};Ri.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ri.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ri.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Ri.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ri.default=J?Ri.macDefault:Ri.pcDefault;function zc(e){var n=e.split(/-(?!$)/);e=n[n.length-1];for(var s,i,o,h,y=0;y<n.length-1;y++){var b=n[y];if(/^(cmd|meta|m)$/i.test(b))h=!0;else if(/^a(lt)?$/i.test(b))s=!0;else if(/^(c|ctrl|control)$/i.test(b))i=!0;else if(/^s(hift)?$/i.test(b))o=!0;else throw new Error("Unrecognized modifier name: "+b)}return s&&(e="Alt-"+e),i&&(e="Ctrl-"+e),h&&(e="Cmd-"+e),o&&(e="Shift-"+e),e}function Fc(e){var n={};for(var s in e)if(e.hasOwnProperty(s)){var i=e[s];if(/^(name|fallthrough|(de|at)tach)$/.test(s))continue;if(i=="..."){delete e[s];continue}for(var o=ut(s.split(" "),zc),h=0;h<o.length;h++){var y=void 0,b=void 0;h==o.length-1?(b=o.join(" "),y=i):(b=o.slice(0,h+1).join(" "),y="...");var S=n[b];if(!S)n[b]=y;else if(S!=y)throw new Error("Inconsistent bindings for "+b)}delete e[s]}for(var j in n)e[j]=n[j];return e}function ro(e,n,s,i){n=Es(n);var o=n.call?n.call(e,i):n[e];if(o===!1)return"nothing";if(o==="...")return"multi";if(o!=null&&s(o))return"handled";if(n.fallthrough){if(Object.prototype.toString.call(n.fallthrough)!="[object Array]")return ro(e,n.fallthrough,s,i);for(var h=0;h<n.fallthrough.length;h++){var y=ro(e,n.fallthrough[h],s,i);if(y)return y}}}function Su(e){var n=typeof e=="string"?e:Qr[e.keyCode];return n=="Ctrl"||n=="Alt"||n=="Shift"||n=="Mod"}function _u(e,n,s){var i=e;return n.altKey&&i!="Alt"&&(e="Alt-"+e),(Re?n.metaKey:n.ctrlKey)&&i!="Ctrl"&&(e="Ctrl-"+e),(Re?n.ctrlKey:n.metaKey)&&i!="Mod"&&(e="Cmd-"+e),!s&&n.shiftKey&&i!="Shift"&&(e="Shift-"+e),e}function Cu(e,n){if(U&&e.keyCode==34&&e.char)return!1;var s=Qr[e.keyCode];return s==null||e.altGraphKey?!1:(e.keyCode==3&&e.code&&(s=e.code),_u(s,e,n))}function Es(e){return typeof e=="string"?Ri[e]:e}function io(e,n){for(var s=e.doc.sel.ranges,i=[],o=0;o<s.length;o++){for(var h=n(s[o]);i.length&&He(h.from,Qe(i).to)<=0;){var y=i.pop();if(He(y.from,h.from)<0){h.from=y.from;break}}i.push(h)}Ln(e,function(){for(var b=i.length-1;b>=0;b--)Qs(e.doc,"",i[b].from,i[b].to,"+delete");Hs(e)})}function Ho(e,n,s){var i=Xt(e.text,n+s,s);return i<0||i>e.text.length?null:i}function Bo(e,n,s){var i=Ho(e,n.ch,s);return i==null?null:new pe(n.line,i,s<0?"after":"before")}function Rl(e,n,s,i,o){if(e){n.doc.direction=="rtl"&&(o=-o);var h=bt(s,n.doc.direction);if(h){var y=o<0?Qe(h):h[0],b=o<0==(y.level==1),S=b?"after":"before",j;if(y.level>0||n.doc.direction=="rtl"){var W=Si(n,s);j=o<0?s.text.length-1:0;var G=Lr(n,W,j).top;j=nr(function(ie){return Lr(n,W,ie).top==G},o<0==(y.level==1)?y.from:y.to-1,j),S=="before"&&(j=Ho(s,j,1))}else j=o<0?y.to:y.from;return new pe(i,j,S)}}return new pe(i,o<0?s.text.length:0,o<0?"before":"after")}function Tu(e,n,s,i){var o=bt(n,e.doc.direction);if(!o)return Bo(n,s,i);s.ch>=n.text.length?(s.ch=n.text.length,s.sticky="before"):s.ch<=0&&(s.ch=0,s.sticky="after");var h=Ur(o,s.ch,s.sticky),y=o[h];if(e.doc.direction=="ltr"&&y.level%2==0&&(i>0?y.to>s.ch:y.from<s.ch))return Bo(n,s,i);var b=function(Ne,Fe){return Ho(n,Ne instanceof pe?Ne.ch:Ne,Fe)},S,j=function(Ne){return e.options.lineWrapping?(S=S||Si(e,n),du(e,n,S,Ne)):{begin:0,end:n.text.length}},W=j(s.sticky=="before"?b(s,-1):s.ch);if(e.doc.direction=="rtl"||y.level==1){var G=y.level==1==i<0,ie=b(s,G?1:-1);if(ie!=null&&(G?ie<=y.to&&ie<=W.end:ie>=y.from&&ie>=W.begin)){var te=G?"before":"after";return new pe(s.line,ie,te)}}var ye=function(Ne,Fe,Me){for(var Ge=function(Et,Bn){return Bn?new pe(s.line,b(Et,1),"before"):new pe(s.line,Et,"after")};Ne>=0&&Ne<o.length;Ne+=Fe){var at=o[Ne],Ve=Fe>0==(at.level!=1),St=Ve?Me.begin:b(Me.end,-1);if(at.from<=St&&St<at.to||(St=Ve?at.from:b(at.to,-1),Me.begin<=St&&St<Me.end))return Ge(St,Ve)}},ke=ye(h+i,i,W);if(ke)return ke;var Pe=i>0?W.end:b(W.begin,-1);return Pe!=null&&!(i>0&&Pe==n.text.length)&&(ke=ye(i>0?0:o.length-1,i,j(Pe)),ke)?ke:null}var Uo={selectAll:Zi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),Ct)},killLine:function(e){return io(e,function(n){if(n.empty()){var s=Je(e.doc,n.head.line).text.length;return n.head.ch==s&&n.head.line<e.lastLine()?{from:n.head,to:pe(n.head.line+1,0)}:{from:n.head,to:pe(n.head.line,s)}}else return{from:n.from(),to:n.to()}})},deleteLine:function(e){return io(e,function(n){return{from:pe(n.from().line,0),to:gt(e.doc,pe(n.to().line+1,0))}})},delLineLeft:function(e){return io(e,function(n){return{from:pe(n.from().line,0),to:n.from()}})},delWrappedLineLeft:function(e){return io(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return{from:i,to:n.from()}})},delWrappedLineRight:function(e){return io(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div");return{from:n.from(),to:i}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(pe(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(pe(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(n){return ju(e,n.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(n){return Nu(e,n.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(n){return Wc(e,n.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div")},tt)},goLineLeft:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:0,top:s},"div")},tt)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return i.ch<e.getLine(i.line).search(/\S/)?Nu(e,n.head):i},tt)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("	")},insertSoftTab:function(e){for(var n=[],s=e.listSelections(),i=e.options.tabSize,o=0;o<s.length;o++){var h=s[o].from(),y=$e(e.getLine(h.line),h.ch,i);n.push(yt(i-y%i))}e.replaceSelections(n)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=[],i=0;i<n.length;i++)if(n[i].empty()){var o=n[i].head,h=Je(e.doc,o.line).text;if(h){if(o.ch==h.length&&(o=new pe(o.line,o.ch-1)),o.ch>0)o=new pe(o.line,o.ch+1),e.replaceRange(h.charAt(o.ch-1)+h.charAt(o.ch-2),pe(o.line,o.ch-2),o,"+transpose");else if(o.line>e.doc.first){var y=Je(e.doc,o.line-1).text;y&&(o=new pe(o.line,1),e.replaceRange(h.charAt(0)+e.doc.lineSeparator()+y.charAt(y.length-1),pe(o.line-1,y.length-1),o,"+transpose"))}}s.push(new At(o,o))}e.setSelections(s)})},newlineAndIndent:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=n.length-1;s>=0;s--)e.replaceRange(e.doc.lineSeparator(),n[s].anchor,n[s].head,"+input");n=e.listSelections();for(var i=0;i<n.length;i++)e.indentLine(n[i].from().line,null,!0);Hs(e)})},openLine:function(e){return e.replaceSelection(`
`,"start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function ju(e,n){var s=Je(e.doc,n),i=$t(s);return i!=s&&(n=E(i)),Rl(!0,e,i,n,1)}function Wc(e,n){var s=Je(e.doc,n),i=hr(s);return i!=s&&(n=E(i)),Rl(!0,e,s,n,-1)}function Nu(e,n){var s=ju(e,n.line),i=Je(e.doc,s.line),o=bt(i,e.doc.direction);if(!o||o[0].level==0){var h=Math.max(s.ch,i.text.search(/\S/)),y=n.line==s.line&&n.ch<=h&&n.ch;return pe(s.line,y?0:h,s.sticky)}return s}function qo(e,n,s){if(typeof n=="string"&&(n=Uo[n],!n))return!1;e.display.input.ensurePolled();var i=e.display.shift,o=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),s&&(e.display.shift=!1),o=n(e)!=Yt}finally{e.display.shift=i,e.state.suppressEdits=!1}return o}function Hc(e,n,s){for(var i=0;i<e.state.keyMaps.length;i++){var o=ro(n,e.state.keyMaps[i],s,e);if(o)return o}return e.options.extraKeys&&ro(n,e.options.extraKeys,s,e)||ro(n,e.options.keyMap,s,e)}var Bc=new et;function $o(e,n,s,i){var o=e.state.keySeq;if(o){if(Su(n))return"handled";if(/\'$/.test(n)?e.state.keySeq=null:Bc.set(50,function(){e.state.keySeq==o&&(e.state.keySeq=null,e.display.input.reset())}),Uc(e,o+" "+n,s,i))return!0}return Uc(e,n,s,i)}function Uc(e,n,s,i){var o=Hc(e,n,i);return o=="multi"&&(e.state.keySeq=n),o=="handled"&&Mn(e,"keyHandled",e,n,s),(o=="handled"||o=="multi")&&(bn(s),Ws(e)),!!o}function Eu(e,n){var s=Cu(n,!0);return s?n.shiftKey&&!e.state.keySeq?$o(e,"Shift-"+s,n,function(i){return qo(e,i,!0)})||$o(e,s,n,function(i){if(typeof i=="string"?/^go[A-Z]/.test(i):i.motion)return qo(e,i)}):$o(e,s,n,function(i){return qo(e,i)}):!1}function fp(e,n,s){return $o(e,"'"+s+"'",n,function(i){return qo(e,i,!0)})}var Lu=null;function Pu(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&(n.curOp.focus=P(ze(n)),!qt(n,e))){w&&_<11&&e.keyCode==27&&(e.returnValue=!1);var s=e.keyCode;n.display.shift=s==16||e.shiftKey;var i=Eu(n,e);U&&(Lu=i?s:null,!i&&s==88&&!as&&(J?e.metaKey:e.ctrlKey)&&n.replaceSelection("",null,"cut")),g&&!J&&!i&&s==46&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),s==18&&!/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className)&&qc(n)}}function qc(e){var n=e.display.lineDiv;$(n,"CodeMirror-crosshair");function s(i){(i.keyCode==18||!i.altKey)&&(Ie(n,"CodeMirror-crosshair"),tn(document,"keyup",s),tn(document,"mouseover",s))}rt(document,"keyup",s),rt(document,"mouseover",s)}function Au(e){e.keyCode==16&&(this.doc.sel.shift=!1),qt(this,e)}function Wa(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&!($i(n.display,e)||qt(n,e)||e.ctrlKey&&!e.altKey||J&&e.metaKey)){var s=e.keyCode,i=e.charCode;if(U&&s==Lu){Lu=null,bn(e);return}if(!(U&&(!e.which||e.which<10)&&Eu(n,e))){var o=String.fromCharCode(i??s);o!="\b"&&(fp(n,e,o)||n.display.input.onKeyPress(e))}}}var mp=400,Ru=function(e,n,s){this.time=e,this.pos=n,this.button=s};Ru.prototype.compare=function(e,n,s){return this.time+mp>e&&He(n,this.pos)==0&&s==this.button};var Ha,yr;function Iu(e,n){var s=+new Date;return yr&&yr.compare(s,e,n)?(Ha=yr=null,"triple"):Ha&&Ha.compare(s,e,n)?(yr=new Ru(s,e,n),Ha=null,"double"):(Ha=new Ru(s,e,n),yr=null,"single")}function Ba(e){var n=this,s=n.display;if(!(qt(n,e)||s.activeTouch&&s.input.supportsTouch())){if(s.input.ensurePolled(),s.shift=e.shiftKey,$i(s,e)){N||(s.scroller.draggable=!1,setTimeout(function(){return s.scroller.draggable=!0},100));return}if(!Il(n,e)){var i=gs(n,e),o=En(e),h=i?Iu(i,o):"single";Oe(n).focus(),o==1&&n.state.selectingText&&n.state.selectingText(e),!(i&&$c(n,o,i,h,e))&&(o==1?i?Gc(n,i,h,e):gi(e)==s.scroller&&bn(e):o==2?(i&&Ra(n.doc,i),setTimeout(function(){return s.input.focus()},20)):o==3&&(xe?n.display.input.onContextMenu(e):yl(n)))}}}function $c(e,n,s,i,o){var h="Click";return i=="double"?h="Double"+h:i=="triple"&&(h="Triple"+h),h=(n==1?"Left":n==2?"Middle":"Right")+h,$o(e,_u(h,o),o,function(y){if(typeof y=="string"&&(y=Uo[y]),!y)return!1;var b=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),b=y(e,s)!=Yt}finally{e.state.suppressEdits=!1}return b})}function Kc(e,n,s){var i=e.getOption("configureMouse"),o=i?i(e,n,s):{};if(o.unit==null){var h=ce?s.shiftKey&&s.metaKey:s.altKey;o.unit=h?"rectangle":n=="single"?"char":n=="double"?"word":"line"}return(o.extend==null||e.doc.extend)&&(o.extend=e.doc.extend||s.shiftKey),o.addNew==null&&(o.addNew=J?s.metaKey:s.ctrlKey),o.moveOnDrag==null&&(o.moveOnDrag=!(J?s.altKey:s.ctrlKey)),o}function Gc(e,n,s,i){w?setTimeout(Se(Ec,e),0):e.curOp.focus=P(ze(e));var o=Kc(e,s,i),h=e.doc.sel,y;e.options.dragDrop&&os&&!e.isReadOnly()&&s=="single"&&(y=h.contains(n))>-1&&(He((y=h.ranges[y]).from(),n)<0||n.xRel>0)&&(He(y.to(),n)>0||n.xRel<0)?Ou(e,i,n,o):Du(e,i,n,o)}function Ou(e,n,s,i){var o=e.display,h=!1,y=pn(e,function(j){N&&(o.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:yl(e)),tn(o.wrapper.ownerDocument,"mouseup",y),tn(o.wrapper.ownerDocument,"mousemove",b),tn(o.scroller,"dragstart",S),tn(o.scroller,"drop",y),h||(bn(j),i.addNew||Ra(e.doc,s,null,null,i.extend),N&&!F||w&&_==9?setTimeout(function(){o.wrapper.ownerDocument.body.focus({preventScroll:!0}),o.input.focus()},20):o.input.focus())}),b=function(j){h=h||Math.abs(n.clientX-j.clientX)+Math.abs(n.clientY-j.clientY)>=10},S=function(){return h=!0};N&&(o.scroller.draggable=!0),e.state.draggingText=y,y.copy=!i.moveOnDrag,rt(o.wrapper.ownerDocument,"mouseup",y),rt(o.wrapper.ownerDocument,"mousemove",b),rt(o.scroller,"dragstart",S),rt(o.scroller,"drop",y),e.state.delayingBlurEvent=!0,setTimeout(function(){return o.input.focus()},20),o.scroller.dragDrop&&o.scroller.dragDrop()}function so(e,n,s){if(s=="char")return new At(n,n);if(s=="word")return e.findWordAt(n);if(s=="line")return new At(pe(n.line,0),gt(e.doc,pe(n.line+1,0)));var i=s(e,n);return new At(i.from,i.to)}function Du(e,n,s,i){w&&yl(e);var o=e.display,h=e.doc;bn(n);var y,b,S=h.sel,j=S.ranges;if(i.addNew&&!i.extend?(b=h.sel.contains(s),b>-1?y=j[b]:y=new At(s,s)):(y=h.sel.primary(),b=h.sel.primIndex),i.unit=="rectangle")i.addNew||(y=new At(s,s)),s=gs(e,n,!0,!0),b=-1;else{var W=so(e,s,i.unit);i.extend?y=Cs(y,W.anchor,W.head,i.extend):y=W}i.addNew?b==-1?(b=j.length,Wn(h,Pr(e,j.concat([y]),b),{scroll:!1,origin:"*mouse"})):j.length>1&&j[b].empty()&&i.unit=="char"&&!i.extend?(Wn(h,Pr(e,j.slice(0,b).concat(j.slice(b+1)),0),{scroll:!1,origin:"*mouse"}),S=h.sel):Io(h,b,y,xt):(b=0,Wn(h,new Xn([y],0),xt),S=h.sel);var G=s;function ie(Me){if(He(G,Me)!=0)if(G=Me,i.unit=="rectangle"){for(var Ge=[],at=e.options.tabSize,Ve=$e(Je(h,s.line).text,s.ch,at),St=$e(Je(h,Me.line).text,Me.ch,at),Et=Math.min(Ve,St),Bn=Math.max(Ve,St),sn=Math.min(s.line,Me.line),xr=Math.min(e.lastLine(),Math.max(s.line,Me.line));sn<=xr;sn++){var lr=Je(h,sn).text,yn=Ue(lr,Et,at);Et==Bn?Ge.push(new At(pe(sn,yn),pe(sn,yn))):lr.length>yn&&Ge.push(new At(pe(sn,yn),pe(sn,Ue(lr,Bn,at))))}Ge.length||Ge.push(new At(s,s)),Wn(h,Pr(e,S.ranges.slice(0,b).concat(Ge),b),{origin:"*mouse",scroll:!1}),e.scrollIntoView(Me)}else{var br=y,Tn=so(e,Me,i.unit),vn=br.anchor,Mt;He(Tn.anchor,vn)>0?(Mt=Tn.head,vn=Kr(br.from(),Tn.anchor)):(Mt=Tn.anchor,vn=kn(br.to(),Tn.head));var dt=S.ranges.slice(0);dt[b]=Mu(e,new At(gt(h,vn),Mt)),Wn(h,Pr(e,dt,b),xt)}}var te=o.wrapper.getBoundingClientRect(),ye=0;function ke(Me){var Ge=++ye,at=gs(e,Me,!0,i.unit=="rectangle");if(at)if(He(at,G)!=0){e.curOp.focus=P(ze(e)),ie(at);var Ve=ys(o,h);(at.line>=Ve.to||at.line<Ve.from)&&setTimeout(pn(e,function(){ye==Ge&&ke(Me)}),150)}else{var St=Me.clientY<te.top?-20:Me.clientY>te.bottom?20:0;St&&setTimeout(pn(e,function(){ye==Ge&&(o.scroller.scrollTop+=St,ke(Me))}),50)}}function Pe(Me){e.state.selectingText=!1,ye=1/0,Me&&(bn(Me),o.input.focus()),tn(o.wrapper.ownerDocument,"mousemove",Ne),tn(o.wrapper.ownerDocument,"mouseup",Fe),h.history.lastSelOrigin=null}var Ne=pn(e,function(Me){Me.buttons===0||!En(Me)?Pe(Me):ke(Me)}),Fe=pn(e,Pe);e.state.selectingText=Fe,rt(o.wrapper.ownerDocument,"mousemove",Ne),rt(o.wrapper.ownerDocument,"mouseup",Fe)}function Mu(e,n){var s=n.anchor,i=n.head,o=Je(e.doc,s.line);if(He(s,i)==0&&s.sticky==i.sticky)return n;var h=bt(o);if(!h)return n;var y=Ur(h,s.ch,s.sticky),b=h[y];if(b.from!=s.ch&&b.to!=s.ch)return n;var S=y+(b.from==s.ch==(b.level!=1)?0:1);if(S==0||S==h.length)return n;var j;if(i.line!=s.line)j=(i.line-s.line)*(e.doc.direction=="ltr"?1:-1)>0;else{var W=Ur(h,i.ch,i.sticky),G=W-y||(i.ch-s.ch)*(b.level==1?-1:1);W==S-1||W==S?j=G<0:j=G>0}var ie=h[S+(j?-1:0)],te=j==(ie.level==1),ye=te?ie.from:ie.to,ke=te?"after":"before";return s.ch==ye&&s.sticky==ke?n:new At(new pe(s.line,ye,ke),i)}function Yc(e,n,s,i){var o,h;if(n.touches)o=n.touches[0].clientX,h=n.touches[0].clientY;else try{o=n.clientX,h=n.clientY}catch{return!1}if(o>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;i&&bn(n);var y=e.display,b=y.lineDiv.getBoundingClientRect();if(h>b.bottom||!mn(e,s))return In(n);h-=b.top-y.viewOffset;for(var S=0;S<e.display.gutterSpecs.length;++S){var j=y.gutters.childNodes[S];if(j&&j.getBoundingClientRect().right>=o){var W=K(e.doc,h),G=e.display.gutterSpecs[S];return It(e,s,e,W,G.className,n),In(n)}}}function Il(e,n){return Yc(e,n,"gutterClick",!0)}function zu(e,n){$i(e.display,n)||Vc(e,n)||qt(e,n,"contextmenu")||xe||e.display.input.onContextMenu(n)}function Vc(e,n){return mn(e,"gutterContextMenu")?Yc(e,n,"gutterContextMenu",!1):!1}function Fu(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),wo(e)}var oo={toString:function(){return"CodeMirror.Init"}},Jc={},er={};function vr(e){var n=e.optionHandlers;function s(i,o,h,y){e.defaults[i]=o,h&&(n[i]=y?function(b,S,j){j!=oo&&h(b,S,j)}:h)}e.defineOption=s,e.Init=oo,s("value","",function(i,o){return i.setValue(o)},!0),s("mode",null,function(i,o){i.doc.modeOption=o,kl(i)},!0),s("indentUnit",2,kl,!0),s("indentWithTabs",!1),s("smartIndent",!0),s("tabSize",4,function(i){Gs(i),wo(i),sr(i)},!0),s("lineSeparator",null,function(i,o){if(i.doc.lineSep=o,!!o){var h=[],y=i.doc.first;i.doc.iter(function(S){for(var j=0;;){var W=S.text.indexOf(o,j);if(W==-1)break;j=W+o.length,h.push(pe(y,W))}y++});for(var b=h.length-1;b>=0;b--)Qs(i.doc,o,h[b],pe(h[b].line,h[b].ch+o.length))}}),s("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,function(i,o,h){i.state.specialChars=new RegExp(o.source+(o.test("	")?"":"|	"),"g"),h!=oo&&i.refresh()}),s("specialCharPlaceholder",Yd,function(i){return i.refresh()},!0),s("electricChars",!0),s("inputStyle",H?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),s("spellcheck",!1,function(i,o){return i.getInputField().spellcheck=o},!0),s("autocorrect",!1,function(i,o){return i.getInputField().autocorrect=o},!0),s("autocapitalize",!1,function(i,o){return i.getInputField().autocapitalize=o},!0),s("rtlMoveVisually",!ae),s("wholeLineUpdateBefore",!0),s("theme","default",function(i){Fu(i),Fr(i)},!0),s("keyMap","default",function(i,o,h){var y=Es(o),b=h!=oo&&Es(h);b&&b.detach&&b.detach(i,y),y.attach&&y.attach(i,b||null)}),s("extraKeys",null),s("configureMouse",null),s("lineWrapping",!1,Qc,!0),s("gutters",[],function(i,o){i.display.gutterSpecs=Lo(o,i.options.lineNumbers),Fr(i)},!0),s("fixedGutter",!0,function(i,o){i.display.gutters.style.left=o?_o(i.display)+"px":"0",i.refresh()},!0),s("coverGutterNextToScrollbar",!1,function(i){return Us(i)},!0),s("scrollbarStyle","native",function(i){bl(i),Us(i),i.display.scrollbars.setScrollTop(i.doc.scrollTop),i.display.scrollbars.setScrollLeft(i.doc.scrollLeft)},!0),s("lineNumbers",!1,function(i,o){i.display.gutterSpecs=Lo(i.options.gutters,o),Fr(i)},!0),s("firstLineNumber",1,Fr,!0),s("lineNumberFormatter",function(i){return i},Fr,!0),s("showCursorWhenSelecting",!1,Yr,!0),s("resetSelectionOnContextMenu",!0),s("lineWiseCopyCut",!0),s("pasteLinesPerSelection",!0),s("selectionsMayTouch",!1),s("readOnly",!1,function(i,o){o=="nocursor"&&(Wt(i),i.display.input.blur()),i.display.input.readOnlyChanged(o)}),s("screenReaderLabel",null,function(i,o){o=o===""?null:o,i.display.input.screenReaderLabelChanged(o)}),s("disableInput",!1,function(i,o){o||i.display.input.reset()},!0),s("dragDrop",!0,Xc),s("allowDropFileTypes",null),s("cursorBlinkRate",530),s("cursorScrollMargin",0),s("cursorHeight",1,Yr,!0),s("singleCursorHeightPerLine",!0,Yr,!0),s("workTime",100),s("workDelay",100),s("flattenSpans",!0,Gs,!0),s("addModeClass",!1,Gs,!0),s("pollInterval",100),s("undoDepth",200,function(i,o){return i.doc.history.undoDepth=o}),s("historyEventDelay",1250),s("viewportMargin",10,function(i){return i.refresh()},!0),s("maxHighlightLength",1e4,Gs,!0),s("moveInputWithCursor",!0,function(i,o){o||i.display.input.resetPosition()}),s("tabindex",null,function(i,o){return i.display.input.getField().tabIndex=o||""}),s("autofocus",null),s("direction","ltr",function(i,o){return i.doc.setDirection(o)},!0),s("phrases",null)}function Xc(e,n,s){var i=s&&s!=oo;if(!n!=!i){var o=e.display.dragFunctions,h=n?rt:tn;h(e.display.scroller,"dragstart",o.start),h(e.display.scroller,"dragenter",o.enter),h(e.display.scroller,"dragover",o.over),h(e.display.scroller,"dragleave",o.leave),h(e.display.scroller,"drop",o.drop)}}function Qc(e){e.options.lineWrapping?($(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Ie(e.display.wrapper,"CodeMirror-wrap"),da(e)),xa(e),sr(e),wo(e),setTimeout(function(){return Us(e)},100)}function en(e,n){var s=this;if(!(this instanceof en))return new en(e,n);this.options=n=n?Be(n):{},Be(Jc,n,!1);var i=n.value;typeof i=="string"?i=new Ot(i,n.mode,null,n.lineSeparator,n.direction):n.mode&&(i.modeOption=n.mode),this.doc=i;var o=new en.inputStyles[n.inputStyle](this),h=this.display=new wl(e,i,o,n);h.wrapper.CodeMirror=this,Fu(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),bl(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new et,keySeq:null,specialChars:null},n.autofocus&&!H&&h.input.focus(),w&&_<11&&setTimeout(function(){return s.display.input.reset(!0)},20),Zc(this),ku(),ws(this),this.curOp.forceUpdate=!0,rn(this,i),n.autofocus&&!H||this.hasFocus()?setTimeout(function(){s.hasFocus()&&!s.state.focused&&vl(s)},20):Wt(this);for(var y in er)er.hasOwnProperty(y)&&er[y](this,n[y],oo);gu(this),n.finishInit&&n.finishInit(this);for(var b=0;b<Ol.length;++b)Ol[b](this);Vr(this),N&&n.lineWrapping&&getComputedStyle(h.lineDiv).textRendering=="optimizelegibility"&&(h.lineDiv.style.textRendering="auto")}en.defaults=Jc,en.optionHandlers=er;function Zc(e){var n=e.display;rt(n.scroller,"mousedown",pn(e,Ba)),w&&_<11?rt(n.scroller,"dblclick",pn(e,function(S){if(!qt(e,S)){var j=gs(e,S);if(!(!j||Il(e,S)||$i(e.display,S))){bn(S);var W=e.findWordAt(j);Ra(e.doc,W.anchor,W.head)}}})):rt(n.scroller,"dblclick",function(S){return qt(e,S)||bn(S)}),rt(n.scroller,"contextmenu",function(S){return zu(e,S)}),rt(n.input.getField(),"contextmenu",function(S){n.scroller.contains(S.target)||zu(e,S)});var s,i={end:0};function o(){n.activeTouch&&(s=setTimeout(function(){return n.activeTouch=null},1e3),i=n.activeTouch,i.end=+new Date)}function h(S){if(S.touches.length!=1)return!1;var j=S.touches[0];return j.radiusX<=1&&j.radiusY<=1}function y(S,j){if(j.left==null)return!0;var W=j.left-S.left,G=j.top-S.top;return W*W+G*G>400}rt(n.scroller,"touchstart",function(S){if(!qt(e,S)&&!h(S)&&!Il(e,S)){n.input.ensurePolled(),clearTimeout(s);var j=+new Date;n.activeTouch={start:j,moved:!1,prev:j-i.end<=300?i:null},S.touches.length==1&&(n.activeTouch.left=S.touches[0].pageX,n.activeTouch.top=S.touches[0].pageY)}}),rt(n.scroller,"touchmove",function(){n.activeTouch&&(n.activeTouch.moved=!0)}),rt(n.scroller,"touchend",function(S){var j=n.activeTouch;if(j&&!$i(n,S)&&j.left!=null&&!j.moved&&new Date-j.start<300){var W=e.coordsChar(n.activeTouch,"page"),G;!j.prev||y(j,j.prev)?G=new At(W,W):!j.prev.prev||y(j,j.prev.prev)?G=e.findWordAt(W):G=new At(pe(W.line,0),gt(e.doc,pe(W.line+1,0))),e.setSelection(G.anchor,G.head),e.focus(),bn(S)}o()}),rt(n.scroller,"touchcancel",o),rt(n.scroller,"scroll",function(){n.scroller.clientHeight&&(xs(e,n.scroller.scrollTop),Vi(e,n.scroller.scrollLeft,!0),It(e,"scroll",e))}),rt(n.scroller,"mousewheel",function(S){return $s(e,S)}),rt(n.scroller,"DOMMouseScroll",function(S){return $s(e,S)}),rt(n.wrapper,"scroll",function(){return n.wrapper.scrollTop=n.wrapper.scrollLeft=0}),n.dragFunctions={enter:function(S){qt(e,S)||pr(S)},over:function(S){qt(e,S)||(hp(e,S),pr(S))},start:function(S){return Fa(e,S)},drop:pn(e,za),leave:function(S){qt(e,S)||Zn(e)}};var b=n.input.getField();rt(b,"keyup",function(S){return Au.call(e,S)}),rt(b,"keydown",pn(e,Pu)),rt(b,"keypress",pn(e,Wa)),rt(b,"focus",function(S){return vl(e,S)}),rt(b,"blur",function(S){return Wt(e,S)})}var Ol=[];en.defineInitHook=function(e){return Ol.push(e)};function ao(e,n,s,i){var o=e.doc,h;s==null&&(s="add"),s=="smart"&&(o.mode.indent?h=Nt(e,n).state:s="prev");var y=e.options.tabSize,b=Je(o,n),S=$e(b.text,null,y);b.stateAfter&&(b.stateAfter=null);var j=b.text.match(/^\s*/)[0],W;if(!i&&!/\S/.test(b.text))W=0,s="not";else if(s=="smart"&&(W=o.mode.indent(h,b.text.slice(j.length),b.text),W==Yt||W>150)){if(!i)return;s="prev"}s=="prev"?n>o.first?W=$e(Je(o,n-1).text,null,y):W=0:s=="add"?W=S+e.options.indentUnit:s=="subtract"?W=S-e.options.indentUnit:typeof s=="number"&&(W=S+s),W=Math.max(0,W);var G="",ie=0;if(e.options.indentWithTabs)for(var te=Math.floor(W/y);te;--te)ie+=y,G+="	";if(ie<W&&(G+=yt(W-ie)),G!=j)return Qs(o,G,pe(n,0),pe(n,j.length),"+input"),b.stateAfter=null,!0;for(var ye=0;ye<o.sel.ranges.length;ye++){var ke=o.sel.ranges[ye];if(ke.head.line==n&&ke.head.ch<j.length){var Pe=pe(n,j.length);Io(o,ye,new At(Pe,Pe));break}}}var Zr=null;function Ko(e){Zr=e}function Dl(e,n,s,i,o){var h=e.doc;e.display.shift=!1,i||(i=h.sel);var y=+new Date-200,b=o=="paste"||e.state.pasteIncoming>y,S=jr(n),j=null;if(b&&i.ranges.length>1)if(Zr&&Zr.text.join(`
`)==n){if(i.ranges.length%Zr.text.length==0){j=[];for(var W=0;W<Zr.text.length;W++)j.push(h.splitLines(Zr.text[W]))}}else S.length==i.ranges.length&&e.options.pasteLinesPerSelection&&(j=ut(S,function(Ne){return[Ne]}));for(var G=e.curOp.updateInput,ie=i.ranges.length-1;ie>=0;ie--){var te=i.ranges[ie],ye=te.from(),ke=te.to();te.empty()&&(s&&s>0?ye=pe(ye.line,ye.ch-s):e.state.overwrite&&!b?ke=pe(ke.line,Math.min(Je(h,ke.line).text.length,ke.ch+Qe(S).length)):b&&Zr&&Zr.lineWise&&Zr.text.join(`
`)==S.join(`
`)&&(ye=ke=pe(ye.line,0)));var Pe={from:ye,to:ke,text:j?j[ie%j.length]:S,origin:o||(b?"paste":e.state.cutIncoming>y?"cut":"+input")};Xs(e.doc,Pe),Mn(e,"inputRead",e,Pe)}n&&!b&&Ml(e,n),Hs(e),e.curOp.updateInput<2&&(e.curOp.updateInput=G),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Wu(e,n){var s=e.clipboardData&&e.clipboardData.getData("Text");if(s)return e.preventDefault(),!n.isReadOnly()&&!n.options.disableInput&&n.hasFocus()&&Ln(n,function(){return Dl(n,s,0,null,"paste")}),!0}function Ml(e,n){if(!(!e.options.electricChars||!e.options.smartIndent))for(var s=e.doc.sel,i=s.ranges.length-1;i>=0;i--){var o=s.ranges[i];if(!(o.head.ch>100||i&&s.ranges[i-1].head.line==o.head.line)){var h=e.getModeAt(o.head),y=!1;if(h.electricChars){for(var b=0;b<h.electricChars.length;b++)if(n.indexOf(h.electricChars.charAt(b))>-1){y=ao(e,o.head.line,"smart");break}}else h.electricInput&&h.electricInput.test(Je(e.doc,o.head.line).text.slice(0,o.head.ch))&&(y=ao(e,o.head.line,"smart"));y&&Mn(e,"electricInput",e,o.head.line)}}}function zl(e){for(var n=[],s=[],i=0;i<e.doc.sel.ranges.length;i++){var o=e.doc.sel.ranges[i].head.line,h={anchor:pe(o,0),head:pe(o+1,0)};s.push(h),n.push(e.getRange(h.anchor,h.head))}return{text:n,ranges:s}}function Fl(e,n,s,i){e.setAttribute("autocorrect",s?"on":"off"),e.setAttribute("autocapitalize",i?"on":"off"),e.setAttribute("spellcheck",!!n)}function Wl(){var e=A("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),n=A("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return N?e.style.width="1000px":e.setAttribute("wrap","off"),z&&(e.style.border="1px solid black"),n}function Hl(e){var n=e.optionHandlers,s=e.helpers={};e.prototype={constructor:e,focus:function(){Oe(this).focus(),this.display.input.focus()},setOption:function(i,o){var h=this.options,y=h[i];h[i]==o&&i!="mode"||(h[i]=o,n.hasOwnProperty(i)&&pn(this,n[i])(this,o,y),It(this,"optionChange",this,i))},getOption:function(i){return this.options[i]},getDoc:function(){return this.doc},addKeyMap:function(i,o){this.state.keyMaps[o?"push":"unshift"](Es(i))},removeKeyMap:function(i){for(var o=this.state.keyMaps,h=0;h<o.length;++h)if(o[h]==i||o[h].name==i)return o.splice(h,1),!0},addOverlay:Cn(function(i,o){var h=i.token?i:e.getMode(this.options,i);if(h.startState)throw new Error("Overlays may not be stateful.");oe(this.state.overlays,{mode:h,modeSpec:i,opaque:o&&o.opaque,priority:o&&o.priority||0},function(y){return y.priority}),this.state.modeGen++,sr(this)}),removeOverlay:Cn(function(i){for(var o=this.state.overlays,h=0;h<o.length;++h){var y=o[h].modeSpec;if(y==i||typeof i=="string"&&y.name==i){o.splice(h,1),this.state.modeGen++,sr(this);return}}}),indentLine:Cn(function(i,o,h){typeof o!="string"&&typeof o!="number"&&(o==null?o=this.options.smartIndent?"smart":"prev":o=o?"add":"subtract"),ge(this.doc,i)&&ao(this,i,o,h)}),indentSelection:Cn(function(i){for(var o=this.doc.sel.ranges,h=-1,y=0;y<o.length;y++){var b=o[y];if(b.empty())b.head.line>h&&(ao(this,b.head.line,i,!0),h=b.head.line,y==this.doc.sel.primIndex&&Hs(this));else{var S=b.from(),j=b.to(),W=Math.max(h,S.line);h=Math.min(this.lastLine(),j.line-(j.ch?0:1))+1;for(var G=W;G<h;++G)ao(this,G,i);var ie=this.doc.sel.ranges;S.ch==0&&o.length==ie.length&&ie[y].from().ch>0&&Io(this.doc,y,new At(S,ie[y].to()),Ct)}}}),getTokenAt:function(i,o){return bi(this,i,o)},getLineTokens:function(i,o){return bi(this,pe(i),o,!0)},getTokenTypeAt:function(i){i=gt(this.doc,i);var o=Hi(this,Je(this.doc,i.line)),h=0,y=(o.length-1)/2,b=i.ch,S;if(b==0)S=o[2];else for(;;){var j=h+y>>1;if((j?o[j*2-1]:0)>=b)y=j;else if(o[j*2+1]<b)h=j+1;else{S=o[j*2+2];break}}var W=S?S.indexOf("overlay "):-1;return W<0?S:W==0?null:S.slice(0,W-1)},getModeAt:function(i){var o=this.doc.mode;return o.innerMode?e.innerMode(o,this.getTokenAt(i).state).mode:o},getHelper:function(i,o){return this.getHelpers(i,o)[0]},getHelpers:function(i,o){var h=[];if(!s.hasOwnProperty(o))return h;var y=s[o],b=this.getModeAt(i);if(typeof b[o]=="string")y[b[o]]&&h.push(y[b[o]]);else if(b[o])for(var S=0;S<b[o].length;S++){var j=y[b[o][S]];j&&h.push(j)}else b.helperType&&y[b.helperType]?h.push(y[b.helperType]):y[b.name]&&h.push(y[b.name]);for(var W=0;W<y._global.length;W++){var G=y._global[W];G.pred(b,this)&&Ke(h,G.val)==-1&&h.push(G.val)}return h},getStateAfter:function(i,o){var h=this.doc;return i=il(h,i??h.first+h.size-1),Nt(this,i+1,o).state},cursorCoords:function(i,o){var h,y=this.doc.sel.primary();return i==null?h=y.head:typeof i=="object"?h=gt(this.doc,i):h=i?y.from():y.to(),_n(this,h,o||"page")},charCoords:function(i,o){return dl(this,gt(this.doc,i),o||"page")},coordsChar:function(i,o){return i=jc(this,i,o||"page"),hl(this,i.left,i.top)},lineAtHeight:function(i,o){return i=jc(this,{top:i,left:0},o||"page").top,K(this.doc,i+this.display.viewOffset)},heightAtLine:function(i,o,h){var y=!1,b;if(typeof i=="number"){var S=this.doc.first+this.doc.size-1;i<this.doc.first?i=this.doc.first:i>S&&(i=S,y=!0),b=Je(this.doc,i)}else b=i;return cl(this,b,{top:0,left:0},o||"page",h||y).top+(y?this.doc.height-Sn(b):0)},defaultTextHeight:function(){return _i(this.display)},defaultCharWidth:function(){return ms(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(i,o,h,y,b){var S=this.display;i=_n(this,gt(this.doc,i));var j=i.bottom,W=i.left;if(o.style.position="absolute",o.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(o),S.sizer.appendChild(o),y=="over")j=i.top;else if(y=="above"||y=="near"){var G=Math.max(S.wrapper.clientHeight,this.doc.height),ie=Math.max(S.sizer.clientWidth,S.lineSpace.clientWidth);(y=="above"||i.bottom+o.offsetHeight>G)&&i.top>o.offsetHeight?j=i.top-o.offsetHeight:i.bottom+o.offsetHeight<=G&&(j=i.bottom),W+o.offsetWidth>ie&&(W=ie-o.offsetWidth)}o.style.top=j+"px",o.style.left=o.style.right="",b=="right"?(W=S.sizer.clientWidth-o.offsetWidth,o.style.right="0px"):(b=="left"?W=0:b=="middle"&&(W=(S.sizer.clientWidth-o.offsetWidth)/2),o.style.left=W+"px"),h&&Sa(this,{left:W,top:j,right:W+o.offsetWidth,bottom:j+o.offsetHeight})},triggerOnKeyDown:Cn(Pu),triggerOnKeyPress:Cn(Wa),triggerOnKeyUp:Au,triggerOnMouseDown:Cn(Ba),execCommand:function(i){if(Uo.hasOwnProperty(i))return Uo[i].call(null,this)},triggerElectric:Cn(function(i){Ml(this,i)}),findPosH:function(i,o,h,y){var b=1;o<0&&(b=-1,o=-o);for(var S=gt(this.doc,i),j=0;j<o&&(S=Hu(this.doc,S,b,h,y),!S.hitSide);++j);return S},moveH:Cn(function(i,o){var h=this;this.extendSelectionsBy(function(y){return h.display.shift||h.doc.extend||y.empty()?Hu(h.doc,y.head,i,o,h.options.rtlMoveVisually):i<0?y.from():y.to()},tt)}),deleteH:Cn(function(i,o){var h=this.doc.sel,y=this.doc;h.somethingSelected()?y.replaceSelection("",null,"+delete"):io(this,function(b){var S=Hu(y,b.head,i,o,!1);return i<0?{from:S,to:b.head}:{from:b.head,to:S}})}),findPosV:function(i,o,h,y){var b=1,S=y;o<0&&(b=-1,o=-o);for(var j=gt(this.doc,i),W=0;W<o;++W){var G=_n(this,j,"div");if(S==null?S=G.left:G.left=S,j=Bu(this,G,b,h),j.hitSide)break}return j},moveV:Cn(function(i,o){var h=this,y=this.doc,b=[],S=!this.display.shift&&!y.extend&&y.sel.somethingSelected();if(y.extendSelectionsBy(function(W){if(S)return i<0?W.from():W.to();var G=_n(h,W.head,"div");W.goalColumn!=null&&(G.left=W.goalColumn),b.push(G.left);var ie=Bu(h,G,i,o);return o=="page"&&W==y.sel.primary()&&vs(h,dl(h,ie,"div").top-G.top),ie},tt),b.length)for(var j=0;j<y.sel.ranges.length;j++)y.sel.ranges[j].goalColumn=b[j]}),findWordAt:function(i){var o=this.doc,h=Je(o,i.line).text,y=i.ch,b=i.ch;if(h){var S=this.getHelper(i,"wordChars");(i.sticky=="before"||b==h.length)&&y?--y:++b;for(var j=h.charAt(y),W=ot(j,S)?function(G){return ot(G,S)}:/\s/.test(j)?function(G){return/\s/.test(G)}:function(G){return!/\s/.test(G)&&!ot(G)};y>0&&W(h.charAt(y-1));)--y;for(;b<h.length&&W(h.charAt(b));)++b}return new At(pe(i.line,y),pe(i.line,b))},toggleOverwrite:function(i){i!=null&&i==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?$(this.display.cursorDiv,"CodeMirror-overwrite"):Ie(this.display.cursorDiv,"CodeMirror-overwrite"),It(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==P(ze(this))},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:Cn(function(i,o){_a(this,i,o)}),getScrollInfo:function(){var i=this.display.scroller;return{left:i.scrollLeft,top:i.scrollTop,height:i.scrollHeight-ai(this)-this.display.barHeight,width:i.scrollWidth-ai(this)-this.display.barWidth,clientHeight:fs(this),clientWidth:hs(this)}},scrollIntoView:Cn(function(i,o){i==null?(i={from:this.doc.sel.primary().head,to:null},o==null&&(o=this.options.cursorScrollMargin)):typeof i=="number"?i={from:pe(i,0),to:null}:i.from==null&&(i={from:i,to:null}),i.to||(i.to=i.from),i.margin=o||0,i.from.line!=null?cp(this,i):Ta(this,i.from,i.to,i.margin)}),setSize:Cn(function(i,o){var h=this,y=function(S){return typeof S=="number"||/^\d+$/.test(String(S))?S+"px":S};i!=null&&(this.display.wrapper.style.width=y(i)),o!=null&&(this.display.wrapper.style.height=y(o)),this.options.lineWrapping&&au(this);var b=this.display.viewFrom;this.doc.iter(b,this.display.viewTo,function(S){if(S.widgets){for(var j=0;j<S.widgets.length;j++)if(S.widgets[j].noHScroll){Gi(h,b,"widget");break}}++b}),this.curOp.forceUpdate=!0,It(this,"refresh",this)}),operation:function(i){return Ln(this,i)},startOperation:function(){return ws(this)},endOperation:function(){return Vr(this)},refresh:Cn(function(){var i=this.display.cachedTextHeight;sr(this),this.curOp.forceUpdate=!0,wo(this),_a(this,this.doc.scrollLeft,this.doc.scrollTop),or(this.display),(i==null||Math.abs(i-_i(this.display))>.5||this.options.lineWrapping)&&xa(this),It(this,"refresh",this)}),swapDoc:Cn(function(i){var o=this.doc;return o.cm=null,this.state.selectingText&&this.state.selectingText(),rn(this,i),wo(this),this.display.input.reset(),_a(this,i.scrollLeft,i.scrollTop),this.curOp.forceScroll=!0,Mn(this,"swapDoc",this,o),o}),phrase:function(i){var o=this.options.phrases;return o&&Object.prototype.hasOwnProperty.call(o,i)?o[i]:i},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Nn(e),e.registerHelper=function(i,o,h){s.hasOwnProperty(i)||(s[i]=e[i]={_global:[]}),s[i][o]=h},e.registerGlobalHelper=function(i,o,h,y){e.registerHelper(i,o,y),s[i]._global.push({pred:h,val:y})}}function Hu(e,n,s,i,o){var h=n,y=s,b=Je(e,n.line),S=o&&e.direction=="rtl"?-s:s;function j(){var Fe=n.line+S;return Fe<e.first||Fe>=e.first+e.size?!1:(n=new pe(Fe,n.ch,n.sticky),b=Je(e,Fe))}function W(Fe){var Me;if(i=="codepoint"){var Ge=b.text.charCodeAt(n.ch+(s>0?0:-1));if(isNaN(Ge))Me=null;else{var at=s>0?Ge>=55296&&Ge<56320:Ge>=56320&&Ge<57343;Me=new pe(n.line,Math.max(0,Math.min(b.text.length,n.ch+s*(at?2:1))),-s)}}else o?Me=Tu(e.cm,b,n,s):Me=Bo(b,n,s);if(Me==null)if(!Fe&&j())n=Rl(o,e.cm,b,n.line,S);else return!1;else n=Me;return!0}if(i=="char"||i=="codepoint")W();else if(i=="column")W(!0);else if(i=="word"||i=="group")for(var G=null,ie=i=="group",te=e.cm&&e.cm.getHelper(n,"wordChars"),ye=!0;!(s<0&&!W(!ye));ye=!1){var ke=b.text.charAt(n.ch)||`
`,Pe=ot(ke,te)?"w":ie&&ke==`
`?"n":!ie||/\s/.test(ke)?null:"p";if(ie&&!ye&&!Pe&&(Pe="s"),G&&G!=Pe){s<0&&(s=1,W(),n.sticky="after");break}if(Pe&&(G=Pe),s>0&&!W(!ye))break}var Ne=Oa(e,n,h,y,!0);return jt(h,Ne)&&(Ne.hitSide=!0),Ne}function Bu(e,n,s,i){var o=e.doc,h=n.left,y;if(i=="page"){var b=Math.min(e.display.wrapper.clientHeight,Oe(e).innerHeight||o(e).documentElement.clientHeight),S=Math.max(b-.5*_i(e.display),3);y=(s>0?n.bottom:n.top)+s*S}else i=="line"&&(y=s>0?n.bottom+3:n.top-3);for(var j;j=hl(e,h,y),!!j.outside;){if(s<0?y<=0:y>=o.height){j.hitSide=!0;break}y+=s*5}return j}var Dt=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new et,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};Dt.prototype.init=function(e){var n=this,s=this,i=s.cm,o=s.div=e.lineDiv;o.contentEditable=!0,Fl(o,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize);function h(b){for(var S=b.target;S;S=S.parentNode){if(S==o)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(S.className))break}return!1}rt(o,"paste",function(b){!h(b)||qt(i,b)||Wu(b,i)||_<=11&&setTimeout(pn(i,function(){return n.updateFromDOM()}),20)}),rt(o,"compositionstart",function(b){n.composing={data:b.data,done:!1}}),rt(o,"compositionupdate",function(b){n.composing||(n.composing={data:b.data,done:!1})}),rt(o,"compositionend",function(b){n.composing&&(b.data!=n.composing.data&&n.readFromDOMSoon(),n.composing.done=!0)}),rt(o,"touchstart",function(){return s.forceCompositionEnd()}),rt(o,"input",function(){n.composing||n.readFromDOMSoon()});function y(b){if(!(!h(b)||qt(i,b))){if(i.somethingSelected())Ko({lineWise:!1,text:i.getSelections()}),b.type=="cut"&&i.replaceSelection("",null,"cut");else if(i.options.lineWiseCopyCut){var S=zl(i);Ko({lineWise:!0,text:S.text}),b.type=="cut"&&i.operation(function(){i.setSelections(S.ranges,0,Ct),i.replaceSelection("",null,"cut")})}else return;if(b.clipboardData){b.clipboardData.clearData();var j=Zr.text.join(`
`);if(b.clipboardData.setData("Text",j),b.clipboardData.getData("Text")==j){b.preventDefault();return}}var W=Wl(),G=W.firstChild;Fl(G),i.display.lineSpace.insertBefore(W,i.display.lineSpace.firstChild),G.value=Zr.text.join(`
`);var ie=P(qe(o));Z(G),setTimeout(function(){i.display.lineSpace.removeChild(W),ie.focus(),ie==o&&s.showPrimarySelection()},50)}}rt(o,"copy",y),rt(o,"cut",y)},Dt.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Dt.prototype.prepareSelection=function(){var e=ml(this.cm,!1);return e.focus=P(qe(this.div))==this.div,e},Dt.prototype.showSelection=function(e,n){!e||!this.cm.display.view.length||((e.focus||n)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Dt.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Dt.prototype.showPrimarySelection=function(){var e=this.getSelection(),n=this.cm,s=n.doc.sel.primary(),i=s.from(),o=s.to();if(n.display.viewTo==n.display.viewFrom||i.line>=n.display.viewTo||o.line<n.display.viewFrom){e.removeAllRanges();return}var h=Ua(n,e.anchorNode,e.anchorOffset),y=Ua(n,e.focusNode,e.focusOffset);if(!(h&&!h.bad&&y&&!y.bad&&He(Kr(h,y),i)==0&&He(kn(h,y),o)==0)){var b=n.display.view,S=i.line>=n.display.viewFrom&&Uu(n,i)||{node:b[0].measure.map[2],offset:0},j=o.line<n.display.viewTo&&Uu(n,o);if(!j){var W=b[b.length-1].measure,G=W.maps?W.maps[W.maps.length-1]:W.map;j={node:G[G.length-1],offset:G[G.length-2]-G[G.length-3]}}if(!S||!j){e.removeAllRanges();return}var ie=e.rangeCount&&e.getRangeAt(0),te;try{te=q(S.node,S.offset,j.offset,j.node)}catch{}te&&(!g&&n.state.focused?(e.collapse(S.node,S.offset),te.collapsed||(e.removeAllRanges(),e.addRange(te))):(e.removeAllRanges(),e.addRange(te)),ie&&e.anchorNode==null?e.addRange(ie):g&&this.startGracePeriod()),this.rememberSelection()}},Dt.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Dt.prototype.showMultipleSelections=function(e){fe(this.cm.display.cursorDiv,e.cursors),fe(this.cm.display.selectionDiv,e.selection)},Dt.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Dt.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var n=e.getRangeAt(0).commonAncestorContainer;return T(this.div,n)},Dt.prototype.focus=function(){this.cm.options.readOnly!="nocursor"&&((!this.selectionInEditor()||P(qe(this.div))!=this.div)&&this.showSelection(this.prepareSelection(),!0),this.div.focus())},Dt.prototype.blur=function(){this.div.blur()},Dt.prototype.getField=function(){return this.div},Dt.prototype.supportsTouch=function(){return!0},Dt.prototype.receivedFocus=function(){var e=this,n=this;this.selectionInEditor()?setTimeout(function(){return e.pollSelection()},20):Ln(this.cm,function(){return n.cm.curOp.selectionChanged=!0});function s(){n.cm.state.focused&&(n.pollSelection(),n.polling.set(n.cm.options.pollInterval,s))}this.polling.set(this.cm.options.pollInterval,s)},Dt.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Dt.prototype.pollSelection=function(){if(!(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged())){var e=this.getSelection(),n=this.cm;if(B&&L&&this.cm.display.gutterSpecs.length&&Bl(e.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();return}if(!this.composing){this.rememberSelection();var s=Ua(n,e.anchorNode,e.anchorOffset),i=Ua(n,e.focusNode,e.focusOffset);s&&i&&Ln(n,function(){Wn(n.doc,zn(s,i),Ct),(s.bad||i.bad)&&(n.curOp.selectionChanged=!0)})}}},Dt.prototype.pollContent=function(){this.readDOMTimeout!=null&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e=this.cm,n=e.display,s=e.doc.sel.primary(),i=s.from(),o=s.to();if(i.ch==0&&i.line>e.firstLine()&&(i=pe(i.line-1,Je(e.doc,i.line-1).length)),o.ch==Je(e.doc,o.line).text.length&&o.line<e.lastLine()&&(o=pe(o.line+1,0)),i.line<n.viewFrom||o.line>n.viewTo-1)return!1;var h,y,b;i.line==n.viewFrom||(h=Ci(e,i.line))==0?(y=E(n.view[0].line),b=n.view[0].node):(y=E(n.view[h].line),b=n.view[h-1].node.nextSibling);var S=Ci(e,o.line),j,W;if(S==n.view.length-1?(j=n.viewTo-1,W=n.lineDiv.lastChild):(j=E(n.view[S+1].line)-1,W=n.view[S+1].node.previousSibling),!b)return!1;for(var G=e.doc.splitLines(gp(e,b,W,y,j)),ie=si(e.doc,pe(y,0),pe(j,Je(e.doc,j).text.length));G.length>1&&ie.length>1;)if(Qe(G)==Qe(ie))G.pop(),ie.pop(),j--;else if(G[0]==ie[0])G.shift(),ie.shift(),y++;else break;for(var te=0,ye=0,ke=G[0],Pe=ie[0],Ne=Math.min(ke.length,Pe.length);te<Ne&&ke.charCodeAt(te)==Pe.charCodeAt(te);)++te;for(var Fe=Qe(G),Me=Qe(ie),Ge=Math.min(Fe.length-(G.length==1?te:0),Me.length-(ie.length==1?te:0));ye<Ge&&Fe.charCodeAt(Fe.length-ye-1)==Me.charCodeAt(Me.length-ye-1);)++ye;if(G.length==1&&ie.length==1&&y==i.line)for(;te&&te>i.ch&&Fe.charCodeAt(Fe.length-ye-1)==Me.charCodeAt(Me.length-ye-1);)te--,ye++;G[G.length-1]=Fe.slice(0,Fe.length-ye).replace(/^\u200b+/,""),G[0]=G[0].slice(te).replace(/\u200b+$/,"");var at=pe(y,te),Ve=pe(j,ie.length?Qe(ie).length-ye:0);if(G.length>1||G[0]||He(at,Ve))return Qs(e.doc,G,at,Ve,"+input"),!0},Dt.prototype.ensurePolled=function(){this.forceCompositionEnd()},Dt.prototype.reset=function(){this.forceCompositionEnd()},Dt.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Dt.prototype.readFromDOMSoon=function(){var e=this;this.readDOMTimeout==null&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing)if(e.composing.done)e.composing=null;else return;e.updateFromDOM()},80))},Dt.prototype.updateFromDOM=function(){var e=this;(this.cm.isReadOnly()||!this.pollContent())&&Ln(this.cm,function(){return sr(e.cm)})},Dt.prototype.setUneditable=function(e){e.contentEditable="false"},Dt.prototype.onKeyPress=function(e){e.charCode==0||this.composing||(e.preventDefault(),this.cm.isReadOnly()||pn(this.cm,Dl)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0))},Dt.prototype.readOnlyChanged=function(e){this.div.contentEditable=String(e!="nocursor")},Dt.prototype.onContextMenu=function(){},Dt.prototype.resetPosition=function(){},Dt.prototype.needsContentAttribute=!0;function Uu(e,n){var s=ll(e,n.line);if(!s||s.hidden)return null;var i=Je(e.doc,n.line),o=Sc(s,i,n.line),h=bt(i,e.doc.direction),y="left";if(h){var b=Ur(h,n.ch);y=b%2?"right":"left"}var S=ya(o.map,n.ch,y);return S.offset=S.collapse=="right"?S.end:S.start,S}function Bl(e){for(var n=e;n;n=n.parentNode)if(/CodeMirror-gutter-wrapper/.test(n.className))return!0;return!1}function Ar(e,n){return n&&(e.bad=!0),e}function gp(e,n,s,i,o){var h="",y=!1,b=e.doc.lineSeparator(),S=!1;function j(te){return function(ye){return ye.id==te}}function W(){y&&(h+=b,S&&(h+=b),y=S=!1)}function G(te){te&&(W(),h+=te)}function ie(te){if(te.nodeType==1){var ye=te.getAttribute("cm-text");if(ye){G(ye);return}var ke=te.getAttribute("cm-marker"),Pe;if(ke){var Ne=e.findMarks(pe(i,0),pe(o+1,0),j(+ke));Ne.length&&(Pe=Ne[0].find(0))&&G(si(e.doc,Pe.from,Pe.to).join(b));return}if(te.getAttribute("contenteditable")=="false")return;var Fe=/^(pre|div|p|li|table|br)$/i.test(te.nodeName);if(!/^br$/i.test(te.nodeName)&&te.textContent.length==0)return;Fe&&W();for(var Me=0;Me<te.childNodes.length;Me++)ie(te.childNodes[Me]);/^(pre|p)$/i.test(te.nodeName)&&(S=!0),Fe&&(y=!0)}else te.nodeType==3&&G(te.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;ie(n),n!=s;)n=n.nextSibling,S=!1;return h}function Ua(e,n,s){var i;if(n==e.display.lineDiv){if(i=e.display.lineDiv.childNodes[s],!i)return Ar(e.clipPos(pe(e.display.viewTo-1)),!0);n=null,s=0}else for(i=n;;i=i.parentNode){if(!i||i==e.display.lineDiv)return null;if(i.parentNode&&i.parentNode==e.display.lineDiv)break}for(var o=0;o<e.display.view.length;o++){var h=e.display.view[o];if(h.node==i)return qu(h,n,s)}}function qu(e,n,s){var i=e.text.firstChild,o=!1;if(!n||!T(i,n))return Ar(pe(E(e.line),0),!0);if(n==i&&(o=!0,n=i.childNodes[s],s=0,!n)){var h=e.rest?Qe(e.rest):e.line;return Ar(pe(E(h),h.text.length),o)}var y=n.nodeType==3?n:null,b=n;for(!y&&n.childNodes.length==1&&n.firstChild.nodeType==3&&(y=n.firstChild,s&&(s=y.nodeValue.length));b.parentNode!=i;)b=b.parentNode;var S=e.measure,j=S.maps;function W(Pe,Ne,Fe){for(var Me=-1;Me<(j?j.length:0);Me++)for(var Ge=Me<0?S.map:j[Me],at=0;at<Ge.length;at+=3){var Ve=Ge[at+2];if(Ve==Pe||Ve==Ne){var St=E(Me<0?e.line:e.rest[Me]),Et=Ge[at]+Fe;return(Fe<0||Ve!=Pe)&&(Et=Ge[at+(Fe?1:0)]),pe(St,Et)}}}var G=W(y,b,s);if(G)return Ar(G,o);for(var ie=b.nextSibling,te=y?y.nodeValue.length-s:0;ie;ie=ie.nextSibling){if(G=W(ie,ie.firstChild,0),G)return Ar(pe(G.line,G.ch-te),o);te+=ie.textContent.length}for(var ye=b.previousSibling,ke=s;ye;ye=ye.previousSibling){if(G=W(ye,ye.firstChild,-1),G)return Ar(pe(G.line,G.ch+ke),o);ke+=ye.textContent.length}}var fn=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new et,this.hasSelection=!1,this.composing=null,this.resetting=!1};fn.prototype.init=function(e){var n=this,s=this,i=this.cm;this.createField(e);var o=this.textarea;e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),z&&(o.style.width="0px"),rt(o,"input",function(){w&&_>=9&&n.hasSelection&&(n.hasSelection=null),s.poll()}),rt(o,"paste",function(y){qt(i,y)||Wu(y,i)||(i.state.pasteIncoming=+new Date,s.fastPoll())});function h(y){if(!qt(i,y)){if(i.somethingSelected())Ko({lineWise:!1,text:i.getSelections()});else if(i.options.lineWiseCopyCut){var b=zl(i);Ko({lineWise:!0,text:b.text}),y.type=="cut"?i.setSelections(b.ranges,null,Ct):(s.prevInput="",o.value=b.text.join(`
`),Z(o))}else return;y.type=="cut"&&(i.state.cutIncoming=+new Date)}}rt(o,"cut",h),rt(o,"copy",h),rt(e.scroller,"paste",function(y){if(!($i(e,y)||qt(i,y))){if(!o.dispatchEvent){i.state.pasteIncoming=+new Date,s.focus();return}var b=new Event("paste");b.clipboardData=y.clipboardData,o.dispatchEvent(b)}}),rt(e.lineSpace,"selectstart",function(y){$i(e,y)||bn(y)}),rt(o,"compositionstart",function(){var y=i.getCursor("from");s.composing&&s.composing.range.clear(),s.composing={start:y,range:i.markText(y,i.getCursor("to"),{className:"CodeMirror-composing"})}}),rt(o,"compositionend",function(){s.composing&&(s.poll(),s.composing.range.clear(),s.composing=null)})},fn.prototype.createField=function(e){this.wrapper=Wl(),this.textarea=this.wrapper.firstChild;var n=this.cm.options;Fl(this.textarea,n.spellcheck,n.autocorrect,n.autocapitalize)},fn.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},fn.prototype.prepareSelection=function(){var e=this.cm,n=e.display,s=e.doc,i=ml(e);if(e.options.moveInputWithCursor){var o=_n(e,s.sel.primary().head,"div"),h=n.wrapper.getBoundingClientRect(),y=n.lineDiv.getBoundingClientRect();i.teTop=Math.max(0,Math.min(n.wrapper.clientHeight-10,o.top+y.top-h.top)),i.teLeft=Math.max(0,Math.min(n.wrapper.clientWidth-10,o.left+y.left-h.left))}return i},fn.prototype.showSelection=function(e){var n=this.cm,s=n.display;fe(s.cursorDiv,e.cursors),fe(s.selectionDiv,e.selection),e.teTop!=null&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},fn.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var n=this.cm;if(this.resetting=!0,n.somethingSelected()){this.prevInput="";var s=n.getSelection();this.textarea.value=s,n.state.focused&&Z(this.textarea),w&&_>=9&&(this.hasSelection=s)}else e||(this.prevInput=this.textarea.value="",w&&_>=9&&(this.hasSelection=null));this.resetting=!1}},fn.prototype.getField=function(){return this.textarea},fn.prototype.supportsTouch=function(){return!1},fn.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!H||P(qe(this.textarea))!=this.textarea))try{this.textarea.focus()}catch{}},fn.prototype.blur=function(){this.textarea.blur()},fn.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},fn.prototype.receivedFocus=function(){this.slowPoll()},fn.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},fn.prototype.fastPoll=function(){var e=!1,n=this;n.pollingFast=!0;function s(){var i=n.poll();!i&&!e?(e=!0,n.polling.set(60,s)):(n.pollingFast=!1,n.slowPoll())}n.polling.set(20,s)},fn.prototype.poll=function(){var e=this,n=this.cm,s=this.textarea,i=this.prevInput;if(this.contextMenuPending||this.resetting||!n.state.focused||yi(s)&&!i&&!this.composing||n.isReadOnly()||n.options.disableInput||n.state.keySeq)return!1;var o=s.value;if(o==i&&!n.somethingSelected())return!1;if(w&&_>=9&&this.hasSelection===o||J&&/[\uf700-\uf7ff]/.test(o))return n.display.input.reset(),!1;if(n.doc.sel==n.display.selForContextMenu){var h=o.charCodeAt(0);if(h==8203&&!i&&(i="​"),h==8666)return this.reset(),this.cm.execCommand("undo")}for(var y=0,b=Math.min(i.length,o.length);y<b&&i.charCodeAt(y)==o.charCodeAt(y);)++y;return Ln(n,function(){Dl(n,o.slice(y),i.length-y,null,e.composing?"*compose":null),o.length>1e3||o.indexOf(`
`)>-1?s.value=e.prevInput="":e.prevInput=o,e.composing&&(e.composing.range.clear(),e.composing.range=n.markText(e.composing.start,n.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},fn.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},fn.prototype.onKeyPress=function(){w&&_>=9&&(this.hasSelection=null),this.fastPoll()},fn.prototype.onContextMenu=function(e){var n=this,s=n.cm,i=s.display,o=n.textarea;n.contextMenuPending&&n.contextMenuPending();var h=gs(s,e),y=i.scroller.scrollTop;if(!h||U)return;var b=s.options.resetSelectionOnContextMenu;b&&s.doc.sel.contains(h)==-1&&pn(s,Wn)(s.doc,zn(h),Ct);var S=o.style.cssText,j=n.wrapper.style.cssText,W=n.wrapper.offsetParent.getBoundingClientRect();n.wrapper.style.cssText="position: static",o.style.cssText=`position: absolute; width: 30px; height: 30px;
      top: `+(e.clientY-W.top-5)+"px; left: "+(e.clientX-W.left-5)+`px;
      z-index: 1000; background: `+(w?"rgba(255, 255, 255, .05)":"transparent")+`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;var G;N&&(G=o.ownerDocument.defaultView.scrollY),i.input.focus(),N&&o.ownerDocument.defaultView.scrollTo(null,G),i.input.reset(),s.somethingSelected()||(o.value=n.prevInput=" "),n.contextMenuPending=te,i.selForContextMenu=s.doc.sel,clearTimeout(i.detectingSelectAll);function ie(){if(o.selectionStart!=null){var ke=s.somethingSelected(),Pe="​"+(ke?o.value:"");o.value="⇚",o.value=Pe,n.prevInput=ke?"":"​",o.selectionStart=1,o.selectionEnd=Pe.length,i.selForContextMenu=s.doc.sel}}function te(){if(n.contextMenuPending==te&&(n.contextMenuPending=!1,n.wrapper.style.cssText=j,o.style.cssText=S,w&&_<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=y),o.selectionStart!=null)){(!w||w&&_<9)&&ie();var ke=0,Pe=function(){i.selForContextMenu==s.doc.sel&&o.selectionStart==0&&o.selectionEnd>0&&n.prevInput=="​"?pn(s,Zi)(s):ke++<10?i.detectingSelectAll=setTimeout(Pe,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(Pe,200)}}if(w&&_>=9&&ie(),xe){pr(e);var ye=function(){tn(window,"mouseup",ye),setTimeout(te,20)};rt(window,"mouseup",ye)}else setTimeout(te,50)},fn.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled=e=="nocursor",this.textarea.readOnly=!!e},fn.prototype.setUneditable=function(){},fn.prototype.needsContentAttribute=!1;function ed(e,n){if(n=n?Be(n):{},n.value=e.value,!n.tabindex&&e.tabIndex&&(n.tabindex=e.tabIndex),!n.placeholder&&e.placeholder&&(n.placeholder=e.placeholder),n.autofocus==null){var s=P(qe(e));n.autofocus=s==e||e.getAttribute("autofocus")!=null&&s==document.body}function i(){e.value=b.getValue()}var o;if(e.form&&(rt(e.form,"submit",i),!n.leaveSubmitMethodAlone)){var h=e.form;o=h.submit;try{var y=h.submit=function(){i(),h.submit=o,h.submit(),h.submit=y}}catch{}}n.finishInit=function(S){S.save=i,S.getTextArea=function(){return e},S.toTextArea=function(){S.toTextArea=isNaN,i(),e.parentNode.removeChild(S.getWrapperElement()),e.style.display="",e.form&&(tn(e.form,"submit",i),!n.leaveSubmitMethodAlone&&typeof e.form.submit=="function"&&(e.form.submit=o))}},e.style.display="none";var b=en(function(S){return e.parentNode.insertBefore(S,e.nextSibling)},n);return b}function qa(e){e.off=tn,e.on=rt,e.wheelEventPixels=Ss,e.Doc=Ot,e.splitLines=jr,e.countColumn=$e,e.findColumn=Ue,e.isWordChar=Ye,e.Pass=Yt,e.signal=It,e.Line=ki,e.changeEnd=Fn,e.scrollbarModel=Ac,e.Pos=pe,e.cmpPos=He,e.modes=Mi,e.mimeModes=Dr,e.resolveMode=zi,e.getMode=Bt,e.modeExtensions=Mr,e.extendMode=us,e.copyState=Rt,e.startState=ii,e.innerMode=Fi,e.commands=Uo,e.keyMap=Ri,e.keyName=Cu,e.isModifierKey=Su,e.lookupKey=ro,e.normalizeKeyMap=Fc,e.StringStream=Vt,e.SharedTextMarker=eo,e.TextMarker=hi,e.LineWidget=Pi,e.e_preventDefault=bn,e.e_stopPropagation=ri,e.e_stop=pr,e.addClass=$,e.contains=T,e.rmClass=Ie,e.keyNames=Qr}vr(en),Hl(en);var ar="iter insert remove copy getEditor constructor".split(" ");for(var Ul in Ot.prototype)Ot.prototype.hasOwnProperty(Ul)&&Ke(ar,Ul)<0&&(en.prototype[Ul]=(function(e){return function(){return e.apply(this.doc,arguments)}})(Ot.prototype[Ul]));return Nn(Ot),en.inputStyles={textarea:fn,contenteditable:Dt},en.defineMode=function(e){!en.defaults.mode&&e!="null"&&(en.defaults.mode=e),Gn.apply(this,arguments)},en.defineMIME=vi,en.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),en.defineMIME("text/plain","null"),en.defineExtension=function(e,n){en.prototype[e]=n},en.defineDocExtension=function(e,n){Ot.prototype[e]=n},en.fromTextArea=ed,qa(en),en.version="5.65.21",en}))})(Cd)),Cd.exports}var gb=ss();const Af=cm(gb);var Rf={exports:{}},If;function yb(){return If||(If=1,(function(l,u){(function(d){d(ss())})(function(d){function f(_){return new RegExp("^(("+_.join(")|(")+"))\\b")}var g=f(["and","or","not","is"]),v=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],k=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];d.registerHelper("hintWords","python",v.concat(k).concat(["exec","print"]));function C(_){return _.scopes[_.scopes.length-1]}d.defineMode("python",function(_,N){for(var O="error",L=N.delimiters||N.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,Y=[N.singleOperators,N.doubleOperators,N.doubleDelimiters,N.tripleDelimiters,N.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],U=0;U<Y.length;U++)Y[U]||Y.splice(U--,1);var F=N.hangingIndent||_.indentUnit,V=v,I=k;N.extra_keywords!=null&&(V=V.concat(N.extra_keywords)),N.extra_builtins!=null&&(I=I.concat(N.extra_builtins));var z=!(N.version&&Number(N.version)<3);if(z){var B=N.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;V=V.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),I=I.concat(["ascii","bytes","exec","print"]);var H=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var B=N.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;V=V.concat(["exec","print"]),I=I.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var H=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var J=f(V),ce=f(I);function ae(Q,q){var T=Q.sol()&&q.lastToken!="\\";if(T&&(q.indent=Q.indentation()),T&&C(q).type=="py"){var P=C(q).offset;if(Q.eatSpace()){var $=Q.indentation();return $>P?se(q):$<P&&le(Q,q)&&Q.peek()!="#"&&(q.errorToken=!0),null}else{var M=be(Q,q);return P>0&&le(Q,q)&&(M+=" "+O),M}}return be(Q,q)}function be(Q,q,T){if(Q.eatSpace())return null;if(!T&&Q.match(/^#.*/))return"comment";if(Q.match(/^[0-9\.]/,!1)){var P=!1;if(Q.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(P=!0),Q.match(/^[\d_]+\.\d*/)&&(P=!0),Q.match(/^\.\d+/)&&(P=!0),P)return Q.eat(/J/i),"number";var $=!1;if(Q.match(/^0x[0-9a-f_]+/i)&&($=!0),Q.match(/^0b[01_]+/i)&&($=!0),Q.match(/^0o[0-7_]+/i)&&($=!0),Q.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(Q.eat(/J/i),$=!0),Q.match(/^0(?![\dx])/i)&&($=!0),$)return Q.eat(/L/i),"number"}if(Q.match(H)){var M=Q.current().toLowerCase().indexOf("f")!==-1;return M?(q.tokenize=Re(Q.current(),q.tokenize),q.tokenize(Q,q)):(q.tokenize=xe(Q.current(),q.tokenize),q.tokenize(Q,q))}for(var Z=0;Z<Y.length;Z++)if(Q.match(Y[Z]))return"operator";return Q.match(L)?"punctuation":q.lastToken=="."&&Q.match(B)?"property":Q.match(J)||Q.match(g)?"keyword":Q.match(ce)?"builtin":Q.match(/^(self|cls)\b/)?"variable-2":Q.match(B)?q.lastToken=="def"||q.lastToken=="class"?"def":"variable":(Q.next(),T?null:O)}function Re(Q,q){for(;"rubf".indexOf(Q.charAt(0).toLowerCase())>=0;)Q=Q.substr(1);var T=Q.length==1,P="string";function $(Z){return function(Ce,ze){var qe=be(Ce,ze,!0);return qe=="punctuation"&&(Ce.current()=="{"?ze.tokenize=$(Z+1):Ce.current()=="}"&&(Z>1?ze.tokenize=$(Z-1):ze.tokenize=M)),qe}}function M(Z,Ce){for(;!Z.eol();)if(Z.eatWhile(/[^'"\{\}\\]/),Z.eat("\\")){if(Z.next(),T&&Z.eol())return P}else{if(Z.match(Q))return Ce.tokenize=q,P;if(Z.match("{{"))return P;if(Z.match("{",!1))return Ce.tokenize=$(0),Z.current()?P:Ce.tokenize(Z,Ce);if(Z.match("}}"))return P;if(Z.match("}"))return O;Z.eat(/['"]/)}if(T){if(N.singleLineStringErrors)return O;Ce.tokenize=q}return P}return M.isString=!0,M}function xe(Q,q){for(;"rubf".indexOf(Q.charAt(0).toLowerCase())>=0;)Q=Q.substr(1);var T=Q.length==1,P="string";function $(M,Z){for(;!M.eol();)if(M.eatWhile(/[^'"\\]/),M.eat("\\")){if(M.next(),T&&M.eol())return P}else{if(M.match(Q))return Z.tokenize=q,P;M.eat(/['"]/)}if(T){if(N.singleLineStringErrors)return O;Z.tokenize=q}return P}return $.isString=!0,$}function se(Q){for(;C(Q).type!="py";)Q.scopes.pop();Q.scopes.push({offset:C(Q).offset+_.indentUnit,type:"py",align:null})}function Ie(Q,q,T){var P=Q.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:Q.column()+1;q.scopes.push({offset:q.indent+F,type:T,align:P})}function le(Q,q){for(var T=Q.indentation();q.scopes.length>1&&C(q).offset>T;){if(C(q).type!="py")return!0;q.scopes.pop()}return C(q).offset!=T}function fe(Q,q){Q.sol()&&(q.beginningOfLine=!0,q.dedent=!1);var T=q.tokenize(Q,q),P=Q.current();if(q.beginningOfLine&&P=="@")return Q.match(B,!1)?"meta":z?"operator":O;if(/\S/.test(P)&&(q.beginningOfLine=!1),(T=="variable"||T=="builtin")&&q.lastToken=="meta"&&(T="meta"),(P=="pass"||P=="return")&&(q.dedent=!0),P=="lambda"&&(q.lambda=!0),P==":"&&!q.lambda&&C(q).type=="py"&&Q.match(/^\s*(?:#|$)/,!1)&&se(q),P.length==1&&!/string|comment/.test(T)){var $="[({".indexOf(P);if($!=-1&&Ie(Q,q,"])}".slice($,$+1)),$="])}".indexOf(P),$!=-1)if(C(q).type==P)q.indent=q.scopes.pop().offset-F;else return O}return q.dedent&&Q.eol()&&C(q).type=="py"&&q.scopes.length>1&&q.scopes.pop(),T}var A={startState:function(Q){return{tokenize:ae,scopes:[{offset:Q||0,type:"py",align:null}],indent:Q||0,lastToken:null,lambda:!1,dedent:0}},token:function(Q,q){var T=q.errorToken;T&&(q.errorToken=!1);var P=fe(Q,q);return P&&P!="comment"&&(q.lastToken=P=="keyword"||P=="punctuation"?Q.current():P),P=="punctuation"&&(P=null),Q.eol()&&q.lambda&&(q.lambda=!1),T?P+" "+O:P},indent:function(Q,q){if(Q.tokenize!=ae)return Q.tokenize.isString?d.Pass:0;var T=C(Q),P=T.type==q.charAt(0)||T.type=="py"&&!Q.dedent&&/^(else:|elif |except |finally:)/.test(q);return T.align!=null?T.align-(P?1:0):T.offset-(P?F:0)},electricInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,closeBrackets:{triples:`'"`},lineComment:"#",fold:"indent"};return A}),d.defineMIME("text/x-python","python");var w=function(_){return _.split(" ")};d.defineMIME("text/x-cython",{name:"python",extra_keywords:w("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})})})()),Rf.exports}yb();var Of={exports:{}},Df;function Hm(){return Df||(Df=1,(function(l,u){(function(d){d(ss())})(function(d){d.defineMode("javascript",function(f,g){var v=f.indentUnit,k=g.statementIndent,C=g.jsonld,w=g.json||C,_=g.trackScope!==!1,N=g.typescript,O=g.wordCharacters||/[\w$\xa1-\uffff]/,L=(function(){function E(Qt){return{type:Qt,style:"keyword"}}var K=E("keyword a"),ge=E("keyword b"),je=E("keyword c"),pe=E("keyword d"),He=E("operator"),jt={type:"atom",style:"atom"};return{if:E("if"),while:K,with:K,else:ge,do:ge,try:ge,finally:ge,return:pe,break:pe,continue:pe,new:E("new"),delete:je,void:je,throw:je,debugger:E("debugger"),var:E("var"),const:E("var"),let:E("var"),function:E("function"),catch:E("catch"),for:E("for"),switch:E("switch"),case:E("case"),default:E("default"),in:He,typeof:He,instanceof:He,true:jt,false:jt,null:jt,undefined:jt,NaN:jt,Infinity:jt,this:E("this"),class:E("class"),super:E("atom"),yield:je,export:E("export"),import:E("import"),extends:je,await:je}})(),Y=/[+\-*&%=<>!?|~^@]/,U=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function F(E){for(var K=!1,ge,je=!1;(ge=E.next())!=null;){if(!K){if(ge=="/"&&!je)return;ge=="["?je=!0:je&&ge=="]"&&(je=!1)}K=!K&&ge=="\\"}}var V,I;function z(E,K,ge){return V=E,I=ge,K}function B(E,K){var ge=E.next();if(ge=='"'||ge=="'")return K.tokenize=H(ge),K.tokenize(E,K);if(ge=="."&&E.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return z("number","number");if(ge=="."&&E.match(".."))return z("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(ge))return z(ge);if(ge=="="&&E.eat(">"))return z("=>","operator");if(ge=="0"&&E.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return z("number","number");if(/\d/.test(ge))return E.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),z("number","number");if(ge=="/")return E.eat("*")?(K.tokenize=J,J(E,K)):E.eat("/")?(E.skipToEnd(),z("comment","comment")):Yn(E,K,1)?(F(E),E.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),z("regexp","string-2")):(E.eat("="),z("operator","operator",E.current()));if(ge=="`")return K.tokenize=ce,ce(E,K);if(ge=="#"&&E.peek()=="!")return E.skipToEnd(),z("meta","meta");if(ge=="#"&&E.eatWhile(O))return z("variable","property");if(ge=="<"&&E.match("!--")||ge=="-"&&E.match("->")&&!/\S/.test(E.string.slice(0,E.start)))return E.skipToEnd(),z("comment","comment");if(Y.test(ge))return(ge!=">"||!K.lexical||K.lexical.type!=">")&&(E.eat("=")?(ge=="!"||ge=="=")&&E.eat("="):/[<>*+\-|&?]/.test(ge)&&(E.eat(ge),ge==">"&&E.eat(ge))),ge=="?"&&E.eat(".")?z("."):z("operator","operator",E.current());if(O.test(ge)){E.eatWhile(O);var je=E.current();if(K.lastType!="."){if(L.propertyIsEnumerable(je)){var pe=L[je];return z(pe.type,pe.style,je)}if(je=="async"&&E.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return z("async","keyword",je)}return z("variable","variable",je)}}function H(E){return function(K,ge){var je=!1,pe;if(C&&K.peek()=="@"&&K.match(U))return ge.tokenize=B,z("jsonld-keyword","meta");for(;(pe=K.next())!=null&&!(pe==E&&!je);)je=!je&&pe=="\\";return je||(ge.tokenize=B),z("string","string")}}function J(E,K){for(var ge=!1,je;je=E.next();){if(je=="/"&&ge){K.tokenize=B;break}ge=je=="*"}return z("comment","comment")}function ce(E,K){for(var ge=!1,je;(je=E.next())!=null;){if(!ge&&(je=="`"||je=="$"&&E.eat("{"))){K.tokenize=B;break}ge=!ge&&je=="\\"}return z("quasi","string-2",E.current())}var ae="([{}])";function be(E,K){K.fatArrowAt&&(K.fatArrowAt=null);var ge=E.string.indexOf("=>",E.start);if(!(ge<0)){if(N){var je=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(E.string.slice(E.start,ge));je&&(ge=je.index)}for(var pe=0,He=!1,jt=ge-1;jt>=0;--jt){var Qt=E.string.charAt(jt),kn=ae.indexOf(Qt);if(kn>=0&&kn<3){if(!pe){++jt;break}if(--pe==0){Qt=="("&&(He=!0);break}}else if(kn>=3&&kn<6)++pe;else if(O.test(Qt))He=!0;else if(/["'\/`]/.test(Qt))for(;;--jt){if(jt==0)return;var Kr=E.string.charAt(jt-1);if(Kr==Qt&&E.string.charAt(jt-2)!="\\"){jt--;break}}else if(He&&!pe){++jt;break}}He&&!pe&&(K.fatArrowAt=jt)}}var Re={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function xe(E,K,ge,je,pe,He){this.indented=E,this.column=K,this.type=ge,this.prev=pe,this.info=He,je!=null&&(this.align=je)}function se(E,K){if(!_)return!1;for(var ge=E.localVars;ge;ge=ge.next)if(ge.name==K)return!0;for(var je=E.context;je;je=je.prev)for(var ge=je.vars;ge;ge=ge.next)if(ge.name==K)return!0}function Ie(E,K,ge,je,pe){var He=E.cc;for(le.state=E,le.stream=pe,le.marked=null,le.cc=He,le.style=K,E.lexical.hasOwnProperty("align")||(E.lexical.align=!0);;){var jt=He.length?He.pop():w?Ke:$e;if(jt(ge,je)){for(;He.length&&He[He.length-1].lex;)He.pop()();return le.marked?le.marked:ge=="variable"&&se(E,je)?"variable-2":K}}}var le={state:null,marked:null,cc:null};function fe(){for(var E=arguments.length-1;E>=0;E--)le.cc.push(arguments[E])}function A(){return fe.apply(null,arguments),!0}function Q(E,K){for(var ge=K;ge;ge=ge.next)if(ge.name==E)return!0;return!1}function q(E){var K=le.state;if(le.marked="def",!!_){if(K.context){if(K.lexical.info=="var"&&K.context&&K.context.block){var ge=T(E,K.context);if(ge!=null){K.context=ge;return}}else if(!Q(E,K.localVars)){K.localVars=new M(E,K.localVars);return}}g.globalVars&&!Q(E,K.globalVars)&&(K.globalVars=new M(E,K.globalVars))}}function T(E,K){if(K)if(K.block){var ge=T(E,K.prev);return ge?ge==K.prev?K:new $(ge,K.vars,!0):null}else return Q(E,K.vars)?K:new $(K.prev,new M(E,K.vars),!1);else return null}function P(E){return E=="public"||E=="private"||E=="protected"||E=="abstract"||E=="readonly"}function $(E,K,ge){this.prev=E,this.vars=K,this.block=ge}function M(E,K){this.name=E,this.next=K}var Z=new M("this",new M("arguments",null));function Ce(){le.state.context=new $(le.state.context,le.state.localVars,!1),le.state.localVars=Z}function ze(){le.state.context=new $(le.state.context,le.state.localVars,!0),le.state.localVars=null}Ce.lex=ze.lex=!0;function qe(){le.state.localVars=le.state.context.vars,le.state.context=le.state.context.prev}qe.lex=!0;function Oe(E,K){var ge=function(){var je=le.state,pe=je.indented;if(je.lexical.type=="stat")pe=je.lexical.indented;else for(var He=je.lexical;He&&He.type==")"&&He.align;He=He.prev)pe=He.indented;je.lexical=new xe(pe,le.stream.column(),E,null,je.lexical,K)};return ge.lex=!0,ge}function Se(){var E=le.state;E.lexical.prev&&(E.lexical.type==")"&&(E.indented=E.lexical.indented),E.lexical=E.lexical.prev)}Se.lex=!0;function Be(E){function K(ge){return ge==E?A():E==";"||ge=="}"||ge==")"||ge=="]"?fe():A(K)}return K}function $e(E,K){return E=="var"?A(Oe("vardef",K),ri,Be(";"),Se):E=="keyword a"?A(Oe("form"),Yt,$e,Se):E=="keyword b"?A(Oe("form"),$e,Se):E=="keyword d"?le.stream.match(/^\s*$/,!1)?A():A(Oe("stat"),xt,Be(";"),Se):E=="debugger"?A(Be(";")):E=="{"?A(Oe("}"),ze,nr,Se,qe):E==";"?A():E=="if"?(le.state.lexical.info=="else"&&le.state.cc[le.state.cc.length-1]==Se&&le.state.cc.pop()(),A(Oe("form"),Yt,$e,Se,wn)):E=="function"?A(jr):E=="for"?A(Oe("form"),ze,Tr,$e,qe,Se):E=="class"||N&&K=="interface"?(le.marked="keyword",A(Oe("form",E=="class"?E:K),Mi,Se)):E=="variable"?N&&K=="declare"?(le.marked="keyword",A($e)):N&&(K=="module"||K=="enum"||K=="type")&&le.stream.match(/^\s*\w/,!1)?(le.marked="keyword",K=="enum"?A(Je):K=="type"?A(as,Be("operator"),bt,Be(";")):A(Oe("form"),In,Be("{"),Oe("}"),nr,Se,Se)):N&&K=="namespace"?(le.marked="keyword",A(Oe("form"),Ke,$e,Se)):N&&K=="abstract"?(le.marked="keyword",A($e)):A(Oe("stat"),kt):E=="switch"?A(Oe("form"),Yt,Be("{"),Oe("}","switch"),ze,nr,Se,Se,qe):E=="case"?A(Ke,Be(":")):E=="default"?A(Be(":")):E=="catch"?A(Oe("form"),Ce,et,$e,Se,qe):E=="export"?A(Oe("stat"),zi,Se):E=="import"?A(Oe("stat"),Mr,Se):E=="async"?A($e):K=="@"?A(Ke,$e):fe(Oe("stat"),Ke,Be(";"),Se)}function et(E){if(E=="(")return A(On,Be(")"))}function Ke(E,K){return Ct(E,K,!1)}function Ft(E,K){return Ct(E,K,!0)}function Yt(E){return E!="("?fe():A(Oe(")"),xt,Be(")"),Se)}function Ct(E,K,ge){if(le.state.fatArrowAt==le.stream.start){var je=ge?ut:Qe;if(E=="(")return A(Ce,Oe(")"),pt(On,")"),Se,Be("=>"),je,qe);if(E=="variable")return fe(Ce,In,Be("=>"),je,qe)}var pe=ge?Ue:tt;return Re.hasOwnProperty(E)?A(pe):E=="function"?A(jr,pe):E=="class"||N&&K=="interface"?(le.marked="keyword",A(Oe("form"),ls,Se)):E=="keyword c"||E=="async"?A(ge?Ft:Ke):E=="("?A(Oe(")"),xt,Be(")"),Se,pe):E=="operator"||E=="spread"?A(ge?Ft:Ke):E=="["?A(Oe("]"),Vt,Se,pe):E=="{"?Xt(ot,"}",null,pe):E=="quasi"?fe(vt,pe):E=="new"?A(oe(ge)):A()}function xt(E){return E.match(/[;\}\)\],]/)?fe():fe(Ke)}function tt(E,K){return E==","?A(xt):Ue(E,K,!1)}function Ue(E,K,ge){var je=ge==!1?tt:Ue,pe=ge==!1?Ke:Ft;if(E=="=>")return A(Ce,ge?ut:Qe,qe);if(E=="operator")return/\+\+|--/.test(K)||N&&K=="!"?A(je):N&&K=="<"&&le.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?A(Oe(">"),pt(bt,">"),Se,je):K=="?"?A(Ke,Be(":"),pe):A(pe);if(E=="quasi")return fe(vt,je);if(E!=";"){if(E=="(")return Xt(Ft,")","call",je);if(E==".")return A(Ye,je);if(E=="[")return A(Oe("]"),xt,Be("]"),Se,je);if(N&&K=="as")return le.marked="keyword",A(bt,je);if(E=="regexp")return le.state.lastType=le.marked="operator",le.stream.backUp(le.stream.pos-le.stream.start-1),A(pe)}}function vt(E,K){return E!="quasi"?fe():K.slice(K.length-2)!="${"?A(vt):A(xt,yt)}function yt(E){if(E=="}")return le.marked="string-2",le.state.tokenize=ce,A(vt)}function Qe(E){return be(le.stream,le.state),fe(E=="{"?$e:Ke)}function ut(E){return be(le.stream,le.state),fe(E=="{"?$e:Ft)}function oe(E){return function(K){return K=="."?A(E?he:Te):K=="variable"&&N?A(mn,E?Ue:tt):fe(E?Ft:Ke)}}function Te(E,K){if(K=="target")return le.marked="keyword",A(tt)}function he(E,K){if(K=="target")return le.marked="keyword",A(Ue)}function kt(E){return E==":"?A(Se,$e):fe(tt,Be(";"),Se)}function Ye(E){if(E=="variable")return le.marked="property",A()}function ot(E,K){if(E=="async")return le.marked="property",A(ot);if(E=="variable"||le.style=="keyword"){if(le.marked="property",K=="get"||K=="set")return A(Ze);var ge;return N&&le.state.fatArrowAt==le.stream.start&&(ge=le.stream.match(/^\s*:\s*/,!1))&&(le.state.fatArrowAt=le.stream.pos+ge[0].length),A(mt)}else{if(E=="number"||E=="string")return le.marked=C?"property":le.style+" property",A(mt);if(E=="jsonld-keyword")return A(mt);if(N&&P(K))return le.marked="keyword",A(ot);if(E=="[")return A(Ke,_r,Be("]"),mt);if(E=="spread")return A(Ft,mt);if(K=="*")return le.marked="keyword",A(ot);if(E==":")return fe(mt)}}function Ze(E){return E!="variable"?fe(mt):(le.marked="property",A(jr))}function mt(E){if(E==":")return A(Ft);if(E=="(")return fe(jr)}function pt(E,K,ge){function je(pe,He){if(ge?ge.indexOf(pe)>-1:pe==","){var jt=le.state.lexical;return jt.info=="call"&&(jt.pos=(jt.pos||0)+1),A(function(Qt,kn){return Qt==K||kn==K?fe():fe(E)},je)}return pe==K||He==K?A():ge&&ge.indexOf(";")>-1?fe(E):A(Be(K))}return function(pe,He){return pe==K||He==K?A():fe(E,je)}}function Xt(E,K,ge){for(var je=3;je<arguments.length;je++)le.cc.push(arguments[je]);return A(Oe(K,ge),pt(E,K),Se)}function nr(E){return E=="}"?A():fe($e,nr)}function _r(E,K){if(N){if(E==":")return A(bt);if(K=="?")return A(_r)}}function Ir(E,K){if(N&&(E==":"||K=="in"))return A(bt)}function Ur(E){if(N&&E==":")return le.stream.match(/^\s*\w+\s+is\b/,!1)?A(Ke,qr,bt):A(bt)}function qr(E,K){if(K=="is")return le.marked="keyword",A()}function bt(E,K){if(K=="keyof"||K=="typeof"||K=="infer"||K=="readonly")return le.marked="keyword",A(K=="typeof"?Ft:bt);if(E=="variable"||K=="void")return le.marked="type",A(xn);if(K=="|"||K=="&")return A(bt);if(E=="string"||E=="number"||E=="atom")return A(xn);if(E=="[")return A(Oe("]"),pt(bt,"]",","),Se,xn);if(E=="{")return A(Oe("}"),rt,Se,xn);if(E=="(")return A(pt(qt,")"),mi,xn);if(E=="<")return A(pt(bt,">"),bt);if(E=="quasi")return fe(tn,xn)}function mi(E){if(E=="=>")return A(bt)}function rt(E){return E.match(/[\}\)\]]/)?A():E==","||E==";"?A(rt):fe(Cr,rt)}function Cr(E,K){if(E=="variable"||le.style=="keyword")return le.marked="property",A(Cr);if(K=="?"||E=="number"||E=="string")return A(Cr);if(E==":")return A(bt);if(E=="[")return A(Be("variable"),Ir,Be("]"),Cr);if(E=="(")return fe(yi,Cr);if(!E.match(/[;\}\)\],]/))return A()}function tn(E,K){return E!="quasi"?fe():K.slice(K.length-2)!="${"?A(tn):A(bt,It)}function It(E){if(E=="}")return le.marked="string-2",le.state.tokenize=ce,A(tn)}function qt(E,K){return E=="variable"&&le.stream.match(/^\s*[?:]/,!1)||K=="?"?A(qt):E==":"?A(bt):E=="spread"?A(qt):fe(bt)}function xn(E,K){if(K=="<")return A(Oe(">"),pt(bt,">"),Se,xn);if(K=="|"||E=="."||K=="&")return A(bt);if(E=="[")return A(bt,Be("]"),xn);if(K=="extends"||K=="implements")return le.marked="keyword",A(bt);if(K=="?")return A(bt,Be(":"),bt)}function mn(E,K){if(K=="<")return A(Oe(">"),pt(bt,">"),Se,xn)}function Nn(){return fe(bt,bn)}function bn(E,K){if(K=="=")return A(bt)}function ri(E,K){return K=="enum"?(le.marked="keyword",A(Je)):fe(In,_r,En,os)}function In(E,K){if(N&&P(K))return le.marked="keyword",A(In);if(E=="variable")return q(K),A();if(E=="spread")return A(In);if(E=="[")return Xt(gi,"]");if(E=="{")return Xt(pr,"}")}function pr(E,K){return E=="variable"&&!le.stream.match(/^\s*:/,!1)?(q(K),A(En)):(E=="variable"&&(le.marked="property"),E=="spread"?A(In):E=="}"?fe():E=="["?A(Ke,Be("]"),Be(":"),pr):A(Be(":"),In,En))}function gi(){return fe(In,En)}function En(E,K){if(K=="=")return A(Ft)}function os(E){if(E==",")return A(ri)}function wn(E,K){if(E=="keyword b"&&K=="else")return A(Oe("form","else"),$e,Se)}function Tr(E,K){if(K=="await")return A(Tr);if(E=="(")return A(Oe(")"),$r,Se)}function $r(E){return E=="var"?A(ri,Or):E=="variable"?A(Or):fe(Or)}function Or(E,K){return E==")"?A():E==";"?A(Or):K=="in"||K=="of"?(le.marked="keyword",A(Ke,Or)):fe(Ke,Or)}function jr(E,K){if(K=="*")return le.marked="keyword",A(jr);if(E=="variable")return q(K),A(jr);if(E=="(")return A(Ce,Oe(")"),pt(On,")"),Se,Ur,$e,qe);if(N&&K=="<")return A(Oe(">"),pt(Nn,">"),Se,jr)}function yi(E,K){if(K=="*")return le.marked="keyword",A(yi);if(E=="variable")return q(K),A(yi);if(E=="(")return A(Ce,Oe(")"),pt(On,")"),Se,Ur,qe);if(N&&K=="<")return A(Oe(">"),pt(Nn,">"),Se,yi)}function as(E,K){if(E=="keyword"||E=="variable")return le.marked="type",A(as);if(K=="<")return A(Oe(">"),pt(Nn,">"),Se)}function On(E,K){return K=="@"&&A(Ke,On),E=="spread"?A(On):N&&P(K)?(le.marked="keyword",A(On)):N&&E=="this"?A(_r,En):fe(In,_r,En)}function ls(E,K){return E=="variable"?Mi(E,K):Dr(E,K)}function Mi(E,K){if(E=="variable")return q(K),A(Dr)}function Dr(E,K){if(K=="<")return A(Oe(">"),pt(Nn,">"),Se,Dr);if(K=="extends"||K=="implements"||N&&E==",")return K=="implements"&&(le.marked="keyword"),A(N?bt:Ke,Dr);if(E=="{")return A(Oe("}"),Gn,Se)}function Gn(E,K){if(E=="async"||E=="variable"&&(K=="static"||K=="get"||K=="set"||N&&P(K))&&le.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return le.marked="keyword",A(Gn);if(E=="variable"||le.style=="keyword")return le.marked="property",A(vi,Gn);if(E=="number"||E=="string")return A(vi,Gn);if(E=="[")return A(Ke,_r,Be("]"),vi,Gn);if(K=="*")return le.marked="keyword",A(Gn);if(N&&E=="(")return fe(yi,Gn);if(E==";"||E==",")return A(Gn);if(E=="}")return A();if(K=="@")return A(Ke,Gn)}function vi(E,K){if(K=="!"||K=="?")return A(vi);if(E==":")return A(bt,En);if(K=="=")return A(Ft);var ge=le.state.lexical.prev,je=ge&&ge.info=="interface";return fe(je?yi:jr)}function zi(E,K){return K=="*"?(le.marked="keyword",A(ii,Be(";"))):K=="default"?(le.marked="keyword",A(Ke,Be(";"))):E=="{"?A(pt(Bt,"}"),ii,Be(";")):fe($e)}function Bt(E,K){if(K=="as")return le.marked="keyword",A(Be("variable"));if(E=="variable")return fe(Ft,Bt)}function Mr(E){return E=="string"?A():E=="("?fe(Ke):E=="."?fe(tt):fe(us,Rt,ii)}function us(E,K){return E=="{"?Xt(us,"}"):(E=="variable"&&q(K),K=="*"&&(le.marked="keyword"),A(Fi))}function Rt(E){if(E==",")return A(us,Rt)}function Fi(E,K){if(K=="as")return le.marked="keyword",A(us)}function ii(E,K){if(K=="from")return le.marked="keyword",A(Ke)}function Vt(E){return E=="]"?A():fe(pt(Ft,"]"))}function Je(){return fe(Oe("form"),In,Be("{"),Oe("}"),pt(si,"}"),Se,Se)}function si(){return fe(In,En)}function cs(E,K){return E.lastType=="operator"||E.lastType==","||Y.test(K.charAt(0))||/[,.]/.test(K.charAt(0))}function Yn(E,K,ge){return K.tokenize==B&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(K.lastType)||K.lastType=="quasi"&&/\{\s*$/.test(E.string.slice(0,E.pos-(ge||0)))}return{startState:function(E){var K={tokenize:B,lastType:"sof",cc:[],lexical:new xe((E||0)-v,0,"block",!1),localVars:g.localVars,context:g.localVars&&new $(null,null,!1),indented:E||0};return g.globalVars&&typeof g.globalVars=="object"&&(K.globalVars=g.globalVars),K},token:function(E,K){if(E.sol()&&(K.lexical.hasOwnProperty("align")||(K.lexical.align=!1),K.indented=E.indentation(),be(E,K)),K.tokenize!=J&&E.eatSpace())return null;var ge=K.tokenize(E,K);return V=="comment"?ge:(K.lastType=V=="operator"&&(I=="++"||I=="--")?"incdec":V,Ie(K,ge,V,I,E))},indent:function(E,K){if(E.tokenize==J||E.tokenize==ce)return d.Pass;if(E.tokenize!=B)return 0;var ge=K&&K.charAt(0),je=E.lexical,pe;if(!/^\s*else\b/.test(K))for(var He=E.cc.length-1;He>=0;--He){var jt=E.cc[He];if(jt==Se)je=je.prev;else if(jt!=wn&&jt!=qe)break}for(;(je.type=="stat"||je.type=="form")&&(ge=="}"||(pe=E.cc[E.cc.length-1])&&(pe==tt||pe==Ue)&&!/^[,\.=+\-*:?[\(]/.test(K));)je=je.prev;k&&je.type==")"&&je.prev.type=="stat"&&(je=je.prev);var Qt=je.type,kn=ge==Qt;return Qt=="vardef"?je.indented+(E.lastType=="operator"||E.lastType==","?je.info.length+1:0):Qt=="form"&&ge=="{"?je.indented:Qt=="form"?je.indented+v:Qt=="stat"?je.indented+(cs(E,K)?k||v:0):je.info=="switch"&&!kn&&g.doubleIndentSwitch!=!1?je.indented+(/^(?:case|default)\b/.test(K)?v:2*v):je.align?je.column+(kn?0:1):je.indented+(kn?0:v)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:w?null:"/*",blockCommentEnd:w?null:"*/",blockCommentContinue:w?null:" * ",lineComment:w?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:w?"json":"javascript",jsonldMode:C,jsonMode:w,expressionAllowed:Yn,skipExpression:function(E){Ie(E,"atom","atom","true",new d.StringStream("",2,null))}}}),d.registerHelper("wordChars","javascript",/[\w$]/),d.defineMIME("text/javascript","javascript"),d.defineMIME("text/ecmascript","javascript"),d.defineMIME("application/javascript","javascript"),d.defineMIME("application/x-javascript","javascript"),d.defineMIME("application/ecmascript","javascript"),d.defineMIME("application/json",{name:"javascript",json:!0}),d.defineMIME("application/x-json",{name:"javascript",json:!0}),d.defineMIME("application/manifest+json",{name:"javascript",json:!0}),d.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),d.defineMIME("text/typescript",{name:"javascript",typescript:!0}),d.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})()),Of.exports}Hm();var Mf={exports:{}},zf;function vb(){return zf||(zf=1,(function(l,u){(function(d){d(ss())})(function(d){function f(T,P,$,M,Z,Ce){this.indented=T,this.column=P,this.type=$,this.info=M,this.align=Z,this.prev=Ce}function g(T,P,$,M){var Z=T.indented;return T.context&&T.context.type=="statement"&&$!="statement"&&(Z=T.context.indented),T.context=new f(Z,P,$,M,null,T.context)}function v(T){var P=T.context.type;return(P==")"||P=="]"||P=="}")&&(T.indented=T.context.indented),T.context=T.context.prev}function k(T,P,$){if(P.prevToken=="variable"||P.prevToken=="type"||/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(T.string.slice(0,$))||P.typeAtEndOfLine&&T.column()==T.indentation())return!0}function C(T){for(;;){if(!T||T.type=="top")return!0;if(T.type=="}"&&T.prev.info!="namespace")return!1;T=T.prev}}d.defineMode("clike",function(T,P){var $=T.indentUnit,M=P.statementIndentUnit||$,Z=P.dontAlignCalls,Ce=P.keywords||{},ze=P.types||{},qe=P.builtin||{},Oe=P.blockKeywords||{},Se=P.defKeywords||{},Be=P.atoms||{},$e=P.hooks||{},et=P.multiLineStrings,Ke=P.indentStatements!==!1,Ft=P.indentSwitch!==!1,Yt=P.namespaceSeparator,Ct=P.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,xt=P.numberStart||/[\d\.]/,tt=P.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,Ue=P.isOperatorChar||/[+\-*&%=<>!?|\/]/,vt=P.isIdentifierChar||/[\w\$_\xa1-\uffff]/,yt=P.isReservedIdentifier||!1,Qe,ut;function oe(Ye,ot){var Ze=Ye.next();if($e[Ze]){var mt=$e[Ze](Ye,ot);if(mt!==!1)return mt}if(Ze=='"'||Ze=="'")return ot.tokenize=Te(Ze),ot.tokenize(Ye,ot);if(xt.test(Ze)){if(Ye.backUp(1),Ye.match(tt))return"number";Ye.next()}if(Ct.test(Ze))return Qe=Ze,null;if(Ze=="/"){if(Ye.eat("*"))return ot.tokenize=he,he(Ye,ot);if(Ye.eat("/"))return Ye.skipToEnd(),"comment"}if(Ue.test(Ze)){for(;!Ye.match(/^\/[\/*]/,!1)&&Ye.eat(Ue););return"operator"}if(Ye.eatWhile(vt),Yt)for(;Ye.match(Yt);)Ye.eatWhile(vt);var pt=Ye.current();return _(Ce,pt)?(_(Oe,pt)&&(Qe="newstatement"),_(Se,pt)&&(ut=!0),"keyword"):_(ze,pt)?"type":_(qe,pt)||yt&&yt(pt)?(_(Oe,pt)&&(Qe="newstatement"),"builtin"):_(Be,pt)?"atom":"variable"}function Te(Ye){return function(ot,Ze){for(var mt=!1,pt,Xt=!1;(pt=ot.next())!=null;){if(pt==Ye&&!mt){Xt=!0;break}mt=!mt&&pt=="\\"}return(Xt||!(mt||et))&&(Ze.tokenize=null),"string"}}function he(Ye,ot){for(var Ze=!1,mt;mt=Ye.next();){if(mt=="/"&&Ze){ot.tokenize=null;break}Ze=mt=="*"}return"comment"}function kt(Ye,ot){P.typeFirstDefinitions&&Ye.eol()&&C(ot.context)&&(ot.typeAtEndOfLine=k(Ye,ot,Ye.pos))}return{startState:function(Ye){return{tokenize:null,context:new f((Ye||0)-$,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(Ye,ot){var Ze=ot.context;if(Ye.sol()&&(Ze.align==null&&(Ze.align=!1),ot.indented=Ye.indentation(),ot.startOfLine=!0),Ye.eatSpace())return kt(Ye,ot),null;Qe=ut=null;var mt=(ot.tokenize||oe)(Ye,ot);if(mt=="comment"||mt=="meta")return mt;if(Ze.align==null&&(Ze.align=!0),Qe==";"||Qe==":"||Qe==","&&Ye.match(/^\s*(?:\/\/.*)?$/,!1))for(;ot.context.type=="statement";)v(ot);else if(Qe=="{")g(ot,Ye.column(),"}");else if(Qe=="[")g(ot,Ye.column(),"]");else if(Qe=="(")g(ot,Ye.column(),")");else if(Qe=="}"){for(;Ze.type=="statement";)Ze=v(ot);for(Ze.type=="}"&&(Ze=v(ot));Ze.type=="statement";)Ze=v(ot)}else Qe==Ze.type?v(ot):Ke&&((Ze.type=="}"||Ze.type=="top")&&Qe!=";"||Ze.type=="statement"&&Qe=="newstatement")&&g(ot,Ye.column(),"statement",Ye.current());if(mt=="variable"&&(ot.prevToken=="def"||P.typeFirstDefinitions&&k(Ye,ot,Ye.start)&&C(ot.context)&&Ye.match(/^\s*\(/,!1))&&(mt="def"),$e.token){var pt=$e.token(Ye,ot,mt);pt!==void 0&&(mt=pt)}return mt=="def"&&P.styleDefs===!1&&(mt="variable"),ot.startOfLine=!1,ot.prevToken=ut?"def":mt||Qe,kt(Ye,ot),mt},indent:function(Ye,ot){if(Ye.tokenize!=oe&&Ye.tokenize!=null||Ye.typeAtEndOfLine&&C(Ye.context))return d.Pass;var Ze=Ye.context,mt=ot&&ot.charAt(0),pt=mt==Ze.type;if(Ze.type=="statement"&&mt=="}"&&(Ze=Ze.prev),P.dontIndentStatements)for(;Ze.type=="statement"&&P.dontIndentStatements.test(Ze.info);)Ze=Ze.prev;if($e.indent){var Xt=$e.indent(Ye,Ze,ot,$);if(typeof Xt=="number")return Xt}var nr=Ze.prev&&Ze.prev.info=="switch";if(P.allmanIndentation&&/[{(]/.test(mt)){for(;Ze.type!="top"&&Ze.type!="}";)Ze=Ze.prev;return Ze.indented}return Ze.type=="statement"?Ze.indented+(mt=="{"?0:M):Ze.align&&(!Z||Ze.type!=")")?Ze.column+(pt?0:1):Ze.type==")"&&!pt?Ze.indented+M:Ze.indented+(pt?0:$)+(!pt&&nr&&!/^(?:case|default)\b/.test(ot)?$:0)},electricInput:Ft?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});function w(T){for(var P={},$=T.split(" "),M=0;M<$.length;++M)P[$[M]]=!0;return P}function _(T,P){return typeof T=="function"?T(P):T.propertyIsEnumerable(P)}var N="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",O="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",L="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",Y="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",U=w("int long char short double float unsigned signed void bool"),F=w("SEL instancetype id Class Protocol BOOL");function V(T){return _(U,T)||/.+_t$/.test(T)}function I(T){return V(T)||_(F,T)}var z="case do else for if switch while struct enum union",B="struct enum union";function H(T,P){if(!P.startOfLine)return!1;for(var $,M=null;$=T.peek();){if($=="\\"&&T.match(/^.$/)){M=H;break}else if($=="/"&&T.match(/^\/[\/\*]/,!1))break;T.next()}return P.tokenize=M,"meta"}function J(T,P){return P.prevToken=="type"?"type":!1}function ce(T){return!T||T.length<2||T[0]!="_"?!1:T[1]=="_"||T[1]!==T[1].toLowerCase()}function ae(T){return T.eatWhile(/[\w\.']/),"number"}function be(T,P){if(T.backUp(1),T.match(/^(?:R|u8R|uR|UR|LR)/)){var $=T.match(/^"([^\s\\()]{0,16})\(/);return $?(P.cpp11RawStringDelim=$[1],P.tokenize=se,se(T,P)):!1}return T.match(/^(?:u8|u|U|L)/)?T.match(/^["']/,!1)?"string":!1:(T.next(),!1)}function Re(T){var P=/(\w+)::~?(\w+)$/.exec(T);return P&&P[1]==P[2]}function xe(T,P){for(var $;($=T.next())!=null;)if($=='"'&&!T.eat('"')){P.tokenize=null;break}return"string"}function se(T,P){var $=P.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),M=T.match(new RegExp(".*?\\)"+$+'"'));return M?P.tokenize=null:T.skipToEnd(),"string"}function Ie(T,P){typeof T=="string"&&(T=[T]);var $=[];function M(Ce){if(Ce)for(var ze in Ce)Ce.hasOwnProperty(ze)&&$.push(ze)}M(P.keywords),M(P.types),M(P.builtin),M(P.atoms),$.length&&(P.helperType=T[0],d.registerHelper("hintWords",T[0],$));for(var Z=0;Z<T.length;++Z)d.defineMIME(T[Z],P)}Ie(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:w(N),types:V,blockKeywords:w(z),defKeywords:w(B),typeFirstDefinitions:!0,atoms:w("NULL true false"),isReservedIdentifier:ce,hooks:{"#":H,"*":J},modeProps:{fold:["brace","include"]}}),Ie(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:w(N+" "+O),types:V,blockKeywords:w(z+" class try catch"),defKeywords:w(B+" class namespace"),typeFirstDefinitions:!0,atoms:w("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:ce,hooks:{"#":H,"*":J,u:be,U:be,L:be,R:be,0:ae,1:ae,2:ae,3:ae,4:ae,5:ae,6:ae,7:ae,8:ae,9:ae,token:function(T,P,$){if($=="variable"&&T.peek()=="("&&(P.prevToken==";"||P.prevToken==null||P.prevToken=="}")&&Re(T.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ie("text/x-java",{name:"clike",keywords:w("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:w("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:w("catch class do else finally for if switch try while"),defKeywords:w("class interface enum @interface"),typeFirstDefinitions:!0,atoms:w("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(T){return T.match("interface",!1)?!1:(T.eatWhile(/[\w\$_]/),"meta")},'"':function(T,P){return T.match(/""$/)?(P.tokenize=le,P.tokenize(T,P)):!1}},modeProps:{fold:["brace","import"]}}),Ie("text/x-csharp",{name:"clike",keywords:w("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:w("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:w("catch class do else finally for foreach if struct switch try while"),defKeywords:w("class interface namespace record struct var"),typeFirstDefinitions:!0,atoms:w("true false null"),hooks:{"@":function(T,P){return T.eat('"')?(P.tokenize=xe,xe(T,P)):(T.eatWhile(/[\w\$_]/),"meta")}}});function le(T,P){for(var $=!1;!T.eol();){if(!$&&T.match('"""')){P.tokenize=null;break}$=T.next()=="\\"&&!$}return"string"}function fe(T){return function(P,$){for(var M;M=P.next();)if(M=="*"&&P.eat("/"))if(T==1){$.tokenize=null;break}else return $.tokenize=fe(T-1),$.tokenize(P,$);else if(M=="/"&&P.eat("*"))return $.tokenize=fe(T+1),$.tokenize(P,$);return"comment"}}Ie("text/x-scala",{name:"clike",keywords:w("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:w("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:w("catch class enum do else finally for forSome if match switch try while"),defKeywords:w("class enum def object package trait type val var"),atoms:w("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(T){return T.eatWhile(/[\w\$_]/),"meta"},'"':function(T,P){return T.match('""')?(P.tokenize=le,P.tokenize(T,P)):!1},"'":function(T){return T.match(/^(\\[^'\s]+|[^\\'])'/)?"string-2":(T.eatWhile(/[\w\$_\xa1-\uffff]/),"atom")},"=":function(T,P){var $=P.context;return $.type=="}"&&$.align&&T.eat(">")?(P.context=new f($.indented,$.column,$.type,$.info,null,$.prev),"operator"):!1},"/":function(T,P){return T.eat("*")?(P.tokenize=fe(1),P.tokenize(T,P)):!1}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}});function A(T){return function(P,$){for(var M=!1,Z,Ce=!1;!P.eol();){if(!T&&!M&&P.match('"')){Ce=!0;break}if(T&&P.match('"""')){Ce=!0;break}Z=P.next(),!M&&Z=="$"&&P.match("{")&&P.skipTo("}"),M=!M&&Z=="\\"&&!T}return(Ce||!T)&&($.tokenize=null),"string"}}Ie("text/x-kotlin",{name:"clike",keywords:w("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"),types:w("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),indentSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(ul?|l|f)?/i,blockKeywords:w("catch class do else finally for if where try while enum"),defKeywords:w("class val var object interface fun"),atoms:w("true false null this"),hooks:{"@":function(T){return T.eatWhile(/[\w\$_]/),"meta"},"*":function(T,P){return P.prevToken=="."?"variable":"operator"},'"':function(T,P){return P.tokenize=A(T.match('""')),P.tokenize(T,P)},"/":function(T,P){return T.eat("*")?(P.tokenize=fe(1),P.tokenize(T,P)):!1},indent:function(T,P,$,M){var Z=$&&$.charAt(0);if((T.prevToken=="}"||T.prevToken==")")&&$=="")return T.indented;if(T.prevToken=="operator"&&$!="}"&&T.context.type!="}"||T.prevToken=="variable"&&Z=="."||(T.prevToken=="}"||T.prevToken==")")&&Z==".")return M*2+P.indented;if(P.align&&P.type=="}")return P.indented+(T.context.type==($||"").charAt(0)?0:M)}},modeProps:{closeBrackets:{triples:'"'}}}),Ie(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:w("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:w("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:w("for while do if else struct"),builtin:w("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:w("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":H},modeProps:{fold:["brace","include"]}}),Ie("text/x-nesc",{name:"clike",keywords:w(N+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:V,blockKeywords:w(z),atoms:w("null true false"),hooks:{"#":H},modeProps:{fold:["brace","include"]}}),Ie("text/x-objectivec",{name:"clike",keywords:w(N+" "+L),types:I,builtin:w(Y),blockKeywords:w(z+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:w(B+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:w("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ce,hooks:{"#":H,"*":J},modeProps:{fold:["brace","include"]}}),Ie("text/x-objectivec++",{name:"clike",keywords:w(N+" "+L+" "+O),types:I,builtin:w(Y),blockKeywords:w(z+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:w(B+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:w("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ce,hooks:{"#":H,"*":J,u:be,U:be,L:be,R:be,0:ae,1:ae,2:ae,3:ae,4:ae,5:ae,6:ae,7:ae,8:ae,9:ae,token:function(T,P,$){if($=="variable"&&T.peek()=="("&&(P.prevToken==";"||P.prevToken==null||P.prevToken=="}")&&Re(T.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ie("text/x-squirrel",{name:"clike",keywords:w("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:V,blockKeywords:w("case catch class else for foreach if switch try while"),defKeywords:w("function local class"),typeFirstDefinitions:!0,atoms:w("true false null"),hooks:{"#":H},modeProps:{fold:["brace","include"]}});var Q=null;function q(T){return function(P,$){for(var M=!1,Z,Ce=!1;!P.eol();){if(!M&&P.match('"')&&(T=="single"||P.match('""'))){Ce=!0;break}if(!M&&P.match("``")){Q=q(T),Ce=!0;break}Z=P.next(),M=T=="single"&&!M&&Z=="\\"}return Ce&&($.tokenize=null),"string"}}Ie("text/x-ceylon",{name:"clike",keywords:w("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(T){var P=T.charAt(0);return P===P.toUpperCase()&&P!==P.toLowerCase()},blockKeywords:w("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:w("class dynamic function interface module object package value"),builtin:w("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:w("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(T){return T.eatWhile(/[\w\$_]/),"meta"},'"':function(T,P){return P.tokenize=q(T.match('""')?"triple":"single"),P.tokenize(T,P)},"`":function(T,P){return!Q||!T.match("`")?!1:(P.tokenize=Q,Q=null,P.tokenize(T,P))},"'":function(T){return T.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(T,P,$){if(($=="variable"||$=="type")&&P.prevToken==".")return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})})})()),Mf.exports}vb();var Ff={exports:{}},Wf;function Bm(){return Wf||(Wf=1,(function(l,u){(function(d){d(ss())})(function(d){var f={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},g={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};d.defineMode("xml",function(v,k){var C=v.indentUnit,w={},_=k.htmlMode?f:g;for(var N in _)w[N]=_[N];for(var N in k)w[N]=k[N];var O,L;function Y(A,Q){function q($){return Q.tokenize=$,$(A,Q)}var T=A.next();if(T=="<")return A.eat("!")?A.eat("[")?A.match("CDATA[")?q(V("atom","]]>")):null:A.match("--")?q(V("comment","-->")):A.match("DOCTYPE",!0,!0)?(A.eatWhile(/[\w\._\-]/),q(I(1))):null:A.eat("?")?(A.eatWhile(/[\w\._\-]/),Q.tokenize=V("meta","?>"),"meta"):(O=A.eat("/")?"closeTag":"openTag",Q.tokenize=U,"tag bracket");if(T=="&"){var P;return A.eat("#")?A.eat("x")?P=A.eatWhile(/[a-fA-F\d]/)&&A.eat(";"):P=A.eatWhile(/[\d]/)&&A.eat(";"):P=A.eatWhile(/[\w\.\-:]/)&&A.eat(";"),P?"atom":"error"}else return A.eatWhile(/[^&<]/),null}Y.isInText=!0;function U(A,Q){var q=A.next();if(q==">"||q=="/"&&A.eat(">"))return Q.tokenize=Y,O=q==">"?"endTag":"selfcloseTag","tag bracket";if(q=="=")return O="equals",null;if(q=="<"){Q.tokenize=Y,Q.state=ce,Q.tagName=Q.tagStart=null;var T=Q.tokenize(A,Q);return T?T+" tag error":"tag error"}else return/[\'\"]/.test(q)?(Q.tokenize=F(q),Q.stringStartCol=A.column(),Q.tokenize(A,Q)):(A.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function F(A){var Q=function(q,T){for(;!q.eol();)if(q.next()==A){T.tokenize=U;break}return"string"};return Q.isInAttribute=!0,Q}function V(A,Q){return function(q,T){for(;!q.eol();){if(q.match(Q)){T.tokenize=Y;break}q.next()}return A}}function I(A){return function(Q,q){for(var T;(T=Q.next())!=null;){if(T=="<")return q.tokenize=I(A+1),q.tokenize(Q,q);if(T==">")if(A==1){q.tokenize=Y;break}else return q.tokenize=I(A-1),q.tokenize(Q,q)}return"meta"}}function z(A){return A&&A.toLowerCase()}function B(A,Q,q){this.prev=A.context,this.tagName=Q||"",this.indent=A.indented,this.startOfLine=q,(w.doNotIndent.hasOwnProperty(Q)||A.context&&A.context.noIndent)&&(this.noIndent=!0)}function H(A){A.context&&(A.context=A.context.prev)}function J(A,Q){for(var q;;){if(!A.context||(q=A.context.tagName,!w.contextGrabbers.hasOwnProperty(z(q))||!w.contextGrabbers[z(q)].hasOwnProperty(z(Q))))return;H(A)}}function ce(A,Q,q){return A=="openTag"?(q.tagStart=Q.column(),ae):A=="closeTag"?be:ce}function ae(A,Q,q){return A=="word"?(q.tagName=Q.current(),L="tag",se):w.allowMissingTagName&&A=="endTag"?(L="tag bracket",se(A,Q,q)):(L="error",ae)}function be(A,Q,q){if(A=="word"){var T=Q.current();return q.context&&q.context.tagName!=T&&w.implicitlyClosed.hasOwnProperty(z(q.context.tagName))&&H(q),q.context&&q.context.tagName==T||w.matchClosing===!1?(L="tag",Re):(L="tag error",xe)}else return w.allowMissingTagName&&A=="endTag"?(L="tag bracket",Re(A,Q,q)):(L="error",xe)}function Re(A,Q,q){return A!="endTag"?(L="error",Re):(H(q),ce)}function xe(A,Q,q){return L="error",Re(A,Q,q)}function se(A,Q,q){if(A=="word")return L="attribute",Ie;if(A=="endTag"||A=="selfcloseTag"){var T=q.tagName,P=q.tagStart;return q.tagName=q.tagStart=null,A=="selfcloseTag"||w.autoSelfClosers.hasOwnProperty(z(T))?J(q,T):(J(q,T),q.context=new B(q,T,P==q.indented)),ce}return L="error",se}function Ie(A,Q,q){return A=="equals"?le:(w.allowMissing||(L="error"),se(A,Q,q))}function le(A,Q,q){return A=="string"?fe:A=="word"&&w.allowUnquoted?(L="string",se):(L="error",se(A,Q,q))}function fe(A,Q,q){return A=="string"?fe:se(A,Q,q)}return{startState:function(A){var Q={tokenize:Y,state:ce,indented:A||0,tagName:null,tagStart:null,context:null};return A!=null&&(Q.baseIndent=A),Q},token:function(A,Q){if(!Q.tagName&&A.sol()&&(Q.indented=A.indentation()),A.eatSpace())return null;O=null;var q=Q.tokenize(A,Q);return(q||O)&&q!="comment"&&(L=null,Q.state=Q.state(O||q,A,Q),L&&(q=L=="error"?q+" error":L)),q},indent:function(A,Q,q){var T=A.context;if(A.tokenize.isInAttribute)return A.tagStart==A.indented?A.stringStartCol+1:A.indented+C;if(T&&T.noIndent)return d.Pass;if(A.tokenize!=U&&A.tokenize!=Y)return q?q.match(/^(\s*)/)[0].length:0;if(A.tagName)return w.multilineTagIndentPastTag!==!1?A.tagStart+A.tagName.length+2:A.tagStart+C*(w.multilineTagIndentFactor||1);if(w.alignCDATA&&/<!\[CDATA\[/.test(Q))return 0;var P=Q&&/^<(\/)?([\w_:\.-]*)/.exec(Q);if(P&&P[1])for(;T;)if(T.tagName==P[2]){T=T.prev;break}else if(w.implicitlyClosed.hasOwnProperty(z(T.tagName)))T=T.prev;else break;else if(P)for(;T;){var $=w.contextGrabbers[z(T.tagName)];if($&&$.hasOwnProperty(z(P[2])))T=T.prev;else break}for(;T&&T.prev&&!T.startOfLine;)T=T.prev;return T?T.indent+C:A.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:w.htmlMode?"html":"xml",helperType:w.htmlMode?"html":"xml",skipAttribute:function(A){A.state==le&&(A.state=se)},xmlCurrentTag:function(A){return A.tagName?{name:A.tagName,close:A.type=="closeTag"}:null},xmlCurrentContext:function(A){for(var Q=[],q=A.context;q;q=q.prev)Q.push(q.tagName);return Q.reverse()}}}),d.defineMIME("text/xml","xml"),d.defineMIME("application/xml","xml"),d.mimeModes.hasOwnProperty("text/html")||d.defineMIME("text/html",{name:"xml",htmlMode:!0})})})()),Ff.exports}Bm();var Hf={exports:{}},Bf;function Um(){return Bf||(Bf=1,(function(l,u){(function(d){d(ss())})(function(d){d.defineMode("css",function(xe,se){var Ie=se.inline;se.propertyKeywords||(se=d.resolveMode("text/css"));var le=xe.indentUnit,fe=se.tokenHooks,A=se.documentTypes||{},Q=se.mediaTypes||{},q=se.mediaFeatures||{},T=se.mediaValueKeywords||{},P=se.propertyKeywords||{},$=se.nonStandardPropertyKeywords||{},M=se.fontProperties||{},Z=se.counterDescriptors||{},Ce=se.colorKeywords||{},ze=se.valueKeywords||{},qe=se.allowNested,Oe=se.lineComment,Se=se.supportsAtComponent===!0,Be=xe.highlightNonStandardPropertyKeywords!==!1,$e,et;function Ke(oe,Te){return $e=Te,oe}function Ft(oe,Te){var he=oe.next();if(fe[he]){var kt=fe[he](oe,Te);if(kt!==!1)return kt}if(he=="@")return oe.eatWhile(/[\w\\\-]/),Ke("def",oe.current());if(he=="="||(he=="~"||he=="|")&&oe.eat("="))return Ke(null,"compare");if(he=='"'||he=="'")return Te.tokenize=Yt(he),Te.tokenize(oe,Te);if(he=="#")return oe.eatWhile(/[\w\\\-]/),Ke("atom","hash");if(he=="!")return oe.match(/^\s*\w*/),Ke("keyword","important");if(/\d/.test(he)||he=="."&&oe.eat(/\d/))return oe.eatWhile(/[\w.%]/),Ke("number","unit");if(he==="-"){if(/[\d.]/.test(oe.peek()))return oe.eatWhile(/[\w.%]/),Ke("number","unit");if(oe.match(/^-[\w\\\-]*/))return oe.eatWhile(/[\w\\\-]/),oe.match(/^\s*:/,!1)?Ke("variable-2","variable-definition"):Ke("variable-2","variable");if(oe.match(/^\w+-/))return Ke("meta","meta")}else return/[,+>*\/]/.test(he)?Ke(null,"select-op"):he=="."&&oe.match(/^-?[_a-z][_a-z0-9-]*/i)?Ke("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(he)?Ke(null,he):oe.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(oe.current())&&(Te.tokenize=Ct),Ke("variable callee","variable")):/[\w\\\-]/.test(he)?(oe.eatWhile(/[\w\\\-]/),Ke("property","word")):Ke(null,null)}function Yt(oe){return function(Te,he){for(var kt=!1,Ye;(Ye=Te.next())!=null;){if(Ye==oe&&!kt){oe==")"&&Te.backUp(1);break}kt=!kt&&Ye=="\\"}return(Ye==oe||!kt&&oe!=")")&&(he.tokenize=null),Ke("string","string")}}function Ct(oe,Te){return oe.next(),oe.match(/^\s*[\"\')]/,!1)?Te.tokenize=null:Te.tokenize=Yt(")"),Ke(null,"(")}function xt(oe,Te,he){this.type=oe,this.indent=Te,this.prev=he}function tt(oe,Te,he,kt){return oe.context=new xt(he,Te.indentation()+(kt===!1?0:le),oe.context),he}function Ue(oe){return oe.context.prev&&(oe.context=oe.context.prev),oe.context.type}function vt(oe,Te,he){return ut[he.context.type](oe,Te,he)}function yt(oe,Te,he,kt){for(var Ye=kt||1;Ye>0;Ye--)he.context=he.context.prev;return vt(oe,Te,he)}function Qe(oe){var Te=oe.current().toLowerCase();ze.hasOwnProperty(Te)?et="atom":Ce.hasOwnProperty(Te)?et="keyword":et="variable"}var ut={};return ut.top=function(oe,Te,he){if(oe=="{")return tt(he,Te,"block");if(oe=="}"&&he.context.prev)return Ue(he);if(Se&&/@component/i.test(oe))return tt(he,Te,"atComponentBlock");if(/^@(-moz-)?document$/i.test(oe))return tt(he,Te,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(oe))return tt(he,Te,"atBlock");if(/^@(font-face|counter-style)/i.test(oe))return he.stateArg=oe,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(oe))return"keyframes";if(oe&&oe.charAt(0)=="@")return tt(he,Te,"at");if(oe=="hash")et="builtin";else if(oe=="word")et="tag";else{if(oe=="variable-definition")return"maybeprop";if(oe=="interpolation")return tt(he,Te,"interpolation");if(oe==":")return"pseudo";if(qe&&oe=="(")return tt(he,Te,"parens")}return he.context.type},ut.block=function(oe,Te,he){if(oe=="word"){var kt=Te.current().toLowerCase();return P.hasOwnProperty(kt)?(et="property","maybeprop"):$.hasOwnProperty(kt)?(et=Be?"string-2":"property","maybeprop"):qe?(et=Te.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(et+=" error","maybeprop")}else return oe=="meta"?"block":!qe&&(oe=="hash"||oe=="qualifier")?(et="error","block"):ut.top(oe,Te,he)},ut.maybeprop=function(oe,Te,he){return oe==":"?tt(he,Te,"prop"):vt(oe,Te,he)},ut.prop=function(oe,Te,he){if(oe==";")return Ue(he);if(oe=="{"&&qe)return tt(he,Te,"propBlock");if(oe=="}"||oe=="{")return yt(oe,Te,he);if(oe=="(")return tt(he,Te,"parens");if(oe=="hash"&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(Te.current()))et+=" error";else if(oe=="word")Qe(Te);else if(oe=="interpolation")return tt(he,Te,"interpolation");return"prop"},ut.propBlock=function(oe,Te,he){return oe=="}"?Ue(he):oe=="word"?(et="property","maybeprop"):he.context.type},ut.parens=function(oe,Te,he){return oe=="{"||oe=="}"?yt(oe,Te,he):oe==")"?Ue(he):oe=="("?tt(he,Te,"parens"):oe=="interpolation"?tt(he,Te,"interpolation"):(oe=="word"&&Qe(Te),"parens")},ut.pseudo=function(oe,Te,he){return oe=="meta"?"pseudo":oe=="word"?(et="variable-3",he.context.type):vt(oe,Te,he)},ut.documentTypes=function(oe,Te,he){return oe=="word"&&A.hasOwnProperty(Te.current())?(et="tag",he.context.type):ut.atBlock(oe,Te,he)},ut.atBlock=function(oe,Te,he){if(oe=="(")return tt(he,Te,"atBlock_parens");if(oe=="}"||oe==";")return yt(oe,Te,he);if(oe=="{")return Ue(he)&&tt(he,Te,qe?"block":"top");if(oe=="interpolation")return tt(he,Te,"interpolation");if(oe=="word"){var kt=Te.current().toLowerCase();kt=="only"||kt=="not"||kt=="and"||kt=="or"?et="keyword":Q.hasOwnProperty(kt)?et="attribute":q.hasOwnProperty(kt)?et="property":T.hasOwnProperty(kt)?et="keyword":P.hasOwnProperty(kt)?et="property":$.hasOwnProperty(kt)?et=Be?"string-2":"property":ze.hasOwnProperty(kt)?et="atom":Ce.hasOwnProperty(kt)?et="keyword":et="error"}return he.context.type},ut.atComponentBlock=function(oe,Te,he){return oe=="}"?yt(oe,Te,he):oe=="{"?Ue(he)&&tt(he,Te,qe?"block":"top",!1):(oe=="word"&&(et="error"),he.context.type)},ut.atBlock_parens=function(oe,Te,he){return oe==")"?Ue(he):oe=="{"||oe=="}"?yt(oe,Te,he,2):ut.atBlock(oe,Te,he)},ut.restricted_atBlock_before=function(oe,Te,he){return oe=="{"?tt(he,Te,"restricted_atBlock"):oe=="word"&&he.stateArg=="@counter-style"?(et="variable","restricted_atBlock_before"):vt(oe,Te,he)},ut.restricted_atBlock=function(oe,Te,he){return oe=="}"?(he.stateArg=null,Ue(he)):oe=="word"?(he.stateArg=="@font-face"&&!M.hasOwnProperty(Te.current().toLowerCase())||he.stateArg=="@counter-style"&&!Z.hasOwnProperty(Te.current().toLowerCase())?et="error":et="property","maybeprop"):"restricted_atBlock"},ut.keyframes=function(oe,Te,he){return oe=="word"?(et="variable","keyframes"):oe=="{"?tt(he,Te,"top"):vt(oe,Te,he)},ut.at=function(oe,Te,he){return oe==";"?Ue(he):oe=="{"||oe=="}"?yt(oe,Te,he):(oe=="word"?et="tag":oe=="hash"&&(et="builtin"),"at")},ut.interpolation=function(oe,Te,he){return oe=="}"?Ue(he):oe=="{"||oe==";"?yt(oe,Te,he):(oe=="word"?et="variable":oe!="variable"&&oe!="("&&oe!=")"&&(et="error"),"interpolation")},{startState:function(oe){return{tokenize:null,state:Ie?"block":"top",stateArg:null,context:new xt(Ie?"block":"top",oe||0,null)}},token:function(oe,Te){if(!Te.tokenize&&oe.eatSpace())return null;var he=(Te.tokenize||Ft)(oe,Te);return he&&typeof he=="object"&&($e=he[1],he=he[0]),et=he,$e!="comment"&&(Te.state=ut[Te.state]($e,oe,Te)),et},indent:function(oe,Te){var he=oe.context,kt=Te&&Te.charAt(0),Ye=he.indent;return he.type=="prop"&&(kt=="}"||kt==")")&&(he=he.prev),he.prev&&(kt=="}"&&(he.type=="block"||he.type=="top"||he.type=="interpolation"||he.type=="restricted_atBlock")?(he=he.prev,Ye=he.indent):(kt==")"&&(he.type=="parens"||he.type=="atBlock_parens")||kt=="{"&&(he.type=="at"||he.type=="atBlock"))&&(Ye=Math.max(0,he.indent-le))),Ye},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:Oe,fold:"brace"}});function f(xe){for(var se={},Ie=0;Ie<xe.length;++Ie)se[xe[Ie].toLowerCase()]=!0;return se}var g=["domain","regexp","url","url-prefix"],v=f(g),k=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],C=f(k),w=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],_=f(w),N=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],O=f(N),L=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],Y=f(L),U=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],F=f(U),V=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],I=f(V),z=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],B=f(z),H=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],J=f(H),ce=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],ae=f(ce),be=g.concat(k).concat(w).concat(N).concat(L).concat(U).concat(H).concat(ce);d.registerHelper("hintWords","css",be);function Re(xe,se){for(var Ie=!1,le;(le=xe.next())!=null;){if(Ie&&le=="/"){se.tokenize=null;break}Ie=le=="*"}return["comment","comment"]}d.defineMIME("text/css",{documentTypes:v,mediaTypes:C,mediaFeatures:_,mediaValueKeywords:O,propertyKeywords:Y,nonStandardPropertyKeywords:F,fontProperties:I,counterDescriptors:B,colorKeywords:J,valueKeywords:ae,tokenHooks:{"/":function(xe,se){return xe.eat("*")?(se.tokenize=Re,Re(xe,se)):!1}},name:"css"}),d.defineMIME("text/x-scss",{mediaTypes:C,mediaFeatures:_,mediaValueKeywords:O,propertyKeywords:Y,nonStandardPropertyKeywords:F,colorKeywords:J,valueKeywords:ae,fontProperties:I,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(xe,se){return xe.eat("/")?(xe.skipToEnd(),["comment","comment"]):xe.eat("*")?(se.tokenize=Re,Re(xe,se)):["operator","operator"]},":":function(xe){return xe.match(/^\s*\{/,!1)?[null,null]:!1},$:function(xe){return xe.match(/^[\w-]+/),xe.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(xe){return xe.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),d.defineMIME("text/x-less",{mediaTypes:C,mediaFeatures:_,mediaValueKeywords:O,propertyKeywords:Y,nonStandardPropertyKeywords:F,colorKeywords:J,valueKeywords:ae,fontProperties:I,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(xe,se){return xe.eat("/")?(xe.skipToEnd(),["comment","comment"]):xe.eat("*")?(se.tokenize=Re,Re(xe,se)):["operator","operator"]},"@":function(xe){return xe.eat("{")?[null,"interpolation"]:xe.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)?!1:(xe.eatWhile(/[\w\\\-]/),xe.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),d.defineMIME("text/x-gss",{documentTypes:v,mediaTypes:C,mediaFeatures:_,propertyKeywords:Y,nonStandardPropertyKeywords:F,fontProperties:I,counterDescriptors:B,colorKeywords:J,valueKeywords:ae,supportsAtComponent:!0,tokenHooks:{"/":function(xe,se){return xe.eat("*")?(se.tokenize=Re,Re(xe,se)):!1}},name:"css",helperType:"gss"})})})()),Hf.exports}Um();var Uf={exports:{}},qf;function xb(){return qf||(qf=1,(function(l,u){(function(d){d(ss(),Bm(),Hm(),Um())})(function(d){var f={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function g(O,L,Y){var U=O.current(),F=U.search(L);return F>-1?O.backUp(U.length-F):U.match(/<\/?$/)&&(O.backUp(U.length),O.match(L,!1)||O.match(U)),Y}var v={};function k(O){var L=v[O];return L||(v[O]=new RegExp("\\s+"+O+`\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))}function C(O,L){var Y=O.match(k(L));return Y?/^\s*(.*?)\s*$/.exec(Y[2])[1]:""}function w(O,L){return new RegExp((L?"^":"")+"</\\s*"+O+"\\s*>","i")}function _(O,L){for(var Y in O)for(var U=L[Y]||(L[Y]=[]),F=O[Y],V=F.length-1;V>=0;V--)U.unshift(F[V])}function N(O,L){for(var Y=0;Y<O.length;Y++){var U=O[Y];if(!U[0]||U[1].test(C(L,U[0])))return U[2]}}d.defineMode("htmlmixed",function(O,L){var Y=d.getMode(O,{name:"xml",htmlMode:!0,multilineTagIndentFactor:L.multilineTagIndentFactor,multilineTagIndentPastTag:L.multilineTagIndentPastTag,allowMissingTagName:L.allowMissingTagName}),U={},F=L&&L.tags,V=L&&L.scriptTypes;if(_(f,U),F&&_(F,U),V)for(var I=V.length-1;I>=0;I--)U.script.unshift(["type",V[I].matches,V[I].mode]);function z(B,H){var J=Y.token(B,H.htmlState),ce=/\btag\b/.test(J),ae;if(ce&&!/[<>\s\/]/.test(B.current())&&(ae=H.htmlState.tagName&&H.htmlState.tagName.toLowerCase())&&U.hasOwnProperty(ae))H.inTag=ae+" ";else if(H.inTag&&ce&&/>$/.test(B.current())){var be=/^([\S]+) (.*)/.exec(H.inTag);H.inTag=null;var Re=B.current()==">"&&N(U[be[1]],be[2]),xe=d.getMode(O,Re),se=w(be[1],!0),Ie=w(be[1],!1);H.token=function(le,fe){return le.match(se,!1)?(fe.token=z,fe.localState=fe.localMode=null,null):g(le,Ie,fe.localMode.token(le,fe.localState))},H.localMode=xe,H.localState=d.startState(xe,Y.indent(H.htmlState,"",""))}else H.inTag&&(H.inTag+=B.current(),B.eol()&&(H.inTag+=" "));return J}return{startState:function(){var B=d.startState(Y);return{token:z,inTag:null,localMode:null,localState:null,htmlState:B}},copyState:function(B){var H;return B.localState&&(H=d.copyState(B.localMode,B.localState)),{token:B.token,inTag:B.inTag,localMode:B.localMode,localState:H,htmlState:d.copyState(Y,B.htmlState)}},token:function(B,H){return H.token(B,H)},indent:function(B,H,J){return!B.localMode||/^\s*<\//.test(H)?Y.indent(B.htmlState,H,J):B.localMode.indent?B.localMode.indent(B.localState,H,J):d.Pass},innerMode:function(B){return{state:B.localState||B.htmlState,mode:B.localMode||Y}}}},"xml","javascript","css"),d.defineMIME("text/html","htmlmixed")})})()),Uf.exports}xb();var $f={exports:{}},Kf;function bb(){return Kf||(Kf=1,(function(l,u){(function(d){d(ss())})(function(d){var f={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},g=d.Pos;d.defineOption("autoCloseBrackets",!1,function(I,z,B){B&&B!=d.Init&&(I.removeKeyMap(k),I.state.closeBrackets=null),z&&(C(v(z,"pairs")),I.state.closeBrackets=z,I.addKeyMap(k))});function v(I,z){return z=="pairs"&&typeof I=="string"?I:typeof I=="object"&&I[z]!=null?I[z]:f[z]}var k={Backspace:N,Enter:O};function C(I){for(var z=0;z<I.length;z++){var B=I.charAt(z),H="'"+B+"'";k[H]||(k[H]=w(B))}}C(f.pairs+"`");function w(I){return function(z){return U(z,I)}}function _(I){var z=I.state.closeBrackets;if(!z||z.override)return z;var B=I.getModeAt(I.getCursor());return B.closeBrackets||z}function N(I){var z=_(I);if(!z||I.getOption("disableInput"))return d.Pass;for(var B=v(z,"pairs"),H=I.listSelections(),J=0;J<H.length;J++){if(!H[J].empty())return d.Pass;var ce=F(I,H[J].head);if(!ce||B.indexOf(ce)%2!=0)return d.Pass}for(var J=H.length-1;J>=0;J--){var ae=H[J].head;I.replaceRange("",g(ae.line,ae.ch-1),g(ae.line,ae.ch+1),"+delete")}}function O(I){var z=_(I),B=z&&v(z,"explode");if(!B||I.getOption("disableInput"))return d.Pass;for(var H=I.listSelections(),J=0;J<H.length;J++){if(!H[J].empty())return d.Pass;var ce=F(I,H[J].head);if(!ce||B.indexOf(ce)%2!=0)return d.Pass}I.operation(function(){var ae=I.lineSeparator()||`
`;I.replaceSelection(ae+ae,null),L(I,-1),H=I.listSelections();for(var be=0;be<H.length;be++){var Re=H[be].head.line;I.indentLine(Re,null,!0),I.indentLine(Re+1,null,!0)}})}function L(I,z){for(var B=[],H=I.listSelections(),J=0,ce=0;ce<H.length;ce++){var ae=H[ce];ae.head==I.getCursor()&&(J=ce);var be=ae.head.ch||z>0?{line:ae.head.line,ch:ae.head.ch+z}:{line:ae.head.line-1};B.push({anchor:be,head:be})}I.setSelections(B,J)}function Y(I){var z=d.cmpPos(I.anchor,I.head)>0;return{anchor:new g(I.anchor.line,I.anchor.ch+(z?-1:1)),head:new g(I.head.line,I.head.ch+(z?1:-1))}}function U(I,z){var B=_(I);if(!B||I.getOption("disableInput"))return d.Pass;var H=v(B,"pairs"),J=H.indexOf(z);if(J==-1)return d.Pass;for(var ce=v(B,"closeBefore"),ae=v(B,"triples"),be=H.charAt(J+1)==z,Re=I.listSelections(),xe=J%2==0,se,Ie=0;Ie<Re.length;Ie++){var le=Re[Ie],fe=le.head,A,Q=I.getRange(fe,g(fe.line,fe.ch+1));if(xe&&!le.empty())A="surround";else if((be||!xe)&&Q==z)be&&V(I,fe)?A="both":ae.indexOf(z)>=0&&I.getRange(fe,g(fe.line,fe.ch+3))==z+z+z?A="skipThree":A="skip";else if(be&&fe.ch>1&&ae.indexOf(z)>=0&&I.getRange(g(fe.line,fe.ch-2),fe)==z+z){if(fe.ch>2&&/\bstring/.test(I.getTokenTypeAt(g(fe.line,fe.ch-2))))return d.Pass;A="addFour"}else if(be){var q=fe.ch==0?" ":I.getRange(g(fe.line,fe.ch-1),fe);if(!d.isWordChar(Q)&&q!=z&&!d.isWordChar(q))A="both";else return d.Pass}else if(xe&&(Q.length===0||/\s/.test(Q)||ce.indexOf(Q)>-1))A="both";else return d.Pass;if(!se)se=A;else if(se!=A)return d.Pass}var T=J%2?H.charAt(J-1):z,P=J%2?z:H.charAt(J+1);I.operation(function(){if(se=="skip")L(I,1);else if(se=="skipThree")L(I,3);else if(se=="surround"){for(var $=I.getSelections(),M=0;M<$.length;M++)$[M]=T+$[M]+P;I.replaceSelections($,"around"),$=I.listSelections().slice();for(var M=0;M<$.length;M++)$[M]=Y($[M]);I.setSelections($)}else se=="both"?(I.replaceSelection(T+P,null),I.triggerElectric(T+P),L(I,-1)):se=="addFour"&&(I.replaceSelection(T+T+T+T,"before"),L(I,1))})}function F(I,z){var B=I.getRange(g(z.line,z.ch-1),g(z.line,z.ch+1));return B.length==2?B:null}function V(I,z){var B=I.getTokenAt(g(z.line,z.ch+1));return/\bstring/.test(B.type)&&B.start==z.ch&&(z.ch==0||!/\bstring/.test(I.getTokenTypeAt(z)))}})})()),$f.exports}bb();var Gf={exports:{}},Yf;function wb(){return Yf||(Yf=1,(function(l,u){(function(d){d(ss())})(function(d){var f=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),g=d.Pos,v={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function k(L){return L&&L.bracketRegex||/[(){}[\]]/}function C(L,Y,U){var F=L.getLineHandle(Y.line),V=Y.ch-1,I=U&&U.afterCursor;I==null&&(I=/(^| )cm-fat-cursor($| )/.test(L.getWrapperElement().className));var z=k(U),B=!I&&V>=0&&z.test(F.text.charAt(V))&&v[F.text.charAt(V)]||z.test(F.text.charAt(V+1))&&v[F.text.charAt(++V)];if(!B)return null;var H=B.charAt(1)==">"?1:-1;if(U&&U.strict&&H>0!=(V==Y.ch))return null;var J=L.getTokenTypeAt(g(Y.line,V+1)),ce=w(L,g(Y.line,V+(H>0?1:0)),H,J,U);return ce==null?null:{from:g(Y.line,V),to:ce&&ce.pos,match:ce&&ce.ch==B.charAt(0),forward:H>0}}function w(L,Y,U,F,V){for(var I=V&&V.maxScanLineLength||1e4,z=V&&V.maxScanLines||1e3,B=[],H=k(V),J=U>0?Math.min(Y.line+z,L.lastLine()+1):Math.max(L.firstLine()-1,Y.line-z),ce=Y.line;ce!=J;ce+=U){var ae=L.getLine(ce);if(ae){var be=U>0?0:ae.length-1,Re=U>0?ae.length:-1;if(!(ae.length>I))for(ce==Y.line&&(be=Y.ch-(U<0?1:0));be!=Re;be+=U){var xe=ae.charAt(be);if(H.test(xe)&&(F===void 0||(L.getTokenTypeAt(g(ce,be+1))||"")==(F||""))){var se=v[xe];if(se&&se.charAt(1)==">"==U>0)B.push(xe);else if(B.length)B.pop();else return{pos:g(ce,be),ch:xe}}}}}return ce-U==(U>0?L.lastLine():L.firstLine())?!1:null}function _(L,Y,U){for(var F=L.state.matchBrackets.maxHighlightLineLength||1e3,V=U&&U.highlightNonMatching,I=[],z=L.listSelections(),B=0;B<z.length;B++){var H=z[B].empty()&&C(L,z[B].head,U);if(H&&(H.match||V!==!1)&&L.getLine(H.from.line).length<=F){var J=H.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";I.push(L.markText(H.from,g(H.from.line,H.from.ch+1),{className:J})),H.to&&L.getLine(H.to.line).length<=F&&I.push(L.markText(H.to,g(H.to.line,H.to.ch+1),{className:J}))}}if(I.length){f&&L.state.focused&&L.focus();var ce=function(){L.operation(function(){for(var ae=0;ae<I.length;ae++)I[ae].clear()})};if(Y)setTimeout(ce,800);else return ce}}function N(L){L.operation(function(){L.state.matchBrackets.currentlyHighlighted&&(L.state.matchBrackets.currentlyHighlighted(),L.state.matchBrackets.currentlyHighlighted=null),L.state.matchBrackets.currentlyHighlighted=_(L,!1,L.state.matchBrackets)})}function O(L){L.state.matchBrackets&&L.state.matchBrackets.currentlyHighlighted&&(L.state.matchBrackets.currentlyHighlighted(),L.state.matchBrackets.currentlyHighlighted=null)}d.defineOption("matchBrackets",!1,function(L,Y,U){U&&U!=d.Init&&(L.off("cursorActivity",N),L.off("focus",N),L.off("blur",O),O(L)),Y&&(L.state.matchBrackets=typeof Y=="object"?Y:{},L.on("cursorActivity",N),L.on("focus",N),L.on("blur",O))}),d.defineExtension("matchBrackets",function(){_(this,!0)}),d.defineExtension("findMatchingBracket",function(L,Y,U){return(U||typeof Y=="boolean")&&(U?(U.strict=Y,Y=U):Y=Y?{strict:!0}:null),C(this,L,Y)}),d.defineExtension("scanForBracket",function(L,Y,U,F){return w(this,L,Y,U,F)})})})()),Gf.exports}wb();var Vf={exports:{}},Jf;function kb(){return Jf||(Jf=1,(function(l,u){(function(d){d(ss())})(function(d){var f="CodeMirror-hint",g="CodeMirror-hint-active";d.showHint=function(I,z,B){if(!z)return I.showHint(B);B&&B.async&&(z.async=!0);var H={hint:z};if(B)for(var J in B)H[J]=B[J];return I.showHint(H)},d.defineExtension("showHint",function(I){I=w(this,this.getCursor("start"),I);var z=this.listSelections();if(!(z.length>1)){if(this.somethingSelected()){if(!I.hint.supportsSelection)return;for(var B=0;B<z.length;B++)if(z[B].head.line!=z[B].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var H=this.state.completionActive=new v(this,I);H.options.hint&&(d.signal(this,"startCompletion",this),H.update(!0))}}),d.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function v(I,z){if(this.cm=I,this.options=z,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var B=this;I.on("cursorActivity",this.activityFunc=function(){B.cursorActivity()})}}var k=window.requestAnimationFrame||function(I){return setTimeout(I,1e3/60)},C=window.cancelAnimationFrame||clearTimeout;v.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&d.signal(this.data,"close"),this.widget&&this.widget.close(),d.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(I,z){var B=I.list[z],H=this;this.cm.operation(function(){B.hint?B.hint(H.cm,I,B):H.cm.replaceRange(_(B),B.from||I.from,B.to||I.to,"complete"),d.signal(I,"pick",B),H.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(C(this.debounce),this.debounce=0);var I=this.startPos;this.data&&(I=this.data.from);var z=this.cm.getCursor(),B=this.cm.getLine(z.line);if(z.line!=this.startPos.line||B.length-z.ch!=this.startLen-this.startPos.ch||z.ch<I.ch||this.cm.somethingSelected()||!z.ch||this.options.closeCharacters.test(B.charAt(z.ch-1)))this.close();else{var H=this;this.debounce=k(function(){H.update()}),this.widget&&this.widget.disable()}},update:function(I){if(this.tick!=null){var z=this,B=++this.tick;U(this.options.hint,this.cm,this.options,function(H){z.tick==B&&z.finishUpdate(H,I)})}},finishUpdate:function(I,z){this.data&&d.signal(this.data,"update");var B=this.widget&&this.widget.picked||z&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=I,I&&I.list.length&&(B&&I.list.length==1?this.pick(I,0):(this.widget=new L(this,I),d.signal(I,"shown")))}};function w(I,z,B){var H=I.options.hintOptions,J={};for(var ce in V)J[ce]=V[ce];if(H)for(var ce in H)H[ce]!==void 0&&(J[ce]=H[ce]);if(B)for(var ce in B)B[ce]!==void 0&&(J[ce]=B[ce]);return J.hint.resolve&&(J.hint=J.hint.resolve(I,z)),J}function _(I){return typeof I=="string"?I:I.text}function N(I,z){var B={Up:function(){z.moveFocus(-1)},Down:function(){z.moveFocus(1)},PageUp:function(){z.moveFocus(-z.menuSize()+1,!0)},PageDown:function(){z.moveFocus(z.menuSize()-1,!0)},Home:function(){z.setFocus(0)},End:function(){z.setFocus(z.length-1)},Enter:z.pick,Tab:z.pick,Esc:z.close},H=/Mac/.test(navigator.platform);H&&(B["Ctrl-P"]=function(){z.moveFocus(-1)},B["Ctrl-N"]=function(){z.moveFocus(1)});var J=I.options.customKeys,ce=J?{}:B;function ae(xe,se){var Ie;typeof se!="string"?Ie=function(le){return se(le,z)}:B.hasOwnProperty(se)?Ie=B[se]:Ie=se,ce[xe]=Ie}if(J)for(var be in J)J.hasOwnProperty(be)&&ae(be,J[be]);var Re=I.options.extraKeys;if(Re)for(var be in Re)Re.hasOwnProperty(be)&&ae(be,Re[be]);return ce}function O(I,z){for(;z&&z!=I;){if(z.nodeName.toUpperCase()==="LI"&&z.parentNode==I)return z;z=z.parentNode}}function L(I,z){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=I,this.data=z,this.picked=!1;var B=this,H=I.cm,J=H.getInputField().ownerDocument,ce=J.defaultView||J.parentWindow,ae=this.hints=J.createElement("ul");ae.setAttribute("role","listbox"),ae.setAttribute("aria-expanded","true"),ae.id=this.id;var be=I.cm.options.theme;ae.className="CodeMirror-hints "+be,this.selectedHint=z.selectedHint||0;for(var Re=z.list,xe=0;xe<Re.length;++xe){var se=ae.appendChild(J.createElement("li")),Ie=Re[xe],le=f+(xe!=this.selectedHint?"":" "+g);Ie.className!=null&&(le=Ie.className+" "+le),se.className=le,xe==this.selectedHint&&se.setAttribute("aria-selected","true"),se.id=this.id+"-"+xe,se.setAttribute("role","option"),Ie.render?Ie.render(se,z,Ie):se.appendChild(J.createTextNode(Ie.displayText||_(Ie))),se.hintId=xe}var fe=I.options.container||J.body,A=H.cursorCoords(I.options.alignWithWord?z.from:null),Q=A.left,q=A.bottom,T=!0,P=0,$=0;if(fe!==J.body){var M=["absolute","relative","fixed"].indexOf(ce.getComputedStyle(fe).position)!==-1,Z=M?fe:fe.offsetParent,Ce=Z.getBoundingClientRect(),ze=J.body.getBoundingClientRect();P=Ce.left-ze.left-Z.scrollLeft,$=Ce.top-ze.top-Z.scrollTop}ae.style.left=Q-P+"px",ae.style.top=q-$+"px";var qe=ce.innerWidth||Math.max(J.body.offsetWidth,J.documentElement.offsetWidth),Oe=ce.innerHeight||Math.max(J.body.offsetHeight,J.documentElement.offsetHeight);fe.appendChild(ae),H.getInputField().setAttribute("aria-autocomplete","list"),H.getInputField().setAttribute("aria-owns",this.id),H.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var Se=I.options.moveOnOverlap?ae.getBoundingClientRect():new DOMRect,Be=I.options.paddingForScrollbar?ae.scrollHeight>ae.clientHeight+1:!1,$e;setTimeout(function(){$e=H.getScrollInfo()});var et=Se.bottom-Oe;if(et>0){var Ke=Se.bottom-Se.top,Ft=Se.top-(A.bottom-A.top)-2;Oe-Se.top<Ft?(Ke>Ft&&(ae.style.height=(Ke=Ft)+"px"),ae.style.top=(q=A.top-Ke)-$+"px",T=!1):ae.style.height=Oe-Se.top-2+"px"}var Yt=Se.right-qe;if(Be&&(Yt+=H.display.nativeBarWidth),Yt>0&&(Se.right-Se.left>qe&&(ae.style.width=qe-5+"px",Yt-=Se.right-Se.left-qe),ae.style.left=(Q=Math.max(A.left-Yt-P,0))+"px"),Be)for(var Ct=ae.firstChild;Ct;Ct=Ct.nextSibling)Ct.style.paddingRight=H.display.nativeBarWidth+"px";if(H.addKeyMap(this.keyMap=N(I,{moveFocus:function(Ue,vt){B.changeActive(B.selectedHint+Ue,vt)},setFocus:function(Ue){B.changeActive(Ue)},menuSize:function(){return B.screenAmount()},length:Re.length,close:function(){I.close()},pick:function(){B.pick()},data:z})),I.options.closeOnUnfocus){var xt;H.on("blur",this.onBlur=function(){xt=setTimeout(function(){I.close()},100)}),H.on("focus",this.onFocus=function(){clearTimeout(xt)})}H.on("scroll",this.onScroll=function(){var Ue=H.getScrollInfo(),vt=H.getWrapperElement().getBoundingClientRect();$e||($e=H.getScrollInfo());var yt=q+$e.top-Ue.top,Qe=yt-(ce.pageYOffset||(J.documentElement||J.body).scrollTop);if(T||(Qe+=ae.offsetHeight),Qe<=vt.top||Qe>=vt.bottom)return I.close();ae.style.top=yt+"px",ae.style.left=Q+$e.left-Ue.left+"px"}),d.on(ae,"dblclick",function(Ue){var vt=O(ae,Ue.target||Ue.srcElement);vt&&vt.hintId!=null&&(B.changeActive(vt.hintId),B.pick())}),d.on(ae,"click",function(Ue){var vt=O(ae,Ue.target||Ue.srcElement);vt&&vt.hintId!=null&&(B.changeActive(vt.hintId),I.options.completeOnSingleClick&&B.pick())}),d.on(ae,"mousedown",function(){setTimeout(function(){H.focus()},20)});var tt=this.getSelectedHintRange();return(tt.from!==0||tt.to!==0)&&this.scrollToActive(),d.signal(z,"select",Re[this.selectedHint],ae.childNodes[this.selectedHint]),!0}L.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var I=this.completion.cm.getInputField();I.removeAttribute("aria-activedescendant"),I.removeAttribute("aria-owns");var z=this.completion.cm;this.completion.options.closeOnUnfocus&&(z.off("blur",this.onBlur),z.off("focus",this.onFocus)),z.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var I=this;this.keyMap={Enter:function(){I.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(I,z){if(I>=this.data.list.length?I=z?this.data.list.length-1:0:I<0&&(I=z?0:this.data.list.length-1),this.selectedHint!=I){var B=this.hints.childNodes[this.selectedHint];B&&(B.className=B.className.replace(" "+g,""),B.removeAttribute("aria-selected")),B=this.hints.childNodes[this.selectedHint=I],B.className+=" "+g,B.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",B.id),this.scrollToActive(),d.signal(this.data,"select",this.data.list[this.selectedHint],B)}},scrollToActive:function(){var I=this.getSelectedHintRange(),z=this.hints.childNodes[I.from],B=this.hints.childNodes[I.to],H=this.hints.firstChild;z.offsetTop<this.hints.scrollTop?this.hints.scrollTop=z.offsetTop-H.offsetTop:B.offsetTop+B.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=B.offsetTop+B.offsetHeight-this.hints.clientHeight+H.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var I=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-I),to:Math.min(this.data.list.length-1,this.selectedHint+I)}}};function Y(I,z){if(!I.somethingSelected())return z;for(var B=[],H=0;H<z.length;H++)z[H].supportsSelection&&B.push(z[H]);return B}function U(I,z,B,H){if(I.async)I(z,H,B);else{var J=I(z,B);J&&J.then?J.then(H):H(J)}}function F(I,z){var B=I.getHelpers(z,"hint"),H;if(B.length){var J=function(ce,ae,be){var Re=Y(ce,B);function xe(se){if(se==Re.length)return ae(null);U(Re[se],ce,be,function(Ie){Ie&&Ie.list.length>0?ae(Ie):xe(se+1)})}xe(0)};return J.async=!0,J.supportsSelection=!0,J}else return(H=I.getHelper(I.getCursor(),"hintWords"))?function(ce){return d.hint.fromList(ce,{words:H})}:d.hint.anyword?function(ce,ae){return d.hint.anyword(ce,ae)}:function(){}}d.registerHelper("hint","auto",{resolve:F}),d.registerHelper("hint","fromList",function(I,z){var B=I.getCursor(),H=I.getTokenAt(B),J,ce=d.Pos(B.line,H.start),ae=B;H.start<B.ch&&/\w/.test(H.string.charAt(B.ch-H.start-1))?J=H.string.substr(0,B.ch-H.start):(J="",ce=B);for(var be=[],Re=0;Re<z.words.length;Re++){var xe=z.words[Re];xe.slice(0,J.length)==J&&be.push(xe)}if(be.length)return{list:be,from:ce,to:ae}}),d.commands.autocomplete=d.showHint;var V={hint:d.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};d.defineOption("hintOptions",null)})})()),Vf.exports}kb();var Xf={exports:{}},Qf;function Sb(){return Qf||(Qf=1,(function(l,u){(function(d){d(ss())})(function(d){var f=/[\w$]+/,g=500;d.registerHelper("hint","anyword",function(v,k){for(var C=k&&k.word||f,w=k&&k.range||g,_=v.getCursor(),N=v.getLine(_.line),O=_.ch,L=O;L&&C.test(N.charAt(L-1));)--L;for(var Y=L!=O&&N.slice(L,O),U=k&&k.list||[],F={},V=new RegExp(C.source,"g"),I=-1;I<=1;I+=2)for(var z=_.line,B=Math.min(Math.max(z+I*w,v.firstLine()),v.lastLine())+I;z!=B;z+=I)for(var H=v.getLine(z),J;J=V.exec(H);)z==_.line&&J[0]===Y||(!Y||J[0].lastIndexOf(Y,0)==0)&&!Object.prototype.hasOwnProperty.call(F,J[0])&&(F[J[0]]=!0,U.push(J[0]));return{list:U,from:d.Pos(_.line,L),to:d.Pos(_.line,O)}})})})()),Xf.exports}Sb();function _b(l){return l==="python"?"python":l==="csharp"?"text/x-csharp":l==="java"?"text/x-java":l==="jsx"?{name:"javascript",jsx:!0}:l==="javascript"?"javascript":l==="html"?"htmlmixed":l==="css"?"css":"text/plain"}function qm({value:l,onChange:u,language:d}){const f=ve.useRef(null),g=ve.useRef(null),v=ve.useRef(u);return v.current=u,ve.useEffect(()=>{const k=Af.fromTextArea(f.current,{mode:_b(d),lineNumbers:!0,lineWrapping:!1,indentUnit:4,tabSize:4,indentWithTabs:!1,smartIndent:!0,electricChars:!0,autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,extraKeys:{Tab(w){if(w.somethingSelected())w.execCommand("indentMore");else{const _=w.getOption("indentUnit")-w.getCursor().ch%w.getOption("indentUnit");w.replaceSelection(" ".repeat(_),"end")}},"Shift-Tab":w=>w.execCommand("indentLess"),"Ctrl-Space":w=>w.showHint({hint:Af.hint.anyword,completeSingle:!1})}});k.getInputField().setAttribute("aria-label","Code editor"),k.on("change",w=>{var _;return(_=v.current)==null?void 0:_.call(v,w.getValue())}),g.current=k;const C=typeof ResizeObserver<"u"?new ResizeObserver(()=>k.refresh()):null;return C==null||C.observe(k.getWrapperElement()),()=>{C==null||C.disconnect(),k.toTextArea(),g.current=null}},[d]),ve.useEffect(()=>{const k=g.current;if(k&&k.getValue()!==l){const C=k.getCursor();k.setValue(l??""),k.setCursor(C)}},[l]),c.jsx("div",{className:"code-editor-wrap",children:c.jsx("textarea",{ref:f,"aria-label":"Code editor",defaultValue:l,spellCheck:!1})})}const bd=l=>String(l??"").replace(/\r\n/g,`
`).replace(/\n$/,"");function Cb(l){const u=Array.isArray(l)?l:[];return{passed:u.filter(d=>d.passed===!0).length,total:u.length}}function Zf(l,u){const d=String(l||"").split(/\r?\n/).find(g=>g.startsWith("PUBLIC_CHECK_RESULTS="));if(!d)throw new Error("Python returned no example-check results. See Console for errors.");const f=JSON.parse(d.slice(21));if(!Array.isArray(f)||f.length!==u.length)throw new Error("Python did not finish every published example.");return u.map((g,v)=>({call:g.call||"Example "+(v+1),expected:String(g.expected??""),received:String(f[v].actual??""),error:String(f[v].error||""),passed:f[v].ok===!0}))}function Tb(l,u){return u.map((d,f)=>{var g,v,k,C;return{call:"main("+JSON.stringify(d.args||[])+")",expected:bd(d.expected),received:bd((g=l[f])==null?void 0:g.stdout),error:String(((v=l[f])==null?void 0:v.diagnostics)||((k=l[f])==null?void 0:k.stderr)||""),passed:((C=l[f])==null?void 0:C.success)===!0&&bd(l[f].stdout)===bd(d.expected)}})}function jb(l,u,d){return d(l,u.length).map(g=>({call:u[g.index].call,expected:g.expected,received:g.received,error:g.error,passed:g.passed}))}function $m(l){return(l||[]).map((u,d)=>({call:String(u.call||u.label||"Check "+(d+1)),expected:String(u.expected??"Requirement met"),received:String(u.received??(u.pass===!0||u.passed===!0?"Requirement met":"Not yet met")),error:String(u.error||""),passed:u.pass===!0||u.passed===!0}))}function Nb(l){var u;return((u=/^\s*(?:async\s+)?def\s+([A-Za-z_]\w*)\s*\(/m.exec(l))==null?void 0:u[1])||null}function uc(l,u){var d,f,g;return u==="python"?Nb(l):u==="javascript"?((d=/(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:d[1])||null:u==="csharp"?((f=/\b(?:public\s+)?static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:f[1])||null:u==="java"&&((g=/\bpublic\s+static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:g[1])||null}const Eb=uc;function oh(l,u,d=null){if(typeof l=="string")return JSON.stringify(l);if(l===null)return"null";if(typeof l=="boolean")return String(l);if(typeof l=="number")return Number.isFinite(l)?String(l):"0";if(Array.isArray(l)){const f=l.every(w=>Number.isInteger(w)),g=l.every(w=>typeof w=="string"),v=l.every(w=>typeof w=="boolean"),k=l.length===0&&d?d:f?"int":g?"string":v?"bool":"double";return"new "+(u==="java"?k==="string"?"String":k==="bool"?"boolean":k:k)+"[]{"+l.map(w=>oh(w,u)).join(",")+"}"}throw new Error("This example uses a data type unsupported by the browser checker.")}function ah(l,u,d){var k;const f=uc(d,u)||uc(l.starter||"",u);if(!f)throw new Error("The checker could not find a function declaration.");const g=l.challengeExamples||[],v=(((k=g[0])==null?void 0:k.input)||[]).map((C,w)=>{const _=g.map(N=>{var O;return(O=N.input)==null?void 0:O[w]}).find(N=>Array.isArray(N)&&N.length>0);return Array.isArray(_)?typeof _[0]=="boolean"?"bool":typeof _[0]=="string"?"string":Number.isInteger(_[0])?"int":"double":null});return g.map(C=>({...C,call:f+"("+(C.input||[]).map((w,_)=>oh(w,u,v[_])).join(", ")+")",expectedLiteral:oh(C.expected,u),expected:String(C.expected)}))}function Lb(l,u,d=!0){const f=uc(l,"python")||uc(u.starter||"","python");if(!f)throw new Error("Define the challenge function before running it.");const g=u.challengeExamples||[];return["import json as __json, io as __io, contextlib as __ctx","__source = "+JSON.stringify(l),"__cases = __json.loads("+JSON.stringify(JSON.stringify(d?g:g.slice(0,1)))+")","__results = []","for __case in __cases:","    try:",'        __env = {"__name__":"student"}','        with __ctx.redirect_stdout(__io.StringIO()): exec(compile(__source,"main.py","exec"),__env)',"        __actual = __env["+JSON.stringify(f)+'](*__case["input"])','        __ok = type(__actual) is type(__case["expected"]) and __actual == __case["expected"]','        __results.append({"ok":__ok,"actual":repr(__actual)[:300],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","error":type(__error).__name__+": "+str(__error)[:300]})','print("PUBLIC_CHECK_RESULTS="+__json.dumps(__results))'].join(`
`)}function Pb(l,u){const d=ah(u,"java",l);if(!d.length)throw new Error("No visible examples are available.");const f=d.map((g,v)=>`try{Object actual=Solution.${g.call}; Object expected=${g.expectedLiteral}; boolean ok=java.util.Objects.deepEquals(actual,expected); String received=java.util.Arrays.deepToString(new Object[]{actual}); received=received.substring(1,received.length()-1); System.out.println("PLAYGROUND_CASE:${v}:"+(ok?"1":"0")+":"+received);}catch(Throwable error){System.out.println("PLAYGROUND_CASE:${v}:0:ERROR "+error.getClass().getSimpleName()+" "+error.getMessage());}`);return l+`
class __PlaygroundPracticeChecks {public static void main(String[] args) {`+f.join(`
`)+"}}"}function Ab(l,u){const d=String(l||"").split(/\r?\n/).filter(f=>f.startsWith("PLAYGROUND_CASE:"));if(d.length!==u.length)throw new Error("Java did not return all published examples.");return u.map((f,g)=>{const v=d[g],k=/^PLAYGROUND_CASE:(\d+):([01]):([\s\S]*)$/.exec(v);if(!k||Number(k[1])!==g)throw Error("Java returned invalid check data.");return{call:f.call,expected:f.expected,received:k[3],passed:k[2]==="1",error:k[3].startsWith("ERROR ")?k[3]:""}})}function Km({text:l="",checksText:u="",checkRows:d=null,points:f=null,language:g,activeTab:v,onTabChange:k,previewEnabled:C=!1,previewDoc:w="",previewRef:_}){const N=C?["Preview","Console","Checks"]:["Console","Checks"],O=Array.isArray(d),{passed:L,total:Y}=Cb(d),U=Number.isFinite(Number(f))&&f!==null&&Y?Number(f)*L/Y:null;return c.jsxs("section",{className:"console-pane","aria-label":"Workspace output",children:[c.jsxs("div",{className:"console-heading",children:[c.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Output views",children:N.map(F=>c.jsxs("button",{type:"button",role:"tab","aria-selected":v===F,className:v===F?"active":"",onClick:()=>k(F),children:[F==="Console"&&c.jsx(nv,{size:14}),F]},F))}),c.jsx("span",{children:"Practice · no submissions"})]}),["html","css","javascript","jsx"].includes(g)&&c.jsx("div",{className:"console-preview",hidden:!C||v!=="Preview",children:c.jsx("iframe",{ref:_,title:"Live student code preview",className:"live-preview-frame",sandbox:"allow-scripts allow-forms",srcDoc:w||"<p>Choose Run to preview your code.</p>"})}),v==="Checks"?c.jsx("div",{className:"practice-check-content",role:"tabpanel","aria-label":"Check feedback",children:O?c.jsxs(c.Fragment,{children:[c.jsxs("p",{className:"check-summary",children:["Checks ",c.jsxs("strong",{children:[L," of ",Y," passing"]})]}),c.jsx("p",{className:"check-next",children:L===Y?"All published practice checks passed.":"Revise your code, then check again."}),c.jsx("div",{className:"practice-check-cards",children:d.map((F,V)=>c.jsxs("article",{className:"practice-check-card "+(F.passed?"passed":"needs-revision"),children:[c.jsxs("header",{children:[c.jsx("code",{children:F.call||"Example "+(V+1)}),c.jsx("span",{children:F.passed?"Pass":"Review"})]}),c.jsxs("dl",{children:[c.jsx("dt",{children:"Expected"}),c.jsx("dd",{children:c.jsx("pre",{children:F.expected??""})}),c.jsx("dt",{children:F.error?"Error":"Received"}),c.jsx("dd",{children:c.jsx("pre",{children:F.error||F.received||"None"})})]})]},V))}),U!==null&&c.jsxs("p",{className:"check-practice-score",children:["Public-check score: ",Number(U.toFixed(2)),"/",f," practice points · ",L,"/",Y," examples passed."]}),c.jsx("p",{className:"check-disclaimer",children:"Public examples only. These results do not award grades, completion, or earned points."})]}):c.jsx("pre",{className:"practice-check-message",children:u})}):v==="Console"?c.jsx("pre",{role:"tabpanel","aria-label":"Console output",children:l}):null]})}const Rb="PUBLIC_CHECK_RESULTS=";function Ib(l,u){const d=Array.isArray(l==null?void 0:l.cases)?l.cases:[],f=JSON.stringify(String(u)),g=JSON.stringify(JSON.stringify(d));return["import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx","import traceback as __trace","__student = "+f,"__cases = __json.loads("+g+")","__results = []","for __example in __cases:","    __out = __io.StringIO()","    try:",'        __env = {"__name__": "__main__"}',"        with __ctx.redirect_stdout(__out), __ctx.redirect_stderr(__out):",'            exec(compile(__student, "main.py", "exec"), __env)',(l==null?void 0:l.mode)==="function"?'            __actual = eval(compile(__ast.parse(__example["call"], mode="eval"), "example", "eval"), __env)':'            __actual = __out.getvalue().rstrip("\\n")',(l==null?void 0:l.mode)==="function"?'        __expected = __ast.literal_eval(__example["expected"])':'        __expected = __example["expected"].rstrip("\\n")',(l==null?void 0:l.mode)==="function"?"        __ok = type(__actual) is type(__expected) and __actual == __expected":"        __ok = __actual == __expected",'        __results.append({"ok":__ok,"actual":str(__actual)[:240],"expected":str(__expected)[:240],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","expected":str(__example.get("expected",""))[:240],"error":type(__error).__name__+": "+str(__error)[:200]})','print("'+Rb+'"+__json.dumps(__results))'].join(`
`)+`
`}function Ob(l,u){const d=String(u).split("(",1)[0].trim();return["import ast as __ast, io as __io, json as __json, contextlib as __ctx",'__env={"__name__":"student"}',"__stream=__io.StringIO()","with __ctx.redirect_stdout(__stream):","    exec(compile("+JSON.stringify(String(l))+',"main.py","exec"),__env)',"    __name="+JSON.stringify(d),'    if __name not in __env and callable(__env.get("solution")): __env[__name]=__env["solution"]',"    __value=eval(compile(__ast.parse("+JSON.stringify(String(u))+',mode="eval"),"sample call","eval"),__env)','print("PLAYGROUND_PREVIEW="+__json.dumps({"call":'+JSON.stringify(String(u))+',"returned":repr(__value)[:5000],"printed":__stream.getvalue()[:10000]}))'].join(`
`)}const Db="modulepreload",Mb=function(l){return"/playground/integration/"+l},em={},Gm=function(u,d,f){let g=Promise.resolve();if(d&&d.length>0){let k=function(_){return Promise.all(_.map(N=>Promise.resolve(N).then(O=>({status:"fulfilled",value:O}),O=>({status:"rejected",reason:O}))))};document.getElementsByTagName("link");const C=document.querySelector("meta[property=csp-nonce]"),w=(C==null?void 0:C.nonce)||(C==null?void 0:C.getAttribute("nonce"));g=k(d.map(_=>{if(_=Mb(_),_ in em)return;em[_]=!0;const N=_.endsWith(".css"),O=N?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${O}`))return;const L=document.createElement("link");if(L.rel=N?"stylesheet":Db,N||(L.as="script"),L.crossOrigin="",L.href=_,w&&L.setAttribute("nonce",w),document.head.appendChild(L),N)return new Promise((Y,U)=>{L.addEventListener("load",Y),L.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${_}`)))})}))}function v(k){const C=new Event("vite:preloadError",{cancelable:!0});if(C.payload=k,window.dispatchEvent(C),!C.defaultPrevented)throw k}return g.then(k=>{for(const C of k||[])C.status==="rejected"&&v(C.reason);return u().catch(v)})},As="/playground/";async function zb(l,u=()=>{}){if(l==="python"){const{PythonRunner:d}=await Gm(async()=>{const{PythonRunner:f}=await import("./pythonRunner-Camw9ZBH.js");return{PythonRunner:f}},[]);return{kind:"python",instance:new d({onStatus:u})}}if(l==="java"){const{JavaRunner:d}=await import(As+"java-runner.mjs");return{kind:"java",instance:new d(u)}}if(l==="csharp"){const[{CSharpRunner:d},f]=await Promise.all([import(As+"csharp-runner.mjs"),import(As+"csharp-protocol.mjs")]);return{kind:"csharp",instance:new d({onStatus:u}),protocol:f}}throw Error("No code compiler for "+l)}function Fb(l){var u;return((u=/\b(?:public\s+)?(?:static\s+)?class\s+([A-Za-z_]\w*)/.exec(String(l||"")))==null?void 0:u[1])||""}const tm='<main class="event-card"><h1>Robotics meetup</h1><p>Thursday at 4 PM in the lab.</p><p>Attendees: <span id="count">0</span></p><button id="join">Join</button></main>',Td=l=>JSON.stringify(String(l)).replace(/</g,"\\u003c");function Wb(l){return l==="html"?`(()=>{
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
  })();`}function Hb(l,u,d){var k;const f=(u.challengeExamples||[]).slice(0,d?void 0:1);if(!f.length)throw Error("No public challenge examples were published.");const g=(k=/\b(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:k[1];if(!g)throw Error("Define and export the challenge function.");const v=String(l).replace(/\bexport\s+(?=(?:async\s+)?function|const|let|class)/g,"");return`(()=>{
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
  })();`}function Bb(l){return"<script>"+l.replace(/<\/script/gi,"<\\/script")+"<\/script>"}async function Lh({code:l,language:u,lessonId:d,task:f={},token:g,check:v=!0}){if(!g)throw Error("A preview token is required.");if(f.webFiles){const{assembleWebFiles:F}=await Gm(async()=>{const{assembleWebFiles:ae}=await Promise.resolve().then(()=>Kb);return{assembleWebFiles:ae}},[]),V=u==="jsx"?"App.jsx":"script.js";let I=null;u==="jsx"&&(typeof window.PlaygroundJSX!="function"&&await new Promise((ae,be)=>{const Re=document.createElement("script");Re.src=As+"vendor/learning/jsx.js",Re.onload=ae,Re.onerror=()=>be(Error("React JSX compiler could not load.")),document.head.append(Re)}),I=window.PlaygroundJSX(f.webFiles["App.jsx"]||""));const{html:z,linkedStyle:B,linkedScript:H}=F(f.webFiles,{scriptName:V,scriptOverride:I});if(f.projectId){const{buildProjectPreview:ae}=await import(As+"project-preview.mjs");return ae(z,{token:g,step:f.stepId,projectId:f.projectId,check:v})}const J='<script src="'+As+'vendor/learning/react.js"><\/script>',ce=u==="jsx"?/<\/head\s*>/i.test(z)?z.replace(/<\/head\s*>/i,J+"</head>"):J+z:z;return Lh({code:ce,language:"html",lessonId:d,task:{},token:g,check:v})}if(f.projectId){const{buildProjectPreview:F}=await import(As+"project-preview.mjs");return F(l,{token:g,step:f.stepId,projectId:f.projectId,check:v})}const{previewConsoleBridge:k}=await import(As+"console-drawer.mjs"),C=Bb(k(g)),w=Td;let _="",N="",O="";if(f.isChallenge&&u==="javascript")_="<main><h2>JavaScript challenge</h2><p>See the Checks and Console tabs for actual function results.</p></main>",N=Hb(l,f,v);else if(u==="html")_=String(l);else if(u==="css")_="<style>"+String(l).replace(/<\/style/gi,"")+"</style>"+tm;else if(u==="javascript")_=tm,N=l;else if(u==="jsx")_='<div id="root"></div>',typeof window.PlaygroundJSX!="function"&&await new Promise((F,V)=>{const I=document.createElement("script");I.src=As+"vendor/learning/jsx.js",I.onload=F,I.onerror=()=>V(Error("React JSX compiler could not load.")),document.head.append(I)}),N=window.PlaygroundJSX(l),O='<script src="'+As+'vendor/learning/react.js"><\/script>';else throw Error("Preview is not supported for "+u);const L=f.isChallenge&&u==="javascript"?"":Wb(d),Y=f.isChallenge&&u==="javascript"?"<script>try{"+N+';send("ready");}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>':"<script>try{(0,eval)("+w(N)+');setTimeout(()=>{send("ready");'+(v?L:"")+'},180)}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>',U='<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="form-action &apos;none&apos;"><style>body{font:16px/1.55 system-ui,sans-serif;padding:16px}button{padding:8px 15px}</style>'+C+O;if(u==="html"){const F=String(_).replace(/^\s*<!doctype[^>]*>/i,"");return"<!doctype html>"+(/<head(?:\s[^>]*)?>/i.test(F)?F.replace(/<head(?:\s[^>]*)?>/i,I=>I+U):"<head>"+U+"</head>"+F)+Y}return"<!doctype html><html><head>"+U+"</head><body>"+_+Y+"</body></html>"}function Ym({lessonId:l,task:u}){const d=u.storageKey||Eh.code(l),f=!!u.projectDraft,g=!!u.isChallenge,v=ve.useRef(null),k=ve.useRef(null),C=ve.useRef(null),w=ve.useRef(null),_=ve.useRef(null),[N,O]=ve.useState(!1),[L,Y]=ve.useState(u.starter||""),[U,F]=ve.useState(u.console||"Press Run to execute the code."),[V,I]=ve.useState(""),[z,B]=ve.useState("Choose Check to run the published examples. Your scores are not recorded."),[H,J]=ve.useState(null),[ce,ae]=ve.useState(""),be=["html","css","javascript","jsx"].includes(u.language),Re=be&&!g,[xe,se]=ve.useState(Re?"Preview":"Console"),[Ie,le]=Kn("designlab:editor-height",300);ve.useEffect(()=>{Y(Dd(d)??u.starter??""),F(u.console||"Run to see your program output."),B("Choose Check to run the published examples. Your scores are not recorded."),J(null),se(be&&!g?"Preview":"Console"),ae(""),I("")},[d,u.language,u.starter,u.console,be,g]),ve.useEffect(()=>()=>{var P;clearTimeout(_.current),w.current=null,(P=k.current)==null||P.instance.dispose(),k.current=null},[]),ve.useEffect(()=>{function P($){var Ce;const M=w.current;if(!M||!C.current||$.source!==C.current.contentWindow||((Ce=$.data)==null?void 0:Ce.token)!==M.token)return;const Z=$.data;Z.kind==="log"&&F(ze=>(ze==="Run to see your program output."?"":ze)+"["+(Z.level||"log")+"] "+Z.text+`
`),Z.kind==="clear"&&F(""),Z.kind==="error"&&(clearTimeout(_.current),F(ze=>ze+"Error: "+Z.text+`
`),M.check&&B("Fix the runtime error, then try Check again."),w.current=null,O(!1),se("Console")),(Z.kind==="checks"||Z.kind==="project-checks")&&(clearTimeout(_.current),J($m(Z.results||(Z.text?[{label:Z.text,pass:Z.pass}]:[]))),w.current=null,O(!1),se("Checks")),Z.kind==="ready"&&!M.check&&(clearTimeout(_.current),w.current=null,O(!1))}return window.addEventListener("message",P),()=>window.removeEventListener("message",P)},[]);function fe(P){if(!v.current)return;const $=v.current.getBoundingClientRect();le(Math.max(160,Math.min($.height-120,P.clientY-$.top)))}async function A(){var P;if(!k.current||k.current.language!==u.language){(P=k.current)==null||P.instance.dispose();const $=await zb(u.language,M=>F(M));k.current={...$,language:u.language}}return k.current}async function Q(P){var Z,Ce,ze,qe,Oe,Se,Be,$e,et,Ke,Ft,Yt;const $=u.language;if($==="java"&&u.environment==="ide")throw Error("This activity uses Java 26 file I/O and requires a full Java IDE. Browser execution is not supported for this exercise.");const M=await A();if($==="python"){let Ct=L;if(g)Ct=Lb(L,{...u,starter:u.starter},P);else if(P){if(!((Z=u.cases)!=null&&Z.length))throw Error("This lesson has no published examples.");Ct=Ib(u,L)}else u.mode==="function"&&((ze=(Ce=u.cases)==null?void 0:Ce[0])!=null&&ze.call)&&(Ct=Ob(L,u.cases[0].call));const xt=await M.instance.run(Ct);if(P){const tt=g?u.challengeExamples.map(Ue=>({call:(Eb(L,"python")||"Function")+"("+Ue.input.map(vt=>JSON.stringify(vt)).join(", ")+")",expected:JSON.stringify(Ue.expected)})):u.cases;J(Zf(xt.output,tt)),F("Python completed the public checks. Review individual results in Checks.")}else if(g){const tt=Zf(xt.output,[{call:"First published example",expected:JSON.stringify(u.challengeExamples[0].expected)}]);F(tt[0].error||"First example returned "+tt[0].received+". Expected "+tt[0].expected+".")}else if(u.mode==="function"&&((Oe=(qe=u.cases)==null?void 0:qe[0])!=null&&Oe.call)){const tt=String(xt.output||"").split(`
`).find(Ue=>Ue.startsWith("PLAYGROUND_PREVIEW="));if(tt){const Ue=JSON.parse(tt.slice(19));F(Ue.call+`
Returned: `+Ue.returned+(Ue.printed?`
Printed: `+Ue.printed:""))}else F(xt.output||"No return value was captured. See your code and retry.")}else F(xt.output||(xt.success?"Program finished with no printed output.":"The Python program stopped."))}if($==="java"){if(u.environment==="ide")throw Error("This lesson uses Java 26 file input and must run in a full Java IDE. Browser execution is not supported.");if(g){const Ct=ah(u,"java",L),xt=P?Ct:Ct.slice(0,1),tt=await M.instance.run(Pb(L,{...u,challengeExamples:xt}),[]);if(!tt.success)throw Error([tt.stdout,tt.stderr,tt.diagnostics].filter(Boolean).join(`
`));const Ue=Ab(tt.stdout,xt);P?J(Ue):F(Ue.map(vt=>vt.call+`
Received: `+vt.received+`
Expected: `+vt.expected).join(`
`))}else{const Ct=P?u.cases||[]:[{args:u.runArgs||((Be=(Se=u.cases)==null?void 0:Se[0])==null?void 0:Be.args)||[]}];if(P&&!Ct.length)throw Error("No public Java examples are available for this exercise.");const xt=[];for(const tt of Ct){const Ue=await M.instance.run(L,tt.args||[]);if(xt.push(Ue),!Ue.success)break}if(P){const tt=Tb(xt,Ct);if(xt.length!==Ct.length)throw Error("Java stopped before completing all published examples: "+((($e=xt.at(-1))==null?void 0:$e.diagnostics)||((et=xt.at(-1))==null?void 0:et.stderr)||"Unknown error"));J(tt),F("Java completed the published checks. Review the Checks tab.")}else F([(Ke=xt[0])==null?void 0:Ke.stdout,(Ft=xt[0])==null?void 0:Ft.stderr,(Yt=xt[0])==null?void 0:Yt.diagnostics].filter(Boolean).join(`
`)||"Java ran without printed output.")}}if($==="csharp"){const Ct=M.protocol,xt=g?ah(u,"csharp",L).map(oe=>({...oe,call:Array.isArray(oe.expected)?oe.call+".SequenceEqual("+oe.expectedLiteral+")":oe.call,arrayResult:Array.isArray(oe.expected),expected:Array.isArray(oe.expected)?"true":oe.expectedLiteral})):u.cases||[],tt=g?"Solution":Fb(L),Ue=P||g&&xt.length>0;if(P&&!xt.length)throw Error("No public C# examples are available for this exercise.");if(Ue&&!tt)throw Error("The C# checker could not find the public class name.");const vt=P?xt:xt.slice(0,1),yt=Ue?Ct.buildChecks(vt,tt):null,Qe=yt&&vt.some(oe=>oe.arrayResult)?`using System.Linq;
`+yt:yt,ut=await M.instance.run(L,Qe);if(!ut.compiled||!ut.success)throw Error([ut.diagnostics,ut.stderr].filter(Boolean).join(`
`)||"C# could not execute.");if(Ue){const oe=jb(ut.stdout,vt,Ct.parseChecks);P?J(oe):F(oe.map(Te=>Te.call+`
Received: `+Te.received+`
Expected: `+Te.expected).join(`
`))}else F(ut.stdout||"C# executed without printed output.")}}async function q(P){if(!N){O(!0),I(""),J(null),P?(B("Running published example checks…"),se("Checks")):(F("Preparing runner…"),se(Re?"Preview":"Console"));try{if(be){const $=crypto.randomUUID();w.current={token:$,check:P};const M=await Lh({code:L,language:u.language,lessonId:l,task:u,token:$,check:P});ae(M),F(""),clearTimeout(_.current),_.current=setTimeout(()=>{var Z;((Z=w.current)==null?void 0:Z.token)===$&&(w.current=null,O(!1),F("The preview did not finish within 7 seconds. Check for errors or an infinite loop."),B("Practice timed out. No result was recorded."),C.current&&(C.current.srcdoc="<p>Preview stopped after timeout.</p>"),se("Console"))},7e3)}else await Q(P),O(!1)}catch($){clearTimeout(_.current),w.current=null,O(!1);const M=String(($==null?void 0:$.message)||$);F(M),se("Console"),P&&B("Check unavailable: "+M)}}}function T(P){if(!N){if(P==="Run"||P==="Check"){q(P==="Check");return}if(P==="Save"){fo(d,L),I("Draft saved in this browser only.");return}P==="Reset"&&(Y(u.starter||""),fo(d,u.starter||""),J(null),ae(""),B("Choose Check to run published examples again."),F("Starter code restored. No points were recorded."),se(Re?"Preview":"Console"))}}return c.jsxs("div",{className:"code-pane",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx(Hd,{size:16})," Editor"]}),c.jsxs("div",{className:"right-meta",children:[u.language.toUpperCase()," ",c.jsx(fi,{children:"Live practice"})]})]}),c.jsxs("div",{className:"code-workspace",ref:v,style:{"--editor-height":Ie+"px"},children:[c.jsx(qm,{value:L,language:u.language,onChange:P=>{Y(P),(f||g)&&fo(d,P),I(""),J(null),B("Code changed. Choose Check to run fresh examples.")}}),c.jsx(fc,{axis:"rows",onDrag:fe}),c.jsx(Km,{text:U,checksText:z,checkRows:H,points:u.points,language:u.language,lessonId:l,previewEnabled:Re,previewDoc:ce,previewRef:C,activeTab:xe,onTabChange:se})]}),c.jsxs("div",{className:"editor-controls",children:[c.jsxs("div",{children:[["Run","Check","Reset"].map(P=>c.jsx("button",{type:"button",className:"btn",disabled:N,onClick:()=>T(P),children:P},P)),N&&c.jsx("button",{type:"button",className:"btn",onClick:()=>{var P,$,M;(M=(P=k.current)==null?void 0:($=P.instance).stop)==null||M.call($),w.current=null,clearTimeout(_.current),O(!1),F("Execution stopped.")},children:"Stop"})]}),c.jsxs("div",{children:[c.jsxs("button",{type:"button",className:"btn",disabled:N,onClick:()=>T("Save"),children:[c.jsx(Ld,{size:15})," Save"]}),c.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submission and official grading are not connected in this preview",children:[c.jsx(gh,{size:15})," Submit (not enabled)"]})]})]}),c.jsx("div",{className:"editor-note",role:"status",children:V||"Run executes code locally; Check tests public examples only. No grades, points or hand-ins are recorded."})]})}const Ph=Object.freeze(["index.html","styles.css","script.js"]),Ah=Object.freeze(["index.html","styles.css","App.jsx"]),Vm=l=>l==="jsx"?Ah:Ph,lh=`<!doctype html>
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
</html>`,Ub=`<!doctype html>
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
</html>`;function Jm(l){return l.endsWith(".html")?"html":l.endsWith(".css")?"css":l.endsWith(".jsx")?"jsx":"javascript"}function uh(l,u=""){const d=String(u).toLowerCase();return l==="jsx"||d==="react"?"App.jsx":l==="css"||/css|style|readable|responsive/.test(d)?"styles.css":l==="javascript"||/\bjs\b|javascript|script|function|array|object|dom|event|state|team|matchup|pick|scor|leaderboard|test|integrat|interact/.test(d)?"script.js":"index.html"}function qb(l,u="script.js"){if(!l.trim())return"";let d=l;if(!/<link\b[^>]*href\s*=\s*["']styles\.css["'][^>]*>/i.test(d)){const f=`  <link rel="stylesheet" href="styles.css">
`;d=/<\/head\s*>/i.test(d)?d.replace(/<\/head\s*>/i,f+"</head>"):f+d}if(!d.includes('src="'+u+'"')&&!d.includes("src='"+u+"'")){const f='  <script src="'+u+`" defer><\/script>
`;d=/<\/body\s*>/i.test(d)?d.replace(/<\/body\s*>/i,f+"</body>"):d+`
`+f}return d}function cc(l){let u=String(l??"");const d=[],f=[];return u=u.replace(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi,(g,v)=>(d.push(v.trim().replace(/^(?: {4}|\t)/gm,"")),"")),u=u.replace(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi,(g,v,k)=>/\bsrc\s*=/.test(v)||/\btype\s*=\s*["'](?:application\/json|application\/ld\+json|importmap)["']/i.test(v)?g:(f.push(k.trim().replace(/^(?: {4}|\t)/gm,"")),"")),{"index.html":qb(u.replace(/\n{3,}/g,`

`).trim(),"script.js"),"styles.css":d.join(`

`),"script.js":f.join(`

`)}}function Xm(l,u){const d=String(u??"");if(l==="jsx")return{"index.html":Ub,"styles.css":"","App.jsx":d};if(l==="html")return cc(d);if(l==="css")return{"index.html":lh,"styles.css":d,"script.js":""};if(l==="javascript")return{"index.html":lh,"styles.css":"","script.js":d};throw Error("Not a web lesson: "+l)}const Qm=l=>cc(l);function Xa(l,u){if(![...Ph,...Ah].includes(u))throw Error("Unknown workspace file");return l+":file:"+u}function Zm({base:l,starters:u,legacy:d,read:f,write:g}){const v=Object.keys(u),k=Object.fromEntries(v.map(N=>[N,f(Xa(l,N))]));if(v.some(N=>k[N]!==null&&k[N]!==void 0))return Object.fromEntries(v.map(N=>[N,k[N]??u[N]??""]));const w=d!=null?u["App.jsx"]!==void 0?{...u,"App.jsx":d}:Object.prototype.hasOwnProperty.call(u,"index.html")&&(u["styles.css"]||u["script.js"])&&/<html|<style|<script/i.test(d)||u["index.html"]!==void 0&&/<html|<!doctype|<body/i.test(d)?cc(d):{...u,[u["index.html"]===lh?u["script.js"]?"script.js":"styles.css":"index.html"]:d}:u,_=Object.fromEntries(v.map(N=>[N,w[N]??u[N]??""]));return v.forEach(N=>g(Xa(l,N),_[N])),_}function nm(l,u){return String(l??"").replace(new RegExp("</"+u,"gi"),"<\\/"+u)}function $b(l,{scriptName:u="script.js",scriptOverride:d=null}={}){let f=String((l==null?void 0:l["index.html"])??"");const g=String((l==null?void 0:l["styles.css"])??""),v=String(d===null?(l==null?void 0:l[u])??"":d);let k=!1,C=!1;if(f=f.replace(/<link\b[^>]*>/gi,w=>/\bhref\s*=\s*["'](?:\.\/)?styles\.css["']/i.test(w)&&/\brel\s*=\s*["']stylesheet["']/i.test(w)?(k=!0,'<style data-web-file="styles.css">'+nm(g,"style")+"</style>"):w),f=f.replace(/<script\b([^>]*)>\s*<\/script\s*>/gi,(w,_)=>{const N=/\bsrc\s*=\s*["']([^"']+)["']/i.exec(_);return N&&N[1].replace(/^\.\//,"")===u?(C=!0,""):w}),C){const w='<script data-web-file="'+u+'">'+nm(v,"script")+"<\/script>";f=/<\/body\s*>/i.test(f)?f.replace(/<\/body\s*>/i,w+`
</body>`):f+`
`+w}return{html:f,linkedStyle:k,linkedScript:C}}const Kb=Object.freeze(Object.defineProperty({__proto__:null,REACT_FILE_NAMES:Ah,WEB_FILE_NAMES:Ph,assembleWebFiles:$b,fileLanguage:Jm,fileNamesFor:Vm,initialFocus:uh,lessonStarterFiles:Xm,loadWebDrafts:Zm,projectStarterFiles:Qm,splitEmbeddedWebSource:cc,webDraftKey:Xa},Symbol.toStringTag,{value:"Module"}));function eg({lessonId:l,task:u}){const d=Eh.code(l),f=Vm(u.language),g=u.starterFiles||(u.projectDraft?Qm(u.starter):Xm(u.language,u.starter)),[v,k]=ve.useState(()=>Zm({base:d,starters:g,legacy:Dd(d),read:Dd,write:fo})),[C,w]=ve.useState(()=>uh(u.language,u.focus)),[_,N]=ve.useState("Run to render all your linked files together."),[O,L]=ve.useState("Check runs the current published practice requirements."),[Y,U]=ve.useState(null),[F,V]=ve.useState(""),[I,z]=ve.useState("Preview"),[B,H]=ve.useState(""),[J,ce]=ve.useState(!1),[ae,be]=Kn("designlab:web-files-editor-height",310),Re=ve.useRef(null),xe=ve.useRef(null),se=ve.useRef(null),Ie=ve.useRef(null);ve.useEffect(()=>{const M=uh(u.language,u.focus);w(f.includes(M)?M:"index.html")},[u.stepId,u.focus,u.language]),ve.useEffect(()=>{const M=Z=>{var qe;const Ce=xe.current;if(!Ce||!Re.current||Z.source!==Re.current.contentWindow||((qe=Z.data)==null?void 0:qe.token)!==Ce.token)return;const ze=Z.data;ze.kind==="log"&&N(Oe=>Oe+(ze.level==="error"?"Error: ":"")+ze.text+`
`),ze.kind==="clear"&&N(""),ze.kind==="error"&&(clearTimeout(se.current),xe.current=null,N(Oe=>Oe+"Error: "+ze.text+`
`),L("Fix the error reported in Console before checking again."),z("Console"),ce(!1)),(ze.kind==="checks"||ze.kind==="project-checks")&&(clearTimeout(se.current),xe.current=null,U($m(ze.results||(ze.text?[{label:ze.text,pass:ze.pass}]:[]))),z("Checks"),ce(!1)),ze.kind==="ready"&&!Ce.check&&(clearTimeout(se.current),xe.current=null,ce(!1))};return window.addEventListener("message",M),()=>{clearTimeout(se.current),xe.current=null,window.removeEventListener("message",M)}},[]);function le(M){k(Z=>({...Z,[C]:M})),fo(Xa(d,C),M),H(""),U(null),L("Code changed. Check again to update the results.")}function fe(){f.forEach(M=>fo(Xa(d,M),v[M]??"")),H("All three files saved in this browser only.")}function A(){window.confirm("Restore all three starter files? Your current saved changes will be replaced.")&&(k({...g}),f.forEach(M=>fo(Xa(d,M),g[M]??"")),U(null),V(""),N("Starter files restored."),L("Run Check to evaluate the restored files."),z("Preview"),H("Starter files restored for this lesson or project."))}function Q(){const M=v[C]||"",Z=document.createElement("a"),Ce=URL.createObjectURL(new Blob([M],{type:"text/plain;charset=utf-8"}));Z.href=Ce,Z.download=C,document.body.append(Z),Z.click(),Z.remove(),setTimeout(()=>URL.revokeObjectURL(Ce),2e3)}function q(){clearTimeout(se.current),xe.current=null,ce(!1),V("<p>Preview stopped.</p>"),N("Preview stopped. Check your script for an endless loop."),z("Console")}async function T(M){var Z;if(!J){ce(!0),U(null),H(""),N(""),L(M?"Checking the published requirements…":"Run Check to review the published requirements."),z(M?"Checks":"Preview");try{P();const Ce=crypto.randomUUID();xe.current={token:Ce,check:M};const ze=await Lh({language:u.language,code:v[C]||"",lessonId:u.lessonFocus||l,task:{...u,webFiles:v},token:Ce,check:M});if(((Z=xe.current)==null?void 0:Z.token)!==Ce)return;V(ze),clearTimeout(se.current),se.current=setTimeout(()=>{var qe;((qe=xe.current)==null?void 0:qe.token)===Ce&&(q(),L("The preview timed out. No result was recorded."))},7e3)}catch(Ce){clearTimeout(se.current),xe.current=null,ce(!1),N(String((Ce==null?void 0:Ce.message)||Ce)),L("Checks unavailable: "+String((Ce==null?void 0:Ce.message)||Ce)),z("Console")}}}function P(){f.forEach(M=>fo(Xa(d,M),v[M]||""))}function $(M){if(!Ie.current)return;const Z=Ie.current.getBoundingClientRect();be(Math.max(160,Math.min(Z.height-120,M.clientY-Z.top)))}return c.jsxs("div",{className:"code-pane web-files-pane",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx(Hd,{size:16})," Project files"]}),c.jsxs("span",{className:"web-file-badge",children:["HTML + CSS + ",u.language==="jsx"?"React":"JavaScript"]})]}),c.jsx("div",{className:"web-file-tabs",role:"tablist","aria-label":"Source files",children:f.map(M=>c.jsx("button",{type:"button",role:"tab","aria-selected":M===C,className:M===C?"active":"",onClick:()=>w(M),children:M},M))}),c.jsxs("div",{className:"code-workspace",ref:Ie,style:{"--editor-height":ae+"px"},children:[c.jsx(qm,{value:v[C]??"",language:Jm(C),onChange:le},C),c.jsx(fc,{axis:"rows",onDrag:$}),c.jsx(Km,{text:_,checksText:O,checkRows:Y,points:null,language:"html",previewEnabled:!0,previewDoc:F,previewRef:Re,activeTab:I,onTabChange:z})]}),c.jsxs("div",{className:"editor-controls",children:[c.jsxs("div",{children:[c.jsx("button",{type:"button",className:"btn",disabled:J,onClick:()=>T(!1),children:"Run"}),c.jsx("button",{type:"button",className:"btn",disabled:J,onClick:()=>T(!0),children:"Check"}),c.jsx("button",{type:"button",className:"btn",disabled:J,onClick:A,children:"Reset"}),J&&c.jsx("button",{type:"button",className:"btn",onClick:q,children:"Stop"})]}),c.jsxs("div",{children:[c.jsxs("button",{type:"button",className:"btn",disabled:J,onClick:Q,children:[c.jsx(Hy,{size:15})," Download file"]}),c.jsxs("button",{type:"button",className:"btn",disabled:J,onClick:fe,children:[c.jsx(Ld,{size:15})," Save"]}),c.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submissions and grading are not connected",children:[c.jsx(gh,{size:15})," Submit (not enabled)"]})]})]}),c.jsx("div",{className:"editor-note",role:"status",children:B||"Edit one file at a time. The HTML link to styles.css and script tag for script.js (or App.jsx) connect the files. Drafts save locally; practice checks award no points."})]})}function Gb({lessonId:l,onAnswerChecked:u}){const d=xh[l],[f,g]=ve.useState(null),[v,k]=ve.useState(!1);function C(){k(!0),u==null||u({selected:f,correct:f===d.correct})}function w(){g(null),k(!1),u==null||u(null)}return c.jsxs("section",{className:"tsi-practice","aria-label":"Math question",children:[c.jsxs("div",{className:"tsi-practice-heading",children:[c.jsx(vm,{size:20}),c.jsxs("div",{children:[c.jsx("h2",{children:"Try this question"}),c.jsx("p",{children:"Choose an answer, then review the explanation on the right."})]})]}),c.jsxs("div",{className:"tsi-question-card",children:[c.jsx("div",{className:"eyebrow",children:"Question"}),c.jsx("h3",{children:d.prompt}),c.jsx("div",{className:"tsi-answers",role:"radiogroup","aria-label":"Choose the correct answer",children:d.options.map((_,N)=>c.jsxs("label",{className:`tsi-choice ${f===N?"selected":""} ${v&&N===d.correct?"correct":""}`,children:[c.jsx("input",{type:"radio",name:`tsi-${l}`,checked:f===N,disabled:v,onChange:()=>g(N)}),c.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+N)}),c.jsx("span",{children:_})]},_))}),v&&c.jsx("p",{className:"tsi-answer-status",role:"status",children:f===d.correct?"Correct! Read why on the right.":"Not quite. Review the explanation on the right."}),c.jsxs("div",{className:"tsi-buttons",children:[c.jsx("button",{className:"btn primary",disabled:f===null||v,onClick:C,children:"Check answer"}),c.jsxs("button",{className:"btn",onClick:w,children:[c.jsx(mh,{size:15})," Try again"]})]})]})]})}function Yb(l){const u=String(l||""),d=u.indexOf("## Learn"),f=u.indexOf("## Practice"),g=u.indexOf("## Reflect");if(d<0||f<d)return{learn:"",reflect:"",questions:[]};const v=u.slice(d,f).trim(),k=u.slice(f,g>f?g:void 0),C=g>f?u.slice(g).trim():"",w=[...k.matchAll(/###\s+(\d+)\.\s+([^\n]+)\n([\s\S]*?)(?=\n###\s+\d+\.|$)/g)].map(_=>({number:Number(_[1]),prompt:_[2].trim(),options:[..._[3].matchAll(/-\s+\*\*([A-D])\.\*\*\s+([^\n]+)/g)].map(N=>({letter:N[1],text:N[2].trim()}))}));return{learn:v,reflect:C,questions:w}}function Vb({task:l}){var N;const u=ve.useMemo(()=>Yb(l.markdownSource),[l.markdownSource]),d=((N=l.tsiKey)==null?void 0:N.items)||[],[f,g]=ve.useState({}),[v,k]=ve.useState(!1),C=u.questions.filter(O=>{var L;return f[O.number]===((L=d.find(Y=>Y.question===O.number))==null?void 0:L.correct)}).length,w=u.questions.length===4&&u.questions.every(O=>O.options.length===4),_=w&&d.length===4&&Object.keys(f).length===4;return w?c.jsxs("div",{className:"tsi-strand-workspace",children:[c.jsxs("section",{className:"surface-card tsi-strand-questions","aria-label":"TSI math questions",children:[c.jsxs("div",{className:"tsi-strand-panel-heading",children:[c.jsx("span",{className:"eyebrow",children:"Practice"}),c.jsx("h2",{children:"Questions"}),c.jsx("p",{children:"Solve each problem, then check your answers against the explanations on the right."})]}),c.jsxs("form",{onSubmit:O=>{O.preventDefault(),_&&k(!0)},children:[u.questions.map(O=>{var Y;const L=(Y=d.find(U=>U.question===O.number))==null?void 0:Y.correct;return c.jsxs("fieldset",{className:"tsi-strand-question",disabled:v,children:[c.jsxs("legend",{children:[c.jsx("span",{className:"tsi-strand-question-number",children:O.number})," ",O.prompt]}),c.jsx("div",{className:"tsi-strand-options",children:O.options.map(U=>c.jsxs("label",{className:["tsi-strand-option",f[O.number]===U.letter?"selected":"",v&&L===U.letter?"correct":""].filter(Boolean).join(" "),children:[c.jsx("input",{type:"radio",name:l.id+"-q"+O.number,value:U.letter,checked:f[O.number]===U.letter,onChange:()=>{g(F=>({...F,[O.number]:U.letter})),k(!1)}}),c.jsx("span",{className:"tsi-strand-letter",children:U.letter}),c.jsx("span",{children:U.text})]},U.letter))}),v&&c.jsx("p",{className:"tsi-strand-question-status",role:"status",children:f[O.number]===L?"Correct":"Review question "+O.number+" on the right"})]},O.number)}),c.jsxs("div",{className:"tsi-strand-actions",children:[c.jsx("button",{type:"submit",className:"btn primary",disabled:!_||v,children:"Check answers"}),c.jsxs("button",{type:"button",className:"btn",onClick:()=>{g({}),k(!1)},children:[c.jsx(mh,{size:15})," Try again"]})]}),c.jsx("p",{className:"tsi-strand-progress",role:"status",children:v?C+" of 4 correct · instructional practice only":Object.keys(f).length+" of 4 answered"})]})]}),c.jsxs("section",{className:"surface-card tsi-strand-explanations","aria-label":"Math explanations",children:[c.jsxs("div",{className:"tsi-strand-panel-heading",children:[c.jsx("span",{className:"eyebrow",children:"Learn"}),c.jsxs("h2",{children:[c.jsx(ia,{size:20,"aria-hidden":"true"})," Worked explanations"]})]}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:el(u.learn)}}),c.jsxs("div",{className:"tsi-strand-review","aria-live":"polite",children:[c.jsx("h3",{children:v?c.jsxs(c.Fragment,{children:[c.jsx(lc,{size:18})," Answer explanations"]}):"Review your answers"}),v?u.questions.map(O=>{const L=d.find(Y=>Y.question===O.number);return c.jsxs("article",{className:"tsi-strand-answer",children:[c.jsxs("h4",{children:["Question ",O.number," · ",f[O.number]===(L==null?void 0:L.correct)?"Correct":"Needs review"]}),c.jsxs("p",{children:["Your choice: ",f[O.number]," · Correct: ",L==null?void 0:L.correct]}),c.jsx("p",{children:(L==null?void 0:L.explanation)||"A worked explanation is not yet available."})]},O.number)}):c.jsxs("p",{children:["Complete all four questions and choose ",c.jsx("strong",{children:"Check answers"})," to see the explanations for each."]})]}),u.reflect&&c.jsx("div",{className:"tsi-strand-reflect markdown-preview",dangerouslySetInnerHTML:{__html:el(u.reflect)}})]}),c.jsx("p",{className:"tsi-strand-disclaimer",children:"Draft TSI instructional practice · 30 minutes · Not an official TSIA2 assessment. Answers in this React preview are not submitted or graded."})]}):c.jsxs("section",{className:"surface-card tsi-strand-error",role:"alert",children:[c.jsx("h2",{children:"Practice questions unavailable"}),c.jsx("p",{children:"This draft lesson's multiple-choice questions could not be loaded. No sample questions were substituted."})]})}const jd=[["quantitative","Quantitative Reasoning"],["algebraic","Algebraic Reasoning"],["geometry","Geometric and Spatial Reasoning"],["statistics","Probabilistic and Statistical Reasoning"]];function Jb(l){const u=l.answer,d=Number.isInteger(u)?Math.max(1,Math.round(Math.abs(u)*.15)):Math.max(.125,Math.round(Math.abs(u)*.2*1e3)/1e3),f=[u+d,u-d,u+2*d].map(g=>Number(g.toFixed(4)));return f.splice(l.correct_index??0,0,u),f}function Xb(l,u){return Object.fromEntries(jd.map(([d])=>{const f=l.filter(v=>v.strand===d),g=f.filter(v=>u[v.id]!=="skip"&&Number(u[v.id])===v.answer).length;return[d,{correct:g,total:f.length,level:g===f.length?"Advanced":g>=Math.ceil(f.length*.6)?"Proficient":"Basic"}]}))}function Qb({items:l=[],profiles:u=[]}){var V,I,z;const[d,f]=ve.useState({}),[g,v]=ve.useState(""),[k,C]=ve.useState(""),[w,_]=Kn("designlab:tsi-math-placement",{}),[N,O]=ve.useState(null),L=ve.useMemo(()=>jd.map(([B,H])=>({id:B,title:H,items:l.filter(J=>J.strand===B)})),[l]),Y=N||((V=w.diagnostic)==null?void 0:V.latest)&&w.diagnostic.latest.placement;function U(B){B.preventDefault();const H=u.find(J=>J.code===g.trim().toUpperCase());if(!H){C("Enter a valid MATH01–MATH81 study code.");return}_(J=>({...J,code:H.code,levels:H.levels})),C("Study code applied in this browser. It does not enroll you in a class.")}function F(B){if(B.preventDefault(),l.some(ae=>d[ae.id]===void 0)){C("Answer or select Not sure for every question.");return}const H=Xb(l,d),J=Object.fromEntries(Object.entries(H).map(([ae,be])=>[ae,be.level])),ce={at:new Date().toISOString(),placement:H,levels:J,answers:d};_(ae=>{var be;return{...ae,levels:J,diagnostic:{first:((be=ae.diagnostic)==null?void 0:be.first)||ce,latest:ce}}}),O(H),C("Your recommended starting levels are ready. Results are stored in this browser only.")}return c.jsxs("div",{className:"published-reading surface-card tsi-diagnostic",children:[c.jsx("h2",{children:"Find your starting point"}),c.jsx("p",{children:"This is the existing 24-question, four-strand practice diagnostic. It suggests what to study; it does not predict an official TSIA2 score or assign an enrolled class."}),c.jsxs("form",{onSubmit:U,className:"tsi-code-entry",children:[c.jsx("label",{htmlFor:"math-locator-code",children:"Pearson study code (MATH01–MATH81)"}),c.jsx("input",{id:"math-locator-code",type:"text",placeholder:"MATH01",maxLength:6,value:g,onChange:B=>v(B.target.value)}),c.jsx("button",{className:"btn",type:"submit",children:"Apply code"})]}),!!w.code&&c.jsxs("p",{role:"status",children:["Current code: ",c.jsx("strong",{children:w.code}),"."," ","Recommended levels: ",jd.map(([B,H])=>{var J;return H+": "+((J=w.levels)==null?void 0:J[B])}).join(" · ")]}),c.jsxs("form",{onSubmit:F,children:[c.jsx("h3",{children:"Take the diagnostic"}),c.jsxs("p",{children:["Choose one answer or Not sure for all ",l.length," questions. This open practice records your first and latest attempts in this browser, not the live gradebook."]}),L.map((B,H)=>c.jsxs("section",{className:"tsi-diagnostic-strand surface-card",children:[c.jsxs("div",{className:"tsi-strand-panel-heading",children:[c.jsxs("span",{className:"eyebrow",children:["Strand ",H+1," of ",L.length]}),c.jsx("h3",{children:B.title}),c.jsxs("p",{children:[B.items.length," questions · Choose an answer or Not sure for each question."]})]}),B.items.map((J,ce)=>c.jsxs("fieldset",{className:"tsi-strand-question",children:[c.jsxs("legend",{children:[c.jsx("span",{className:"tsi-strand-question-number",children:ce+1})," ",J.prompt]}),c.jsxs("div",{className:"tsi-strand-options",children:[Jb(J).map((ae,be)=>c.jsxs("label",{className:"tsi-strand-option "+(d[J.id]===String(ae)?"selected":""),children:[c.jsx("input",{type:"radio",name:J.id,value:ae,checked:d[J.id]===String(ae),onChange:()=>f(Re=>({...Re,[J.id]:String(ae)}))}),c.jsx("span",{className:"tsi-strand-letter",children:String.fromCharCode(65+be)}),c.jsx("span",{children:ae})]},be)),c.jsxs("label",{className:"tsi-strand-option tsi-diagnostic-unsure "+(d[J.id]==="skip"?"selected":""),children:[c.jsx("input",{type:"radio",name:J.id,value:"skip",checked:d[J.id]==="skip",onChange:()=>f(ae=>({...ae,[J.id]:"skip"}))}),c.jsx("span",{className:"tsi-strand-letter",children:"?"}),c.jsx("span",{children:"Not sure"})]})]})]},J.id))]},B.id)),c.jsx("button",{type:"submit",className:"btn primary",children:"Get my recommended levels"})]}),!!k&&c.jsx("p",{role:"status",children:k}),Y&&c.jsxs("section",{className:"tsi-diagnostic-results","aria-label":"Diagnostic results",children:[c.jsx("h3",{children:"Recommended starting levels"}),jd.map(([B,H])=>c.jsxs("p",{children:[c.jsxs("strong",{children:[H,": ",Y[B].level]})," (",Y[B].correct," of ",Y[B].total," correct)"]},B)),c.jsx("p",{children:"This diagnostic is instructional, not a verified measure of college readiness. All published lessons remain available regardless of recommendation."}),!!((I=w.diagnostic)!=null&&I.first)&&!!((z=w.diagnostic)!=null&&z.latest)&&c.jsxs("p",{children:["First attempt: ",new Date(w.diagnostic.first.at).toLocaleDateString()," · Latest: ",new Date(w.diagnostic.latest.at).toLocaleDateString()]})]})]})}function Zb({lessonId:l,course:u,unit:d,unitNumber:f,isCompleted:g=!1,assignment:v=null,grade:k=null,onToggleCompleted:C,readOnlyMode:w=!1}){var I;const _=na(u,l),N=ve.useRef(null),[O,L]=ve.useState(null),[Y,U]=Kn("designlab:left-width",420);function F(z){if(!N.current)return;const B=N.current.getBoundingClientRect();U(Math.max(260,Math.min(B.width-340,z.clientX-B.left)))}const V=u.id==="tsi-math";return V&&l==="tsi-20d-d01"&&((I=u.diagnosticItems)!=null&&I.length)?c.jsxs("div",{className:"lesson-screen",children:[c.jsxs("header",{className:"lesson-header",children:[c.jsx("div",{className:"eyebrow",children:"Day 1 · TSI Math Advisory"}),c.jsx("h1",{children:_.title}),c.jsx("p",{children:"Diagnostic placement · 30-minute advisory plan"})]}),c.jsx(Qb,{items:u.diagnosticItems,profiles:u.locatorProfiles})]}):_!=null&&_.ready?V&&_.tsiStrandDraft?c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:_,unit:d,unitNumber:f,isTsi:!0,isCompleted:g,assignment:v,grade:k,onToggleCompleted:C,readOnlyMode:w}),c.jsx(Vb,{task:_})]}):_.language==="text"&&!V?c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:_,unit:d,unitNumber:f,isTsi:!1,isCompleted:g,assignment:v,grade:k,onToggleCompleted:C,readOnlyMode:w}),c.jsxs("section",{className:"surface-card published-reading",children:[c.jsx("p",{className:"muted",children:"Published written-practice material. Answer checking and verified scores remain on the current Playground."}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:el(_.markdownSource)}})]})]}):V&&!xh[l]?c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:_,unit:d,unitNumber:f,isTsi:!0,isCompleted:g,assignment:v,grade:k,onToggleCompleted:C,readOnlyMode:w}),c.jsxs("section",{className:"surface-card published-reading",children:[c.jsx("p",{className:"muted",children:"Published draft lesson · practice shown for learning, not an official TSIA2 score predictor."}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:el(_.markdownSource)}})]})]}):c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:_,unit:d,unitNumber:f,isTsi:V,isCompleted:g,assignment:v,grade:k,onToggleCompleted:C,readOnlyMode:w}),c.jsxs("div",{className:`workspace-grid ${V?"tsi-workspace":""}`,ref:N,style:{"--left-pane":`${Y}px`},children:[V?c.jsx(Gb,{lessonId:l,onAnswerChecked:L}):c.jsx(Lf,{lessonId:l,task:_}),c.jsx(fc,{axis:"columns",onDrag:F}),V?c.jsx(Lf,{lessonId:l,task:_,isTsi:!0,tsiAnswer:O}):u.id==="mobile-app-dev"&&["html","css","javascript","jsx"].includes(_.language)?c.jsx(eg,{lessonId:l,task:{..._,lessonFocus:l}},l):c.jsx(Ym,{lessonId:l,task:_})]})]}):c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:_,unit:d,unitNumber:f,isTsi:V,isCompleted:g,assignment:v,grade:k,onToggleCompleted:C,readOnlyMode:w}),c.jsxs("section",{className:"lesson-content-pending surface-card",children:[c.jsx("h2",{children:"Lesson coming soon"}),c.jsx("p",{children:"This scheduled lesson has not been authored yet. No practice or scores are available."})]})]})}function e0({course:l,project:u,stepId:d,openProject:f}){const g=u.steps||[],v=Math.max(0,g.findIndex(Y=>Y.id===d)),k=g[v],C=ve.useRef(null),[w,_]=Kn("designlab:project-left-width",430),N="project:"+l.id+":"+u.id,O={id:N,title:u.title,language:u.language||"html",starter:u.starter||"",starterFiles:u.starterFiles||null,challenge:u.summary||"",console:"Run to see your actual page. Check tests the published step requirements in a sandboxed browser preview.",projectDraft:!0,isPublished:!1,projectId:u.id,stepId:k.id,focus:k.focus};function L(Y){if(!C.current)return;const U=C.current.getBoundingClientRect();_(Math.max(260,Math.min(U.width-340,Y.clientX-U.left)))}return c.jsxs("div",{className:"lesson-screen project-workspace",children:[c.jsxs("header",{className:"lesson-header",children:[c.jsxs("div",{className:"eyebrow",children:["Published guided project · ",g.length," steps"]}),c.jsx("h1",{children:u.title}),c.jsx("p",{children:u.summary}),c.jsx("p",{className:"muted",children:"Run renders your actual project and Check tests the current step. Drafts save in this browser; Submit and verified grading remain disabled."})]}),c.jsx("nav",{className:"project-step-list","aria-label":"Project steps",children:g.map((Y,U)=>c.jsxs("button",{type:"button","aria-current":U===v?"step":void 0,className:U===v?"btn primary":"btn",onClick:()=>f(l.id,u.id,Y.id),children:[U+1,". ",Y.title]},Y.id))}),c.jsxs("div",{className:"workspace-grid",ref:C,style:{"--left-pane":w+"px"},children:[c.jsxs("section",{className:"instructions-pane project-reading",children:[c.jsx("div",{className:"pane-header",children:c.jsxs("strong",{children:["Step ",v+1,": ",k.title]})}),c.jsxs("p",{className:"web-files-reading-note",children:["This published walkthrough was originally written for one HTML file. When it says to add a <style> or <script> block, put that code in",c.jsx("code",{children:"styles.css"})," or ",c.jsx("code",{children:"script.js"})," instead. Keep the file links in",c.jsx("code",{children:"index.html"}),"; Run connects them automatically."]}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:el(k.markdownSource)}})]}),c.jsx(fc,{axis:"columns",onDrag:L}),c.jsx(eg,{lessonId:N,task:O})]}),c.jsxs("nav",{className:"lesson-next-bar","aria-label":"Project step navigation",children:[v>0&&c.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>f(l.id,u.id,g[v-1].id),children:[c.jsx(Wd,{size:16})," ",c.jsxs("span",{children:["Prev: ",g[v-1].title]})]}),v<g.length-1&&c.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>f(l.id,u.id,g[v+1].id),children:[c.jsxs("span",{children:["Next: ",g[v+1].title]})," ",c.jsx(ni,{size:16})]})]})]})}function t0({courseId:l,lessonId:u,projectId:d,projectStepId:f,availableCourses:g=rs,openCourse:v,openProject:k,openChallenges:C,completedLessons:w=[],assignments:_=[],grades:N=[],onToggleLessonComplete:O,courseColors:L={},onSetCourseColor:Y,onResetCourseColor:U,readOnlyMode:F=!1}){const V=g.find(ce=>ce.id===l)||g[0];if(V.id==="test-prep")return c.jsx(fv,{lessonId:u,openCourse:v,completedLessons:w,onToggleLessonComplete:O});const I=(V.projects||[]).find(ce=>ce.id===d),z=oc(V),B=V.units.findIndex(ce=>is(ce).includes(u)),H=V.units[B],J=z.indexOf(u);return c.jsx("div",{className:"course-layout integrated-course","data-course":V.id,children:c.jsxs("div",{className:"course-main",children:[c.jsxs("div",{className:"course-breadcrumb",children:[c.jsx("button",{onClick:()=>v(null),children:"All playgrounds"}),c.jsx(ni,{size:14}),u||I?c.jsxs(c.Fragment,{children:[c.jsx("button",{onClick:()=>v(V.id),children:V.label}),c.jsx(ni,{size:14}),c.jsx("span",{className:"breadcrumb-unit-name",title:H?Rs(H):"",children:H?Rs(H):(I==null?void 0:I.title)||""})]}):c.jsx("span",{children:V.label})]}),I?c.jsx(e0,{course:V,project:I,stepId:f,openProject:k},I.id):u?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"lesson-mobile-navigation",children:[c.jsx("label",{htmlFor:"lesson-select",children:"Lesson"}),c.jsx("select",{id:"lesson-select",value:u,onChange:ce=>v(V.id,ce.target.value),children:V.units.map((ce,ae)=>c.jsx("optgroup",{label:`Unit ${ae+1} · ${Rs(ce)}`,children:is(ce).map(be=>c.jsx("option",{value:be,children:ra(V,be)},be))},ce.id))})]}),c.jsx(Zb,{lessonId:u,course:V,unit:H,unitNumber:B+1,isCompleted:w.includes(u),assignment:_.find(ce=>ce.id==="lesson:"+u),grade:N.find(ce=>ce.id==="lesson:"+u),onToggleCompleted:()=>O==null?void 0:O(u),readOnlyMode:F},u),c.jsxs("nav",{className:"lesson-next-bar","aria-label":"Lesson sequence",children:[J>0&&c.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>v(V.id,z[J-1]),children:[c.jsx(Wd,{size:16,"aria-hidden":"true"}),c.jsxs("span",{children:["Prev: ",ra(V,z[J-1])]})]}),J>=0&&J<z.length-1&&c.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>v(V.id,z[J+1]),children:[c.jsxs("span",{children:["Next: ",ra(V,z[J+1])]}),c.jsx(ni,{size:16,"aria-hidden":"true"})]})]})]}):c.jsx(pv,{course:V,openCourse:v,openProject:k,openChallenges:C,completedLessons:w,assignments:_,grades:N,courseColors:L,onSetCourseColor:Y,onResetCourseColor:U,readOnlyMode:F})]})})}const Qa=[{id:"p1",period:"1",name:"Period 1",course:"computer-science-1"},{id:"p3",period:"3",name:"Period 3",course:"computer-science-1"},{id:"p5",period:"5",name:"Period 5",course:"mobile-app-dev"},{id:"p6",period:"6",name:"Period 6",course:"game-programming"},{id:"p7",period:"7",name:"Period 7",course:"mobile-app-dev"},{id:"p8",period:"8",name:"Period 8",course:"computer-science-1"}],n0=l=>Qa.find(u=>u.id===l),tg=l=>{var u;return(u=n0(l))==null?void 0:u.period},r0=[...new Set(Qa.map(l=>l.period))].sort((l,u)=>Number(l)-Number(u)),i0=[{key:"2026-11-02",label:"Nov 2 – Nov 8, 2026"},{key:"2026-10-26",label:"Oct 26 – Nov 1, 2026"}],tl=l=>{var u,d,f;return((u=l.teacherName)==null?void 0:u.trim())||((d=l.sheetName)==null?void 0:d.trim())||((f=l.studentName)==null?void 0:f.trim())||l.github},rm=l=>(l.teacherName||l.sheetName||l.studentName||"").trim().split(/\s+/),ng=(l,u,d)=>{const f=g=>d==="github"?g.github.toLowerCase():d==="first"?(rm(g)[0]||g.github).toLowerCase():(rm(g).at(-1)||g.github).toLowerCase();return f(l).localeCompare(f(u),void 0,{numeric:!0})||l.github.localeCompare(u.github)},s0=[["last","Last name"],["first","First name"],["github","GitHub username"]];function o0({sectionId:l,onSectionChange:u,setupOpen:d,onToggleSetup:f,sections:g=Qa,readOnlyMode:v=!1}){return c.jsxs("div",{className:"teacher-toolbar",children:[c.jsxs("label",{children:["Class section",c.jsx("select",{value:l,onChange:k=>u(k.target.value),children:g.map(k=>c.jsxs("option",{value:k.id,children:[k.name," · ",pm(k.course)]},k.id))})]}),!v&&c.jsxs("button",{type:"button",className:"btn section-setup-toggle","aria-expanded":d,"aria-controls":"teacher-section-setup",onClick:f,children:[d?c.jsx(Ud,{size:16}):c.jsx(yh,{size:16}),d?"Close section setup":"Section setup"]})]})}const a0=[["overview","Class Overview",fh],["curriculum","Curriculum",ia],["journals","Journals",hh]];function l0({tab:l,onChange:u}){return c.jsx("div",{className:"tabs teacher-tabs",role:"tablist","aria-label":"Teacher dashboard tabs",children:a0.map(([d,f,g])=>c.jsxs("button",{type:"button",role:"tab","aria-selected":l===d,className:l===d?"active":"",onClick:()=>u(d),children:[c.jsx(g,{size:16}),f]},d))})}function im({section:l}){const u=(l==null?void 0:l.join_code)||(l==null?void 0:l.joinCode);return c.jsxs("div",{className:"section-banner",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Selected section"}),c.jsxs("h2",{children:[l.name," ",c.jsxs("span",{className:"muted",children:["· ",pm(l.course)]})]})]}),u?c.jsxs(fi,{children:["Join code: ",u]}):c.jsx(fi,{children:"Join code unavailable"})]})}function u0({students:l,week:u,setWeek:d,availableWeeks:f=i0,readOnlyMode:g=!1}){const v=ve.useMemo(()=>[...l].sort((k,C)=>(C.weekly[u]||0)-(k.weekly[u]||0)),[l,u]);return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Weekly points"}),c.jsx("p",{children:g?"Server-verified score improvements · Monday–Sunday in Central Time":"Mock verified points · Monday–Sunday in Central Time"})]}),c.jsxs("label",{children:["Week",c.jsx("select",{value:u,onChange:k=>d(k.target.value),children:f.map(k=>c.jsx("option",{value:k.key,children:k.label},k.key))})]})]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Student"}),c.jsx("th",{children:"Weekly points"}),c.jsx("th",{children:g?"Improved assignments":"Sample assignments"})]})}),c.jsx("tbody",{children:v.map(k=>{var C;return c.jsxs("tr",{children:[c.jsxs("th",{children:[tl(k),c.jsxs("small",{children:["@",k.github]})]}),c.jsx("td",{children:c.jsx("strong",{children:k.weekly[u]||0})}),c.jsx("td",{children:g?((C=k.weeklyAssignments)==null?void 0:C[u])||0:k.assignments.filter(w=>w.score!==null).length})]},k.id)})})]})})]})}function rg({label:l,value:u,onChange:d}){return c.jsxs("label",{children:[l,c.jsx("select",{value:u,onChange:f=>d(f.target.value),children:s0.map(([f,g])=>c.jsx("option",{value:f,children:g},f))})]})}function c0(l={}){const u=String(l.type||l.activity_kind||"").trim().toLowerCase(),d=String(l.id||l.activity_id||"").trim().toLowerCase();return u.includes("challenge")||d.startsWith("challenge:")?"challenge":u.includes("lesson")||d.startsWith("lesson:")?"lesson":"other"}function sm(l=[]){const u=()=>({completed:0,graded:0,tracked:0,earned:0,possible:0}),d={lessons:u(),challenges:u(),other:u()};for(const f of l||[]){const g=c0(f),v=g==="lesson"?d.lessons:g==="challenge"?d.challenges:d.other;if(v.tracked++,(f.status==="Completed"||f.status==="Practice completed")&&v.completed++,f.score!==null&&f.score!==void 0){v.graded++;const k=Number(f.score),C=Number(f.possible);Number.isFinite(k)&&(v.earned+=k),Number.isFinite(C)&&(v.possible+=C)}}return d}const d0=l=>l.includes("Completed")?"success":l==="Needs revision"?"warning":"";function p0({student:l,week:u,readOnlyMode:d=!1}){const[f,g]=ve.useState(null),v=l.assignments,k=sm(v),C=v.reduce((O,L)=>{const Y=L.week||"undated";return(O[Y]||(O[Y]=[])).push(L),O},{}),w=Object.keys(C).sort((O,L)=>L.localeCompare(O)),_=O=>{var L;return Number((L=l.weekly)==null?void 0:L[O])||0},N=O=>{if(O==="undated")return"Earlier / undated activity";const L=new Date(O+"T12:00:00Z"),Y=new Date(L);Y.setUTCDate(Y.getUTCDate()+6);const U=F=>F.toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return U(L)+" – "+U(Y)+", "+Y.getUTCFullYear()};return c.jsxs("div",{className:"expanded-student",children:[c.jsxs("div",{className:"expanded-header",children:[c.jsxs("div",{children:[c.jsx("h3",{children:"Assignment history"}),c.jsx("p",{className:"muted",children:d?`Verified submission history for ${tl(l)}. Practice checks are not grades.`:`Sample records for ${tl(l)}. No student data is loaded.`})]}),c.jsx(fi,{tone:"success",children:d?Object.values(l.weekly||{}).reduce((O,L)=>O+(Number(L)||0),0)+" total verified pts":(l.weekly[u]||0)+" verified pts this week"})]}),c.jsxs("div",{className:"assignment-kind-summary","aria-label":"Lesson and challenge history totals",children:[c.jsxs("div",{className:"assignment-kind-row",children:[c.jsx("small",{className:"assignment-kind-label",children:"Lessons"}),c.jsxs("div",{className:"mini-stats",children:[c.jsxs("span",{children:[c.jsx("strong",{children:k.lessons.completed})," completed"]}),c.jsxs("span",{children:[c.jsx("strong",{children:k.lessons.graded})," graded"]}),c.jsxs("span",{children:[c.jsx("strong",{children:k.lessons.tracked})," tracked"]})]})]}),c.jsxs("div",{className:"assignment-kind-row",children:[c.jsx("small",{className:"assignment-kind-label",children:"Challenges"}),c.jsxs("div",{className:"mini-stats",children:[c.jsxs("span",{children:[c.jsx("strong",{children:k.challenges.completed})," completed"]}),c.jsxs("span",{children:[c.jsx("strong",{children:k.challenges.graded})," graded"]}),c.jsxs("span",{children:[c.jsx("strong",{children:k.challenges.tracked})," tracked"]})]})]})]}),(d?w:["all"]).map(O=>c.jsxs("details",{open:d?void 0:!0,className:d?"panel":"assignment-history-all",style:d?{marginTop:12,padding:12}:{},children:[c.jsxs("summary",{style:d?{cursor:"pointer",fontWeight:600}:{display:"none"},children:[N(O)," · ",(()=>{const L=sm(C[O]||[]);return L.lessons.completed+" lessons · "+L.challenges.completed+" challenges"})()," · ",O==="undated"?"No weekly points":_(O)+" verified pts"]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table assignment-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Assignment"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Score"}),c.jsx("th",{children:"Updated"}),c.jsx("th",{children:"Action"})]})}),c.jsx("tbody",{children:(d?C[O]:v).map(L=>{const Y=f===L.id;return c.jsxs(ve.Fragment,{children:[c.jsxs("tr",{children:[c.jsxs("th",{children:[L.name,c.jsx("small",{children:L.type})]}),c.jsx("td",{children:c.jsx(fi,{tone:d0(L.status),children:L.status})}),c.jsx("td",{children:L.score===null?"—":`${L.score} / ${L.possible}`}),c.jsx("td",{children:L.submitted}),c.jsx("td",{children:c.jsx("button",{className:"small-link",onClick:()=>g(Y?null:L.id),children:Y?"Hide details":"View details"})})]}),Y&&c.jsx("tr",{className:"receipt-preview",children:c.jsxs("td",{colSpan:"5",children:[c.jsx("strong",{children:d?"Submission details":"Sample assignment detail"}),c.jsx("p",{children:d?"Submitted code and protected receipts are not loaded in this read-only integration.":"This is a mock submitted-copy preview for layout testing, not the student's actual code."})]})})]},L.id)})})]})})]},O))]})}function h0({students:l,week:u,sort:d,setSort:f,expanded:g,setExpanded:v,readOnlyMode:k=!1,historyLoading:C=!1,onExpand:w}){return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Section roster & activity"}),c.jsx("p",{children:"Click a student's name to expand their assignments directly inside the roster."})]}),c.jsx(rg,{label:"Sort students by",value:d,onChange:f})]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table roster-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Student"}),c.jsx("th",{children:"Activity signal"}),c.jsx("th",{children:"Current activity"}),c.jsx("th",{children:"Practice"}),c.jsx("th",{children:"Hand-ins"})]})}),c.jsx("tbody",{children:l.map(_=>{const N=g===_.id;return c.jsxs(ve.Fragment,{children:[c.jsxs("tr",{className:N?"selected-row":"",children:[c.jsxs("th",{children:[c.jsxs("button",{className:"student-name-button","aria-expanded":N,onClick:()=>{v(N?null:_.id),N||w==null||w(_.id)},children:[N?c.jsx(xm,{size:16}):c.jsx(ni,{size:16})," ",tl(_)]}),c.jsxs("small",{children:["@",_.github,!k&&_.sections.length>1?" · Sheet periods 1, 3":""]})]}),c.jsx("td",{children:c.jsx(fi,{tone:_.status==="Active now"?"success":"",children:_.status})}),c.jsx("td",{children:_.current}),c.jsx("td",{children:k?_.practiceCount+" checks":_.assignments.filter(O=>O.status.includes("Completed")).length+" complete"}),c.jsx("td",{children:k?_.handinCount===null?"Expand to view":_.handinCount:_.assignments.filter(O=>O.score!==null).length})]}),N&&c.jsx("tr",{className:"expansion-row",children:c.jsx("td",{colSpan:"5",children:C?c.jsx("p",{role:"status",children:"Loading assignment history…"}):c.jsx(p0,{student:_,week:u,readOnlyMode:k})})})]},_.id)})})]})})]})}function ig(l,u){return l+"::"+u}function f0(l,u=[]){if(!(l!=null&&l.sectionId)||!l.lessonId)return"Choose a section and lesson.";if(l.sectionCourseId&&l.sectionCourseId!=="computer-science-1")return"This section uses a different course. Only Computer Science I is connected.";if(!/^\d{4}-\d{2}-\d{2}$/.test(l.dueDate||""))return"Choose a valid due date.";const[d,f,g]=l.dueDate.split("-").map(Number);if(new Date(Date.UTC(d,f-1,g)).toISOString().slice(0,10)!==l.dueDate)return"Choose a valid due date.";const k=Number(l.points);if(!Number.isFinite(k)||!Number.isInteger(k)||k<0||k>1e3)return"Points must be a whole number between 0 and 1,000.";if(l.scope!=="section"&&l.scope!=="selected")return"Choose who receives the assignment.";if(l.scope==="selected"){const C=new Set(u.map(_=>_.id)),w=[...new Set(l.studentIds||[])];if(!w.length||w.some(_=>!C.has(_)))return"Select at least one student from this section."}return null}function m0(l,u=[]){const d=f0(l,u);if(d)throw new Error(d);return{id:ig(l.sectionId,l.lessonId),sectionId:l.sectionId,courseId:"computer-science-1",lessonId:l.lessonId,scope:l.scope,studentIds:l.scope==="selected"?[...new Set(l.studentIds)].sort():[],dueDate:l.dueDate,points:Number(l.points)}}function g0(l,u){return[...(Array.isArray(l)?l:[]).filter(d=>d.id!==u.id),u]}function Gp(l,u,d){return(l||[]).find(f=>f.id===ig(u,d))||null}const y0="/playground/data/computer-science-1/course.json",tc=Sr("computer-science-1");function v0({section:l,students:u=[],assignments:d=[],setAssignments:f,readOnlyMode:g=!1}){const[v,k]=ve.useState(null),[C,w]=ve.useState("loading"),[_,N]=ve.useState(tc.lessons[0]),[O,L]=ve.useState("section"),[Y,U]=ve.useState([]),[F,V]=ve.useState(""),[I,z]=ve.useState(""),[B,H]=ve.useState("starter"),[J,ce]=ve.useState("");ve.useEffect(()=>{const T=new AbortController;return fetch(y0,{signal:T.signal,cache:"no-store"}).then(P=>{if(!P.ok)throw new Error("Curriculum unavailable");return P.json()}).then(P=>{if(!Array.isArray(P.lessons)||!P.lessons.length)throw new Error("Unexpected curriculum response");k(nl(P)),w("live")}).catch(P=>{P.name!=="AbortError"&&w("snapshot")}),()=>T.abort()},[]);const ae=ve.useMemo(()=>v?{...tc,...v}:tc,[v]),be=ae.lessons,Re=be.includes(_)?_:be[0],xe=na(ae,Re),se=be.reduce((T,P)=>{var $;return T+(Number(($=na(ae,P))==null?void 0:$.points)||0)},0),Ie=tc.lessons.includes(Re),le=(l==null?void 0:l.course)==="computer-science-1",fe=Gp(d,l==null?void 0:l.id,Re),A=u.filter(T=>T.sections.includes(l==null?void 0:l.id));ve.useEffect(()=>{var P;const T=Gp(d,l==null?void 0:l.id,Re);L((T==null?void 0:T.scope)||"section"),U((T==null?void 0:T.studentIds)||[]),V((T==null?void 0:T.dueDate)||""),z(String((T==null?void 0:T.points)??((P=na(ae,Re))==null?void 0:P.points)??0)),ce(""),H("starter")},[Re,l==null?void 0:l.id]);function Q(T){T.preventDefault();try{const P=m0({sectionId:l==null?void 0:l.id,sectionCourseId:l==null?void 0:l.course,lessonId:Re,scope:O,studentIds:Y,dueDate:F,points:I},A);if(g)throw Error("Assignment changes are disabled in this integration test.");f==null||f($=>g0($,P)),ce("Preview assignment saved in this browser. No students were notified.")}catch(P){ce(P.message)}}function q(){if(g){ce("Assignment changes are disabled in this integration test.");return}f==null||f(T=>(T||[]).filter(P=>P.id!==(fe==null?void 0:fe.id))),ce("Preview assignment cleared. Live student records were not changed.")}return c.jsxs("section",{className:"panel curriculum-panel","aria-label":"Published curriculum",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsxs("h2",{children:[c.jsx(ia,{size:18})," Computer Science I curriculum"]}),c.jsxs("p",{children:[ae.units.length," original units · ",be.length," lessons · ",se," available lesson points"]})]}),c.jsx("span",{className:"curriculum-source",role:"status",children:C==="live"?"Published course • current":C==="loading"?"Checking published course…":"Bundled preview snapshot"})]}),c.jsx("p",{className:"curriculum-explanation",children:"Lesson titles, published points, starter code, and unit order come from the real CS1 catalog. Assignment controls below are a browser-only preview and do not affect live students."}),c.jsxs("div",{className:"curriculum-grid",children:[c.jsx("div",{className:"curriculum-units","aria-label":"Unit and lesson list",children:ae.units.map((T,P)=>c.jsxs("details",{open:is(T).includes(Re)||P===0,children:[c.jsxs("summary",{children:["Unit ",pc(T,P+1)," · ",Rs(T)]}),c.jsx("div",{children:is(T).map($=>c.jsxs("button",{type:"button",className:$===Re?"curriculum-lesson selected":"curriculum-lesson","aria-current":$===Re?"true":void 0,onClick:()=>N($),children:[ra(ae,$),Gp(d,l==null?void 0:l.id,$)&&c.jsx("small",{children:" · Assigned in preview"})]},$))})]},T.id))}),c.jsxs("article",{className:"curriculum-lesson-preview",children:[c.jsx("div",{className:"eyebrow",children:"Published lesson"}),c.jsx("h3",{children:xe.title}),c.jsx("p",{children:xe.summary||xe.challenge||"Practice the skills from this unit."}),c.jsxs("div",{className:"curriculum-meta",children:[c.jsxs("span",{children:[xe.points??0," published points"]}),c.jsxs("span",{children:[xe.mode==="function"?"Function":"Script"," · Python"]})]}),c.jsxs("div",{className:"curriculum-code-tabs",role:"tablist","aria-label":"Lesson code",children:[c.jsx("button",{type:"button",role:"tab","aria-selected":B==="starter",className:B==="starter"?"active":"",onClick:()=>H("starter"),children:"Starter code"}),c.jsxs("button",{type:"button",role:"tab","aria-selected":B==="solution",className:B==="solution"?"active":"",onClick:()=>H("solution"),children:[c.jsx(cf,{size:14})," Solution"]})]}),B==="starter"?c.jsx("pre",{className:"curriculum-code",children:c.jsx("code",{children:xe.starter||"# No starter code provided"})}):c.jsxs("div",{className:"curriculum-solution-locked",role:"status",children:[c.jsx(cf,{size:20}),c.jsxs("div",{children:[c.jsx("strong",{children:"Teacher-only solutions"}),c.jsx("p",{children:"Solutions must be loaded from protected storage after teacher sign-in and authorization. Answer keys are not included in the public React preview."})]})]}),Ie?c.jsxs("a",{className:"btn",href:Fd(tc,Re),children:["Open lesson in React preview ",c.jsx(bm,{size:14})]}):c.jsx("p",{className:"muted",children:"This newer published lesson is not yet in the React snapshot."}),c.jsxs("div",{className:"curriculum-assignment-editor",children:[c.jsx("h4",{children:"Assign lesson"}),le?c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"curriculum-assignment-warning",children:g?"Read-only integration: assignments cannot be saved or changed.":"Preview only. Assignments are saved in this browser, not sent to students or the live gradebook."}),c.jsx("form",{onSubmit:Q,className:"curriculum-assignment-form",children:c.jsxs("fieldset",{disabled:g,style:{border:0,padding:0,margin:0,minWidth:0},children:[c.jsxs("label",{children:["Assign to",c.jsxs("select",{value:O,onChange:T=>L(T.target.value),children:[c.jsxs("option",{value:"section",children:["Whole class · ",A.length," students"]}),c.jsx("option",{value:"selected",children:"Selected students"})]})]}),O==="selected"&&c.jsxs("fieldset",{className:"curriculum-recipient-picker",children:[c.jsx("legend",{children:"Choose students"}),A.length?A.map(T=>c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:Y.includes(T.id),onChange:P=>U($=>P.target.checked?[...$,T.id]:$.filter(M=>M!==T.id))}),c.jsx("span",{children:tl(T)})]},T.id)):c.jsx("p",{children:"No students are enrolled in this section."})]}),c.jsxs("div",{className:"curriculum-assignment-fields",children:[c.jsxs("label",{children:["Due date",c.jsx("input",{type:"date",required:!0,value:F,onChange:T=>V(T.target.value)})]}),c.jsxs("label",{children:["Points",c.jsx("input",{type:"number",required:!0,min:"0",max:"1000",step:"1",value:I,onChange:T=>z(T.target.value)})]})]}),c.jsxs("div",{className:"curriculum-assignment-actions",children:[c.jsx("button",{type:"submit",className:"btn primary",children:fe?"Update preview assignment":"Save preview assignment"}),fe&&c.jsx("button",{type:"button",className:"btn",onClick:q,children:"Remove assignment"})]})]})}),fe&&c.jsxs("p",{className:"curriculum-current-assignment",children:["Saved for ",fe.scope==="section"?"whole class":fe.studentIds.length+" selected students"," · ","Due ",fe.dueDate," · ",fe.points," points"]}),J&&c.jsx("p",{className:"curriculum-assignment-feedback",role:"status",children:J})]}):c.jsxs("p",{className:"curriculum-assignment-warning",children:[(l==null?void 0:l.name)||"This section"," uses a different course. Choose a Computer Science I section to assign CS1 lessons."]})]})]})]})]})}function x0(l){const u=(l==null?void 0:l.lessonRecords)||{},d=new Map;for(const[g,v]of Object.entries(u)){const k=v.stableId||v.id||g;for(const C of[g,v.id,k,...v.legacyIds||[]].filter(Boolean)){if(d.has(C)&&d.get(C)!==g)throw Error("Ambiguous lesson alias: "+C);d.set(C,g)}}function f(g){const v=String(g||"").trim(),k=v.replace(/^(lesson|challenge|project):/,""),C=d.get(v)||d.get(k);return C?{key:C,record:u[C],stableId:u[C].stableId||C}:null}return{resolve:f,canonicalId:g=>{var v;return((v=f(g))==null?void 0:v.stableId)||g},title:g=>{var v;return((v=f(g))==null?void 0:v.record.title)||null}}}const Yp=()=>({teacher:new Map,sheet:new Map,directory:[],loading:!0,error:""}),sg=l=>String(l||"").trim().replace(/^@/,"").toLowerCase();function b0(l=[],u=[],d=[]){const f=new Map((Array.isArray(l)?l:[]).filter(w=>{var _;return w.user_id&&((_=w.display_name)==null?void 0:_.trim())}).map(w=>[w.user_id,w.display_name.trim()])),g=new Map((Array.isArray(u)?u:[]).filter(w=>w.user_id).map(w=>[w.user_id,w])),v=Array.isArray(d)?d:[],k=new Map(v.filter(w=>w.user_id).map(w=>[w.user_id,w])),C=new Map(v.filter(w=>w.github_account).map(w=>[sg(w.github_account),w]));return{teacher:f,sheet:g,directory:v,byId:k,byGithub:C,loading:!1,error:""}}function og(l,u){var C,w,_,N;const d=u.user_id||u.id,f=((C=l.byId)==null?void 0:C.get(d))||((w=l.byGithub)==null?void 0:w.get(sg(u.github_account||u.github)))||{},g=f.user_id||d,v=u.github_account||f.github_account||u.github||"",k=(_=l.sheet)==null?void 0:_.get(g);return{teacherName:((N=l.teacher)==null?void 0:N.get(g))||"",sheetName:(k==null?void 0:k.name)||"",studentName:f.student_name||u.student_name||u.display_name||"",github:v}}function ag(l,u=0){const[d,f]=ve.useState(Yp);return ve.useEffect(()=>{if((l==null?void 0:l.status)!=="ready"){f(Yp());return}let g=!0;return Promise.all([l.rpc("playground_teacher_names"),l.rpc("playground_teacher_sheet_roster"),l.rpc("playground_teacher_directory")]).then(([v,k,C])=>{g&&f(b0(v,k,C))}).catch(()=>{g&&f({...Yp(),loading:!1,error:"Names and account directory could not be loaded."})}),()=>{g=!1}},[l,u]),d}const w0="/playground/integration/teacher-bridge.js";function Vp(l,u=Sr("computer-science-1")){var N;const d=String(l||"").trim(),f=d.replace(/^(lesson|challenge|project):/,""),g=x0(u).title(f);if(g)return g;const v=(u==null?void 0:u.lessonRecords)||{},k=(u==null?void 0:u.challengeRecords)||{},C=[d,f,f.split("/").at(-1)];if(d.startsWith("challenge:")||k[f]){for(const O of C){const L=k[O];if(L!=null&&L.title)return L.title}for(const O of Object.values(k))if((O==null?void 0:O.stableId)===f||((O==null?void 0:O.legacyIds)||[]).includes(f))return O.title||f}for(const O of C){const L=v[O];if(L!=null&&L.title)return L.title}const w=f.split("/").at(-1),_=Object.entries(v).filter(([O])=>O.split("/").at(-1)===w);return _.length===1&&((N=_[0][1])!=null&&N.title)?_[0][1].title:w.replace(/^\\d+-/,"").replace(/[-_]/g," ").replace(/\b[a-z]/g,O=>O.toUpperCase())||"Untitled activity"}function k0(l){if(!l||Number.isNaN(Date.parse(l)))return null;const u=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(l)).filter(f=>f.type!=="literal").map(f=>[f.type,f.value])),d=new Date(u.year+"-"+u.month+"-"+u.day+"T12:00:00Z");return d.setUTCDate(d.getUTCDate()-(d.getUTCDay()+6)%7),d.toISOString().slice(0,10)}function S0(l){const u=new Date(l+"T12:00:00Z");if(Number.isNaN(u.getTime()))return l;const d=new Date(u);d.setUTCDate(d.getUTCDate()+6);const f=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return f.format(u)+" – "+f.format(d)+", "+d.getUTCFullYear()}function _0(){const l=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date).filter(d=>d.type!=="literal").map(d=>[d.type,d.value])),u=new Date(l.year+"-"+l.month+"-"+l.day+"T12:00:00Z");return u.setUTCDate(u.getUTCDate()-(u.getUTCDay()+6)%7),u.toISOString().slice(0,10)}function C0(){var q;const[l,u]=ve.useState(null),[d,f]=ve.useState("loading"),[g,v]=ve.useState(""),[k,C]=ve.useState("overview"),[w,_]=ve.useState(null),[N,O]=ve.useState(null),[L,Y]=ve.useState(null),[U,F]=ve.useState(_0),[V,I]=ve.useState("last"),[z,B]=ve.useState(null),[H,J]=ve.useState(null),[ce,ae]=ve.useState("");ve.useEffect(()=>{let T=!0;return fetch("/playground/integration/data/computer-science-1/course.json",{cache:"no-store"}).then(P=>{if(!P.ok)throw Error("catalog");return P.json()}).then(P=>{T&&Y(nl(P))}).catch(()=>{T&&Y(null)}),()=>{T=!1}},[]),ve.useEffect(()=>{let T=!0;return import(w0).then(P=>P.teacherReadOnlyClient()).then(P=>{var $;T&&(u(P),f(P.status),P.status==="ready"&&v((($=P.classes[0])==null?void 0:$.id)||""))}).catch(()=>{T&&f("unavailable")}),()=>{T=!1}},[]),ve.useEffect(()=>{if(!g||(l==null?void 0:l.status)!=="ready")return;let T=!0;return _(null),O(null),B(null),J(null),ae(""),Promise.all([l.rpc("playground_teacher_snapshot",{p_class:g}),l.rpc("playground_teacher_weekly_points",{p_class:g})]).then(([P,$])=>{T&&(_(P),O($))}).catch(()=>{T&&ae("Could not load this section. No records were changed.")}),()=>{T=!1}},[g,l]),ve.useEffect(()=>{if(!z||!g||!l)return;let T=!0;return J(null),l.rpc("playground_teacher_student_history",{p_class:g,p_student:z}).then(P=>{T&&J(P)}).catch(()=>{T&&J({error:"Student history unavailable"})}),()=>{T=!1}},[z,g,l]);const be=ag(l),Re=(q=l==null?void 0:l.classes)==null?void 0:q.find(T=>T.id===g),xe=((w==null?void 0:w.roster)||[]).filter(T=>T.status==="approved"),se=((w==null?void 0:w.roster)||[]).filter(T=>T.status==="pending"),Ie=[...new Set([U,...((N==null?void 0:N.weeks)||[]).map(T=>T.week_start)])].sort().reverse(),le=new Map(((N==null?void 0:N.weeks)||[]).filter(T=>T.week_start===U).map(T=>[T.user_id,T])),fe=new Map(((w==null?void 0:w.checks)||[]).map(T=>[T.user_id,T])),A=xe.map(T=>{var P;return{id:T.user_id,...og(be,T),sections:[g],status:"Not connected",current:"—",weekly:Object.fromEntries(((N==null?void 0:N.weeks)||[]).filter($=>$.user_id===T.user_id).map($=>[$.week_start,Number($.points)||0])),weeklyAssignments:Object.fromEntries(((N==null?void 0:N.weeks)||[]).filter($=>$.user_id===T.user_id).map($=>[$.week_start,Number($.assignments)||0])),assignments:z===T.user_id&&H&&!H.error?T0(H,L):[],practiceCount:Number((P=fe.get(T.user_id))==null?void 0:P.checks)||0,handinCount:z===T.user_id&&H&&!H.error?(H.submissions||[]).length:null}}).sort((T,P)=>ng(T,P,V)),Q=Re?{id:Re.id,name:Re.name,course:Re.course_id,join_code:Re.join_code}:null;return c.jsxs("div",{className:"main-content teacher-screen",children:[c.jsx(vh,{eyebrow:"Your classroom · Connected integration",actions:c.jsx(fi,{children:"Authorized teacher · Read only"}),children:"Teacher Dashboard"}),c.jsx("p",{className:"page-subtitle",children:"The original React dashboard layout, connected to your existing authorized class data. No student records can be changed here."}),d==="loading"?c.jsx("p",{role:"status",children:"Checking your teacher session…"}):d==="signed-out"?c.jsxs("p",{children:["Sign in through the ",c.jsx("a",{href:"/playground/",children:"current Playground"}),", then return here."]}):d==="forbidden"?c.jsx("p",{role:"alert",children:"This account does not have teacher access."}):d!=="ready"?c.jsx("p",{role:"alert",children:"Teacher data is unavailable."}):c.jsxs(c.Fragment,{children:[c.jsx(o0,{sectionId:g,sections:l.classes.map(T=>({id:T.id,name:T.name,course:T.course_id,join_code:T.join_code})),onSectionChange:T=>{v(T),B(null)},readOnlyMode:!0}),c.jsx(l0,{tab:k,onChange:T=>{C(T),B(null)}}),ce||be.error?c.jsx("p",{role:"alert",children:ce||be.error}):!w||!N||be.loading?c.jsx("p",{role:"status",children:"Loading section information and verified names…"}):c.jsxs(c.Fragment,{children:[k==="overview"&&c.jsxs(c.Fragment,{children:[c.jsx(im,{section:Q}),c.jsxs("div",{className:"stat-grid",children:[c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:xe.length}),c.jsx("span",{children:"Enrolled students"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:se.length}),c.jsx("span",{children:"Pending enrollment requests"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:xe.reduce((T,P)=>{var $;return T+(Number(($=le.get(P.user_id))==null?void 0:$.points)||0)},0)}),c.jsx("span",{children:"Verified weekly points"})]})]}),c.jsx(u0,{students:A,week:U,setWeek:F,readOnlyMode:!0,availableWeeks:Ie.map(T=>({key:T,label:S0(T)}))}),c.jsx(h0,{students:A,week:U,sort:V,setSort:I,expanded:z,setExpanded:B,readOnlyMode:!0,historyLoading:!!(z&&!H)})]}),k==="curriculum"&&c.jsxs(c.Fragment,{children:[c.jsx(im,{section:Q}),(Q==null?void 0:Q.course)==="computer-science-1"?c.jsx(v0,{section:Q,students:A,assignments:[],readOnlyMode:!0}):c.jsxs("section",{className:"panel",children:[c.jsxs("h2",{children:[c.jsx(ia,{size:18})," Curriculum"]}),c.jsx("p",{children:"Course-specific assignments will be connected after authorization and content verification."})]})]}),k==="journals"&&c.jsxs("section",{className:"panel",children:[c.jsx("div",{className:"section-heading",children:c.jsxs("h2",{children:[c.jsx(hh,{size:18})," Weekly Journal Submissions"]})}),c.jsx("p",{children:"Journal access will be connected to authorized section records. No fictional student submissions are shown."})]})]})]})]})}function T0(l,u){const d=new Map;for(const f of l.practice||[]){const g=f.activity_id;if(!g)continue;const v=d.get(g)||{id:g,name:Vp(g,u||Sr("computer-science-1")),type:f.activity_kind||"Lesson",status:"Started",score:null,possible:null,submitted:"—"};f.status==="completed"?v.status="Practice completed":f.status==="needs_revision"&&v.status==="Started"&&(v.status="Needs revision"),v.submitted=f.updated_at||v.submitted,d.set(g,v)}for(const f of l.submissions||[]){const g=f.activity_id;if(!g)continue;const v=d.get(g)||{id:g,name:Vp(g,u||Sr("computer-science-1")),type:f.activity_kind||"Lesson",status:"Submitted",score:null,possible:null,submitted:"—"};f.grade_status==="graded"&&Number.isFinite(Number(f.points))&&Number.isFinite(Number(f.possible))?((v.score===null||Number(f.points)>v.score)&&(v.score=Number(f.points),v.possible=Number(f.possible)),v.status="Completed"):v.score===null&&(v.status="Submitted"),(!v.submitted||v.submitted==="—"||Date.parse(f.submitted_at)>Date.parse(v.submitted))&&(v.submitted=f.submitted_at),d.set(g,v)}for(const f of l.checks||[]){const g=f.activity_id;g&&(d.has(g)||d.set(g,{id:g,name:Vp(g,u||Sr("computer-science-1")),type:"Practice",status:"Started",score:null,possible:null,submitted:f.last_check||"—"}))}return[...d.values()].sort((f,g)=>Date.parse(g.submitted||0)-Date.parse(f.submitted||0)).map(f=>({...f,week:k0(f.submitted),submitted:f.submitted==="—"?"—":new Date(f.submitted).toLocaleDateString("en-US")}))}const lg=l=>{const u=String(l||"").trim(),d=u.match(/^https?:\/\/(?:www\.)?github\.com\/([^/?#\s]+)\/?$/i);return(d?d[1]:u).replace(/^@/,"").trim().toLowerCase()},Rh=l=>{const u=String(l??"").trim();return/^\d{1,2}$/.test(u)?String(Number(u)):null};function j0(l){const u=String(l??"").match(/\bperiod\s*#?\s*(\d{1,2})\b/i);return u?Rh(u[1]):null}function ug(l=[]){return(Array.isArray(l)?l:[]).filter(u=>u.status==="approved"||u.status==="pending")}function N0(l=[],u=[]){const d=[...(Array.isArray(l)?l:[]).map(Rh),...ug(u).map(f=>j0(f.name))];return[...new Set(d.filter(Boolean))].sort((f,g)=>Number(f)-Number(g))}function E0(l=[]){return[...new Set((l||[]).flatMap(u=>Array.isArray(u.periods)?u.periods.map(Rh):[]).filter(Boolean))].sort((u,d)=>Number(u)-Number(d))}function L0(l=[]){const u=new Map,d=new Set;for(const f of Array.isArray(l)?l:[]){const g=lg(f==null?void 0:f.github);g&&(u.has(g)?(d.add(g),u.delete(g)):d.has(g)||u.set(g,f))}return{byGithub:u,duplicates:d}}function P0({children:l}){return c.jsx("div",{className:"empty",children:l})}function A0({student:l,isEditing:u,onToggleEdit:d,onDone:f,onPatch:g,readOnlyMode:v=!1}){const k=tl(l);return c.jsxs("article",{className:"account-card",children:[c.jsxs("div",{className:"account-row",children:[c.jsx("span",{className:"avatar",children:k.slice(0,1).toUpperCase()}),c.jsxs("div",{className:"account-identity",children:[c.jsx("h3",{children:k}),c.jsxs("small",{children:["@",l.github]})]}),!v&&c.jsx("button",{className:"icon-button","aria-label":`Edit ${k}`,onClick:d,children:u?c.jsx(Ud,{size:17}):c.jsx(yh,{size:17})})]}),c.jsxs("div",{className:"account-footer",children:[c.jsx(fi,{tone:l.teacherName||l.sheetName?"success":"",children:l.teacherName?"Teacher name":l.sheetName?"Sheet matched":l.studentName?"Signup name":"GitHub fallback"}),(v?l.periods||[]:l.sections.map(C=>tg(C)).filter(Boolean)).map(C=>c.jsxs(fi,{children:["Period ",C]},C)),v&&l.kind==="client"&&c.jsx(fi,{children:"Private client"})]}),u&&c.jsxs("div",{className:"account-edit",children:[c.jsxs("label",{children:["Google Sheet name",c.jsx("input",{value:l.sheetName||"",onChange:C=>g({sheetName:C.target.value||null})})]}),c.jsxs("label",{children:["Student-provided backup",c.jsx("input",{value:l.studentName||"",onChange:C=>g({studentName:C.target.value})})]}),c.jsx("button",{className:"btn",onClick:f,children:"Done"})]})]})}function R0({students:l,sort:u,setSort:d,patchStudent:f,readOnlyMode:g=!1,onRefresh:v,sheetDuplicateCount:k=0}){const[C,w]=Kn("designlab:period-filter","all"),[_,N]=Kn("designlab:account-filter","all"),[O,L]=ve.useState(""),[Y,U]=ve.useState(null),F=ve.useMemo(()=>g?E0(l):r0,[l,g]),V=ve.useMemo(()=>{const I=O.trim().toLowerCase();return l.filter(z=>{const B=z.memberships||[],H=B.length>0;return _==="enrolled"&&(z.kind!=="student"||!H)||_==="unassigned"&&(z.kind!=="student"||H)||_==="client"&&z.kind!=="client"||_==="without-sheet"&&z.sheetMatched||C!=="all"&&(g?!(z.periods||[]).includes(C):!z.sections.some(J=>tg(J)===C))?!1:I?[tl(z),z.github,z.studentName,z.sheetName,...z.periods||[],...B.map(J=>J.name),...B.map(J=>J.course_id)].some(J=>String(J||"").toLowerCase().includes(I)):!0}).sort((z,B)=>ng(z,B,u))},[l,C,_,u,O,g]);return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Accounts"}),c.jsx("p",{children:"Teacher name, then connected Sheet, signup name, and GitHub fallback."})]}),c.jsxs(fi,{children:[V.length," accounts"]})]}),c.jsxs("div",{className:"filters",children:[c.jsxs("label",{children:[c.jsx(wm,{size:16})," ",c.jsx("input",{"aria-label":"Search accounts",value:O,placeholder:"Search name or GitHub username",onChange:I=>L(I.target.value)})]}),c.jsxs("label",{children:["Show",c.jsxs("select",{value:_,onChange:I=>N(I.target.value),children:[c.jsx("option",{value:"all",children:"All accounts"}),c.jsx("option",{value:"enrolled",children:"Enrolled students"}),c.jsx("option",{value:"unassigned",children:"Unassigned students"}),c.jsx("option",{value:"client",children:"Private clients"}),c.jsx("option",{value:"without-sheet",children:"No Sheet match"})]})]}),c.jsxs("label",{children:["Class period",c.jsxs("select",{value:F.includes(C)?C:"all",onChange:I=>w(I.target.value),children:[c.jsx("option",{value:"all",children:"All periods"}),F.map(I=>c.jsx("option",{children:I},I))]})]}),c.jsx(rg,{label:"Sort",value:u,onChange:d}),g&&c.jsx("button",{type:"button",className:"btn secondary",onClick:v,children:"Refresh accounts"})]}),c.jsx("p",{className:"info-text",children:g?"Authorized account directory · read-only. Sheet names and periods can be refreshed here; account and section edits remain disabled."+(k?" "+k+" duplicate Sheet GitHub "+(k===1?"username was":"usernames were")+" skipped.":""):"Sample account edits are saved only in browser storage."}),c.jsx("div",{className:"account-grid",children:V.map(I=>c.jsx(A0,{student:I,isEditing:Y===I.id,onToggleEdit:()=>U(Y===I.id?null:I.id),onDone:()=>U(null),onPatch:z=>f==null?void 0:f(I.id,z),readOnlyMode:g},I.id))}),!V.length&&c.jsx(P0,{children:"No accounts match those filters."})]})}const I0="https://www.googleapis.com/auth/spreadsheets.readonly",Jp="playground:google-sheets-client-id",nc="playground:teacher-google-sheet-url";function Ih(l){let u;try{u=new URL(String(l||"").trim())}catch{throw Error("Paste a full Google Sheets link.")}if(u.protocol!=="https:"||u.hostname!=="docs.google.com")throw Error("Use a Google Sheets URL from docs.google.com.");const d=u.pathname.match(/^\/spreadsheets\/d\/([a-zA-Z0-9_-]+)(?:\/|$)/);if(!d)throw Error("This URL does not contain a spreadsheet ID.");const f=new URLSearchParams(u.hash.replace(/^#/,"")),g=u.searchParams.get("gid")||f.get("gid");if(g!==null&&!/^\d+$/.test(g))throw Error("Invalid sheet tab (gid).");return{id:d[1],gid:g===null?null:Number(g)}}const om=l=>String(l||"").replace(/\s+/g," ").trim().toLowerCase();function cg(l){const d=["class period","first name","last name","github username"].map(g=>l.findIndex(v=>om(v)===g));if(d.some(g=>g<0))throw Error("The Sheet must have Class Period, First Name, Last Name and GitHub Username headers.");const f=l.findIndex(g=>/^class period 2(?:\b|\s|\()/i.test(om(g)));return[...d,...f>=0?[f]:[]]}const O0=l=>String(l||"").trim().replace(/^@/,"").replace(/^https?:\/\/(?:www\.)?github\.com\//i,"").replace(/\/$/,"").toLowerCase();function D0(l,u){cg(l);const[d,f,g,v,k]=u,C=Math.max(...u.map(_=>(_==null?void 0:_.length)||0),0),w=[];for(let _=0;_<C;_++){const N=O0(v==null?void 0:v[_]);if(!N)continue;const O=String((f==null?void 0:f[_])||"").trim(),L=String((g==null?void 0:g[_])||"").trim(),Y=String((d==null?void 0:d[_])||"").trim(),U=String((k==null?void 0:k[_])||"").trim();w.push({github:N,period:Y,periods:[...new Set([Y,U].filter(Boolean))],firstName:O,lastName:L,name:[O,L].filter(Boolean).join(" "),row:_+2})}return w}function am(l){let u=l+1,d="";for(;u;)u--,d=String.fromCharCode(65+u%26)+d,u=Math.floor(u/26);return d}async function Xp(l,u){const d=await fetch(l,{headers:{Authorization:"Bearer "+u},cache:"no-store"});if(!d.ok)throw d.status===401?Error("Google session expired. Connect Google again."):d.status===403?Error("Google denied access. Check Sheet access and the Sheets API."):d.status===404?Error("Google could not find this spreadsheet or tab."):Error("Google Sheets request failed ("+d.status+").");return d.json()}async function M0(l,u){var F;const d=Ih(l),f="https://sheets.googleapis.com/v4/spreadsheets/"+encodeURIComponent(d.id),g=await Xp(f+"?fields=sheets(properties(sheetId,title))",u),v=g.sheets||[],k=d.gid===null?v[0]:v.find(V=>V.properties.sheetId===d.gid);if(!k)throw Error("The selected sheet tab was not found.");const C=k.properties.title,w="'"+C.replace(/'/g,"''")+"'",_=await Xp(f+"/values/"+encodeURIComponent(w+"!1:1"),u),N=((F=_.values)==null?void 0:F[0])||[],O=cg(N),L=new URLSearchParams({majorDimension:"COLUMNS"});for(const V of O)L.append("ranges",w+"!"+am(V)+"2:"+am(V));const Y=await Xp(f+"/values:batchGet?"+L.toString(),u),U=(Y.valueRanges||[]).map(V=>{var I;return((I=V.values)==null?void 0:I[0])||[]});return{rows:D0(N,U),title:C}}let rc;function z0(){var l,u;return(u=(l=globalThis.google)==null?void 0:l.accounts)!=null&&u.oauth2?Promise.resolve():rc||(rc=new Promise((d,f)=>{const g=document.createElement("script");g.src="https://accounts.google.com/gsi/client",g.async=!0,g.onload=()=>{var v,k;return(k=(v=globalThis.google)==null?void 0:v.accounts)!=null&&k.oauth2?d():f(Error("Google sign-in did not load."))},g.onerror=()=>f(Error("Google sign-in is blocked or unavailable on this network.")),document.head.append(g)}).catch(d=>{throw rc=null,d}),rc)}async function F0(l,u){if(Ih(l),!/^\d+-[a-z0-9_-]+\.apps\.googleusercontent\.com$/i.test(String(u||"").trim()))throw Error("Enter a valid Google Cloud Web OAuth client ID.");return await z0(),new Promise((d,f)=>{globalThis.google.accounts.oauth2.initTokenClient({client_id:u.trim(),scope:I0,callback:async v=>{if(v.error||!v.access_token){f(Error("Google authorization was not completed."));return}try{d(await M0(l,v.access_token))}catch(k){f(k)}},error_callback:()=>f(Error("Google authorization popup was closed or blocked."))}).requestAccessToken({prompt:""})})}const wd=l=>{try{return localStorage.getItem(l)||""}catch{return""}},kd=(l,u)=>{try{return u?localStorage.setItem(l,u):localStorage.removeItem(l),!0}catch{return!1}};function W0({onRows:l=()=>{}}){const[u,d]=ve.useState(()=>wd(nc)),[f,g]=ve.useState(()=>wd(Jp)),[v,k]=ve.useState(u?"Saved Sheet link restored from this browser. Reconnect Google to refresh names and periods.":""),[C,w]=ve.useState(!1);async function _(){try{Ih(u)}catch(O){k(O.message);return}kd(nc,u.trim()),kd(Jp,f.trim()),w(!0),k("Opening Google authorization…");try{const O=await F0(u,f);l(O.rows||[]),k("Sheet loaded: "+O.title+" · "+(O.rows||[]).length+" rows with GitHub usernames. Read-only integration: nothing was synchronized to the database.")}catch(O){k(O.message||"Could not load the Google Sheet.")}finally{w(!1)}}function N(){kd(nc,""),d(""),l([]),k("Saved Sheet link cleared from this browser. Google permissions remain managed in your Google account.")}return c.jsxs("details",{className:"panel admin-sheet-panel",children:[c.jsx("summary",{children:"Google Sheet roster (optional)"}),c.jsx("p",{children:"Use the same private roster connection as the live dashboard. This integration reads names, GitHub usernames, and up to two class periods in your browser only; it does not synchronize or change account records."}),c.jsxs("label",{children:["Google Sheet link",c.jsx("input",{type:"url",value:u,onChange:O=>d(O.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",autoComplete:"off"})]}),c.jsxs("div",{className:"admin-sheet-actions",children:[c.jsx("button",{type:"button",className:"btn",disabled:C,onClick:_,children:C?"Connecting…":u===wd(nc)&&u?"Reconnect Google & load saved sheet":"Connect Google & load sheet"}),wd(nc)&&c.jsx("button",{type:"button",className:"btn secondary",disabled:C,onClick:N,children:"Forget saved link"})]}),c.jsxs("details",{children:[c.jsx("summary",{children:"One-time Google authorization setup"}),c.jsx("p",{children:"Use the same Google Cloud Web OAuth client configured for the live Playground. The client ID is public configuration, not a secret."}),c.jsxs("label",{children:["Google OAuth client ID",c.jsx("input",{type:"text",value:f,onChange:O=>g(O.target.value),placeholder:"12345-abc.apps.googleusercontent.com",autoComplete:"off"})]}),c.jsx("button",{type:"button",className:"btn secondary",onClick:()=>{kd(Jp,f.trim()),k("Google OAuth client ID saved on this browser.")},children:"Save browser configuration"})]}),v&&c.jsx("p",{className:"info-text",role:"status",children:v})]})}const H0="/playground/integration/teacher-bridge.js";function B0(){const[l,u]=ve.useState(null),[d,f]=ve.useState("loading"),[g,v]=ve.useState("last"),[k,C]=ve.useState([]),[w,_]=ve.useState(0);ve.useEffect(()=>{let Y=!0;return import(H0).then(U=>U.teacherReadOnlyClient()).then(U=>{Y&&(u(U),f(U.status))}).catch(()=>{Y&&f("unavailable")}),()=>{Y=!1}},[]);const N=ag(l,w),O=L0(k),L=N.directory.map(Y=>{var B;const U=ug(Y.memberships||[]),F=(B=N.sheet)==null?void 0:B.get(Y.user_id),I=O.byGithub.get(lg(Y.github_account))||F,z=og(N,Y);return{id:Y.user_id,...z,sheetName:(I==null?void 0:I.name)||z.sheetName||"",sections:U.map(H=>H.class_id),memberships:U,periods:N0((I==null?void 0:I.periods)||[],U),sheetMatched:!!I,kind:Y.kind||"student"}});return c.jsxs("div",{className:"main-content teacher-screen admin-screen",children:[c.jsx(vh,{eyebrow:"Global management · Connected integration",actions:c.jsx(fi,{children:"Teacher/Admin · Read only"}),children:"Admin Dashboard"}),c.jsx("p",{className:"page-subtitle",children:"Connected account management for the current sole teacher/admin account. This integration remains read only; no account records can be changed here."}),d==="loading"?c.jsx("p",{role:"status",children:"Checking access…"}):d!=="ready"?c.jsx("p",{role:"alert",children:d==="signed-out"?"Sign in through the current Playground first.":"Account directory is unavailable or access was denied."}):N.loading?c.jsx("p",{role:"status",children:"Loading account directory…"}):N.error?c.jsx("p",{role:"alert",children:N.error}):c.jsxs(c.Fragment,{children:[c.jsx(W0,{onRows:C}),c.jsx(R0,{students:L,sort:g,setSort:v,readOnlyMode:!0,onRefresh:()=>_(Y=>Y+1),sheetDuplicateCount:O.duplicates.size})]})]})}const U0={essay:"Think about a time you solved a difficult problem. Explain what you tried first, how you changed your approach, and what you learned. Use specific evidence.","logic-puzzle":"A robot follows this pattern: 2, 6, 12, 20, 30, __. Find the next number. Explain the pattern and show why your answer fits."},lm={response:"",type:"essay",aiUse:"",aiDetails:""};function q0({submissions:l,setSubmissions:u}){var xe;const[d,f]=Kn("designlab:journal-section",Qa[0].id),g=Qa.find(se=>se.id===d)||Qa[0],v=Zp.filter(se=>se.sections.includes(g.id)),[k,C]=Kn("designlab:journal-student",Zp[0].id),w=v.find(se=>se.id===k)||v[0],_=ve.useMemo(()=>qg(),[]),[N,O]=Kn("designlab:journal-week",_[0]),L=_.includes(N)?N:_[0],[Y,U]=Kn("designlab:journal-drafts",{}),[F,V]=ve.useState(""),[I,z]=ve.useState(!1),B=$g(g.id,w.id,L),H=Y[B]||lm,J=l.filter(se=>se.studentId===w.id&&se.sectionId===g.id&&se.week===L),ce=J.at(-1),ae=H.response.trim()?H.response.trim().split(/\s+/).length:0;function be(se,Ie){U(le=>({...le,[B]:{...le[B]||lm,[se]:Ie}})),V("Draft saved in this browser.")}function Re(se){se.preventDefault();const Ie=Kg(H);if(Ie){V(Ie);return}const le={id:`demo-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,sectionId:g.id,studentId:w.id,studentName:`${w.first} ${w.last}`,courseId:g.course,week:L,response:H.response.trim(),type:H.type,aiUse:H.aiUse,aiDetails:H.aiDetails.trim(),submittedAt:new Date().toISOString()};u(fe=>[...fe,le]),V("Demo submission saved locally. Check the Teacher Dashboard → Journals tab to review it.")}return c.jsxs("div",{className:"main-content journal-screen",children:[c.jsx("div",{className:"eyebrow",children:"Your classes · Written work"}),c.jsxs("header",{className:"journal-heading",children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Weekly Journals"}),c.jsx("p",{children:"Essay responses, reflections, and logic puzzles—all in one place."})]}),c.jsxs("span",{className:"chip",children:[c.jsx(km,{size:14})," Local demo only"]})]}),c.jsxs("section",{className:"journal-card journal-selection","aria-label":"Select a journal",children:[c.jsxs("label",{children:["Class section",c.jsx("select",{value:g.id,onChange:se=>{f(se.target.value),V("")},children:Qa.map(se=>{var Ie;return c.jsxs("option",{value:se.id,children:[se.name," · ",(Ie=Sr(se.course))==null?void 0:Ie.label]},se.id)})})]}),c.jsxs("label",{children:["Preview as student",c.jsx("select",{value:w.id,onChange:se=>{C(se.target.value),V("")},children:v.map(se=>c.jsxs("option",{value:se.id,children:[se.first," ",se.last," (sample)"]},se.id))})]}),c.jsxs("label",{children:["Journal week",c.jsx("select",{value:L,onChange:se=>{O(se.target.value),V("")},children:_.map(se=>c.jsxs("option",{value:se,children:["Week of ",sc(se)]},se))})]})]}),c.jsxs("section",{className:"journal-card journal-editor-card",children:[c.jsxs("div",{className:"journal-section-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"eyebrow",children:[(xe=Sr(g.course))==null?void 0:xe.label," · ",g.name]}),c.jsxs("h2",{children:["Journal · Week of ",sc(L)]})]}),c.jsx("span",{className:`journal-status-pill ${ce?"submitted":""}`,children:ce?"Submitted":"Not submitted"})]}),c.jsx("p",{className:"journal-instructions",children:"This is a fictional prompt for design testing. In production, your teacher would publish the weekly assignment."}),c.jsxs("form",{onSubmit:Re,children:[c.jsxs("label",{children:["Response type",c.jsxs("select",{value:H.type,onChange:se=>be("type",se.target.value),children:[c.jsx("option",{value:"essay",children:"Essay or written reflection"}),c.jsx("option",{value:"logic-puzzle",children:"Logic puzzle or reasoning task"})]})]}),c.jsxs("div",{className:"journal-prompt",children:[c.jsx("strong",{children:"Sample prompt"}),c.jsx("p",{children:U0[H.type]})]}),c.jsx("label",{htmlFor:"journal-answer",children:"Your response"}),c.jsx("textarea",{id:"journal-answer",rows:"13",maxLength:"100000",spellCheck:!0,placeholder:"Write your explanation here. Show steps and reasoning for logic puzzles.",value:H.response,onChange:se=>be("response",se.target.value)}),c.jsxs("div",{className:"journal-writing-meta",children:[c.jsxs("span",{children:[ae," words"]}),c.jsxs("span",{children:[c.jsx(Ld,{size:13})," Autosaved in this browser"]})]}),c.jsxs("div",{className:"journal-integrity",children:[c.jsxs("label",{children:["AI-use declaration",c.jsxs("select",{value:H.aiUse,onChange:se=>be("aiUse",se.target.value),children:[c.jsx("option",{value:"",children:"Choose one"}),c.jsx("option",{value:"none",children:"I did not use AI-generated content"}),c.jsx("option",{value:"disclosed",children:"I used AI and will explain how"})]})]}),c.jsx("p",{className:"hint",children:"This is a declaration for review, not an automatic grade. Follow your teacher's classroom AI policy."}),H.aiUse==="disclosed"&&c.jsxs("label",{children:["Describe the AI assistance",c.jsx("textarea",{rows:"3",value:H.aiDetails,onChange:se=>be("aiDetails",se.target.value),placeholder:"Identify which parts involved AI assistance."})]})]}),c.jsxs("div",{className:"journal-actions",children:[c.jsxs("button",{type:"button",className:"btn",onClick:()=>{V("Draft saved in this browser.")},children:[c.jsx(Ld,{size:15})," Save draft"]}),c.jsxs("button",{type:"submit",className:"btn submit",children:[c.jsx(gh,{size:15})," Demo submit"]})]}),c.jsx("p",{role:"status",className:"journal-submit-status",children:F})]}),c.jsxs("div",{className:"journal-bottom-row",children:[c.jsx("p",{className:"hint",children:"No real submissions are sent. Each demo submission records a separate copy; drafts remain editable."}),c.jsxs("button",{type:"button",className:"btn",onClick:()=>z(se=>!se),children:[c.jsx(Gy,{size:15})," ",I?"Hide history":`Submission history (${J.length})`]})]}),I&&c.jsx("div",{className:"journal-history",children:J.length?J.map(se=>c.jsxs("details",{className:"journal-history-item",children:[c.jsxs("summary",{children:[c.jsx(lc,{size:16})," Submitted ",new Date(se.submittedAt).toLocaleString()," · ",se.type]}),c.jsx("div",{className:"journal-history-answer",children:se.response})]},se.id)):c.jsx("p",{className:"muted",children:"No submissions yet for this week."})})]})]})}const $0=`# Attendance Percentage

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
`,K0=`# Competition Leaderboard Ranks

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
`,G0=`# Confidence Pool Total

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
`,Y0=`# Count Matching Events

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
`,V0=`# Longest Winning Streak

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
`,J0=`# Format a Score Line

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
`,X0=`# Second Largest Distinct Value

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
`,Q0=`# Sum Positive Values

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
`,Z0=`# Count Pairs With Target Sum

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
`,ew=`# Temperature Alert

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
`,tw=`using System;

public static class Solution {
    public static int AttendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,nw=`public class Solution {
    public static int attendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,rw=`export function attendancePercent(present, total) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,iw=`def attendance_percent(present: int, total: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,sw=`using System;

public static class Solution {
    public static int[] CompetitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,ow=`public class Solution {
    public static int[] competitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,aw=`export function competitionRanks(scores) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,lw=`def competition_ranks(scores: list[int]) -> list[int]:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,uw=`using System;

public static class Solution {
    public static int ConfidenceTotal(bool[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,cw=`public class Solution {
    public static int confidenceTotal(boolean[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,dw=`export function confidenceTotal(correct, weights) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,pw=`def confidence_total(correct: list[bool], weights: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,hw=`using System;

public static class Solution {
    public static int CountMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,fw=`public class Solution {
    public static int countMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,mw=`export function countMatches(events, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,gw=`def count_matches(events: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,yw=`using System;

public static class Solution {
    public static int LongestWinStreak(bool[] wins) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,vw=`public class Solution {
    public static int longestWinStreak(boolean[] wins) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,xw=`export function longestWinStreak(wins) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,bw=`def longest_win_streak(wins: list[bool]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,ww=`using System;

public static class Solution {
    public static string ScoreLine(string name, int points) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,kw=`public class Solution {
    public static String scoreLine(String name, int points) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Sw=`export function scoreLine(name, points) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,_w=`def score_line(name: str, points: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Cw=`using System;

public static class Solution {
    public static int? SecondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Tw=`public class Solution {
    public static Integer secondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,jw=`export function secondLargestDistinct(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Nw=`def second_largest_distinct(numbers: list[int]) -> int | None:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Ew=`using System;

public static class Solution {
    public static int SumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Lw=`public class Solution {
    public static int sumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Pw=`export function sumPositives(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Aw=`def sum_positives(numbers: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Rw=`using System;

public static class Solution {
    public static int TargetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Iw=`public class Solution {
    public static int targetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Ow=`export function targetPairs(numbers, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Dw=`def target_pairs(numbers: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Mw=`using System;

public static class Solution {
    public static string TemperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,zw=`public class Solution {
    public static String temperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Fw=`export function temperatureAlert(degrees) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Ww=`def temperature_alert(degrees: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Hw="attendance-percent",Bw=[{input:[18,20],expected:90},{input:[2,3],expected:66},{input:[0,30],expected:0},{input:[7,7],expected:100}],Uw={challengeId:Hw,cases:Bw},qw="competition-ranks",$w=[{input:[[50,50,40,20,40]],expected:[1,1,3,5,3]},{input:[[7,12,9]],expected:[3,1,2]},{input:[[5,5,5]],expected:[1,1,1]},{input:[[]],expected:[]}],Kw={challengeId:qw,cases:$w},Gw="confidence-total",Yw=[{input:[[!0,!1,!0],[20,18,15]],expected:35},{input:[[!1,!1],[5,8]],expected:0},{input:[[],[]],expected:0}],Vw={challengeId:Gw,cases:Yw},Jw="count-matches",Xw=[{input:[[2,1,2,3,2],2],expected:3},{input:[[],7],expected:0},{input:[[3,4],5],expected:0}],Qw={challengeId:Jw,cases:Xw},Zw="longest-win-streak",ek=[{input:[[!0,!0,!1,!0,!0,!0]],expected:3},{input:[[!1,!1]],expected:0},{input:[[]],expected:0},{input:[[!0,!0]],expected:2}],tk={challengeId:Zw,cases:ek},nk="score-line",rk=[{input:["Avery",18],expected:"Avery: 18 points"},{input:["Jordan Lee",0],expected:"Jordan Lee: 0 points"},{input:["Mia",-2],expected:"Mia: -2 points"}],ik={challengeId:nk,cases:rk},sk="second-largest-distinct",ok=[{input:[[3,1,3,2]],expected:2},{input:[[5,5]],expected:null},{input:[[-10,-7,-7,-2]],expected:-7},{input:[[1]],expected:null}],ak={challengeId:sk,cases:ok},lk="sum-positives",uk=[{input:[[-3,6,0,2,-1]],expected:8},{input:[[-5,0,-1]],expected:0},{input:[[]],expected:0}],ck={challengeId:lk,cases:uk},dk="target-pairs",pk=[{input:[[1,3,2,2,4],4],expected:2},{input:[[2,2,2],4],expected:3},{input:[[1,2,3],9],expected:0},{input:[[],1],expected:0}],hk={challengeId:dk,cases:pk},fk="temperature-alert",mk=[{input:[32],expected:"Freeze"},{input:[90],expected:"Heat"},{input:[72],expected:"Normal"},{input:[-5],expected:"Freeze"}],gk={challengeId:fk,cases:mk},yk=["python","java","javascript","csharp"],vk=[{id:"temperature-alert",title:"Temperature Alert",summary:"Choose a status label based on a temperature reading.",difficulty:"Very Easy",points:5,tags:["conditionals","comparisons","functions"],prerequisites:["functions","conditionals"],suggestedCourses:["computer-science-1","game-programming","uil"],languages:["python","java","javascript","csharp"],path:"problems/temperature-alert"},{id:"count-matches",title:"Count Matching Events",summary:"Count how often a particular event code appears.",difficulty:"Easy",points:10,tags:["arrays","loops","comparisons"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/count-matches"},{id:"sum-positives",title:"Sum Positive Values",summary:"Add only the positive values in a data set.",difficulty:"Easy",points:10,tags:["arrays","loops","accumulators"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/sum-positives"},{id:"score-line",title:"Format a Score Line",summary:"Format a player score as a clear single line of text.",difficulty:"Easy",points:10,tags:["strings","formatting","functions"],prerequisites:["variables","strings","functions"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/score-line"},{id:"attendance-percent",title:"Attendance Percentage",summary:"Convert an attendance fraction into a whole-number percentage.",difficulty:"Easy",points:10,tags:["arithmetic","integer-division","functions"],prerequisites:["variables","functions","arithmetic"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/attendance-percent"},{id:"longest-win-streak",title:"Longest Winning Streak",summary:"Find the longest consecutive run of winning results.",difficulty:"Medium",points:15,tags:["arrays","loops","state"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/longest-win-streak"},{id:"confidence-total",title:"Confidence Pool Total",summary:"Compute the points earned from predictions.",difficulty:"Medium",points:15,tags:["arrays","loops","parallel-arrays"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/confidence-total"},{id:"second-largest-distinct",title:"Second Largest Distinct Value",summary:"Return the second-highest unique integer in a collection.",difficulty:"Medium",points:20,tags:["arrays","comparisons","distinct-values"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/second-largest-distinct"},{id:"target-pairs",title:"Count Pairs With Target Sum",summary:"Count pairs of positions that add to a target.",difficulty:"Hard",points:25,tags:["arrays","nested-loops","counting"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/target-pairs"},{id:"competition-ranks",title:"Competition Leaderboard Ranks",summary:"Assign ranks while handling tied scores and skipped positions.",difficulty:"Hard",points:25,tags:["arrays","sorting","ties"],prerequisites:["functions","loops","arrays","sorting"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/competition-ranks"}],dg={languages:yk,challenges:vk},xk=Object.assign({"../challenge-bank/problems/attendance-percent/problem.md":$0,"../challenge-bank/problems/competition-ranks/problem.md":K0,"../challenge-bank/problems/confidence-total/problem.md":G0,"../challenge-bank/problems/count-matches/problem.md":Y0,"../challenge-bank/problems/longest-win-streak/problem.md":V0,"../challenge-bank/problems/score-line/problem.md":J0,"../challenge-bank/problems/second-largest-distinct/problem.md":X0,"../challenge-bank/problems/sum-positives/problem.md":Q0,"../challenge-bank/problems/target-pairs/problem.md":Z0,"../challenge-bank/problems/temperature-alert/problem.md":ew}),bk=Object.assign({"../challenge-bank/problems/attendance-percent/starters/Solution.cs":tw,"../challenge-bank/problems/attendance-percent/starters/Solution.java":nw,"../challenge-bank/problems/attendance-percent/starters/javascript.js":rw,"../challenge-bank/problems/attendance-percent/starters/python.py":iw,"../challenge-bank/problems/competition-ranks/starters/Solution.cs":sw,"../challenge-bank/problems/competition-ranks/starters/Solution.java":ow,"../challenge-bank/problems/competition-ranks/starters/javascript.js":aw,"../challenge-bank/problems/competition-ranks/starters/python.py":lw,"../challenge-bank/problems/confidence-total/starters/Solution.cs":uw,"../challenge-bank/problems/confidence-total/starters/Solution.java":cw,"../challenge-bank/problems/confidence-total/starters/javascript.js":dw,"../challenge-bank/problems/confidence-total/starters/python.py":pw,"../challenge-bank/problems/count-matches/starters/Solution.cs":hw,"../challenge-bank/problems/count-matches/starters/Solution.java":fw,"../challenge-bank/problems/count-matches/starters/javascript.js":mw,"../challenge-bank/problems/count-matches/starters/python.py":gw,"../challenge-bank/problems/longest-win-streak/starters/Solution.cs":yw,"../challenge-bank/problems/longest-win-streak/starters/Solution.java":vw,"../challenge-bank/problems/longest-win-streak/starters/javascript.js":xw,"../challenge-bank/problems/longest-win-streak/starters/python.py":bw,"../challenge-bank/problems/score-line/starters/Solution.cs":ww,"../challenge-bank/problems/score-line/starters/Solution.java":kw,"../challenge-bank/problems/score-line/starters/javascript.js":Sw,"../challenge-bank/problems/score-line/starters/python.py":_w,"../challenge-bank/problems/second-largest-distinct/starters/Solution.cs":Cw,"../challenge-bank/problems/second-largest-distinct/starters/Solution.java":Tw,"../challenge-bank/problems/second-largest-distinct/starters/javascript.js":jw,"../challenge-bank/problems/second-largest-distinct/starters/python.py":Nw,"../challenge-bank/problems/sum-positives/starters/Solution.cs":Ew,"../challenge-bank/problems/sum-positives/starters/Solution.java":Lw,"../challenge-bank/problems/sum-positives/starters/javascript.js":Pw,"../challenge-bank/problems/sum-positives/starters/python.py":Aw,"../challenge-bank/problems/target-pairs/starters/Solution.cs":Rw,"../challenge-bank/problems/target-pairs/starters/Solution.java":Iw,"../challenge-bank/problems/target-pairs/starters/javascript.js":Ow,"../challenge-bank/problems/target-pairs/starters/python.py":Dw,"../challenge-bank/problems/temperature-alert/starters/Solution.cs":Mw,"../challenge-bank/problems/temperature-alert/starters/Solution.java":zw,"../challenge-bank/problems/temperature-alert/starters/javascript.js":Fw,"../challenge-bank/problems/temperature-alert/starters/python.py":Ww}),wk=Object.assign({"../challenge-bank/problems/attendance-percent/examples.json":Uw,"../challenge-bank/problems/competition-ranks/examples.json":Kw,"../challenge-bank/problems/confidence-total/examples.json":Vw,"../challenge-bank/problems/count-matches/examples.json":Qw,"../challenge-bank/problems/longest-win-streak/examples.json":tk,"../challenge-bank/problems/score-line/examples.json":ik,"../challenge-bank/problems/second-largest-distinct/examples.json":ak,"../challenge-bank/problems/sum-positives/examples.json":ck,"../challenge-bank/problems/target-pairs/examples.json":hk,"../challenge-bank/problems/temperature-alert/examples.json":gk}),Kd=dg.challenges,ch=dg.languages,pg={python:"Python",java:"Java",javascript:"JavaScript",csharp:"C#"},kk={python:"python.py",java:"Solution.java",javascript:"javascript.js",csharp:"Solution.cs"};function hg(l){return Kd.find(u=>u.id===l)||null}function Sk(l){return xk[`../challenge-bank/problems/${l}/problem.md`]??""}function _k(l,u){return bk[`../challenge-bank/problems/${l}/starters/${kk[u]}`]??""}function Ck(l){var u;return((u=wk[`../challenge-bank/problems/${l}/examples.json`])==null?void 0:u.cases)??[]}const Tk=[...new Set(Kd.flatMap(l=>l.tags))].sort((l,u)=>l.localeCompare(u)),jk=["Very Easy","Easy","Medium","Hard"];function Nk({query:l="",topic:u="all",difficulty:d="all",course:f="all",language:g="all"}={}){const v=l.trim().toLocaleLowerCase();return Kd.filter(k=>(!v||[k.title,k.summary,...k.tags].join(" ").toLowerCase().includes(v))&&(u==="all"||k.tags.includes(u))&&(d==="all"||k.difficulty===d)&&(f==="all"||k.suggestedCourses.includes(f))&&(g==="all"||k.languages.includes(g))).slice().sort((k,C)=>k.title.localeCompare(C.title))}function Ek(l,u=""){const d=String(u).toLowerCase();if(d==="lesson"||d==="challenge")return d;const f=String(l||"");return f.startsWith("lesson:")?"lesson":f.startsWith("challenge:")?"challenge":null}function Lk({lessons:l=[],challenges:u=[],grades:d=[],completedLessons:f=[],completedChallenges:g=[]}={}){const v={lessons:{available:l.length,completed:0,earned:0,possible:0,graded:0},challenges:{available:u.length,completed:0,earned:0,possible:0,graded:0}},k={lesson:new Set(f),challenge:new Set(g)},C={lesson:new Set(l.map(_=>typeof _=="string"?_:_.id)),challenge:new Set(u.map(_=>typeof _=="string"?_:_.id))},w=new Map;for(const _ of d){const N=String(_.activity_id||_.id||""),O=N.match(/^(lesson|challenge):/),L=O?N.slice(O[0].length):N,Y=Ek(N,_.activity_kind||_.kind)||(C.lesson.has(L)&&!C.challenge.has(L)?"lesson":C.challenge.has(L)&&!C.lesson.has(L)?"challenge":null);if(!Y)continue;const U=Y+":"+L,F=Number(_.earned??_.points??0),V=Number(_.possible??0);if(!Number.isFinite(F)||!Number.isFinite(V))continue;const I=w.get(U);(!I||F>I.earned)&&w.set(U,{kind:Y,id:L,earned:F,possible:V})}for(const _ of w.values()){const N=v[_.kind==="lesson"?"lessons":"challenges"];N.earned+=_.earned,N.possible+=_.possible,N.graded++,k[_.kind].add(_.id)}return v.lessons.completed=k.lesson.size,v.challenges.completed=k.challenge.size,v}function um(l,u){var v;const[d,...f]=l.split(":"),g=f.join(":");return d==="lesson"?ra(Sr(u),g):((v=hg(g))==null?void 0:v.title)||g}function Pk({grades:l=[],assignments:u=[],completedLessons:d=[],readOnlyMode:f=!1,weeklyPoints:g=[],accountStatus:v="disabled"}){const[k,C]=ve.useState("all"),w=k==="all"?l:l.filter(F=>F.courseId===k),_=eh(w),N=Lk({grades:w,completedLessons:k==="all"||k==="computer-science-1"?d:[]}),O=f?k==="all"||k==="computer-science-1"?g:[]:my(w),L=O[0],Y=rs.filter(F=>!f||F.id==="computer-science-1").map(F=>({...F,...eh(l.filter(V=>V.courseId===F.id))})),U=u.filter(F=>k==="all"||F.courseId===k).map(F=>({...F,status:zd(F.id,{assignments:u,grades:l,completedLessons:d})})).filter(F=>F.status.state==="assigned"||F.status.state==="overdue").sort((F,V)=>F.dueDate.localeCompare(V.dueDate));return c.jsxs("div",{className:"main-content grades-screen",children:[c.jsxs("header",{className:"grades-heading",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Your progress"}),c.jsx("h1",{children:"Grades"}),c.jsx("p",{children:f?"Verified Computer Science I scores and weekly improvements. Assignments are not yet connected here.":"See your earned points, weekly scores, and work still due."})]}),c.jsxs("label",{className:"grades-filter",children:["Course",c.jsxs("select",{value:k,onChange:F=>C(F.target.value),children:[c.jsx("option",{value:"all",children:"All courses"}),rs.map(F=>c.jsx("option",{value:F.id,children:F.label},F.id))]})]})]}),c.jsx("p",{className:"grades-preview-note",children:f?v==="signed-in"?"Verified Computer Science I results from your existing Playground account. Submissions and grading remain in the current Playground.":"Sign in on the current Playground to see your own verified results here. No changes are made from this test build.":"This preview does not display real student grades or assignments. Verified scores remain in the current Playground."}),c.jsx("div",{className:"grades-summary","aria-label":"Separate lesson and challenge progress",children:[["Lessons",N.lessons],["Challenges",N.challenges]].map(([F,V])=>c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(ia,{size:19}),c.jsx("span",{children:F}),c.jsxs("strong",{children:[V.completed," completed"]}),c.jsxs("p",{children:[V.graded," graded · ",V.earned," / ",V.possible," graded points"]})]},F))}),c.jsxs("div",{className:"grades-summary",children:[c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(My,{size:19}),c.jsx("span",{children:"Points earned"}),c.jsxs("strong",{children:[_.earned," ",c.jsxs("small",{children:["/ ",_.possible]})]}),c.jsx("p",{children:_.percent===null?"No graded work yet":`${_.percent}% of graded points`})]}),c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(Sm,{size:19}),c.jsx("span",{children:"Graded activities"}),c.jsx("strong",{children:_.count}),c.jsx("p",{children:"Combined graded activity count"})]}),c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(Dy,{size:19}),c.jsx("span",{children:"Most recent scored week"}),c.jsx("strong",{children:L?f?`+${L.earned}`:`${L.earned} / ${L.possible}`:"—"}),c.jsx("p",{children:L?`Week of ${sc(L.week)}`:"No scores yet"})]})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:f?"Weekly verified point increases":"Weekly scores"}),O.length?c.jsx("div",{className:"grades-weeks",children:O.map(F=>c.jsxs("div",{className:"grades-week",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:["Week of ",sc(F.week)]}),c.jsxs("small",{children:[F.count," scored ",F.count===1?"activity":"activities"]})]}),c.jsxs("div",{className:"grades-week-score",children:[c.jsx("strong",{children:f?`+${F.earned} pts`:`${F.earned} / ${F.possible} pts`}),!f&&c.jsx("progress",{value:F.earned,max:Math.max(F.possible,1),"aria-label":`Week of ${sc(F.week)}: ${F.earned} of ${F.possible} points`})]})]},F.week))}):c.jsx("p",{children:"No graded work in this selection."})]}),k==="all"&&c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"By course"}),c.jsx("div",{className:"grades-course-list",children:Y.map(F=>c.jsxs("div",{className:"grades-course-row","data-course":F.id,children:[c.jsx("span",{className:"grades-course-dot","aria-hidden":"true"}),c.jsx("strong",{children:F.label}),c.jsx("span",{children:F.count?`${F.earned} / ${F.possible} pts`:"No grades yet"})]},F.id))})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"Scored work"}),w.length?c.jsx("div",{className:"grades-entries",children:w.slice().sort((F,V)=>V.gradedAt.localeCompare(F.gradedAt)).map(F=>{var V;return c.jsxs("div",{className:"grades-entry",children:[c.jsxs("div",{children:[c.jsx("strong",{children:um(F.id,F.courseId)}),c.jsxs("small",{children:[c.jsx(ia,{size:13}),((V=Sr(F.courseId))==null?void 0:V.label)||F.courseId," · ",Ed(F.gradedAt)]})]}),c.jsxs("strong",{children:[F.earned," / ",F.possible," pts"]})]},F.id)})}):c.jsx("p",{children:"No scored lessons or challenges yet."})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"Still to complete"}),f?c.jsx("p",{children:"Assignment and due-date data will be connected in the next integration stage."}):U.length?c.jsx("div",{className:"grades-entries",children:U.map(F=>{var V;return c.jsxs("div",{className:"grades-entry",children:[c.jsxs("div",{children:[c.jsx("strong",{children:um(F.id,F.courseId)}),c.jsx("small",{children:((V=Sr(F.courseId))==null?void 0:V.label)||F.courseId})]}),c.jsxs("div",{className:"grades-due-meta",children:[c.jsx("span",{className:`assignment-status ${F.status.state}`,children:F.status.state==="overdue"?"Overdue":"Assigned"}),c.jsxs("small",{children:["Due ",Ed(F.dueDate)]})]})]},F.id)})}):c.jsx("p",{children:"Nothing outstanding in this selection."})]})]})}function Ak({filterCourse:l,onSelect:u,onBrowseCourse:d,grades:f=[]}){const[g,v]=ve.useState(""),[k,C]=ve.useState("all"),[w,_]=ve.useState("all"),[N,O]=ve.useState("all"),L=l||"all",Y=ve.useMemo(()=>Nk({query:g,difficulty:k,topic:w,language:N,course:L}),[g,k,w,N,L]),U=()=>{v(""),C("all"),_("all"),O("all"),d(null)};return c.jsxs("div",{className:"main-content challenge-bank-screen",children:[c.jsxs("header",{className:"challenge-bank-intro",children:[c.jsxs("div",{className:"eyebrow",children:[c.jsx(Bd,{size:15})," Shared programming practice"]}),c.jsx("h1",{children:"Challenge Bank"}),c.jsx("p",{children:"One problem library for every class. Choose Python, Java, JavaScript, or C# when solving—without duplicating problems across courses."}),c.jsxs("div",{className:"challenge-summary",children:[c.jsx("strong",{children:Kd.length})," original challenges · ",c.jsx("strong",{children:"4"})," languages · ",c.jsx("strong",{children:"1"})," shared library"]})]}),c.jsxs("section",{className:"challenge-filters surface-card","aria-label":"Filter challenges",children:[c.jsxs("div",{className:"filter-title",children:[c.jsx(Uy,{size:17}),c.jsx("strong",{children:"Find a challenge"}),c.jsxs("button",{type:"button",className:"filter-clear",onClick:U,children:[c.jsx(Ud,{size:14})," Clear filters"]})]}),c.jsxs("div",{className:"challenge-filter-grid",children:[c.jsxs("label",{className:"challenge-search-label",children:["Search",c.jsxs("span",{className:"challenge-search",children:[c.jsx(wm,{size:16}),c.jsx("input",{type:"search",value:g,placeholder:"Problem, skill, or topic",onChange:F=>v(F.target.value)})]})]}),c.jsxs("label",{children:["Course view",c.jsxs("select",{value:L,onChange:F=>d(F.target.value==="all"?null:F.target.value),children:[c.jsx("option",{value:"all",children:"All courses"}),rs.filter(F=>F.id!=="tsi-math").map(F=>c.jsx("option",{value:F.id,children:F.label},F.id))]})]}),c.jsxs("label",{children:["Difficulty",c.jsxs("select",{value:k,onChange:F=>C(F.target.value),children:[c.jsx("option",{value:"all",children:"Any difficulty"}),jk.map(F=>c.jsx("option",{value:F,children:F},F))]})]}),c.jsxs("label",{children:["Topic",c.jsxs("select",{value:w,onChange:F=>_(F.target.value),children:[c.jsx("option",{value:"all",children:"Any topic"}),Tk.map(F=>c.jsx("option",{value:F,children:F},F))]})]}),c.jsxs("label",{children:["Language",c.jsxs("select",{value:N,onChange:F=>O(F.target.value),children:[c.jsx("option",{value:"all",children:"Any language"}),ch.map(F=>c.jsx("option",{value:F,children:pg[F]},F))]})]})]}),c.jsx("p",{className:"challenge-filter-note",children:"Course matching is informational. Confirm students have learned the prerequisite skills before assigning problems."})]}),c.jsxs("div",{className:"challenge-results-heading",children:[c.jsxs("h2",{children:["Available challenges ",c.jsxs("span",{children:["(",Y.length,")"]})]}),c.jsx("span",{children:"Alphabetical order"})]}),Y.length?c.jsx("div",{className:"challenge-card-grid",children:Y.map(F=>c.jsxs("a",{className:"challenge-card surface-card",href:fm(F.id),onClick:V=>{V.button!==0||V.metaKey||V.ctrlKey||V.shiftKey||V.altKey||(V.preventDefault(),u(F.id))},children:[c.jsxs("div",{className:"challenge-card-top",children:[c.jsx("span",{className:"challenge-level level-"+F.difficulty.toLowerCase().replace(" ","-"),children:F.difficulty}),c.jsx("span",{className:"challenge-points",children:Sd("challenge:"+F.id,f)?`${Sd("challenge:"+F.id,f).earned} / ${Sd("challenge:"+F.id,f).possible} pts earned`:`${F.points} pts available`})]}),c.jsx("h3",{children:F.title}),c.jsx("p",{children:F.summary}),c.jsx("div",{className:"challenge-tags",children:F.tags.map(V=>c.jsx("span",{children:V},V))}),c.jsxs("div",{className:"challenge-course-tags",children:[F.suggestedCourses.slice(0,3).map(V=>{var I,z;return c.jsx("span",{title:(I=Sr(V))==null?void 0:I.label,children:((z=Sr(V))==null?void 0:z.short)||V},V)}),F.suggestedCourses.length>3&&c.jsxs("span",{children:["+",F.suggestedCourses.length-3]})]}),c.jsxs("span",{className:"challenge-open",children:["Open challenge ",c.jsx(th,{size:16})]})]},F.id))}):c.jsxs("div",{className:"challenge-empty surface-card",children:[c.jsx("h3",{children:"No matching challenges"}),c.jsx("p",{children:"Try a broader topic or clear the filters."}),c.jsx("button",{className:"btn",onClick:U,children:"Show all challenges"})]}),c.jsx("p",{className:"hint challenge-bottom-note",children:"Choose a problem, work through its examples, and compare your approach. Practice here does not count toward your grade."})]})}const Rk=(l,u)=>"designlab:challenge-code:"+l+":"+u;function Ik({challengeId:l,onBack:u}){const d=hg(l),[f,g]=Kn("designlab:challenge-language","python"),v=ch.includes(f)?f:"python",[k,C]=Kn("designlab:challenge-left-width",420),w=ve.useRef(null);if(!d)return c.jsxs("div",{className:"main-content",children:[c.jsx("h1",{children:"Challenge not found"}),c.jsx("button",{className:"btn",onClick:u,children:"Back to bank"})]});const _=_k(l,v),N={id:l,title:d.title,language:v,starter:_,kind:"Challenge",challenge:d.summary,points:d.points,console:"Run or Check executes published examples in your selected language.",storageKey:Rk(l,v),challengeExamples:Ck(l),isChallenge:!0,isPublished:!1},O=L=>{if(!w.current)return;const Y=w.current.getBoundingClientRect();C(Math.max(280,Math.min(Y.width-360,L.clientX-Y.left)))};return c.jsxs("div",{className:"challenge-detail-page",children:[c.jsxs("div",{className:"challenge-breadcrumb",children:[c.jsxs("button",{onClick:u,children:[c.jsx(ym,{size:16})," Challenge Bank"]}),c.jsx("span",{children:"/"}),c.jsx("span",{children:d.title})]}),c.jsxs("header",{className:"challenge-detail-heading surface-card",children:[c.jsxs("div",{className:"eyebrow",children:["Shared challenge · ",d.difficulty," · ",d.points," available points in the published contract"]}),c.jsx("h1",{children:d.title}),c.jsx("p",{children:d.summary}),c.jsx("p",{children:"Run and Check execute student code using only published examples. No submissions, student records, official points or hidden grading are connected here."}),c.jsxs("div",{className:"challenge-prerequisites",children:[c.jsx("strong",{children:"Prerequisites:"}),d.prerequisites.map(L=>c.jsx("span",{children:L},L))]})]}),c.jsxs("div",{className:"challenge-workspace",ref:w,style:{"--challenge-left":k+"px"},children:[c.jsxs("section",{className:"challenge-instructions",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx(Oy,{size:16})," Problem & examples"]}),c.jsx("span",{className:"challenge-points",children:"Practice only"})]}),c.jsx("div",{className:"markdown-preview challenge-markdown",dangerouslySetInnerHTML:{__html:el(Sk(l))}})]}),c.jsx(fc,{axis:"columns",onDrag:O}),c.jsxs("section",{className:"challenge-editor-panel",children:[c.jsxs("div",{className:"challenge-runtime-toolbar",children:[c.jsxs("label",{className:"challenge-language-selector",children:["Language",c.jsx("select",{"aria-label":"Solution language",value:v,onChange:L=>g(L.target.value),children:ch.map(L=>c.jsx("option",{value:L,children:pg[L]},L))})]}),c.jsx("span",{children:"Live public-example checks"})]}),c.jsx(Ym,{lessonId:"challenge:"+l+":"+v,task:N},l+":"+v)]})]})]})}function Ok(){var Q;const[l,u]=ve.useState(()=>gd()),[d,f]=Kn("designlab:course","computer-science-1"),[g,v]=Kn("designlab:theme","dark"),[k,C]=Kn("designlab:course-colors",{}),[w,_]=Kn("designlab:sidebar",!0);Kn("designlab:completed-lessons",[]);const[N,O]=ve.useState({status:"loading",grades:[],weeklyPoints:[]}),L=N.grades,Y=[],U=gy([],L),[F,V]=ve.useState({}),[I,z]=ve.useState({}),[B,H]=ve.useState(!0),J=ve.useMemo(()=>rs.filter(q=>q.id==="computer-science-1").map(q=>{if(q.id==="computer-science-1"||q.id==="test-prep")return q;if(q.id==="capstone")return{...q,units:[],lessons:[],lessonRecords:{},publishedContent:!1,projects:[]};const T=F[q.id];return T?{...q,...T,publishedContent:!0}:{...q,units:[],lessons:[],lessonRecords:{},projects:[],contentLoadingError:I[q.id]||null}}),[F,I]);ve.useEffect(()=>{let q=!0;return Cy().then(T=>{q&&O(T)}).catch(()=>{q&&O({status:"unavailable",grades:[],weeklyPoints:[],message:"Account lookup unavailable. No production records were changed."})}),()=>{q=!1}},[]),ve.useEffect(()=>{const q=new AbortController;let T=!0;return Promise.all([].map(async P=>{try{return{courseId:P,data:await _y(P,{signal:q.signal})}}catch($){return{courseId:P,error:String(($==null?void 0:$.message)||$)}}})).then(P=>{if(!T)return;const $={},M={};for(const Z of P)Z.data?$[Z.courseId]=Z.data:M[Z.courseId]=Z.error;V($),z(M),H(!1)}),()=>{T=!1,q.abort()}},[]),ve.useEffect(()=>{u(gd(window.location.pathname,J))},[J]),Kn("designlab:students",Zp);const[ce,ae]=Kn("designlab:journal-submissions",Gg);ve.useEffect(()=>{document.documentElement.dataset.theme=g},[g]),ve.useEffect(()=>{cy(k,rs)},[k]);function be(q,T){!rs.some(P=>P.id===q)||!Md(T)||C(P=>({...P&&typeof P=="object"?P:{},[q]:T.toUpperCase()}))}function Re(q){C(T=>{const P={...T&&typeof T=="object"?T:{}};return delete P[q],P})}ve.useEffect(()=>{var T;l.page==="course"&&f(l.courseId);const q=l.page==="course"?(T=Sr(l.courseId))==null?void 0:T.label:l.page==="admin"?"Admin Dashboard":l.page==="teacher"?"Teacher Dashboard":l.page==="grades"?"Grades":l.page==="journals"?"Weekly Journals":l.page==="challenges"?"Challenge Bank":l.page==="challenge"?"Coding Challenge":"Your Playgrounds";document.title=`${q||"Playground"} | Ms. Whitby's Playground — React Lab`},[l.page,l.courseId,f]),ve.useEffect(()=>{const q=()=>u(gd(window.location.pathname,J));return window.addEventListener("popstate",q),window.addEventListener("hashchange",q),()=>{window.removeEventListener("popstate",q),window.removeEventListener("hashchange",q)}},[J]);const xe=ve.useCallback(q=>{window.location.pathname!==q&&window.history.pushState({},"",q),u(gd(window.location.pathname,J)),window.scrollTo({top:0,behavior:"auto"})},[J]);function se(q,T){if(!q)return xe(Gl());f(q),xe(Fd(q,T))}function Ie(q,T,P=null){xe(mm(q,T,P))}function le(q){q==="teacher"?xe(lf()):q==="admin"?xe(Ey()):q==="journals"?xe(Ly()):q==="grades"?xe(Py()):q==="challenges"?xe(Kl()):q==="course"?se(l.page==="course"?l.courseId:d):xe(Gl())}const fe=l.page,A=l.courseId||d;return c.jsxs("div",{className:"app-shell",children:[c.jsx(iv,{sidebarOpen:w,onToggleSidebar:()=>_(!w),onHome:()=>xe(Gl()),theme:g,setTheme:v,readOnlyMode:Yu,accountLabel:(Q=N.user)==null?void 0:Q.handle}),c.jsxs("div",{className:ho("app-layout",!w&&"sidebar-closed"),children:[c.jsx(ov,{open:w,page:fe,courseId:A,lessonId:l.page==="course"?l.lessonId:null,setPage:le,openCourse:se,completedLessons:U,assignments:Y,grades:L,availableCourses:J,readOnlyMode:Yu,onOpenProject:Ie}),c.jsxs("main",{className:"main-panel",children:[c.jsxs("section",{className:"cs1-integration-notice",role:"status",children:[c.jsx("strong",{children:"Computer Science I · read-only integration test"}),c.jsx("span",{children:N.status==="loading"?"Checking your existing Playground session…":N.status==="signed-in"?"Signed in as "+N.user.handle+" · Your own verified grades are shown.":N.status==="signed-out"?"Sign in on the current Playground to view your existing results.":N.message||"Could not verify your existing session."}),c.jsx("a",{href:"/playground/",children:"Open current Playground"})]}),["home","course","grades","teacher","admin"].includes(fe)?fe==="home"?c.jsx(dv,{availableCourses:J,completedLessons:U,openCourse:se,openTeacher:()=>xe(lf()),openChallenges:()=>xe(Kl()),readOnlyMode:Yu}):fe==="course"?c.jsx(t0,{courseId:l.courseId,lessonId:l.lessonId,projectId:l.projectId,projectStepId:l.stepId,availableCourses:J,openCourse:se,openProject:Ie,openChallenges:q=>xe(Kl(q)),completedLessons:U,assignments:Y,grades:L,readOnlyMode:Yu,onToggleLessonComplete:void 0,courseColors:k,onSetCourseColor:be,onResetCourseColor:Re},l.courseId):fe==="grades"?c.jsx(Pk,{grades:L,assignments:Y,completedLessons:U,readOnlyMode:Yu,weeklyPoints:N.weeklyPoints,accountStatus:N.status}):fe==="challenges"?c.jsx(Ak,{grades:L,filterCourse:l.filterCourse,onSelect:q=>xe(fm(q)),onBrowseCourse:q=>xe(Kl(q))}):fe==="challenge"?c.jsx(Ik,{challengeId:l.challengeId,grades:L,onBack:()=>xe(Kl())},l.challengeId):fe==="journals"?c.jsx(q0,{submissions:ce,setSubmissions:ae}):fe==="teacher"?c.jsx(C0,{}):fe==="admin"?c.jsx(B0,{}):B?c.jsxs("div",{className:"main-content route-not-found",role:"status",children:[c.jsx("h1",{children:"Loading published course materials…"}),c.jsx("p",{children:"The lesson and project links will appear once the course catalogs are loaded."})]}):c.jsxs("div",{className:"main-content route-not-found",children:[c.jsx("div",{className:"eyebrow",children:"Link not found"}),c.jsx("h1",{children:"That playground page doesn't exist."}),c.jsx("p",{children:"Check the link or return to the list of playgrounds."}),c.jsx("button",{className:"btn primary",onClick:()=>xe(Gl()),children:"See all playgrounds"})]}):c.jsxs("div",{className:"main-content",children:[c.jsx("h1",{children:"Not enabled in this test build"}),c.jsx("p",{children:"Teacher tools, journals, challenges, and submissions remain in the current Playground until their permissions and data are integrated."}),c.jsx("a",{href:"/playground/",children:"Return to current Playground"})]})]})]}),c.jsx(av,{})]})}Hg.createRoot(document.getElementById("root")).render(c.jsx(Og.StrictMode,{children:c.jsx(Ok,{})}));
