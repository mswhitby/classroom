var ag=Object.defineProperty;var lg=(l,u,d)=>u in l?ag(l,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[u]=d;var on=(l,u,d)=>lg(l,typeof u!="symbol"?u+"":u,d);(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))g(y);new MutationObserver(y=>{for(const b of y)if(b.type==="childList")for(const _ of b.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&g(_)}).observe(document,{childList:!0,subtree:!0});function d(y){const b={};return y.integrity&&(b.integrity=y.integrity),y.referrerPolicy&&(b.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?b.credentials="include":y.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function g(y){if(y.ep)return;y.ep=!0;const b=d(y);fetch(y.href,b)}})();function Yf(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var kp={exports:{}},Gu={},Sp={exports:{}},Lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function ug(){if(zh)return Lt;zh=1;var l=Symbol.for("react.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),_=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),I=Symbol.iterator;function R(M){return M===null||typeof M!="object"?null:(M=I&&M[I]||M["@@iterator"],typeof M=="function"?M:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},te=Object.assign,H={};function ae(M,Q,Se){this.props=M,this.context=Q,this.refs=H,this.updater=Se||V}ae.prototype.isReactComponent={},ae.prototype.setState=function(M,Q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Q,"setState")},ae.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function D(){}D.prototype=ae.prototype;function W(M,Q,Se){this.props=M,this.context=Q,this.refs=H,this.updater=Se||V}var F=W.prototype=new D;F.constructor=W,te(F,ae.prototype),F.isPureReactComponent=!0;var K=Array.isArray,Y=Object.prototype.hasOwnProperty,he={current:null},le={key:!0,ref:!0,__self:!0,__source:!0};function we(M,Q,Se){var De,qe={},ke=null,Ie=null;if(Q!=null)for(De in Q.ref!==void 0&&(Ie=Q.ref),Q.key!==void 0&&(ke=""+Q.key),Q)Y.call(Q,De)&&!le.hasOwnProperty(De)&&(qe[De]=Q[De]);var Ue=arguments.length-2;if(Ue===1)qe.children=Se;else if(1<Ue){for(var Ke=Array(Ue),tt=0;tt<Ue;tt++)Ke[tt]=arguments[tt+2];qe.children=Ke}if(M&&M.defaultProps)for(De in Ue=M.defaultProps,Ue)qe[De]===void 0&&(qe[De]=Ue[De]);return{$$typeof:l,type:M,key:ke,ref:Ie,props:qe,_owner:he.current}}function He(M,Q){return{$$typeof:l,type:M.type,key:Q,ref:M.ref,props:M.props,_owner:M._owner}}function je(M){return typeof M=="object"&&M!==null&&M.$$typeof===l}function ie(M){var Q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(Se){return Q[Se]})}var Ce=/\/+/g;function se(M,Q){return typeof M=="object"&&M!==null&&M.key!=null?ie(""+M.key):Q.toString(36)}function ye(M,Q,Se,De,qe){var ke=typeof M;(ke==="undefined"||ke==="boolean")&&(M=null);var Ie=!1;if(M===null)Ie=!0;else switch(ke){case"string":case"number":Ie=!0;break;case"object":switch(M.$$typeof){case l:case u:Ie=!0}}if(Ie)return Ie=M,qe=qe(Ie),M=De===""?"."+se(Ie,0):De,K(qe)?(Se="",M!=null&&(Se=M.replace(Ce,"$&/")+"/"),ye(qe,Q,Se,"",function(tt){return tt})):qe!=null&&(je(qe)&&(qe=He(qe,Se+(!qe.key||Ie&&Ie.key===qe.key?"":(""+qe.key).replace(Ce,"$&/")+"/")+M)),Q.push(qe)),1;if(Ie=0,De=De===""?".":De+":",K(M))for(var Ue=0;Ue<M.length;Ue++){ke=M[Ue];var Ke=De+se(ke,Ue);Ie+=ye(ke,Q,Se,Ke,qe)}else if(Ke=R(M),typeof Ke=="function")for(M=Ke.call(M),Ue=0;!(ke=M.next()).done;)ke=ke.value,Ke=De+se(ke,Ue++),Ie+=ye(ke,Q,Se,Ke,qe);else if(ke==="object")throw Q=String(M),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ie}function N(M,Q,Se){if(M==null)return M;var De=[],qe=0;return ye(M,De,"","",function(ke){return Q.call(Se,ke,qe++)}),De}function J(M){if(M._status===-1){var Q=M._result;Q=Q(),Q.then(function(Se){(M._status===0||M._status===-1)&&(M._status=1,M._result=Se)},function(Se){(M._status===0||M._status===-1)&&(M._status=2,M._result=Se)}),M._status===-1&&(M._status=0,M._result=Q)}if(M._status===1)return M._result.default;throw M._result}var q={current:null},j={transition:null},A={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:j,ReactCurrentOwner:he};function G(){throw Error("act(...) is not supported in production builds of React.")}return Lt.Children={map:N,forEach:function(M,Q,Se){N(M,function(){Q.apply(this,arguments)},Se)},count:function(M){var Q=0;return N(M,function(){Q++}),Q},toArray:function(M){return N(M,function(Q){return Q})||[]},only:function(M){if(!je(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Lt.Component=ae,Lt.Fragment=d,Lt.Profiler=y,Lt.PureComponent=W,Lt.StrictMode=g,Lt.Suspense=k,Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,Lt.act=G,Lt.cloneElement=function(M,Q,Se){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var De=te({},M.props),qe=M.key,ke=M.ref,Ie=M._owner;if(Q!=null){if(Q.ref!==void 0&&(ke=Q.ref,Ie=he.current),Q.key!==void 0&&(qe=""+Q.key),M.type&&M.type.defaultProps)var Ue=M.type.defaultProps;for(Ke in Q)Y.call(Q,Ke)&&!le.hasOwnProperty(Ke)&&(De[Ke]=Q[Ke]===void 0&&Ue!==void 0?Ue[Ke]:Q[Ke])}var Ke=arguments.length-2;if(Ke===1)De.children=Se;else if(1<Ke){Ue=Array(Ke);for(var tt=0;tt<Ke;tt++)Ue[tt]=arguments[tt+2];De.children=Ue}return{$$typeof:l,type:M.type,key:qe,ref:ke,props:De,_owner:Ie}},Lt.createContext=function(M){return M={$$typeof:_,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:b,_context:M},M.Consumer=M},Lt.createElement=we,Lt.createFactory=function(M){var Q=we.bind(null,M);return Q.type=M,Q},Lt.createRef=function(){return{current:null}},Lt.forwardRef=function(M){return{$$typeof:T,render:M}},Lt.isValidElement=je,Lt.lazy=function(M){return{$$typeof:P,_payload:{_status:-1,_result:M},_init:J}},Lt.memo=function(M,Q){return{$$typeof:E,type:M,compare:Q===void 0?null:Q}},Lt.startTransition=function(M){var Q=j.transition;j.transition={};try{M()}finally{j.transition=Q}},Lt.unstable_act=G,Lt.useCallback=function(M,Q){return q.current.useCallback(M,Q)},Lt.useContext=function(M){return q.current.useContext(M)},Lt.useDebugValue=function(){},Lt.useDeferredValue=function(M){return q.current.useDeferredValue(M)},Lt.useEffect=function(M,Q){return q.current.useEffect(M,Q)},Lt.useId=function(){return q.current.useId()},Lt.useImperativeHandle=function(M,Q,Se){return q.current.useImperativeHandle(M,Q,Se)},Lt.useInsertionEffect=function(M,Q){return q.current.useInsertionEffect(M,Q)},Lt.useLayoutEffect=function(M,Q){return q.current.useLayoutEffect(M,Q)},Lt.useMemo=function(M,Q){return q.current.useMemo(M,Q)},Lt.useReducer=function(M,Q,Se){return q.current.useReducer(M,Q,Se)},Lt.useRef=function(M){return q.current.useRef(M)},Lt.useState=function(M){return q.current.useState(M)},Lt.useSyncExternalStore=function(M,Q,Se){return q.current.useSyncExternalStore(M,Q,Se)},Lt.useTransition=function(){return q.current.useTransition()},Lt.version="18.3.1",Lt}var Fh;function Zp(){return Fh||(Fh=1,Sp.exports=ug()),Sp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function cg(){if(Wh)return Gu;Wh=1;var l=Zp(),u=Symbol.for("react.element"),d=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,y=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function _(T,k,E){var P,I={},R=null,V=null;E!==void 0&&(R=""+E),k.key!==void 0&&(R=""+k.key),k.ref!==void 0&&(V=k.ref);for(P in k)g.call(k,P)&&!b.hasOwnProperty(P)&&(I[P]=k[P]);if(T&&T.defaultProps)for(P in k=T.defaultProps,k)I[P]===void 0&&(I[P]=k[P]);return{$$typeof:u,type:T,key:R,ref:V,props:I,_owner:y.current}}return Gu.Fragment=d,Gu.jsx=_,Gu.jsxs=_,Gu}var Hh;function dg(){return Hh||(Hh=1,kp.exports=cg()),kp.exports}var p=dg(),Ne=Zp();const pg=Yf(Ne);var cd={},_p={exports:{}},ei={},Cp={exports:{}},Tp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function hg(){return Bh||(Bh=1,(function(l){function u(j,A){var G=j.length;j.push(A);e:for(;0<G;){var M=G-1>>>1,Q=j[M];if(0<y(Q,A))j[M]=A,j[G]=Q,G=M;else break e}}function d(j){return j.length===0?null:j[0]}function g(j){if(j.length===0)return null;var A=j[0],G=j.pop();if(G!==A){j[0]=G;e:for(var M=0,Q=j.length,Se=Q>>>1;M<Se;){var De=2*(M+1)-1,qe=j[De],ke=De+1,Ie=j[ke];if(0>y(qe,G))ke<Q&&0>y(Ie,qe)?(j[M]=Ie,j[ke]=G,M=ke):(j[M]=qe,j[De]=G,M=De);else if(ke<Q&&0>y(Ie,G))j[M]=Ie,j[ke]=G,M=ke;else break e}}return A}function y(j,A){var G=j.sortIndex-A.sortIndex;return G!==0?G:j.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;l.unstable_now=function(){return b.now()}}else{var _=Date,T=_.now();l.unstable_now=function(){return _.now()-T}}var k=[],E=[],P=1,I=null,R=3,V=!1,te=!1,H=!1,ae=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(j){for(var A=d(E);A!==null;){if(A.callback===null)g(E);else if(A.startTime<=j)g(E),A.sortIndex=A.expirationTime,u(k,A);else break;A=d(E)}}function K(j){if(H=!1,F(j),!te)if(d(k)!==null)te=!0,J(Y);else{var A=d(E);A!==null&&q(K,A.startTime-j)}}function Y(j,A){te=!1,H&&(H=!1,D(we),we=-1),V=!0;var G=R;try{for(F(A),I=d(k);I!==null&&(!(I.expirationTime>A)||j&&!ie());){var M=I.callback;if(typeof M=="function"){I.callback=null,R=I.priorityLevel;var Q=M(I.expirationTime<=A);A=l.unstable_now(),typeof Q=="function"?I.callback=Q:I===d(k)&&g(k),F(A)}else g(k);I=d(k)}if(I!==null)var Se=!0;else{var De=d(E);De!==null&&q(K,De.startTime-A),Se=!1}return Se}finally{I=null,R=G,V=!1}}var he=!1,le=null,we=-1,He=5,je=-1;function ie(){return!(l.unstable_now()-je<He)}function Ce(){if(le!==null){var j=l.unstable_now();je=j;var A=!0;try{A=le(!0,j)}finally{A?se():(he=!1,le=null)}}else he=!1}var se;if(typeof W=="function")se=function(){W(Ce)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,N=ye.port2;ye.port1.onmessage=Ce,se=function(){N.postMessage(null)}}else se=function(){ae(Ce,0)};function J(j){le=j,he||(he=!0,se())}function q(j,A){we=ae(function(){j(l.unstable_now())},A)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(j){j.callback=null},l.unstable_continueExecution=function(){te||V||(te=!0,J(Y))},l.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<j?Math.floor(1e3/j):5},l.unstable_getCurrentPriorityLevel=function(){return R},l.unstable_getFirstCallbackNode=function(){return d(k)},l.unstable_next=function(j){switch(R){case 1:case 2:case 3:var A=3;break;default:A=R}var G=R;R=A;try{return j()}finally{R=G}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(j,A){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var G=R;R=j;try{return A()}finally{R=G}},l.unstable_scheduleCallback=function(j,A,G){var M=l.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?M+G:M):G=M,j){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=G+Q,j={id:P++,callback:A,priorityLevel:j,startTime:G,expirationTime:Q,sortIndex:-1},G>M?(j.sortIndex=G,u(E,j),d(k)===null&&j===d(E)&&(H?(D(we),we=-1):H=!0,q(K,G-M))):(j.sortIndex=Q,u(k,j),te||V||(te=!0,J(Y))),j},l.unstable_shouldYield=ie,l.unstable_wrapCallback=function(j){var A=R;return function(){var G=R;R=A;try{return j.apply(this,arguments)}finally{R=G}}}})(Tp)),Tp}var Uh;function fg(){return Uh||(Uh=1,Cp.exports=hg()),Cp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function mg(){if(qh)return ei;qh=1;var l=Zp(),u=fg();function d(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g=new Set,y={};function b(t,r){_(t,r),_(t+"Capture",r)}function _(t,r){for(y[t]=r,t=0;t<r.length;t++)g.add(r[t])}var T=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},I={};function R(t){return k.call(I,t)?!0:k.call(P,t)?!1:E.test(t)?I[t]=!0:(P[t]=!0,!1)}function V(t,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function te(t,r,a,c){if(r===null||typeof r>"u"||V(t,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function H(t,r,a,c,f,v,L){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=v,this.removeEmptyString=L}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ae[t]=new H(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];ae[r]=new H(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){ae[t]=new H(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ae[t]=new H(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ae[t]=new H(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){ae[t]=new H(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){ae[t]=new H(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){ae[t]=new H(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){ae[t]=new H(t,5,!1,t.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function W(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(D,W);ae[r]=new H(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(D,W);ae[r]=new H(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(D,W);ae[r]=new H(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){ae[t]=new H(t,1,!1,t.toLowerCase(),null,!1,!1)}),ae.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){ae[t]=new H(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,r,a,c){var f=ae.hasOwnProperty(r)?ae[r]:null;(f!==null?f.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(te(r,a,f,c)&&(a=null),c||f===null?R(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(r=f.attributeName,c=f.attributeNamespace,a===null?t.removeAttribute(r):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?t.setAttributeNS(c,r,a):t.setAttribute(r,a))))}var K=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),he=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),we=Symbol.for("react.strict_mode"),He=Symbol.for("react.profiler"),je=Symbol.for("react.provider"),ie=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),j=Symbol.iterator;function A(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,M;function Q(t){if(M===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);M=r&&r[1]||""}return`
`+M+t}var Se=!1;function De(t,r){if(!t||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(pe){var c=pe}Reflect.construct(t,[],r)}else{try{r.call()}catch(pe){c=pe}t.call(r.prototype)}else{try{throw Error()}catch(pe){c=pe}t()}}catch(pe){if(pe&&c&&typeof pe.stack=="string"){for(var f=pe.stack.split(`
`),v=c.stack.split(`
`),L=f.length-1,$=v.length-1;1<=L&&0<=$&&f[L]!==v[$];)$--;for(;1<=L&&0<=$;L--,$--)if(f[L]!==v[$]){if(L!==1||$!==1)do if(L--,$--,0>$||f[L]!==v[$]){var X=`
`+f[L].replace(" at new "," at ");return t.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",t.displayName)),X}while(1<=L&&0<=$);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?Q(t):""}function qe(t){switch(t.tag){case 5:return Q(t.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return t=De(t.type,!1),t;case 11:return t=De(t.type.render,!1),t;case 1:return t=De(t.type,!0),t;default:return""}}function ke(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case le:return"Fragment";case he:return"Portal";case He:return"Profiler";case we:return"StrictMode";case se:return"Suspense";case ye:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ie:return(t.displayName||"Context")+".Consumer";case je:return(t._context.displayName||"Context")+".Provider";case Ce:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return r=t.displayName||null,r!==null?r:ke(t.type)||"Memo";case J:r=t._payload,t=t._init;try{return ke(t(r))}catch{}}return null}function Ie(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===we?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ue(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ke(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function tt(t){var r=Ke(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,v=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(L){c=""+L,v.call(this,L)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(L){c=""+L},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function $e(t){t._valueTracker||(t._valueTracker=tt(t))}function Ht(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return t&&(c=Ke(t)?t.checked?"true":"false":t.value),t=c,t!==a?(r.setValue(t),!0):!1}function Gt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function St(t,r){var a=r.checked;return G({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function vt(t,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Ue(r.value!=null?r.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function We(t,r){r=r.checked,r!=null&&F(t,"checked",r,!1)}function rt(t,r){We(t,r);var a=Ue(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Kt(t,r.type,a):r.hasOwnProperty("defaultValue")&&Kt(t,r.type,Ue(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function et(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Kt(t,r,a){(r!=="number"||Gt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ge=Array.isArray;function ht(t,r,a,c){if(t=t.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=r.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&c&&(t[a].defaultSelected=!0)}else{for(a=""+Ue(a),r=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function oe(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(d(91));return G({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _e(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(d(92));if(Ge(a)){if(1<a.length)throw Error(d(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:Ue(a)}}function ge(t,r){var a=Ue(r.value),c=Ue(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function wt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Je(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Je(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ve,yt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,f){MSApp.execUnsafeLocalFunction(function(){return t(r,a,c,f)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ve=Ve||document.createElement("div"),Ve.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ve.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function pt(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jn=["Webkit","ms","Moz","O"];Object.keys(mn).forEach(function(t){Jn.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),mn[r]=mn[t]})});function Cr(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||mn.hasOwnProperty(t)&&mn[t]?(""+r).trim():r+"px"}function Hr(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Cr(a,r[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,f):t[a]=f}}var ar=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vi(t,r){if(r){if(ar[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(d(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(d(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(d(61))}if(r.style!=null&&typeof r.style!="object")throw Error(d(62))}}function xt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function it(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tr=null,Jt=null,It=null;function Ot(t){if(t=dn(t)){if(typeof Tr!="function")throw Error(d(280));var r=t.stateNode;r&&(r=yn(r),Tr(t.stateNode,t.type,r))}}function Nn(t){Jt?It?It.push(t):It=[t]:Jt=t}function un(){if(Jt){var t=Jt,r=It;if(It=Jt=null,Ot(t),r)for(t=0;t<r.length;t++)Ot(r[t])}}function lr(t,r){return t(r)}function wn(){}var ni=!1;function In(t,r,a){if(ni)return t(r,a);ni=!0;try{return lr(t,r,a)}finally{ni=!1,(Jt!==null||It!==null)&&(wn(),un())}}function ur(t,r){var a=t.stateNode;if(a===null)return null;var c=yn(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(d(231,r,typeof a));return a}var Br=!1;if(T)try{var En={};Object.defineProperty(En,"passive",{get:function(){Br=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Br=!1}function jr(t,r,a,c,f,v,L,$,X){var pe=Array.prototype.slice.call(arguments,3);try{r.apply(a,pe)}catch(Re){this.onError(Re)}}var Xn=!1,ri=null,Ur=!1,qr=null,cr={onError:function(t){Xn=!0,ri=t}};function Kr(t,r,a,c,f,v,L,$,X){Xn=!1,ri=null,jr.apply(cr,arguments)}function Ps(t,r,a,c,f,v,L,$,X){if(Kr.apply(this,arguments),Xn){if(Xn){var pe=ri;Xn=!1,ri=null}else throw Error(d(198));Ur||(Ur=!0,qr=pe)}}function kn(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function yo(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Rr(t){if(kn(t)!==t)throw Error(d(188))}function Ir(t){var r=t.alternate;if(!r){if(r=kn(t),r===null)throw Error(d(188));return r!==t?null:t}for(var a=t,c=r;;){var f=a.return;if(f===null)break;var v=f.alternate;if(v===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===v.child){for(v=f.child;v;){if(v===a)return Rr(f),t;if(v===c)return Rr(f),r;v=v.sibling}throw Error(d(188))}if(a.return!==c.return)a=f,c=v;else{for(var L=!1,$=f.child;$;){if($===a){L=!0,a=f,c=v;break}if($===c){L=!0,c=f,a=v;break}$=$.sibling}if(!L){for($=v.child;$;){if($===a){L=!0,a=v,c=f;break}if($===c){L=!0,c=v,a=f;break}$=$.sibling}if(!L)throw Error(d(189))}}if(a.alternate!==c)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?t:r}function Nr(t){return t=Ir(t),t!==null?Bt(t):null}function Bt(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Bt(t);if(r!==null)return r;t=t.sibling}return null}var Er=u.unstable_scheduleCallback,zi=u.unstable_cancelCallback,ii=u.unstable_shouldYield,xi=u.unstable_requestPaint,At=u.unstable_now,os=u.unstable_getCurrentPriorityLevel,bi=u.unstable_ImmediatePriority,Xt=u.unstable_UserBlockingPriority,Qe=u.unstable_NormalPriority,si=u.unstable_LowPriority,dr=u.unstable_IdlePriority,On=null,C=null;function B(t){if(C&&typeof C.onCommitFiberRoot=="function")try{C.onCommitFiberRoot(On,t,void 0,(t.current.flags&128)===128)}catch{}}var fe=Math.clz32?Math.clz32:Be,Ee=Math.log,de=Math.LN2;function Be(t){return t>>>=0,t===0?32:31-(Ee(t)/de|0)|0}var Tt=64,en=4194304;function Sn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oi(t,r){var a=t.pendingLanes;if(a===0)return 0;var c=0,f=t.suspendedLanes,v=t.pingedLanes,L=a&268435455;if(L!==0){var $=L&~f;$!==0?c=Sn($):(v&=L,v!==0&&(c=Sn(v)))}else L=a&~f,L!==0?c=Sn(L):v!==0&&(c=Sn(v));if(c===0)return 0;if(r!==0&&r!==c&&(r&f)===0&&(f=c&-c,v=r&-r,f>=v||f===16&&(v&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)a=31-fe(r),f=1<<a,c|=t[a],r&=~f;return c}function Za(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(t,r){for(var a=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,v=t.pendingLanes;0<v;){var L=31-fe(v),$=1<<L,X=f[L];X===-1?(($&a)===0||($&c)!==0)&&(f[L]=Za($,r)):X<=r&&(t.expiredLanes|=$),v&=~$}}function vo(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sa(){var t=Tt;return Tt<<=1,(Tt&4194240)===0&&(Tt=64),t}function Fi(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Kn(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-fe(r),t[r]=a}function As(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-fe(a),v=1<<f;r[f]=0,c[f]=-1,t[f]=-1,a&=~v}}function as(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var c=31-fe(a),f=1<<c;f&r|t[c]&r&&(t[c]|=r),a&=~f}}var Et=0;function Wi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var $r,ai,pr,oa,ls,xo=!1,Rs=[],hr=null,Or=null,Mn=null,Is=new Map,us=new Map,Mr=[],Os="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function aa(t,r){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Is.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(r.pointerId)}}function Hi(t,r,a,c,f,v){return t===null||t.nativeEvent!==v?(t={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:v,targetContainers:[f]},r!==null&&(r=dn(r),r!==null&&ai(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function Ms(t,r,a,c,f){switch(r){case"focusin":return hr=Hi(hr,t,r,a,c,f),!0;case"dragenter":return Or=Hi(Or,t,r,a,c,f),!0;case"mouseover":return Mn=Hi(Mn,t,r,a,c,f),!0;case"pointerover":var v=f.pointerId;return Is.set(v,Hi(Is.get(v)||null,t,r,a,c,f)),!0;case"gotpointercapture":return v=f.pointerId,us.set(v,Hi(us.get(v)||null,t,r,a,c,f)),!0}return!1}function bo(t){var r=Ln(t.target);if(r!==null){var a=kn(r);if(a!==null){if(r=a.tag,r===13){if(r=yo(a),r!==null){t.blockedOn=r,ls(t.priority,function(){pr(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Te(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=$n(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);Di=c,a.target.dispatchEvent(c),Di=null}else return r=dn(a),r!==null&&ai(r),t.blockedOn=a,!1;r.shift()}return!0}function O(t,r,a){Te(t)&&a.delete(r)}function ee(){xo=!1,hr!==null&&Te(hr)&&(hr=null),Or!==null&&Te(Or)&&(Or=null),Mn!==null&&Te(Mn)&&(Mn=null),Is.forEach(O),us.forEach(O)}function xe(t,r){t.blockedOn===r&&(t.blockedOn=null,xo||(xo=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,ee)))}function be(t){function r(f){return xe(f,t)}if(0<Rs.length){xe(Rs[0],t);for(var a=1;a<Rs.length;a++){var c=Rs[a];c.blockedOn===t&&(c.blockedOn=null)}}for(hr!==null&&xe(hr,t),Or!==null&&xe(Or,t),Mn!==null&&xe(Mn,t),Is.forEach(r),us.forEach(r),a=0;a<Mr.length;a++)c=Mr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<Mr.length&&(a=Mr[0],a.blockedOn===null);)bo(a),a.blockedOn===null&&Mr.shift()}var nt=K.ReactCurrentBatchConfig,ct=!0;function _t(t,r,a,c){var f=Et,v=nt.transition;nt.transition=null;try{Et=1,fr(t,r,a,c)}finally{Et=f,nt.transition=v}}function gn(t,r,a,c){var f=Et,v=nt.transition;nt.transition=null;try{Et=4,fr(t,r,a,c)}finally{Et=f,nt.transition=v}}function fr(t,r,a,c){if(ct){var f=$n(t,r,a,c);if(f===null)hu(t,r,c,cn,a),aa(t,c);else if(Ms(f,t,r,a,c))c.stopPropagation();else if(aa(t,c),r&4&&-1<Os.indexOf(t)){for(;f!==null;){var v=dn(f);if(v!==null&&$r(v),v=$n(t,r,a,c),v===null&&hu(t,r,c,cn,a),v===f)break;f=v}f!==null&&c.stopPropagation()}else hu(t,r,c,null,a)}}var cn=null;function $n(t,r,a,c){if(cn=null,t=it(c),t=Ln(t),t!==null)if(r=kn(t),r===null)t=null;else if(a=r.tag,a===13){if(t=yo(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return cn=t,null}function wi(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(os()){case bi:return 1;case Xt:return 4;case Qe:case si:return 16;case dr:return 536870912;default:return 16}default:return 16}}var Rt=null,wo=null,el=null;function tl(){if(el)return el;var t,r=wo,a=r.length,c,f="value"in Rt?Rt.value:Rt.textContent,v=f.length;for(t=0;t<a&&r[t]===f[t];t++);var L=a-t;for(c=1;c<=L&&r[a-c]===f[v-c];c++);return el=f.slice(t,1<c?1-c:void 0)}function la(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function li(){return!0}function nl(){return!1}function _n(t){function r(a,c,f,v,L){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=v,this.target=L,this.currentTarget=null;for(var $ in t)t.hasOwnProperty($)&&(a=t[$],this[$]=a?a(v):v[$]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?li:nl,this.isPropagationStopped=nl,this}return G(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),r}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ua=_n(Bi),ki=G({},Bi,{view:0,detail:0}),zd=_n(ki),Jl,Xl,ca,da=G({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(Jl=t.screenX-ca.screenX,Xl=t.screenY-ca.screenY):Xl=Jl=0,ca=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),Ql=_n(da),Fd=G({},da,{dataTransfer:0}),Wd=_n(Fd),Hd=G({},ki,{relatedTarget:0}),Zl=_n(Hd),dc=G({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Bd=_n(dc),pc=G({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rl=_n(pc),ko=G({},Bi,{data:0}),hc=_n(ko),Ud={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pa={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dn(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=pa[t])?!!r[t]:!1}function eu(){return Dn}var fc=G({},ki,{key:function(t){if(t.key){var r=Ud[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ha=_n(fc),Kd=G({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=_n(Kd),$d=G({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),nu=_n($d),mc=G({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gd=_n(mc),Yd=G({},da,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gc=_n(Yd),yc=[9,13,27,32],ru=T&&"CompositionEvent"in window,Ui=null;T&&"documentMode"in document&&(Ui=document.documentMode);var qi=T&&"TextEvent"in window&&!Ui,fa=T&&(!ru||Ui&&8<Ui&&11>=Ui),il=" ",iu=!1;function ui(t,r){switch(t){case"keyup":return yc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function Vd(t,r){switch(t){case"compositionend":return cs(r);case"keypress":return r.which!==32?null:(iu=!0,il);case"textInput":return t=r.data,t===il&&iu?null:t;default:return null}}function vc(t,r){if(ds)return t==="compositionend"||!ru&&ui(t,r)?(t=tl(),el=wo=Rt=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return fa&&r.locale!=="ko"?null:r.data;default:return null}}var Jd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function su(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Jd[t.type]:r==="textarea"}function sl(t,r,a,c){Nn(c),r=No(r,"onChange"),0<r.length&&(a=new ua("onChange","change",null,a,c),t.push({event:a,listeners:r}))}var Si=null,Lr=null;function xc(t){ml(t,0)}function ma(t){var r=Tn(t);if(Ht(r))return t}function Xd(t,r){if(t==="change")return r}var bc=!1;if(T){var ou;if(T){var ol="oninput"in document;if(!ol){var au=document.createElement("div");au.setAttribute("oninput","return;"),ol=typeof au.oninput=="function"}ou=ol}else ou=!1;bc=ou&&(!document.documentMode||9<document.documentMode)}function So(){Si&&(Si.detachEvent("onpropertychange",lu),Lr=Si=null)}function lu(t){if(t.propertyName==="value"&&ma(Lr)){var r=[];sl(r,Lr,t,it(t)),In(xc,r)}}function wc(t,r,a){t==="focusin"?(So(),Si=r,Lr=a,Si.attachEvent("onpropertychange",lu)):t==="focusout"&&So()}function uu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ma(Lr)}function al(t,r){if(t==="click")return ma(r)}function kc(t,r){if(t==="input"||t==="change")return ma(r)}function ll(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Cn=typeof Object.is=="function"?Object.is:ll;function _o(t,r){if(Cn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!k.call(r,f)||!Cn(t[f],r[f]))return!1}return!0}function ul(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cl(t,r){var a=ul(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=r&&c>=r)return{node:a,offset:r-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ul(a)}}function cu(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?cu(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function du(){for(var t=window,r=Gt();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Gt(t.document)}return r}function ga(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Qd(t){var r=du(),a=t.focusedElem,c=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&cu(a.ownerDocument.documentElement,a)){if(c!==null&&ga(a)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,v=Math.min(c.start,f);c=c.end===void 0?v:Math.min(c.end,f),!t.extend&&v>c&&(f=c,c=v,v=f),f=cl(a,v);var L=cl(a,c);f&&L&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==L.node||t.focusOffset!==L.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),v>c?(t.addRange(r),t.extend(L.node,L.offset)):(r.setEnd(L.node,L.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zd=T&&"documentMode"in document&&11>=document.documentMode,Co=null,Ki=null,_i=null,ps=!1;function dl(t,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ps||Co==null||Co!==Gt(c)||(c=Co,"selectionStart"in c&&ga(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_i&&_o(_i,c)||(_i=c,c=No(Ki,"onSelect"),0<c.length&&(r=new ua("onSelect","select",null,r,a),t.push({event:r,listeners:c}),r.target=Co)))}function To(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Ds={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},ya={},hs={};T&&(hs=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Ci(t){if(ya[t])return ya[t];if(!Ds[t])return t;var r=Ds[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in hs)return ya[t]=r[a];return t}var er=Ci("animationend"),$i=Ci("animationiteration"),Gi=Ci("animationstart"),va=Ci("transitionend"),Sc=new Map,pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,r){Sc.set(t,r),b(r,[t])}for(var pl=0;pl<pu.length;pl++){var xa=pu[pl],hl=xa.toLowerCase(),ep=xa[0].toUpperCase()+xa.slice(1);Gr(hl,"on"+ep)}Gr(er,"onAnimationEnd"),Gr($i,"onAnimationIteration"),Gr(Gi,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(va,"onTransitionEnd"),_("onMouseEnter",["mouseout","mouseover"]),_("onMouseLeave",["mouseout","mouseover"]),_("onPointerEnter",["pointerout","pointerover"]),_("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_c=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function fl(t,r,a){var c=t.type||"unknown-event";t.currentTarget=a,Ps(c,r,void 0,t),t.currentTarget=null}function ml(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],f=c.event;c=c.listeners;e:{var v=void 0;if(r)for(var L=c.length-1;0<=L;L--){var $=c[L],X=$.instance,pe=$.currentTarget;if($=$.listener,X!==v&&f.isPropagationStopped())break e;fl(f,$,pe),v=X}else for(L=0;L<c.length;L++){if($=c[L],X=$.instance,pe=$.currentTarget,$=$.listener,X!==v&&f.isPropagationStopped())break e;fl(f,$,pe),v=X}}}if(Ur)throw t=qr,Ur=!1,qr=null,t}function Ut(t,r){var a=r[fu];a===void 0&&(a=r[fu]=new Set);var c=t+"__bubble";a.has(c)||(Cc(r,t,2,!1),a.add(c))}function jo(t,r,a){var c=0;r&&(c|=4),Cc(a,t,c,r)}var ba="_reactListening"+Math.random().toString(36).slice(2);function fs(t){if(!t[ba]){t[ba]=!0,g.forEach(function(a){a!=="selectionchange"&&(_c.has(a)||jo(a,!1,t),jo(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ba]||(r[ba]=!0,jo("selectionchange",!1,r))}}function Cc(t,r,a,c){switch(wi(r)){case 1:var f=_t;break;case 4:f=gn;break;default:f=fr}a=f.bind(null,r,a,t),f=void 0,!Br||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(r,a,{capture:!0,passive:f}):t.addEventListener(r,a,!0):f!==void 0?t.addEventListener(r,a,{passive:f}):t.addEventListener(r,a,!1)}function hu(t,r,a,c,f){var v=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var L=c.tag;if(L===3||L===4){var $=c.stateNode.containerInfo;if($===f||$.nodeType===8&&$.parentNode===f)break;if(L===4)for(L=c.return;L!==null;){var X=L.tag;if((X===3||X===4)&&(X=L.stateNode.containerInfo,X===f||X.nodeType===8&&X.parentNode===f))return;L=L.return}for(;$!==null;){if(L=Ln($),L===null)return;if(X=L.tag,X===5||X===6){c=v=L;continue e}$=$.parentNode}}c=c.return}In(function(){var pe=v,Re=it(a),Oe=[];e:{var Pe=Sc.get(t);if(Pe!==void 0){var Ze=ua,st=t;switch(t){case"keypress":if(la(a)===0)break e;case"keydown":case"keyup":Ze=ha;break;case"focusin":st="focus",Ze=Zl;break;case"focusout":st="blur",Ze=Zl;break;case"beforeblur":case"afterblur":Ze=Zl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ze=Ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ze=Wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ze=nu;break;case er:case $i:case Gi:Ze=Bd;break;case va:Ze=Gd;break;case"scroll":Ze=zd;break;case"wheel":Ze=gc;break;case"copy":case"cut":case"paste":Ze=rl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ze=tu}var ot=(r&4)!==0,qn=!ot&&t==="scroll",ue=ot?Pe!==null?Pe+"Capture":null:Pe;ot=[];for(var ne=pe,ce;ne!==null;){ce=ne;var Fe=ce.stateNode;if(ce.tag===5&&Fe!==null&&(ce=Fe,ue!==null&&(Fe=ur(ne,ue),Fe!=null&&ot.push(wa(ne,Fe,ce)))),qn)break;ne=ne.return}0<ot.length&&(Pe=new Ze(Pe,st,null,a,Re),Oe.push({event:Pe,listeners:ot}))}}if((r&7)===0){e:{if(Pe=t==="mouseover"||t==="pointerover",Ze=t==="mouseout"||t==="pointerout",Pe&&a!==Di&&(st=a.relatedTarget||a.fromElement)&&(Ln(st)||st[Ji]))break e;if((Ze||Pe)&&(Pe=Re.window===Re?Re:(Pe=Re.ownerDocument)?Pe.defaultView||Pe.parentWindow:window,Ze?(st=a.relatedTarget||a.toElement,Ze=pe,st=st?Ln(st):null,st!==null&&(qn=kn(st),st!==qn||st.tag!==5&&st.tag!==6)&&(st=null)):(Ze=null,st=pe),Ze!==st)){if(ot=Ql,Fe="onMouseLeave",ue="onMouseEnter",ne="mouse",(t==="pointerout"||t==="pointerover")&&(ot=tu,Fe="onPointerLeave",ue="onPointerEnter",ne="pointer"),qn=Ze==null?Pe:Tn(Ze),ce=st==null?Pe:Tn(st),Pe=new ot(Fe,ne+"leave",Ze,a,Re),Pe.target=qn,Pe.relatedTarget=ce,Fe=null,Ln(Re)===pe&&(ot=new ot(ue,ne+"enter",st,a,Re),ot.target=ce,ot.relatedTarget=qn,Fe=ot),qn=Fe,Ze&&st)t:{for(ot=Ze,ue=st,ne=0,ce=ot;ce;ce=ms(ce))ne++;for(ce=0,Fe=ue;Fe;Fe=ms(Fe))ce++;for(;0<ne-ce;)ot=ms(ot),ne--;for(;0<ce-ne;)ue=ms(ue),ce--;for(;ne--;){if(ot===ue||ue!==null&&ot===ue.alternate)break t;ot=ms(ot),ue=ms(ue)}ot=null}else ot=null;Ze!==null&&Fs(Oe,Pe,Ze,ot,!1),st!==null&&qn!==null&&Fs(Oe,qn,st,ot,!0)}}e:{if(Pe=pe?Tn(pe):window,Ze=Pe.nodeName&&Pe.nodeName.toLowerCase(),Ze==="select"||Ze==="input"&&Pe.type==="file")var ut=Xd;else if(su(Pe))if(bc)ut=kc;else{ut=uu;var ft=wc}else(Ze=Pe.nodeName)&&Ze.toLowerCase()==="input"&&(Pe.type==="checkbox"||Pe.type==="radio")&&(ut=al);if(ut&&(ut=ut(t,pe))){sl(Oe,ut,a,Re);break e}ft&&ft(t,Pe,pe),t==="focusout"&&(ft=Pe._wrapperState)&&ft.controlled&&Pe.type==="number"&&Kt(Pe,"number",Pe.value)}switch(ft=pe?Tn(pe):window,t){case"focusin":(su(ft)||ft.contentEditable==="true")&&(Co=ft,Ki=pe,_i=null);break;case"focusout":_i=Ki=Co=null;break;case"mousedown":ps=!0;break;case"contextmenu":case"mouseup":case"dragend":ps=!1,dl(Oe,a,Re);break;case"selectionchange":if(Zd)break;case"keydown":case"keyup":dl(Oe,a,Re)}var mt;if(ru)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else ds?ui(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(fa&&a.locale!=="ko"&&(ds||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&ds&&(mt=tl()):(Rt=Re,wo="value"in Rt?Rt.value:Rt.textContent,ds=!0)),ft=No(pe,bt),0<ft.length&&(bt=new hc(bt,t,null,a,Re),Oe.push({event:bt,listeners:ft}),mt?bt.data=mt:(mt=cs(a),mt!==null&&(bt.data=mt)))),(mt=qi?Vd(t,a):vc(t,a))&&(pe=No(pe,"onBeforeInput"),0<pe.length&&(Re=new hc("onBeforeInput","beforeinput",null,a,Re),Oe.push({event:Re,listeners:pe}),Re.data=mt))}ml(Oe,r)})}function wa(t,r,a){return{instance:t,listener:r,currentTarget:a}}function No(t,r){for(var a=r+"Capture",c=[];t!==null;){var f=t,v=f.stateNode;f.tag===5&&v!==null&&(f=v,v=ur(t,a),v!=null&&c.unshift(wa(t,v,f)),v=ur(t,r),v!=null&&c.push(wa(t,v,f))),t=t.return}return c}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fs(t,r,a,c,f){for(var v=r._reactName,L=[];a!==null&&a!==c;){var $=a,X=$.alternate,pe=$.stateNode;if(X!==null&&X===c)break;$.tag===5&&pe!==null&&($=pe,f?(X=ur(a,v),X!=null&&L.unshift(wa(a,X,$))):f||(X=ur(a,v),X!=null&&L.push(wa(a,X,$)))),a=a.return}L.length!==0&&t.push({event:r,listeners:L})}var ka=/\r\n?/g,tp=/\u0000|\uFFFD/g;function Sa(t){return(typeof t=="string"?t:""+t).replace(ka,`
`).replace(tp,"")}function _a(t,r,a){if(r=Sa(r),Sa(t)!==r&&a)throw Error(d(425))}function gs(){}var gl=null,Yi=null;function Ws(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,Ca=typeof clearTimeout=="function"?clearTimeout:void 0,Hs=typeof Promise=="function"?Promise:void 0,Tc=typeof queueMicrotask=="function"?queueMicrotask:typeof Hs<"u"?function(t){return Hs.resolve(null).then(t).catch(jc)}:Vi;function jc(t){setTimeout(function(){throw t})}function yl(t,r){var a=r,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){t.removeChild(f),be(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);be(r)}function ys(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function vs(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Yr,Ta="__reactProps$"+Yr,Ji="__reactContainer$"+Yr,fu="__reactEvents$"+Yr,np="__reactListeners$"+Yr,rp="__reactHandles$"+Yr;function Ln(t){var r=t[Ti];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Ji]||a[Ti]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=vs(t);t!==null;){if(a=t[Ti])return a;t=vs(t)}return r}t=a,a=t.parentNode}return null}function dn(t){return t=t[Ti]||t[Ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Tn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(d(33))}function yn(t){return t[Ta]||null}var Bs=[],Eo=-1;function ci(t){return{current:t}}function tn(t){0>Eo||(t.current=Bs[Eo],Bs[Eo]=null,Eo--)}function Qt(t,r){Eo++,Bs[Eo]=t.current,t.current=r}var xs={},Gn=ci(xs),mr=ci(!1),Xi=xs;function Lo(t,r){var a=t.type.contextTypes;if(!a)return xs;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var f={},v;for(v in a)f[v]=r[v];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function tr(t){return t=t.childContextTypes,t!=null}function Po(){tn(mr),tn(Gn)}function mu(t,r,a){if(Gn.current!==xs)throw Error(d(168));Qt(Gn,r),Qt(mr,a)}function gu(t,r,a){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in r))throw Error(d(108,Ie(t)||"Unknown",f));return G({},a,c)}function Ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xs,Xi=Gn.current,Qt(Gn,t),Qt(mr,mr.current),!0}function yu(t,r,a){var c=t.stateNode;if(!c)throw Error(d(169));a?(t=gu(t,r,Xi),c.__reactInternalMemoizedMergedChildContext=t,tn(mr),tn(Gn),Qt(Gn,t)):tn(mr),Qt(mr,a)}var Dr=null,vl=!1,Ro=!1;function ji(t){Dr===null?Dr=[t]:Dr.push(t)}function Nc(t){vl=!0,ji(t)}function bs(){if(!Ro&&Dr!==null){Ro=!0;var t=0,r=Et;try{var a=Dr;for(Et=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Dr=null,vl=!1}catch(f){throw Dr!==null&&(Dr=Dr.slice(t+1)),Er(bi,bs),f}finally{Et=r,Ro=!1}}return null}var Us=[],Yn=0,Pt=null,Pr=0,zn=[],Fn=0,ws=null,di=1,Ni="";function qs(t,r){Us[Yn++]=Pr,Us[Yn++]=Pt,Pt=t,Pr=r}function xl(t,r,a){zn[Fn++]=di,zn[Fn++]=Ni,zn[Fn++]=ws,ws=t;var c=di;t=Ni;var f=32-fe(c)-1;c&=~(1<<f),a+=1;var v=32-fe(r)+f;if(30<v){var L=f-f%5;v=(c&(1<<L)-1).toString(32),c>>=L,f-=L,di=1<<32-fe(r)+f|a<<f|c,Ni=v+t}else di=1<<v|a<<f|c,Ni=t}function Ks(t){t.return!==null&&(qs(t,1),xl(t,1,0))}function bl(t){for(;t===Pt;)Pt=Us[--Yn],Us[Yn]=null,Pr=Us[--Yn],Us[Yn]=null;for(;t===ws;)ws=zn[--Fn],zn[Fn]=null,Ni=zn[--Fn],zn[Fn]=null,di=zn[--Fn],zn[Fn]=null}var gr=null,Pn=null,nn=!1,Vr=null;function Ec(t,r){var a=Oi(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function ja(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,gr=t,Pn=ys(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,gr=t,Pn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ws!==null?{id:di,overflow:Ni}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Oi(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,gr=t,Pn=null,!0):!1;default:return!1}}function Na(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wl(t){if(nn){var r=Pn;if(r){var a=r;if(!ja(t,r)){if(Na(t))throw Error(d(418));r=ys(a.nextSibling);var c=gr;r&&ja(t,r)?Ec(c,a):(t.flags=t.flags&-4097|2,nn=!1,gr=t)}}else{if(Na(t))throw Error(d(418));t.flags=t.flags&-4097|2,nn=!1,gr=t}}}function Lc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gr=t}function Ea(t){if(t!==gr)return!1;if(!nn)return Lc(t),nn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Ws(t.type,t.memoizedProps)),r&&(r=Pn)){if(Na(t))throw Pc(),Error(d(418));for(;r;)Ec(t,r),r=ys(r.nextSibling)}if(Lc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){Pn=ys(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}Pn=null}}else Pn=gr?ys(t.stateNode.nextSibling):null;return!0}function Pc(){for(var t=Pn;t;)t=ys(t.nextSibling)}function Io(){Pn=gr=null,nn=!1}function Oo(t){Vr===null?Vr=[t]:Vr.push(t)}var Ac=K.ReactCurrentBatchConfig;function La(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(d(309));var c=a.stateNode}if(!c)throw Error(d(147,t));var f=c,v=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(L){var $=f.refs;L===null?delete $[v]:$[v]=L},r._stringRef=v,r)}if(typeof t!="string")throw Error(d(284));if(!a._owner)throw Error(d(290,t))}return t}function kl(t,r){throw t=Object.prototype.toString.call(r),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function vu(t){var r=t._init;return r(t._payload)}function $s(t){function r(ue,ne){if(t){var ce=ue.deletions;ce===null?(ue.deletions=[ne],ue.flags|=16):ce.push(ne)}}function a(ue,ne){if(!t)return null;for(;ne!==null;)r(ue,ne),ne=ne.sibling;return null}function c(ue,ne){for(ue=new Map;ne!==null;)ne.key!==null?ue.set(ne.key,ne):ue.set(ne.index,ne),ne=ne.sibling;return ue}function f(ue,ne){return ue=Zo(ue,ne),ue.index=0,ue.sibling=null,ue}function v(ue,ne,ce){return ue.index=ce,t?(ce=ue.alternate,ce!==null?(ce=ce.index,ce<ne?(ue.flags|=2,ne):ce):(ue.flags|=2,ne)):(ue.flags|=1048576,ne)}function L(ue){return t&&ue.alternate===null&&(ue.flags|=2),ue}function $(ue,ne,ce,Fe){return ne===null||ne.tag!==6?(ne=gp(ce,ue.mode,Fe),ne.return=ue,ne):(ne=f(ne,ce),ne.return=ue,ne)}function X(ue,ne,ce,Fe){var ut=ce.type;return ut===le?Re(ue,ne,ce.props.children,Fe,ce.key):ne!==null&&(ne.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===J&&vu(ut)===ne.type)?(Fe=f(ne,ce.props),Fe.ref=La(ue,ne,ce),Fe.return=ue,Fe):(Fe=nd(ce.type,ce.key,ce.props,null,ue.mode,Fe),Fe.ref=La(ue,ne,ce),Fe.return=ue,Fe)}function pe(ue,ne,ce,Fe){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==ce.containerInfo||ne.stateNode.implementation!==ce.implementation?(ne=yp(ce,ue.mode,Fe),ne.return=ue,ne):(ne=f(ne,ce.children||[]),ne.return=ue,ne)}function Re(ue,ne,ce,Fe,ut){return ne===null||ne.tag!==7?(ne=Ga(ce,ue.mode,Fe,ut),ne.return=ue,ne):(ne=f(ne,ce),ne.return=ue,ne)}function Oe(ue,ne,ce){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=gp(""+ne,ue.mode,ce),ne.return=ue,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case Y:return ce=nd(ne.type,ne.key,ne.props,null,ue.mode,ce),ce.ref=La(ue,null,ne),ce.return=ue,ce;case he:return ne=yp(ne,ue.mode,ce),ne.return=ue,ne;case J:var Fe=ne._init;return Oe(ue,Fe(ne._payload),ce)}if(Ge(ne)||A(ne))return ne=Ga(ne,ue.mode,ce,null),ne.return=ue,ne;kl(ue,ne)}return null}function Pe(ue,ne,ce,Fe){var ut=ne!==null?ne.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return ut!==null?null:$(ue,ne,""+ce,Fe);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case Y:return ce.key===ut?X(ue,ne,ce,Fe):null;case he:return ce.key===ut?pe(ue,ne,ce,Fe):null;case J:return ut=ce._init,Pe(ue,ne,ut(ce._payload),Fe)}if(Ge(ce)||A(ce))return ut!==null?null:Re(ue,ne,ce,Fe,null);kl(ue,ce)}return null}function Ze(ue,ne,ce,Fe,ut){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return ue=ue.get(ce)||null,$(ne,ue,""+Fe,ut);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case Y:return ue=ue.get(Fe.key===null?ce:Fe.key)||null,X(ne,ue,Fe,ut);case he:return ue=ue.get(Fe.key===null?ce:Fe.key)||null,pe(ne,ue,Fe,ut);case J:var ft=Fe._init;return Ze(ue,ne,ce,ft(Fe._payload),ut)}if(Ge(Fe)||A(Fe))return ue=ue.get(ce)||null,Re(ne,ue,Fe,ut,null);kl(ne,Fe)}return null}function st(ue,ne,ce,Fe){for(var ut=null,ft=null,mt=ne,bt=ne=0,ir=null;mt!==null&&bt<ce.length;bt++){mt.index>bt?(ir=mt,mt=null):ir=mt.sibling;var qt=Pe(ue,mt,ce[bt],Fe);if(qt===null){mt===null&&(mt=ir);break}t&&mt&&qt.alternate===null&&r(ue,mt),ne=v(qt,ne,bt),ft===null?ut=qt:ft.sibling=qt,ft=qt,mt=ir}if(bt===ce.length)return a(ue,mt),nn&&qs(ue,bt),ut;if(mt===null){for(;bt<ce.length;bt++)mt=Oe(ue,ce[bt],Fe),mt!==null&&(ne=v(mt,ne,bt),ft===null?ut=mt:ft.sibling=mt,ft=mt);return nn&&qs(ue,bt),ut}for(mt=c(ue,mt);bt<ce.length;bt++)ir=Ze(mt,ue,bt,ce[bt],Fe),ir!==null&&(t&&ir.alternate!==null&&mt.delete(ir.key===null?bt:ir.key),ne=v(ir,ne,bt),ft===null?ut=ir:ft.sibling=ir,ft=ir);return t&&mt.forEach(function(ea){return r(ue,ea)}),nn&&qs(ue,bt),ut}function ot(ue,ne,ce,Fe){var ut=A(ce);if(typeof ut!="function")throw Error(d(150));if(ce=ut.call(ce),ce==null)throw Error(d(151));for(var ft=ut=null,mt=ne,bt=ne=0,ir=null,qt=ce.next();mt!==null&&!qt.done;bt++,qt=ce.next()){mt.index>bt?(ir=mt,mt=null):ir=mt.sibling;var ea=Pe(ue,mt,qt.value,Fe);if(ea===null){mt===null&&(mt=ir);break}t&&mt&&ea.alternate===null&&r(ue,mt),ne=v(ea,ne,bt),ft===null?ut=ea:ft.sibling=ea,ft=ea,mt=ir}if(qt.done)return a(ue,mt),nn&&qs(ue,bt),ut;if(mt===null){for(;!qt.done;bt++,qt=ce.next())qt=Oe(ue,qt.value,Fe),qt!==null&&(ne=v(qt,ne,bt),ft===null?ut=qt:ft.sibling=qt,ft=qt);return nn&&qs(ue,bt),ut}for(mt=c(ue,mt);!qt.done;bt++,qt=ce.next())qt=Ze(mt,ue,bt,qt.value,Fe),qt!==null&&(t&&qt.alternate!==null&&mt.delete(qt.key===null?bt:qt.key),ne=v(qt,ne,bt),ft===null?ut=qt:ft.sibling=qt,ft=qt);return t&&mt.forEach(function(og){return r(ue,og)}),nn&&qs(ue,bt),ut}function qn(ue,ne,ce,Fe){if(typeof ce=="object"&&ce!==null&&ce.type===le&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case Y:e:{for(var ut=ce.key,ft=ne;ft!==null;){if(ft.key===ut){if(ut=ce.type,ut===le){if(ft.tag===7){a(ue,ft.sibling),ne=f(ft,ce.props.children),ne.return=ue,ue=ne;break e}}else if(ft.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===J&&vu(ut)===ft.type){a(ue,ft.sibling),ne=f(ft,ce.props),ne.ref=La(ue,ft,ce),ne.return=ue,ue=ne;break e}a(ue,ft);break}else r(ue,ft);ft=ft.sibling}ce.type===le?(ne=Ga(ce.props.children,ue.mode,Fe,ce.key),ne.return=ue,ue=ne):(Fe=nd(ce.type,ce.key,ce.props,null,ue.mode,Fe),Fe.ref=La(ue,ne,ce),Fe.return=ue,ue=Fe)}return L(ue);case he:e:{for(ft=ce.key;ne!==null;){if(ne.key===ft)if(ne.tag===4&&ne.stateNode.containerInfo===ce.containerInfo&&ne.stateNode.implementation===ce.implementation){a(ue,ne.sibling),ne=f(ne,ce.children||[]),ne.return=ue,ue=ne;break e}else{a(ue,ne);break}else r(ue,ne);ne=ne.sibling}ne=yp(ce,ue.mode,Fe),ne.return=ue,ue=ne}return L(ue);case J:return ft=ce._init,qn(ue,ne,ft(ce._payload),Fe)}if(Ge(ce))return st(ue,ne,ce,Fe);if(A(ce))return ot(ue,ne,ce,Fe);kl(ue,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,ne!==null&&ne.tag===6?(a(ue,ne.sibling),ne=f(ne,ce),ne.return=ue,ue=ne):(a(ue,ne),ne=gp(ce,ue.mode,Fe),ne.return=ue,ue=ne),L(ue)):a(ue,ne)}return qn}var ks=$s(!0),Pa=$s(!1),Aa=ci(null),Mo=null,Gs=null,xu=null;function Sl(){xu=Gs=Mo=null}function Wn(t){var r=Aa.current;tn(Aa),t._currentValue=r}function Do(t,r,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===a)break;t=t.return}}function Ys(t,r){Mo=t,xu=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Zn=!0),t.firstContext=null)}function zr(t){var r=t._currentValue;if(xu!==t)if(t={context:t,memoizedValue:r,next:null},Gs===null){if(Mo===null)throw Error(d(308));Gs=t,Mo.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return r}var Ss=null;function _s(t){Ss===null?Ss=[t]:Ss.push(t)}function Ra(t,r,a,c){var f=r.interleaved;return f===null?(a.next=a,_s(r)):(a.next=f.next,f.next=a),r.interleaved=a,Ei(t,c)}function Ei(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Qi=!1;function _l(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vs(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function pi(t,r,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(dt&2)!==0){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,Ei(t,a)}return f=c.interleaved,f===null?(r.next=r,_s(c)):(r.next=f.next,f.next=r),c.interleaved=r,Ei(t,a)}function Ia(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,as(t,a)}}function zo(t,r){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var L={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?f=v=L:v=v.next=L,a=a.next}while(a!==null);v===null?f=v=r:v=v.next=r}else f=v=r;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:v,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function Cl(t,r,a,c){var f=t.updateQueue;Qi=!1;var v=f.firstBaseUpdate,L=f.lastBaseUpdate,$=f.shared.pending;if($!==null){f.shared.pending=null;var X=$,pe=X.next;X.next=null,L===null?v=pe:L.next=pe,L=X;var Re=t.alternate;Re!==null&&(Re=Re.updateQueue,$=Re.lastBaseUpdate,$!==L&&($===null?Re.firstBaseUpdate=pe:$.next=pe,Re.lastBaseUpdate=X))}if(v!==null){var Oe=f.baseState;L=0,Re=pe=X=null,$=v;do{var Pe=$.lane,Ze=$.eventTime;if((c&Pe)===Pe){Re!==null&&(Re=Re.next={eventTime:Ze,lane:0,tag:$.tag,payload:$.payload,callback:$.callback,next:null});e:{var st=t,ot=$;switch(Pe=r,Ze=a,ot.tag){case 1:if(st=ot.payload,typeof st=="function"){Oe=st.call(Ze,Oe,Pe);break e}Oe=st;break e;case 3:st.flags=st.flags&-65537|128;case 0:if(st=ot.payload,Pe=typeof st=="function"?st.call(Ze,Oe,Pe):st,Pe==null)break e;Oe=G({},Oe,Pe);break e;case 2:Qi=!0}}$.callback!==null&&$.lane!==0&&(t.flags|=64,Pe=f.effects,Pe===null?f.effects=[$]:Pe.push($))}else Ze={eventTime:Ze,lane:Pe,tag:$.tag,payload:$.payload,callback:$.callback,next:null},Re===null?(pe=Re=Ze,X=Oe):Re=Re.next=Ze,L|=Pe;if($=$.next,$===null){if($=f.shared.pending,$===null)break;Pe=$,$=Pe.next,Pe.next=null,f.lastBaseUpdate=Pe,f.shared.pending=null}}while(!0);if(Re===null&&(X=Oe),f.baseState=X,f.firstBaseUpdate=pe,f.lastBaseUpdate=Re,r=f.shared.interleaved,r!==null){f=r;do L|=f.lane,f=f.next;while(f!==r)}else v===null&&(f.shared.lanes=0);kr|=L,t.lanes=L,t.memoizedState=Oe}}function Js(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(d(191,f));f.call(c)}}}var Fo={},hi=ci(Fo),Wo=ci(Fo),Zi=ci(Fo);function fi(t){if(t===Fo)throw Error(d(174));return t}function Xs(t,r){switch(Qt(Zi,r),Qt(Wo,t),Qt(hi,Fo),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:at(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=at(r,t)}tn(hi),Qt(hi,r)}function Pi(){tn(hi),tn(Wo),tn(Zi)}function bu(t){fi(Zi.current);var r=fi(hi.current),a=at(r,t.type);r!==a&&(Qt(Wo,t),Qt(hi,a))}function wu(t){Wo.current===t&&(tn(hi),tn(Wo))}var an=ci(0);function mi(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Cs=[];function Qs(){for(var t=0;t<Cs.length;t++)Cs[t]._workInProgressVersionPrimary=null;Cs.length=0}var Tl=K.ReactCurrentDispatcher,jl=K.ReactCurrentBatchConfig,Zs=0,pn=null,Hn=null,Mt=null,Oa=!1,Ma=!1,Da=0,ip=0;function Qn(){throw Error(d(321))}function Nl(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Cn(t[a],r[a]))return!1;return!0}function El(t,r,a,c,f,v){if(Zs=v,pn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Tl.current=t===null||t.memoizedState===null?op:Ru,t=a(c,f),Ma){v=0;do{if(Ma=!1,Da=0,25<=v)throw Error(d(301));v+=1,Mt=Hn=null,r.updateQueue=null,Tl.current=Fa,t=a(c,f)}while(Ma)}if(Tl.current=za,r=Hn!==null&&Hn.next!==null,Zs=0,Mt=Hn=pn=null,Oa=!1,r)throw Error(d(300));return t}function ku(){var t=Da!==0;return Da=0,t}function Ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?pn.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function Jr(){if(Hn===null){var t=pn.alternate;t=t!==null?t.memoizedState:null}else t=Hn.next;var r=Mt===null?pn.memoizedState:Mt.next;if(r!==null)Mt=r,Hn=t;else{if(t===null)throw Error(d(310));Hn=t,t={memoizedState:Hn.memoizedState,baseState:Hn.baseState,baseQueue:Hn.baseQueue,queue:Hn.queue,next:null},Mt===null?pn.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function Xr(t,r){return typeof r=="function"?r(t):r}function eo(t){var r=Jr(),a=r.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var c=Hn,f=c.baseQueue,v=a.pending;if(v!==null){if(f!==null){var L=f.next;f.next=v.next,v.next=L}c.baseQueue=f=v,a.pending=null}if(f!==null){v=f.next,c=c.baseState;var $=L=null,X=null,pe=v;do{var Re=pe.lane;if((Zs&Re)===Re)X!==null&&(X=X.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),c=pe.hasEagerState?pe.eagerState:t(c,pe.action);else{var Oe={lane:Re,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};X===null?($=X=Oe,L=c):X=X.next=Oe,pn.lanes|=Re,kr|=Re}pe=pe.next}while(pe!==null&&pe!==v);X===null?L=c:X.next=$,Cn(c,r.memoizedState)||(Zn=!0),r.memoizedState=c,r.baseState=L,r.baseQueue=X,a.lastRenderedState=c}if(t=a.interleaved,t!==null){f=t;do v=f.lane,pn.lanes|=v,kr|=v,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Ho(t){var r=Jr(),a=r.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var c=a.dispatch,f=a.pending,v=r.memoizedState;if(f!==null){a.pending=null;var L=f=f.next;do v=t(v,L.action),L=L.next;while(L!==f);Cn(v,r.memoizedState)||(Zn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),a.lastRenderedState=v}return[v,c]}function Bo(){}function Ri(t,r){var a=pn,c=Jr(),f=r(),v=!Cn(c.memoizedState,f);if(v&&(c.memoizedState=f,Zn=!0),c=c.queue,Tu(to.bind(null,a,c,t),[t]),c.getSnapshot!==r||v||Mt!==null&&Mt.memoizedState.tag&1){if(a.flags|=2048,Ts(9,Ic.bind(null,a,c,f,r),void 0,null),Ft===null)throw Error(d(349));(Zs&30)!==0||Rc(a,r,f)}return f}function Rc(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=pn.updateQueue,r===null?(r={lastEffect:null,stores:null},pn.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Ic(t,r,a,c){r.value=a,r.getSnapshot=c,Su(r)&&_u(t)}function to(t,r,a){return a(function(){Su(r)&&_u(t)})}function Su(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Cn(t,a)}catch{return!0}}function _u(t){var r=Ei(t,1);r!==null&&ts(r,t,1,-1)}function Cu(t){var r=Ai();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:t},r.queue=t,t=t.dispatch=Lu.bind(null,pn,t),[r.memoizedState,t]}function Ts(t,r,a,c){return t={tag:t,create:r,destroy:a,deps:c,next:null},r=pn.updateQueue,r===null?(r={lastEffect:null,stores:null},pn.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,r.lastEffect=t)),t}function no(){return Jr().memoizedState}function Uo(t,r,a,c){var f=Ai();pn.flags|=t,f.memoizedState=Ts(1|r,a,void 0,c===void 0?null:c)}function qo(t,r,a,c){var f=Jr();c=c===void 0?null:c;var v=void 0;if(Hn!==null){var L=Hn.memoizedState;if(v=L.destroy,c!==null&&Nl(c,L.deps)){f.memoizedState=Ts(r,a,v,c);return}}pn.flags|=t,f.memoizedState=Ts(1|r,a,v,c)}function Ll(t,r){return Uo(8390656,8,t,r)}function Tu(t,r){return qo(2048,8,t,r)}function Ko(t,r){return qo(4,2,t,r)}function ju(t,r){return qo(4,4,t,r)}function Oc(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Nu(t,r,a){return a=a!=null?a.concat([t]):null,qo(4,4,Oc.bind(null,r,t),a)}function $o(){}function Mc(t,r){var a=Jr();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Nl(r,c[1])?c[0]:(a.memoizedState=[t,r],t)}function Dc(t,r){var a=Jr();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Nl(r,c[1])?c[0]:(t=t(),a.memoizedState=[t,r],t)}function Go(t,r,a){return(Zs&21)===0?(t.baseState&&(t.baseState=!1,Zn=!0),t.memoizedState=a):(Cn(a,r)||(a=sa(),pn.lanes|=a,kr|=a,t.baseState=!0),r)}function zc(t,r){var a=Et;Et=a!==0&&4>a?a:4,t(!0);var c=jl.transition;jl.transition={};try{t(!1),r()}finally{Et=a,jl.transition=c}}function Eu(){return Jr().memoizedState}function sp(t,r,a){var c=Xo(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Pu(t))Fc(r,a);else if(a=Ra(t,r,a,c),a!==null){var f=Fr();ts(a,t,c,f),Au(a,r,c)}}function Lu(t,r,a){var c=Xo(t),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pu(t))Fc(r,f);else{var v=t.alternate;if(t.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var L=r.lastRenderedState,$=v(L,a);if(f.hasEagerState=!0,f.eagerState=$,Cn($,L)){var X=r.interleaved;X===null?(f.next=f,_s(r)):(f.next=X.next,X.next=f),r.interleaved=f;return}}catch{}finally{}a=Ra(t,r,f,c),a!==null&&(f=Fr(),ts(a,t,c,f),Au(a,r,c))}}function Pu(t){var r=t.alternate;return t===pn||r!==null&&r===pn}function Fc(t,r){Ma=Oa=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function Au(t,r,a){if((a&4194240)!==0){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,as(t,a)}}var za={readContext:zr,useCallback:Qn,useContext:Qn,useEffect:Qn,useImperativeHandle:Qn,useInsertionEffect:Qn,useLayoutEffect:Qn,useMemo:Qn,useReducer:Qn,useRef:Qn,useState:Qn,useDebugValue:Qn,useDeferredValue:Qn,useTransition:Qn,useMutableSource:Qn,useSyncExternalStore:Qn,useId:Qn,unstable_isNewReconciler:!1},op={readContext:zr,useCallback:function(t,r){return Ai().memoizedState=[t,r===void 0?null:r],t},useContext:zr,useEffect:Ll,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Uo(4194308,4,Oc.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Uo(4194308,4,t,r)},useInsertionEffect:function(t,r){return Uo(4,2,t,r)},useMemo:function(t,r){var a=Ai();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var c=Ai();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=sp.bind(null,pn,t),[c.memoizedState,t]},useRef:function(t){var r=Ai();return t={current:t},r.memoizedState=t},useState:Cu,useDebugValue:$o,useDeferredValue:function(t){return Ai().memoizedState=t},useTransition:function(){var t=Cu(!1),r=t[0];return t=zc.bind(null,t[1]),Ai().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var c=pn,f=Ai();if(nn){if(a===void 0)throw Error(d(407));a=a()}else{if(a=r(),Ft===null)throw Error(d(349));(Zs&30)!==0||Rc(c,r,a)}f.memoizedState=a;var v={value:a,getSnapshot:r};return f.queue=v,Ll(to.bind(null,c,v,t),[t]),c.flags|=2048,Ts(9,Ic.bind(null,c,v,a,r),void 0,null),a},useId:function(){var t=Ai(),r=Ft.identifierPrefix;if(nn){var a=Ni,c=di;a=(c&~(1<<32-fe(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Da++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=ip++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Ru={readContext:zr,useCallback:Mc,useContext:zr,useEffect:Tu,useImperativeHandle:Nu,useInsertionEffect:Ko,useLayoutEffect:ju,useMemo:Dc,useReducer:eo,useRef:no,useState:function(){return eo(Xr)},useDebugValue:$o,useDeferredValue:function(t){var r=Jr();return Go(r,Hn.memoizedState,t)},useTransition:function(){var t=eo(Xr)[0],r=Jr().memoizedState;return[t,r]},useMutableSource:Bo,useSyncExternalStore:Ri,useId:Eu,unstable_isNewReconciler:!1},Fa={readContext:zr,useCallback:Mc,useContext:zr,useEffect:Tu,useImperativeHandle:Nu,useInsertionEffect:Ko,useLayoutEffect:ju,useMemo:Dc,useReducer:Ho,useRef:no,useState:function(){return Ho(Xr)},useDebugValue:$o,useDeferredValue:function(t){var r=Jr();return Hn===null?r.memoizedState=t:Go(r,Hn.memoizedState,t)},useTransition:function(){var t=Ho(Xr)[0],r=Jr().memoizedState;return[t,r]},useMutableSource:Bo,useSyncExternalStore:Ri,useId:Eu,unstable_isNewReconciler:!1};function yr(t,r){if(t&&t.defaultProps){r=G({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function Iu(t,r,a,c){r=t.memoizedState,a=a(c,r),a=a==null?r:G({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Wa={isMounted:function(t){return(t=t._reactInternals)?kn(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var c=Fr(),f=Xo(t),v=Li(c,f);v.payload=r,a!=null&&(v.callback=a),r=pi(t,v,f),r!==null&&(ts(r,t,f,c),Ia(r,t,f))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var c=Fr(),f=Xo(t),v=Li(c,f);v.tag=1,v.payload=r,a!=null&&(v.callback=a),r=pi(t,v,f),r!==null&&(ts(r,t,f,c),Ia(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Fr(),c=Xo(t),f=Li(a,c);f.tag=2,r!=null&&(f.callback=r),r=pi(t,f,c),r!==null&&(ts(r,t,c,a),Ia(r,t,c))}};function Wc(t,r,a,c,f,v,L){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,v,L):r.prototype&&r.prototype.isPureReactComponent?!_o(a,c)||!_o(f,v):!0}function Hc(t,r,a){var c=!1,f=xs,v=r.contextType;return typeof v=="object"&&v!==null?v=zr(v):(f=tr(r)?Xi:Gn.current,c=r.contextTypes,v=(c=c!=null)?Lo(t,f):xs),r=new r(a,v),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Wa,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=v),r}function Bc(t,r,a,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==t&&Wa.enqueueReplaceState(r,r.state,null)}function Ou(t,r,a,c){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},_l(t);var v=r.contextType;typeof v=="object"&&v!==null?f.context=zr(v):(v=tr(r)?Xi:Gn.current,f.context=Lo(t,v)),f.state=t.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Iu(t,r,v,a),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&Wa.enqueueReplaceState(f,f.state,null),Cl(t,a,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ro(t,r){try{var a="",c=r;do a+=qe(c),c=c.return;while(c);var f=a}catch(v){f=`
Error generating stack: `+v.message+`
`+v.stack}return{value:t,source:r,stack:f,digest:null}}function Mu(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function Du(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Uc=typeof WeakMap=="function"?WeakMap:Map;function Pl(t,r,a){a=Li(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Jc||(Jc=!0,lp=c),Du(t,r)},a}function zu(t,r,a){a=Li(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;a.payload=function(){return c(f)},a.callback=function(){Du(t,r)}}var v=t.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Du(t,r),typeof c!="function"&&(Vo===null?Vo=new Set([this]):Vo.add(this));var L=r.stack;this.componentDidCatch(r.value,{componentStack:L!==null?L:""})}),a}function qc(t,r,a){var c=t.pingCache;if(c===null){c=t.pingCache=new Uc;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(a)||(f.add(a),t=Vm.bind(null,t,r,a),r.then(t,t))}function Fu(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function io(t,r,a,c,f){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Li(-1,1),r.tag=2,pi(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Kc=K.ReactCurrentOwner,Zn=!1;function vr(t,r,a,c){r.child=t===null?Pa(r,null,a,c):ks(r,t.child,a,c)}function $c(t,r,a,c,f){a=a.render;var v=r.ref;return Ys(r,f),c=El(t,r,a,c,v,f),a=ku(),t!==null&&!Zn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Ar(t,r,f)):(nn&&a&&Ks(r),r.flags|=1,vr(t,r,c,f),r.child)}function Gc(t,r,a,c,f){if(t===null){var v=a.type;return typeof v=="function"&&!mp(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=v,Zt(t,r,v,c,f)):(t=nd(a.type,null,c,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(v=t.child,(t.lanes&f)===0){var L=v.memoizedProps;if(a=a.compare,a=a!==null?a:_o,a(L,c)&&t.ref===r.ref)return Ar(t,r,f)}return r.flags|=1,t=Zo(v,c),t.ref=r.ref,t.return=r,r.child=t}function Zt(t,r,a,c,f){if(t!==null){var v=t.memoizedProps;if(_o(v,c)&&t.ref===r.ref)if(Zn=!1,r.pendingProps=c=v,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Zn=!0);else return r.lanes=t.lanes,Ar(t,r,f)}return so(t,r,a,c,f)}function Yc(t,r,a){var c=r.pendingProps,f=c.children,v=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qt(wr,$t),$t|=a;else{if((a&1073741824)===0)return t=v!==null?v.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Qt(wr,$t),$t|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=v!==null?v.baseLanes:a,Qt(wr,$t),$t|=c}else v!==null?(c=v.baseLanes|a,r.memoizedState=null):c=a,Qt(wr,$t),$t|=c;return vr(t,r,f,a),r.child}function Al(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function so(t,r,a,c,f){var v=tr(a)?Xi:Gn.current;return v=Lo(r,v),Ys(r,f),a=El(t,r,a,c,v,f),c=ku(),t!==null&&!Zn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Ar(t,r,f)):(nn&&c&&Ks(r),r.flags|=1,vr(t,r,a,f),r.child)}function Qr(t,r,a,c,f){if(tr(a)){var v=!0;Ao(r)}else v=!1;if(Ys(r,f),r.stateNode===null)Fl(t,r),Hc(r,a,c),Ou(r,a,c,f),c=!0;else if(t===null){var L=r.stateNode,$=r.memoizedProps;L.props=$;var X=L.context,pe=a.contextType;typeof pe=="object"&&pe!==null?pe=zr(pe):(pe=tr(a)?Xi:Gn.current,pe=Lo(r,pe));var Re=a.getDerivedStateFromProps,Oe=typeof Re=="function"||typeof L.getSnapshotBeforeUpdate=="function";Oe||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||($!==c||X!==pe)&&Bc(r,L,c,pe),Qi=!1;var Pe=r.memoizedState;L.state=Pe,Cl(r,c,L,f),X=r.memoizedState,$!==c||Pe!==X||mr.current||Qi?(typeof Re=="function"&&(Iu(r,a,Re,c),X=r.memoizedState),($=Qi||Wc(r,a,$,c,Pe,X,pe))?(Oe||typeof L.UNSAFE_componentWillMount!="function"&&typeof L.componentWillMount!="function"||(typeof L.componentWillMount=="function"&&L.componentWillMount(),typeof L.UNSAFE_componentWillMount=="function"&&L.UNSAFE_componentWillMount()),typeof L.componentDidMount=="function"&&(r.flags|=4194308)):(typeof L.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=X),L.props=c,L.state=X,L.context=pe,c=$):(typeof L.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{L=r.stateNode,Vs(t,r),$=r.memoizedProps,pe=r.type===r.elementType?$:yr(r.type,$),L.props=pe,Oe=r.pendingProps,Pe=L.context,X=a.contextType,typeof X=="object"&&X!==null?X=zr(X):(X=tr(a)?Xi:Gn.current,X=Lo(r,X));var Ze=a.getDerivedStateFromProps;(Re=typeof Ze=="function"||typeof L.getSnapshotBeforeUpdate=="function")||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||($!==Oe||Pe!==X)&&Bc(r,L,c,X),Qi=!1,Pe=r.memoizedState,L.state=Pe,Cl(r,c,L,f);var st=r.memoizedState;$!==Oe||Pe!==st||mr.current||Qi?(typeof Ze=="function"&&(Iu(r,a,Ze,c),st=r.memoizedState),(pe=Qi||Wc(r,a,pe,c,Pe,st,X)||!1)?(Re||typeof L.UNSAFE_componentWillUpdate!="function"&&typeof L.componentWillUpdate!="function"||(typeof L.componentWillUpdate=="function"&&L.componentWillUpdate(c,st,X),typeof L.UNSAFE_componentWillUpdate=="function"&&L.UNSAFE_componentWillUpdate(c,st,X)),typeof L.componentDidUpdate=="function"&&(r.flags|=4),typeof L.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof L.componentDidUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=st),L.props=c,L.state=st,L.context=X,c=pe):(typeof L.componentDidUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=1024),c=!1)}return Yo(t,r,a,c,v,f)}function Yo(t,r,a,c,f,v){Al(t,r);var L=(r.flags&128)!==0;if(!c&&!L)return f&&yu(r,a,!1),Ar(t,r,v);c=r.stateNode,Kc.current=r;var $=L&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&L?(r.child=ks(r,t.child,null,v),r.child=ks(r,null,$,v)):vr(t,r,$,v),r.memoizedState=c.state,f&&yu(r,a,!0),r.child}function Rl(t){var r=t.stateNode;r.pendingContext?mu(t,r.pendingContext,r.pendingContext!==r.context):r.context&&mu(t,r.context,!1),Xs(t,r.containerInfo)}function Wu(t,r,a,c,f){return Io(),Oo(f),r.flags|=256,vr(t,r,a,c),r.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Ol(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ml(t,r,a){var c=r.pendingProps,f=an.current,v=!1,L=(r.flags&128)!==0,$;if(($=L)||($=t!==null&&t.memoizedState===null?!1:(f&2)!==0),$?(v=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Qt(an,f&1),t===null)return wl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(L=c.children,t=c.fallback,v?(c=r.mode,v=r.child,L={mode:"hidden",children:L},(c&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=L):v=rd(L,c,0,null),t=Ga(t,c,a,null),v.return=r,t.return=r,v.sibling=t,r.child=v,r.child.memoizedState=Ol(a),r.memoizedState=Il,t):Dl(r,L));if(f=t.memoizedState,f!==null&&($=f.dehydrated,$!==null))return Hu(t,r,L,c,$,f,a);if(v){v=c.fallback,L=r.mode,f=t.child,$=f.sibling;var X={mode:"hidden",children:c.children};return(L&1)===0&&r.child!==f?(c=r.child,c.childLanes=0,c.pendingProps=X,r.deletions=null):(c=Zo(f,X),c.subtreeFlags=f.subtreeFlags&14680064),$!==null?v=Zo($,v):(v=Ga(v,L,a,null),v.flags|=2),v.return=r,c.return=r,c.sibling=v,r.child=c,c=v,v=r.child,L=t.child.memoizedState,L=L===null?Ol(a):{baseLanes:L.baseLanes|a,cachePool:null,transitions:L.transitions},v.memoizedState=L,v.childLanes=t.childLanes&~a,r.memoizedState=Il,c}return v=t.child,t=v.sibling,c=Zo(v,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=c,r.memoizedState=null,c}function Dl(t,r){return r=rd({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function zl(t,r,a,c){return c!==null&&Oo(c),ks(r,t.child,null,a),t=Dl(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Hu(t,r,a,c,f,v,L){if(a)return r.flags&256?(r.flags&=-257,c=Mu(Error(d(422))),zl(t,r,L,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(v=c.fallback,f=r.mode,c=rd({mode:"visible",children:c.children},f,0,null),v=Ga(v,f,L,null),v.flags|=2,c.return=r,v.return=r,c.sibling=v,r.child=c,(r.mode&1)!==0&&ks(r,t.child,null,L),r.child.memoizedState=Ol(L),r.memoizedState=Il,v);if((r.mode&1)===0)return zl(t,r,L,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var $=c.dgst;return c=$,v=Error(d(419)),c=Mu(v,c,void 0),zl(t,r,L,c)}if($=(L&t.childLanes)!==0,Zn||$){if(c=Ft,c!==null){switch(L&-L){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|L))!==0?0:f,f!==0&&f!==v.retryLane&&(v.retryLane=f,Ei(t,f),ts(c,t,f,-1))}return fp(),c=Mu(Error(d(421))),zl(t,r,L,c)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=Jm.bind(null,t),f._reactRetry=r,null):(t=v.treeContext,Pn=ys(f.nextSibling),gr=r,nn=!0,Vr=null,t!==null&&(zn[Fn++]=di,zn[Fn++]=Ni,zn[Fn++]=ws,di=t.id,Ni=t.overflow,ws=r),r=Dl(r,c.children),r.flags|=4096,r)}function Bu(t,r,a){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),Do(t.return,r,a)}function Dt(t,r,a,c,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=a,v.tailMode=f)}function Uu(t,r,a){var c=r.pendingProps,f=c.revealOrder,v=c.tail;if(vr(t,r,c.children,a),c=an.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bu(t,a,r);else if(t.tag===19)Bu(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Qt(an,c),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(a=r.child,f=null;a!==null;)t=a.alternate,t!==null&&mi(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),Dt(r,!1,f,a,v);break;case"backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&mi(t)===null){r.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Dt(r,!0,a,null,v);break;case"together":Dt(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Fl(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Ar(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),kr|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(d(153));if(r.child!==null){for(t=r.child,a=Zo(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Zo(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function ap(t,r,a){switch(r.tag){case 3:Rl(r),Io();break;case 5:bu(r);break;case 1:tr(r.type)&&Ao(r);break;case 4:Xs(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,f=r.memoizedProps.value;Qt(Aa,c._currentValue),c._currentValue=f;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Qt(an,an.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Ml(t,r,a):(Qt(an,an.current&1),t=Ar(t,r,a),t!==null?t.sibling:null);Qt(an,an.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(t.flags&128)!==0){if(c)return Uu(t,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Qt(an,an.current),c)break;return null;case 22:case 23:return r.lanes=0,Yc(t,r,a)}return Ar(t,r,a)}var Ha,qu,hn,Vc;Ha=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},qu=function(){},hn=function(t,r,a,c){var f=t.memoizedProps;if(f!==c){t=r.stateNode,fi(hi.current);var v=null;switch(a){case"input":f=St(t,f),c=St(t,c),v=[];break;case"select":f=G({},f,{value:void 0}),c=G({},c,{value:void 0}),v=[];break;case"textarea":f=oe(t,f),c=oe(t,c),v=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=gs)}vi(a,c);var L;a=null;for(pe in f)if(!c.hasOwnProperty(pe)&&f.hasOwnProperty(pe)&&f[pe]!=null)if(pe==="style"){var $=f[pe];for(L in $)$.hasOwnProperty(L)&&(a||(a={}),a[L]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(y.hasOwnProperty(pe)?v||(v=[]):(v=v||[]).push(pe,null));for(pe in c){var X=c[pe];if($=f!=null?f[pe]:void 0,c.hasOwnProperty(pe)&&X!==$&&(X!=null||$!=null))if(pe==="style")if($){for(L in $)!$.hasOwnProperty(L)||X&&X.hasOwnProperty(L)||(a||(a={}),a[L]="");for(L in X)X.hasOwnProperty(L)&&$[L]!==X[L]&&(a||(a={}),a[L]=X[L])}else a||(v||(v=[]),v.push(pe,a)),a=X;else pe==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,$=$?$.__html:void 0,X!=null&&$!==X&&(v=v||[]).push(pe,X)):pe==="children"?typeof X!="string"&&typeof X!="number"||(v=v||[]).push(pe,""+X):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(y.hasOwnProperty(pe)?(X!=null&&pe==="onScroll"&&Ut("scroll",t),v||$===X||(v=[])):(v=v||[]).push(pe,X))}a&&(v=v||[]).push("style",a);var pe=v;(r.updateQueue=pe)&&(r.flags|=4)}},Vc=function(t,r,a,c){a!==c&&(r.flags|=4)};function Ba(t,r){if(!nn)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function nr(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(r)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=a,r}function Wl(t,r,a){var c=r.pendingProps;switch(bl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nr(r),null;case 1:return tr(r.type)&&Po(),nr(r),null;case 3:return c=r.stateNode,Pi(),tn(mr),tn(Gn),Qs(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Ea(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vr!==null&&(dp(Vr),Vr=null))),qu(t,r),nr(r),null;case 5:wu(r);var f=fi(Zi.current);if(a=r.type,t!==null&&r.stateNode!=null)hn(t,r,a,c,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(d(166));return nr(r),null}if(t=fi(hi.current),Ea(r)){c=r.stateNode,a=r.type;var v=r.memoizedProps;switch(c[Ti]=r,c[Ta]=v,t=(r.mode&1)!==0,a){case"dialog":Ut("cancel",c),Ut("close",c);break;case"iframe":case"object":case"embed":Ut("load",c);break;case"video":case"audio":for(f=0;f<zs.length;f++)Ut(zs[f],c);break;case"source":Ut("error",c);break;case"img":case"image":case"link":Ut("error",c),Ut("load",c);break;case"details":Ut("toggle",c);break;case"input":vt(c,v),Ut("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!v.multiple},Ut("invalid",c);break;case"textarea":_e(c,v),Ut("invalid",c)}vi(a,v),f=null;for(var L in v)if(v.hasOwnProperty(L)){var $=v[L];L==="children"?typeof $=="string"?c.textContent!==$&&(v.suppressHydrationWarning!==!0&&_a(c.textContent,$,t),f=["children",$]):typeof $=="number"&&c.textContent!==""+$&&(v.suppressHydrationWarning!==!0&&_a(c.textContent,$,t),f=["children",""+$]):y.hasOwnProperty(L)&&$!=null&&L==="onScroll"&&Ut("scroll",c)}switch(a){case"input":$e(c),et(c,v,!0);break;case"textarea":$e(c),wt(c);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(c.onclick=gs)}c=f,r.updateQueue=c,c!==null&&(r.flags|=4)}else{L=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Je(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=L.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=L.createElement(a,{is:c.is}):(t=L.createElement(a),a==="select"&&(L=t,c.multiple?L.multiple=!0:c.size&&(L.size=c.size))):t=L.createElementNS(t,a),t[Ti]=r,t[Ta]=c,Ha(t,r,!1,!1),r.stateNode=t;e:{switch(L=xt(a,c),a){case"dialog":Ut("cancel",t),Ut("close",t),f=c;break;case"iframe":case"object":case"embed":Ut("load",t),f=c;break;case"video":case"audio":for(f=0;f<zs.length;f++)Ut(zs[f],t);f=c;break;case"source":Ut("error",t),f=c;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),f=c;break;case"details":Ut("toggle",t),f=c;break;case"input":vt(t,c),f=St(t,c),Ut("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=G({},c,{value:void 0}),Ut("invalid",t);break;case"textarea":_e(t,c),f=oe(t,c),Ut("invalid",t);break;default:f=c}vi(a,f),$=f;for(v in $)if($.hasOwnProperty(v)){var X=$[v];v==="style"?Hr(t,X):v==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&yt(t,X)):v==="children"?typeof X=="string"?(a!=="textarea"||X!=="")&&pt(t,X):typeof X=="number"&&pt(t,""+X):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(y.hasOwnProperty(v)?X!=null&&v==="onScroll"&&Ut("scroll",t):X!=null&&F(t,v,X,L))}switch(a){case"input":$e(t),et(t,c,!1);break;case"textarea":$e(t),wt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Ue(c.value));break;case"select":t.multiple=!!c.multiple,v=c.value,v!=null?ht(t,!!c.multiple,v,!1):c.defaultValue!=null&&ht(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=gs)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return nr(r),null;case 6:if(t&&r.stateNode!=null)Vc(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(d(166));if(a=fi(Zi.current),fi(hi.current),Ea(r)){if(c=r.stateNode,a=r.memoizedProps,c[Ti]=r,(v=c.nodeValue!==a)&&(t=gr,t!==null))switch(t.tag){case 3:_a(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(c.nodeValue,a,(t.mode&1)!==0)}v&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ti]=r,r.stateNode=c}return nr(r),null;case 13:if(tn(an),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nn&&Pn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Pc(),Io(),r.flags|=98560,v=!1;else if(v=Ea(r),c!==null&&c.dehydrated!==null){if(t===null){if(!v)throw Error(d(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(d(317));v[Ti]=r}else Io(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;nr(r),v=!1}else Vr!==null&&(dp(Vr),Vr=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(an.current&1)!==0?Nt===0&&(Nt=3):fp())),r.updateQueue!==null&&(r.flags|=4),nr(r),null);case 4:return Pi(),qu(t,r),t===null&&fs(r.stateNode.containerInfo),nr(r),null;case 10:return Wn(r.type._context),nr(r),null;case 17:return tr(r.type)&&Po(),nr(r),null;case 19:if(tn(an),v=r.memoizedState,v===null)return nr(r),null;if(c=(r.flags&128)!==0,L=v.rendering,L===null)if(c)Ba(v,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(L=mi(t),L!==null){for(r.flags|=128,Ba(v,!1),c=L.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)v=a,t=c,v.flags&=14680066,L=v.alternate,L===null?(v.childLanes=0,v.lanes=t,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=L.childLanes,v.lanes=L.lanes,v.child=L.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=L.memoizedProps,v.memoizedState=L.memoizedState,v.updateQueue=L.updateQueue,v.type=L.type,t=L.dependencies,v.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Qt(an,an.current&1|2),r.child}t=t.sibling}v.tail!==null&&At()>Hl&&(r.flags|=128,c=!0,Ba(v,!1),r.lanes=4194304)}else{if(!c)if(t=mi(L),t!==null){if(r.flags|=128,c=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Ba(v,!0),v.tail===null&&v.tailMode==="hidden"&&!L.alternate&&!nn)return nr(r),null}else 2*At()-v.renderingStartTime>Hl&&a!==1073741824&&(r.flags|=128,c=!0,Ba(v,!1),r.lanes=4194304);v.isBackwards?(L.sibling=r.child,r.child=L):(a=v.last,a!==null?a.sibling=L:r.child=L,v.last=L)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=At(),r.sibling=null,a=an.current,Qt(an,c?a&1|2:a&1),r):(nr(r),null);case 22:case 23:return hp(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?($t&1073741824)!==0&&(nr(r),r.subtreeFlags&6&&(r.flags|=8192)):nr(r),null;case 24:return null;case 25:return null}throw Error(d(156,r.tag))}function e(t,r){switch(bl(r),r.tag){case 1:return tr(r.type)&&Po(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Pi(),tn(mr),tn(Gn),Qs(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return wu(r),null;case 13:if(tn(an),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(d(340));Io()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return tn(an),null;case 4:return Pi(),null;case 10:return Wn(r.type._context),null;case 22:case 23:return hp(),null;case 24:return null;default:return null}}var n=!1,s=!1,i=typeof WeakSet=="function"?WeakSet:Set,o=null;function h(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Rn(t,r,c)}else a.current=null}function m(t,r,a){try{a()}catch(c){Rn(t,r,c)}}var x=!1;function w(t,r){if(gl=ct,t=du(),ga(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var L=0,$=-1,X=-1,pe=0,Re=0,Oe=t,Pe=null;t:for(;;){for(var Ze;Oe!==a||f!==0&&Oe.nodeType!==3||($=L+f),Oe!==v||c!==0&&Oe.nodeType!==3||(X=L+c),Oe.nodeType===3&&(L+=Oe.nodeValue.length),(Ze=Oe.firstChild)!==null;)Pe=Oe,Oe=Ze;for(;;){if(Oe===t)break t;if(Pe===a&&++pe===f&&($=L),Pe===v&&++Re===c&&(X=L),(Ze=Oe.nextSibling)!==null)break;Oe=Pe,Pe=Oe.parentNode}Oe=Ze}a=$===-1||X===-1?null:{start:$,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yi={focusedElem:t,selectionRange:a},ct=!1,o=r;o!==null;)if(r=o,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,o=t;else for(;o!==null;){r=o;try{var st=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(st!==null){var ot=st.memoizedProps,qn=st.memoizedState,ue=r.stateNode,ne=ue.getSnapshotBeforeUpdate(r.elementType===r.type?ot:yr(r.type,ot),qn);ue.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(Fe){Rn(r,r.return,Fe)}if(t=r.sibling,t!==null){t.return=r.return,o=t;break}o=r.return}return st=x,x=!1,st}function S(t,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var v=f.destroy;f.destroy=void 0,v!==void 0&&m(r,a,v)}f=f.next}while(f!==c)}}function z(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function U(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function re(t){var r=t.alternate;r!==null&&(t.alternate=null,re(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ti],delete r[Ta],delete r[fu],delete r[np],delete r[rp])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z(t){return t.tag===5||t.tag===3||t.tag===4}function me(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ve(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=gs));else if(c!==4&&(t=t.child,t!==null))for(ve(t,r,a),t=t.sibling;t!==null;)ve(t,r,a),t=t.sibling}function Ae(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Ae(t,r,a),t=t.sibling;t!==null;)Ae(t,r,a),t=t.sibling}var Le=null,ze=!1;function Me(t,r,a){for(a=a.child;a!==null;)Ye(t,r,a),a=a.sibling}function Ye(t,r,a){if(C&&typeof C.onCommitFiberUnmount=="function")try{C.onCommitFiberUnmount(On,a)}catch{}switch(a.tag){case 5:s||h(a,r);case 6:var c=Le,f=ze;Le=null,Me(t,r,a),Le=c,ze=f,Le!==null&&(ze?(t=Le,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Le.removeChild(a.stateNode));break;case 18:Le!==null&&(ze?(t=Le,a=a.stateNode,t.nodeType===8?yl(t.parentNode,a):t.nodeType===1&&yl(t,a),be(t)):yl(Le,a.stateNode));break;case 4:c=Le,f=ze,Le=a.stateNode.containerInfo,ze=!0,Me(t,r,a),Le=c,ze=f;break;case 0:case 11:case 14:case 15:if(!s&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var v=f,L=v.destroy;v=v.tag,L!==void 0&&((v&2)!==0||(v&4)!==0)&&m(a,r,L),f=f.next}while(f!==c)}Me(t,r,a);break;case 1:if(!s&&(h(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch($){Rn(a,r,$)}Me(t,r,a);break;case 21:Me(t,r,a);break;case 22:a.mode&1?(s=(c=s)||a.memoizedState!==null,Me(t,r,a),s=c):Me(t,r,a);break;default:Me(t,r,a)}}function lt(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new i),r.forEach(function(c){var f=Xm.bind(null,t,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Xe(t,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var v=t,L=r,$=L;e:for(;$!==null;){switch($.tag){case 5:Le=$.stateNode,ze=!1;break e;case 3:Le=$.stateNode.containerInfo,ze=!0;break e;case 4:Le=$.stateNode.containerInfo,ze=!0;break e}$=$.return}if(Le===null)throw Error(d(160));Ye(v,L,f),Le=null,ze=!1;var X=f.alternate;X!==null&&(X.return=null),f.return=null}catch(pe){Rn(f,r,pe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)kt(r,t),r=r.sibling}function kt(t,r){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xe(r,t),jt(t),c&4){try{S(3,t,t.return),z(3,t)}catch(ot){Rn(t,t.return,ot)}try{S(5,t,t.return)}catch(ot){Rn(t,t.return,ot)}}break;case 1:Xe(r,t),jt(t),c&512&&a!==null&&h(a,a.return);break;case 5:if(Xe(r,t),jt(t),c&512&&a!==null&&h(a,a.return),t.flags&32){var f=t.stateNode;try{pt(f,"")}catch(ot){Rn(t,t.return,ot)}}if(c&4&&(f=t.stateNode,f!=null)){var v=t.memoizedProps,L=a!==null?a.memoizedProps:v,$=t.type,X=t.updateQueue;if(t.updateQueue=null,X!==null)try{$==="input"&&v.type==="radio"&&v.name!=null&&We(f,v),xt($,L);var pe=xt($,v);for(L=0;L<X.length;L+=2){var Re=X[L],Oe=X[L+1];Re==="style"?Hr(f,Oe):Re==="dangerouslySetInnerHTML"?yt(f,Oe):Re==="children"?pt(f,Oe):F(f,Re,Oe,pe)}switch($){case"input":rt(f,v);break;case"textarea":ge(f,v);break;case"select":var Pe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!v.multiple;var Ze=v.value;Ze!=null?ht(f,!!v.multiple,Ze,!1):Pe!==!!v.multiple&&(v.defaultValue!=null?ht(f,!!v.multiple,v.defaultValue,!0):ht(f,!!v.multiple,v.multiple?[]:"",!1))}f[Ta]=v}catch(ot){Rn(t,t.return,ot)}}break;case 6:if(Xe(r,t),jt(t),c&4){if(t.stateNode===null)throw Error(d(162));f=t.stateNode,v=t.memoizedProps;try{f.nodeValue=v}catch(ot){Rn(t,t.return,ot)}}break;case 3:if(Xe(r,t),jt(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{be(r.containerInfo)}catch(ot){Rn(t,t.return,ot)}break;case 4:Xe(r,t),jt(t);break;case 13:Xe(r,t),jt(t),f=t.child,f.flags&8192&&(v=f.memoizedState!==null,f.stateNode.isHidden=v,!v||f.alternate!==null&&f.alternate.memoizedState!==null||(Ua=At())),c&4&&lt(t);break;case 22:if(Re=a!==null&&a.memoizedState!==null,t.mode&1?(s=(pe=s)||Re,Xe(r,t),s=pe):Xe(r,t),jt(t),c&8192){if(pe=t.memoizedState!==null,(t.stateNode.isHidden=pe)&&!Re&&(t.mode&1)!==0)for(o=t,Re=t.child;Re!==null;){for(Oe=o=Re;o!==null;){switch(Pe=o,Ze=Pe.child,Pe.tag){case 0:case 11:case 14:case 15:S(4,Pe,Pe.return);break;case 1:h(Pe,Pe.return);var st=Pe.stateNode;if(typeof st.componentWillUnmount=="function"){c=Pe,a=Pe.return;try{r=c,st.props=r.memoizedProps,st.state=r.memoizedState,st.componentWillUnmount()}catch(ot){Rn(c,a,ot)}}break;case 5:h(Pe,Pe.return);break;case 22:if(Pe.memoizedState!==null){rr(Oe);continue}}Ze!==null?(Ze.return=Pe,o=Ze):rr(Oe)}Re=Re.sibling}e:for(Re=null,Oe=t;;){if(Oe.tag===5){if(Re===null){Re=Oe;try{f=Oe.stateNode,pe?(v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):($=Oe.stateNode,X=Oe.memoizedProps.style,L=X!=null&&X.hasOwnProperty("display")?X.display:null,$.style.display=Cr("display",L))}catch(ot){Rn(t,t.return,ot)}}}else if(Oe.tag===6){if(Re===null)try{Oe.stateNode.nodeValue=pe?"":Oe.memoizedProps}catch(ot){Rn(t,t.return,ot)}}else if((Oe.tag!==22&&Oe.tag!==23||Oe.memoizedState===null||Oe===t)&&Oe.child!==null){Oe.child.return=Oe,Oe=Oe.child;continue}if(Oe===t)break e;for(;Oe.sibling===null;){if(Oe.return===null||Oe.return===t)break e;Re===Oe&&(Re=null),Oe=Oe.return}Re===Oe&&(Re=null),Oe.sibling.return=Oe.return,Oe=Oe.sibling}}break;case 19:Xe(r,t),jt(t),c&4&&lt(t);break;case 21:break;default:Xe(r,t),jt(t)}}function jt(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(Z(a)){var c=a;break e}a=a.return}throw Error(d(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(pt(f,""),c.flags&=-33);var v=me(t);Ae(t,v,f);break;case 3:case 4:var L=c.stateNode.containerInfo,$=me(t);ve(t,$,L);break;default:throw Error(d(161))}}catch(X){Rn(t,t.return,X)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Bn(t,r,a){o=t,rn(t)}function rn(t,r,a){for(var c=(t.mode&1)!==0;o!==null;){var f=o,v=f.child;if(f.tag===22&&c){var L=f.memoizedState!==null||n;if(!L){var $=f.alternate,X=$!==null&&$.memoizedState!==null||s;$=n;var pe=s;if(n=L,(s=X)&&!pe)for(o=f;o!==null;)L=o,X=L.child,L.tag===22&&L.memoizedState!==null?vn(f):X!==null?(X.return=L,o=X):vn(f);for(;v!==null;)o=v,rn(v),v=v.sibling;o=f,n=$,s=pe}xr(t)}else(f.subtreeFlags&8772)!==0&&v!==null?(v.return=f,o=v):xr(t)}}function xr(t){for(;o!==null;){var r=o;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:s||z(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!s)if(a===null)c.componentDidMount();else{var f=r.elementType===r.type?a.memoizedProps:yr(r.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Js(r,v,c);break;case 3:var L=r.updateQueue;if(L!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Js(r,L,a)}break;case 5:var $=r.stateNode;if(a===null&&r.flags&4){a=$;var X=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&a.focus();break;case"img":X.src&&(a.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var pe=r.alternate;if(pe!==null){var Re=pe.memoizedState;if(Re!==null){var Oe=Re.dehydrated;Oe!==null&&be(Oe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}s||r.flags&512&&U(r)}catch(Pe){Rn(r,r.return,Pe)}}if(r===t){o=null;break}if(a=r.sibling,a!==null){a.return=r.return,o=a;break}o=r.return}}function rr(t){for(;o!==null;){var r=o;if(r===t){o=null;break}var a=r.sibling;if(a!==null){a.return=r.return,o=a;break}o=r.return}}function vn(t){for(;o!==null;){var r=o;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{z(4,r)}catch(X){Rn(r,a,X)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var f=r.return;try{c.componentDidMount()}catch(X){Rn(r,f,X)}}var v=r.return;try{U(r)}catch(X){Rn(r,v,X)}break;case 5:var L=r.return;try{U(r)}catch(X){Rn(r,L,X)}}}catch(X){Rn(r,r.return,X)}if(r===t){o=null;break}var $=r.sibling;if($!==null){$.return=r.return,o=$;break}o=r.return}}var br=Math.ceil,jn=K.ReactCurrentDispatcher,xn=K.ReactCurrentOwner,zt=K.ReactCurrentBatchConfig,dt=0,Ft=null,sn=null,ln=0,$t=0,wr=ci(0),Nt=0,oo=null,kr=0,Ii=0,es=0,An=null,Un=null,Ua=0,Hl=1/0,ao=null,Jc=!1,lp=null,Vo=null,Xc=!1,Jo=null,Qc=0,Ku=0,up=null,Zc=-1,ed=0;function Fr(){return(dt&6)!==0?At():Zc!==-1?Zc:Zc=At()}function Xo(t){return(t.mode&1)===0?1:(dt&2)!==0&&ln!==0?ln&-ln:Ac.transition!==null?(ed===0&&(ed=sa()),ed):(t=Et,t!==0||(t=window.event,t=t===void 0?16:wi(t.type)),t)}function ts(t,r,a,c){if(50<Ku)throw Ku=0,up=null,Error(d(185));Kn(t,a,c),((dt&2)===0||t!==Ft)&&(t===Ft&&((dt&2)===0&&(Ii|=a),Nt===4&&Qo(t,ln)),Zr(t,c),a===1&&dt===0&&(r.mode&1)===0&&(Hl=At()+500,vl&&bs()))}function Zr(t,r){var a=t.callbackNode;gt(t,r);var c=oi(t,t===Ft?ln:0);if(c===0)a!==null&&zi(a),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(a!=null&&zi(a),r===1)t.tag===0?Nc(_h.bind(null,t)):ji(_h.bind(null,t)),Tc(function(){(dt&6)===0&&bs()}),a=null;else{switch(Wi(c)){case 1:a=bi;break;case 4:a=Xt;break;case 16:a=Qe;break;case 536870912:a=dr;break;default:a=Qe}a=Ah(a,Sh.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function Sh(t,r){if(Zc=-1,ed=0,(dt&6)!==0)throw Error(d(327));var a=t.callbackNode;if(Bl()&&t.callbackNode!==a)return null;var c=oi(t,t===Ft?ln:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||r)r=td(t,c);else{r=c;var f=dt;dt|=2;var v=Th();(Ft!==t||ln!==r)&&(ao=null,Hl=At()+500,Ka(t,r));do try{Gm();break}catch($){Ch(t,$)}while(!0);Sl(),jn.current=v,dt=f,sn!==null?r=0:(Ft=null,ln=0,r=Nt)}if(r!==0){if(r===2&&(f=vo(t),f!==0&&(c=f,r=cp(t,f))),r===1)throw a=oo,Ka(t,0),Qo(t,c),Zr(t,At()),a;if(r===6)Qo(t,c);else{if(f=t.current.alternate,(c&30)===0&&!Km(f)&&(r=td(t,c),r===2&&(v=vo(t),v!==0&&(c=v,r=cp(t,v))),r===1))throw a=oo,Ka(t,0),Qo(t,c),Zr(t,At()),a;switch(t.finishedWork=f,t.finishedLanes=c,r){case 0:case 1:throw Error(d(345));case 2:$a(t,Un,ao);break;case 3:if(Qo(t,c),(c&130023424)===c&&(r=Ua+500-At(),10<r)){if(oi(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Fr(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Vi($a.bind(null,t,Un,ao),r);break}$a(t,Un,ao);break;case 4:if(Qo(t,c),(c&4194240)===c)break;for(r=t.eventTimes,f=-1;0<c;){var L=31-fe(c);v=1<<L,L=r[L],L>f&&(f=L),c&=~v}if(c=f,c=At()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*br(c/1960))-c,10<c){t.timeoutHandle=Vi($a.bind(null,t,Un,ao),c);break}$a(t,Un,ao);break;case 5:$a(t,Un,ao);break;default:throw Error(d(329))}}}return Zr(t,At()),t.callbackNode===a?Sh.bind(null,t):null}function cp(t,r){var a=An;return t.current.memoizedState.isDehydrated&&(Ka(t,r).flags|=256),t=td(t,r),t!==2&&(r=Un,Un=a,r!==null&&dp(r)),t}function dp(t){Un===null?Un=t:Un.push.apply(Un,t)}function Km(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],v=f.getSnapshot;f=f.value;try{if(!Cn(v(),f))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qo(t,r){for(r&=~es,r&=~Ii,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-fe(r),c=1<<a;t[a]=-1,r&=~c}}function _h(t){if((dt&6)!==0)throw Error(d(327));Bl();var r=oi(t,0);if((r&1)===0)return Zr(t,At()),null;var a=td(t,r);if(t.tag!==0&&a===2){var c=vo(t);c!==0&&(r=c,a=cp(t,c))}if(a===1)throw a=oo,Ka(t,0),Qo(t,r),Zr(t,At()),a;if(a===6)throw Error(d(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,$a(t,Un,ao),Zr(t,At()),null}function pp(t,r){var a=dt;dt|=1;try{return t(r)}finally{dt=a,dt===0&&(Hl=At()+500,vl&&bs())}}function qa(t){Jo!==null&&Jo.tag===0&&(dt&6)===0&&Bl();var r=dt;dt|=1;var a=zt.transition,c=Et;try{if(zt.transition=null,Et=1,t)return t()}finally{Et=c,zt.transition=a,dt=r,(dt&6)===0&&bs()}}function hp(){$t=wr.current,tn(wr)}function Ka(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Ca(a)),sn!==null)for(a=sn.return;a!==null;){var c=a;switch(bl(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Po();break;case 3:Pi(),tn(mr),tn(Gn),Qs();break;case 5:wu(c);break;case 4:Pi();break;case 13:tn(an);break;case 19:tn(an);break;case 10:Wn(c.type._context);break;case 22:case 23:hp()}a=a.return}if(Ft=t,sn=t=Zo(t.current,null),ln=$t=r,Nt=0,oo=null,es=Ii=kr=0,Un=An=null,Ss!==null){for(r=0;r<Ss.length;r++)if(a=Ss[r],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,v=a.pending;if(v!==null){var L=v.next;v.next=f,c.next=L}a.pending=c}Ss=null}return t}function Ch(t,r){do{var a=sn;try{if(Sl(),Tl.current=za,Oa){for(var c=pn.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Oa=!1}if(Zs=0,Mt=Hn=pn=null,Ma=!1,Da=0,xn.current=null,a===null||a.return===null){Nt=1,oo=r,sn=null;break}e:{var v=t,L=a.return,$=a,X=r;if(r=ln,$.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var pe=X,Re=$,Oe=Re.tag;if((Re.mode&1)===0&&(Oe===0||Oe===11||Oe===15)){var Pe=Re.alternate;Pe?(Re.updateQueue=Pe.updateQueue,Re.memoizedState=Pe.memoizedState,Re.lanes=Pe.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Ze=Fu(L);if(Ze!==null){Ze.flags&=-257,io(Ze,L,$,v,r),Ze.mode&1&&qc(v,pe,r),r=Ze,X=pe;var st=r.updateQueue;if(st===null){var ot=new Set;ot.add(X),r.updateQueue=ot}else st.add(X);break e}else{if((r&1)===0){qc(v,pe,r),fp();break e}X=Error(d(426))}}else if(nn&&$.mode&1){var qn=Fu(L);if(qn!==null){(qn.flags&65536)===0&&(qn.flags|=256),io(qn,L,$,v,r),Oo(ro(X,$));break e}}v=X=ro(X,$),Nt!==4&&(Nt=2),An===null?An=[v]:An.push(v),v=L;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var ue=Pl(v,X,r);zo(v,ue);break e;case 1:$=X;var ne=v.type,ce=v.stateNode;if((v.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Vo===null||!Vo.has(ce)))){v.flags|=65536,r&=-r,v.lanes|=r;var Fe=zu(v,$,r);zo(v,Fe);break e}}v=v.return}while(v!==null)}Nh(a)}catch(ut){r=ut,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function Th(){var t=jn.current;return jn.current=za,t===null?za:t}function fp(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Ft===null||(kr&268435455)===0&&(Ii&268435455)===0||Qo(Ft,ln)}function td(t,r){var a=dt;dt|=2;var c=Th();(Ft!==t||ln!==r)&&(ao=null,Ka(t,r));do try{$m();break}catch(f){Ch(t,f)}while(!0);if(Sl(),dt=a,jn.current=c,sn!==null)throw Error(d(261));return Ft=null,ln=0,Nt}function $m(){for(;sn!==null;)jh(sn)}function Gm(){for(;sn!==null&&!ii();)jh(sn)}function jh(t){var r=Ph(t.alternate,t,$t);t.memoizedProps=t.pendingProps,r===null?Nh(t):sn=r,xn.current=null}function Nh(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=Wl(a,r,$t),a!==null){sn=a;return}}else{if(a=e(a,r),a!==null){a.flags&=32767,sn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,sn=null;return}}if(r=r.sibling,r!==null){sn=r;return}sn=r=t}while(r!==null);Nt===0&&(Nt=5)}function $a(t,r,a){var c=Et,f=zt.transition;try{zt.transition=null,Et=1,Ym(t,r,a,c)}finally{zt.transition=f,Et=c}return null}function Ym(t,r,a,c){do Bl();while(Jo!==null);if((dt&6)!==0)throw Error(d(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(d(177));t.callbackNode=null,t.callbackPriority=0;var v=a.lanes|a.childLanes;if(As(t,v),t===Ft&&(sn=Ft=null,ln=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Xc||(Xc=!0,Ah(Qe,function(){return Bl(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=zt.transition,zt.transition=null;var L=Et;Et=1;var $=dt;dt|=4,xn.current=null,w(t,a),kt(a,t),Qd(Yi),ct=!!gl,Yi=gl=null,t.current=a,Bn(a),xi(),dt=$,Et=L,zt.transition=v}else t.current=a;if(Xc&&(Xc=!1,Jo=t,Qc=f),v=t.pendingLanes,v===0&&(Vo=null),B(a.stateNode),Zr(t,At()),r!==null)for(c=t.onRecoverableError,a=0;a<r.length;a++)f=r[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Jc)throw Jc=!1,t=lp,lp=null,t;return(Qc&1)!==0&&t.tag!==0&&Bl(),v=t.pendingLanes,(v&1)!==0?t===up?Ku++:(Ku=0,up=t):Ku=0,bs(),null}function Bl(){if(Jo!==null){var t=Wi(Qc),r=zt.transition,a=Et;try{if(zt.transition=null,Et=16>t?16:t,Jo===null)var c=!1;else{if(t=Jo,Jo=null,Qc=0,(dt&6)!==0)throw Error(d(331));var f=dt;for(dt|=4,o=t.current;o!==null;){var v=o,L=v.child;if((o.flags&16)!==0){var $=v.deletions;if($!==null){for(var X=0;X<$.length;X++){var pe=$[X];for(o=pe;o!==null;){var Re=o;switch(Re.tag){case 0:case 11:case 15:S(8,Re,v)}var Oe=Re.child;if(Oe!==null)Oe.return=Re,o=Oe;else for(;o!==null;){Re=o;var Pe=Re.sibling,Ze=Re.return;if(re(Re),Re===pe){o=null;break}if(Pe!==null){Pe.return=Ze,o=Pe;break}o=Ze}}}var st=v.alternate;if(st!==null){var ot=st.child;if(ot!==null){st.child=null;do{var qn=ot.sibling;ot.sibling=null,ot=qn}while(ot!==null)}}o=v}}if((v.subtreeFlags&2064)!==0&&L!==null)L.return=v,o=L;else e:for(;o!==null;){if(v=o,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:S(9,v,v.return)}var ue=v.sibling;if(ue!==null){ue.return=v.return,o=ue;break e}o=v.return}}var ne=t.current;for(o=ne;o!==null;){L=o;var ce=L.child;if((L.subtreeFlags&2064)!==0&&ce!==null)ce.return=L,o=ce;else e:for(L=ne;o!==null;){if($=o,($.flags&2048)!==0)try{switch($.tag){case 0:case 11:case 15:z(9,$)}}catch(ut){Rn($,$.return,ut)}if($===L){o=null;break e}var Fe=$.sibling;if(Fe!==null){Fe.return=$.return,o=Fe;break e}o=$.return}}if(dt=f,bs(),C&&typeof C.onPostCommitFiberRoot=="function")try{C.onPostCommitFiberRoot(On,t)}catch{}c=!0}return c}finally{Et=a,zt.transition=r}}return!1}function Eh(t,r,a){r=ro(a,r),r=Pl(t,r,1),t=pi(t,r,1),r=Fr(),t!==null&&(Kn(t,1,r),Zr(t,r))}function Rn(t,r,a){if(t.tag===3)Eh(t,t,a);else for(;r!==null;){if(r.tag===3){Eh(r,t,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Vo===null||!Vo.has(c))){t=ro(a,t),t=zu(r,t,1),r=pi(r,t,1),t=Fr(),r!==null&&(Kn(r,1,t),Zr(r,t));break}}r=r.return}}function Vm(t,r,a){var c=t.pingCache;c!==null&&c.delete(r),r=Fr(),t.pingedLanes|=t.suspendedLanes&a,Ft===t&&(ln&a)===a&&(Nt===4||Nt===3&&(ln&130023424)===ln&&500>At()-Ua?Ka(t,0):es|=a),Zr(t,r)}function Lh(t,r){r===0&&((t.mode&1)===0?r=1:(r=en,en<<=1,(en&130023424)===0&&(en=4194304)));var a=Fr();t=Ei(t,r),t!==null&&(Kn(t,r,a),Zr(t,a))}function Jm(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),Lh(t,a)}function Xm(t,r){var a=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(d(314))}c!==null&&c.delete(r),Lh(t,a)}var Ph;Ph=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||mr.current)Zn=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return Zn=!1,ap(t,r,a);Zn=(t.flags&131072)!==0}else Zn=!1,nn&&(r.flags&1048576)!==0&&xl(r,Pr,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Fl(t,r),t=r.pendingProps;var f=Lo(r,Gn.current);Ys(r,a),f=El(null,r,c,t,f,a);var v=ku();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,tr(c)?(v=!0,Ao(r)):v=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,_l(r),f.updater=Wa,r.stateNode=f,f._reactInternals=r,Ou(r,c,t,a),r=Yo(null,r,c,!0,v,a)):(r.tag=0,nn&&v&&Ks(r),vr(null,r,f,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Fl(t,r),t=r.pendingProps,f=c._init,c=f(c._payload),r.type=c,f=r.tag=Zm(c),t=yr(c,t),f){case 0:r=so(null,r,c,t,a);break e;case 1:r=Qr(null,r,c,t,a);break e;case 11:r=$c(null,r,c,t,a);break e;case 14:r=Gc(null,r,c,yr(c.type,t),a);break e}throw Error(d(306,c,""))}return r;case 0:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:yr(c,f),so(t,r,c,f,a);case 1:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:yr(c,f),Qr(t,r,c,f,a);case 3:e:{if(Rl(r),t===null)throw Error(d(387));c=r.pendingProps,v=r.memoizedState,f=v.element,Vs(t,r),Cl(r,c,null,a);var L=r.memoizedState;if(c=L.element,v.isDehydrated)if(v={element:c,isDehydrated:!1,cache:L.cache,pendingSuspenseBoundaries:L.pendingSuspenseBoundaries,transitions:L.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){f=ro(Error(d(423)),r),r=Wu(t,r,c,a,f);break e}else if(c!==f){f=ro(Error(d(424)),r),r=Wu(t,r,c,a,f);break e}else for(Pn=ys(r.stateNode.containerInfo.firstChild),gr=r,nn=!0,Vr=null,a=Pa(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Io(),c===f){r=Ar(t,r,a);break e}vr(t,r,c,a)}r=r.child}return r;case 5:return bu(r),t===null&&wl(r),c=r.type,f=r.pendingProps,v=t!==null?t.memoizedProps:null,L=f.children,Ws(c,f)?L=null:v!==null&&Ws(c,v)&&(r.flags|=32),Al(t,r),vr(t,r,L,a),r.child;case 6:return t===null&&wl(r),null;case 13:return Ml(t,r,a);case 4:return Xs(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=ks(r,null,c,a):vr(t,r,c,a),r.child;case 11:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:yr(c,f),$c(t,r,c,f,a);case 7:return vr(t,r,r.pendingProps,a),r.child;case 8:return vr(t,r,r.pendingProps.children,a),r.child;case 12:return vr(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,f=r.pendingProps,v=r.memoizedProps,L=f.value,Qt(Aa,c._currentValue),c._currentValue=L,v!==null)if(Cn(v.value,L)){if(v.children===f.children&&!mr.current){r=Ar(t,r,a);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var $=v.dependencies;if($!==null){L=v.child;for(var X=$.firstContext;X!==null;){if(X.context===c){if(v.tag===1){X=Li(-1,a&-a),X.tag=2;var pe=v.updateQueue;if(pe!==null){pe=pe.shared;var Re=pe.pending;Re===null?X.next=X:(X.next=Re.next,Re.next=X),pe.pending=X}}v.lanes|=a,X=v.alternate,X!==null&&(X.lanes|=a),Do(v.return,a,r),$.lanes|=a;break}X=X.next}}else if(v.tag===10)L=v.type===r.type?null:v.child;else if(v.tag===18){if(L=v.return,L===null)throw Error(d(341));L.lanes|=a,$=L.alternate,$!==null&&($.lanes|=a),Do(L,a,r),L=v.sibling}else L=v.child;if(L!==null)L.return=v;else for(L=v;L!==null;){if(L===r){L=null;break}if(v=L.sibling,v!==null){v.return=L.return,L=v;break}L=L.return}v=L}vr(t,r,f.children,a),r=r.child}return r;case 9:return f=r.type,c=r.pendingProps.children,Ys(r,a),f=zr(f),c=c(f),r.flags|=1,vr(t,r,c,a),r.child;case 14:return c=r.type,f=yr(c,r.pendingProps),f=yr(c.type,f),Gc(t,r,c,f,a);case 15:return Zt(t,r,r.type,r.pendingProps,a);case 17:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:yr(c,f),Fl(t,r),r.tag=1,tr(c)?(t=!0,Ao(r)):t=!1,Ys(r,a),Hc(r,c,f),Ou(r,c,f,a),Yo(null,r,c,!0,t,a);case 19:return Uu(t,r,a);case 22:return Yc(t,r,a)}throw Error(d(156,r.tag))};function Ah(t,r){return Er(t,r)}function Qm(t,r,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oi(t,r,a,c){return new Qm(t,r,a,c)}function mp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zm(t){if(typeof t=="function")return mp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ce)return 11;if(t===N)return 14}return 2}function Zo(t,r){var a=t.alternate;return a===null?(a=Oi(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function nd(t,r,a,c,f,v){var L=2;if(c=t,typeof t=="function")mp(t)&&(L=1);else if(typeof t=="string")L=5;else e:switch(t){case le:return Ga(a.children,f,v,r);case we:L=8,f|=8;break;case He:return t=Oi(12,a,r,f|2),t.elementType=He,t.lanes=v,t;case se:return t=Oi(13,a,r,f),t.elementType=se,t.lanes=v,t;case ye:return t=Oi(19,a,r,f),t.elementType=ye,t.lanes=v,t;case q:return rd(a,f,v,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case je:L=10;break e;case ie:L=9;break e;case Ce:L=11;break e;case N:L=14;break e;case J:L=16,c=null;break e}throw Error(d(130,t==null?t:typeof t,""))}return r=Oi(L,a,r,f),r.elementType=t,r.type=c,r.lanes=v,r}function Ga(t,r,a,c){return t=Oi(7,t,c,r),t.lanes=a,t}function rd(t,r,a,c){return t=Oi(22,t,c,r),t.elementType=q,t.lanes=a,t.stateNode={isHidden:!1},t}function gp(t,r,a){return t=Oi(6,t,null,r),t.lanes=a,t}function yp(t,r,a){return r=Oi(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function eg(t,r,a,c,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function vp(t,r,a,c,f,v,L,$,X){return t=new eg(t,r,a,$,X),r===1?(r=1,v===!0&&(r|=8)):r=0,v=Oi(3,null,null,r),t.current=v,v.stateNode=t,v.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},_l(v),t}function tg(t,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:c==null?null:""+c,children:t,containerInfo:r,implementation:a}}function Rh(t){if(!t)return xs;t=t._reactInternals;e:{if(kn(t)!==t||t.tag!==1)throw Error(d(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(tr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(d(171))}if(t.tag===1){var a=t.type;if(tr(a))return gu(t,a,r)}return r}function Ih(t,r,a,c,f,v,L,$,X){return t=vp(a,c,!0,t,f,v,L,$,X),t.context=Rh(null),a=t.current,c=Fr(),f=Xo(a),v=Li(c,f),v.callback=r??null,pi(a,v,f),t.current.lanes=f,Kn(t,f,c),Zr(t,c),t}function id(t,r,a,c){var f=r.current,v=Fr(),L=Xo(f);return a=Rh(a),r.context===null?r.context=a:r.pendingContext=a,r=Li(v,L),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=pi(f,r,L),t!==null&&(ts(t,f,L,v),Ia(t,f,L)),L}function sd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Oh(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function xp(t,r){Oh(t,r),(t=t.alternate)&&Oh(t,r)}function ng(){return null}var Mh=typeof reportError=="function"?reportError:function(t){console.error(t)};function bp(t){this._internalRoot=t}od.prototype.render=bp.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(d(409));id(t,r,null,null)},od.prototype.unmount=bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;qa(function(){id(null,t,null,null)}),r[Ji]=null}};function od(t){this._internalRoot=t}od.prototype.unstable_scheduleHydration=function(t){if(t){var r=oa();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Mr.length&&r!==0&&r<Mr[a].priority;a++);Mr.splice(a,0,t),a===0&&bo(t)}};function wp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ad(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dh(){}function rg(t,r,a,c,f){if(f){if(typeof c=="function"){var v=c;c=function(){var pe=sd(L);v.call(pe)}}var L=Ih(r,c,t,0,null,!1,!1,"",Dh);return t._reactRootContainer=L,t[Ji]=L.current,fs(t.nodeType===8?t.parentNode:t),qa(),L}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var $=c;c=function(){var pe=sd(X);$.call(pe)}}var X=vp(t,0,!1,null,null,!1,!1,"",Dh);return t._reactRootContainer=X,t[Ji]=X.current,fs(t.nodeType===8?t.parentNode:t),qa(function(){id(r,X,a,c)}),X}function ld(t,r,a,c,f){var v=a._reactRootContainer;if(v){var L=v;if(typeof f=="function"){var $=f;f=function(){var X=sd(L);$.call(X)}}id(r,L,t,f)}else L=rg(a,r,t,f,c);return sd(L)}$r=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Sn(r.pendingLanes);a!==0&&(as(r,a|1),Zr(r,At()),(dt&6)===0&&(Hl=At()+500,bs()))}break;case 13:qa(function(){var c=Ei(t,1);if(c!==null){var f=Fr();ts(c,t,1,f)}}),xp(t,1)}},ai=function(t){if(t.tag===13){var r=Ei(t,134217728);if(r!==null){var a=Fr();ts(r,t,134217728,a)}xp(t,134217728)}},pr=function(t){if(t.tag===13){var r=Xo(t),a=Ei(t,r);if(a!==null){var c=Fr();ts(a,t,r,c)}xp(t,r)}},oa=function(){return Et},ls=function(t,r){var a=Et;try{return Et=t,r()}finally{Et=a}},Tr=function(t,r,a){switch(r){case"input":if(rt(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==t&&c.form===t.form){var f=yn(c);if(!f)throw Error(d(90));Ht(c),rt(c,f)}}}break;case"textarea":ge(t,a);break;case"select":r=a.value,r!=null&&ht(t,!!a.multiple,r,!1)}},lr=pp,wn=qa;var ig={usingClientEntryPoint:!1,Events:[dn,Tn,yn,Nn,un,pp]},$u={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sg={bundleType:$u.bundleType,version:$u.version,rendererPackageName:$u.rendererPackageName,rendererConfig:$u.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nr(t),t===null?null:t.stateNode},findFiberByHostInstance:$u.findFiberByHostInstance||ng,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ud=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ud.isDisabled&&ud.supportsFiber)try{On=ud.inject(sg),C=ud}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ig,ei.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wp(r))throw Error(d(200));return tg(t,r,null,a)},ei.createRoot=function(t,r){if(!wp(t))throw Error(d(299));var a=!1,c="",f=Mh;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=vp(t,1,!1,null,null,a,!1,c,f),t[Ji]=r.current,fs(t.nodeType===8?t.parentNode:t),new bp(r)},ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=Nr(r),t=t===null?null:t.stateNode,t},ei.flushSync=function(t){return qa(t)},ei.hydrate=function(t,r,a){if(!ad(r))throw Error(d(200));return ld(null,t,r,!0,a)},ei.hydrateRoot=function(t,r,a){if(!wp(t))throw Error(d(405));var c=a!=null&&a.hydratedSources||null,f=!1,v="",L=Mh;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(L=a.onRecoverableError)),r=Ih(r,null,t,1,a??null,f,!1,v,L),t[Ji]=r.current,fs(t),c)for(t=0;t<c.length;t++)a=c[t],f=a._getVersion,f=f(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,f]:r.mutableSourceEagerHydrationData.push(a,f);return new od(r)},ei.render=function(t,r,a){if(!ad(r))throw Error(d(200));return ld(null,t,r,!1,a)},ei.unmountComponentAtNode=function(t){if(!ad(t))throw Error(d(40));return t._reactRootContainer?(qa(function(){ld(null,null,t,!1,function(){t._reactRootContainer=null,t[Ji]=null})}),!0):!1},ei.unstable_batchedUpdates=pp,ei.unstable_renderSubtreeIntoContainer=function(t,r,a,c){if(!ad(a))throw Error(d(200));if(t==null||t._reactInternals===void 0)throw Error(d(38));return ld(t,r,a,!1,c)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var Kh;function gg(){if(Kh)return _p.exports;Kh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),_p.exports=mg(),_p.exports}var $h;function yg(){if($h)return cd;$h=1;var l=gg();return cd.createRoot=l.createRoot,cd.hydrateRoot=l.hydrateRoot,cd}var vg=yg();const xg=[["Avery","Morgan","averym","Avery","p1"],["Jordan","Brooks","jbrooks17","Jordan Brooks","p1"],["Taylor","Reed","treed","T. Reed","p1"],["Casey","Nguyen","cnguyen","Casey","p1"],["Riley","Davis","rileyd","Riley","p1"],["Maya","Patel","maya-p","Maya","p3"],["Cameron","Lee","clee","Cameron Lee","p3"],["Sydney","Wilson","sydneyw","Sydney","p3"],["Quinn","Martinez","qmartinez","Quinn","p3"],["Bailey","Adams","bailey_a","Bailey","p5"],["Sam","Rivera","rivera-s","Sam","p5"],["Charlie","Brown","charlieb","Charlie","p6"],["Drew","Johnson","drewj","Drew","p6"],["Alex","Kim","alexk","Alex","p7"],["Robin","Clark","robin-c","Robin","p7"],["Jamie","Flores","jflores","Jamie","p8"]],wd=xg.map(([l,u,d,g,y],b)=>({id:`sample-${b+1}`,first:l,last:u,sheetName:b===3||b===11?null:`${l} ${u}`,github:d,studentName:g,sections:b===0?["p1","p3"]:[y],status:b%5===0?"Active now":b%4===0?"Viewing page":"No recent signal",current:b%3===0?"Strings and Variables":b%3===1?"Format a Summary":"Intro to Arrays",assignments:[{id:"strings",name:"Strings and Variables",type:"Lesson",status:"Completed",score:b%4===0?null:8+b%3,possible:10,submitted:"2026-11-02"},{id:"summary",name:"Format a Summary",type:"Challenge",status:b%4===0?"Started":"Completed",score:b%4===0?null:11+b%5,possible:15,submitted:"2026-11-03"},{id:"decisions",name:"Decision Tree",type:"Challenge",status:b%3===0?"Submitted":"Needs revision",score:b%3===0?10:null,possible:20,submitted:"2026-10-28"},{id:"reflection",name:"Debugging Reflection",type:"Lesson",status:"Practice completed",score:null,possible:5,submitted:"2026-10-26"}],weekly:{"2026-11-02":b%4===0?0:19+b%6,"2026-10-26":b%3===0?12:8+b%5}})),bg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function kd(l=new Date){const u=Object.fromEntries(bg.formatToParts(l).filter(g=>g.type!=="literal").map(g=>[g.type,g.value])),d=new Date(Date.UTC(Number(u.year),Number(u.month)-1,Number(u.day)));return d.setUTCDate(d.getUTCDate()-(d.getUTCDay()+6)%7),d.toISOString().slice(0,10)}function Fp(l=new Date,u=8){const d=new Date(kd(l)+"T12:00:00Z");return Array.from({length:u},(g,y)=>{const b=new Date(d);return b.setUTCDate(b.getUTCDate()-y*7),b.toISOString().slice(0,10)})}const $l=l=>new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"America/Chicago"}),wg=(l,u,d)=>`${l}|${u}|${d}`;function kg({response:l,type:u,aiUse:d,aiDetails:g}){return["essay","logic-puzzle"].includes(u)?String(l).trim().length<10?"Write your answer and explain your thinking.":["none","disclosed"].includes(d)?d==="disclosed"&&String(g).trim().length<5?"Describe which parts involved AI.":"":"Complete the AI-use declaration.":"Select an essay or logic puzzle."}const Sg=[{id:"seed-journal-1",sectionId:"p1",studentId:"sample-2",studentName:"Jordan Brooks",courseId:"computer-science-1",week:kd(),type:"essay",response:"When I debug code, I first reproduce the problem and read the error carefully. Next I try one small change and test again. I keep notes so I can explain what fixed the problem and why.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()},{id:"seed-journal-2",sectionId:"p1",studentId:"sample-3",studentName:"Taylor Reed",courseId:"computer-science-1",week:kd(),type:"logic-puzzle",response:"The differences are 4, 6, 8, and 10. The next difference is 12, so the next number is 42. This also follows the pattern n(n+1), starting at n = 1.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()}],js={"game-programming":[{id:"csharp-foundations",title:"C# Foundations",description:"Build the logic behind games.",lessons:["csharp-variables","csharp-conditionals"]},{id:"unity-systems",title:"Unity Gameplay",description:"Connect scripts and game mechanics.",lessons:["unity-colliders","unity-player-controller","unity-score"]}],"mobile-app-dev":[{id:"web-basics",title:"Web Foundations",description:"Create and style interface elements.",lessons:["web-layout","web-events"]},{id:"react-foundations",title:"React Essentials",description:"Build reusable and interactive UI.",lessons:["react-components","react-state"]}],uil:[{id:"java-language",title:"Java Language & Tracing",description:"Reason about loops and variables.",lessons:["uil-loops","uil-methods"]},{id:"java-data",title:"Data Structures",description:"Trace arrays and string operations.",lessons:["uil-arrays","uil-strings"]}],"tsi-math":[{id:"tsi-quantitative",title:"Quantitative Reasoning",description:"Rates, ratios, percentages, and proportions.",lessons:["tsi-ratios","tsi-percents"]},{id:"tsi-algebra",title:"Algebraic Reasoning",description:"Solve equations and interpret graphs.",lessons:["tsi-equations","tsi-slope"]}],capstone:[{id:"capstone-discover",title:"Discover the Problem",description:"Investigate a need worth solving.",lessons:["capstone-discovery","capstone-interviews"]},{id:"capstone-validate",title:"Prototype & Validate",description:"Turn evidence into an iterated prototype.",lessons:["capstone-prototype","capstone-feedback"]}]},_g=[{id:"01-how-programs-work/01-first-message",unit:1,unitName:"How Programs Work",lesson:1,slug:"01-first-message",title:"Instructions and output",concept:"Output and strings",summary:"Tell a computer what to display using a simple Python instruction.",mode:"script",starter:`# Use print() to display the exact welcome message.
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
`}],Cg=[{id:"02-values-and-variables/01-meet-variables",unit:2,unitName:"Values, Variables & Expressions",lesson:1,slug:"01-meet-variables",title:"Names for changing information",concept:"Variables and assignment  ",summary:"Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.",mode:"script",starter:`# Name the player with a variable, then display the required message.
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
`}],Tg=[{id:"03-functions-and-parameters/01-functions-return",unit:3,unitName:"Functions, Parameters & Return Values",lesson:1,slug:"01-functions-return",title:"Returning an answer",concept:"Function definitions and return  ",summary:"A function packages instructions into a reusable operation. A function can give a result back with `return`.",mode:"function",starter:`def increment_number(number):
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
`}],jg=[{id:"04-comparisons-and-boolean-logic/01-comparisons",unit:4,unitName:"Comparisons & Boolean Logic",lesson:1,slug:"01-comparisons",title:"Ask Python a question",concept:"Comparison operators and Boolean values  ",summary:"A comparison is a question that evaluates to a Boolean value: `True` or `False`.",mode:"function",starter:`def has_required_points(current, required):
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
`}],Ng=[{id:"05-conditional-execution/01-first-if",unit:5,unitName:"Conditional Execution",lesson:1,slug:"01-first-if",title:"Make a choice with if",concept:"If statements and indentation  ",summary:"Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.",mode:"function",starter:`def classify_temperature(temperature):
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
`}],Eg=[{id:"06-iteration/01-for-ranges",unit:6,unitName:"Iteration & Accumulation",lesson:1,slug:"01-for-ranges",title:"Repeat an instruction",concept:"For loops and ranges  ",summary:"A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.",mode:"script",starter:`# Use one loop to print the integers 1 through 4.
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
`}],Lg=[{id:"07-strings-and-text/01-index-and-length",unit:7,unitName:"Strings & Text Processing",lesson:1,slug:"01-index-and-length",title:"Read characters by position",concept:"String indexing and length",summary:"A string is an ordered sequence of characters. Positions start at zero, and negative indexes count from the end.",mode:"function",starter:`def edge_letters(text):
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
`}],Pg=[{id:"08-lists-and-collections/01-list-indexing",unit:8,unitName:"Lists & Collections",lesson:1,slug:"01-list-indexing",title:"Read values from a list",concept:"Lists, indexes, negative positions",summary:"A list stores several values in order, and each can be read using its position.",mode:"function",starter:`def end_points(values):
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
`}],Ag=[{id:"09-dictionaries-and-data/01-keys-and-values",unit:9,unitName:"Dictionaries & Data",lesson:1,slug:"01-keys-and-values",title:"Look up information by key",concept:"Dictionary lookup and get",summary:"Dictionaries connect unique keys with values, letting a program retrieve information by name.",mode:"function",starter:`def price_for(prices, item):
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
`}],Rg=[{id:"10-algorithms-and-testing/01-while-and-sentinels",unit:10,unitName:"Algorithms & Testing",lesson:1,slug:"01-while-and-sentinels",title:"Repeat until a stop signal",concept:"While loops and sentinel values",summary:"A `while` loop repeats until a condition changes, making it useful when the stopping point is part of the input.",mode:"function",starter:`def before_stop(events):
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
`}],Ig=[..._g,...Cg,...Tg,...jg,...Ng,...Eg,...Lg,...Pg,...Ag,...Rg],Vf={"python-strings":{title:"Strings and Variables",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Create a greeting using a name and a favorite topic.",starter:`name = "Jordan"
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
`,console:"Run, Check and Submit are simulated in this React design lab."},"tsi-percents":{title:"Percents and Discounts",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Use percentages in everyday situations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-equations":{title:"Solve Linear Equations",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Solve a one-variable equation with inverse operations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-slope":{title:"Slope and Rate of Change",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Interpret slope from a table of values.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."}};function Va(l){return typeof l=="string"?l:typeof(l==null?void 0:l.id)=="string"?l.id:""}function Ls(l){return String((l==null?void 0:l.title)||(l==null?void 0:l.unitName)||(l==null?void 0:l.name)||"Lessons")}function oc(l,u=1){return(l==null?void 0:l.number)??(l==null?void 0:l.unit)??u}function rs(l){return((l==null?void 0:l.lessons)||[]).map(Va).filter(Boolean)}function tc(l){return Array.isArray(l==null?void 0:l.units)?l.units.flatMap(rs):Array.isArray(l==null?void 0:l.lessons)?l.lessons.map(Va).filter(Boolean):[]}function Og(l,u){return((l==null?void 0:l.units)||[]).some(d=>rs(d).includes(u))}function na(l,u,d=Vf){var k,E;if(!u)return null;const g=((l==null?void 0:l.units)||[]).find(P=>rs(P).includes(u)),y=((g==null?void 0:g.lessons)||[]).find(P=>Va(P)===u),b=typeof y=="object"&&y||((k=g==null?void 0:g.lessonMeta)==null?void 0:k[u])||((E=l==null?void 0:l.lessonRecords)==null?void 0:E[u])||{},_=(d==null?void 0:d[u])||{},T=String(b.title||b.name||_.title||u.split("/").at(-1));return{..._,...b,id:u,title:T,kind:b.kind||_.kind||"Lesson",difficulty:b.difficulty||_.difficulty||"",points:b.points??_.points??null,language:b.language||_.language||(l==null?void 0:l.language)||"text",challenge:b.challenge||b.summary||_.challenge||"",starter:b.starter||_.starter||"",console:_.console||(b.markdownSource?b.language==="python"?"Run Python to see your output. Checks use published examples only.":"Preview-only workspace. Use the production Playground for functional language runners and verified checks.":""),ready:!!(d!=null&&d[u])||typeof b.markdownSource=="string"&&b.starter!==void 0,isPublished:typeof b.markdownSource=="string"&&b.starter!==void 0}}function ra(l,u,d=Vf){var g;return((g=na(l,u,d))==null?void 0:g.title)||""}function Yl(l){const u=Array.isArray(l)?{lessons:l}:l||{},d=new Map,g=new Set,y=[],b=(T,k,E,P)=>{const I=String(T);let R=y.find(V=>V.id===I);return R||(R={id:I,title:String(k||"Lessons"),description:String(E||""),number:P,lessons:[]},y.push(R)),R},_=(T,k)=>{const E=Va(k);!E||g.has(E)||(g.add(E),T.lessons.push(E),d.set(E,typeof k=="string"?{id:E}:{...k}))};return Array.isArray(u.units)?u.units.forEach((T,k)=>{const E=b(T.id||`unit-${k+1}`,Ls(T),T.description||T.summary,oc(T,k+1));(T.lessons||[]).forEach(P=>_(E,P))}):Array.isArray(u.lessons)&&u.lessons.forEach((T,k)=>{if(!T||!Va(T))return;const E=T.unit||null,P=Va(T).indexOf("/"),I=E!=null?P>=0?Va(T).slice(0,P):`unit-${E}`:T.competency?`topic-${String(T.competency).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`:"lessons",R=T.unitName||T.competency||"Lessons",V=b(I,R,"",E??y.length+1);_(V,T)}),{units:y,lessonRecords:Object.fromEntries(d),lessons:y.flatMap(rs)}}const jp=Yl(Ig),ns=[{id:"computer-science-1",units:jp.units,lessonRecords:jp.lessonRecords,language:"python",publishedContent:!0,slug:"computer-science-1",label:"Computer Science I",short:"Python",glyph:"py",color:"#6366F1",description:"Build your problem-solving toolkit with Python.",lessons:jp.lessons,topics:["Variables","Strings","Formatting","Conditions","Lists"]},{id:"game-programming",units:js["game-programming"],slug:"game-programming",label:"Game Programming & Design",short:"C# · Unity",glyph:"C#",color:"#C052EB",description:"Make ideas playable with Unity and C#.",lessons:js["game-programming"].flatMap(l=>l.lessons),topics:["C# Basics","Rigidbody","Colliders"]},{id:"mobile-app-dev",units:js["mobile-app-dev"],slug:"mobile-app-web",label:"Mobile App & Web",short:"React · JavaScript",glyph:"js",color:"#27BBD2",description:"Create useful websites and mobile applications.",lessons:js["mobile-app-dev"].flatMap(l=>l.lessons),topics:["HTML","CSS","JavaScript","React"]},{id:"capstone",units:js.capstone,slug:"capstone",label:"Capstone",short:"Build for someone",glyph:"++",color:"#FF2D55",description:"Research a problem, prototype, and test a solution.",lessons:js.capstone.flatMap(l=>l.lessons),topics:["Research","Prototype","Pitch"]},{id:"uil",units:js.uil,slug:"uil",label:"UIL Computer Science",short:"Java",glyph:"jv",color:"#FF9F0A",description:"Trace Java, explain your reasoning, and practice.",lessons:js.uil.flatMap(l=>l.lessons),topics:["Java","Arrays","Written","Programming"]},{id:"tsi-math",units:js["tsi-math"],slug:"tsi-math",label:"TSI Math Advisory",short:"Math · Open access",glyph:"ma",color:"#30C85A",description:"Quantitative reasoning and algebra practice.",lessons:js["tsi-math"].flatMap(l=>l.lessons),topics:["Percents","Ratios","Equations"]}],yi=l=>ns.find(u=>u.id===l),eh=l=>{var u;return(u=yi(l))==null?void 0:u.label};function Ed(l){return typeof l=="string"&&/^#[0-9a-fA-F]{6}$/.test(l)}function Mg(l,u={}){const d=u&&typeof u=="object"?u[l.id]:null;return Ed(d)?d.toUpperCase():l.color}function Dg(l){if(!Ed(l))return"#101012";const u=[1,3,5].map(g=>parseInt(l.slice(g,g+2),16)/255).map(g=>g<=.04045?g/12.92:((g+.055)/1.055)**2.4);return u[0]*.2126+u[1]*.7152+u[2]*.0722>.179?"#101012":"#FFFFFF"}function zg(l,u,d=document.documentElement){for(const g of u){const y=`--student-course-color-${g.id}`,b=l&&typeof l=="object"?l[g.id]:null,_=`--student-course-ink-${g.id}`;Ed(b)?(d.style.setProperty(y,b),d.style.setProperty(_,Dg(b))):(d.style.removeProperty(y),d.style.removeProperty(_))}}function fn(l,u){const[d,g]=Ne.useState(()=>{try{const y=localStorage.getItem(l);return y===null?u:JSON.parse(y)}catch{return u}});return Ne.useEffect(()=>{try{localStorage.setItem(l,JSON.stringify(d))}catch{}},[l,d]),[d,g]}function Fg(l,u=[]){return Array.isArray(u)&&u.includes(l)}function Jf(l,u=[]){const d=tc(l),g=d.filter(y=>Fg(y,u)).length;return{completed:g,total:d.length,percent:d.length?Math.round(g/d.length*100):0}}function Wg(l,u){const d=Array.isArray(l)?l:[];return d.includes(u)?d.filter(g=>g!==u):[...d,u]}const Hg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function Bg(l=new Date){const u=Object.fromEntries(Hg.formatToParts(l).filter(d=>d.type!=="literal").map(d=>[d.type,d.value]));return`${u.year}-${u.month}-${u.day}`}function Sd(l){return l?new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}):""}function gd(l,u=[]){return u.find(d=>d.id===l)||null}function Ug(l,u=[]){return u.find(d=>d.id===l)||null}function Ld(l,{assignments:u=[],grades:d=[],completedLessons:g=[],today:y=Bg()}={}){const b=Ug(l,u),_=gd(l,d),T=l.startsWith("lesson:")&&g.includes(l.slice(7)),k=!!_||T;return b!=null&&b.dueDate?{state:k?"completed":b.dueDate<y?"overdue":"assigned",dueDate:b.dueDate,grade:_,completed:k}:{state:k?"completed":"unassigned",dueDate:null,grade:_,completed:k}}function Wp(l=[]){const u=l.reduce((g,y)=>g+y.earned,0),d=l.reduce((g,y)=>g+y.possible,0);return{earned:u,possible:d,percent:d?Math.round(100*u/d):null,count:l.length}}function qg(l=[]){const u=new Map;return l.forEach(d=>{const g=kd(new Date(d.gradedAt+"T12:00:00Z"));u.has(g)||u.set(g,[]),u.get(g).push(d)}),[...u.entries()].map(([d,g])=>({week:d,...Wp(g)})).sort((d,g)=>g.week.localeCompare(d.week))}function Kg(l=[],u=[]){return[...new Set([...Array.isArray(l)?l:[],...u.filter(d=>d.id.startsWith("lesson:")).map(d=>d.id.slice(7))])]}const $g="/playground/data",Gg=new Set(["game-programming","mobile-app-dev","uil","tsi-math"]);function Yg(l){if(typeof l!="string"||!l||l.startsWith("/")||l.includes("\\")||l.includes("?")||l.includes("#")||l.split("/").some(u=>u===".."||u==="."||u===""))throw new Error("Invalid curriculum resource path");return l}function ac(l,u){if(!Gg.has(l))throw new Error("Unknown published course");return $g+"/"+l+"/"+Yg(u)}async function sr(l,u,d,g,y=!1){const b=await d(ac(l,u),{signal:g,cache:"no-store"});if(!b.ok)throw new Error("Published "+l+" resource unavailable: "+u);return y?b.json():b.text()}function th(l,u,d,g,y){var b,_,T;return{...l,markdownSource:u,starter:d??"",language:g,markdownUrl:ac(y,l.markdown),kind:"Lesson",challenge:((b=l.exercise)==null?void 0:b.prompt)||l.summary||l.objective||l.title||"",points:l.points??null,cases:((_=l.exercise)==null?void 0:_.examples)||l.cases||[],hints:((T=l.exercise)==null?void 0:T.hints)||l.hints||[],mode:l.exercise?"function":"script"}}async function Vg(l,u){const d="game-programming",g=await sr(d,"course.json",l,u,!0),y=await Promise.all(g.units.map(async b=>({id:b.id,number:b.number,title:b.title,description:b.summary||"",lessons:await Promise.all(b.lessons.map(async _=>{var E,P,I,R,V;const T=await sr(d,_.markdown,l,u);return{...th(_,T,(E=_.exercise)==null?void 0:E.starter,"csharp",d),starter:((P=_.exercise)==null?void 0:P.starter)||"",kind:"Lesson",exerciseId:(I=_.exercise)==null?void 0:I.id,challenge:((R=_.exercise)==null?void 0:R.prompt)||_.title,unityTask:_.unityTask||[],markdownSource:T+((V=_.unityTask)!=null&&V.length?`

### Unity activity
`+_.unityTask.map(te=>"- "+te).join(`
`):"")}}))})));return{...Yl({units:y}),source:"published",projects:[]}}async function Gh(l,u,d,g){if(!u)return null;const y=Object.keys(u);if(!y.includes("index.html")||!y.includes("styles.css")||!y.includes("script.js")&&!y.includes("App.jsx"))throw Error("A Mobile App starterFiles entry requires index.html, styles.css and script.js (or App.jsx).");return Object.fromEntries(await Promise.all(y.map(async b=>[b,await sr(l,u[b],d,g)])))}async function Jg(l,u){const d="mobile-app-dev",g=await sr(d,"course.json",l,u,!0),y=await Promise.all(g.lessons.map(async _=>{const[T,k,E]=await Promise.all([sr(d,_.markdown,l,u),_.starterFile?sr(d,_.starterFile,l,u):Promise.resolve(""),Gh(d,_.starterFiles,l,u)]);return{...th(_,T,k,_.language==="react"?"jsx":_.language,d),...E?{starterFiles:E}:{}}})),b=await Promise.all((g.projects||[]).map(async _=>{const[T,k]=await Promise.all([_.starterFile?sr(d,_.starterFile,l,u):Promise.resolve(""),Gh(d,_.starterFiles,l,u)]),E=await Promise.all(_.steps.map(async P=>({...P,focus:P.focus||P.title,markdownSource:await sr(d,P.markdown,l,u),markdownUrl:ac(d,P.markdown)})));return{id:_.id,title:_.title,summary:_.summary,skills:_.skills||[],starter:T,language:"html",steps:E,...k?{starterFiles:k}:{}}}));return{...Yl({lessons:y}),projects:b,source:"published"}}async function Xg(l,u){const g=await sr("uil","course.json",l,u,!0),y=await sr("uil",g.written.markdown,l,u),b=await sr("uil",g.written.practice,l,u,!0),T=(Array.isArray(b)?b:b.questions||[]).map((I,R)=>{const V=I.choices||I.options||[];return"### Practice question "+(R+1)+`

`+String(I.prompt||I.question||"")+`

`+V.map((te,H)=>String.fromCharCode(65+H)+". "+te).join(`

`)}).join(`

`),k={id:"written",title:"Written practice",language:"text",markdown:g.written.markdown,markdownSource:y+`

## Published practice questions

`+T,markdownUrl:ac("uil",g.written.markdown),starter:"",kind:"Practice",challenge:"Review Java reasoning and the published written-practice questions."},E=await Promise.all(g.lessons.map(async I=>{const[R,V]=await Promise.all([sr("uil",I.markdown,l,u),sr("uil",I.starterFile,l,u)]);return th(I,R,V,"java","uil")}));return{...Yl({units:[{id:"written-preparation",number:1,title:"Written preparation",lessons:[k]},{id:"programming-practice",number:2,title:"Java programming practice",lessons:E}]}),source:"published",projects:[]}}async function Qg(l,u){const d="tsi-math",[g,y,b,_]=await Promise.all([sr(d,"content/20-day-program.json",l,u,!0),sr(d,"content/strand-lessons-v1.json",l,u,!0),sr(d,"content/diagnostic-24-mc-v2.json",l,u,!0),sr(d,"content/math-locator-profiles.json",l,u,!0)]),T=(g.days||[]).map(E=>({id:E.id,title:E.title,challenge:"Day "+E.day+" · "+E.strand+" · 30 minutes",kind:"Planned session",language:"text",starter:"",ready:!1,status:"planned"})),k=await Promise.all((y.lessons||[]).map(async E=>({id:E.id,title:E.title,kind:"Draft practice",status:"draft",language:"text",markdown:E.student_lesson,markdownUrl:ac(d,E.student_lesson),markdownSource:await sr(d,E.student_lesson,l,u),starter:"",challenge:"Currently authored draft lesson · "+E.minutes+" minutes"})));return{...Yl({units:[{id:"study-schedule",number:1,title:"20-day study schedule (in development)",lessons:T},{id:"authored-strands",number:2,title:"Available draft strand lessons",lessons:k}]}),source:"published-draft",projects:[],tsiDraft:!0,diagnosticItems:b.items||[],locatorProfiles:_.profiles||[]}}async function Zg(l,{fetchImpl:u=fetch,signal:d}={}){if(l==="game-programming")return Vg(u,d);if(l==="mobile-app-dev")return Jg(u,d);if(l==="uil")return Xg(u,d);if(l==="tsi-math")return Qg(u,d);throw new Error("Unknown published course")}const co=(...l)=>l.filter(Boolean).join(" "),ey=["temperature-alert","count-matches","sum-positives","score-line","attendance-percent","longest-win-streak","confidence-total","second-largest-distinct","target-pairs","competition-ranks"],ty="/playground/preview/",ny="/"+ty.replace(/^\/+|\/+$/g,""),go=l=>`${ny}/#${l}`,Kl=()=>go("/"),Yh=()=>go("/teacher"),ry=()=>go("/admin"),iy=()=>go("/journals"),sy=()=>go("/grades"),Ul=(l=null)=>go(l?`/challenges/course/${encodeURIComponent(l)}`:"/challenges"),Xf=l=>go(`/challenges/${encodeURIComponent(l)}`);function Qf(l,u,d=null){const g=typeof l=="string"?yi(l):l;if(!g||!u)return Kl();const y=`/playgrounds/${encodeURIComponent(g.slug)}/projects/${encodeURIComponent(u)}`;return go(d?`${y}/steps/${encodeURIComponent(d)}`:y)}function Pd(l,u){const d=typeof l=="string"?yi(l):l;if(!d)return Kl();const g=`/playgrounds/${encodeURIComponent(d.slug)}`;return go(u?`${g}/lessons/${encodeURIComponent(u)}`:g)}function dd(l,u=ns){const b=((typeof window<"u"&&window.location.hash.slice(1)||"/").replace(/\/+$/,"")||"/").slice("".length)||"/";if(b==="/")return{page:"home"};if(b==="/teacher")return{page:"teacher"};if(b==="/admin")return{page:"admin"};if(b==="/journals")return{page:"journals"};if(b==="/grades")return{page:"grades"};if(b==="/challenges")return{page:"challenges",filterCourse:null};if(b.startsWith("/challenges/")){const P=b.split("/").filter(Boolean);try{if(P.length===3&&P[1]==="course"){const I=decodeURIComponent(P[2]);return yi(I)?{page:"challenges",filterCourse:I}:{page:"not-found"}}if(P.length===2){const I=decodeURIComponent(P[1]);return ey.includes(I)?{page:"challenge",challengeId:I}:{page:"not-found"}}}catch{return{page:"not-found"}}return{page:"not-found"}}const _=b.split("/").filter(Boolean);if(_[0]!=="playgrounds"||![2,4,6].includes(_.length))return{page:"not-found"};let T,k;try{T=decodeURIComponent(_[1]),k=_.length===4?decodeURIComponent(_[3]):void 0}catch{return{page:"not-found"}}const E=u.find(P=>P.slug===T);if(!E)return{page:"not-found"};if(_[2]==="projects"&&(_.length===4||_.length===6))try{const P=decodeURIComponent(_[3]),I=(E.projects||[]).find(V=>V.id===P),R=_.length===6?decodeURIComponent(_[5]):null;return!I||R&&(_[4]!=="steps"||!I.steps.some(V=>V.id===R))?{page:"not-found"}:{page:"course",courseId:E.id,lessonId:null,projectId:P,stepId:R}}catch{return{page:"not-found"}}return _.length!==2&&(_.length!==4||_[2]!=="lessons")?{page:"not-found"}:k&&!Og(E,k)?{page:"not-found"}:{page:"course",courseId:E.id,lessonId:k??null}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zf=(...l)=>l.filter((u,d,g)=>!!u&&u.trim()!==""&&g.indexOf(u)===d).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ay={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=Ne.forwardRef(({color:l="currentColor",size:u=24,strokeWidth:d=2,absoluteStrokeWidth:g,className:y="",children:b,iconNode:_,...T},k)=>Ne.createElement("svg",{ref:k,...ay,width:u,height:u,stroke:l,strokeWidth:g?Number(d)*24/Number(u):d,className:Zf("lucide",y),...T},[..._.map(([E,P])=>Ne.createElement(E,P)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=(l,u)=>{const d=Ne.forwardRef(({className:g,...y},b)=>Ne.createElement(ly,{ref:b,iconNode:u,className:Zf(`lucide-${oy(l)}`,g),...y}));return d.displayName=`${l}`,d};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=Ct("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=Ct("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=Ct("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=Ct("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=Ct("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=Ct("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=Ct("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=Ct("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=Ct("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=Ct("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=Ct("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=Ct("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=Ct("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=Ct("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=Ct("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=Ct("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=Ct("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=Ct("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=Ct("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=Ct("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=Ct("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=Ct("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=Ct("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=Ct("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=Ct("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=Ct("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=Ct("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=Ct("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=Ct("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=Ct("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=Ct("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=Ct("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=Ct("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=Ct("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=Ct("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=Ct("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=Ct("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=Ct("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=Ct("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=Ct("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=Ct("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=Ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function is({children:l,tone:u=""}){return p.jsx("span",{className:co("chip",u&&`chip-${u}`),children:l})}function Py({theme:l,setTheme:u}){const d=l==="dark";return p.jsx("button",{className:"icon-button",title:d?"Switch to light mode":"Switch to dark mode","aria-label":"Toggle light and dark mode",onClick:()=>u(d?"light":"dark"),children:d?p.jsx(Ey,{size:17}):p.jsx(Cy,{size:17})})}function Ay({sidebarOpen:l,onToggleSidebar:u,onHome:d,theme:g,setTheme:y}){return p.jsx("header",{className:"topbar",children:p.jsxs("div",{className:"topbar-inner",children:[p.jsx("button",{className:"icon-button nav-toggle",onClick:u,"aria-label":"Toggle navigation",children:l?p.jsx(Ty,{size:18}):p.jsx(_y,{size:18})}),p.jsxs("button",{className:"brand",onClick:d,children:[p.jsx("span",{className:"brand-logo",children:"{ }"}),p.jsx("strong",{children:"Ms. Whitby's Playground"}),p.jsx("span",{className:"brand-compact",children:"React Lab"})]}),p.jsx("div",{className:"topbar-spacer"}),p.jsx(is,{children:"LOCAL DESIGN LAB"}),p.jsx(Py,{theme:g,setTheme:y}),p.jsx("span",{className:"user-circle",children:"W"})]})})}const Ry=[["home","Home",ky],["challenges","Challenge Bank",Rd],["journals","Weekly journals",rh],["grades","Grades",by],["teacher","Teacher dashboard",ih],["admin","Admin dashboard",ah]];function Iy({open:l,page:u,courseId:d,lessonId:g,setPage:y,openCourse:b,onOpenProject:_,availableCourses:T=ns,completedLessons:k=[],assignments:E=[],grades:P=[]}){var R;const I=u==="course"?T.find(V=>V.id===d):null;return p.jsxs("aside",{className:co("main-sidebar",!l&&"collapsed"),"aria-label":"Playground navigation",children:[p.jsx("div",{className:"side-title",children:"EXPLORE"}),Ry.map(([V,te,H])=>p.jsxs("button",{className:co("nav-item",(u===V||V==="challenges"&&u==="challenge")&&"active"),onClick:()=>y(V),title:te,children:[p.jsx(H,{size:19}),p.jsx("span",{children:te})]},V)),I&&p.jsxs("section",{className:"course-outline","data-course":I.id,"aria-label":`${I.label} outline`,children:[p.jsx("div",{className:"side-rule"}),p.jsx("div",{className:"side-title",children:"COURSE CONTENT"}),p.jsxs("button",{className:co("outline-overview",!g&&"active"),onClick:()=>b(I.id),children:[p.jsx(lc,{size:16}),p.jsx("span",{children:"Course overview"})]}),I.units.map((V,te)=>p.jsxs("details",{className:"outline-unit",open:rs(V).includes(g)||!g&&te===0?!0:void 0,children:[p.jsxs("summary",{children:[p.jsx("span",{className:"outline-unit-number",children:String(oc(V,te+1)).padStart(2,"0")}),p.jsx("span",{className:"outline-unit-title",title:Ls(V),children:Ls(V)}),p.jsx(tm,{size:14})]}),p.jsx("div",{className:"outline-lesson-list",children:rs(V).map(H=>{const ae=ra(I,H),D=Ld("lesson:"+H,{assignments:E,grades:P,completedLessons:k}),W=D.completed?"completed":D.dueDate?D.state:"",F=W==="completed"?"Completed":W==="overdue"?"Overdue":W==="assigned"?"Assigned":"";return p.jsxs("button",{onClick:()=>b(I.id,H),className:co("outline-lesson",H===g&&"selected"),"aria-label":F?`${ae}, ${F.toLowerCase()}`:ae,title:F?`${ae} · ${F}`:ae,"aria-current":H===g?"page":void 0,children:[p.jsx("span",{className:"outline-lesson-name",children:ae}),F&&p.jsx("span",{className:`assignment-dot ${W}`,"aria-hidden":"true"})]},H)})})]},`${I.id}-${V.id}-${g||"overview"}`)),!!((R=I.projects)!=null&&R.length)&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"side-section-title",children:"PROJECTS"}),I.projects.map(V=>p.jsx("button",{type:"button",className:"outline-lesson",title:V.title,onClick:()=>_==null?void 0:_(I.id,V.id),children:p.jsx("span",{className:"outline-lesson-name",children:V.title})},V.id))]})]}),p.jsx("div",{className:"side-rule"}),p.jsx("div",{className:"side-title",children:"PLAYGROUNDS"}),T.map(V=>p.jsxs("button",{"data-course":V.id,className:co("nav-item course-nav-item",u==="course"&&d===V.id&&"active"),onClick:()=>b(V.id),title:V.label,children:[p.jsx("span",{className:"nav-dot"}),p.jsx("span",{children:V.label})]},V.id)),p.jsxs("div",{className:"sidebar-bottom",children:[p.jsx(hy,{size:17}),p.jsx("span",{children:"Your learning spaces"})]})]})}function Oy(){return p.jsxs("footer",{className:"site-footer",children:[p.jsx("span",{children:"Ms. Whitby's Playground · React design lab"}),p.jsx("span",{children:"Fictional data · No authentication or backend · No real code execution"})]})}const My={"computer-science-1":Ad,"game-programming":xy,"mobile-app-dev":Ny,uil:im,"tsi-math":em,capstone:jy};function Dy({course:l,onOpen:u,completedLessons:d=[]}){const{completed:g,total:y}=Jf(l,d),b=My[l.id]||Ad;function _(T){T.button!==0||T.metaKey||T.ctrlKey||T.shiftKey||T.altKey||(T.preventDefault(),u())}return p.jsxs("a",{className:"course-card","data-course":l.id,href:Pd(l),onClick:_,children:[p.jsxs("div",{className:"course-card-heading",children:[p.jsx("span",{className:"course-glyph","aria-hidden":"true",children:p.jsx(b,{size:24,strokeWidth:2.2})}),p.jsxs("div",{children:[p.jsx("h2",{children:l.label}),p.jsx("p",{children:l.short})]})]}),p.jsx("p",{className:"course-description",children:l.description}),p.jsxs("div",{className:"course-card-footer",children:[p.jsxs("div",{className:"course-meta",children:[p.jsxs("span",{children:[y," ",y===1?"lesson":"lessons"]}),p.jsxs("span",{children:[g," completed"]})]}),p.jsx("progress",{className:"course-progress-track",value:g,max:Math.max(y,1),"aria-label":`${l.label}: ${g} of ${y} lessons completed`})]})]})}function zy({onClick:l}){return p.jsxs("button",{className:"wide-shortcut",onClick:l,children:[p.jsx(ih,{size:18}),p.jsxs("span",{children:[p.jsx("strong",{children:"Teacher Dashboard preview"}),p.jsx("small",{children:"Section roster, expanded student assignments, account matching, and weekly points"})]}),p.jsx(ia,{size:18})]})}function Fy({openCourse:l,openTeacher:u,openChallenges:d,availableCourses:g=ns,completedLessons:y=[]}){return p.jsxs("div",{className:"main-content",children:[p.jsxs("div",{className:"welcome",children:[p.jsx("div",{className:"eyebrow",children:"Your learning spaces"}),p.jsx("h1",{children:"Your playgrounds"}),p.jsx("p",{children:"Choose a course to continue learning. Complete lessons to fill your progress bars."})]}),p.jsx("div",{className:"course-card-grid",children:g.map(b=>p.jsx(Dy,{course:b,completedLessons:y,onOpen:()=>l(b.id)},b.id))}),p.jsxs("button",{type:"button",className:"wide-shortcut challenge-bank-shortcut",onClick:d,children:[p.jsx(Rd,{size:23}),p.jsxs("span",{children:[p.jsx("strong",{children:"Shared Challenge Bank"}),p.jsx("small",{children:"Practice one problem in Python, Java, JavaScript, or C#."})]}),p.jsx("span",{"aria-hidden":"true",children:"→"})]}),p.jsx(zy,{onClick:u})]})}function Wy({course:l,openCourse:u,openProject:d,openChallenges:g,completedLessons:y=[],assignments:b=[],grades:_=[],courseColors:T={},onSetCourseColor:k,onResetCourseColor:E}){var te;const P=Jf(l,y),[I,R]=Ne.useState(!1),V=Mg(l,T);return p.jsxs("div",{className:"course-landing",children:[p.jsxs("header",{className:"course-hero surface-card",children:[p.jsx("button",{type:"button",className:"icon-button course-color-settings",onClick:()=>R(H=>!H),"aria-label":I?"Close course color settings":`Change ${l.label} color`,title:I?"Close settings":"Course color","aria-expanded":I,"aria-controls":"course-color-controls",children:I?p.jsx(Id,{size:17}):p.jsx(oh,{size:17})}),p.jsx("div",{className:"eyebrow",children:"Course overview"}),p.jsx("h1",{children:l.label}),p.jsx("p",{children:l.description}),p.jsxs("div",{className:"course-hero-stats",children:[p.jsxs("span",{children:[p.jsx(Sy,{size:16})," ",l.units.length," units"]}),p.jsxs("span",{children:[p.jsx(lc,{size:16})," ",tc(l).length," lessons"]})]}),p.jsxs("button",{className:"btn primary",disabled:!tc(l).length,onClick:()=>u(l.id,tc(l)[0]),children:["Start learning ",p.jsx(ia,{size:16})]}),I&&p.jsxs("section",{id:"course-color-controls",className:"course-color-controls","aria-label":"Choose a course color",children:[p.jsxs("div",{className:"course-color-control-copy",children:[p.jsx("strong",{children:"Course color"}),p.jsx("p",{children:"Make this course your own. The color updates throughout your Playground."})]}),p.jsxs("label",{className:"course-color-picker",children:[p.jsx("input",{type:"color",value:V,onChange:H=>k==null?void 0:k(l.id,H.target.value),"aria-label":`Choose a color for ${l.label}`}),p.jsx("span",{children:"Choose color"})]}),p.jsx("button",{type:"button",className:"btn",onClick:()=>E==null?void 0:E(l.id),children:"Reset to default"}),p.jsx("button",{type:"button",className:"btn",onClick:()=>R(!1),children:"Done"})]})]}),l.publishedContent&&p.jsx("p",{className:"course-published-note",children:"Real published lessons are shown here. Practice in this preview does not change your grades."}),l.contentLoadingError&&p.jsxs("p",{className:"course-published-note",role:"alert",children:["Published course materials could not be loaded: ",l.contentLoadingError,". Sample lessons are not substituted."]}),!l.publishedContent&&!l.contentLoadingError&&p.jsx("p",{className:"course-published-note",children:"Course materials are not yet published here. This is a design preview, not a course to assign."}),l.tsiDraft&&p.jsx("p",{className:"course-published-note",children:"The 20-day TSI schedule is an outline; four strand lessons are drafts. Unwritten sessions are not available for practice."}),p.jsxs("p",{className:"course-landing-progress",children:[P.completed," of ",P.total," lessons ",l.publishedContent?"marked complete in preview":"completed"," · ",P.percent,"%"]}),p.jsx("div",{className:"course-landing-heading",children:p.jsxs("div",{children:[p.jsx("h2",{children:"Units & lessons"}),p.jsx("p",{children:"Choose a unit or jump directly into a lesson."})]})}),p.jsx("div",{className:"unit-card-grid",children:l.units.map((H,ae)=>p.jsxs("section",{className:"unit-card surface-card",children:[p.jsxs("header",{className:"unit-card-header",children:[p.jsxs("span",{className:"unit-badge",children:["UNIT ",String(oc(H,ae+1)).padStart(2,"0")]}),p.jsx("h3",{title:Ls(H),children:Ls(H)}),H.description&&p.jsx("p",{children:H.description})]}),p.jsx("div",{className:"unit-lessons",children:rs(H).map((D,W)=>p.jsxs("a",{className:"unit-lesson-link",href:Pd(l,D),onClick:F=>{F.button!==0||F.metaKey||F.ctrlKey||F.shiftKey||F.altKey||(F.preventDefault(),u(l.id,D))},children:[p.jsx("span",{className:"unit-lesson-index",children:W+1}),p.jsxs("span",{className:"unit-lesson-label",children:[p.jsx("strong",{title:ra(l,D),children:ra(l,D)}),(()=>{var K,Y;const F=Ld("lesson:"+D,{assignments:b,grades:_,completedLessons:y});return F.dueDate||F.completed?p.jsxs("span",{className:"unit-assignment-meta",children:[p.jsxs("span",{className:`assignment-status ${F.state}`,children:[p.jsx("span",{className:`assignment-dot ${F.state}`,"aria-hidden":"true"}),F.completed?"Completed":F.state==="overdue"?"Overdue":"Assigned"]}),F.dueDate&&p.jsxs("small",{children:["Due ",Sd(F.dueDate)]}),F.grade&&p.jsxs("small",{children:[F.grade.earned," / ",F.grade.possible," pts"]})]}):p.jsxs("small",{children:[(K=na(l,D))==null?void 0:K.kind,(Y=na(l,D))!=null&&Y.difficulty?` · ${na(l,D).difficulty}`:""]})})()]}),p.jsx(Hp,{size:16})]},D))})]},H.id))}),!!((te=l.projects)!=null&&te.length)&&p.jsxs("section",{className:"course-projects surface-card",children:[p.jsx("div",{className:"eyebrow",children:"Published guided projects"}),p.jsx("h2",{children:"Projects"}),p.jsx("div",{className:"unit-card-grid",children:l.projects.map(H=>p.jsxs("a",{className:"unit-lesson-link",href:Qf(l,H.id),onClick:ae=>{ae.button!==0||ae.metaKey||ae.ctrlKey||ae.shiftKey||ae.altKey||(ae.preventDefault(),d(l.id,H.id))},children:[p.jsxs("span",{className:"unit-lesson-label",children:[p.jsx("strong",{children:H.title}),p.jsxs("small",{children:[H.steps.length," steps · ",H.summary]})]}),p.jsx(Hp,{size:16})]},H.id))})]}),p.jsxs("section",{className:"course-challenges-shelf surface-card",children:[p.jsxs("div",{children:[p.jsx("div",{className:"eyebrow",children:"Shared practice library"}),p.jsx("h2",{children:"Related programming challenges"}),p.jsx("p",{children:"Browse reusable problems suited to this course. Review each challenge's prerequisites before recommending it to students."})]}),p.jsxs("a",{href:Ul(l.id),className:"btn",onClick:H=>{H.button!==0||H.metaKey||H.ctrlKey||H.shiftKey||H.altKey||(H.preventDefault(),g(l.id))},children:[p.jsx(Rd,{size:16})," Browse challenges"]})]})]})}function uc({axis:l,onDrag:u}){const d=Ne.useRef(!1),g=l==="columns",y=()=>d.current=!1;return p.jsx("div",{className:co("splitter",g?"column-split":"row-split"),role:"separator","aria-label":g?"Resize instructions and editor":"Resize editor and console","aria-orientation":g?"vertical":"horizontal",tabIndex:0,onPointerDown:b=>{b.preventDefault(),b.currentTarget.setPointerCapture(b.pointerId),d.current=!0},onPointerMove:b=>{d.current&&b.buttons===1&&u(b)},onPointerUp:y,onLostPointerCapture:y,children:p.jsx("span",{})})}function lh({eyebrow:l,children:u,actions:d}){return p.jsxs("div",{className:"page-title-row",children:[p.jsxs("div",{children:[l&&p.jsx("div",{className:"eyebrow",children:l}),p.jsx("h1",{children:u})]}),d&&p.jsx("div",{className:"page-actions",children:d})]})}function pd({task:l,unit:u,unitNumber:d,isTsi:g,isCompleted:y=!1,assignment:b=null,grade:_=null,onToggleCompleted:T}){const k=(b==null?void 0:b.id)||(_==null?void 0:_.id)||"",E=Ld(k,{assignments:b?[b]:[],grades:_?[_]:[],completedLessons:y?[k.replace(/^lesson:/,"")]:[]});return p.jsxs("div",{className:"lesson-header",children:[p.jsxs("div",{className:"eyebrow",children:["Unit ",oc(u,d)," · ",Ls(u)," ",p.jsx("span",{className:"dot",children:"·"})," ",l.kind]}),p.jsx(lh,{actions:p.jsxs("div",{className:"lesson-heading-actions",children:[!g&&(l==null?void 0:l.points)!=null&&p.jsx("span",{className:"points-tag",children:_?`${_.earned} / ${_.possible} pts`:`${l.points} points available`}),_?p.jsxs("span",{className:"btn completion-toggle completed",children:[p.jsx(Bp,{size:16})," Completed"]}):p.jsxs("button",{type:"button",className:`btn completion-toggle ${y?"completed":""}`,"aria-pressed":y,onClick:T,children:[y?p.jsx(Bp,{size:16}):p.jsx(fy,{size:16}),y?"Completed":"Mark complete"]})]}),children:l.title}),p.jsx("p",{children:l.challenge}),(b==null?void 0:b.dueDate)&&p.jsxs("div",{className:"lesson-assignment-info",children:[p.jsx("span",{className:`assignment-status ${E.state}`,children:E.state==="completed"?"Completed":E.state==="overdue"?"Overdue":"Assigned"}),p.jsxs("span",{children:["Due ",Sd(b.dueDate)]})]})]})}const uh={"tsi-ratios":{prompt:"A recipe uses 3 cups of water for every 5 cups of rice. How many cups of water are needed for 15 cups of rice?",options:["5 cups","9 cups","12 cups","25 cups"],correct:1,explanation:"15 is three times 5, so multiply the 3 cups of water by 3 to get 9."},"tsi-percents":{prompt:"A $60 backpack is discounted by 25%. What is the sale price?",options:["$15","$35","$45","$75"],correct:2,explanation:"25% of $60 is $15; subtract $15 from $60 to get $45."},"tsi-equations":{prompt:"Solve for x: 4x + 6 = 22.",options:["2","4","6","7"],correct:1,explanation:"Subtract 6 from both sides to get 4x = 16, then divide by 4: x = 4."},"tsi-slope":{prompt:"A table gives points (1, 3), (2, 5), and (3, 7). What is the slope?",options:["1","2","3","4"],correct:1,explanation:"As x goes up by 1, y goes up by 2, so slope = 2/1 = 2."}},Hy=`# Find an Inefficiency

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
`,By=`# Interpret User Feedback

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
`,Uy=`# Interview for Evidence

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
`,qy=`# Make a Minimum Viable Prototype

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
`,Ky=`# Player Decisions

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
`,$y=`# Variables for a Game

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
`,Gy=`# Decision Making

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
`,Yy=`# Format a Summary

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
`,Vy=`# Lists and Indexing

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
`,Jy=`# For Loops

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
`,Xy=`# Strings and Variables

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
`,Qy=`<!-- Learning example adapted from mswhitby/computer-science-1/docs/units/content/02-values-and-variables/lessons/01-meet-variables.md; displayed in independent React preview. -->
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
`,Zy=`# Your First React Card

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
`,ev=`# Interactive React State

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
`,tv=`# Solve Linear Equations

## Learn

Solve an equation by doing the same operation to both sides. For 3x + 5 = 20, first subtract 5, then divide by 3.

### Example

Explain the quantities and operations before calculating.

## Practice

Solve 4x + 6 = 22. Explain each step.

Choose an answer in the practice card.
`,nv=`# Percents and Discounts

## Learn

A percent compares a quantity with 100. To find 20% of 50, multiply 0.20 × 50 = 10.

### Example

Explain the quantities and operations before calculating.

## Practice

A backpack costs $60 and is discounted by 25%. What is the sale price?

Choose an answer in the practice card.
`,rv=`# Ratios and Rates

## Learn

A ratio compares quantities. A **unit rate** tells us how many of one item correspond to one unit of another.

Example: If 3 markers are shared by 5 students, the number of markers per student is:

**3 ÷ 5 = 0.6 markers per student.**

## Practice

A group of 15 students needs markers at the same rate. How many markers are needed? Explain how you know.
`,iv=`# Slope and Rate of Change

## Learn

Slope is the change in y divided by the change in x. A constant rate makes a linear relationship.

### Example

Explain the quantities and operations before calculating.

## Practice

The table gives (1, 3), (2, 5), and (3, 7). What is the slope?

Choose an answer in the practice card.
`,sv=`# Trace a Java Array

## Learn

An array holds multiple values. Java arrays start at index **0**.

\`\`\`java
int[] scores = {2, 4, 6};
System.out.println(scores[0]); // 2
\`\`\`

## Practice

Trace the loop in the starter code. Record every index and the updated element value in a table. Then write the final array.
`,ov=`# Trace Java Loops

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
`,av=`# Method Calls and Scope

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
`,lv=`# String Indexing

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
`,uv=`# Collision Events

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
`,cv=`<!-- Learning example adapted from mswhitby/game-programming/samples/PlayerController.md (sample-lessons); displayed in independent React preview. -->
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
`,dv=`# Score and Feedback

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
`,pv=`# Events and Forms

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
`,hv=`# Responsive Layouts

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
`;function ch(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Qa=ch();function sm(l){Qa=l}var nc={exec:()=>null};function Yt(l,u=""){let d=typeof l=="string"?l:l.source;const g={replace:(y,b)=>{let _=typeof b=="string"?b:b.source;return _=_.replace(Wr.caret,"$1"),d=d.replace(y,_),g},getRegex:()=>new RegExp(d,u)};return g}var Wr={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:l=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}#`),htmlBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}<(?:[a-z].*>|!--)`,"i")},fv=/^(?:[ \t]*(?:\n|$))+/,mv=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,gv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,cc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,yv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,dh=/(?:[*+-]|\d{1,9}[.)])/,om=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,am=Yt(om).replace(/bull/g,dh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),vv=Yt(om).replace(/bull/g,dh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ph=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,xv=/^[^\n]+/,hh=/(?!\s*\])(?:\\.|[^\[\]\\])+/,bv=Yt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",hh).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),wv=Yt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,dh).getRegex(),Od="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",fh=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,kv=Yt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",fh).replace("tag",Od).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),lm=Yt(ph).replace("hr",cc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Od).getRegex(),Sv=Yt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",lm).getRegex(),mh={blockquote:Sv,code:mv,def:bv,fences:gv,heading:yv,hr:cc,html:kv,lheading:am,list:wv,newline:fv,paragraph:lm,table:nc,text:xv},Jh=Yt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",cc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Od).getRegex(),_v={...mh,lheading:vv,table:Jh,paragraph:Yt(ph).replace("hr",cc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Jh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Od).getRegex()},Cv={...mh,html:Yt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",fh).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:nc,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Yt(ph).replace("hr",cc).replace("heading",` *#{1,6} *[^
]`).replace("lheading",am).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Tv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,jv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,um=/^( {2,}|\\)\n(?!\s*$)/,Nv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Md=/[\p{P}\p{S}]/u,gh=/[\s\p{P}\p{S}]/u,cm=/[^\s\p{P}\p{S}]/u,Ev=Yt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,gh).getRegex(),dm=/(?!~)[\p{P}\p{S}]/u,Lv=/(?!~)[\s\p{P}\p{S}]/u,Pv=/(?:[^\s\p{P}\p{S}]|~)/u,Av=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,pm=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Rv=Yt(pm,"u").replace(/punct/g,Md).getRegex(),Iv=Yt(pm,"u").replace(/punct/g,dm).getRegex(),hm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Ov=Yt(hm,"gu").replace(/notPunctSpace/g,cm).replace(/punctSpace/g,gh).replace(/punct/g,Md).getRegex(),Mv=Yt(hm,"gu").replace(/notPunctSpace/g,Pv).replace(/punctSpace/g,Lv).replace(/punct/g,dm).getRegex(),Dv=Yt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,cm).replace(/punctSpace/g,gh).replace(/punct/g,Md).getRegex(),zv=Yt(/\\(punct)/,"gu").replace(/punct/g,Md).getRegex(),Fv=Yt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Wv=Yt(fh).replace("(?:-->|$)","-->").getRegex(),Hv=Yt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Wv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Cd=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Bv=Yt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Cd).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),fm=Yt(/^!?\[(label)\]\[(ref)\]/).replace("label",Cd).replace("ref",hh).getRegex(),mm=Yt(/^!?\[(ref)\](?:\[\])?/).replace("ref",hh).getRegex(),Uv=Yt("reflink|nolink(?!\\()","g").replace("reflink",fm).replace("nolink",mm).getRegex(),yh={_backpedal:nc,anyPunctuation:zv,autolink:Fv,blockSkip:Av,br:um,code:jv,del:nc,emStrongLDelim:Rv,emStrongRDelimAst:Ov,emStrongRDelimUnd:Dv,escape:Tv,link:Bv,nolink:mm,punctuation:Ev,reflink:fm,reflinkSearch:Uv,tag:Hv,text:Nv,url:nc},qv={...yh,link:Yt(/^!?\[(label)\]\((.*?)\)/).replace("label",Cd).getRegex(),reflink:Yt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Cd).getRegex()},Up={...yh,emStrongRDelimAst:Mv,emStrongLDelim:Iv,url:Yt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Kv={...Up,br:Yt(um).replace("{2,}","*").getRegex(),text:Yt(Up.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},hd={normal:mh,gfm:_v,pedantic:Cv},Yu={normal:yh,gfm:Up,breaks:Kv,pedantic:qv},$v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Xh=l=>$v[l];function Ns(l,u){if(u){if(Wr.escapeTest.test(l))return l.replace(Wr.escapeReplace,Xh)}else if(Wr.escapeTestNoEncode.test(l))return l.replace(Wr.escapeReplaceNoEncode,Xh);return l}function Qh(l){try{l=encodeURI(l).replace(Wr.percentDecode,"%")}catch{return null}return l}function Zh(l,u){var b;const d=l.replace(Wr.findPipe,(_,T,k)=>{let E=!1,P=T;for(;--P>=0&&k[P]==="\\";)E=!E;return E?"|":" |"}),g=d.split(Wr.splitPipe);let y=0;if(g[0].trim()||g.shift(),g.length>0&&!((b=g.at(-1))!=null&&b.trim())&&g.pop(),u)if(g.length>u)g.splice(u);else for(;g.length<u;)g.push("");for(;y<g.length;y++)g[y]=g[y].trim().replace(Wr.slashPipe,"|");return g}function Vu(l,u,d){const g=l.length;if(g===0)return"";let y=0;for(;y<g&&l.charAt(g-y-1)===u;)y++;return l.slice(0,g-y)}function Gv(l,u){if(l.indexOf(u[1])===-1)return-1;let d=0;for(let g=0;g<l.length;g++)if(l[g]==="\\")g++;else if(l[g]===u[0])d++;else if(l[g]===u[1]&&(d--,d<0))return g;return d>0?-2:-1}function ef(l,u,d,g,y){const b=u.href,_=u.title||null,T=l[1].replace(y.other.outputLinkReplace,"$1");g.state.inLink=!0;const k={type:l[0].charAt(0)==="!"?"image":"link",raw:d,href:b,title:_,text:T,tokens:g.inlineTokens(T)};return g.state.inLink=!1,k}function Yv(l,u,d){const g=l.match(d.other.indentCodeCompensation);if(g===null)return u;const y=g[1];return u.split(`
`).map(b=>{const _=b.match(d.other.beginningSpace);if(_===null)return b;const[T]=_;return T.length>=y.length?b.slice(y.length):b}).join(`
`)}var Td=class{constructor(l){on(this,"options");on(this,"rules");on(this,"lexer");this.options=l||Qa}space(l){const u=this.rules.block.newline.exec(l);if(u&&u[0].length>0)return{type:"space",raw:u[0]}}code(l){const u=this.rules.block.code.exec(l);if(u){const d=u[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:u[0],codeBlockStyle:"indented",text:this.options.pedantic?d:Vu(d,`
`)}}}fences(l){const u=this.rules.block.fences.exec(l);if(u){const d=u[0],g=Yv(d,u[3]||"",this.rules);return{type:"code",raw:d,lang:u[2]?u[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):u[2],text:g}}}heading(l){const u=this.rules.block.heading.exec(l);if(u){let d=u[2].trim();if(this.rules.other.endingHash.test(d)){const g=Vu(d,"#");(this.options.pedantic||!g||this.rules.other.endingSpaceChar.test(g))&&(d=g.trim())}return{type:"heading",raw:u[0],depth:u[1].length,text:d,tokens:this.lexer.inline(d)}}}hr(l){const u=this.rules.block.hr.exec(l);if(u)return{type:"hr",raw:Vu(u[0],`
`)}}blockquote(l){const u=this.rules.block.blockquote.exec(l);if(u){let d=Vu(u[0],`
`).split(`
`),g="",y="";const b=[];for(;d.length>0;){let _=!1;const T=[];let k;for(k=0;k<d.length;k++)if(this.rules.other.blockquoteStart.test(d[k]))T.push(d[k]),_=!0;else if(!_)T.push(d[k]);else break;d=d.slice(k);const E=T.join(`
`),P=E.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");g=g?`${g}
${E}`:E,y=y?`${y}
${P}`:P;const I=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(P,b,!0),this.lexer.state.top=I,d.length===0)break;const R=b.at(-1);if((R==null?void 0:R.type)==="code")break;if((R==null?void 0:R.type)==="blockquote"){const V=R,te=V.raw+`
`+d.join(`
`),H=this.blockquote(te);b[b.length-1]=H,g=g.substring(0,g.length-V.raw.length)+H.raw,y=y.substring(0,y.length-V.text.length)+H.text;break}else if((R==null?void 0:R.type)==="list"){const V=R,te=V.raw+`
`+d.join(`
`),H=this.list(te);b[b.length-1]=H,g=g.substring(0,g.length-R.raw.length)+H.raw,y=y.substring(0,y.length-V.raw.length)+H.raw,d=te.substring(b.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:g,tokens:b,text:y}}}list(l){let u=this.rules.block.list.exec(l);if(u){let d=u[1].trim();const g=d.length>1,y={type:"list",raw:"",ordered:g,start:g?+d.slice(0,-1):"",loose:!1,items:[]};d=g?`\\d{1,9}\\${d.slice(-1)}`:`\\${d}`,this.options.pedantic&&(d=g?d:"[*+-]");const b=this.rules.other.listItemRegex(d);let _=!1;for(;l;){let k=!1,E="",P="";if(!(u=b.exec(l))||this.rules.block.hr.test(l))break;E=u[0],l=l.substring(E.length);let I=u[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,D=>" ".repeat(3*D.length)),R=l.split(`
`,1)[0],V=!I.trim(),te=0;if(this.options.pedantic?(te=2,P=I.trimStart()):V?te=u[1].length+1:(te=u[2].search(this.rules.other.nonSpaceChar),te=te>4?1:te,P=I.slice(te),te+=u[1].length),V&&this.rules.other.blankLine.test(R)&&(E+=R+`
`,l=l.substring(R.length+1),k=!0),!k){const D=this.rules.other.nextBulletRegex(te),W=this.rules.other.hrRegex(te),F=this.rules.other.fencesBeginRegex(te),K=this.rules.other.headingBeginRegex(te),Y=this.rules.other.htmlBeginRegex(te);for(;l;){const he=l.split(`
`,1)[0];let le;if(R=he,this.options.pedantic?(R=R.replace(this.rules.other.listReplaceNesting,"  "),le=R):le=R.replace(this.rules.other.tabCharGlobal,"    "),F.test(R)||K.test(R)||Y.test(R)||D.test(R)||W.test(R))break;if(le.search(this.rules.other.nonSpaceChar)>=te||!R.trim())P+=`
`+le.slice(te);else{if(V||I.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||F.test(I)||K.test(I)||W.test(I))break;P+=`
`+R}!V&&!R.trim()&&(V=!0),E+=he+`
`,l=l.substring(he.length+1),I=le.slice(te)}}y.loose||(_?y.loose=!0:this.rules.other.doubleBlankLine.test(E)&&(_=!0));let H=null,ae;this.options.gfm&&(H=this.rules.other.listIsTask.exec(P),H&&(ae=H[0]!=="[ ] ",P=P.replace(this.rules.other.listReplaceTask,""))),y.items.push({type:"list_item",raw:E,task:!!H,checked:ae,loose:!1,text:P,tokens:[]}),y.raw+=E}const T=y.items.at(-1);if(T)T.raw=T.raw.trimEnd(),T.text=T.text.trimEnd();else return;y.raw=y.raw.trimEnd();for(let k=0;k<y.items.length;k++)if(this.lexer.state.top=!1,y.items[k].tokens=this.lexer.blockTokens(y.items[k].text,[]),!y.loose){const E=y.items[k].tokens.filter(I=>I.type==="space"),P=E.length>0&&E.some(I=>this.rules.other.anyLine.test(I.raw));y.loose=P}if(y.loose)for(let k=0;k<y.items.length;k++)y.items[k].loose=!0;return y}}html(l){const u=this.rules.block.html.exec(l);if(u)return{type:"html",block:!0,raw:u[0],pre:u[1]==="pre"||u[1]==="script"||u[1]==="style",text:u[0]}}def(l){const u=this.rules.block.def.exec(l);if(u){const d=u[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),g=u[2]?u[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",y=u[3]?u[3].substring(1,u[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):u[3];return{type:"def",tag:d,raw:u[0],href:g,title:y}}}table(l){var _;const u=this.rules.block.table.exec(l);if(!u||!this.rules.other.tableDelimiter.test(u[2]))return;const d=Zh(u[1]),g=u[2].replace(this.rules.other.tableAlignChars,"").split("|"),y=(_=u[3])!=null&&_.trim()?u[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],b={type:"table",raw:u[0],header:[],align:[],rows:[]};if(d.length===g.length){for(const T of g)this.rules.other.tableAlignRight.test(T)?b.align.push("right"):this.rules.other.tableAlignCenter.test(T)?b.align.push("center"):this.rules.other.tableAlignLeft.test(T)?b.align.push("left"):b.align.push(null);for(let T=0;T<d.length;T++)b.header.push({text:d[T],tokens:this.lexer.inline(d[T]),header:!0,align:b.align[T]});for(const T of y)b.rows.push(Zh(T,b.header.length).map((k,E)=>({text:k,tokens:this.lexer.inline(k),header:!1,align:b.align[E]})));return b}}lheading(l){const u=this.rules.block.lheading.exec(l);if(u)return{type:"heading",raw:u[0],depth:u[2].charAt(0)==="="?1:2,text:u[1],tokens:this.lexer.inline(u[1])}}paragraph(l){const u=this.rules.block.paragraph.exec(l);if(u){const d=u[1].charAt(u[1].length-1)===`
`?u[1].slice(0,-1):u[1];return{type:"paragraph",raw:u[0],text:d,tokens:this.lexer.inline(d)}}}text(l){const u=this.rules.block.text.exec(l);if(u)return{type:"text",raw:u[0],text:u[0],tokens:this.lexer.inline(u[0])}}escape(l){const u=this.rules.inline.escape.exec(l);if(u)return{type:"escape",raw:u[0],text:u[1]}}tag(l){const u=this.rules.inline.tag.exec(l);if(u)return!this.lexer.state.inLink&&this.rules.other.startATag.test(u[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(u[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(u[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(u[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:u[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:u[0]}}link(l){const u=this.rules.inline.link.exec(l);if(u){const d=u[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(d)){if(!this.rules.other.endAngleBracket.test(d))return;const b=Vu(d.slice(0,-1),"\\");if((d.length-b.length)%2===0)return}else{const b=Gv(u[2],"()");if(b===-2)return;if(b>-1){const T=(u[0].indexOf("!")===0?5:4)+u[1].length+b;u[2]=u[2].substring(0,b),u[0]=u[0].substring(0,T).trim(),u[3]=""}}let g=u[2],y="";if(this.options.pedantic){const b=this.rules.other.pedanticHrefTitle.exec(g);b&&(g=b[1],y=b[3])}else y=u[3]?u[3].slice(1,-1):"";return g=g.trim(),this.rules.other.startAngleBracket.test(g)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(d)?g=g.slice(1):g=g.slice(1,-1)),ef(u,{href:g&&g.replace(this.rules.inline.anyPunctuation,"$1"),title:y&&y.replace(this.rules.inline.anyPunctuation,"$1")},u[0],this.lexer,this.rules)}}reflink(l,u){let d;if((d=this.rules.inline.reflink.exec(l))||(d=this.rules.inline.nolink.exec(l))){const g=(d[2]||d[1]).replace(this.rules.other.multipleSpaceGlobal," "),y=u[g.toLowerCase()];if(!y){const b=d[0].charAt(0);return{type:"text",raw:b,text:b}}return ef(d,y,d[0],this.lexer,this.rules)}}emStrong(l,u,d=""){let g=this.rules.inline.emStrongLDelim.exec(l);if(!g||g[3]&&d.match(this.rules.other.unicodeAlphaNumeric))return;if(!(g[1]||g[2]||"")||!d||this.rules.inline.punctuation.exec(d)){const b=[...g[0]].length-1;let _,T,k=b,E=0;const P=g[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(P.lastIndex=0,u=u.slice(-1*l.length+b);(g=P.exec(u))!=null;){if(_=g[1]||g[2]||g[3]||g[4]||g[5]||g[6],!_)continue;if(T=[..._].length,g[3]||g[4]){k+=T;continue}else if((g[5]||g[6])&&b%3&&!((b+T)%3)){E+=T;continue}if(k-=T,k>0)continue;T=Math.min(T,T+k+E);const I=[...g[0]][0].length,R=l.slice(0,b+g.index+I+T);if(Math.min(b,T)%2){const te=R.slice(1,-1);return{type:"em",raw:R,text:te,tokens:this.lexer.inlineTokens(te)}}const V=R.slice(2,-2);return{type:"strong",raw:R,text:V,tokens:this.lexer.inlineTokens(V)}}}}codespan(l){const u=this.rules.inline.code.exec(l);if(u){let d=u[2].replace(this.rules.other.newLineCharGlobal," ");const g=this.rules.other.nonSpaceChar.test(d),y=this.rules.other.startingSpaceChar.test(d)&&this.rules.other.endingSpaceChar.test(d);return g&&y&&(d=d.substring(1,d.length-1)),{type:"codespan",raw:u[0],text:d}}}br(l){const u=this.rules.inline.br.exec(l);if(u)return{type:"br",raw:u[0]}}del(l){const u=this.rules.inline.del.exec(l);if(u)return{type:"del",raw:u[0],text:u[2],tokens:this.lexer.inlineTokens(u[2])}}autolink(l){const u=this.rules.inline.autolink.exec(l);if(u){let d,g;return u[2]==="@"?(d=u[1],g="mailto:"+d):(d=u[1],g=d),{type:"link",raw:u[0],text:d,href:g,tokens:[{type:"text",raw:d,text:d}]}}}url(l){var d;let u;if(u=this.rules.inline.url.exec(l)){let g,y;if(u[2]==="@")g=u[0],y="mailto:"+g;else{let b;do b=u[0],u[0]=((d=this.rules.inline._backpedal.exec(u[0]))==null?void 0:d[0])??"";while(b!==u[0]);g=u[0],u[1]==="www."?y="http://"+u[0]:y=u[0]}return{type:"link",raw:u[0],text:g,href:y,tokens:[{type:"text",raw:g,text:g}]}}}inlineText(l){const u=this.rules.inline.text.exec(l);if(u){const d=this.lexer.state.inRawBlock;return{type:"text",raw:u[0],text:u[0],escaped:d}}}},ho=class qp{constructor(u){on(this,"tokens");on(this,"options");on(this,"state");on(this,"tokenizer");on(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=u||Qa,this.options.tokenizer=this.options.tokenizer||new Td,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const d={other:Wr,block:hd.normal,inline:Yu.normal};this.options.pedantic?(d.block=hd.pedantic,d.inline=Yu.pedantic):this.options.gfm&&(d.block=hd.gfm,this.options.breaks?d.inline=Yu.breaks:d.inline=Yu.gfm),this.tokenizer.rules=d}static get rules(){return{block:hd,inline:Yu}}static lex(u,d){return new qp(d).lex(u)}static lexInline(u,d){return new qp(d).inlineTokens(u)}lex(u){u=u.replace(Wr.carriageReturn,`
`),this.blockTokens(u,this.tokens);for(let d=0;d<this.inlineQueue.length;d++){const g=this.inlineQueue[d];this.inlineTokens(g.src,g.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(u,d=[],g=!1){var y,b,_;for(this.options.pedantic&&(u=u.replace(Wr.tabCharGlobal,"    ").replace(Wr.spaceLine,""));u;){let T;if((b=(y=this.options.extensions)==null?void 0:y.block)!=null&&b.some(E=>(T=E.call({lexer:this},u,d))?(u=u.substring(T.raw.length),d.push(T),!0):!1))continue;if(T=this.tokenizer.space(u)){u=u.substring(T.raw.length);const E=d.at(-1);T.raw.length===1&&E!==void 0?E.raw+=`
`:d.push(T);continue}if(T=this.tokenizer.code(u)){u=u.substring(T.raw.length);const E=d.at(-1);(E==null?void 0:E.type)==="paragraph"||(E==null?void 0:E.type)==="text"?(E.raw+=`
`+T.raw,E.text+=`
`+T.text,this.inlineQueue.at(-1).src=E.text):d.push(T);continue}if(T=this.tokenizer.fences(u)){u=u.substring(T.raw.length),d.push(T);continue}if(T=this.tokenizer.heading(u)){u=u.substring(T.raw.length),d.push(T);continue}if(T=this.tokenizer.hr(u)){u=u.substring(T.raw.length),d.push(T);continue}if(T=this.tokenizer.blockquote(u)){u=u.substring(T.raw.length),d.push(T);continue}if(T=this.tokenizer.list(u)){u=u.substring(T.raw.length),d.push(T);continue}if(T=this.tokenizer.html(u)){u=u.substring(T.raw.length),d.push(T);continue}if(T=this.tokenizer.def(u)){u=u.substring(T.raw.length);const E=d.at(-1);(E==null?void 0:E.type)==="paragraph"||(E==null?void 0:E.type)==="text"?(E.raw+=`
`+T.raw,E.text+=`
`+T.raw,this.inlineQueue.at(-1).src=E.text):this.tokens.links[T.tag]||(this.tokens.links[T.tag]={href:T.href,title:T.title});continue}if(T=this.tokenizer.table(u)){u=u.substring(T.raw.length),d.push(T);continue}if(T=this.tokenizer.lheading(u)){u=u.substring(T.raw.length),d.push(T);continue}let k=u;if((_=this.options.extensions)!=null&&_.startBlock){let E=1/0;const P=u.slice(1);let I;this.options.extensions.startBlock.forEach(R=>{I=R.call({lexer:this},P),typeof I=="number"&&I>=0&&(E=Math.min(E,I))}),E<1/0&&E>=0&&(k=u.substring(0,E+1))}if(this.state.top&&(T=this.tokenizer.paragraph(k))){const E=d.at(-1);g&&(E==null?void 0:E.type)==="paragraph"?(E.raw+=`
`+T.raw,E.text+=`
`+T.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=E.text):d.push(T),g=k.length!==u.length,u=u.substring(T.raw.length);continue}if(T=this.tokenizer.text(u)){u=u.substring(T.raw.length);const E=d.at(-1);(E==null?void 0:E.type)==="text"?(E.raw+=`
`+T.raw,E.text+=`
`+T.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=E.text):d.push(T);continue}if(u){const E="Infinite loop on byte: "+u.charCodeAt(0);if(this.options.silent){console.error(E);break}else throw new Error(E)}}return this.state.top=!0,d}inline(u,d=[]){return this.inlineQueue.push({src:u,tokens:d}),d}inlineTokens(u,d=[]){var T,k,E;let g=u,y=null;if(this.tokens.links){const P=Object.keys(this.tokens.links);if(P.length>0)for(;(y=this.tokenizer.rules.inline.reflinkSearch.exec(g))!=null;)P.includes(y[0].slice(y[0].lastIndexOf("[")+1,-1))&&(g=g.slice(0,y.index)+"["+"a".repeat(y[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(y=this.tokenizer.rules.inline.anyPunctuation.exec(g))!=null;)g=g.slice(0,y.index)+"++"+g.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(y=this.tokenizer.rules.inline.blockSkip.exec(g))!=null;)g=g.slice(0,y.index)+"["+"a".repeat(y[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let b=!1,_="";for(;u;){b||(_=""),b=!1;let P;if((k=(T=this.options.extensions)==null?void 0:T.inline)!=null&&k.some(R=>(P=R.call({lexer:this},u,d))?(u=u.substring(P.raw.length),d.push(P),!0):!1))continue;if(P=this.tokenizer.escape(u)){u=u.substring(P.raw.length),d.push(P);continue}if(P=this.tokenizer.tag(u)){u=u.substring(P.raw.length),d.push(P);continue}if(P=this.tokenizer.link(u)){u=u.substring(P.raw.length),d.push(P);continue}if(P=this.tokenizer.reflink(u,this.tokens.links)){u=u.substring(P.raw.length);const R=d.at(-1);P.type==="text"&&(R==null?void 0:R.type)==="text"?(R.raw+=P.raw,R.text+=P.text):d.push(P);continue}if(P=this.tokenizer.emStrong(u,g,_)){u=u.substring(P.raw.length),d.push(P);continue}if(P=this.tokenizer.codespan(u)){u=u.substring(P.raw.length),d.push(P);continue}if(P=this.tokenizer.br(u)){u=u.substring(P.raw.length),d.push(P);continue}if(P=this.tokenizer.del(u)){u=u.substring(P.raw.length),d.push(P);continue}if(P=this.tokenizer.autolink(u)){u=u.substring(P.raw.length),d.push(P);continue}if(!this.state.inLink&&(P=this.tokenizer.url(u))){u=u.substring(P.raw.length),d.push(P);continue}let I=u;if((E=this.options.extensions)!=null&&E.startInline){let R=1/0;const V=u.slice(1);let te;this.options.extensions.startInline.forEach(H=>{te=H.call({lexer:this},V),typeof te=="number"&&te>=0&&(R=Math.min(R,te))}),R<1/0&&R>=0&&(I=u.substring(0,R+1))}if(P=this.tokenizer.inlineText(I)){u=u.substring(P.raw.length),P.raw.slice(-1)!=="_"&&(_=P.raw.slice(-1)),b=!0;const R=d.at(-1);(R==null?void 0:R.type)==="text"?(R.raw+=P.raw,R.text+=P.text):d.push(P);continue}if(u){const R="Infinite loop on byte: "+u.charCodeAt(0);if(this.options.silent){console.error(R);break}else throw new Error(R)}}return d}},jd=class{constructor(l){on(this,"options");on(this,"parser");this.options=l||Qa}space(l){return""}code({text:l,lang:u,escaped:d}){var b;const g=(b=(u||"").match(Wr.notSpaceStart))==null?void 0:b[0],y=l.replace(Wr.endingNewline,"")+`
`;return g?'<pre><code class="language-'+Ns(g)+'">'+(d?y:Ns(y,!0))+`</code></pre>
`:"<pre><code>"+(d?y:Ns(y,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:u}){return`<h${u}>${this.parser.parseInline(l)}</h${u}>
`}hr(l){return`<hr>
`}list(l){const u=l.ordered,d=l.start;let g="";for(let _=0;_<l.items.length;_++){const T=l.items[_];g+=this.listitem(T)}const y=u?"ol":"ul",b=u&&d!==1?' start="'+d+'"':"";return"<"+y+b+`>
`+g+"</"+y+`>
`}listitem(l){var d;let u="";if(l.task){const g=this.checkbox({checked:!!l.checked});l.loose?((d=l.tokens[0])==null?void 0:d.type)==="paragraph"?(l.tokens[0].text=g+" "+l.tokens[0].text,l.tokens[0].tokens&&l.tokens[0].tokens.length>0&&l.tokens[0].tokens[0].type==="text"&&(l.tokens[0].tokens[0].text=g+" "+Ns(l.tokens[0].tokens[0].text),l.tokens[0].tokens[0].escaped=!0)):l.tokens.unshift({type:"text",raw:g+" ",text:g+" ",escaped:!0}):u+=g+" "}return u+=this.parser.parse(l.tokens,!!l.loose),`<li>${u}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let u="",d="";for(let y=0;y<l.header.length;y++)d+=this.tablecell(l.header[y]);u+=this.tablerow({text:d});let g="";for(let y=0;y<l.rows.length;y++){const b=l.rows[y];d="";for(let _=0;_<b.length;_++)d+=this.tablecell(b[_]);g+=this.tablerow({text:d})}return g&&(g=`<tbody>${g}</tbody>`),`<table>
<thead>
`+u+`</thead>
`+g+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){const u=this.parser.parseInline(l.tokens),d=l.header?"th":"td";return(l.align?`<${d} align="${l.align}">`:`<${d}>`)+u+`</${d}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${Ns(l,!0)}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:u,tokens:d}){const g=this.parser.parseInline(d),y=Qh(l);if(y===null)return g;l=y;let b='<a href="'+l+'"';return u&&(b+=' title="'+Ns(u)+'"'),b+=">"+g+"</a>",b}image({href:l,title:u,text:d,tokens:g}){g&&(d=this.parser.parseInline(g,this.parser.textRenderer));const y=Qh(l);if(y===null)return Ns(d);l=y;let b=`<img src="${l}" alt="${d}"`;return u&&(b+=` title="${Ns(u)}"`),b+=">",b}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):"escaped"in l&&l.escaped?l.text:Ns(l.text)}},vh=class{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}},fo=class Kp{constructor(u){on(this,"options");on(this,"renderer");on(this,"textRenderer");this.options=u||Qa,this.options.renderer=this.options.renderer||new jd,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new vh}static parse(u,d){return new Kp(d).parse(u)}static parseInline(u,d){return new Kp(d).parseInline(u)}parse(u,d=!0){var y,b;let g="";for(let _=0;_<u.length;_++){const T=u[_];if((b=(y=this.options.extensions)==null?void 0:y.renderers)!=null&&b[T.type]){const E=T,P=this.options.extensions.renderers[E.type].call({parser:this},E);if(P!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(E.type)){g+=P||"";continue}}const k=T;switch(k.type){case"space":{g+=this.renderer.space(k);continue}case"hr":{g+=this.renderer.hr(k);continue}case"heading":{g+=this.renderer.heading(k);continue}case"code":{g+=this.renderer.code(k);continue}case"table":{g+=this.renderer.table(k);continue}case"blockquote":{g+=this.renderer.blockquote(k);continue}case"list":{g+=this.renderer.list(k);continue}case"html":{g+=this.renderer.html(k);continue}case"paragraph":{g+=this.renderer.paragraph(k);continue}case"text":{let E=k,P=this.renderer.text(E);for(;_+1<u.length&&u[_+1].type==="text";)E=u[++_],P+=`
`+this.renderer.text(E);d?g+=this.renderer.paragraph({type:"paragraph",raw:P,text:P,tokens:[{type:"text",raw:P,text:P,escaped:!0}]}):g+=P;continue}default:{const E='Token with "'+k.type+'" type was not found.';if(this.options.silent)return console.error(E),"";throw new Error(E)}}}return g}parseInline(u,d=this.renderer){var y,b;let g="";for(let _=0;_<u.length;_++){const T=u[_];if((b=(y=this.options.extensions)==null?void 0:y.renderers)!=null&&b[T.type]){const E=this.options.extensions.renderers[T.type].call({parser:this},T);if(E!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(T.type)){g+=E||"";continue}}const k=T;switch(k.type){case"escape":{g+=d.text(k);break}case"html":{g+=d.html(k);break}case"link":{g+=d.link(k);break}case"image":{g+=d.image(k);break}case"strong":{g+=d.strong(k);break}case"em":{g+=d.em(k);break}case"codespan":{g+=d.codespan(k);break}case"br":{g+=d.br(k);break}case"del":{g+=d.del(k);break}case"text":{g+=d.text(k);break}default:{const E='Token with "'+k.type+'" type was not found.';if(this.options.silent)return console.error(E),"";throw new Error(E)}}}return g}},zp,yd=(zp=class{constructor(l){on(this,"options");on(this,"block");this.options=l||Qa}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}provideLexer(){return this.block?ho.lex:ho.lexInline}provideParser(){return this.block?fo.parse:fo.parseInline}},on(zp,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),zp),Vv=class{constructor(...l){on(this,"defaults",ch());on(this,"options",this.setOptions);on(this,"parse",this.parseMarkdown(!0));on(this,"parseInline",this.parseMarkdown(!1));on(this,"Parser",fo);on(this,"Renderer",jd);on(this,"TextRenderer",vh);on(this,"Lexer",ho);on(this,"Tokenizer",Td);on(this,"Hooks",yd);this.use(...l)}walkTokens(l,u){var g,y;let d=[];for(const b of l)switch(d=d.concat(u.call(this,b)),b.type){case"table":{const _=b;for(const T of _.header)d=d.concat(this.walkTokens(T.tokens,u));for(const T of _.rows)for(const k of T)d=d.concat(this.walkTokens(k.tokens,u));break}case"list":{const _=b;d=d.concat(this.walkTokens(_.items,u));break}default:{const _=b;(y=(g=this.defaults.extensions)==null?void 0:g.childTokens)!=null&&y[_.type]?this.defaults.extensions.childTokens[_.type].forEach(T=>{const k=_[T].flat(1/0);d=d.concat(this.walkTokens(k,u))}):_.tokens&&(d=d.concat(this.walkTokens(_.tokens,u)))}}return d}use(...l){const u=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(d=>{const g={...d};if(g.async=this.defaults.async||g.async||!1,d.extensions&&(d.extensions.forEach(y=>{if(!y.name)throw new Error("extension name required");if("renderer"in y){const b=u.renderers[y.name];b?u.renderers[y.name]=function(..._){let T=y.renderer.apply(this,_);return T===!1&&(T=b.apply(this,_)),T}:u.renderers[y.name]=y.renderer}if("tokenizer"in y){if(!y.level||y.level!=="block"&&y.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const b=u[y.level];b?b.unshift(y.tokenizer):u[y.level]=[y.tokenizer],y.start&&(y.level==="block"?u.startBlock?u.startBlock.push(y.start):u.startBlock=[y.start]:y.level==="inline"&&(u.startInline?u.startInline.push(y.start):u.startInline=[y.start]))}"childTokens"in y&&y.childTokens&&(u.childTokens[y.name]=y.childTokens)}),g.extensions=u),d.renderer){const y=this.defaults.renderer||new jd(this.defaults);for(const b in d.renderer){if(!(b in y))throw new Error(`renderer '${b}' does not exist`);if(["options","parser"].includes(b))continue;const _=b,T=d.renderer[_],k=y[_];y[_]=(...E)=>{let P=T.apply(y,E);return P===!1&&(P=k.apply(y,E)),P||""}}g.renderer=y}if(d.tokenizer){const y=this.defaults.tokenizer||new Td(this.defaults);for(const b in d.tokenizer){if(!(b in y))throw new Error(`tokenizer '${b}' does not exist`);if(["options","rules","lexer"].includes(b))continue;const _=b,T=d.tokenizer[_],k=y[_];y[_]=(...E)=>{let P=T.apply(y,E);return P===!1&&(P=k.apply(y,E)),P}}g.tokenizer=y}if(d.hooks){const y=this.defaults.hooks||new yd;for(const b in d.hooks){if(!(b in y))throw new Error(`hook '${b}' does not exist`);if(["options","block"].includes(b))continue;const _=b,T=d.hooks[_],k=y[_];yd.passThroughHooks.has(b)?y[_]=E=>{if(this.defaults.async)return Promise.resolve(T.call(y,E)).then(I=>k.call(y,I));const P=T.call(y,E);return k.call(y,P)}:y[_]=(...E)=>{let P=T.apply(y,E);return P===!1&&(P=k.apply(y,E)),P}}g.hooks=y}if(d.walkTokens){const y=this.defaults.walkTokens,b=d.walkTokens;g.walkTokens=function(_){let T=[];return T.push(b.call(this,_)),y&&(T=T.concat(y.call(this,_))),T}}this.defaults={...this.defaults,...g}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,u){return ho.lex(l,u??this.defaults)}parser(l,u){return fo.parse(l,u??this.defaults)}parseMarkdown(l){return(d,g)=>{const y={...g},b={...this.defaults,...y},_=this.onError(!!b.silent,!!b.async);if(this.defaults.async===!0&&y.async===!1)return _(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof d>"u"||d===null)return _(new Error("marked(): input parameter is undefined or null"));if(typeof d!="string")return _(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(d)+", string expected"));b.hooks&&(b.hooks.options=b,b.hooks.block=l);const T=b.hooks?b.hooks.provideLexer():l?ho.lex:ho.lexInline,k=b.hooks?b.hooks.provideParser():l?fo.parse:fo.parseInline;if(b.async)return Promise.resolve(b.hooks?b.hooks.preprocess(d):d).then(E=>T(E,b)).then(E=>b.hooks?b.hooks.processAllTokens(E):E).then(E=>b.walkTokens?Promise.all(this.walkTokens(E,b.walkTokens)).then(()=>E):E).then(E=>k(E,b)).then(E=>b.hooks?b.hooks.postprocess(E):E).catch(_);try{b.hooks&&(d=b.hooks.preprocess(d));let E=T(d,b);b.hooks&&(E=b.hooks.processAllTokens(E)),b.walkTokens&&this.walkTokens(E,b.walkTokens);let P=k(E,b);return b.hooks&&(P=b.hooks.postprocess(P)),P}catch(E){return _(E)}}}onError(l,u){return d=>{if(d.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const g="<p>An error occurred:</p><pre>"+Ns(d.message+"",!0)+"</pre>";return u?Promise.resolve(g):g}if(u)return Promise.reject(d);throw d}}},Xa=new Vv;function Vt(l,u){return Xa.parse(l,u)}Vt.options=Vt.setOptions=function(l){return Xa.setOptions(l),Vt.defaults=Xa.defaults,sm(Vt.defaults),Vt};Vt.getDefaults=ch;Vt.defaults=Qa;Vt.use=function(...l){return Xa.use(...l),Vt.defaults=Xa.defaults,sm(Vt.defaults),Vt};Vt.walkTokens=function(l,u){return Xa.walkTokens(l,u)};Vt.parseInline=Xa.parseInline;Vt.Parser=fo;Vt.parser=fo.parse;Vt.Renderer=jd;Vt.TextRenderer=vh;Vt.Lexer=ho;Vt.lexer=ho.lex;Vt.Tokenizer=Td;Vt.Hooks=yd;Vt.parse=Vt;Vt.options;Vt.setOptions;Vt.use;Vt.walkTokens;Vt.parseInline;fo.parse;ho.lex;/*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE */function tf(l,u){(u==null||u>l.length)&&(u=l.length);for(var d=0,g=Array(u);d<u;d++)g[d]=l[d];return g}function Jv(l){if(Array.isArray(l))return l}function Xv(l,u){var d=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(d!=null){var g,y,b,_,T=[],k=!0,E=!1;try{if(b=(d=d.call(l)).next,u!==0)for(;!(k=(g=b.call(d)).done)&&(T.push(g.value),T.length!==u);k=!0);}catch(P){E=!0,y=P}finally{try{if(!k&&d.return!=null&&(_=d.return(),Object(_)!==_))return}finally{if(E)throw y}}return T}}function Qv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function Zv(l,u){return Jv(l)||Xv(l,u)||ex(l,u)||Qv()}function ex(l,u){if(l){if(typeof l=="string")return tf(l,u);var d={}.toString.call(l).slice(8,-1);return d==="Object"&&l.constructor&&(d=l.constructor.name),d==="Map"||d==="Set"?Array.from(l):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?tf(l,u):void 0}}const gm=Object.entries,nf=Object.setPrototypeOf,tx=Object.isFrozen,ym=Object.getPrototypeOf,vm=Object.getOwnPropertyDescriptor;let or=Object.freeze,_r=Object.seal,ql=Object.create,xm=typeof Reflect<"u"&&Reflect,$p=xm.apply,Gp=xm.construct;or||(or=function(u){return u});_r||(_r=function(u){return u});$p||($p=function(u,d){for(var g=arguments.length,y=new Array(g>2?g-2:0),b=2;b<g;b++)y[b-2]=arguments[b];return u.apply(d,y)});Gp||(Gp=function(u){for(var d=arguments.length,g=new Array(d>1?d-1:0),y=1;y<d;y++)g[y-1]=arguments[y];return new u(...g)});const lo=bn(Array.prototype.forEach),nx=bn(Array.prototype.lastIndexOf),rf=bn(Array.prototype.pop),Ju=bn(Array.prototype.push),rx=bn(Array.prototype.slice),ix=bn(Array.prototype.splice),Gl=Array.isArray,Np=bm(Set),Ep=bn(Set.prototype.add),Xu=bn(Set.prototype.has),Ya=bn(String.prototype.toLowerCase),Lp=bn(String.prototype.toString),sf=bn(String.prototype.match),Qu=bn(String.prototype.replace),of=bn(String.prototype.indexOf),sx=bn(String.prototype.trim),ox=bn(Number.prototype.toString),ax=bn(Boolean.prototype.toString),af=typeof BigInt>"u"?null:bn(BigInt.prototype.toString),lf=typeof Symbol>"u"?null:bn(Symbol.prototype.toString),ti=bn(Object.prototype.hasOwnProperty),Zu=bn(Object.prototype.toString),Sr=bn(RegExp.prototype.test),uo=bm(TypeError);function bn(l){return function(u){u instanceof RegExp&&(u.lastIndex=0);for(var d=arguments.length,g=new Array(d>1?d-1:0),y=1;y<d;y++)g[y-1]=arguments[y];return $p(l,u,g)}}function bm(l){return function(){for(var u=arguments.length,d=new Array(u),g=0;g<u;g++)d[g]=arguments[g];return Gp(l,d)}}function Wt(l,u){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ya;if(nf&&nf(l,null),!Gl(u))return l;let g=u.length;for(;g--;){let y=u[g];if(typeof y=="string"){const b=d(y);b!==y&&(tx(u)||(u[g]=b),y=b)}l[y]=!0}return l}function lx(l){for(let u=0;u<l.length;u++)ti(l,u)||(l[u]=null);return l}function gi(l){const u=ql(null);for(const g of gm(l)){var d=Zv(g,2);const y=d[0],b=d[1];ti(l,y)&&(Gl(b)?u[y]=lx(b):b&&typeof b=="object"&&b.constructor===Object?u[y]=gi(b):u[y]=b)}return u}function ux(l){switch(typeof l){case"string":return l;case"number":return ox(l);case"boolean":return ax(l);case"bigint":return af?af(l):"0";case"symbol":return lf?lf(l):"Symbol()";case"undefined":return Zu(l);case"function":case"object":{if(l===null)return Zu(l);const u=l,d=Mi(u,"toString");if(typeof d=="function"){const g=d(u);return typeof g=="string"?g:Zu(g)}return Zu(l)}default:return Zu(l)}}function Mi(l,u){for(;l!==null;){const g=vm(l,u);if(g){if(g.get)return bn(g.get);if(typeof g.value=="function")return bn(g.value)}l=ym(l)}function d(){return null}return d}function cx(l,u){for(;l!==null;){const d=vm(l,u);if(d)return d.get?bn(d.get):null;l=ym(l)}return null}function dx(l){try{return Sr(l,""),!0}catch{return!1}}const uf=or(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Pp=or(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ap=or(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),px=or(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Rp=or(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),hx=or(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),cf=or(["#text"]),df=or(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Ip=or(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),pf=or(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),fd=or(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),fx=_r(/{{[\w\W]*|^[\w\W]*}}/g),mx=_r(/<%[\w\W]*|^[\w\W]*%>/g),gx=_r(/\${[\w\W]*/g),yx=_r(/^data-[\-\w.\u00B7-\uFFFF]+$/),vx=_r(/^aria-[\-\w]+$/),hf=_r(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),xx=_r(/^(?:\w+script|data):/i),bx=_r(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),wx=_r(/^html$/i),kx=_r(/^[a-z][.\w]*(-[.\w]+)+$/i),Op=_r(/<[/\w!]/g),ff=_r(/<[/\w]/g),Sx=_r(/<\/no(script|embed|frames)/i),mf=_r(/\/>/i),Vn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},_x=or(Wt({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),Cx=function(){return typeof window>"u"?null:window},Tx=function(u,d){if(typeof u!="object"||typeof u.createPolicy!="function")return null;let g=null;const y="data-tt-policy-suffix";d&&d.hasAttribute(y)&&(g=d.getAttribute(y));const b="dompurify"+(g?"#"+g:"");try{return u.createPolicy(b,{createHTML(_){return _},createScriptURL(_){return _}})}catch{return console.warn("TrustedTypes policy "+b+" could not be created."),null}},gf=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},ta=function(u,d,g,y){return ti(u,d)&&Gl(u[d])?Wt(y.base?gi(y.base):{},u[d],y.transform):g},Mp=function(u,d,g){const y=ti(u,d)?u[d]:void 0;return y&&typeof y=="object"?gi(y):g()};function wm(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Cx();const u=Te=>wm(Te);if(u.version="3.4.17",u.removed=[],!l||!l.document||l.document.nodeType!==Vn.document||!l.Element)return u.isSupported=!1,u;let d=l.document;const g=d,y=g.currentScript;l.DocumentFragment;const b=l.HTMLTemplateElement,_=l.Node,T=l.Element,k=l.NodeFilter;l.NamedNodeMap===void 0&&(l.NamedNodeMap||l.MozNamedAttrMap),l.HTMLFormElement;const E=l.DOMParser,P=l.trustedTypes,I=T.prototype,R=Mi(I,"cloneNode"),V=Mi(I,"remove"),te=Mi(I,"removeAttributeNode"),H=Mi(I,"nextSibling"),ae=Mi(I,"childNodes"),D=Mi(I,"parentNode"),W=Mi(I,"shadowRoot"),F=Mi(I,"attributes"),K=_&&_.prototype?Mi(_.prototype,"nodeType"):null,Y=_&&_.prototype?Mi(_.prototype,"nodeName"):null,he=_&&_.prototype?Mi(_.prototype,"ownerDocument"):null,le=function(O){return K?K(O):O.nodeType},we=function(O){return Y?Y(O):O.nodeName},He=cx(I,"namespaceURI"),je=function(O){return He?He(O):O.namespaceURI};if(typeof b=="function"){const Te=d.createElement("template");Te.content&&Te.content.ownerDocument&&(d=Te.content.ownerDocument)}let ie,Ce="",se,ye=!1,N=0;const J=function(){if(N>0)throw uo('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},q=function(O){J(),N++;try{return ie.createHTML(O)}finally{N--}},j=function(O){J(),N++;try{return ie.createScriptURL(O)}finally{N--}},A=function(){return ye||(se=Tx(P,y),ye=!0),se},G=d,M=G.implementation,Q=G.createNodeIterator,Se=G.createDocumentFragment,De=G.getElementsByTagName,qe=g.importNode;let ke=gf();u.isSupported=typeof gm=="function"&&typeof D=="function"&&M&&M.createHTMLDocument!==void 0;const Ie=fx,Ue=mx,Ke=gx,tt=yx,$e=vx,Ht=xx,Gt=bx,St=kx;let vt=hf,We=null;const rt=Wt({},[...uf,...Pp,...Ap,...Rp,...cf]);let et=null;const Kt=Wt({},[...df,...Ip,...pf,...fd]);let Ge=Object.seal(ql(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ht=null,oe=null;const _e=Object.seal(ql(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let ge=!0,wt=!0,Je=!1,at=!0,Ve=!1,yt=!0,pt=!1,mn=!1,Jn=null,Cr=null,Hr=!1,ar=!1,vi=!1,xt=!1,Di=!0,it=!1;const Tr="user-content-";let Jt=!0,It=!1,Ot=null,Nn={},un=null;const lr=Wt({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let wn=null;const ni=Wt({},["audio","video","img","source","image","track"]);let In=null;const ur=Wt({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Br="http://www.w3.org/1998/Math/MathML",En="http://www.w3.org/2000/svg",jr="http://www.w3.org/1999/xhtml";let Xn=jr,ri=!1,Ur=null;const qr=Wt({},[Br,En,jr],Lp),cr=or(["mi","mo","mn","ms","mtext"]);let Kr=Wt({},cr);const Ps=or(["annotation-xml"]);let kn=Wt({},Ps);const yo=Wt({},["title","style","font","a","script"]);let Rr=null;const Ir=["application/xhtml+xml","text/html"],Nr="text/html";let Bt=null,Er=null;const zi=d.createElement("form"),ii=function(O){return O instanceof RegExp||O instanceof Function},xi=function(){let O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Er&&Er===O)return;(!O||typeof O!="object")&&(O={}),O=gi(O),Rr=Ir.indexOf(O.PARSER_MEDIA_TYPE)===-1?Nr:O.PARSER_MEDIA_TYPE,Bt=Rr==="application/xhtml+xml"?Lp:Ya,We=ta(O,"ALLOWED_TAGS",rt,{transform:Bt}),et=ta(O,"ALLOWED_ATTR",Kt,{transform:Bt}),Ur=ta(O,"ALLOWED_NAMESPACES",qr,{transform:Lp}),In=ta(O,"ADD_URI_SAFE_ATTR",ur,{transform:Bt,base:ur}),wn=ta(O,"ADD_DATA_URI_TAGS",ni,{transform:Bt,base:ni}),un=ta(O,"FORBID_CONTENTS",lr,{transform:Bt}),ht=ta(O,"FORBID_TAGS",gi({}),{transform:Bt}),oe=ta(O,"FORBID_ATTR",gi({}),{transform:Bt}),Nn=ti(O,"USE_PROFILES")?O.USE_PROFILES&&typeof O.USE_PROFILES=="object"?gi(O.USE_PROFILES):O.USE_PROFILES:!1,ge=O.ALLOW_ARIA_ATTR!==!1,wt=O.ALLOW_DATA_ATTR!==!1,Je=O.ALLOW_UNKNOWN_PROTOCOLS||!1,at=O.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ve=O.SAFE_FOR_TEMPLATES||!1,yt=O.SAFE_FOR_XML!==!1,pt=O.WHOLE_DOCUMENT||!1,ar=O.RETURN_DOM||!1,vi=O.RETURN_DOM_FRAGMENT||!1,xt=O.RETURN_TRUSTED_TYPE||!1,Hr=O.FORCE_BODY||!1,Di=O.SANITIZE_DOM!==!1,it=O.SANITIZE_NAMED_PROPS||!1,Jt=O.KEEP_CONTENT!==!1,It=O.IN_PLACE||!1,vt=dx(O.ALLOWED_URI_REGEXP)?O.ALLOWED_URI_REGEXP:hf,Xn=typeof O.NAMESPACE=="string"?O.NAMESPACE:jr,Kr=Mp(O,"MATHML_TEXT_INTEGRATION_POINTS",()=>Wt({},cr)),kn=Mp(O,"HTML_INTEGRATION_POINTS",()=>Wt({},Ps));const ee=Mp(O,"CUSTOM_ELEMENT_HANDLING",()=>ql(null));if(Ge=ql(null),ti(ee,"tagNameCheck")&&ii(ee.tagNameCheck)&&(Ge.tagNameCheck=ee.tagNameCheck),ti(ee,"attributeNameCheck")&&ii(ee.attributeNameCheck)&&(Ge.attributeNameCheck=ee.attributeNameCheck),ti(ee,"allowCustomizedBuiltInElements")&&typeof ee.allowCustomizedBuiltInElements=="boolean"&&(Ge.allowCustomizedBuiltInElements=ee.allowCustomizedBuiltInElements),_r(Ge),Ve&&(wt=!1),vi&&(ar=!0),Nn&&(We=Wt({},cf),et=ql(null),Nn.html===!0&&(Wt(We,uf),Wt(et,df)),Nn.svg===!0&&(Wt(We,Pp),Wt(et,Ip),Wt(et,fd)),Nn.svgFilters===!0&&(Wt(We,Ap),Wt(et,Ip),Wt(et,fd)),Nn.mathMl===!0&&(Wt(We,Rp),Wt(et,pf),Wt(et,fd))),_e.tagCheck=null,_e.attributeCheck=null,ti(O,"ADD_TAGS")&&(typeof O.ADD_TAGS=="function"?_e.tagCheck=O.ADD_TAGS:Gl(O.ADD_TAGS)&&(We===rt&&(We=gi(We)),Wt(We,O.ADD_TAGS,Bt))),ti(O,"ADD_ATTR")&&(typeof O.ADD_ATTR=="function"?_e.attributeCheck=O.ADD_ATTR:Gl(O.ADD_ATTR)&&(et===Kt&&(et=gi(et)),Wt(et,O.ADD_ATTR,Bt))),ti(O,"ADD_FORBID_CONTENTS")&&Gl(O.ADD_FORBID_CONTENTS)&&(un===lr&&(un=gi(un)),Wt(un,O.ADD_FORBID_CONTENTS,Bt)),Jt&&(We["#text"]=!0),pt&&Wt(We,["html","head","body"]),We.table&&(Wt(We,["tbody"]),delete ht.tbody),O.TRUSTED_TYPES_POLICY){if(typeof O.TRUSTED_TYPES_POLICY.createHTML!="function")throw uo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof O.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw uo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const xe=ie;ie=O.TRUSTED_TYPES_POLICY;try{Ce=q("")}catch(be){throw ie=xe,be}}else O.TRUSTED_TYPES_POLICY===null?(ie=void 0,Ce=""):(ie===void 0&&(ie=A()),ie&&typeof Ce=="string"&&(Ce=q("")));or&&or(O),Er=O},At=Wt({},[...Pp,...Ap,...px]),os=Wt({},[...Rp,...hx]),bi=function(O,ee,xe){return ee.namespaceURI===jr?O==="svg":ee.namespaceURI===Br?O==="svg"&&(xe==="annotation-xml"||Kr[xe]):!!At[O]},Xt=function(O,ee,xe){return ee.namespaceURI===jr?O==="math":ee.namespaceURI===En?O==="math"&&kn[xe]:!!os[O]},Qe=function(O,ee,xe){return ee.namespaceURI===En&&!kn[xe]||ee.namespaceURI===Br&&!Kr[xe]?!1:!os[O]&&(yo[O]||!At[O])},si=function(O){const ee=je(O),xe=Ya(we(O)),be=D(O);let nt,ct;return be&&le(be)===Vn.element?(nt={namespaceURI:je(be)},ct=Ya(we(be))):(nt={namespaceURI:Xn},ct="template"),Ur[ee]?ee===En?bi(xe,nt,ct):ee===Br?Xt(xe,nt,ct):ee===jr?Qe(xe,nt,ct):!!(Rr==="application/xhtml+xml"&&Ur[ee]):!1},dr=function(O){Ju(u.removed,{element:O});try{D(O).removeChild(O)}catch{if(V(O),!D(O))throw uo("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},On=function(O,ee,xe){try{te(O,ee)}catch{try{O.removeAttribute(xe)}catch{}}},C=function(O){de(O);const ee=ae(O);ee&&lo(rx(ee),be=>{try{V(be)}catch{}});const xe=le(O)===Vn.element?F(O):null;if(xe)for(let be=xe.length-1;be>=0;--be){const nt=xe[be],ct=nt&&nt.name;typeof ct=="string"&&On(O,nt,ct)}},B=function(O,ee,xe){if(!xe)try{xe=ee.getAttributeNode(O)}catch{xe=null}Ju(u.removed,{attribute:xe||null,from:ee});try{xe?te(ee,xe):ee.removeAttribute(O)}catch{try{ee.removeAttribute(O)}catch{}}if(O==="is")if(ar||vi)try{dr(ee)}catch{}else try{ee.setAttribute(O,"")}catch{}},fe=function(O){const ee=F(O);if(ee)for(let xe=ee.length-1;xe>=0;--xe){const be=ee[xe],nt=be&&be.name;typeof nt!="string"||et[Bt(nt)]||On(O,be,nt)}},Ee=function(O,ee){let xe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const be=[O];for(;be.length>0;){const nt=be.pop();if(ee(nt)===!1)continue;if(xe&&le(nt)===Vn.element){const _t=W(nt);$r(_t)&&be.push(_t)}const ct=ae(nt);if(ct)for(let _t=ct.length-1;_t>=0;--_t)be.push(ct[_t])}},de=function(O){Ee(O,ee=>{le(ee)===Vn.element&&fe(ee)})},Be=function(O){const ee=[];return Ee(O,xe=>{ee.push(xe)},!0),ee},Tt=function(O,ee){const xe=Np();lo(Be(O),be=>{le(be)===Vn.element&&Ep(xe,be)}),lo(ee,be=>{le(be)===Vn.element&&!Xu(xe,be)&&fe(be)})},en=function(O,ee){let xe=!1;return lo(u.removed,be=>{be.element&&(xe=xe||be.element===O,de(be.element))}),Tt(O,ee),xe},Sn=8,oi=function(O,ee){const xe=Ot;let be=null;const nt=()=>(be||(be=Np(),lo(ee,ct=>{Ep(be,ct)})),be);for(let ct=0;;ct++){const _t=Be(O),gn=[O];let fr=!1;if(lo(_t,cn=>{le(cn)===Vn.documentFragment?Ju(gn,cn):!fr&&!Xu(xe,cn)&&(fr=Xu(nt(),cn))}),!fr)return;if(ct>=Sn)throw uo("the tree kept changing during in-place sanitization; refusing to return it");lo(gn,(cn,$n)=>{Za(cn,$n>0,O,nt())})}},Za=function(O,ee,xe,be){const nt=Kn(O);let ct;for(;ct=nt.nextNode();)!Xu(be,ct)||Xu(Ot,ct)||(ee&&pr(ke.uponSanitizeShadowNode,ct,null),Or(ct,xe),Hi(ct,xe),$r(ct.content)&&Ms(ct.content))},gt=function(O){Ot&&Ep(Ot,O)},vo=function(O,ee){return yt?O==="patchsrc"?!0:O==="for"&&ee!=="label"&&ee!=="output":!1},sa=function(O){yt&&Ee(O,ee=>{const xe=le(ee);if(xe===Vn.processingInstruction||xe===Vn.comment&&Sr(ff,ee.data)){try{V(ee)}catch{}return!1}if(xe===Vn.element){const be=ee,nt=Bt(we(ee));try{be.hasAttribute&&be.hasAttribute("patchsrc")&&be.removeAttribute("patchsrc"),be.hasAttribute&&be.hasAttribute("for")&&vo("for",nt)&&be.removeAttribute("for")}catch{}}return!0})},Fi=function(O){let ee=null,xe=null;if(Hr)O="<remove></remove>"+O;else{const ct=sf(O,/^[\r\n\t ]+/);xe=ct&&ct[0]}Rr==="application/xhtml+xml"&&Xn===jr&&(O='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+O+"</body></html>");const be=ie?q(O):O;if(Xn===jr)try{ee=new E().parseFromString(be,Rr)}catch{}if(!ee||!ee.documentElement){ee=M.createDocument(Xn,"template",null);try{ee.documentElement.innerHTML=ri?Ce:be}catch{}}const nt=ee.body||ee.documentElement;return O&&xe&&nt.insertBefore(d.createTextNode(xe),nt.childNodes[0]||null),Xn===jr?De.call(ee,pt?"html":"body")[0]:pt?ee.documentElement:nt},Kn=function(O){const ee=he?he(O):O.ownerDocument;return Q.call(ee||O,O,k.SHOW_ELEMENT|k.SHOW_COMMENT|k.SHOW_TEXT|k.SHOW_PROCESSING_INSTRUCTION|k.SHOW_CDATA_SECTION,null)},As=function(O){return O=Qu(O,Ie," "),O=Qu(O,Ue," "),O=Qu(O,Ke," "),O},as=function(O){var ee;Et(O);const xe=(ee=O.querySelectorAll)===null||ee===void 0?void 0:ee.call(O,"template");xe&&lo(xe,be=>{$r(be.content)&&as(be.content)})},Et=function(O){O.normalize();const ee=he?he(O):O.ownerDocument,xe=Q.call(ee||O,O,k.SHOW_TEXT|k.SHOW_COMMENT|k.SHOW_CDATA_SECTION|k.SHOW_PROCESSING_INSTRUCTION,null);let be=xe.nextNode();for(;be;)be.data=As(be.data),be=xe.nextNode()},Wi=function(O){const ee=Y?Y(O):null;return typeof ee!="string"||Bt(ee)!=="form"?!1:typeof O.nodeName!="string"||typeof O.textContent!="string"||typeof O.removeChild!="function"||O.attributes!==F(O)||typeof O.removeAttribute!="function"||typeof O.removeAttributeNode!="function"||typeof O.getAttributeNode!="function"||typeof O.setAttribute!="function"||typeof O.namespaceURI!="string"||typeof O.insertBefore!="function"||typeof O.hasChildNodes!="function"||O.nodeType!==K(O)||O.childNodes!==ae(O)},$r=function(O){if(!K||typeof O!="object"||O===null)return!1;try{return K(O)===Vn.documentFragment}catch{return!1}},ai=function(O){if(!K||typeof O!="object"||O===null)return!1;try{return typeof K(O)=="number"}catch{return!1}};function pr(Te,O,ee){Te.length!==0&&lo(Te,xe=>{xe.call(u,O,ee,Er)})}const oa=function(O,ee){return!!(yt&&O.hasChildNodes()&&!ai(O.firstElementChild)&&Sr(Op,O.textContent)&&Sr(Op,O.innerHTML)||yt&&_x[ee]&&le(O)===Vn.element&&je(O)===jr&&(ai(O.firstElementChild)||typeof O.textContent=="string"&&Sr(Op,O.textContent))||O.nodeType===Vn.processingInstruction||yt&&O.nodeType===Vn.comment&&Sr(ff,O.data))},ls=function(O,ee){if(O instanceof RegExp)return Sr(O,ee);if(O instanceof Function){for(var xe=arguments.length,be=new Array(xe>2?xe-2:0),nt=2;nt<xe;nt++)be[nt-2]=arguments[nt];return!!O(ee,...be)}return!1},xo=function(O,ee,xe){if(!ht[ee]&&us(ee)&&ls(Ge.tagNameCheck,ee))return!1;if(Jt&&!un[ee]&&!un[Ya(ee)]){const be=D(O),nt=ae(O);if(nt&&be){const ct=nt.length;for(let _t=ct-1;_t>=0;--_t){const gn=O===xe?R(nt[_t],!0):nt[_t];be.insertBefore(gn,H(O))}}}return dr(O),!0},Rs=function(O,ee,xe,be){return O.length===0?ee:ee===xe||ee===be?gi(ee):ee},hr=function(O,ee){return O===ee||D(O)!==null?!1:(It&&de(O),!0)},Or=function(O,ee){if(gt(O),pr(ke.beforeSanitizeElements,O,null),hr(O,ee))return!0;if(Wi(O))return dr(O),!0;const xe=Bt(we(O));if(We=Rs(ke.uponSanitizeElement,We,rt,Jn),pr(ke.uponSanitizeElement,O,{tagName:xe,allowedTags:We}),hr(O,ee))return!0;if(oa(O,xe))return dr(O),!0;if(ht[xe]||!(_e.tagCheck instanceof Function&&_e.tagCheck(xe))&&!We[xe]){const be=xo(O,xe,ee);return be===!1&&(pr(ke.afterSanitizeElements,O,null),hr(O,ee))?!0:be}if(le(O)===Vn.element&&!si(O)||(xe==="noscript"||xe==="noembed"||xe==="noframes")&&Sr(Sx,O.innerHTML))return dr(O),!0;if(Ve&&O.nodeType===Vn.text){const be=As(O.textContent);O.textContent!==be&&(Ju(u.removed,{element:O.cloneNode()}),O.textContent=be)}return pr(ke.afterSanitizeElements,O,null),hr(O,ee)},Mn=function(O,ee,xe){if(oe[ee]||vo(ee,O)||Di&&(ee==="id"||ee==="name")&&(xe in d||xe in zi))return!1;const be=et[ee]||_e.attributeCheck instanceof Function&&_e.attributeCheck(ee,O);return wt&&Sr(tt,ee)||ge&&Sr($e,ee)?!0:be?In[ee]||Sr(vt,Qu(xe,Gt,""))||(ee==="src"||ee==="xlink:href"||ee==="href")&&O!=="script"&&of(xe,"data:")===0&&wn[O]||Je&&!Sr(Ht,Qu(xe,Gt,""))?!0:!xe:us(O)&&ls(Ge.tagNameCheck,O)&&ls(Ge.attributeNameCheck,ee,O)||ee==="is"&&Ge.allowCustomizedBuiltInElements&&ls(Ge.tagNameCheck,xe)},Is=Wt({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),us=function(O){return!Is[Ya(O)]&&Sr(St,O)},Mr=function(O,ee,xe,be){if(ie&&typeof P=="object"&&typeof P.getAttributeType=="function"&&!xe)switch(P.getAttributeType(O,ee)){case"TrustedHTML":return q(be);case"TrustedScriptURL":return j(be)}return be},Os=function(O,ee,xe,be){try{return xe?O.setAttributeNS(xe,ee,be):O.setAttribute(ee,be),Wi(O)?(dr(O),!1):!0}catch{return B(ee,O),!1}},aa=function(O,ee){return yt&&Sr(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,ee)?!0:Ya(O)==="attributename"&&sf(ee,"href")!==null},Hi=function(O,ee){if(pr(ke.beforeSanitizeAttributes,O,null),hr(O,ee))return;const xe=O.attributes;if(!xe||Wi(O))return;et=Rs(ke.uponSanitizeAttribute,et,Kt,Cr);const be={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:et,forceKeepAttr:void 0};let nt=xe.length;const ct=Bt(O.nodeName);for(;nt--;){const _t=xe[nt],gn=_t.name,fr=_t.namespaceURI,cn=_t.value,$n=Bt(gn),wi=cn;let Rt=gn==="value"?wi:sx(wi),wo=!1;if(be.attrName=$n,be.attrValue=Rt,be.keepAttr=!0,be.forceKeepAttr=void 0,pr(ke.uponSanitizeAttribute,O,be),Rt=be.attrValue,it&&($n==="id"||$n==="name")&&of(Rt,Tr)!==0&&(B(gn,O,_t),Rt=Tr+Rt,wo=!0),aa(gn,Rt)){B(gn,O,_t);continue}if(!be.forceKeepAttr){if(!be.keepAttr){B(gn,O,_t);continue}if(!at&&Sr(mf,Rt)){B(gn,O,_t);continue}if(Ve&&(Rt=As(Rt)),!Mn(ct,$n,Rt)){B(gn,O,_t);continue}Rt=Mr(ct,$n,fr,Rt),Rt!==wi&&Os(O,gn,fr,Rt)&&wo&&rf(u.removed)}}pr(ke.afterSanitizeAttributes,O,null),hr(O,ee)},Ms=function(O){let ee=null;const xe=Kn(O);for(pr(ke.beforeSanitizeShadowDOM,O,null);ee=xe.nextNode();)if(pr(ke.uponSanitizeShadowNode,ee,null),Or(ee,O),Hi(ee,O),$r(ee.content)&&Ms(ee.content),le(ee)===Vn.element){const be=W(ee);$r(be)&&(bo(be),Ms(be))}Ve&&Et(O),pr(ke.afterSanitizeShadowDOM,O,null)},bo=function(O){const ee=[{node:O,shadow:null}];for(;ee.length>0;){const xe=ee.pop();if(xe.shadow){Ms(xe.shadow);continue}const be=xe.node,nt=le(be)===Vn.element,ct=ae(be);if(ct)for(let _t=ct.length-1;_t>=0;--_t)ee.push({node:ct[_t],shadow:null});if(nt){const _t=Y?Y(be):null;if(typeof _t=="string"&&Bt(_t)==="template"){const gn=be.content;$r(gn)&&ee.push({node:gn,shadow:null})}}if(nt){const _t=W(be);$r(_t)&&ee.push({node:null,shadow:_t},{node:_t,shadow:null})}}};return u.sanitize=function(Te){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ee=null,xe=null,be=null,nt=null;if(ri=!Te,ri&&(Te="<!-->"),typeof Te!="string"&&!ai(Te)&&(Te=ux(Te),typeof Te!="string"))throw uo("dirty is not a string, aborting");if(!u.isSupported)return Te;mn?(We=Jn,et=Cr):xi(O),(ke.uponSanitizeElement.length>0||ke.uponSanitizeAttribute.length>0)&&(We=gi(We)),ke.uponSanitizeAttribute.length>0&&(et=gi(et)),u.removed=[];const ct=It&&typeof Te!="string"&&ai(Te);let _t=[];const gn=Ot;if(ct){sa(Te);const $n=we(Te);if(typeof $n=="string"){const wi=Bt($n);if(!We[wi]||ht[wi])throw C(Te),uo("root node is forbidden and cannot be sanitized in-place")}if(Wi(Te))throw C(Te),uo("root node is clobbered and cannot be sanitized in-place");_t=Be(Te),Ot=Np()}else if(ai(Te))ee=Fi("<!---->"),xe=ee.ownerDocument.importNode(Te,!0),xe.nodeType===Vn.element&&xe.nodeName==="BODY"||xe.nodeName==="HTML"?ee=xe:ee.appendChild(xe),bo(ee);else{if(!ar&&!Ve&&!pt&&Te.indexOf("<")===-1)return ie&&xt?q(Te):Te;if(ee=Fi(Te),!ee)return ar?null:xt?Ce:""}ee&&Hr&&dr(ee.firstChild);const fr=ct?Te:ee;try{ct&&bo(Te);const $n=Kn(fr);for(;be=$n.nextNode();)Or(be,fr),Hi(be,fr),$r(be.content)&&Ms(be.content);ct&&oi(Te,_t)}catch($n){throw ct&&(C(Te),en(Te,_t)),$n}finally{Ot=gn}if(ct){if(en(Te,_t))throw uo("a node selected for removal could not be safely returned; refusing to sanitize in place");return Ve&&as(Te),Te}if(ar){if(Ve&&as(ee),vi)for(nt=Se.call(ee.ownerDocument);ee.firstChild;)nt.appendChild(ee.firstChild);else nt=ee;return(et.shadowroot||et.shadowrootmode)&&(nt=qe.call(g,nt,!0)),nt}let cn=pt?ee.outerHTML:ee.innerHTML;return pt&&We["!doctype"]&&ee.ownerDocument&&ee.ownerDocument.doctype&&ee.ownerDocument.doctype.name&&Sr(wx,ee.ownerDocument.doctype.name)&&(cn="<!DOCTYPE "+ee.ownerDocument.doctype.name+`>
`+cn),Ve&&(cn=As(cn)),ie&&xt?q(cn):cn},u.setConfig=function(){let Te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xi(Te),mn=!0,Jn=We,Cr=et},u.clearConfig=function(){Er=null,mn=!1,Jn=null,Cr=null,ie=se,Ce=""},u.isValidAttribute=function(Te,O,ee){Er||xi({});const xe=Bt(Te),be=Bt(O);return typeof ee=="string"&&(aa(O,ee)||!at&&Sr(mf,ee))?!1:Mn(xe,be,ee)},u.addHook=function(Te,O){typeof O=="function"&&ti(ke,Te)&&Ju(ke[Te],O)},u.removeHook=function(Te,O){if(ti(ke,Te)){if(O!==void 0){const ee=nx(ke[Te],O);return ee===-1?void 0:ix(ke[Te],ee,1)[0]}return rf(ke[Te])}},u.removeHooks=function(Te){ti(ke,Te)&&(ke[Te]=[])},u.removeAllHooks=function(){ke=gf()},u}var jx=wm();function Nx(l,u=null){const d=String(l||""),g=d.split(`
`),y=g.findIndex(k=>/^##\s+(?:Practice|Solve)(?:\s*[:—-].*)?\s*$/i.test(k)),b=y===-1?-1:g.findIndex((k,E)=>E>y&&/^##\s+(?:Reflect(?:ion)?|Learn|Stop and think|Optional reading)(?:\b|\s*[:—-])/i.test(k)),_=y>=0?g.slice(y,b<0?g.length:b).join(`
`):`# Solve

${(u==null?void 0:u.challenge)||"Try the lesson task before looking at the guide."}`,T=y>=0?[...g.slice(0,y),...b<0?[]:g.slice(b)].join(`
`).trim():d;return{solve:_,learn:T}}function Ex(l){const u=String(l||"").split(`
`),d=[];let g=null;u.forEach((_,T)=>{const k=_.trim(),E=/^(`{3,}|~{3,})/.exec(k);if(E){const V=E[1];g?g.char===V[0]&&V.length>=g.length&&(g=null):g={char:V[0],length:V.length};return}if(g)return;const P=/^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(_);if(!P)return;const I=P[2],R=/\bStep\s+\d+(?=\s*(?:[:.·–—-]|$))/i.test(I);d.push({index:T,level:P[1].length,numbered:R})});const y=d.filter(_=>_.numbered),b=(y.length?y:d.filter(_=>_.level===2)).map(_=>_.index);return b.length?{intro:u.slice(0,b[0]).join(`
`).trim(),steps:b.map((_,T)=>u.slice(_,b[T+1]??u.length).join(`
`).trim())}:{intro:u.join(`
`),steps:[]}}const Lx=Object.assign({"../content/capstone-discovery.md":Hy,"../content/capstone-feedback.md":By,"../content/capstone-interviews.md":Uy,"../content/capstone-prototype.md":qy,"../content/csharp-conditionals.md":Ky,"../content/csharp-variables.md":$y,"../content/python-decisions.md":Gy,"../content/python-formatting.md":Yy,"../content/python-lists.md":Vy,"../content/python-loops.md":Jy,"../content/python-strings.md":Xy,"../content/python-variables.md":Qy,"../content/react-components.md":Zy,"../content/react-state.md":ev,"../content/tsi-equations.md":tv,"../content/tsi-percents.md":nv,"../content/tsi-ratios.md":rv,"../content/tsi-slope.md":iv,"../content/uil-arrays.md":sv,"../content/uil-loops.md":ov,"../content/uil-methods.md":av,"../content/uil-strings.md":lv,"../content/unity-colliders.md":uv,"../content/unity-player-controller.md":cv,"../content/unity-score.md":dv,"../content/web-events.md":pv,"../content/web-layout.md":hv}),Px="# Add a Markdown lesson\n\nSave a new `.md` file inside `src/content/`.\n",Ax=l=>Lx[`../content/${l}.md`]||Px,rc=l=>jx.sanitize(Vt.parse(l,{breaks:!1,gfm:!0}));function Rx(l,u=""){if(!(l!=null&&l.isPublished))return"";let d="";const g=Array.isArray(l.cases)?l.cases:[];g.length&&!/##\s+(?:Published )?Examples\b/i.test(u)&&(d+=`

### Published examples
`,g.forEach((b,_)=>{d+=`
**Example `+(_+1)+`**

`,b.call&&(d+="Input: `"+b.call+`\`

`),d+=l.mode==="function"?`Expected return:
`:`Expected output:
`,d+="\n```text\n"+String(b.expected??"")+"\n```\n"}));const y=Array.isArray(l.hints)?l.hints:[];return y.length&&!/<details(?:\s|>)/i.test(u)&&(d+=`

### Need a hint?
`,y.forEach((b,_)=>{d+=`
<details>
<summary>Hint `+(_+1)+`</summary>

`+String(b).replaceAll("<","&lt;")+`

</details>
`})),d}function yf(l,u){if(!u)return l;const d="https://github.com/mswhitby/computer-science-1/blob/main/units/",g=u.startsWith("/playground/data/")?new URL(u,"https://www.mswhitby.com"):new URL(u,d);return String(l).replace(/\]\(([^)]+)\)/g,(y,b)=>{if(/^(?:https?:|mailto:|#|data:)/i.test(b))return y;const[_,...T]=b.split(" ");try{const k=new URL(_,g);return k.origin!==g.origin?y:"]("+k.href+(T.length?" "+T.join(" "):"")+")"}catch{return y}})}const xh={markdown:l=>`designlab:md:${l}`,code:l=>`designlab:code:${l}`};function Nd(l){try{return localStorage.getItem(l)}catch{return null}}function po(l,u){try{localStorage.setItem(l,u)}catch{}}function Ix(l){try{localStorage.removeItem(l)}catch{}}function vf({lessonId:l,task:u,isTsi:d=!1,tsiAnswer:g=null}){var K;const y=(u==null?void 0:u.markdownSource)||Ax(l),b=xh.markdown(l),[_,T]=Ne.useState(y),[k,E]=Ne.useState(d?"learn":"solve"),[P,I]=Ne.useState(0),[R,V]=Ne.useState(!1);Ne.useEffect(()=>{T(Nd(b)??y),E(d?"learn":"solve"),I(0),V(!1)},[b,y,d]);const te=Ne.useMemo(()=>{const Y=Nx(_,u),he=Y.solve+Rx(u,Y.solve);return{solve:yf(he,(u==null?void 0:u.markdownUrl)||(u==null?void 0:u.markdown)),learn:yf(Y.learn,(u==null?void 0:u.markdownUrl)||(u==null?void 0:u.markdown))}},[_,u]),H=Ne.useMemo(()=>Ex(te.learn),[te.learn]),ae=!d&&k==="learn"&&H.steps.length>0,D=Math.min(P,Math.max(0,H.steps.length-1)),W=d?te.learn:k==="solve"?te.solve:ae?H.intro+`

`+H.steps[D]:te.learn,F=Ne.useMemo(()=>rc(W),[W]);return p.jsxs("section",{className:"instructions-pane",children:[p.jsxs("div",{className:"pane-header",children:[d?p.jsx("strong",{className:"tsi-learn-title",children:"Learn"}):p.jsxs("div",{className:"tabs compact",role:"tablist","aria-label":"Lesson views",children:[p.jsx("button",{role:"tab","aria-selected":k==="solve",className:k==="solve"?"active":"",onClick:()=>{E("solve"),I(0)},children:"Solve"}),p.jsx("button",{role:"tab","aria-selected":k==="learn",className:k==="learn"?"active":"",onClick:()=>{E("learn"),I(0)},children:"Learn"})]}),p.jsx("button",{type:"button",className:co("icon-button",R&&"active"),title:"Edit lesson text","aria-label":"Edit lesson text",onClick:()=>V(!R),children:p.jsx(yy,{size:16})})]}),R?p.jsxs("div",{className:"markdown-source",children:[p.jsx("p",{className:"hint",children:"Try editing these instructions. Changes here are just for your preview."}),p.jsx("textarea",{"aria-label":"Markdown source",value:_,onChange:Y=>{T(Y.target.value),I(0),po(b,Y.target.value)}}),p.jsx("button",{type:"button",className:"btn",onClick:()=>{Ix(b),T(y),I(0)},children:"Reset lesson text"})]}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"markdown-preview",role:"tabpanel",children:[p.jsx("div",{dangerouslySetInnerHTML:{__html:F}}),d&&g&&p.jsxs("section",{className:"tsi-worked-solution",role:"status",children:[p.jsx("h3",{children:g.correct?"Why that works":"Review the solution"}),p.jsx("p",{children:(K=uh[l])==null?void 0:K.explanation})]})]}),ae&&p.jsxs("nav",{className:"lesson-step-controls","aria-label":"Learning steps",children:[D>0&&p.jsxs("button",{type:"button",className:"step-link previous",onClick:()=>I(Y=>Math.max(0,Y-1)),children:[p.jsx(nh,{size:16,"aria-hidden":"true"})," Previous"]}),p.jsxs("span",{children:["Step ",D+1," of ",H.steps.length]}),D<H.steps.length-1&&p.jsxs("button",{type:"button",className:"step-link next",onClick:()=>I(Y=>Math.min(H.steps.length-1,Y+1)),children:["Next ",p.jsx(ia,{size:16,"aria-hidden":"true"})]})]})]})]})}var vd={exports:{}},Ox=vd.exports,xf;function ss(){return xf||(xf=1,(function(l,u){(function(d,g){l.exports=g()})(Ox,(function(){var d=navigator.userAgent,g=navigator.platform,y=/gecko\/\d/i.test(d),b=/MSIE \d/.test(d),_=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(d),T=/Edge\/(\d+)/.exec(d),k=b||_||T,E=k&&(b?document.documentMode||6:+(T||_)[1]),P=!T&&/WebKit\//.test(d),I=P&&/Qt\/\d+\.\d+/.test(d),R=!T&&/Chrome\/(\d+)/.exec(d),V=R&&+R[1],te=/Opera\//.test(d),H=/Apple Computer/.test(navigator.vendor),ae=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(d),D=/PhantomJS/.test(d),W=H&&(/Mobile\/\w+/.test(d)||navigator.maxTouchPoints>2),F=/Android/.test(d),K=W||F||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(d),Y=W||/Mac/.test(g),he=/\bCrOS\b/.test(d),le=/win/i.test(g),we=te&&d.match(/Version\/(\d*\.\d*)/);we&&(we=Number(we[1])),we&&we>=15&&(te=!1,P=!0);var He=Y&&(I||te&&(we==null||we<12.11)),je=y||k&&E>=9;function ie(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var Ce=function(e,n){var s=e.className,i=ie(n).exec(s);if(i){var o=s.slice(i.index+i[0].length);e.className=s.slice(0,i.index)+(o?i[1]+o:"")}};function se(e){for(var n=e.childNodes.length;n>0;--n)e.removeChild(e.firstChild);return e}function ye(e,n){return se(e).appendChild(n)}function N(e,n,s,i){var o=document.createElement(e);if(s&&(o.className=s),i&&(o.style.cssText=i),typeof n=="string")o.appendChild(document.createTextNode(n));else if(n)for(var h=0;h<n.length;++h)o.appendChild(n[h]);return o}function J(e,n,s,i){var o=N(e,n,s,i);return o.setAttribute("role","presentation"),o}var q;document.createRange?q=function(e,n,s,i){var o=document.createRange();return o.setEnd(i||e,s),o.setStart(e,n),o}:q=function(e,n,s){var i=document.body.createTextRange();try{i.moveToElementText(e.parentNode)}catch{return i}return i.collapse(!0),i.moveEnd("character",s),i.moveStart("character",n),i};function j(e,n){if(n.nodeType==3&&(n=n.parentNode),e.contains)return e.contains(n);do if(n.nodeType==11&&(n=n.host),n==e)return!0;while(n=n.parentNode)}function A(e){var n=e.ownerDocument||e,s;try{s=e.activeElement}catch{s=n.body||null}for(;s&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function G(e,n){var s=e.className;ie(n).test(s)||(e.className+=(s?" ":"")+n)}function M(e,n){for(var s=e.split(" "),i=0;i<s.length;i++)s[i]&&!ie(s[i]).test(n)&&(n+=" "+s[i]);return n}var Q=function(e){e.select()};W?Q=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:k&&(Q=function(e){try{e.select()}catch{}});function Se(e){return e.display.wrapper.ownerDocument}function De(e){return qe(e.display.wrapper)}function qe(e){return e.getRootNode?e.getRootNode():e.ownerDocument}function ke(e){return Se(e).defaultView}function Ie(e){var n=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,n)}}function Ue(e,n,s){n||(n={});for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s!==!1||!Object.prototype.hasOwnProperty.call(n,i))&&(n[i]=e[i]);return n}function Ke(e,n,s,i,o){n==null&&(n=e.search(/[^\s\u00a0]/),n==-1&&(n=e.length));for(var h=i||0,m=o||0;;){var x=e.indexOf("	",h);if(x<0||x>=n)return m+(n-h);m+=x-h,m+=s-m%s,h=x+1}}var tt=function(){this.id=null,this.f=null,this.time=0,this.handler=Ie(this.onTimeout,this)};tt.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},tt.prototype.set=function(e,n){this.f=n;var s=+new Date+e;(!this.id||s<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=s)};function $e(e,n){for(var s=0;s<e.length;++s)if(e[s]==n)return s;return-1}var Ht=50,Gt={toString:function(){return"CodeMirror.Pass"}},St={scroll:!1},vt={origin:"*mouse"},We={origin:"+move"};function rt(e,n,s){for(var i=0,o=0;;){var h=e.indexOf("	",i);h==-1&&(h=e.length);var m=h-i;if(h==e.length||o+m>=n)return i+Math.min(m,n-o);if(o+=h-i,o+=s-o%s,i=h+1,o>=n)return i}}var et=[""];function Kt(e){for(;et.length<=e;)et.push(Ge(et)+" ");return et[e]}function Ge(e){return e[e.length-1]}function ht(e,n){for(var s=[],i=0;i<e.length;i++)s[i]=n(e[i],i);return s}function oe(e,n,s){for(var i=0,o=s(n);i<e.length&&s(e[i])<=o;)i++;e.splice(i,0,n)}function _e(){}function ge(e,n){var s;return Object.create?s=Object.create(e):(_e.prototype=e,s=new _e),n&&Ue(n,s),s}var wt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function Je(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||wt.test(e))}function at(e,n){return n?n.source.indexOf("\\w")>-1&&Je(e)?!0:n.test(e):Je(e)}function Ve(e){for(var n in e)if(e.hasOwnProperty(n)&&e[n])return!1;return!0}var yt=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function pt(e){return e.charCodeAt(0)>=768&&yt.test(e)}function mn(e,n,s){for(;(s<0?n>0:n<e.length)&&pt(e.charAt(n));)n+=s;return n}function Jn(e,n,s){for(var i=n>s?-1:1;;){if(n==s)return n;var o=(n+s)/2,h=i<0?Math.ceil(o):Math.floor(o);if(h==n)return e(h)?n:s;e(h)?s=h:n=h+i}}function Cr(e,n,s,i){if(!e)return i(n,s,"ltr",0);for(var o=!1,h=0;h<e.length;++h){var m=e[h];(m.from<s&&m.to>n||n==s&&m.to==n)&&(i(Math.max(m.from,n),Math.min(m.to,s),m.level==1?"rtl":"ltr",h),o=!0)}o||i(n,s,"ltr")}var Hr=null;function ar(e,n,s){var i;Hr=null;for(var o=0;o<e.length;++o){var h=e[o];if(h.from<n&&h.to>n)return o;h.to==n&&(h.from!=h.to&&s=="before"?i=o:Hr=o),h.from==n&&(h.from!=h.to&&s!="before"?i=o:Hr=o)}return i??Hr}var vi=(function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function s(S){return S<=247?e.charAt(S):1424<=S&&S<=1524?"R":1536<=S&&S<=1785?n.charAt(S-1536):1774<=S&&S<=2220?"r":8192<=S&&S<=8203?"w":S==8204?"b":"L"}var i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,h=/[LRr]/,m=/[Lb1n]/,x=/[1n]/;function w(S,z,U){this.level=S,this.from=z,this.to=U}return function(S,z){var U=z=="ltr"?"L":"R";if(S.length==0||z=="ltr"&&!i.test(S))return!1;for(var re=S.length,Z=[],me=0;me<re;++me)Z.push(s(S.charCodeAt(me)));for(var ve=0,Ae=U;ve<re;++ve){var Le=Z[ve];Le=="m"?Z[ve]=Ae:Ae=Le}for(var ze=0,Me=U;ze<re;++ze){var Ye=Z[ze];Ye=="1"&&Me=="r"?Z[ze]="n":h.test(Ye)&&(Me=Ye,Ye=="r"&&(Z[ze]="R"))}for(var lt=1,Xe=Z[0];lt<re-1;++lt){var kt=Z[lt];kt=="+"&&Xe=="1"&&Z[lt+1]=="1"?Z[lt]="1":kt==","&&Xe==Z[lt+1]&&(Xe=="1"||Xe=="n")&&(Z[lt]=Xe),Xe=kt}for(var jt=0;jt<re;++jt){var Bn=Z[jt];if(Bn==",")Z[jt]="N";else if(Bn=="%"){var rn=void 0;for(rn=jt+1;rn<re&&Z[rn]=="%";++rn);for(var xr=jt&&Z[jt-1]=="!"||rn<re&&Z[rn]=="1"?"1":"N",rr=jt;rr<rn;++rr)Z[rr]=xr;jt=rn-1}}for(var vn=0,br=U;vn<re;++vn){var jn=Z[vn];br=="L"&&jn=="1"?Z[vn]="L":h.test(jn)&&(br=jn)}for(var xn=0;xn<re;++xn)if(o.test(Z[xn])){var zt=void 0;for(zt=xn+1;zt<re&&o.test(Z[zt]);++zt);for(var dt=(xn?Z[xn-1]:U)=="L",Ft=(zt<re?Z[zt]:U)=="L",sn=dt==Ft?dt?"L":"R":U,ln=xn;ln<zt;++ln)Z[ln]=sn;xn=zt-1}for(var $t=[],wr,Nt=0;Nt<re;)if(m.test(Z[Nt])){var oo=Nt;for(++Nt;Nt<re&&m.test(Z[Nt]);++Nt);$t.push(new w(0,oo,Nt))}else{var kr=Nt,Ii=$t.length,es=z=="rtl"?1:0;for(++Nt;Nt<re&&Z[Nt]!="L";++Nt);for(var An=kr;An<Nt;)if(x.test(Z[An])){kr<An&&($t.splice(Ii,0,new w(1,kr,An)),Ii+=es);var Un=An;for(++An;An<Nt&&x.test(Z[An]);++An);$t.splice(Ii,0,new w(2,Un,An)),Ii+=es,kr=An}else++An;kr<Nt&&$t.splice(Ii,0,new w(1,kr,Nt))}return z=="ltr"&&($t[0].level==1&&(wr=S.match(/^\s+/))&&($t[0].from=wr[0].length,$t.unshift(new w(0,0,wr[0].length))),Ge($t).level==1&&(wr=S.match(/\s+$/))&&(Ge($t).to-=wr[0].length,$t.push(new w(0,re-wr[0].length,re)))),z=="rtl"?$t.reverse():$t}})();function xt(e,n){var s=e.order;return s==null&&(s=e.order=vi(e.text,n)),s}var Di=[],it=function(e,n,s){if(e.addEventListener)e.addEventListener(n,s,!1);else if(e.attachEvent)e.attachEvent("on"+n,s);else{var i=e._handlers||(e._handlers={});i[n]=(i[n]||Di).concat(s)}};function Tr(e,n){return e._handlers&&e._handlers[n]||Di}function Jt(e,n,s){if(e.removeEventListener)e.removeEventListener(n,s,!1);else if(e.detachEvent)e.detachEvent("on"+n,s);else{var i=e._handlers,o=i&&i[n];if(o){var h=$e(o,s);h>-1&&(i[n]=o.slice(0,h).concat(o.slice(h+1)))}}}function It(e,n){var s=Tr(e,n);if(s.length)for(var i=Array.prototype.slice.call(arguments,2),o=0;o<s.length;++o)s[o].apply(null,i)}function Ot(e,n,s){return typeof n=="string"&&(n={type:n,preventDefault:function(){this.defaultPrevented=!0}}),It(e,s||n.type,e,n),In(n)||n.codemirrorIgnore}function Nn(e){var n=e._handlers&&e._handlers.cursorActivity;if(n)for(var s=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),i=0;i<n.length;++i)$e(s,n[i])==-1&&s.push(n[i])}function un(e,n){return Tr(e,n).length>0}function lr(e){e.prototype.on=function(n,s){it(this,n,s)},e.prototype.off=function(n,s){Jt(this,n,s)}}function wn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ni(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function In(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==!1}function ur(e){wn(e),ni(e)}function Br(e){return e.target||e.srcElement}function En(e){var n=e.which;return n==null&&(e.button&1?n=1:e.button&2?n=3:e.button&4&&(n=2)),Y&&e.ctrlKey&&n==1&&(n=3),n}var jr=(function(){if(k&&E<9)return!1;var e=N("div");return"draggable"in e||"dragDrop"in e})(),Xn;function ri(e){if(Xn==null){var n=N("span","​");ye(e,N("span",[n,document.createTextNode("x")])),e.firstChild.offsetHeight!=0&&(Xn=n.offsetWidth<=1&&n.offsetHeight>2&&!(k&&E<8))}var s=Xn?N("span","​"):N("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return s.setAttribute("cm-text",""),s}var Ur;function qr(e){if(Ur!=null)return Ur;var n=ye(e,document.createTextNode("AخA")),s=q(n,0,1).getBoundingClientRect(),i=q(n,1,2).getBoundingClientRect();return se(e),!s||s.left==s.right?!1:Ur=i.right-s.right<3}var cr=`

b`.split(/\n/).length!=3?function(e){for(var n=0,s=[],i=e.length;n<=i;){var o=e.indexOf(`
`,n);o==-1&&(o=e.length);var h=e.slice(n,e.charAt(o-1)=="\r"?o-1:o),m=h.indexOf("\r");m!=-1?(s.push(h.slice(0,m)),n+=m+1):(s.push(h),n=o+1)}return s}:function(e){return e.split(/\r\n?|\n/)},Kr=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch{return!1}}:function(e){var n;try{n=e.ownerDocument.selection.createRange()}catch{}return!n||n.parentElement()!=e?!1:n.compareEndPoints("StartToEnd",n)!=0},Ps=(function(){var e=N("div");return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),typeof e.oncopy=="function")})(),kn=null;function yo(e){if(kn!=null)return kn;var n=ye(e,N("span","x")),s=n.getBoundingClientRect(),i=q(n,0,1).getBoundingClientRect();return kn=Math.abs(s.left-i.left)>1}var Rr={},Ir={};function Nr(e,n){arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),Rr[e]=n}function Bt(e,n){Ir[e]=n}function Er(e){if(typeof e=="string"&&Ir.hasOwnProperty(e))e=Ir[e];else if(e&&typeof e.name=="string"&&Ir.hasOwnProperty(e.name)){var n=Ir[e.name];typeof n=="string"&&(n={name:n}),e=ge(n,e),e.name=n.name}else{if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Er("application/xml");if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Er("application/json")}return typeof e=="string"?{name:e}:e||{name:"null"}}function zi(e,n){n=Er(n);var s=Rr[n.name];if(!s)return zi(e,"text/plain");var i=s(e,n);if(ii.hasOwnProperty(n.name)){var o=ii[n.name];for(var h in o)o.hasOwnProperty(h)&&(i.hasOwnProperty(h)&&(i["_"+h]=i[h]),i[h]=o[h])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var m in n.modeProps)i[m]=n.modeProps[m];return i}var ii={};function xi(e,n){var s=ii.hasOwnProperty(e)?ii[e]:ii[e]={};Ue(n,s)}function At(e,n){if(n===!0)return n;if(e.copyState)return e.copyState(n);var s={};for(var i in n){var o=n[i];o instanceof Array&&(o=o.concat([])),s[i]=o}return s}function os(e,n){for(var s;e.innerMode&&(s=e.innerMode(n),!(!s||s.mode==e));)n=s.state,e=s.mode;return s||{mode:e,state:n}}function bi(e,n,s){return e.startState?e.startState(n,s):!0}var Xt=function(e,n,s){this.pos=this.start=0,this.string=e,this.tabSize=n||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=s};Xt.prototype.eol=function(){return this.pos>=this.string.length},Xt.prototype.sol=function(){return this.pos==this.lineStart},Xt.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Xt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Xt.prototype.eat=function(e){var n=this.string.charAt(this.pos),s;if(typeof e=="string"?s=n==e:s=n&&(e.test?e.test(n):e(n)),s)return++this.pos,n},Xt.prototype.eatWhile=function(e){for(var n=this.pos;this.eat(e););return this.pos>n},Xt.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Xt.prototype.skipToEnd=function(){this.pos=this.string.length},Xt.prototype.skipTo=function(e){var n=this.string.indexOf(e,this.pos);if(n>-1)return this.pos=n,!0},Xt.prototype.backUp=function(e){this.pos-=e},Xt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Ke(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Ke(this.string,this.lineStart,this.tabSize):0)},Xt.prototype.indentation=function(){return Ke(this.string,null,this.tabSize)-(this.lineStart?Ke(this.string,this.lineStart,this.tabSize):0)},Xt.prototype.match=function(e,n,s){if(typeof e=="string"){var i=function(m){return s?m.toLowerCase():m},o=this.string.substr(this.pos,e.length);if(i(o)==i(e))return n!==!1&&(this.pos+=e.length),!0}else{var h=this.string.slice(this.pos).match(e);return h&&h.index>0?null:(h&&n!==!1&&(this.pos+=h[0].length),h)}},Xt.prototype.current=function(){return this.string.slice(this.start,this.pos)},Xt.prototype.hideFirstChars=function(e,n){this.lineStart+=e;try{return n()}finally{this.lineStart-=e}},Xt.prototype.lookAhead=function(e){var n=this.lineOracle;return n&&n.lookAhead(e)},Xt.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};function Qe(e,n){if(n-=e.first,n<0||n>=e.size)throw new Error("There is no line "+(n+e.first)+" in the document.");for(var s=e;!s.lines;)for(var i=0;;++i){var o=s.children[i],h=o.chunkSize();if(n<h){s=o;break}n-=h}return s.lines[n]}function si(e,n,s){var i=[],o=n.line;return e.iter(n.line,s.line+1,function(h){var m=h.text;o==s.line&&(m=m.slice(0,s.ch)),o==n.line&&(m=m.slice(n.ch)),i.push(m),++o}),i}function dr(e,n,s){var i=[];return e.iter(n,s,function(o){i.push(o.text)}),i}function On(e,n){var s=n-e.height;if(s)for(var i=e;i;i=i.parent)i.height+=s}function C(e){if(e.parent==null)return null;for(var n=e.parent,s=$e(n.lines,e),i=n.parent;i;n=i,i=i.parent)for(var o=0;i.children[o]!=n;++o)s+=i.children[o].chunkSize();return s+n.first}function B(e,n){var s=e.first;e:do{for(var i=0;i<e.children.length;++i){var o=e.children[i],h=o.height;if(n<h){e=o;continue e}n-=h,s+=o.chunkSize()}return s}while(!e.lines);for(var m=0;m<e.lines.length;++m){var x=e.lines[m],w=x.height;if(n<w)break;n-=w}return s+m}function fe(e,n){return n>=e.first&&n<e.first+e.size}function Ee(e,n){return String(e.lineNumberFormatter(n+e.firstLineNumber))}function de(e,n,s){if(s===void 0&&(s=null),!(this instanceof de))return new de(e,n,s);this.line=e,this.ch=n,this.sticky=s}function Be(e,n){return e.line-n.line||e.ch-n.ch}function Tt(e,n){return e.sticky==n.sticky&&Be(e,n)==0}function en(e){return de(e.line,e.ch)}function Sn(e,n){return Be(e,n)<0?n:e}function oi(e,n){return Be(e,n)<0?e:n}function Za(e,n){return Math.max(e.first,Math.min(n,e.first+e.size-1))}function gt(e,n){if(n.line<e.first)return de(e.first,0);var s=e.first+e.size-1;return n.line>s?de(s,Qe(e,s).text.length):vo(n,Qe(e,n.line).text.length)}function vo(e,n){var s=e.ch;return s==null||s>n?de(e.line,n):s<0?de(e.line,0):e}function sa(e,n){for(var s=[],i=0;i<n.length;i++)s[i]=gt(e,n[i]);return s}var Fi=function(e,n){this.state=e,this.lookAhead=n},Kn=function(e,n,s,i){this.state=n,this.doc=e,this.line=s,this.maxLookAhead=i||0,this.baseTokens=null,this.baseTokenPos=1};Kn.prototype.lookAhead=function(e){var n=this.doc.getLine(this.line+e);return n!=null&&e>this.maxLookAhead&&(this.maxLookAhead=e),n},Kn.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var n=this.baseTokens[this.baseTokenPos+1];return{type:n&&n.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},Kn.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},Kn.fromSaved=function(e,n,s){return n instanceof Fi?new Kn(e,At(e.mode,n.state),s,n.lookAhead):new Kn(e,At(e.mode,n),s)},Kn.prototype.save=function(e){var n=e!==!1?At(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new Fi(n,this.maxLookAhead):n};function As(e,n,s,i){var o=[e.state.modeGen],h={};xo(e,n.text,e.doc.mode,s,function(S,z){return o.push(S,z)},h,i);for(var m=s.state,x=function(S){s.baseTokens=o;var z=e.state.overlays[S],U=1,re=0;s.state=!0,xo(e,n.text,z.mode,s,function(Z,me){for(var ve=U;re<Z;){var Ae=o[U];Ae>Z&&o.splice(U,1,Z,o[U+1],Ae),U+=2,re=Math.min(Z,Ae)}if(me)if(z.opaque)o.splice(ve,U-ve,Z,"overlay "+me),U=ve+2;else for(;ve<U;ve+=2){var Le=o[ve+1];o[ve+1]=(Le?Le+" ":"")+"overlay "+me}},h),s.state=m,s.baseTokens=null,s.baseTokenPos=1},w=0;w<e.state.overlays.length;++w)x(w);return{styles:o,classes:h.bgClass||h.textClass?h:null}}function as(e,n,s){if(!n.styles||n.styles[0]!=e.state.modeGen){var i=Et(e,C(n)),o=n.text.length>e.options.maxHighlightLength&&At(e.doc.mode,i.state),h=As(e,n,i);o&&(i.state=o),n.stateAfter=i.save(!o),n.styles=h.styles,h.classes?n.styleClasses=h.classes:n.styleClasses&&(n.styleClasses=null),s===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return n.styles}function Et(e,n,s){var i=e.doc,o=e.display;if(!i.mode.startState)return new Kn(i,!0,n);var h=Rs(e,n,s),m=h>i.first&&Qe(i,h-1).stateAfter,x=m?Kn.fromSaved(i,m,h):new Kn(i,bi(i.mode),h);return i.iter(h,n,function(w){Wi(e,w.text,x);var S=x.line;w.stateAfter=S==n-1||S%5==0||S>=o.viewFrom&&S<o.viewTo?x.save():null,x.nextLine()}),s&&(i.modeFrontier=x.line),x}function Wi(e,n,s,i){var o=e.doc.mode,h=new Xt(n,e.options.tabSize,s);for(h.start=h.pos=i||0,n==""&&$r(o,s.state);!h.eol();)ai(o,h,s.state),h.start=h.pos}function $r(e,n){if(e.blankLine)return e.blankLine(n);if(e.innerMode){var s=os(e,n);if(s.mode.blankLine)return s.mode.blankLine(s.state)}}function ai(e,n,s,i){for(var o=0;o<10;o++){i&&(i[0]=os(e,s).mode);var h=e.token(n,s);if(n.pos>n.start)return h}throw new Error("Mode "+e.name+" failed to advance stream.")}var pr=function(e,n,s){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=n||null,this.state=s};function oa(e,n,s,i){var o=e.doc,h=o.mode,m;n=gt(o,n);var x=Qe(o,n.line),w=Et(e,n.line,s),S=new Xt(x.text,e.options.tabSize,w),z;for(i&&(z=[]);(i||S.pos<n.ch)&&!S.eol();)S.start=S.pos,m=ai(h,S,w.state),i&&z.push(new pr(S,m,At(o.mode,w.state)));return i?z:new pr(S,m,w.state)}function ls(e,n){if(e)for(;;){var s=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!s)break;e=e.slice(0,s.index)+e.slice(s.index+s[0].length);var i=s[1]?"bgClass":"textClass";n[i]==null?n[i]=s[2]:new RegExp("(?:^|\\s)"+s[2]+"(?:$|\\s)").test(n[i])||(n[i]+=" "+s[2])}return e}function xo(e,n,s,i,o,h,m){var x=s.flattenSpans;x==null&&(x=e.options.flattenSpans);var w=0,S=null,z=new Xt(n,e.options.tabSize,i),U,re=e.options.addModeClass&&[null];for(n==""&&ls($r(s,i.state),h);!z.eol();){if(z.pos>e.options.maxHighlightLength?(x=!1,m&&Wi(e,n,i,z.pos),z.pos=n.length,U=null):U=ls(ai(s,z,i.state,re),h),re){var Z=re[0].name;Z&&(U="m-"+(U?Z+" "+U:Z))}if(!x||S!=U){for(;w<z.start;)w=Math.min(z.start,w+5e3),o(w,S);S=U}z.start=z.pos}for(;w<z.pos;){var me=Math.min(z.pos,w+5e3);o(me,S),w=me}}function Rs(e,n,s){for(var i,o,h=e.doc,m=s?-1:n-(e.doc.mode.innerMode?1e3:100),x=n;x>m;--x){if(x<=h.first)return h.first;var w=Qe(h,x-1),S=w.stateAfter;if(S&&(!s||x+(S instanceof Fi?S.lookAhead:0)<=h.modeFrontier))return x;var z=Ke(w.text,null,e.options.tabSize);(o==null||i>z)&&(o=x-1,i=z)}return o}function hr(e,n){if(e.modeFrontier=Math.min(e.modeFrontier,n),!(e.highlightFrontier<n-10)){for(var s=e.first,i=n-1;i>s;i--){var o=Qe(e,i).stateAfter;if(o&&(!(o instanceof Fi)||i+o.lookAhead<n)){s=i+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,s)}}var Or=!1,Mn=!1;function Is(){Or=!0}function us(){Mn=!0}function Mr(e,n,s){this.marker=e,this.from=n,this.to=s}function Os(e,n){if(e)for(var s=0;s<e.length;++s){var i=e[s];if(i.marker==n)return i}}function aa(e,n){for(var s,i=0;i<e.length;++i)e[i]!=n&&(s||(s=[])).push(e[i]);return s}function Hi(e,n,s){var i=s&&window.WeakSet&&(s.markedSpans||(s.markedSpans=new WeakSet));i&&e.markedSpans&&i.has(e.markedSpans)?e.markedSpans.push(n):(e.markedSpans=e.markedSpans?e.markedSpans.concat([n]):[n],i&&i.add(e.markedSpans)),n.marker.attachLine(e)}function Ms(e,n,s){var i;if(e)for(var o=0;o<e.length;++o){var h=e[o],m=h.marker,x=h.from==null||(m.inclusiveLeft?h.from<=n:h.from<n);if(x||h.from==n&&m.type=="bookmark"&&(!s||!h.marker.insertLeft)){var w=h.to==null||(m.inclusiveRight?h.to>=n:h.to>n);(i||(i=[])).push(new Mr(m,h.from,w?null:h.to))}}return i}function bo(e,n,s){var i;if(e)for(var o=0;o<e.length;++o){var h=e[o],m=h.marker,x=h.to==null||(m.inclusiveRight?h.to>=n:h.to>n);if(x||h.from==n&&m.type=="bookmark"&&(!s||h.marker.insertLeft)){var w=h.from==null||(m.inclusiveLeft?h.from<=n:h.from<n);(i||(i=[])).push(new Mr(m,w?null:h.from-n,h.to==null?null:h.to-n))}}return i}function Te(e,n){if(n.full)return null;var s=fe(e,n.from.line)&&Qe(e,n.from.line).markedSpans,i=fe(e,n.to.line)&&Qe(e,n.to.line).markedSpans;if(!s&&!i)return null;var o=n.from.ch,h=n.to.ch,m=Be(n.from,n.to)==0,x=Ms(s,o,m),w=bo(i,h,m),S=n.text.length==1,z=Ge(n.text).length+(S?o:0);if(x)for(var U=0;U<x.length;++U){var re=x[U];if(re.to==null){var Z=Os(w,re.marker);Z?S&&(re.to=Z.to==null?null:Z.to+z):re.to=o}}if(w)for(var me=0;me<w.length;++me){var ve=w[me];if(ve.to!=null&&(ve.to+=z),ve.from==null){var Ae=Os(x,ve.marker);Ae||(ve.from=z,S&&(x||(x=[])).push(ve))}else ve.from+=z,S&&(x||(x=[])).push(ve)}x&&(x=O(x)),w&&w!=x&&(w=O(w));var Le=[x];if(!S){var ze=n.text.length-2,Me;if(ze>0&&x)for(var Ye=0;Ye<x.length;++Ye)x[Ye].to==null&&(Me||(Me=[])).push(new Mr(x[Ye].marker,null,null));for(var lt=0;lt<ze;++lt)Le.push(Me);Le.push(w)}return Le}function O(e){for(var n=0;n<e.length;++n){var s=e[n];s.from!=null&&s.from==s.to&&s.marker.clearWhenEmpty!==!1&&e.splice(n--,1)}return e.length?e:null}function ee(e,n,s){var i=null;if(e.iter(n.line,s.line+1,function(Z){if(Z.markedSpans)for(var me=0;me<Z.markedSpans.length;++me){var ve=Z.markedSpans[me].marker;ve.readOnly&&(!i||$e(i,ve)==-1)&&(i||(i=[])).push(ve)}}),!i)return null;for(var o=[{from:n,to:s}],h=0;h<i.length;++h)for(var m=i[h],x=m.find(0),w=0;w<o.length;++w){var S=o[w];if(!(Be(S.to,x.from)<0||Be(S.from,x.to)>0)){var z=[w,1],U=Be(S.from,x.from),re=Be(S.to,x.to);(U<0||!m.inclusiveLeft&&!U)&&z.push({from:S.from,to:x.from}),(re>0||!m.inclusiveRight&&!re)&&z.push({from:x.to,to:S.to}),o.splice.apply(o,z),w+=z.length-3}}return o}function xe(e){var n=e.markedSpans;if(n){for(var s=0;s<n.length;++s)n[s].marker.detachLine(e);e.markedSpans=null}}function be(e,n){if(n){for(var s=0;s<n.length;++s)n[s].marker.attachLine(e);e.markedSpans=n}}function nt(e){return e.inclusiveLeft?-1:0}function ct(e){return e.inclusiveRight?1:0}function _t(e,n){var s=e.lines.length-n.lines.length;if(s!=0)return s;var i=e.find(),o=n.find(),h=Be(i.from,o.from)||nt(e)-nt(n);if(h)return-h;var m=Be(i.to,o.to)||ct(e)-ct(n);return m||n.id-e.id}function gn(e,n){var s=Mn&&e.markedSpans,i;if(s)for(var o=void 0,h=0;h<s.length;++h)o=s[h],o.marker.collapsed&&(n?o.from:o.to)==null&&(!i||_t(i,o.marker)<0)&&(i=o.marker);return i}function fr(e){return gn(e,!0)}function cn(e){return gn(e,!1)}function $n(e,n){var s=Mn&&e.markedSpans,i;if(s)for(var o=0;o<s.length;++o){var h=s[o];h.marker.collapsed&&(h.from==null||h.from<n)&&(h.to==null||h.to>n)&&(!i||_t(i,h.marker)<0)&&(i=h.marker)}return i}function wi(e,n,s,i,o){var h=Qe(e,n),m=Mn&&h.markedSpans;if(m)for(var x=0;x<m.length;++x){var w=m[x];if(w.marker.collapsed){var S=w.marker.find(0),z=Be(S.from,s)||nt(w.marker)-nt(o),U=Be(S.to,i)||ct(w.marker)-ct(o);if(!(z>=0&&U<=0||z<=0&&U>=0)&&(z<=0&&(w.marker.inclusiveRight&&o.inclusiveLeft?Be(S.to,s)>=0:Be(S.to,s)>0)||z>=0&&(w.marker.inclusiveRight&&o.inclusiveLeft?Be(S.from,i)<=0:Be(S.from,i)<0)))return!0}}}function Rt(e){for(var n;n=fr(e);)e=n.find(-1,!0).line;return e}function wo(e){for(var n;n=cn(e);)e=n.find(1,!0).line;return e}function el(e){for(var n,s;n=cn(e);)e=n.find(1,!0).line,(s||(s=[])).push(e);return s}function tl(e,n){var s=Qe(e,n),i=Rt(s);return s==i?n:C(i)}function la(e,n){if(n>e.lastLine())return n;var s=Qe(e,n),i;if(!li(e,s))return n;for(;i=cn(s);)s=i.find(1,!0).line;return C(s)+1}function li(e,n){var s=Mn&&n.markedSpans;if(s){for(var i=void 0,o=0;o<s.length;++o)if(i=s[o],!!i.marker.collapsed){if(i.from==null)return!0;if(!i.marker.widgetNode&&i.from==0&&i.marker.inclusiveLeft&&nl(e,n,i))return!0}}}function nl(e,n,s){if(s.to==null){var i=s.marker.find(1,!0);return nl(e,i.line,Os(i.line.markedSpans,s.marker))}if(s.marker.inclusiveRight&&s.to==n.text.length)return!0;for(var o=void 0,h=0;h<n.markedSpans.length;++h)if(o=n.markedSpans[h],o.marker.collapsed&&!o.marker.widgetNode&&o.from==s.to&&(o.to==null||o.to!=s.from)&&(o.marker.inclusiveLeft||s.marker.inclusiveRight)&&nl(e,n,o))return!0}function _n(e){e=Rt(e);for(var n=0,s=e.parent,i=0;i<s.lines.length;++i){var o=s.lines[i];if(o==e)break;n+=o.height}for(var h=s.parent;h;s=h,h=s.parent)for(var m=0;m<h.children.length;++m){var x=h.children[m];if(x==s)break;n+=x.height}return n}function Bi(e){if(e.height==0)return 0;for(var n=e.text.length,s,i=e;s=fr(i);){var o=s.find(0,!0);i=o.from.line,n+=o.from.ch-o.to.ch}for(i=e;s=cn(i);){var h=s.find(0,!0);n-=i.text.length-h.from.ch,i=h.to.line,n+=i.text.length-h.to.ch}return n}function ua(e){var n=e.display,s=e.doc;n.maxLine=Qe(s,s.first),n.maxLineLength=Bi(n.maxLine),n.maxLineChanged=!0,s.iter(function(i){var o=Bi(i);o>n.maxLineLength&&(n.maxLineLength=o,n.maxLine=i)})}var ki=function(e,n,s){this.text=e,be(this,n),this.height=s?s(this):1};ki.prototype.lineNo=function(){return C(this)},lr(ki);function zd(e,n,s,i){e.text=n,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),e.order!=null&&(e.order=null),xe(e),be(e,s);var o=i?i(e):1;o!=e.height&&On(e,o)}function Jl(e){e.parent=null,xe(e)}var Xl={},ca={};function da(e,n){if(!e||/^\s*$/.test(e))return null;var s=n.addModeClass?ca:Xl;return s[e]||(s[e]=e.replace(/\S+/g,"cm-$&"))}function Ql(e,n){var s=J("span",null,null,P?"padding-right: .1px":null),i={pre:J("pre",[s],"CodeMirror-line"),content:s,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};n.measure={};for(var o=0;o<=(n.rest?n.rest.length:0);o++){var h=o?n.rest[o-1]:n.line,m=void 0;i.pos=0,i.addToken=Wd,qr(e.display.measure)&&(m=xt(h,e.doc.direction))&&(i.addToken=Zl(i.addToken,m)),i.map=[];var x=n!=e.display.externalMeasured&&C(h);Bd(h,i,as(e,h,x)),h.styleClasses&&(h.styleClasses.bgClass&&(i.bgClass=M(h.styleClasses.bgClass,i.bgClass||"")),h.styleClasses.textClass&&(i.textClass=M(h.styleClasses.textClass,i.textClass||""))),i.map.length==0&&i.map.push(0,0,i.content.appendChild(ri(e.display.measure))),o==0?(n.measure.map=i.map,n.measure.cache={}):((n.measure.maps||(n.measure.maps=[])).push(i.map),(n.measure.caches||(n.measure.caches=[])).push({}))}if(P){var w=i.content.lastChild;(/\bcm-tab\b/.test(w.className)||w.querySelector&&w.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return It(e,"renderLine",e,n.line,i.pre),i.pre.className&&(i.textClass=M(i.pre.className,i.textClass||"")),i}function Fd(e){var n=N("span","•","cm-invalidchar");return n.title="\\u"+e.charCodeAt(0).toString(16),n.setAttribute("aria-label",n.title),n}function Wd(e,n,s,i,o,h,m){if(n){var x=e.splitSpaces?Hd(n,e.trailingSpace):n,w=e.cm.state.specialChars,S=!1,z;if(!w.test(n))e.col+=n.length,z=document.createTextNode(x),e.map.push(e.pos,e.pos+n.length,z),k&&E<9&&(S=!0),e.pos+=n.length;else{z=document.createDocumentFragment();for(var U=0;;){w.lastIndex=U;var re=w.exec(n),Z=re?re.index-U:n.length-U;if(Z){var me=document.createTextNode(x.slice(U,U+Z));k&&E<9?z.appendChild(N("span",[me])):z.appendChild(me),e.map.push(e.pos,e.pos+Z,me),e.col+=Z,e.pos+=Z}if(!re)break;U+=Z+1;var ve=void 0;if(re[0]=="	"){var Ae=e.cm.options.tabSize,Le=Ae-e.col%Ae;ve=z.appendChild(N("span",Kt(Le),"cm-tab")),ve.setAttribute("role","presentation"),ve.setAttribute("cm-text","	"),e.col+=Le}else re[0]=="\r"||re[0]==`
`?(ve=z.appendChild(N("span",re[0]=="\r"?"␍":"␤","cm-invalidchar")),ve.setAttribute("cm-text",re[0]),e.col+=1):(ve=e.cm.options.specialCharPlaceholder(re[0]),ve.setAttribute("cm-text",re[0]),k&&E<9?z.appendChild(N("span",[ve])):z.appendChild(ve),e.col+=1);e.map.push(e.pos,e.pos+1,ve),e.pos++}}if(e.trailingSpace=x.charCodeAt(n.length-1)==32,s||i||o||S||h||m){var ze=s||"";i&&(ze+=i),o&&(ze+=o);var Me=N("span",[z],ze,h);if(m)for(var Ye in m)m.hasOwnProperty(Ye)&&Ye!="style"&&Ye!="class"&&Me.setAttribute(Ye,m[Ye]);return e.content.appendChild(Me)}e.content.appendChild(z)}}function Hd(e,n){if(e.length>1&&!/  /.test(e))return e;for(var s=n,i="",o=0;o<e.length;o++){var h=e.charAt(o);h==" "&&s&&(o==e.length-1||e.charCodeAt(o+1)==32)&&(h=" "),i+=h,s=h==" "}return i}function Zl(e,n){return function(s,i,o,h,m,x,w){o=o?o+" cm-force-border":"cm-force-border";for(var S=s.pos,z=S+i.length;;){for(var U=void 0,re=0;re<n.length&&(U=n[re],!(U.to>S&&U.from<=S));re++);if(U.to>=z)return e(s,i,o,h,m,x,w);e(s,i.slice(0,U.to-S),o,h,null,x,w),h=null,i=i.slice(U.to-S),S=U.to}}}function dc(e,n,s,i){var o=!i&&s.widgetNode;o&&e.map.push(e.pos,e.pos+n,o),!i&&e.cm.display.input.needsContentAttribute&&(o||(o=e.content.appendChild(document.createElement("span"))),o.setAttribute("cm-marker",s.id)),o&&(e.cm.display.input.setUneditable(o),e.content.appendChild(o)),e.pos+=n,e.trailingSpace=!1}function Bd(e,n,s){var i=e.markedSpans,o=e.text,h=0;if(!i){for(var m=1;m<s.length;m+=2)n.addToken(n,o.slice(h,h=s[m]),da(s[m+1],n.cm.options));return}for(var x=o.length,w=0,S=1,z="",U,re,Z=0,me,ve,Ae,Le,ze;;){if(Z==w){me=ve=Ae=re="",ze=null,Le=null,Z=1/0;for(var Me=[],Ye=void 0,lt=0;lt<i.length;++lt){var Xe=i[lt],kt=Xe.marker;if(kt.type=="bookmark"&&Xe.from==w&&kt.widgetNode)Me.push(kt);else if(Xe.from<=w&&(Xe.to==null||Xe.to>w||kt.collapsed&&Xe.to==w&&Xe.from==w)){if(Xe.to!=null&&Xe.to!=w&&Z>Xe.to&&(Z=Xe.to,ve=""),kt.className&&(me+=" "+kt.className),kt.css&&(re=(re?re+";":"")+kt.css),kt.startStyle&&Xe.from==w&&(Ae+=" "+kt.startStyle),kt.endStyle&&Xe.to==Z&&(Ye||(Ye=[])).push(kt.endStyle,Xe.to),kt.title&&((ze||(ze={})).title=kt.title),kt.attributes)for(var jt in kt.attributes)(ze||(ze={}))[jt]=kt.attributes[jt];kt.collapsed&&(!Le||_t(Le.marker,kt)<0)&&(Le=Xe)}else Xe.from>w&&Z>Xe.from&&(Z=Xe.from)}if(Ye)for(var Bn=0;Bn<Ye.length;Bn+=2)Ye[Bn+1]==Z&&(ve+=" "+Ye[Bn]);if(!Le||Le.from==w)for(var rn=0;rn<Me.length;++rn)dc(n,0,Me[rn]);if(Le&&(Le.from||0)==w){if(dc(n,(Le.to==null?x+1:Le.to)-w,Le.marker,Le.from==null),Le.to==null)return;Le.to==w&&(Le=!1)}}if(w>=x)break;for(var xr=Math.min(x,Z);;){if(z){var rr=w+z.length;if(!Le){var vn=rr>xr?z.slice(0,xr-w):z;n.addToken(n,vn,U?U+me:me,Ae,w+vn.length==Z?ve:"",re,ze)}if(rr>=xr){z=z.slice(xr-w),w=xr;break}w=rr,Ae=""}z=o.slice(h,h=s[S++]),U=da(s[S++],n.cm.options)}}}function pc(e,n,s){this.line=n,this.rest=el(n),this.size=this.rest?C(Ge(this.rest))-s+1:1,this.node=this.text=null,this.hidden=li(e,n)}function rl(e,n,s){for(var i=[],o,h=n;h<s;h=o){var m=new pc(e.doc,Qe(e.doc,h),h);o=h+m.size,i.push(m)}return i}var ko=null;function hc(e){ko?ko.ops.push(e):e.ownsGroup=ko={ops:[e],delayedCallbacks:[]}}function Ud(e){var n=e.delayedCallbacks,s=0;do{for(;s<n.length;s++)n[s].call(null);for(var i=0;i<e.ops.length;i++){var o=e.ops[i];if(o.cursorActivityHandlers)for(;o.cursorActivityCalled<o.cursorActivityHandlers.length;)o.cursorActivityHandlers[o.cursorActivityCalled++].call(null,o.cm)}}while(s<n.length)}function qd(e,n){var s=e.ownsGroup;if(s)try{Ud(s)}finally{ko=null,n(s)}}var pa=null;function Dn(e,n){var s=Tr(e,n);if(s.length){var i=Array.prototype.slice.call(arguments,2),o;ko?o=ko.delayedCallbacks:pa?o=pa:(o=pa=[],setTimeout(eu,0));for(var h=function(x){o.push(function(){return s[x].apply(null,i)})},m=0;m<s.length;++m)h(m)}}function eu(){var e=pa;pa=null;for(var n=0;n<e.length;++n)e[n]()}function fc(e,n,s,i){for(var o=0;o<n.changes.length;o++){var h=n.changes[o];h=="text"?$d(e,n):h=="gutter"?mc(e,n,s,i):h=="class"?nu(e,n):h=="widget"&&Gd(e,n,i)}n.changes=null}function ha(e){return e.node==e.text&&(e.node=N("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),k&&E<8&&(e.node.style.zIndex=2)),e.node}function Kd(e,n){var s=n.bgClass?n.bgClass+" "+(n.line.bgClass||""):n.line.bgClass;if(s&&(s+=" CodeMirror-linebackground"),n.background)s?n.background.className=s:(n.background.parentNode.removeChild(n.background),n.background=null);else if(s){var i=ha(n);n.background=i.insertBefore(N("div",null,s),i.firstChild),e.display.input.setUneditable(n.background)}}function tu(e,n){var s=e.display.externalMeasured;return s&&s.line==n.line?(e.display.externalMeasured=null,n.measure=s.measure,s.built):Ql(e,n)}function $d(e,n){var s=n.text.className,i=tu(e,n);n.text==n.node&&(n.node=i.pre),n.text.parentNode.replaceChild(i.pre,n.text),n.text=i.pre,i.bgClass!=n.bgClass||i.textClass!=n.textClass?(n.bgClass=i.bgClass,n.textClass=i.textClass,nu(e,n)):s&&(n.text.className=s)}function nu(e,n){Kd(e,n),n.line.wrapClass?ha(n).className=n.line.wrapClass:n.node!=n.text&&(n.node.className="");var s=n.textClass?n.textClass+" "+(n.line.textClass||""):n.line.textClass;n.text.className=s||""}function mc(e,n,s,i){if(n.gutter&&(n.node.removeChild(n.gutter),n.gutter=null),n.gutterBackground&&(n.node.removeChild(n.gutterBackground),n.gutterBackground=null),n.line.gutterClass){var o=ha(n);n.gutterBackground=N("div",null,"CodeMirror-gutter-background "+n.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(n.gutterBackground),o.insertBefore(n.gutterBackground,n.text)}var h=n.line.gutterMarkers;if(e.options.lineNumbers||h){var m=ha(n),x=n.gutter=N("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(x.setAttribute("aria-hidden","true"),e.display.input.setUneditable(x),m.insertBefore(x,n.text),n.line.gutterClass&&(x.className+=" "+n.line.gutterClass),e.options.lineNumbers&&(!h||!h["CodeMirror-linenumbers"])&&(n.lineNumber=x.appendChild(N("div",Ee(e.options,s),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),h)for(var w=0;w<e.display.gutterSpecs.length;++w){var S=e.display.gutterSpecs[w].className,z=h.hasOwnProperty(S)&&h[S];z&&x.appendChild(N("div",[z],"CodeMirror-gutter-elt","left: "+i.gutterLeft[S]+"px; width: "+i.gutterWidth[S]+"px"))}}}function Gd(e,n,s){n.alignable&&(n.alignable=null);for(var i=ie("CodeMirror-linewidget"),o=n.node.firstChild,h=void 0;o;o=h)h=o.nextSibling,i.test(o.className)&&n.node.removeChild(o);gc(e,n,s)}function Yd(e,n,s,i){var o=tu(e,n);return n.text=n.node=o.pre,o.bgClass&&(n.bgClass=o.bgClass),o.textClass&&(n.textClass=o.textClass),nu(e,n),mc(e,n,s,i),gc(e,n,i),n.node}function gc(e,n,s){if(yc(e,n.line,n,s,!0),n.rest)for(var i=0;i<n.rest.length;i++)yc(e,n.rest[i],n,s,!1)}function yc(e,n,s,i,o){if(n.widgets)for(var h=ha(s),m=0,x=n.widgets;m<x.length;++m){var w=x[m],S=N("div",[w.node],"CodeMirror-linewidget"+(w.className?" "+w.className:""));w.handleMouseEvents||S.setAttribute("cm-ignore-events","true"),ru(w,S,s,i),e.display.input.setUneditable(S),o&&w.above?h.insertBefore(S,s.gutter||s.text):h.appendChild(S),Dn(w,"redraw")}}function ru(e,n,s,i){if(e.noHScroll){(s.alignable||(s.alignable=[])).push(n);var o=i.wrapperWidth;n.style.left=i.fixedPos+"px",e.coverGutter||(o-=i.gutterTotalWidth,n.style.paddingLeft=i.gutterTotalWidth+"px"),n.style.width=o+"px"}e.coverGutter&&(n.style.zIndex=5,n.style.position="relative",e.noHScroll||(n.style.marginLeft=-i.gutterTotalWidth+"px"))}function Ui(e){if(e.height!=null)return e.height;var n=e.doc.cm;if(!n)return 0;if(!j(document.body,e.node)){var s="position: relative;";e.coverGutter&&(s+="margin-left: -"+n.display.gutters.offsetWidth+"px;"),e.noHScroll&&(s+="width: "+n.display.wrapper.clientWidth+"px;"),ye(n.display.measure,N("div",[e.node],null,s))}return e.height=e.node.parentNode.offsetHeight}function qi(e,n){for(var s=Br(n);s!=e.wrapper;s=s.parentNode)if(!s||s.nodeType==1&&s.getAttribute("cm-ignore-events")=="true"||s.parentNode==e.sizer&&s!=e.mover)return!0}function fa(e){return e.lineSpace.offsetTop}function il(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function iu(e){if(e.cachedPaddingH)return e.cachedPaddingH;var n=ye(e.measure,N("pre","x","CodeMirror-line-like")),s=window.getComputedStyle?window.getComputedStyle(n):n.currentStyle,i={left:parseInt(s.paddingLeft),right:parseInt(s.paddingRight)};return!isNaN(i.left)&&!isNaN(i.right)&&(e.cachedPaddingH=i),i}function ui(e){return Ht-e.display.nativeBarWidth}function cs(e){return e.display.scroller.clientWidth-ui(e)-e.display.barWidth}function ds(e){return e.display.scroller.clientHeight-ui(e)-e.display.barHeight}function Vd(e,n,s){var i=e.options.lineWrapping,o=i&&cs(e);if(!n.measure.heights||i&&n.measure.width!=o){var h=n.measure.heights=[];if(i){n.measure.width=o;for(var m=n.text.firstChild.getClientRects(),x=0;x<m.length-1;x++){var w=m[x],S=m[x+1];Math.abs(w.bottom-S.bottom)>2&&h.push((w.bottom+S.top)/2-s.top)}}h.push(s.bottom-s.top)}}function vc(e,n,s){if(e.line==n)return{map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var i=0;i<e.rest.length;i++)if(e.rest[i]==n)return{map:e.measure.maps[i],cache:e.measure.caches[i]};for(var o=0;o<e.rest.length;o++)if(C(e.rest[o])>s)return{map:e.measure.maps[o],cache:e.measure.caches[o],before:!0}}}function Jd(e,n){n=Rt(n);var s=C(n),i=e.display.externalMeasured=new pc(e.doc,n,s);i.lineN=s;var o=i.built=Ql(e,i);return i.text=o.pre,ye(e.display.lineMeasure,o.pre),i}function su(e,n,s,i){return Lr(e,Si(e,n),s,i)}function sl(e,n){if(n>=e.display.viewFrom&&n<e.display.viewTo)return e.display.view[Ci(e,n)];var s=e.display.externalMeasured;if(s&&n>=s.lineN&&n<s.lineN+s.size)return s}function Si(e,n){var s=C(n),i=sl(e,s);i&&!i.text?i=null:i&&i.changes&&(fc(e,i,s,dl(e)),e.curOp.forceUpdate=!0),i||(i=Jd(e,n));var o=vc(i,n,s);return{line:n,view:i,rect:null,map:o.map,cache:o.cache,before:o.before,hasHeights:!1}}function Lr(e,n,s,i,o){n.before&&(s=-1);var h=s+(i||""),m;return n.cache.hasOwnProperty(h)?m=n.cache[h]:(n.rect||(n.rect=n.view.text.getBoundingClientRect()),n.hasHeights||(Vd(e,n.view,n.rect),n.hasHeights=!0),m=bc(e,n,s,i),m.bogus||(n.cache[h]=m)),{left:m.left,right:m.right,top:o?m.rtop:m.top,bottom:o?m.rbottom:m.bottom}}var xc={left:0,right:0,top:0,bottom:0};function ma(e,n,s){for(var i,o,h,m,x,w,S=0;S<e.length;S+=3)if(x=e[S],w=e[S+1],n<x?(o=0,h=1,m="left"):n<w?(o=n-x,h=o+1):(S==e.length-3||n==w&&e[S+3]>n)&&(h=w-x,o=h-1,n>=w&&(m="right")),o!=null){if(i=e[S+2],x==w&&s==(i.insertLeft?"left":"right")&&(m=s),s=="left"&&o==0)for(;S&&e[S-2]==e[S-3]&&e[S-1].insertLeft;)i=e[(S-=3)+2],m="left";if(s=="right"&&o==w-x)for(;S<e.length-3&&e[S+3]==e[S+4]&&!e[S+5].insertLeft;)i=e[(S+=3)+2],m="right";break}return{node:i,start:o,end:h,collapse:m,coverStart:x,coverEnd:w}}function Xd(e,n){var s=xc;if(n=="left")for(var i=0;i<e.length&&(s=e[i]).left==s.right;i++);else for(var o=e.length-1;o>=0&&(s=e[o]).left==s.right;o--);return s}function bc(e,n,s,i){var o=ma(n.map,s,i),h=o.node,m=o.start,x=o.end,w=o.collapse,S;if(h.nodeType==3){for(var z=0;z<4;z++){for(;m&&pt(n.line.text.charAt(o.coverStart+m));)--m;for(;o.coverStart+x<o.coverEnd&&pt(n.line.text.charAt(o.coverStart+x));)++x;if(k&&E<9&&m==0&&x==o.coverEnd-o.coverStart?S=h.parentNode.getBoundingClientRect():S=Xd(q(h,m,x).getClientRects(),i),S.left||S.right||m==0)break;x=m,m=m-1,w="right"}k&&E<11&&(S=ou(e.display.measure,S))}else{m>0&&(w=i="right");var U;e.options.lineWrapping&&(U=h.getClientRects()).length>1?S=U[i=="right"?U.length-1:0]:S=h.getBoundingClientRect()}if(k&&E<9&&!m&&(!S||!S.left&&!S.right)){var re=h.parentNode.getClientRects()[0];re?S={left:re.left,right:re.left+ps(e.display),top:re.top,bottom:re.bottom}:S=xc}for(var Z=S.top-n.rect.top,me=S.bottom-n.rect.top,ve=(Z+me)/2,Ae=n.view.measure.heights,Le=0;Le<Ae.length-1&&!(ve<Ae[Le]);Le++);var ze=Le?Ae[Le-1]:0,Me=Ae[Le],Ye={left:(w=="right"?S.right:S.left)-n.rect.left,right:(w=="left"?S.left:S.right)-n.rect.left,top:ze,bottom:Me};return!S.left&&!S.right&&(Ye.bogus=!0),e.options.singleCursorHeightPerLine||(Ye.rtop=Z,Ye.rbottom=me),Ye}function ou(e,n){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!yo(e))return n;var s=screen.logicalXDPI/screen.deviceXDPI,i=screen.logicalYDPI/screen.deviceYDPI;return{left:n.left*s,right:n.right*s,top:n.top*i,bottom:n.bottom*i}}function ol(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var n=0;n<e.rest.length;n++)e.measure.caches[n]={}}function au(e){e.display.externalMeasure=null,se(e.display.lineMeasure);for(var n=0;n<e.display.view.length;n++)ol(e.display.view[n])}function So(e){au(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function lu(e){return R&&F?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function wc(e){return R&&F?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function uu(e){var n=Rt(e),s=n.widgets,i=0;if(s)for(var o=0;o<s.length;++o)s[o].above&&(i+=Ui(s[o]));return i}function al(e,n,s,i,o){if(!o){var h=uu(n);s.top+=h,s.bottom+=h}if(i=="line")return s;i||(i="local");var m=_n(n);if(i=="local"?m+=fa(e.display):m-=e.display.viewOffset,i=="page"||i=="window"){var x=e.display.lineSpace.getBoundingClientRect();m+=x.top+(i=="window"?0:wc(Se(e)));var w=x.left+(i=="window"?0:lu(Se(e)));s.left+=w,s.right+=w}return s.top+=m,s.bottom+=m,s}function kc(e,n,s){if(s=="div")return n;var i=n.left,o=n.top;if(s=="page")i-=lu(Se(e)),o-=wc(Se(e));else if(s=="local"||!s){var h=e.display.sizer.getBoundingClientRect();i+=h.left,o+=h.top}var m=e.display.lineSpace.getBoundingClientRect();return{left:i-m.left,top:o-m.top}}function ll(e,n,s,i,o){return i||(i=Qe(e.doc,n.line)),al(e,i,su(e,i,n.ch,o),s)}function Cn(e,n,s,i,o,h){i=i||Qe(e.doc,n.line),o||(o=Si(e,i));function m(me,ve){var Ae=Lr(e,o,me,ve?"right":"left",h);return ve?Ae.left=Ae.right:Ae.right=Ae.left,al(e,i,Ae,s)}var x=xt(i,e.doc.direction),w=n.ch,S=n.sticky;if(w>=i.text.length?(w=i.text.length,S="before"):w<=0&&(w=0,S="after"),!x)return m(S=="before"?w-1:w,S=="before");function z(me,ve,Ae){var Le=x[ve],ze=Le.level==1;return m(Ae?me-1:me,ze!=Ae)}var U=ar(x,w,S),re=Hr,Z=z(w,U,S=="before");return re!=null&&(Z.other=z(w,re,S!="before")),Z}function _o(e,n){var s=0;n=gt(e.doc,n),e.options.lineWrapping||(s=ps(e.display)*n.ch);var i=Qe(e.doc,n.line),o=_n(i)+fa(e.display);return{left:s,right:s,top:o,bottom:o+i.height}}function ul(e,n,s,i,o){var h=de(e,n,s);return h.xRel=o,i&&(h.outside=i),h}function cl(e,n,s){var i=e.doc;if(s+=e.display.viewOffset,s<0)return ul(i.first,0,null,-1,-1);var o=B(i,s),h=i.first+i.size-1;if(o>h)return ul(i.first+i.size-1,Qe(i,h).text.length,null,1,1);n<0&&(n=0);for(var m=Qe(i,o);;){var x=Qd(e,m,o,n,s),w=$n(m,x.ch+(x.xRel>0||x.outside>0?1:0));if(!w)return x;var S=w.find(1);if(S.line==o)return S;m=Qe(i,o=S.line)}}function cu(e,n,s,i){i-=uu(n);var o=n.text.length,h=Jn(function(m){return Lr(e,s,m-1).bottom<=i},o,0);return o=Jn(function(m){return Lr(e,s,m).top>i},h,o),{begin:h,end:o}}function du(e,n,s,i){s||(s=Si(e,n));var o=al(e,n,Lr(e,s,i),"line").top;return cu(e,n,s,o)}function ga(e,n,s,i){return e.bottom<=s?!1:e.top>s?!0:(i?e.left:e.right)>n}function Qd(e,n,s,i,o){o-=_n(n);var h=Si(e,n),m=uu(n),x=0,w=n.text.length,S=!0,z=xt(n,e.doc.direction);if(z){var U=(e.options.lineWrapping?Co:Zd)(e,n,s,h,z,i,o);S=U.level!=1,x=S?U.from:U.to-1,w=S?U.to:U.from-1}var re=null,Z=null,me=Jn(function(lt){var Xe=Lr(e,h,lt);return Xe.top+=m,Xe.bottom+=m,ga(Xe,i,o,!1)?(Xe.top<=o&&Xe.left<=i&&(re=lt,Z=Xe),!0):!1},x,w),ve,Ae,Le=!1;if(Z){var ze=i-Z.left<Z.right-i,Me=ze==S;me=re+(Me?0:1),Ae=Me?"after":"before",ve=ze?Z.left:Z.right}else{!S&&(me==w||me==x)&&me++,Ae=me==0?"after":me==n.text.length?"before":Lr(e,h,me-(S?1:0)).bottom+m<=o==S?"after":"before";var Ye=Cn(e,de(s,me,Ae),"line",n,h);ve=Ye.left,Le=o<Ye.top?-1:o>=Ye.bottom?1:0}return me=mn(n.text,me,1),ul(s,me,Ae,Le,i-ve)}function Zd(e,n,s,i,o,h,m){var x=Jn(function(U){var re=o[U],Z=re.level!=1;return ga(Cn(e,de(s,Z?re.to:re.from,Z?"before":"after"),"line",n,i),h,m,!0)},0,o.length-1),w=o[x];if(x>0){var S=w.level!=1,z=Cn(e,de(s,S?w.from:w.to,S?"after":"before"),"line",n,i);ga(z,h,m,!0)&&z.top>m&&(w=o[x-1])}return w}function Co(e,n,s,i,o,h,m){var x=cu(e,n,i,m),w=x.begin,S=x.end;/\s/.test(n.text.charAt(S-1))&&S--;for(var z=null,U=null,re=0;re<o.length;re++){var Z=o[re];if(!(Z.from>=S||Z.to<=w)){var me=Z.level!=1,ve=Lr(e,i,me?Math.min(S,Z.to)-1:Math.max(w,Z.from)).right,Ae=ve<h?h-ve+1e9:ve-h;(!z||U>Ae)&&(z=Z,U=Ae)}}return z||(z=o[o.length-1]),z.from<w&&(z={from:w,to:z.to,level:z.level}),z.to>S&&(z={from:z.from,to:S,level:z.level}),z}var Ki;function _i(e){if(e.cachedTextHeight!=null)return e.cachedTextHeight;if(Ki==null){Ki=N("pre",null,"CodeMirror-line-like");for(var n=0;n<49;++n)Ki.appendChild(document.createTextNode("x")),Ki.appendChild(N("br"));Ki.appendChild(document.createTextNode("x"))}ye(e.measure,Ki);var s=Ki.offsetHeight/50;return s>3&&(e.cachedTextHeight=s),se(e.measure),s||1}function ps(e){if(e.cachedCharWidth!=null)return e.cachedCharWidth;var n=N("span","xxxxxxxxxx"),s=N("pre",[n],"CodeMirror-line-like");ye(e.measure,s);var i=n.getBoundingClientRect(),o=(i.right-i.left)/10;return o>2&&(e.cachedCharWidth=o),o||10}function dl(e){for(var n=e.display,s={},i={},o=n.gutters.clientLeft,h=n.gutters.firstChild,m=0;h;h=h.nextSibling,++m){var x=e.display.gutterSpecs[m].className;s[x]=h.offsetLeft+h.clientLeft+o,i[x]=h.clientWidth}return{fixedPos:To(n),gutterTotalWidth:n.gutters.offsetWidth,gutterLeft:s,gutterWidth:i,wrapperWidth:n.wrapper.clientWidth}}function To(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Ds(e){var n=_i(e.display),s=e.options.lineWrapping,i=s&&Math.max(5,e.display.scroller.clientWidth/ps(e.display)-3);return function(o){if(li(e.doc,o))return 0;var h=0;if(o.widgets)for(var m=0;m<o.widgets.length;m++)o.widgets[m].height&&(h+=o.widgets[m].height);return s?h+(Math.ceil(o.text.length/i)||1)*n:h+n}}function ya(e){var n=e.doc,s=Ds(e);n.iter(function(i){var o=s(i);o!=i.height&&On(i,o)})}function hs(e,n,s,i){var o=e.display;if(!s&&Br(n).getAttribute("cm-not-content")=="true")return null;var h,m,x=o.lineSpace.getBoundingClientRect();try{h=n.clientX-x.left,m=n.clientY-x.top}catch{return null}var w=cl(e,h,m),S;if(i&&w.xRel>0&&(S=Qe(e.doc,w.line).text).length==w.ch){var z=Ke(S,S.length,e.options.tabSize)-S.length;w=de(w.line,Math.max(0,Math.round((h-iu(e.display).left)/ps(e.display))-z))}return w}function Ci(e,n){if(n>=e.display.viewTo||(n-=e.display.viewFrom,n<0))return null;for(var s=e.display.view,i=0;i<s.length;i++)if(n-=s[i].size,n<0)return i}function er(e,n,s,i){n==null&&(n=e.doc.first),s==null&&(s=e.doc.first+e.doc.size),i||(i=0);var o=e.display;if(i&&s<o.viewTo&&(o.updateLineNumbers==null||o.updateLineNumbers>n)&&(o.updateLineNumbers=n),e.curOp.viewChanged=!0,n>=o.viewTo)Mn&&tl(e.doc,n)<o.viewTo&&Gi(e);else if(s<=o.viewFrom)Mn&&la(e.doc,s+i)>o.viewFrom?Gi(e):(o.viewFrom+=i,o.viewTo+=i);else if(n<=o.viewFrom&&s>=o.viewTo)Gi(e);else if(n<=o.viewFrom){var h=va(e,s,s+i,1);h?(o.view=o.view.slice(h.index),o.viewFrom=h.lineN,o.viewTo+=i):Gi(e)}else if(s>=o.viewTo){var m=va(e,n,n,-1);m?(o.view=o.view.slice(0,m.index),o.viewTo=m.lineN):Gi(e)}else{var x=va(e,n,n,-1),w=va(e,s,s+i,1);x&&w?(o.view=o.view.slice(0,x.index).concat(rl(e,x.lineN,w.lineN)).concat(o.view.slice(w.index)),o.viewTo+=i):Gi(e)}var S=o.externalMeasured;S&&(s<S.lineN?S.lineN+=i:n<S.lineN+S.size&&(o.externalMeasured=null))}function $i(e,n,s){e.curOp.viewChanged=!0;var i=e.display,o=e.display.externalMeasured;if(o&&n>=o.lineN&&n<o.lineN+o.size&&(i.externalMeasured=null),!(n<i.viewFrom||n>=i.viewTo)){var h=i.view[Ci(e,n)];if(h.node!=null){var m=h.changes||(h.changes=[]);$e(m,s)==-1&&m.push(s)}}}function Gi(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function va(e,n,s,i){var o=Ci(e,n),h,m=e.display.view;if(!Mn||s==e.doc.first+e.doc.size)return{index:o,lineN:s};for(var x=e.display.viewFrom,w=0;w<o;w++)x+=m[w].size;if(x!=n){if(i>0){if(o==m.length-1)return null;h=x+m[o].size-n,o++}else h=x-n;n+=h,s+=h}for(;tl(e.doc,s)!=s;){if(o==(i<0?0:m.length-1))return null;s+=i*m[o-(i<0?1:0)].size,o+=i}return{index:o,lineN:s}}function Sc(e,n,s){var i=e.display,o=i.view;o.length==0||n>=i.viewTo||s<=i.viewFrom?(i.view=rl(e,n,s),i.viewFrom=n):(i.viewFrom>n?i.view=rl(e,n,i.viewFrom).concat(i.view):i.viewFrom<n&&(i.view=i.view.slice(Ci(e,n))),i.viewFrom=n,i.viewTo<s?i.view=i.view.concat(rl(e,i.viewTo,s)):i.viewTo>s&&(i.view=i.view.slice(0,Ci(e,s)))),i.viewTo=s}function pu(e){for(var n=e.display.view,s=0,i=0;i<n.length;i++){var o=n[i];!o.hidden&&(!o.node||o.changes)&&++s}return s}function Gr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function pl(e,n){n===void 0&&(n=!0);var s=e.doc,i={},o=i.cursors=document.createDocumentFragment(),h=i.selection=document.createDocumentFragment(),m=e.options.$customCursor;m&&(n=!0);for(var x=0;x<s.sel.ranges.length;x++)if(!(!n&&x==s.sel.primIndex)){var w=s.sel.ranges[x];if(!(w.from().line>=e.display.viewTo||w.to().line<e.display.viewFrom)){var S=w.empty();if(m){var z=m(e,w);z&&xa(e,z,o)}else(S||e.options.showCursorWhenSelecting)&&xa(e,w.head,o);S||ep(e,w,h)}}return i}function xa(e,n,s){var i=Cn(e,n,"div",null,null,!e.options.singleCursorHeightPerLine),o=s.appendChild(N("div"," ","CodeMirror-cursor"));if(o.style.left=i.left+"px",o.style.top=i.top+"px",o.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var h=ll(e,n,"div",null,null),m=h.right-h.left;o.style.width=(m>0?m:e.defaultCharWidth())+"px"}if(i.other){var x=s.appendChild(N("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));x.style.display="",x.style.left=i.other.left+"px",x.style.top=i.other.top+"px",x.style.height=(i.other.bottom-i.other.top)*.85+"px"}}function hl(e,n){return e.top-n.top||e.left-n.left}function ep(e,n,s){var i=e.display,o=e.doc,h=document.createDocumentFragment(),m=iu(e.display),x=m.left,w=Math.max(i.sizerWidth,cs(e)-i.sizer.offsetLeft)-m.right,S=o.direction=="ltr";function z(Me,Ye,lt,Xe){Ye<0&&(Ye=0),Ye=Math.round(Ye),Xe=Math.round(Xe),h.appendChild(N("div",null,"CodeMirror-selected","position: absolute; left: "+Me+`px;
                             top: `+Ye+"px; width: "+(lt??w-Me)+`px;
                             height: `+(Xe-Ye)+"px"))}function U(Me,Ye,lt){var Xe=Qe(o,Me),kt=Xe.text.length,jt,Bn;function rn(vn,br){return ll(e,de(Me,vn),"div",Xe,br)}function xr(vn,br,jn){var xn=du(e,Xe,null,vn),zt=br=="ltr"==(jn=="after")?"left":"right",dt=jn=="after"?xn.begin:xn.end-(/\s/.test(Xe.text.charAt(xn.end-1))?2:1);return rn(dt,zt)[zt]}var rr=xt(Xe,o.direction);return Cr(rr,Ye||0,lt??kt,function(vn,br,jn,xn){var zt=jn=="ltr",dt=rn(vn,zt?"left":"right"),Ft=rn(br-1,zt?"right":"left"),sn=Ye==null&&vn==0,ln=lt==null&&br==kt,$t=xn==0,wr=!rr||xn==rr.length-1;if(Ft.top-dt.top<=3){var Nt=(S?sn:ln)&&$t,oo=(S?ln:sn)&&wr,kr=Nt?x:(zt?dt:Ft).left,Ii=oo?w:(zt?Ft:dt).right;z(kr,dt.top,Ii-kr,dt.bottom)}else{var es,An,Un,Ua;zt?(es=S&&sn&&$t?x:dt.left,An=S?w:xr(vn,jn,"before"),Un=S?x:xr(br,jn,"after"),Ua=S&&ln&&wr?w:Ft.right):(es=S?xr(vn,jn,"before"):x,An=!S&&sn&&$t?w:dt.right,Un=!S&&ln&&wr?x:Ft.left,Ua=S?xr(br,jn,"after"):w),z(es,dt.top,An-es,dt.bottom),dt.bottom<Ft.top&&z(x,dt.bottom,null,Ft.top),z(Un,Ft.top,Ua-Un,Ft.bottom)}(!jt||hl(dt,jt)<0)&&(jt=dt),hl(Ft,jt)<0&&(jt=Ft),(!Bn||hl(dt,Bn)<0)&&(Bn=dt),hl(Ft,Bn)<0&&(Bn=Ft)}),{start:jt,end:Bn}}var re=n.from(),Z=n.to();if(re.line==Z.line)U(re.line,re.ch,Z.ch);else{var me=Qe(o,re.line),ve=Qe(o,Z.line),Ae=Rt(me)==Rt(ve),Le=U(re.line,re.ch,Ae?me.text.length+1:null).end,ze=U(Z.line,Ae?0:null,Z.ch).start;Ae&&(Le.top<ze.top-2?(z(Le.right,Le.top,null,Le.bottom),z(x,ze.top,ze.left,ze.bottom)):z(Le.right,Le.top,ze.left-Le.right,Le.bottom)),Le.bottom<ze.top&&z(x,Le.bottom,null,ze.top)}s.appendChild(h)}function zs(e){if(e.state.focused){var n=e.display;clearInterval(n.blinker);var s=!0;n.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?n.blinker=setInterval(function(){e.hasFocus()||Ut(e),n.cursorDiv.style.visibility=(s=!s)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(n.cursorDiv.style.visibility="hidden")}}function _c(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||ml(e))}function fl(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Ut(e))},100)}function ml(e,n){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),e.options.readOnly!="nocursor"&&(e.state.focused||(It(e,"focus",e,n),e.state.focused=!0,G(e.display.wrapper,"CodeMirror-focused"),!e.curOp&&e.display.selForContextMenu!=e.doc.sel&&(e.display.input.reset(),P&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),zs(e))}function Ut(e,n){e.state.delayingBlurEvent||(e.state.focused&&(It(e,"blur",e,n),e.state.focused=!1,Ce(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function jo(e){for(var n=e.display,s=n.lineDiv.offsetTop,i=Math.max(0,n.scroller.getBoundingClientRect().top),o=n.lineDiv.getBoundingClientRect().top,h=0,m=0;m<n.view.length;m++){var x=n.view[m],w=e.options.lineWrapping,S=void 0,z=0;if(!x.hidden){if(o+=x.line.height,k&&E<8){var U=x.node.offsetTop+x.node.offsetHeight;S=U-s,s=U}else{var re=x.node.getBoundingClientRect();S=re.bottom-re.top,!w&&x.text.firstChild&&(z=x.text.firstChild.getBoundingClientRect().right-re.left-1)}var Z=x.line.height-S;if((Z>.005||Z<-.005)&&(o<i&&(h-=Z),On(x.line,S),ba(x.line),x.rest))for(var me=0;me<x.rest.length;me++)ba(x.rest[me]);if(z>e.display.sizerWidth){var ve=Math.ceil(z/ps(e.display));ve>e.display.maxLineLength&&(e.display.maxLineLength=ve,e.display.maxLine=x.line,e.display.maxLineChanged=!0)}}}Math.abs(h)>2&&(n.scroller.scrollTop+=h)}function ba(e){if(e.widgets)for(var n=0;n<e.widgets.length;++n){var s=e.widgets[n],i=s.node.parentNode;i&&(s.height=i.offsetHeight)}}function fs(e,n,s){var i=s&&s.top!=null?Math.max(0,s.top):e.scroller.scrollTop;i=Math.floor(i-fa(e));var o=s&&s.bottom!=null?s.bottom:i+e.wrapper.clientHeight,h=B(n,i),m=B(n,o);if(s&&s.ensure){var x=s.ensure.from.line,w=s.ensure.to.line;x<h?(h=x,m=B(n,_n(Qe(n,x))+e.wrapper.clientHeight)):Math.min(w,n.lastLine())>=m&&(h=B(n,_n(Qe(n,w))-e.wrapper.clientHeight),m=w)}return{from:h,to:Math.max(m,h+1)}}function Cc(e,n){if(!Ot(e,"scrollCursorIntoView")){var s=e.display,i=s.sizer.getBoundingClientRect(),o=null,h=s.wrapper.ownerDocument;if(n.top+i.top<0?o=!0:n.bottom+i.top>(h.defaultView.innerHeight||h.documentElement.clientHeight)&&(o=!1),o!=null&&!D){var m=N("div","​",null,`position: absolute;
                         top: `+(n.top-s.viewOffset-fa(e.display))+`px;
                         height: `+(n.bottom-n.top+ui(e)+s.barHeight)+`px;
                         left: `+n.left+"px; width: "+Math.max(2,n.right-n.left)+"px;");e.display.lineSpace.appendChild(m),m.scrollIntoView(o),e.display.lineSpace.removeChild(m)}}}function hu(e,n,s,i){i==null&&(i=0);var o;!e.options.lineWrapping&&n==s&&(s=n.sticky=="before"?de(n.line,n.ch+1,"before"):n,n=n.ch?de(n.line,n.sticky=="before"?n.ch-1:n.ch,"after"):n);for(var h=0;h<5;h++){var m=!1,x=Cn(e,n),w=!s||s==n?x:Cn(e,s);o={left:Math.min(x.left,w.left),top:Math.min(x.top,w.top)-i,right:Math.max(x.left,w.left),bottom:Math.max(x.bottom,w.bottom)+i};var S=No(e,o),z=e.doc.scrollTop,U=e.doc.scrollLeft;if(S.scrollTop!=null&&(gs(e,S.scrollTop),Math.abs(e.doc.scrollTop-z)>1&&(m=!0)),S.scrollLeft!=null&&(Yi(e,S.scrollLeft),Math.abs(e.doc.scrollLeft-U)>1&&(m=!0)),!m)break}return o}function wa(e,n){var s=No(e,n);s.scrollTop!=null&&gs(e,s.scrollTop),s.scrollLeft!=null&&Yi(e,s.scrollLeft)}function No(e,n){var s=e.display,i=_i(e.display);n.top<0&&(n.top=0);var o=e.curOp&&e.curOp.scrollTop!=null?e.curOp.scrollTop:s.scroller.scrollTop,h=ds(e),m={};n.bottom-n.top>h&&(n.bottom=n.top+h);var x=e.doc.height+il(s),w=n.top<i,S=n.bottom>x-i;if(n.top<o)m.scrollTop=w?0:n.top;else if(n.bottom>o+h){var z=Math.min(n.top,(S?x:n.bottom)-h);z!=o&&(m.scrollTop=z)}var U=e.options.fixedGutter?0:s.gutters.offsetWidth,re=e.curOp&&e.curOp.scrollLeft!=null?e.curOp.scrollLeft:s.scroller.scrollLeft-U,Z=cs(e)-s.gutters.offsetWidth,me=n.right-n.left>Z;return me&&(n.right=n.left+Z),n.left<10?m.scrollLeft=0:n.left<re?m.scrollLeft=Math.max(0,n.left+U-(me?0:10)):n.right>Z+re-3&&(m.scrollLeft=n.right+(me?0:10)-Z),m}function ms(e,n){n!=null&&(Sa(e),e.curOp.scrollTop=(e.curOp.scrollTop==null?e.doc.scrollTop:e.curOp.scrollTop)+n)}function Fs(e){Sa(e);var n=e.getCursor();e.curOp.scrollToPos={from:n,to:n,margin:e.options.cursorScrollMargin}}function ka(e,n,s){(n!=null||s!=null)&&Sa(e),n!=null&&(e.curOp.scrollLeft=n),s!=null&&(e.curOp.scrollTop=s)}function tp(e,n){Sa(e),e.curOp.scrollToPos=n}function Sa(e){var n=e.curOp.scrollToPos;if(n){e.curOp.scrollToPos=null;var s=_o(e,n.from),i=_o(e,n.to);_a(e,s,i,n.margin)}}function _a(e,n,s,i){var o=No(e,{left:Math.min(n.left,s.left),top:Math.min(n.top,s.top)-i,right:Math.max(n.right,s.right),bottom:Math.max(n.bottom,s.bottom)+i});ka(e,o.scrollLeft,o.scrollTop)}function gs(e,n){Math.abs(e.doc.scrollTop-n)<2||(y||Xi(e,{top:n}),gl(e,n,!0),y&&Xi(e),Bs(e,100))}function gl(e,n,s){n=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,n)),!(e.display.scroller.scrollTop==n&&!s)&&(e.doc.scrollTop=n,e.display.scrollbars.setScrollTop(n),e.display.scroller.scrollTop!=n&&(e.display.scroller.scrollTop=n))}function Yi(e,n,s,i){n=Math.max(0,Math.min(n,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),!((s?n==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-n)<2)&&!i)&&(e.doc.scrollLeft=n,mu(e),e.display.scroller.scrollLeft!=n&&(e.display.scroller.scrollLeft=n),e.display.scrollbars.setScrollLeft(n))}function Ws(e){var n=e.display,s=n.gutters.offsetWidth,i=Math.round(e.doc.height+il(e.display));return{clientHeight:n.scroller.clientHeight,viewHeight:n.wrapper.clientHeight,scrollWidth:n.scroller.scrollWidth,clientWidth:n.scroller.clientWidth,viewWidth:n.wrapper.clientWidth,barLeft:e.options.fixedGutter?s:0,docHeight:i,scrollHeight:i+ui(e)+n.barHeight,nativeBarWidth:n.nativeBarWidth,gutterWidth:s}}var Vi=function(e,n,s){this.cm=s;var i=this.vert=N("div",[N("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),o=this.horiz=N("div",[N("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=o.tabIndex=-1,e(i),e(o),it(i,"scroll",function(){i.clientHeight&&n(i.scrollTop,"vertical")}),it(o,"scroll",function(){o.clientWidth&&n(o.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,k&&E<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Vi.prototype.update=function(e){var n=e.scrollWidth>e.clientWidth+1,s=e.scrollHeight>e.clientHeight+1,i=e.nativeBarWidth;if(s){this.vert.style.display="block",this.vert.style.bottom=n?i+"px":"0";var o=e.viewHeight-(n?i:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+o)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(n){this.horiz.style.display="block",this.horiz.style.right=s?i+"px":"0",this.horiz.style.left=e.barLeft+"px";var h=e.viewWidth-e.barLeft-(s?i:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+h)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(i==0&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:s?i:0,bottom:n?i:0}},Vi.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Vi.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Vi.prototype.zeroWidthHack=function(){var e=Y&&!ae?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new tt,this.disableVert=new tt},Vi.prototype.enableZeroWidthBar=function(e,n,s){e.style.visibility="";function i(){var o=e.getBoundingClientRect(),h=s=="vert"?document.elementFromPoint(o.right-1,(o.top+o.bottom)/2):document.elementFromPoint((o.right+o.left)/2,o.bottom-1);h!=e?e.style.visibility="hidden":n.set(1e3,i)}n.set(1e3,i)},Vi.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var Ca=function(){};Ca.prototype.update=function(){return{bottom:0,right:0}},Ca.prototype.setScrollLeft=function(){},Ca.prototype.setScrollTop=function(){},Ca.prototype.clear=function(){};function Hs(e,n){n||(n=Ws(e));var s=e.display.barWidth,i=e.display.barHeight;Tc(e,n);for(var o=0;o<4&&s!=e.display.barWidth||i!=e.display.barHeight;o++)s!=e.display.barWidth&&e.options.lineWrapping&&jo(e),Tc(e,Ws(e)),s=e.display.barWidth,i=e.display.barHeight}function Tc(e,n){var s=e.display,i=s.scrollbars.update(n);s.sizer.style.paddingRight=(s.barWidth=i.right)+"px",s.sizer.style.paddingBottom=(s.barHeight=i.bottom)+"px",s.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(s.scrollbarFiller.style.display="block",s.scrollbarFiller.style.height=i.bottom+"px",s.scrollbarFiller.style.width=i.right+"px"):s.scrollbarFiller.style.display="",i.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(s.gutterFiller.style.display="block",s.gutterFiller.style.height=i.bottom+"px",s.gutterFiller.style.width=n.gutterWidth+"px"):s.gutterFiller.style.display=""}var jc={native:Vi,null:Ca};function yl(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Ce(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new jc[e.options.scrollbarStyle](function(n){e.display.wrapper.insertBefore(n,e.display.scrollbarFiller),it(n,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),n.setAttribute("cm-not-content","true")},function(n,s){s=="horizontal"?Yi(e,n):gs(e,n)},e),e.display.scrollbars.addClass&&G(e.display.wrapper,e.display.scrollbars.addClass)}var ys=0;function vs(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++ys,markArrays:null},hc(e.curOp)}function Yr(e){var n=e.curOp;n&&qd(n,function(s){for(var i=0;i<s.ops.length;i++)s.ops[i].cm.curOp=null;Ti(s)})}function Ti(e){for(var n=e.ops,s=0;s<n.length;s++)Ta(n[s]);for(var i=0;i<n.length;i++)Ji(n[i]);for(var o=0;o<n.length;o++)fu(n[o]);for(var h=0;h<n.length;h++)np(n[h]);for(var m=0;m<n.length;m++)rp(n[m])}function Ta(e){var n=e.cm,s=n.display;tn(n),e.updateMaxLine&&ua(n),e.mustUpdate=e.viewChanged||e.forceUpdate||e.scrollTop!=null||e.scrollToPos&&(e.scrollToPos.from.line<s.viewFrom||e.scrollToPos.to.line>=s.viewTo)||s.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new ci(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Ji(e){e.updatedDisplay=e.mustUpdate&&Gn(e.cm,e.update)}function fu(e){var n=e.cm,s=n.display;e.updatedDisplay&&jo(n),e.barMeasure=Ws(n),s.maxLineChanged&&!n.options.lineWrapping&&(e.adjustWidthTo=su(n,s.maxLine,s.maxLine.text.length).left+3,n.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(s.scroller.clientWidth,s.sizer.offsetLeft+e.adjustWidthTo+ui(n)+n.display.barWidth),e.maxScrollLeft=Math.max(0,s.sizer.offsetLeft+e.adjustWidthTo-cs(n))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=s.input.prepareSelection())}function np(e){var n=e.cm;e.adjustWidthTo!=null&&(n.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<n.doc.scrollLeft&&Yi(n,Math.min(n.display.scroller.scrollLeft,e.maxScrollLeft),!0),n.display.maxLineChanged=!1);var s=e.focus&&e.focus==A(De(n));e.preparedSelection&&n.display.input.showSelection(e.preparedSelection,s),(e.updatedDisplay||e.startHeight!=n.doc.height)&&Hs(n,e.barMeasure),e.updatedDisplay&&Po(n,e.barMeasure),e.selectionChanged&&zs(n),n.state.focused&&e.updateInput&&n.display.input.reset(e.typing),s&&_c(e.cm)}function rp(e){var n=e.cm,s=n.display,i=n.doc;if(e.updatedDisplay&&mr(n,e.update),s.wheelStartX!=null&&(e.scrollTop!=null||e.scrollLeft!=null||e.scrollToPos)&&(s.wheelStartX=s.wheelStartY=null),e.scrollTop!=null&&gl(n,e.scrollTop,e.forceScroll),e.scrollLeft!=null&&Yi(n,e.scrollLeft,!0,!0),e.scrollToPos){var o=hu(n,gt(i,e.scrollToPos.from),gt(i,e.scrollToPos.to),e.scrollToPos.margin);Cc(n,o)}var h=e.maybeHiddenMarkers,m=e.maybeUnhiddenMarkers;if(h)for(var x=0;x<h.length;++x)h[x].lines.length||It(h[x],"hide");if(m)for(var w=0;w<m.length;++w)m[w].lines.length&&It(m[w],"unhide");s.wrapper.offsetHeight&&(i.scrollTop=n.display.scroller.scrollTop),e.changeObjs&&It(n,"changes",n,e.changeObjs),e.update&&e.update.finish()}function Ln(e,n){if(e.curOp)return n();vs(e);try{return n()}finally{Yr(e)}}function dn(e,n){return function(){if(e.curOp)return n.apply(e,arguments);vs(e);try{return n.apply(e,arguments)}finally{Yr(e)}}}function Tn(e){return function(){if(this.curOp)return e.apply(this,arguments);vs(this);try{return e.apply(this,arguments)}finally{Yr(this)}}}function yn(e){return function(){var n=this.cm;if(!n||n.curOp)return e.apply(this,arguments);vs(n);try{return e.apply(this,arguments)}finally{Yr(n)}}}function Bs(e,n){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(n,Ie(Eo,e))}function Eo(e){var n=e.doc;if(!(n.highlightFrontier>=e.display.viewTo)){var s=+new Date+e.options.workTime,i=Et(e,n.highlightFrontier),o=[];n.iter(i.line,Math.min(n.first+n.size,e.display.viewTo+500),function(h){if(i.line>=e.display.viewFrom){var m=h.styles,x=h.text.length>e.options.maxHighlightLength?At(n.mode,i.state):null,w=As(e,h,i,!0);x&&(i.state=x),h.styles=w.styles;var S=h.styleClasses,z=w.classes;z?h.styleClasses=z:S&&(h.styleClasses=null);for(var U=!m||m.length!=h.styles.length||S!=z&&(!S||!z||S.bgClass!=z.bgClass||S.textClass!=z.textClass),re=0;!U&&re<m.length;++re)U=m[re]!=h.styles[re];U&&o.push(i.line),h.stateAfter=i.save(),i.nextLine()}else h.text.length<=e.options.maxHighlightLength&&Wi(e,h.text,i),h.stateAfter=i.line%5==0?i.save():null,i.nextLine();if(+new Date>s)return Bs(e,e.options.workDelay),!0}),n.highlightFrontier=i.line,n.modeFrontier=Math.max(n.modeFrontier,i.line),o.length&&Ln(e,function(){for(var h=0;h<o.length;h++)$i(e,o[h],"text")})}}var ci=function(e,n,s){var i=e.display;this.viewport=n,this.visible=fs(i,e.doc,n),this.editorIsHidden=!i.wrapper.offsetWidth,this.wrapperHeight=i.wrapper.clientHeight,this.wrapperWidth=i.wrapper.clientWidth,this.oldDisplayWidth=cs(e),this.force=s,this.dims=dl(e),this.events=[]};ci.prototype.signal=function(e,n){un(e,n)&&this.events.push(arguments)},ci.prototype.finish=function(){for(var e=0;e<this.events.length;e++)It.apply(null,this.events[e])};function tn(e){var n=e.display;!n.scrollbarsClipped&&n.scroller.offsetWidth&&(n.nativeBarWidth=n.scroller.offsetWidth-n.scroller.clientWidth,n.heightForcer.style.height=ui(e)+"px",n.sizer.style.marginBottom=-n.nativeBarWidth+"px",n.sizer.style.borderRightWidth=ui(e)+"px",n.scrollbarsClipped=!0)}function Qt(e){if(e.hasFocus())return null;var n=A(De(e));if(!n||!j(e.display.lineDiv,n))return null;var s={activeElt:n};if(window.getSelection){var i=ke(e).getSelection();i.anchorNode&&i.extend&&j(e.display.lineDiv,i.anchorNode)&&(s.anchorNode=i.anchorNode,s.anchorOffset=i.anchorOffset,s.focusNode=i.focusNode,s.focusOffset=i.focusOffset)}return s}function xs(e){if(!(!e||!e.activeElt||e.activeElt==A(qe(e.activeElt)))&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&j(document.body,e.anchorNode)&&j(document.body,e.focusNode))){var n=e.activeElt.ownerDocument,s=n.defaultView.getSelection(),i=n.createRange();i.setEnd(e.anchorNode,e.anchorOffset),i.collapse(!1),s.removeAllRanges(),s.addRange(i),s.extend(e.focusNode,e.focusOffset)}}function Gn(e,n){var s=e.display,i=e.doc;if(n.editorIsHidden)return Gi(e),!1;if(!n.force&&n.visible.from>=s.viewFrom&&n.visible.to<=s.viewTo&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo)&&s.renderedView==s.view&&pu(e)==0)return!1;gu(e)&&(Gi(e),n.dims=dl(e));var o=i.first+i.size,h=Math.max(n.visible.from-e.options.viewportMargin,i.first),m=Math.min(o,n.visible.to+e.options.viewportMargin);s.viewFrom<h&&h-s.viewFrom<20&&(h=Math.max(i.first,s.viewFrom)),s.viewTo>m&&s.viewTo-m<20&&(m=Math.min(o,s.viewTo)),Mn&&(h=tl(e.doc,h),m=la(e.doc,m));var x=h!=s.viewFrom||m!=s.viewTo||s.lastWrapHeight!=n.wrapperHeight||s.lastWrapWidth!=n.wrapperWidth;Sc(e,h,m),s.viewOffset=_n(Qe(e.doc,s.viewFrom)),e.display.mover.style.top=s.viewOffset+"px";var w=pu(e);if(!x&&w==0&&!n.force&&s.renderedView==s.view&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo))return!1;var S=Qt(e);return w>4&&(s.lineDiv.style.display="none"),Lo(e,s.updateLineNumbers,n.dims),w>4&&(s.lineDiv.style.display=""),s.renderedView=s.view,xs(S),se(s.cursorDiv),se(s.selectionDiv),s.gutters.style.height=s.sizer.style.minHeight=0,x&&(s.lastWrapHeight=n.wrapperHeight,s.lastWrapWidth=n.wrapperWidth,Bs(e,400)),s.updateLineNumbers=null,!0}function mr(e,n){for(var s=n.viewport,i=!0;;i=!1){if(!i||!e.options.lineWrapping||n.oldDisplayWidth==cs(e)){if(s&&s.top!=null&&(s={top:Math.min(e.doc.height+il(e.display)-ds(e),s.top)}),n.visible=fs(e.display,e.doc,s),n.visible.from>=e.display.viewFrom&&n.visible.to<=e.display.viewTo)break}else i&&(n.visible=fs(e.display,e.doc,s));if(!Gn(e,n))break;jo(e);var o=Ws(e);Gr(e),Hs(e,o),Po(e,o),n.force=!1}n.signal(e,"update",e),(e.display.viewFrom!=e.display.reportedViewFrom||e.display.viewTo!=e.display.reportedViewTo)&&(n.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Xi(e,n){var s=new ci(e,n);if(Gn(e,s)){jo(e),mr(e,s);var i=Ws(e);Gr(e),Hs(e,i),Po(e,i),s.finish()}}function Lo(e,n,s){var i=e.display,o=e.options.lineNumbers,h=i.lineDiv,m=h.firstChild;function x(me){var ve=me.nextSibling;return P&&Y&&e.display.currentWheelTarget==me?me.style.display="none":me.parentNode.removeChild(me),ve}for(var w=i.view,S=i.viewFrom,z=0;z<w.length;z++){var U=w[z];if(!U.hidden)if(!U.node||U.node.parentNode!=h){var re=Yd(e,U,S,s);h.insertBefore(re,m)}else{for(;m!=U.node;)m=x(m);var Z=o&&n!=null&&n<=S&&U.lineNumber;U.changes&&($e(U.changes,"gutter")>-1&&(Z=!1),fc(e,U,S,s)),Z&&(se(U.lineNumber),U.lineNumber.appendChild(document.createTextNode(Ee(e.options,S)))),m=U.node.nextSibling}S+=U.size}for(;m;)m=x(m)}function tr(e){var n=e.gutters.offsetWidth;e.sizer.style.marginLeft=n+"px",Dn(e,"gutterChanged",e)}function Po(e,n){e.display.sizer.style.minHeight=n.docHeight+"px",e.display.heightForcer.style.top=n.docHeight+"px",e.display.gutters.style.height=n.docHeight+e.display.barHeight+ui(e)+"px"}function mu(e){var n=e.display,s=n.view;if(!(!n.alignWidgets&&(!n.gutters.firstChild||!e.options.fixedGutter))){for(var i=To(n)-n.scroller.scrollLeft+e.doc.scrollLeft,o=n.gutters.offsetWidth,h=i+"px",m=0;m<s.length;m++)if(!s[m].hidden){e.options.fixedGutter&&(s[m].gutter&&(s[m].gutter.style.left=h),s[m].gutterBackground&&(s[m].gutterBackground.style.left=h));var x=s[m].alignable;if(x)for(var w=0;w<x.length;w++)x[w].style.left=h}e.options.fixedGutter&&(n.gutters.style.left=i+o+"px")}}function gu(e){if(!e.options.lineNumbers)return!1;var n=e.doc,s=Ee(e.options,n.first+n.size-1),i=e.display;if(s.length!=i.lineNumChars){var o=i.measure.appendChild(N("div",[N("div",s)],"CodeMirror-linenumber CodeMirror-gutter-elt")),h=o.firstChild.offsetWidth,m=o.offsetWidth-h;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(h,i.lineGutter.offsetWidth-m)+1,i.lineNumWidth=i.lineNumInnerWidth+m,i.lineNumChars=i.lineNumInnerWidth?s.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",tr(e.display),!0}return!1}function Ao(e,n){for(var s=[],i=!1,o=0;o<e.length;o++){var h=e[o],m=null;if(typeof h!="string"&&(m=h.style,h=h.className),h=="CodeMirror-linenumbers")if(n)i=!0;else continue;s.push({className:h,style:m})}return n&&!i&&s.push({className:"CodeMirror-linenumbers",style:null}),s}function yu(e){var n=e.gutters,s=e.gutterSpecs;se(n),e.lineGutter=null;for(var i=0;i<s.length;++i){var o=s[i],h=o.className,m=o.style,x=n.appendChild(N("div",null,"CodeMirror-gutter "+h));m&&(x.style.cssText=m),h=="CodeMirror-linenumbers"&&(e.lineGutter=x,x.style.width=(e.lineNumWidth||1)+"px")}n.style.display=s.length?"":"none",tr(e)}function Dr(e){yu(e.display),er(e),mu(e)}function vl(e,n,s,i){var o=this;this.input=s,o.scrollbarFiller=N("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=N("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=J("div",null,"CodeMirror-code"),o.selectionDiv=N("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=N("div",null,"CodeMirror-cursors"),o.measure=N("div",null,"CodeMirror-measure"),o.lineMeasure=N("div",null,"CodeMirror-measure"),o.lineSpace=J("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none");var h=J("div",[o.lineSpace],"CodeMirror-lines");o.mover=N("div",[h],null,"position: relative"),o.sizer=N("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=N("div",null,null,"position: absolute; height: "+Ht+"px; width: 1px;"),o.gutters=N("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=N("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=N("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),R&&V===105&&(o.wrapper.style.clipPath="inset(0px)"),o.wrapper.setAttribute("translate","no"),k&&E<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),!P&&!(y&&K)&&(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=n.first,o.reportedViewFrom=o.reportedViewTo=n.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,o.gutterSpecs=Ao(i.gutters,i.lineNumbers),yu(o),s.init(o)}var Ro=0,ji=null;k?ji=-.53:y?ji=15:R?ji=-.7:H&&(ji=-1/3);function Nc(e){var n=e.wheelDeltaX,s=e.wheelDeltaY;return n==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(n=e.detail),s==null&&e.detail&&e.axis==e.VERTICAL_AXIS?s=e.detail:s==null&&(s=e.wheelDelta),{x:n,y:s}}function bs(e){var n=Nc(e);return n.x*=ji,n.y*=ji,n}function Us(e,n){R&&V==102&&(e.display.chromeScrollHack==null?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout(function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""},100));var s=Nc(n),i=s.x,o=s.y,h=ji;n.deltaMode===0&&(i=n.deltaX,o=n.deltaY,h=1);var m=e.display,x=m.scroller,w=x.scrollWidth>x.clientWidth,S=x.scrollHeight>x.clientHeight;if(i&&w||o&&S){if(o&&Y&&P){e:for(var z=n.target,U=m.view;z!=x;z=z.parentNode)for(var re=0;re<U.length;re++)if(U[re].node==z){e.display.currentWheelTarget=z;break e}}if(i&&!y&&!te&&h!=null){o&&S&&gs(e,Math.max(0,x.scrollTop+o*h)),Yi(e,Math.max(0,x.scrollLeft+i*h)),(!o||o&&S)&&wn(n),m.wheelStartX=null;return}if(o&&h!=null){var Z=o*h,me=e.doc.scrollTop,ve=me+m.wrapper.clientHeight;Z<0?me=Math.max(0,me+Z-50):ve=Math.min(e.doc.height,ve+Z+50),Xi(e,{top:me,bottom:ve})}Ro<20&&n.deltaMode!==0&&(m.wheelStartX==null?(m.wheelStartX=x.scrollLeft,m.wheelStartY=x.scrollTop,m.wheelDX=i,m.wheelDY=o,setTimeout(function(){if(m.wheelStartX!=null){var Ae=x.scrollLeft-m.wheelStartX,Le=x.scrollTop-m.wheelStartY,ze=Le&&m.wheelDY&&Le/m.wheelDY||Ae&&m.wheelDX&&Ae/m.wheelDX;m.wheelStartX=m.wheelStartY=null,ze&&(ji=(ji*Ro+ze)/(Ro+1),++Ro)}},200)):(m.wheelDX+=i,m.wheelDY+=o))}}var Yn=function(e,n){this.ranges=e,this.primIndex=n};Yn.prototype.primary=function(){return this.ranges[this.primIndex]},Yn.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var n=0;n<this.ranges.length;n++){var s=this.ranges[n],i=e.ranges[n];if(!Tt(s.anchor,i.anchor)||!Tt(s.head,i.head))return!1}return!0},Yn.prototype.deepCopy=function(){for(var e=[],n=0;n<this.ranges.length;n++)e[n]=new Pt(en(this.ranges[n].anchor),en(this.ranges[n].head));return new Yn(e,this.primIndex)},Yn.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Yn.prototype.contains=function(e,n){n||(n=e);for(var s=0;s<this.ranges.length;s++){var i=this.ranges[s];if(Be(n,i.from())>=0&&Be(e,i.to())<=0)return s}return-1};var Pt=function(e,n){this.anchor=e,this.head=n};Pt.prototype.from=function(){return oi(this.anchor,this.head)},Pt.prototype.to=function(){return Sn(this.anchor,this.head)},Pt.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function Pr(e,n,s){var i=e&&e.options.selectionsMayTouch,o=n[s];n.sort(function(re,Z){return Be(re.from(),Z.from())}),s=$e(n,o);for(var h=1;h<n.length;h++){var m=n[h],x=n[h-1],w=Be(x.to(),m.from());if(i&&!m.empty()?w>0:w>=0){var S=oi(x.from(),m.from()),z=Sn(x.to(),m.to()),U=x.empty()?m.from()==m.head:x.from()==x.head;h<=s&&--s,n.splice(--h,2,new Pt(U?z:S,U?S:z))}}return new Yn(n,s)}function zn(e,n){return new Yn([new Pt(e,n||e)],0)}function Fn(e){return e.text?de(e.from.line+e.text.length-1,Ge(e.text).length+(e.text.length==1?e.from.ch:0)):e.to}function ws(e,n){if(Be(e,n.from)<0)return e;if(Be(e,n.to)<=0)return Fn(n);var s=e.line+n.text.length-(n.to.line-n.from.line)-1,i=e.ch;return e.line==n.to.line&&(i+=Fn(n).ch-n.to.ch),de(s,i)}function di(e,n){for(var s=[],i=0;i<e.sel.ranges.length;i++){var o=e.sel.ranges[i];s.push(new Pt(ws(o.anchor,n),ws(o.head,n)))}return Pr(e.cm,s,e.sel.primIndex)}function Ni(e,n,s){return e.line==n.line?de(s.line,e.ch-n.ch+s.ch):de(s.line+(e.line-n.line),e.ch)}function qs(e,n,s){for(var i=[],o=de(e.first,0),h=o,m=0;m<n.length;m++){var x=n[m],w=Ni(x.from,o,h),S=Ni(Fn(x),o,h);if(o=x.to,h=S,s=="around"){var z=e.sel.ranges[m],U=Be(z.head,z.anchor)<0;i[m]=new Pt(U?S:w,U?w:S)}else i[m]=new Pt(w,w)}return new Yn(i,e.sel.primIndex)}function xl(e){e.doc.mode=zi(e.options,e.doc.modeOption),Ks(e)}function Ks(e){e.doc.iter(function(n){n.stateAfter&&(n.stateAfter=null),n.styles&&(n.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,Bs(e,100),e.state.modeGen++,e.curOp&&er(e)}function bl(e,n){return n.from.ch==0&&n.to.ch==0&&Ge(n.text)==""&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function gr(e,n,s,i){function o(ze){return s?s[ze]:null}function h(ze,Me,Ye){zd(ze,Me,Ye,i),Dn(ze,"change",ze,n)}function m(ze,Me){for(var Ye=[],lt=ze;lt<Me;++lt)Ye.push(new ki(S[lt],o(lt),i));return Ye}var x=n.from,w=n.to,S=n.text,z=Qe(e,x.line),U=Qe(e,w.line),re=Ge(S),Z=o(S.length-1),me=w.line-x.line;if(n.full)e.insert(0,m(0,S.length)),e.remove(S.length,e.size-S.length);else if(bl(e,n)){var ve=m(0,S.length-1);h(U,U.text,Z),me&&e.remove(x.line,me),ve.length&&e.insert(x.line,ve)}else if(z==U)if(S.length==1)h(z,z.text.slice(0,x.ch)+re+z.text.slice(w.ch),Z);else{var Ae=m(1,S.length-1);Ae.push(new ki(re+z.text.slice(w.ch),Z,i)),h(z,z.text.slice(0,x.ch)+S[0],o(0)),e.insert(x.line+1,Ae)}else if(S.length==1)h(z,z.text.slice(0,x.ch)+S[0]+U.text.slice(w.ch),o(0)),e.remove(x.line+1,me);else{h(z,z.text.slice(0,x.ch)+S[0],o(0)),h(U,re+U.text.slice(w.ch),Z);var Le=m(1,S.length-1);me>1&&e.remove(x.line+1,me-1),e.insert(x.line+1,Le)}Dn(e,"change",e,n)}function Pn(e,n,s){function i(o,h,m){if(o.linked)for(var x=0;x<o.linked.length;++x){var w=o.linked[x];if(w.doc!=h){var S=m&&w.sharedHist;s&&!S||(n(w.doc,S),i(w.doc,o,S))}}}i(e,null,!0)}function nn(e,n){if(n.cm)throw new Error("This document is already in use.");e.doc=n,n.cm=e,ya(e),xl(e),Vr(e),e.options.direction=n.direction,e.options.lineWrapping||ua(e),e.options.mode=n.modeOption,er(e)}function Vr(e){(e.doc.direction=="rtl"?G:Ce)(e.display.lineDiv,"CodeMirror-rtl")}function Ec(e){Ln(e,function(){Vr(e),er(e)})}function ja(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function Na(e,n){var s={from:en(n.from),to:Fn(n),text:si(e,n.from,n.to)};return Ac(e,s,n.from.line,n.to.line+1),Pn(e,function(i){return Ac(i,s,n.from.line,n.to.line+1)},!0),s}function wl(e){for(;e.length;){var n=Ge(e);if(n.ranges)e.pop();else break}}function Lc(e,n){if(n)return wl(e.done),Ge(e.done);if(e.done.length&&!Ge(e.done).ranges)return Ge(e.done);if(e.done.length>1&&!e.done[e.done.length-2].ranges)return e.done.pop(),Ge(e.done)}function Ea(e,n,s,i){var o=e.history;o.undone.length=0;var h=+new Date,m,x;if((o.lastOp==i||o.lastOrigin==n.origin&&n.origin&&(n.origin.charAt(0)=="+"&&o.lastModTime>h-(e.cm?e.cm.options.historyEventDelay:500)||n.origin.charAt(0)=="*"))&&(m=Lc(o,o.lastOp==i)))x=Ge(m.changes),Be(n.from,n.to)==0&&Be(n.from,x.to)==0?x.to=Fn(n):m.changes.push(Na(e,n));else{var w=Ge(o.done);for((!w||!w.ranges)&&Oo(e.sel,o.done),m={changes:[Na(e,n)],generation:o.generation},o.done.push(m);o.done.length>o.undoDepth;)o.done.shift(),o.done[0].ranges||o.done.shift()}o.done.push(s),o.generation=++o.maxGeneration,o.lastModTime=o.lastSelTime=h,o.lastOp=o.lastSelOp=i,o.lastOrigin=o.lastSelOrigin=n.origin,x||It(e,"historyAdded")}function Pc(e,n,s,i){var o=n.charAt(0);return o=="*"||o=="+"&&s.ranges.length==i.ranges.length&&s.somethingSelected()==i.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function Io(e,n,s,i){var o=e.history,h=i&&i.origin;s==o.lastSelOp||h&&o.lastSelOrigin==h&&(o.lastModTime==o.lastSelTime&&o.lastOrigin==h||Pc(e,h,Ge(o.done),n))?o.done[o.done.length-1]=n:Oo(n,o.done),o.lastSelTime=+new Date,o.lastSelOrigin=h,o.lastSelOp=s,i&&i.clearRedo!==!1&&wl(o.undone)}function Oo(e,n){var s=Ge(n);s&&s.ranges&&s.equals(e)||n.push(e)}function Ac(e,n,s,i){var o=n["spans_"+e.id],h=0;e.iter(Math.max(e.first,s),Math.min(e.first+e.size,i),function(m){m.markedSpans&&((o||(o=n["spans_"+e.id]={}))[h]=m.markedSpans),++h})}function La(e){if(!e)return null;for(var n,s=0;s<e.length;++s)e[s].marker.explicitlyCleared?n||(n=e.slice(0,s)):n&&n.push(e[s]);return n?n.length?n:null:e}function kl(e,n){var s=n["spans_"+e.id];if(!s)return null;for(var i=[],o=0;o<n.text.length;++o)i.push(La(s[o]));return i}function vu(e,n){var s=kl(e,n),i=Te(e,n);if(!s)return i;if(!i)return s;for(var o=0;o<s.length;++o){var h=s[o],m=i[o];if(h&&m)e:for(var x=0;x<m.length;++x){for(var w=m[x],S=0;S<h.length;++S)if(h[S].marker==w.marker)continue e;h.push(w)}else m&&(s[o]=m)}return s}function $s(e,n,s){for(var i=[],o=0;o<e.length;++o){var h=e[o];if(h.ranges){i.push(s?Yn.prototype.deepCopy.call(h):h);continue}var m=h.changes,x=[];i.push({changes:x});for(var w=0;w<m.length;++w){var S=m[w],z=void 0;if(x.push({from:S.from,to:S.to,text:S.text}),n)for(var U in S)(z=U.match(/^spans_(\d+)$/))&&$e(n,Number(z[1]))>-1&&(Ge(x)[U]=S[U],delete S[U])}}return i}function ks(e,n,s,i){if(i){var o=e.anchor;if(s){var h=Be(n,o)<0;h!=Be(s,o)<0?(o=n,n=s):h!=Be(n,s)<0&&(n=s)}return new Pt(o,n)}else return new Pt(s||n,n)}function Pa(e,n,s,i,o){o==null&&(o=e.cm&&(e.cm.display.shift||e.extend)),Wn(e,new Yn([ks(e.sel.primary(),n,s,o)],0),i)}function Aa(e,n,s){for(var i=[],o=e.cm&&(e.cm.display.shift||e.extend),h=0;h<e.sel.ranges.length;h++)i[h]=ks(e.sel.ranges[h],n[h],null,o);var m=Pr(e.cm,i,e.sel.primIndex);Wn(e,m,s)}function Mo(e,n,s,i){var o=e.sel.ranges.slice(0);o[n]=s,Wn(e,Pr(e.cm,o,e.sel.primIndex),i)}function Gs(e,n,s,i){Wn(e,zn(n,s),i)}function xu(e,n,s){var i={ranges:n.ranges,update:function(o){this.ranges=[];for(var h=0;h<o.length;h++)this.ranges[h]=new Pt(gt(e,o[h].anchor),gt(e,o[h].head))},origin:s&&s.origin};return It(e,"beforeSelectionChange",e,i),e.cm&&It(e.cm,"beforeSelectionChange",e.cm,i),i.ranges!=n.ranges?Pr(e.cm,i.ranges,i.ranges.length-1):n}function Sl(e,n,s){var i=e.history.done,o=Ge(i);o&&o.ranges?(i[i.length-1]=n,Do(e,n,s)):Wn(e,n,s)}function Wn(e,n,s){Do(e,n,s),Io(e,e.sel,e.cm?e.cm.curOp.id:NaN,s)}function Do(e,n,s){(un(e,"beforeSelectionChange")||e.cm&&un(e.cm,"beforeSelectionChange"))&&(n=xu(e,n,s));var i=s&&s.bias||(Be(n.primary().head,e.sel.primary().head)<0?-1:1);Ys(e,Ss(e,n,i,!0)),!(s&&s.scroll===!1)&&e.cm&&e.cm.getOption("readOnly")!="nocursor"&&Fs(e.cm)}function Ys(e,n){n.equals(e.sel)||(e.sel=n,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,Nn(e.cm)),Dn(e,"cursorActivity",e))}function zr(e){Ys(e,Ss(e,e.sel,null,!1))}function Ss(e,n,s,i){for(var o,h=0;h<n.ranges.length;h++){var m=n.ranges[h],x=n.ranges.length==e.sel.ranges.length&&e.sel.ranges[h],w=Ra(e,m.anchor,x&&x.anchor,s,i),S=m.head==m.anchor?w:Ra(e,m.head,x&&x.head,s,i);(o||w!=m.anchor||S!=m.head)&&(o||(o=n.ranges.slice(0,h)),o[h]=new Pt(w,S))}return o?Pr(e.cm,o,n.primIndex):n}function _s(e,n,s,i,o){var h=Qe(e,n.line);if(h.markedSpans)for(var m=0;m<h.markedSpans.length;++m){var x=h.markedSpans[m],w=x.marker,S="selectLeft"in w?!w.selectLeft:w.inclusiveLeft,z="selectRight"in w?!w.selectRight:w.inclusiveRight;if((x.from==null||(S?x.from<=n.ch:x.from<n.ch))&&(x.to==null||(z?x.to>=n.ch:x.to>n.ch))){if(o&&(It(w,"beforeCursorEnter"),w.explicitlyCleared))if(h.markedSpans){--m;continue}else break;if(!w.atomic)continue;if(s){var U=w.find(i<0?1:-1),re=void 0;if((i<0?z:S)&&(U=Ei(e,U,-i,U&&U.line==n.line?h:null)),U&&U.line==n.line&&(re=Be(U,s))&&(i<0?re<0:re>0))return _s(e,U,n,i,o)}var Z=w.find(i<0?-1:1);return(i<0?S:z)&&(Z=Ei(e,Z,i,Z.line==n.line?h:null)),Z?_s(e,Z,n,i,o):null}}return n}function Ra(e,n,s,i,o){var h=i||1,m=_s(e,n,s,h,o)||!o&&_s(e,n,s,h,!0)||_s(e,n,s,-h,o)||!o&&_s(e,n,s,-h,!0);return m||(e.cantEdit=!0,de(e.first,0))}function Ei(e,n,s,i){return s<0&&n.ch==0?n.line>e.first?gt(e,de(n.line-1)):null:s>0&&n.ch==(i||Qe(e,n.line)).text.length?n.line<e.first+e.size-1?de(n.line+1,0):null:new de(n.line,n.ch+s)}function Qi(e){e.setSelection(de(e.firstLine(),0),de(e.lastLine()),St)}function _l(e,n,s){var i={canceled:!1,from:n.from,to:n.to,text:n.text,origin:n.origin,cancel:function(){return i.canceled=!0}};return s&&(i.update=function(o,h,m,x){o&&(i.from=gt(e,o)),h&&(i.to=gt(e,h)),m&&(i.text=m),x!==void 0&&(i.origin=x)}),It(e,"beforeChange",e,i),e.cm&&It(e.cm,"beforeChange",e.cm,i),i.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:i.from,to:i.to,text:i.text,origin:i.origin}}function Vs(e,n,s){if(e.cm){if(!e.cm.curOp)return dn(e.cm,Vs)(e,n,s);if(e.cm.state.suppressEdits)return}if(!((un(e,"beforeChange")||e.cm&&un(e.cm,"beforeChange"))&&(n=_l(e,n,!0),!n))){var i=Or&&!s&&ee(e,n.from,n.to);if(i)for(var o=i.length-1;o>=0;--o)Li(e,{from:i[o].from,to:i[o].to,text:o?[""]:n.text,origin:n.origin});else Li(e,n)}}function Li(e,n){if(!(n.text.length==1&&n.text[0]==""&&Be(n.from,n.to)==0)){var s=di(e,n);Ea(e,n,s,e.cm?e.cm.curOp.id:NaN),zo(e,n,s,Te(e,n));var i=[];Pn(e,function(o,h){!h&&$e(i,o.history)==-1&&(Wo(o.history,n),i.push(o.history)),zo(o,n,null,Te(o,n))})}}function pi(e,n,s){var i=e.cm&&e.cm.state.suppressEdits;if(!(i&&!s)){for(var o=e.history,h,m=e.sel,x=n=="undo"?o.done:o.undone,w=n=="undo"?o.undone:o.done,S=0;S<x.length&&(h=x[S],!(s?h.ranges&&!h.equals(e.sel):!h.ranges));S++);if(S!=x.length){for(o.lastOrigin=o.lastSelOrigin=null;;)if(h=x.pop(),h.ranges){if(Oo(h,w),s&&!h.equals(e.sel)){Wn(e,h,{clearRedo:!1});return}m=h}else if(i){x.push(h);return}else break;var z=[];Oo(m,w),w.push({changes:z,generation:o.generation}),o.generation=h.generation||++o.maxGeneration;for(var U=un(e,"beforeChange")||e.cm&&un(e.cm,"beforeChange"),re=function(ve){var Ae=h.changes[ve];if(Ae.origin=n,U&&!_l(e,Ae,!1))return x.length=0,{};z.push(Na(e,Ae));var Le=ve?di(e,Ae):Ge(x);zo(e,Ae,Le,vu(e,Ae)),!ve&&e.cm&&e.cm.scrollIntoView({from:Ae.from,to:Fn(Ae)});var ze=[];Pn(e,function(Me,Ye){!Ye&&$e(ze,Me.history)==-1&&(Wo(Me.history,Ae),ze.push(Me.history)),zo(Me,Ae,null,vu(Me,Ae))})},Z=h.changes.length-1;Z>=0;--Z){var me=re(Z);if(me)return me.v}}}}function Ia(e,n){if(n!=0&&(e.first+=n,e.sel=new Yn(ht(e.sel.ranges,function(o){return new Pt(de(o.anchor.line+n,o.anchor.ch),de(o.head.line+n,o.head.ch))}),e.sel.primIndex),e.cm)){er(e.cm,e.first,e.first-n,n);for(var s=e.cm.display,i=s.viewFrom;i<s.viewTo;i++)$i(e.cm,i,"gutter")}}function zo(e,n,s,i){if(e.cm&&!e.cm.curOp)return dn(e.cm,zo)(e,n,s,i);if(n.to.line<e.first){Ia(e,n.text.length-1-(n.to.line-n.from.line));return}if(!(n.from.line>e.lastLine())){if(n.from.line<e.first){var o=n.text.length-1-(e.first-n.from.line);Ia(e,o),n={from:de(e.first,0),to:de(n.to.line+o,n.to.ch),text:[Ge(n.text)],origin:n.origin}}var h=e.lastLine();n.to.line>h&&(n={from:n.from,to:de(h,Qe(e,h).text.length),text:[n.text[0]],origin:n.origin}),n.removed=si(e,n.from,n.to),s||(s=di(e,n)),e.cm?Cl(e.cm,n,i):gr(e,n,i),Do(e,s,St),e.cantEdit&&Ra(e,de(e.firstLine(),0))&&(e.cantEdit=!1)}}function Cl(e,n,s){var i=e.doc,o=e.display,h=n.from,m=n.to,x=!1,w=h.line;e.options.lineWrapping||(w=C(Rt(Qe(i,h.line))),i.iter(w,m.line+1,function(Z){if(Z==o.maxLine)return x=!0,!0})),i.sel.contains(n.from,n.to)>-1&&Nn(e),gr(i,n,s,Ds(e)),e.options.lineWrapping||(i.iter(w,h.line+n.text.length,function(Z){var me=Bi(Z);me>o.maxLineLength&&(o.maxLine=Z,o.maxLineLength=me,o.maxLineChanged=!0,x=!1)}),x&&(e.curOp.updateMaxLine=!0)),hr(i,h.line),Bs(e,400);var S=n.text.length-(m.line-h.line)-1;n.full?er(e):h.line==m.line&&n.text.length==1&&!bl(e.doc,n)?$i(e,h.line,"text"):er(e,h.line,m.line+1,S);var z=un(e,"changes"),U=un(e,"change");if(U||z){var re={from:h,to:m,text:n.text,removed:n.removed,origin:n.origin};U&&Dn(e,"change",e,re),z&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(re)}e.display.selForContextMenu=null}function Js(e,n,s,i,o){var h;i||(i=s),Be(i,s)<0&&(h=[i,s],s=h[0],i=h[1]),typeof n=="string"&&(n=e.splitLines(n)),Vs(e,{from:s,to:i,text:n,origin:o})}function Fo(e,n,s,i){s<e.line?e.line+=i:n<e.line&&(e.line=n,e.ch=0)}function hi(e,n,s,i){for(var o=0;o<e.length;++o){var h=e[o],m=!0;if(h.ranges){h.copied||(h=e[o]=h.deepCopy(),h.copied=!0);for(var x=0;x<h.ranges.length;x++)Fo(h.ranges[x].anchor,n,s,i),Fo(h.ranges[x].head,n,s,i);continue}for(var w=0;w<h.changes.length;++w){var S=h.changes[w];if(s<S.from.line)S.from=de(S.from.line+i,S.from.ch),S.to=de(S.to.line+i,S.to.ch);else if(n<=S.to.line){m=!1;break}}m||(e.splice(0,o+1),o=0)}}function Wo(e,n){var s=n.from.line,i=n.to.line,o=n.text.length-(i-s)-1;hi(e.done,s,i,o),hi(e.undone,s,i,o)}function Zi(e,n,s,i){var o=n,h=n;return typeof n=="number"?h=Qe(e,Za(e,n)):o=C(n),o==null?null:(i(h,o)&&e.cm&&$i(e.cm,o,s),h)}function fi(e){this.lines=e,this.parent=null;for(var n=0,s=0;s<e.length;++s)e[s].parent=this,n+=e[s].height;this.height=n}fi.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,n){for(var s=e,i=e+n;s<i;++s){var o=this.lines[s];this.height-=o.height,Jl(o),Dn(o,"delete")}this.lines.splice(e,n)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,n,s){this.height+=s,this.lines=this.lines.slice(0,e).concat(n).concat(this.lines.slice(e));for(var i=0;i<n.length;++i)n[i].parent=this},iterN:function(e,n,s){for(var i=e+n;e<i;++e)if(s(this.lines[e]))return!0}};function Xs(e){this.children=e;for(var n=0,s=0,i=0;i<e.length;++i){var o=e[i];n+=o.chunkSize(),s+=o.height,o.parent=this}this.size=n,this.height=s,this.parent=null}Xs.prototype={chunkSize:function(){return this.size},removeInner:function(e,n){this.size-=n;for(var s=0;s<this.children.length;++s){var i=this.children[s],o=i.chunkSize();if(e<o){var h=Math.min(n,o-e),m=i.height;if(i.removeInner(e,h),this.height-=m-i.height,o==h&&(this.children.splice(s--,1),i.parent=null),(n-=h)==0)break;e=0}else e-=o}if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof fi))){var x=[];this.collapse(x),this.children=[new fi(x)],this.children[0].parent=this}},collapse:function(e){for(var n=0;n<this.children.length;++n)this.children[n].collapse(e)},insertInner:function(e,n,s){this.size+=n.length,this.height+=s;for(var i=0;i<this.children.length;++i){var o=this.children[i],h=o.chunkSize();if(e<=h){if(o.insertInner(e,n,s),o.lines&&o.lines.length>50){for(var m=o.lines.length%25+25,x=m;x<o.lines.length;){var w=new fi(o.lines.slice(x,x+=25));o.height-=w.height,this.children.splice(++i,0,w),w.parent=this}o.lines=o.lines.slice(0,m),this.maybeSpill()}break}e-=h}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var n=e.children.splice(e.children.length-5,5),s=new Xs(n);if(e.parent){e.size-=s.size,e.height-=s.height;var o=$e(e.parent.children,e);e.parent.children.splice(o+1,0,s)}else{var i=new Xs(e.children);i.parent=e,e.children=[i,s],e=i}s.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,n,s){for(var i=0;i<this.children.length;++i){var o=this.children[i],h=o.chunkSize();if(e<h){var m=Math.min(n,h-e);if(o.iterN(e,m,s))return!0;if((n-=m)==0)break;e=0}else e-=h}}};var Pi=function(e,n,s){if(s)for(var i in s)s.hasOwnProperty(i)&&(this[i]=s[i]);this.doc=e,this.node=n};Pi.prototype.clear=function(){var e=this.doc.cm,n=this.line.widgets,s=this.line,i=C(s);if(!(i==null||!n)){for(var o=0;o<n.length;++o)n[o]==this&&n.splice(o--,1);n.length||(s.widgets=null);var h=Ui(this);On(s,Math.max(0,s.height-h)),e&&(Ln(e,function(){bu(e,s,-h),$i(e,i,"widget")}),Dn(e,"lineWidgetCleared",e,this,i))}},Pi.prototype.changed=function(){var e=this,n=this.height,s=this.doc.cm,i=this.line;this.height=null;var o=Ui(this)-n;o&&(li(this.doc,i)||On(i,i.height+o),s&&Ln(s,function(){s.curOp.forceUpdate=!0,bu(s,i,o),Dn(s,"lineWidgetChanged",s,e,C(i))}))},lr(Pi);function bu(e,n,s){_n(n)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&ms(e,s)}function wu(e,n,s,i){var o=new Pi(e,s,i),h=e.cm;return h&&o.noHScroll&&(h.display.alignWidgets=!0),Zi(e,n,"widget",function(m){var x=m.widgets||(m.widgets=[]);if(o.insertAt==null?x.push(o):x.splice(Math.min(x.length,Math.max(0,o.insertAt)),0,o),o.line=m,h&&!li(e,m)){var w=_n(m)<e.scrollTop;On(m,m.height+Ui(o)),w&&ms(h,o.height),h.curOp.forceUpdate=!0}return!0}),h&&Dn(h,"lineWidgetAdded",h,o,typeof n=="number"?n:C(n)),o}var an=0,mi=function(e,n){this.lines=[],this.type=n,this.doc=e,this.id=++an};mi.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,n=e&&!e.curOp;if(n&&vs(e),un(this,"clear")){var s=this.find();s&&Dn(this,"clear",s.from,s.to)}for(var i=null,o=null,h=0;h<this.lines.length;++h){var m=this.lines[h],x=Os(m.markedSpans,this);e&&!this.collapsed?$i(e,C(m),"text"):e&&(x.to!=null&&(o=C(m)),x.from!=null&&(i=C(m))),m.markedSpans=aa(m.markedSpans,x),x.from==null&&this.collapsed&&!li(this.doc,m)&&e&&On(m,_i(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var w=0;w<this.lines.length;++w){var S=Rt(this.lines[w]),z=Bi(S);z>e.display.maxLineLength&&(e.display.maxLine=S,e.display.maxLineLength=z,e.display.maxLineChanged=!0)}i!=null&&e&&this.collapsed&&er(e,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&zr(e.doc)),e&&Dn(e,"markerCleared",e,this,i,o),n&&Yr(e),this.parent&&this.parent.clear()}},mi.prototype.find=function(e,n){e==null&&this.type=="bookmark"&&(e=1);for(var s,i,o=0;o<this.lines.length;++o){var h=this.lines[o],m=Os(h.markedSpans,this);if(m.from!=null&&(s=de(n?h:C(h),m.from),e==-1))return s;if(m.to!=null&&(i=de(n?h:C(h),m.to),e==1))return i}return s&&{from:s,to:i}},mi.prototype.changed=function(){var e=this,n=this.find(-1,!0),s=this,i=this.doc.cm;!n||!i||Ln(i,function(){var o=n.line,h=C(n.line),m=sl(i,h);if(m&&(ol(m),i.curOp.selectionChanged=i.curOp.forceUpdate=!0),i.curOp.updateMaxLine=!0,!li(s.doc,o)&&s.height!=null){var x=s.height;s.height=null;var w=Ui(s)-x;w&&On(o,o.height+w)}Dn(i,"markerChanged",i,e)})},mi.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(!n.maybeHiddenMarkers||$e(n.maybeHiddenMarkers,this)==-1)&&(n.maybeUnhiddenMarkers||(n.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},mi.prototype.detachLine=function(e){if(this.lines.splice($e(this.lines,e),1),!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(n.maybeHiddenMarkers||(n.maybeHiddenMarkers=[])).push(this)}},lr(mi);function Cs(e,n,s,i,o){if(i&&i.shared)return Tl(e,n,s,i,o);if(e.cm&&!e.cm.curOp)return dn(e.cm,Cs)(e,n,s,i,o);var h=new mi(e,o),m=Be(n,s);if(i&&Ue(i,h,!1),m>0||m==0&&h.clearWhenEmpty!==!1)return h;if(h.replacedWith&&(h.collapsed=!0,h.widgetNode=J("span",[h.replacedWith],"CodeMirror-widget"),i.handleMouseEvents||h.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(h.widgetNode.insertLeft=!0)),h.collapsed){if(wi(e,n.line,n,s,h)||n.line!=s.line&&wi(e,s.line,n,s,h))throw new Error("Inserting collapsed marker partially overlapping an existing one");us()}h.addToHistory&&Ea(e,{from:n,to:s,origin:"markText"},e.sel,NaN);var x=n.line,w=e.cm,S;if(e.iter(x,s.line+1,function(U){w&&h.collapsed&&!w.options.lineWrapping&&Rt(U)==w.display.maxLine&&(S=!0),h.collapsed&&x!=n.line&&On(U,0),Hi(U,new Mr(h,x==n.line?n.ch:null,x==s.line?s.ch:null),e.cm&&e.cm.curOp),++x}),h.collapsed&&e.iter(n.line,s.line+1,function(U){li(e,U)&&On(U,0)}),h.clearOnEnter&&it(h,"beforeCursorEnter",function(){return h.clear()}),h.readOnly&&(Is(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),h.collapsed&&(h.id=++an,h.atomic=!0),w){if(S&&(w.curOp.updateMaxLine=!0),h.collapsed)er(w,n.line,s.line+1);else if(h.className||h.startStyle||h.endStyle||h.css||h.attributes||h.title)for(var z=n.line;z<=s.line;z++)$i(w,z,"text");h.atomic&&zr(w.doc),Dn(w,"markerAdded",w,h)}return h}var Qs=function(e,n){this.markers=e,this.primary=n;for(var s=0;s<e.length;++s)e[s].parent=this};Qs.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();Dn(this,"clear")}},Qs.prototype.find=function(e,n){return this.primary.find(e,n)},lr(Qs);function Tl(e,n,s,i,o){i=Ue(i),i.shared=!1;var h=[Cs(e,n,s,i,o)],m=h[0],x=i.widgetNode;return Pn(e,function(w){x&&(i.widgetNode=x.cloneNode(!0)),h.push(Cs(w,gt(w,n),gt(w,s),i,o));for(var S=0;S<w.linked.length;++S)if(w.linked[S].isParent)return;m=Ge(h)}),new Qs(h,m)}function jl(e){return e.findMarks(de(e.first,0),e.clipPos(de(e.lastLine())),function(n){return n.parent})}function Zs(e,n){for(var s=0;s<n.length;s++){var i=n[s],o=i.find(),h=e.clipPos(o.from),m=e.clipPos(o.to);if(Be(h,m)){var x=Cs(e,h,m,i.primary,i.primary.type);i.markers.push(x),x.parent=i}}}function pn(e){for(var n=function(i){var o=e[i],h=[o.primary.doc];Pn(o.primary.doc,function(w){return h.push(w)});for(var m=0;m<o.markers.length;m++){var x=o.markers[m];$e(h,x.doc)==-1&&(x.parent=null,o.markers.splice(m--,1))}},s=0;s<e.length;s++)n(s)}var Hn=0,Mt=function(e,n,s,i,o){if(!(this instanceof Mt))return new Mt(e,n,s,i,o);s==null&&(s=0),Xs.call(this,[new fi([new ki("",null)])]),this.first=s,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=s;var h=de(s,0);this.sel=zn(h),this.history=new ja(null),this.id=++Hn,this.modeOption=n,this.lineSep=i,this.direction=o=="rtl"?"rtl":"ltr",this.extend=!1,typeof e=="string"&&(e=this.splitLines(e)),gr(this,{from:h,to:h,text:e}),Wn(this,zn(h),St)};Mt.prototype=ge(Xs.prototype,{constructor:Mt,iter:function(e,n,s){s?this.iterN(e-this.first,n-e,s):this.iterN(this.first,this.first+this.size,e)},insert:function(e,n){for(var s=0,i=0;i<n.length;++i)s+=n[i].height;this.insertInner(e-this.first,n,s)},remove:function(e,n){this.removeInner(e-this.first,n)},getValue:function(e){var n=dr(this,this.first,this.first+this.size);return e===!1?n:n.join(e||this.lineSeparator())},setValue:yn(function(e){var n=de(this.first,0),s=this.first+this.size-1;Vs(this,{from:n,to:de(s,Qe(this,s).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&ka(this.cm,0,0),Wn(this,zn(n),St)}),replaceRange:function(e,n,s,i){n=gt(this,n),s=s?gt(this,s):n,Js(this,e,n,s,i)},getRange:function(e,n,s){var i=si(this,gt(this,e),gt(this,n));return s===!1?i:s===""?i.join(""):i.join(s||this.lineSeparator())},getLine:function(e){var n=this.getLineHandle(e);return n&&n.text},getLineHandle:function(e){if(fe(this,e))return Qe(this,e)},getLineNumber:function(e){return C(e)},getLineHandleVisualStart:function(e){return typeof e=="number"&&(e=Qe(this,e)),Rt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return gt(this,e)},getCursor:function(e){var n=this.sel.primary(),s;return e==null||e=="head"?s=n.head:e=="anchor"?s=n.anchor:e=="end"||e=="to"||e===!1?s=n.to():s=n.from(),s},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:yn(function(e,n,s){Gs(this,gt(this,typeof e=="number"?de(e,n||0):e),null,s)}),setSelection:yn(function(e,n,s){Gs(this,gt(this,e),gt(this,n||e),s)}),extendSelection:yn(function(e,n,s){Pa(this,gt(this,e),n&&gt(this,n),s)}),extendSelections:yn(function(e,n){Aa(this,sa(this,e),n)}),extendSelectionsBy:yn(function(e,n){var s=ht(this.sel.ranges,e);Aa(this,sa(this,s),n)}),setSelections:yn(function(e,n,s){if(e.length){for(var i=[],o=0;o<e.length;o++)i[o]=new Pt(gt(this,e[o].anchor),gt(this,e[o].head||e[o].anchor));n==null&&(n=Math.min(e.length-1,this.sel.primIndex)),Wn(this,Pr(this.cm,i,n),s)}}),addSelection:yn(function(e,n,s){var i=this.sel.ranges.slice(0);i.push(new Pt(gt(this,e),gt(this,n||e))),Wn(this,Pr(this.cm,i,i.length-1),s)}),getSelection:function(e){for(var n=this.sel.ranges,s,i=0;i<n.length;i++){var o=si(this,n[i].from(),n[i].to());s=s?s.concat(o):o}return e===!1?s:s.join(e||this.lineSeparator())},getSelections:function(e){for(var n=[],s=this.sel.ranges,i=0;i<s.length;i++){var o=si(this,s[i].from(),s[i].to());e!==!1&&(o=o.join(e||this.lineSeparator())),n[i]=o}return n},replaceSelection:function(e,n,s){for(var i=[],o=0;o<this.sel.ranges.length;o++)i[o]=e;this.replaceSelections(i,n,s||"+input")},replaceSelections:yn(function(e,n,s){for(var i=[],o=this.sel,h=0;h<o.ranges.length;h++){var m=o.ranges[h];i[h]={from:m.from(),to:m.to(),text:this.splitLines(e[h]),origin:s}}for(var x=n&&n!="end"&&qs(this,i,n),w=i.length-1;w>=0;w--)Vs(this,i[w]);x?Sl(this,x):this.cm&&Fs(this.cm)}),undo:yn(function(){pi(this,"undo")}),redo:yn(function(){pi(this,"redo")}),undoSelection:yn(function(){pi(this,"undo",!0)}),redoSelection:yn(function(){pi(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,n=0,s=0,i=0;i<e.done.length;i++)e.done[i].ranges||++n;for(var o=0;o<e.undone.length;o++)e.undone[o].ranges||++s;return{undo:n,redo:s}},clearHistory:function(){var e=this;this.history=new ja(this.history),Pn(this,function(n){return n.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:$s(this.history.done),undone:$s(this.history.undone)}},setHistory:function(e){var n=this.history=new ja(this.history);n.done=$s(e.done.slice(0),null,!0),n.undone=$s(e.undone.slice(0),null,!0)},setGutterMarker:yn(function(e,n,s){return Zi(this,e,"gutter",function(i){var o=i.gutterMarkers||(i.gutterMarkers={});return o[n]=s,!s&&Ve(o)&&(i.gutterMarkers=null),!0})}),clearGutter:yn(function(e){var n=this;this.iter(function(s){s.gutterMarkers&&s.gutterMarkers[e]&&Zi(n,s,"gutter",function(){return s.gutterMarkers[e]=null,Ve(s.gutterMarkers)&&(s.gutterMarkers=null),!0})})}),lineInfo:function(e){var n;if(typeof e=="number"){if(!fe(this,e)||(n=e,e=Qe(this,e),!e))return null}else if(n=C(e),n==null)return null;return{line:n,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:yn(function(e,n,s){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var o=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass";if(!i[o])i[o]=s;else{if(ie(s).test(i[o]))return!1;i[o]+=" "+s}return!0})}),removeLineClass:yn(function(e,n,s){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var o=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass",h=i[o];if(h)if(s==null)i[o]=null;else{var m=h.match(ie(s));if(!m)return!1;var x=m.index+m[0].length;i[o]=h.slice(0,m.index)+(!m.index||x==h.length?"":" ")+h.slice(x)||null}else return!1;return!0})}),addLineWidget:yn(function(e,n,s){return wu(this,e,n,s)}),removeLineWidget:function(e){e.clear()},markText:function(e,n,s){return Cs(this,gt(this,e),gt(this,n),s,s&&s.type||"range")},setBookmark:function(e,n){var s={replacedWith:n&&(n.nodeType==null?n.widget:n),insertLeft:n&&n.insertLeft,clearWhenEmpty:!1,shared:n&&n.shared,handleMouseEvents:n&&n.handleMouseEvents};return e=gt(this,e),Cs(this,e,e,s,"bookmark")},findMarksAt:function(e){e=gt(this,e);var n=[],s=Qe(this,e.line).markedSpans;if(s)for(var i=0;i<s.length;++i){var o=s[i];(o.from==null||o.from<=e.ch)&&(o.to==null||o.to>=e.ch)&&n.push(o.marker.parent||o.marker)}return n},findMarks:function(e,n,s){e=gt(this,e),n=gt(this,n);var i=[],o=e.line;return this.iter(e.line,n.line+1,function(h){var m=h.markedSpans;if(m)for(var x=0;x<m.length;x++){var w=m[x];!(w.to!=null&&o==e.line&&e.ch>=w.to||w.from==null&&o!=e.line||w.from!=null&&o==n.line&&w.from>=n.ch)&&(!s||s(w.marker))&&i.push(w.marker.parent||w.marker)}++o}),i},getAllMarks:function(){var e=[];return this.iter(function(n){var s=n.markedSpans;if(s)for(var i=0;i<s.length;++i)s[i].from!=null&&e.push(s[i].marker)}),e},posFromIndex:function(e){var n,s=this.first,i=this.lineSeparator().length;return this.iter(function(o){var h=o.text.length+i;if(h>e)return n=e,!0;e-=h,++s}),gt(this,de(s,n))},indexFromPos:function(e){e=gt(this,e);var n=e.ch;if(e.line<this.first||e.ch<0)return 0;var s=this.lineSeparator().length;return this.iter(this.first,e.line,function(i){n+=i.text.length+s}),n},copy:function(e){var n=new Mt(dr(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,n.sel=this.sel,n.extend=!1,e&&(n.history.undoDepth=this.history.undoDepth,n.setHistory(this.getHistory())),n},linkedDoc:function(e){e||(e={});var n=this.first,s=this.first+this.size;e.from!=null&&e.from>n&&(n=e.from),e.to!=null&&e.to<s&&(s=e.to);var i=new Mt(dr(this,n,s),e.mode||this.modeOption,n,this.lineSep,this.direction);return e.sharedHist&&(i.history=this.history),(this.linked||(this.linked=[])).push({doc:i,sharedHist:e.sharedHist}),i.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],Zs(i,jl(this)),i},unlinkDoc:function(e){if(e instanceof Zt&&(e=e.doc),this.linked)for(var n=0;n<this.linked.length;++n){var s=this.linked[n];if(s.doc==e){this.linked.splice(n,1),e.unlinkDoc(this),pn(jl(this));break}}if(e.history==this.history){var i=[e.id];Pn(e,function(o){return i.push(o.id)},!0),e.history=new ja(null),e.history.done=$s(this.history.done,i),e.history.undone=$s(this.history.undone,i)}},iterLinkedDocs:function(e){Pn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):cr(e)},lineSeparator:function(){return this.lineSep||`
`},setDirection:yn(function(e){e!="rtl"&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(n){return n.order=null}),this.cm&&Ec(this.cm))})}),Mt.prototype.eachLine=Mt.prototype.iter;var Oa=0;function Ma(e){var n=this;if(Qn(n),!(Ot(n,e)||qi(n.display,e))){wn(e),k&&(Oa=+new Date);var s=hs(n,e,!0),i=e.dataTransfer.files;if(!(!s||n.isReadOnly()))if(i&&i.length&&window.FileReader&&window.File)for(var o=i.length,h=Array(o),m=0,x=function(){++m==o&&dn(n,function(){s=gt(n.doc,s);var Z={from:s,to:s,text:n.doc.splitLines(h.filter(function(me){return me!=null}).join(n.doc.lineSeparator())),origin:"paste"};Vs(n.doc,Z),Sl(n.doc,zn(gt(n.doc,s),gt(n.doc,Fn(Z))))})()},w=function(Z,me){if(n.options.allowDropFileTypes&&$e(n.options.allowDropFileTypes,Z.type)==-1){x();return}var ve=new FileReader;ve.onerror=function(){return x()},ve.onload=function(){var Ae=ve.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(Ae)){x();return}h[me]=Ae,x()},ve.readAsText(Z)},S=0;S<i.length;S++)w(i[S],S);else{if(n.state.draggingText&&n.doc.sel.contains(s)>-1){n.state.draggingText(e),setTimeout(function(){return n.display.input.focus()},20);return}try{var z=e.dataTransfer.getData("Text");if(z){var U;if(n.state.draggingText&&!n.state.draggingText.copy&&(U=n.listSelections()),Do(n.doc,zn(s,s)),U)for(var re=0;re<U.length;++re)Js(n.doc,"",U[re].anchor,U[re].head,"drag");n.replaceSelection(z,"around","paste"),n.display.input.focus()}}catch{}}}}function Da(e,n){if(k&&(!e.state.draggingText||+new Date-Oa<100)){ur(n);return}if(!(Ot(e,n)||qi(e.display,n))&&(n.dataTransfer.setData("Text",e.getSelection()),n.dataTransfer.effectAllowed="copyMove",n.dataTransfer.setDragImage&&!H)){var s=N("img",null,null,"position: fixed; left: 0; top: 0;");s.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",te&&(s.width=s.height=1,e.display.wrapper.appendChild(s),s._top=s.offsetTop),n.dataTransfer.setDragImage(s,0,0),te&&s.parentNode.removeChild(s)}}function ip(e,n){var s=hs(e,n);if(s){var i=document.createDocumentFragment();xa(e,s,i),e.display.dragCursor||(e.display.dragCursor=N("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),ye(e.display.dragCursor,i)}}function Qn(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Nl(e){if(document.getElementsByClassName){for(var n=document.getElementsByClassName("CodeMirror"),s=[],i=0;i<n.length;i++){var o=n[i].CodeMirror;o&&s.push(o)}s.length&&s[0].operation(function(){for(var h=0;h<s.length;h++)e(s[h])})}}var El=!1;function ku(){El||(Ai(),El=!0)}function Ai(){var e;it(window,"resize",function(){e==null&&(e=setTimeout(function(){e=null,Nl(Jr)},100))}),it(window,"blur",function(){return Nl(Ut)})}function Jr(e){var n=e.display;n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.scrollbarsClipped=!1,e.setSize()}for(var Xr={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},eo=0;eo<10;eo++)Xr[eo+48]=Xr[eo+96]=String(eo);for(var Ho=65;Ho<=90;Ho++)Xr[Ho]=String.fromCharCode(Ho);for(var Bo=1;Bo<=12;Bo++)Xr[Bo+111]=Xr[Bo+63235]="F"+Bo;var Ri={};Ri.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ri.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ri.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Ri.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ri.default=Y?Ri.macDefault:Ri.pcDefault;function Rc(e){var n=e.split(/-(?!$)/);e=n[n.length-1];for(var s,i,o,h,m=0;m<n.length-1;m++){var x=n[m];if(/^(cmd|meta|m)$/i.test(x))h=!0;else if(/^a(lt)?$/i.test(x))s=!0;else if(/^(c|ctrl|control)$/i.test(x))i=!0;else if(/^s(hift)?$/i.test(x))o=!0;else throw new Error("Unrecognized modifier name: "+x)}return s&&(e="Alt-"+e),i&&(e="Ctrl-"+e),h&&(e="Cmd-"+e),o&&(e="Shift-"+e),e}function Ic(e){var n={};for(var s in e)if(e.hasOwnProperty(s)){var i=e[s];if(/^(name|fallthrough|(de|at)tach)$/.test(s))continue;if(i=="..."){delete e[s];continue}for(var o=ht(s.split(" "),Rc),h=0;h<o.length;h++){var m=void 0,x=void 0;h==o.length-1?(x=o.join(" "),m=i):(x=o.slice(0,h+1).join(" "),m="...");var w=n[x];if(!w)n[x]=m;else if(w!=m)throw new Error("Inconsistent bindings for "+x)}delete e[s]}for(var S in n)e[S]=n[S];return e}function to(e,n,s,i){n=Ts(n);var o=n.call?n.call(e,i):n[e];if(o===!1)return"nothing";if(o==="...")return"multi";if(o!=null&&s(o))return"handled";if(n.fallthrough){if(Object.prototype.toString.call(n.fallthrough)!="[object Array]")return to(e,n.fallthrough,s,i);for(var h=0;h<n.fallthrough.length;h++){var m=to(e,n.fallthrough[h],s,i);if(m)return m}}}function Su(e){var n=typeof e=="string"?e:Xr[e.keyCode];return n=="Ctrl"||n=="Alt"||n=="Shift"||n=="Mod"}function _u(e,n,s){var i=e;return n.altKey&&i!="Alt"&&(e="Alt-"+e),(He?n.metaKey:n.ctrlKey)&&i!="Ctrl"&&(e="Ctrl-"+e),(He?n.ctrlKey:n.metaKey)&&i!="Mod"&&(e="Cmd-"+e),!s&&n.shiftKey&&i!="Shift"&&(e="Shift-"+e),e}function Cu(e,n){if(te&&e.keyCode==34&&e.char)return!1;var s=Xr[e.keyCode];return s==null||e.altGraphKey?!1:(e.keyCode==3&&e.code&&(s=e.code),_u(s,e,n))}function Ts(e){return typeof e=="string"?Ri[e]:e}function no(e,n){for(var s=e.doc.sel.ranges,i=[],o=0;o<s.length;o++){for(var h=n(s[o]);i.length&&Be(h.from,Ge(i).to)<=0;){var m=i.pop();if(Be(m.from,h.from)<0){h.from=m.from;break}}i.push(h)}Ln(e,function(){for(var x=i.length-1;x>=0;x--)Js(e.doc,"",i[x].from,i[x].to,"+delete");Fs(e)})}function Uo(e,n,s){var i=mn(e.text,n+s,s);return i<0||i>e.text.length?null:i}function qo(e,n,s){var i=Uo(e,n.ch,s);return i==null?null:new de(n.line,i,s<0?"after":"before")}function Ll(e,n,s,i,o){if(e){n.doc.direction=="rtl"&&(o=-o);var h=xt(s,n.doc.direction);if(h){var m=o<0?Ge(h):h[0],x=o<0==(m.level==1),w=x?"after":"before",S;if(m.level>0||n.doc.direction=="rtl"){var z=Si(n,s);S=o<0?s.text.length-1:0;var U=Lr(n,z,S).top;S=Jn(function(re){return Lr(n,z,re).top==U},o<0==(m.level==1)?m.from:m.to-1,S),w=="before"&&(S=Uo(s,S,1))}else S=o<0?m.to:m.from;return new de(i,S,w)}}return new de(i,o<0?s.text.length:0,o<0?"before":"after")}function Tu(e,n,s,i){var o=xt(n,e.doc.direction);if(!o)return qo(n,s,i);s.ch>=n.text.length?(s.ch=n.text.length,s.sticky="before"):s.ch<=0&&(s.ch=0,s.sticky="after");var h=ar(o,s.ch,s.sticky),m=o[h];if(e.doc.direction=="ltr"&&m.level%2==0&&(i>0?m.to>s.ch:m.from<s.ch))return qo(n,s,i);var x=function(Le,ze){return Uo(n,Le instanceof de?Le.ch:Le,ze)},w,S=function(Le){return e.options.lineWrapping?(w=w||Si(e,n),du(e,n,w,Le)):{begin:0,end:n.text.length}},z=S(s.sticky=="before"?x(s,-1):s.ch);if(e.doc.direction=="rtl"||m.level==1){var U=m.level==1==i<0,re=x(s,U?1:-1);if(re!=null&&(U?re<=m.to&&re<=z.end:re>=m.from&&re>=z.begin)){var Z=U?"before":"after";return new de(s.line,re,Z)}}var me=function(Le,ze,Me){for(var Ye=function(jt,Bn){return Bn?new de(s.line,x(jt,1),"before"):new de(s.line,jt,"after")};Le>=0&&Le<o.length;Le+=ze){var lt=o[Le],Xe=ze>0==(lt.level!=1),kt=Xe?Me.begin:x(Me.end,-1);if(lt.from<=kt&&kt<lt.to||(kt=Xe?lt.from:x(lt.to,-1),Me.begin<=kt&&kt<Me.end))return Ye(kt,Xe)}},ve=me(h+i,i,z);if(ve)return ve;var Ae=i>0?z.end:x(z.begin,-1);return Ae!=null&&!(i>0&&Ae==n.text.length)&&(ve=me(i>0?0:o.length-1,i,S(Ae)),ve)?ve:null}var Ko={selectAll:Qi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),St)},killLine:function(e){return no(e,function(n){if(n.empty()){var s=Qe(e.doc,n.head.line).text.length;return n.head.ch==s&&n.head.line<e.lastLine()?{from:n.head,to:de(n.head.line+1,0)}:{from:n.head,to:de(n.head.line,s)}}else return{from:n.from(),to:n.to()}})},deleteLine:function(e){return no(e,function(n){return{from:de(n.from().line,0),to:gt(e.doc,de(n.to().line+1,0))}})},delLineLeft:function(e){return no(e,function(n){return{from:de(n.from().line,0),to:n.from()}})},delWrappedLineLeft:function(e){return no(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return{from:i,to:n.from()}})},delWrappedLineRight:function(e){return no(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div");return{from:n.from(),to:i}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(de(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(de(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(n){return ju(e,n.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(n){return Nu(e,n.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(n){return Oc(e,n.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div")},We)},goLineLeft:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:0,top:s},"div")},We)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return i.ch<e.getLine(i.line).search(/\S/)?Nu(e,n.head):i},We)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("	")},insertSoftTab:function(e){for(var n=[],s=e.listSelections(),i=e.options.tabSize,o=0;o<s.length;o++){var h=s[o].from(),m=Ke(e.getLine(h.line),h.ch,i);n.push(Kt(i-m%i))}e.replaceSelections(n)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=[],i=0;i<n.length;i++)if(n[i].empty()){var o=n[i].head,h=Qe(e.doc,o.line).text;if(h){if(o.ch==h.length&&(o=new de(o.line,o.ch-1)),o.ch>0)o=new de(o.line,o.ch+1),e.replaceRange(h.charAt(o.ch-1)+h.charAt(o.ch-2),de(o.line,o.ch-2),o,"+transpose");else if(o.line>e.doc.first){var m=Qe(e.doc,o.line-1).text;m&&(o=new de(o.line,1),e.replaceRange(h.charAt(0)+e.doc.lineSeparator()+m.charAt(m.length-1),de(o.line-1,m.length-1),o,"+transpose"))}}s.push(new Pt(o,o))}e.setSelections(s)})},newlineAndIndent:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=n.length-1;s>=0;s--)e.replaceRange(e.doc.lineSeparator(),n[s].anchor,n[s].head,"+input");n=e.listSelections();for(var i=0;i<n.length;i++)e.indentLine(n[i].from().line,null,!0);Fs(e)})},openLine:function(e){return e.replaceSelection(`
`,"start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function ju(e,n){var s=Qe(e.doc,n),i=Rt(s);return i!=s&&(n=C(i)),Ll(!0,e,i,n,1)}function Oc(e,n){var s=Qe(e.doc,n),i=wo(s);return i!=s&&(n=C(i)),Ll(!0,e,s,n,-1)}function Nu(e,n){var s=ju(e,n.line),i=Qe(e.doc,s.line),o=xt(i,e.doc.direction);if(!o||o[0].level==0){var h=Math.max(s.ch,i.text.search(/\S/)),m=n.line==s.line&&n.ch<=h&&n.ch;return de(s.line,m?0:h,s.sticky)}return s}function $o(e,n,s){if(typeof n=="string"&&(n=Ko[n],!n))return!1;e.display.input.ensurePolled();var i=e.display.shift,o=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),s&&(e.display.shift=!1),o=n(e)!=Gt}finally{e.display.shift=i,e.state.suppressEdits=!1}return o}function Mc(e,n,s){for(var i=0;i<e.state.keyMaps.length;i++){var o=to(n,e.state.keyMaps[i],s,e);if(o)return o}return e.options.extraKeys&&to(n,e.options.extraKeys,s,e)||to(n,e.options.keyMap,s,e)}var Dc=new tt;function Go(e,n,s,i){var o=e.state.keySeq;if(o){if(Su(n))return"handled";if(/\'$/.test(n)?e.state.keySeq=null:Dc.set(50,function(){e.state.keySeq==o&&(e.state.keySeq=null,e.display.input.reset())}),zc(e,o+" "+n,s,i))return!0}return zc(e,n,s,i)}function zc(e,n,s,i){var o=Mc(e,n,i);return o=="multi"&&(e.state.keySeq=n),o=="handled"&&Dn(e,"keyHandled",e,n,s),(o=="handled"||o=="multi")&&(wn(s),zs(e)),!!o}function Eu(e,n){var s=Cu(n,!0);return s?n.shiftKey&&!e.state.keySeq?Go(e,"Shift-"+s,n,function(i){return $o(e,i,!0)})||Go(e,s,n,function(i){if(typeof i=="string"?/^go[A-Z]/.test(i):i.motion)return $o(e,i)}):Go(e,s,n,function(i){return $o(e,i)}):!1}function sp(e,n,s){return Go(e,"'"+s+"'",n,function(i){return $o(e,i,!0)})}var Lu=null;function Pu(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&(n.curOp.focus=A(De(n)),!Ot(n,e))){k&&E<11&&e.keyCode==27&&(e.returnValue=!1);var s=e.keyCode;n.display.shift=s==16||e.shiftKey;var i=Eu(n,e);te&&(Lu=i?s:null,!i&&s==88&&!Ps&&(Y?e.metaKey:e.ctrlKey)&&n.replaceSelection("",null,"cut")),y&&!Y&&!i&&s==46&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),s==18&&!/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className)&&Fc(n)}}function Fc(e){var n=e.display.lineDiv;G(n,"CodeMirror-crosshair");function s(i){(i.keyCode==18||!i.altKey)&&(Ce(n,"CodeMirror-crosshair"),Jt(document,"keyup",s),Jt(document,"mouseover",s))}it(document,"keyup",s),it(document,"mouseover",s)}function Au(e){e.keyCode==16&&(this.doc.sel.shift=!1),Ot(this,e)}function za(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&!(qi(n.display,e)||Ot(n,e)||e.ctrlKey&&!e.altKey||Y&&e.metaKey)){var s=e.keyCode,i=e.charCode;if(te&&s==Lu){Lu=null,wn(e);return}if(!(te&&(!e.which||e.which<10)&&Eu(n,e))){var o=String.fromCharCode(i??s);o!="\b"&&(sp(n,e,o)||n.display.input.onKeyPress(e))}}}var op=400,Ru=function(e,n,s){this.time=e,this.pos=n,this.button=s};Ru.prototype.compare=function(e,n,s){return this.time+op>e&&Be(n,this.pos)==0&&s==this.button};var Fa,yr;function Iu(e,n){var s=+new Date;return yr&&yr.compare(s,e,n)?(Fa=yr=null,"triple"):Fa&&Fa.compare(s,e,n)?(yr=new Ru(s,e,n),Fa=null,"double"):(Fa=new Ru(s,e,n),yr=null,"single")}function Wa(e){var n=this,s=n.display;if(!(Ot(n,e)||s.activeTouch&&s.input.supportsTouch())){if(s.input.ensurePolled(),s.shift=e.shiftKey,qi(s,e)){P||(s.scroller.draggable=!1,setTimeout(function(){return s.scroller.draggable=!0},100));return}if(!Pl(n,e)){var i=hs(n,e),o=En(e),h=i?Iu(i,o):"single";ke(n).focus(),o==1&&n.state.selectingText&&n.state.selectingText(e),!(i&&Wc(n,o,i,h,e))&&(o==1?i?Bc(n,i,h,e):Br(e)==s.scroller&&wn(e):o==2?(i&&Pa(n.doc,i),setTimeout(function(){return s.input.focus()},20)):o==3&&(je?n.display.input.onContextMenu(e):fl(n)))}}}function Wc(e,n,s,i,o){var h="Click";return i=="double"?h="Double"+h:i=="triple"&&(h="Triple"+h),h=(n==1?"Left":n==2?"Middle":"Right")+h,Go(e,_u(h,o),o,function(m){if(typeof m=="string"&&(m=Ko[m]),!m)return!1;var x=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),x=m(e,s)!=Gt}finally{e.state.suppressEdits=!1}return x})}function Hc(e,n,s){var i=e.getOption("configureMouse"),o=i?i(e,n,s):{};if(o.unit==null){var h=he?s.shiftKey&&s.metaKey:s.altKey;o.unit=h?"rectangle":n=="single"?"char":n=="double"?"word":"line"}return(o.extend==null||e.doc.extend)&&(o.extend=e.doc.extend||s.shiftKey),o.addNew==null&&(o.addNew=Y?s.metaKey:s.ctrlKey),o.moveOnDrag==null&&(o.moveOnDrag=!(Y?s.altKey:s.ctrlKey)),o}function Bc(e,n,s,i){k?setTimeout(Ie(_c,e),0):e.curOp.focus=A(De(e));var o=Hc(e,s,i),h=e.doc.sel,m;e.options.dragDrop&&jr&&!e.isReadOnly()&&s=="single"&&(m=h.contains(n))>-1&&(Be((m=h.ranges[m]).from(),n)<0||n.xRel>0)&&(Be(m.to(),n)>0||n.xRel<0)?Ou(e,i,n,o):Mu(e,i,n,o)}function Ou(e,n,s,i){var o=e.display,h=!1,m=dn(e,function(S){P&&(o.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:fl(e)),Jt(o.wrapper.ownerDocument,"mouseup",m),Jt(o.wrapper.ownerDocument,"mousemove",x),Jt(o.scroller,"dragstart",w),Jt(o.scroller,"drop",m),h||(wn(S),i.addNew||Pa(e.doc,s,null,null,i.extend),P&&!H||k&&E==9?setTimeout(function(){o.wrapper.ownerDocument.body.focus({preventScroll:!0}),o.input.focus()},20):o.input.focus())}),x=function(S){h=h||Math.abs(n.clientX-S.clientX)+Math.abs(n.clientY-S.clientY)>=10},w=function(){return h=!0};P&&(o.scroller.draggable=!0),e.state.draggingText=m,m.copy=!i.moveOnDrag,it(o.wrapper.ownerDocument,"mouseup",m),it(o.wrapper.ownerDocument,"mousemove",x),it(o.scroller,"dragstart",w),it(o.scroller,"drop",m),e.state.delayingBlurEvent=!0,setTimeout(function(){return o.input.focus()},20),o.scroller.dragDrop&&o.scroller.dragDrop()}function ro(e,n,s){if(s=="char")return new Pt(n,n);if(s=="word")return e.findWordAt(n);if(s=="line")return new Pt(de(n.line,0),gt(e.doc,de(n.line+1,0)));var i=s(e,n);return new Pt(i.from,i.to)}function Mu(e,n,s,i){k&&fl(e);var o=e.display,h=e.doc;wn(n);var m,x,w=h.sel,S=w.ranges;if(i.addNew&&!i.extend?(x=h.sel.contains(s),x>-1?m=S[x]:m=new Pt(s,s)):(m=h.sel.primary(),x=h.sel.primIndex),i.unit=="rectangle")i.addNew||(m=new Pt(s,s)),s=hs(e,n,!0,!0),x=-1;else{var z=ro(e,s,i.unit);i.extend?m=ks(m,z.anchor,z.head,i.extend):m=z}i.addNew?x==-1?(x=S.length,Wn(h,Pr(e,S.concat([m]),x),{scroll:!1,origin:"*mouse"})):S.length>1&&S[x].empty()&&i.unit=="char"&&!i.extend?(Wn(h,Pr(e,S.slice(0,x).concat(S.slice(x+1)),0),{scroll:!1,origin:"*mouse"}),w=h.sel):Mo(h,x,m,vt):(x=0,Wn(h,new Yn([m],0),vt),w=h.sel);var U=s;function re(Me){if(Be(U,Me)!=0)if(U=Me,i.unit=="rectangle"){for(var Ye=[],lt=e.options.tabSize,Xe=Ke(Qe(h,s.line).text,s.ch,lt),kt=Ke(Qe(h,Me.line).text,Me.ch,lt),jt=Math.min(Xe,kt),Bn=Math.max(Xe,kt),rn=Math.min(s.line,Me.line),xr=Math.min(e.lastLine(),Math.max(s.line,Me.line));rn<=xr;rn++){var rr=Qe(h,rn).text,vn=rt(rr,jt,lt);jt==Bn?Ye.push(new Pt(de(rn,vn),de(rn,vn))):rr.length>vn&&Ye.push(new Pt(de(rn,vn),de(rn,rt(rr,Bn,lt))))}Ye.length||Ye.push(new Pt(s,s)),Wn(h,Pr(e,w.ranges.slice(0,x).concat(Ye),x),{origin:"*mouse",scroll:!1}),e.scrollIntoView(Me)}else{var br=m,jn=ro(e,Me,i.unit),xn=br.anchor,zt;Be(jn.anchor,xn)>0?(zt=jn.head,xn=oi(br.from(),jn.anchor)):(zt=jn.anchor,xn=Sn(br.to(),jn.head));var dt=w.ranges.slice(0);dt[x]=Du(e,new Pt(gt(h,xn),zt)),Wn(h,Pr(e,dt,x),vt)}}var Z=o.wrapper.getBoundingClientRect(),me=0;function ve(Me){var Ye=++me,lt=hs(e,Me,!0,i.unit=="rectangle");if(lt)if(Be(lt,U)!=0){e.curOp.focus=A(De(e)),re(lt);var Xe=fs(o,h);(lt.line>=Xe.to||lt.line<Xe.from)&&setTimeout(dn(e,function(){me==Ye&&ve(Me)}),150)}else{var kt=Me.clientY<Z.top?-20:Me.clientY>Z.bottom?20:0;kt&&setTimeout(dn(e,function(){me==Ye&&(o.scroller.scrollTop+=kt,ve(Me))}),50)}}function Ae(Me){e.state.selectingText=!1,me=1/0,Me&&(wn(Me),o.input.focus()),Jt(o.wrapper.ownerDocument,"mousemove",Le),Jt(o.wrapper.ownerDocument,"mouseup",ze),h.history.lastSelOrigin=null}var Le=dn(e,function(Me){Me.buttons===0||!En(Me)?Ae(Me):ve(Me)}),ze=dn(e,Ae);e.state.selectingText=ze,it(o.wrapper.ownerDocument,"mousemove",Le),it(o.wrapper.ownerDocument,"mouseup",ze)}function Du(e,n){var s=n.anchor,i=n.head,o=Qe(e.doc,s.line);if(Be(s,i)==0&&s.sticky==i.sticky)return n;var h=xt(o);if(!h)return n;var m=ar(h,s.ch,s.sticky),x=h[m];if(x.from!=s.ch&&x.to!=s.ch)return n;var w=m+(x.from==s.ch==(x.level!=1)?0:1);if(w==0||w==h.length)return n;var S;if(i.line!=s.line)S=(i.line-s.line)*(e.doc.direction=="ltr"?1:-1)>0;else{var z=ar(h,i.ch,i.sticky),U=z-m||(i.ch-s.ch)*(x.level==1?-1:1);z==w-1||z==w?S=U<0:S=U>0}var re=h[w+(S?-1:0)],Z=S==(re.level==1),me=Z?re.from:re.to,ve=Z?"after":"before";return s.ch==me&&s.sticky==ve?n:new Pt(new de(s.line,me,ve),i)}function Uc(e,n,s,i){var o,h;if(n.touches)o=n.touches[0].clientX,h=n.touches[0].clientY;else try{o=n.clientX,h=n.clientY}catch{return!1}if(o>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;i&&wn(n);var m=e.display,x=m.lineDiv.getBoundingClientRect();if(h>x.bottom||!un(e,s))return In(n);h-=x.top-m.viewOffset;for(var w=0;w<e.display.gutterSpecs.length;++w){var S=m.gutters.childNodes[w];if(S&&S.getBoundingClientRect().right>=o){var z=B(e.doc,h),U=e.display.gutterSpecs[w];return It(e,s,e,z,U.className,n),In(n)}}}function Pl(e,n){return Uc(e,n,"gutterClick",!0)}function zu(e,n){qi(e.display,n)||qc(e,n)||Ot(e,n,"contextmenu")||je||e.display.input.onContextMenu(n)}function qc(e,n){return un(e,"gutterContextMenu")?Uc(e,n,"gutterContextMenu",!1):!1}function Fu(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),So(e)}var io={toString:function(){return"CodeMirror.Init"}},Kc={},Zn={};function vr(e){var n=e.optionHandlers;function s(i,o,h,m){e.defaults[i]=o,h&&(n[i]=m?function(x,w,S){S!=io&&h(x,w,S)}:h)}e.defineOption=s,e.Init=io,s("value","",function(i,o){return i.setValue(o)},!0),s("mode",null,function(i,o){i.doc.modeOption=o,xl(i)},!0),s("indentUnit",2,xl,!0),s("indentWithTabs",!1),s("smartIndent",!0),s("tabSize",4,function(i){Ks(i),So(i),er(i)},!0),s("lineSeparator",null,function(i,o){if(i.doc.lineSep=o,!!o){var h=[],m=i.doc.first;i.doc.iter(function(w){for(var S=0;;){var z=w.text.indexOf(o,S);if(z==-1)break;S=z+o.length,h.push(de(m,z))}m++});for(var x=h.length-1;x>=0;x--)Js(i.doc,o,h[x],de(h[x].line,h[x].ch+o.length))}}),s("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,function(i,o,h){i.state.specialChars=new RegExp(o.source+(o.test("	")?"":"|	"),"g"),h!=io&&i.refresh()}),s("specialCharPlaceholder",Fd,function(i){return i.refresh()},!0),s("electricChars",!0),s("inputStyle",K?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),s("spellcheck",!1,function(i,o){return i.getInputField().spellcheck=o},!0),s("autocorrect",!1,function(i,o){return i.getInputField().autocorrect=o},!0),s("autocapitalize",!1,function(i,o){return i.getInputField().autocapitalize=o},!0),s("rtlMoveVisually",!le),s("wholeLineUpdateBefore",!0),s("theme","default",function(i){Fu(i),Dr(i)},!0),s("keyMap","default",function(i,o,h){var m=Ts(o),x=h!=io&&Ts(h);x&&x.detach&&x.detach(i,m),m.attach&&m.attach(i,x||null)}),s("extraKeys",null),s("configureMouse",null),s("lineWrapping",!1,Gc,!0),s("gutters",[],function(i,o){i.display.gutterSpecs=Ao(o,i.options.lineNumbers),Dr(i)},!0),s("fixedGutter",!0,function(i,o){i.display.gutters.style.left=o?To(i.display)+"px":"0",i.refresh()},!0),s("coverGutterNextToScrollbar",!1,function(i){return Hs(i)},!0),s("scrollbarStyle","native",function(i){yl(i),Hs(i),i.display.scrollbars.setScrollTop(i.doc.scrollTop),i.display.scrollbars.setScrollLeft(i.doc.scrollLeft)},!0),s("lineNumbers",!1,function(i,o){i.display.gutterSpecs=Ao(i.options.gutters,o),Dr(i)},!0),s("firstLineNumber",1,Dr,!0),s("lineNumberFormatter",function(i){return i},Dr,!0),s("showCursorWhenSelecting",!1,Gr,!0),s("resetSelectionOnContextMenu",!0),s("lineWiseCopyCut",!0),s("pasteLinesPerSelection",!0),s("selectionsMayTouch",!1),s("readOnly",!1,function(i,o){o=="nocursor"&&(Ut(i),i.display.input.blur()),i.display.input.readOnlyChanged(o)}),s("screenReaderLabel",null,function(i,o){o=o===""?null:o,i.display.input.screenReaderLabelChanged(o)}),s("disableInput",!1,function(i,o){o||i.display.input.reset()},!0),s("dragDrop",!0,$c),s("allowDropFileTypes",null),s("cursorBlinkRate",530),s("cursorScrollMargin",0),s("cursorHeight",1,Gr,!0),s("singleCursorHeightPerLine",!0,Gr,!0),s("workTime",100),s("workDelay",100),s("flattenSpans",!0,Ks,!0),s("addModeClass",!1,Ks,!0),s("pollInterval",100),s("undoDepth",200,function(i,o){return i.doc.history.undoDepth=o}),s("historyEventDelay",1250),s("viewportMargin",10,function(i){return i.refresh()},!0),s("maxHighlightLength",1e4,Ks,!0),s("moveInputWithCursor",!0,function(i,o){o||i.display.input.resetPosition()}),s("tabindex",null,function(i,o){return i.display.input.getField().tabIndex=o||""}),s("autofocus",null),s("direction","ltr",function(i,o){return i.doc.setDirection(o)},!0),s("phrases",null)}function $c(e,n,s){var i=s&&s!=io;if(!n!=!i){var o=e.display.dragFunctions,h=n?it:Jt;h(e.display.scroller,"dragstart",o.start),h(e.display.scroller,"dragenter",o.enter),h(e.display.scroller,"dragover",o.over),h(e.display.scroller,"dragleave",o.leave),h(e.display.scroller,"drop",o.drop)}}function Gc(e){e.options.lineWrapping?(G(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Ce(e.display.wrapper,"CodeMirror-wrap"),ua(e)),ya(e),er(e),So(e),setTimeout(function(){return Hs(e)},100)}function Zt(e,n){var s=this;if(!(this instanceof Zt))return new Zt(e,n);this.options=n=n?Ue(n):{},Ue(Kc,n,!1);var i=n.value;typeof i=="string"?i=new Mt(i,n.mode,null,n.lineSeparator,n.direction):n.mode&&(i.modeOption=n.mode),this.doc=i;var o=new Zt.inputStyles[n.inputStyle](this),h=this.display=new vl(e,i,o,n);h.wrapper.CodeMirror=this,Fu(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),yl(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new tt,keySeq:null,specialChars:null},n.autofocus&&!K&&h.input.focus(),k&&E<11&&setTimeout(function(){return s.display.input.reset(!0)},20),Yc(this),ku(),vs(this),this.curOp.forceUpdate=!0,nn(this,i),n.autofocus&&!K||this.hasFocus()?setTimeout(function(){s.hasFocus()&&!s.state.focused&&ml(s)},20):Ut(this);for(var m in Zn)Zn.hasOwnProperty(m)&&Zn[m](this,n[m],io);gu(this),n.finishInit&&n.finishInit(this);for(var x=0;x<Al.length;++x)Al[x](this);Yr(this),P&&n.lineWrapping&&getComputedStyle(h.lineDiv).textRendering=="optimizelegibility"&&(h.lineDiv.style.textRendering="auto")}Zt.defaults=Kc,Zt.optionHandlers=Zn;function Yc(e){var n=e.display;it(n.scroller,"mousedown",dn(e,Wa)),k&&E<11?it(n.scroller,"dblclick",dn(e,function(w){if(!Ot(e,w)){var S=hs(e,w);if(!(!S||Pl(e,w)||qi(e.display,w))){wn(w);var z=e.findWordAt(S);Pa(e.doc,z.anchor,z.head)}}})):it(n.scroller,"dblclick",function(w){return Ot(e,w)||wn(w)}),it(n.scroller,"contextmenu",function(w){return zu(e,w)}),it(n.input.getField(),"contextmenu",function(w){n.scroller.contains(w.target)||zu(e,w)});var s,i={end:0};function o(){n.activeTouch&&(s=setTimeout(function(){return n.activeTouch=null},1e3),i=n.activeTouch,i.end=+new Date)}function h(w){if(w.touches.length!=1)return!1;var S=w.touches[0];return S.radiusX<=1&&S.radiusY<=1}function m(w,S){if(S.left==null)return!0;var z=S.left-w.left,U=S.top-w.top;return z*z+U*U>400}it(n.scroller,"touchstart",function(w){if(!Ot(e,w)&&!h(w)&&!Pl(e,w)){n.input.ensurePolled(),clearTimeout(s);var S=+new Date;n.activeTouch={start:S,moved:!1,prev:S-i.end<=300?i:null},w.touches.length==1&&(n.activeTouch.left=w.touches[0].pageX,n.activeTouch.top=w.touches[0].pageY)}}),it(n.scroller,"touchmove",function(){n.activeTouch&&(n.activeTouch.moved=!0)}),it(n.scroller,"touchend",function(w){var S=n.activeTouch;if(S&&!qi(n,w)&&S.left!=null&&!S.moved&&new Date-S.start<300){var z=e.coordsChar(n.activeTouch,"page"),U;!S.prev||m(S,S.prev)?U=new Pt(z,z):!S.prev.prev||m(S,S.prev.prev)?U=e.findWordAt(z):U=new Pt(de(z.line,0),gt(e.doc,de(z.line+1,0))),e.setSelection(U.anchor,U.head),e.focus(),wn(w)}o()}),it(n.scroller,"touchcancel",o),it(n.scroller,"scroll",function(){n.scroller.clientHeight&&(gs(e,n.scroller.scrollTop),Yi(e,n.scroller.scrollLeft,!0),It(e,"scroll",e))}),it(n.scroller,"mousewheel",function(w){return Us(e,w)}),it(n.scroller,"DOMMouseScroll",function(w){return Us(e,w)}),it(n.wrapper,"scroll",function(){return n.wrapper.scrollTop=n.wrapper.scrollLeft=0}),n.dragFunctions={enter:function(w){Ot(e,w)||ur(w)},over:function(w){Ot(e,w)||(ip(e,w),ur(w))},start:function(w){return Da(e,w)},drop:dn(e,Ma),leave:function(w){Ot(e,w)||Qn(e)}};var x=n.input.getField();it(x,"keyup",function(w){return Au.call(e,w)}),it(x,"keydown",dn(e,Pu)),it(x,"keypress",dn(e,za)),it(x,"focus",function(w){return ml(e,w)}),it(x,"blur",function(w){return Ut(e,w)})}var Al=[];Zt.defineInitHook=function(e){return Al.push(e)};function so(e,n,s,i){var o=e.doc,h;s==null&&(s="add"),s=="smart"&&(o.mode.indent?h=Et(e,n).state:s="prev");var m=e.options.tabSize,x=Qe(o,n),w=Ke(x.text,null,m);x.stateAfter&&(x.stateAfter=null);var S=x.text.match(/^\s*/)[0],z;if(!i&&!/\S/.test(x.text))z=0,s="not";else if(s=="smart"&&(z=o.mode.indent(h,x.text.slice(S.length),x.text),z==Gt||z>150)){if(!i)return;s="prev"}s=="prev"?n>o.first?z=Ke(Qe(o,n-1).text,null,m):z=0:s=="add"?z=w+e.options.indentUnit:s=="subtract"?z=w-e.options.indentUnit:typeof s=="number"&&(z=w+s),z=Math.max(0,z);var U="",re=0;if(e.options.indentWithTabs)for(var Z=Math.floor(z/m);Z;--Z)re+=m,U+="	";if(re<z&&(U+=Kt(z-re)),U!=S)return Js(o,U,de(n,0),de(n,S.length),"+input"),x.stateAfter=null,!0;for(var me=0;me<o.sel.ranges.length;me++){var ve=o.sel.ranges[me];if(ve.head.line==n&&ve.head.ch<S.length){var Ae=de(n,S.length);Mo(o,me,new Pt(Ae,Ae));break}}}var Qr=null;function Yo(e){Qr=e}function Rl(e,n,s,i,o){var h=e.doc;e.display.shift=!1,i||(i=h.sel);var m=+new Date-200,x=o=="paste"||e.state.pasteIncoming>m,w=cr(n),S=null;if(x&&i.ranges.length>1)if(Qr&&Qr.text.join(`
`)==n){if(i.ranges.length%Qr.text.length==0){S=[];for(var z=0;z<Qr.text.length;z++)S.push(h.splitLines(Qr.text[z]))}}else w.length==i.ranges.length&&e.options.pasteLinesPerSelection&&(S=ht(w,function(Le){return[Le]}));for(var U=e.curOp.updateInput,re=i.ranges.length-1;re>=0;re--){var Z=i.ranges[re],me=Z.from(),ve=Z.to();Z.empty()&&(s&&s>0?me=de(me.line,me.ch-s):e.state.overwrite&&!x?ve=de(ve.line,Math.min(Qe(h,ve.line).text.length,ve.ch+Ge(w).length)):x&&Qr&&Qr.lineWise&&Qr.text.join(`
`)==w.join(`
`)&&(me=ve=de(me.line,0)));var Ae={from:me,to:ve,text:S?S[re%S.length]:w,origin:o||(x?"paste":e.state.cutIncoming>m?"cut":"+input")};Vs(e.doc,Ae),Dn(e,"inputRead",e,Ae)}n&&!x&&Il(e,n),Fs(e),e.curOp.updateInput<2&&(e.curOp.updateInput=U),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Wu(e,n){var s=e.clipboardData&&e.clipboardData.getData("Text");if(s)return e.preventDefault(),!n.isReadOnly()&&!n.options.disableInput&&n.hasFocus()&&Ln(n,function(){return Rl(n,s,0,null,"paste")}),!0}function Il(e,n){if(!(!e.options.electricChars||!e.options.smartIndent))for(var s=e.doc.sel,i=s.ranges.length-1;i>=0;i--){var o=s.ranges[i];if(!(o.head.ch>100||i&&s.ranges[i-1].head.line==o.head.line)){var h=e.getModeAt(o.head),m=!1;if(h.electricChars){for(var x=0;x<h.electricChars.length;x++)if(n.indexOf(h.electricChars.charAt(x))>-1){m=so(e,o.head.line,"smart");break}}else h.electricInput&&h.electricInput.test(Qe(e.doc,o.head.line).text.slice(0,o.head.ch))&&(m=so(e,o.head.line,"smart"));m&&Dn(e,"electricInput",e,o.head.line)}}}function Ol(e){for(var n=[],s=[],i=0;i<e.doc.sel.ranges.length;i++){var o=e.doc.sel.ranges[i].head.line,h={anchor:de(o,0),head:de(o+1,0)};s.push(h),n.push(e.getRange(h.anchor,h.head))}return{text:n,ranges:s}}function Ml(e,n,s,i){e.setAttribute("autocorrect",s?"on":"off"),e.setAttribute("autocapitalize",i?"on":"off"),e.setAttribute("spellcheck",!!n)}function Dl(){var e=N("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),n=N("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return P?e.style.width="1000px":e.setAttribute("wrap","off"),W&&(e.style.border="1px solid black"),n}function zl(e){var n=e.optionHandlers,s=e.helpers={};e.prototype={constructor:e,focus:function(){ke(this).focus(),this.display.input.focus()},setOption:function(i,o){var h=this.options,m=h[i];h[i]==o&&i!="mode"||(h[i]=o,n.hasOwnProperty(i)&&dn(this,n[i])(this,o,m),It(this,"optionChange",this,i))},getOption:function(i){return this.options[i]},getDoc:function(){return this.doc},addKeyMap:function(i,o){this.state.keyMaps[o?"push":"unshift"](Ts(i))},removeKeyMap:function(i){for(var o=this.state.keyMaps,h=0;h<o.length;++h)if(o[h]==i||o[h].name==i)return o.splice(h,1),!0},addOverlay:Tn(function(i,o){var h=i.token?i:e.getMode(this.options,i);if(h.startState)throw new Error("Overlays may not be stateful.");oe(this.state.overlays,{mode:h,modeSpec:i,opaque:o&&o.opaque,priority:o&&o.priority||0},function(m){return m.priority}),this.state.modeGen++,er(this)}),removeOverlay:Tn(function(i){for(var o=this.state.overlays,h=0;h<o.length;++h){var m=o[h].modeSpec;if(m==i||typeof i=="string"&&m.name==i){o.splice(h,1),this.state.modeGen++,er(this);return}}}),indentLine:Tn(function(i,o,h){typeof o!="string"&&typeof o!="number"&&(o==null?o=this.options.smartIndent?"smart":"prev":o=o?"add":"subtract"),fe(this.doc,i)&&so(this,i,o,h)}),indentSelection:Tn(function(i){for(var o=this.doc.sel.ranges,h=-1,m=0;m<o.length;m++){var x=o[m];if(x.empty())x.head.line>h&&(so(this,x.head.line,i,!0),h=x.head.line,m==this.doc.sel.primIndex&&Fs(this));else{var w=x.from(),S=x.to(),z=Math.max(h,w.line);h=Math.min(this.lastLine(),S.line-(S.ch?0:1))+1;for(var U=z;U<h;++U)so(this,U,i);var re=this.doc.sel.ranges;w.ch==0&&o.length==re.length&&re[m].from().ch>0&&Mo(this.doc,m,new Pt(w,re[m].to()),St)}}}),getTokenAt:function(i,o){return oa(this,i,o)},getLineTokens:function(i,o){return oa(this,de(i),o,!0)},getTokenTypeAt:function(i){i=gt(this.doc,i);var o=as(this,Qe(this.doc,i.line)),h=0,m=(o.length-1)/2,x=i.ch,w;if(x==0)w=o[2];else for(;;){var S=h+m>>1;if((S?o[S*2-1]:0)>=x)m=S;else if(o[S*2+1]<x)h=S+1;else{w=o[S*2+2];break}}var z=w?w.indexOf("overlay "):-1;return z<0?w:z==0?null:w.slice(0,z-1)},getModeAt:function(i){var o=this.doc.mode;return o.innerMode?e.innerMode(o,this.getTokenAt(i).state).mode:o},getHelper:function(i,o){return this.getHelpers(i,o)[0]},getHelpers:function(i,o){var h=[];if(!s.hasOwnProperty(o))return h;var m=s[o],x=this.getModeAt(i);if(typeof x[o]=="string")m[x[o]]&&h.push(m[x[o]]);else if(x[o])for(var w=0;w<x[o].length;w++){var S=m[x[o][w]];S&&h.push(S)}else x.helperType&&m[x.helperType]?h.push(m[x.helperType]):m[x.name]&&h.push(m[x.name]);for(var z=0;z<m._global.length;z++){var U=m._global[z];U.pred(x,this)&&$e(h,U.val)==-1&&h.push(U.val)}return h},getStateAfter:function(i,o){var h=this.doc;return i=Za(h,i??h.first+h.size-1),Et(this,i+1,o).state},cursorCoords:function(i,o){var h,m=this.doc.sel.primary();return i==null?h=m.head:typeof i=="object"?h=gt(this.doc,i):h=i?m.from():m.to(),Cn(this,h,o||"page")},charCoords:function(i,o){return ll(this,gt(this.doc,i),o||"page")},coordsChar:function(i,o){return i=kc(this,i,o||"page"),cl(this,i.left,i.top)},lineAtHeight:function(i,o){return i=kc(this,{top:i,left:0},o||"page").top,B(this.doc,i+this.display.viewOffset)},heightAtLine:function(i,o,h){var m=!1,x;if(typeof i=="number"){var w=this.doc.first+this.doc.size-1;i<this.doc.first?i=this.doc.first:i>w&&(i=w,m=!0),x=Qe(this.doc,i)}else x=i;return al(this,x,{top:0,left:0},o||"page",h||m).top+(m?this.doc.height-_n(x):0)},defaultTextHeight:function(){return _i(this.display)},defaultCharWidth:function(){return ps(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(i,o,h,m,x){var w=this.display;i=Cn(this,gt(this.doc,i));var S=i.bottom,z=i.left;if(o.style.position="absolute",o.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(o),w.sizer.appendChild(o),m=="over")S=i.top;else if(m=="above"||m=="near"){var U=Math.max(w.wrapper.clientHeight,this.doc.height),re=Math.max(w.sizer.clientWidth,w.lineSpace.clientWidth);(m=="above"||i.bottom+o.offsetHeight>U)&&i.top>o.offsetHeight?S=i.top-o.offsetHeight:i.bottom+o.offsetHeight<=U&&(S=i.bottom),z+o.offsetWidth>re&&(z=re-o.offsetWidth)}o.style.top=S+"px",o.style.left=o.style.right="",x=="right"?(z=w.sizer.clientWidth-o.offsetWidth,o.style.right="0px"):(x=="left"?z=0:x=="middle"&&(z=(w.sizer.clientWidth-o.offsetWidth)/2),o.style.left=z+"px"),h&&wa(this,{left:z,top:S,right:z+o.offsetWidth,bottom:S+o.offsetHeight})},triggerOnKeyDown:Tn(Pu),triggerOnKeyPress:Tn(za),triggerOnKeyUp:Au,triggerOnMouseDown:Tn(Wa),execCommand:function(i){if(Ko.hasOwnProperty(i))return Ko[i].call(null,this)},triggerElectric:Tn(function(i){Il(this,i)}),findPosH:function(i,o,h,m){var x=1;o<0&&(x=-1,o=-o);for(var w=gt(this.doc,i),S=0;S<o&&(w=Hu(this.doc,w,x,h,m),!w.hitSide);++S);return w},moveH:Tn(function(i,o){var h=this;this.extendSelectionsBy(function(m){return h.display.shift||h.doc.extend||m.empty()?Hu(h.doc,m.head,i,o,h.options.rtlMoveVisually):i<0?m.from():m.to()},We)}),deleteH:Tn(function(i,o){var h=this.doc.sel,m=this.doc;h.somethingSelected()?m.replaceSelection("",null,"+delete"):no(this,function(x){var w=Hu(m,x.head,i,o,!1);return i<0?{from:w,to:x.head}:{from:x.head,to:w}})}),findPosV:function(i,o,h,m){var x=1,w=m;o<0&&(x=-1,o=-o);for(var S=gt(this.doc,i),z=0;z<o;++z){var U=Cn(this,S,"div");if(w==null?w=U.left:U.left=w,S=Bu(this,U,x,h),S.hitSide)break}return S},moveV:Tn(function(i,o){var h=this,m=this.doc,x=[],w=!this.display.shift&&!m.extend&&m.sel.somethingSelected();if(m.extendSelectionsBy(function(z){if(w)return i<0?z.from():z.to();var U=Cn(h,z.head,"div");z.goalColumn!=null&&(U.left=z.goalColumn),x.push(U.left);var re=Bu(h,U,i,o);return o=="page"&&z==m.sel.primary()&&ms(h,ll(h,re,"div").top-U.top),re},We),x.length)for(var S=0;S<m.sel.ranges.length;S++)m.sel.ranges[S].goalColumn=x[S]}),findWordAt:function(i){var o=this.doc,h=Qe(o,i.line).text,m=i.ch,x=i.ch;if(h){var w=this.getHelper(i,"wordChars");(i.sticky=="before"||x==h.length)&&m?--m:++x;for(var S=h.charAt(m),z=at(S,w)?function(U){return at(U,w)}:/\s/.test(S)?function(U){return/\s/.test(U)}:function(U){return!/\s/.test(U)&&!at(U)};m>0&&z(h.charAt(m-1));)--m;for(;x<h.length&&z(h.charAt(x));)++x}return new Pt(de(i.line,m),de(i.line,x))},toggleOverwrite:function(i){i!=null&&i==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?G(this.display.cursorDiv,"CodeMirror-overwrite"):Ce(this.display.cursorDiv,"CodeMirror-overwrite"),It(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==A(De(this))},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:Tn(function(i,o){ka(this,i,o)}),getScrollInfo:function(){var i=this.display.scroller;return{left:i.scrollLeft,top:i.scrollTop,height:i.scrollHeight-ui(this)-this.display.barHeight,width:i.scrollWidth-ui(this)-this.display.barWidth,clientHeight:ds(this),clientWidth:cs(this)}},scrollIntoView:Tn(function(i,o){i==null?(i={from:this.doc.sel.primary().head,to:null},o==null&&(o=this.options.cursorScrollMargin)):typeof i=="number"?i={from:de(i,0),to:null}:i.from==null&&(i={from:i,to:null}),i.to||(i.to=i.from),i.margin=o||0,i.from.line!=null?tp(this,i):_a(this,i.from,i.to,i.margin)}),setSize:Tn(function(i,o){var h=this,m=function(w){return typeof w=="number"||/^\d+$/.test(String(w))?w+"px":w};i!=null&&(this.display.wrapper.style.width=m(i)),o!=null&&(this.display.wrapper.style.height=m(o)),this.options.lineWrapping&&au(this);var x=this.display.viewFrom;this.doc.iter(x,this.display.viewTo,function(w){if(w.widgets){for(var S=0;S<w.widgets.length;S++)if(w.widgets[S].noHScroll){$i(h,x,"widget");break}}++x}),this.curOp.forceUpdate=!0,It(this,"refresh",this)}),operation:function(i){return Ln(this,i)},startOperation:function(){return vs(this)},endOperation:function(){return Yr(this)},refresh:Tn(function(){var i=this.display.cachedTextHeight;er(this),this.curOp.forceUpdate=!0,So(this),ka(this,this.doc.scrollLeft,this.doc.scrollTop),tr(this.display),(i==null||Math.abs(i-_i(this.display))>.5||this.options.lineWrapping)&&ya(this),It(this,"refresh",this)}),swapDoc:Tn(function(i){var o=this.doc;return o.cm=null,this.state.selectingText&&this.state.selectingText(),nn(this,i),So(this),this.display.input.reset(),ka(this,i.scrollLeft,i.scrollTop),this.curOp.forceScroll=!0,Dn(this,"swapDoc",this,o),o}),phrase:function(i){var o=this.options.phrases;return o&&Object.prototype.hasOwnProperty.call(o,i)?o[i]:i},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},lr(e),e.registerHelper=function(i,o,h){s.hasOwnProperty(i)||(s[i]=e[i]={_global:[]}),s[i][o]=h},e.registerGlobalHelper=function(i,o,h,m){e.registerHelper(i,o,m),s[i]._global.push({pred:h,val:m})}}function Hu(e,n,s,i,o){var h=n,m=s,x=Qe(e,n.line),w=o&&e.direction=="rtl"?-s:s;function S(){var ze=n.line+w;return ze<e.first||ze>=e.first+e.size?!1:(n=new de(ze,n.ch,n.sticky),x=Qe(e,ze))}function z(ze){var Me;if(i=="codepoint"){var Ye=x.text.charCodeAt(n.ch+(s>0?0:-1));if(isNaN(Ye))Me=null;else{var lt=s>0?Ye>=55296&&Ye<56320:Ye>=56320&&Ye<57343;Me=new de(n.line,Math.max(0,Math.min(x.text.length,n.ch+s*(lt?2:1))),-s)}}else o?Me=Tu(e.cm,x,n,s):Me=qo(x,n,s);if(Me==null)if(!ze&&S())n=Ll(o,e.cm,x,n.line,w);else return!1;else n=Me;return!0}if(i=="char"||i=="codepoint")z();else if(i=="column")z(!0);else if(i=="word"||i=="group")for(var U=null,re=i=="group",Z=e.cm&&e.cm.getHelper(n,"wordChars"),me=!0;!(s<0&&!z(!me));me=!1){var ve=x.text.charAt(n.ch)||`
`,Ae=at(ve,Z)?"w":re&&ve==`
`?"n":!re||/\s/.test(ve)?null:"p";if(re&&!me&&!Ae&&(Ae="s"),U&&U!=Ae){s<0&&(s=1,z(),n.sticky="after");break}if(Ae&&(U=Ae),s>0&&!z(!me))break}var Le=Ra(e,n,h,m,!0);return Tt(h,Le)&&(Le.hitSide=!0),Le}function Bu(e,n,s,i){var o=e.doc,h=n.left,m;if(i=="page"){var x=Math.min(e.display.wrapper.clientHeight,ke(e).innerHeight||o(e).documentElement.clientHeight),w=Math.max(x-.5*_i(e.display),3);m=(s>0?n.bottom:n.top)+s*w}else i=="line"&&(m=s>0?n.bottom+3:n.top-3);for(var S;S=cl(e,h,m),!!S.outside;){if(s<0?m<=0:m>=o.height){S.hitSide=!0;break}m+=s*5}return S}var Dt=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new tt,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};Dt.prototype.init=function(e){var n=this,s=this,i=s.cm,o=s.div=e.lineDiv;o.contentEditable=!0,Ml(o,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize);function h(x){for(var w=x.target;w;w=w.parentNode){if(w==o)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(w.className))break}return!1}it(o,"paste",function(x){!h(x)||Ot(i,x)||Wu(x,i)||E<=11&&setTimeout(dn(i,function(){return n.updateFromDOM()}),20)}),it(o,"compositionstart",function(x){n.composing={data:x.data,done:!1}}),it(o,"compositionupdate",function(x){n.composing||(n.composing={data:x.data,done:!1})}),it(o,"compositionend",function(x){n.composing&&(x.data!=n.composing.data&&n.readFromDOMSoon(),n.composing.done=!0)}),it(o,"touchstart",function(){return s.forceCompositionEnd()}),it(o,"input",function(){n.composing||n.readFromDOMSoon()});function m(x){if(!(!h(x)||Ot(i,x))){if(i.somethingSelected())Yo({lineWise:!1,text:i.getSelections()}),x.type=="cut"&&i.replaceSelection("",null,"cut");else if(i.options.lineWiseCopyCut){var w=Ol(i);Yo({lineWise:!0,text:w.text}),x.type=="cut"&&i.operation(function(){i.setSelections(w.ranges,0,St),i.replaceSelection("",null,"cut")})}else return;if(x.clipboardData){x.clipboardData.clearData();var S=Qr.text.join(`
`);if(x.clipboardData.setData("Text",S),x.clipboardData.getData("Text")==S){x.preventDefault();return}}var z=Dl(),U=z.firstChild;Ml(U),i.display.lineSpace.insertBefore(z,i.display.lineSpace.firstChild),U.value=Qr.text.join(`
`);var re=A(qe(o));Q(U),setTimeout(function(){i.display.lineSpace.removeChild(z),re.focus(),re==o&&s.showPrimarySelection()},50)}}it(o,"copy",m),it(o,"cut",m)},Dt.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Dt.prototype.prepareSelection=function(){var e=pl(this.cm,!1);return e.focus=A(qe(this.div))==this.div,e},Dt.prototype.showSelection=function(e,n){!e||!this.cm.display.view.length||((e.focus||n)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Dt.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Dt.prototype.showPrimarySelection=function(){var e=this.getSelection(),n=this.cm,s=n.doc.sel.primary(),i=s.from(),o=s.to();if(n.display.viewTo==n.display.viewFrom||i.line>=n.display.viewTo||o.line<n.display.viewFrom){e.removeAllRanges();return}var h=Ha(n,e.anchorNode,e.anchorOffset),m=Ha(n,e.focusNode,e.focusOffset);if(!(h&&!h.bad&&m&&!m.bad&&Be(oi(h,m),i)==0&&Be(Sn(h,m),o)==0)){var x=n.display.view,w=i.line>=n.display.viewFrom&&Uu(n,i)||{node:x[0].measure.map[2],offset:0},S=o.line<n.display.viewTo&&Uu(n,o);if(!S){var z=x[x.length-1].measure,U=z.maps?z.maps[z.maps.length-1]:z.map;S={node:U[U.length-1],offset:U[U.length-2]-U[U.length-3]}}if(!w||!S){e.removeAllRanges();return}var re=e.rangeCount&&e.getRangeAt(0),Z;try{Z=q(w.node,w.offset,S.offset,S.node)}catch{}Z&&(!y&&n.state.focused?(e.collapse(w.node,w.offset),Z.collapsed||(e.removeAllRanges(),e.addRange(Z))):(e.removeAllRanges(),e.addRange(Z)),re&&e.anchorNode==null?e.addRange(re):y&&this.startGracePeriod()),this.rememberSelection()}},Dt.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Dt.prototype.showMultipleSelections=function(e){ye(this.cm.display.cursorDiv,e.cursors),ye(this.cm.display.selectionDiv,e.selection)},Dt.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Dt.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var n=e.getRangeAt(0).commonAncestorContainer;return j(this.div,n)},Dt.prototype.focus=function(){this.cm.options.readOnly!="nocursor"&&((!this.selectionInEditor()||A(qe(this.div))!=this.div)&&this.showSelection(this.prepareSelection(),!0),this.div.focus())},Dt.prototype.blur=function(){this.div.blur()},Dt.prototype.getField=function(){return this.div},Dt.prototype.supportsTouch=function(){return!0},Dt.prototype.receivedFocus=function(){var e=this,n=this;this.selectionInEditor()?setTimeout(function(){return e.pollSelection()},20):Ln(this.cm,function(){return n.cm.curOp.selectionChanged=!0});function s(){n.cm.state.focused&&(n.pollSelection(),n.polling.set(n.cm.options.pollInterval,s))}this.polling.set(this.cm.options.pollInterval,s)},Dt.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Dt.prototype.pollSelection=function(){if(!(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged())){var e=this.getSelection(),n=this.cm;if(F&&R&&this.cm.display.gutterSpecs.length&&Fl(e.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();return}if(!this.composing){this.rememberSelection();var s=Ha(n,e.anchorNode,e.anchorOffset),i=Ha(n,e.focusNode,e.focusOffset);s&&i&&Ln(n,function(){Wn(n.doc,zn(s,i),St),(s.bad||i.bad)&&(n.curOp.selectionChanged=!0)})}}},Dt.prototype.pollContent=function(){this.readDOMTimeout!=null&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e=this.cm,n=e.display,s=e.doc.sel.primary(),i=s.from(),o=s.to();if(i.ch==0&&i.line>e.firstLine()&&(i=de(i.line-1,Qe(e.doc,i.line-1).length)),o.ch==Qe(e.doc,o.line).text.length&&o.line<e.lastLine()&&(o=de(o.line+1,0)),i.line<n.viewFrom||o.line>n.viewTo-1)return!1;var h,m,x;i.line==n.viewFrom||(h=Ci(e,i.line))==0?(m=C(n.view[0].line),x=n.view[0].node):(m=C(n.view[h].line),x=n.view[h-1].node.nextSibling);var w=Ci(e,o.line),S,z;if(w==n.view.length-1?(S=n.viewTo-1,z=n.lineDiv.lastChild):(S=C(n.view[w+1].line)-1,z=n.view[w+1].node.previousSibling),!x)return!1;for(var U=e.doc.splitLines(ap(e,x,z,m,S)),re=si(e.doc,de(m,0),de(S,Qe(e.doc,S).text.length));U.length>1&&re.length>1;)if(Ge(U)==Ge(re))U.pop(),re.pop(),S--;else if(U[0]==re[0])U.shift(),re.shift(),m++;else break;for(var Z=0,me=0,ve=U[0],Ae=re[0],Le=Math.min(ve.length,Ae.length);Z<Le&&ve.charCodeAt(Z)==Ae.charCodeAt(Z);)++Z;for(var ze=Ge(U),Me=Ge(re),Ye=Math.min(ze.length-(U.length==1?Z:0),Me.length-(re.length==1?Z:0));me<Ye&&ze.charCodeAt(ze.length-me-1)==Me.charCodeAt(Me.length-me-1);)++me;if(U.length==1&&re.length==1&&m==i.line)for(;Z&&Z>i.ch&&ze.charCodeAt(ze.length-me-1)==Me.charCodeAt(Me.length-me-1);)Z--,me++;U[U.length-1]=ze.slice(0,ze.length-me).replace(/^\u200b+/,""),U[0]=U[0].slice(Z).replace(/\u200b+$/,"");var lt=de(m,Z),Xe=de(S,re.length?Ge(re).length-me:0);if(U.length>1||U[0]||Be(lt,Xe))return Js(e.doc,U,lt,Xe,"+input"),!0},Dt.prototype.ensurePolled=function(){this.forceCompositionEnd()},Dt.prototype.reset=function(){this.forceCompositionEnd()},Dt.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Dt.prototype.readFromDOMSoon=function(){var e=this;this.readDOMTimeout==null&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing)if(e.composing.done)e.composing=null;else return;e.updateFromDOM()},80))},Dt.prototype.updateFromDOM=function(){var e=this;(this.cm.isReadOnly()||!this.pollContent())&&Ln(this.cm,function(){return er(e.cm)})},Dt.prototype.setUneditable=function(e){e.contentEditable="false"},Dt.prototype.onKeyPress=function(e){e.charCode==0||this.composing||(e.preventDefault(),this.cm.isReadOnly()||dn(this.cm,Rl)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0))},Dt.prototype.readOnlyChanged=function(e){this.div.contentEditable=String(e!="nocursor")},Dt.prototype.onContextMenu=function(){},Dt.prototype.resetPosition=function(){},Dt.prototype.needsContentAttribute=!0;function Uu(e,n){var s=sl(e,n.line);if(!s||s.hidden)return null;var i=Qe(e.doc,n.line),o=vc(s,i,n.line),h=xt(i,e.doc.direction),m="left";if(h){var x=ar(h,n.ch);m=x%2?"right":"left"}var w=ma(o.map,n.ch,m);return w.offset=w.collapse=="right"?w.end:w.start,w}function Fl(e){for(var n=e;n;n=n.parentNode)if(/CodeMirror-gutter-wrapper/.test(n.className))return!0;return!1}function Ar(e,n){return n&&(e.bad=!0),e}function ap(e,n,s,i,o){var h="",m=!1,x=e.doc.lineSeparator(),w=!1;function S(Z){return function(me){return me.id==Z}}function z(){m&&(h+=x,w&&(h+=x),m=w=!1)}function U(Z){Z&&(z(),h+=Z)}function re(Z){if(Z.nodeType==1){var me=Z.getAttribute("cm-text");if(me){U(me);return}var ve=Z.getAttribute("cm-marker"),Ae;if(ve){var Le=e.findMarks(de(i,0),de(o+1,0),S(+ve));Le.length&&(Ae=Le[0].find(0))&&U(si(e.doc,Ae.from,Ae.to).join(x));return}if(Z.getAttribute("contenteditable")=="false")return;var ze=/^(pre|div|p|li|table|br)$/i.test(Z.nodeName);if(!/^br$/i.test(Z.nodeName)&&Z.textContent.length==0)return;ze&&z();for(var Me=0;Me<Z.childNodes.length;Me++)re(Z.childNodes[Me]);/^(pre|p)$/i.test(Z.nodeName)&&(w=!0),ze&&(m=!0)}else Z.nodeType==3&&U(Z.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;re(n),n!=s;)n=n.nextSibling,w=!1;return h}function Ha(e,n,s){var i;if(n==e.display.lineDiv){if(i=e.display.lineDiv.childNodes[s],!i)return Ar(e.clipPos(de(e.display.viewTo-1)),!0);n=null,s=0}else for(i=n;;i=i.parentNode){if(!i||i==e.display.lineDiv)return null;if(i.parentNode&&i.parentNode==e.display.lineDiv)break}for(var o=0;o<e.display.view.length;o++){var h=e.display.view[o];if(h.node==i)return qu(h,n,s)}}function qu(e,n,s){var i=e.text.firstChild,o=!1;if(!n||!j(i,n))return Ar(de(C(e.line),0),!0);if(n==i&&(o=!0,n=i.childNodes[s],s=0,!n)){var h=e.rest?Ge(e.rest):e.line;return Ar(de(C(h),h.text.length),o)}var m=n.nodeType==3?n:null,x=n;for(!m&&n.childNodes.length==1&&n.firstChild.nodeType==3&&(m=n.firstChild,s&&(s=m.nodeValue.length));x.parentNode!=i;)x=x.parentNode;var w=e.measure,S=w.maps;function z(Ae,Le,ze){for(var Me=-1;Me<(S?S.length:0);Me++)for(var Ye=Me<0?w.map:S[Me],lt=0;lt<Ye.length;lt+=3){var Xe=Ye[lt+2];if(Xe==Ae||Xe==Le){var kt=C(Me<0?e.line:e.rest[Me]),jt=Ye[lt]+ze;return(ze<0||Xe!=Ae)&&(jt=Ye[lt+(ze?1:0)]),de(kt,jt)}}}var U=z(m,x,s);if(U)return Ar(U,o);for(var re=x.nextSibling,Z=m?m.nodeValue.length-s:0;re;re=re.nextSibling){if(U=z(re,re.firstChild,0),U)return Ar(de(U.line,U.ch-Z),o);Z+=re.textContent.length}for(var me=x.previousSibling,ve=s;me;me=me.previousSibling){if(U=z(me,me.firstChild,-1),U)return Ar(de(U.line,U.ch+ve),o);ve+=me.textContent.length}}var hn=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new tt,this.hasSelection=!1,this.composing=null,this.resetting=!1};hn.prototype.init=function(e){var n=this,s=this,i=this.cm;this.createField(e);var o=this.textarea;e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),W&&(o.style.width="0px"),it(o,"input",function(){k&&E>=9&&n.hasSelection&&(n.hasSelection=null),s.poll()}),it(o,"paste",function(m){Ot(i,m)||Wu(m,i)||(i.state.pasteIncoming=+new Date,s.fastPoll())});function h(m){if(!Ot(i,m)){if(i.somethingSelected())Yo({lineWise:!1,text:i.getSelections()});else if(i.options.lineWiseCopyCut){var x=Ol(i);Yo({lineWise:!0,text:x.text}),m.type=="cut"?i.setSelections(x.ranges,null,St):(s.prevInput="",o.value=x.text.join(`
`),Q(o))}else return;m.type=="cut"&&(i.state.cutIncoming=+new Date)}}it(o,"cut",h),it(o,"copy",h),it(e.scroller,"paste",function(m){if(!(qi(e,m)||Ot(i,m))){if(!o.dispatchEvent){i.state.pasteIncoming=+new Date,s.focus();return}var x=new Event("paste");x.clipboardData=m.clipboardData,o.dispatchEvent(x)}}),it(e.lineSpace,"selectstart",function(m){qi(e,m)||wn(m)}),it(o,"compositionstart",function(){var m=i.getCursor("from");s.composing&&s.composing.range.clear(),s.composing={start:m,range:i.markText(m,i.getCursor("to"),{className:"CodeMirror-composing"})}}),it(o,"compositionend",function(){s.composing&&(s.poll(),s.composing.range.clear(),s.composing=null)})},hn.prototype.createField=function(e){this.wrapper=Dl(),this.textarea=this.wrapper.firstChild;var n=this.cm.options;Ml(this.textarea,n.spellcheck,n.autocorrect,n.autocapitalize)},hn.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},hn.prototype.prepareSelection=function(){var e=this.cm,n=e.display,s=e.doc,i=pl(e);if(e.options.moveInputWithCursor){var o=Cn(e,s.sel.primary().head,"div"),h=n.wrapper.getBoundingClientRect(),m=n.lineDiv.getBoundingClientRect();i.teTop=Math.max(0,Math.min(n.wrapper.clientHeight-10,o.top+m.top-h.top)),i.teLeft=Math.max(0,Math.min(n.wrapper.clientWidth-10,o.left+m.left-h.left))}return i},hn.prototype.showSelection=function(e){var n=this.cm,s=n.display;ye(s.cursorDiv,e.cursors),ye(s.selectionDiv,e.selection),e.teTop!=null&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},hn.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var n=this.cm;if(this.resetting=!0,n.somethingSelected()){this.prevInput="";var s=n.getSelection();this.textarea.value=s,n.state.focused&&Q(this.textarea),k&&E>=9&&(this.hasSelection=s)}else e||(this.prevInput=this.textarea.value="",k&&E>=9&&(this.hasSelection=null));this.resetting=!1}},hn.prototype.getField=function(){return this.textarea},hn.prototype.supportsTouch=function(){return!1},hn.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!K||A(qe(this.textarea))!=this.textarea))try{this.textarea.focus()}catch{}},hn.prototype.blur=function(){this.textarea.blur()},hn.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},hn.prototype.receivedFocus=function(){this.slowPoll()},hn.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},hn.prototype.fastPoll=function(){var e=!1,n=this;n.pollingFast=!0;function s(){var i=n.poll();!i&&!e?(e=!0,n.polling.set(60,s)):(n.pollingFast=!1,n.slowPoll())}n.polling.set(20,s)},hn.prototype.poll=function(){var e=this,n=this.cm,s=this.textarea,i=this.prevInput;if(this.contextMenuPending||this.resetting||!n.state.focused||Kr(s)&&!i&&!this.composing||n.isReadOnly()||n.options.disableInput||n.state.keySeq)return!1;var o=s.value;if(o==i&&!n.somethingSelected())return!1;if(k&&E>=9&&this.hasSelection===o||Y&&/[\uf700-\uf7ff]/.test(o))return n.display.input.reset(),!1;if(n.doc.sel==n.display.selForContextMenu){var h=o.charCodeAt(0);if(h==8203&&!i&&(i="​"),h==8666)return this.reset(),this.cm.execCommand("undo")}for(var m=0,x=Math.min(i.length,o.length);m<x&&i.charCodeAt(m)==o.charCodeAt(m);)++m;return Ln(n,function(){Rl(n,o.slice(m),i.length-m,null,e.composing?"*compose":null),o.length>1e3||o.indexOf(`
`)>-1?s.value=e.prevInput="":e.prevInput=o,e.composing&&(e.composing.range.clear(),e.composing.range=n.markText(e.composing.start,n.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},hn.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},hn.prototype.onKeyPress=function(){k&&E>=9&&(this.hasSelection=null),this.fastPoll()},hn.prototype.onContextMenu=function(e){var n=this,s=n.cm,i=s.display,o=n.textarea;n.contextMenuPending&&n.contextMenuPending();var h=hs(s,e),m=i.scroller.scrollTop;if(!h||te)return;var x=s.options.resetSelectionOnContextMenu;x&&s.doc.sel.contains(h)==-1&&dn(s,Wn)(s.doc,zn(h),St);var w=o.style.cssText,S=n.wrapper.style.cssText,z=n.wrapper.offsetParent.getBoundingClientRect();n.wrapper.style.cssText="position: static",o.style.cssText=`position: absolute; width: 30px; height: 30px;
      top: `+(e.clientY-z.top-5)+"px; left: "+(e.clientX-z.left-5)+`px;
      z-index: 1000; background: `+(k?"rgba(255, 255, 255, .05)":"transparent")+`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;var U;P&&(U=o.ownerDocument.defaultView.scrollY),i.input.focus(),P&&o.ownerDocument.defaultView.scrollTo(null,U),i.input.reset(),s.somethingSelected()||(o.value=n.prevInput=" "),n.contextMenuPending=Z,i.selForContextMenu=s.doc.sel,clearTimeout(i.detectingSelectAll);function re(){if(o.selectionStart!=null){var ve=s.somethingSelected(),Ae="​"+(ve?o.value:"");o.value="⇚",o.value=Ae,n.prevInput=ve?"":"​",o.selectionStart=1,o.selectionEnd=Ae.length,i.selForContextMenu=s.doc.sel}}function Z(){if(n.contextMenuPending==Z&&(n.contextMenuPending=!1,n.wrapper.style.cssText=S,o.style.cssText=w,k&&E<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=m),o.selectionStart!=null)){(!k||k&&E<9)&&re();var ve=0,Ae=function(){i.selForContextMenu==s.doc.sel&&o.selectionStart==0&&o.selectionEnd>0&&n.prevInput=="​"?dn(s,Qi)(s):ve++<10?i.detectingSelectAll=setTimeout(Ae,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(Ae,200)}}if(k&&E>=9&&re(),je){ur(e);var me=function(){Jt(window,"mouseup",me),setTimeout(Z,20)};it(window,"mouseup",me)}else setTimeout(Z,50)},hn.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled=e=="nocursor",this.textarea.readOnly=!!e},hn.prototype.setUneditable=function(){},hn.prototype.needsContentAttribute=!1;function Vc(e,n){if(n=n?Ue(n):{},n.value=e.value,!n.tabindex&&e.tabIndex&&(n.tabindex=e.tabIndex),!n.placeholder&&e.placeholder&&(n.placeholder=e.placeholder),n.autofocus==null){var s=A(qe(e));n.autofocus=s==e||e.getAttribute("autofocus")!=null&&s==document.body}function i(){e.value=x.getValue()}var o;if(e.form&&(it(e.form,"submit",i),!n.leaveSubmitMethodAlone)){var h=e.form;o=h.submit;try{var m=h.submit=function(){i(),h.submit=o,h.submit(),h.submit=m}}catch{}}n.finishInit=function(w){w.save=i,w.getTextArea=function(){return e},w.toTextArea=function(){w.toTextArea=isNaN,i(),e.parentNode.removeChild(w.getWrapperElement()),e.style.display="",e.form&&(Jt(e.form,"submit",i),!n.leaveSubmitMethodAlone&&typeof e.form.submit=="function"&&(e.form.submit=o))}},e.style.display="none";var x=Zt(function(w){return e.parentNode.insertBefore(w,e.nextSibling)},n);return x}function Ba(e){e.off=Jt,e.on=it,e.wheelEventPixels=bs,e.Doc=Mt,e.splitLines=cr,e.countColumn=Ke,e.findColumn=rt,e.isWordChar=Je,e.Pass=Gt,e.signal=It,e.Line=ki,e.changeEnd=Fn,e.scrollbarModel=jc,e.Pos=de,e.cmpPos=Be,e.modes=Rr,e.mimeModes=Ir,e.resolveMode=Er,e.getMode=zi,e.modeExtensions=ii,e.extendMode=xi,e.copyState=At,e.startState=bi,e.innerMode=os,e.commands=Ko,e.keyMap=Ri,e.keyName=Cu,e.isModifierKey=Su,e.lookupKey=to,e.normalizeKeyMap=Ic,e.StringStream=Xt,e.SharedTextMarker=Qs,e.TextMarker=mi,e.LineWidget=Pi,e.e_preventDefault=wn,e.e_stopPropagation=ni,e.e_stop=ur,e.addClass=G,e.contains=j,e.rmClass=Ce,e.keyNames=Xr}vr(Zt),zl(Zt);var nr="iter insert remove copy getEditor constructor".split(" ");for(var Wl in Mt.prototype)Mt.prototype.hasOwnProperty(Wl)&&$e(nr,Wl)<0&&(Zt.prototype[Wl]=(function(e){return function(){return e.apply(this.doc,arguments)}})(Mt.prototype[Wl]));return lr(Mt),Zt.inputStyles={textarea:hn,contenteditable:Dt},Zt.defineMode=function(e){!Zt.defaults.mode&&e!="null"&&(Zt.defaults.mode=e),Nr.apply(this,arguments)},Zt.defineMIME=Bt,Zt.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),Zt.defineMIME("text/plain","null"),Zt.defineExtension=function(e,n){Zt.prototype[e]=n},Zt.defineDocExtension=function(e,n){Mt.prototype[e]=n},Zt.fromTextArea=Vc,Ba(Zt),Zt.version="5.65.21",Zt}))})(vd)),vd.exports}var Mx=ss();const bf=Yf(Mx);var wf={exports:{}},kf;function Dx(){return kf||(kf=1,(function(l,u){(function(d){d(ss())})(function(d){function g(E){return new RegExp("^(("+E.join(")|(")+"))\\b")}var y=g(["and","or","not","is"]),b=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],_=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];d.registerHelper("hintWords","python",b.concat(_).concat(["exec","print"]));function T(E){return E.scopes[E.scopes.length-1]}d.defineMode("python",function(E,P){for(var I="error",R=P.delimiters||P.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,V=[P.singleOperators,P.doubleOperators,P.doubleDelimiters,P.tripleDelimiters,P.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],te=0;te<V.length;te++)V[te]||V.splice(te--,1);var H=P.hangingIndent||E.indentUnit,ae=b,D=_;P.extra_keywords!=null&&(ae=ae.concat(P.extra_keywords)),P.extra_builtins!=null&&(D=D.concat(P.extra_builtins));var W=!(P.version&&Number(P.version)<3);if(W){var F=P.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;ae=ae.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),D=D.concat(["ascii","bytes","exec","print"]);var K=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var F=P.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;ae=ae.concat(["exec","print"]),D=D.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var K=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var Y=g(ae),he=g(D);function le(J,q){var j=J.sol()&&q.lastToken!="\\";if(j&&(q.indent=J.indentation()),j&&T(q).type=="py"){var A=T(q).offset;if(J.eatSpace()){var G=J.indentation();return G>A?ie(q):G<A&&se(J,q)&&J.peek()!="#"&&(q.errorToken=!0),null}else{var M=we(J,q);return A>0&&se(J,q)&&(M+=" "+I),M}}return we(J,q)}function we(J,q,j){if(J.eatSpace())return null;if(!j&&J.match(/^#.*/))return"comment";if(J.match(/^[0-9\.]/,!1)){var A=!1;if(J.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(A=!0),J.match(/^[\d_]+\.\d*/)&&(A=!0),J.match(/^\.\d+/)&&(A=!0),A)return J.eat(/J/i),"number";var G=!1;if(J.match(/^0x[0-9a-f_]+/i)&&(G=!0),J.match(/^0b[01_]+/i)&&(G=!0),J.match(/^0o[0-7_]+/i)&&(G=!0),J.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(J.eat(/J/i),G=!0),J.match(/^0(?![\dx])/i)&&(G=!0),G)return J.eat(/L/i),"number"}if(J.match(K)){var M=J.current().toLowerCase().indexOf("f")!==-1;return M?(q.tokenize=He(J.current(),q.tokenize),q.tokenize(J,q)):(q.tokenize=je(J.current(),q.tokenize),q.tokenize(J,q))}for(var Q=0;Q<V.length;Q++)if(J.match(V[Q]))return"operator";return J.match(R)?"punctuation":q.lastToken=="."&&J.match(F)?"property":J.match(Y)||J.match(y)?"keyword":J.match(he)?"builtin":J.match(/^(self|cls)\b/)?"variable-2":J.match(F)?q.lastToken=="def"||q.lastToken=="class"?"def":"variable":(J.next(),j?null:I)}function He(J,q){for(;"rubf".indexOf(J.charAt(0).toLowerCase())>=0;)J=J.substr(1);var j=J.length==1,A="string";function G(Q){return function(Se,De){var qe=we(Se,De,!0);return qe=="punctuation"&&(Se.current()=="{"?De.tokenize=G(Q+1):Se.current()=="}"&&(Q>1?De.tokenize=G(Q-1):De.tokenize=M)),qe}}function M(Q,Se){for(;!Q.eol();)if(Q.eatWhile(/[^'"\{\}\\]/),Q.eat("\\")){if(Q.next(),j&&Q.eol())return A}else{if(Q.match(J))return Se.tokenize=q,A;if(Q.match("{{"))return A;if(Q.match("{",!1))return Se.tokenize=G(0),Q.current()?A:Se.tokenize(Q,Se);if(Q.match("}}"))return A;if(Q.match("}"))return I;Q.eat(/['"]/)}if(j){if(P.singleLineStringErrors)return I;Se.tokenize=q}return A}return M.isString=!0,M}function je(J,q){for(;"rubf".indexOf(J.charAt(0).toLowerCase())>=0;)J=J.substr(1);var j=J.length==1,A="string";function G(M,Q){for(;!M.eol();)if(M.eatWhile(/[^'"\\]/),M.eat("\\")){if(M.next(),j&&M.eol())return A}else{if(M.match(J))return Q.tokenize=q,A;M.eat(/['"]/)}if(j){if(P.singleLineStringErrors)return I;Q.tokenize=q}return A}return G.isString=!0,G}function ie(J){for(;T(J).type!="py";)J.scopes.pop();J.scopes.push({offset:T(J).offset+E.indentUnit,type:"py",align:null})}function Ce(J,q,j){var A=J.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:J.column()+1;q.scopes.push({offset:q.indent+H,type:j,align:A})}function se(J,q){for(var j=J.indentation();q.scopes.length>1&&T(q).offset>j;){if(T(q).type!="py")return!0;q.scopes.pop()}return T(q).offset!=j}function ye(J,q){J.sol()&&(q.beginningOfLine=!0,q.dedent=!1);var j=q.tokenize(J,q),A=J.current();if(q.beginningOfLine&&A=="@")return J.match(F,!1)?"meta":W?"operator":I;if(/\S/.test(A)&&(q.beginningOfLine=!1),(j=="variable"||j=="builtin")&&q.lastToken=="meta"&&(j="meta"),(A=="pass"||A=="return")&&(q.dedent=!0),A=="lambda"&&(q.lambda=!0),A==":"&&!q.lambda&&T(q).type=="py"&&J.match(/^\s*(?:#|$)/,!1)&&ie(q),A.length==1&&!/string|comment/.test(j)){var G="[({".indexOf(A);if(G!=-1&&Ce(J,q,"])}".slice(G,G+1)),G="])}".indexOf(A),G!=-1)if(T(q).type==A)q.indent=q.scopes.pop().offset-H;else return I}return q.dedent&&J.eol()&&T(q).type=="py"&&q.scopes.length>1&&q.scopes.pop(),j}var N={startState:function(J){return{tokenize:le,scopes:[{offset:J||0,type:"py",align:null}],indent:J||0,lastToken:null,lambda:!1,dedent:0}},token:function(J,q){var j=q.errorToken;j&&(q.errorToken=!1);var A=ye(J,q);return A&&A!="comment"&&(q.lastToken=A=="keyword"||A=="punctuation"?J.current():A),A=="punctuation"&&(A=null),J.eol()&&q.lambda&&(q.lambda=!1),j?A+" "+I:A},indent:function(J,q){if(J.tokenize!=le)return J.tokenize.isString?d.Pass:0;var j=T(J),A=j.type==q.charAt(0)||j.type=="py"&&!J.dedent&&/^(else:|elif |except |finally:)/.test(q);return j.align!=null?j.align-(A?1:0):j.offset-(A?H:0)},electricInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,closeBrackets:{triples:`'"`},lineComment:"#",fold:"indent"};return N}),d.defineMIME("text/x-python","python");var k=function(E){return E.split(" ")};d.defineMIME("text/x-cython",{name:"python",extra_keywords:k("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})})})()),wf.exports}Dx();var Sf={exports:{}},_f;function km(){return _f||(_f=1,(function(l,u){(function(d){d(ss())})(function(d){d.defineMode("javascript",function(g,y){var b=g.indentUnit,_=y.statementIndent,T=y.jsonld,k=y.json||T,E=y.trackScope!==!1,P=y.typescript,I=y.wordCharacters||/[\w$\xa1-\uffff]/,R=(function(){function C(en){return{type:en,style:"keyword"}}var B=C("keyword a"),fe=C("keyword b"),Ee=C("keyword c"),de=C("keyword d"),Be=C("operator"),Tt={type:"atom",style:"atom"};return{if:C("if"),while:B,with:B,else:fe,do:fe,try:fe,finally:fe,return:de,break:de,continue:de,new:C("new"),delete:Ee,void:Ee,throw:Ee,debugger:C("debugger"),var:C("var"),const:C("var"),let:C("var"),function:C("function"),catch:C("catch"),for:C("for"),switch:C("switch"),case:C("case"),default:C("default"),in:Be,typeof:Be,instanceof:Be,true:Tt,false:Tt,null:Tt,undefined:Tt,NaN:Tt,Infinity:Tt,this:C("this"),class:C("class"),super:C("atom"),yield:Ee,export:C("export"),import:C("import"),extends:Ee,await:Ee}})(),V=/[+\-*&%=<>!?|~^@]/,te=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function H(C){for(var B=!1,fe,Ee=!1;(fe=C.next())!=null;){if(!B){if(fe=="/"&&!Ee)return;fe=="["?Ee=!0:Ee&&fe=="]"&&(Ee=!1)}B=!B&&fe=="\\"}}var ae,D;function W(C,B,fe){return ae=C,D=fe,B}function F(C,B){var fe=C.next();if(fe=='"'||fe=="'")return B.tokenize=K(fe),B.tokenize(C,B);if(fe=="."&&C.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return W("number","number");if(fe=="."&&C.match(".."))return W("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(fe))return W(fe);if(fe=="="&&C.eat(">"))return W("=>","operator");if(fe=="0"&&C.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return W("number","number");if(/\d/.test(fe))return C.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),W("number","number");if(fe=="/")return C.eat("*")?(B.tokenize=Y,Y(C,B)):C.eat("/")?(C.skipToEnd(),W("comment","comment")):On(C,B,1)?(H(C),C.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),W("regexp","string-2")):(C.eat("="),W("operator","operator",C.current()));if(fe=="`")return B.tokenize=he,he(C,B);if(fe=="#"&&C.peek()=="!")return C.skipToEnd(),W("meta","meta");if(fe=="#"&&C.eatWhile(I))return W("variable","property");if(fe=="<"&&C.match("!--")||fe=="-"&&C.match("->")&&!/\S/.test(C.string.slice(0,C.start)))return C.skipToEnd(),W("comment","comment");if(V.test(fe))return(fe!=">"||!B.lexical||B.lexical.type!=">")&&(C.eat("=")?(fe=="!"||fe=="=")&&C.eat("="):/[<>*+\-|&?]/.test(fe)&&(C.eat(fe),fe==">"&&C.eat(fe))),fe=="?"&&C.eat(".")?W("."):W("operator","operator",C.current());if(I.test(fe)){C.eatWhile(I);var Ee=C.current();if(B.lastType!="."){if(R.propertyIsEnumerable(Ee)){var de=R[Ee];return W(de.type,de.style,Ee)}if(Ee=="async"&&C.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return W("async","keyword",Ee)}return W("variable","variable",Ee)}}function K(C){return function(B,fe){var Ee=!1,de;if(T&&B.peek()=="@"&&B.match(te))return fe.tokenize=F,W("jsonld-keyword","meta");for(;(de=B.next())!=null&&!(de==C&&!Ee);)Ee=!Ee&&de=="\\";return Ee||(fe.tokenize=F),W("string","string")}}function Y(C,B){for(var fe=!1,Ee;Ee=C.next();){if(Ee=="/"&&fe){B.tokenize=F;break}fe=Ee=="*"}return W("comment","comment")}function he(C,B){for(var fe=!1,Ee;(Ee=C.next())!=null;){if(!fe&&(Ee=="`"||Ee=="$"&&C.eat("{"))){B.tokenize=F;break}fe=!fe&&Ee=="\\"}return W("quasi","string-2",C.current())}var le="([{}])";function we(C,B){B.fatArrowAt&&(B.fatArrowAt=null);var fe=C.string.indexOf("=>",C.start);if(!(fe<0)){if(P){var Ee=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(C.string.slice(C.start,fe));Ee&&(fe=Ee.index)}for(var de=0,Be=!1,Tt=fe-1;Tt>=0;--Tt){var en=C.string.charAt(Tt),Sn=le.indexOf(en);if(Sn>=0&&Sn<3){if(!de){++Tt;break}if(--de==0){en=="("&&(Be=!0);break}}else if(Sn>=3&&Sn<6)++de;else if(I.test(en))Be=!0;else if(/["'\/`]/.test(en))for(;;--Tt){if(Tt==0)return;var oi=C.string.charAt(Tt-1);if(oi==en&&C.string.charAt(Tt-2)!="\\"){Tt--;break}}else if(Be&&!de){++Tt;break}}Be&&!de&&(B.fatArrowAt=Tt)}}var He={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function je(C,B,fe,Ee,de,Be){this.indented=C,this.column=B,this.type=fe,this.prev=de,this.info=Be,Ee!=null&&(this.align=Ee)}function ie(C,B){if(!E)return!1;for(var fe=C.localVars;fe;fe=fe.next)if(fe.name==B)return!0;for(var Ee=C.context;Ee;Ee=Ee.prev)for(var fe=Ee.vars;fe;fe=fe.next)if(fe.name==B)return!0}function Ce(C,B,fe,Ee,de){var Be=C.cc;for(se.state=C,se.stream=de,se.marked=null,se.cc=Be,se.style=B,C.lexical.hasOwnProperty("align")||(C.lexical.align=!0);;){var Tt=Be.length?Be.pop():k?$e:Ke;if(Tt(fe,Ee)){for(;Be.length&&Be[Be.length-1].lex;)Be.pop()();return se.marked?se.marked:fe=="variable"&&ie(C,Ee)?"variable-2":B}}}var se={state:null,marked:null,cc:null};function ye(){for(var C=arguments.length-1;C>=0;C--)se.cc.push(arguments[C])}function N(){return ye.apply(null,arguments),!0}function J(C,B){for(var fe=B;fe;fe=fe.next)if(fe.name==C)return!0;return!1}function q(C){var B=se.state;if(se.marked="def",!!E){if(B.context){if(B.lexical.info=="var"&&B.context&&B.context.block){var fe=j(C,B.context);if(fe!=null){B.context=fe;return}}else if(!J(C,B.localVars)){B.localVars=new M(C,B.localVars);return}}y.globalVars&&!J(C,B.globalVars)&&(B.globalVars=new M(C,B.globalVars))}}function j(C,B){if(B)if(B.block){var fe=j(C,B.prev);return fe?fe==B.prev?B:new G(fe,B.vars,!0):null}else return J(C,B.vars)?B:new G(B.prev,new M(C,B.vars),!1);else return null}function A(C){return C=="public"||C=="private"||C=="protected"||C=="abstract"||C=="readonly"}function G(C,B,fe){this.prev=C,this.vars=B,this.block=fe}function M(C,B){this.name=C,this.next=B}var Q=new M("this",new M("arguments",null));function Se(){se.state.context=new G(se.state.context,se.state.localVars,!1),se.state.localVars=Q}function De(){se.state.context=new G(se.state.context,se.state.localVars,!0),se.state.localVars=null}Se.lex=De.lex=!0;function qe(){se.state.localVars=se.state.context.vars,se.state.context=se.state.context.prev}qe.lex=!0;function ke(C,B){var fe=function(){var Ee=se.state,de=Ee.indented;if(Ee.lexical.type=="stat")de=Ee.lexical.indented;else for(var Be=Ee.lexical;Be&&Be.type==")"&&Be.align;Be=Be.prev)de=Be.indented;Ee.lexical=new je(de,se.stream.column(),C,null,Ee.lexical,B)};return fe.lex=!0,fe}function Ie(){var C=se.state;C.lexical.prev&&(C.lexical.type==")"&&(C.indented=C.lexical.indented),C.lexical=C.lexical.prev)}Ie.lex=!0;function Ue(C){function B(fe){return fe==C?N():C==";"||fe=="}"||fe==")"||fe=="]"?ye():N(B)}return B}function Ke(C,B){return C=="var"?N(ke("vardef",B),ni,Ue(";"),Ie):C=="keyword a"?N(ke("form"),Gt,Ke,Ie):C=="keyword b"?N(ke("form"),Ke,Ie):C=="keyword d"?se.stream.match(/^\s*$/,!1)?N():N(ke("stat"),vt,Ue(";"),Ie):C=="debugger"?N(Ue(";")):C=="{"?N(ke("}"),De,Jn,Ie,qe):C==";"?N():C=="if"?(se.state.lexical.info=="else"&&se.state.cc[se.state.cc.length-1]==Ie&&se.state.cc.pop()(),N(ke("form"),Gt,Ke,Ie,Xn)):C=="function"?N(cr):C=="for"?N(ke("form"),De,ri,Ke,qe,Ie):C=="class"||P&&B=="interface"?(se.marked="keyword",N(ke("form",C=="class"?C:B),Rr,Ie)):C=="variable"?P&&B=="declare"?(se.marked="keyword",N(Ke)):P&&(B=="module"||B=="enum"||B=="type")&&se.stream.match(/^\s*\w/,!1)?(se.marked="keyword",B=="enum"?N(Qe):B=="type"?N(Ps,Ue("operator"),xt,Ue(";")):N(ke("form"),In,Ue("{"),ke("}"),Jn,Ie,Ie)):P&&B=="namespace"?(se.marked="keyword",N(ke("form"),$e,Ke,Ie)):P&&B=="abstract"?(se.marked="keyword",N(Ke)):N(ke("stat"),wt):C=="switch"?N(ke("form"),Gt,Ue("{"),ke("}","switch"),De,Jn,Ie,Ie,qe):C=="case"?N($e,Ue(":")):C=="default"?N(Ue(":")):C=="catch"?N(ke("form"),Se,tt,Ke,Ie,qe):C=="export"?N(ke("stat"),Er,Ie):C=="import"?N(ke("stat"),ii,Ie):C=="async"?N(Ke):B=="@"?N($e,Ke):ye(ke("stat"),$e,Ue(";"),Ie)}function tt(C){if(C=="(")return N(kn,Ue(")"))}function $e(C,B){return St(C,B,!1)}function Ht(C,B){return St(C,B,!0)}function Gt(C){return C!="("?ye():N(ke(")"),vt,Ue(")"),Ie)}function St(C,B,fe){if(se.state.fatArrowAt==se.stream.start){var Ee=fe?ht:Ge;if(C=="(")return N(Se,ke(")"),pt(kn,")"),Ie,Ue("=>"),Ee,qe);if(C=="variable")return ye(Se,In,Ue("=>"),Ee,qe)}var de=fe?rt:We;return He.hasOwnProperty(C)?N(de):C=="function"?N(cr,de):C=="class"||P&&B=="interface"?(se.marked="keyword",N(ke("form"),yo,Ie)):C=="keyword c"||C=="async"?N(fe?Ht:$e):C=="("?N(ke(")"),vt,Ue(")"),Ie,de):C=="operator"||C=="spread"?N(fe?Ht:$e):C=="["?N(ke("]"),Xt,Ie,de):C=="{"?mn(at,"}",null,de):C=="quasi"?ye(et,de):C=="new"?N(oe(fe)):N()}function vt(C){return C.match(/[;\}\)\],]/)?ye():ye($e)}function We(C,B){return C==","?N(vt):rt(C,B,!1)}function rt(C,B,fe){var Ee=fe==!1?We:rt,de=fe==!1?$e:Ht;if(C=="=>")return N(Se,fe?ht:Ge,qe);if(C=="operator")return/\+\+|--/.test(B)||P&&B=="!"?N(Ee):P&&B=="<"&&se.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?N(ke(">"),pt(xt,">"),Ie,Ee):B=="?"?N($e,Ue(":"),de):N(de);if(C=="quasi")return ye(et,Ee);if(C!=";"){if(C=="(")return mn(Ht,")","call",Ee);if(C==".")return N(Je,Ee);if(C=="[")return N(ke("]"),vt,Ue("]"),Ie,Ee);if(P&&B=="as")return se.marked="keyword",N(xt,Ee);if(C=="regexp")return se.state.lastType=se.marked="operator",se.stream.backUp(se.stream.pos-se.stream.start-1),N(de)}}function et(C,B){return C!="quasi"?ye():B.slice(B.length-2)!="${"?N(et):N(vt,Kt)}function Kt(C){if(C=="}")return se.marked="string-2",se.state.tokenize=he,N(et)}function Ge(C){return we(se.stream,se.state),ye(C=="{"?Ke:$e)}function ht(C){return we(se.stream,se.state),ye(C=="{"?Ke:Ht)}function oe(C){return function(B){return B=="."?N(C?ge:_e):B=="variable"&&P?N(un,C?rt:We):ye(C?Ht:$e)}}function _e(C,B){if(B=="target")return se.marked="keyword",N(We)}function ge(C,B){if(B=="target")return se.marked="keyword",N(rt)}function wt(C){return C==":"?N(Ie,Ke):ye(We,Ue(";"),Ie)}function Je(C){if(C=="variable")return se.marked="property",N()}function at(C,B){if(C=="async")return se.marked="property",N(at);if(C=="variable"||se.style=="keyword"){if(se.marked="property",B=="get"||B=="set")return N(Ve);var fe;return P&&se.state.fatArrowAt==se.stream.start&&(fe=se.stream.match(/^\s*:\s*/,!1))&&(se.state.fatArrowAt=se.stream.pos+fe[0].length),N(yt)}else{if(C=="number"||C=="string")return se.marked=T?"property":se.style+" property",N(yt);if(C=="jsonld-keyword")return N(yt);if(P&&A(B))return se.marked="keyword",N(at);if(C=="[")return N($e,Cr,Ue("]"),yt);if(C=="spread")return N(Ht,yt);if(B=="*")return se.marked="keyword",N(at);if(C==":")return ye(yt)}}function Ve(C){return C!="variable"?ye(yt):(se.marked="property",N(cr))}function yt(C){if(C==":")return N(Ht);if(C=="(")return ye(cr)}function pt(C,B,fe){function Ee(de,Be){if(fe?fe.indexOf(de)>-1:de==","){var Tt=se.state.lexical;return Tt.info=="call"&&(Tt.pos=(Tt.pos||0)+1),N(function(en,Sn){return en==B||Sn==B?ye():ye(C)},Ee)}return de==B||Be==B?N():fe&&fe.indexOf(";")>-1?ye(C):N(Ue(B))}return function(de,Be){return de==B||Be==B?N():ye(C,Ee)}}function mn(C,B,fe){for(var Ee=3;Ee<arguments.length;Ee++)se.cc.push(arguments[Ee]);return N(ke(B,fe),pt(C,B),Ie)}function Jn(C){return C=="}"?N():ye(Ke,Jn)}function Cr(C,B){if(P){if(C==":")return N(xt);if(B=="?")return N(Cr)}}function Hr(C,B){if(P&&(C==":"||B=="in"))return N(xt)}function ar(C){if(P&&C==":")return se.stream.match(/^\s*\w+\s+is\b/,!1)?N($e,vi,xt):N(xt)}function vi(C,B){if(B=="is")return se.marked="keyword",N()}function xt(C,B){if(B=="keyof"||B=="typeof"||B=="infer"||B=="readonly")return se.marked="keyword",N(B=="typeof"?Ht:xt);if(C=="variable"||B=="void")return se.marked="type",N(Nn);if(B=="|"||B=="&")return N(xt);if(C=="string"||C=="number"||C=="atom")return N(Nn);if(C=="[")return N(ke("]"),pt(xt,"]",","),Ie,Nn);if(C=="{")return N(ke("}"),it,Ie,Nn);if(C=="(")return N(pt(Ot,")"),Di,Nn);if(C=="<")return N(pt(xt,">"),xt);if(C=="quasi")return ye(Jt,Nn)}function Di(C){if(C=="=>")return N(xt)}function it(C){return C.match(/[\}\)\]]/)?N():C==","||C==";"?N(it):ye(Tr,it)}function Tr(C,B){if(C=="variable"||se.style=="keyword")return se.marked="property",N(Tr);if(B=="?"||C=="number"||C=="string")return N(Tr);if(C==":")return N(xt);if(C=="[")return N(Ue("variable"),Hr,Ue("]"),Tr);if(C=="(")return ye(Kr,Tr);if(!C.match(/[;\}\)\],]/))return N()}function Jt(C,B){return C!="quasi"?ye():B.slice(B.length-2)!="${"?N(Jt):N(xt,It)}function It(C){if(C=="}")return se.marked="string-2",se.state.tokenize=he,N(Jt)}function Ot(C,B){return C=="variable"&&se.stream.match(/^\s*[?:]/,!1)||B=="?"?N(Ot):C==":"?N(xt):C=="spread"?N(Ot):ye(xt)}function Nn(C,B){if(B=="<")return N(ke(">"),pt(xt,">"),Ie,Nn);if(B=="|"||C=="."||B=="&")return N(xt);if(C=="[")return N(xt,Ue("]"),Nn);if(B=="extends"||B=="implements")return se.marked="keyword",N(xt);if(B=="?")return N(xt,Ue(":"),xt)}function un(C,B){if(B=="<")return N(ke(">"),pt(xt,">"),Ie,Nn)}function lr(){return ye(xt,wn)}function wn(C,B){if(B=="=")return N(xt)}function ni(C,B){return B=="enum"?(se.marked="keyword",N(Qe)):ye(In,Cr,En,jr)}function In(C,B){if(P&&A(B))return se.marked="keyword",N(In);if(C=="variable")return q(B),N();if(C=="spread")return N(In);if(C=="[")return mn(Br,"]");if(C=="{")return mn(ur,"}")}function ur(C,B){return C=="variable"&&!se.stream.match(/^\s*:/,!1)?(q(B),N(En)):(C=="variable"&&(se.marked="property"),C=="spread"?N(In):C=="}"?ye():C=="["?N($e,Ue("]"),Ue(":"),ur):N(Ue(":"),In,En))}function Br(){return ye(In,En)}function En(C,B){if(B=="=")return N(Ht)}function jr(C){if(C==",")return N(ni)}function Xn(C,B){if(C=="keyword b"&&B=="else")return N(ke("form","else"),Ke,Ie)}function ri(C,B){if(B=="await")return N(ri);if(C=="(")return N(ke(")"),Ur,Ie)}function Ur(C){return C=="var"?N(ni,qr):C=="variable"?N(qr):ye(qr)}function qr(C,B){return C==")"?N():C==";"?N(qr):B=="in"||B=="of"?(se.marked="keyword",N($e,qr)):ye($e,qr)}function cr(C,B){if(B=="*")return se.marked="keyword",N(cr);if(C=="variable")return q(B),N(cr);if(C=="(")return N(Se,ke(")"),pt(kn,")"),Ie,ar,Ke,qe);if(P&&B=="<")return N(ke(">"),pt(lr,">"),Ie,cr)}function Kr(C,B){if(B=="*")return se.marked="keyword",N(Kr);if(C=="variable")return q(B),N(Kr);if(C=="(")return N(Se,ke(")"),pt(kn,")"),Ie,ar,qe);if(P&&B=="<")return N(ke(">"),pt(lr,">"),Ie,Kr)}function Ps(C,B){if(C=="keyword"||C=="variable")return se.marked="type",N(Ps);if(B=="<")return N(ke(">"),pt(lr,">"),Ie)}function kn(C,B){return B=="@"&&N($e,kn),C=="spread"?N(kn):P&&A(B)?(se.marked="keyword",N(kn)):P&&C=="this"?N(Cr,En):ye(In,Cr,En)}function yo(C,B){return C=="variable"?Rr(C,B):Ir(C,B)}function Rr(C,B){if(C=="variable")return q(B),N(Ir)}function Ir(C,B){if(B=="<")return N(ke(">"),pt(lr,">"),Ie,Ir);if(B=="extends"||B=="implements"||P&&C==",")return B=="implements"&&(se.marked="keyword"),N(P?xt:$e,Ir);if(C=="{")return N(ke("}"),Nr,Ie)}function Nr(C,B){if(C=="async"||C=="variable"&&(B=="static"||B=="get"||B=="set"||P&&A(B))&&se.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return se.marked="keyword",N(Nr);if(C=="variable"||se.style=="keyword")return se.marked="property",N(Bt,Nr);if(C=="number"||C=="string")return N(Bt,Nr);if(C=="[")return N($e,Cr,Ue("]"),Bt,Nr);if(B=="*")return se.marked="keyword",N(Nr);if(P&&C=="(")return ye(Kr,Nr);if(C==";"||C==",")return N(Nr);if(C=="}")return N();if(B=="@")return N($e,Nr)}function Bt(C,B){if(B=="!"||B=="?")return N(Bt);if(C==":")return N(xt,En);if(B=="=")return N(Ht);var fe=se.state.lexical.prev,Ee=fe&&fe.info=="interface";return ye(Ee?Kr:cr)}function Er(C,B){return B=="*"?(se.marked="keyword",N(bi,Ue(";"))):B=="default"?(se.marked="keyword",N($e,Ue(";"))):C=="{"?N(pt(zi,"}"),bi,Ue(";")):ye(Ke)}function zi(C,B){if(B=="as")return se.marked="keyword",N(Ue("variable"));if(C=="variable")return ye(Ht,zi)}function ii(C){return C=="string"?N():C=="("?ye($e):C=="."?ye(We):ye(xi,At,bi)}function xi(C,B){return C=="{"?mn(xi,"}"):(C=="variable"&&q(B),B=="*"&&(se.marked="keyword"),N(os))}function At(C){if(C==",")return N(xi,At)}function os(C,B){if(B=="as")return se.marked="keyword",N(xi)}function bi(C,B){if(B=="from")return se.marked="keyword",N($e)}function Xt(C){return C=="]"?N():ye(pt(Ht,"]"))}function Qe(){return ye(ke("form"),In,Ue("{"),ke("}"),pt(si,"}"),Ie,Ie)}function si(){return ye(In,En)}function dr(C,B){return C.lastType=="operator"||C.lastType==","||V.test(B.charAt(0))||/[,.]/.test(B.charAt(0))}function On(C,B,fe){return B.tokenize==F&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(B.lastType)||B.lastType=="quasi"&&/\{\s*$/.test(C.string.slice(0,C.pos-(fe||0)))}return{startState:function(C){var B={tokenize:F,lastType:"sof",cc:[],lexical:new je((C||0)-b,0,"block",!1),localVars:y.localVars,context:y.localVars&&new G(null,null,!1),indented:C||0};return y.globalVars&&typeof y.globalVars=="object"&&(B.globalVars=y.globalVars),B},token:function(C,B){if(C.sol()&&(B.lexical.hasOwnProperty("align")||(B.lexical.align=!1),B.indented=C.indentation(),we(C,B)),B.tokenize!=Y&&C.eatSpace())return null;var fe=B.tokenize(C,B);return ae=="comment"?fe:(B.lastType=ae=="operator"&&(D=="++"||D=="--")?"incdec":ae,Ce(B,fe,ae,D,C))},indent:function(C,B){if(C.tokenize==Y||C.tokenize==he)return d.Pass;if(C.tokenize!=F)return 0;var fe=B&&B.charAt(0),Ee=C.lexical,de;if(!/^\s*else\b/.test(B))for(var Be=C.cc.length-1;Be>=0;--Be){var Tt=C.cc[Be];if(Tt==Ie)Ee=Ee.prev;else if(Tt!=Xn&&Tt!=qe)break}for(;(Ee.type=="stat"||Ee.type=="form")&&(fe=="}"||(de=C.cc[C.cc.length-1])&&(de==We||de==rt)&&!/^[,\.=+\-*:?[\(]/.test(B));)Ee=Ee.prev;_&&Ee.type==")"&&Ee.prev.type=="stat"&&(Ee=Ee.prev);var en=Ee.type,Sn=fe==en;return en=="vardef"?Ee.indented+(C.lastType=="operator"||C.lastType==","?Ee.info.length+1:0):en=="form"&&fe=="{"?Ee.indented:en=="form"?Ee.indented+b:en=="stat"?Ee.indented+(dr(C,B)?_||b:0):Ee.info=="switch"&&!Sn&&y.doubleIndentSwitch!=!1?Ee.indented+(/^(?:case|default)\b/.test(B)?b:2*b):Ee.align?Ee.column+(Sn?0:1):Ee.indented+(Sn?0:b)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:k?null:"/*",blockCommentEnd:k?null:"*/",blockCommentContinue:k?null:" * ",lineComment:k?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:k?"json":"javascript",jsonldMode:T,jsonMode:k,expressionAllowed:On,skipExpression:function(C){Ce(C,"atom","atom","true",new d.StringStream("",2,null))}}}),d.registerHelper("wordChars","javascript",/[\w$]/),d.defineMIME("text/javascript","javascript"),d.defineMIME("text/ecmascript","javascript"),d.defineMIME("application/javascript","javascript"),d.defineMIME("application/x-javascript","javascript"),d.defineMIME("application/ecmascript","javascript"),d.defineMIME("application/json",{name:"javascript",json:!0}),d.defineMIME("application/x-json",{name:"javascript",json:!0}),d.defineMIME("application/manifest+json",{name:"javascript",json:!0}),d.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),d.defineMIME("text/typescript",{name:"javascript",typescript:!0}),d.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})()),Sf.exports}km();var Cf={exports:{}},Tf;function zx(){return Tf||(Tf=1,(function(l,u){(function(d){d(ss())})(function(d){function g(j,A,G,M,Q,Se){this.indented=j,this.column=A,this.type=G,this.info=M,this.align=Q,this.prev=Se}function y(j,A,G,M){var Q=j.indented;return j.context&&j.context.type=="statement"&&G!="statement"&&(Q=j.context.indented),j.context=new g(Q,A,G,M,null,j.context)}function b(j){var A=j.context.type;return(A==")"||A=="]"||A=="}")&&(j.indented=j.context.indented),j.context=j.context.prev}function _(j,A,G){if(A.prevToken=="variable"||A.prevToken=="type"||/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(j.string.slice(0,G))||A.typeAtEndOfLine&&j.column()==j.indentation())return!0}function T(j){for(;;){if(!j||j.type=="top")return!0;if(j.type=="}"&&j.prev.info!="namespace")return!1;j=j.prev}}d.defineMode("clike",function(j,A){var G=j.indentUnit,M=A.statementIndentUnit||G,Q=A.dontAlignCalls,Se=A.keywords||{},De=A.types||{},qe=A.builtin||{},ke=A.blockKeywords||{},Ie=A.defKeywords||{},Ue=A.atoms||{},Ke=A.hooks||{},tt=A.multiLineStrings,$e=A.indentStatements!==!1,Ht=A.indentSwitch!==!1,Gt=A.namespaceSeparator,St=A.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,vt=A.numberStart||/[\d\.]/,We=A.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,rt=A.isOperatorChar||/[+\-*&%=<>!?|\/]/,et=A.isIdentifierChar||/[\w\$_\xa1-\uffff]/,Kt=A.isReservedIdentifier||!1,Ge,ht;function oe(Je,at){var Ve=Je.next();if(Ke[Ve]){var yt=Ke[Ve](Je,at);if(yt!==!1)return yt}if(Ve=='"'||Ve=="'")return at.tokenize=_e(Ve),at.tokenize(Je,at);if(vt.test(Ve)){if(Je.backUp(1),Je.match(We))return"number";Je.next()}if(St.test(Ve))return Ge=Ve,null;if(Ve=="/"){if(Je.eat("*"))return at.tokenize=ge,ge(Je,at);if(Je.eat("/"))return Je.skipToEnd(),"comment"}if(rt.test(Ve)){for(;!Je.match(/^\/[\/*]/,!1)&&Je.eat(rt););return"operator"}if(Je.eatWhile(et),Gt)for(;Je.match(Gt);)Je.eatWhile(et);var pt=Je.current();return E(Se,pt)?(E(ke,pt)&&(Ge="newstatement"),E(Ie,pt)&&(ht=!0),"keyword"):E(De,pt)?"type":E(qe,pt)||Kt&&Kt(pt)?(E(ke,pt)&&(Ge="newstatement"),"builtin"):E(Ue,pt)?"atom":"variable"}function _e(Je){return function(at,Ve){for(var yt=!1,pt,mn=!1;(pt=at.next())!=null;){if(pt==Je&&!yt){mn=!0;break}yt=!yt&&pt=="\\"}return(mn||!(yt||tt))&&(Ve.tokenize=null),"string"}}function ge(Je,at){for(var Ve=!1,yt;yt=Je.next();){if(yt=="/"&&Ve){at.tokenize=null;break}Ve=yt=="*"}return"comment"}function wt(Je,at){A.typeFirstDefinitions&&Je.eol()&&T(at.context)&&(at.typeAtEndOfLine=_(Je,at,Je.pos))}return{startState:function(Je){return{tokenize:null,context:new g((Je||0)-G,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(Je,at){var Ve=at.context;if(Je.sol()&&(Ve.align==null&&(Ve.align=!1),at.indented=Je.indentation(),at.startOfLine=!0),Je.eatSpace())return wt(Je,at),null;Ge=ht=null;var yt=(at.tokenize||oe)(Je,at);if(yt=="comment"||yt=="meta")return yt;if(Ve.align==null&&(Ve.align=!0),Ge==";"||Ge==":"||Ge==","&&Je.match(/^\s*(?:\/\/.*)?$/,!1))for(;at.context.type=="statement";)b(at);else if(Ge=="{")y(at,Je.column(),"}");else if(Ge=="[")y(at,Je.column(),"]");else if(Ge=="(")y(at,Je.column(),")");else if(Ge=="}"){for(;Ve.type=="statement";)Ve=b(at);for(Ve.type=="}"&&(Ve=b(at));Ve.type=="statement";)Ve=b(at)}else Ge==Ve.type?b(at):$e&&((Ve.type=="}"||Ve.type=="top")&&Ge!=";"||Ve.type=="statement"&&Ge=="newstatement")&&y(at,Je.column(),"statement",Je.current());if(yt=="variable"&&(at.prevToken=="def"||A.typeFirstDefinitions&&_(Je,at,Je.start)&&T(at.context)&&Je.match(/^\s*\(/,!1))&&(yt="def"),Ke.token){var pt=Ke.token(Je,at,yt);pt!==void 0&&(yt=pt)}return yt=="def"&&A.styleDefs===!1&&(yt="variable"),at.startOfLine=!1,at.prevToken=ht?"def":yt||Ge,wt(Je,at),yt},indent:function(Je,at){if(Je.tokenize!=oe&&Je.tokenize!=null||Je.typeAtEndOfLine&&T(Je.context))return d.Pass;var Ve=Je.context,yt=at&&at.charAt(0),pt=yt==Ve.type;if(Ve.type=="statement"&&yt=="}"&&(Ve=Ve.prev),A.dontIndentStatements)for(;Ve.type=="statement"&&A.dontIndentStatements.test(Ve.info);)Ve=Ve.prev;if(Ke.indent){var mn=Ke.indent(Je,Ve,at,G);if(typeof mn=="number")return mn}var Jn=Ve.prev&&Ve.prev.info=="switch";if(A.allmanIndentation&&/[{(]/.test(yt)){for(;Ve.type!="top"&&Ve.type!="}";)Ve=Ve.prev;return Ve.indented}return Ve.type=="statement"?Ve.indented+(yt=="{"?0:M):Ve.align&&(!Q||Ve.type!=")")?Ve.column+(pt?0:1):Ve.type==")"&&!pt?Ve.indented+M:Ve.indented+(pt?0:G)+(!pt&&Jn&&!/^(?:case|default)\b/.test(at)?G:0)},electricInput:Ht?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});function k(j){for(var A={},G=j.split(" "),M=0;M<G.length;++M)A[G[M]]=!0;return A}function E(j,A){return typeof j=="function"?j(A):j.propertyIsEnumerable(A)}var P="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",I="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",R="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",V="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",te=k("int long char short double float unsigned signed void bool"),H=k("SEL instancetype id Class Protocol BOOL");function ae(j){return E(te,j)||/.+_t$/.test(j)}function D(j){return ae(j)||E(H,j)}var W="case do else for if switch while struct enum union",F="struct enum union";function K(j,A){if(!A.startOfLine)return!1;for(var G,M=null;G=j.peek();){if(G=="\\"&&j.match(/^.$/)){M=K;break}else if(G=="/"&&j.match(/^\/[\/\*]/,!1))break;j.next()}return A.tokenize=M,"meta"}function Y(j,A){return A.prevToken=="type"?"type":!1}function he(j){return!j||j.length<2||j[0]!="_"?!1:j[1]=="_"||j[1]!==j[1].toLowerCase()}function le(j){return j.eatWhile(/[\w\.']/),"number"}function we(j,A){if(j.backUp(1),j.match(/^(?:R|u8R|uR|UR|LR)/)){var G=j.match(/^"([^\s\\()]{0,16})\(/);return G?(A.cpp11RawStringDelim=G[1],A.tokenize=ie,ie(j,A)):!1}return j.match(/^(?:u8|u|U|L)/)?j.match(/^["']/,!1)?"string":!1:(j.next(),!1)}function He(j){var A=/(\w+)::~?(\w+)$/.exec(j);return A&&A[1]==A[2]}function je(j,A){for(var G;(G=j.next())!=null;)if(G=='"'&&!j.eat('"')){A.tokenize=null;break}return"string"}function ie(j,A){var G=A.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),M=j.match(new RegExp(".*?\\)"+G+'"'));return M?A.tokenize=null:j.skipToEnd(),"string"}function Ce(j,A){typeof j=="string"&&(j=[j]);var G=[];function M(Se){if(Se)for(var De in Se)Se.hasOwnProperty(De)&&G.push(De)}M(A.keywords),M(A.types),M(A.builtin),M(A.atoms),G.length&&(A.helperType=j[0],d.registerHelper("hintWords",j[0],G));for(var Q=0;Q<j.length;++Q)d.defineMIME(j[Q],A)}Ce(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:k(P),types:ae,blockKeywords:k(W),defKeywords:k(F),typeFirstDefinitions:!0,atoms:k("NULL true false"),isReservedIdentifier:he,hooks:{"#":K,"*":Y},modeProps:{fold:["brace","include"]}}),Ce(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:k(P+" "+I),types:ae,blockKeywords:k(W+" class try catch"),defKeywords:k(F+" class namespace"),typeFirstDefinitions:!0,atoms:k("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:he,hooks:{"#":K,"*":Y,u:we,U:we,L:we,R:we,0:le,1:le,2:le,3:le,4:le,5:le,6:le,7:le,8:le,9:le,token:function(j,A,G){if(G=="variable"&&j.peek()=="("&&(A.prevToken==";"||A.prevToken==null||A.prevToken=="}")&&He(j.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ce("text/x-java",{name:"clike",keywords:k("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:k("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:k("catch class do else finally for if switch try while"),defKeywords:k("class interface enum @interface"),typeFirstDefinitions:!0,atoms:k("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(j){return j.match("interface",!1)?!1:(j.eatWhile(/[\w\$_]/),"meta")},'"':function(j,A){return j.match(/""$/)?(A.tokenize=se,A.tokenize(j,A)):!1}},modeProps:{fold:["brace","import"]}}),Ce("text/x-csharp",{name:"clike",keywords:k("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:k("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:k("catch class do else finally for foreach if struct switch try while"),defKeywords:k("class interface namespace record struct var"),typeFirstDefinitions:!0,atoms:k("true false null"),hooks:{"@":function(j,A){return j.eat('"')?(A.tokenize=je,je(j,A)):(j.eatWhile(/[\w\$_]/),"meta")}}});function se(j,A){for(var G=!1;!j.eol();){if(!G&&j.match('"""')){A.tokenize=null;break}G=j.next()=="\\"&&!G}return"string"}function ye(j){return function(A,G){for(var M;M=A.next();)if(M=="*"&&A.eat("/"))if(j==1){G.tokenize=null;break}else return G.tokenize=ye(j-1),G.tokenize(A,G);else if(M=="/"&&A.eat("*"))return G.tokenize=ye(j+1),G.tokenize(A,G);return"comment"}}Ce("text/x-scala",{name:"clike",keywords:k("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:k("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:k("catch class enum do else finally for forSome if match switch try while"),defKeywords:k("class enum def object package trait type val var"),atoms:k("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(j){return j.eatWhile(/[\w\$_]/),"meta"},'"':function(j,A){return j.match('""')?(A.tokenize=se,A.tokenize(j,A)):!1},"'":function(j){return j.match(/^(\\[^'\s]+|[^\\'])'/)?"string-2":(j.eatWhile(/[\w\$_\xa1-\uffff]/),"atom")},"=":function(j,A){var G=A.context;return G.type=="}"&&G.align&&j.eat(">")?(A.context=new g(G.indented,G.column,G.type,G.info,null,G.prev),"operator"):!1},"/":function(j,A){return j.eat("*")?(A.tokenize=ye(1),A.tokenize(j,A)):!1}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}});function N(j){return function(A,G){for(var M=!1,Q,Se=!1;!A.eol();){if(!j&&!M&&A.match('"')){Se=!0;break}if(j&&A.match('"""')){Se=!0;break}Q=A.next(),!M&&Q=="$"&&A.match("{")&&A.skipTo("}"),M=!M&&Q=="\\"&&!j}return(Se||!j)&&(G.tokenize=null),"string"}}Ce("text/x-kotlin",{name:"clike",keywords:k("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"),types:k("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),indentSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(ul?|l|f)?/i,blockKeywords:k("catch class do else finally for if where try while enum"),defKeywords:k("class val var object interface fun"),atoms:k("true false null this"),hooks:{"@":function(j){return j.eatWhile(/[\w\$_]/),"meta"},"*":function(j,A){return A.prevToken=="."?"variable":"operator"},'"':function(j,A){return A.tokenize=N(j.match('""')),A.tokenize(j,A)},"/":function(j,A){return j.eat("*")?(A.tokenize=ye(1),A.tokenize(j,A)):!1},indent:function(j,A,G,M){var Q=G&&G.charAt(0);if((j.prevToken=="}"||j.prevToken==")")&&G=="")return j.indented;if(j.prevToken=="operator"&&G!="}"&&j.context.type!="}"||j.prevToken=="variable"&&Q=="."||(j.prevToken=="}"||j.prevToken==")")&&Q==".")return M*2+A.indented;if(A.align&&A.type=="}")return A.indented+(j.context.type==(G||"").charAt(0)?0:M)}},modeProps:{closeBrackets:{triples:'"'}}}),Ce(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:k("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:k("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:k("for while do if else struct"),builtin:k("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:k("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":K},modeProps:{fold:["brace","include"]}}),Ce("text/x-nesc",{name:"clike",keywords:k(P+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:ae,blockKeywords:k(W),atoms:k("null true false"),hooks:{"#":K},modeProps:{fold:["brace","include"]}}),Ce("text/x-objectivec",{name:"clike",keywords:k(P+" "+R),types:D,builtin:k(V),blockKeywords:k(W+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:k(F+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:k("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:he,hooks:{"#":K,"*":Y},modeProps:{fold:["brace","include"]}}),Ce("text/x-objectivec++",{name:"clike",keywords:k(P+" "+R+" "+I),types:D,builtin:k(V),blockKeywords:k(W+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:k(F+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:k("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:he,hooks:{"#":K,"*":Y,u:we,U:we,L:we,R:we,0:le,1:le,2:le,3:le,4:le,5:le,6:le,7:le,8:le,9:le,token:function(j,A,G){if(G=="variable"&&j.peek()=="("&&(A.prevToken==";"||A.prevToken==null||A.prevToken=="}")&&He(j.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ce("text/x-squirrel",{name:"clike",keywords:k("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:ae,blockKeywords:k("case catch class else for foreach if switch try while"),defKeywords:k("function local class"),typeFirstDefinitions:!0,atoms:k("true false null"),hooks:{"#":K},modeProps:{fold:["brace","include"]}});var J=null;function q(j){return function(A,G){for(var M=!1,Q,Se=!1;!A.eol();){if(!M&&A.match('"')&&(j=="single"||A.match('""'))){Se=!0;break}if(!M&&A.match("``")){J=q(j),Se=!0;break}Q=A.next(),M=j=="single"&&!M&&Q=="\\"}return Se&&(G.tokenize=null),"string"}}Ce("text/x-ceylon",{name:"clike",keywords:k("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(j){var A=j.charAt(0);return A===A.toUpperCase()&&A!==A.toLowerCase()},blockKeywords:k("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:k("class dynamic function interface module object package value"),builtin:k("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:k("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(j){return j.eatWhile(/[\w\$_]/),"meta"},'"':function(j,A){return A.tokenize=q(j.match('""')?"triple":"single"),A.tokenize(j,A)},"`":function(j,A){return!J||!j.match("`")?!1:(A.tokenize=J,J=null,A.tokenize(j,A))},"'":function(j){return j.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(j,A,G){if((G=="variable"||G=="type")&&A.prevToken==".")return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})})})()),Cf.exports}zx();var jf={exports:{}},Nf;function Sm(){return Nf||(Nf=1,(function(l,u){(function(d){d(ss())})(function(d){var g={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},y={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};d.defineMode("xml",function(b,_){var T=b.indentUnit,k={},E=_.htmlMode?g:y;for(var P in E)k[P]=E[P];for(var P in _)k[P]=_[P];var I,R;function V(N,J){function q(G){return J.tokenize=G,G(N,J)}var j=N.next();if(j=="<")return N.eat("!")?N.eat("[")?N.match("CDATA[")?q(ae("atom","]]>")):null:N.match("--")?q(ae("comment","-->")):N.match("DOCTYPE",!0,!0)?(N.eatWhile(/[\w\._\-]/),q(D(1))):null:N.eat("?")?(N.eatWhile(/[\w\._\-]/),J.tokenize=ae("meta","?>"),"meta"):(I=N.eat("/")?"closeTag":"openTag",J.tokenize=te,"tag bracket");if(j=="&"){var A;return N.eat("#")?N.eat("x")?A=N.eatWhile(/[a-fA-F\d]/)&&N.eat(";"):A=N.eatWhile(/[\d]/)&&N.eat(";"):A=N.eatWhile(/[\w\.\-:]/)&&N.eat(";"),A?"atom":"error"}else return N.eatWhile(/[^&<]/),null}V.isInText=!0;function te(N,J){var q=N.next();if(q==">"||q=="/"&&N.eat(">"))return J.tokenize=V,I=q==">"?"endTag":"selfcloseTag","tag bracket";if(q=="=")return I="equals",null;if(q=="<"){J.tokenize=V,J.state=he,J.tagName=J.tagStart=null;var j=J.tokenize(N,J);return j?j+" tag error":"tag error"}else return/[\'\"]/.test(q)?(J.tokenize=H(q),J.stringStartCol=N.column(),J.tokenize(N,J)):(N.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function H(N){var J=function(q,j){for(;!q.eol();)if(q.next()==N){j.tokenize=te;break}return"string"};return J.isInAttribute=!0,J}function ae(N,J){return function(q,j){for(;!q.eol();){if(q.match(J)){j.tokenize=V;break}q.next()}return N}}function D(N){return function(J,q){for(var j;(j=J.next())!=null;){if(j=="<")return q.tokenize=D(N+1),q.tokenize(J,q);if(j==">")if(N==1){q.tokenize=V;break}else return q.tokenize=D(N-1),q.tokenize(J,q)}return"meta"}}function W(N){return N&&N.toLowerCase()}function F(N,J,q){this.prev=N.context,this.tagName=J||"",this.indent=N.indented,this.startOfLine=q,(k.doNotIndent.hasOwnProperty(J)||N.context&&N.context.noIndent)&&(this.noIndent=!0)}function K(N){N.context&&(N.context=N.context.prev)}function Y(N,J){for(var q;;){if(!N.context||(q=N.context.tagName,!k.contextGrabbers.hasOwnProperty(W(q))||!k.contextGrabbers[W(q)].hasOwnProperty(W(J))))return;K(N)}}function he(N,J,q){return N=="openTag"?(q.tagStart=J.column(),le):N=="closeTag"?we:he}function le(N,J,q){return N=="word"?(q.tagName=J.current(),R="tag",ie):k.allowMissingTagName&&N=="endTag"?(R="tag bracket",ie(N,J,q)):(R="error",le)}function we(N,J,q){if(N=="word"){var j=J.current();return q.context&&q.context.tagName!=j&&k.implicitlyClosed.hasOwnProperty(W(q.context.tagName))&&K(q),q.context&&q.context.tagName==j||k.matchClosing===!1?(R="tag",He):(R="tag error",je)}else return k.allowMissingTagName&&N=="endTag"?(R="tag bracket",He(N,J,q)):(R="error",je)}function He(N,J,q){return N!="endTag"?(R="error",He):(K(q),he)}function je(N,J,q){return R="error",He(N,J,q)}function ie(N,J,q){if(N=="word")return R="attribute",Ce;if(N=="endTag"||N=="selfcloseTag"){var j=q.tagName,A=q.tagStart;return q.tagName=q.tagStart=null,N=="selfcloseTag"||k.autoSelfClosers.hasOwnProperty(W(j))?Y(q,j):(Y(q,j),q.context=new F(q,j,A==q.indented)),he}return R="error",ie}function Ce(N,J,q){return N=="equals"?se:(k.allowMissing||(R="error"),ie(N,J,q))}function se(N,J,q){return N=="string"?ye:N=="word"&&k.allowUnquoted?(R="string",ie):(R="error",ie(N,J,q))}function ye(N,J,q){return N=="string"?ye:ie(N,J,q)}return{startState:function(N){var J={tokenize:V,state:he,indented:N||0,tagName:null,tagStart:null,context:null};return N!=null&&(J.baseIndent=N),J},token:function(N,J){if(!J.tagName&&N.sol()&&(J.indented=N.indentation()),N.eatSpace())return null;I=null;var q=J.tokenize(N,J);return(q||I)&&q!="comment"&&(R=null,J.state=J.state(I||q,N,J),R&&(q=R=="error"?q+" error":R)),q},indent:function(N,J,q){var j=N.context;if(N.tokenize.isInAttribute)return N.tagStart==N.indented?N.stringStartCol+1:N.indented+T;if(j&&j.noIndent)return d.Pass;if(N.tokenize!=te&&N.tokenize!=V)return q?q.match(/^(\s*)/)[0].length:0;if(N.tagName)return k.multilineTagIndentPastTag!==!1?N.tagStart+N.tagName.length+2:N.tagStart+T*(k.multilineTagIndentFactor||1);if(k.alignCDATA&&/<!\[CDATA\[/.test(J))return 0;var A=J&&/^<(\/)?([\w_:\.-]*)/.exec(J);if(A&&A[1])for(;j;)if(j.tagName==A[2]){j=j.prev;break}else if(k.implicitlyClosed.hasOwnProperty(W(j.tagName)))j=j.prev;else break;else if(A)for(;j;){var G=k.contextGrabbers[W(j.tagName)];if(G&&G.hasOwnProperty(W(A[2])))j=j.prev;else break}for(;j&&j.prev&&!j.startOfLine;)j=j.prev;return j?j.indent+T:N.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:k.htmlMode?"html":"xml",helperType:k.htmlMode?"html":"xml",skipAttribute:function(N){N.state==se&&(N.state=ie)},xmlCurrentTag:function(N){return N.tagName?{name:N.tagName,close:N.type=="closeTag"}:null},xmlCurrentContext:function(N){for(var J=[],q=N.context;q;q=q.prev)J.push(q.tagName);return J.reverse()}}}),d.defineMIME("text/xml","xml"),d.defineMIME("application/xml","xml"),d.mimeModes.hasOwnProperty("text/html")||d.defineMIME("text/html",{name:"xml",htmlMode:!0})})})()),jf.exports}Sm();var Ef={exports:{}},Lf;function _m(){return Lf||(Lf=1,(function(l,u){(function(d){d(ss())})(function(d){d.defineMode("css",function(je,ie){var Ce=ie.inline;ie.propertyKeywords||(ie=d.resolveMode("text/css"));var se=je.indentUnit,ye=ie.tokenHooks,N=ie.documentTypes||{},J=ie.mediaTypes||{},q=ie.mediaFeatures||{},j=ie.mediaValueKeywords||{},A=ie.propertyKeywords||{},G=ie.nonStandardPropertyKeywords||{},M=ie.fontProperties||{},Q=ie.counterDescriptors||{},Se=ie.colorKeywords||{},De=ie.valueKeywords||{},qe=ie.allowNested,ke=ie.lineComment,Ie=ie.supportsAtComponent===!0,Ue=je.highlightNonStandardPropertyKeywords!==!1,Ke,tt;function $e(oe,_e){return Ke=_e,oe}function Ht(oe,_e){var ge=oe.next();if(ye[ge]){var wt=ye[ge](oe,_e);if(wt!==!1)return wt}if(ge=="@")return oe.eatWhile(/[\w\\\-]/),$e("def",oe.current());if(ge=="="||(ge=="~"||ge=="|")&&oe.eat("="))return $e(null,"compare");if(ge=='"'||ge=="'")return _e.tokenize=Gt(ge),_e.tokenize(oe,_e);if(ge=="#")return oe.eatWhile(/[\w\\\-]/),$e("atom","hash");if(ge=="!")return oe.match(/^\s*\w*/),$e("keyword","important");if(/\d/.test(ge)||ge=="."&&oe.eat(/\d/))return oe.eatWhile(/[\w.%]/),$e("number","unit");if(ge==="-"){if(/[\d.]/.test(oe.peek()))return oe.eatWhile(/[\w.%]/),$e("number","unit");if(oe.match(/^-[\w\\\-]*/))return oe.eatWhile(/[\w\\\-]/),oe.match(/^\s*:/,!1)?$e("variable-2","variable-definition"):$e("variable-2","variable");if(oe.match(/^\w+-/))return $e("meta","meta")}else return/[,+>*\/]/.test(ge)?$e(null,"select-op"):ge=="."&&oe.match(/^-?[_a-z][_a-z0-9-]*/i)?$e("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(ge)?$e(null,ge):oe.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(oe.current())&&(_e.tokenize=St),$e("variable callee","variable")):/[\w\\\-]/.test(ge)?(oe.eatWhile(/[\w\\\-]/),$e("property","word")):$e(null,null)}function Gt(oe){return function(_e,ge){for(var wt=!1,Je;(Je=_e.next())!=null;){if(Je==oe&&!wt){oe==")"&&_e.backUp(1);break}wt=!wt&&Je=="\\"}return(Je==oe||!wt&&oe!=")")&&(ge.tokenize=null),$e("string","string")}}function St(oe,_e){return oe.next(),oe.match(/^\s*[\"\')]/,!1)?_e.tokenize=null:_e.tokenize=Gt(")"),$e(null,"(")}function vt(oe,_e,ge){this.type=oe,this.indent=_e,this.prev=ge}function We(oe,_e,ge,wt){return oe.context=new vt(ge,_e.indentation()+(wt===!1?0:se),oe.context),ge}function rt(oe){return oe.context.prev&&(oe.context=oe.context.prev),oe.context.type}function et(oe,_e,ge){return ht[ge.context.type](oe,_e,ge)}function Kt(oe,_e,ge,wt){for(var Je=wt||1;Je>0;Je--)ge.context=ge.context.prev;return et(oe,_e,ge)}function Ge(oe){var _e=oe.current().toLowerCase();De.hasOwnProperty(_e)?tt="atom":Se.hasOwnProperty(_e)?tt="keyword":tt="variable"}var ht={};return ht.top=function(oe,_e,ge){if(oe=="{")return We(ge,_e,"block");if(oe=="}"&&ge.context.prev)return rt(ge);if(Ie&&/@component/i.test(oe))return We(ge,_e,"atComponentBlock");if(/^@(-moz-)?document$/i.test(oe))return We(ge,_e,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(oe))return We(ge,_e,"atBlock");if(/^@(font-face|counter-style)/i.test(oe))return ge.stateArg=oe,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(oe))return"keyframes";if(oe&&oe.charAt(0)=="@")return We(ge,_e,"at");if(oe=="hash")tt="builtin";else if(oe=="word")tt="tag";else{if(oe=="variable-definition")return"maybeprop";if(oe=="interpolation")return We(ge,_e,"interpolation");if(oe==":")return"pseudo";if(qe&&oe=="(")return We(ge,_e,"parens")}return ge.context.type},ht.block=function(oe,_e,ge){if(oe=="word"){var wt=_e.current().toLowerCase();return A.hasOwnProperty(wt)?(tt="property","maybeprop"):G.hasOwnProperty(wt)?(tt=Ue?"string-2":"property","maybeprop"):qe?(tt=_e.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(tt+=" error","maybeprop")}else return oe=="meta"?"block":!qe&&(oe=="hash"||oe=="qualifier")?(tt="error","block"):ht.top(oe,_e,ge)},ht.maybeprop=function(oe,_e,ge){return oe==":"?We(ge,_e,"prop"):et(oe,_e,ge)},ht.prop=function(oe,_e,ge){if(oe==";")return rt(ge);if(oe=="{"&&qe)return We(ge,_e,"propBlock");if(oe=="}"||oe=="{")return Kt(oe,_e,ge);if(oe=="(")return We(ge,_e,"parens");if(oe=="hash"&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(_e.current()))tt+=" error";else if(oe=="word")Ge(_e);else if(oe=="interpolation")return We(ge,_e,"interpolation");return"prop"},ht.propBlock=function(oe,_e,ge){return oe=="}"?rt(ge):oe=="word"?(tt="property","maybeprop"):ge.context.type},ht.parens=function(oe,_e,ge){return oe=="{"||oe=="}"?Kt(oe,_e,ge):oe==")"?rt(ge):oe=="("?We(ge,_e,"parens"):oe=="interpolation"?We(ge,_e,"interpolation"):(oe=="word"&&Ge(_e),"parens")},ht.pseudo=function(oe,_e,ge){return oe=="meta"?"pseudo":oe=="word"?(tt="variable-3",ge.context.type):et(oe,_e,ge)},ht.documentTypes=function(oe,_e,ge){return oe=="word"&&N.hasOwnProperty(_e.current())?(tt="tag",ge.context.type):ht.atBlock(oe,_e,ge)},ht.atBlock=function(oe,_e,ge){if(oe=="(")return We(ge,_e,"atBlock_parens");if(oe=="}"||oe==";")return Kt(oe,_e,ge);if(oe=="{")return rt(ge)&&We(ge,_e,qe?"block":"top");if(oe=="interpolation")return We(ge,_e,"interpolation");if(oe=="word"){var wt=_e.current().toLowerCase();wt=="only"||wt=="not"||wt=="and"||wt=="or"?tt="keyword":J.hasOwnProperty(wt)?tt="attribute":q.hasOwnProperty(wt)?tt="property":j.hasOwnProperty(wt)?tt="keyword":A.hasOwnProperty(wt)?tt="property":G.hasOwnProperty(wt)?tt=Ue?"string-2":"property":De.hasOwnProperty(wt)?tt="atom":Se.hasOwnProperty(wt)?tt="keyword":tt="error"}return ge.context.type},ht.atComponentBlock=function(oe,_e,ge){return oe=="}"?Kt(oe,_e,ge):oe=="{"?rt(ge)&&We(ge,_e,qe?"block":"top",!1):(oe=="word"&&(tt="error"),ge.context.type)},ht.atBlock_parens=function(oe,_e,ge){return oe==")"?rt(ge):oe=="{"||oe=="}"?Kt(oe,_e,ge,2):ht.atBlock(oe,_e,ge)},ht.restricted_atBlock_before=function(oe,_e,ge){return oe=="{"?We(ge,_e,"restricted_atBlock"):oe=="word"&&ge.stateArg=="@counter-style"?(tt="variable","restricted_atBlock_before"):et(oe,_e,ge)},ht.restricted_atBlock=function(oe,_e,ge){return oe=="}"?(ge.stateArg=null,rt(ge)):oe=="word"?(ge.stateArg=="@font-face"&&!M.hasOwnProperty(_e.current().toLowerCase())||ge.stateArg=="@counter-style"&&!Q.hasOwnProperty(_e.current().toLowerCase())?tt="error":tt="property","maybeprop"):"restricted_atBlock"},ht.keyframes=function(oe,_e,ge){return oe=="word"?(tt="variable","keyframes"):oe=="{"?We(ge,_e,"top"):et(oe,_e,ge)},ht.at=function(oe,_e,ge){return oe==";"?rt(ge):oe=="{"||oe=="}"?Kt(oe,_e,ge):(oe=="word"?tt="tag":oe=="hash"&&(tt="builtin"),"at")},ht.interpolation=function(oe,_e,ge){return oe=="}"?rt(ge):oe=="{"||oe==";"?Kt(oe,_e,ge):(oe=="word"?tt="variable":oe!="variable"&&oe!="("&&oe!=")"&&(tt="error"),"interpolation")},{startState:function(oe){return{tokenize:null,state:Ce?"block":"top",stateArg:null,context:new vt(Ce?"block":"top",oe||0,null)}},token:function(oe,_e){if(!_e.tokenize&&oe.eatSpace())return null;var ge=(_e.tokenize||Ht)(oe,_e);return ge&&typeof ge=="object"&&(Ke=ge[1],ge=ge[0]),tt=ge,Ke!="comment"&&(_e.state=ht[_e.state](Ke,oe,_e)),tt},indent:function(oe,_e){var ge=oe.context,wt=_e&&_e.charAt(0),Je=ge.indent;return ge.type=="prop"&&(wt=="}"||wt==")")&&(ge=ge.prev),ge.prev&&(wt=="}"&&(ge.type=="block"||ge.type=="top"||ge.type=="interpolation"||ge.type=="restricted_atBlock")?(ge=ge.prev,Je=ge.indent):(wt==")"&&(ge.type=="parens"||ge.type=="atBlock_parens")||wt=="{"&&(ge.type=="at"||ge.type=="atBlock"))&&(Je=Math.max(0,ge.indent-se))),Je},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:ke,fold:"brace"}});function g(je){for(var ie={},Ce=0;Ce<je.length;++Ce)ie[je[Ce].toLowerCase()]=!0;return ie}var y=["domain","regexp","url","url-prefix"],b=g(y),_=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],T=g(_),k=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],E=g(k),P=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],I=g(P),R=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],V=g(R),te=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],H=g(te),ae=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],D=g(ae),W=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],F=g(W),K=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],Y=g(K),he=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],le=g(he),we=y.concat(_).concat(k).concat(P).concat(R).concat(te).concat(K).concat(he);d.registerHelper("hintWords","css",we);function He(je,ie){for(var Ce=!1,se;(se=je.next())!=null;){if(Ce&&se=="/"){ie.tokenize=null;break}Ce=se=="*"}return["comment","comment"]}d.defineMIME("text/css",{documentTypes:b,mediaTypes:T,mediaFeatures:E,mediaValueKeywords:I,propertyKeywords:V,nonStandardPropertyKeywords:H,fontProperties:D,counterDescriptors:F,colorKeywords:Y,valueKeywords:le,tokenHooks:{"/":function(je,ie){return je.eat("*")?(ie.tokenize=He,He(je,ie)):!1}},name:"css"}),d.defineMIME("text/x-scss",{mediaTypes:T,mediaFeatures:E,mediaValueKeywords:I,propertyKeywords:V,nonStandardPropertyKeywords:H,colorKeywords:Y,valueKeywords:le,fontProperties:D,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(je,ie){return je.eat("/")?(je.skipToEnd(),["comment","comment"]):je.eat("*")?(ie.tokenize=He,He(je,ie)):["operator","operator"]},":":function(je){return je.match(/^\s*\{/,!1)?[null,null]:!1},$:function(je){return je.match(/^[\w-]+/),je.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(je){return je.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),d.defineMIME("text/x-less",{mediaTypes:T,mediaFeatures:E,mediaValueKeywords:I,propertyKeywords:V,nonStandardPropertyKeywords:H,colorKeywords:Y,valueKeywords:le,fontProperties:D,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(je,ie){return je.eat("/")?(je.skipToEnd(),["comment","comment"]):je.eat("*")?(ie.tokenize=He,He(je,ie)):["operator","operator"]},"@":function(je){return je.eat("{")?[null,"interpolation"]:je.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)?!1:(je.eatWhile(/[\w\\\-]/),je.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),d.defineMIME("text/x-gss",{documentTypes:b,mediaTypes:T,mediaFeatures:E,propertyKeywords:V,nonStandardPropertyKeywords:H,fontProperties:D,counterDescriptors:F,colorKeywords:Y,valueKeywords:le,supportsAtComponent:!0,tokenHooks:{"/":function(je,ie){return je.eat("*")?(ie.tokenize=He,He(je,ie)):!1}},name:"css",helperType:"gss"})})})()),Ef.exports}_m();var Pf={exports:{}},Af;function Fx(){return Af||(Af=1,(function(l,u){(function(d){d(ss(),Sm(),km(),_m())})(function(d){var g={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function y(I,R,V){var te=I.current(),H=te.search(R);return H>-1?I.backUp(te.length-H):te.match(/<\/?$/)&&(I.backUp(te.length),I.match(R,!1)||I.match(te)),V}var b={};function _(I){var R=b[I];return R||(b[I]=new RegExp("\\s+"+I+`\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))}function T(I,R){var V=I.match(_(R));return V?/^\s*(.*?)\s*$/.exec(V[2])[1]:""}function k(I,R){return new RegExp((R?"^":"")+"</\\s*"+I+"\\s*>","i")}function E(I,R){for(var V in I)for(var te=R[V]||(R[V]=[]),H=I[V],ae=H.length-1;ae>=0;ae--)te.unshift(H[ae])}function P(I,R){for(var V=0;V<I.length;V++){var te=I[V];if(!te[0]||te[1].test(T(R,te[0])))return te[2]}}d.defineMode("htmlmixed",function(I,R){var V=d.getMode(I,{name:"xml",htmlMode:!0,multilineTagIndentFactor:R.multilineTagIndentFactor,multilineTagIndentPastTag:R.multilineTagIndentPastTag,allowMissingTagName:R.allowMissingTagName}),te={},H=R&&R.tags,ae=R&&R.scriptTypes;if(E(g,te),H&&E(H,te),ae)for(var D=ae.length-1;D>=0;D--)te.script.unshift(["type",ae[D].matches,ae[D].mode]);function W(F,K){var Y=V.token(F,K.htmlState),he=/\btag\b/.test(Y),le;if(he&&!/[<>\s\/]/.test(F.current())&&(le=K.htmlState.tagName&&K.htmlState.tagName.toLowerCase())&&te.hasOwnProperty(le))K.inTag=le+" ";else if(K.inTag&&he&&/>$/.test(F.current())){var we=/^([\S]+) (.*)/.exec(K.inTag);K.inTag=null;var He=F.current()==">"&&P(te[we[1]],we[2]),je=d.getMode(I,He),ie=k(we[1],!0),Ce=k(we[1],!1);K.token=function(se,ye){return se.match(ie,!1)?(ye.token=W,ye.localState=ye.localMode=null,null):y(se,Ce,ye.localMode.token(se,ye.localState))},K.localMode=je,K.localState=d.startState(je,V.indent(K.htmlState,"",""))}else K.inTag&&(K.inTag+=F.current(),F.eol()&&(K.inTag+=" "));return Y}return{startState:function(){var F=d.startState(V);return{token:W,inTag:null,localMode:null,localState:null,htmlState:F}},copyState:function(F){var K;return F.localState&&(K=d.copyState(F.localMode,F.localState)),{token:F.token,inTag:F.inTag,localMode:F.localMode,localState:K,htmlState:d.copyState(V,F.htmlState)}},token:function(F,K){return K.token(F,K)},indent:function(F,K,Y){return!F.localMode||/^\s*<\//.test(K)?V.indent(F.htmlState,K,Y):F.localMode.indent?F.localMode.indent(F.localState,K,Y):d.Pass},innerMode:function(F){return{state:F.localState||F.htmlState,mode:F.localMode||V}}}},"xml","javascript","css"),d.defineMIME("text/html","htmlmixed")})})()),Pf.exports}Fx();var Rf={exports:{}},If;function Wx(){return If||(If=1,(function(l,u){(function(d){d(ss())})(function(d){var g={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},y=d.Pos;d.defineOption("autoCloseBrackets",!1,function(D,W,F){F&&F!=d.Init&&(D.removeKeyMap(_),D.state.closeBrackets=null),W&&(T(b(W,"pairs")),D.state.closeBrackets=W,D.addKeyMap(_))});function b(D,W){return W=="pairs"&&typeof D=="string"?D:typeof D=="object"&&D[W]!=null?D[W]:g[W]}var _={Backspace:P,Enter:I};function T(D){for(var W=0;W<D.length;W++){var F=D.charAt(W),K="'"+F+"'";_[K]||(_[K]=k(F))}}T(g.pairs+"`");function k(D){return function(W){return te(W,D)}}function E(D){var W=D.state.closeBrackets;if(!W||W.override)return W;var F=D.getModeAt(D.getCursor());return F.closeBrackets||W}function P(D){var W=E(D);if(!W||D.getOption("disableInput"))return d.Pass;for(var F=b(W,"pairs"),K=D.listSelections(),Y=0;Y<K.length;Y++){if(!K[Y].empty())return d.Pass;var he=H(D,K[Y].head);if(!he||F.indexOf(he)%2!=0)return d.Pass}for(var Y=K.length-1;Y>=0;Y--){var le=K[Y].head;D.replaceRange("",y(le.line,le.ch-1),y(le.line,le.ch+1),"+delete")}}function I(D){var W=E(D),F=W&&b(W,"explode");if(!F||D.getOption("disableInput"))return d.Pass;for(var K=D.listSelections(),Y=0;Y<K.length;Y++){if(!K[Y].empty())return d.Pass;var he=H(D,K[Y].head);if(!he||F.indexOf(he)%2!=0)return d.Pass}D.operation(function(){var le=D.lineSeparator()||`
`;D.replaceSelection(le+le,null),R(D,-1),K=D.listSelections();for(var we=0;we<K.length;we++){var He=K[we].head.line;D.indentLine(He,null,!0),D.indentLine(He+1,null,!0)}})}function R(D,W){for(var F=[],K=D.listSelections(),Y=0,he=0;he<K.length;he++){var le=K[he];le.head==D.getCursor()&&(Y=he);var we=le.head.ch||W>0?{line:le.head.line,ch:le.head.ch+W}:{line:le.head.line-1};F.push({anchor:we,head:we})}D.setSelections(F,Y)}function V(D){var W=d.cmpPos(D.anchor,D.head)>0;return{anchor:new y(D.anchor.line,D.anchor.ch+(W?-1:1)),head:new y(D.head.line,D.head.ch+(W?1:-1))}}function te(D,W){var F=E(D);if(!F||D.getOption("disableInput"))return d.Pass;var K=b(F,"pairs"),Y=K.indexOf(W);if(Y==-1)return d.Pass;for(var he=b(F,"closeBefore"),le=b(F,"triples"),we=K.charAt(Y+1)==W,He=D.listSelections(),je=Y%2==0,ie,Ce=0;Ce<He.length;Ce++){var se=He[Ce],ye=se.head,N,J=D.getRange(ye,y(ye.line,ye.ch+1));if(je&&!se.empty())N="surround";else if((we||!je)&&J==W)we&&ae(D,ye)?N="both":le.indexOf(W)>=0&&D.getRange(ye,y(ye.line,ye.ch+3))==W+W+W?N="skipThree":N="skip";else if(we&&ye.ch>1&&le.indexOf(W)>=0&&D.getRange(y(ye.line,ye.ch-2),ye)==W+W){if(ye.ch>2&&/\bstring/.test(D.getTokenTypeAt(y(ye.line,ye.ch-2))))return d.Pass;N="addFour"}else if(we){var q=ye.ch==0?" ":D.getRange(y(ye.line,ye.ch-1),ye);if(!d.isWordChar(J)&&q!=W&&!d.isWordChar(q))N="both";else return d.Pass}else if(je&&(J.length===0||/\s/.test(J)||he.indexOf(J)>-1))N="both";else return d.Pass;if(!ie)ie=N;else if(ie!=N)return d.Pass}var j=Y%2?K.charAt(Y-1):W,A=Y%2?W:K.charAt(Y+1);D.operation(function(){if(ie=="skip")R(D,1);else if(ie=="skipThree")R(D,3);else if(ie=="surround"){for(var G=D.getSelections(),M=0;M<G.length;M++)G[M]=j+G[M]+A;D.replaceSelections(G,"around"),G=D.listSelections().slice();for(var M=0;M<G.length;M++)G[M]=V(G[M]);D.setSelections(G)}else ie=="both"?(D.replaceSelection(j+A,null),D.triggerElectric(j+A),R(D,-1)):ie=="addFour"&&(D.replaceSelection(j+j+j+j,"before"),R(D,1))})}function H(D,W){var F=D.getRange(y(W.line,W.ch-1),y(W.line,W.ch+1));return F.length==2?F:null}function ae(D,W){var F=D.getTokenAt(y(W.line,W.ch+1));return/\bstring/.test(F.type)&&F.start==W.ch&&(W.ch==0||!/\bstring/.test(D.getTokenTypeAt(W)))}})})()),Rf.exports}Wx();var Of={exports:{}},Mf;function Hx(){return Mf||(Mf=1,(function(l,u){(function(d){d(ss())})(function(d){var g=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),y=d.Pos,b={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function _(R){return R&&R.bracketRegex||/[(){}[\]]/}function T(R,V,te){var H=R.getLineHandle(V.line),ae=V.ch-1,D=te&&te.afterCursor;D==null&&(D=/(^| )cm-fat-cursor($| )/.test(R.getWrapperElement().className));var W=_(te),F=!D&&ae>=0&&W.test(H.text.charAt(ae))&&b[H.text.charAt(ae)]||W.test(H.text.charAt(ae+1))&&b[H.text.charAt(++ae)];if(!F)return null;var K=F.charAt(1)==">"?1:-1;if(te&&te.strict&&K>0!=(ae==V.ch))return null;var Y=R.getTokenTypeAt(y(V.line,ae+1)),he=k(R,y(V.line,ae+(K>0?1:0)),K,Y,te);return he==null?null:{from:y(V.line,ae),to:he&&he.pos,match:he&&he.ch==F.charAt(0),forward:K>0}}function k(R,V,te,H,ae){for(var D=ae&&ae.maxScanLineLength||1e4,W=ae&&ae.maxScanLines||1e3,F=[],K=_(ae),Y=te>0?Math.min(V.line+W,R.lastLine()+1):Math.max(R.firstLine()-1,V.line-W),he=V.line;he!=Y;he+=te){var le=R.getLine(he);if(le){var we=te>0?0:le.length-1,He=te>0?le.length:-1;if(!(le.length>D))for(he==V.line&&(we=V.ch-(te<0?1:0));we!=He;we+=te){var je=le.charAt(we);if(K.test(je)&&(H===void 0||(R.getTokenTypeAt(y(he,we+1))||"")==(H||""))){var ie=b[je];if(ie&&ie.charAt(1)==">"==te>0)F.push(je);else if(F.length)F.pop();else return{pos:y(he,we),ch:je}}}}}return he-te==(te>0?R.lastLine():R.firstLine())?!1:null}function E(R,V,te){for(var H=R.state.matchBrackets.maxHighlightLineLength||1e3,ae=te&&te.highlightNonMatching,D=[],W=R.listSelections(),F=0;F<W.length;F++){var K=W[F].empty()&&T(R,W[F].head,te);if(K&&(K.match||ae!==!1)&&R.getLine(K.from.line).length<=H){var Y=K.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";D.push(R.markText(K.from,y(K.from.line,K.from.ch+1),{className:Y})),K.to&&R.getLine(K.to.line).length<=H&&D.push(R.markText(K.to,y(K.to.line,K.to.ch+1),{className:Y}))}}if(D.length){g&&R.state.focused&&R.focus();var he=function(){R.operation(function(){for(var le=0;le<D.length;le++)D[le].clear()})};if(V)setTimeout(he,800);else return he}}function P(R){R.operation(function(){R.state.matchBrackets.currentlyHighlighted&&(R.state.matchBrackets.currentlyHighlighted(),R.state.matchBrackets.currentlyHighlighted=null),R.state.matchBrackets.currentlyHighlighted=E(R,!1,R.state.matchBrackets)})}function I(R){R.state.matchBrackets&&R.state.matchBrackets.currentlyHighlighted&&(R.state.matchBrackets.currentlyHighlighted(),R.state.matchBrackets.currentlyHighlighted=null)}d.defineOption("matchBrackets",!1,function(R,V,te){te&&te!=d.Init&&(R.off("cursorActivity",P),R.off("focus",P),R.off("blur",I),I(R)),V&&(R.state.matchBrackets=typeof V=="object"?V:{},R.on("cursorActivity",P),R.on("focus",P),R.on("blur",I))}),d.defineExtension("matchBrackets",function(){E(this,!0)}),d.defineExtension("findMatchingBracket",function(R,V,te){return(te||typeof V=="boolean")&&(te?(te.strict=V,V=te):V=V?{strict:!0}:null),T(this,R,V)}),d.defineExtension("scanForBracket",function(R,V,te,H){return k(this,R,V,te,H)})})})()),Of.exports}Hx();var Df={exports:{}},zf;function Bx(){return zf||(zf=1,(function(l,u){(function(d){d(ss())})(function(d){var g="CodeMirror-hint",y="CodeMirror-hint-active";d.showHint=function(D,W,F){if(!W)return D.showHint(F);F&&F.async&&(W.async=!0);var K={hint:W};if(F)for(var Y in F)K[Y]=F[Y];return D.showHint(K)},d.defineExtension("showHint",function(D){D=k(this,this.getCursor("start"),D);var W=this.listSelections();if(!(W.length>1)){if(this.somethingSelected()){if(!D.hint.supportsSelection)return;for(var F=0;F<W.length;F++)if(W[F].head.line!=W[F].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var K=this.state.completionActive=new b(this,D);K.options.hint&&(d.signal(this,"startCompletion",this),K.update(!0))}}),d.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function b(D,W){if(this.cm=D,this.options=W,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var F=this;D.on("cursorActivity",this.activityFunc=function(){F.cursorActivity()})}}var _=window.requestAnimationFrame||function(D){return setTimeout(D,1e3/60)},T=window.cancelAnimationFrame||clearTimeout;b.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&d.signal(this.data,"close"),this.widget&&this.widget.close(),d.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(D,W){var F=D.list[W],K=this;this.cm.operation(function(){F.hint?F.hint(K.cm,D,F):K.cm.replaceRange(E(F),F.from||D.from,F.to||D.to,"complete"),d.signal(D,"pick",F),K.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(T(this.debounce),this.debounce=0);var D=this.startPos;this.data&&(D=this.data.from);var W=this.cm.getCursor(),F=this.cm.getLine(W.line);if(W.line!=this.startPos.line||F.length-W.ch!=this.startLen-this.startPos.ch||W.ch<D.ch||this.cm.somethingSelected()||!W.ch||this.options.closeCharacters.test(F.charAt(W.ch-1)))this.close();else{var K=this;this.debounce=_(function(){K.update()}),this.widget&&this.widget.disable()}},update:function(D){if(this.tick!=null){var W=this,F=++this.tick;te(this.options.hint,this.cm,this.options,function(K){W.tick==F&&W.finishUpdate(K,D)})}},finishUpdate:function(D,W){this.data&&d.signal(this.data,"update");var F=this.widget&&this.widget.picked||W&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=D,D&&D.list.length&&(F&&D.list.length==1?this.pick(D,0):(this.widget=new R(this,D),d.signal(D,"shown")))}};function k(D,W,F){var K=D.options.hintOptions,Y={};for(var he in ae)Y[he]=ae[he];if(K)for(var he in K)K[he]!==void 0&&(Y[he]=K[he]);if(F)for(var he in F)F[he]!==void 0&&(Y[he]=F[he]);return Y.hint.resolve&&(Y.hint=Y.hint.resolve(D,W)),Y}function E(D){return typeof D=="string"?D:D.text}function P(D,W){var F={Up:function(){W.moveFocus(-1)},Down:function(){W.moveFocus(1)},PageUp:function(){W.moveFocus(-W.menuSize()+1,!0)},PageDown:function(){W.moveFocus(W.menuSize()-1,!0)},Home:function(){W.setFocus(0)},End:function(){W.setFocus(W.length-1)},Enter:W.pick,Tab:W.pick,Esc:W.close},K=/Mac/.test(navigator.platform);K&&(F["Ctrl-P"]=function(){W.moveFocus(-1)},F["Ctrl-N"]=function(){W.moveFocus(1)});var Y=D.options.customKeys,he=Y?{}:F;function le(je,ie){var Ce;typeof ie!="string"?Ce=function(se){return ie(se,W)}:F.hasOwnProperty(ie)?Ce=F[ie]:Ce=ie,he[je]=Ce}if(Y)for(var we in Y)Y.hasOwnProperty(we)&&le(we,Y[we]);var He=D.options.extraKeys;if(He)for(var we in He)He.hasOwnProperty(we)&&le(we,He[we]);return he}function I(D,W){for(;W&&W!=D;){if(W.nodeName.toUpperCase()==="LI"&&W.parentNode==D)return W;W=W.parentNode}}function R(D,W){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=D,this.data=W,this.picked=!1;var F=this,K=D.cm,Y=K.getInputField().ownerDocument,he=Y.defaultView||Y.parentWindow,le=this.hints=Y.createElement("ul");le.setAttribute("role","listbox"),le.setAttribute("aria-expanded","true"),le.id=this.id;var we=D.cm.options.theme;le.className="CodeMirror-hints "+we,this.selectedHint=W.selectedHint||0;for(var He=W.list,je=0;je<He.length;++je){var ie=le.appendChild(Y.createElement("li")),Ce=He[je],se=g+(je!=this.selectedHint?"":" "+y);Ce.className!=null&&(se=Ce.className+" "+se),ie.className=se,je==this.selectedHint&&ie.setAttribute("aria-selected","true"),ie.id=this.id+"-"+je,ie.setAttribute("role","option"),Ce.render?Ce.render(ie,W,Ce):ie.appendChild(Y.createTextNode(Ce.displayText||E(Ce))),ie.hintId=je}var ye=D.options.container||Y.body,N=K.cursorCoords(D.options.alignWithWord?W.from:null),J=N.left,q=N.bottom,j=!0,A=0,G=0;if(ye!==Y.body){var M=["absolute","relative","fixed"].indexOf(he.getComputedStyle(ye).position)!==-1,Q=M?ye:ye.offsetParent,Se=Q.getBoundingClientRect(),De=Y.body.getBoundingClientRect();A=Se.left-De.left-Q.scrollLeft,G=Se.top-De.top-Q.scrollTop}le.style.left=J-A+"px",le.style.top=q-G+"px";var qe=he.innerWidth||Math.max(Y.body.offsetWidth,Y.documentElement.offsetWidth),ke=he.innerHeight||Math.max(Y.body.offsetHeight,Y.documentElement.offsetHeight);ye.appendChild(le),K.getInputField().setAttribute("aria-autocomplete","list"),K.getInputField().setAttribute("aria-owns",this.id),K.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var Ie=D.options.moveOnOverlap?le.getBoundingClientRect():new DOMRect,Ue=D.options.paddingForScrollbar?le.scrollHeight>le.clientHeight+1:!1,Ke;setTimeout(function(){Ke=K.getScrollInfo()});var tt=Ie.bottom-ke;if(tt>0){var $e=Ie.bottom-Ie.top,Ht=Ie.top-(N.bottom-N.top)-2;ke-Ie.top<Ht?($e>Ht&&(le.style.height=($e=Ht)+"px"),le.style.top=(q=N.top-$e)-G+"px",j=!1):le.style.height=ke-Ie.top-2+"px"}var Gt=Ie.right-qe;if(Ue&&(Gt+=K.display.nativeBarWidth),Gt>0&&(Ie.right-Ie.left>qe&&(le.style.width=qe-5+"px",Gt-=Ie.right-Ie.left-qe),le.style.left=(J=Math.max(N.left-Gt-A,0))+"px"),Ue)for(var St=le.firstChild;St;St=St.nextSibling)St.style.paddingRight=K.display.nativeBarWidth+"px";if(K.addKeyMap(this.keyMap=P(D,{moveFocus:function(rt,et){F.changeActive(F.selectedHint+rt,et)},setFocus:function(rt){F.changeActive(rt)},menuSize:function(){return F.screenAmount()},length:He.length,close:function(){D.close()},pick:function(){F.pick()},data:W})),D.options.closeOnUnfocus){var vt;K.on("blur",this.onBlur=function(){vt=setTimeout(function(){D.close()},100)}),K.on("focus",this.onFocus=function(){clearTimeout(vt)})}K.on("scroll",this.onScroll=function(){var rt=K.getScrollInfo(),et=K.getWrapperElement().getBoundingClientRect();Ke||(Ke=K.getScrollInfo());var Kt=q+Ke.top-rt.top,Ge=Kt-(he.pageYOffset||(Y.documentElement||Y.body).scrollTop);if(j||(Ge+=le.offsetHeight),Ge<=et.top||Ge>=et.bottom)return D.close();le.style.top=Kt+"px",le.style.left=J+Ke.left-rt.left+"px"}),d.on(le,"dblclick",function(rt){var et=I(le,rt.target||rt.srcElement);et&&et.hintId!=null&&(F.changeActive(et.hintId),F.pick())}),d.on(le,"click",function(rt){var et=I(le,rt.target||rt.srcElement);et&&et.hintId!=null&&(F.changeActive(et.hintId),D.options.completeOnSingleClick&&F.pick())}),d.on(le,"mousedown",function(){setTimeout(function(){K.focus()},20)});var We=this.getSelectedHintRange();return(We.from!==0||We.to!==0)&&this.scrollToActive(),d.signal(W,"select",He[this.selectedHint],le.childNodes[this.selectedHint]),!0}R.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var D=this.completion.cm.getInputField();D.removeAttribute("aria-activedescendant"),D.removeAttribute("aria-owns");var W=this.completion.cm;this.completion.options.closeOnUnfocus&&(W.off("blur",this.onBlur),W.off("focus",this.onFocus)),W.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var D=this;this.keyMap={Enter:function(){D.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(D,W){if(D>=this.data.list.length?D=W?this.data.list.length-1:0:D<0&&(D=W?0:this.data.list.length-1),this.selectedHint!=D){var F=this.hints.childNodes[this.selectedHint];F&&(F.className=F.className.replace(" "+y,""),F.removeAttribute("aria-selected")),F=this.hints.childNodes[this.selectedHint=D],F.className+=" "+y,F.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",F.id),this.scrollToActive(),d.signal(this.data,"select",this.data.list[this.selectedHint],F)}},scrollToActive:function(){var D=this.getSelectedHintRange(),W=this.hints.childNodes[D.from],F=this.hints.childNodes[D.to],K=this.hints.firstChild;W.offsetTop<this.hints.scrollTop?this.hints.scrollTop=W.offsetTop-K.offsetTop:F.offsetTop+F.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=F.offsetTop+F.offsetHeight-this.hints.clientHeight+K.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var D=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-D),to:Math.min(this.data.list.length-1,this.selectedHint+D)}}};function V(D,W){if(!D.somethingSelected())return W;for(var F=[],K=0;K<W.length;K++)W[K].supportsSelection&&F.push(W[K]);return F}function te(D,W,F,K){if(D.async)D(W,K,F);else{var Y=D(W,F);Y&&Y.then?Y.then(K):K(Y)}}function H(D,W){var F=D.getHelpers(W,"hint"),K;if(F.length){var Y=function(he,le,we){var He=V(he,F);function je(ie){if(ie==He.length)return le(null);te(He[ie],he,we,function(Ce){Ce&&Ce.list.length>0?le(Ce):je(ie+1)})}je(0)};return Y.async=!0,Y.supportsSelection=!0,Y}else return(K=D.getHelper(D.getCursor(),"hintWords"))?function(he){return d.hint.fromList(he,{words:K})}:d.hint.anyword?function(he,le){return d.hint.anyword(he,le)}:function(){}}d.registerHelper("hint","auto",{resolve:H}),d.registerHelper("hint","fromList",function(D,W){var F=D.getCursor(),K=D.getTokenAt(F),Y,he=d.Pos(F.line,K.start),le=F;K.start<F.ch&&/\w/.test(K.string.charAt(F.ch-K.start-1))?Y=K.string.substr(0,F.ch-K.start):(Y="",he=F);for(var we=[],He=0;He<W.words.length;He++){var je=W.words[He];je.slice(0,Y.length)==Y&&we.push(je)}if(we.length)return{list:we,from:he,to:le}}),d.commands.autocomplete=d.showHint;var ae={hint:d.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};d.defineOption("hintOptions",null)})})()),Df.exports}Bx();var Ff={exports:{}},Wf;function Ux(){return Wf||(Wf=1,(function(l,u){(function(d){d(ss())})(function(d){var g=/[\w$]+/,y=500;d.registerHelper("hint","anyword",function(b,_){for(var T=_&&_.word||g,k=_&&_.range||y,E=b.getCursor(),P=b.getLine(E.line),I=E.ch,R=I;R&&T.test(P.charAt(R-1));)--R;for(var V=R!=I&&P.slice(R,I),te=_&&_.list||[],H={},ae=new RegExp(T.source,"g"),D=-1;D<=1;D+=2)for(var W=E.line,F=Math.min(Math.max(W+D*k,b.firstLine()),b.lastLine())+D;W!=F;W+=D)for(var K=b.getLine(W),Y;Y=ae.exec(K);)W==E.line&&Y[0]===V||(!V||Y[0].lastIndexOf(V,0)==0)&&!Object.prototype.hasOwnProperty.call(H,Y[0])&&(H[Y[0]]=!0,te.push(Y[0]));return{list:te,from:d.Pos(E.line,R),to:d.Pos(E.line,I)}})})})()),Ff.exports}Ux();function qx(l){return l==="python"?"python":l==="csharp"?"text/x-csharp":l==="java"?"text/x-java":l==="jsx"?{name:"javascript",jsx:!0}:l==="javascript"?"javascript":l==="html"?"htmlmixed":l==="css"?"css":"text/plain"}function Cm({value:l,onChange:u,language:d}){const g=Ne.useRef(null),y=Ne.useRef(null),b=Ne.useRef(u);return b.current=u,Ne.useEffect(()=>{const _=bf.fromTextArea(g.current,{mode:qx(d),lineNumbers:!0,lineWrapping:!1,indentUnit:4,tabSize:4,indentWithTabs:!1,smartIndent:!0,electricChars:!0,autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,extraKeys:{Tab(k){if(k.somethingSelected())k.execCommand("indentMore");else{const E=k.getOption("indentUnit")-k.getCursor().ch%k.getOption("indentUnit");k.replaceSelection(" ".repeat(E),"end")}},"Shift-Tab":k=>k.execCommand("indentLess"),"Ctrl-Space":k=>k.showHint({hint:bf.hint.anyword,completeSingle:!1})}});_.getInputField().setAttribute("aria-label","Code editor"),_.on("change",k=>{var E;return(E=b.current)==null?void 0:E.call(b,k.getValue())}),y.current=_;const T=typeof ResizeObserver<"u"?new ResizeObserver(()=>_.refresh()):null;return T==null||T.observe(_.getWrapperElement()),()=>{T==null||T.disconnect(),_.toTextArea(),y.current=null}},[d]),Ne.useEffect(()=>{const _=y.current;if(_&&_.getValue()!==l){const T=_.getCursor();_.setValue(l??""),_.setCursor(T)}},[l]),p.jsx("div",{className:"code-editor-wrap",children:p.jsx("textarea",{ref:g,"aria-label":"Code editor",defaultValue:l,spellCheck:!1})})}const md=l=>String(l??"").replace(/\r\n/g,`
`).replace(/\n$/,"");function Kx(l){const u=Array.isArray(l)?l:[];return{passed:u.filter(d=>d.passed===!0).length,total:u.length}}function Hf(l,u){const d=String(l||"").split(/\r?\n/).find(y=>y.startsWith("PUBLIC_CHECK_RESULTS="));if(!d)throw new Error("Python returned no example-check results. See Console for errors.");const g=JSON.parse(d.slice(21));if(!Array.isArray(g)||g.length!==u.length)throw new Error("Python did not finish every published example.");return u.map((y,b)=>({call:y.call||"Example "+(b+1),expected:String(y.expected??""),received:String(g[b].actual??""),error:String(g[b].error||""),passed:g[b].ok===!0}))}function $x(l,u){return u.map((d,g)=>{var y,b,_,T;return{call:"main("+JSON.stringify(d.args||[])+")",expected:md(d.expected),received:md((y=l[g])==null?void 0:y.stdout),error:String(((b=l[g])==null?void 0:b.diagnostics)||((_=l[g])==null?void 0:_.stderr)||""),passed:((T=l[g])==null?void 0:T.success)===!0&&md(l[g].stdout)===md(d.expected)}})}function Gx(l,u,d){return d(l,u.length).map(y=>({call:u[y.index].call,expected:y.expected,received:y.received,error:y.error,passed:y.passed}))}function Tm(l){return(l||[]).map((u,d)=>({call:String(u.call||u.label||"Check "+(d+1)),expected:String(u.expected??"Requirement met"),received:String(u.received??(u.pass===!0||u.passed===!0?"Requirement met":"Not yet met")),error:String(u.error||""),passed:u.pass===!0||u.passed===!0}))}function Yx(l){var u;return((u=/^\s*(?:async\s+)?def\s+([A-Za-z_]\w*)\s*\(/m.exec(l))==null?void 0:u[1])||null}function ic(l,u){var d,g,y;return u==="python"?Yx(l):u==="javascript"?((d=/(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:d[1])||null:u==="csharp"?((g=/\b(?:public\s+)?static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:g[1])||null:u==="java"&&((y=/\bpublic\s+static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:y[1])||null}const Vx=ic;function Yp(l,u,d=null){if(typeof l=="string")return JSON.stringify(l);if(l===null)return"null";if(typeof l=="boolean")return String(l);if(typeof l=="number")return Number.isFinite(l)?String(l):"0";if(Array.isArray(l)){const g=l.every(k=>Number.isInteger(k)),y=l.every(k=>typeof k=="string"),b=l.every(k=>typeof k=="boolean"),_=l.length===0&&d?d:g?"int":y?"string":b?"bool":"double";return"new "+(u==="java"?_==="string"?"String":_==="bool"?"boolean":_:_)+"[]{"+l.map(k=>Yp(k,u)).join(",")+"}"}throw new Error("This example uses a data type unsupported by the browser checker.")}function Vp(l,u,d){var _;const g=ic(d,u)||ic(l.starter||"",u);if(!g)throw new Error("The checker could not find a function declaration.");const y=l.challengeExamples||[],b=(((_=y[0])==null?void 0:_.input)||[]).map((T,k)=>{const E=y.map(P=>{var I;return(I=P.input)==null?void 0:I[k]}).find(P=>Array.isArray(P)&&P.length>0);return Array.isArray(E)?typeof E[0]=="boolean"?"bool":typeof E[0]=="string"?"string":Number.isInteger(E[0])?"int":"double":null});return y.map(T=>({...T,call:g+"("+(T.input||[]).map((k,E)=>Yp(k,u,b[E])).join(", ")+")",expectedLiteral:Yp(T.expected,u),expected:String(T.expected)}))}function Jx(l,u,d=!0){const g=ic(l,"python")||ic(u.starter||"","python");if(!g)throw new Error("Define the challenge function before running it.");const y=u.challengeExamples||[];return["import json as __json, io as __io, contextlib as __ctx","__source = "+JSON.stringify(l),"__cases = __json.loads("+JSON.stringify(JSON.stringify(d?y:y.slice(0,1)))+")","__results = []","for __case in __cases:","    try:",'        __env = {"__name__":"student"}','        with __ctx.redirect_stdout(__io.StringIO()): exec(compile(__source,"main.py","exec"),__env)',"        __actual = __env["+JSON.stringify(g)+'](*__case["input"])','        __ok = type(__actual) is type(__case["expected"]) and __actual == __case["expected"]','        __results.append({"ok":__ok,"actual":repr(__actual)[:300],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","error":type(__error).__name__+": "+str(__error)[:300]})','print("PUBLIC_CHECK_RESULTS="+__json.dumps(__results))'].join(`
`)}function Xx(l,u){const d=Vp(u,"java",l);if(!d.length)throw new Error("No visible examples are available.");const g=d.map((y,b)=>`try{Object actual=Solution.${y.call}; Object expected=${y.expectedLiteral}; boolean ok=java.util.Objects.deepEquals(actual,expected); String received=java.util.Arrays.deepToString(new Object[]{actual}); received=received.substring(1,received.length()-1); System.out.println("PLAYGROUND_CASE:${b}:"+(ok?"1":"0")+":"+received);}catch(Throwable error){System.out.println("PLAYGROUND_CASE:${b}:0:ERROR "+error.getClass().getSimpleName()+" "+error.getMessage());}`);return l+`
class __PlaygroundPracticeChecks {public static void main(String[] args) {`+g.join(`
`)+"}}"}function Qx(l,u){const d=String(l||"").split(/\r?\n/).filter(g=>g.startsWith("PLAYGROUND_CASE:"));if(d.length!==u.length)throw new Error("Java did not return all published examples.");return u.map((g,y)=>{const b=d[y],_=/^PLAYGROUND_CASE:(\d+):([01]):([\s\S]*)$/.exec(b);if(!_||Number(_[1])!==y)throw Error("Java returned invalid check data.");return{call:g.call,expected:g.expected,received:_[3],passed:_[2]==="1",error:_[3].startsWith("ERROR ")?_[3]:""}})}function jm({text:l="",checksText:u="",checkRows:d=null,points:g=null,language:y,activeTab:b,onTabChange:_,previewEnabled:T=!1,previewDoc:k="",previewRef:E}){const P=T?["Preview","Console","Checks"]:["Console","Checks"],I=Array.isArray(d),{passed:R,total:V}=Kx(d),te=Number.isFinite(Number(g))&&g!==null&&V?Number(g)*R/V:null;return p.jsxs("section",{className:"console-pane","aria-label":"Workspace output",children:[p.jsxs("div",{className:"console-heading",children:[p.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Output views",children:P.map(H=>p.jsxs("button",{type:"button",role:"tab","aria-selected":b===H,className:b===H?"active":"",onClick:()=>_(H),children:[H==="Console"&&p.jsx(Ly,{size:14}),H]},H))}),p.jsx("span",{children:"Practice · no submissions"})]}),["html","css","javascript","jsx"].includes(y)&&p.jsx("div",{className:"console-preview",hidden:!T||b!=="Preview",children:p.jsx("iframe",{ref:E,title:"Live student code preview",className:"live-preview-frame",sandbox:"allow-scripts allow-forms",srcDoc:k||"<p>Choose Run to preview your code.</p>"})}),b==="Checks"?p.jsx("div",{className:"practice-check-content",role:"tabpanel","aria-label":"Check feedback",children:I?p.jsxs(p.Fragment,{children:[p.jsxs("p",{className:"check-summary",children:["Checks ",p.jsxs("strong",{children:[R," of ",V," passing"]})]}),p.jsx("p",{className:"check-next",children:R===V?"All published practice checks passed.":"Revise your code, then check again."}),p.jsx("div",{className:"practice-check-cards",children:d.map((H,ae)=>p.jsxs("article",{className:"practice-check-card "+(H.passed?"passed":"needs-revision"),children:[p.jsxs("header",{children:[p.jsx("code",{children:H.call||"Example "+(ae+1)}),p.jsx("span",{children:H.passed?"Pass":"Review"})]}),p.jsxs("dl",{children:[p.jsx("dt",{children:"Expected"}),p.jsx("dd",{children:p.jsx("pre",{children:H.expected??""})}),p.jsx("dt",{children:H.error?"Error":"Received"}),p.jsx("dd",{children:p.jsx("pre",{children:H.error||H.received||"None"})})]})]},ae))}),te!==null&&p.jsxs("p",{className:"check-practice-score",children:["Public-check score: ",Number(te.toFixed(2)),"/",g," practice points · ",R,"/",V," examples passed."]}),p.jsx("p",{className:"check-disclaimer",children:"Public examples only. These results do not award grades, completion, or earned points."})]}):p.jsx("pre",{className:"practice-check-message",children:u})}):b==="Console"?p.jsx("pre",{role:"tabpanel","aria-label":"Console output",children:l}):null]})}const Zx="PUBLIC_CHECK_RESULTS=";function eb(l,u){const d=Array.isArray(l==null?void 0:l.cases)?l.cases:[],g=JSON.stringify(String(u)),y=JSON.stringify(JSON.stringify(d));return["import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx","import traceback as __trace","__student = "+g,"__cases = __json.loads("+y+")","__results = []","for __example in __cases:","    __out = __io.StringIO()","    try:",'        __env = {"__name__": "__main__"}',"        with __ctx.redirect_stdout(__out), __ctx.redirect_stderr(__out):",'            exec(compile(__student, "main.py", "exec"), __env)',(l==null?void 0:l.mode)==="function"?'            __actual = eval(compile(__ast.parse(__example["call"], mode="eval"), "example", "eval"), __env)':'            __actual = __out.getvalue().rstrip("\\n")',(l==null?void 0:l.mode)==="function"?'        __expected = __ast.literal_eval(__example["expected"])':'        __expected = __example["expected"].rstrip("\\n")',(l==null?void 0:l.mode)==="function"?"        __ok = type(__actual) is type(__expected) and __actual == __expected":"        __ok = __actual == __expected",'        __results.append({"ok":__ok,"actual":str(__actual)[:240],"expected":str(__expected)[:240],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","expected":str(__example.get("expected",""))[:240],"error":type(__error).__name__+": "+str(__error)[:200]})','print("'+Zx+'"+__json.dumps(__results))'].join(`
`)+`
`}function tb(l,u){const d=String(u).split("(",1)[0].trim();return["import ast as __ast, io as __io, json as __json, contextlib as __ctx",'__env={"__name__":"student"}',"__stream=__io.StringIO()","with __ctx.redirect_stdout(__stream):","    exec(compile("+JSON.stringify(String(l))+',"main.py","exec"),__env)',"    __name="+JSON.stringify(d),'    if __name not in __env and callable(__env.get("solution")): __env[__name]=__env["solution"]',"    __value=eval(compile(__ast.parse("+JSON.stringify(String(u))+',mode="eval"),"sample call","eval"),__env)','print("PLAYGROUND_PREVIEW="+__json.dumps({"call":'+JSON.stringify(String(u))+',"returned":repr(__value)[:5000],"printed":__stream.getvalue()[:10000]}))'].join(`
`)}const nb="modulepreload",rb=function(l){return"/playground/preview/"+l},Bf={},Nm=function(u,d,g){let y=Promise.resolve();if(d&&d.length>0){let _=function(E){return Promise.all(E.map(P=>Promise.resolve(P).then(I=>({status:"fulfilled",value:I}),I=>({status:"rejected",reason:I}))))};document.getElementsByTagName("link");const T=document.querySelector("meta[property=csp-nonce]"),k=(T==null?void 0:T.nonce)||(T==null?void 0:T.getAttribute("nonce"));y=_(d.map(E=>{if(E=rb(E),E in Bf)return;Bf[E]=!0;const P=E.endsWith(".css"),I=P?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${E}"]${I}`))return;const R=document.createElement("link");if(R.rel=P?"stylesheet":nb,P||(R.as="script"),R.crossOrigin="",R.href=E,k&&R.setAttribute("nonce",k),document.head.appendChild(R),P)return new Promise((V,te)=>{R.addEventListener("load",V),R.addEventListener("error",()=>te(new Error(`Unable to preload CSS for ${E}`)))})}))}function b(_){const T=new Event("vite:preloadError",{cancelable:!0});if(T.payload=_,window.dispatchEvent(T),!T.defaultPrevented)throw _}return y.then(_=>{for(const T of _||[])T.status==="rejected"&&b(T.reason);return u().catch(b)})},Es="/playground/";async function ib(l,u=()=>{}){if(l==="python"){const{PythonRunner:d}=await Nm(async()=>{const{PythonRunner:g}=await import("./pythonRunner-lCn9BIec.js");return{PythonRunner:g}},[]);return{kind:"python",instance:new d({onStatus:u})}}if(l==="java"){const{JavaRunner:d}=await import(Es+"java-runner.mjs");return{kind:"java",instance:new d(u)}}if(l==="csharp"){const[{CSharpRunner:d},g]=await Promise.all([import(Es+"csharp-runner.mjs"),import(Es+"csharp-protocol.mjs")]);return{kind:"csharp",instance:new d({onStatus:u}),protocol:g}}throw Error("No code compiler for "+l)}function sb(l){var u;return((u=/\b(?:public\s+)?(?:static\s+)?class\s+([A-Za-z_]\w*)/.exec(String(l||"")))==null?void 0:u[1])||""}const Uf='<main class="event-card"><h1>Robotics meetup</h1><p>Thursday at 4 PM in the lab.</p><p>Attendees: <span id="count">0</span></p><button id="join">Join</button></main>',xd=l=>JSON.stringify(String(l)).replace(/</g,"\\u003c");function ob(l){return l==="html"?`(()=>{
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
  })();`}function ab(l,u,d){var _;const g=(u.challengeExamples||[]).slice(0,d?void 0:1);if(!g.length)throw Error("No public challenge examples were published.");const y=(_=/\b(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:_[1];if(!y)throw Error("Define and export the challenge function.");const b=String(l).replace(/\bexport\s+(?=(?:async\s+)?function|const|let|class)/g,"");return`(()=>{
    const cases=${JSON.stringify(g)};
    const results=[];
    try{
      const fn=new Function(${xd(b+"; return "+y+";")})();
      for(const row of cases){
        try{
          const got=fn(...row.input);
          const expected=row.expected;
          const pass=JSON.stringify(got)===JSON.stringify(expected);
          results.push({label:${xd(y)}+'('+row.input.map(x=>JSON.stringify(x)).join(', ')+')',
            expected:JSON.stringify(expected),received:JSON.stringify(got),pass});
        }catch(e){results.push({label:${xd(y)}+'(...)',expected:JSON.stringify(row.expected),
          received:'',error:e.name+': '+e.message,pass:false});}
      }
      if(${d?"true":"false"})send('checks',{results});
      else results.forEach(row=>send('log',{level:row.pass?'info':'warn',text:row.label+' → '+(row.error || row.received)+' (expected '+row.expected+')'}));
    }catch(e){send('error',{text:e.name+': '+e.message});}
  })();`}function lb(l){return"<script>"+l.replace(/<\/script/gi,"<\\/script")+"<\/script>"}async function bh({code:l,language:u,lessonId:d,task:g={},token:y,check:b=!0}){if(!y)throw Error("A preview token is required.");if(g.webFiles){const{assembleWebFiles:H}=await Nm(async()=>{const{assembleWebFiles:le}=await Promise.resolve().then(()=>pb);return{assembleWebFiles:le}},[]),ae=u==="jsx"?"App.jsx":"script.js";let D=null;u==="jsx"&&(typeof window.PlaygroundJSX!="function"&&await new Promise((le,we)=>{const He=document.createElement("script");He.src=Es+"vendor/learning/jsx.js",He.onload=le,He.onerror=()=>we(Error("React JSX compiler could not load.")),document.head.append(He)}),D=window.PlaygroundJSX(g.webFiles["App.jsx"]||""));const{html:W,linkedStyle:F,linkedScript:K}=H(g.webFiles,{scriptName:ae,scriptOverride:D});if(g.projectId){const{buildProjectPreview:le}=await import(Es+"project-preview.mjs");return le(W,{token:y,step:g.stepId,projectId:g.projectId,check:b})}const Y='<script src="'+Es+'vendor/learning/react.js"><\/script>',he=u==="jsx"?/<\/head\s*>/i.test(W)?W.replace(/<\/head\s*>/i,Y+"</head>"):Y+W:W;return bh({code:he,language:"html",lessonId:d,task:{},token:y,check:b})}if(g.projectId){const{buildProjectPreview:H}=await import(Es+"project-preview.mjs");return H(l,{token:y,step:g.stepId,projectId:g.projectId,check:b})}const{previewConsoleBridge:_}=await import(Es+"console-drawer.mjs"),T=lb(_(y)),k=xd;let E="",P="",I="";if(g.isChallenge&&u==="javascript")E="<main><h2>JavaScript challenge</h2><p>See the Checks and Console tabs for actual function results.</p></main>",P=ab(l,g,b);else if(u==="html")E=String(l);else if(u==="css")E="<style>"+String(l).replace(/<\/style/gi,"")+"</style>"+Uf;else if(u==="javascript")E=Uf,P=l;else if(u==="jsx")E='<div id="root"></div>',typeof window.PlaygroundJSX!="function"&&await new Promise((H,ae)=>{const D=document.createElement("script");D.src=Es+"vendor/learning/jsx.js",D.onload=H,D.onerror=()=>ae(Error("React JSX compiler could not load.")),document.head.append(D)}),P=window.PlaygroundJSX(l),I='<script src="'+Es+'vendor/learning/react.js"><\/script>';else throw Error("Preview is not supported for "+u);const R=g.isChallenge&&u==="javascript"?"":ob(d),V=g.isChallenge&&u==="javascript"?"<script>try{"+P+';send("ready");}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>':"<script>try{(0,eval)("+k(P)+');setTimeout(()=>{send("ready");'+(b?R:"")+'},180)}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>',te='<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="form-action &apos;none&apos;"><style>body{font:16px/1.55 system-ui,sans-serif;padding:16px}button{padding:8px 15px}</style>'+T+I;if(u==="html"){const H=String(E).replace(/^\s*<!doctype[^>]*>/i,"");return"<!doctype html>"+(/<head(?:\s[^>]*)?>/i.test(H)?H.replace(/<head(?:\s[^>]*)?>/i,D=>D+te):"<head>"+te+"</head>"+H)+V}return"<!doctype html><html><head>"+te+"</head><body>"+E+V+"</body></html>"}function Em({lessonId:l,task:u}){const d=u.storageKey||xh.code(l),g=!!u.projectDraft,y=!!u.isChallenge,b=Ne.useRef(null),_=Ne.useRef(null),T=Ne.useRef(null),k=Ne.useRef(null),E=Ne.useRef(null),[P,I]=Ne.useState(!1),[R,V]=Ne.useState(u.starter||""),[te,H]=Ne.useState(u.console||"Press Run to execute the code."),[ae,D]=Ne.useState(""),[W,F]=Ne.useState("Choose Check to run the published examples. Your scores are not recorded."),[K,Y]=Ne.useState(null),[he,le]=Ne.useState(""),we=["html","css","javascript","jsx"].includes(u.language),He=we&&!y,[je,ie]=Ne.useState(He?"Preview":"Console"),[Ce,se]=fn("designlab:editor-height",300);Ne.useEffect(()=>{V(Nd(d)??u.starter??""),H(u.console||"Run to see your program output."),F("Choose Check to run the published examples. Your scores are not recorded."),Y(null),ie(we&&!y?"Preview":"Console"),le(""),D("")},[d,u.language,u.starter,u.console,we,y]),Ne.useEffect(()=>()=>{var A;clearTimeout(E.current),k.current=null,(A=_.current)==null||A.instance.dispose(),_.current=null},[]),Ne.useEffect(()=>{function A(G){var Se;const M=k.current;if(!M||!T.current||G.source!==T.current.contentWindow||((Se=G.data)==null?void 0:Se.token)!==M.token)return;const Q=G.data;Q.kind==="log"&&H(De=>(De==="Run to see your program output."?"":De)+"["+(Q.level||"log")+"] "+Q.text+`
`),Q.kind==="clear"&&H(""),Q.kind==="error"&&(clearTimeout(E.current),H(De=>De+"Error: "+Q.text+`
`),M.check&&F("Fix the runtime error, then try Check again."),k.current=null,I(!1),ie("Console")),(Q.kind==="checks"||Q.kind==="project-checks")&&(clearTimeout(E.current),Y(Tm(Q.results||(Q.text?[{label:Q.text,pass:Q.pass}]:[]))),k.current=null,I(!1),ie("Checks")),Q.kind==="ready"&&!M.check&&(clearTimeout(E.current),k.current=null,I(!1))}return window.addEventListener("message",A),()=>window.removeEventListener("message",A)},[]);function ye(A){if(!b.current)return;const G=b.current.getBoundingClientRect();se(Math.max(160,Math.min(G.height-120,A.clientY-G.top)))}async function N(){var A;if(!_.current||_.current.language!==u.language){(A=_.current)==null||A.instance.dispose();const G=await ib(u.language,M=>H(M));_.current={...G,language:u.language}}return _.current}async function J(A){var Q,Se,De,qe,ke,Ie,Ue,Ke,tt,$e,Ht,Gt;const G=u.language;if(G==="java"&&u.environment==="ide")throw Error("This activity uses Java 26 file I/O and requires a full Java IDE. Browser execution is not supported for this exercise.");const M=await N();if(G==="python"){let St=R;if(y)St=Jx(R,{...u,starter:u.starter},A);else if(A){if(!((Q=u.cases)!=null&&Q.length))throw Error("This lesson has no published examples.");St=eb(u,R)}else u.mode==="function"&&((De=(Se=u.cases)==null?void 0:Se[0])!=null&&De.call)&&(St=tb(R,u.cases[0].call));const vt=await M.instance.run(St);if(A){const We=y?u.challengeExamples.map(rt=>({call:(Vx(R,"python")||"Function")+"("+rt.input.map(et=>JSON.stringify(et)).join(", ")+")",expected:JSON.stringify(rt.expected)})):u.cases;Y(Hf(vt.output,We)),H("Python completed the public checks. Review individual results in Checks.")}else if(y){const We=Hf(vt.output,[{call:"First published example",expected:JSON.stringify(u.challengeExamples[0].expected)}]);H(We[0].error||"First example returned "+We[0].received+". Expected "+We[0].expected+".")}else if(u.mode==="function"&&((ke=(qe=u.cases)==null?void 0:qe[0])!=null&&ke.call)){const We=String(vt.output||"").split(`
`).find(rt=>rt.startsWith("PLAYGROUND_PREVIEW="));if(We){const rt=JSON.parse(We.slice(19));H(rt.call+`
Returned: `+rt.returned+(rt.printed?`
Printed: `+rt.printed:""))}else H(vt.output||"No return value was captured. See your code and retry.")}else H(vt.output||(vt.success?"Program finished with no printed output.":"The Python program stopped."))}if(G==="java"){if(u.environment==="ide")throw Error("This lesson uses Java 26 file input and must run in a full Java IDE. Browser execution is not supported.");if(y){const St=Vp(u,"java",R),vt=A?St:St.slice(0,1),We=await M.instance.run(Xx(R,{...u,challengeExamples:vt}),[]);if(!We.success)throw Error([We.stdout,We.stderr,We.diagnostics].filter(Boolean).join(`
`));const rt=Qx(We.stdout,vt);A?Y(rt):H(rt.map(et=>et.call+`
Received: `+et.received+`
Expected: `+et.expected).join(`
`))}else{const St=A?u.cases||[]:[{args:u.runArgs||((Ue=(Ie=u.cases)==null?void 0:Ie[0])==null?void 0:Ue.args)||[]}];if(A&&!St.length)throw Error("No public Java examples are available for this exercise.");const vt=[];for(const We of St){const rt=await M.instance.run(R,We.args||[]);if(vt.push(rt),!rt.success)break}if(A){const We=$x(vt,St);if(vt.length!==St.length)throw Error("Java stopped before completing all published examples: "+(((Ke=vt.at(-1))==null?void 0:Ke.diagnostics)||((tt=vt.at(-1))==null?void 0:tt.stderr)||"Unknown error"));Y(We),H("Java completed the published checks. Review the Checks tab.")}else H([($e=vt[0])==null?void 0:$e.stdout,(Ht=vt[0])==null?void 0:Ht.stderr,(Gt=vt[0])==null?void 0:Gt.diagnostics].filter(Boolean).join(`
`)||"Java ran without printed output.")}}if(G==="csharp"){const St=M.protocol,vt=y?Vp(u,"csharp",R).map(oe=>({...oe,call:Array.isArray(oe.expected)?oe.call+".SequenceEqual("+oe.expectedLiteral+")":oe.call,arrayResult:Array.isArray(oe.expected),expected:Array.isArray(oe.expected)?"true":oe.expectedLiteral})):u.cases||[],We=y?"Solution":sb(R),rt=A||y&&vt.length>0;if(A&&!vt.length)throw Error("No public C# examples are available for this exercise.");if(rt&&!We)throw Error("The C# checker could not find the public class name.");const et=A?vt:vt.slice(0,1),Kt=rt?St.buildChecks(et,We):null,Ge=Kt&&et.some(oe=>oe.arrayResult)?`using System.Linq;
`+Kt:Kt,ht=await M.instance.run(R,Ge);if(!ht.compiled||!ht.success)throw Error([ht.diagnostics,ht.stderr].filter(Boolean).join(`
`)||"C# could not execute.");if(rt){const oe=Gx(ht.stdout,et,St.parseChecks);A?Y(oe):H(oe.map(_e=>_e.call+`
Received: `+_e.received+`
Expected: `+_e.expected).join(`
`))}else H(ht.stdout||"C# executed without printed output.")}}async function q(A){if(!P){I(!0),D(""),Y(null),A?(F("Running published example checks…"),ie("Checks")):(H("Preparing runner…"),ie(He?"Preview":"Console"));try{if(we){const G=crypto.randomUUID();k.current={token:G,check:A};const M=await bh({code:R,language:u.language,lessonId:l,task:u,token:G,check:A});le(M),H(""),clearTimeout(E.current),E.current=setTimeout(()=>{var Q;((Q=k.current)==null?void 0:Q.token)===G&&(k.current=null,I(!1),H("The preview did not finish within 7 seconds. Check for errors or an infinite loop."),F("Practice timed out. No result was recorded."),T.current&&(T.current.srcdoc="<p>Preview stopped after timeout.</p>"),ie("Console"))},7e3)}else await J(A),I(!1)}catch(G){clearTimeout(E.current),k.current=null,I(!1);const M=String((G==null?void 0:G.message)||G);H(M),ie("Console"),A&&F("Check unavailable: "+M)}}}function j(A){if(!P){if(A==="Run"||A==="Check"){q(A==="Check");return}if(A==="Save"){po(d,R),D("Draft saved in this browser only.");return}A==="Reset"&&(V(u.starter||""),po(d,u.starter||""),Y(null),le(""),F("Choose Check to run published examples again."),H("Starter code restored. No points were recorded."),ie(He?"Preview":"Console"))}}return p.jsxs("div",{className:"code-pane",children:[p.jsxs("div",{className:"pane-header",children:[p.jsxs("strong",{children:[p.jsx(Ad,{size:16})," Editor"]}),p.jsxs("div",{className:"right-meta",children:[u.language.toUpperCase()," ",p.jsx(is,{children:"Live practice"})]})]}),p.jsxs("div",{className:"code-workspace",ref:b,style:{"--editor-height":Ce+"px"},children:[p.jsx(Cm,{value:R,language:u.language,onChange:A=>{V(A),(g||y)&&po(d,A),D(""),Y(null),F("Code changed. Choose Check to run fresh examples.")}}),p.jsx(uc,{axis:"rows",onDrag:ye}),p.jsx(jm,{text:te,checksText:W,checkRows:K,points:u.points,language:u.language,lessonId:l,previewEnabled:He,previewDoc:he,previewRef:T,activeTab:je,onTabChange:ie})]}),p.jsxs("div",{className:"editor-controls",children:[p.jsxs("div",{children:[["Run","Check","Reset"].map(A=>p.jsx("button",{type:"button",className:"btn",disabled:P,onClick:()=>j(A),children:A},A)),P&&p.jsx("button",{type:"button",className:"btn",onClick:()=>{var A,G,M;(M=(A=_.current)==null?void 0:(G=A.instance).stop)==null||M.call(G),k.current=null,clearTimeout(E.current),I(!1),H("Execution stopped.")},children:"Stop"})]}),p.jsxs("div",{children:[p.jsxs("button",{type:"button",className:"btn",disabled:P,onClick:()=>j("Save"),children:[p.jsx(_d,{size:15})," Save"]}),p.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submission and official grading are not connected in this preview",children:[p.jsx(sh,{size:15})," Submit (not enabled)"]})]})]}),p.jsx("div",{className:"editor-note",role:"status",children:ae||"Run executes code locally; Check tests public examples only. No grades, points or hand-ins are recorded."})]})}const wh=Object.freeze(["index.html","styles.css","script.js"]),kh=Object.freeze(["index.html","styles.css","App.jsx"]),Lm=l=>l==="jsx"?kh:wh,Jp=`<!doctype html>
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
</html>`,ub=`<!doctype html>
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
</html>`;function Pm(l){return l.endsWith(".html")?"html":l.endsWith(".css")?"css":l.endsWith(".jsx")?"jsx":"javascript"}function Xp(l,u=""){const d=String(u).toLowerCase();return l==="jsx"||d==="react"?"App.jsx":l==="css"||/css|style|readable|responsive/.test(d)?"styles.css":l==="javascript"||/\bjs\b|javascript|script|function|array|object|dom|event|state|team|matchup|pick|scor|leaderboard|test|integrat|interact/.test(d)?"script.js":"index.html"}function cb(l,u="script.js"){if(!l.trim())return"";let d=l;if(!/<link\b[^>]*href\s*=\s*["']styles\.css["'][^>]*>/i.test(d)){const g=`  <link rel="stylesheet" href="styles.css">
`;d=/<\/head\s*>/i.test(d)?d.replace(/<\/head\s*>/i,g+"</head>"):g+d}if(!d.includes('src="'+u+'"')&&!d.includes("src='"+u+"'")){const g='  <script src="'+u+`" defer><\/script>
`;d=/<\/body\s*>/i.test(d)?d.replace(/<\/body\s*>/i,g+"</body>"):d+`
`+g}return d}function sc(l){let u=String(l??"");const d=[],g=[];return u=u.replace(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi,(y,b)=>(d.push(b.trim().replace(/^(?: {4}|\t)/gm,"")),"")),u=u.replace(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi,(y,b,_)=>/\bsrc\s*=/.test(b)||/\btype\s*=\s*["'](?:application\/json|application\/ld\+json|importmap)["']/i.test(b)?y:(g.push(_.trim().replace(/^(?: {4}|\t)/gm,"")),"")),{"index.html":cb(u.replace(/\n{3,}/g,`

`).trim(),"script.js"),"styles.css":d.join(`

`),"script.js":g.join(`

`)}}function Am(l,u){const d=String(u??"");if(l==="jsx")return{"index.html":ub,"styles.css":"","App.jsx":d};if(l==="html")return sc(d);if(l==="css")return{"index.html":Jp,"styles.css":d,"script.js":""};if(l==="javascript")return{"index.html":Jp,"styles.css":"","script.js":d};throw Error("Not a web lesson: "+l)}const Rm=l=>sc(l);function Ja(l,u){if(![...wh,...kh].includes(u))throw Error("Unknown workspace file");return l+":file:"+u}function Im({base:l,starters:u,legacy:d,read:g,write:y}){const b=Object.keys(u),_=Object.fromEntries(b.map(P=>[P,g(Ja(l,P))]));if(b.some(P=>_[P]!==null&&_[P]!==void 0))return Object.fromEntries(b.map(P=>[P,_[P]??u[P]??""]));const k=d!=null?u["App.jsx"]!==void 0?{...u,"App.jsx":d}:Object.prototype.hasOwnProperty.call(u,"index.html")&&(u["styles.css"]||u["script.js"])&&/<html|<style|<script/i.test(d)||u["index.html"]!==void 0&&/<html|<!doctype|<body/i.test(d)?sc(d):{...u,[u["index.html"]===Jp?u["script.js"]?"script.js":"styles.css":"index.html"]:d}:u,E=Object.fromEntries(b.map(P=>[P,k[P]??u[P]??""]));return b.forEach(P=>y(Ja(l,P),E[P])),E}function qf(l,u){return String(l??"").replace(new RegExp("</"+u,"gi"),"<\\/"+u)}function db(l,{scriptName:u="script.js",scriptOverride:d=null}={}){let g=String((l==null?void 0:l["index.html"])??"");const y=String((l==null?void 0:l["styles.css"])??""),b=String(d===null?(l==null?void 0:l[u])??"":d);let _=!1,T=!1;if(g=g.replace(/<link\b[^>]*>/gi,k=>/\bhref\s*=\s*["'](?:\.\/)?styles\.css["']/i.test(k)&&/\brel\s*=\s*["']stylesheet["']/i.test(k)?(_=!0,'<style data-web-file="styles.css">'+qf(y,"style")+"</style>"):k),g=g.replace(/<script\b([^>]*)>\s*<\/script\s*>/gi,(k,E)=>{const P=/\bsrc\s*=\s*["']([^"']+)["']/i.exec(E);return P&&P[1].replace(/^\.\//,"")===u?(T=!0,""):k}),T){const k='<script data-web-file="'+u+'">'+qf(b,"script")+"<\/script>";g=/<\/body\s*>/i.test(g)?g.replace(/<\/body\s*>/i,k+`
</body>`):g+`
`+k}return{html:g,linkedStyle:_,linkedScript:T}}const pb=Object.freeze(Object.defineProperty({__proto__:null,REACT_FILE_NAMES:kh,WEB_FILE_NAMES:wh,assembleWebFiles:db,fileLanguage:Pm,fileNamesFor:Lm,initialFocus:Xp,lessonStarterFiles:Am,loadWebDrafts:Im,projectStarterFiles:Rm,splitEmbeddedWebSource:sc,webDraftKey:Ja},Symbol.toStringTag,{value:"Module"}));function Om({lessonId:l,task:u}){const d=xh.code(l),g=Lm(u.language),y=u.starterFiles||(u.projectDraft?Rm(u.starter):Am(u.language,u.starter)),[b,_]=Ne.useState(()=>Im({base:d,starters:y,legacy:Nd(d),read:Nd,write:po})),[T,k]=Ne.useState(()=>Xp(u.language,u.focus)),[E,P]=Ne.useState("Run to render all your linked files together."),[I,R]=Ne.useState("Check runs the current published practice requirements."),[V,te]=Ne.useState(null),[H,ae]=Ne.useState(""),[D,W]=Ne.useState("Preview"),[F,K]=Ne.useState(""),[Y,he]=Ne.useState(!1),[le,we]=fn("designlab:web-files-editor-height",310),He=Ne.useRef(null),je=Ne.useRef(null),ie=Ne.useRef(null),Ce=Ne.useRef(null);Ne.useEffect(()=>{const M=Xp(u.language,u.focus);k(g.includes(M)?M:"index.html")},[u.stepId,u.focus,u.language]),Ne.useEffect(()=>{const M=Q=>{var qe;const Se=je.current;if(!Se||!He.current||Q.source!==He.current.contentWindow||((qe=Q.data)==null?void 0:qe.token)!==Se.token)return;const De=Q.data;De.kind==="log"&&P(ke=>ke+(De.level==="error"?"Error: ":"")+De.text+`
`),De.kind==="clear"&&P(""),De.kind==="error"&&(clearTimeout(ie.current),je.current=null,P(ke=>ke+"Error: "+De.text+`
`),R("Fix the error reported in Console before checking again."),W("Console"),he(!1)),(De.kind==="checks"||De.kind==="project-checks")&&(clearTimeout(ie.current),je.current=null,te(Tm(De.results||(De.text?[{label:De.text,pass:De.pass}]:[]))),W("Checks"),he(!1)),De.kind==="ready"&&!Se.check&&(clearTimeout(ie.current),je.current=null,he(!1))};return window.addEventListener("message",M),()=>{clearTimeout(ie.current),je.current=null,window.removeEventListener("message",M)}},[]);function se(M){_(Q=>({...Q,[T]:M})),po(Ja(d,T),M),K(""),te(null),R("Code changed. Check again to update the results.")}function ye(){g.forEach(M=>po(Ja(d,M),b[M]??"")),K("All three files saved in this browser only.")}function N(){window.confirm("Restore all three starter files? Your current saved changes will be replaced.")&&(_({...y}),g.forEach(M=>po(Ja(d,M),y[M]??"")),te(null),ae(""),P("Starter files restored."),R("Run Check to evaluate the restored files."),W("Preview"),K("Starter files restored for this lesson or project."))}function J(){const M=b[T]||"",Q=document.createElement("a"),Se=URL.createObjectURL(new Blob([M],{type:"text/plain;charset=utf-8"}));Q.href=Se,Q.download=T,document.body.append(Q),Q.click(),Q.remove(),setTimeout(()=>URL.revokeObjectURL(Se),2e3)}function q(){clearTimeout(ie.current),je.current=null,he(!1),ae("<p>Preview stopped.</p>"),P("Preview stopped. Check your script for an endless loop."),W("Console")}async function j(M){var Q;if(!Y){he(!0),te(null),K(""),P(""),R(M?"Checking the published requirements…":"Run Check to review the published requirements."),W(M?"Checks":"Preview");try{A();const Se=crypto.randomUUID();je.current={token:Se,check:M};const De=await bh({language:u.language,code:b[T]||"",lessonId:u.lessonFocus||l,task:{...u,webFiles:b},token:Se,check:M});if(((Q=je.current)==null?void 0:Q.token)!==Se)return;ae(De),clearTimeout(ie.current),ie.current=setTimeout(()=>{var qe;((qe=je.current)==null?void 0:qe.token)===Se&&(q(),R("The preview timed out. No result was recorded."))},7e3)}catch(Se){clearTimeout(ie.current),je.current=null,he(!1),P(String((Se==null?void 0:Se.message)||Se)),R("Checks unavailable: "+String((Se==null?void 0:Se.message)||Se)),W("Console")}}}function A(){g.forEach(M=>po(Ja(d,M),b[M]||""))}function G(M){if(!Ce.current)return;const Q=Ce.current.getBoundingClientRect();we(Math.max(160,Math.min(Q.height-120,M.clientY-Q.top)))}return p.jsxs("div",{className:"code-pane web-files-pane",children:[p.jsxs("div",{className:"pane-header",children:[p.jsxs("strong",{children:[p.jsx(Ad,{size:16})," Project files"]}),p.jsxs("span",{className:"web-file-badge",children:["HTML + CSS + ",u.language==="jsx"?"React":"JavaScript"]})]}),p.jsx("div",{className:"web-file-tabs",role:"tablist","aria-label":"Source files",children:g.map(M=>p.jsx("button",{type:"button",role:"tab","aria-selected":M===T,className:M===T?"active":"",onClick:()=>k(M),children:M},M))}),p.jsxs("div",{className:"code-workspace",ref:Ce,style:{"--editor-height":le+"px"},children:[p.jsx(Cm,{value:b[T]??"",language:Pm(T),onChange:se},T),p.jsx(uc,{axis:"rows",onDrag:G}),p.jsx(jm,{text:E,checksText:I,checkRows:V,points:null,language:"html",previewEnabled:!0,previewDoc:H,previewRef:He,activeTab:D,onTabChange:W})]}),p.jsxs("div",{className:"editor-controls",children:[p.jsxs("div",{children:[p.jsx("button",{type:"button",className:"btn",disabled:Y,onClick:()=>j(!1),children:"Run"}),p.jsx("button",{type:"button",className:"btn",disabled:Y,onClick:()=>j(!0),children:"Check"}),p.jsx("button",{type:"button",className:"btn",disabled:Y,onClick:N,children:"Reset"}),Y&&p.jsx("button",{type:"button",className:"btn",onClick:q,children:"Stop"})]}),p.jsxs("div",{children:[p.jsxs("button",{type:"button",className:"btn",disabled:Y,onClick:J,children:[p.jsx(my,{size:15})," Download file"]}),p.jsxs("button",{type:"button",className:"btn",disabled:Y,onClick:ye,children:[p.jsx(_d,{size:15})," Save"]}),p.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submissions and grading are not connected",children:[p.jsx(sh,{size:15})," Submit (not enabled)"]})]})]}),p.jsx("div",{className:"editor-note",role:"status",children:F||"Edit one file at a time. The HTML link to styles.css and script tag for script.js (or App.jsx) connect the files. Drafts save locally; practice checks award no points."})]})}function hb({lessonId:l,onAnswerChecked:u}){const d=uh[l],[g,y]=Ne.useState(null),[b,_]=Ne.useState(!1);function T(){_(!0),u==null||u({selected:g,correct:g===d.correct})}function k(){y(null),_(!1),u==null||u(null)}return p.jsxs("section",{className:"tsi-practice","aria-label":"Math question",children:[p.jsxs("div",{className:"tsi-practice-heading",children:[p.jsx(em,{size:20}),p.jsxs("div",{children:[p.jsx("h2",{children:"Try this question"}),p.jsx("p",{children:"Choose an answer, then review the explanation on the right."})]})]}),p.jsxs("div",{className:"tsi-question-card",children:[p.jsx("div",{className:"eyebrow",children:"Question"}),p.jsx("h3",{children:d.prompt}),p.jsx("div",{className:"tsi-answers",role:"radiogroup","aria-label":"Choose the correct answer",children:d.options.map((E,P)=>p.jsxs("label",{className:`tsi-choice ${g===P?"selected":""} ${b&&P===d.correct?"correct":""}`,children:[p.jsx("input",{type:"radio",name:`tsi-${l}`,checked:g===P,disabled:b,onChange:()=>y(P)}),p.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+P)}),p.jsx("span",{children:E})]},E))}),b&&p.jsx("p",{className:"tsi-answer-status",role:"status",children:g===d.correct?"Correct! Read why on the right.":"Not quite. Review the explanation on the right."}),p.jsxs("div",{className:"tsi-buttons",children:[p.jsx("button",{className:"btn primary",disabled:g===null||b,onClick:T,children:"Check answer"}),p.jsxs("button",{className:"btn",onClick:k,children:[p.jsx(nm,{size:15})," Try again"]})]})]})]})}const bd=[["quantitative","Quantitative Reasoning"],["algebraic","Algebraic Reasoning"],["geometry","Geometric and Spatial Reasoning"],["statistics","Probabilistic and Statistical Reasoning"]];function fb(l){const u=l.answer,d=Number.isInteger(u)?Math.max(1,Math.round(Math.abs(u)*.15)):Math.max(.125,Math.round(Math.abs(u)*.2*1e3)/1e3),g=[u+d,u-d,u+2*d].map(y=>Number(y.toFixed(4)));return g.splice(l.correct_index??0,0,u),g}function mb(l,u){return Object.fromEntries(bd.map(([d])=>{const g=l.filter(b=>b.strand===d),y=g.filter(b=>u[b.id]!=="skip"&&Number(u[b.id])===b.answer).length;return[d,{correct:y,total:g.length,level:y===g.length?"Advanced":y>=Math.ceil(g.length*.6)?"Proficient":"Basic"}]}))}function gb({items:l=[],profiles:u=[]}){var ae,D,W;const[d,g]=Ne.useState({}),[y,b]=Ne.useState(""),[_,T]=Ne.useState(""),[k,E]=fn("designlab:tsi-math-placement",{}),[P,I]=Ne.useState(null),R=Ne.useMemo(()=>bd.map(([F,K])=>({id:F,title:K,items:l.filter(Y=>Y.strand===F)})),[l]),V=P||((ae=k.diagnostic)==null?void 0:ae.latest)&&k.diagnostic.latest.placement;function te(F){F.preventDefault();const K=u.find(Y=>Y.code===y.trim().toUpperCase());if(!K){T("Enter a valid MATH01–MATH81 study code.");return}E(Y=>({...Y,code:K.code,levels:K.levels})),T("Study code applied in this browser. It does not enroll you in a class.")}function H(F){if(F.preventDefault(),l.some(le=>d[le.id]===void 0)){T("Answer or select Not sure for every question.");return}const K=mb(l,d),Y=Object.fromEntries(Object.entries(K).map(([le,we])=>[le,we.level])),he={at:new Date().toISOString(),placement:K,levels:Y,answers:d};E(le=>{var we;return{...le,levels:Y,diagnostic:{first:((we=le.diagnostic)==null?void 0:we.first)||he,latest:he}}}),I(K),T("Your recommended starting levels are ready. Results are stored in this browser only.")}return p.jsxs("div",{className:"published-reading surface-card tsi-diagnostic",children:[p.jsx("h2",{children:"Find your starting point"}),p.jsx("p",{children:"This is the existing 24-question, four-strand practice diagnostic. It suggests what to study; it does not predict an official TSIA2 score or assign an enrolled class."}),p.jsxs("form",{onSubmit:te,className:"tsi-code-entry",children:[p.jsx("label",{htmlFor:"math-locator-code",children:"Pearson study code (MATH01–MATH81)"}),p.jsx("input",{id:"math-locator-code",type:"text",placeholder:"MATH01",maxLength:6,value:y,onChange:F=>b(F.target.value)}),p.jsx("button",{className:"btn",type:"submit",children:"Apply code"})]}),!!k.code&&p.jsxs("p",{role:"status",children:["Current code: ",p.jsx("strong",{children:k.code}),"."," ","Recommended levels: ",bd.map(([F,K])=>{var Y;return K+": "+((Y=k.levels)==null?void 0:Y[F])}).join(" · ")]}),p.jsxs("form",{onSubmit:H,children:[p.jsx("h3",{children:"Take the diagnostic"}),p.jsxs("p",{children:["Choose one answer or Not sure for all ",l.length," questions. This open practice records your first and latest attempts in this browser, not the live gradebook."]}),R.map(F=>p.jsxs("section",{className:"tsi-diagnostic-strand",children:[p.jsx("h3",{children:F.title}),F.items.map(K=>p.jsxs("fieldset",{className:"tsi-question",children:[p.jsx("legend",{children:K.prompt}),p.jsxs("div",{className:"tsi-answers",children:[fb(K).map((Y,he)=>p.jsxs("label",{className:"tsi-choice",children:[p.jsx("input",{type:"radio",name:K.id,value:Y,checked:d[K.id]===String(Y),onChange:()=>g(le=>({...le,[K.id]:String(Y)}))}),p.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+he)}),p.jsx("span",{children:Y})]},he)),p.jsxs("label",{className:"tsi-choice",children:[p.jsx("input",{type:"radio",name:K.id,value:"skip",checked:d[K.id]==="skip",onChange:()=>g(Y=>({...Y,[K.id]:"skip"}))}),p.jsx("span",{children:"Not sure"})]})]})]},K.id))]},F.id)),p.jsx("button",{type:"submit",className:"btn primary",children:"Get my recommended levels"})]}),!!_&&p.jsx("p",{role:"status",children:_}),V&&p.jsxs("section",{className:"tsi-diagnostic-results","aria-label":"Diagnostic results",children:[p.jsx("h3",{children:"Recommended starting levels"}),bd.map(([F,K])=>p.jsxs("p",{children:[p.jsxs("strong",{children:[K,": ",V[F].level]})," (",V[F].correct," of ",V[F].total," correct)"]},F)),p.jsx("p",{children:"This diagnostic is instructional, not a verified measure of college readiness. All published lessons remain available regardless of recommendation."}),!!((D=k.diagnostic)!=null&&D.first)&&!!((W=k.diagnostic)!=null&&W.latest)&&p.jsxs("p",{children:["First attempt: ",new Date(k.diagnostic.first.at).toLocaleDateString()," · Latest: ",new Date(k.diagnostic.latest.at).toLocaleDateString()]})]})]})}function yb({lessonId:l,course:u,unit:d,unitNumber:g,isCompleted:y=!1,assignment:b=null,grade:_=null,onToggleCompleted:T}){var ae;const k=na(u,l),E=Ne.useRef(null),[P,I]=Ne.useState(null),[R,V]=fn("designlab:left-width",420);function te(D){if(!E.current)return;const W=E.current.getBoundingClientRect();V(Math.max(260,Math.min(W.width-340,D.clientX-W.left)))}const H=u.id==="tsi-math";return H&&l==="tsi-20d-d01"&&((ae=u.diagnosticItems)!=null&&ae.length)?p.jsxs("div",{className:"lesson-screen",children:[p.jsxs("header",{className:"lesson-header",children:[p.jsx("div",{className:"eyebrow",children:"Day 1 · TSI Math Advisory"}),p.jsx("h1",{children:k.title}),p.jsx("p",{children:"Diagnostic placement · 30-minute advisory plan"})]}),p.jsx(gb,{items:u.diagnosticItems,profiles:u.locatorProfiles})]}):k!=null&&k.ready?k.language==="text"&&!H?p.jsxs("div",{className:"lesson-screen",children:[p.jsx(pd,{task:k,unit:d,unitNumber:g,isTsi:!1,isCompleted:y,assignment:b,grade:_,onToggleCompleted:T}),p.jsxs("section",{className:"surface-card published-reading",children:[p.jsx("p",{className:"muted",children:"Published written-practice material. Answer checking and verified scores remain on the current Playground."}),p.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:rc(k.markdownSource)}})]})]}):H&&!uh[l]?p.jsxs("div",{className:"lesson-screen",children:[p.jsx(pd,{task:k,unit:d,unitNumber:g,isTsi:!0,isCompleted:y,assignment:b,grade:_,onToggleCompleted:T}),p.jsxs("section",{className:"surface-card published-reading",children:[p.jsx("p",{className:"muted",children:"Published draft lesson · practice shown for learning, not an official TSIA2 score predictor."}),p.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:rc(k.markdownSource)}})]})]}):p.jsxs("div",{className:"lesson-screen",children:[p.jsx(pd,{task:k,unit:d,unitNumber:g,isTsi:H,isCompleted:y,assignment:b,grade:_,onToggleCompleted:T}),p.jsxs("div",{className:`workspace-grid ${H?"tsi-workspace":""}`,ref:E,style:{"--left-pane":`${R}px`},children:[H?p.jsx(hb,{lessonId:l,onAnswerChecked:I}):p.jsx(vf,{lessonId:l,task:k}),p.jsx(uc,{axis:"columns",onDrag:te}),H?p.jsx(vf,{lessonId:l,task:k,isTsi:!0,tsiAnswer:P}):u.id==="mobile-app-dev"&&["html","css","javascript","jsx"].includes(k.language)?p.jsx(Om,{lessonId:l,task:{...k,lessonFocus:l}},l):p.jsx(Em,{lessonId:l,task:k})]})]}):p.jsxs("div",{className:"lesson-screen",children:[p.jsx(pd,{task:k,unit:d,unitNumber:g,isTsi:H,isCompleted:y,assignment:b,grade:_,onToggleCompleted:T}),p.jsxs("section",{className:"lesson-content-pending surface-card",children:[p.jsx("h2",{children:"Lesson coming soon"}),p.jsx("p",{children:"This scheduled lesson has not been authored yet. No practice or scores are available."})]})]})}function vb({course:l,project:u,stepId:d,openProject:g}){const y=u.steps||[],b=Math.max(0,y.findIndex(V=>V.id===d)),_=y[b],T=Ne.useRef(null),[k,E]=fn("designlab:project-left-width",430),P="project:"+l.id+":"+u.id,I={id:P,title:u.title,language:u.language||"html",starter:u.starter||"",starterFiles:u.starterFiles||null,challenge:u.summary||"",console:"Run to see your actual page. Check tests the published step requirements in a sandboxed browser preview.",projectDraft:!0,isPublished:!1,projectId:u.id,stepId:_.id,focus:_.focus};function R(V){if(!T.current)return;const te=T.current.getBoundingClientRect();E(Math.max(260,Math.min(te.width-340,V.clientX-te.left)))}return p.jsxs("div",{className:"lesson-screen project-workspace",children:[p.jsxs("header",{className:"lesson-header",children:[p.jsxs("div",{className:"eyebrow",children:["Published guided project · ",y.length," steps"]}),p.jsx("h1",{children:u.title}),p.jsx("p",{children:u.summary}),p.jsx("p",{className:"muted",children:"Run renders your actual project and Check tests the current step. Drafts save in this browser; Submit and verified grading remain disabled."})]}),p.jsx("nav",{className:"project-step-list","aria-label":"Project steps",children:y.map((V,te)=>p.jsxs("button",{type:"button","aria-current":te===b?"step":void 0,className:te===b?"btn primary":"btn",onClick:()=>g(l.id,u.id,V.id),children:[te+1,". ",V.title]},V.id))}),p.jsxs("div",{className:"workspace-grid",ref:T,style:{"--left-pane":k+"px"},children:[p.jsxs("section",{className:"instructions-pane project-reading",children:[p.jsx("div",{className:"pane-header",children:p.jsxs("strong",{children:["Step ",b+1,": ",_.title]})}),p.jsxs("p",{className:"web-files-reading-note",children:["This published walkthrough was originally written for one HTML file. When it says to add a <style> or <script> block, put that code in",p.jsx("code",{children:"styles.css"})," or ",p.jsx("code",{children:"script.js"})," instead. Keep the file links in",p.jsx("code",{children:"index.html"}),"; Run connects them automatically."]}),p.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:rc(_.markdownSource)}})]}),p.jsx(uc,{axis:"columns",onDrag:R}),p.jsx(Om,{lessonId:P,task:I})]}),p.jsxs("nav",{className:"lesson-next-bar","aria-label":"Project step navigation",children:[b>0&&p.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>g(l.id,u.id,y[b-1].id),children:[p.jsx(nh,{size:16})," ",p.jsxs("span",{children:["Prev: ",y[b-1].title]})]}),b<y.length-1&&p.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>g(l.id,u.id,y[b+1].id),children:[p.jsxs("span",{children:["Next: ",y[b+1].title]})," ",p.jsx(ia,{size:16})]})]})]})}function xb({courseId:l,lessonId:u,projectId:d,projectStepId:g,availableCourses:y=ns,openCourse:b,openProject:_,openChallenges:T,completedLessons:k=[],assignments:E=[],grades:P=[],onToggleLessonComplete:I,courseColors:R={},onSetCourseColor:V,onResetCourseColor:te}){const H=y.find(Y=>Y.id===l)||y[0],ae=(H.projects||[]).find(Y=>Y.id===d),D=tc(H),W=H.units.findIndex(Y=>rs(Y).includes(u)),F=H.units[W],K=D.indexOf(u);return p.jsx("div",{className:"course-layout integrated-course","data-course":H.id,children:p.jsxs("div",{className:"course-main",children:[p.jsxs("div",{className:"course-breadcrumb",children:[p.jsx("button",{onClick:()=>b(null),children:"All playgrounds"}),p.jsx(ia,{size:14}),u||ae?p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:()=>b(H.id),children:H.label}),p.jsx(ia,{size:14}),p.jsx("span",{className:"breadcrumb-unit-name",title:F?Ls(F):"",children:F?Ls(F):(ae==null?void 0:ae.title)||""})]}):p.jsx("span",{children:H.label})]}),ae?p.jsx(vb,{course:H,project:ae,stepId:g,openProject:_},ae.id):u?p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"lesson-mobile-navigation",children:[p.jsx("label",{htmlFor:"lesson-select",children:"Lesson"}),p.jsx("select",{id:"lesson-select",value:u,onChange:Y=>b(H.id,Y.target.value),children:H.units.map((Y,he)=>p.jsx("optgroup",{label:`Unit ${he+1} · ${Ls(Y)}`,children:rs(Y).map(le=>p.jsx("option",{value:le,children:ra(H,le)},le))},Y.id))})]}),p.jsx(yb,{lessonId:u,course:H,unit:F,unitNumber:W+1,isCompleted:k.includes(u),assignment:E.find(Y=>Y.id==="lesson:"+u),grade:P.find(Y=>Y.id==="lesson:"+u),onToggleCompleted:()=>I==null?void 0:I(u)},u),p.jsxs("nav",{className:"lesson-next-bar","aria-label":"Lesson sequence",children:[K>0&&p.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>b(H.id,D[K-1]),children:[p.jsx(nh,{size:16,"aria-hidden":"true"}),p.jsxs("span",{children:["Prev: ",ra(H,D[K-1])]})]}),K>=0&&K<D.length-1&&p.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>b(H.id,D[K+1]),children:[p.jsxs("span",{children:["Next: ",ra(H,D[K+1])]}),p.jsx(ia,{size:16,"aria-hidden":"true"})]})]})]}):p.jsx(Wy,{course:H,openCourse:b,openProject:_,openChallenges:T,completedLessons:k,assignments:E,grades:P,courseColors:R,onSetCourseColor:V,onResetCourseColor:te})]})})}const mo=[{id:"p1",period:"1",name:"Period 1",course:"computer-science-1"},{id:"p3",period:"3",name:"Period 3",course:"computer-science-1"},{id:"p5",period:"5",name:"Period 5",course:"mobile-app-dev"},{id:"p6",period:"6",name:"Period 6",course:"game-programming"},{id:"p7",period:"7",name:"Period 7",course:"mobile-app-dev"},{id:"p8",period:"8",name:"Period 8",course:"computer-science-1"}],Mm=l=>mo.find(u=>u.id===l),Dm=l=>{var u;return(u=Mm(l))==null?void 0:u.period},bb=[...new Set(mo.map(l=>l.period))].sort((l,u)=>Number(l)-Number(u)),zm=[{key:"2026-11-02",label:"Nov 2 – Nov 8, 2026"},{key:"2026-10-26",label:"Oct 26 – Nov 1, 2026"}],Vl=l=>{var u,d;return((u=l.sheetName)==null?void 0:u.trim())||((d=l.studentName)==null?void 0:d.trim())||l.github},Kf=l=>(l.sheetName||l.studentName||"").trim().split(/\s+/),Fm=(l,u,d)=>{const g=y=>d==="github"?y.github.toLowerCase():d==="first"?(Kf(y)[0]||y.github).toLowerCase():(Kf(y).at(-1)||y.github).toLowerCase();return g(l).localeCompare(g(u),void 0,{numeric:!0})||l.github.localeCompare(u.github)},wb=[["last","Last name"],["first","First name"],["github","GitHub username"]];function kb({sectionId:l,onSectionChange:u,setupOpen:d,onToggleSetup:g}){return p.jsxs("div",{className:"teacher-toolbar",children:[p.jsxs("label",{children:["Class section",p.jsx("select",{value:l,onChange:y=>u(y.target.value),children:mo.map(y=>p.jsxs("option",{value:y.id,children:[y.name," · ",eh(y.course)]},y.id))})]}),p.jsxs("button",{type:"button",className:"btn section-setup-toggle","aria-expanded":d,"aria-controls":"teacher-section-setup",onClick:g,children:[d?p.jsx(Id,{size:16}):p.jsx(oh,{size:16}),d?"Close section setup":"Section setup"]})]})}const Sb=[["overview","Class overview",ih],["curriculum","Curriculum",lc],["journals","Journals",rh]];function _b({tab:l,onChange:u}){return p.jsx("div",{className:"tabs teacher-tabs",role:"tablist","aria-label":"Teacher dashboard tabs",children:Sb.map(([d,g,y])=>p.jsxs("button",{type:"button",role:"tab","aria-selected":l===d,className:l===d?"active":"",onClick:()=>u(d),children:[p.jsx(y,{size:16}),g]},d))})}function Cb({section:l}){return p.jsxs("div",{className:"section-banner",children:[p.jsxs("div",{children:[p.jsx("div",{className:"eyebrow",children:"Selected section"}),p.jsxs("h2",{children:[l.name," ",p.jsxs("span",{className:"muted",children:["· ",eh(l.course)]})]})]}),p.jsx(is,{children:"Demo join code: LOCAL01"})]})}function Tb({students:l}){const u=[[l.length,"Enrolled students"],[l.filter(d=>d.status==="Active now").length,"Recently interacting"],[l.filter(d=>d.sheetName).length,"Sheet names matched"]];return p.jsx("div",{className:"stat-grid",children:u.map(([d,g])=>p.jsxs("div",{className:"stat-card",children:[p.jsx("strong",{children:d}),p.jsx("span",{children:g})]},g))})}function jb({students:l,week:u,setWeek:d}){const g=Ne.useMemo(()=>[...l].sort((y,b)=>(b.weekly[u]||0)-(y.weekly[u]||0)),[l,u]);return p.jsxs("section",{className:"panel",children:[p.jsxs("div",{className:"section-heading",children:[p.jsxs("div",{children:[p.jsx("h2",{children:"Weekly points"}),p.jsx("p",{children:"Mock verified points · Monday–Sunday in Central Time"})]}),p.jsxs("label",{children:["Week",p.jsx("select",{value:u,onChange:y=>d(y.target.value),children:zm.map(y=>p.jsx("option",{value:y.key,children:y.label},y.key))})]})]}),p.jsx("div",{className:"overflow",children:p.jsxs("table",{className:"data-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Student"}),p.jsx("th",{children:"Weekly points"}),p.jsx("th",{children:"Sample assignments"})]})}),p.jsx("tbody",{children:g.map(y=>p.jsxs("tr",{children:[p.jsxs("th",{children:[Vl(y),p.jsxs("small",{children:["@",y.github]})]}),p.jsx("td",{children:p.jsx("strong",{children:y.weekly[u]||0})}),p.jsx("td",{children:y.assignments.filter(b=>b.score!==null).length})]},y.id))})]})})]})}function Wm({label:l,value:u,onChange:d}){return p.jsxs("label",{children:[l,p.jsx("select",{value:u,onChange:g=>d(g.target.value),children:wb.map(([g,y])=>p.jsx("option",{value:g,children:y},g))})]})}const Nb=l=>l.includes("Completed")?"success":l==="Needs revision"?"warning":"";function Eb({student:l,week:u}){const[d,g]=Ne.useState(null),y=l.assignments,b=y.filter(T=>T.status==="Completed"||T.status==="Practice completed").length,_=y.filter(T=>T.score!==null).length;return p.jsxs("div",{className:"expanded-student",children:[p.jsxs("div",{className:"expanded-header",children:[p.jsxs("div",{children:[p.jsx("h3",{children:"Assignment history"}),p.jsxs("p",{className:"muted",children:["Sample records for ",Vl(l),". No student data is loaded."]})]}),p.jsxs(is,{tone:"success",children:[l.weekly[u]||0," verified pts this week"]})]}),p.jsxs("div",{className:"mini-stats",children:[p.jsxs("span",{children:[p.jsx("strong",{children:b})," completed"]}),p.jsxs("span",{children:[p.jsx("strong",{children:_})," graded"]}),p.jsxs("span",{children:[p.jsx("strong",{children:y.length})," tracked"]})]}),p.jsx("div",{className:"overflow",children:p.jsxs("table",{className:"data-table assignment-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Assignment"}),p.jsx("th",{children:"Status"}),p.jsx("th",{children:"Score"}),p.jsx("th",{children:"Updated"}),p.jsx("th",{children:"Action"})]})}),p.jsx("tbody",{children:y.map(T=>{const k=d===T.id;return p.jsxs(Ne.Fragment,{children:[p.jsxs("tr",{children:[p.jsxs("th",{children:[T.name,p.jsx("small",{children:T.type})]}),p.jsx("td",{children:p.jsx(is,{tone:Nb(T.status),children:T.status})}),p.jsx("td",{children:T.score===null?"—":`${T.score} / ${T.possible}`}),p.jsx("td",{children:T.submitted}),p.jsx("td",{children:p.jsx("button",{className:"small-link",onClick:()=>g(k?null:T.id),children:k?"Hide details":"View details"})})]}),k&&p.jsx("tr",{className:"receipt-preview",children:p.jsxs("td",{colSpan:"5",children:[p.jsx("strong",{children:"Sample assignment detail"}),p.jsx("p",{children:"This is a mock submitted-copy preview for layout testing, not the student's actual code."})]})})]},T.id)})})]})})]})}function Lb({students:l,week:u,sort:d,setSort:g,expanded:y,setExpanded:b}){return p.jsxs("section",{className:"panel",children:[p.jsxs("div",{className:"section-heading",children:[p.jsxs("div",{children:[p.jsx("h2",{children:"Section roster & activity"}),p.jsx("p",{children:"Click a student's name to expand their assignments directly inside the roster."})]}),p.jsx(Wm,{label:"Sort students by",value:d,onChange:g})]}),p.jsx("div",{className:"overflow",children:p.jsxs("table",{className:"data-table roster-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Student"}),p.jsx("th",{children:"Activity signal"}),p.jsx("th",{children:"Current activity"}),p.jsx("th",{children:"Practice"}),p.jsx("th",{children:"Hand-ins"})]})}),p.jsx("tbody",{children:l.map(_=>{const T=y===_.id;return p.jsxs(Ne.Fragment,{children:[p.jsxs("tr",{className:T?"selected-row":"",children:[p.jsxs("th",{children:[p.jsxs("button",{className:"student-name-button","aria-expanded":T,onClick:()=>b(T?null:_.id),children:[T?p.jsx(tm,{size:16}):p.jsx(ia,{size:16})," ",Vl(_)]}),p.jsxs("small",{children:["@",_.github,_.sections.length>1?" · Sheet periods 1, 3":""]})]}),p.jsx("td",{children:p.jsx(is,{tone:_.status==="Active now"?"success":"",children:_.status})}),p.jsx("td",{children:_.current}),p.jsxs("td",{children:[_.assignments.filter(k=>k.status.includes("Completed")).length," complete"]}),p.jsx("td",{children:_.assignments.filter(k=>k.score!==null).length})]}),T&&p.jsx("tr",{className:"expansion-row",children:p.jsx("td",{colSpan:"5",children:p.jsx(Eb,{student:_,week:u})})})]},_.id)})})]})})]})}function Pb({section:l,students:u,week:d,setWeek:g,sort:y,setSort:b,expanded:_,setExpanded:T}){return p.jsxs(p.Fragment,{children:[p.jsx(Cb,{section:l}),p.jsx(Tb,{students:u}),p.jsx(jb,{students:u,week:d,setWeek:g}),p.jsx(Lb,{students:u,week:d,sort:y,setSort:b,expanded:_,setExpanded:T})]})}function Hm(l,u){return l+"::"+u}function Ab(l,u=[]){if(!(l!=null&&l.sectionId)||!l.lessonId)return"Choose a section and lesson.";if(l.sectionCourseId&&l.sectionCourseId!=="computer-science-1")return"This section uses a different course. Only Computer Science I is connected.";if(!/^\d{4}-\d{2}-\d{2}$/.test(l.dueDate||""))return"Choose a valid due date.";const[d,g,y]=l.dueDate.split("-").map(Number);if(new Date(Date.UTC(d,g-1,y)).toISOString().slice(0,10)!==l.dueDate)return"Choose a valid due date.";const _=Number(l.points);if(!Number.isFinite(_)||!Number.isInteger(_)||_<0||_>1e3)return"Points must be a whole number between 0 and 1,000.";if(l.scope!=="section"&&l.scope!=="selected")return"Choose who receives the assignment.";if(l.scope==="selected"){const T=new Set(u.map(E=>E.id)),k=[...new Set(l.studentIds||[])];if(!k.length||k.some(E=>!T.has(E)))return"Select at least one student from this section."}return null}function Rb(l,u=[]){const d=Ab(l,u);if(d)throw new Error(d);return{id:Hm(l.sectionId,l.lessonId),sectionId:l.sectionId,courseId:"computer-science-1",lessonId:l.lessonId,scope:l.scope,studentIds:l.scope==="selected"?[...new Set(l.studentIds)].sort():[],dueDate:l.dueDate,points:Number(l.points)}}function Ib(l,u){return[...(Array.isArray(l)?l:[]).filter(d=>d.id!==u.id),u]}function Dp(l,u,d){return(l||[]).find(g=>g.id===Hm(u,d))||null}const Ob="/playground/data/computer-science-1/course.json",ec=yi("computer-science-1");function Mb({section:l,students:u=[],assignments:d=[],setAssignments:g}){const[y,b]=Ne.useState(null),[_,T]=Ne.useState("loading"),[k,E]=Ne.useState(ec.lessons[0]),[P,I]=Ne.useState("section"),[R,V]=Ne.useState([]),[te,H]=Ne.useState(""),[ae,D]=Ne.useState(""),[W,F]=Ne.useState("starter"),[K,Y]=Ne.useState("");Ne.useEffect(()=>{const q=new AbortController;return fetch(Ob,{signal:q.signal,cache:"no-store"}).then(j=>{if(!j.ok)throw new Error("Curriculum unavailable");return j.json()}).then(j=>{if(!Array.isArray(j.lessons)||!j.lessons.length)throw new Error("Unexpected curriculum response");b(Yl(j)),T("live")}).catch(j=>{j.name!=="AbortError"&&T("snapshot")}),()=>q.abort()},[]);const he=Ne.useMemo(()=>y?{...ec,...y}:ec,[y]),le=he.lessons,we=le.includes(k)?k:le[0],He=na(he,we),je=le.reduce((q,j)=>{var A;return q+(Number((A=na(he,j))==null?void 0:A.points)||0)},0),ie=ec.lessons.includes(we),Ce=(l==null?void 0:l.course)==="computer-science-1",se=Dp(d,l==null?void 0:l.id,we),ye=u.filter(q=>q.sections.includes(l==null?void 0:l.id));Ne.useEffect(()=>{var j;const q=Dp(d,l==null?void 0:l.id,we);I((q==null?void 0:q.scope)||"section"),V((q==null?void 0:q.studentIds)||[]),H((q==null?void 0:q.dueDate)||""),D(String((q==null?void 0:q.points)??((j=na(he,we))==null?void 0:j.points)??0)),Y(""),F("starter")},[we,l==null?void 0:l.id]);function N(q){q.preventDefault();try{const j=Rb({sectionId:l==null?void 0:l.id,sectionCourseId:l==null?void 0:l.course,lessonId:we,scope:P,studentIds:R,dueDate:te,points:ae},ye);g==null||g(A=>Ib(A,j)),Y("Preview assignment saved in this browser. No students were notified.")}catch(j){Y(j.message)}}function J(){g==null||g(q=>(q||[]).filter(j=>j.id!==(se==null?void 0:se.id))),Y("Preview assignment cleared. Live student records were not changed.")}return p.jsxs("section",{className:"panel curriculum-panel","aria-label":"Published curriculum",children:[p.jsxs("div",{className:"section-heading",children:[p.jsxs("div",{children:[p.jsxs("h2",{children:[p.jsx(lc,{size:18})," Computer Science I curriculum"]}),p.jsxs("p",{children:[he.units.length," original units · ",le.length," lessons · ",je," available lesson points"]})]}),p.jsx("span",{className:"curriculum-source",role:"status",children:_==="live"?"Published course • current":_==="loading"?"Checking published course…":"Bundled preview snapshot"})]}),p.jsx("p",{className:"curriculum-explanation",children:"Lesson titles, published points, starter code, and unit order come from the real CS1 catalog. Assignment controls below are a browser-only preview and do not affect live students."}),p.jsxs("div",{className:"curriculum-grid",children:[p.jsx("div",{className:"curriculum-units","aria-label":"Unit and lesson list",children:he.units.map((q,j)=>p.jsxs("details",{open:rs(q).includes(we)||j===0,children:[p.jsxs("summary",{children:["Unit ",oc(q,j+1)," · ",Ls(q)]}),p.jsx("div",{children:rs(q).map(A=>p.jsxs("button",{type:"button",className:A===we?"curriculum-lesson selected":"curriculum-lesson","aria-current":A===we?"true":void 0,onClick:()=>E(A),children:[ra(he,A),Dp(d,l==null?void 0:l.id,A)&&p.jsx("small",{children:" · Assigned in preview"})]},A))})]},q.id))}),p.jsxs("article",{className:"curriculum-lesson-preview",children:[p.jsx("div",{className:"eyebrow",children:"Published lesson"}),p.jsx("h3",{children:He.title}),p.jsx("p",{children:He.summary||He.challenge||"Practice the skills from this unit."}),p.jsxs("div",{className:"curriculum-meta",children:[p.jsxs("span",{children:[He.points??0," published points"]}),p.jsxs("span",{children:[He.mode==="function"?"Function":"Script"," · Python"]})]}),p.jsxs("div",{className:"curriculum-code-tabs",role:"tablist","aria-label":"Lesson code",children:[p.jsx("button",{type:"button",role:"tab","aria-selected":W==="starter",className:W==="starter"?"active":"",onClick:()=>F("starter"),children:"Starter code"}),p.jsxs("button",{type:"button",role:"tab","aria-selected":W==="solution",className:W==="solution"?"active":"",onClick:()=>F("solution"),children:[p.jsx(Vh,{size:14})," Solution"]})]}),W==="starter"?p.jsx("pre",{className:"curriculum-code",children:p.jsx("code",{children:He.starter||"# No starter code provided"})}):p.jsxs("div",{className:"curriculum-solution-locked",role:"status",children:[p.jsx(Vh,{size:20}),p.jsxs("div",{children:[p.jsx("strong",{children:"Teacher-only solutions"}),p.jsx("p",{children:"Solutions must be loaded from protected storage after teacher sign-in and authorization. Answer keys are not included in the public React preview."})]})]}),ie?p.jsxs("a",{className:"btn",href:Pd(ec,we),children:["Open lesson in React preview ",p.jsx(gy,{size:14})]}):p.jsx("p",{className:"muted",children:"This newer published lesson is not yet in the React snapshot."}),p.jsxs("div",{className:"curriculum-assignment-editor",children:[p.jsx("h4",{children:"Assign lesson"}),Ce?p.jsxs(p.Fragment,{children:[p.jsx("p",{className:"curriculum-assignment-warning",children:"Preview only. Assignments are saved in this browser, not sent to students or the live gradebook."}),p.jsxs("form",{onSubmit:N,className:"curriculum-assignment-form",children:[p.jsxs("label",{children:["Assign to",p.jsxs("select",{value:P,onChange:q=>I(q.target.value),children:[p.jsxs("option",{value:"section",children:["Whole class · ",ye.length," sample students"]}),p.jsx("option",{value:"selected",children:"Selected students"})]})]}),P==="selected"&&p.jsxs("fieldset",{className:"curriculum-recipient-picker",children:[p.jsx("legend",{children:"Choose students"}),ye.length?ye.map(q=>p.jsxs("label",{children:[p.jsx("input",{type:"checkbox",checked:R.includes(q.id),onChange:j=>V(A=>j.target.checked?[...A,q.id]:A.filter(G=>G!==q.id))}),p.jsx("span",{children:Vl(q)})]},q.id)):p.jsx("p",{children:"No sample students are enrolled in this section."})]}),p.jsxs("div",{className:"curriculum-assignment-fields",children:[p.jsxs("label",{children:["Due date",p.jsx("input",{type:"date",required:!0,value:te,onChange:q=>H(q.target.value)})]}),p.jsxs("label",{children:["Points",p.jsx("input",{type:"number",required:!0,min:"0",max:"1000",step:"1",value:ae,onChange:q=>D(q.target.value)})]})]}),p.jsxs("div",{className:"curriculum-assignment-actions",children:[p.jsx("button",{type:"submit",className:"btn primary",children:se?"Update preview assignment":"Save preview assignment"}),se&&p.jsx("button",{type:"button",className:"btn",onClick:J,children:"Remove assignment"})]})]}),se&&p.jsxs("p",{className:"curriculum-current-assignment",children:["Saved for ",se.scope==="section"?"whole class":se.studentIds.length+" selected students"," · ","Due ",se.dueDate," · ",se.points," points"]}),K&&p.jsx("p",{className:"curriculum-assignment-feedback",role:"status",children:K})]}):p.jsxs("p",{className:"curriculum-assignment-warning",children:[(l==null?void 0:l.name)||"This section"," uses a different course. Choose a Computer Science I section to assign CS1 lessons."]})]})]})]})]})}function Db({students:l}){return p.jsxs("section",{className:"panel",children:[p.jsx("h2",{children:"Section setup"}),p.jsx("p",{children:"Visual preview of configured sections. This sandbox cannot create live classes or assign students."}),p.jsx("div",{className:"setup-grid",children:mo.map(u=>p.jsxs("div",{className:"setup-card",children:[p.jsx("div",{className:"eyebrow",children:u.name}),p.jsx("h3",{children:eh(u.course)}),p.jsxs("span",{children:[l.filter(d=>d.sections.includes(u.id)).length," sample students"]})]},u.id))})]})}function zb({section:l,students:u,submissions:d}){const[g,y]=Ne.useState(Fp()[0]),[b,_]=Ne.useState(null),T=Fp(),k=u.map(P=>{const I=d.filter(R=>R.studentId===P.id&&R.sectionId===l.id&&R.week===g);return{student:P,copies:I,latest:I.at(-1)}}),E=k.filter(P=>P.latest).length;return p.jsxs("section",{className:"panel journal-inbox",children:[p.jsxs("div",{className:"section-heading",children:[p.jsxs("div",{children:[p.jsx("div",{className:"eyebrow",children:"Teacher review · Sample records"}),p.jsxs("h2",{children:[p.jsx(rh,{size:19})," Weekly journal submissions"]}),p.jsx("p",{children:"Review essays and logic puzzles from this section. Journals are never automatically graded."})]}),p.jsxs("label",{children:["Journal week ",p.jsx("select",{value:g,onChange:P=>{y(P.target.value),_(null)},children:T.map(P=>p.jsx("option",{value:P,children:$l(P)},P))})]})]}),p.jsxs("div",{className:"stat-grid",children:[p.jsxs("div",{className:"stat-card",children:[p.jsx("strong",{children:E}),p.jsx("span",{children:"Submitted"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsx("strong",{children:k.length-E}),p.jsx("span",{children:"Missing"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsx("strong",{children:k.length}),p.jsx("span",{children:"Students in section"})]})]}),p.jsx("div",{className:"journal-inbox-rows",children:k.map(({student:P,latest:I,copies:R})=>p.jsxs("div",{className:"journal-inbox-row",children:[p.jsxs("div",{children:[p.jsxs("strong",{children:[P.first," ",P.last]}),p.jsxs("small",{children:["@",P.github]})]}),p.jsx("span",{className:`journal-status-pill ${I?"submitted":""}`,children:I?"Submitted":"Missing"}),p.jsx("span",{className:"journal-inbox-date",children:I?new Date(I.submittedAt).toLocaleString():"—"}),p.jsx("button",{className:"btn",disabled:!I,onClick:()=>_(b===P.id?null:P.id),children:b===P.id?"Close":"Review"}),b===P.id&&I&&p.jsxs("div",{className:"journal-review-detail",children:[p.jsxs("div",{className:"eyebrow",children:[I.type.replace("-"," ")," · ",R.length," ",R.length===1?"hand-in":"hand-ins"," · Manual review"]}),p.jsx("div",{className:"journal-history-answer",children:I.response}),p.jsxs("p",{className:"hint",children:["AI declaration: ",I.aiUse==="none"?"No AI reported":`Disclosed · ${I.aiDetails}`]})]})]},P.id))}),p.jsx("p",{className:"hint",children:"This inbox uses fictional students and demo submissions created in this browser. No grades or messages are sent."})]})}function Fb({students:l,journalSubmissions:u}){const[d,g]=fn("designlab:teacher-tab","overview"),[y,b]=fn("designlab:section","p1"),[_,T]=fn("designlab:sort","last"),[k,E]=fn("designlab:week",zm[0].key),[P,I]=Ne.useState(null),[R,V]=Ne.useState(!1),[te,H]=fn("designlab:teacher-preview-assignments",[]),ae=["overview","curriculum","journals"].includes(d)?d:"overview",D=Mm(y)||mo[0],W=Ne.useMemo(()=>l.filter(F=>F.sections.includes(y)).sort((F,K)=>Fm(F,K,_)),[l,y,_]);return p.jsxs("div",{className:"main-content teacher-screen",children:[p.jsx(lh,{eyebrow:"Your classroom · Frontend preview",actions:p.jsx(is,{children:ae==="curriculum"?"Real CS1 catalog · demo assignments":"Sample student data"}),children:"Teacher dashboard"}),p.jsx("p",{className:"page-subtitle",children:ae==="curriculum"?"Browse published Computer Science I lessons and configure preview-only section assignments.":"Explore your class layout with fictional students. No real student information is loaded."}),p.jsx(kb,{sectionId:D.id,onSectionChange:F=>{b(F),I(null)},setupOpen:R,onToggleSetup:()=>V(F=>!F)}),R&&p.jsx("div",{id:"teacher-section-setup",children:p.jsx(Db,{students:l})}),p.jsx(_b,{tab:ae,onChange:F=>{g(F),I(null)}}),ae==="curriculum"&&p.jsx(Mb,{section:D,students:W,assignments:te,setAssignments:H}),ae==="overview"&&p.jsx(Pb,{section:D,students:W,week:k,setWeek:E,sort:_,setSort:T,expanded:P,setExpanded:I}),ae==="journals"&&p.jsx(zb,{section:D,students:W,submissions:u})]})}function Wb({children:l}){return p.jsx("div",{className:"empty",children:l})}function Hb({student:l,isEditing:u,onToggleEdit:d,onDone:g,onPatch:y}){const b=Vl(l);return p.jsxs("article",{className:"account-card",children:[p.jsxs("div",{className:"account-row",children:[p.jsx("span",{className:"avatar",children:b.slice(0,1).toUpperCase()}),p.jsxs("div",{className:"account-identity",children:[p.jsx("h3",{children:b}),p.jsxs("small",{children:["@",l.github]})]}),p.jsx("button",{className:"icon-button","aria-label":`Edit ${b}`,onClick:d,children:u?p.jsx(Id,{size:17}):p.jsx(oh,{size:17})})]}),p.jsxs("div",{className:"account-footer",children:[p.jsx(is,{tone:l.sheetName?"success":"",children:l.sheetName?"Sheet matched":"Student name fallback"}),l.sections.map(_=>p.jsxs(is,{children:["Period ",Dm(_)]},_))]}),u&&p.jsxs("div",{className:"account-edit",children:[p.jsxs("label",{children:["Google Sheet name",p.jsx("input",{value:l.sheetName||"",onChange:_=>y({sheetName:_.target.value||null})})]}),p.jsxs("label",{children:["Student-provided backup",p.jsx("input",{value:l.studentName||"",onChange:_=>y({studentName:_.target.value})})]}),p.jsx("button",{className:"btn",onClick:g,children:"Done"})]})]})}function Bb({students:l,sort:u,setSort:d,patchStudent:g}){const[y,b]=fn("designlab:period-filter","all"),[_,T]=Ne.useState(""),[k,E]=Ne.useState(null),P=Ne.useMemo(()=>{const I=_.toLowerCase();return l.filter(R=>(y==="all"||R.sections.some(V=>Dm(V)===y))&&[Vl(R),R.github,R.studentName].some(V=>V.toLowerCase().includes(I))).sort((R,V)=>Fm(R,V,u))},[l,y,u,_]);return p.jsxs("section",{className:"panel",children:[p.jsxs("div",{className:"section-heading",children:[p.jsxs("div",{children:[p.jsx("h2",{children:"Accounts"}),p.jsx("p",{children:"Google Sheet name first, student-entered name second, then GitHub name."})]}),p.jsxs(is,{children:[P.length," accounts"]})]}),p.jsxs("div",{className:"filters",children:[p.jsxs("label",{children:[p.jsx(rm,{size:16})," ",p.jsx("input",{"aria-label":"Search accounts",value:_,placeholder:"Search name or GitHub username",onChange:I=>T(I.target.value)})]}),p.jsxs("label",{children:["Class period",p.jsxs("select",{value:y,onChange:I=>b(I.target.value),children:[p.jsx("option",{value:"all",children:"All periods"}),bb.map(I=>p.jsx("option",{children:I},I))]})]}),p.jsx(Wm,{label:"Sort",value:u,onChange:d})]}),p.jsx("p",{className:"info-text",children:"Change a sample Sheet name to test precedence and fallback behavior. These edits are saved only in browser storage."}),p.jsx("div",{className:"account-grid",children:P.map(I=>p.jsx(Hb,{student:I,isEditing:k===I.id,onToggleEdit:()=>E(k===I.id?null:I.id),onDone:()=>E(null),onPatch:R=>g(I.id,R)},I.id))}),!P.length&&p.jsx(Wb,{children:"No accounts match those filters."})]})}function Ub({students:l,setStudents:u}){const[d,g]=fn("designlab:admin-sort","last"),[y,b]=Ne.useState(""),_=(T,k)=>u(E=>E.map(P=>P.id===T?{...P,...k}:P));return p.jsxs("div",{className:"main-content teacher-screen admin-screen",children:[p.jsx(lh,{eyebrow:"Global management · Frontend preview",actions:p.jsx(is,{children:"Sample accounts only"}),children:"Admin dashboard"}),p.jsxs("p",{className:"page-subtitle",children:[p.jsx(ah,{size:16,"aria-hidden":"true"})," Account management is separate from class-specific teacher tools. This demo has no real accounts or admin permissions attached."]}),p.jsxs("div",{className:"admin-actions",children:[p.jsxs("button",{type:"button",className:"btn",onClick:()=>{u(wd),b("Fictional account records restored.")},children:[p.jsx(nm,{size:15})," Reset sample accounts"]}),y&&p.jsx("small",{role:"status",children:y})]}),p.jsx(Bb,{students:l,sort:d,setSort:g,patchStudent:_})]})}const qb={essay:"Think about a time you solved a difficult problem. Explain what you tried first, how you changed your approach, and what you learned. Use specific evidence.","logic-puzzle":"A robot follows this pattern: 2, 6, 12, 20, 30, __. Find the next number. Explain the pattern and show why your answer fits."},$f={response:"",type:"essay",aiUse:"",aiDetails:""};function Kb({submissions:l,setSubmissions:u}){var je;const[d,g]=fn("designlab:journal-section",mo[0].id),y=mo.find(ie=>ie.id===d)||mo[0],b=wd.filter(ie=>ie.sections.includes(y.id)),[_,T]=fn("designlab:journal-student",wd[0].id),k=b.find(ie=>ie.id===_)||b[0],E=Ne.useMemo(()=>Fp(),[]),[P,I]=fn("designlab:journal-week",E[0]),R=E.includes(P)?P:E[0],[V,te]=fn("designlab:journal-drafts",{}),[H,ae]=Ne.useState(""),[D,W]=Ne.useState(!1),F=wg(y.id,k.id,R),K=V[F]||$f,Y=l.filter(ie=>ie.studentId===k.id&&ie.sectionId===y.id&&ie.week===R),he=Y.at(-1),le=K.response.trim()?K.response.trim().split(/\s+/).length:0;function we(ie,Ce){te(se=>({...se,[F]:{...se[F]||$f,[ie]:Ce}})),ae("Draft saved in this browser.")}function He(ie){ie.preventDefault();const Ce=kg(K);if(Ce){ae(Ce);return}const se={id:`demo-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,sectionId:y.id,studentId:k.id,studentName:`${k.first} ${k.last}`,courseId:y.course,week:R,response:K.response.trim(),type:K.type,aiUse:K.aiUse,aiDetails:K.aiDetails.trim(),submittedAt:new Date().toISOString()};u(ye=>[...ye,se]),ae("Demo submission saved locally. Check the Teacher dashboard → Journals tab to review it.")}return p.jsxs("div",{className:"main-content journal-screen",children:[p.jsx("div",{className:"eyebrow",children:"Your classes · Written work"}),p.jsxs("header",{className:"journal-heading",children:[p.jsxs("div",{children:[p.jsx("h1",{children:"Weekly Journals"}),p.jsx("p",{children:"Essay responses, reflections, and logic puzzles—all in one place."})]}),p.jsxs("span",{className:"chip",children:[p.jsx(ah,{size:14})," Local demo only"]})]}),p.jsxs("section",{className:"journal-card journal-selection","aria-label":"Select a journal",children:[p.jsxs("label",{children:["Class section",p.jsx("select",{value:y.id,onChange:ie=>{g(ie.target.value),ae("")},children:mo.map(ie=>{var Ce;return p.jsxs("option",{value:ie.id,children:[ie.name," · ",(Ce=yi(ie.course))==null?void 0:Ce.label]},ie.id)})})]}),p.jsxs("label",{children:["Preview as student",p.jsx("select",{value:k.id,onChange:ie=>{T(ie.target.value),ae("")},children:b.map(ie=>p.jsxs("option",{value:ie.id,children:[ie.first," ",ie.last," (sample)"]},ie.id))})]}),p.jsxs("label",{children:["Journal week",p.jsx("select",{value:R,onChange:ie=>{I(ie.target.value),ae("")},children:E.map(ie=>p.jsxs("option",{value:ie,children:["Week of ",$l(ie)]},ie))})]})]}),p.jsxs("section",{className:"journal-card journal-editor-card",children:[p.jsxs("div",{className:"journal-section-heading",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"eyebrow",children:[(je=yi(y.course))==null?void 0:je.label," · ",y.name]}),p.jsxs("h2",{children:["Journal · Week of ",$l(R)]})]}),p.jsx("span",{className:`journal-status-pill ${he?"submitted":""}`,children:he?"Submitted":"Not submitted"})]}),p.jsx("p",{className:"journal-instructions",children:"This is a fictional prompt for design testing. In production, your teacher would publish the weekly assignment."}),p.jsxs("form",{onSubmit:He,children:[p.jsxs("label",{children:["Response type",p.jsxs("select",{value:K.type,onChange:ie=>we("type",ie.target.value),children:[p.jsx("option",{value:"essay",children:"Essay or written reflection"}),p.jsx("option",{value:"logic-puzzle",children:"Logic puzzle or reasoning task"})]})]}),p.jsxs("div",{className:"journal-prompt",children:[p.jsx("strong",{children:"Sample prompt"}),p.jsx("p",{children:qb[K.type]})]}),p.jsx("label",{htmlFor:"journal-answer",children:"Your response"}),p.jsx("textarea",{id:"journal-answer",rows:"13",maxLength:"100000",spellCheck:!0,placeholder:"Write your explanation here. Show steps and reasoning for logic puzzles.",value:K.response,onChange:ie=>we("response",ie.target.value)}),p.jsxs("div",{className:"journal-writing-meta",children:[p.jsxs("span",{children:[le," words"]}),p.jsxs("span",{children:[p.jsx(_d,{size:13})," Autosaved in this browser"]})]}),p.jsxs("div",{className:"journal-integrity",children:[p.jsxs("label",{children:["AI-use declaration",p.jsxs("select",{value:K.aiUse,onChange:ie=>we("aiUse",ie.target.value),children:[p.jsx("option",{value:"",children:"Choose one"}),p.jsx("option",{value:"none",children:"I did not use AI-generated content"}),p.jsx("option",{value:"disclosed",children:"I used AI and will explain how"})]})]}),p.jsx("p",{className:"hint",children:"This is a declaration for review, not an automatic grade. Follow your teacher's classroom AI policy."}),K.aiUse==="disclosed"&&p.jsxs("label",{children:["Describe the AI assistance",p.jsx("textarea",{rows:"3",value:K.aiDetails,onChange:ie=>we("aiDetails",ie.target.value),placeholder:"Identify which parts involved AI assistance."})]})]}),p.jsxs("div",{className:"journal-actions",children:[p.jsxs("button",{type:"button",className:"btn",onClick:()=>{ae("Draft saved in this browser.")},children:[p.jsx(_d,{size:15})," Save draft"]}),p.jsxs("button",{type:"submit",className:"btn submit",children:[p.jsx(sh,{size:15})," Demo submit"]})]}),p.jsx("p",{role:"status",className:"journal-submit-status",children:H})]}),p.jsxs("div",{className:"journal-bottom-row",children:[p.jsx("p",{className:"hint",children:"No real submissions are sent. Each demo submission records a separate copy; drafts remain editable."}),p.jsxs("button",{type:"button",className:"btn",onClick:()=>W(ie=>!ie),children:[p.jsx(wy,{size:15})," ",D?"Hide history":`Submission history (${Y.length})`]})]}),D&&p.jsx("div",{className:"journal-history",children:Y.length?Y.map(ie=>p.jsxs("details",{className:"journal-history-item",children:[p.jsxs("summary",{children:[p.jsx(Bp,{size:16})," Submitted ",new Date(ie.submittedAt).toLocaleString()," · ",ie.type]}),p.jsx("div",{className:"journal-history-answer",children:ie.response})]},ie.id)):p.jsx("p",{className:"muted",children:"No submissions yet for this week."})})]})]})}const $b=`# Attendance Percentage

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
`,Gb=`# Competition Leaderboard Ranks

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
`,Yb=`# Confidence Pool Total

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
`,Vb=`# Count Matching Events

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
`,Jb=`# Longest Winning Streak

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
`,Xb=`# Format a Score Line

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
`,Qb=`# Second Largest Distinct Value

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
`,Zb=`# Sum Positive Values

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
`,e0=`# Count Pairs With Target Sum

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
`,t0=`# Temperature Alert

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
`,n0=`using System;

public static class Solution {
    public static int AttendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,r0=`public class Solution {
    public static int attendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,i0=`export function attendancePercent(present, total) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,s0=`def attendance_percent(present: int, total: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,o0=`using System;

public static class Solution {
    public static int[] CompetitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,a0=`public class Solution {
    public static int[] competitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,l0=`export function competitionRanks(scores) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,u0=`def competition_ranks(scores: list[int]) -> list[int]:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,c0=`using System;

public static class Solution {
    public static int ConfidenceTotal(bool[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,d0=`public class Solution {
    public static int confidenceTotal(boolean[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,p0=`export function confidenceTotal(correct, weights) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,h0=`def confidence_total(correct: list[bool], weights: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,f0=`using System;

public static class Solution {
    public static int CountMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,m0=`public class Solution {
    public static int countMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,g0=`export function countMatches(events, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,y0=`def count_matches(events: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,v0=`using System;

public static class Solution {
    public static int LongestWinStreak(bool[] wins) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,x0=`public class Solution {
    public static int longestWinStreak(boolean[] wins) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,b0=`export function longestWinStreak(wins) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,w0=`def longest_win_streak(wins: list[bool]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,k0=`using System;

public static class Solution {
    public static string ScoreLine(string name, int points) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,S0=`public class Solution {
    public static String scoreLine(String name, int points) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,_0=`export function scoreLine(name, points) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,C0=`def score_line(name: str, points: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,T0=`using System;

public static class Solution {
    public static int? SecondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,j0=`public class Solution {
    public static Integer secondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,N0=`export function secondLargestDistinct(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,E0=`def second_largest_distinct(numbers: list[int]) -> int | None:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,L0=`using System;

public static class Solution {
    public static int SumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,P0=`public class Solution {
    public static int sumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,A0=`export function sumPositives(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,R0=`def sum_positives(numbers: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,I0=`using System;

public static class Solution {
    public static int TargetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,O0=`public class Solution {
    public static int targetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,M0=`export function targetPairs(numbers, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,D0=`def target_pairs(numbers: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,z0=`using System;

public static class Solution {
    public static string TemperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,F0=`public class Solution {
    public static String temperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,W0=`export function temperatureAlert(degrees) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,H0=`def temperature_alert(degrees: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,B0="attendance-percent",U0=[{input:[18,20],expected:90},{input:[2,3],expected:66},{input:[0,30],expected:0},{input:[7,7],expected:100}],q0={challengeId:B0,cases:U0},K0="competition-ranks",$0=[{input:[[50,50,40,20,40]],expected:[1,1,3,5,3]},{input:[[7,12,9]],expected:[3,1,2]},{input:[[5,5,5]],expected:[1,1,1]},{input:[[]],expected:[]}],G0={challengeId:K0,cases:$0},Y0="confidence-total",V0=[{input:[[!0,!1,!0],[20,18,15]],expected:35},{input:[[!1,!1],[5,8]],expected:0},{input:[[],[]],expected:0}],J0={challengeId:Y0,cases:V0},X0="count-matches",Q0=[{input:[[2,1,2,3,2],2],expected:3},{input:[[],7],expected:0},{input:[[3,4],5],expected:0}],Z0={challengeId:X0,cases:Q0},ew="longest-win-streak",tw=[{input:[[!0,!0,!1,!0,!0,!0]],expected:3},{input:[[!1,!1]],expected:0},{input:[[]],expected:0},{input:[[!0,!0]],expected:2}],nw={challengeId:ew,cases:tw},rw="score-line",iw=[{input:["Avery",18],expected:"Avery: 18 points"},{input:["Jordan Lee",0],expected:"Jordan Lee: 0 points"},{input:["Mia",-2],expected:"Mia: -2 points"}],sw={challengeId:rw,cases:iw},ow="second-largest-distinct",aw=[{input:[[3,1,3,2]],expected:2},{input:[[5,5]],expected:null},{input:[[-10,-7,-7,-2]],expected:-7},{input:[[1]],expected:null}],lw={challengeId:ow,cases:aw},uw="sum-positives",cw=[{input:[[-3,6,0,2,-1]],expected:8},{input:[[-5,0,-1]],expected:0},{input:[[]],expected:0}],dw={challengeId:uw,cases:cw},pw="target-pairs",hw=[{input:[[1,3,2,2,4],4],expected:2},{input:[[2,2,2],4],expected:3},{input:[[1,2,3],9],expected:0},{input:[[],1],expected:0}],fw={challengeId:pw,cases:hw},mw="temperature-alert",gw=[{input:[32],expected:"Freeze"},{input:[90],expected:"Heat"},{input:[72],expected:"Normal"},{input:[-5],expected:"Freeze"}],yw={challengeId:mw,cases:gw},vw=["python","java","javascript","csharp"],xw=[{id:"temperature-alert",title:"Temperature Alert",summary:"Choose a status label based on a temperature reading.",difficulty:"Very Easy",points:5,tags:["conditionals","comparisons","functions"],prerequisites:["functions","conditionals"],suggestedCourses:["computer-science-1","game-programming","uil"],languages:["python","java","javascript","csharp"],path:"problems/temperature-alert"},{id:"count-matches",title:"Count Matching Events",summary:"Count how often a particular event code appears.",difficulty:"Easy",points:10,tags:["arrays","loops","comparisons"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/count-matches"},{id:"sum-positives",title:"Sum Positive Values",summary:"Add only the positive values in a data set.",difficulty:"Easy",points:10,tags:["arrays","loops","accumulators"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/sum-positives"},{id:"score-line",title:"Format a Score Line",summary:"Format a player score as a clear single line of text.",difficulty:"Easy",points:10,tags:["strings","formatting","functions"],prerequisites:["variables","strings","functions"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/score-line"},{id:"attendance-percent",title:"Attendance Percentage",summary:"Convert an attendance fraction into a whole-number percentage.",difficulty:"Easy",points:10,tags:["arithmetic","integer-division","functions"],prerequisites:["variables","functions","arithmetic"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/attendance-percent"},{id:"longest-win-streak",title:"Longest Winning Streak",summary:"Find the longest consecutive run of winning results.",difficulty:"Medium",points:15,tags:["arrays","loops","state"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/longest-win-streak"},{id:"confidence-total",title:"Confidence Pool Total",summary:"Compute the points earned from predictions.",difficulty:"Medium",points:15,tags:["arrays","loops","parallel-arrays"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/confidence-total"},{id:"second-largest-distinct",title:"Second Largest Distinct Value",summary:"Return the second-highest unique integer in a collection.",difficulty:"Medium",points:20,tags:["arrays","comparisons","distinct-values"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/second-largest-distinct"},{id:"target-pairs",title:"Count Pairs With Target Sum",summary:"Count pairs of positions that add to a target.",difficulty:"Hard",points:25,tags:["arrays","nested-loops","counting"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/target-pairs"},{id:"competition-ranks",title:"Competition Leaderboard Ranks",summary:"Assign ranks while handling tied scores and skipped positions.",difficulty:"Hard",points:25,tags:["arrays","sorting","ties"],prerequisites:["functions","loops","arrays","sorting"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/competition-ranks"}],Bm={languages:vw,challenges:xw},bw=Object.assign({"../challenge-bank/problems/attendance-percent/problem.md":$b,"../challenge-bank/problems/competition-ranks/problem.md":Gb,"../challenge-bank/problems/confidence-total/problem.md":Yb,"../challenge-bank/problems/count-matches/problem.md":Vb,"../challenge-bank/problems/longest-win-streak/problem.md":Jb,"../challenge-bank/problems/score-line/problem.md":Xb,"../challenge-bank/problems/second-largest-distinct/problem.md":Qb,"../challenge-bank/problems/sum-positives/problem.md":Zb,"../challenge-bank/problems/target-pairs/problem.md":e0,"../challenge-bank/problems/temperature-alert/problem.md":t0}),ww=Object.assign({"../challenge-bank/problems/attendance-percent/starters/Solution.cs":n0,"../challenge-bank/problems/attendance-percent/starters/Solution.java":r0,"../challenge-bank/problems/attendance-percent/starters/javascript.js":i0,"../challenge-bank/problems/attendance-percent/starters/python.py":s0,"../challenge-bank/problems/competition-ranks/starters/Solution.cs":o0,"../challenge-bank/problems/competition-ranks/starters/Solution.java":a0,"../challenge-bank/problems/competition-ranks/starters/javascript.js":l0,"../challenge-bank/problems/competition-ranks/starters/python.py":u0,"../challenge-bank/problems/confidence-total/starters/Solution.cs":c0,"../challenge-bank/problems/confidence-total/starters/Solution.java":d0,"../challenge-bank/problems/confidence-total/starters/javascript.js":p0,"../challenge-bank/problems/confidence-total/starters/python.py":h0,"../challenge-bank/problems/count-matches/starters/Solution.cs":f0,"../challenge-bank/problems/count-matches/starters/Solution.java":m0,"../challenge-bank/problems/count-matches/starters/javascript.js":g0,"../challenge-bank/problems/count-matches/starters/python.py":y0,"../challenge-bank/problems/longest-win-streak/starters/Solution.cs":v0,"../challenge-bank/problems/longest-win-streak/starters/Solution.java":x0,"../challenge-bank/problems/longest-win-streak/starters/javascript.js":b0,"../challenge-bank/problems/longest-win-streak/starters/python.py":w0,"../challenge-bank/problems/score-line/starters/Solution.cs":k0,"../challenge-bank/problems/score-line/starters/Solution.java":S0,"../challenge-bank/problems/score-line/starters/javascript.js":_0,"../challenge-bank/problems/score-line/starters/python.py":C0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.cs":T0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.java":j0,"../challenge-bank/problems/second-largest-distinct/starters/javascript.js":N0,"../challenge-bank/problems/second-largest-distinct/starters/python.py":E0,"../challenge-bank/problems/sum-positives/starters/Solution.cs":L0,"../challenge-bank/problems/sum-positives/starters/Solution.java":P0,"../challenge-bank/problems/sum-positives/starters/javascript.js":A0,"../challenge-bank/problems/sum-positives/starters/python.py":R0,"../challenge-bank/problems/target-pairs/starters/Solution.cs":I0,"../challenge-bank/problems/target-pairs/starters/Solution.java":O0,"../challenge-bank/problems/target-pairs/starters/javascript.js":M0,"../challenge-bank/problems/target-pairs/starters/python.py":D0,"../challenge-bank/problems/temperature-alert/starters/Solution.cs":z0,"../challenge-bank/problems/temperature-alert/starters/Solution.java":F0,"../challenge-bank/problems/temperature-alert/starters/javascript.js":W0,"../challenge-bank/problems/temperature-alert/starters/python.py":H0}),kw=Object.assign({"../challenge-bank/problems/attendance-percent/examples.json":q0,"../challenge-bank/problems/competition-ranks/examples.json":G0,"../challenge-bank/problems/confidence-total/examples.json":J0,"../challenge-bank/problems/count-matches/examples.json":Z0,"../challenge-bank/problems/longest-win-streak/examples.json":nw,"../challenge-bank/problems/score-line/examples.json":sw,"../challenge-bank/problems/second-largest-distinct/examples.json":lw,"../challenge-bank/problems/sum-positives/examples.json":dw,"../challenge-bank/problems/target-pairs/examples.json":fw,"../challenge-bank/problems/temperature-alert/examples.json":yw}),Dd=Bm.challenges,Qp=Bm.languages,Um={python:"Python",java:"Java",javascript:"JavaScript",csharp:"C#"},Sw={python:"python.py",java:"Solution.java",javascript:"javascript.js",csharp:"Solution.cs"};function qm(l){return Dd.find(u=>u.id===l)||null}function _w(l){return bw[`../challenge-bank/problems/${l}/problem.md`]??""}function Cw(l,u){return ww[`../challenge-bank/problems/${l}/starters/${Sw[u]}`]??""}function Tw(l){var u;return((u=kw[`../challenge-bank/problems/${l}/examples.json`])==null?void 0:u.cases)??[]}const jw=[...new Set(Dd.flatMap(l=>l.tags))].sort((l,u)=>l.localeCompare(u)),Nw=["Very Easy","Easy","Medium","Hard"];function Ew({query:l="",topic:u="all",difficulty:d="all",course:g="all",language:y="all"}={}){const b=l.trim().toLocaleLowerCase();return Dd.filter(_=>(!b||[_.title,_.summary,..._.tags].join(" ").toLowerCase().includes(b))&&(u==="all"||_.tags.includes(u))&&(d==="all"||_.difficulty===d)&&(g==="all"||_.suggestedCourses.includes(g))&&(y==="all"||_.languages.includes(y))).slice().sort((_,T)=>_.title.localeCompare(T.title))}function Gf(l,u){var b;const[d,...g]=l.split(":"),y=g.join(":");return d==="lesson"?ra(yi(u),y):((b=qm(y))==null?void 0:b.title)||y}function Lw({grades:l=[],assignments:u=[],completedLessons:d=[]}){const[g,y]=Ne.useState("all"),b=g==="all"?l:l.filter(I=>I.courseId===g),_=Wp(b),T=qg(b),k=T[0],E=ns.map(I=>({...I,...Wp(l.filter(R=>R.courseId===I.id))})),P=u.filter(I=>g==="all"||I.courseId===g).map(I=>({...I,status:Ld(I.id,{assignments:u,grades:l,completedLessons:d})})).filter(I=>I.status.state==="assigned"||I.status.state==="overdue").sort((I,R)=>I.dueDate.localeCompare(R.dueDate));return p.jsxs("div",{className:"main-content grades-screen",children:[p.jsxs("header",{className:"grades-heading",children:[p.jsxs("div",{children:[p.jsx("div",{className:"eyebrow",children:"Your progress"}),p.jsx("h1",{children:"Grades"}),p.jsx("p",{children:"See your earned points, weekly scores, and work still due."})]}),p.jsxs("label",{className:"grades-filter",children:["Course",p.jsxs("select",{value:g,onChange:I=>y(I.target.value),children:[p.jsx("option",{value:"all",children:"All courses"}),ns.map(I=>p.jsx("option",{value:I.id,children:I.label},I.id))]})]})]}),p.jsx("p",{className:"grades-preview-note",children:"This preview does not display real student grades or assignments. Verified scores remain in the current Playground."}),p.jsxs("div",{className:"grades-summary",children:[p.jsxs("div",{className:"grades-stat surface-card",children:[p.jsx(py,{size:19}),p.jsx("span",{children:"Points earned"}),p.jsxs("strong",{children:[_.earned," ",p.jsxs("small",{children:["/ ",_.possible]})]}),p.jsx("p",{children:_.percent===null?"No graded work yet":`${_.percent}% of graded points`})]}),p.jsxs("div",{className:"grades-stat surface-card",children:[p.jsx(im,{size:19}),p.jsx("span",{children:"Graded activities"}),p.jsx("strong",{children:_.count}),p.jsx("p",{children:"Lessons and challenges"})]}),p.jsxs("div",{className:"grades-stat surface-card",children:[p.jsx(dy,{size:19}),p.jsx("span",{children:"Most recent scored week"}),p.jsx("strong",{children:k?`${k.earned} / ${k.possible}`:"—"}),p.jsx("p",{children:k?`Week of ${$l(k.week)}`:"No scores yet"})]})]}),p.jsxs("section",{className:"grades-panel surface-card",children:[p.jsx("h2",{children:"Weekly scores"}),T.length?p.jsx("div",{className:"grades-weeks",children:T.map(I=>p.jsxs("div",{className:"grades-week",children:[p.jsxs("div",{children:[p.jsxs("strong",{children:["Week of ",$l(I.week)]}),p.jsxs("small",{children:[I.count," scored ",I.count===1?"activity":"activities"]})]}),p.jsxs("div",{className:"grades-week-score",children:[p.jsxs("strong",{children:[I.earned," / ",I.possible," pts"]}),p.jsx("progress",{value:I.earned,max:Math.max(I.possible,1),"aria-label":`Week of ${$l(I.week)}: ${I.earned} of ${I.possible} points`})]})]},I.week))}):p.jsx("p",{children:"No graded work in this selection."})]}),g==="all"&&p.jsxs("section",{className:"grades-panel surface-card",children:[p.jsx("h2",{children:"By course"}),p.jsx("div",{className:"grades-course-list",children:E.map(I=>p.jsxs("div",{className:"grades-course-row","data-course":I.id,children:[p.jsx("span",{className:"grades-course-dot","aria-hidden":"true"}),p.jsx("strong",{children:I.label}),p.jsx("span",{children:I.count?`${I.earned} / ${I.possible} pts`:"No grades yet"})]},I.id))})]}),p.jsxs("section",{className:"grades-panel surface-card",children:[p.jsx("h2",{children:"Scored work"}),b.length?p.jsx("div",{className:"grades-entries",children:b.slice().sort((I,R)=>R.gradedAt.localeCompare(I.gradedAt)).map(I=>{var R;return p.jsxs("div",{className:"grades-entry",children:[p.jsxs("div",{children:[p.jsx("strong",{children:Gf(I.id,I.courseId)}),p.jsxs("small",{children:[p.jsx(lc,{size:13}),((R=yi(I.courseId))==null?void 0:R.label)||I.courseId," · ",Sd(I.gradedAt)]})]}),p.jsxs("strong",{children:[I.earned," / ",I.possible," pts"]})]},I.id)})}):p.jsx("p",{children:"No scored lessons or challenges yet."})]}),p.jsxs("section",{className:"grades-panel surface-card",children:[p.jsx("h2",{children:"Still to complete"}),P.length?p.jsx("div",{className:"grades-entries",children:P.map(I=>{var R;return p.jsxs("div",{className:"grades-entry",children:[p.jsxs("div",{children:[p.jsx("strong",{children:Gf(I.id,I.courseId)}),p.jsx("small",{children:((R=yi(I.courseId))==null?void 0:R.label)||I.courseId})]}),p.jsxs("div",{className:"grades-due-meta",children:[p.jsx("span",{className:`assignment-status ${I.status.state}`,children:I.status.state==="overdue"?"Overdue":"Assigned"}),p.jsxs("small",{children:["Due ",Sd(I.dueDate)]})]})]},I.id)})}):p.jsx("p",{children:"Nothing outstanding in this selection."})]})]})}function Pw({filterCourse:l,onSelect:u,onBrowseCourse:d,grades:g=[]}){const[y,b]=Ne.useState(""),[_,T]=Ne.useState("all"),[k,E]=Ne.useState("all"),[P,I]=Ne.useState("all"),R=l||"all",V=Ne.useMemo(()=>Ew({query:y,difficulty:_,topic:k,language:P,course:R}),[y,_,k,P,R]),te=()=>{b(""),T("all"),E("all"),I("all"),d(null)};return p.jsxs("div",{className:"main-content challenge-bank-screen",children:[p.jsxs("header",{className:"challenge-bank-intro",children:[p.jsxs("div",{className:"eyebrow",children:[p.jsx(Rd,{size:15})," Shared programming practice"]}),p.jsx("h1",{children:"Challenge Bank"}),p.jsx("p",{children:"One problem library for every class. Choose Python, Java, JavaScript, or C# when solving—without duplicating problems across courses."}),p.jsxs("div",{className:"challenge-summary",children:[p.jsx("strong",{children:Dd.length})," original challenges · ",p.jsx("strong",{children:"4"})," languages · ",p.jsx("strong",{children:"1"})," shared library"]})]}),p.jsxs("section",{className:"challenge-filters surface-card","aria-label":"Filter challenges",children:[p.jsxs("div",{className:"filter-title",children:[p.jsx(vy,{size:17}),p.jsx("strong",{children:"Find a challenge"}),p.jsxs("button",{type:"button",className:"filter-clear",onClick:te,children:[p.jsx(Id,{size:14})," Clear filters"]})]}),p.jsxs("div",{className:"challenge-filter-grid",children:[p.jsxs("label",{className:"challenge-search-label",children:["Search",p.jsxs("span",{className:"challenge-search",children:[p.jsx(rm,{size:16}),p.jsx("input",{type:"search",value:y,placeholder:"Problem, skill, or topic",onChange:H=>b(H.target.value)})]})]}),p.jsxs("label",{children:["Course view",p.jsxs("select",{value:R,onChange:H=>d(H.target.value==="all"?null:H.target.value),children:[p.jsx("option",{value:"all",children:"All courses"}),ns.filter(H=>H.id!=="tsi-math").map(H=>p.jsx("option",{value:H.id,children:H.label},H.id))]})]}),p.jsxs("label",{children:["Difficulty",p.jsxs("select",{value:_,onChange:H=>T(H.target.value),children:[p.jsx("option",{value:"all",children:"Any difficulty"}),Nw.map(H=>p.jsx("option",{value:H,children:H},H))]})]}),p.jsxs("label",{children:["Topic",p.jsxs("select",{value:k,onChange:H=>E(H.target.value),children:[p.jsx("option",{value:"all",children:"Any topic"}),jw.map(H=>p.jsx("option",{value:H,children:H},H))]})]}),p.jsxs("label",{children:["Language",p.jsxs("select",{value:P,onChange:H=>I(H.target.value),children:[p.jsx("option",{value:"all",children:"Any language"}),Qp.map(H=>p.jsx("option",{value:H,children:Um[H]},H))]})]})]}),p.jsx("p",{className:"challenge-filter-note",children:"Course matching is informational. Confirm students have learned the prerequisite skills before assigning problems."})]}),p.jsxs("div",{className:"challenge-results-heading",children:[p.jsxs("h2",{children:["Available challenges ",p.jsxs("span",{children:["(",V.length,")"]})]}),p.jsx("span",{children:"Alphabetical order"})]}),V.length?p.jsx("div",{className:"challenge-card-grid",children:V.map(H=>p.jsxs("a",{className:"challenge-card surface-card",href:Xf(H.id),onClick:ae=>{ae.button!==0||ae.metaKey||ae.ctrlKey||ae.shiftKey||ae.altKey||(ae.preventDefault(),u(H.id))},children:[p.jsxs("div",{className:"challenge-card-top",children:[p.jsx("span",{className:"challenge-level level-"+H.difficulty.toLowerCase().replace(" ","-"),children:H.difficulty}),p.jsx("span",{className:"challenge-points",children:gd("challenge:"+H.id,g)?`${gd("challenge:"+H.id,g).earned} / ${gd("challenge:"+H.id,g).possible} pts earned`:`${H.points} pts available`})]}),p.jsx("h3",{children:H.title}),p.jsx("p",{children:H.summary}),p.jsx("div",{className:"challenge-tags",children:H.tags.map(ae=>p.jsx("span",{children:ae},ae))}),p.jsxs("div",{className:"challenge-course-tags",children:[H.suggestedCourses.slice(0,3).map(ae=>{var D,W;return p.jsx("span",{title:(D=yi(ae))==null?void 0:D.label,children:((W=yi(ae))==null?void 0:W.short)||ae},ae)}),H.suggestedCourses.length>3&&p.jsxs("span",{children:["+",H.suggestedCourses.length-3]})]}),p.jsxs("span",{className:"challenge-open",children:["Open challenge ",p.jsx(Hp,{size:16})]})]},H.id))}):p.jsxs("div",{className:"challenge-empty surface-card",children:[p.jsx("h3",{children:"No matching challenges"}),p.jsx("p",{children:"Try a broader topic or clear the filters."}),p.jsx("button",{className:"btn",onClick:te,children:"Show all challenges"})]}),p.jsx("p",{className:"hint challenge-bottom-note",children:"Choose a problem, work through its examples, and compare your approach. Practice here does not count toward your grade."})]})}const Aw=(l,u)=>"designlab:challenge-code:"+l+":"+u;function Rw({challengeId:l,onBack:u}){const d=qm(l),[g,y]=fn("designlab:challenge-language","python"),b=Qp.includes(g)?g:"python",[_,T]=fn("designlab:challenge-left-width",420),k=Ne.useRef(null);if(!d)return p.jsxs("div",{className:"main-content",children:[p.jsx("h1",{children:"Challenge not found"}),p.jsx("button",{className:"btn",onClick:u,children:"Back to bank"})]});const E=Cw(l,b),P={id:l,title:d.title,language:b,starter:E,kind:"Challenge",challenge:d.summary,points:d.points,console:"Run or Check executes published examples in your selected language.",storageKey:Aw(l,b),challengeExamples:Tw(l),isChallenge:!0,isPublished:!1},I=R=>{if(!k.current)return;const V=k.current.getBoundingClientRect();T(Math.max(280,Math.min(V.width-360,R.clientX-V.left)))};return p.jsxs("div",{className:"challenge-detail-page",children:[p.jsxs("div",{className:"challenge-breadcrumb",children:[p.jsxs("button",{onClick:u,children:[p.jsx(uy,{size:16})," Challenge Bank"]}),p.jsx("span",{children:"/"}),p.jsx("span",{children:d.title})]}),p.jsxs("header",{className:"challenge-detail-heading surface-card",children:[p.jsxs("div",{className:"eyebrow",children:["Shared challenge · ",d.difficulty," · ",d.points," available points in the published contract"]}),p.jsx("h1",{children:d.title}),p.jsx("p",{children:d.summary}),p.jsx("p",{children:"Run and Check execute student code using only published examples. No submissions, student records, official points or hidden grading are connected here."}),p.jsxs("div",{className:"challenge-prerequisites",children:[p.jsx("strong",{children:"Prerequisites:"}),d.prerequisites.map(R=>p.jsx("span",{children:R},R))]})]}),p.jsxs("div",{className:"challenge-workspace",ref:k,style:{"--challenge-left":_+"px"},children:[p.jsxs("section",{className:"challenge-instructions",children:[p.jsxs("div",{className:"pane-header",children:[p.jsxs("strong",{children:[p.jsx(cy,{size:16})," Problem & examples"]}),p.jsx("span",{className:"challenge-points",children:"Practice only"})]}),p.jsx("div",{className:"markdown-preview challenge-markdown",dangerouslySetInnerHTML:{__html:rc(_w(l))}})]}),p.jsx(uc,{axis:"columns",onDrag:I}),p.jsxs("section",{className:"challenge-editor-panel",children:[p.jsxs("div",{className:"challenge-runtime-toolbar",children:[p.jsxs("label",{className:"challenge-language-selector",children:["Language",p.jsx("select",{"aria-label":"Solution language",value:b,onChange:R=>y(R.target.value),children:Qp.map(R=>p.jsx("option",{value:R,children:Um[R]},R))})]}),p.jsx("span",{children:"Live public-example checks"})]}),p.jsx(Em,{lessonId:"challenge:"+l+":"+b,task:P},l+":"+b)]})]})]})}function Iw(){const[l,u]=Ne.useState(()=>dd()),[d,g]=fn("designlab:course","computer-science-1"),[y,b]=fn("designlab:theme","dark"),[_,T]=fn("designlab:course-colors",{}),[k,E]=fn("designlab:sidebar",!0),[P,I]=fn("designlab:completed-lessons",[]),R=[],V=[],te=Kg(P,R),[H,ae]=Ne.useState({}),[D,W]=Ne.useState({}),[F,K]=Ne.useState(!0),Y=Ne.useMemo(()=>ns.map(j=>{if(j.id==="computer-science-1")return j;if(j.id==="capstone")return{...j,units:[],lessons:[],lessonRecords:{},publishedContent:!1,projects:[]};const A=H[j.id];return A?{...j,...A,publishedContent:!0}:{...j,units:[],lessons:[],lessonRecords:{},projects:[],contentLoadingError:D[j.id]||null}}),[H,D]);Ne.useEffect(()=>{const j=new AbortController;let A=!0;return Promise.all(["game-programming","mobile-app-dev","uil","tsi-math"].map(async G=>{try{return{courseId:G,data:await Zg(G,{signal:j.signal})}}catch(M){return{courseId:G,error:String((M==null?void 0:M.message)||M)}}})).then(G=>{if(!A)return;const M={},Q={};for(const Se of G)Se.data?M[Se.courseId]=Se.data:Q[Se.courseId]=Se.error;ae(M),W(Q),K(!1)}),()=>{A=!1,j.abort()}},[]),Ne.useEffect(()=>{u(dd(window.location.pathname,Y))},[Y]);const[he,le]=fn("designlab:students",wd),[we,He]=fn("designlab:journal-submissions",Sg);Ne.useEffect(()=>{document.documentElement.dataset.theme=y},[y]),Ne.useEffect(()=>{zg(_,ns)},[_]);function je(j,A){!ns.some(G=>G.id===j)||!Ed(A)||T(G=>({...G&&typeof G=="object"?G:{},[j]:A.toUpperCase()}))}function ie(j){T(A=>{const G={...A&&typeof A=="object"?A:{}};return delete G[j],G})}Ne.useEffect(()=>{var A;l.page==="course"&&g(l.courseId);const j=l.page==="course"?(A=yi(l.courseId))==null?void 0:A.label:l.page==="admin"?"Admin dashboard":l.page==="teacher"?"Teacher dashboard":l.page==="grades"?"Grades":l.page==="journals"?"Weekly journals":l.page==="challenges"?"Challenge Bank":l.page==="challenge"?"Coding challenge":"Your playgrounds";document.title=`${j||"Playground"} | Ms. Whitby's Playground — React Lab`},[l.page,l.courseId,g]),Ne.useEffect(()=>{const j=()=>u(dd(window.location.pathname,Y));return window.addEventListener("popstate",j),window.addEventListener("hashchange",j),()=>{window.removeEventListener("popstate",j),window.removeEventListener("hashchange",j)}},[Y]);const Ce=Ne.useCallback(j=>{window.location.pathname!==j&&window.history.pushState({},"",j),u(dd(window.location.pathname,Y)),window.scrollTo({top:0,behavior:"auto"})},[Y]);function se(j,A){if(!j)return Ce(Kl());g(j),Ce(Pd(j,A))}function ye(j,A,G=null){Ce(Qf(j,A,G))}function N(j){j==="teacher"?Ce(Yh()):j==="admin"?Ce(ry()):j==="journals"?Ce(iy()):j==="grades"?Ce(sy()):j==="challenges"?Ce(Ul()):j==="course"?se(l.page==="course"?l.courseId:d):Ce(Kl())}const J=l.page,q=l.courseId||d;return p.jsxs("div",{className:"app-shell",children:[p.jsx(Ay,{sidebarOpen:k,onToggleSidebar:()=>E(!k),onHome:()=>Ce(Kl()),theme:y,setTheme:b}),p.jsxs("div",{className:co("app-layout",!k&&"sidebar-closed"),children:[p.jsx(Iy,{open:k,page:J,courseId:q,lessonId:l.page==="course"?l.lessonId:null,setPage:N,openCourse:se,completedLessons:te,assignments:V,grades:R,availableCourses:Y,onOpenProject:ye}),p.jsx("main",{className:"main-panel",children:J==="home"?p.jsx(Fy,{availableCourses:Y,completedLessons:te,openCourse:se,openTeacher:()=>Ce(Yh()),openChallenges:()=>Ce(Ul())}):J==="course"?p.jsx(xb,{courseId:l.courseId,lessonId:l.lessonId,projectId:l.projectId,projectStepId:l.stepId,availableCourses:Y,openCourse:se,openProject:ye,openChallenges:j=>Ce(Ul(j)),completedLessons:te,assignments:V,grades:R,onToggleLessonComplete:j=>I(A=>Wg(A,j)),courseColors:_,onSetCourseColor:je,onResetCourseColor:ie},l.courseId):J==="grades"?p.jsx(Lw,{grades:R,assignments:V,completedLessons:te}):J==="challenges"?p.jsx(Pw,{grades:R,filterCourse:l.filterCourse,onSelect:j=>Ce(Xf(j)),onBrowseCourse:j=>Ce(Ul(j))}):J==="challenge"?p.jsx(Rw,{challengeId:l.challengeId,grades:R,onBack:()=>Ce(Ul())},l.challengeId):J==="journals"?p.jsx(Kb,{submissions:we,setSubmissions:He}):J==="teacher"?p.jsx(Fb,{students:he,journalSubmissions:we}):J==="admin"?p.jsx(Ub,{students:he,setStudents:le}):F?p.jsxs("div",{className:"main-content route-not-found",role:"status",children:[p.jsx("h1",{children:"Loading published course materials…"}),p.jsx("p",{children:"The lesson and project links will appear once the course catalogs are loaded."})]}):p.jsxs("div",{className:"main-content route-not-found",children:[p.jsx("div",{className:"eyebrow",children:"Link not found"}),p.jsx("h1",{children:"That playground page doesn't exist."}),p.jsx("p",{children:"Check the link or return to the list of playgrounds."}),p.jsx("button",{className:"btn primary",onClick:()=>Ce(Kl()),children:"See all playgrounds"})]})})]}),p.jsx(Oy,{})]})}vg.createRoot(document.getElementById("root")).render(p.jsx(pg.StrictMode,{children:p.jsx(Iw,{})}));
