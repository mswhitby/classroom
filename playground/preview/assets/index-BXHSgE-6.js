var pg=Object.defineProperty;var hg=(l,u,p)=>u in l?pg(l,u,{enumerable:!0,configurable:!0,writable:!0,value:p}):l[u]=p;var on=(l,u,p)=>hg(l,typeof u!="symbol"?u+"":u,p);(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))g(y);new MutationObserver(y=>{for(const b of y)if(b.type==="childList")for(const _ of b.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&g(_)}).observe(document,{childList:!0,subtree:!0});function p(y){const b={};return y.integrity&&(b.integrity=y.integrity),y.referrerPolicy&&(b.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?b.credentials="include":y.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function g(y){if(y.ep)return;y.ep=!0;const b=p(y);fetch(y.href,b)}})();function Qf(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Cp={exports:{}},Gu={},Tp={exports:{}},Lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function fg(){if(Wh)return Lt;Wh=1;var l=Symbol.for("react.element"),u=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),_=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),I=Symbol.iterator;function R(M){return M===null||typeof M!="object"?null:(M=I&&M[I]||M["@@iterator"],typeof M=="function"?M:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,H={};function oe(M,Q,Se){this.props=M,this.context=Q,this.refs=H,this.updater=Se||V}oe.prototype.isReactComponent={},oe.prototype.setState=function(M,Q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Q,"setState")},oe.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function D(){}D.prototype=oe.prototype;function W(M,Q,Se){this.props=M,this.context=Q,this.refs=H,this.updater=Se||V}var F=W.prototype=new D;F.constructor=W,ee(F,oe.prototype),F.isPureReactComponent=!0;var q=Array.isArray,Y=Object.prototype.hasOwnProperty,he={current:null},le={key:!0,ref:!0,__self:!0,__source:!0};function we(M,Q,Se){var De,qe={},ke=null,Ie=null;if(Q!=null)for(De in Q.ref!==void 0&&(Ie=Q.ref),Q.key!==void 0&&(ke=""+Q.key),Q)Y.call(Q,De)&&!le.hasOwnProperty(De)&&(qe[De]=Q[De]);var Ue=arguments.length-2;if(Ue===1)qe.children=Se;else if(1<Ue){for(var Ke=Array(Ue),tt=0;tt<Ue;tt++)Ke[tt]=arguments[tt+2];qe.children=Ke}if(M&&M.defaultProps)for(De in Ue=M.defaultProps,Ue)qe[De]===void 0&&(qe[De]=Ue[De]);return{$$typeof:l,type:M,key:ke,ref:Ie,props:qe,_owner:he.current}}function He(M,Q){return{$$typeof:l,type:M.type,key:Q,ref:M.ref,props:M.props,_owner:M._owner}}function Ne(M){return typeof M=="object"&&M!==null&&M.$$typeof===l}function ie(M){var Q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(Se){return Q[Se]})}var Te=/\/+/g;function se(M,Q){return typeof M=="object"&&M!==null&&M.key!=null?ie(""+M.key):Q.toString(36)}function ye(M,Q,Se,De,qe){var ke=typeof M;(ke==="undefined"||ke==="boolean")&&(M=null);var Ie=!1;if(M===null)Ie=!0;else switch(ke){case"string":case"number":Ie=!0;break;case"object":switch(M.$$typeof){case l:case u:Ie=!0}}if(Ie)return Ie=M,qe=qe(Ie),M=De===""?"."+se(Ie,0):De,q(qe)?(Se="",M!=null&&(Se=M.replace(Te,"$&/")+"/"),ye(qe,Q,Se,"",function(tt){return tt})):qe!=null&&(Ne(qe)&&(qe=He(qe,Se+(!qe.key||Ie&&Ie.key===qe.key?"":(""+qe.key).replace(Te,"$&/")+"/")+M)),Q.push(qe)),1;if(Ie=0,De=De===""?".":De+":",q(M))for(var Ue=0;Ue<M.length;Ue++){ke=M[Ue];var Ke=De+se(ke,Ue);Ie+=ye(ke,Q,Se,Ke,qe)}else if(Ke=R(M),typeof Ke=="function")for(M=Ke.call(M),Ue=0;!(ke=M.next()).done;)ke=ke.value,Ke=De+se(ke,Ue++),Ie+=ye(ke,Q,Se,Ke,qe);else if(ke==="object")throw Q=String(M),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ie}function L(M,Q,Se){if(M==null)return M;var De=[],qe=0;return ye(M,De,"","",function(ke){return Q.call(Se,ke,qe++)}),De}function J(M){if(M._status===-1){var Q=M._result;Q=Q(),Q.then(function(Se){(M._status===0||M._status===-1)&&(M._status=1,M._result=Se)},function(Se){(M._status===0||M._status===-1)&&(M._status=2,M._result=Se)}),M._status===-1&&(M._status=0,M._result=Q)}if(M._status===1)return M._result.default;throw M._result}var K={current:null},j={transition:null},A={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:j,ReactCurrentOwner:he};function G(){throw Error("act(...) is not supported in production builds of React.")}return Lt.Children={map:L,forEach:function(M,Q,Se){L(M,function(){Q.apply(this,arguments)},Se)},count:function(M){var Q=0;return L(M,function(){Q++}),Q},toArray:function(M){return L(M,function(Q){return Q})||[]},only:function(M){if(!Ne(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Lt.Component=oe,Lt.Fragment=p,Lt.Profiler=y,Lt.PureComponent=W,Lt.StrictMode=g,Lt.Suspense=k,Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,Lt.act=G,Lt.cloneElement=function(M,Q,Se){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var De=ee({},M.props),qe=M.key,ke=M.ref,Ie=M._owner;if(Q!=null){if(Q.ref!==void 0&&(ke=Q.ref,Ie=he.current),Q.key!==void 0&&(qe=""+Q.key),M.type&&M.type.defaultProps)var Ue=M.type.defaultProps;for(Ke in Q)Y.call(Q,Ke)&&!le.hasOwnProperty(Ke)&&(De[Ke]=Q[Ke]===void 0&&Ue!==void 0?Ue[Ke]:Q[Ke])}var Ke=arguments.length-2;if(Ke===1)De.children=Se;else if(1<Ke){Ue=Array(Ke);for(var tt=0;tt<Ke;tt++)Ue[tt]=arguments[tt+2];De.children=Ue}return{$$typeof:l,type:M.type,key:qe,ref:ke,props:De,_owner:Ie}},Lt.createContext=function(M){return M={$$typeof:_,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:b,_context:M},M.Consumer=M},Lt.createElement=we,Lt.createFactory=function(M){var Q=we.bind(null,M);return Q.type=M,Q},Lt.createRef=function(){return{current:null}},Lt.forwardRef=function(M){return{$$typeof:C,render:M}},Lt.isValidElement=Ne,Lt.lazy=function(M){return{$$typeof:N,_payload:{_status:-1,_result:M},_init:J}},Lt.memo=function(M,Q){return{$$typeof:E,type:M,compare:Q===void 0?null:Q}},Lt.startTransition=function(M){var Q=j.transition;j.transition={};try{M()}finally{j.transition=Q}},Lt.unstable_act=G,Lt.useCallback=function(M,Q){return K.current.useCallback(M,Q)},Lt.useContext=function(M){return K.current.useContext(M)},Lt.useDebugValue=function(){},Lt.useDeferredValue=function(M){return K.current.useDeferredValue(M)},Lt.useEffect=function(M,Q){return K.current.useEffect(M,Q)},Lt.useId=function(){return K.current.useId()},Lt.useImperativeHandle=function(M,Q,Se){return K.current.useImperativeHandle(M,Q,Se)},Lt.useInsertionEffect=function(M,Q){return K.current.useInsertionEffect(M,Q)},Lt.useLayoutEffect=function(M,Q){return K.current.useLayoutEffect(M,Q)},Lt.useMemo=function(M,Q){return K.current.useMemo(M,Q)},Lt.useReducer=function(M,Q,Se){return K.current.useReducer(M,Q,Se)},Lt.useRef=function(M){return K.current.useRef(M)},Lt.useState=function(M){return K.current.useState(M)},Lt.useSyncExternalStore=function(M,Q,Se){return K.current.useSyncExternalStore(M,Q,Se)},Lt.useTransition=function(){return K.current.useTransition()},Lt.version="18.3.1",Lt}var Hh;function th(){return Hh||(Hh=1,Tp.exports=fg()),Tp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function mg(){if(Bh)return Gu;Bh=1;var l=th(),u=Symbol.for("react.element"),p=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,y=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function _(C,k,E){var N,I={},R=null,V=null;E!==void 0&&(R=""+E),k.key!==void 0&&(R=""+k.key),k.ref!==void 0&&(V=k.ref);for(N in k)g.call(k,N)&&!b.hasOwnProperty(N)&&(I[N]=k[N]);if(C&&C.defaultProps)for(N in k=C.defaultProps,k)I[N]===void 0&&(I[N]=k[N]);return{$$typeof:u,type:C,key:R,ref:V,props:I,_owner:y.current}}return Gu.Fragment=p,Gu.jsx=_,Gu.jsxs=_,Gu}var Uh;function gg(){return Uh||(Uh=1,Cp.exports=mg()),Cp.exports}var c=gg(),Ce=th();const yg=Qf(Ce);var dd={},jp={exports:{}},ei={},Np={exports:{}},Ep={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function vg(){return qh||(qh=1,(function(l){function u(j,A){var G=j.length;j.push(A);e:for(;0<G;){var M=G-1>>>1,Q=j[M];if(0<y(Q,A))j[M]=A,j[G]=Q,G=M;else break e}}function p(j){return j.length===0?null:j[0]}function g(j){if(j.length===0)return null;var A=j[0],G=j.pop();if(G!==A){j[0]=G;e:for(var M=0,Q=j.length,Se=Q>>>1;M<Se;){var De=2*(M+1)-1,qe=j[De],ke=De+1,Ie=j[ke];if(0>y(qe,G))ke<Q&&0>y(Ie,qe)?(j[M]=Ie,j[ke]=G,M=ke):(j[M]=qe,j[De]=G,M=De);else if(ke<Q&&0>y(Ie,G))j[M]=Ie,j[ke]=G,M=ke;else break e}}return A}function y(j,A){var G=j.sortIndex-A.sortIndex;return G!==0?G:j.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;l.unstable_now=function(){return b.now()}}else{var _=Date,C=_.now();l.unstable_now=function(){return _.now()-C}}var k=[],E=[],N=1,I=null,R=3,V=!1,ee=!1,H=!1,oe=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(j){for(var A=p(E);A!==null;){if(A.callback===null)g(E);else if(A.startTime<=j)g(E),A.sortIndex=A.expirationTime,u(k,A);else break;A=p(E)}}function q(j){if(H=!1,F(j),!ee)if(p(k)!==null)ee=!0,J(Y);else{var A=p(E);A!==null&&K(q,A.startTime-j)}}function Y(j,A){ee=!1,H&&(H=!1,D(we),we=-1),V=!0;var G=R;try{for(F(A),I=p(k);I!==null&&(!(I.expirationTime>A)||j&&!ie());){var M=I.callback;if(typeof M=="function"){I.callback=null,R=I.priorityLevel;var Q=M(I.expirationTime<=A);A=l.unstable_now(),typeof Q=="function"?I.callback=Q:I===p(k)&&g(k),F(A)}else g(k);I=p(k)}if(I!==null)var Se=!0;else{var De=p(E);De!==null&&K(q,De.startTime-A),Se=!1}return Se}finally{I=null,R=G,V=!1}}var he=!1,le=null,we=-1,He=5,Ne=-1;function ie(){return!(l.unstable_now()-Ne<He)}function Te(){if(le!==null){var j=l.unstable_now();Ne=j;var A=!0;try{A=le(!0,j)}finally{A?se():(he=!1,le=null)}}else he=!1}var se;if(typeof W=="function")se=function(){W(Te)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,L=ye.port2;ye.port1.onmessage=Te,se=function(){L.postMessage(null)}}else se=function(){oe(Te,0)};function J(j){le=j,he||(he=!0,se())}function K(j,A){we=oe(function(){j(l.unstable_now())},A)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(j){j.callback=null},l.unstable_continueExecution=function(){ee||V||(ee=!0,J(Y))},l.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<j?Math.floor(1e3/j):5},l.unstable_getCurrentPriorityLevel=function(){return R},l.unstable_getFirstCallbackNode=function(){return p(k)},l.unstable_next=function(j){switch(R){case 1:case 2:case 3:var A=3;break;default:A=R}var G=R;R=A;try{return j()}finally{R=G}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(j,A){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var G=R;R=j;try{return A()}finally{R=G}},l.unstable_scheduleCallback=function(j,A,G){var M=l.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?M+G:M):G=M,j){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=G+Q,j={id:N++,callback:A,priorityLevel:j,startTime:G,expirationTime:Q,sortIndex:-1},G>M?(j.sortIndex=G,u(E,j),p(k)===null&&j===p(E)&&(H?(D(we),we=-1):H=!0,K(q,G-M))):(j.sortIndex=Q,u(k,j),ee||V||(ee=!0,J(Y))),j},l.unstable_shouldYield=ie,l.unstable_wrapCallback=function(j){var A=R;return function(){var G=R;R=A;try{return j.apply(this,arguments)}finally{R=G}}}})(Ep)),Ep}var Kh;function xg(){return Kh||(Kh=1,Np.exports=vg()),Np.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function bg(){if($h)return ei;$h=1;var l=th(),u=xg();function p(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g=new Set,y={};function b(t,r){_(t,r),_(t+"Capture",r)}function _(t,r){for(y[t]=r,t=0;t<r.length;t++)g.add(r[t])}var C=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},I={};function R(t){return k.call(I,t)?!0:k.call(N,t)?!1:E.test(t)?I[t]=!0:(N[t]=!0,!1)}function V(t,r,a,d){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ee(t,r,a,d){if(r===null||typeof r>"u"||V(t,r,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function H(t,r,a,d,f,v,P){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=v,this.removeEmptyString=P}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){oe[t]=new H(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];oe[r]=new H(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){oe[t]=new H(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){oe[t]=new H(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){oe[t]=new H(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){oe[t]=new H(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){oe[t]=new H(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){oe[t]=new H(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){oe[t]=new H(t,5,!1,t.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function W(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(D,W);oe[r]=new H(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(D,W);oe[r]=new H(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(D,W);oe[r]=new H(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){oe[t]=new H(t,1,!1,t.toLowerCase(),null,!1,!1)}),oe.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){oe[t]=new H(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,r,a,d){var f=oe.hasOwnProperty(r)?oe[r]:null;(f!==null?f.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(ee(r,a,f,d)&&(a=null),d||f===null?R(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(r=f.attributeName,d=f.attributeNamespace,a===null?t.removeAttribute(r):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,d?t.setAttributeNS(d,r,a):t.setAttribute(r,a))))}var q=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),he=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),we=Symbol.for("react.strict_mode"),He=Symbol.for("react.profiler"),Ne=Symbol.for("react.provider"),ie=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),j=Symbol.iterator;function A(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,M;function Q(t){if(M===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);M=r&&r[1]||""}return`
`+M+t}var Se=!1;function De(t,r){if(!t||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(pe){var d=pe}Reflect.construct(t,[],r)}else{try{r.call()}catch(pe){d=pe}t.call(r.prototype)}else{try{throw Error()}catch(pe){d=pe}t()}}catch(pe){if(pe&&d&&typeof pe.stack=="string"){for(var f=pe.stack.split(`
`),v=d.stack.split(`
`),P=f.length-1,$=v.length-1;1<=P&&0<=$&&f[P]!==v[$];)$--;for(;1<=P&&0<=$;P--,$--)if(f[P]!==v[$]){if(P!==1||$!==1)do if(P--,$--,0>$||f[P]!==v[$]){var X=`
`+f[P].replace(" at new "," at ");return t.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",t.displayName)),X}while(1<=P&&0<=$);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?Q(t):""}function qe(t){switch(t.tag){case 5:return Q(t.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return t=De(t.type,!1),t;case 11:return t=De(t.type.render,!1),t;case 1:return t=De(t.type,!0),t;default:return""}}function ke(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case le:return"Fragment";case he:return"Portal";case He:return"Profiler";case we:return"StrictMode";case se:return"Suspense";case ye:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ie:return(t.displayName||"Context")+".Consumer";case Ne:return(t._context.displayName||"Context")+".Provider";case Te:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return r=t.displayName||null,r!==null?r:ke(t.type)||"Memo";case J:r=t._payload,t=t._init;try{return ke(t(r))}catch{}}return null}function Ie(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===we?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ue(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ke(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function tt(t){var r=Ke(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),d=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,v=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(P){d=""+P,v.call(this,P)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(P){d=""+P},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function $e(t){t._valueTracker||(t._valueTracker=tt(t))}function Ht(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),d="";return t&&(d=Ke(t)?t.checked?"true":"false":t.value),t=d,t!==a?(r.setValue(t),!0):!1}function Gt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _t(t,r){var a=r.checked;return G({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function vt(t,r){var a=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;a=Ue(r.value!=null?r.value:a),t._wrapperState={initialChecked:d,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function We(t,r){r=r.checked,r!=null&&F(t,"checked",r,!1)}function rt(t,r){We(t,r);var a=Ue(r.value),d=r.type;if(a!=null)d==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(d==="submit"||d==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Kt(t,r.type,a):r.hasOwnProperty("defaultValue")&&Kt(t,r.type,Ue(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function et(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Kt(t,r,a){(r!=="number"||Gt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ge=Array.isArray;function ht(t,r,a,d){if(t=t.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=r.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&d&&(t[a].defaultSelected=!0)}else{for(a=""+Ue(a),r=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,d&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function ae(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(p(91));return G({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _e(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(p(92));if(Ge(a)){if(1<a.length)throw Error(p(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:Ue(a)}}function ge(t,r){var a=Ue(r.value),d=Ue(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),d!=null&&(t.defaultValue=""+d)}function wt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Je(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Je(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ve,yt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,d,f){MSApp.execUnsafeLocalFunction(function(){return t(r,a,d,f)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ve=Ve||document.createElement("div"),Ve.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ve.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function pt(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jn=["Webkit","ms","Moz","O"];Object.keys(mn).forEach(function(t){Jn.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),mn[r]=mn[t]})});function Cr(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||mn.hasOwnProperty(t)&&mn[t]?(""+r).trim():r+"px"}function Hr(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var d=a.indexOf("--")===0,f=Cr(a,r[a],d);a==="float"&&(a="cssFloat"),d?t.setProperty(a,f):t[a]=f}}var ar=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xi(t,r){if(r){if(ar[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(p(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(p(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(p(61))}if(r.style!=null&&typeof r.style!="object")throw Error(p(62))}}function xt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=null;function it(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tr=null,Jt=null,It=null;function Ot(t){if(t=pn(t)){if(typeof Tr!="function")throw Error(p(280));var r=t.stateNode;r&&(r=yn(r),Tr(t.stateNode,t.type,r))}}function Nn(t){Jt?It?It.push(t):It=[t]:Jt=t}function cn(){if(Jt){var t=Jt,r=It;if(It=Jt=null,Ot(t),r)for(t=0;t<r.length;t++)Ot(r[t])}}function lr(t,r){return t(r)}function wn(){}var ri=!1;function In(t,r,a){if(ri)return t(r,a);ri=!0;try{return lr(t,r,a)}finally{ri=!1,(Jt!==null||It!==null)&&(wn(),cn())}}function ur(t,r){var a=t.stateNode;if(a===null)return null;var d=yn(a);if(d===null)return null;a=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(t=t.type,d=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!d;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(p(231,r,typeof a));return a}var Br=!1;if(C)try{var En={};Object.defineProperty(En,"passive",{get:function(){Br=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Br=!1}function jr(t,r,a,d,f,v,P,$,X){var pe=Array.prototype.slice.call(arguments,3);try{r.apply(a,pe)}catch(Re){this.onError(Re)}}var Xn=!1,ii=null,Ur=!1,qr=null,cr={onError:function(t){Xn=!0,ii=t}};function Kr(t,r,a,d,f,v,P,$,X){Xn=!1,ii=null,jr.apply(cr,arguments)}function As(t,r,a,d,f,v,P,$,X){if(Kr.apply(this,arguments),Xn){if(Xn){var pe=ii;Xn=!1,ii=null}else throw Error(p(198));Ur||(Ur=!0,qr=pe)}}function kn(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function vo(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Rr(t){if(kn(t)!==t)throw Error(p(188))}function Ir(t){var r=t.alternate;if(!r){if(r=kn(t),r===null)throw Error(p(188));return r!==t?null:t}for(var a=t,d=r;;){var f=a.return;if(f===null)break;var v=f.alternate;if(v===null){if(d=f.return,d!==null){a=d;continue}break}if(f.child===v.child){for(v=f.child;v;){if(v===a)return Rr(f),t;if(v===d)return Rr(f),r;v=v.sibling}throw Error(p(188))}if(a.return!==d.return)a=f,d=v;else{for(var P=!1,$=f.child;$;){if($===a){P=!0,a=f,d=v;break}if($===d){P=!0,d=f,a=v;break}$=$.sibling}if(!P){for($=v.child;$;){if($===a){P=!0,a=v,d=f;break}if($===d){P=!0,d=v,a=f;break}$=$.sibling}if(!P)throw Error(p(189))}}if(a.alternate!==d)throw Error(p(190))}if(a.tag!==3)throw Error(p(188));return a.stateNode.current===a?t:r}function Nr(t){return t=Ir(t),t!==null?Bt(t):null}function Bt(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Bt(t);if(r!==null)return r;t=t.sibling}return null}var Er=u.unstable_scheduleCallback,Fi=u.unstable_cancelCallback,si=u.unstable_shouldYield,bi=u.unstable_requestPaint,At=u.unstable_now,as=u.unstable_getCurrentPriorityLevel,wi=u.unstable_ImmediatePriority,Xt=u.unstable_UserBlockingPriority,Qe=u.unstable_NormalPriority,oi=u.unstable_LowPriority,dr=u.unstable_IdlePriority,On=null,T=null;function B(t){if(T&&typeof T.onCommitFiberRoot=="function")try{T.onCommitFiberRoot(On,t,void 0,(t.current.flags&128)===128)}catch{}}var fe=Math.clz32?Math.clz32:Be,Ee=Math.log,de=Math.LN2;function Be(t){return t>>>=0,t===0?32:31-(Ee(t)/de|0)|0}var Tt=64,en=4194304;function Sn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ai(t,r){var a=t.pendingLanes;if(a===0)return 0;var d=0,f=t.suspendedLanes,v=t.pingedLanes,P=a&268435455;if(P!==0){var $=P&~f;$!==0?d=Sn($):(v&=P,v!==0&&(d=Sn(v)))}else P=a&~f,P!==0?d=Sn(P):v!==0&&(d=Sn(v));if(d===0)return 0;if(r!==0&&r!==d&&(r&f)===0&&(f=d&-d,v=r&-r,f>=v||f===16&&(v&4194240)!==0))return r;if((d&4)!==0&&(d|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=d;0<r;)a=31-fe(r),f=1<<a,d|=t[a],r&=~f;return d}function Za(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(t,r){for(var a=t.suspendedLanes,d=t.pingedLanes,f=t.expirationTimes,v=t.pendingLanes;0<v;){var P=31-fe(v),$=1<<P,X=f[P];X===-1?(($&a)===0||($&d)!==0)&&(f[P]=Za($,r)):X<=r&&(t.expiredLanes|=$),v&=~$}}function xo(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sa(){var t=Tt;return Tt<<=1,(Tt&4194240)===0&&(Tt=64),t}function Wi(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Kn(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-fe(r),t[r]=a}function Rs(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var d=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-fe(a),v=1<<f;r[f]=0,d[f]=-1,t[f]=-1,a&=~v}}function ls(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var d=31-fe(a),f=1<<d;f&r|t[d]&r&&(t[d]|=r),a&=~f}}var Et=0;function Hi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var $r,li,pr,oa,us,bo=!1,Is=[],hr=null,Or=null,Mn=null,Os=new Map,cs=new Map,Mr=[],Ms="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function aa(t,r){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Os.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(r.pointerId)}}function Bi(t,r,a,d,f,v){return t===null||t.nativeEvent!==v?(t={blockedOn:r,domEventName:a,eventSystemFlags:d,nativeEvent:v,targetContainers:[f]},r!==null&&(r=pn(r),r!==null&&li(r)),t):(t.eventSystemFlags|=d,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function Ds(t,r,a,d,f){switch(r){case"focusin":return hr=Bi(hr,t,r,a,d,f),!0;case"dragenter":return Or=Bi(Or,t,r,a,d,f),!0;case"mouseover":return Mn=Bi(Mn,t,r,a,d,f),!0;case"pointerover":var v=f.pointerId;return Os.set(v,Bi(Os.get(v)||null,t,r,a,d,f)),!0;case"gotpointercapture":return v=f.pointerId,cs.set(v,Bi(cs.get(v)||null,t,r,a,d,f)),!0}return!1}function wo(t){var r=Ln(t.target);if(r!==null){var a=kn(r);if(a!==null){if(r=a.tag,r===13){if(r=vo(a),r!==null){t.blockedOn=r,us(t.priority,function(){pr(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function je(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=$n(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var d=new a.constructor(a.type,a);zi=d,a.target.dispatchEvent(d),zi=null}else return r=pn(a),r!==null&&li(r),t.blockedOn=a,!1;r.shift()}return!0}function O(t,r,a){je(t)&&a.delete(r)}function te(){bo=!1,hr!==null&&je(hr)&&(hr=null),Or!==null&&je(Or)&&(Or=null),Mn!==null&&je(Mn)&&(Mn=null),Os.forEach(O),cs.forEach(O)}function xe(t,r){t.blockedOn===r&&(t.blockedOn=null,bo||(bo=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,te)))}function be(t){function r(f){return xe(f,t)}if(0<Is.length){xe(Is[0],t);for(var a=1;a<Is.length;a++){var d=Is[a];d.blockedOn===t&&(d.blockedOn=null)}}for(hr!==null&&xe(hr,t),Or!==null&&xe(Or,t),Mn!==null&&xe(Mn,t),Os.forEach(r),cs.forEach(r),a=0;a<Mr.length;a++)d=Mr[a],d.blockedOn===t&&(d.blockedOn=null);for(;0<Mr.length&&(a=Mr[0],a.blockedOn===null);)wo(a),a.blockedOn===null&&Mr.shift()}var nt=q.ReactCurrentBatchConfig,ct=!0;function Ct(t,r,a,d){var f=Et,v=nt.transition;nt.transition=null;try{Et=1,fr(t,r,a,d)}finally{Et=f,nt.transition=v}}function gn(t,r,a,d){var f=Et,v=nt.transition;nt.transition=null;try{Et=4,fr(t,r,a,d)}finally{Et=f,nt.transition=v}}function fr(t,r,a,d){if(ct){var f=$n(t,r,a,d);if(f===null)hu(t,r,d,dn,a),aa(t,d);else if(Ds(f,t,r,a,d))d.stopPropagation();else if(aa(t,d),r&4&&-1<Ms.indexOf(t)){for(;f!==null;){var v=pn(f);if(v!==null&&$r(v),v=$n(t,r,a,d),v===null&&hu(t,r,d,dn,a),v===f)break;f=v}f!==null&&d.stopPropagation()}else hu(t,r,d,null,a)}}var dn=null;function $n(t,r,a,d){if(dn=null,t=it(d),t=Ln(t),t!==null)if(r=kn(t),r===null)t=null;else if(a=r.tag,a===13){if(t=vo(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return dn=t,null}function ki(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(as()){case wi:return 1;case Xt:return 4;case Qe:case oi:return 16;case dr:return 536870912;default:return 16}default:return 16}}var Rt=null,ko=null,el=null;function tl(){if(el)return el;var t,r=ko,a=r.length,d,f="value"in Rt?Rt.value:Rt.textContent,v=f.length;for(t=0;t<a&&r[t]===f[t];t++);var P=a-t;for(d=1;d<=P&&r[a-d]===f[v-d];d++);return el=f.slice(t,1<d?1-d:void 0)}function la(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function ui(){return!0}function nl(){return!1}function _n(t){function r(a,d,f,v,P){this._reactName=a,this._targetInst=f,this.type=d,this.nativeEvent=v,this.target=P,this.currentTarget=null;for(var $ in t)t.hasOwnProperty($)&&(a=t[$],this[$]=a?a(v):v[$]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?ui:nl,this.isPropagationStopped=nl,this}return G(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),r}var Ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ua=_n(Ui),Si=G({},Ui,{view:0,detail:0}),Hd=_n(Si),Jl,Xl,ca,da=G({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(Jl=t.screenX-ca.screenX,Xl=t.screenY-ca.screenY):Xl=Jl=0,ca=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),Ql=_n(da),Bd=G({},da,{dataTransfer:0}),Ud=_n(Bd),qd=G({},Si,{relatedTarget:0}),Zl=_n(qd),pc=G({},Ui,{animationName:0,elapsedTime:0,pseudoElement:0}),Kd=_n(pc),hc=G({},Ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rl=_n(hc),So=G({},Ui,{data:0}),fc=_n(So),$d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pa={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dn(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=pa[t])?!!r[t]:!1}function eu(){return Dn}var mc=G({},Si,{key:function(t){if(t.key){var r=$d[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ha=_n(mc),Yd=G({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=_n(Yd),Vd=G({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),nu=_n(Vd),gc=G({},Ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jd=_n(gc),Xd=G({},da,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yc=_n(Xd),vc=[9,13,27,32],ru=C&&"CompositionEvent"in window,qi=null;C&&"documentMode"in document&&(qi=document.documentMode);var Ki=C&&"TextEvent"in window&&!qi,fa=C&&(!ru||qi&&8<qi&&11>=qi),il=" ",iu=!1;function ci(t,r){switch(t){case"keyup":return vc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ds(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function Qd(t,r){switch(t){case"compositionend":return ds(r);case"keypress":return r.which!==32?null:(iu=!0,il);case"textInput":return t=r.data,t===il&&iu?null:t;default:return null}}function xc(t,r){if(ps)return t==="compositionend"||!ru&&ci(t,r)?(t=tl(),el=ko=Rt=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return fa&&r.locale!=="ko"?null:r.data;default:return null}}var Zd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function su(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Zd[t.type]:r==="textarea"}function sl(t,r,a,d){Nn(d),r=Eo(r,"onChange"),0<r.length&&(a=new ua("onChange","change",null,a,d),t.push({event:a,listeners:r}))}var _i=null,Lr=null;function bc(t){ml(t,0)}function ma(t){var r=Tn(t);if(Ht(r))return t}function ep(t,r){if(t==="change")return r}var wc=!1;if(C){var ou;if(C){var ol="oninput"in document;if(!ol){var au=document.createElement("div");au.setAttribute("oninput","return;"),ol=typeof au.oninput=="function"}ou=ol}else ou=!1;wc=ou&&(!document.documentMode||9<document.documentMode)}function _o(){_i&&(_i.detachEvent("onpropertychange",lu),Lr=_i=null)}function lu(t){if(t.propertyName==="value"&&ma(Lr)){var r=[];sl(r,Lr,t,it(t)),In(bc,r)}}function kc(t,r,a){t==="focusin"?(_o(),_i=r,Lr=a,_i.attachEvent("onpropertychange",lu)):t==="focusout"&&_o()}function uu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ma(Lr)}function al(t,r){if(t==="click")return ma(r)}function Sc(t,r){if(t==="input"||t==="change")return ma(r)}function ll(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Cn=typeof Object.is=="function"?Object.is:ll;function Co(t,r){if(Cn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),d=Object.keys(r);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var f=a[d];if(!k.call(r,f)||!Cn(t[f],r[f]))return!1}return!0}function ul(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cl(t,r){var a=ul(t);t=0;for(var d;a;){if(a.nodeType===3){if(d=t+a.textContent.length,t<=r&&d>=r)return{node:a,offset:r-t};t=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ul(a)}}function cu(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?cu(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function du(){for(var t=window,r=Gt();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Gt(t.document)}return r}function ga(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function tp(t){var r=du(),a=t.focusedElem,d=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&cu(a.ownerDocument.documentElement,a)){if(d!==null&&ga(a)){if(r=d.start,t=d.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,v=Math.min(d.start,f);d=d.end===void 0?v:Math.min(d.end,f),!t.extend&&v>d&&(f=d,d=v,v=f),f=cl(a,v);var P=cl(a,d);f&&P&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==P.node||t.focusOffset!==P.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),v>d?(t.addRange(r),t.extend(P.node,P.offset)):(r.setEnd(P.node,P.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var np=C&&"documentMode"in document&&11>=document.documentMode,To=null,$i=null,Ci=null,hs=!1;function dl(t,r,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hs||To==null||To!==Gt(d)||(d=To,"selectionStart"in d&&ga(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Ci&&Co(Ci,d)||(Ci=d,d=Eo($i,"onSelect"),0<d.length&&(r=new ua("onSelect","select",null,r,a),t.push({event:r,listeners:d}),r.target=To)))}function jo(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var zs={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},ya={},fs={};C&&(fs=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Ti(t){if(ya[t])return ya[t];if(!zs[t])return t;var r=zs[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in fs)return ya[t]=r[a];return t}var er=Ti("animationend"),Gi=Ti("animationiteration"),Yi=Ti("animationstart"),va=Ti("transitionend"),_c=new Map,pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,r){_c.set(t,r),b(r,[t])}for(var pl=0;pl<pu.length;pl++){var xa=pu[pl],hl=xa.toLowerCase(),rp=xa[0].toUpperCase()+xa.slice(1);Gr(hl,"on"+rp)}Gr(er,"onAnimationEnd"),Gr(Gi,"onAnimationIteration"),Gr(Yi,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(va,"onTransitionEnd"),_("onMouseEnter",["mouseout","mouseover"]),_("onMouseLeave",["mouseout","mouseover"]),_("onPointerEnter",["pointerout","pointerover"]),_("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function fl(t,r,a){var d=t.type||"unknown-event";t.currentTarget=a,As(d,r,void 0,t),t.currentTarget=null}function ml(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var d=t[a],f=d.event;d=d.listeners;e:{var v=void 0;if(r)for(var P=d.length-1;0<=P;P--){var $=d[P],X=$.instance,pe=$.currentTarget;if($=$.listener,X!==v&&f.isPropagationStopped())break e;fl(f,$,pe),v=X}else for(P=0;P<d.length;P++){if($=d[P],X=$.instance,pe=$.currentTarget,$=$.listener,X!==v&&f.isPropagationStopped())break e;fl(f,$,pe),v=X}}}if(Ur)throw t=qr,Ur=!1,qr=null,t}function Ut(t,r){var a=r[fu];a===void 0&&(a=r[fu]=new Set);var d=t+"__bubble";a.has(d)||(Tc(r,t,2,!1),a.add(d))}function No(t,r,a){var d=0;r&&(d|=4),Tc(a,t,d,r)}var ba="_reactListening"+Math.random().toString(36).slice(2);function ms(t){if(!t[ba]){t[ba]=!0,g.forEach(function(a){a!=="selectionchange"&&(Cc.has(a)||No(a,!1,t),No(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ba]||(r[ba]=!0,No("selectionchange",!1,r))}}function Tc(t,r,a,d){switch(ki(r)){case 1:var f=Ct;break;case 4:f=gn;break;default:f=fr}a=f.bind(null,r,a,t),f=void 0,!Br||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),d?f!==void 0?t.addEventListener(r,a,{capture:!0,passive:f}):t.addEventListener(r,a,!0):f!==void 0?t.addEventListener(r,a,{passive:f}):t.addEventListener(r,a,!1)}function hu(t,r,a,d,f){var v=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var P=d.tag;if(P===3||P===4){var $=d.stateNode.containerInfo;if($===f||$.nodeType===8&&$.parentNode===f)break;if(P===4)for(P=d.return;P!==null;){var X=P.tag;if((X===3||X===4)&&(X=P.stateNode.containerInfo,X===f||X.nodeType===8&&X.parentNode===f))return;P=P.return}for(;$!==null;){if(P=Ln($),P===null)return;if(X=P.tag,X===5||X===6){d=v=P;continue e}$=$.parentNode}}d=d.return}In(function(){var pe=v,Re=it(a),Oe=[];e:{var Pe=_c.get(t);if(Pe!==void 0){var Ze=ua,st=t;switch(t){case"keypress":if(la(a)===0)break e;case"keydown":case"keyup":Ze=ha;break;case"focusin":st="focus",Ze=Zl;break;case"focusout":st="blur",Ze=Zl;break;case"beforeblur":case"afterblur":Ze=Zl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ze=Ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ze=Ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ze=nu;break;case er:case Gi:case Yi:Ze=Kd;break;case va:Ze=Jd;break;case"scroll":Ze=Hd;break;case"wheel":Ze=yc;break;case"copy":case"cut":case"paste":Ze=rl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ze=tu}var ot=(r&4)!==0,qn=!ot&&t==="scroll",ue=ot?Pe!==null?Pe+"Capture":null:Pe;ot=[];for(var ne=pe,ce;ne!==null;){ce=ne;var Fe=ce.stateNode;if(ce.tag===5&&Fe!==null&&(ce=Fe,ue!==null&&(Fe=ur(ne,ue),Fe!=null&&ot.push(wa(ne,Fe,ce)))),qn)break;ne=ne.return}0<ot.length&&(Pe=new Ze(Pe,st,null,a,Re),Oe.push({event:Pe,listeners:ot}))}}if((r&7)===0){e:{if(Pe=t==="mouseover"||t==="pointerover",Ze=t==="mouseout"||t==="pointerout",Pe&&a!==zi&&(st=a.relatedTarget||a.fromElement)&&(Ln(st)||st[Xi]))break e;if((Ze||Pe)&&(Pe=Re.window===Re?Re:(Pe=Re.ownerDocument)?Pe.defaultView||Pe.parentWindow:window,Ze?(st=a.relatedTarget||a.toElement,Ze=pe,st=st?Ln(st):null,st!==null&&(qn=kn(st),st!==qn||st.tag!==5&&st.tag!==6)&&(st=null)):(Ze=null,st=pe),Ze!==st)){if(ot=Ql,Fe="onMouseLeave",ue="onMouseEnter",ne="mouse",(t==="pointerout"||t==="pointerover")&&(ot=tu,Fe="onPointerLeave",ue="onPointerEnter",ne="pointer"),qn=Ze==null?Pe:Tn(Ze),ce=st==null?Pe:Tn(st),Pe=new ot(Fe,ne+"leave",Ze,a,Re),Pe.target=qn,Pe.relatedTarget=ce,Fe=null,Ln(Re)===pe&&(ot=new ot(ue,ne+"enter",st,a,Re),ot.target=ce,ot.relatedTarget=qn,Fe=ot),qn=Fe,Ze&&st)t:{for(ot=Ze,ue=st,ne=0,ce=ot;ce;ce=gs(ce))ne++;for(ce=0,Fe=ue;Fe;Fe=gs(Fe))ce++;for(;0<ne-ce;)ot=gs(ot),ne--;for(;0<ce-ne;)ue=gs(ue),ce--;for(;ne--;){if(ot===ue||ue!==null&&ot===ue.alternate)break t;ot=gs(ot),ue=gs(ue)}ot=null}else ot=null;Ze!==null&&Ws(Oe,Pe,Ze,ot,!1),st!==null&&qn!==null&&Ws(Oe,qn,st,ot,!0)}}e:{if(Pe=pe?Tn(pe):window,Ze=Pe.nodeName&&Pe.nodeName.toLowerCase(),Ze==="select"||Ze==="input"&&Pe.type==="file")var ut=ep;else if(su(Pe))if(wc)ut=Sc;else{ut=uu;var ft=kc}else(Ze=Pe.nodeName)&&Ze.toLowerCase()==="input"&&(Pe.type==="checkbox"||Pe.type==="radio")&&(ut=al);if(ut&&(ut=ut(t,pe))){sl(Oe,ut,a,Re);break e}ft&&ft(t,Pe,pe),t==="focusout"&&(ft=Pe._wrapperState)&&ft.controlled&&Pe.type==="number"&&Kt(Pe,"number",Pe.value)}switch(ft=pe?Tn(pe):window,t){case"focusin":(su(ft)||ft.contentEditable==="true")&&(To=ft,$i=pe,Ci=null);break;case"focusout":Ci=$i=To=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,dl(Oe,a,Re);break;case"selectionchange":if(np)break;case"keydown":case"keyup":dl(Oe,a,Re)}var mt;if(ru)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else ps?ci(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(fa&&a.locale!=="ko"&&(ps||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&ps&&(mt=tl()):(Rt=Re,ko="value"in Rt?Rt.value:Rt.textContent,ps=!0)),ft=Eo(pe,bt),0<ft.length&&(bt=new fc(bt,t,null,a,Re),Oe.push({event:bt,listeners:ft}),mt?bt.data=mt:(mt=ds(a),mt!==null&&(bt.data=mt)))),(mt=Ki?Qd(t,a):xc(t,a))&&(pe=Eo(pe,"onBeforeInput"),0<pe.length&&(Re=new fc("onBeforeInput","beforeinput",null,a,Re),Oe.push({event:Re,listeners:pe}),Re.data=mt))}ml(Oe,r)})}function wa(t,r,a){return{instance:t,listener:r,currentTarget:a}}function Eo(t,r){for(var a=r+"Capture",d=[];t!==null;){var f=t,v=f.stateNode;f.tag===5&&v!==null&&(f=v,v=ur(t,a),v!=null&&d.unshift(wa(t,v,f)),v=ur(t,r),v!=null&&d.push(wa(t,v,f))),t=t.return}return d}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ws(t,r,a,d,f){for(var v=r._reactName,P=[];a!==null&&a!==d;){var $=a,X=$.alternate,pe=$.stateNode;if(X!==null&&X===d)break;$.tag===5&&pe!==null&&($=pe,f?(X=ur(a,v),X!=null&&P.unshift(wa(a,X,$))):f||(X=ur(a,v),X!=null&&P.push(wa(a,X,$)))),a=a.return}P.length!==0&&t.push({event:r,listeners:P})}var ka=/\r\n?/g,ip=/\u0000|\uFFFD/g;function Sa(t){return(typeof t=="string"?t:""+t).replace(ka,`
`).replace(ip,"")}function _a(t,r,a){if(r=Sa(r),Sa(t)!==r&&a)throw Error(p(425))}function ys(){}var gl=null,Vi=null;function Hs(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,Ca=typeof clearTimeout=="function"?clearTimeout:void 0,Bs=typeof Promise=="function"?Promise:void 0,jc=typeof queueMicrotask=="function"?queueMicrotask:typeof Bs<"u"?function(t){return Bs.resolve(null).then(t).catch(Nc)}:Ji;function Nc(t){setTimeout(function(){throw t})}function yl(t,r){var a=r,d=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(d===0){t.removeChild(f),be(r);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=f}while(a);be(r)}function vs(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function xs(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),ji="__reactFiber$"+Yr,Ta="__reactProps$"+Yr,Xi="__reactContainer$"+Yr,fu="__reactEvents$"+Yr,sp="__reactListeners$"+Yr,op="__reactHandles$"+Yr;function Ln(t){var r=t[ji];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Xi]||a[ji]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=xs(t);t!==null;){if(a=t[ji])return a;t=xs(t)}return r}t=a,a=t.parentNode}return null}function pn(t){return t=t[ji]||t[Xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Tn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(p(33))}function yn(t){return t[Ta]||null}var Us=[],Lo=-1;function di(t){return{current:t}}function tn(t){0>Lo||(t.current=Us[Lo],Us[Lo]=null,Lo--)}function Qt(t,r){Lo++,Us[Lo]=t.current,t.current=r}var bs={},Gn=di(bs),mr=di(!1),Qi=bs;function Po(t,r){var a=t.type.contextTypes;if(!a)return bs;var d=t.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var f={},v;for(v in a)f[v]=r[v];return d&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function tr(t){return t=t.childContextTypes,t!=null}function Ao(){tn(mr),tn(Gn)}function mu(t,r,a){if(Gn.current!==bs)throw Error(p(168));Qt(Gn,r),Qt(mr,a)}function gu(t,r,a){var d=t.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var f in d)if(!(f in r))throw Error(p(108,Ie(t)||"Unknown",f));return G({},a,d)}function Ro(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||bs,Qi=Gn.current,Qt(Gn,t),Qt(mr,mr.current),!0}function yu(t,r,a){var d=t.stateNode;if(!d)throw Error(p(169));a?(t=gu(t,r,Qi),d.__reactInternalMemoizedMergedChildContext=t,tn(mr),tn(Gn),Qt(Gn,t)):tn(mr),Qt(mr,a)}var Dr=null,vl=!1,Io=!1;function Ni(t){Dr===null?Dr=[t]:Dr.push(t)}function Ec(t){vl=!0,Ni(t)}function ws(){if(!Io&&Dr!==null){Io=!0;var t=0,r=Et;try{var a=Dr;for(Et=1;t<a.length;t++){var d=a[t];do d=d(!0);while(d!==null)}Dr=null,vl=!1}catch(f){throw Dr!==null&&(Dr=Dr.slice(t+1)),Er(wi,ws),f}finally{Et=r,Io=!1}}return null}var qs=[],Yn=0,Pt=null,Pr=0,zn=[],Fn=0,ks=null,pi=1,Ei="";function Ks(t,r){qs[Yn++]=Pr,qs[Yn++]=Pt,Pt=t,Pr=r}function xl(t,r,a){zn[Fn++]=pi,zn[Fn++]=Ei,zn[Fn++]=ks,ks=t;var d=pi;t=Ei;var f=32-fe(d)-1;d&=~(1<<f),a+=1;var v=32-fe(r)+f;if(30<v){var P=f-f%5;v=(d&(1<<P)-1).toString(32),d>>=P,f-=P,pi=1<<32-fe(r)+f|a<<f|d,Ei=v+t}else pi=1<<v|a<<f|d,Ei=t}function $s(t){t.return!==null&&(Ks(t,1),xl(t,1,0))}function bl(t){for(;t===Pt;)Pt=qs[--Yn],qs[Yn]=null,Pr=qs[--Yn],qs[Yn]=null;for(;t===ks;)ks=zn[--Fn],zn[Fn]=null,Ei=zn[--Fn],zn[Fn]=null,pi=zn[--Fn],zn[Fn]=null}var gr=null,Pn=null,nn=!1,Vr=null;function Lc(t,r){var a=Mi(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function ja(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,gr=t,Pn=vs(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,gr=t,Pn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ks!==null?{id:pi,overflow:Ei}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Mi(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,gr=t,Pn=null,!0):!1;default:return!1}}function Na(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wl(t){if(nn){var r=Pn;if(r){var a=r;if(!ja(t,r)){if(Na(t))throw Error(p(418));r=vs(a.nextSibling);var d=gr;r&&ja(t,r)?Lc(d,a):(t.flags=t.flags&-4097|2,nn=!1,gr=t)}}else{if(Na(t))throw Error(p(418));t.flags=t.flags&-4097|2,nn=!1,gr=t}}}function Pc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gr=t}function Ea(t){if(t!==gr)return!1;if(!nn)return Pc(t),nn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Hs(t.type,t.memoizedProps)),r&&(r=Pn)){if(Na(t))throw Ac(),Error(p(418));for(;r;)Lc(t,r),r=vs(r.nextSibling)}if(Pc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){Pn=vs(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}Pn=null}}else Pn=gr?vs(t.stateNode.nextSibling):null;return!0}function Ac(){for(var t=Pn;t;)t=vs(t.nextSibling)}function Oo(){Pn=gr=null,nn=!1}function Mo(t){Vr===null?Vr=[t]:Vr.push(t)}var Rc=q.ReactCurrentBatchConfig;function La(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(p(309));var d=a.stateNode}if(!d)throw Error(p(147,t));var f=d,v=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(P){var $=f.refs;P===null?delete $[v]:$[v]=P},r._stringRef=v,r)}if(typeof t!="string")throw Error(p(284));if(!a._owner)throw Error(p(290,t))}return t}function kl(t,r){throw t=Object.prototype.toString.call(r),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function vu(t){var r=t._init;return r(t._payload)}function Gs(t){function r(ue,ne){if(t){var ce=ue.deletions;ce===null?(ue.deletions=[ne],ue.flags|=16):ce.push(ne)}}function a(ue,ne){if(!t)return null;for(;ne!==null;)r(ue,ne),ne=ne.sibling;return null}function d(ue,ne){for(ue=new Map;ne!==null;)ne.key!==null?ue.set(ne.key,ne):ue.set(ne.index,ne),ne=ne.sibling;return ue}function f(ue,ne){return ue=ea(ue,ne),ue.index=0,ue.sibling=null,ue}function v(ue,ne,ce){return ue.index=ce,t?(ce=ue.alternate,ce!==null?(ce=ce.index,ce<ne?(ue.flags|=2,ne):ce):(ue.flags|=2,ne)):(ue.flags|=1048576,ne)}function P(ue){return t&&ue.alternate===null&&(ue.flags|=2),ue}function $(ue,ne,ce,Fe){return ne===null||ne.tag!==6?(ne=xp(ce,ue.mode,Fe),ne.return=ue,ne):(ne=f(ne,ce),ne.return=ue,ne)}function X(ue,ne,ce,Fe){var ut=ce.type;return ut===le?Re(ue,ne,ce.props.children,Fe,ce.key):ne!==null&&(ne.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===J&&vu(ut)===ne.type)?(Fe=f(ne,ce.props),Fe.ref=La(ue,ne,ce),Fe.return=ue,Fe):(Fe=rd(ce.type,ce.key,ce.props,null,ue.mode,Fe),Fe.ref=La(ue,ne,ce),Fe.return=ue,Fe)}function pe(ue,ne,ce,Fe){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==ce.containerInfo||ne.stateNode.implementation!==ce.implementation?(ne=bp(ce,ue.mode,Fe),ne.return=ue,ne):(ne=f(ne,ce.children||[]),ne.return=ue,ne)}function Re(ue,ne,ce,Fe,ut){return ne===null||ne.tag!==7?(ne=Ga(ce,ue.mode,Fe,ut),ne.return=ue,ne):(ne=f(ne,ce),ne.return=ue,ne)}function Oe(ue,ne,ce){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=xp(""+ne,ue.mode,ce),ne.return=ue,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case Y:return ce=rd(ne.type,ne.key,ne.props,null,ue.mode,ce),ce.ref=La(ue,null,ne),ce.return=ue,ce;case he:return ne=bp(ne,ue.mode,ce),ne.return=ue,ne;case J:var Fe=ne._init;return Oe(ue,Fe(ne._payload),ce)}if(Ge(ne)||A(ne))return ne=Ga(ne,ue.mode,ce,null),ne.return=ue,ne;kl(ue,ne)}return null}function Pe(ue,ne,ce,Fe){var ut=ne!==null?ne.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return ut!==null?null:$(ue,ne,""+ce,Fe);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case Y:return ce.key===ut?X(ue,ne,ce,Fe):null;case he:return ce.key===ut?pe(ue,ne,ce,Fe):null;case J:return ut=ce._init,Pe(ue,ne,ut(ce._payload),Fe)}if(Ge(ce)||A(ce))return ut!==null?null:Re(ue,ne,ce,Fe,null);kl(ue,ce)}return null}function Ze(ue,ne,ce,Fe,ut){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return ue=ue.get(ce)||null,$(ne,ue,""+Fe,ut);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case Y:return ue=ue.get(Fe.key===null?ce:Fe.key)||null,X(ne,ue,Fe,ut);case he:return ue=ue.get(Fe.key===null?ce:Fe.key)||null,pe(ne,ue,Fe,ut);case J:var ft=Fe._init;return Ze(ue,ne,ce,ft(Fe._payload),ut)}if(Ge(Fe)||A(Fe))return ue=ue.get(ce)||null,Re(ne,ue,Fe,ut,null);kl(ne,Fe)}return null}function st(ue,ne,ce,Fe){for(var ut=null,ft=null,mt=ne,bt=ne=0,ir=null;mt!==null&&bt<ce.length;bt++){mt.index>bt?(ir=mt,mt=null):ir=mt.sibling;var qt=Pe(ue,mt,ce[bt],Fe);if(qt===null){mt===null&&(mt=ir);break}t&&mt&&qt.alternate===null&&r(ue,mt),ne=v(qt,ne,bt),ft===null?ut=qt:ft.sibling=qt,ft=qt,mt=ir}if(bt===ce.length)return a(ue,mt),nn&&Ks(ue,bt),ut;if(mt===null){for(;bt<ce.length;bt++)mt=Oe(ue,ce[bt],Fe),mt!==null&&(ne=v(mt,ne,bt),ft===null?ut=mt:ft.sibling=mt,ft=mt);return nn&&Ks(ue,bt),ut}for(mt=d(ue,mt);bt<ce.length;bt++)ir=Ze(mt,ue,bt,ce[bt],Fe),ir!==null&&(t&&ir.alternate!==null&&mt.delete(ir.key===null?bt:ir.key),ne=v(ir,ne,bt),ft===null?ut=ir:ft.sibling=ir,ft=ir);return t&&mt.forEach(function(ta){return r(ue,ta)}),nn&&Ks(ue,bt),ut}function ot(ue,ne,ce,Fe){var ut=A(ce);if(typeof ut!="function")throw Error(p(150));if(ce=ut.call(ce),ce==null)throw Error(p(151));for(var ft=ut=null,mt=ne,bt=ne=0,ir=null,qt=ce.next();mt!==null&&!qt.done;bt++,qt=ce.next()){mt.index>bt?(ir=mt,mt=null):ir=mt.sibling;var ta=Pe(ue,mt,qt.value,Fe);if(ta===null){mt===null&&(mt=ir);break}t&&mt&&ta.alternate===null&&r(ue,mt),ne=v(ta,ne,bt),ft===null?ut=ta:ft.sibling=ta,ft=ta,mt=ir}if(qt.done)return a(ue,mt),nn&&Ks(ue,bt),ut;if(mt===null){for(;!qt.done;bt++,qt=ce.next())qt=Oe(ue,qt.value,Fe),qt!==null&&(ne=v(qt,ne,bt),ft===null?ut=qt:ft.sibling=qt,ft=qt);return nn&&Ks(ue,bt),ut}for(mt=d(ue,mt);!qt.done;bt++,qt=ce.next())qt=Ze(mt,ue,bt,qt.value,Fe),qt!==null&&(t&&qt.alternate!==null&&mt.delete(qt.key===null?bt:qt.key),ne=v(qt,ne,bt),ft===null?ut=qt:ft.sibling=qt,ft=qt);return t&&mt.forEach(function(dg){return r(ue,dg)}),nn&&Ks(ue,bt),ut}function qn(ue,ne,ce,Fe){if(typeof ce=="object"&&ce!==null&&ce.type===le&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case Y:e:{for(var ut=ce.key,ft=ne;ft!==null;){if(ft.key===ut){if(ut=ce.type,ut===le){if(ft.tag===7){a(ue,ft.sibling),ne=f(ft,ce.props.children),ne.return=ue,ue=ne;break e}}else if(ft.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===J&&vu(ut)===ft.type){a(ue,ft.sibling),ne=f(ft,ce.props),ne.ref=La(ue,ft,ce),ne.return=ue,ue=ne;break e}a(ue,ft);break}else r(ue,ft);ft=ft.sibling}ce.type===le?(ne=Ga(ce.props.children,ue.mode,Fe,ce.key),ne.return=ue,ue=ne):(Fe=rd(ce.type,ce.key,ce.props,null,ue.mode,Fe),Fe.ref=La(ue,ne,ce),Fe.return=ue,ue=Fe)}return P(ue);case he:e:{for(ft=ce.key;ne!==null;){if(ne.key===ft)if(ne.tag===4&&ne.stateNode.containerInfo===ce.containerInfo&&ne.stateNode.implementation===ce.implementation){a(ue,ne.sibling),ne=f(ne,ce.children||[]),ne.return=ue,ue=ne;break e}else{a(ue,ne);break}else r(ue,ne);ne=ne.sibling}ne=bp(ce,ue.mode,Fe),ne.return=ue,ue=ne}return P(ue);case J:return ft=ce._init,qn(ue,ne,ft(ce._payload),Fe)}if(Ge(ce))return st(ue,ne,ce,Fe);if(A(ce))return ot(ue,ne,ce,Fe);kl(ue,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,ne!==null&&ne.tag===6?(a(ue,ne.sibling),ne=f(ne,ce),ne.return=ue,ue=ne):(a(ue,ne),ne=xp(ce,ue.mode,Fe),ne.return=ue,ue=ne),P(ue)):a(ue,ne)}return qn}var Ss=Gs(!0),Pa=Gs(!1),Aa=di(null),Do=null,Ys=null,xu=null;function Sl(){xu=Ys=Do=null}function Wn(t){var r=Aa.current;tn(Aa),t._currentValue=r}function zo(t,r,a){for(;t!==null;){var d=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),t===a)break;t=t.return}}function Vs(t,r){Do=t,xu=Ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Zn=!0),t.firstContext=null)}function zr(t){var r=t._currentValue;if(xu!==t)if(t={context:t,memoizedValue:r,next:null},Ys===null){if(Do===null)throw Error(p(308));Ys=t,Do.dependencies={lanes:0,firstContext:t}}else Ys=Ys.next=t;return r}var _s=null;function Cs(t){_s===null?_s=[t]:_s.push(t)}function Ra(t,r,a,d){var f=r.interleaved;return f===null?(a.next=a,Cs(r)):(a.next=f.next,f.next=a),r.interleaved=a,Li(t,d)}function Li(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Zi=!1;function _l(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Js(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function hi(t,r,a){var d=t.updateQueue;if(d===null)return null;if(d=d.shared,(dt&2)!==0){var f=d.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),d.pending=r,Li(t,a)}return f=d.interleaved,f===null?(r.next=r,Cs(d)):(r.next=f.next,f.next=r),d.interleaved=r,Li(t,a)}function Ia(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var d=r.lanes;d&=t.pendingLanes,a|=d,r.lanes=a,ls(t,a)}}function Fo(t,r){var a=t.updateQueue,d=t.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var f=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var P={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?f=v=P:v=v.next=P,a=a.next}while(a!==null);v===null?f=v=r:v=v.next=r}else f=v=r;a={baseState:d.baseState,firstBaseUpdate:f,lastBaseUpdate:v,shared:d.shared,effects:d.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function Cl(t,r,a,d){var f=t.updateQueue;Zi=!1;var v=f.firstBaseUpdate,P=f.lastBaseUpdate,$=f.shared.pending;if($!==null){f.shared.pending=null;var X=$,pe=X.next;X.next=null,P===null?v=pe:P.next=pe,P=X;var Re=t.alternate;Re!==null&&(Re=Re.updateQueue,$=Re.lastBaseUpdate,$!==P&&($===null?Re.firstBaseUpdate=pe:$.next=pe,Re.lastBaseUpdate=X))}if(v!==null){var Oe=f.baseState;P=0,Re=pe=X=null,$=v;do{var Pe=$.lane,Ze=$.eventTime;if((d&Pe)===Pe){Re!==null&&(Re=Re.next={eventTime:Ze,lane:0,tag:$.tag,payload:$.payload,callback:$.callback,next:null});e:{var st=t,ot=$;switch(Pe=r,Ze=a,ot.tag){case 1:if(st=ot.payload,typeof st=="function"){Oe=st.call(Ze,Oe,Pe);break e}Oe=st;break e;case 3:st.flags=st.flags&-65537|128;case 0:if(st=ot.payload,Pe=typeof st=="function"?st.call(Ze,Oe,Pe):st,Pe==null)break e;Oe=G({},Oe,Pe);break e;case 2:Zi=!0}}$.callback!==null&&$.lane!==0&&(t.flags|=64,Pe=f.effects,Pe===null?f.effects=[$]:Pe.push($))}else Ze={eventTime:Ze,lane:Pe,tag:$.tag,payload:$.payload,callback:$.callback,next:null},Re===null?(pe=Re=Ze,X=Oe):Re=Re.next=Ze,P|=Pe;if($=$.next,$===null){if($=f.shared.pending,$===null)break;Pe=$,$=Pe.next,Pe.next=null,f.lastBaseUpdate=Pe,f.shared.pending=null}}while(!0);if(Re===null&&(X=Oe),f.baseState=X,f.firstBaseUpdate=pe,f.lastBaseUpdate=Re,r=f.shared.interleaved,r!==null){f=r;do P|=f.lane,f=f.next;while(f!==r)}else v===null&&(f.shared.lanes=0);kr|=P,t.lanes=P,t.memoizedState=Oe}}function Xs(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var d=t[r],f=d.callback;if(f!==null){if(d.callback=null,d=a,typeof f!="function")throw Error(p(191,f));f.call(d)}}}var Wo={},fi=di(Wo),Ho=di(Wo),es=di(Wo);function mi(t){if(t===Wo)throw Error(p(174));return t}function Qs(t,r){switch(Qt(es,r),Qt(Ho,t),Qt(fi,Wo),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:at(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=at(r,t)}tn(fi),Qt(fi,r)}function Ai(){tn(fi),tn(Ho),tn(es)}function bu(t){mi(es.current);var r=mi(fi.current),a=at(r,t.type);r!==a&&(Qt(Ho,t),Qt(fi,a))}function wu(t){Ho.current===t&&(tn(fi),tn(Ho))}var an=di(0);function gi(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ts=[];function Zs(){for(var t=0;t<Ts.length;t++)Ts[t]._workInProgressVersionPrimary=null;Ts.length=0}var Tl=q.ReactCurrentDispatcher,jl=q.ReactCurrentBatchConfig,eo=0,hn=null,Hn=null,Mt=null,Oa=!1,Ma=!1,Da=0,ap=0;function Qn(){throw Error(p(321))}function Nl(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Cn(t[a],r[a]))return!1;return!0}function El(t,r,a,d,f,v){if(eo=v,hn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Tl.current=t===null||t.memoizedState===null?up:Ru,t=a(d,f),Ma){v=0;do{if(Ma=!1,Da=0,25<=v)throw Error(p(301));v+=1,Mt=Hn=null,r.updateQueue=null,Tl.current=Fa,t=a(d,f)}while(Ma)}if(Tl.current=za,r=Hn!==null&&Hn.next!==null,eo=0,Mt=Hn=hn=null,Oa=!1,r)throw Error(p(300));return t}function ku(){var t=Da!==0;return Da=0,t}function Ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?hn.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function Jr(){if(Hn===null){var t=hn.alternate;t=t!==null?t.memoizedState:null}else t=Hn.next;var r=Mt===null?hn.memoizedState:Mt.next;if(r!==null)Mt=r,Hn=t;else{if(t===null)throw Error(p(310));Hn=t,t={memoizedState:Hn.memoizedState,baseState:Hn.baseState,baseQueue:Hn.baseQueue,queue:Hn.queue,next:null},Mt===null?hn.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function Xr(t,r){return typeof r=="function"?r(t):r}function to(t){var r=Jr(),a=r.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=t;var d=Hn,f=d.baseQueue,v=a.pending;if(v!==null){if(f!==null){var P=f.next;f.next=v.next,v.next=P}d.baseQueue=f=v,a.pending=null}if(f!==null){v=f.next,d=d.baseState;var $=P=null,X=null,pe=v;do{var Re=pe.lane;if((eo&Re)===Re)X!==null&&(X=X.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),d=pe.hasEagerState?pe.eagerState:t(d,pe.action);else{var Oe={lane:Re,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};X===null?($=X=Oe,P=d):X=X.next=Oe,hn.lanes|=Re,kr|=Re}pe=pe.next}while(pe!==null&&pe!==v);X===null?P=d:X.next=$,Cn(d,r.memoizedState)||(Zn=!0),r.memoizedState=d,r.baseState=P,r.baseQueue=X,a.lastRenderedState=d}if(t=a.interleaved,t!==null){f=t;do v=f.lane,hn.lanes|=v,kr|=v,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Bo(t){var r=Jr(),a=r.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=t;var d=a.dispatch,f=a.pending,v=r.memoizedState;if(f!==null){a.pending=null;var P=f=f.next;do v=t(v,P.action),P=P.next;while(P!==f);Cn(v,r.memoizedState)||(Zn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),a.lastRenderedState=v}return[v,d]}function Uo(){}function Ii(t,r){var a=hn,d=Jr(),f=r(),v=!Cn(d.memoizedState,f);if(v&&(d.memoizedState=f,Zn=!0),d=d.queue,Tu(no.bind(null,a,d,t),[t]),d.getSnapshot!==r||v||Mt!==null&&Mt.memoizedState.tag&1){if(a.flags|=2048,js(9,Oc.bind(null,a,d,f,r),void 0,null),Ft===null)throw Error(p(349));(eo&30)!==0||Ic(a,r,f)}return f}function Ic(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Oc(t,r,a,d){r.value=a,r.getSnapshot=d,Su(r)&&_u(t)}function no(t,r,a){return a(function(){Su(r)&&_u(t)})}function Su(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Cn(t,a)}catch{return!0}}function _u(t){var r=Li(t,1);r!==null&&ns(r,t,1,-1)}function Cu(t){var r=Ri();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:t},r.queue=t,t=t.dispatch=Lu.bind(null,hn,t),[r.memoizedState,t]}function js(t,r,a,d){return t={tag:t,create:r,destroy:a,deps:d,next:null},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(d=a.next,a.next=t,t.next=d,r.lastEffect=t)),t}function ro(){return Jr().memoizedState}function qo(t,r,a,d){var f=Ri();hn.flags|=t,f.memoizedState=js(1|r,a,void 0,d===void 0?null:d)}function Ko(t,r,a,d){var f=Jr();d=d===void 0?null:d;var v=void 0;if(Hn!==null){var P=Hn.memoizedState;if(v=P.destroy,d!==null&&Nl(d,P.deps)){f.memoizedState=js(r,a,v,d);return}}hn.flags|=t,f.memoizedState=js(1|r,a,v,d)}function Ll(t,r){return qo(8390656,8,t,r)}function Tu(t,r){return Ko(2048,8,t,r)}function $o(t,r){return Ko(4,2,t,r)}function ju(t,r){return Ko(4,4,t,r)}function Mc(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Nu(t,r,a){return a=a!=null?a.concat([t]):null,Ko(4,4,Mc.bind(null,r,t),a)}function Go(){}function Dc(t,r){var a=Jr();r=r===void 0?null:r;var d=a.memoizedState;return d!==null&&r!==null&&Nl(r,d[1])?d[0]:(a.memoizedState=[t,r],t)}function zc(t,r){var a=Jr();r=r===void 0?null:r;var d=a.memoizedState;return d!==null&&r!==null&&Nl(r,d[1])?d[0]:(t=t(),a.memoizedState=[t,r],t)}function Yo(t,r,a){return(eo&21)===0?(t.baseState&&(t.baseState=!1,Zn=!0),t.memoizedState=a):(Cn(a,r)||(a=sa(),hn.lanes|=a,kr|=a,t.baseState=!0),r)}function Fc(t,r){var a=Et;Et=a!==0&&4>a?a:4,t(!0);var d=jl.transition;jl.transition={};try{t(!1),r()}finally{Et=a,jl.transition=d}}function Eu(){return Jr().memoizedState}function lp(t,r,a){var d=Qo(t);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},Pu(t))Wc(r,a);else if(a=Ra(t,r,a,d),a!==null){var f=Fr();ns(a,t,d,f),Au(a,r,d)}}function Lu(t,r,a){var d=Qo(t),f={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pu(t))Wc(r,f);else{var v=t.alternate;if(t.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var P=r.lastRenderedState,$=v(P,a);if(f.hasEagerState=!0,f.eagerState=$,Cn($,P)){var X=r.interleaved;X===null?(f.next=f,Cs(r)):(f.next=X.next,X.next=f),r.interleaved=f;return}}catch{}finally{}a=Ra(t,r,f,d),a!==null&&(f=Fr(),ns(a,t,d,f),Au(a,r,d))}}function Pu(t){var r=t.alternate;return t===hn||r!==null&&r===hn}function Wc(t,r){Ma=Oa=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function Au(t,r,a){if((a&4194240)!==0){var d=r.lanes;d&=t.pendingLanes,a|=d,r.lanes=a,ls(t,a)}}var za={readContext:zr,useCallback:Qn,useContext:Qn,useEffect:Qn,useImperativeHandle:Qn,useInsertionEffect:Qn,useLayoutEffect:Qn,useMemo:Qn,useReducer:Qn,useRef:Qn,useState:Qn,useDebugValue:Qn,useDeferredValue:Qn,useTransition:Qn,useMutableSource:Qn,useSyncExternalStore:Qn,useId:Qn,unstable_isNewReconciler:!1},up={readContext:zr,useCallback:function(t,r){return Ri().memoizedState=[t,r===void 0?null:r],t},useContext:zr,useEffect:Ll,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,qo(4194308,4,Mc.bind(null,r,t),a)},useLayoutEffect:function(t,r){return qo(4194308,4,t,r)},useInsertionEffect:function(t,r){return qo(4,2,t,r)},useMemo:function(t,r){var a=Ri();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var d=Ri();return r=a!==void 0?a(r):r,d.memoizedState=d.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},d.queue=t,t=t.dispatch=lp.bind(null,hn,t),[d.memoizedState,t]},useRef:function(t){var r=Ri();return t={current:t},r.memoizedState=t},useState:Cu,useDebugValue:Go,useDeferredValue:function(t){return Ri().memoizedState=t},useTransition:function(){var t=Cu(!1),r=t[0];return t=Fc.bind(null,t[1]),Ri().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var d=hn,f=Ri();if(nn){if(a===void 0)throw Error(p(407));a=a()}else{if(a=r(),Ft===null)throw Error(p(349));(eo&30)!==0||Ic(d,r,a)}f.memoizedState=a;var v={value:a,getSnapshot:r};return f.queue=v,Ll(no.bind(null,d,v,t),[t]),d.flags|=2048,js(9,Oc.bind(null,d,v,a,r),void 0,null),a},useId:function(){var t=Ri(),r=Ft.identifierPrefix;if(nn){var a=Ei,d=pi;a=(d&~(1<<32-fe(d)-1)).toString(32)+a,r=":"+r+"R"+a,a=Da++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=ap++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Ru={readContext:zr,useCallback:Dc,useContext:zr,useEffect:Tu,useImperativeHandle:Nu,useInsertionEffect:$o,useLayoutEffect:ju,useMemo:zc,useReducer:to,useRef:ro,useState:function(){return to(Xr)},useDebugValue:Go,useDeferredValue:function(t){var r=Jr();return Yo(r,Hn.memoizedState,t)},useTransition:function(){var t=to(Xr)[0],r=Jr().memoizedState;return[t,r]},useMutableSource:Uo,useSyncExternalStore:Ii,useId:Eu,unstable_isNewReconciler:!1},Fa={readContext:zr,useCallback:Dc,useContext:zr,useEffect:Tu,useImperativeHandle:Nu,useInsertionEffect:$o,useLayoutEffect:ju,useMemo:zc,useReducer:Bo,useRef:ro,useState:function(){return Bo(Xr)},useDebugValue:Go,useDeferredValue:function(t){var r=Jr();return Hn===null?r.memoizedState=t:Yo(r,Hn.memoizedState,t)},useTransition:function(){var t=Bo(Xr)[0],r=Jr().memoizedState;return[t,r]},useMutableSource:Uo,useSyncExternalStore:Ii,useId:Eu,unstable_isNewReconciler:!1};function yr(t,r){if(t&&t.defaultProps){r=G({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function Iu(t,r,a,d){r=t.memoizedState,a=a(d,r),a=a==null?r:G({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Wa={isMounted:function(t){return(t=t._reactInternals)?kn(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var d=Fr(),f=Qo(t),v=Pi(d,f);v.payload=r,a!=null&&(v.callback=a),r=hi(t,v,f),r!==null&&(ns(r,t,f,d),Ia(r,t,f))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var d=Fr(),f=Qo(t),v=Pi(d,f);v.tag=1,v.payload=r,a!=null&&(v.callback=a),r=hi(t,v,f),r!==null&&(ns(r,t,f,d),Ia(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Fr(),d=Qo(t),f=Pi(a,d);f.tag=2,r!=null&&(f.callback=r),r=hi(t,f,d),r!==null&&(ns(r,t,d,a),Ia(r,t,d))}};function Hc(t,r,a,d,f,v,P){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(d,v,P):r.prototype&&r.prototype.isPureReactComponent?!Co(a,d)||!Co(f,v):!0}function Bc(t,r,a){var d=!1,f=bs,v=r.contextType;return typeof v=="object"&&v!==null?v=zr(v):(f=tr(r)?Qi:Gn.current,d=r.contextTypes,v=(d=d!=null)?Po(t,f):bs),r=new r(a,v),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Wa,t.stateNode=r,r._reactInternals=t,d&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=v),r}function Uc(t,r,a,d){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,d),r.state!==t&&Wa.enqueueReplaceState(r,r.state,null)}function Ou(t,r,a,d){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},_l(t);var v=r.contextType;typeof v=="object"&&v!==null?f.context=zr(v):(v=tr(r)?Qi:Gn.current,f.context=Po(t,v)),f.state=t.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Iu(t,r,v,a),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&Wa.enqueueReplaceState(f,f.state,null),Cl(t,a,f,d),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function io(t,r){try{var a="",d=r;do a+=qe(d),d=d.return;while(d);var f=a}catch(v){f=`
Error generating stack: `+v.message+`
`+v.stack}return{value:t,source:r,stack:f,digest:null}}function Mu(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function Du(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var qc=typeof WeakMap=="function"?WeakMap:Map;function Pl(t,r,a){a=Pi(-1,a),a.tag=3,a.payload={element:null};var d=r.value;return a.callback=function(){Xc||(Xc=!0,dp=d),Du(t,r)},a}function zu(t,r,a){a=Pi(-1,a),a.tag=3;var d=t.type.getDerivedStateFromError;if(typeof d=="function"){var f=r.value;a.payload=function(){return d(f)},a.callback=function(){Du(t,r)}}var v=t.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Du(t,r),typeof d!="function"&&(Jo===null?Jo=new Set([this]):Jo.add(this));var P=r.stack;this.componentDidCatch(r.value,{componentStack:P!==null?P:""})}),a}function Kc(t,r,a){var d=t.pingCache;if(d===null){d=t.pingCache=new qc;var f=new Set;d.set(r,f)}else f=d.get(r),f===void 0&&(f=new Set,d.set(r,f));f.has(a)||(f.add(a),t=eg.bind(null,t,r,a),r.then(t,t))}function Fu(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function so(t,r,a,d,f){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Pi(-1,1),r.tag=2,hi(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var $c=q.ReactCurrentOwner,Zn=!1;function vr(t,r,a,d){r.child=t===null?Pa(r,null,a,d):Ss(r,t.child,a,d)}function Gc(t,r,a,d,f){a=a.render;var v=r.ref;return Vs(r,f),d=El(t,r,a,d,v,f),a=ku(),t!==null&&!Zn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Ar(t,r,f)):(nn&&a&&$s(r),r.flags|=1,vr(t,r,d,f),r.child)}function Yc(t,r,a,d,f){if(t===null){var v=a.type;return typeof v=="function"&&!vp(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=v,Zt(t,r,v,d,f)):(t=rd(a.type,null,d,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(v=t.child,(t.lanes&f)===0){var P=v.memoizedProps;if(a=a.compare,a=a!==null?a:Co,a(P,d)&&t.ref===r.ref)return Ar(t,r,f)}return r.flags|=1,t=ea(v,d),t.ref=r.ref,t.return=r,r.child=t}function Zt(t,r,a,d,f){if(t!==null){var v=t.memoizedProps;if(Co(v,d)&&t.ref===r.ref)if(Zn=!1,r.pendingProps=d=v,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Zn=!0);else return r.lanes=t.lanes,Ar(t,r,f)}return oo(t,r,a,d,f)}function Vc(t,r,a){var d=r.pendingProps,f=d.children,v=t!==null?t.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qt(wr,$t),$t|=a;else{if((a&1073741824)===0)return t=v!==null?v.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Qt(wr,$t),$t|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=v!==null?v.baseLanes:a,Qt(wr,$t),$t|=d}else v!==null?(d=v.baseLanes|a,r.memoizedState=null):d=a,Qt(wr,$t),$t|=d;return vr(t,r,f,a),r.child}function Al(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function oo(t,r,a,d,f){var v=tr(a)?Qi:Gn.current;return v=Po(r,v),Vs(r,f),a=El(t,r,a,d,v,f),d=ku(),t!==null&&!Zn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Ar(t,r,f)):(nn&&d&&$s(r),r.flags|=1,vr(t,r,a,f),r.child)}function Qr(t,r,a,d,f){if(tr(a)){var v=!0;Ro(r)}else v=!1;if(Vs(r,f),r.stateNode===null)Fl(t,r),Bc(r,a,d),Ou(r,a,d,f),d=!0;else if(t===null){var P=r.stateNode,$=r.memoizedProps;P.props=$;var X=P.context,pe=a.contextType;typeof pe=="object"&&pe!==null?pe=zr(pe):(pe=tr(a)?Qi:Gn.current,pe=Po(r,pe));var Re=a.getDerivedStateFromProps,Oe=typeof Re=="function"||typeof P.getSnapshotBeforeUpdate=="function";Oe||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||($!==d||X!==pe)&&Uc(r,P,d,pe),Zi=!1;var Pe=r.memoizedState;P.state=Pe,Cl(r,d,P,f),X=r.memoizedState,$!==d||Pe!==X||mr.current||Zi?(typeof Re=="function"&&(Iu(r,a,Re,d),X=r.memoizedState),($=Zi||Hc(r,a,$,d,Pe,X,pe))?(Oe||typeof P.UNSAFE_componentWillMount!="function"&&typeof P.componentWillMount!="function"||(typeof P.componentWillMount=="function"&&P.componentWillMount(),typeof P.UNSAFE_componentWillMount=="function"&&P.UNSAFE_componentWillMount()),typeof P.componentDidMount=="function"&&(r.flags|=4194308)):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=X),P.props=d,P.state=X,P.context=pe,d=$):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{P=r.stateNode,Js(t,r),$=r.memoizedProps,pe=r.type===r.elementType?$:yr(r.type,$),P.props=pe,Oe=r.pendingProps,Pe=P.context,X=a.contextType,typeof X=="object"&&X!==null?X=zr(X):(X=tr(a)?Qi:Gn.current,X=Po(r,X));var Ze=a.getDerivedStateFromProps;(Re=typeof Ze=="function"||typeof P.getSnapshotBeforeUpdate=="function")||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||($!==Oe||Pe!==X)&&Uc(r,P,d,X),Zi=!1,Pe=r.memoizedState,P.state=Pe,Cl(r,d,P,f);var st=r.memoizedState;$!==Oe||Pe!==st||mr.current||Zi?(typeof Ze=="function"&&(Iu(r,a,Ze,d),st=r.memoizedState),(pe=Zi||Hc(r,a,pe,d,Pe,st,X)||!1)?(Re||typeof P.UNSAFE_componentWillUpdate!="function"&&typeof P.componentWillUpdate!="function"||(typeof P.componentWillUpdate=="function"&&P.componentWillUpdate(d,st,X),typeof P.UNSAFE_componentWillUpdate=="function"&&P.UNSAFE_componentWillUpdate(d,st,X)),typeof P.componentDidUpdate=="function"&&(r.flags|=4),typeof P.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof P.componentDidUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=st),P.props=d,P.state=st,P.context=X,d=pe):(typeof P.componentDidUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=1024),d=!1)}return Vo(t,r,a,d,v,f)}function Vo(t,r,a,d,f,v){Al(t,r);var P=(r.flags&128)!==0;if(!d&&!P)return f&&yu(r,a,!1),Ar(t,r,v);d=r.stateNode,$c.current=r;var $=P&&typeof a.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,t!==null&&P?(r.child=Ss(r,t.child,null,v),r.child=Ss(r,null,$,v)):vr(t,r,$,v),r.memoizedState=d.state,f&&yu(r,a,!0),r.child}function Rl(t){var r=t.stateNode;r.pendingContext?mu(t,r.pendingContext,r.pendingContext!==r.context):r.context&&mu(t,r.context,!1),Qs(t,r.containerInfo)}function Wu(t,r,a,d,f){return Oo(),Mo(f),r.flags|=256,vr(t,r,a,d),r.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Ol(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ml(t,r,a){var d=r.pendingProps,f=an.current,v=!1,P=(r.flags&128)!==0,$;if(($=P)||($=t!==null&&t.memoizedState===null?!1:(f&2)!==0),$?(v=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Qt(an,f&1),t===null)return wl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(P=d.children,t=d.fallback,v?(d=r.mode,v=r.child,P={mode:"hidden",children:P},(d&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=P):v=id(P,d,0,null),t=Ga(t,d,a,null),v.return=r,t.return=r,v.sibling=t,r.child=v,r.child.memoizedState=Ol(a),r.memoizedState=Il,t):Dl(r,P));if(f=t.memoizedState,f!==null&&($=f.dehydrated,$!==null))return Hu(t,r,P,d,$,f,a);if(v){v=d.fallback,P=r.mode,f=t.child,$=f.sibling;var X={mode:"hidden",children:d.children};return(P&1)===0&&r.child!==f?(d=r.child,d.childLanes=0,d.pendingProps=X,r.deletions=null):(d=ea(f,X),d.subtreeFlags=f.subtreeFlags&14680064),$!==null?v=ea($,v):(v=Ga(v,P,a,null),v.flags|=2),v.return=r,d.return=r,d.sibling=v,r.child=d,d=v,v=r.child,P=t.child.memoizedState,P=P===null?Ol(a):{baseLanes:P.baseLanes|a,cachePool:null,transitions:P.transitions},v.memoizedState=P,v.childLanes=t.childLanes&~a,r.memoizedState=Il,d}return v=t.child,t=v.sibling,d=ea(v,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=a),d.return=r,d.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=d,r.memoizedState=null,d}function Dl(t,r){return r=id({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function zl(t,r,a,d){return d!==null&&Mo(d),Ss(r,t.child,null,a),t=Dl(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Hu(t,r,a,d,f,v,P){if(a)return r.flags&256?(r.flags&=-257,d=Mu(Error(p(422))),zl(t,r,P,d)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(v=d.fallback,f=r.mode,d=id({mode:"visible",children:d.children},f,0,null),v=Ga(v,f,P,null),v.flags|=2,d.return=r,v.return=r,d.sibling=v,r.child=d,(r.mode&1)!==0&&Ss(r,t.child,null,P),r.child.memoizedState=Ol(P),r.memoizedState=Il,v);if((r.mode&1)===0)return zl(t,r,P,null);if(f.data==="$!"){if(d=f.nextSibling&&f.nextSibling.dataset,d)var $=d.dgst;return d=$,v=Error(p(419)),d=Mu(v,d,void 0),zl(t,r,P,d)}if($=(P&t.childLanes)!==0,Zn||$){if(d=Ft,d!==null){switch(P&-P){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(d.suspendedLanes|P))!==0?0:f,f!==0&&f!==v.retryLane&&(v.retryLane=f,Li(t,f),ns(d,t,f,-1))}return yp(),d=Mu(Error(p(421))),zl(t,r,P,d)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=tg.bind(null,t),f._reactRetry=r,null):(t=v.treeContext,Pn=vs(f.nextSibling),gr=r,nn=!0,Vr=null,t!==null&&(zn[Fn++]=pi,zn[Fn++]=Ei,zn[Fn++]=ks,pi=t.id,Ei=t.overflow,ks=r),r=Dl(r,d.children),r.flags|=4096,r)}function Bu(t,r,a){t.lanes|=r;var d=t.alternate;d!==null&&(d.lanes|=r),zo(t.return,r,a)}function Dt(t,r,a,d,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:f}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=d,v.tail=a,v.tailMode=f)}function Uu(t,r,a){var d=r.pendingProps,f=d.revealOrder,v=d.tail;if(vr(t,r,d.children,a),d=an.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bu(t,a,r);else if(t.tag===19)Bu(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}d&=1}if(Qt(an,d),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(a=r.child,f=null;a!==null;)t=a.alternate,t!==null&&gi(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),Dt(r,!1,f,a,v);break;case"backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&gi(t)===null){r.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Dt(r,!0,a,null,v);break;case"together":Dt(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Fl(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Ar(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),kr|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(p(153));if(r.child!==null){for(t=r.child,a=ea(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=ea(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function cp(t,r,a){switch(r.tag){case 3:Rl(r),Oo();break;case 5:bu(r);break;case 1:tr(r.type)&&Ro(r);break;case 4:Qs(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,f=r.memoizedProps.value;Qt(Aa,d._currentValue),d._currentValue=f;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Qt(an,an.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Ml(t,r,a):(Qt(an,an.current&1),t=Ar(t,r,a),t!==null?t.sibling:null);Qt(an,an.current&1);break;case 19:if(d=(a&r.childLanes)!==0,(t.flags&128)!==0){if(d)return Uu(t,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Qt(an,an.current),d)break;return null;case 22:case 23:return r.lanes=0,Vc(t,r,a)}return Ar(t,r,a)}var Ha,qu,fn,Jc;Ha=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},qu=function(){},fn=function(t,r,a,d){var f=t.memoizedProps;if(f!==d){t=r.stateNode,mi(fi.current);var v=null;switch(a){case"input":f=_t(t,f),d=_t(t,d),v=[];break;case"select":f=G({},f,{value:void 0}),d=G({},d,{value:void 0}),v=[];break;case"textarea":f=ae(t,f),d=ae(t,d),v=[];break;default:typeof f.onClick!="function"&&typeof d.onClick=="function"&&(t.onclick=ys)}xi(a,d);var P;a=null;for(pe in f)if(!d.hasOwnProperty(pe)&&f.hasOwnProperty(pe)&&f[pe]!=null)if(pe==="style"){var $=f[pe];for(P in $)$.hasOwnProperty(P)&&(a||(a={}),a[P]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(y.hasOwnProperty(pe)?v||(v=[]):(v=v||[]).push(pe,null));for(pe in d){var X=d[pe];if($=f!=null?f[pe]:void 0,d.hasOwnProperty(pe)&&X!==$&&(X!=null||$!=null))if(pe==="style")if($){for(P in $)!$.hasOwnProperty(P)||X&&X.hasOwnProperty(P)||(a||(a={}),a[P]="");for(P in X)X.hasOwnProperty(P)&&$[P]!==X[P]&&(a||(a={}),a[P]=X[P])}else a||(v||(v=[]),v.push(pe,a)),a=X;else pe==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,$=$?$.__html:void 0,X!=null&&$!==X&&(v=v||[]).push(pe,X)):pe==="children"?typeof X!="string"&&typeof X!="number"||(v=v||[]).push(pe,""+X):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(y.hasOwnProperty(pe)?(X!=null&&pe==="onScroll"&&Ut("scroll",t),v||$===X||(v=[])):(v=v||[]).push(pe,X))}a&&(v=v||[]).push("style",a);var pe=v;(r.updateQueue=pe)&&(r.flags|=4)}},Jc=function(t,r,a,d){a!==d&&(r.flags|=4)};function Ba(t,r){if(!nn)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:d.sibling=null}}function nr(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,d=0;if(r)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags&14680064,d|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags,d|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=d,t.childLanes=a,r}function Wl(t,r,a){var d=r.pendingProps;switch(bl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nr(r),null;case 1:return tr(r.type)&&Ao(),nr(r),null;case 3:return d=r.stateNode,Ai(),tn(mr),tn(Gn),Zs(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(t===null||t.child===null)&&(Ea(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vr!==null&&(fp(Vr),Vr=null))),qu(t,r),nr(r),null;case 5:wu(r);var f=mi(es.current);if(a=r.type,t!==null&&r.stateNode!=null)fn(t,r,a,d,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(p(166));return nr(r),null}if(t=mi(fi.current),Ea(r)){d=r.stateNode,a=r.type;var v=r.memoizedProps;switch(d[ji]=r,d[Ta]=v,t=(r.mode&1)!==0,a){case"dialog":Ut("cancel",d),Ut("close",d);break;case"iframe":case"object":case"embed":Ut("load",d);break;case"video":case"audio":for(f=0;f<Fs.length;f++)Ut(Fs[f],d);break;case"source":Ut("error",d);break;case"img":case"image":case"link":Ut("error",d),Ut("load",d);break;case"details":Ut("toggle",d);break;case"input":vt(d,v),Ut("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!v.multiple},Ut("invalid",d);break;case"textarea":_e(d,v),Ut("invalid",d)}xi(a,v),f=null;for(var P in v)if(v.hasOwnProperty(P)){var $=v[P];P==="children"?typeof $=="string"?d.textContent!==$&&(v.suppressHydrationWarning!==!0&&_a(d.textContent,$,t),f=["children",$]):typeof $=="number"&&d.textContent!==""+$&&(v.suppressHydrationWarning!==!0&&_a(d.textContent,$,t),f=["children",""+$]):y.hasOwnProperty(P)&&$!=null&&P==="onScroll"&&Ut("scroll",d)}switch(a){case"input":$e(d),et(d,v,!0);break;case"textarea":$e(d),wt(d);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(d.onclick=ys)}d=f,r.updateQueue=d,d!==null&&(r.flags|=4)}else{P=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Je(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=P.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof d.is=="string"?t=P.createElement(a,{is:d.is}):(t=P.createElement(a),a==="select"&&(P=t,d.multiple?P.multiple=!0:d.size&&(P.size=d.size))):t=P.createElementNS(t,a),t[ji]=r,t[Ta]=d,Ha(t,r,!1,!1),r.stateNode=t;e:{switch(P=xt(a,d),a){case"dialog":Ut("cancel",t),Ut("close",t),f=d;break;case"iframe":case"object":case"embed":Ut("load",t),f=d;break;case"video":case"audio":for(f=0;f<Fs.length;f++)Ut(Fs[f],t);f=d;break;case"source":Ut("error",t),f=d;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),f=d;break;case"details":Ut("toggle",t),f=d;break;case"input":vt(t,d),f=_t(t,d),Ut("invalid",t);break;case"option":f=d;break;case"select":t._wrapperState={wasMultiple:!!d.multiple},f=G({},d,{value:void 0}),Ut("invalid",t);break;case"textarea":_e(t,d),f=ae(t,d),Ut("invalid",t);break;default:f=d}xi(a,f),$=f;for(v in $)if($.hasOwnProperty(v)){var X=$[v];v==="style"?Hr(t,X):v==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&yt(t,X)):v==="children"?typeof X=="string"?(a!=="textarea"||X!=="")&&pt(t,X):typeof X=="number"&&pt(t,""+X):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(y.hasOwnProperty(v)?X!=null&&v==="onScroll"&&Ut("scroll",t):X!=null&&F(t,v,X,P))}switch(a){case"input":$e(t),et(t,d,!1);break;case"textarea":$e(t),wt(t);break;case"option":d.value!=null&&t.setAttribute("value",""+Ue(d.value));break;case"select":t.multiple=!!d.multiple,v=d.value,v!=null?ht(t,!!d.multiple,v,!1):d.defaultValue!=null&&ht(t,!!d.multiple,d.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=ys)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return nr(r),null;case 6:if(t&&r.stateNode!=null)Jc(t,r,t.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(p(166));if(a=mi(es.current),mi(fi.current),Ea(r)){if(d=r.stateNode,a=r.memoizedProps,d[ji]=r,(v=d.nodeValue!==a)&&(t=gr,t!==null))switch(t.tag){case 3:_a(d.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(d.nodeValue,a,(t.mode&1)!==0)}v&&(r.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[ji]=r,r.stateNode=d}return nr(r),null;case 13:if(tn(an),d=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nn&&Pn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ac(),Oo(),r.flags|=98560,v=!1;else if(v=Ea(r),d!==null&&d.dehydrated!==null){if(t===null){if(!v)throw Error(p(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(p(317));v[ji]=r}else Oo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;nr(r),v=!1}else Vr!==null&&(fp(Vr),Vr=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(d=d!==null,d!==(t!==null&&t.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(an.current&1)!==0?Nt===0&&(Nt=3):yp())),r.updateQueue!==null&&(r.flags|=4),nr(r),null);case 4:return Ai(),qu(t,r),t===null&&ms(r.stateNode.containerInfo),nr(r),null;case 10:return Wn(r.type._context),nr(r),null;case 17:return tr(r.type)&&Ao(),nr(r),null;case 19:if(tn(an),v=r.memoizedState,v===null)return nr(r),null;if(d=(r.flags&128)!==0,P=v.rendering,P===null)if(d)Ba(v,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(P=gi(t),P!==null){for(r.flags|=128,Ba(v,!1),d=P.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=a,a=r.child;a!==null;)v=a,t=d,v.flags&=14680066,P=v.alternate,P===null?(v.childLanes=0,v.lanes=t,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=P.childLanes,v.lanes=P.lanes,v.child=P.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=P.memoizedProps,v.memoizedState=P.memoizedState,v.updateQueue=P.updateQueue,v.type=P.type,t=P.dependencies,v.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Qt(an,an.current&1|2),r.child}t=t.sibling}v.tail!==null&&At()>Hl&&(r.flags|=128,d=!0,Ba(v,!1),r.lanes=4194304)}else{if(!d)if(t=gi(P),t!==null){if(r.flags|=128,d=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Ba(v,!0),v.tail===null&&v.tailMode==="hidden"&&!P.alternate&&!nn)return nr(r),null}else 2*At()-v.renderingStartTime>Hl&&a!==1073741824&&(r.flags|=128,d=!0,Ba(v,!1),r.lanes=4194304);v.isBackwards?(P.sibling=r.child,r.child=P):(a=v.last,a!==null?a.sibling=P:r.child=P,v.last=P)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=At(),r.sibling=null,a=an.current,Qt(an,d?a&1|2:a&1),r):(nr(r),null);case 22:case 23:return gp(),d=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?($t&1073741824)!==0&&(nr(r),r.subtreeFlags&6&&(r.flags|=8192)):nr(r),null;case 24:return null;case 25:return null}throw Error(p(156,r.tag))}function e(t,r){switch(bl(r),r.tag){case 1:return tr(r.type)&&Ao(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ai(),tn(mr),tn(Gn),Zs(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return wu(r),null;case 13:if(tn(an),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(p(340));Oo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return tn(an),null;case 4:return Ai(),null;case 10:return Wn(r.type._context),null;case 22:case 23:return gp(),null;case 24:return null;default:return null}}var n=!1,s=!1,i=typeof WeakSet=="function"?WeakSet:Set,o=null;function h(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){Rn(t,r,d)}else a.current=null}function m(t,r,a){try{a()}catch(d){Rn(t,r,d)}}var x=!1;function w(t,r){if(gl=ct,t=du(),ga(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var f=d.anchorOffset,v=d.focusNode;d=d.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var P=0,$=-1,X=-1,pe=0,Re=0,Oe=t,Pe=null;t:for(;;){for(var Ze;Oe!==a||f!==0&&Oe.nodeType!==3||($=P+f),Oe!==v||d!==0&&Oe.nodeType!==3||(X=P+d),Oe.nodeType===3&&(P+=Oe.nodeValue.length),(Ze=Oe.firstChild)!==null;)Pe=Oe,Oe=Ze;for(;;){if(Oe===t)break t;if(Pe===a&&++pe===f&&($=P),Pe===v&&++Re===d&&(X=P),(Ze=Oe.nextSibling)!==null)break;Oe=Pe,Pe=Oe.parentNode}Oe=Ze}a=$===-1||X===-1?null:{start:$,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vi={focusedElem:t,selectionRange:a},ct=!1,o=r;o!==null;)if(r=o,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,o=t;else for(;o!==null;){r=o;try{var st=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(st!==null){var ot=st.memoizedProps,qn=st.memoizedState,ue=r.stateNode,ne=ue.getSnapshotBeforeUpdate(r.elementType===r.type?ot:yr(r.type,ot),qn);ue.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(Fe){Rn(r,r.return,Fe)}if(t=r.sibling,t!==null){t.return=r.return,o=t;break}o=r.return}return st=x,x=!1,st}function S(t,r,a){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var f=d=d.next;do{if((f.tag&t)===t){var v=f.destroy;f.destroy=void 0,v!==void 0&&m(r,a,v)}f=f.next}while(f!==d)}}function z(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var d=a.create;a.destroy=d()}a=a.next}while(a!==r)}}function U(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function re(t){var r=t.alternate;r!==null&&(t.alternate=null,re(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[ji],delete r[Ta],delete r[fu],delete r[sp],delete r[op])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z(t){return t.tag===5||t.tag===3||t.tag===4}function me(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ve(t,r,a){var d=t.tag;if(d===5||d===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=ys));else if(d!==4&&(t=t.child,t!==null))for(ve(t,r,a),t=t.sibling;t!==null;)ve(t,r,a),t=t.sibling}function Ae(t,r,a){var d=t.tag;if(d===5||d===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(d!==4&&(t=t.child,t!==null))for(Ae(t,r,a),t=t.sibling;t!==null;)Ae(t,r,a),t=t.sibling}var Le=null,ze=!1;function Me(t,r,a){for(a=a.child;a!==null;)Ye(t,r,a),a=a.sibling}function Ye(t,r,a){if(T&&typeof T.onCommitFiberUnmount=="function")try{T.onCommitFiberUnmount(On,a)}catch{}switch(a.tag){case 5:s||h(a,r);case 6:var d=Le,f=ze;Le=null,Me(t,r,a),Le=d,ze=f,Le!==null&&(ze?(t=Le,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Le.removeChild(a.stateNode));break;case 18:Le!==null&&(ze?(t=Le,a=a.stateNode,t.nodeType===8?yl(t.parentNode,a):t.nodeType===1&&yl(t,a),be(t)):yl(Le,a.stateNode));break;case 4:d=Le,f=ze,Le=a.stateNode.containerInfo,ze=!0,Me(t,r,a),Le=d,ze=f;break;case 0:case 11:case 14:case 15:if(!s&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){f=d=d.next;do{var v=f,P=v.destroy;v=v.tag,P!==void 0&&((v&2)!==0||(v&4)!==0)&&m(a,r,P),f=f.next}while(f!==d)}Me(t,r,a);break;case 1:if(!s&&(h(a,r),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch($){Rn(a,r,$)}Me(t,r,a);break;case 21:Me(t,r,a);break;case 22:a.mode&1?(s=(d=s)||a.memoizedState!==null,Me(t,r,a),s=d):Me(t,r,a);break;default:Me(t,r,a)}}function lt(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new i),r.forEach(function(d){var f=ng.bind(null,t,d);a.has(d)||(a.add(d),d.then(f,f))})}}function Xe(t,r){var a=r.deletions;if(a!==null)for(var d=0;d<a.length;d++){var f=a[d];try{var v=t,P=r,$=P;e:for(;$!==null;){switch($.tag){case 5:Le=$.stateNode,ze=!1;break e;case 3:Le=$.stateNode.containerInfo,ze=!0;break e;case 4:Le=$.stateNode.containerInfo,ze=!0;break e}$=$.return}if(Le===null)throw Error(p(160));Ye(v,P,f),Le=null,ze=!1;var X=f.alternate;X!==null&&(X.return=null),f.return=null}catch(pe){Rn(f,r,pe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)kt(r,t),r=r.sibling}function kt(t,r){var a=t.alternate,d=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xe(r,t),jt(t),d&4){try{S(3,t,t.return),z(3,t)}catch(ot){Rn(t,t.return,ot)}try{S(5,t,t.return)}catch(ot){Rn(t,t.return,ot)}}break;case 1:Xe(r,t),jt(t),d&512&&a!==null&&h(a,a.return);break;case 5:if(Xe(r,t),jt(t),d&512&&a!==null&&h(a,a.return),t.flags&32){var f=t.stateNode;try{pt(f,"")}catch(ot){Rn(t,t.return,ot)}}if(d&4&&(f=t.stateNode,f!=null)){var v=t.memoizedProps,P=a!==null?a.memoizedProps:v,$=t.type,X=t.updateQueue;if(t.updateQueue=null,X!==null)try{$==="input"&&v.type==="radio"&&v.name!=null&&We(f,v),xt($,P);var pe=xt($,v);for(P=0;P<X.length;P+=2){var Re=X[P],Oe=X[P+1];Re==="style"?Hr(f,Oe):Re==="dangerouslySetInnerHTML"?yt(f,Oe):Re==="children"?pt(f,Oe):F(f,Re,Oe,pe)}switch($){case"input":rt(f,v);break;case"textarea":ge(f,v);break;case"select":var Pe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!v.multiple;var Ze=v.value;Ze!=null?ht(f,!!v.multiple,Ze,!1):Pe!==!!v.multiple&&(v.defaultValue!=null?ht(f,!!v.multiple,v.defaultValue,!0):ht(f,!!v.multiple,v.multiple?[]:"",!1))}f[Ta]=v}catch(ot){Rn(t,t.return,ot)}}break;case 6:if(Xe(r,t),jt(t),d&4){if(t.stateNode===null)throw Error(p(162));f=t.stateNode,v=t.memoizedProps;try{f.nodeValue=v}catch(ot){Rn(t,t.return,ot)}}break;case 3:if(Xe(r,t),jt(t),d&4&&a!==null&&a.memoizedState.isDehydrated)try{be(r.containerInfo)}catch(ot){Rn(t,t.return,ot)}break;case 4:Xe(r,t),jt(t);break;case 13:Xe(r,t),jt(t),f=t.child,f.flags&8192&&(v=f.memoizedState!==null,f.stateNode.isHidden=v,!v||f.alternate!==null&&f.alternate.memoizedState!==null||(Ua=At())),d&4&&lt(t);break;case 22:if(Re=a!==null&&a.memoizedState!==null,t.mode&1?(s=(pe=s)||Re,Xe(r,t),s=pe):Xe(r,t),jt(t),d&8192){if(pe=t.memoizedState!==null,(t.stateNode.isHidden=pe)&&!Re&&(t.mode&1)!==0)for(o=t,Re=t.child;Re!==null;){for(Oe=o=Re;o!==null;){switch(Pe=o,Ze=Pe.child,Pe.tag){case 0:case 11:case 14:case 15:S(4,Pe,Pe.return);break;case 1:h(Pe,Pe.return);var st=Pe.stateNode;if(typeof st.componentWillUnmount=="function"){d=Pe,a=Pe.return;try{r=d,st.props=r.memoizedProps,st.state=r.memoizedState,st.componentWillUnmount()}catch(ot){Rn(d,a,ot)}}break;case 5:h(Pe,Pe.return);break;case 22:if(Pe.memoizedState!==null){rr(Oe);continue}}Ze!==null?(Ze.return=Pe,o=Ze):rr(Oe)}Re=Re.sibling}e:for(Re=null,Oe=t;;){if(Oe.tag===5){if(Re===null){Re=Oe;try{f=Oe.stateNode,pe?(v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):($=Oe.stateNode,X=Oe.memoizedProps.style,P=X!=null&&X.hasOwnProperty("display")?X.display:null,$.style.display=Cr("display",P))}catch(ot){Rn(t,t.return,ot)}}}else if(Oe.tag===6){if(Re===null)try{Oe.stateNode.nodeValue=pe?"":Oe.memoizedProps}catch(ot){Rn(t,t.return,ot)}}else if((Oe.tag!==22&&Oe.tag!==23||Oe.memoizedState===null||Oe===t)&&Oe.child!==null){Oe.child.return=Oe,Oe=Oe.child;continue}if(Oe===t)break e;for(;Oe.sibling===null;){if(Oe.return===null||Oe.return===t)break e;Re===Oe&&(Re=null),Oe=Oe.return}Re===Oe&&(Re=null),Oe.sibling.return=Oe.return,Oe=Oe.sibling}}break;case 19:Xe(r,t),jt(t),d&4&&lt(t);break;case 21:break;default:Xe(r,t),jt(t)}}function jt(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(Z(a)){var d=a;break e}a=a.return}throw Error(p(160))}switch(d.tag){case 5:var f=d.stateNode;d.flags&32&&(pt(f,""),d.flags&=-33);var v=me(t);Ae(t,v,f);break;case 3:case 4:var P=d.stateNode.containerInfo,$=me(t);ve(t,$,P);break;default:throw Error(p(161))}}catch(X){Rn(t,t.return,X)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Bn(t,r,a){o=t,rn(t)}function rn(t,r,a){for(var d=(t.mode&1)!==0;o!==null;){var f=o,v=f.child;if(f.tag===22&&d){var P=f.memoizedState!==null||n;if(!P){var $=f.alternate,X=$!==null&&$.memoizedState!==null||s;$=n;var pe=s;if(n=P,(s=X)&&!pe)for(o=f;o!==null;)P=o,X=P.child,P.tag===22&&P.memoizedState!==null?vn(f):X!==null?(X.return=P,o=X):vn(f);for(;v!==null;)o=v,rn(v),v=v.sibling;o=f,n=$,s=pe}xr(t)}else(f.subtreeFlags&8772)!==0&&v!==null?(v.return=f,o=v):xr(t)}}function xr(t){for(;o!==null;){var r=o;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:s||z(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!s)if(a===null)d.componentDidMount();else{var f=r.elementType===r.type?a.memoizedProps:yr(r.type,a.memoizedProps);d.componentDidUpdate(f,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Xs(r,v,d);break;case 3:var P=r.updateQueue;if(P!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Xs(r,P,a)}break;case 5:var $=r.stateNode;if(a===null&&r.flags&4){a=$;var X=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&a.focus();break;case"img":X.src&&(a.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var pe=r.alternate;if(pe!==null){var Re=pe.memoizedState;if(Re!==null){var Oe=Re.dehydrated;Oe!==null&&be(Oe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}s||r.flags&512&&U(r)}catch(Pe){Rn(r,r.return,Pe)}}if(r===t){o=null;break}if(a=r.sibling,a!==null){a.return=r.return,o=a;break}o=r.return}}function rr(t){for(;o!==null;){var r=o;if(r===t){o=null;break}var a=r.sibling;if(a!==null){a.return=r.return,o=a;break}o=r.return}}function vn(t){for(;o!==null;){var r=o;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{z(4,r)}catch(X){Rn(r,a,X)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var f=r.return;try{d.componentDidMount()}catch(X){Rn(r,f,X)}}var v=r.return;try{U(r)}catch(X){Rn(r,v,X)}break;case 5:var P=r.return;try{U(r)}catch(X){Rn(r,P,X)}}}catch(X){Rn(r,r.return,X)}if(r===t){o=null;break}var $=r.sibling;if($!==null){$.return=r.return,o=$;break}o=r.return}}var br=Math.ceil,jn=q.ReactCurrentDispatcher,xn=q.ReactCurrentOwner,zt=q.ReactCurrentBatchConfig,dt=0,Ft=null,sn=null,ln=0,$t=0,wr=di(0),Nt=0,ao=null,kr=0,Oi=0,ts=0,An=null,Un=null,Ua=0,Hl=1/0,lo=null,Xc=!1,dp=null,Jo=null,Qc=!1,Xo=null,Zc=0,Ku=0,pp=null,ed=-1,td=0;function Fr(){return(dt&6)!==0?At():ed!==-1?ed:ed=At()}function Qo(t){return(t.mode&1)===0?1:(dt&2)!==0&&ln!==0?ln&-ln:Rc.transition!==null?(td===0&&(td=sa()),td):(t=Et,t!==0||(t=window.event,t=t===void 0?16:ki(t.type)),t)}function ns(t,r,a,d){if(50<Ku)throw Ku=0,pp=null,Error(p(185));Kn(t,a,d),((dt&2)===0||t!==Ft)&&(t===Ft&&((dt&2)===0&&(Oi|=a),Nt===4&&Zo(t,ln)),Zr(t,d),a===1&&dt===0&&(r.mode&1)===0&&(Hl=At()+500,vl&&ws()))}function Zr(t,r){var a=t.callbackNode;gt(t,r);var d=ai(t,t===Ft?ln:0);if(d===0)a!==null&&Fi(a),t.callbackNode=null,t.callbackPriority=0;else if(r=d&-d,t.callbackPriority!==r){if(a!=null&&Fi(a),r===1)t.tag===0?Ec(Th.bind(null,t)):Ni(Th.bind(null,t)),jc(function(){(dt&6)===0&&ws()}),a=null;else{switch(Hi(d)){case 1:a=wi;break;case 4:a=Xt;break;case 16:a=Qe;break;case 536870912:a=dr;break;default:a=Qe}a=Ih(a,Ch.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function Ch(t,r){if(ed=-1,td=0,(dt&6)!==0)throw Error(p(327));var a=t.callbackNode;if(Bl()&&t.callbackNode!==a)return null;var d=ai(t,t===Ft?ln:0);if(d===0)return null;if((d&30)!==0||(d&t.expiredLanes)!==0||r)r=nd(t,d);else{r=d;var f=dt;dt|=2;var v=Nh();(Ft!==t||ln!==r)&&(lo=null,Hl=At()+500,Ka(t,r));do try{Qm();break}catch($){jh(t,$)}while(!0);Sl(),jn.current=v,dt=f,sn!==null?r=0:(Ft=null,ln=0,r=Nt)}if(r!==0){if(r===2&&(f=xo(t),f!==0&&(d=f,r=hp(t,f))),r===1)throw a=ao,Ka(t,0),Zo(t,d),Zr(t,At()),a;if(r===6)Zo(t,d);else{if(f=t.current.alternate,(d&30)===0&&!Jm(f)&&(r=nd(t,d),r===2&&(v=xo(t),v!==0&&(d=v,r=hp(t,v))),r===1))throw a=ao,Ka(t,0),Zo(t,d),Zr(t,At()),a;switch(t.finishedWork=f,t.finishedLanes=d,r){case 0:case 1:throw Error(p(345));case 2:$a(t,Un,lo);break;case 3:if(Zo(t,d),(d&130023424)===d&&(r=Ua+500-At(),10<r)){if(ai(t,0)!==0)break;if(f=t.suspendedLanes,(f&d)!==d){Fr(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Ji($a.bind(null,t,Un,lo),r);break}$a(t,Un,lo);break;case 4:if(Zo(t,d),(d&4194240)===d)break;for(r=t.eventTimes,f=-1;0<d;){var P=31-fe(d);v=1<<P,P=r[P],P>f&&(f=P),d&=~v}if(d=f,d=At()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*br(d/1960))-d,10<d){t.timeoutHandle=Ji($a.bind(null,t,Un,lo),d);break}$a(t,Un,lo);break;case 5:$a(t,Un,lo);break;default:throw Error(p(329))}}}return Zr(t,At()),t.callbackNode===a?Ch.bind(null,t):null}function hp(t,r){var a=An;return t.current.memoizedState.isDehydrated&&(Ka(t,r).flags|=256),t=nd(t,r),t!==2&&(r=Un,Un=a,r!==null&&fp(r)),t}function fp(t){Un===null?Un=t:Un.push.apply(Un,t)}function Jm(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var f=a[d],v=f.getSnapshot;f=f.value;try{if(!Cn(v(),f))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Zo(t,r){for(r&=~ts,r&=~Oi,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-fe(r),d=1<<a;t[a]=-1,r&=~d}}function Th(t){if((dt&6)!==0)throw Error(p(327));Bl();var r=ai(t,0);if((r&1)===0)return Zr(t,At()),null;var a=nd(t,r);if(t.tag!==0&&a===2){var d=xo(t);d!==0&&(r=d,a=hp(t,d))}if(a===1)throw a=ao,Ka(t,0),Zo(t,r),Zr(t,At()),a;if(a===6)throw Error(p(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,$a(t,Un,lo),Zr(t,At()),null}function mp(t,r){var a=dt;dt|=1;try{return t(r)}finally{dt=a,dt===0&&(Hl=At()+500,vl&&ws())}}function qa(t){Xo!==null&&Xo.tag===0&&(dt&6)===0&&Bl();var r=dt;dt|=1;var a=zt.transition,d=Et;try{if(zt.transition=null,Et=1,t)return t()}finally{Et=d,zt.transition=a,dt=r,(dt&6)===0&&ws()}}function gp(){$t=wr.current,tn(wr)}function Ka(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Ca(a)),sn!==null)for(a=sn.return;a!==null;){var d=a;switch(bl(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Ao();break;case 3:Ai(),tn(mr),tn(Gn),Zs();break;case 5:wu(d);break;case 4:Ai();break;case 13:tn(an);break;case 19:tn(an);break;case 10:Wn(d.type._context);break;case 22:case 23:gp()}a=a.return}if(Ft=t,sn=t=ea(t.current,null),ln=$t=r,Nt=0,ao=null,ts=Oi=kr=0,Un=An=null,_s!==null){for(r=0;r<_s.length;r++)if(a=_s[r],d=a.interleaved,d!==null){a.interleaved=null;var f=d.next,v=a.pending;if(v!==null){var P=v.next;v.next=f,d.next=P}a.pending=d}_s=null}return t}function jh(t,r){do{var a=sn;try{if(Sl(),Tl.current=za,Oa){for(var d=hn.memoizedState;d!==null;){var f=d.queue;f!==null&&(f.pending=null),d=d.next}Oa=!1}if(eo=0,Mt=Hn=hn=null,Ma=!1,Da=0,xn.current=null,a===null||a.return===null){Nt=1,ao=r,sn=null;break}e:{var v=t,P=a.return,$=a,X=r;if(r=ln,$.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var pe=X,Re=$,Oe=Re.tag;if((Re.mode&1)===0&&(Oe===0||Oe===11||Oe===15)){var Pe=Re.alternate;Pe?(Re.updateQueue=Pe.updateQueue,Re.memoizedState=Pe.memoizedState,Re.lanes=Pe.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Ze=Fu(P);if(Ze!==null){Ze.flags&=-257,so(Ze,P,$,v,r),Ze.mode&1&&Kc(v,pe,r),r=Ze,X=pe;var st=r.updateQueue;if(st===null){var ot=new Set;ot.add(X),r.updateQueue=ot}else st.add(X);break e}else{if((r&1)===0){Kc(v,pe,r),yp();break e}X=Error(p(426))}}else if(nn&&$.mode&1){var qn=Fu(P);if(qn!==null){(qn.flags&65536)===0&&(qn.flags|=256),so(qn,P,$,v,r),Mo(io(X,$));break e}}v=X=io(X,$),Nt!==4&&(Nt=2),An===null?An=[v]:An.push(v),v=P;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var ue=Pl(v,X,r);Fo(v,ue);break e;case 1:$=X;var ne=v.type,ce=v.stateNode;if((v.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Jo===null||!Jo.has(ce)))){v.flags|=65536,r&=-r,v.lanes|=r;var Fe=zu(v,$,r);Fo(v,Fe);break e}}v=v.return}while(v!==null)}Lh(a)}catch(ut){r=ut,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function Nh(){var t=jn.current;return jn.current=za,t===null?za:t}function yp(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Ft===null||(kr&268435455)===0&&(Oi&268435455)===0||Zo(Ft,ln)}function nd(t,r){var a=dt;dt|=2;var d=Nh();(Ft!==t||ln!==r)&&(lo=null,Ka(t,r));do try{Xm();break}catch(f){jh(t,f)}while(!0);if(Sl(),dt=a,jn.current=d,sn!==null)throw Error(p(261));return Ft=null,ln=0,Nt}function Xm(){for(;sn!==null;)Eh(sn)}function Qm(){for(;sn!==null&&!si();)Eh(sn)}function Eh(t){var r=Rh(t.alternate,t,$t);t.memoizedProps=t.pendingProps,r===null?Lh(t):sn=r,xn.current=null}function Lh(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=Wl(a,r,$t),a!==null){sn=a;return}}else{if(a=e(a,r),a!==null){a.flags&=32767,sn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,sn=null;return}}if(r=r.sibling,r!==null){sn=r;return}sn=r=t}while(r!==null);Nt===0&&(Nt=5)}function $a(t,r,a){var d=Et,f=zt.transition;try{zt.transition=null,Et=1,Zm(t,r,a,d)}finally{zt.transition=f,Et=d}return null}function Zm(t,r,a,d){do Bl();while(Xo!==null);if((dt&6)!==0)throw Error(p(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(p(177));t.callbackNode=null,t.callbackPriority=0;var v=a.lanes|a.childLanes;if(Rs(t,v),t===Ft&&(sn=Ft=null,ln=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Qc||(Qc=!0,Ih(Qe,function(){return Bl(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=zt.transition,zt.transition=null;var P=Et;Et=1;var $=dt;dt|=4,xn.current=null,w(t,a),kt(a,t),tp(Vi),ct=!!gl,Vi=gl=null,t.current=a,Bn(a),bi(),dt=$,Et=P,zt.transition=v}else t.current=a;if(Qc&&(Qc=!1,Xo=t,Zc=f),v=t.pendingLanes,v===0&&(Jo=null),B(a.stateNode),Zr(t,At()),r!==null)for(d=t.onRecoverableError,a=0;a<r.length;a++)f=r[a],d(f.value,{componentStack:f.stack,digest:f.digest});if(Xc)throw Xc=!1,t=dp,dp=null,t;return(Zc&1)!==0&&t.tag!==0&&Bl(),v=t.pendingLanes,(v&1)!==0?t===pp?Ku++:(Ku=0,pp=t):Ku=0,ws(),null}function Bl(){if(Xo!==null){var t=Hi(Zc),r=zt.transition,a=Et;try{if(zt.transition=null,Et=16>t?16:t,Xo===null)var d=!1;else{if(t=Xo,Xo=null,Zc=0,(dt&6)!==0)throw Error(p(331));var f=dt;for(dt|=4,o=t.current;o!==null;){var v=o,P=v.child;if((o.flags&16)!==0){var $=v.deletions;if($!==null){for(var X=0;X<$.length;X++){var pe=$[X];for(o=pe;o!==null;){var Re=o;switch(Re.tag){case 0:case 11:case 15:S(8,Re,v)}var Oe=Re.child;if(Oe!==null)Oe.return=Re,o=Oe;else for(;o!==null;){Re=o;var Pe=Re.sibling,Ze=Re.return;if(re(Re),Re===pe){o=null;break}if(Pe!==null){Pe.return=Ze,o=Pe;break}o=Ze}}}var st=v.alternate;if(st!==null){var ot=st.child;if(ot!==null){st.child=null;do{var qn=ot.sibling;ot.sibling=null,ot=qn}while(ot!==null)}}o=v}}if((v.subtreeFlags&2064)!==0&&P!==null)P.return=v,o=P;else e:for(;o!==null;){if(v=o,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:S(9,v,v.return)}var ue=v.sibling;if(ue!==null){ue.return=v.return,o=ue;break e}o=v.return}}var ne=t.current;for(o=ne;o!==null;){P=o;var ce=P.child;if((P.subtreeFlags&2064)!==0&&ce!==null)ce.return=P,o=ce;else e:for(P=ne;o!==null;){if($=o,($.flags&2048)!==0)try{switch($.tag){case 0:case 11:case 15:z(9,$)}}catch(ut){Rn($,$.return,ut)}if($===P){o=null;break e}var Fe=$.sibling;if(Fe!==null){Fe.return=$.return,o=Fe;break e}o=$.return}}if(dt=f,ws(),T&&typeof T.onPostCommitFiberRoot=="function")try{T.onPostCommitFiberRoot(On,t)}catch{}d=!0}return d}finally{Et=a,zt.transition=r}}return!1}function Ph(t,r,a){r=io(a,r),r=Pl(t,r,1),t=hi(t,r,1),r=Fr(),t!==null&&(Kn(t,1,r),Zr(t,r))}function Rn(t,r,a){if(t.tag===3)Ph(t,t,a);else for(;r!==null;){if(r.tag===3){Ph(r,t,a);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Jo===null||!Jo.has(d))){t=io(a,t),t=zu(r,t,1),r=hi(r,t,1),t=Fr(),r!==null&&(Kn(r,1,t),Zr(r,t));break}}r=r.return}}function eg(t,r,a){var d=t.pingCache;d!==null&&d.delete(r),r=Fr(),t.pingedLanes|=t.suspendedLanes&a,Ft===t&&(ln&a)===a&&(Nt===4||Nt===3&&(ln&130023424)===ln&&500>At()-Ua?Ka(t,0):ts|=a),Zr(t,r)}function Ah(t,r){r===0&&((t.mode&1)===0?r=1:(r=en,en<<=1,(en&130023424)===0&&(en=4194304)));var a=Fr();t=Li(t,r),t!==null&&(Kn(t,r,a),Zr(t,a))}function tg(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),Ah(t,a)}function ng(t,r){var a=0;switch(t.tag){case 13:var d=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:d=t.stateNode;break;default:throw Error(p(314))}d!==null&&d.delete(r),Ah(t,a)}var Rh;Rh=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||mr.current)Zn=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return Zn=!1,cp(t,r,a);Zn=(t.flags&131072)!==0}else Zn=!1,nn&&(r.flags&1048576)!==0&&xl(r,Pr,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Fl(t,r),t=r.pendingProps;var f=Po(r,Gn.current);Vs(r,a),f=El(null,r,d,t,f,a);var v=ku();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,tr(d)?(v=!0,Ro(r)):v=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,_l(r),f.updater=Wa,r.stateNode=f,f._reactInternals=r,Ou(r,d,t,a),r=Vo(null,r,d,!0,v,a)):(r.tag=0,nn&&v&&$s(r),vr(null,r,f,a),r=r.child),r;case 16:d=r.elementType;e:{switch(Fl(t,r),t=r.pendingProps,f=d._init,d=f(d._payload),r.type=d,f=r.tag=ig(d),t=yr(d,t),f){case 0:r=oo(null,r,d,t,a);break e;case 1:r=Qr(null,r,d,t,a);break e;case 11:r=Gc(null,r,d,t,a);break e;case 14:r=Yc(null,r,d,yr(d.type,t),a);break e}throw Error(p(306,d,""))}return r;case 0:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),oo(t,r,d,f,a);case 1:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),Qr(t,r,d,f,a);case 3:e:{if(Rl(r),t===null)throw Error(p(387));d=r.pendingProps,v=r.memoizedState,f=v.element,Js(t,r),Cl(r,d,null,a);var P=r.memoizedState;if(d=P.element,v.isDehydrated)if(v={element:d,isDehydrated:!1,cache:P.cache,pendingSuspenseBoundaries:P.pendingSuspenseBoundaries,transitions:P.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){f=io(Error(p(423)),r),r=Wu(t,r,d,a,f);break e}else if(d!==f){f=io(Error(p(424)),r),r=Wu(t,r,d,a,f);break e}else for(Pn=vs(r.stateNode.containerInfo.firstChild),gr=r,nn=!0,Vr=null,a=Pa(r,null,d,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Oo(),d===f){r=Ar(t,r,a);break e}vr(t,r,d,a)}r=r.child}return r;case 5:return bu(r),t===null&&wl(r),d=r.type,f=r.pendingProps,v=t!==null?t.memoizedProps:null,P=f.children,Hs(d,f)?P=null:v!==null&&Hs(d,v)&&(r.flags|=32),Al(t,r),vr(t,r,P,a),r.child;case 6:return t===null&&wl(r),null;case 13:return Ml(t,r,a);case 4:return Qs(r,r.stateNode.containerInfo),d=r.pendingProps,t===null?r.child=Ss(r,null,d,a):vr(t,r,d,a),r.child;case 11:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),Gc(t,r,d,f,a);case 7:return vr(t,r,r.pendingProps,a),r.child;case 8:return vr(t,r,r.pendingProps.children,a),r.child;case 12:return vr(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(d=r.type._context,f=r.pendingProps,v=r.memoizedProps,P=f.value,Qt(Aa,d._currentValue),d._currentValue=P,v!==null)if(Cn(v.value,P)){if(v.children===f.children&&!mr.current){r=Ar(t,r,a);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var $=v.dependencies;if($!==null){P=v.child;for(var X=$.firstContext;X!==null;){if(X.context===d){if(v.tag===1){X=Pi(-1,a&-a),X.tag=2;var pe=v.updateQueue;if(pe!==null){pe=pe.shared;var Re=pe.pending;Re===null?X.next=X:(X.next=Re.next,Re.next=X),pe.pending=X}}v.lanes|=a,X=v.alternate,X!==null&&(X.lanes|=a),zo(v.return,a,r),$.lanes|=a;break}X=X.next}}else if(v.tag===10)P=v.type===r.type?null:v.child;else if(v.tag===18){if(P=v.return,P===null)throw Error(p(341));P.lanes|=a,$=P.alternate,$!==null&&($.lanes|=a),zo(P,a,r),P=v.sibling}else P=v.child;if(P!==null)P.return=v;else for(P=v;P!==null;){if(P===r){P=null;break}if(v=P.sibling,v!==null){v.return=P.return,P=v;break}P=P.return}v=P}vr(t,r,f.children,a),r=r.child}return r;case 9:return f=r.type,d=r.pendingProps.children,Vs(r,a),f=zr(f),d=d(f),r.flags|=1,vr(t,r,d,a),r.child;case 14:return d=r.type,f=yr(d,r.pendingProps),f=yr(d.type,f),Yc(t,r,d,f,a);case 15:return Zt(t,r,r.type,r.pendingProps,a);case 17:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),Fl(t,r),r.tag=1,tr(d)?(t=!0,Ro(r)):t=!1,Vs(r,a),Bc(r,d,f),Ou(r,d,f,a),Vo(null,r,d,!0,t,a);case 19:return Uu(t,r,a);case 22:return Vc(t,r,a)}throw Error(p(156,r.tag))};function Ih(t,r){return Er(t,r)}function rg(t,r,a,d){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(t,r,a,d){return new rg(t,r,a,d)}function vp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ig(t){if(typeof t=="function")return vp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Te)return 11;if(t===L)return 14}return 2}function ea(t,r){var a=t.alternate;return a===null?(a=Mi(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function rd(t,r,a,d,f,v){var P=2;if(d=t,typeof t=="function")vp(t)&&(P=1);else if(typeof t=="string")P=5;else e:switch(t){case le:return Ga(a.children,f,v,r);case we:P=8,f|=8;break;case He:return t=Mi(12,a,r,f|2),t.elementType=He,t.lanes=v,t;case se:return t=Mi(13,a,r,f),t.elementType=se,t.lanes=v,t;case ye:return t=Mi(19,a,r,f),t.elementType=ye,t.lanes=v,t;case K:return id(a,f,v,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ne:P=10;break e;case ie:P=9;break e;case Te:P=11;break e;case L:P=14;break e;case J:P=16,d=null;break e}throw Error(p(130,t==null?t:typeof t,""))}return r=Mi(P,a,r,f),r.elementType=t,r.type=d,r.lanes=v,r}function Ga(t,r,a,d){return t=Mi(7,t,d,r),t.lanes=a,t}function id(t,r,a,d){return t=Mi(22,t,d,r),t.elementType=K,t.lanes=a,t.stateNode={isHidden:!1},t}function xp(t,r,a){return t=Mi(6,t,null,r),t.lanes=a,t}function bp(t,r,a){return r=Mi(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function sg(t,r,a,d,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wi(0),this.expirationTimes=Wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.identifierPrefix=d,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function wp(t,r,a,d,f,v,P,$,X){return t=new sg(t,r,a,$,X),r===1?(r=1,v===!0&&(r|=8)):r=0,v=Mi(3,null,null,r),t.current=v,v.stateNode=t,v.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},_l(v),t}function og(t,r,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:d==null?null:""+d,children:t,containerInfo:r,implementation:a}}function Oh(t){if(!t)return bs;t=t._reactInternals;e:{if(kn(t)!==t||t.tag!==1)throw Error(p(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(tr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(p(171))}if(t.tag===1){var a=t.type;if(tr(a))return gu(t,a,r)}return r}function Mh(t,r,a,d,f,v,P,$,X){return t=wp(a,d,!0,t,f,v,P,$,X),t.context=Oh(null),a=t.current,d=Fr(),f=Qo(a),v=Pi(d,f),v.callback=r??null,hi(a,v,f),t.current.lanes=f,Kn(t,f,d),Zr(t,d),t}function sd(t,r,a,d){var f=r.current,v=Fr(),P=Qo(f);return a=Oh(a),r.context===null?r.context=a:r.pendingContext=a,r=Pi(v,P),r.payload={element:t},d=d===void 0?null:d,d!==null&&(r.callback=d),t=hi(f,r,P),t!==null&&(ns(t,f,P,v),Ia(t,f,P)),P}function od(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dh(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function kp(t,r){Dh(t,r),(t=t.alternate)&&Dh(t,r)}function ag(){return null}var zh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sp(t){this._internalRoot=t}ad.prototype.render=Sp.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(p(409));sd(t,r,null,null)},ad.prototype.unmount=Sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;qa(function(){sd(null,t,null,null)}),r[Xi]=null}};function ad(t){this._internalRoot=t}ad.prototype.unstable_scheduleHydration=function(t){if(t){var r=oa();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Mr.length&&r!==0&&r<Mr[a].priority;a++);Mr.splice(a,0,t),a===0&&wo(t)}};function _p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fh(){}function lg(t,r,a,d,f){if(f){if(typeof d=="function"){var v=d;d=function(){var pe=od(P);v.call(pe)}}var P=Mh(r,d,t,0,null,!1,!1,"",Fh);return t._reactRootContainer=P,t[Xi]=P.current,ms(t.nodeType===8?t.parentNode:t),qa(),P}for(;f=t.lastChild;)t.removeChild(f);if(typeof d=="function"){var $=d;d=function(){var pe=od(X);$.call(pe)}}var X=wp(t,0,!1,null,null,!1,!1,"",Fh);return t._reactRootContainer=X,t[Xi]=X.current,ms(t.nodeType===8?t.parentNode:t),qa(function(){sd(r,X,a,d)}),X}function ud(t,r,a,d,f){var v=a._reactRootContainer;if(v){var P=v;if(typeof f=="function"){var $=f;f=function(){var X=od(P);$.call(X)}}sd(r,P,t,f)}else P=lg(a,r,t,f,d);return od(P)}$r=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Sn(r.pendingLanes);a!==0&&(ls(r,a|1),Zr(r,At()),(dt&6)===0&&(Hl=At()+500,ws()))}break;case 13:qa(function(){var d=Li(t,1);if(d!==null){var f=Fr();ns(d,t,1,f)}}),kp(t,1)}},li=function(t){if(t.tag===13){var r=Li(t,134217728);if(r!==null){var a=Fr();ns(r,t,134217728,a)}kp(t,134217728)}},pr=function(t){if(t.tag===13){var r=Qo(t),a=Li(t,r);if(a!==null){var d=Fr();ns(a,t,r,d)}kp(t,r)}},oa=function(){return Et},us=function(t,r){var a=Et;try{return Et=t,r()}finally{Et=a}},Tr=function(t,r,a){switch(r){case"input":if(rt(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var d=a[r];if(d!==t&&d.form===t.form){var f=yn(d);if(!f)throw Error(p(90));Ht(d),rt(d,f)}}}break;case"textarea":ge(t,a);break;case"select":r=a.value,r!=null&&ht(t,!!a.multiple,r,!1)}},lr=mp,wn=qa;var ug={usingClientEntryPoint:!1,Events:[pn,Tn,yn,Nn,cn,mp]},$u={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cg={bundleType:$u.bundleType,version:$u.version,rendererPackageName:$u.rendererPackageName,rendererConfig:$u.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nr(t),t===null?null:t.stateNode},findFiberByHostInstance:$u.findFiberByHostInstance||ag,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cd.isDisabled&&cd.supportsFiber)try{On=cd.inject(cg),T=cd}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ug,ei.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_p(r))throw Error(p(200));return og(t,r,null,a)},ei.createRoot=function(t,r){if(!_p(t))throw Error(p(299));var a=!1,d="",f=zh;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=wp(t,1,!1,null,null,a,!1,d,f),t[Xi]=r.current,ms(t.nodeType===8?t.parentNode:t),new Sp(r)},ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=Nr(r),t=t===null?null:t.stateNode,t},ei.flushSync=function(t){return qa(t)},ei.hydrate=function(t,r,a){if(!ld(r))throw Error(p(200));return ud(null,t,r,!0,a)},ei.hydrateRoot=function(t,r,a){if(!_p(t))throw Error(p(405));var d=a!=null&&a.hydratedSources||null,f=!1,v="",P=zh;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(P=a.onRecoverableError)),r=Mh(r,null,t,1,a??null,f,!1,v,P),t[Xi]=r.current,ms(t),d)for(t=0;t<d.length;t++)a=d[t],f=a._getVersion,f=f(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,f]:r.mutableSourceEagerHydrationData.push(a,f);return new ad(r)},ei.render=function(t,r,a){if(!ld(r))throw Error(p(200));return ud(null,t,r,!1,a)},ei.unmountComponentAtNode=function(t){if(!ld(t))throw Error(p(40));return t._reactRootContainer?(qa(function(){ud(null,null,t,!1,function(){t._reactRootContainer=null,t[Xi]=null})}),!0):!1},ei.unstable_batchedUpdates=mp,ei.unstable_renderSubtreeIntoContainer=function(t,r,a,d){if(!ld(a))throw Error(p(200));if(t==null||t._reactInternals===void 0)throw Error(p(38));return ud(t,r,a,!1,d)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var Gh;function wg(){if(Gh)return jp.exports;Gh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),jp.exports=bg(),jp.exports}var Yh;function kg(){if(Yh)return dd;Yh=1;var l=wg();return dd.createRoot=l.createRoot,dd.hydrateRoot=l.hydrateRoot,dd}var Sg=kg();const _g=[["Avery","Morgan","averym","Avery","p1"],["Jordan","Brooks","jbrooks17","Jordan Brooks","p1"],["Taylor","Reed","treed","T. Reed","p1"],["Casey","Nguyen","cnguyen","Casey","p1"],["Riley","Davis","rileyd","Riley","p1"],["Maya","Patel","maya-p","Maya","p3"],["Cameron","Lee","clee","Cameron Lee","p3"],["Sydney","Wilson","sydneyw","Sydney","p3"],["Quinn","Martinez","qmartinez","Quinn","p3"],["Bailey","Adams","bailey_a","Bailey","p5"],["Sam","Rivera","rivera-s","Sam","p5"],["Charlie","Brown","charlieb","Charlie","p6"],["Drew","Johnson","drewj","Drew","p6"],["Alex","Kim","alexk","Alex","p7"],["Robin","Clark","robin-c","Robin","p7"],["Jamie","Flores","jflores","Jamie","p8"]],kd=_g.map(([l,u,p,g,y],b)=>({id:`sample-${b+1}`,first:l,last:u,sheetName:b===3||b===11?null:`${l} ${u}`,github:p,studentName:g,sections:b===0?["p1","p3"]:[y],status:b%5===0?"Active now":b%4===0?"Viewing page":"No recent signal",current:b%3===0?"Strings and Variables":b%3===1?"Format a Summary":"Intro to Arrays",assignments:[{id:"strings",name:"Strings and Variables",type:"Lesson",status:"Completed",score:b%4===0?null:8+b%3,possible:10,submitted:"2026-11-02"},{id:"summary",name:"Format a Summary",type:"Challenge",status:b%4===0?"Started":"Completed",score:b%4===0?null:11+b%5,possible:15,submitted:"2026-11-03"},{id:"decisions",name:"Decision Tree",type:"Challenge",status:b%3===0?"Submitted":"Needs revision",score:b%3===0?10:null,possible:20,submitted:"2026-10-28"},{id:"reflection",name:"Debugging Reflection",type:"Lesson",status:"Practice completed",score:null,possible:5,submitted:"2026-10-26"}],weekly:{"2026-11-02":b%4===0?0:19+b%6,"2026-10-26":b%3===0?12:8+b%5}})),Cg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function Sd(l=new Date){const u=Object.fromEntries(Cg.formatToParts(l).filter(g=>g.type!=="literal").map(g=>[g.type,g.value])),p=new Date(Date.UTC(Number(u.year),Number(u.month)-1,Number(u.day)));return p.setUTCDate(p.getUTCDate()-(p.getUTCDay()+6)%7),p.toISOString().slice(0,10)}function Bp(l=new Date,u=8){const p=new Date(Sd(l)+"T12:00:00Z");return Array.from({length:u},(g,y)=>{const b=new Date(p);return b.setUTCDate(b.getUTCDate()-y*7),b.toISOString().slice(0,10)})}const $l=l=>new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"America/Chicago"}),Tg=(l,u,p)=>`${l}|${u}|${p}`;function jg({response:l,type:u,aiUse:p,aiDetails:g}){return["essay","logic-puzzle"].includes(u)?String(l).trim().length<10?"Write your answer and explain your thinking.":["none","disclosed"].includes(p)?p==="disclosed"&&String(g).trim().length<5?"Describe which parts involved AI.":"":"Complete the AI-use declaration.":"Select an essay or logic puzzle."}const Ng=[{id:"seed-journal-1",sectionId:"p1",studentId:"sample-2",studentName:"Jordan Brooks",courseId:"computer-science-1",week:Sd(),type:"essay",response:"When I debug code, I first reproduce the problem and read the error carefully. Next I try one small change and test again. I keep notes so I can explain what fixed the problem and why.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()},{id:"seed-journal-2",sectionId:"p1",studentId:"sample-3",studentName:"Taylor Reed",courseId:"computer-science-1",week:Sd(),type:"logic-puzzle",response:"The differences are 4, 6, 8, and 10. The next difference is 12, so the next number is 42. This also follows the pattern n(n+1), starting at n = 1.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()}],Ns={"game-programming":[{id:"csharp-foundations",title:"C# Foundations",description:"Build the logic behind games.",lessons:["csharp-variables","csharp-conditionals"]},{id:"unity-systems",title:"Unity Gameplay",description:"Connect scripts and game mechanics.",lessons:["unity-colliders","unity-player-controller","unity-score"]}],"mobile-app-dev":[{id:"web-basics",title:"Web Foundations",description:"Create and style interface elements.",lessons:["web-layout","web-events"]},{id:"react-foundations",title:"React Essentials",description:"Build reusable and interactive UI.",lessons:["react-components","react-state"]}],uil:[{id:"java-language",title:"Java Language & Tracing",description:"Reason about loops and variables.",lessons:["uil-loops","uil-methods"]},{id:"java-data",title:"Data Structures",description:"Trace arrays and string operations.",lessons:["uil-arrays","uil-strings"]}],"tsi-math":[{id:"tsi-quantitative",title:"Quantitative Reasoning",description:"Rates, ratios, percentages, and proportions.",lessons:["tsi-ratios","tsi-percents"]},{id:"tsi-algebra",title:"Algebraic Reasoning",description:"Solve equations and interpret graphs.",lessons:["tsi-equations","tsi-slope"]}],capstone:[{id:"capstone-discover",title:"Discover the Problem",description:"Investigate a need worth solving.",lessons:["capstone-discovery","capstone-interviews"]},{id:"capstone-validate",title:"Prototype & Validate",description:"Turn evidence into an iterated prototype.",lessons:["capstone-prototype","capstone-feedback"]}]},oc=[{id:"asvab",title:"ASVAB",subtitle:"Military aptitude",description:"Start with the four AFQT subjects; technical subtests can be added later.",reference:"https://www.officialasvab.com/applicants/sample-questions/",topics:[{id:"asvab-ar",title:"Arithmetic Reasoning",description:"Use math to solve everyday word problems.",questions:[{id:"asvab-ar-sample-01",prompt:"A supply team divides 96 bolts equally among 8 tool kits. How many bolts go into each kit?",options:["8","10","12","16"],correct:2,explanation:"Divide 96 by 8. Each tool kit receives 12 bolts."},{id:"asvab-ar-sample-02",prompt:"A delivery vehicle travels 180 miles in 3 hours at a steady speed. What is its average speed?",options:["45 mph","60 mph","75 mph","90 mph"],correct:1,explanation:"Average speed equals distance divided by time: 180 ÷ 3 = 60 mph."}]},{id:"asvab-wk",title:"Word Knowledge",description:"Practice synonyms and vocabulary in context.",questions:[{id:"asvab-wk-sample-01",prompt:'In the sentence "The technician was meticulous when checking each connection," meticulous most nearly means:',options:["hurried","careful","uninterested","unprepared"],correct:1,explanation:"Meticulous describes someone who gives careful attention to detail."},{id:"asvab-wk-sample-02",prompt:'The word "scarce" most nearly means:',options:["plentiful","fragile","limited","unusual"],correct:2,explanation:"If something is scarce, there is not much of it available."}]},{id:"asvab-pc",title:"Paragraph Comprehension",description:"Identify main ideas and supporting details.",questions:[{id:"asvab-pc-sample-01",prompt:"Passage: The neighborhood library added Saturday hours because weekday attendance had increased. Staff hope the extra day will help working families visit. Why did the library extend its schedule?",options:["To replace weekday hours","To make visits easier for more people","To reduce staff","To host only weekend events"],correct:1,explanation:"The passage says Saturday hours respond to demand and help working families visit."},{id:"asvab-pc-sample-02",prompt:"Passage: Before using the lab, workers inspect equipment, record damaged items, and report problems. This routine helps prevent interruptions and injuries. What is the main purpose of the routine?",options:["Improving safety and reliability","Making the lab look new","Reducing all written records","Increasing equipment costs"],correct:0,explanation:"The checklist catches problems early and lowers risk to people and equipment."}]},{id:"asvab-mk",title:"Mathematics Knowledge",description:"Review algebra, geometry, and number sense.",questions:[{id:"asvab-mk-sample-01",prompt:"Solve for x: 3(x − 2) = 15.",options:["3","5","7","9"],correct:2,explanation:"Divide by 3: x − 2 = 5. Add 2: x = 7."},{id:"asvab-mk-sample-02",prompt:"What is the area of a triangle with a base of 10 units and a height of 7 units?",options:["17 square units","35 square units","70 square units","140 square units"],correct:1,explanation:"Triangle area is one-half times base times height: (10 × 7) ÷ 2 = 35."}]}]},{id:"sat",title:"SAT",subtitle:"Digital SAT",description:"Practice the Reading and Writing and Math sections. These samples are not adaptive and do not produce SAT scores.",reference:"https://satsuite.collegeboard.org/sat/practice-preparation",topics:[{id:"sat-rw",title:"Reading and Writing",description:"Interpret short passages, revise sentences, and choose transitions.",questions:[{id:"sat-rw-sample-01",prompt:'Choose the best transition: "Maya planned to bike to school. _____, heavy rain forced her to take the bus."',options:["For example","However","Similarly","Therefore"],correct:1,explanation:"However signals the contrast between Maya's plan and what happened."},{id:"sat-rw-sample-02",prompt:"Choose the grammatically correct sentence.",options:["Each of the notebooks have a label.","Each of the notebooks has a label.","Each of the notebooks are labeled.","Each of the notebook have labels."],correct:1,explanation:"The subject each is singular, so it takes has."}]},{id:"sat-math",title:"Math",description:"Use algebra and problem-solving strategies.",questions:[{id:"sat-math-sample-01",prompt:"If f(x) = 2x + 5, what is f(4)?",options:["9","11","13","18"],correct:2,explanation:"Substitute 4 for x: f(4) = 2(4) + 5 = 13."},{id:"sat-math-sample-02",prompt:"If 2x + y = 11 and y = 3, what is x?",options:["3","4","5","7"],correct:1,explanation:"Replace y with 3: 2x + 3 = 11, so 2x = 8 and x = 4."}]}]},{id:"act",title:"ACT",subtitle:"Enhanced ACT",description:"Practice English, Math, Reading, and optional Science using the updated ACT structure.",reference:"https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/act-exam-sections-and-structure.html",topics:[{id:"act-english",title:"English",description:"Revise sentences for grammar and clarity.",questions:[{id:"act-english-sample-01",prompt:'Choose the correct verb: "The team of engineers _____ ready to begin."',options:["are","is","were","have"],correct:1,explanation:"The singular subject team takes the singular verb is."},{id:"act-english-sample-02",prompt:"Choose the correctly punctuated sentence.",options:["After the storm the street was quiet.","After the storm, the street was quiet.","After, the storm the street was quiet.","After the storm the, street was quiet."],correct:1,explanation:"An introductory phrase is commonly followed by a comma."}]},{id:"act-math",title:"Math",description:"Practice algebra, geometry, and problem solving.",questions:[{id:"act-math-sample-01",prompt:"What is the slope of the line through (2, 1) and (6, 9)?",options:["1","2","4","8"],correct:1,explanation:"Slope = change in y ÷ change in x = (9 − 1) ÷ (6 − 2) = 8 ÷ 4 = 2."},{id:"act-math-sample-02",prompt:"A rectangle measures 8 inches by 5 inches. What is its perimeter?",options:["13 inches","26 inches","40 inches","80 inches"],correct:1,explanation:"Perimeter = 2(length + width) = 2(8 + 5) = 26 inches."}]},{id:"act-reading",title:"Reading",description:"Find key details and reasonable inferences.",questions:[{id:"act-reading-sample-01",prompt:"Passage: Lena repaired an old bicycle rather than buy a new one. She replaced the chain and adjusted the brakes so she could use it to commute. Which statement is supported?",options:["Lena sold the bike.","Lena intends to ride the repaired bike.","Lena cannot fix brakes.","Lena purchased a new bike."],correct:1,explanation:"The passage explicitly says Lena repaired the bike to use it for commuting."},{id:"act-reading-sample-02",prompt:"Passage: Residents created a neighborhood garden on an empty lot. Volunteers donated seeds, installed raised beds, and shared the harvest. What best describes the project?",options:["A commercial farm run by one company","A volunteer project that benefits neighbors","A plan to close the lot permanently","An indoor science experiment"],correct:1,explanation:"The volunteers worked together on a shared garden and harvest."}]},{id:"act-science",title:"Science (optional)",description:"Interpret experimental results, charts, and evidence.",questions:[{id:"act-science-sample-01",prompt:"In an experiment, a plant grew 2 cm at 10°C, 4 cm at 20°C, and 6 cm at 30°C over the same period. What pattern is shown?",options:["Growth decreases as temperature increases.","Growth remains constant.","Growth increases with temperature in these trials.","Temperature has no measurable relationship."],correct:2,explanation:"The recorded growth rises from 2 to 4 to 6 cm as temperature increases across these trials."},{id:"act-science-sample-02",prompt:"Two identical seedlings get the same light and water. One receives fertilizer and the other does not. Which variable is intentionally changed?",options:["Amount of light","Amount of water","Type of plant","Use of fertilizer"],correct:3,explanation:"Fertilizer is the independent variable; the other conditions are kept the same."}]}]}],Vh=oc.map(l=>({id:l.id,title:l.title,description:l.description,lessons:l.topics.map(u=>u.id)})),Eg=Object.fromEntries(oc.flatMap(l=>l.topics.map(u=>[u.id,{id:u.id,title:u.title,summary:u.description,language:"text",kind:"Sample practice",trackId:l.id}]))),Lg=l=>{for(const u of oc){const p=u.topics.find(g=>g.id===l);if(p)return{track:u,topic:p}}return null};oc.reduce((l,u)=>l+u.topics.reduce((p,g)=>p+g.questions.length,0),0);const Pg=[{id:"01-how-programs-work/01-first-message",unit:1,unitName:"How Programs Work",lesson:1,slug:"01-first-message",title:"Instructions and output",concept:"Output and strings",summary:"Tell a computer what to display using a simple Python instruction.",mode:"script",starter:`# Use print() to display the exact welcome message.
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
`}],Ag=[{id:"02-values-and-variables/01-meet-variables",unit:2,unitName:"Values, Variables & Expressions",lesson:1,slug:"01-meet-variables",title:"Names for changing information",concept:"Variables and assignment  ",summary:"Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.",mode:"script",starter:`# Name the player with a variable, then display the required message.
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
`}],Rg=[{id:"03-functions-and-parameters/01-functions-return",unit:3,unitName:"Functions, Parameters & Return Values",lesson:1,slug:"01-functions-return",title:"Returning an answer",concept:"Function definitions and return  ",summary:"A function packages instructions into a reusable operation. A function can give a result back with `return`.",mode:"function",starter:`def increment_number(number):
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
`}],Ig=[{id:"04-comparisons-and-boolean-logic/01-comparisons",unit:4,unitName:"Comparisons & Boolean Logic",lesson:1,slug:"01-comparisons",title:"Ask Python a question",concept:"Comparison operators and Boolean values  ",summary:"A comparison is a question that evaluates to a Boolean value: `True` or `False`.",mode:"function",starter:`def has_required_points(current, required):
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
`}],Og=[{id:"05-conditional-execution/01-first-if",unit:5,unitName:"Conditional Execution",lesson:1,slug:"01-first-if",title:"Make a choice with if",concept:"If statements and indentation  ",summary:"Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.",mode:"function",starter:`def classify_temperature(temperature):
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
`}],Mg=[{id:"06-iteration/01-for-ranges",unit:6,unitName:"Iteration & Accumulation",lesson:1,slug:"01-for-ranges",title:"Repeat an instruction",concept:"For loops and ranges  ",summary:"A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.",mode:"script",starter:`# Use one loop to print the integers 1 through 4.
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
`}],Dg=[{id:"07-strings-and-text/01-index-and-length",unit:7,unitName:"Strings & Text Processing",lesson:1,slug:"01-index-and-length",title:"Read characters by position",concept:"String indexing and length",summary:"A string is an ordered sequence of characters. Positions start at zero, and negative indexes count from the end.",mode:"function",starter:`def edge_letters(text):
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
`}],zg=[{id:"08-lists-and-collections/01-list-indexing",unit:8,unitName:"Lists & Collections",lesson:1,slug:"01-list-indexing",title:"Read values from a list",concept:"Lists, indexes, negative positions",summary:"A list stores several values in order, and each can be read using its position.",mode:"function",starter:`def end_points(values):
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
`}],Fg=[{id:"09-dictionaries-and-data/01-keys-and-values",unit:9,unitName:"Dictionaries & Data",lesson:1,slug:"01-keys-and-values",title:"Look up information by key",concept:"Dictionary lookup and get",summary:"Dictionaries connect unique keys with values, letting a program retrieve information by name.",mode:"function",starter:`def price_for(prices, item):
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
`}],Wg=[{id:"10-algorithms-and-testing/01-while-and-sentinels",unit:10,unitName:"Algorithms & Testing",lesson:1,slug:"01-while-and-sentinels",title:"Repeat until a stop signal",concept:"While loops and sentinel values",summary:"A `while` loop repeats until a condition changes, making it useful when the stopping point is part of the input.",mode:"function",starter:`def before_stop(events):
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
`}],Hg=[...Pg,...Ag,...Rg,...Ig,...Og,...Mg,...Dg,...zg,...Fg,...Wg],Zf={"python-strings":{title:"Strings and Variables",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Create a greeting using a name and a favorite topic.",starter:`name = "Jordan"
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
`,console:"Run, Check and Submit are simulated in this React design lab."},"tsi-percents":{title:"Percents and Discounts",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Use percentages in everyday situations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-equations":{title:"Solve Linear Equations",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Solve a one-variable equation with inverse operations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-slope":{title:"Slope and Rate of Change",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Interpret slope from a table of values.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."}};function Va(l){return typeof l=="string"?l:typeof(l==null?void 0:l.id)=="string"?l.id:""}function Ps(l){return String((l==null?void 0:l.title)||(l==null?void 0:l.unitName)||(l==null?void 0:l.name)||"Lessons")}function ac(l,u=1){return(l==null?void 0:l.number)??(l==null?void 0:l.unit)??u}function is(l){return((l==null?void 0:l.lessons)||[]).map(Va).filter(Boolean)}function tc(l){return Array.isArray(l==null?void 0:l.units)?l.units.flatMap(is):Array.isArray(l==null?void 0:l.lessons)?l.lessons.map(Va).filter(Boolean):[]}function Bg(l,u){return((l==null?void 0:l.units)||[]).some(p=>is(p).includes(u))}function ra(l,u,p=Zf){var k,E;if(!u)return null;const g=((l==null?void 0:l.units)||[]).find(N=>is(N).includes(u)),y=((g==null?void 0:g.lessons)||[]).find(N=>Va(N)===u),b=typeof y=="object"&&y||((k=g==null?void 0:g.lessonMeta)==null?void 0:k[u])||((E=l==null?void 0:l.lessonRecords)==null?void 0:E[u])||{},_=(p==null?void 0:p[u])||{},C=String(b.title||b.name||_.title||u.split("/").at(-1));return{..._,...b,id:u,title:C,kind:b.kind||_.kind||"Lesson",difficulty:b.difficulty||_.difficulty||"",points:b.points??_.points??null,language:b.language||_.language||(l==null?void 0:l.language)||"text",challenge:b.challenge||b.summary||_.challenge||"",starter:b.starter||_.starter||"",console:_.console||(b.markdownSource?b.language==="python"?"Run Python to see your output. Checks use published examples only.":"Preview-only workspace. Use the production Playground for functional language runners and verified checks.":""),ready:!!(p!=null&&p[u])||typeof b.markdownSource=="string"&&b.starter!==void 0,isPublished:typeof b.markdownSource=="string"&&b.starter!==void 0}}function ia(l,u,p=Zf){var g;return((g=ra(l,u,p))==null?void 0:g.title)||""}function Yl(l){const u=Array.isArray(l)?{lessons:l}:l||{},p=new Map,g=new Set,y=[],b=(C,k,E,N)=>{const I=String(C);let R=y.find(V=>V.id===I);return R||(R={id:I,title:String(k||"Lessons"),description:String(E||""),number:N,lessons:[]},y.push(R)),R},_=(C,k)=>{const E=Va(k);!E||g.has(E)||(g.add(E),C.lessons.push(E),p.set(E,typeof k=="string"?{id:E}:{...k}))};return Array.isArray(u.units)?u.units.forEach((C,k)=>{const E=b(C.id||`unit-${k+1}`,Ps(C),C.description||C.summary,ac(C,k+1));(C.lessons||[]).forEach(N=>_(E,N))}):Array.isArray(u.lessons)&&u.lessons.forEach((C,k)=>{if(!C||!Va(C))return;const E=C.unit||null,N=Va(C).indexOf("/"),I=E!=null?N>=0?Va(C).slice(0,N):`unit-${E}`:C.competency?`topic-${String(C.competency).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`:"lessons",R=C.unitName||C.competency||"Lessons",V=b(I,R,"",E??y.length+1);_(V,C)}),{units:y,lessonRecords:Object.fromEntries(p),lessons:y.flatMap(is)}}const Lp=Yl(Hg),rs=[{id:"computer-science-1",units:Lp.units,lessonRecords:Lp.lessonRecords,language:"python",publishedContent:!0,slug:"computer-science-1",label:"Computer Science I",short:"Python",glyph:"py",color:"#6366F1",description:"Build your problem-solving toolkit with Python.",lessons:Lp.lessons,topics:["Variables","Strings","Formatting","Conditions","Lists"]},{id:"game-programming",units:Ns["game-programming"],slug:"game-programming",label:"Game Programming & Design",short:"C# · Unity",glyph:"C#",color:"#C052EB",description:"Make ideas playable with Unity and C#.",lessons:Ns["game-programming"].flatMap(l=>l.lessons),topics:["C# Basics","Rigidbody","Colliders"]},{id:"mobile-app-dev",units:Ns["mobile-app-dev"],slug:"mobile-app-web",label:"Mobile App & Web",short:"React · JavaScript",glyph:"js",color:"#27BBD2",description:"Create useful websites and mobile applications.",lessons:Ns["mobile-app-dev"].flatMap(l=>l.lessons),topics:["HTML","CSS","JavaScript","React"]},{id:"capstone",units:Ns.capstone,slug:"capstone",label:"Capstone",short:"Build for someone",glyph:"++",color:"#FF2D55",description:"Research a problem, prototype, and test a solution.",lessons:Ns.capstone.flatMap(l=>l.lessons),topics:["Research","Prototype","Pitch"]},{id:"uil",units:Ns.uil,slug:"uil",label:"UIL Computer Science",short:"Java",glyph:"jv",color:"#FF9F0A",description:"Trace Java, explain your reasoning, and practice.",lessons:Ns.uil.flatMap(l=>l.lessons),topics:["Java","Arrays","Written","Programming"]},{id:"test-prep",units:Vh,lessonRecords:Eg,slug:"test-prep",label:"Test Prep",short:"TSI · ASVAB · SAT · ACT",glyph:"ex",color:"#15B7A3",description:"College readiness and military aptitude study, all in one place.",lessons:Vh.flatMap(l=>l.lessons),topics:["TSI","ASVAB","SAT","ACT"]},{id:"tsi-math",units:Ns["tsi-math"],slug:"tsi-math",label:"TSI Math Advisory",short:"Math · Open access",glyph:"ma",color:"#30C85A",description:"Quantitative reasoning and algebra practice.",lessons:Ns["tsi-math"].flatMap(l=>l.lessons),topics:["Percents","Ratios","Equations"]}],vi=l=>rs.find(u=>u.id===l),nh=l=>{var u;return(u=vi(l))==null?void 0:u.label};function Pd(l){return typeof l=="string"&&/^#[0-9a-fA-F]{6}$/.test(l)}function Ug(l,u={}){const p=u&&typeof u=="object"?u[l.id]:null;return Pd(p)?p.toUpperCase():l.color}function qg(l){if(!Pd(l))return"#101012";const u=[1,3,5].map(g=>parseInt(l.slice(g,g+2),16)/255).map(g=>g<=.04045?g/12.92:((g+.055)/1.055)**2.4);return u[0]*.2126+u[1]*.7152+u[2]*.0722>.179?"#101012":"#FFFFFF"}function Kg(l,u,p=document.documentElement){for(const g of u){const y=`--student-course-color-${g.id}`,b=l&&typeof l=="object"?l[g.id]:null,_=`--student-course-ink-${g.id}`;Pd(b)?(p.style.setProperty(y,b),p.style.setProperty(_,qg(b))):(p.style.removeProperty(y),p.style.removeProperty(_))}}function un(l,u){const[p,g]=Ce.useState(()=>{try{const y=localStorage.getItem(l);return y===null?u:JSON.parse(y)}catch{return u}});return Ce.useEffect(()=>{try{localStorage.setItem(l,JSON.stringify(p))}catch{}},[l,p]),[p,g]}function $g(l,u=[]){return Array.isArray(u)&&u.includes(l)}function em(l,u=[]){const p=tc(l),g=p.filter(y=>$g(y,u)).length;return{completed:g,total:p.length,percent:p.length?Math.round(g/p.length*100):0}}function Gg(l,u){const p=Array.isArray(l)?l:[];return p.includes(u)?p.filter(g=>g!==u):[...p,u]}const Yg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function Vg(l=new Date){const u=Object.fromEntries(Yg.formatToParts(l).filter(p=>p.type!=="literal").map(p=>[p.type,p.value]));return`${u.year}-${u.month}-${u.day}`}function _d(l){return l?new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}):""}function yd(l,u=[]){return u.find(p=>p.id===l)||null}function Jg(l,u=[]){return u.find(p=>p.id===l)||null}function Ad(l,{assignments:u=[],grades:p=[],completedLessons:g=[],today:y=Vg()}={}){const b=Jg(l,u),_=yd(l,p),C=l.startsWith("lesson:")&&g.includes(l.slice(7)),k=!!_||C;return b!=null&&b.dueDate?{state:k?"completed":b.dueDate<y?"overdue":"assigned",dueDate:b.dueDate,grade:_,completed:k}:{state:k?"completed":"unassigned",dueDate:null,grade:_,completed:k}}function Up(l=[]){const u=l.reduce((g,y)=>g+y.earned,0),p=l.reduce((g,y)=>g+y.possible,0);return{earned:u,possible:p,percent:p?Math.round(100*u/p):null,count:l.length}}function Xg(l=[]){const u=new Map;return l.forEach(p=>{const g=Sd(new Date(p.gradedAt+"T12:00:00Z"));u.has(g)||u.set(g,[]),u.get(g).push(p)}),[...u.entries()].map(([p,g])=>({week:p,...Up(g)})).sort((p,g)=>g.week.localeCompare(p.week))}function Qg(l=[],u=[]){return[...new Set([...Array.isArray(l)?l:[],...u.filter(p=>p.id.startsWith("lesson:")).map(p=>p.id.slice(7))])]}const Zg="/playground/data",ey=new Set(["game-programming","mobile-app-dev","uil","tsi-math"]);function ty(l){if(typeof l!="string"||!l||l.startsWith("/")||l.includes("\\")||l.includes("?")||l.includes("#")||l.split("/").some(u=>u===".."||u==="."||u===""))throw new Error("Invalid curriculum resource path");return l}function lc(l,u){if(!ey.has(l))throw new Error("Unknown published course");return Zg+"/"+l+"/"+ty(u)}async function sr(l,u,p,g,y=!1){const b=await p(lc(l,u),{signal:g,cache:"no-store"});if(!b.ok)throw new Error("Published "+l+" resource unavailable: "+u);return y?b.json():b.text()}function rh(l,u,p,g,y){var b,_,C;return{...l,markdownSource:u,starter:p??"",language:g,markdownUrl:lc(y,l.markdown),kind:"Lesson",challenge:((b=l.exercise)==null?void 0:b.prompt)||l.summary||l.objective||l.title||"",points:l.points??null,cases:((_=l.exercise)==null?void 0:_.examples)||l.cases||[],hints:((C=l.exercise)==null?void 0:C.hints)||l.hints||[],mode:l.exercise?"function":"script"}}async function ny(l,u){const p="game-programming",g=await sr(p,"course.json",l,u,!0),y=await Promise.all(g.units.map(async b=>({id:b.id,number:b.number,title:b.title,description:b.summary||"",lessons:await Promise.all(b.lessons.map(async _=>{var E,N,I,R,V;const C=await sr(p,_.markdown,l,u);return{...rh(_,C,(E=_.exercise)==null?void 0:E.starter,"csharp",p),starter:((N=_.exercise)==null?void 0:N.starter)||"",kind:"Lesson",exerciseId:(I=_.exercise)==null?void 0:I.id,challenge:((R=_.exercise)==null?void 0:R.prompt)||_.title,unityTask:_.unityTask||[],markdownSource:C+((V=_.unityTask)!=null&&V.length?`

### Unity activity
`+_.unityTask.map(ee=>"- "+ee).join(`
`):"")}}))})));return{...Yl({units:y}),source:"published",projects:[]}}async function Jh(l,u,p,g){if(!u)return null;const y=Object.keys(u);if(!y.includes("index.html")||!y.includes("styles.css")||!y.includes("script.js")&&!y.includes("App.jsx"))throw Error("A Mobile App starterFiles entry requires index.html, styles.css and script.js (or App.jsx).");return Object.fromEntries(await Promise.all(y.map(async b=>[b,await sr(l,u[b],p,g)])))}async function ry(l,u){const p="mobile-app-dev",g=await sr(p,"course.json",l,u,!0),y=await Promise.all(g.lessons.map(async _=>{const[C,k,E]=await Promise.all([sr(p,_.markdown,l,u),_.starterFile?sr(p,_.starterFile,l,u):Promise.resolve(""),Jh(p,_.starterFiles,l,u)]);return{...rh(_,C,k,_.language==="react"?"jsx":_.language,p),...E?{starterFiles:E}:{}}})),b=await Promise.all((g.projects||[]).map(async _=>{const[C,k]=await Promise.all([_.starterFile?sr(p,_.starterFile,l,u):Promise.resolve(""),Jh(p,_.starterFiles,l,u)]),E=await Promise.all(_.steps.map(async N=>({...N,focus:N.focus||N.title,markdownSource:await sr(p,N.markdown,l,u),markdownUrl:lc(p,N.markdown)})));return{id:_.id,title:_.title,summary:_.summary,skills:_.skills||[],starter:C,language:"html",steps:E,...k?{starterFiles:k}:{}}}));return{...Yl({lessons:y}),projects:b,source:"published"}}async function iy(l,u){const g=await sr("uil","course.json",l,u,!0),y=await sr("uil",g.written.markdown,l,u),b=await sr("uil",g.written.practice,l,u,!0),C=(Array.isArray(b)?b:b.questions||[]).map((I,R)=>{const V=I.choices||I.options||[];return"### Practice question "+(R+1)+`

`+String(I.prompt||I.question||"")+`

`+V.map((ee,H)=>String.fromCharCode(65+H)+". "+ee).join(`

`)}).join(`

`),k={id:"written",title:"Written practice",language:"text",markdown:g.written.markdown,markdownSource:y+`

## Published practice questions

`+C,markdownUrl:lc("uil",g.written.markdown),starter:"",kind:"Practice",challenge:"Review Java reasoning and the published written-practice questions."},E=await Promise.all(g.lessons.map(async I=>{const[R,V]=await Promise.all([sr("uil",I.markdown,l,u),sr("uil",I.starterFile,l,u)]);return rh(I,R,V,"java","uil")}));return{...Yl({units:[{id:"written-preparation",number:1,title:"Written preparation",lessons:[k]},{id:"programming-practice",number:2,title:"Java programming practice",lessons:E}]}),source:"published",projects:[]}}async function sy(l,u){const p="tsi-math",[g,y,b,_]=await Promise.all([sr(p,"content/20-day-program.json",l,u,!0),sr(p,"content/strand-lessons-v1.json",l,u,!0),sr(p,"content/diagnostic-24-mc-v2.json",l,u,!0),sr(p,"content/math-locator-profiles.json",l,u,!0)]),C=(g.days||[]).map(E=>({id:E.id,title:E.title,challenge:"Day "+E.day+" · "+E.strand+" · 30 minutes",kind:"Planned session",language:"text",starter:"",ready:!1,status:"planned"})),k=await Promise.all((y.lessons||[]).map(async E=>({id:E.id,title:E.title,kind:"Draft practice",status:"draft",language:"text",markdown:E.student_lesson,markdownUrl:lc(p,E.student_lesson),markdownSource:await sr(p,E.student_lesson,l,u),starter:"",challenge:"Currently authored draft lesson · "+E.minutes+" minutes"})));return{...Yl({units:[{id:"study-schedule",number:1,title:"20-day study schedule (in development)",lessons:C},{id:"authored-strands",number:2,title:"Available draft strand lessons",lessons:k}]}),source:"published-draft",projects:[],tsiDraft:!0,diagnosticItems:b.items||[],locatorProfiles:_.profiles||[]}}async function oy(l,{fetchImpl:u=fetch,signal:p}={}){if(l==="game-programming")return ny(u,p);if(l==="mobile-app-dev")return ry(u,p);if(l==="uil")return iy(u,p);if(l==="tsi-math")return sy(u,p);throw new Error("Unknown published course")}const po=(...l)=>l.filter(Boolean).join(" "),ay=["temperature-alert","count-matches","sum-positives","score-line","attendance-percent","longest-win-streak","confidence-total","second-largest-distinct","target-pairs","competition-ranks"],ly="/playground/preview/",uy="/"+ly.replace(/^\/+|\/+$/g,""),yo=l=>`${uy}/#${l}`,Kl=()=>yo("/"),Xh=()=>yo("/teacher"),cy=()=>yo("/admin"),dy=()=>yo("/journals"),py=()=>yo("/grades"),Ul=(l=null)=>yo(l?`/challenges/course/${encodeURIComponent(l)}`:"/challenges"),tm=l=>yo(`/challenges/${encodeURIComponent(l)}`);function nm(l,u,p=null){const g=typeof l=="string"?vi(l):l;if(!g||!u)return Kl();const y=`/playgrounds/${encodeURIComponent(g.slug)}/projects/${encodeURIComponent(u)}`;return yo(p?`${y}/steps/${encodeURIComponent(p)}`:y)}function Rd(l,u){const p=typeof l=="string"?vi(l):l;if(!p)return Kl();const g=`/playgrounds/${encodeURIComponent(p.slug)}`;return yo(u?`${g}/lessons/${encodeURIComponent(u)}`:g)}function pd(l,u=rs){const b=((typeof window<"u"&&window.location.hash.slice(1)||"/").replace(/\/+$/,"")||"/").slice("".length)||"/";if(b==="/")return{page:"home"};if(b==="/teacher")return{page:"teacher"};if(b==="/admin")return{page:"admin"};if(b==="/journals")return{page:"journals"};if(b==="/grades")return{page:"grades"};if(b==="/challenges")return{page:"challenges",filterCourse:null};if(b.startsWith("/challenges/")){const N=b.split("/").filter(Boolean);try{if(N.length===3&&N[1]==="course"){const I=decodeURIComponent(N[2]);return vi(I)?{page:"challenges",filterCourse:I}:{page:"not-found"}}if(N.length===2){const I=decodeURIComponent(N[1]);return ay.includes(I)?{page:"challenge",challengeId:I}:{page:"not-found"}}}catch{return{page:"not-found"}}return{page:"not-found"}}const _=b.split("/").filter(Boolean);if(_[0]!=="playgrounds"||![2,4,6].includes(_.length))return{page:"not-found"};let C,k;try{C=decodeURIComponent(_[1]),k=_.length===4?decodeURIComponent(_[3]):void 0}catch{return{page:"not-found"}}const E=u.find(N=>N.slug===C);if(!E)return{page:"not-found"};if(_[2]==="projects"&&(_.length===4||_.length===6))try{const N=decodeURIComponent(_[3]),I=(E.projects||[]).find(V=>V.id===N),R=_.length===6?decodeURIComponent(_[5]):null;return!I||R&&(_[4]!=="steps"||!I.steps.some(V=>V.id===R))?{page:"not-found"}:{page:"course",courseId:E.id,lessonId:null,projectId:N,stepId:R}}catch{return{page:"not-found"}}return _.length!==2&&(_.length!==4||_[2]!=="lessons")?{page:"not-found"}:k&&!Bg(E,k)?{page:"not-found"}:{page:"course",courseId:E.id,lessonId:k??null}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rm=(...l)=>l.filter((u,p,g)=>!!u&&u.trim()!==""&&g.indexOf(u)===p).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=Ce.forwardRef(({color:l="currentColor",size:u=24,strokeWidth:p=2,absoluteStrokeWidth:g,className:y="",children:b,iconNode:_,...C},k)=>Ce.createElement("svg",{ref:k,...fy,width:u,height:u,stroke:l,strokeWidth:g?Number(p)*24/Number(u):p,className:rm("lucide",y),...C},[..._.map(([E,N])=>Ce.createElement(E,N)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=(l,u)=>{const p=Ce.forwardRef(({className:g,...y},b)=>Ce.createElement(my,{ref:b,iconNode:u,className:rm(`lucide-${hy(l)}`,g),...y}));return p.displayName=`${l}`,p};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=St("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=St("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=St("BookOpenCheck",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=St("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=St("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=St("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=St("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=St("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=St("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=St("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=St("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=St("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=St("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=St("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=St("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=St("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=St("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=St("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=St("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=St("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=St("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=St("FlaskConical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=St("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=St("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=St("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=St("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=St("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=St("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=St("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=St("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=St("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=St("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=St("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=St("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=St("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=St("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=St("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=St("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=St("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=St("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=St("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=St("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=St("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=St("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=St("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function ss({children:l,tone:u=""}){return c.jsx("span",{className:po("chip",u&&`chip-${u}`),children:l})}function zy({theme:l,setTheme:u}){const p=l==="dark";return c.jsx("button",{className:"icon-button",title:p?"Switch to light mode":"Switch to dark mode","aria-label":"Toggle light and dark mode",onClick:()=>u(p?"light":"dark"),children:p?c.jsx(My,{size:17}):c.jsx(Ay,{size:17})})}function Fy({sidebarOpen:l,onToggleSidebar:u,onHome:p,theme:g,setTheme:y}){return c.jsx("header",{className:"topbar",children:c.jsxs("div",{className:"topbar-inner",children:[c.jsx("button",{className:"icon-button nav-toggle",onClick:u,"aria-label":"Toggle navigation",children:l?c.jsx(Ry,{size:18}):c.jsx(Py,{size:18})}),c.jsxs("button",{className:"brand",onClick:p,children:[c.jsx("span",{className:"brand-logo",children:"{ }"}),c.jsx("strong",{children:"Ms. Whitby's Playground"}),c.jsx("span",{className:"brand-compact",children:"React Lab"})]}),c.jsx("div",{className:"topbar-spacer"}),c.jsx(ss,{children:"LOCAL DESIGN LAB"}),c.jsx(zy,{theme:g,setTheme:y}),c.jsx("span",{className:"user-circle",children:"W"})]})})}const Wy=[["home","Home",Ey],["challenges","Challenge Bank",Md],["journals","Weekly journals",ih],["grades","Grades",jy],["teacher","Teacher dashboard",sh],["admin","Admin dashboard",uh]];function Hy({open:l,page:u,courseId:p,lessonId:g,setPage:y,openCourse:b,onOpenProject:_,availableCourses:C=rs,completedLessons:k=[],assignments:E=[],grades:N=[]}){var R;const I=u==="course"?C.find(V=>V.id===p):null;return c.jsxs("aside",{className:po("main-sidebar",!l&&"collapsed"),"aria-label":"Playground navigation",children:[c.jsx("div",{className:"side-title",children:"EXPLORE"}),Wy.map(([V,ee,H])=>c.jsxs("button",{className:po("nav-item",(u===V||V==="challenges"&&u==="challenge")&&"active"),onClick:()=>y(V),title:ee,children:[c.jsx(H,{size:19}),c.jsx("span",{children:ee})]},V)),I&&c.jsxs("section",{className:"course-outline","data-course":I.id,"aria-label":`${I.label} outline`,children:[c.jsx("div",{className:"side-rule"}),c.jsx("div",{className:"side-title",children:"COURSE CONTENT"}),c.jsxs("button",{className:po("outline-overview",!g&&"active"),onClick:()=>b(I.id),children:[c.jsx(uc,{size:16}),c.jsx("span",{children:"Course overview"})]}),I.units.map((V,ee)=>c.jsxs("details",{className:"outline-unit",open:is(V).includes(g)||!g&&ee===0?!0:void 0,children:[c.jsxs("summary",{children:[c.jsx("span",{className:"outline-unit-number",children:String(ac(V,ee+1)).padStart(2,"0")}),c.jsx("span",{className:"outline-unit-title",title:Ps(V),children:Ps(V)}),c.jsx(om,{size:14})]}),c.jsx("div",{className:"outline-lesson-list",children:is(V).map(H=>{const oe=ia(I,H),D=Ad("lesson:"+H,{assignments:E,grades:N,completedLessons:k}),W=D.completed?"completed":D.dueDate?D.state:"",F=W==="completed"?"Completed":W==="overdue"?"Overdue":W==="assigned"?"Assigned":"";return c.jsxs("button",{onClick:()=>b(I.id,H),className:po("outline-lesson",H===g&&"selected"),"aria-label":F?`${oe}, ${F.toLowerCase()}`:oe,title:F?`${oe} · ${F}`:oe,"aria-current":H===g?"page":void 0,children:[c.jsx("span",{className:"outline-lesson-name",children:oe}),F&&c.jsx("span",{className:`assignment-dot ${W}`,"aria-hidden":"true"})]},H)})})]},`${I.id}-${V.id}-${g||"overview"}`)),!!((R=I.projects)!=null&&R.length)&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"side-section-title",children:"PROJECTS"}),I.projects.map(V=>c.jsx("button",{type:"button",className:"outline-lesson",title:V.title,onClick:()=>_==null?void 0:_(I.id,V.id),children:c.jsx("span",{className:"outline-lesson-name",children:V.title})},V.id))]})]}),c.jsx("div",{className:"side-rule"}),c.jsx("div",{className:"side-title",children:"PLAYGROUNDS"}),C.filter(V=>V.id!=="tsi-math").map(V=>c.jsxs("button",{"data-course":V.id,className:po("nav-item course-nav-item",u==="course"&&p===V.id&&"active"),onClick:()=>b(V.id),title:V.label,children:[c.jsx("span",{className:"nav-dot"}),c.jsx("span",{children:V.label})]},V.id)),c.jsxs("div",{className:"sidebar-bottom",children:[c.jsx(xy,{size:17}),c.jsx("span",{children:"Your learning spaces"})]})]})}function By(){return c.jsxs("footer",{className:"site-footer",children:[c.jsx("span",{children:"Ms. Whitby's Playground · React design lab"}),c.jsx("span",{children:"Fictional data · No authentication or backend · No real code execution"})]})}const Uy={"computer-science-1":Od,"game-programming":Ty,"mobile-app-dev":Oy,uil:um,"tsi-math":sm,"test-prep":wy,capstone:Iy};function qy({course:l,onOpen:u,completedLessons:p=[]}){const{completed:g,total:y}=em(l,p),b=Uy[l.id]||Od;function _(C){C.button!==0||C.metaKey||C.ctrlKey||C.shiftKey||C.altKey||(C.preventDefault(),u())}return c.jsxs("a",{className:"course-card","data-course":l.id,href:Rd(l),onClick:_,children:[c.jsxs("div",{className:"course-card-heading",children:[c.jsx("span",{className:"course-glyph","aria-hidden":"true",children:c.jsx(b,{size:24,strokeWidth:2.2})}),c.jsxs("div",{children:[c.jsx("h2",{children:l.label}),c.jsx("p",{children:l.short})]})]}),c.jsx("p",{className:"course-description",children:l.description}),c.jsxs("div",{className:"course-card-footer",children:[c.jsxs("div",{className:"course-meta",children:[c.jsxs("span",{children:[y," ",y===1?"lesson":"lessons"]}),c.jsxs("span",{children:[g," completed"]})]}),c.jsx("progress",{className:"course-progress-track",value:g,max:Math.max(y,1),"aria-label":`${l.label}: ${g} of ${y} lessons completed`})]})]})}function Ky({onClick:l}){return c.jsxs("button",{className:"wide-shortcut",onClick:l,children:[c.jsx(sh,{size:18}),c.jsxs("span",{children:[c.jsx("strong",{children:"Teacher Dashboard preview"}),c.jsx("small",{children:"Section roster, expanded student assignments, account matching, and weekly points"})]}),c.jsx(ni,{size:18})]})}function $y({openCourse:l,openTeacher:u,openChallenges:p,availableCourses:g=rs,completedLessons:y=[]}){return c.jsxs("div",{className:"main-content",children:[c.jsxs("div",{className:"welcome",children:[c.jsx("div",{className:"eyebrow",children:"Your learning spaces"}),c.jsx("h1",{children:"Your playgrounds"}),c.jsx("p",{children:"Choose a course to continue learning. Complete lessons to fill your progress bars."})]}),c.jsx("div",{className:"course-card-grid",children:g.filter(b=>b.id!=="tsi-math").map(b=>c.jsx(qy,{course:b,completedLessons:y,onOpen:()=>l(b.id)},b.id))}),c.jsxs("button",{type:"button",className:"wide-shortcut challenge-bank-shortcut",onClick:p,children:[c.jsx(Md,{size:23}),c.jsxs("span",{children:[c.jsx("strong",{children:"Shared Challenge Bank"}),c.jsx("small",{children:"Practice one problem in Python, Java, JavaScript, or C#."})]}),c.jsx("span",{"aria-hidden":"true",children:"→"})]}),c.jsx(Ky,{onClick:u})]})}function Gy({course:l,openCourse:u,openProject:p,openChallenges:g,completedLessons:y=[],assignments:b=[],grades:_=[],courseColors:C={},onSetCourseColor:k,onResetCourseColor:E}){var ee;const N=em(l,y),[I,R]=Ce.useState(!1),V=Ug(l,C);return c.jsxs("div",{className:"course-landing",children:[c.jsxs("header",{className:"course-hero surface-card",children:[c.jsx("button",{type:"button",className:"icon-button course-color-settings",onClick:()=>R(H=>!H),"aria-label":I?"Close course color settings":`Change ${l.label} color`,title:I?"Close settings":"Course color","aria-expanded":I,"aria-controls":"course-color-controls",children:I?c.jsx(Dd,{size:17}):c.jsx(lh,{size:17})}),c.jsx("div",{className:"eyebrow",children:"Course overview"}),c.jsx("h1",{children:l.label}),c.jsx("p",{children:l.description}),c.jsxs("div",{className:"course-hero-stats",children:[c.jsxs("span",{children:[c.jsx(Ly,{size:16})," ",l.units.length," units"]}),c.jsxs("span",{children:[c.jsx(uc,{size:16})," ",tc(l).length," lessons"]})]}),c.jsxs("button",{className:"btn primary",disabled:!tc(l).length,onClick:()=>u(l.id,tc(l)[0]),children:["Start learning ",c.jsx(ni,{size:16})]}),I&&c.jsxs("section",{id:"course-color-controls",className:"course-color-controls","aria-label":"Choose a course color",children:[c.jsxs("div",{className:"course-color-control-copy",children:[c.jsx("strong",{children:"Course color"}),c.jsx("p",{children:"Make this course your own. The color updates throughout your Playground."})]}),c.jsxs("label",{className:"course-color-picker",children:[c.jsx("input",{type:"color",value:V,onChange:H=>k==null?void 0:k(l.id,H.target.value),"aria-label":`Choose a color for ${l.label}`}),c.jsx("span",{children:"Choose color"})]}),c.jsx("button",{type:"button",className:"btn",onClick:()=>E==null?void 0:E(l.id),children:"Reset to default"}),c.jsx("button",{type:"button",className:"btn",onClick:()=>R(!1),children:"Done"})]})]}),l.publishedContent&&c.jsx("p",{className:"course-published-note",children:"Real published lessons are shown here. Practice in this preview does not change your grades."}),l.contentLoadingError&&c.jsxs("p",{className:"course-published-note",role:"alert",children:["Published course materials could not be loaded: ",l.contentLoadingError,". Sample lessons are not substituted."]}),!l.publishedContent&&!l.contentLoadingError&&c.jsx("p",{className:"course-published-note",children:"Course materials are not yet published here. This is a design preview, not a course to assign."}),l.tsiDraft&&c.jsx("p",{className:"course-published-note",children:"The 20-day TSI schedule is an outline; four strand lessons are drafts. Unwritten sessions are not available for practice."}),c.jsxs("p",{className:"course-landing-progress",children:[N.completed," of ",N.total," lessons ",l.publishedContent?"marked complete in preview":"completed"," · ",N.percent,"%"]}),c.jsx("div",{className:"course-landing-heading",children:c.jsxs("div",{children:[c.jsx("h2",{children:"Units & lessons"}),c.jsx("p",{children:"Choose a unit or jump directly into a lesson."})]})}),c.jsx("div",{className:"unit-card-grid",children:l.units.map((H,oe)=>c.jsxs("section",{className:"unit-card surface-card",children:[c.jsxs("header",{className:"unit-card-header",children:[c.jsxs("span",{className:"unit-badge",children:["UNIT ",String(ac(H,oe+1)).padStart(2,"0")]}),c.jsx("h3",{title:Ps(H),children:Ps(H)}),H.description&&c.jsx("p",{children:H.description})]}),c.jsx("div",{className:"unit-lessons",children:is(H).map((D,W)=>c.jsxs("a",{className:"unit-lesson-link",href:Rd(l,D),onClick:F=>{F.button!==0||F.metaKey||F.ctrlKey||F.shiftKey||F.altKey||(F.preventDefault(),u(l.id,D))},children:[c.jsx("span",{className:"unit-lesson-index",children:W+1}),c.jsxs("span",{className:"unit-lesson-label",children:[c.jsx("strong",{title:ia(l,D),children:ia(l,D)}),(()=>{var q,Y;const F=Ad("lesson:"+D,{assignments:b,grades:_,completedLessons:y});return F.dueDate||F.completed?c.jsxs("span",{className:"unit-assignment-meta",children:[c.jsxs("span",{className:`assignment-status ${F.state}`,children:[c.jsx("span",{className:`assignment-dot ${F.state}`,"aria-hidden":"true"}),F.completed?"Completed":F.state==="overdue"?"Overdue":"Assigned"]}),F.dueDate&&c.jsxs("small",{children:["Due ",_d(F.dueDate)]}),F.grade&&c.jsxs("small",{children:[F.grade.earned," / ",F.grade.possible," pts"]})]}):c.jsxs("small",{children:[(q=ra(l,D))==null?void 0:q.kind,(Y=ra(l,D))!=null&&Y.difficulty?` · ${ra(l,D).difficulty}`:""]})})()]}),c.jsx(qp,{size:16})]},D))})]},H.id))}),!!((ee=l.projects)!=null&&ee.length)&&c.jsxs("section",{className:"course-projects surface-card",children:[c.jsx("div",{className:"eyebrow",children:"Published guided projects"}),c.jsx("h2",{children:"Projects"}),c.jsx("div",{className:"unit-card-grid",children:l.projects.map(H=>c.jsxs("a",{className:"unit-lesson-link",href:nm(l,H.id),onClick:oe=>{oe.button!==0||oe.metaKey||oe.ctrlKey||oe.shiftKey||oe.altKey||(oe.preventDefault(),p(l.id,H.id))},children:[c.jsxs("span",{className:"unit-lesson-label",children:[c.jsx("strong",{children:H.title}),c.jsxs("small",{children:[H.steps.length," steps · ",H.summary]})]}),c.jsx(qp,{size:16})]},H.id))})]}),c.jsxs("section",{className:"course-challenges-shelf surface-card",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Shared practice library"}),c.jsx("h2",{children:"Related programming challenges"}),c.jsx("p",{children:"Browse reusable problems suited to this course. Review each challenge's prerequisites before recommending it to students."})]}),c.jsxs("a",{href:Ul(l.id),className:"btn",onClick:H=>{H.button!==0||H.metaKey||H.ctrlKey||H.shiftKey||H.altKey||(H.preventDefault(),g(l.id))},children:[c.jsx(Md,{size:16})," Browse challenges"]})]})]})}function Yy({selectedTopic:l,attempts:u,setAttempts:p,openCourse:g,completedLessons:y,onToggleLessonComplete:b}){const{track:_,topic:C}=l,[k,E]=Ce.useState(0),[N,I]=Ce.useState(null),[R,V]=Ce.useState(!1),ee=C.questions[k],H=C.questions.filter(q=>u[q.id]!==void 0).length,oe=y.includes(C.id);function D(q){E(q),I(null),V(!1)}function W(){N===null||R||(V(!0),p(q=>({...q,[ee.id]:{chosen:N,correct:N===ee.correct}})))}const F=N===ee.correct;return c.jsxs("section",{className:"test-prep-practice",children:[c.jsxs("button",{type:"button",className:"test-prep-back",onClick:()=>g("test-prep"),children:[c.jsx(im,{size:16})," All Test Prep"]}),c.jsxs("div",{className:"surface-card test-prep-practice-header",children:[c.jsxs("div",{className:"eyebrow",children:[_.title," / ",C.title]}),c.jsx("h1",{children:C.title}),c.jsx("p",{children:C.description}),c.jsx("p",{className:"muted",children:"Original sample questions only. Your practice results are not official exam scores."}),c.jsxs("div",{className:"test-prep-practice-meta",children:[c.jsxs("span",{children:[H," of ",C.questions.length," attempted"]}),oe&&c.jsxs("span",{className:"test-prep-complete",children:[c.jsx(Cd,{size:16})," Practiced"]})]})]}),c.jsxs("div",{className:"surface-card test-prep-question",children:[c.jsxs("div",{className:"test-prep-question-top",children:[c.jsxs("strong",{children:["Question ",k+1," of ",C.questions.length]}),c.jsx("span",{className:"muted",children:"Practice / multiple choice"})]}),c.jsx("h2",{children:ee.prompt}),c.jsxs("fieldset",{className:"test-prep-options",disabled:R,children:[c.jsx("legend",{className:"sr-only",children:"Choose your answer"}),ee.options.map((q,Y)=>c.jsxs("label",{className:"test-prep-option "+(N===Y?"selected ":"")+(R&&Y===ee.correct?"correct":""),children:[c.jsx("input",{type:"radio",name:ee.id,checked:N===Y,onChange:()=>I(Y)}),c.jsx("span",{className:"test-prep-letter",children:String.fromCharCode(65+Y)}),c.jsx("span",{children:q})]},Y))]}),R&&c.jsxs("div",{className:"test-prep-feedback "+(F?"is-correct":"is-incorrect"),role:"status",children:[c.jsx("strong",{children:F?"Correct!":"Review this answer"}),c.jsx("p",{children:ee.explanation})]}),c.jsxs("div",{className:"test-prep-actions",children:[c.jsx("button",{type:"button",className:"btn primary",disabled:N===null||R,onClick:W,children:"Check answer"}),c.jsxs("button",{type:"button",className:"btn",onClick:()=>{I(null),V(!1)},children:[c.jsx(oh,{size:14})," Try again"]})]})]}),c.jsxs("nav",{className:"test-prep-topic-nav","aria-label":"Sample question navigation",children:[k>0?c.jsxs("button",{type:"button",className:"btn",onClick:()=>D(k-1),children:[c.jsx(Id,{size:16})," Previous"]}):c.jsx("span",{}),k<C.questions.length-1?c.jsxs("button",{type:"button",className:"btn",onClick:()=>D(k+1),children:["Next question ",c.jsx(ni,{size:16})]}):c.jsx("span",{})]}),H===C.questions.length&&!oe&&c.jsxs("div",{className:"test-prep-completion surface-card",children:[c.jsx("span",{children:"You've attempted every sample in this subject."}),c.jsx("button",{type:"button",className:"btn primary",onClick:()=>b==null?void 0:b(C.id),children:"Mark topic practiced"})]}),c.jsxs("p",{className:"test-prep-official",children:["Need more questions? ",c.jsxs("a",{href:_.reference,target:"_blank",rel:"noreferrer",children:["Visit official ",_.title," preparation resources ",c.jsx(am,{size:13})]})]})]})}function Vy({lessonId:l,openCourse:u,completedLessons:p=[],onToggleLessonComplete:g}){const[y,b]=un("designlab:test-prep-sample-answers",{}),_=l?Lg(l):null;return c.jsx("div",{className:"course-layout integrated-course","data-course":"test-prep",children:c.jsxs("div",{className:"course-main",children:[c.jsxs("div",{className:"course-breadcrumb",children:[c.jsx("button",{type:"button",onClick:()=>u(null),children:"All playgrounds"}),c.jsx(ni,{size:14}),l?c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",onClick:()=>u("test-prep"),children:"Test Prep"}),c.jsx(ni,{size:14}),c.jsx("span",{children:_==null?void 0:_.topic.title})]}):c.jsx("span",{children:"Test Prep"})]}),_?c.jsx(Yy,{selectedTopic:_,attempts:y,setAttempts:b,openCourse:u,completedLessons:p,onToggleLessonComplete:g},l):c.jsxs("div",{className:"test-prep-hub",children:[c.jsxs("header",{className:"surface-card test-prep-hero",children:[c.jsx("div",{className:"eyebrow",children:"Test Prep / Self-study"}),c.jsx("h1",{children:"Choose a test to prepare for"}),c.jsx("p",{children:"Study in short sessions, answer original sample questions, and review the reasoning behind each answer. No class code required."}),c.jsx("p",{className:"muted",children:"This is a preview. Practice history stays in this browser. No scores are sent to a teacher, and no official exam scores are predicted."})]}),c.jsxs("div",{className:"test-prep-exams",children:[c.jsxs("section",{className:"surface-card test-prep-exam","data-exam":"tsi",children:[c.jsx("div",{className:"test-prep-exam-icon",children:c.jsx(Qh,{size:23})}),c.jsx("div",{className:"eyebrow",children:"College readiness"}),c.jsx("h2",{children:"TSI Math"}),c.jsx("p",{children:"Continue the existing TSIA2 math curriculum and diagnostic work without changing old lesson links."}),c.jsx("p",{className:"test-prep-exam-meta",children:"Existing course / classroom study"}),c.jsxs("button",{type:"button",className:"btn primary",onClick:()=>u("tsi-math"),children:["Open TSI Math ",c.jsx(ni,{size:16})]})]}),oc.map(C=>{const k=C.topics.reduce((N,I)=>N+I.questions.length,0),E=C.topics.reduce((N,I)=>N+I.questions.filter(R=>y[R.id]!==void 0).length,0);return c.jsxs("section",{className:"surface-card test-prep-exam","data-exam":C.id,children:[c.jsx("div",{className:"test-prep-exam-icon",children:C.id==="act"?c.jsx(Cy,{size:23}):c.jsx(Qh,{size:23})}),c.jsx("div",{className:"eyebrow",children:C.subtitle}),c.jsx("h2",{children:C.title}),c.jsx("p",{children:C.description}),c.jsxs("p",{className:"test-prep-exam-meta",children:[C.topics.length," subjects · ",E,"/",k," samples attempted"]}),c.jsx("progress",{className:"course-progress-track",value:E,max:k,"aria-label":C.title+" sample practice progress"}),c.jsx("div",{className:"test-prep-topic-links",children:C.topics.map(N=>c.jsxs("button",{type:"button",onClick:()=>u("test-prep",N.id),children:[c.jsx("span",{children:N.title}),c.jsx(ni,{size:15})]},N.id))}),c.jsxs("button",{type:"button",className:"btn primary",onClick:()=>u("test-prep",C.topics[0].id),children:["Start ",C.title," samples ",c.jsx(ni,{size:16})]})]},C.id)})]})]})]})})}function cc({axis:l,onDrag:u}){const p=Ce.useRef(!1),g=l==="columns",y=()=>p.current=!1;return c.jsx("div",{className:po("splitter",g?"column-split":"row-split"),role:"separator","aria-label":g?"Resize instructions and editor":"Resize editor and console","aria-orientation":g?"vertical":"horizontal",tabIndex:0,onPointerDown:b=>{b.preventDefault(),b.currentTarget.setPointerCapture(b.pointerId),p.current=!0},onPointerMove:b=>{p.current&&b.buttons===1&&u(b)},onPointerUp:y,onLostPointerCapture:y,children:c.jsx("span",{})})}function ch({eyebrow:l,children:u,actions:p}){return c.jsxs("div",{className:"page-title-row",children:[c.jsxs("div",{children:[l&&c.jsx("div",{className:"eyebrow",children:l}),c.jsx("h1",{children:u})]}),p&&c.jsx("div",{className:"page-actions",children:p})]})}function hd({task:l,unit:u,unitNumber:p,isTsi:g,isCompleted:y=!1,assignment:b=null,grade:_=null,onToggleCompleted:C}){const k=(b==null?void 0:b.id)||(_==null?void 0:_.id)||"",E=Ad(k,{assignments:b?[b]:[],grades:_?[_]:[],completedLessons:y?[k.replace(/^lesson:/,"")]:[]});return c.jsxs("div",{className:"lesson-header",children:[c.jsxs("div",{className:"eyebrow",children:["Unit ",ac(u,p)," · ",Ps(u)," ",c.jsx("span",{className:"dot",children:"·"})," ",l.kind]}),c.jsx(ch,{actions:c.jsxs("div",{className:"lesson-heading-actions",children:[!g&&(l==null?void 0:l.points)!=null&&c.jsx("span",{className:"points-tag",children:_?`${_.earned} / ${_.possible} pts`:`${l.points} points available`}),_?c.jsxs("span",{className:"btn completion-toggle completed",children:[c.jsx(Cd,{size:16})," Completed"]}):c.jsxs("button",{type:"button",className:`btn completion-toggle ${y?"completed":""}`,"aria-pressed":y,onClick:C,children:[y?c.jsx(Cd,{size:16}):c.jsx(by,{size:16}),y?"Completed":"Mark complete"]})]}),children:l.title}),c.jsx("p",{children:l.challenge}),(b==null?void 0:b.dueDate)&&c.jsxs("div",{className:"lesson-assignment-info",children:[c.jsx("span",{className:`assignment-status ${E.state}`,children:E.state==="completed"?"Completed":E.state==="overdue"?"Overdue":"Assigned"}),c.jsxs("span",{children:["Due ",_d(b.dueDate)]})]})]})}const dh={"tsi-ratios":{prompt:"A recipe uses 3 cups of water for every 5 cups of rice. How many cups of water are needed for 15 cups of rice?",options:["5 cups","9 cups","12 cups","25 cups"],correct:1,explanation:"15 is three times 5, so multiply the 3 cups of water by 3 to get 9."},"tsi-percents":{prompt:"A $60 backpack is discounted by 25%. What is the sale price?",options:["$15","$35","$45","$75"],correct:2,explanation:"25% of $60 is $15; subtract $15 from $60 to get $45."},"tsi-equations":{prompt:"Solve for x: 4x + 6 = 22.",options:["2","4","6","7"],correct:1,explanation:"Subtract 6 from both sides to get 4x = 16, then divide by 4: x = 4."},"tsi-slope":{prompt:"A table gives points (1, 3), (2, 5), and (3, 7). What is the slope?",options:["1","2","3","4"],correct:1,explanation:"As x goes up by 1, y goes up by 2, so slope = 2/1 = 2."}},Jy=`# Find an Inefficiency

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
`,Xy=`# Interpret User Feedback

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
`,Qy=`# Interview for Evidence

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
`,Zy=`# Make a Minimum Viable Prototype

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
`,ev=`# Player Decisions

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
`,tv=`# Variables for a Game

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
`,nv=`# Decision Making

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
`,rv=`# Format a Summary

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
`,iv=`# Lists and Indexing

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
`,sv=`# For Loops

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
`,ov=`# Strings and Variables

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
`,av=`<!-- Learning example adapted from mswhitby/computer-science-1/docs/units/content/02-values-and-variables/lessons/01-meet-variables.md; displayed in independent React preview. -->
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
`,lv=`# Your First React Card

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
`,uv=`# Interactive React State

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
`,cv=`# Solve Linear Equations

## Learn

Solve an equation by doing the same operation to both sides. For 3x + 5 = 20, first subtract 5, then divide by 3.

### Example

Explain the quantities and operations before calculating.

## Practice

Solve 4x + 6 = 22. Explain each step.

Choose an answer in the practice card.
`,dv=`# Percents and Discounts

## Learn

A percent compares a quantity with 100. To find 20% of 50, multiply 0.20 × 50 = 10.

### Example

Explain the quantities and operations before calculating.

## Practice

A backpack costs $60 and is discounted by 25%. What is the sale price?

Choose an answer in the practice card.
`,pv=`# Ratios and Rates

## Learn

A ratio compares quantities. A **unit rate** tells us how many of one item correspond to one unit of another.

Example: If 3 markers are shared by 5 students, the number of markers per student is:

**3 ÷ 5 = 0.6 markers per student.**

## Practice

A group of 15 students needs markers at the same rate. How many markers are needed? Explain how you know.
`,hv=`# Slope and Rate of Change

## Learn

Slope is the change in y divided by the change in x. A constant rate makes a linear relationship.

### Example

Explain the quantities and operations before calculating.

## Practice

The table gives (1, 3), (2, 5), and (3, 7). What is the slope?

Choose an answer in the practice card.
`,fv=`# Trace a Java Array

## Learn

An array holds multiple values. Java arrays start at index **0**.

\`\`\`java
int[] scores = {2, 4, 6};
System.out.println(scores[0]); // 2
\`\`\`

## Practice

Trace the loop in the starter code. Record every index and the updated element value in a table. Then write the final array.
`,mv=`# Trace Java Loops

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
`,gv=`# Method Calls and Scope

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
`,yv=`# String Indexing

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
`,vv=`# Collision Events

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
`,xv=`<!-- Learning example adapted from mswhitby/game-programming/samples/PlayerController.md (sample-lessons); displayed in independent React preview. -->
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
`,bv=`# Score and Feedback

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
`,wv=`# Events and Forms

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
`,kv=`# Responsive Layouts

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
`;function ph(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Qa=ph();function cm(l){Qa=l}var nc={exec:()=>null};function Yt(l,u=""){let p=typeof l=="string"?l:l.source;const g={replace:(y,b)=>{let _=typeof b=="string"?b:b.source;return _=_.replace(Wr.caret,"$1"),p=p.replace(y,_),g},getRegex:()=>new RegExp(p,u)};return g}var Wr={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:l=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}#`),htmlBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}<(?:[a-z].*>|!--)`,"i")},Sv=/^(?:[ \t]*(?:\n|$))+/,_v=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Cv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,dc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Tv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hh=/(?:[*+-]|\d{1,9}[.)])/,dm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,pm=Yt(dm).replace(/bull/g,hh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),jv=Yt(dm).replace(/bull/g,hh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),fh=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Nv=/^[^\n]+/,mh=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Ev=Yt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",mh).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Lv=Yt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,hh).getRegex(),zd="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",gh=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Pv=Yt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",gh).replace("tag",zd).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),hm=Yt(fh).replace("hr",dc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",zd).getRegex(),Av=Yt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",hm).getRegex(),yh={blockquote:Av,code:_v,def:Ev,fences:Cv,heading:Tv,hr:dc,html:Pv,lheading:pm,list:Lv,newline:Sv,paragraph:hm,table:nc,text:Nv},ef=Yt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",dc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",zd).getRegex(),Rv={...yh,lheading:jv,table:ef,paragraph:Yt(fh).replace("hr",dc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ef).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",zd).getRegex()},Iv={...yh,html:Yt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",gh).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:nc,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Yt(fh).replace("hr",dc).replace("heading",` *#{1,6} *[^
]`).replace("lheading",pm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ov=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Mv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,fm=/^( {2,}|\\)\n(?!\s*$)/,Dv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Fd=/[\p{P}\p{S}]/u,vh=/[\s\p{P}\p{S}]/u,mm=/[^\s\p{P}\p{S}]/u,zv=Yt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,vh).getRegex(),gm=/(?!~)[\p{P}\p{S}]/u,Fv=/(?!~)[\s\p{P}\p{S}]/u,Wv=/(?:[^\s\p{P}\p{S}]|~)/u,Hv=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ym=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Bv=Yt(ym,"u").replace(/punct/g,Fd).getRegex(),Uv=Yt(ym,"u").replace(/punct/g,gm).getRegex(),vm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",qv=Yt(vm,"gu").replace(/notPunctSpace/g,mm).replace(/punctSpace/g,vh).replace(/punct/g,Fd).getRegex(),Kv=Yt(vm,"gu").replace(/notPunctSpace/g,Wv).replace(/punctSpace/g,Fv).replace(/punct/g,gm).getRegex(),$v=Yt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,mm).replace(/punctSpace/g,vh).replace(/punct/g,Fd).getRegex(),Gv=Yt(/\\(punct)/,"gu").replace(/punct/g,Fd).getRegex(),Yv=Yt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Vv=Yt(gh).replace("(?:-->|$)","-->").getRegex(),Jv=Yt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Vv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),jd=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Xv=Yt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",jd).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),xm=Yt(/^!?\[(label)\]\[(ref)\]/).replace("label",jd).replace("ref",mh).getRegex(),bm=Yt(/^!?\[(ref)\](?:\[\])?/).replace("ref",mh).getRegex(),Qv=Yt("reflink|nolink(?!\\()","g").replace("reflink",xm).replace("nolink",bm).getRegex(),xh={_backpedal:nc,anyPunctuation:Gv,autolink:Yv,blockSkip:Hv,br:fm,code:Mv,del:nc,emStrongLDelim:Bv,emStrongRDelimAst:qv,emStrongRDelimUnd:$v,escape:Ov,link:Xv,nolink:bm,punctuation:zv,reflink:xm,reflinkSearch:Qv,tag:Jv,text:Dv,url:nc},Zv={...xh,link:Yt(/^!?\[(label)\]\((.*?)\)/).replace("label",jd).getRegex(),reflink:Yt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",jd).getRegex()},Kp={...xh,emStrongRDelimAst:Kv,emStrongLDelim:Uv,url:Yt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},ex={...Kp,br:Yt(fm).replace("{2,}","*").getRegex(),text:Yt(Kp.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},fd={normal:yh,gfm:Rv,pedantic:Iv},Yu={normal:xh,gfm:Kp,breaks:ex,pedantic:Zv},tx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tf=l=>tx[l];function Es(l,u){if(u){if(Wr.escapeTest.test(l))return l.replace(Wr.escapeReplace,tf)}else if(Wr.escapeTestNoEncode.test(l))return l.replace(Wr.escapeReplaceNoEncode,tf);return l}function nf(l){try{l=encodeURI(l).replace(Wr.percentDecode,"%")}catch{return null}return l}function rf(l,u){var b;const p=l.replace(Wr.findPipe,(_,C,k)=>{let E=!1,N=C;for(;--N>=0&&k[N]==="\\";)E=!E;return E?"|":" |"}),g=p.split(Wr.splitPipe);let y=0;if(g[0].trim()||g.shift(),g.length>0&&!((b=g.at(-1))!=null&&b.trim())&&g.pop(),u)if(g.length>u)g.splice(u);else for(;g.length<u;)g.push("");for(;y<g.length;y++)g[y]=g[y].trim().replace(Wr.slashPipe,"|");return g}function Vu(l,u,p){const g=l.length;if(g===0)return"";let y=0;for(;y<g&&l.charAt(g-y-1)===u;)y++;return l.slice(0,g-y)}function nx(l,u){if(l.indexOf(u[1])===-1)return-1;let p=0;for(let g=0;g<l.length;g++)if(l[g]==="\\")g++;else if(l[g]===u[0])p++;else if(l[g]===u[1]&&(p--,p<0))return g;return p>0?-2:-1}function sf(l,u,p,g,y){const b=u.href,_=u.title||null,C=l[1].replace(y.other.outputLinkReplace,"$1");g.state.inLink=!0;const k={type:l[0].charAt(0)==="!"?"image":"link",raw:p,href:b,title:_,text:C,tokens:g.inlineTokens(C)};return g.state.inLink=!1,k}function rx(l,u,p){const g=l.match(p.other.indentCodeCompensation);if(g===null)return u;const y=g[1];return u.split(`
`).map(b=>{const _=b.match(p.other.beginningSpace);if(_===null)return b;const[C]=_;return C.length>=y.length?b.slice(y.length):b}).join(`
`)}var Nd=class{constructor(l){on(this,"options");on(this,"rules");on(this,"lexer");this.options=l||Qa}space(l){const u=this.rules.block.newline.exec(l);if(u&&u[0].length>0)return{type:"space",raw:u[0]}}code(l){const u=this.rules.block.code.exec(l);if(u){const p=u[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:u[0],codeBlockStyle:"indented",text:this.options.pedantic?p:Vu(p,`
`)}}}fences(l){const u=this.rules.block.fences.exec(l);if(u){const p=u[0],g=rx(p,u[3]||"",this.rules);return{type:"code",raw:p,lang:u[2]?u[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):u[2],text:g}}}heading(l){const u=this.rules.block.heading.exec(l);if(u){let p=u[2].trim();if(this.rules.other.endingHash.test(p)){const g=Vu(p,"#");(this.options.pedantic||!g||this.rules.other.endingSpaceChar.test(g))&&(p=g.trim())}return{type:"heading",raw:u[0],depth:u[1].length,text:p,tokens:this.lexer.inline(p)}}}hr(l){const u=this.rules.block.hr.exec(l);if(u)return{type:"hr",raw:Vu(u[0],`
`)}}blockquote(l){const u=this.rules.block.blockquote.exec(l);if(u){let p=Vu(u[0],`
`).split(`
`),g="",y="";const b=[];for(;p.length>0;){let _=!1;const C=[];let k;for(k=0;k<p.length;k++)if(this.rules.other.blockquoteStart.test(p[k]))C.push(p[k]),_=!0;else if(!_)C.push(p[k]);else break;p=p.slice(k);const E=C.join(`
`),N=E.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");g=g?`${g}
${E}`:E,y=y?`${y}
${N}`:N;const I=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(N,b,!0),this.lexer.state.top=I,p.length===0)break;const R=b.at(-1);if((R==null?void 0:R.type)==="code")break;if((R==null?void 0:R.type)==="blockquote"){const V=R,ee=V.raw+`
`+p.join(`
`),H=this.blockquote(ee);b[b.length-1]=H,g=g.substring(0,g.length-V.raw.length)+H.raw,y=y.substring(0,y.length-V.text.length)+H.text;break}else if((R==null?void 0:R.type)==="list"){const V=R,ee=V.raw+`
`+p.join(`
`),H=this.list(ee);b[b.length-1]=H,g=g.substring(0,g.length-R.raw.length)+H.raw,y=y.substring(0,y.length-V.raw.length)+H.raw,p=ee.substring(b.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:g,tokens:b,text:y}}}list(l){let u=this.rules.block.list.exec(l);if(u){let p=u[1].trim();const g=p.length>1,y={type:"list",raw:"",ordered:g,start:g?+p.slice(0,-1):"",loose:!1,items:[]};p=g?`\\d{1,9}\\${p.slice(-1)}`:`\\${p}`,this.options.pedantic&&(p=g?p:"[*+-]");const b=this.rules.other.listItemRegex(p);let _=!1;for(;l;){let k=!1,E="",N="";if(!(u=b.exec(l))||this.rules.block.hr.test(l))break;E=u[0],l=l.substring(E.length);let I=u[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,D=>" ".repeat(3*D.length)),R=l.split(`
`,1)[0],V=!I.trim(),ee=0;if(this.options.pedantic?(ee=2,N=I.trimStart()):V?ee=u[1].length+1:(ee=u[2].search(this.rules.other.nonSpaceChar),ee=ee>4?1:ee,N=I.slice(ee),ee+=u[1].length),V&&this.rules.other.blankLine.test(R)&&(E+=R+`
`,l=l.substring(R.length+1),k=!0),!k){const D=this.rules.other.nextBulletRegex(ee),W=this.rules.other.hrRegex(ee),F=this.rules.other.fencesBeginRegex(ee),q=this.rules.other.headingBeginRegex(ee),Y=this.rules.other.htmlBeginRegex(ee);for(;l;){const he=l.split(`
`,1)[0];let le;if(R=he,this.options.pedantic?(R=R.replace(this.rules.other.listReplaceNesting,"  "),le=R):le=R.replace(this.rules.other.tabCharGlobal,"    "),F.test(R)||q.test(R)||Y.test(R)||D.test(R)||W.test(R))break;if(le.search(this.rules.other.nonSpaceChar)>=ee||!R.trim())N+=`
`+le.slice(ee);else{if(V||I.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||F.test(I)||q.test(I)||W.test(I))break;N+=`
`+R}!V&&!R.trim()&&(V=!0),E+=he+`
`,l=l.substring(he.length+1),I=le.slice(ee)}}y.loose||(_?y.loose=!0:this.rules.other.doubleBlankLine.test(E)&&(_=!0));let H=null,oe;this.options.gfm&&(H=this.rules.other.listIsTask.exec(N),H&&(oe=H[0]!=="[ ] ",N=N.replace(this.rules.other.listReplaceTask,""))),y.items.push({type:"list_item",raw:E,task:!!H,checked:oe,loose:!1,text:N,tokens:[]}),y.raw+=E}const C=y.items.at(-1);if(C)C.raw=C.raw.trimEnd(),C.text=C.text.trimEnd();else return;y.raw=y.raw.trimEnd();for(let k=0;k<y.items.length;k++)if(this.lexer.state.top=!1,y.items[k].tokens=this.lexer.blockTokens(y.items[k].text,[]),!y.loose){const E=y.items[k].tokens.filter(I=>I.type==="space"),N=E.length>0&&E.some(I=>this.rules.other.anyLine.test(I.raw));y.loose=N}if(y.loose)for(let k=0;k<y.items.length;k++)y.items[k].loose=!0;return y}}html(l){const u=this.rules.block.html.exec(l);if(u)return{type:"html",block:!0,raw:u[0],pre:u[1]==="pre"||u[1]==="script"||u[1]==="style",text:u[0]}}def(l){const u=this.rules.block.def.exec(l);if(u){const p=u[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),g=u[2]?u[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",y=u[3]?u[3].substring(1,u[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):u[3];return{type:"def",tag:p,raw:u[0],href:g,title:y}}}table(l){var _;const u=this.rules.block.table.exec(l);if(!u||!this.rules.other.tableDelimiter.test(u[2]))return;const p=rf(u[1]),g=u[2].replace(this.rules.other.tableAlignChars,"").split("|"),y=(_=u[3])!=null&&_.trim()?u[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],b={type:"table",raw:u[0],header:[],align:[],rows:[]};if(p.length===g.length){for(const C of g)this.rules.other.tableAlignRight.test(C)?b.align.push("right"):this.rules.other.tableAlignCenter.test(C)?b.align.push("center"):this.rules.other.tableAlignLeft.test(C)?b.align.push("left"):b.align.push(null);for(let C=0;C<p.length;C++)b.header.push({text:p[C],tokens:this.lexer.inline(p[C]),header:!0,align:b.align[C]});for(const C of y)b.rows.push(rf(C,b.header.length).map((k,E)=>({text:k,tokens:this.lexer.inline(k),header:!1,align:b.align[E]})));return b}}lheading(l){const u=this.rules.block.lheading.exec(l);if(u)return{type:"heading",raw:u[0],depth:u[2].charAt(0)==="="?1:2,text:u[1],tokens:this.lexer.inline(u[1])}}paragraph(l){const u=this.rules.block.paragraph.exec(l);if(u){const p=u[1].charAt(u[1].length-1)===`
`?u[1].slice(0,-1):u[1];return{type:"paragraph",raw:u[0],text:p,tokens:this.lexer.inline(p)}}}text(l){const u=this.rules.block.text.exec(l);if(u)return{type:"text",raw:u[0],text:u[0],tokens:this.lexer.inline(u[0])}}escape(l){const u=this.rules.inline.escape.exec(l);if(u)return{type:"escape",raw:u[0],text:u[1]}}tag(l){const u=this.rules.inline.tag.exec(l);if(u)return!this.lexer.state.inLink&&this.rules.other.startATag.test(u[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(u[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(u[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(u[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:u[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:u[0]}}link(l){const u=this.rules.inline.link.exec(l);if(u){const p=u[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(p)){if(!this.rules.other.endAngleBracket.test(p))return;const b=Vu(p.slice(0,-1),"\\");if((p.length-b.length)%2===0)return}else{const b=nx(u[2],"()");if(b===-2)return;if(b>-1){const C=(u[0].indexOf("!")===0?5:4)+u[1].length+b;u[2]=u[2].substring(0,b),u[0]=u[0].substring(0,C).trim(),u[3]=""}}let g=u[2],y="";if(this.options.pedantic){const b=this.rules.other.pedanticHrefTitle.exec(g);b&&(g=b[1],y=b[3])}else y=u[3]?u[3].slice(1,-1):"";return g=g.trim(),this.rules.other.startAngleBracket.test(g)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(p)?g=g.slice(1):g=g.slice(1,-1)),sf(u,{href:g&&g.replace(this.rules.inline.anyPunctuation,"$1"),title:y&&y.replace(this.rules.inline.anyPunctuation,"$1")},u[0],this.lexer,this.rules)}}reflink(l,u){let p;if((p=this.rules.inline.reflink.exec(l))||(p=this.rules.inline.nolink.exec(l))){const g=(p[2]||p[1]).replace(this.rules.other.multipleSpaceGlobal," "),y=u[g.toLowerCase()];if(!y){const b=p[0].charAt(0);return{type:"text",raw:b,text:b}}return sf(p,y,p[0],this.lexer,this.rules)}}emStrong(l,u,p=""){let g=this.rules.inline.emStrongLDelim.exec(l);if(!g||g[3]&&p.match(this.rules.other.unicodeAlphaNumeric))return;if(!(g[1]||g[2]||"")||!p||this.rules.inline.punctuation.exec(p)){const b=[...g[0]].length-1;let _,C,k=b,E=0;const N=g[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(N.lastIndex=0,u=u.slice(-1*l.length+b);(g=N.exec(u))!=null;){if(_=g[1]||g[2]||g[3]||g[4]||g[5]||g[6],!_)continue;if(C=[..._].length,g[3]||g[4]){k+=C;continue}else if((g[5]||g[6])&&b%3&&!((b+C)%3)){E+=C;continue}if(k-=C,k>0)continue;C=Math.min(C,C+k+E);const I=[...g[0]][0].length,R=l.slice(0,b+g.index+I+C);if(Math.min(b,C)%2){const ee=R.slice(1,-1);return{type:"em",raw:R,text:ee,tokens:this.lexer.inlineTokens(ee)}}const V=R.slice(2,-2);return{type:"strong",raw:R,text:V,tokens:this.lexer.inlineTokens(V)}}}}codespan(l){const u=this.rules.inline.code.exec(l);if(u){let p=u[2].replace(this.rules.other.newLineCharGlobal," ");const g=this.rules.other.nonSpaceChar.test(p),y=this.rules.other.startingSpaceChar.test(p)&&this.rules.other.endingSpaceChar.test(p);return g&&y&&(p=p.substring(1,p.length-1)),{type:"codespan",raw:u[0],text:p}}}br(l){const u=this.rules.inline.br.exec(l);if(u)return{type:"br",raw:u[0]}}del(l){const u=this.rules.inline.del.exec(l);if(u)return{type:"del",raw:u[0],text:u[2],tokens:this.lexer.inlineTokens(u[2])}}autolink(l){const u=this.rules.inline.autolink.exec(l);if(u){let p,g;return u[2]==="@"?(p=u[1],g="mailto:"+p):(p=u[1],g=p),{type:"link",raw:u[0],text:p,href:g,tokens:[{type:"text",raw:p,text:p}]}}}url(l){var p;let u;if(u=this.rules.inline.url.exec(l)){let g,y;if(u[2]==="@")g=u[0],y="mailto:"+g;else{let b;do b=u[0],u[0]=((p=this.rules.inline._backpedal.exec(u[0]))==null?void 0:p[0])??"";while(b!==u[0]);g=u[0],u[1]==="www."?y="http://"+u[0]:y=u[0]}return{type:"link",raw:u[0],text:g,href:y,tokens:[{type:"text",raw:g,text:g}]}}}inlineText(l){const u=this.rules.inline.text.exec(l);if(u){const p=this.lexer.state.inRawBlock;return{type:"text",raw:u[0],text:u[0],escaped:p}}}},fo=class $p{constructor(u){on(this,"tokens");on(this,"options");on(this,"state");on(this,"tokenizer");on(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=u||Qa,this.options.tokenizer=this.options.tokenizer||new Nd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const p={other:Wr,block:fd.normal,inline:Yu.normal};this.options.pedantic?(p.block=fd.pedantic,p.inline=Yu.pedantic):this.options.gfm&&(p.block=fd.gfm,this.options.breaks?p.inline=Yu.breaks:p.inline=Yu.gfm),this.tokenizer.rules=p}static get rules(){return{block:fd,inline:Yu}}static lex(u,p){return new $p(p).lex(u)}static lexInline(u,p){return new $p(p).inlineTokens(u)}lex(u){u=u.replace(Wr.carriageReturn,`
`),this.blockTokens(u,this.tokens);for(let p=0;p<this.inlineQueue.length;p++){const g=this.inlineQueue[p];this.inlineTokens(g.src,g.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(u,p=[],g=!1){var y,b,_;for(this.options.pedantic&&(u=u.replace(Wr.tabCharGlobal,"    ").replace(Wr.spaceLine,""));u;){let C;if((b=(y=this.options.extensions)==null?void 0:y.block)!=null&&b.some(E=>(C=E.call({lexer:this},u,p))?(u=u.substring(C.raw.length),p.push(C),!0):!1))continue;if(C=this.tokenizer.space(u)){u=u.substring(C.raw.length);const E=p.at(-1);C.raw.length===1&&E!==void 0?E.raw+=`
`:p.push(C);continue}if(C=this.tokenizer.code(u)){u=u.substring(C.raw.length);const E=p.at(-1);(E==null?void 0:E.type)==="paragraph"||(E==null?void 0:E.type)==="text"?(E.raw+=`
`+C.raw,E.text+=`
`+C.text,this.inlineQueue.at(-1).src=E.text):p.push(C);continue}if(C=this.tokenizer.fences(u)){u=u.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.heading(u)){u=u.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.hr(u)){u=u.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.blockquote(u)){u=u.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.list(u)){u=u.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.html(u)){u=u.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.def(u)){u=u.substring(C.raw.length);const E=p.at(-1);(E==null?void 0:E.type)==="paragraph"||(E==null?void 0:E.type)==="text"?(E.raw+=`
`+C.raw,E.text+=`
`+C.raw,this.inlineQueue.at(-1).src=E.text):this.tokens.links[C.tag]||(this.tokens.links[C.tag]={href:C.href,title:C.title});continue}if(C=this.tokenizer.table(u)){u=u.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.lheading(u)){u=u.substring(C.raw.length),p.push(C);continue}let k=u;if((_=this.options.extensions)!=null&&_.startBlock){let E=1/0;const N=u.slice(1);let I;this.options.extensions.startBlock.forEach(R=>{I=R.call({lexer:this},N),typeof I=="number"&&I>=0&&(E=Math.min(E,I))}),E<1/0&&E>=0&&(k=u.substring(0,E+1))}if(this.state.top&&(C=this.tokenizer.paragraph(k))){const E=p.at(-1);g&&(E==null?void 0:E.type)==="paragraph"?(E.raw+=`
`+C.raw,E.text+=`
`+C.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=E.text):p.push(C),g=k.length!==u.length,u=u.substring(C.raw.length);continue}if(C=this.tokenizer.text(u)){u=u.substring(C.raw.length);const E=p.at(-1);(E==null?void 0:E.type)==="text"?(E.raw+=`
`+C.raw,E.text+=`
`+C.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=E.text):p.push(C);continue}if(u){const E="Infinite loop on byte: "+u.charCodeAt(0);if(this.options.silent){console.error(E);break}else throw new Error(E)}}return this.state.top=!0,p}inline(u,p=[]){return this.inlineQueue.push({src:u,tokens:p}),p}inlineTokens(u,p=[]){var C,k,E;let g=u,y=null;if(this.tokens.links){const N=Object.keys(this.tokens.links);if(N.length>0)for(;(y=this.tokenizer.rules.inline.reflinkSearch.exec(g))!=null;)N.includes(y[0].slice(y[0].lastIndexOf("[")+1,-1))&&(g=g.slice(0,y.index)+"["+"a".repeat(y[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(y=this.tokenizer.rules.inline.anyPunctuation.exec(g))!=null;)g=g.slice(0,y.index)+"++"+g.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(y=this.tokenizer.rules.inline.blockSkip.exec(g))!=null;)g=g.slice(0,y.index)+"["+"a".repeat(y[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let b=!1,_="";for(;u;){b||(_=""),b=!1;let N;if((k=(C=this.options.extensions)==null?void 0:C.inline)!=null&&k.some(R=>(N=R.call({lexer:this},u,p))?(u=u.substring(N.raw.length),p.push(N),!0):!1))continue;if(N=this.tokenizer.escape(u)){u=u.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.tag(u)){u=u.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.link(u)){u=u.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.reflink(u,this.tokens.links)){u=u.substring(N.raw.length);const R=p.at(-1);N.type==="text"&&(R==null?void 0:R.type)==="text"?(R.raw+=N.raw,R.text+=N.text):p.push(N);continue}if(N=this.tokenizer.emStrong(u,g,_)){u=u.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.codespan(u)){u=u.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.br(u)){u=u.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.del(u)){u=u.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.autolink(u)){u=u.substring(N.raw.length),p.push(N);continue}if(!this.state.inLink&&(N=this.tokenizer.url(u))){u=u.substring(N.raw.length),p.push(N);continue}let I=u;if((E=this.options.extensions)!=null&&E.startInline){let R=1/0;const V=u.slice(1);let ee;this.options.extensions.startInline.forEach(H=>{ee=H.call({lexer:this},V),typeof ee=="number"&&ee>=0&&(R=Math.min(R,ee))}),R<1/0&&R>=0&&(I=u.substring(0,R+1))}if(N=this.tokenizer.inlineText(I)){u=u.substring(N.raw.length),N.raw.slice(-1)!=="_"&&(_=N.raw.slice(-1)),b=!0;const R=p.at(-1);(R==null?void 0:R.type)==="text"?(R.raw+=N.raw,R.text+=N.text):p.push(N);continue}if(u){const R="Infinite loop on byte: "+u.charCodeAt(0);if(this.options.silent){console.error(R);break}else throw new Error(R)}}return p}},Ed=class{constructor(l){on(this,"options");on(this,"parser");this.options=l||Qa}space(l){return""}code({text:l,lang:u,escaped:p}){var b;const g=(b=(u||"").match(Wr.notSpaceStart))==null?void 0:b[0],y=l.replace(Wr.endingNewline,"")+`
`;return g?'<pre><code class="language-'+Es(g)+'">'+(p?y:Es(y,!0))+`</code></pre>
`:"<pre><code>"+(p?y:Es(y,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:u}){return`<h${u}>${this.parser.parseInline(l)}</h${u}>
`}hr(l){return`<hr>
`}list(l){const u=l.ordered,p=l.start;let g="";for(let _=0;_<l.items.length;_++){const C=l.items[_];g+=this.listitem(C)}const y=u?"ol":"ul",b=u&&p!==1?' start="'+p+'"':"";return"<"+y+b+`>
`+g+"</"+y+`>
`}listitem(l){var p;let u="";if(l.task){const g=this.checkbox({checked:!!l.checked});l.loose?((p=l.tokens[0])==null?void 0:p.type)==="paragraph"?(l.tokens[0].text=g+" "+l.tokens[0].text,l.tokens[0].tokens&&l.tokens[0].tokens.length>0&&l.tokens[0].tokens[0].type==="text"&&(l.tokens[0].tokens[0].text=g+" "+Es(l.tokens[0].tokens[0].text),l.tokens[0].tokens[0].escaped=!0)):l.tokens.unshift({type:"text",raw:g+" ",text:g+" ",escaped:!0}):u+=g+" "}return u+=this.parser.parse(l.tokens,!!l.loose),`<li>${u}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let u="",p="";for(let y=0;y<l.header.length;y++)p+=this.tablecell(l.header[y]);u+=this.tablerow({text:p});let g="";for(let y=0;y<l.rows.length;y++){const b=l.rows[y];p="";for(let _=0;_<b.length;_++)p+=this.tablecell(b[_]);g+=this.tablerow({text:p})}return g&&(g=`<tbody>${g}</tbody>`),`<table>
<thead>
`+u+`</thead>
`+g+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){const u=this.parser.parseInline(l.tokens),p=l.header?"th":"td";return(l.align?`<${p} align="${l.align}">`:`<${p}>`)+u+`</${p}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${Es(l,!0)}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:u,tokens:p}){const g=this.parser.parseInline(p),y=nf(l);if(y===null)return g;l=y;let b='<a href="'+l+'"';return u&&(b+=' title="'+Es(u)+'"'),b+=">"+g+"</a>",b}image({href:l,title:u,text:p,tokens:g}){g&&(p=this.parser.parseInline(g,this.parser.textRenderer));const y=nf(l);if(y===null)return Es(p);l=y;let b=`<img src="${l}" alt="${p}"`;return u&&(b+=` title="${Es(u)}"`),b+=">",b}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):"escaped"in l&&l.escaped?l.text:Es(l.text)}},bh=class{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}},mo=class Gp{constructor(u){on(this,"options");on(this,"renderer");on(this,"textRenderer");this.options=u||Qa,this.options.renderer=this.options.renderer||new Ed,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new bh}static parse(u,p){return new Gp(p).parse(u)}static parseInline(u,p){return new Gp(p).parseInline(u)}parse(u,p=!0){var y,b;let g="";for(let _=0;_<u.length;_++){const C=u[_];if((b=(y=this.options.extensions)==null?void 0:y.renderers)!=null&&b[C.type]){const E=C,N=this.options.extensions.renderers[E.type].call({parser:this},E);if(N!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(E.type)){g+=N||"";continue}}const k=C;switch(k.type){case"space":{g+=this.renderer.space(k);continue}case"hr":{g+=this.renderer.hr(k);continue}case"heading":{g+=this.renderer.heading(k);continue}case"code":{g+=this.renderer.code(k);continue}case"table":{g+=this.renderer.table(k);continue}case"blockquote":{g+=this.renderer.blockquote(k);continue}case"list":{g+=this.renderer.list(k);continue}case"html":{g+=this.renderer.html(k);continue}case"paragraph":{g+=this.renderer.paragraph(k);continue}case"text":{let E=k,N=this.renderer.text(E);for(;_+1<u.length&&u[_+1].type==="text";)E=u[++_],N+=`
`+this.renderer.text(E);p?g+=this.renderer.paragraph({type:"paragraph",raw:N,text:N,tokens:[{type:"text",raw:N,text:N,escaped:!0}]}):g+=N;continue}default:{const E='Token with "'+k.type+'" type was not found.';if(this.options.silent)return console.error(E),"";throw new Error(E)}}}return g}parseInline(u,p=this.renderer){var y,b;let g="";for(let _=0;_<u.length;_++){const C=u[_];if((b=(y=this.options.extensions)==null?void 0:y.renderers)!=null&&b[C.type]){const E=this.options.extensions.renderers[C.type].call({parser:this},C);if(E!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(C.type)){g+=E||"";continue}}const k=C;switch(k.type){case"escape":{g+=p.text(k);break}case"html":{g+=p.html(k);break}case"link":{g+=p.link(k);break}case"image":{g+=p.image(k);break}case"strong":{g+=p.strong(k);break}case"em":{g+=p.em(k);break}case"codespan":{g+=p.codespan(k);break}case"br":{g+=p.br(k);break}case"del":{g+=p.del(k);break}case"text":{g+=p.text(k);break}default:{const E='Token with "'+k.type+'" type was not found.';if(this.options.silent)return console.error(E),"";throw new Error(E)}}}return g}},Hp,vd=(Hp=class{constructor(l){on(this,"options");on(this,"block");this.options=l||Qa}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}provideLexer(){return this.block?fo.lex:fo.lexInline}provideParser(){return this.block?mo.parse:mo.parseInline}},on(Hp,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Hp),ix=class{constructor(...l){on(this,"defaults",ph());on(this,"options",this.setOptions);on(this,"parse",this.parseMarkdown(!0));on(this,"parseInline",this.parseMarkdown(!1));on(this,"Parser",mo);on(this,"Renderer",Ed);on(this,"TextRenderer",bh);on(this,"Lexer",fo);on(this,"Tokenizer",Nd);on(this,"Hooks",vd);this.use(...l)}walkTokens(l,u){var g,y;let p=[];for(const b of l)switch(p=p.concat(u.call(this,b)),b.type){case"table":{const _=b;for(const C of _.header)p=p.concat(this.walkTokens(C.tokens,u));for(const C of _.rows)for(const k of C)p=p.concat(this.walkTokens(k.tokens,u));break}case"list":{const _=b;p=p.concat(this.walkTokens(_.items,u));break}default:{const _=b;(y=(g=this.defaults.extensions)==null?void 0:g.childTokens)!=null&&y[_.type]?this.defaults.extensions.childTokens[_.type].forEach(C=>{const k=_[C].flat(1/0);p=p.concat(this.walkTokens(k,u))}):_.tokens&&(p=p.concat(this.walkTokens(_.tokens,u)))}}return p}use(...l){const u=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(p=>{const g={...p};if(g.async=this.defaults.async||g.async||!1,p.extensions&&(p.extensions.forEach(y=>{if(!y.name)throw new Error("extension name required");if("renderer"in y){const b=u.renderers[y.name];b?u.renderers[y.name]=function(..._){let C=y.renderer.apply(this,_);return C===!1&&(C=b.apply(this,_)),C}:u.renderers[y.name]=y.renderer}if("tokenizer"in y){if(!y.level||y.level!=="block"&&y.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const b=u[y.level];b?b.unshift(y.tokenizer):u[y.level]=[y.tokenizer],y.start&&(y.level==="block"?u.startBlock?u.startBlock.push(y.start):u.startBlock=[y.start]:y.level==="inline"&&(u.startInline?u.startInline.push(y.start):u.startInline=[y.start]))}"childTokens"in y&&y.childTokens&&(u.childTokens[y.name]=y.childTokens)}),g.extensions=u),p.renderer){const y=this.defaults.renderer||new Ed(this.defaults);for(const b in p.renderer){if(!(b in y))throw new Error(`renderer '${b}' does not exist`);if(["options","parser"].includes(b))continue;const _=b,C=p.renderer[_],k=y[_];y[_]=(...E)=>{let N=C.apply(y,E);return N===!1&&(N=k.apply(y,E)),N||""}}g.renderer=y}if(p.tokenizer){const y=this.defaults.tokenizer||new Nd(this.defaults);for(const b in p.tokenizer){if(!(b in y))throw new Error(`tokenizer '${b}' does not exist`);if(["options","rules","lexer"].includes(b))continue;const _=b,C=p.tokenizer[_],k=y[_];y[_]=(...E)=>{let N=C.apply(y,E);return N===!1&&(N=k.apply(y,E)),N}}g.tokenizer=y}if(p.hooks){const y=this.defaults.hooks||new vd;for(const b in p.hooks){if(!(b in y))throw new Error(`hook '${b}' does not exist`);if(["options","block"].includes(b))continue;const _=b,C=p.hooks[_],k=y[_];vd.passThroughHooks.has(b)?y[_]=E=>{if(this.defaults.async)return Promise.resolve(C.call(y,E)).then(I=>k.call(y,I));const N=C.call(y,E);return k.call(y,N)}:y[_]=(...E)=>{let N=C.apply(y,E);return N===!1&&(N=k.apply(y,E)),N}}g.hooks=y}if(p.walkTokens){const y=this.defaults.walkTokens,b=p.walkTokens;g.walkTokens=function(_){let C=[];return C.push(b.call(this,_)),y&&(C=C.concat(y.call(this,_))),C}}this.defaults={...this.defaults,...g}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,u){return fo.lex(l,u??this.defaults)}parser(l,u){return mo.parse(l,u??this.defaults)}parseMarkdown(l){return(p,g)=>{const y={...g},b={...this.defaults,...y},_=this.onError(!!b.silent,!!b.async);if(this.defaults.async===!0&&y.async===!1)return _(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof p>"u"||p===null)return _(new Error("marked(): input parameter is undefined or null"));if(typeof p!="string")return _(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(p)+", string expected"));b.hooks&&(b.hooks.options=b,b.hooks.block=l);const C=b.hooks?b.hooks.provideLexer():l?fo.lex:fo.lexInline,k=b.hooks?b.hooks.provideParser():l?mo.parse:mo.parseInline;if(b.async)return Promise.resolve(b.hooks?b.hooks.preprocess(p):p).then(E=>C(E,b)).then(E=>b.hooks?b.hooks.processAllTokens(E):E).then(E=>b.walkTokens?Promise.all(this.walkTokens(E,b.walkTokens)).then(()=>E):E).then(E=>k(E,b)).then(E=>b.hooks?b.hooks.postprocess(E):E).catch(_);try{b.hooks&&(p=b.hooks.preprocess(p));let E=C(p,b);b.hooks&&(E=b.hooks.processAllTokens(E)),b.walkTokens&&this.walkTokens(E,b.walkTokens);let N=k(E,b);return b.hooks&&(N=b.hooks.postprocess(N)),N}catch(E){return _(E)}}}onError(l,u){return p=>{if(p.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const g="<p>An error occurred:</p><pre>"+Es(p.message+"",!0)+"</pre>";return u?Promise.resolve(g):g}if(u)return Promise.reject(p);throw p}}},Xa=new ix;function Vt(l,u){return Xa.parse(l,u)}Vt.options=Vt.setOptions=function(l){return Xa.setOptions(l),Vt.defaults=Xa.defaults,cm(Vt.defaults),Vt};Vt.getDefaults=ph;Vt.defaults=Qa;Vt.use=function(...l){return Xa.use(...l),Vt.defaults=Xa.defaults,cm(Vt.defaults),Vt};Vt.walkTokens=function(l,u){return Xa.walkTokens(l,u)};Vt.parseInline=Xa.parseInline;Vt.Parser=mo;Vt.parser=mo.parse;Vt.Renderer=Ed;Vt.TextRenderer=bh;Vt.Lexer=fo;Vt.lexer=fo.lex;Vt.Tokenizer=Nd;Vt.Hooks=vd;Vt.parse=Vt;Vt.options;Vt.setOptions;Vt.use;Vt.walkTokens;Vt.parseInline;mo.parse;fo.lex;/*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE */function of(l,u){(u==null||u>l.length)&&(u=l.length);for(var p=0,g=Array(u);p<u;p++)g[p]=l[p];return g}function sx(l){if(Array.isArray(l))return l}function ox(l,u){var p=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(p!=null){var g,y,b,_,C=[],k=!0,E=!1;try{if(b=(p=p.call(l)).next,u!==0)for(;!(k=(g=b.call(p)).done)&&(C.push(g.value),C.length!==u);k=!0);}catch(N){E=!0,y=N}finally{try{if(!k&&p.return!=null&&(_=p.return(),Object(_)!==_))return}finally{if(E)throw y}}return C}}function ax(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function lx(l,u){return sx(l)||ox(l,u)||ux(l,u)||ax()}function ux(l,u){if(l){if(typeof l=="string")return of(l,u);var p={}.toString.call(l).slice(8,-1);return p==="Object"&&l.constructor&&(p=l.constructor.name),p==="Map"||p==="Set"?Array.from(l):p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)?of(l,u):void 0}}const wm=Object.entries,af=Object.setPrototypeOf,cx=Object.isFrozen,km=Object.getPrototypeOf,Sm=Object.getOwnPropertyDescriptor;let or=Object.freeze,_r=Object.seal,ql=Object.create,_m=typeof Reflect<"u"&&Reflect,Yp=_m.apply,Vp=_m.construct;or||(or=function(u){return u});_r||(_r=function(u){return u});Yp||(Yp=function(u,p){for(var g=arguments.length,y=new Array(g>2?g-2:0),b=2;b<g;b++)y[b-2]=arguments[b];return u.apply(p,y)});Vp||(Vp=function(u){for(var p=arguments.length,g=new Array(p>1?p-1:0),y=1;y<p;y++)g[y-1]=arguments[y];return new u(...g)});const uo=bn(Array.prototype.forEach),dx=bn(Array.prototype.lastIndexOf),lf=bn(Array.prototype.pop),Ju=bn(Array.prototype.push),px=bn(Array.prototype.slice),hx=bn(Array.prototype.splice),Gl=Array.isArray,Pp=Cm(Set),Ap=bn(Set.prototype.add),Xu=bn(Set.prototype.has),Ya=bn(String.prototype.toLowerCase),Rp=bn(String.prototype.toString),uf=bn(String.prototype.match),Qu=bn(String.prototype.replace),cf=bn(String.prototype.indexOf),fx=bn(String.prototype.trim),mx=bn(Number.prototype.toString),gx=bn(Boolean.prototype.toString),df=typeof BigInt>"u"?null:bn(BigInt.prototype.toString),pf=typeof Symbol>"u"?null:bn(Symbol.prototype.toString),ti=bn(Object.prototype.hasOwnProperty),Zu=bn(Object.prototype.toString),Sr=bn(RegExp.prototype.test),co=Cm(TypeError);function bn(l){return function(u){u instanceof RegExp&&(u.lastIndex=0);for(var p=arguments.length,g=new Array(p>1?p-1:0),y=1;y<p;y++)g[y-1]=arguments[y];return Yp(l,u,g)}}function Cm(l){return function(){for(var u=arguments.length,p=new Array(u),g=0;g<u;g++)p[g]=arguments[g];return Vp(l,p)}}function Wt(l,u){let p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ya;if(af&&af(l,null),!Gl(u))return l;let g=u.length;for(;g--;){let y=u[g];if(typeof y=="string"){const b=p(y);b!==y&&(cx(u)||(u[g]=b),y=b)}l[y]=!0}return l}function yx(l){for(let u=0;u<l.length;u++)ti(l,u)||(l[u]=null);return l}function yi(l){const u=ql(null);for(const g of wm(l)){var p=lx(g,2);const y=p[0],b=p[1];ti(l,y)&&(Gl(b)?u[y]=yx(b):b&&typeof b=="object"&&b.constructor===Object?u[y]=yi(b):u[y]=b)}return u}function vx(l){switch(typeof l){case"string":return l;case"number":return mx(l);case"boolean":return gx(l);case"bigint":return df?df(l):"0";case"symbol":return pf?pf(l):"Symbol()";case"undefined":return Zu(l);case"function":case"object":{if(l===null)return Zu(l);const u=l,p=Di(u,"toString");if(typeof p=="function"){const g=p(u);return typeof g=="string"?g:Zu(g)}return Zu(l)}default:return Zu(l)}}function Di(l,u){for(;l!==null;){const g=Sm(l,u);if(g){if(g.get)return bn(g.get);if(typeof g.value=="function")return bn(g.value)}l=km(l)}function p(){return null}return p}function xx(l,u){for(;l!==null;){const p=Sm(l,u);if(p)return p.get?bn(p.get):null;l=km(l)}return null}function bx(l){try{return Sr(l,""),!0}catch{return!1}}const hf=or(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ip=or(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Op=or(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),wx=or(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Mp=or(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),kx=or(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ff=or(["#text"]),mf=or(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Dp=or(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),gf=or(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),md=or(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Sx=_r(/{{[\w\W]*|^[\w\W]*}}/g),_x=_r(/<%[\w\W]*|^[\w\W]*%>/g),Cx=_r(/\${[\w\W]*/g),Tx=_r(/^data-[\-\w.\u00B7-\uFFFF]+$/),jx=_r(/^aria-[\-\w]+$/),yf=_r(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Nx=_r(/^(?:\w+script|data):/i),Ex=_r(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Lx=_r(/^html$/i),Px=_r(/^[a-z][.\w]*(-[.\w]+)+$/i),zp=_r(/<[/\w!]/g),vf=_r(/<[/\w]/g),Ax=_r(/<\/no(script|embed|frames)/i),xf=_r(/\/>/i),Vn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Rx=or(Wt({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),Ix=function(){return typeof window>"u"?null:window},Ox=function(u,p){if(typeof u!="object"||typeof u.createPolicy!="function")return null;let g=null;const y="data-tt-policy-suffix";p&&p.hasAttribute(y)&&(g=p.getAttribute(y));const b="dompurify"+(g?"#"+g:"");try{return u.createPolicy(b,{createHTML(_){return _},createScriptURL(_){return _}})}catch{return console.warn("TrustedTypes policy "+b+" could not be created."),null}},bf=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},na=function(u,p,g,y){return ti(u,p)&&Gl(u[p])?Wt(y.base?yi(y.base):{},u[p],y.transform):g},Fp=function(u,p,g){const y=ti(u,p)?u[p]:void 0;return y&&typeof y=="object"?yi(y):g()};function Tm(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ix();const u=je=>Tm(je);if(u.version="3.4.17",u.removed=[],!l||!l.document||l.document.nodeType!==Vn.document||!l.Element)return u.isSupported=!1,u;let p=l.document;const g=p,y=g.currentScript;l.DocumentFragment;const b=l.HTMLTemplateElement,_=l.Node,C=l.Element,k=l.NodeFilter;l.NamedNodeMap===void 0&&(l.NamedNodeMap||l.MozNamedAttrMap),l.HTMLFormElement;const E=l.DOMParser,N=l.trustedTypes,I=C.prototype,R=Di(I,"cloneNode"),V=Di(I,"remove"),ee=Di(I,"removeAttributeNode"),H=Di(I,"nextSibling"),oe=Di(I,"childNodes"),D=Di(I,"parentNode"),W=Di(I,"shadowRoot"),F=Di(I,"attributes"),q=_&&_.prototype?Di(_.prototype,"nodeType"):null,Y=_&&_.prototype?Di(_.prototype,"nodeName"):null,he=_&&_.prototype?Di(_.prototype,"ownerDocument"):null,le=function(O){return q?q(O):O.nodeType},we=function(O){return Y?Y(O):O.nodeName},He=xx(I,"namespaceURI"),Ne=function(O){return He?He(O):O.namespaceURI};if(typeof b=="function"){const je=p.createElement("template");je.content&&je.content.ownerDocument&&(p=je.content.ownerDocument)}let ie,Te="",se,ye=!1,L=0;const J=function(){if(L>0)throw co('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},K=function(O){J(),L++;try{return ie.createHTML(O)}finally{L--}},j=function(O){J(),L++;try{return ie.createScriptURL(O)}finally{L--}},A=function(){return ye||(se=Ox(N,y),ye=!0),se},G=p,M=G.implementation,Q=G.createNodeIterator,Se=G.createDocumentFragment,De=G.getElementsByTagName,qe=g.importNode;let ke=bf();u.isSupported=typeof wm=="function"&&typeof D=="function"&&M&&M.createHTMLDocument!==void 0;const Ie=Sx,Ue=_x,Ke=Cx,tt=Tx,$e=jx,Ht=Nx,Gt=Ex,_t=Px;let vt=yf,We=null;const rt=Wt({},[...hf,...Ip,...Op,...Mp,...ff]);let et=null;const Kt=Wt({},[...mf,...Dp,...gf,...md]);let Ge=Object.seal(ql(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ht=null,ae=null;const _e=Object.seal(ql(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let ge=!0,wt=!0,Je=!1,at=!0,Ve=!1,yt=!0,pt=!1,mn=!1,Jn=null,Cr=null,Hr=!1,ar=!1,xi=!1,xt=!1,zi=!0,it=!1;const Tr="user-content-";let Jt=!0,It=!1,Ot=null,Nn={},cn=null;const lr=Wt({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let wn=null;const ri=Wt({},["audio","video","img","source","image","track"]);let In=null;const ur=Wt({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Br="http://www.w3.org/1998/Math/MathML",En="http://www.w3.org/2000/svg",jr="http://www.w3.org/1999/xhtml";let Xn=jr,ii=!1,Ur=null;const qr=Wt({},[Br,En,jr],Rp),cr=or(["mi","mo","mn","ms","mtext"]);let Kr=Wt({},cr);const As=or(["annotation-xml"]);let kn=Wt({},As);const vo=Wt({},["title","style","font","a","script"]);let Rr=null;const Ir=["application/xhtml+xml","text/html"],Nr="text/html";let Bt=null,Er=null;const Fi=p.createElement("form"),si=function(O){return O instanceof RegExp||O instanceof Function},bi=function(){let O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Er&&Er===O)return;(!O||typeof O!="object")&&(O={}),O=yi(O),Rr=Ir.indexOf(O.PARSER_MEDIA_TYPE)===-1?Nr:O.PARSER_MEDIA_TYPE,Bt=Rr==="application/xhtml+xml"?Rp:Ya,We=na(O,"ALLOWED_TAGS",rt,{transform:Bt}),et=na(O,"ALLOWED_ATTR",Kt,{transform:Bt}),Ur=na(O,"ALLOWED_NAMESPACES",qr,{transform:Rp}),In=na(O,"ADD_URI_SAFE_ATTR",ur,{transform:Bt,base:ur}),wn=na(O,"ADD_DATA_URI_TAGS",ri,{transform:Bt,base:ri}),cn=na(O,"FORBID_CONTENTS",lr,{transform:Bt}),ht=na(O,"FORBID_TAGS",yi({}),{transform:Bt}),ae=na(O,"FORBID_ATTR",yi({}),{transform:Bt}),Nn=ti(O,"USE_PROFILES")?O.USE_PROFILES&&typeof O.USE_PROFILES=="object"?yi(O.USE_PROFILES):O.USE_PROFILES:!1,ge=O.ALLOW_ARIA_ATTR!==!1,wt=O.ALLOW_DATA_ATTR!==!1,Je=O.ALLOW_UNKNOWN_PROTOCOLS||!1,at=O.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ve=O.SAFE_FOR_TEMPLATES||!1,yt=O.SAFE_FOR_XML!==!1,pt=O.WHOLE_DOCUMENT||!1,ar=O.RETURN_DOM||!1,xi=O.RETURN_DOM_FRAGMENT||!1,xt=O.RETURN_TRUSTED_TYPE||!1,Hr=O.FORCE_BODY||!1,zi=O.SANITIZE_DOM!==!1,it=O.SANITIZE_NAMED_PROPS||!1,Jt=O.KEEP_CONTENT!==!1,It=O.IN_PLACE||!1,vt=bx(O.ALLOWED_URI_REGEXP)?O.ALLOWED_URI_REGEXP:yf,Xn=typeof O.NAMESPACE=="string"?O.NAMESPACE:jr,Kr=Fp(O,"MATHML_TEXT_INTEGRATION_POINTS",()=>Wt({},cr)),kn=Fp(O,"HTML_INTEGRATION_POINTS",()=>Wt({},As));const te=Fp(O,"CUSTOM_ELEMENT_HANDLING",()=>ql(null));if(Ge=ql(null),ti(te,"tagNameCheck")&&si(te.tagNameCheck)&&(Ge.tagNameCheck=te.tagNameCheck),ti(te,"attributeNameCheck")&&si(te.attributeNameCheck)&&(Ge.attributeNameCheck=te.attributeNameCheck),ti(te,"allowCustomizedBuiltInElements")&&typeof te.allowCustomizedBuiltInElements=="boolean"&&(Ge.allowCustomizedBuiltInElements=te.allowCustomizedBuiltInElements),_r(Ge),Ve&&(wt=!1),xi&&(ar=!0),Nn&&(We=Wt({},ff),et=ql(null),Nn.html===!0&&(Wt(We,hf),Wt(et,mf)),Nn.svg===!0&&(Wt(We,Ip),Wt(et,Dp),Wt(et,md)),Nn.svgFilters===!0&&(Wt(We,Op),Wt(et,Dp),Wt(et,md)),Nn.mathMl===!0&&(Wt(We,Mp),Wt(et,gf),Wt(et,md))),_e.tagCheck=null,_e.attributeCheck=null,ti(O,"ADD_TAGS")&&(typeof O.ADD_TAGS=="function"?_e.tagCheck=O.ADD_TAGS:Gl(O.ADD_TAGS)&&(We===rt&&(We=yi(We)),Wt(We,O.ADD_TAGS,Bt))),ti(O,"ADD_ATTR")&&(typeof O.ADD_ATTR=="function"?_e.attributeCheck=O.ADD_ATTR:Gl(O.ADD_ATTR)&&(et===Kt&&(et=yi(et)),Wt(et,O.ADD_ATTR,Bt))),ti(O,"ADD_FORBID_CONTENTS")&&Gl(O.ADD_FORBID_CONTENTS)&&(cn===lr&&(cn=yi(cn)),Wt(cn,O.ADD_FORBID_CONTENTS,Bt)),Jt&&(We["#text"]=!0),pt&&Wt(We,["html","head","body"]),We.table&&(Wt(We,["tbody"]),delete ht.tbody),O.TRUSTED_TYPES_POLICY){if(typeof O.TRUSTED_TYPES_POLICY.createHTML!="function")throw co('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof O.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw co('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const xe=ie;ie=O.TRUSTED_TYPES_POLICY;try{Te=K("")}catch(be){throw ie=xe,be}}else O.TRUSTED_TYPES_POLICY===null?(ie=void 0,Te=""):(ie===void 0&&(ie=A()),ie&&typeof Te=="string"&&(Te=K("")));or&&or(O),Er=O},At=Wt({},[...Ip,...Op,...wx]),as=Wt({},[...Mp,...kx]),wi=function(O,te,xe){return te.namespaceURI===jr?O==="svg":te.namespaceURI===Br?O==="svg"&&(xe==="annotation-xml"||Kr[xe]):!!At[O]},Xt=function(O,te,xe){return te.namespaceURI===jr?O==="math":te.namespaceURI===En?O==="math"&&kn[xe]:!!as[O]},Qe=function(O,te,xe){return te.namespaceURI===En&&!kn[xe]||te.namespaceURI===Br&&!Kr[xe]?!1:!as[O]&&(vo[O]||!At[O])},oi=function(O){const te=Ne(O),xe=Ya(we(O)),be=D(O);let nt,ct;return be&&le(be)===Vn.element?(nt={namespaceURI:Ne(be)},ct=Ya(we(be))):(nt={namespaceURI:Xn},ct="template"),Ur[te]?te===En?wi(xe,nt,ct):te===Br?Xt(xe,nt,ct):te===jr?Qe(xe,nt,ct):!!(Rr==="application/xhtml+xml"&&Ur[te]):!1},dr=function(O){Ju(u.removed,{element:O});try{D(O).removeChild(O)}catch{if(V(O),!D(O))throw co("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},On=function(O,te,xe){try{ee(O,te)}catch{try{O.removeAttribute(xe)}catch{}}},T=function(O){de(O);const te=oe(O);te&&uo(px(te),be=>{try{V(be)}catch{}});const xe=le(O)===Vn.element?F(O):null;if(xe)for(let be=xe.length-1;be>=0;--be){const nt=xe[be],ct=nt&&nt.name;typeof ct=="string"&&On(O,nt,ct)}},B=function(O,te,xe){if(!xe)try{xe=te.getAttributeNode(O)}catch{xe=null}Ju(u.removed,{attribute:xe||null,from:te});try{xe?ee(te,xe):te.removeAttribute(O)}catch{try{te.removeAttribute(O)}catch{}}if(O==="is")if(ar||xi)try{dr(te)}catch{}else try{te.setAttribute(O,"")}catch{}},fe=function(O){const te=F(O);if(te)for(let xe=te.length-1;xe>=0;--xe){const be=te[xe],nt=be&&be.name;typeof nt!="string"||et[Bt(nt)]||On(O,be,nt)}},Ee=function(O,te){let xe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const be=[O];for(;be.length>0;){const nt=be.pop();if(te(nt)===!1)continue;if(xe&&le(nt)===Vn.element){const Ct=W(nt);$r(Ct)&&be.push(Ct)}const ct=oe(nt);if(ct)for(let Ct=ct.length-1;Ct>=0;--Ct)be.push(ct[Ct])}},de=function(O){Ee(O,te=>{le(te)===Vn.element&&fe(te)})},Be=function(O){const te=[];return Ee(O,xe=>{te.push(xe)},!0),te},Tt=function(O,te){const xe=Pp();uo(Be(O),be=>{le(be)===Vn.element&&Ap(xe,be)}),uo(te,be=>{le(be)===Vn.element&&!Xu(xe,be)&&fe(be)})},en=function(O,te){let xe=!1;return uo(u.removed,be=>{be.element&&(xe=xe||be.element===O,de(be.element))}),Tt(O,te),xe},Sn=8,ai=function(O,te){const xe=Ot;let be=null;const nt=()=>(be||(be=Pp(),uo(te,ct=>{Ap(be,ct)})),be);for(let ct=0;;ct++){const Ct=Be(O),gn=[O];let fr=!1;if(uo(Ct,dn=>{le(dn)===Vn.documentFragment?Ju(gn,dn):!fr&&!Xu(xe,dn)&&(fr=Xu(nt(),dn))}),!fr)return;if(ct>=Sn)throw co("the tree kept changing during in-place sanitization; refusing to return it");uo(gn,(dn,$n)=>{Za(dn,$n>0,O,nt())})}},Za=function(O,te,xe,be){const nt=Kn(O);let ct;for(;ct=nt.nextNode();)!Xu(be,ct)||Xu(Ot,ct)||(te&&pr(ke.uponSanitizeShadowNode,ct,null),Or(ct,xe),Bi(ct,xe),$r(ct.content)&&Ds(ct.content))},gt=function(O){Ot&&Ap(Ot,O)},xo=function(O,te){return yt?O==="patchsrc"?!0:O==="for"&&te!=="label"&&te!=="output":!1},sa=function(O){yt&&Ee(O,te=>{const xe=le(te);if(xe===Vn.processingInstruction||xe===Vn.comment&&Sr(vf,te.data)){try{V(te)}catch{}return!1}if(xe===Vn.element){const be=te,nt=Bt(we(te));try{be.hasAttribute&&be.hasAttribute("patchsrc")&&be.removeAttribute("patchsrc"),be.hasAttribute&&be.hasAttribute("for")&&xo("for",nt)&&be.removeAttribute("for")}catch{}}return!0})},Wi=function(O){let te=null,xe=null;if(Hr)O="<remove></remove>"+O;else{const ct=uf(O,/^[\r\n\t ]+/);xe=ct&&ct[0]}Rr==="application/xhtml+xml"&&Xn===jr&&(O='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+O+"</body></html>");const be=ie?K(O):O;if(Xn===jr)try{te=new E().parseFromString(be,Rr)}catch{}if(!te||!te.documentElement){te=M.createDocument(Xn,"template",null);try{te.documentElement.innerHTML=ii?Te:be}catch{}}const nt=te.body||te.documentElement;return O&&xe&&nt.insertBefore(p.createTextNode(xe),nt.childNodes[0]||null),Xn===jr?De.call(te,pt?"html":"body")[0]:pt?te.documentElement:nt},Kn=function(O){const te=he?he(O):O.ownerDocument;return Q.call(te||O,O,k.SHOW_ELEMENT|k.SHOW_COMMENT|k.SHOW_TEXT|k.SHOW_PROCESSING_INSTRUCTION|k.SHOW_CDATA_SECTION,null)},Rs=function(O){return O=Qu(O,Ie," "),O=Qu(O,Ue," "),O=Qu(O,Ke," "),O},ls=function(O){var te;Et(O);const xe=(te=O.querySelectorAll)===null||te===void 0?void 0:te.call(O,"template");xe&&uo(xe,be=>{$r(be.content)&&ls(be.content)})},Et=function(O){O.normalize();const te=he?he(O):O.ownerDocument,xe=Q.call(te||O,O,k.SHOW_TEXT|k.SHOW_COMMENT|k.SHOW_CDATA_SECTION|k.SHOW_PROCESSING_INSTRUCTION,null);let be=xe.nextNode();for(;be;)be.data=Rs(be.data),be=xe.nextNode()},Hi=function(O){const te=Y?Y(O):null;return typeof te!="string"||Bt(te)!=="form"?!1:typeof O.nodeName!="string"||typeof O.textContent!="string"||typeof O.removeChild!="function"||O.attributes!==F(O)||typeof O.removeAttribute!="function"||typeof O.removeAttributeNode!="function"||typeof O.getAttributeNode!="function"||typeof O.setAttribute!="function"||typeof O.namespaceURI!="string"||typeof O.insertBefore!="function"||typeof O.hasChildNodes!="function"||O.nodeType!==q(O)||O.childNodes!==oe(O)},$r=function(O){if(!q||typeof O!="object"||O===null)return!1;try{return q(O)===Vn.documentFragment}catch{return!1}},li=function(O){if(!q||typeof O!="object"||O===null)return!1;try{return typeof q(O)=="number"}catch{return!1}};function pr(je,O,te){je.length!==0&&uo(je,xe=>{xe.call(u,O,te,Er)})}const oa=function(O,te){return!!(yt&&O.hasChildNodes()&&!li(O.firstElementChild)&&Sr(zp,O.textContent)&&Sr(zp,O.innerHTML)||yt&&Rx[te]&&le(O)===Vn.element&&Ne(O)===jr&&(li(O.firstElementChild)||typeof O.textContent=="string"&&Sr(zp,O.textContent))||O.nodeType===Vn.processingInstruction||yt&&O.nodeType===Vn.comment&&Sr(vf,O.data))},us=function(O,te){if(O instanceof RegExp)return Sr(O,te);if(O instanceof Function){for(var xe=arguments.length,be=new Array(xe>2?xe-2:0),nt=2;nt<xe;nt++)be[nt-2]=arguments[nt];return!!O(te,...be)}return!1},bo=function(O,te,xe){if(!ht[te]&&cs(te)&&us(Ge.tagNameCheck,te))return!1;if(Jt&&!cn[te]&&!cn[Ya(te)]){const be=D(O),nt=oe(O);if(nt&&be){const ct=nt.length;for(let Ct=ct-1;Ct>=0;--Ct){const gn=O===xe?R(nt[Ct],!0):nt[Ct];be.insertBefore(gn,H(O))}}}return dr(O),!0},Is=function(O,te,xe,be){return O.length===0?te:te===xe||te===be?yi(te):te},hr=function(O,te){return O===te||D(O)!==null?!1:(It&&de(O),!0)},Or=function(O,te){if(gt(O),pr(ke.beforeSanitizeElements,O,null),hr(O,te))return!0;if(Hi(O))return dr(O),!0;const xe=Bt(we(O));if(We=Is(ke.uponSanitizeElement,We,rt,Jn),pr(ke.uponSanitizeElement,O,{tagName:xe,allowedTags:We}),hr(O,te))return!0;if(oa(O,xe))return dr(O),!0;if(ht[xe]||!(_e.tagCheck instanceof Function&&_e.tagCheck(xe))&&!We[xe]){const be=bo(O,xe,te);return be===!1&&(pr(ke.afterSanitizeElements,O,null),hr(O,te))?!0:be}if(le(O)===Vn.element&&!oi(O)||(xe==="noscript"||xe==="noembed"||xe==="noframes")&&Sr(Ax,O.innerHTML))return dr(O),!0;if(Ve&&O.nodeType===Vn.text){const be=Rs(O.textContent);O.textContent!==be&&(Ju(u.removed,{element:O.cloneNode()}),O.textContent=be)}return pr(ke.afterSanitizeElements,O,null),hr(O,te)},Mn=function(O,te,xe){if(ae[te]||xo(te,O)||zi&&(te==="id"||te==="name")&&(xe in p||xe in Fi))return!1;const be=et[te]||_e.attributeCheck instanceof Function&&_e.attributeCheck(te,O);return wt&&Sr(tt,te)||ge&&Sr($e,te)?!0:be?In[te]||Sr(vt,Qu(xe,Gt,""))||(te==="src"||te==="xlink:href"||te==="href")&&O!=="script"&&cf(xe,"data:")===0&&wn[O]||Je&&!Sr(Ht,Qu(xe,Gt,""))?!0:!xe:cs(O)&&us(Ge.tagNameCheck,O)&&us(Ge.attributeNameCheck,te,O)||te==="is"&&Ge.allowCustomizedBuiltInElements&&us(Ge.tagNameCheck,xe)},Os=Wt({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),cs=function(O){return!Os[Ya(O)]&&Sr(_t,O)},Mr=function(O,te,xe,be){if(ie&&typeof N=="object"&&typeof N.getAttributeType=="function"&&!xe)switch(N.getAttributeType(O,te)){case"TrustedHTML":return K(be);case"TrustedScriptURL":return j(be)}return be},Ms=function(O,te,xe,be){try{return xe?O.setAttributeNS(xe,te,be):O.setAttribute(te,be),Hi(O)?(dr(O),!1):!0}catch{return B(te,O),!1}},aa=function(O,te){return yt&&Sr(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,te)?!0:Ya(O)==="attributename"&&uf(te,"href")!==null},Bi=function(O,te){if(pr(ke.beforeSanitizeAttributes,O,null),hr(O,te))return;const xe=O.attributes;if(!xe||Hi(O))return;et=Is(ke.uponSanitizeAttribute,et,Kt,Cr);const be={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:et,forceKeepAttr:void 0};let nt=xe.length;const ct=Bt(O.nodeName);for(;nt--;){const Ct=xe[nt],gn=Ct.name,fr=Ct.namespaceURI,dn=Ct.value,$n=Bt(gn),ki=dn;let Rt=gn==="value"?ki:fx(ki),ko=!1;if(be.attrName=$n,be.attrValue=Rt,be.keepAttr=!0,be.forceKeepAttr=void 0,pr(ke.uponSanitizeAttribute,O,be),Rt=be.attrValue,it&&($n==="id"||$n==="name")&&cf(Rt,Tr)!==0&&(B(gn,O,Ct),Rt=Tr+Rt,ko=!0),aa(gn,Rt)){B(gn,O,Ct);continue}if(!be.forceKeepAttr){if(!be.keepAttr){B(gn,O,Ct);continue}if(!at&&Sr(xf,Rt)){B(gn,O,Ct);continue}if(Ve&&(Rt=Rs(Rt)),!Mn(ct,$n,Rt)){B(gn,O,Ct);continue}Rt=Mr(ct,$n,fr,Rt),Rt!==ki&&Ms(O,gn,fr,Rt)&&ko&&lf(u.removed)}}pr(ke.afterSanitizeAttributes,O,null),hr(O,te)},Ds=function(O){let te=null;const xe=Kn(O);for(pr(ke.beforeSanitizeShadowDOM,O,null);te=xe.nextNode();)if(pr(ke.uponSanitizeShadowNode,te,null),Or(te,O),Bi(te,O),$r(te.content)&&Ds(te.content),le(te)===Vn.element){const be=W(te);$r(be)&&(wo(be),Ds(be))}Ve&&Et(O),pr(ke.afterSanitizeShadowDOM,O,null)},wo=function(O){const te=[{node:O,shadow:null}];for(;te.length>0;){const xe=te.pop();if(xe.shadow){Ds(xe.shadow);continue}const be=xe.node,nt=le(be)===Vn.element,ct=oe(be);if(ct)for(let Ct=ct.length-1;Ct>=0;--Ct)te.push({node:ct[Ct],shadow:null});if(nt){const Ct=Y?Y(be):null;if(typeof Ct=="string"&&Bt(Ct)==="template"){const gn=be.content;$r(gn)&&te.push({node:gn,shadow:null})}}if(nt){const Ct=W(be);$r(Ct)&&te.push({node:null,shadow:Ct},{node:Ct,shadow:null})}}};return u.sanitize=function(je){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},te=null,xe=null,be=null,nt=null;if(ii=!je,ii&&(je="<!-->"),typeof je!="string"&&!li(je)&&(je=vx(je),typeof je!="string"))throw co("dirty is not a string, aborting");if(!u.isSupported)return je;mn?(We=Jn,et=Cr):bi(O),(ke.uponSanitizeElement.length>0||ke.uponSanitizeAttribute.length>0)&&(We=yi(We)),ke.uponSanitizeAttribute.length>0&&(et=yi(et)),u.removed=[];const ct=It&&typeof je!="string"&&li(je);let Ct=[];const gn=Ot;if(ct){sa(je);const $n=we(je);if(typeof $n=="string"){const ki=Bt($n);if(!We[ki]||ht[ki])throw T(je),co("root node is forbidden and cannot be sanitized in-place")}if(Hi(je))throw T(je),co("root node is clobbered and cannot be sanitized in-place");Ct=Be(je),Ot=Pp()}else if(li(je))te=Wi("<!---->"),xe=te.ownerDocument.importNode(je,!0),xe.nodeType===Vn.element&&xe.nodeName==="BODY"||xe.nodeName==="HTML"?te=xe:te.appendChild(xe),wo(te);else{if(!ar&&!Ve&&!pt&&je.indexOf("<")===-1)return ie&&xt?K(je):je;if(te=Wi(je),!te)return ar?null:xt?Te:""}te&&Hr&&dr(te.firstChild);const fr=ct?je:te;try{ct&&wo(je);const $n=Kn(fr);for(;be=$n.nextNode();)Or(be,fr),Bi(be,fr),$r(be.content)&&Ds(be.content);ct&&ai(je,Ct)}catch($n){throw ct&&(T(je),en(je,Ct)),$n}finally{Ot=gn}if(ct){if(en(je,Ct))throw co("a node selected for removal could not be safely returned; refusing to sanitize in place");return Ve&&ls(je),je}if(ar){if(Ve&&ls(te),xi)for(nt=Se.call(te.ownerDocument);te.firstChild;)nt.appendChild(te.firstChild);else nt=te;return(et.shadowroot||et.shadowrootmode)&&(nt=qe.call(g,nt,!0)),nt}let dn=pt?te.outerHTML:te.innerHTML;return pt&&We["!doctype"]&&te.ownerDocument&&te.ownerDocument.doctype&&te.ownerDocument.doctype.name&&Sr(Lx,te.ownerDocument.doctype.name)&&(dn="<!DOCTYPE "+te.ownerDocument.doctype.name+`>
`+dn),Ve&&(dn=Rs(dn)),ie&&xt?K(dn):dn},u.setConfig=function(){let je=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};bi(je),mn=!0,Jn=We,Cr=et},u.clearConfig=function(){Er=null,mn=!1,Jn=null,Cr=null,ie=se,Te=""},u.isValidAttribute=function(je,O,te){Er||bi({});const xe=Bt(je),be=Bt(O);return typeof te=="string"&&(aa(O,te)||!at&&Sr(xf,te))?!1:Mn(xe,be,te)},u.addHook=function(je,O){typeof O=="function"&&ti(ke,je)&&Ju(ke[je],O)},u.removeHook=function(je,O){if(ti(ke,je)){if(O!==void 0){const te=dx(ke[je],O);return te===-1?void 0:hx(ke[je],te,1)[0]}return lf(ke[je])}},u.removeHooks=function(je){ti(ke,je)&&(ke[je]=[])},u.removeAllHooks=function(){ke=bf()},u}var Mx=Tm();function Dx(l,u=null){const p=String(l||""),g=p.split(`
`),y=g.findIndex(k=>/^##\s+(?:Practice|Solve)(?:\s*[:—-].*)?\s*$/i.test(k)),b=y===-1?-1:g.findIndex((k,E)=>E>y&&/^##\s+(?:Reflect(?:ion)?|Learn|Stop and think|Optional reading)(?:\b|\s*[:—-])/i.test(k)),_=y>=0?g.slice(y,b<0?g.length:b).join(`
`):`# Solve

${(u==null?void 0:u.challenge)||"Try the lesson task before looking at the guide."}`,C=y>=0?[...g.slice(0,y),...b<0?[]:g.slice(b)].join(`
`).trim():p;return{solve:_,learn:C}}function zx(l){const u=String(l||"").split(`
`),p=[];let g=null;u.forEach((_,C)=>{const k=_.trim(),E=/^(`{3,}|~{3,})/.exec(k);if(E){const V=E[1];g?g.char===V[0]&&V.length>=g.length&&(g=null):g={char:V[0],length:V.length};return}if(g)return;const N=/^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(_);if(!N)return;const I=N[2],R=/\bStep\s+\d+(?=\s*(?:[:.·–—-]|$))/i.test(I);p.push({index:C,level:N[1].length,numbered:R})});const y=p.filter(_=>_.numbered),b=(y.length?y:p.filter(_=>_.level===2)).map(_=>_.index);return b.length?{intro:u.slice(0,b[0]).join(`
`).trim(),steps:b.map((_,C)=>u.slice(_,b[C+1]??u.length).join(`
`).trim())}:{intro:u.join(`
`),steps:[]}}const Fx=Object.assign({"../content/capstone-discovery.md":Jy,"../content/capstone-feedback.md":Xy,"../content/capstone-interviews.md":Qy,"../content/capstone-prototype.md":Zy,"../content/csharp-conditionals.md":ev,"../content/csharp-variables.md":tv,"../content/python-decisions.md":nv,"../content/python-formatting.md":rv,"../content/python-lists.md":iv,"../content/python-loops.md":sv,"../content/python-strings.md":ov,"../content/python-variables.md":av,"../content/react-components.md":lv,"../content/react-state.md":uv,"../content/tsi-equations.md":cv,"../content/tsi-percents.md":dv,"../content/tsi-ratios.md":pv,"../content/tsi-slope.md":hv,"../content/uil-arrays.md":fv,"../content/uil-loops.md":mv,"../content/uil-methods.md":gv,"../content/uil-strings.md":yv,"../content/unity-colliders.md":vv,"../content/unity-player-controller.md":xv,"../content/unity-score.md":bv,"../content/web-events.md":wv,"../content/web-layout.md":kv}),Wx="# Add a Markdown lesson\n\nSave a new `.md` file inside `src/content/`.\n",Hx=l=>Fx[`../content/${l}.md`]||Wx,rc=l=>Mx.sanitize(Vt.parse(l,{breaks:!1,gfm:!0}));function Bx(l,u=""){if(!(l!=null&&l.isPublished))return"";let p="";const g=Array.isArray(l.cases)?l.cases:[];g.length&&!/##\s+(?:Published )?Examples\b/i.test(u)&&(p+=`

### Published examples
`,g.forEach((b,_)=>{p+=`
**Example `+(_+1)+`**

`,b.call&&(p+="Input: `"+b.call+`\`

`),p+=l.mode==="function"?`Expected return:
`:`Expected output:
`,p+="\n```text\n"+String(b.expected??"")+"\n```\n"}));const y=Array.isArray(l.hints)?l.hints:[];return y.length&&!/<details(?:\s|>)/i.test(u)&&(p+=`

### Need a hint?
`,y.forEach((b,_)=>{p+=`
<details>
<summary>Hint `+(_+1)+`</summary>

`+String(b).replaceAll("<","&lt;")+`

</details>
`})),p}function wf(l,u){if(!u)return l;const p="https://github.com/mswhitby/computer-science-1/blob/main/units/",g=u.startsWith("/playground/data/")?new URL(u,"https://www.mswhitby.com"):new URL(u,p);return String(l).replace(/\]\(([^)]+)\)/g,(y,b)=>{if(/^(?:https?:|mailto:|#|data:)/i.test(b))return y;const[_,...C]=b.split(" ");try{const k=new URL(_,g);return k.origin!==g.origin?y:"]("+k.href+(C.length?" "+C.join(" "):"")+")"}catch{return y}})}const wh={markdown:l=>`designlab:md:${l}`,code:l=>`designlab:code:${l}`};function Ld(l){try{return localStorage.getItem(l)}catch{return null}}function ho(l,u){try{localStorage.setItem(l,u)}catch{}}function Ux(l){try{localStorage.removeItem(l)}catch{}}function kf({lessonId:l,task:u,isTsi:p=!1,tsiAnswer:g=null}){var q;const y=(u==null?void 0:u.markdownSource)||Hx(l),b=wh.markdown(l),[_,C]=Ce.useState(y),[k,E]=Ce.useState(p?"learn":"solve"),[N,I]=Ce.useState(0),[R,V]=Ce.useState(!1);Ce.useEffect(()=>{C(Ld(b)??y),E(p?"learn":"solve"),I(0),V(!1)},[b,y,p]);const ee=Ce.useMemo(()=>{const Y=Dx(_,u),he=Y.solve+Bx(u,Y.solve);return{solve:wf(he,(u==null?void 0:u.markdownUrl)||(u==null?void 0:u.markdown)),learn:wf(Y.learn,(u==null?void 0:u.markdownUrl)||(u==null?void 0:u.markdown))}},[_,u]),H=Ce.useMemo(()=>zx(ee.learn),[ee.learn]),oe=!p&&k==="learn"&&H.steps.length>0,D=Math.min(N,Math.max(0,H.steps.length-1)),W=p?ee.learn:k==="solve"?ee.solve:oe?H.intro+`

`+H.steps[D]:ee.learn,F=Ce.useMemo(()=>rc(W),[W]);return c.jsxs("section",{className:"instructions-pane",children:[c.jsxs("div",{className:"pane-header",children:[p?c.jsx("strong",{className:"tsi-learn-title",children:"Learn"}):c.jsxs("div",{className:"tabs compact",role:"tablist","aria-label":"Lesson views",children:[c.jsx("button",{role:"tab","aria-selected":k==="solve",className:k==="solve"?"active":"",onClick:()=>{E("solve"),I(0)},children:"Solve"}),c.jsx("button",{role:"tab","aria-selected":k==="learn",className:k==="learn"?"active":"",onClick:()=>{E("learn"),I(0)},children:"Learn"})]}),c.jsx("button",{type:"button",className:po("icon-button",R&&"active"),title:"Edit lesson text","aria-label":"Edit lesson text",onClick:()=>V(!R),children:c.jsx(Sy,{size:16})})]}),R?c.jsxs("div",{className:"markdown-source",children:[c.jsx("p",{className:"hint",children:"Try editing these instructions. Changes here are just for your preview."}),c.jsx("textarea",{"aria-label":"Markdown source",value:_,onChange:Y=>{C(Y.target.value),I(0),ho(b,Y.target.value)}}),c.jsx("button",{type:"button",className:"btn",onClick:()=>{Ux(b),C(y),I(0)},children:"Reset lesson text"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"markdown-preview",role:"tabpanel",children:[c.jsx("div",{dangerouslySetInnerHTML:{__html:F}}),p&&g&&c.jsxs("section",{className:"tsi-worked-solution",role:"status",children:[c.jsx("h3",{children:g.correct?"Why that works":"Review the solution"}),c.jsx("p",{children:(q=dh[l])==null?void 0:q.explanation})]})]}),oe&&c.jsxs("nav",{className:"lesson-step-controls","aria-label":"Learning steps",children:[D>0&&c.jsxs("button",{type:"button",className:"step-link previous",onClick:()=>I(Y=>Math.max(0,Y-1)),children:[c.jsx(Id,{size:16,"aria-hidden":"true"})," Previous"]}),c.jsxs("span",{children:["Step ",D+1," of ",H.steps.length]}),D<H.steps.length-1&&c.jsxs("button",{type:"button",className:"step-link next",onClick:()=>I(Y=>Math.min(H.steps.length-1,Y+1)),children:["Next ",c.jsx(ni,{size:16,"aria-hidden":"true"})]})]})]})]})}var xd={exports:{}},qx=xd.exports,Sf;function os(){return Sf||(Sf=1,(function(l,u){(function(p,g){l.exports=g()})(qx,(function(){var p=navigator.userAgent,g=navigator.platform,y=/gecko\/\d/i.test(p),b=/MSIE \d/.test(p),_=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(p),C=/Edge\/(\d+)/.exec(p),k=b||_||C,E=k&&(b?document.documentMode||6:+(C||_)[1]),N=!C&&/WebKit\//.test(p),I=N&&/Qt\/\d+\.\d+/.test(p),R=!C&&/Chrome\/(\d+)/.exec(p),V=R&&+R[1],ee=/Opera\//.test(p),H=/Apple Computer/.test(navigator.vendor),oe=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(p),D=/PhantomJS/.test(p),W=H&&(/Mobile\/\w+/.test(p)||navigator.maxTouchPoints>2),F=/Android/.test(p),q=W||F||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(p),Y=W||/Mac/.test(g),he=/\bCrOS\b/.test(p),le=/win/i.test(g),we=ee&&p.match(/Version\/(\d*\.\d*)/);we&&(we=Number(we[1])),we&&we>=15&&(ee=!1,N=!0);var He=Y&&(I||ee&&(we==null||we<12.11)),Ne=y||k&&E>=9;function ie(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var Te=function(e,n){var s=e.className,i=ie(n).exec(s);if(i){var o=s.slice(i.index+i[0].length);e.className=s.slice(0,i.index)+(o?i[1]+o:"")}};function se(e){for(var n=e.childNodes.length;n>0;--n)e.removeChild(e.firstChild);return e}function ye(e,n){return se(e).appendChild(n)}function L(e,n,s,i){var o=document.createElement(e);if(s&&(o.className=s),i&&(o.style.cssText=i),typeof n=="string")o.appendChild(document.createTextNode(n));else if(n)for(var h=0;h<n.length;++h)o.appendChild(n[h]);return o}function J(e,n,s,i){var o=L(e,n,s,i);return o.setAttribute("role","presentation"),o}var K;document.createRange?K=function(e,n,s,i){var o=document.createRange();return o.setEnd(i||e,s),o.setStart(e,n),o}:K=function(e,n,s){var i=document.body.createTextRange();try{i.moveToElementText(e.parentNode)}catch{return i}return i.collapse(!0),i.moveEnd("character",s),i.moveStart("character",n),i};function j(e,n){if(n.nodeType==3&&(n=n.parentNode),e.contains)return e.contains(n);do if(n.nodeType==11&&(n=n.host),n==e)return!0;while(n=n.parentNode)}function A(e){var n=e.ownerDocument||e,s;try{s=e.activeElement}catch{s=n.body||null}for(;s&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function G(e,n){var s=e.className;ie(n).test(s)||(e.className+=(s?" ":"")+n)}function M(e,n){for(var s=e.split(" "),i=0;i<s.length;i++)s[i]&&!ie(s[i]).test(n)&&(n+=" "+s[i]);return n}var Q=function(e){e.select()};W?Q=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:k&&(Q=function(e){try{e.select()}catch{}});function Se(e){return e.display.wrapper.ownerDocument}function De(e){return qe(e.display.wrapper)}function qe(e){return e.getRootNode?e.getRootNode():e.ownerDocument}function ke(e){return Se(e).defaultView}function Ie(e){var n=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,n)}}function Ue(e,n,s){n||(n={});for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s!==!1||!Object.prototype.hasOwnProperty.call(n,i))&&(n[i]=e[i]);return n}function Ke(e,n,s,i,o){n==null&&(n=e.search(/[^\s\u00a0]/),n==-1&&(n=e.length));for(var h=i||0,m=o||0;;){var x=e.indexOf("	",h);if(x<0||x>=n)return m+(n-h);m+=x-h,m+=s-m%s,h=x+1}}var tt=function(){this.id=null,this.f=null,this.time=0,this.handler=Ie(this.onTimeout,this)};tt.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},tt.prototype.set=function(e,n){this.f=n;var s=+new Date+e;(!this.id||s<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=s)};function $e(e,n){for(var s=0;s<e.length;++s)if(e[s]==n)return s;return-1}var Ht=50,Gt={toString:function(){return"CodeMirror.Pass"}},_t={scroll:!1},vt={origin:"*mouse"},We={origin:"+move"};function rt(e,n,s){for(var i=0,o=0;;){var h=e.indexOf("	",i);h==-1&&(h=e.length);var m=h-i;if(h==e.length||o+m>=n)return i+Math.min(m,n-o);if(o+=h-i,o+=s-o%s,i=h+1,o>=n)return i}}var et=[""];function Kt(e){for(;et.length<=e;)et.push(Ge(et)+" ");return et[e]}function Ge(e){return e[e.length-1]}function ht(e,n){for(var s=[],i=0;i<e.length;i++)s[i]=n(e[i],i);return s}function ae(e,n,s){for(var i=0,o=s(n);i<e.length&&s(e[i])<=o;)i++;e.splice(i,0,n)}function _e(){}function ge(e,n){var s;return Object.create?s=Object.create(e):(_e.prototype=e,s=new _e),n&&Ue(n,s),s}var wt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function Je(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||wt.test(e))}function at(e,n){return n?n.source.indexOf("\\w")>-1&&Je(e)?!0:n.test(e):Je(e)}function Ve(e){for(var n in e)if(e.hasOwnProperty(n)&&e[n])return!1;return!0}var yt=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function pt(e){return e.charCodeAt(0)>=768&&yt.test(e)}function mn(e,n,s){for(;(s<0?n>0:n<e.length)&&pt(e.charAt(n));)n+=s;return n}function Jn(e,n,s){for(var i=n>s?-1:1;;){if(n==s)return n;var o=(n+s)/2,h=i<0?Math.ceil(o):Math.floor(o);if(h==n)return e(h)?n:s;e(h)?s=h:n=h+i}}function Cr(e,n,s,i){if(!e)return i(n,s,"ltr",0);for(var o=!1,h=0;h<e.length;++h){var m=e[h];(m.from<s&&m.to>n||n==s&&m.to==n)&&(i(Math.max(m.from,n),Math.min(m.to,s),m.level==1?"rtl":"ltr",h),o=!0)}o||i(n,s,"ltr")}var Hr=null;function ar(e,n,s){var i;Hr=null;for(var o=0;o<e.length;++o){var h=e[o];if(h.from<n&&h.to>n)return o;h.to==n&&(h.from!=h.to&&s=="before"?i=o:Hr=o),h.from==n&&(h.from!=h.to&&s!="before"?i=o:Hr=o)}return i??Hr}var xi=(function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function s(S){return S<=247?e.charAt(S):1424<=S&&S<=1524?"R":1536<=S&&S<=1785?n.charAt(S-1536):1774<=S&&S<=2220?"r":8192<=S&&S<=8203?"w":S==8204?"b":"L"}var i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,h=/[LRr]/,m=/[Lb1n]/,x=/[1n]/;function w(S,z,U){this.level=S,this.from=z,this.to=U}return function(S,z){var U=z=="ltr"?"L":"R";if(S.length==0||z=="ltr"&&!i.test(S))return!1;for(var re=S.length,Z=[],me=0;me<re;++me)Z.push(s(S.charCodeAt(me)));for(var ve=0,Ae=U;ve<re;++ve){var Le=Z[ve];Le=="m"?Z[ve]=Ae:Ae=Le}for(var ze=0,Me=U;ze<re;++ze){var Ye=Z[ze];Ye=="1"&&Me=="r"?Z[ze]="n":h.test(Ye)&&(Me=Ye,Ye=="r"&&(Z[ze]="R"))}for(var lt=1,Xe=Z[0];lt<re-1;++lt){var kt=Z[lt];kt=="+"&&Xe=="1"&&Z[lt+1]=="1"?Z[lt]="1":kt==","&&Xe==Z[lt+1]&&(Xe=="1"||Xe=="n")&&(Z[lt]=Xe),Xe=kt}for(var jt=0;jt<re;++jt){var Bn=Z[jt];if(Bn==",")Z[jt]="N";else if(Bn=="%"){var rn=void 0;for(rn=jt+1;rn<re&&Z[rn]=="%";++rn);for(var xr=jt&&Z[jt-1]=="!"||rn<re&&Z[rn]=="1"?"1":"N",rr=jt;rr<rn;++rr)Z[rr]=xr;jt=rn-1}}for(var vn=0,br=U;vn<re;++vn){var jn=Z[vn];br=="L"&&jn=="1"?Z[vn]="L":h.test(jn)&&(br=jn)}for(var xn=0;xn<re;++xn)if(o.test(Z[xn])){var zt=void 0;for(zt=xn+1;zt<re&&o.test(Z[zt]);++zt);for(var dt=(xn?Z[xn-1]:U)=="L",Ft=(zt<re?Z[zt]:U)=="L",sn=dt==Ft?dt?"L":"R":U,ln=xn;ln<zt;++ln)Z[ln]=sn;xn=zt-1}for(var $t=[],wr,Nt=0;Nt<re;)if(m.test(Z[Nt])){var ao=Nt;for(++Nt;Nt<re&&m.test(Z[Nt]);++Nt);$t.push(new w(0,ao,Nt))}else{var kr=Nt,Oi=$t.length,ts=z=="rtl"?1:0;for(++Nt;Nt<re&&Z[Nt]!="L";++Nt);for(var An=kr;An<Nt;)if(x.test(Z[An])){kr<An&&($t.splice(Oi,0,new w(1,kr,An)),Oi+=ts);var Un=An;for(++An;An<Nt&&x.test(Z[An]);++An);$t.splice(Oi,0,new w(2,Un,An)),Oi+=ts,kr=An}else++An;kr<Nt&&$t.splice(Oi,0,new w(1,kr,Nt))}return z=="ltr"&&($t[0].level==1&&(wr=S.match(/^\s+/))&&($t[0].from=wr[0].length,$t.unshift(new w(0,0,wr[0].length))),Ge($t).level==1&&(wr=S.match(/\s+$/))&&(Ge($t).to-=wr[0].length,$t.push(new w(0,re-wr[0].length,re)))),z=="rtl"?$t.reverse():$t}})();function xt(e,n){var s=e.order;return s==null&&(s=e.order=xi(e.text,n)),s}var zi=[],it=function(e,n,s){if(e.addEventListener)e.addEventListener(n,s,!1);else if(e.attachEvent)e.attachEvent("on"+n,s);else{var i=e._handlers||(e._handlers={});i[n]=(i[n]||zi).concat(s)}};function Tr(e,n){return e._handlers&&e._handlers[n]||zi}function Jt(e,n,s){if(e.removeEventListener)e.removeEventListener(n,s,!1);else if(e.detachEvent)e.detachEvent("on"+n,s);else{var i=e._handlers,o=i&&i[n];if(o){var h=$e(o,s);h>-1&&(i[n]=o.slice(0,h).concat(o.slice(h+1)))}}}function It(e,n){var s=Tr(e,n);if(s.length)for(var i=Array.prototype.slice.call(arguments,2),o=0;o<s.length;++o)s[o].apply(null,i)}function Ot(e,n,s){return typeof n=="string"&&(n={type:n,preventDefault:function(){this.defaultPrevented=!0}}),It(e,s||n.type,e,n),In(n)||n.codemirrorIgnore}function Nn(e){var n=e._handlers&&e._handlers.cursorActivity;if(n)for(var s=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),i=0;i<n.length;++i)$e(s,n[i])==-1&&s.push(n[i])}function cn(e,n){return Tr(e,n).length>0}function lr(e){e.prototype.on=function(n,s){it(this,n,s)},e.prototype.off=function(n,s){Jt(this,n,s)}}function wn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ri(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function In(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==!1}function ur(e){wn(e),ri(e)}function Br(e){return e.target||e.srcElement}function En(e){var n=e.which;return n==null&&(e.button&1?n=1:e.button&2?n=3:e.button&4&&(n=2)),Y&&e.ctrlKey&&n==1&&(n=3),n}var jr=(function(){if(k&&E<9)return!1;var e=L("div");return"draggable"in e||"dragDrop"in e})(),Xn;function ii(e){if(Xn==null){var n=L("span","​");ye(e,L("span",[n,document.createTextNode("x")])),e.firstChild.offsetHeight!=0&&(Xn=n.offsetWidth<=1&&n.offsetHeight>2&&!(k&&E<8))}var s=Xn?L("span","​"):L("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return s.setAttribute("cm-text",""),s}var Ur;function qr(e){if(Ur!=null)return Ur;var n=ye(e,document.createTextNode("AخA")),s=K(n,0,1).getBoundingClientRect(),i=K(n,1,2).getBoundingClientRect();return se(e),!s||s.left==s.right?!1:Ur=i.right-s.right<3}var cr=`

b`.split(/\n/).length!=3?function(e){for(var n=0,s=[],i=e.length;n<=i;){var o=e.indexOf(`
`,n);o==-1&&(o=e.length);var h=e.slice(n,e.charAt(o-1)=="\r"?o-1:o),m=h.indexOf("\r");m!=-1?(s.push(h.slice(0,m)),n+=m+1):(s.push(h),n=o+1)}return s}:function(e){return e.split(/\r\n?|\n/)},Kr=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch{return!1}}:function(e){var n;try{n=e.ownerDocument.selection.createRange()}catch{}return!n||n.parentElement()!=e?!1:n.compareEndPoints("StartToEnd",n)!=0},As=(function(){var e=L("div");return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),typeof e.oncopy=="function")})(),kn=null;function vo(e){if(kn!=null)return kn;var n=ye(e,L("span","x")),s=n.getBoundingClientRect(),i=K(n,0,1).getBoundingClientRect();return kn=Math.abs(s.left-i.left)>1}var Rr={},Ir={};function Nr(e,n){arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),Rr[e]=n}function Bt(e,n){Ir[e]=n}function Er(e){if(typeof e=="string"&&Ir.hasOwnProperty(e))e=Ir[e];else if(e&&typeof e.name=="string"&&Ir.hasOwnProperty(e.name)){var n=Ir[e.name];typeof n=="string"&&(n={name:n}),e=ge(n,e),e.name=n.name}else{if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Er("application/xml");if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Er("application/json")}return typeof e=="string"?{name:e}:e||{name:"null"}}function Fi(e,n){n=Er(n);var s=Rr[n.name];if(!s)return Fi(e,"text/plain");var i=s(e,n);if(si.hasOwnProperty(n.name)){var o=si[n.name];for(var h in o)o.hasOwnProperty(h)&&(i.hasOwnProperty(h)&&(i["_"+h]=i[h]),i[h]=o[h])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var m in n.modeProps)i[m]=n.modeProps[m];return i}var si={};function bi(e,n){var s=si.hasOwnProperty(e)?si[e]:si[e]={};Ue(n,s)}function At(e,n){if(n===!0)return n;if(e.copyState)return e.copyState(n);var s={};for(var i in n){var o=n[i];o instanceof Array&&(o=o.concat([])),s[i]=o}return s}function as(e,n){for(var s;e.innerMode&&(s=e.innerMode(n),!(!s||s.mode==e));)n=s.state,e=s.mode;return s||{mode:e,state:n}}function wi(e,n,s){return e.startState?e.startState(n,s):!0}var Xt=function(e,n,s){this.pos=this.start=0,this.string=e,this.tabSize=n||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=s};Xt.prototype.eol=function(){return this.pos>=this.string.length},Xt.prototype.sol=function(){return this.pos==this.lineStart},Xt.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Xt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Xt.prototype.eat=function(e){var n=this.string.charAt(this.pos),s;if(typeof e=="string"?s=n==e:s=n&&(e.test?e.test(n):e(n)),s)return++this.pos,n},Xt.prototype.eatWhile=function(e){for(var n=this.pos;this.eat(e););return this.pos>n},Xt.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Xt.prototype.skipToEnd=function(){this.pos=this.string.length},Xt.prototype.skipTo=function(e){var n=this.string.indexOf(e,this.pos);if(n>-1)return this.pos=n,!0},Xt.prototype.backUp=function(e){this.pos-=e},Xt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Ke(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Ke(this.string,this.lineStart,this.tabSize):0)},Xt.prototype.indentation=function(){return Ke(this.string,null,this.tabSize)-(this.lineStart?Ke(this.string,this.lineStart,this.tabSize):0)},Xt.prototype.match=function(e,n,s){if(typeof e=="string"){var i=function(m){return s?m.toLowerCase():m},o=this.string.substr(this.pos,e.length);if(i(o)==i(e))return n!==!1&&(this.pos+=e.length),!0}else{var h=this.string.slice(this.pos).match(e);return h&&h.index>0?null:(h&&n!==!1&&(this.pos+=h[0].length),h)}},Xt.prototype.current=function(){return this.string.slice(this.start,this.pos)},Xt.prototype.hideFirstChars=function(e,n){this.lineStart+=e;try{return n()}finally{this.lineStart-=e}},Xt.prototype.lookAhead=function(e){var n=this.lineOracle;return n&&n.lookAhead(e)},Xt.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};function Qe(e,n){if(n-=e.first,n<0||n>=e.size)throw new Error("There is no line "+(n+e.first)+" in the document.");for(var s=e;!s.lines;)for(var i=0;;++i){var o=s.children[i],h=o.chunkSize();if(n<h){s=o;break}n-=h}return s.lines[n]}function oi(e,n,s){var i=[],o=n.line;return e.iter(n.line,s.line+1,function(h){var m=h.text;o==s.line&&(m=m.slice(0,s.ch)),o==n.line&&(m=m.slice(n.ch)),i.push(m),++o}),i}function dr(e,n,s){var i=[];return e.iter(n,s,function(o){i.push(o.text)}),i}function On(e,n){var s=n-e.height;if(s)for(var i=e;i;i=i.parent)i.height+=s}function T(e){if(e.parent==null)return null;for(var n=e.parent,s=$e(n.lines,e),i=n.parent;i;n=i,i=i.parent)for(var o=0;i.children[o]!=n;++o)s+=i.children[o].chunkSize();return s+n.first}function B(e,n){var s=e.first;e:do{for(var i=0;i<e.children.length;++i){var o=e.children[i],h=o.height;if(n<h){e=o;continue e}n-=h,s+=o.chunkSize()}return s}while(!e.lines);for(var m=0;m<e.lines.length;++m){var x=e.lines[m],w=x.height;if(n<w)break;n-=w}return s+m}function fe(e,n){return n>=e.first&&n<e.first+e.size}function Ee(e,n){return String(e.lineNumberFormatter(n+e.firstLineNumber))}function de(e,n,s){if(s===void 0&&(s=null),!(this instanceof de))return new de(e,n,s);this.line=e,this.ch=n,this.sticky=s}function Be(e,n){return e.line-n.line||e.ch-n.ch}function Tt(e,n){return e.sticky==n.sticky&&Be(e,n)==0}function en(e){return de(e.line,e.ch)}function Sn(e,n){return Be(e,n)<0?n:e}function ai(e,n){return Be(e,n)<0?e:n}function Za(e,n){return Math.max(e.first,Math.min(n,e.first+e.size-1))}function gt(e,n){if(n.line<e.first)return de(e.first,0);var s=e.first+e.size-1;return n.line>s?de(s,Qe(e,s).text.length):xo(n,Qe(e,n.line).text.length)}function xo(e,n){var s=e.ch;return s==null||s>n?de(e.line,n):s<0?de(e.line,0):e}function sa(e,n){for(var s=[],i=0;i<n.length;i++)s[i]=gt(e,n[i]);return s}var Wi=function(e,n){this.state=e,this.lookAhead=n},Kn=function(e,n,s,i){this.state=n,this.doc=e,this.line=s,this.maxLookAhead=i||0,this.baseTokens=null,this.baseTokenPos=1};Kn.prototype.lookAhead=function(e){var n=this.doc.getLine(this.line+e);return n!=null&&e>this.maxLookAhead&&(this.maxLookAhead=e),n},Kn.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var n=this.baseTokens[this.baseTokenPos+1];return{type:n&&n.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},Kn.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},Kn.fromSaved=function(e,n,s){return n instanceof Wi?new Kn(e,At(e.mode,n.state),s,n.lookAhead):new Kn(e,At(e.mode,n),s)},Kn.prototype.save=function(e){var n=e!==!1?At(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new Wi(n,this.maxLookAhead):n};function Rs(e,n,s,i){var o=[e.state.modeGen],h={};bo(e,n.text,e.doc.mode,s,function(S,z){return o.push(S,z)},h,i);for(var m=s.state,x=function(S){s.baseTokens=o;var z=e.state.overlays[S],U=1,re=0;s.state=!0,bo(e,n.text,z.mode,s,function(Z,me){for(var ve=U;re<Z;){var Ae=o[U];Ae>Z&&o.splice(U,1,Z,o[U+1],Ae),U+=2,re=Math.min(Z,Ae)}if(me)if(z.opaque)o.splice(ve,U-ve,Z,"overlay "+me),U=ve+2;else for(;ve<U;ve+=2){var Le=o[ve+1];o[ve+1]=(Le?Le+" ":"")+"overlay "+me}},h),s.state=m,s.baseTokens=null,s.baseTokenPos=1},w=0;w<e.state.overlays.length;++w)x(w);return{styles:o,classes:h.bgClass||h.textClass?h:null}}function ls(e,n,s){if(!n.styles||n.styles[0]!=e.state.modeGen){var i=Et(e,T(n)),o=n.text.length>e.options.maxHighlightLength&&At(e.doc.mode,i.state),h=Rs(e,n,i);o&&(i.state=o),n.stateAfter=i.save(!o),n.styles=h.styles,h.classes?n.styleClasses=h.classes:n.styleClasses&&(n.styleClasses=null),s===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return n.styles}function Et(e,n,s){var i=e.doc,o=e.display;if(!i.mode.startState)return new Kn(i,!0,n);var h=Is(e,n,s),m=h>i.first&&Qe(i,h-1).stateAfter,x=m?Kn.fromSaved(i,m,h):new Kn(i,wi(i.mode),h);return i.iter(h,n,function(w){Hi(e,w.text,x);var S=x.line;w.stateAfter=S==n-1||S%5==0||S>=o.viewFrom&&S<o.viewTo?x.save():null,x.nextLine()}),s&&(i.modeFrontier=x.line),x}function Hi(e,n,s,i){var o=e.doc.mode,h=new Xt(n,e.options.tabSize,s);for(h.start=h.pos=i||0,n==""&&$r(o,s.state);!h.eol();)li(o,h,s.state),h.start=h.pos}function $r(e,n){if(e.blankLine)return e.blankLine(n);if(e.innerMode){var s=as(e,n);if(s.mode.blankLine)return s.mode.blankLine(s.state)}}function li(e,n,s,i){for(var o=0;o<10;o++){i&&(i[0]=as(e,s).mode);var h=e.token(n,s);if(n.pos>n.start)return h}throw new Error("Mode "+e.name+" failed to advance stream.")}var pr=function(e,n,s){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=n||null,this.state=s};function oa(e,n,s,i){var o=e.doc,h=o.mode,m;n=gt(o,n);var x=Qe(o,n.line),w=Et(e,n.line,s),S=new Xt(x.text,e.options.tabSize,w),z;for(i&&(z=[]);(i||S.pos<n.ch)&&!S.eol();)S.start=S.pos,m=li(h,S,w.state),i&&z.push(new pr(S,m,At(o.mode,w.state)));return i?z:new pr(S,m,w.state)}function us(e,n){if(e)for(;;){var s=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!s)break;e=e.slice(0,s.index)+e.slice(s.index+s[0].length);var i=s[1]?"bgClass":"textClass";n[i]==null?n[i]=s[2]:new RegExp("(?:^|\\s)"+s[2]+"(?:$|\\s)").test(n[i])||(n[i]+=" "+s[2])}return e}function bo(e,n,s,i,o,h,m){var x=s.flattenSpans;x==null&&(x=e.options.flattenSpans);var w=0,S=null,z=new Xt(n,e.options.tabSize,i),U,re=e.options.addModeClass&&[null];for(n==""&&us($r(s,i.state),h);!z.eol();){if(z.pos>e.options.maxHighlightLength?(x=!1,m&&Hi(e,n,i,z.pos),z.pos=n.length,U=null):U=us(li(s,z,i.state,re),h),re){var Z=re[0].name;Z&&(U="m-"+(U?Z+" "+U:Z))}if(!x||S!=U){for(;w<z.start;)w=Math.min(z.start,w+5e3),o(w,S);S=U}z.start=z.pos}for(;w<z.pos;){var me=Math.min(z.pos,w+5e3);o(me,S),w=me}}function Is(e,n,s){for(var i,o,h=e.doc,m=s?-1:n-(e.doc.mode.innerMode?1e3:100),x=n;x>m;--x){if(x<=h.first)return h.first;var w=Qe(h,x-1),S=w.stateAfter;if(S&&(!s||x+(S instanceof Wi?S.lookAhead:0)<=h.modeFrontier))return x;var z=Ke(w.text,null,e.options.tabSize);(o==null||i>z)&&(o=x-1,i=z)}return o}function hr(e,n){if(e.modeFrontier=Math.min(e.modeFrontier,n),!(e.highlightFrontier<n-10)){for(var s=e.first,i=n-1;i>s;i--){var o=Qe(e,i).stateAfter;if(o&&(!(o instanceof Wi)||i+o.lookAhead<n)){s=i+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,s)}}var Or=!1,Mn=!1;function Os(){Or=!0}function cs(){Mn=!0}function Mr(e,n,s){this.marker=e,this.from=n,this.to=s}function Ms(e,n){if(e)for(var s=0;s<e.length;++s){var i=e[s];if(i.marker==n)return i}}function aa(e,n){for(var s,i=0;i<e.length;++i)e[i]!=n&&(s||(s=[])).push(e[i]);return s}function Bi(e,n,s){var i=s&&window.WeakSet&&(s.markedSpans||(s.markedSpans=new WeakSet));i&&e.markedSpans&&i.has(e.markedSpans)?e.markedSpans.push(n):(e.markedSpans=e.markedSpans?e.markedSpans.concat([n]):[n],i&&i.add(e.markedSpans)),n.marker.attachLine(e)}function Ds(e,n,s){var i;if(e)for(var o=0;o<e.length;++o){var h=e[o],m=h.marker,x=h.from==null||(m.inclusiveLeft?h.from<=n:h.from<n);if(x||h.from==n&&m.type=="bookmark"&&(!s||!h.marker.insertLeft)){var w=h.to==null||(m.inclusiveRight?h.to>=n:h.to>n);(i||(i=[])).push(new Mr(m,h.from,w?null:h.to))}}return i}function wo(e,n,s){var i;if(e)for(var o=0;o<e.length;++o){var h=e[o],m=h.marker,x=h.to==null||(m.inclusiveRight?h.to>=n:h.to>n);if(x||h.from==n&&m.type=="bookmark"&&(!s||h.marker.insertLeft)){var w=h.from==null||(m.inclusiveLeft?h.from<=n:h.from<n);(i||(i=[])).push(new Mr(m,w?null:h.from-n,h.to==null?null:h.to-n))}}return i}function je(e,n){if(n.full)return null;var s=fe(e,n.from.line)&&Qe(e,n.from.line).markedSpans,i=fe(e,n.to.line)&&Qe(e,n.to.line).markedSpans;if(!s&&!i)return null;var o=n.from.ch,h=n.to.ch,m=Be(n.from,n.to)==0,x=Ds(s,o,m),w=wo(i,h,m),S=n.text.length==1,z=Ge(n.text).length+(S?o:0);if(x)for(var U=0;U<x.length;++U){var re=x[U];if(re.to==null){var Z=Ms(w,re.marker);Z?S&&(re.to=Z.to==null?null:Z.to+z):re.to=o}}if(w)for(var me=0;me<w.length;++me){var ve=w[me];if(ve.to!=null&&(ve.to+=z),ve.from==null){var Ae=Ms(x,ve.marker);Ae||(ve.from=z,S&&(x||(x=[])).push(ve))}else ve.from+=z,S&&(x||(x=[])).push(ve)}x&&(x=O(x)),w&&w!=x&&(w=O(w));var Le=[x];if(!S){var ze=n.text.length-2,Me;if(ze>0&&x)for(var Ye=0;Ye<x.length;++Ye)x[Ye].to==null&&(Me||(Me=[])).push(new Mr(x[Ye].marker,null,null));for(var lt=0;lt<ze;++lt)Le.push(Me);Le.push(w)}return Le}function O(e){for(var n=0;n<e.length;++n){var s=e[n];s.from!=null&&s.from==s.to&&s.marker.clearWhenEmpty!==!1&&e.splice(n--,1)}return e.length?e:null}function te(e,n,s){var i=null;if(e.iter(n.line,s.line+1,function(Z){if(Z.markedSpans)for(var me=0;me<Z.markedSpans.length;++me){var ve=Z.markedSpans[me].marker;ve.readOnly&&(!i||$e(i,ve)==-1)&&(i||(i=[])).push(ve)}}),!i)return null;for(var o=[{from:n,to:s}],h=0;h<i.length;++h)for(var m=i[h],x=m.find(0),w=0;w<o.length;++w){var S=o[w];if(!(Be(S.to,x.from)<0||Be(S.from,x.to)>0)){var z=[w,1],U=Be(S.from,x.from),re=Be(S.to,x.to);(U<0||!m.inclusiveLeft&&!U)&&z.push({from:S.from,to:x.from}),(re>0||!m.inclusiveRight&&!re)&&z.push({from:x.to,to:S.to}),o.splice.apply(o,z),w+=z.length-3}}return o}function xe(e){var n=e.markedSpans;if(n){for(var s=0;s<n.length;++s)n[s].marker.detachLine(e);e.markedSpans=null}}function be(e,n){if(n){for(var s=0;s<n.length;++s)n[s].marker.attachLine(e);e.markedSpans=n}}function nt(e){return e.inclusiveLeft?-1:0}function ct(e){return e.inclusiveRight?1:0}function Ct(e,n){var s=e.lines.length-n.lines.length;if(s!=0)return s;var i=e.find(),o=n.find(),h=Be(i.from,o.from)||nt(e)-nt(n);if(h)return-h;var m=Be(i.to,o.to)||ct(e)-ct(n);return m||n.id-e.id}function gn(e,n){var s=Mn&&e.markedSpans,i;if(s)for(var o=void 0,h=0;h<s.length;++h)o=s[h],o.marker.collapsed&&(n?o.from:o.to)==null&&(!i||Ct(i,o.marker)<0)&&(i=o.marker);return i}function fr(e){return gn(e,!0)}function dn(e){return gn(e,!1)}function $n(e,n){var s=Mn&&e.markedSpans,i;if(s)for(var o=0;o<s.length;++o){var h=s[o];h.marker.collapsed&&(h.from==null||h.from<n)&&(h.to==null||h.to>n)&&(!i||Ct(i,h.marker)<0)&&(i=h.marker)}return i}function ki(e,n,s,i,o){var h=Qe(e,n),m=Mn&&h.markedSpans;if(m)for(var x=0;x<m.length;++x){var w=m[x];if(w.marker.collapsed){var S=w.marker.find(0),z=Be(S.from,s)||nt(w.marker)-nt(o),U=Be(S.to,i)||ct(w.marker)-ct(o);if(!(z>=0&&U<=0||z<=0&&U>=0)&&(z<=0&&(w.marker.inclusiveRight&&o.inclusiveLeft?Be(S.to,s)>=0:Be(S.to,s)>0)||z>=0&&(w.marker.inclusiveRight&&o.inclusiveLeft?Be(S.from,i)<=0:Be(S.from,i)<0)))return!0}}}function Rt(e){for(var n;n=fr(e);)e=n.find(-1,!0).line;return e}function ko(e){for(var n;n=dn(e);)e=n.find(1,!0).line;return e}function el(e){for(var n,s;n=dn(e);)e=n.find(1,!0).line,(s||(s=[])).push(e);return s}function tl(e,n){var s=Qe(e,n),i=Rt(s);return s==i?n:T(i)}function la(e,n){if(n>e.lastLine())return n;var s=Qe(e,n),i;if(!ui(e,s))return n;for(;i=dn(s);)s=i.find(1,!0).line;return T(s)+1}function ui(e,n){var s=Mn&&n.markedSpans;if(s){for(var i=void 0,o=0;o<s.length;++o)if(i=s[o],!!i.marker.collapsed){if(i.from==null)return!0;if(!i.marker.widgetNode&&i.from==0&&i.marker.inclusiveLeft&&nl(e,n,i))return!0}}}function nl(e,n,s){if(s.to==null){var i=s.marker.find(1,!0);return nl(e,i.line,Ms(i.line.markedSpans,s.marker))}if(s.marker.inclusiveRight&&s.to==n.text.length)return!0;for(var o=void 0,h=0;h<n.markedSpans.length;++h)if(o=n.markedSpans[h],o.marker.collapsed&&!o.marker.widgetNode&&o.from==s.to&&(o.to==null||o.to!=s.from)&&(o.marker.inclusiveLeft||s.marker.inclusiveRight)&&nl(e,n,o))return!0}function _n(e){e=Rt(e);for(var n=0,s=e.parent,i=0;i<s.lines.length;++i){var o=s.lines[i];if(o==e)break;n+=o.height}for(var h=s.parent;h;s=h,h=s.parent)for(var m=0;m<h.children.length;++m){var x=h.children[m];if(x==s)break;n+=x.height}return n}function Ui(e){if(e.height==0)return 0;for(var n=e.text.length,s,i=e;s=fr(i);){var o=s.find(0,!0);i=o.from.line,n+=o.from.ch-o.to.ch}for(i=e;s=dn(i);){var h=s.find(0,!0);n-=i.text.length-h.from.ch,i=h.to.line,n+=i.text.length-h.to.ch}return n}function ua(e){var n=e.display,s=e.doc;n.maxLine=Qe(s,s.first),n.maxLineLength=Ui(n.maxLine),n.maxLineChanged=!0,s.iter(function(i){var o=Ui(i);o>n.maxLineLength&&(n.maxLineLength=o,n.maxLine=i)})}var Si=function(e,n,s){this.text=e,be(this,n),this.height=s?s(this):1};Si.prototype.lineNo=function(){return T(this)},lr(Si);function Hd(e,n,s,i){e.text=n,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),e.order!=null&&(e.order=null),xe(e),be(e,s);var o=i?i(e):1;o!=e.height&&On(e,o)}function Jl(e){e.parent=null,xe(e)}var Xl={},ca={};function da(e,n){if(!e||/^\s*$/.test(e))return null;var s=n.addModeClass?ca:Xl;return s[e]||(s[e]=e.replace(/\S+/g,"cm-$&"))}function Ql(e,n){var s=J("span",null,null,N?"padding-right: .1px":null),i={pre:J("pre",[s],"CodeMirror-line"),content:s,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};n.measure={};for(var o=0;o<=(n.rest?n.rest.length:0);o++){var h=o?n.rest[o-1]:n.line,m=void 0;i.pos=0,i.addToken=Ud,qr(e.display.measure)&&(m=xt(h,e.doc.direction))&&(i.addToken=Zl(i.addToken,m)),i.map=[];var x=n!=e.display.externalMeasured&&T(h);Kd(h,i,ls(e,h,x)),h.styleClasses&&(h.styleClasses.bgClass&&(i.bgClass=M(h.styleClasses.bgClass,i.bgClass||"")),h.styleClasses.textClass&&(i.textClass=M(h.styleClasses.textClass,i.textClass||""))),i.map.length==0&&i.map.push(0,0,i.content.appendChild(ii(e.display.measure))),o==0?(n.measure.map=i.map,n.measure.cache={}):((n.measure.maps||(n.measure.maps=[])).push(i.map),(n.measure.caches||(n.measure.caches=[])).push({}))}if(N){var w=i.content.lastChild;(/\bcm-tab\b/.test(w.className)||w.querySelector&&w.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return It(e,"renderLine",e,n.line,i.pre),i.pre.className&&(i.textClass=M(i.pre.className,i.textClass||"")),i}function Bd(e){var n=L("span","•","cm-invalidchar");return n.title="\\u"+e.charCodeAt(0).toString(16),n.setAttribute("aria-label",n.title),n}function Ud(e,n,s,i,o,h,m){if(n){var x=e.splitSpaces?qd(n,e.trailingSpace):n,w=e.cm.state.specialChars,S=!1,z;if(!w.test(n))e.col+=n.length,z=document.createTextNode(x),e.map.push(e.pos,e.pos+n.length,z),k&&E<9&&(S=!0),e.pos+=n.length;else{z=document.createDocumentFragment();for(var U=0;;){w.lastIndex=U;var re=w.exec(n),Z=re?re.index-U:n.length-U;if(Z){var me=document.createTextNode(x.slice(U,U+Z));k&&E<9?z.appendChild(L("span",[me])):z.appendChild(me),e.map.push(e.pos,e.pos+Z,me),e.col+=Z,e.pos+=Z}if(!re)break;U+=Z+1;var ve=void 0;if(re[0]=="	"){var Ae=e.cm.options.tabSize,Le=Ae-e.col%Ae;ve=z.appendChild(L("span",Kt(Le),"cm-tab")),ve.setAttribute("role","presentation"),ve.setAttribute("cm-text","	"),e.col+=Le}else re[0]=="\r"||re[0]==`
`?(ve=z.appendChild(L("span",re[0]=="\r"?"␍":"␤","cm-invalidchar")),ve.setAttribute("cm-text",re[0]),e.col+=1):(ve=e.cm.options.specialCharPlaceholder(re[0]),ve.setAttribute("cm-text",re[0]),k&&E<9?z.appendChild(L("span",[ve])):z.appendChild(ve),e.col+=1);e.map.push(e.pos,e.pos+1,ve),e.pos++}}if(e.trailingSpace=x.charCodeAt(n.length-1)==32,s||i||o||S||h||m){var ze=s||"";i&&(ze+=i),o&&(ze+=o);var Me=L("span",[z],ze,h);if(m)for(var Ye in m)m.hasOwnProperty(Ye)&&Ye!="style"&&Ye!="class"&&Me.setAttribute(Ye,m[Ye]);return e.content.appendChild(Me)}e.content.appendChild(z)}}function qd(e,n){if(e.length>1&&!/  /.test(e))return e;for(var s=n,i="",o=0;o<e.length;o++){var h=e.charAt(o);h==" "&&s&&(o==e.length-1||e.charCodeAt(o+1)==32)&&(h=" "),i+=h,s=h==" "}return i}function Zl(e,n){return function(s,i,o,h,m,x,w){o=o?o+" cm-force-border":"cm-force-border";for(var S=s.pos,z=S+i.length;;){for(var U=void 0,re=0;re<n.length&&(U=n[re],!(U.to>S&&U.from<=S));re++);if(U.to>=z)return e(s,i,o,h,m,x,w);e(s,i.slice(0,U.to-S),o,h,null,x,w),h=null,i=i.slice(U.to-S),S=U.to}}}function pc(e,n,s,i){var o=!i&&s.widgetNode;o&&e.map.push(e.pos,e.pos+n,o),!i&&e.cm.display.input.needsContentAttribute&&(o||(o=e.content.appendChild(document.createElement("span"))),o.setAttribute("cm-marker",s.id)),o&&(e.cm.display.input.setUneditable(o),e.content.appendChild(o)),e.pos+=n,e.trailingSpace=!1}function Kd(e,n,s){var i=e.markedSpans,o=e.text,h=0;if(!i){for(var m=1;m<s.length;m+=2)n.addToken(n,o.slice(h,h=s[m]),da(s[m+1],n.cm.options));return}for(var x=o.length,w=0,S=1,z="",U,re,Z=0,me,ve,Ae,Le,ze;;){if(Z==w){me=ve=Ae=re="",ze=null,Le=null,Z=1/0;for(var Me=[],Ye=void 0,lt=0;lt<i.length;++lt){var Xe=i[lt],kt=Xe.marker;if(kt.type=="bookmark"&&Xe.from==w&&kt.widgetNode)Me.push(kt);else if(Xe.from<=w&&(Xe.to==null||Xe.to>w||kt.collapsed&&Xe.to==w&&Xe.from==w)){if(Xe.to!=null&&Xe.to!=w&&Z>Xe.to&&(Z=Xe.to,ve=""),kt.className&&(me+=" "+kt.className),kt.css&&(re=(re?re+";":"")+kt.css),kt.startStyle&&Xe.from==w&&(Ae+=" "+kt.startStyle),kt.endStyle&&Xe.to==Z&&(Ye||(Ye=[])).push(kt.endStyle,Xe.to),kt.title&&((ze||(ze={})).title=kt.title),kt.attributes)for(var jt in kt.attributes)(ze||(ze={}))[jt]=kt.attributes[jt];kt.collapsed&&(!Le||Ct(Le.marker,kt)<0)&&(Le=Xe)}else Xe.from>w&&Z>Xe.from&&(Z=Xe.from)}if(Ye)for(var Bn=0;Bn<Ye.length;Bn+=2)Ye[Bn+1]==Z&&(ve+=" "+Ye[Bn]);if(!Le||Le.from==w)for(var rn=0;rn<Me.length;++rn)pc(n,0,Me[rn]);if(Le&&(Le.from||0)==w){if(pc(n,(Le.to==null?x+1:Le.to)-w,Le.marker,Le.from==null),Le.to==null)return;Le.to==w&&(Le=!1)}}if(w>=x)break;for(var xr=Math.min(x,Z);;){if(z){var rr=w+z.length;if(!Le){var vn=rr>xr?z.slice(0,xr-w):z;n.addToken(n,vn,U?U+me:me,Ae,w+vn.length==Z?ve:"",re,ze)}if(rr>=xr){z=z.slice(xr-w),w=xr;break}w=rr,Ae=""}z=o.slice(h,h=s[S++]),U=da(s[S++],n.cm.options)}}}function hc(e,n,s){this.line=n,this.rest=el(n),this.size=this.rest?T(Ge(this.rest))-s+1:1,this.node=this.text=null,this.hidden=ui(e,n)}function rl(e,n,s){for(var i=[],o,h=n;h<s;h=o){var m=new hc(e.doc,Qe(e.doc,h),h);o=h+m.size,i.push(m)}return i}var So=null;function fc(e){So?So.ops.push(e):e.ownsGroup=So={ops:[e],delayedCallbacks:[]}}function $d(e){var n=e.delayedCallbacks,s=0;do{for(;s<n.length;s++)n[s].call(null);for(var i=0;i<e.ops.length;i++){var o=e.ops[i];if(o.cursorActivityHandlers)for(;o.cursorActivityCalled<o.cursorActivityHandlers.length;)o.cursorActivityHandlers[o.cursorActivityCalled++].call(null,o.cm)}}while(s<n.length)}function Gd(e,n){var s=e.ownsGroup;if(s)try{$d(s)}finally{So=null,n(s)}}var pa=null;function Dn(e,n){var s=Tr(e,n);if(s.length){var i=Array.prototype.slice.call(arguments,2),o;So?o=So.delayedCallbacks:pa?o=pa:(o=pa=[],setTimeout(eu,0));for(var h=function(x){o.push(function(){return s[x].apply(null,i)})},m=0;m<s.length;++m)h(m)}}function eu(){var e=pa;pa=null;for(var n=0;n<e.length;++n)e[n]()}function mc(e,n,s,i){for(var o=0;o<n.changes.length;o++){var h=n.changes[o];h=="text"?Vd(e,n):h=="gutter"?gc(e,n,s,i):h=="class"?nu(e,n):h=="widget"&&Jd(e,n,i)}n.changes=null}function ha(e){return e.node==e.text&&(e.node=L("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),k&&E<8&&(e.node.style.zIndex=2)),e.node}function Yd(e,n){var s=n.bgClass?n.bgClass+" "+(n.line.bgClass||""):n.line.bgClass;if(s&&(s+=" CodeMirror-linebackground"),n.background)s?n.background.className=s:(n.background.parentNode.removeChild(n.background),n.background=null);else if(s){var i=ha(n);n.background=i.insertBefore(L("div",null,s),i.firstChild),e.display.input.setUneditable(n.background)}}function tu(e,n){var s=e.display.externalMeasured;return s&&s.line==n.line?(e.display.externalMeasured=null,n.measure=s.measure,s.built):Ql(e,n)}function Vd(e,n){var s=n.text.className,i=tu(e,n);n.text==n.node&&(n.node=i.pre),n.text.parentNode.replaceChild(i.pre,n.text),n.text=i.pre,i.bgClass!=n.bgClass||i.textClass!=n.textClass?(n.bgClass=i.bgClass,n.textClass=i.textClass,nu(e,n)):s&&(n.text.className=s)}function nu(e,n){Yd(e,n),n.line.wrapClass?ha(n).className=n.line.wrapClass:n.node!=n.text&&(n.node.className="");var s=n.textClass?n.textClass+" "+(n.line.textClass||""):n.line.textClass;n.text.className=s||""}function gc(e,n,s,i){if(n.gutter&&(n.node.removeChild(n.gutter),n.gutter=null),n.gutterBackground&&(n.node.removeChild(n.gutterBackground),n.gutterBackground=null),n.line.gutterClass){var o=ha(n);n.gutterBackground=L("div",null,"CodeMirror-gutter-background "+n.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(n.gutterBackground),o.insertBefore(n.gutterBackground,n.text)}var h=n.line.gutterMarkers;if(e.options.lineNumbers||h){var m=ha(n),x=n.gutter=L("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(x.setAttribute("aria-hidden","true"),e.display.input.setUneditable(x),m.insertBefore(x,n.text),n.line.gutterClass&&(x.className+=" "+n.line.gutterClass),e.options.lineNumbers&&(!h||!h["CodeMirror-linenumbers"])&&(n.lineNumber=x.appendChild(L("div",Ee(e.options,s),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),h)for(var w=0;w<e.display.gutterSpecs.length;++w){var S=e.display.gutterSpecs[w].className,z=h.hasOwnProperty(S)&&h[S];z&&x.appendChild(L("div",[z],"CodeMirror-gutter-elt","left: "+i.gutterLeft[S]+"px; width: "+i.gutterWidth[S]+"px"))}}}function Jd(e,n,s){n.alignable&&(n.alignable=null);for(var i=ie("CodeMirror-linewidget"),o=n.node.firstChild,h=void 0;o;o=h)h=o.nextSibling,i.test(o.className)&&n.node.removeChild(o);yc(e,n,s)}function Xd(e,n,s,i){var o=tu(e,n);return n.text=n.node=o.pre,o.bgClass&&(n.bgClass=o.bgClass),o.textClass&&(n.textClass=o.textClass),nu(e,n),gc(e,n,s,i),yc(e,n,i),n.node}function yc(e,n,s){if(vc(e,n.line,n,s,!0),n.rest)for(var i=0;i<n.rest.length;i++)vc(e,n.rest[i],n,s,!1)}function vc(e,n,s,i,o){if(n.widgets)for(var h=ha(s),m=0,x=n.widgets;m<x.length;++m){var w=x[m],S=L("div",[w.node],"CodeMirror-linewidget"+(w.className?" "+w.className:""));w.handleMouseEvents||S.setAttribute("cm-ignore-events","true"),ru(w,S,s,i),e.display.input.setUneditable(S),o&&w.above?h.insertBefore(S,s.gutter||s.text):h.appendChild(S),Dn(w,"redraw")}}function ru(e,n,s,i){if(e.noHScroll){(s.alignable||(s.alignable=[])).push(n);var o=i.wrapperWidth;n.style.left=i.fixedPos+"px",e.coverGutter||(o-=i.gutterTotalWidth,n.style.paddingLeft=i.gutterTotalWidth+"px"),n.style.width=o+"px"}e.coverGutter&&(n.style.zIndex=5,n.style.position="relative",e.noHScroll||(n.style.marginLeft=-i.gutterTotalWidth+"px"))}function qi(e){if(e.height!=null)return e.height;var n=e.doc.cm;if(!n)return 0;if(!j(document.body,e.node)){var s="position: relative;";e.coverGutter&&(s+="margin-left: -"+n.display.gutters.offsetWidth+"px;"),e.noHScroll&&(s+="width: "+n.display.wrapper.clientWidth+"px;"),ye(n.display.measure,L("div",[e.node],null,s))}return e.height=e.node.parentNode.offsetHeight}function Ki(e,n){for(var s=Br(n);s!=e.wrapper;s=s.parentNode)if(!s||s.nodeType==1&&s.getAttribute("cm-ignore-events")=="true"||s.parentNode==e.sizer&&s!=e.mover)return!0}function fa(e){return e.lineSpace.offsetTop}function il(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function iu(e){if(e.cachedPaddingH)return e.cachedPaddingH;var n=ye(e.measure,L("pre","x","CodeMirror-line-like")),s=window.getComputedStyle?window.getComputedStyle(n):n.currentStyle,i={left:parseInt(s.paddingLeft),right:parseInt(s.paddingRight)};return!isNaN(i.left)&&!isNaN(i.right)&&(e.cachedPaddingH=i),i}function ci(e){return Ht-e.display.nativeBarWidth}function ds(e){return e.display.scroller.clientWidth-ci(e)-e.display.barWidth}function ps(e){return e.display.scroller.clientHeight-ci(e)-e.display.barHeight}function Qd(e,n,s){var i=e.options.lineWrapping,o=i&&ds(e);if(!n.measure.heights||i&&n.measure.width!=o){var h=n.measure.heights=[];if(i){n.measure.width=o;for(var m=n.text.firstChild.getClientRects(),x=0;x<m.length-1;x++){var w=m[x],S=m[x+1];Math.abs(w.bottom-S.bottom)>2&&h.push((w.bottom+S.top)/2-s.top)}}h.push(s.bottom-s.top)}}function xc(e,n,s){if(e.line==n)return{map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var i=0;i<e.rest.length;i++)if(e.rest[i]==n)return{map:e.measure.maps[i],cache:e.measure.caches[i]};for(var o=0;o<e.rest.length;o++)if(T(e.rest[o])>s)return{map:e.measure.maps[o],cache:e.measure.caches[o],before:!0}}}function Zd(e,n){n=Rt(n);var s=T(n),i=e.display.externalMeasured=new hc(e.doc,n,s);i.lineN=s;var o=i.built=Ql(e,i);return i.text=o.pre,ye(e.display.lineMeasure,o.pre),i}function su(e,n,s,i){return Lr(e,_i(e,n),s,i)}function sl(e,n){if(n>=e.display.viewFrom&&n<e.display.viewTo)return e.display.view[Ti(e,n)];var s=e.display.externalMeasured;if(s&&n>=s.lineN&&n<s.lineN+s.size)return s}function _i(e,n){var s=T(n),i=sl(e,s);i&&!i.text?i=null:i&&i.changes&&(mc(e,i,s,dl(e)),e.curOp.forceUpdate=!0),i||(i=Zd(e,n));var o=xc(i,n,s);return{line:n,view:i,rect:null,map:o.map,cache:o.cache,before:o.before,hasHeights:!1}}function Lr(e,n,s,i,o){n.before&&(s=-1);var h=s+(i||""),m;return n.cache.hasOwnProperty(h)?m=n.cache[h]:(n.rect||(n.rect=n.view.text.getBoundingClientRect()),n.hasHeights||(Qd(e,n.view,n.rect),n.hasHeights=!0),m=wc(e,n,s,i),m.bogus||(n.cache[h]=m)),{left:m.left,right:m.right,top:o?m.rtop:m.top,bottom:o?m.rbottom:m.bottom}}var bc={left:0,right:0,top:0,bottom:0};function ma(e,n,s){for(var i,o,h,m,x,w,S=0;S<e.length;S+=3)if(x=e[S],w=e[S+1],n<x?(o=0,h=1,m="left"):n<w?(o=n-x,h=o+1):(S==e.length-3||n==w&&e[S+3]>n)&&(h=w-x,o=h-1,n>=w&&(m="right")),o!=null){if(i=e[S+2],x==w&&s==(i.insertLeft?"left":"right")&&(m=s),s=="left"&&o==0)for(;S&&e[S-2]==e[S-3]&&e[S-1].insertLeft;)i=e[(S-=3)+2],m="left";if(s=="right"&&o==w-x)for(;S<e.length-3&&e[S+3]==e[S+4]&&!e[S+5].insertLeft;)i=e[(S+=3)+2],m="right";break}return{node:i,start:o,end:h,collapse:m,coverStart:x,coverEnd:w}}function ep(e,n){var s=bc;if(n=="left")for(var i=0;i<e.length&&(s=e[i]).left==s.right;i++);else for(var o=e.length-1;o>=0&&(s=e[o]).left==s.right;o--);return s}function wc(e,n,s,i){var o=ma(n.map,s,i),h=o.node,m=o.start,x=o.end,w=o.collapse,S;if(h.nodeType==3){for(var z=0;z<4;z++){for(;m&&pt(n.line.text.charAt(o.coverStart+m));)--m;for(;o.coverStart+x<o.coverEnd&&pt(n.line.text.charAt(o.coverStart+x));)++x;if(k&&E<9&&m==0&&x==o.coverEnd-o.coverStart?S=h.parentNode.getBoundingClientRect():S=ep(K(h,m,x).getClientRects(),i),S.left||S.right||m==0)break;x=m,m=m-1,w="right"}k&&E<11&&(S=ou(e.display.measure,S))}else{m>0&&(w=i="right");var U;e.options.lineWrapping&&(U=h.getClientRects()).length>1?S=U[i=="right"?U.length-1:0]:S=h.getBoundingClientRect()}if(k&&E<9&&!m&&(!S||!S.left&&!S.right)){var re=h.parentNode.getClientRects()[0];re?S={left:re.left,right:re.left+hs(e.display),top:re.top,bottom:re.bottom}:S=bc}for(var Z=S.top-n.rect.top,me=S.bottom-n.rect.top,ve=(Z+me)/2,Ae=n.view.measure.heights,Le=0;Le<Ae.length-1&&!(ve<Ae[Le]);Le++);var ze=Le?Ae[Le-1]:0,Me=Ae[Le],Ye={left:(w=="right"?S.right:S.left)-n.rect.left,right:(w=="left"?S.left:S.right)-n.rect.left,top:ze,bottom:Me};return!S.left&&!S.right&&(Ye.bogus=!0),e.options.singleCursorHeightPerLine||(Ye.rtop=Z,Ye.rbottom=me),Ye}function ou(e,n){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!vo(e))return n;var s=screen.logicalXDPI/screen.deviceXDPI,i=screen.logicalYDPI/screen.deviceYDPI;return{left:n.left*s,right:n.right*s,top:n.top*i,bottom:n.bottom*i}}function ol(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var n=0;n<e.rest.length;n++)e.measure.caches[n]={}}function au(e){e.display.externalMeasure=null,se(e.display.lineMeasure);for(var n=0;n<e.display.view.length;n++)ol(e.display.view[n])}function _o(e){au(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function lu(e){return R&&F?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function kc(e){return R&&F?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function uu(e){var n=Rt(e),s=n.widgets,i=0;if(s)for(var o=0;o<s.length;++o)s[o].above&&(i+=qi(s[o]));return i}function al(e,n,s,i,o){if(!o){var h=uu(n);s.top+=h,s.bottom+=h}if(i=="line")return s;i||(i="local");var m=_n(n);if(i=="local"?m+=fa(e.display):m-=e.display.viewOffset,i=="page"||i=="window"){var x=e.display.lineSpace.getBoundingClientRect();m+=x.top+(i=="window"?0:kc(Se(e)));var w=x.left+(i=="window"?0:lu(Se(e)));s.left+=w,s.right+=w}return s.top+=m,s.bottom+=m,s}function Sc(e,n,s){if(s=="div")return n;var i=n.left,o=n.top;if(s=="page")i-=lu(Se(e)),o-=kc(Se(e));else if(s=="local"||!s){var h=e.display.sizer.getBoundingClientRect();i+=h.left,o+=h.top}var m=e.display.lineSpace.getBoundingClientRect();return{left:i-m.left,top:o-m.top}}function ll(e,n,s,i,o){return i||(i=Qe(e.doc,n.line)),al(e,i,su(e,i,n.ch,o),s)}function Cn(e,n,s,i,o,h){i=i||Qe(e.doc,n.line),o||(o=_i(e,i));function m(me,ve){var Ae=Lr(e,o,me,ve?"right":"left",h);return ve?Ae.left=Ae.right:Ae.right=Ae.left,al(e,i,Ae,s)}var x=xt(i,e.doc.direction),w=n.ch,S=n.sticky;if(w>=i.text.length?(w=i.text.length,S="before"):w<=0&&(w=0,S="after"),!x)return m(S=="before"?w-1:w,S=="before");function z(me,ve,Ae){var Le=x[ve],ze=Le.level==1;return m(Ae?me-1:me,ze!=Ae)}var U=ar(x,w,S),re=Hr,Z=z(w,U,S=="before");return re!=null&&(Z.other=z(w,re,S!="before")),Z}function Co(e,n){var s=0;n=gt(e.doc,n),e.options.lineWrapping||(s=hs(e.display)*n.ch);var i=Qe(e.doc,n.line),o=_n(i)+fa(e.display);return{left:s,right:s,top:o,bottom:o+i.height}}function ul(e,n,s,i,o){var h=de(e,n,s);return h.xRel=o,i&&(h.outside=i),h}function cl(e,n,s){var i=e.doc;if(s+=e.display.viewOffset,s<0)return ul(i.first,0,null,-1,-1);var o=B(i,s),h=i.first+i.size-1;if(o>h)return ul(i.first+i.size-1,Qe(i,h).text.length,null,1,1);n<0&&(n=0);for(var m=Qe(i,o);;){var x=tp(e,m,o,n,s),w=$n(m,x.ch+(x.xRel>0||x.outside>0?1:0));if(!w)return x;var S=w.find(1);if(S.line==o)return S;m=Qe(i,o=S.line)}}function cu(e,n,s,i){i-=uu(n);var o=n.text.length,h=Jn(function(m){return Lr(e,s,m-1).bottom<=i},o,0);return o=Jn(function(m){return Lr(e,s,m).top>i},h,o),{begin:h,end:o}}function du(e,n,s,i){s||(s=_i(e,n));var o=al(e,n,Lr(e,s,i),"line").top;return cu(e,n,s,o)}function ga(e,n,s,i){return e.bottom<=s?!1:e.top>s?!0:(i?e.left:e.right)>n}function tp(e,n,s,i,o){o-=_n(n);var h=_i(e,n),m=uu(n),x=0,w=n.text.length,S=!0,z=xt(n,e.doc.direction);if(z){var U=(e.options.lineWrapping?To:np)(e,n,s,h,z,i,o);S=U.level!=1,x=S?U.from:U.to-1,w=S?U.to:U.from-1}var re=null,Z=null,me=Jn(function(lt){var Xe=Lr(e,h,lt);return Xe.top+=m,Xe.bottom+=m,ga(Xe,i,o,!1)?(Xe.top<=o&&Xe.left<=i&&(re=lt,Z=Xe),!0):!1},x,w),ve,Ae,Le=!1;if(Z){var ze=i-Z.left<Z.right-i,Me=ze==S;me=re+(Me?0:1),Ae=Me?"after":"before",ve=ze?Z.left:Z.right}else{!S&&(me==w||me==x)&&me++,Ae=me==0?"after":me==n.text.length?"before":Lr(e,h,me-(S?1:0)).bottom+m<=o==S?"after":"before";var Ye=Cn(e,de(s,me,Ae),"line",n,h);ve=Ye.left,Le=o<Ye.top?-1:o>=Ye.bottom?1:0}return me=mn(n.text,me,1),ul(s,me,Ae,Le,i-ve)}function np(e,n,s,i,o,h,m){var x=Jn(function(U){var re=o[U],Z=re.level!=1;return ga(Cn(e,de(s,Z?re.to:re.from,Z?"before":"after"),"line",n,i),h,m,!0)},0,o.length-1),w=o[x];if(x>0){var S=w.level!=1,z=Cn(e,de(s,S?w.from:w.to,S?"after":"before"),"line",n,i);ga(z,h,m,!0)&&z.top>m&&(w=o[x-1])}return w}function To(e,n,s,i,o,h,m){var x=cu(e,n,i,m),w=x.begin,S=x.end;/\s/.test(n.text.charAt(S-1))&&S--;for(var z=null,U=null,re=0;re<o.length;re++){var Z=o[re];if(!(Z.from>=S||Z.to<=w)){var me=Z.level!=1,ve=Lr(e,i,me?Math.min(S,Z.to)-1:Math.max(w,Z.from)).right,Ae=ve<h?h-ve+1e9:ve-h;(!z||U>Ae)&&(z=Z,U=Ae)}}return z||(z=o[o.length-1]),z.from<w&&(z={from:w,to:z.to,level:z.level}),z.to>S&&(z={from:z.from,to:S,level:z.level}),z}var $i;function Ci(e){if(e.cachedTextHeight!=null)return e.cachedTextHeight;if($i==null){$i=L("pre",null,"CodeMirror-line-like");for(var n=0;n<49;++n)$i.appendChild(document.createTextNode("x")),$i.appendChild(L("br"));$i.appendChild(document.createTextNode("x"))}ye(e.measure,$i);var s=$i.offsetHeight/50;return s>3&&(e.cachedTextHeight=s),se(e.measure),s||1}function hs(e){if(e.cachedCharWidth!=null)return e.cachedCharWidth;var n=L("span","xxxxxxxxxx"),s=L("pre",[n],"CodeMirror-line-like");ye(e.measure,s);var i=n.getBoundingClientRect(),o=(i.right-i.left)/10;return o>2&&(e.cachedCharWidth=o),o||10}function dl(e){for(var n=e.display,s={},i={},o=n.gutters.clientLeft,h=n.gutters.firstChild,m=0;h;h=h.nextSibling,++m){var x=e.display.gutterSpecs[m].className;s[x]=h.offsetLeft+h.clientLeft+o,i[x]=h.clientWidth}return{fixedPos:jo(n),gutterTotalWidth:n.gutters.offsetWidth,gutterLeft:s,gutterWidth:i,wrapperWidth:n.wrapper.clientWidth}}function jo(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function zs(e){var n=Ci(e.display),s=e.options.lineWrapping,i=s&&Math.max(5,e.display.scroller.clientWidth/hs(e.display)-3);return function(o){if(ui(e.doc,o))return 0;var h=0;if(o.widgets)for(var m=0;m<o.widgets.length;m++)o.widgets[m].height&&(h+=o.widgets[m].height);return s?h+(Math.ceil(o.text.length/i)||1)*n:h+n}}function ya(e){var n=e.doc,s=zs(e);n.iter(function(i){var o=s(i);o!=i.height&&On(i,o)})}function fs(e,n,s,i){var o=e.display;if(!s&&Br(n).getAttribute("cm-not-content")=="true")return null;var h,m,x=o.lineSpace.getBoundingClientRect();try{h=n.clientX-x.left,m=n.clientY-x.top}catch{return null}var w=cl(e,h,m),S;if(i&&w.xRel>0&&(S=Qe(e.doc,w.line).text).length==w.ch){var z=Ke(S,S.length,e.options.tabSize)-S.length;w=de(w.line,Math.max(0,Math.round((h-iu(e.display).left)/hs(e.display))-z))}return w}function Ti(e,n){if(n>=e.display.viewTo||(n-=e.display.viewFrom,n<0))return null;for(var s=e.display.view,i=0;i<s.length;i++)if(n-=s[i].size,n<0)return i}function er(e,n,s,i){n==null&&(n=e.doc.first),s==null&&(s=e.doc.first+e.doc.size),i||(i=0);var o=e.display;if(i&&s<o.viewTo&&(o.updateLineNumbers==null||o.updateLineNumbers>n)&&(o.updateLineNumbers=n),e.curOp.viewChanged=!0,n>=o.viewTo)Mn&&tl(e.doc,n)<o.viewTo&&Yi(e);else if(s<=o.viewFrom)Mn&&la(e.doc,s+i)>o.viewFrom?Yi(e):(o.viewFrom+=i,o.viewTo+=i);else if(n<=o.viewFrom&&s>=o.viewTo)Yi(e);else if(n<=o.viewFrom){var h=va(e,s,s+i,1);h?(o.view=o.view.slice(h.index),o.viewFrom=h.lineN,o.viewTo+=i):Yi(e)}else if(s>=o.viewTo){var m=va(e,n,n,-1);m?(o.view=o.view.slice(0,m.index),o.viewTo=m.lineN):Yi(e)}else{var x=va(e,n,n,-1),w=va(e,s,s+i,1);x&&w?(o.view=o.view.slice(0,x.index).concat(rl(e,x.lineN,w.lineN)).concat(o.view.slice(w.index)),o.viewTo+=i):Yi(e)}var S=o.externalMeasured;S&&(s<S.lineN?S.lineN+=i:n<S.lineN+S.size&&(o.externalMeasured=null))}function Gi(e,n,s){e.curOp.viewChanged=!0;var i=e.display,o=e.display.externalMeasured;if(o&&n>=o.lineN&&n<o.lineN+o.size&&(i.externalMeasured=null),!(n<i.viewFrom||n>=i.viewTo)){var h=i.view[Ti(e,n)];if(h.node!=null){var m=h.changes||(h.changes=[]);$e(m,s)==-1&&m.push(s)}}}function Yi(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function va(e,n,s,i){var o=Ti(e,n),h,m=e.display.view;if(!Mn||s==e.doc.first+e.doc.size)return{index:o,lineN:s};for(var x=e.display.viewFrom,w=0;w<o;w++)x+=m[w].size;if(x!=n){if(i>0){if(o==m.length-1)return null;h=x+m[o].size-n,o++}else h=x-n;n+=h,s+=h}for(;tl(e.doc,s)!=s;){if(o==(i<0?0:m.length-1))return null;s+=i*m[o-(i<0?1:0)].size,o+=i}return{index:o,lineN:s}}function _c(e,n,s){var i=e.display,o=i.view;o.length==0||n>=i.viewTo||s<=i.viewFrom?(i.view=rl(e,n,s),i.viewFrom=n):(i.viewFrom>n?i.view=rl(e,n,i.viewFrom).concat(i.view):i.viewFrom<n&&(i.view=i.view.slice(Ti(e,n))),i.viewFrom=n,i.viewTo<s?i.view=i.view.concat(rl(e,i.viewTo,s)):i.viewTo>s&&(i.view=i.view.slice(0,Ti(e,s)))),i.viewTo=s}function pu(e){for(var n=e.display.view,s=0,i=0;i<n.length;i++){var o=n[i];!o.hidden&&(!o.node||o.changes)&&++s}return s}function Gr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function pl(e,n){n===void 0&&(n=!0);var s=e.doc,i={},o=i.cursors=document.createDocumentFragment(),h=i.selection=document.createDocumentFragment(),m=e.options.$customCursor;m&&(n=!0);for(var x=0;x<s.sel.ranges.length;x++)if(!(!n&&x==s.sel.primIndex)){var w=s.sel.ranges[x];if(!(w.from().line>=e.display.viewTo||w.to().line<e.display.viewFrom)){var S=w.empty();if(m){var z=m(e,w);z&&xa(e,z,o)}else(S||e.options.showCursorWhenSelecting)&&xa(e,w.head,o);S||rp(e,w,h)}}return i}function xa(e,n,s){var i=Cn(e,n,"div",null,null,!e.options.singleCursorHeightPerLine),o=s.appendChild(L("div"," ","CodeMirror-cursor"));if(o.style.left=i.left+"px",o.style.top=i.top+"px",o.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var h=ll(e,n,"div",null,null),m=h.right-h.left;o.style.width=(m>0?m:e.defaultCharWidth())+"px"}if(i.other){var x=s.appendChild(L("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));x.style.display="",x.style.left=i.other.left+"px",x.style.top=i.other.top+"px",x.style.height=(i.other.bottom-i.other.top)*.85+"px"}}function hl(e,n){return e.top-n.top||e.left-n.left}function rp(e,n,s){var i=e.display,o=e.doc,h=document.createDocumentFragment(),m=iu(e.display),x=m.left,w=Math.max(i.sizerWidth,ds(e)-i.sizer.offsetLeft)-m.right,S=o.direction=="ltr";function z(Me,Ye,lt,Xe){Ye<0&&(Ye=0),Ye=Math.round(Ye),Xe=Math.round(Xe),h.appendChild(L("div",null,"CodeMirror-selected","position: absolute; left: "+Me+`px;
                             top: `+Ye+"px; width: "+(lt??w-Me)+`px;
                             height: `+(Xe-Ye)+"px"))}function U(Me,Ye,lt){var Xe=Qe(o,Me),kt=Xe.text.length,jt,Bn;function rn(vn,br){return ll(e,de(Me,vn),"div",Xe,br)}function xr(vn,br,jn){var xn=du(e,Xe,null,vn),zt=br=="ltr"==(jn=="after")?"left":"right",dt=jn=="after"?xn.begin:xn.end-(/\s/.test(Xe.text.charAt(xn.end-1))?2:1);return rn(dt,zt)[zt]}var rr=xt(Xe,o.direction);return Cr(rr,Ye||0,lt??kt,function(vn,br,jn,xn){var zt=jn=="ltr",dt=rn(vn,zt?"left":"right"),Ft=rn(br-1,zt?"right":"left"),sn=Ye==null&&vn==0,ln=lt==null&&br==kt,$t=xn==0,wr=!rr||xn==rr.length-1;if(Ft.top-dt.top<=3){var Nt=(S?sn:ln)&&$t,ao=(S?ln:sn)&&wr,kr=Nt?x:(zt?dt:Ft).left,Oi=ao?w:(zt?Ft:dt).right;z(kr,dt.top,Oi-kr,dt.bottom)}else{var ts,An,Un,Ua;zt?(ts=S&&sn&&$t?x:dt.left,An=S?w:xr(vn,jn,"before"),Un=S?x:xr(br,jn,"after"),Ua=S&&ln&&wr?w:Ft.right):(ts=S?xr(vn,jn,"before"):x,An=!S&&sn&&$t?w:dt.right,Un=!S&&ln&&wr?x:Ft.left,Ua=S?xr(br,jn,"after"):w),z(ts,dt.top,An-ts,dt.bottom),dt.bottom<Ft.top&&z(x,dt.bottom,null,Ft.top),z(Un,Ft.top,Ua-Un,Ft.bottom)}(!jt||hl(dt,jt)<0)&&(jt=dt),hl(Ft,jt)<0&&(jt=Ft),(!Bn||hl(dt,Bn)<0)&&(Bn=dt),hl(Ft,Bn)<0&&(Bn=Ft)}),{start:jt,end:Bn}}var re=n.from(),Z=n.to();if(re.line==Z.line)U(re.line,re.ch,Z.ch);else{var me=Qe(o,re.line),ve=Qe(o,Z.line),Ae=Rt(me)==Rt(ve),Le=U(re.line,re.ch,Ae?me.text.length+1:null).end,ze=U(Z.line,Ae?0:null,Z.ch).start;Ae&&(Le.top<ze.top-2?(z(Le.right,Le.top,null,Le.bottom),z(x,ze.top,ze.left,ze.bottom)):z(Le.right,Le.top,ze.left-Le.right,Le.bottom)),Le.bottom<ze.top&&z(x,Le.bottom,null,ze.top)}s.appendChild(h)}function Fs(e){if(e.state.focused){var n=e.display;clearInterval(n.blinker);var s=!0;n.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?n.blinker=setInterval(function(){e.hasFocus()||Ut(e),n.cursorDiv.style.visibility=(s=!s)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(n.cursorDiv.style.visibility="hidden")}}function Cc(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||ml(e))}function fl(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Ut(e))},100)}function ml(e,n){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),e.options.readOnly!="nocursor"&&(e.state.focused||(It(e,"focus",e,n),e.state.focused=!0,G(e.display.wrapper,"CodeMirror-focused"),!e.curOp&&e.display.selForContextMenu!=e.doc.sel&&(e.display.input.reset(),N&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Fs(e))}function Ut(e,n){e.state.delayingBlurEvent||(e.state.focused&&(It(e,"blur",e,n),e.state.focused=!1,Te(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function No(e){for(var n=e.display,s=n.lineDiv.offsetTop,i=Math.max(0,n.scroller.getBoundingClientRect().top),o=n.lineDiv.getBoundingClientRect().top,h=0,m=0;m<n.view.length;m++){var x=n.view[m],w=e.options.lineWrapping,S=void 0,z=0;if(!x.hidden){if(o+=x.line.height,k&&E<8){var U=x.node.offsetTop+x.node.offsetHeight;S=U-s,s=U}else{var re=x.node.getBoundingClientRect();S=re.bottom-re.top,!w&&x.text.firstChild&&(z=x.text.firstChild.getBoundingClientRect().right-re.left-1)}var Z=x.line.height-S;if((Z>.005||Z<-.005)&&(o<i&&(h-=Z),On(x.line,S),ba(x.line),x.rest))for(var me=0;me<x.rest.length;me++)ba(x.rest[me]);if(z>e.display.sizerWidth){var ve=Math.ceil(z/hs(e.display));ve>e.display.maxLineLength&&(e.display.maxLineLength=ve,e.display.maxLine=x.line,e.display.maxLineChanged=!0)}}}Math.abs(h)>2&&(n.scroller.scrollTop+=h)}function ba(e){if(e.widgets)for(var n=0;n<e.widgets.length;++n){var s=e.widgets[n],i=s.node.parentNode;i&&(s.height=i.offsetHeight)}}function ms(e,n,s){var i=s&&s.top!=null?Math.max(0,s.top):e.scroller.scrollTop;i=Math.floor(i-fa(e));var o=s&&s.bottom!=null?s.bottom:i+e.wrapper.clientHeight,h=B(n,i),m=B(n,o);if(s&&s.ensure){var x=s.ensure.from.line,w=s.ensure.to.line;x<h?(h=x,m=B(n,_n(Qe(n,x))+e.wrapper.clientHeight)):Math.min(w,n.lastLine())>=m&&(h=B(n,_n(Qe(n,w))-e.wrapper.clientHeight),m=w)}return{from:h,to:Math.max(m,h+1)}}function Tc(e,n){if(!Ot(e,"scrollCursorIntoView")){var s=e.display,i=s.sizer.getBoundingClientRect(),o=null,h=s.wrapper.ownerDocument;if(n.top+i.top<0?o=!0:n.bottom+i.top>(h.defaultView.innerHeight||h.documentElement.clientHeight)&&(o=!1),o!=null&&!D){var m=L("div","​",null,`position: absolute;
                         top: `+(n.top-s.viewOffset-fa(e.display))+`px;
                         height: `+(n.bottom-n.top+ci(e)+s.barHeight)+`px;
                         left: `+n.left+"px; width: "+Math.max(2,n.right-n.left)+"px;");e.display.lineSpace.appendChild(m),m.scrollIntoView(o),e.display.lineSpace.removeChild(m)}}}function hu(e,n,s,i){i==null&&(i=0);var o;!e.options.lineWrapping&&n==s&&(s=n.sticky=="before"?de(n.line,n.ch+1,"before"):n,n=n.ch?de(n.line,n.sticky=="before"?n.ch-1:n.ch,"after"):n);for(var h=0;h<5;h++){var m=!1,x=Cn(e,n),w=!s||s==n?x:Cn(e,s);o={left:Math.min(x.left,w.left),top:Math.min(x.top,w.top)-i,right:Math.max(x.left,w.left),bottom:Math.max(x.bottom,w.bottom)+i};var S=Eo(e,o),z=e.doc.scrollTop,U=e.doc.scrollLeft;if(S.scrollTop!=null&&(ys(e,S.scrollTop),Math.abs(e.doc.scrollTop-z)>1&&(m=!0)),S.scrollLeft!=null&&(Vi(e,S.scrollLeft),Math.abs(e.doc.scrollLeft-U)>1&&(m=!0)),!m)break}return o}function wa(e,n){var s=Eo(e,n);s.scrollTop!=null&&ys(e,s.scrollTop),s.scrollLeft!=null&&Vi(e,s.scrollLeft)}function Eo(e,n){var s=e.display,i=Ci(e.display);n.top<0&&(n.top=0);var o=e.curOp&&e.curOp.scrollTop!=null?e.curOp.scrollTop:s.scroller.scrollTop,h=ps(e),m={};n.bottom-n.top>h&&(n.bottom=n.top+h);var x=e.doc.height+il(s),w=n.top<i,S=n.bottom>x-i;if(n.top<o)m.scrollTop=w?0:n.top;else if(n.bottom>o+h){var z=Math.min(n.top,(S?x:n.bottom)-h);z!=o&&(m.scrollTop=z)}var U=e.options.fixedGutter?0:s.gutters.offsetWidth,re=e.curOp&&e.curOp.scrollLeft!=null?e.curOp.scrollLeft:s.scroller.scrollLeft-U,Z=ds(e)-s.gutters.offsetWidth,me=n.right-n.left>Z;return me&&(n.right=n.left+Z),n.left<10?m.scrollLeft=0:n.left<re?m.scrollLeft=Math.max(0,n.left+U-(me?0:10)):n.right>Z+re-3&&(m.scrollLeft=n.right+(me?0:10)-Z),m}function gs(e,n){n!=null&&(Sa(e),e.curOp.scrollTop=(e.curOp.scrollTop==null?e.doc.scrollTop:e.curOp.scrollTop)+n)}function Ws(e){Sa(e);var n=e.getCursor();e.curOp.scrollToPos={from:n,to:n,margin:e.options.cursorScrollMargin}}function ka(e,n,s){(n!=null||s!=null)&&Sa(e),n!=null&&(e.curOp.scrollLeft=n),s!=null&&(e.curOp.scrollTop=s)}function ip(e,n){Sa(e),e.curOp.scrollToPos=n}function Sa(e){var n=e.curOp.scrollToPos;if(n){e.curOp.scrollToPos=null;var s=Co(e,n.from),i=Co(e,n.to);_a(e,s,i,n.margin)}}function _a(e,n,s,i){var o=Eo(e,{left:Math.min(n.left,s.left),top:Math.min(n.top,s.top)-i,right:Math.max(n.right,s.right),bottom:Math.max(n.bottom,s.bottom)+i});ka(e,o.scrollLeft,o.scrollTop)}function ys(e,n){Math.abs(e.doc.scrollTop-n)<2||(y||Qi(e,{top:n}),gl(e,n,!0),y&&Qi(e),Us(e,100))}function gl(e,n,s){n=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,n)),!(e.display.scroller.scrollTop==n&&!s)&&(e.doc.scrollTop=n,e.display.scrollbars.setScrollTop(n),e.display.scroller.scrollTop!=n&&(e.display.scroller.scrollTop=n))}function Vi(e,n,s,i){n=Math.max(0,Math.min(n,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),!((s?n==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-n)<2)&&!i)&&(e.doc.scrollLeft=n,mu(e),e.display.scroller.scrollLeft!=n&&(e.display.scroller.scrollLeft=n),e.display.scrollbars.setScrollLeft(n))}function Hs(e){var n=e.display,s=n.gutters.offsetWidth,i=Math.round(e.doc.height+il(e.display));return{clientHeight:n.scroller.clientHeight,viewHeight:n.wrapper.clientHeight,scrollWidth:n.scroller.scrollWidth,clientWidth:n.scroller.clientWidth,viewWidth:n.wrapper.clientWidth,barLeft:e.options.fixedGutter?s:0,docHeight:i,scrollHeight:i+ci(e)+n.barHeight,nativeBarWidth:n.nativeBarWidth,gutterWidth:s}}var Ji=function(e,n,s){this.cm=s;var i=this.vert=L("div",[L("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),o=this.horiz=L("div",[L("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=o.tabIndex=-1,e(i),e(o),it(i,"scroll",function(){i.clientHeight&&n(i.scrollTop,"vertical")}),it(o,"scroll",function(){o.clientWidth&&n(o.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,k&&E<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Ji.prototype.update=function(e){var n=e.scrollWidth>e.clientWidth+1,s=e.scrollHeight>e.clientHeight+1,i=e.nativeBarWidth;if(s){this.vert.style.display="block",this.vert.style.bottom=n?i+"px":"0";var o=e.viewHeight-(n?i:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+o)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(n){this.horiz.style.display="block",this.horiz.style.right=s?i+"px":"0",this.horiz.style.left=e.barLeft+"px";var h=e.viewWidth-e.barLeft-(s?i:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+h)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(i==0&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:s?i:0,bottom:n?i:0}},Ji.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Ji.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Ji.prototype.zeroWidthHack=function(){var e=Y&&!oe?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new tt,this.disableVert=new tt},Ji.prototype.enableZeroWidthBar=function(e,n,s){e.style.visibility="";function i(){var o=e.getBoundingClientRect(),h=s=="vert"?document.elementFromPoint(o.right-1,(o.top+o.bottom)/2):document.elementFromPoint((o.right+o.left)/2,o.bottom-1);h!=e?e.style.visibility="hidden":n.set(1e3,i)}n.set(1e3,i)},Ji.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var Ca=function(){};Ca.prototype.update=function(){return{bottom:0,right:0}},Ca.prototype.setScrollLeft=function(){},Ca.prototype.setScrollTop=function(){},Ca.prototype.clear=function(){};function Bs(e,n){n||(n=Hs(e));var s=e.display.barWidth,i=e.display.barHeight;jc(e,n);for(var o=0;o<4&&s!=e.display.barWidth||i!=e.display.barHeight;o++)s!=e.display.barWidth&&e.options.lineWrapping&&No(e),jc(e,Hs(e)),s=e.display.barWidth,i=e.display.barHeight}function jc(e,n){var s=e.display,i=s.scrollbars.update(n);s.sizer.style.paddingRight=(s.barWidth=i.right)+"px",s.sizer.style.paddingBottom=(s.barHeight=i.bottom)+"px",s.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(s.scrollbarFiller.style.display="block",s.scrollbarFiller.style.height=i.bottom+"px",s.scrollbarFiller.style.width=i.right+"px"):s.scrollbarFiller.style.display="",i.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(s.gutterFiller.style.display="block",s.gutterFiller.style.height=i.bottom+"px",s.gutterFiller.style.width=n.gutterWidth+"px"):s.gutterFiller.style.display=""}var Nc={native:Ji,null:Ca};function yl(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Te(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Nc[e.options.scrollbarStyle](function(n){e.display.wrapper.insertBefore(n,e.display.scrollbarFiller),it(n,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),n.setAttribute("cm-not-content","true")},function(n,s){s=="horizontal"?Vi(e,n):ys(e,n)},e),e.display.scrollbars.addClass&&G(e.display.wrapper,e.display.scrollbars.addClass)}var vs=0;function xs(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++vs,markArrays:null},fc(e.curOp)}function Yr(e){var n=e.curOp;n&&Gd(n,function(s){for(var i=0;i<s.ops.length;i++)s.ops[i].cm.curOp=null;ji(s)})}function ji(e){for(var n=e.ops,s=0;s<n.length;s++)Ta(n[s]);for(var i=0;i<n.length;i++)Xi(n[i]);for(var o=0;o<n.length;o++)fu(n[o]);for(var h=0;h<n.length;h++)sp(n[h]);for(var m=0;m<n.length;m++)op(n[m])}function Ta(e){var n=e.cm,s=n.display;tn(n),e.updateMaxLine&&ua(n),e.mustUpdate=e.viewChanged||e.forceUpdate||e.scrollTop!=null||e.scrollToPos&&(e.scrollToPos.from.line<s.viewFrom||e.scrollToPos.to.line>=s.viewTo)||s.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new di(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Xi(e){e.updatedDisplay=e.mustUpdate&&Gn(e.cm,e.update)}function fu(e){var n=e.cm,s=n.display;e.updatedDisplay&&No(n),e.barMeasure=Hs(n),s.maxLineChanged&&!n.options.lineWrapping&&(e.adjustWidthTo=su(n,s.maxLine,s.maxLine.text.length).left+3,n.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(s.scroller.clientWidth,s.sizer.offsetLeft+e.adjustWidthTo+ci(n)+n.display.barWidth),e.maxScrollLeft=Math.max(0,s.sizer.offsetLeft+e.adjustWidthTo-ds(n))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=s.input.prepareSelection())}function sp(e){var n=e.cm;e.adjustWidthTo!=null&&(n.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<n.doc.scrollLeft&&Vi(n,Math.min(n.display.scroller.scrollLeft,e.maxScrollLeft),!0),n.display.maxLineChanged=!1);var s=e.focus&&e.focus==A(De(n));e.preparedSelection&&n.display.input.showSelection(e.preparedSelection,s),(e.updatedDisplay||e.startHeight!=n.doc.height)&&Bs(n,e.barMeasure),e.updatedDisplay&&Ao(n,e.barMeasure),e.selectionChanged&&Fs(n),n.state.focused&&e.updateInput&&n.display.input.reset(e.typing),s&&Cc(e.cm)}function op(e){var n=e.cm,s=n.display,i=n.doc;if(e.updatedDisplay&&mr(n,e.update),s.wheelStartX!=null&&(e.scrollTop!=null||e.scrollLeft!=null||e.scrollToPos)&&(s.wheelStartX=s.wheelStartY=null),e.scrollTop!=null&&gl(n,e.scrollTop,e.forceScroll),e.scrollLeft!=null&&Vi(n,e.scrollLeft,!0,!0),e.scrollToPos){var o=hu(n,gt(i,e.scrollToPos.from),gt(i,e.scrollToPos.to),e.scrollToPos.margin);Tc(n,o)}var h=e.maybeHiddenMarkers,m=e.maybeUnhiddenMarkers;if(h)for(var x=0;x<h.length;++x)h[x].lines.length||It(h[x],"hide");if(m)for(var w=0;w<m.length;++w)m[w].lines.length&&It(m[w],"unhide");s.wrapper.offsetHeight&&(i.scrollTop=n.display.scroller.scrollTop),e.changeObjs&&It(n,"changes",n,e.changeObjs),e.update&&e.update.finish()}function Ln(e,n){if(e.curOp)return n();xs(e);try{return n()}finally{Yr(e)}}function pn(e,n){return function(){if(e.curOp)return n.apply(e,arguments);xs(e);try{return n.apply(e,arguments)}finally{Yr(e)}}}function Tn(e){return function(){if(this.curOp)return e.apply(this,arguments);xs(this);try{return e.apply(this,arguments)}finally{Yr(this)}}}function yn(e){return function(){var n=this.cm;if(!n||n.curOp)return e.apply(this,arguments);xs(n);try{return e.apply(this,arguments)}finally{Yr(n)}}}function Us(e,n){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(n,Ie(Lo,e))}function Lo(e){var n=e.doc;if(!(n.highlightFrontier>=e.display.viewTo)){var s=+new Date+e.options.workTime,i=Et(e,n.highlightFrontier),o=[];n.iter(i.line,Math.min(n.first+n.size,e.display.viewTo+500),function(h){if(i.line>=e.display.viewFrom){var m=h.styles,x=h.text.length>e.options.maxHighlightLength?At(n.mode,i.state):null,w=Rs(e,h,i,!0);x&&(i.state=x),h.styles=w.styles;var S=h.styleClasses,z=w.classes;z?h.styleClasses=z:S&&(h.styleClasses=null);for(var U=!m||m.length!=h.styles.length||S!=z&&(!S||!z||S.bgClass!=z.bgClass||S.textClass!=z.textClass),re=0;!U&&re<m.length;++re)U=m[re]!=h.styles[re];U&&o.push(i.line),h.stateAfter=i.save(),i.nextLine()}else h.text.length<=e.options.maxHighlightLength&&Hi(e,h.text,i),h.stateAfter=i.line%5==0?i.save():null,i.nextLine();if(+new Date>s)return Us(e,e.options.workDelay),!0}),n.highlightFrontier=i.line,n.modeFrontier=Math.max(n.modeFrontier,i.line),o.length&&Ln(e,function(){for(var h=0;h<o.length;h++)Gi(e,o[h],"text")})}}var di=function(e,n,s){var i=e.display;this.viewport=n,this.visible=ms(i,e.doc,n),this.editorIsHidden=!i.wrapper.offsetWidth,this.wrapperHeight=i.wrapper.clientHeight,this.wrapperWidth=i.wrapper.clientWidth,this.oldDisplayWidth=ds(e),this.force=s,this.dims=dl(e),this.events=[]};di.prototype.signal=function(e,n){cn(e,n)&&this.events.push(arguments)},di.prototype.finish=function(){for(var e=0;e<this.events.length;e++)It.apply(null,this.events[e])};function tn(e){var n=e.display;!n.scrollbarsClipped&&n.scroller.offsetWidth&&(n.nativeBarWidth=n.scroller.offsetWidth-n.scroller.clientWidth,n.heightForcer.style.height=ci(e)+"px",n.sizer.style.marginBottom=-n.nativeBarWidth+"px",n.sizer.style.borderRightWidth=ci(e)+"px",n.scrollbarsClipped=!0)}function Qt(e){if(e.hasFocus())return null;var n=A(De(e));if(!n||!j(e.display.lineDiv,n))return null;var s={activeElt:n};if(window.getSelection){var i=ke(e).getSelection();i.anchorNode&&i.extend&&j(e.display.lineDiv,i.anchorNode)&&(s.anchorNode=i.anchorNode,s.anchorOffset=i.anchorOffset,s.focusNode=i.focusNode,s.focusOffset=i.focusOffset)}return s}function bs(e){if(!(!e||!e.activeElt||e.activeElt==A(qe(e.activeElt)))&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&j(document.body,e.anchorNode)&&j(document.body,e.focusNode))){var n=e.activeElt.ownerDocument,s=n.defaultView.getSelection(),i=n.createRange();i.setEnd(e.anchorNode,e.anchorOffset),i.collapse(!1),s.removeAllRanges(),s.addRange(i),s.extend(e.focusNode,e.focusOffset)}}function Gn(e,n){var s=e.display,i=e.doc;if(n.editorIsHidden)return Yi(e),!1;if(!n.force&&n.visible.from>=s.viewFrom&&n.visible.to<=s.viewTo&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo)&&s.renderedView==s.view&&pu(e)==0)return!1;gu(e)&&(Yi(e),n.dims=dl(e));var o=i.first+i.size,h=Math.max(n.visible.from-e.options.viewportMargin,i.first),m=Math.min(o,n.visible.to+e.options.viewportMargin);s.viewFrom<h&&h-s.viewFrom<20&&(h=Math.max(i.first,s.viewFrom)),s.viewTo>m&&s.viewTo-m<20&&(m=Math.min(o,s.viewTo)),Mn&&(h=tl(e.doc,h),m=la(e.doc,m));var x=h!=s.viewFrom||m!=s.viewTo||s.lastWrapHeight!=n.wrapperHeight||s.lastWrapWidth!=n.wrapperWidth;_c(e,h,m),s.viewOffset=_n(Qe(e.doc,s.viewFrom)),e.display.mover.style.top=s.viewOffset+"px";var w=pu(e);if(!x&&w==0&&!n.force&&s.renderedView==s.view&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo))return!1;var S=Qt(e);return w>4&&(s.lineDiv.style.display="none"),Po(e,s.updateLineNumbers,n.dims),w>4&&(s.lineDiv.style.display=""),s.renderedView=s.view,bs(S),se(s.cursorDiv),se(s.selectionDiv),s.gutters.style.height=s.sizer.style.minHeight=0,x&&(s.lastWrapHeight=n.wrapperHeight,s.lastWrapWidth=n.wrapperWidth,Us(e,400)),s.updateLineNumbers=null,!0}function mr(e,n){for(var s=n.viewport,i=!0;;i=!1){if(!i||!e.options.lineWrapping||n.oldDisplayWidth==ds(e)){if(s&&s.top!=null&&(s={top:Math.min(e.doc.height+il(e.display)-ps(e),s.top)}),n.visible=ms(e.display,e.doc,s),n.visible.from>=e.display.viewFrom&&n.visible.to<=e.display.viewTo)break}else i&&(n.visible=ms(e.display,e.doc,s));if(!Gn(e,n))break;No(e);var o=Hs(e);Gr(e),Bs(e,o),Ao(e,o),n.force=!1}n.signal(e,"update",e),(e.display.viewFrom!=e.display.reportedViewFrom||e.display.viewTo!=e.display.reportedViewTo)&&(n.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Qi(e,n){var s=new di(e,n);if(Gn(e,s)){No(e),mr(e,s);var i=Hs(e);Gr(e),Bs(e,i),Ao(e,i),s.finish()}}function Po(e,n,s){var i=e.display,o=e.options.lineNumbers,h=i.lineDiv,m=h.firstChild;function x(me){var ve=me.nextSibling;return N&&Y&&e.display.currentWheelTarget==me?me.style.display="none":me.parentNode.removeChild(me),ve}for(var w=i.view,S=i.viewFrom,z=0;z<w.length;z++){var U=w[z];if(!U.hidden)if(!U.node||U.node.parentNode!=h){var re=Xd(e,U,S,s);h.insertBefore(re,m)}else{for(;m!=U.node;)m=x(m);var Z=o&&n!=null&&n<=S&&U.lineNumber;U.changes&&($e(U.changes,"gutter")>-1&&(Z=!1),mc(e,U,S,s)),Z&&(se(U.lineNumber),U.lineNumber.appendChild(document.createTextNode(Ee(e.options,S)))),m=U.node.nextSibling}S+=U.size}for(;m;)m=x(m)}function tr(e){var n=e.gutters.offsetWidth;e.sizer.style.marginLeft=n+"px",Dn(e,"gutterChanged",e)}function Ao(e,n){e.display.sizer.style.minHeight=n.docHeight+"px",e.display.heightForcer.style.top=n.docHeight+"px",e.display.gutters.style.height=n.docHeight+e.display.barHeight+ci(e)+"px"}function mu(e){var n=e.display,s=n.view;if(!(!n.alignWidgets&&(!n.gutters.firstChild||!e.options.fixedGutter))){for(var i=jo(n)-n.scroller.scrollLeft+e.doc.scrollLeft,o=n.gutters.offsetWidth,h=i+"px",m=0;m<s.length;m++)if(!s[m].hidden){e.options.fixedGutter&&(s[m].gutter&&(s[m].gutter.style.left=h),s[m].gutterBackground&&(s[m].gutterBackground.style.left=h));var x=s[m].alignable;if(x)for(var w=0;w<x.length;w++)x[w].style.left=h}e.options.fixedGutter&&(n.gutters.style.left=i+o+"px")}}function gu(e){if(!e.options.lineNumbers)return!1;var n=e.doc,s=Ee(e.options,n.first+n.size-1),i=e.display;if(s.length!=i.lineNumChars){var o=i.measure.appendChild(L("div",[L("div",s)],"CodeMirror-linenumber CodeMirror-gutter-elt")),h=o.firstChild.offsetWidth,m=o.offsetWidth-h;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(h,i.lineGutter.offsetWidth-m)+1,i.lineNumWidth=i.lineNumInnerWidth+m,i.lineNumChars=i.lineNumInnerWidth?s.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",tr(e.display),!0}return!1}function Ro(e,n){for(var s=[],i=!1,o=0;o<e.length;o++){var h=e[o],m=null;if(typeof h!="string"&&(m=h.style,h=h.className),h=="CodeMirror-linenumbers")if(n)i=!0;else continue;s.push({className:h,style:m})}return n&&!i&&s.push({className:"CodeMirror-linenumbers",style:null}),s}function yu(e){var n=e.gutters,s=e.gutterSpecs;se(n),e.lineGutter=null;for(var i=0;i<s.length;++i){var o=s[i],h=o.className,m=o.style,x=n.appendChild(L("div",null,"CodeMirror-gutter "+h));m&&(x.style.cssText=m),h=="CodeMirror-linenumbers"&&(e.lineGutter=x,x.style.width=(e.lineNumWidth||1)+"px")}n.style.display=s.length?"":"none",tr(e)}function Dr(e){yu(e.display),er(e),mu(e)}function vl(e,n,s,i){var o=this;this.input=s,o.scrollbarFiller=L("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=L("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=J("div",null,"CodeMirror-code"),o.selectionDiv=L("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=L("div",null,"CodeMirror-cursors"),o.measure=L("div",null,"CodeMirror-measure"),o.lineMeasure=L("div",null,"CodeMirror-measure"),o.lineSpace=J("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none");var h=J("div",[o.lineSpace],"CodeMirror-lines");o.mover=L("div",[h],null,"position: relative"),o.sizer=L("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=L("div",null,null,"position: absolute; height: "+Ht+"px; width: 1px;"),o.gutters=L("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=L("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=L("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),R&&V===105&&(o.wrapper.style.clipPath="inset(0px)"),o.wrapper.setAttribute("translate","no"),k&&E<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),!N&&!(y&&q)&&(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=n.first,o.reportedViewFrom=o.reportedViewTo=n.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,o.gutterSpecs=Ro(i.gutters,i.lineNumbers),yu(o),s.init(o)}var Io=0,Ni=null;k?Ni=-.53:y?Ni=15:R?Ni=-.7:H&&(Ni=-1/3);function Ec(e){var n=e.wheelDeltaX,s=e.wheelDeltaY;return n==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(n=e.detail),s==null&&e.detail&&e.axis==e.VERTICAL_AXIS?s=e.detail:s==null&&(s=e.wheelDelta),{x:n,y:s}}function ws(e){var n=Ec(e);return n.x*=Ni,n.y*=Ni,n}function qs(e,n){R&&V==102&&(e.display.chromeScrollHack==null?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout(function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""},100));var s=Ec(n),i=s.x,o=s.y,h=Ni;n.deltaMode===0&&(i=n.deltaX,o=n.deltaY,h=1);var m=e.display,x=m.scroller,w=x.scrollWidth>x.clientWidth,S=x.scrollHeight>x.clientHeight;if(i&&w||o&&S){if(o&&Y&&N){e:for(var z=n.target,U=m.view;z!=x;z=z.parentNode)for(var re=0;re<U.length;re++)if(U[re].node==z){e.display.currentWheelTarget=z;break e}}if(i&&!y&&!ee&&h!=null){o&&S&&ys(e,Math.max(0,x.scrollTop+o*h)),Vi(e,Math.max(0,x.scrollLeft+i*h)),(!o||o&&S)&&wn(n),m.wheelStartX=null;return}if(o&&h!=null){var Z=o*h,me=e.doc.scrollTop,ve=me+m.wrapper.clientHeight;Z<0?me=Math.max(0,me+Z-50):ve=Math.min(e.doc.height,ve+Z+50),Qi(e,{top:me,bottom:ve})}Io<20&&n.deltaMode!==0&&(m.wheelStartX==null?(m.wheelStartX=x.scrollLeft,m.wheelStartY=x.scrollTop,m.wheelDX=i,m.wheelDY=o,setTimeout(function(){if(m.wheelStartX!=null){var Ae=x.scrollLeft-m.wheelStartX,Le=x.scrollTop-m.wheelStartY,ze=Le&&m.wheelDY&&Le/m.wheelDY||Ae&&m.wheelDX&&Ae/m.wheelDX;m.wheelStartX=m.wheelStartY=null,ze&&(Ni=(Ni*Io+ze)/(Io+1),++Io)}},200)):(m.wheelDX+=i,m.wheelDY+=o))}}var Yn=function(e,n){this.ranges=e,this.primIndex=n};Yn.prototype.primary=function(){return this.ranges[this.primIndex]},Yn.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var n=0;n<this.ranges.length;n++){var s=this.ranges[n],i=e.ranges[n];if(!Tt(s.anchor,i.anchor)||!Tt(s.head,i.head))return!1}return!0},Yn.prototype.deepCopy=function(){for(var e=[],n=0;n<this.ranges.length;n++)e[n]=new Pt(en(this.ranges[n].anchor),en(this.ranges[n].head));return new Yn(e,this.primIndex)},Yn.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Yn.prototype.contains=function(e,n){n||(n=e);for(var s=0;s<this.ranges.length;s++){var i=this.ranges[s];if(Be(n,i.from())>=0&&Be(e,i.to())<=0)return s}return-1};var Pt=function(e,n){this.anchor=e,this.head=n};Pt.prototype.from=function(){return ai(this.anchor,this.head)},Pt.prototype.to=function(){return Sn(this.anchor,this.head)},Pt.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function Pr(e,n,s){var i=e&&e.options.selectionsMayTouch,o=n[s];n.sort(function(re,Z){return Be(re.from(),Z.from())}),s=$e(n,o);for(var h=1;h<n.length;h++){var m=n[h],x=n[h-1],w=Be(x.to(),m.from());if(i&&!m.empty()?w>0:w>=0){var S=ai(x.from(),m.from()),z=Sn(x.to(),m.to()),U=x.empty()?m.from()==m.head:x.from()==x.head;h<=s&&--s,n.splice(--h,2,new Pt(U?z:S,U?S:z))}}return new Yn(n,s)}function zn(e,n){return new Yn([new Pt(e,n||e)],0)}function Fn(e){return e.text?de(e.from.line+e.text.length-1,Ge(e.text).length+(e.text.length==1?e.from.ch:0)):e.to}function ks(e,n){if(Be(e,n.from)<0)return e;if(Be(e,n.to)<=0)return Fn(n);var s=e.line+n.text.length-(n.to.line-n.from.line)-1,i=e.ch;return e.line==n.to.line&&(i+=Fn(n).ch-n.to.ch),de(s,i)}function pi(e,n){for(var s=[],i=0;i<e.sel.ranges.length;i++){var o=e.sel.ranges[i];s.push(new Pt(ks(o.anchor,n),ks(o.head,n)))}return Pr(e.cm,s,e.sel.primIndex)}function Ei(e,n,s){return e.line==n.line?de(s.line,e.ch-n.ch+s.ch):de(s.line+(e.line-n.line),e.ch)}function Ks(e,n,s){for(var i=[],o=de(e.first,0),h=o,m=0;m<n.length;m++){var x=n[m],w=Ei(x.from,o,h),S=Ei(Fn(x),o,h);if(o=x.to,h=S,s=="around"){var z=e.sel.ranges[m],U=Be(z.head,z.anchor)<0;i[m]=new Pt(U?S:w,U?w:S)}else i[m]=new Pt(w,w)}return new Yn(i,e.sel.primIndex)}function xl(e){e.doc.mode=Fi(e.options,e.doc.modeOption),$s(e)}function $s(e){e.doc.iter(function(n){n.stateAfter&&(n.stateAfter=null),n.styles&&(n.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,Us(e,100),e.state.modeGen++,e.curOp&&er(e)}function bl(e,n){return n.from.ch==0&&n.to.ch==0&&Ge(n.text)==""&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function gr(e,n,s,i){function o(ze){return s?s[ze]:null}function h(ze,Me,Ye){Hd(ze,Me,Ye,i),Dn(ze,"change",ze,n)}function m(ze,Me){for(var Ye=[],lt=ze;lt<Me;++lt)Ye.push(new Si(S[lt],o(lt),i));return Ye}var x=n.from,w=n.to,S=n.text,z=Qe(e,x.line),U=Qe(e,w.line),re=Ge(S),Z=o(S.length-1),me=w.line-x.line;if(n.full)e.insert(0,m(0,S.length)),e.remove(S.length,e.size-S.length);else if(bl(e,n)){var ve=m(0,S.length-1);h(U,U.text,Z),me&&e.remove(x.line,me),ve.length&&e.insert(x.line,ve)}else if(z==U)if(S.length==1)h(z,z.text.slice(0,x.ch)+re+z.text.slice(w.ch),Z);else{var Ae=m(1,S.length-1);Ae.push(new Si(re+z.text.slice(w.ch),Z,i)),h(z,z.text.slice(0,x.ch)+S[0],o(0)),e.insert(x.line+1,Ae)}else if(S.length==1)h(z,z.text.slice(0,x.ch)+S[0]+U.text.slice(w.ch),o(0)),e.remove(x.line+1,me);else{h(z,z.text.slice(0,x.ch)+S[0],o(0)),h(U,re+U.text.slice(w.ch),Z);var Le=m(1,S.length-1);me>1&&e.remove(x.line+1,me-1),e.insert(x.line+1,Le)}Dn(e,"change",e,n)}function Pn(e,n,s){function i(o,h,m){if(o.linked)for(var x=0;x<o.linked.length;++x){var w=o.linked[x];if(w.doc!=h){var S=m&&w.sharedHist;s&&!S||(n(w.doc,S),i(w.doc,o,S))}}}i(e,null,!0)}function nn(e,n){if(n.cm)throw new Error("This document is already in use.");e.doc=n,n.cm=e,ya(e),xl(e),Vr(e),e.options.direction=n.direction,e.options.lineWrapping||ua(e),e.options.mode=n.modeOption,er(e)}function Vr(e){(e.doc.direction=="rtl"?G:Te)(e.display.lineDiv,"CodeMirror-rtl")}function Lc(e){Ln(e,function(){Vr(e),er(e)})}function ja(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function Na(e,n){var s={from:en(n.from),to:Fn(n),text:oi(e,n.from,n.to)};return Rc(e,s,n.from.line,n.to.line+1),Pn(e,function(i){return Rc(i,s,n.from.line,n.to.line+1)},!0),s}function wl(e){for(;e.length;){var n=Ge(e);if(n.ranges)e.pop();else break}}function Pc(e,n){if(n)return wl(e.done),Ge(e.done);if(e.done.length&&!Ge(e.done).ranges)return Ge(e.done);if(e.done.length>1&&!e.done[e.done.length-2].ranges)return e.done.pop(),Ge(e.done)}function Ea(e,n,s,i){var o=e.history;o.undone.length=0;var h=+new Date,m,x;if((o.lastOp==i||o.lastOrigin==n.origin&&n.origin&&(n.origin.charAt(0)=="+"&&o.lastModTime>h-(e.cm?e.cm.options.historyEventDelay:500)||n.origin.charAt(0)=="*"))&&(m=Pc(o,o.lastOp==i)))x=Ge(m.changes),Be(n.from,n.to)==0&&Be(n.from,x.to)==0?x.to=Fn(n):m.changes.push(Na(e,n));else{var w=Ge(o.done);for((!w||!w.ranges)&&Mo(e.sel,o.done),m={changes:[Na(e,n)],generation:o.generation},o.done.push(m);o.done.length>o.undoDepth;)o.done.shift(),o.done[0].ranges||o.done.shift()}o.done.push(s),o.generation=++o.maxGeneration,o.lastModTime=o.lastSelTime=h,o.lastOp=o.lastSelOp=i,o.lastOrigin=o.lastSelOrigin=n.origin,x||It(e,"historyAdded")}function Ac(e,n,s,i){var o=n.charAt(0);return o=="*"||o=="+"&&s.ranges.length==i.ranges.length&&s.somethingSelected()==i.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function Oo(e,n,s,i){var o=e.history,h=i&&i.origin;s==o.lastSelOp||h&&o.lastSelOrigin==h&&(o.lastModTime==o.lastSelTime&&o.lastOrigin==h||Ac(e,h,Ge(o.done),n))?o.done[o.done.length-1]=n:Mo(n,o.done),o.lastSelTime=+new Date,o.lastSelOrigin=h,o.lastSelOp=s,i&&i.clearRedo!==!1&&wl(o.undone)}function Mo(e,n){var s=Ge(n);s&&s.ranges&&s.equals(e)||n.push(e)}function Rc(e,n,s,i){var o=n["spans_"+e.id],h=0;e.iter(Math.max(e.first,s),Math.min(e.first+e.size,i),function(m){m.markedSpans&&((o||(o=n["spans_"+e.id]={}))[h]=m.markedSpans),++h})}function La(e){if(!e)return null;for(var n,s=0;s<e.length;++s)e[s].marker.explicitlyCleared?n||(n=e.slice(0,s)):n&&n.push(e[s]);return n?n.length?n:null:e}function kl(e,n){var s=n["spans_"+e.id];if(!s)return null;for(var i=[],o=0;o<n.text.length;++o)i.push(La(s[o]));return i}function vu(e,n){var s=kl(e,n),i=je(e,n);if(!s)return i;if(!i)return s;for(var o=0;o<s.length;++o){var h=s[o],m=i[o];if(h&&m)e:for(var x=0;x<m.length;++x){for(var w=m[x],S=0;S<h.length;++S)if(h[S].marker==w.marker)continue e;h.push(w)}else m&&(s[o]=m)}return s}function Gs(e,n,s){for(var i=[],o=0;o<e.length;++o){var h=e[o];if(h.ranges){i.push(s?Yn.prototype.deepCopy.call(h):h);continue}var m=h.changes,x=[];i.push({changes:x});for(var w=0;w<m.length;++w){var S=m[w],z=void 0;if(x.push({from:S.from,to:S.to,text:S.text}),n)for(var U in S)(z=U.match(/^spans_(\d+)$/))&&$e(n,Number(z[1]))>-1&&(Ge(x)[U]=S[U],delete S[U])}}return i}function Ss(e,n,s,i){if(i){var o=e.anchor;if(s){var h=Be(n,o)<0;h!=Be(s,o)<0?(o=n,n=s):h!=Be(n,s)<0&&(n=s)}return new Pt(o,n)}else return new Pt(s||n,n)}function Pa(e,n,s,i,o){o==null&&(o=e.cm&&(e.cm.display.shift||e.extend)),Wn(e,new Yn([Ss(e.sel.primary(),n,s,o)],0),i)}function Aa(e,n,s){for(var i=[],o=e.cm&&(e.cm.display.shift||e.extend),h=0;h<e.sel.ranges.length;h++)i[h]=Ss(e.sel.ranges[h],n[h],null,o);var m=Pr(e.cm,i,e.sel.primIndex);Wn(e,m,s)}function Do(e,n,s,i){var o=e.sel.ranges.slice(0);o[n]=s,Wn(e,Pr(e.cm,o,e.sel.primIndex),i)}function Ys(e,n,s,i){Wn(e,zn(n,s),i)}function xu(e,n,s){var i={ranges:n.ranges,update:function(o){this.ranges=[];for(var h=0;h<o.length;h++)this.ranges[h]=new Pt(gt(e,o[h].anchor),gt(e,o[h].head))},origin:s&&s.origin};return It(e,"beforeSelectionChange",e,i),e.cm&&It(e.cm,"beforeSelectionChange",e.cm,i),i.ranges!=n.ranges?Pr(e.cm,i.ranges,i.ranges.length-1):n}function Sl(e,n,s){var i=e.history.done,o=Ge(i);o&&o.ranges?(i[i.length-1]=n,zo(e,n,s)):Wn(e,n,s)}function Wn(e,n,s){zo(e,n,s),Oo(e,e.sel,e.cm?e.cm.curOp.id:NaN,s)}function zo(e,n,s){(cn(e,"beforeSelectionChange")||e.cm&&cn(e.cm,"beforeSelectionChange"))&&(n=xu(e,n,s));var i=s&&s.bias||(Be(n.primary().head,e.sel.primary().head)<0?-1:1);Vs(e,_s(e,n,i,!0)),!(s&&s.scroll===!1)&&e.cm&&e.cm.getOption("readOnly")!="nocursor"&&Ws(e.cm)}function Vs(e,n){n.equals(e.sel)||(e.sel=n,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,Nn(e.cm)),Dn(e,"cursorActivity",e))}function zr(e){Vs(e,_s(e,e.sel,null,!1))}function _s(e,n,s,i){for(var o,h=0;h<n.ranges.length;h++){var m=n.ranges[h],x=n.ranges.length==e.sel.ranges.length&&e.sel.ranges[h],w=Ra(e,m.anchor,x&&x.anchor,s,i),S=m.head==m.anchor?w:Ra(e,m.head,x&&x.head,s,i);(o||w!=m.anchor||S!=m.head)&&(o||(o=n.ranges.slice(0,h)),o[h]=new Pt(w,S))}return o?Pr(e.cm,o,n.primIndex):n}function Cs(e,n,s,i,o){var h=Qe(e,n.line);if(h.markedSpans)for(var m=0;m<h.markedSpans.length;++m){var x=h.markedSpans[m],w=x.marker,S="selectLeft"in w?!w.selectLeft:w.inclusiveLeft,z="selectRight"in w?!w.selectRight:w.inclusiveRight;if((x.from==null||(S?x.from<=n.ch:x.from<n.ch))&&(x.to==null||(z?x.to>=n.ch:x.to>n.ch))){if(o&&(It(w,"beforeCursorEnter"),w.explicitlyCleared))if(h.markedSpans){--m;continue}else break;if(!w.atomic)continue;if(s){var U=w.find(i<0?1:-1),re=void 0;if((i<0?z:S)&&(U=Li(e,U,-i,U&&U.line==n.line?h:null)),U&&U.line==n.line&&(re=Be(U,s))&&(i<0?re<0:re>0))return Cs(e,U,n,i,o)}var Z=w.find(i<0?-1:1);return(i<0?S:z)&&(Z=Li(e,Z,i,Z.line==n.line?h:null)),Z?Cs(e,Z,n,i,o):null}}return n}function Ra(e,n,s,i,o){var h=i||1,m=Cs(e,n,s,h,o)||!o&&Cs(e,n,s,h,!0)||Cs(e,n,s,-h,o)||!o&&Cs(e,n,s,-h,!0);return m||(e.cantEdit=!0,de(e.first,0))}function Li(e,n,s,i){return s<0&&n.ch==0?n.line>e.first?gt(e,de(n.line-1)):null:s>0&&n.ch==(i||Qe(e,n.line)).text.length?n.line<e.first+e.size-1?de(n.line+1,0):null:new de(n.line,n.ch+s)}function Zi(e){e.setSelection(de(e.firstLine(),0),de(e.lastLine()),_t)}function _l(e,n,s){var i={canceled:!1,from:n.from,to:n.to,text:n.text,origin:n.origin,cancel:function(){return i.canceled=!0}};return s&&(i.update=function(o,h,m,x){o&&(i.from=gt(e,o)),h&&(i.to=gt(e,h)),m&&(i.text=m),x!==void 0&&(i.origin=x)}),It(e,"beforeChange",e,i),e.cm&&It(e.cm,"beforeChange",e.cm,i),i.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:i.from,to:i.to,text:i.text,origin:i.origin}}function Js(e,n,s){if(e.cm){if(!e.cm.curOp)return pn(e.cm,Js)(e,n,s);if(e.cm.state.suppressEdits)return}if(!((cn(e,"beforeChange")||e.cm&&cn(e.cm,"beforeChange"))&&(n=_l(e,n,!0),!n))){var i=Or&&!s&&te(e,n.from,n.to);if(i)for(var o=i.length-1;o>=0;--o)Pi(e,{from:i[o].from,to:i[o].to,text:o?[""]:n.text,origin:n.origin});else Pi(e,n)}}function Pi(e,n){if(!(n.text.length==1&&n.text[0]==""&&Be(n.from,n.to)==0)){var s=pi(e,n);Ea(e,n,s,e.cm?e.cm.curOp.id:NaN),Fo(e,n,s,je(e,n));var i=[];Pn(e,function(o,h){!h&&$e(i,o.history)==-1&&(Ho(o.history,n),i.push(o.history)),Fo(o,n,null,je(o,n))})}}function hi(e,n,s){var i=e.cm&&e.cm.state.suppressEdits;if(!(i&&!s)){for(var o=e.history,h,m=e.sel,x=n=="undo"?o.done:o.undone,w=n=="undo"?o.undone:o.done,S=0;S<x.length&&(h=x[S],!(s?h.ranges&&!h.equals(e.sel):!h.ranges));S++);if(S!=x.length){for(o.lastOrigin=o.lastSelOrigin=null;;)if(h=x.pop(),h.ranges){if(Mo(h,w),s&&!h.equals(e.sel)){Wn(e,h,{clearRedo:!1});return}m=h}else if(i){x.push(h);return}else break;var z=[];Mo(m,w),w.push({changes:z,generation:o.generation}),o.generation=h.generation||++o.maxGeneration;for(var U=cn(e,"beforeChange")||e.cm&&cn(e.cm,"beforeChange"),re=function(ve){var Ae=h.changes[ve];if(Ae.origin=n,U&&!_l(e,Ae,!1))return x.length=0,{};z.push(Na(e,Ae));var Le=ve?pi(e,Ae):Ge(x);Fo(e,Ae,Le,vu(e,Ae)),!ve&&e.cm&&e.cm.scrollIntoView({from:Ae.from,to:Fn(Ae)});var ze=[];Pn(e,function(Me,Ye){!Ye&&$e(ze,Me.history)==-1&&(Ho(Me.history,Ae),ze.push(Me.history)),Fo(Me,Ae,null,vu(Me,Ae))})},Z=h.changes.length-1;Z>=0;--Z){var me=re(Z);if(me)return me.v}}}}function Ia(e,n){if(n!=0&&(e.first+=n,e.sel=new Yn(ht(e.sel.ranges,function(o){return new Pt(de(o.anchor.line+n,o.anchor.ch),de(o.head.line+n,o.head.ch))}),e.sel.primIndex),e.cm)){er(e.cm,e.first,e.first-n,n);for(var s=e.cm.display,i=s.viewFrom;i<s.viewTo;i++)Gi(e.cm,i,"gutter")}}function Fo(e,n,s,i){if(e.cm&&!e.cm.curOp)return pn(e.cm,Fo)(e,n,s,i);if(n.to.line<e.first){Ia(e,n.text.length-1-(n.to.line-n.from.line));return}if(!(n.from.line>e.lastLine())){if(n.from.line<e.first){var o=n.text.length-1-(e.first-n.from.line);Ia(e,o),n={from:de(e.first,0),to:de(n.to.line+o,n.to.ch),text:[Ge(n.text)],origin:n.origin}}var h=e.lastLine();n.to.line>h&&(n={from:n.from,to:de(h,Qe(e,h).text.length),text:[n.text[0]],origin:n.origin}),n.removed=oi(e,n.from,n.to),s||(s=pi(e,n)),e.cm?Cl(e.cm,n,i):gr(e,n,i),zo(e,s,_t),e.cantEdit&&Ra(e,de(e.firstLine(),0))&&(e.cantEdit=!1)}}function Cl(e,n,s){var i=e.doc,o=e.display,h=n.from,m=n.to,x=!1,w=h.line;e.options.lineWrapping||(w=T(Rt(Qe(i,h.line))),i.iter(w,m.line+1,function(Z){if(Z==o.maxLine)return x=!0,!0})),i.sel.contains(n.from,n.to)>-1&&Nn(e),gr(i,n,s,zs(e)),e.options.lineWrapping||(i.iter(w,h.line+n.text.length,function(Z){var me=Ui(Z);me>o.maxLineLength&&(o.maxLine=Z,o.maxLineLength=me,o.maxLineChanged=!0,x=!1)}),x&&(e.curOp.updateMaxLine=!0)),hr(i,h.line),Us(e,400);var S=n.text.length-(m.line-h.line)-1;n.full?er(e):h.line==m.line&&n.text.length==1&&!bl(e.doc,n)?Gi(e,h.line,"text"):er(e,h.line,m.line+1,S);var z=cn(e,"changes"),U=cn(e,"change");if(U||z){var re={from:h,to:m,text:n.text,removed:n.removed,origin:n.origin};U&&Dn(e,"change",e,re),z&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(re)}e.display.selForContextMenu=null}function Xs(e,n,s,i,o){var h;i||(i=s),Be(i,s)<0&&(h=[i,s],s=h[0],i=h[1]),typeof n=="string"&&(n=e.splitLines(n)),Js(e,{from:s,to:i,text:n,origin:o})}function Wo(e,n,s,i){s<e.line?e.line+=i:n<e.line&&(e.line=n,e.ch=0)}function fi(e,n,s,i){for(var o=0;o<e.length;++o){var h=e[o],m=!0;if(h.ranges){h.copied||(h=e[o]=h.deepCopy(),h.copied=!0);for(var x=0;x<h.ranges.length;x++)Wo(h.ranges[x].anchor,n,s,i),Wo(h.ranges[x].head,n,s,i);continue}for(var w=0;w<h.changes.length;++w){var S=h.changes[w];if(s<S.from.line)S.from=de(S.from.line+i,S.from.ch),S.to=de(S.to.line+i,S.to.ch);else if(n<=S.to.line){m=!1;break}}m||(e.splice(0,o+1),o=0)}}function Ho(e,n){var s=n.from.line,i=n.to.line,o=n.text.length-(i-s)-1;fi(e.done,s,i,o),fi(e.undone,s,i,o)}function es(e,n,s,i){var o=n,h=n;return typeof n=="number"?h=Qe(e,Za(e,n)):o=T(n),o==null?null:(i(h,o)&&e.cm&&Gi(e.cm,o,s),h)}function mi(e){this.lines=e,this.parent=null;for(var n=0,s=0;s<e.length;++s)e[s].parent=this,n+=e[s].height;this.height=n}mi.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,n){for(var s=e,i=e+n;s<i;++s){var o=this.lines[s];this.height-=o.height,Jl(o),Dn(o,"delete")}this.lines.splice(e,n)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,n,s){this.height+=s,this.lines=this.lines.slice(0,e).concat(n).concat(this.lines.slice(e));for(var i=0;i<n.length;++i)n[i].parent=this},iterN:function(e,n,s){for(var i=e+n;e<i;++e)if(s(this.lines[e]))return!0}};function Qs(e){this.children=e;for(var n=0,s=0,i=0;i<e.length;++i){var o=e[i];n+=o.chunkSize(),s+=o.height,o.parent=this}this.size=n,this.height=s,this.parent=null}Qs.prototype={chunkSize:function(){return this.size},removeInner:function(e,n){this.size-=n;for(var s=0;s<this.children.length;++s){var i=this.children[s],o=i.chunkSize();if(e<o){var h=Math.min(n,o-e),m=i.height;if(i.removeInner(e,h),this.height-=m-i.height,o==h&&(this.children.splice(s--,1),i.parent=null),(n-=h)==0)break;e=0}else e-=o}if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof mi))){var x=[];this.collapse(x),this.children=[new mi(x)],this.children[0].parent=this}},collapse:function(e){for(var n=0;n<this.children.length;++n)this.children[n].collapse(e)},insertInner:function(e,n,s){this.size+=n.length,this.height+=s;for(var i=0;i<this.children.length;++i){var o=this.children[i],h=o.chunkSize();if(e<=h){if(o.insertInner(e,n,s),o.lines&&o.lines.length>50){for(var m=o.lines.length%25+25,x=m;x<o.lines.length;){var w=new mi(o.lines.slice(x,x+=25));o.height-=w.height,this.children.splice(++i,0,w),w.parent=this}o.lines=o.lines.slice(0,m),this.maybeSpill()}break}e-=h}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var n=e.children.splice(e.children.length-5,5),s=new Qs(n);if(e.parent){e.size-=s.size,e.height-=s.height;var o=$e(e.parent.children,e);e.parent.children.splice(o+1,0,s)}else{var i=new Qs(e.children);i.parent=e,e.children=[i,s],e=i}s.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,n,s){for(var i=0;i<this.children.length;++i){var o=this.children[i],h=o.chunkSize();if(e<h){var m=Math.min(n,h-e);if(o.iterN(e,m,s))return!0;if((n-=m)==0)break;e=0}else e-=h}}};var Ai=function(e,n,s){if(s)for(var i in s)s.hasOwnProperty(i)&&(this[i]=s[i]);this.doc=e,this.node=n};Ai.prototype.clear=function(){var e=this.doc.cm,n=this.line.widgets,s=this.line,i=T(s);if(!(i==null||!n)){for(var o=0;o<n.length;++o)n[o]==this&&n.splice(o--,1);n.length||(s.widgets=null);var h=qi(this);On(s,Math.max(0,s.height-h)),e&&(Ln(e,function(){bu(e,s,-h),Gi(e,i,"widget")}),Dn(e,"lineWidgetCleared",e,this,i))}},Ai.prototype.changed=function(){var e=this,n=this.height,s=this.doc.cm,i=this.line;this.height=null;var o=qi(this)-n;o&&(ui(this.doc,i)||On(i,i.height+o),s&&Ln(s,function(){s.curOp.forceUpdate=!0,bu(s,i,o),Dn(s,"lineWidgetChanged",s,e,T(i))}))},lr(Ai);function bu(e,n,s){_n(n)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&gs(e,s)}function wu(e,n,s,i){var o=new Ai(e,s,i),h=e.cm;return h&&o.noHScroll&&(h.display.alignWidgets=!0),es(e,n,"widget",function(m){var x=m.widgets||(m.widgets=[]);if(o.insertAt==null?x.push(o):x.splice(Math.min(x.length,Math.max(0,o.insertAt)),0,o),o.line=m,h&&!ui(e,m)){var w=_n(m)<e.scrollTop;On(m,m.height+qi(o)),w&&gs(h,o.height),h.curOp.forceUpdate=!0}return!0}),h&&Dn(h,"lineWidgetAdded",h,o,typeof n=="number"?n:T(n)),o}var an=0,gi=function(e,n){this.lines=[],this.type=n,this.doc=e,this.id=++an};gi.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,n=e&&!e.curOp;if(n&&xs(e),cn(this,"clear")){var s=this.find();s&&Dn(this,"clear",s.from,s.to)}for(var i=null,o=null,h=0;h<this.lines.length;++h){var m=this.lines[h],x=Ms(m.markedSpans,this);e&&!this.collapsed?Gi(e,T(m),"text"):e&&(x.to!=null&&(o=T(m)),x.from!=null&&(i=T(m))),m.markedSpans=aa(m.markedSpans,x),x.from==null&&this.collapsed&&!ui(this.doc,m)&&e&&On(m,Ci(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var w=0;w<this.lines.length;++w){var S=Rt(this.lines[w]),z=Ui(S);z>e.display.maxLineLength&&(e.display.maxLine=S,e.display.maxLineLength=z,e.display.maxLineChanged=!0)}i!=null&&e&&this.collapsed&&er(e,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&zr(e.doc)),e&&Dn(e,"markerCleared",e,this,i,o),n&&Yr(e),this.parent&&this.parent.clear()}},gi.prototype.find=function(e,n){e==null&&this.type=="bookmark"&&(e=1);for(var s,i,o=0;o<this.lines.length;++o){var h=this.lines[o],m=Ms(h.markedSpans,this);if(m.from!=null&&(s=de(n?h:T(h),m.from),e==-1))return s;if(m.to!=null&&(i=de(n?h:T(h),m.to),e==1))return i}return s&&{from:s,to:i}},gi.prototype.changed=function(){var e=this,n=this.find(-1,!0),s=this,i=this.doc.cm;!n||!i||Ln(i,function(){var o=n.line,h=T(n.line),m=sl(i,h);if(m&&(ol(m),i.curOp.selectionChanged=i.curOp.forceUpdate=!0),i.curOp.updateMaxLine=!0,!ui(s.doc,o)&&s.height!=null){var x=s.height;s.height=null;var w=qi(s)-x;w&&On(o,o.height+w)}Dn(i,"markerChanged",i,e)})},gi.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(!n.maybeHiddenMarkers||$e(n.maybeHiddenMarkers,this)==-1)&&(n.maybeUnhiddenMarkers||(n.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},gi.prototype.detachLine=function(e){if(this.lines.splice($e(this.lines,e),1),!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(n.maybeHiddenMarkers||(n.maybeHiddenMarkers=[])).push(this)}},lr(gi);function Ts(e,n,s,i,o){if(i&&i.shared)return Tl(e,n,s,i,o);if(e.cm&&!e.cm.curOp)return pn(e.cm,Ts)(e,n,s,i,o);var h=new gi(e,o),m=Be(n,s);if(i&&Ue(i,h,!1),m>0||m==0&&h.clearWhenEmpty!==!1)return h;if(h.replacedWith&&(h.collapsed=!0,h.widgetNode=J("span",[h.replacedWith],"CodeMirror-widget"),i.handleMouseEvents||h.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(h.widgetNode.insertLeft=!0)),h.collapsed){if(ki(e,n.line,n,s,h)||n.line!=s.line&&ki(e,s.line,n,s,h))throw new Error("Inserting collapsed marker partially overlapping an existing one");cs()}h.addToHistory&&Ea(e,{from:n,to:s,origin:"markText"},e.sel,NaN);var x=n.line,w=e.cm,S;if(e.iter(x,s.line+1,function(U){w&&h.collapsed&&!w.options.lineWrapping&&Rt(U)==w.display.maxLine&&(S=!0),h.collapsed&&x!=n.line&&On(U,0),Bi(U,new Mr(h,x==n.line?n.ch:null,x==s.line?s.ch:null),e.cm&&e.cm.curOp),++x}),h.collapsed&&e.iter(n.line,s.line+1,function(U){ui(e,U)&&On(U,0)}),h.clearOnEnter&&it(h,"beforeCursorEnter",function(){return h.clear()}),h.readOnly&&(Os(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),h.collapsed&&(h.id=++an,h.atomic=!0),w){if(S&&(w.curOp.updateMaxLine=!0),h.collapsed)er(w,n.line,s.line+1);else if(h.className||h.startStyle||h.endStyle||h.css||h.attributes||h.title)for(var z=n.line;z<=s.line;z++)Gi(w,z,"text");h.atomic&&zr(w.doc),Dn(w,"markerAdded",w,h)}return h}var Zs=function(e,n){this.markers=e,this.primary=n;for(var s=0;s<e.length;++s)e[s].parent=this};Zs.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();Dn(this,"clear")}},Zs.prototype.find=function(e,n){return this.primary.find(e,n)},lr(Zs);function Tl(e,n,s,i,o){i=Ue(i),i.shared=!1;var h=[Ts(e,n,s,i,o)],m=h[0],x=i.widgetNode;return Pn(e,function(w){x&&(i.widgetNode=x.cloneNode(!0)),h.push(Ts(w,gt(w,n),gt(w,s),i,o));for(var S=0;S<w.linked.length;++S)if(w.linked[S].isParent)return;m=Ge(h)}),new Zs(h,m)}function jl(e){return e.findMarks(de(e.first,0),e.clipPos(de(e.lastLine())),function(n){return n.parent})}function eo(e,n){for(var s=0;s<n.length;s++){var i=n[s],o=i.find(),h=e.clipPos(o.from),m=e.clipPos(o.to);if(Be(h,m)){var x=Ts(e,h,m,i.primary,i.primary.type);i.markers.push(x),x.parent=i}}}function hn(e){for(var n=function(i){var o=e[i],h=[o.primary.doc];Pn(o.primary.doc,function(w){return h.push(w)});for(var m=0;m<o.markers.length;m++){var x=o.markers[m];$e(h,x.doc)==-1&&(x.parent=null,o.markers.splice(m--,1))}},s=0;s<e.length;s++)n(s)}var Hn=0,Mt=function(e,n,s,i,o){if(!(this instanceof Mt))return new Mt(e,n,s,i,o);s==null&&(s=0),Qs.call(this,[new mi([new Si("",null)])]),this.first=s,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=s;var h=de(s,0);this.sel=zn(h),this.history=new ja(null),this.id=++Hn,this.modeOption=n,this.lineSep=i,this.direction=o=="rtl"?"rtl":"ltr",this.extend=!1,typeof e=="string"&&(e=this.splitLines(e)),gr(this,{from:h,to:h,text:e}),Wn(this,zn(h),_t)};Mt.prototype=ge(Qs.prototype,{constructor:Mt,iter:function(e,n,s){s?this.iterN(e-this.first,n-e,s):this.iterN(this.first,this.first+this.size,e)},insert:function(e,n){for(var s=0,i=0;i<n.length;++i)s+=n[i].height;this.insertInner(e-this.first,n,s)},remove:function(e,n){this.removeInner(e-this.first,n)},getValue:function(e){var n=dr(this,this.first,this.first+this.size);return e===!1?n:n.join(e||this.lineSeparator())},setValue:yn(function(e){var n=de(this.first,0),s=this.first+this.size-1;Js(this,{from:n,to:de(s,Qe(this,s).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&ka(this.cm,0,0),Wn(this,zn(n),_t)}),replaceRange:function(e,n,s,i){n=gt(this,n),s=s?gt(this,s):n,Xs(this,e,n,s,i)},getRange:function(e,n,s){var i=oi(this,gt(this,e),gt(this,n));return s===!1?i:s===""?i.join(""):i.join(s||this.lineSeparator())},getLine:function(e){var n=this.getLineHandle(e);return n&&n.text},getLineHandle:function(e){if(fe(this,e))return Qe(this,e)},getLineNumber:function(e){return T(e)},getLineHandleVisualStart:function(e){return typeof e=="number"&&(e=Qe(this,e)),Rt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return gt(this,e)},getCursor:function(e){var n=this.sel.primary(),s;return e==null||e=="head"?s=n.head:e=="anchor"?s=n.anchor:e=="end"||e=="to"||e===!1?s=n.to():s=n.from(),s},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:yn(function(e,n,s){Ys(this,gt(this,typeof e=="number"?de(e,n||0):e),null,s)}),setSelection:yn(function(e,n,s){Ys(this,gt(this,e),gt(this,n||e),s)}),extendSelection:yn(function(e,n,s){Pa(this,gt(this,e),n&&gt(this,n),s)}),extendSelections:yn(function(e,n){Aa(this,sa(this,e),n)}),extendSelectionsBy:yn(function(e,n){var s=ht(this.sel.ranges,e);Aa(this,sa(this,s),n)}),setSelections:yn(function(e,n,s){if(e.length){for(var i=[],o=0;o<e.length;o++)i[o]=new Pt(gt(this,e[o].anchor),gt(this,e[o].head||e[o].anchor));n==null&&(n=Math.min(e.length-1,this.sel.primIndex)),Wn(this,Pr(this.cm,i,n),s)}}),addSelection:yn(function(e,n,s){var i=this.sel.ranges.slice(0);i.push(new Pt(gt(this,e),gt(this,n||e))),Wn(this,Pr(this.cm,i,i.length-1),s)}),getSelection:function(e){for(var n=this.sel.ranges,s,i=0;i<n.length;i++){var o=oi(this,n[i].from(),n[i].to());s=s?s.concat(o):o}return e===!1?s:s.join(e||this.lineSeparator())},getSelections:function(e){for(var n=[],s=this.sel.ranges,i=0;i<s.length;i++){var o=oi(this,s[i].from(),s[i].to());e!==!1&&(o=o.join(e||this.lineSeparator())),n[i]=o}return n},replaceSelection:function(e,n,s){for(var i=[],o=0;o<this.sel.ranges.length;o++)i[o]=e;this.replaceSelections(i,n,s||"+input")},replaceSelections:yn(function(e,n,s){for(var i=[],o=this.sel,h=0;h<o.ranges.length;h++){var m=o.ranges[h];i[h]={from:m.from(),to:m.to(),text:this.splitLines(e[h]),origin:s}}for(var x=n&&n!="end"&&Ks(this,i,n),w=i.length-1;w>=0;w--)Js(this,i[w]);x?Sl(this,x):this.cm&&Ws(this.cm)}),undo:yn(function(){hi(this,"undo")}),redo:yn(function(){hi(this,"redo")}),undoSelection:yn(function(){hi(this,"undo",!0)}),redoSelection:yn(function(){hi(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,n=0,s=0,i=0;i<e.done.length;i++)e.done[i].ranges||++n;for(var o=0;o<e.undone.length;o++)e.undone[o].ranges||++s;return{undo:n,redo:s}},clearHistory:function(){var e=this;this.history=new ja(this.history),Pn(this,function(n){return n.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Gs(this.history.done),undone:Gs(this.history.undone)}},setHistory:function(e){var n=this.history=new ja(this.history);n.done=Gs(e.done.slice(0),null,!0),n.undone=Gs(e.undone.slice(0),null,!0)},setGutterMarker:yn(function(e,n,s){return es(this,e,"gutter",function(i){var o=i.gutterMarkers||(i.gutterMarkers={});return o[n]=s,!s&&Ve(o)&&(i.gutterMarkers=null),!0})}),clearGutter:yn(function(e){var n=this;this.iter(function(s){s.gutterMarkers&&s.gutterMarkers[e]&&es(n,s,"gutter",function(){return s.gutterMarkers[e]=null,Ve(s.gutterMarkers)&&(s.gutterMarkers=null),!0})})}),lineInfo:function(e){var n;if(typeof e=="number"){if(!fe(this,e)||(n=e,e=Qe(this,e),!e))return null}else if(n=T(e),n==null)return null;return{line:n,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:yn(function(e,n,s){return es(this,e,n=="gutter"?"gutter":"class",function(i){var o=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass";if(!i[o])i[o]=s;else{if(ie(s).test(i[o]))return!1;i[o]+=" "+s}return!0})}),removeLineClass:yn(function(e,n,s){return es(this,e,n=="gutter"?"gutter":"class",function(i){var o=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass",h=i[o];if(h)if(s==null)i[o]=null;else{var m=h.match(ie(s));if(!m)return!1;var x=m.index+m[0].length;i[o]=h.slice(0,m.index)+(!m.index||x==h.length?"":" ")+h.slice(x)||null}else return!1;return!0})}),addLineWidget:yn(function(e,n,s){return wu(this,e,n,s)}),removeLineWidget:function(e){e.clear()},markText:function(e,n,s){return Ts(this,gt(this,e),gt(this,n),s,s&&s.type||"range")},setBookmark:function(e,n){var s={replacedWith:n&&(n.nodeType==null?n.widget:n),insertLeft:n&&n.insertLeft,clearWhenEmpty:!1,shared:n&&n.shared,handleMouseEvents:n&&n.handleMouseEvents};return e=gt(this,e),Ts(this,e,e,s,"bookmark")},findMarksAt:function(e){e=gt(this,e);var n=[],s=Qe(this,e.line).markedSpans;if(s)for(var i=0;i<s.length;++i){var o=s[i];(o.from==null||o.from<=e.ch)&&(o.to==null||o.to>=e.ch)&&n.push(o.marker.parent||o.marker)}return n},findMarks:function(e,n,s){e=gt(this,e),n=gt(this,n);var i=[],o=e.line;return this.iter(e.line,n.line+1,function(h){var m=h.markedSpans;if(m)for(var x=0;x<m.length;x++){var w=m[x];!(w.to!=null&&o==e.line&&e.ch>=w.to||w.from==null&&o!=e.line||w.from!=null&&o==n.line&&w.from>=n.ch)&&(!s||s(w.marker))&&i.push(w.marker.parent||w.marker)}++o}),i},getAllMarks:function(){var e=[];return this.iter(function(n){var s=n.markedSpans;if(s)for(var i=0;i<s.length;++i)s[i].from!=null&&e.push(s[i].marker)}),e},posFromIndex:function(e){var n,s=this.first,i=this.lineSeparator().length;return this.iter(function(o){var h=o.text.length+i;if(h>e)return n=e,!0;e-=h,++s}),gt(this,de(s,n))},indexFromPos:function(e){e=gt(this,e);var n=e.ch;if(e.line<this.first||e.ch<0)return 0;var s=this.lineSeparator().length;return this.iter(this.first,e.line,function(i){n+=i.text.length+s}),n},copy:function(e){var n=new Mt(dr(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,n.sel=this.sel,n.extend=!1,e&&(n.history.undoDepth=this.history.undoDepth,n.setHistory(this.getHistory())),n},linkedDoc:function(e){e||(e={});var n=this.first,s=this.first+this.size;e.from!=null&&e.from>n&&(n=e.from),e.to!=null&&e.to<s&&(s=e.to);var i=new Mt(dr(this,n,s),e.mode||this.modeOption,n,this.lineSep,this.direction);return e.sharedHist&&(i.history=this.history),(this.linked||(this.linked=[])).push({doc:i,sharedHist:e.sharedHist}),i.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],eo(i,jl(this)),i},unlinkDoc:function(e){if(e instanceof Zt&&(e=e.doc),this.linked)for(var n=0;n<this.linked.length;++n){var s=this.linked[n];if(s.doc==e){this.linked.splice(n,1),e.unlinkDoc(this),hn(jl(this));break}}if(e.history==this.history){var i=[e.id];Pn(e,function(o){return i.push(o.id)},!0),e.history=new ja(null),e.history.done=Gs(this.history.done,i),e.history.undone=Gs(this.history.undone,i)}},iterLinkedDocs:function(e){Pn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):cr(e)},lineSeparator:function(){return this.lineSep||`
`},setDirection:yn(function(e){e!="rtl"&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(n){return n.order=null}),this.cm&&Lc(this.cm))})}),Mt.prototype.eachLine=Mt.prototype.iter;var Oa=0;function Ma(e){var n=this;if(Qn(n),!(Ot(n,e)||Ki(n.display,e))){wn(e),k&&(Oa=+new Date);var s=fs(n,e,!0),i=e.dataTransfer.files;if(!(!s||n.isReadOnly()))if(i&&i.length&&window.FileReader&&window.File)for(var o=i.length,h=Array(o),m=0,x=function(){++m==o&&pn(n,function(){s=gt(n.doc,s);var Z={from:s,to:s,text:n.doc.splitLines(h.filter(function(me){return me!=null}).join(n.doc.lineSeparator())),origin:"paste"};Js(n.doc,Z),Sl(n.doc,zn(gt(n.doc,s),gt(n.doc,Fn(Z))))})()},w=function(Z,me){if(n.options.allowDropFileTypes&&$e(n.options.allowDropFileTypes,Z.type)==-1){x();return}var ve=new FileReader;ve.onerror=function(){return x()},ve.onload=function(){var Ae=ve.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(Ae)){x();return}h[me]=Ae,x()},ve.readAsText(Z)},S=0;S<i.length;S++)w(i[S],S);else{if(n.state.draggingText&&n.doc.sel.contains(s)>-1){n.state.draggingText(e),setTimeout(function(){return n.display.input.focus()},20);return}try{var z=e.dataTransfer.getData("Text");if(z){var U;if(n.state.draggingText&&!n.state.draggingText.copy&&(U=n.listSelections()),zo(n.doc,zn(s,s)),U)for(var re=0;re<U.length;++re)Xs(n.doc,"",U[re].anchor,U[re].head,"drag");n.replaceSelection(z,"around","paste"),n.display.input.focus()}}catch{}}}}function Da(e,n){if(k&&(!e.state.draggingText||+new Date-Oa<100)){ur(n);return}if(!(Ot(e,n)||Ki(e.display,n))&&(n.dataTransfer.setData("Text",e.getSelection()),n.dataTransfer.effectAllowed="copyMove",n.dataTransfer.setDragImage&&!H)){var s=L("img",null,null,"position: fixed; left: 0; top: 0;");s.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",ee&&(s.width=s.height=1,e.display.wrapper.appendChild(s),s._top=s.offsetTop),n.dataTransfer.setDragImage(s,0,0),ee&&s.parentNode.removeChild(s)}}function ap(e,n){var s=fs(e,n);if(s){var i=document.createDocumentFragment();xa(e,s,i),e.display.dragCursor||(e.display.dragCursor=L("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),ye(e.display.dragCursor,i)}}function Qn(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Nl(e){if(document.getElementsByClassName){for(var n=document.getElementsByClassName("CodeMirror"),s=[],i=0;i<n.length;i++){var o=n[i].CodeMirror;o&&s.push(o)}s.length&&s[0].operation(function(){for(var h=0;h<s.length;h++)e(s[h])})}}var El=!1;function ku(){El||(Ri(),El=!0)}function Ri(){var e;it(window,"resize",function(){e==null&&(e=setTimeout(function(){e=null,Nl(Jr)},100))}),it(window,"blur",function(){return Nl(Ut)})}function Jr(e){var n=e.display;n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.scrollbarsClipped=!1,e.setSize()}for(var Xr={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},to=0;to<10;to++)Xr[to+48]=Xr[to+96]=String(to);for(var Bo=65;Bo<=90;Bo++)Xr[Bo]=String.fromCharCode(Bo);for(var Uo=1;Uo<=12;Uo++)Xr[Uo+111]=Xr[Uo+63235]="F"+Uo;var Ii={};Ii.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ii.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ii.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Ii.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ii.default=Y?Ii.macDefault:Ii.pcDefault;function Ic(e){var n=e.split(/-(?!$)/);e=n[n.length-1];for(var s,i,o,h,m=0;m<n.length-1;m++){var x=n[m];if(/^(cmd|meta|m)$/i.test(x))h=!0;else if(/^a(lt)?$/i.test(x))s=!0;else if(/^(c|ctrl|control)$/i.test(x))i=!0;else if(/^s(hift)?$/i.test(x))o=!0;else throw new Error("Unrecognized modifier name: "+x)}return s&&(e="Alt-"+e),i&&(e="Ctrl-"+e),h&&(e="Cmd-"+e),o&&(e="Shift-"+e),e}function Oc(e){var n={};for(var s in e)if(e.hasOwnProperty(s)){var i=e[s];if(/^(name|fallthrough|(de|at)tach)$/.test(s))continue;if(i=="..."){delete e[s];continue}for(var o=ht(s.split(" "),Ic),h=0;h<o.length;h++){var m=void 0,x=void 0;h==o.length-1?(x=o.join(" "),m=i):(x=o.slice(0,h+1).join(" "),m="...");var w=n[x];if(!w)n[x]=m;else if(w!=m)throw new Error("Inconsistent bindings for "+x)}delete e[s]}for(var S in n)e[S]=n[S];return e}function no(e,n,s,i){n=js(n);var o=n.call?n.call(e,i):n[e];if(o===!1)return"nothing";if(o==="...")return"multi";if(o!=null&&s(o))return"handled";if(n.fallthrough){if(Object.prototype.toString.call(n.fallthrough)!="[object Array]")return no(e,n.fallthrough,s,i);for(var h=0;h<n.fallthrough.length;h++){var m=no(e,n.fallthrough[h],s,i);if(m)return m}}}function Su(e){var n=typeof e=="string"?e:Xr[e.keyCode];return n=="Ctrl"||n=="Alt"||n=="Shift"||n=="Mod"}function _u(e,n,s){var i=e;return n.altKey&&i!="Alt"&&(e="Alt-"+e),(He?n.metaKey:n.ctrlKey)&&i!="Ctrl"&&(e="Ctrl-"+e),(He?n.ctrlKey:n.metaKey)&&i!="Mod"&&(e="Cmd-"+e),!s&&n.shiftKey&&i!="Shift"&&(e="Shift-"+e),e}function Cu(e,n){if(ee&&e.keyCode==34&&e.char)return!1;var s=Xr[e.keyCode];return s==null||e.altGraphKey?!1:(e.keyCode==3&&e.code&&(s=e.code),_u(s,e,n))}function js(e){return typeof e=="string"?Ii[e]:e}function ro(e,n){for(var s=e.doc.sel.ranges,i=[],o=0;o<s.length;o++){for(var h=n(s[o]);i.length&&Be(h.from,Ge(i).to)<=0;){var m=i.pop();if(Be(m.from,h.from)<0){h.from=m.from;break}}i.push(h)}Ln(e,function(){for(var x=i.length-1;x>=0;x--)Xs(e.doc,"",i[x].from,i[x].to,"+delete");Ws(e)})}function qo(e,n,s){var i=mn(e.text,n+s,s);return i<0||i>e.text.length?null:i}function Ko(e,n,s){var i=qo(e,n.ch,s);return i==null?null:new de(n.line,i,s<0?"after":"before")}function Ll(e,n,s,i,o){if(e){n.doc.direction=="rtl"&&(o=-o);var h=xt(s,n.doc.direction);if(h){var m=o<0?Ge(h):h[0],x=o<0==(m.level==1),w=x?"after":"before",S;if(m.level>0||n.doc.direction=="rtl"){var z=_i(n,s);S=o<0?s.text.length-1:0;var U=Lr(n,z,S).top;S=Jn(function(re){return Lr(n,z,re).top==U},o<0==(m.level==1)?m.from:m.to-1,S),w=="before"&&(S=qo(s,S,1))}else S=o<0?m.to:m.from;return new de(i,S,w)}}return new de(i,o<0?s.text.length:0,o<0?"before":"after")}function Tu(e,n,s,i){var o=xt(n,e.doc.direction);if(!o)return Ko(n,s,i);s.ch>=n.text.length?(s.ch=n.text.length,s.sticky="before"):s.ch<=0&&(s.ch=0,s.sticky="after");var h=ar(o,s.ch,s.sticky),m=o[h];if(e.doc.direction=="ltr"&&m.level%2==0&&(i>0?m.to>s.ch:m.from<s.ch))return Ko(n,s,i);var x=function(Le,ze){return qo(n,Le instanceof de?Le.ch:Le,ze)},w,S=function(Le){return e.options.lineWrapping?(w=w||_i(e,n),du(e,n,w,Le)):{begin:0,end:n.text.length}},z=S(s.sticky=="before"?x(s,-1):s.ch);if(e.doc.direction=="rtl"||m.level==1){var U=m.level==1==i<0,re=x(s,U?1:-1);if(re!=null&&(U?re<=m.to&&re<=z.end:re>=m.from&&re>=z.begin)){var Z=U?"before":"after";return new de(s.line,re,Z)}}var me=function(Le,ze,Me){for(var Ye=function(jt,Bn){return Bn?new de(s.line,x(jt,1),"before"):new de(s.line,jt,"after")};Le>=0&&Le<o.length;Le+=ze){var lt=o[Le],Xe=ze>0==(lt.level!=1),kt=Xe?Me.begin:x(Me.end,-1);if(lt.from<=kt&&kt<lt.to||(kt=Xe?lt.from:x(lt.to,-1),Me.begin<=kt&&kt<Me.end))return Ye(kt,Xe)}},ve=me(h+i,i,z);if(ve)return ve;var Ae=i>0?z.end:x(z.begin,-1);return Ae!=null&&!(i>0&&Ae==n.text.length)&&(ve=me(i>0?0:o.length-1,i,S(Ae)),ve)?ve:null}var $o={selectAll:Zi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),_t)},killLine:function(e){return ro(e,function(n){if(n.empty()){var s=Qe(e.doc,n.head.line).text.length;return n.head.ch==s&&n.head.line<e.lastLine()?{from:n.head,to:de(n.head.line+1,0)}:{from:n.head,to:de(n.head.line,s)}}else return{from:n.from(),to:n.to()}})},deleteLine:function(e){return ro(e,function(n){return{from:de(n.from().line,0),to:gt(e.doc,de(n.to().line+1,0))}})},delLineLeft:function(e){return ro(e,function(n){return{from:de(n.from().line,0),to:n.from()}})},delWrappedLineLeft:function(e){return ro(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return{from:i,to:n.from()}})},delWrappedLineRight:function(e){return ro(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div");return{from:n.from(),to:i}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(de(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(de(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(n){return ju(e,n.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(n){return Nu(e,n.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(n){return Mc(e,n.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div")},We)},goLineLeft:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:0,top:s},"div")},We)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return i.ch<e.getLine(i.line).search(/\S/)?Nu(e,n.head):i},We)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("	")},insertSoftTab:function(e){for(var n=[],s=e.listSelections(),i=e.options.tabSize,o=0;o<s.length;o++){var h=s[o].from(),m=Ke(e.getLine(h.line),h.ch,i);n.push(Kt(i-m%i))}e.replaceSelections(n)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=[],i=0;i<n.length;i++)if(n[i].empty()){var o=n[i].head,h=Qe(e.doc,o.line).text;if(h){if(o.ch==h.length&&(o=new de(o.line,o.ch-1)),o.ch>0)o=new de(o.line,o.ch+1),e.replaceRange(h.charAt(o.ch-1)+h.charAt(o.ch-2),de(o.line,o.ch-2),o,"+transpose");else if(o.line>e.doc.first){var m=Qe(e.doc,o.line-1).text;m&&(o=new de(o.line,1),e.replaceRange(h.charAt(0)+e.doc.lineSeparator()+m.charAt(m.length-1),de(o.line-1,m.length-1),o,"+transpose"))}}s.push(new Pt(o,o))}e.setSelections(s)})},newlineAndIndent:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=n.length-1;s>=0;s--)e.replaceRange(e.doc.lineSeparator(),n[s].anchor,n[s].head,"+input");n=e.listSelections();for(var i=0;i<n.length;i++)e.indentLine(n[i].from().line,null,!0);Ws(e)})},openLine:function(e){return e.replaceSelection(`
`,"start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function ju(e,n){var s=Qe(e.doc,n),i=Rt(s);return i!=s&&(n=T(i)),Ll(!0,e,i,n,1)}function Mc(e,n){var s=Qe(e.doc,n),i=ko(s);return i!=s&&(n=T(i)),Ll(!0,e,s,n,-1)}function Nu(e,n){var s=ju(e,n.line),i=Qe(e.doc,s.line),o=xt(i,e.doc.direction);if(!o||o[0].level==0){var h=Math.max(s.ch,i.text.search(/\S/)),m=n.line==s.line&&n.ch<=h&&n.ch;return de(s.line,m?0:h,s.sticky)}return s}function Go(e,n,s){if(typeof n=="string"&&(n=$o[n],!n))return!1;e.display.input.ensurePolled();var i=e.display.shift,o=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),s&&(e.display.shift=!1),o=n(e)!=Gt}finally{e.display.shift=i,e.state.suppressEdits=!1}return o}function Dc(e,n,s){for(var i=0;i<e.state.keyMaps.length;i++){var o=no(n,e.state.keyMaps[i],s,e);if(o)return o}return e.options.extraKeys&&no(n,e.options.extraKeys,s,e)||no(n,e.options.keyMap,s,e)}var zc=new tt;function Yo(e,n,s,i){var o=e.state.keySeq;if(o){if(Su(n))return"handled";if(/\'$/.test(n)?e.state.keySeq=null:zc.set(50,function(){e.state.keySeq==o&&(e.state.keySeq=null,e.display.input.reset())}),Fc(e,o+" "+n,s,i))return!0}return Fc(e,n,s,i)}function Fc(e,n,s,i){var o=Dc(e,n,i);return o=="multi"&&(e.state.keySeq=n),o=="handled"&&Dn(e,"keyHandled",e,n,s),(o=="handled"||o=="multi")&&(wn(s),Fs(e)),!!o}function Eu(e,n){var s=Cu(n,!0);return s?n.shiftKey&&!e.state.keySeq?Yo(e,"Shift-"+s,n,function(i){return Go(e,i,!0)})||Yo(e,s,n,function(i){if(typeof i=="string"?/^go[A-Z]/.test(i):i.motion)return Go(e,i)}):Yo(e,s,n,function(i){return Go(e,i)}):!1}function lp(e,n,s){return Yo(e,"'"+s+"'",n,function(i){return Go(e,i,!0)})}var Lu=null;function Pu(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&(n.curOp.focus=A(De(n)),!Ot(n,e))){k&&E<11&&e.keyCode==27&&(e.returnValue=!1);var s=e.keyCode;n.display.shift=s==16||e.shiftKey;var i=Eu(n,e);ee&&(Lu=i?s:null,!i&&s==88&&!As&&(Y?e.metaKey:e.ctrlKey)&&n.replaceSelection("",null,"cut")),y&&!Y&&!i&&s==46&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),s==18&&!/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className)&&Wc(n)}}function Wc(e){var n=e.display.lineDiv;G(n,"CodeMirror-crosshair");function s(i){(i.keyCode==18||!i.altKey)&&(Te(n,"CodeMirror-crosshair"),Jt(document,"keyup",s),Jt(document,"mouseover",s))}it(document,"keyup",s),it(document,"mouseover",s)}function Au(e){e.keyCode==16&&(this.doc.sel.shift=!1),Ot(this,e)}function za(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&!(Ki(n.display,e)||Ot(n,e)||e.ctrlKey&&!e.altKey||Y&&e.metaKey)){var s=e.keyCode,i=e.charCode;if(ee&&s==Lu){Lu=null,wn(e);return}if(!(ee&&(!e.which||e.which<10)&&Eu(n,e))){var o=String.fromCharCode(i??s);o!="\b"&&(lp(n,e,o)||n.display.input.onKeyPress(e))}}}var up=400,Ru=function(e,n,s){this.time=e,this.pos=n,this.button=s};Ru.prototype.compare=function(e,n,s){return this.time+up>e&&Be(n,this.pos)==0&&s==this.button};var Fa,yr;function Iu(e,n){var s=+new Date;return yr&&yr.compare(s,e,n)?(Fa=yr=null,"triple"):Fa&&Fa.compare(s,e,n)?(yr=new Ru(s,e,n),Fa=null,"double"):(Fa=new Ru(s,e,n),yr=null,"single")}function Wa(e){var n=this,s=n.display;if(!(Ot(n,e)||s.activeTouch&&s.input.supportsTouch())){if(s.input.ensurePolled(),s.shift=e.shiftKey,Ki(s,e)){N||(s.scroller.draggable=!1,setTimeout(function(){return s.scroller.draggable=!0},100));return}if(!Pl(n,e)){var i=fs(n,e),o=En(e),h=i?Iu(i,o):"single";ke(n).focus(),o==1&&n.state.selectingText&&n.state.selectingText(e),!(i&&Hc(n,o,i,h,e))&&(o==1?i?Uc(n,i,h,e):Br(e)==s.scroller&&wn(e):o==2?(i&&Pa(n.doc,i),setTimeout(function(){return s.input.focus()},20)):o==3&&(Ne?n.display.input.onContextMenu(e):fl(n)))}}}function Hc(e,n,s,i,o){var h="Click";return i=="double"?h="Double"+h:i=="triple"&&(h="Triple"+h),h=(n==1?"Left":n==2?"Middle":"Right")+h,Yo(e,_u(h,o),o,function(m){if(typeof m=="string"&&(m=$o[m]),!m)return!1;var x=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),x=m(e,s)!=Gt}finally{e.state.suppressEdits=!1}return x})}function Bc(e,n,s){var i=e.getOption("configureMouse"),o=i?i(e,n,s):{};if(o.unit==null){var h=he?s.shiftKey&&s.metaKey:s.altKey;o.unit=h?"rectangle":n=="single"?"char":n=="double"?"word":"line"}return(o.extend==null||e.doc.extend)&&(o.extend=e.doc.extend||s.shiftKey),o.addNew==null&&(o.addNew=Y?s.metaKey:s.ctrlKey),o.moveOnDrag==null&&(o.moveOnDrag=!(Y?s.altKey:s.ctrlKey)),o}function Uc(e,n,s,i){k?setTimeout(Ie(Cc,e),0):e.curOp.focus=A(De(e));var o=Bc(e,s,i),h=e.doc.sel,m;e.options.dragDrop&&jr&&!e.isReadOnly()&&s=="single"&&(m=h.contains(n))>-1&&(Be((m=h.ranges[m]).from(),n)<0||n.xRel>0)&&(Be(m.to(),n)>0||n.xRel<0)?Ou(e,i,n,o):Mu(e,i,n,o)}function Ou(e,n,s,i){var o=e.display,h=!1,m=pn(e,function(S){N&&(o.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:fl(e)),Jt(o.wrapper.ownerDocument,"mouseup",m),Jt(o.wrapper.ownerDocument,"mousemove",x),Jt(o.scroller,"dragstart",w),Jt(o.scroller,"drop",m),h||(wn(S),i.addNew||Pa(e.doc,s,null,null,i.extend),N&&!H||k&&E==9?setTimeout(function(){o.wrapper.ownerDocument.body.focus({preventScroll:!0}),o.input.focus()},20):o.input.focus())}),x=function(S){h=h||Math.abs(n.clientX-S.clientX)+Math.abs(n.clientY-S.clientY)>=10},w=function(){return h=!0};N&&(o.scroller.draggable=!0),e.state.draggingText=m,m.copy=!i.moveOnDrag,it(o.wrapper.ownerDocument,"mouseup",m),it(o.wrapper.ownerDocument,"mousemove",x),it(o.scroller,"dragstart",w),it(o.scroller,"drop",m),e.state.delayingBlurEvent=!0,setTimeout(function(){return o.input.focus()},20),o.scroller.dragDrop&&o.scroller.dragDrop()}function io(e,n,s){if(s=="char")return new Pt(n,n);if(s=="word")return e.findWordAt(n);if(s=="line")return new Pt(de(n.line,0),gt(e.doc,de(n.line+1,0)));var i=s(e,n);return new Pt(i.from,i.to)}function Mu(e,n,s,i){k&&fl(e);var o=e.display,h=e.doc;wn(n);var m,x,w=h.sel,S=w.ranges;if(i.addNew&&!i.extend?(x=h.sel.contains(s),x>-1?m=S[x]:m=new Pt(s,s)):(m=h.sel.primary(),x=h.sel.primIndex),i.unit=="rectangle")i.addNew||(m=new Pt(s,s)),s=fs(e,n,!0,!0),x=-1;else{var z=io(e,s,i.unit);i.extend?m=Ss(m,z.anchor,z.head,i.extend):m=z}i.addNew?x==-1?(x=S.length,Wn(h,Pr(e,S.concat([m]),x),{scroll:!1,origin:"*mouse"})):S.length>1&&S[x].empty()&&i.unit=="char"&&!i.extend?(Wn(h,Pr(e,S.slice(0,x).concat(S.slice(x+1)),0),{scroll:!1,origin:"*mouse"}),w=h.sel):Do(h,x,m,vt):(x=0,Wn(h,new Yn([m],0),vt),w=h.sel);var U=s;function re(Me){if(Be(U,Me)!=0)if(U=Me,i.unit=="rectangle"){for(var Ye=[],lt=e.options.tabSize,Xe=Ke(Qe(h,s.line).text,s.ch,lt),kt=Ke(Qe(h,Me.line).text,Me.ch,lt),jt=Math.min(Xe,kt),Bn=Math.max(Xe,kt),rn=Math.min(s.line,Me.line),xr=Math.min(e.lastLine(),Math.max(s.line,Me.line));rn<=xr;rn++){var rr=Qe(h,rn).text,vn=rt(rr,jt,lt);jt==Bn?Ye.push(new Pt(de(rn,vn),de(rn,vn))):rr.length>vn&&Ye.push(new Pt(de(rn,vn),de(rn,rt(rr,Bn,lt))))}Ye.length||Ye.push(new Pt(s,s)),Wn(h,Pr(e,w.ranges.slice(0,x).concat(Ye),x),{origin:"*mouse",scroll:!1}),e.scrollIntoView(Me)}else{var br=m,jn=io(e,Me,i.unit),xn=br.anchor,zt;Be(jn.anchor,xn)>0?(zt=jn.head,xn=ai(br.from(),jn.anchor)):(zt=jn.anchor,xn=Sn(br.to(),jn.head));var dt=w.ranges.slice(0);dt[x]=Du(e,new Pt(gt(h,xn),zt)),Wn(h,Pr(e,dt,x),vt)}}var Z=o.wrapper.getBoundingClientRect(),me=0;function ve(Me){var Ye=++me,lt=fs(e,Me,!0,i.unit=="rectangle");if(lt)if(Be(lt,U)!=0){e.curOp.focus=A(De(e)),re(lt);var Xe=ms(o,h);(lt.line>=Xe.to||lt.line<Xe.from)&&setTimeout(pn(e,function(){me==Ye&&ve(Me)}),150)}else{var kt=Me.clientY<Z.top?-20:Me.clientY>Z.bottom?20:0;kt&&setTimeout(pn(e,function(){me==Ye&&(o.scroller.scrollTop+=kt,ve(Me))}),50)}}function Ae(Me){e.state.selectingText=!1,me=1/0,Me&&(wn(Me),o.input.focus()),Jt(o.wrapper.ownerDocument,"mousemove",Le),Jt(o.wrapper.ownerDocument,"mouseup",ze),h.history.lastSelOrigin=null}var Le=pn(e,function(Me){Me.buttons===0||!En(Me)?Ae(Me):ve(Me)}),ze=pn(e,Ae);e.state.selectingText=ze,it(o.wrapper.ownerDocument,"mousemove",Le),it(o.wrapper.ownerDocument,"mouseup",ze)}function Du(e,n){var s=n.anchor,i=n.head,o=Qe(e.doc,s.line);if(Be(s,i)==0&&s.sticky==i.sticky)return n;var h=xt(o);if(!h)return n;var m=ar(h,s.ch,s.sticky),x=h[m];if(x.from!=s.ch&&x.to!=s.ch)return n;var w=m+(x.from==s.ch==(x.level!=1)?0:1);if(w==0||w==h.length)return n;var S;if(i.line!=s.line)S=(i.line-s.line)*(e.doc.direction=="ltr"?1:-1)>0;else{var z=ar(h,i.ch,i.sticky),U=z-m||(i.ch-s.ch)*(x.level==1?-1:1);z==w-1||z==w?S=U<0:S=U>0}var re=h[w+(S?-1:0)],Z=S==(re.level==1),me=Z?re.from:re.to,ve=Z?"after":"before";return s.ch==me&&s.sticky==ve?n:new Pt(new de(s.line,me,ve),i)}function qc(e,n,s,i){var o,h;if(n.touches)o=n.touches[0].clientX,h=n.touches[0].clientY;else try{o=n.clientX,h=n.clientY}catch{return!1}if(o>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;i&&wn(n);var m=e.display,x=m.lineDiv.getBoundingClientRect();if(h>x.bottom||!cn(e,s))return In(n);h-=x.top-m.viewOffset;for(var w=0;w<e.display.gutterSpecs.length;++w){var S=m.gutters.childNodes[w];if(S&&S.getBoundingClientRect().right>=o){var z=B(e.doc,h),U=e.display.gutterSpecs[w];return It(e,s,e,z,U.className,n),In(n)}}}function Pl(e,n){return qc(e,n,"gutterClick",!0)}function zu(e,n){Ki(e.display,n)||Kc(e,n)||Ot(e,n,"contextmenu")||Ne||e.display.input.onContextMenu(n)}function Kc(e,n){return cn(e,"gutterContextMenu")?qc(e,n,"gutterContextMenu",!1):!1}function Fu(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),_o(e)}var so={toString:function(){return"CodeMirror.Init"}},$c={},Zn={};function vr(e){var n=e.optionHandlers;function s(i,o,h,m){e.defaults[i]=o,h&&(n[i]=m?function(x,w,S){S!=so&&h(x,w,S)}:h)}e.defineOption=s,e.Init=so,s("value","",function(i,o){return i.setValue(o)},!0),s("mode",null,function(i,o){i.doc.modeOption=o,xl(i)},!0),s("indentUnit",2,xl,!0),s("indentWithTabs",!1),s("smartIndent",!0),s("tabSize",4,function(i){$s(i),_o(i),er(i)},!0),s("lineSeparator",null,function(i,o){if(i.doc.lineSep=o,!!o){var h=[],m=i.doc.first;i.doc.iter(function(w){for(var S=0;;){var z=w.text.indexOf(o,S);if(z==-1)break;S=z+o.length,h.push(de(m,z))}m++});for(var x=h.length-1;x>=0;x--)Xs(i.doc,o,h[x],de(h[x].line,h[x].ch+o.length))}}),s("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,function(i,o,h){i.state.specialChars=new RegExp(o.source+(o.test("	")?"":"|	"),"g"),h!=so&&i.refresh()}),s("specialCharPlaceholder",Bd,function(i){return i.refresh()},!0),s("electricChars",!0),s("inputStyle",q?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),s("spellcheck",!1,function(i,o){return i.getInputField().spellcheck=o},!0),s("autocorrect",!1,function(i,o){return i.getInputField().autocorrect=o},!0),s("autocapitalize",!1,function(i,o){return i.getInputField().autocapitalize=o},!0),s("rtlMoveVisually",!le),s("wholeLineUpdateBefore",!0),s("theme","default",function(i){Fu(i),Dr(i)},!0),s("keyMap","default",function(i,o,h){var m=js(o),x=h!=so&&js(h);x&&x.detach&&x.detach(i,m),m.attach&&m.attach(i,x||null)}),s("extraKeys",null),s("configureMouse",null),s("lineWrapping",!1,Yc,!0),s("gutters",[],function(i,o){i.display.gutterSpecs=Ro(o,i.options.lineNumbers),Dr(i)},!0),s("fixedGutter",!0,function(i,o){i.display.gutters.style.left=o?jo(i.display)+"px":"0",i.refresh()},!0),s("coverGutterNextToScrollbar",!1,function(i){return Bs(i)},!0),s("scrollbarStyle","native",function(i){yl(i),Bs(i),i.display.scrollbars.setScrollTop(i.doc.scrollTop),i.display.scrollbars.setScrollLeft(i.doc.scrollLeft)},!0),s("lineNumbers",!1,function(i,o){i.display.gutterSpecs=Ro(i.options.gutters,o),Dr(i)},!0),s("firstLineNumber",1,Dr,!0),s("lineNumberFormatter",function(i){return i},Dr,!0),s("showCursorWhenSelecting",!1,Gr,!0),s("resetSelectionOnContextMenu",!0),s("lineWiseCopyCut",!0),s("pasteLinesPerSelection",!0),s("selectionsMayTouch",!1),s("readOnly",!1,function(i,o){o=="nocursor"&&(Ut(i),i.display.input.blur()),i.display.input.readOnlyChanged(o)}),s("screenReaderLabel",null,function(i,o){o=o===""?null:o,i.display.input.screenReaderLabelChanged(o)}),s("disableInput",!1,function(i,o){o||i.display.input.reset()},!0),s("dragDrop",!0,Gc),s("allowDropFileTypes",null),s("cursorBlinkRate",530),s("cursorScrollMargin",0),s("cursorHeight",1,Gr,!0),s("singleCursorHeightPerLine",!0,Gr,!0),s("workTime",100),s("workDelay",100),s("flattenSpans",!0,$s,!0),s("addModeClass",!1,$s,!0),s("pollInterval",100),s("undoDepth",200,function(i,o){return i.doc.history.undoDepth=o}),s("historyEventDelay",1250),s("viewportMargin",10,function(i){return i.refresh()},!0),s("maxHighlightLength",1e4,$s,!0),s("moveInputWithCursor",!0,function(i,o){o||i.display.input.resetPosition()}),s("tabindex",null,function(i,o){return i.display.input.getField().tabIndex=o||""}),s("autofocus",null),s("direction","ltr",function(i,o){return i.doc.setDirection(o)},!0),s("phrases",null)}function Gc(e,n,s){var i=s&&s!=so;if(!n!=!i){var o=e.display.dragFunctions,h=n?it:Jt;h(e.display.scroller,"dragstart",o.start),h(e.display.scroller,"dragenter",o.enter),h(e.display.scroller,"dragover",o.over),h(e.display.scroller,"dragleave",o.leave),h(e.display.scroller,"drop",o.drop)}}function Yc(e){e.options.lineWrapping?(G(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Te(e.display.wrapper,"CodeMirror-wrap"),ua(e)),ya(e),er(e),_o(e),setTimeout(function(){return Bs(e)},100)}function Zt(e,n){var s=this;if(!(this instanceof Zt))return new Zt(e,n);this.options=n=n?Ue(n):{},Ue($c,n,!1);var i=n.value;typeof i=="string"?i=new Mt(i,n.mode,null,n.lineSeparator,n.direction):n.mode&&(i.modeOption=n.mode),this.doc=i;var o=new Zt.inputStyles[n.inputStyle](this),h=this.display=new vl(e,i,o,n);h.wrapper.CodeMirror=this,Fu(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),yl(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new tt,keySeq:null,specialChars:null},n.autofocus&&!q&&h.input.focus(),k&&E<11&&setTimeout(function(){return s.display.input.reset(!0)},20),Vc(this),ku(),xs(this),this.curOp.forceUpdate=!0,nn(this,i),n.autofocus&&!q||this.hasFocus()?setTimeout(function(){s.hasFocus()&&!s.state.focused&&ml(s)},20):Ut(this);for(var m in Zn)Zn.hasOwnProperty(m)&&Zn[m](this,n[m],so);gu(this),n.finishInit&&n.finishInit(this);for(var x=0;x<Al.length;++x)Al[x](this);Yr(this),N&&n.lineWrapping&&getComputedStyle(h.lineDiv).textRendering=="optimizelegibility"&&(h.lineDiv.style.textRendering="auto")}Zt.defaults=$c,Zt.optionHandlers=Zn;function Vc(e){var n=e.display;it(n.scroller,"mousedown",pn(e,Wa)),k&&E<11?it(n.scroller,"dblclick",pn(e,function(w){if(!Ot(e,w)){var S=fs(e,w);if(!(!S||Pl(e,w)||Ki(e.display,w))){wn(w);var z=e.findWordAt(S);Pa(e.doc,z.anchor,z.head)}}})):it(n.scroller,"dblclick",function(w){return Ot(e,w)||wn(w)}),it(n.scroller,"contextmenu",function(w){return zu(e,w)}),it(n.input.getField(),"contextmenu",function(w){n.scroller.contains(w.target)||zu(e,w)});var s,i={end:0};function o(){n.activeTouch&&(s=setTimeout(function(){return n.activeTouch=null},1e3),i=n.activeTouch,i.end=+new Date)}function h(w){if(w.touches.length!=1)return!1;var S=w.touches[0];return S.radiusX<=1&&S.radiusY<=1}function m(w,S){if(S.left==null)return!0;var z=S.left-w.left,U=S.top-w.top;return z*z+U*U>400}it(n.scroller,"touchstart",function(w){if(!Ot(e,w)&&!h(w)&&!Pl(e,w)){n.input.ensurePolled(),clearTimeout(s);var S=+new Date;n.activeTouch={start:S,moved:!1,prev:S-i.end<=300?i:null},w.touches.length==1&&(n.activeTouch.left=w.touches[0].pageX,n.activeTouch.top=w.touches[0].pageY)}}),it(n.scroller,"touchmove",function(){n.activeTouch&&(n.activeTouch.moved=!0)}),it(n.scroller,"touchend",function(w){var S=n.activeTouch;if(S&&!Ki(n,w)&&S.left!=null&&!S.moved&&new Date-S.start<300){var z=e.coordsChar(n.activeTouch,"page"),U;!S.prev||m(S,S.prev)?U=new Pt(z,z):!S.prev.prev||m(S,S.prev.prev)?U=e.findWordAt(z):U=new Pt(de(z.line,0),gt(e.doc,de(z.line+1,0))),e.setSelection(U.anchor,U.head),e.focus(),wn(w)}o()}),it(n.scroller,"touchcancel",o),it(n.scroller,"scroll",function(){n.scroller.clientHeight&&(ys(e,n.scroller.scrollTop),Vi(e,n.scroller.scrollLeft,!0),It(e,"scroll",e))}),it(n.scroller,"mousewheel",function(w){return qs(e,w)}),it(n.scroller,"DOMMouseScroll",function(w){return qs(e,w)}),it(n.wrapper,"scroll",function(){return n.wrapper.scrollTop=n.wrapper.scrollLeft=0}),n.dragFunctions={enter:function(w){Ot(e,w)||ur(w)},over:function(w){Ot(e,w)||(ap(e,w),ur(w))},start:function(w){return Da(e,w)},drop:pn(e,Ma),leave:function(w){Ot(e,w)||Qn(e)}};var x=n.input.getField();it(x,"keyup",function(w){return Au.call(e,w)}),it(x,"keydown",pn(e,Pu)),it(x,"keypress",pn(e,za)),it(x,"focus",function(w){return ml(e,w)}),it(x,"blur",function(w){return Ut(e,w)})}var Al=[];Zt.defineInitHook=function(e){return Al.push(e)};function oo(e,n,s,i){var o=e.doc,h;s==null&&(s="add"),s=="smart"&&(o.mode.indent?h=Et(e,n).state:s="prev");var m=e.options.tabSize,x=Qe(o,n),w=Ke(x.text,null,m);x.stateAfter&&(x.stateAfter=null);var S=x.text.match(/^\s*/)[0],z;if(!i&&!/\S/.test(x.text))z=0,s="not";else if(s=="smart"&&(z=o.mode.indent(h,x.text.slice(S.length),x.text),z==Gt||z>150)){if(!i)return;s="prev"}s=="prev"?n>o.first?z=Ke(Qe(o,n-1).text,null,m):z=0:s=="add"?z=w+e.options.indentUnit:s=="subtract"?z=w-e.options.indentUnit:typeof s=="number"&&(z=w+s),z=Math.max(0,z);var U="",re=0;if(e.options.indentWithTabs)for(var Z=Math.floor(z/m);Z;--Z)re+=m,U+="	";if(re<z&&(U+=Kt(z-re)),U!=S)return Xs(o,U,de(n,0),de(n,S.length),"+input"),x.stateAfter=null,!0;for(var me=0;me<o.sel.ranges.length;me++){var ve=o.sel.ranges[me];if(ve.head.line==n&&ve.head.ch<S.length){var Ae=de(n,S.length);Do(o,me,new Pt(Ae,Ae));break}}}var Qr=null;function Vo(e){Qr=e}function Rl(e,n,s,i,o){var h=e.doc;e.display.shift=!1,i||(i=h.sel);var m=+new Date-200,x=o=="paste"||e.state.pasteIncoming>m,w=cr(n),S=null;if(x&&i.ranges.length>1)if(Qr&&Qr.text.join(`
`)==n){if(i.ranges.length%Qr.text.length==0){S=[];for(var z=0;z<Qr.text.length;z++)S.push(h.splitLines(Qr.text[z]))}}else w.length==i.ranges.length&&e.options.pasteLinesPerSelection&&(S=ht(w,function(Le){return[Le]}));for(var U=e.curOp.updateInput,re=i.ranges.length-1;re>=0;re--){var Z=i.ranges[re],me=Z.from(),ve=Z.to();Z.empty()&&(s&&s>0?me=de(me.line,me.ch-s):e.state.overwrite&&!x?ve=de(ve.line,Math.min(Qe(h,ve.line).text.length,ve.ch+Ge(w).length)):x&&Qr&&Qr.lineWise&&Qr.text.join(`
`)==w.join(`
`)&&(me=ve=de(me.line,0)));var Ae={from:me,to:ve,text:S?S[re%S.length]:w,origin:o||(x?"paste":e.state.cutIncoming>m?"cut":"+input")};Js(e.doc,Ae),Dn(e,"inputRead",e,Ae)}n&&!x&&Il(e,n),Ws(e),e.curOp.updateInput<2&&(e.curOp.updateInput=U),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Wu(e,n){var s=e.clipboardData&&e.clipboardData.getData("Text");if(s)return e.preventDefault(),!n.isReadOnly()&&!n.options.disableInput&&n.hasFocus()&&Ln(n,function(){return Rl(n,s,0,null,"paste")}),!0}function Il(e,n){if(!(!e.options.electricChars||!e.options.smartIndent))for(var s=e.doc.sel,i=s.ranges.length-1;i>=0;i--){var o=s.ranges[i];if(!(o.head.ch>100||i&&s.ranges[i-1].head.line==o.head.line)){var h=e.getModeAt(o.head),m=!1;if(h.electricChars){for(var x=0;x<h.electricChars.length;x++)if(n.indexOf(h.electricChars.charAt(x))>-1){m=oo(e,o.head.line,"smart");break}}else h.electricInput&&h.electricInput.test(Qe(e.doc,o.head.line).text.slice(0,o.head.ch))&&(m=oo(e,o.head.line,"smart"));m&&Dn(e,"electricInput",e,o.head.line)}}}function Ol(e){for(var n=[],s=[],i=0;i<e.doc.sel.ranges.length;i++){var o=e.doc.sel.ranges[i].head.line,h={anchor:de(o,0),head:de(o+1,0)};s.push(h),n.push(e.getRange(h.anchor,h.head))}return{text:n,ranges:s}}function Ml(e,n,s,i){e.setAttribute("autocorrect",s?"on":"off"),e.setAttribute("autocapitalize",i?"on":"off"),e.setAttribute("spellcheck",!!n)}function Dl(){var e=L("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),n=L("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return N?e.style.width="1000px":e.setAttribute("wrap","off"),W&&(e.style.border="1px solid black"),n}function zl(e){var n=e.optionHandlers,s=e.helpers={};e.prototype={constructor:e,focus:function(){ke(this).focus(),this.display.input.focus()},setOption:function(i,o){var h=this.options,m=h[i];h[i]==o&&i!="mode"||(h[i]=o,n.hasOwnProperty(i)&&pn(this,n[i])(this,o,m),It(this,"optionChange",this,i))},getOption:function(i){return this.options[i]},getDoc:function(){return this.doc},addKeyMap:function(i,o){this.state.keyMaps[o?"push":"unshift"](js(i))},removeKeyMap:function(i){for(var o=this.state.keyMaps,h=0;h<o.length;++h)if(o[h]==i||o[h].name==i)return o.splice(h,1),!0},addOverlay:Tn(function(i,o){var h=i.token?i:e.getMode(this.options,i);if(h.startState)throw new Error("Overlays may not be stateful.");ae(this.state.overlays,{mode:h,modeSpec:i,opaque:o&&o.opaque,priority:o&&o.priority||0},function(m){return m.priority}),this.state.modeGen++,er(this)}),removeOverlay:Tn(function(i){for(var o=this.state.overlays,h=0;h<o.length;++h){var m=o[h].modeSpec;if(m==i||typeof i=="string"&&m.name==i){o.splice(h,1),this.state.modeGen++,er(this);return}}}),indentLine:Tn(function(i,o,h){typeof o!="string"&&typeof o!="number"&&(o==null?o=this.options.smartIndent?"smart":"prev":o=o?"add":"subtract"),fe(this.doc,i)&&oo(this,i,o,h)}),indentSelection:Tn(function(i){for(var o=this.doc.sel.ranges,h=-1,m=0;m<o.length;m++){var x=o[m];if(x.empty())x.head.line>h&&(oo(this,x.head.line,i,!0),h=x.head.line,m==this.doc.sel.primIndex&&Ws(this));else{var w=x.from(),S=x.to(),z=Math.max(h,w.line);h=Math.min(this.lastLine(),S.line-(S.ch?0:1))+1;for(var U=z;U<h;++U)oo(this,U,i);var re=this.doc.sel.ranges;w.ch==0&&o.length==re.length&&re[m].from().ch>0&&Do(this.doc,m,new Pt(w,re[m].to()),_t)}}}),getTokenAt:function(i,o){return oa(this,i,o)},getLineTokens:function(i,o){return oa(this,de(i),o,!0)},getTokenTypeAt:function(i){i=gt(this.doc,i);var o=ls(this,Qe(this.doc,i.line)),h=0,m=(o.length-1)/2,x=i.ch,w;if(x==0)w=o[2];else for(;;){var S=h+m>>1;if((S?o[S*2-1]:0)>=x)m=S;else if(o[S*2+1]<x)h=S+1;else{w=o[S*2+2];break}}var z=w?w.indexOf("overlay "):-1;return z<0?w:z==0?null:w.slice(0,z-1)},getModeAt:function(i){var o=this.doc.mode;return o.innerMode?e.innerMode(o,this.getTokenAt(i).state).mode:o},getHelper:function(i,o){return this.getHelpers(i,o)[0]},getHelpers:function(i,o){var h=[];if(!s.hasOwnProperty(o))return h;var m=s[o],x=this.getModeAt(i);if(typeof x[o]=="string")m[x[o]]&&h.push(m[x[o]]);else if(x[o])for(var w=0;w<x[o].length;w++){var S=m[x[o][w]];S&&h.push(S)}else x.helperType&&m[x.helperType]?h.push(m[x.helperType]):m[x.name]&&h.push(m[x.name]);for(var z=0;z<m._global.length;z++){var U=m._global[z];U.pred(x,this)&&$e(h,U.val)==-1&&h.push(U.val)}return h},getStateAfter:function(i,o){var h=this.doc;return i=Za(h,i??h.first+h.size-1),Et(this,i+1,o).state},cursorCoords:function(i,o){var h,m=this.doc.sel.primary();return i==null?h=m.head:typeof i=="object"?h=gt(this.doc,i):h=i?m.from():m.to(),Cn(this,h,o||"page")},charCoords:function(i,o){return ll(this,gt(this.doc,i),o||"page")},coordsChar:function(i,o){return i=Sc(this,i,o||"page"),cl(this,i.left,i.top)},lineAtHeight:function(i,o){return i=Sc(this,{top:i,left:0},o||"page").top,B(this.doc,i+this.display.viewOffset)},heightAtLine:function(i,o,h){var m=!1,x;if(typeof i=="number"){var w=this.doc.first+this.doc.size-1;i<this.doc.first?i=this.doc.first:i>w&&(i=w,m=!0),x=Qe(this.doc,i)}else x=i;return al(this,x,{top:0,left:0},o||"page",h||m).top+(m?this.doc.height-_n(x):0)},defaultTextHeight:function(){return Ci(this.display)},defaultCharWidth:function(){return hs(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(i,o,h,m,x){var w=this.display;i=Cn(this,gt(this.doc,i));var S=i.bottom,z=i.left;if(o.style.position="absolute",o.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(o),w.sizer.appendChild(o),m=="over")S=i.top;else if(m=="above"||m=="near"){var U=Math.max(w.wrapper.clientHeight,this.doc.height),re=Math.max(w.sizer.clientWidth,w.lineSpace.clientWidth);(m=="above"||i.bottom+o.offsetHeight>U)&&i.top>o.offsetHeight?S=i.top-o.offsetHeight:i.bottom+o.offsetHeight<=U&&(S=i.bottom),z+o.offsetWidth>re&&(z=re-o.offsetWidth)}o.style.top=S+"px",o.style.left=o.style.right="",x=="right"?(z=w.sizer.clientWidth-o.offsetWidth,o.style.right="0px"):(x=="left"?z=0:x=="middle"&&(z=(w.sizer.clientWidth-o.offsetWidth)/2),o.style.left=z+"px"),h&&wa(this,{left:z,top:S,right:z+o.offsetWidth,bottom:S+o.offsetHeight})},triggerOnKeyDown:Tn(Pu),triggerOnKeyPress:Tn(za),triggerOnKeyUp:Au,triggerOnMouseDown:Tn(Wa),execCommand:function(i){if($o.hasOwnProperty(i))return $o[i].call(null,this)},triggerElectric:Tn(function(i){Il(this,i)}),findPosH:function(i,o,h,m){var x=1;o<0&&(x=-1,o=-o);for(var w=gt(this.doc,i),S=0;S<o&&(w=Hu(this.doc,w,x,h,m),!w.hitSide);++S);return w},moveH:Tn(function(i,o){var h=this;this.extendSelectionsBy(function(m){return h.display.shift||h.doc.extend||m.empty()?Hu(h.doc,m.head,i,o,h.options.rtlMoveVisually):i<0?m.from():m.to()},We)}),deleteH:Tn(function(i,o){var h=this.doc.sel,m=this.doc;h.somethingSelected()?m.replaceSelection("",null,"+delete"):ro(this,function(x){var w=Hu(m,x.head,i,o,!1);return i<0?{from:w,to:x.head}:{from:x.head,to:w}})}),findPosV:function(i,o,h,m){var x=1,w=m;o<0&&(x=-1,o=-o);for(var S=gt(this.doc,i),z=0;z<o;++z){var U=Cn(this,S,"div");if(w==null?w=U.left:U.left=w,S=Bu(this,U,x,h),S.hitSide)break}return S},moveV:Tn(function(i,o){var h=this,m=this.doc,x=[],w=!this.display.shift&&!m.extend&&m.sel.somethingSelected();if(m.extendSelectionsBy(function(z){if(w)return i<0?z.from():z.to();var U=Cn(h,z.head,"div");z.goalColumn!=null&&(U.left=z.goalColumn),x.push(U.left);var re=Bu(h,U,i,o);return o=="page"&&z==m.sel.primary()&&gs(h,ll(h,re,"div").top-U.top),re},We),x.length)for(var S=0;S<m.sel.ranges.length;S++)m.sel.ranges[S].goalColumn=x[S]}),findWordAt:function(i){var o=this.doc,h=Qe(o,i.line).text,m=i.ch,x=i.ch;if(h){var w=this.getHelper(i,"wordChars");(i.sticky=="before"||x==h.length)&&m?--m:++x;for(var S=h.charAt(m),z=at(S,w)?function(U){return at(U,w)}:/\s/.test(S)?function(U){return/\s/.test(U)}:function(U){return!/\s/.test(U)&&!at(U)};m>0&&z(h.charAt(m-1));)--m;for(;x<h.length&&z(h.charAt(x));)++x}return new Pt(de(i.line,m),de(i.line,x))},toggleOverwrite:function(i){i!=null&&i==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?G(this.display.cursorDiv,"CodeMirror-overwrite"):Te(this.display.cursorDiv,"CodeMirror-overwrite"),It(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==A(De(this))},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:Tn(function(i,o){ka(this,i,o)}),getScrollInfo:function(){var i=this.display.scroller;return{left:i.scrollLeft,top:i.scrollTop,height:i.scrollHeight-ci(this)-this.display.barHeight,width:i.scrollWidth-ci(this)-this.display.barWidth,clientHeight:ps(this),clientWidth:ds(this)}},scrollIntoView:Tn(function(i,o){i==null?(i={from:this.doc.sel.primary().head,to:null},o==null&&(o=this.options.cursorScrollMargin)):typeof i=="number"?i={from:de(i,0),to:null}:i.from==null&&(i={from:i,to:null}),i.to||(i.to=i.from),i.margin=o||0,i.from.line!=null?ip(this,i):_a(this,i.from,i.to,i.margin)}),setSize:Tn(function(i,o){var h=this,m=function(w){return typeof w=="number"||/^\d+$/.test(String(w))?w+"px":w};i!=null&&(this.display.wrapper.style.width=m(i)),o!=null&&(this.display.wrapper.style.height=m(o)),this.options.lineWrapping&&au(this);var x=this.display.viewFrom;this.doc.iter(x,this.display.viewTo,function(w){if(w.widgets){for(var S=0;S<w.widgets.length;S++)if(w.widgets[S].noHScroll){Gi(h,x,"widget");break}}++x}),this.curOp.forceUpdate=!0,It(this,"refresh",this)}),operation:function(i){return Ln(this,i)},startOperation:function(){return xs(this)},endOperation:function(){return Yr(this)},refresh:Tn(function(){var i=this.display.cachedTextHeight;er(this),this.curOp.forceUpdate=!0,_o(this),ka(this,this.doc.scrollLeft,this.doc.scrollTop),tr(this.display),(i==null||Math.abs(i-Ci(this.display))>.5||this.options.lineWrapping)&&ya(this),It(this,"refresh",this)}),swapDoc:Tn(function(i){var o=this.doc;return o.cm=null,this.state.selectingText&&this.state.selectingText(),nn(this,i),_o(this),this.display.input.reset(),ka(this,i.scrollLeft,i.scrollTop),this.curOp.forceScroll=!0,Dn(this,"swapDoc",this,o),o}),phrase:function(i){var o=this.options.phrases;return o&&Object.prototype.hasOwnProperty.call(o,i)?o[i]:i},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},lr(e),e.registerHelper=function(i,o,h){s.hasOwnProperty(i)||(s[i]=e[i]={_global:[]}),s[i][o]=h},e.registerGlobalHelper=function(i,o,h,m){e.registerHelper(i,o,m),s[i]._global.push({pred:h,val:m})}}function Hu(e,n,s,i,o){var h=n,m=s,x=Qe(e,n.line),w=o&&e.direction=="rtl"?-s:s;function S(){var ze=n.line+w;return ze<e.first||ze>=e.first+e.size?!1:(n=new de(ze,n.ch,n.sticky),x=Qe(e,ze))}function z(ze){var Me;if(i=="codepoint"){var Ye=x.text.charCodeAt(n.ch+(s>0?0:-1));if(isNaN(Ye))Me=null;else{var lt=s>0?Ye>=55296&&Ye<56320:Ye>=56320&&Ye<57343;Me=new de(n.line,Math.max(0,Math.min(x.text.length,n.ch+s*(lt?2:1))),-s)}}else o?Me=Tu(e.cm,x,n,s):Me=Ko(x,n,s);if(Me==null)if(!ze&&S())n=Ll(o,e.cm,x,n.line,w);else return!1;else n=Me;return!0}if(i=="char"||i=="codepoint")z();else if(i=="column")z(!0);else if(i=="word"||i=="group")for(var U=null,re=i=="group",Z=e.cm&&e.cm.getHelper(n,"wordChars"),me=!0;!(s<0&&!z(!me));me=!1){var ve=x.text.charAt(n.ch)||`
`,Ae=at(ve,Z)?"w":re&&ve==`
`?"n":!re||/\s/.test(ve)?null:"p";if(re&&!me&&!Ae&&(Ae="s"),U&&U!=Ae){s<0&&(s=1,z(),n.sticky="after");break}if(Ae&&(U=Ae),s>0&&!z(!me))break}var Le=Ra(e,n,h,m,!0);return Tt(h,Le)&&(Le.hitSide=!0),Le}function Bu(e,n,s,i){var o=e.doc,h=n.left,m;if(i=="page"){var x=Math.min(e.display.wrapper.clientHeight,ke(e).innerHeight||o(e).documentElement.clientHeight),w=Math.max(x-.5*Ci(e.display),3);m=(s>0?n.bottom:n.top)+s*w}else i=="line"&&(m=s>0?n.bottom+3:n.top-3);for(var S;S=cl(e,h,m),!!S.outside;){if(s<0?m<=0:m>=o.height){S.hitSide=!0;break}m+=s*5}return S}var Dt=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new tt,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};Dt.prototype.init=function(e){var n=this,s=this,i=s.cm,o=s.div=e.lineDiv;o.contentEditable=!0,Ml(o,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize);function h(x){for(var w=x.target;w;w=w.parentNode){if(w==o)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(w.className))break}return!1}it(o,"paste",function(x){!h(x)||Ot(i,x)||Wu(x,i)||E<=11&&setTimeout(pn(i,function(){return n.updateFromDOM()}),20)}),it(o,"compositionstart",function(x){n.composing={data:x.data,done:!1}}),it(o,"compositionupdate",function(x){n.composing||(n.composing={data:x.data,done:!1})}),it(o,"compositionend",function(x){n.composing&&(x.data!=n.composing.data&&n.readFromDOMSoon(),n.composing.done=!0)}),it(o,"touchstart",function(){return s.forceCompositionEnd()}),it(o,"input",function(){n.composing||n.readFromDOMSoon()});function m(x){if(!(!h(x)||Ot(i,x))){if(i.somethingSelected())Vo({lineWise:!1,text:i.getSelections()}),x.type=="cut"&&i.replaceSelection("",null,"cut");else if(i.options.lineWiseCopyCut){var w=Ol(i);Vo({lineWise:!0,text:w.text}),x.type=="cut"&&i.operation(function(){i.setSelections(w.ranges,0,_t),i.replaceSelection("",null,"cut")})}else return;if(x.clipboardData){x.clipboardData.clearData();var S=Qr.text.join(`
`);if(x.clipboardData.setData("Text",S),x.clipboardData.getData("Text")==S){x.preventDefault();return}}var z=Dl(),U=z.firstChild;Ml(U),i.display.lineSpace.insertBefore(z,i.display.lineSpace.firstChild),U.value=Qr.text.join(`
`);var re=A(qe(o));Q(U),setTimeout(function(){i.display.lineSpace.removeChild(z),re.focus(),re==o&&s.showPrimarySelection()},50)}}it(o,"copy",m),it(o,"cut",m)},Dt.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Dt.prototype.prepareSelection=function(){var e=pl(this.cm,!1);return e.focus=A(qe(this.div))==this.div,e},Dt.prototype.showSelection=function(e,n){!e||!this.cm.display.view.length||((e.focus||n)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Dt.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Dt.prototype.showPrimarySelection=function(){var e=this.getSelection(),n=this.cm,s=n.doc.sel.primary(),i=s.from(),o=s.to();if(n.display.viewTo==n.display.viewFrom||i.line>=n.display.viewTo||o.line<n.display.viewFrom){e.removeAllRanges();return}var h=Ha(n,e.anchorNode,e.anchorOffset),m=Ha(n,e.focusNode,e.focusOffset);if(!(h&&!h.bad&&m&&!m.bad&&Be(ai(h,m),i)==0&&Be(Sn(h,m),o)==0)){var x=n.display.view,w=i.line>=n.display.viewFrom&&Uu(n,i)||{node:x[0].measure.map[2],offset:0},S=o.line<n.display.viewTo&&Uu(n,o);if(!S){var z=x[x.length-1].measure,U=z.maps?z.maps[z.maps.length-1]:z.map;S={node:U[U.length-1],offset:U[U.length-2]-U[U.length-3]}}if(!w||!S){e.removeAllRanges();return}var re=e.rangeCount&&e.getRangeAt(0),Z;try{Z=K(w.node,w.offset,S.offset,S.node)}catch{}Z&&(!y&&n.state.focused?(e.collapse(w.node,w.offset),Z.collapsed||(e.removeAllRanges(),e.addRange(Z))):(e.removeAllRanges(),e.addRange(Z)),re&&e.anchorNode==null?e.addRange(re):y&&this.startGracePeriod()),this.rememberSelection()}},Dt.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Dt.prototype.showMultipleSelections=function(e){ye(this.cm.display.cursorDiv,e.cursors),ye(this.cm.display.selectionDiv,e.selection)},Dt.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Dt.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var n=e.getRangeAt(0).commonAncestorContainer;return j(this.div,n)},Dt.prototype.focus=function(){this.cm.options.readOnly!="nocursor"&&((!this.selectionInEditor()||A(qe(this.div))!=this.div)&&this.showSelection(this.prepareSelection(),!0),this.div.focus())},Dt.prototype.blur=function(){this.div.blur()},Dt.prototype.getField=function(){return this.div},Dt.prototype.supportsTouch=function(){return!0},Dt.prototype.receivedFocus=function(){var e=this,n=this;this.selectionInEditor()?setTimeout(function(){return e.pollSelection()},20):Ln(this.cm,function(){return n.cm.curOp.selectionChanged=!0});function s(){n.cm.state.focused&&(n.pollSelection(),n.polling.set(n.cm.options.pollInterval,s))}this.polling.set(this.cm.options.pollInterval,s)},Dt.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Dt.prototype.pollSelection=function(){if(!(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged())){var e=this.getSelection(),n=this.cm;if(F&&R&&this.cm.display.gutterSpecs.length&&Fl(e.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();return}if(!this.composing){this.rememberSelection();var s=Ha(n,e.anchorNode,e.anchorOffset),i=Ha(n,e.focusNode,e.focusOffset);s&&i&&Ln(n,function(){Wn(n.doc,zn(s,i),_t),(s.bad||i.bad)&&(n.curOp.selectionChanged=!0)})}}},Dt.prototype.pollContent=function(){this.readDOMTimeout!=null&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e=this.cm,n=e.display,s=e.doc.sel.primary(),i=s.from(),o=s.to();if(i.ch==0&&i.line>e.firstLine()&&(i=de(i.line-1,Qe(e.doc,i.line-1).length)),o.ch==Qe(e.doc,o.line).text.length&&o.line<e.lastLine()&&(o=de(o.line+1,0)),i.line<n.viewFrom||o.line>n.viewTo-1)return!1;var h,m,x;i.line==n.viewFrom||(h=Ti(e,i.line))==0?(m=T(n.view[0].line),x=n.view[0].node):(m=T(n.view[h].line),x=n.view[h-1].node.nextSibling);var w=Ti(e,o.line),S,z;if(w==n.view.length-1?(S=n.viewTo-1,z=n.lineDiv.lastChild):(S=T(n.view[w+1].line)-1,z=n.view[w+1].node.previousSibling),!x)return!1;for(var U=e.doc.splitLines(cp(e,x,z,m,S)),re=oi(e.doc,de(m,0),de(S,Qe(e.doc,S).text.length));U.length>1&&re.length>1;)if(Ge(U)==Ge(re))U.pop(),re.pop(),S--;else if(U[0]==re[0])U.shift(),re.shift(),m++;else break;for(var Z=0,me=0,ve=U[0],Ae=re[0],Le=Math.min(ve.length,Ae.length);Z<Le&&ve.charCodeAt(Z)==Ae.charCodeAt(Z);)++Z;for(var ze=Ge(U),Me=Ge(re),Ye=Math.min(ze.length-(U.length==1?Z:0),Me.length-(re.length==1?Z:0));me<Ye&&ze.charCodeAt(ze.length-me-1)==Me.charCodeAt(Me.length-me-1);)++me;if(U.length==1&&re.length==1&&m==i.line)for(;Z&&Z>i.ch&&ze.charCodeAt(ze.length-me-1)==Me.charCodeAt(Me.length-me-1);)Z--,me++;U[U.length-1]=ze.slice(0,ze.length-me).replace(/^\u200b+/,""),U[0]=U[0].slice(Z).replace(/\u200b+$/,"");var lt=de(m,Z),Xe=de(S,re.length?Ge(re).length-me:0);if(U.length>1||U[0]||Be(lt,Xe))return Xs(e.doc,U,lt,Xe,"+input"),!0},Dt.prototype.ensurePolled=function(){this.forceCompositionEnd()},Dt.prototype.reset=function(){this.forceCompositionEnd()},Dt.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Dt.prototype.readFromDOMSoon=function(){var e=this;this.readDOMTimeout==null&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing)if(e.composing.done)e.composing=null;else return;e.updateFromDOM()},80))},Dt.prototype.updateFromDOM=function(){var e=this;(this.cm.isReadOnly()||!this.pollContent())&&Ln(this.cm,function(){return er(e.cm)})},Dt.prototype.setUneditable=function(e){e.contentEditable="false"},Dt.prototype.onKeyPress=function(e){e.charCode==0||this.composing||(e.preventDefault(),this.cm.isReadOnly()||pn(this.cm,Rl)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0))},Dt.prototype.readOnlyChanged=function(e){this.div.contentEditable=String(e!="nocursor")},Dt.prototype.onContextMenu=function(){},Dt.prototype.resetPosition=function(){},Dt.prototype.needsContentAttribute=!0;function Uu(e,n){var s=sl(e,n.line);if(!s||s.hidden)return null;var i=Qe(e.doc,n.line),o=xc(s,i,n.line),h=xt(i,e.doc.direction),m="left";if(h){var x=ar(h,n.ch);m=x%2?"right":"left"}var w=ma(o.map,n.ch,m);return w.offset=w.collapse=="right"?w.end:w.start,w}function Fl(e){for(var n=e;n;n=n.parentNode)if(/CodeMirror-gutter-wrapper/.test(n.className))return!0;return!1}function Ar(e,n){return n&&(e.bad=!0),e}function cp(e,n,s,i,o){var h="",m=!1,x=e.doc.lineSeparator(),w=!1;function S(Z){return function(me){return me.id==Z}}function z(){m&&(h+=x,w&&(h+=x),m=w=!1)}function U(Z){Z&&(z(),h+=Z)}function re(Z){if(Z.nodeType==1){var me=Z.getAttribute("cm-text");if(me){U(me);return}var ve=Z.getAttribute("cm-marker"),Ae;if(ve){var Le=e.findMarks(de(i,0),de(o+1,0),S(+ve));Le.length&&(Ae=Le[0].find(0))&&U(oi(e.doc,Ae.from,Ae.to).join(x));return}if(Z.getAttribute("contenteditable")=="false")return;var ze=/^(pre|div|p|li|table|br)$/i.test(Z.nodeName);if(!/^br$/i.test(Z.nodeName)&&Z.textContent.length==0)return;ze&&z();for(var Me=0;Me<Z.childNodes.length;Me++)re(Z.childNodes[Me]);/^(pre|p)$/i.test(Z.nodeName)&&(w=!0),ze&&(m=!0)}else Z.nodeType==3&&U(Z.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;re(n),n!=s;)n=n.nextSibling,w=!1;return h}function Ha(e,n,s){var i;if(n==e.display.lineDiv){if(i=e.display.lineDiv.childNodes[s],!i)return Ar(e.clipPos(de(e.display.viewTo-1)),!0);n=null,s=0}else for(i=n;;i=i.parentNode){if(!i||i==e.display.lineDiv)return null;if(i.parentNode&&i.parentNode==e.display.lineDiv)break}for(var o=0;o<e.display.view.length;o++){var h=e.display.view[o];if(h.node==i)return qu(h,n,s)}}function qu(e,n,s){var i=e.text.firstChild,o=!1;if(!n||!j(i,n))return Ar(de(T(e.line),0),!0);if(n==i&&(o=!0,n=i.childNodes[s],s=0,!n)){var h=e.rest?Ge(e.rest):e.line;return Ar(de(T(h),h.text.length),o)}var m=n.nodeType==3?n:null,x=n;for(!m&&n.childNodes.length==1&&n.firstChild.nodeType==3&&(m=n.firstChild,s&&(s=m.nodeValue.length));x.parentNode!=i;)x=x.parentNode;var w=e.measure,S=w.maps;function z(Ae,Le,ze){for(var Me=-1;Me<(S?S.length:0);Me++)for(var Ye=Me<0?w.map:S[Me],lt=0;lt<Ye.length;lt+=3){var Xe=Ye[lt+2];if(Xe==Ae||Xe==Le){var kt=T(Me<0?e.line:e.rest[Me]),jt=Ye[lt]+ze;return(ze<0||Xe!=Ae)&&(jt=Ye[lt+(ze?1:0)]),de(kt,jt)}}}var U=z(m,x,s);if(U)return Ar(U,o);for(var re=x.nextSibling,Z=m?m.nodeValue.length-s:0;re;re=re.nextSibling){if(U=z(re,re.firstChild,0),U)return Ar(de(U.line,U.ch-Z),o);Z+=re.textContent.length}for(var me=x.previousSibling,ve=s;me;me=me.previousSibling){if(U=z(me,me.firstChild,-1),U)return Ar(de(U.line,U.ch+ve),o);ve+=me.textContent.length}}var fn=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new tt,this.hasSelection=!1,this.composing=null,this.resetting=!1};fn.prototype.init=function(e){var n=this,s=this,i=this.cm;this.createField(e);var o=this.textarea;e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),W&&(o.style.width="0px"),it(o,"input",function(){k&&E>=9&&n.hasSelection&&(n.hasSelection=null),s.poll()}),it(o,"paste",function(m){Ot(i,m)||Wu(m,i)||(i.state.pasteIncoming=+new Date,s.fastPoll())});function h(m){if(!Ot(i,m)){if(i.somethingSelected())Vo({lineWise:!1,text:i.getSelections()});else if(i.options.lineWiseCopyCut){var x=Ol(i);Vo({lineWise:!0,text:x.text}),m.type=="cut"?i.setSelections(x.ranges,null,_t):(s.prevInput="",o.value=x.text.join(`
`),Q(o))}else return;m.type=="cut"&&(i.state.cutIncoming=+new Date)}}it(o,"cut",h),it(o,"copy",h),it(e.scroller,"paste",function(m){if(!(Ki(e,m)||Ot(i,m))){if(!o.dispatchEvent){i.state.pasteIncoming=+new Date,s.focus();return}var x=new Event("paste");x.clipboardData=m.clipboardData,o.dispatchEvent(x)}}),it(e.lineSpace,"selectstart",function(m){Ki(e,m)||wn(m)}),it(o,"compositionstart",function(){var m=i.getCursor("from");s.composing&&s.composing.range.clear(),s.composing={start:m,range:i.markText(m,i.getCursor("to"),{className:"CodeMirror-composing"})}}),it(o,"compositionend",function(){s.composing&&(s.poll(),s.composing.range.clear(),s.composing=null)})},fn.prototype.createField=function(e){this.wrapper=Dl(),this.textarea=this.wrapper.firstChild;var n=this.cm.options;Ml(this.textarea,n.spellcheck,n.autocorrect,n.autocapitalize)},fn.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},fn.prototype.prepareSelection=function(){var e=this.cm,n=e.display,s=e.doc,i=pl(e);if(e.options.moveInputWithCursor){var o=Cn(e,s.sel.primary().head,"div"),h=n.wrapper.getBoundingClientRect(),m=n.lineDiv.getBoundingClientRect();i.teTop=Math.max(0,Math.min(n.wrapper.clientHeight-10,o.top+m.top-h.top)),i.teLeft=Math.max(0,Math.min(n.wrapper.clientWidth-10,o.left+m.left-h.left))}return i},fn.prototype.showSelection=function(e){var n=this.cm,s=n.display;ye(s.cursorDiv,e.cursors),ye(s.selectionDiv,e.selection),e.teTop!=null&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},fn.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var n=this.cm;if(this.resetting=!0,n.somethingSelected()){this.prevInput="";var s=n.getSelection();this.textarea.value=s,n.state.focused&&Q(this.textarea),k&&E>=9&&(this.hasSelection=s)}else e||(this.prevInput=this.textarea.value="",k&&E>=9&&(this.hasSelection=null));this.resetting=!1}},fn.prototype.getField=function(){return this.textarea},fn.prototype.supportsTouch=function(){return!1},fn.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!q||A(qe(this.textarea))!=this.textarea))try{this.textarea.focus()}catch{}},fn.prototype.blur=function(){this.textarea.blur()},fn.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},fn.prototype.receivedFocus=function(){this.slowPoll()},fn.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},fn.prototype.fastPoll=function(){var e=!1,n=this;n.pollingFast=!0;function s(){var i=n.poll();!i&&!e?(e=!0,n.polling.set(60,s)):(n.pollingFast=!1,n.slowPoll())}n.polling.set(20,s)},fn.prototype.poll=function(){var e=this,n=this.cm,s=this.textarea,i=this.prevInput;if(this.contextMenuPending||this.resetting||!n.state.focused||Kr(s)&&!i&&!this.composing||n.isReadOnly()||n.options.disableInput||n.state.keySeq)return!1;var o=s.value;if(o==i&&!n.somethingSelected())return!1;if(k&&E>=9&&this.hasSelection===o||Y&&/[\uf700-\uf7ff]/.test(o))return n.display.input.reset(),!1;if(n.doc.sel==n.display.selForContextMenu){var h=o.charCodeAt(0);if(h==8203&&!i&&(i="​"),h==8666)return this.reset(),this.cm.execCommand("undo")}for(var m=0,x=Math.min(i.length,o.length);m<x&&i.charCodeAt(m)==o.charCodeAt(m);)++m;return Ln(n,function(){Rl(n,o.slice(m),i.length-m,null,e.composing?"*compose":null),o.length>1e3||o.indexOf(`
`)>-1?s.value=e.prevInput="":e.prevInput=o,e.composing&&(e.composing.range.clear(),e.composing.range=n.markText(e.composing.start,n.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},fn.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},fn.prototype.onKeyPress=function(){k&&E>=9&&(this.hasSelection=null),this.fastPoll()},fn.prototype.onContextMenu=function(e){var n=this,s=n.cm,i=s.display,o=n.textarea;n.contextMenuPending&&n.contextMenuPending();var h=fs(s,e),m=i.scroller.scrollTop;if(!h||ee)return;var x=s.options.resetSelectionOnContextMenu;x&&s.doc.sel.contains(h)==-1&&pn(s,Wn)(s.doc,zn(h),_t);var w=o.style.cssText,S=n.wrapper.style.cssText,z=n.wrapper.offsetParent.getBoundingClientRect();n.wrapper.style.cssText="position: static",o.style.cssText=`position: absolute; width: 30px; height: 30px;
      top: `+(e.clientY-z.top-5)+"px; left: "+(e.clientX-z.left-5)+`px;
      z-index: 1000; background: `+(k?"rgba(255, 255, 255, .05)":"transparent")+`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;var U;N&&(U=o.ownerDocument.defaultView.scrollY),i.input.focus(),N&&o.ownerDocument.defaultView.scrollTo(null,U),i.input.reset(),s.somethingSelected()||(o.value=n.prevInput=" "),n.contextMenuPending=Z,i.selForContextMenu=s.doc.sel,clearTimeout(i.detectingSelectAll);function re(){if(o.selectionStart!=null){var ve=s.somethingSelected(),Ae="​"+(ve?o.value:"");o.value="⇚",o.value=Ae,n.prevInput=ve?"":"​",o.selectionStart=1,o.selectionEnd=Ae.length,i.selForContextMenu=s.doc.sel}}function Z(){if(n.contextMenuPending==Z&&(n.contextMenuPending=!1,n.wrapper.style.cssText=S,o.style.cssText=w,k&&E<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=m),o.selectionStart!=null)){(!k||k&&E<9)&&re();var ve=0,Ae=function(){i.selForContextMenu==s.doc.sel&&o.selectionStart==0&&o.selectionEnd>0&&n.prevInput=="​"?pn(s,Zi)(s):ve++<10?i.detectingSelectAll=setTimeout(Ae,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(Ae,200)}}if(k&&E>=9&&re(),Ne){ur(e);var me=function(){Jt(window,"mouseup",me),setTimeout(Z,20)};it(window,"mouseup",me)}else setTimeout(Z,50)},fn.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled=e=="nocursor",this.textarea.readOnly=!!e},fn.prototype.setUneditable=function(){},fn.prototype.needsContentAttribute=!1;function Jc(e,n){if(n=n?Ue(n):{},n.value=e.value,!n.tabindex&&e.tabIndex&&(n.tabindex=e.tabIndex),!n.placeholder&&e.placeholder&&(n.placeholder=e.placeholder),n.autofocus==null){var s=A(qe(e));n.autofocus=s==e||e.getAttribute("autofocus")!=null&&s==document.body}function i(){e.value=x.getValue()}var o;if(e.form&&(it(e.form,"submit",i),!n.leaveSubmitMethodAlone)){var h=e.form;o=h.submit;try{var m=h.submit=function(){i(),h.submit=o,h.submit(),h.submit=m}}catch{}}n.finishInit=function(w){w.save=i,w.getTextArea=function(){return e},w.toTextArea=function(){w.toTextArea=isNaN,i(),e.parentNode.removeChild(w.getWrapperElement()),e.style.display="",e.form&&(Jt(e.form,"submit",i),!n.leaveSubmitMethodAlone&&typeof e.form.submit=="function"&&(e.form.submit=o))}},e.style.display="none";var x=Zt(function(w){return e.parentNode.insertBefore(w,e.nextSibling)},n);return x}function Ba(e){e.off=Jt,e.on=it,e.wheelEventPixels=ws,e.Doc=Mt,e.splitLines=cr,e.countColumn=Ke,e.findColumn=rt,e.isWordChar=Je,e.Pass=Gt,e.signal=It,e.Line=Si,e.changeEnd=Fn,e.scrollbarModel=Nc,e.Pos=de,e.cmpPos=Be,e.modes=Rr,e.mimeModes=Ir,e.resolveMode=Er,e.getMode=Fi,e.modeExtensions=si,e.extendMode=bi,e.copyState=At,e.startState=wi,e.innerMode=as,e.commands=$o,e.keyMap=Ii,e.keyName=Cu,e.isModifierKey=Su,e.lookupKey=no,e.normalizeKeyMap=Oc,e.StringStream=Xt,e.SharedTextMarker=Zs,e.TextMarker=gi,e.LineWidget=Ai,e.e_preventDefault=wn,e.e_stopPropagation=ri,e.e_stop=ur,e.addClass=G,e.contains=j,e.rmClass=Te,e.keyNames=Xr}vr(Zt),zl(Zt);var nr="iter insert remove copy getEditor constructor".split(" ");for(var Wl in Mt.prototype)Mt.prototype.hasOwnProperty(Wl)&&$e(nr,Wl)<0&&(Zt.prototype[Wl]=(function(e){return function(){return e.apply(this.doc,arguments)}})(Mt.prototype[Wl]));return lr(Mt),Zt.inputStyles={textarea:fn,contenteditable:Dt},Zt.defineMode=function(e){!Zt.defaults.mode&&e!="null"&&(Zt.defaults.mode=e),Nr.apply(this,arguments)},Zt.defineMIME=Bt,Zt.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),Zt.defineMIME("text/plain","null"),Zt.defineExtension=function(e,n){Zt.prototype[e]=n},Zt.defineDocExtension=function(e,n){Mt.prototype[e]=n},Zt.fromTextArea=Jc,Ba(Zt),Zt.version="5.65.21",Zt}))})(xd)),xd.exports}var Kx=os();const _f=Qf(Kx);var Cf={exports:{}},Tf;function $x(){return Tf||(Tf=1,(function(l,u){(function(p){p(os())})(function(p){function g(E){return new RegExp("^(("+E.join(")|(")+"))\\b")}var y=g(["and","or","not","is"]),b=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],_=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];p.registerHelper("hintWords","python",b.concat(_).concat(["exec","print"]));function C(E){return E.scopes[E.scopes.length-1]}p.defineMode("python",function(E,N){for(var I="error",R=N.delimiters||N.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,V=[N.singleOperators,N.doubleOperators,N.doubleDelimiters,N.tripleDelimiters,N.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],ee=0;ee<V.length;ee++)V[ee]||V.splice(ee--,1);var H=N.hangingIndent||E.indentUnit,oe=b,D=_;N.extra_keywords!=null&&(oe=oe.concat(N.extra_keywords)),N.extra_builtins!=null&&(D=D.concat(N.extra_builtins));var W=!(N.version&&Number(N.version)<3);if(W){var F=N.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;oe=oe.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),D=D.concat(["ascii","bytes","exec","print"]);var q=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var F=N.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;oe=oe.concat(["exec","print"]),D=D.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var q=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var Y=g(oe),he=g(D);function le(J,K){var j=J.sol()&&K.lastToken!="\\";if(j&&(K.indent=J.indentation()),j&&C(K).type=="py"){var A=C(K).offset;if(J.eatSpace()){var G=J.indentation();return G>A?ie(K):G<A&&se(J,K)&&J.peek()!="#"&&(K.errorToken=!0),null}else{var M=we(J,K);return A>0&&se(J,K)&&(M+=" "+I),M}}return we(J,K)}function we(J,K,j){if(J.eatSpace())return null;if(!j&&J.match(/^#.*/))return"comment";if(J.match(/^[0-9\.]/,!1)){var A=!1;if(J.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(A=!0),J.match(/^[\d_]+\.\d*/)&&(A=!0),J.match(/^\.\d+/)&&(A=!0),A)return J.eat(/J/i),"number";var G=!1;if(J.match(/^0x[0-9a-f_]+/i)&&(G=!0),J.match(/^0b[01_]+/i)&&(G=!0),J.match(/^0o[0-7_]+/i)&&(G=!0),J.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(J.eat(/J/i),G=!0),J.match(/^0(?![\dx])/i)&&(G=!0),G)return J.eat(/L/i),"number"}if(J.match(q)){var M=J.current().toLowerCase().indexOf("f")!==-1;return M?(K.tokenize=He(J.current(),K.tokenize),K.tokenize(J,K)):(K.tokenize=Ne(J.current(),K.tokenize),K.tokenize(J,K))}for(var Q=0;Q<V.length;Q++)if(J.match(V[Q]))return"operator";return J.match(R)?"punctuation":K.lastToken=="."&&J.match(F)?"property":J.match(Y)||J.match(y)?"keyword":J.match(he)?"builtin":J.match(/^(self|cls)\b/)?"variable-2":J.match(F)?K.lastToken=="def"||K.lastToken=="class"?"def":"variable":(J.next(),j?null:I)}function He(J,K){for(;"rubf".indexOf(J.charAt(0).toLowerCase())>=0;)J=J.substr(1);var j=J.length==1,A="string";function G(Q){return function(Se,De){var qe=we(Se,De,!0);return qe=="punctuation"&&(Se.current()=="{"?De.tokenize=G(Q+1):Se.current()=="}"&&(Q>1?De.tokenize=G(Q-1):De.tokenize=M)),qe}}function M(Q,Se){for(;!Q.eol();)if(Q.eatWhile(/[^'"\{\}\\]/),Q.eat("\\")){if(Q.next(),j&&Q.eol())return A}else{if(Q.match(J))return Se.tokenize=K,A;if(Q.match("{{"))return A;if(Q.match("{",!1))return Se.tokenize=G(0),Q.current()?A:Se.tokenize(Q,Se);if(Q.match("}}"))return A;if(Q.match("}"))return I;Q.eat(/['"]/)}if(j){if(N.singleLineStringErrors)return I;Se.tokenize=K}return A}return M.isString=!0,M}function Ne(J,K){for(;"rubf".indexOf(J.charAt(0).toLowerCase())>=0;)J=J.substr(1);var j=J.length==1,A="string";function G(M,Q){for(;!M.eol();)if(M.eatWhile(/[^'"\\]/),M.eat("\\")){if(M.next(),j&&M.eol())return A}else{if(M.match(J))return Q.tokenize=K,A;M.eat(/['"]/)}if(j){if(N.singleLineStringErrors)return I;Q.tokenize=K}return A}return G.isString=!0,G}function ie(J){for(;C(J).type!="py";)J.scopes.pop();J.scopes.push({offset:C(J).offset+E.indentUnit,type:"py",align:null})}function Te(J,K,j){var A=J.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:J.column()+1;K.scopes.push({offset:K.indent+H,type:j,align:A})}function se(J,K){for(var j=J.indentation();K.scopes.length>1&&C(K).offset>j;){if(C(K).type!="py")return!0;K.scopes.pop()}return C(K).offset!=j}function ye(J,K){J.sol()&&(K.beginningOfLine=!0,K.dedent=!1);var j=K.tokenize(J,K),A=J.current();if(K.beginningOfLine&&A=="@")return J.match(F,!1)?"meta":W?"operator":I;if(/\S/.test(A)&&(K.beginningOfLine=!1),(j=="variable"||j=="builtin")&&K.lastToken=="meta"&&(j="meta"),(A=="pass"||A=="return")&&(K.dedent=!0),A=="lambda"&&(K.lambda=!0),A==":"&&!K.lambda&&C(K).type=="py"&&J.match(/^\s*(?:#|$)/,!1)&&ie(K),A.length==1&&!/string|comment/.test(j)){var G="[({".indexOf(A);if(G!=-1&&Te(J,K,"])}".slice(G,G+1)),G="])}".indexOf(A),G!=-1)if(C(K).type==A)K.indent=K.scopes.pop().offset-H;else return I}return K.dedent&&J.eol()&&C(K).type=="py"&&K.scopes.length>1&&K.scopes.pop(),j}var L={startState:function(J){return{tokenize:le,scopes:[{offset:J||0,type:"py",align:null}],indent:J||0,lastToken:null,lambda:!1,dedent:0}},token:function(J,K){var j=K.errorToken;j&&(K.errorToken=!1);var A=ye(J,K);return A&&A!="comment"&&(K.lastToken=A=="keyword"||A=="punctuation"?J.current():A),A=="punctuation"&&(A=null),J.eol()&&K.lambda&&(K.lambda=!1),j?A+" "+I:A},indent:function(J,K){if(J.tokenize!=le)return J.tokenize.isString?p.Pass:0;var j=C(J),A=j.type==K.charAt(0)||j.type=="py"&&!J.dedent&&/^(else:|elif |except |finally:)/.test(K);return j.align!=null?j.align-(A?1:0):j.offset-(A?H:0)},electricInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,closeBrackets:{triples:`'"`},lineComment:"#",fold:"indent"};return L}),p.defineMIME("text/x-python","python");var k=function(E){return E.split(" ")};p.defineMIME("text/x-cython",{name:"python",extra_keywords:k("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})})})()),Cf.exports}$x();var jf={exports:{}},Nf;function jm(){return Nf||(Nf=1,(function(l,u){(function(p){p(os())})(function(p){p.defineMode("javascript",function(g,y){var b=g.indentUnit,_=y.statementIndent,C=y.jsonld,k=y.json||C,E=y.trackScope!==!1,N=y.typescript,I=y.wordCharacters||/[\w$\xa1-\uffff]/,R=(function(){function T(en){return{type:en,style:"keyword"}}var B=T("keyword a"),fe=T("keyword b"),Ee=T("keyword c"),de=T("keyword d"),Be=T("operator"),Tt={type:"atom",style:"atom"};return{if:T("if"),while:B,with:B,else:fe,do:fe,try:fe,finally:fe,return:de,break:de,continue:de,new:T("new"),delete:Ee,void:Ee,throw:Ee,debugger:T("debugger"),var:T("var"),const:T("var"),let:T("var"),function:T("function"),catch:T("catch"),for:T("for"),switch:T("switch"),case:T("case"),default:T("default"),in:Be,typeof:Be,instanceof:Be,true:Tt,false:Tt,null:Tt,undefined:Tt,NaN:Tt,Infinity:Tt,this:T("this"),class:T("class"),super:T("atom"),yield:Ee,export:T("export"),import:T("import"),extends:Ee,await:Ee}})(),V=/[+\-*&%=<>!?|~^@]/,ee=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function H(T){for(var B=!1,fe,Ee=!1;(fe=T.next())!=null;){if(!B){if(fe=="/"&&!Ee)return;fe=="["?Ee=!0:Ee&&fe=="]"&&(Ee=!1)}B=!B&&fe=="\\"}}var oe,D;function W(T,B,fe){return oe=T,D=fe,B}function F(T,B){var fe=T.next();if(fe=='"'||fe=="'")return B.tokenize=q(fe),B.tokenize(T,B);if(fe=="."&&T.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return W("number","number");if(fe=="."&&T.match(".."))return W("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(fe))return W(fe);if(fe=="="&&T.eat(">"))return W("=>","operator");if(fe=="0"&&T.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return W("number","number");if(/\d/.test(fe))return T.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),W("number","number");if(fe=="/")return T.eat("*")?(B.tokenize=Y,Y(T,B)):T.eat("/")?(T.skipToEnd(),W("comment","comment")):On(T,B,1)?(H(T),T.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),W("regexp","string-2")):(T.eat("="),W("operator","operator",T.current()));if(fe=="`")return B.tokenize=he,he(T,B);if(fe=="#"&&T.peek()=="!")return T.skipToEnd(),W("meta","meta");if(fe=="#"&&T.eatWhile(I))return W("variable","property");if(fe=="<"&&T.match("!--")||fe=="-"&&T.match("->")&&!/\S/.test(T.string.slice(0,T.start)))return T.skipToEnd(),W("comment","comment");if(V.test(fe))return(fe!=">"||!B.lexical||B.lexical.type!=">")&&(T.eat("=")?(fe=="!"||fe=="=")&&T.eat("="):/[<>*+\-|&?]/.test(fe)&&(T.eat(fe),fe==">"&&T.eat(fe))),fe=="?"&&T.eat(".")?W("."):W("operator","operator",T.current());if(I.test(fe)){T.eatWhile(I);var Ee=T.current();if(B.lastType!="."){if(R.propertyIsEnumerable(Ee)){var de=R[Ee];return W(de.type,de.style,Ee)}if(Ee=="async"&&T.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return W("async","keyword",Ee)}return W("variable","variable",Ee)}}function q(T){return function(B,fe){var Ee=!1,de;if(C&&B.peek()=="@"&&B.match(ee))return fe.tokenize=F,W("jsonld-keyword","meta");for(;(de=B.next())!=null&&!(de==T&&!Ee);)Ee=!Ee&&de=="\\";return Ee||(fe.tokenize=F),W("string","string")}}function Y(T,B){for(var fe=!1,Ee;Ee=T.next();){if(Ee=="/"&&fe){B.tokenize=F;break}fe=Ee=="*"}return W("comment","comment")}function he(T,B){for(var fe=!1,Ee;(Ee=T.next())!=null;){if(!fe&&(Ee=="`"||Ee=="$"&&T.eat("{"))){B.tokenize=F;break}fe=!fe&&Ee=="\\"}return W("quasi","string-2",T.current())}var le="([{}])";function we(T,B){B.fatArrowAt&&(B.fatArrowAt=null);var fe=T.string.indexOf("=>",T.start);if(!(fe<0)){if(N){var Ee=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(T.string.slice(T.start,fe));Ee&&(fe=Ee.index)}for(var de=0,Be=!1,Tt=fe-1;Tt>=0;--Tt){var en=T.string.charAt(Tt),Sn=le.indexOf(en);if(Sn>=0&&Sn<3){if(!de){++Tt;break}if(--de==0){en=="("&&(Be=!0);break}}else if(Sn>=3&&Sn<6)++de;else if(I.test(en))Be=!0;else if(/["'\/`]/.test(en))for(;;--Tt){if(Tt==0)return;var ai=T.string.charAt(Tt-1);if(ai==en&&T.string.charAt(Tt-2)!="\\"){Tt--;break}}else if(Be&&!de){++Tt;break}}Be&&!de&&(B.fatArrowAt=Tt)}}var He={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function Ne(T,B,fe,Ee,de,Be){this.indented=T,this.column=B,this.type=fe,this.prev=de,this.info=Be,Ee!=null&&(this.align=Ee)}function ie(T,B){if(!E)return!1;for(var fe=T.localVars;fe;fe=fe.next)if(fe.name==B)return!0;for(var Ee=T.context;Ee;Ee=Ee.prev)for(var fe=Ee.vars;fe;fe=fe.next)if(fe.name==B)return!0}function Te(T,B,fe,Ee,de){var Be=T.cc;for(se.state=T,se.stream=de,se.marked=null,se.cc=Be,se.style=B,T.lexical.hasOwnProperty("align")||(T.lexical.align=!0);;){var Tt=Be.length?Be.pop():k?$e:Ke;if(Tt(fe,Ee)){for(;Be.length&&Be[Be.length-1].lex;)Be.pop()();return se.marked?se.marked:fe=="variable"&&ie(T,Ee)?"variable-2":B}}}var se={state:null,marked:null,cc:null};function ye(){for(var T=arguments.length-1;T>=0;T--)se.cc.push(arguments[T])}function L(){return ye.apply(null,arguments),!0}function J(T,B){for(var fe=B;fe;fe=fe.next)if(fe.name==T)return!0;return!1}function K(T){var B=se.state;if(se.marked="def",!!E){if(B.context){if(B.lexical.info=="var"&&B.context&&B.context.block){var fe=j(T,B.context);if(fe!=null){B.context=fe;return}}else if(!J(T,B.localVars)){B.localVars=new M(T,B.localVars);return}}y.globalVars&&!J(T,B.globalVars)&&(B.globalVars=new M(T,B.globalVars))}}function j(T,B){if(B)if(B.block){var fe=j(T,B.prev);return fe?fe==B.prev?B:new G(fe,B.vars,!0):null}else return J(T,B.vars)?B:new G(B.prev,new M(T,B.vars),!1);else return null}function A(T){return T=="public"||T=="private"||T=="protected"||T=="abstract"||T=="readonly"}function G(T,B,fe){this.prev=T,this.vars=B,this.block=fe}function M(T,B){this.name=T,this.next=B}var Q=new M("this",new M("arguments",null));function Se(){se.state.context=new G(se.state.context,se.state.localVars,!1),se.state.localVars=Q}function De(){se.state.context=new G(se.state.context,se.state.localVars,!0),se.state.localVars=null}Se.lex=De.lex=!0;function qe(){se.state.localVars=se.state.context.vars,se.state.context=se.state.context.prev}qe.lex=!0;function ke(T,B){var fe=function(){var Ee=se.state,de=Ee.indented;if(Ee.lexical.type=="stat")de=Ee.lexical.indented;else for(var Be=Ee.lexical;Be&&Be.type==")"&&Be.align;Be=Be.prev)de=Be.indented;Ee.lexical=new Ne(de,se.stream.column(),T,null,Ee.lexical,B)};return fe.lex=!0,fe}function Ie(){var T=se.state;T.lexical.prev&&(T.lexical.type==")"&&(T.indented=T.lexical.indented),T.lexical=T.lexical.prev)}Ie.lex=!0;function Ue(T){function B(fe){return fe==T?L():T==";"||fe=="}"||fe==")"||fe=="]"?ye():L(B)}return B}function Ke(T,B){return T=="var"?L(ke("vardef",B),ri,Ue(";"),Ie):T=="keyword a"?L(ke("form"),Gt,Ke,Ie):T=="keyword b"?L(ke("form"),Ke,Ie):T=="keyword d"?se.stream.match(/^\s*$/,!1)?L():L(ke("stat"),vt,Ue(";"),Ie):T=="debugger"?L(Ue(";")):T=="{"?L(ke("}"),De,Jn,Ie,qe):T==";"?L():T=="if"?(se.state.lexical.info=="else"&&se.state.cc[se.state.cc.length-1]==Ie&&se.state.cc.pop()(),L(ke("form"),Gt,Ke,Ie,Xn)):T=="function"?L(cr):T=="for"?L(ke("form"),De,ii,Ke,qe,Ie):T=="class"||N&&B=="interface"?(se.marked="keyword",L(ke("form",T=="class"?T:B),Rr,Ie)):T=="variable"?N&&B=="declare"?(se.marked="keyword",L(Ke)):N&&(B=="module"||B=="enum"||B=="type")&&se.stream.match(/^\s*\w/,!1)?(se.marked="keyword",B=="enum"?L(Qe):B=="type"?L(As,Ue("operator"),xt,Ue(";")):L(ke("form"),In,Ue("{"),ke("}"),Jn,Ie,Ie)):N&&B=="namespace"?(se.marked="keyword",L(ke("form"),$e,Ke,Ie)):N&&B=="abstract"?(se.marked="keyword",L(Ke)):L(ke("stat"),wt):T=="switch"?L(ke("form"),Gt,Ue("{"),ke("}","switch"),De,Jn,Ie,Ie,qe):T=="case"?L($e,Ue(":")):T=="default"?L(Ue(":")):T=="catch"?L(ke("form"),Se,tt,Ke,Ie,qe):T=="export"?L(ke("stat"),Er,Ie):T=="import"?L(ke("stat"),si,Ie):T=="async"?L(Ke):B=="@"?L($e,Ke):ye(ke("stat"),$e,Ue(";"),Ie)}function tt(T){if(T=="(")return L(kn,Ue(")"))}function $e(T,B){return _t(T,B,!1)}function Ht(T,B){return _t(T,B,!0)}function Gt(T){return T!="("?ye():L(ke(")"),vt,Ue(")"),Ie)}function _t(T,B,fe){if(se.state.fatArrowAt==se.stream.start){var Ee=fe?ht:Ge;if(T=="(")return L(Se,ke(")"),pt(kn,")"),Ie,Ue("=>"),Ee,qe);if(T=="variable")return ye(Se,In,Ue("=>"),Ee,qe)}var de=fe?rt:We;return He.hasOwnProperty(T)?L(de):T=="function"?L(cr,de):T=="class"||N&&B=="interface"?(se.marked="keyword",L(ke("form"),vo,Ie)):T=="keyword c"||T=="async"?L(fe?Ht:$e):T=="("?L(ke(")"),vt,Ue(")"),Ie,de):T=="operator"||T=="spread"?L(fe?Ht:$e):T=="["?L(ke("]"),Xt,Ie,de):T=="{"?mn(at,"}",null,de):T=="quasi"?ye(et,de):T=="new"?L(ae(fe)):L()}function vt(T){return T.match(/[;\}\)\],]/)?ye():ye($e)}function We(T,B){return T==","?L(vt):rt(T,B,!1)}function rt(T,B,fe){var Ee=fe==!1?We:rt,de=fe==!1?$e:Ht;if(T=="=>")return L(Se,fe?ht:Ge,qe);if(T=="operator")return/\+\+|--/.test(B)||N&&B=="!"?L(Ee):N&&B=="<"&&se.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?L(ke(">"),pt(xt,">"),Ie,Ee):B=="?"?L($e,Ue(":"),de):L(de);if(T=="quasi")return ye(et,Ee);if(T!=";"){if(T=="(")return mn(Ht,")","call",Ee);if(T==".")return L(Je,Ee);if(T=="[")return L(ke("]"),vt,Ue("]"),Ie,Ee);if(N&&B=="as")return se.marked="keyword",L(xt,Ee);if(T=="regexp")return se.state.lastType=se.marked="operator",se.stream.backUp(se.stream.pos-se.stream.start-1),L(de)}}function et(T,B){return T!="quasi"?ye():B.slice(B.length-2)!="${"?L(et):L(vt,Kt)}function Kt(T){if(T=="}")return se.marked="string-2",se.state.tokenize=he,L(et)}function Ge(T){return we(se.stream,se.state),ye(T=="{"?Ke:$e)}function ht(T){return we(se.stream,se.state),ye(T=="{"?Ke:Ht)}function ae(T){return function(B){return B=="."?L(T?ge:_e):B=="variable"&&N?L(cn,T?rt:We):ye(T?Ht:$e)}}function _e(T,B){if(B=="target")return se.marked="keyword",L(We)}function ge(T,B){if(B=="target")return se.marked="keyword",L(rt)}function wt(T){return T==":"?L(Ie,Ke):ye(We,Ue(";"),Ie)}function Je(T){if(T=="variable")return se.marked="property",L()}function at(T,B){if(T=="async")return se.marked="property",L(at);if(T=="variable"||se.style=="keyword"){if(se.marked="property",B=="get"||B=="set")return L(Ve);var fe;return N&&se.state.fatArrowAt==se.stream.start&&(fe=se.stream.match(/^\s*:\s*/,!1))&&(se.state.fatArrowAt=se.stream.pos+fe[0].length),L(yt)}else{if(T=="number"||T=="string")return se.marked=C?"property":se.style+" property",L(yt);if(T=="jsonld-keyword")return L(yt);if(N&&A(B))return se.marked="keyword",L(at);if(T=="[")return L($e,Cr,Ue("]"),yt);if(T=="spread")return L(Ht,yt);if(B=="*")return se.marked="keyword",L(at);if(T==":")return ye(yt)}}function Ve(T){return T!="variable"?ye(yt):(se.marked="property",L(cr))}function yt(T){if(T==":")return L(Ht);if(T=="(")return ye(cr)}function pt(T,B,fe){function Ee(de,Be){if(fe?fe.indexOf(de)>-1:de==","){var Tt=se.state.lexical;return Tt.info=="call"&&(Tt.pos=(Tt.pos||0)+1),L(function(en,Sn){return en==B||Sn==B?ye():ye(T)},Ee)}return de==B||Be==B?L():fe&&fe.indexOf(";")>-1?ye(T):L(Ue(B))}return function(de,Be){return de==B||Be==B?L():ye(T,Ee)}}function mn(T,B,fe){for(var Ee=3;Ee<arguments.length;Ee++)se.cc.push(arguments[Ee]);return L(ke(B,fe),pt(T,B),Ie)}function Jn(T){return T=="}"?L():ye(Ke,Jn)}function Cr(T,B){if(N){if(T==":")return L(xt);if(B=="?")return L(Cr)}}function Hr(T,B){if(N&&(T==":"||B=="in"))return L(xt)}function ar(T){if(N&&T==":")return se.stream.match(/^\s*\w+\s+is\b/,!1)?L($e,xi,xt):L(xt)}function xi(T,B){if(B=="is")return se.marked="keyword",L()}function xt(T,B){if(B=="keyof"||B=="typeof"||B=="infer"||B=="readonly")return se.marked="keyword",L(B=="typeof"?Ht:xt);if(T=="variable"||B=="void")return se.marked="type",L(Nn);if(B=="|"||B=="&")return L(xt);if(T=="string"||T=="number"||T=="atom")return L(Nn);if(T=="[")return L(ke("]"),pt(xt,"]",","),Ie,Nn);if(T=="{")return L(ke("}"),it,Ie,Nn);if(T=="(")return L(pt(Ot,")"),zi,Nn);if(T=="<")return L(pt(xt,">"),xt);if(T=="quasi")return ye(Jt,Nn)}function zi(T){if(T=="=>")return L(xt)}function it(T){return T.match(/[\}\)\]]/)?L():T==","||T==";"?L(it):ye(Tr,it)}function Tr(T,B){if(T=="variable"||se.style=="keyword")return se.marked="property",L(Tr);if(B=="?"||T=="number"||T=="string")return L(Tr);if(T==":")return L(xt);if(T=="[")return L(Ue("variable"),Hr,Ue("]"),Tr);if(T=="(")return ye(Kr,Tr);if(!T.match(/[;\}\)\],]/))return L()}function Jt(T,B){return T!="quasi"?ye():B.slice(B.length-2)!="${"?L(Jt):L(xt,It)}function It(T){if(T=="}")return se.marked="string-2",se.state.tokenize=he,L(Jt)}function Ot(T,B){return T=="variable"&&se.stream.match(/^\s*[?:]/,!1)||B=="?"?L(Ot):T==":"?L(xt):T=="spread"?L(Ot):ye(xt)}function Nn(T,B){if(B=="<")return L(ke(">"),pt(xt,">"),Ie,Nn);if(B=="|"||T=="."||B=="&")return L(xt);if(T=="[")return L(xt,Ue("]"),Nn);if(B=="extends"||B=="implements")return se.marked="keyword",L(xt);if(B=="?")return L(xt,Ue(":"),xt)}function cn(T,B){if(B=="<")return L(ke(">"),pt(xt,">"),Ie,Nn)}function lr(){return ye(xt,wn)}function wn(T,B){if(B=="=")return L(xt)}function ri(T,B){return B=="enum"?(se.marked="keyword",L(Qe)):ye(In,Cr,En,jr)}function In(T,B){if(N&&A(B))return se.marked="keyword",L(In);if(T=="variable")return K(B),L();if(T=="spread")return L(In);if(T=="[")return mn(Br,"]");if(T=="{")return mn(ur,"}")}function ur(T,B){return T=="variable"&&!se.stream.match(/^\s*:/,!1)?(K(B),L(En)):(T=="variable"&&(se.marked="property"),T=="spread"?L(In):T=="}"?ye():T=="["?L($e,Ue("]"),Ue(":"),ur):L(Ue(":"),In,En))}function Br(){return ye(In,En)}function En(T,B){if(B=="=")return L(Ht)}function jr(T){if(T==",")return L(ri)}function Xn(T,B){if(T=="keyword b"&&B=="else")return L(ke("form","else"),Ke,Ie)}function ii(T,B){if(B=="await")return L(ii);if(T=="(")return L(ke(")"),Ur,Ie)}function Ur(T){return T=="var"?L(ri,qr):T=="variable"?L(qr):ye(qr)}function qr(T,B){return T==")"?L():T==";"?L(qr):B=="in"||B=="of"?(se.marked="keyword",L($e,qr)):ye($e,qr)}function cr(T,B){if(B=="*")return se.marked="keyword",L(cr);if(T=="variable")return K(B),L(cr);if(T=="(")return L(Se,ke(")"),pt(kn,")"),Ie,ar,Ke,qe);if(N&&B=="<")return L(ke(">"),pt(lr,">"),Ie,cr)}function Kr(T,B){if(B=="*")return se.marked="keyword",L(Kr);if(T=="variable")return K(B),L(Kr);if(T=="(")return L(Se,ke(")"),pt(kn,")"),Ie,ar,qe);if(N&&B=="<")return L(ke(">"),pt(lr,">"),Ie,Kr)}function As(T,B){if(T=="keyword"||T=="variable")return se.marked="type",L(As);if(B=="<")return L(ke(">"),pt(lr,">"),Ie)}function kn(T,B){return B=="@"&&L($e,kn),T=="spread"?L(kn):N&&A(B)?(se.marked="keyword",L(kn)):N&&T=="this"?L(Cr,En):ye(In,Cr,En)}function vo(T,B){return T=="variable"?Rr(T,B):Ir(T,B)}function Rr(T,B){if(T=="variable")return K(B),L(Ir)}function Ir(T,B){if(B=="<")return L(ke(">"),pt(lr,">"),Ie,Ir);if(B=="extends"||B=="implements"||N&&T==",")return B=="implements"&&(se.marked="keyword"),L(N?xt:$e,Ir);if(T=="{")return L(ke("}"),Nr,Ie)}function Nr(T,B){if(T=="async"||T=="variable"&&(B=="static"||B=="get"||B=="set"||N&&A(B))&&se.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return se.marked="keyword",L(Nr);if(T=="variable"||se.style=="keyword")return se.marked="property",L(Bt,Nr);if(T=="number"||T=="string")return L(Bt,Nr);if(T=="[")return L($e,Cr,Ue("]"),Bt,Nr);if(B=="*")return se.marked="keyword",L(Nr);if(N&&T=="(")return ye(Kr,Nr);if(T==";"||T==",")return L(Nr);if(T=="}")return L();if(B=="@")return L($e,Nr)}function Bt(T,B){if(B=="!"||B=="?")return L(Bt);if(T==":")return L(xt,En);if(B=="=")return L(Ht);var fe=se.state.lexical.prev,Ee=fe&&fe.info=="interface";return ye(Ee?Kr:cr)}function Er(T,B){return B=="*"?(se.marked="keyword",L(wi,Ue(";"))):B=="default"?(se.marked="keyword",L($e,Ue(";"))):T=="{"?L(pt(Fi,"}"),wi,Ue(";")):ye(Ke)}function Fi(T,B){if(B=="as")return se.marked="keyword",L(Ue("variable"));if(T=="variable")return ye(Ht,Fi)}function si(T){return T=="string"?L():T=="("?ye($e):T=="."?ye(We):ye(bi,At,wi)}function bi(T,B){return T=="{"?mn(bi,"}"):(T=="variable"&&K(B),B=="*"&&(se.marked="keyword"),L(as))}function At(T){if(T==",")return L(bi,At)}function as(T,B){if(B=="as")return se.marked="keyword",L(bi)}function wi(T,B){if(B=="from")return se.marked="keyword",L($e)}function Xt(T){return T=="]"?L():ye(pt(Ht,"]"))}function Qe(){return ye(ke("form"),In,Ue("{"),ke("}"),pt(oi,"}"),Ie,Ie)}function oi(){return ye(In,En)}function dr(T,B){return T.lastType=="operator"||T.lastType==","||V.test(B.charAt(0))||/[,.]/.test(B.charAt(0))}function On(T,B,fe){return B.tokenize==F&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(B.lastType)||B.lastType=="quasi"&&/\{\s*$/.test(T.string.slice(0,T.pos-(fe||0)))}return{startState:function(T){var B={tokenize:F,lastType:"sof",cc:[],lexical:new Ne((T||0)-b,0,"block",!1),localVars:y.localVars,context:y.localVars&&new G(null,null,!1),indented:T||0};return y.globalVars&&typeof y.globalVars=="object"&&(B.globalVars=y.globalVars),B},token:function(T,B){if(T.sol()&&(B.lexical.hasOwnProperty("align")||(B.lexical.align=!1),B.indented=T.indentation(),we(T,B)),B.tokenize!=Y&&T.eatSpace())return null;var fe=B.tokenize(T,B);return oe=="comment"?fe:(B.lastType=oe=="operator"&&(D=="++"||D=="--")?"incdec":oe,Te(B,fe,oe,D,T))},indent:function(T,B){if(T.tokenize==Y||T.tokenize==he)return p.Pass;if(T.tokenize!=F)return 0;var fe=B&&B.charAt(0),Ee=T.lexical,de;if(!/^\s*else\b/.test(B))for(var Be=T.cc.length-1;Be>=0;--Be){var Tt=T.cc[Be];if(Tt==Ie)Ee=Ee.prev;else if(Tt!=Xn&&Tt!=qe)break}for(;(Ee.type=="stat"||Ee.type=="form")&&(fe=="}"||(de=T.cc[T.cc.length-1])&&(de==We||de==rt)&&!/^[,\.=+\-*:?[\(]/.test(B));)Ee=Ee.prev;_&&Ee.type==")"&&Ee.prev.type=="stat"&&(Ee=Ee.prev);var en=Ee.type,Sn=fe==en;return en=="vardef"?Ee.indented+(T.lastType=="operator"||T.lastType==","?Ee.info.length+1:0):en=="form"&&fe=="{"?Ee.indented:en=="form"?Ee.indented+b:en=="stat"?Ee.indented+(dr(T,B)?_||b:0):Ee.info=="switch"&&!Sn&&y.doubleIndentSwitch!=!1?Ee.indented+(/^(?:case|default)\b/.test(B)?b:2*b):Ee.align?Ee.column+(Sn?0:1):Ee.indented+(Sn?0:b)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:k?null:"/*",blockCommentEnd:k?null:"*/",blockCommentContinue:k?null:" * ",lineComment:k?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:k?"json":"javascript",jsonldMode:C,jsonMode:k,expressionAllowed:On,skipExpression:function(T){Te(T,"atom","atom","true",new p.StringStream("",2,null))}}}),p.registerHelper("wordChars","javascript",/[\w$]/),p.defineMIME("text/javascript","javascript"),p.defineMIME("text/ecmascript","javascript"),p.defineMIME("application/javascript","javascript"),p.defineMIME("application/x-javascript","javascript"),p.defineMIME("application/ecmascript","javascript"),p.defineMIME("application/json",{name:"javascript",json:!0}),p.defineMIME("application/x-json",{name:"javascript",json:!0}),p.defineMIME("application/manifest+json",{name:"javascript",json:!0}),p.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),p.defineMIME("text/typescript",{name:"javascript",typescript:!0}),p.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})()),jf.exports}jm();var Ef={exports:{}},Lf;function Gx(){return Lf||(Lf=1,(function(l,u){(function(p){p(os())})(function(p){function g(j,A,G,M,Q,Se){this.indented=j,this.column=A,this.type=G,this.info=M,this.align=Q,this.prev=Se}function y(j,A,G,M){var Q=j.indented;return j.context&&j.context.type=="statement"&&G!="statement"&&(Q=j.context.indented),j.context=new g(Q,A,G,M,null,j.context)}function b(j){var A=j.context.type;return(A==")"||A=="]"||A=="}")&&(j.indented=j.context.indented),j.context=j.context.prev}function _(j,A,G){if(A.prevToken=="variable"||A.prevToken=="type"||/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(j.string.slice(0,G))||A.typeAtEndOfLine&&j.column()==j.indentation())return!0}function C(j){for(;;){if(!j||j.type=="top")return!0;if(j.type=="}"&&j.prev.info!="namespace")return!1;j=j.prev}}p.defineMode("clike",function(j,A){var G=j.indentUnit,M=A.statementIndentUnit||G,Q=A.dontAlignCalls,Se=A.keywords||{},De=A.types||{},qe=A.builtin||{},ke=A.blockKeywords||{},Ie=A.defKeywords||{},Ue=A.atoms||{},Ke=A.hooks||{},tt=A.multiLineStrings,$e=A.indentStatements!==!1,Ht=A.indentSwitch!==!1,Gt=A.namespaceSeparator,_t=A.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,vt=A.numberStart||/[\d\.]/,We=A.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,rt=A.isOperatorChar||/[+\-*&%=<>!?|\/]/,et=A.isIdentifierChar||/[\w\$_\xa1-\uffff]/,Kt=A.isReservedIdentifier||!1,Ge,ht;function ae(Je,at){var Ve=Je.next();if(Ke[Ve]){var yt=Ke[Ve](Je,at);if(yt!==!1)return yt}if(Ve=='"'||Ve=="'")return at.tokenize=_e(Ve),at.tokenize(Je,at);if(vt.test(Ve)){if(Je.backUp(1),Je.match(We))return"number";Je.next()}if(_t.test(Ve))return Ge=Ve,null;if(Ve=="/"){if(Je.eat("*"))return at.tokenize=ge,ge(Je,at);if(Je.eat("/"))return Je.skipToEnd(),"comment"}if(rt.test(Ve)){for(;!Je.match(/^\/[\/*]/,!1)&&Je.eat(rt););return"operator"}if(Je.eatWhile(et),Gt)for(;Je.match(Gt);)Je.eatWhile(et);var pt=Je.current();return E(Se,pt)?(E(ke,pt)&&(Ge="newstatement"),E(Ie,pt)&&(ht=!0),"keyword"):E(De,pt)?"type":E(qe,pt)||Kt&&Kt(pt)?(E(ke,pt)&&(Ge="newstatement"),"builtin"):E(Ue,pt)?"atom":"variable"}function _e(Je){return function(at,Ve){for(var yt=!1,pt,mn=!1;(pt=at.next())!=null;){if(pt==Je&&!yt){mn=!0;break}yt=!yt&&pt=="\\"}return(mn||!(yt||tt))&&(Ve.tokenize=null),"string"}}function ge(Je,at){for(var Ve=!1,yt;yt=Je.next();){if(yt=="/"&&Ve){at.tokenize=null;break}Ve=yt=="*"}return"comment"}function wt(Je,at){A.typeFirstDefinitions&&Je.eol()&&C(at.context)&&(at.typeAtEndOfLine=_(Je,at,Je.pos))}return{startState:function(Je){return{tokenize:null,context:new g((Je||0)-G,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(Je,at){var Ve=at.context;if(Je.sol()&&(Ve.align==null&&(Ve.align=!1),at.indented=Je.indentation(),at.startOfLine=!0),Je.eatSpace())return wt(Je,at),null;Ge=ht=null;var yt=(at.tokenize||ae)(Je,at);if(yt=="comment"||yt=="meta")return yt;if(Ve.align==null&&(Ve.align=!0),Ge==";"||Ge==":"||Ge==","&&Je.match(/^\s*(?:\/\/.*)?$/,!1))for(;at.context.type=="statement";)b(at);else if(Ge=="{")y(at,Je.column(),"}");else if(Ge=="[")y(at,Je.column(),"]");else if(Ge=="(")y(at,Je.column(),")");else if(Ge=="}"){for(;Ve.type=="statement";)Ve=b(at);for(Ve.type=="}"&&(Ve=b(at));Ve.type=="statement";)Ve=b(at)}else Ge==Ve.type?b(at):$e&&((Ve.type=="}"||Ve.type=="top")&&Ge!=";"||Ve.type=="statement"&&Ge=="newstatement")&&y(at,Je.column(),"statement",Je.current());if(yt=="variable"&&(at.prevToken=="def"||A.typeFirstDefinitions&&_(Je,at,Je.start)&&C(at.context)&&Je.match(/^\s*\(/,!1))&&(yt="def"),Ke.token){var pt=Ke.token(Je,at,yt);pt!==void 0&&(yt=pt)}return yt=="def"&&A.styleDefs===!1&&(yt="variable"),at.startOfLine=!1,at.prevToken=ht?"def":yt||Ge,wt(Je,at),yt},indent:function(Je,at){if(Je.tokenize!=ae&&Je.tokenize!=null||Je.typeAtEndOfLine&&C(Je.context))return p.Pass;var Ve=Je.context,yt=at&&at.charAt(0),pt=yt==Ve.type;if(Ve.type=="statement"&&yt=="}"&&(Ve=Ve.prev),A.dontIndentStatements)for(;Ve.type=="statement"&&A.dontIndentStatements.test(Ve.info);)Ve=Ve.prev;if(Ke.indent){var mn=Ke.indent(Je,Ve,at,G);if(typeof mn=="number")return mn}var Jn=Ve.prev&&Ve.prev.info=="switch";if(A.allmanIndentation&&/[{(]/.test(yt)){for(;Ve.type!="top"&&Ve.type!="}";)Ve=Ve.prev;return Ve.indented}return Ve.type=="statement"?Ve.indented+(yt=="{"?0:M):Ve.align&&(!Q||Ve.type!=")")?Ve.column+(pt?0:1):Ve.type==")"&&!pt?Ve.indented+M:Ve.indented+(pt?0:G)+(!pt&&Jn&&!/^(?:case|default)\b/.test(at)?G:0)},electricInput:Ht?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});function k(j){for(var A={},G=j.split(" "),M=0;M<G.length;++M)A[G[M]]=!0;return A}function E(j,A){return typeof j=="function"?j(A):j.propertyIsEnumerable(A)}var N="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",I="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",R="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",V="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",ee=k("int long char short double float unsigned signed void bool"),H=k("SEL instancetype id Class Protocol BOOL");function oe(j){return E(ee,j)||/.+_t$/.test(j)}function D(j){return oe(j)||E(H,j)}var W="case do else for if switch while struct enum union",F="struct enum union";function q(j,A){if(!A.startOfLine)return!1;for(var G,M=null;G=j.peek();){if(G=="\\"&&j.match(/^.$/)){M=q;break}else if(G=="/"&&j.match(/^\/[\/\*]/,!1))break;j.next()}return A.tokenize=M,"meta"}function Y(j,A){return A.prevToken=="type"?"type":!1}function he(j){return!j||j.length<2||j[0]!="_"?!1:j[1]=="_"||j[1]!==j[1].toLowerCase()}function le(j){return j.eatWhile(/[\w\.']/),"number"}function we(j,A){if(j.backUp(1),j.match(/^(?:R|u8R|uR|UR|LR)/)){var G=j.match(/^"([^\s\\()]{0,16})\(/);return G?(A.cpp11RawStringDelim=G[1],A.tokenize=ie,ie(j,A)):!1}return j.match(/^(?:u8|u|U|L)/)?j.match(/^["']/,!1)?"string":!1:(j.next(),!1)}function He(j){var A=/(\w+)::~?(\w+)$/.exec(j);return A&&A[1]==A[2]}function Ne(j,A){for(var G;(G=j.next())!=null;)if(G=='"'&&!j.eat('"')){A.tokenize=null;break}return"string"}function ie(j,A){var G=A.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),M=j.match(new RegExp(".*?\\)"+G+'"'));return M?A.tokenize=null:j.skipToEnd(),"string"}function Te(j,A){typeof j=="string"&&(j=[j]);var G=[];function M(Se){if(Se)for(var De in Se)Se.hasOwnProperty(De)&&G.push(De)}M(A.keywords),M(A.types),M(A.builtin),M(A.atoms),G.length&&(A.helperType=j[0],p.registerHelper("hintWords",j[0],G));for(var Q=0;Q<j.length;++Q)p.defineMIME(j[Q],A)}Te(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:k(N),types:oe,blockKeywords:k(W),defKeywords:k(F),typeFirstDefinitions:!0,atoms:k("NULL true false"),isReservedIdentifier:he,hooks:{"#":q,"*":Y},modeProps:{fold:["brace","include"]}}),Te(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:k(N+" "+I),types:oe,blockKeywords:k(W+" class try catch"),defKeywords:k(F+" class namespace"),typeFirstDefinitions:!0,atoms:k("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:he,hooks:{"#":q,"*":Y,u:we,U:we,L:we,R:we,0:le,1:le,2:le,3:le,4:le,5:le,6:le,7:le,8:le,9:le,token:function(j,A,G){if(G=="variable"&&j.peek()=="("&&(A.prevToken==";"||A.prevToken==null||A.prevToken=="}")&&He(j.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Te("text/x-java",{name:"clike",keywords:k("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:k("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:k("catch class do else finally for if switch try while"),defKeywords:k("class interface enum @interface"),typeFirstDefinitions:!0,atoms:k("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(j){return j.match("interface",!1)?!1:(j.eatWhile(/[\w\$_]/),"meta")},'"':function(j,A){return j.match(/""$/)?(A.tokenize=se,A.tokenize(j,A)):!1}},modeProps:{fold:["brace","import"]}}),Te("text/x-csharp",{name:"clike",keywords:k("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:k("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:k("catch class do else finally for foreach if struct switch try while"),defKeywords:k("class interface namespace record struct var"),typeFirstDefinitions:!0,atoms:k("true false null"),hooks:{"@":function(j,A){return j.eat('"')?(A.tokenize=Ne,Ne(j,A)):(j.eatWhile(/[\w\$_]/),"meta")}}});function se(j,A){for(var G=!1;!j.eol();){if(!G&&j.match('"""')){A.tokenize=null;break}G=j.next()=="\\"&&!G}return"string"}function ye(j){return function(A,G){for(var M;M=A.next();)if(M=="*"&&A.eat("/"))if(j==1){G.tokenize=null;break}else return G.tokenize=ye(j-1),G.tokenize(A,G);else if(M=="/"&&A.eat("*"))return G.tokenize=ye(j+1),G.tokenize(A,G);return"comment"}}Te("text/x-scala",{name:"clike",keywords:k("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:k("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:k("catch class enum do else finally for forSome if match switch try while"),defKeywords:k("class enum def object package trait type val var"),atoms:k("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(j){return j.eatWhile(/[\w\$_]/),"meta"},'"':function(j,A){return j.match('""')?(A.tokenize=se,A.tokenize(j,A)):!1},"'":function(j){return j.match(/^(\\[^'\s]+|[^\\'])'/)?"string-2":(j.eatWhile(/[\w\$_\xa1-\uffff]/),"atom")},"=":function(j,A){var G=A.context;return G.type=="}"&&G.align&&j.eat(">")?(A.context=new g(G.indented,G.column,G.type,G.info,null,G.prev),"operator"):!1},"/":function(j,A){return j.eat("*")?(A.tokenize=ye(1),A.tokenize(j,A)):!1}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}});function L(j){return function(A,G){for(var M=!1,Q,Se=!1;!A.eol();){if(!j&&!M&&A.match('"')){Se=!0;break}if(j&&A.match('"""')){Se=!0;break}Q=A.next(),!M&&Q=="$"&&A.match("{")&&A.skipTo("}"),M=!M&&Q=="\\"&&!j}return(Se||!j)&&(G.tokenize=null),"string"}}Te("text/x-kotlin",{name:"clike",keywords:k("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"),types:k("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),indentSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(ul?|l|f)?/i,blockKeywords:k("catch class do else finally for if where try while enum"),defKeywords:k("class val var object interface fun"),atoms:k("true false null this"),hooks:{"@":function(j){return j.eatWhile(/[\w\$_]/),"meta"},"*":function(j,A){return A.prevToken=="."?"variable":"operator"},'"':function(j,A){return A.tokenize=L(j.match('""')),A.tokenize(j,A)},"/":function(j,A){return j.eat("*")?(A.tokenize=ye(1),A.tokenize(j,A)):!1},indent:function(j,A,G,M){var Q=G&&G.charAt(0);if((j.prevToken=="}"||j.prevToken==")")&&G=="")return j.indented;if(j.prevToken=="operator"&&G!="}"&&j.context.type!="}"||j.prevToken=="variable"&&Q=="."||(j.prevToken=="}"||j.prevToken==")")&&Q==".")return M*2+A.indented;if(A.align&&A.type=="}")return A.indented+(j.context.type==(G||"").charAt(0)?0:M)}},modeProps:{closeBrackets:{triples:'"'}}}),Te(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:k("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:k("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:k("for while do if else struct"),builtin:k("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:k("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":q},modeProps:{fold:["brace","include"]}}),Te("text/x-nesc",{name:"clike",keywords:k(N+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:oe,blockKeywords:k(W),atoms:k("null true false"),hooks:{"#":q},modeProps:{fold:["brace","include"]}}),Te("text/x-objectivec",{name:"clike",keywords:k(N+" "+R),types:D,builtin:k(V),blockKeywords:k(W+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:k(F+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:k("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:he,hooks:{"#":q,"*":Y},modeProps:{fold:["brace","include"]}}),Te("text/x-objectivec++",{name:"clike",keywords:k(N+" "+R+" "+I),types:D,builtin:k(V),blockKeywords:k(W+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:k(F+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:k("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:he,hooks:{"#":q,"*":Y,u:we,U:we,L:we,R:we,0:le,1:le,2:le,3:le,4:le,5:le,6:le,7:le,8:le,9:le,token:function(j,A,G){if(G=="variable"&&j.peek()=="("&&(A.prevToken==";"||A.prevToken==null||A.prevToken=="}")&&He(j.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Te("text/x-squirrel",{name:"clike",keywords:k("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:oe,blockKeywords:k("case catch class else for foreach if switch try while"),defKeywords:k("function local class"),typeFirstDefinitions:!0,atoms:k("true false null"),hooks:{"#":q},modeProps:{fold:["brace","include"]}});var J=null;function K(j){return function(A,G){for(var M=!1,Q,Se=!1;!A.eol();){if(!M&&A.match('"')&&(j=="single"||A.match('""'))){Se=!0;break}if(!M&&A.match("``")){J=K(j),Se=!0;break}Q=A.next(),M=j=="single"&&!M&&Q=="\\"}return Se&&(G.tokenize=null),"string"}}Te("text/x-ceylon",{name:"clike",keywords:k("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(j){var A=j.charAt(0);return A===A.toUpperCase()&&A!==A.toLowerCase()},blockKeywords:k("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:k("class dynamic function interface module object package value"),builtin:k("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:k("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(j){return j.eatWhile(/[\w\$_]/),"meta"},'"':function(j,A){return A.tokenize=K(j.match('""')?"triple":"single"),A.tokenize(j,A)},"`":function(j,A){return!J||!j.match("`")?!1:(A.tokenize=J,J=null,A.tokenize(j,A))},"'":function(j){return j.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(j,A,G){if((G=="variable"||G=="type")&&A.prevToken==".")return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})})})()),Ef.exports}Gx();var Pf={exports:{}},Af;function Nm(){return Af||(Af=1,(function(l,u){(function(p){p(os())})(function(p){var g={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},y={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};p.defineMode("xml",function(b,_){var C=b.indentUnit,k={},E=_.htmlMode?g:y;for(var N in E)k[N]=E[N];for(var N in _)k[N]=_[N];var I,R;function V(L,J){function K(G){return J.tokenize=G,G(L,J)}var j=L.next();if(j=="<")return L.eat("!")?L.eat("[")?L.match("CDATA[")?K(oe("atom","]]>")):null:L.match("--")?K(oe("comment","-->")):L.match("DOCTYPE",!0,!0)?(L.eatWhile(/[\w\._\-]/),K(D(1))):null:L.eat("?")?(L.eatWhile(/[\w\._\-]/),J.tokenize=oe("meta","?>"),"meta"):(I=L.eat("/")?"closeTag":"openTag",J.tokenize=ee,"tag bracket");if(j=="&"){var A;return L.eat("#")?L.eat("x")?A=L.eatWhile(/[a-fA-F\d]/)&&L.eat(";"):A=L.eatWhile(/[\d]/)&&L.eat(";"):A=L.eatWhile(/[\w\.\-:]/)&&L.eat(";"),A?"atom":"error"}else return L.eatWhile(/[^&<]/),null}V.isInText=!0;function ee(L,J){var K=L.next();if(K==">"||K=="/"&&L.eat(">"))return J.tokenize=V,I=K==">"?"endTag":"selfcloseTag","tag bracket";if(K=="=")return I="equals",null;if(K=="<"){J.tokenize=V,J.state=he,J.tagName=J.tagStart=null;var j=J.tokenize(L,J);return j?j+" tag error":"tag error"}else return/[\'\"]/.test(K)?(J.tokenize=H(K),J.stringStartCol=L.column(),J.tokenize(L,J)):(L.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function H(L){var J=function(K,j){for(;!K.eol();)if(K.next()==L){j.tokenize=ee;break}return"string"};return J.isInAttribute=!0,J}function oe(L,J){return function(K,j){for(;!K.eol();){if(K.match(J)){j.tokenize=V;break}K.next()}return L}}function D(L){return function(J,K){for(var j;(j=J.next())!=null;){if(j=="<")return K.tokenize=D(L+1),K.tokenize(J,K);if(j==">")if(L==1){K.tokenize=V;break}else return K.tokenize=D(L-1),K.tokenize(J,K)}return"meta"}}function W(L){return L&&L.toLowerCase()}function F(L,J,K){this.prev=L.context,this.tagName=J||"",this.indent=L.indented,this.startOfLine=K,(k.doNotIndent.hasOwnProperty(J)||L.context&&L.context.noIndent)&&(this.noIndent=!0)}function q(L){L.context&&(L.context=L.context.prev)}function Y(L,J){for(var K;;){if(!L.context||(K=L.context.tagName,!k.contextGrabbers.hasOwnProperty(W(K))||!k.contextGrabbers[W(K)].hasOwnProperty(W(J))))return;q(L)}}function he(L,J,K){return L=="openTag"?(K.tagStart=J.column(),le):L=="closeTag"?we:he}function le(L,J,K){return L=="word"?(K.tagName=J.current(),R="tag",ie):k.allowMissingTagName&&L=="endTag"?(R="tag bracket",ie(L,J,K)):(R="error",le)}function we(L,J,K){if(L=="word"){var j=J.current();return K.context&&K.context.tagName!=j&&k.implicitlyClosed.hasOwnProperty(W(K.context.tagName))&&q(K),K.context&&K.context.tagName==j||k.matchClosing===!1?(R="tag",He):(R="tag error",Ne)}else return k.allowMissingTagName&&L=="endTag"?(R="tag bracket",He(L,J,K)):(R="error",Ne)}function He(L,J,K){return L!="endTag"?(R="error",He):(q(K),he)}function Ne(L,J,K){return R="error",He(L,J,K)}function ie(L,J,K){if(L=="word")return R="attribute",Te;if(L=="endTag"||L=="selfcloseTag"){var j=K.tagName,A=K.tagStart;return K.tagName=K.tagStart=null,L=="selfcloseTag"||k.autoSelfClosers.hasOwnProperty(W(j))?Y(K,j):(Y(K,j),K.context=new F(K,j,A==K.indented)),he}return R="error",ie}function Te(L,J,K){return L=="equals"?se:(k.allowMissing||(R="error"),ie(L,J,K))}function se(L,J,K){return L=="string"?ye:L=="word"&&k.allowUnquoted?(R="string",ie):(R="error",ie(L,J,K))}function ye(L,J,K){return L=="string"?ye:ie(L,J,K)}return{startState:function(L){var J={tokenize:V,state:he,indented:L||0,tagName:null,tagStart:null,context:null};return L!=null&&(J.baseIndent=L),J},token:function(L,J){if(!J.tagName&&L.sol()&&(J.indented=L.indentation()),L.eatSpace())return null;I=null;var K=J.tokenize(L,J);return(K||I)&&K!="comment"&&(R=null,J.state=J.state(I||K,L,J),R&&(K=R=="error"?K+" error":R)),K},indent:function(L,J,K){var j=L.context;if(L.tokenize.isInAttribute)return L.tagStart==L.indented?L.stringStartCol+1:L.indented+C;if(j&&j.noIndent)return p.Pass;if(L.tokenize!=ee&&L.tokenize!=V)return K?K.match(/^(\s*)/)[0].length:0;if(L.tagName)return k.multilineTagIndentPastTag!==!1?L.tagStart+L.tagName.length+2:L.tagStart+C*(k.multilineTagIndentFactor||1);if(k.alignCDATA&&/<!\[CDATA\[/.test(J))return 0;var A=J&&/^<(\/)?([\w_:\.-]*)/.exec(J);if(A&&A[1])for(;j;)if(j.tagName==A[2]){j=j.prev;break}else if(k.implicitlyClosed.hasOwnProperty(W(j.tagName)))j=j.prev;else break;else if(A)for(;j;){var G=k.contextGrabbers[W(j.tagName)];if(G&&G.hasOwnProperty(W(A[2])))j=j.prev;else break}for(;j&&j.prev&&!j.startOfLine;)j=j.prev;return j?j.indent+C:L.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:k.htmlMode?"html":"xml",helperType:k.htmlMode?"html":"xml",skipAttribute:function(L){L.state==se&&(L.state=ie)},xmlCurrentTag:function(L){return L.tagName?{name:L.tagName,close:L.type=="closeTag"}:null},xmlCurrentContext:function(L){for(var J=[],K=L.context;K;K=K.prev)J.push(K.tagName);return J.reverse()}}}),p.defineMIME("text/xml","xml"),p.defineMIME("application/xml","xml"),p.mimeModes.hasOwnProperty("text/html")||p.defineMIME("text/html",{name:"xml",htmlMode:!0})})})()),Pf.exports}Nm();var Rf={exports:{}},If;function Em(){return If||(If=1,(function(l,u){(function(p){p(os())})(function(p){p.defineMode("css",function(Ne,ie){var Te=ie.inline;ie.propertyKeywords||(ie=p.resolveMode("text/css"));var se=Ne.indentUnit,ye=ie.tokenHooks,L=ie.documentTypes||{},J=ie.mediaTypes||{},K=ie.mediaFeatures||{},j=ie.mediaValueKeywords||{},A=ie.propertyKeywords||{},G=ie.nonStandardPropertyKeywords||{},M=ie.fontProperties||{},Q=ie.counterDescriptors||{},Se=ie.colorKeywords||{},De=ie.valueKeywords||{},qe=ie.allowNested,ke=ie.lineComment,Ie=ie.supportsAtComponent===!0,Ue=Ne.highlightNonStandardPropertyKeywords!==!1,Ke,tt;function $e(ae,_e){return Ke=_e,ae}function Ht(ae,_e){var ge=ae.next();if(ye[ge]){var wt=ye[ge](ae,_e);if(wt!==!1)return wt}if(ge=="@")return ae.eatWhile(/[\w\\\-]/),$e("def",ae.current());if(ge=="="||(ge=="~"||ge=="|")&&ae.eat("="))return $e(null,"compare");if(ge=='"'||ge=="'")return _e.tokenize=Gt(ge),_e.tokenize(ae,_e);if(ge=="#")return ae.eatWhile(/[\w\\\-]/),$e("atom","hash");if(ge=="!")return ae.match(/^\s*\w*/),$e("keyword","important");if(/\d/.test(ge)||ge=="."&&ae.eat(/\d/))return ae.eatWhile(/[\w.%]/),$e("number","unit");if(ge==="-"){if(/[\d.]/.test(ae.peek()))return ae.eatWhile(/[\w.%]/),$e("number","unit");if(ae.match(/^-[\w\\\-]*/))return ae.eatWhile(/[\w\\\-]/),ae.match(/^\s*:/,!1)?$e("variable-2","variable-definition"):$e("variable-2","variable");if(ae.match(/^\w+-/))return $e("meta","meta")}else return/[,+>*\/]/.test(ge)?$e(null,"select-op"):ge=="."&&ae.match(/^-?[_a-z][_a-z0-9-]*/i)?$e("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(ge)?$e(null,ge):ae.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(ae.current())&&(_e.tokenize=_t),$e("variable callee","variable")):/[\w\\\-]/.test(ge)?(ae.eatWhile(/[\w\\\-]/),$e("property","word")):$e(null,null)}function Gt(ae){return function(_e,ge){for(var wt=!1,Je;(Je=_e.next())!=null;){if(Je==ae&&!wt){ae==")"&&_e.backUp(1);break}wt=!wt&&Je=="\\"}return(Je==ae||!wt&&ae!=")")&&(ge.tokenize=null),$e("string","string")}}function _t(ae,_e){return ae.next(),ae.match(/^\s*[\"\')]/,!1)?_e.tokenize=null:_e.tokenize=Gt(")"),$e(null,"(")}function vt(ae,_e,ge){this.type=ae,this.indent=_e,this.prev=ge}function We(ae,_e,ge,wt){return ae.context=new vt(ge,_e.indentation()+(wt===!1?0:se),ae.context),ge}function rt(ae){return ae.context.prev&&(ae.context=ae.context.prev),ae.context.type}function et(ae,_e,ge){return ht[ge.context.type](ae,_e,ge)}function Kt(ae,_e,ge,wt){for(var Je=wt||1;Je>0;Je--)ge.context=ge.context.prev;return et(ae,_e,ge)}function Ge(ae){var _e=ae.current().toLowerCase();De.hasOwnProperty(_e)?tt="atom":Se.hasOwnProperty(_e)?tt="keyword":tt="variable"}var ht={};return ht.top=function(ae,_e,ge){if(ae=="{")return We(ge,_e,"block");if(ae=="}"&&ge.context.prev)return rt(ge);if(Ie&&/@component/i.test(ae))return We(ge,_e,"atComponentBlock");if(/^@(-moz-)?document$/i.test(ae))return We(ge,_e,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(ae))return We(ge,_e,"atBlock");if(/^@(font-face|counter-style)/i.test(ae))return ge.stateArg=ae,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(ae))return"keyframes";if(ae&&ae.charAt(0)=="@")return We(ge,_e,"at");if(ae=="hash")tt="builtin";else if(ae=="word")tt="tag";else{if(ae=="variable-definition")return"maybeprop";if(ae=="interpolation")return We(ge,_e,"interpolation");if(ae==":")return"pseudo";if(qe&&ae=="(")return We(ge,_e,"parens")}return ge.context.type},ht.block=function(ae,_e,ge){if(ae=="word"){var wt=_e.current().toLowerCase();return A.hasOwnProperty(wt)?(tt="property","maybeprop"):G.hasOwnProperty(wt)?(tt=Ue?"string-2":"property","maybeprop"):qe?(tt=_e.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(tt+=" error","maybeprop")}else return ae=="meta"?"block":!qe&&(ae=="hash"||ae=="qualifier")?(tt="error","block"):ht.top(ae,_e,ge)},ht.maybeprop=function(ae,_e,ge){return ae==":"?We(ge,_e,"prop"):et(ae,_e,ge)},ht.prop=function(ae,_e,ge){if(ae==";")return rt(ge);if(ae=="{"&&qe)return We(ge,_e,"propBlock");if(ae=="}"||ae=="{")return Kt(ae,_e,ge);if(ae=="(")return We(ge,_e,"parens");if(ae=="hash"&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(_e.current()))tt+=" error";else if(ae=="word")Ge(_e);else if(ae=="interpolation")return We(ge,_e,"interpolation");return"prop"},ht.propBlock=function(ae,_e,ge){return ae=="}"?rt(ge):ae=="word"?(tt="property","maybeprop"):ge.context.type},ht.parens=function(ae,_e,ge){return ae=="{"||ae=="}"?Kt(ae,_e,ge):ae==")"?rt(ge):ae=="("?We(ge,_e,"parens"):ae=="interpolation"?We(ge,_e,"interpolation"):(ae=="word"&&Ge(_e),"parens")},ht.pseudo=function(ae,_e,ge){return ae=="meta"?"pseudo":ae=="word"?(tt="variable-3",ge.context.type):et(ae,_e,ge)},ht.documentTypes=function(ae,_e,ge){return ae=="word"&&L.hasOwnProperty(_e.current())?(tt="tag",ge.context.type):ht.atBlock(ae,_e,ge)},ht.atBlock=function(ae,_e,ge){if(ae=="(")return We(ge,_e,"atBlock_parens");if(ae=="}"||ae==";")return Kt(ae,_e,ge);if(ae=="{")return rt(ge)&&We(ge,_e,qe?"block":"top");if(ae=="interpolation")return We(ge,_e,"interpolation");if(ae=="word"){var wt=_e.current().toLowerCase();wt=="only"||wt=="not"||wt=="and"||wt=="or"?tt="keyword":J.hasOwnProperty(wt)?tt="attribute":K.hasOwnProperty(wt)?tt="property":j.hasOwnProperty(wt)?tt="keyword":A.hasOwnProperty(wt)?tt="property":G.hasOwnProperty(wt)?tt=Ue?"string-2":"property":De.hasOwnProperty(wt)?tt="atom":Se.hasOwnProperty(wt)?tt="keyword":tt="error"}return ge.context.type},ht.atComponentBlock=function(ae,_e,ge){return ae=="}"?Kt(ae,_e,ge):ae=="{"?rt(ge)&&We(ge,_e,qe?"block":"top",!1):(ae=="word"&&(tt="error"),ge.context.type)},ht.atBlock_parens=function(ae,_e,ge){return ae==")"?rt(ge):ae=="{"||ae=="}"?Kt(ae,_e,ge,2):ht.atBlock(ae,_e,ge)},ht.restricted_atBlock_before=function(ae,_e,ge){return ae=="{"?We(ge,_e,"restricted_atBlock"):ae=="word"&&ge.stateArg=="@counter-style"?(tt="variable","restricted_atBlock_before"):et(ae,_e,ge)},ht.restricted_atBlock=function(ae,_e,ge){return ae=="}"?(ge.stateArg=null,rt(ge)):ae=="word"?(ge.stateArg=="@font-face"&&!M.hasOwnProperty(_e.current().toLowerCase())||ge.stateArg=="@counter-style"&&!Q.hasOwnProperty(_e.current().toLowerCase())?tt="error":tt="property","maybeprop"):"restricted_atBlock"},ht.keyframes=function(ae,_e,ge){return ae=="word"?(tt="variable","keyframes"):ae=="{"?We(ge,_e,"top"):et(ae,_e,ge)},ht.at=function(ae,_e,ge){return ae==";"?rt(ge):ae=="{"||ae=="}"?Kt(ae,_e,ge):(ae=="word"?tt="tag":ae=="hash"&&(tt="builtin"),"at")},ht.interpolation=function(ae,_e,ge){return ae=="}"?rt(ge):ae=="{"||ae==";"?Kt(ae,_e,ge):(ae=="word"?tt="variable":ae!="variable"&&ae!="("&&ae!=")"&&(tt="error"),"interpolation")},{startState:function(ae){return{tokenize:null,state:Te?"block":"top",stateArg:null,context:new vt(Te?"block":"top",ae||0,null)}},token:function(ae,_e){if(!_e.tokenize&&ae.eatSpace())return null;var ge=(_e.tokenize||Ht)(ae,_e);return ge&&typeof ge=="object"&&(Ke=ge[1],ge=ge[0]),tt=ge,Ke!="comment"&&(_e.state=ht[_e.state](Ke,ae,_e)),tt},indent:function(ae,_e){var ge=ae.context,wt=_e&&_e.charAt(0),Je=ge.indent;return ge.type=="prop"&&(wt=="}"||wt==")")&&(ge=ge.prev),ge.prev&&(wt=="}"&&(ge.type=="block"||ge.type=="top"||ge.type=="interpolation"||ge.type=="restricted_atBlock")?(ge=ge.prev,Je=ge.indent):(wt==")"&&(ge.type=="parens"||ge.type=="atBlock_parens")||wt=="{"&&(ge.type=="at"||ge.type=="atBlock"))&&(Je=Math.max(0,ge.indent-se))),Je},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:ke,fold:"brace"}});function g(Ne){for(var ie={},Te=0;Te<Ne.length;++Te)ie[Ne[Te].toLowerCase()]=!0;return ie}var y=["domain","regexp","url","url-prefix"],b=g(y),_=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],C=g(_),k=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],E=g(k),N=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],I=g(N),R=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],V=g(R),ee=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],H=g(ee),oe=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],D=g(oe),W=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],F=g(W),q=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],Y=g(q),he=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],le=g(he),we=y.concat(_).concat(k).concat(N).concat(R).concat(ee).concat(q).concat(he);p.registerHelper("hintWords","css",we);function He(Ne,ie){for(var Te=!1,se;(se=Ne.next())!=null;){if(Te&&se=="/"){ie.tokenize=null;break}Te=se=="*"}return["comment","comment"]}p.defineMIME("text/css",{documentTypes:b,mediaTypes:C,mediaFeatures:E,mediaValueKeywords:I,propertyKeywords:V,nonStandardPropertyKeywords:H,fontProperties:D,counterDescriptors:F,colorKeywords:Y,valueKeywords:le,tokenHooks:{"/":function(Ne,ie){return Ne.eat("*")?(ie.tokenize=He,He(Ne,ie)):!1}},name:"css"}),p.defineMIME("text/x-scss",{mediaTypes:C,mediaFeatures:E,mediaValueKeywords:I,propertyKeywords:V,nonStandardPropertyKeywords:H,colorKeywords:Y,valueKeywords:le,fontProperties:D,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(Ne,ie){return Ne.eat("/")?(Ne.skipToEnd(),["comment","comment"]):Ne.eat("*")?(ie.tokenize=He,He(Ne,ie)):["operator","operator"]},":":function(Ne){return Ne.match(/^\s*\{/,!1)?[null,null]:!1},$:function(Ne){return Ne.match(/^[\w-]+/),Ne.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(Ne){return Ne.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),p.defineMIME("text/x-less",{mediaTypes:C,mediaFeatures:E,mediaValueKeywords:I,propertyKeywords:V,nonStandardPropertyKeywords:H,colorKeywords:Y,valueKeywords:le,fontProperties:D,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(Ne,ie){return Ne.eat("/")?(Ne.skipToEnd(),["comment","comment"]):Ne.eat("*")?(ie.tokenize=He,He(Ne,ie)):["operator","operator"]},"@":function(Ne){return Ne.eat("{")?[null,"interpolation"]:Ne.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)?!1:(Ne.eatWhile(/[\w\\\-]/),Ne.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),p.defineMIME("text/x-gss",{documentTypes:b,mediaTypes:C,mediaFeatures:E,propertyKeywords:V,nonStandardPropertyKeywords:H,fontProperties:D,counterDescriptors:F,colorKeywords:Y,valueKeywords:le,supportsAtComponent:!0,tokenHooks:{"/":function(Ne,ie){return Ne.eat("*")?(ie.tokenize=He,He(Ne,ie)):!1}},name:"css",helperType:"gss"})})})()),Rf.exports}Em();var Of={exports:{}},Mf;function Yx(){return Mf||(Mf=1,(function(l,u){(function(p){p(os(),Nm(),jm(),Em())})(function(p){var g={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function y(I,R,V){var ee=I.current(),H=ee.search(R);return H>-1?I.backUp(ee.length-H):ee.match(/<\/?$/)&&(I.backUp(ee.length),I.match(R,!1)||I.match(ee)),V}var b={};function _(I){var R=b[I];return R||(b[I]=new RegExp("\\s+"+I+`\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))}function C(I,R){var V=I.match(_(R));return V?/^\s*(.*?)\s*$/.exec(V[2])[1]:""}function k(I,R){return new RegExp((R?"^":"")+"</\\s*"+I+"\\s*>","i")}function E(I,R){for(var V in I)for(var ee=R[V]||(R[V]=[]),H=I[V],oe=H.length-1;oe>=0;oe--)ee.unshift(H[oe])}function N(I,R){for(var V=0;V<I.length;V++){var ee=I[V];if(!ee[0]||ee[1].test(C(R,ee[0])))return ee[2]}}p.defineMode("htmlmixed",function(I,R){var V=p.getMode(I,{name:"xml",htmlMode:!0,multilineTagIndentFactor:R.multilineTagIndentFactor,multilineTagIndentPastTag:R.multilineTagIndentPastTag,allowMissingTagName:R.allowMissingTagName}),ee={},H=R&&R.tags,oe=R&&R.scriptTypes;if(E(g,ee),H&&E(H,ee),oe)for(var D=oe.length-1;D>=0;D--)ee.script.unshift(["type",oe[D].matches,oe[D].mode]);function W(F,q){var Y=V.token(F,q.htmlState),he=/\btag\b/.test(Y),le;if(he&&!/[<>\s\/]/.test(F.current())&&(le=q.htmlState.tagName&&q.htmlState.tagName.toLowerCase())&&ee.hasOwnProperty(le))q.inTag=le+" ";else if(q.inTag&&he&&/>$/.test(F.current())){var we=/^([\S]+) (.*)/.exec(q.inTag);q.inTag=null;var He=F.current()==">"&&N(ee[we[1]],we[2]),Ne=p.getMode(I,He),ie=k(we[1],!0),Te=k(we[1],!1);q.token=function(se,ye){return se.match(ie,!1)?(ye.token=W,ye.localState=ye.localMode=null,null):y(se,Te,ye.localMode.token(se,ye.localState))},q.localMode=Ne,q.localState=p.startState(Ne,V.indent(q.htmlState,"",""))}else q.inTag&&(q.inTag+=F.current(),F.eol()&&(q.inTag+=" "));return Y}return{startState:function(){var F=p.startState(V);return{token:W,inTag:null,localMode:null,localState:null,htmlState:F}},copyState:function(F){var q;return F.localState&&(q=p.copyState(F.localMode,F.localState)),{token:F.token,inTag:F.inTag,localMode:F.localMode,localState:q,htmlState:p.copyState(V,F.htmlState)}},token:function(F,q){return q.token(F,q)},indent:function(F,q,Y){return!F.localMode||/^\s*<\//.test(q)?V.indent(F.htmlState,q,Y):F.localMode.indent?F.localMode.indent(F.localState,q,Y):p.Pass},innerMode:function(F){return{state:F.localState||F.htmlState,mode:F.localMode||V}}}},"xml","javascript","css"),p.defineMIME("text/html","htmlmixed")})})()),Of.exports}Yx();var Df={exports:{}},zf;function Vx(){return zf||(zf=1,(function(l,u){(function(p){p(os())})(function(p){var g={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},y=p.Pos;p.defineOption("autoCloseBrackets",!1,function(D,W,F){F&&F!=p.Init&&(D.removeKeyMap(_),D.state.closeBrackets=null),W&&(C(b(W,"pairs")),D.state.closeBrackets=W,D.addKeyMap(_))});function b(D,W){return W=="pairs"&&typeof D=="string"?D:typeof D=="object"&&D[W]!=null?D[W]:g[W]}var _={Backspace:N,Enter:I};function C(D){for(var W=0;W<D.length;W++){var F=D.charAt(W),q="'"+F+"'";_[q]||(_[q]=k(F))}}C(g.pairs+"`");function k(D){return function(W){return ee(W,D)}}function E(D){var W=D.state.closeBrackets;if(!W||W.override)return W;var F=D.getModeAt(D.getCursor());return F.closeBrackets||W}function N(D){var W=E(D);if(!W||D.getOption("disableInput"))return p.Pass;for(var F=b(W,"pairs"),q=D.listSelections(),Y=0;Y<q.length;Y++){if(!q[Y].empty())return p.Pass;var he=H(D,q[Y].head);if(!he||F.indexOf(he)%2!=0)return p.Pass}for(var Y=q.length-1;Y>=0;Y--){var le=q[Y].head;D.replaceRange("",y(le.line,le.ch-1),y(le.line,le.ch+1),"+delete")}}function I(D){var W=E(D),F=W&&b(W,"explode");if(!F||D.getOption("disableInput"))return p.Pass;for(var q=D.listSelections(),Y=0;Y<q.length;Y++){if(!q[Y].empty())return p.Pass;var he=H(D,q[Y].head);if(!he||F.indexOf(he)%2!=0)return p.Pass}D.operation(function(){var le=D.lineSeparator()||`
`;D.replaceSelection(le+le,null),R(D,-1),q=D.listSelections();for(var we=0;we<q.length;we++){var He=q[we].head.line;D.indentLine(He,null,!0),D.indentLine(He+1,null,!0)}})}function R(D,W){for(var F=[],q=D.listSelections(),Y=0,he=0;he<q.length;he++){var le=q[he];le.head==D.getCursor()&&(Y=he);var we=le.head.ch||W>0?{line:le.head.line,ch:le.head.ch+W}:{line:le.head.line-1};F.push({anchor:we,head:we})}D.setSelections(F,Y)}function V(D){var W=p.cmpPos(D.anchor,D.head)>0;return{anchor:new y(D.anchor.line,D.anchor.ch+(W?-1:1)),head:new y(D.head.line,D.head.ch+(W?1:-1))}}function ee(D,W){var F=E(D);if(!F||D.getOption("disableInput"))return p.Pass;var q=b(F,"pairs"),Y=q.indexOf(W);if(Y==-1)return p.Pass;for(var he=b(F,"closeBefore"),le=b(F,"triples"),we=q.charAt(Y+1)==W,He=D.listSelections(),Ne=Y%2==0,ie,Te=0;Te<He.length;Te++){var se=He[Te],ye=se.head,L,J=D.getRange(ye,y(ye.line,ye.ch+1));if(Ne&&!se.empty())L="surround";else if((we||!Ne)&&J==W)we&&oe(D,ye)?L="both":le.indexOf(W)>=0&&D.getRange(ye,y(ye.line,ye.ch+3))==W+W+W?L="skipThree":L="skip";else if(we&&ye.ch>1&&le.indexOf(W)>=0&&D.getRange(y(ye.line,ye.ch-2),ye)==W+W){if(ye.ch>2&&/\bstring/.test(D.getTokenTypeAt(y(ye.line,ye.ch-2))))return p.Pass;L="addFour"}else if(we){var K=ye.ch==0?" ":D.getRange(y(ye.line,ye.ch-1),ye);if(!p.isWordChar(J)&&K!=W&&!p.isWordChar(K))L="both";else return p.Pass}else if(Ne&&(J.length===0||/\s/.test(J)||he.indexOf(J)>-1))L="both";else return p.Pass;if(!ie)ie=L;else if(ie!=L)return p.Pass}var j=Y%2?q.charAt(Y-1):W,A=Y%2?W:q.charAt(Y+1);D.operation(function(){if(ie=="skip")R(D,1);else if(ie=="skipThree")R(D,3);else if(ie=="surround"){for(var G=D.getSelections(),M=0;M<G.length;M++)G[M]=j+G[M]+A;D.replaceSelections(G,"around"),G=D.listSelections().slice();for(var M=0;M<G.length;M++)G[M]=V(G[M]);D.setSelections(G)}else ie=="both"?(D.replaceSelection(j+A,null),D.triggerElectric(j+A),R(D,-1)):ie=="addFour"&&(D.replaceSelection(j+j+j+j,"before"),R(D,1))})}function H(D,W){var F=D.getRange(y(W.line,W.ch-1),y(W.line,W.ch+1));return F.length==2?F:null}function oe(D,W){var F=D.getTokenAt(y(W.line,W.ch+1));return/\bstring/.test(F.type)&&F.start==W.ch&&(W.ch==0||!/\bstring/.test(D.getTokenTypeAt(W)))}})})()),Df.exports}Vx();var Ff={exports:{}},Wf;function Jx(){return Wf||(Wf=1,(function(l,u){(function(p){p(os())})(function(p){var g=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),y=p.Pos,b={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function _(R){return R&&R.bracketRegex||/[(){}[\]]/}function C(R,V,ee){var H=R.getLineHandle(V.line),oe=V.ch-1,D=ee&&ee.afterCursor;D==null&&(D=/(^| )cm-fat-cursor($| )/.test(R.getWrapperElement().className));var W=_(ee),F=!D&&oe>=0&&W.test(H.text.charAt(oe))&&b[H.text.charAt(oe)]||W.test(H.text.charAt(oe+1))&&b[H.text.charAt(++oe)];if(!F)return null;var q=F.charAt(1)==">"?1:-1;if(ee&&ee.strict&&q>0!=(oe==V.ch))return null;var Y=R.getTokenTypeAt(y(V.line,oe+1)),he=k(R,y(V.line,oe+(q>0?1:0)),q,Y,ee);return he==null?null:{from:y(V.line,oe),to:he&&he.pos,match:he&&he.ch==F.charAt(0),forward:q>0}}function k(R,V,ee,H,oe){for(var D=oe&&oe.maxScanLineLength||1e4,W=oe&&oe.maxScanLines||1e3,F=[],q=_(oe),Y=ee>0?Math.min(V.line+W,R.lastLine()+1):Math.max(R.firstLine()-1,V.line-W),he=V.line;he!=Y;he+=ee){var le=R.getLine(he);if(le){var we=ee>0?0:le.length-1,He=ee>0?le.length:-1;if(!(le.length>D))for(he==V.line&&(we=V.ch-(ee<0?1:0));we!=He;we+=ee){var Ne=le.charAt(we);if(q.test(Ne)&&(H===void 0||(R.getTokenTypeAt(y(he,we+1))||"")==(H||""))){var ie=b[Ne];if(ie&&ie.charAt(1)==">"==ee>0)F.push(Ne);else if(F.length)F.pop();else return{pos:y(he,we),ch:Ne}}}}}return he-ee==(ee>0?R.lastLine():R.firstLine())?!1:null}function E(R,V,ee){for(var H=R.state.matchBrackets.maxHighlightLineLength||1e3,oe=ee&&ee.highlightNonMatching,D=[],W=R.listSelections(),F=0;F<W.length;F++){var q=W[F].empty()&&C(R,W[F].head,ee);if(q&&(q.match||oe!==!1)&&R.getLine(q.from.line).length<=H){var Y=q.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";D.push(R.markText(q.from,y(q.from.line,q.from.ch+1),{className:Y})),q.to&&R.getLine(q.to.line).length<=H&&D.push(R.markText(q.to,y(q.to.line,q.to.ch+1),{className:Y}))}}if(D.length){g&&R.state.focused&&R.focus();var he=function(){R.operation(function(){for(var le=0;le<D.length;le++)D[le].clear()})};if(V)setTimeout(he,800);else return he}}function N(R){R.operation(function(){R.state.matchBrackets.currentlyHighlighted&&(R.state.matchBrackets.currentlyHighlighted(),R.state.matchBrackets.currentlyHighlighted=null),R.state.matchBrackets.currentlyHighlighted=E(R,!1,R.state.matchBrackets)})}function I(R){R.state.matchBrackets&&R.state.matchBrackets.currentlyHighlighted&&(R.state.matchBrackets.currentlyHighlighted(),R.state.matchBrackets.currentlyHighlighted=null)}p.defineOption("matchBrackets",!1,function(R,V,ee){ee&&ee!=p.Init&&(R.off("cursorActivity",N),R.off("focus",N),R.off("blur",I),I(R)),V&&(R.state.matchBrackets=typeof V=="object"?V:{},R.on("cursorActivity",N),R.on("focus",N),R.on("blur",I))}),p.defineExtension("matchBrackets",function(){E(this,!0)}),p.defineExtension("findMatchingBracket",function(R,V,ee){return(ee||typeof V=="boolean")&&(ee?(ee.strict=V,V=ee):V=V?{strict:!0}:null),C(this,R,V)}),p.defineExtension("scanForBracket",function(R,V,ee,H){return k(this,R,V,ee,H)})})})()),Ff.exports}Jx();var Hf={exports:{}},Bf;function Xx(){return Bf||(Bf=1,(function(l,u){(function(p){p(os())})(function(p){var g="CodeMirror-hint",y="CodeMirror-hint-active";p.showHint=function(D,W,F){if(!W)return D.showHint(F);F&&F.async&&(W.async=!0);var q={hint:W};if(F)for(var Y in F)q[Y]=F[Y];return D.showHint(q)},p.defineExtension("showHint",function(D){D=k(this,this.getCursor("start"),D);var W=this.listSelections();if(!(W.length>1)){if(this.somethingSelected()){if(!D.hint.supportsSelection)return;for(var F=0;F<W.length;F++)if(W[F].head.line!=W[F].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var q=this.state.completionActive=new b(this,D);q.options.hint&&(p.signal(this,"startCompletion",this),q.update(!0))}}),p.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function b(D,W){if(this.cm=D,this.options=W,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var F=this;D.on("cursorActivity",this.activityFunc=function(){F.cursorActivity()})}}var _=window.requestAnimationFrame||function(D){return setTimeout(D,1e3/60)},C=window.cancelAnimationFrame||clearTimeout;b.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&p.signal(this.data,"close"),this.widget&&this.widget.close(),p.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(D,W){var F=D.list[W],q=this;this.cm.operation(function(){F.hint?F.hint(q.cm,D,F):q.cm.replaceRange(E(F),F.from||D.from,F.to||D.to,"complete"),p.signal(D,"pick",F),q.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(C(this.debounce),this.debounce=0);var D=this.startPos;this.data&&(D=this.data.from);var W=this.cm.getCursor(),F=this.cm.getLine(W.line);if(W.line!=this.startPos.line||F.length-W.ch!=this.startLen-this.startPos.ch||W.ch<D.ch||this.cm.somethingSelected()||!W.ch||this.options.closeCharacters.test(F.charAt(W.ch-1)))this.close();else{var q=this;this.debounce=_(function(){q.update()}),this.widget&&this.widget.disable()}},update:function(D){if(this.tick!=null){var W=this,F=++this.tick;ee(this.options.hint,this.cm,this.options,function(q){W.tick==F&&W.finishUpdate(q,D)})}},finishUpdate:function(D,W){this.data&&p.signal(this.data,"update");var F=this.widget&&this.widget.picked||W&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=D,D&&D.list.length&&(F&&D.list.length==1?this.pick(D,0):(this.widget=new R(this,D),p.signal(D,"shown")))}};function k(D,W,F){var q=D.options.hintOptions,Y={};for(var he in oe)Y[he]=oe[he];if(q)for(var he in q)q[he]!==void 0&&(Y[he]=q[he]);if(F)for(var he in F)F[he]!==void 0&&(Y[he]=F[he]);return Y.hint.resolve&&(Y.hint=Y.hint.resolve(D,W)),Y}function E(D){return typeof D=="string"?D:D.text}function N(D,W){var F={Up:function(){W.moveFocus(-1)},Down:function(){W.moveFocus(1)},PageUp:function(){W.moveFocus(-W.menuSize()+1,!0)},PageDown:function(){W.moveFocus(W.menuSize()-1,!0)},Home:function(){W.setFocus(0)},End:function(){W.setFocus(W.length-1)},Enter:W.pick,Tab:W.pick,Esc:W.close},q=/Mac/.test(navigator.platform);q&&(F["Ctrl-P"]=function(){W.moveFocus(-1)},F["Ctrl-N"]=function(){W.moveFocus(1)});var Y=D.options.customKeys,he=Y?{}:F;function le(Ne,ie){var Te;typeof ie!="string"?Te=function(se){return ie(se,W)}:F.hasOwnProperty(ie)?Te=F[ie]:Te=ie,he[Ne]=Te}if(Y)for(var we in Y)Y.hasOwnProperty(we)&&le(we,Y[we]);var He=D.options.extraKeys;if(He)for(var we in He)He.hasOwnProperty(we)&&le(we,He[we]);return he}function I(D,W){for(;W&&W!=D;){if(W.nodeName.toUpperCase()==="LI"&&W.parentNode==D)return W;W=W.parentNode}}function R(D,W){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=D,this.data=W,this.picked=!1;var F=this,q=D.cm,Y=q.getInputField().ownerDocument,he=Y.defaultView||Y.parentWindow,le=this.hints=Y.createElement("ul");le.setAttribute("role","listbox"),le.setAttribute("aria-expanded","true"),le.id=this.id;var we=D.cm.options.theme;le.className="CodeMirror-hints "+we,this.selectedHint=W.selectedHint||0;for(var He=W.list,Ne=0;Ne<He.length;++Ne){var ie=le.appendChild(Y.createElement("li")),Te=He[Ne],se=g+(Ne!=this.selectedHint?"":" "+y);Te.className!=null&&(se=Te.className+" "+se),ie.className=se,Ne==this.selectedHint&&ie.setAttribute("aria-selected","true"),ie.id=this.id+"-"+Ne,ie.setAttribute("role","option"),Te.render?Te.render(ie,W,Te):ie.appendChild(Y.createTextNode(Te.displayText||E(Te))),ie.hintId=Ne}var ye=D.options.container||Y.body,L=q.cursorCoords(D.options.alignWithWord?W.from:null),J=L.left,K=L.bottom,j=!0,A=0,G=0;if(ye!==Y.body){var M=["absolute","relative","fixed"].indexOf(he.getComputedStyle(ye).position)!==-1,Q=M?ye:ye.offsetParent,Se=Q.getBoundingClientRect(),De=Y.body.getBoundingClientRect();A=Se.left-De.left-Q.scrollLeft,G=Se.top-De.top-Q.scrollTop}le.style.left=J-A+"px",le.style.top=K-G+"px";var qe=he.innerWidth||Math.max(Y.body.offsetWidth,Y.documentElement.offsetWidth),ke=he.innerHeight||Math.max(Y.body.offsetHeight,Y.documentElement.offsetHeight);ye.appendChild(le),q.getInputField().setAttribute("aria-autocomplete","list"),q.getInputField().setAttribute("aria-owns",this.id),q.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var Ie=D.options.moveOnOverlap?le.getBoundingClientRect():new DOMRect,Ue=D.options.paddingForScrollbar?le.scrollHeight>le.clientHeight+1:!1,Ke;setTimeout(function(){Ke=q.getScrollInfo()});var tt=Ie.bottom-ke;if(tt>0){var $e=Ie.bottom-Ie.top,Ht=Ie.top-(L.bottom-L.top)-2;ke-Ie.top<Ht?($e>Ht&&(le.style.height=($e=Ht)+"px"),le.style.top=(K=L.top-$e)-G+"px",j=!1):le.style.height=ke-Ie.top-2+"px"}var Gt=Ie.right-qe;if(Ue&&(Gt+=q.display.nativeBarWidth),Gt>0&&(Ie.right-Ie.left>qe&&(le.style.width=qe-5+"px",Gt-=Ie.right-Ie.left-qe),le.style.left=(J=Math.max(L.left-Gt-A,0))+"px"),Ue)for(var _t=le.firstChild;_t;_t=_t.nextSibling)_t.style.paddingRight=q.display.nativeBarWidth+"px";if(q.addKeyMap(this.keyMap=N(D,{moveFocus:function(rt,et){F.changeActive(F.selectedHint+rt,et)},setFocus:function(rt){F.changeActive(rt)},menuSize:function(){return F.screenAmount()},length:He.length,close:function(){D.close()},pick:function(){F.pick()},data:W})),D.options.closeOnUnfocus){var vt;q.on("blur",this.onBlur=function(){vt=setTimeout(function(){D.close()},100)}),q.on("focus",this.onFocus=function(){clearTimeout(vt)})}q.on("scroll",this.onScroll=function(){var rt=q.getScrollInfo(),et=q.getWrapperElement().getBoundingClientRect();Ke||(Ke=q.getScrollInfo());var Kt=K+Ke.top-rt.top,Ge=Kt-(he.pageYOffset||(Y.documentElement||Y.body).scrollTop);if(j||(Ge+=le.offsetHeight),Ge<=et.top||Ge>=et.bottom)return D.close();le.style.top=Kt+"px",le.style.left=J+Ke.left-rt.left+"px"}),p.on(le,"dblclick",function(rt){var et=I(le,rt.target||rt.srcElement);et&&et.hintId!=null&&(F.changeActive(et.hintId),F.pick())}),p.on(le,"click",function(rt){var et=I(le,rt.target||rt.srcElement);et&&et.hintId!=null&&(F.changeActive(et.hintId),D.options.completeOnSingleClick&&F.pick())}),p.on(le,"mousedown",function(){setTimeout(function(){q.focus()},20)});var We=this.getSelectedHintRange();return(We.from!==0||We.to!==0)&&this.scrollToActive(),p.signal(W,"select",He[this.selectedHint],le.childNodes[this.selectedHint]),!0}R.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var D=this.completion.cm.getInputField();D.removeAttribute("aria-activedescendant"),D.removeAttribute("aria-owns");var W=this.completion.cm;this.completion.options.closeOnUnfocus&&(W.off("blur",this.onBlur),W.off("focus",this.onFocus)),W.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var D=this;this.keyMap={Enter:function(){D.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(D,W){if(D>=this.data.list.length?D=W?this.data.list.length-1:0:D<0&&(D=W?0:this.data.list.length-1),this.selectedHint!=D){var F=this.hints.childNodes[this.selectedHint];F&&(F.className=F.className.replace(" "+y,""),F.removeAttribute("aria-selected")),F=this.hints.childNodes[this.selectedHint=D],F.className+=" "+y,F.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",F.id),this.scrollToActive(),p.signal(this.data,"select",this.data.list[this.selectedHint],F)}},scrollToActive:function(){var D=this.getSelectedHintRange(),W=this.hints.childNodes[D.from],F=this.hints.childNodes[D.to],q=this.hints.firstChild;W.offsetTop<this.hints.scrollTop?this.hints.scrollTop=W.offsetTop-q.offsetTop:F.offsetTop+F.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=F.offsetTop+F.offsetHeight-this.hints.clientHeight+q.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var D=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-D),to:Math.min(this.data.list.length-1,this.selectedHint+D)}}};function V(D,W){if(!D.somethingSelected())return W;for(var F=[],q=0;q<W.length;q++)W[q].supportsSelection&&F.push(W[q]);return F}function ee(D,W,F,q){if(D.async)D(W,q,F);else{var Y=D(W,F);Y&&Y.then?Y.then(q):q(Y)}}function H(D,W){var F=D.getHelpers(W,"hint"),q;if(F.length){var Y=function(he,le,we){var He=V(he,F);function Ne(ie){if(ie==He.length)return le(null);ee(He[ie],he,we,function(Te){Te&&Te.list.length>0?le(Te):Ne(ie+1)})}Ne(0)};return Y.async=!0,Y.supportsSelection=!0,Y}else return(q=D.getHelper(D.getCursor(),"hintWords"))?function(he){return p.hint.fromList(he,{words:q})}:p.hint.anyword?function(he,le){return p.hint.anyword(he,le)}:function(){}}p.registerHelper("hint","auto",{resolve:H}),p.registerHelper("hint","fromList",function(D,W){var F=D.getCursor(),q=D.getTokenAt(F),Y,he=p.Pos(F.line,q.start),le=F;q.start<F.ch&&/\w/.test(q.string.charAt(F.ch-q.start-1))?Y=q.string.substr(0,F.ch-q.start):(Y="",he=F);for(var we=[],He=0;He<W.words.length;He++){var Ne=W.words[He];Ne.slice(0,Y.length)==Y&&we.push(Ne)}if(we.length)return{list:we,from:he,to:le}}),p.commands.autocomplete=p.showHint;var oe={hint:p.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};p.defineOption("hintOptions",null)})})()),Hf.exports}Xx();var Uf={exports:{}},qf;function Qx(){return qf||(qf=1,(function(l,u){(function(p){p(os())})(function(p){var g=/[\w$]+/,y=500;p.registerHelper("hint","anyword",function(b,_){for(var C=_&&_.word||g,k=_&&_.range||y,E=b.getCursor(),N=b.getLine(E.line),I=E.ch,R=I;R&&C.test(N.charAt(R-1));)--R;for(var V=R!=I&&N.slice(R,I),ee=_&&_.list||[],H={},oe=new RegExp(C.source,"g"),D=-1;D<=1;D+=2)for(var W=E.line,F=Math.min(Math.max(W+D*k,b.firstLine()),b.lastLine())+D;W!=F;W+=D)for(var q=b.getLine(W),Y;Y=oe.exec(q);)W==E.line&&Y[0]===V||(!V||Y[0].lastIndexOf(V,0)==0)&&!Object.prototype.hasOwnProperty.call(H,Y[0])&&(H[Y[0]]=!0,ee.push(Y[0]));return{list:ee,from:p.Pos(E.line,R),to:p.Pos(E.line,I)}})})})()),Uf.exports}Qx();function Zx(l){return l==="python"?"python":l==="csharp"?"text/x-csharp":l==="java"?"text/x-java":l==="jsx"?{name:"javascript",jsx:!0}:l==="javascript"?"javascript":l==="html"?"htmlmixed":l==="css"?"css":"text/plain"}function Lm({value:l,onChange:u,language:p}){const g=Ce.useRef(null),y=Ce.useRef(null),b=Ce.useRef(u);return b.current=u,Ce.useEffect(()=>{const _=_f.fromTextArea(g.current,{mode:Zx(p),lineNumbers:!0,lineWrapping:!1,indentUnit:4,tabSize:4,indentWithTabs:!1,smartIndent:!0,electricChars:!0,autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,extraKeys:{Tab(k){if(k.somethingSelected())k.execCommand("indentMore");else{const E=k.getOption("indentUnit")-k.getCursor().ch%k.getOption("indentUnit");k.replaceSelection(" ".repeat(E),"end")}},"Shift-Tab":k=>k.execCommand("indentLess"),"Ctrl-Space":k=>k.showHint({hint:_f.hint.anyword,completeSingle:!1})}});_.getInputField().setAttribute("aria-label","Code editor"),_.on("change",k=>{var E;return(E=b.current)==null?void 0:E.call(b,k.getValue())}),y.current=_;const C=typeof ResizeObserver<"u"?new ResizeObserver(()=>_.refresh()):null;return C==null||C.observe(_.getWrapperElement()),()=>{C==null||C.disconnect(),_.toTextArea(),y.current=null}},[p]),Ce.useEffect(()=>{const _=y.current;if(_&&_.getValue()!==l){const C=_.getCursor();_.setValue(l??""),_.setCursor(C)}},[l]),c.jsx("div",{className:"code-editor-wrap",children:c.jsx("textarea",{ref:g,"aria-label":"Code editor",defaultValue:l,spellCheck:!1})})}const gd=l=>String(l??"").replace(/\r\n/g,`
`).replace(/\n$/,"");function eb(l){const u=Array.isArray(l)?l:[];return{passed:u.filter(p=>p.passed===!0).length,total:u.length}}function Kf(l,u){const p=String(l||"").split(/\r?\n/).find(y=>y.startsWith("PUBLIC_CHECK_RESULTS="));if(!p)throw new Error("Python returned no example-check results. See Console for errors.");const g=JSON.parse(p.slice(21));if(!Array.isArray(g)||g.length!==u.length)throw new Error("Python did not finish every published example.");return u.map((y,b)=>({call:y.call||"Example "+(b+1),expected:String(y.expected??""),received:String(g[b].actual??""),error:String(g[b].error||""),passed:g[b].ok===!0}))}function tb(l,u){return u.map((p,g)=>{var y,b,_,C;return{call:"main("+JSON.stringify(p.args||[])+")",expected:gd(p.expected),received:gd((y=l[g])==null?void 0:y.stdout),error:String(((b=l[g])==null?void 0:b.diagnostics)||((_=l[g])==null?void 0:_.stderr)||""),passed:((C=l[g])==null?void 0:C.success)===!0&&gd(l[g].stdout)===gd(p.expected)}})}function nb(l,u,p){return p(l,u.length).map(y=>({call:u[y.index].call,expected:y.expected,received:y.received,error:y.error,passed:y.passed}))}function Pm(l){return(l||[]).map((u,p)=>({call:String(u.call||u.label||"Check "+(p+1)),expected:String(u.expected??"Requirement met"),received:String(u.received??(u.pass===!0||u.passed===!0?"Requirement met":"Not yet met")),error:String(u.error||""),passed:u.pass===!0||u.passed===!0}))}function rb(l){var u;return((u=/^\s*(?:async\s+)?def\s+([A-Za-z_]\w*)\s*\(/m.exec(l))==null?void 0:u[1])||null}function ic(l,u){var p,g,y;return u==="python"?rb(l):u==="javascript"?((p=/(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:p[1])||null:u==="csharp"?((g=/\b(?:public\s+)?static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:g[1])||null:u==="java"&&((y=/\bpublic\s+static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:y[1])||null}const ib=ic;function Jp(l,u,p=null){if(typeof l=="string")return JSON.stringify(l);if(l===null)return"null";if(typeof l=="boolean")return String(l);if(typeof l=="number")return Number.isFinite(l)?String(l):"0";if(Array.isArray(l)){const g=l.every(k=>Number.isInteger(k)),y=l.every(k=>typeof k=="string"),b=l.every(k=>typeof k=="boolean"),_=l.length===0&&p?p:g?"int":y?"string":b?"bool":"double";return"new "+(u==="java"?_==="string"?"String":_==="bool"?"boolean":_:_)+"[]{"+l.map(k=>Jp(k,u)).join(",")+"}"}throw new Error("This example uses a data type unsupported by the browser checker.")}function Xp(l,u,p){var _;const g=ic(p,u)||ic(l.starter||"",u);if(!g)throw new Error("The checker could not find a function declaration.");const y=l.challengeExamples||[],b=(((_=y[0])==null?void 0:_.input)||[]).map((C,k)=>{const E=y.map(N=>{var I;return(I=N.input)==null?void 0:I[k]}).find(N=>Array.isArray(N)&&N.length>0);return Array.isArray(E)?typeof E[0]=="boolean"?"bool":typeof E[0]=="string"?"string":Number.isInteger(E[0])?"int":"double":null});return y.map(C=>({...C,call:g+"("+(C.input||[]).map((k,E)=>Jp(k,u,b[E])).join(", ")+")",expectedLiteral:Jp(C.expected,u),expected:String(C.expected)}))}function sb(l,u,p=!0){const g=ic(l,"python")||ic(u.starter||"","python");if(!g)throw new Error("Define the challenge function before running it.");const y=u.challengeExamples||[];return["import json as __json, io as __io, contextlib as __ctx","__source = "+JSON.stringify(l),"__cases = __json.loads("+JSON.stringify(JSON.stringify(p?y:y.slice(0,1)))+")","__results = []","for __case in __cases:","    try:",'        __env = {"__name__":"student"}','        with __ctx.redirect_stdout(__io.StringIO()): exec(compile(__source,"main.py","exec"),__env)',"        __actual = __env["+JSON.stringify(g)+'](*__case["input"])','        __ok = type(__actual) is type(__case["expected"]) and __actual == __case["expected"]','        __results.append({"ok":__ok,"actual":repr(__actual)[:300],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","error":type(__error).__name__+": "+str(__error)[:300]})','print("PUBLIC_CHECK_RESULTS="+__json.dumps(__results))'].join(`
`)}function ob(l,u){const p=Xp(u,"java",l);if(!p.length)throw new Error("No visible examples are available.");const g=p.map((y,b)=>`try{Object actual=Solution.${y.call}; Object expected=${y.expectedLiteral}; boolean ok=java.util.Objects.deepEquals(actual,expected); String received=java.util.Arrays.deepToString(new Object[]{actual}); received=received.substring(1,received.length()-1); System.out.println("PLAYGROUND_CASE:${b}:"+(ok?"1":"0")+":"+received);}catch(Throwable error){System.out.println("PLAYGROUND_CASE:${b}:0:ERROR "+error.getClass().getSimpleName()+" "+error.getMessage());}`);return l+`
class __PlaygroundPracticeChecks {public static void main(String[] args) {`+g.join(`
`)+"}}"}function ab(l,u){const p=String(l||"").split(/\r?\n/).filter(g=>g.startsWith("PLAYGROUND_CASE:"));if(p.length!==u.length)throw new Error("Java did not return all published examples.");return u.map((g,y)=>{const b=p[y],_=/^PLAYGROUND_CASE:(\d+):([01]):([\s\S]*)$/.exec(b);if(!_||Number(_[1])!==y)throw Error("Java returned invalid check data.");return{call:g.call,expected:g.expected,received:_[3],passed:_[2]==="1",error:_[3].startsWith("ERROR ")?_[3]:""}})}function Am({text:l="",checksText:u="",checkRows:p=null,points:g=null,language:y,activeTab:b,onTabChange:_,previewEnabled:C=!1,previewDoc:k="",previewRef:E}){const N=C?["Preview","Console","Checks"]:["Console","Checks"],I=Array.isArray(p),{passed:R,total:V}=eb(p),ee=Number.isFinite(Number(g))&&g!==null&&V?Number(g)*R/V:null;return c.jsxs("section",{className:"console-pane","aria-label":"Workspace output",children:[c.jsxs("div",{className:"console-heading",children:[c.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Output views",children:N.map(H=>c.jsxs("button",{type:"button",role:"tab","aria-selected":b===H,className:b===H?"active":"",onClick:()=>_(H),children:[H==="Console"&&c.jsx(Dy,{size:14}),H]},H))}),c.jsx("span",{children:"Practice · no submissions"})]}),["html","css","javascript","jsx"].includes(y)&&c.jsx("div",{className:"console-preview",hidden:!C||b!=="Preview",children:c.jsx("iframe",{ref:E,title:"Live student code preview",className:"live-preview-frame",sandbox:"allow-scripts allow-forms",srcDoc:k||"<p>Choose Run to preview your code.</p>"})}),b==="Checks"?c.jsx("div",{className:"practice-check-content",role:"tabpanel","aria-label":"Check feedback",children:I?c.jsxs(c.Fragment,{children:[c.jsxs("p",{className:"check-summary",children:["Checks ",c.jsxs("strong",{children:[R," of ",V," passing"]})]}),c.jsx("p",{className:"check-next",children:R===V?"All published practice checks passed.":"Revise your code, then check again."}),c.jsx("div",{className:"practice-check-cards",children:p.map((H,oe)=>c.jsxs("article",{className:"practice-check-card "+(H.passed?"passed":"needs-revision"),children:[c.jsxs("header",{children:[c.jsx("code",{children:H.call||"Example "+(oe+1)}),c.jsx("span",{children:H.passed?"Pass":"Review"})]}),c.jsxs("dl",{children:[c.jsx("dt",{children:"Expected"}),c.jsx("dd",{children:c.jsx("pre",{children:H.expected??""})}),c.jsx("dt",{children:H.error?"Error":"Received"}),c.jsx("dd",{children:c.jsx("pre",{children:H.error||H.received||"None"})})]})]},oe))}),ee!==null&&c.jsxs("p",{className:"check-practice-score",children:["Public-check score: ",Number(ee.toFixed(2)),"/",g," practice points · ",R,"/",V," examples passed."]}),c.jsx("p",{className:"check-disclaimer",children:"Public examples only. These results do not award grades, completion, or earned points."})]}):c.jsx("pre",{className:"practice-check-message",children:u})}):b==="Console"?c.jsx("pre",{role:"tabpanel","aria-label":"Console output",children:l}):null]})}const lb="PUBLIC_CHECK_RESULTS=";function ub(l,u){const p=Array.isArray(l==null?void 0:l.cases)?l.cases:[],g=JSON.stringify(String(u)),y=JSON.stringify(JSON.stringify(p));return["import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx","import traceback as __trace","__student = "+g,"__cases = __json.loads("+y+")","__results = []","for __example in __cases:","    __out = __io.StringIO()","    try:",'        __env = {"__name__": "__main__"}',"        with __ctx.redirect_stdout(__out), __ctx.redirect_stderr(__out):",'            exec(compile(__student, "main.py", "exec"), __env)',(l==null?void 0:l.mode)==="function"?'            __actual = eval(compile(__ast.parse(__example["call"], mode="eval"), "example", "eval"), __env)':'            __actual = __out.getvalue().rstrip("\\n")',(l==null?void 0:l.mode)==="function"?'        __expected = __ast.literal_eval(__example["expected"])':'        __expected = __example["expected"].rstrip("\\n")',(l==null?void 0:l.mode)==="function"?"        __ok = type(__actual) is type(__expected) and __actual == __expected":"        __ok = __actual == __expected",'        __results.append({"ok":__ok,"actual":str(__actual)[:240],"expected":str(__expected)[:240],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","expected":str(__example.get("expected",""))[:240],"error":type(__error).__name__+": "+str(__error)[:200]})','print("'+lb+'"+__json.dumps(__results))'].join(`
`)+`
`}function cb(l,u){const p=String(u).split("(",1)[0].trim();return["import ast as __ast, io as __io, json as __json, contextlib as __ctx",'__env={"__name__":"student"}',"__stream=__io.StringIO()","with __ctx.redirect_stdout(__stream):","    exec(compile("+JSON.stringify(String(l))+',"main.py","exec"),__env)',"    __name="+JSON.stringify(p),'    if __name not in __env and callable(__env.get("solution")): __env[__name]=__env["solution"]',"    __value=eval(compile(__ast.parse("+JSON.stringify(String(u))+',mode="eval"),"sample call","eval"),__env)','print("PLAYGROUND_PREVIEW="+__json.dumps({"call":'+JSON.stringify(String(u))+',"returned":repr(__value)[:5000],"printed":__stream.getvalue()[:10000]}))'].join(`
`)}const db="modulepreload",pb=function(l){return"/playground/preview/"+l},$f={},Rm=function(u,p,g){let y=Promise.resolve();if(p&&p.length>0){let _=function(E){return Promise.all(E.map(N=>Promise.resolve(N).then(I=>({status:"fulfilled",value:I}),I=>({status:"rejected",reason:I}))))};document.getElementsByTagName("link");const C=document.querySelector("meta[property=csp-nonce]"),k=(C==null?void 0:C.nonce)||(C==null?void 0:C.getAttribute("nonce"));y=_(p.map(E=>{if(E=pb(E),E in $f)return;$f[E]=!0;const N=E.endsWith(".css"),I=N?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${E}"]${I}`))return;const R=document.createElement("link");if(R.rel=N?"stylesheet":db,N||(R.as="script"),R.crossOrigin="",R.href=E,k&&R.setAttribute("nonce",k),document.head.appendChild(R),N)return new Promise((V,ee)=>{R.addEventListener("load",V),R.addEventListener("error",()=>ee(new Error(`Unable to preload CSS for ${E}`)))})}))}function b(_){const C=new Event("vite:preloadError",{cancelable:!0});if(C.payload=_,window.dispatchEvent(C),!C.defaultPrevented)throw _}return y.then(_=>{for(const C of _||[])C.status==="rejected"&&b(C.reason);return u().catch(b)})},Ls="/playground/";async function hb(l,u=()=>{}){if(l==="python"){const{PythonRunner:p}=await Rm(async()=>{const{PythonRunner:g}=await import("./pythonRunner-lCn9BIec.js");return{PythonRunner:g}},[]);return{kind:"python",instance:new p({onStatus:u})}}if(l==="java"){const{JavaRunner:p}=await import(Ls+"java-runner.mjs");return{kind:"java",instance:new p(u)}}if(l==="csharp"){const[{CSharpRunner:p},g]=await Promise.all([import(Ls+"csharp-runner.mjs"),import(Ls+"csharp-protocol.mjs")]);return{kind:"csharp",instance:new p({onStatus:u}),protocol:g}}throw Error("No code compiler for "+l)}function fb(l){var u;return((u=/\b(?:public\s+)?(?:static\s+)?class\s+([A-Za-z_]\w*)/.exec(String(l||"")))==null?void 0:u[1])||""}const Gf='<main class="event-card"><h1>Robotics meetup</h1><p>Thursday at 4 PM in the lab.</p><p>Attendees: <span id="count">0</span></p><button id="join">Join</button></main>',bd=l=>JSON.stringify(String(l)).replace(/</g,"\\u003c");function mb(l){return l==="html"?`(()=>{
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
  })();`}function gb(l,u,p){var _;const g=(u.challengeExamples||[]).slice(0,p?void 0:1);if(!g.length)throw Error("No public challenge examples were published.");const y=(_=/\b(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:_[1];if(!y)throw Error("Define and export the challenge function.");const b=String(l).replace(/\bexport\s+(?=(?:async\s+)?function|const|let|class)/g,"");return`(()=>{
    const cases=${JSON.stringify(g)};
    const results=[];
    try{
      const fn=new Function(${bd(b+"; return "+y+";")})();
      for(const row of cases){
        try{
          const got=fn(...row.input);
          const expected=row.expected;
          const pass=JSON.stringify(got)===JSON.stringify(expected);
          results.push({label:${bd(y)}+'('+row.input.map(x=>JSON.stringify(x)).join(', ')+')',
            expected:JSON.stringify(expected),received:JSON.stringify(got),pass});
        }catch(e){results.push({label:${bd(y)}+'(...)',expected:JSON.stringify(row.expected),
          received:'',error:e.name+': '+e.message,pass:false});}
      }
      if(${p?"true":"false"})send('checks',{results});
      else results.forEach(row=>send('log',{level:row.pass?'info':'warn',text:row.label+' → '+(row.error || row.received)+' (expected '+row.expected+')'}));
    }catch(e){send('error',{text:e.name+': '+e.message});}
  })();`}function yb(l){return"<script>"+l.replace(/<\/script/gi,"<\\/script")+"<\/script>"}async function kh({code:l,language:u,lessonId:p,task:g={},token:y,check:b=!0}){if(!y)throw Error("A preview token is required.");if(g.webFiles){const{assembleWebFiles:H}=await Rm(async()=>{const{assembleWebFiles:le}=await Promise.resolve().then(()=>wb);return{assembleWebFiles:le}},[]),oe=u==="jsx"?"App.jsx":"script.js";let D=null;u==="jsx"&&(typeof window.PlaygroundJSX!="function"&&await new Promise((le,we)=>{const He=document.createElement("script");He.src=Ls+"vendor/learning/jsx.js",He.onload=le,He.onerror=()=>we(Error("React JSX compiler could not load.")),document.head.append(He)}),D=window.PlaygroundJSX(g.webFiles["App.jsx"]||""));const{html:W,linkedStyle:F,linkedScript:q}=H(g.webFiles,{scriptName:oe,scriptOverride:D});if(g.projectId){const{buildProjectPreview:le}=await import(Ls+"project-preview.mjs");return le(W,{token:y,step:g.stepId,projectId:g.projectId,check:b})}const Y='<script src="'+Ls+'vendor/learning/react.js"><\/script>',he=u==="jsx"?/<\/head\s*>/i.test(W)?W.replace(/<\/head\s*>/i,Y+"</head>"):Y+W:W;return kh({code:he,language:"html",lessonId:p,task:{},token:y,check:b})}if(g.projectId){const{buildProjectPreview:H}=await import(Ls+"project-preview.mjs");return H(l,{token:y,step:g.stepId,projectId:g.projectId,check:b})}const{previewConsoleBridge:_}=await import(Ls+"console-drawer.mjs"),C=yb(_(y)),k=bd;let E="",N="",I="";if(g.isChallenge&&u==="javascript")E="<main><h2>JavaScript challenge</h2><p>See the Checks and Console tabs for actual function results.</p></main>",N=gb(l,g,b);else if(u==="html")E=String(l);else if(u==="css")E="<style>"+String(l).replace(/<\/style/gi,"")+"</style>"+Gf;else if(u==="javascript")E=Gf,N=l;else if(u==="jsx")E='<div id="root"></div>',typeof window.PlaygroundJSX!="function"&&await new Promise((H,oe)=>{const D=document.createElement("script");D.src=Ls+"vendor/learning/jsx.js",D.onload=H,D.onerror=()=>oe(Error("React JSX compiler could not load.")),document.head.append(D)}),N=window.PlaygroundJSX(l),I='<script src="'+Ls+'vendor/learning/react.js"><\/script>';else throw Error("Preview is not supported for "+u);const R=g.isChallenge&&u==="javascript"?"":mb(p),V=g.isChallenge&&u==="javascript"?"<script>try{"+N+';send("ready");}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>':"<script>try{(0,eval)("+k(N)+');setTimeout(()=>{send("ready");'+(b?R:"")+'},180)}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>',ee='<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="form-action &apos;none&apos;"><style>body{font:16px/1.55 system-ui,sans-serif;padding:16px}button{padding:8px 15px}</style>'+C+I;if(u==="html"){const H=String(E).replace(/^\s*<!doctype[^>]*>/i,"");return"<!doctype html>"+(/<head(?:\s[^>]*)?>/i.test(H)?H.replace(/<head(?:\s[^>]*)?>/i,D=>D+ee):"<head>"+ee+"</head>"+H)+V}return"<!doctype html><html><head>"+ee+"</head><body>"+E+V+"</body></html>"}function Im({lessonId:l,task:u}){const p=u.storageKey||wh.code(l),g=!!u.projectDraft,y=!!u.isChallenge,b=Ce.useRef(null),_=Ce.useRef(null),C=Ce.useRef(null),k=Ce.useRef(null),E=Ce.useRef(null),[N,I]=Ce.useState(!1),[R,V]=Ce.useState(u.starter||""),[ee,H]=Ce.useState(u.console||"Press Run to execute the code."),[oe,D]=Ce.useState(""),[W,F]=Ce.useState("Choose Check to run the published examples. Your scores are not recorded."),[q,Y]=Ce.useState(null),[he,le]=Ce.useState(""),we=["html","css","javascript","jsx"].includes(u.language),He=we&&!y,[Ne,ie]=Ce.useState(He?"Preview":"Console"),[Te,se]=un("designlab:editor-height",300);Ce.useEffect(()=>{V(Ld(p)??u.starter??""),H(u.console||"Run to see your program output."),F("Choose Check to run the published examples. Your scores are not recorded."),Y(null),ie(we&&!y?"Preview":"Console"),le(""),D("")},[p,u.language,u.starter,u.console,we,y]),Ce.useEffect(()=>()=>{var A;clearTimeout(E.current),k.current=null,(A=_.current)==null||A.instance.dispose(),_.current=null},[]),Ce.useEffect(()=>{function A(G){var Se;const M=k.current;if(!M||!C.current||G.source!==C.current.contentWindow||((Se=G.data)==null?void 0:Se.token)!==M.token)return;const Q=G.data;Q.kind==="log"&&H(De=>(De==="Run to see your program output."?"":De)+"["+(Q.level||"log")+"] "+Q.text+`
`),Q.kind==="clear"&&H(""),Q.kind==="error"&&(clearTimeout(E.current),H(De=>De+"Error: "+Q.text+`
`),M.check&&F("Fix the runtime error, then try Check again."),k.current=null,I(!1),ie("Console")),(Q.kind==="checks"||Q.kind==="project-checks")&&(clearTimeout(E.current),Y(Pm(Q.results||(Q.text?[{label:Q.text,pass:Q.pass}]:[]))),k.current=null,I(!1),ie("Checks")),Q.kind==="ready"&&!M.check&&(clearTimeout(E.current),k.current=null,I(!1))}return window.addEventListener("message",A),()=>window.removeEventListener("message",A)},[]);function ye(A){if(!b.current)return;const G=b.current.getBoundingClientRect();se(Math.max(160,Math.min(G.height-120,A.clientY-G.top)))}async function L(){var A;if(!_.current||_.current.language!==u.language){(A=_.current)==null||A.instance.dispose();const G=await hb(u.language,M=>H(M));_.current={...G,language:u.language}}return _.current}async function J(A){var Q,Se,De,qe,ke,Ie,Ue,Ke,tt,$e,Ht,Gt;const G=u.language;if(G==="java"&&u.environment==="ide")throw Error("This activity uses Java 26 file I/O and requires a full Java IDE. Browser execution is not supported for this exercise.");const M=await L();if(G==="python"){let _t=R;if(y)_t=sb(R,{...u,starter:u.starter},A);else if(A){if(!((Q=u.cases)!=null&&Q.length))throw Error("This lesson has no published examples.");_t=ub(u,R)}else u.mode==="function"&&((De=(Se=u.cases)==null?void 0:Se[0])!=null&&De.call)&&(_t=cb(R,u.cases[0].call));const vt=await M.instance.run(_t);if(A){const We=y?u.challengeExamples.map(rt=>({call:(ib(R,"python")||"Function")+"("+rt.input.map(et=>JSON.stringify(et)).join(", ")+")",expected:JSON.stringify(rt.expected)})):u.cases;Y(Kf(vt.output,We)),H("Python completed the public checks. Review individual results in Checks.")}else if(y){const We=Kf(vt.output,[{call:"First published example",expected:JSON.stringify(u.challengeExamples[0].expected)}]);H(We[0].error||"First example returned "+We[0].received+". Expected "+We[0].expected+".")}else if(u.mode==="function"&&((ke=(qe=u.cases)==null?void 0:qe[0])!=null&&ke.call)){const We=String(vt.output||"").split(`
`).find(rt=>rt.startsWith("PLAYGROUND_PREVIEW="));if(We){const rt=JSON.parse(We.slice(19));H(rt.call+`
Returned: `+rt.returned+(rt.printed?`
Printed: `+rt.printed:""))}else H(vt.output||"No return value was captured. See your code and retry.")}else H(vt.output||(vt.success?"Program finished with no printed output.":"The Python program stopped."))}if(G==="java"){if(u.environment==="ide")throw Error("This lesson uses Java 26 file input and must run in a full Java IDE. Browser execution is not supported.");if(y){const _t=Xp(u,"java",R),vt=A?_t:_t.slice(0,1),We=await M.instance.run(ob(R,{...u,challengeExamples:vt}),[]);if(!We.success)throw Error([We.stdout,We.stderr,We.diagnostics].filter(Boolean).join(`
`));const rt=ab(We.stdout,vt);A?Y(rt):H(rt.map(et=>et.call+`
Received: `+et.received+`
Expected: `+et.expected).join(`
`))}else{const _t=A?u.cases||[]:[{args:u.runArgs||((Ue=(Ie=u.cases)==null?void 0:Ie[0])==null?void 0:Ue.args)||[]}];if(A&&!_t.length)throw Error("No public Java examples are available for this exercise.");const vt=[];for(const We of _t){const rt=await M.instance.run(R,We.args||[]);if(vt.push(rt),!rt.success)break}if(A){const We=tb(vt,_t);if(vt.length!==_t.length)throw Error("Java stopped before completing all published examples: "+(((Ke=vt.at(-1))==null?void 0:Ke.diagnostics)||((tt=vt.at(-1))==null?void 0:tt.stderr)||"Unknown error"));Y(We),H("Java completed the published checks. Review the Checks tab.")}else H([($e=vt[0])==null?void 0:$e.stdout,(Ht=vt[0])==null?void 0:Ht.stderr,(Gt=vt[0])==null?void 0:Gt.diagnostics].filter(Boolean).join(`
`)||"Java ran without printed output.")}}if(G==="csharp"){const _t=M.protocol,vt=y?Xp(u,"csharp",R).map(ae=>({...ae,call:Array.isArray(ae.expected)?ae.call+".SequenceEqual("+ae.expectedLiteral+")":ae.call,arrayResult:Array.isArray(ae.expected),expected:Array.isArray(ae.expected)?"true":ae.expectedLiteral})):u.cases||[],We=y?"Solution":fb(R),rt=A||y&&vt.length>0;if(A&&!vt.length)throw Error("No public C# examples are available for this exercise.");if(rt&&!We)throw Error("The C# checker could not find the public class name.");const et=A?vt:vt.slice(0,1),Kt=rt?_t.buildChecks(et,We):null,Ge=Kt&&et.some(ae=>ae.arrayResult)?`using System.Linq;
`+Kt:Kt,ht=await M.instance.run(R,Ge);if(!ht.compiled||!ht.success)throw Error([ht.diagnostics,ht.stderr].filter(Boolean).join(`
`)||"C# could not execute.");if(rt){const ae=nb(ht.stdout,et,_t.parseChecks);A?Y(ae):H(ae.map(_e=>_e.call+`
Received: `+_e.received+`
Expected: `+_e.expected).join(`
`))}else H(ht.stdout||"C# executed without printed output.")}}async function K(A){if(!N){I(!0),D(""),Y(null),A?(F("Running published example checks…"),ie("Checks")):(H("Preparing runner…"),ie(He?"Preview":"Console"));try{if(we){const G=crypto.randomUUID();k.current={token:G,check:A};const M=await kh({code:R,language:u.language,lessonId:l,task:u,token:G,check:A});le(M),H(""),clearTimeout(E.current),E.current=setTimeout(()=>{var Q;((Q=k.current)==null?void 0:Q.token)===G&&(k.current=null,I(!1),H("The preview did not finish within 7 seconds. Check for errors or an infinite loop."),F("Practice timed out. No result was recorded."),C.current&&(C.current.srcdoc="<p>Preview stopped after timeout.</p>"),ie("Console"))},7e3)}else await J(A),I(!1)}catch(G){clearTimeout(E.current),k.current=null,I(!1);const M=String((G==null?void 0:G.message)||G);H(M),ie("Console"),A&&F("Check unavailable: "+M)}}}function j(A){if(!N){if(A==="Run"||A==="Check"){K(A==="Check");return}if(A==="Save"){ho(p,R),D("Draft saved in this browser only.");return}A==="Reset"&&(V(u.starter||""),ho(p,u.starter||""),Y(null),le(""),F("Choose Check to run published examples again."),H("Starter code restored. No points were recorded."),ie(He?"Preview":"Console"))}}return c.jsxs("div",{className:"code-pane",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx(Od,{size:16})," Editor"]}),c.jsxs("div",{className:"right-meta",children:[u.language.toUpperCase()," ",c.jsx(ss,{children:"Live practice"})]})]}),c.jsxs("div",{className:"code-workspace",ref:b,style:{"--editor-height":Te+"px"},children:[c.jsx(Lm,{value:R,language:u.language,onChange:A=>{V(A),(g||y)&&ho(p,A),D(""),Y(null),F("Code changed. Choose Check to run fresh examples.")}}),c.jsx(cc,{axis:"rows",onDrag:ye}),c.jsx(Am,{text:ee,checksText:W,checkRows:q,points:u.points,language:u.language,lessonId:l,previewEnabled:He,previewDoc:he,previewRef:C,activeTab:Ne,onTabChange:ie})]}),c.jsxs("div",{className:"editor-controls",children:[c.jsxs("div",{children:[["Run","Check","Reset"].map(A=>c.jsx("button",{type:"button",className:"btn",disabled:N,onClick:()=>j(A),children:A},A)),N&&c.jsx("button",{type:"button",className:"btn",onClick:()=>{var A,G,M;(M=(A=_.current)==null?void 0:(G=A.instance).stop)==null||M.call(G),k.current=null,clearTimeout(E.current),I(!1),H("Execution stopped.")},children:"Stop"})]}),c.jsxs("div",{children:[c.jsxs("button",{type:"button",className:"btn",disabled:N,onClick:()=>j("Save"),children:[c.jsx(Td,{size:15})," Save"]}),c.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submission and official grading are not connected in this preview",children:[c.jsx(ah,{size:15})," Submit (not enabled)"]})]})]}),c.jsx("div",{className:"editor-note",role:"status",children:oe||"Run executes code locally; Check tests public examples only. No grades, points or hand-ins are recorded."})]})}const Sh=Object.freeze(["index.html","styles.css","script.js"]),_h=Object.freeze(["index.html","styles.css","App.jsx"]),Om=l=>l==="jsx"?_h:Sh,Qp=`<!doctype html>
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
</html>`,vb=`<!doctype html>
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
</html>`;function Mm(l){return l.endsWith(".html")?"html":l.endsWith(".css")?"css":l.endsWith(".jsx")?"jsx":"javascript"}function Zp(l,u=""){const p=String(u).toLowerCase();return l==="jsx"||p==="react"?"App.jsx":l==="css"||/css|style|readable|responsive/.test(p)?"styles.css":l==="javascript"||/\bjs\b|javascript|script|function|array|object|dom|event|state|team|matchup|pick|scor|leaderboard|test|integrat|interact/.test(p)?"script.js":"index.html"}function xb(l,u="script.js"){if(!l.trim())return"";let p=l;if(!/<link\b[^>]*href\s*=\s*["']styles\.css["'][^>]*>/i.test(p)){const g=`  <link rel="stylesheet" href="styles.css">
`;p=/<\/head\s*>/i.test(p)?p.replace(/<\/head\s*>/i,g+"</head>"):g+p}if(!p.includes('src="'+u+'"')&&!p.includes("src='"+u+"'")){const g='  <script src="'+u+`" defer><\/script>
`;p=/<\/body\s*>/i.test(p)?p.replace(/<\/body\s*>/i,g+"</body>"):p+`
`+g}return p}function sc(l){let u=String(l??"");const p=[],g=[];return u=u.replace(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi,(y,b)=>(p.push(b.trim().replace(/^(?: {4}|\t)/gm,"")),"")),u=u.replace(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi,(y,b,_)=>/\bsrc\s*=/.test(b)||/\btype\s*=\s*["'](?:application\/json|application\/ld\+json|importmap)["']/i.test(b)?y:(g.push(_.trim().replace(/^(?: {4}|\t)/gm,"")),"")),{"index.html":xb(u.replace(/\n{3,}/g,`

`).trim(),"script.js"),"styles.css":p.join(`

`),"script.js":g.join(`

`)}}function Dm(l,u){const p=String(u??"");if(l==="jsx")return{"index.html":vb,"styles.css":"","App.jsx":p};if(l==="html")return sc(p);if(l==="css")return{"index.html":Qp,"styles.css":p,"script.js":""};if(l==="javascript")return{"index.html":Qp,"styles.css":"","script.js":p};throw Error("Not a web lesson: "+l)}const zm=l=>sc(l);function Ja(l,u){if(![...Sh,..._h].includes(u))throw Error("Unknown workspace file");return l+":file:"+u}function Fm({base:l,starters:u,legacy:p,read:g,write:y}){const b=Object.keys(u),_=Object.fromEntries(b.map(N=>[N,g(Ja(l,N))]));if(b.some(N=>_[N]!==null&&_[N]!==void 0))return Object.fromEntries(b.map(N=>[N,_[N]??u[N]??""]));const k=p!=null?u["App.jsx"]!==void 0?{...u,"App.jsx":p}:Object.prototype.hasOwnProperty.call(u,"index.html")&&(u["styles.css"]||u["script.js"])&&/<html|<style|<script/i.test(p)||u["index.html"]!==void 0&&/<html|<!doctype|<body/i.test(p)?sc(p):{...u,[u["index.html"]===Qp?u["script.js"]?"script.js":"styles.css":"index.html"]:p}:u,E=Object.fromEntries(b.map(N=>[N,k[N]??u[N]??""]));return b.forEach(N=>y(Ja(l,N),E[N])),E}function Yf(l,u){return String(l??"").replace(new RegExp("</"+u,"gi"),"<\\/"+u)}function bb(l,{scriptName:u="script.js",scriptOverride:p=null}={}){let g=String((l==null?void 0:l["index.html"])??"");const y=String((l==null?void 0:l["styles.css"])??""),b=String(p===null?(l==null?void 0:l[u])??"":p);let _=!1,C=!1;if(g=g.replace(/<link\b[^>]*>/gi,k=>/\bhref\s*=\s*["'](?:\.\/)?styles\.css["']/i.test(k)&&/\brel\s*=\s*["']stylesheet["']/i.test(k)?(_=!0,'<style data-web-file="styles.css">'+Yf(y,"style")+"</style>"):k),g=g.replace(/<script\b([^>]*)>\s*<\/script\s*>/gi,(k,E)=>{const N=/\bsrc\s*=\s*["']([^"']+)["']/i.exec(E);return N&&N[1].replace(/^\.\//,"")===u?(C=!0,""):k}),C){const k='<script data-web-file="'+u+'">'+Yf(b,"script")+"<\/script>";g=/<\/body\s*>/i.test(g)?g.replace(/<\/body\s*>/i,k+`
</body>`):g+`
`+k}return{html:g,linkedStyle:_,linkedScript:C}}const wb=Object.freeze(Object.defineProperty({__proto__:null,REACT_FILE_NAMES:_h,WEB_FILE_NAMES:Sh,assembleWebFiles:bb,fileLanguage:Mm,fileNamesFor:Om,initialFocus:Zp,lessonStarterFiles:Dm,loadWebDrafts:Fm,projectStarterFiles:zm,splitEmbeddedWebSource:sc,webDraftKey:Ja},Symbol.toStringTag,{value:"Module"}));function Wm({lessonId:l,task:u}){const p=wh.code(l),g=Om(u.language),y=u.starterFiles||(u.projectDraft?zm(u.starter):Dm(u.language,u.starter)),[b,_]=Ce.useState(()=>Fm({base:p,starters:y,legacy:Ld(p),read:Ld,write:ho})),[C,k]=Ce.useState(()=>Zp(u.language,u.focus)),[E,N]=Ce.useState("Run to render all your linked files together."),[I,R]=Ce.useState("Check runs the current published practice requirements."),[V,ee]=Ce.useState(null),[H,oe]=Ce.useState(""),[D,W]=Ce.useState("Preview"),[F,q]=Ce.useState(""),[Y,he]=Ce.useState(!1),[le,we]=un("designlab:web-files-editor-height",310),He=Ce.useRef(null),Ne=Ce.useRef(null),ie=Ce.useRef(null),Te=Ce.useRef(null);Ce.useEffect(()=>{const M=Zp(u.language,u.focus);k(g.includes(M)?M:"index.html")},[u.stepId,u.focus,u.language]),Ce.useEffect(()=>{const M=Q=>{var qe;const Se=Ne.current;if(!Se||!He.current||Q.source!==He.current.contentWindow||((qe=Q.data)==null?void 0:qe.token)!==Se.token)return;const De=Q.data;De.kind==="log"&&N(ke=>ke+(De.level==="error"?"Error: ":"")+De.text+`
`),De.kind==="clear"&&N(""),De.kind==="error"&&(clearTimeout(ie.current),Ne.current=null,N(ke=>ke+"Error: "+De.text+`
`),R("Fix the error reported in Console before checking again."),W("Console"),he(!1)),(De.kind==="checks"||De.kind==="project-checks")&&(clearTimeout(ie.current),Ne.current=null,ee(Pm(De.results||(De.text?[{label:De.text,pass:De.pass}]:[]))),W("Checks"),he(!1)),De.kind==="ready"&&!Se.check&&(clearTimeout(ie.current),Ne.current=null,he(!1))};return window.addEventListener("message",M),()=>{clearTimeout(ie.current),Ne.current=null,window.removeEventListener("message",M)}},[]);function se(M){_(Q=>({...Q,[C]:M})),ho(Ja(p,C),M),q(""),ee(null),R("Code changed. Check again to update the results.")}function ye(){g.forEach(M=>ho(Ja(p,M),b[M]??"")),q("All three files saved in this browser only.")}function L(){window.confirm("Restore all three starter files? Your current saved changes will be replaced.")&&(_({...y}),g.forEach(M=>ho(Ja(p,M),y[M]??"")),ee(null),oe(""),N("Starter files restored."),R("Run Check to evaluate the restored files."),W("Preview"),q("Starter files restored for this lesson or project."))}function J(){const M=b[C]||"",Q=document.createElement("a"),Se=URL.createObjectURL(new Blob([M],{type:"text/plain;charset=utf-8"}));Q.href=Se,Q.download=C,document.body.append(Q),Q.click(),Q.remove(),setTimeout(()=>URL.revokeObjectURL(Se),2e3)}function K(){clearTimeout(ie.current),Ne.current=null,he(!1),oe("<p>Preview stopped.</p>"),N("Preview stopped. Check your script for an endless loop."),W("Console")}async function j(M){var Q;if(!Y){he(!0),ee(null),q(""),N(""),R(M?"Checking the published requirements…":"Run Check to review the published requirements."),W(M?"Checks":"Preview");try{A();const Se=crypto.randomUUID();Ne.current={token:Se,check:M};const De=await kh({language:u.language,code:b[C]||"",lessonId:u.lessonFocus||l,task:{...u,webFiles:b},token:Se,check:M});if(((Q=Ne.current)==null?void 0:Q.token)!==Se)return;oe(De),clearTimeout(ie.current),ie.current=setTimeout(()=>{var qe;((qe=Ne.current)==null?void 0:qe.token)===Se&&(K(),R("The preview timed out. No result was recorded."))},7e3)}catch(Se){clearTimeout(ie.current),Ne.current=null,he(!1),N(String((Se==null?void 0:Se.message)||Se)),R("Checks unavailable: "+String((Se==null?void 0:Se.message)||Se)),W("Console")}}}function A(){g.forEach(M=>ho(Ja(p,M),b[M]||""))}function G(M){if(!Te.current)return;const Q=Te.current.getBoundingClientRect();we(Math.max(160,Math.min(Q.height-120,M.clientY-Q.top)))}return c.jsxs("div",{className:"code-pane web-files-pane",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx(Od,{size:16})," Project files"]}),c.jsxs("span",{className:"web-file-badge",children:["HTML + CSS + ",u.language==="jsx"?"React":"JavaScript"]})]}),c.jsx("div",{className:"web-file-tabs",role:"tablist","aria-label":"Source files",children:g.map(M=>c.jsx("button",{type:"button",role:"tab","aria-selected":M===C,className:M===C?"active":"",onClick:()=>k(M),children:M},M))}),c.jsxs("div",{className:"code-workspace",ref:Te,style:{"--editor-height":le+"px"},children:[c.jsx(Lm,{value:b[C]??"",language:Mm(C),onChange:se},C),c.jsx(cc,{axis:"rows",onDrag:G}),c.jsx(Am,{text:E,checksText:I,checkRows:V,points:null,language:"html",previewEnabled:!0,previewDoc:H,previewRef:He,activeTab:D,onTabChange:W})]}),c.jsxs("div",{className:"editor-controls",children:[c.jsxs("div",{children:[c.jsx("button",{type:"button",className:"btn",disabled:Y,onClick:()=>j(!1),children:"Run"}),c.jsx("button",{type:"button",className:"btn",disabled:Y,onClick:()=>j(!0),children:"Check"}),c.jsx("button",{type:"button",className:"btn",disabled:Y,onClick:L,children:"Reset"}),Y&&c.jsx("button",{type:"button",className:"btn",onClick:K,children:"Stop"})]}),c.jsxs("div",{children:[c.jsxs("button",{type:"button",className:"btn",disabled:Y,onClick:J,children:[c.jsx(ky,{size:15})," Download file"]}),c.jsxs("button",{type:"button",className:"btn",disabled:Y,onClick:ye,children:[c.jsx(Td,{size:15})," Save"]}),c.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submissions and grading are not connected",children:[c.jsx(ah,{size:15})," Submit (not enabled)"]})]})]}),c.jsx("div",{className:"editor-note",role:"status",children:F||"Edit one file at a time. The HTML link to styles.css and script tag for script.js (or App.jsx) connect the files. Drafts save locally; practice checks award no points."})]})}function kb({lessonId:l,onAnswerChecked:u}){const p=dh[l],[g,y]=Ce.useState(null),[b,_]=Ce.useState(!1);function C(){_(!0),u==null||u({selected:g,correct:g===p.correct})}function k(){y(null),_(!1),u==null||u(null)}return c.jsxs("section",{className:"tsi-practice","aria-label":"Math question",children:[c.jsxs("div",{className:"tsi-practice-heading",children:[c.jsx(sm,{size:20}),c.jsxs("div",{children:[c.jsx("h2",{children:"Try this question"}),c.jsx("p",{children:"Choose an answer, then review the explanation on the right."})]})]}),c.jsxs("div",{className:"tsi-question-card",children:[c.jsx("div",{className:"eyebrow",children:"Question"}),c.jsx("h3",{children:p.prompt}),c.jsx("div",{className:"tsi-answers",role:"radiogroup","aria-label":"Choose the correct answer",children:p.options.map((E,N)=>c.jsxs("label",{className:`tsi-choice ${g===N?"selected":""} ${b&&N===p.correct?"correct":""}`,children:[c.jsx("input",{type:"radio",name:`tsi-${l}`,checked:g===N,disabled:b,onChange:()=>y(N)}),c.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+N)}),c.jsx("span",{children:E})]},E))}),b&&c.jsx("p",{className:"tsi-answer-status",role:"status",children:g===p.correct?"Correct! Read why on the right.":"Not quite. Review the explanation on the right."}),c.jsxs("div",{className:"tsi-buttons",children:[c.jsx("button",{className:"btn primary",disabled:g===null||b,onClick:C,children:"Check answer"}),c.jsxs("button",{className:"btn",onClick:k,children:[c.jsx(oh,{size:15})," Try again"]})]})]})]})}const wd=[["quantitative","Quantitative Reasoning"],["algebraic","Algebraic Reasoning"],["geometry","Geometric and Spatial Reasoning"],["statistics","Probabilistic and Statistical Reasoning"]];function Sb(l){const u=l.answer,p=Number.isInteger(u)?Math.max(1,Math.round(Math.abs(u)*.15)):Math.max(.125,Math.round(Math.abs(u)*.2*1e3)/1e3),g=[u+p,u-p,u+2*p].map(y=>Number(y.toFixed(4)));return g.splice(l.correct_index??0,0,u),g}function _b(l,u){return Object.fromEntries(wd.map(([p])=>{const g=l.filter(b=>b.strand===p),y=g.filter(b=>u[b.id]!=="skip"&&Number(u[b.id])===b.answer).length;return[p,{correct:y,total:g.length,level:y===g.length?"Advanced":y>=Math.ceil(g.length*.6)?"Proficient":"Basic"}]}))}function Cb({items:l=[],profiles:u=[]}){var oe,D,W;const[p,g]=Ce.useState({}),[y,b]=Ce.useState(""),[_,C]=Ce.useState(""),[k,E]=un("designlab:tsi-math-placement",{}),[N,I]=Ce.useState(null),R=Ce.useMemo(()=>wd.map(([F,q])=>({id:F,title:q,items:l.filter(Y=>Y.strand===F)})),[l]),V=N||((oe=k.diagnostic)==null?void 0:oe.latest)&&k.diagnostic.latest.placement;function ee(F){F.preventDefault();const q=u.find(Y=>Y.code===y.trim().toUpperCase());if(!q){C("Enter a valid MATH01–MATH81 study code.");return}E(Y=>({...Y,code:q.code,levels:q.levels})),C("Study code applied in this browser. It does not enroll you in a class.")}function H(F){if(F.preventDefault(),l.some(le=>p[le.id]===void 0)){C("Answer or select Not sure for every question.");return}const q=_b(l,p),Y=Object.fromEntries(Object.entries(q).map(([le,we])=>[le,we.level])),he={at:new Date().toISOString(),placement:q,levels:Y,answers:p};E(le=>{var we;return{...le,levels:Y,diagnostic:{first:((we=le.diagnostic)==null?void 0:we.first)||he,latest:he}}}),I(q),C("Your recommended starting levels are ready. Results are stored in this browser only.")}return c.jsxs("div",{className:"published-reading surface-card tsi-diagnostic",children:[c.jsx("h2",{children:"Find your starting point"}),c.jsx("p",{children:"This is the existing 24-question, four-strand practice diagnostic. It suggests what to study; it does not predict an official TSIA2 score or assign an enrolled class."}),c.jsxs("form",{onSubmit:ee,className:"tsi-code-entry",children:[c.jsx("label",{htmlFor:"math-locator-code",children:"Pearson study code (MATH01–MATH81)"}),c.jsx("input",{id:"math-locator-code",type:"text",placeholder:"MATH01",maxLength:6,value:y,onChange:F=>b(F.target.value)}),c.jsx("button",{className:"btn",type:"submit",children:"Apply code"})]}),!!k.code&&c.jsxs("p",{role:"status",children:["Current code: ",c.jsx("strong",{children:k.code}),"."," ","Recommended levels: ",wd.map(([F,q])=>{var Y;return q+": "+((Y=k.levels)==null?void 0:Y[F])}).join(" · ")]}),c.jsxs("form",{onSubmit:H,children:[c.jsx("h3",{children:"Take the diagnostic"}),c.jsxs("p",{children:["Choose one answer or Not sure for all ",l.length," questions. This open practice records your first and latest attempts in this browser, not the live gradebook."]}),R.map(F=>c.jsxs("section",{className:"tsi-diagnostic-strand",children:[c.jsx("h3",{children:F.title}),F.items.map(q=>c.jsxs("fieldset",{className:"tsi-question",children:[c.jsx("legend",{children:q.prompt}),c.jsxs("div",{className:"tsi-answers",children:[Sb(q).map((Y,he)=>c.jsxs("label",{className:"tsi-choice",children:[c.jsx("input",{type:"radio",name:q.id,value:Y,checked:p[q.id]===String(Y),onChange:()=>g(le=>({...le,[q.id]:String(Y)}))}),c.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+he)}),c.jsx("span",{children:Y})]},he)),c.jsxs("label",{className:"tsi-choice",children:[c.jsx("input",{type:"radio",name:q.id,value:"skip",checked:p[q.id]==="skip",onChange:()=>g(Y=>({...Y,[q.id]:"skip"}))}),c.jsx("span",{children:"Not sure"})]})]})]},q.id))]},F.id)),c.jsx("button",{type:"submit",className:"btn primary",children:"Get my recommended levels"})]}),!!_&&c.jsx("p",{role:"status",children:_}),V&&c.jsxs("section",{className:"tsi-diagnostic-results","aria-label":"Diagnostic results",children:[c.jsx("h3",{children:"Recommended starting levels"}),wd.map(([F,q])=>c.jsxs("p",{children:[c.jsxs("strong",{children:[q,": ",V[F].level]})," (",V[F].correct," of ",V[F].total," correct)"]},F)),c.jsx("p",{children:"This diagnostic is instructional, not a verified measure of college readiness. All published lessons remain available regardless of recommendation."}),!!((D=k.diagnostic)!=null&&D.first)&&!!((W=k.diagnostic)!=null&&W.latest)&&c.jsxs("p",{children:["First attempt: ",new Date(k.diagnostic.first.at).toLocaleDateString()," · Latest: ",new Date(k.diagnostic.latest.at).toLocaleDateString()]})]})]})}function Tb({lessonId:l,course:u,unit:p,unitNumber:g,isCompleted:y=!1,assignment:b=null,grade:_=null,onToggleCompleted:C}){var oe;const k=ra(u,l),E=Ce.useRef(null),[N,I]=Ce.useState(null),[R,V]=un("designlab:left-width",420);function ee(D){if(!E.current)return;const W=E.current.getBoundingClientRect();V(Math.max(260,Math.min(W.width-340,D.clientX-W.left)))}const H=u.id==="tsi-math";return H&&l==="tsi-20d-d01"&&((oe=u.diagnosticItems)!=null&&oe.length)?c.jsxs("div",{className:"lesson-screen",children:[c.jsxs("header",{className:"lesson-header",children:[c.jsx("div",{className:"eyebrow",children:"Day 1 · TSI Math Advisory"}),c.jsx("h1",{children:k.title}),c.jsx("p",{children:"Diagnostic placement · 30-minute advisory plan"})]}),c.jsx(Cb,{items:u.diagnosticItems,profiles:u.locatorProfiles})]}):k!=null&&k.ready?k.language==="text"&&!H?c.jsxs("div",{className:"lesson-screen",children:[c.jsx(hd,{task:k,unit:p,unitNumber:g,isTsi:!1,isCompleted:y,assignment:b,grade:_,onToggleCompleted:C}),c.jsxs("section",{className:"surface-card published-reading",children:[c.jsx("p",{className:"muted",children:"Published written-practice material. Answer checking and verified scores remain on the current Playground."}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:rc(k.markdownSource)}})]})]}):H&&!dh[l]?c.jsxs("div",{className:"lesson-screen",children:[c.jsx(hd,{task:k,unit:p,unitNumber:g,isTsi:!0,isCompleted:y,assignment:b,grade:_,onToggleCompleted:C}),c.jsxs("section",{className:"surface-card published-reading",children:[c.jsx("p",{className:"muted",children:"Published draft lesson · practice shown for learning, not an official TSIA2 score predictor."}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:rc(k.markdownSource)}})]})]}):c.jsxs("div",{className:"lesson-screen",children:[c.jsx(hd,{task:k,unit:p,unitNumber:g,isTsi:H,isCompleted:y,assignment:b,grade:_,onToggleCompleted:C}),c.jsxs("div",{className:`workspace-grid ${H?"tsi-workspace":""}`,ref:E,style:{"--left-pane":`${R}px`},children:[H?c.jsx(kb,{lessonId:l,onAnswerChecked:I}):c.jsx(kf,{lessonId:l,task:k}),c.jsx(cc,{axis:"columns",onDrag:ee}),H?c.jsx(kf,{lessonId:l,task:k,isTsi:!0,tsiAnswer:N}):u.id==="mobile-app-dev"&&["html","css","javascript","jsx"].includes(k.language)?c.jsx(Wm,{lessonId:l,task:{...k,lessonFocus:l}},l):c.jsx(Im,{lessonId:l,task:k})]})]}):c.jsxs("div",{className:"lesson-screen",children:[c.jsx(hd,{task:k,unit:p,unitNumber:g,isTsi:H,isCompleted:y,assignment:b,grade:_,onToggleCompleted:C}),c.jsxs("section",{className:"lesson-content-pending surface-card",children:[c.jsx("h2",{children:"Lesson coming soon"}),c.jsx("p",{children:"This scheduled lesson has not been authored yet. No practice or scores are available."})]})]})}function jb({course:l,project:u,stepId:p,openProject:g}){const y=u.steps||[],b=Math.max(0,y.findIndex(V=>V.id===p)),_=y[b],C=Ce.useRef(null),[k,E]=un("designlab:project-left-width",430),N="project:"+l.id+":"+u.id,I={id:N,title:u.title,language:u.language||"html",starter:u.starter||"",starterFiles:u.starterFiles||null,challenge:u.summary||"",console:"Run to see your actual page. Check tests the published step requirements in a sandboxed browser preview.",projectDraft:!0,isPublished:!1,projectId:u.id,stepId:_.id,focus:_.focus};function R(V){if(!C.current)return;const ee=C.current.getBoundingClientRect();E(Math.max(260,Math.min(ee.width-340,V.clientX-ee.left)))}return c.jsxs("div",{className:"lesson-screen project-workspace",children:[c.jsxs("header",{className:"lesson-header",children:[c.jsxs("div",{className:"eyebrow",children:["Published guided project · ",y.length," steps"]}),c.jsx("h1",{children:u.title}),c.jsx("p",{children:u.summary}),c.jsx("p",{className:"muted",children:"Run renders your actual project and Check tests the current step. Drafts save in this browser; Submit and verified grading remain disabled."})]}),c.jsx("nav",{className:"project-step-list","aria-label":"Project steps",children:y.map((V,ee)=>c.jsxs("button",{type:"button","aria-current":ee===b?"step":void 0,className:ee===b?"btn primary":"btn",onClick:()=>g(l.id,u.id,V.id),children:[ee+1,". ",V.title]},V.id))}),c.jsxs("div",{className:"workspace-grid",ref:C,style:{"--left-pane":k+"px"},children:[c.jsxs("section",{className:"instructions-pane project-reading",children:[c.jsx("div",{className:"pane-header",children:c.jsxs("strong",{children:["Step ",b+1,": ",_.title]})}),c.jsxs("p",{className:"web-files-reading-note",children:["This published walkthrough was originally written for one HTML file. When it says to add a <style> or <script> block, put that code in",c.jsx("code",{children:"styles.css"})," or ",c.jsx("code",{children:"script.js"})," instead. Keep the file links in",c.jsx("code",{children:"index.html"}),"; Run connects them automatically."]}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:rc(_.markdownSource)}})]}),c.jsx(cc,{axis:"columns",onDrag:R}),c.jsx(Wm,{lessonId:N,task:I})]}),c.jsxs("nav",{className:"lesson-next-bar","aria-label":"Project step navigation",children:[b>0&&c.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>g(l.id,u.id,y[b-1].id),children:[c.jsx(Id,{size:16})," ",c.jsxs("span",{children:["Prev: ",y[b-1].title]})]}),b<y.length-1&&c.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>g(l.id,u.id,y[b+1].id),children:[c.jsxs("span",{children:["Next: ",y[b+1].title]})," ",c.jsx(ni,{size:16})]})]})]})}function Nb({courseId:l,lessonId:u,projectId:p,projectStepId:g,availableCourses:y=rs,openCourse:b,openProject:_,openChallenges:C,completedLessons:k=[],assignments:E=[],grades:N=[],onToggleLessonComplete:I,courseColors:R={},onSetCourseColor:V,onResetCourseColor:ee}){const H=y.find(Y=>Y.id===l)||y[0];if(H.id==="test-prep")return c.jsx(Vy,{lessonId:u,openCourse:b,completedLessons:k,onToggleLessonComplete:I});const oe=(H.projects||[]).find(Y=>Y.id===p),D=tc(H),W=H.units.findIndex(Y=>is(Y).includes(u)),F=H.units[W],q=D.indexOf(u);return c.jsx("div",{className:"course-layout integrated-course","data-course":H.id,children:c.jsxs("div",{className:"course-main",children:[c.jsxs("div",{className:"course-breadcrumb",children:[c.jsx("button",{onClick:()=>b(null),children:"All playgrounds"}),c.jsx(ni,{size:14}),u||oe?c.jsxs(c.Fragment,{children:[c.jsx("button",{onClick:()=>b(H.id),children:H.label}),c.jsx(ni,{size:14}),c.jsx("span",{className:"breadcrumb-unit-name",title:F?Ps(F):"",children:F?Ps(F):(oe==null?void 0:oe.title)||""})]}):c.jsx("span",{children:H.label})]}),oe?c.jsx(jb,{course:H,project:oe,stepId:g,openProject:_},oe.id):u?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"lesson-mobile-navigation",children:[c.jsx("label",{htmlFor:"lesson-select",children:"Lesson"}),c.jsx("select",{id:"lesson-select",value:u,onChange:Y=>b(H.id,Y.target.value),children:H.units.map((Y,he)=>c.jsx("optgroup",{label:`Unit ${he+1} · ${Ps(Y)}`,children:is(Y).map(le=>c.jsx("option",{value:le,children:ia(H,le)},le))},Y.id))})]}),c.jsx(Tb,{lessonId:u,course:H,unit:F,unitNumber:W+1,isCompleted:k.includes(u),assignment:E.find(Y=>Y.id==="lesson:"+u),grade:N.find(Y=>Y.id==="lesson:"+u),onToggleCompleted:()=>I==null?void 0:I(u)},u),c.jsxs("nav",{className:"lesson-next-bar","aria-label":"Lesson sequence",children:[q>0&&c.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>b(H.id,D[q-1]),children:[c.jsx(Id,{size:16,"aria-hidden":"true"}),c.jsxs("span",{children:["Prev: ",ia(H,D[q-1])]})]}),q>=0&&q<D.length-1&&c.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>b(H.id,D[q+1]),children:[c.jsxs("span",{children:["Next: ",ia(H,D[q+1])]}),c.jsx(ni,{size:16,"aria-hidden":"true"})]})]})]}):c.jsx(Gy,{course:H,openCourse:b,openProject:_,openChallenges:C,completedLessons:k,assignments:E,grades:N,courseColors:R,onSetCourseColor:V,onResetCourseColor:ee})]})})}const go=[{id:"p1",period:"1",name:"Period 1",course:"computer-science-1"},{id:"p3",period:"3",name:"Period 3",course:"computer-science-1"},{id:"p5",period:"5",name:"Period 5",course:"mobile-app-dev"},{id:"p6",period:"6",name:"Period 6",course:"game-programming"},{id:"p7",period:"7",name:"Period 7",course:"mobile-app-dev"},{id:"p8",period:"8",name:"Period 8",course:"computer-science-1"}],Hm=l=>go.find(u=>u.id===l),Bm=l=>{var u;return(u=Hm(l))==null?void 0:u.period},Eb=[...new Set(go.map(l=>l.period))].sort((l,u)=>Number(l)-Number(u)),Um=[{key:"2026-11-02",label:"Nov 2 – Nov 8, 2026"},{key:"2026-10-26",label:"Oct 26 – Nov 1, 2026"}],Vl=l=>{var u,p;return((u=l.sheetName)==null?void 0:u.trim())||((p=l.studentName)==null?void 0:p.trim())||l.github},Vf=l=>(l.sheetName||l.studentName||"").trim().split(/\s+/),qm=(l,u,p)=>{const g=y=>p==="github"?y.github.toLowerCase():p==="first"?(Vf(y)[0]||y.github).toLowerCase():(Vf(y).at(-1)||y.github).toLowerCase();return g(l).localeCompare(g(u),void 0,{numeric:!0})||l.github.localeCompare(u.github)},Lb=[["last","Last name"],["first","First name"],["github","GitHub username"]];function Pb({sectionId:l,onSectionChange:u,setupOpen:p,onToggleSetup:g}){return c.jsxs("div",{className:"teacher-toolbar",children:[c.jsxs("label",{children:["Class section",c.jsx("select",{value:l,onChange:y=>u(y.target.value),children:go.map(y=>c.jsxs("option",{value:y.id,children:[y.name," · ",nh(y.course)]},y.id))})]}),c.jsxs("button",{type:"button",className:"btn section-setup-toggle","aria-expanded":p,"aria-controls":"teacher-section-setup",onClick:g,children:[p?c.jsx(Dd,{size:16}):c.jsx(lh,{size:16}),p?"Close section setup":"Section setup"]})]})}const Ab=[["overview","Class overview",sh],["curriculum","Curriculum",uc],["journals","Journals",ih]];function Rb({tab:l,onChange:u}){return c.jsx("div",{className:"tabs teacher-tabs",role:"tablist","aria-label":"Teacher dashboard tabs",children:Ab.map(([p,g,y])=>c.jsxs("button",{type:"button",role:"tab","aria-selected":l===p,className:l===p?"active":"",onClick:()=>u(p),children:[c.jsx(y,{size:16}),g]},p))})}function Ib({section:l}){return c.jsxs("div",{className:"section-banner",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Selected section"}),c.jsxs("h2",{children:[l.name," ",c.jsxs("span",{className:"muted",children:["· ",nh(l.course)]})]})]}),c.jsx(ss,{children:"Demo join code: LOCAL01"})]})}function Ob({students:l}){const u=[[l.length,"Enrolled students"],[l.filter(p=>p.status==="Active now").length,"Recently interacting"],[l.filter(p=>p.sheetName).length,"Sheet names matched"]];return c.jsx("div",{className:"stat-grid",children:u.map(([p,g])=>c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:p}),c.jsx("span",{children:g})]},g))})}function Mb({students:l,week:u,setWeek:p}){const g=Ce.useMemo(()=>[...l].sort((y,b)=>(b.weekly[u]||0)-(y.weekly[u]||0)),[l,u]);return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Weekly points"}),c.jsx("p",{children:"Mock verified points · Monday–Sunday in Central Time"})]}),c.jsxs("label",{children:["Week",c.jsx("select",{value:u,onChange:y=>p(y.target.value),children:Um.map(y=>c.jsx("option",{value:y.key,children:y.label},y.key))})]})]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Student"}),c.jsx("th",{children:"Weekly points"}),c.jsx("th",{children:"Sample assignments"})]})}),c.jsx("tbody",{children:g.map(y=>c.jsxs("tr",{children:[c.jsxs("th",{children:[Vl(y),c.jsxs("small",{children:["@",y.github]})]}),c.jsx("td",{children:c.jsx("strong",{children:y.weekly[u]||0})}),c.jsx("td",{children:y.assignments.filter(b=>b.score!==null).length})]},y.id))})]})})]})}function Km({label:l,value:u,onChange:p}){return c.jsxs("label",{children:[l,c.jsx("select",{value:u,onChange:g=>p(g.target.value),children:Lb.map(([g,y])=>c.jsx("option",{value:g,children:y},g))})]})}const Db=l=>l.includes("Completed")?"success":l==="Needs revision"?"warning":"";function zb({student:l,week:u}){const[p,g]=Ce.useState(null),y=l.assignments,b=y.filter(C=>C.status==="Completed"||C.status==="Practice completed").length,_=y.filter(C=>C.score!==null).length;return c.jsxs("div",{className:"expanded-student",children:[c.jsxs("div",{className:"expanded-header",children:[c.jsxs("div",{children:[c.jsx("h3",{children:"Assignment history"}),c.jsxs("p",{className:"muted",children:["Sample records for ",Vl(l),". No student data is loaded."]})]}),c.jsxs(ss,{tone:"success",children:[l.weekly[u]||0," verified pts this week"]})]}),c.jsxs("div",{className:"mini-stats",children:[c.jsxs("span",{children:[c.jsx("strong",{children:b})," completed"]}),c.jsxs("span",{children:[c.jsx("strong",{children:_})," graded"]}),c.jsxs("span",{children:[c.jsx("strong",{children:y.length})," tracked"]})]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table assignment-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Assignment"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Score"}),c.jsx("th",{children:"Updated"}),c.jsx("th",{children:"Action"})]})}),c.jsx("tbody",{children:y.map(C=>{const k=p===C.id;return c.jsxs(Ce.Fragment,{children:[c.jsxs("tr",{children:[c.jsxs("th",{children:[C.name,c.jsx("small",{children:C.type})]}),c.jsx("td",{children:c.jsx(ss,{tone:Db(C.status),children:C.status})}),c.jsx("td",{children:C.score===null?"—":`${C.score} / ${C.possible}`}),c.jsx("td",{children:C.submitted}),c.jsx("td",{children:c.jsx("button",{className:"small-link",onClick:()=>g(k?null:C.id),children:k?"Hide details":"View details"})})]}),k&&c.jsx("tr",{className:"receipt-preview",children:c.jsxs("td",{colSpan:"5",children:[c.jsx("strong",{children:"Sample assignment detail"}),c.jsx("p",{children:"This is a mock submitted-copy preview for layout testing, not the student's actual code."})]})})]},C.id)})})]})})]})}function Fb({students:l,week:u,sort:p,setSort:g,expanded:y,setExpanded:b}){return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Section roster & activity"}),c.jsx("p",{children:"Click a student's name to expand their assignments directly inside the roster."})]}),c.jsx(Km,{label:"Sort students by",value:p,onChange:g})]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table roster-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Student"}),c.jsx("th",{children:"Activity signal"}),c.jsx("th",{children:"Current activity"}),c.jsx("th",{children:"Practice"}),c.jsx("th",{children:"Hand-ins"})]})}),c.jsx("tbody",{children:l.map(_=>{const C=y===_.id;return c.jsxs(Ce.Fragment,{children:[c.jsxs("tr",{className:C?"selected-row":"",children:[c.jsxs("th",{children:[c.jsxs("button",{className:"student-name-button","aria-expanded":C,onClick:()=>b(C?null:_.id),children:[C?c.jsx(om,{size:16}):c.jsx(ni,{size:16})," ",Vl(_)]}),c.jsxs("small",{children:["@",_.github,_.sections.length>1?" · Sheet periods 1, 3":""]})]}),c.jsx("td",{children:c.jsx(ss,{tone:_.status==="Active now"?"success":"",children:_.status})}),c.jsx("td",{children:_.current}),c.jsxs("td",{children:[_.assignments.filter(k=>k.status.includes("Completed")).length," complete"]}),c.jsx("td",{children:_.assignments.filter(k=>k.score!==null).length})]}),C&&c.jsx("tr",{className:"expansion-row",children:c.jsx("td",{colSpan:"5",children:c.jsx(zb,{student:_,week:u})})})]},_.id)})})]})})]})}function Wb({section:l,students:u,week:p,setWeek:g,sort:y,setSort:b,expanded:_,setExpanded:C}){return c.jsxs(c.Fragment,{children:[c.jsx(Ib,{section:l}),c.jsx(Ob,{students:u}),c.jsx(Mb,{students:u,week:p,setWeek:g}),c.jsx(Fb,{students:u,week:p,sort:y,setSort:b,expanded:_,setExpanded:C})]})}function $m(l,u){return l+"::"+u}function Hb(l,u=[]){if(!(l!=null&&l.sectionId)||!l.lessonId)return"Choose a section and lesson.";if(l.sectionCourseId&&l.sectionCourseId!=="computer-science-1")return"This section uses a different course. Only Computer Science I is connected.";if(!/^\d{4}-\d{2}-\d{2}$/.test(l.dueDate||""))return"Choose a valid due date.";const[p,g,y]=l.dueDate.split("-").map(Number);if(new Date(Date.UTC(p,g-1,y)).toISOString().slice(0,10)!==l.dueDate)return"Choose a valid due date.";const _=Number(l.points);if(!Number.isFinite(_)||!Number.isInteger(_)||_<0||_>1e3)return"Points must be a whole number between 0 and 1,000.";if(l.scope!=="section"&&l.scope!=="selected")return"Choose who receives the assignment.";if(l.scope==="selected"){const C=new Set(u.map(E=>E.id)),k=[...new Set(l.studentIds||[])];if(!k.length||k.some(E=>!C.has(E)))return"Select at least one student from this section."}return null}function Bb(l,u=[]){const p=Hb(l,u);if(p)throw new Error(p);return{id:$m(l.sectionId,l.lessonId),sectionId:l.sectionId,courseId:"computer-science-1",lessonId:l.lessonId,scope:l.scope,studentIds:l.scope==="selected"?[...new Set(l.studentIds)].sort():[],dueDate:l.dueDate,points:Number(l.points)}}function Ub(l,u){return[...(Array.isArray(l)?l:[]).filter(p=>p.id!==u.id),u]}function Wp(l,u,p){return(l||[]).find(g=>g.id===$m(u,p))||null}const qb="/playground/data/computer-science-1/course.json",ec=vi("computer-science-1");function Kb({section:l,students:u=[],assignments:p=[],setAssignments:g}){const[y,b]=Ce.useState(null),[_,C]=Ce.useState("loading"),[k,E]=Ce.useState(ec.lessons[0]),[N,I]=Ce.useState("section"),[R,V]=Ce.useState([]),[ee,H]=Ce.useState(""),[oe,D]=Ce.useState(""),[W,F]=Ce.useState("starter"),[q,Y]=Ce.useState("");Ce.useEffect(()=>{const K=new AbortController;return fetch(qb,{signal:K.signal,cache:"no-store"}).then(j=>{if(!j.ok)throw new Error("Curriculum unavailable");return j.json()}).then(j=>{if(!Array.isArray(j.lessons)||!j.lessons.length)throw new Error("Unexpected curriculum response");b(Yl(j)),C("live")}).catch(j=>{j.name!=="AbortError"&&C("snapshot")}),()=>K.abort()},[]);const he=Ce.useMemo(()=>y?{...ec,...y}:ec,[y]),le=he.lessons,we=le.includes(k)?k:le[0],He=ra(he,we),Ne=le.reduce((K,j)=>{var A;return K+(Number((A=ra(he,j))==null?void 0:A.points)||0)},0),ie=ec.lessons.includes(we),Te=(l==null?void 0:l.course)==="computer-science-1",se=Wp(p,l==null?void 0:l.id,we),ye=u.filter(K=>K.sections.includes(l==null?void 0:l.id));Ce.useEffect(()=>{var j;const K=Wp(p,l==null?void 0:l.id,we);I((K==null?void 0:K.scope)||"section"),V((K==null?void 0:K.studentIds)||[]),H((K==null?void 0:K.dueDate)||""),D(String((K==null?void 0:K.points)??((j=ra(he,we))==null?void 0:j.points)??0)),Y(""),F("starter")},[we,l==null?void 0:l.id]);function L(K){K.preventDefault();try{const j=Bb({sectionId:l==null?void 0:l.id,sectionCourseId:l==null?void 0:l.course,lessonId:we,scope:N,studentIds:R,dueDate:ee,points:oe},ye);g==null||g(A=>Ub(A,j)),Y("Preview assignment saved in this browser. No students were notified.")}catch(j){Y(j.message)}}function J(){g==null||g(K=>(K||[]).filter(j=>j.id!==(se==null?void 0:se.id))),Y("Preview assignment cleared. Live student records were not changed.")}return c.jsxs("section",{className:"panel curriculum-panel","aria-label":"Published curriculum",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsxs("h2",{children:[c.jsx(uc,{size:18})," Computer Science I curriculum"]}),c.jsxs("p",{children:[he.units.length," original units · ",le.length," lessons · ",Ne," available lesson points"]})]}),c.jsx("span",{className:"curriculum-source",role:"status",children:_==="live"?"Published course • current":_==="loading"?"Checking published course…":"Bundled preview snapshot"})]}),c.jsx("p",{className:"curriculum-explanation",children:"Lesson titles, published points, starter code, and unit order come from the real CS1 catalog. Assignment controls below are a browser-only preview and do not affect live students."}),c.jsxs("div",{className:"curriculum-grid",children:[c.jsx("div",{className:"curriculum-units","aria-label":"Unit and lesson list",children:he.units.map((K,j)=>c.jsxs("details",{open:is(K).includes(we)||j===0,children:[c.jsxs("summary",{children:["Unit ",ac(K,j+1)," · ",Ps(K)]}),c.jsx("div",{children:is(K).map(A=>c.jsxs("button",{type:"button",className:A===we?"curriculum-lesson selected":"curriculum-lesson","aria-current":A===we?"true":void 0,onClick:()=>E(A),children:[ia(he,A),Wp(p,l==null?void 0:l.id,A)&&c.jsx("small",{children:" · Assigned in preview"})]},A))})]},K.id))}),c.jsxs("article",{className:"curriculum-lesson-preview",children:[c.jsx("div",{className:"eyebrow",children:"Published lesson"}),c.jsx("h3",{children:He.title}),c.jsx("p",{children:He.summary||He.challenge||"Practice the skills from this unit."}),c.jsxs("div",{className:"curriculum-meta",children:[c.jsxs("span",{children:[He.points??0," published points"]}),c.jsxs("span",{children:[He.mode==="function"?"Function":"Script"," · Python"]})]}),c.jsxs("div",{className:"curriculum-code-tabs",role:"tablist","aria-label":"Lesson code",children:[c.jsx("button",{type:"button",role:"tab","aria-selected":W==="starter",className:W==="starter"?"active":"",onClick:()=>F("starter"),children:"Starter code"}),c.jsxs("button",{type:"button",role:"tab","aria-selected":W==="solution",className:W==="solution"?"active":"",onClick:()=>F("solution"),children:[c.jsx(Zh,{size:14})," Solution"]})]}),W==="starter"?c.jsx("pre",{className:"curriculum-code",children:c.jsx("code",{children:He.starter||"# No starter code provided"})}):c.jsxs("div",{className:"curriculum-solution-locked",role:"status",children:[c.jsx(Zh,{size:20}),c.jsxs("div",{children:[c.jsx("strong",{children:"Teacher-only solutions"}),c.jsx("p",{children:"Solutions must be loaded from protected storage after teacher sign-in and authorization. Answer keys are not included in the public React preview."})]})]}),ie?c.jsxs("a",{className:"btn",href:Rd(ec,we),children:["Open lesson in React preview ",c.jsx(am,{size:14})]}):c.jsx("p",{className:"muted",children:"This newer published lesson is not yet in the React snapshot."}),c.jsxs("div",{className:"curriculum-assignment-editor",children:[c.jsx("h4",{children:"Assign lesson"}),Te?c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"curriculum-assignment-warning",children:"Preview only. Assignments are saved in this browser, not sent to students or the live gradebook."}),c.jsxs("form",{onSubmit:L,className:"curriculum-assignment-form",children:[c.jsxs("label",{children:["Assign to",c.jsxs("select",{value:N,onChange:K=>I(K.target.value),children:[c.jsxs("option",{value:"section",children:["Whole class · ",ye.length," sample students"]}),c.jsx("option",{value:"selected",children:"Selected students"})]})]}),N==="selected"&&c.jsxs("fieldset",{className:"curriculum-recipient-picker",children:[c.jsx("legend",{children:"Choose students"}),ye.length?ye.map(K=>c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:R.includes(K.id),onChange:j=>V(A=>j.target.checked?[...A,K.id]:A.filter(G=>G!==K.id))}),c.jsx("span",{children:Vl(K)})]},K.id)):c.jsx("p",{children:"No sample students are enrolled in this section."})]}),c.jsxs("div",{className:"curriculum-assignment-fields",children:[c.jsxs("label",{children:["Due date",c.jsx("input",{type:"date",required:!0,value:ee,onChange:K=>H(K.target.value)})]}),c.jsxs("label",{children:["Points",c.jsx("input",{type:"number",required:!0,min:"0",max:"1000",step:"1",value:oe,onChange:K=>D(K.target.value)})]})]}),c.jsxs("div",{className:"curriculum-assignment-actions",children:[c.jsx("button",{type:"submit",className:"btn primary",children:se?"Update preview assignment":"Save preview assignment"}),se&&c.jsx("button",{type:"button",className:"btn",onClick:J,children:"Remove assignment"})]})]}),se&&c.jsxs("p",{className:"curriculum-current-assignment",children:["Saved for ",se.scope==="section"?"whole class":se.studentIds.length+" selected students"," · ","Due ",se.dueDate," · ",se.points," points"]}),q&&c.jsx("p",{className:"curriculum-assignment-feedback",role:"status",children:q})]}):c.jsxs("p",{className:"curriculum-assignment-warning",children:[(l==null?void 0:l.name)||"This section"," uses a different course. Choose a Computer Science I section to assign CS1 lessons."]})]})]})]})]})}function $b({students:l}){return c.jsxs("section",{className:"panel",children:[c.jsx("h2",{children:"Section setup"}),c.jsx("p",{children:"Visual preview of configured sections. This sandbox cannot create live classes or assign students."}),c.jsx("div",{className:"setup-grid",children:go.map(u=>c.jsxs("div",{className:"setup-card",children:[c.jsx("div",{className:"eyebrow",children:u.name}),c.jsx("h3",{children:nh(u.course)}),c.jsxs("span",{children:[l.filter(p=>p.sections.includes(u.id)).length," sample students"]})]},u.id))})]})}function Gb({section:l,students:u,submissions:p}){const[g,y]=Ce.useState(Bp()[0]),[b,_]=Ce.useState(null),C=Bp(),k=u.map(N=>{const I=p.filter(R=>R.studentId===N.id&&R.sectionId===l.id&&R.week===g);return{student:N,copies:I,latest:I.at(-1)}}),E=k.filter(N=>N.latest).length;return c.jsxs("section",{className:"panel journal-inbox",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Teacher review · Sample records"}),c.jsxs("h2",{children:[c.jsx(ih,{size:19})," Weekly journal submissions"]}),c.jsx("p",{children:"Review essays and logic puzzles from this section. Journals are never automatically graded."})]}),c.jsxs("label",{children:["Journal week ",c.jsx("select",{value:g,onChange:N=>{y(N.target.value),_(null)},children:C.map(N=>c.jsx("option",{value:N,children:$l(N)},N))})]})]}),c.jsxs("div",{className:"stat-grid",children:[c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:E}),c.jsx("span",{children:"Submitted"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:k.length-E}),c.jsx("span",{children:"Missing"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:k.length}),c.jsx("span",{children:"Students in section"})]})]}),c.jsx("div",{className:"journal-inbox-rows",children:k.map(({student:N,latest:I,copies:R})=>c.jsxs("div",{className:"journal-inbox-row",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:[N.first," ",N.last]}),c.jsxs("small",{children:["@",N.github]})]}),c.jsx("span",{className:`journal-status-pill ${I?"submitted":""}`,children:I?"Submitted":"Missing"}),c.jsx("span",{className:"journal-inbox-date",children:I?new Date(I.submittedAt).toLocaleString():"—"}),c.jsx("button",{className:"btn",disabled:!I,onClick:()=>_(b===N.id?null:N.id),children:b===N.id?"Close":"Review"}),b===N.id&&I&&c.jsxs("div",{className:"journal-review-detail",children:[c.jsxs("div",{className:"eyebrow",children:[I.type.replace("-"," ")," · ",R.length," ",R.length===1?"hand-in":"hand-ins"," · Manual review"]}),c.jsx("div",{className:"journal-history-answer",children:I.response}),c.jsxs("p",{className:"hint",children:["AI declaration: ",I.aiUse==="none"?"No AI reported":`Disclosed · ${I.aiDetails}`]})]})]},N.id))}),c.jsx("p",{className:"hint",children:"This inbox uses fictional students and demo submissions created in this browser. No grades or messages are sent."})]})}function Yb({students:l,journalSubmissions:u}){const[p,g]=un("designlab:teacher-tab","overview"),[y,b]=un("designlab:section","p1"),[_,C]=un("designlab:sort","last"),[k,E]=un("designlab:week",Um[0].key),[N,I]=Ce.useState(null),[R,V]=Ce.useState(!1),[ee,H]=un("designlab:teacher-preview-assignments",[]),oe=["overview","curriculum","journals"].includes(p)?p:"overview",D=Hm(y)||go[0],W=Ce.useMemo(()=>l.filter(F=>F.sections.includes(y)).sort((F,q)=>qm(F,q,_)),[l,y,_]);return c.jsxs("div",{className:"main-content teacher-screen",children:[c.jsx(ch,{eyebrow:"Your classroom · Frontend preview",actions:c.jsx(ss,{children:oe==="curriculum"?"Real CS1 catalog · demo assignments":"Sample student data"}),children:"Teacher dashboard"}),c.jsx("p",{className:"page-subtitle",children:oe==="curriculum"?"Browse published Computer Science I lessons and configure preview-only section assignments.":"Explore your class layout with fictional students. No real student information is loaded."}),c.jsx(Pb,{sectionId:D.id,onSectionChange:F=>{b(F),I(null)},setupOpen:R,onToggleSetup:()=>V(F=>!F)}),R&&c.jsx("div",{id:"teacher-section-setup",children:c.jsx($b,{students:l})}),c.jsx(Rb,{tab:oe,onChange:F=>{g(F),I(null)}}),oe==="curriculum"&&c.jsx(Kb,{section:D,students:W,assignments:ee,setAssignments:H}),oe==="overview"&&c.jsx(Wb,{section:D,students:W,week:k,setWeek:E,sort:_,setSort:C,expanded:N,setExpanded:I}),oe==="journals"&&c.jsx(Gb,{section:D,students:W,submissions:u})]})}function Vb({children:l}){return c.jsx("div",{className:"empty",children:l})}function Jb({student:l,isEditing:u,onToggleEdit:p,onDone:g,onPatch:y}){const b=Vl(l);return c.jsxs("article",{className:"account-card",children:[c.jsxs("div",{className:"account-row",children:[c.jsx("span",{className:"avatar",children:b.slice(0,1).toUpperCase()}),c.jsxs("div",{className:"account-identity",children:[c.jsx("h3",{children:b}),c.jsxs("small",{children:["@",l.github]})]}),c.jsx("button",{className:"icon-button","aria-label":`Edit ${b}`,onClick:p,children:u?c.jsx(Dd,{size:17}):c.jsx(lh,{size:17})})]}),c.jsxs("div",{className:"account-footer",children:[c.jsx(ss,{tone:l.sheetName?"success":"",children:l.sheetName?"Sheet matched":"Student name fallback"}),l.sections.map(_=>c.jsxs(ss,{children:["Period ",Bm(_)]},_))]}),u&&c.jsxs("div",{className:"account-edit",children:[c.jsxs("label",{children:["Google Sheet name",c.jsx("input",{value:l.sheetName||"",onChange:_=>y({sheetName:_.target.value||null})})]}),c.jsxs("label",{children:["Student-provided backup",c.jsx("input",{value:l.studentName||"",onChange:_=>y({studentName:_.target.value})})]}),c.jsx("button",{className:"btn",onClick:g,children:"Done"})]})]})}function Xb({students:l,sort:u,setSort:p,patchStudent:g}){const[y,b]=un("designlab:period-filter","all"),[_,C]=Ce.useState(""),[k,E]=Ce.useState(null),N=Ce.useMemo(()=>{const I=_.toLowerCase();return l.filter(R=>(y==="all"||R.sections.some(V=>Bm(V)===y))&&[Vl(R),R.github,R.studentName].some(V=>V.toLowerCase().includes(I))).sort((R,V)=>qm(R,V,u))},[l,y,u,_]);return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Accounts"}),c.jsx("p",{children:"Google Sheet name first, student-entered name second, then GitHub name."})]}),c.jsxs(ss,{children:[N.length," accounts"]})]}),c.jsxs("div",{className:"filters",children:[c.jsxs("label",{children:[c.jsx(lm,{size:16})," ",c.jsx("input",{"aria-label":"Search accounts",value:_,placeholder:"Search name or GitHub username",onChange:I=>C(I.target.value)})]}),c.jsxs("label",{children:["Class period",c.jsxs("select",{value:y,onChange:I=>b(I.target.value),children:[c.jsx("option",{value:"all",children:"All periods"}),Eb.map(I=>c.jsx("option",{children:I},I))]})]}),c.jsx(Km,{label:"Sort",value:u,onChange:p})]}),c.jsx("p",{className:"info-text",children:"Change a sample Sheet name to test precedence and fallback behavior. These edits are saved only in browser storage."}),c.jsx("div",{className:"account-grid",children:N.map(I=>c.jsx(Jb,{student:I,isEditing:k===I.id,onToggleEdit:()=>E(k===I.id?null:I.id),onDone:()=>E(null),onPatch:R=>g(I.id,R)},I.id))}),!N.length&&c.jsx(Vb,{children:"No accounts match those filters."})]})}function Qb({students:l,setStudents:u}){const[p,g]=un("designlab:admin-sort","last"),[y,b]=Ce.useState(""),_=(C,k)=>u(E=>E.map(N=>N.id===C?{...N,...k}:N));return c.jsxs("div",{className:"main-content teacher-screen admin-screen",children:[c.jsx(ch,{eyebrow:"Global management · Frontend preview",actions:c.jsx(ss,{children:"Sample accounts only"}),children:"Admin dashboard"}),c.jsxs("p",{className:"page-subtitle",children:[c.jsx(uh,{size:16,"aria-hidden":"true"})," Account management is separate from class-specific teacher tools. This demo has no real accounts or admin permissions attached."]}),c.jsxs("div",{className:"admin-actions",children:[c.jsxs("button",{type:"button",className:"btn",onClick:()=>{u(kd),b("Fictional account records restored.")},children:[c.jsx(oh,{size:15})," Reset sample accounts"]}),y&&c.jsx("small",{role:"status",children:y})]}),c.jsx(Xb,{students:l,sort:p,setSort:g,patchStudent:_})]})}const Zb={essay:"Think about a time you solved a difficult problem. Explain what you tried first, how you changed your approach, and what you learned. Use specific evidence.","logic-puzzle":"A robot follows this pattern: 2, 6, 12, 20, 30, __. Find the next number. Explain the pattern and show why your answer fits."},Jf={response:"",type:"essay",aiUse:"",aiDetails:""};function e0({submissions:l,setSubmissions:u}){var Ne;const[p,g]=un("designlab:journal-section",go[0].id),y=go.find(ie=>ie.id===p)||go[0],b=kd.filter(ie=>ie.sections.includes(y.id)),[_,C]=un("designlab:journal-student",kd[0].id),k=b.find(ie=>ie.id===_)||b[0],E=Ce.useMemo(()=>Bp(),[]),[N,I]=un("designlab:journal-week",E[0]),R=E.includes(N)?N:E[0],[V,ee]=un("designlab:journal-drafts",{}),[H,oe]=Ce.useState(""),[D,W]=Ce.useState(!1),F=Tg(y.id,k.id,R),q=V[F]||Jf,Y=l.filter(ie=>ie.studentId===k.id&&ie.sectionId===y.id&&ie.week===R),he=Y.at(-1),le=q.response.trim()?q.response.trim().split(/\s+/).length:0;function we(ie,Te){ee(se=>({...se,[F]:{...se[F]||Jf,[ie]:Te}})),oe("Draft saved in this browser.")}function He(ie){ie.preventDefault();const Te=jg(q);if(Te){oe(Te);return}const se={id:`demo-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,sectionId:y.id,studentId:k.id,studentName:`${k.first} ${k.last}`,courseId:y.course,week:R,response:q.response.trim(),type:q.type,aiUse:q.aiUse,aiDetails:q.aiDetails.trim(),submittedAt:new Date().toISOString()};u(ye=>[...ye,se]),oe("Demo submission saved locally. Check the Teacher dashboard → Journals tab to review it.")}return c.jsxs("div",{className:"main-content journal-screen",children:[c.jsx("div",{className:"eyebrow",children:"Your classes · Written work"}),c.jsxs("header",{className:"journal-heading",children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Weekly Journals"}),c.jsx("p",{children:"Essay responses, reflections, and logic puzzles—all in one place."})]}),c.jsxs("span",{className:"chip",children:[c.jsx(uh,{size:14})," Local demo only"]})]}),c.jsxs("section",{className:"journal-card journal-selection","aria-label":"Select a journal",children:[c.jsxs("label",{children:["Class section",c.jsx("select",{value:y.id,onChange:ie=>{g(ie.target.value),oe("")},children:go.map(ie=>{var Te;return c.jsxs("option",{value:ie.id,children:[ie.name," · ",(Te=vi(ie.course))==null?void 0:Te.label]},ie.id)})})]}),c.jsxs("label",{children:["Preview as student",c.jsx("select",{value:k.id,onChange:ie=>{C(ie.target.value),oe("")},children:b.map(ie=>c.jsxs("option",{value:ie.id,children:[ie.first," ",ie.last," (sample)"]},ie.id))})]}),c.jsxs("label",{children:["Journal week",c.jsx("select",{value:R,onChange:ie=>{I(ie.target.value),oe("")},children:E.map(ie=>c.jsxs("option",{value:ie,children:["Week of ",$l(ie)]},ie))})]})]}),c.jsxs("section",{className:"journal-card journal-editor-card",children:[c.jsxs("div",{className:"journal-section-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"eyebrow",children:[(Ne=vi(y.course))==null?void 0:Ne.label," · ",y.name]}),c.jsxs("h2",{children:["Journal · Week of ",$l(R)]})]}),c.jsx("span",{className:`journal-status-pill ${he?"submitted":""}`,children:he?"Submitted":"Not submitted"})]}),c.jsx("p",{className:"journal-instructions",children:"This is a fictional prompt for design testing. In production, your teacher would publish the weekly assignment."}),c.jsxs("form",{onSubmit:He,children:[c.jsxs("label",{children:["Response type",c.jsxs("select",{value:q.type,onChange:ie=>we("type",ie.target.value),children:[c.jsx("option",{value:"essay",children:"Essay or written reflection"}),c.jsx("option",{value:"logic-puzzle",children:"Logic puzzle or reasoning task"})]})]}),c.jsxs("div",{className:"journal-prompt",children:[c.jsx("strong",{children:"Sample prompt"}),c.jsx("p",{children:Zb[q.type]})]}),c.jsx("label",{htmlFor:"journal-answer",children:"Your response"}),c.jsx("textarea",{id:"journal-answer",rows:"13",maxLength:"100000",spellCheck:!0,placeholder:"Write your explanation here. Show steps and reasoning for logic puzzles.",value:q.response,onChange:ie=>we("response",ie.target.value)}),c.jsxs("div",{className:"journal-writing-meta",children:[c.jsxs("span",{children:[le," words"]}),c.jsxs("span",{children:[c.jsx(Td,{size:13})," Autosaved in this browser"]})]}),c.jsxs("div",{className:"journal-integrity",children:[c.jsxs("label",{children:["AI-use declaration",c.jsxs("select",{value:q.aiUse,onChange:ie=>we("aiUse",ie.target.value),children:[c.jsx("option",{value:"",children:"Choose one"}),c.jsx("option",{value:"none",children:"I did not use AI-generated content"}),c.jsx("option",{value:"disclosed",children:"I used AI and will explain how"})]})]}),c.jsx("p",{className:"hint",children:"This is a declaration for review, not an automatic grade. Follow your teacher's classroom AI policy."}),q.aiUse==="disclosed"&&c.jsxs("label",{children:["Describe the AI assistance",c.jsx("textarea",{rows:"3",value:q.aiDetails,onChange:ie=>we("aiDetails",ie.target.value),placeholder:"Identify which parts involved AI assistance."})]})]}),c.jsxs("div",{className:"journal-actions",children:[c.jsxs("button",{type:"button",className:"btn",onClick:()=>{oe("Draft saved in this browser.")},children:[c.jsx(Td,{size:15})," Save draft"]}),c.jsxs("button",{type:"submit",className:"btn submit",children:[c.jsx(ah,{size:15})," Demo submit"]})]}),c.jsx("p",{role:"status",className:"journal-submit-status",children:H})]}),c.jsxs("div",{className:"journal-bottom-row",children:[c.jsx("p",{className:"hint",children:"No real submissions are sent. Each demo submission records a separate copy; drafts remain editable."}),c.jsxs("button",{type:"button",className:"btn",onClick:()=>W(ie=>!ie),children:[c.jsx(Ny,{size:15})," ",D?"Hide history":`Submission history (${Y.length})`]})]}),D&&c.jsx("div",{className:"journal-history",children:Y.length?Y.map(ie=>c.jsxs("details",{className:"journal-history-item",children:[c.jsxs("summary",{children:[c.jsx(Cd,{size:16})," Submitted ",new Date(ie.submittedAt).toLocaleString()," · ",ie.type]}),c.jsx("div",{className:"journal-history-answer",children:ie.response})]},ie.id)):c.jsx("p",{className:"muted",children:"No submissions yet for this week."})})]})]})}const t0=`# Attendance Percentage

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
`,n0=`# Competition Leaderboard Ranks

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
`,r0=`# Confidence Pool Total

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
`,i0=`# Count Matching Events

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
`,s0=`# Longest Winning Streak

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
`,o0=`# Format a Score Line

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
`,a0=`# Second Largest Distinct Value

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
`,l0=`# Sum Positive Values

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
`,u0=`# Count Pairs With Target Sum

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
`,c0=`# Temperature Alert

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
`,d0=`using System;

public static class Solution {
    public static int AttendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,p0=`public class Solution {
    public static int attendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,h0=`export function attendancePercent(present, total) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,f0=`def attendance_percent(present: int, total: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,m0=`using System;

public static class Solution {
    public static int[] CompetitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,g0=`public class Solution {
    public static int[] competitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,y0=`export function competitionRanks(scores) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,v0=`def competition_ranks(scores: list[int]) -> list[int]:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,x0=`using System;

public static class Solution {
    public static int ConfidenceTotal(bool[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,b0=`public class Solution {
    public static int confidenceTotal(boolean[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,w0=`export function confidenceTotal(correct, weights) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,k0=`def confidence_total(correct: list[bool], weights: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,S0=`using System;

public static class Solution {
    public static int CountMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,_0=`public class Solution {
    public static int countMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,C0=`export function countMatches(events, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,T0=`def count_matches(events: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,j0=`using System;

public static class Solution {
    public static int LongestWinStreak(bool[] wins) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,N0=`public class Solution {
    public static int longestWinStreak(boolean[] wins) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,E0=`export function longestWinStreak(wins) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,L0=`def longest_win_streak(wins: list[bool]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,P0=`using System;

public static class Solution {
    public static string ScoreLine(string name, int points) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,A0=`public class Solution {
    public static String scoreLine(String name, int points) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,R0=`export function scoreLine(name, points) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,I0=`def score_line(name: str, points: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,O0=`using System;

public static class Solution {
    public static int? SecondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,M0=`public class Solution {
    public static Integer secondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,D0=`export function secondLargestDistinct(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,z0=`def second_largest_distinct(numbers: list[int]) -> int | None:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,F0=`using System;

public static class Solution {
    public static int SumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,W0=`public class Solution {
    public static int sumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,H0=`export function sumPositives(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,B0=`def sum_positives(numbers: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,U0=`using System;

public static class Solution {
    public static int TargetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,q0=`public class Solution {
    public static int targetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,K0=`export function targetPairs(numbers, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,$0=`def target_pairs(numbers: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,G0=`using System;

public static class Solution {
    public static string TemperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Y0=`public class Solution {
    public static String temperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,V0=`export function temperatureAlert(degrees) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,J0=`def temperature_alert(degrees: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,X0="attendance-percent",Q0=[{input:[18,20],expected:90},{input:[2,3],expected:66},{input:[0,30],expected:0},{input:[7,7],expected:100}],Z0={challengeId:X0,cases:Q0},ew="competition-ranks",tw=[{input:[[50,50,40,20,40]],expected:[1,1,3,5,3]},{input:[[7,12,9]],expected:[3,1,2]},{input:[[5,5,5]],expected:[1,1,1]},{input:[[]],expected:[]}],nw={challengeId:ew,cases:tw},rw="confidence-total",iw=[{input:[[!0,!1,!0],[20,18,15]],expected:35},{input:[[!1,!1],[5,8]],expected:0},{input:[[],[]],expected:0}],sw={challengeId:rw,cases:iw},ow="count-matches",aw=[{input:[[2,1,2,3,2],2],expected:3},{input:[[],7],expected:0},{input:[[3,4],5],expected:0}],lw={challengeId:ow,cases:aw},uw="longest-win-streak",cw=[{input:[[!0,!0,!1,!0,!0,!0]],expected:3},{input:[[!1,!1]],expected:0},{input:[[]],expected:0},{input:[[!0,!0]],expected:2}],dw={challengeId:uw,cases:cw},pw="score-line",hw=[{input:["Avery",18],expected:"Avery: 18 points"},{input:["Jordan Lee",0],expected:"Jordan Lee: 0 points"},{input:["Mia",-2],expected:"Mia: -2 points"}],fw={challengeId:pw,cases:hw},mw="second-largest-distinct",gw=[{input:[[3,1,3,2]],expected:2},{input:[[5,5]],expected:null},{input:[[-10,-7,-7,-2]],expected:-7},{input:[[1]],expected:null}],yw={challengeId:mw,cases:gw},vw="sum-positives",xw=[{input:[[-3,6,0,2,-1]],expected:8},{input:[[-5,0,-1]],expected:0},{input:[[]],expected:0}],bw={challengeId:vw,cases:xw},ww="target-pairs",kw=[{input:[[1,3,2,2,4],4],expected:2},{input:[[2,2,2],4],expected:3},{input:[[1,2,3],9],expected:0},{input:[[],1],expected:0}],Sw={challengeId:ww,cases:kw},_w="temperature-alert",Cw=[{input:[32],expected:"Freeze"},{input:[90],expected:"Heat"},{input:[72],expected:"Normal"},{input:[-5],expected:"Freeze"}],Tw={challengeId:_w,cases:Cw},jw=["python","java","javascript","csharp"],Nw=[{id:"temperature-alert",title:"Temperature Alert",summary:"Choose a status label based on a temperature reading.",difficulty:"Very Easy",points:5,tags:["conditionals","comparisons","functions"],prerequisites:["functions","conditionals"],suggestedCourses:["computer-science-1","game-programming","uil"],languages:["python","java","javascript","csharp"],path:"problems/temperature-alert"},{id:"count-matches",title:"Count Matching Events",summary:"Count how often a particular event code appears.",difficulty:"Easy",points:10,tags:["arrays","loops","comparisons"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/count-matches"},{id:"sum-positives",title:"Sum Positive Values",summary:"Add only the positive values in a data set.",difficulty:"Easy",points:10,tags:["arrays","loops","accumulators"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/sum-positives"},{id:"score-line",title:"Format a Score Line",summary:"Format a player score as a clear single line of text.",difficulty:"Easy",points:10,tags:["strings","formatting","functions"],prerequisites:["variables","strings","functions"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/score-line"},{id:"attendance-percent",title:"Attendance Percentage",summary:"Convert an attendance fraction into a whole-number percentage.",difficulty:"Easy",points:10,tags:["arithmetic","integer-division","functions"],prerequisites:["variables","functions","arithmetic"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/attendance-percent"},{id:"longest-win-streak",title:"Longest Winning Streak",summary:"Find the longest consecutive run of winning results.",difficulty:"Medium",points:15,tags:["arrays","loops","state"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/longest-win-streak"},{id:"confidence-total",title:"Confidence Pool Total",summary:"Compute the points earned from predictions.",difficulty:"Medium",points:15,tags:["arrays","loops","parallel-arrays"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/confidence-total"},{id:"second-largest-distinct",title:"Second Largest Distinct Value",summary:"Return the second-highest unique integer in a collection.",difficulty:"Medium",points:20,tags:["arrays","comparisons","distinct-values"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/second-largest-distinct"},{id:"target-pairs",title:"Count Pairs With Target Sum",summary:"Count pairs of positions that add to a target.",difficulty:"Hard",points:25,tags:["arrays","nested-loops","counting"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/target-pairs"},{id:"competition-ranks",title:"Competition Leaderboard Ranks",summary:"Assign ranks while handling tied scores and skipped positions.",difficulty:"Hard",points:25,tags:["arrays","sorting","ties"],prerequisites:["functions","loops","arrays","sorting"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/competition-ranks"}],Gm={languages:jw,challenges:Nw},Ew=Object.assign({"../challenge-bank/problems/attendance-percent/problem.md":t0,"../challenge-bank/problems/competition-ranks/problem.md":n0,"../challenge-bank/problems/confidence-total/problem.md":r0,"../challenge-bank/problems/count-matches/problem.md":i0,"../challenge-bank/problems/longest-win-streak/problem.md":s0,"../challenge-bank/problems/score-line/problem.md":o0,"../challenge-bank/problems/second-largest-distinct/problem.md":a0,"../challenge-bank/problems/sum-positives/problem.md":l0,"../challenge-bank/problems/target-pairs/problem.md":u0,"../challenge-bank/problems/temperature-alert/problem.md":c0}),Lw=Object.assign({"../challenge-bank/problems/attendance-percent/starters/Solution.cs":d0,"../challenge-bank/problems/attendance-percent/starters/Solution.java":p0,"../challenge-bank/problems/attendance-percent/starters/javascript.js":h0,"../challenge-bank/problems/attendance-percent/starters/python.py":f0,"../challenge-bank/problems/competition-ranks/starters/Solution.cs":m0,"../challenge-bank/problems/competition-ranks/starters/Solution.java":g0,"../challenge-bank/problems/competition-ranks/starters/javascript.js":y0,"../challenge-bank/problems/competition-ranks/starters/python.py":v0,"../challenge-bank/problems/confidence-total/starters/Solution.cs":x0,"../challenge-bank/problems/confidence-total/starters/Solution.java":b0,"../challenge-bank/problems/confidence-total/starters/javascript.js":w0,"../challenge-bank/problems/confidence-total/starters/python.py":k0,"../challenge-bank/problems/count-matches/starters/Solution.cs":S0,"../challenge-bank/problems/count-matches/starters/Solution.java":_0,"../challenge-bank/problems/count-matches/starters/javascript.js":C0,"../challenge-bank/problems/count-matches/starters/python.py":T0,"../challenge-bank/problems/longest-win-streak/starters/Solution.cs":j0,"../challenge-bank/problems/longest-win-streak/starters/Solution.java":N0,"../challenge-bank/problems/longest-win-streak/starters/javascript.js":E0,"../challenge-bank/problems/longest-win-streak/starters/python.py":L0,"../challenge-bank/problems/score-line/starters/Solution.cs":P0,"../challenge-bank/problems/score-line/starters/Solution.java":A0,"../challenge-bank/problems/score-line/starters/javascript.js":R0,"../challenge-bank/problems/score-line/starters/python.py":I0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.cs":O0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.java":M0,"../challenge-bank/problems/second-largest-distinct/starters/javascript.js":D0,"../challenge-bank/problems/second-largest-distinct/starters/python.py":z0,"../challenge-bank/problems/sum-positives/starters/Solution.cs":F0,"../challenge-bank/problems/sum-positives/starters/Solution.java":W0,"../challenge-bank/problems/sum-positives/starters/javascript.js":H0,"../challenge-bank/problems/sum-positives/starters/python.py":B0,"../challenge-bank/problems/target-pairs/starters/Solution.cs":U0,"../challenge-bank/problems/target-pairs/starters/Solution.java":q0,"../challenge-bank/problems/target-pairs/starters/javascript.js":K0,"../challenge-bank/problems/target-pairs/starters/python.py":$0,"../challenge-bank/problems/temperature-alert/starters/Solution.cs":G0,"../challenge-bank/problems/temperature-alert/starters/Solution.java":Y0,"../challenge-bank/problems/temperature-alert/starters/javascript.js":V0,"../challenge-bank/problems/temperature-alert/starters/python.py":J0}),Pw=Object.assign({"../challenge-bank/problems/attendance-percent/examples.json":Z0,"../challenge-bank/problems/competition-ranks/examples.json":nw,"../challenge-bank/problems/confidence-total/examples.json":sw,"../challenge-bank/problems/count-matches/examples.json":lw,"../challenge-bank/problems/longest-win-streak/examples.json":dw,"../challenge-bank/problems/score-line/examples.json":fw,"../challenge-bank/problems/second-largest-distinct/examples.json":yw,"../challenge-bank/problems/sum-positives/examples.json":bw,"../challenge-bank/problems/target-pairs/examples.json":Sw,"../challenge-bank/problems/temperature-alert/examples.json":Tw}),Wd=Gm.challenges,eh=Gm.languages,Ym={python:"Python",java:"Java",javascript:"JavaScript",csharp:"C#"},Aw={python:"python.py",java:"Solution.java",javascript:"javascript.js",csharp:"Solution.cs"};function Vm(l){return Wd.find(u=>u.id===l)||null}function Rw(l){return Ew[`../challenge-bank/problems/${l}/problem.md`]??""}function Iw(l,u){return Lw[`../challenge-bank/problems/${l}/starters/${Aw[u]}`]??""}function Ow(l){var u;return((u=Pw[`../challenge-bank/problems/${l}/examples.json`])==null?void 0:u.cases)??[]}const Mw=[...new Set(Wd.flatMap(l=>l.tags))].sort((l,u)=>l.localeCompare(u)),Dw=["Very Easy","Easy","Medium","Hard"];function zw({query:l="",topic:u="all",difficulty:p="all",course:g="all",language:y="all"}={}){const b=l.trim().toLocaleLowerCase();return Wd.filter(_=>(!b||[_.title,_.summary,..._.tags].join(" ").toLowerCase().includes(b))&&(u==="all"||_.tags.includes(u))&&(p==="all"||_.difficulty===p)&&(g==="all"||_.suggestedCourses.includes(g))&&(y==="all"||_.languages.includes(y))).slice().sort((_,C)=>_.title.localeCompare(C.title))}function Xf(l,u){var b;const[p,...g]=l.split(":"),y=g.join(":");return p==="lesson"?ia(vi(u),y):((b=Vm(y))==null?void 0:b.title)||y}function Fw({grades:l=[],assignments:u=[],completedLessons:p=[]}){const[g,y]=Ce.useState("all"),b=g==="all"?l:l.filter(I=>I.courseId===g),_=Up(b),C=Xg(b),k=C[0],E=rs.map(I=>({...I,...Up(l.filter(R=>R.courseId===I.id))})),N=u.filter(I=>g==="all"||I.courseId===g).map(I=>({...I,status:Ad(I.id,{assignments:u,grades:l,completedLessons:p})})).filter(I=>I.status.state==="assigned"||I.status.state==="overdue").sort((I,R)=>I.dueDate.localeCompare(R.dueDate));return c.jsxs("div",{className:"main-content grades-screen",children:[c.jsxs("header",{className:"grades-heading",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Your progress"}),c.jsx("h1",{children:"Grades"}),c.jsx("p",{children:"See your earned points, weekly scores, and work still due."})]}),c.jsxs("label",{className:"grades-filter",children:["Course",c.jsxs("select",{value:g,onChange:I=>y(I.target.value),children:[c.jsx("option",{value:"all",children:"All courses"}),rs.map(I=>c.jsx("option",{value:I.id,children:I.label},I.id))]})]})]}),c.jsx("p",{className:"grades-preview-note",children:"This preview does not display real student grades or assignments. Verified scores remain in the current Playground."}),c.jsxs("div",{className:"grades-summary",children:[c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(vy,{size:19}),c.jsx("span",{children:"Points earned"}),c.jsxs("strong",{children:[_.earned," ",c.jsxs("small",{children:["/ ",_.possible]})]}),c.jsx("p",{children:_.percent===null?"No graded work yet":`${_.percent}% of graded points`})]}),c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(um,{size:19}),c.jsx("span",{children:"Graded activities"}),c.jsx("strong",{children:_.count}),c.jsx("p",{children:"Lessons and challenges"})]}),c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(yy,{size:19}),c.jsx("span",{children:"Most recent scored week"}),c.jsx("strong",{children:k?`${k.earned} / ${k.possible}`:"—"}),c.jsx("p",{children:k?`Week of ${$l(k.week)}`:"No scores yet"})]})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"Weekly scores"}),C.length?c.jsx("div",{className:"grades-weeks",children:C.map(I=>c.jsxs("div",{className:"grades-week",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:["Week of ",$l(I.week)]}),c.jsxs("small",{children:[I.count," scored ",I.count===1?"activity":"activities"]})]}),c.jsxs("div",{className:"grades-week-score",children:[c.jsxs("strong",{children:[I.earned," / ",I.possible," pts"]}),c.jsx("progress",{value:I.earned,max:Math.max(I.possible,1),"aria-label":`Week of ${$l(I.week)}: ${I.earned} of ${I.possible} points`})]})]},I.week))}):c.jsx("p",{children:"No graded work in this selection."})]}),g==="all"&&c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"By course"}),c.jsx("div",{className:"grades-course-list",children:E.map(I=>c.jsxs("div",{className:"grades-course-row","data-course":I.id,children:[c.jsx("span",{className:"grades-course-dot","aria-hidden":"true"}),c.jsx("strong",{children:I.label}),c.jsx("span",{children:I.count?`${I.earned} / ${I.possible} pts`:"No grades yet"})]},I.id))})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"Scored work"}),b.length?c.jsx("div",{className:"grades-entries",children:b.slice().sort((I,R)=>R.gradedAt.localeCompare(I.gradedAt)).map(I=>{var R;return c.jsxs("div",{className:"grades-entry",children:[c.jsxs("div",{children:[c.jsx("strong",{children:Xf(I.id,I.courseId)}),c.jsxs("small",{children:[c.jsx(uc,{size:13}),((R=vi(I.courseId))==null?void 0:R.label)||I.courseId," · ",_d(I.gradedAt)]})]}),c.jsxs("strong",{children:[I.earned," / ",I.possible," pts"]})]},I.id)})}):c.jsx("p",{children:"No scored lessons or challenges yet."})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"Still to complete"}),N.length?c.jsx("div",{className:"grades-entries",children:N.map(I=>{var R;return c.jsxs("div",{className:"grades-entry",children:[c.jsxs("div",{children:[c.jsx("strong",{children:Xf(I.id,I.courseId)}),c.jsx("small",{children:((R=vi(I.courseId))==null?void 0:R.label)||I.courseId})]}),c.jsxs("div",{className:"grades-due-meta",children:[c.jsx("span",{className:`assignment-status ${I.status.state}`,children:I.status.state==="overdue"?"Overdue":"Assigned"}),c.jsxs("small",{children:["Due ",_d(I.dueDate)]})]})]},I.id)})}):c.jsx("p",{children:"Nothing outstanding in this selection."})]})]})}function Ww({filterCourse:l,onSelect:u,onBrowseCourse:p,grades:g=[]}){const[y,b]=Ce.useState(""),[_,C]=Ce.useState("all"),[k,E]=Ce.useState("all"),[N,I]=Ce.useState("all"),R=l||"all",V=Ce.useMemo(()=>zw({query:y,difficulty:_,topic:k,language:N,course:R}),[y,_,k,N,R]),ee=()=>{b(""),C("all"),E("all"),I("all"),p(null)};return c.jsxs("div",{className:"main-content challenge-bank-screen",children:[c.jsxs("header",{className:"challenge-bank-intro",children:[c.jsxs("div",{className:"eyebrow",children:[c.jsx(Md,{size:15})," Shared programming practice"]}),c.jsx("h1",{children:"Challenge Bank"}),c.jsx("p",{children:"One problem library for every class. Choose Python, Java, JavaScript, or C# when solving—without duplicating problems across courses."}),c.jsxs("div",{className:"challenge-summary",children:[c.jsx("strong",{children:Wd.length})," original challenges · ",c.jsx("strong",{children:"4"})," languages · ",c.jsx("strong",{children:"1"})," shared library"]})]}),c.jsxs("section",{className:"challenge-filters surface-card","aria-label":"Filter challenges",children:[c.jsxs("div",{className:"filter-title",children:[c.jsx(_y,{size:17}),c.jsx("strong",{children:"Find a challenge"}),c.jsxs("button",{type:"button",className:"filter-clear",onClick:ee,children:[c.jsx(Dd,{size:14})," Clear filters"]})]}),c.jsxs("div",{className:"challenge-filter-grid",children:[c.jsxs("label",{className:"challenge-search-label",children:["Search",c.jsxs("span",{className:"challenge-search",children:[c.jsx(lm,{size:16}),c.jsx("input",{type:"search",value:y,placeholder:"Problem, skill, or topic",onChange:H=>b(H.target.value)})]})]}),c.jsxs("label",{children:["Course view",c.jsxs("select",{value:R,onChange:H=>p(H.target.value==="all"?null:H.target.value),children:[c.jsx("option",{value:"all",children:"All courses"}),rs.filter(H=>H.id!=="tsi-math").map(H=>c.jsx("option",{value:H.id,children:H.label},H.id))]})]}),c.jsxs("label",{children:["Difficulty",c.jsxs("select",{value:_,onChange:H=>C(H.target.value),children:[c.jsx("option",{value:"all",children:"Any difficulty"}),Dw.map(H=>c.jsx("option",{value:H,children:H},H))]})]}),c.jsxs("label",{children:["Topic",c.jsxs("select",{value:k,onChange:H=>E(H.target.value),children:[c.jsx("option",{value:"all",children:"Any topic"}),Mw.map(H=>c.jsx("option",{value:H,children:H},H))]})]}),c.jsxs("label",{children:["Language",c.jsxs("select",{value:N,onChange:H=>I(H.target.value),children:[c.jsx("option",{value:"all",children:"Any language"}),eh.map(H=>c.jsx("option",{value:H,children:Ym[H]},H))]})]})]}),c.jsx("p",{className:"challenge-filter-note",children:"Course matching is informational. Confirm students have learned the prerequisite skills before assigning problems."})]}),c.jsxs("div",{className:"challenge-results-heading",children:[c.jsxs("h2",{children:["Available challenges ",c.jsxs("span",{children:["(",V.length,")"]})]}),c.jsx("span",{children:"Alphabetical order"})]}),V.length?c.jsx("div",{className:"challenge-card-grid",children:V.map(H=>c.jsxs("a",{className:"challenge-card surface-card",href:tm(H.id),onClick:oe=>{oe.button!==0||oe.metaKey||oe.ctrlKey||oe.shiftKey||oe.altKey||(oe.preventDefault(),u(H.id))},children:[c.jsxs("div",{className:"challenge-card-top",children:[c.jsx("span",{className:"challenge-level level-"+H.difficulty.toLowerCase().replace(" ","-"),children:H.difficulty}),c.jsx("span",{className:"challenge-points",children:yd("challenge:"+H.id,g)?`${yd("challenge:"+H.id,g).earned} / ${yd("challenge:"+H.id,g).possible} pts earned`:`${H.points} pts available`})]}),c.jsx("h3",{children:H.title}),c.jsx("p",{children:H.summary}),c.jsx("div",{className:"challenge-tags",children:H.tags.map(oe=>c.jsx("span",{children:oe},oe))}),c.jsxs("div",{className:"challenge-course-tags",children:[H.suggestedCourses.slice(0,3).map(oe=>{var D,W;return c.jsx("span",{title:(D=vi(oe))==null?void 0:D.label,children:((W=vi(oe))==null?void 0:W.short)||oe},oe)}),H.suggestedCourses.length>3&&c.jsxs("span",{children:["+",H.suggestedCourses.length-3]})]}),c.jsxs("span",{className:"challenge-open",children:["Open challenge ",c.jsx(qp,{size:16})]})]},H.id))}):c.jsxs("div",{className:"challenge-empty surface-card",children:[c.jsx("h3",{children:"No matching challenges"}),c.jsx("p",{children:"Try a broader topic or clear the filters."}),c.jsx("button",{className:"btn",onClick:ee,children:"Show all challenges"})]}),c.jsx("p",{className:"hint challenge-bottom-note",children:"Choose a problem, work through its examples, and compare your approach. Practice here does not count toward your grade."})]})}const Hw=(l,u)=>"designlab:challenge-code:"+l+":"+u;function Bw({challengeId:l,onBack:u}){const p=Vm(l),[g,y]=un("designlab:challenge-language","python"),b=eh.includes(g)?g:"python",[_,C]=un("designlab:challenge-left-width",420),k=Ce.useRef(null);if(!p)return c.jsxs("div",{className:"main-content",children:[c.jsx("h1",{children:"Challenge not found"}),c.jsx("button",{className:"btn",onClick:u,children:"Back to bank"})]});const E=Iw(l,b),N={id:l,title:p.title,language:b,starter:E,kind:"Challenge",challenge:p.summary,points:p.points,console:"Run or Check executes published examples in your selected language.",storageKey:Hw(l,b),challengeExamples:Ow(l),isChallenge:!0,isPublished:!1},I=R=>{if(!k.current)return;const V=k.current.getBoundingClientRect();C(Math.max(280,Math.min(V.width-360,R.clientX-V.left)))};return c.jsxs("div",{className:"challenge-detail-page",children:[c.jsxs("div",{className:"challenge-breadcrumb",children:[c.jsxs("button",{onClick:u,children:[c.jsx(im,{size:16})," Challenge Bank"]}),c.jsx("span",{children:"/"}),c.jsx("span",{children:p.title})]}),c.jsxs("header",{className:"challenge-detail-heading surface-card",children:[c.jsxs("div",{className:"eyebrow",children:["Shared challenge · ",p.difficulty," · ",p.points," available points in the published contract"]}),c.jsx("h1",{children:p.title}),c.jsx("p",{children:p.summary}),c.jsx("p",{children:"Run and Check execute student code using only published examples. No submissions, student records, official points or hidden grading are connected here."}),c.jsxs("div",{className:"challenge-prerequisites",children:[c.jsx("strong",{children:"Prerequisites:"}),p.prerequisites.map(R=>c.jsx("span",{children:R},R))]})]}),c.jsxs("div",{className:"challenge-workspace",ref:k,style:{"--challenge-left":_+"px"},children:[c.jsxs("section",{className:"challenge-instructions",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx(gy,{size:16})," Problem & examples"]}),c.jsx("span",{className:"challenge-points",children:"Practice only"})]}),c.jsx("div",{className:"markdown-preview challenge-markdown",dangerouslySetInnerHTML:{__html:rc(Rw(l))}})]}),c.jsx(cc,{axis:"columns",onDrag:I}),c.jsxs("section",{className:"challenge-editor-panel",children:[c.jsxs("div",{className:"challenge-runtime-toolbar",children:[c.jsxs("label",{className:"challenge-language-selector",children:["Language",c.jsx("select",{"aria-label":"Solution language",value:b,onChange:R=>y(R.target.value),children:eh.map(R=>c.jsx("option",{value:R,children:Ym[R]},R))})]}),c.jsx("span",{children:"Live public-example checks"})]}),c.jsx(Im,{lessonId:"challenge:"+l+":"+b,task:N},l+":"+b)]})]})]})}function Uw(){const[l,u]=Ce.useState(()=>pd()),[p,g]=un("designlab:course","computer-science-1"),[y,b]=un("designlab:theme","dark"),[_,C]=un("designlab:course-colors",{}),[k,E]=un("designlab:sidebar",!0),[N,I]=un("designlab:completed-lessons",[]),R=[],V=[],ee=Qg(N,R),[H,oe]=Ce.useState({}),[D,W]=Ce.useState({}),[F,q]=Ce.useState(!0),Y=Ce.useMemo(()=>rs.map(j=>{if(j.id==="computer-science-1"||j.id==="test-prep")return j;if(j.id==="capstone")return{...j,units:[],lessons:[],lessonRecords:{},publishedContent:!1,projects:[]};const A=H[j.id];return A?{...j,...A,publishedContent:!0}:{...j,units:[],lessons:[],lessonRecords:{},projects:[],contentLoadingError:D[j.id]||null}}),[H,D]);Ce.useEffect(()=>{const j=new AbortController;let A=!0;return Promise.all(["game-programming","mobile-app-dev","uil","tsi-math"].map(async G=>{try{return{courseId:G,data:await oy(G,{signal:j.signal})}}catch(M){return{courseId:G,error:String((M==null?void 0:M.message)||M)}}})).then(G=>{if(!A)return;const M={},Q={};for(const Se of G)Se.data?M[Se.courseId]=Se.data:Q[Se.courseId]=Se.error;oe(M),W(Q),q(!1)}),()=>{A=!1,j.abort()}},[]),Ce.useEffect(()=>{u(pd(window.location.pathname,Y))},[Y]);const[he,le]=un("designlab:students",kd),[we,He]=un("designlab:journal-submissions",Ng);Ce.useEffect(()=>{document.documentElement.dataset.theme=y},[y]),Ce.useEffect(()=>{Kg(_,rs)},[_]);function Ne(j,A){!rs.some(G=>G.id===j)||!Pd(A)||C(G=>({...G&&typeof G=="object"?G:{},[j]:A.toUpperCase()}))}function ie(j){C(A=>{const G={...A&&typeof A=="object"?A:{}};return delete G[j],G})}Ce.useEffect(()=>{var A;l.page==="course"&&g(l.courseId);const j=l.page==="course"?(A=vi(l.courseId))==null?void 0:A.label:l.page==="admin"?"Admin dashboard":l.page==="teacher"?"Teacher dashboard":l.page==="grades"?"Grades":l.page==="journals"?"Weekly journals":l.page==="challenges"?"Challenge Bank":l.page==="challenge"?"Coding challenge":"Your playgrounds";document.title=`${j||"Playground"} | Ms. Whitby's Playground — React Lab`},[l.page,l.courseId,g]),Ce.useEffect(()=>{const j=()=>u(pd(window.location.pathname,Y));return window.addEventListener("popstate",j),window.addEventListener("hashchange",j),()=>{window.removeEventListener("popstate",j),window.removeEventListener("hashchange",j)}},[Y]);const Te=Ce.useCallback(j=>{window.location.pathname!==j&&window.history.pushState({},"",j),u(pd(window.location.pathname,Y)),window.scrollTo({top:0,behavior:"auto"})},[Y]);function se(j,A){if(!j)return Te(Kl());g(j),Te(Rd(j,A))}function ye(j,A,G=null){Te(nm(j,A,G))}function L(j){j==="teacher"?Te(Xh()):j==="admin"?Te(cy()):j==="journals"?Te(dy()):j==="grades"?Te(py()):j==="challenges"?Te(Ul()):j==="course"?se(l.page==="course"?l.courseId:p):Te(Kl())}const J=l.page,K=l.courseId||p;return c.jsxs("div",{className:"app-shell",children:[c.jsx(Fy,{sidebarOpen:k,onToggleSidebar:()=>E(!k),onHome:()=>Te(Kl()),theme:y,setTheme:b}),c.jsxs("div",{className:po("app-layout",!k&&"sidebar-closed"),children:[c.jsx(Hy,{open:k,page:J,courseId:K,lessonId:l.page==="course"?l.lessonId:null,setPage:L,openCourse:se,completedLessons:ee,assignments:V,grades:R,availableCourses:Y,onOpenProject:ye}),c.jsx("main",{className:"main-panel",children:J==="home"?c.jsx($y,{availableCourses:Y,completedLessons:ee,openCourse:se,openTeacher:()=>Te(Xh()),openChallenges:()=>Te(Ul())}):J==="course"?c.jsx(Nb,{courseId:l.courseId,lessonId:l.lessonId,projectId:l.projectId,projectStepId:l.stepId,availableCourses:Y,openCourse:se,openProject:ye,openChallenges:j=>Te(Ul(j)),completedLessons:ee,assignments:V,grades:R,onToggleLessonComplete:j=>I(A=>Gg(A,j)),courseColors:_,onSetCourseColor:Ne,onResetCourseColor:ie},l.courseId):J==="grades"?c.jsx(Fw,{grades:R,assignments:V,completedLessons:ee}):J==="challenges"?c.jsx(Ww,{grades:R,filterCourse:l.filterCourse,onSelect:j=>Te(tm(j)),onBrowseCourse:j=>Te(Ul(j))}):J==="challenge"?c.jsx(Bw,{challengeId:l.challengeId,grades:R,onBack:()=>Te(Ul())},l.challengeId):J==="journals"?c.jsx(e0,{submissions:we,setSubmissions:He}):J==="teacher"?c.jsx(Yb,{students:he,journalSubmissions:we}):J==="admin"?c.jsx(Qb,{students:he,setStudents:le}):F?c.jsxs("div",{className:"main-content route-not-found",role:"status",children:[c.jsx("h1",{children:"Loading published course materials…"}),c.jsx("p",{children:"The lesson and project links will appear once the course catalogs are loaded."})]}):c.jsxs("div",{className:"main-content route-not-found",children:[c.jsx("div",{className:"eyebrow",children:"Link not found"}),c.jsx("h1",{children:"That playground page doesn't exist."}),c.jsx("p",{children:"Check the link or return to the list of playgrounds."}),c.jsx("button",{className:"btn primary",onClick:()=>Te(Kl()),children:"See all playgrounds"})]})})]}),c.jsx(By,{})]})}Sg.createRoot(document.getElementById("root")).render(c.jsx(yg.StrictMode,{children:c.jsx(Uw,{})}));
