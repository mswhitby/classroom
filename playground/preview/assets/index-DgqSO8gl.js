var Bm=Object.defineProperty;var Um=(l,c,d)=>c in l?Bm(l,c,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[c]=d;var on=(l,c,d)=>Um(l,typeof c!="symbol"?c+"":c,d);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))g(x);new MutationObserver(x=>{for(const b of x)if(b.type==="childList")for(const C of b.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&g(C)}).observe(document,{childList:!0,subtree:!0});function d(x){const b={};return x.integrity&&(b.integrity=x.integrity),x.referrerPolicy&&(b.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?b.credentials="include":x.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function g(x){if(x.ep)return;x.ep=!0;const b=d(x);fetch(x.href,b)}})();function Df(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var yp={exports:{}},$u={},vp={exports:{}},Lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh;function qm(){if(Eh)return Lt;Eh=1;var l=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),C=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),O=Symbol.iterator;function A(z){return z===null||typeof z!="object"?null:(z=O&&z[O]||z["@@iterator"],typeof z=="function"?z:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,H={};function ae(z,re,Ae){this.props=z,this.context=re,this.refs=H,this.updater=Ae||Y}ae.prototype.isReactComponent={},ae.prototype.setState=function(z,re){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,re,"setState")},ae.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function D(){}D.prototype=ae.prototype;function U(z,re,Ae){this.props=z,this.context=re,this.refs=H,this.updater=Ae||Y}var F=U.prototype=new D;F.constructor=U,ne(F,ae.prototype),F.isPureReactComponent=!0;var K=Array.isArray,V=Object.prototype.hasOwnProperty,ge={current:null},ue={key:!0,ref:!0,__self:!0,__source:!0};function we(z,re,Ae){var Ge,Ve={},ke=null,Re=null;if(re!=null)for(Ge in re.ref!==void 0&&(Re=re.ref),re.key!==void 0&&(ke=""+re.key),re)V.call(re,Ge)&&!ue.hasOwnProperty(Ge)&&(Ve[Ge]=re[Ge]);var He=arguments.length-2;if(He===1)Ve.children=Ae;else if(1<He){for(var Be=Array(He),tt=0;tt<He;tt++)Be[tt]=arguments[tt+2];Ve.children=Be}if(z&&z.defaultProps)for(Ge in He=z.defaultProps,He)Ve[Ge]===void 0&&(Ve[Ge]=He[Ge]);return{$$typeof:l,type:z,key:ke,ref:Re,props:Ve,_owner:ge.current}}function Ue(z,re){return{$$typeof:l,type:z.type,key:re,ref:z.ref,props:z.props,_owner:z._owner}}function Le(z){return typeof z=="object"&&z!==null&&z.$$typeof===l}function oe(z){var re={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Ae){return re[Ae]})}var Ce=/\/+/g;function se(z,re){return typeof z=="object"&&z!==null&&z.key!=null?oe(""+z.key):re.toString(36)}function ye(z,re,Ae,Ge,Ve){var ke=typeof z;(ke==="undefined"||ke==="boolean")&&(z=null);var Re=!1;if(z===null)Re=!0;else switch(ke){case"string":case"number":Re=!0;break;case"object":switch(z.$$typeof){case l:case c:Re=!0}}if(Re)return Re=z,Ve=Ve(Re),z=Ge===""?"."+se(Re,0):Ge,K(Ve)?(Ae="",z!=null&&(Ae=z.replace(Ce,"$&/")+"/"),ye(Ve,re,Ae,"",function(tt){return tt})):Ve!=null&&(Le(Ve)&&(Ve=Ue(Ve,Ae+(!Ve.key||Re&&Re.key===Ve.key?"":(""+Ve.key).replace(Ce,"$&/")+"/")+z)),re.push(Ve)),1;if(Re=0,Ge=Ge===""?".":Ge+":",K(z))for(var He=0;He<z.length;He++){ke=z[He];var Be=Ge+se(ke,He);Re+=ye(ke,re,Ae,Be,Ve)}else if(Be=A(z),typeof Be=="function")for(z=Be.call(z),He=0;!(ke=z.next()).done;)ke=ke.value,Be=Ge+se(ke,He++),Re+=ye(ke,re,Ae,Be,Ve);else if(ke==="object")throw re=String(z),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return Re}function j(z,re,Ae){if(z==null)return z;var Ge=[],Ve=0;return ye(z,Ge,"","",function(ke){return re.call(Ae,ke,Ve++)}),Ge}function X(z){if(z._status===-1){var re=z._result;re=re(),re.then(function(Ae){(z._status===0||z._status===-1)&&(z._status=1,z._result=Ae)},function(Ae){(z._status===0||z._status===-1)&&(z._status=2,z._result=Ae)}),z._status===-1&&(z._status=0,z._result=re)}if(z._status===1)return z._result.default;throw z._result}var q={current:null},T={transition:null},P={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:T,ReactCurrentOwner:ge};function G(){throw Error("act(...) is not supported in production builds of React.")}return Lt.Children={map:j,forEach:function(z,re,Ae){j(z,function(){re.apply(this,arguments)},Ae)},count:function(z){var re=0;return j(z,function(){re++}),re},toArray:function(z){return j(z,function(re){return re})||[]},only:function(z){if(!Le(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},Lt.Component=ae,Lt.Fragment=d,Lt.Profiler=x,Lt.PureComponent=U,Lt.StrictMode=g,Lt.Suspense=S,Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,Lt.act=G,Lt.cloneElement=function(z,re,Ae){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var Ge=ne({},z.props),Ve=z.key,ke=z.ref,Re=z._owner;if(re!=null){if(re.ref!==void 0&&(ke=re.ref,Re=ge.current),re.key!==void 0&&(Ve=""+re.key),z.type&&z.type.defaultProps)var He=z.type.defaultProps;for(Be in re)V.call(re,Be)&&!ue.hasOwnProperty(Be)&&(Ge[Be]=re[Be]===void 0&&He!==void 0?He[Be]:re[Be])}var Be=arguments.length-2;if(Be===1)Ge.children=Ae;else if(1<Be){He=Array(Be);for(var tt=0;tt<Be;tt++)He[tt]=arguments[tt+2];Ge.children=He}return{$$typeof:l,type:z.type,key:Ve,ref:ke,props:Ge,_owner:Re}},Lt.createContext=function(z){return z={$$typeof:C,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:b,_context:z},z.Consumer=z},Lt.createElement=we,Lt.createFactory=function(z){var re=we.bind(null,z);return re.type=z,re},Lt.createRef=function(){return{current:null}},Lt.forwardRef=function(z){return{$$typeof:N,render:z}},Lt.isValidElement=Le,Lt.lazy=function(z){return{$$typeof:R,_payload:{_status:-1,_result:z},_init:X}},Lt.memo=function(z,re){return{$$typeof:L,type:z,compare:re===void 0?null:re}},Lt.startTransition=function(z){var re=T.transition;T.transition={};try{z()}finally{T.transition=re}},Lt.unstable_act=G,Lt.useCallback=function(z,re){return q.current.useCallback(z,re)},Lt.useContext=function(z){return q.current.useContext(z)},Lt.useDebugValue=function(){},Lt.useDeferredValue=function(z){return q.current.useDeferredValue(z)},Lt.useEffect=function(z,re){return q.current.useEffect(z,re)},Lt.useId=function(){return q.current.useId()},Lt.useImperativeHandle=function(z,re,Ae){return q.current.useImperativeHandle(z,re,Ae)},Lt.useInsertionEffect=function(z,re){return q.current.useInsertionEffect(z,re)},Lt.useLayoutEffect=function(z,re){return q.current.useLayoutEffect(z,re)},Lt.useMemo=function(z,re){return q.current.useMemo(z,re)},Lt.useReducer=function(z,re,Ae){return q.current.useReducer(z,re,Ae)},Lt.useRef=function(z){return q.current.useRef(z)},Lt.useState=function(z){return q.current.useState(z)},Lt.useSyncExternalStore=function(z,re,Ae){return q.current.useSyncExternalStore(z,re,Ae)},Lt.useTransition=function(){return q.current.useTransition()},Lt.version="18.3.1",Lt}var Lh;function Gp(){return Lh||(Lh=1,vp.exports=qm()),vp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph;function $m(){if(Ph)return $u;Ph=1;var l=Gp(),c=Symbol.for("react.element"),d=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,x=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function C(N,S,L){var R,O={},A=null,Y=null;L!==void 0&&(A=""+L),S.key!==void 0&&(A=""+S.key),S.ref!==void 0&&(Y=S.ref);for(R in S)g.call(S,R)&&!b.hasOwnProperty(R)&&(O[R]=S[R]);if(N&&N.defaultProps)for(R in S=N.defaultProps,S)O[R]===void 0&&(O[R]=S[R]);return{$$typeof:c,type:N,key:A,ref:Y,props:O,_owner:x.current}}return $u.Fragment=d,$u.jsx=C,$u.jsxs=C,$u}var Ah;function Km(){return Ah||(Ah=1,yp.exports=$m()),yp.exports}var p=Km(),Oe=Gp();const Gm=Df(Oe);var od={},xp={exports:{}},ei={},bp={exports:{}},wp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh;function Ym(){return Rh||(Rh=1,(function(l){function c(T,P){var G=T.length;T.push(P);e:for(;0<G;){var z=G-1>>>1,re=T[z];if(0<x(re,P))T[z]=P,T[G]=re,G=z;else break e}}function d(T){return T.length===0?null:T[0]}function g(T){if(T.length===0)return null;var P=T[0],G=T.pop();if(G!==P){T[0]=G;e:for(var z=0,re=T.length,Ae=re>>>1;z<Ae;){var Ge=2*(z+1)-1,Ve=T[Ge],ke=Ge+1,Re=T[ke];if(0>x(Ve,G))ke<re&&0>x(Re,Ve)?(T[z]=Re,T[ke]=G,z=ke):(T[z]=Ve,T[Ge]=G,z=Ge);else if(ke<re&&0>x(Re,G))T[z]=Re,T[ke]=G,z=ke;else break e}}return P}function x(T,P){var G=T.sortIndex-P.sortIndex;return G!==0?G:T.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;l.unstable_now=function(){return b.now()}}else{var C=Date,N=C.now();l.unstable_now=function(){return C.now()-N}}var S=[],L=[],R=1,O=null,A=3,Y=!1,ne=!1,H=!1,ae=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(T){for(var P=d(L);P!==null;){if(P.callback===null)g(L);else if(P.startTime<=T)g(L),P.sortIndex=P.expirationTime,c(S,P);else break;P=d(L)}}function K(T){if(H=!1,F(T),!ne)if(d(S)!==null)ne=!0,X(V);else{var P=d(L);P!==null&&q(K,P.startTime-T)}}function V(T,P){ne=!1,H&&(H=!1,D(we),we=-1),Y=!0;var G=A;try{for(F(P),O=d(S);O!==null&&(!(O.expirationTime>P)||T&&!oe());){var z=O.callback;if(typeof z=="function"){O.callback=null,A=O.priorityLevel;var re=z(O.expirationTime<=P);P=l.unstable_now(),typeof re=="function"?O.callback=re:O===d(S)&&g(S),F(P)}else g(S);O=d(S)}if(O!==null)var Ae=!0;else{var Ge=d(L);Ge!==null&&q(K,Ge.startTime-P),Ae=!1}return Ae}finally{O=null,A=G,Y=!1}}var ge=!1,ue=null,we=-1,Ue=5,Le=-1;function oe(){return!(l.unstable_now()-Le<Ue)}function Ce(){if(ue!==null){var T=l.unstable_now();Le=T;var P=!0;try{P=ue(!0,T)}finally{P?se():(ge=!1,ue=null)}}else ge=!1}var se;if(typeof U=="function")se=function(){U(Ce)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,j=ye.port2;ye.port1.onmessage=Ce,se=function(){j.postMessage(null)}}else se=function(){ae(Ce,0)};function X(T){ue=T,ge||(ge=!0,se())}function q(T,P){we=ae(function(){T(l.unstable_now())},P)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(T){T.callback=null},l.unstable_continueExecution=function(){ne||Y||(ne=!0,X(V))},l.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<T?Math.floor(1e3/T):5},l.unstable_getCurrentPriorityLevel=function(){return A},l.unstable_getFirstCallbackNode=function(){return d(S)},l.unstable_next=function(T){switch(A){case 1:case 2:case 3:var P=3;break;default:P=A}var G=A;A=P;try{return T()}finally{A=G}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(T,P){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var G=A;A=T;try{return P()}finally{A=G}},l.unstable_scheduleCallback=function(T,P,G){var z=l.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?z+G:z):G=z,T){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=G+re,T={id:R++,callback:P,priorityLevel:T,startTime:G,expirationTime:re,sortIndex:-1},G>z?(T.sortIndex=G,c(L,T),d(S)===null&&T===d(L)&&(H?(D(we),we=-1):H=!0,q(K,G-z))):(T.sortIndex=re,c(S,T),ne||Y||(ne=!0,X(V))),T},l.unstable_shouldYield=oe,l.unstable_wrapCallback=function(T){var P=A;return function(){var G=A;A=P;try{return T.apply(this,arguments)}finally{A=G}}}})(wp)),wp}var Ih;function Vm(){return Ih||(Ih=1,bp.exports=Ym()),bp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function Jm(){if(Oh)return ei;Oh=1;var l=Gp(),c=Vm();function d(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g=new Set,x={};function b(t,r){C(t,r),C(t+"Capture",r)}function C(t,r){for(x[t]=r,t=0;t<r.length;t++)g.add(r[t])}var N=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R={},O={};function A(t){return S.call(O,t)?!0:S.call(R,t)?!1:L.test(t)?O[t]=!0:(R[t]=!0,!1)}function Y(t,r,a,u){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ne(t,r,a,u){if(r===null||typeof r>"u"||Y(t,r,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function H(t,r,a,u,f,y,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=y,this.removeEmptyString=E}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ae[t]=new H(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];ae[r]=new H(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){ae[t]=new H(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ae[t]=new H(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ae[t]=new H(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){ae[t]=new H(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){ae[t]=new H(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){ae[t]=new H(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){ae[t]=new H(t,5,!1,t.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(D,U);ae[r]=new H(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(D,U);ae[r]=new H(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(D,U);ae[r]=new H(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){ae[t]=new H(t,1,!1,t.toLowerCase(),null,!1,!1)}),ae.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){ae[t]=new H(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,r,a,u){var f=ae.hasOwnProperty(r)?ae[r]:null;(f!==null?f.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(ne(r,a,f,u)&&(a=null),u||f===null?A(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(r=f.attributeName,u=f.attributeNamespace,a===null?t.removeAttribute(r):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,u?t.setAttributeNS(u,r,a):t.setAttribute(r,a))))}var K=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),ge=Symbol.for("react.portal"),ue=Symbol.for("react.fragment"),we=Symbol.for("react.strict_mode"),Ue=Symbol.for("react.profiler"),Le=Symbol.for("react.provider"),oe=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),T=Symbol.iterator;function P(t){return t===null||typeof t!="object"?null:(t=T&&t[T]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,z;function re(t){if(z===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);z=r&&r[1]||""}return`
`+z+t}var Ae=!1;function Ge(t,r){if(!t||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(pe){var u=pe}Reflect.construct(t,[],r)}else{try{r.call()}catch(pe){u=pe}t.call(r.prototype)}else{try{throw Error()}catch(pe){u=pe}t()}}catch(pe){if(pe&&u&&typeof pe.stack=="string"){for(var f=pe.stack.split(`
`),y=u.stack.split(`
`),E=f.length-1,$=y.length-1;1<=E&&0<=$&&f[E]!==y[$];)$--;for(;1<=E&&0<=$;E--,$--)if(f[E]!==y[$]){if(E!==1||$!==1)do if(E--,$--,0>$||f[E]!==y[$]){var J=`
`+f[E].replace(" at new "," at ");return t.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",t.displayName)),J}while(1<=E&&0<=$);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?re(t):""}function Ve(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=Ge(t.type,!1),t;case 11:return t=Ge(t.type.render,!1),t;case 1:return t=Ge(t.type,!0),t;default:return""}}function ke(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ue:return"Fragment";case ge:return"Portal";case Ue:return"Profiler";case we:return"StrictMode";case se:return"Suspense";case ye:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case oe:return(t.displayName||"Context")+".Consumer";case Le:return(t._context.displayName||"Context")+".Provider";case Ce:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case j:return r=t.displayName||null,r!==null?r:ke(t.type)||"Memo";case X:r=t._payload,t=t._init;try{return ke(t(r))}catch{}}return null}function Re(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===we?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function He(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Be(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function tt(t){var r=Be(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),u=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,y=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,y.call(this,E)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function qe(t){t._valueTracker||(t._valueTracker=tt(t))}function Ht(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),u="";return t&&(u=Be(t)?t.checked?"true":"false":t.value),t=u,t!==a?(r.setValue(t),!0):!1}function Gt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function St(t,r){var a=r.checked;return G({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function vt(t,r){var a=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;a=He(r.value!=null?r.value:a),t._wrapperState={initialChecked:u,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Fe(t,r){r=r.checked,r!=null&&F(t,"checked",r,!1)}function rt(t,r){Fe(t,r);var a=He(r.value),u=r.type;if(a!=null)u==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?$t(t,r.type,a):r.hasOwnProperty("defaultValue")&&$t(t,r.type,He(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function et(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function $t(t,r,a){(r!=="number"||Gt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var $e=Array.isArray;function ht(t,r,a,u){if(t=t.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=r.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&u&&(t[a].defaultSelected=!0)}else{for(a=""+He(a),r=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function ie(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(d(91));return G({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Se(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(d(92));if($e(a)){if(1<a.length)throw Error(d(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:He(a)}}function me(t,r){var a=He(r.value),u=He(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),u!=null&&(t.defaultValue=""+u)}function wt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Je(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Je(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ye,yt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,u,f){MSApp.execUnsafeLocalFunction(function(){return t(r,a,u,f)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ye=Ye||document.createElement("div"),Ye.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ye.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function pt(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jn=["Webkit","ms","Moz","O"];Object.keys(fn).forEach(function(t){Jn.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),fn[r]=fn[t]})});function Cr(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||fn.hasOwnProperty(t)&&fn[t]?(""+r).trim():r+"px"}function Hr(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var u=a.indexOf("--")===0,f=Cr(a,r[a],u);a==="float"&&(a="cssFloat"),u?t.setProperty(a,f):t[a]=f}}var or=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vi(t,r){if(r){if(or[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(d(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(d(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(d(61))}if(r.style!=null&&typeof r.style!="object")throw Error(d(62))}}function xt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function it(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tr=null,Jt=null,It=null;function Ot(t){if(t=dn(t)){if(typeof Tr!="function")throw Error(d(280));var r=t.stateNode;r&&(r=gn(r),Tr(t.stateNode,t.type,r))}}function jn(t){Jt?It?It.push(t):It=[t]:Jt=t}function un(){if(Jt){var t=Jt,r=It;if(It=Jt=null,Ot(t),r)for(t=0;t<r.length;t++)Ot(r[t])}}function ar(t,r){return t(r)}function wn(){}var ni=!1;function In(t,r,a){if(ni)return t(r,a);ni=!0;try{return ar(t,r,a)}finally{ni=!1,(Jt!==null||It!==null)&&(wn(),un())}}function lr(t,r){var a=t.stateNode;if(a===null)return null;var u=gn(a);if(u===null)return null;a=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(d(231,r,typeof a));return a}var Br=!1;if(N)try{var En={};Object.defineProperty(En,"passive",{get:function(){Br=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Br=!1}function Nr(t,r,a,u,f,y,E,$,J){var pe=Array.prototype.slice.call(arguments,3);try{r.apply(a,pe)}catch(Pe){this.onError(Pe)}}var Xn=!1,ri=null,Ur=!1,qr=null,ur={onError:function(t){Xn=!0,ri=t}};function $r(t,r,a,u,f,y,E,$,J){Xn=!1,ri=null,Nr.apply(ur,arguments)}function Ls(t,r,a,u,f,y,E,$,J){if($r.apply(this,arguments),Xn){if(Xn){var pe=ri;Xn=!1,ri=null}else throw Error(d(198));Ur||(Ur=!0,qr=pe)}}function kn(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function mo(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Rr(t){if(kn(t)!==t)throw Error(d(188))}function Ir(t){var r=t.alternate;if(!r){if(r=kn(t),r===null)throw Error(d(188));return r!==t?null:t}for(var a=t,u=r;;){var f=a.return;if(f===null)break;var y=f.alternate;if(y===null){if(u=f.return,u!==null){a=u;continue}break}if(f.child===y.child){for(y=f.child;y;){if(y===a)return Rr(f),t;if(y===u)return Rr(f),r;y=y.sibling}throw Error(d(188))}if(a.return!==u.return)a=f,u=y;else{for(var E=!1,$=f.child;$;){if($===a){E=!0,a=f,u=y;break}if($===u){E=!0,u=f,a=y;break}$=$.sibling}if(!E){for($=y.child;$;){if($===a){E=!0,a=y,u=f;break}if($===u){E=!0,u=y,a=f;break}$=$.sibling}if(!E)throw Error(d(189))}}if(a.alternate!==u)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?t:r}function jr(t){return t=Ir(t),t!==null?Bt(t):null}function Bt(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Bt(t);if(r!==null)return r;t=t.sibling}return null}var Er=c.unstable_scheduleCallback,zi=c.unstable_cancelCallback,ii=c.unstable_shouldYield,xi=c.unstable_requestPaint,At=c.unstable_now,os=c.unstable_getCurrentPriorityLevel,bi=c.unstable_ImmediatePriority,Xt=c.unstable_UserBlockingPriority,Qe=c.unstable_NormalPriority,si=c.unstable_LowPriority,cr=c.unstable_IdlePriority,On=null,_=null;function W(t){if(_&&typeof _.onCommitFiberRoot=="function")try{_.onCommitFiberRoot(On,t,void 0,(t.current.flags&128)===128)}catch{}}var he=Math.clz32?Math.clz32:We,Te=Math.log,de=Math.LN2;function We(t){return t>>>=0,t===0?32:31-(Te(t)/de|0)|0}var Tt=64,en=4194304;function Sn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oi(t,r){var a=t.pendingLanes;if(a===0)return 0;var u=0,f=t.suspendedLanes,y=t.pingedLanes,E=a&268435455;if(E!==0){var $=E&~f;$!==0?u=Sn($):(y&=E,y!==0&&(u=Sn(y)))}else E=a&~f,E!==0?u=Sn(E):y!==0&&(u=Sn(y));if(u===0)return 0;if(r!==0&&r!==u&&(r&f)===0&&(f=u&-u,y=r&-r,f>=y||f===16&&(y&4194240)!==0))return r;if((u&4)!==0&&(u|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=u;0<r;)a=31-he(r),f=1<<a,u|=t[a],r&=~f;return u}function Xa(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(t,r){for(var a=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,y=t.pendingLanes;0<y;){var E=31-he(y),$=1<<E,J=f[E];J===-1?(($&a)===0||($&u)!==0)&&(f[E]=Xa($,r)):J<=r&&(t.expiredLanes|=$),y&=~$}}function go(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ra(){var t=Tt;return Tt<<=1,(Tt&4194240)===0&&(Tt=64),t}function Fi(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function $n(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-he(r),t[r]=a}function Ps(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-he(a),y=1<<f;r[f]=0,u[f]=-1,t[f]=-1,a&=~y}}function as(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var u=31-he(a),f=1<<u;f&r|t[u]&r&&(t[u]|=r),a&=~f}}var Et=0;function Wi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Kr,ai,dr,ia,ls,yo=!1,As=[],pr=null,Or=null,Mn=null,Rs=new Map,us=new Map,Mr=[],Is="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sa(t,r){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Rs.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(r.pointerId)}}function Hi(t,r,a,u,f,y){return t===null||t.nativeEvent!==y?(t={blockedOn:r,domEventName:a,eventSystemFlags:u,nativeEvent:y,targetContainers:[f]},r!==null&&(r=dn(r),r!==null&&ai(r)),t):(t.eventSystemFlags|=u,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function Os(t,r,a,u,f){switch(r){case"focusin":return pr=Hi(pr,t,r,a,u,f),!0;case"dragenter":return Or=Hi(Or,t,r,a,u,f),!0;case"mouseover":return Mn=Hi(Mn,t,r,a,u,f),!0;case"pointerover":var y=f.pointerId;return Rs.set(y,Hi(Rs.get(y)||null,t,r,a,u,f)),!0;case"gotpointercapture":return y=f.pointerId,us.set(y,Hi(us.get(y)||null,t,r,a,u,f)),!0}return!1}function vo(t){var r=Ln(t.target);if(r!==null){var a=kn(r);if(a!==null){if(r=a.tag,r===13){if(r=mo(a),r!==null){t.blockedOn=r,ls(t.priority,function(){dr(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _e(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=Kn(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var u=new a.constructor(a.type,a);Di=u,a.target.dispatchEvent(u),Di=null}else return r=dn(a),r!==null&&ai(r),t.blockedOn=a,!1;r.shift()}return!0}function I(t,r,a){_e(t)&&a.delete(r)}function Z(){yo=!1,pr!==null&&_e(pr)&&(pr=null),Or!==null&&_e(Or)&&(Or=null),Mn!==null&&_e(Mn)&&(Mn=null),Rs.forEach(I),us.forEach(I)}function xe(t,r){t.blockedOn===r&&(t.blockedOn=null,yo||(yo=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Z)))}function be(t){function r(f){return xe(f,t)}if(0<As.length){xe(As[0],t);for(var a=1;a<As.length;a++){var u=As[a];u.blockedOn===t&&(u.blockedOn=null)}}for(pr!==null&&xe(pr,t),Or!==null&&xe(Or,t),Mn!==null&&xe(Mn,t),Rs.forEach(r),us.forEach(r),a=0;a<Mr.length;a++)u=Mr[a],u.blockedOn===t&&(u.blockedOn=null);for(;0<Mr.length&&(a=Mr[0],a.blockedOn===null);)vo(a),a.blockedOn===null&&Mr.shift()}var nt=K.ReactCurrentBatchConfig,ct=!0;function _t(t,r,a,u){var f=Et,y=nt.transition;nt.transition=null;try{Et=1,hr(t,r,a,u)}finally{Et=f,nt.transition=y}}function mn(t,r,a,u){var f=Et,y=nt.transition;nt.transition=null;try{Et=4,hr(t,r,a,u)}finally{Et=f,nt.transition=y}}function hr(t,r,a,u){if(ct){var f=Kn(t,r,a,u);if(f===null)du(t,r,u,cn,a),sa(t,u);else if(Os(f,t,r,a,u))u.stopPropagation();else if(sa(t,u),r&4&&-1<Is.indexOf(t)){for(;f!==null;){var y=dn(f);if(y!==null&&Kr(y),y=Kn(t,r,a,u),y===null&&du(t,r,u,cn,a),y===f)break;f=y}f!==null&&u.stopPropagation()}else du(t,r,u,null,a)}}var cn=null;function Kn(t,r,a,u){if(cn=null,t=it(u),t=Ln(t),t!==null)if(r=kn(t),r===null)t=null;else if(a=r.tag,a===13){if(t=mo(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return cn=t,null}function wi(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(os()){case bi:return 1;case Xt:return 4;case Qe:case si:return 16;case cr:return 536870912;default:return 16}default:return 16}}var Rt=null,xo=null,Qa=null;function Za(){if(Qa)return Qa;var t,r=xo,a=r.length,u,f="value"in Rt?Rt.value:Rt.textContent,y=f.length;for(t=0;t<a&&r[t]===f[t];t++);var E=a-t;for(u=1;u<=E&&r[a-u]===f[y-u];u++);return Qa=f.slice(t,1<u?1-u:void 0)}function oa(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function li(){return!0}function el(){return!1}function _n(t){function r(a,u,f,y,E){this._reactName=a,this._targetInst=f,this.type=u,this.nativeEvent=y,this.target=E,this.currentTarget=null;for(var $ in t)t.hasOwnProperty($)&&(a=t[$],this[$]=a?a(y):y[$]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?li:el,this.isPropagationStopped=el,this}return G(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),r}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=_n(Bi),ki=G({},Bi,{view:0,detail:0}),Rd=_n(ki),Yl,Vl,la,ua=G({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(Yl=t.screenX-la.screenX,Vl=t.screenY-la.screenY):Vl=Yl=0,la=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:Vl}}),Jl=_n(ua),Id=G({},ua,{dataTransfer:0}),Od=_n(Id),Md=G({},ki,{relatedTarget:0}),Xl=_n(Md),ac=G({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Dd=_n(ac),lc=G({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tl=_n(lc),bo=G({},Bi,{data:0}),uc=_n(bo),zd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ca={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dn(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=ca[t])?!!r[t]:!1}function Ql(){return Dn}var cc=G({},ki,{key:function(t){if(t.key){var r=zd[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=oa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(t){return t.type==="keypress"?oa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),da=_n(cc),Wd=G({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zl=_n(Wd),Hd=G({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),eu=_n(Hd),dc=G({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bd=_n(dc),Ud=G({},ua,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pc=_n(Ud),hc=[9,13,27,32],tu=N&&"CompositionEvent"in window,Ui=null;N&&"documentMode"in document&&(Ui=document.documentMode);var qi=N&&"TextEvent"in window&&!Ui,pa=N&&(!tu||Ui&&8<Ui&&11>=Ui),nl=" ",nu=!1;function ui(t,r){switch(t){case"keyup":return hc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function qd(t,r){switch(t){case"compositionend":return cs(r);case"keypress":return r.which!==32?null:(nu=!0,nl);case"textInput":return t=r.data,t===nl&&nu?null:t;default:return null}}function fc(t,r){if(ds)return t==="compositionend"||!tu&&ui(t,r)?(t=Za(),Qa=xo=Rt=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return pa&&r.locale!=="ko"?null:r.data;default:return null}}var $d={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!$d[t.type]:r==="textarea"}function rl(t,r,a,u){jn(u),r=To(r,"onChange"),0<r.length&&(a=new aa("onChange","change",null,a,u),t.push({event:a,listeners:r}))}var Si=null,Lr=null;function mc(t){hl(t,0)}function ha(t){var r=Tn(t);if(Ht(r))return t}function Kd(t,r){if(t==="change")return r}var gc=!1;if(N){var iu;if(N){var il="oninput"in document;if(!il){var su=document.createElement("div");su.setAttribute("oninput","return;"),il=typeof su.oninput=="function"}iu=il}else iu=!1;gc=iu&&(!document.documentMode||9<document.documentMode)}function wo(){Si&&(Si.detachEvent("onpropertychange",ou),Lr=Si=null)}function ou(t){if(t.propertyName==="value"&&ha(Lr)){var r=[];rl(r,Lr,t,it(t)),In(mc,r)}}function yc(t,r,a){t==="focusin"?(wo(),Si=r,Lr=a,Si.attachEvent("onpropertychange",ou)):t==="focusout"&&wo()}function au(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ha(Lr)}function sl(t,r){if(t==="click")return ha(r)}function vc(t,r){if(t==="input"||t==="change")return ha(r)}function ol(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Cn=typeof Object.is=="function"?Object.is:ol;function ko(t,r){if(Cn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),u=Object.keys(r);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var f=a[u];if(!S.call(r,f)||!Cn(t[f],r[f]))return!1}return!0}function al(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ll(t,r){var a=al(t);t=0;for(var u;a;){if(a.nodeType===3){if(u=t+a.textContent.length,t<=r&&u>=r)return{node:a,offset:r-t};t=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=al(a)}}function lu(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?lu(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function uu(){for(var t=window,r=Gt();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Gt(t.document)}return r}function fa(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Gd(t){var r=uu(),a=t.focusedElem,u=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&lu(a.ownerDocument.documentElement,a)){if(u!==null&&fa(a)){if(r=u.start,t=u.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,y=Math.min(u.start,f);u=u.end===void 0?y:Math.min(u.end,f),!t.extend&&y>u&&(f=u,u=y,y=f),f=ll(a,y);var E=ll(a,u);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),y>u?(t.addRange(r),t.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yd=N&&"documentMode"in document&&11>=document.documentMode,So=null,$i=null,_i=null,ps=!1;function ul(t,r,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ps||So==null||So!==Gt(u)||(u=So,"selectionStart"in u&&fa(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),_i&&ko(_i,u)||(_i=u,u=To($i,"onSelect"),0<u.length&&(r=new aa("onSelect","select",null,r,a),t.push({event:r,listeners:u}),r.target=So)))}function _o(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Ms={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},ma={},hs={};N&&(hs=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Ci(t){if(ma[t])return ma[t];if(!Ms[t])return t;var r=Ms[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in hs)return ma[t]=r[a];return t}var er=Ci("animationend"),Ki=Ci("animationiteration"),Gi=Ci("animationstart"),ga=Ci("transitionend"),xc=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,r){xc.set(t,r),b(r,[t])}for(var cl=0;cl<cu.length;cl++){var ya=cu[cl],dl=ya.toLowerCase(),Vd=ya[0].toUpperCase()+ya.slice(1);Gr(dl,"on"+Vd)}Gr(er,"onAnimationEnd"),Gr(Ki,"onAnimationIteration"),Gr(Gi,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(ga,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function pl(t,r,a){var u=t.type||"unknown-event";t.currentTarget=a,Ls(u,r,void 0,t),t.currentTarget=null}function hl(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var u=t[a],f=u.event;u=u.listeners;e:{var y=void 0;if(r)for(var E=u.length-1;0<=E;E--){var $=u[E],J=$.instance,pe=$.currentTarget;if($=$.listener,J!==y&&f.isPropagationStopped())break e;pl(f,$,pe),y=J}else for(E=0;E<u.length;E++){if($=u[E],J=$.instance,pe=$.currentTarget,$=$.listener,J!==y&&f.isPropagationStopped())break e;pl(f,$,pe),y=J}}}if(Ur)throw t=qr,Ur=!1,qr=null,t}function Ut(t,r){var a=r[pu];a===void 0&&(a=r[pu]=new Set);var u=t+"__bubble";a.has(u)||(wc(r,t,2,!1),a.add(u))}function Co(t,r,a){var u=0;r&&(u|=4),wc(a,t,u,r)}var va="_reactListening"+Math.random().toString(36).slice(2);function fs(t){if(!t[va]){t[va]=!0,g.forEach(function(a){a!=="selectionchange"&&(bc.has(a)||Co(a,!1,t),Co(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[va]||(r[va]=!0,Co("selectionchange",!1,r))}}function wc(t,r,a,u){switch(wi(r)){case 1:var f=_t;break;case 4:f=mn;break;default:f=hr}a=f.bind(null,r,a,t),f=void 0,!Br||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(r,a,{capture:!0,passive:f}):t.addEventListener(r,a,!0):f!==void 0?t.addEventListener(r,a,{passive:f}):t.addEventListener(r,a,!1)}function du(t,r,a,u,f){var y=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var $=u.stateNode.containerInfo;if($===f||$.nodeType===8&&$.parentNode===f)break;if(E===4)for(E=u.return;E!==null;){var J=E.tag;if((J===3||J===4)&&(J=E.stateNode.containerInfo,J===f||J.nodeType===8&&J.parentNode===f))return;E=E.return}for(;$!==null;){if(E=Ln($),E===null)return;if(J=E.tag,J===5||J===6){u=y=E;continue e}$=$.parentNode}}u=u.return}In(function(){var pe=y,Pe=it(a),Ie=[];e:{var je=xc.get(t);if(je!==void 0){var Ze=aa,st=t;switch(t){case"keypress":if(oa(a)===0)break e;case"keydown":case"keyup":Ze=da;break;case"focusin":st="focus",Ze=Xl;break;case"focusout":st="blur",Ze=Xl;break;case"beforeblur":case"afterblur":Ze=Xl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ze=Jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ze=Od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ze=eu;break;case er:case Ki:case Gi:Ze=Dd;break;case ga:Ze=Bd;break;case"scroll":Ze=Rd;break;case"wheel":Ze=pc;break;case"copy":case"cut":case"paste":Ze=tl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ze=Zl}var ot=(r&4)!==0,qn=!ot&&t==="scroll",le=ot?je!==null?je+"Capture":null:je;ot=[];for(var ee=pe,ce;ee!==null;){ce=ee;var ze=ce.stateNode;if(ce.tag===5&&ze!==null&&(ce=ze,le!==null&&(ze=lr(ee,le),ze!=null&&ot.push(xa(ee,ze,ce)))),qn)break;ee=ee.return}0<ot.length&&(je=new Ze(je,st,null,a,Pe),Ie.push({event:je,listeners:ot}))}}if((r&7)===0){e:{if(je=t==="mouseover"||t==="pointerover",Ze=t==="mouseout"||t==="pointerout",je&&a!==Di&&(st=a.relatedTarget||a.fromElement)&&(Ln(st)||st[Ji]))break e;if((Ze||je)&&(je=Pe.window===Pe?Pe:(je=Pe.ownerDocument)?je.defaultView||je.parentWindow:window,Ze?(st=a.relatedTarget||a.toElement,Ze=pe,st=st?Ln(st):null,st!==null&&(qn=kn(st),st!==qn||st.tag!==5&&st.tag!==6)&&(st=null)):(Ze=null,st=pe),Ze!==st)){if(ot=Jl,ze="onMouseLeave",le="onMouseEnter",ee="mouse",(t==="pointerout"||t==="pointerover")&&(ot=Zl,ze="onPointerLeave",le="onPointerEnter",ee="pointer"),qn=Ze==null?je:Tn(Ze),ce=st==null?je:Tn(st),je=new ot(ze,ee+"leave",Ze,a,Pe),je.target=qn,je.relatedTarget=ce,ze=null,Ln(Pe)===pe&&(ot=new ot(le,ee+"enter",st,a,Pe),ot.target=ce,ot.relatedTarget=qn,ze=ot),qn=ze,Ze&&st)t:{for(ot=Ze,le=st,ee=0,ce=ot;ce;ce=ms(ce))ee++;for(ce=0,ze=le;ze;ze=ms(ze))ce++;for(;0<ee-ce;)ot=ms(ot),ee--;for(;0<ce-ee;)le=ms(le),ce--;for(;ee--;){if(ot===le||le!==null&&ot===le.alternate)break t;ot=ms(ot),le=ms(le)}ot=null}else ot=null;Ze!==null&&zs(Ie,je,Ze,ot,!1),st!==null&&qn!==null&&zs(Ie,qn,st,ot,!0)}}e:{if(je=pe?Tn(pe):window,Ze=je.nodeName&&je.nodeName.toLowerCase(),Ze==="select"||Ze==="input"&&je.type==="file")var ut=Kd;else if(ru(je))if(gc)ut=vc;else{ut=au;var ft=yc}else(Ze=je.nodeName)&&Ze.toLowerCase()==="input"&&(je.type==="checkbox"||je.type==="radio")&&(ut=sl);if(ut&&(ut=ut(t,pe))){rl(Ie,ut,a,Pe);break e}ft&&ft(t,je,pe),t==="focusout"&&(ft=je._wrapperState)&&ft.controlled&&je.type==="number"&&$t(je,"number",je.value)}switch(ft=pe?Tn(pe):window,t){case"focusin":(ru(ft)||ft.contentEditable==="true")&&(So=ft,$i=pe,_i=null);break;case"focusout":_i=$i=So=null;break;case"mousedown":ps=!0;break;case"contextmenu":case"mouseup":case"dragend":ps=!1,ul(Ie,a,Pe);break;case"selectionchange":if(Yd)break;case"keydown":case"keyup":ul(Ie,a,Pe)}var mt;if(tu)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else ds?ui(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(pa&&a.locale!=="ko"&&(ds||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&ds&&(mt=Za()):(Rt=Pe,xo="value"in Rt?Rt.value:Rt.textContent,ds=!0)),ft=To(pe,bt),0<ft.length&&(bt=new uc(bt,t,null,a,Pe),Ie.push({event:bt,listeners:ft}),mt?bt.data=mt:(mt=cs(a),mt!==null&&(bt.data=mt)))),(mt=qi?qd(t,a):fc(t,a))&&(pe=To(pe,"onBeforeInput"),0<pe.length&&(Pe=new uc("onBeforeInput","beforeinput",null,a,Pe),Ie.push({event:Pe,listeners:pe}),Pe.data=mt))}hl(Ie,r)})}function xa(t,r,a){return{instance:t,listener:r,currentTarget:a}}function To(t,r){for(var a=r+"Capture",u=[];t!==null;){var f=t,y=f.stateNode;f.tag===5&&y!==null&&(f=y,y=lr(t,a),y!=null&&u.unshift(xa(t,y,f)),y=lr(t,r),y!=null&&u.push(xa(t,y,f))),t=t.return}return u}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zs(t,r,a,u,f){for(var y=r._reactName,E=[];a!==null&&a!==u;){var $=a,J=$.alternate,pe=$.stateNode;if(J!==null&&J===u)break;$.tag===5&&pe!==null&&($=pe,f?(J=lr(a,y),J!=null&&E.unshift(xa(a,J,$))):f||(J=lr(a,y),J!=null&&E.push(xa(a,J,$)))),a=a.return}E.length!==0&&t.push({event:r,listeners:E})}var ba=/\r\n?/g,Jd=/\u0000|\uFFFD/g;function wa(t){return(typeof t=="string"?t:""+t).replace(ba,`
`).replace(Jd,"")}function ka(t,r,a){if(r=wa(r),wa(t)!==r&&a)throw Error(d(425))}function gs(){}var fl=null,Yi=null;function Fs(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,Sa=typeof clearTimeout=="function"?clearTimeout:void 0,Ws=typeof Promise=="function"?Promise:void 0,kc=typeof queueMicrotask=="function"?queueMicrotask:typeof Ws<"u"?function(t){return Ws.resolve(null).then(t).catch(Sc)}:Vi;function Sc(t){setTimeout(function(){throw t})}function ml(t,r){var a=r,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(u===0){t.removeChild(f),be(r);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=f}while(a);be(r)}function ys(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function vs(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Yr,_a="__reactProps$"+Yr,Ji="__reactContainer$"+Yr,pu="__reactEvents$"+Yr,Xd="__reactListeners$"+Yr,Qd="__reactHandles$"+Yr;function Ln(t){var r=t[Ti];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Ji]||a[Ti]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=vs(t);t!==null;){if(a=t[Ti])return a;t=vs(t)}return r}t=a,a=t.parentNode}return null}function dn(t){return t=t[Ti]||t[Ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Tn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(d(33))}function gn(t){return t[_a]||null}var Hs=[],No=-1;function ci(t){return{current:t}}function tn(t){0>No||(t.current=Hs[No],Hs[No]=null,No--)}function Qt(t,r){No++,Hs[No]=t.current,t.current=r}var xs={},Gn=ci(xs),fr=ci(!1),Xi=xs;function jo(t,r){var a=t.type.contextTypes;if(!a)return xs;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var f={},y;for(y in a)f[y]=r[y];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function tr(t){return t=t.childContextTypes,t!=null}function Eo(){tn(fr),tn(Gn)}function hu(t,r,a){if(Gn.current!==xs)throw Error(d(168));Qt(Gn,r),Qt(fr,a)}function fu(t,r,a){var u=t.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var f in u)if(!(f in r))throw Error(d(108,Re(t)||"Unknown",f));return G({},a,u)}function Lo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xs,Xi=Gn.current,Qt(Gn,t),Qt(fr,fr.current),!0}function mu(t,r,a){var u=t.stateNode;if(!u)throw Error(d(169));a?(t=fu(t,r,Xi),u.__reactInternalMemoizedMergedChildContext=t,tn(fr),tn(Gn),Qt(Gn,t)):tn(fr),Qt(fr,a)}var Dr=null,gl=!1,Po=!1;function Ni(t){Dr===null?Dr=[t]:Dr.push(t)}function _c(t){gl=!0,Ni(t)}function bs(){if(!Po&&Dr!==null){Po=!0;var t=0,r=Et;try{var a=Dr;for(Et=1;t<a.length;t++){var u=a[t];do u=u(!0);while(u!==null)}Dr=null,gl=!1}catch(f){throw Dr!==null&&(Dr=Dr.slice(t+1)),Er(bi,bs),f}finally{Et=r,Po=!1}}return null}var Bs=[],Yn=0,Pt=null,Pr=0,zn=[],Fn=0,ws=null,di=1,ji="";function Us(t,r){Bs[Yn++]=Pr,Bs[Yn++]=Pt,Pt=t,Pr=r}function yl(t,r,a){zn[Fn++]=di,zn[Fn++]=ji,zn[Fn++]=ws,ws=t;var u=di;t=ji;var f=32-he(u)-1;u&=~(1<<f),a+=1;var y=32-he(r)+f;if(30<y){var E=f-f%5;y=(u&(1<<E)-1).toString(32),u>>=E,f-=E,di=1<<32-he(r)+f|a<<f|u,ji=y+t}else di=1<<y|a<<f|u,ji=t}function qs(t){t.return!==null&&(Us(t,1),yl(t,1,0))}function vl(t){for(;t===Pt;)Pt=Bs[--Yn],Bs[Yn]=null,Pr=Bs[--Yn],Bs[Yn]=null;for(;t===ws;)ws=zn[--Fn],zn[Fn]=null,ji=zn[--Fn],zn[Fn]=null,di=zn[--Fn],zn[Fn]=null}var mr=null,Pn=null,nn=!1,Vr=null;function Cc(t,r){var a=Oi(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function Ca(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,mr=t,Pn=ys(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,mr=t,Pn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ws!==null?{id:di,overflow:ji}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Oi(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,mr=t,Pn=null,!0):!1;default:return!1}}function Ta(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xl(t){if(nn){var r=Pn;if(r){var a=r;if(!Ca(t,r)){if(Ta(t))throw Error(d(418));r=ys(a.nextSibling);var u=mr;r&&Ca(t,r)?Cc(u,a):(t.flags=t.flags&-4097|2,nn=!1,mr=t)}}else{if(Ta(t))throw Error(d(418));t.flags=t.flags&-4097|2,nn=!1,mr=t}}}function Tc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mr=t}function Na(t){if(t!==mr)return!1;if(!nn)return Tc(t),nn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Fs(t.type,t.memoizedProps)),r&&(r=Pn)){if(Ta(t))throw Nc(),Error(d(418));for(;r;)Cc(t,r),r=ys(r.nextSibling)}if(Tc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){Pn=ys(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}Pn=null}}else Pn=mr?ys(t.stateNode.nextSibling):null;return!0}function Nc(){for(var t=Pn;t;)t=ys(t.nextSibling)}function Ao(){Pn=mr=null,nn=!1}function Ro(t){Vr===null?Vr=[t]:Vr.push(t)}var jc=K.ReactCurrentBatchConfig;function ja(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(d(309));var u=a.stateNode}if(!u)throw Error(d(147,t));var f=u,y=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===y?r.ref:(r=function(E){var $=f.refs;E===null?delete $[y]:$[y]=E},r._stringRef=y,r)}if(typeof t!="string")throw Error(d(284));if(!a._owner)throw Error(d(290,t))}return t}function bl(t,r){throw t=Object.prototype.toString.call(r),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function gu(t){var r=t._init;return r(t._payload)}function $s(t){function r(le,ee){if(t){var ce=le.deletions;ce===null?(le.deletions=[ee],le.flags|=16):ce.push(ee)}}function a(le,ee){if(!t)return null;for(;ee!==null;)r(le,ee),ee=ee.sibling;return null}function u(le,ee){for(le=new Map;ee!==null;)ee.key!==null?le.set(ee.key,ee):le.set(ee.index,ee),ee=ee.sibling;return le}function f(le,ee){return le=Xo(le,ee),le.index=0,le.sibling=null,le}function y(le,ee,ce){return le.index=ce,t?(ce=le.alternate,ce!==null?(ce=ce.index,ce<ee?(le.flags|=2,ee):ce):(le.flags|=2,ee)):(le.flags|=1048576,ee)}function E(le){return t&&le.alternate===null&&(le.flags|=2),le}function $(le,ee,ce,ze){return ee===null||ee.tag!==6?(ee=dp(ce,le.mode,ze),ee.return=le,ee):(ee=f(ee,ce),ee.return=le,ee)}function J(le,ee,ce,ze){var ut=ce.type;return ut===ue?Pe(le,ee,ce.props.children,ze,ce.key):ee!==null&&(ee.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===X&&gu(ut)===ee.type)?(ze=f(ee,ce.props),ze.ref=ja(le,ee,ce),ze.return=le,ze):(ze=Qc(ce.type,ce.key,ce.props,null,le.mode,ze),ze.ref=ja(le,ee,ce),ze.return=le,ze)}function pe(le,ee,ce,ze){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==ce.containerInfo||ee.stateNode.implementation!==ce.implementation?(ee=pp(ce,le.mode,ze),ee.return=le,ee):(ee=f(ee,ce.children||[]),ee.return=le,ee)}function Pe(le,ee,ce,ze,ut){return ee===null||ee.tag!==7?(ee=$a(ce,le.mode,ze,ut),ee.return=le,ee):(ee=f(ee,ce),ee.return=le,ee)}function Ie(le,ee,ce){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return ee=dp(""+ee,le.mode,ce),ee.return=le,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case V:return ce=Qc(ee.type,ee.key,ee.props,null,le.mode,ce),ce.ref=ja(le,null,ee),ce.return=le,ce;case ge:return ee=pp(ee,le.mode,ce),ee.return=le,ee;case X:var ze=ee._init;return Ie(le,ze(ee._payload),ce)}if($e(ee)||P(ee))return ee=$a(ee,le.mode,ce,null),ee.return=le,ee;bl(le,ee)}return null}function je(le,ee,ce,ze){var ut=ee!==null?ee.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return ut!==null?null:$(le,ee,""+ce,ze);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case V:return ce.key===ut?J(le,ee,ce,ze):null;case ge:return ce.key===ut?pe(le,ee,ce,ze):null;case X:return ut=ce._init,je(le,ee,ut(ce._payload),ze)}if($e(ce)||P(ce))return ut!==null?null:Pe(le,ee,ce,ze,null);bl(le,ce)}return null}function Ze(le,ee,ce,ze,ut){if(typeof ze=="string"&&ze!==""||typeof ze=="number")return le=le.get(ce)||null,$(ee,le,""+ze,ut);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case V:return le=le.get(ze.key===null?ce:ze.key)||null,J(ee,le,ze,ut);case ge:return le=le.get(ze.key===null?ce:ze.key)||null,pe(ee,le,ze,ut);case X:var ft=ze._init;return Ze(le,ee,ce,ft(ze._payload),ut)}if($e(ze)||P(ze))return le=le.get(ce)||null,Pe(ee,le,ze,ut,null);bl(ee,ze)}return null}function st(le,ee,ce,ze){for(var ut=null,ft=null,mt=ee,bt=ee=0,ir=null;mt!==null&&bt<ce.length;bt++){mt.index>bt?(ir=mt,mt=null):ir=mt.sibling;var qt=je(le,mt,ce[bt],ze);if(qt===null){mt===null&&(mt=ir);break}t&&mt&&qt.alternate===null&&r(le,mt),ee=y(qt,ee,bt),ft===null?ut=qt:ft.sibling=qt,ft=qt,mt=ir}if(bt===ce.length)return a(le,mt),nn&&Us(le,bt),ut;if(mt===null){for(;bt<ce.length;bt++)mt=Ie(le,ce[bt],ze),mt!==null&&(ee=y(mt,ee,bt),ft===null?ut=mt:ft.sibling=mt,ft=mt);return nn&&Us(le,bt),ut}for(mt=u(le,mt);bt<ce.length;bt++)ir=Ze(mt,le,bt,ce[bt],ze),ir!==null&&(t&&ir.alternate!==null&&mt.delete(ir.key===null?bt:ir.key),ee=y(ir,ee,bt),ft===null?ut=ir:ft.sibling=ir,ft=ir);return t&&mt.forEach(function(Qo){return r(le,Qo)}),nn&&Us(le,bt),ut}function ot(le,ee,ce,ze){var ut=P(ce);if(typeof ut!="function")throw Error(d(150));if(ce=ut.call(ce),ce==null)throw Error(d(151));for(var ft=ut=null,mt=ee,bt=ee=0,ir=null,qt=ce.next();mt!==null&&!qt.done;bt++,qt=ce.next()){mt.index>bt?(ir=mt,mt=null):ir=mt.sibling;var Qo=je(le,mt,qt.value,ze);if(Qo===null){mt===null&&(mt=ir);break}t&&mt&&Qo.alternate===null&&r(le,mt),ee=y(Qo,ee,bt),ft===null?ut=Qo:ft.sibling=Qo,ft=Qo,mt=ir}if(qt.done)return a(le,mt),nn&&Us(le,bt),ut;if(mt===null){for(;!qt.done;bt++,qt=ce.next())qt=Ie(le,qt.value,ze),qt!==null&&(ee=y(qt,ee,bt),ft===null?ut=qt:ft.sibling=qt,ft=qt);return nn&&Us(le,bt),ut}for(mt=u(le,mt);!qt.done;bt++,qt=ce.next())qt=Ze(mt,le,bt,qt.value,ze),qt!==null&&(t&&qt.alternate!==null&&mt.delete(qt.key===null?bt:qt.key),ee=y(qt,ee,bt),ft===null?ut=qt:ft.sibling=qt,ft=qt);return t&&mt.forEach(function(Hm){return r(le,Hm)}),nn&&Us(le,bt),ut}function qn(le,ee,ce,ze){if(typeof ce=="object"&&ce!==null&&ce.type===ue&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case V:e:{for(var ut=ce.key,ft=ee;ft!==null;){if(ft.key===ut){if(ut=ce.type,ut===ue){if(ft.tag===7){a(le,ft.sibling),ee=f(ft,ce.props.children),ee.return=le,le=ee;break e}}else if(ft.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===X&&gu(ut)===ft.type){a(le,ft.sibling),ee=f(ft,ce.props),ee.ref=ja(le,ft,ce),ee.return=le,le=ee;break e}a(le,ft);break}else r(le,ft);ft=ft.sibling}ce.type===ue?(ee=$a(ce.props.children,le.mode,ze,ce.key),ee.return=le,le=ee):(ze=Qc(ce.type,ce.key,ce.props,null,le.mode,ze),ze.ref=ja(le,ee,ce),ze.return=le,le=ze)}return E(le);case ge:e:{for(ft=ce.key;ee!==null;){if(ee.key===ft)if(ee.tag===4&&ee.stateNode.containerInfo===ce.containerInfo&&ee.stateNode.implementation===ce.implementation){a(le,ee.sibling),ee=f(ee,ce.children||[]),ee.return=le,le=ee;break e}else{a(le,ee);break}else r(le,ee);ee=ee.sibling}ee=pp(ce,le.mode,ze),ee.return=le,le=ee}return E(le);case X:return ft=ce._init,qn(le,ee,ft(ce._payload),ze)}if($e(ce))return st(le,ee,ce,ze);if(P(ce))return ot(le,ee,ce,ze);bl(le,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,ee!==null&&ee.tag===6?(a(le,ee.sibling),ee=f(ee,ce),ee.return=le,le=ee):(a(le,ee),ee=dp(ce,le.mode,ze),ee.return=le,le=ee),E(le)):a(le,ee)}return qn}var ks=$s(!0),Ea=$s(!1),La=ci(null),Io=null,Ks=null,yu=null;function wl(){yu=Ks=Io=null}function Wn(t){var r=La.current;tn(La),t._currentValue=r}function Oo(t,r,a){for(;t!==null;){var u=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),t===a)break;t=t.return}}function Gs(t,r){Io=t,yu=Ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Zn=!0),t.firstContext=null)}function zr(t){var r=t._currentValue;if(yu!==t)if(t={context:t,memoizedValue:r,next:null},Ks===null){if(Io===null)throw Error(d(308));Ks=t,Io.dependencies={lanes:0,firstContext:t}}else Ks=Ks.next=t;return r}var Ss=null;function _s(t){Ss===null?Ss=[t]:Ss.push(t)}function Pa(t,r,a,u){var f=r.interleaved;return f===null?(a.next=a,_s(r)):(a.next=f.next,f.next=a),r.interleaved=a,Ei(t,u)}function Ei(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Qi=!1;function kl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ys(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function pi(t,r,a){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(dt&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,Ei(t,a)}return f=u.interleaved,f===null?(r.next=r,_s(u)):(r.next=f.next,f.next=r),u.interleaved=r,Ei(t,a)}function Aa(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var u=r.lanes;u&=t.pendingLanes,a|=u,r.lanes=a,as(t,a)}}function Mo(t,r){var a=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var f=null,y=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};y===null?f=y=E:y=y.next=E,a=a.next}while(a!==null);y===null?f=y=r:y=y.next=r}else f=y=r;a={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:y,shared:u.shared,effects:u.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function Sl(t,r,a,u){var f=t.updateQueue;Qi=!1;var y=f.firstBaseUpdate,E=f.lastBaseUpdate,$=f.shared.pending;if($!==null){f.shared.pending=null;var J=$,pe=J.next;J.next=null,E===null?y=pe:E.next=pe,E=J;var Pe=t.alternate;Pe!==null&&(Pe=Pe.updateQueue,$=Pe.lastBaseUpdate,$!==E&&($===null?Pe.firstBaseUpdate=pe:$.next=pe,Pe.lastBaseUpdate=J))}if(y!==null){var Ie=f.baseState;E=0,Pe=pe=J=null,$=y;do{var je=$.lane,Ze=$.eventTime;if((u&je)===je){Pe!==null&&(Pe=Pe.next={eventTime:Ze,lane:0,tag:$.tag,payload:$.payload,callback:$.callback,next:null});e:{var st=t,ot=$;switch(je=r,Ze=a,ot.tag){case 1:if(st=ot.payload,typeof st=="function"){Ie=st.call(Ze,Ie,je);break e}Ie=st;break e;case 3:st.flags=st.flags&-65537|128;case 0:if(st=ot.payload,je=typeof st=="function"?st.call(Ze,Ie,je):st,je==null)break e;Ie=G({},Ie,je);break e;case 2:Qi=!0}}$.callback!==null&&$.lane!==0&&(t.flags|=64,je=f.effects,je===null?f.effects=[$]:je.push($))}else Ze={eventTime:Ze,lane:je,tag:$.tag,payload:$.payload,callback:$.callback,next:null},Pe===null?(pe=Pe=Ze,J=Ie):Pe=Pe.next=Ze,E|=je;if($=$.next,$===null){if($=f.shared.pending,$===null)break;je=$,$=je.next,je.next=null,f.lastBaseUpdate=je,f.shared.pending=null}}while(!0);if(Pe===null&&(J=Ie),f.baseState=J,f.firstBaseUpdate=pe,f.lastBaseUpdate=Pe,r=f.shared.interleaved,r!==null){f=r;do E|=f.lane,f=f.next;while(f!==r)}else y===null&&(f.shared.lanes=0);wr|=E,t.lanes=E,t.memoizedState=Ie}}function Vs(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var u=t[r],f=u.callback;if(f!==null){if(u.callback=null,u=a,typeof f!="function")throw Error(d(191,f));f.call(u)}}}var Do={},hi=ci(Do),zo=ci(Do),Zi=ci(Do);function fi(t){if(t===Do)throw Error(d(174));return t}function Js(t,r){switch(Qt(Zi,r),Qt(zo,t),Qt(hi,Do),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:at(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=at(r,t)}tn(hi),Qt(hi,r)}function Pi(){tn(hi),tn(zo),tn(Zi)}function vu(t){fi(Zi.current);var r=fi(hi.current),a=at(r,t.type);r!==a&&(Qt(zo,t),Qt(hi,a))}function xu(t){zo.current===t&&(tn(hi),tn(zo))}var an=ci(0);function mi(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Cs=[];function Xs(){for(var t=0;t<Cs.length;t++)Cs[t]._workInProgressVersionPrimary=null;Cs.length=0}var _l=K.ReactCurrentDispatcher,Cl=K.ReactCurrentBatchConfig,Qs=0,pn=null,Hn=null,Mt=null,Ra=!1,Ia=!1,Oa=0,Zd=0;function Qn(){throw Error(d(321))}function Tl(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Cn(t[a],r[a]))return!1;return!0}function Nl(t,r,a,u,f,y){if(Qs=y,pn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,_l.current=t===null||t.memoizedState===null?tp:Pu,t=a(u,f),Ia){y=0;do{if(Ia=!1,Oa=0,25<=y)throw Error(d(301));y+=1,Mt=Hn=null,r.updateQueue=null,_l.current=Da,t=a(u,f)}while(Ia)}if(_l.current=Ma,r=Hn!==null&&Hn.next!==null,Qs=0,Mt=Hn=pn=null,Ra=!1,r)throw Error(d(300));return t}function bu(){var t=Oa!==0;return Oa=0,t}function Ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?pn.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function Jr(){if(Hn===null){var t=pn.alternate;t=t!==null?t.memoizedState:null}else t=Hn.next;var r=Mt===null?pn.memoizedState:Mt.next;if(r!==null)Mt=r,Hn=t;else{if(t===null)throw Error(d(310));Hn=t,t={memoizedState:Hn.memoizedState,baseState:Hn.baseState,baseQueue:Hn.baseQueue,queue:Hn.queue,next:null},Mt===null?pn.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function Xr(t,r){return typeof r=="function"?r(t):r}function Zs(t){var r=Jr(),a=r.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var u=Hn,f=u.baseQueue,y=a.pending;if(y!==null){if(f!==null){var E=f.next;f.next=y.next,y.next=E}u.baseQueue=f=y,a.pending=null}if(f!==null){y=f.next,u=u.baseState;var $=E=null,J=null,pe=y;do{var Pe=pe.lane;if((Qs&Pe)===Pe)J!==null&&(J=J.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),u=pe.hasEagerState?pe.eagerState:t(u,pe.action);else{var Ie={lane:Pe,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};J===null?($=J=Ie,E=u):J=J.next=Ie,pn.lanes|=Pe,wr|=Pe}pe=pe.next}while(pe!==null&&pe!==y);J===null?E=u:J.next=$,Cn(u,r.memoizedState)||(Zn=!0),r.memoizedState=u,r.baseState=E,r.baseQueue=J,a.lastRenderedState=u}if(t=a.interleaved,t!==null){f=t;do y=f.lane,pn.lanes|=y,wr|=y,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Fo(t){var r=Jr(),a=r.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var u=a.dispatch,f=a.pending,y=r.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do y=t(y,E.action),E=E.next;while(E!==f);Cn(y,r.memoizedState)||(Zn=!0),r.memoizedState=y,r.baseQueue===null&&(r.baseState=y),a.lastRenderedState=y}return[y,u]}function Wo(){}function Ri(t,r){var a=pn,u=Jr(),f=r(),y=!Cn(u.memoizedState,f);if(y&&(u.memoizedState=f,Zn=!0),u=u.queue,_u(eo.bind(null,a,u,t),[t]),u.getSnapshot!==r||y||Mt!==null&&Mt.memoizedState.tag&1){if(a.flags|=2048,Ts(9,Lc.bind(null,a,u,f,r),void 0,null),Ft===null)throw Error(d(349));(Qs&30)!==0||Ec(a,r,f)}return f}function Ec(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=pn.updateQueue,r===null?(r={lastEffect:null,stores:null},pn.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Lc(t,r,a,u){r.value=a,r.getSnapshot=u,wu(r)&&ku(t)}function eo(t,r,a){return a(function(){wu(r)&&ku(t)})}function wu(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Cn(t,a)}catch{return!0}}function ku(t){var r=Ei(t,1);r!==null&&ts(r,t,1,-1)}function Su(t){var r=Ai();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:t},r.queue=t,t=t.dispatch=ju.bind(null,pn,t),[r.memoizedState,t]}function Ts(t,r,a,u){return t={tag:t,create:r,destroy:a,deps:u,next:null},r=pn.updateQueue,r===null?(r={lastEffect:null,stores:null},pn.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(u=a.next,a.next=t,t.next=u,r.lastEffect=t)),t}function to(){return Jr().memoizedState}function Ho(t,r,a,u){var f=Ai();pn.flags|=t,f.memoizedState=Ts(1|r,a,void 0,u===void 0?null:u)}function Bo(t,r,a,u){var f=Jr();u=u===void 0?null:u;var y=void 0;if(Hn!==null){var E=Hn.memoizedState;if(y=E.destroy,u!==null&&Tl(u,E.deps)){f.memoizedState=Ts(r,a,y,u);return}}pn.flags|=t,f.memoizedState=Ts(1|r,a,y,u)}function jl(t,r){return Ho(8390656,8,t,r)}function _u(t,r){return Bo(2048,8,t,r)}function Uo(t,r){return Bo(4,2,t,r)}function Cu(t,r){return Bo(4,4,t,r)}function Pc(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Tu(t,r,a){return a=a!=null?a.concat([t]):null,Bo(4,4,Pc.bind(null,r,t),a)}function qo(){}function Ac(t,r){var a=Jr();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Tl(r,u[1])?u[0]:(a.memoizedState=[t,r],t)}function Rc(t,r){var a=Jr();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Tl(r,u[1])?u[0]:(t=t(),a.memoizedState=[t,r],t)}function $o(t,r,a){return(Qs&21)===0?(t.baseState&&(t.baseState=!1,Zn=!0),t.memoizedState=a):(Cn(a,r)||(a=ra(),pn.lanes|=a,wr|=a,t.baseState=!0),r)}function Ic(t,r){var a=Et;Et=a!==0&&4>a?a:4,t(!0);var u=Cl.transition;Cl.transition={};try{t(!1),r()}finally{Et=a,Cl.transition=u}}function Nu(){return Jr().memoizedState}function ep(t,r,a){var u=Vo(t);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Eu(t))Oc(r,a);else if(a=Pa(t,r,a,u),a!==null){var f=Fr();ts(a,t,u,f),Lu(a,r,u)}}function ju(t,r,a){var u=Vo(t),f={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Eu(t))Oc(r,f);else{var y=t.alternate;if(t.lanes===0&&(y===null||y.lanes===0)&&(y=r.lastRenderedReducer,y!==null))try{var E=r.lastRenderedState,$=y(E,a);if(f.hasEagerState=!0,f.eagerState=$,Cn($,E)){var J=r.interleaved;J===null?(f.next=f,_s(r)):(f.next=J.next,J.next=f),r.interleaved=f;return}}catch{}finally{}a=Pa(t,r,f,u),a!==null&&(f=Fr(),ts(a,t,u,f),Lu(a,r,u))}}function Eu(t){var r=t.alternate;return t===pn||r!==null&&r===pn}function Oc(t,r){Ia=Ra=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function Lu(t,r,a){if((a&4194240)!==0){var u=r.lanes;u&=t.pendingLanes,a|=u,r.lanes=a,as(t,a)}}var Ma={readContext:zr,useCallback:Qn,useContext:Qn,useEffect:Qn,useImperativeHandle:Qn,useInsertionEffect:Qn,useLayoutEffect:Qn,useMemo:Qn,useReducer:Qn,useRef:Qn,useState:Qn,useDebugValue:Qn,useDeferredValue:Qn,useTransition:Qn,useMutableSource:Qn,useSyncExternalStore:Qn,useId:Qn,unstable_isNewReconciler:!1},tp={readContext:zr,useCallback:function(t,r){return Ai().memoizedState=[t,r===void 0?null:r],t},useContext:zr,useEffect:jl,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Ho(4194308,4,Pc.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Ho(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ho(4,2,t,r)},useMemo:function(t,r){var a=Ai();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var u=Ai();return r=a!==void 0?a(r):r,u.memoizedState=u.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},u.queue=t,t=t.dispatch=ep.bind(null,pn,t),[u.memoizedState,t]},useRef:function(t){var r=Ai();return t={current:t},r.memoizedState=t},useState:Su,useDebugValue:qo,useDeferredValue:function(t){return Ai().memoizedState=t},useTransition:function(){var t=Su(!1),r=t[0];return t=Ic.bind(null,t[1]),Ai().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var u=pn,f=Ai();if(nn){if(a===void 0)throw Error(d(407));a=a()}else{if(a=r(),Ft===null)throw Error(d(349));(Qs&30)!==0||Ec(u,r,a)}f.memoizedState=a;var y={value:a,getSnapshot:r};return f.queue=y,jl(eo.bind(null,u,y,t),[t]),u.flags|=2048,Ts(9,Lc.bind(null,u,y,a,r),void 0,null),a},useId:function(){var t=Ai(),r=Ft.identifierPrefix;if(nn){var a=ji,u=di;a=(u&~(1<<32-he(u)-1)).toString(32)+a,r=":"+r+"R"+a,a=Oa++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Zd++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Pu={readContext:zr,useCallback:Ac,useContext:zr,useEffect:_u,useImperativeHandle:Tu,useInsertionEffect:Uo,useLayoutEffect:Cu,useMemo:Rc,useReducer:Zs,useRef:to,useState:function(){return Zs(Xr)},useDebugValue:qo,useDeferredValue:function(t){var r=Jr();return $o(r,Hn.memoizedState,t)},useTransition:function(){var t=Zs(Xr)[0],r=Jr().memoizedState;return[t,r]},useMutableSource:Wo,useSyncExternalStore:Ri,useId:Nu,unstable_isNewReconciler:!1},Da={readContext:zr,useCallback:Ac,useContext:zr,useEffect:_u,useImperativeHandle:Tu,useInsertionEffect:Uo,useLayoutEffect:Cu,useMemo:Rc,useReducer:Fo,useRef:to,useState:function(){return Fo(Xr)},useDebugValue:qo,useDeferredValue:function(t){var r=Jr();return Hn===null?r.memoizedState=t:$o(r,Hn.memoizedState,t)},useTransition:function(){var t=Fo(Xr)[0],r=Jr().memoizedState;return[t,r]},useMutableSource:Wo,useSyncExternalStore:Ri,useId:Nu,unstable_isNewReconciler:!1};function gr(t,r){if(t&&t.defaultProps){r=G({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function Au(t,r,a,u){r=t.memoizedState,a=a(u,r),a=a==null?r:G({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var za={isMounted:function(t){return(t=t._reactInternals)?kn(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var u=Fr(),f=Vo(t),y=Li(u,f);y.payload=r,a!=null&&(y.callback=a),r=pi(t,y,f),r!==null&&(ts(r,t,f,u),Aa(r,t,f))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var u=Fr(),f=Vo(t),y=Li(u,f);y.tag=1,y.payload=r,a!=null&&(y.callback=a),r=pi(t,y,f),r!==null&&(ts(r,t,f,u),Aa(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Fr(),u=Vo(t),f=Li(a,u);f.tag=2,r!=null&&(f.callback=r),r=pi(t,f,u),r!==null&&(ts(r,t,u,a),Aa(r,t,u))}};function Mc(t,r,a,u,f,y,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,y,E):r.prototype&&r.prototype.isPureReactComponent?!ko(a,u)||!ko(f,y):!0}function Dc(t,r,a){var u=!1,f=xs,y=r.contextType;return typeof y=="object"&&y!==null?y=zr(y):(f=tr(r)?Xi:Gn.current,u=r.contextTypes,y=(u=u!=null)?jo(t,f):xs),r=new r(a,y),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=za,t.stateNode=r,r._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=y),r}function zc(t,r,a,u){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,u),r.state!==t&&za.enqueueReplaceState(r,r.state,null)}function Ru(t,r,a,u){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},kl(t);var y=r.contextType;typeof y=="object"&&y!==null?f.context=zr(y):(y=tr(r)?Xi:Gn.current,f.context=jo(t,y)),f.state=t.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Au(t,r,y,a),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&za.enqueueReplaceState(f,f.state,null),Sl(t,a,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,r){try{var a="",u=r;do a+=Ve(u),u=u.return;while(u);var f=a}catch(y){f=`
Error generating stack: `+y.message+`
`+y.stack}return{value:t,source:r,stack:f,digest:null}}function Iu(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function Ou(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Fc=typeof WeakMap=="function"?WeakMap:Map;function El(t,r,a){a=Li(-1,a),a.tag=3,a.payload={element:null};var u=r.value;return a.callback=function(){Kc||(Kc=!0,rp=u),Ou(t,r)},a}function Mu(t,r,a){a=Li(-1,a),a.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;a.payload=function(){return u(f)},a.callback=function(){Ou(t,r)}}var y=t.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(a.callback=function(){Ou(t,r),typeof u!="function"&&(Go===null?Go=new Set([this]):Go.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),a}function Wc(t,r,a){var u=t.pingCache;if(u===null){u=t.pingCache=new Fc;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(a)||(f.add(a),t=Lm.bind(null,t,r,a),r.then(t,t))}function Du(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function ro(t,r,a,u,f){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Li(-1,1),r.tag=2,pi(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Hc=K.ReactCurrentOwner,Zn=!1;function yr(t,r,a,u){r.child=t===null?Ea(r,null,a,u):ks(r,t.child,a,u)}function Bc(t,r,a,u,f){a=a.render;var y=r.ref;return Gs(r,f),u=Nl(t,r,a,u,y,f),a=bu(),t!==null&&!Zn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Ar(t,r,f)):(nn&&a&&qs(r),r.flags|=1,yr(t,r,u,f),r.child)}function Uc(t,r,a,u,f){if(t===null){var y=a.type;return typeof y=="function"&&!cp(y)&&y.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=y,Zt(t,r,y,u,f)):(t=Qc(a.type,null,u,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(y=t.child,(t.lanes&f)===0){var E=y.memoizedProps;if(a=a.compare,a=a!==null?a:ko,a(E,u)&&t.ref===r.ref)return Ar(t,r,f)}return r.flags|=1,t=Xo(y,u),t.ref=r.ref,t.return=r,r.child=t}function Zt(t,r,a,u,f){if(t!==null){var y=t.memoizedProps;if(ko(y,u)&&t.ref===r.ref)if(Zn=!1,r.pendingProps=u=y,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Zn=!0);else return r.lanes=t.lanes,Ar(t,r,f)}return io(t,r,a,u,f)}function qc(t,r,a){var u=r.pendingProps,f=u.children,y=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qt(br,Kt),Kt|=a;else{if((a&1073741824)===0)return t=y!==null?y.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Qt(br,Kt),Kt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=y!==null?y.baseLanes:a,Qt(br,Kt),Kt|=u}else y!==null?(u=y.baseLanes|a,r.memoizedState=null):u=a,Qt(br,Kt),Kt|=u;return yr(t,r,f,a),r.child}function Ll(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function io(t,r,a,u,f){var y=tr(a)?Xi:Gn.current;return y=jo(r,y),Gs(r,f),a=Nl(t,r,a,u,y,f),u=bu(),t!==null&&!Zn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Ar(t,r,f)):(nn&&u&&qs(r),r.flags|=1,yr(t,r,a,f),r.child)}function Qr(t,r,a,u,f){if(tr(a)){var y=!0;Lo(r)}else y=!1;if(Gs(r,f),r.stateNode===null)Dl(t,r),Dc(r,a,u),Ru(r,a,u,f),u=!0;else if(t===null){var E=r.stateNode,$=r.memoizedProps;E.props=$;var J=E.context,pe=a.contextType;typeof pe=="object"&&pe!==null?pe=zr(pe):(pe=tr(a)?Xi:Gn.current,pe=jo(r,pe));var Pe=a.getDerivedStateFromProps,Ie=typeof Pe=="function"||typeof E.getSnapshotBeforeUpdate=="function";Ie||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||($!==u||J!==pe)&&zc(r,E,u,pe),Qi=!1;var je=r.memoizedState;E.state=je,Sl(r,u,E,f),J=r.memoizedState,$!==u||je!==J||fr.current||Qi?(typeof Pe=="function"&&(Au(r,a,Pe,u),J=r.memoizedState),($=Qi||Mc(r,a,$,u,je,J,pe))?(Ie||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=J),E.props=u,E.state=J,E.context=pe,u=$):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{E=r.stateNode,Ys(t,r),$=r.memoizedProps,pe=r.type===r.elementType?$:gr(r.type,$),E.props=pe,Ie=r.pendingProps,je=E.context,J=a.contextType,typeof J=="object"&&J!==null?J=zr(J):(J=tr(a)?Xi:Gn.current,J=jo(r,J));var Ze=a.getDerivedStateFromProps;(Pe=typeof Ze=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||($!==Ie||je!==J)&&zc(r,E,u,J),Qi=!1,je=r.memoizedState,E.state=je,Sl(r,u,E,f);var st=r.memoizedState;$!==Ie||je!==st||fr.current||Qi?(typeof Ze=="function"&&(Au(r,a,Ze,u),st=r.memoizedState),(pe=Qi||Mc(r,a,pe,u,je,st,J)||!1)?(Pe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,st,J),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,st,J)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||$===t.memoizedProps&&je===t.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||$===t.memoizedProps&&je===t.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=st),E.props=u,E.state=st,E.context=J,u=pe):(typeof E.componentDidUpdate!="function"||$===t.memoizedProps&&je===t.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||$===t.memoizedProps&&je===t.memoizedState||(r.flags|=1024),u=!1)}return Ko(t,r,a,u,y,f)}function Ko(t,r,a,u,f,y){Ll(t,r);var E=(r.flags&128)!==0;if(!u&&!E)return f&&mu(r,a,!1),Ar(t,r,y);u=r.stateNode,Hc.current=r;var $=E&&typeof a.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,t!==null&&E?(r.child=ks(r,t.child,null,y),r.child=ks(r,null,$,y)):yr(t,r,$,y),r.memoizedState=u.state,f&&mu(r,a,!0),r.child}function Pl(t){var r=t.stateNode;r.pendingContext?hu(t,r.pendingContext,r.pendingContext!==r.context):r.context&&hu(t,r.context,!1),Js(t,r.containerInfo)}function zu(t,r,a,u,f){return Ao(),Ro(f),r.flags|=256,yr(t,r,a,u),r.child}var Al={dehydrated:null,treeContext:null,retryLane:0};function Rl(t){return{baseLanes:t,cachePool:null,transitions:null}}function Il(t,r,a){var u=r.pendingProps,f=an.current,y=!1,E=(r.flags&128)!==0,$;if(($=E)||($=t!==null&&t.memoizedState===null?!1:(f&2)!==0),$?(y=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Qt(an,f&1),t===null)return xl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(E=u.children,t=u.fallback,y?(u=r.mode,y=r.child,E={mode:"hidden",children:E},(u&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=E):y=Zc(E,u,0,null),t=$a(t,u,a,null),y.return=r,t.return=r,y.sibling=t,r.child=y,r.child.memoizedState=Rl(a),r.memoizedState=Al,t):Ol(r,E));if(f=t.memoizedState,f!==null&&($=f.dehydrated,$!==null))return Fu(t,r,E,u,$,f,a);if(y){y=u.fallback,E=r.mode,f=t.child,$=f.sibling;var J={mode:"hidden",children:u.children};return(E&1)===0&&r.child!==f?(u=r.child,u.childLanes=0,u.pendingProps=J,r.deletions=null):(u=Xo(f,J),u.subtreeFlags=f.subtreeFlags&14680064),$!==null?y=Xo($,y):(y=$a(y,E,a,null),y.flags|=2),y.return=r,u.return=r,u.sibling=y,r.child=u,u=y,y=r.child,E=t.child.memoizedState,E=E===null?Rl(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},y.memoizedState=E,y.childLanes=t.childLanes&~a,r.memoizedState=Al,u}return y=t.child,t=y.sibling,u=Xo(y,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=a),u.return=r,u.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=u,r.memoizedState=null,u}function Ol(t,r){return r=Zc({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Ml(t,r,a,u){return u!==null&&Ro(u),ks(r,t.child,null,a),t=Ol(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Fu(t,r,a,u,f,y,E){if(a)return r.flags&256?(r.flags&=-257,u=Iu(Error(d(422))),Ml(t,r,E,u)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(y=u.fallback,f=r.mode,u=Zc({mode:"visible",children:u.children},f,0,null),y=$a(y,f,E,null),y.flags|=2,u.return=r,y.return=r,u.sibling=y,r.child=u,(r.mode&1)!==0&&ks(r,t.child,null,E),r.child.memoizedState=Rl(E),r.memoizedState=Al,y);if((r.mode&1)===0)return Ml(t,r,E,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var $=u.dgst;return u=$,y=Error(d(419)),u=Iu(y,u,void 0),Ml(t,r,E,u)}if($=(E&t.childLanes)!==0,Zn||$){if(u=Ft,u!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|E))!==0?0:f,f!==0&&f!==y.retryLane&&(y.retryLane=f,Ei(t,f),ts(u,t,f,-1))}return up(),u=Iu(Error(d(421))),Ml(t,r,E,u)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=Pm.bind(null,t),f._reactRetry=r,null):(t=y.treeContext,Pn=ys(f.nextSibling),mr=r,nn=!0,Vr=null,t!==null&&(zn[Fn++]=di,zn[Fn++]=ji,zn[Fn++]=ws,di=t.id,ji=t.overflow,ws=r),r=Ol(r,u.children),r.flags|=4096,r)}function Wu(t,r,a){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r),Oo(t.return,r,a)}function Dt(t,r,a,u,f){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:f}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=u,y.tail=a,y.tailMode=f)}function Hu(t,r,a){var u=r.pendingProps,f=u.revealOrder,y=u.tail;if(yr(t,r,u.children,a),u=an.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wu(t,a,r);else if(t.tag===19)Wu(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Qt(an,u),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(a=r.child,f=null;a!==null;)t=a.alternate,t!==null&&mi(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),Dt(r,!1,f,a,y);break;case"backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&mi(t)===null){r.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Dt(r,!0,a,null,y);break;case"together":Dt(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Dl(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Ar(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),wr|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(d(153));if(r.child!==null){for(t=r.child,a=Xo(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Xo(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function np(t,r,a){switch(r.tag){case 3:Pl(r),Ao();break;case 5:vu(r);break;case 1:tr(r.type)&&Lo(r);break;case 4:Js(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,f=r.memoizedProps.value;Qt(La,u._currentValue),u._currentValue=f;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Qt(an,an.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Il(t,r,a):(Qt(an,an.current&1),t=Ar(t,r,a),t!==null?t.sibling:null);Qt(an,an.current&1);break;case 19:if(u=(a&r.childLanes)!==0,(t.flags&128)!==0){if(u)return Hu(t,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Qt(an,an.current),u)break;return null;case 22:case 23:return r.lanes=0,qc(t,r,a)}return Ar(t,r,a)}var Fa,Bu,hn,$c;Fa=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Bu=function(){},hn=function(t,r,a,u){var f=t.memoizedProps;if(f!==u){t=r.stateNode,fi(hi.current);var y=null;switch(a){case"input":f=St(t,f),u=St(t,u),y=[];break;case"select":f=G({},f,{value:void 0}),u=G({},u,{value:void 0}),y=[];break;case"textarea":f=ie(t,f),u=ie(t,u),y=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=gs)}vi(a,u);var E;a=null;for(pe in f)if(!u.hasOwnProperty(pe)&&f.hasOwnProperty(pe)&&f[pe]!=null)if(pe==="style"){var $=f[pe];for(E in $)$.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(x.hasOwnProperty(pe)?y||(y=[]):(y=y||[]).push(pe,null));for(pe in u){var J=u[pe];if($=f!=null?f[pe]:void 0,u.hasOwnProperty(pe)&&J!==$&&(J!=null||$!=null))if(pe==="style")if($){for(E in $)!$.hasOwnProperty(E)||J&&J.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in J)J.hasOwnProperty(E)&&$[E]!==J[E]&&(a||(a={}),a[E]=J[E])}else a||(y||(y=[]),y.push(pe,a)),a=J;else pe==="dangerouslySetInnerHTML"?(J=J?J.__html:void 0,$=$?$.__html:void 0,J!=null&&$!==J&&(y=y||[]).push(pe,J)):pe==="children"?typeof J!="string"&&typeof J!="number"||(y=y||[]).push(pe,""+J):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(x.hasOwnProperty(pe)?(J!=null&&pe==="onScroll"&&Ut("scroll",t),y||$===J||(y=[])):(y=y||[]).push(pe,J))}a&&(y=y||[]).push("style",a);var pe=y;(r.updateQueue=pe)&&(r.flags|=4)}},$c=function(t,r,a,u){a!==u&&(r.flags|=4)};function Wa(t,r){if(!nn)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function nr(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,u=0;if(r)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=a,r}function zl(t,r,a){var u=r.pendingProps;switch(vl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nr(r),null;case 1:return tr(r.type)&&Eo(),nr(r),null;case 3:return u=r.stateNode,Pi(),tn(fr),tn(Gn),Xs(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Na(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vr!==null&&(op(Vr),Vr=null))),Bu(t,r),nr(r),null;case 5:xu(r);var f=fi(Zi.current);if(a=r.type,t!==null&&r.stateNode!=null)hn(t,r,a,u,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(d(166));return nr(r),null}if(t=fi(hi.current),Na(r)){u=r.stateNode,a=r.type;var y=r.memoizedProps;switch(u[Ti]=r,u[_a]=y,t=(r.mode&1)!==0,a){case"dialog":Ut("cancel",u),Ut("close",u);break;case"iframe":case"object":case"embed":Ut("load",u);break;case"video":case"audio":for(f=0;f<Ds.length;f++)Ut(Ds[f],u);break;case"source":Ut("error",u);break;case"img":case"image":case"link":Ut("error",u),Ut("load",u);break;case"details":Ut("toggle",u);break;case"input":vt(u,y),Ut("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!y.multiple},Ut("invalid",u);break;case"textarea":Se(u,y),Ut("invalid",u)}vi(a,y),f=null;for(var E in y)if(y.hasOwnProperty(E)){var $=y[E];E==="children"?typeof $=="string"?u.textContent!==$&&(y.suppressHydrationWarning!==!0&&ka(u.textContent,$,t),f=["children",$]):typeof $=="number"&&u.textContent!==""+$&&(y.suppressHydrationWarning!==!0&&ka(u.textContent,$,t),f=["children",""+$]):x.hasOwnProperty(E)&&$!=null&&E==="onScroll"&&Ut("scroll",u)}switch(a){case"input":qe(u),et(u,y,!0);break;case"textarea":qe(u),wt(u);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(u.onclick=gs)}u=f,r.updateQueue=u,u!==null&&(r.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Je(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=E.createElement(a,{is:u.is}):(t=E.createElement(a),a==="select"&&(E=t,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):t=E.createElementNS(t,a),t[Ti]=r,t[_a]=u,Fa(t,r,!1,!1),r.stateNode=t;e:{switch(E=xt(a,u),a){case"dialog":Ut("cancel",t),Ut("close",t),f=u;break;case"iframe":case"object":case"embed":Ut("load",t),f=u;break;case"video":case"audio":for(f=0;f<Ds.length;f++)Ut(Ds[f],t);f=u;break;case"source":Ut("error",t),f=u;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),f=u;break;case"details":Ut("toggle",t),f=u;break;case"input":vt(t,u),f=St(t,u),Ut("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=G({},u,{value:void 0}),Ut("invalid",t);break;case"textarea":Se(t,u),f=ie(t,u),Ut("invalid",t);break;default:f=u}vi(a,f),$=f;for(y in $)if($.hasOwnProperty(y)){var J=$[y];y==="style"?Hr(t,J):y==="dangerouslySetInnerHTML"?(J=J?J.__html:void 0,J!=null&&yt(t,J)):y==="children"?typeof J=="string"?(a!=="textarea"||J!=="")&&pt(t,J):typeof J=="number"&&pt(t,""+J):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(x.hasOwnProperty(y)?J!=null&&y==="onScroll"&&Ut("scroll",t):J!=null&&F(t,y,J,E))}switch(a){case"input":qe(t),et(t,u,!1);break;case"textarea":qe(t),wt(t);break;case"option":u.value!=null&&t.setAttribute("value",""+He(u.value));break;case"select":t.multiple=!!u.multiple,y=u.value,y!=null?ht(t,!!u.multiple,y,!1):u.defaultValue!=null&&ht(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=gs)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return nr(r),null;case 6:if(t&&r.stateNode!=null)$c(t,r,t.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(d(166));if(a=fi(Zi.current),fi(hi.current),Na(r)){if(u=r.stateNode,a=r.memoizedProps,u[Ti]=r,(y=u.nodeValue!==a)&&(t=mr,t!==null))switch(t.tag){case 3:ka(u.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ka(u.nodeValue,a,(t.mode&1)!==0)}y&&(r.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Ti]=r,r.stateNode=u}return nr(r),null;case 13:if(tn(an),u=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nn&&Pn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Nc(),Ao(),r.flags|=98560,y=!1;else if(y=Na(r),u!==null&&u.dehydrated!==null){if(t===null){if(!y)throw Error(d(318));if(y=r.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(d(317));y[Ti]=r}else Ao(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;nr(r),y=!1}else Vr!==null&&(op(Vr),Vr=null),y=!0;if(!y)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(an.current&1)!==0?jt===0&&(jt=3):up())),r.updateQueue!==null&&(r.flags|=4),nr(r),null);case 4:return Pi(),Bu(t,r),t===null&&fs(r.stateNode.containerInfo),nr(r),null;case 10:return Wn(r.type._context),nr(r),null;case 17:return tr(r.type)&&Eo(),nr(r),null;case 19:if(tn(an),y=r.memoizedState,y===null)return nr(r),null;if(u=(r.flags&128)!==0,E=y.rendering,E===null)if(u)Wa(y,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(E=mi(t),E!==null){for(r.flags|=128,Wa(y,!1),u=E.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=a,a=r.child;a!==null;)y=a,t=u,y.flags&=14680066,E=y.alternate,E===null?(y.childLanes=0,y.lanes=t,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=E.childLanes,y.lanes=E.lanes,y.child=E.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=E.memoizedProps,y.memoizedState=E.memoizedState,y.updateQueue=E.updateQueue,y.type=E.type,t=E.dependencies,y.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Qt(an,an.current&1|2),r.child}t=t.sibling}y.tail!==null&&At()>Fl&&(r.flags|=128,u=!0,Wa(y,!1),r.lanes=4194304)}else{if(!u)if(t=mi(E),t!==null){if(r.flags|=128,u=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Wa(y,!0),y.tail===null&&y.tailMode==="hidden"&&!E.alternate&&!nn)return nr(r),null}else 2*At()-y.renderingStartTime>Fl&&a!==1073741824&&(r.flags|=128,u=!0,Wa(y,!1),r.lanes=4194304);y.isBackwards?(E.sibling=r.child,r.child=E):(a=y.last,a!==null?a.sibling=E:r.child=E,y.last=E)}return y.tail!==null?(r=y.tail,y.rendering=r,y.tail=r.sibling,y.renderingStartTime=At(),r.sibling=null,a=an.current,Qt(an,u?a&1|2:a&1),r):(nr(r),null);case 22:case 23:return lp(),u=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Kt&1073741824)!==0&&(nr(r),r.subtreeFlags&6&&(r.flags|=8192)):nr(r),null;case 24:return null;case 25:return null}throw Error(d(156,r.tag))}function e(t,r){switch(vl(r),r.tag){case 1:return tr(r.type)&&Eo(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Pi(),tn(fr),tn(Gn),Xs(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return xu(r),null;case 13:if(tn(an),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(d(340));Ao()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return tn(an),null;case 4:return Pi(),null;case 10:return Wn(r.type._context),null;case 22:case 23:return lp(),null;case 24:return null;default:return null}}var n=!1,s=!1,i=typeof WeakSet=="function"?WeakSet:Set,o=null;function h(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Rn(t,r,u)}else a.current=null}function m(t,r,a){try{a()}catch(u){Rn(t,r,u)}}var v=!1;function w(t,r){if(fl=ct,t=uu(),fa(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var f=u.anchorOffset,y=u.focusNode;u=u.focusOffset;try{a.nodeType,y.nodeType}catch{a=null;break e}var E=0,$=-1,J=-1,pe=0,Pe=0,Ie=t,je=null;t:for(;;){for(var Ze;Ie!==a||f!==0&&Ie.nodeType!==3||($=E+f),Ie!==y||u!==0&&Ie.nodeType!==3||(J=E+u),Ie.nodeType===3&&(E+=Ie.nodeValue.length),(Ze=Ie.firstChild)!==null;)je=Ie,Ie=Ze;for(;;){if(Ie===t)break t;if(je===a&&++pe===f&&($=E),je===y&&++Pe===u&&(J=E),(Ze=Ie.nextSibling)!==null)break;Ie=je,je=Ie.parentNode}Ie=Ze}a=$===-1||J===-1?null:{start:$,end:J}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yi={focusedElem:t,selectionRange:a},ct=!1,o=r;o!==null;)if(r=o,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,o=t;else for(;o!==null;){r=o;try{var st=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(st!==null){var ot=st.memoizedProps,qn=st.memoizedState,le=r.stateNode,ee=le.getSnapshotBeforeUpdate(r.elementType===r.type?ot:gr(r.type,ot),qn);le.__reactInternalSnapshotBeforeUpdate=ee}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(ze){Rn(r,r.return,ze)}if(t=r.sibling,t!==null){t.return=r.return,o=t;break}o=r.return}return st=v,v=!1,st}function k(t,r,a){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var y=f.destroy;f.destroy=void 0,y!==void 0&&m(r,a,y)}f=f.next}while(f!==u)}}function M(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var u=a.create;a.destroy=u()}a=a.next}while(a!==r)}}function B(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function te(t){var r=t.alternate;r!==null&&(t.alternate=null,te(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ti],delete r[_a],delete r[pu],delete r[Xd],delete r[Qd])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Q(t){return t.tag===5||t.tag===3||t.tag===4}function fe(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ve(t,r,a){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=gs));else if(u!==4&&(t=t.child,t!==null))for(ve(t,r,a),t=t.sibling;t!==null;)ve(t,r,a),t=t.sibling}function Ee(t,r,a){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Ee(t,r,a),t=t.sibling;t!==null;)Ee(t,r,a),t=t.sibling}var Ne=null,De=!1;function Me(t,r,a){for(a=a.child;a!==null;)Ke(t,r,a),a=a.sibling}function Ke(t,r,a){if(_&&typeof _.onCommitFiberUnmount=="function")try{_.onCommitFiberUnmount(On,a)}catch{}switch(a.tag){case 5:s||h(a,r);case 6:var u=Ne,f=De;Ne=null,Me(t,r,a),Ne=u,De=f,Ne!==null&&(De?(t=Ne,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Ne.removeChild(a.stateNode));break;case 18:Ne!==null&&(De?(t=Ne,a=a.stateNode,t.nodeType===8?ml(t.parentNode,a):t.nodeType===1&&ml(t,a),be(t)):ml(Ne,a.stateNode));break;case 4:u=Ne,f=De,Ne=a.stateNode.containerInfo,De=!0,Me(t,r,a),Ne=u,De=f;break;case 0:case 11:case 14:case 15:if(!s&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var y=f,E=y.destroy;y=y.tag,E!==void 0&&((y&2)!==0||(y&4)!==0)&&m(a,r,E),f=f.next}while(f!==u)}Me(t,r,a);break;case 1:if(!s&&(h(a,r),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch($){Rn(a,r,$)}Me(t,r,a);break;case 21:Me(t,r,a);break;case 22:a.mode&1?(s=(u=s)||a.memoizedState!==null,Me(t,r,a),s=u):Me(t,r,a);break;default:Me(t,r,a)}}function lt(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new i),r.forEach(function(u){var f=Am.bind(null,t,u);a.has(u)||(a.add(u),u.then(f,f))})}}function Xe(t,r){var a=r.deletions;if(a!==null)for(var u=0;u<a.length;u++){var f=a[u];try{var y=t,E=r,$=E;e:for(;$!==null;){switch($.tag){case 5:Ne=$.stateNode,De=!1;break e;case 3:Ne=$.stateNode.containerInfo,De=!0;break e;case 4:Ne=$.stateNode.containerInfo,De=!0;break e}$=$.return}if(Ne===null)throw Error(d(160));Ke(y,E,f),Ne=null,De=!1;var J=f.alternate;J!==null&&(J.return=null),f.return=null}catch(pe){Rn(f,r,pe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)kt(r,t),r=r.sibling}function kt(t,r){var a=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xe(r,t),Nt(t),u&4){try{k(3,t,t.return),M(3,t)}catch(ot){Rn(t,t.return,ot)}try{k(5,t,t.return)}catch(ot){Rn(t,t.return,ot)}}break;case 1:Xe(r,t),Nt(t),u&512&&a!==null&&h(a,a.return);break;case 5:if(Xe(r,t),Nt(t),u&512&&a!==null&&h(a,a.return),t.flags&32){var f=t.stateNode;try{pt(f,"")}catch(ot){Rn(t,t.return,ot)}}if(u&4&&(f=t.stateNode,f!=null)){var y=t.memoizedProps,E=a!==null?a.memoizedProps:y,$=t.type,J=t.updateQueue;if(t.updateQueue=null,J!==null)try{$==="input"&&y.type==="radio"&&y.name!=null&&Fe(f,y),xt($,E);var pe=xt($,y);for(E=0;E<J.length;E+=2){var Pe=J[E],Ie=J[E+1];Pe==="style"?Hr(f,Ie):Pe==="dangerouslySetInnerHTML"?yt(f,Ie):Pe==="children"?pt(f,Ie):F(f,Pe,Ie,pe)}switch($){case"input":rt(f,y);break;case"textarea":me(f,y);break;case"select":var je=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!y.multiple;var Ze=y.value;Ze!=null?ht(f,!!y.multiple,Ze,!1):je!==!!y.multiple&&(y.defaultValue!=null?ht(f,!!y.multiple,y.defaultValue,!0):ht(f,!!y.multiple,y.multiple?[]:"",!1))}f[_a]=y}catch(ot){Rn(t,t.return,ot)}}break;case 6:if(Xe(r,t),Nt(t),u&4){if(t.stateNode===null)throw Error(d(162));f=t.stateNode,y=t.memoizedProps;try{f.nodeValue=y}catch(ot){Rn(t,t.return,ot)}}break;case 3:if(Xe(r,t),Nt(t),u&4&&a!==null&&a.memoizedState.isDehydrated)try{be(r.containerInfo)}catch(ot){Rn(t,t.return,ot)}break;case 4:Xe(r,t),Nt(t);break;case 13:Xe(r,t),Nt(t),f=t.child,f.flags&8192&&(y=f.memoizedState!==null,f.stateNode.isHidden=y,!y||f.alternate!==null&&f.alternate.memoizedState!==null||(Ha=At())),u&4&&lt(t);break;case 22:if(Pe=a!==null&&a.memoizedState!==null,t.mode&1?(s=(pe=s)||Pe,Xe(r,t),s=pe):Xe(r,t),Nt(t),u&8192){if(pe=t.memoizedState!==null,(t.stateNode.isHidden=pe)&&!Pe&&(t.mode&1)!==0)for(o=t,Pe=t.child;Pe!==null;){for(Ie=o=Pe;o!==null;){switch(je=o,Ze=je.child,je.tag){case 0:case 11:case 14:case 15:k(4,je,je.return);break;case 1:h(je,je.return);var st=je.stateNode;if(typeof st.componentWillUnmount=="function"){u=je,a=je.return;try{r=u,st.props=r.memoizedProps,st.state=r.memoizedState,st.componentWillUnmount()}catch(ot){Rn(u,a,ot)}}break;case 5:h(je,je.return);break;case 22:if(je.memoizedState!==null){rr(Ie);continue}}Ze!==null?(Ze.return=je,o=Ze):rr(Ie)}Pe=Pe.sibling}e:for(Pe=null,Ie=t;;){if(Ie.tag===5){if(Pe===null){Pe=Ie;try{f=Ie.stateNode,pe?(y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):($=Ie.stateNode,J=Ie.memoizedProps.style,E=J!=null&&J.hasOwnProperty("display")?J.display:null,$.style.display=Cr("display",E))}catch(ot){Rn(t,t.return,ot)}}}else if(Ie.tag===6){if(Pe===null)try{Ie.stateNode.nodeValue=pe?"":Ie.memoizedProps}catch(ot){Rn(t,t.return,ot)}}else if((Ie.tag!==22&&Ie.tag!==23||Ie.memoizedState===null||Ie===t)&&Ie.child!==null){Ie.child.return=Ie,Ie=Ie.child;continue}if(Ie===t)break e;for(;Ie.sibling===null;){if(Ie.return===null||Ie.return===t)break e;Pe===Ie&&(Pe=null),Ie=Ie.return}Pe===Ie&&(Pe=null),Ie.sibling.return=Ie.return,Ie=Ie.sibling}}break;case 19:Xe(r,t),Nt(t),u&4&&lt(t);break;case 21:break;default:Xe(r,t),Nt(t)}}function Nt(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(Q(a)){var u=a;break e}a=a.return}throw Error(d(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(pt(f,""),u.flags&=-33);var y=fe(t);Ee(t,y,f);break;case 3:case 4:var E=u.stateNode.containerInfo,$=fe(t);ve(t,$,E);break;default:throw Error(d(161))}}catch(J){Rn(t,t.return,J)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Bn(t,r,a){o=t,rn(t)}function rn(t,r,a){for(var u=(t.mode&1)!==0;o!==null;){var f=o,y=f.child;if(f.tag===22&&u){var E=f.memoizedState!==null||n;if(!E){var $=f.alternate,J=$!==null&&$.memoizedState!==null||s;$=n;var pe=s;if(n=E,(s=J)&&!pe)for(o=f;o!==null;)E=o,J=E.child,E.tag===22&&E.memoizedState!==null?yn(f):J!==null?(J.return=E,o=J):yn(f);for(;y!==null;)o=y,rn(y),y=y.sibling;o=f,n=$,s=pe}vr(t)}else(f.subtreeFlags&8772)!==0&&y!==null?(y.return=f,o=y):vr(t)}}function vr(t){for(;o!==null;){var r=o;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:s||M(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!s)if(a===null)u.componentDidMount();else{var f=r.elementType===r.type?a.memoizedProps:gr(r.type,a.memoizedProps);u.componentDidUpdate(f,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var y=r.updateQueue;y!==null&&Vs(r,y,u);break;case 3:var E=r.updateQueue;if(E!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Vs(r,E,a)}break;case 5:var $=r.stateNode;if(a===null&&r.flags&4){a=$;var J=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":J.autoFocus&&a.focus();break;case"img":J.src&&(a.src=J.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var pe=r.alternate;if(pe!==null){var Pe=pe.memoizedState;if(Pe!==null){var Ie=Pe.dehydrated;Ie!==null&&be(Ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}s||r.flags&512&&B(r)}catch(je){Rn(r,r.return,je)}}if(r===t){o=null;break}if(a=r.sibling,a!==null){a.return=r.return,o=a;break}o=r.return}}function rr(t){for(;o!==null;){var r=o;if(r===t){o=null;break}var a=r.sibling;if(a!==null){a.return=r.return,o=a;break}o=r.return}}function yn(t){for(;o!==null;){var r=o;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{M(4,r)}catch(J){Rn(r,a,J)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var f=r.return;try{u.componentDidMount()}catch(J){Rn(r,f,J)}}var y=r.return;try{B(r)}catch(J){Rn(r,y,J)}break;case 5:var E=r.return;try{B(r)}catch(J){Rn(r,E,J)}}}catch(J){Rn(r,r.return,J)}if(r===t){o=null;break}var $=r.sibling;if($!==null){$.return=r.return,o=$;break}o=r.return}}var xr=Math.ceil,Nn=K.ReactCurrentDispatcher,vn=K.ReactCurrentOwner,zt=K.ReactCurrentBatchConfig,dt=0,Ft=null,sn=null,ln=0,Kt=0,br=ci(0),jt=0,so=null,wr=0,Ii=0,es=0,An=null,Un=null,Ha=0,Fl=1/0,oo=null,Kc=!1,rp=null,Go=null,Gc=!1,Yo=null,Yc=0,Uu=0,ip=null,Vc=-1,Jc=0;function Fr(){return(dt&6)!==0?At():Vc!==-1?Vc:Vc=At()}function Vo(t){return(t.mode&1)===0?1:(dt&2)!==0&&ln!==0?ln&-ln:jc.transition!==null?(Jc===0&&(Jc=ra()),Jc):(t=Et,t!==0||(t=window.event,t=t===void 0?16:wi(t.type)),t)}function ts(t,r,a,u){if(50<Uu)throw Uu=0,ip=null,Error(d(185));$n(t,a,u),((dt&2)===0||t!==Ft)&&(t===Ft&&((dt&2)===0&&(Ii|=a),jt===4&&Jo(t,ln)),Zr(t,u),a===1&&dt===0&&(r.mode&1)===0&&(Fl=At()+500,gl&&bs()))}function Zr(t,r){var a=t.callbackNode;gt(t,r);var u=oi(t,t===Ft?ln:0);if(u===0)a!==null&&zi(a),t.callbackNode=null,t.callbackPriority=0;else if(r=u&-u,t.callbackPriority!==r){if(a!=null&&zi(a),r===1)t.tag===0?_c(mh.bind(null,t)):Ni(mh.bind(null,t)),kc(function(){(dt&6)===0&&bs()}),a=null;else{switch(Wi(u)){case 1:a=bi;break;case 4:a=Xt;break;case 16:a=Qe;break;case 536870912:a=cr;break;default:a=Qe}a=Sh(a,fh.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function fh(t,r){if(Vc=-1,Jc=0,(dt&6)!==0)throw Error(d(327));var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var u=oi(t,t===Ft?ln:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||r)r=Xc(t,u);else{r=u;var f=dt;dt|=2;var y=yh();(Ft!==t||ln!==r)&&(oo=null,Fl=At()+500,Ua(t,r));do try{jm();break}catch($){gh(t,$)}while(!0);wl(),Nn.current=y,dt=f,sn!==null?r=0:(Ft=null,ln=0,r=jt)}if(r!==0){if(r===2&&(f=go(t),f!==0&&(u=f,r=sp(t,f))),r===1)throw a=so,Ua(t,0),Jo(t,u),Zr(t,At()),a;if(r===6)Jo(t,u);else{if(f=t.current.alternate,(u&30)===0&&!Tm(f)&&(r=Xc(t,u),r===2&&(y=go(t),y!==0&&(u=y,r=sp(t,y))),r===1))throw a=so,Ua(t,0),Jo(t,u),Zr(t,At()),a;switch(t.finishedWork=f,t.finishedLanes=u,r){case 0:case 1:throw Error(d(345));case 2:qa(t,Un,oo);break;case 3:if(Jo(t,u),(u&130023424)===u&&(r=Ha+500-At(),10<r)){if(oi(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){Fr(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Vi(qa.bind(null,t,Un,oo),r);break}qa(t,Un,oo);break;case 4:if(Jo(t,u),(u&4194240)===u)break;for(r=t.eventTimes,f=-1;0<u;){var E=31-he(u);y=1<<E,E=r[E],E>f&&(f=E),u&=~y}if(u=f,u=At()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*xr(u/1960))-u,10<u){t.timeoutHandle=Vi(qa.bind(null,t,Un,oo),u);break}qa(t,Un,oo);break;case 5:qa(t,Un,oo);break;default:throw Error(d(329))}}}return Zr(t,At()),t.callbackNode===a?fh.bind(null,t):null}function sp(t,r){var a=An;return t.current.memoizedState.isDehydrated&&(Ua(t,r).flags|=256),t=Xc(t,r),t!==2&&(r=Un,Un=a,r!==null&&op(r)),t}function op(t){Un===null?Un=t:Un.push.apply(Un,t)}function Tm(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var f=a[u],y=f.getSnapshot;f=f.value;try{if(!Cn(y(),f))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Jo(t,r){for(r&=~es,r&=~Ii,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-he(r),u=1<<a;t[a]=-1,r&=~u}}function mh(t){if((dt&6)!==0)throw Error(d(327));Wl();var r=oi(t,0);if((r&1)===0)return Zr(t,At()),null;var a=Xc(t,r);if(t.tag!==0&&a===2){var u=go(t);u!==0&&(r=u,a=sp(t,u))}if(a===1)throw a=so,Ua(t,0),Jo(t,r),Zr(t,At()),a;if(a===6)throw Error(d(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,qa(t,Un,oo),Zr(t,At()),null}function ap(t,r){var a=dt;dt|=1;try{return t(r)}finally{dt=a,dt===0&&(Fl=At()+500,gl&&bs())}}function Ba(t){Yo!==null&&Yo.tag===0&&(dt&6)===0&&Wl();var r=dt;dt|=1;var a=zt.transition,u=Et;try{if(zt.transition=null,Et=1,t)return t()}finally{Et=u,zt.transition=a,dt=r,(dt&6)===0&&bs()}}function lp(){Kt=br.current,tn(br)}function Ua(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Sa(a)),sn!==null)for(a=sn.return;a!==null;){var u=a;switch(vl(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Eo();break;case 3:Pi(),tn(fr),tn(Gn),Xs();break;case 5:xu(u);break;case 4:Pi();break;case 13:tn(an);break;case 19:tn(an);break;case 10:Wn(u.type._context);break;case 22:case 23:lp()}a=a.return}if(Ft=t,sn=t=Xo(t.current,null),ln=Kt=r,jt=0,so=null,es=Ii=wr=0,Un=An=null,Ss!==null){for(r=0;r<Ss.length;r++)if(a=Ss[r],u=a.interleaved,u!==null){a.interleaved=null;var f=u.next,y=a.pending;if(y!==null){var E=y.next;y.next=f,u.next=E}a.pending=u}Ss=null}return t}function gh(t,r){do{var a=sn;try{if(wl(),_l.current=Ma,Ra){for(var u=pn.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Ra=!1}if(Qs=0,Mt=Hn=pn=null,Ia=!1,Oa=0,vn.current=null,a===null||a.return===null){jt=1,so=r,sn=null;break}e:{var y=t,E=a.return,$=a,J=r;if(r=ln,$.flags|=32768,J!==null&&typeof J=="object"&&typeof J.then=="function"){var pe=J,Pe=$,Ie=Pe.tag;if((Pe.mode&1)===0&&(Ie===0||Ie===11||Ie===15)){var je=Pe.alternate;je?(Pe.updateQueue=je.updateQueue,Pe.memoizedState=je.memoizedState,Pe.lanes=je.lanes):(Pe.updateQueue=null,Pe.memoizedState=null)}var Ze=Du(E);if(Ze!==null){Ze.flags&=-257,ro(Ze,E,$,y,r),Ze.mode&1&&Wc(y,pe,r),r=Ze,J=pe;var st=r.updateQueue;if(st===null){var ot=new Set;ot.add(J),r.updateQueue=ot}else st.add(J);break e}else{if((r&1)===0){Wc(y,pe,r),up();break e}J=Error(d(426))}}else if(nn&&$.mode&1){var qn=Du(E);if(qn!==null){(qn.flags&65536)===0&&(qn.flags|=256),ro(qn,E,$,y,r),Ro(no(J,$));break e}}y=J=no(J,$),jt!==4&&(jt=2),An===null?An=[y]:An.push(y),y=E;do{switch(y.tag){case 3:y.flags|=65536,r&=-r,y.lanes|=r;var le=El(y,J,r);Mo(y,le);break e;case 1:$=J;var ee=y.type,ce=y.stateNode;if((y.flags&128)===0&&(typeof ee.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Go===null||!Go.has(ce)))){y.flags|=65536,r&=-r,y.lanes|=r;var ze=Mu(y,$,r);Mo(y,ze);break e}}y=y.return}while(y!==null)}xh(a)}catch(ut){r=ut,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function yh(){var t=Nn.current;return Nn.current=Ma,t===null?Ma:t}function up(){(jt===0||jt===3||jt===2)&&(jt=4),Ft===null||(wr&268435455)===0&&(Ii&268435455)===0||Jo(Ft,ln)}function Xc(t,r){var a=dt;dt|=2;var u=yh();(Ft!==t||ln!==r)&&(oo=null,Ua(t,r));do try{Nm();break}catch(f){gh(t,f)}while(!0);if(wl(),dt=a,Nn.current=u,sn!==null)throw Error(d(261));return Ft=null,ln=0,jt}function Nm(){for(;sn!==null;)vh(sn)}function jm(){for(;sn!==null&&!ii();)vh(sn)}function vh(t){var r=kh(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,r===null?xh(t):sn=r,vn.current=null}function xh(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=zl(a,r,Kt),a!==null){sn=a;return}}else{if(a=e(a,r),a!==null){a.flags&=32767,sn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,sn=null;return}}if(r=r.sibling,r!==null){sn=r;return}sn=r=t}while(r!==null);jt===0&&(jt=5)}function qa(t,r,a){var u=Et,f=zt.transition;try{zt.transition=null,Et=1,Em(t,r,a,u)}finally{zt.transition=f,Et=u}return null}function Em(t,r,a,u){do Wl();while(Yo!==null);if((dt&6)!==0)throw Error(d(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(d(177));t.callbackNode=null,t.callbackPriority=0;var y=a.lanes|a.childLanes;if(Ps(t,y),t===Ft&&(sn=Ft=null,ln=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Gc||(Gc=!0,Sh(Qe,function(){return Wl(),null})),y=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||y){y=zt.transition,zt.transition=null;var E=Et;Et=1;var $=dt;dt|=4,vn.current=null,w(t,a),kt(a,t),Gd(Yi),ct=!!fl,Yi=fl=null,t.current=a,Bn(a),xi(),dt=$,Et=E,zt.transition=y}else t.current=a;if(Gc&&(Gc=!1,Yo=t,Yc=f),y=t.pendingLanes,y===0&&(Go=null),W(a.stateNode),Zr(t,At()),r!==null)for(u=t.onRecoverableError,a=0;a<r.length;a++)f=r[a],u(f.value,{componentStack:f.stack,digest:f.digest});if(Kc)throw Kc=!1,t=rp,rp=null,t;return(Yc&1)!==0&&t.tag!==0&&Wl(),y=t.pendingLanes,(y&1)!==0?t===ip?Uu++:(Uu=0,ip=t):Uu=0,bs(),null}function Wl(){if(Yo!==null){var t=Wi(Yc),r=zt.transition,a=Et;try{if(zt.transition=null,Et=16>t?16:t,Yo===null)var u=!1;else{if(t=Yo,Yo=null,Yc=0,(dt&6)!==0)throw Error(d(331));var f=dt;for(dt|=4,o=t.current;o!==null;){var y=o,E=y.child;if((o.flags&16)!==0){var $=y.deletions;if($!==null){for(var J=0;J<$.length;J++){var pe=$[J];for(o=pe;o!==null;){var Pe=o;switch(Pe.tag){case 0:case 11:case 15:k(8,Pe,y)}var Ie=Pe.child;if(Ie!==null)Ie.return=Pe,o=Ie;else for(;o!==null;){Pe=o;var je=Pe.sibling,Ze=Pe.return;if(te(Pe),Pe===pe){o=null;break}if(je!==null){je.return=Ze,o=je;break}o=Ze}}}var st=y.alternate;if(st!==null){var ot=st.child;if(ot!==null){st.child=null;do{var qn=ot.sibling;ot.sibling=null,ot=qn}while(ot!==null)}}o=y}}if((y.subtreeFlags&2064)!==0&&E!==null)E.return=y,o=E;else e:for(;o!==null;){if(y=o,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:k(9,y,y.return)}var le=y.sibling;if(le!==null){le.return=y.return,o=le;break e}o=y.return}}var ee=t.current;for(o=ee;o!==null;){E=o;var ce=E.child;if((E.subtreeFlags&2064)!==0&&ce!==null)ce.return=E,o=ce;else e:for(E=ee;o!==null;){if($=o,($.flags&2048)!==0)try{switch($.tag){case 0:case 11:case 15:M(9,$)}}catch(ut){Rn($,$.return,ut)}if($===E){o=null;break e}var ze=$.sibling;if(ze!==null){ze.return=$.return,o=ze;break e}o=$.return}}if(dt=f,bs(),_&&typeof _.onPostCommitFiberRoot=="function")try{_.onPostCommitFiberRoot(On,t)}catch{}u=!0}return u}finally{Et=a,zt.transition=r}}return!1}function bh(t,r,a){r=no(a,r),r=El(t,r,1),t=pi(t,r,1),r=Fr(),t!==null&&($n(t,1,r),Zr(t,r))}function Rn(t,r,a){if(t.tag===3)bh(t,t,a);else for(;r!==null;){if(r.tag===3){bh(r,t,a);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Go===null||!Go.has(u))){t=no(a,t),t=Mu(r,t,1),r=pi(r,t,1),t=Fr(),r!==null&&($n(r,1,t),Zr(r,t));break}}r=r.return}}function Lm(t,r,a){var u=t.pingCache;u!==null&&u.delete(r),r=Fr(),t.pingedLanes|=t.suspendedLanes&a,Ft===t&&(ln&a)===a&&(jt===4||jt===3&&(ln&130023424)===ln&&500>At()-Ha?Ua(t,0):es|=a),Zr(t,r)}function wh(t,r){r===0&&((t.mode&1)===0?r=1:(r=en,en<<=1,(en&130023424)===0&&(en=4194304)));var a=Fr();t=Ei(t,r),t!==null&&($n(t,r,a),Zr(t,a))}function Pm(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),wh(t,a)}function Am(t,r){var a=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(d(314))}u!==null&&u.delete(r),wh(t,a)}var kh;kh=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||fr.current)Zn=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return Zn=!1,np(t,r,a);Zn=(t.flags&131072)!==0}else Zn=!1,nn&&(r.flags&1048576)!==0&&yl(r,Pr,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Dl(t,r),t=r.pendingProps;var f=jo(r,Gn.current);Gs(r,a),f=Nl(null,r,u,t,f,a);var y=bu();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,tr(u)?(y=!0,Lo(r)):y=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,kl(r),f.updater=za,r.stateNode=f,f._reactInternals=r,Ru(r,u,t,a),r=Ko(null,r,u,!0,y,a)):(r.tag=0,nn&&y&&qs(r),yr(null,r,f,a),r=r.child),r;case 16:u=r.elementType;e:{switch(Dl(t,r),t=r.pendingProps,f=u._init,u=f(u._payload),r.type=u,f=r.tag=Im(u),t=gr(u,t),f){case 0:r=io(null,r,u,t,a);break e;case 1:r=Qr(null,r,u,t,a);break e;case 11:r=Bc(null,r,u,t,a);break e;case 14:r=Uc(null,r,u,gr(u.type,t),a);break e}throw Error(d(306,u,""))}return r;case 0:return u=r.type,f=r.pendingProps,f=r.elementType===u?f:gr(u,f),io(t,r,u,f,a);case 1:return u=r.type,f=r.pendingProps,f=r.elementType===u?f:gr(u,f),Qr(t,r,u,f,a);case 3:e:{if(Pl(r),t===null)throw Error(d(387));u=r.pendingProps,y=r.memoizedState,f=y.element,Ys(t,r),Sl(r,u,null,a);var E=r.memoizedState;if(u=E.element,y.isDehydrated)if(y={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=y,r.memoizedState=y,r.flags&256){f=no(Error(d(423)),r),r=zu(t,r,u,a,f);break e}else if(u!==f){f=no(Error(d(424)),r),r=zu(t,r,u,a,f);break e}else for(Pn=ys(r.stateNode.containerInfo.firstChild),mr=r,nn=!0,Vr=null,a=Ea(r,null,u,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ao(),u===f){r=Ar(t,r,a);break e}yr(t,r,u,a)}r=r.child}return r;case 5:return vu(r),t===null&&xl(r),u=r.type,f=r.pendingProps,y=t!==null?t.memoizedProps:null,E=f.children,Fs(u,f)?E=null:y!==null&&Fs(u,y)&&(r.flags|=32),Ll(t,r),yr(t,r,E,a),r.child;case 6:return t===null&&xl(r),null;case 13:return Il(t,r,a);case 4:return Js(r,r.stateNode.containerInfo),u=r.pendingProps,t===null?r.child=ks(r,null,u,a):yr(t,r,u,a),r.child;case 11:return u=r.type,f=r.pendingProps,f=r.elementType===u?f:gr(u,f),Bc(t,r,u,f,a);case 7:return yr(t,r,r.pendingProps,a),r.child;case 8:return yr(t,r,r.pendingProps.children,a),r.child;case 12:return yr(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(u=r.type._context,f=r.pendingProps,y=r.memoizedProps,E=f.value,Qt(La,u._currentValue),u._currentValue=E,y!==null)if(Cn(y.value,E)){if(y.children===f.children&&!fr.current){r=Ar(t,r,a);break e}}else for(y=r.child,y!==null&&(y.return=r);y!==null;){var $=y.dependencies;if($!==null){E=y.child;for(var J=$.firstContext;J!==null;){if(J.context===u){if(y.tag===1){J=Li(-1,a&-a),J.tag=2;var pe=y.updateQueue;if(pe!==null){pe=pe.shared;var Pe=pe.pending;Pe===null?J.next=J:(J.next=Pe.next,Pe.next=J),pe.pending=J}}y.lanes|=a,J=y.alternate,J!==null&&(J.lanes|=a),Oo(y.return,a,r),$.lanes|=a;break}J=J.next}}else if(y.tag===10)E=y.type===r.type?null:y.child;else if(y.tag===18){if(E=y.return,E===null)throw Error(d(341));E.lanes|=a,$=E.alternate,$!==null&&($.lanes|=a),Oo(E,a,r),E=y.sibling}else E=y.child;if(E!==null)E.return=y;else for(E=y;E!==null;){if(E===r){E=null;break}if(y=E.sibling,y!==null){y.return=E.return,E=y;break}E=E.return}y=E}yr(t,r,f.children,a),r=r.child}return r;case 9:return f=r.type,u=r.pendingProps.children,Gs(r,a),f=zr(f),u=u(f),r.flags|=1,yr(t,r,u,a),r.child;case 14:return u=r.type,f=gr(u,r.pendingProps),f=gr(u.type,f),Uc(t,r,u,f,a);case 15:return Zt(t,r,r.type,r.pendingProps,a);case 17:return u=r.type,f=r.pendingProps,f=r.elementType===u?f:gr(u,f),Dl(t,r),r.tag=1,tr(u)?(t=!0,Lo(r)):t=!1,Gs(r,a),Dc(r,u,f),Ru(r,u,f,a),Ko(null,r,u,!0,t,a);case 19:return Hu(t,r,a);case 22:return qc(t,r,a)}throw Error(d(156,r.tag))};function Sh(t,r){return Er(t,r)}function Rm(t,r,a,u){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oi(t,r,a,u){return new Rm(t,r,a,u)}function cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Im(t){if(typeof t=="function")return cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ce)return 11;if(t===j)return 14}return 2}function Xo(t,r){var a=t.alternate;return a===null?(a=Oi(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Qc(t,r,a,u,f,y){var E=2;if(u=t,typeof t=="function")cp(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case ue:return $a(a.children,f,y,r);case we:E=8,f|=8;break;case Ue:return t=Oi(12,a,r,f|2),t.elementType=Ue,t.lanes=y,t;case se:return t=Oi(13,a,r,f),t.elementType=se,t.lanes=y,t;case ye:return t=Oi(19,a,r,f),t.elementType=ye,t.lanes=y,t;case q:return Zc(a,f,y,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Le:E=10;break e;case oe:E=9;break e;case Ce:E=11;break e;case j:E=14;break e;case X:E=16,u=null;break e}throw Error(d(130,t==null?t:typeof t,""))}return r=Oi(E,a,r,f),r.elementType=t,r.type=u,r.lanes=y,r}function $a(t,r,a,u){return t=Oi(7,t,u,r),t.lanes=a,t}function Zc(t,r,a,u){return t=Oi(22,t,u,r),t.elementType=q,t.lanes=a,t.stateNode={isHidden:!1},t}function dp(t,r,a){return t=Oi(6,t,null,r),t.lanes=a,t}function pp(t,r,a){return r=Oi(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Om(t,r,a,u,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function hp(t,r,a,u,f,y,E,$,J){return t=new Om(t,r,a,$,J),r===1?(r=1,y===!0&&(r|=8)):r=0,y=Oi(3,null,null,r),t.current=y,y.stateNode=t,y.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kl(y),t}function Mm(t,r,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:u==null?null:""+u,children:t,containerInfo:r,implementation:a}}function _h(t){if(!t)return xs;t=t._reactInternals;e:{if(kn(t)!==t||t.tag!==1)throw Error(d(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(tr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(d(171))}if(t.tag===1){var a=t.type;if(tr(a))return fu(t,a,r)}return r}function Ch(t,r,a,u,f,y,E,$,J){return t=hp(a,u,!0,t,f,y,E,$,J),t.context=_h(null),a=t.current,u=Fr(),f=Vo(a),y=Li(u,f),y.callback=r??null,pi(a,y,f),t.current.lanes=f,$n(t,f,u),Zr(t,u),t}function ed(t,r,a,u){var f=r.current,y=Fr(),E=Vo(f);return a=_h(a),r.context===null?r.context=a:r.pendingContext=a,r=Li(y,E),r.payload={element:t},u=u===void 0?null:u,u!==null&&(r.callback=u),t=pi(f,r,E),t!==null&&(ts(t,f,E,y),Aa(t,f,E)),E}function td(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Th(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function fp(t,r){Th(t,r),(t=t.alternate)&&Th(t,r)}function Dm(){return null}var Nh=typeof reportError=="function"?reportError:function(t){console.error(t)};function mp(t){this._internalRoot=t}nd.prototype.render=mp.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(d(409));ed(t,r,null,null)},nd.prototype.unmount=mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Ba(function(){ed(null,t,null,null)}),r[Ji]=null}};function nd(t){this._internalRoot=t}nd.prototype.unstable_scheduleHydration=function(t){if(t){var r=ia();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Mr.length&&r!==0&&r<Mr[a].priority;a++);Mr.splice(a,0,t),a===0&&vo(t)}};function gp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jh(){}function zm(t,r,a,u,f){if(f){if(typeof u=="function"){var y=u;u=function(){var pe=td(E);y.call(pe)}}var E=Ch(r,u,t,0,null,!1,!1,"",jh);return t._reactRootContainer=E,t[Ji]=E.current,fs(t.nodeType===8?t.parentNode:t),Ba(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var $=u;u=function(){var pe=td(J);$.call(pe)}}var J=hp(t,0,!1,null,null,!1,!1,"",jh);return t._reactRootContainer=J,t[Ji]=J.current,fs(t.nodeType===8?t.parentNode:t),Ba(function(){ed(r,J,a,u)}),J}function id(t,r,a,u,f){var y=a._reactRootContainer;if(y){var E=y;if(typeof f=="function"){var $=f;f=function(){var J=td(E);$.call(J)}}ed(r,E,t,f)}else E=zm(a,r,t,f,u);return td(E)}Kr=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Sn(r.pendingLanes);a!==0&&(as(r,a|1),Zr(r,At()),(dt&6)===0&&(Fl=At()+500,bs()))}break;case 13:Ba(function(){var u=Ei(t,1);if(u!==null){var f=Fr();ts(u,t,1,f)}}),fp(t,1)}},ai=function(t){if(t.tag===13){var r=Ei(t,134217728);if(r!==null){var a=Fr();ts(r,t,134217728,a)}fp(t,134217728)}},dr=function(t){if(t.tag===13){var r=Vo(t),a=Ei(t,r);if(a!==null){var u=Fr();ts(a,t,r,u)}fp(t,r)}},ia=function(){return Et},ls=function(t,r){var a=Et;try{return Et=t,r()}finally{Et=a}},Tr=function(t,r,a){switch(r){case"input":if(rt(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var u=a[r];if(u!==t&&u.form===t.form){var f=gn(u);if(!f)throw Error(d(90));Ht(u),rt(u,f)}}}break;case"textarea":me(t,a);break;case"select":r=a.value,r!=null&&ht(t,!!a.multiple,r,!1)}},ar=ap,wn=Ba;var Fm={usingClientEntryPoint:!1,Events:[dn,Tn,gn,jn,un,ap]},qu={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wm={bundleType:qu.bundleType,version:qu.version,rendererPackageName:qu.rendererPackageName,rendererConfig:qu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jr(t),t===null?null:t.stateNode},findFiberByHostInstance:qu.findFiberByHostInstance||Dm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sd.isDisabled&&sd.supportsFiber)try{On=sd.inject(Wm),_=sd}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fm,ei.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gp(r))throw Error(d(200));return Mm(t,r,null,a)},ei.createRoot=function(t,r){if(!gp(t))throw Error(d(299));var a=!1,u="",f=Nh;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=hp(t,1,!1,null,null,a,!1,u,f),t[Ji]=r.current,fs(t.nodeType===8?t.parentNode:t),new mp(r)},ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=jr(r),t=t===null?null:t.stateNode,t},ei.flushSync=function(t){return Ba(t)},ei.hydrate=function(t,r,a){if(!rd(r))throw Error(d(200));return id(null,t,r,!0,a)},ei.hydrateRoot=function(t,r,a){if(!gp(t))throw Error(d(405));var u=a!=null&&a.hydratedSources||null,f=!1,y="",E=Nh;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(y=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),r=Ch(r,null,t,1,a??null,f,!1,y,E),t[Ji]=r.current,fs(t),u)for(t=0;t<u.length;t++)a=u[t],f=a._getVersion,f=f(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,f]:r.mutableSourceEagerHydrationData.push(a,f);return new nd(r)},ei.render=function(t,r,a){if(!rd(r))throw Error(d(200));return id(null,t,r,!1,a)},ei.unmountComponentAtNode=function(t){if(!rd(t))throw Error(d(40));return t._reactRootContainer?(Ba(function(){id(null,null,t,!1,function(){t._reactRootContainer=null,t[Ji]=null})}),!0):!1},ei.unstable_batchedUpdates=ap,ei.unstable_renderSubtreeIntoContainer=function(t,r,a,u){if(!rd(a))throw Error(d(200));if(t==null||t._reactInternals===void 0)throw Error(d(38));return id(t,r,a,!1,u)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var Mh;function Xm(){if(Mh)return xp.exports;Mh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),xp.exports=Jm(),xp.exports}var Dh;function Qm(){if(Dh)return od;Dh=1;var l=Xm();return od.createRoot=l.createRoot,od.hydrateRoot=l.hydrateRoot,od}var Zm=Qm();const eg=[["Avery","Morgan","averym","Avery","p1"],["Jordan","Brooks","jbrooks17","Jordan Brooks","p1"],["Taylor","Reed","treed","T. Reed","p1"],["Casey","Nguyen","cnguyen","Casey","p1"],["Riley","Davis","rileyd","Riley","p1"],["Maya","Patel","maya-p","Maya","p3"],["Cameron","Lee","clee","Cameron Lee","p3"],["Sydney","Wilson","sydneyw","Sydney","p3"],["Quinn","Martinez","qmartinez","Quinn","p3"],["Bailey","Adams","bailey_a","Bailey","p5"],["Sam","Rivera","rivera-s","Sam","p5"],["Charlie","Brown","charlieb","Charlie","p6"],["Drew","Johnson","drewj","Drew","p6"],["Alex","Kim","alexk","Alex","p7"],["Robin","Clark","robin-c","Robin","p7"],["Jamie","Flores","jflores","Jamie","p8"]],vd=eg.map(([l,c,d,g,x],b)=>({id:`sample-${b+1}`,first:l,last:c,sheetName:b===3||b===11?null:`${l} ${c}`,github:d,studentName:g,sections:b===0?["p1","p3"]:[x],status:b%5===0?"Active now":b%4===0?"Viewing page":"No recent signal",current:b%3===0?"Strings and Variables":b%3===1?"Format a Summary":"Intro to Arrays",assignments:[{id:"strings",name:"Strings and Variables",type:"Lesson",status:"Completed",score:b%4===0?null:8+b%3,possible:10,submitted:"2026-11-02"},{id:"summary",name:"Format a Summary",type:"Challenge",status:b%4===0?"Started":"Completed",score:b%4===0?null:11+b%5,possible:15,submitted:"2026-11-03"},{id:"decisions",name:"Decision Tree",type:"Challenge",status:b%3===0?"Submitted":"Needs revision",score:b%3===0?10:null,possible:20,submitted:"2026-10-28"},{id:"reflection",name:"Debugging Reflection",type:"Lesson",status:"Practice completed",score:null,possible:5,submitted:"2026-10-26"}],weekly:{"2026-11-02":b%4===0?0:19+b%6,"2026-10-26":b%3===0?12:8+b%5}})),tg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function xd(l=new Date){const c=Object.fromEntries(tg.formatToParts(l).filter(g=>g.type!=="literal").map(g=>[g.type,g.value])),d=new Date(Date.UTC(Number(c.year),Number(c.month)-1,Number(c.day)));return d.setUTCDate(d.getUTCDate()-(d.getUTCDay()+6)%7),d.toISOString().slice(0,10)}function Ip(l=new Date,c=8){const d=new Date(xd(l)+"T12:00:00Z");return Array.from({length:c},(g,x)=>{const b=new Date(d);return b.setUTCDate(b.getUTCDate()-x*7),b.toISOString().slice(0,10)})}const ql=l=>new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"America/Chicago"}),ng=(l,c,d)=>`${l}|${c}|${d}`;function rg({response:l,type:c,aiUse:d,aiDetails:g}){return["essay","logic-puzzle"].includes(c)?String(l).trim().length<10?"Write your answer and explain your thinking.":["none","disclosed"].includes(d)?d==="disclosed"&&String(g).trim().length<5?"Describe which parts involved AI.":"":"Complete the AI-use declaration.":"Select an essay or logic puzzle."}const ig=[{id:"seed-journal-1",sectionId:"p1",studentId:"sample-2",studentName:"Jordan Brooks",courseId:"computer-science-1",week:xd(),type:"essay",response:"When I debug code, I first reproduce the problem and read the error carefully. Next I try one small change and test again. I keep notes so I can explain what fixed the problem and why.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()},{id:"seed-journal-2",sectionId:"p1",studentId:"sample-3",studentName:"Taylor Reed",courseId:"computer-science-1",week:xd(),type:"logic-puzzle",response:"The differences are 4, 6, 8, and 10. The next difference is 12, so the next number is 42. This also follows the pattern n(n+1), starting at n = 1.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()}],Ns={"game-programming":[{id:"csharp-foundations",title:"C# Foundations",description:"Build the logic behind games.",lessons:["csharp-variables","csharp-conditionals"]},{id:"unity-systems",title:"Unity Gameplay",description:"Connect scripts and game mechanics.",lessons:["unity-colliders","unity-player-controller","unity-score"]}],"mobile-app-dev":[{id:"web-basics",title:"Web Foundations",description:"Create and style interface elements.",lessons:["web-layout","web-events"]},{id:"react-foundations",title:"React Essentials",description:"Build reusable and interactive UI.",lessons:["react-components","react-state"]}],uil:[{id:"java-language",title:"Java Language & Tracing",description:"Reason about loops and variables.",lessons:["uil-loops","uil-methods"]},{id:"java-data",title:"Data Structures",description:"Trace arrays and string operations.",lessons:["uil-arrays","uil-strings"]}],"tsi-math":[{id:"tsi-quantitative",title:"Quantitative Reasoning",description:"Rates, ratios, percentages, and proportions.",lessons:["tsi-ratios","tsi-percents"]},{id:"tsi-algebra",title:"Algebraic Reasoning",description:"Solve equations and interpret graphs.",lessons:["tsi-equations","tsi-slope"]}],capstone:[{id:"capstone-discover",title:"Discover the Problem",description:"Investigate a need worth solving.",lessons:["capstone-discovery","capstone-interviews"]},{id:"capstone-validate",title:"Prototype & Validate",description:"Turn evidence into an iterated prototype.",lessons:["capstone-prototype","capstone-feedback"]}]},sg=[{id:"01-how-programs-work/01-first-message",unit:1,unitName:"How Programs Work",lesson:1,slug:"01-first-message",title:"Instructions and output",concept:"Output and strings",summary:"Tell a computer what to display using a simple Python instruction.",mode:"script",starter:`# Use print() to display the exact welcome message.
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
`}],og=[{id:"02-values-and-variables/01-meet-variables",unit:2,unitName:"Values, Variables & Expressions",lesson:1,slug:"01-meet-variables",title:"Names for changing information",concept:"Variables and assignment  ",summary:"Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.",mode:"script",starter:`# Name the player with a variable, then display the required message.
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
`}],ag=[{id:"03-functions-and-parameters/01-functions-return",unit:3,unitName:"Functions, Parameters & Return Values",lesson:1,slug:"01-functions-return",title:"Returning an answer",concept:"Function definitions and return  ",summary:"A function packages instructions into a reusable operation. A function can give a result back with `return`.",mode:"function",starter:`def increment_number(number):
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
`}],lg=[{id:"04-comparisons-and-boolean-logic/01-comparisons",unit:4,unitName:"Comparisons & Boolean Logic",lesson:1,slug:"01-comparisons",title:"Ask Python a question",concept:"Comparison operators and Boolean values  ",summary:"A comparison is a question that evaluates to a Boolean value: `True` or `False`.",mode:"function",starter:`def has_required_points(current, required):
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
`}],ug=[{id:"05-conditional-execution/01-first-if",unit:5,unitName:"Conditional Execution",lesson:1,slug:"01-first-if",title:"Make a choice with if",concept:"If statements and indentation  ",summary:"Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.",mode:"function",starter:`def classify_temperature(temperature):
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
`}],cg=[{id:"06-iteration/01-for-ranges",unit:6,unitName:"Iteration & Accumulation",lesson:1,slug:"01-for-ranges",title:"Repeat an instruction",concept:"For loops and ranges  ",summary:"A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.",mode:"script",starter:`# Use one loop to print the integers 1 through 4.
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
`}],dg=[{id:"07-strings-and-text/01-index-and-length",unit:7,unitName:"Strings & Text Processing",lesson:1,slug:"01-index-and-length",title:"Read characters by position",concept:"String indexing and length",summary:"A string is an ordered sequence of characters. Positions start at zero, and negative indexes count from the end.",mode:"function",starter:`def edge_letters(text):
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
`}],pg=[{id:"08-lists-and-collections/01-list-indexing",unit:8,unitName:"Lists & Collections",lesson:1,slug:"01-list-indexing",title:"Read values from a list",concept:"Lists, indexes, negative positions",summary:"A list stores several values in order, and each can be read using its position.",mode:"function",starter:`def end_points(values):
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
`}],hg=[{id:"09-dictionaries-and-data/01-keys-and-values",unit:9,unitName:"Dictionaries & Data",lesson:1,slug:"01-keys-and-values",title:"Look up information by key",concept:"Dictionary lookup and get",summary:"Dictionaries connect unique keys with values, letting a program retrieve information by name.",mode:"function",starter:`def price_for(prices, item):
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
`}],fg=[{id:"10-algorithms-and-testing/01-while-and-sentinels",unit:10,unitName:"Algorithms & Testing",lesson:1,slug:"01-while-and-sentinels",title:"Repeat until a stop signal",concept:"While loops and sentinel values",summary:"A `while` loop repeats until a condition changes, making it useful when the stopping point is part of the input.",mode:"function",starter:`def before_stop(events):
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
`}],mg=[...sg,...og,...ag,...lg,...ug,...cg,...dg,...pg,...hg,...fg],zf={"python-strings":{title:"Strings and Variables",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Create a greeting using a name and a favorite topic.",starter:`name = "Jordan"
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
`,console:"Run, Check and Submit are simulated in this React design lab."},"tsi-percents":{title:"Percents and Discounts",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Use percentages in everyday situations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-equations":{title:"Solve Linear Equations",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Solve a one-variable equation with inverse operations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-slope":{title:"Slope and Rate of Change",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Interpret slope from a table of values.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."}};function Ga(l){return typeof l=="string"?l:typeof(l==null?void 0:l.id)=="string"?l.id:""}function Es(l){return String((l==null?void 0:l.title)||(l==null?void 0:l.unitName)||(l==null?void 0:l.name)||"Lessons")}function rc(l,c=1){return(l==null?void 0:l.number)??(l==null?void 0:l.unit)??c}function rs(l){return((l==null?void 0:l.lessons)||[]).map(Ga).filter(Boolean)}function Zu(l){return Array.isArray(l==null?void 0:l.units)?l.units.flatMap(rs):Array.isArray(l==null?void 0:l.lessons)?l.lessons.map(Ga).filter(Boolean):[]}function gg(l,c){return((l==null?void 0:l.units)||[]).some(d=>rs(d).includes(c))}function ea(l,c,d=zf){var S,L;if(!c)return null;const g=((l==null?void 0:l.units)||[]).find(R=>rs(R).includes(c)),x=((g==null?void 0:g.lessons)||[]).find(R=>Ga(R)===c),b=typeof x=="object"&&x||((S=g==null?void 0:g.lessonMeta)==null?void 0:S[c])||((L=l==null?void 0:l.lessonRecords)==null?void 0:L[c])||{},C=(d==null?void 0:d[c])||{},N=String(b.title||b.name||C.title||c.split("/").at(-1));return{...C,...b,id:c,title:N,kind:b.kind||C.kind||"Lesson",difficulty:b.difficulty||C.difficulty||"",points:b.points??C.points??null,language:b.language||C.language||(l==null?void 0:l.language)||"text",challenge:b.challenge||b.summary||C.challenge||"",starter:b.starter||C.starter||"",console:C.console||(b.markdownSource?b.language==="python"?"Run Python to see your output. Checks use published examples only.":"Preview-only workspace. Use the production Playground for functional language runners and verified checks.":""),ready:!!(d!=null&&d[c])||typeof b.markdownSource=="string"&&b.starter!==void 0,isPublished:typeof b.markdownSource=="string"&&b.starter!==void 0}}function ta(l,c,d=zf){var g;return((g=ea(l,c,d))==null?void 0:g.title)||""}function Kl(l){const c=Array.isArray(l)?{lessons:l}:l||{},d=new Map,g=new Set,x=[],b=(N,S,L,R)=>{const O=String(N);let A=x.find(Y=>Y.id===O);return A||(A={id:O,title:String(S||"Lessons"),description:String(L||""),number:R,lessons:[]},x.push(A)),A},C=(N,S)=>{const L=Ga(S);!L||g.has(L)||(g.add(L),N.lessons.push(L),d.set(L,typeof S=="string"?{id:L}:{...S}))};return Array.isArray(c.units)?c.units.forEach((N,S)=>{const L=b(N.id||`unit-${S+1}`,Es(N),N.description||N.summary,rc(N,S+1));(N.lessons||[]).forEach(R=>C(L,R))}):Array.isArray(c.lessons)&&c.lessons.forEach((N,S)=>{if(!N||!Ga(N))return;const L=N.unit||null,R=Ga(N).indexOf("/"),O=L!=null?R>=0?Ga(N).slice(0,R):`unit-${L}`:N.competency?`topic-${String(N.competency).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`:"lessons",A=N.unitName||N.competency||"Lessons",Y=b(O,A,"",L??x.length+1);C(Y,N)}),{units:x,lessonRecords:Object.fromEntries(d),lessons:x.flatMap(rs)}}const kp=Kl(mg),ns=[{id:"computer-science-1",units:kp.units,lessonRecords:kp.lessonRecords,language:"python",publishedContent:!0,slug:"computer-science-1",label:"Computer Science I",short:"Python",glyph:"py",color:"#6366F1",description:"Build your problem-solving toolkit with Python.",lessons:kp.lessons,topics:["Variables","Strings","Formatting","Conditions","Lists"]},{id:"game-programming",units:Ns["game-programming"],slug:"game-programming",label:"Game Programming & Design",short:"C# · Unity",glyph:"C#",color:"#C052EB",description:"Make ideas playable with Unity and C#.",lessons:Ns["game-programming"].flatMap(l=>l.lessons),topics:["C# Basics","Rigidbody","Colliders"]},{id:"mobile-app-dev",units:Ns["mobile-app-dev"],slug:"mobile-app-web",label:"Mobile App & Web",short:"React · JavaScript",glyph:"js",color:"#27BBD2",description:"Create useful websites and mobile applications.",lessons:Ns["mobile-app-dev"].flatMap(l=>l.lessons),topics:["HTML","CSS","JavaScript","React"]},{id:"capstone",units:Ns.capstone,slug:"capstone",label:"Capstone",short:"Build for someone",glyph:"++",color:"#FF2D55",description:"Research a problem, prototype, and test a solution.",lessons:Ns.capstone.flatMap(l=>l.lessons),topics:["Research","Prototype","Pitch"]},{id:"uil",units:Ns.uil,slug:"uil",label:"UIL Computer Science",short:"Java",glyph:"jv",color:"#FF9F0A",description:"Trace Java, explain your reasoning, and practice.",lessons:Ns.uil.flatMap(l=>l.lessons),topics:["Java","Arrays","Written","Programming"]},{id:"tsi-math",units:Ns["tsi-math"],slug:"tsi-math",label:"TSI Math Advisory",short:"Math · Open access",glyph:"ma",color:"#30C85A",description:"Quantitative reasoning and algebra practice.",lessons:Ns["tsi-math"].flatMap(l=>l.lessons),topics:["Percents","Ratios","Equations"]}],yi=l=>ns.find(c=>c.id===l),Yp=l=>{var c;return(c=yi(l))==null?void 0:c.label};function _d(l){return typeof l=="string"&&/^#[0-9a-fA-F]{6}$/.test(l)}function yg(l,c={}){const d=c&&typeof c=="object"?c[l.id]:null;return _d(d)?d.toUpperCase():l.color}function vg(l){if(!_d(l))return"#101012";const c=[1,3,5].map(g=>parseInt(l.slice(g,g+2),16)/255).map(g=>g<=.04045?g/12.92:((g+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722>.179?"#101012":"#FFFFFF"}function xg(l,c,d=document.documentElement){for(const g of c){const x=`--student-course-color-${g.id}`,b=l&&typeof l=="object"?l[g.id]:null,C=`--student-course-ink-${g.id}`;_d(b)?(d.style.setProperty(x,b),d.style.setProperty(C,vg(b))):(d.style.removeProperty(x),d.style.removeProperty(C))}}function xn(l,c){const[d,g]=Oe.useState(()=>{try{const x=localStorage.getItem(l);return x===null?c:JSON.parse(x)}catch{return c}});return Oe.useEffect(()=>{try{localStorage.setItem(l,JSON.stringify(d))}catch{}},[l,d]),[d,g]}function bg(l,c=[]){return Array.isArray(c)&&c.includes(l)}function Ff(l,c=[]){const d=Zu(l),g=d.filter(x=>bg(x,c)).length;return{completed:g,total:d.length,percent:d.length?Math.round(g/d.length*100):0}}function wg(l,c){const d=Array.isArray(l)?l:[];return d.includes(c)?d.filter(g=>g!==c):[...d,c]}const kg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function Sg(l=new Date){const c=Object.fromEntries(kg.formatToParts(l).filter(d=>d.type!=="literal").map(d=>[d.type,d.value]));return`${c.year}-${c.month}-${c.day}`}function bd(l){return l?new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}):""}function pd(l,c=[]){return c.find(d=>d.id===l)||null}function _g(l,c=[]){return c.find(d=>d.id===l)||null}function Cd(l,{assignments:c=[],grades:d=[],completedLessons:g=[],today:x=Sg()}={}){const b=_g(l,c),C=pd(l,d),N=l.startsWith("lesson:")&&g.includes(l.slice(7)),S=!!C||N;return b!=null&&b.dueDate?{state:S?"completed":b.dueDate<x?"overdue":"assigned",dueDate:b.dueDate,grade:C,completed:S}:{state:S?"completed":"unassigned",dueDate:null,grade:C,completed:S}}function Op(l=[]){const c=l.reduce((g,x)=>g+x.earned,0),d=l.reduce((g,x)=>g+x.possible,0);return{earned:c,possible:d,percent:d?Math.round(100*c/d):null,count:l.length}}function Cg(l=[]){const c=new Map;return l.forEach(d=>{const g=xd(new Date(d.gradedAt+"T12:00:00Z"));c.has(g)||c.set(g,[]),c.get(g).push(d)}),[...c.entries()].map(([d,g])=>({week:d,...Op(g)})).sort((d,g)=>g.week.localeCompare(d.week))}function Tg(l=[],c=[]){return[...new Set([...Array.isArray(l)?l:[],...c.filter(d=>d.id.startsWith("lesson:")).map(d=>d.id.slice(7))])]}const Ng="/playground/data",jg=new Set(["game-programming","mobile-app-dev","uil","tsi-math"]);function Eg(l){if(typeof l!="string"||!l||l.startsWith("/")||l.includes("\\")||l.includes("?")||l.includes("#")||l.split("/").some(c=>c===".."||c==="."||c===""))throw new Error("Invalid curriculum resource path");return l}function ic(l,c){if(!jg.has(l))throw new Error("Unknown published course");return Ng+"/"+l+"/"+Eg(c)}async function Sr(l,c,d,g,x=!1){const b=await d(ic(l,c),{signal:g,cache:"no-store"});if(!b.ok)throw new Error("Published "+l+" resource unavailable: "+c);return x?b.json():b.text()}function Vp(l,c,d,g,x){var b,C,N;return{...l,markdownSource:c,starter:d??"",language:g,markdownUrl:ic(x,l.markdown),kind:"Lesson",challenge:((b=l.exercise)==null?void 0:b.prompt)||l.summary||l.objective||l.title||"",points:l.points??null,cases:((C=l.exercise)==null?void 0:C.examples)||l.cases||[],hints:((N=l.exercise)==null?void 0:N.hints)||l.hints||[],mode:l.exercise?"function":"script"}}async function Lg(l,c){const d="game-programming",g=await Sr(d,"course.json",l,c,!0),x=await Promise.all(g.units.map(async b=>({id:b.id,number:b.number,title:b.title,description:b.summary||"",lessons:await Promise.all(b.lessons.map(async C=>{var L,R,O,A,Y;const N=await Sr(d,C.markdown,l,c);return{...Vp(C,N,(L=C.exercise)==null?void 0:L.starter,"csharp",d),starter:((R=C.exercise)==null?void 0:R.starter)||"",kind:"Lesson",exerciseId:(O=C.exercise)==null?void 0:O.id,challenge:((A=C.exercise)==null?void 0:A.prompt)||C.title,unityTask:C.unityTask||[],markdownSource:N+((Y=C.unityTask)!=null&&Y.length?`

### Unity activity
`+C.unityTask.map(ne=>"- "+ne).join(`
`):"")}}))})));return{...Kl({units:x}),source:"published",projects:[]}}async function Pg(l,c){const d="mobile-app-dev",g=await Sr(d,"course.json",l,c,!0),x=await Promise.all(g.lessons.map(async C=>{const[N,S]=await Promise.all([Sr(d,C.markdown,l,c),Sr(d,C.starterFile,l,c)]);return Vp(C,N,S,C.language==="react"?"jsx":C.language,d)})),b=await Promise.all((g.projects||[]).map(async C=>{const N=await Sr(d,C.starterFile,l,c),S=await Promise.all(C.steps.map(async L=>({...L,markdownSource:await Sr(d,L.markdown,l,c),markdownUrl:ic(d,L.markdown)})));return{id:C.id,title:C.title,summary:C.summary,skills:C.skills||[],starter:N,language:"html",steps:S}}));return{...Kl({lessons:x}),projects:b,source:"published"}}async function Ag(l,c){const g=await Sr("uil","course.json",l,c,!0),x=await Sr("uil",g.written.markdown,l,c),b=await Sr("uil",g.written.practice,l,c,!0),N=(Array.isArray(b)?b:b.questions||[]).map((O,A)=>{const Y=O.choices||O.options||[];return"### Practice question "+(A+1)+`

`+String(O.prompt||O.question||"")+`

`+Y.map((ne,H)=>String.fromCharCode(65+H)+". "+ne).join(`

`)}).join(`

`),S={id:"written",title:"Written practice",language:"text",markdown:g.written.markdown,markdownSource:x+`

## Published practice questions

`+N,markdownUrl:ic("uil",g.written.markdown),starter:"",kind:"Practice",challenge:"Review Java reasoning and the published written-practice questions."},L=await Promise.all(g.lessons.map(async O=>{const[A,Y]=await Promise.all([Sr("uil",O.markdown,l,c),Sr("uil",O.starterFile,l,c)]);return Vp(O,A,Y,"java","uil")}));return{...Kl({units:[{id:"written-preparation",number:1,title:"Written preparation",lessons:[S]},{id:"programming-practice",number:2,title:"Java programming practice",lessons:L}]}),source:"published",projects:[]}}async function Rg(l,c){const d="tsi-math",[g,x,b,C]=await Promise.all([Sr(d,"content/20-day-program.json",l,c,!0),Sr(d,"content/strand-lessons-v1.json",l,c,!0),Sr(d,"content/diagnostic-24-mc-v2.json",l,c,!0),Sr(d,"content/math-locator-profiles.json",l,c,!0)]),N=(g.days||[]).map(L=>({id:L.id,title:L.title,challenge:"Day "+L.day+" · "+L.strand+" · 30 minutes",kind:"Planned session",language:"text",starter:"",ready:!1,status:"planned"})),S=await Promise.all((x.lessons||[]).map(async L=>({id:L.id,title:L.title,kind:"Draft practice",status:"draft",language:"text",markdown:L.student_lesson,markdownUrl:ic(d,L.student_lesson),markdownSource:await Sr(d,L.student_lesson,l,c),starter:"",challenge:"Currently authored draft lesson · "+L.minutes+" minutes"})));return{...Kl({units:[{id:"study-schedule",number:1,title:"20-day study schedule (in development)",lessons:N},{id:"authored-strands",number:2,title:"Available draft strand lessons",lessons:S}]}),source:"published-draft",projects:[],tsiDraft:!0,diagnosticItems:b.items||[],locatorProfiles:C.profiles||[]}}async function Ig(l,{fetchImpl:c=fetch,signal:d}={}){if(l==="game-programming")return Lg(c,d);if(l==="mobile-app-dev")return Pg(c,d);if(l==="uil")return Ag(c,d);if(l==="tsi-math")return Rg(c,d);throw new Error("Unknown published course")}const uo=(...l)=>l.filter(Boolean).join(" "),Og=["temperature-alert","count-matches","sum-positives","score-line","attendance-percent","longest-win-streak","confidence-total","second-largest-distinct","target-pairs","competition-ranks"],Mg="/playground/preview/",Dg="/"+Mg.replace(/^\/+|\/+$/g,""),fo=l=>`${Dg}/#${l}`,Ul=()=>fo("/"),zh=()=>fo("/teacher"),zg=()=>fo("/admin"),Fg=()=>fo("/journals"),Wg=()=>fo("/grades"),Hl=(l=null)=>fo(l?`/challenges/course/${encodeURIComponent(l)}`:"/challenges"),Wf=l=>fo(`/challenges/${encodeURIComponent(l)}`);function Hf(l,c,d=null){const g=typeof l=="string"?yi(l):l;if(!g||!c)return Ul();const x=`/playgrounds/${encodeURIComponent(g.slug)}/projects/${encodeURIComponent(c)}`;return fo(d?`${x}/steps/${encodeURIComponent(d)}`:x)}function Td(l,c){const d=typeof l=="string"?yi(l):l;if(!d)return Ul();const g=`/playgrounds/${encodeURIComponent(d.slug)}`;return fo(c?`${g}/lessons/${encodeURIComponent(c)}`:g)}function ad(l,c=ns){const b=((typeof window<"u"&&window.location.hash.slice(1)||"/").replace(/\/+$/,"")||"/").slice("".length)||"/";if(b==="/")return{page:"home"};if(b==="/teacher")return{page:"teacher"};if(b==="/admin")return{page:"admin"};if(b==="/journals")return{page:"journals"};if(b==="/grades")return{page:"grades"};if(b==="/challenges")return{page:"challenges",filterCourse:null};if(b.startsWith("/challenges/")){const R=b.split("/").filter(Boolean);try{if(R.length===3&&R[1]==="course"){const O=decodeURIComponent(R[2]);return yi(O)?{page:"challenges",filterCourse:O}:{page:"not-found"}}if(R.length===2){const O=decodeURIComponent(R[1]);return Og.includes(O)?{page:"challenge",challengeId:O}:{page:"not-found"}}}catch{return{page:"not-found"}}return{page:"not-found"}}const C=b.split("/").filter(Boolean);if(C[0]!=="playgrounds"||![2,4,6].includes(C.length))return{page:"not-found"};let N,S;try{N=decodeURIComponent(C[1]),S=C.length===4?decodeURIComponent(C[3]):void 0}catch{return{page:"not-found"}}const L=c.find(R=>R.slug===N);if(!L)return{page:"not-found"};if(C[2]==="projects"&&(C.length===4||C.length===6))try{const R=decodeURIComponent(C[3]),O=(L.projects||[]).find(Y=>Y.id===R),A=C.length===6?decodeURIComponent(C[5]):null;return!O||A&&(C[4]!=="steps"||!O.steps.some(Y=>Y.id===A))?{page:"not-found"}:{page:"course",courseId:L.id,lessonId:null,projectId:R,stepId:A}}catch{return{page:"not-found"}}return C.length!==2&&(C.length!==4||C[2]!=="lessons")?{page:"not-found"}:S&&!gg(L,S)?{page:"not-found"}:{page:"course",courseId:L.id,lessonId:S??null}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bf=(...l)=>l.filter((c,d,g)=>!!c&&c.trim()!==""&&g.indexOf(c)===d).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=Oe.forwardRef(({color:l="currentColor",size:c=24,strokeWidth:d=2,absoluteStrokeWidth:g,className:x="",children:b,iconNode:C,...N},S)=>Oe.createElement("svg",{ref:S,...Bg,width:c,height:c,stroke:l,strokeWidth:g?Number(d)*24/Number(c):d,className:Bf("lucide",x),...N},[...C.map(([L,R])=>Oe.createElement(L,R)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=(l,c)=>{const d=Oe.forwardRef(({className:g,...x},b)=>Oe.createElement(Ug,{ref:b,iconNode:c,className:Bf(`lucide-${Hg(l)}`,g),...x}));return d.displayName=`${l}`,d};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=Ct("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=Ct("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=Ct("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=Ct("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=Ct("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=Ct("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=Ct("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=Ct("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=Ct("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=Ct("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=Ct("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=Ct("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=Ct("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=Ct("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=Ct("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=Ct("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=Ct("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=Ct("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=Ct("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Ct("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Ct("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Ct("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Ct("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=Ct("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=Ct("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=Ct("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Ct("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Ct("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Ct("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Ct("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=Ct("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=Ct("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=Ct("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=Ct("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=Ct("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=Ct("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=Ct("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=Ct("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=Ct("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=Ct("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=Ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function is({children:l,tone:c=""}){return p.jsx("span",{className:uo("chip",c&&`chip-${c}`),children:l})}function dy({theme:l,setTheme:c}){const d=l==="dark";return p.jsx("button",{className:"icon-button",title:d?"Switch to light mode":"Switch to dark mode","aria-label":"Toggle light and dark mode",onClick:()=>c(d?"light":"dark"),children:d?p.jsx(uy,{size:17}):p.jsx(sy,{size:17})})}function py({sidebarOpen:l,onToggleSidebar:c,onHome:d,theme:g,setTheme:x}){return p.jsx("header",{className:"topbar",children:p.jsxs("div",{className:"topbar-inner",children:[p.jsx("button",{className:"icon-button nav-toggle",onClick:c,"aria-label":"Toggle navigation",children:l?p.jsx(oy,{size:18}):p.jsx(iy,{size:18})}),p.jsxs("button",{className:"brand",onClick:d,children:[p.jsx("span",{className:"brand-logo",children:"{ }"}),p.jsx("strong",{children:"Ms. Whitby's Playground"}),p.jsx("span",{className:"brand-compact",children:"React Lab"})]}),p.jsx("div",{className:"topbar-spacer"}),p.jsx(is,{children:"LOCAL DESIGN LAB"}),p.jsx(dy,{theme:g,setTheme:x}),p.jsx("span",{className:"user-circle",children:"W"})]})})}const hy=[["home","Home",ny],["challenges","Challenge Bank",Nd],["journals","Weekly journals",Xp],["grades","Grades",ey],["teacher","Teacher dashboard",Zp],["admin","Admin dashboard",th]];function fy({open:l,page:c,courseId:d,lessonId:g,setPage:x,openCourse:b,onOpenProject:C,availableCourses:N=ns,completedLessons:S=[],assignments:L=[],grades:R=[]}){var A;const O=c==="course"?N.find(Y=>Y.id===d):null;return p.jsxs("aside",{className:uo("main-sidebar",!l&&"collapsed"),"aria-label":"Playground navigation",children:[p.jsx("div",{className:"side-title",children:"EXPLORE"}),hy.map(([Y,ne,H])=>p.jsxs("button",{className:uo("nav-item",(c===Y||Y==="challenges"&&c==="challenge")&&"active"),onClick:()=>x(Y),title:ne,children:[p.jsx(H,{size:19}),p.jsx("span",{children:ne})]},Y)),O&&p.jsxs("section",{className:"course-outline","data-course":O.id,"aria-label":`${O.label} outline`,children:[p.jsx("div",{className:"side-rule"}),p.jsx("div",{className:"side-title",children:"COURSE CONTENT"}),p.jsxs("button",{className:uo("outline-overview",!g&&"active"),onClick:()=>b(O.id),children:[p.jsx(sc,{size:16}),p.jsx("span",{children:"Course overview"})]}),O.units.map((Y,ne)=>p.jsxs("details",{className:"outline-unit",open:rs(Y).includes(g)||!g&&ne===0?!0:void 0,children:[p.jsxs("summary",{children:[p.jsx("span",{className:"outline-unit-number",children:String(rc(Y,ne+1)).padStart(2,"0")}),p.jsx("span",{className:"outline-unit-title",title:Es(Y),children:Es(Y)}),p.jsx(qf,{size:14})]}),p.jsx("div",{className:"outline-lesson-list",children:rs(Y).map(H=>{const ae=ta(O,H),D=Cd("lesson:"+H,{assignments:L,grades:R,completedLessons:S}),U=D.completed?"completed":D.dueDate?D.state:"",F=U==="completed"?"Completed":U==="overdue"?"Overdue":U==="assigned"?"Assigned":"";return p.jsxs("button",{onClick:()=>b(O.id,H),className:uo("outline-lesson",H===g&&"selected"),"aria-label":F?`${ae}, ${F.toLowerCase()}`:ae,title:F?`${ae} · ${F}`:ae,"aria-current":H===g?"page":void 0,children:[p.jsx("span",{className:"outline-lesson-name",children:ae}),F&&p.jsx("span",{className:`assignment-dot ${U}`,"aria-hidden":"true"})]},H)})})]},`${O.id}-${Y.id}-${g||"overview"}`)),!!((A=O.projects)!=null&&A.length)&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"side-section-title",children:"PROJECTS"}),O.projects.map(Y=>p.jsx("button",{type:"button",className:"outline-lesson",title:Y.title,onClick:()=>C==null?void 0:C(O.id,Y.id),children:p.jsx("span",{className:"outline-lesson-name",children:Y.title})},Y.id))]})]}),p.jsx("div",{className:"side-rule"}),p.jsx("div",{className:"side-title",children:"PLAYGROUNDS"}),N.map(Y=>p.jsxs("button",{"data-course":Y.id,className:uo("nav-item course-nav-item",c==="course"&&d===Y.id&&"active"),onClick:()=>b(Y.id),title:Y.label,children:[p.jsx("span",{className:"nav-dot"}),p.jsx("span",{children:Y.label})]},Y.id)),p.jsxs("div",{className:"sidebar-bottom",children:[p.jsx(Yg,{size:17}),p.jsx("span",{children:"Your learning spaces"})]})]})}function my(){return p.jsxs("footer",{className:"site-footer",children:[p.jsx("span",{children:"Ms. Whitby's Playground · React design lab"}),p.jsx("span",{children:"Fictional data · No authentication or backend · No real code execution"})]})}const gy={"computer-science-1":Qp,"game-programming":Zg,"mobile-app-dev":ly,uil:Yf,"tsi-math":Uf,capstone:ay};function yy({course:l,onOpen:c,completedLessons:d=[]}){const{completed:g,total:x}=Ff(l,d),b=gy[l.id]||Qp;function C(N){N.button!==0||N.metaKey||N.ctrlKey||N.shiftKey||N.altKey||(N.preventDefault(),c())}return p.jsxs("a",{className:"course-card","data-course":l.id,href:Td(l),onClick:C,children:[p.jsxs("div",{className:"course-card-heading",children:[p.jsx("span",{className:"course-glyph","aria-hidden":"true",children:p.jsx(b,{size:24,strokeWidth:2.2})}),p.jsxs("div",{children:[p.jsx("h2",{children:l.label}),p.jsx("p",{children:l.short})]})]}),p.jsx("p",{className:"course-description",children:l.description}),p.jsxs("div",{className:"course-card-footer",children:[p.jsxs("div",{className:"course-meta",children:[p.jsxs("span",{children:[x," ",x===1?"lesson":"lessons"]}),p.jsxs("span",{children:[g," completed"]})]}),p.jsx("progress",{className:"course-progress-track",value:g,max:Math.max(x,1),"aria-label":`${l.label}: ${g} of ${x} lessons completed`})]})]})}function vy({onClick:l}){return p.jsxs("button",{className:"wide-shortcut",onClick:l,children:[p.jsx(Zp,{size:18}),p.jsxs("span",{children:[p.jsx("strong",{children:"Teacher Dashboard preview"}),p.jsx("small",{children:"Section roster, expanded student assignments, account matching, and weekly points"})]}),p.jsx(na,{size:18})]})}function xy({openCourse:l,openTeacher:c,openChallenges:d,availableCourses:g=ns,completedLessons:x=[]}){return p.jsxs("div",{className:"main-content",children:[p.jsxs("div",{className:"welcome",children:[p.jsx("div",{className:"eyebrow",children:"Your learning spaces"}),p.jsx("h1",{children:"Your playgrounds"}),p.jsx("p",{children:"Choose a course to continue learning. Complete lessons to fill your progress bars."})]}),p.jsx("div",{className:"course-card-grid",children:g.map(b=>p.jsx(yy,{course:b,completedLessons:x,onOpen:()=>l(b.id)},b.id))}),p.jsxs("button",{type:"button",className:"wide-shortcut challenge-bank-shortcut",onClick:d,children:[p.jsx(Nd,{size:23}),p.jsxs("span",{children:[p.jsx("strong",{children:"Shared Challenge Bank"}),p.jsx("small",{children:"Practice one problem in Python, Java, JavaScript, or C#."})]}),p.jsx("span",{"aria-hidden":"true",children:"→"})]}),p.jsx(vy,{onClick:c})]})}function by({course:l,openCourse:c,openProject:d,openChallenges:g,completedLessons:x=[],assignments:b=[],grades:C=[],courseColors:N={},onSetCourseColor:S,onResetCourseColor:L}){var ne;const R=Ff(l,x),[O,A]=Oe.useState(!1),Y=yg(l,N);return p.jsxs("div",{className:"course-landing",children:[p.jsxs("header",{className:"course-hero surface-card",children:[p.jsx("button",{type:"button",className:"icon-button course-color-settings",onClick:()=>A(H=>!H),"aria-label":O?"Close course color settings":`Change ${l.label} color`,title:O?"Close settings":"Course color","aria-expanded":O,"aria-controls":"course-color-controls",children:O?p.jsx(jd,{size:17}):p.jsx(eh,{size:17})}),p.jsx("div",{className:"eyebrow",children:"Course overview"}),p.jsx("h1",{children:l.label}),p.jsx("p",{children:l.description}),p.jsxs("div",{className:"course-hero-stats",children:[p.jsxs("span",{children:[p.jsx(ry,{size:16})," ",l.units.length," units"]}),p.jsxs("span",{children:[p.jsx(sc,{size:16})," ",Zu(l).length," lessons"]})]}),p.jsxs("button",{className:"btn primary",disabled:!Zu(l).length,onClick:()=>c(l.id,Zu(l)[0]),children:["Start learning ",p.jsx(na,{size:16})]}),O&&p.jsxs("section",{id:"course-color-controls",className:"course-color-controls","aria-label":"Choose a course color",children:[p.jsxs("div",{className:"course-color-control-copy",children:[p.jsx("strong",{children:"Course color"}),p.jsx("p",{children:"Make this course your own. The color updates throughout your Playground."})]}),p.jsxs("label",{className:"course-color-picker",children:[p.jsx("input",{type:"color",value:Y,onChange:H=>S==null?void 0:S(l.id,H.target.value),"aria-label":`Choose a color for ${l.label}`}),p.jsx("span",{children:"Choose color"})]}),p.jsx("button",{type:"button",className:"btn",onClick:()=>L==null?void 0:L(l.id),children:"Reset to default"}),p.jsx("button",{type:"button",className:"btn",onClick:()=>A(!1),children:"Done"})]})]}),l.publishedContent&&p.jsx("p",{className:"course-published-note",children:"Real published lessons are shown here. Practice in this preview does not change your grades."}),l.contentLoadingError&&p.jsxs("p",{className:"course-published-note",role:"alert",children:["Published course materials could not be loaded: ",l.contentLoadingError,". Sample lessons are not substituted."]}),!l.publishedContent&&!l.contentLoadingError&&p.jsx("p",{className:"course-published-note",children:"Course materials are not yet published here. This is a design preview, not a course to assign."}),l.tsiDraft&&p.jsx("p",{className:"course-published-note",children:"The 20-day TSI schedule is an outline; four strand lessons are drafts. Unwritten sessions are not available for practice."}),p.jsxs("p",{className:"course-landing-progress",children:[R.completed," of ",R.total," lessons ",l.publishedContent?"marked complete in preview":"completed"," · ",R.percent,"%"]}),p.jsx("div",{className:"course-landing-heading",children:p.jsxs("div",{children:[p.jsx("h2",{children:"Units & lessons"}),p.jsx("p",{children:"Choose a unit or jump directly into a lesson."})]})}),p.jsx("div",{className:"unit-card-grid",children:l.units.map((H,ae)=>p.jsxs("section",{className:"unit-card surface-card",children:[p.jsxs("header",{className:"unit-card-header",children:[p.jsxs("span",{className:"unit-badge",children:["UNIT ",String(rc(H,ae+1)).padStart(2,"0")]}),p.jsx("h3",{title:Es(H),children:Es(H)}),H.description&&p.jsx("p",{children:H.description})]}),p.jsx("div",{className:"unit-lessons",children:rs(H).map((D,U)=>p.jsxs("a",{className:"unit-lesson-link",href:Td(l,D),onClick:F=>{F.button!==0||F.metaKey||F.ctrlKey||F.shiftKey||F.altKey||(F.preventDefault(),c(l.id,D))},children:[p.jsx("span",{className:"unit-lesson-index",children:U+1}),p.jsxs("span",{className:"unit-lesson-label",children:[p.jsx("strong",{title:ta(l,D),children:ta(l,D)}),(()=>{var K,V;const F=Cd("lesson:"+D,{assignments:b,grades:C,completedLessons:x});return F.dueDate||F.completed?p.jsxs("span",{className:"unit-assignment-meta",children:[p.jsxs("span",{className:`assignment-status ${F.state}`,children:[p.jsx("span",{className:`assignment-dot ${F.state}`,"aria-hidden":"true"}),F.completed?"Completed":F.state==="overdue"?"Overdue":"Assigned"]}),F.dueDate&&p.jsxs("small",{children:["Due ",bd(F.dueDate)]}),F.grade&&p.jsxs("small",{children:[F.grade.earned," / ",F.grade.possible," pts"]})]}):p.jsxs("small",{children:[(K=ea(l,D))==null?void 0:K.kind,(V=ea(l,D))!=null&&V.difficulty?` · ${ea(l,D).difficulty}`:""]})})()]}),p.jsx(Mp,{size:16})]},D))})]},H.id))}),!!((ne=l.projects)!=null&&ne.length)&&p.jsxs("section",{className:"course-projects surface-card",children:[p.jsx("div",{className:"eyebrow",children:"Published guided projects"}),p.jsx("h2",{children:"Projects"}),p.jsx("div",{className:"unit-card-grid",children:l.projects.map(H=>p.jsxs("a",{className:"unit-lesson-link",href:Hf(l,H.id),onClick:ae=>{ae.button!==0||ae.metaKey||ae.ctrlKey||ae.shiftKey||ae.altKey||(ae.preventDefault(),d(l.id,H.id))},children:[p.jsxs("span",{className:"unit-lesson-label",children:[p.jsx("strong",{children:H.title}),p.jsxs("small",{children:[H.steps.length," steps · ",H.summary]})]}),p.jsx(Mp,{size:16})]},H.id))})]}),p.jsxs("section",{className:"course-challenges-shelf surface-card",children:[p.jsxs("div",{children:[p.jsx("div",{className:"eyebrow",children:"Shared practice library"}),p.jsx("h2",{children:"Related programming challenges"}),p.jsx("p",{children:"Browse reusable problems suited to this course. Review each challenge's prerequisites before recommending it to students."})]}),p.jsxs("a",{href:Hl(l.id),className:"btn",onClick:H=>{H.button!==0||H.metaKey||H.ctrlKey||H.shiftKey||H.altKey||(H.preventDefault(),g(l.id))},children:[p.jsx(Nd,{size:16})," Browse challenges"]})]})]})}function Ed({axis:l,onDrag:c}){const d=Oe.useRef(!1),g=l==="columns",x=()=>d.current=!1;return p.jsx("div",{className:uo("splitter",g?"column-split":"row-split"),role:"separator","aria-label":g?"Resize instructions and editor":"Resize editor and console","aria-orientation":g?"vertical":"horizontal",tabIndex:0,onPointerDown:b=>{b.preventDefault(),b.currentTarget.setPointerCapture(b.pointerId),d.current=!0},onPointerMove:b=>{d.current&&b.buttons===1&&c(b)},onPointerUp:x,onLostPointerCapture:x,children:p.jsx("span",{})})}function nh({eyebrow:l,children:c,actions:d}){return p.jsxs("div",{className:"page-title-row",children:[p.jsxs("div",{children:[l&&p.jsx("div",{className:"eyebrow",children:l}),p.jsx("h1",{children:c})]}),d&&p.jsx("div",{className:"page-actions",children:d})]})}function ld({task:l,unit:c,unitNumber:d,isTsi:g,isCompleted:x=!1,assignment:b=null,grade:C=null,onToggleCompleted:N}){const S=(b==null?void 0:b.id)||(C==null?void 0:C.id)||"",L=Cd(S,{assignments:b?[b]:[],grades:C?[C]:[],completedLessons:x?[S.replace(/^lesson:/,"")]:[]});return p.jsxs("div",{className:"lesson-header",children:[p.jsxs("div",{className:"eyebrow",children:["Unit ",rc(c,d)," · ",Es(c)," ",p.jsx("span",{className:"dot",children:"·"})," ",l.kind]}),p.jsx(nh,{actions:p.jsxs("div",{className:"lesson-heading-actions",children:[!g&&(l==null?void 0:l.points)!=null&&p.jsx("span",{className:"points-tag",children:C?`${C.earned} / ${C.possible} pts`:`${l.points} points available`}),C?p.jsxs("span",{className:"btn completion-toggle completed",children:[p.jsx(Dp,{size:16})," Completed"]}):p.jsxs("button",{type:"button",className:`btn completion-toggle ${x?"completed":""}`,"aria-pressed":x,onClick:N,children:[x?p.jsx(Dp,{size:16}):p.jsx(Vg,{size:16}),x?"Completed":"Mark complete"]})]}),children:l.title}),p.jsx("p",{children:l.challenge}),(b==null?void 0:b.dueDate)&&p.jsxs("div",{className:"lesson-assignment-info",children:[p.jsx("span",{className:`assignment-status ${L.state}`,children:L.state==="completed"?"Completed":L.state==="overdue"?"Overdue":"Assigned"}),p.jsxs("span",{children:["Due ",bd(b.dueDate)]})]})]})}const rh={"tsi-ratios":{prompt:"A recipe uses 3 cups of water for every 5 cups of rice. How many cups of water are needed for 15 cups of rice?",options:["5 cups","9 cups","12 cups","25 cups"],correct:1,explanation:"15 is three times 5, so multiply the 3 cups of water by 3 to get 9."},"tsi-percents":{prompt:"A $60 backpack is discounted by 25%. What is the sale price?",options:["$15","$35","$45","$75"],correct:2,explanation:"25% of $60 is $15; subtract $15 from $60 to get $45."},"tsi-equations":{prompt:"Solve for x: 4x + 6 = 22.",options:["2","4","6","7"],correct:1,explanation:"Subtract 6 from both sides to get 4x = 16, then divide by 4: x = 4."},"tsi-slope":{prompt:"A table gives points (1, 3), (2, 5), and (3, 7). What is the slope?",options:["1","2","3","4"],correct:1,explanation:"As x goes up by 1, y goes up by 2, so slope = 2/1 = 2."}},wy=`# Find an Inefficiency

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
`,ky=`# Interpret User Feedback

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
`,Sy=`# Interview for Evidence

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
`,_y=`# Make a Minimum Viable Prototype

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
`,Cy=`# Player Decisions

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
`,Ty=`# Variables for a Game

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
`,Ny=`# Decision Making

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
`,jy=`# Format a Summary

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
`,Ey=`# Lists and Indexing

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
`,Ly=`# For Loops

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
`,Py=`# Strings and Variables

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
`,Ay=`<!-- Learning example adapted from mswhitby/computer-science-1/docs/units/content/02-values-and-variables/lessons/01-meet-variables.md; displayed in independent React preview. -->
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
`,Ry=`# Your First React Card

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
`,Iy=`# Interactive React State

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
`,Oy=`# Solve Linear Equations

## Learn

Solve an equation by doing the same operation to both sides. For 3x + 5 = 20, first subtract 5, then divide by 3.

### Example

Explain the quantities and operations before calculating.

## Practice

Solve 4x + 6 = 22. Explain each step.

Choose an answer in the practice card.
`,My=`# Percents and Discounts

## Learn

A percent compares a quantity with 100. To find 20% of 50, multiply 0.20 × 50 = 10.

### Example

Explain the quantities and operations before calculating.

## Practice

A backpack costs $60 and is discounted by 25%. What is the sale price?

Choose an answer in the practice card.
`,Dy=`# Ratios and Rates

## Learn

A ratio compares quantities. A **unit rate** tells us how many of one item correspond to one unit of another.

Example: If 3 markers are shared by 5 students, the number of markers per student is:

**3 ÷ 5 = 0.6 markers per student.**

## Practice

A group of 15 students needs markers at the same rate. How many markers are needed? Explain how you know.
`,zy=`# Slope and Rate of Change

## Learn

Slope is the change in y divided by the change in x. A constant rate makes a linear relationship.

### Example

Explain the quantities and operations before calculating.

## Practice

The table gives (1, 3), (2, 5), and (3, 7). What is the slope?

Choose an answer in the practice card.
`,Fy=`# Trace a Java Array

## Learn

An array holds multiple values. Java arrays start at index **0**.

\`\`\`java
int[] scores = {2, 4, 6};
System.out.println(scores[0]); // 2
\`\`\`

## Practice

Trace the loop in the starter code. Record every index and the updated element value in a table. Then write the final array.
`,Wy=`# Trace Java Loops

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
`,Hy=`# Method Calls and Scope

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
`,By=`# String Indexing

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
`,Uy=`# Collision Events

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
`,qy=`<!-- Learning example adapted from mswhitby/game-programming/samples/PlayerController.md (sample-lessons); displayed in independent React preview. -->
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
`,$y=`# Score and Feedback

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
`,Ky=`# Events and Forms

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
`,Gy=`# Responsive Layouts

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
`;function ih(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ja=ih();function Vf(l){Ja=l}var ec={exec:()=>null};function Yt(l,c=""){let d=typeof l=="string"?l:l.source;const g={replace:(x,b)=>{let C=typeof b=="string"?b:b.source;return C=C.replace(Wr.caret,"$1"),d=d.replace(x,C),g},getRegex:()=>new RegExp(d,c)};return g}var Wr={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:l=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}#`),htmlBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}<(?:[a-z].*>|!--)`,"i")},Yy=/^(?:[ \t]*(?:\n|$))+/,Vy=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Jy=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,oc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Xy=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,sh=/(?:[*+-]|\d{1,9}[.)])/,Jf=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Xf=Yt(Jf).replace(/bull/g,sh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Qy=Yt(Jf).replace(/bull/g,sh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),oh=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Zy=/^[^\n]+/,ah=/(?!\s*\])(?:\\.|[^\[\]\\])+/,ev=Yt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ah).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),tv=Yt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,sh).getRegex(),Ld="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",lh=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,nv=Yt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",lh).replace("tag",Ld).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Qf=Yt(oh).replace("hr",oc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ld).getRegex(),rv=Yt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Qf).getRegex(),uh={blockquote:rv,code:Vy,def:ev,fences:Jy,heading:Xy,hr:oc,html:nv,lheading:Xf,list:tv,newline:Yy,paragraph:Qf,table:ec,text:Zy},Wh=Yt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",oc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ld).getRegex(),iv={...uh,lheading:Qy,table:Wh,paragraph:Yt(oh).replace("hr",oc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Wh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ld).getRegex()},sv={...uh,html:Yt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",lh).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ec,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Yt(oh).replace("hr",oc).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Xf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ov=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,av=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Zf=/^( {2,}|\\)\n(?!\s*$)/,lv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Pd=/[\p{P}\p{S}]/u,ch=/[\s\p{P}\p{S}]/u,em=/[^\s\p{P}\p{S}]/u,uv=Yt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ch).getRegex(),tm=/(?!~)[\p{P}\p{S}]/u,cv=/(?!~)[\s\p{P}\p{S}]/u,dv=/(?:[^\s\p{P}\p{S}]|~)/u,pv=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,nm=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,hv=Yt(nm,"u").replace(/punct/g,Pd).getRegex(),fv=Yt(nm,"u").replace(/punct/g,tm).getRegex(),rm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",mv=Yt(rm,"gu").replace(/notPunctSpace/g,em).replace(/punctSpace/g,ch).replace(/punct/g,Pd).getRegex(),gv=Yt(rm,"gu").replace(/notPunctSpace/g,dv).replace(/punctSpace/g,cv).replace(/punct/g,tm).getRegex(),yv=Yt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,em).replace(/punctSpace/g,ch).replace(/punct/g,Pd).getRegex(),vv=Yt(/\\(punct)/,"gu").replace(/punct/g,Pd).getRegex(),xv=Yt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),bv=Yt(lh).replace("(?:-->|$)","-->").getRegex(),wv=Yt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",bv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),wd=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,kv=Yt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",wd).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),im=Yt(/^!?\[(label)\]\[(ref)\]/).replace("label",wd).replace("ref",ah).getRegex(),sm=Yt(/^!?\[(ref)\](?:\[\])?/).replace("ref",ah).getRegex(),Sv=Yt("reflink|nolink(?!\\()","g").replace("reflink",im).replace("nolink",sm).getRegex(),dh={_backpedal:ec,anyPunctuation:vv,autolink:xv,blockSkip:pv,br:Zf,code:av,del:ec,emStrongLDelim:hv,emStrongRDelimAst:mv,emStrongRDelimUnd:yv,escape:ov,link:kv,nolink:sm,punctuation:uv,reflink:im,reflinkSearch:Sv,tag:wv,text:lv,url:ec},_v={...dh,link:Yt(/^!?\[(label)\]\((.*?)\)/).replace("label",wd).getRegex(),reflink:Yt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",wd).getRegex()},Fp={...dh,emStrongRDelimAst:gv,emStrongLDelim:fv,url:Yt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Cv={...Fp,br:Yt(Zf).replace("{2,}","*").getRegex(),text:Yt(Fp.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ud={normal:uh,gfm:iv,pedantic:sv},Ku={normal:dh,gfm:Fp,breaks:Cv,pedantic:_v},Tv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Hh=l=>Tv[l];function js(l,c){if(c){if(Wr.escapeTest.test(l))return l.replace(Wr.escapeReplace,Hh)}else if(Wr.escapeTestNoEncode.test(l))return l.replace(Wr.escapeReplaceNoEncode,Hh);return l}function Bh(l){try{l=encodeURI(l).replace(Wr.percentDecode,"%")}catch{return null}return l}function Uh(l,c){var b;const d=l.replace(Wr.findPipe,(C,N,S)=>{let L=!1,R=N;for(;--R>=0&&S[R]==="\\";)L=!L;return L?"|":" |"}),g=d.split(Wr.splitPipe);let x=0;if(g[0].trim()||g.shift(),g.length>0&&!((b=g.at(-1))!=null&&b.trim())&&g.pop(),c)if(g.length>c)g.splice(c);else for(;g.length<c;)g.push("");for(;x<g.length;x++)g[x]=g[x].trim().replace(Wr.slashPipe,"|");return g}function Gu(l,c,d){const g=l.length;if(g===0)return"";let x=0;for(;x<g&&l.charAt(g-x-1)===c;)x++;return l.slice(0,g-x)}function Nv(l,c){if(l.indexOf(c[1])===-1)return-1;let d=0;for(let g=0;g<l.length;g++)if(l[g]==="\\")g++;else if(l[g]===c[0])d++;else if(l[g]===c[1]&&(d--,d<0))return g;return d>0?-2:-1}function qh(l,c,d,g,x){const b=c.href,C=c.title||null,N=l[1].replace(x.other.outputLinkReplace,"$1");g.state.inLink=!0;const S={type:l[0].charAt(0)==="!"?"image":"link",raw:d,href:b,title:C,text:N,tokens:g.inlineTokens(N)};return g.state.inLink=!1,S}function jv(l,c,d){const g=l.match(d.other.indentCodeCompensation);if(g===null)return c;const x=g[1];return c.split(`
`).map(b=>{const C=b.match(d.other.beginningSpace);if(C===null)return b;const[N]=C;return N.length>=x.length?b.slice(x.length):b}).join(`
`)}var kd=class{constructor(l){on(this,"options");on(this,"rules");on(this,"lexer");this.options=l||Ja}space(l){const c=this.rules.block.newline.exec(l);if(c&&c[0].length>0)return{type:"space",raw:c[0]}}code(l){const c=this.rules.block.code.exec(l);if(c){const d=c[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:c[0],codeBlockStyle:"indented",text:this.options.pedantic?d:Gu(d,`
`)}}}fences(l){const c=this.rules.block.fences.exec(l);if(c){const d=c[0],g=jv(d,c[3]||"",this.rules);return{type:"code",raw:d,lang:c[2]?c[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):c[2],text:g}}}heading(l){const c=this.rules.block.heading.exec(l);if(c){let d=c[2].trim();if(this.rules.other.endingHash.test(d)){const g=Gu(d,"#");(this.options.pedantic||!g||this.rules.other.endingSpaceChar.test(g))&&(d=g.trim())}return{type:"heading",raw:c[0],depth:c[1].length,text:d,tokens:this.lexer.inline(d)}}}hr(l){const c=this.rules.block.hr.exec(l);if(c)return{type:"hr",raw:Gu(c[0],`
`)}}blockquote(l){const c=this.rules.block.blockquote.exec(l);if(c){let d=Gu(c[0],`
`).split(`
`),g="",x="";const b=[];for(;d.length>0;){let C=!1;const N=[];let S;for(S=0;S<d.length;S++)if(this.rules.other.blockquoteStart.test(d[S]))N.push(d[S]),C=!0;else if(!C)N.push(d[S]);else break;d=d.slice(S);const L=N.join(`
`),R=L.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");g=g?`${g}
${L}`:L,x=x?`${x}
${R}`:R;const O=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(R,b,!0),this.lexer.state.top=O,d.length===0)break;const A=b.at(-1);if((A==null?void 0:A.type)==="code")break;if((A==null?void 0:A.type)==="blockquote"){const Y=A,ne=Y.raw+`
`+d.join(`
`),H=this.blockquote(ne);b[b.length-1]=H,g=g.substring(0,g.length-Y.raw.length)+H.raw,x=x.substring(0,x.length-Y.text.length)+H.text;break}else if((A==null?void 0:A.type)==="list"){const Y=A,ne=Y.raw+`
`+d.join(`
`),H=this.list(ne);b[b.length-1]=H,g=g.substring(0,g.length-A.raw.length)+H.raw,x=x.substring(0,x.length-Y.raw.length)+H.raw,d=ne.substring(b.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:g,tokens:b,text:x}}}list(l){let c=this.rules.block.list.exec(l);if(c){let d=c[1].trim();const g=d.length>1,x={type:"list",raw:"",ordered:g,start:g?+d.slice(0,-1):"",loose:!1,items:[]};d=g?`\\d{1,9}\\${d.slice(-1)}`:`\\${d}`,this.options.pedantic&&(d=g?d:"[*+-]");const b=this.rules.other.listItemRegex(d);let C=!1;for(;l;){let S=!1,L="",R="";if(!(c=b.exec(l))||this.rules.block.hr.test(l))break;L=c[0],l=l.substring(L.length);let O=c[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,D=>" ".repeat(3*D.length)),A=l.split(`
`,1)[0],Y=!O.trim(),ne=0;if(this.options.pedantic?(ne=2,R=O.trimStart()):Y?ne=c[1].length+1:(ne=c[2].search(this.rules.other.nonSpaceChar),ne=ne>4?1:ne,R=O.slice(ne),ne+=c[1].length),Y&&this.rules.other.blankLine.test(A)&&(L+=A+`
`,l=l.substring(A.length+1),S=!0),!S){const D=this.rules.other.nextBulletRegex(ne),U=this.rules.other.hrRegex(ne),F=this.rules.other.fencesBeginRegex(ne),K=this.rules.other.headingBeginRegex(ne),V=this.rules.other.htmlBeginRegex(ne);for(;l;){const ge=l.split(`
`,1)[0];let ue;if(A=ge,this.options.pedantic?(A=A.replace(this.rules.other.listReplaceNesting,"  "),ue=A):ue=A.replace(this.rules.other.tabCharGlobal,"    "),F.test(A)||K.test(A)||V.test(A)||D.test(A)||U.test(A))break;if(ue.search(this.rules.other.nonSpaceChar)>=ne||!A.trim())R+=`
`+ue.slice(ne);else{if(Y||O.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||F.test(O)||K.test(O)||U.test(O))break;R+=`
`+A}!Y&&!A.trim()&&(Y=!0),L+=ge+`
`,l=l.substring(ge.length+1),O=ue.slice(ne)}}x.loose||(C?x.loose=!0:this.rules.other.doubleBlankLine.test(L)&&(C=!0));let H=null,ae;this.options.gfm&&(H=this.rules.other.listIsTask.exec(R),H&&(ae=H[0]!=="[ ] ",R=R.replace(this.rules.other.listReplaceTask,""))),x.items.push({type:"list_item",raw:L,task:!!H,checked:ae,loose:!1,text:R,tokens:[]}),x.raw+=L}const N=x.items.at(-1);if(N)N.raw=N.raw.trimEnd(),N.text=N.text.trimEnd();else return;x.raw=x.raw.trimEnd();for(let S=0;S<x.items.length;S++)if(this.lexer.state.top=!1,x.items[S].tokens=this.lexer.blockTokens(x.items[S].text,[]),!x.loose){const L=x.items[S].tokens.filter(O=>O.type==="space"),R=L.length>0&&L.some(O=>this.rules.other.anyLine.test(O.raw));x.loose=R}if(x.loose)for(let S=0;S<x.items.length;S++)x.items[S].loose=!0;return x}}html(l){const c=this.rules.block.html.exec(l);if(c)return{type:"html",block:!0,raw:c[0],pre:c[1]==="pre"||c[1]==="script"||c[1]==="style",text:c[0]}}def(l){const c=this.rules.block.def.exec(l);if(c){const d=c[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),g=c[2]?c[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",x=c[3]?c[3].substring(1,c[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):c[3];return{type:"def",tag:d,raw:c[0],href:g,title:x}}}table(l){var C;const c=this.rules.block.table.exec(l);if(!c||!this.rules.other.tableDelimiter.test(c[2]))return;const d=Uh(c[1]),g=c[2].replace(this.rules.other.tableAlignChars,"").split("|"),x=(C=c[3])!=null&&C.trim()?c[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],b={type:"table",raw:c[0],header:[],align:[],rows:[]};if(d.length===g.length){for(const N of g)this.rules.other.tableAlignRight.test(N)?b.align.push("right"):this.rules.other.tableAlignCenter.test(N)?b.align.push("center"):this.rules.other.tableAlignLeft.test(N)?b.align.push("left"):b.align.push(null);for(let N=0;N<d.length;N++)b.header.push({text:d[N],tokens:this.lexer.inline(d[N]),header:!0,align:b.align[N]});for(const N of x)b.rows.push(Uh(N,b.header.length).map((S,L)=>({text:S,tokens:this.lexer.inline(S),header:!1,align:b.align[L]})));return b}}lheading(l){const c=this.rules.block.lheading.exec(l);if(c)return{type:"heading",raw:c[0],depth:c[2].charAt(0)==="="?1:2,text:c[1],tokens:this.lexer.inline(c[1])}}paragraph(l){const c=this.rules.block.paragraph.exec(l);if(c){const d=c[1].charAt(c[1].length-1)===`
`?c[1].slice(0,-1):c[1];return{type:"paragraph",raw:c[0],text:d,tokens:this.lexer.inline(d)}}}text(l){const c=this.rules.block.text.exec(l);if(c)return{type:"text",raw:c[0],text:c[0],tokens:this.lexer.inline(c[0])}}escape(l){const c=this.rules.inline.escape.exec(l);if(c)return{type:"escape",raw:c[0],text:c[1]}}tag(l){const c=this.rules.inline.tag.exec(l);if(c)return!this.lexer.state.inLink&&this.rules.other.startATag.test(c[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(c[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(c[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(c[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:c[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:c[0]}}link(l){const c=this.rules.inline.link.exec(l);if(c){const d=c[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(d)){if(!this.rules.other.endAngleBracket.test(d))return;const b=Gu(d.slice(0,-1),"\\");if((d.length-b.length)%2===0)return}else{const b=Nv(c[2],"()");if(b===-2)return;if(b>-1){const N=(c[0].indexOf("!")===0?5:4)+c[1].length+b;c[2]=c[2].substring(0,b),c[0]=c[0].substring(0,N).trim(),c[3]=""}}let g=c[2],x="";if(this.options.pedantic){const b=this.rules.other.pedanticHrefTitle.exec(g);b&&(g=b[1],x=b[3])}else x=c[3]?c[3].slice(1,-1):"";return g=g.trim(),this.rules.other.startAngleBracket.test(g)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(d)?g=g.slice(1):g=g.slice(1,-1)),qh(c,{href:g&&g.replace(this.rules.inline.anyPunctuation,"$1"),title:x&&x.replace(this.rules.inline.anyPunctuation,"$1")},c[0],this.lexer,this.rules)}}reflink(l,c){let d;if((d=this.rules.inline.reflink.exec(l))||(d=this.rules.inline.nolink.exec(l))){const g=(d[2]||d[1]).replace(this.rules.other.multipleSpaceGlobal," "),x=c[g.toLowerCase()];if(!x){const b=d[0].charAt(0);return{type:"text",raw:b,text:b}}return qh(d,x,d[0],this.lexer,this.rules)}}emStrong(l,c,d=""){let g=this.rules.inline.emStrongLDelim.exec(l);if(!g||g[3]&&d.match(this.rules.other.unicodeAlphaNumeric))return;if(!(g[1]||g[2]||"")||!d||this.rules.inline.punctuation.exec(d)){const b=[...g[0]].length-1;let C,N,S=b,L=0;const R=g[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(R.lastIndex=0,c=c.slice(-1*l.length+b);(g=R.exec(c))!=null;){if(C=g[1]||g[2]||g[3]||g[4]||g[5]||g[6],!C)continue;if(N=[...C].length,g[3]||g[4]){S+=N;continue}else if((g[5]||g[6])&&b%3&&!((b+N)%3)){L+=N;continue}if(S-=N,S>0)continue;N=Math.min(N,N+S+L);const O=[...g[0]][0].length,A=l.slice(0,b+g.index+O+N);if(Math.min(b,N)%2){const ne=A.slice(1,-1);return{type:"em",raw:A,text:ne,tokens:this.lexer.inlineTokens(ne)}}const Y=A.slice(2,-2);return{type:"strong",raw:A,text:Y,tokens:this.lexer.inlineTokens(Y)}}}}codespan(l){const c=this.rules.inline.code.exec(l);if(c){let d=c[2].replace(this.rules.other.newLineCharGlobal," ");const g=this.rules.other.nonSpaceChar.test(d),x=this.rules.other.startingSpaceChar.test(d)&&this.rules.other.endingSpaceChar.test(d);return g&&x&&(d=d.substring(1,d.length-1)),{type:"codespan",raw:c[0],text:d}}}br(l){const c=this.rules.inline.br.exec(l);if(c)return{type:"br",raw:c[0]}}del(l){const c=this.rules.inline.del.exec(l);if(c)return{type:"del",raw:c[0],text:c[2],tokens:this.lexer.inlineTokens(c[2])}}autolink(l){const c=this.rules.inline.autolink.exec(l);if(c){let d,g;return c[2]==="@"?(d=c[1],g="mailto:"+d):(d=c[1],g=d),{type:"link",raw:c[0],text:d,href:g,tokens:[{type:"text",raw:d,text:d}]}}}url(l){var d;let c;if(c=this.rules.inline.url.exec(l)){let g,x;if(c[2]==="@")g=c[0],x="mailto:"+g;else{let b;do b=c[0],c[0]=((d=this.rules.inline._backpedal.exec(c[0]))==null?void 0:d[0])??"";while(b!==c[0]);g=c[0],c[1]==="www."?x="http://"+c[0]:x=c[0]}return{type:"link",raw:c[0],text:g,href:x,tokens:[{type:"text",raw:g,text:g}]}}}inlineText(l){const c=this.rules.inline.text.exec(l);if(c){const d=this.lexer.state.inRawBlock;return{type:"text",raw:c[0],text:c[0],escaped:d}}}},co=class Wp{constructor(c){on(this,"tokens");on(this,"options");on(this,"state");on(this,"tokenizer");on(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=c||Ja,this.options.tokenizer=this.options.tokenizer||new kd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const d={other:Wr,block:ud.normal,inline:Ku.normal};this.options.pedantic?(d.block=ud.pedantic,d.inline=Ku.pedantic):this.options.gfm&&(d.block=ud.gfm,this.options.breaks?d.inline=Ku.breaks:d.inline=Ku.gfm),this.tokenizer.rules=d}static get rules(){return{block:ud,inline:Ku}}static lex(c,d){return new Wp(d).lex(c)}static lexInline(c,d){return new Wp(d).inlineTokens(c)}lex(c){c=c.replace(Wr.carriageReturn,`
`),this.blockTokens(c,this.tokens);for(let d=0;d<this.inlineQueue.length;d++){const g=this.inlineQueue[d];this.inlineTokens(g.src,g.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(c,d=[],g=!1){var x,b,C;for(this.options.pedantic&&(c=c.replace(Wr.tabCharGlobal,"    ").replace(Wr.spaceLine,""));c;){let N;if((b=(x=this.options.extensions)==null?void 0:x.block)!=null&&b.some(L=>(N=L.call({lexer:this},c,d))?(c=c.substring(N.raw.length),d.push(N),!0):!1))continue;if(N=this.tokenizer.space(c)){c=c.substring(N.raw.length);const L=d.at(-1);N.raw.length===1&&L!==void 0?L.raw+=`
`:d.push(N);continue}if(N=this.tokenizer.code(c)){c=c.substring(N.raw.length);const L=d.at(-1);(L==null?void 0:L.type)==="paragraph"||(L==null?void 0:L.type)==="text"?(L.raw+=`
`+N.raw,L.text+=`
`+N.text,this.inlineQueue.at(-1).src=L.text):d.push(N);continue}if(N=this.tokenizer.fences(c)){c=c.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.heading(c)){c=c.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.hr(c)){c=c.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.blockquote(c)){c=c.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.list(c)){c=c.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.html(c)){c=c.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.def(c)){c=c.substring(N.raw.length);const L=d.at(-1);(L==null?void 0:L.type)==="paragraph"||(L==null?void 0:L.type)==="text"?(L.raw+=`
`+N.raw,L.text+=`
`+N.raw,this.inlineQueue.at(-1).src=L.text):this.tokens.links[N.tag]||(this.tokens.links[N.tag]={href:N.href,title:N.title});continue}if(N=this.tokenizer.table(c)){c=c.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.lheading(c)){c=c.substring(N.raw.length),d.push(N);continue}let S=c;if((C=this.options.extensions)!=null&&C.startBlock){let L=1/0;const R=c.slice(1);let O;this.options.extensions.startBlock.forEach(A=>{O=A.call({lexer:this},R),typeof O=="number"&&O>=0&&(L=Math.min(L,O))}),L<1/0&&L>=0&&(S=c.substring(0,L+1))}if(this.state.top&&(N=this.tokenizer.paragraph(S))){const L=d.at(-1);g&&(L==null?void 0:L.type)==="paragraph"?(L.raw+=`
`+N.raw,L.text+=`
`+N.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=L.text):d.push(N),g=S.length!==c.length,c=c.substring(N.raw.length);continue}if(N=this.tokenizer.text(c)){c=c.substring(N.raw.length);const L=d.at(-1);(L==null?void 0:L.type)==="text"?(L.raw+=`
`+N.raw,L.text+=`
`+N.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=L.text):d.push(N);continue}if(c){const L="Infinite loop on byte: "+c.charCodeAt(0);if(this.options.silent){console.error(L);break}else throw new Error(L)}}return this.state.top=!0,d}inline(c,d=[]){return this.inlineQueue.push({src:c,tokens:d}),d}inlineTokens(c,d=[]){var N,S,L;let g=c,x=null;if(this.tokens.links){const R=Object.keys(this.tokens.links);if(R.length>0)for(;(x=this.tokenizer.rules.inline.reflinkSearch.exec(g))!=null;)R.includes(x[0].slice(x[0].lastIndexOf("[")+1,-1))&&(g=g.slice(0,x.index)+"["+"a".repeat(x[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(x=this.tokenizer.rules.inline.anyPunctuation.exec(g))!=null;)g=g.slice(0,x.index)+"++"+g.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(x=this.tokenizer.rules.inline.blockSkip.exec(g))!=null;)g=g.slice(0,x.index)+"["+"a".repeat(x[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let b=!1,C="";for(;c;){b||(C=""),b=!1;let R;if((S=(N=this.options.extensions)==null?void 0:N.inline)!=null&&S.some(A=>(R=A.call({lexer:this},c,d))?(c=c.substring(R.raw.length),d.push(R),!0):!1))continue;if(R=this.tokenizer.escape(c)){c=c.substring(R.raw.length),d.push(R);continue}if(R=this.tokenizer.tag(c)){c=c.substring(R.raw.length),d.push(R);continue}if(R=this.tokenizer.link(c)){c=c.substring(R.raw.length),d.push(R);continue}if(R=this.tokenizer.reflink(c,this.tokens.links)){c=c.substring(R.raw.length);const A=d.at(-1);R.type==="text"&&(A==null?void 0:A.type)==="text"?(A.raw+=R.raw,A.text+=R.text):d.push(R);continue}if(R=this.tokenizer.emStrong(c,g,C)){c=c.substring(R.raw.length),d.push(R);continue}if(R=this.tokenizer.codespan(c)){c=c.substring(R.raw.length),d.push(R);continue}if(R=this.tokenizer.br(c)){c=c.substring(R.raw.length),d.push(R);continue}if(R=this.tokenizer.del(c)){c=c.substring(R.raw.length),d.push(R);continue}if(R=this.tokenizer.autolink(c)){c=c.substring(R.raw.length),d.push(R);continue}if(!this.state.inLink&&(R=this.tokenizer.url(c))){c=c.substring(R.raw.length),d.push(R);continue}let O=c;if((L=this.options.extensions)!=null&&L.startInline){let A=1/0;const Y=c.slice(1);let ne;this.options.extensions.startInline.forEach(H=>{ne=H.call({lexer:this},Y),typeof ne=="number"&&ne>=0&&(A=Math.min(A,ne))}),A<1/0&&A>=0&&(O=c.substring(0,A+1))}if(R=this.tokenizer.inlineText(O)){c=c.substring(R.raw.length),R.raw.slice(-1)!=="_"&&(C=R.raw.slice(-1)),b=!0;const A=d.at(-1);(A==null?void 0:A.type)==="text"?(A.raw+=R.raw,A.text+=R.text):d.push(R);continue}if(c){const A="Infinite loop on byte: "+c.charCodeAt(0);if(this.options.silent){console.error(A);break}else throw new Error(A)}}return d}},Sd=class{constructor(l){on(this,"options");on(this,"parser");this.options=l||Ja}space(l){return""}code({text:l,lang:c,escaped:d}){var b;const g=(b=(c||"").match(Wr.notSpaceStart))==null?void 0:b[0],x=l.replace(Wr.endingNewline,"")+`
`;return g?'<pre><code class="language-'+js(g)+'">'+(d?x:js(x,!0))+`</code></pre>
`:"<pre><code>"+(d?x:js(x,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:c}){return`<h${c}>${this.parser.parseInline(l)}</h${c}>
`}hr(l){return`<hr>
`}list(l){const c=l.ordered,d=l.start;let g="";for(let C=0;C<l.items.length;C++){const N=l.items[C];g+=this.listitem(N)}const x=c?"ol":"ul",b=c&&d!==1?' start="'+d+'"':"";return"<"+x+b+`>
`+g+"</"+x+`>
`}listitem(l){var d;let c="";if(l.task){const g=this.checkbox({checked:!!l.checked});l.loose?((d=l.tokens[0])==null?void 0:d.type)==="paragraph"?(l.tokens[0].text=g+" "+l.tokens[0].text,l.tokens[0].tokens&&l.tokens[0].tokens.length>0&&l.tokens[0].tokens[0].type==="text"&&(l.tokens[0].tokens[0].text=g+" "+js(l.tokens[0].tokens[0].text),l.tokens[0].tokens[0].escaped=!0)):l.tokens.unshift({type:"text",raw:g+" ",text:g+" ",escaped:!0}):c+=g+" "}return c+=this.parser.parse(l.tokens,!!l.loose),`<li>${c}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let c="",d="";for(let x=0;x<l.header.length;x++)d+=this.tablecell(l.header[x]);c+=this.tablerow({text:d});let g="";for(let x=0;x<l.rows.length;x++){const b=l.rows[x];d="";for(let C=0;C<b.length;C++)d+=this.tablecell(b[C]);g+=this.tablerow({text:d})}return g&&(g=`<tbody>${g}</tbody>`),`<table>
<thead>
`+c+`</thead>
`+g+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){const c=this.parser.parseInline(l.tokens),d=l.header?"th":"td";return(l.align?`<${d} align="${l.align}">`:`<${d}>`)+c+`</${d}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${js(l,!0)}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:c,tokens:d}){const g=this.parser.parseInline(d),x=Bh(l);if(x===null)return g;l=x;let b='<a href="'+l+'"';return c&&(b+=' title="'+js(c)+'"'),b+=">"+g+"</a>",b}image({href:l,title:c,text:d,tokens:g}){g&&(d=this.parser.parseInline(g,this.parser.textRenderer));const x=Bh(l);if(x===null)return js(d);l=x;let b=`<img src="${l}" alt="${d}"`;return c&&(b+=` title="${js(c)}"`),b+=">",b}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):"escaped"in l&&l.escaped?l.text:js(l.text)}},ph=class{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}},po=class Hp{constructor(c){on(this,"options");on(this,"renderer");on(this,"textRenderer");this.options=c||Ja,this.options.renderer=this.options.renderer||new Sd,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ph}static parse(c,d){return new Hp(d).parse(c)}static parseInline(c,d){return new Hp(d).parseInline(c)}parse(c,d=!0){var x,b;let g="";for(let C=0;C<c.length;C++){const N=c[C];if((b=(x=this.options.extensions)==null?void 0:x.renderers)!=null&&b[N.type]){const L=N,R=this.options.extensions.renderers[L.type].call({parser:this},L);if(R!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(L.type)){g+=R||"";continue}}const S=N;switch(S.type){case"space":{g+=this.renderer.space(S);continue}case"hr":{g+=this.renderer.hr(S);continue}case"heading":{g+=this.renderer.heading(S);continue}case"code":{g+=this.renderer.code(S);continue}case"table":{g+=this.renderer.table(S);continue}case"blockquote":{g+=this.renderer.blockquote(S);continue}case"list":{g+=this.renderer.list(S);continue}case"html":{g+=this.renderer.html(S);continue}case"paragraph":{g+=this.renderer.paragraph(S);continue}case"text":{let L=S,R=this.renderer.text(L);for(;C+1<c.length&&c[C+1].type==="text";)L=c[++C],R+=`
`+this.renderer.text(L);d?g+=this.renderer.paragraph({type:"paragraph",raw:R,text:R,tokens:[{type:"text",raw:R,text:R,escaped:!0}]}):g+=R;continue}default:{const L='Token with "'+S.type+'" type was not found.';if(this.options.silent)return console.error(L),"";throw new Error(L)}}}return g}parseInline(c,d=this.renderer){var x,b;let g="";for(let C=0;C<c.length;C++){const N=c[C];if((b=(x=this.options.extensions)==null?void 0:x.renderers)!=null&&b[N.type]){const L=this.options.extensions.renderers[N.type].call({parser:this},N);if(L!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(N.type)){g+=L||"";continue}}const S=N;switch(S.type){case"escape":{g+=d.text(S);break}case"html":{g+=d.html(S);break}case"link":{g+=d.link(S);break}case"image":{g+=d.image(S);break}case"strong":{g+=d.strong(S);break}case"em":{g+=d.em(S);break}case"codespan":{g+=d.codespan(S);break}case"br":{g+=d.br(S);break}case"del":{g+=d.del(S);break}case"text":{g+=d.text(S);break}default:{const L='Token with "'+S.type+'" type was not found.';if(this.options.silent)return console.error(L),"";throw new Error(L)}}}return g}},Rp,hd=(Rp=class{constructor(l){on(this,"options");on(this,"block");this.options=l||Ja}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}provideLexer(){return this.block?co.lex:co.lexInline}provideParser(){return this.block?po.parse:po.parseInline}},on(Rp,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Rp),Ev=class{constructor(...l){on(this,"defaults",ih());on(this,"options",this.setOptions);on(this,"parse",this.parseMarkdown(!0));on(this,"parseInline",this.parseMarkdown(!1));on(this,"Parser",po);on(this,"Renderer",Sd);on(this,"TextRenderer",ph);on(this,"Lexer",co);on(this,"Tokenizer",kd);on(this,"Hooks",hd);this.use(...l)}walkTokens(l,c){var g,x;let d=[];for(const b of l)switch(d=d.concat(c.call(this,b)),b.type){case"table":{const C=b;for(const N of C.header)d=d.concat(this.walkTokens(N.tokens,c));for(const N of C.rows)for(const S of N)d=d.concat(this.walkTokens(S.tokens,c));break}case"list":{const C=b;d=d.concat(this.walkTokens(C.items,c));break}default:{const C=b;(x=(g=this.defaults.extensions)==null?void 0:g.childTokens)!=null&&x[C.type]?this.defaults.extensions.childTokens[C.type].forEach(N=>{const S=C[N].flat(1/0);d=d.concat(this.walkTokens(S,c))}):C.tokens&&(d=d.concat(this.walkTokens(C.tokens,c)))}}return d}use(...l){const c=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(d=>{const g={...d};if(g.async=this.defaults.async||g.async||!1,d.extensions&&(d.extensions.forEach(x=>{if(!x.name)throw new Error("extension name required");if("renderer"in x){const b=c.renderers[x.name];b?c.renderers[x.name]=function(...C){let N=x.renderer.apply(this,C);return N===!1&&(N=b.apply(this,C)),N}:c.renderers[x.name]=x.renderer}if("tokenizer"in x){if(!x.level||x.level!=="block"&&x.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const b=c[x.level];b?b.unshift(x.tokenizer):c[x.level]=[x.tokenizer],x.start&&(x.level==="block"?c.startBlock?c.startBlock.push(x.start):c.startBlock=[x.start]:x.level==="inline"&&(c.startInline?c.startInline.push(x.start):c.startInline=[x.start]))}"childTokens"in x&&x.childTokens&&(c.childTokens[x.name]=x.childTokens)}),g.extensions=c),d.renderer){const x=this.defaults.renderer||new Sd(this.defaults);for(const b in d.renderer){if(!(b in x))throw new Error(`renderer '${b}' does not exist`);if(["options","parser"].includes(b))continue;const C=b,N=d.renderer[C],S=x[C];x[C]=(...L)=>{let R=N.apply(x,L);return R===!1&&(R=S.apply(x,L)),R||""}}g.renderer=x}if(d.tokenizer){const x=this.defaults.tokenizer||new kd(this.defaults);for(const b in d.tokenizer){if(!(b in x))throw new Error(`tokenizer '${b}' does not exist`);if(["options","rules","lexer"].includes(b))continue;const C=b,N=d.tokenizer[C],S=x[C];x[C]=(...L)=>{let R=N.apply(x,L);return R===!1&&(R=S.apply(x,L)),R}}g.tokenizer=x}if(d.hooks){const x=this.defaults.hooks||new hd;for(const b in d.hooks){if(!(b in x))throw new Error(`hook '${b}' does not exist`);if(["options","block"].includes(b))continue;const C=b,N=d.hooks[C],S=x[C];hd.passThroughHooks.has(b)?x[C]=L=>{if(this.defaults.async)return Promise.resolve(N.call(x,L)).then(O=>S.call(x,O));const R=N.call(x,L);return S.call(x,R)}:x[C]=(...L)=>{let R=N.apply(x,L);return R===!1&&(R=S.apply(x,L)),R}}g.hooks=x}if(d.walkTokens){const x=this.defaults.walkTokens,b=d.walkTokens;g.walkTokens=function(C){let N=[];return N.push(b.call(this,C)),x&&(N=N.concat(x.call(this,C))),N}}this.defaults={...this.defaults,...g}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,c){return co.lex(l,c??this.defaults)}parser(l,c){return po.parse(l,c??this.defaults)}parseMarkdown(l){return(d,g)=>{const x={...g},b={...this.defaults,...x},C=this.onError(!!b.silent,!!b.async);if(this.defaults.async===!0&&x.async===!1)return C(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof d>"u"||d===null)return C(new Error("marked(): input parameter is undefined or null"));if(typeof d!="string")return C(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(d)+", string expected"));b.hooks&&(b.hooks.options=b,b.hooks.block=l);const N=b.hooks?b.hooks.provideLexer():l?co.lex:co.lexInline,S=b.hooks?b.hooks.provideParser():l?po.parse:po.parseInline;if(b.async)return Promise.resolve(b.hooks?b.hooks.preprocess(d):d).then(L=>N(L,b)).then(L=>b.hooks?b.hooks.processAllTokens(L):L).then(L=>b.walkTokens?Promise.all(this.walkTokens(L,b.walkTokens)).then(()=>L):L).then(L=>S(L,b)).then(L=>b.hooks?b.hooks.postprocess(L):L).catch(C);try{b.hooks&&(d=b.hooks.preprocess(d));let L=N(d,b);b.hooks&&(L=b.hooks.processAllTokens(L)),b.walkTokens&&this.walkTokens(L,b.walkTokens);let R=S(L,b);return b.hooks&&(R=b.hooks.postprocess(R)),R}catch(L){return C(L)}}}onError(l,c){return d=>{if(d.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const g="<p>An error occurred:</p><pre>"+js(d.message+"",!0)+"</pre>";return c?Promise.resolve(g):g}if(c)return Promise.reject(d);throw d}}},Va=new Ev;function Vt(l,c){return Va.parse(l,c)}Vt.options=Vt.setOptions=function(l){return Va.setOptions(l),Vt.defaults=Va.defaults,Vf(Vt.defaults),Vt};Vt.getDefaults=ih;Vt.defaults=Ja;Vt.use=function(...l){return Va.use(...l),Vt.defaults=Va.defaults,Vf(Vt.defaults),Vt};Vt.walkTokens=function(l,c){return Va.walkTokens(l,c)};Vt.parseInline=Va.parseInline;Vt.Parser=po;Vt.parser=po.parse;Vt.Renderer=Sd;Vt.TextRenderer=ph;Vt.Lexer=co;Vt.lexer=co.lex;Vt.Tokenizer=kd;Vt.Hooks=hd;Vt.parse=Vt;Vt.options;Vt.setOptions;Vt.use;Vt.walkTokens;Vt.parseInline;po.parse;co.lex;/*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE */function $h(l,c){(c==null||c>l.length)&&(c=l.length);for(var d=0,g=Array(c);d<c;d++)g[d]=l[d];return g}function Lv(l){if(Array.isArray(l))return l}function Pv(l,c){var d=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(d!=null){var g,x,b,C,N=[],S=!0,L=!1;try{if(b=(d=d.call(l)).next,c!==0)for(;!(S=(g=b.call(d)).done)&&(N.push(g.value),N.length!==c);S=!0);}catch(R){L=!0,x=R}finally{try{if(!S&&d.return!=null&&(C=d.return(),Object(C)!==C))return}finally{if(L)throw x}}return N}}function Av(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function Rv(l,c){return Lv(l)||Pv(l,c)||Iv(l,c)||Av()}function Iv(l,c){if(l){if(typeof l=="string")return $h(l,c);var d={}.toString.call(l).slice(8,-1);return d==="Object"&&l.constructor&&(d=l.constructor.name),d==="Map"||d==="Set"?Array.from(l):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?$h(l,c):void 0}}const om=Object.entries,Kh=Object.setPrototypeOf,Ov=Object.isFrozen,am=Object.getPrototypeOf,lm=Object.getOwnPropertyDescriptor;let sr=Object.freeze,_r=Object.seal,Bl=Object.create,um=typeof Reflect<"u"&&Reflect,Bp=um.apply,Up=um.construct;sr||(sr=function(c){return c});_r||(_r=function(c){return c});Bp||(Bp=function(c,d){for(var g=arguments.length,x=new Array(g>2?g-2:0),b=2;b<g;b++)x[b-2]=arguments[b];return c.apply(d,x)});Up||(Up=function(c){for(var d=arguments.length,g=new Array(d>1?d-1:0),x=1;x<d;x++)g[x-1]=arguments[x];return new c(...g)});const ao=bn(Array.prototype.forEach),Mv=bn(Array.prototype.lastIndexOf),Gh=bn(Array.prototype.pop),Yu=bn(Array.prototype.push),Dv=bn(Array.prototype.slice),zv=bn(Array.prototype.splice),$l=Array.isArray,Sp=cm(Set),_p=bn(Set.prototype.add),Vu=bn(Set.prototype.has),Ka=bn(String.prototype.toLowerCase),Cp=bn(String.prototype.toString),Yh=bn(String.prototype.match),Ju=bn(String.prototype.replace),Vh=bn(String.prototype.indexOf),Fv=bn(String.prototype.trim),Wv=bn(Number.prototype.toString),Hv=bn(Boolean.prototype.toString),Jh=typeof BigInt>"u"?null:bn(BigInt.prototype.toString),Xh=typeof Symbol>"u"?null:bn(Symbol.prototype.toString),ti=bn(Object.prototype.hasOwnProperty),Xu=bn(Object.prototype.toString),kr=bn(RegExp.prototype.test),lo=cm(TypeError);function bn(l){return function(c){c instanceof RegExp&&(c.lastIndex=0);for(var d=arguments.length,g=new Array(d>1?d-1:0),x=1;x<d;x++)g[x-1]=arguments[x];return Bp(l,c,g)}}function cm(l){return function(){for(var c=arguments.length,d=new Array(c),g=0;g<c;g++)d[g]=arguments[g];return Up(l,d)}}function Wt(l,c){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ka;if(Kh&&Kh(l,null),!$l(c))return l;let g=c.length;for(;g--;){let x=c[g];if(typeof x=="string"){const b=d(x);b!==x&&(Ov(c)||(c[g]=b),x=b)}l[x]=!0}return l}function Bv(l){for(let c=0;c<l.length;c++)ti(l,c)||(l[c]=null);return l}function gi(l){const c=Bl(null);for(const g of om(l)){var d=Rv(g,2);const x=d[0],b=d[1];ti(l,x)&&($l(b)?c[x]=Bv(b):b&&typeof b=="object"&&b.constructor===Object?c[x]=gi(b):c[x]=b)}return c}function Uv(l){switch(typeof l){case"string":return l;case"number":return Wv(l);case"boolean":return Hv(l);case"bigint":return Jh?Jh(l):"0";case"symbol":return Xh?Xh(l):"Symbol()";case"undefined":return Xu(l);case"function":case"object":{if(l===null)return Xu(l);const c=l,d=Mi(c,"toString");if(typeof d=="function"){const g=d(c);return typeof g=="string"?g:Xu(g)}return Xu(l)}default:return Xu(l)}}function Mi(l,c){for(;l!==null;){const g=lm(l,c);if(g){if(g.get)return bn(g.get);if(typeof g.value=="function")return bn(g.value)}l=am(l)}function d(){return null}return d}function qv(l,c){for(;l!==null;){const d=lm(l,c);if(d)return d.get?bn(d.get):null;l=am(l)}return null}function $v(l){try{return kr(l,""),!0}catch{return!1}}const Qh=sr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Tp=sr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Np=sr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Kv=sr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),jp=sr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Gv=sr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Zh=sr(["#text"]),ef=sr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Ep=sr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),tf=sr(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),cd=sr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Yv=_r(/{{[\w\W]*|^[\w\W]*}}/g),Vv=_r(/<%[\w\W]*|^[\w\W]*%>/g),Jv=_r(/\${[\w\W]*/g),Xv=_r(/^data-[\-\w.\u00B7-\uFFFF]+$/),Qv=_r(/^aria-[\-\w]+$/),nf=_r(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Zv=_r(/^(?:\w+script|data):/i),ex=_r(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),tx=_r(/^html$/i),nx=_r(/^[a-z][.\w]*(-[.\w]+)+$/i),Lp=_r(/<[/\w!]/g),rf=_r(/<[/\w]/g),rx=_r(/<\/no(script|embed|frames)/i),sf=_r(/\/>/i),Vn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},ix=sr(Wt({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),sx=function(){return typeof window>"u"?null:window},ox=function(c,d){if(typeof c!="object"||typeof c.createPolicy!="function")return null;let g=null;const x="data-tt-policy-suffix";d&&d.hasAttribute(x)&&(g=d.getAttribute(x));const b="dompurify"+(g?"#"+g:"");try{return c.createPolicy(b,{createHTML(C){return C},createScriptURL(C){return C}})}catch{return console.warn("TrustedTypes policy "+b+" could not be created."),null}},of=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Zo=function(c,d,g,x){return ti(c,d)&&$l(c[d])?Wt(x.base?gi(x.base):{},c[d],x.transform):g},Pp=function(c,d,g){const x=ti(c,d)?c[d]:void 0;return x&&typeof x=="object"?gi(x):g()};function dm(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:sx();const c=_e=>dm(_e);if(c.version="3.4.17",c.removed=[],!l||!l.document||l.document.nodeType!==Vn.document||!l.Element)return c.isSupported=!1,c;let d=l.document;const g=d,x=g.currentScript;l.DocumentFragment;const b=l.HTMLTemplateElement,C=l.Node,N=l.Element,S=l.NodeFilter;l.NamedNodeMap===void 0&&(l.NamedNodeMap||l.MozNamedAttrMap),l.HTMLFormElement;const L=l.DOMParser,R=l.trustedTypes,O=N.prototype,A=Mi(O,"cloneNode"),Y=Mi(O,"remove"),ne=Mi(O,"removeAttributeNode"),H=Mi(O,"nextSibling"),ae=Mi(O,"childNodes"),D=Mi(O,"parentNode"),U=Mi(O,"shadowRoot"),F=Mi(O,"attributes"),K=C&&C.prototype?Mi(C.prototype,"nodeType"):null,V=C&&C.prototype?Mi(C.prototype,"nodeName"):null,ge=C&&C.prototype?Mi(C.prototype,"ownerDocument"):null,ue=function(I){return K?K(I):I.nodeType},we=function(I){return V?V(I):I.nodeName},Ue=qv(O,"namespaceURI"),Le=function(I){return Ue?Ue(I):I.namespaceURI};if(typeof b=="function"){const _e=d.createElement("template");_e.content&&_e.content.ownerDocument&&(d=_e.content.ownerDocument)}let oe,Ce="",se,ye=!1,j=0;const X=function(){if(j>0)throw lo('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},q=function(I){X(),j++;try{return oe.createHTML(I)}finally{j--}},T=function(I){X(),j++;try{return oe.createScriptURL(I)}finally{j--}},P=function(){return ye||(se=ox(R,x),ye=!0),se},G=d,z=G.implementation,re=G.createNodeIterator,Ae=G.createDocumentFragment,Ge=G.getElementsByTagName,Ve=g.importNode;let ke=of();c.isSupported=typeof om=="function"&&typeof D=="function"&&z&&z.createHTMLDocument!==void 0;const Re=Yv,He=Vv,Be=Jv,tt=Xv,qe=Qv,Ht=Zv,Gt=ex,St=nx;let vt=nf,Fe=null;const rt=Wt({},[...Qh,...Tp,...Np,...jp,...Zh]);let et=null;const $t=Wt({},[...ef,...Ep,...tf,...cd]);let $e=Object.seal(Bl(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ht=null,ie=null;const Se=Object.seal(Bl(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let me=!0,wt=!0,Je=!1,at=!0,Ye=!1,yt=!0,pt=!1,fn=!1,Jn=null,Cr=null,Hr=!1,or=!1,vi=!1,xt=!1,Di=!0,it=!1;const Tr="user-content-";let Jt=!0,It=!1,Ot=null,jn={},un=null;const ar=Wt({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let wn=null;const ni=Wt({},["audio","video","img","source","image","track"]);let In=null;const lr=Wt({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Br="http://www.w3.org/1998/Math/MathML",En="http://www.w3.org/2000/svg",Nr="http://www.w3.org/1999/xhtml";let Xn=Nr,ri=!1,Ur=null;const qr=Wt({},[Br,En,Nr],Cp),ur=sr(["mi","mo","mn","ms","mtext"]);let $r=Wt({},ur);const Ls=sr(["annotation-xml"]);let kn=Wt({},Ls);const mo=Wt({},["title","style","font","a","script"]);let Rr=null;const Ir=["application/xhtml+xml","text/html"],jr="text/html";let Bt=null,Er=null;const zi=d.createElement("form"),ii=function(I){return I instanceof RegExp||I instanceof Function},xi=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Er&&Er===I)return;(!I||typeof I!="object")&&(I={}),I=gi(I),Rr=Ir.indexOf(I.PARSER_MEDIA_TYPE)===-1?jr:I.PARSER_MEDIA_TYPE,Bt=Rr==="application/xhtml+xml"?Cp:Ka,Fe=Zo(I,"ALLOWED_TAGS",rt,{transform:Bt}),et=Zo(I,"ALLOWED_ATTR",$t,{transform:Bt}),Ur=Zo(I,"ALLOWED_NAMESPACES",qr,{transform:Cp}),In=Zo(I,"ADD_URI_SAFE_ATTR",lr,{transform:Bt,base:lr}),wn=Zo(I,"ADD_DATA_URI_TAGS",ni,{transform:Bt,base:ni}),un=Zo(I,"FORBID_CONTENTS",ar,{transform:Bt}),ht=Zo(I,"FORBID_TAGS",gi({}),{transform:Bt}),ie=Zo(I,"FORBID_ATTR",gi({}),{transform:Bt}),jn=ti(I,"USE_PROFILES")?I.USE_PROFILES&&typeof I.USE_PROFILES=="object"?gi(I.USE_PROFILES):I.USE_PROFILES:!1,me=I.ALLOW_ARIA_ATTR!==!1,wt=I.ALLOW_DATA_ATTR!==!1,Je=I.ALLOW_UNKNOWN_PROTOCOLS||!1,at=I.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ye=I.SAFE_FOR_TEMPLATES||!1,yt=I.SAFE_FOR_XML!==!1,pt=I.WHOLE_DOCUMENT||!1,or=I.RETURN_DOM||!1,vi=I.RETURN_DOM_FRAGMENT||!1,xt=I.RETURN_TRUSTED_TYPE||!1,Hr=I.FORCE_BODY||!1,Di=I.SANITIZE_DOM!==!1,it=I.SANITIZE_NAMED_PROPS||!1,Jt=I.KEEP_CONTENT!==!1,It=I.IN_PLACE||!1,vt=$v(I.ALLOWED_URI_REGEXP)?I.ALLOWED_URI_REGEXP:nf,Xn=typeof I.NAMESPACE=="string"?I.NAMESPACE:Nr,$r=Pp(I,"MATHML_TEXT_INTEGRATION_POINTS",()=>Wt({},ur)),kn=Pp(I,"HTML_INTEGRATION_POINTS",()=>Wt({},Ls));const Z=Pp(I,"CUSTOM_ELEMENT_HANDLING",()=>Bl(null));if($e=Bl(null),ti(Z,"tagNameCheck")&&ii(Z.tagNameCheck)&&($e.tagNameCheck=Z.tagNameCheck),ti(Z,"attributeNameCheck")&&ii(Z.attributeNameCheck)&&($e.attributeNameCheck=Z.attributeNameCheck),ti(Z,"allowCustomizedBuiltInElements")&&typeof Z.allowCustomizedBuiltInElements=="boolean"&&($e.allowCustomizedBuiltInElements=Z.allowCustomizedBuiltInElements),_r($e),Ye&&(wt=!1),vi&&(or=!0),jn&&(Fe=Wt({},Zh),et=Bl(null),jn.html===!0&&(Wt(Fe,Qh),Wt(et,ef)),jn.svg===!0&&(Wt(Fe,Tp),Wt(et,Ep),Wt(et,cd)),jn.svgFilters===!0&&(Wt(Fe,Np),Wt(et,Ep),Wt(et,cd)),jn.mathMl===!0&&(Wt(Fe,jp),Wt(et,tf),Wt(et,cd))),Se.tagCheck=null,Se.attributeCheck=null,ti(I,"ADD_TAGS")&&(typeof I.ADD_TAGS=="function"?Se.tagCheck=I.ADD_TAGS:$l(I.ADD_TAGS)&&(Fe===rt&&(Fe=gi(Fe)),Wt(Fe,I.ADD_TAGS,Bt))),ti(I,"ADD_ATTR")&&(typeof I.ADD_ATTR=="function"?Se.attributeCheck=I.ADD_ATTR:$l(I.ADD_ATTR)&&(et===$t&&(et=gi(et)),Wt(et,I.ADD_ATTR,Bt))),ti(I,"ADD_FORBID_CONTENTS")&&$l(I.ADD_FORBID_CONTENTS)&&(un===ar&&(un=gi(un)),Wt(un,I.ADD_FORBID_CONTENTS,Bt)),Jt&&(Fe["#text"]=!0),pt&&Wt(Fe,["html","head","body"]),Fe.table&&(Wt(Fe,["tbody"]),delete ht.tbody),I.TRUSTED_TYPES_POLICY){if(typeof I.TRUSTED_TYPES_POLICY.createHTML!="function")throw lo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof I.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw lo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const xe=oe;oe=I.TRUSTED_TYPES_POLICY;try{Ce=q("")}catch(be){throw oe=xe,be}}else I.TRUSTED_TYPES_POLICY===null?(oe=void 0,Ce=""):(oe===void 0&&(oe=P()),oe&&typeof Ce=="string"&&(Ce=q("")));sr&&sr(I),Er=I},At=Wt({},[...Tp,...Np,...Kv]),os=Wt({},[...jp,...Gv]),bi=function(I,Z,xe){return Z.namespaceURI===Nr?I==="svg":Z.namespaceURI===Br?I==="svg"&&(xe==="annotation-xml"||$r[xe]):!!At[I]},Xt=function(I,Z,xe){return Z.namespaceURI===Nr?I==="math":Z.namespaceURI===En?I==="math"&&kn[xe]:!!os[I]},Qe=function(I,Z,xe){return Z.namespaceURI===En&&!kn[xe]||Z.namespaceURI===Br&&!$r[xe]?!1:!os[I]&&(mo[I]||!At[I])},si=function(I){const Z=Le(I),xe=Ka(we(I)),be=D(I);let nt,ct;return be&&ue(be)===Vn.element?(nt={namespaceURI:Le(be)},ct=Ka(we(be))):(nt={namespaceURI:Xn},ct="template"),Ur[Z]?Z===En?bi(xe,nt,ct):Z===Br?Xt(xe,nt,ct):Z===Nr?Qe(xe,nt,ct):!!(Rr==="application/xhtml+xml"&&Ur[Z]):!1},cr=function(I){Yu(c.removed,{element:I});try{D(I).removeChild(I)}catch{if(Y(I),!D(I))throw lo("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},On=function(I,Z,xe){try{ne(I,Z)}catch{try{I.removeAttribute(xe)}catch{}}},_=function(I){de(I);const Z=ae(I);Z&&ao(Dv(Z),be=>{try{Y(be)}catch{}});const xe=ue(I)===Vn.element?F(I):null;if(xe)for(let be=xe.length-1;be>=0;--be){const nt=xe[be],ct=nt&&nt.name;typeof ct=="string"&&On(I,nt,ct)}},W=function(I,Z,xe){if(!xe)try{xe=Z.getAttributeNode(I)}catch{xe=null}Yu(c.removed,{attribute:xe||null,from:Z});try{xe?ne(Z,xe):Z.removeAttribute(I)}catch{try{Z.removeAttribute(I)}catch{}}if(I==="is")if(or||vi)try{cr(Z)}catch{}else try{Z.setAttribute(I,"")}catch{}},he=function(I){const Z=F(I);if(Z)for(let xe=Z.length-1;xe>=0;--xe){const be=Z[xe],nt=be&&be.name;typeof nt!="string"||et[Bt(nt)]||On(I,be,nt)}},Te=function(I,Z){let xe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const be=[I];for(;be.length>0;){const nt=be.pop();if(Z(nt)===!1)continue;if(xe&&ue(nt)===Vn.element){const _t=U(nt);Kr(_t)&&be.push(_t)}const ct=ae(nt);if(ct)for(let _t=ct.length-1;_t>=0;--_t)be.push(ct[_t])}},de=function(I){Te(I,Z=>{ue(Z)===Vn.element&&he(Z)})},We=function(I){const Z=[];return Te(I,xe=>{Z.push(xe)},!0),Z},Tt=function(I,Z){const xe=Sp();ao(We(I),be=>{ue(be)===Vn.element&&_p(xe,be)}),ao(Z,be=>{ue(be)===Vn.element&&!Vu(xe,be)&&he(be)})},en=function(I,Z){let xe=!1;return ao(c.removed,be=>{be.element&&(xe=xe||be.element===I,de(be.element))}),Tt(I,Z),xe},Sn=8,oi=function(I,Z){const xe=Ot;let be=null;const nt=()=>(be||(be=Sp(),ao(Z,ct=>{_p(be,ct)})),be);for(let ct=0;;ct++){const _t=We(I),mn=[I];let hr=!1;if(ao(_t,cn=>{ue(cn)===Vn.documentFragment?Yu(mn,cn):!hr&&!Vu(xe,cn)&&(hr=Vu(nt(),cn))}),!hr)return;if(ct>=Sn)throw lo("the tree kept changing during in-place sanitization; refusing to return it");ao(mn,(cn,Kn)=>{Xa(cn,Kn>0,I,nt())})}},Xa=function(I,Z,xe,be){const nt=$n(I);let ct;for(;ct=nt.nextNode();)!Vu(be,ct)||Vu(Ot,ct)||(Z&&dr(ke.uponSanitizeShadowNode,ct,null),Or(ct,xe),Hi(ct,xe),Kr(ct.content)&&Os(ct.content))},gt=function(I){Ot&&_p(Ot,I)},go=function(I,Z){return yt?I==="patchsrc"?!0:I==="for"&&Z!=="label"&&Z!=="output":!1},ra=function(I){yt&&Te(I,Z=>{const xe=ue(Z);if(xe===Vn.processingInstruction||xe===Vn.comment&&kr(rf,Z.data)){try{Y(Z)}catch{}return!1}if(xe===Vn.element){const be=Z,nt=Bt(we(Z));try{be.hasAttribute&&be.hasAttribute("patchsrc")&&be.removeAttribute("patchsrc"),be.hasAttribute&&be.hasAttribute("for")&&go("for",nt)&&be.removeAttribute("for")}catch{}}return!0})},Fi=function(I){let Z=null,xe=null;if(Hr)I="<remove></remove>"+I;else{const ct=Yh(I,/^[\r\n\t ]+/);xe=ct&&ct[0]}Rr==="application/xhtml+xml"&&Xn===Nr&&(I='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+I+"</body></html>");const be=oe?q(I):I;if(Xn===Nr)try{Z=new L().parseFromString(be,Rr)}catch{}if(!Z||!Z.documentElement){Z=z.createDocument(Xn,"template",null);try{Z.documentElement.innerHTML=ri?Ce:be}catch{}}const nt=Z.body||Z.documentElement;return I&&xe&&nt.insertBefore(d.createTextNode(xe),nt.childNodes[0]||null),Xn===Nr?Ge.call(Z,pt?"html":"body")[0]:pt?Z.documentElement:nt},$n=function(I){const Z=ge?ge(I):I.ownerDocument;return re.call(Z||I,I,S.SHOW_ELEMENT|S.SHOW_COMMENT|S.SHOW_TEXT|S.SHOW_PROCESSING_INSTRUCTION|S.SHOW_CDATA_SECTION,null)},Ps=function(I){return I=Ju(I,Re," "),I=Ju(I,He," "),I=Ju(I,Be," "),I},as=function(I){var Z;Et(I);const xe=(Z=I.querySelectorAll)===null||Z===void 0?void 0:Z.call(I,"template");xe&&ao(xe,be=>{Kr(be.content)&&as(be.content)})},Et=function(I){I.normalize();const Z=ge?ge(I):I.ownerDocument,xe=re.call(Z||I,I,S.SHOW_TEXT|S.SHOW_COMMENT|S.SHOW_CDATA_SECTION|S.SHOW_PROCESSING_INSTRUCTION,null);let be=xe.nextNode();for(;be;)be.data=Ps(be.data),be=xe.nextNode()},Wi=function(I){const Z=V?V(I):null;return typeof Z!="string"||Bt(Z)!=="form"?!1:typeof I.nodeName!="string"||typeof I.textContent!="string"||typeof I.removeChild!="function"||I.attributes!==F(I)||typeof I.removeAttribute!="function"||typeof I.removeAttributeNode!="function"||typeof I.getAttributeNode!="function"||typeof I.setAttribute!="function"||typeof I.namespaceURI!="string"||typeof I.insertBefore!="function"||typeof I.hasChildNodes!="function"||I.nodeType!==K(I)||I.childNodes!==ae(I)},Kr=function(I){if(!K||typeof I!="object"||I===null)return!1;try{return K(I)===Vn.documentFragment}catch{return!1}},ai=function(I){if(!K||typeof I!="object"||I===null)return!1;try{return typeof K(I)=="number"}catch{return!1}};function dr(_e,I,Z){_e.length!==0&&ao(_e,xe=>{xe.call(c,I,Z,Er)})}const ia=function(I,Z){return!!(yt&&I.hasChildNodes()&&!ai(I.firstElementChild)&&kr(Lp,I.textContent)&&kr(Lp,I.innerHTML)||yt&&ix[Z]&&ue(I)===Vn.element&&Le(I)===Nr&&(ai(I.firstElementChild)||typeof I.textContent=="string"&&kr(Lp,I.textContent))||I.nodeType===Vn.processingInstruction||yt&&I.nodeType===Vn.comment&&kr(rf,I.data))},ls=function(I,Z){if(I instanceof RegExp)return kr(I,Z);if(I instanceof Function){for(var xe=arguments.length,be=new Array(xe>2?xe-2:0),nt=2;nt<xe;nt++)be[nt-2]=arguments[nt];return!!I(Z,...be)}return!1},yo=function(I,Z,xe){if(!ht[Z]&&us(Z)&&ls($e.tagNameCheck,Z))return!1;if(Jt&&!un[Z]&&!un[Ka(Z)]){const be=D(I),nt=ae(I);if(nt&&be){const ct=nt.length;for(let _t=ct-1;_t>=0;--_t){const mn=I===xe?A(nt[_t],!0):nt[_t];be.insertBefore(mn,H(I))}}}return cr(I),!0},As=function(I,Z,xe,be){return I.length===0?Z:Z===xe||Z===be?gi(Z):Z},pr=function(I,Z){return I===Z||D(I)!==null?!1:(It&&de(I),!0)},Or=function(I,Z){if(gt(I),dr(ke.beforeSanitizeElements,I,null),pr(I,Z))return!0;if(Wi(I))return cr(I),!0;const xe=Bt(we(I));if(Fe=As(ke.uponSanitizeElement,Fe,rt,Jn),dr(ke.uponSanitizeElement,I,{tagName:xe,allowedTags:Fe}),pr(I,Z))return!0;if(ia(I,xe))return cr(I),!0;if(ht[xe]||!(Se.tagCheck instanceof Function&&Se.tagCheck(xe))&&!Fe[xe]){const be=yo(I,xe,Z);return be===!1&&(dr(ke.afterSanitizeElements,I,null),pr(I,Z))?!0:be}if(ue(I)===Vn.element&&!si(I)||(xe==="noscript"||xe==="noembed"||xe==="noframes")&&kr(rx,I.innerHTML))return cr(I),!0;if(Ye&&I.nodeType===Vn.text){const be=Ps(I.textContent);I.textContent!==be&&(Yu(c.removed,{element:I.cloneNode()}),I.textContent=be)}return dr(ke.afterSanitizeElements,I,null),pr(I,Z)},Mn=function(I,Z,xe){if(ie[Z]||go(Z,I)||Di&&(Z==="id"||Z==="name")&&(xe in d||xe in zi))return!1;const be=et[Z]||Se.attributeCheck instanceof Function&&Se.attributeCheck(Z,I);return wt&&kr(tt,Z)||me&&kr(qe,Z)?!0:be?In[Z]||kr(vt,Ju(xe,Gt,""))||(Z==="src"||Z==="xlink:href"||Z==="href")&&I!=="script"&&Vh(xe,"data:")===0&&wn[I]||Je&&!kr(Ht,Ju(xe,Gt,""))?!0:!xe:us(I)&&ls($e.tagNameCheck,I)&&ls($e.attributeNameCheck,Z,I)||Z==="is"&&$e.allowCustomizedBuiltInElements&&ls($e.tagNameCheck,xe)},Rs=Wt({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),us=function(I){return!Rs[Ka(I)]&&kr(St,I)},Mr=function(I,Z,xe,be){if(oe&&typeof R=="object"&&typeof R.getAttributeType=="function"&&!xe)switch(R.getAttributeType(I,Z)){case"TrustedHTML":return q(be);case"TrustedScriptURL":return T(be)}return be},Is=function(I,Z,xe,be){try{return xe?I.setAttributeNS(xe,Z,be):I.setAttribute(Z,be),Wi(I)?(cr(I),!1):!0}catch{return W(Z,I),!1}},sa=function(I,Z){return yt&&kr(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Z)?!0:Ka(I)==="attributename"&&Yh(Z,"href")!==null},Hi=function(I,Z){if(dr(ke.beforeSanitizeAttributes,I,null),pr(I,Z))return;const xe=I.attributes;if(!xe||Wi(I))return;et=As(ke.uponSanitizeAttribute,et,$t,Cr);const be={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:et,forceKeepAttr:void 0};let nt=xe.length;const ct=Bt(I.nodeName);for(;nt--;){const _t=xe[nt],mn=_t.name,hr=_t.namespaceURI,cn=_t.value,Kn=Bt(mn),wi=cn;let Rt=mn==="value"?wi:Fv(wi),xo=!1;if(be.attrName=Kn,be.attrValue=Rt,be.keepAttr=!0,be.forceKeepAttr=void 0,dr(ke.uponSanitizeAttribute,I,be),Rt=be.attrValue,it&&(Kn==="id"||Kn==="name")&&Vh(Rt,Tr)!==0&&(W(mn,I,_t),Rt=Tr+Rt,xo=!0),sa(mn,Rt)){W(mn,I,_t);continue}if(!be.forceKeepAttr){if(!be.keepAttr){W(mn,I,_t);continue}if(!at&&kr(sf,Rt)){W(mn,I,_t);continue}if(Ye&&(Rt=Ps(Rt)),!Mn(ct,Kn,Rt)){W(mn,I,_t);continue}Rt=Mr(ct,Kn,hr,Rt),Rt!==wi&&Is(I,mn,hr,Rt)&&xo&&Gh(c.removed)}}dr(ke.afterSanitizeAttributes,I,null),pr(I,Z)},Os=function(I){let Z=null;const xe=$n(I);for(dr(ke.beforeSanitizeShadowDOM,I,null);Z=xe.nextNode();)if(dr(ke.uponSanitizeShadowNode,Z,null),Or(Z,I),Hi(Z,I),Kr(Z.content)&&Os(Z.content),ue(Z)===Vn.element){const be=U(Z);Kr(be)&&(vo(be),Os(be))}Ye&&Et(I),dr(ke.afterSanitizeShadowDOM,I,null)},vo=function(I){const Z=[{node:I,shadow:null}];for(;Z.length>0;){const xe=Z.pop();if(xe.shadow){Os(xe.shadow);continue}const be=xe.node,nt=ue(be)===Vn.element,ct=ae(be);if(ct)for(let _t=ct.length-1;_t>=0;--_t)Z.push({node:ct[_t],shadow:null});if(nt){const _t=V?V(be):null;if(typeof _t=="string"&&Bt(_t)==="template"){const mn=be.content;Kr(mn)&&Z.push({node:mn,shadow:null})}}if(nt){const _t=U(be);Kr(_t)&&Z.push({node:null,shadow:_t},{node:_t,shadow:null})}}};return c.sanitize=function(_e){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Z=null,xe=null,be=null,nt=null;if(ri=!_e,ri&&(_e="<!-->"),typeof _e!="string"&&!ai(_e)&&(_e=Uv(_e),typeof _e!="string"))throw lo("dirty is not a string, aborting");if(!c.isSupported)return _e;fn?(Fe=Jn,et=Cr):xi(I),(ke.uponSanitizeElement.length>0||ke.uponSanitizeAttribute.length>0)&&(Fe=gi(Fe)),ke.uponSanitizeAttribute.length>0&&(et=gi(et)),c.removed=[];const ct=It&&typeof _e!="string"&&ai(_e);let _t=[];const mn=Ot;if(ct){ra(_e);const Kn=we(_e);if(typeof Kn=="string"){const wi=Bt(Kn);if(!Fe[wi]||ht[wi])throw _(_e),lo("root node is forbidden and cannot be sanitized in-place")}if(Wi(_e))throw _(_e),lo("root node is clobbered and cannot be sanitized in-place");_t=We(_e),Ot=Sp()}else if(ai(_e))Z=Fi("<!---->"),xe=Z.ownerDocument.importNode(_e,!0),xe.nodeType===Vn.element&&xe.nodeName==="BODY"||xe.nodeName==="HTML"?Z=xe:Z.appendChild(xe),vo(Z);else{if(!or&&!Ye&&!pt&&_e.indexOf("<")===-1)return oe&&xt?q(_e):_e;if(Z=Fi(_e),!Z)return or?null:xt?Ce:""}Z&&Hr&&cr(Z.firstChild);const hr=ct?_e:Z;try{ct&&vo(_e);const Kn=$n(hr);for(;be=Kn.nextNode();)Or(be,hr),Hi(be,hr),Kr(be.content)&&Os(be.content);ct&&oi(_e,_t)}catch(Kn){throw ct&&(_(_e),en(_e,_t)),Kn}finally{Ot=mn}if(ct){if(en(_e,_t))throw lo("a node selected for removal could not be safely returned; refusing to sanitize in place");return Ye&&as(_e),_e}if(or){if(Ye&&as(Z),vi)for(nt=Ae.call(Z.ownerDocument);Z.firstChild;)nt.appendChild(Z.firstChild);else nt=Z;return(et.shadowroot||et.shadowrootmode)&&(nt=Ve.call(g,nt,!0)),nt}let cn=pt?Z.outerHTML:Z.innerHTML;return pt&&Fe["!doctype"]&&Z.ownerDocument&&Z.ownerDocument.doctype&&Z.ownerDocument.doctype.name&&kr(tx,Z.ownerDocument.doctype.name)&&(cn="<!DOCTYPE "+Z.ownerDocument.doctype.name+`>
`+cn),Ye&&(cn=Ps(cn)),oe&&xt?q(cn):cn},c.setConfig=function(){let _e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xi(_e),fn=!0,Jn=Fe,Cr=et},c.clearConfig=function(){Er=null,fn=!1,Jn=null,Cr=null,oe=se,Ce=""},c.isValidAttribute=function(_e,I,Z){Er||xi({});const xe=Bt(_e),be=Bt(I);return typeof Z=="string"&&(sa(I,Z)||!at&&kr(sf,Z))?!1:Mn(xe,be,Z)},c.addHook=function(_e,I){typeof I=="function"&&ti(ke,_e)&&Yu(ke[_e],I)},c.removeHook=function(_e,I){if(ti(ke,_e)){if(I!==void 0){const Z=Mv(ke[_e],I);return Z===-1?void 0:zv(ke[_e],Z,1)[0]}return Gh(ke[_e])}},c.removeHooks=function(_e){ti(ke,_e)&&(ke[_e]=[])},c.removeAllHooks=function(){ke=of()},c}var ax=dm();function lx(l,c=null){const d=String(l||""),g=d.split(`
`),x=g.findIndex(S=>/^##\s+(?:Practice|Solve)(?:\s*[:—-].*)?\s*$/i.test(S)),b=x===-1?-1:g.findIndex((S,L)=>L>x&&/^##\s+(?:Reflect(?:ion)?|Learn|Stop and think|Optional reading)(?:\b|\s*[:—-])/i.test(S)),C=x>=0?g.slice(x,b<0?g.length:b).join(`
`):`# Solve

${(c==null?void 0:c.challenge)||"Try the lesson task before looking at the guide."}`,N=x>=0?[...g.slice(0,x),...b<0?[]:g.slice(b)].join(`
`).trim():d;return{solve:C,learn:N}}function ux(l){const c=String(l||"").split(`
`),d=[];let g=null;c.forEach((C,N)=>{const S=C.trim(),L=/^(`{3,}|~{3,})/.exec(S);if(L){const Y=L[1];g?g.char===Y[0]&&Y.length>=g.length&&(g=null):g={char:Y[0],length:Y.length};return}if(g)return;const R=/^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(C);if(!R)return;const O=R[2],A=/\bStep\s+\d+(?=\s*(?:[:.·–—-]|$))/i.test(O);d.push({index:N,level:R[1].length,numbered:A})});const x=d.filter(C=>C.numbered),b=(x.length?x:d.filter(C=>C.level===2)).map(C=>C.index);return b.length?{intro:c.slice(0,b[0]).join(`
`).trim(),steps:b.map((C,N)=>c.slice(C,b[N+1]??c.length).join(`
`).trim())}:{intro:c.join(`
`),steps:[]}}const cx=Object.assign({"../content/capstone-discovery.md":wy,"../content/capstone-feedback.md":ky,"../content/capstone-interviews.md":Sy,"../content/capstone-prototype.md":_y,"../content/csharp-conditionals.md":Cy,"../content/csharp-variables.md":Ty,"../content/python-decisions.md":Ny,"../content/python-formatting.md":jy,"../content/python-lists.md":Ey,"../content/python-loops.md":Ly,"../content/python-strings.md":Py,"../content/python-variables.md":Ay,"../content/react-components.md":Ry,"../content/react-state.md":Iy,"../content/tsi-equations.md":Oy,"../content/tsi-percents.md":My,"../content/tsi-ratios.md":Dy,"../content/tsi-slope.md":zy,"../content/uil-arrays.md":Fy,"../content/uil-loops.md":Wy,"../content/uil-methods.md":Hy,"../content/uil-strings.md":By,"../content/unity-colliders.md":Uy,"../content/unity-player-controller.md":qy,"../content/unity-score.md":$y,"../content/web-events.md":Ky,"../content/web-layout.md":Gy}),dx="# Add a Markdown lesson\n\nSave a new `.md` file inside `src/content/`.\n",px=l=>cx[`../content/${l}.md`]||dx,tc=l=>ax.sanitize(Vt.parse(l,{breaks:!1,gfm:!0}));function hx(l,c=""){if(!(l!=null&&l.isPublished))return"";let d="";const g=Array.isArray(l.cases)?l.cases:[];g.length&&!/##\s+(?:Published )?Examples\b/i.test(c)&&(d+=`

### Published examples
`,g.forEach((b,C)=>{d+=`
**Example `+(C+1)+`**

`,b.call&&(d+="Input: `"+b.call+`\`

`),d+=l.mode==="function"?`Expected return:
`:`Expected output:
`,d+="\n```text\n"+String(b.expected??"")+"\n```\n"}));const x=Array.isArray(l.hints)?l.hints:[];return x.length&&!/<details(?:\s|>)/i.test(c)&&(d+=`

### Need a hint?
`,x.forEach((b,C)=>{d+=`
<details>
<summary>Hint `+(C+1)+`</summary>

`+String(b).replaceAll("<","&lt;")+`

</details>
`})),d}function af(l,c){if(!c)return l;const d="https://github.com/mswhitby/computer-science-1/blob/main/units/",g=c.startsWith("/playground/data/")?new URL(c,"https://www.mswhitby.com"):new URL(c,d);return String(l).replace(/\]\(([^)]+)\)/g,(x,b)=>{if(/^(?:https?:|mailto:|#|data:)/i.test(b))return x;const[C,...N]=b.split(" ");try{const S=new URL(C,g);return S.origin!==g.origin?x:"]("+S.href+(N.length?" "+N.join(" "):"")+")"}catch{return x}})}const pm={markdown:l=>`designlab:md:${l}`,code:l=>`designlab:code:${l}`};function hm(l){try{return localStorage.getItem(l)}catch{return null}}function fd(l,c){try{localStorage.setItem(l,c)}catch{}}function fx(l){try{localStorage.removeItem(l)}catch{}}function lf({lessonId:l,task:c,isTsi:d=!1,tsiAnswer:g=null}){var K;const x=(c==null?void 0:c.markdownSource)||px(l),b=pm.markdown(l),[C,N]=Oe.useState(x),[S,L]=Oe.useState(d?"learn":"solve"),[R,O]=Oe.useState(0),[A,Y]=Oe.useState(!1);Oe.useEffect(()=>{N(hm(b)??x),L(d?"learn":"solve"),O(0),Y(!1)},[b,x,d]);const ne=Oe.useMemo(()=>{const V=lx(C,c),ge=V.solve+hx(c,V.solve);return{solve:af(ge,(c==null?void 0:c.markdownUrl)||(c==null?void 0:c.markdown)),learn:af(V.learn,(c==null?void 0:c.markdownUrl)||(c==null?void 0:c.markdown))}},[C,c]),H=Oe.useMemo(()=>ux(ne.learn),[ne.learn]),ae=!d&&S==="learn"&&H.steps.length>0,D=Math.min(R,Math.max(0,H.steps.length-1)),U=d?ne.learn:S==="solve"?ne.solve:ae?H.intro+`

`+H.steps[D]:ne.learn,F=Oe.useMemo(()=>tc(U),[U]);return p.jsxs("section",{className:"instructions-pane",children:[p.jsxs("div",{className:"pane-header",children:[d?p.jsx("strong",{className:"tsi-learn-title",children:"Learn"}):p.jsxs("div",{className:"tabs compact",role:"tablist","aria-label":"Lesson views",children:[p.jsx("button",{role:"tab","aria-selected":S==="solve",className:S==="solve"?"active":"",onClick:()=>{L("solve"),O(0)},children:"Solve"}),p.jsx("button",{role:"tab","aria-selected":S==="learn",className:S==="learn"?"active":"",onClick:()=>{L("learn"),O(0)},children:"Learn"})]}),p.jsx("button",{type:"button",className:uo("icon-button",A&&"active"),title:"Edit lesson text","aria-label":"Edit lesson text",onClick:()=>Y(!A),children:p.jsx(Xg,{size:16})})]}),A?p.jsxs("div",{className:"markdown-source",children:[p.jsx("p",{className:"hint",children:"Try editing these instructions. Changes here are just for your preview."}),p.jsx("textarea",{"aria-label":"Markdown source",value:C,onChange:V=>{N(V.target.value),O(0),fd(b,V.target.value)}}),p.jsx("button",{type:"button",className:"btn",onClick:()=>{fx(b),N(x),O(0)},children:"Reset lesson text"})]}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"markdown-preview",role:"tabpanel",children:[p.jsx("div",{dangerouslySetInnerHTML:{__html:F}}),d&&g&&p.jsxs("section",{className:"tsi-worked-solution",role:"status",children:[p.jsx("h3",{children:g.correct?"Why that works":"Review the solution"}),p.jsx("p",{children:(K=rh[l])==null?void 0:K.explanation})]})]}),ae&&p.jsxs("nav",{className:"lesson-step-controls","aria-label":"Learning steps",children:[D>0&&p.jsxs("button",{type:"button",className:"step-link previous",onClick:()=>O(V=>Math.max(0,V-1)),children:[p.jsx(Jp,{size:16,"aria-hidden":"true"})," Previous"]}),p.jsxs("span",{children:["Step ",D+1," of ",H.steps.length]}),D<H.steps.length-1&&p.jsxs("button",{type:"button",className:"step-link next",onClick:()=>O(V=>Math.min(H.steps.length-1,V+1)),children:["Next ",p.jsx(na,{size:16,"aria-hidden":"true"})]})]})]})]})}var md={exports:{}},mx=md.exports,uf;function ss(){return uf||(uf=1,(function(l,c){(function(d,g){l.exports=g()})(mx,(function(){var d=navigator.userAgent,g=navigator.platform,x=/gecko\/\d/i.test(d),b=/MSIE \d/.test(d),C=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(d),N=/Edge\/(\d+)/.exec(d),S=b||C||N,L=S&&(b?document.documentMode||6:+(N||C)[1]),R=!N&&/WebKit\//.test(d),O=R&&/Qt\/\d+\.\d+/.test(d),A=!N&&/Chrome\/(\d+)/.exec(d),Y=A&&+A[1],ne=/Opera\//.test(d),H=/Apple Computer/.test(navigator.vendor),ae=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(d),D=/PhantomJS/.test(d),U=H&&(/Mobile\/\w+/.test(d)||navigator.maxTouchPoints>2),F=/Android/.test(d),K=U||F||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(d),V=U||/Mac/.test(g),ge=/\bCrOS\b/.test(d),ue=/win/i.test(g),we=ne&&d.match(/Version\/(\d*\.\d*)/);we&&(we=Number(we[1])),we&&we>=15&&(ne=!1,R=!0);var Ue=V&&(O||ne&&(we==null||we<12.11)),Le=x||S&&L>=9;function oe(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var Ce=function(e,n){var s=e.className,i=oe(n).exec(s);if(i){var o=s.slice(i.index+i[0].length);e.className=s.slice(0,i.index)+(o?i[1]+o:"")}};function se(e){for(var n=e.childNodes.length;n>0;--n)e.removeChild(e.firstChild);return e}function ye(e,n){return se(e).appendChild(n)}function j(e,n,s,i){var o=document.createElement(e);if(s&&(o.className=s),i&&(o.style.cssText=i),typeof n=="string")o.appendChild(document.createTextNode(n));else if(n)for(var h=0;h<n.length;++h)o.appendChild(n[h]);return o}function X(e,n,s,i){var o=j(e,n,s,i);return o.setAttribute("role","presentation"),o}var q;document.createRange?q=function(e,n,s,i){var o=document.createRange();return o.setEnd(i||e,s),o.setStart(e,n),o}:q=function(e,n,s){var i=document.body.createTextRange();try{i.moveToElementText(e.parentNode)}catch{return i}return i.collapse(!0),i.moveEnd("character",s),i.moveStart("character",n),i};function T(e,n){if(n.nodeType==3&&(n=n.parentNode),e.contains)return e.contains(n);do if(n.nodeType==11&&(n=n.host),n==e)return!0;while(n=n.parentNode)}function P(e){var n=e.ownerDocument||e,s;try{s=e.activeElement}catch{s=n.body||null}for(;s&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function G(e,n){var s=e.className;oe(n).test(s)||(e.className+=(s?" ":"")+n)}function z(e,n){for(var s=e.split(" "),i=0;i<s.length;i++)s[i]&&!oe(s[i]).test(n)&&(n+=" "+s[i]);return n}var re=function(e){e.select()};U?re=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:S&&(re=function(e){try{e.select()}catch{}});function Ae(e){return e.display.wrapper.ownerDocument}function Ge(e){return Ve(e.display.wrapper)}function Ve(e){return e.getRootNode?e.getRootNode():e.ownerDocument}function ke(e){return Ae(e).defaultView}function Re(e){var n=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,n)}}function He(e,n,s){n||(n={});for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s!==!1||!Object.prototype.hasOwnProperty.call(n,i))&&(n[i]=e[i]);return n}function Be(e,n,s,i,o){n==null&&(n=e.search(/[^\s\u00a0]/),n==-1&&(n=e.length));for(var h=i||0,m=o||0;;){var v=e.indexOf("	",h);if(v<0||v>=n)return m+(n-h);m+=v-h,m+=s-m%s,h=v+1}}var tt=function(){this.id=null,this.f=null,this.time=0,this.handler=Re(this.onTimeout,this)};tt.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},tt.prototype.set=function(e,n){this.f=n;var s=+new Date+e;(!this.id||s<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=s)};function qe(e,n){for(var s=0;s<e.length;++s)if(e[s]==n)return s;return-1}var Ht=50,Gt={toString:function(){return"CodeMirror.Pass"}},St={scroll:!1},vt={origin:"*mouse"},Fe={origin:"+move"};function rt(e,n,s){for(var i=0,o=0;;){var h=e.indexOf("	",i);h==-1&&(h=e.length);var m=h-i;if(h==e.length||o+m>=n)return i+Math.min(m,n-o);if(o+=h-i,o+=s-o%s,i=h+1,o>=n)return i}}var et=[""];function $t(e){for(;et.length<=e;)et.push($e(et)+" ");return et[e]}function $e(e){return e[e.length-1]}function ht(e,n){for(var s=[],i=0;i<e.length;i++)s[i]=n(e[i],i);return s}function ie(e,n,s){for(var i=0,o=s(n);i<e.length&&s(e[i])<=o;)i++;e.splice(i,0,n)}function Se(){}function me(e,n){var s;return Object.create?s=Object.create(e):(Se.prototype=e,s=new Se),n&&He(n,s),s}var wt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function Je(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||wt.test(e))}function at(e,n){return n?n.source.indexOf("\\w")>-1&&Je(e)?!0:n.test(e):Je(e)}function Ye(e){for(var n in e)if(e.hasOwnProperty(n)&&e[n])return!1;return!0}var yt=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function pt(e){return e.charCodeAt(0)>=768&&yt.test(e)}function fn(e,n,s){for(;(s<0?n>0:n<e.length)&&pt(e.charAt(n));)n+=s;return n}function Jn(e,n,s){for(var i=n>s?-1:1;;){if(n==s)return n;var o=(n+s)/2,h=i<0?Math.ceil(o):Math.floor(o);if(h==n)return e(h)?n:s;e(h)?s=h:n=h+i}}function Cr(e,n,s,i){if(!e)return i(n,s,"ltr",0);for(var o=!1,h=0;h<e.length;++h){var m=e[h];(m.from<s&&m.to>n||n==s&&m.to==n)&&(i(Math.max(m.from,n),Math.min(m.to,s),m.level==1?"rtl":"ltr",h),o=!0)}o||i(n,s,"ltr")}var Hr=null;function or(e,n,s){var i;Hr=null;for(var o=0;o<e.length;++o){var h=e[o];if(h.from<n&&h.to>n)return o;h.to==n&&(h.from!=h.to&&s=="before"?i=o:Hr=o),h.from==n&&(h.from!=h.to&&s!="before"?i=o:Hr=o)}return i??Hr}var vi=(function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function s(k){return k<=247?e.charAt(k):1424<=k&&k<=1524?"R":1536<=k&&k<=1785?n.charAt(k-1536):1774<=k&&k<=2220?"r":8192<=k&&k<=8203?"w":k==8204?"b":"L"}var i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,h=/[LRr]/,m=/[Lb1n]/,v=/[1n]/;function w(k,M,B){this.level=k,this.from=M,this.to=B}return function(k,M){var B=M=="ltr"?"L":"R";if(k.length==0||M=="ltr"&&!i.test(k))return!1;for(var te=k.length,Q=[],fe=0;fe<te;++fe)Q.push(s(k.charCodeAt(fe)));for(var ve=0,Ee=B;ve<te;++ve){var Ne=Q[ve];Ne=="m"?Q[ve]=Ee:Ee=Ne}for(var De=0,Me=B;De<te;++De){var Ke=Q[De];Ke=="1"&&Me=="r"?Q[De]="n":h.test(Ke)&&(Me=Ke,Ke=="r"&&(Q[De]="R"))}for(var lt=1,Xe=Q[0];lt<te-1;++lt){var kt=Q[lt];kt=="+"&&Xe=="1"&&Q[lt+1]=="1"?Q[lt]="1":kt==","&&Xe==Q[lt+1]&&(Xe=="1"||Xe=="n")&&(Q[lt]=Xe),Xe=kt}for(var Nt=0;Nt<te;++Nt){var Bn=Q[Nt];if(Bn==",")Q[Nt]="N";else if(Bn=="%"){var rn=void 0;for(rn=Nt+1;rn<te&&Q[rn]=="%";++rn);for(var vr=Nt&&Q[Nt-1]=="!"||rn<te&&Q[rn]=="1"?"1":"N",rr=Nt;rr<rn;++rr)Q[rr]=vr;Nt=rn-1}}for(var yn=0,xr=B;yn<te;++yn){var Nn=Q[yn];xr=="L"&&Nn=="1"?Q[yn]="L":h.test(Nn)&&(xr=Nn)}for(var vn=0;vn<te;++vn)if(o.test(Q[vn])){var zt=void 0;for(zt=vn+1;zt<te&&o.test(Q[zt]);++zt);for(var dt=(vn?Q[vn-1]:B)=="L",Ft=(zt<te?Q[zt]:B)=="L",sn=dt==Ft?dt?"L":"R":B,ln=vn;ln<zt;++ln)Q[ln]=sn;vn=zt-1}for(var Kt=[],br,jt=0;jt<te;)if(m.test(Q[jt])){var so=jt;for(++jt;jt<te&&m.test(Q[jt]);++jt);Kt.push(new w(0,so,jt))}else{var wr=jt,Ii=Kt.length,es=M=="rtl"?1:0;for(++jt;jt<te&&Q[jt]!="L";++jt);for(var An=wr;An<jt;)if(v.test(Q[An])){wr<An&&(Kt.splice(Ii,0,new w(1,wr,An)),Ii+=es);var Un=An;for(++An;An<jt&&v.test(Q[An]);++An);Kt.splice(Ii,0,new w(2,Un,An)),Ii+=es,wr=An}else++An;wr<jt&&Kt.splice(Ii,0,new w(1,wr,jt))}return M=="ltr"&&(Kt[0].level==1&&(br=k.match(/^\s+/))&&(Kt[0].from=br[0].length,Kt.unshift(new w(0,0,br[0].length))),$e(Kt).level==1&&(br=k.match(/\s+$/))&&($e(Kt).to-=br[0].length,Kt.push(new w(0,te-br[0].length,te)))),M=="rtl"?Kt.reverse():Kt}})();function xt(e,n){var s=e.order;return s==null&&(s=e.order=vi(e.text,n)),s}var Di=[],it=function(e,n,s){if(e.addEventListener)e.addEventListener(n,s,!1);else if(e.attachEvent)e.attachEvent("on"+n,s);else{var i=e._handlers||(e._handlers={});i[n]=(i[n]||Di).concat(s)}};function Tr(e,n){return e._handlers&&e._handlers[n]||Di}function Jt(e,n,s){if(e.removeEventListener)e.removeEventListener(n,s,!1);else if(e.detachEvent)e.detachEvent("on"+n,s);else{var i=e._handlers,o=i&&i[n];if(o){var h=qe(o,s);h>-1&&(i[n]=o.slice(0,h).concat(o.slice(h+1)))}}}function It(e,n){var s=Tr(e,n);if(s.length)for(var i=Array.prototype.slice.call(arguments,2),o=0;o<s.length;++o)s[o].apply(null,i)}function Ot(e,n,s){return typeof n=="string"&&(n={type:n,preventDefault:function(){this.defaultPrevented=!0}}),It(e,s||n.type,e,n),In(n)||n.codemirrorIgnore}function jn(e){var n=e._handlers&&e._handlers.cursorActivity;if(n)for(var s=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),i=0;i<n.length;++i)qe(s,n[i])==-1&&s.push(n[i])}function un(e,n){return Tr(e,n).length>0}function ar(e){e.prototype.on=function(n,s){it(this,n,s)},e.prototype.off=function(n,s){Jt(this,n,s)}}function wn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ni(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function In(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==!1}function lr(e){wn(e),ni(e)}function Br(e){return e.target||e.srcElement}function En(e){var n=e.which;return n==null&&(e.button&1?n=1:e.button&2?n=3:e.button&4&&(n=2)),V&&e.ctrlKey&&n==1&&(n=3),n}var Nr=(function(){if(S&&L<9)return!1;var e=j("div");return"draggable"in e||"dragDrop"in e})(),Xn;function ri(e){if(Xn==null){var n=j("span","​");ye(e,j("span",[n,document.createTextNode("x")])),e.firstChild.offsetHeight!=0&&(Xn=n.offsetWidth<=1&&n.offsetHeight>2&&!(S&&L<8))}var s=Xn?j("span","​"):j("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return s.setAttribute("cm-text",""),s}var Ur;function qr(e){if(Ur!=null)return Ur;var n=ye(e,document.createTextNode("AخA")),s=q(n,0,1).getBoundingClientRect(),i=q(n,1,2).getBoundingClientRect();return se(e),!s||s.left==s.right?!1:Ur=i.right-s.right<3}var ur=`

b`.split(/\n/).length!=3?function(e){for(var n=0,s=[],i=e.length;n<=i;){var o=e.indexOf(`
`,n);o==-1&&(o=e.length);var h=e.slice(n,e.charAt(o-1)=="\r"?o-1:o),m=h.indexOf("\r");m!=-1?(s.push(h.slice(0,m)),n+=m+1):(s.push(h),n=o+1)}return s}:function(e){return e.split(/\r\n?|\n/)},$r=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch{return!1}}:function(e){var n;try{n=e.ownerDocument.selection.createRange()}catch{}return!n||n.parentElement()!=e?!1:n.compareEndPoints("StartToEnd",n)!=0},Ls=(function(){var e=j("div");return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),typeof e.oncopy=="function")})(),kn=null;function mo(e){if(kn!=null)return kn;var n=ye(e,j("span","x")),s=n.getBoundingClientRect(),i=q(n,0,1).getBoundingClientRect();return kn=Math.abs(s.left-i.left)>1}var Rr={},Ir={};function jr(e,n){arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),Rr[e]=n}function Bt(e,n){Ir[e]=n}function Er(e){if(typeof e=="string"&&Ir.hasOwnProperty(e))e=Ir[e];else if(e&&typeof e.name=="string"&&Ir.hasOwnProperty(e.name)){var n=Ir[e.name];typeof n=="string"&&(n={name:n}),e=me(n,e),e.name=n.name}else{if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Er("application/xml");if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Er("application/json")}return typeof e=="string"?{name:e}:e||{name:"null"}}function zi(e,n){n=Er(n);var s=Rr[n.name];if(!s)return zi(e,"text/plain");var i=s(e,n);if(ii.hasOwnProperty(n.name)){var o=ii[n.name];for(var h in o)o.hasOwnProperty(h)&&(i.hasOwnProperty(h)&&(i["_"+h]=i[h]),i[h]=o[h])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var m in n.modeProps)i[m]=n.modeProps[m];return i}var ii={};function xi(e,n){var s=ii.hasOwnProperty(e)?ii[e]:ii[e]={};He(n,s)}function At(e,n){if(n===!0)return n;if(e.copyState)return e.copyState(n);var s={};for(var i in n){var o=n[i];o instanceof Array&&(o=o.concat([])),s[i]=o}return s}function os(e,n){for(var s;e.innerMode&&(s=e.innerMode(n),!(!s||s.mode==e));)n=s.state,e=s.mode;return s||{mode:e,state:n}}function bi(e,n,s){return e.startState?e.startState(n,s):!0}var Xt=function(e,n,s){this.pos=this.start=0,this.string=e,this.tabSize=n||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=s};Xt.prototype.eol=function(){return this.pos>=this.string.length},Xt.prototype.sol=function(){return this.pos==this.lineStart},Xt.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Xt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Xt.prototype.eat=function(e){var n=this.string.charAt(this.pos),s;if(typeof e=="string"?s=n==e:s=n&&(e.test?e.test(n):e(n)),s)return++this.pos,n},Xt.prototype.eatWhile=function(e){for(var n=this.pos;this.eat(e););return this.pos>n},Xt.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Xt.prototype.skipToEnd=function(){this.pos=this.string.length},Xt.prototype.skipTo=function(e){var n=this.string.indexOf(e,this.pos);if(n>-1)return this.pos=n,!0},Xt.prototype.backUp=function(e){this.pos-=e},Xt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Be(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Be(this.string,this.lineStart,this.tabSize):0)},Xt.prototype.indentation=function(){return Be(this.string,null,this.tabSize)-(this.lineStart?Be(this.string,this.lineStart,this.tabSize):0)},Xt.prototype.match=function(e,n,s){if(typeof e=="string"){var i=function(m){return s?m.toLowerCase():m},o=this.string.substr(this.pos,e.length);if(i(o)==i(e))return n!==!1&&(this.pos+=e.length),!0}else{var h=this.string.slice(this.pos).match(e);return h&&h.index>0?null:(h&&n!==!1&&(this.pos+=h[0].length),h)}},Xt.prototype.current=function(){return this.string.slice(this.start,this.pos)},Xt.prototype.hideFirstChars=function(e,n){this.lineStart+=e;try{return n()}finally{this.lineStart-=e}},Xt.prototype.lookAhead=function(e){var n=this.lineOracle;return n&&n.lookAhead(e)},Xt.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};function Qe(e,n){if(n-=e.first,n<0||n>=e.size)throw new Error("There is no line "+(n+e.first)+" in the document.");for(var s=e;!s.lines;)for(var i=0;;++i){var o=s.children[i],h=o.chunkSize();if(n<h){s=o;break}n-=h}return s.lines[n]}function si(e,n,s){var i=[],o=n.line;return e.iter(n.line,s.line+1,function(h){var m=h.text;o==s.line&&(m=m.slice(0,s.ch)),o==n.line&&(m=m.slice(n.ch)),i.push(m),++o}),i}function cr(e,n,s){var i=[];return e.iter(n,s,function(o){i.push(o.text)}),i}function On(e,n){var s=n-e.height;if(s)for(var i=e;i;i=i.parent)i.height+=s}function _(e){if(e.parent==null)return null;for(var n=e.parent,s=qe(n.lines,e),i=n.parent;i;n=i,i=i.parent)for(var o=0;i.children[o]!=n;++o)s+=i.children[o].chunkSize();return s+n.first}function W(e,n){var s=e.first;e:do{for(var i=0;i<e.children.length;++i){var o=e.children[i],h=o.height;if(n<h){e=o;continue e}n-=h,s+=o.chunkSize()}return s}while(!e.lines);for(var m=0;m<e.lines.length;++m){var v=e.lines[m],w=v.height;if(n<w)break;n-=w}return s+m}function he(e,n){return n>=e.first&&n<e.first+e.size}function Te(e,n){return String(e.lineNumberFormatter(n+e.firstLineNumber))}function de(e,n,s){if(s===void 0&&(s=null),!(this instanceof de))return new de(e,n,s);this.line=e,this.ch=n,this.sticky=s}function We(e,n){return e.line-n.line||e.ch-n.ch}function Tt(e,n){return e.sticky==n.sticky&&We(e,n)==0}function en(e){return de(e.line,e.ch)}function Sn(e,n){return We(e,n)<0?n:e}function oi(e,n){return We(e,n)<0?e:n}function Xa(e,n){return Math.max(e.first,Math.min(n,e.first+e.size-1))}function gt(e,n){if(n.line<e.first)return de(e.first,0);var s=e.first+e.size-1;return n.line>s?de(s,Qe(e,s).text.length):go(n,Qe(e,n.line).text.length)}function go(e,n){var s=e.ch;return s==null||s>n?de(e.line,n):s<0?de(e.line,0):e}function ra(e,n){for(var s=[],i=0;i<n.length;i++)s[i]=gt(e,n[i]);return s}var Fi=function(e,n){this.state=e,this.lookAhead=n},$n=function(e,n,s,i){this.state=n,this.doc=e,this.line=s,this.maxLookAhead=i||0,this.baseTokens=null,this.baseTokenPos=1};$n.prototype.lookAhead=function(e){var n=this.doc.getLine(this.line+e);return n!=null&&e>this.maxLookAhead&&(this.maxLookAhead=e),n},$n.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var n=this.baseTokens[this.baseTokenPos+1];return{type:n&&n.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},$n.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},$n.fromSaved=function(e,n,s){return n instanceof Fi?new $n(e,At(e.mode,n.state),s,n.lookAhead):new $n(e,At(e.mode,n),s)},$n.prototype.save=function(e){var n=e!==!1?At(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new Fi(n,this.maxLookAhead):n};function Ps(e,n,s,i){var o=[e.state.modeGen],h={};yo(e,n.text,e.doc.mode,s,function(k,M){return o.push(k,M)},h,i);for(var m=s.state,v=function(k){s.baseTokens=o;var M=e.state.overlays[k],B=1,te=0;s.state=!0,yo(e,n.text,M.mode,s,function(Q,fe){for(var ve=B;te<Q;){var Ee=o[B];Ee>Q&&o.splice(B,1,Q,o[B+1],Ee),B+=2,te=Math.min(Q,Ee)}if(fe)if(M.opaque)o.splice(ve,B-ve,Q,"overlay "+fe),B=ve+2;else for(;ve<B;ve+=2){var Ne=o[ve+1];o[ve+1]=(Ne?Ne+" ":"")+"overlay "+fe}},h),s.state=m,s.baseTokens=null,s.baseTokenPos=1},w=0;w<e.state.overlays.length;++w)v(w);return{styles:o,classes:h.bgClass||h.textClass?h:null}}function as(e,n,s){if(!n.styles||n.styles[0]!=e.state.modeGen){var i=Et(e,_(n)),o=n.text.length>e.options.maxHighlightLength&&At(e.doc.mode,i.state),h=Ps(e,n,i);o&&(i.state=o),n.stateAfter=i.save(!o),n.styles=h.styles,h.classes?n.styleClasses=h.classes:n.styleClasses&&(n.styleClasses=null),s===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return n.styles}function Et(e,n,s){var i=e.doc,o=e.display;if(!i.mode.startState)return new $n(i,!0,n);var h=As(e,n,s),m=h>i.first&&Qe(i,h-1).stateAfter,v=m?$n.fromSaved(i,m,h):new $n(i,bi(i.mode),h);return i.iter(h,n,function(w){Wi(e,w.text,v);var k=v.line;w.stateAfter=k==n-1||k%5==0||k>=o.viewFrom&&k<o.viewTo?v.save():null,v.nextLine()}),s&&(i.modeFrontier=v.line),v}function Wi(e,n,s,i){var o=e.doc.mode,h=new Xt(n,e.options.tabSize,s);for(h.start=h.pos=i||0,n==""&&Kr(o,s.state);!h.eol();)ai(o,h,s.state),h.start=h.pos}function Kr(e,n){if(e.blankLine)return e.blankLine(n);if(e.innerMode){var s=os(e,n);if(s.mode.blankLine)return s.mode.blankLine(s.state)}}function ai(e,n,s,i){for(var o=0;o<10;o++){i&&(i[0]=os(e,s).mode);var h=e.token(n,s);if(n.pos>n.start)return h}throw new Error("Mode "+e.name+" failed to advance stream.")}var dr=function(e,n,s){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=n||null,this.state=s};function ia(e,n,s,i){var o=e.doc,h=o.mode,m;n=gt(o,n);var v=Qe(o,n.line),w=Et(e,n.line,s),k=new Xt(v.text,e.options.tabSize,w),M;for(i&&(M=[]);(i||k.pos<n.ch)&&!k.eol();)k.start=k.pos,m=ai(h,k,w.state),i&&M.push(new dr(k,m,At(o.mode,w.state)));return i?M:new dr(k,m,w.state)}function ls(e,n){if(e)for(;;){var s=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!s)break;e=e.slice(0,s.index)+e.slice(s.index+s[0].length);var i=s[1]?"bgClass":"textClass";n[i]==null?n[i]=s[2]:new RegExp("(?:^|\\s)"+s[2]+"(?:$|\\s)").test(n[i])||(n[i]+=" "+s[2])}return e}function yo(e,n,s,i,o,h,m){var v=s.flattenSpans;v==null&&(v=e.options.flattenSpans);var w=0,k=null,M=new Xt(n,e.options.tabSize,i),B,te=e.options.addModeClass&&[null];for(n==""&&ls(Kr(s,i.state),h);!M.eol();){if(M.pos>e.options.maxHighlightLength?(v=!1,m&&Wi(e,n,i,M.pos),M.pos=n.length,B=null):B=ls(ai(s,M,i.state,te),h),te){var Q=te[0].name;Q&&(B="m-"+(B?Q+" "+B:Q))}if(!v||k!=B){for(;w<M.start;)w=Math.min(M.start,w+5e3),o(w,k);k=B}M.start=M.pos}for(;w<M.pos;){var fe=Math.min(M.pos,w+5e3);o(fe,k),w=fe}}function As(e,n,s){for(var i,o,h=e.doc,m=s?-1:n-(e.doc.mode.innerMode?1e3:100),v=n;v>m;--v){if(v<=h.first)return h.first;var w=Qe(h,v-1),k=w.stateAfter;if(k&&(!s||v+(k instanceof Fi?k.lookAhead:0)<=h.modeFrontier))return v;var M=Be(w.text,null,e.options.tabSize);(o==null||i>M)&&(o=v-1,i=M)}return o}function pr(e,n){if(e.modeFrontier=Math.min(e.modeFrontier,n),!(e.highlightFrontier<n-10)){for(var s=e.first,i=n-1;i>s;i--){var o=Qe(e,i).stateAfter;if(o&&(!(o instanceof Fi)||i+o.lookAhead<n)){s=i+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,s)}}var Or=!1,Mn=!1;function Rs(){Or=!0}function us(){Mn=!0}function Mr(e,n,s){this.marker=e,this.from=n,this.to=s}function Is(e,n){if(e)for(var s=0;s<e.length;++s){var i=e[s];if(i.marker==n)return i}}function sa(e,n){for(var s,i=0;i<e.length;++i)e[i]!=n&&(s||(s=[])).push(e[i]);return s}function Hi(e,n,s){var i=s&&window.WeakSet&&(s.markedSpans||(s.markedSpans=new WeakSet));i&&e.markedSpans&&i.has(e.markedSpans)?e.markedSpans.push(n):(e.markedSpans=e.markedSpans?e.markedSpans.concat([n]):[n],i&&i.add(e.markedSpans)),n.marker.attachLine(e)}function Os(e,n,s){var i;if(e)for(var o=0;o<e.length;++o){var h=e[o],m=h.marker,v=h.from==null||(m.inclusiveLeft?h.from<=n:h.from<n);if(v||h.from==n&&m.type=="bookmark"&&(!s||!h.marker.insertLeft)){var w=h.to==null||(m.inclusiveRight?h.to>=n:h.to>n);(i||(i=[])).push(new Mr(m,h.from,w?null:h.to))}}return i}function vo(e,n,s){var i;if(e)for(var o=0;o<e.length;++o){var h=e[o],m=h.marker,v=h.to==null||(m.inclusiveRight?h.to>=n:h.to>n);if(v||h.from==n&&m.type=="bookmark"&&(!s||h.marker.insertLeft)){var w=h.from==null||(m.inclusiveLeft?h.from<=n:h.from<n);(i||(i=[])).push(new Mr(m,w?null:h.from-n,h.to==null?null:h.to-n))}}return i}function _e(e,n){if(n.full)return null;var s=he(e,n.from.line)&&Qe(e,n.from.line).markedSpans,i=he(e,n.to.line)&&Qe(e,n.to.line).markedSpans;if(!s&&!i)return null;var o=n.from.ch,h=n.to.ch,m=We(n.from,n.to)==0,v=Os(s,o,m),w=vo(i,h,m),k=n.text.length==1,M=$e(n.text).length+(k?o:0);if(v)for(var B=0;B<v.length;++B){var te=v[B];if(te.to==null){var Q=Is(w,te.marker);Q?k&&(te.to=Q.to==null?null:Q.to+M):te.to=o}}if(w)for(var fe=0;fe<w.length;++fe){var ve=w[fe];if(ve.to!=null&&(ve.to+=M),ve.from==null){var Ee=Is(v,ve.marker);Ee||(ve.from=M,k&&(v||(v=[])).push(ve))}else ve.from+=M,k&&(v||(v=[])).push(ve)}v&&(v=I(v)),w&&w!=v&&(w=I(w));var Ne=[v];if(!k){var De=n.text.length-2,Me;if(De>0&&v)for(var Ke=0;Ke<v.length;++Ke)v[Ke].to==null&&(Me||(Me=[])).push(new Mr(v[Ke].marker,null,null));for(var lt=0;lt<De;++lt)Ne.push(Me);Ne.push(w)}return Ne}function I(e){for(var n=0;n<e.length;++n){var s=e[n];s.from!=null&&s.from==s.to&&s.marker.clearWhenEmpty!==!1&&e.splice(n--,1)}return e.length?e:null}function Z(e,n,s){var i=null;if(e.iter(n.line,s.line+1,function(Q){if(Q.markedSpans)for(var fe=0;fe<Q.markedSpans.length;++fe){var ve=Q.markedSpans[fe].marker;ve.readOnly&&(!i||qe(i,ve)==-1)&&(i||(i=[])).push(ve)}}),!i)return null;for(var o=[{from:n,to:s}],h=0;h<i.length;++h)for(var m=i[h],v=m.find(0),w=0;w<o.length;++w){var k=o[w];if(!(We(k.to,v.from)<0||We(k.from,v.to)>0)){var M=[w,1],B=We(k.from,v.from),te=We(k.to,v.to);(B<0||!m.inclusiveLeft&&!B)&&M.push({from:k.from,to:v.from}),(te>0||!m.inclusiveRight&&!te)&&M.push({from:v.to,to:k.to}),o.splice.apply(o,M),w+=M.length-3}}return o}function xe(e){var n=e.markedSpans;if(n){for(var s=0;s<n.length;++s)n[s].marker.detachLine(e);e.markedSpans=null}}function be(e,n){if(n){for(var s=0;s<n.length;++s)n[s].marker.attachLine(e);e.markedSpans=n}}function nt(e){return e.inclusiveLeft?-1:0}function ct(e){return e.inclusiveRight?1:0}function _t(e,n){var s=e.lines.length-n.lines.length;if(s!=0)return s;var i=e.find(),o=n.find(),h=We(i.from,o.from)||nt(e)-nt(n);if(h)return-h;var m=We(i.to,o.to)||ct(e)-ct(n);return m||n.id-e.id}function mn(e,n){var s=Mn&&e.markedSpans,i;if(s)for(var o=void 0,h=0;h<s.length;++h)o=s[h],o.marker.collapsed&&(n?o.from:o.to)==null&&(!i||_t(i,o.marker)<0)&&(i=o.marker);return i}function hr(e){return mn(e,!0)}function cn(e){return mn(e,!1)}function Kn(e,n){var s=Mn&&e.markedSpans,i;if(s)for(var o=0;o<s.length;++o){var h=s[o];h.marker.collapsed&&(h.from==null||h.from<n)&&(h.to==null||h.to>n)&&(!i||_t(i,h.marker)<0)&&(i=h.marker)}return i}function wi(e,n,s,i,o){var h=Qe(e,n),m=Mn&&h.markedSpans;if(m)for(var v=0;v<m.length;++v){var w=m[v];if(w.marker.collapsed){var k=w.marker.find(0),M=We(k.from,s)||nt(w.marker)-nt(o),B=We(k.to,i)||ct(w.marker)-ct(o);if(!(M>=0&&B<=0||M<=0&&B>=0)&&(M<=0&&(w.marker.inclusiveRight&&o.inclusiveLeft?We(k.to,s)>=0:We(k.to,s)>0)||M>=0&&(w.marker.inclusiveRight&&o.inclusiveLeft?We(k.from,i)<=0:We(k.from,i)<0)))return!0}}}function Rt(e){for(var n;n=hr(e);)e=n.find(-1,!0).line;return e}function xo(e){for(var n;n=cn(e);)e=n.find(1,!0).line;return e}function Qa(e){for(var n,s;n=cn(e);)e=n.find(1,!0).line,(s||(s=[])).push(e);return s}function Za(e,n){var s=Qe(e,n),i=Rt(s);return s==i?n:_(i)}function oa(e,n){if(n>e.lastLine())return n;var s=Qe(e,n),i;if(!li(e,s))return n;for(;i=cn(s);)s=i.find(1,!0).line;return _(s)+1}function li(e,n){var s=Mn&&n.markedSpans;if(s){for(var i=void 0,o=0;o<s.length;++o)if(i=s[o],!!i.marker.collapsed){if(i.from==null)return!0;if(!i.marker.widgetNode&&i.from==0&&i.marker.inclusiveLeft&&el(e,n,i))return!0}}}function el(e,n,s){if(s.to==null){var i=s.marker.find(1,!0);return el(e,i.line,Is(i.line.markedSpans,s.marker))}if(s.marker.inclusiveRight&&s.to==n.text.length)return!0;for(var o=void 0,h=0;h<n.markedSpans.length;++h)if(o=n.markedSpans[h],o.marker.collapsed&&!o.marker.widgetNode&&o.from==s.to&&(o.to==null||o.to!=s.from)&&(o.marker.inclusiveLeft||s.marker.inclusiveRight)&&el(e,n,o))return!0}function _n(e){e=Rt(e);for(var n=0,s=e.parent,i=0;i<s.lines.length;++i){var o=s.lines[i];if(o==e)break;n+=o.height}for(var h=s.parent;h;s=h,h=s.parent)for(var m=0;m<h.children.length;++m){var v=h.children[m];if(v==s)break;n+=v.height}return n}function Bi(e){if(e.height==0)return 0;for(var n=e.text.length,s,i=e;s=hr(i);){var o=s.find(0,!0);i=o.from.line,n+=o.from.ch-o.to.ch}for(i=e;s=cn(i);){var h=s.find(0,!0);n-=i.text.length-h.from.ch,i=h.to.line,n+=i.text.length-h.to.ch}return n}function aa(e){var n=e.display,s=e.doc;n.maxLine=Qe(s,s.first),n.maxLineLength=Bi(n.maxLine),n.maxLineChanged=!0,s.iter(function(i){var o=Bi(i);o>n.maxLineLength&&(n.maxLineLength=o,n.maxLine=i)})}var ki=function(e,n,s){this.text=e,be(this,n),this.height=s?s(this):1};ki.prototype.lineNo=function(){return _(this)},ar(ki);function Rd(e,n,s,i){e.text=n,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),e.order!=null&&(e.order=null),xe(e),be(e,s);var o=i?i(e):1;o!=e.height&&On(e,o)}function Yl(e){e.parent=null,xe(e)}var Vl={},la={};function ua(e,n){if(!e||/^\s*$/.test(e))return null;var s=n.addModeClass?la:Vl;return s[e]||(s[e]=e.replace(/\S+/g,"cm-$&"))}function Jl(e,n){var s=X("span",null,null,R?"padding-right: .1px":null),i={pre:X("pre",[s],"CodeMirror-line"),content:s,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};n.measure={};for(var o=0;o<=(n.rest?n.rest.length:0);o++){var h=o?n.rest[o-1]:n.line,m=void 0;i.pos=0,i.addToken=Od,qr(e.display.measure)&&(m=xt(h,e.doc.direction))&&(i.addToken=Xl(i.addToken,m)),i.map=[];var v=n!=e.display.externalMeasured&&_(h);Dd(h,i,as(e,h,v)),h.styleClasses&&(h.styleClasses.bgClass&&(i.bgClass=z(h.styleClasses.bgClass,i.bgClass||"")),h.styleClasses.textClass&&(i.textClass=z(h.styleClasses.textClass,i.textClass||""))),i.map.length==0&&i.map.push(0,0,i.content.appendChild(ri(e.display.measure))),o==0?(n.measure.map=i.map,n.measure.cache={}):((n.measure.maps||(n.measure.maps=[])).push(i.map),(n.measure.caches||(n.measure.caches=[])).push({}))}if(R){var w=i.content.lastChild;(/\bcm-tab\b/.test(w.className)||w.querySelector&&w.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return It(e,"renderLine",e,n.line,i.pre),i.pre.className&&(i.textClass=z(i.pre.className,i.textClass||"")),i}function Id(e){var n=j("span","•","cm-invalidchar");return n.title="\\u"+e.charCodeAt(0).toString(16),n.setAttribute("aria-label",n.title),n}function Od(e,n,s,i,o,h,m){if(n){var v=e.splitSpaces?Md(n,e.trailingSpace):n,w=e.cm.state.specialChars,k=!1,M;if(!w.test(n))e.col+=n.length,M=document.createTextNode(v),e.map.push(e.pos,e.pos+n.length,M),S&&L<9&&(k=!0),e.pos+=n.length;else{M=document.createDocumentFragment();for(var B=0;;){w.lastIndex=B;var te=w.exec(n),Q=te?te.index-B:n.length-B;if(Q){var fe=document.createTextNode(v.slice(B,B+Q));S&&L<9?M.appendChild(j("span",[fe])):M.appendChild(fe),e.map.push(e.pos,e.pos+Q,fe),e.col+=Q,e.pos+=Q}if(!te)break;B+=Q+1;var ve=void 0;if(te[0]=="	"){var Ee=e.cm.options.tabSize,Ne=Ee-e.col%Ee;ve=M.appendChild(j("span",$t(Ne),"cm-tab")),ve.setAttribute("role","presentation"),ve.setAttribute("cm-text","	"),e.col+=Ne}else te[0]=="\r"||te[0]==`
`?(ve=M.appendChild(j("span",te[0]=="\r"?"␍":"␤","cm-invalidchar")),ve.setAttribute("cm-text",te[0]),e.col+=1):(ve=e.cm.options.specialCharPlaceholder(te[0]),ve.setAttribute("cm-text",te[0]),S&&L<9?M.appendChild(j("span",[ve])):M.appendChild(ve),e.col+=1);e.map.push(e.pos,e.pos+1,ve),e.pos++}}if(e.trailingSpace=v.charCodeAt(n.length-1)==32,s||i||o||k||h||m){var De=s||"";i&&(De+=i),o&&(De+=o);var Me=j("span",[M],De,h);if(m)for(var Ke in m)m.hasOwnProperty(Ke)&&Ke!="style"&&Ke!="class"&&Me.setAttribute(Ke,m[Ke]);return e.content.appendChild(Me)}e.content.appendChild(M)}}function Md(e,n){if(e.length>1&&!/  /.test(e))return e;for(var s=n,i="",o=0;o<e.length;o++){var h=e.charAt(o);h==" "&&s&&(o==e.length-1||e.charCodeAt(o+1)==32)&&(h=" "),i+=h,s=h==" "}return i}function Xl(e,n){return function(s,i,o,h,m,v,w){o=o?o+" cm-force-border":"cm-force-border";for(var k=s.pos,M=k+i.length;;){for(var B=void 0,te=0;te<n.length&&(B=n[te],!(B.to>k&&B.from<=k));te++);if(B.to>=M)return e(s,i,o,h,m,v,w);e(s,i.slice(0,B.to-k),o,h,null,v,w),h=null,i=i.slice(B.to-k),k=B.to}}}function ac(e,n,s,i){var o=!i&&s.widgetNode;o&&e.map.push(e.pos,e.pos+n,o),!i&&e.cm.display.input.needsContentAttribute&&(o||(o=e.content.appendChild(document.createElement("span"))),o.setAttribute("cm-marker",s.id)),o&&(e.cm.display.input.setUneditable(o),e.content.appendChild(o)),e.pos+=n,e.trailingSpace=!1}function Dd(e,n,s){var i=e.markedSpans,o=e.text,h=0;if(!i){for(var m=1;m<s.length;m+=2)n.addToken(n,o.slice(h,h=s[m]),ua(s[m+1],n.cm.options));return}for(var v=o.length,w=0,k=1,M="",B,te,Q=0,fe,ve,Ee,Ne,De;;){if(Q==w){fe=ve=Ee=te="",De=null,Ne=null,Q=1/0;for(var Me=[],Ke=void 0,lt=0;lt<i.length;++lt){var Xe=i[lt],kt=Xe.marker;if(kt.type=="bookmark"&&Xe.from==w&&kt.widgetNode)Me.push(kt);else if(Xe.from<=w&&(Xe.to==null||Xe.to>w||kt.collapsed&&Xe.to==w&&Xe.from==w)){if(Xe.to!=null&&Xe.to!=w&&Q>Xe.to&&(Q=Xe.to,ve=""),kt.className&&(fe+=" "+kt.className),kt.css&&(te=(te?te+";":"")+kt.css),kt.startStyle&&Xe.from==w&&(Ee+=" "+kt.startStyle),kt.endStyle&&Xe.to==Q&&(Ke||(Ke=[])).push(kt.endStyle,Xe.to),kt.title&&((De||(De={})).title=kt.title),kt.attributes)for(var Nt in kt.attributes)(De||(De={}))[Nt]=kt.attributes[Nt];kt.collapsed&&(!Ne||_t(Ne.marker,kt)<0)&&(Ne=Xe)}else Xe.from>w&&Q>Xe.from&&(Q=Xe.from)}if(Ke)for(var Bn=0;Bn<Ke.length;Bn+=2)Ke[Bn+1]==Q&&(ve+=" "+Ke[Bn]);if(!Ne||Ne.from==w)for(var rn=0;rn<Me.length;++rn)ac(n,0,Me[rn]);if(Ne&&(Ne.from||0)==w){if(ac(n,(Ne.to==null?v+1:Ne.to)-w,Ne.marker,Ne.from==null),Ne.to==null)return;Ne.to==w&&(Ne=!1)}}if(w>=v)break;for(var vr=Math.min(v,Q);;){if(M){var rr=w+M.length;if(!Ne){var yn=rr>vr?M.slice(0,vr-w):M;n.addToken(n,yn,B?B+fe:fe,Ee,w+yn.length==Q?ve:"",te,De)}if(rr>=vr){M=M.slice(vr-w),w=vr;break}w=rr,Ee=""}M=o.slice(h,h=s[k++]),B=ua(s[k++],n.cm.options)}}}function lc(e,n,s){this.line=n,this.rest=Qa(n),this.size=this.rest?_($e(this.rest))-s+1:1,this.node=this.text=null,this.hidden=li(e,n)}function tl(e,n,s){for(var i=[],o,h=n;h<s;h=o){var m=new lc(e.doc,Qe(e.doc,h),h);o=h+m.size,i.push(m)}return i}var bo=null;function uc(e){bo?bo.ops.push(e):e.ownsGroup=bo={ops:[e],delayedCallbacks:[]}}function zd(e){var n=e.delayedCallbacks,s=0;do{for(;s<n.length;s++)n[s].call(null);for(var i=0;i<e.ops.length;i++){var o=e.ops[i];if(o.cursorActivityHandlers)for(;o.cursorActivityCalled<o.cursorActivityHandlers.length;)o.cursorActivityHandlers[o.cursorActivityCalled++].call(null,o.cm)}}while(s<n.length)}function Fd(e,n){var s=e.ownsGroup;if(s)try{zd(s)}finally{bo=null,n(s)}}var ca=null;function Dn(e,n){var s=Tr(e,n);if(s.length){var i=Array.prototype.slice.call(arguments,2),o;bo?o=bo.delayedCallbacks:ca?o=ca:(o=ca=[],setTimeout(Ql,0));for(var h=function(v){o.push(function(){return s[v].apply(null,i)})},m=0;m<s.length;++m)h(m)}}function Ql(){var e=ca;ca=null;for(var n=0;n<e.length;++n)e[n]()}function cc(e,n,s,i){for(var o=0;o<n.changes.length;o++){var h=n.changes[o];h=="text"?Hd(e,n):h=="gutter"?dc(e,n,s,i):h=="class"?eu(e,n):h=="widget"&&Bd(e,n,i)}n.changes=null}function da(e){return e.node==e.text&&(e.node=j("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),S&&L<8&&(e.node.style.zIndex=2)),e.node}function Wd(e,n){var s=n.bgClass?n.bgClass+" "+(n.line.bgClass||""):n.line.bgClass;if(s&&(s+=" CodeMirror-linebackground"),n.background)s?n.background.className=s:(n.background.parentNode.removeChild(n.background),n.background=null);else if(s){var i=da(n);n.background=i.insertBefore(j("div",null,s),i.firstChild),e.display.input.setUneditable(n.background)}}function Zl(e,n){var s=e.display.externalMeasured;return s&&s.line==n.line?(e.display.externalMeasured=null,n.measure=s.measure,s.built):Jl(e,n)}function Hd(e,n){var s=n.text.className,i=Zl(e,n);n.text==n.node&&(n.node=i.pre),n.text.parentNode.replaceChild(i.pre,n.text),n.text=i.pre,i.bgClass!=n.bgClass||i.textClass!=n.textClass?(n.bgClass=i.bgClass,n.textClass=i.textClass,eu(e,n)):s&&(n.text.className=s)}function eu(e,n){Wd(e,n),n.line.wrapClass?da(n).className=n.line.wrapClass:n.node!=n.text&&(n.node.className="");var s=n.textClass?n.textClass+" "+(n.line.textClass||""):n.line.textClass;n.text.className=s||""}function dc(e,n,s,i){if(n.gutter&&(n.node.removeChild(n.gutter),n.gutter=null),n.gutterBackground&&(n.node.removeChild(n.gutterBackground),n.gutterBackground=null),n.line.gutterClass){var o=da(n);n.gutterBackground=j("div",null,"CodeMirror-gutter-background "+n.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(n.gutterBackground),o.insertBefore(n.gutterBackground,n.text)}var h=n.line.gutterMarkers;if(e.options.lineNumbers||h){var m=da(n),v=n.gutter=j("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(v.setAttribute("aria-hidden","true"),e.display.input.setUneditable(v),m.insertBefore(v,n.text),n.line.gutterClass&&(v.className+=" "+n.line.gutterClass),e.options.lineNumbers&&(!h||!h["CodeMirror-linenumbers"])&&(n.lineNumber=v.appendChild(j("div",Te(e.options,s),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),h)for(var w=0;w<e.display.gutterSpecs.length;++w){var k=e.display.gutterSpecs[w].className,M=h.hasOwnProperty(k)&&h[k];M&&v.appendChild(j("div",[M],"CodeMirror-gutter-elt","left: "+i.gutterLeft[k]+"px; width: "+i.gutterWidth[k]+"px"))}}}function Bd(e,n,s){n.alignable&&(n.alignable=null);for(var i=oe("CodeMirror-linewidget"),o=n.node.firstChild,h=void 0;o;o=h)h=o.nextSibling,i.test(o.className)&&n.node.removeChild(o);pc(e,n,s)}function Ud(e,n,s,i){var o=Zl(e,n);return n.text=n.node=o.pre,o.bgClass&&(n.bgClass=o.bgClass),o.textClass&&(n.textClass=o.textClass),eu(e,n),dc(e,n,s,i),pc(e,n,i),n.node}function pc(e,n,s){if(hc(e,n.line,n,s,!0),n.rest)for(var i=0;i<n.rest.length;i++)hc(e,n.rest[i],n,s,!1)}function hc(e,n,s,i,o){if(n.widgets)for(var h=da(s),m=0,v=n.widgets;m<v.length;++m){var w=v[m],k=j("div",[w.node],"CodeMirror-linewidget"+(w.className?" "+w.className:""));w.handleMouseEvents||k.setAttribute("cm-ignore-events","true"),tu(w,k,s,i),e.display.input.setUneditable(k),o&&w.above?h.insertBefore(k,s.gutter||s.text):h.appendChild(k),Dn(w,"redraw")}}function tu(e,n,s,i){if(e.noHScroll){(s.alignable||(s.alignable=[])).push(n);var o=i.wrapperWidth;n.style.left=i.fixedPos+"px",e.coverGutter||(o-=i.gutterTotalWidth,n.style.paddingLeft=i.gutterTotalWidth+"px"),n.style.width=o+"px"}e.coverGutter&&(n.style.zIndex=5,n.style.position="relative",e.noHScroll||(n.style.marginLeft=-i.gutterTotalWidth+"px"))}function Ui(e){if(e.height!=null)return e.height;var n=e.doc.cm;if(!n)return 0;if(!T(document.body,e.node)){var s="position: relative;";e.coverGutter&&(s+="margin-left: -"+n.display.gutters.offsetWidth+"px;"),e.noHScroll&&(s+="width: "+n.display.wrapper.clientWidth+"px;"),ye(n.display.measure,j("div",[e.node],null,s))}return e.height=e.node.parentNode.offsetHeight}function qi(e,n){for(var s=Br(n);s!=e.wrapper;s=s.parentNode)if(!s||s.nodeType==1&&s.getAttribute("cm-ignore-events")=="true"||s.parentNode==e.sizer&&s!=e.mover)return!0}function pa(e){return e.lineSpace.offsetTop}function nl(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function nu(e){if(e.cachedPaddingH)return e.cachedPaddingH;var n=ye(e.measure,j("pre","x","CodeMirror-line-like")),s=window.getComputedStyle?window.getComputedStyle(n):n.currentStyle,i={left:parseInt(s.paddingLeft),right:parseInt(s.paddingRight)};return!isNaN(i.left)&&!isNaN(i.right)&&(e.cachedPaddingH=i),i}function ui(e){return Ht-e.display.nativeBarWidth}function cs(e){return e.display.scroller.clientWidth-ui(e)-e.display.barWidth}function ds(e){return e.display.scroller.clientHeight-ui(e)-e.display.barHeight}function qd(e,n,s){var i=e.options.lineWrapping,o=i&&cs(e);if(!n.measure.heights||i&&n.measure.width!=o){var h=n.measure.heights=[];if(i){n.measure.width=o;for(var m=n.text.firstChild.getClientRects(),v=0;v<m.length-1;v++){var w=m[v],k=m[v+1];Math.abs(w.bottom-k.bottom)>2&&h.push((w.bottom+k.top)/2-s.top)}}h.push(s.bottom-s.top)}}function fc(e,n,s){if(e.line==n)return{map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var i=0;i<e.rest.length;i++)if(e.rest[i]==n)return{map:e.measure.maps[i],cache:e.measure.caches[i]};for(var o=0;o<e.rest.length;o++)if(_(e.rest[o])>s)return{map:e.measure.maps[o],cache:e.measure.caches[o],before:!0}}}function $d(e,n){n=Rt(n);var s=_(n),i=e.display.externalMeasured=new lc(e.doc,n,s);i.lineN=s;var o=i.built=Jl(e,i);return i.text=o.pre,ye(e.display.lineMeasure,o.pre),i}function ru(e,n,s,i){return Lr(e,Si(e,n),s,i)}function rl(e,n){if(n>=e.display.viewFrom&&n<e.display.viewTo)return e.display.view[Ci(e,n)];var s=e.display.externalMeasured;if(s&&n>=s.lineN&&n<s.lineN+s.size)return s}function Si(e,n){var s=_(n),i=rl(e,s);i&&!i.text?i=null:i&&i.changes&&(cc(e,i,s,ul(e)),e.curOp.forceUpdate=!0),i||(i=$d(e,n));var o=fc(i,n,s);return{line:n,view:i,rect:null,map:o.map,cache:o.cache,before:o.before,hasHeights:!1}}function Lr(e,n,s,i,o){n.before&&(s=-1);var h=s+(i||""),m;return n.cache.hasOwnProperty(h)?m=n.cache[h]:(n.rect||(n.rect=n.view.text.getBoundingClientRect()),n.hasHeights||(qd(e,n.view,n.rect),n.hasHeights=!0),m=gc(e,n,s,i),m.bogus||(n.cache[h]=m)),{left:m.left,right:m.right,top:o?m.rtop:m.top,bottom:o?m.rbottom:m.bottom}}var mc={left:0,right:0,top:0,bottom:0};function ha(e,n,s){for(var i,o,h,m,v,w,k=0;k<e.length;k+=3)if(v=e[k],w=e[k+1],n<v?(o=0,h=1,m="left"):n<w?(o=n-v,h=o+1):(k==e.length-3||n==w&&e[k+3]>n)&&(h=w-v,o=h-1,n>=w&&(m="right")),o!=null){if(i=e[k+2],v==w&&s==(i.insertLeft?"left":"right")&&(m=s),s=="left"&&o==0)for(;k&&e[k-2]==e[k-3]&&e[k-1].insertLeft;)i=e[(k-=3)+2],m="left";if(s=="right"&&o==w-v)for(;k<e.length-3&&e[k+3]==e[k+4]&&!e[k+5].insertLeft;)i=e[(k+=3)+2],m="right";break}return{node:i,start:o,end:h,collapse:m,coverStart:v,coverEnd:w}}function Kd(e,n){var s=mc;if(n=="left")for(var i=0;i<e.length&&(s=e[i]).left==s.right;i++);else for(var o=e.length-1;o>=0&&(s=e[o]).left==s.right;o--);return s}function gc(e,n,s,i){var o=ha(n.map,s,i),h=o.node,m=o.start,v=o.end,w=o.collapse,k;if(h.nodeType==3){for(var M=0;M<4;M++){for(;m&&pt(n.line.text.charAt(o.coverStart+m));)--m;for(;o.coverStart+v<o.coverEnd&&pt(n.line.text.charAt(o.coverStart+v));)++v;if(S&&L<9&&m==0&&v==o.coverEnd-o.coverStart?k=h.parentNode.getBoundingClientRect():k=Kd(q(h,m,v).getClientRects(),i),k.left||k.right||m==0)break;v=m,m=m-1,w="right"}S&&L<11&&(k=iu(e.display.measure,k))}else{m>0&&(w=i="right");var B;e.options.lineWrapping&&(B=h.getClientRects()).length>1?k=B[i=="right"?B.length-1:0]:k=h.getBoundingClientRect()}if(S&&L<9&&!m&&(!k||!k.left&&!k.right)){var te=h.parentNode.getClientRects()[0];te?k={left:te.left,right:te.left+ps(e.display),top:te.top,bottom:te.bottom}:k=mc}for(var Q=k.top-n.rect.top,fe=k.bottom-n.rect.top,ve=(Q+fe)/2,Ee=n.view.measure.heights,Ne=0;Ne<Ee.length-1&&!(ve<Ee[Ne]);Ne++);var De=Ne?Ee[Ne-1]:0,Me=Ee[Ne],Ke={left:(w=="right"?k.right:k.left)-n.rect.left,right:(w=="left"?k.left:k.right)-n.rect.left,top:De,bottom:Me};return!k.left&&!k.right&&(Ke.bogus=!0),e.options.singleCursorHeightPerLine||(Ke.rtop=Q,Ke.rbottom=fe),Ke}function iu(e,n){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!mo(e))return n;var s=screen.logicalXDPI/screen.deviceXDPI,i=screen.logicalYDPI/screen.deviceYDPI;return{left:n.left*s,right:n.right*s,top:n.top*i,bottom:n.bottom*i}}function il(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var n=0;n<e.rest.length;n++)e.measure.caches[n]={}}function su(e){e.display.externalMeasure=null,se(e.display.lineMeasure);for(var n=0;n<e.display.view.length;n++)il(e.display.view[n])}function wo(e){su(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function ou(e){return A&&F?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function yc(e){return A&&F?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function au(e){var n=Rt(e),s=n.widgets,i=0;if(s)for(var o=0;o<s.length;++o)s[o].above&&(i+=Ui(s[o]));return i}function sl(e,n,s,i,o){if(!o){var h=au(n);s.top+=h,s.bottom+=h}if(i=="line")return s;i||(i="local");var m=_n(n);if(i=="local"?m+=pa(e.display):m-=e.display.viewOffset,i=="page"||i=="window"){var v=e.display.lineSpace.getBoundingClientRect();m+=v.top+(i=="window"?0:yc(Ae(e)));var w=v.left+(i=="window"?0:ou(Ae(e)));s.left+=w,s.right+=w}return s.top+=m,s.bottom+=m,s}function vc(e,n,s){if(s=="div")return n;var i=n.left,o=n.top;if(s=="page")i-=ou(Ae(e)),o-=yc(Ae(e));else if(s=="local"||!s){var h=e.display.sizer.getBoundingClientRect();i+=h.left,o+=h.top}var m=e.display.lineSpace.getBoundingClientRect();return{left:i-m.left,top:o-m.top}}function ol(e,n,s,i,o){return i||(i=Qe(e.doc,n.line)),sl(e,i,ru(e,i,n.ch,o),s)}function Cn(e,n,s,i,o,h){i=i||Qe(e.doc,n.line),o||(o=Si(e,i));function m(fe,ve){var Ee=Lr(e,o,fe,ve?"right":"left",h);return ve?Ee.left=Ee.right:Ee.right=Ee.left,sl(e,i,Ee,s)}var v=xt(i,e.doc.direction),w=n.ch,k=n.sticky;if(w>=i.text.length?(w=i.text.length,k="before"):w<=0&&(w=0,k="after"),!v)return m(k=="before"?w-1:w,k=="before");function M(fe,ve,Ee){var Ne=v[ve],De=Ne.level==1;return m(Ee?fe-1:fe,De!=Ee)}var B=or(v,w,k),te=Hr,Q=M(w,B,k=="before");return te!=null&&(Q.other=M(w,te,k!="before")),Q}function ko(e,n){var s=0;n=gt(e.doc,n),e.options.lineWrapping||(s=ps(e.display)*n.ch);var i=Qe(e.doc,n.line),o=_n(i)+pa(e.display);return{left:s,right:s,top:o,bottom:o+i.height}}function al(e,n,s,i,o){var h=de(e,n,s);return h.xRel=o,i&&(h.outside=i),h}function ll(e,n,s){var i=e.doc;if(s+=e.display.viewOffset,s<0)return al(i.first,0,null,-1,-1);var o=W(i,s),h=i.first+i.size-1;if(o>h)return al(i.first+i.size-1,Qe(i,h).text.length,null,1,1);n<0&&(n=0);for(var m=Qe(i,o);;){var v=Gd(e,m,o,n,s),w=Kn(m,v.ch+(v.xRel>0||v.outside>0?1:0));if(!w)return v;var k=w.find(1);if(k.line==o)return k;m=Qe(i,o=k.line)}}function lu(e,n,s,i){i-=au(n);var o=n.text.length,h=Jn(function(m){return Lr(e,s,m-1).bottom<=i},o,0);return o=Jn(function(m){return Lr(e,s,m).top>i},h,o),{begin:h,end:o}}function uu(e,n,s,i){s||(s=Si(e,n));var o=sl(e,n,Lr(e,s,i),"line").top;return lu(e,n,s,o)}function fa(e,n,s,i){return e.bottom<=s?!1:e.top>s?!0:(i?e.left:e.right)>n}function Gd(e,n,s,i,o){o-=_n(n);var h=Si(e,n),m=au(n),v=0,w=n.text.length,k=!0,M=xt(n,e.doc.direction);if(M){var B=(e.options.lineWrapping?So:Yd)(e,n,s,h,M,i,o);k=B.level!=1,v=k?B.from:B.to-1,w=k?B.to:B.from-1}var te=null,Q=null,fe=Jn(function(lt){var Xe=Lr(e,h,lt);return Xe.top+=m,Xe.bottom+=m,fa(Xe,i,o,!1)?(Xe.top<=o&&Xe.left<=i&&(te=lt,Q=Xe),!0):!1},v,w),ve,Ee,Ne=!1;if(Q){var De=i-Q.left<Q.right-i,Me=De==k;fe=te+(Me?0:1),Ee=Me?"after":"before",ve=De?Q.left:Q.right}else{!k&&(fe==w||fe==v)&&fe++,Ee=fe==0?"after":fe==n.text.length?"before":Lr(e,h,fe-(k?1:0)).bottom+m<=o==k?"after":"before";var Ke=Cn(e,de(s,fe,Ee),"line",n,h);ve=Ke.left,Ne=o<Ke.top?-1:o>=Ke.bottom?1:0}return fe=fn(n.text,fe,1),al(s,fe,Ee,Ne,i-ve)}function Yd(e,n,s,i,o,h,m){var v=Jn(function(B){var te=o[B],Q=te.level!=1;return fa(Cn(e,de(s,Q?te.to:te.from,Q?"before":"after"),"line",n,i),h,m,!0)},0,o.length-1),w=o[v];if(v>0){var k=w.level!=1,M=Cn(e,de(s,k?w.from:w.to,k?"after":"before"),"line",n,i);fa(M,h,m,!0)&&M.top>m&&(w=o[v-1])}return w}function So(e,n,s,i,o,h,m){var v=lu(e,n,i,m),w=v.begin,k=v.end;/\s/.test(n.text.charAt(k-1))&&k--;for(var M=null,B=null,te=0;te<o.length;te++){var Q=o[te];if(!(Q.from>=k||Q.to<=w)){var fe=Q.level!=1,ve=Lr(e,i,fe?Math.min(k,Q.to)-1:Math.max(w,Q.from)).right,Ee=ve<h?h-ve+1e9:ve-h;(!M||B>Ee)&&(M=Q,B=Ee)}}return M||(M=o[o.length-1]),M.from<w&&(M={from:w,to:M.to,level:M.level}),M.to>k&&(M={from:M.from,to:k,level:M.level}),M}var $i;function _i(e){if(e.cachedTextHeight!=null)return e.cachedTextHeight;if($i==null){$i=j("pre",null,"CodeMirror-line-like");for(var n=0;n<49;++n)$i.appendChild(document.createTextNode("x")),$i.appendChild(j("br"));$i.appendChild(document.createTextNode("x"))}ye(e.measure,$i);var s=$i.offsetHeight/50;return s>3&&(e.cachedTextHeight=s),se(e.measure),s||1}function ps(e){if(e.cachedCharWidth!=null)return e.cachedCharWidth;var n=j("span","xxxxxxxxxx"),s=j("pre",[n],"CodeMirror-line-like");ye(e.measure,s);var i=n.getBoundingClientRect(),o=(i.right-i.left)/10;return o>2&&(e.cachedCharWidth=o),o||10}function ul(e){for(var n=e.display,s={},i={},o=n.gutters.clientLeft,h=n.gutters.firstChild,m=0;h;h=h.nextSibling,++m){var v=e.display.gutterSpecs[m].className;s[v]=h.offsetLeft+h.clientLeft+o,i[v]=h.clientWidth}return{fixedPos:_o(n),gutterTotalWidth:n.gutters.offsetWidth,gutterLeft:s,gutterWidth:i,wrapperWidth:n.wrapper.clientWidth}}function _o(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Ms(e){var n=_i(e.display),s=e.options.lineWrapping,i=s&&Math.max(5,e.display.scroller.clientWidth/ps(e.display)-3);return function(o){if(li(e.doc,o))return 0;var h=0;if(o.widgets)for(var m=0;m<o.widgets.length;m++)o.widgets[m].height&&(h+=o.widgets[m].height);return s?h+(Math.ceil(o.text.length/i)||1)*n:h+n}}function ma(e){var n=e.doc,s=Ms(e);n.iter(function(i){var o=s(i);o!=i.height&&On(i,o)})}function hs(e,n,s,i){var o=e.display;if(!s&&Br(n).getAttribute("cm-not-content")=="true")return null;var h,m,v=o.lineSpace.getBoundingClientRect();try{h=n.clientX-v.left,m=n.clientY-v.top}catch{return null}var w=ll(e,h,m),k;if(i&&w.xRel>0&&(k=Qe(e.doc,w.line).text).length==w.ch){var M=Be(k,k.length,e.options.tabSize)-k.length;w=de(w.line,Math.max(0,Math.round((h-nu(e.display).left)/ps(e.display))-M))}return w}function Ci(e,n){if(n>=e.display.viewTo||(n-=e.display.viewFrom,n<0))return null;for(var s=e.display.view,i=0;i<s.length;i++)if(n-=s[i].size,n<0)return i}function er(e,n,s,i){n==null&&(n=e.doc.first),s==null&&(s=e.doc.first+e.doc.size),i||(i=0);var o=e.display;if(i&&s<o.viewTo&&(o.updateLineNumbers==null||o.updateLineNumbers>n)&&(o.updateLineNumbers=n),e.curOp.viewChanged=!0,n>=o.viewTo)Mn&&Za(e.doc,n)<o.viewTo&&Gi(e);else if(s<=o.viewFrom)Mn&&oa(e.doc,s+i)>o.viewFrom?Gi(e):(o.viewFrom+=i,o.viewTo+=i);else if(n<=o.viewFrom&&s>=o.viewTo)Gi(e);else if(n<=o.viewFrom){var h=ga(e,s,s+i,1);h?(o.view=o.view.slice(h.index),o.viewFrom=h.lineN,o.viewTo+=i):Gi(e)}else if(s>=o.viewTo){var m=ga(e,n,n,-1);m?(o.view=o.view.slice(0,m.index),o.viewTo=m.lineN):Gi(e)}else{var v=ga(e,n,n,-1),w=ga(e,s,s+i,1);v&&w?(o.view=o.view.slice(0,v.index).concat(tl(e,v.lineN,w.lineN)).concat(o.view.slice(w.index)),o.viewTo+=i):Gi(e)}var k=o.externalMeasured;k&&(s<k.lineN?k.lineN+=i:n<k.lineN+k.size&&(o.externalMeasured=null))}function Ki(e,n,s){e.curOp.viewChanged=!0;var i=e.display,o=e.display.externalMeasured;if(o&&n>=o.lineN&&n<o.lineN+o.size&&(i.externalMeasured=null),!(n<i.viewFrom||n>=i.viewTo)){var h=i.view[Ci(e,n)];if(h.node!=null){var m=h.changes||(h.changes=[]);qe(m,s)==-1&&m.push(s)}}}function Gi(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function ga(e,n,s,i){var o=Ci(e,n),h,m=e.display.view;if(!Mn||s==e.doc.first+e.doc.size)return{index:o,lineN:s};for(var v=e.display.viewFrom,w=0;w<o;w++)v+=m[w].size;if(v!=n){if(i>0){if(o==m.length-1)return null;h=v+m[o].size-n,o++}else h=v-n;n+=h,s+=h}for(;Za(e.doc,s)!=s;){if(o==(i<0?0:m.length-1))return null;s+=i*m[o-(i<0?1:0)].size,o+=i}return{index:o,lineN:s}}function xc(e,n,s){var i=e.display,o=i.view;o.length==0||n>=i.viewTo||s<=i.viewFrom?(i.view=tl(e,n,s),i.viewFrom=n):(i.viewFrom>n?i.view=tl(e,n,i.viewFrom).concat(i.view):i.viewFrom<n&&(i.view=i.view.slice(Ci(e,n))),i.viewFrom=n,i.viewTo<s?i.view=i.view.concat(tl(e,i.viewTo,s)):i.viewTo>s&&(i.view=i.view.slice(0,Ci(e,s)))),i.viewTo=s}function cu(e){for(var n=e.display.view,s=0,i=0;i<n.length;i++){var o=n[i];!o.hidden&&(!o.node||o.changes)&&++s}return s}function Gr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function cl(e,n){n===void 0&&(n=!0);var s=e.doc,i={},o=i.cursors=document.createDocumentFragment(),h=i.selection=document.createDocumentFragment(),m=e.options.$customCursor;m&&(n=!0);for(var v=0;v<s.sel.ranges.length;v++)if(!(!n&&v==s.sel.primIndex)){var w=s.sel.ranges[v];if(!(w.from().line>=e.display.viewTo||w.to().line<e.display.viewFrom)){var k=w.empty();if(m){var M=m(e,w);M&&ya(e,M,o)}else(k||e.options.showCursorWhenSelecting)&&ya(e,w.head,o);k||Vd(e,w,h)}}return i}function ya(e,n,s){var i=Cn(e,n,"div",null,null,!e.options.singleCursorHeightPerLine),o=s.appendChild(j("div"," ","CodeMirror-cursor"));if(o.style.left=i.left+"px",o.style.top=i.top+"px",o.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var h=ol(e,n,"div",null,null),m=h.right-h.left;o.style.width=(m>0?m:e.defaultCharWidth())+"px"}if(i.other){var v=s.appendChild(j("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));v.style.display="",v.style.left=i.other.left+"px",v.style.top=i.other.top+"px",v.style.height=(i.other.bottom-i.other.top)*.85+"px"}}function dl(e,n){return e.top-n.top||e.left-n.left}function Vd(e,n,s){var i=e.display,o=e.doc,h=document.createDocumentFragment(),m=nu(e.display),v=m.left,w=Math.max(i.sizerWidth,cs(e)-i.sizer.offsetLeft)-m.right,k=o.direction=="ltr";function M(Me,Ke,lt,Xe){Ke<0&&(Ke=0),Ke=Math.round(Ke),Xe=Math.round(Xe),h.appendChild(j("div",null,"CodeMirror-selected","position: absolute; left: "+Me+`px;
                             top: `+Ke+"px; width: "+(lt??w-Me)+`px;
                             height: `+(Xe-Ke)+"px"))}function B(Me,Ke,lt){var Xe=Qe(o,Me),kt=Xe.text.length,Nt,Bn;function rn(yn,xr){return ol(e,de(Me,yn),"div",Xe,xr)}function vr(yn,xr,Nn){var vn=uu(e,Xe,null,yn),zt=xr=="ltr"==(Nn=="after")?"left":"right",dt=Nn=="after"?vn.begin:vn.end-(/\s/.test(Xe.text.charAt(vn.end-1))?2:1);return rn(dt,zt)[zt]}var rr=xt(Xe,o.direction);return Cr(rr,Ke||0,lt??kt,function(yn,xr,Nn,vn){var zt=Nn=="ltr",dt=rn(yn,zt?"left":"right"),Ft=rn(xr-1,zt?"right":"left"),sn=Ke==null&&yn==0,ln=lt==null&&xr==kt,Kt=vn==0,br=!rr||vn==rr.length-1;if(Ft.top-dt.top<=3){var jt=(k?sn:ln)&&Kt,so=(k?ln:sn)&&br,wr=jt?v:(zt?dt:Ft).left,Ii=so?w:(zt?Ft:dt).right;M(wr,dt.top,Ii-wr,dt.bottom)}else{var es,An,Un,Ha;zt?(es=k&&sn&&Kt?v:dt.left,An=k?w:vr(yn,Nn,"before"),Un=k?v:vr(xr,Nn,"after"),Ha=k&&ln&&br?w:Ft.right):(es=k?vr(yn,Nn,"before"):v,An=!k&&sn&&Kt?w:dt.right,Un=!k&&ln&&br?v:Ft.left,Ha=k?vr(xr,Nn,"after"):w),M(es,dt.top,An-es,dt.bottom),dt.bottom<Ft.top&&M(v,dt.bottom,null,Ft.top),M(Un,Ft.top,Ha-Un,Ft.bottom)}(!Nt||dl(dt,Nt)<0)&&(Nt=dt),dl(Ft,Nt)<0&&(Nt=Ft),(!Bn||dl(dt,Bn)<0)&&(Bn=dt),dl(Ft,Bn)<0&&(Bn=Ft)}),{start:Nt,end:Bn}}var te=n.from(),Q=n.to();if(te.line==Q.line)B(te.line,te.ch,Q.ch);else{var fe=Qe(o,te.line),ve=Qe(o,Q.line),Ee=Rt(fe)==Rt(ve),Ne=B(te.line,te.ch,Ee?fe.text.length+1:null).end,De=B(Q.line,Ee?0:null,Q.ch).start;Ee&&(Ne.top<De.top-2?(M(Ne.right,Ne.top,null,Ne.bottom),M(v,De.top,De.left,De.bottom)):M(Ne.right,Ne.top,De.left-Ne.right,Ne.bottom)),Ne.bottom<De.top&&M(v,Ne.bottom,null,De.top)}s.appendChild(h)}function Ds(e){if(e.state.focused){var n=e.display;clearInterval(n.blinker);var s=!0;n.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?n.blinker=setInterval(function(){e.hasFocus()||Ut(e),n.cursorDiv.style.visibility=(s=!s)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(n.cursorDiv.style.visibility="hidden")}}function bc(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||hl(e))}function pl(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Ut(e))},100)}function hl(e,n){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),e.options.readOnly!="nocursor"&&(e.state.focused||(It(e,"focus",e,n),e.state.focused=!0,G(e.display.wrapper,"CodeMirror-focused"),!e.curOp&&e.display.selForContextMenu!=e.doc.sel&&(e.display.input.reset(),R&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Ds(e))}function Ut(e,n){e.state.delayingBlurEvent||(e.state.focused&&(It(e,"blur",e,n),e.state.focused=!1,Ce(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Co(e){for(var n=e.display,s=n.lineDiv.offsetTop,i=Math.max(0,n.scroller.getBoundingClientRect().top),o=n.lineDiv.getBoundingClientRect().top,h=0,m=0;m<n.view.length;m++){var v=n.view[m],w=e.options.lineWrapping,k=void 0,M=0;if(!v.hidden){if(o+=v.line.height,S&&L<8){var B=v.node.offsetTop+v.node.offsetHeight;k=B-s,s=B}else{var te=v.node.getBoundingClientRect();k=te.bottom-te.top,!w&&v.text.firstChild&&(M=v.text.firstChild.getBoundingClientRect().right-te.left-1)}var Q=v.line.height-k;if((Q>.005||Q<-.005)&&(o<i&&(h-=Q),On(v.line,k),va(v.line),v.rest))for(var fe=0;fe<v.rest.length;fe++)va(v.rest[fe]);if(M>e.display.sizerWidth){var ve=Math.ceil(M/ps(e.display));ve>e.display.maxLineLength&&(e.display.maxLineLength=ve,e.display.maxLine=v.line,e.display.maxLineChanged=!0)}}}Math.abs(h)>2&&(n.scroller.scrollTop+=h)}function va(e){if(e.widgets)for(var n=0;n<e.widgets.length;++n){var s=e.widgets[n],i=s.node.parentNode;i&&(s.height=i.offsetHeight)}}function fs(e,n,s){var i=s&&s.top!=null?Math.max(0,s.top):e.scroller.scrollTop;i=Math.floor(i-pa(e));var o=s&&s.bottom!=null?s.bottom:i+e.wrapper.clientHeight,h=W(n,i),m=W(n,o);if(s&&s.ensure){var v=s.ensure.from.line,w=s.ensure.to.line;v<h?(h=v,m=W(n,_n(Qe(n,v))+e.wrapper.clientHeight)):Math.min(w,n.lastLine())>=m&&(h=W(n,_n(Qe(n,w))-e.wrapper.clientHeight),m=w)}return{from:h,to:Math.max(m,h+1)}}function wc(e,n){if(!Ot(e,"scrollCursorIntoView")){var s=e.display,i=s.sizer.getBoundingClientRect(),o=null,h=s.wrapper.ownerDocument;if(n.top+i.top<0?o=!0:n.bottom+i.top>(h.defaultView.innerHeight||h.documentElement.clientHeight)&&(o=!1),o!=null&&!D){var m=j("div","​",null,`position: absolute;
                         top: `+(n.top-s.viewOffset-pa(e.display))+`px;
                         height: `+(n.bottom-n.top+ui(e)+s.barHeight)+`px;
                         left: `+n.left+"px; width: "+Math.max(2,n.right-n.left)+"px;");e.display.lineSpace.appendChild(m),m.scrollIntoView(o),e.display.lineSpace.removeChild(m)}}}function du(e,n,s,i){i==null&&(i=0);var o;!e.options.lineWrapping&&n==s&&(s=n.sticky=="before"?de(n.line,n.ch+1,"before"):n,n=n.ch?de(n.line,n.sticky=="before"?n.ch-1:n.ch,"after"):n);for(var h=0;h<5;h++){var m=!1,v=Cn(e,n),w=!s||s==n?v:Cn(e,s);o={left:Math.min(v.left,w.left),top:Math.min(v.top,w.top)-i,right:Math.max(v.left,w.left),bottom:Math.max(v.bottom,w.bottom)+i};var k=To(e,o),M=e.doc.scrollTop,B=e.doc.scrollLeft;if(k.scrollTop!=null&&(gs(e,k.scrollTop),Math.abs(e.doc.scrollTop-M)>1&&(m=!0)),k.scrollLeft!=null&&(Yi(e,k.scrollLeft),Math.abs(e.doc.scrollLeft-B)>1&&(m=!0)),!m)break}return o}function xa(e,n){var s=To(e,n);s.scrollTop!=null&&gs(e,s.scrollTop),s.scrollLeft!=null&&Yi(e,s.scrollLeft)}function To(e,n){var s=e.display,i=_i(e.display);n.top<0&&(n.top=0);var o=e.curOp&&e.curOp.scrollTop!=null?e.curOp.scrollTop:s.scroller.scrollTop,h=ds(e),m={};n.bottom-n.top>h&&(n.bottom=n.top+h);var v=e.doc.height+nl(s),w=n.top<i,k=n.bottom>v-i;if(n.top<o)m.scrollTop=w?0:n.top;else if(n.bottom>o+h){var M=Math.min(n.top,(k?v:n.bottom)-h);M!=o&&(m.scrollTop=M)}var B=e.options.fixedGutter?0:s.gutters.offsetWidth,te=e.curOp&&e.curOp.scrollLeft!=null?e.curOp.scrollLeft:s.scroller.scrollLeft-B,Q=cs(e)-s.gutters.offsetWidth,fe=n.right-n.left>Q;return fe&&(n.right=n.left+Q),n.left<10?m.scrollLeft=0:n.left<te?m.scrollLeft=Math.max(0,n.left+B-(fe?0:10)):n.right>Q+te-3&&(m.scrollLeft=n.right+(fe?0:10)-Q),m}function ms(e,n){n!=null&&(wa(e),e.curOp.scrollTop=(e.curOp.scrollTop==null?e.doc.scrollTop:e.curOp.scrollTop)+n)}function zs(e){wa(e);var n=e.getCursor();e.curOp.scrollToPos={from:n,to:n,margin:e.options.cursorScrollMargin}}function ba(e,n,s){(n!=null||s!=null)&&wa(e),n!=null&&(e.curOp.scrollLeft=n),s!=null&&(e.curOp.scrollTop=s)}function Jd(e,n){wa(e),e.curOp.scrollToPos=n}function wa(e){var n=e.curOp.scrollToPos;if(n){e.curOp.scrollToPos=null;var s=ko(e,n.from),i=ko(e,n.to);ka(e,s,i,n.margin)}}function ka(e,n,s,i){var o=To(e,{left:Math.min(n.left,s.left),top:Math.min(n.top,s.top)-i,right:Math.max(n.right,s.right),bottom:Math.max(n.bottom,s.bottom)+i});ba(e,o.scrollLeft,o.scrollTop)}function gs(e,n){Math.abs(e.doc.scrollTop-n)<2||(x||Xi(e,{top:n}),fl(e,n,!0),x&&Xi(e),Hs(e,100))}function fl(e,n,s){n=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,n)),!(e.display.scroller.scrollTop==n&&!s)&&(e.doc.scrollTop=n,e.display.scrollbars.setScrollTop(n),e.display.scroller.scrollTop!=n&&(e.display.scroller.scrollTop=n))}function Yi(e,n,s,i){n=Math.max(0,Math.min(n,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),!((s?n==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-n)<2)&&!i)&&(e.doc.scrollLeft=n,hu(e),e.display.scroller.scrollLeft!=n&&(e.display.scroller.scrollLeft=n),e.display.scrollbars.setScrollLeft(n))}function Fs(e){var n=e.display,s=n.gutters.offsetWidth,i=Math.round(e.doc.height+nl(e.display));return{clientHeight:n.scroller.clientHeight,viewHeight:n.wrapper.clientHeight,scrollWidth:n.scroller.scrollWidth,clientWidth:n.scroller.clientWidth,viewWidth:n.wrapper.clientWidth,barLeft:e.options.fixedGutter?s:0,docHeight:i,scrollHeight:i+ui(e)+n.barHeight,nativeBarWidth:n.nativeBarWidth,gutterWidth:s}}var Vi=function(e,n,s){this.cm=s;var i=this.vert=j("div",[j("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),o=this.horiz=j("div",[j("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=o.tabIndex=-1,e(i),e(o),it(i,"scroll",function(){i.clientHeight&&n(i.scrollTop,"vertical")}),it(o,"scroll",function(){o.clientWidth&&n(o.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,S&&L<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Vi.prototype.update=function(e){var n=e.scrollWidth>e.clientWidth+1,s=e.scrollHeight>e.clientHeight+1,i=e.nativeBarWidth;if(s){this.vert.style.display="block",this.vert.style.bottom=n?i+"px":"0";var o=e.viewHeight-(n?i:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+o)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(n){this.horiz.style.display="block",this.horiz.style.right=s?i+"px":"0",this.horiz.style.left=e.barLeft+"px";var h=e.viewWidth-e.barLeft-(s?i:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+h)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(i==0&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:s?i:0,bottom:n?i:0}},Vi.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Vi.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Vi.prototype.zeroWidthHack=function(){var e=V&&!ae?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new tt,this.disableVert=new tt},Vi.prototype.enableZeroWidthBar=function(e,n,s){e.style.visibility="";function i(){var o=e.getBoundingClientRect(),h=s=="vert"?document.elementFromPoint(o.right-1,(o.top+o.bottom)/2):document.elementFromPoint((o.right+o.left)/2,o.bottom-1);h!=e?e.style.visibility="hidden":n.set(1e3,i)}n.set(1e3,i)},Vi.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var Sa=function(){};Sa.prototype.update=function(){return{bottom:0,right:0}},Sa.prototype.setScrollLeft=function(){},Sa.prototype.setScrollTop=function(){},Sa.prototype.clear=function(){};function Ws(e,n){n||(n=Fs(e));var s=e.display.barWidth,i=e.display.barHeight;kc(e,n);for(var o=0;o<4&&s!=e.display.barWidth||i!=e.display.barHeight;o++)s!=e.display.barWidth&&e.options.lineWrapping&&Co(e),kc(e,Fs(e)),s=e.display.barWidth,i=e.display.barHeight}function kc(e,n){var s=e.display,i=s.scrollbars.update(n);s.sizer.style.paddingRight=(s.barWidth=i.right)+"px",s.sizer.style.paddingBottom=(s.barHeight=i.bottom)+"px",s.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(s.scrollbarFiller.style.display="block",s.scrollbarFiller.style.height=i.bottom+"px",s.scrollbarFiller.style.width=i.right+"px"):s.scrollbarFiller.style.display="",i.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(s.gutterFiller.style.display="block",s.gutterFiller.style.height=i.bottom+"px",s.gutterFiller.style.width=n.gutterWidth+"px"):s.gutterFiller.style.display=""}var Sc={native:Vi,null:Sa};function ml(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Ce(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Sc[e.options.scrollbarStyle](function(n){e.display.wrapper.insertBefore(n,e.display.scrollbarFiller),it(n,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),n.setAttribute("cm-not-content","true")},function(n,s){s=="horizontal"?Yi(e,n):gs(e,n)},e),e.display.scrollbars.addClass&&G(e.display.wrapper,e.display.scrollbars.addClass)}var ys=0;function vs(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++ys,markArrays:null},uc(e.curOp)}function Yr(e){var n=e.curOp;n&&Fd(n,function(s){for(var i=0;i<s.ops.length;i++)s.ops[i].cm.curOp=null;Ti(s)})}function Ti(e){for(var n=e.ops,s=0;s<n.length;s++)_a(n[s]);for(var i=0;i<n.length;i++)Ji(n[i]);for(var o=0;o<n.length;o++)pu(n[o]);for(var h=0;h<n.length;h++)Xd(n[h]);for(var m=0;m<n.length;m++)Qd(n[m])}function _a(e){var n=e.cm,s=n.display;tn(n),e.updateMaxLine&&aa(n),e.mustUpdate=e.viewChanged||e.forceUpdate||e.scrollTop!=null||e.scrollToPos&&(e.scrollToPos.from.line<s.viewFrom||e.scrollToPos.to.line>=s.viewTo)||s.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new ci(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Ji(e){e.updatedDisplay=e.mustUpdate&&Gn(e.cm,e.update)}function pu(e){var n=e.cm,s=n.display;e.updatedDisplay&&Co(n),e.barMeasure=Fs(n),s.maxLineChanged&&!n.options.lineWrapping&&(e.adjustWidthTo=ru(n,s.maxLine,s.maxLine.text.length).left+3,n.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(s.scroller.clientWidth,s.sizer.offsetLeft+e.adjustWidthTo+ui(n)+n.display.barWidth),e.maxScrollLeft=Math.max(0,s.sizer.offsetLeft+e.adjustWidthTo-cs(n))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=s.input.prepareSelection())}function Xd(e){var n=e.cm;e.adjustWidthTo!=null&&(n.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<n.doc.scrollLeft&&Yi(n,Math.min(n.display.scroller.scrollLeft,e.maxScrollLeft),!0),n.display.maxLineChanged=!1);var s=e.focus&&e.focus==P(Ge(n));e.preparedSelection&&n.display.input.showSelection(e.preparedSelection,s),(e.updatedDisplay||e.startHeight!=n.doc.height)&&Ws(n,e.barMeasure),e.updatedDisplay&&Eo(n,e.barMeasure),e.selectionChanged&&Ds(n),n.state.focused&&e.updateInput&&n.display.input.reset(e.typing),s&&bc(e.cm)}function Qd(e){var n=e.cm,s=n.display,i=n.doc;if(e.updatedDisplay&&fr(n,e.update),s.wheelStartX!=null&&(e.scrollTop!=null||e.scrollLeft!=null||e.scrollToPos)&&(s.wheelStartX=s.wheelStartY=null),e.scrollTop!=null&&fl(n,e.scrollTop,e.forceScroll),e.scrollLeft!=null&&Yi(n,e.scrollLeft,!0,!0),e.scrollToPos){var o=du(n,gt(i,e.scrollToPos.from),gt(i,e.scrollToPos.to),e.scrollToPos.margin);wc(n,o)}var h=e.maybeHiddenMarkers,m=e.maybeUnhiddenMarkers;if(h)for(var v=0;v<h.length;++v)h[v].lines.length||It(h[v],"hide");if(m)for(var w=0;w<m.length;++w)m[w].lines.length&&It(m[w],"unhide");s.wrapper.offsetHeight&&(i.scrollTop=n.display.scroller.scrollTop),e.changeObjs&&It(n,"changes",n,e.changeObjs),e.update&&e.update.finish()}function Ln(e,n){if(e.curOp)return n();vs(e);try{return n()}finally{Yr(e)}}function dn(e,n){return function(){if(e.curOp)return n.apply(e,arguments);vs(e);try{return n.apply(e,arguments)}finally{Yr(e)}}}function Tn(e){return function(){if(this.curOp)return e.apply(this,arguments);vs(this);try{return e.apply(this,arguments)}finally{Yr(this)}}}function gn(e){return function(){var n=this.cm;if(!n||n.curOp)return e.apply(this,arguments);vs(n);try{return e.apply(this,arguments)}finally{Yr(n)}}}function Hs(e,n){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(n,Re(No,e))}function No(e){var n=e.doc;if(!(n.highlightFrontier>=e.display.viewTo)){var s=+new Date+e.options.workTime,i=Et(e,n.highlightFrontier),o=[];n.iter(i.line,Math.min(n.first+n.size,e.display.viewTo+500),function(h){if(i.line>=e.display.viewFrom){var m=h.styles,v=h.text.length>e.options.maxHighlightLength?At(n.mode,i.state):null,w=Ps(e,h,i,!0);v&&(i.state=v),h.styles=w.styles;var k=h.styleClasses,M=w.classes;M?h.styleClasses=M:k&&(h.styleClasses=null);for(var B=!m||m.length!=h.styles.length||k!=M&&(!k||!M||k.bgClass!=M.bgClass||k.textClass!=M.textClass),te=0;!B&&te<m.length;++te)B=m[te]!=h.styles[te];B&&o.push(i.line),h.stateAfter=i.save(),i.nextLine()}else h.text.length<=e.options.maxHighlightLength&&Wi(e,h.text,i),h.stateAfter=i.line%5==0?i.save():null,i.nextLine();if(+new Date>s)return Hs(e,e.options.workDelay),!0}),n.highlightFrontier=i.line,n.modeFrontier=Math.max(n.modeFrontier,i.line),o.length&&Ln(e,function(){for(var h=0;h<o.length;h++)Ki(e,o[h],"text")})}}var ci=function(e,n,s){var i=e.display;this.viewport=n,this.visible=fs(i,e.doc,n),this.editorIsHidden=!i.wrapper.offsetWidth,this.wrapperHeight=i.wrapper.clientHeight,this.wrapperWidth=i.wrapper.clientWidth,this.oldDisplayWidth=cs(e),this.force=s,this.dims=ul(e),this.events=[]};ci.prototype.signal=function(e,n){un(e,n)&&this.events.push(arguments)},ci.prototype.finish=function(){for(var e=0;e<this.events.length;e++)It.apply(null,this.events[e])};function tn(e){var n=e.display;!n.scrollbarsClipped&&n.scroller.offsetWidth&&(n.nativeBarWidth=n.scroller.offsetWidth-n.scroller.clientWidth,n.heightForcer.style.height=ui(e)+"px",n.sizer.style.marginBottom=-n.nativeBarWidth+"px",n.sizer.style.borderRightWidth=ui(e)+"px",n.scrollbarsClipped=!0)}function Qt(e){if(e.hasFocus())return null;var n=P(Ge(e));if(!n||!T(e.display.lineDiv,n))return null;var s={activeElt:n};if(window.getSelection){var i=ke(e).getSelection();i.anchorNode&&i.extend&&T(e.display.lineDiv,i.anchorNode)&&(s.anchorNode=i.anchorNode,s.anchorOffset=i.anchorOffset,s.focusNode=i.focusNode,s.focusOffset=i.focusOffset)}return s}function xs(e){if(!(!e||!e.activeElt||e.activeElt==P(Ve(e.activeElt)))&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&T(document.body,e.anchorNode)&&T(document.body,e.focusNode))){var n=e.activeElt.ownerDocument,s=n.defaultView.getSelection(),i=n.createRange();i.setEnd(e.anchorNode,e.anchorOffset),i.collapse(!1),s.removeAllRanges(),s.addRange(i),s.extend(e.focusNode,e.focusOffset)}}function Gn(e,n){var s=e.display,i=e.doc;if(n.editorIsHidden)return Gi(e),!1;if(!n.force&&n.visible.from>=s.viewFrom&&n.visible.to<=s.viewTo&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo)&&s.renderedView==s.view&&cu(e)==0)return!1;fu(e)&&(Gi(e),n.dims=ul(e));var o=i.first+i.size,h=Math.max(n.visible.from-e.options.viewportMargin,i.first),m=Math.min(o,n.visible.to+e.options.viewportMargin);s.viewFrom<h&&h-s.viewFrom<20&&(h=Math.max(i.first,s.viewFrom)),s.viewTo>m&&s.viewTo-m<20&&(m=Math.min(o,s.viewTo)),Mn&&(h=Za(e.doc,h),m=oa(e.doc,m));var v=h!=s.viewFrom||m!=s.viewTo||s.lastWrapHeight!=n.wrapperHeight||s.lastWrapWidth!=n.wrapperWidth;xc(e,h,m),s.viewOffset=_n(Qe(e.doc,s.viewFrom)),e.display.mover.style.top=s.viewOffset+"px";var w=cu(e);if(!v&&w==0&&!n.force&&s.renderedView==s.view&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo))return!1;var k=Qt(e);return w>4&&(s.lineDiv.style.display="none"),jo(e,s.updateLineNumbers,n.dims),w>4&&(s.lineDiv.style.display=""),s.renderedView=s.view,xs(k),se(s.cursorDiv),se(s.selectionDiv),s.gutters.style.height=s.sizer.style.minHeight=0,v&&(s.lastWrapHeight=n.wrapperHeight,s.lastWrapWidth=n.wrapperWidth,Hs(e,400)),s.updateLineNumbers=null,!0}function fr(e,n){for(var s=n.viewport,i=!0;;i=!1){if(!i||!e.options.lineWrapping||n.oldDisplayWidth==cs(e)){if(s&&s.top!=null&&(s={top:Math.min(e.doc.height+nl(e.display)-ds(e),s.top)}),n.visible=fs(e.display,e.doc,s),n.visible.from>=e.display.viewFrom&&n.visible.to<=e.display.viewTo)break}else i&&(n.visible=fs(e.display,e.doc,s));if(!Gn(e,n))break;Co(e);var o=Fs(e);Gr(e),Ws(e,o),Eo(e,o),n.force=!1}n.signal(e,"update",e),(e.display.viewFrom!=e.display.reportedViewFrom||e.display.viewTo!=e.display.reportedViewTo)&&(n.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Xi(e,n){var s=new ci(e,n);if(Gn(e,s)){Co(e),fr(e,s);var i=Fs(e);Gr(e),Ws(e,i),Eo(e,i),s.finish()}}function jo(e,n,s){var i=e.display,o=e.options.lineNumbers,h=i.lineDiv,m=h.firstChild;function v(fe){var ve=fe.nextSibling;return R&&V&&e.display.currentWheelTarget==fe?fe.style.display="none":fe.parentNode.removeChild(fe),ve}for(var w=i.view,k=i.viewFrom,M=0;M<w.length;M++){var B=w[M];if(!B.hidden)if(!B.node||B.node.parentNode!=h){var te=Ud(e,B,k,s);h.insertBefore(te,m)}else{for(;m!=B.node;)m=v(m);var Q=o&&n!=null&&n<=k&&B.lineNumber;B.changes&&(qe(B.changes,"gutter")>-1&&(Q=!1),cc(e,B,k,s)),Q&&(se(B.lineNumber),B.lineNumber.appendChild(document.createTextNode(Te(e.options,k)))),m=B.node.nextSibling}k+=B.size}for(;m;)m=v(m)}function tr(e){var n=e.gutters.offsetWidth;e.sizer.style.marginLeft=n+"px",Dn(e,"gutterChanged",e)}function Eo(e,n){e.display.sizer.style.minHeight=n.docHeight+"px",e.display.heightForcer.style.top=n.docHeight+"px",e.display.gutters.style.height=n.docHeight+e.display.barHeight+ui(e)+"px"}function hu(e){var n=e.display,s=n.view;if(!(!n.alignWidgets&&(!n.gutters.firstChild||!e.options.fixedGutter))){for(var i=_o(n)-n.scroller.scrollLeft+e.doc.scrollLeft,o=n.gutters.offsetWidth,h=i+"px",m=0;m<s.length;m++)if(!s[m].hidden){e.options.fixedGutter&&(s[m].gutter&&(s[m].gutter.style.left=h),s[m].gutterBackground&&(s[m].gutterBackground.style.left=h));var v=s[m].alignable;if(v)for(var w=0;w<v.length;w++)v[w].style.left=h}e.options.fixedGutter&&(n.gutters.style.left=i+o+"px")}}function fu(e){if(!e.options.lineNumbers)return!1;var n=e.doc,s=Te(e.options,n.first+n.size-1),i=e.display;if(s.length!=i.lineNumChars){var o=i.measure.appendChild(j("div",[j("div",s)],"CodeMirror-linenumber CodeMirror-gutter-elt")),h=o.firstChild.offsetWidth,m=o.offsetWidth-h;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(h,i.lineGutter.offsetWidth-m)+1,i.lineNumWidth=i.lineNumInnerWidth+m,i.lineNumChars=i.lineNumInnerWidth?s.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",tr(e.display),!0}return!1}function Lo(e,n){for(var s=[],i=!1,o=0;o<e.length;o++){var h=e[o],m=null;if(typeof h!="string"&&(m=h.style,h=h.className),h=="CodeMirror-linenumbers")if(n)i=!0;else continue;s.push({className:h,style:m})}return n&&!i&&s.push({className:"CodeMirror-linenumbers",style:null}),s}function mu(e){var n=e.gutters,s=e.gutterSpecs;se(n),e.lineGutter=null;for(var i=0;i<s.length;++i){var o=s[i],h=o.className,m=o.style,v=n.appendChild(j("div",null,"CodeMirror-gutter "+h));m&&(v.style.cssText=m),h=="CodeMirror-linenumbers"&&(e.lineGutter=v,v.style.width=(e.lineNumWidth||1)+"px")}n.style.display=s.length?"":"none",tr(e)}function Dr(e){mu(e.display),er(e),hu(e)}function gl(e,n,s,i){var o=this;this.input=s,o.scrollbarFiller=j("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=j("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=X("div",null,"CodeMirror-code"),o.selectionDiv=j("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=j("div",null,"CodeMirror-cursors"),o.measure=j("div",null,"CodeMirror-measure"),o.lineMeasure=j("div",null,"CodeMirror-measure"),o.lineSpace=X("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none");var h=X("div",[o.lineSpace],"CodeMirror-lines");o.mover=j("div",[h],null,"position: relative"),o.sizer=j("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=j("div",null,null,"position: absolute; height: "+Ht+"px; width: 1px;"),o.gutters=j("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=j("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=j("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),A&&Y===105&&(o.wrapper.style.clipPath="inset(0px)"),o.wrapper.setAttribute("translate","no"),S&&L<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),!R&&!(x&&K)&&(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=n.first,o.reportedViewFrom=o.reportedViewTo=n.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,o.gutterSpecs=Lo(i.gutters,i.lineNumbers),mu(o),s.init(o)}var Po=0,Ni=null;S?Ni=-.53:x?Ni=15:A?Ni=-.7:H&&(Ni=-1/3);function _c(e){var n=e.wheelDeltaX,s=e.wheelDeltaY;return n==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(n=e.detail),s==null&&e.detail&&e.axis==e.VERTICAL_AXIS?s=e.detail:s==null&&(s=e.wheelDelta),{x:n,y:s}}function bs(e){var n=_c(e);return n.x*=Ni,n.y*=Ni,n}function Bs(e,n){A&&Y==102&&(e.display.chromeScrollHack==null?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout(function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""},100));var s=_c(n),i=s.x,o=s.y,h=Ni;n.deltaMode===0&&(i=n.deltaX,o=n.deltaY,h=1);var m=e.display,v=m.scroller,w=v.scrollWidth>v.clientWidth,k=v.scrollHeight>v.clientHeight;if(i&&w||o&&k){if(o&&V&&R){e:for(var M=n.target,B=m.view;M!=v;M=M.parentNode)for(var te=0;te<B.length;te++)if(B[te].node==M){e.display.currentWheelTarget=M;break e}}if(i&&!x&&!ne&&h!=null){o&&k&&gs(e,Math.max(0,v.scrollTop+o*h)),Yi(e,Math.max(0,v.scrollLeft+i*h)),(!o||o&&k)&&wn(n),m.wheelStartX=null;return}if(o&&h!=null){var Q=o*h,fe=e.doc.scrollTop,ve=fe+m.wrapper.clientHeight;Q<0?fe=Math.max(0,fe+Q-50):ve=Math.min(e.doc.height,ve+Q+50),Xi(e,{top:fe,bottom:ve})}Po<20&&n.deltaMode!==0&&(m.wheelStartX==null?(m.wheelStartX=v.scrollLeft,m.wheelStartY=v.scrollTop,m.wheelDX=i,m.wheelDY=o,setTimeout(function(){if(m.wheelStartX!=null){var Ee=v.scrollLeft-m.wheelStartX,Ne=v.scrollTop-m.wheelStartY,De=Ne&&m.wheelDY&&Ne/m.wheelDY||Ee&&m.wheelDX&&Ee/m.wheelDX;m.wheelStartX=m.wheelStartY=null,De&&(Ni=(Ni*Po+De)/(Po+1),++Po)}},200)):(m.wheelDX+=i,m.wheelDY+=o))}}var Yn=function(e,n){this.ranges=e,this.primIndex=n};Yn.prototype.primary=function(){return this.ranges[this.primIndex]},Yn.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var n=0;n<this.ranges.length;n++){var s=this.ranges[n],i=e.ranges[n];if(!Tt(s.anchor,i.anchor)||!Tt(s.head,i.head))return!1}return!0},Yn.prototype.deepCopy=function(){for(var e=[],n=0;n<this.ranges.length;n++)e[n]=new Pt(en(this.ranges[n].anchor),en(this.ranges[n].head));return new Yn(e,this.primIndex)},Yn.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Yn.prototype.contains=function(e,n){n||(n=e);for(var s=0;s<this.ranges.length;s++){var i=this.ranges[s];if(We(n,i.from())>=0&&We(e,i.to())<=0)return s}return-1};var Pt=function(e,n){this.anchor=e,this.head=n};Pt.prototype.from=function(){return oi(this.anchor,this.head)},Pt.prototype.to=function(){return Sn(this.anchor,this.head)},Pt.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function Pr(e,n,s){var i=e&&e.options.selectionsMayTouch,o=n[s];n.sort(function(te,Q){return We(te.from(),Q.from())}),s=qe(n,o);for(var h=1;h<n.length;h++){var m=n[h],v=n[h-1],w=We(v.to(),m.from());if(i&&!m.empty()?w>0:w>=0){var k=oi(v.from(),m.from()),M=Sn(v.to(),m.to()),B=v.empty()?m.from()==m.head:v.from()==v.head;h<=s&&--s,n.splice(--h,2,new Pt(B?M:k,B?k:M))}}return new Yn(n,s)}function zn(e,n){return new Yn([new Pt(e,n||e)],0)}function Fn(e){return e.text?de(e.from.line+e.text.length-1,$e(e.text).length+(e.text.length==1?e.from.ch:0)):e.to}function ws(e,n){if(We(e,n.from)<0)return e;if(We(e,n.to)<=0)return Fn(n);var s=e.line+n.text.length-(n.to.line-n.from.line)-1,i=e.ch;return e.line==n.to.line&&(i+=Fn(n).ch-n.to.ch),de(s,i)}function di(e,n){for(var s=[],i=0;i<e.sel.ranges.length;i++){var o=e.sel.ranges[i];s.push(new Pt(ws(o.anchor,n),ws(o.head,n)))}return Pr(e.cm,s,e.sel.primIndex)}function ji(e,n,s){return e.line==n.line?de(s.line,e.ch-n.ch+s.ch):de(s.line+(e.line-n.line),e.ch)}function Us(e,n,s){for(var i=[],o=de(e.first,0),h=o,m=0;m<n.length;m++){var v=n[m],w=ji(v.from,o,h),k=ji(Fn(v),o,h);if(o=v.to,h=k,s=="around"){var M=e.sel.ranges[m],B=We(M.head,M.anchor)<0;i[m]=new Pt(B?k:w,B?w:k)}else i[m]=new Pt(w,w)}return new Yn(i,e.sel.primIndex)}function yl(e){e.doc.mode=zi(e.options,e.doc.modeOption),qs(e)}function qs(e){e.doc.iter(function(n){n.stateAfter&&(n.stateAfter=null),n.styles&&(n.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,Hs(e,100),e.state.modeGen++,e.curOp&&er(e)}function vl(e,n){return n.from.ch==0&&n.to.ch==0&&$e(n.text)==""&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function mr(e,n,s,i){function o(De){return s?s[De]:null}function h(De,Me,Ke){Rd(De,Me,Ke,i),Dn(De,"change",De,n)}function m(De,Me){for(var Ke=[],lt=De;lt<Me;++lt)Ke.push(new ki(k[lt],o(lt),i));return Ke}var v=n.from,w=n.to,k=n.text,M=Qe(e,v.line),B=Qe(e,w.line),te=$e(k),Q=o(k.length-1),fe=w.line-v.line;if(n.full)e.insert(0,m(0,k.length)),e.remove(k.length,e.size-k.length);else if(vl(e,n)){var ve=m(0,k.length-1);h(B,B.text,Q),fe&&e.remove(v.line,fe),ve.length&&e.insert(v.line,ve)}else if(M==B)if(k.length==1)h(M,M.text.slice(0,v.ch)+te+M.text.slice(w.ch),Q);else{var Ee=m(1,k.length-1);Ee.push(new ki(te+M.text.slice(w.ch),Q,i)),h(M,M.text.slice(0,v.ch)+k[0],o(0)),e.insert(v.line+1,Ee)}else if(k.length==1)h(M,M.text.slice(0,v.ch)+k[0]+B.text.slice(w.ch),o(0)),e.remove(v.line+1,fe);else{h(M,M.text.slice(0,v.ch)+k[0],o(0)),h(B,te+B.text.slice(w.ch),Q);var Ne=m(1,k.length-1);fe>1&&e.remove(v.line+1,fe-1),e.insert(v.line+1,Ne)}Dn(e,"change",e,n)}function Pn(e,n,s){function i(o,h,m){if(o.linked)for(var v=0;v<o.linked.length;++v){var w=o.linked[v];if(w.doc!=h){var k=m&&w.sharedHist;s&&!k||(n(w.doc,k),i(w.doc,o,k))}}}i(e,null,!0)}function nn(e,n){if(n.cm)throw new Error("This document is already in use.");e.doc=n,n.cm=e,ma(e),yl(e),Vr(e),e.options.direction=n.direction,e.options.lineWrapping||aa(e),e.options.mode=n.modeOption,er(e)}function Vr(e){(e.doc.direction=="rtl"?G:Ce)(e.display.lineDiv,"CodeMirror-rtl")}function Cc(e){Ln(e,function(){Vr(e),er(e)})}function Ca(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function Ta(e,n){var s={from:en(n.from),to:Fn(n),text:si(e,n.from,n.to)};return jc(e,s,n.from.line,n.to.line+1),Pn(e,function(i){return jc(i,s,n.from.line,n.to.line+1)},!0),s}function xl(e){for(;e.length;){var n=$e(e);if(n.ranges)e.pop();else break}}function Tc(e,n){if(n)return xl(e.done),$e(e.done);if(e.done.length&&!$e(e.done).ranges)return $e(e.done);if(e.done.length>1&&!e.done[e.done.length-2].ranges)return e.done.pop(),$e(e.done)}function Na(e,n,s,i){var o=e.history;o.undone.length=0;var h=+new Date,m,v;if((o.lastOp==i||o.lastOrigin==n.origin&&n.origin&&(n.origin.charAt(0)=="+"&&o.lastModTime>h-(e.cm?e.cm.options.historyEventDelay:500)||n.origin.charAt(0)=="*"))&&(m=Tc(o,o.lastOp==i)))v=$e(m.changes),We(n.from,n.to)==0&&We(n.from,v.to)==0?v.to=Fn(n):m.changes.push(Ta(e,n));else{var w=$e(o.done);for((!w||!w.ranges)&&Ro(e.sel,o.done),m={changes:[Ta(e,n)],generation:o.generation},o.done.push(m);o.done.length>o.undoDepth;)o.done.shift(),o.done[0].ranges||o.done.shift()}o.done.push(s),o.generation=++o.maxGeneration,o.lastModTime=o.lastSelTime=h,o.lastOp=o.lastSelOp=i,o.lastOrigin=o.lastSelOrigin=n.origin,v||It(e,"historyAdded")}function Nc(e,n,s,i){var o=n.charAt(0);return o=="*"||o=="+"&&s.ranges.length==i.ranges.length&&s.somethingSelected()==i.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function Ao(e,n,s,i){var o=e.history,h=i&&i.origin;s==o.lastSelOp||h&&o.lastSelOrigin==h&&(o.lastModTime==o.lastSelTime&&o.lastOrigin==h||Nc(e,h,$e(o.done),n))?o.done[o.done.length-1]=n:Ro(n,o.done),o.lastSelTime=+new Date,o.lastSelOrigin=h,o.lastSelOp=s,i&&i.clearRedo!==!1&&xl(o.undone)}function Ro(e,n){var s=$e(n);s&&s.ranges&&s.equals(e)||n.push(e)}function jc(e,n,s,i){var o=n["spans_"+e.id],h=0;e.iter(Math.max(e.first,s),Math.min(e.first+e.size,i),function(m){m.markedSpans&&((o||(o=n["spans_"+e.id]={}))[h]=m.markedSpans),++h})}function ja(e){if(!e)return null;for(var n,s=0;s<e.length;++s)e[s].marker.explicitlyCleared?n||(n=e.slice(0,s)):n&&n.push(e[s]);return n?n.length?n:null:e}function bl(e,n){var s=n["spans_"+e.id];if(!s)return null;for(var i=[],o=0;o<n.text.length;++o)i.push(ja(s[o]));return i}function gu(e,n){var s=bl(e,n),i=_e(e,n);if(!s)return i;if(!i)return s;for(var o=0;o<s.length;++o){var h=s[o],m=i[o];if(h&&m)e:for(var v=0;v<m.length;++v){for(var w=m[v],k=0;k<h.length;++k)if(h[k].marker==w.marker)continue e;h.push(w)}else m&&(s[o]=m)}return s}function $s(e,n,s){for(var i=[],o=0;o<e.length;++o){var h=e[o];if(h.ranges){i.push(s?Yn.prototype.deepCopy.call(h):h);continue}var m=h.changes,v=[];i.push({changes:v});for(var w=0;w<m.length;++w){var k=m[w],M=void 0;if(v.push({from:k.from,to:k.to,text:k.text}),n)for(var B in k)(M=B.match(/^spans_(\d+)$/))&&qe(n,Number(M[1]))>-1&&($e(v)[B]=k[B],delete k[B])}}return i}function ks(e,n,s,i){if(i){var o=e.anchor;if(s){var h=We(n,o)<0;h!=We(s,o)<0?(o=n,n=s):h!=We(n,s)<0&&(n=s)}return new Pt(o,n)}else return new Pt(s||n,n)}function Ea(e,n,s,i,o){o==null&&(o=e.cm&&(e.cm.display.shift||e.extend)),Wn(e,new Yn([ks(e.sel.primary(),n,s,o)],0),i)}function La(e,n,s){for(var i=[],o=e.cm&&(e.cm.display.shift||e.extend),h=0;h<e.sel.ranges.length;h++)i[h]=ks(e.sel.ranges[h],n[h],null,o);var m=Pr(e.cm,i,e.sel.primIndex);Wn(e,m,s)}function Io(e,n,s,i){var o=e.sel.ranges.slice(0);o[n]=s,Wn(e,Pr(e.cm,o,e.sel.primIndex),i)}function Ks(e,n,s,i){Wn(e,zn(n,s),i)}function yu(e,n,s){var i={ranges:n.ranges,update:function(o){this.ranges=[];for(var h=0;h<o.length;h++)this.ranges[h]=new Pt(gt(e,o[h].anchor),gt(e,o[h].head))},origin:s&&s.origin};return It(e,"beforeSelectionChange",e,i),e.cm&&It(e.cm,"beforeSelectionChange",e.cm,i),i.ranges!=n.ranges?Pr(e.cm,i.ranges,i.ranges.length-1):n}function wl(e,n,s){var i=e.history.done,o=$e(i);o&&o.ranges?(i[i.length-1]=n,Oo(e,n,s)):Wn(e,n,s)}function Wn(e,n,s){Oo(e,n,s),Ao(e,e.sel,e.cm?e.cm.curOp.id:NaN,s)}function Oo(e,n,s){(un(e,"beforeSelectionChange")||e.cm&&un(e.cm,"beforeSelectionChange"))&&(n=yu(e,n,s));var i=s&&s.bias||(We(n.primary().head,e.sel.primary().head)<0?-1:1);Gs(e,Ss(e,n,i,!0)),!(s&&s.scroll===!1)&&e.cm&&e.cm.getOption("readOnly")!="nocursor"&&zs(e.cm)}function Gs(e,n){n.equals(e.sel)||(e.sel=n,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,jn(e.cm)),Dn(e,"cursorActivity",e))}function zr(e){Gs(e,Ss(e,e.sel,null,!1))}function Ss(e,n,s,i){for(var o,h=0;h<n.ranges.length;h++){var m=n.ranges[h],v=n.ranges.length==e.sel.ranges.length&&e.sel.ranges[h],w=Pa(e,m.anchor,v&&v.anchor,s,i),k=m.head==m.anchor?w:Pa(e,m.head,v&&v.head,s,i);(o||w!=m.anchor||k!=m.head)&&(o||(o=n.ranges.slice(0,h)),o[h]=new Pt(w,k))}return o?Pr(e.cm,o,n.primIndex):n}function _s(e,n,s,i,o){var h=Qe(e,n.line);if(h.markedSpans)for(var m=0;m<h.markedSpans.length;++m){var v=h.markedSpans[m],w=v.marker,k="selectLeft"in w?!w.selectLeft:w.inclusiveLeft,M="selectRight"in w?!w.selectRight:w.inclusiveRight;if((v.from==null||(k?v.from<=n.ch:v.from<n.ch))&&(v.to==null||(M?v.to>=n.ch:v.to>n.ch))){if(o&&(It(w,"beforeCursorEnter"),w.explicitlyCleared))if(h.markedSpans){--m;continue}else break;if(!w.atomic)continue;if(s){var B=w.find(i<0?1:-1),te=void 0;if((i<0?M:k)&&(B=Ei(e,B,-i,B&&B.line==n.line?h:null)),B&&B.line==n.line&&(te=We(B,s))&&(i<0?te<0:te>0))return _s(e,B,n,i,o)}var Q=w.find(i<0?-1:1);return(i<0?k:M)&&(Q=Ei(e,Q,i,Q.line==n.line?h:null)),Q?_s(e,Q,n,i,o):null}}return n}function Pa(e,n,s,i,o){var h=i||1,m=_s(e,n,s,h,o)||!o&&_s(e,n,s,h,!0)||_s(e,n,s,-h,o)||!o&&_s(e,n,s,-h,!0);return m||(e.cantEdit=!0,de(e.first,0))}function Ei(e,n,s,i){return s<0&&n.ch==0?n.line>e.first?gt(e,de(n.line-1)):null:s>0&&n.ch==(i||Qe(e,n.line)).text.length?n.line<e.first+e.size-1?de(n.line+1,0):null:new de(n.line,n.ch+s)}function Qi(e){e.setSelection(de(e.firstLine(),0),de(e.lastLine()),St)}function kl(e,n,s){var i={canceled:!1,from:n.from,to:n.to,text:n.text,origin:n.origin,cancel:function(){return i.canceled=!0}};return s&&(i.update=function(o,h,m,v){o&&(i.from=gt(e,o)),h&&(i.to=gt(e,h)),m&&(i.text=m),v!==void 0&&(i.origin=v)}),It(e,"beforeChange",e,i),e.cm&&It(e.cm,"beforeChange",e.cm,i),i.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:i.from,to:i.to,text:i.text,origin:i.origin}}function Ys(e,n,s){if(e.cm){if(!e.cm.curOp)return dn(e.cm,Ys)(e,n,s);if(e.cm.state.suppressEdits)return}if(!((un(e,"beforeChange")||e.cm&&un(e.cm,"beforeChange"))&&(n=kl(e,n,!0),!n))){var i=Or&&!s&&Z(e,n.from,n.to);if(i)for(var o=i.length-1;o>=0;--o)Li(e,{from:i[o].from,to:i[o].to,text:o?[""]:n.text,origin:n.origin});else Li(e,n)}}function Li(e,n){if(!(n.text.length==1&&n.text[0]==""&&We(n.from,n.to)==0)){var s=di(e,n);Na(e,n,s,e.cm?e.cm.curOp.id:NaN),Mo(e,n,s,_e(e,n));var i=[];Pn(e,function(o,h){!h&&qe(i,o.history)==-1&&(zo(o.history,n),i.push(o.history)),Mo(o,n,null,_e(o,n))})}}function pi(e,n,s){var i=e.cm&&e.cm.state.suppressEdits;if(!(i&&!s)){for(var o=e.history,h,m=e.sel,v=n=="undo"?o.done:o.undone,w=n=="undo"?o.undone:o.done,k=0;k<v.length&&(h=v[k],!(s?h.ranges&&!h.equals(e.sel):!h.ranges));k++);if(k!=v.length){for(o.lastOrigin=o.lastSelOrigin=null;;)if(h=v.pop(),h.ranges){if(Ro(h,w),s&&!h.equals(e.sel)){Wn(e,h,{clearRedo:!1});return}m=h}else if(i){v.push(h);return}else break;var M=[];Ro(m,w),w.push({changes:M,generation:o.generation}),o.generation=h.generation||++o.maxGeneration;for(var B=un(e,"beforeChange")||e.cm&&un(e.cm,"beforeChange"),te=function(ve){var Ee=h.changes[ve];if(Ee.origin=n,B&&!kl(e,Ee,!1))return v.length=0,{};M.push(Ta(e,Ee));var Ne=ve?di(e,Ee):$e(v);Mo(e,Ee,Ne,gu(e,Ee)),!ve&&e.cm&&e.cm.scrollIntoView({from:Ee.from,to:Fn(Ee)});var De=[];Pn(e,function(Me,Ke){!Ke&&qe(De,Me.history)==-1&&(zo(Me.history,Ee),De.push(Me.history)),Mo(Me,Ee,null,gu(Me,Ee))})},Q=h.changes.length-1;Q>=0;--Q){var fe=te(Q);if(fe)return fe.v}}}}function Aa(e,n){if(n!=0&&(e.first+=n,e.sel=new Yn(ht(e.sel.ranges,function(o){return new Pt(de(o.anchor.line+n,o.anchor.ch),de(o.head.line+n,o.head.ch))}),e.sel.primIndex),e.cm)){er(e.cm,e.first,e.first-n,n);for(var s=e.cm.display,i=s.viewFrom;i<s.viewTo;i++)Ki(e.cm,i,"gutter")}}function Mo(e,n,s,i){if(e.cm&&!e.cm.curOp)return dn(e.cm,Mo)(e,n,s,i);if(n.to.line<e.first){Aa(e,n.text.length-1-(n.to.line-n.from.line));return}if(!(n.from.line>e.lastLine())){if(n.from.line<e.first){var o=n.text.length-1-(e.first-n.from.line);Aa(e,o),n={from:de(e.first,0),to:de(n.to.line+o,n.to.ch),text:[$e(n.text)],origin:n.origin}}var h=e.lastLine();n.to.line>h&&(n={from:n.from,to:de(h,Qe(e,h).text.length),text:[n.text[0]],origin:n.origin}),n.removed=si(e,n.from,n.to),s||(s=di(e,n)),e.cm?Sl(e.cm,n,i):mr(e,n,i),Oo(e,s,St),e.cantEdit&&Pa(e,de(e.firstLine(),0))&&(e.cantEdit=!1)}}function Sl(e,n,s){var i=e.doc,o=e.display,h=n.from,m=n.to,v=!1,w=h.line;e.options.lineWrapping||(w=_(Rt(Qe(i,h.line))),i.iter(w,m.line+1,function(Q){if(Q==o.maxLine)return v=!0,!0})),i.sel.contains(n.from,n.to)>-1&&jn(e),mr(i,n,s,Ms(e)),e.options.lineWrapping||(i.iter(w,h.line+n.text.length,function(Q){var fe=Bi(Q);fe>o.maxLineLength&&(o.maxLine=Q,o.maxLineLength=fe,o.maxLineChanged=!0,v=!1)}),v&&(e.curOp.updateMaxLine=!0)),pr(i,h.line),Hs(e,400);var k=n.text.length-(m.line-h.line)-1;n.full?er(e):h.line==m.line&&n.text.length==1&&!vl(e.doc,n)?Ki(e,h.line,"text"):er(e,h.line,m.line+1,k);var M=un(e,"changes"),B=un(e,"change");if(B||M){var te={from:h,to:m,text:n.text,removed:n.removed,origin:n.origin};B&&Dn(e,"change",e,te),M&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(te)}e.display.selForContextMenu=null}function Vs(e,n,s,i,o){var h;i||(i=s),We(i,s)<0&&(h=[i,s],s=h[0],i=h[1]),typeof n=="string"&&(n=e.splitLines(n)),Ys(e,{from:s,to:i,text:n,origin:o})}function Do(e,n,s,i){s<e.line?e.line+=i:n<e.line&&(e.line=n,e.ch=0)}function hi(e,n,s,i){for(var o=0;o<e.length;++o){var h=e[o],m=!0;if(h.ranges){h.copied||(h=e[o]=h.deepCopy(),h.copied=!0);for(var v=0;v<h.ranges.length;v++)Do(h.ranges[v].anchor,n,s,i),Do(h.ranges[v].head,n,s,i);continue}for(var w=0;w<h.changes.length;++w){var k=h.changes[w];if(s<k.from.line)k.from=de(k.from.line+i,k.from.ch),k.to=de(k.to.line+i,k.to.ch);else if(n<=k.to.line){m=!1;break}}m||(e.splice(0,o+1),o=0)}}function zo(e,n){var s=n.from.line,i=n.to.line,o=n.text.length-(i-s)-1;hi(e.done,s,i,o),hi(e.undone,s,i,o)}function Zi(e,n,s,i){var o=n,h=n;return typeof n=="number"?h=Qe(e,Xa(e,n)):o=_(n),o==null?null:(i(h,o)&&e.cm&&Ki(e.cm,o,s),h)}function fi(e){this.lines=e,this.parent=null;for(var n=0,s=0;s<e.length;++s)e[s].parent=this,n+=e[s].height;this.height=n}fi.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,n){for(var s=e,i=e+n;s<i;++s){var o=this.lines[s];this.height-=o.height,Yl(o),Dn(o,"delete")}this.lines.splice(e,n)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,n,s){this.height+=s,this.lines=this.lines.slice(0,e).concat(n).concat(this.lines.slice(e));for(var i=0;i<n.length;++i)n[i].parent=this},iterN:function(e,n,s){for(var i=e+n;e<i;++e)if(s(this.lines[e]))return!0}};function Js(e){this.children=e;for(var n=0,s=0,i=0;i<e.length;++i){var o=e[i];n+=o.chunkSize(),s+=o.height,o.parent=this}this.size=n,this.height=s,this.parent=null}Js.prototype={chunkSize:function(){return this.size},removeInner:function(e,n){this.size-=n;for(var s=0;s<this.children.length;++s){var i=this.children[s],o=i.chunkSize();if(e<o){var h=Math.min(n,o-e),m=i.height;if(i.removeInner(e,h),this.height-=m-i.height,o==h&&(this.children.splice(s--,1),i.parent=null),(n-=h)==0)break;e=0}else e-=o}if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof fi))){var v=[];this.collapse(v),this.children=[new fi(v)],this.children[0].parent=this}},collapse:function(e){for(var n=0;n<this.children.length;++n)this.children[n].collapse(e)},insertInner:function(e,n,s){this.size+=n.length,this.height+=s;for(var i=0;i<this.children.length;++i){var o=this.children[i],h=o.chunkSize();if(e<=h){if(o.insertInner(e,n,s),o.lines&&o.lines.length>50){for(var m=o.lines.length%25+25,v=m;v<o.lines.length;){var w=new fi(o.lines.slice(v,v+=25));o.height-=w.height,this.children.splice(++i,0,w),w.parent=this}o.lines=o.lines.slice(0,m),this.maybeSpill()}break}e-=h}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var n=e.children.splice(e.children.length-5,5),s=new Js(n);if(e.parent){e.size-=s.size,e.height-=s.height;var o=qe(e.parent.children,e);e.parent.children.splice(o+1,0,s)}else{var i=new Js(e.children);i.parent=e,e.children=[i,s],e=i}s.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,n,s){for(var i=0;i<this.children.length;++i){var o=this.children[i],h=o.chunkSize();if(e<h){var m=Math.min(n,h-e);if(o.iterN(e,m,s))return!0;if((n-=m)==0)break;e=0}else e-=h}}};var Pi=function(e,n,s){if(s)for(var i in s)s.hasOwnProperty(i)&&(this[i]=s[i]);this.doc=e,this.node=n};Pi.prototype.clear=function(){var e=this.doc.cm,n=this.line.widgets,s=this.line,i=_(s);if(!(i==null||!n)){for(var o=0;o<n.length;++o)n[o]==this&&n.splice(o--,1);n.length||(s.widgets=null);var h=Ui(this);On(s,Math.max(0,s.height-h)),e&&(Ln(e,function(){vu(e,s,-h),Ki(e,i,"widget")}),Dn(e,"lineWidgetCleared",e,this,i))}},Pi.prototype.changed=function(){var e=this,n=this.height,s=this.doc.cm,i=this.line;this.height=null;var o=Ui(this)-n;o&&(li(this.doc,i)||On(i,i.height+o),s&&Ln(s,function(){s.curOp.forceUpdate=!0,vu(s,i,o),Dn(s,"lineWidgetChanged",s,e,_(i))}))},ar(Pi);function vu(e,n,s){_n(n)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&ms(e,s)}function xu(e,n,s,i){var o=new Pi(e,s,i),h=e.cm;return h&&o.noHScroll&&(h.display.alignWidgets=!0),Zi(e,n,"widget",function(m){var v=m.widgets||(m.widgets=[]);if(o.insertAt==null?v.push(o):v.splice(Math.min(v.length,Math.max(0,o.insertAt)),0,o),o.line=m,h&&!li(e,m)){var w=_n(m)<e.scrollTop;On(m,m.height+Ui(o)),w&&ms(h,o.height),h.curOp.forceUpdate=!0}return!0}),h&&Dn(h,"lineWidgetAdded",h,o,typeof n=="number"?n:_(n)),o}var an=0,mi=function(e,n){this.lines=[],this.type=n,this.doc=e,this.id=++an};mi.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,n=e&&!e.curOp;if(n&&vs(e),un(this,"clear")){var s=this.find();s&&Dn(this,"clear",s.from,s.to)}for(var i=null,o=null,h=0;h<this.lines.length;++h){var m=this.lines[h],v=Is(m.markedSpans,this);e&&!this.collapsed?Ki(e,_(m),"text"):e&&(v.to!=null&&(o=_(m)),v.from!=null&&(i=_(m))),m.markedSpans=sa(m.markedSpans,v),v.from==null&&this.collapsed&&!li(this.doc,m)&&e&&On(m,_i(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var w=0;w<this.lines.length;++w){var k=Rt(this.lines[w]),M=Bi(k);M>e.display.maxLineLength&&(e.display.maxLine=k,e.display.maxLineLength=M,e.display.maxLineChanged=!0)}i!=null&&e&&this.collapsed&&er(e,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&zr(e.doc)),e&&Dn(e,"markerCleared",e,this,i,o),n&&Yr(e),this.parent&&this.parent.clear()}},mi.prototype.find=function(e,n){e==null&&this.type=="bookmark"&&(e=1);for(var s,i,o=0;o<this.lines.length;++o){var h=this.lines[o],m=Is(h.markedSpans,this);if(m.from!=null&&(s=de(n?h:_(h),m.from),e==-1))return s;if(m.to!=null&&(i=de(n?h:_(h),m.to),e==1))return i}return s&&{from:s,to:i}},mi.prototype.changed=function(){var e=this,n=this.find(-1,!0),s=this,i=this.doc.cm;!n||!i||Ln(i,function(){var o=n.line,h=_(n.line),m=rl(i,h);if(m&&(il(m),i.curOp.selectionChanged=i.curOp.forceUpdate=!0),i.curOp.updateMaxLine=!0,!li(s.doc,o)&&s.height!=null){var v=s.height;s.height=null;var w=Ui(s)-v;w&&On(o,o.height+w)}Dn(i,"markerChanged",i,e)})},mi.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(!n.maybeHiddenMarkers||qe(n.maybeHiddenMarkers,this)==-1)&&(n.maybeUnhiddenMarkers||(n.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},mi.prototype.detachLine=function(e){if(this.lines.splice(qe(this.lines,e),1),!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(n.maybeHiddenMarkers||(n.maybeHiddenMarkers=[])).push(this)}},ar(mi);function Cs(e,n,s,i,o){if(i&&i.shared)return _l(e,n,s,i,o);if(e.cm&&!e.cm.curOp)return dn(e.cm,Cs)(e,n,s,i,o);var h=new mi(e,o),m=We(n,s);if(i&&He(i,h,!1),m>0||m==0&&h.clearWhenEmpty!==!1)return h;if(h.replacedWith&&(h.collapsed=!0,h.widgetNode=X("span",[h.replacedWith],"CodeMirror-widget"),i.handleMouseEvents||h.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(h.widgetNode.insertLeft=!0)),h.collapsed){if(wi(e,n.line,n,s,h)||n.line!=s.line&&wi(e,s.line,n,s,h))throw new Error("Inserting collapsed marker partially overlapping an existing one");us()}h.addToHistory&&Na(e,{from:n,to:s,origin:"markText"},e.sel,NaN);var v=n.line,w=e.cm,k;if(e.iter(v,s.line+1,function(B){w&&h.collapsed&&!w.options.lineWrapping&&Rt(B)==w.display.maxLine&&(k=!0),h.collapsed&&v!=n.line&&On(B,0),Hi(B,new Mr(h,v==n.line?n.ch:null,v==s.line?s.ch:null),e.cm&&e.cm.curOp),++v}),h.collapsed&&e.iter(n.line,s.line+1,function(B){li(e,B)&&On(B,0)}),h.clearOnEnter&&it(h,"beforeCursorEnter",function(){return h.clear()}),h.readOnly&&(Rs(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),h.collapsed&&(h.id=++an,h.atomic=!0),w){if(k&&(w.curOp.updateMaxLine=!0),h.collapsed)er(w,n.line,s.line+1);else if(h.className||h.startStyle||h.endStyle||h.css||h.attributes||h.title)for(var M=n.line;M<=s.line;M++)Ki(w,M,"text");h.atomic&&zr(w.doc),Dn(w,"markerAdded",w,h)}return h}var Xs=function(e,n){this.markers=e,this.primary=n;for(var s=0;s<e.length;++s)e[s].parent=this};Xs.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();Dn(this,"clear")}},Xs.prototype.find=function(e,n){return this.primary.find(e,n)},ar(Xs);function _l(e,n,s,i,o){i=He(i),i.shared=!1;var h=[Cs(e,n,s,i,o)],m=h[0],v=i.widgetNode;return Pn(e,function(w){v&&(i.widgetNode=v.cloneNode(!0)),h.push(Cs(w,gt(w,n),gt(w,s),i,o));for(var k=0;k<w.linked.length;++k)if(w.linked[k].isParent)return;m=$e(h)}),new Xs(h,m)}function Cl(e){return e.findMarks(de(e.first,0),e.clipPos(de(e.lastLine())),function(n){return n.parent})}function Qs(e,n){for(var s=0;s<n.length;s++){var i=n[s],o=i.find(),h=e.clipPos(o.from),m=e.clipPos(o.to);if(We(h,m)){var v=Cs(e,h,m,i.primary,i.primary.type);i.markers.push(v),v.parent=i}}}function pn(e){for(var n=function(i){var o=e[i],h=[o.primary.doc];Pn(o.primary.doc,function(w){return h.push(w)});for(var m=0;m<o.markers.length;m++){var v=o.markers[m];qe(h,v.doc)==-1&&(v.parent=null,o.markers.splice(m--,1))}},s=0;s<e.length;s++)n(s)}var Hn=0,Mt=function(e,n,s,i,o){if(!(this instanceof Mt))return new Mt(e,n,s,i,o);s==null&&(s=0),Js.call(this,[new fi([new ki("",null)])]),this.first=s,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=s;var h=de(s,0);this.sel=zn(h),this.history=new Ca(null),this.id=++Hn,this.modeOption=n,this.lineSep=i,this.direction=o=="rtl"?"rtl":"ltr",this.extend=!1,typeof e=="string"&&(e=this.splitLines(e)),mr(this,{from:h,to:h,text:e}),Wn(this,zn(h),St)};Mt.prototype=me(Js.prototype,{constructor:Mt,iter:function(e,n,s){s?this.iterN(e-this.first,n-e,s):this.iterN(this.first,this.first+this.size,e)},insert:function(e,n){for(var s=0,i=0;i<n.length;++i)s+=n[i].height;this.insertInner(e-this.first,n,s)},remove:function(e,n){this.removeInner(e-this.first,n)},getValue:function(e){var n=cr(this,this.first,this.first+this.size);return e===!1?n:n.join(e||this.lineSeparator())},setValue:gn(function(e){var n=de(this.first,0),s=this.first+this.size-1;Ys(this,{from:n,to:de(s,Qe(this,s).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&ba(this.cm,0,0),Wn(this,zn(n),St)}),replaceRange:function(e,n,s,i){n=gt(this,n),s=s?gt(this,s):n,Vs(this,e,n,s,i)},getRange:function(e,n,s){var i=si(this,gt(this,e),gt(this,n));return s===!1?i:s===""?i.join(""):i.join(s||this.lineSeparator())},getLine:function(e){var n=this.getLineHandle(e);return n&&n.text},getLineHandle:function(e){if(he(this,e))return Qe(this,e)},getLineNumber:function(e){return _(e)},getLineHandleVisualStart:function(e){return typeof e=="number"&&(e=Qe(this,e)),Rt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return gt(this,e)},getCursor:function(e){var n=this.sel.primary(),s;return e==null||e=="head"?s=n.head:e=="anchor"?s=n.anchor:e=="end"||e=="to"||e===!1?s=n.to():s=n.from(),s},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:gn(function(e,n,s){Ks(this,gt(this,typeof e=="number"?de(e,n||0):e),null,s)}),setSelection:gn(function(e,n,s){Ks(this,gt(this,e),gt(this,n||e),s)}),extendSelection:gn(function(e,n,s){Ea(this,gt(this,e),n&&gt(this,n),s)}),extendSelections:gn(function(e,n){La(this,ra(this,e),n)}),extendSelectionsBy:gn(function(e,n){var s=ht(this.sel.ranges,e);La(this,ra(this,s),n)}),setSelections:gn(function(e,n,s){if(e.length){for(var i=[],o=0;o<e.length;o++)i[o]=new Pt(gt(this,e[o].anchor),gt(this,e[o].head||e[o].anchor));n==null&&(n=Math.min(e.length-1,this.sel.primIndex)),Wn(this,Pr(this.cm,i,n),s)}}),addSelection:gn(function(e,n,s){var i=this.sel.ranges.slice(0);i.push(new Pt(gt(this,e),gt(this,n||e))),Wn(this,Pr(this.cm,i,i.length-1),s)}),getSelection:function(e){for(var n=this.sel.ranges,s,i=0;i<n.length;i++){var o=si(this,n[i].from(),n[i].to());s=s?s.concat(o):o}return e===!1?s:s.join(e||this.lineSeparator())},getSelections:function(e){for(var n=[],s=this.sel.ranges,i=0;i<s.length;i++){var o=si(this,s[i].from(),s[i].to());e!==!1&&(o=o.join(e||this.lineSeparator())),n[i]=o}return n},replaceSelection:function(e,n,s){for(var i=[],o=0;o<this.sel.ranges.length;o++)i[o]=e;this.replaceSelections(i,n,s||"+input")},replaceSelections:gn(function(e,n,s){for(var i=[],o=this.sel,h=0;h<o.ranges.length;h++){var m=o.ranges[h];i[h]={from:m.from(),to:m.to(),text:this.splitLines(e[h]),origin:s}}for(var v=n&&n!="end"&&Us(this,i,n),w=i.length-1;w>=0;w--)Ys(this,i[w]);v?wl(this,v):this.cm&&zs(this.cm)}),undo:gn(function(){pi(this,"undo")}),redo:gn(function(){pi(this,"redo")}),undoSelection:gn(function(){pi(this,"undo",!0)}),redoSelection:gn(function(){pi(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,n=0,s=0,i=0;i<e.done.length;i++)e.done[i].ranges||++n;for(var o=0;o<e.undone.length;o++)e.undone[o].ranges||++s;return{undo:n,redo:s}},clearHistory:function(){var e=this;this.history=new Ca(this.history),Pn(this,function(n){return n.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:$s(this.history.done),undone:$s(this.history.undone)}},setHistory:function(e){var n=this.history=new Ca(this.history);n.done=$s(e.done.slice(0),null,!0),n.undone=$s(e.undone.slice(0),null,!0)},setGutterMarker:gn(function(e,n,s){return Zi(this,e,"gutter",function(i){var o=i.gutterMarkers||(i.gutterMarkers={});return o[n]=s,!s&&Ye(o)&&(i.gutterMarkers=null),!0})}),clearGutter:gn(function(e){var n=this;this.iter(function(s){s.gutterMarkers&&s.gutterMarkers[e]&&Zi(n,s,"gutter",function(){return s.gutterMarkers[e]=null,Ye(s.gutterMarkers)&&(s.gutterMarkers=null),!0})})}),lineInfo:function(e){var n;if(typeof e=="number"){if(!he(this,e)||(n=e,e=Qe(this,e),!e))return null}else if(n=_(e),n==null)return null;return{line:n,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:gn(function(e,n,s){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var o=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass";if(!i[o])i[o]=s;else{if(oe(s).test(i[o]))return!1;i[o]+=" "+s}return!0})}),removeLineClass:gn(function(e,n,s){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var o=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass",h=i[o];if(h)if(s==null)i[o]=null;else{var m=h.match(oe(s));if(!m)return!1;var v=m.index+m[0].length;i[o]=h.slice(0,m.index)+(!m.index||v==h.length?"":" ")+h.slice(v)||null}else return!1;return!0})}),addLineWidget:gn(function(e,n,s){return xu(this,e,n,s)}),removeLineWidget:function(e){e.clear()},markText:function(e,n,s){return Cs(this,gt(this,e),gt(this,n),s,s&&s.type||"range")},setBookmark:function(e,n){var s={replacedWith:n&&(n.nodeType==null?n.widget:n),insertLeft:n&&n.insertLeft,clearWhenEmpty:!1,shared:n&&n.shared,handleMouseEvents:n&&n.handleMouseEvents};return e=gt(this,e),Cs(this,e,e,s,"bookmark")},findMarksAt:function(e){e=gt(this,e);var n=[],s=Qe(this,e.line).markedSpans;if(s)for(var i=0;i<s.length;++i){var o=s[i];(o.from==null||o.from<=e.ch)&&(o.to==null||o.to>=e.ch)&&n.push(o.marker.parent||o.marker)}return n},findMarks:function(e,n,s){e=gt(this,e),n=gt(this,n);var i=[],o=e.line;return this.iter(e.line,n.line+1,function(h){var m=h.markedSpans;if(m)for(var v=0;v<m.length;v++){var w=m[v];!(w.to!=null&&o==e.line&&e.ch>=w.to||w.from==null&&o!=e.line||w.from!=null&&o==n.line&&w.from>=n.ch)&&(!s||s(w.marker))&&i.push(w.marker.parent||w.marker)}++o}),i},getAllMarks:function(){var e=[];return this.iter(function(n){var s=n.markedSpans;if(s)for(var i=0;i<s.length;++i)s[i].from!=null&&e.push(s[i].marker)}),e},posFromIndex:function(e){var n,s=this.first,i=this.lineSeparator().length;return this.iter(function(o){var h=o.text.length+i;if(h>e)return n=e,!0;e-=h,++s}),gt(this,de(s,n))},indexFromPos:function(e){e=gt(this,e);var n=e.ch;if(e.line<this.first||e.ch<0)return 0;var s=this.lineSeparator().length;return this.iter(this.first,e.line,function(i){n+=i.text.length+s}),n},copy:function(e){var n=new Mt(cr(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,n.sel=this.sel,n.extend=!1,e&&(n.history.undoDepth=this.history.undoDepth,n.setHistory(this.getHistory())),n},linkedDoc:function(e){e||(e={});var n=this.first,s=this.first+this.size;e.from!=null&&e.from>n&&(n=e.from),e.to!=null&&e.to<s&&(s=e.to);var i=new Mt(cr(this,n,s),e.mode||this.modeOption,n,this.lineSep,this.direction);return e.sharedHist&&(i.history=this.history),(this.linked||(this.linked=[])).push({doc:i,sharedHist:e.sharedHist}),i.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],Qs(i,Cl(this)),i},unlinkDoc:function(e){if(e instanceof Zt&&(e=e.doc),this.linked)for(var n=0;n<this.linked.length;++n){var s=this.linked[n];if(s.doc==e){this.linked.splice(n,1),e.unlinkDoc(this),pn(Cl(this));break}}if(e.history==this.history){var i=[e.id];Pn(e,function(o){return i.push(o.id)},!0),e.history=new Ca(null),e.history.done=$s(this.history.done,i),e.history.undone=$s(this.history.undone,i)}},iterLinkedDocs:function(e){Pn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):ur(e)},lineSeparator:function(){return this.lineSep||`
`},setDirection:gn(function(e){e!="rtl"&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(n){return n.order=null}),this.cm&&Cc(this.cm))})}),Mt.prototype.eachLine=Mt.prototype.iter;var Ra=0;function Ia(e){var n=this;if(Qn(n),!(Ot(n,e)||qi(n.display,e))){wn(e),S&&(Ra=+new Date);var s=hs(n,e,!0),i=e.dataTransfer.files;if(!(!s||n.isReadOnly()))if(i&&i.length&&window.FileReader&&window.File)for(var o=i.length,h=Array(o),m=0,v=function(){++m==o&&dn(n,function(){s=gt(n.doc,s);var Q={from:s,to:s,text:n.doc.splitLines(h.filter(function(fe){return fe!=null}).join(n.doc.lineSeparator())),origin:"paste"};Ys(n.doc,Q),wl(n.doc,zn(gt(n.doc,s),gt(n.doc,Fn(Q))))})()},w=function(Q,fe){if(n.options.allowDropFileTypes&&qe(n.options.allowDropFileTypes,Q.type)==-1){v();return}var ve=new FileReader;ve.onerror=function(){return v()},ve.onload=function(){var Ee=ve.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(Ee)){v();return}h[fe]=Ee,v()},ve.readAsText(Q)},k=0;k<i.length;k++)w(i[k],k);else{if(n.state.draggingText&&n.doc.sel.contains(s)>-1){n.state.draggingText(e),setTimeout(function(){return n.display.input.focus()},20);return}try{var M=e.dataTransfer.getData("Text");if(M){var B;if(n.state.draggingText&&!n.state.draggingText.copy&&(B=n.listSelections()),Oo(n.doc,zn(s,s)),B)for(var te=0;te<B.length;++te)Vs(n.doc,"",B[te].anchor,B[te].head,"drag");n.replaceSelection(M,"around","paste"),n.display.input.focus()}}catch{}}}}function Oa(e,n){if(S&&(!e.state.draggingText||+new Date-Ra<100)){lr(n);return}if(!(Ot(e,n)||qi(e.display,n))&&(n.dataTransfer.setData("Text",e.getSelection()),n.dataTransfer.effectAllowed="copyMove",n.dataTransfer.setDragImage&&!H)){var s=j("img",null,null,"position: fixed; left: 0; top: 0;");s.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",ne&&(s.width=s.height=1,e.display.wrapper.appendChild(s),s._top=s.offsetTop),n.dataTransfer.setDragImage(s,0,0),ne&&s.parentNode.removeChild(s)}}function Zd(e,n){var s=hs(e,n);if(s){var i=document.createDocumentFragment();ya(e,s,i),e.display.dragCursor||(e.display.dragCursor=j("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),ye(e.display.dragCursor,i)}}function Qn(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Tl(e){if(document.getElementsByClassName){for(var n=document.getElementsByClassName("CodeMirror"),s=[],i=0;i<n.length;i++){var o=n[i].CodeMirror;o&&s.push(o)}s.length&&s[0].operation(function(){for(var h=0;h<s.length;h++)e(s[h])})}}var Nl=!1;function bu(){Nl||(Ai(),Nl=!0)}function Ai(){var e;it(window,"resize",function(){e==null&&(e=setTimeout(function(){e=null,Tl(Jr)},100))}),it(window,"blur",function(){return Tl(Ut)})}function Jr(e){var n=e.display;n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.scrollbarsClipped=!1,e.setSize()}for(var Xr={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Zs=0;Zs<10;Zs++)Xr[Zs+48]=Xr[Zs+96]=String(Zs);for(var Fo=65;Fo<=90;Fo++)Xr[Fo]=String.fromCharCode(Fo);for(var Wo=1;Wo<=12;Wo++)Xr[Wo+111]=Xr[Wo+63235]="F"+Wo;var Ri={};Ri.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ri.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ri.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Ri.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ri.default=V?Ri.macDefault:Ri.pcDefault;function Ec(e){var n=e.split(/-(?!$)/);e=n[n.length-1];for(var s,i,o,h,m=0;m<n.length-1;m++){var v=n[m];if(/^(cmd|meta|m)$/i.test(v))h=!0;else if(/^a(lt)?$/i.test(v))s=!0;else if(/^(c|ctrl|control)$/i.test(v))i=!0;else if(/^s(hift)?$/i.test(v))o=!0;else throw new Error("Unrecognized modifier name: "+v)}return s&&(e="Alt-"+e),i&&(e="Ctrl-"+e),h&&(e="Cmd-"+e),o&&(e="Shift-"+e),e}function Lc(e){var n={};for(var s in e)if(e.hasOwnProperty(s)){var i=e[s];if(/^(name|fallthrough|(de|at)tach)$/.test(s))continue;if(i=="..."){delete e[s];continue}for(var o=ht(s.split(" "),Ec),h=0;h<o.length;h++){var m=void 0,v=void 0;h==o.length-1?(v=o.join(" "),m=i):(v=o.slice(0,h+1).join(" "),m="...");var w=n[v];if(!w)n[v]=m;else if(w!=m)throw new Error("Inconsistent bindings for "+v)}delete e[s]}for(var k in n)e[k]=n[k];return e}function eo(e,n,s,i){n=Ts(n);var o=n.call?n.call(e,i):n[e];if(o===!1)return"nothing";if(o==="...")return"multi";if(o!=null&&s(o))return"handled";if(n.fallthrough){if(Object.prototype.toString.call(n.fallthrough)!="[object Array]")return eo(e,n.fallthrough,s,i);for(var h=0;h<n.fallthrough.length;h++){var m=eo(e,n.fallthrough[h],s,i);if(m)return m}}}function wu(e){var n=typeof e=="string"?e:Xr[e.keyCode];return n=="Ctrl"||n=="Alt"||n=="Shift"||n=="Mod"}function ku(e,n,s){var i=e;return n.altKey&&i!="Alt"&&(e="Alt-"+e),(Ue?n.metaKey:n.ctrlKey)&&i!="Ctrl"&&(e="Ctrl-"+e),(Ue?n.ctrlKey:n.metaKey)&&i!="Mod"&&(e="Cmd-"+e),!s&&n.shiftKey&&i!="Shift"&&(e="Shift-"+e),e}function Su(e,n){if(ne&&e.keyCode==34&&e.char)return!1;var s=Xr[e.keyCode];return s==null||e.altGraphKey?!1:(e.keyCode==3&&e.code&&(s=e.code),ku(s,e,n))}function Ts(e){return typeof e=="string"?Ri[e]:e}function to(e,n){for(var s=e.doc.sel.ranges,i=[],o=0;o<s.length;o++){for(var h=n(s[o]);i.length&&We(h.from,$e(i).to)<=0;){var m=i.pop();if(We(m.from,h.from)<0){h.from=m.from;break}}i.push(h)}Ln(e,function(){for(var v=i.length-1;v>=0;v--)Vs(e.doc,"",i[v].from,i[v].to,"+delete");zs(e)})}function Ho(e,n,s){var i=fn(e.text,n+s,s);return i<0||i>e.text.length?null:i}function Bo(e,n,s){var i=Ho(e,n.ch,s);return i==null?null:new de(n.line,i,s<0?"after":"before")}function jl(e,n,s,i,o){if(e){n.doc.direction=="rtl"&&(o=-o);var h=xt(s,n.doc.direction);if(h){var m=o<0?$e(h):h[0],v=o<0==(m.level==1),w=v?"after":"before",k;if(m.level>0||n.doc.direction=="rtl"){var M=Si(n,s);k=o<0?s.text.length-1:0;var B=Lr(n,M,k).top;k=Jn(function(te){return Lr(n,M,te).top==B},o<0==(m.level==1)?m.from:m.to-1,k),w=="before"&&(k=Ho(s,k,1))}else k=o<0?m.to:m.from;return new de(i,k,w)}}return new de(i,o<0?s.text.length:0,o<0?"before":"after")}function _u(e,n,s,i){var o=xt(n,e.doc.direction);if(!o)return Bo(n,s,i);s.ch>=n.text.length?(s.ch=n.text.length,s.sticky="before"):s.ch<=0&&(s.ch=0,s.sticky="after");var h=or(o,s.ch,s.sticky),m=o[h];if(e.doc.direction=="ltr"&&m.level%2==0&&(i>0?m.to>s.ch:m.from<s.ch))return Bo(n,s,i);var v=function(Ne,De){return Ho(n,Ne instanceof de?Ne.ch:Ne,De)},w,k=function(Ne){return e.options.lineWrapping?(w=w||Si(e,n),uu(e,n,w,Ne)):{begin:0,end:n.text.length}},M=k(s.sticky=="before"?v(s,-1):s.ch);if(e.doc.direction=="rtl"||m.level==1){var B=m.level==1==i<0,te=v(s,B?1:-1);if(te!=null&&(B?te<=m.to&&te<=M.end:te>=m.from&&te>=M.begin)){var Q=B?"before":"after";return new de(s.line,te,Q)}}var fe=function(Ne,De,Me){for(var Ke=function(Nt,Bn){return Bn?new de(s.line,v(Nt,1),"before"):new de(s.line,Nt,"after")};Ne>=0&&Ne<o.length;Ne+=De){var lt=o[Ne],Xe=De>0==(lt.level!=1),kt=Xe?Me.begin:v(Me.end,-1);if(lt.from<=kt&&kt<lt.to||(kt=Xe?lt.from:v(lt.to,-1),Me.begin<=kt&&kt<Me.end))return Ke(kt,Xe)}},ve=fe(h+i,i,M);if(ve)return ve;var Ee=i>0?M.end:v(M.begin,-1);return Ee!=null&&!(i>0&&Ee==n.text.length)&&(ve=fe(i>0?0:o.length-1,i,k(Ee)),ve)?ve:null}var Uo={selectAll:Qi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),St)},killLine:function(e){return to(e,function(n){if(n.empty()){var s=Qe(e.doc,n.head.line).text.length;return n.head.ch==s&&n.head.line<e.lastLine()?{from:n.head,to:de(n.head.line+1,0)}:{from:n.head,to:de(n.head.line,s)}}else return{from:n.from(),to:n.to()}})},deleteLine:function(e){return to(e,function(n){return{from:de(n.from().line,0),to:gt(e.doc,de(n.to().line+1,0))}})},delLineLeft:function(e){return to(e,function(n){return{from:de(n.from().line,0),to:n.from()}})},delWrappedLineLeft:function(e){return to(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return{from:i,to:n.from()}})},delWrappedLineRight:function(e){return to(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div");return{from:n.from(),to:i}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(de(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(de(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(n){return Cu(e,n.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(n){return Tu(e,n.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(n){return Pc(e,n.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div")},Fe)},goLineLeft:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:0,top:s},"div")},Fe)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return i.ch<e.getLine(i.line).search(/\S/)?Tu(e,n.head):i},Fe)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("	")},insertSoftTab:function(e){for(var n=[],s=e.listSelections(),i=e.options.tabSize,o=0;o<s.length;o++){var h=s[o].from(),m=Be(e.getLine(h.line),h.ch,i);n.push($t(i-m%i))}e.replaceSelections(n)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=[],i=0;i<n.length;i++)if(n[i].empty()){var o=n[i].head,h=Qe(e.doc,o.line).text;if(h){if(o.ch==h.length&&(o=new de(o.line,o.ch-1)),o.ch>0)o=new de(o.line,o.ch+1),e.replaceRange(h.charAt(o.ch-1)+h.charAt(o.ch-2),de(o.line,o.ch-2),o,"+transpose");else if(o.line>e.doc.first){var m=Qe(e.doc,o.line-1).text;m&&(o=new de(o.line,1),e.replaceRange(h.charAt(0)+e.doc.lineSeparator()+m.charAt(m.length-1),de(o.line-1,m.length-1),o,"+transpose"))}}s.push(new Pt(o,o))}e.setSelections(s)})},newlineAndIndent:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=n.length-1;s>=0;s--)e.replaceRange(e.doc.lineSeparator(),n[s].anchor,n[s].head,"+input");n=e.listSelections();for(var i=0;i<n.length;i++)e.indentLine(n[i].from().line,null,!0);zs(e)})},openLine:function(e){return e.replaceSelection(`
`,"start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function Cu(e,n){var s=Qe(e.doc,n),i=Rt(s);return i!=s&&(n=_(i)),jl(!0,e,i,n,1)}function Pc(e,n){var s=Qe(e.doc,n),i=xo(s);return i!=s&&(n=_(i)),jl(!0,e,s,n,-1)}function Tu(e,n){var s=Cu(e,n.line),i=Qe(e.doc,s.line),o=xt(i,e.doc.direction);if(!o||o[0].level==0){var h=Math.max(s.ch,i.text.search(/\S/)),m=n.line==s.line&&n.ch<=h&&n.ch;return de(s.line,m?0:h,s.sticky)}return s}function qo(e,n,s){if(typeof n=="string"&&(n=Uo[n],!n))return!1;e.display.input.ensurePolled();var i=e.display.shift,o=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),s&&(e.display.shift=!1),o=n(e)!=Gt}finally{e.display.shift=i,e.state.suppressEdits=!1}return o}function Ac(e,n,s){for(var i=0;i<e.state.keyMaps.length;i++){var o=eo(n,e.state.keyMaps[i],s,e);if(o)return o}return e.options.extraKeys&&eo(n,e.options.extraKeys,s,e)||eo(n,e.options.keyMap,s,e)}var Rc=new tt;function $o(e,n,s,i){var o=e.state.keySeq;if(o){if(wu(n))return"handled";if(/\'$/.test(n)?e.state.keySeq=null:Rc.set(50,function(){e.state.keySeq==o&&(e.state.keySeq=null,e.display.input.reset())}),Ic(e,o+" "+n,s,i))return!0}return Ic(e,n,s,i)}function Ic(e,n,s,i){var o=Ac(e,n,i);return o=="multi"&&(e.state.keySeq=n),o=="handled"&&Dn(e,"keyHandled",e,n,s),(o=="handled"||o=="multi")&&(wn(s),Ds(e)),!!o}function Nu(e,n){var s=Su(n,!0);return s?n.shiftKey&&!e.state.keySeq?$o(e,"Shift-"+s,n,function(i){return qo(e,i,!0)})||$o(e,s,n,function(i){if(typeof i=="string"?/^go[A-Z]/.test(i):i.motion)return qo(e,i)}):$o(e,s,n,function(i){return qo(e,i)}):!1}function ep(e,n,s){return $o(e,"'"+s+"'",n,function(i){return qo(e,i,!0)})}var ju=null;function Eu(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&(n.curOp.focus=P(Ge(n)),!Ot(n,e))){S&&L<11&&e.keyCode==27&&(e.returnValue=!1);var s=e.keyCode;n.display.shift=s==16||e.shiftKey;var i=Nu(n,e);ne&&(ju=i?s:null,!i&&s==88&&!Ls&&(V?e.metaKey:e.ctrlKey)&&n.replaceSelection("",null,"cut")),x&&!V&&!i&&s==46&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),s==18&&!/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className)&&Oc(n)}}function Oc(e){var n=e.display.lineDiv;G(n,"CodeMirror-crosshair");function s(i){(i.keyCode==18||!i.altKey)&&(Ce(n,"CodeMirror-crosshair"),Jt(document,"keyup",s),Jt(document,"mouseover",s))}it(document,"keyup",s),it(document,"mouseover",s)}function Lu(e){e.keyCode==16&&(this.doc.sel.shift=!1),Ot(this,e)}function Ma(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&!(qi(n.display,e)||Ot(n,e)||e.ctrlKey&&!e.altKey||V&&e.metaKey)){var s=e.keyCode,i=e.charCode;if(ne&&s==ju){ju=null,wn(e);return}if(!(ne&&(!e.which||e.which<10)&&Nu(n,e))){var o=String.fromCharCode(i??s);o!="\b"&&(ep(n,e,o)||n.display.input.onKeyPress(e))}}}var tp=400,Pu=function(e,n,s){this.time=e,this.pos=n,this.button=s};Pu.prototype.compare=function(e,n,s){return this.time+tp>e&&We(n,this.pos)==0&&s==this.button};var Da,gr;function Au(e,n){var s=+new Date;return gr&&gr.compare(s,e,n)?(Da=gr=null,"triple"):Da&&Da.compare(s,e,n)?(gr=new Pu(s,e,n),Da=null,"double"):(Da=new Pu(s,e,n),gr=null,"single")}function za(e){var n=this,s=n.display;if(!(Ot(n,e)||s.activeTouch&&s.input.supportsTouch())){if(s.input.ensurePolled(),s.shift=e.shiftKey,qi(s,e)){R||(s.scroller.draggable=!1,setTimeout(function(){return s.scroller.draggable=!0},100));return}if(!El(n,e)){var i=hs(n,e),o=En(e),h=i?Au(i,o):"single";ke(n).focus(),o==1&&n.state.selectingText&&n.state.selectingText(e),!(i&&Mc(n,o,i,h,e))&&(o==1?i?zc(n,i,h,e):Br(e)==s.scroller&&wn(e):o==2?(i&&Ea(n.doc,i),setTimeout(function(){return s.input.focus()},20)):o==3&&(Le?n.display.input.onContextMenu(e):pl(n)))}}}function Mc(e,n,s,i,o){var h="Click";return i=="double"?h="Double"+h:i=="triple"&&(h="Triple"+h),h=(n==1?"Left":n==2?"Middle":"Right")+h,$o(e,ku(h,o),o,function(m){if(typeof m=="string"&&(m=Uo[m]),!m)return!1;var v=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),v=m(e,s)!=Gt}finally{e.state.suppressEdits=!1}return v})}function Dc(e,n,s){var i=e.getOption("configureMouse"),o=i?i(e,n,s):{};if(o.unit==null){var h=ge?s.shiftKey&&s.metaKey:s.altKey;o.unit=h?"rectangle":n=="single"?"char":n=="double"?"word":"line"}return(o.extend==null||e.doc.extend)&&(o.extend=e.doc.extend||s.shiftKey),o.addNew==null&&(o.addNew=V?s.metaKey:s.ctrlKey),o.moveOnDrag==null&&(o.moveOnDrag=!(V?s.altKey:s.ctrlKey)),o}function zc(e,n,s,i){S?setTimeout(Re(bc,e),0):e.curOp.focus=P(Ge(e));var o=Dc(e,s,i),h=e.doc.sel,m;e.options.dragDrop&&Nr&&!e.isReadOnly()&&s=="single"&&(m=h.contains(n))>-1&&(We((m=h.ranges[m]).from(),n)<0||n.xRel>0)&&(We(m.to(),n)>0||n.xRel<0)?Ru(e,i,n,o):Iu(e,i,n,o)}function Ru(e,n,s,i){var o=e.display,h=!1,m=dn(e,function(k){R&&(o.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:pl(e)),Jt(o.wrapper.ownerDocument,"mouseup",m),Jt(o.wrapper.ownerDocument,"mousemove",v),Jt(o.scroller,"dragstart",w),Jt(o.scroller,"drop",m),h||(wn(k),i.addNew||Ea(e.doc,s,null,null,i.extend),R&&!H||S&&L==9?setTimeout(function(){o.wrapper.ownerDocument.body.focus({preventScroll:!0}),o.input.focus()},20):o.input.focus())}),v=function(k){h=h||Math.abs(n.clientX-k.clientX)+Math.abs(n.clientY-k.clientY)>=10},w=function(){return h=!0};R&&(o.scroller.draggable=!0),e.state.draggingText=m,m.copy=!i.moveOnDrag,it(o.wrapper.ownerDocument,"mouseup",m),it(o.wrapper.ownerDocument,"mousemove",v),it(o.scroller,"dragstart",w),it(o.scroller,"drop",m),e.state.delayingBlurEvent=!0,setTimeout(function(){return o.input.focus()},20),o.scroller.dragDrop&&o.scroller.dragDrop()}function no(e,n,s){if(s=="char")return new Pt(n,n);if(s=="word")return e.findWordAt(n);if(s=="line")return new Pt(de(n.line,0),gt(e.doc,de(n.line+1,0)));var i=s(e,n);return new Pt(i.from,i.to)}function Iu(e,n,s,i){S&&pl(e);var o=e.display,h=e.doc;wn(n);var m,v,w=h.sel,k=w.ranges;if(i.addNew&&!i.extend?(v=h.sel.contains(s),v>-1?m=k[v]:m=new Pt(s,s)):(m=h.sel.primary(),v=h.sel.primIndex),i.unit=="rectangle")i.addNew||(m=new Pt(s,s)),s=hs(e,n,!0,!0),v=-1;else{var M=no(e,s,i.unit);i.extend?m=ks(m,M.anchor,M.head,i.extend):m=M}i.addNew?v==-1?(v=k.length,Wn(h,Pr(e,k.concat([m]),v),{scroll:!1,origin:"*mouse"})):k.length>1&&k[v].empty()&&i.unit=="char"&&!i.extend?(Wn(h,Pr(e,k.slice(0,v).concat(k.slice(v+1)),0),{scroll:!1,origin:"*mouse"}),w=h.sel):Io(h,v,m,vt):(v=0,Wn(h,new Yn([m],0),vt),w=h.sel);var B=s;function te(Me){if(We(B,Me)!=0)if(B=Me,i.unit=="rectangle"){for(var Ke=[],lt=e.options.tabSize,Xe=Be(Qe(h,s.line).text,s.ch,lt),kt=Be(Qe(h,Me.line).text,Me.ch,lt),Nt=Math.min(Xe,kt),Bn=Math.max(Xe,kt),rn=Math.min(s.line,Me.line),vr=Math.min(e.lastLine(),Math.max(s.line,Me.line));rn<=vr;rn++){var rr=Qe(h,rn).text,yn=rt(rr,Nt,lt);Nt==Bn?Ke.push(new Pt(de(rn,yn),de(rn,yn))):rr.length>yn&&Ke.push(new Pt(de(rn,yn),de(rn,rt(rr,Bn,lt))))}Ke.length||Ke.push(new Pt(s,s)),Wn(h,Pr(e,w.ranges.slice(0,v).concat(Ke),v),{origin:"*mouse",scroll:!1}),e.scrollIntoView(Me)}else{var xr=m,Nn=no(e,Me,i.unit),vn=xr.anchor,zt;We(Nn.anchor,vn)>0?(zt=Nn.head,vn=oi(xr.from(),Nn.anchor)):(zt=Nn.anchor,vn=Sn(xr.to(),Nn.head));var dt=w.ranges.slice(0);dt[v]=Ou(e,new Pt(gt(h,vn),zt)),Wn(h,Pr(e,dt,v),vt)}}var Q=o.wrapper.getBoundingClientRect(),fe=0;function ve(Me){var Ke=++fe,lt=hs(e,Me,!0,i.unit=="rectangle");if(lt)if(We(lt,B)!=0){e.curOp.focus=P(Ge(e)),te(lt);var Xe=fs(o,h);(lt.line>=Xe.to||lt.line<Xe.from)&&setTimeout(dn(e,function(){fe==Ke&&ve(Me)}),150)}else{var kt=Me.clientY<Q.top?-20:Me.clientY>Q.bottom?20:0;kt&&setTimeout(dn(e,function(){fe==Ke&&(o.scroller.scrollTop+=kt,ve(Me))}),50)}}function Ee(Me){e.state.selectingText=!1,fe=1/0,Me&&(wn(Me),o.input.focus()),Jt(o.wrapper.ownerDocument,"mousemove",Ne),Jt(o.wrapper.ownerDocument,"mouseup",De),h.history.lastSelOrigin=null}var Ne=dn(e,function(Me){Me.buttons===0||!En(Me)?Ee(Me):ve(Me)}),De=dn(e,Ee);e.state.selectingText=De,it(o.wrapper.ownerDocument,"mousemove",Ne),it(o.wrapper.ownerDocument,"mouseup",De)}function Ou(e,n){var s=n.anchor,i=n.head,o=Qe(e.doc,s.line);if(We(s,i)==0&&s.sticky==i.sticky)return n;var h=xt(o);if(!h)return n;var m=or(h,s.ch,s.sticky),v=h[m];if(v.from!=s.ch&&v.to!=s.ch)return n;var w=m+(v.from==s.ch==(v.level!=1)?0:1);if(w==0||w==h.length)return n;var k;if(i.line!=s.line)k=(i.line-s.line)*(e.doc.direction=="ltr"?1:-1)>0;else{var M=or(h,i.ch,i.sticky),B=M-m||(i.ch-s.ch)*(v.level==1?-1:1);M==w-1||M==w?k=B<0:k=B>0}var te=h[w+(k?-1:0)],Q=k==(te.level==1),fe=Q?te.from:te.to,ve=Q?"after":"before";return s.ch==fe&&s.sticky==ve?n:new Pt(new de(s.line,fe,ve),i)}function Fc(e,n,s,i){var o,h;if(n.touches)o=n.touches[0].clientX,h=n.touches[0].clientY;else try{o=n.clientX,h=n.clientY}catch{return!1}if(o>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;i&&wn(n);var m=e.display,v=m.lineDiv.getBoundingClientRect();if(h>v.bottom||!un(e,s))return In(n);h-=v.top-m.viewOffset;for(var w=0;w<e.display.gutterSpecs.length;++w){var k=m.gutters.childNodes[w];if(k&&k.getBoundingClientRect().right>=o){var M=W(e.doc,h),B=e.display.gutterSpecs[w];return It(e,s,e,M,B.className,n),In(n)}}}function El(e,n){return Fc(e,n,"gutterClick",!0)}function Mu(e,n){qi(e.display,n)||Wc(e,n)||Ot(e,n,"contextmenu")||Le||e.display.input.onContextMenu(n)}function Wc(e,n){return un(e,"gutterContextMenu")?Fc(e,n,"gutterContextMenu",!1):!1}function Du(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),wo(e)}var ro={toString:function(){return"CodeMirror.Init"}},Hc={},Zn={};function yr(e){var n=e.optionHandlers;function s(i,o,h,m){e.defaults[i]=o,h&&(n[i]=m?function(v,w,k){k!=ro&&h(v,w,k)}:h)}e.defineOption=s,e.Init=ro,s("value","",function(i,o){return i.setValue(o)},!0),s("mode",null,function(i,o){i.doc.modeOption=o,yl(i)},!0),s("indentUnit",2,yl,!0),s("indentWithTabs",!1),s("smartIndent",!0),s("tabSize",4,function(i){qs(i),wo(i),er(i)},!0),s("lineSeparator",null,function(i,o){if(i.doc.lineSep=o,!!o){var h=[],m=i.doc.first;i.doc.iter(function(w){for(var k=0;;){var M=w.text.indexOf(o,k);if(M==-1)break;k=M+o.length,h.push(de(m,M))}m++});for(var v=h.length-1;v>=0;v--)Vs(i.doc,o,h[v],de(h[v].line,h[v].ch+o.length))}}),s("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,function(i,o,h){i.state.specialChars=new RegExp(o.source+(o.test("	")?"":"|	"),"g"),h!=ro&&i.refresh()}),s("specialCharPlaceholder",Id,function(i){return i.refresh()},!0),s("electricChars",!0),s("inputStyle",K?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),s("spellcheck",!1,function(i,o){return i.getInputField().spellcheck=o},!0),s("autocorrect",!1,function(i,o){return i.getInputField().autocorrect=o},!0),s("autocapitalize",!1,function(i,o){return i.getInputField().autocapitalize=o},!0),s("rtlMoveVisually",!ue),s("wholeLineUpdateBefore",!0),s("theme","default",function(i){Du(i),Dr(i)},!0),s("keyMap","default",function(i,o,h){var m=Ts(o),v=h!=ro&&Ts(h);v&&v.detach&&v.detach(i,m),m.attach&&m.attach(i,v||null)}),s("extraKeys",null),s("configureMouse",null),s("lineWrapping",!1,Uc,!0),s("gutters",[],function(i,o){i.display.gutterSpecs=Lo(o,i.options.lineNumbers),Dr(i)},!0),s("fixedGutter",!0,function(i,o){i.display.gutters.style.left=o?_o(i.display)+"px":"0",i.refresh()},!0),s("coverGutterNextToScrollbar",!1,function(i){return Ws(i)},!0),s("scrollbarStyle","native",function(i){ml(i),Ws(i),i.display.scrollbars.setScrollTop(i.doc.scrollTop),i.display.scrollbars.setScrollLeft(i.doc.scrollLeft)},!0),s("lineNumbers",!1,function(i,o){i.display.gutterSpecs=Lo(i.options.gutters,o),Dr(i)},!0),s("firstLineNumber",1,Dr,!0),s("lineNumberFormatter",function(i){return i},Dr,!0),s("showCursorWhenSelecting",!1,Gr,!0),s("resetSelectionOnContextMenu",!0),s("lineWiseCopyCut",!0),s("pasteLinesPerSelection",!0),s("selectionsMayTouch",!1),s("readOnly",!1,function(i,o){o=="nocursor"&&(Ut(i),i.display.input.blur()),i.display.input.readOnlyChanged(o)}),s("screenReaderLabel",null,function(i,o){o=o===""?null:o,i.display.input.screenReaderLabelChanged(o)}),s("disableInput",!1,function(i,o){o||i.display.input.reset()},!0),s("dragDrop",!0,Bc),s("allowDropFileTypes",null),s("cursorBlinkRate",530),s("cursorScrollMargin",0),s("cursorHeight",1,Gr,!0),s("singleCursorHeightPerLine",!0,Gr,!0),s("workTime",100),s("workDelay",100),s("flattenSpans",!0,qs,!0),s("addModeClass",!1,qs,!0),s("pollInterval",100),s("undoDepth",200,function(i,o){return i.doc.history.undoDepth=o}),s("historyEventDelay",1250),s("viewportMargin",10,function(i){return i.refresh()},!0),s("maxHighlightLength",1e4,qs,!0),s("moveInputWithCursor",!0,function(i,o){o||i.display.input.resetPosition()}),s("tabindex",null,function(i,o){return i.display.input.getField().tabIndex=o||""}),s("autofocus",null),s("direction","ltr",function(i,o){return i.doc.setDirection(o)},!0),s("phrases",null)}function Bc(e,n,s){var i=s&&s!=ro;if(!n!=!i){var o=e.display.dragFunctions,h=n?it:Jt;h(e.display.scroller,"dragstart",o.start),h(e.display.scroller,"dragenter",o.enter),h(e.display.scroller,"dragover",o.over),h(e.display.scroller,"dragleave",o.leave),h(e.display.scroller,"drop",o.drop)}}function Uc(e){e.options.lineWrapping?(G(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Ce(e.display.wrapper,"CodeMirror-wrap"),aa(e)),ma(e),er(e),wo(e),setTimeout(function(){return Ws(e)},100)}function Zt(e,n){var s=this;if(!(this instanceof Zt))return new Zt(e,n);this.options=n=n?He(n):{},He(Hc,n,!1);var i=n.value;typeof i=="string"?i=new Mt(i,n.mode,null,n.lineSeparator,n.direction):n.mode&&(i.modeOption=n.mode),this.doc=i;var o=new Zt.inputStyles[n.inputStyle](this),h=this.display=new gl(e,i,o,n);h.wrapper.CodeMirror=this,Du(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),ml(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new tt,keySeq:null,specialChars:null},n.autofocus&&!K&&h.input.focus(),S&&L<11&&setTimeout(function(){return s.display.input.reset(!0)},20),qc(this),bu(),vs(this),this.curOp.forceUpdate=!0,nn(this,i),n.autofocus&&!K||this.hasFocus()?setTimeout(function(){s.hasFocus()&&!s.state.focused&&hl(s)},20):Ut(this);for(var m in Zn)Zn.hasOwnProperty(m)&&Zn[m](this,n[m],ro);fu(this),n.finishInit&&n.finishInit(this);for(var v=0;v<Ll.length;++v)Ll[v](this);Yr(this),R&&n.lineWrapping&&getComputedStyle(h.lineDiv).textRendering=="optimizelegibility"&&(h.lineDiv.style.textRendering="auto")}Zt.defaults=Hc,Zt.optionHandlers=Zn;function qc(e){var n=e.display;it(n.scroller,"mousedown",dn(e,za)),S&&L<11?it(n.scroller,"dblclick",dn(e,function(w){if(!Ot(e,w)){var k=hs(e,w);if(!(!k||El(e,w)||qi(e.display,w))){wn(w);var M=e.findWordAt(k);Ea(e.doc,M.anchor,M.head)}}})):it(n.scroller,"dblclick",function(w){return Ot(e,w)||wn(w)}),it(n.scroller,"contextmenu",function(w){return Mu(e,w)}),it(n.input.getField(),"contextmenu",function(w){n.scroller.contains(w.target)||Mu(e,w)});var s,i={end:0};function o(){n.activeTouch&&(s=setTimeout(function(){return n.activeTouch=null},1e3),i=n.activeTouch,i.end=+new Date)}function h(w){if(w.touches.length!=1)return!1;var k=w.touches[0];return k.radiusX<=1&&k.radiusY<=1}function m(w,k){if(k.left==null)return!0;var M=k.left-w.left,B=k.top-w.top;return M*M+B*B>400}it(n.scroller,"touchstart",function(w){if(!Ot(e,w)&&!h(w)&&!El(e,w)){n.input.ensurePolled(),clearTimeout(s);var k=+new Date;n.activeTouch={start:k,moved:!1,prev:k-i.end<=300?i:null},w.touches.length==1&&(n.activeTouch.left=w.touches[0].pageX,n.activeTouch.top=w.touches[0].pageY)}}),it(n.scroller,"touchmove",function(){n.activeTouch&&(n.activeTouch.moved=!0)}),it(n.scroller,"touchend",function(w){var k=n.activeTouch;if(k&&!qi(n,w)&&k.left!=null&&!k.moved&&new Date-k.start<300){var M=e.coordsChar(n.activeTouch,"page"),B;!k.prev||m(k,k.prev)?B=new Pt(M,M):!k.prev.prev||m(k,k.prev.prev)?B=e.findWordAt(M):B=new Pt(de(M.line,0),gt(e.doc,de(M.line+1,0))),e.setSelection(B.anchor,B.head),e.focus(),wn(w)}o()}),it(n.scroller,"touchcancel",o),it(n.scroller,"scroll",function(){n.scroller.clientHeight&&(gs(e,n.scroller.scrollTop),Yi(e,n.scroller.scrollLeft,!0),It(e,"scroll",e))}),it(n.scroller,"mousewheel",function(w){return Bs(e,w)}),it(n.scroller,"DOMMouseScroll",function(w){return Bs(e,w)}),it(n.wrapper,"scroll",function(){return n.wrapper.scrollTop=n.wrapper.scrollLeft=0}),n.dragFunctions={enter:function(w){Ot(e,w)||lr(w)},over:function(w){Ot(e,w)||(Zd(e,w),lr(w))},start:function(w){return Oa(e,w)},drop:dn(e,Ia),leave:function(w){Ot(e,w)||Qn(e)}};var v=n.input.getField();it(v,"keyup",function(w){return Lu.call(e,w)}),it(v,"keydown",dn(e,Eu)),it(v,"keypress",dn(e,Ma)),it(v,"focus",function(w){return hl(e,w)}),it(v,"blur",function(w){return Ut(e,w)})}var Ll=[];Zt.defineInitHook=function(e){return Ll.push(e)};function io(e,n,s,i){var o=e.doc,h;s==null&&(s="add"),s=="smart"&&(o.mode.indent?h=Et(e,n).state:s="prev");var m=e.options.tabSize,v=Qe(o,n),w=Be(v.text,null,m);v.stateAfter&&(v.stateAfter=null);var k=v.text.match(/^\s*/)[0],M;if(!i&&!/\S/.test(v.text))M=0,s="not";else if(s=="smart"&&(M=o.mode.indent(h,v.text.slice(k.length),v.text),M==Gt||M>150)){if(!i)return;s="prev"}s=="prev"?n>o.first?M=Be(Qe(o,n-1).text,null,m):M=0:s=="add"?M=w+e.options.indentUnit:s=="subtract"?M=w-e.options.indentUnit:typeof s=="number"&&(M=w+s),M=Math.max(0,M);var B="",te=0;if(e.options.indentWithTabs)for(var Q=Math.floor(M/m);Q;--Q)te+=m,B+="	";if(te<M&&(B+=$t(M-te)),B!=k)return Vs(o,B,de(n,0),de(n,k.length),"+input"),v.stateAfter=null,!0;for(var fe=0;fe<o.sel.ranges.length;fe++){var ve=o.sel.ranges[fe];if(ve.head.line==n&&ve.head.ch<k.length){var Ee=de(n,k.length);Io(o,fe,new Pt(Ee,Ee));break}}}var Qr=null;function Ko(e){Qr=e}function Pl(e,n,s,i,o){var h=e.doc;e.display.shift=!1,i||(i=h.sel);var m=+new Date-200,v=o=="paste"||e.state.pasteIncoming>m,w=ur(n),k=null;if(v&&i.ranges.length>1)if(Qr&&Qr.text.join(`
`)==n){if(i.ranges.length%Qr.text.length==0){k=[];for(var M=0;M<Qr.text.length;M++)k.push(h.splitLines(Qr.text[M]))}}else w.length==i.ranges.length&&e.options.pasteLinesPerSelection&&(k=ht(w,function(Ne){return[Ne]}));for(var B=e.curOp.updateInput,te=i.ranges.length-1;te>=0;te--){var Q=i.ranges[te],fe=Q.from(),ve=Q.to();Q.empty()&&(s&&s>0?fe=de(fe.line,fe.ch-s):e.state.overwrite&&!v?ve=de(ve.line,Math.min(Qe(h,ve.line).text.length,ve.ch+$e(w).length)):v&&Qr&&Qr.lineWise&&Qr.text.join(`
`)==w.join(`
`)&&(fe=ve=de(fe.line,0)));var Ee={from:fe,to:ve,text:k?k[te%k.length]:w,origin:o||(v?"paste":e.state.cutIncoming>m?"cut":"+input")};Ys(e.doc,Ee),Dn(e,"inputRead",e,Ee)}n&&!v&&Al(e,n),zs(e),e.curOp.updateInput<2&&(e.curOp.updateInput=B),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function zu(e,n){var s=e.clipboardData&&e.clipboardData.getData("Text");if(s)return e.preventDefault(),!n.isReadOnly()&&!n.options.disableInput&&n.hasFocus()&&Ln(n,function(){return Pl(n,s,0,null,"paste")}),!0}function Al(e,n){if(!(!e.options.electricChars||!e.options.smartIndent))for(var s=e.doc.sel,i=s.ranges.length-1;i>=0;i--){var o=s.ranges[i];if(!(o.head.ch>100||i&&s.ranges[i-1].head.line==o.head.line)){var h=e.getModeAt(o.head),m=!1;if(h.electricChars){for(var v=0;v<h.electricChars.length;v++)if(n.indexOf(h.electricChars.charAt(v))>-1){m=io(e,o.head.line,"smart");break}}else h.electricInput&&h.electricInput.test(Qe(e.doc,o.head.line).text.slice(0,o.head.ch))&&(m=io(e,o.head.line,"smart"));m&&Dn(e,"electricInput",e,o.head.line)}}}function Rl(e){for(var n=[],s=[],i=0;i<e.doc.sel.ranges.length;i++){var o=e.doc.sel.ranges[i].head.line,h={anchor:de(o,0),head:de(o+1,0)};s.push(h),n.push(e.getRange(h.anchor,h.head))}return{text:n,ranges:s}}function Il(e,n,s,i){e.setAttribute("autocorrect",s?"on":"off"),e.setAttribute("autocapitalize",i?"on":"off"),e.setAttribute("spellcheck",!!n)}function Ol(){var e=j("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),n=j("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return R?e.style.width="1000px":e.setAttribute("wrap","off"),U&&(e.style.border="1px solid black"),n}function Ml(e){var n=e.optionHandlers,s=e.helpers={};e.prototype={constructor:e,focus:function(){ke(this).focus(),this.display.input.focus()},setOption:function(i,o){var h=this.options,m=h[i];h[i]==o&&i!="mode"||(h[i]=o,n.hasOwnProperty(i)&&dn(this,n[i])(this,o,m),It(this,"optionChange",this,i))},getOption:function(i){return this.options[i]},getDoc:function(){return this.doc},addKeyMap:function(i,o){this.state.keyMaps[o?"push":"unshift"](Ts(i))},removeKeyMap:function(i){for(var o=this.state.keyMaps,h=0;h<o.length;++h)if(o[h]==i||o[h].name==i)return o.splice(h,1),!0},addOverlay:Tn(function(i,o){var h=i.token?i:e.getMode(this.options,i);if(h.startState)throw new Error("Overlays may not be stateful.");ie(this.state.overlays,{mode:h,modeSpec:i,opaque:o&&o.opaque,priority:o&&o.priority||0},function(m){return m.priority}),this.state.modeGen++,er(this)}),removeOverlay:Tn(function(i){for(var o=this.state.overlays,h=0;h<o.length;++h){var m=o[h].modeSpec;if(m==i||typeof i=="string"&&m.name==i){o.splice(h,1),this.state.modeGen++,er(this);return}}}),indentLine:Tn(function(i,o,h){typeof o!="string"&&typeof o!="number"&&(o==null?o=this.options.smartIndent?"smart":"prev":o=o?"add":"subtract"),he(this.doc,i)&&io(this,i,o,h)}),indentSelection:Tn(function(i){for(var o=this.doc.sel.ranges,h=-1,m=0;m<o.length;m++){var v=o[m];if(v.empty())v.head.line>h&&(io(this,v.head.line,i,!0),h=v.head.line,m==this.doc.sel.primIndex&&zs(this));else{var w=v.from(),k=v.to(),M=Math.max(h,w.line);h=Math.min(this.lastLine(),k.line-(k.ch?0:1))+1;for(var B=M;B<h;++B)io(this,B,i);var te=this.doc.sel.ranges;w.ch==0&&o.length==te.length&&te[m].from().ch>0&&Io(this.doc,m,new Pt(w,te[m].to()),St)}}}),getTokenAt:function(i,o){return ia(this,i,o)},getLineTokens:function(i,o){return ia(this,de(i),o,!0)},getTokenTypeAt:function(i){i=gt(this.doc,i);var o=as(this,Qe(this.doc,i.line)),h=0,m=(o.length-1)/2,v=i.ch,w;if(v==0)w=o[2];else for(;;){var k=h+m>>1;if((k?o[k*2-1]:0)>=v)m=k;else if(o[k*2+1]<v)h=k+1;else{w=o[k*2+2];break}}var M=w?w.indexOf("overlay "):-1;return M<0?w:M==0?null:w.slice(0,M-1)},getModeAt:function(i){var o=this.doc.mode;return o.innerMode?e.innerMode(o,this.getTokenAt(i).state).mode:o},getHelper:function(i,o){return this.getHelpers(i,o)[0]},getHelpers:function(i,o){var h=[];if(!s.hasOwnProperty(o))return h;var m=s[o],v=this.getModeAt(i);if(typeof v[o]=="string")m[v[o]]&&h.push(m[v[o]]);else if(v[o])for(var w=0;w<v[o].length;w++){var k=m[v[o][w]];k&&h.push(k)}else v.helperType&&m[v.helperType]?h.push(m[v.helperType]):m[v.name]&&h.push(m[v.name]);for(var M=0;M<m._global.length;M++){var B=m._global[M];B.pred(v,this)&&qe(h,B.val)==-1&&h.push(B.val)}return h},getStateAfter:function(i,o){var h=this.doc;return i=Xa(h,i??h.first+h.size-1),Et(this,i+1,o).state},cursorCoords:function(i,o){var h,m=this.doc.sel.primary();return i==null?h=m.head:typeof i=="object"?h=gt(this.doc,i):h=i?m.from():m.to(),Cn(this,h,o||"page")},charCoords:function(i,o){return ol(this,gt(this.doc,i),o||"page")},coordsChar:function(i,o){return i=vc(this,i,o||"page"),ll(this,i.left,i.top)},lineAtHeight:function(i,o){return i=vc(this,{top:i,left:0},o||"page").top,W(this.doc,i+this.display.viewOffset)},heightAtLine:function(i,o,h){var m=!1,v;if(typeof i=="number"){var w=this.doc.first+this.doc.size-1;i<this.doc.first?i=this.doc.first:i>w&&(i=w,m=!0),v=Qe(this.doc,i)}else v=i;return sl(this,v,{top:0,left:0},o||"page",h||m).top+(m?this.doc.height-_n(v):0)},defaultTextHeight:function(){return _i(this.display)},defaultCharWidth:function(){return ps(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(i,o,h,m,v){var w=this.display;i=Cn(this,gt(this.doc,i));var k=i.bottom,M=i.left;if(o.style.position="absolute",o.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(o),w.sizer.appendChild(o),m=="over")k=i.top;else if(m=="above"||m=="near"){var B=Math.max(w.wrapper.clientHeight,this.doc.height),te=Math.max(w.sizer.clientWidth,w.lineSpace.clientWidth);(m=="above"||i.bottom+o.offsetHeight>B)&&i.top>o.offsetHeight?k=i.top-o.offsetHeight:i.bottom+o.offsetHeight<=B&&(k=i.bottom),M+o.offsetWidth>te&&(M=te-o.offsetWidth)}o.style.top=k+"px",o.style.left=o.style.right="",v=="right"?(M=w.sizer.clientWidth-o.offsetWidth,o.style.right="0px"):(v=="left"?M=0:v=="middle"&&(M=(w.sizer.clientWidth-o.offsetWidth)/2),o.style.left=M+"px"),h&&xa(this,{left:M,top:k,right:M+o.offsetWidth,bottom:k+o.offsetHeight})},triggerOnKeyDown:Tn(Eu),triggerOnKeyPress:Tn(Ma),triggerOnKeyUp:Lu,triggerOnMouseDown:Tn(za),execCommand:function(i){if(Uo.hasOwnProperty(i))return Uo[i].call(null,this)},triggerElectric:Tn(function(i){Al(this,i)}),findPosH:function(i,o,h,m){var v=1;o<0&&(v=-1,o=-o);for(var w=gt(this.doc,i),k=0;k<o&&(w=Fu(this.doc,w,v,h,m),!w.hitSide);++k);return w},moveH:Tn(function(i,o){var h=this;this.extendSelectionsBy(function(m){return h.display.shift||h.doc.extend||m.empty()?Fu(h.doc,m.head,i,o,h.options.rtlMoveVisually):i<0?m.from():m.to()},Fe)}),deleteH:Tn(function(i,o){var h=this.doc.sel,m=this.doc;h.somethingSelected()?m.replaceSelection("",null,"+delete"):to(this,function(v){var w=Fu(m,v.head,i,o,!1);return i<0?{from:w,to:v.head}:{from:v.head,to:w}})}),findPosV:function(i,o,h,m){var v=1,w=m;o<0&&(v=-1,o=-o);for(var k=gt(this.doc,i),M=0;M<o;++M){var B=Cn(this,k,"div");if(w==null?w=B.left:B.left=w,k=Wu(this,B,v,h),k.hitSide)break}return k},moveV:Tn(function(i,o){var h=this,m=this.doc,v=[],w=!this.display.shift&&!m.extend&&m.sel.somethingSelected();if(m.extendSelectionsBy(function(M){if(w)return i<0?M.from():M.to();var B=Cn(h,M.head,"div");M.goalColumn!=null&&(B.left=M.goalColumn),v.push(B.left);var te=Wu(h,B,i,o);return o=="page"&&M==m.sel.primary()&&ms(h,ol(h,te,"div").top-B.top),te},Fe),v.length)for(var k=0;k<m.sel.ranges.length;k++)m.sel.ranges[k].goalColumn=v[k]}),findWordAt:function(i){var o=this.doc,h=Qe(o,i.line).text,m=i.ch,v=i.ch;if(h){var w=this.getHelper(i,"wordChars");(i.sticky=="before"||v==h.length)&&m?--m:++v;for(var k=h.charAt(m),M=at(k,w)?function(B){return at(B,w)}:/\s/.test(k)?function(B){return/\s/.test(B)}:function(B){return!/\s/.test(B)&&!at(B)};m>0&&M(h.charAt(m-1));)--m;for(;v<h.length&&M(h.charAt(v));)++v}return new Pt(de(i.line,m),de(i.line,v))},toggleOverwrite:function(i){i!=null&&i==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?G(this.display.cursorDiv,"CodeMirror-overwrite"):Ce(this.display.cursorDiv,"CodeMirror-overwrite"),It(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==P(Ge(this))},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:Tn(function(i,o){ba(this,i,o)}),getScrollInfo:function(){var i=this.display.scroller;return{left:i.scrollLeft,top:i.scrollTop,height:i.scrollHeight-ui(this)-this.display.barHeight,width:i.scrollWidth-ui(this)-this.display.barWidth,clientHeight:ds(this),clientWidth:cs(this)}},scrollIntoView:Tn(function(i,o){i==null?(i={from:this.doc.sel.primary().head,to:null},o==null&&(o=this.options.cursorScrollMargin)):typeof i=="number"?i={from:de(i,0),to:null}:i.from==null&&(i={from:i,to:null}),i.to||(i.to=i.from),i.margin=o||0,i.from.line!=null?Jd(this,i):ka(this,i.from,i.to,i.margin)}),setSize:Tn(function(i,o){var h=this,m=function(w){return typeof w=="number"||/^\d+$/.test(String(w))?w+"px":w};i!=null&&(this.display.wrapper.style.width=m(i)),o!=null&&(this.display.wrapper.style.height=m(o)),this.options.lineWrapping&&su(this);var v=this.display.viewFrom;this.doc.iter(v,this.display.viewTo,function(w){if(w.widgets){for(var k=0;k<w.widgets.length;k++)if(w.widgets[k].noHScroll){Ki(h,v,"widget");break}}++v}),this.curOp.forceUpdate=!0,It(this,"refresh",this)}),operation:function(i){return Ln(this,i)},startOperation:function(){return vs(this)},endOperation:function(){return Yr(this)},refresh:Tn(function(){var i=this.display.cachedTextHeight;er(this),this.curOp.forceUpdate=!0,wo(this),ba(this,this.doc.scrollLeft,this.doc.scrollTop),tr(this.display),(i==null||Math.abs(i-_i(this.display))>.5||this.options.lineWrapping)&&ma(this),It(this,"refresh",this)}),swapDoc:Tn(function(i){var o=this.doc;return o.cm=null,this.state.selectingText&&this.state.selectingText(),nn(this,i),wo(this),this.display.input.reset(),ba(this,i.scrollLeft,i.scrollTop),this.curOp.forceScroll=!0,Dn(this,"swapDoc",this,o),o}),phrase:function(i){var o=this.options.phrases;return o&&Object.prototype.hasOwnProperty.call(o,i)?o[i]:i},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},ar(e),e.registerHelper=function(i,o,h){s.hasOwnProperty(i)||(s[i]=e[i]={_global:[]}),s[i][o]=h},e.registerGlobalHelper=function(i,o,h,m){e.registerHelper(i,o,m),s[i]._global.push({pred:h,val:m})}}function Fu(e,n,s,i,o){var h=n,m=s,v=Qe(e,n.line),w=o&&e.direction=="rtl"?-s:s;function k(){var De=n.line+w;return De<e.first||De>=e.first+e.size?!1:(n=new de(De,n.ch,n.sticky),v=Qe(e,De))}function M(De){var Me;if(i=="codepoint"){var Ke=v.text.charCodeAt(n.ch+(s>0?0:-1));if(isNaN(Ke))Me=null;else{var lt=s>0?Ke>=55296&&Ke<56320:Ke>=56320&&Ke<57343;Me=new de(n.line,Math.max(0,Math.min(v.text.length,n.ch+s*(lt?2:1))),-s)}}else o?Me=_u(e.cm,v,n,s):Me=Bo(v,n,s);if(Me==null)if(!De&&k())n=jl(o,e.cm,v,n.line,w);else return!1;else n=Me;return!0}if(i=="char"||i=="codepoint")M();else if(i=="column")M(!0);else if(i=="word"||i=="group")for(var B=null,te=i=="group",Q=e.cm&&e.cm.getHelper(n,"wordChars"),fe=!0;!(s<0&&!M(!fe));fe=!1){var ve=v.text.charAt(n.ch)||`
`,Ee=at(ve,Q)?"w":te&&ve==`
`?"n":!te||/\s/.test(ve)?null:"p";if(te&&!fe&&!Ee&&(Ee="s"),B&&B!=Ee){s<0&&(s=1,M(),n.sticky="after");break}if(Ee&&(B=Ee),s>0&&!M(!fe))break}var Ne=Pa(e,n,h,m,!0);return Tt(h,Ne)&&(Ne.hitSide=!0),Ne}function Wu(e,n,s,i){var o=e.doc,h=n.left,m;if(i=="page"){var v=Math.min(e.display.wrapper.clientHeight,ke(e).innerHeight||o(e).documentElement.clientHeight),w=Math.max(v-.5*_i(e.display),3);m=(s>0?n.bottom:n.top)+s*w}else i=="line"&&(m=s>0?n.bottom+3:n.top-3);for(var k;k=ll(e,h,m),!!k.outside;){if(s<0?m<=0:m>=o.height){k.hitSide=!0;break}m+=s*5}return k}var Dt=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new tt,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};Dt.prototype.init=function(e){var n=this,s=this,i=s.cm,o=s.div=e.lineDiv;o.contentEditable=!0,Il(o,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize);function h(v){for(var w=v.target;w;w=w.parentNode){if(w==o)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(w.className))break}return!1}it(o,"paste",function(v){!h(v)||Ot(i,v)||zu(v,i)||L<=11&&setTimeout(dn(i,function(){return n.updateFromDOM()}),20)}),it(o,"compositionstart",function(v){n.composing={data:v.data,done:!1}}),it(o,"compositionupdate",function(v){n.composing||(n.composing={data:v.data,done:!1})}),it(o,"compositionend",function(v){n.composing&&(v.data!=n.composing.data&&n.readFromDOMSoon(),n.composing.done=!0)}),it(o,"touchstart",function(){return s.forceCompositionEnd()}),it(o,"input",function(){n.composing||n.readFromDOMSoon()});function m(v){if(!(!h(v)||Ot(i,v))){if(i.somethingSelected())Ko({lineWise:!1,text:i.getSelections()}),v.type=="cut"&&i.replaceSelection("",null,"cut");else if(i.options.lineWiseCopyCut){var w=Rl(i);Ko({lineWise:!0,text:w.text}),v.type=="cut"&&i.operation(function(){i.setSelections(w.ranges,0,St),i.replaceSelection("",null,"cut")})}else return;if(v.clipboardData){v.clipboardData.clearData();var k=Qr.text.join(`
`);if(v.clipboardData.setData("Text",k),v.clipboardData.getData("Text")==k){v.preventDefault();return}}var M=Ol(),B=M.firstChild;Il(B),i.display.lineSpace.insertBefore(M,i.display.lineSpace.firstChild),B.value=Qr.text.join(`
`);var te=P(Ve(o));re(B),setTimeout(function(){i.display.lineSpace.removeChild(M),te.focus(),te==o&&s.showPrimarySelection()},50)}}it(o,"copy",m),it(o,"cut",m)},Dt.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Dt.prototype.prepareSelection=function(){var e=cl(this.cm,!1);return e.focus=P(Ve(this.div))==this.div,e},Dt.prototype.showSelection=function(e,n){!e||!this.cm.display.view.length||((e.focus||n)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Dt.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Dt.prototype.showPrimarySelection=function(){var e=this.getSelection(),n=this.cm,s=n.doc.sel.primary(),i=s.from(),o=s.to();if(n.display.viewTo==n.display.viewFrom||i.line>=n.display.viewTo||o.line<n.display.viewFrom){e.removeAllRanges();return}var h=Fa(n,e.anchorNode,e.anchorOffset),m=Fa(n,e.focusNode,e.focusOffset);if(!(h&&!h.bad&&m&&!m.bad&&We(oi(h,m),i)==0&&We(Sn(h,m),o)==0)){var v=n.display.view,w=i.line>=n.display.viewFrom&&Hu(n,i)||{node:v[0].measure.map[2],offset:0},k=o.line<n.display.viewTo&&Hu(n,o);if(!k){var M=v[v.length-1].measure,B=M.maps?M.maps[M.maps.length-1]:M.map;k={node:B[B.length-1],offset:B[B.length-2]-B[B.length-3]}}if(!w||!k){e.removeAllRanges();return}var te=e.rangeCount&&e.getRangeAt(0),Q;try{Q=q(w.node,w.offset,k.offset,k.node)}catch{}Q&&(!x&&n.state.focused?(e.collapse(w.node,w.offset),Q.collapsed||(e.removeAllRanges(),e.addRange(Q))):(e.removeAllRanges(),e.addRange(Q)),te&&e.anchorNode==null?e.addRange(te):x&&this.startGracePeriod()),this.rememberSelection()}},Dt.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Dt.prototype.showMultipleSelections=function(e){ye(this.cm.display.cursorDiv,e.cursors),ye(this.cm.display.selectionDiv,e.selection)},Dt.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Dt.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var n=e.getRangeAt(0).commonAncestorContainer;return T(this.div,n)},Dt.prototype.focus=function(){this.cm.options.readOnly!="nocursor"&&((!this.selectionInEditor()||P(Ve(this.div))!=this.div)&&this.showSelection(this.prepareSelection(),!0),this.div.focus())},Dt.prototype.blur=function(){this.div.blur()},Dt.prototype.getField=function(){return this.div},Dt.prototype.supportsTouch=function(){return!0},Dt.prototype.receivedFocus=function(){var e=this,n=this;this.selectionInEditor()?setTimeout(function(){return e.pollSelection()},20):Ln(this.cm,function(){return n.cm.curOp.selectionChanged=!0});function s(){n.cm.state.focused&&(n.pollSelection(),n.polling.set(n.cm.options.pollInterval,s))}this.polling.set(this.cm.options.pollInterval,s)},Dt.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Dt.prototype.pollSelection=function(){if(!(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged())){var e=this.getSelection(),n=this.cm;if(F&&A&&this.cm.display.gutterSpecs.length&&Dl(e.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();return}if(!this.composing){this.rememberSelection();var s=Fa(n,e.anchorNode,e.anchorOffset),i=Fa(n,e.focusNode,e.focusOffset);s&&i&&Ln(n,function(){Wn(n.doc,zn(s,i),St),(s.bad||i.bad)&&(n.curOp.selectionChanged=!0)})}}},Dt.prototype.pollContent=function(){this.readDOMTimeout!=null&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e=this.cm,n=e.display,s=e.doc.sel.primary(),i=s.from(),o=s.to();if(i.ch==0&&i.line>e.firstLine()&&(i=de(i.line-1,Qe(e.doc,i.line-1).length)),o.ch==Qe(e.doc,o.line).text.length&&o.line<e.lastLine()&&(o=de(o.line+1,0)),i.line<n.viewFrom||o.line>n.viewTo-1)return!1;var h,m,v;i.line==n.viewFrom||(h=Ci(e,i.line))==0?(m=_(n.view[0].line),v=n.view[0].node):(m=_(n.view[h].line),v=n.view[h-1].node.nextSibling);var w=Ci(e,o.line),k,M;if(w==n.view.length-1?(k=n.viewTo-1,M=n.lineDiv.lastChild):(k=_(n.view[w+1].line)-1,M=n.view[w+1].node.previousSibling),!v)return!1;for(var B=e.doc.splitLines(np(e,v,M,m,k)),te=si(e.doc,de(m,0),de(k,Qe(e.doc,k).text.length));B.length>1&&te.length>1;)if($e(B)==$e(te))B.pop(),te.pop(),k--;else if(B[0]==te[0])B.shift(),te.shift(),m++;else break;for(var Q=0,fe=0,ve=B[0],Ee=te[0],Ne=Math.min(ve.length,Ee.length);Q<Ne&&ve.charCodeAt(Q)==Ee.charCodeAt(Q);)++Q;for(var De=$e(B),Me=$e(te),Ke=Math.min(De.length-(B.length==1?Q:0),Me.length-(te.length==1?Q:0));fe<Ke&&De.charCodeAt(De.length-fe-1)==Me.charCodeAt(Me.length-fe-1);)++fe;if(B.length==1&&te.length==1&&m==i.line)for(;Q&&Q>i.ch&&De.charCodeAt(De.length-fe-1)==Me.charCodeAt(Me.length-fe-1);)Q--,fe++;B[B.length-1]=De.slice(0,De.length-fe).replace(/^\u200b+/,""),B[0]=B[0].slice(Q).replace(/\u200b+$/,"");var lt=de(m,Q),Xe=de(k,te.length?$e(te).length-fe:0);if(B.length>1||B[0]||We(lt,Xe))return Vs(e.doc,B,lt,Xe,"+input"),!0},Dt.prototype.ensurePolled=function(){this.forceCompositionEnd()},Dt.prototype.reset=function(){this.forceCompositionEnd()},Dt.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Dt.prototype.readFromDOMSoon=function(){var e=this;this.readDOMTimeout==null&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing)if(e.composing.done)e.composing=null;else return;e.updateFromDOM()},80))},Dt.prototype.updateFromDOM=function(){var e=this;(this.cm.isReadOnly()||!this.pollContent())&&Ln(this.cm,function(){return er(e.cm)})},Dt.prototype.setUneditable=function(e){e.contentEditable="false"},Dt.prototype.onKeyPress=function(e){e.charCode==0||this.composing||(e.preventDefault(),this.cm.isReadOnly()||dn(this.cm,Pl)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0))},Dt.prototype.readOnlyChanged=function(e){this.div.contentEditable=String(e!="nocursor")},Dt.prototype.onContextMenu=function(){},Dt.prototype.resetPosition=function(){},Dt.prototype.needsContentAttribute=!0;function Hu(e,n){var s=rl(e,n.line);if(!s||s.hidden)return null;var i=Qe(e.doc,n.line),o=fc(s,i,n.line),h=xt(i,e.doc.direction),m="left";if(h){var v=or(h,n.ch);m=v%2?"right":"left"}var w=ha(o.map,n.ch,m);return w.offset=w.collapse=="right"?w.end:w.start,w}function Dl(e){for(var n=e;n;n=n.parentNode)if(/CodeMirror-gutter-wrapper/.test(n.className))return!0;return!1}function Ar(e,n){return n&&(e.bad=!0),e}function np(e,n,s,i,o){var h="",m=!1,v=e.doc.lineSeparator(),w=!1;function k(Q){return function(fe){return fe.id==Q}}function M(){m&&(h+=v,w&&(h+=v),m=w=!1)}function B(Q){Q&&(M(),h+=Q)}function te(Q){if(Q.nodeType==1){var fe=Q.getAttribute("cm-text");if(fe){B(fe);return}var ve=Q.getAttribute("cm-marker"),Ee;if(ve){var Ne=e.findMarks(de(i,0),de(o+1,0),k(+ve));Ne.length&&(Ee=Ne[0].find(0))&&B(si(e.doc,Ee.from,Ee.to).join(v));return}if(Q.getAttribute("contenteditable")=="false")return;var De=/^(pre|div|p|li|table|br)$/i.test(Q.nodeName);if(!/^br$/i.test(Q.nodeName)&&Q.textContent.length==0)return;De&&M();for(var Me=0;Me<Q.childNodes.length;Me++)te(Q.childNodes[Me]);/^(pre|p)$/i.test(Q.nodeName)&&(w=!0),De&&(m=!0)}else Q.nodeType==3&&B(Q.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;te(n),n!=s;)n=n.nextSibling,w=!1;return h}function Fa(e,n,s){var i;if(n==e.display.lineDiv){if(i=e.display.lineDiv.childNodes[s],!i)return Ar(e.clipPos(de(e.display.viewTo-1)),!0);n=null,s=0}else for(i=n;;i=i.parentNode){if(!i||i==e.display.lineDiv)return null;if(i.parentNode&&i.parentNode==e.display.lineDiv)break}for(var o=0;o<e.display.view.length;o++){var h=e.display.view[o];if(h.node==i)return Bu(h,n,s)}}function Bu(e,n,s){var i=e.text.firstChild,o=!1;if(!n||!T(i,n))return Ar(de(_(e.line),0),!0);if(n==i&&(o=!0,n=i.childNodes[s],s=0,!n)){var h=e.rest?$e(e.rest):e.line;return Ar(de(_(h),h.text.length),o)}var m=n.nodeType==3?n:null,v=n;for(!m&&n.childNodes.length==1&&n.firstChild.nodeType==3&&(m=n.firstChild,s&&(s=m.nodeValue.length));v.parentNode!=i;)v=v.parentNode;var w=e.measure,k=w.maps;function M(Ee,Ne,De){for(var Me=-1;Me<(k?k.length:0);Me++)for(var Ke=Me<0?w.map:k[Me],lt=0;lt<Ke.length;lt+=3){var Xe=Ke[lt+2];if(Xe==Ee||Xe==Ne){var kt=_(Me<0?e.line:e.rest[Me]),Nt=Ke[lt]+De;return(De<0||Xe!=Ee)&&(Nt=Ke[lt+(De?1:0)]),de(kt,Nt)}}}var B=M(m,v,s);if(B)return Ar(B,o);for(var te=v.nextSibling,Q=m?m.nodeValue.length-s:0;te;te=te.nextSibling){if(B=M(te,te.firstChild,0),B)return Ar(de(B.line,B.ch-Q),o);Q+=te.textContent.length}for(var fe=v.previousSibling,ve=s;fe;fe=fe.previousSibling){if(B=M(fe,fe.firstChild,-1),B)return Ar(de(B.line,B.ch+ve),o);ve+=fe.textContent.length}}var hn=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new tt,this.hasSelection=!1,this.composing=null,this.resetting=!1};hn.prototype.init=function(e){var n=this,s=this,i=this.cm;this.createField(e);var o=this.textarea;e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),U&&(o.style.width="0px"),it(o,"input",function(){S&&L>=9&&n.hasSelection&&(n.hasSelection=null),s.poll()}),it(o,"paste",function(m){Ot(i,m)||zu(m,i)||(i.state.pasteIncoming=+new Date,s.fastPoll())});function h(m){if(!Ot(i,m)){if(i.somethingSelected())Ko({lineWise:!1,text:i.getSelections()});else if(i.options.lineWiseCopyCut){var v=Rl(i);Ko({lineWise:!0,text:v.text}),m.type=="cut"?i.setSelections(v.ranges,null,St):(s.prevInput="",o.value=v.text.join(`
`),re(o))}else return;m.type=="cut"&&(i.state.cutIncoming=+new Date)}}it(o,"cut",h),it(o,"copy",h),it(e.scroller,"paste",function(m){if(!(qi(e,m)||Ot(i,m))){if(!o.dispatchEvent){i.state.pasteIncoming=+new Date,s.focus();return}var v=new Event("paste");v.clipboardData=m.clipboardData,o.dispatchEvent(v)}}),it(e.lineSpace,"selectstart",function(m){qi(e,m)||wn(m)}),it(o,"compositionstart",function(){var m=i.getCursor("from");s.composing&&s.composing.range.clear(),s.composing={start:m,range:i.markText(m,i.getCursor("to"),{className:"CodeMirror-composing"})}}),it(o,"compositionend",function(){s.composing&&(s.poll(),s.composing.range.clear(),s.composing=null)})},hn.prototype.createField=function(e){this.wrapper=Ol(),this.textarea=this.wrapper.firstChild;var n=this.cm.options;Il(this.textarea,n.spellcheck,n.autocorrect,n.autocapitalize)},hn.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},hn.prototype.prepareSelection=function(){var e=this.cm,n=e.display,s=e.doc,i=cl(e);if(e.options.moveInputWithCursor){var o=Cn(e,s.sel.primary().head,"div"),h=n.wrapper.getBoundingClientRect(),m=n.lineDiv.getBoundingClientRect();i.teTop=Math.max(0,Math.min(n.wrapper.clientHeight-10,o.top+m.top-h.top)),i.teLeft=Math.max(0,Math.min(n.wrapper.clientWidth-10,o.left+m.left-h.left))}return i},hn.prototype.showSelection=function(e){var n=this.cm,s=n.display;ye(s.cursorDiv,e.cursors),ye(s.selectionDiv,e.selection),e.teTop!=null&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},hn.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var n=this.cm;if(this.resetting=!0,n.somethingSelected()){this.prevInput="";var s=n.getSelection();this.textarea.value=s,n.state.focused&&re(this.textarea),S&&L>=9&&(this.hasSelection=s)}else e||(this.prevInput=this.textarea.value="",S&&L>=9&&(this.hasSelection=null));this.resetting=!1}},hn.prototype.getField=function(){return this.textarea},hn.prototype.supportsTouch=function(){return!1},hn.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!K||P(Ve(this.textarea))!=this.textarea))try{this.textarea.focus()}catch{}},hn.prototype.blur=function(){this.textarea.blur()},hn.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},hn.prototype.receivedFocus=function(){this.slowPoll()},hn.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},hn.prototype.fastPoll=function(){var e=!1,n=this;n.pollingFast=!0;function s(){var i=n.poll();!i&&!e?(e=!0,n.polling.set(60,s)):(n.pollingFast=!1,n.slowPoll())}n.polling.set(20,s)},hn.prototype.poll=function(){var e=this,n=this.cm,s=this.textarea,i=this.prevInput;if(this.contextMenuPending||this.resetting||!n.state.focused||$r(s)&&!i&&!this.composing||n.isReadOnly()||n.options.disableInput||n.state.keySeq)return!1;var o=s.value;if(o==i&&!n.somethingSelected())return!1;if(S&&L>=9&&this.hasSelection===o||V&&/[\uf700-\uf7ff]/.test(o))return n.display.input.reset(),!1;if(n.doc.sel==n.display.selForContextMenu){var h=o.charCodeAt(0);if(h==8203&&!i&&(i="​"),h==8666)return this.reset(),this.cm.execCommand("undo")}for(var m=0,v=Math.min(i.length,o.length);m<v&&i.charCodeAt(m)==o.charCodeAt(m);)++m;return Ln(n,function(){Pl(n,o.slice(m),i.length-m,null,e.composing?"*compose":null),o.length>1e3||o.indexOf(`
`)>-1?s.value=e.prevInput="":e.prevInput=o,e.composing&&(e.composing.range.clear(),e.composing.range=n.markText(e.composing.start,n.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},hn.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},hn.prototype.onKeyPress=function(){S&&L>=9&&(this.hasSelection=null),this.fastPoll()},hn.prototype.onContextMenu=function(e){var n=this,s=n.cm,i=s.display,o=n.textarea;n.contextMenuPending&&n.contextMenuPending();var h=hs(s,e),m=i.scroller.scrollTop;if(!h||ne)return;var v=s.options.resetSelectionOnContextMenu;v&&s.doc.sel.contains(h)==-1&&dn(s,Wn)(s.doc,zn(h),St);var w=o.style.cssText,k=n.wrapper.style.cssText,M=n.wrapper.offsetParent.getBoundingClientRect();n.wrapper.style.cssText="position: static",o.style.cssText=`position: absolute; width: 30px; height: 30px;
      top: `+(e.clientY-M.top-5)+"px; left: "+(e.clientX-M.left-5)+`px;
      z-index: 1000; background: `+(S?"rgba(255, 255, 255, .05)":"transparent")+`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;var B;R&&(B=o.ownerDocument.defaultView.scrollY),i.input.focus(),R&&o.ownerDocument.defaultView.scrollTo(null,B),i.input.reset(),s.somethingSelected()||(o.value=n.prevInput=" "),n.contextMenuPending=Q,i.selForContextMenu=s.doc.sel,clearTimeout(i.detectingSelectAll);function te(){if(o.selectionStart!=null){var ve=s.somethingSelected(),Ee="​"+(ve?o.value:"");o.value="⇚",o.value=Ee,n.prevInput=ve?"":"​",o.selectionStart=1,o.selectionEnd=Ee.length,i.selForContextMenu=s.doc.sel}}function Q(){if(n.contextMenuPending==Q&&(n.contextMenuPending=!1,n.wrapper.style.cssText=k,o.style.cssText=w,S&&L<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=m),o.selectionStart!=null)){(!S||S&&L<9)&&te();var ve=0,Ee=function(){i.selForContextMenu==s.doc.sel&&o.selectionStart==0&&o.selectionEnd>0&&n.prevInput=="​"?dn(s,Qi)(s):ve++<10?i.detectingSelectAll=setTimeout(Ee,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(Ee,200)}}if(S&&L>=9&&te(),Le){lr(e);var fe=function(){Jt(window,"mouseup",fe),setTimeout(Q,20)};it(window,"mouseup",fe)}else setTimeout(Q,50)},hn.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled=e=="nocursor",this.textarea.readOnly=!!e},hn.prototype.setUneditable=function(){},hn.prototype.needsContentAttribute=!1;function $c(e,n){if(n=n?He(n):{},n.value=e.value,!n.tabindex&&e.tabIndex&&(n.tabindex=e.tabIndex),!n.placeholder&&e.placeholder&&(n.placeholder=e.placeholder),n.autofocus==null){var s=P(Ve(e));n.autofocus=s==e||e.getAttribute("autofocus")!=null&&s==document.body}function i(){e.value=v.getValue()}var o;if(e.form&&(it(e.form,"submit",i),!n.leaveSubmitMethodAlone)){var h=e.form;o=h.submit;try{var m=h.submit=function(){i(),h.submit=o,h.submit(),h.submit=m}}catch{}}n.finishInit=function(w){w.save=i,w.getTextArea=function(){return e},w.toTextArea=function(){w.toTextArea=isNaN,i(),e.parentNode.removeChild(w.getWrapperElement()),e.style.display="",e.form&&(Jt(e.form,"submit",i),!n.leaveSubmitMethodAlone&&typeof e.form.submit=="function"&&(e.form.submit=o))}},e.style.display="none";var v=Zt(function(w){return e.parentNode.insertBefore(w,e.nextSibling)},n);return v}function Wa(e){e.off=Jt,e.on=it,e.wheelEventPixels=bs,e.Doc=Mt,e.splitLines=ur,e.countColumn=Be,e.findColumn=rt,e.isWordChar=Je,e.Pass=Gt,e.signal=It,e.Line=ki,e.changeEnd=Fn,e.scrollbarModel=Sc,e.Pos=de,e.cmpPos=We,e.modes=Rr,e.mimeModes=Ir,e.resolveMode=Er,e.getMode=zi,e.modeExtensions=ii,e.extendMode=xi,e.copyState=At,e.startState=bi,e.innerMode=os,e.commands=Uo,e.keyMap=Ri,e.keyName=Su,e.isModifierKey=wu,e.lookupKey=eo,e.normalizeKeyMap=Lc,e.StringStream=Xt,e.SharedTextMarker=Xs,e.TextMarker=mi,e.LineWidget=Pi,e.e_preventDefault=wn,e.e_stopPropagation=ni,e.e_stop=lr,e.addClass=G,e.contains=T,e.rmClass=Ce,e.keyNames=Xr}yr(Zt),Ml(Zt);var nr="iter insert remove copy getEditor constructor".split(" ");for(var zl in Mt.prototype)Mt.prototype.hasOwnProperty(zl)&&qe(nr,zl)<0&&(Zt.prototype[zl]=(function(e){return function(){return e.apply(this.doc,arguments)}})(Mt.prototype[zl]));return ar(Mt),Zt.inputStyles={textarea:hn,contenteditable:Dt},Zt.defineMode=function(e){!Zt.defaults.mode&&e!="null"&&(Zt.defaults.mode=e),jr.apply(this,arguments)},Zt.defineMIME=Bt,Zt.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),Zt.defineMIME("text/plain","null"),Zt.defineExtension=function(e,n){Zt.prototype[e]=n},Zt.defineDocExtension=function(e,n){Mt.prototype[e]=n},Zt.fromTextArea=$c,Wa(Zt),Zt.version="5.65.21",Zt}))})(md)),md.exports}var gx=ss();const cf=Df(gx);var df={exports:{}},pf;function yx(){return pf||(pf=1,(function(l,c){(function(d){d(ss())})(function(d){function g(L){return new RegExp("^(("+L.join(")|(")+"))\\b")}var x=g(["and","or","not","is"]),b=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],C=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];d.registerHelper("hintWords","python",b.concat(C).concat(["exec","print"]));function N(L){return L.scopes[L.scopes.length-1]}d.defineMode("python",function(L,R){for(var O="error",A=R.delimiters||R.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,Y=[R.singleOperators,R.doubleOperators,R.doubleDelimiters,R.tripleDelimiters,R.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],ne=0;ne<Y.length;ne++)Y[ne]||Y.splice(ne--,1);var H=R.hangingIndent||L.indentUnit,ae=b,D=C;R.extra_keywords!=null&&(ae=ae.concat(R.extra_keywords)),R.extra_builtins!=null&&(D=D.concat(R.extra_builtins));var U=!(R.version&&Number(R.version)<3);if(U){var F=R.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;ae=ae.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),D=D.concat(["ascii","bytes","exec","print"]);var K=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var F=R.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;ae=ae.concat(["exec","print"]),D=D.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var K=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var V=g(ae),ge=g(D);function ue(X,q){var T=X.sol()&&q.lastToken!="\\";if(T&&(q.indent=X.indentation()),T&&N(q).type=="py"){var P=N(q).offset;if(X.eatSpace()){var G=X.indentation();return G>P?oe(q):G<P&&se(X,q)&&X.peek()!="#"&&(q.errorToken=!0),null}else{var z=we(X,q);return P>0&&se(X,q)&&(z+=" "+O),z}}return we(X,q)}function we(X,q,T){if(X.eatSpace())return null;if(!T&&X.match(/^#.*/))return"comment";if(X.match(/^[0-9\.]/,!1)){var P=!1;if(X.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(P=!0),X.match(/^[\d_]+\.\d*/)&&(P=!0),X.match(/^\.\d+/)&&(P=!0),P)return X.eat(/J/i),"number";var G=!1;if(X.match(/^0x[0-9a-f_]+/i)&&(G=!0),X.match(/^0b[01_]+/i)&&(G=!0),X.match(/^0o[0-7_]+/i)&&(G=!0),X.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(X.eat(/J/i),G=!0),X.match(/^0(?![\dx])/i)&&(G=!0),G)return X.eat(/L/i),"number"}if(X.match(K)){var z=X.current().toLowerCase().indexOf("f")!==-1;return z?(q.tokenize=Ue(X.current(),q.tokenize),q.tokenize(X,q)):(q.tokenize=Le(X.current(),q.tokenize),q.tokenize(X,q))}for(var re=0;re<Y.length;re++)if(X.match(Y[re]))return"operator";return X.match(A)?"punctuation":q.lastToken=="."&&X.match(F)?"property":X.match(V)||X.match(x)?"keyword":X.match(ge)?"builtin":X.match(/^(self|cls)\b/)?"variable-2":X.match(F)?q.lastToken=="def"||q.lastToken=="class"?"def":"variable":(X.next(),T?null:O)}function Ue(X,q){for(;"rubf".indexOf(X.charAt(0).toLowerCase())>=0;)X=X.substr(1);var T=X.length==1,P="string";function G(re){return function(Ae,Ge){var Ve=we(Ae,Ge,!0);return Ve=="punctuation"&&(Ae.current()=="{"?Ge.tokenize=G(re+1):Ae.current()=="}"&&(re>1?Ge.tokenize=G(re-1):Ge.tokenize=z)),Ve}}function z(re,Ae){for(;!re.eol();)if(re.eatWhile(/[^'"\{\}\\]/),re.eat("\\")){if(re.next(),T&&re.eol())return P}else{if(re.match(X))return Ae.tokenize=q,P;if(re.match("{{"))return P;if(re.match("{",!1))return Ae.tokenize=G(0),re.current()?P:Ae.tokenize(re,Ae);if(re.match("}}"))return P;if(re.match("}"))return O;re.eat(/['"]/)}if(T){if(R.singleLineStringErrors)return O;Ae.tokenize=q}return P}return z.isString=!0,z}function Le(X,q){for(;"rubf".indexOf(X.charAt(0).toLowerCase())>=0;)X=X.substr(1);var T=X.length==1,P="string";function G(z,re){for(;!z.eol();)if(z.eatWhile(/[^'"\\]/),z.eat("\\")){if(z.next(),T&&z.eol())return P}else{if(z.match(X))return re.tokenize=q,P;z.eat(/['"]/)}if(T){if(R.singleLineStringErrors)return O;re.tokenize=q}return P}return G.isString=!0,G}function oe(X){for(;N(X).type!="py";)X.scopes.pop();X.scopes.push({offset:N(X).offset+L.indentUnit,type:"py",align:null})}function Ce(X,q,T){var P=X.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:X.column()+1;q.scopes.push({offset:q.indent+H,type:T,align:P})}function se(X,q){for(var T=X.indentation();q.scopes.length>1&&N(q).offset>T;){if(N(q).type!="py")return!0;q.scopes.pop()}return N(q).offset!=T}function ye(X,q){X.sol()&&(q.beginningOfLine=!0,q.dedent=!1);var T=q.tokenize(X,q),P=X.current();if(q.beginningOfLine&&P=="@")return X.match(F,!1)?"meta":U?"operator":O;if(/\S/.test(P)&&(q.beginningOfLine=!1),(T=="variable"||T=="builtin")&&q.lastToken=="meta"&&(T="meta"),(P=="pass"||P=="return")&&(q.dedent=!0),P=="lambda"&&(q.lambda=!0),P==":"&&!q.lambda&&N(q).type=="py"&&X.match(/^\s*(?:#|$)/,!1)&&oe(q),P.length==1&&!/string|comment/.test(T)){var G="[({".indexOf(P);if(G!=-1&&Ce(X,q,"])}".slice(G,G+1)),G="])}".indexOf(P),G!=-1)if(N(q).type==P)q.indent=q.scopes.pop().offset-H;else return O}return q.dedent&&X.eol()&&N(q).type=="py"&&q.scopes.length>1&&q.scopes.pop(),T}var j={startState:function(X){return{tokenize:ue,scopes:[{offset:X||0,type:"py",align:null}],indent:X||0,lastToken:null,lambda:!1,dedent:0}},token:function(X,q){var T=q.errorToken;T&&(q.errorToken=!1);var P=ye(X,q);return P&&P!="comment"&&(q.lastToken=P=="keyword"||P=="punctuation"?X.current():P),P=="punctuation"&&(P=null),X.eol()&&q.lambda&&(q.lambda=!1),T?P+" "+O:P},indent:function(X,q){if(X.tokenize!=ue)return X.tokenize.isString?d.Pass:0;var T=N(X),P=T.type==q.charAt(0)||T.type=="py"&&!X.dedent&&/^(else:|elif |except |finally:)/.test(q);return T.align!=null?T.align-(P?1:0):T.offset-(P?H:0)},electricInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,closeBrackets:{triples:`'"`},lineComment:"#",fold:"indent"};return j}),d.defineMIME("text/x-python","python");var S=function(L){return L.split(" ")};d.defineMIME("text/x-cython",{name:"python",extra_keywords:S("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})})})()),df.exports}yx();var hf={exports:{}},ff;function fm(){return ff||(ff=1,(function(l,c){(function(d){d(ss())})(function(d){d.defineMode("javascript",function(g,x){var b=g.indentUnit,C=x.statementIndent,N=x.jsonld,S=x.json||N,L=x.trackScope!==!1,R=x.typescript,O=x.wordCharacters||/[\w$\xa1-\uffff]/,A=(function(){function _(en){return{type:en,style:"keyword"}}var W=_("keyword a"),he=_("keyword b"),Te=_("keyword c"),de=_("keyword d"),We=_("operator"),Tt={type:"atom",style:"atom"};return{if:_("if"),while:W,with:W,else:he,do:he,try:he,finally:he,return:de,break:de,continue:de,new:_("new"),delete:Te,void:Te,throw:Te,debugger:_("debugger"),var:_("var"),const:_("var"),let:_("var"),function:_("function"),catch:_("catch"),for:_("for"),switch:_("switch"),case:_("case"),default:_("default"),in:We,typeof:We,instanceof:We,true:Tt,false:Tt,null:Tt,undefined:Tt,NaN:Tt,Infinity:Tt,this:_("this"),class:_("class"),super:_("atom"),yield:Te,export:_("export"),import:_("import"),extends:Te,await:Te}})(),Y=/[+\-*&%=<>!?|~^@]/,ne=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function H(_){for(var W=!1,he,Te=!1;(he=_.next())!=null;){if(!W){if(he=="/"&&!Te)return;he=="["?Te=!0:Te&&he=="]"&&(Te=!1)}W=!W&&he=="\\"}}var ae,D;function U(_,W,he){return ae=_,D=he,W}function F(_,W){var he=_.next();if(he=='"'||he=="'")return W.tokenize=K(he),W.tokenize(_,W);if(he=="."&&_.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return U("number","number");if(he=="."&&_.match(".."))return U("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(he))return U(he);if(he=="="&&_.eat(">"))return U("=>","operator");if(he=="0"&&_.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return U("number","number");if(/\d/.test(he))return _.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),U("number","number");if(he=="/")return _.eat("*")?(W.tokenize=V,V(_,W)):_.eat("/")?(_.skipToEnd(),U("comment","comment")):On(_,W,1)?(H(_),_.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),U("regexp","string-2")):(_.eat("="),U("operator","operator",_.current()));if(he=="`")return W.tokenize=ge,ge(_,W);if(he=="#"&&_.peek()=="!")return _.skipToEnd(),U("meta","meta");if(he=="#"&&_.eatWhile(O))return U("variable","property");if(he=="<"&&_.match("!--")||he=="-"&&_.match("->")&&!/\S/.test(_.string.slice(0,_.start)))return _.skipToEnd(),U("comment","comment");if(Y.test(he))return(he!=">"||!W.lexical||W.lexical.type!=">")&&(_.eat("=")?(he=="!"||he=="=")&&_.eat("="):/[<>*+\-|&?]/.test(he)&&(_.eat(he),he==">"&&_.eat(he))),he=="?"&&_.eat(".")?U("."):U("operator","operator",_.current());if(O.test(he)){_.eatWhile(O);var Te=_.current();if(W.lastType!="."){if(A.propertyIsEnumerable(Te)){var de=A[Te];return U(de.type,de.style,Te)}if(Te=="async"&&_.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return U("async","keyword",Te)}return U("variable","variable",Te)}}function K(_){return function(W,he){var Te=!1,de;if(N&&W.peek()=="@"&&W.match(ne))return he.tokenize=F,U("jsonld-keyword","meta");for(;(de=W.next())!=null&&!(de==_&&!Te);)Te=!Te&&de=="\\";return Te||(he.tokenize=F),U("string","string")}}function V(_,W){for(var he=!1,Te;Te=_.next();){if(Te=="/"&&he){W.tokenize=F;break}he=Te=="*"}return U("comment","comment")}function ge(_,W){for(var he=!1,Te;(Te=_.next())!=null;){if(!he&&(Te=="`"||Te=="$"&&_.eat("{"))){W.tokenize=F;break}he=!he&&Te=="\\"}return U("quasi","string-2",_.current())}var ue="([{}])";function we(_,W){W.fatArrowAt&&(W.fatArrowAt=null);var he=_.string.indexOf("=>",_.start);if(!(he<0)){if(R){var Te=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(_.string.slice(_.start,he));Te&&(he=Te.index)}for(var de=0,We=!1,Tt=he-1;Tt>=0;--Tt){var en=_.string.charAt(Tt),Sn=ue.indexOf(en);if(Sn>=0&&Sn<3){if(!de){++Tt;break}if(--de==0){en=="("&&(We=!0);break}}else if(Sn>=3&&Sn<6)++de;else if(O.test(en))We=!0;else if(/["'\/`]/.test(en))for(;;--Tt){if(Tt==0)return;var oi=_.string.charAt(Tt-1);if(oi==en&&_.string.charAt(Tt-2)!="\\"){Tt--;break}}else if(We&&!de){++Tt;break}}We&&!de&&(W.fatArrowAt=Tt)}}var Ue={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function Le(_,W,he,Te,de,We){this.indented=_,this.column=W,this.type=he,this.prev=de,this.info=We,Te!=null&&(this.align=Te)}function oe(_,W){if(!L)return!1;for(var he=_.localVars;he;he=he.next)if(he.name==W)return!0;for(var Te=_.context;Te;Te=Te.prev)for(var he=Te.vars;he;he=he.next)if(he.name==W)return!0}function Ce(_,W,he,Te,de){var We=_.cc;for(se.state=_,se.stream=de,se.marked=null,se.cc=We,se.style=W,_.lexical.hasOwnProperty("align")||(_.lexical.align=!0);;){var Tt=We.length?We.pop():S?qe:Be;if(Tt(he,Te)){for(;We.length&&We[We.length-1].lex;)We.pop()();return se.marked?se.marked:he=="variable"&&oe(_,Te)?"variable-2":W}}}var se={state:null,marked:null,cc:null};function ye(){for(var _=arguments.length-1;_>=0;_--)se.cc.push(arguments[_])}function j(){return ye.apply(null,arguments),!0}function X(_,W){for(var he=W;he;he=he.next)if(he.name==_)return!0;return!1}function q(_){var W=se.state;if(se.marked="def",!!L){if(W.context){if(W.lexical.info=="var"&&W.context&&W.context.block){var he=T(_,W.context);if(he!=null){W.context=he;return}}else if(!X(_,W.localVars)){W.localVars=new z(_,W.localVars);return}}x.globalVars&&!X(_,W.globalVars)&&(W.globalVars=new z(_,W.globalVars))}}function T(_,W){if(W)if(W.block){var he=T(_,W.prev);return he?he==W.prev?W:new G(he,W.vars,!0):null}else return X(_,W.vars)?W:new G(W.prev,new z(_,W.vars),!1);else return null}function P(_){return _=="public"||_=="private"||_=="protected"||_=="abstract"||_=="readonly"}function G(_,W,he){this.prev=_,this.vars=W,this.block=he}function z(_,W){this.name=_,this.next=W}var re=new z("this",new z("arguments",null));function Ae(){se.state.context=new G(se.state.context,se.state.localVars,!1),se.state.localVars=re}function Ge(){se.state.context=new G(se.state.context,se.state.localVars,!0),se.state.localVars=null}Ae.lex=Ge.lex=!0;function Ve(){se.state.localVars=se.state.context.vars,se.state.context=se.state.context.prev}Ve.lex=!0;function ke(_,W){var he=function(){var Te=se.state,de=Te.indented;if(Te.lexical.type=="stat")de=Te.lexical.indented;else for(var We=Te.lexical;We&&We.type==")"&&We.align;We=We.prev)de=We.indented;Te.lexical=new Le(de,se.stream.column(),_,null,Te.lexical,W)};return he.lex=!0,he}function Re(){var _=se.state;_.lexical.prev&&(_.lexical.type==")"&&(_.indented=_.lexical.indented),_.lexical=_.lexical.prev)}Re.lex=!0;function He(_){function W(he){return he==_?j():_==";"||he=="}"||he==")"||he=="]"?ye():j(W)}return W}function Be(_,W){return _=="var"?j(ke("vardef",W),ni,He(";"),Re):_=="keyword a"?j(ke("form"),Gt,Be,Re):_=="keyword b"?j(ke("form"),Be,Re):_=="keyword d"?se.stream.match(/^\s*$/,!1)?j():j(ke("stat"),vt,He(";"),Re):_=="debugger"?j(He(";")):_=="{"?j(ke("}"),Ge,Jn,Re,Ve):_==";"?j():_=="if"?(se.state.lexical.info=="else"&&se.state.cc[se.state.cc.length-1]==Re&&se.state.cc.pop()(),j(ke("form"),Gt,Be,Re,Xn)):_=="function"?j(ur):_=="for"?j(ke("form"),Ge,ri,Be,Ve,Re):_=="class"||R&&W=="interface"?(se.marked="keyword",j(ke("form",_=="class"?_:W),Rr,Re)):_=="variable"?R&&W=="declare"?(se.marked="keyword",j(Be)):R&&(W=="module"||W=="enum"||W=="type")&&se.stream.match(/^\s*\w/,!1)?(se.marked="keyword",W=="enum"?j(Qe):W=="type"?j(Ls,He("operator"),xt,He(";")):j(ke("form"),In,He("{"),ke("}"),Jn,Re,Re)):R&&W=="namespace"?(se.marked="keyword",j(ke("form"),qe,Be,Re)):R&&W=="abstract"?(se.marked="keyword",j(Be)):j(ke("stat"),wt):_=="switch"?j(ke("form"),Gt,He("{"),ke("}","switch"),Ge,Jn,Re,Re,Ve):_=="case"?j(qe,He(":")):_=="default"?j(He(":")):_=="catch"?j(ke("form"),Ae,tt,Be,Re,Ve):_=="export"?j(ke("stat"),Er,Re):_=="import"?j(ke("stat"),ii,Re):_=="async"?j(Be):W=="@"?j(qe,Be):ye(ke("stat"),qe,He(";"),Re)}function tt(_){if(_=="(")return j(kn,He(")"))}function qe(_,W){return St(_,W,!1)}function Ht(_,W){return St(_,W,!0)}function Gt(_){return _!="("?ye():j(ke(")"),vt,He(")"),Re)}function St(_,W,he){if(se.state.fatArrowAt==se.stream.start){var Te=he?ht:$e;if(_=="(")return j(Ae,ke(")"),pt(kn,")"),Re,He("=>"),Te,Ve);if(_=="variable")return ye(Ae,In,He("=>"),Te,Ve)}var de=he?rt:Fe;return Ue.hasOwnProperty(_)?j(de):_=="function"?j(ur,de):_=="class"||R&&W=="interface"?(se.marked="keyword",j(ke("form"),mo,Re)):_=="keyword c"||_=="async"?j(he?Ht:qe):_=="("?j(ke(")"),vt,He(")"),Re,de):_=="operator"||_=="spread"?j(he?Ht:qe):_=="["?j(ke("]"),Xt,Re,de):_=="{"?fn(at,"}",null,de):_=="quasi"?ye(et,de):_=="new"?j(ie(he)):j()}function vt(_){return _.match(/[;\}\)\],]/)?ye():ye(qe)}function Fe(_,W){return _==","?j(vt):rt(_,W,!1)}function rt(_,W,he){var Te=he==!1?Fe:rt,de=he==!1?qe:Ht;if(_=="=>")return j(Ae,he?ht:$e,Ve);if(_=="operator")return/\+\+|--/.test(W)||R&&W=="!"?j(Te):R&&W=="<"&&se.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?j(ke(">"),pt(xt,">"),Re,Te):W=="?"?j(qe,He(":"),de):j(de);if(_=="quasi")return ye(et,Te);if(_!=";"){if(_=="(")return fn(Ht,")","call",Te);if(_==".")return j(Je,Te);if(_=="[")return j(ke("]"),vt,He("]"),Re,Te);if(R&&W=="as")return se.marked="keyword",j(xt,Te);if(_=="regexp")return se.state.lastType=se.marked="operator",se.stream.backUp(se.stream.pos-se.stream.start-1),j(de)}}function et(_,W){return _!="quasi"?ye():W.slice(W.length-2)!="${"?j(et):j(vt,$t)}function $t(_){if(_=="}")return se.marked="string-2",se.state.tokenize=ge,j(et)}function $e(_){return we(se.stream,se.state),ye(_=="{"?Be:qe)}function ht(_){return we(se.stream,se.state),ye(_=="{"?Be:Ht)}function ie(_){return function(W){return W=="."?j(_?me:Se):W=="variable"&&R?j(un,_?rt:Fe):ye(_?Ht:qe)}}function Se(_,W){if(W=="target")return se.marked="keyword",j(Fe)}function me(_,W){if(W=="target")return se.marked="keyword",j(rt)}function wt(_){return _==":"?j(Re,Be):ye(Fe,He(";"),Re)}function Je(_){if(_=="variable")return se.marked="property",j()}function at(_,W){if(_=="async")return se.marked="property",j(at);if(_=="variable"||se.style=="keyword"){if(se.marked="property",W=="get"||W=="set")return j(Ye);var he;return R&&se.state.fatArrowAt==se.stream.start&&(he=se.stream.match(/^\s*:\s*/,!1))&&(se.state.fatArrowAt=se.stream.pos+he[0].length),j(yt)}else{if(_=="number"||_=="string")return se.marked=N?"property":se.style+" property",j(yt);if(_=="jsonld-keyword")return j(yt);if(R&&P(W))return se.marked="keyword",j(at);if(_=="[")return j(qe,Cr,He("]"),yt);if(_=="spread")return j(Ht,yt);if(W=="*")return se.marked="keyword",j(at);if(_==":")return ye(yt)}}function Ye(_){return _!="variable"?ye(yt):(se.marked="property",j(ur))}function yt(_){if(_==":")return j(Ht);if(_=="(")return ye(ur)}function pt(_,W,he){function Te(de,We){if(he?he.indexOf(de)>-1:de==","){var Tt=se.state.lexical;return Tt.info=="call"&&(Tt.pos=(Tt.pos||0)+1),j(function(en,Sn){return en==W||Sn==W?ye():ye(_)},Te)}return de==W||We==W?j():he&&he.indexOf(";")>-1?ye(_):j(He(W))}return function(de,We){return de==W||We==W?j():ye(_,Te)}}function fn(_,W,he){for(var Te=3;Te<arguments.length;Te++)se.cc.push(arguments[Te]);return j(ke(W,he),pt(_,W),Re)}function Jn(_){return _=="}"?j():ye(Be,Jn)}function Cr(_,W){if(R){if(_==":")return j(xt);if(W=="?")return j(Cr)}}function Hr(_,W){if(R&&(_==":"||W=="in"))return j(xt)}function or(_){if(R&&_==":")return se.stream.match(/^\s*\w+\s+is\b/,!1)?j(qe,vi,xt):j(xt)}function vi(_,W){if(W=="is")return se.marked="keyword",j()}function xt(_,W){if(W=="keyof"||W=="typeof"||W=="infer"||W=="readonly")return se.marked="keyword",j(W=="typeof"?Ht:xt);if(_=="variable"||W=="void")return se.marked="type",j(jn);if(W=="|"||W=="&")return j(xt);if(_=="string"||_=="number"||_=="atom")return j(jn);if(_=="[")return j(ke("]"),pt(xt,"]",","),Re,jn);if(_=="{")return j(ke("}"),it,Re,jn);if(_=="(")return j(pt(Ot,")"),Di,jn);if(_=="<")return j(pt(xt,">"),xt);if(_=="quasi")return ye(Jt,jn)}function Di(_){if(_=="=>")return j(xt)}function it(_){return _.match(/[\}\)\]]/)?j():_==","||_==";"?j(it):ye(Tr,it)}function Tr(_,W){if(_=="variable"||se.style=="keyword")return se.marked="property",j(Tr);if(W=="?"||_=="number"||_=="string")return j(Tr);if(_==":")return j(xt);if(_=="[")return j(He("variable"),Hr,He("]"),Tr);if(_=="(")return ye($r,Tr);if(!_.match(/[;\}\)\],]/))return j()}function Jt(_,W){return _!="quasi"?ye():W.slice(W.length-2)!="${"?j(Jt):j(xt,It)}function It(_){if(_=="}")return se.marked="string-2",se.state.tokenize=ge,j(Jt)}function Ot(_,W){return _=="variable"&&se.stream.match(/^\s*[?:]/,!1)||W=="?"?j(Ot):_==":"?j(xt):_=="spread"?j(Ot):ye(xt)}function jn(_,W){if(W=="<")return j(ke(">"),pt(xt,">"),Re,jn);if(W=="|"||_=="."||W=="&")return j(xt);if(_=="[")return j(xt,He("]"),jn);if(W=="extends"||W=="implements")return se.marked="keyword",j(xt);if(W=="?")return j(xt,He(":"),xt)}function un(_,W){if(W=="<")return j(ke(">"),pt(xt,">"),Re,jn)}function ar(){return ye(xt,wn)}function wn(_,W){if(W=="=")return j(xt)}function ni(_,W){return W=="enum"?(se.marked="keyword",j(Qe)):ye(In,Cr,En,Nr)}function In(_,W){if(R&&P(W))return se.marked="keyword",j(In);if(_=="variable")return q(W),j();if(_=="spread")return j(In);if(_=="[")return fn(Br,"]");if(_=="{")return fn(lr,"}")}function lr(_,W){return _=="variable"&&!se.stream.match(/^\s*:/,!1)?(q(W),j(En)):(_=="variable"&&(se.marked="property"),_=="spread"?j(In):_=="}"?ye():_=="["?j(qe,He("]"),He(":"),lr):j(He(":"),In,En))}function Br(){return ye(In,En)}function En(_,W){if(W=="=")return j(Ht)}function Nr(_){if(_==",")return j(ni)}function Xn(_,W){if(_=="keyword b"&&W=="else")return j(ke("form","else"),Be,Re)}function ri(_,W){if(W=="await")return j(ri);if(_=="(")return j(ke(")"),Ur,Re)}function Ur(_){return _=="var"?j(ni,qr):_=="variable"?j(qr):ye(qr)}function qr(_,W){return _==")"?j():_==";"?j(qr):W=="in"||W=="of"?(se.marked="keyword",j(qe,qr)):ye(qe,qr)}function ur(_,W){if(W=="*")return se.marked="keyword",j(ur);if(_=="variable")return q(W),j(ur);if(_=="(")return j(Ae,ke(")"),pt(kn,")"),Re,or,Be,Ve);if(R&&W=="<")return j(ke(">"),pt(ar,">"),Re,ur)}function $r(_,W){if(W=="*")return se.marked="keyword",j($r);if(_=="variable")return q(W),j($r);if(_=="(")return j(Ae,ke(")"),pt(kn,")"),Re,or,Ve);if(R&&W=="<")return j(ke(">"),pt(ar,">"),Re,$r)}function Ls(_,W){if(_=="keyword"||_=="variable")return se.marked="type",j(Ls);if(W=="<")return j(ke(">"),pt(ar,">"),Re)}function kn(_,W){return W=="@"&&j(qe,kn),_=="spread"?j(kn):R&&P(W)?(se.marked="keyword",j(kn)):R&&_=="this"?j(Cr,En):ye(In,Cr,En)}function mo(_,W){return _=="variable"?Rr(_,W):Ir(_,W)}function Rr(_,W){if(_=="variable")return q(W),j(Ir)}function Ir(_,W){if(W=="<")return j(ke(">"),pt(ar,">"),Re,Ir);if(W=="extends"||W=="implements"||R&&_==",")return W=="implements"&&(se.marked="keyword"),j(R?xt:qe,Ir);if(_=="{")return j(ke("}"),jr,Re)}function jr(_,W){if(_=="async"||_=="variable"&&(W=="static"||W=="get"||W=="set"||R&&P(W))&&se.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return se.marked="keyword",j(jr);if(_=="variable"||se.style=="keyword")return se.marked="property",j(Bt,jr);if(_=="number"||_=="string")return j(Bt,jr);if(_=="[")return j(qe,Cr,He("]"),Bt,jr);if(W=="*")return se.marked="keyword",j(jr);if(R&&_=="(")return ye($r,jr);if(_==";"||_==",")return j(jr);if(_=="}")return j();if(W=="@")return j(qe,jr)}function Bt(_,W){if(W=="!"||W=="?")return j(Bt);if(_==":")return j(xt,En);if(W=="=")return j(Ht);var he=se.state.lexical.prev,Te=he&&he.info=="interface";return ye(Te?$r:ur)}function Er(_,W){return W=="*"?(se.marked="keyword",j(bi,He(";"))):W=="default"?(se.marked="keyword",j(qe,He(";"))):_=="{"?j(pt(zi,"}"),bi,He(";")):ye(Be)}function zi(_,W){if(W=="as")return se.marked="keyword",j(He("variable"));if(_=="variable")return ye(Ht,zi)}function ii(_){return _=="string"?j():_=="("?ye(qe):_=="."?ye(Fe):ye(xi,At,bi)}function xi(_,W){return _=="{"?fn(xi,"}"):(_=="variable"&&q(W),W=="*"&&(se.marked="keyword"),j(os))}function At(_){if(_==",")return j(xi,At)}function os(_,W){if(W=="as")return se.marked="keyword",j(xi)}function bi(_,W){if(W=="from")return se.marked="keyword",j(qe)}function Xt(_){return _=="]"?j():ye(pt(Ht,"]"))}function Qe(){return ye(ke("form"),In,He("{"),ke("}"),pt(si,"}"),Re,Re)}function si(){return ye(In,En)}function cr(_,W){return _.lastType=="operator"||_.lastType==","||Y.test(W.charAt(0))||/[,.]/.test(W.charAt(0))}function On(_,W,he){return W.tokenize==F&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(W.lastType)||W.lastType=="quasi"&&/\{\s*$/.test(_.string.slice(0,_.pos-(he||0)))}return{startState:function(_){var W={tokenize:F,lastType:"sof",cc:[],lexical:new Le((_||0)-b,0,"block",!1),localVars:x.localVars,context:x.localVars&&new G(null,null,!1),indented:_||0};return x.globalVars&&typeof x.globalVars=="object"&&(W.globalVars=x.globalVars),W},token:function(_,W){if(_.sol()&&(W.lexical.hasOwnProperty("align")||(W.lexical.align=!1),W.indented=_.indentation(),we(_,W)),W.tokenize!=V&&_.eatSpace())return null;var he=W.tokenize(_,W);return ae=="comment"?he:(W.lastType=ae=="operator"&&(D=="++"||D=="--")?"incdec":ae,Ce(W,he,ae,D,_))},indent:function(_,W){if(_.tokenize==V||_.tokenize==ge)return d.Pass;if(_.tokenize!=F)return 0;var he=W&&W.charAt(0),Te=_.lexical,de;if(!/^\s*else\b/.test(W))for(var We=_.cc.length-1;We>=0;--We){var Tt=_.cc[We];if(Tt==Re)Te=Te.prev;else if(Tt!=Xn&&Tt!=Ve)break}for(;(Te.type=="stat"||Te.type=="form")&&(he=="}"||(de=_.cc[_.cc.length-1])&&(de==Fe||de==rt)&&!/^[,\.=+\-*:?[\(]/.test(W));)Te=Te.prev;C&&Te.type==")"&&Te.prev.type=="stat"&&(Te=Te.prev);var en=Te.type,Sn=he==en;return en=="vardef"?Te.indented+(_.lastType=="operator"||_.lastType==","?Te.info.length+1:0):en=="form"&&he=="{"?Te.indented:en=="form"?Te.indented+b:en=="stat"?Te.indented+(cr(_,W)?C||b:0):Te.info=="switch"&&!Sn&&x.doubleIndentSwitch!=!1?Te.indented+(/^(?:case|default)\b/.test(W)?b:2*b):Te.align?Te.column+(Sn?0:1):Te.indented+(Sn?0:b)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:S?null:"/*",blockCommentEnd:S?null:"*/",blockCommentContinue:S?null:" * ",lineComment:S?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:S?"json":"javascript",jsonldMode:N,jsonMode:S,expressionAllowed:On,skipExpression:function(_){Ce(_,"atom","atom","true",new d.StringStream("",2,null))}}}),d.registerHelper("wordChars","javascript",/[\w$]/),d.defineMIME("text/javascript","javascript"),d.defineMIME("text/ecmascript","javascript"),d.defineMIME("application/javascript","javascript"),d.defineMIME("application/x-javascript","javascript"),d.defineMIME("application/ecmascript","javascript"),d.defineMIME("application/json",{name:"javascript",json:!0}),d.defineMIME("application/x-json",{name:"javascript",json:!0}),d.defineMIME("application/manifest+json",{name:"javascript",json:!0}),d.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),d.defineMIME("text/typescript",{name:"javascript",typescript:!0}),d.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})()),hf.exports}fm();var mf={exports:{}},gf;function vx(){return gf||(gf=1,(function(l,c){(function(d){d(ss())})(function(d){function g(T,P,G,z,re,Ae){this.indented=T,this.column=P,this.type=G,this.info=z,this.align=re,this.prev=Ae}function x(T,P,G,z){var re=T.indented;return T.context&&T.context.type=="statement"&&G!="statement"&&(re=T.context.indented),T.context=new g(re,P,G,z,null,T.context)}function b(T){var P=T.context.type;return(P==")"||P=="]"||P=="}")&&(T.indented=T.context.indented),T.context=T.context.prev}function C(T,P,G){if(P.prevToken=="variable"||P.prevToken=="type"||/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(T.string.slice(0,G))||P.typeAtEndOfLine&&T.column()==T.indentation())return!0}function N(T){for(;;){if(!T||T.type=="top")return!0;if(T.type=="}"&&T.prev.info!="namespace")return!1;T=T.prev}}d.defineMode("clike",function(T,P){var G=T.indentUnit,z=P.statementIndentUnit||G,re=P.dontAlignCalls,Ae=P.keywords||{},Ge=P.types||{},Ve=P.builtin||{},ke=P.blockKeywords||{},Re=P.defKeywords||{},He=P.atoms||{},Be=P.hooks||{},tt=P.multiLineStrings,qe=P.indentStatements!==!1,Ht=P.indentSwitch!==!1,Gt=P.namespaceSeparator,St=P.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,vt=P.numberStart||/[\d\.]/,Fe=P.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,rt=P.isOperatorChar||/[+\-*&%=<>!?|\/]/,et=P.isIdentifierChar||/[\w\$_\xa1-\uffff]/,$t=P.isReservedIdentifier||!1,$e,ht;function ie(Je,at){var Ye=Je.next();if(Be[Ye]){var yt=Be[Ye](Je,at);if(yt!==!1)return yt}if(Ye=='"'||Ye=="'")return at.tokenize=Se(Ye),at.tokenize(Je,at);if(vt.test(Ye)){if(Je.backUp(1),Je.match(Fe))return"number";Je.next()}if(St.test(Ye))return $e=Ye,null;if(Ye=="/"){if(Je.eat("*"))return at.tokenize=me,me(Je,at);if(Je.eat("/"))return Je.skipToEnd(),"comment"}if(rt.test(Ye)){for(;!Je.match(/^\/[\/*]/,!1)&&Je.eat(rt););return"operator"}if(Je.eatWhile(et),Gt)for(;Je.match(Gt);)Je.eatWhile(et);var pt=Je.current();return L(Ae,pt)?(L(ke,pt)&&($e="newstatement"),L(Re,pt)&&(ht=!0),"keyword"):L(Ge,pt)?"type":L(Ve,pt)||$t&&$t(pt)?(L(ke,pt)&&($e="newstatement"),"builtin"):L(He,pt)?"atom":"variable"}function Se(Je){return function(at,Ye){for(var yt=!1,pt,fn=!1;(pt=at.next())!=null;){if(pt==Je&&!yt){fn=!0;break}yt=!yt&&pt=="\\"}return(fn||!(yt||tt))&&(Ye.tokenize=null),"string"}}function me(Je,at){for(var Ye=!1,yt;yt=Je.next();){if(yt=="/"&&Ye){at.tokenize=null;break}Ye=yt=="*"}return"comment"}function wt(Je,at){P.typeFirstDefinitions&&Je.eol()&&N(at.context)&&(at.typeAtEndOfLine=C(Je,at,Je.pos))}return{startState:function(Je){return{tokenize:null,context:new g((Je||0)-G,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(Je,at){var Ye=at.context;if(Je.sol()&&(Ye.align==null&&(Ye.align=!1),at.indented=Je.indentation(),at.startOfLine=!0),Je.eatSpace())return wt(Je,at),null;$e=ht=null;var yt=(at.tokenize||ie)(Je,at);if(yt=="comment"||yt=="meta")return yt;if(Ye.align==null&&(Ye.align=!0),$e==";"||$e==":"||$e==","&&Je.match(/^\s*(?:\/\/.*)?$/,!1))for(;at.context.type=="statement";)b(at);else if($e=="{")x(at,Je.column(),"}");else if($e=="[")x(at,Je.column(),"]");else if($e=="(")x(at,Je.column(),")");else if($e=="}"){for(;Ye.type=="statement";)Ye=b(at);for(Ye.type=="}"&&(Ye=b(at));Ye.type=="statement";)Ye=b(at)}else $e==Ye.type?b(at):qe&&((Ye.type=="}"||Ye.type=="top")&&$e!=";"||Ye.type=="statement"&&$e=="newstatement")&&x(at,Je.column(),"statement",Je.current());if(yt=="variable"&&(at.prevToken=="def"||P.typeFirstDefinitions&&C(Je,at,Je.start)&&N(at.context)&&Je.match(/^\s*\(/,!1))&&(yt="def"),Be.token){var pt=Be.token(Je,at,yt);pt!==void 0&&(yt=pt)}return yt=="def"&&P.styleDefs===!1&&(yt="variable"),at.startOfLine=!1,at.prevToken=ht?"def":yt||$e,wt(Je,at),yt},indent:function(Je,at){if(Je.tokenize!=ie&&Je.tokenize!=null||Je.typeAtEndOfLine&&N(Je.context))return d.Pass;var Ye=Je.context,yt=at&&at.charAt(0),pt=yt==Ye.type;if(Ye.type=="statement"&&yt=="}"&&(Ye=Ye.prev),P.dontIndentStatements)for(;Ye.type=="statement"&&P.dontIndentStatements.test(Ye.info);)Ye=Ye.prev;if(Be.indent){var fn=Be.indent(Je,Ye,at,G);if(typeof fn=="number")return fn}var Jn=Ye.prev&&Ye.prev.info=="switch";if(P.allmanIndentation&&/[{(]/.test(yt)){for(;Ye.type!="top"&&Ye.type!="}";)Ye=Ye.prev;return Ye.indented}return Ye.type=="statement"?Ye.indented+(yt=="{"?0:z):Ye.align&&(!re||Ye.type!=")")?Ye.column+(pt?0:1):Ye.type==")"&&!pt?Ye.indented+z:Ye.indented+(pt?0:G)+(!pt&&Jn&&!/^(?:case|default)\b/.test(at)?G:0)},electricInput:Ht?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});function S(T){for(var P={},G=T.split(" "),z=0;z<G.length;++z)P[G[z]]=!0;return P}function L(T,P){return typeof T=="function"?T(P):T.propertyIsEnumerable(P)}var R="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",O="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",A="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",Y="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",ne=S("int long char short double float unsigned signed void bool"),H=S("SEL instancetype id Class Protocol BOOL");function ae(T){return L(ne,T)||/.+_t$/.test(T)}function D(T){return ae(T)||L(H,T)}var U="case do else for if switch while struct enum union",F="struct enum union";function K(T,P){if(!P.startOfLine)return!1;for(var G,z=null;G=T.peek();){if(G=="\\"&&T.match(/^.$/)){z=K;break}else if(G=="/"&&T.match(/^\/[\/\*]/,!1))break;T.next()}return P.tokenize=z,"meta"}function V(T,P){return P.prevToken=="type"?"type":!1}function ge(T){return!T||T.length<2||T[0]!="_"?!1:T[1]=="_"||T[1]!==T[1].toLowerCase()}function ue(T){return T.eatWhile(/[\w\.']/),"number"}function we(T,P){if(T.backUp(1),T.match(/^(?:R|u8R|uR|UR|LR)/)){var G=T.match(/^"([^\s\\()]{0,16})\(/);return G?(P.cpp11RawStringDelim=G[1],P.tokenize=oe,oe(T,P)):!1}return T.match(/^(?:u8|u|U|L)/)?T.match(/^["']/,!1)?"string":!1:(T.next(),!1)}function Ue(T){var P=/(\w+)::~?(\w+)$/.exec(T);return P&&P[1]==P[2]}function Le(T,P){for(var G;(G=T.next())!=null;)if(G=='"'&&!T.eat('"')){P.tokenize=null;break}return"string"}function oe(T,P){var G=P.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),z=T.match(new RegExp(".*?\\)"+G+'"'));return z?P.tokenize=null:T.skipToEnd(),"string"}function Ce(T,P){typeof T=="string"&&(T=[T]);var G=[];function z(Ae){if(Ae)for(var Ge in Ae)Ae.hasOwnProperty(Ge)&&G.push(Ge)}z(P.keywords),z(P.types),z(P.builtin),z(P.atoms),G.length&&(P.helperType=T[0],d.registerHelper("hintWords",T[0],G));for(var re=0;re<T.length;++re)d.defineMIME(T[re],P)}Ce(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:S(R),types:ae,blockKeywords:S(U),defKeywords:S(F),typeFirstDefinitions:!0,atoms:S("NULL true false"),isReservedIdentifier:ge,hooks:{"#":K,"*":V},modeProps:{fold:["brace","include"]}}),Ce(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:S(R+" "+O),types:ae,blockKeywords:S(U+" class try catch"),defKeywords:S(F+" class namespace"),typeFirstDefinitions:!0,atoms:S("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:ge,hooks:{"#":K,"*":V,u:we,U:we,L:we,R:we,0:ue,1:ue,2:ue,3:ue,4:ue,5:ue,6:ue,7:ue,8:ue,9:ue,token:function(T,P,G){if(G=="variable"&&T.peek()=="("&&(P.prevToken==";"||P.prevToken==null||P.prevToken=="}")&&Ue(T.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ce("text/x-java",{name:"clike",keywords:S("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:S("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:S("catch class do else finally for if switch try while"),defKeywords:S("class interface enum @interface"),typeFirstDefinitions:!0,atoms:S("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(T){return T.match("interface",!1)?!1:(T.eatWhile(/[\w\$_]/),"meta")},'"':function(T,P){return T.match(/""$/)?(P.tokenize=se,P.tokenize(T,P)):!1}},modeProps:{fold:["brace","import"]}}),Ce("text/x-csharp",{name:"clike",keywords:S("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:S("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:S("catch class do else finally for foreach if struct switch try while"),defKeywords:S("class interface namespace record struct var"),typeFirstDefinitions:!0,atoms:S("true false null"),hooks:{"@":function(T,P){return T.eat('"')?(P.tokenize=Le,Le(T,P)):(T.eatWhile(/[\w\$_]/),"meta")}}});function se(T,P){for(var G=!1;!T.eol();){if(!G&&T.match('"""')){P.tokenize=null;break}G=T.next()=="\\"&&!G}return"string"}function ye(T){return function(P,G){for(var z;z=P.next();)if(z=="*"&&P.eat("/"))if(T==1){G.tokenize=null;break}else return G.tokenize=ye(T-1),G.tokenize(P,G);else if(z=="/"&&P.eat("*"))return G.tokenize=ye(T+1),G.tokenize(P,G);return"comment"}}Ce("text/x-scala",{name:"clike",keywords:S("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:S("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:S("catch class enum do else finally for forSome if match switch try while"),defKeywords:S("class enum def object package trait type val var"),atoms:S("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(T){return T.eatWhile(/[\w\$_]/),"meta"},'"':function(T,P){return T.match('""')?(P.tokenize=se,P.tokenize(T,P)):!1},"'":function(T){return T.match(/^(\\[^'\s]+|[^\\'])'/)?"string-2":(T.eatWhile(/[\w\$_\xa1-\uffff]/),"atom")},"=":function(T,P){var G=P.context;return G.type=="}"&&G.align&&T.eat(">")?(P.context=new g(G.indented,G.column,G.type,G.info,null,G.prev),"operator"):!1},"/":function(T,P){return T.eat("*")?(P.tokenize=ye(1),P.tokenize(T,P)):!1}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}});function j(T){return function(P,G){for(var z=!1,re,Ae=!1;!P.eol();){if(!T&&!z&&P.match('"')){Ae=!0;break}if(T&&P.match('"""')){Ae=!0;break}re=P.next(),!z&&re=="$"&&P.match("{")&&P.skipTo("}"),z=!z&&re=="\\"&&!T}return(Ae||!T)&&(G.tokenize=null),"string"}}Ce("text/x-kotlin",{name:"clike",keywords:S("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"),types:S("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),indentSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(ul?|l|f)?/i,blockKeywords:S("catch class do else finally for if where try while enum"),defKeywords:S("class val var object interface fun"),atoms:S("true false null this"),hooks:{"@":function(T){return T.eatWhile(/[\w\$_]/),"meta"},"*":function(T,P){return P.prevToken=="."?"variable":"operator"},'"':function(T,P){return P.tokenize=j(T.match('""')),P.tokenize(T,P)},"/":function(T,P){return T.eat("*")?(P.tokenize=ye(1),P.tokenize(T,P)):!1},indent:function(T,P,G,z){var re=G&&G.charAt(0);if((T.prevToken=="}"||T.prevToken==")")&&G=="")return T.indented;if(T.prevToken=="operator"&&G!="}"&&T.context.type!="}"||T.prevToken=="variable"&&re=="."||(T.prevToken=="}"||T.prevToken==")")&&re==".")return z*2+P.indented;if(P.align&&P.type=="}")return P.indented+(T.context.type==(G||"").charAt(0)?0:z)}},modeProps:{closeBrackets:{triples:'"'}}}),Ce(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:S("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:S("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:S("for while do if else struct"),builtin:S("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:S("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":K},modeProps:{fold:["brace","include"]}}),Ce("text/x-nesc",{name:"clike",keywords:S(R+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:ae,blockKeywords:S(U),atoms:S("null true false"),hooks:{"#":K},modeProps:{fold:["brace","include"]}}),Ce("text/x-objectivec",{name:"clike",keywords:S(R+" "+A),types:D,builtin:S(Y),blockKeywords:S(U+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:S(F+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:S("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ge,hooks:{"#":K,"*":V},modeProps:{fold:["brace","include"]}}),Ce("text/x-objectivec++",{name:"clike",keywords:S(R+" "+A+" "+O),types:D,builtin:S(Y),blockKeywords:S(U+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:S(F+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:S("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ge,hooks:{"#":K,"*":V,u:we,U:we,L:we,R:we,0:ue,1:ue,2:ue,3:ue,4:ue,5:ue,6:ue,7:ue,8:ue,9:ue,token:function(T,P,G){if(G=="variable"&&T.peek()=="("&&(P.prevToken==";"||P.prevToken==null||P.prevToken=="}")&&Ue(T.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ce("text/x-squirrel",{name:"clike",keywords:S("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:ae,blockKeywords:S("case catch class else for foreach if switch try while"),defKeywords:S("function local class"),typeFirstDefinitions:!0,atoms:S("true false null"),hooks:{"#":K},modeProps:{fold:["brace","include"]}});var X=null;function q(T){return function(P,G){for(var z=!1,re,Ae=!1;!P.eol();){if(!z&&P.match('"')&&(T=="single"||P.match('""'))){Ae=!0;break}if(!z&&P.match("``")){X=q(T),Ae=!0;break}re=P.next(),z=T=="single"&&!z&&re=="\\"}return Ae&&(G.tokenize=null),"string"}}Ce("text/x-ceylon",{name:"clike",keywords:S("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(T){var P=T.charAt(0);return P===P.toUpperCase()&&P!==P.toLowerCase()},blockKeywords:S("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:S("class dynamic function interface module object package value"),builtin:S("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:S("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(T){return T.eatWhile(/[\w\$_]/),"meta"},'"':function(T,P){return P.tokenize=q(T.match('""')?"triple":"single"),P.tokenize(T,P)},"`":function(T,P){return!X||!T.match("`")?!1:(P.tokenize=X,X=null,P.tokenize(T,P))},"'":function(T){return T.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(T,P,G){if((G=="variable"||G=="type")&&P.prevToken==".")return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})})})()),mf.exports}vx();var yf={exports:{}},vf;function mm(){return vf||(vf=1,(function(l,c){(function(d){d(ss())})(function(d){var g={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},x={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};d.defineMode("xml",function(b,C){var N=b.indentUnit,S={},L=C.htmlMode?g:x;for(var R in L)S[R]=L[R];for(var R in C)S[R]=C[R];var O,A;function Y(j,X){function q(G){return X.tokenize=G,G(j,X)}var T=j.next();if(T=="<")return j.eat("!")?j.eat("[")?j.match("CDATA[")?q(ae("atom","]]>")):null:j.match("--")?q(ae("comment","-->")):j.match("DOCTYPE",!0,!0)?(j.eatWhile(/[\w\._\-]/),q(D(1))):null:j.eat("?")?(j.eatWhile(/[\w\._\-]/),X.tokenize=ae("meta","?>"),"meta"):(O=j.eat("/")?"closeTag":"openTag",X.tokenize=ne,"tag bracket");if(T=="&"){var P;return j.eat("#")?j.eat("x")?P=j.eatWhile(/[a-fA-F\d]/)&&j.eat(";"):P=j.eatWhile(/[\d]/)&&j.eat(";"):P=j.eatWhile(/[\w\.\-:]/)&&j.eat(";"),P?"atom":"error"}else return j.eatWhile(/[^&<]/),null}Y.isInText=!0;function ne(j,X){var q=j.next();if(q==">"||q=="/"&&j.eat(">"))return X.tokenize=Y,O=q==">"?"endTag":"selfcloseTag","tag bracket";if(q=="=")return O="equals",null;if(q=="<"){X.tokenize=Y,X.state=ge,X.tagName=X.tagStart=null;var T=X.tokenize(j,X);return T?T+" tag error":"tag error"}else return/[\'\"]/.test(q)?(X.tokenize=H(q),X.stringStartCol=j.column(),X.tokenize(j,X)):(j.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function H(j){var X=function(q,T){for(;!q.eol();)if(q.next()==j){T.tokenize=ne;break}return"string"};return X.isInAttribute=!0,X}function ae(j,X){return function(q,T){for(;!q.eol();){if(q.match(X)){T.tokenize=Y;break}q.next()}return j}}function D(j){return function(X,q){for(var T;(T=X.next())!=null;){if(T=="<")return q.tokenize=D(j+1),q.tokenize(X,q);if(T==">")if(j==1){q.tokenize=Y;break}else return q.tokenize=D(j-1),q.tokenize(X,q)}return"meta"}}function U(j){return j&&j.toLowerCase()}function F(j,X,q){this.prev=j.context,this.tagName=X||"",this.indent=j.indented,this.startOfLine=q,(S.doNotIndent.hasOwnProperty(X)||j.context&&j.context.noIndent)&&(this.noIndent=!0)}function K(j){j.context&&(j.context=j.context.prev)}function V(j,X){for(var q;;){if(!j.context||(q=j.context.tagName,!S.contextGrabbers.hasOwnProperty(U(q))||!S.contextGrabbers[U(q)].hasOwnProperty(U(X))))return;K(j)}}function ge(j,X,q){return j=="openTag"?(q.tagStart=X.column(),ue):j=="closeTag"?we:ge}function ue(j,X,q){return j=="word"?(q.tagName=X.current(),A="tag",oe):S.allowMissingTagName&&j=="endTag"?(A="tag bracket",oe(j,X,q)):(A="error",ue)}function we(j,X,q){if(j=="word"){var T=X.current();return q.context&&q.context.tagName!=T&&S.implicitlyClosed.hasOwnProperty(U(q.context.tagName))&&K(q),q.context&&q.context.tagName==T||S.matchClosing===!1?(A="tag",Ue):(A="tag error",Le)}else return S.allowMissingTagName&&j=="endTag"?(A="tag bracket",Ue(j,X,q)):(A="error",Le)}function Ue(j,X,q){return j!="endTag"?(A="error",Ue):(K(q),ge)}function Le(j,X,q){return A="error",Ue(j,X,q)}function oe(j,X,q){if(j=="word")return A="attribute",Ce;if(j=="endTag"||j=="selfcloseTag"){var T=q.tagName,P=q.tagStart;return q.tagName=q.tagStart=null,j=="selfcloseTag"||S.autoSelfClosers.hasOwnProperty(U(T))?V(q,T):(V(q,T),q.context=new F(q,T,P==q.indented)),ge}return A="error",oe}function Ce(j,X,q){return j=="equals"?se:(S.allowMissing||(A="error"),oe(j,X,q))}function se(j,X,q){return j=="string"?ye:j=="word"&&S.allowUnquoted?(A="string",oe):(A="error",oe(j,X,q))}function ye(j,X,q){return j=="string"?ye:oe(j,X,q)}return{startState:function(j){var X={tokenize:Y,state:ge,indented:j||0,tagName:null,tagStart:null,context:null};return j!=null&&(X.baseIndent=j),X},token:function(j,X){if(!X.tagName&&j.sol()&&(X.indented=j.indentation()),j.eatSpace())return null;O=null;var q=X.tokenize(j,X);return(q||O)&&q!="comment"&&(A=null,X.state=X.state(O||q,j,X),A&&(q=A=="error"?q+" error":A)),q},indent:function(j,X,q){var T=j.context;if(j.tokenize.isInAttribute)return j.tagStart==j.indented?j.stringStartCol+1:j.indented+N;if(T&&T.noIndent)return d.Pass;if(j.tokenize!=ne&&j.tokenize!=Y)return q?q.match(/^(\s*)/)[0].length:0;if(j.tagName)return S.multilineTagIndentPastTag!==!1?j.tagStart+j.tagName.length+2:j.tagStart+N*(S.multilineTagIndentFactor||1);if(S.alignCDATA&&/<!\[CDATA\[/.test(X))return 0;var P=X&&/^<(\/)?([\w_:\.-]*)/.exec(X);if(P&&P[1])for(;T;)if(T.tagName==P[2]){T=T.prev;break}else if(S.implicitlyClosed.hasOwnProperty(U(T.tagName)))T=T.prev;else break;else if(P)for(;T;){var G=S.contextGrabbers[U(T.tagName)];if(G&&G.hasOwnProperty(U(P[2])))T=T.prev;else break}for(;T&&T.prev&&!T.startOfLine;)T=T.prev;return T?T.indent+N:j.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:S.htmlMode?"html":"xml",helperType:S.htmlMode?"html":"xml",skipAttribute:function(j){j.state==se&&(j.state=oe)},xmlCurrentTag:function(j){return j.tagName?{name:j.tagName,close:j.type=="closeTag"}:null},xmlCurrentContext:function(j){for(var X=[],q=j.context;q;q=q.prev)X.push(q.tagName);return X.reverse()}}}),d.defineMIME("text/xml","xml"),d.defineMIME("application/xml","xml"),d.mimeModes.hasOwnProperty("text/html")||d.defineMIME("text/html",{name:"xml",htmlMode:!0})})})()),yf.exports}mm();var xf={exports:{}},bf;function gm(){return bf||(bf=1,(function(l,c){(function(d){d(ss())})(function(d){d.defineMode("css",function(Le,oe){var Ce=oe.inline;oe.propertyKeywords||(oe=d.resolveMode("text/css"));var se=Le.indentUnit,ye=oe.tokenHooks,j=oe.documentTypes||{},X=oe.mediaTypes||{},q=oe.mediaFeatures||{},T=oe.mediaValueKeywords||{},P=oe.propertyKeywords||{},G=oe.nonStandardPropertyKeywords||{},z=oe.fontProperties||{},re=oe.counterDescriptors||{},Ae=oe.colorKeywords||{},Ge=oe.valueKeywords||{},Ve=oe.allowNested,ke=oe.lineComment,Re=oe.supportsAtComponent===!0,He=Le.highlightNonStandardPropertyKeywords!==!1,Be,tt;function qe(ie,Se){return Be=Se,ie}function Ht(ie,Se){var me=ie.next();if(ye[me]){var wt=ye[me](ie,Se);if(wt!==!1)return wt}if(me=="@")return ie.eatWhile(/[\w\\\-]/),qe("def",ie.current());if(me=="="||(me=="~"||me=="|")&&ie.eat("="))return qe(null,"compare");if(me=='"'||me=="'")return Se.tokenize=Gt(me),Se.tokenize(ie,Se);if(me=="#")return ie.eatWhile(/[\w\\\-]/),qe("atom","hash");if(me=="!")return ie.match(/^\s*\w*/),qe("keyword","important");if(/\d/.test(me)||me=="."&&ie.eat(/\d/))return ie.eatWhile(/[\w.%]/),qe("number","unit");if(me==="-"){if(/[\d.]/.test(ie.peek()))return ie.eatWhile(/[\w.%]/),qe("number","unit");if(ie.match(/^-[\w\\\-]*/))return ie.eatWhile(/[\w\\\-]/),ie.match(/^\s*:/,!1)?qe("variable-2","variable-definition"):qe("variable-2","variable");if(ie.match(/^\w+-/))return qe("meta","meta")}else return/[,+>*\/]/.test(me)?qe(null,"select-op"):me=="."&&ie.match(/^-?[_a-z][_a-z0-9-]*/i)?qe("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(me)?qe(null,me):ie.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(ie.current())&&(Se.tokenize=St),qe("variable callee","variable")):/[\w\\\-]/.test(me)?(ie.eatWhile(/[\w\\\-]/),qe("property","word")):qe(null,null)}function Gt(ie){return function(Se,me){for(var wt=!1,Je;(Je=Se.next())!=null;){if(Je==ie&&!wt){ie==")"&&Se.backUp(1);break}wt=!wt&&Je=="\\"}return(Je==ie||!wt&&ie!=")")&&(me.tokenize=null),qe("string","string")}}function St(ie,Se){return ie.next(),ie.match(/^\s*[\"\')]/,!1)?Se.tokenize=null:Se.tokenize=Gt(")"),qe(null,"(")}function vt(ie,Se,me){this.type=ie,this.indent=Se,this.prev=me}function Fe(ie,Se,me,wt){return ie.context=new vt(me,Se.indentation()+(wt===!1?0:se),ie.context),me}function rt(ie){return ie.context.prev&&(ie.context=ie.context.prev),ie.context.type}function et(ie,Se,me){return ht[me.context.type](ie,Se,me)}function $t(ie,Se,me,wt){for(var Je=wt||1;Je>0;Je--)me.context=me.context.prev;return et(ie,Se,me)}function $e(ie){var Se=ie.current().toLowerCase();Ge.hasOwnProperty(Se)?tt="atom":Ae.hasOwnProperty(Se)?tt="keyword":tt="variable"}var ht={};return ht.top=function(ie,Se,me){if(ie=="{")return Fe(me,Se,"block");if(ie=="}"&&me.context.prev)return rt(me);if(Re&&/@component/i.test(ie))return Fe(me,Se,"atComponentBlock");if(/^@(-moz-)?document$/i.test(ie))return Fe(me,Se,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(ie))return Fe(me,Se,"atBlock");if(/^@(font-face|counter-style)/i.test(ie))return me.stateArg=ie,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(ie))return"keyframes";if(ie&&ie.charAt(0)=="@")return Fe(me,Se,"at");if(ie=="hash")tt="builtin";else if(ie=="word")tt="tag";else{if(ie=="variable-definition")return"maybeprop";if(ie=="interpolation")return Fe(me,Se,"interpolation");if(ie==":")return"pseudo";if(Ve&&ie=="(")return Fe(me,Se,"parens")}return me.context.type},ht.block=function(ie,Se,me){if(ie=="word"){var wt=Se.current().toLowerCase();return P.hasOwnProperty(wt)?(tt="property","maybeprop"):G.hasOwnProperty(wt)?(tt=He?"string-2":"property","maybeprop"):Ve?(tt=Se.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(tt+=" error","maybeprop")}else return ie=="meta"?"block":!Ve&&(ie=="hash"||ie=="qualifier")?(tt="error","block"):ht.top(ie,Se,me)},ht.maybeprop=function(ie,Se,me){return ie==":"?Fe(me,Se,"prop"):et(ie,Se,me)},ht.prop=function(ie,Se,me){if(ie==";")return rt(me);if(ie=="{"&&Ve)return Fe(me,Se,"propBlock");if(ie=="}"||ie=="{")return $t(ie,Se,me);if(ie=="(")return Fe(me,Se,"parens");if(ie=="hash"&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(Se.current()))tt+=" error";else if(ie=="word")$e(Se);else if(ie=="interpolation")return Fe(me,Se,"interpolation");return"prop"},ht.propBlock=function(ie,Se,me){return ie=="}"?rt(me):ie=="word"?(tt="property","maybeprop"):me.context.type},ht.parens=function(ie,Se,me){return ie=="{"||ie=="}"?$t(ie,Se,me):ie==")"?rt(me):ie=="("?Fe(me,Se,"parens"):ie=="interpolation"?Fe(me,Se,"interpolation"):(ie=="word"&&$e(Se),"parens")},ht.pseudo=function(ie,Se,me){return ie=="meta"?"pseudo":ie=="word"?(tt="variable-3",me.context.type):et(ie,Se,me)},ht.documentTypes=function(ie,Se,me){return ie=="word"&&j.hasOwnProperty(Se.current())?(tt="tag",me.context.type):ht.atBlock(ie,Se,me)},ht.atBlock=function(ie,Se,me){if(ie=="(")return Fe(me,Se,"atBlock_parens");if(ie=="}"||ie==";")return $t(ie,Se,me);if(ie=="{")return rt(me)&&Fe(me,Se,Ve?"block":"top");if(ie=="interpolation")return Fe(me,Se,"interpolation");if(ie=="word"){var wt=Se.current().toLowerCase();wt=="only"||wt=="not"||wt=="and"||wt=="or"?tt="keyword":X.hasOwnProperty(wt)?tt="attribute":q.hasOwnProperty(wt)?tt="property":T.hasOwnProperty(wt)?tt="keyword":P.hasOwnProperty(wt)?tt="property":G.hasOwnProperty(wt)?tt=He?"string-2":"property":Ge.hasOwnProperty(wt)?tt="atom":Ae.hasOwnProperty(wt)?tt="keyword":tt="error"}return me.context.type},ht.atComponentBlock=function(ie,Se,me){return ie=="}"?$t(ie,Se,me):ie=="{"?rt(me)&&Fe(me,Se,Ve?"block":"top",!1):(ie=="word"&&(tt="error"),me.context.type)},ht.atBlock_parens=function(ie,Se,me){return ie==")"?rt(me):ie=="{"||ie=="}"?$t(ie,Se,me,2):ht.atBlock(ie,Se,me)},ht.restricted_atBlock_before=function(ie,Se,me){return ie=="{"?Fe(me,Se,"restricted_atBlock"):ie=="word"&&me.stateArg=="@counter-style"?(tt="variable","restricted_atBlock_before"):et(ie,Se,me)},ht.restricted_atBlock=function(ie,Se,me){return ie=="}"?(me.stateArg=null,rt(me)):ie=="word"?(me.stateArg=="@font-face"&&!z.hasOwnProperty(Se.current().toLowerCase())||me.stateArg=="@counter-style"&&!re.hasOwnProperty(Se.current().toLowerCase())?tt="error":tt="property","maybeprop"):"restricted_atBlock"},ht.keyframes=function(ie,Se,me){return ie=="word"?(tt="variable","keyframes"):ie=="{"?Fe(me,Se,"top"):et(ie,Se,me)},ht.at=function(ie,Se,me){return ie==";"?rt(me):ie=="{"||ie=="}"?$t(ie,Se,me):(ie=="word"?tt="tag":ie=="hash"&&(tt="builtin"),"at")},ht.interpolation=function(ie,Se,me){return ie=="}"?rt(me):ie=="{"||ie==";"?$t(ie,Se,me):(ie=="word"?tt="variable":ie!="variable"&&ie!="("&&ie!=")"&&(tt="error"),"interpolation")},{startState:function(ie){return{tokenize:null,state:Ce?"block":"top",stateArg:null,context:new vt(Ce?"block":"top",ie||0,null)}},token:function(ie,Se){if(!Se.tokenize&&ie.eatSpace())return null;var me=(Se.tokenize||Ht)(ie,Se);return me&&typeof me=="object"&&(Be=me[1],me=me[0]),tt=me,Be!="comment"&&(Se.state=ht[Se.state](Be,ie,Se)),tt},indent:function(ie,Se){var me=ie.context,wt=Se&&Se.charAt(0),Je=me.indent;return me.type=="prop"&&(wt=="}"||wt==")")&&(me=me.prev),me.prev&&(wt=="}"&&(me.type=="block"||me.type=="top"||me.type=="interpolation"||me.type=="restricted_atBlock")?(me=me.prev,Je=me.indent):(wt==")"&&(me.type=="parens"||me.type=="atBlock_parens")||wt=="{"&&(me.type=="at"||me.type=="atBlock"))&&(Je=Math.max(0,me.indent-se))),Je},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:ke,fold:"brace"}});function g(Le){for(var oe={},Ce=0;Ce<Le.length;++Ce)oe[Le[Ce].toLowerCase()]=!0;return oe}var x=["domain","regexp","url","url-prefix"],b=g(x),C=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],N=g(C),S=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],L=g(S),R=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],O=g(R),A=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],Y=g(A),ne=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],H=g(ne),ae=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],D=g(ae),U=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],F=g(U),K=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],V=g(K),ge=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],ue=g(ge),we=x.concat(C).concat(S).concat(R).concat(A).concat(ne).concat(K).concat(ge);d.registerHelper("hintWords","css",we);function Ue(Le,oe){for(var Ce=!1,se;(se=Le.next())!=null;){if(Ce&&se=="/"){oe.tokenize=null;break}Ce=se=="*"}return["comment","comment"]}d.defineMIME("text/css",{documentTypes:b,mediaTypes:N,mediaFeatures:L,mediaValueKeywords:O,propertyKeywords:Y,nonStandardPropertyKeywords:H,fontProperties:D,counterDescriptors:F,colorKeywords:V,valueKeywords:ue,tokenHooks:{"/":function(Le,oe){return Le.eat("*")?(oe.tokenize=Ue,Ue(Le,oe)):!1}},name:"css"}),d.defineMIME("text/x-scss",{mediaTypes:N,mediaFeatures:L,mediaValueKeywords:O,propertyKeywords:Y,nonStandardPropertyKeywords:H,colorKeywords:V,valueKeywords:ue,fontProperties:D,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(Le,oe){return Le.eat("/")?(Le.skipToEnd(),["comment","comment"]):Le.eat("*")?(oe.tokenize=Ue,Ue(Le,oe)):["operator","operator"]},":":function(Le){return Le.match(/^\s*\{/,!1)?[null,null]:!1},$:function(Le){return Le.match(/^[\w-]+/),Le.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(Le){return Le.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),d.defineMIME("text/x-less",{mediaTypes:N,mediaFeatures:L,mediaValueKeywords:O,propertyKeywords:Y,nonStandardPropertyKeywords:H,colorKeywords:V,valueKeywords:ue,fontProperties:D,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(Le,oe){return Le.eat("/")?(Le.skipToEnd(),["comment","comment"]):Le.eat("*")?(oe.tokenize=Ue,Ue(Le,oe)):["operator","operator"]},"@":function(Le){return Le.eat("{")?[null,"interpolation"]:Le.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)?!1:(Le.eatWhile(/[\w\\\-]/),Le.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),d.defineMIME("text/x-gss",{documentTypes:b,mediaTypes:N,mediaFeatures:L,propertyKeywords:Y,nonStandardPropertyKeywords:H,fontProperties:D,counterDescriptors:F,colorKeywords:V,valueKeywords:ue,supportsAtComponent:!0,tokenHooks:{"/":function(Le,oe){return Le.eat("*")?(oe.tokenize=Ue,Ue(Le,oe)):!1}},name:"css",helperType:"gss"})})})()),xf.exports}gm();var wf={exports:{}},kf;function xx(){return kf||(kf=1,(function(l,c){(function(d){d(ss(),mm(),fm(),gm())})(function(d){var g={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function x(O,A,Y){var ne=O.current(),H=ne.search(A);return H>-1?O.backUp(ne.length-H):ne.match(/<\/?$/)&&(O.backUp(ne.length),O.match(A,!1)||O.match(ne)),Y}var b={};function C(O){var A=b[O];return A||(b[O]=new RegExp("\\s+"+O+`\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))}function N(O,A){var Y=O.match(C(A));return Y?/^\s*(.*?)\s*$/.exec(Y[2])[1]:""}function S(O,A){return new RegExp((A?"^":"")+"</\\s*"+O+"\\s*>","i")}function L(O,A){for(var Y in O)for(var ne=A[Y]||(A[Y]=[]),H=O[Y],ae=H.length-1;ae>=0;ae--)ne.unshift(H[ae])}function R(O,A){for(var Y=0;Y<O.length;Y++){var ne=O[Y];if(!ne[0]||ne[1].test(N(A,ne[0])))return ne[2]}}d.defineMode("htmlmixed",function(O,A){var Y=d.getMode(O,{name:"xml",htmlMode:!0,multilineTagIndentFactor:A.multilineTagIndentFactor,multilineTagIndentPastTag:A.multilineTagIndentPastTag,allowMissingTagName:A.allowMissingTagName}),ne={},H=A&&A.tags,ae=A&&A.scriptTypes;if(L(g,ne),H&&L(H,ne),ae)for(var D=ae.length-1;D>=0;D--)ne.script.unshift(["type",ae[D].matches,ae[D].mode]);function U(F,K){var V=Y.token(F,K.htmlState),ge=/\btag\b/.test(V),ue;if(ge&&!/[<>\s\/]/.test(F.current())&&(ue=K.htmlState.tagName&&K.htmlState.tagName.toLowerCase())&&ne.hasOwnProperty(ue))K.inTag=ue+" ";else if(K.inTag&&ge&&/>$/.test(F.current())){var we=/^([\S]+) (.*)/.exec(K.inTag);K.inTag=null;var Ue=F.current()==">"&&R(ne[we[1]],we[2]),Le=d.getMode(O,Ue),oe=S(we[1],!0),Ce=S(we[1],!1);K.token=function(se,ye){return se.match(oe,!1)?(ye.token=U,ye.localState=ye.localMode=null,null):x(se,Ce,ye.localMode.token(se,ye.localState))},K.localMode=Le,K.localState=d.startState(Le,Y.indent(K.htmlState,"",""))}else K.inTag&&(K.inTag+=F.current(),F.eol()&&(K.inTag+=" "));return V}return{startState:function(){var F=d.startState(Y);return{token:U,inTag:null,localMode:null,localState:null,htmlState:F}},copyState:function(F){var K;return F.localState&&(K=d.copyState(F.localMode,F.localState)),{token:F.token,inTag:F.inTag,localMode:F.localMode,localState:K,htmlState:d.copyState(Y,F.htmlState)}},token:function(F,K){return K.token(F,K)},indent:function(F,K,V){return!F.localMode||/^\s*<\//.test(K)?Y.indent(F.htmlState,K,V):F.localMode.indent?F.localMode.indent(F.localState,K,V):d.Pass},innerMode:function(F){return{state:F.localState||F.htmlState,mode:F.localMode||Y}}}},"xml","javascript","css"),d.defineMIME("text/html","htmlmixed")})})()),wf.exports}xx();var Sf={exports:{}},_f;function bx(){return _f||(_f=1,(function(l,c){(function(d){d(ss())})(function(d){var g={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},x=d.Pos;d.defineOption("autoCloseBrackets",!1,function(D,U,F){F&&F!=d.Init&&(D.removeKeyMap(C),D.state.closeBrackets=null),U&&(N(b(U,"pairs")),D.state.closeBrackets=U,D.addKeyMap(C))});function b(D,U){return U=="pairs"&&typeof D=="string"?D:typeof D=="object"&&D[U]!=null?D[U]:g[U]}var C={Backspace:R,Enter:O};function N(D){for(var U=0;U<D.length;U++){var F=D.charAt(U),K="'"+F+"'";C[K]||(C[K]=S(F))}}N(g.pairs+"`");function S(D){return function(U){return ne(U,D)}}function L(D){var U=D.state.closeBrackets;if(!U||U.override)return U;var F=D.getModeAt(D.getCursor());return F.closeBrackets||U}function R(D){var U=L(D);if(!U||D.getOption("disableInput"))return d.Pass;for(var F=b(U,"pairs"),K=D.listSelections(),V=0;V<K.length;V++){if(!K[V].empty())return d.Pass;var ge=H(D,K[V].head);if(!ge||F.indexOf(ge)%2!=0)return d.Pass}for(var V=K.length-1;V>=0;V--){var ue=K[V].head;D.replaceRange("",x(ue.line,ue.ch-1),x(ue.line,ue.ch+1),"+delete")}}function O(D){var U=L(D),F=U&&b(U,"explode");if(!F||D.getOption("disableInput"))return d.Pass;for(var K=D.listSelections(),V=0;V<K.length;V++){if(!K[V].empty())return d.Pass;var ge=H(D,K[V].head);if(!ge||F.indexOf(ge)%2!=0)return d.Pass}D.operation(function(){var ue=D.lineSeparator()||`
`;D.replaceSelection(ue+ue,null),A(D,-1),K=D.listSelections();for(var we=0;we<K.length;we++){var Ue=K[we].head.line;D.indentLine(Ue,null,!0),D.indentLine(Ue+1,null,!0)}})}function A(D,U){for(var F=[],K=D.listSelections(),V=0,ge=0;ge<K.length;ge++){var ue=K[ge];ue.head==D.getCursor()&&(V=ge);var we=ue.head.ch||U>0?{line:ue.head.line,ch:ue.head.ch+U}:{line:ue.head.line-1};F.push({anchor:we,head:we})}D.setSelections(F,V)}function Y(D){var U=d.cmpPos(D.anchor,D.head)>0;return{anchor:new x(D.anchor.line,D.anchor.ch+(U?-1:1)),head:new x(D.head.line,D.head.ch+(U?1:-1))}}function ne(D,U){var F=L(D);if(!F||D.getOption("disableInput"))return d.Pass;var K=b(F,"pairs"),V=K.indexOf(U);if(V==-1)return d.Pass;for(var ge=b(F,"closeBefore"),ue=b(F,"triples"),we=K.charAt(V+1)==U,Ue=D.listSelections(),Le=V%2==0,oe,Ce=0;Ce<Ue.length;Ce++){var se=Ue[Ce],ye=se.head,j,X=D.getRange(ye,x(ye.line,ye.ch+1));if(Le&&!se.empty())j="surround";else if((we||!Le)&&X==U)we&&ae(D,ye)?j="both":ue.indexOf(U)>=0&&D.getRange(ye,x(ye.line,ye.ch+3))==U+U+U?j="skipThree":j="skip";else if(we&&ye.ch>1&&ue.indexOf(U)>=0&&D.getRange(x(ye.line,ye.ch-2),ye)==U+U){if(ye.ch>2&&/\bstring/.test(D.getTokenTypeAt(x(ye.line,ye.ch-2))))return d.Pass;j="addFour"}else if(we){var q=ye.ch==0?" ":D.getRange(x(ye.line,ye.ch-1),ye);if(!d.isWordChar(X)&&q!=U&&!d.isWordChar(q))j="both";else return d.Pass}else if(Le&&(X.length===0||/\s/.test(X)||ge.indexOf(X)>-1))j="both";else return d.Pass;if(!oe)oe=j;else if(oe!=j)return d.Pass}var T=V%2?K.charAt(V-1):U,P=V%2?U:K.charAt(V+1);D.operation(function(){if(oe=="skip")A(D,1);else if(oe=="skipThree")A(D,3);else if(oe=="surround"){for(var G=D.getSelections(),z=0;z<G.length;z++)G[z]=T+G[z]+P;D.replaceSelections(G,"around"),G=D.listSelections().slice();for(var z=0;z<G.length;z++)G[z]=Y(G[z]);D.setSelections(G)}else oe=="both"?(D.replaceSelection(T+P,null),D.triggerElectric(T+P),A(D,-1)):oe=="addFour"&&(D.replaceSelection(T+T+T+T,"before"),A(D,1))})}function H(D,U){var F=D.getRange(x(U.line,U.ch-1),x(U.line,U.ch+1));return F.length==2?F:null}function ae(D,U){var F=D.getTokenAt(x(U.line,U.ch+1));return/\bstring/.test(F.type)&&F.start==U.ch&&(U.ch==0||!/\bstring/.test(D.getTokenTypeAt(U)))}})})()),Sf.exports}bx();var Cf={exports:{}},Tf;function wx(){return Tf||(Tf=1,(function(l,c){(function(d){d(ss())})(function(d){var g=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),x=d.Pos,b={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function C(A){return A&&A.bracketRegex||/[(){}[\]]/}function N(A,Y,ne){var H=A.getLineHandle(Y.line),ae=Y.ch-1,D=ne&&ne.afterCursor;D==null&&(D=/(^| )cm-fat-cursor($| )/.test(A.getWrapperElement().className));var U=C(ne),F=!D&&ae>=0&&U.test(H.text.charAt(ae))&&b[H.text.charAt(ae)]||U.test(H.text.charAt(ae+1))&&b[H.text.charAt(++ae)];if(!F)return null;var K=F.charAt(1)==">"?1:-1;if(ne&&ne.strict&&K>0!=(ae==Y.ch))return null;var V=A.getTokenTypeAt(x(Y.line,ae+1)),ge=S(A,x(Y.line,ae+(K>0?1:0)),K,V,ne);return ge==null?null:{from:x(Y.line,ae),to:ge&&ge.pos,match:ge&&ge.ch==F.charAt(0),forward:K>0}}function S(A,Y,ne,H,ae){for(var D=ae&&ae.maxScanLineLength||1e4,U=ae&&ae.maxScanLines||1e3,F=[],K=C(ae),V=ne>0?Math.min(Y.line+U,A.lastLine()+1):Math.max(A.firstLine()-1,Y.line-U),ge=Y.line;ge!=V;ge+=ne){var ue=A.getLine(ge);if(ue){var we=ne>0?0:ue.length-1,Ue=ne>0?ue.length:-1;if(!(ue.length>D))for(ge==Y.line&&(we=Y.ch-(ne<0?1:0));we!=Ue;we+=ne){var Le=ue.charAt(we);if(K.test(Le)&&(H===void 0||(A.getTokenTypeAt(x(ge,we+1))||"")==(H||""))){var oe=b[Le];if(oe&&oe.charAt(1)==">"==ne>0)F.push(Le);else if(F.length)F.pop();else return{pos:x(ge,we),ch:Le}}}}}return ge-ne==(ne>0?A.lastLine():A.firstLine())?!1:null}function L(A,Y,ne){for(var H=A.state.matchBrackets.maxHighlightLineLength||1e3,ae=ne&&ne.highlightNonMatching,D=[],U=A.listSelections(),F=0;F<U.length;F++){var K=U[F].empty()&&N(A,U[F].head,ne);if(K&&(K.match||ae!==!1)&&A.getLine(K.from.line).length<=H){var V=K.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";D.push(A.markText(K.from,x(K.from.line,K.from.ch+1),{className:V})),K.to&&A.getLine(K.to.line).length<=H&&D.push(A.markText(K.to,x(K.to.line,K.to.ch+1),{className:V}))}}if(D.length){g&&A.state.focused&&A.focus();var ge=function(){A.operation(function(){for(var ue=0;ue<D.length;ue++)D[ue].clear()})};if(Y)setTimeout(ge,800);else return ge}}function R(A){A.operation(function(){A.state.matchBrackets.currentlyHighlighted&&(A.state.matchBrackets.currentlyHighlighted(),A.state.matchBrackets.currentlyHighlighted=null),A.state.matchBrackets.currentlyHighlighted=L(A,!1,A.state.matchBrackets)})}function O(A){A.state.matchBrackets&&A.state.matchBrackets.currentlyHighlighted&&(A.state.matchBrackets.currentlyHighlighted(),A.state.matchBrackets.currentlyHighlighted=null)}d.defineOption("matchBrackets",!1,function(A,Y,ne){ne&&ne!=d.Init&&(A.off("cursorActivity",R),A.off("focus",R),A.off("blur",O),O(A)),Y&&(A.state.matchBrackets=typeof Y=="object"?Y:{},A.on("cursorActivity",R),A.on("focus",R),A.on("blur",O))}),d.defineExtension("matchBrackets",function(){L(this,!0)}),d.defineExtension("findMatchingBracket",function(A,Y,ne){return(ne||typeof Y=="boolean")&&(ne?(ne.strict=Y,Y=ne):Y=Y?{strict:!0}:null),N(this,A,Y)}),d.defineExtension("scanForBracket",function(A,Y,ne,H){return S(this,A,Y,ne,H)})})})()),Cf.exports}wx();var Nf={exports:{}},jf;function kx(){return jf||(jf=1,(function(l,c){(function(d){d(ss())})(function(d){var g="CodeMirror-hint",x="CodeMirror-hint-active";d.showHint=function(D,U,F){if(!U)return D.showHint(F);F&&F.async&&(U.async=!0);var K={hint:U};if(F)for(var V in F)K[V]=F[V];return D.showHint(K)},d.defineExtension("showHint",function(D){D=S(this,this.getCursor("start"),D);var U=this.listSelections();if(!(U.length>1)){if(this.somethingSelected()){if(!D.hint.supportsSelection)return;for(var F=0;F<U.length;F++)if(U[F].head.line!=U[F].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var K=this.state.completionActive=new b(this,D);K.options.hint&&(d.signal(this,"startCompletion",this),K.update(!0))}}),d.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function b(D,U){if(this.cm=D,this.options=U,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var F=this;D.on("cursorActivity",this.activityFunc=function(){F.cursorActivity()})}}var C=window.requestAnimationFrame||function(D){return setTimeout(D,1e3/60)},N=window.cancelAnimationFrame||clearTimeout;b.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&d.signal(this.data,"close"),this.widget&&this.widget.close(),d.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(D,U){var F=D.list[U],K=this;this.cm.operation(function(){F.hint?F.hint(K.cm,D,F):K.cm.replaceRange(L(F),F.from||D.from,F.to||D.to,"complete"),d.signal(D,"pick",F),K.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(N(this.debounce),this.debounce=0);var D=this.startPos;this.data&&(D=this.data.from);var U=this.cm.getCursor(),F=this.cm.getLine(U.line);if(U.line!=this.startPos.line||F.length-U.ch!=this.startLen-this.startPos.ch||U.ch<D.ch||this.cm.somethingSelected()||!U.ch||this.options.closeCharacters.test(F.charAt(U.ch-1)))this.close();else{var K=this;this.debounce=C(function(){K.update()}),this.widget&&this.widget.disable()}},update:function(D){if(this.tick!=null){var U=this,F=++this.tick;ne(this.options.hint,this.cm,this.options,function(K){U.tick==F&&U.finishUpdate(K,D)})}},finishUpdate:function(D,U){this.data&&d.signal(this.data,"update");var F=this.widget&&this.widget.picked||U&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=D,D&&D.list.length&&(F&&D.list.length==1?this.pick(D,0):(this.widget=new A(this,D),d.signal(D,"shown")))}};function S(D,U,F){var K=D.options.hintOptions,V={};for(var ge in ae)V[ge]=ae[ge];if(K)for(var ge in K)K[ge]!==void 0&&(V[ge]=K[ge]);if(F)for(var ge in F)F[ge]!==void 0&&(V[ge]=F[ge]);return V.hint.resolve&&(V.hint=V.hint.resolve(D,U)),V}function L(D){return typeof D=="string"?D:D.text}function R(D,U){var F={Up:function(){U.moveFocus(-1)},Down:function(){U.moveFocus(1)},PageUp:function(){U.moveFocus(-U.menuSize()+1,!0)},PageDown:function(){U.moveFocus(U.menuSize()-1,!0)},Home:function(){U.setFocus(0)},End:function(){U.setFocus(U.length-1)},Enter:U.pick,Tab:U.pick,Esc:U.close},K=/Mac/.test(navigator.platform);K&&(F["Ctrl-P"]=function(){U.moveFocus(-1)},F["Ctrl-N"]=function(){U.moveFocus(1)});var V=D.options.customKeys,ge=V?{}:F;function ue(Le,oe){var Ce;typeof oe!="string"?Ce=function(se){return oe(se,U)}:F.hasOwnProperty(oe)?Ce=F[oe]:Ce=oe,ge[Le]=Ce}if(V)for(var we in V)V.hasOwnProperty(we)&&ue(we,V[we]);var Ue=D.options.extraKeys;if(Ue)for(var we in Ue)Ue.hasOwnProperty(we)&&ue(we,Ue[we]);return ge}function O(D,U){for(;U&&U!=D;){if(U.nodeName.toUpperCase()==="LI"&&U.parentNode==D)return U;U=U.parentNode}}function A(D,U){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=D,this.data=U,this.picked=!1;var F=this,K=D.cm,V=K.getInputField().ownerDocument,ge=V.defaultView||V.parentWindow,ue=this.hints=V.createElement("ul");ue.setAttribute("role","listbox"),ue.setAttribute("aria-expanded","true"),ue.id=this.id;var we=D.cm.options.theme;ue.className="CodeMirror-hints "+we,this.selectedHint=U.selectedHint||0;for(var Ue=U.list,Le=0;Le<Ue.length;++Le){var oe=ue.appendChild(V.createElement("li")),Ce=Ue[Le],se=g+(Le!=this.selectedHint?"":" "+x);Ce.className!=null&&(se=Ce.className+" "+se),oe.className=se,Le==this.selectedHint&&oe.setAttribute("aria-selected","true"),oe.id=this.id+"-"+Le,oe.setAttribute("role","option"),Ce.render?Ce.render(oe,U,Ce):oe.appendChild(V.createTextNode(Ce.displayText||L(Ce))),oe.hintId=Le}var ye=D.options.container||V.body,j=K.cursorCoords(D.options.alignWithWord?U.from:null),X=j.left,q=j.bottom,T=!0,P=0,G=0;if(ye!==V.body){var z=["absolute","relative","fixed"].indexOf(ge.getComputedStyle(ye).position)!==-1,re=z?ye:ye.offsetParent,Ae=re.getBoundingClientRect(),Ge=V.body.getBoundingClientRect();P=Ae.left-Ge.left-re.scrollLeft,G=Ae.top-Ge.top-re.scrollTop}ue.style.left=X-P+"px",ue.style.top=q-G+"px";var Ve=ge.innerWidth||Math.max(V.body.offsetWidth,V.documentElement.offsetWidth),ke=ge.innerHeight||Math.max(V.body.offsetHeight,V.documentElement.offsetHeight);ye.appendChild(ue),K.getInputField().setAttribute("aria-autocomplete","list"),K.getInputField().setAttribute("aria-owns",this.id),K.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var Re=D.options.moveOnOverlap?ue.getBoundingClientRect():new DOMRect,He=D.options.paddingForScrollbar?ue.scrollHeight>ue.clientHeight+1:!1,Be;setTimeout(function(){Be=K.getScrollInfo()});var tt=Re.bottom-ke;if(tt>0){var qe=Re.bottom-Re.top,Ht=Re.top-(j.bottom-j.top)-2;ke-Re.top<Ht?(qe>Ht&&(ue.style.height=(qe=Ht)+"px"),ue.style.top=(q=j.top-qe)-G+"px",T=!1):ue.style.height=ke-Re.top-2+"px"}var Gt=Re.right-Ve;if(He&&(Gt+=K.display.nativeBarWidth),Gt>0&&(Re.right-Re.left>Ve&&(ue.style.width=Ve-5+"px",Gt-=Re.right-Re.left-Ve),ue.style.left=(X=Math.max(j.left-Gt-P,0))+"px"),He)for(var St=ue.firstChild;St;St=St.nextSibling)St.style.paddingRight=K.display.nativeBarWidth+"px";if(K.addKeyMap(this.keyMap=R(D,{moveFocus:function(rt,et){F.changeActive(F.selectedHint+rt,et)},setFocus:function(rt){F.changeActive(rt)},menuSize:function(){return F.screenAmount()},length:Ue.length,close:function(){D.close()},pick:function(){F.pick()},data:U})),D.options.closeOnUnfocus){var vt;K.on("blur",this.onBlur=function(){vt=setTimeout(function(){D.close()},100)}),K.on("focus",this.onFocus=function(){clearTimeout(vt)})}K.on("scroll",this.onScroll=function(){var rt=K.getScrollInfo(),et=K.getWrapperElement().getBoundingClientRect();Be||(Be=K.getScrollInfo());var $t=q+Be.top-rt.top,$e=$t-(ge.pageYOffset||(V.documentElement||V.body).scrollTop);if(T||($e+=ue.offsetHeight),$e<=et.top||$e>=et.bottom)return D.close();ue.style.top=$t+"px",ue.style.left=X+Be.left-rt.left+"px"}),d.on(ue,"dblclick",function(rt){var et=O(ue,rt.target||rt.srcElement);et&&et.hintId!=null&&(F.changeActive(et.hintId),F.pick())}),d.on(ue,"click",function(rt){var et=O(ue,rt.target||rt.srcElement);et&&et.hintId!=null&&(F.changeActive(et.hintId),D.options.completeOnSingleClick&&F.pick())}),d.on(ue,"mousedown",function(){setTimeout(function(){K.focus()},20)});var Fe=this.getSelectedHintRange();return(Fe.from!==0||Fe.to!==0)&&this.scrollToActive(),d.signal(U,"select",Ue[this.selectedHint],ue.childNodes[this.selectedHint]),!0}A.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var D=this.completion.cm.getInputField();D.removeAttribute("aria-activedescendant"),D.removeAttribute("aria-owns");var U=this.completion.cm;this.completion.options.closeOnUnfocus&&(U.off("blur",this.onBlur),U.off("focus",this.onFocus)),U.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var D=this;this.keyMap={Enter:function(){D.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(D,U){if(D>=this.data.list.length?D=U?this.data.list.length-1:0:D<0&&(D=U?0:this.data.list.length-1),this.selectedHint!=D){var F=this.hints.childNodes[this.selectedHint];F&&(F.className=F.className.replace(" "+x,""),F.removeAttribute("aria-selected")),F=this.hints.childNodes[this.selectedHint=D],F.className+=" "+x,F.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",F.id),this.scrollToActive(),d.signal(this.data,"select",this.data.list[this.selectedHint],F)}},scrollToActive:function(){var D=this.getSelectedHintRange(),U=this.hints.childNodes[D.from],F=this.hints.childNodes[D.to],K=this.hints.firstChild;U.offsetTop<this.hints.scrollTop?this.hints.scrollTop=U.offsetTop-K.offsetTop:F.offsetTop+F.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=F.offsetTop+F.offsetHeight-this.hints.clientHeight+K.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var D=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-D),to:Math.min(this.data.list.length-1,this.selectedHint+D)}}};function Y(D,U){if(!D.somethingSelected())return U;for(var F=[],K=0;K<U.length;K++)U[K].supportsSelection&&F.push(U[K]);return F}function ne(D,U,F,K){if(D.async)D(U,K,F);else{var V=D(U,F);V&&V.then?V.then(K):K(V)}}function H(D,U){var F=D.getHelpers(U,"hint"),K;if(F.length){var V=function(ge,ue,we){var Ue=Y(ge,F);function Le(oe){if(oe==Ue.length)return ue(null);ne(Ue[oe],ge,we,function(Ce){Ce&&Ce.list.length>0?ue(Ce):Le(oe+1)})}Le(0)};return V.async=!0,V.supportsSelection=!0,V}else return(K=D.getHelper(D.getCursor(),"hintWords"))?function(ge){return d.hint.fromList(ge,{words:K})}:d.hint.anyword?function(ge,ue){return d.hint.anyword(ge,ue)}:function(){}}d.registerHelper("hint","auto",{resolve:H}),d.registerHelper("hint","fromList",function(D,U){var F=D.getCursor(),K=D.getTokenAt(F),V,ge=d.Pos(F.line,K.start),ue=F;K.start<F.ch&&/\w/.test(K.string.charAt(F.ch-K.start-1))?V=K.string.substr(0,F.ch-K.start):(V="",ge=F);for(var we=[],Ue=0;Ue<U.words.length;Ue++){var Le=U.words[Ue];Le.slice(0,V.length)==V&&we.push(Le)}if(we.length)return{list:we,from:ge,to:ue}}),d.commands.autocomplete=d.showHint;var ae={hint:d.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};d.defineOption("hintOptions",null)})})()),Nf.exports}kx();var Ef={exports:{}},Lf;function Sx(){return Lf||(Lf=1,(function(l,c){(function(d){d(ss())})(function(d){var g=/[\w$]+/,x=500;d.registerHelper("hint","anyword",function(b,C){for(var N=C&&C.word||g,S=C&&C.range||x,L=b.getCursor(),R=b.getLine(L.line),O=L.ch,A=O;A&&N.test(R.charAt(A-1));)--A;for(var Y=A!=O&&R.slice(A,O),ne=C&&C.list||[],H={},ae=new RegExp(N.source,"g"),D=-1;D<=1;D+=2)for(var U=L.line,F=Math.min(Math.max(U+D*S,b.firstLine()),b.lastLine())+D;U!=F;U+=D)for(var K=b.getLine(U),V;V=ae.exec(K);)U==L.line&&V[0]===Y||(!Y||V[0].lastIndexOf(Y,0)==0)&&!Object.prototype.hasOwnProperty.call(H,V[0])&&(H[V[0]]=!0,ne.push(V[0]));return{list:ne,from:d.Pos(L.line,A),to:d.Pos(L.line,O)}})})})()),Ef.exports}Sx();function _x(l){return l==="python"?"python":l==="csharp"?"text/x-csharp":l==="java"?"text/x-java":l==="jsx"?{name:"javascript",jsx:!0}:l==="javascript"?"javascript":l==="html"?"htmlmixed":l==="css"?"css":"text/plain"}function Cx({value:l,onChange:c,language:d}){const g=Oe.useRef(null),x=Oe.useRef(null),b=Oe.useRef(c);return b.current=c,Oe.useEffect(()=>{const C=cf.fromTextArea(g.current,{mode:_x(d),lineNumbers:!0,lineWrapping:!1,indentUnit:4,tabSize:4,indentWithTabs:!1,smartIndent:!0,electricChars:!0,autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,extraKeys:{Tab(S){if(S.somethingSelected())S.execCommand("indentMore");else{const L=S.getOption("indentUnit")-S.getCursor().ch%S.getOption("indentUnit");S.replaceSelection(" ".repeat(L),"end")}},"Shift-Tab":S=>S.execCommand("indentLess"),"Ctrl-Space":S=>S.showHint({hint:cf.hint.anyword,completeSingle:!1})}});C.getInputField().setAttribute("aria-label","Code editor"),C.on("change",S=>{var L;return(L=b.current)==null?void 0:L.call(b,S.getValue())}),x.current=C;const N=typeof ResizeObserver<"u"?new ResizeObserver(()=>C.refresh()):null;return N==null||N.observe(C.getWrapperElement()),()=>{N==null||N.disconnect(),C.toTextArea(),x.current=null}},[d]),Oe.useEffect(()=>{const C=x.current;if(C&&C.getValue()!==l){const N=C.getCursor();C.setValue(l??""),C.setCursor(N)}},[l]),p.jsx("div",{className:"code-editor-wrap",children:p.jsx("textarea",{ref:g,"aria-label":"Code editor",defaultValue:l,spellCheck:!1})})}const dd=l=>String(l??"").replace(/\r\n/g,`
`).replace(/\n$/,"");function Tx(l){const c=Array.isArray(l)?l:[];return{passed:c.filter(d=>d.passed===!0).length,total:c.length}}function Pf(l,c){const d=String(l||"").split(/\r?\n/).find(x=>x.startsWith("PUBLIC_CHECK_RESULTS="));if(!d)throw new Error("Python returned no example-check results. See Console for errors.");const g=JSON.parse(d.slice(21));if(!Array.isArray(g)||g.length!==c.length)throw new Error("Python did not finish every published example.");return c.map((x,b)=>({call:x.call||"Example "+(b+1),expected:String(x.expected??""),received:String(g[b].actual??""),error:String(g[b].error||""),passed:g[b].ok===!0}))}function Nx(l,c){return c.map((d,g)=>{var x,b,C,N;return{call:"main("+JSON.stringify(d.args||[])+")",expected:dd(d.expected),received:dd((x=l[g])==null?void 0:x.stdout),error:String(((b=l[g])==null?void 0:b.diagnostics)||((C=l[g])==null?void 0:C.stderr)||""),passed:((N=l[g])==null?void 0:N.success)===!0&&dd(l[g].stdout)===dd(d.expected)}})}function jx(l,c,d){return d(l,c.length).map(x=>({call:c[x.index].call,expected:x.expected,received:x.received,error:x.error,passed:x.passed}))}function Ex(l){return(l||[]).map((c,d)=>({call:String(c.call||c.label||"Check "+(d+1)),expected:String(c.expected??"Requirement met"),received:String(c.received??(c.pass===!0||c.passed===!0?"Requirement met":"Not yet met")),error:String(c.error||""),passed:c.pass===!0||c.passed===!0}))}function Lx(l){var c;return((c=/^\s*(?:async\s+)?def\s+([A-Za-z_]\w*)\s*\(/m.exec(l))==null?void 0:c[1])||null}function nc(l,c){var d,g,x;return c==="python"?Lx(l):c==="javascript"?((d=/(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:d[1])||null:c==="csharp"?((g=/\b(?:public\s+)?static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:g[1])||null:c==="java"&&((x=/\bpublic\s+static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:x[1])||null}const Px=nc;function qp(l,c,d=null){if(typeof l=="string")return JSON.stringify(l);if(l===null)return"null";if(typeof l=="boolean")return String(l);if(typeof l=="number")return Number.isFinite(l)?String(l):"0";if(Array.isArray(l)){const g=l.every(S=>Number.isInteger(S)),x=l.every(S=>typeof S=="string"),b=l.every(S=>typeof S=="boolean"),C=l.length===0&&d?d:g?"int":x?"string":b?"bool":"double";return"new "+(c==="java"?C==="string"?"String":C==="bool"?"boolean":C:C)+"[]{"+l.map(S=>qp(S,c)).join(",")+"}"}throw new Error("This example uses a data type unsupported by the browser checker.")}function $p(l,c,d){var C;const g=nc(d,c)||nc(l.starter||"",c);if(!g)throw new Error("The checker could not find a function declaration.");const x=l.challengeExamples||[],b=(((C=x[0])==null?void 0:C.input)||[]).map((N,S)=>{const L=x.map(R=>{var O;return(O=R.input)==null?void 0:O[S]}).find(R=>Array.isArray(R)&&R.length>0);return Array.isArray(L)?typeof L[0]=="boolean"?"bool":typeof L[0]=="string"?"string":Number.isInteger(L[0])?"int":"double":null});return x.map(N=>({...N,call:g+"("+(N.input||[]).map((S,L)=>qp(S,c,b[L])).join(", ")+")",expectedLiteral:qp(N.expected,c),expected:String(N.expected)}))}function Ax(l,c,d=!0){const g=nc(l,"python")||nc(c.starter||"","python");if(!g)throw new Error("Define the challenge function before running it.");const x=c.challengeExamples||[];return["import json as __json, io as __io, contextlib as __ctx","__source = "+JSON.stringify(l),"__cases = __json.loads("+JSON.stringify(JSON.stringify(d?x:x.slice(0,1)))+")","__results = []","for __case in __cases:","    try:",'        __env = {"__name__":"student"}','        with __ctx.redirect_stdout(__io.StringIO()): exec(compile(__source,"main.py","exec"),__env)',"        __actual = __env["+JSON.stringify(g)+'](*__case["input"])','        __ok = type(__actual) is type(__case["expected"]) and __actual == __case["expected"]','        __results.append({"ok":__ok,"actual":repr(__actual)[:300],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","error":type(__error).__name__+": "+str(__error)[:300]})','print("PUBLIC_CHECK_RESULTS="+__json.dumps(__results))'].join(`
`)}function Rx(l,c){const d=$p(c,"java",l);if(!d.length)throw new Error("No visible examples are available.");const g=d.map((x,b)=>`try{Object actual=Solution.${x.call}; Object expected=${x.expectedLiteral}; boolean ok=java.util.Objects.deepEquals(actual,expected); String received=java.util.Arrays.deepToString(new Object[]{actual}); received=received.substring(1,received.length()-1); System.out.println("PLAYGROUND_CASE:${b}:"+(ok?"1":"0")+":"+received);}catch(Throwable error){System.out.println("PLAYGROUND_CASE:${b}:0:ERROR "+error.getClass().getSimpleName()+" "+error.getMessage());}`);return l+`
class __PlaygroundPracticeChecks {public static void main(String[] args) {`+g.join(`
`)+"}}"}function Ix(l,c){const d=String(l||"").split(/\r?\n/).filter(g=>g.startsWith("PLAYGROUND_CASE:"));if(d.length!==c.length)throw new Error("Java did not return all published examples.");return c.map((g,x)=>{const b=d[x],C=/^PLAYGROUND_CASE:(\d+):([01]):([\s\S]*)$/.exec(b);if(!C||Number(C[1])!==x)throw Error("Java returned invalid check data.");return{call:g.call,expected:g.expected,received:C[3],passed:C[2]==="1",error:C[3].startsWith("ERROR ")?C[3]:""}})}function Ox({text:l="",checksText:c="",checkRows:d=null,points:g=null,language:x,activeTab:b,onTabChange:C,previewEnabled:N=!1,previewDoc:S="",previewRef:L}){const R=N?["Preview","Console","Checks"]:["Console","Checks"],O=Array.isArray(d),{passed:A,total:Y}=Tx(d),ne=Number.isFinite(Number(g))&&g!==null&&Y?Number(g)*A/Y:null;return p.jsxs("section",{className:"console-pane","aria-label":"Workspace output",children:[p.jsxs("div",{className:"console-heading",children:[p.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Output views",children:R.map(H=>p.jsxs("button",{type:"button",role:"tab","aria-selected":b===H,className:b===H?"active":"",onClick:()=>C(H),children:[H==="Console"&&p.jsx(cy,{size:14}),H]},H))}),p.jsx("span",{children:"Practice · no submissions"})]}),["html","css","javascript","jsx"].includes(x)&&p.jsx("div",{className:"console-preview",hidden:!N||b!=="Preview",children:p.jsx("iframe",{ref:L,title:"Live student code preview",className:"live-preview-frame",sandbox:"allow-scripts allow-forms",srcDoc:S||"<p>Choose Run to preview your code.</p>"})}),b==="Checks"?p.jsx("div",{className:"practice-check-content",role:"tabpanel","aria-label":"Check feedback",children:O?p.jsxs(p.Fragment,{children:[p.jsxs("p",{className:"check-summary",children:["Checks ",p.jsxs("strong",{children:[A," of ",Y," passing"]})]}),p.jsx("p",{className:"check-next",children:A===Y?"All published practice checks passed.":"Revise your code, then check again."}),p.jsx("div",{className:"practice-check-cards",children:d.map((H,ae)=>p.jsxs("article",{className:"practice-check-card "+(H.passed?"passed":"needs-revision"),children:[p.jsxs("header",{children:[p.jsx("code",{children:H.call||"Example "+(ae+1)}),p.jsx("span",{children:H.passed?"Pass":"Review"})]}),p.jsxs("dl",{children:[p.jsx("dt",{children:"Expected"}),p.jsx("dd",{children:p.jsx("pre",{children:H.expected??""})}),p.jsx("dt",{children:H.error?"Error":"Received"}),p.jsx("dd",{children:p.jsx("pre",{children:H.error||H.received||"None"})})]})]},ae))}),ne!==null&&p.jsxs("p",{className:"check-practice-score",children:["Public-check score: ",Number(ne.toFixed(2)),"/",g," practice points · ",A,"/",Y," examples passed."]}),p.jsx("p",{className:"check-disclaimer",children:"Public examples only. These results do not award grades, completion, or earned points."})]}):p.jsx("pre",{className:"practice-check-message",children:c})}):b==="Console"?p.jsx("pre",{role:"tabpanel","aria-label":"Console output",children:l}):null]})}const Mx="PUBLIC_CHECK_RESULTS=";function Dx(l,c){const d=Array.isArray(l==null?void 0:l.cases)?l.cases:[],g=JSON.stringify(String(c)),x=JSON.stringify(JSON.stringify(d));return["import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx","import traceback as __trace","__student = "+g,"__cases = __json.loads("+x+")","__results = []","for __example in __cases:","    __out = __io.StringIO()","    try:",'        __env = {"__name__": "__main__"}',"        with __ctx.redirect_stdout(__out), __ctx.redirect_stderr(__out):",'            exec(compile(__student, "main.py", "exec"), __env)',(l==null?void 0:l.mode)==="function"?'            __actual = eval(compile(__ast.parse(__example["call"], mode="eval"), "example", "eval"), __env)':'            __actual = __out.getvalue().rstrip("\\n")',(l==null?void 0:l.mode)==="function"?'        __expected = __ast.literal_eval(__example["expected"])':'        __expected = __example["expected"].rstrip("\\n")',(l==null?void 0:l.mode)==="function"?"        __ok = type(__actual) is type(__expected) and __actual == __expected":"        __ok = __actual == __expected",'        __results.append({"ok":__ok,"actual":str(__actual)[:240],"expected":str(__expected)[:240],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","expected":str(__example.get("expected",""))[:240],"error":type(__error).__name__+": "+str(__error)[:200]})','print("'+Mx+'"+__json.dumps(__results))'].join(`
`)+`
`}function zx(l,c){const d=String(c).split("(",1)[0].trim();return["import ast as __ast, io as __io, json as __json, contextlib as __ctx",'__env={"__name__":"student"}',"__stream=__io.StringIO()","with __ctx.redirect_stdout(__stream):","    exec(compile("+JSON.stringify(String(l))+',"main.py","exec"),__env)',"    __name="+JSON.stringify(d),'    if __name not in __env and callable(__env.get("solution")): __env[__name]=__env["solution"]',"    __value=eval(compile(__ast.parse("+JSON.stringify(String(c))+',mode="eval"),"sample call","eval"),__env)','print("PLAYGROUND_PREVIEW="+__json.dumps({"call":'+JSON.stringify(String(c))+',"returned":repr(__value)[:5000],"printed":__stream.getvalue()[:10000]}))'].join(`
`)}const Fx="modulepreload",Wx=function(l){return"/playground/preview/"+l},Af={},Hx=function(c,d,g){let x=Promise.resolve();if(d&&d.length>0){let C=function(L){return Promise.all(L.map(R=>Promise.resolve(R).then(O=>({status:"fulfilled",value:O}),O=>({status:"rejected",reason:O}))))};document.getElementsByTagName("link");const N=document.querySelector("meta[property=csp-nonce]"),S=(N==null?void 0:N.nonce)||(N==null?void 0:N.getAttribute("nonce"));x=C(d.map(L=>{if(L=Wx(L),L in Af)return;Af[L]=!0;const R=L.endsWith(".css"),O=R?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${L}"]${O}`))return;const A=document.createElement("link");if(A.rel=R?"stylesheet":Fx,R||(A.as="script"),A.crossOrigin="",A.href=L,S&&A.setAttribute("nonce",S),document.head.appendChild(A),R)return new Promise((Y,ne)=>{A.addEventListener("load",Y),A.addEventListener("error",()=>ne(new Error(`Unable to preload CSS for ${L}`)))})}))}function b(C){const N=new Event("vite:preloadError",{cancelable:!0});if(N.payload=C,window.dispatchEvent(N),!N.defaultPrevented)throw C}return x.then(C=>{for(const N of C||[])N.status==="rejected"&&b(N.reason);return c().catch(b)})},Ya="/playground/";async function Bx(l,c=()=>{}){if(l==="python"){const{PythonRunner:d}=await Hx(async()=>{const{PythonRunner:g}=await import("./pythonRunner-lCn9BIec.js");return{PythonRunner:g}},[]);return{kind:"python",instance:new d({onStatus:c})}}if(l==="java"){const{JavaRunner:d}=await import(Ya+"java-runner.mjs");return{kind:"java",instance:new d(c)}}if(l==="csharp"){const[{CSharpRunner:d},g]=await Promise.all([import(Ya+"csharp-runner.mjs"),import(Ya+"csharp-protocol.mjs")]);return{kind:"csharp",instance:new d({onStatus:c}),protocol:g}}throw Error("No code compiler for "+l)}function Ux(l){var c;return((c=/\b(?:public\s+)?(?:static\s+)?class\s+([A-Za-z_]\w*)/.exec(String(l||"")))==null?void 0:c[1])||""}const Rf='<main class="event-card"><h1>Robotics meetup</h1><p>Thursday at 4 PM in the lab.</p><p>Attendees: <span id="count">0</span></p><button id="join">Join</button></main>',gd=l=>JSON.stringify(String(l)).replace(/</g,"\\u003c");function qx(l){return l==="html"?`(()=>{
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
  })();`}function $x(l,c,d){var C;const g=(c.challengeExamples||[]).slice(0,d?void 0:1);if(!g.length)throw Error("No public challenge examples were published.");const x=(C=/\b(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:C[1];if(!x)throw Error("Define and export the challenge function.");const b=String(l).replace(/\bexport\s+(?=(?:async\s+)?function|const|let|class)/g,"");return`(()=>{
    const cases=${JSON.stringify(g)};
    const results=[];
    try{
      const fn=new Function(${gd(b+"; return "+x+";")})();
      for(const row of cases){
        try{
          const got=fn(...row.input);
          const expected=row.expected;
          const pass=JSON.stringify(got)===JSON.stringify(expected);
          results.push({label:${gd(x)}+'('+row.input.map(x=>JSON.stringify(x)).join(', ')+')',
            expected:JSON.stringify(expected),received:JSON.stringify(got),pass});
        }catch(e){results.push({label:${gd(x)}+'(...)',expected:JSON.stringify(row.expected),
          received:'',error:e.name+': '+e.message,pass:false});}
      }
      if(${d?"true":"false"})send('checks',{results});
      else results.forEach(row=>send('log',{level:row.pass?'info':'warn',text:row.label+' → '+(row.error || row.received)+' (expected '+row.expected+')'}));
    }catch(e){send('error',{text:e.name+': '+e.message});}
  })();`}function Kx(l){return"<script>"+l.replace(/<\/script/gi,"<\\/script")+"<\/script>"}async function Gx({code:l,language:c,lessonId:d,task:g={},token:x,check:b=!0}){if(!x)throw Error("A preview token is required.");if(g.projectId){const{buildProjectPreview:H}=await import(Ya+"project-preview.mjs");return H(l,{token:x,step:g.stepId,projectId:g.projectId,check:b})}const{previewConsoleBridge:C}=await import(Ya+"console-drawer.mjs"),N=Kx(C(x)),S=gd;let L="",R="",O="";if(g.isChallenge&&c==="javascript")L="<main><h2>JavaScript challenge</h2><p>See the Checks and Console tabs for actual function results.</p></main>",R=$x(l,g,b);else if(c==="html")L=String(l);else if(c==="css")L="<style>"+String(l).replace(/<\/style/gi,"")+"</style>"+Rf;else if(c==="javascript")L=Rf,R=l;else if(c==="jsx")L='<div id="root"></div>',typeof window.PlaygroundJSX!="function"&&await new Promise((H,ae)=>{const D=document.createElement("script");D.src=Ya+"vendor/learning/jsx.js",D.onload=H,D.onerror=()=>ae(Error("React JSX compiler could not load.")),document.head.append(D)}),R=window.PlaygroundJSX(l),O='<script src="'+Ya+'vendor/learning/react.js"><\/script>';else throw Error("Preview is not supported for "+c);const A=g.isChallenge&&c==="javascript"?"":qx(d),Y=g.isChallenge&&c==="javascript"?"<script>try{"+R+';send("ready");}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>':"<script>try{(0,eval)("+S(R)+');setTimeout(()=>{send("ready");'+(b?A:"")+'},180)}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>',ne='<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="form-action &apos;none&apos;"><style>body{font:16px/1.55 system-ui,sans-serif;padding:16px}button{padding:8px 15px}</style>'+N+O;if(c==="html"){const H=String(L).replace(/^\s*<!doctype[^>]*>/i,"");return"<!doctype html>"+(/<head(?:\s[^>]*)?>/i.test(H)?H.replace(/<head(?:\s[^>]*)?>/i,D=>D+ne):"<head>"+ne+"</head>"+H)+Y}return"<!doctype html><html><head>"+ne+"</head><body>"+L+Y+"</body></html>"}function hh({lessonId:l,task:c}){const d=c.storageKey||pm.code(l),g=!!c.projectDraft,x=!!c.isChallenge,b=Oe.useRef(null),C=Oe.useRef(null),N=Oe.useRef(null),S=Oe.useRef(null),L=Oe.useRef(null),[R,O]=Oe.useState(!1),[A,Y]=Oe.useState(c.starter||""),[ne,H]=Oe.useState(c.console||"Press Run to execute the code."),[ae,D]=Oe.useState(""),[U,F]=Oe.useState("Choose Check to run the published examples. Your scores are not recorded."),[K,V]=Oe.useState(null),[ge,ue]=Oe.useState(""),we=["html","css","javascript","jsx"].includes(c.language),Ue=we&&!x,[Le,oe]=Oe.useState(Ue?"Preview":"Console"),[Ce,se]=xn("designlab:editor-height",300);Oe.useEffect(()=>{Y(hm(d)??c.starter??""),H(c.console||"Run to see your program output."),F("Choose Check to run the published examples. Your scores are not recorded."),V(null),oe(we&&!x?"Preview":"Console"),ue(""),D("")},[d,c.language,c.starter,c.console,we,x]),Oe.useEffect(()=>()=>{var P;clearTimeout(L.current),S.current=null,(P=C.current)==null||P.instance.dispose(),C.current=null},[]),Oe.useEffect(()=>{function P(G){var Ae;const z=S.current;if(!z||!N.current||G.source!==N.current.contentWindow||((Ae=G.data)==null?void 0:Ae.token)!==z.token)return;const re=G.data;re.kind==="log"&&H(Ge=>(Ge==="Run to see your program output."?"":Ge)+"["+(re.level||"log")+"] "+re.text+`
`),re.kind==="clear"&&H(""),re.kind==="error"&&(clearTimeout(L.current),H(Ge=>Ge+"Error: "+re.text+`
`),z.check&&F("Fix the runtime error, then try Check again."),S.current=null,O(!1),oe("Console")),(re.kind==="checks"||re.kind==="project-checks")&&(clearTimeout(L.current),V(Ex(re.results||(re.text?[{label:re.text,pass:re.pass}]:[]))),S.current=null,O(!1),oe("Checks")),re.kind==="ready"&&!z.check&&(clearTimeout(L.current),S.current=null,O(!1))}return window.addEventListener("message",P),()=>window.removeEventListener("message",P)},[]);function ye(P){if(!b.current)return;const G=b.current.getBoundingClientRect();se(Math.max(160,Math.min(G.height-120,P.clientY-G.top)))}async function j(){var P;if(!C.current||C.current.language!==c.language){(P=C.current)==null||P.instance.dispose();const G=await Bx(c.language,z=>H(z));C.current={...G,language:c.language}}return C.current}async function X(P){var re,Ae,Ge,Ve,ke,Re,He,Be,tt,qe,Ht,Gt;const G=c.language;if(G==="java"&&c.environment==="ide")throw Error("This activity uses Java 26 file I/O and requires a full Java IDE. Browser execution is not supported for this exercise.");const z=await j();if(G==="python"){let St=A;if(x)St=Ax(A,{...c,starter:c.starter},P);else if(P){if(!((re=c.cases)!=null&&re.length))throw Error("This lesson has no published examples.");St=Dx(c,A)}else c.mode==="function"&&((Ge=(Ae=c.cases)==null?void 0:Ae[0])!=null&&Ge.call)&&(St=zx(A,c.cases[0].call));const vt=await z.instance.run(St);if(P){const Fe=x?c.challengeExamples.map(rt=>({call:(Px(A,"python")||"Function")+"("+rt.input.map(et=>JSON.stringify(et)).join(", ")+")",expected:JSON.stringify(rt.expected)})):c.cases;V(Pf(vt.output,Fe)),H("Python completed the public checks. Review individual results in Checks.")}else if(x){const Fe=Pf(vt.output,[{call:"First published example",expected:JSON.stringify(c.challengeExamples[0].expected)}]);H(Fe[0].error||"First example returned "+Fe[0].received+". Expected "+Fe[0].expected+".")}else if(c.mode==="function"&&((ke=(Ve=c.cases)==null?void 0:Ve[0])!=null&&ke.call)){const Fe=String(vt.output||"").split(`
`).find(rt=>rt.startsWith("PLAYGROUND_PREVIEW="));if(Fe){const rt=JSON.parse(Fe.slice(19));H(rt.call+`
Returned: `+rt.returned+(rt.printed?`
Printed: `+rt.printed:""))}else H(vt.output||"No return value was captured. See your code and retry.")}else H(vt.output||(vt.success?"Program finished with no printed output.":"The Python program stopped."))}if(G==="java"){if(c.environment==="ide")throw Error("This lesson uses Java 26 file input and must run in a full Java IDE. Browser execution is not supported.");if(x){const St=$p(c,"java",A),vt=P?St:St.slice(0,1),Fe=await z.instance.run(Rx(A,{...c,challengeExamples:vt}),[]);if(!Fe.success)throw Error([Fe.stdout,Fe.stderr,Fe.diagnostics].filter(Boolean).join(`
`));const rt=Ix(Fe.stdout,vt);P?V(rt):H(rt.map(et=>et.call+`
Received: `+et.received+`
Expected: `+et.expected).join(`
`))}else{const St=P?c.cases||[]:[{args:c.runArgs||((He=(Re=c.cases)==null?void 0:Re[0])==null?void 0:He.args)||[]}];if(P&&!St.length)throw Error("No public Java examples are available for this exercise.");const vt=[];for(const Fe of St){const rt=await z.instance.run(A,Fe.args||[]);if(vt.push(rt),!rt.success)break}if(P){const Fe=Nx(vt,St);if(vt.length!==St.length)throw Error("Java stopped before completing all published examples: "+(((Be=vt.at(-1))==null?void 0:Be.diagnostics)||((tt=vt.at(-1))==null?void 0:tt.stderr)||"Unknown error"));V(Fe),H("Java completed the published checks. Review the Checks tab.")}else H([(qe=vt[0])==null?void 0:qe.stdout,(Ht=vt[0])==null?void 0:Ht.stderr,(Gt=vt[0])==null?void 0:Gt.diagnostics].filter(Boolean).join(`
`)||"Java ran without printed output.")}}if(G==="csharp"){const St=z.protocol,vt=x?$p(c,"csharp",A).map(ie=>({...ie,call:Array.isArray(ie.expected)?ie.call+".SequenceEqual("+ie.expectedLiteral+")":ie.call,arrayResult:Array.isArray(ie.expected),expected:Array.isArray(ie.expected)?"true":ie.expectedLiteral})):c.cases||[],Fe=x?"Solution":Ux(A),rt=P||x&&vt.length>0;if(P&&!vt.length)throw Error("No public C# examples are available for this exercise.");if(rt&&!Fe)throw Error("The C# checker could not find the public class name.");const et=P?vt:vt.slice(0,1),$t=rt?St.buildChecks(et,Fe):null,$e=$t&&et.some(ie=>ie.arrayResult)?`using System.Linq;
`+$t:$t,ht=await z.instance.run(A,$e);if(!ht.compiled||!ht.success)throw Error([ht.diagnostics,ht.stderr].filter(Boolean).join(`
`)||"C# could not execute.");if(rt){const ie=jx(ht.stdout,et,St.parseChecks);P?V(ie):H(ie.map(Se=>Se.call+`
Received: `+Se.received+`
Expected: `+Se.expected).join(`
`))}else H(ht.stdout||"C# executed without printed output.")}}async function q(P){if(!R){O(!0),D(""),V(null),P?(F("Running published example checks…"),oe("Checks")):(H("Preparing runner…"),oe(Ue?"Preview":"Console"));try{if(we){const G=crypto.randomUUID();S.current={token:G,check:P};const z=await Gx({code:A,language:c.language,lessonId:l,task:c,token:G,check:P});ue(z),H(""),clearTimeout(L.current),L.current=setTimeout(()=>{var re;((re=S.current)==null?void 0:re.token)===G&&(S.current=null,O(!1),H("The preview did not finish within 7 seconds. Check for errors or an infinite loop."),F("Practice timed out. No result was recorded."),N.current&&(N.current.srcdoc="<p>Preview stopped after timeout.</p>"),oe("Console"))},7e3)}else await X(P),O(!1)}catch(G){clearTimeout(L.current),S.current=null,O(!1);const z=String((G==null?void 0:G.message)||G);H(z),oe("Console"),P&&F("Check unavailable: "+z)}}}function T(P){if(!R){if(P==="Run"||P==="Check"){q(P==="Check");return}if(P==="Save"){fd(d,A),D("Draft saved in this browser only.");return}P==="Reset"&&(Y(c.starter||""),fd(d,c.starter||""),V(null),ue(""),F("Choose Check to run published examples again."),H("Starter code restored. No points were recorded."),oe(Ue?"Preview":"Console"))}}return p.jsxs("div",{className:"code-pane",children:[p.jsxs("div",{className:"pane-header",children:[p.jsxs("strong",{children:[p.jsx(Qp,{size:16})," Editor"]}),p.jsxs("div",{className:"right-meta",children:[c.language.toUpperCase()," ",p.jsx(is,{children:"Live practice"})]})]}),p.jsxs("div",{className:"code-workspace",ref:b,style:{"--editor-height":Ce+"px"},children:[p.jsx(Cx,{value:A,language:c.language,onChange:P=>{Y(P),(g||x)&&fd(d,P),D(""),V(null),F("Code changed. Choose Check to run fresh examples.")}}),p.jsx(Ed,{axis:"rows",onDrag:ye}),p.jsx(Ox,{text:ne,checksText:U,checkRows:K,points:c.points,language:c.language,lessonId:l,previewEnabled:Ue,previewDoc:ge,previewRef:N,activeTab:Le,onTabChange:oe})]}),p.jsxs("div",{className:"editor-controls",children:[p.jsxs("div",{children:[["Run","Check","Reset"].map(P=>p.jsx("button",{type:"button",className:"btn",disabled:R,onClick:()=>T(P),children:P},P)),R&&p.jsx("button",{type:"button",className:"btn",onClick:()=>{var P,G,z;(z=(P=C.current)==null?void 0:(G=P.instance).stop)==null||z.call(G),S.current=null,clearTimeout(L.current),O(!1),H("Execution stopped.")},children:"Stop"})]}),p.jsxs("div",{children:[p.jsxs("button",{type:"button",className:"btn",disabled:R,onClick:()=>T("Save"),children:[p.jsx(zp,{size:15})," Save"]}),p.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submission and official grading are not connected in this preview",children:[p.jsx(Gf,{size:15})," Submit (not enabled)"]})]})]}),p.jsx("div",{className:"editor-note",role:"status",children:ae||"Run executes code locally; Check tests public examples only. No grades, points or hand-ins are recorded."})]})}function Yx({lessonId:l,onAnswerChecked:c}){const d=rh[l],[g,x]=Oe.useState(null),[b,C]=Oe.useState(!1);function N(){C(!0),c==null||c({selected:g,correct:g===d.correct})}function S(){x(null),C(!1),c==null||c(null)}return p.jsxs("section",{className:"tsi-practice","aria-label":"Math question",children:[p.jsxs("div",{className:"tsi-practice-heading",children:[p.jsx(Uf,{size:20}),p.jsxs("div",{children:[p.jsx("h2",{children:"Try this question"}),p.jsx("p",{children:"Choose an answer, then review the explanation on the right."})]})]}),p.jsxs("div",{className:"tsi-question-card",children:[p.jsx("div",{className:"eyebrow",children:"Question"}),p.jsx("h3",{children:d.prompt}),p.jsx("div",{className:"tsi-answers",role:"radiogroup","aria-label":"Choose the correct answer",children:d.options.map((L,R)=>p.jsxs("label",{className:`tsi-choice ${g===R?"selected":""} ${b&&R===d.correct?"correct":""}`,children:[p.jsx("input",{type:"radio",name:`tsi-${l}`,checked:g===R,disabled:b,onChange:()=>x(R)}),p.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+R)}),p.jsx("span",{children:L})]},L))}),b&&p.jsx("p",{className:"tsi-answer-status",role:"status",children:g===d.correct?"Correct! Read why on the right.":"Not quite. Review the explanation on the right."}),p.jsxs("div",{className:"tsi-buttons",children:[p.jsx("button",{className:"btn primary",disabled:g===null||b,onClick:N,children:"Check answer"}),p.jsxs("button",{className:"btn",onClick:S,children:[p.jsx($f,{size:15})," Try again"]})]})]})]})}const yd=[["quantitative","Quantitative Reasoning"],["algebraic","Algebraic Reasoning"],["geometry","Geometric and Spatial Reasoning"],["statistics","Probabilistic and Statistical Reasoning"]];function Vx(l){const c=l.answer,d=Number.isInteger(c)?Math.max(1,Math.round(Math.abs(c)*.15)):Math.max(.125,Math.round(Math.abs(c)*.2*1e3)/1e3),g=[c+d,c-d,c+2*d].map(x=>Number(x.toFixed(4)));return g.splice(l.correct_index??0,0,c),g}function Jx(l,c){return Object.fromEntries(yd.map(([d])=>{const g=l.filter(b=>b.strand===d),x=g.filter(b=>c[b.id]!=="skip"&&Number(c[b.id])===b.answer).length;return[d,{correct:x,total:g.length,level:x===g.length?"Advanced":x>=Math.ceil(g.length*.6)?"Proficient":"Basic"}]}))}function Xx({items:l=[],profiles:c=[]}){var ae,D,U;const[d,g]=Oe.useState({}),[x,b]=Oe.useState(""),[C,N]=Oe.useState(""),[S,L]=xn("designlab:tsi-math-placement",{}),[R,O]=Oe.useState(null),A=Oe.useMemo(()=>yd.map(([F,K])=>({id:F,title:K,items:l.filter(V=>V.strand===F)})),[l]),Y=R||((ae=S.diagnostic)==null?void 0:ae.latest)&&S.diagnostic.latest.placement;function ne(F){F.preventDefault();const K=c.find(V=>V.code===x.trim().toUpperCase());if(!K){N("Enter a valid MATH01–MATH81 study code.");return}L(V=>({...V,code:K.code,levels:K.levels})),N("Study code applied in this browser. It does not enroll you in a class.")}function H(F){if(F.preventDefault(),l.some(ue=>d[ue.id]===void 0)){N("Answer or select Not sure for every question.");return}const K=Jx(l,d),V=Object.fromEntries(Object.entries(K).map(([ue,we])=>[ue,we.level])),ge={at:new Date().toISOString(),placement:K,levels:V,answers:d};L(ue=>{var we;return{...ue,levels:V,diagnostic:{first:((we=ue.diagnostic)==null?void 0:we.first)||ge,latest:ge}}}),O(K),N("Your recommended starting levels are ready. Results are stored in this browser only.")}return p.jsxs("div",{className:"published-reading surface-card tsi-diagnostic",children:[p.jsx("h2",{children:"Find your starting point"}),p.jsx("p",{children:"This is the existing 24-question, four-strand practice diagnostic. It suggests what to study; it does not predict an official TSIA2 score or assign an enrolled class."}),p.jsxs("form",{onSubmit:ne,className:"tsi-code-entry",children:[p.jsx("label",{htmlFor:"math-locator-code",children:"Pearson study code (MATH01–MATH81)"}),p.jsx("input",{id:"math-locator-code",type:"text",placeholder:"MATH01",maxLength:6,value:x,onChange:F=>b(F.target.value)}),p.jsx("button",{className:"btn",type:"submit",children:"Apply code"})]}),!!S.code&&p.jsxs("p",{role:"status",children:["Current code: ",p.jsx("strong",{children:S.code}),"."," ","Recommended levels: ",yd.map(([F,K])=>{var V;return K+": "+((V=S.levels)==null?void 0:V[F])}).join(" · ")]}),p.jsxs("form",{onSubmit:H,children:[p.jsx("h3",{children:"Take the diagnostic"}),p.jsxs("p",{children:["Choose one answer or Not sure for all ",l.length," questions. This open practice records your first and latest attempts in this browser, not the live gradebook."]}),A.map(F=>p.jsxs("section",{className:"tsi-diagnostic-strand",children:[p.jsx("h3",{children:F.title}),F.items.map(K=>p.jsxs("fieldset",{className:"tsi-question",children:[p.jsx("legend",{children:K.prompt}),p.jsxs("div",{className:"tsi-answers",children:[Vx(K).map((V,ge)=>p.jsxs("label",{className:"tsi-choice",children:[p.jsx("input",{type:"radio",name:K.id,value:V,checked:d[K.id]===String(V),onChange:()=>g(ue=>({...ue,[K.id]:String(V)}))}),p.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+ge)}),p.jsx("span",{children:V})]},ge)),p.jsxs("label",{className:"tsi-choice",children:[p.jsx("input",{type:"radio",name:K.id,value:"skip",checked:d[K.id]==="skip",onChange:()=>g(V=>({...V,[K.id]:"skip"}))}),p.jsx("span",{children:"Not sure"})]})]})]},K.id))]},F.id)),p.jsx("button",{type:"submit",className:"btn primary",children:"Get my recommended levels"})]}),!!C&&p.jsx("p",{role:"status",children:C}),Y&&p.jsxs("section",{className:"tsi-diagnostic-results","aria-label":"Diagnostic results",children:[p.jsx("h3",{children:"Recommended starting levels"}),yd.map(([F,K])=>p.jsxs("p",{children:[p.jsxs("strong",{children:[K,": ",Y[F].level]})," (",Y[F].correct," of ",Y[F].total," correct)"]},F)),p.jsx("p",{children:"This diagnostic is instructional, not a verified measure of college readiness. All published lessons remain available regardless of recommendation."}),!!((D=S.diagnostic)!=null&&D.first)&&!!((U=S.diagnostic)!=null&&U.latest)&&p.jsxs("p",{children:["First attempt: ",new Date(S.diagnostic.first.at).toLocaleDateString()," · Latest: ",new Date(S.diagnostic.latest.at).toLocaleDateString()]})]})]})}function Qx({lessonId:l,course:c,unit:d,unitNumber:g,isCompleted:x=!1,assignment:b=null,grade:C=null,onToggleCompleted:N}){var ae;const S=ea(c,l),L=Oe.useRef(null),[R,O]=Oe.useState(null),[A,Y]=xn("designlab:left-width",420);function ne(D){if(!L.current)return;const U=L.current.getBoundingClientRect();Y(Math.max(260,Math.min(U.width-340,D.clientX-U.left)))}const H=c.id==="tsi-math";return H&&l==="tsi-20d-d01"&&((ae=c.diagnosticItems)!=null&&ae.length)?p.jsxs("div",{className:"lesson-screen",children:[p.jsxs("header",{className:"lesson-header",children:[p.jsx("div",{className:"eyebrow",children:"Day 1 · TSI Math Advisory"}),p.jsx("h1",{children:S.title}),p.jsx("p",{children:"Diagnostic placement · 30-minute advisory plan"})]}),p.jsx(Xx,{items:c.diagnosticItems,profiles:c.locatorProfiles})]}):S!=null&&S.ready?S.language==="text"&&!H?p.jsxs("div",{className:"lesson-screen",children:[p.jsx(ld,{task:S,unit:d,unitNumber:g,isTsi:!1,isCompleted:x,assignment:b,grade:C,onToggleCompleted:N}),p.jsxs("section",{className:"surface-card published-reading",children:[p.jsx("p",{className:"muted",children:"Published written-practice material. Answer checking and verified scores remain on the current Playground."}),p.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:tc(S.markdownSource)}})]})]}):H&&!rh[l]?p.jsxs("div",{className:"lesson-screen",children:[p.jsx(ld,{task:S,unit:d,unitNumber:g,isTsi:!0,isCompleted:x,assignment:b,grade:C,onToggleCompleted:N}),p.jsxs("section",{className:"surface-card published-reading",children:[p.jsx("p",{className:"muted",children:"Published draft lesson · practice shown for learning, not an official TSIA2 score predictor."}),p.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:tc(S.markdownSource)}})]})]}):p.jsxs("div",{className:"lesson-screen",children:[p.jsx(ld,{task:S,unit:d,unitNumber:g,isTsi:H,isCompleted:x,assignment:b,grade:C,onToggleCompleted:N}),p.jsxs("div",{className:`workspace-grid ${H?"tsi-workspace":""}`,ref:L,style:{"--left-pane":`${A}px`},children:[H?p.jsx(Yx,{lessonId:l,onAnswerChecked:O}):p.jsx(lf,{lessonId:l,task:S}),p.jsx(Ed,{axis:"columns",onDrag:ne}),H?p.jsx(lf,{lessonId:l,task:S,isTsi:!0,tsiAnswer:R}):p.jsx(hh,{lessonId:l,task:S})]})]}):p.jsxs("div",{className:"lesson-screen",children:[p.jsx(ld,{task:S,unit:d,unitNumber:g,isTsi:H,isCompleted:x,assignment:b,grade:C,onToggleCompleted:N}),p.jsxs("section",{className:"lesson-content-pending surface-card",children:[p.jsx("h2",{children:"Lesson coming soon"}),p.jsx("p",{children:"This scheduled lesson has not been authored yet. No practice or scores are available."})]})]})}function Zx({course:l,project:c,stepId:d,openProject:g}){const x=c.steps||[],b=Math.max(0,x.findIndex(Y=>Y.id===d)),C=x[b],N=Oe.useRef(null),[S,L]=xn("designlab:project-left-width",430),R="project:"+l.id+":"+c.id,O={id:R,title:c.title,language:c.language||"html",starter:c.starter||"",challenge:c.summary||"",console:"Run to see your actual page. Check tests the published step requirements in a sandboxed browser preview.",projectDraft:!0,isPublished:!1,projectId:c.id,stepId:C.id};function A(Y){if(!N.current)return;const ne=N.current.getBoundingClientRect();L(Math.max(260,Math.min(ne.width-340,Y.clientX-ne.left)))}return p.jsxs("div",{className:"lesson-screen project-workspace",children:[p.jsxs("header",{className:"lesson-header",children:[p.jsxs("div",{className:"eyebrow",children:["Published guided project · ",x.length," steps"]}),p.jsx("h1",{children:c.title}),p.jsx("p",{children:c.summary}),p.jsx("p",{className:"muted",children:"Run renders your actual project and Check tests the current step. Drafts save in this browser; Submit and verified grading remain disabled."})]}),p.jsx("nav",{className:"project-step-list","aria-label":"Project steps",children:x.map((Y,ne)=>p.jsxs("button",{type:"button","aria-current":ne===b?"step":void 0,className:ne===b?"btn primary":"btn",onClick:()=>g(l.id,c.id,Y.id),children:[ne+1,". ",Y.title]},Y.id))}),p.jsxs("div",{className:"workspace-grid",ref:N,style:{"--left-pane":S+"px"},children:[p.jsxs("section",{className:"instructions-pane project-reading",children:[p.jsx("div",{className:"pane-header",children:p.jsxs("strong",{children:["Step ",b+1,": ",C.title]})}),p.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:tc(C.markdownSource)}})]}),p.jsx(Ed,{axis:"columns",onDrag:A}),p.jsx(hh,{lessonId:R,task:O})]}),p.jsxs("nav",{className:"lesson-next-bar","aria-label":"Project step navigation",children:[b>0&&p.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>g(l.id,c.id,x[b-1].id),children:[p.jsx(Jp,{size:16})," ",p.jsxs("span",{children:["Prev: ",x[b-1].title]})]}),b<x.length-1&&p.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>g(l.id,c.id,x[b+1].id),children:[p.jsxs("span",{children:["Next: ",x[b+1].title]})," ",p.jsx(na,{size:16})]})]})]})}function e0({courseId:l,lessonId:c,projectId:d,projectStepId:g,availableCourses:x=ns,openCourse:b,openProject:C,openChallenges:N,completedLessons:S=[],assignments:L=[],grades:R=[],onToggleLessonComplete:O,courseColors:A={},onSetCourseColor:Y,onResetCourseColor:ne}){const H=x.find(V=>V.id===l)||x[0],ae=(H.projects||[]).find(V=>V.id===d),D=Zu(H),U=H.units.findIndex(V=>rs(V).includes(c)),F=H.units[U],K=D.indexOf(c);return p.jsx("div",{className:"course-layout integrated-course","data-course":H.id,children:p.jsxs("div",{className:"course-main",children:[p.jsxs("div",{className:"course-breadcrumb",children:[p.jsx("button",{onClick:()=>b(null),children:"All playgrounds"}),p.jsx(na,{size:14}),c||ae?p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:()=>b(H.id),children:H.label}),p.jsx(na,{size:14}),p.jsx("span",{className:"breadcrumb-unit-name",title:F?Es(F):"",children:F?Es(F):(ae==null?void 0:ae.title)||""})]}):p.jsx("span",{children:H.label})]}),ae?p.jsx(Zx,{course:H,project:ae,stepId:g,openProject:C},ae.id):c?p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"lesson-mobile-navigation",children:[p.jsx("label",{htmlFor:"lesson-select",children:"Lesson"}),p.jsx("select",{id:"lesson-select",value:c,onChange:V=>b(H.id,V.target.value),children:H.units.map((V,ge)=>p.jsx("optgroup",{label:`Unit ${ge+1} · ${Es(V)}`,children:rs(V).map(ue=>p.jsx("option",{value:ue,children:ta(H,ue)},ue))},V.id))})]}),p.jsx(Qx,{lessonId:c,course:H,unit:F,unitNumber:U+1,isCompleted:S.includes(c),assignment:L.find(V=>V.id==="lesson:"+c),grade:R.find(V=>V.id==="lesson:"+c),onToggleCompleted:()=>O==null?void 0:O(c)},c),p.jsxs("nav",{className:"lesson-next-bar","aria-label":"Lesson sequence",children:[K>0&&p.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>b(H.id,D[K-1]),children:[p.jsx(Jp,{size:16,"aria-hidden":"true"}),p.jsxs("span",{children:["Prev: ",ta(H,D[K-1])]})]}),K>=0&&K<D.length-1&&p.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>b(H.id,D[K+1]),children:[p.jsxs("span",{children:["Next: ",ta(H,D[K+1])]}),p.jsx(na,{size:16,"aria-hidden":"true"})]})]})]}):p.jsx(by,{course:H,openCourse:b,openProject:C,openChallenges:N,completedLessons:S,assignments:L,grades:R,courseColors:A,onSetCourseColor:Y,onResetCourseColor:ne})]})})}const ho=[{id:"p1",period:"1",name:"Period 1",course:"computer-science-1"},{id:"p3",period:"3",name:"Period 3",course:"computer-science-1"},{id:"p5",period:"5",name:"Period 5",course:"mobile-app-dev"},{id:"p6",period:"6",name:"Period 6",course:"game-programming"},{id:"p7",period:"7",name:"Period 7",course:"mobile-app-dev"},{id:"p8",period:"8",name:"Period 8",course:"computer-science-1"}],ym=l=>ho.find(c=>c.id===l),vm=l=>{var c;return(c=ym(l))==null?void 0:c.period},t0=[...new Set(ho.map(l=>l.period))].sort((l,c)=>Number(l)-Number(c)),xm=[{key:"2026-11-02",label:"Nov 2 – Nov 8, 2026"},{key:"2026-10-26",label:"Oct 26 – Nov 1, 2026"}],Gl=l=>{var c,d;return((c=l.sheetName)==null?void 0:c.trim())||((d=l.studentName)==null?void 0:d.trim())||l.github},If=l=>(l.sheetName||l.studentName||"").trim().split(/\s+/),bm=(l,c,d)=>{const g=x=>d==="github"?x.github.toLowerCase():d==="first"?(If(x)[0]||x.github).toLowerCase():(If(x).at(-1)||x.github).toLowerCase();return g(l).localeCompare(g(c),void 0,{numeric:!0})||l.github.localeCompare(c.github)},n0=[["last","Last name"],["first","First name"],["github","GitHub username"]];function r0({sectionId:l,onSectionChange:c,setupOpen:d,onToggleSetup:g}){return p.jsxs("div",{className:"teacher-toolbar",children:[p.jsxs("label",{children:["Class section",p.jsx("select",{value:l,onChange:x=>c(x.target.value),children:ho.map(x=>p.jsxs("option",{value:x.id,children:[x.name," · ",Yp(x.course)]},x.id))})]}),p.jsxs("button",{type:"button",className:"btn section-setup-toggle","aria-expanded":d,"aria-controls":"teacher-section-setup",onClick:g,children:[d?p.jsx(jd,{size:16}):p.jsx(eh,{size:16}),d?"Close section setup":"Section setup"]})]})}const i0=[["overview","Class overview",Zp],["curriculum","Curriculum",sc],["journals","Journals",Xp]];function s0({tab:l,onChange:c}){return p.jsx("div",{className:"tabs teacher-tabs",role:"tablist","aria-label":"Teacher dashboard tabs",children:i0.map(([d,g,x])=>p.jsxs("button",{type:"button",role:"tab","aria-selected":l===d,className:l===d?"active":"",onClick:()=>c(d),children:[p.jsx(x,{size:16}),g]},d))})}function o0({section:l}){return p.jsxs("div",{className:"section-banner",children:[p.jsxs("div",{children:[p.jsx("div",{className:"eyebrow",children:"Selected section"}),p.jsxs("h2",{children:[l.name," ",p.jsxs("span",{className:"muted",children:["· ",Yp(l.course)]})]})]}),p.jsx(is,{children:"Demo join code: LOCAL01"})]})}function a0({students:l}){const c=[[l.length,"Enrolled students"],[l.filter(d=>d.status==="Active now").length,"Recently interacting"],[l.filter(d=>d.sheetName).length,"Sheet names matched"]];return p.jsx("div",{className:"stat-grid",children:c.map(([d,g])=>p.jsxs("div",{className:"stat-card",children:[p.jsx("strong",{children:d}),p.jsx("span",{children:g})]},g))})}function l0({students:l,week:c,setWeek:d}){const g=Oe.useMemo(()=>[...l].sort((x,b)=>(b.weekly[c]||0)-(x.weekly[c]||0)),[l,c]);return p.jsxs("section",{className:"panel",children:[p.jsxs("div",{className:"section-heading",children:[p.jsxs("div",{children:[p.jsx("h2",{children:"Weekly points"}),p.jsx("p",{children:"Mock verified points · Monday–Sunday in Central Time"})]}),p.jsxs("label",{children:["Week",p.jsx("select",{value:c,onChange:x=>d(x.target.value),children:xm.map(x=>p.jsx("option",{value:x.key,children:x.label},x.key))})]})]}),p.jsx("div",{className:"overflow",children:p.jsxs("table",{className:"data-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Student"}),p.jsx("th",{children:"Weekly points"}),p.jsx("th",{children:"Sample assignments"})]})}),p.jsx("tbody",{children:g.map(x=>p.jsxs("tr",{children:[p.jsxs("th",{children:[Gl(x),p.jsxs("small",{children:["@",x.github]})]}),p.jsx("td",{children:p.jsx("strong",{children:x.weekly[c]||0})}),p.jsx("td",{children:x.assignments.filter(b=>b.score!==null).length})]},x.id))})]})})]})}function wm({label:l,value:c,onChange:d}){return p.jsxs("label",{children:[l,p.jsx("select",{value:c,onChange:g=>d(g.target.value),children:n0.map(([g,x])=>p.jsx("option",{value:g,children:x},g))})]})}const u0=l=>l.includes("Completed")?"success":l==="Needs revision"?"warning":"";function c0({student:l,week:c}){const[d,g]=Oe.useState(null),x=l.assignments,b=x.filter(N=>N.status==="Completed"||N.status==="Practice completed").length,C=x.filter(N=>N.score!==null).length;return p.jsxs("div",{className:"expanded-student",children:[p.jsxs("div",{className:"expanded-header",children:[p.jsxs("div",{children:[p.jsx("h3",{children:"Assignment history"}),p.jsxs("p",{className:"muted",children:["Sample records for ",Gl(l),". No student data is loaded."]})]}),p.jsxs(is,{tone:"success",children:[l.weekly[c]||0," verified pts this week"]})]}),p.jsxs("div",{className:"mini-stats",children:[p.jsxs("span",{children:[p.jsx("strong",{children:b})," completed"]}),p.jsxs("span",{children:[p.jsx("strong",{children:C})," graded"]}),p.jsxs("span",{children:[p.jsx("strong",{children:x.length})," tracked"]})]}),p.jsx("div",{className:"overflow",children:p.jsxs("table",{className:"data-table assignment-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Assignment"}),p.jsx("th",{children:"Status"}),p.jsx("th",{children:"Score"}),p.jsx("th",{children:"Updated"}),p.jsx("th",{children:"Action"})]})}),p.jsx("tbody",{children:x.map(N=>{const S=d===N.id;return p.jsxs(Oe.Fragment,{children:[p.jsxs("tr",{children:[p.jsxs("th",{children:[N.name,p.jsx("small",{children:N.type})]}),p.jsx("td",{children:p.jsx(is,{tone:u0(N.status),children:N.status})}),p.jsx("td",{children:N.score===null?"—":`${N.score} / ${N.possible}`}),p.jsx("td",{children:N.submitted}),p.jsx("td",{children:p.jsx("button",{className:"small-link",onClick:()=>g(S?null:N.id),children:S?"Hide details":"View details"})})]}),S&&p.jsx("tr",{className:"receipt-preview",children:p.jsxs("td",{colSpan:"5",children:[p.jsx("strong",{children:"Sample assignment detail"}),p.jsx("p",{children:"This is a mock submitted-copy preview for layout testing, not the student's actual code."})]})})]},N.id)})})]})})]})}function d0({students:l,week:c,sort:d,setSort:g,expanded:x,setExpanded:b}){return p.jsxs("section",{className:"panel",children:[p.jsxs("div",{className:"section-heading",children:[p.jsxs("div",{children:[p.jsx("h2",{children:"Section roster & activity"}),p.jsx("p",{children:"Click a student's name to expand their assignments directly inside the roster."})]}),p.jsx(wm,{label:"Sort students by",value:d,onChange:g})]}),p.jsx("div",{className:"overflow",children:p.jsxs("table",{className:"data-table roster-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Student"}),p.jsx("th",{children:"Activity signal"}),p.jsx("th",{children:"Current activity"}),p.jsx("th",{children:"Practice"}),p.jsx("th",{children:"Hand-ins"})]})}),p.jsx("tbody",{children:l.map(C=>{const N=x===C.id;return p.jsxs(Oe.Fragment,{children:[p.jsxs("tr",{className:N?"selected-row":"",children:[p.jsxs("th",{children:[p.jsxs("button",{className:"student-name-button","aria-expanded":N,onClick:()=>b(N?null:C.id),children:[N?p.jsx(qf,{size:16}):p.jsx(na,{size:16})," ",Gl(C)]}),p.jsxs("small",{children:["@",C.github,C.sections.length>1?" · Sheet periods 1, 3":""]})]}),p.jsx("td",{children:p.jsx(is,{tone:C.status==="Active now"?"success":"",children:C.status})}),p.jsx("td",{children:C.current}),p.jsxs("td",{children:[C.assignments.filter(S=>S.status.includes("Completed")).length," complete"]}),p.jsx("td",{children:C.assignments.filter(S=>S.score!==null).length})]}),N&&p.jsx("tr",{className:"expansion-row",children:p.jsx("td",{colSpan:"5",children:p.jsx(c0,{student:C,week:c})})})]},C.id)})})]})})]})}function p0({section:l,students:c,week:d,setWeek:g,sort:x,setSort:b,expanded:C,setExpanded:N}){return p.jsxs(p.Fragment,{children:[p.jsx(o0,{section:l}),p.jsx(a0,{students:c}),p.jsx(l0,{students:c,week:d,setWeek:g}),p.jsx(d0,{students:c,week:d,sort:x,setSort:b,expanded:C,setExpanded:N})]})}function km(l,c){return l+"::"+c}function h0(l,c=[]){if(!(l!=null&&l.sectionId)||!l.lessonId)return"Choose a section and lesson.";if(l.sectionCourseId&&l.sectionCourseId!=="computer-science-1")return"This section uses a different course. Only Computer Science I is connected.";if(!/^\d{4}-\d{2}-\d{2}$/.test(l.dueDate||""))return"Choose a valid due date.";const[d,g,x]=l.dueDate.split("-").map(Number);if(new Date(Date.UTC(d,g-1,x)).toISOString().slice(0,10)!==l.dueDate)return"Choose a valid due date.";const C=Number(l.points);if(!Number.isFinite(C)||!Number.isInteger(C)||C<0||C>1e3)return"Points must be a whole number between 0 and 1,000.";if(l.scope!=="section"&&l.scope!=="selected")return"Choose who receives the assignment.";if(l.scope==="selected"){const N=new Set(c.map(L=>L.id)),S=[...new Set(l.studentIds||[])];if(!S.length||S.some(L=>!N.has(L)))return"Select at least one student from this section."}return null}function f0(l,c=[]){const d=h0(l,c);if(d)throw new Error(d);return{id:km(l.sectionId,l.lessonId),sectionId:l.sectionId,courseId:"computer-science-1",lessonId:l.lessonId,scope:l.scope,studentIds:l.scope==="selected"?[...new Set(l.studentIds)].sort():[],dueDate:l.dueDate,points:Number(l.points)}}function m0(l,c){return[...(Array.isArray(l)?l:[]).filter(d=>d.id!==c.id),c]}function Ap(l,c,d){return(l||[]).find(g=>g.id===km(c,d))||null}const g0="/playground/data/computer-science-1/course.json",Qu=yi("computer-science-1");function y0({section:l,students:c=[],assignments:d=[],setAssignments:g}){const[x,b]=Oe.useState(null),[C,N]=Oe.useState("loading"),[S,L]=Oe.useState(Qu.lessons[0]),[R,O]=Oe.useState("section"),[A,Y]=Oe.useState([]),[ne,H]=Oe.useState(""),[ae,D]=Oe.useState(""),[U,F]=Oe.useState("starter"),[K,V]=Oe.useState("");Oe.useEffect(()=>{const q=new AbortController;return fetch(g0,{signal:q.signal,cache:"no-store"}).then(T=>{if(!T.ok)throw new Error("Curriculum unavailable");return T.json()}).then(T=>{if(!Array.isArray(T.lessons)||!T.lessons.length)throw new Error("Unexpected curriculum response");b(Kl(T)),N("live")}).catch(T=>{T.name!=="AbortError"&&N("snapshot")}),()=>q.abort()},[]);const ge=Oe.useMemo(()=>x?{...Qu,...x}:Qu,[x]),ue=ge.lessons,we=ue.includes(S)?S:ue[0],Ue=ea(ge,we),Le=ue.reduce((q,T)=>{var P;return q+(Number((P=ea(ge,T))==null?void 0:P.points)||0)},0),oe=Qu.lessons.includes(we),Ce=(l==null?void 0:l.course)==="computer-science-1",se=Ap(d,l==null?void 0:l.id,we),ye=c.filter(q=>q.sections.includes(l==null?void 0:l.id));Oe.useEffect(()=>{var T;const q=Ap(d,l==null?void 0:l.id,we);O((q==null?void 0:q.scope)||"section"),Y((q==null?void 0:q.studentIds)||[]),H((q==null?void 0:q.dueDate)||""),D(String((q==null?void 0:q.points)??((T=ea(ge,we))==null?void 0:T.points)??0)),V(""),F("starter")},[we,l==null?void 0:l.id]);function j(q){q.preventDefault();try{const T=f0({sectionId:l==null?void 0:l.id,sectionCourseId:l==null?void 0:l.course,lessonId:we,scope:R,studentIds:A,dueDate:ne,points:ae},ye);g==null||g(P=>m0(P,T)),V("Preview assignment saved in this browser. No students were notified.")}catch(T){V(T.message)}}function X(){g==null||g(q=>(q||[]).filter(T=>T.id!==(se==null?void 0:se.id))),V("Preview assignment cleared. Live student records were not changed.")}return p.jsxs("section",{className:"panel curriculum-panel","aria-label":"Published curriculum",children:[p.jsxs("div",{className:"section-heading",children:[p.jsxs("div",{children:[p.jsxs("h2",{children:[p.jsx(sc,{size:18})," Computer Science I curriculum"]}),p.jsxs("p",{children:[ge.units.length," original units · ",ue.length," lessons · ",Le," available lesson points"]})]}),p.jsx("span",{className:"curriculum-source",role:"status",children:C==="live"?"Published course • current":C==="loading"?"Checking published course…":"Bundled preview snapshot"})]}),p.jsx("p",{className:"curriculum-explanation",children:"Lesson titles, published points, starter code, and unit order come from the real CS1 catalog. Assignment controls below are a browser-only preview and do not affect live students."}),p.jsxs("div",{className:"curriculum-grid",children:[p.jsx("div",{className:"curriculum-units","aria-label":"Unit and lesson list",children:ge.units.map((q,T)=>p.jsxs("details",{open:rs(q).includes(we)||T===0,children:[p.jsxs("summary",{children:["Unit ",rc(q,T+1)," · ",Es(q)]}),p.jsx("div",{children:rs(q).map(P=>p.jsxs("button",{type:"button",className:P===we?"curriculum-lesson selected":"curriculum-lesson","aria-current":P===we?"true":void 0,onClick:()=>L(P),children:[ta(ge,P),Ap(d,l==null?void 0:l.id,P)&&p.jsx("small",{children:" · Assigned in preview"})]},P))})]},q.id))}),p.jsxs("article",{className:"curriculum-lesson-preview",children:[p.jsx("div",{className:"eyebrow",children:"Published lesson"}),p.jsx("h3",{children:Ue.title}),p.jsx("p",{children:Ue.summary||Ue.challenge||"Practice the skills from this unit."}),p.jsxs("div",{className:"curriculum-meta",children:[p.jsxs("span",{children:[Ue.points??0," published points"]}),p.jsxs("span",{children:[Ue.mode==="function"?"Function":"Script"," · Python"]})]}),p.jsxs("div",{className:"curriculum-code-tabs",role:"tablist","aria-label":"Lesson code",children:[p.jsx("button",{type:"button",role:"tab","aria-selected":U==="starter",className:U==="starter"?"active":"",onClick:()=>F("starter"),children:"Starter code"}),p.jsxs("button",{type:"button",role:"tab","aria-selected":U==="solution",className:U==="solution"?"active":"",onClick:()=>F("solution"),children:[p.jsx(Fh,{size:14})," Solution"]})]}),U==="starter"?p.jsx("pre",{className:"curriculum-code",children:p.jsx("code",{children:Ue.starter||"# No starter code provided"})}):p.jsxs("div",{className:"curriculum-solution-locked",role:"status",children:[p.jsx(Fh,{size:20}),p.jsxs("div",{children:[p.jsx("strong",{children:"Teacher-only solutions"}),p.jsx("p",{children:"Solutions must be loaded from protected storage after teacher sign-in and authorization. Answer keys are not included in the public React preview."})]})]}),oe?p.jsxs("a",{className:"btn",href:Td(Qu,we),children:["Open lesson in React preview ",p.jsx(Jg,{size:14})]}):p.jsx("p",{className:"muted",children:"This newer published lesson is not yet in the React snapshot."}),p.jsxs("div",{className:"curriculum-assignment-editor",children:[p.jsx("h4",{children:"Assign lesson"}),Ce?p.jsxs(p.Fragment,{children:[p.jsx("p",{className:"curriculum-assignment-warning",children:"Preview only. Assignments are saved in this browser, not sent to students or the live gradebook."}),p.jsxs("form",{onSubmit:j,className:"curriculum-assignment-form",children:[p.jsxs("label",{children:["Assign to",p.jsxs("select",{value:R,onChange:q=>O(q.target.value),children:[p.jsxs("option",{value:"section",children:["Whole class · ",ye.length," sample students"]}),p.jsx("option",{value:"selected",children:"Selected students"})]})]}),R==="selected"&&p.jsxs("fieldset",{className:"curriculum-recipient-picker",children:[p.jsx("legend",{children:"Choose students"}),ye.length?ye.map(q=>p.jsxs("label",{children:[p.jsx("input",{type:"checkbox",checked:A.includes(q.id),onChange:T=>Y(P=>T.target.checked?[...P,q.id]:P.filter(G=>G!==q.id))}),p.jsx("span",{children:Gl(q)})]},q.id)):p.jsx("p",{children:"No sample students are enrolled in this section."})]}),p.jsxs("div",{className:"curriculum-assignment-fields",children:[p.jsxs("label",{children:["Due date",p.jsx("input",{type:"date",required:!0,value:ne,onChange:q=>H(q.target.value)})]}),p.jsxs("label",{children:["Points",p.jsx("input",{type:"number",required:!0,min:"0",max:"1000",step:"1",value:ae,onChange:q=>D(q.target.value)})]})]}),p.jsxs("div",{className:"curriculum-assignment-actions",children:[p.jsx("button",{type:"submit",className:"btn primary",children:se?"Update preview assignment":"Save preview assignment"}),se&&p.jsx("button",{type:"button",className:"btn",onClick:X,children:"Remove assignment"})]})]}),se&&p.jsxs("p",{className:"curriculum-current-assignment",children:["Saved for ",se.scope==="section"?"whole class":se.studentIds.length+" selected students"," · ","Due ",se.dueDate," · ",se.points," points"]}),K&&p.jsx("p",{className:"curriculum-assignment-feedback",role:"status",children:K})]}):p.jsxs("p",{className:"curriculum-assignment-warning",children:[(l==null?void 0:l.name)||"This section"," uses a different course. Choose a Computer Science I section to assign CS1 lessons."]})]})]})]})]})}function v0({students:l}){return p.jsxs("section",{className:"panel",children:[p.jsx("h2",{children:"Section setup"}),p.jsx("p",{children:"Visual preview of configured sections. This sandbox cannot create live classes or assign students."}),p.jsx("div",{className:"setup-grid",children:ho.map(c=>p.jsxs("div",{className:"setup-card",children:[p.jsx("div",{className:"eyebrow",children:c.name}),p.jsx("h3",{children:Yp(c.course)}),p.jsxs("span",{children:[l.filter(d=>d.sections.includes(c.id)).length," sample students"]})]},c.id))})]})}function x0({section:l,students:c,submissions:d}){const[g,x]=Oe.useState(Ip()[0]),[b,C]=Oe.useState(null),N=Ip(),S=c.map(R=>{const O=d.filter(A=>A.studentId===R.id&&A.sectionId===l.id&&A.week===g);return{student:R,copies:O,latest:O.at(-1)}}),L=S.filter(R=>R.latest).length;return p.jsxs("section",{className:"panel journal-inbox",children:[p.jsxs("div",{className:"section-heading",children:[p.jsxs("div",{children:[p.jsx("div",{className:"eyebrow",children:"Teacher review · Sample records"}),p.jsxs("h2",{children:[p.jsx(Xp,{size:19})," Weekly journal submissions"]}),p.jsx("p",{children:"Review essays and logic puzzles from this section. Journals are never automatically graded."})]}),p.jsxs("label",{children:["Journal week ",p.jsx("select",{value:g,onChange:R=>{x(R.target.value),C(null)},children:N.map(R=>p.jsx("option",{value:R,children:ql(R)},R))})]})]}),p.jsxs("div",{className:"stat-grid",children:[p.jsxs("div",{className:"stat-card",children:[p.jsx("strong",{children:L}),p.jsx("span",{children:"Submitted"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsx("strong",{children:S.length-L}),p.jsx("span",{children:"Missing"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsx("strong",{children:S.length}),p.jsx("span",{children:"Students in section"})]})]}),p.jsx("div",{className:"journal-inbox-rows",children:S.map(({student:R,latest:O,copies:A})=>p.jsxs("div",{className:"journal-inbox-row",children:[p.jsxs("div",{children:[p.jsxs("strong",{children:[R.first," ",R.last]}),p.jsxs("small",{children:["@",R.github]})]}),p.jsx("span",{className:`journal-status-pill ${O?"submitted":""}`,children:O?"Submitted":"Missing"}),p.jsx("span",{className:"journal-inbox-date",children:O?new Date(O.submittedAt).toLocaleString():"—"}),p.jsx("button",{className:"btn",disabled:!O,onClick:()=>C(b===R.id?null:R.id),children:b===R.id?"Close":"Review"}),b===R.id&&O&&p.jsxs("div",{className:"journal-review-detail",children:[p.jsxs("div",{className:"eyebrow",children:[O.type.replace("-"," ")," · ",A.length," ",A.length===1?"hand-in":"hand-ins"," · Manual review"]}),p.jsx("div",{className:"journal-history-answer",children:O.response}),p.jsxs("p",{className:"hint",children:["AI declaration: ",O.aiUse==="none"?"No AI reported":`Disclosed · ${O.aiDetails}`]})]})]},R.id))}),p.jsx("p",{className:"hint",children:"This inbox uses fictional students and demo submissions created in this browser. No grades or messages are sent."})]})}function b0({students:l,journalSubmissions:c}){const[d,g]=xn("designlab:teacher-tab","overview"),[x,b]=xn("designlab:section","p1"),[C,N]=xn("designlab:sort","last"),[S,L]=xn("designlab:week",xm[0].key),[R,O]=Oe.useState(null),[A,Y]=Oe.useState(!1),[ne,H]=xn("designlab:teacher-preview-assignments",[]),ae=["overview","curriculum","journals"].includes(d)?d:"overview",D=ym(x)||ho[0],U=Oe.useMemo(()=>l.filter(F=>F.sections.includes(x)).sort((F,K)=>bm(F,K,C)),[l,x,C]);return p.jsxs("div",{className:"main-content teacher-screen",children:[p.jsx(nh,{eyebrow:"Your classroom · Frontend preview",actions:p.jsx(is,{children:ae==="curriculum"?"Real CS1 catalog · demo assignments":"Sample student data"}),children:"Teacher dashboard"}),p.jsx("p",{className:"page-subtitle",children:ae==="curriculum"?"Browse published Computer Science I lessons and configure preview-only section assignments.":"Explore your class layout with fictional students. No real student information is loaded."}),p.jsx(r0,{sectionId:D.id,onSectionChange:F=>{b(F),O(null)},setupOpen:A,onToggleSetup:()=>Y(F=>!F)}),A&&p.jsx("div",{id:"teacher-section-setup",children:p.jsx(v0,{students:l})}),p.jsx(s0,{tab:ae,onChange:F=>{g(F),O(null)}}),ae==="curriculum"&&p.jsx(y0,{section:D,students:U,assignments:ne,setAssignments:H}),ae==="overview"&&p.jsx(p0,{section:D,students:U,week:S,setWeek:L,sort:C,setSort:N,expanded:R,setExpanded:O}),ae==="journals"&&p.jsx(x0,{section:D,students:U,submissions:c})]})}function w0({children:l}){return p.jsx("div",{className:"empty",children:l})}function k0({student:l,isEditing:c,onToggleEdit:d,onDone:g,onPatch:x}){const b=Gl(l);return p.jsxs("article",{className:"account-card",children:[p.jsxs("div",{className:"account-row",children:[p.jsx("span",{className:"avatar",children:b.slice(0,1).toUpperCase()}),p.jsxs("div",{className:"account-identity",children:[p.jsx("h3",{children:b}),p.jsxs("small",{children:["@",l.github]})]}),p.jsx("button",{className:"icon-button","aria-label":`Edit ${b}`,onClick:d,children:c?p.jsx(jd,{size:17}):p.jsx(eh,{size:17})})]}),p.jsxs("div",{className:"account-footer",children:[p.jsx(is,{tone:l.sheetName?"success":"",children:l.sheetName?"Sheet matched":"Student name fallback"}),l.sections.map(C=>p.jsxs(is,{children:["Period ",vm(C)]},C))]}),c&&p.jsxs("div",{className:"account-edit",children:[p.jsxs("label",{children:["Google Sheet name",p.jsx("input",{value:l.sheetName||"",onChange:C=>x({sheetName:C.target.value||null})})]}),p.jsxs("label",{children:["Student-provided backup",p.jsx("input",{value:l.studentName||"",onChange:C=>x({studentName:C.target.value})})]}),p.jsx("button",{className:"btn",onClick:g,children:"Done"})]})]})}function S0({students:l,sort:c,setSort:d,patchStudent:g}){const[x,b]=xn("designlab:period-filter","all"),[C,N]=Oe.useState(""),[S,L]=Oe.useState(null),R=Oe.useMemo(()=>{const O=C.toLowerCase();return l.filter(A=>(x==="all"||A.sections.some(Y=>vm(Y)===x))&&[Gl(A),A.github,A.studentName].some(Y=>Y.toLowerCase().includes(O))).sort((A,Y)=>bm(A,Y,c))},[l,x,c,C]);return p.jsxs("section",{className:"panel",children:[p.jsxs("div",{className:"section-heading",children:[p.jsxs("div",{children:[p.jsx("h2",{children:"Accounts"}),p.jsx("p",{children:"Google Sheet name first, student-entered name second, then GitHub name."})]}),p.jsxs(is,{children:[R.length," accounts"]})]}),p.jsxs("div",{className:"filters",children:[p.jsxs("label",{children:[p.jsx(Kf,{size:16})," ",p.jsx("input",{"aria-label":"Search accounts",value:C,placeholder:"Search name or GitHub username",onChange:O=>N(O.target.value)})]}),p.jsxs("label",{children:["Class period",p.jsxs("select",{value:x,onChange:O=>b(O.target.value),children:[p.jsx("option",{value:"all",children:"All periods"}),t0.map(O=>p.jsx("option",{children:O},O))]})]}),p.jsx(wm,{label:"Sort",value:c,onChange:d})]}),p.jsx("p",{className:"info-text",children:"Change a sample Sheet name to test precedence and fallback behavior. These edits are saved only in browser storage."}),p.jsx("div",{className:"account-grid",children:R.map(O=>p.jsx(k0,{student:O,isEditing:S===O.id,onToggleEdit:()=>L(S===O.id?null:O.id),onDone:()=>L(null),onPatch:A=>g(O.id,A)},O.id))}),!R.length&&p.jsx(w0,{children:"No accounts match those filters."})]})}function _0({students:l,setStudents:c}){const[d,g]=xn("designlab:admin-sort","last"),[x,b]=Oe.useState(""),C=(N,S)=>c(L=>L.map(R=>R.id===N?{...R,...S}:R));return p.jsxs("div",{className:"main-content teacher-screen admin-screen",children:[p.jsx(nh,{eyebrow:"Global management · Frontend preview",actions:p.jsx(is,{children:"Sample accounts only"}),children:"Admin dashboard"}),p.jsxs("p",{className:"page-subtitle",children:[p.jsx(th,{size:16,"aria-hidden":"true"})," Account management is separate from class-specific teacher tools. This demo has no real accounts or admin permissions attached."]}),p.jsxs("div",{className:"admin-actions",children:[p.jsxs("button",{type:"button",className:"btn",onClick:()=>{c(vd),b("Fictional account records restored.")},children:[p.jsx($f,{size:15})," Reset sample accounts"]}),x&&p.jsx("small",{role:"status",children:x})]}),p.jsx(S0,{students:l,sort:d,setSort:g,patchStudent:C})]})}const C0={essay:"Think about a time you solved a difficult problem. Explain what you tried first, how you changed your approach, and what you learned. Use specific evidence.","logic-puzzle":"A robot follows this pattern: 2, 6, 12, 20, 30, __. Find the next number. Explain the pattern and show why your answer fits."},Of={response:"",type:"essay",aiUse:"",aiDetails:""};function T0({submissions:l,setSubmissions:c}){var Le;const[d,g]=xn("designlab:journal-section",ho[0].id),x=ho.find(oe=>oe.id===d)||ho[0],b=vd.filter(oe=>oe.sections.includes(x.id)),[C,N]=xn("designlab:journal-student",vd[0].id),S=b.find(oe=>oe.id===C)||b[0],L=Oe.useMemo(()=>Ip(),[]),[R,O]=xn("designlab:journal-week",L[0]),A=L.includes(R)?R:L[0],[Y,ne]=xn("designlab:journal-drafts",{}),[H,ae]=Oe.useState(""),[D,U]=Oe.useState(!1),F=ng(x.id,S.id,A),K=Y[F]||Of,V=l.filter(oe=>oe.studentId===S.id&&oe.sectionId===x.id&&oe.week===A),ge=V.at(-1),ue=K.response.trim()?K.response.trim().split(/\s+/).length:0;function we(oe,Ce){ne(se=>({...se,[F]:{...se[F]||Of,[oe]:Ce}})),ae("Draft saved in this browser.")}function Ue(oe){oe.preventDefault();const Ce=rg(K);if(Ce){ae(Ce);return}const se={id:`demo-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,sectionId:x.id,studentId:S.id,studentName:`${S.first} ${S.last}`,courseId:x.course,week:A,response:K.response.trim(),type:K.type,aiUse:K.aiUse,aiDetails:K.aiDetails.trim(),submittedAt:new Date().toISOString()};c(ye=>[...ye,se]),ae("Demo submission saved locally. Check the Teacher dashboard → Journals tab to review it.")}return p.jsxs("div",{className:"main-content journal-screen",children:[p.jsx("div",{className:"eyebrow",children:"Your classes · Written work"}),p.jsxs("header",{className:"journal-heading",children:[p.jsxs("div",{children:[p.jsx("h1",{children:"Weekly Journals"}),p.jsx("p",{children:"Essay responses, reflections, and logic puzzles—all in one place."})]}),p.jsxs("span",{className:"chip",children:[p.jsx(th,{size:14})," Local demo only"]})]}),p.jsxs("section",{className:"journal-card journal-selection","aria-label":"Select a journal",children:[p.jsxs("label",{children:["Class section",p.jsx("select",{value:x.id,onChange:oe=>{g(oe.target.value),ae("")},children:ho.map(oe=>{var Ce;return p.jsxs("option",{value:oe.id,children:[oe.name," · ",(Ce=yi(oe.course))==null?void 0:Ce.label]},oe.id)})})]}),p.jsxs("label",{children:["Preview as student",p.jsx("select",{value:S.id,onChange:oe=>{N(oe.target.value),ae("")},children:b.map(oe=>p.jsxs("option",{value:oe.id,children:[oe.first," ",oe.last," (sample)"]},oe.id))})]}),p.jsxs("label",{children:["Journal week",p.jsx("select",{value:A,onChange:oe=>{O(oe.target.value),ae("")},children:L.map(oe=>p.jsxs("option",{value:oe,children:["Week of ",ql(oe)]},oe))})]})]}),p.jsxs("section",{className:"journal-card journal-editor-card",children:[p.jsxs("div",{className:"journal-section-heading",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"eyebrow",children:[(Le=yi(x.course))==null?void 0:Le.label," · ",x.name]}),p.jsxs("h2",{children:["Journal · Week of ",ql(A)]})]}),p.jsx("span",{className:`journal-status-pill ${ge?"submitted":""}`,children:ge?"Submitted":"Not submitted"})]}),p.jsx("p",{className:"journal-instructions",children:"This is a fictional prompt for design testing. In production, your teacher would publish the weekly assignment."}),p.jsxs("form",{onSubmit:Ue,children:[p.jsxs("label",{children:["Response type",p.jsxs("select",{value:K.type,onChange:oe=>we("type",oe.target.value),children:[p.jsx("option",{value:"essay",children:"Essay or written reflection"}),p.jsx("option",{value:"logic-puzzle",children:"Logic puzzle or reasoning task"})]})]}),p.jsxs("div",{className:"journal-prompt",children:[p.jsx("strong",{children:"Sample prompt"}),p.jsx("p",{children:C0[K.type]})]}),p.jsx("label",{htmlFor:"journal-answer",children:"Your response"}),p.jsx("textarea",{id:"journal-answer",rows:"13",maxLength:"100000",spellCheck:!0,placeholder:"Write your explanation here. Show steps and reasoning for logic puzzles.",value:K.response,onChange:oe=>we("response",oe.target.value)}),p.jsxs("div",{className:"journal-writing-meta",children:[p.jsxs("span",{children:[ue," words"]}),p.jsxs("span",{children:[p.jsx(zp,{size:13})," Autosaved in this browser"]})]}),p.jsxs("div",{className:"journal-integrity",children:[p.jsxs("label",{children:["AI-use declaration",p.jsxs("select",{value:K.aiUse,onChange:oe=>we("aiUse",oe.target.value),children:[p.jsx("option",{value:"",children:"Choose one"}),p.jsx("option",{value:"none",children:"I did not use AI-generated content"}),p.jsx("option",{value:"disclosed",children:"I used AI and will explain how"})]})]}),p.jsx("p",{className:"hint",children:"This is a declaration for review, not an automatic grade. Follow your teacher's classroom AI policy."}),K.aiUse==="disclosed"&&p.jsxs("label",{children:["Describe the AI assistance",p.jsx("textarea",{rows:"3",value:K.aiDetails,onChange:oe=>we("aiDetails",oe.target.value),placeholder:"Identify which parts involved AI assistance."})]})]}),p.jsxs("div",{className:"journal-actions",children:[p.jsxs("button",{type:"button",className:"btn",onClick:()=>{ae("Draft saved in this browser.")},children:[p.jsx(zp,{size:15})," Save draft"]}),p.jsxs("button",{type:"submit",className:"btn submit",children:[p.jsx(Gf,{size:15})," Demo submit"]})]}),p.jsx("p",{role:"status",className:"journal-submit-status",children:H})]}),p.jsxs("div",{className:"journal-bottom-row",children:[p.jsx("p",{className:"hint",children:"No real submissions are sent. Each demo submission records a separate copy; drafts remain editable."}),p.jsxs("button",{type:"button",className:"btn",onClick:()=>U(oe=>!oe),children:[p.jsx(ty,{size:15})," ",D?"Hide history":`Submission history (${V.length})`]})]}),D&&p.jsx("div",{className:"journal-history",children:V.length?V.map(oe=>p.jsxs("details",{className:"journal-history-item",children:[p.jsxs("summary",{children:[p.jsx(Dp,{size:16})," Submitted ",new Date(oe.submittedAt).toLocaleString()," · ",oe.type]}),p.jsx("div",{className:"journal-history-answer",children:oe.response})]},oe.id)):p.jsx("p",{className:"muted",children:"No submissions yet for this week."})})]})]})}const N0=`# Attendance Percentage

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
`,j0=`# Competition Leaderboard Ranks

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
`,E0=`# Confidence Pool Total

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
`,L0=`# Count Matching Events

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
`,P0=`# Longest Winning Streak

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
`,A0=`# Format a Score Line

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
`,R0=`# Second Largest Distinct Value

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
`,I0=`# Sum Positive Values

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
`,O0=`# Count Pairs With Target Sum

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
`,M0=`# Temperature Alert

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
`,D0=`using System;

public static class Solution {
    public static int AttendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,z0=`public class Solution {
    public static int attendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,F0=`export function attendancePercent(present, total) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,W0=`def attendance_percent(present: int, total: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,H0=`using System;

public static class Solution {
    public static int[] CompetitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,B0=`public class Solution {
    public static int[] competitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,U0=`export function competitionRanks(scores) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,q0=`def competition_ranks(scores: list[int]) -> list[int]:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,$0=`using System;

public static class Solution {
    public static int ConfidenceTotal(bool[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,K0=`public class Solution {
    public static int confidenceTotal(boolean[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,G0=`export function confidenceTotal(correct, weights) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Y0=`def confidence_total(correct: list[bool], weights: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,V0=`using System;

public static class Solution {
    public static int CountMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,J0=`public class Solution {
    public static int countMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,X0=`export function countMatches(events, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Q0=`def count_matches(events: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Z0=`using System;

public static class Solution {
    public static int LongestWinStreak(bool[] wins) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,eb=`public class Solution {
    public static int longestWinStreak(boolean[] wins) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,tb=`export function longestWinStreak(wins) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,nb=`def longest_win_streak(wins: list[bool]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,rb=`using System;

public static class Solution {
    public static string ScoreLine(string name, int points) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,ib=`public class Solution {
    public static String scoreLine(String name, int points) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,sb=`export function scoreLine(name, points) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,ob=`def score_line(name: str, points: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,ab=`using System;

public static class Solution {
    public static int? SecondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,lb=`public class Solution {
    public static Integer secondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,ub=`export function secondLargestDistinct(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,cb=`def second_largest_distinct(numbers: list[int]) -> int | None:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,db=`using System;

public static class Solution {
    public static int SumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,pb=`public class Solution {
    public static int sumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,hb=`export function sumPositives(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,fb=`def sum_positives(numbers: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,mb=`using System;

public static class Solution {
    public static int TargetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,gb=`public class Solution {
    public static int targetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,yb=`export function targetPairs(numbers, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,vb=`def target_pairs(numbers: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,xb=`using System;

public static class Solution {
    public static string TemperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,bb=`public class Solution {
    public static String temperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,wb=`export function temperatureAlert(degrees) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,kb=`def temperature_alert(degrees: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Sb="attendance-percent",_b=[{input:[18,20],expected:90},{input:[2,3],expected:66},{input:[0,30],expected:0},{input:[7,7],expected:100}],Cb={challengeId:Sb,cases:_b},Tb="competition-ranks",Nb=[{input:[[50,50,40,20,40]],expected:[1,1,3,5,3]},{input:[[7,12,9]],expected:[3,1,2]},{input:[[5,5,5]],expected:[1,1,1]},{input:[[]],expected:[]}],jb={challengeId:Tb,cases:Nb},Eb="confidence-total",Lb=[{input:[[!0,!1,!0],[20,18,15]],expected:35},{input:[[!1,!1],[5,8]],expected:0},{input:[[],[]],expected:0}],Pb={challengeId:Eb,cases:Lb},Ab="count-matches",Rb=[{input:[[2,1,2,3,2],2],expected:3},{input:[[],7],expected:0},{input:[[3,4],5],expected:0}],Ib={challengeId:Ab,cases:Rb},Ob="longest-win-streak",Mb=[{input:[[!0,!0,!1,!0,!0,!0]],expected:3},{input:[[!1,!1]],expected:0},{input:[[]],expected:0},{input:[[!0,!0]],expected:2}],Db={challengeId:Ob,cases:Mb},zb="score-line",Fb=[{input:["Avery",18],expected:"Avery: 18 points"},{input:["Jordan Lee",0],expected:"Jordan Lee: 0 points"},{input:["Mia",-2],expected:"Mia: -2 points"}],Wb={challengeId:zb,cases:Fb},Hb="second-largest-distinct",Bb=[{input:[[3,1,3,2]],expected:2},{input:[[5,5]],expected:null},{input:[[-10,-7,-7,-2]],expected:-7},{input:[[1]],expected:null}],Ub={challengeId:Hb,cases:Bb},qb="sum-positives",$b=[{input:[[-3,6,0,2,-1]],expected:8},{input:[[-5,0,-1]],expected:0},{input:[[]],expected:0}],Kb={challengeId:qb,cases:$b},Gb="target-pairs",Yb=[{input:[[1,3,2,2,4],4],expected:2},{input:[[2,2,2],4],expected:3},{input:[[1,2,3],9],expected:0},{input:[[],1],expected:0}],Vb={challengeId:Gb,cases:Yb},Jb="temperature-alert",Xb=[{input:[32],expected:"Freeze"},{input:[90],expected:"Heat"},{input:[72],expected:"Normal"},{input:[-5],expected:"Freeze"}],Qb={challengeId:Jb,cases:Xb},Zb=["python","java","javascript","csharp"],ew=[{id:"temperature-alert",title:"Temperature Alert",summary:"Choose a status label based on a temperature reading.",difficulty:"Very Easy",points:5,tags:["conditionals","comparisons","functions"],prerequisites:["functions","conditionals"],suggestedCourses:["computer-science-1","game-programming","uil"],languages:["python","java","javascript","csharp"],path:"problems/temperature-alert"},{id:"count-matches",title:"Count Matching Events",summary:"Count how often a particular event code appears.",difficulty:"Easy",points:10,tags:["arrays","loops","comparisons"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/count-matches"},{id:"sum-positives",title:"Sum Positive Values",summary:"Add only the positive values in a data set.",difficulty:"Easy",points:10,tags:["arrays","loops","accumulators"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/sum-positives"},{id:"score-line",title:"Format a Score Line",summary:"Format a player score as a clear single line of text.",difficulty:"Easy",points:10,tags:["strings","formatting","functions"],prerequisites:["variables","strings","functions"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/score-line"},{id:"attendance-percent",title:"Attendance Percentage",summary:"Convert an attendance fraction into a whole-number percentage.",difficulty:"Easy",points:10,tags:["arithmetic","integer-division","functions"],prerequisites:["variables","functions","arithmetic"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/attendance-percent"},{id:"longest-win-streak",title:"Longest Winning Streak",summary:"Find the longest consecutive run of winning results.",difficulty:"Medium",points:15,tags:["arrays","loops","state"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/longest-win-streak"},{id:"confidence-total",title:"Confidence Pool Total",summary:"Compute the points earned from predictions.",difficulty:"Medium",points:15,tags:["arrays","loops","parallel-arrays"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/confidence-total"},{id:"second-largest-distinct",title:"Second Largest Distinct Value",summary:"Return the second-highest unique integer in a collection.",difficulty:"Medium",points:20,tags:["arrays","comparisons","distinct-values"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/second-largest-distinct"},{id:"target-pairs",title:"Count Pairs With Target Sum",summary:"Count pairs of positions that add to a target.",difficulty:"Hard",points:25,tags:["arrays","nested-loops","counting"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/target-pairs"},{id:"competition-ranks",title:"Competition Leaderboard Ranks",summary:"Assign ranks while handling tied scores and skipped positions.",difficulty:"Hard",points:25,tags:["arrays","sorting","ties"],prerequisites:["functions","loops","arrays","sorting"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/competition-ranks"}],Sm={languages:Zb,challenges:ew},tw=Object.assign({"../challenge-bank/problems/attendance-percent/problem.md":N0,"../challenge-bank/problems/competition-ranks/problem.md":j0,"../challenge-bank/problems/confidence-total/problem.md":E0,"../challenge-bank/problems/count-matches/problem.md":L0,"../challenge-bank/problems/longest-win-streak/problem.md":P0,"../challenge-bank/problems/score-line/problem.md":A0,"../challenge-bank/problems/second-largest-distinct/problem.md":R0,"../challenge-bank/problems/sum-positives/problem.md":I0,"../challenge-bank/problems/target-pairs/problem.md":O0,"../challenge-bank/problems/temperature-alert/problem.md":M0}),nw=Object.assign({"../challenge-bank/problems/attendance-percent/starters/Solution.cs":D0,"../challenge-bank/problems/attendance-percent/starters/Solution.java":z0,"../challenge-bank/problems/attendance-percent/starters/javascript.js":F0,"../challenge-bank/problems/attendance-percent/starters/python.py":W0,"../challenge-bank/problems/competition-ranks/starters/Solution.cs":H0,"../challenge-bank/problems/competition-ranks/starters/Solution.java":B0,"../challenge-bank/problems/competition-ranks/starters/javascript.js":U0,"../challenge-bank/problems/competition-ranks/starters/python.py":q0,"../challenge-bank/problems/confidence-total/starters/Solution.cs":$0,"../challenge-bank/problems/confidence-total/starters/Solution.java":K0,"../challenge-bank/problems/confidence-total/starters/javascript.js":G0,"../challenge-bank/problems/confidence-total/starters/python.py":Y0,"../challenge-bank/problems/count-matches/starters/Solution.cs":V0,"../challenge-bank/problems/count-matches/starters/Solution.java":J0,"../challenge-bank/problems/count-matches/starters/javascript.js":X0,"../challenge-bank/problems/count-matches/starters/python.py":Q0,"../challenge-bank/problems/longest-win-streak/starters/Solution.cs":Z0,"../challenge-bank/problems/longest-win-streak/starters/Solution.java":eb,"../challenge-bank/problems/longest-win-streak/starters/javascript.js":tb,"../challenge-bank/problems/longest-win-streak/starters/python.py":nb,"../challenge-bank/problems/score-line/starters/Solution.cs":rb,"../challenge-bank/problems/score-line/starters/Solution.java":ib,"../challenge-bank/problems/score-line/starters/javascript.js":sb,"../challenge-bank/problems/score-line/starters/python.py":ob,"../challenge-bank/problems/second-largest-distinct/starters/Solution.cs":ab,"../challenge-bank/problems/second-largest-distinct/starters/Solution.java":lb,"../challenge-bank/problems/second-largest-distinct/starters/javascript.js":ub,"../challenge-bank/problems/second-largest-distinct/starters/python.py":cb,"../challenge-bank/problems/sum-positives/starters/Solution.cs":db,"../challenge-bank/problems/sum-positives/starters/Solution.java":pb,"../challenge-bank/problems/sum-positives/starters/javascript.js":hb,"../challenge-bank/problems/sum-positives/starters/python.py":fb,"../challenge-bank/problems/target-pairs/starters/Solution.cs":mb,"../challenge-bank/problems/target-pairs/starters/Solution.java":gb,"../challenge-bank/problems/target-pairs/starters/javascript.js":yb,"../challenge-bank/problems/target-pairs/starters/python.py":vb,"../challenge-bank/problems/temperature-alert/starters/Solution.cs":xb,"../challenge-bank/problems/temperature-alert/starters/Solution.java":bb,"../challenge-bank/problems/temperature-alert/starters/javascript.js":wb,"../challenge-bank/problems/temperature-alert/starters/python.py":kb}),rw=Object.assign({"../challenge-bank/problems/attendance-percent/examples.json":Cb,"../challenge-bank/problems/competition-ranks/examples.json":jb,"../challenge-bank/problems/confidence-total/examples.json":Pb,"../challenge-bank/problems/count-matches/examples.json":Ib,"../challenge-bank/problems/longest-win-streak/examples.json":Db,"../challenge-bank/problems/score-line/examples.json":Wb,"../challenge-bank/problems/second-largest-distinct/examples.json":Ub,"../challenge-bank/problems/sum-positives/examples.json":Kb,"../challenge-bank/problems/target-pairs/examples.json":Vb,"../challenge-bank/problems/temperature-alert/examples.json":Qb}),Ad=Sm.challenges,Kp=Sm.languages,_m={python:"Python",java:"Java",javascript:"JavaScript",csharp:"C#"},iw={python:"python.py",java:"Solution.java",javascript:"javascript.js",csharp:"Solution.cs"};function Cm(l){return Ad.find(c=>c.id===l)||null}function sw(l){return tw[`../challenge-bank/problems/${l}/problem.md`]??""}function ow(l,c){return nw[`../challenge-bank/problems/${l}/starters/${iw[c]}`]??""}function aw(l){var c;return((c=rw[`../challenge-bank/problems/${l}/examples.json`])==null?void 0:c.cases)??[]}const lw=[...new Set(Ad.flatMap(l=>l.tags))].sort((l,c)=>l.localeCompare(c)),uw=["Very Easy","Easy","Medium","Hard"];function cw({query:l="",topic:c="all",difficulty:d="all",course:g="all",language:x="all"}={}){const b=l.trim().toLocaleLowerCase();return Ad.filter(C=>(!b||[C.title,C.summary,...C.tags].join(" ").toLowerCase().includes(b))&&(c==="all"||C.tags.includes(c))&&(d==="all"||C.difficulty===d)&&(g==="all"||C.suggestedCourses.includes(g))&&(x==="all"||C.languages.includes(x))).slice().sort((C,N)=>C.title.localeCompare(N.title))}function Mf(l,c){var b;const[d,...g]=l.split(":"),x=g.join(":");return d==="lesson"?ta(yi(c),x):((b=Cm(x))==null?void 0:b.title)||x}function dw({grades:l=[],assignments:c=[],completedLessons:d=[]}){const[g,x]=Oe.useState("all"),b=g==="all"?l:l.filter(O=>O.courseId===g),C=Op(b),N=Cg(b),S=N[0],L=ns.map(O=>({...O,...Op(l.filter(A=>A.courseId===O.id))})),R=c.filter(O=>g==="all"||O.courseId===g).map(O=>({...O,status:Cd(O.id,{assignments:c,grades:l,completedLessons:d})})).filter(O=>O.status.state==="assigned"||O.status.state==="overdue").sort((O,A)=>O.dueDate.localeCompare(A.dueDate));return p.jsxs("div",{className:"main-content grades-screen",children:[p.jsxs("header",{className:"grades-heading",children:[p.jsxs("div",{children:[p.jsx("div",{className:"eyebrow",children:"Your progress"}),p.jsx("h1",{children:"Grades"}),p.jsx("p",{children:"See your earned points, weekly scores, and work still due."})]}),p.jsxs("label",{className:"grades-filter",children:["Course",p.jsxs("select",{value:g,onChange:O=>x(O.target.value),children:[p.jsx("option",{value:"all",children:"All courses"}),ns.map(O=>p.jsx("option",{value:O.id,children:O.label},O.id))]})]})]}),p.jsx("p",{className:"grades-preview-note",children:"This preview does not display real student grades or assignments. Verified scores remain in the current Playground."}),p.jsxs("div",{className:"grades-summary",children:[p.jsxs("div",{className:"grades-stat surface-card",children:[p.jsx(Gg,{size:19}),p.jsx("span",{children:"Points earned"}),p.jsxs("strong",{children:[C.earned," ",p.jsxs("small",{children:["/ ",C.possible]})]}),p.jsx("p",{children:C.percent===null?"No graded work yet":`${C.percent}% of graded points`})]}),p.jsxs("div",{className:"grades-stat surface-card",children:[p.jsx(Yf,{size:19}),p.jsx("span",{children:"Graded activities"}),p.jsx("strong",{children:C.count}),p.jsx("p",{children:"Lessons and challenges"})]}),p.jsxs("div",{className:"grades-stat surface-card",children:[p.jsx(Kg,{size:19}),p.jsx("span",{children:"Most recent scored week"}),p.jsx("strong",{children:S?`${S.earned} / ${S.possible}`:"—"}),p.jsx("p",{children:S?`Week of ${ql(S.week)}`:"No scores yet"})]})]}),p.jsxs("section",{className:"grades-panel surface-card",children:[p.jsx("h2",{children:"Weekly scores"}),N.length?p.jsx("div",{className:"grades-weeks",children:N.map(O=>p.jsxs("div",{className:"grades-week",children:[p.jsxs("div",{children:[p.jsxs("strong",{children:["Week of ",ql(O.week)]}),p.jsxs("small",{children:[O.count," scored ",O.count===1?"activity":"activities"]})]}),p.jsxs("div",{className:"grades-week-score",children:[p.jsxs("strong",{children:[O.earned," / ",O.possible," pts"]}),p.jsx("progress",{value:O.earned,max:Math.max(O.possible,1),"aria-label":`Week of ${ql(O.week)}: ${O.earned} of ${O.possible} points`})]})]},O.week))}):p.jsx("p",{children:"No graded work in this selection."})]}),g==="all"&&p.jsxs("section",{className:"grades-panel surface-card",children:[p.jsx("h2",{children:"By course"}),p.jsx("div",{className:"grades-course-list",children:L.map(O=>p.jsxs("div",{className:"grades-course-row","data-course":O.id,children:[p.jsx("span",{className:"grades-course-dot","aria-hidden":"true"}),p.jsx("strong",{children:O.label}),p.jsx("span",{children:O.count?`${O.earned} / ${O.possible} pts`:"No grades yet"})]},O.id))})]}),p.jsxs("section",{className:"grades-panel surface-card",children:[p.jsx("h2",{children:"Scored work"}),b.length?p.jsx("div",{className:"grades-entries",children:b.slice().sort((O,A)=>A.gradedAt.localeCompare(O.gradedAt)).map(O=>{var A;return p.jsxs("div",{className:"grades-entry",children:[p.jsxs("div",{children:[p.jsx("strong",{children:Mf(O.id,O.courseId)}),p.jsxs("small",{children:[p.jsx(sc,{size:13}),((A=yi(O.courseId))==null?void 0:A.label)||O.courseId," · ",bd(O.gradedAt)]})]}),p.jsxs("strong",{children:[O.earned," / ",O.possible," pts"]})]},O.id)})}):p.jsx("p",{children:"No scored lessons or challenges yet."})]}),p.jsxs("section",{className:"grades-panel surface-card",children:[p.jsx("h2",{children:"Still to complete"}),R.length?p.jsx("div",{className:"grades-entries",children:R.map(O=>{var A;return p.jsxs("div",{className:"grades-entry",children:[p.jsxs("div",{children:[p.jsx("strong",{children:Mf(O.id,O.courseId)}),p.jsx("small",{children:((A=yi(O.courseId))==null?void 0:A.label)||O.courseId})]}),p.jsxs("div",{className:"grades-due-meta",children:[p.jsx("span",{className:`assignment-status ${O.status.state}`,children:O.status.state==="overdue"?"Overdue":"Assigned"}),p.jsxs("small",{children:["Due ",bd(O.dueDate)]})]})]},O.id)})}):p.jsx("p",{children:"Nothing outstanding in this selection."})]})]})}function pw({filterCourse:l,onSelect:c,onBrowseCourse:d,grades:g=[]}){const[x,b]=Oe.useState(""),[C,N]=Oe.useState("all"),[S,L]=Oe.useState("all"),[R,O]=Oe.useState("all"),A=l||"all",Y=Oe.useMemo(()=>cw({query:x,difficulty:C,topic:S,language:R,course:A}),[x,C,S,R,A]),ne=()=>{b(""),N("all"),L("all"),O("all"),d(null)};return p.jsxs("div",{className:"main-content challenge-bank-screen",children:[p.jsxs("header",{className:"challenge-bank-intro",children:[p.jsxs("div",{className:"eyebrow",children:[p.jsx(Nd,{size:15})," Shared programming practice"]}),p.jsx("h1",{children:"Challenge Bank"}),p.jsx("p",{children:"One problem library for every class. Choose Python, Java, JavaScript, or C# when solving—without duplicating problems across courses."}),p.jsxs("div",{className:"challenge-summary",children:[p.jsx("strong",{children:Ad.length})," original challenges · ",p.jsx("strong",{children:"4"})," languages · ",p.jsx("strong",{children:"1"})," shared library"]})]}),p.jsxs("section",{className:"challenge-filters surface-card","aria-label":"Filter challenges",children:[p.jsxs("div",{className:"filter-title",children:[p.jsx(Qg,{size:17}),p.jsx("strong",{children:"Find a challenge"}),p.jsxs("button",{type:"button",className:"filter-clear",onClick:ne,children:[p.jsx(jd,{size:14})," Clear filters"]})]}),p.jsxs("div",{className:"challenge-filter-grid",children:[p.jsxs("label",{className:"challenge-search-label",children:["Search",p.jsxs("span",{className:"challenge-search",children:[p.jsx(Kf,{size:16}),p.jsx("input",{type:"search",value:x,placeholder:"Problem, skill, or topic",onChange:H=>b(H.target.value)})]})]}),p.jsxs("label",{children:["Course view",p.jsxs("select",{value:A,onChange:H=>d(H.target.value==="all"?null:H.target.value),children:[p.jsx("option",{value:"all",children:"All courses"}),ns.filter(H=>H.id!=="tsi-math").map(H=>p.jsx("option",{value:H.id,children:H.label},H.id))]})]}),p.jsxs("label",{children:["Difficulty",p.jsxs("select",{value:C,onChange:H=>N(H.target.value),children:[p.jsx("option",{value:"all",children:"Any difficulty"}),uw.map(H=>p.jsx("option",{value:H,children:H},H))]})]}),p.jsxs("label",{children:["Topic",p.jsxs("select",{value:S,onChange:H=>L(H.target.value),children:[p.jsx("option",{value:"all",children:"Any topic"}),lw.map(H=>p.jsx("option",{value:H,children:H},H))]})]}),p.jsxs("label",{children:["Language",p.jsxs("select",{value:R,onChange:H=>O(H.target.value),children:[p.jsx("option",{value:"all",children:"Any language"}),Kp.map(H=>p.jsx("option",{value:H,children:_m[H]},H))]})]})]}),p.jsx("p",{className:"challenge-filter-note",children:"Course matching is informational. Confirm students have learned the prerequisite skills before assigning problems."})]}),p.jsxs("div",{className:"challenge-results-heading",children:[p.jsxs("h2",{children:["Available challenges ",p.jsxs("span",{children:["(",Y.length,")"]})]}),p.jsx("span",{children:"Alphabetical order"})]}),Y.length?p.jsx("div",{className:"challenge-card-grid",children:Y.map(H=>p.jsxs("a",{className:"challenge-card surface-card",href:Wf(H.id),onClick:ae=>{ae.button!==0||ae.metaKey||ae.ctrlKey||ae.shiftKey||ae.altKey||(ae.preventDefault(),c(H.id))},children:[p.jsxs("div",{className:"challenge-card-top",children:[p.jsx("span",{className:"challenge-level level-"+H.difficulty.toLowerCase().replace(" ","-"),children:H.difficulty}),p.jsx("span",{className:"challenge-points",children:pd("challenge:"+H.id,g)?`${pd("challenge:"+H.id,g).earned} / ${pd("challenge:"+H.id,g).possible} pts earned`:`${H.points} pts available`})]}),p.jsx("h3",{children:H.title}),p.jsx("p",{children:H.summary}),p.jsx("div",{className:"challenge-tags",children:H.tags.map(ae=>p.jsx("span",{children:ae},ae))}),p.jsxs("div",{className:"challenge-course-tags",children:[H.suggestedCourses.slice(0,3).map(ae=>{var D,U;return p.jsx("span",{title:(D=yi(ae))==null?void 0:D.label,children:((U=yi(ae))==null?void 0:U.short)||ae},ae)}),H.suggestedCourses.length>3&&p.jsxs("span",{children:["+",H.suggestedCourses.length-3]})]}),p.jsxs("span",{className:"challenge-open",children:["Open challenge ",p.jsx(Mp,{size:16})]})]},H.id))}):p.jsxs("div",{className:"challenge-empty surface-card",children:[p.jsx("h3",{children:"No matching challenges"}),p.jsx("p",{children:"Try a broader topic or clear the filters."}),p.jsx("button",{className:"btn",onClick:ne,children:"Show all challenges"})]}),p.jsx("p",{className:"hint challenge-bottom-note",children:"Choose a problem, work through its examples, and compare your approach. Practice here does not count toward your grade."})]})}const hw=(l,c)=>"designlab:challenge-code:"+l+":"+c;function fw({challengeId:l,onBack:c}){const d=Cm(l),[g,x]=xn("designlab:challenge-language","python"),b=Kp.includes(g)?g:"python",[C,N]=xn("designlab:challenge-left-width",420),S=Oe.useRef(null);if(!d)return p.jsxs("div",{className:"main-content",children:[p.jsx("h1",{children:"Challenge not found"}),p.jsx("button",{className:"btn",onClick:c,children:"Back to bank"})]});const L=ow(l,b),R={id:l,title:d.title,language:b,starter:L,kind:"Challenge",challenge:d.summary,points:d.points,console:"Run or Check executes published examples in your selected language.",storageKey:hw(l,b),challengeExamples:aw(l),isChallenge:!0,isPublished:!1},O=A=>{if(!S.current)return;const Y=S.current.getBoundingClientRect();N(Math.max(280,Math.min(Y.width-360,A.clientX-Y.left)))};return p.jsxs("div",{className:"challenge-detail-page",children:[p.jsxs("div",{className:"challenge-breadcrumb",children:[p.jsxs("button",{onClick:c,children:[p.jsx(qg,{size:16})," Challenge Bank"]}),p.jsx("span",{children:"/"}),p.jsx("span",{children:d.title})]}),p.jsxs("header",{className:"challenge-detail-heading surface-card",children:[p.jsxs("div",{className:"eyebrow",children:["Shared challenge · ",d.difficulty," · ",d.points," available points in the published contract"]}),p.jsx("h1",{children:d.title}),p.jsx("p",{children:d.summary}),p.jsx("p",{children:"Run and Check execute student code using only published examples. No submissions, student records, official points or hidden grading are connected here."}),p.jsxs("div",{className:"challenge-prerequisites",children:[p.jsx("strong",{children:"Prerequisites:"}),d.prerequisites.map(A=>p.jsx("span",{children:A},A))]})]}),p.jsxs("div",{className:"challenge-workspace",ref:S,style:{"--challenge-left":C+"px"},children:[p.jsxs("section",{className:"challenge-instructions",children:[p.jsxs("div",{className:"pane-header",children:[p.jsxs("strong",{children:[p.jsx($g,{size:16})," Problem & examples"]}),p.jsx("span",{className:"challenge-points",children:"Practice only"})]}),p.jsx("div",{className:"markdown-preview challenge-markdown",dangerouslySetInnerHTML:{__html:tc(sw(l))}})]}),p.jsx(Ed,{axis:"columns",onDrag:O}),p.jsxs("section",{className:"challenge-editor-panel",children:[p.jsxs("div",{className:"challenge-runtime-toolbar",children:[p.jsxs("label",{className:"challenge-language-selector",children:["Language",p.jsx("select",{"aria-label":"Solution language",value:b,onChange:A=>x(A.target.value),children:Kp.map(A=>p.jsx("option",{value:A,children:_m[A]},A))})]}),p.jsx("span",{children:"Live public-example checks"})]}),p.jsx(hh,{lessonId:"challenge:"+l+":"+b,task:R},l+":"+b)]})]})]})}function mw(){const[l,c]=Oe.useState(()=>ad()),[d,g]=xn("designlab:course","computer-science-1"),[x,b]=xn("designlab:theme","dark"),[C,N]=xn("designlab:course-colors",{}),[S,L]=xn("designlab:sidebar",!0),[R,O]=xn("designlab:completed-lessons",[]),A=[],Y=[],ne=Tg(R,A),[H,ae]=Oe.useState({}),[D,U]=Oe.useState({}),[F,K]=Oe.useState(!0),V=Oe.useMemo(()=>ns.map(T=>{if(T.id==="computer-science-1")return T;if(T.id==="capstone")return{...T,units:[],lessons:[],lessonRecords:{},publishedContent:!1,projects:[]};const P=H[T.id];return P?{...T,...P,publishedContent:!0}:{...T,units:[],lessons:[],lessonRecords:{},projects:[],contentLoadingError:D[T.id]||null}}),[H,D]);Oe.useEffect(()=>{const T=new AbortController;let P=!0;return Promise.all(["game-programming","mobile-app-dev","uil","tsi-math"].map(async G=>{try{return{courseId:G,data:await Ig(G,{signal:T.signal})}}catch(z){return{courseId:G,error:String((z==null?void 0:z.message)||z)}}})).then(G=>{if(!P)return;const z={},re={};for(const Ae of G)Ae.data?z[Ae.courseId]=Ae.data:re[Ae.courseId]=Ae.error;ae(z),U(re),K(!1)}),()=>{P=!1,T.abort()}},[]),Oe.useEffect(()=>{c(ad(window.location.pathname,V))},[V]);const[ge,ue]=xn("designlab:students",vd),[we,Ue]=xn("designlab:journal-submissions",ig);Oe.useEffect(()=>{document.documentElement.dataset.theme=x},[x]),Oe.useEffect(()=>{xg(C,ns)},[C]);function Le(T,P){!ns.some(G=>G.id===T)||!_d(P)||N(G=>({...G&&typeof G=="object"?G:{},[T]:P.toUpperCase()}))}function oe(T){N(P=>{const G={...P&&typeof P=="object"?P:{}};return delete G[T],G})}Oe.useEffect(()=>{var P;l.page==="course"&&g(l.courseId);const T=l.page==="course"?(P=yi(l.courseId))==null?void 0:P.label:l.page==="admin"?"Admin dashboard":l.page==="teacher"?"Teacher dashboard":l.page==="grades"?"Grades":l.page==="journals"?"Weekly journals":l.page==="challenges"?"Challenge Bank":l.page==="challenge"?"Coding challenge":"Your playgrounds";document.title=`${T||"Playground"} | Ms. Whitby's Playground — React Lab`},[l.page,l.courseId,g]),Oe.useEffect(()=>{const T=()=>c(ad(window.location.pathname,V));return window.addEventListener("popstate",T),window.addEventListener("hashchange",T),()=>{window.removeEventListener("popstate",T),window.removeEventListener("hashchange",T)}},[V]);const Ce=Oe.useCallback(T=>{window.location.pathname!==T&&window.history.pushState({},"",T),c(ad(window.location.pathname,V)),window.scrollTo({top:0,behavior:"auto"})},[V]);function se(T,P){if(!T)return Ce(Ul());g(T),Ce(Td(T,P))}function ye(T,P,G=null){Ce(Hf(T,P,G))}function j(T){T==="teacher"?Ce(zh()):T==="admin"?Ce(zg()):T==="journals"?Ce(Fg()):T==="grades"?Ce(Wg()):T==="challenges"?Ce(Hl()):T==="course"?se(l.page==="course"?l.courseId:d):Ce(Ul())}const X=l.page,q=l.courseId||d;return p.jsxs("div",{className:"app-shell",children:[p.jsx(py,{sidebarOpen:S,onToggleSidebar:()=>L(!S),onHome:()=>Ce(Ul()),theme:x,setTheme:b}),p.jsxs("div",{className:uo("app-layout",!S&&"sidebar-closed"),children:[p.jsx(fy,{open:S,page:X,courseId:q,lessonId:l.page==="course"?l.lessonId:null,setPage:j,openCourse:se,completedLessons:ne,assignments:Y,grades:A,availableCourses:V,onOpenProject:ye}),p.jsx("main",{className:"main-panel",children:X==="home"?p.jsx(xy,{availableCourses:V,completedLessons:ne,openCourse:se,openTeacher:()=>Ce(zh()),openChallenges:()=>Ce(Hl())}):X==="course"?p.jsx(e0,{courseId:l.courseId,lessonId:l.lessonId,projectId:l.projectId,projectStepId:l.stepId,availableCourses:V,openCourse:se,openProject:ye,openChallenges:T=>Ce(Hl(T)),completedLessons:ne,assignments:Y,grades:A,onToggleLessonComplete:T=>O(P=>wg(P,T)),courseColors:C,onSetCourseColor:Le,onResetCourseColor:oe},l.courseId):X==="grades"?p.jsx(dw,{grades:A,assignments:Y,completedLessons:ne}):X==="challenges"?p.jsx(pw,{grades:A,filterCourse:l.filterCourse,onSelect:T=>Ce(Wf(T)),onBrowseCourse:T=>Ce(Hl(T))}):X==="challenge"?p.jsx(fw,{challengeId:l.challengeId,grades:A,onBack:()=>Ce(Hl())},l.challengeId):X==="journals"?p.jsx(T0,{submissions:we,setSubmissions:Ue}):X==="teacher"?p.jsx(b0,{students:ge,journalSubmissions:we}):X==="admin"?p.jsx(_0,{students:ge,setStudents:ue}):F?p.jsxs("div",{className:"main-content route-not-found",role:"status",children:[p.jsx("h1",{children:"Loading published course materials…"}),p.jsx("p",{children:"The lesson and project links will appear once the course catalogs are loaded."})]}):p.jsxs("div",{className:"main-content route-not-found",children:[p.jsx("div",{className:"eyebrow",children:"Link not found"}),p.jsx("h1",{children:"That playground page doesn't exist."}),p.jsx("p",{children:"Check the link or return to the list of playgrounds."}),p.jsx("button",{className:"btn primary",onClick:()=>Ce(Ul()),children:"See all playgrounds"})]})})]}),p.jsx(my,{})]})}Zm.createRoot(document.getElementById("root")).render(p.jsx(Gm.StrictMode,{children:p.jsx(mw,{})}));
