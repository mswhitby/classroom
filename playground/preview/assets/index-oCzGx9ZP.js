var pg=Object.defineProperty;var hg=(l,c,p)=>c in l?pg(l,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):l[c]=p;var an=(l,c,p)=>hg(l,typeof c!="symbol"?c+"":c,p);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))g(y);new MutationObserver(y=>{for(const b of y)if(b.type==="childList")for(const _ of b.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&g(_)}).observe(document,{childList:!0,subtree:!0});function p(y){const b={};return y.integrity&&(b.integrity=y.integrity),y.referrerPolicy&&(b.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?b.credentials="include":y.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function g(y){if(y.ep)return;y.ep=!0;const b=p(y);fetch(y.href,b)}})();function Qf(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Np={exports:{}},Yu={},Ep={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function fg(){if(Bh)return Pt;Bh=1;var l=Symbol.for("react.element"),c=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),_=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),I=Symbol.iterator;function A(M){return M===null||typeof M!="object"?null:(M=I&&M[I]||M["@@iterator"],typeof M=="function"?M:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,W={};function ae(M,Z,we){this.props=M,this.context=Z,this.refs=W,this.updater=we||V}ae.prototype.isReactComponent={},ae.prototype.setState=function(M,Z){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Z,"setState")},ae.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function D(){}D.prototype=ae.prototype;function H(M,Z,we){this.props=M,this.context=Z,this.refs=W,this.updater=we||V}var F=H.prototype=new D;F.constructor=H,J(F,ae.prototype),F.isPureReactComponent=!0;var q=Array.isArray,Y=Object.prototype.hasOwnProperty,ge={current:null},le={key:!0,ref:!0,__self:!0,__source:!0};function be(M,Z,we){var De,qe={},Ie=null,ke=null;if(Z!=null)for(De in Z.ref!==void 0&&(ke=Z.ref),Z.key!==void 0&&(Ie=""+Z.key),Z)Y.call(Z,De)&&!le.hasOwnProperty(De)&&(qe[De]=Z[De]);var Be=arguments.length-2;if(Be===1)qe.children=we;else if(1<Be){for(var Ke=Array(Be),et=0;et<Be;et++)Ke[et]=arguments[et+2];qe.children=Ke}if(M&&M.defaultProps)for(De in Be=M.defaultProps,Be)qe[De]===void 0&&(qe[De]=Be[De]);return{$$typeof:l,type:M,key:Ie,ref:ke,props:qe,_owner:ge.current}}function We(M,Z){return{$$typeof:l,type:M.type,key:Z,ref:M.ref,props:M.props,_owner:M._owner}}function Te(M){return typeof M=="object"&&M!==null&&M.$$typeof===l}function se(M){var Z={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(we){return Z[we]})}var Ce=/\/+/g;function oe(M,Z){return typeof M=="object"&&M!==null&&M.key!=null?se(""+M.key):Z.toString(36)}function ye(M,Z,we,De,qe){var Ie=typeof M;(Ie==="undefined"||Ie==="boolean")&&(M=null);var ke=!1;if(M===null)ke=!0;else switch(Ie){case"string":case"number":ke=!0;break;case"object":switch(M.$$typeof){case l:case c:ke=!0}}if(ke)return ke=M,qe=qe(ke),M=De===""?"."+oe(ke,0):De,q(qe)?(we="",M!=null&&(we=M.replace(Ce,"$&/")+"/"),ye(qe,Z,we,"",function(et){return et})):qe!=null&&(Te(qe)&&(qe=We(qe,we+(!qe.key||ke&&ke.key===qe.key?"":(""+qe.key).replace(Ce,"$&/")+"/")+M)),Z.push(qe)),1;if(ke=0,De=De===""?".":De+":",q(M))for(var Be=0;Be<M.length;Be++){Ie=M[Be];var Ke=De+oe(Ie,Be);ke+=ye(Ie,Z,we,Ke,qe)}else if(Ke=A(M),typeof Ke=="function")for(M=Ke.call(M),Be=0;!(Ie=M.next()).done;)Ie=Ie.value,Ke=De+oe(Ie,Be++),ke+=ye(Ie,Z,we,Ke,qe);else if(Ie==="object")throw Z=String(M),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return ke}function L(M,Z,we){if(M==null)return M;var De=[],qe=0;return ye(M,De,"","",function(Ie){return Z.call(we,Ie,qe++)}),De}function X(M){if(M._status===-1){var Z=M._result;Z=Z(),Z.then(function(we){(M._status===0||M._status===-1)&&(M._status=1,M._result=we)},function(we){(M._status===0||M._status===-1)&&(M._status=2,M._result=we)}),M._status===-1&&(M._status=0,M._result=Z)}if(M._status===1)return M._result.default;throw M._result}var K={current:null},j={transition:null},R={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:j,ReactCurrentOwner:ge};function G(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:L,forEach:function(M,Z,we){L(M,function(){Z.apply(this,arguments)},we)},count:function(M){var Z=0;return L(M,function(){Z++}),Z},toArray:function(M){return L(M,function(Z){return Z})||[]},only:function(M){if(!Te(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Pt.Component=ae,Pt.Fragment=p,Pt.Profiler=y,Pt.PureComponent=H,Pt.StrictMode=g,Pt.Suspense=k,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,Pt.act=G,Pt.cloneElement=function(M,Z,we){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var De=J({},M.props),qe=M.key,Ie=M.ref,ke=M._owner;if(Z!=null){if(Z.ref!==void 0&&(Ie=Z.ref,ke=ge.current),Z.key!==void 0&&(qe=""+Z.key),M.type&&M.type.defaultProps)var Be=M.type.defaultProps;for(Ke in Z)Y.call(Z,Ke)&&!le.hasOwnProperty(Ke)&&(De[Ke]=Z[Ke]===void 0&&Be!==void 0?Be[Ke]:Z[Ke])}var Ke=arguments.length-2;if(Ke===1)De.children=we;else if(1<Ke){Be=Array(Ke);for(var et=0;et<Ke;et++)Be[et]=arguments[et+2];De.children=Be}return{$$typeof:l,type:M.type,key:qe,ref:Ie,props:De,_owner:ke}},Pt.createContext=function(M){return M={$$typeof:_,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:b,_context:M},M.Consumer=M},Pt.createElement=be,Pt.createFactory=function(M){var Z=be.bind(null,M);return Z.type=M,Z},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(M){return{$$typeof:C,render:M}},Pt.isValidElement=Te,Pt.lazy=function(M){return{$$typeof:N,_payload:{_status:-1,_result:M},_init:X}},Pt.memo=function(M,Z){return{$$typeof:E,type:M,compare:Z===void 0?null:Z}},Pt.startTransition=function(M){var Z=j.transition;j.transition={};try{M()}finally{j.transition=Z}},Pt.unstable_act=G,Pt.useCallback=function(M,Z){return K.current.useCallback(M,Z)},Pt.useContext=function(M){return K.current.useContext(M)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(M){return K.current.useDeferredValue(M)},Pt.useEffect=function(M,Z){return K.current.useEffect(M,Z)},Pt.useId=function(){return K.current.useId()},Pt.useImperativeHandle=function(M,Z,we){return K.current.useImperativeHandle(M,Z,we)},Pt.useInsertionEffect=function(M,Z){return K.current.useInsertionEffect(M,Z)},Pt.useLayoutEffect=function(M,Z){return K.current.useLayoutEffect(M,Z)},Pt.useMemo=function(M,Z){return K.current.useMemo(M,Z)},Pt.useReducer=function(M,Z,we){return K.current.useReducer(M,Z,we)},Pt.useRef=function(M){return K.current.useRef(M)},Pt.useState=function(M){return K.current.useState(M)},Pt.useSyncExternalStore=function(M,Z,we){return K.current.useSyncExternalStore(M,Z,we)},Pt.useTransition=function(){return K.current.useTransition()},Pt.version="18.3.1",Pt}var Uh;function ih(){return Uh||(Uh=1,Ep.exports=fg()),Ep.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function mg(){if(qh)return Yu;qh=1;var l=ih(),c=Symbol.for("react.element"),p=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,y=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function _(C,k,E){var N,I={},A=null,V=null;E!==void 0&&(A=""+E),k.key!==void 0&&(A=""+k.key),k.ref!==void 0&&(V=k.ref);for(N in k)g.call(k,N)&&!b.hasOwnProperty(N)&&(I[N]=k[N]);if(C&&C.defaultProps)for(N in k=C.defaultProps,k)I[N]===void 0&&(I[N]=k[N]);return{$$typeof:c,type:C,key:A,ref:V,props:I,_owner:y.current}}return Yu.Fragment=p,Yu.jsx=_,Yu.jsxs=_,Yu}var Kh;function gg(){return Kh||(Kh=1,Np.exports=mg()),Np.exports}var u=gg(),Se=ih();const yg=Qf(Se);var pd={},Lp={exports:{}},ei={},Pp={exports:{}},Ap={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function vg(){return $h||($h=1,(function(l){function c(j,R){var G=j.length;j.push(R);e:for(;0<G;){var M=G-1>>>1,Z=j[M];if(0<y(Z,R))j[M]=R,j[G]=Z,G=M;else break e}}function p(j){return j.length===0?null:j[0]}function g(j){if(j.length===0)return null;var R=j[0],G=j.pop();if(G!==R){j[0]=G;e:for(var M=0,Z=j.length,we=Z>>>1;M<we;){var De=2*(M+1)-1,qe=j[De],Ie=De+1,ke=j[Ie];if(0>y(qe,G))Ie<Z&&0>y(ke,qe)?(j[M]=ke,j[Ie]=G,M=Ie):(j[M]=qe,j[De]=G,M=De);else if(Ie<Z&&0>y(ke,G))j[M]=ke,j[Ie]=G,M=Ie;else break e}}return R}function y(j,R){var G=j.sortIndex-R.sortIndex;return G!==0?G:j.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;l.unstable_now=function(){return b.now()}}else{var _=Date,C=_.now();l.unstable_now=function(){return _.now()-C}}var k=[],E=[],N=1,I=null,A=3,V=!1,J=!1,W=!1,ae=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(j){for(var R=p(E);R!==null;){if(R.callback===null)g(E);else if(R.startTime<=j)g(E),R.sortIndex=R.expirationTime,c(k,R);else break;R=p(E)}}function q(j){if(W=!1,F(j),!J)if(p(k)!==null)J=!0,X(Y);else{var R=p(E);R!==null&&K(q,R.startTime-j)}}function Y(j,R){J=!1,W&&(W=!1,D(be),be=-1),V=!0;var G=A;try{for(F(R),I=p(k);I!==null&&(!(I.expirationTime>R)||j&&!se());){var M=I.callback;if(typeof M=="function"){I.callback=null,A=I.priorityLevel;var Z=M(I.expirationTime<=R);R=l.unstable_now(),typeof Z=="function"?I.callback=Z:I===p(k)&&g(k),F(R)}else g(k);I=p(k)}if(I!==null)var we=!0;else{var De=p(E);De!==null&&K(q,De.startTime-R),we=!1}return we}finally{I=null,A=G,V=!1}}var ge=!1,le=null,be=-1,We=5,Te=-1;function se(){return!(l.unstable_now()-Te<We)}function Ce(){if(le!==null){var j=l.unstable_now();Te=j;var R=!0;try{R=le(!0,j)}finally{R?oe():(ge=!1,le=null)}}else ge=!1}var oe;if(typeof H=="function")oe=function(){H(Ce)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,L=ye.port2;ye.port1.onmessage=Ce,oe=function(){L.postMessage(null)}}else oe=function(){ae(Ce,0)};function X(j){le=j,ge||(ge=!0,oe())}function K(j,R){be=ae(function(){j(l.unstable_now())},R)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(j){j.callback=null},l.unstable_continueExecution=function(){J||V||(J=!0,X(Y))},l.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):We=0<j?Math.floor(1e3/j):5},l.unstable_getCurrentPriorityLevel=function(){return A},l.unstable_getFirstCallbackNode=function(){return p(k)},l.unstable_next=function(j){switch(A){case 1:case 2:case 3:var R=3;break;default:R=A}var G=A;A=R;try{return j()}finally{A=G}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(j,R){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var G=A;A=j;try{return R()}finally{A=G}},l.unstable_scheduleCallback=function(j,R,G){var M=l.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?M+G:M):G=M,j){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=G+Z,j={id:N++,callback:R,priorityLevel:j,startTime:G,expirationTime:Z,sortIndex:-1},G>M?(j.sortIndex=G,c(E,j),p(k)===null&&j===p(E)&&(W?(D(be),be=-1):W=!0,K(q,G-M))):(j.sortIndex=Z,c(k,j),J||V||(J=!0,X(Y))),j},l.unstable_shouldYield=se,l.unstable_wrapCallback=function(j){var R=A;return function(){var G=A;A=R;try{return j.apply(this,arguments)}finally{A=G}}}})(Ap)),Ap}var Gh;function xg(){return Gh||(Gh=1,Pp.exports=vg()),Pp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function bg(){if(Yh)return ei;Yh=1;var l=ih(),c=xg();function p(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g=new Set,y={};function b(t,r){_(t,r),_(t+"Capture",r)}function _(t,r){for(y[t]=r,t=0;t<r.length;t++)g.add(r[t])}var C=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},I={};function A(t){return k.call(I,t)?!0:k.call(N,t)?!1:E.test(t)?I[t]=!0:(N[t]=!0,!1)}function V(t,r,a,d){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function J(t,r,a,d){if(r===null||typeof r>"u"||V(t,r,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function W(t,r,a,d,f,v,P){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=v,this.removeEmptyString=P}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ae[t]=new W(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];ae[r]=new W(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){ae[t]=new W(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ae[t]=new W(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ae[t]=new W(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){ae[t]=new W(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){ae[t]=new W(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){ae[t]=new W(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){ae[t]=new W(t,5,!1,t.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function H(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(D,H);ae[r]=new W(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(D,H);ae[r]=new W(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(D,H);ae[r]=new W(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){ae[t]=new W(t,1,!1,t.toLowerCase(),null,!1,!1)}),ae.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){ae[t]=new W(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,r,a,d){var f=ae.hasOwnProperty(r)?ae[r]:null;(f!==null?f.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(J(r,a,f,d)&&(a=null),d||f===null?A(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(r=f.attributeName,d=f.attributeNamespace,a===null?t.removeAttribute(r):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,d?t.setAttributeNS(d,r,a):t.setAttribute(r,a))))}var q=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),ge=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),se=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),j=Symbol.iterator;function R(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,M;function Z(t){if(M===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);M=r&&r[1]||""}return`
`+M+t}var we=!1;function De(t,r){if(!t||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(he){var d=he}Reflect.construct(t,[],r)}else{try{r.call()}catch(he){d=he}t.call(r.prototype)}else{try{throw Error()}catch(he){d=he}t()}}catch(he){if(he&&d&&typeof he.stack=="string"){for(var f=he.stack.split(`
`),v=d.stack.split(`
`),P=f.length-1,$=v.length-1;1<=P&&0<=$&&f[P]!==v[$];)$--;for(;1<=P&&0<=$;P--,$--)if(f[P]!==v[$]){if(P!==1||$!==1)do if(P--,$--,0>$||f[P]!==v[$]){var Q=`
`+f[P].replace(" at new "," at ");return t.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",t.displayName)),Q}while(1<=P&&0<=$);break}}}finally{we=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?Z(t):""}function qe(t){switch(t.tag){case 5:return Z(t.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return t=De(t.type,!1),t;case 11:return t=De(t.type.render,!1),t;case 1:return t=De(t.type,!0),t;default:return""}}function Ie(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case le:return"Fragment";case ge:return"Portal";case We:return"Profiler";case be:return"StrictMode";case oe:return"Suspense";case ye:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case se:return(t.displayName||"Context")+".Consumer";case Te:return(t._context.displayName||"Context")+".Provider";case Ce:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return r=t.displayName||null,r!==null?r:Ie(t.type)||"Memo";case X:r=t._payload,t=t._init;try{return Ie(t(r))}catch{}}return null}function ke(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ie(r);case 8:return r===be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ke(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function et(t){var r=Ke(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),d=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,v=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(P){d=""+P,v.call(this,P)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(P){d=""+P},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function $e(t){t._valueTracker||(t._valueTracker=et(t))}function Ft(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),d="";return t&&(d=Ke(t)?t.checked?"true":"false":t.value),t=d,t!==a?(r.setValue(t),!0):!1}function Yt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ct(t,r){var a=r.checked;return G({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function xt(t,r){var a=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;a=Be(r.value!=null?r.value:a),t._wrapperState={initialChecked:d,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function tt(t,r){r=r.checked,r!=null&&F(t,"checked",r,!1)}function Ue(t,r){tt(t,r);var a=Be(r.value),d=r.type;if(a!=null)d==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(d==="submit"||d==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?yt(t,r.type,a):r.hasOwnProperty("defaultValue")&&yt(t,r.type,Be(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function vt(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function yt(t,r,a){(r!=="number"||Yt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Qe=Array.isArray;function ut(t,r,a,d){if(t=t.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=r.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&d&&(t[a].defaultSelected=!0)}else{for(a=""+Be(a),r=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,d&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function ie(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(p(91));return G({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function je(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(p(92));if(Qe(a)){if(1<a.length)throw Error(p(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:Be(a)}}function pe(t,r){var a=Be(r.value),d=Be(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),d!=null&&(t.defaultValue=""+d)}function kt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Ye(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ot(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Ye(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ze,mt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,d,f){MSApp.execUnsafeLocalFunction(function(){return t(r,a,d,f)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ze=Ze||document.createElement("div"),Ze.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ze.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function pt(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var Xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nr=["Webkit","ms","Moz","O"];Object.keys(Xt).forEach(function(t){nr.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Xt[r]=Xt[t]})});function Sr(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Xt.hasOwnProperty(t)&&Xt[t]?(""+r).trim():r+"px"}function Rr(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var d=a.indexOf("--")===0,f=Sr(a,r[a],d);a==="float"&&(a="cssFloat"),d?t.setProperty(a,f):t[a]=f}}var Br=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ur(t,r){if(r){if(Br[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(p(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(p(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(p(61))}if(r.style!=null&&typeof r.style!="object")throw Error(p(62))}}function bt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function rt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _r=null,tn=null,It=null;function qt(t){if(t=hn(t)){if(typeof _r!="function")throw Error(p(280));var r=t.stateNode;r&&(r=yn(r),_r(t.stateNode,t.type,r))}}function bn(t){tn?It?It.push(t):It=[t]:tn=t}function gn(){if(tn){var t=tn,r=It;if(It=tn=null,qt(t),r)for(t=0;t<r.length;t++)qt(r[t])}}function En(t,r){return t(r)}function wn(){}var ni=!1;function On(t,r,a){if(ni)return t(r,a);ni=!0;try{return En(t,r,a)}finally{ni=!1,(tn!==null||It!==null)&&(wn(),gn())}}function pr(t,r){var a=t.stateNode;if(a===null)return null;var d=yn(a);if(d===null)return null;a=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(t=t.type,d=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!d;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(p(231,r,typeof a));return a}var mi=!1;if(C)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){mi=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{mi=!1}function os(t,r,a,d,f,v,P,$,Q){var he=Array.prototype.slice.call(arguments,3);try{r.apply(a,he)}catch(Re){this.onError(Re)}}var kn=!1,Cr=null,qr=!1,Ir=null,Tr={onError:function(t){kn=!0,Cr=t}};function gi(t,r,a,d,f,v,P,$,Q){kn=!1,Cr=null,os.apply(Tr,arguments)}function as(t,r,a,d,f,v,P,$,Q){if(gi.apply(this,arguments),kn){if(kn){var he=Cr;kn=!1,Cr=null}else throw Error(p(198));qr||(qr=!0,Ir=he)}}function Mn(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function ls(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Mi(t){if(Mn(t)!==t)throw Error(p(188))}function Or(t){var r=t.alternate;if(!r){if(r=Mn(t),r===null)throw Error(p(188));return r!==t?null:t}for(var a=t,d=r;;){var f=a.return;if(f===null)break;var v=f.alternate;if(v===null){if(d=f.return,d!==null){a=d;continue}break}if(f.child===v.child){for(v=f.child;v;){if(v===a)return Mi(f),t;if(v===d)return Mi(f),r;v=v.sibling}throw Error(p(188))}if(a.return!==d.return)a=f,d=v;else{for(var P=!1,$=f.child;$;){if($===a){P=!0,a=f,d=v;break}if($===d){P=!0,d=f,a=v;break}$=$.sibling}if(!P){for($=v.child;$;){if($===a){P=!0,a=v,d=f;break}if($===d){P=!0,d=v,a=f;break}$=$.sibling}if(!P)throw Error(p(189))}}if(a.alternate!==d)throw Error(p(190))}if(a.tag!==3)throw Error(p(188));return a.stateNode.current===a?t:r}function Gn(t){return t=Or(t),t!==null?yi(t):null}function yi(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=yi(t);if(r!==null)return r;t=t.sibling}return null}var Di=c.unstable_scheduleCallback,Bt=c.unstable_cancelCallback,Mr=c.unstable_shouldYield,us=c.unstable_requestPaint,Rt=c.unstable_now,zi=c.unstable_getCurrentPriorityLevel,ri=c.unstable_ImmediatePriority,Vt=c.unstable_UserBlockingPriority,Je=c.unstable_NormalPriority,ii=c.unstable_LowPriority,cs=c.unstable_IdlePriority,Yn=null,T=null;function B(t){if(T&&typeof T.onCommitFiberRoot=="function")try{T.onCommitFiberRoot(Yn,t,void 0,(t.current.flags&128)===128)}catch{}}var fe=Math.clz32?Math.clz32:He,Ne=Math.log,de=Math.LN2;function He(t){return t>>>=0,t===0?32:31-(Ne(t)/de|0)|0}var jt=64,Qt=4194304;function Sn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kr(t,r){var a=t.pendingLanes;if(a===0)return 0;var d=0,f=t.suspendedLanes,v=t.pingedLanes,P=a&268435455;if(P!==0){var $=P&~f;$!==0?d=Sn($):(v&=P,v!==0&&(d=Sn(v)))}else P=a&~f,P!==0?d=Sn(P):v!==0&&(d=Sn(v));if(d===0)return 0;if(r!==0&&r!==d&&(r&f)===0&&(f=d&-d,v=r&-r,f>=v||f===16&&(v&4194240)!==0))return r;if((d&4)!==0&&(d|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=d;0<r;)a=31-fe(r),f=1<<a,d|=t[a],r&=~f;return d}function tl(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(t,r){for(var a=t.suspendedLanes,d=t.pingedLanes,f=t.expirationTimes,v=t.pendingLanes;0<v;){var P=31-fe(v),$=1<<P,Q=f[P];Q===-1?(($&a)===0||($&d)!==0)&&(f[P]=tl($,r)):Q<=r&&(t.expiredLanes|=$),v&=~$}}function ia(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sa(){var t=jt;return jt<<=1,(jt&4194240)===0&&(jt=64),t}function Fi(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function rr(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-fe(r),t[r]=a}function oa(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var d=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-fe(a),v=1<<f;r[f]=0,d[f]=-1,t[f]=-1,a&=~v}}function Wi(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var d=31-fe(a),f=1<<d;f&r|t[d]&r&&(t[d]|=r),a&=~f}}var Nt=0;function ds(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Is,vi,xo,xi,Hi,ir=!1,bo=[],Dr=null,si=null,Dn=null,$r=new Map,Os=new Map,jr=[],Ms="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function aa(t,r){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":si=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":$r.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(r.pointerId)}}function Ds(t,r,a,d,f,v){return t===null||t.nativeEvent!==v?(t={blockedOn:r,domEventName:a,eventSystemFlags:d,nativeEvent:v,targetContainers:[f]},r!==null&&(r=hn(r),r!==null&&vi(r)),t):(t.eventSystemFlags|=d,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function Jl(t,r,a,d,f){switch(r){case"focusin":return Dr=Ds(Dr,t,r,a,d,f),!0;case"dragenter":return si=Ds(si,t,r,a,d,f),!0;case"mouseover":return Dn=Ds(Dn,t,r,a,d,f),!0;case"pointerover":var v=f.pointerId;return $r.set(v,Ds($r.get(v)||null,t,r,a,d,f)),!0;case"gotpointercapture":return v=f.pointerId,Os.set(v,Ds(Os.get(v)||null,t,r,a,d,f)),!0}return!1}function la(t){var r=Pn(t.target);if(r!==null){var a=Mn(r);if(a!==null){if(r=a.tag,r===13){if(r=ls(a),r!==null){t.blockedOn=r,Hi(t.priority,function(){xo(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ps(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=Tt(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var d=new a.constructor(a.type,a);fi=d,a.target.dispatchEvent(d),fi=null}else return r=hn(a),r!==null&&vi(r),t.blockedOn=a,!1;r.shift()}return!0}function zs(t,r,a){ps(t)&&a.delete(r)}function ua(){ir=!1,Dr!==null&&ps(Dr)&&(Dr=null),si!==null&&ps(si)&&(si=null),Dn!==null&&ps(Dn)&&(Dn=null),$r.forEach(zs),Os.forEach(zs)}function bi(t,r){t.blockedOn===r&&(t.blockedOn=null,ir||(ir=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,ua)))}function _e(t){function r(f){return bi(f,t)}if(0<bo.length){bi(bo[0],t);for(var a=1;a<bo.length;a++){var d=bo[a];d.blockedOn===t&&(d.blockedOn=null)}}for(Dr!==null&&bi(Dr,t),si!==null&&bi(si,t),Dn!==null&&bi(Dn,t),$r.forEach(r),Os.forEach(r),a=0;a<jr.length;a++)d=jr[a],d.blockedOn===t&&(d.blockedOn=null);for(;0<jr.length&&(a=jr[0],a.blockedOn===null);)la(a),a.blockedOn===null&&jr.shift()}var O=q.ReactCurrentBatchConfig,te=!0;function ve(t,r,a,d){var f=Nt,v=O.transition;O.transition=null;try{Nt=1,nt(t,r,a,d)}finally{Nt=f,O.transition=v}}function Le(t,r,a,d){var f=Nt,v=O.transition;O.transition=null;try{Nt=4,nt(t,r,a,d)}finally{Nt=f,O.transition=v}}function nt(t,r,a,d){if(te){var f=Tt(t,r,a,d);if(f===null)fu(t,r,d,ct,a),aa(t,d);else if(Jl(f,t,r,a,d))d.stopPropagation();else if(aa(t,d),r&4&&-1<Ms.indexOf(t)){for(;f!==null;){var v=hn(f);if(v!==null&&Is(v),v=Tt(t,r,a,d),v===null&&fu(t,r,d,ct,a),v===f)break;f=v}f!==null&&d.stopPropagation()}else fu(t,r,d,null,a)}}var ct=null;function Tt(t,r,a,d){if(ct=null,t=rt(d),t=Pn(t),t!==null)if(r=Mn(t),r===null)t=null;else if(a=r.tag,a===13){if(t=ls(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ct=t,null}function dn(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zi()){case ri:return 1;case Vt:return 4;case Je:case ii:return 16;case cs:return 536870912;default:return 16}default:return 16}}var Kt=null,hr=null,Vn=null;function fr(){if(Vn)return Vn;var t,r=hr,a=r.length,d,f="value"in Kt?Kt.value:Kt.textContent,v=f.length;for(t=0;t<a&&r[t]===f[t];t++);var P=a-t;for(d=1;d<=P&&r[a-d]===f[v-d];d++);return Vn=f.slice(t,1<d?1-d:void 0)}function pn(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Nr(){return!0}function nl(){return!1}function _n(t){function r(a,d,f,v,P){this._reactName=a,this._targetInst=f,this.type=d,this.nativeEvent=v,this.target=P,this.currentTarget=null;for(var $ in t)t.hasOwnProperty($)&&(a=t[$],this[$]=a?a(v):v[$]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Nr:nl,this.isPropagationStopped=nl,this}return G(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),r}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=_n(Bi),wi=G({},Bi,{view:0,detail:0}),qd=_n(wi),Xl,Ql,da,pa=G({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==da&&(da&&t.type==="mousemove"?(Xl=t.screenX-da.screenX,Ql=t.screenY-da.screenY):Ql=Xl=0,da=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Zl=_n(pa),Kd=G({},pa,{dataTransfer:0}),$d=_n(Kd),Gd=G({},wi,{relatedTarget:0}),eu=_n(Gd),hc=G({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Yd=_n(hc),fc=G({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rl=_n(fc),wo=G({},Bi,{data:0}),mc=_n(wo),Vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ha={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zn(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=ha[t])?!!r[t]:!1}function tu(){return zn}var gc=G({},wi,{key:function(t){if(t.key){var r=Vd[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=pn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?pn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fa=_n(gc),Xd=G({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nu=_n(Xd),Qd=G({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),ru=_n(Qd),yc=G({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zd=_n(yc),ep=G({},pa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vc=_n(ep),xc=[9,13,27,32],iu=C&&"CompositionEvent"in window,Ui=null;C&&"documentMode"in document&&(Ui=document.documentMode);var qi=C&&"TextEvent"in window&&!Ui,ma=C&&(!iu||Ui&&8<Ui&&11>=Ui),il=" ",su=!1;function oi(t,r){switch(t){case"keyup":return xc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function tp(t,r){switch(t){case"compositionend":return hs(r);case"keypress":return r.which!==32?null:(su=!0,il);case"textInput":return t=r.data,t===il&&su?null:t;default:return null}}function bc(t,r){if(fs)return t==="compositionend"||!iu&&oi(t,r)?(t=fr(),Vn=hr=Kt=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ma&&r.locale!=="ko"?null:r.data;default:return null}}var np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!np[t.type]:r==="textarea"}function sl(t,r,a,d){bn(d),r=jo(r,"onChange"),0<r.length&&(a=new ca("onChange","change",null,a,d),t.push({event:a,listeners:r}))}var ki=null,Er=null;function wc(t){ml(t,0)}function ga(t){var r=Tn(t);if(Ft(r))return t}function rp(t,r){if(t==="change")return r}var kc=!1;if(C){var au;if(C){var ol="oninput"in document;if(!ol){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),ol=typeof lu.oninput=="function"}au=ol}else au=!1;kc=au&&(!document.documentMode||9<document.documentMode)}function ko(){ki&&(ki.detachEvent("onpropertychange",uu),Er=ki=null)}function uu(t){if(t.propertyName==="value"&&ga(Er)){var r=[];sl(r,Er,t,rt(t)),On(wc,r)}}function Sc(t,r,a){t==="focusin"?(ko(),ki=r,Er=a,ki.attachEvent("onpropertychange",uu)):t==="focusout"&&ko()}function cu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ga(Er)}function al(t,r){if(t==="click")return ga(r)}function _c(t,r){if(t==="input"||t==="change")return ga(r)}function ll(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Cn=typeof Object.is=="function"?Object.is:ll;function So(t,r){if(Cn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),d=Object.keys(r);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var f=a[d];if(!k.call(r,f)||!Cn(t[f],r[f]))return!1}return!0}function ul(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cl(t,r){var a=ul(t);t=0;for(var d;a;){if(a.nodeType===3){if(d=t+a.textContent.length,t<=r&&d>=r)return{node:a,offset:r-t};t=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ul(a)}}function du(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?du(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function pu(){for(var t=window,r=Yt();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Yt(t.document)}return r}function ya(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function ip(t){var r=pu(),a=t.focusedElem,d=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&du(a.ownerDocument.documentElement,a)){if(d!==null&&ya(a)){if(r=d.start,t=d.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,v=Math.min(d.start,f);d=d.end===void 0?v:Math.min(d.end,f),!t.extend&&v>d&&(f=d,d=v,v=f),f=cl(a,v);var P=cl(a,d);f&&P&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==P.node||t.focusOffset!==P.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),v>d?(t.addRange(r),t.extend(P.node,P.offset)):(r.setEnd(P.node,P.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sp=C&&"documentMode"in document&&11>=document.documentMode,_o=null,Ki=null,Si=null,ms=!1;function dl(t,r,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ms||_o==null||_o!==Yt(d)||(d=_o,"selectionStart"in d&&ya(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Si&&So(Si,d)||(Si=d,d=jo(Ki,"onSelect"),0<d.length&&(r=new ca("onSelect","select",null,r,a),t.push({event:r,listeners:d}),r.target=_o)))}function Co(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Fs={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},va={},gs={};C&&(gs=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function _i(t){if(va[t])return va[t];if(!Fs[t])return t;var r=Fs[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in gs)return va[t]=r[a];return t}var sr=_i("animationend"),$i=_i("animationiteration"),Gi=_i("animationstart"),xa=_i("transitionend"),Cc=new Map,hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,r){Cc.set(t,r),b(r,[t])}for(var pl=0;pl<hu.length;pl++){var ba=hu[pl],hl=ba.toLowerCase(),op=ba[0].toUpperCase()+ba.slice(1);Gr(hl,"on"+op)}Gr(sr,"onAnimationEnd"),Gr($i,"onAnimationIteration"),Gr(Gi,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(xa,"onTransitionEnd"),_("onMouseEnter",["mouseout","mouseover"]),_("onMouseLeave",["mouseout","mouseover"]),_("onPointerEnter",["pointerout","pointerover"]),_("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function fl(t,r,a){var d=t.type||"unknown-event";t.currentTarget=a,as(d,r,void 0,t),t.currentTarget=null}function ml(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var d=t[a],f=d.event;d=d.listeners;e:{var v=void 0;if(r)for(var P=d.length-1;0<=P;P--){var $=d[P],Q=$.instance,he=$.currentTarget;if($=$.listener,Q!==v&&f.isPropagationStopped())break e;fl(f,$,he),v=Q}else for(P=0;P<d.length;P++){if($=d[P],Q=$.instance,he=$.currentTarget,$=$.listener,Q!==v&&f.isPropagationStopped())break e;fl(f,$,he),v=Q}}}if(qr)throw t=Ir,qr=!1,Ir=null,t}function Wt(t,r){var a=r[mu];a===void 0&&(a=r[mu]=new Set);var d=t+"__bubble";a.has(d)||(jc(r,t,2,!1),a.add(d))}function To(t,r,a){var d=0;r&&(d|=4),jc(a,t,d,r)}var wa="_reactListening"+Math.random().toString(36).slice(2);function ys(t){if(!t[wa]){t[wa]=!0,g.forEach(function(a){a!=="selectionchange"&&(Tc.has(a)||To(a,!1,t),To(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[wa]||(r[wa]=!0,To("selectionchange",!1,r))}}function jc(t,r,a,d){switch(dn(r)){case 1:var f=ve;break;case 4:f=Le;break;default:f=nt}a=f.bind(null,r,a,t),f=void 0,!mi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),d?f!==void 0?t.addEventListener(r,a,{capture:!0,passive:f}):t.addEventListener(r,a,!0):f!==void 0?t.addEventListener(r,a,{passive:f}):t.addEventListener(r,a,!1)}function fu(t,r,a,d,f){var v=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var P=d.tag;if(P===3||P===4){var $=d.stateNode.containerInfo;if($===f||$.nodeType===8&&$.parentNode===f)break;if(P===4)for(P=d.return;P!==null;){var Q=P.tag;if((Q===3||Q===4)&&(Q=P.stateNode.containerInfo,Q===f||Q.nodeType===8&&Q.parentNode===f))return;P=P.return}for(;$!==null;){if(P=Pn($),P===null)return;if(Q=P.tag,Q===5||Q===6){d=v=P;continue e}$=$.parentNode}}d=d.return}On(function(){var he=v,Re=rt(a),Oe=[];e:{var Pe=Cc.get(t);if(Pe!==void 0){var Xe=ca,it=t;switch(t){case"keypress":if(pn(a)===0)break e;case"keydown":case"keyup":Xe=fa;break;case"focusin":it="focus",Xe=eu;break;case"focusout":it="blur",Xe=eu;break;case"beforeblur":case"afterblur":Xe=eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=Zl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=$d;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=ru;break;case sr:case $i:case Gi:Xe=Yd;break;case xa:Xe=Zd;break;case"scroll":Xe=qd;break;case"wheel":Xe=vc;break;case"copy":case"cut":case"paste":Xe=rl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=nu}var st=(r&4)!==0,Kn=!st&&t==="scroll",ue=st?Pe!==null?Pe+"Capture":null:Pe;st=[];for(var ne=he,ce;ne!==null;){ce=ne;var Fe=ce.stateNode;if(ce.tag===5&&Fe!==null&&(ce=Fe,ue!==null&&(Fe=pr(ne,ue),Fe!=null&&st.push(ka(ne,Fe,ce)))),Kn)break;ne=ne.return}0<st.length&&(Pe=new Xe(Pe,it,null,a,Re),Oe.push({event:Pe,listeners:st}))}}if((r&7)===0){e:{if(Pe=t==="mouseover"||t==="pointerover",Xe=t==="mouseout"||t==="pointerout",Pe&&a!==fi&&(it=a.relatedTarget||a.fromElement)&&(Pn(it)||it[Ji]))break e;if((Xe||Pe)&&(Pe=Re.window===Re?Re:(Pe=Re.ownerDocument)?Pe.defaultView||Pe.parentWindow:window,Xe?(it=a.relatedTarget||a.toElement,Xe=he,it=it?Pn(it):null,it!==null&&(Kn=Mn(it),it!==Kn||it.tag!==5&&it.tag!==6)&&(it=null)):(Xe=null,it=he),Xe!==it)){if(st=Zl,Fe="onMouseLeave",ue="onMouseEnter",ne="mouse",(t==="pointerout"||t==="pointerover")&&(st=nu,Fe="onPointerLeave",ue="onPointerEnter",ne="pointer"),Kn=Xe==null?Pe:Tn(Xe),ce=it==null?Pe:Tn(it),Pe=new st(Fe,ne+"leave",Xe,a,Re),Pe.target=Kn,Pe.relatedTarget=ce,Fe=null,Pn(Re)===he&&(st=new st(ue,ne+"enter",it,a,Re),st.target=ce,st.relatedTarget=Kn,Fe=st),Kn=Fe,Xe&&it)t:{for(st=Xe,ue=it,ne=0,ce=st;ce;ce=vs(ce))ne++;for(ce=0,Fe=ue;Fe;Fe=vs(Fe))ce++;for(;0<ne-ce;)st=vs(st),ne--;for(;0<ce-ne;)ue=vs(ue),ce--;for(;ne--;){if(st===ue||ue!==null&&st===ue.alternate)break t;st=vs(st),ue=vs(ue)}st=null}else st=null;Xe!==null&&Hs(Oe,Pe,Xe,st,!1),it!==null&&Kn!==null&&Hs(Oe,Kn,it,st,!0)}}e:{if(Pe=he?Tn(he):window,Xe=Pe.nodeName&&Pe.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&Pe.type==="file")var lt=rp;else if(ou(Pe))if(kc)lt=_c;else{lt=cu;var ht=Sc}else(Xe=Pe.nodeName)&&Xe.toLowerCase()==="input"&&(Pe.type==="checkbox"||Pe.type==="radio")&&(lt=al);if(lt&&(lt=lt(t,he))){sl(Oe,lt,a,Re);break e}ht&&ht(t,Pe,he),t==="focusout"&&(ht=Pe._wrapperState)&&ht.controlled&&Pe.type==="number"&&yt(Pe,"number",Pe.value)}switch(ht=he?Tn(he):window,t){case"focusin":(ou(ht)||ht.contentEditable==="true")&&(_o=ht,Ki=he,Si=null);break;case"focusout":Si=Ki=_o=null;break;case"mousedown":ms=!0;break;case"contextmenu":case"mouseup":case"dragend":ms=!1,dl(Oe,a,Re);break;case"selectionchange":if(sp)break;case"keydown":case"keyup":dl(Oe,a,Re)}var ft;if(iu)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else fs?oi(t,a)&&(wt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(wt="onCompositionStart");wt&&(ma&&a.locale!=="ko"&&(fs||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&fs&&(ft=fr()):(Kt=Re,hr="value"in Kt?Kt.value:Kt.textContent,fs=!0)),ht=jo(he,wt),0<ht.length&&(wt=new mc(wt,t,null,a,Re),Oe.push({event:wt,listeners:ht}),ft?wt.data=ft:(ft=hs(a),ft!==null&&(wt.data=ft)))),(ft=qi?tp(t,a):bc(t,a))&&(he=jo(he,"onBeforeInput"),0<he.length&&(Re=new mc("onBeforeInput","beforeinput",null,a,Re),Oe.push({event:Re,listeners:he}),Re.data=ft))}ml(Oe,r)})}function ka(t,r,a){return{instance:t,listener:r,currentTarget:a}}function jo(t,r){for(var a=r+"Capture",d=[];t!==null;){var f=t,v=f.stateNode;f.tag===5&&v!==null&&(f=v,v=pr(t,a),v!=null&&d.unshift(ka(t,v,f)),v=pr(t,r),v!=null&&d.push(ka(t,v,f))),t=t.return}return d}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hs(t,r,a,d,f){for(var v=r._reactName,P=[];a!==null&&a!==d;){var $=a,Q=$.alternate,he=$.stateNode;if(Q!==null&&Q===d)break;$.tag===5&&he!==null&&($=he,f?(Q=pr(a,v),Q!=null&&P.unshift(ka(a,Q,$))):f||(Q=pr(a,v),Q!=null&&P.push(ka(a,Q,$)))),a=a.return}P.length!==0&&t.push({event:r,listeners:P})}var Sa=/\r\n?/g,ap=/\u0000|\uFFFD/g;function _a(t){return(typeof t=="string"?t:""+t).replace(Sa,`
`).replace(ap,"")}function Ca(t,r,a){if(r=_a(r),_a(t)!==r&&a)throw Error(p(425))}function xs(){}var gl=null,Yi=null;function Bs(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,Ta=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,Nc=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(t){return Us.resolve(null).then(t).catch(Ec)}:Vi;function Ec(t){setTimeout(function(){throw t})}function yl(t,r){var a=r,d=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(d===0){t.removeChild(f),_e(r);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=f}while(a);_e(r)}function bs(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function ws(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Yr,ja="__reactProps$"+Yr,Ji="__reactContainer$"+Yr,mu="__reactEvents$"+Yr,lp="__reactListeners$"+Yr,up="__reactHandles$"+Yr;function Pn(t){var r=t[Ci];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Ji]||a[Ci]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=ws(t);t!==null;){if(a=t[Ci])return a;t=ws(t)}return r}t=a,a=t.parentNode}return null}function hn(t){return t=t[Ci]||t[Ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Tn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(p(33))}function yn(t){return t[ja]||null}var qs=[],No=-1;function ai(t){return{current:t}}function nn(t){0>No||(t.current=qs[No],qs[No]=null,No--)}function Zt(t,r){No++,qs[No]=t.current,t.current=r}var ks={},Jn=ai(ks),mr=ai(!1),Xi=ks;function Eo(t,r){var a=t.type.contextTypes;if(!a)return ks;var d=t.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var f={},v;for(v in a)f[v]=r[v];return d&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function or(t){return t=t.childContextTypes,t!=null}function Lo(){nn(mr),nn(Jn)}function gu(t,r,a){if(Jn.current!==ks)throw Error(p(168));Zt(Jn,r),Zt(mr,a)}function yu(t,r,a){var d=t.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var f in d)if(!(f in r))throw Error(p(108,ke(t)||"Unknown",f));return G({},a,d)}function Po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ks,Xi=Jn.current,Zt(Jn,t),Zt(mr,mr.current),!0}function vu(t,r,a){var d=t.stateNode;if(!d)throw Error(p(169));a?(t=yu(t,r,Xi),d.__reactInternalMemoizedMergedChildContext=t,nn(mr),nn(Jn),Zt(Jn,t)):nn(mr),Zt(mr,a)}var zr=null,vl=!1,Ao=!1;function Ti(t){zr===null?zr=[t]:zr.push(t)}function Lc(t){vl=!0,Ti(t)}function Ss(){if(!Ao&&zr!==null){Ao=!0;var t=0,r=Nt;try{var a=zr;for(Nt=1;t<a.length;t++){var d=a[t];do d=d(!0);while(d!==null)}zr=null,vl=!1}catch(f){throw zr!==null&&(zr=zr.slice(t+1)),Di(ri,Ss),f}finally{Nt=r,Ao=!1}}return null}var Ks=[],Xn=0,At=null,Lr=0,Fn=[],Wn=0,_s=null,li=1,ji="";function $s(t,r){Ks[Xn++]=Lr,Ks[Xn++]=At,At=t,Lr=r}function xl(t,r,a){Fn[Wn++]=li,Fn[Wn++]=ji,Fn[Wn++]=_s,_s=t;var d=li;t=ji;var f=32-fe(d)-1;d&=~(1<<f),a+=1;var v=32-fe(r)+f;if(30<v){var P=f-f%5;v=(d&(1<<P)-1).toString(32),d>>=P,f-=P,li=1<<32-fe(r)+f|a<<f|d,ji=v+t}else li=1<<v|a<<f|d,ji=t}function Gs(t){t.return!==null&&($s(t,1),xl(t,1,0))}function bl(t){for(;t===At;)At=Ks[--Xn],Ks[Xn]=null,Lr=Ks[--Xn],Ks[Xn]=null;for(;t===_s;)_s=Fn[--Wn],Fn[Wn]=null,ji=Fn[--Wn],Fn[Wn]=null,li=Fn[--Wn],Fn[Wn]=null}var gr=null,An=null,rn=!1,Vr=null;function Pc(t,r){var a=Ii(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function Na(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,gr=t,An=bs(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,gr=t,An=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=_s!==null?{id:li,overflow:ji}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Ii(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,gr=t,An=null,!0):!1;default:return!1}}function Ea(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wl(t){if(rn){var r=An;if(r){var a=r;if(!Na(t,r)){if(Ea(t))throw Error(p(418));r=bs(a.nextSibling);var d=gr;r&&Na(t,r)?Pc(d,a):(t.flags=t.flags&-4097|2,rn=!1,gr=t)}}else{if(Ea(t))throw Error(p(418));t.flags=t.flags&-4097|2,rn=!1,gr=t}}}function Ac(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gr=t}function La(t){if(t!==gr)return!1;if(!rn)return Ac(t),rn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Bs(t.type,t.memoizedProps)),r&&(r=An)){if(Ea(t))throw Rc(),Error(p(418));for(;r;)Pc(t,r),r=bs(r.nextSibling)}if(Ac(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){An=bs(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}An=null}}else An=gr?bs(t.stateNode.nextSibling):null;return!0}function Rc(){for(var t=An;t;)t=bs(t.nextSibling)}function Ro(){An=gr=null,rn=!1}function Io(t){Vr===null?Vr=[t]:Vr.push(t)}var Ic=q.ReactCurrentBatchConfig;function Pa(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(p(309));var d=a.stateNode}if(!d)throw Error(p(147,t));var f=d,v=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(P){var $=f.refs;P===null?delete $[v]:$[v]=P},r._stringRef=v,r)}if(typeof t!="string")throw Error(p(284));if(!a._owner)throw Error(p(290,t))}return t}function kl(t,r){throw t=Object.prototype.toString.call(r),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function xu(t){var r=t._init;return r(t._payload)}function Ys(t){function r(ue,ne){if(t){var ce=ue.deletions;ce===null?(ue.deletions=[ne],ue.flags|=16):ce.push(ne)}}function a(ue,ne){if(!t)return null;for(;ne!==null;)r(ue,ne),ne=ne.sibling;return null}function d(ue,ne){for(ue=new Map;ne!==null;)ne.key!==null?ue.set(ne.key,ne):ue.set(ne.index,ne),ne=ne.sibling;return ue}function f(ue,ne){return ue=Qo(ue,ne),ue.index=0,ue.sibling=null,ue}function v(ue,ne,ce){return ue.index=ce,t?(ce=ue.alternate,ce!==null?(ce=ce.index,ce<ne?(ue.flags|=2,ne):ce):(ue.flags|=2,ne)):(ue.flags|=1048576,ne)}function P(ue){return t&&ue.alternate===null&&(ue.flags|=2),ue}function $(ue,ne,ce,Fe){return ne===null||ne.tag!==6?(ne=kp(ce,ue.mode,Fe),ne.return=ue,ne):(ne=f(ne,ce),ne.return=ue,ne)}function Q(ue,ne,ce,Fe){var lt=ce.type;return lt===le?Re(ue,ne,ce.props.children,Fe,ce.key):ne!==null&&(ne.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===X&&xu(lt)===ne.type)?(Fe=f(ne,ce.props),Fe.ref=Pa(ue,ne,ce),Fe.return=ue,Fe):(Fe=id(ce.type,ce.key,ce.props,null,ue.mode,Fe),Fe.ref=Pa(ue,ne,ce),Fe.return=ue,Fe)}function he(ue,ne,ce,Fe){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==ce.containerInfo||ne.stateNode.implementation!==ce.implementation?(ne=Sp(ce,ue.mode,Fe),ne.return=ue,ne):(ne=f(ne,ce.children||[]),ne.return=ue,ne)}function Re(ue,ne,ce,Fe,lt){return ne===null||ne.tag!==7?(ne=Ya(ce,ue.mode,Fe,lt),ne.return=ue,ne):(ne=f(ne,ce),ne.return=ue,ne)}function Oe(ue,ne,ce){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=kp(""+ne,ue.mode,ce),ne.return=ue,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case Y:return ce=id(ne.type,ne.key,ne.props,null,ue.mode,ce),ce.ref=Pa(ue,null,ne),ce.return=ue,ce;case ge:return ne=Sp(ne,ue.mode,ce),ne.return=ue,ne;case X:var Fe=ne._init;return Oe(ue,Fe(ne._payload),ce)}if(Qe(ne)||R(ne))return ne=Ya(ne,ue.mode,ce,null),ne.return=ue,ne;kl(ue,ne)}return null}function Pe(ue,ne,ce,Fe){var lt=ne!==null?ne.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return lt!==null?null:$(ue,ne,""+ce,Fe);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case Y:return ce.key===lt?Q(ue,ne,ce,Fe):null;case ge:return ce.key===lt?he(ue,ne,ce,Fe):null;case X:return lt=ce._init,Pe(ue,ne,lt(ce._payload),Fe)}if(Qe(ce)||R(ce))return lt!==null?null:Re(ue,ne,ce,Fe,null);kl(ue,ce)}return null}function Xe(ue,ne,ce,Fe,lt){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return ue=ue.get(ce)||null,$(ne,ue,""+Fe,lt);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case Y:return ue=ue.get(Fe.key===null?ce:Fe.key)||null,Q(ne,ue,Fe,lt);case ge:return ue=ue.get(Fe.key===null?ce:Fe.key)||null,he(ne,ue,Fe,lt);case X:var ht=Fe._init;return Xe(ue,ne,ce,ht(Fe._payload),lt)}if(Qe(Fe)||R(Fe))return ue=ue.get(ce)||null,Re(ne,ue,Fe,lt,null);kl(ne,Fe)}return null}function it(ue,ne,ce,Fe){for(var lt=null,ht=null,ft=ne,wt=ne=0,ur=null;ft!==null&&wt<ce.length;wt++){ft.index>wt?(ur=ft,ft=null):ur=ft.sibling;var Ht=Pe(ue,ft,ce[wt],Fe);if(Ht===null){ft===null&&(ft=ur);break}t&&ft&&Ht.alternate===null&&r(ue,ft),ne=v(Ht,ne,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht,ft=ur}if(wt===ce.length)return a(ue,ft),rn&&$s(ue,wt),lt;if(ft===null){for(;wt<ce.length;wt++)ft=Oe(ue,ce[wt],Fe),ft!==null&&(ne=v(ft,ne,wt),ht===null?lt=ft:ht.sibling=ft,ht=ft);return rn&&$s(ue,wt),lt}for(ft=d(ue,ft);wt<ce.length;wt++)ur=Xe(ft,ue,wt,ce[wt],Fe),ur!==null&&(t&&ur.alternate!==null&&ft.delete(ur.key===null?wt:ur.key),ne=v(ur,ne,wt),ht===null?lt=ur:ht.sibling=ur,ht=ur);return t&&ft.forEach(function(Zo){return r(ue,Zo)}),rn&&$s(ue,wt),lt}function st(ue,ne,ce,Fe){var lt=R(ce);if(typeof lt!="function")throw Error(p(150));if(ce=lt.call(ce),ce==null)throw Error(p(151));for(var ht=lt=null,ft=ne,wt=ne=0,ur=null,Ht=ce.next();ft!==null&&!Ht.done;wt++,Ht=ce.next()){ft.index>wt?(ur=ft,ft=null):ur=ft.sibling;var Zo=Pe(ue,ft,Ht.value,Fe);if(Zo===null){ft===null&&(ft=ur);break}t&&ft&&Zo.alternate===null&&r(ue,ft),ne=v(Zo,ne,wt),ht===null?lt=Zo:ht.sibling=Zo,ht=Zo,ft=ur}if(Ht.done)return a(ue,ft),rn&&$s(ue,wt),lt;if(ft===null){for(;!Ht.done;wt++,Ht=ce.next())Ht=Oe(ue,Ht.value,Fe),Ht!==null&&(ne=v(Ht,ne,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht);return rn&&$s(ue,wt),lt}for(ft=d(ue,ft);!Ht.done;wt++,Ht=ce.next())Ht=Xe(ft,ue,wt,Ht.value,Fe),Ht!==null&&(t&&Ht.alternate!==null&&ft.delete(Ht.key===null?wt:Ht.key),ne=v(Ht,ne,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht);return t&&ft.forEach(function(dg){return r(ue,dg)}),rn&&$s(ue,wt),lt}function Kn(ue,ne,ce,Fe){if(typeof ce=="object"&&ce!==null&&ce.type===le&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case Y:e:{for(var lt=ce.key,ht=ne;ht!==null;){if(ht.key===lt){if(lt=ce.type,lt===le){if(ht.tag===7){a(ue,ht.sibling),ne=f(ht,ce.props.children),ne.return=ue,ue=ne;break e}}else if(ht.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===X&&xu(lt)===ht.type){a(ue,ht.sibling),ne=f(ht,ce.props),ne.ref=Pa(ue,ht,ce),ne.return=ue,ue=ne;break e}a(ue,ht);break}else r(ue,ht);ht=ht.sibling}ce.type===le?(ne=Ya(ce.props.children,ue.mode,Fe,ce.key),ne.return=ue,ue=ne):(Fe=id(ce.type,ce.key,ce.props,null,ue.mode,Fe),Fe.ref=Pa(ue,ne,ce),Fe.return=ue,ue=Fe)}return P(ue);case ge:e:{for(ht=ce.key;ne!==null;){if(ne.key===ht)if(ne.tag===4&&ne.stateNode.containerInfo===ce.containerInfo&&ne.stateNode.implementation===ce.implementation){a(ue,ne.sibling),ne=f(ne,ce.children||[]),ne.return=ue,ue=ne;break e}else{a(ue,ne);break}else r(ue,ne);ne=ne.sibling}ne=Sp(ce,ue.mode,Fe),ne.return=ue,ue=ne}return P(ue);case X:return ht=ce._init,Kn(ue,ne,ht(ce._payload),Fe)}if(Qe(ce))return it(ue,ne,ce,Fe);if(R(ce))return st(ue,ne,ce,Fe);kl(ue,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,ne!==null&&ne.tag===6?(a(ue,ne.sibling),ne=f(ne,ce),ne.return=ue,ue=ne):(a(ue,ne),ne=kp(ce,ue.mode,Fe),ne.return=ue,ue=ne),P(ue)):a(ue,ne)}return Kn}var Cs=Ys(!0),Aa=Ys(!1),Ra=ai(null),Oo=null,Vs=null,bu=null;function Sl(){bu=Vs=Oo=null}function Hn(t){var r=Ra.current;nn(Ra),t._currentValue=r}function Mo(t,r,a){for(;t!==null;){var d=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),t===a)break;t=t.return}}function Js(t,r){Oo=t,bu=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(er=!0),t.firstContext=null)}function Fr(t){var r=t._currentValue;if(bu!==t)if(t={context:t,memoizedValue:r,next:null},Vs===null){if(Oo===null)throw Error(p(308));Vs=t,Oo.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return r}var Ts=null;function js(t){Ts===null?Ts=[t]:Ts.push(t)}function Ia(t,r,a,d){var f=r.interleaved;return f===null?(a.next=a,js(r)):(a.next=f.next,f.next=a),r.interleaved=a,Ni(t,d)}function Ni(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Qi=!1;function _l(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xs(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function ui(t,r,a){var d=t.updateQueue;if(d===null)return null;if(d=d.shared,(dt&2)!==0){var f=d.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),d.pending=r,Ni(t,a)}return f=d.interleaved,f===null?(r.next=r,js(d)):(r.next=f.next,f.next=r),d.interleaved=r,Ni(t,a)}function Oa(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var d=r.lanes;d&=t.pendingLanes,a|=d,r.lanes=a,Wi(t,a)}}function Do(t,r){var a=t.updateQueue,d=t.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var f=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var P={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?f=v=P:v=v.next=P,a=a.next}while(a!==null);v===null?f=v=r:v=v.next=r}else f=v=r;a={baseState:d.baseState,firstBaseUpdate:f,lastBaseUpdate:v,shared:d.shared,effects:d.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function Cl(t,r,a,d){var f=t.updateQueue;Qi=!1;var v=f.firstBaseUpdate,P=f.lastBaseUpdate,$=f.shared.pending;if($!==null){f.shared.pending=null;var Q=$,he=Q.next;Q.next=null,P===null?v=he:P.next=he,P=Q;var Re=t.alternate;Re!==null&&(Re=Re.updateQueue,$=Re.lastBaseUpdate,$!==P&&($===null?Re.firstBaseUpdate=he:$.next=he,Re.lastBaseUpdate=Q))}if(v!==null){var Oe=f.baseState;P=0,Re=he=Q=null,$=v;do{var Pe=$.lane,Xe=$.eventTime;if((d&Pe)===Pe){Re!==null&&(Re=Re.next={eventTime:Xe,lane:0,tag:$.tag,payload:$.payload,callback:$.callback,next:null});e:{var it=t,st=$;switch(Pe=r,Xe=a,st.tag){case 1:if(it=st.payload,typeof it=="function"){Oe=it.call(Xe,Oe,Pe);break e}Oe=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=st.payload,Pe=typeof it=="function"?it.call(Xe,Oe,Pe):it,Pe==null)break e;Oe=G({},Oe,Pe);break e;case 2:Qi=!0}}$.callback!==null&&$.lane!==0&&(t.flags|=64,Pe=f.effects,Pe===null?f.effects=[$]:Pe.push($))}else Xe={eventTime:Xe,lane:Pe,tag:$.tag,payload:$.payload,callback:$.callback,next:null},Re===null?(he=Re=Xe,Q=Oe):Re=Re.next=Xe,P|=Pe;if($=$.next,$===null){if($=f.shared.pending,$===null)break;Pe=$,$=Pe.next,Pe.next=null,f.lastBaseUpdate=Pe,f.shared.pending=null}}while(!0);if(Re===null&&(Q=Oe),f.baseState=Q,f.firstBaseUpdate=he,f.lastBaseUpdate=Re,r=f.shared.interleaved,r!==null){f=r;do P|=f.lane,f=f.next;while(f!==r)}else v===null&&(f.shared.lanes=0);kr|=P,t.lanes=P,t.memoizedState=Oe}}function Qs(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var d=t[r],f=d.callback;if(f!==null){if(d.callback=null,d=a,typeof f!="function")throw Error(p(191,f));f.call(d)}}}var zo={},ci=ai(zo),Fo=ai(zo),Zi=ai(zo);function di(t){if(t===zo)throw Error(p(174));return t}function Zs(t,r){switch(Zt(Zi,r),Zt(Fo,t),Zt(ci,zo),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ot(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=ot(r,t)}nn(ci),Zt(ci,r)}function Li(){nn(ci),nn(Fo),nn(Zi)}function wu(t){di(Zi.current);var r=di(ci.current),a=ot(r,t.type);r!==a&&(Zt(Fo,t),Zt(ci,a))}function ku(t){Fo.current===t&&(nn(ci),nn(Fo))}var ln=ai(0);function pi(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ns=[];function eo(){for(var t=0;t<Ns.length;t++)Ns[t]._workInProgressVersionPrimary=null;Ns.length=0}var Tl=q.ReactCurrentDispatcher,jl=q.ReactCurrentBatchConfig,to=0,fn=null,Bn=null,Ot=null,Ma=!1,Da=!1,za=0,cp=0;function Zn(){throw Error(p(321))}function Nl(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Cn(t[a],r[a]))return!1;return!0}function El(t,r,a,d,f,v){if(to=v,fn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Tl.current=t===null||t.memoizedState===null?pp:Iu,t=a(d,f),Da){v=0;do{if(Da=!1,za=0,25<=v)throw Error(p(301));v+=1,Ot=Bn=null,r.updateQueue=null,Tl.current=Wa,t=a(d,f)}while(Da)}if(Tl.current=Fa,r=Bn!==null&&Bn.next!==null,to=0,Ot=Bn=fn=null,Ma=!1,r)throw Error(p(300));return t}function Su(){var t=za!==0;return za=0,t}function Pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?fn.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Jr(){if(Bn===null){var t=fn.alternate;t=t!==null?t.memoizedState:null}else t=Bn.next;var r=Ot===null?fn.memoizedState:Ot.next;if(r!==null)Ot=r,Bn=t;else{if(t===null)throw Error(p(310));Bn=t,t={memoizedState:Bn.memoizedState,baseState:Bn.baseState,baseQueue:Bn.baseQueue,queue:Bn.queue,next:null},Ot===null?fn.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Xr(t,r){return typeof r=="function"?r(t):r}function no(t){var r=Jr(),a=r.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=t;var d=Bn,f=d.baseQueue,v=a.pending;if(v!==null){if(f!==null){var P=f.next;f.next=v.next,v.next=P}d.baseQueue=f=v,a.pending=null}if(f!==null){v=f.next,d=d.baseState;var $=P=null,Q=null,he=v;do{var Re=he.lane;if((to&Re)===Re)Q!==null&&(Q=Q.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),d=he.hasEagerState?he.eagerState:t(d,he.action);else{var Oe={lane:Re,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};Q===null?($=Q=Oe,P=d):Q=Q.next=Oe,fn.lanes|=Re,kr|=Re}he=he.next}while(he!==null&&he!==v);Q===null?P=d:Q.next=$,Cn(d,r.memoizedState)||(er=!0),r.memoizedState=d,r.baseState=P,r.baseQueue=Q,a.lastRenderedState=d}if(t=a.interleaved,t!==null){f=t;do v=f.lane,fn.lanes|=v,kr|=v,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Wo(t){var r=Jr(),a=r.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=t;var d=a.dispatch,f=a.pending,v=r.memoizedState;if(f!==null){a.pending=null;var P=f=f.next;do v=t(v,P.action),P=P.next;while(P!==f);Cn(v,r.memoizedState)||(er=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),a.lastRenderedState=v}return[v,d]}function Ho(){}function Ai(t,r){var a=fn,d=Jr(),f=r(),v=!Cn(d.memoizedState,f);if(v&&(d.memoizedState=f,er=!0),d=d.queue,ju(ro.bind(null,a,d,t),[t]),d.getSnapshot!==r||v||Ot!==null&&Ot.memoizedState.tag&1){if(a.flags|=2048,Es(9,Mc.bind(null,a,d,f,r),void 0,null),zt===null)throw Error(p(349));(to&30)!==0||Oc(a,r,f)}return f}function Oc(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=fn.updateQueue,r===null?(r={lastEffect:null,stores:null},fn.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Mc(t,r,a,d){r.value=a,r.getSnapshot=d,_u(r)&&Cu(t)}function ro(t,r,a){return a(function(){_u(r)&&Cu(t)})}function _u(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Cn(t,a)}catch{return!0}}function Cu(t){var r=Ni(t,1);r!==null&&ts(r,t,1,-1)}function Tu(t){var r=Pi();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:t},r.queue=t,t=t.dispatch=Pu.bind(null,fn,t),[r.memoizedState,t]}function Es(t,r,a,d){return t={tag:t,create:r,destroy:a,deps:d,next:null},r=fn.updateQueue,r===null?(r={lastEffect:null,stores:null},fn.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(d=a.next,a.next=t,t.next=d,r.lastEffect=t)),t}function io(){return Jr().memoizedState}function Bo(t,r,a,d){var f=Pi();fn.flags|=t,f.memoizedState=Es(1|r,a,void 0,d===void 0?null:d)}function Uo(t,r,a,d){var f=Jr();d=d===void 0?null:d;var v=void 0;if(Bn!==null){var P=Bn.memoizedState;if(v=P.destroy,d!==null&&Nl(d,P.deps)){f.memoizedState=Es(r,a,v,d);return}}fn.flags|=t,f.memoizedState=Es(1|r,a,v,d)}function Ll(t,r){return Bo(8390656,8,t,r)}function ju(t,r){return Uo(2048,8,t,r)}function qo(t,r){return Uo(4,2,t,r)}function Nu(t,r){return Uo(4,4,t,r)}function Dc(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Eu(t,r,a){return a=a!=null?a.concat([t]):null,Uo(4,4,Dc.bind(null,r,t),a)}function Ko(){}function zc(t,r){var a=Jr();r=r===void 0?null:r;var d=a.memoizedState;return d!==null&&r!==null&&Nl(r,d[1])?d[0]:(a.memoizedState=[t,r],t)}function Fc(t,r){var a=Jr();r=r===void 0?null:r;var d=a.memoizedState;return d!==null&&r!==null&&Nl(r,d[1])?d[0]:(t=t(),a.memoizedState=[t,r],t)}function $o(t,r,a){return(to&21)===0?(t.baseState&&(t.baseState=!1,er=!0),t.memoizedState=a):(Cn(a,r)||(a=sa(),fn.lanes|=a,kr|=a,t.baseState=!0),r)}function Wc(t,r){var a=Nt;Nt=a!==0&&4>a?a:4,t(!0);var d=jl.transition;jl.transition={};try{t(!1),r()}finally{Nt=a,jl.transition=d}}function Lu(){return Jr().memoizedState}function dp(t,r,a){var d=Jo(t);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},Au(t))Hc(r,a);else if(a=Ia(t,r,a,d),a!==null){var f=Wr();ts(a,t,d,f),Ru(a,r,d)}}function Pu(t,r,a){var d=Jo(t),f={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(Au(t))Hc(r,f);else{var v=t.alternate;if(t.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var P=r.lastRenderedState,$=v(P,a);if(f.hasEagerState=!0,f.eagerState=$,Cn($,P)){var Q=r.interleaved;Q===null?(f.next=f,js(r)):(f.next=Q.next,Q.next=f),r.interleaved=f;return}}catch{}finally{}a=Ia(t,r,f,d),a!==null&&(f=Wr(),ts(a,t,d,f),Ru(a,r,d))}}function Au(t){var r=t.alternate;return t===fn||r!==null&&r===fn}function Hc(t,r){Da=Ma=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function Ru(t,r,a){if((a&4194240)!==0){var d=r.lanes;d&=t.pendingLanes,a|=d,r.lanes=a,Wi(t,a)}}var Fa={readContext:Fr,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useInsertionEffect:Zn,useLayoutEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useMutableSource:Zn,useSyncExternalStore:Zn,useId:Zn,unstable_isNewReconciler:!1},pp={readContext:Fr,useCallback:function(t,r){return Pi().memoizedState=[t,r===void 0?null:r],t},useContext:Fr,useEffect:Ll,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Bo(4194308,4,Dc.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Bo(4194308,4,t,r)},useInsertionEffect:function(t,r){return Bo(4,2,t,r)},useMemo:function(t,r){var a=Pi();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var d=Pi();return r=a!==void 0?a(r):r,d.memoizedState=d.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},d.queue=t,t=t.dispatch=dp.bind(null,fn,t),[d.memoizedState,t]},useRef:function(t){var r=Pi();return t={current:t},r.memoizedState=t},useState:Tu,useDebugValue:Ko,useDeferredValue:function(t){return Pi().memoizedState=t},useTransition:function(){var t=Tu(!1),r=t[0];return t=Wc.bind(null,t[1]),Pi().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var d=fn,f=Pi();if(rn){if(a===void 0)throw Error(p(407));a=a()}else{if(a=r(),zt===null)throw Error(p(349));(to&30)!==0||Oc(d,r,a)}f.memoizedState=a;var v={value:a,getSnapshot:r};return f.queue=v,Ll(ro.bind(null,d,v,t),[t]),d.flags|=2048,Es(9,Mc.bind(null,d,v,a,r),void 0,null),a},useId:function(){var t=Pi(),r=zt.identifierPrefix;if(rn){var a=ji,d=li;a=(d&~(1<<32-fe(d)-1)).toString(32)+a,r=":"+r+"R"+a,a=za++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=cp++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Iu={readContext:Fr,useCallback:zc,useContext:Fr,useEffect:ju,useImperativeHandle:Eu,useInsertionEffect:qo,useLayoutEffect:Nu,useMemo:Fc,useReducer:no,useRef:io,useState:function(){return no(Xr)},useDebugValue:Ko,useDeferredValue:function(t){var r=Jr();return $o(r,Bn.memoizedState,t)},useTransition:function(){var t=no(Xr)[0],r=Jr().memoizedState;return[t,r]},useMutableSource:Ho,useSyncExternalStore:Ai,useId:Lu,unstable_isNewReconciler:!1},Wa={readContext:Fr,useCallback:zc,useContext:Fr,useEffect:ju,useImperativeHandle:Eu,useInsertionEffect:qo,useLayoutEffect:Nu,useMemo:Fc,useReducer:Wo,useRef:io,useState:function(){return Wo(Xr)},useDebugValue:Ko,useDeferredValue:function(t){var r=Jr();return Bn===null?r.memoizedState=t:$o(r,Bn.memoizedState,t)},useTransition:function(){var t=Wo(Xr)[0],r=Jr().memoizedState;return[t,r]},useMutableSource:Ho,useSyncExternalStore:Ai,useId:Lu,unstable_isNewReconciler:!1};function yr(t,r){if(t&&t.defaultProps){r=G({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function Ou(t,r,a,d){r=t.memoizedState,a=a(d,r),a=a==null?r:G({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ha={isMounted:function(t){return(t=t._reactInternals)?Mn(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var d=Wr(),f=Jo(t),v=Ei(d,f);v.payload=r,a!=null&&(v.callback=a),r=ui(t,v,f),r!==null&&(ts(r,t,f,d),Oa(r,t,f))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var d=Wr(),f=Jo(t),v=Ei(d,f);v.tag=1,v.payload=r,a!=null&&(v.callback=a),r=ui(t,v,f),r!==null&&(ts(r,t,f,d),Oa(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Wr(),d=Jo(t),f=Ei(a,d);f.tag=2,r!=null&&(f.callback=r),r=ui(t,f,d),r!==null&&(ts(r,t,d,a),Oa(r,t,d))}};function Bc(t,r,a,d,f,v,P){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(d,v,P):r.prototype&&r.prototype.isPureReactComponent?!So(a,d)||!So(f,v):!0}function Uc(t,r,a){var d=!1,f=ks,v=r.contextType;return typeof v=="object"&&v!==null?v=Fr(v):(f=or(r)?Xi:Jn.current,d=r.contextTypes,v=(d=d!=null)?Eo(t,f):ks),r=new r(a,v),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ha,t.stateNode=r,r._reactInternals=t,d&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=v),r}function qc(t,r,a,d){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,d),r.state!==t&&Ha.enqueueReplaceState(r,r.state,null)}function Mu(t,r,a,d){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},_l(t);var v=r.contextType;typeof v=="object"&&v!==null?f.context=Fr(v):(v=or(r)?Xi:Jn.current,f.context=Eo(t,v)),f.state=t.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Ou(t,r,v,a),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&Ha.enqueueReplaceState(f,f.state,null),Cl(t,a,f,d),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function so(t,r){try{var a="",d=r;do a+=qe(d),d=d.return;while(d);var f=a}catch(v){f=`
Error generating stack: `+v.message+`
`+v.stack}return{value:t,source:r,stack:f,digest:null}}function Du(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function zu(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Kc=typeof WeakMap=="function"?WeakMap:Map;function Pl(t,r,a){a=Ei(-1,a),a.tag=3,a.payload={element:null};var d=r.value;return a.callback=function(){Qc||(Qc=!0,fp=d),zu(t,r)},a}function Fu(t,r,a){a=Ei(-1,a),a.tag=3;var d=t.type.getDerivedStateFromError;if(typeof d=="function"){var f=r.value;a.payload=function(){return d(f)},a.callback=function(){zu(t,r)}}var v=t.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){zu(t,r),typeof d!="function"&&(Yo===null?Yo=new Set([this]):Yo.add(this));var P=r.stack;this.componentDidCatch(r.value,{componentStack:P!==null?P:""})}),a}function $c(t,r,a){var d=t.pingCache;if(d===null){d=t.pingCache=new Kc;var f=new Set;d.set(r,f)}else f=d.get(r),f===void 0&&(f=new Set,d.set(r,f));f.has(a)||(f.add(a),t=eg.bind(null,t,r,a),r.then(t,t))}function Wu(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function oo(t,r,a,d,f){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Ei(-1,1),r.tag=2,ui(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Gc=q.ReactCurrentOwner,er=!1;function vr(t,r,a,d){r.child=t===null?Aa(r,null,a,d):Cs(r,t.child,a,d)}function Yc(t,r,a,d,f){a=a.render;var v=r.ref;return Js(r,f),d=El(t,r,a,d,v,f),a=Su(),t!==null&&!er?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Pr(t,r,f)):(rn&&a&&Gs(r),r.flags|=1,vr(t,r,d,f),r.child)}function Vc(t,r,a,d,f){if(t===null){var v=a.type;return typeof v=="function"&&!wp(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=v,en(t,r,v,d,f)):(t=id(a.type,null,d,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(v=t.child,(t.lanes&f)===0){var P=v.memoizedProps;if(a=a.compare,a=a!==null?a:So,a(P,d)&&t.ref===r.ref)return Pr(t,r,f)}return r.flags|=1,t=Qo(v,d),t.ref=r.ref,t.return=r,r.child=t}function en(t,r,a,d,f){if(t!==null){var v=t.memoizedProps;if(So(v,d)&&t.ref===r.ref)if(er=!1,r.pendingProps=d=v,(t.lanes&f)!==0)(t.flags&131072)!==0&&(er=!0);else return r.lanes=t.lanes,Pr(t,r,f)}return ao(t,r,a,d,f)}function Jc(t,r,a){var d=r.pendingProps,f=d.children,v=t!==null?t.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(wr,Ut),Ut|=a;else{if((a&1073741824)===0)return t=v!==null?v.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Zt(wr,Ut),Ut|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=v!==null?v.baseLanes:a,Zt(wr,Ut),Ut|=d}else v!==null?(d=v.baseLanes|a,r.memoizedState=null):d=a,Zt(wr,Ut),Ut|=d;return vr(t,r,f,a),r.child}function Al(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function ao(t,r,a,d,f){var v=or(a)?Xi:Jn.current;return v=Eo(r,v),Js(r,f),a=El(t,r,a,d,v,f),d=Su(),t!==null&&!er?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Pr(t,r,f)):(rn&&d&&Gs(r),r.flags|=1,vr(t,r,a,f),r.child)}function Qr(t,r,a,d,f){if(or(a)){var v=!0;Po(r)}else v=!1;if(Js(r,f),r.stateNode===null)Fl(t,r),Uc(r,a,d),Mu(r,a,d,f),d=!0;else if(t===null){var P=r.stateNode,$=r.memoizedProps;P.props=$;var Q=P.context,he=a.contextType;typeof he=="object"&&he!==null?he=Fr(he):(he=or(a)?Xi:Jn.current,he=Eo(r,he));var Re=a.getDerivedStateFromProps,Oe=typeof Re=="function"||typeof P.getSnapshotBeforeUpdate=="function";Oe||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||($!==d||Q!==he)&&qc(r,P,d,he),Qi=!1;var Pe=r.memoizedState;P.state=Pe,Cl(r,d,P,f),Q=r.memoizedState,$!==d||Pe!==Q||mr.current||Qi?(typeof Re=="function"&&(Ou(r,a,Re,d),Q=r.memoizedState),($=Qi||Bc(r,a,$,d,Pe,Q,he))?(Oe||typeof P.UNSAFE_componentWillMount!="function"&&typeof P.componentWillMount!="function"||(typeof P.componentWillMount=="function"&&P.componentWillMount(),typeof P.UNSAFE_componentWillMount=="function"&&P.UNSAFE_componentWillMount()),typeof P.componentDidMount=="function"&&(r.flags|=4194308)):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=Q),P.props=d,P.state=Q,P.context=he,d=$):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{P=r.stateNode,Xs(t,r),$=r.memoizedProps,he=r.type===r.elementType?$:yr(r.type,$),P.props=he,Oe=r.pendingProps,Pe=P.context,Q=a.contextType,typeof Q=="object"&&Q!==null?Q=Fr(Q):(Q=or(a)?Xi:Jn.current,Q=Eo(r,Q));var Xe=a.getDerivedStateFromProps;(Re=typeof Xe=="function"||typeof P.getSnapshotBeforeUpdate=="function")||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||($!==Oe||Pe!==Q)&&qc(r,P,d,Q),Qi=!1,Pe=r.memoizedState,P.state=Pe,Cl(r,d,P,f);var it=r.memoizedState;$!==Oe||Pe!==it||mr.current||Qi?(typeof Xe=="function"&&(Ou(r,a,Xe,d),it=r.memoizedState),(he=Qi||Bc(r,a,he,d,Pe,it,Q)||!1)?(Re||typeof P.UNSAFE_componentWillUpdate!="function"&&typeof P.componentWillUpdate!="function"||(typeof P.componentWillUpdate=="function"&&P.componentWillUpdate(d,it,Q),typeof P.UNSAFE_componentWillUpdate=="function"&&P.UNSAFE_componentWillUpdate(d,it,Q)),typeof P.componentDidUpdate=="function"&&(r.flags|=4),typeof P.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof P.componentDidUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=it),P.props=d,P.state=it,P.context=Q,d=he):(typeof P.componentDidUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=1024),d=!1)}return Go(t,r,a,d,v,f)}function Go(t,r,a,d,f,v){Al(t,r);var P=(r.flags&128)!==0;if(!d&&!P)return f&&vu(r,a,!1),Pr(t,r,v);d=r.stateNode,Gc.current=r;var $=P&&typeof a.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,t!==null&&P?(r.child=Cs(r,t.child,null,v),r.child=Cs(r,null,$,v)):vr(t,r,$,v),r.memoizedState=d.state,f&&vu(r,a,!0),r.child}function Rl(t){var r=t.stateNode;r.pendingContext?gu(t,r.pendingContext,r.pendingContext!==r.context):r.context&&gu(t,r.context,!1),Zs(t,r.containerInfo)}function Hu(t,r,a,d,f){return Ro(),Io(f),r.flags|=256,vr(t,r,a,d),r.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Ol(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ml(t,r,a){var d=r.pendingProps,f=ln.current,v=!1,P=(r.flags&128)!==0,$;if(($=P)||($=t!==null&&t.memoizedState===null?!1:(f&2)!==0),$?(v=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Zt(ln,f&1),t===null)return wl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(P=d.children,t=d.fallback,v?(d=r.mode,v=r.child,P={mode:"hidden",children:P},(d&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=P):v=sd(P,d,0,null),t=Ya(t,d,a,null),v.return=r,t.return=r,v.sibling=t,r.child=v,r.child.memoizedState=Ol(a),r.memoizedState=Il,t):Dl(r,P));if(f=t.memoizedState,f!==null&&($=f.dehydrated,$!==null))return Bu(t,r,P,d,$,f,a);if(v){v=d.fallback,P=r.mode,f=t.child,$=f.sibling;var Q={mode:"hidden",children:d.children};return(P&1)===0&&r.child!==f?(d=r.child,d.childLanes=0,d.pendingProps=Q,r.deletions=null):(d=Qo(f,Q),d.subtreeFlags=f.subtreeFlags&14680064),$!==null?v=Qo($,v):(v=Ya(v,P,a,null),v.flags|=2),v.return=r,d.return=r,d.sibling=v,r.child=d,d=v,v=r.child,P=t.child.memoizedState,P=P===null?Ol(a):{baseLanes:P.baseLanes|a,cachePool:null,transitions:P.transitions},v.memoizedState=P,v.childLanes=t.childLanes&~a,r.memoizedState=Il,d}return v=t.child,t=v.sibling,d=Qo(v,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=a),d.return=r,d.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=d,r.memoizedState=null,d}function Dl(t,r){return r=sd({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function zl(t,r,a,d){return d!==null&&Io(d),Cs(r,t.child,null,a),t=Dl(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Bu(t,r,a,d,f,v,P){if(a)return r.flags&256?(r.flags&=-257,d=Du(Error(p(422))),zl(t,r,P,d)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(v=d.fallback,f=r.mode,d=sd({mode:"visible",children:d.children},f,0,null),v=Ya(v,f,P,null),v.flags|=2,d.return=r,v.return=r,d.sibling=v,r.child=d,(r.mode&1)!==0&&Cs(r,t.child,null,P),r.child.memoizedState=Ol(P),r.memoizedState=Il,v);if((r.mode&1)===0)return zl(t,r,P,null);if(f.data==="$!"){if(d=f.nextSibling&&f.nextSibling.dataset,d)var $=d.dgst;return d=$,v=Error(p(419)),d=Du(v,d,void 0),zl(t,r,P,d)}if($=(P&t.childLanes)!==0,er||$){if(d=zt,d!==null){switch(P&-P){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(d.suspendedLanes|P))!==0?0:f,f!==0&&f!==v.retryLane&&(v.retryLane=f,Ni(t,f),ts(d,t,f,-1))}return bp(),d=Du(Error(p(421))),zl(t,r,P,d)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=tg.bind(null,t),f._reactRetry=r,null):(t=v.treeContext,An=bs(f.nextSibling),gr=r,rn=!0,Vr=null,t!==null&&(Fn[Wn++]=li,Fn[Wn++]=ji,Fn[Wn++]=_s,li=t.id,ji=t.overflow,_s=r),r=Dl(r,d.children),r.flags|=4096,r)}function Uu(t,r,a){t.lanes|=r;var d=t.alternate;d!==null&&(d.lanes|=r),Mo(t.return,r,a)}function Mt(t,r,a,d,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:f}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=d,v.tail=a,v.tailMode=f)}function qu(t,r,a){var d=r.pendingProps,f=d.revealOrder,v=d.tail;if(vr(t,r,d.children,a),d=ln.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uu(t,a,r);else if(t.tag===19)Uu(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}d&=1}if(Zt(ln,d),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(a=r.child,f=null;a!==null;)t=a.alternate,t!==null&&pi(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),Mt(r,!1,f,a,v);break;case"backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&pi(t)===null){r.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Mt(r,!0,a,null,v);break;case"together":Mt(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Fl(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Pr(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),kr|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(p(153));if(r.child!==null){for(t=r.child,a=Qo(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Qo(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function hp(t,r,a){switch(r.tag){case 3:Rl(r),Ro();break;case 5:wu(r);break;case 1:or(r.type)&&Po(r);break;case 4:Zs(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,f=r.memoizedProps.value;Zt(Ra,d._currentValue),d._currentValue=f;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Zt(ln,ln.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Ml(t,r,a):(Zt(ln,ln.current&1),t=Pr(t,r,a),t!==null?t.sibling:null);Zt(ln,ln.current&1);break;case 19:if(d=(a&r.childLanes)!==0,(t.flags&128)!==0){if(d)return qu(t,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Zt(ln,ln.current),d)break;return null;case 22:case 23:return r.lanes=0,Jc(t,r,a)}return Pr(t,r,a)}var Ba,Ku,mn,Xc;Ba=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ku=function(){},mn=function(t,r,a,d){var f=t.memoizedProps;if(f!==d){t=r.stateNode,di(ci.current);var v=null;switch(a){case"input":f=Ct(t,f),d=Ct(t,d),v=[];break;case"select":f=G({},f,{value:void 0}),d=G({},d,{value:void 0}),v=[];break;case"textarea":f=ie(t,f),d=ie(t,d),v=[];break;default:typeof f.onClick!="function"&&typeof d.onClick=="function"&&(t.onclick=xs)}Ur(a,d);var P;a=null;for(he in f)if(!d.hasOwnProperty(he)&&f.hasOwnProperty(he)&&f[he]!=null)if(he==="style"){var $=f[he];for(P in $)$.hasOwnProperty(P)&&(a||(a={}),a[P]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(y.hasOwnProperty(he)?v||(v=[]):(v=v||[]).push(he,null));for(he in d){var Q=d[he];if($=f!=null?f[he]:void 0,d.hasOwnProperty(he)&&Q!==$&&(Q!=null||$!=null))if(he==="style")if($){for(P in $)!$.hasOwnProperty(P)||Q&&Q.hasOwnProperty(P)||(a||(a={}),a[P]="");for(P in Q)Q.hasOwnProperty(P)&&$[P]!==Q[P]&&(a||(a={}),a[P]=Q[P])}else a||(v||(v=[]),v.push(he,a)),a=Q;else he==="dangerouslySetInnerHTML"?(Q=Q?Q.__html:void 0,$=$?$.__html:void 0,Q!=null&&$!==Q&&(v=v||[]).push(he,Q)):he==="children"?typeof Q!="string"&&typeof Q!="number"||(v=v||[]).push(he,""+Q):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(y.hasOwnProperty(he)?(Q!=null&&he==="onScroll"&&Wt("scroll",t),v||$===Q||(v=[])):(v=v||[]).push(he,Q))}a&&(v=v||[]).push("style",a);var he=v;(r.updateQueue=he)&&(r.flags|=4)}},Xc=function(t,r,a,d){a!==d&&(r.flags|=4)};function Ua(t,r){if(!rn)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:d.sibling=null}}function ar(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,d=0;if(r)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags&14680064,d|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags,d|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=d,t.childLanes=a,r}function Wl(t,r,a){var d=r.pendingProps;switch(bl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ar(r),null;case 1:return or(r.type)&&Lo(),ar(r),null;case 3:return d=r.stateNode,Li(),nn(mr),nn(Jn),eo(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(t===null||t.child===null)&&(La(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vr!==null&&(yp(Vr),Vr=null))),Ku(t,r),ar(r),null;case 5:ku(r);var f=di(Zi.current);if(a=r.type,t!==null&&r.stateNode!=null)mn(t,r,a,d,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(p(166));return ar(r),null}if(t=di(ci.current),La(r)){d=r.stateNode,a=r.type;var v=r.memoizedProps;switch(d[Ci]=r,d[ja]=v,t=(r.mode&1)!==0,a){case"dialog":Wt("cancel",d),Wt("close",d);break;case"iframe":case"object":case"embed":Wt("load",d);break;case"video":case"audio":for(f=0;f<Ws.length;f++)Wt(Ws[f],d);break;case"source":Wt("error",d);break;case"img":case"image":case"link":Wt("error",d),Wt("load",d);break;case"details":Wt("toggle",d);break;case"input":xt(d,v),Wt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!v.multiple},Wt("invalid",d);break;case"textarea":je(d,v),Wt("invalid",d)}Ur(a,v),f=null;for(var P in v)if(v.hasOwnProperty(P)){var $=v[P];P==="children"?typeof $=="string"?d.textContent!==$&&(v.suppressHydrationWarning!==!0&&Ca(d.textContent,$,t),f=["children",$]):typeof $=="number"&&d.textContent!==""+$&&(v.suppressHydrationWarning!==!0&&Ca(d.textContent,$,t),f=["children",""+$]):y.hasOwnProperty(P)&&$!=null&&P==="onScroll"&&Wt("scroll",d)}switch(a){case"input":$e(d),vt(d,v,!0);break;case"textarea":$e(d),kt(d);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(d.onclick=xs)}d=f,r.updateQueue=d,d!==null&&(r.flags|=4)}else{P=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ye(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=P.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof d.is=="string"?t=P.createElement(a,{is:d.is}):(t=P.createElement(a),a==="select"&&(P=t,d.multiple?P.multiple=!0:d.size&&(P.size=d.size))):t=P.createElementNS(t,a),t[Ci]=r,t[ja]=d,Ba(t,r,!1,!1),r.stateNode=t;e:{switch(P=bt(a,d),a){case"dialog":Wt("cancel",t),Wt("close",t),f=d;break;case"iframe":case"object":case"embed":Wt("load",t),f=d;break;case"video":case"audio":for(f=0;f<Ws.length;f++)Wt(Ws[f],t);f=d;break;case"source":Wt("error",t),f=d;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),f=d;break;case"details":Wt("toggle",t),f=d;break;case"input":xt(t,d),f=Ct(t,d),Wt("invalid",t);break;case"option":f=d;break;case"select":t._wrapperState={wasMultiple:!!d.multiple},f=G({},d,{value:void 0}),Wt("invalid",t);break;case"textarea":je(t,d),f=ie(t,d),Wt("invalid",t);break;default:f=d}Ur(a,f),$=f;for(v in $)if($.hasOwnProperty(v)){var Q=$[v];v==="style"?Rr(t,Q):v==="dangerouslySetInnerHTML"?(Q=Q?Q.__html:void 0,Q!=null&&mt(t,Q)):v==="children"?typeof Q=="string"?(a!=="textarea"||Q!=="")&&pt(t,Q):typeof Q=="number"&&pt(t,""+Q):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(y.hasOwnProperty(v)?Q!=null&&v==="onScroll"&&Wt("scroll",t):Q!=null&&F(t,v,Q,P))}switch(a){case"input":$e(t),vt(t,d,!1);break;case"textarea":$e(t),kt(t);break;case"option":d.value!=null&&t.setAttribute("value",""+Be(d.value));break;case"select":t.multiple=!!d.multiple,v=d.value,v!=null?ut(t,!!d.multiple,v,!1):d.defaultValue!=null&&ut(t,!!d.multiple,d.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=xs)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return ar(r),null;case 6:if(t&&r.stateNode!=null)Xc(t,r,t.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(p(166));if(a=di(Zi.current),di(ci.current),La(r)){if(d=r.stateNode,a=r.memoizedProps,d[Ci]=r,(v=d.nodeValue!==a)&&(t=gr,t!==null))switch(t.tag){case 3:Ca(d.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ca(d.nodeValue,a,(t.mode&1)!==0)}v&&(r.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[Ci]=r,r.stateNode=d}return ar(r),null;case 13:if(nn(ln),d=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rn&&An!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Rc(),Ro(),r.flags|=98560,v=!1;else if(v=La(r),d!==null&&d.dehydrated!==null){if(t===null){if(!v)throw Error(p(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(p(317));v[Ci]=r}else Ro(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;ar(r),v=!1}else Vr!==null&&(yp(Vr),Vr=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(d=d!==null,d!==(t!==null&&t.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(ln.current&1)!==0?Lt===0&&(Lt=3):bp())),r.updateQueue!==null&&(r.flags|=4),ar(r),null);case 4:return Li(),Ku(t,r),t===null&&ys(r.stateNode.containerInfo),ar(r),null;case 10:return Hn(r.type._context),ar(r),null;case 17:return or(r.type)&&Lo(),ar(r),null;case 19:if(nn(ln),v=r.memoizedState,v===null)return ar(r),null;if(d=(r.flags&128)!==0,P=v.rendering,P===null)if(d)Ua(v,!1);else{if(Lt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(P=pi(t),P!==null){for(r.flags|=128,Ua(v,!1),d=P.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=a,a=r.child;a!==null;)v=a,t=d,v.flags&=14680066,P=v.alternate,P===null?(v.childLanes=0,v.lanes=t,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=P.childLanes,v.lanes=P.lanes,v.child=P.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=P.memoizedProps,v.memoizedState=P.memoizedState,v.updateQueue=P.updateQueue,v.type=P.type,t=P.dependencies,v.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Zt(ln,ln.current&1|2),r.child}t=t.sibling}v.tail!==null&&Rt()>Hl&&(r.flags|=128,d=!0,Ua(v,!1),r.lanes=4194304)}else{if(!d)if(t=pi(P),t!==null){if(r.flags|=128,d=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Ua(v,!0),v.tail===null&&v.tailMode==="hidden"&&!P.alternate&&!rn)return ar(r),null}else 2*Rt()-v.renderingStartTime>Hl&&a!==1073741824&&(r.flags|=128,d=!0,Ua(v,!1),r.lanes=4194304);v.isBackwards?(P.sibling=r.child,r.child=P):(a=v.last,a!==null?a.sibling=P:r.child=P,v.last=P)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=Rt(),r.sibling=null,a=ln.current,Zt(ln,d?a&1|2:a&1),r):(ar(r),null);case 22:case 23:return xp(),d=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(Ut&1073741824)!==0&&(ar(r),r.subtreeFlags&6&&(r.flags|=8192)):ar(r),null;case 24:return null;case 25:return null}throw Error(p(156,r.tag))}function e(t,r){switch(bl(r),r.tag){case 1:return or(r.type)&&Lo(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Li(),nn(mr),nn(Jn),eo(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return ku(r),null;case 13:if(nn(ln),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(p(340));Ro()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return nn(ln),null;case 4:return Li(),null;case 10:return Hn(r.type._context),null;case 22:case 23:return xp(),null;case 24:return null;default:return null}}var n=!1,s=!1,i=typeof WeakSet=="function"?WeakSet:Set,o=null;function h(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){In(t,r,d)}else a.current=null}function m(t,r,a){try{a()}catch(d){In(t,r,d)}}var x=!1;function w(t,r){if(gl=te,t=pu(),ya(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var f=d.anchorOffset,v=d.focusNode;d=d.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var P=0,$=-1,Q=-1,he=0,Re=0,Oe=t,Pe=null;t:for(;;){for(var Xe;Oe!==a||f!==0&&Oe.nodeType!==3||($=P+f),Oe!==v||d!==0&&Oe.nodeType!==3||(Q=P+d),Oe.nodeType===3&&(P+=Oe.nodeValue.length),(Xe=Oe.firstChild)!==null;)Pe=Oe,Oe=Xe;for(;;){if(Oe===t)break t;if(Pe===a&&++he===f&&($=P),Pe===v&&++Re===d&&(Q=P),(Xe=Oe.nextSibling)!==null)break;Oe=Pe,Pe=Oe.parentNode}Oe=Xe}a=$===-1||Q===-1?null:{start:$,end:Q}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yi={focusedElem:t,selectionRange:a},te=!1,o=r;o!==null;)if(r=o,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,o=t;else for(;o!==null;){r=o;try{var it=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var st=it.memoizedProps,Kn=it.memoizedState,ue=r.stateNode,ne=ue.getSnapshotBeforeUpdate(r.elementType===r.type?st:yr(r.type,st),Kn);ue.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(Fe){In(r,r.return,Fe)}if(t=r.sibling,t!==null){t.return=r.return,o=t;break}o=r.return}return it=x,x=!1,it}function S(t,r,a){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var f=d=d.next;do{if((f.tag&t)===t){var v=f.destroy;f.destroy=void 0,v!==void 0&&m(r,a,v)}f=f.next}while(f!==d)}}function z(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var d=a.create;a.destroy=d()}a=a.next}while(a!==r)}}function U(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function re(t){var r=t.alternate;r!==null&&(t.alternate=null,re(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ci],delete r[ja],delete r[mu],delete r[lp],delete r[up])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ee(t){return t.tag===5||t.tag===3||t.tag===4}function me(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ee(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xe(t,r,a){var d=t.tag;if(d===5||d===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=xs));else if(d!==4&&(t=t.child,t!==null))for(xe(t,r,a),t=t.sibling;t!==null;)xe(t,r,a),t=t.sibling}function Ae(t,r,a){var d=t.tag;if(d===5||d===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(d!==4&&(t=t.child,t!==null))for(Ae(t,r,a),t=t.sibling;t!==null;)Ae(t,r,a),t=t.sibling}var Ee=null,ze=!1;function Me(t,r,a){for(a=a.child;a!==null;)Ge(t,r,a),a=a.sibling}function Ge(t,r,a){if(T&&typeof T.onCommitFiberUnmount=="function")try{T.onCommitFiberUnmount(Yn,a)}catch{}switch(a.tag){case 5:s||h(a,r);case 6:var d=Ee,f=ze;Ee=null,Me(t,r,a),Ee=d,ze=f,Ee!==null&&(ze?(t=Ee,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Ee.removeChild(a.stateNode));break;case 18:Ee!==null&&(ze?(t=Ee,a=a.stateNode,t.nodeType===8?yl(t.parentNode,a):t.nodeType===1&&yl(t,a),_e(t)):yl(Ee,a.stateNode));break;case 4:d=Ee,f=ze,Ee=a.stateNode.containerInfo,ze=!0,Me(t,r,a),Ee=d,ze=f;break;case 0:case 11:case 14:case 15:if(!s&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){f=d=d.next;do{var v=f,P=v.destroy;v=v.tag,P!==void 0&&((v&2)!==0||(v&4)!==0)&&m(a,r,P),f=f.next}while(f!==d)}Me(t,r,a);break;case 1:if(!s&&(h(a,r),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch($){In(a,r,$)}Me(t,r,a);break;case 21:Me(t,r,a);break;case 22:a.mode&1?(s=(d=s)||a.memoizedState!==null,Me(t,r,a),s=d):Me(t,r,a);break;default:Me(t,r,a)}}function at(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new i),r.forEach(function(d){var f=ng.bind(null,t,d);a.has(d)||(a.add(d),d.then(f,f))})}}function Ve(t,r){var a=r.deletions;if(a!==null)for(var d=0;d<a.length;d++){var f=a[d];try{var v=t,P=r,$=P;e:for(;$!==null;){switch($.tag){case 5:Ee=$.stateNode,ze=!1;break e;case 3:Ee=$.stateNode.containerInfo,ze=!0;break e;case 4:Ee=$.stateNode.containerInfo,ze=!0;break e}$=$.return}if(Ee===null)throw Error(p(160));Ge(v,P,f),Ee=null,ze=!1;var Q=f.alternate;Q!==null&&(Q.return=null),f.return=null}catch(he){In(f,r,he)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)St(r,t),r=r.sibling}function St(t,r){var a=t.alternate,d=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ve(r,t),Et(t),d&4){try{S(3,t,t.return),z(3,t)}catch(st){In(t,t.return,st)}try{S(5,t,t.return)}catch(st){In(t,t.return,st)}}break;case 1:Ve(r,t),Et(t),d&512&&a!==null&&h(a,a.return);break;case 5:if(Ve(r,t),Et(t),d&512&&a!==null&&h(a,a.return),t.flags&32){var f=t.stateNode;try{pt(f,"")}catch(st){In(t,t.return,st)}}if(d&4&&(f=t.stateNode,f!=null)){var v=t.memoizedProps,P=a!==null?a.memoizedProps:v,$=t.type,Q=t.updateQueue;if(t.updateQueue=null,Q!==null)try{$==="input"&&v.type==="radio"&&v.name!=null&&tt(f,v),bt($,P);var he=bt($,v);for(P=0;P<Q.length;P+=2){var Re=Q[P],Oe=Q[P+1];Re==="style"?Rr(f,Oe):Re==="dangerouslySetInnerHTML"?mt(f,Oe):Re==="children"?pt(f,Oe):F(f,Re,Oe,he)}switch($){case"input":Ue(f,v);break;case"textarea":pe(f,v);break;case"select":var Pe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!v.multiple;var Xe=v.value;Xe!=null?ut(f,!!v.multiple,Xe,!1):Pe!==!!v.multiple&&(v.defaultValue!=null?ut(f,!!v.multiple,v.defaultValue,!0):ut(f,!!v.multiple,v.multiple?[]:"",!1))}f[ja]=v}catch(st){In(t,t.return,st)}}break;case 6:if(Ve(r,t),Et(t),d&4){if(t.stateNode===null)throw Error(p(162));f=t.stateNode,v=t.memoizedProps;try{f.nodeValue=v}catch(st){In(t,t.return,st)}}break;case 3:if(Ve(r,t),Et(t),d&4&&a!==null&&a.memoizedState.isDehydrated)try{_e(r.containerInfo)}catch(st){In(t,t.return,st)}break;case 4:Ve(r,t),Et(t);break;case 13:Ve(r,t),Et(t),f=t.child,f.flags&8192&&(v=f.memoizedState!==null,f.stateNode.isHidden=v,!v||f.alternate!==null&&f.alternate.memoizedState!==null||(qa=Rt())),d&4&&at(t);break;case 22:if(Re=a!==null&&a.memoizedState!==null,t.mode&1?(s=(he=s)||Re,Ve(r,t),s=he):Ve(r,t),Et(t),d&8192){if(he=t.memoizedState!==null,(t.stateNode.isHidden=he)&&!Re&&(t.mode&1)!==0)for(o=t,Re=t.child;Re!==null;){for(Oe=o=Re;o!==null;){switch(Pe=o,Xe=Pe.child,Pe.tag){case 0:case 11:case 14:case 15:S(4,Pe,Pe.return);break;case 1:h(Pe,Pe.return);var it=Pe.stateNode;if(typeof it.componentWillUnmount=="function"){d=Pe,a=Pe.return;try{r=d,it.props=r.memoizedProps,it.state=r.memoizedState,it.componentWillUnmount()}catch(st){In(d,a,st)}}break;case 5:h(Pe,Pe.return);break;case 22:if(Pe.memoizedState!==null){lr(Oe);continue}}Xe!==null?(Xe.return=Pe,o=Xe):lr(Oe)}Re=Re.sibling}e:for(Re=null,Oe=t;;){if(Oe.tag===5){if(Re===null){Re=Oe;try{f=Oe.stateNode,he?(v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):($=Oe.stateNode,Q=Oe.memoizedProps.style,P=Q!=null&&Q.hasOwnProperty("display")?Q.display:null,$.style.display=Sr("display",P))}catch(st){In(t,t.return,st)}}}else if(Oe.tag===6){if(Re===null)try{Oe.stateNode.nodeValue=he?"":Oe.memoizedProps}catch(st){In(t,t.return,st)}}else if((Oe.tag!==22&&Oe.tag!==23||Oe.memoizedState===null||Oe===t)&&Oe.child!==null){Oe.child.return=Oe,Oe=Oe.child;continue}if(Oe===t)break e;for(;Oe.sibling===null;){if(Oe.return===null||Oe.return===t)break e;Re===Oe&&(Re=null),Oe=Oe.return}Re===Oe&&(Re=null),Oe.sibling.return=Oe.return,Oe=Oe.sibling}}break;case 19:Ve(r,t),Et(t),d&4&&at(t);break;case 21:break;default:Ve(r,t),Et(t)}}function Et(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(ee(a)){var d=a;break e}a=a.return}throw Error(p(160))}switch(d.tag){case 5:var f=d.stateNode;d.flags&32&&(pt(f,""),d.flags&=-33);var v=me(t);Ae(t,v,f);break;case 3:case 4:var P=d.stateNode.containerInfo,$=me(t);xe(t,$,P);break;default:throw Error(p(161))}}catch(Q){In(t,t.return,Q)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Un(t,r,a){o=t,sn(t)}function sn(t,r,a){for(var d=(t.mode&1)!==0;o!==null;){var f=o,v=f.child;if(f.tag===22&&d){var P=f.memoizedState!==null||n;if(!P){var $=f.alternate,Q=$!==null&&$.memoizedState!==null||s;$=n;var he=s;if(n=P,(s=Q)&&!he)for(o=f;o!==null;)P=o,Q=P.child,P.tag===22&&P.memoizedState!==null?vn(f):Q!==null?(Q.return=P,o=Q):vn(f);for(;v!==null;)o=v,sn(v),v=v.sibling;o=f,n=$,s=he}xr(t)}else(f.subtreeFlags&8772)!==0&&v!==null?(v.return=f,o=v):xr(t)}}function xr(t){for(;o!==null;){var r=o;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:s||z(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!s)if(a===null)d.componentDidMount();else{var f=r.elementType===r.type?a.memoizedProps:yr(r.type,a.memoizedProps);d.componentDidUpdate(f,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Qs(r,v,d);break;case 3:var P=r.updateQueue;if(P!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Qs(r,P,a)}break;case 5:var $=r.stateNode;if(a===null&&r.flags&4){a=$;var Q=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":Q.autoFocus&&a.focus();break;case"img":Q.src&&(a.src=Q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var he=r.alternate;if(he!==null){var Re=he.memoizedState;if(Re!==null){var Oe=Re.dehydrated;Oe!==null&&_e(Oe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}s||r.flags&512&&U(r)}catch(Pe){In(r,r.return,Pe)}}if(r===t){o=null;break}if(a=r.sibling,a!==null){a.return=r.return,o=a;break}o=r.return}}function lr(t){for(;o!==null;){var r=o;if(r===t){o=null;break}var a=r.sibling;if(a!==null){a.return=r.return,o=a;break}o=r.return}}function vn(t){for(;o!==null;){var r=o;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{z(4,r)}catch(Q){In(r,a,Q)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var f=r.return;try{d.componentDidMount()}catch(Q){In(r,f,Q)}}var v=r.return;try{U(r)}catch(Q){In(r,v,Q)}break;case 5:var P=r.return;try{U(r)}catch(Q){In(r,P,Q)}}}catch(Q){In(r,r.return,Q)}if(r===t){o=null;break}var $=r.sibling;if($!==null){$.return=r.return,o=$;break}o=r.return}}var br=Math.ceil,jn=q.ReactCurrentDispatcher,xn=q.ReactCurrentOwner,Dt=q.ReactCurrentBatchConfig,dt=0,zt=null,on=null,un=0,Ut=0,wr=ai(0),Lt=0,lo=null,kr=0,Ri=0,es=0,Rn=null,qn=null,qa=0,Hl=1/0,uo=null,Qc=!1,fp=null,Yo=null,Zc=!1,Vo=null,ed=0,$u=0,mp=null,td=-1,nd=0;function Wr(){return(dt&6)!==0?Rt():td!==-1?td:td=Rt()}function Jo(t){return(t.mode&1)===0?1:(dt&2)!==0&&un!==0?un&-un:Ic.transition!==null?(nd===0&&(nd=sa()),nd):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:dn(t.type)),t)}function ts(t,r,a,d){if(50<$u)throw $u=0,mp=null,Error(p(185));rr(t,a,d),((dt&2)===0||t!==zt)&&(t===zt&&((dt&2)===0&&(Ri|=a),Lt===4&&Xo(t,un)),Zr(t,d),a===1&&dt===0&&(r.mode&1)===0&&(Hl=Rt()+500,vl&&Ss()))}function Zr(t,r){var a=t.callbackNode;gt(t,r);var d=Kr(t,t===zt?un:0);if(d===0)a!==null&&Bt(a),t.callbackNode=null,t.callbackPriority=0;else if(r=d&-d,t.callbackPriority!==r){if(a!=null&&Bt(a),r===1)t.tag===0?Lc(Nh.bind(null,t)):Ti(Nh.bind(null,t)),Nc(function(){(dt&6)===0&&Ss()}),a=null;else{switch(ds(d)){case 1:a=ri;break;case 4:a=Vt;break;case 16:a=Je;break;case 536870912:a=cs;break;default:a=Je}a=Mh(a,jh.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function jh(t,r){if(td=-1,nd=0,(dt&6)!==0)throw Error(p(327));var a=t.callbackNode;if(Bl()&&t.callbackNode!==a)return null;var d=Kr(t,t===zt?un:0);if(d===0)return null;if((d&30)!==0||(d&t.expiredLanes)!==0||r)r=rd(t,d);else{r=d;var f=dt;dt|=2;var v=Lh();(zt!==t||un!==r)&&(uo=null,Hl=Rt()+500,$a(t,r));do try{Qm();break}catch($){Eh(t,$)}while(!0);Sl(),jn.current=v,dt=f,on!==null?r=0:(zt=null,un=0,r=Lt)}if(r!==0){if(r===2&&(f=ia(t),f!==0&&(d=f,r=gp(t,f))),r===1)throw a=lo,$a(t,0),Xo(t,d),Zr(t,Rt()),a;if(r===6)Xo(t,d);else{if(f=t.current.alternate,(d&30)===0&&!Jm(f)&&(r=rd(t,d),r===2&&(v=ia(t),v!==0&&(d=v,r=gp(t,v))),r===1))throw a=lo,$a(t,0),Xo(t,d),Zr(t,Rt()),a;switch(t.finishedWork=f,t.finishedLanes=d,r){case 0:case 1:throw Error(p(345));case 2:Ga(t,qn,uo);break;case 3:if(Xo(t,d),(d&130023424)===d&&(r=qa+500-Rt(),10<r)){if(Kr(t,0)!==0)break;if(f=t.suspendedLanes,(f&d)!==d){Wr(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Vi(Ga.bind(null,t,qn,uo),r);break}Ga(t,qn,uo);break;case 4:if(Xo(t,d),(d&4194240)===d)break;for(r=t.eventTimes,f=-1;0<d;){var P=31-fe(d);v=1<<P,P=r[P],P>f&&(f=P),d&=~v}if(d=f,d=Rt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*br(d/1960))-d,10<d){t.timeoutHandle=Vi(Ga.bind(null,t,qn,uo),d);break}Ga(t,qn,uo);break;case 5:Ga(t,qn,uo);break;default:throw Error(p(329))}}}return Zr(t,Rt()),t.callbackNode===a?jh.bind(null,t):null}function gp(t,r){var a=Rn;return t.current.memoizedState.isDehydrated&&($a(t,r).flags|=256),t=rd(t,r),t!==2&&(r=qn,qn=a,r!==null&&yp(r)),t}function yp(t){qn===null?qn=t:qn.push.apply(qn,t)}function Jm(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var f=a[d],v=f.getSnapshot;f=f.value;try{if(!Cn(v(),f))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Xo(t,r){for(r&=~es,r&=~Ri,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-fe(r),d=1<<a;t[a]=-1,r&=~d}}function Nh(t){if((dt&6)!==0)throw Error(p(327));Bl();var r=Kr(t,0);if((r&1)===0)return Zr(t,Rt()),null;var a=rd(t,r);if(t.tag!==0&&a===2){var d=ia(t);d!==0&&(r=d,a=gp(t,d))}if(a===1)throw a=lo,$a(t,0),Xo(t,r),Zr(t,Rt()),a;if(a===6)throw Error(p(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Ga(t,qn,uo),Zr(t,Rt()),null}function vp(t,r){var a=dt;dt|=1;try{return t(r)}finally{dt=a,dt===0&&(Hl=Rt()+500,vl&&Ss())}}function Ka(t){Vo!==null&&Vo.tag===0&&(dt&6)===0&&Bl();var r=dt;dt|=1;var a=Dt.transition,d=Nt;try{if(Dt.transition=null,Nt=1,t)return t()}finally{Nt=d,Dt.transition=a,dt=r,(dt&6)===0&&Ss()}}function xp(){Ut=wr.current,nn(wr)}function $a(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Ta(a)),on!==null)for(a=on.return;a!==null;){var d=a;switch(bl(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Lo();break;case 3:Li(),nn(mr),nn(Jn),eo();break;case 5:ku(d);break;case 4:Li();break;case 13:nn(ln);break;case 19:nn(ln);break;case 10:Hn(d.type._context);break;case 22:case 23:xp()}a=a.return}if(zt=t,on=t=Qo(t.current,null),un=Ut=r,Lt=0,lo=null,es=Ri=kr=0,qn=Rn=null,Ts!==null){for(r=0;r<Ts.length;r++)if(a=Ts[r],d=a.interleaved,d!==null){a.interleaved=null;var f=d.next,v=a.pending;if(v!==null){var P=v.next;v.next=f,d.next=P}a.pending=d}Ts=null}return t}function Eh(t,r){do{var a=on;try{if(Sl(),Tl.current=Fa,Ma){for(var d=fn.memoizedState;d!==null;){var f=d.queue;f!==null&&(f.pending=null),d=d.next}Ma=!1}if(to=0,Ot=Bn=fn=null,Da=!1,za=0,xn.current=null,a===null||a.return===null){Lt=1,lo=r,on=null;break}e:{var v=t,P=a.return,$=a,Q=r;if(r=un,$.flags|=32768,Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var he=Q,Re=$,Oe=Re.tag;if((Re.mode&1)===0&&(Oe===0||Oe===11||Oe===15)){var Pe=Re.alternate;Pe?(Re.updateQueue=Pe.updateQueue,Re.memoizedState=Pe.memoizedState,Re.lanes=Pe.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Xe=Wu(P);if(Xe!==null){Xe.flags&=-257,oo(Xe,P,$,v,r),Xe.mode&1&&$c(v,he,r),r=Xe,Q=he;var it=r.updateQueue;if(it===null){var st=new Set;st.add(Q),r.updateQueue=st}else it.add(Q);break e}else{if((r&1)===0){$c(v,he,r),bp();break e}Q=Error(p(426))}}else if(rn&&$.mode&1){var Kn=Wu(P);if(Kn!==null){(Kn.flags&65536)===0&&(Kn.flags|=256),oo(Kn,P,$,v,r),Io(so(Q,$));break e}}v=Q=so(Q,$),Lt!==4&&(Lt=2),Rn===null?Rn=[v]:Rn.push(v),v=P;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var ue=Pl(v,Q,r);Do(v,ue);break e;case 1:$=Q;var ne=v.type,ce=v.stateNode;if((v.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Yo===null||!Yo.has(ce)))){v.flags|=65536,r&=-r,v.lanes|=r;var Fe=Fu(v,$,r);Do(v,Fe);break e}}v=v.return}while(v!==null)}Ah(a)}catch(lt){r=lt,on===a&&a!==null&&(on=a=a.return);continue}break}while(!0)}function Lh(){var t=jn.current;return jn.current=Fa,t===null?Fa:t}function bp(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),zt===null||(kr&268435455)===0&&(Ri&268435455)===0||Xo(zt,un)}function rd(t,r){var a=dt;dt|=2;var d=Lh();(zt!==t||un!==r)&&(uo=null,$a(t,r));do try{Xm();break}catch(f){Eh(t,f)}while(!0);if(Sl(),dt=a,jn.current=d,on!==null)throw Error(p(261));return zt=null,un=0,Lt}function Xm(){for(;on!==null;)Ph(on)}function Qm(){for(;on!==null&&!Mr();)Ph(on)}function Ph(t){var r=Oh(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,r===null?Ah(t):on=r,xn.current=null}function Ah(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=Wl(a,r,Ut),a!==null){on=a;return}}else{if(a=e(a,r),a!==null){a.flags&=32767,on=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,on=null;return}}if(r=r.sibling,r!==null){on=r;return}on=r=t}while(r!==null);Lt===0&&(Lt=5)}function Ga(t,r,a){var d=Nt,f=Dt.transition;try{Dt.transition=null,Nt=1,Zm(t,r,a,d)}finally{Dt.transition=f,Nt=d}return null}function Zm(t,r,a,d){do Bl();while(Vo!==null);if((dt&6)!==0)throw Error(p(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(p(177));t.callbackNode=null,t.callbackPriority=0;var v=a.lanes|a.childLanes;if(oa(t,v),t===zt&&(on=zt=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Zc||(Zc=!0,Mh(Je,function(){return Bl(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=Dt.transition,Dt.transition=null;var P=Nt;Nt=1;var $=dt;dt|=4,xn.current=null,w(t,a),St(a,t),ip(Yi),te=!!gl,Yi=gl=null,t.current=a,Un(a),us(),dt=$,Nt=P,Dt.transition=v}else t.current=a;if(Zc&&(Zc=!1,Vo=t,ed=f),v=t.pendingLanes,v===0&&(Yo=null),B(a.stateNode),Zr(t,Rt()),r!==null)for(d=t.onRecoverableError,a=0;a<r.length;a++)f=r[a],d(f.value,{componentStack:f.stack,digest:f.digest});if(Qc)throw Qc=!1,t=fp,fp=null,t;return(ed&1)!==0&&t.tag!==0&&Bl(),v=t.pendingLanes,(v&1)!==0?t===mp?$u++:($u=0,mp=t):$u=0,Ss(),null}function Bl(){if(Vo!==null){var t=ds(ed),r=Dt.transition,a=Nt;try{if(Dt.transition=null,Nt=16>t?16:t,Vo===null)var d=!1;else{if(t=Vo,Vo=null,ed=0,(dt&6)!==0)throw Error(p(331));var f=dt;for(dt|=4,o=t.current;o!==null;){var v=o,P=v.child;if((o.flags&16)!==0){var $=v.deletions;if($!==null){for(var Q=0;Q<$.length;Q++){var he=$[Q];for(o=he;o!==null;){var Re=o;switch(Re.tag){case 0:case 11:case 15:S(8,Re,v)}var Oe=Re.child;if(Oe!==null)Oe.return=Re,o=Oe;else for(;o!==null;){Re=o;var Pe=Re.sibling,Xe=Re.return;if(re(Re),Re===he){o=null;break}if(Pe!==null){Pe.return=Xe,o=Pe;break}o=Xe}}}var it=v.alternate;if(it!==null){var st=it.child;if(st!==null){it.child=null;do{var Kn=st.sibling;st.sibling=null,st=Kn}while(st!==null)}}o=v}}if((v.subtreeFlags&2064)!==0&&P!==null)P.return=v,o=P;else e:for(;o!==null;){if(v=o,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:S(9,v,v.return)}var ue=v.sibling;if(ue!==null){ue.return=v.return,o=ue;break e}o=v.return}}var ne=t.current;for(o=ne;o!==null;){P=o;var ce=P.child;if((P.subtreeFlags&2064)!==0&&ce!==null)ce.return=P,o=ce;else e:for(P=ne;o!==null;){if($=o,($.flags&2048)!==0)try{switch($.tag){case 0:case 11:case 15:z(9,$)}}catch(lt){In($,$.return,lt)}if($===P){o=null;break e}var Fe=$.sibling;if(Fe!==null){Fe.return=$.return,o=Fe;break e}o=$.return}}if(dt=f,Ss(),T&&typeof T.onPostCommitFiberRoot=="function")try{T.onPostCommitFiberRoot(Yn,t)}catch{}d=!0}return d}finally{Nt=a,Dt.transition=r}}return!1}function Rh(t,r,a){r=so(a,r),r=Pl(t,r,1),t=ui(t,r,1),r=Wr(),t!==null&&(rr(t,1,r),Zr(t,r))}function In(t,r,a){if(t.tag===3)Rh(t,t,a);else for(;r!==null;){if(r.tag===3){Rh(r,t,a);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Yo===null||!Yo.has(d))){t=so(a,t),t=Fu(r,t,1),r=ui(r,t,1),t=Wr(),r!==null&&(rr(r,1,t),Zr(r,t));break}}r=r.return}}function eg(t,r,a){var d=t.pingCache;d!==null&&d.delete(r),r=Wr(),t.pingedLanes|=t.suspendedLanes&a,zt===t&&(un&a)===a&&(Lt===4||Lt===3&&(un&130023424)===un&&500>Rt()-qa?$a(t,0):es|=a),Zr(t,r)}function Ih(t,r){r===0&&((t.mode&1)===0?r=1:(r=Qt,Qt<<=1,(Qt&130023424)===0&&(Qt=4194304)));var a=Wr();t=Ni(t,r),t!==null&&(rr(t,r,a),Zr(t,a))}function tg(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),Ih(t,a)}function ng(t,r){var a=0;switch(t.tag){case 13:var d=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:d=t.stateNode;break;default:throw Error(p(314))}d!==null&&d.delete(r),Ih(t,a)}var Oh;Oh=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||mr.current)er=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return er=!1,hp(t,r,a);er=(t.flags&131072)!==0}else er=!1,rn&&(r.flags&1048576)!==0&&xl(r,Lr,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Fl(t,r),t=r.pendingProps;var f=Eo(r,Jn.current);Js(r,a),f=El(null,r,d,t,f,a);var v=Su();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,or(d)?(v=!0,Po(r)):v=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,_l(r),f.updater=Ha,r.stateNode=f,f._reactInternals=r,Mu(r,d,t,a),r=Go(null,r,d,!0,v,a)):(r.tag=0,rn&&v&&Gs(r),vr(null,r,f,a),r=r.child),r;case 16:d=r.elementType;e:{switch(Fl(t,r),t=r.pendingProps,f=d._init,d=f(d._payload),r.type=d,f=r.tag=ig(d),t=yr(d,t),f){case 0:r=ao(null,r,d,t,a);break e;case 1:r=Qr(null,r,d,t,a);break e;case 11:r=Yc(null,r,d,t,a);break e;case 14:r=Vc(null,r,d,yr(d.type,t),a);break e}throw Error(p(306,d,""))}return r;case 0:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),ao(t,r,d,f,a);case 1:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),Qr(t,r,d,f,a);case 3:e:{if(Rl(r),t===null)throw Error(p(387));d=r.pendingProps,v=r.memoizedState,f=v.element,Xs(t,r),Cl(r,d,null,a);var P=r.memoizedState;if(d=P.element,v.isDehydrated)if(v={element:d,isDehydrated:!1,cache:P.cache,pendingSuspenseBoundaries:P.pendingSuspenseBoundaries,transitions:P.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){f=so(Error(p(423)),r),r=Hu(t,r,d,a,f);break e}else if(d!==f){f=so(Error(p(424)),r),r=Hu(t,r,d,a,f);break e}else for(An=bs(r.stateNode.containerInfo.firstChild),gr=r,rn=!0,Vr=null,a=Aa(r,null,d,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ro(),d===f){r=Pr(t,r,a);break e}vr(t,r,d,a)}r=r.child}return r;case 5:return wu(r),t===null&&wl(r),d=r.type,f=r.pendingProps,v=t!==null?t.memoizedProps:null,P=f.children,Bs(d,f)?P=null:v!==null&&Bs(d,v)&&(r.flags|=32),Al(t,r),vr(t,r,P,a),r.child;case 6:return t===null&&wl(r),null;case 13:return Ml(t,r,a);case 4:return Zs(r,r.stateNode.containerInfo),d=r.pendingProps,t===null?r.child=Cs(r,null,d,a):vr(t,r,d,a),r.child;case 11:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),Yc(t,r,d,f,a);case 7:return vr(t,r,r.pendingProps,a),r.child;case 8:return vr(t,r,r.pendingProps.children,a),r.child;case 12:return vr(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(d=r.type._context,f=r.pendingProps,v=r.memoizedProps,P=f.value,Zt(Ra,d._currentValue),d._currentValue=P,v!==null)if(Cn(v.value,P)){if(v.children===f.children&&!mr.current){r=Pr(t,r,a);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var $=v.dependencies;if($!==null){P=v.child;for(var Q=$.firstContext;Q!==null;){if(Q.context===d){if(v.tag===1){Q=Ei(-1,a&-a),Q.tag=2;var he=v.updateQueue;if(he!==null){he=he.shared;var Re=he.pending;Re===null?Q.next=Q:(Q.next=Re.next,Re.next=Q),he.pending=Q}}v.lanes|=a,Q=v.alternate,Q!==null&&(Q.lanes|=a),Mo(v.return,a,r),$.lanes|=a;break}Q=Q.next}}else if(v.tag===10)P=v.type===r.type?null:v.child;else if(v.tag===18){if(P=v.return,P===null)throw Error(p(341));P.lanes|=a,$=P.alternate,$!==null&&($.lanes|=a),Mo(P,a,r),P=v.sibling}else P=v.child;if(P!==null)P.return=v;else for(P=v;P!==null;){if(P===r){P=null;break}if(v=P.sibling,v!==null){v.return=P.return,P=v;break}P=P.return}v=P}vr(t,r,f.children,a),r=r.child}return r;case 9:return f=r.type,d=r.pendingProps.children,Js(r,a),f=Fr(f),d=d(f),r.flags|=1,vr(t,r,d,a),r.child;case 14:return d=r.type,f=yr(d,r.pendingProps),f=yr(d.type,f),Vc(t,r,d,f,a);case 15:return en(t,r,r.type,r.pendingProps,a);case 17:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),Fl(t,r),r.tag=1,or(d)?(t=!0,Po(r)):t=!1,Js(r,a),Uc(r,d,f),Mu(r,d,f,a),Go(null,r,d,!0,t,a);case 19:return qu(t,r,a);case 22:return Jc(t,r,a)}throw Error(p(156,r.tag))};function Mh(t,r){return Di(t,r)}function rg(t,r,a,d){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ii(t,r,a,d){return new rg(t,r,a,d)}function wp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ig(t){if(typeof t=="function")return wp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ce)return 11;if(t===L)return 14}return 2}function Qo(t,r){var a=t.alternate;return a===null?(a=Ii(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function id(t,r,a,d,f,v){var P=2;if(d=t,typeof t=="function")wp(t)&&(P=1);else if(typeof t=="string")P=5;else e:switch(t){case le:return Ya(a.children,f,v,r);case be:P=8,f|=8;break;case We:return t=Ii(12,a,r,f|2),t.elementType=We,t.lanes=v,t;case oe:return t=Ii(13,a,r,f),t.elementType=oe,t.lanes=v,t;case ye:return t=Ii(19,a,r,f),t.elementType=ye,t.lanes=v,t;case K:return sd(a,f,v,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Te:P=10;break e;case se:P=9;break e;case Ce:P=11;break e;case L:P=14;break e;case X:P=16,d=null;break e}throw Error(p(130,t==null?t:typeof t,""))}return r=Ii(P,a,r,f),r.elementType=t,r.type=d,r.lanes=v,r}function Ya(t,r,a,d){return t=Ii(7,t,d,r),t.lanes=a,t}function sd(t,r,a,d){return t=Ii(22,t,d,r),t.elementType=K,t.lanes=a,t.stateNode={isHidden:!1},t}function kp(t,r,a){return t=Ii(6,t,null,r),t.lanes=a,t}function Sp(t,r,a){return r=Ii(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function sg(t,r,a,d,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=d,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function _p(t,r,a,d,f,v,P,$,Q){return t=new sg(t,r,a,$,Q),r===1?(r=1,v===!0&&(r|=8)):r=0,v=Ii(3,null,null,r),t.current=v,v.stateNode=t,v.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},_l(v),t}function og(t,r,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:d==null?null:""+d,children:t,containerInfo:r,implementation:a}}function Dh(t){if(!t)return ks;t=t._reactInternals;e:{if(Mn(t)!==t||t.tag!==1)throw Error(p(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(p(171))}if(t.tag===1){var a=t.type;if(or(a))return yu(t,a,r)}return r}function zh(t,r,a,d,f,v,P,$,Q){return t=_p(a,d,!0,t,f,v,P,$,Q),t.context=Dh(null),a=t.current,d=Wr(),f=Jo(a),v=Ei(d,f),v.callback=r??null,ui(a,v,f),t.current.lanes=f,rr(t,f,d),Zr(t,d),t}function od(t,r,a,d){var f=r.current,v=Wr(),P=Jo(f);return a=Dh(a),r.context===null?r.context=a:r.pendingContext=a,r=Ei(v,P),r.payload={element:t},d=d===void 0?null:d,d!==null&&(r.callback=d),t=ui(f,r,P),t!==null&&(ts(t,f,P,v),Oa(t,f,P)),P}function ad(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fh(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function Cp(t,r){Fh(t,r),(t=t.alternate)&&Fh(t,r)}function ag(){return null}var Wh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tp(t){this._internalRoot=t}ld.prototype.render=Tp.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(p(409));od(t,r,null,null)},ld.prototype.unmount=Tp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Ka(function(){od(null,t,null,null)}),r[Ji]=null}};function ld(t){this._internalRoot=t}ld.prototype.unstable_scheduleHydration=function(t){if(t){var r=xi();t={blockedOn:null,target:t,priority:r};for(var a=0;a<jr.length&&r!==0&&r<jr[a].priority;a++);jr.splice(a,0,t),a===0&&la(t)}};function jp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hh(){}function lg(t,r,a,d,f){if(f){if(typeof d=="function"){var v=d;d=function(){var he=ad(P);v.call(he)}}var P=zh(r,d,t,0,null,!1,!1,"",Hh);return t._reactRootContainer=P,t[Ji]=P.current,ys(t.nodeType===8?t.parentNode:t),Ka(),P}for(;f=t.lastChild;)t.removeChild(f);if(typeof d=="function"){var $=d;d=function(){var he=ad(Q);$.call(he)}}var Q=_p(t,0,!1,null,null,!1,!1,"",Hh);return t._reactRootContainer=Q,t[Ji]=Q.current,ys(t.nodeType===8?t.parentNode:t),Ka(function(){od(r,Q,a,d)}),Q}function cd(t,r,a,d,f){var v=a._reactRootContainer;if(v){var P=v;if(typeof f=="function"){var $=f;f=function(){var Q=ad(P);$.call(Q)}}od(r,P,t,f)}else P=lg(a,r,t,f,d);return ad(P)}Is=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Sn(r.pendingLanes);a!==0&&(Wi(r,a|1),Zr(r,Rt()),(dt&6)===0&&(Hl=Rt()+500,Ss()))}break;case 13:Ka(function(){var d=Ni(t,1);if(d!==null){var f=Wr();ts(d,t,1,f)}}),Cp(t,1)}},vi=function(t){if(t.tag===13){var r=Ni(t,134217728);if(r!==null){var a=Wr();ts(r,t,134217728,a)}Cp(t,134217728)}},xo=function(t){if(t.tag===13){var r=Jo(t),a=Ni(t,r);if(a!==null){var d=Wr();ts(a,t,r,d)}Cp(t,r)}},xi=function(){return Nt},Hi=function(t,r){var a=Nt;try{return Nt=t,r()}finally{Nt=a}},_r=function(t,r,a){switch(r){case"input":if(Ue(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var d=a[r];if(d!==t&&d.form===t.form){var f=yn(d);if(!f)throw Error(p(90));Ft(d),Ue(d,f)}}}break;case"textarea":pe(t,a);break;case"select":r=a.value,r!=null&&ut(t,!!a.multiple,r,!1)}},En=vp,wn=Ka;var ug={usingClientEntryPoint:!1,Events:[hn,Tn,yn,bn,gn,vp]},Gu={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cg={bundleType:Gu.bundleType,version:Gu.version,rendererPackageName:Gu.rendererPackageName,rendererConfig:Gu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gn(t),t===null?null:t.stateNode},findFiberByHostInstance:Gu.findFiberByHostInstance||ag,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dd.isDisabled&&dd.supportsFiber)try{Yn=dd.inject(cg),T=dd}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ug,ei.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jp(r))throw Error(p(200));return og(t,r,null,a)},ei.createRoot=function(t,r){if(!jp(t))throw Error(p(299));var a=!1,d="",f=Wh;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=_p(t,1,!1,null,null,a,!1,d,f),t[Ji]=r.current,ys(t.nodeType===8?t.parentNode:t),new Tp(r)},ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=Gn(r),t=t===null?null:t.stateNode,t},ei.flushSync=function(t){return Ka(t)},ei.hydrate=function(t,r,a){if(!ud(r))throw Error(p(200));return cd(null,t,r,!0,a)},ei.hydrateRoot=function(t,r,a){if(!jp(t))throw Error(p(405));var d=a!=null&&a.hydratedSources||null,f=!1,v="",P=Wh;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(P=a.onRecoverableError)),r=zh(r,null,t,1,a??null,f,!1,v,P),t[Ji]=r.current,ys(t),d)for(t=0;t<d.length;t++)a=d[t],f=a._getVersion,f=f(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,f]:r.mutableSourceEagerHydrationData.push(a,f);return new ld(r)},ei.render=function(t,r,a){if(!ud(r))throw Error(p(200));return cd(null,t,r,!1,a)},ei.unmountComponentAtNode=function(t){if(!ud(t))throw Error(p(40));return t._reactRootContainer?(Ka(function(){cd(null,null,t,!1,function(){t._reactRootContainer=null,t[Ji]=null})}),!0):!1},ei.unstable_batchedUpdates=vp,ei.unstable_renderSubtreeIntoContainer=function(t,r,a,d){if(!ud(a))throw Error(p(200));if(t==null||t._reactInternals===void 0)throw Error(p(38));return cd(t,r,a,!1,d)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var Vh;function wg(){if(Vh)return Lp.exports;Vh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Lp.exports=bg(),Lp.exports}var Jh;function kg(){if(Jh)return pd;Jh=1;var l=wg();return pd.createRoot=l.createRoot,pd.hydrateRoot=l.hydrateRoot,pd}var Sg=kg();const _g=[["Avery","Morgan","averym","Avery","p1"],["Jordan","Brooks","jbrooks17","Jordan Brooks","p1"],["Taylor","Reed","treed","T. Reed","p1"],["Casey","Nguyen","cnguyen","Casey","p1"],["Riley","Davis","rileyd","Riley","p1"],["Maya","Patel","maya-p","Maya","p3"],["Cameron","Lee","clee","Cameron Lee","p3"],["Sydney","Wilson","sydneyw","Sydney","p3"],["Quinn","Martinez","qmartinez","Quinn","p3"],["Bailey","Adams","bailey_a","Bailey","p5"],["Sam","Rivera","rivera-s","Sam","p5"],["Charlie","Brown","charlieb","Charlie","p6"],["Drew","Johnson","drewj","Drew","p6"],["Alex","Kim","alexk","Alex","p7"],["Robin","Clark","robin-c","Robin","p7"],["Jamie","Flores","jflores","Jamie","p8"]],Sd=_g.map(([l,c,p,g,y],b)=>({id:`sample-${b+1}`,first:l,last:c,sheetName:b===3||b===11?null:`${l} ${c}`,github:p,studentName:g,sections:b===0?["p1","p3"]:[y],status:b%5===0?"Active now":b%4===0?"Viewing page":"No recent signal",current:b%3===0?"Strings and Variables":b%3===1?"Format a Summary":"Intro to Arrays",assignments:[{id:"strings",name:"Strings and Variables",type:"Lesson",status:"Completed",score:b%4===0?null:8+b%3,possible:10,submitted:"2026-11-02"},{id:"summary",name:"Format a Summary",type:"Challenge",status:b%4===0?"Started":"Completed",score:b%4===0?null:11+b%5,possible:15,submitted:"2026-11-03"},{id:"decisions",name:"Decision Tree",type:"Challenge",status:b%3===0?"Submitted":"Needs revision",score:b%3===0?10:null,possible:20,submitted:"2026-10-28"},{id:"reflection",name:"Debugging Reflection",type:"Lesson",status:"Practice completed",score:null,possible:5,submitted:"2026-10-26"}],weekly:{"2026-11-02":b%4===0?0:19+b%6,"2026-10-26":b%3===0?12:8+b%5}})),Cg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function _d(l=new Date){const c=Object.fromEntries(Cg.formatToParts(l).filter(g=>g.type!=="literal").map(g=>[g.type,g.value])),p=new Date(Date.UTC(Number(c.year),Number(c.month)-1,Number(c.day)));return p.setUTCDate(p.getUTCDate()-(p.getUTCDay()+6)%7),p.toISOString().slice(0,10)}function $p(l=new Date,c=8){const p=new Date(_d(l)+"T12:00:00Z");return Array.from({length:c},(g,y)=>{const b=new Date(p);return b.setUTCDate(b.getUTCDate()-y*7),b.toISOString().slice(0,10)})}const Kl=l=>new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"America/Chicago"}),Tg=(l,c,p)=>`${l}|${c}|${p}`;function jg({response:l,type:c,aiUse:p,aiDetails:g}){return["essay","logic-puzzle"].includes(c)?String(l).trim().length<10?"Write your answer and explain your thinking.":["none","disclosed"].includes(p)?p==="disclosed"&&String(g).trim().length<5?"Describe which parts involved AI.":"":"Complete the AI-use declaration.":"Select an essay or logic puzzle."}const Ng=[{id:"seed-journal-1",sectionId:"p1",studentId:"sample-2",studentName:"Jordan Brooks",courseId:"computer-science-1",week:_d(),type:"essay",response:"When I debug code, I first reproduce the problem and read the error carefully. Next I try one small change and test again. I keep notes so I can explain what fixed the problem and why.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()},{id:"seed-journal-2",sectionId:"p1",studentId:"sample-3",studentName:"Taylor Reed",courseId:"computer-science-1",week:_d(),type:"logic-puzzle",response:"The differences are 4, 6, 8, and 10. The next difference is 12, so the next number is 42. This also follows the pattern n(n+1), starting at n = 1.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()}],Ls={"game-programming":[{id:"csharp-foundations",title:"C# Foundations",description:"Build the logic behind games.",lessons:["csharp-variables","csharp-conditionals"]},{id:"unity-systems",title:"Unity Gameplay",description:"Connect scripts and game mechanics.",lessons:["unity-colliders","unity-player-controller","unity-score"]}],"mobile-app-dev":[{id:"web-basics",title:"Web Foundations",description:"Create and style interface elements.",lessons:["web-layout","web-events"]},{id:"react-foundations",title:"React Essentials",description:"Build reusable and interactive UI.",lessons:["react-components","react-state"]}],uil:[{id:"java-language",title:"Java Language & Tracing",description:"Reason about loops and variables.",lessons:["uil-loops","uil-methods"]},{id:"java-data",title:"Data Structures",description:"Trace arrays and string operations.",lessons:["uil-arrays","uil-strings"]}],"tsi-math":[{id:"tsi-quantitative",title:"Quantitative Reasoning",description:"Rates, ratios, percentages, and proportions.",lessons:["tsi-ratios","tsi-percents"]},{id:"tsi-algebra",title:"Algebraic Reasoning",description:"Solve equations and interpret graphs.",lessons:["tsi-equations","tsi-slope"]}],capstone:[{id:"capstone-discover",title:"Discover the Problem",description:"Investigate a need worth solving.",lessons:["capstone-discovery","capstone-interviews"]},{id:"capstone-validate",title:"Prototype & Validate",description:"Turn evidence into an iterated prototype.",lessons:["capstone-prototype","capstone-feedback"]}]},lc=[{id:"asvab",title:"ASVAB",subtitle:"Military aptitude",description:"Start with the four AFQT subjects; technical subtests can be added later.",reference:"https://www.officialasvab.com/applicants/sample-questions/",topics:[{id:"asvab-ar",title:"Arithmetic Reasoning",description:"Use math to solve everyday word problems.",questions:[{id:"asvab-ar-sample-01",prompt:"A supply team divides 96 bolts equally among 8 tool kits. How many bolts go into each kit?",options:["8","10","12","16"],correct:2,explanation:"Divide 96 by 8. Each tool kit receives 12 bolts."},{id:"asvab-ar-sample-02",prompt:"A delivery vehicle travels 180 miles in 3 hours at a steady speed. What is its average speed?",options:["45 mph","60 mph","75 mph","90 mph"],correct:1,explanation:"Average speed equals distance divided by time: 180 ÷ 3 = 60 mph."}]},{id:"asvab-wk",title:"Word Knowledge",description:"Practice synonyms and vocabulary in context.",questions:[{id:"asvab-wk-sample-01",prompt:'In the sentence "The technician was meticulous when checking each connection," meticulous most nearly means:',options:["hurried","careful","uninterested","unprepared"],correct:1,explanation:"Meticulous describes someone who gives careful attention to detail."},{id:"asvab-wk-sample-02",prompt:'The word "scarce" most nearly means:',options:["plentiful","fragile","limited","unusual"],correct:2,explanation:"If something is scarce, there is not much of it available."}]},{id:"asvab-pc",title:"Paragraph Comprehension",description:"Identify main ideas and supporting details.",questions:[{id:"asvab-pc-sample-01",prompt:"Passage: The neighborhood library added Saturday hours because weekday attendance had increased. Staff hope the extra day will help working families visit. Why did the library extend its schedule?",options:["To replace weekday hours","To make visits easier for more people","To reduce staff","To host only weekend events"],correct:1,explanation:"The passage says Saturday hours respond to demand and help working families visit."},{id:"asvab-pc-sample-02",prompt:"Passage: Before using the lab, workers inspect equipment, record damaged items, and report problems. This routine helps prevent interruptions and injuries. What is the main purpose of the routine?",options:["Improving safety and reliability","Making the lab look new","Reducing all written records","Increasing equipment costs"],correct:0,explanation:"The checklist catches problems early and lowers risk to people and equipment."}]},{id:"asvab-mk",title:"Mathematics Knowledge",description:"Review algebra, geometry, and number sense.",questions:[{id:"asvab-mk-sample-01",prompt:"Solve for x: 3(x − 2) = 15.",options:["3","5","7","9"],correct:2,explanation:"Divide by 3: x − 2 = 5. Add 2: x = 7."},{id:"asvab-mk-sample-02",prompt:"What is the area of a triangle with a base of 10 units and a height of 7 units?",options:["17 square units","35 square units","70 square units","140 square units"],correct:1,explanation:"Triangle area is one-half times base times height: (10 × 7) ÷ 2 = 35."}]}]},{id:"sat",title:"SAT",subtitle:"Digital SAT",description:"Practice the Reading and Writing and Math sections. These samples are not adaptive and do not produce SAT scores.",reference:"https://satsuite.collegeboard.org/sat/practice-preparation",topics:[{id:"sat-rw",title:"Reading and Writing",description:"Interpret short passages, revise sentences, and choose transitions.",questions:[{id:"sat-rw-sample-01",prompt:'Choose the best transition: "Maya planned to bike to school. _____, heavy rain forced her to take the bus."',options:["For example","However","Similarly","Therefore"],correct:1,explanation:"However signals the contrast between Maya's plan and what happened."},{id:"sat-rw-sample-02",prompt:"Choose the grammatically correct sentence.",options:["Each of the notebooks have a label.","Each of the notebooks has a label.","Each of the notebooks are labeled.","Each of the notebook have labels."],correct:1,explanation:"The subject each is singular, so it takes has."}]},{id:"sat-math",title:"Math",description:"Use algebra and problem-solving strategies.",questions:[{id:"sat-math-sample-01",prompt:"If f(x) = 2x + 5, what is f(4)?",options:["9","11","13","18"],correct:2,explanation:"Substitute 4 for x: f(4) = 2(4) + 5 = 13."},{id:"sat-math-sample-02",prompt:"If 2x + y = 11 and y = 3, what is x?",options:["3","4","5","7"],correct:1,explanation:"Replace y with 3: 2x + 3 = 11, so 2x = 8 and x = 4."}]}]},{id:"act",title:"ACT",subtitle:"Enhanced ACT",description:"Practice English, Math, Reading, and optional Science using the updated ACT structure.",reference:"https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/act-exam-sections-and-structure.html",topics:[{id:"act-english",title:"English",description:"Revise sentences for grammar and clarity.",questions:[{id:"act-english-sample-01",prompt:'Choose the correct verb: "The team of engineers _____ ready to begin."',options:["are","is","were","have"],correct:1,explanation:"The singular subject team takes the singular verb is."},{id:"act-english-sample-02",prompt:"Choose the correctly punctuated sentence.",options:["After the storm the street was quiet.","After the storm, the street was quiet.","After, the storm the street was quiet.","After the storm the, street was quiet."],correct:1,explanation:"An introductory phrase is commonly followed by a comma."}]},{id:"act-math",title:"Math",description:"Practice algebra, geometry, and problem solving.",questions:[{id:"act-math-sample-01",prompt:"What is the slope of the line through (2, 1) and (6, 9)?",options:["1","2","4","8"],correct:1,explanation:"Slope = change in y ÷ change in x = (9 − 1) ÷ (6 − 2) = 8 ÷ 4 = 2."},{id:"act-math-sample-02",prompt:"A rectangle measures 8 inches by 5 inches. What is its perimeter?",options:["13 inches","26 inches","40 inches","80 inches"],correct:1,explanation:"Perimeter = 2(length + width) = 2(8 + 5) = 26 inches."}]},{id:"act-reading",title:"Reading",description:"Find key details and reasonable inferences.",questions:[{id:"act-reading-sample-01",prompt:"Passage: Lena repaired an old bicycle rather than buy a new one. She replaced the chain and adjusted the brakes so she could use it to commute. Which statement is supported?",options:["Lena sold the bike.","Lena intends to ride the repaired bike.","Lena cannot fix brakes.","Lena purchased a new bike."],correct:1,explanation:"The passage explicitly says Lena repaired the bike to use it for commuting."},{id:"act-reading-sample-02",prompt:"Passage: Residents created a neighborhood garden on an empty lot. Volunteers donated seeds, installed raised beds, and shared the harvest. What best describes the project?",options:["A commercial farm run by one company","A volunteer project that benefits neighbors","A plan to close the lot permanently","An indoor science experiment"],correct:1,explanation:"The volunteers worked together on a shared garden and harvest."}]},{id:"act-science",title:"Science (optional)",description:"Interpret experimental results, charts, and evidence.",questions:[{id:"act-science-sample-01",prompt:"In an experiment, a plant grew 2 cm at 10°C, 4 cm at 20°C, and 6 cm at 30°C over the same period. What pattern is shown?",options:["Growth decreases as temperature increases.","Growth remains constant.","Growth increases with temperature in these trials.","Temperature has no measurable relationship."],correct:2,explanation:"The recorded growth rises from 2 to 4 to 6 cm as temperature increases across these trials."},{id:"act-science-sample-02",prompt:"Two identical seedlings get the same light and water. One receives fertilizer and the other does not. Which variable is intentionally changed?",options:["Amount of light","Amount of water","Type of plant","Use of fertilizer"],correct:3,explanation:"Fertilizer is the independent variable; the other conditions are kept the same."}]}]}],Xh=lc.map(l=>({id:l.id,title:l.title,description:l.description,lessons:l.topics.map(c=>c.id)})),Eg=Object.fromEntries(lc.flatMap(l=>l.topics.map(c=>[c.id,{id:c.id,title:c.title,summary:c.description,language:"text",kind:"Sample practice",trackId:l.id}]))),Lg=l=>{for(const c of lc){const p=c.topics.find(g=>g.id===l);if(p)return{track:c,topic:p}}return null};lc.reduce((l,c)=>l+c.topics.reduce((p,g)=>p+g.questions.length,0),0);const Pg=[{id:"01-how-programs-work/01-first-message",unit:1,unitName:"How Programs Work",lesson:1,slug:"01-first-message",title:"Instructions and output",concept:"Output and strings",summary:"Tell a computer what to display using a simple Python instruction.",mode:"script",starter:`# Use print() to display the exact welcome message.
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
`,console:"Run, Check and Submit are simulated in this React design lab."},"tsi-percents":{title:"Percents and Discounts",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Use percentages in everyday situations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-equations":{title:"Solve Linear Equations",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Solve a one-variable equation with inverse operations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-slope":{title:"Slope and Rate of Change",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Interpret slope from a table of values.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."}};function Ja(l){return typeof l=="string"?l:typeof(l==null?void 0:l.id)=="string"?l.id:""}function Rs(l){return String((l==null?void 0:l.title)||(l==null?void 0:l.unitName)||(l==null?void 0:l.name)||"Lessons")}function uc(l,c=1){return(l==null?void 0:l.number)??(l==null?void 0:l.unit)??c}function rs(l){return((l==null?void 0:l.lessons)||[]).map(Ja).filter(Boolean)}function rc(l){return Array.isArray(l==null?void 0:l.units)?l.units.flatMap(rs):Array.isArray(l==null?void 0:l.lessons)?l.lessons.map(Ja).filter(Boolean):[]}function Bg(l,c){return((l==null?void 0:l.units)||[]).some(p=>rs(p).includes(c))}function na(l,c,p=Zf){var k,E;if(!c)return null;const g=((l==null?void 0:l.units)||[]).find(N=>rs(N).includes(c)),y=((g==null?void 0:g.lessons)||[]).find(N=>Ja(N)===c),b=typeof y=="object"&&y||((k=g==null?void 0:g.lessonMeta)==null?void 0:k[c])||((E=l==null?void 0:l.lessonRecords)==null?void 0:E[c])||{},_=(p==null?void 0:p[c])||{},C=String(b.title||b.name||_.title||c.split("/").at(-1));return{..._,...b,id:c,title:C,kind:b.kind||_.kind||"Lesson",difficulty:b.difficulty||_.difficulty||"",points:b.points??_.points??null,language:b.language||_.language||(l==null?void 0:l.language)||"text",challenge:b.challenge||b.summary||_.challenge||"",starter:b.starter||_.starter||"",console:_.console||(b.markdownSource?b.language==="python"?"Run Python to see your output. Checks use published examples only.":"Preview-only workspace. Use the production Playground for functional language runners and verified checks.":""),ready:!!(p!=null&&p[c])||typeof b.markdownSource=="string"&&b.starter!==void 0,isPublished:typeof b.markdownSource=="string"&&b.starter!==void 0}}function ra(l,c,p=Zf){var g;return((g=na(l,c,p))==null?void 0:g.title)||""}function Gl(l){const c=Array.isArray(l)?{lessons:l}:l||{},p=new Map,g=new Set,y=[],b=(C,k,E,N)=>{const I=String(C);let A=y.find(V=>V.id===I);return A||(A={id:I,title:String(k||"Lessons"),description:String(E||""),number:N,lessons:[]},y.push(A)),A},_=(C,k)=>{const E=Ja(k);!E||g.has(E)||(g.add(E),C.lessons.push(E),p.set(E,typeof k=="string"?{id:E}:{...k}))};return Array.isArray(c.units)?c.units.forEach((C,k)=>{const E=b(C.id||`unit-${k+1}`,Rs(C),C.description||C.summary,uc(C,k+1));(C.lessons||[]).forEach(N=>_(E,N))}):Array.isArray(c.lessons)&&c.lessons.forEach((C,k)=>{if(!C||!Ja(C))return;const E=C.unit||null,N=Ja(C).indexOf("/"),I=E!=null?N>=0?Ja(C).slice(0,N):`unit-${E}`:C.competency?`topic-${String(C.competency).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`:"lessons",A=C.unitName||C.competency||"Lessons",V=b(I,A,"",E??y.length+1);_(V,C)}),{units:y,lessonRecords:Object.fromEntries(p),lessons:y.flatMap(rs)}}const Rp=Gl(Hg),ns=[{id:"computer-science-1",units:Rp.units,lessonRecords:Rp.lessonRecords,language:"python",publishedContent:!0,slug:"computer-science-1",label:"Computer Science I",short:"Python",glyph:"py",color:"#6366F1",description:"Build your problem-solving toolkit with Python.",lessons:Rp.lessons,topics:["Variables","Strings","Formatting","Conditions","Lists"]},{id:"game-programming",units:Ls["game-programming"],slug:"game-programming",label:"Game Programming & Design",short:"C# · Unity",glyph:"C#",color:"#C052EB",description:"Make ideas playable with Unity and C#.",lessons:Ls["game-programming"].flatMap(l=>l.lessons),topics:["C# Basics","Rigidbody","Colliders"]},{id:"mobile-app-dev",units:Ls["mobile-app-dev"],slug:"mobile-app-web",label:"Mobile App & Web",short:"React · JavaScript",glyph:"js",color:"#27BBD2",description:"Create useful websites and mobile applications.",lessons:Ls["mobile-app-dev"].flatMap(l=>l.lessons),topics:["HTML","CSS","JavaScript","React"]},{id:"capstone",units:Ls.capstone,slug:"capstone",label:"Capstone",short:"Build for someone",glyph:"++",color:"#FF2D55",description:"Research a problem, prototype, and test a solution.",lessons:Ls.capstone.flatMap(l=>l.lessons),topics:["Research","Prototype","Pitch"]},{id:"uil",units:Ls.uil,slug:"uil",label:"UIL Computer Science",short:"Java",glyph:"jv",color:"#FF9F0A",description:"Trace Java, explain your reasoning, and practice.",lessons:Ls.uil.flatMap(l=>l.lessons),topics:["Java","Arrays","Written","Programming"]},{id:"test-prep",units:Xh,lessonRecords:Eg,slug:"test-prep",label:"Test Prep",short:"TSI · ASVAB · SAT · ACT",glyph:"ex",color:"#15B7A3",description:"College readiness and military aptitude study, all in one place.",lessons:Xh.flatMap(l=>l.lessons),topics:["TSI","ASVAB","SAT","ACT"]},{id:"tsi-math",units:Ls["tsi-math"],slug:"tsi-math",label:"TSI Math Advisory",short:"Math · Open access",glyph:"ma",color:"#30C85A",description:"Quantitative reasoning and algebra practice.",lessons:Ls["tsi-math"].flatMap(l=>l.lessons),topics:["Percents","Ratios","Equations"]}],hi=l=>ns.find(c=>c.id===l),sh=l=>{var c;return(c=hi(l))==null?void 0:c.label};function Rd(l){return typeof l=="string"&&/^#[0-9a-fA-F]{6}$/.test(l)}function Ug(l,c={}){const p=c&&typeof c=="object"?c[l.id]:null;return Rd(p)?p.toUpperCase():l.color}function qg(l){if(!Rd(l))return"#101012";const c=[1,3,5].map(g=>parseInt(l.slice(g,g+2),16)/255).map(g=>g<=.04045?g/12.92:((g+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722>.179?"#101012":"#FFFFFF"}function Kg(l,c,p=document.documentElement){for(const g of c){const y=`--student-course-color-${g.id}`,b=l&&typeof l=="object"?l[g.id]:null,_=`--student-course-ink-${g.id}`;Rd(b)?(p.style.setProperty(y,b),p.style.setProperty(_,qg(b))):(p.style.removeProperty(y),p.style.removeProperty(_))}}function cn(l,c){const[p,g]=Se.useState(()=>{try{const y=localStorage.getItem(l);return y===null?c:JSON.parse(y)}catch{return c}});return Se.useEffect(()=>{try{localStorage.setItem(l,JSON.stringify(p))}catch{}},[l,p]),[p,g]}function $g(l,c=[]){return Array.isArray(c)&&c.includes(l)}function em(l,c=[]){const p=rc(l),g=p.filter(y=>$g(y,c)).length;return{completed:g,total:p.length,percent:p.length?Math.round(g/p.length*100):0}}function Gg(l,c){const p=Array.isArray(l)?l:[];return p.includes(c)?p.filter(g=>g!==c):[...p,c]}const Yg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function Vg(l=new Date){const c=Object.fromEntries(Yg.formatToParts(l).filter(p=>p.type!=="literal").map(p=>[p.type,p.value]));return`${c.year}-${c.month}-${c.day}`}function Cd(l){return l?new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}):""}function vd(l,c=[]){return c.find(p=>p.id===l)||null}function Jg(l,c=[]){return c.find(p=>p.id===l)||null}function Id(l,{assignments:c=[],grades:p=[],completedLessons:g=[],today:y=Vg()}={}){const b=Jg(l,c),_=vd(l,p),C=l.startsWith("lesson:")&&g.includes(l.slice(7)),k=!!_||C;return b!=null&&b.dueDate?{state:k?"completed":b.dueDate<y?"overdue":"assigned",dueDate:b.dueDate,grade:_,completed:k}:{state:k?"completed":"unassigned",dueDate:null,grade:_,completed:k}}function Gp(l=[]){const c=l.reduce((g,y)=>g+y.earned,0),p=l.reduce((g,y)=>g+y.possible,0);return{earned:c,possible:p,percent:p?Math.round(100*c/p):null,count:l.length}}function Xg(l=[]){const c=new Map;return l.forEach(p=>{const g=_d(new Date(p.gradedAt+"T12:00:00Z"));c.has(g)||c.set(g,[]),c.get(g).push(p)}),[...c.entries()].map(([p,g])=>({week:p,...Gp(g)})).sort((p,g)=>g.week.localeCompare(p.week))}function Qg(l=[],c=[]){return[...new Set([...Array.isArray(l)?l:[],...c.filter(p=>p.id.startsWith("lesson:")).map(p=>p.id.slice(7))])]}const Zg="/playground/data",ey=new Set(["game-programming","mobile-app-dev","uil","tsi-math"]);function ty(l){if(typeof l!="string"||!l||l.startsWith("/")||l.includes("\\")||l.includes("?")||l.includes("#")||l.split("/").some(c=>c===".."||c==="."||c===""))throw new Error("Invalid curriculum resource path");return l}function cc(l,c){if(!ey.has(l))throw new Error("Unknown published course");return Zg+"/"+l+"/"+ty(c)}async function tr(l,c,p,g,y=!1){const b=await p(cc(l,c),{signal:g,cache:"no-store"});if(!b.ok)throw new Error("Published "+l+" resource unavailable: "+c);return y?b.json():b.text()}function oh(l,c,p,g,y){var b,_,C;return{...l,markdownSource:c,starter:p??"",language:g,markdownUrl:cc(y,l.markdown),kind:"Lesson",challenge:((b=l.exercise)==null?void 0:b.prompt)||l.summary||l.objective||l.title||"",points:l.points??null,cases:((_=l.exercise)==null?void 0:_.examples)||l.cases||[],hints:((C=l.exercise)==null?void 0:C.hints)||l.hints||[],mode:l.exercise?"function":"script"}}async function ny(l,c){const p="game-programming",g=await tr(p,"course.json",l,c,!0),y=await Promise.all(g.units.map(async b=>({id:b.id,number:b.number,title:b.title,description:b.summary||"",lessons:await Promise.all(b.lessons.map(async _=>{var E,N,I,A,V;const C=await tr(p,_.markdown,l,c);return{...oh(_,C,(E=_.exercise)==null?void 0:E.starter,"csharp",p),starter:((N=_.exercise)==null?void 0:N.starter)||"",kind:"Lesson",exerciseId:(I=_.exercise)==null?void 0:I.id,challenge:((A=_.exercise)==null?void 0:A.prompt)||_.title,unityTask:_.unityTask||[],markdownSource:C+((V=_.unityTask)!=null&&V.length?`

### Unity activity
`+_.unityTask.map(J=>"- "+J).join(`
`):"")}}))})));return{...Gl({units:y}),source:"published",projects:[]}}async function Qh(l,c,p,g){if(!c)return null;const y=Object.keys(c);if(!y.includes("index.html")||!y.includes("styles.css")||!y.includes("script.js")&&!y.includes("App.jsx"))throw Error("A Mobile App starterFiles entry requires index.html, styles.css and script.js (or App.jsx).");return Object.fromEntries(await Promise.all(y.map(async b=>[b,await tr(l,c[b],p,g)])))}async function ry(l,c){const p="mobile-app-dev",g=await tr(p,"course.json",l,c,!0),y=await Promise.all(g.lessons.map(async _=>{const[C,k,E]=await Promise.all([tr(p,_.markdown,l,c),_.starterFile?tr(p,_.starterFile,l,c):Promise.resolve(""),Qh(p,_.starterFiles,l,c)]);return{...oh(_,C,k,_.language==="react"?"jsx":_.language,p),...E?{starterFiles:E}:{}}})),b=await Promise.all((g.projects||[]).map(async _=>{const[C,k]=await Promise.all([_.starterFile?tr(p,_.starterFile,l,c):Promise.resolve(""),Qh(p,_.starterFiles,l,c)]),E=await Promise.all(_.steps.map(async N=>({...N,focus:N.focus||N.title,markdownSource:await tr(p,N.markdown,l,c),markdownUrl:cc(p,N.markdown)})));return{id:_.id,title:_.title,summary:_.summary,skills:_.skills||[],starter:C,language:"html",steps:E,...k?{starterFiles:k}:{}}}));return{...Gl({lessons:y}),projects:b,source:"published"}}async function iy(l,c){const g=await tr("uil","course.json",l,c,!0),y=await tr("uil",g.written.markdown,l,c),b=await tr("uil",g.written.practice,l,c,!0),C=(Array.isArray(b)?b:b.questions||[]).map((I,A)=>{const V=I.choices||I.options||[];return"### Practice question "+(A+1)+`

`+String(I.prompt||I.question||"")+`

`+V.map((J,W)=>String.fromCharCode(65+W)+". "+J).join(`

`)}).join(`

`),k={id:"written",title:"Written practice",language:"text",markdown:g.written.markdown,markdownSource:y+`

## Published practice questions

`+C,markdownUrl:cc("uil",g.written.markdown),starter:"",kind:"Practice",challenge:"Review Java reasoning and the published written-practice questions."},E=await Promise.all(g.lessons.map(async I=>{const[A,V]=await Promise.all([tr("uil",I.markdown,l,c),tr("uil",I.starterFile,l,c)]);return oh(I,A,V,"java","uil")}));return{...Gl({units:[{id:"written-preparation",number:1,title:"Written preparation",lessons:[k]},{id:"programming-practice",number:2,title:"Java programming practice",lessons:E}]}),source:"published",projects:[]}}async function sy(l,c){const p="tsi-math",[g,y,b,_]=await Promise.all([tr(p,"content/20-day-program.json",l,c,!0),tr(p,"content/strand-lessons-v1.json",l,c,!0),tr(p,"content/diagnostic-24-mc-v2.json",l,c,!0),tr(p,"content/math-locator-profiles.json",l,c,!0)]),C=(g.days||[]).map(E=>({id:E.id,title:E.title,challenge:"Day "+E.day+" · "+E.strand+" · 30 minutes",kind:"Planned session",language:"text",starter:"",ready:!1,status:"planned"})),k=await Promise.all((y.lessons||[]).map(async E=>{const[N,I]=await Promise.all([tr(p,E.student_lesson,l,c),tr(p,E.teacher_key,l,c,!0)]);return{id:E.id,title:E.title,kind:"Draft practice",status:"draft",language:"text",markdown:E.student_lesson,markdownUrl:cc(p,E.student_lesson),markdownSource:N,tsiKey:I,tsiStrandDraft:!0,starter:"",challenge:"Currently authored draft lesson · "+E.minutes+" minutes"}}));return{...Gl({units:[{id:"study-schedule",number:1,title:"20-day study schedule (in development)",lessons:C},{id:"authored-strands",number:2,title:"Available draft strand lessons",lessons:k}]}),source:"published-draft",projects:[],tsiDraft:!0,diagnosticItems:b.items||[],locatorProfiles:_.profiles||[]}}async function oy(l,{fetchImpl:c=fetch,signal:p}={}){if(l==="game-programming")return ny(c,p);if(l==="mobile-app-dev")return ry(c,p);if(l==="uil")return iy(c,p);if(l==="tsi-math")return sy(c,p);throw new Error("Unknown published course")}const ho=(...l)=>l.filter(Boolean).join(" "),ay=["temperature-alert","count-matches","sum-positives","score-line","attendance-percent","longest-win-streak","confidence-total","second-largest-distinct","target-pairs","competition-ranks"],ly="/playground/preview/",uy="/"+ly.replace(/^\/+|\/+$/g,""),vo=l=>`${uy}/#${l}`,ql=()=>vo("/"),Zh=()=>vo("/teacher"),cy=()=>vo("/admin"),dy=()=>vo("/journals"),py=()=>vo("/grades"),Ul=(l=null)=>vo(l?`/challenges/course/${encodeURIComponent(l)}`:"/challenges"),tm=l=>vo(`/challenges/${encodeURIComponent(l)}`);function nm(l,c,p=null){const g=typeof l=="string"?hi(l):l;if(!g||!c)return ql();const y=`/playgrounds/${encodeURIComponent(g.slug)}/projects/${encodeURIComponent(c)}`;return vo(p?`${y}/steps/${encodeURIComponent(p)}`:y)}function Od(l,c){const p=typeof l=="string"?hi(l):l;if(!p)return ql();const g=`/playgrounds/${encodeURIComponent(p.slug)}`;return vo(c?`${g}/lessons/${encodeURIComponent(c)}`:g)}function hd(l,c=ns){const b=((typeof window<"u"&&window.location.hash.slice(1)||"/").replace(/\/+$/,"")||"/").slice("".length)||"/";if(b==="/")return{page:"home"};if(b==="/teacher")return{page:"teacher"};if(b==="/admin")return{page:"admin"};if(b==="/journals")return{page:"journals"};if(b==="/grades")return{page:"grades"};if(b==="/challenges")return{page:"challenges",filterCourse:null};if(b.startsWith("/challenges/")){const N=b.split("/").filter(Boolean);try{if(N.length===3&&N[1]==="course"){const I=decodeURIComponent(N[2]);return hi(I)?{page:"challenges",filterCourse:I}:{page:"not-found"}}if(N.length===2){const I=decodeURIComponent(N[1]);return ay.includes(I)?{page:"challenge",challengeId:I}:{page:"not-found"}}}catch{return{page:"not-found"}}return{page:"not-found"}}const _=b.split("/").filter(Boolean);if(_[0]!=="playgrounds"||![2,4,6].includes(_.length))return{page:"not-found"};let C,k;try{C=decodeURIComponent(_[1]),k=_.length===4?decodeURIComponent(_[3]):void 0}catch{return{page:"not-found"}}const E=c.find(N=>N.slug===C);if(!E)return{page:"not-found"};if(_[2]==="projects"&&(_.length===4||_.length===6))try{const N=decodeURIComponent(_[3]),I=(E.projects||[]).find(V=>V.id===N),A=_.length===6?decodeURIComponent(_[5]):null;return!I||A&&(_[4]!=="steps"||!I.steps.some(V=>V.id===A))?{page:"not-found"}:{page:"course",courseId:E.id,lessonId:null,projectId:N,stepId:A}}catch{return{page:"not-found"}}return _.length!==2&&(_.length!==4||_[2]!=="lessons")?{page:"not-found"}:k&&!Bg(E,k)?{page:"not-found"}:{page:"course",courseId:E.id,lessonId:k??null}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rm=(...l)=>l.filter((c,p,g)=>!!c&&c.trim()!==""&&g.indexOf(c)===p).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=Se.forwardRef(({color:l="currentColor",size:c=24,strokeWidth:p=2,absoluteStrokeWidth:g,className:y="",children:b,iconNode:_,...C},k)=>Se.createElement("svg",{ref:k,...fy,width:c,height:c,stroke:l,strokeWidth:g?Number(p)*24/Number(c):p,className:rm("lucide",y),...C},[..._.map(([E,N])=>Se.createElement(E,N)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=(l,c)=>{const p=Se.forwardRef(({className:g,...y},b)=>Se.createElement(my,{ref:b,iconNode:c,className:rm(`lucide-${hy(l)}`,g),...y}));return p.displayName=`${l}`,p};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=_t("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=_t("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=_t("BookOpenCheck",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=_t("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=_t("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=_t("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=_t("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=_t("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=_t("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=_t("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=_t("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=_t("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=_t("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=_t("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=_t("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=_t("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=_t("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=_t("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=_t("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=_t("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=_t("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=_t("FlaskConical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=_t("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=_t("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=_t("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=_t("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=_t("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=_t("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=_t("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=_t("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=_t("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=_t("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=_t("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=_t("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=_t("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=_t("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=_t("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=_t("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=_t("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=_t("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=_t("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=_t("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=_t("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=_t("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=_t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function is({children:l,tone:c=""}){return u.jsx("span",{className:ho("chip",c&&`chip-${c}`),children:l})}function zy({theme:l,setTheme:c}){const p=l==="dark";return u.jsx("button",{className:"icon-button",title:p?"Switch to light mode":"Switch to dark mode","aria-label":"Toggle light and dark mode",onClick:()=>c(p?"light":"dark"),children:p?u.jsx(My,{size:17}):u.jsx(Ay,{size:17})})}function Fy({sidebarOpen:l,onToggleSidebar:c,onHome:p,theme:g,setTheme:y}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("button",{className:"icon-button nav-toggle",onClick:c,"aria-label":"Toggle navigation",children:l?u.jsx(Ry,{size:18}):u.jsx(Py,{size:18})}),u.jsxs("button",{className:"brand",onClick:p,children:[u.jsx("span",{className:"brand-logo",children:"{ }"}),u.jsx("strong",{children:"Ms. Whitby's Playground"}),u.jsx("span",{className:"brand-compact",children:"React Lab"})]}),u.jsx("div",{className:"topbar-spacer"}),u.jsx(is,{children:"LOCAL DESIGN LAB"}),u.jsx(zy,{theme:g,setTheme:y}),u.jsx("span",{className:"user-circle",children:"W"})]})})}const Wy=[["home","Home",Ey],["challenges","Challenge Bank",zd],["journals","Weekly journals",ah],["grades","Grades",jy],["teacher","Teacher dashboard",lh],["admin","Admin dashboard",dh]];function Hy({open:l,page:c,courseId:p,lessonId:g,setPage:y,openCourse:b,onOpenProject:_,availableCourses:C=ns,completedLessons:k=[],assignments:E=[],grades:N=[]}){var A;const I=c==="course"?C.find(V=>V.id===p):null;return u.jsxs("aside",{className:ho("main-sidebar",!l&&"collapsed"),"aria-label":"Playground navigation",children:[u.jsx("div",{className:"side-title",children:"EXPLORE"}),Wy.map(([V,J,W])=>u.jsxs("button",{className:ho("nav-item",(c===V||V==="challenges"&&c==="challenge")&&"active"),onClick:()=>y(V),title:J,children:[u.jsx(W,{size:19}),u.jsx("span",{children:J})]},V)),I&&u.jsxs("section",{className:"course-outline","data-course":I.id,"aria-label":`${I.label} outline`,children:[u.jsx("div",{className:"side-rule"}),u.jsx("div",{className:"side-title",children:"COURSE CONTENT"}),u.jsxs("button",{className:ho("outline-overview",!g&&"active"),onClick:()=>b(I.id),children:[u.jsx(Yl,{size:16}),u.jsx("span",{children:"Course overview"})]}),I.units.map((V,J)=>u.jsxs("details",{className:"outline-unit",open:rs(V).includes(g)||!g&&J===0?!0:void 0,children:[u.jsxs("summary",{children:[u.jsx("span",{className:"outline-unit-number",children:String(uc(V,J+1)).padStart(2,"0")}),u.jsx("span",{className:"outline-unit-title",title:Rs(V),children:Rs(V)}),u.jsx(om,{size:14})]}),u.jsx("div",{className:"outline-lesson-list",children:rs(V).map(W=>{const ae=ra(I,W),D=Id("lesson:"+W,{assignments:E,grades:N,completedLessons:k}),H=D.completed?"completed":D.dueDate?D.state:"",F=H==="completed"?"Completed":H==="overdue"?"Overdue":H==="assigned"?"Assigned":"";return u.jsxs("button",{onClick:()=>b(I.id,W),className:ho("outline-lesson",W===g&&"selected"),"aria-label":F?`${ae}, ${F.toLowerCase()}`:ae,title:F?`${ae} · ${F}`:ae,"aria-current":W===g?"page":void 0,children:[u.jsx("span",{className:"outline-lesson-name",children:ae}),F&&u.jsx("span",{className:`assignment-dot ${H}`,"aria-hidden":"true"})]},W)})})]},`${I.id}-${V.id}-${g||"overview"}`)),!!((A=I.projects)!=null&&A.length)&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"side-section-title",children:"PROJECTS"}),I.projects.map(V=>u.jsx("button",{type:"button",className:"outline-lesson",title:V.title,onClick:()=>_==null?void 0:_(I.id,V.id),children:u.jsx("span",{className:"outline-lesson-name",children:V.title})},V.id))]})]}),u.jsx("div",{className:"side-rule"}),u.jsx("div",{className:"side-title",children:"PLAYGROUNDS"}),C.filter(V=>V.id!=="tsi-math").map(V=>u.jsxs("button",{"data-course":V.id,className:ho("nav-item course-nav-item",c==="course"&&p===V.id&&"active"),onClick:()=>b(V.id),title:V.label,children:[u.jsx("span",{className:"nav-dot"}),u.jsx("span",{children:V.label})]},V.id)),u.jsxs("div",{className:"sidebar-bottom",children:[u.jsx(xy,{size:17}),u.jsx("span",{children:"Your learning spaces"})]})]})}function By(){return u.jsxs("footer",{className:"site-footer",children:[u.jsx("span",{children:"Ms. Whitby's Playground · React design lab"}),u.jsx("span",{children:"Fictional data · No authentication or backend · No real code execution"})]})}const Uy={"computer-science-1":Dd,"game-programming":Ty,"mobile-app-dev":Oy,uil:um,"tsi-math":sm,"test-prep":wy,capstone:Iy};function qy({course:l,onOpen:c,completedLessons:p=[]}){const{completed:g,total:y}=em(l,p),b=Uy[l.id]||Dd;function _(C){C.button!==0||C.metaKey||C.ctrlKey||C.shiftKey||C.altKey||(C.preventDefault(),c())}return u.jsxs("a",{className:"course-card","data-course":l.id,href:Od(l),onClick:_,children:[u.jsxs("div",{className:"course-card-heading",children:[u.jsx("span",{className:"course-glyph","aria-hidden":"true",children:u.jsx(b,{size:24,strokeWidth:2.2})}),u.jsxs("div",{children:[u.jsx("h2",{children:l.label}),u.jsx("p",{children:l.short})]})]}),u.jsx("p",{className:"course-description",children:l.description}),u.jsxs("div",{className:"course-card-footer",children:[u.jsxs("div",{className:"course-meta",children:[u.jsxs("span",{children:[y," ",y===1?"lesson":"lessons"]}),u.jsxs("span",{children:[g," completed"]})]}),u.jsx("progress",{className:"course-progress-track",value:g,max:Math.max(y,1),"aria-label":`${l.label}: ${g} of ${y} lessons completed`})]})]})}function Ky({onClick:l}){return u.jsxs("button",{className:"wide-shortcut",onClick:l,children:[u.jsx(lh,{size:18}),u.jsxs("span",{children:[u.jsx("strong",{children:"Teacher Dashboard preview"}),u.jsx("small",{children:"Section roster, expanded student assignments, account matching, and weekly points"})]}),u.jsx(ti,{size:18})]})}function $y({openCourse:l,openTeacher:c,openChallenges:p,availableCourses:g=ns,completedLessons:y=[]}){return u.jsxs("div",{className:"main-content",children:[u.jsxs("div",{className:"welcome",children:[u.jsx("div",{className:"eyebrow",children:"Your learning spaces"}),u.jsx("h1",{children:"Your playgrounds"}),u.jsx("p",{children:"Choose a course to continue learning. Complete lessons to fill your progress bars."})]}),u.jsx("div",{className:"course-card-grid",children:g.filter(b=>b.id!=="tsi-math").map(b=>u.jsx(qy,{course:b,completedLessons:y,onOpen:()=>l(b.id)},b.id))}),u.jsxs("button",{type:"button",className:"wide-shortcut challenge-bank-shortcut",onClick:p,children:[u.jsx(zd,{size:23}),u.jsxs("span",{children:[u.jsx("strong",{children:"Shared Challenge Bank"}),u.jsx("small",{children:"Practice one problem in Python, Java, JavaScript, or C#."})]}),u.jsx("span",{"aria-hidden":"true",children:"→"})]}),u.jsx(Ky,{onClick:c})]})}function Gy({course:l,openCourse:c,openProject:p,openChallenges:g,completedLessons:y=[],assignments:b=[],grades:_=[],courseColors:C={},onSetCourseColor:k,onResetCourseColor:E}){var J;const N=em(l,y),[I,A]=Se.useState(!1),V=Ug(l,C);return u.jsxs("div",{className:"course-landing",children:[u.jsxs("header",{className:"course-hero surface-card",children:[u.jsx("button",{type:"button",className:"icon-button course-color-settings",onClick:()=>A(W=>!W),"aria-label":I?"Close course color settings":`Change ${l.label} color`,title:I?"Close settings":"Course color","aria-expanded":I,"aria-controls":"course-color-controls",children:I?u.jsx(Wd,{size:17}):u.jsx(ch,{size:17})}),u.jsx("div",{className:"eyebrow",children:"Course overview"}),u.jsx("h1",{children:l.label}),u.jsx("p",{children:l.description}),u.jsxs("div",{className:"course-hero-stats",children:[u.jsxs("span",{children:[u.jsx(Ly,{size:16})," ",l.units.length," units"]}),u.jsxs("span",{children:[u.jsx(Yl,{size:16})," ",rc(l).length," lessons"]})]}),u.jsxs("button",{className:"btn primary",disabled:!rc(l).length,onClick:()=>c(l.id,rc(l)[0]),children:["Start learning ",u.jsx(ti,{size:16})]}),I&&u.jsxs("section",{id:"course-color-controls",className:"course-color-controls","aria-label":"Choose a course color",children:[u.jsxs("div",{className:"course-color-control-copy",children:[u.jsx("strong",{children:"Course color"}),u.jsx("p",{children:"Make this course your own. The color updates throughout your Playground."})]}),u.jsxs("label",{className:"course-color-picker",children:[u.jsx("input",{type:"color",value:V,onChange:W=>k==null?void 0:k(l.id,W.target.value),"aria-label":`Choose a color for ${l.label}`}),u.jsx("span",{children:"Choose color"})]}),u.jsx("button",{type:"button",className:"btn",onClick:()=>E==null?void 0:E(l.id),children:"Reset to default"}),u.jsx("button",{type:"button",className:"btn",onClick:()=>A(!1),children:"Done"})]})]}),l.publishedContent&&u.jsx("p",{className:"course-published-note",children:"Real published lessons are shown here. Practice in this preview does not change your grades."}),l.contentLoadingError&&u.jsxs("p",{className:"course-published-note",role:"alert",children:["Published course materials could not be loaded: ",l.contentLoadingError,". Sample lessons are not substituted."]}),!l.publishedContent&&!l.contentLoadingError&&u.jsx("p",{className:"course-published-note",children:"Course materials are not yet published here. This is a design preview, not a course to assign."}),l.tsiDraft&&u.jsx("p",{className:"course-published-note",children:"The 20-day TSI schedule is an outline; four strand lessons are drafts. Unwritten sessions are not available for practice."}),u.jsxs("p",{className:"course-landing-progress",children:[N.completed," of ",N.total," lessons ",l.publishedContent?"marked complete in preview":"completed"," · ",N.percent,"%"]}),u.jsx("div",{className:"course-landing-heading",children:u.jsxs("div",{children:[u.jsx("h2",{children:"Units & lessons"}),u.jsx("p",{children:"Choose a unit or jump directly into a lesson."})]})}),u.jsx("div",{className:"unit-card-grid",children:l.units.map((W,ae)=>u.jsxs("section",{className:"unit-card surface-card",children:[u.jsxs("header",{className:"unit-card-header",children:[u.jsxs("span",{className:"unit-badge",children:["UNIT ",String(uc(W,ae+1)).padStart(2,"0")]}),u.jsx("h3",{title:Rs(W),children:Rs(W)}),W.description&&u.jsx("p",{children:W.description})]}),u.jsx("div",{className:"unit-lessons",children:rs(W).map((D,H)=>u.jsxs("a",{className:"unit-lesson-link",href:Od(l,D),onClick:F=>{F.button!==0||F.metaKey||F.ctrlKey||F.shiftKey||F.altKey||(F.preventDefault(),c(l.id,D))},children:[u.jsx("span",{className:"unit-lesson-index",children:H+1}),u.jsxs("span",{className:"unit-lesson-label",children:[u.jsx("strong",{title:ra(l,D),children:ra(l,D)}),(()=>{var q,Y;const F=Id("lesson:"+D,{assignments:b,grades:_,completedLessons:y});return F.dueDate||F.completed?u.jsxs("span",{className:"unit-assignment-meta",children:[u.jsxs("span",{className:`assignment-status ${F.state}`,children:[u.jsx("span",{className:`assignment-dot ${F.state}`,"aria-hidden":"true"}),F.completed?"Completed":F.state==="overdue"?"Overdue":"Assigned"]}),F.dueDate&&u.jsxs("small",{children:["Due ",Cd(F.dueDate)]}),F.grade&&u.jsxs("small",{children:[F.grade.earned," / ",F.grade.possible," pts"]})]}):u.jsxs("small",{children:[(q=na(l,D))==null?void 0:q.kind,(Y=na(l,D))!=null&&Y.difficulty?` · ${na(l,D).difficulty}`:""]})})()]}),u.jsx(Yp,{size:16})]},D))})]},W.id))}),!!((J=l.projects)!=null&&J.length)&&u.jsxs("section",{className:"course-projects surface-card",children:[u.jsx("div",{className:"eyebrow",children:"Published guided projects"}),u.jsx("h2",{children:"Projects"}),u.jsx("div",{className:"unit-card-grid",children:l.projects.map(W=>u.jsxs("a",{className:"unit-lesson-link",href:nm(l,W.id),onClick:ae=>{ae.button!==0||ae.metaKey||ae.ctrlKey||ae.shiftKey||ae.altKey||(ae.preventDefault(),p(l.id,W.id))},children:[u.jsxs("span",{className:"unit-lesson-label",children:[u.jsx("strong",{children:W.title}),u.jsxs("small",{children:[W.steps.length," steps · ",W.summary]})]}),u.jsx(Yp,{size:16})]},W.id))})]}),u.jsxs("section",{className:"course-challenges-shelf surface-card",children:[u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Shared practice library"}),u.jsx("h2",{children:"Related programming challenges"}),u.jsx("p",{children:"Browse reusable problems suited to this course. Review each challenge's prerequisites before recommending it to students."})]}),u.jsxs("a",{href:Ul(l.id),className:"btn",onClick:W=>{W.button!==0||W.metaKey||W.ctrlKey||W.shiftKey||W.altKey||(W.preventDefault(),g(l.id))},children:[u.jsx(zd,{size:16})," Browse challenges"]})]})]})}function Yy({selectedTopic:l,attempts:c,setAttempts:p,openCourse:g,completedLessons:y,onToggleLessonComplete:b}){const{track:_,topic:C}=l,[k,E]=Se.useState(0),[N,I]=Se.useState(null),[A,V]=Se.useState(!1),J=C.questions[k],W=C.questions.filter(q=>c[q.id]!==void 0).length,ae=y.includes(C.id);function D(q){E(q),I(null),V(!1)}function H(){N===null||A||(V(!0),p(q=>({...q,[J.id]:{chosen:N,correct:N===J.correct}})))}const F=N===J.correct;return u.jsxs("section",{className:"test-prep-practice",children:[u.jsxs("button",{type:"button",className:"test-prep-back",onClick:()=>g("test-prep"),children:[u.jsx(im,{size:16})," All Test Prep"]}),u.jsxs("div",{className:"surface-card test-prep-practice-header",children:[u.jsxs("div",{className:"eyebrow",children:[_.title," / ",C.title]}),u.jsx("h1",{children:C.title}),u.jsx("p",{children:C.description}),u.jsx("p",{className:"muted",children:"Original sample questions only. Your practice results are not official exam scores."}),u.jsxs("div",{className:"test-prep-practice-meta",children:[u.jsxs("span",{children:[W," of ",C.questions.length," attempted"]}),ae&&u.jsxs("span",{className:"test-prep-complete",children:[u.jsx(sc,{size:16})," Practiced"]})]})]}),u.jsxs("div",{className:"surface-card test-prep-question",children:[u.jsxs("div",{className:"test-prep-question-top",children:[u.jsxs("strong",{children:["Question ",k+1," of ",C.questions.length]}),u.jsx("span",{className:"muted",children:"Practice / multiple choice"})]}),u.jsx("h2",{children:J.prompt}),u.jsxs("fieldset",{className:"test-prep-options",disabled:A,children:[u.jsx("legend",{className:"sr-only",children:"Choose your answer"}),J.options.map((q,Y)=>u.jsxs("label",{className:"test-prep-option "+(N===Y?"selected ":"")+(A&&Y===J.correct?"correct":""),children:[u.jsx("input",{type:"radio",name:J.id,checked:N===Y,onChange:()=>I(Y)}),u.jsx("span",{className:"test-prep-letter",children:String.fromCharCode(65+Y)}),u.jsx("span",{children:q})]},Y))]}),A&&u.jsxs("div",{className:"test-prep-feedback "+(F?"is-correct":"is-incorrect"),role:"status",children:[u.jsx("strong",{children:F?"Correct!":"Review this answer"}),u.jsx("p",{children:J.explanation})]}),u.jsxs("div",{className:"test-prep-actions",children:[u.jsx("button",{type:"button",className:"btn primary",disabled:N===null||A,onClick:H,children:"Check answer"}),u.jsxs("button",{type:"button",className:"btn",onClick:()=>{I(null),V(!1)},children:[u.jsx(Fd,{size:14})," Try again"]})]})]}),u.jsxs("nav",{className:"test-prep-topic-nav","aria-label":"Sample question navigation",children:[k>0?u.jsxs("button",{type:"button",className:"btn",onClick:()=>D(k-1),children:[u.jsx(Md,{size:16})," Previous"]}):u.jsx("span",{}),k<C.questions.length-1?u.jsxs("button",{type:"button",className:"btn",onClick:()=>D(k+1),children:["Next question ",u.jsx(ti,{size:16})]}):u.jsx("span",{})]}),W===C.questions.length&&!ae&&u.jsxs("div",{className:"test-prep-completion surface-card",children:[u.jsx("span",{children:"You've attempted every sample in this subject."}),u.jsx("button",{type:"button",className:"btn primary",onClick:()=>b==null?void 0:b(C.id),children:"Mark topic practiced"})]}),u.jsxs("p",{className:"test-prep-official",children:["Need more questions? ",u.jsxs("a",{href:_.reference,target:"_blank",rel:"noreferrer",children:["Visit official ",_.title," preparation resources ",u.jsx(am,{size:13})]})]})]})}function Vy({lessonId:l,openCourse:c,completedLessons:p=[],onToggleLessonComplete:g}){const[y,b]=cn("designlab:test-prep-sample-answers",{}),_=l?Lg(l):null;return u.jsx("div",{className:"course-layout integrated-course","data-course":"test-prep",children:u.jsxs("div",{className:"course-main",children:[u.jsxs("div",{className:"course-breadcrumb",children:[u.jsx("button",{type:"button",onClick:()=>c(null),children:"All playgrounds"}),u.jsx(ti,{size:14}),l?u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",onClick:()=>c("test-prep"),children:"Test Prep"}),u.jsx(ti,{size:14}),u.jsx("span",{children:_==null?void 0:_.topic.title})]}):u.jsx("span",{children:"Test Prep"})]}),_?u.jsx(Yy,{selectedTopic:_,attempts:y,setAttempts:b,openCourse:c,completedLessons:p,onToggleLessonComplete:g},l):u.jsxs("div",{className:"test-prep-hub",children:[u.jsxs("header",{className:"surface-card test-prep-hero",children:[u.jsx("div",{className:"eyebrow",children:"Test Prep / Self-study"}),u.jsx("h1",{children:"Choose a test to prepare for"}),u.jsx("p",{children:"Study in short sessions, answer original sample questions, and review the reasoning behind each answer. No class code required."}),u.jsx("p",{className:"muted",children:"This is a preview. Practice history stays in this browser. No scores are sent to a teacher, and no official exam scores are predicted."})]}),u.jsxs("div",{className:"test-prep-exams",children:[u.jsxs("section",{className:"surface-card test-prep-exam","data-exam":"tsi",children:[u.jsx("div",{className:"test-prep-exam-icon",children:u.jsx(ef,{size:23})}),u.jsx("div",{className:"eyebrow",children:"College readiness"}),u.jsx("h2",{children:"TSI Math"}),u.jsx("p",{children:"Continue the existing TSIA2 math curriculum and diagnostic work without changing old lesson links."}),u.jsx("p",{className:"test-prep-exam-meta",children:"Existing course / classroom study"}),u.jsxs("button",{type:"button",className:"btn primary",onClick:()=>c("tsi-math"),children:["Open TSI Math ",u.jsx(ti,{size:16})]})]}),lc.map(C=>{const k=C.topics.reduce((N,I)=>N+I.questions.length,0),E=C.topics.reduce((N,I)=>N+I.questions.filter(A=>y[A.id]!==void 0).length,0);return u.jsxs("section",{className:"surface-card test-prep-exam","data-exam":C.id,children:[u.jsx("div",{className:"test-prep-exam-icon",children:C.id==="act"?u.jsx(Cy,{size:23}):u.jsx(ef,{size:23})}),u.jsx("div",{className:"eyebrow",children:C.subtitle}),u.jsx("h2",{children:C.title}),u.jsx("p",{children:C.description}),u.jsxs("p",{className:"test-prep-exam-meta",children:[C.topics.length," subjects · ",E,"/",k," samples attempted"]}),u.jsx("progress",{className:"course-progress-track",value:E,max:k,"aria-label":C.title+" sample practice progress"}),u.jsx("div",{className:"test-prep-topic-links",children:C.topics.map(N=>u.jsxs("button",{type:"button",onClick:()=>c("test-prep",N.id),children:[u.jsx("span",{children:N.title}),u.jsx(ti,{size:15})]},N.id))}),u.jsxs("button",{type:"button",className:"btn primary",onClick:()=>c("test-prep",C.topics[0].id),children:["Start ",C.title," samples ",u.jsx(ti,{size:16})]})]},C.id)})]})]})]})})}function dc({axis:l,onDrag:c}){const p=Se.useRef(!1),g=l==="columns",y=()=>p.current=!1;return u.jsx("div",{className:ho("splitter",g?"column-split":"row-split"),role:"separator","aria-label":g?"Resize instructions and editor":"Resize editor and console","aria-orientation":g?"vertical":"horizontal",tabIndex:0,onPointerDown:b=>{b.preventDefault(),b.currentTarget.setPointerCapture(b.pointerId),p.current=!0},onPointerMove:b=>{p.current&&b.buttons===1&&c(b)},onPointerUp:y,onLostPointerCapture:y,children:u.jsx("span",{})})}function ph({eyebrow:l,children:c,actions:p}){return u.jsxs("div",{className:"page-title-row",children:[u.jsxs("div",{children:[l&&u.jsx("div",{className:"eyebrow",children:l}),u.jsx("h1",{children:c})]}),p&&u.jsx("div",{className:"page-actions",children:p})]})}function Vu({task:l,unit:c,unitNumber:p,isTsi:g,isCompleted:y=!1,assignment:b=null,grade:_=null,onToggleCompleted:C}){const k=(b==null?void 0:b.id)||(_==null?void 0:_.id)||"",E=Id(k,{assignments:b?[b]:[],grades:_?[_]:[],completedLessons:y?[k.replace(/^lesson:/,"")]:[]});return u.jsxs("div",{className:"lesson-header",children:[u.jsxs("div",{className:"eyebrow",children:["Unit ",uc(c,p)," · ",Rs(c)," ",u.jsx("span",{className:"dot",children:"·"})," ",l.kind]}),u.jsx(ph,{actions:u.jsxs("div",{className:"lesson-heading-actions",children:[!g&&(l==null?void 0:l.points)!=null&&u.jsx("span",{className:"points-tag",children:_?`${_.earned} / ${_.possible} pts`:`${l.points} points available`}),_?u.jsxs("span",{className:"btn completion-toggle completed",children:[u.jsx(sc,{size:16})," Completed"]}):u.jsxs("button",{type:"button",className:`btn completion-toggle ${y?"completed":""}`,"aria-pressed":y,onClick:C,children:[y?u.jsx(sc,{size:16}):u.jsx(by,{size:16}),y?"Completed":"Mark complete"]})]}),children:l.title}),u.jsx("p",{children:l.challenge}),(b==null?void 0:b.dueDate)&&u.jsxs("div",{className:"lesson-assignment-info",children:[u.jsx("span",{className:`assignment-status ${E.state}`,children:E.state==="completed"?"Completed":E.state==="overdue"?"Overdue":"Assigned"}),u.jsxs("span",{children:["Due ",Cd(b.dueDate)]})]})]})}const hh={"tsi-ratios":{prompt:"A recipe uses 3 cups of water for every 5 cups of rice. How many cups of water are needed for 15 cups of rice?",options:["5 cups","9 cups","12 cups","25 cups"],correct:1,explanation:"15 is three times 5, so multiply the 3 cups of water by 3 to get 9."},"tsi-percents":{prompt:"A $60 backpack is discounted by 25%. What is the sale price?",options:["$15","$35","$45","$75"],correct:2,explanation:"25% of $60 is $15; subtract $15 from $60 to get $45."},"tsi-equations":{prompt:"Solve for x: 4x + 6 = 22.",options:["2","4","6","7"],correct:1,explanation:"Subtract 6 from both sides to get 4x = 16, then divide by 4: x = 4."},"tsi-slope":{prompt:"A table gives points (1, 3), (2, 5), and (3, 7). What is the slope?",options:["1","2","3","4"],correct:1,explanation:"As x goes up by 1, y goes up by 2, so slope = 2/1 = 2."}},Jy=`# Find an Inefficiency

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
`;function fh(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var el=fh();function cm(l){el=l}var ic={exec:()=>null};function Gt(l,c=""){let p=typeof l=="string"?l:l.source;const g={replace:(y,b)=>{let _=typeof b=="string"?b:b.source;return _=_.replace(Hr.caret,"$1"),p=p.replace(y,_),g},getRegex:()=>new RegExp(p,c)};return g}var Hr={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:l=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}#`),htmlBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}<(?:[a-z].*>|!--)`,"i")},Sv=/^(?:[ \t]*(?:\n|$))+/,_v=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Cv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,pc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Tv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,mh=/(?:[*+-]|\d{1,9}[.)])/,dm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,pm=Gt(dm).replace(/bull/g,mh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),jv=Gt(dm).replace(/bull/g,mh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),gh=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Nv=/^[^\n]+/,yh=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Ev=Gt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",yh).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Lv=Gt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,mh).getRegex(),Hd="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",vh=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Pv=Gt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",vh).replace("tag",Hd).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),hm=Gt(gh).replace("hr",pc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hd).getRegex(),Av=Gt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",hm).getRegex(),xh={blockquote:Av,code:_v,def:Ev,fences:Cv,heading:Tv,hr:pc,html:Pv,lheading:pm,list:Lv,newline:Sv,paragraph:hm,table:ic,text:Nv},nf=Gt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",pc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hd).getRegex(),Rv={...xh,lheading:jv,table:nf,paragraph:Gt(gh).replace("hr",pc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",nf).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hd).getRegex()},Iv={...xh,html:Gt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",vh).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ic,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Gt(gh).replace("hr",pc).replace("heading",` *#{1,6} *[^
]`).replace("lheading",pm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ov=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Mv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,fm=/^( {2,}|\\)\n(?!\s*$)/,Dv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Bd=/[\p{P}\p{S}]/u,bh=/[\s\p{P}\p{S}]/u,mm=/[^\s\p{P}\p{S}]/u,zv=Gt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,bh).getRegex(),gm=/(?!~)[\p{P}\p{S}]/u,Fv=/(?!~)[\s\p{P}\p{S}]/u,Wv=/(?:[^\s\p{P}\p{S}]|~)/u,Hv=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ym=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Bv=Gt(ym,"u").replace(/punct/g,Bd).getRegex(),Uv=Gt(ym,"u").replace(/punct/g,gm).getRegex(),vm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",qv=Gt(vm,"gu").replace(/notPunctSpace/g,mm).replace(/punctSpace/g,bh).replace(/punct/g,Bd).getRegex(),Kv=Gt(vm,"gu").replace(/notPunctSpace/g,Wv).replace(/punctSpace/g,Fv).replace(/punct/g,gm).getRegex(),$v=Gt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,mm).replace(/punctSpace/g,bh).replace(/punct/g,Bd).getRegex(),Gv=Gt(/\\(punct)/,"gu").replace(/punct/g,Bd).getRegex(),Yv=Gt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Vv=Gt(vh).replace("(?:-->|$)","-->").getRegex(),Jv=Gt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Vv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),jd=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Xv=Gt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",jd).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),xm=Gt(/^!?\[(label)\]\[(ref)\]/).replace("label",jd).replace("ref",yh).getRegex(),bm=Gt(/^!?\[(ref)\](?:\[\])?/).replace("ref",yh).getRegex(),Qv=Gt("reflink|nolink(?!\\()","g").replace("reflink",xm).replace("nolink",bm).getRegex(),wh={_backpedal:ic,anyPunctuation:Gv,autolink:Yv,blockSkip:Hv,br:fm,code:Mv,del:ic,emStrongLDelim:Bv,emStrongRDelimAst:qv,emStrongRDelimUnd:$v,escape:Ov,link:Xv,nolink:bm,punctuation:zv,reflink:xm,reflinkSearch:Qv,tag:Jv,text:Dv,url:ic},Zv={...wh,link:Gt(/^!?\[(label)\]\((.*?)\)/).replace("label",jd).getRegex(),reflink:Gt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",jd).getRegex()},Vp={...wh,emStrongRDelimAst:Kv,emStrongLDelim:Uv,url:Gt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},ex={...Vp,br:Gt(fm).replace("{2,}","*").getRegex(),text:Gt(Vp.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},fd={normal:xh,gfm:Rv,pedantic:Iv},Ju={normal:wh,gfm:Vp,breaks:ex,pedantic:Zv},tx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},rf=l=>tx[l];function Ps(l,c){if(c){if(Hr.escapeTest.test(l))return l.replace(Hr.escapeReplace,rf)}else if(Hr.escapeTestNoEncode.test(l))return l.replace(Hr.escapeReplaceNoEncode,rf);return l}function sf(l){try{l=encodeURI(l).replace(Hr.percentDecode,"%")}catch{return null}return l}function of(l,c){var b;const p=l.replace(Hr.findPipe,(_,C,k)=>{let E=!1,N=C;for(;--N>=0&&k[N]==="\\";)E=!E;return E?"|":" |"}),g=p.split(Hr.splitPipe);let y=0;if(g[0].trim()||g.shift(),g.length>0&&!((b=g.at(-1))!=null&&b.trim())&&g.pop(),c)if(g.length>c)g.splice(c);else for(;g.length<c;)g.push("");for(;y<g.length;y++)g[y]=g[y].trim().replace(Hr.slashPipe,"|");return g}function Xu(l,c,p){const g=l.length;if(g===0)return"";let y=0;for(;y<g&&l.charAt(g-y-1)===c;)y++;return l.slice(0,g-y)}function nx(l,c){if(l.indexOf(c[1])===-1)return-1;let p=0;for(let g=0;g<l.length;g++)if(l[g]==="\\")g++;else if(l[g]===c[0])p++;else if(l[g]===c[1]&&(p--,p<0))return g;return p>0?-2:-1}function af(l,c,p,g,y){const b=c.href,_=c.title||null,C=l[1].replace(y.other.outputLinkReplace,"$1");g.state.inLink=!0;const k={type:l[0].charAt(0)==="!"?"image":"link",raw:p,href:b,title:_,text:C,tokens:g.inlineTokens(C)};return g.state.inLink=!1,k}function rx(l,c,p){const g=l.match(p.other.indentCodeCompensation);if(g===null)return c;const y=g[1];return c.split(`
`).map(b=>{const _=b.match(p.other.beginningSpace);if(_===null)return b;const[C]=_;return C.length>=y.length?b.slice(y.length):b}).join(`
`)}var Nd=class{constructor(l){an(this,"options");an(this,"rules");an(this,"lexer");this.options=l||el}space(l){const c=this.rules.block.newline.exec(l);if(c&&c[0].length>0)return{type:"space",raw:c[0]}}code(l){const c=this.rules.block.code.exec(l);if(c){const p=c[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:c[0],codeBlockStyle:"indented",text:this.options.pedantic?p:Xu(p,`
`)}}}fences(l){const c=this.rules.block.fences.exec(l);if(c){const p=c[0],g=rx(p,c[3]||"",this.rules);return{type:"code",raw:p,lang:c[2]?c[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):c[2],text:g}}}heading(l){const c=this.rules.block.heading.exec(l);if(c){let p=c[2].trim();if(this.rules.other.endingHash.test(p)){const g=Xu(p,"#");(this.options.pedantic||!g||this.rules.other.endingSpaceChar.test(g))&&(p=g.trim())}return{type:"heading",raw:c[0],depth:c[1].length,text:p,tokens:this.lexer.inline(p)}}}hr(l){const c=this.rules.block.hr.exec(l);if(c)return{type:"hr",raw:Xu(c[0],`
`)}}blockquote(l){const c=this.rules.block.blockquote.exec(l);if(c){let p=Xu(c[0],`
`).split(`
`),g="",y="";const b=[];for(;p.length>0;){let _=!1;const C=[];let k;for(k=0;k<p.length;k++)if(this.rules.other.blockquoteStart.test(p[k]))C.push(p[k]),_=!0;else if(!_)C.push(p[k]);else break;p=p.slice(k);const E=C.join(`
`),N=E.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");g=g?`${g}
${E}`:E,y=y?`${y}
${N}`:N;const I=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(N,b,!0),this.lexer.state.top=I,p.length===0)break;const A=b.at(-1);if((A==null?void 0:A.type)==="code")break;if((A==null?void 0:A.type)==="blockquote"){const V=A,J=V.raw+`
`+p.join(`
`),W=this.blockquote(J);b[b.length-1]=W,g=g.substring(0,g.length-V.raw.length)+W.raw,y=y.substring(0,y.length-V.text.length)+W.text;break}else if((A==null?void 0:A.type)==="list"){const V=A,J=V.raw+`
`+p.join(`
`),W=this.list(J);b[b.length-1]=W,g=g.substring(0,g.length-A.raw.length)+W.raw,y=y.substring(0,y.length-V.raw.length)+W.raw,p=J.substring(b.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:g,tokens:b,text:y}}}list(l){let c=this.rules.block.list.exec(l);if(c){let p=c[1].trim();const g=p.length>1,y={type:"list",raw:"",ordered:g,start:g?+p.slice(0,-1):"",loose:!1,items:[]};p=g?`\\d{1,9}\\${p.slice(-1)}`:`\\${p}`,this.options.pedantic&&(p=g?p:"[*+-]");const b=this.rules.other.listItemRegex(p);let _=!1;for(;l;){let k=!1,E="",N="";if(!(c=b.exec(l))||this.rules.block.hr.test(l))break;E=c[0],l=l.substring(E.length);let I=c[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,D=>" ".repeat(3*D.length)),A=l.split(`
`,1)[0],V=!I.trim(),J=0;if(this.options.pedantic?(J=2,N=I.trimStart()):V?J=c[1].length+1:(J=c[2].search(this.rules.other.nonSpaceChar),J=J>4?1:J,N=I.slice(J),J+=c[1].length),V&&this.rules.other.blankLine.test(A)&&(E+=A+`
`,l=l.substring(A.length+1),k=!0),!k){const D=this.rules.other.nextBulletRegex(J),H=this.rules.other.hrRegex(J),F=this.rules.other.fencesBeginRegex(J),q=this.rules.other.headingBeginRegex(J),Y=this.rules.other.htmlBeginRegex(J);for(;l;){const ge=l.split(`
`,1)[0];let le;if(A=ge,this.options.pedantic?(A=A.replace(this.rules.other.listReplaceNesting,"  "),le=A):le=A.replace(this.rules.other.tabCharGlobal,"    "),F.test(A)||q.test(A)||Y.test(A)||D.test(A)||H.test(A))break;if(le.search(this.rules.other.nonSpaceChar)>=J||!A.trim())N+=`
`+le.slice(J);else{if(V||I.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||F.test(I)||q.test(I)||H.test(I))break;N+=`
`+A}!V&&!A.trim()&&(V=!0),E+=ge+`
`,l=l.substring(ge.length+1),I=le.slice(J)}}y.loose||(_?y.loose=!0:this.rules.other.doubleBlankLine.test(E)&&(_=!0));let W=null,ae;this.options.gfm&&(W=this.rules.other.listIsTask.exec(N),W&&(ae=W[0]!=="[ ] ",N=N.replace(this.rules.other.listReplaceTask,""))),y.items.push({type:"list_item",raw:E,task:!!W,checked:ae,loose:!1,text:N,tokens:[]}),y.raw+=E}const C=y.items.at(-1);if(C)C.raw=C.raw.trimEnd(),C.text=C.text.trimEnd();else return;y.raw=y.raw.trimEnd();for(let k=0;k<y.items.length;k++)if(this.lexer.state.top=!1,y.items[k].tokens=this.lexer.blockTokens(y.items[k].text,[]),!y.loose){const E=y.items[k].tokens.filter(I=>I.type==="space"),N=E.length>0&&E.some(I=>this.rules.other.anyLine.test(I.raw));y.loose=N}if(y.loose)for(let k=0;k<y.items.length;k++)y.items[k].loose=!0;return y}}html(l){const c=this.rules.block.html.exec(l);if(c)return{type:"html",block:!0,raw:c[0],pre:c[1]==="pre"||c[1]==="script"||c[1]==="style",text:c[0]}}def(l){const c=this.rules.block.def.exec(l);if(c){const p=c[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),g=c[2]?c[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",y=c[3]?c[3].substring(1,c[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):c[3];return{type:"def",tag:p,raw:c[0],href:g,title:y}}}table(l){var _;const c=this.rules.block.table.exec(l);if(!c||!this.rules.other.tableDelimiter.test(c[2]))return;const p=of(c[1]),g=c[2].replace(this.rules.other.tableAlignChars,"").split("|"),y=(_=c[3])!=null&&_.trim()?c[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],b={type:"table",raw:c[0],header:[],align:[],rows:[]};if(p.length===g.length){for(const C of g)this.rules.other.tableAlignRight.test(C)?b.align.push("right"):this.rules.other.tableAlignCenter.test(C)?b.align.push("center"):this.rules.other.tableAlignLeft.test(C)?b.align.push("left"):b.align.push(null);for(let C=0;C<p.length;C++)b.header.push({text:p[C],tokens:this.lexer.inline(p[C]),header:!0,align:b.align[C]});for(const C of y)b.rows.push(of(C,b.header.length).map((k,E)=>({text:k,tokens:this.lexer.inline(k),header:!1,align:b.align[E]})));return b}}lheading(l){const c=this.rules.block.lheading.exec(l);if(c)return{type:"heading",raw:c[0],depth:c[2].charAt(0)==="="?1:2,text:c[1],tokens:this.lexer.inline(c[1])}}paragraph(l){const c=this.rules.block.paragraph.exec(l);if(c){const p=c[1].charAt(c[1].length-1)===`
`?c[1].slice(0,-1):c[1];return{type:"paragraph",raw:c[0],text:p,tokens:this.lexer.inline(p)}}}text(l){const c=this.rules.block.text.exec(l);if(c)return{type:"text",raw:c[0],text:c[0],tokens:this.lexer.inline(c[0])}}escape(l){const c=this.rules.inline.escape.exec(l);if(c)return{type:"escape",raw:c[0],text:c[1]}}tag(l){const c=this.rules.inline.tag.exec(l);if(c)return!this.lexer.state.inLink&&this.rules.other.startATag.test(c[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(c[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(c[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(c[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:c[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:c[0]}}link(l){const c=this.rules.inline.link.exec(l);if(c){const p=c[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(p)){if(!this.rules.other.endAngleBracket.test(p))return;const b=Xu(p.slice(0,-1),"\\");if((p.length-b.length)%2===0)return}else{const b=nx(c[2],"()");if(b===-2)return;if(b>-1){const C=(c[0].indexOf("!")===0?5:4)+c[1].length+b;c[2]=c[2].substring(0,b),c[0]=c[0].substring(0,C).trim(),c[3]=""}}let g=c[2],y="";if(this.options.pedantic){const b=this.rules.other.pedanticHrefTitle.exec(g);b&&(g=b[1],y=b[3])}else y=c[3]?c[3].slice(1,-1):"";return g=g.trim(),this.rules.other.startAngleBracket.test(g)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(p)?g=g.slice(1):g=g.slice(1,-1)),af(c,{href:g&&g.replace(this.rules.inline.anyPunctuation,"$1"),title:y&&y.replace(this.rules.inline.anyPunctuation,"$1")},c[0],this.lexer,this.rules)}}reflink(l,c){let p;if((p=this.rules.inline.reflink.exec(l))||(p=this.rules.inline.nolink.exec(l))){const g=(p[2]||p[1]).replace(this.rules.other.multipleSpaceGlobal," "),y=c[g.toLowerCase()];if(!y){const b=p[0].charAt(0);return{type:"text",raw:b,text:b}}return af(p,y,p[0],this.lexer,this.rules)}}emStrong(l,c,p=""){let g=this.rules.inline.emStrongLDelim.exec(l);if(!g||g[3]&&p.match(this.rules.other.unicodeAlphaNumeric))return;if(!(g[1]||g[2]||"")||!p||this.rules.inline.punctuation.exec(p)){const b=[...g[0]].length-1;let _,C,k=b,E=0;const N=g[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(N.lastIndex=0,c=c.slice(-1*l.length+b);(g=N.exec(c))!=null;){if(_=g[1]||g[2]||g[3]||g[4]||g[5]||g[6],!_)continue;if(C=[..._].length,g[3]||g[4]){k+=C;continue}else if((g[5]||g[6])&&b%3&&!((b+C)%3)){E+=C;continue}if(k-=C,k>0)continue;C=Math.min(C,C+k+E);const I=[...g[0]][0].length,A=l.slice(0,b+g.index+I+C);if(Math.min(b,C)%2){const J=A.slice(1,-1);return{type:"em",raw:A,text:J,tokens:this.lexer.inlineTokens(J)}}const V=A.slice(2,-2);return{type:"strong",raw:A,text:V,tokens:this.lexer.inlineTokens(V)}}}}codespan(l){const c=this.rules.inline.code.exec(l);if(c){let p=c[2].replace(this.rules.other.newLineCharGlobal," ");const g=this.rules.other.nonSpaceChar.test(p),y=this.rules.other.startingSpaceChar.test(p)&&this.rules.other.endingSpaceChar.test(p);return g&&y&&(p=p.substring(1,p.length-1)),{type:"codespan",raw:c[0],text:p}}}br(l){const c=this.rules.inline.br.exec(l);if(c)return{type:"br",raw:c[0]}}del(l){const c=this.rules.inline.del.exec(l);if(c)return{type:"del",raw:c[0],text:c[2],tokens:this.lexer.inlineTokens(c[2])}}autolink(l){const c=this.rules.inline.autolink.exec(l);if(c){let p,g;return c[2]==="@"?(p=c[1],g="mailto:"+p):(p=c[1],g=p),{type:"link",raw:c[0],text:p,href:g,tokens:[{type:"text",raw:p,text:p}]}}}url(l){var p;let c;if(c=this.rules.inline.url.exec(l)){let g,y;if(c[2]==="@")g=c[0],y="mailto:"+g;else{let b;do b=c[0],c[0]=((p=this.rules.inline._backpedal.exec(c[0]))==null?void 0:p[0])??"";while(b!==c[0]);g=c[0],c[1]==="www."?y="http://"+c[0]:y=c[0]}return{type:"link",raw:c[0],text:g,href:y,tokens:[{type:"text",raw:g,text:g}]}}}inlineText(l){const c=this.rules.inline.text.exec(l);if(c){const p=this.lexer.state.inRawBlock;return{type:"text",raw:c[0],text:c[0],escaped:p}}}},mo=class Jp{constructor(c){an(this,"tokens");an(this,"options");an(this,"state");an(this,"tokenizer");an(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=c||el,this.options.tokenizer=this.options.tokenizer||new Nd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const p={other:Hr,block:fd.normal,inline:Ju.normal};this.options.pedantic?(p.block=fd.pedantic,p.inline=Ju.pedantic):this.options.gfm&&(p.block=fd.gfm,this.options.breaks?p.inline=Ju.breaks:p.inline=Ju.gfm),this.tokenizer.rules=p}static get rules(){return{block:fd,inline:Ju}}static lex(c,p){return new Jp(p).lex(c)}static lexInline(c,p){return new Jp(p).inlineTokens(c)}lex(c){c=c.replace(Hr.carriageReturn,`
`),this.blockTokens(c,this.tokens);for(let p=0;p<this.inlineQueue.length;p++){const g=this.inlineQueue[p];this.inlineTokens(g.src,g.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(c,p=[],g=!1){var y,b,_;for(this.options.pedantic&&(c=c.replace(Hr.tabCharGlobal,"    ").replace(Hr.spaceLine,""));c;){let C;if((b=(y=this.options.extensions)==null?void 0:y.block)!=null&&b.some(E=>(C=E.call({lexer:this},c,p))?(c=c.substring(C.raw.length),p.push(C),!0):!1))continue;if(C=this.tokenizer.space(c)){c=c.substring(C.raw.length);const E=p.at(-1);C.raw.length===1&&E!==void 0?E.raw+=`
`:p.push(C);continue}if(C=this.tokenizer.code(c)){c=c.substring(C.raw.length);const E=p.at(-1);(E==null?void 0:E.type)==="paragraph"||(E==null?void 0:E.type)==="text"?(E.raw+=`
`+C.raw,E.text+=`
`+C.text,this.inlineQueue.at(-1).src=E.text):p.push(C);continue}if(C=this.tokenizer.fences(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.heading(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.hr(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.blockquote(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.list(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.html(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.def(c)){c=c.substring(C.raw.length);const E=p.at(-1);(E==null?void 0:E.type)==="paragraph"||(E==null?void 0:E.type)==="text"?(E.raw+=`
`+C.raw,E.text+=`
`+C.raw,this.inlineQueue.at(-1).src=E.text):this.tokens.links[C.tag]||(this.tokens.links[C.tag]={href:C.href,title:C.title});continue}if(C=this.tokenizer.table(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.lheading(c)){c=c.substring(C.raw.length),p.push(C);continue}let k=c;if((_=this.options.extensions)!=null&&_.startBlock){let E=1/0;const N=c.slice(1);let I;this.options.extensions.startBlock.forEach(A=>{I=A.call({lexer:this},N),typeof I=="number"&&I>=0&&(E=Math.min(E,I))}),E<1/0&&E>=0&&(k=c.substring(0,E+1))}if(this.state.top&&(C=this.tokenizer.paragraph(k))){const E=p.at(-1);g&&(E==null?void 0:E.type)==="paragraph"?(E.raw+=`
`+C.raw,E.text+=`
`+C.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=E.text):p.push(C),g=k.length!==c.length,c=c.substring(C.raw.length);continue}if(C=this.tokenizer.text(c)){c=c.substring(C.raw.length);const E=p.at(-1);(E==null?void 0:E.type)==="text"?(E.raw+=`
`+C.raw,E.text+=`
`+C.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=E.text):p.push(C);continue}if(c){const E="Infinite loop on byte: "+c.charCodeAt(0);if(this.options.silent){console.error(E);break}else throw new Error(E)}}return this.state.top=!0,p}inline(c,p=[]){return this.inlineQueue.push({src:c,tokens:p}),p}inlineTokens(c,p=[]){var C,k,E;let g=c,y=null;if(this.tokens.links){const N=Object.keys(this.tokens.links);if(N.length>0)for(;(y=this.tokenizer.rules.inline.reflinkSearch.exec(g))!=null;)N.includes(y[0].slice(y[0].lastIndexOf("[")+1,-1))&&(g=g.slice(0,y.index)+"["+"a".repeat(y[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(y=this.tokenizer.rules.inline.anyPunctuation.exec(g))!=null;)g=g.slice(0,y.index)+"++"+g.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(y=this.tokenizer.rules.inline.blockSkip.exec(g))!=null;)g=g.slice(0,y.index)+"["+"a".repeat(y[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let b=!1,_="";for(;c;){b||(_=""),b=!1;let N;if((k=(C=this.options.extensions)==null?void 0:C.inline)!=null&&k.some(A=>(N=A.call({lexer:this},c,p))?(c=c.substring(N.raw.length),p.push(N),!0):!1))continue;if(N=this.tokenizer.escape(c)){c=c.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.tag(c)){c=c.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.link(c)){c=c.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.reflink(c,this.tokens.links)){c=c.substring(N.raw.length);const A=p.at(-1);N.type==="text"&&(A==null?void 0:A.type)==="text"?(A.raw+=N.raw,A.text+=N.text):p.push(N);continue}if(N=this.tokenizer.emStrong(c,g,_)){c=c.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.codespan(c)){c=c.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.br(c)){c=c.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.del(c)){c=c.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.autolink(c)){c=c.substring(N.raw.length),p.push(N);continue}if(!this.state.inLink&&(N=this.tokenizer.url(c))){c=c.substring(N.raw.length),p.push(N);continue}let I=c;if((E=this.options.extensions)!=null&&E.startInline){let A=1/0;const V=c.slice(1);let J;this.options.extensions.startInline.forEach(W=>{J=W.call({lexer:this},V),typeof J=="number"&&J>=0&&(A=Math.min(A,J))}),A<1/0&&A>=0&&(I=c.substring(0,A+1))}if(N=this.tokenizer.inlineText(I)){c=c.substring(N.raw.length),N.raw.slice(-1)!=="_"&&(_=N.raw.slice(-1)),b=!0;const A=p.at(-1);(A==null?void 0:A.type)==="text"?(A.raw+=N.raw,A.text+=N.text):p.push(N);continue}if(c){const A="Infinite loop on byte: "+c.charCodeAt(0);if(this.options.silent){console.error(A);break}else throw new Error(A)}}return p}},Ed=class{constructor(l){an(this,"options");an(this,"parser");this.options=l||el}space(l){return""}code({text:l,lang:c,escaped:p}){var b;const g=(b=(c||"").match(Hr.notSpaceStart))==null?void 0:b[0],y=l.replace(Hr.endingNewline,"")+`
`;return g?'<pre><code class="language-'+Ps(g)+'">'+(p?y:Ps(y,!0))+`</code></pre>
`:"<pre><code>"+(p?y:Ps(y,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:c}){return`<h${c}>${this.parser.parseInline(l)}</h${c}>
`}hr(l){return`<hr>
`}list(l){const c=l.ordered,p=l.start;let g="";for(let _=0;_<l.items.length;_++){const C=l.items[_];g+=this.listitem(C)}const y=c?"ol":"ul",b=c&&p!==1?' start="'+p+'"':"";return"<"+y+b+`>
`+g+"</"+y+`>
`}listitem(l){var p;let c="";if(l.task){const g=this.checkbox({checked:!!l.checked});l.loose?((p=l.tokens[0])==null?void 0:p.type)==="paragraph"?(l.tokens[0].text=g+" "+l.tokens[0].text,l.tokens[0].tokens&&l.tokens[0].tokens.length>0&&l.tokens[0].tokens[0].type==="text"&&(l.tokens[0].tokens[0].text=g+" "+Ps(l.tokens[0].tokens[0].text),l.tokens[0].tokens[0].escaped=!0)):l.tokens.unshift({type:"text",raw:g+" ",text:g+" ",escaped:!0}):c+=g+" "}return c+=this.parser.parse(l.tokens,!!l.loose),`<li>${c}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let c="",p="";for(let y=0;y<l.header.length;y++)p+=this.tablecell(l.header[y]);c+=this.tablerow({text:p});let g="";for(let y=0;y<l.rows.length;y++){const b=l.rows[y];p="";for(let _=0;_<b.length;_++)p+=this.tablecell(b[_]);g+=this.tablerow({text:p})}return g&&(g=`<tbody>${g}</tbody>`),`<table>
<thead>
`+c+`</thead>
`+g+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){const c=this.parser.parseInline(l.tokens),p=l.header?"th":"td";return(l.align?`<${p} align="${l.align}">`:`<${p}>`)+c+`</${p}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${Ps(l,!0)}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:c,tokens:p}){const g=this.parser.parseInline(p),y=sf(l);if(y===null)return g;l=y;let b='<a href="'+l+'"';return c&&(b+=' title="'+Ps(c)+'"'),b+=">"+g+"</a>",b}image({href:l,title:c,text:p,tokens:g}){g&&(p=this.parser.parseInline(g,this.parser.textRenderer));const y=sf(l);if(y===null)return Ps(p);l=y;let b=`<img src="${l}" alt="${p}"`;return c&&(b+=` title="${Ps(c)}"`),b+=">",b}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):"escaped"in l&&l.escaped?l.text:Ps(l.text)}},kh=class{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}},go=class Xp{constructor(c){an(this,"options");an(this,"renderer");an(this,"textRenderer");this.options=c||el,this.options.renderer=this.options.renderer||new Ed,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new kh}static parse(c,p){return new Xp(p).parse(c)}static parseInline(c,p){return new Xp(p).parseInline(c)}parse(c,p=!0){var y,b;let g="";for(let _=0;_<c.length;_++){const C=c[_];if((b=(y=this.options.extensions)==null?void 0:y.renderers)!=null&&b[C.type]){const E=C,N=this.options.extensions.renderers[E.type].call({parser:this},E);if(N!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(E.type)){g+=N||"";continue}}const k=C;switch(k.type){case"space":{g+=this.renderer.space(k);continue}case"hr":{g+=this.renderer.hr(k);continue}case"heading":{g+=this.renderer.heading(k);continue}case"code":{g+=this.renderer.code(k);continue}case"table":{g+=this.renderer.table(k);continue}case"blockquote":{g+=this.renderer.blockquote(k);continue}case"list":{g+=this.renderer.list(k);continue}case"html":{g+=this.renderer.html(k);continue}case"paragraph":{g+=this.renderer.paragraph(k);continue}case"text":{let E=k,N=this.renderer.text(E);for(;_+1<c.length&&c[_+1].type==="text";)E=c[++_],N+=`
`+this.renderer.text(E);p?g+=this.renderer.paragraph({type:"paragraph",raw:N,text:N,tokens:[{type:"text",raw:N,text:N,escaped:!0}]}):g+=N;continue}default:{const E='Token with "'+k.type+'" type was not found.';if(this.options.silent)return console.error(E),"";throw new Error(E)}}}return g}parseInline(c,p=this.renderer){var y,b;let g="";for(let _=0;_<c.length;_++){const C=c[_];if((b=(y=this.options.extensions)==null?void 0:y.renderers)!=null&&b[C.type]){const E=this.options.extensions.renderers[C.type].call({parser:this},C);if(E!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(C.type)){g+=E||"";continue}}const k=C;switch(k.type){case"escape":{g+=p.text(k);break}case"html":{g+=p.html(k);break}case"link":{g+=p.link(k);break}case"image":{g+=p.image(k);break}case"strong":{g+=p.strong(k);break}case"em":{g+=p.em(k);break}case"codespan":{g+=p.codespan(k);break}case"br":{g+=p.br(k);break}case"del":{g+=p.del(k);break}case"text":{g+=p.text(k);break}default:{const E='Token with "'+k.type+'" type was not found.';if(this.options.silent)return console.error(E),"";throw new Error(E)}}}return g}},Kp,xd=(Kp=class{constructor(l){an(this,"options");an(this,"block");this.options=l||el}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}provideLexer(){return this.block?mo.lex:mo.lexInline}provideParser(){return this.block?go.parse:go.parseInline}},an(Kp,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Kp),ix=class{constructor(...l){an(this,"defaults",fh());an(this,"options",this.setOptions);an(this,"parse",this.parseMarkdown(!0));an(this,"parseInline",this.parseMarkdown(!1));an(this,"Parser",go);an(this,"Renderer",Ed);an(this,"TextRenderer",kh);an(this,"Lexer",mo);an(this,"Tokenizer",Nd);an(this,"Hooks",xd);this.use(...l)}walkTokens(l,c){var g,y;let p=[];for(const b of l)switch(p=p.concat(c.call(this,b)),b.type){case"table":{const _=b;for(const C of _.header)p=p.concat(this.walkTokens(C.tokens,c));for(const C of _.rows)for(const k of C)p=p.concat(this.walkTokens(k.tokens,c));break}case"list":{const _=b;p=p.concat(this.walkTokens(_.items,c));break}default:{const _=b;(y=(g=this.defaults.extensions)==null?void 0:g.childTokens)!=null&&y[_.type]?this.defaults.extensions.childTokens[_.type].forEach(C=>{const k=_[C].flat(1/0);p=p.concat(this.walkTokens(k,c))}):_.tokens&&(p=p.concat(this.walkTokens(_.tokens,c)))}}return p}use(...l){const c=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(p=>{const g={...p};if(g.async=this.defaults.async||g.async||!1,p.extensions&&(p.extensions.forEach(y=>{if(!y.name)throw new Error("extension name required");if("renderer"in y){const b=c.renderers[y.name];b?c.renderers[y.name]=function(..._){let C=y.renderer.apply(this,_);return C===!1&&(C=b.apply(this,_)),C}:c.renderers[y.name]=y.renderer}if("tokenizer"in y){if(!y.level||y.level!=="block"&&y.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const b=c[y.level];b?b.unshift(y.tokenizer):c[y.level]=[y.tokenizer],y.start&&(y.level==="block"?c.startBlock?c.startBlock.push(y.start):c.startBlock=[y.start]:y.level==="inline"&&(c.startInline?c.startInline.push(y.start):c.startInline=[y.start]))}"childTokens"in y&&y.childTokens&&(c.childTokens[y.name]=y.childTokens)}),g.extensions=c),p.renderer){const y=this.defaults.renderer||new Ed(this.defaults);for(const b in p.renderer){if(!(b in y))throw new Error(`renderer '${b}' does not exist`);if(["options","parser"].includes(b))continue;const _=b,C=p.renderer[_],k=y[_];y[_]=(...E)=>{let N=C.apply(y,E);return N===!1&&(N=k.apply(y,E)),N||""}}g.renderer=y}if(p.tokenizer){const y=this.defaults.tokenizer||new Nd(this.defaults);for(const b in p.tokenizer){if(!(b in y))throw new Error(`tokenizer '${b}' does not exist`);if(["options","rules","lexer"].includes(b))continue;const _=b,C=p.tokenizer[_],k=y[_];y[_]=(...E)=>{let N=C.apply(y,E);return N===!1&&(N=k.apply(y,E)),N}}g.tokenizer=y}if(p.hooks){const y=this.defaults.hooks||new xd;for(const b in p.hooks){if(!(b in y))throw new Error(`hook '${b}' does not exist`);if(["options","block"].includes(b))continue;const _=b,C=p.hooks[_],k=y[_];xd.passThroughHooks.has(b)?y[_]=E=>{if(this.defaults.async)return Promise.resolve(C.call(y,E)).then(I=>k.call(y,I));const N=C.call(y,E);return k.call(y,N)}:y[_]=(...E)=>{let N=C.apply(y,E);return N===!1&&(N=k.apply(y,E)),N}}g.hooks=y}if(p.walkTokens){const y=this.defaults.walkTokens,b=p.walkTokens;g.walkTokens=function(_){let C=[];return C.push(b.call(this,_)),y&&(C=C.concat(y.call(this,_))),C}}this.defaults={...this.defaults,...g}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,c){return mo.lex(l,c??this.defaults)}parser(l,c){return go.parse(l,c??this.defaults)}parseMarkdown(l){return(p,g)=>{const y={...g},b={...this.defaults,...y},_=this.onError(!!b.silent,!!b.async);if(this.defaults.async===!0&&y.async===!1)return _(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof p>"u"||p===null)return _(new Error("marked(): input parameter is undefined or null"));if(typeof p!="string")return _(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(p)+", string expected"));b.hooks&&(b.hooks.options=b,b.hooks.block=l);const C=b.hooks?b.hooks.provideLexer():l?mo.lex:mo.lexInline,k=b.hooks?b.hooks.provideParser():l?go.parse:go.parseInline;if(b.async)return Promise.resolve(b.hooks?b.hooks.preprocess(p):p).then(E=>C(E,b)).then(E=>b.hooks?b.hooks.processAllTokens(E):E).then(E=>b.walkTokens?Promise.all(this.walkTokens(E,b.walkTokens)).then(()=>E):E).then(E=>k(E,b)).then(E=>b.hooks?b.hooks.postprocess(E):E).catch(_);try{b.hooks&&(p=b.hooks.preprocess(p));let E=C(p,b);b.hooks&&(E=b.hooks.processAllTokens(E)),b.walkTokens&&this.walkTokens(E,b.walkTokens);let N=k(E,b);return b.hooks&&(N=b.hooks.postprocess(N)),N}catch(E){return _(E)}}}onError(l,c){return p=>{if(p.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const g="<p>An error occurred:</p><pre>"+Ps(p.message+"",!0)+"</pre>";return c?Promise.resolve(g):g}if(c)return Promise.reject(p);throw p}}},Qa=new ix;function Jt(l,c){return Qa.parse(l,c)}Jt.options=Jt.setOptions=function(l){return Qa.setOptions(l),Jt.defaults=Qa.defaults,cm(Jt.defaults),Jt};Jt.getDefaults=fh;Jt.defaults=el;Jt.use=function(...l){return Qa.use(...l),Jt.defaults=Qa.defaults,cm(Jt.defaults),Jt};Jt.walkTokens=function(l,c){return Qa.walkTokens(l,c)};Jt.parseInline=Qa.parseInline;Jt.Parser=go;Jt.parser=go.parse;Jt.Renderer=Ed;Jt.TextRenderer=kh;Jt.Lexer=mo;Jt.lexer=mo.lex;Jt.Tokenizer=Nd;Jt.Hooks=xd;Jt.parse=Jt;Jt.options;Jt.setOptions;Jt.use;Jt.walkTokens;Jt.parseInline;go.parse;mo.lex;/*! @license DOMPurify 3.4.18 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.18/LICENSE */function lf(l,c){(c==null||c>l.length)&&(c=l.length);for(var p=0,g=Array(c);p<c;p++)g[p]=l[p];return g}function sx(l){if(Array.isArray(l))return l}function ox(l,c){var p=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(p!=null){var g,y,b,_,C=[],k=!0,E=!1;try{if(b=(p=p.call(l)).next,c!==0)for(;!(k=(g=b.call(p)).done)&&(C.push(g.value),C.length!==c);k=!0);}catch(N){E=!0,y=N}finally{try{if(!k&&p.return!=null&&(_=p.return(),Object(_)!==_))return}finally{if(E)throw y}}return C}}function ax(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function lx(l,c){return sx(l)||ox(l,c)||ux(l,c)||ax()}function ux(l,c){if(l){if(typeof l=="string")return lf(l,c);var p={}.toString.call(l).slice(8,-1);return p==="Object"&&l.constructor&&(p=l.constructor.name),p==="Map"||p==="Set"?Array.from(l):p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)?lf(l,c):void 0}}const wm=Object.entries,cx=Object.keys,uf=Object.setPrototypeOf,dx=Object.isFrozen,km=Object.getPrototypeOf,Sm=Object.getOwnPropertyDescriptor;let dr=Object.freeze,Qn=Object.seal,ta=Object.create,_m=typeof Reflect<"u"&&Reflect,Ld=_m.apply,Qp=_m.construct;dr||(dr=function(c){return c});Qn||(Qn=function(c){return c});Ld||(Ld=function(c,p){for(var g=arguments.length,y=new Array(g>2?g-2:0),b=2;b<g;b++)y[b-2]=arguments[b];return c.apply(p,y)});Qp||(Qp=function(c){for(var p=arguments.length,g=new Array(p>1?p-1:0),y=1;y<p;y++)g[y-1]=arguments[y];return new c(...g)});const co=Nn(Array.prototype.forEach),px=Nn(Array.prototype.lastIndexOf),cf=Nn(Array.prototype.pop),Qu=Nn(Array.prototype.push),hx=Nn(Array.prototype.slice),fx=Nn(Array.prototype.splice),$l=Array.isArray,Ip=Cm(Set),Op=Nn(Set.prototype.add),Zu=Nn(Set.prototype.has),Va=Nn(String.prototype.toLowerCase),Mp=Nn(String.prototype.toString),mx=Nn(String.prototype.match),md=Nn(String.prototype.replace),Dp=Nn(String.prototype.indexOf),gx=Nn(String.prototype.trim),yx=Nn(Number.prototype.toString),vx=Nn(Boolean.prototype.toString),df=typeof BigInt>"u"?null:Nn(BigInt.prototype.toString),pf=typeof Symbol>"u"?null:Nn(Symbol.prototype.toString),Ar=Nn(Object.prototype.hasOwnProperty),ec=Nn(Object.prototype.toString),xx=RegExp.prototype.test,cr=function(c,p){return c instanceof RegExp&&(c.lastIndex=0),Ld(xx,c,[p])},po=Cm(TypeError);function Nn(l){return function(c){for(var p=arguments.length,g=new Array(p>1?p-1:0),y=1;y<p;y++)g[y-1]=arguments[y];return Ld(l,c,g)}}function Cm(l){return function(){for(var c=arguments.length,p=new Array(c),g=0;g<c;g++)p[g]=arguments[g];return Qp(l,p)}}function $t(l,c){let p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Va;if(uf&&uf(l,null),!$l(c))return l;let g=c.length;for(;g--;){let y=c[g];if(typeof y=="string"){const b=p(y);b!==y&&(dx(c)||(c[g]=b),y=b)}l[y]=!0}return l}function bx(l){for(let c=0;c<l.length;c++)Ar(l,c)||(l[c]=null);return l}function Pd(l){const c=ta(null);for(const g of wm(l)){var p=lx(g,2);const y=p[0],b=p[1];Ar(l,y)&&($l(b)?c[y]=bx(b):b&&typeof b=="object"&&b.constructor===Object?c[y]=Pd(b):c[y]=b)}return c}function nc(l){const c=ta(null),p=cx(l);let g=p.length;for(;g--;)c[p[g]]=l[p[g]];return c}function wx(l){switch(typeof l){case"string":return l;case"number":return yx(l);case"boolean":return vx(l);case"bigint":return df?df(l):"0";case"symbol":return pf?pf(l):"Symbol()";case"undefined":return ec(l);case"function":case"object":{if(l===null)return ec(l);const c=l,p=Oi(c,"toString");if(typeof p=="function"){const g=p(c);return typeof g=="string"?g:ec(g)}return ec(l)}default:return ec(l)}}function Oi(l,c){for(;l!==null;){const g=Sm(l,c);if(g){if(g.get)return Nn(g.get);if(typeof g.value=="function")return Nn(g.value)}l=km(l)}function p(){return null}return p}function kx(l,c){for(;l!==null;){const p=Sm(l,c);if(p)return p.get?Nn(p.get):null;l=km(l)}return null}function Sx(l){if(!l)return!1;try{return cr(l,""),!0}catch{return!1}}const hf=dr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),zp=dr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Fp=dr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),_x=dr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Wp=dr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Cx=dr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ff=dr(["#text"]),mf=dr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Hp=dr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),gf=dr(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),gd=dr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Tx=Qn(/{{[\w\W]*|^[\w\W]*}}/g),jx=Qn(/<%[\w\W]*|^[\w\W]*%>/g),Nx=Qn(/\${[\w\W]*/g),Ex=Qn(/{{|}}|\${|<%|%>|&lt;%|%&gt;/),Lx=Qn(/^data-[\-\w.\u00B7-\uFFFF]+$/),Px=Qn(/^aria-[\-\w]+$/),yf=Qn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ax=Qn(/^(?:\w+script|data):/i),Rx=Qn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ix=Qn(/^html$/i),Ox=Qn(/^[a-z][.\w]*(-[.\w]+)+$/i),Bp=Qn(/<[/\w!]/g),vf=Qn(/<[/\w]/g),Mx=Qn(/<\/no(script|embed|frames)/i),xf=Qn(/\/>/i),Dx=Qn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i),zx=Qn(/^[\r\n\t ]+/),$n={element:1,text:3,processingInstruction:7,comment:8,document:9,documentFragment:11},Fx=dr($t({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),Wx=function(){return typeof window>"u"?null:window},Hx=function(c,p){if(typeof c!="object"||typeof c.createPolicy!="function")return null;let g=null;const y="data-tt-policy-suffix";p&&p.hasAttribute(y)&&(g=p.getAttribute(y));const b="dompurify"+(g?"#"+g:"");try{return c.createPolicy(b,{createHTML(_){return _},createScriptURL(_){return _}})}catch{return console.warn("TrustedTypes policy "+b+" could not be created."),null}},bf=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},ea=function(c,p,g,y){return Ar(c,p)&&$l(c[p])?$t(y.base?nc(y.base):{},c[p],y.transform):g},Up=function(c,p,g){const y=Ar(c,p)?c[p]:void 0;return y&&typeof y=="object"?Pd(y):g};function Tm(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Wx();const c=_e=>Tm(_e);if(c.version="3.4.18",c.removed=[],!l||!l.document||l.document.nodeType!==$n.document||!l.Element)return c.isSupported=!1,c;let p=l.document;const g=p,y=g.currentScript,b=l.HTMLTemplateElement,_=l.Node,C=l.Element,k=l.NodeFilter,E=l.DOMParser,N=l.trustedTypes,I=C.prototype,A=Oi(I,"cloneNode"),V=Oi(I,"remove"),J=Oi(I,"removeAttributeNode"),W=Oi(I,"nextSibling"),ae=Oi(I,"childNodes"),D=Oi(I,"parentNode"),H=Oi(I,"shadowRoot"),F=Oi(I,"attributes"),q=_&&_.prototype?Oi(_.prototype,"nodeType"):null,Y=_&&_.prototype?Oi(_.prototype,"nodeName"):null,ge=_&&_.prototype?Oi(_.prototype,"ownerDocument"):null,le=function(O){return q?q(O):O.nodeType},be=function(O){return Y?Y(O):O.nodeName},We=kx(I,"namespaceURI"),Te=function(O){return We?We(O):O.namespaceURI};if(typeof b=="function"){const _e=p.createElement("template");_e.content&&_e.content.ownerDocument&&(p=_e.content.ownerDocument)}let se,Ce="",oe,ye=!1,L=0;const X=function(){if(L>0)throw po('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},K=function(O){X(),L++;try{return se.createHTML(O)}finally{L--}},j=function(O){return se&&fi?K(O):O},R=function(O){X(),L++;try{return se.createScriptURL(O)}finally{L--}},G=function(){return ye||(oe=Hx(N,y),ye=!0),oe},M=p,Z=M.implementation,we=M.createNodeIterator,De=M.createDocumentFragment,qe=M.getElementsByTagName,Ie=g.importNode;let ke=bf();c.isSupported=typeof wm=="function"&&typeof D=="function"&&Z&&Z.createHTMLDocument!==void 0;const Be=Tx,Ke=jx,et=Nx,$e=Lx,Ft=Px,Yt=Ax,Ct=Rx,xt=Ox;let tt=yf,Ue=null;const vt=$t({},[...hf,...zp,...Fp,...Wp,...ff]);let yt=null;const Qe=$t({},[...mf,...Hp,...gf,...gd]);let ut=null,ie=null,je=null;const pe=Object.seal(ta(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let kt=!0,Ye=!0,ot=!1,Ze=!0,mt=!1,pt=!0,Xt=!1,nr=!1,Sr=null,Rr=null,Br=!1,Ur=!1,bt=!1,fi=!1,rt=!0,_r=!1;const tn="user-content-";let It=!0,qt=!1,bn=null,gn=!1,En=null;const wn=$t({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let ni=null;const On=$t({},["audio","video","img","source","image","track"]);let pr=null;const mi=$t({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ln="http://www.w3.org/1998/Math/MathML",os="http://www.w3.org/2000/svg",kn="http://www.w3.org/1999/xhtml";let Cr=kn,qr=!1,Ir=null;const Tr=$t({},[Ln,os,kn],Mp),gi=dr($t({},["mi","mo","mn","ms","mtext"]));let as=null;const Mn=dr($t({},["annotation-xml"]));let ls=null;const Mi=dr(ta(null)),Or=$t({},["title","style","font","a","script"]);let Gn=null;const yi=["application/xhtml+xml","text/html"],Di="text/html";let Bt=null,Mr=null;const us=p.createElement("form"),Rt=function(O){return O instanceof RegExp||O instanceof Function},zi=function(){let O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(!O||typeof O!="object")&&(O={}),O=Pd(O),Gn=yi.indexOf(O.PARSER_MEDIA_TYPE)===-1?Di:O.PARSER_MEDIA_TYPE,Bt=Gn==="application/xhtml+xml"?Mp:Va,Ue=ea(O,"ALLOWED_TAGS",vt,{transform:Bt}),yt=ea(O,"ALLOWED_ATTR",Qe,{transform:Bt}),Ir=ea(O,"ALLOWED_NAMESPACES",Tr,{transform:Mp}),pr=ea(O,"ADD_URI_SAFE_ATTR",mi,{transform:Bt,base:mi}),ni=ea(O,"ADD_DATA_URI_TAGS",On,{transform:Bt,base:On}),En=ea(O,"FORBID_CONTENTS",wn,{transform:Bt}),ie=ea(O,"FORBID_TAGS",ta(null),{transform:Bt}),je=ea(O,"FORBID_ATTR",ta(null),{transform:Bt}),gn=Ar(O,"USE_PROFILES")?O.USE_PROFILES&&typeof O.USE_PROFILES=="object"?Pd(O.USE_PROFILES):O.USE_PROFILES:!1,kt=O.ALLOW_ARIA_ATTR!==!1,Ye=O.ALLOW_DATA_ATTR!==!1,ot=O.ALLOW_UNKNOWN_PROTOCOLS||!1,Ze=O.ALLOW_SELF_CLOSE_IN_ATTR!==!1,mt=O.SAFE_FOR_TEMPLATES||!1,pt=O.SAFE_FOR_XML!==!1,Xt=O.WHOLE_DOCUMENT||!1,Ur=O.RETURN_DOM||!1,bt=O.RETURN_DOM_FRAGMENT||!1,fi=O.RETURN_TRUSTED_TYPE||!1,Br=O.FORCE_BODY||!1,rt=O.SANITIZE_DOM!==!1,_r=O.SANITIZE_NAMED_PROPS||!1,It=O.KEEP_CONTENT!==!1,qt=O.IN_PLACE||!1,tt=Sx(O.ALLOWED_URI_REGEXP)?O.ALLOWED_URI_REGEXP:yf,Cr=typeof O.NAMESPACE=="string"?O.NAMESPACE:kn,as=Up(O,"MATHML_TEXT_INTEGRATION_POINTS",gi),ls=Up(O,"HTML_INTEGRATION_POINTS",Mn);const te=Up(O,"CUSTOM_ELEMENT_HANDLING",Mi);if(ut=ta(null),Ar(te,"tagNameCheck")&&Rt(te.tagNameCheck)&&(ut.tagNameCheck=te.tagNameCheck),Ar(te,"attributeNameCheck")&&Rt(te.attributeNameCheck)&&(ut.attributeNameCheck=te.attributeNameCheck),Ar(te,"allowCustomizedBuiltInElements")&&typeof te.allowCustomizedBuiltInElements=="boolean"&&(ut.allowCustomizedBuiltInElements=te.allowCustomizedBuiltInElements),Qn(ut),mt&&(Ye=!1),bt&&(Ur=!0),gn&&((Ar(O,"ALLOWED_TAGS")||Ar(O,"ALLOWED_ATTR"))&&typeof console<"u"&&typeof console.warn=="function"&&console.warn("DOMPurify: USE_PROFILES overrides ALLOWED_TAGS and ALLOWED_ATTR. Do not use these options together."),Ue=$t({},ff),yt=ta(null),gn.html===!0&&($t(Ue,hf),$t(yt,mf)),gn.svg===!0&&($t(Ue,zp),$t(yt,Hp),$t(yt,gd)),gn.svgFilters===!0&&($t(Ue,Fp),$t(yt,Hp),$t(yt,gd)),gn.mathMl===!0&&($t(Ue,Wp),$t(yt,gf),$t(yt,gd))),pe.tagCheck=null,pe.attributeCheck=null,Ar(O,"ADD_TAGS")&&(typeof O.ADD_TAGS=="function"?pe.tagCheck=O.ADD_TAGS:$l(O.ADD_TAGS)&&(Ue===vt&&(Ue=nc(Ue)),$t(Ue,O.ADD_TAGS,Bt))),Ar(O,"ADD_ATTR")&&(typeof O.ADD_ATTR=="function"?pe.attributeCheck=O.ADD_ATTR:$l(O.ADD_ATTR)&&(yt===Qe&&(yt=nc(yt)),$t(yt,O.ADD_ATTR,Bt))),Ar(O,"ADD_FORBID_CONTENTS")&&$l(O.ADD_FORBID_CONTENTS)&&(En===wn&&(En=nc(En)),$t(En,O.ADD_FORBID_CONTENTS,Bt)),It&&(Ue["#text"]=!0),Xt&&$t(Ue,["html","head","body"]),Ue.table&&(Ue.tbody=!0,delete ie.tbody),O.TRUSTED_TYPES_POLICY){if(typeof O.TRUSTED_TYPES_POLICY.createHTML!="function")throw po('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof O.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw po('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const ve=se;se=O.TRUSTED_TYPES_POLICY;try{Ce=K("")}catch(Le){throw se=ve,Le}}else O.TRUSTED_TYPES_POLICY===null?(se=void 0,Ce=""):(se===void 0&&(se=G()),se&&typeof Ce=="string"&&(Ce=K("")));Mr=dr(O)},ri=$t({},[...zp,...Fp,..._x]),Vt=$t({},[...Wp,...Cx]),Je=function(O,te,ve){return te===kn?O==="svg":te===Ln?O==="svg"&&(ve==="annotation-xml"||as[ve]):!!ri[O]},ii=function(O,te,ve){return te===kn?O==="math":te===os?O==="math"&&ls[ve]:!!Vt[O]},cs=function(O,te,ve){return te===os&&!ls[ve]||te===Ln&&!as[ve]?!1:!Vt[O]&&(Or[O]||!ri[O])},Yn=function(O){const te=Te(O),ve=Va(be(O)),Le=D(O);let nt=Cr,ct="template";return Le&&le(Le)===$n.element&&(nt=Te(Le),ct=Va(be(Le))),Ir[te]?te===os?Je(ve,nt,ct):te===Ln?ii(ve,nt,ct):te===kn?cs(ve,nt,ct):Gn==="application/xhtml+xml":!1},T=function(O){Qu(c.removed,{element:O});try{D(O).removeChild(O)}catch{if(V(O),!D(O))throw po("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},B=function(O,te,ve){try{J(O,te)}catch{try{O.removeAttribute(ve)}catch{}}},fe=function(O){jt(O);const te=ae(O);te&&co(hx(te),ve=>{try{V(ve)}catch{}}),le(O)===$n.element&&de(O,!1)},Ne=function(O,te,ve){if(!ve)try{ve=te.getAttributeNode(O)}catch{ve=null}if(Qu(c.removed,{attribute:ve||null,from:te}),ve)B(te,ve,O);else try{te.removeAttribute(O)}catch{}if(O==="is")if(Ur||bt)try{T(te)}catch{}else try{te.setAttribute(O,"")}catch{}},de=function(O,te){const ve=F(O);if(ve)for(let Le=ve.length-1;Le>=0;--Le){const nt=ve[Le],ct=nt&&nt.name;typeof ct=="string"&&!(te&&yt[Bt(ct)])&&B(O,nt,ct)}},He=function(O,te){let ve=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const Le=[O];for(;Le.length>0;){const nt=Le.pop();if(te(nt)===!1)continue;if(ve&&le(nt)===$n.element){const Tt=H(nt);xi(Tt)&&Le.push(Tt)}const ct=ae(nt);if(ct)for(let Tt=ct.length-1;Tt>=0;--Tt)Le.push(ct[Tt])}},jt=function(O){He(O,te=>{le(te)===$n.element&&de(te,!0)})},Qt=function(O){const te=[];return He(O,ve=>{te.push(ve)},!0),te},Sn=function(O,te){const ve=Ip();co(Qt(O),Le=>{le(Le)===$n.element&&Op(ve,Le)}),co(te,Le=>{le(Le)===$n.element&&!Zu(ve,Le)&&de(Le,!0)})},Kr=function(O,te){let ve=!1;return co(c.removed,Le=>{Le.element&&(ve=ve||Le.element===O,jt(Le.element))}),Sn(O,te),ve},tl=8,gt=function(O,te){const ve=bn;let Le=null;const nt=()=>(Le||(Le=Ip(),co(te,ct=>{Op(Le,ct)})),Le);for(let ct=0;;ct++){const Tt=Qt(O),dn=[O];let Kt=!1;if(co(Tt,hr=>{le(hr)===$n.documentFragment?Qu(dn,hr):!Kt&&!Zu(ve,hr)&&(Kt=Zu(nt(),hr))}),!Kt)return;if(ct>=tl)throw po("the tree kept changing during in-place sanitization; refusing to return it");co(dn,(hr,Vn)=>{ia(hr,Vn>0,O,nt())})}},ia=function(O,te,ve,Le){const nt=Wi(O);let ct;for(;ct=nt.nextNode();)!Zu(Le,ct)||Zu(bn,ct)||(te&&ir(ke.uponSanitizeShadowNode,ct,null),zs(ct,ve))},sa=function(O){bn&&Op(bn,O)},Fi=function(O,te){return pt?O==="patchsrc"?!0:O==="for"&&te!=="label"&&te!=="output":!1},rr=function(O){pt&&He(O,te=>{const ve=le(te);if(ve===$n.processingInstruction||ve===$n.comment&&cr(vf,te.data)){try{V(te)}catch{}return!1}if(ve===$n.element){const Le=te,nt=Bt(be(te));try{Le.hasAttribute&&Le.hasAttribute("patchsrc")&&Le.removeAttribute("patchsrc"),Le.hasAttribute&&Le.hasAttribute("for")&&Fi("for",nt)&&Le.removeAttribute("for")}catch{}}return!0})},oa=function(O){let te=null,ve=null;if(Br)O="<remove></remove>"+O;else{const ct=mx(O,zx);ve=ct&&ct[0]}Gn==="application/xhtml+xml"&&Cr===kn&&(O='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+O+"</body></html>");const Le=se?K(O):O;if(Cr===kn)try{te=new E().parseFromString(Le,Gn)}catch{}if(!te||!te.documentElement){te=Z.createDocument(Cr,"template",null);try{te.documentElement.innerHTML=qr?Ce:Le}catch{}}const nt=te.body||te.documentElement;return O&&ve&&nt.insertBefore(p.createTextNode(ve),nt.childNodes[0]||null),Cr===kn?qe.call(te,Xt?"html":"body")[0]:Xt?te.documentElement:nt},Wi=function(O){let te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const ve=ge?ge(O):O.ownerDocument;return we.call(ve||O,O,(te?0:k.SHOW_ELEMENT)|k.SHOW_COMMENT|k.SHOW_TEXT|k.SHOW_PROCESSING_INSTRUCTION|k.SHOW_CDATA_SECTION,null)},Nt=function(O){return O=md(O,Be," "),O=md(O,Ke," "),O=md(O,et," "),O},ds=function(O){var te;Is(O);const ve=(te=O.querySelectorAll)===null||te===void 0?void 0:te.call(O,"template");ve&&co(ve,Le=>{xi(Le.content)&&ds(Le.content)})},Is=function(O){O.normalize();const te=Wi(O,!0);let ve=te.nextNode();for(;ve;)ve.data=Nt(ve.data),ve=te.nextNode()},vi=function(O){const te=Y?Y(O):null;return typeof te!="string"||Bt(te)!=="form"?!1:typeof O.nodeName!="string"||typeof O.textContent!="string"||typeof O.removeChild!="function"||O.attributes!==F(O)||typeof O.removeAttribute!="function"||typeof O.removeAttributeNode!="function"||typeof O.getAttributeNode!="function"||typeof O.setAttribute!="function"||typeof O.namespaceURI!="string"||typeof O.insertBefore!="function"||typeof O.hasChildNodes!="function"||O.nodeType!==q(O)||O.childNodes!==ae(O)},xo=function(O){if(!q||typeof O!="object"||O===null)return null;try{const te=q(O);return typeof te=="number"?te:null}catch{return null}},xi=function(O){return xo(O)===$n.documentFragment},Hi=function(O){return xo(O)!==null};function ir(_e,O,te){_e.length!==0&&co(_e,ve=>{ve.call(c,O,te,Mr)})}const bo=function(O,te,ve){return!!(pt&&ve===$n.element&&O.hasChildNodes()&&!Hi(O.firstElementChild)&&cr(Bp,O.textContent)&&cr(Bp,O.innerHTML)||pt&&Fx[te]&&ve===$n.element&&Te(O)===kn&&(Hi(O.firstElementChild)||typeof O.textContent=="string"&&cr(Bp,O.textContent))||ve===$n.processingInstruction||pt&&ve===$n.comment&&cr(vf,O.data))},Dr=function(O,te){if(O instanceof RegExp)return cr(O,te);if(O instanceof Function){for(var ve=arguments.length,Le=new Array(ve>2?ve-2:0),nt=2;nt<ve;nt++)Le[nt-2]=arguments[nt];return!!O(te,...Le)}return!1},si=function(O,te,ve){if(!ie[te]&&aa(te)&&Dr(ut.tagNameCheck,te))return!1;if(It&&!En[te]&&!En[Va(te)]){const Le=D(O),nt=ae(O);if(nt&&Le){const ct=nt.length;for(let Tt=ct-1;Tt>=0;--Tt){const dn=O===ve?A(nt[Tt],!0):nt[Tt];Le.insertBefore(dn,W(O))}}}return T(O),!0},Dn=function(O,te,ve,Le){return O.length===0?te:te===ve||te===Le?nc(te):te},$r=function(O,te){return O===te||D(O)!==null?!1:(qt&&jt(O),!0)},Os=function(O,te){if(sa(O),ir(ke.beforeSanitizeElements,O,null),$r(O,te))return!0;if(vi(O))return T(O),!0;const ve=Bt(be(O)),Le=le(O);if(Ue=Dn(ke.uponSanitizeElement,Ue,vt,Sr),ir(ke.uponSanitizeElement,O,{tagName:ve,allowedTags:Ue}),$r(O,te))return!0;if(bo(O,ve,Le))return T(O),!0;if(ie[ve]||!(pe.tagCheck instanceof Function&&pe.tagCheck(ve))&&!Ue[ve]){const nt=si(O,ve,te);return nt===!1&&(ir(ke.afterSanitizeElements,O,null),$r(O,te))?!0:nt}if(Le===$n.element&&!Yn(O)||(ve==="noscript"||ve==="noembed"||ve==="noframes")&&cr(Mx,O.innerHTML))return T(O),!0;if(mt&&Le===$n.text){const nt=O.textContent,ct=Nt(nt);nt!==ct&&(Qu(c.removed,{element:O.cloneNode()}),O.textContent=ct)}return ir(ke.afterSanitizeElements,O,null),$r(O,te)},jr=function(O,te,ve){if(je[te]||Fi(te,O)||rt&&(te==="id"||te==="name")&&(ve in p||ve in us))return!1;const Le=yt[te]||pe.attributeCheck instanceof Function&&pe.attributeCheck(te,O);if(Ye&&cr($e,te)||kt&&cr(Ft,te))return!0;if(!Le)return aa(O)&&Dr(ut.tagNameCheck,O)&&Dr(ut.attributeNameCheck,te,O)||te==="is"&&ut.allowCustomizedBuiltInElements&&Dr(ut.tagNameCheck,ve);if(pr[te])return!0;const nt=md(ve,Ct,"");return cr(tt,nt)||(te==="src"||te==="xlink:href"||te==="href")&&O!=="script"&&Dp(ve,"data:")===0&&ni[O]||ot&&!cr(Yt,nt)?!0:!ve},Ms=$t({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),aa=function(O){return!Ms[Va(O)]&&cr(xt,O)},Ds=function(O,te,ve,Le){if(se&&typeof N=="object"&&typeof N.getAttributeType=="function"&&!ve)switch(N.getAttributeType(O,te)){case"TrustedHTML":return K(Le);case"TrustedScriptURL":return R(Le)}return Le},Jl=function(O,te,ve,Le){try{return ve?O.setAttributeNS(ve,te,Le):O.setAttribute(te,Le),vi(O)?(T(O),!1):!0}catch{return Ne(te,O),!1}},la=function(O,te){return pt&&cr(Dx,te)?!0:Va(O)==="attributename"&&Dp(te,"href")!==-1},ps=function(O,te){if(ir(ke.beforeSanitizeAttributes,O,null),$r(O,te))return;const ve=O.attributes;if(!ve||vi(O))return;yt=Dn(ke.uponSanitizeAttribute,yt,Qe,Rr);const Le={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:yt,forceKeepAttr:void 0};let nt=ve.length;const ct=Bt(be(O));for(;nt--;){const Tt=ve[nt],dn=Tt.name,Kt=Tt.namespaceURI,hr=Tt.value,Vn=Bt(dn),fr=hr;let pn=dn==="value"?fr:gx(fr),Nr=!1;if(Le.attrName=Vn,Le.attrValue=pn,Le.keepAttr=!0,Le.forceKeepAttr=void 0,ir(ke.uponSanitizeAttribute,O,Le),pn=Le.attrValue,_r&&(Vn==="id"||Vn==="name")&&Dp(pn,tn)!==0&&(Ne(dn,O,Tt),pn=tn+pn,Nr=!0),la(dn,pn)){Ne(dn,O,Tt);continue}if(!Le.forceKeepAttr){if(!Le.keepAttr){Ne(dn,O,Tt);continue}if(!Ze&&cr(xf,pn)){Ne(dn,O,Tt);continue}if(mt&&(pn=Nt(pn)),!jr(ct,Vn,pn)){Ne(dn,O,Tt);continue}pn=Ds(ct,Vn,Kt,pn),pn!==fr&&Jl(O,dn,Kt,pn)&&Nr&&cf(c.removed)}}ir(ke.afterSanitizeAttributes,O,null),$r(O,te)},zs=function(O,te){Os(O,te),ps(O,te),xi(O.content)&&ua(O.content)},ua=function(O){let te=null;const ve=Wi(O);for(ir(ke.beforeSanitizeShadowDOM,O,null);te=ve.nextNode();)if(ir(ke.uponSanitizeShadowNode,te,null),zs(te,O),le(te)===$n.element){const Le=H(te);xi(Le)&&(bi(Le),ua(Le))}mt&&Is(O),ir(ke.afterSanitizeShadowDOM,O,null)},bi=function(O){const te=[{node:O,shadow:null}];for(;te.length>0;){const ve=te.pop();if(ve.shadow){ua(ve.shadow);continue}const Le=ve.node,nt=le(Le)===$n.element,ct=ae(Le);if(ct)for(let Tt=ct.length-1;Tt>=0;--Tt)te.push({node:ct[Tt],shadow:null});if(nt){const Tt=Y?Y(Le):null;if(typeof Tt=="string"&&Bt(Tt)==="template"){const dn=Le.content;xi(dn)&&te.push({node:dn,shadow:null})}}if(nt){const Tt=H(Le);xi(Tt)&&te.push({node:null,shadow:Tt},{node:Tt,shadow:null})}}};return c.sanitize=function(_e){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},te=null,ve=null,Le=null,nt=null;if(qr=!_e,qr&&(_e="<!-->"),typeof _e!="string"&&!Hi(_e)&&(_e=wx(_e),typeof _e!="string"))throw po("dirty is not a string, aborting");if(!c.isSupported)return _e;nr?(Ue=Sr,yt=Rr):zi(O),c.removed=[];const ct=qt&&typeof _e!="string"&&Hi(_e);let Tt=[];const dn=bn;if(ct){rr(_e);const fr=be(_e);if(typeof fr=="string"){const pn=Bt(fr);if(!Ue[pn]||ie[pn])throw fe(_e),po("root node is forbidden and cannot be sanitized in-place")}if(vi(_e))throw fe(_e),po("root node is clobbered and cannot be sanitized in-place");Tt=Qt(_e),bn=Ip()}else if(Hi(_e))te=oa("<!---->"),ve=te.ownerDocument.importNode(_e,!0),ve.nodeType===$n.element&&ve.nodeName==="BODY"||ve.nodeName==="HTML"?te=ve:te.appendChild(ve),bi(te);else{if(!Ur&&!mt&&!Xt&&_e.indexOf("<")===-1)return j(_e);if(te=oa(_e),!te)return Ur?null:fi?Ce:""}te&&Br&&T(te.firstChild);const Kt=ct?_e:te;try{ct&&bi(_e);const fr=Wi(Kt);for(;Le=fr.nextNode();)zs(Le,Kt);ct&&gt(_e,Tt)}catch(fr){throw ct&&(fe(_e),Kr(_e,Tt)),fr}finally{bn=dn}if(ct){if(Kr(_e,Tt))throw po("a node selected for removal could not be safely returned; refusing to sanitize in place");return mt&&ds(_e),_e}if(Ur){if(mt&&ds(te),bt)for(nt=De.call(te.ownerDocument);te.firstChild;)nt.appendChild(te.firstChild);else nt=te;return(yt.shadowroot||yt.shadowrootmode)&&(nt=Ie.call(g,nt,!0)),nt}const hr=()=>Xt?te.outerHTML:te.innerHTML;let Vn=hr();return mt&&cr(Ex,Vn)&&(Is(te),Vn=hr()),Xt&&Ue["!doctype"]&&te.ownerDocument&&te.ownerDocument.doctype&&te.ownerDocument.doctype.name&&cr(Ix,te.ownerDocument.doctype.name)&&(Vn="<!DOCTYPE "+te.ownerDocument.doctype.name+`>
`+Vn),j(Vn)},c.setConfig=function(){let _e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};zi(_e),nr=!0,Sr=Ue,Rr=yt},c.clearConfig=function(){Mr=null,nr=!1,Sr=null,Rr=null,se=oe,Ce=""},c.isValidAttribute=function(_e,O,te){Mr||zi({});const ve=Bt(_e),Le=Bt(O);return typeof te=="string"&&(la(O,te)||!Ze&&cr(xf,te))?!1:jr(ve,Le,te)},c.addHook=function(_e,O){typeof O=="function"&&Ar(ke,_e)&&Qu(ke[_e],O)},c.removeHook=function(_e,O){if(Ar(ke,_e)){if(O!==void 0){const te=px(ke[_e],O);return te===-1?void 0:fx(ke[_e],te,1)[0]}return cf(ke[_e])}},c.removeHooks=function(_e){Ar(ke,_e)&&(ke[_e]=[])},c.removeAllHooks=function(){ke=bf()},c}var Bx=Tm();function Ux(l,c=null){const p=String(l||""),g=p.split(`
`),y=g.findIndex(k=>/^##\s+(?:Practice|Solve)(?:\s*[:—-].*)?\s*$/i.test(k)),b=y===-1?-1:g.findIndex((k,E)=>E>y&&/^##\s+(?:Reflect(?:ion)?|Learn|Stop and think|Optional reading)(?:\b|\s*[:—-])/i.test(k)),_=y>=0?g.slice(y,b<0?g.length:b).join(`
`):`# Solve

${(c==null?void 0:c.challenge)||"Try the lesson task before looking at the guide."}`,C=y>=0?[...g.slice(0,y),...b<0?[]:g.slice(b)].join(`
`).trim():p;return{solve:_,learn:C}}function qx(l){const c=String(l||"").split(`
`),p=[];let g=null;c.forEach((_,C)=>{const k=_.trim(),E=/^(`{3,}|~{3,})/.exec(k);if(E){const V=E[1];g?g.char===V[0]&&V.length>=g.length&&(g=null):g={char:V[0],length:V.length};return}if(g)return;const N=/^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(_);if(!N)return;const I=N[2],A=/\bStep\s+\d+(?=\s*(?:[:.·–—-]|$))/i.test(I);p.push({index:C,level:N[1].length,numbered:A})});const y=p.filter(_=>_.numbered),b=(y.length?y:p.filter(_=>_.level===2)).map(_=>_.index);return b.length?{intro:c.slice(0,b[0]).join(`
`).trim(),steps:b.map((_,C)=>c.slice(_,b[C+1]??c.length).join(`
`).trim())}:{intro:c.join(`
`),steps:[]}}const Kx=Object.assign({"../content/capstone-discovery.md":Jy,"../content/capstone-feedback.md":Xy,"../content/capstone-interviews.md":Qy,"../content/capstone-prototype.md":Zy,"../content/csharp-conditionals.md":ev,"../content/csharp-variables.md":tv,"../content/python-decisions.md":nv,"../content/python-formatting.md":rv,"../content/python-lists.md":iv,"../content/python-loops.md":sv,"../content/python-strings.md":ov,"../content/python-variables.md":av,"../content/react-components.md":lv,"../content/react-state.md":uv,"../content/tsi-equations.md":cv,"../content/tsi-percents.md":dv,"../content/tsi-ratios.md":pv,"../content/tsi-slope.md":hv,"../content/uil-arrays.md":fv,"../content/uil-loops.md":mv,"../content/uil-methods.md":gv,"../content/uil-strings.md":yv,"../content/unity-colliders.md":vv,"../content/unity-player-controller.md":xv,"../content/unity-score.md":bv,"../content/web-events.md":wv,"../content/web-layout.md":kv}),$x="# Add a Markdown lesson\n\nSave a new `.md` file inside `src/content/`.\n",Gx=l=>Kx[`../content/${l}.md`]||$x,Za=l=>Bx.sanitize(Jt.parse(l,{breaks:!1,gfm:!0}));function Yx(l,c=""){if(!(l!=null&&l.isPublished))return"";let p="";const g=Array.isArray(l.cases)?l.cases:[];g.length&&!/##\s+(?:Published )?Examples\b/i.test(c)&&(p+=`

### Published examples
`,g.forEach((b,_)=>{p+=`
**Example `+(_+1)+`**

`,b.call&&(p+="Input: `"+b.call+`\`

`),p+=l.mode==="function"?`Expected return:
`:`Expected output:
`,p+="\n```text\n"+String(b.expected??"")+"\n```\n"}));const y=Array.isArray(l.hints)?l.hints:[];return y.length&&!/<details(?:\s|>)/i.test(c)&&(p+=`

### Need a hint?
`,y.forEach((b,_)=>{p+=`
<details>
<summary>Hint `+(_+1)+`</summary>

`+String(b).replaceAll("<","&lt;")+`

</details>
`})),p}function wf(l,c){if(!c)return l;const p="https://github.com/mswhitby/computer-science-1/blob/main/units/",g=c.startsWith("/playground/data/")?new URL(c,"https://www.mswhitby.com"):new URL(c,p);return String(l).replace(/\]\(([^)]+)\)/g,(y,b)=>{if(/^(?:https?:|mailto:|#|data:)/i.test(b))return y;const[_,...C]=b.split(" ");try{const k=new URL(_,g);return k.origin!==g.origin?y:"]("+k.href+(C.length?" "+C.join(" "):"")+")"}catch{return y}})}const Sh={markdown:l=>`designlab:md:${l}`,code:l=>`designlab:code:${l}`};function Ad(l){try{return localStorage.getItem(l)}catch{return null}}function fo(l,c){try{localStorage.setItem(l,c)}catch{}}function Vx(l){try{localStorage.removeItem(l)}catch{}}function kf({lessonId:l,task:c,isTsi:p=!1,tsiAnswer:g=null}){var q;const y=(c==null?void 0:c.markdownSource)||Gx(l),b=Sh.markdown(l),[_,C]=Se.useState(y),[k,E]=Se.useState(p?"learn":"solve"),[N,I]=Se.useState(0),[A,V]=Se.useState(!1);Se.useEffect(()=>{C(Ad(b)??y),E(p?"learn":"solve"),I(0),V(!1)},[b,y,p]);const J=Se.useMemo(()=>{const Y=Ux(_,c),ge=Y.solve+Yx(c,Y.solve);return{solve:wf(ge,(c==null?void 0:c.markdownUrl)||(c==null?void 0:c.markdown)),learn:wf(Y.learn,(c==null?void 0:c.markdownUrl)||(c==null?void 0:c.markdown))}},[_,c]),W=Se.useMemo(()=>qx(J.learn),[J.learn]),ae=!p&&k==="learn"&&W.steps.length>0,D=Math.min(N,Math.max(0,W.steps.length-1)),H=p?J.learn:k==="solve"?J.solve:ae?W.intro+`

`+W.steps[D]:J.learn,F=Se.useMemo(()=>Za(H),[H]);return u.jsxs("section",{className:"instructions-pane",children:[u.jsxs("div",{className:"pane-header",children:[p?u.jsx("strong",{className:"tsi-learn-title",children:"Learn"}):u.jsxs("div",{className:"tabs compact",role:"tablist","aria-label":"Lesson views",children:[u.jsx("button",{role:"tab","aria-selected":k==="solve",className:k==="solve"?"active":"",onClick:()=>{E("solve"),I(0)},children:"Solve"}),u.jsx("button",{role:"tab","aria-selected":k==="learn",className:k==="learn"?"active":"",onClick:()=>{E("learn"),I(0)},children:"Learn"})]}),u.jsx("button",{type:"button",className:ho("icon-button",A&&"active"),title:"Edit lesson text","aria-label":"Edit lesson text",onClick:()=>V(!A),children:u.jsx(Sy,{size:16})})]}),A?u.jsxs("div",{className:"markdown-source",children:[u.jsx("p",{className:"hint",children:"Try editing these instructions. Changes here are just for your preview."}),u.jsx("textarea",{"aria-label":"Markdown source",value:_,onChange:Y=>{C(Y.target.value),I(0),fo(b,Y.target.value)}}),u.jsx("button",{type:"button",className:"btn",onClick:()=>{Vx(b),C(y),I(0)},children:"Reset lesson text"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"markdown-preview",role:"tabpanel",children:[u.jsx("div",{dangerouslySetInnerHTML:{__html:F}}),p&&g&&u.jsxs("section",{className:"tsi-worked-solution",role:"status",children:[u.jsx("h3",{children:g.correct?"Why that works":"Review the solution"}),u.jsx("p",{children:(q=hh[l])==null?void 0:q.explanation})]})]}),ae&&u.jsxs("nav",{className:"lesson-step-controls","aria-label":"Learning steps",children:[D>0&&u.jsxs("button",{type:"button",className:"step-link previous",onClick:()=>I(Y=>Math.max(0,Y-1)),children:[u.jsx(Md,{size:16,"aria-hidden":"true"})," Previous"]}),u.jsxs("span",{children:["Step ",D+1," of ",W.steps.length]}),D<W.steps.length-1&&u.jsxs("button",{type:"button",className:"step-link next",onClick:()=>I(Y=>Math.min(W.steps.length-1,Y+1)),children:["Next ",u.jsx(ti,{size:16,"aria-hidden":"true"})]})]})]})]})}var bd={exports:{}},Jx=bd.exports,Sf;function ss(){return Sf||(Sf=1,(function(l,c){(function(p,g){l.exports=g()})(Jx,(function(){var p=navigator.userAgent,g=navigator.platform,y=/gecko\/\d/i.test(p),b=/MSIE \d/.test(p),_=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(p),C=/Edge\/(\d+)/.exec(p),k=b||_||C,E=k&&(b?document.documentMode||6:+(C||_)[1]),N=!C&&/WebKit\//.test(p),I=N&&/Qt\/\d+\.\d+/.test(p),A=!C&&/Chrome\/(\d+)/.exec(p),V=A&&+A[1],J=/Opera\//.test(p),W=/Apple Computer/.test(navigator.vendor),ae=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(p),D=/PhantomJS/.test(p),H=W&&(/Mobile\/\w+/.test(p)||navigator.maxTouchPoints>2),F=/Android/.test(p),q=H||F||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(p),Y=H||/Mac/.test(g),ge=/\bCrOS\b/.test(p),le=/win/i.test(g),be=J&&p.match(/Version\/(\d*\.\d*)/);be&&(be=Number(be[1])),be&&be>=15&&(J=!1,N=!0);var We=Y&&(I||J&&(be==null||be<12.11)),Te=y||k&&E>=9;function se(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var Ce=function(e,n){var s=e.className,i=se(n).exec(s);if(i){var o=s.slice(i.index+i[0].length);e.className=s.slice(0,i.index)+(o?i[1]+o:"")}};function oe(e){for(var n=e.childNodes.length;n>0;--n)e.removeChild(e.firstChild);return e}function ye(e,n){return oe(e).appendChild(n)}function L(e,n,s,i){var o=document.createElement(e);if(s&&(o.className=s),i&&(o.style.cssText=i),typeof n=="string")o.appendChild(document.createTextNode(n));else if(n)for(var h=0;h<n.length;++h)o.appendChild(n[h]);return o}function X(e,n,s,i){var o=L(e,n,s,i);return o.setAttribute("role","presentation"),o}var K;document.createRange?K=function(e,n,s,i){var o=document.createRange();return o.setEnd(i||e,s),o.setStart(e,n),o}:K=function(e,n,s){var i=document.body.createTextRange();try{i.moveToElementText(e.parentNode)}catch{return i}return i.collapse(!0),i.moveEnd("character",s),i.moveStart("character",n),i};function j(e,n){if(n.nodeType==3&&(n=n.parentNode),e.contains)return e.contains(n);do if(n.nodeType==11&&(n=n.host),n==e)return!0;while(n=n.parentNode)}function R(e){var n=e.ownerDocument||e,s;try{s=e.activeElement}catch{s=n.body||null}for(;s&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function G(e,n){var s=e.className;se(n).test(s)||(e.className+=(s?" ":"")+n)}function M(e,n){for(var s=e.split(" "),i=0;i<s.length;i++)s[i]&&!se(s[i]).test(n)&&(n+=" "+s[i]);return n}var Z=function(e){e.select()};H?Z=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:k&&(Z=function(e){try{e.select()}catch{}});function we(e){return e.display.wrapper.ownerDocument}function De(e){return qe(e.display.wrapper)}function qe(e){return e.getRootNode?e.getRootNode():e.ownerDocument}function Ie(e){return we(e).defaultView}function ke(e){var n=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,n)}}function Be(e,n,s){n||(n={});for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s!==!1||!Object.prototype.hasOwnProperty.call(n,i))&&(n[i]=e[i]);return n}function Ke(e,n,s,i,o){n==null&&(n=e.search(/[^\s\u00a0]/),n==-1&&(n=e.length));for(var h=i||0,m=o||0;;){var x=e.indexOf("	",h);if(x<0||x>=n)return m+(n-h);m+=x-h,m+=s-m%s,h=x+1}}var et=function(){this.id=null,this.f=null,this.time=0,this.handler=ke(this.onTimeout,this)};et.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},et.prototype.set=function(e,n){this.f=n;var s=+new Date+e;(!this.id||s<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=s)};function $e(e,n){for(var s=0;s<e.length;++s)if(e[s]==n)return s;return-1}var Ft=50,Yt={toString:function(){return"CodeMirror.Pass"}},Ct={scroll:!1},xt={origin:"*mouse"},tt={origin:"+move"};function Ue(e,n,s){for(var i=0,o=0;;){var h=e.indexOf("	",i);h==-1&&(h=e.length);var m=h-i;if(h==e.length||o+m>=n)return i+Math.min(m,n-o);if(o+=h-i,o+=s-o%s,i=h+1,o>=n)return i}}var vt=[""];function yt(e){for(;vt.length<=e;)vt.push(Qe(vt)+" ");return vt[e]}function Qe(e){return e[e.length-1]}function ut(e,n){for(var s=[],i=0;i<e.length;i++)s[i]=n(e[i],i);return s}function ie(e,n,s){for(var i=0,o=s(n);i<e.length&&s(e[i])<=o;)i++;e.splice(i,0,n)}function je(){}function pe(e,n){var s;return Object.create?s=Object.create(e):(je.prototype=e,s=new je),n&&Be(n,s),s}var kt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function Ye(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||kt.test(e))}function ot(e,n){return n?n.source.indexOf("\\w")>-1&&Ye(e)?!0:n.test(e):Ye(e)}function Ze(e){for(var n in e)if(e.hasOwnProperty(n)&&e[n])return!1;return!0}var mt=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function pt(e){return e.charCodeAt(0)>=768&&mt.test(e)}function Xt(e,n,s){for(;(s<0?n>0:n<e.length)&&pt(e.charAt(n));)n+=s;return n}function nr(e,n,s){for(var i=n>s?-1:1;;){if(n==s)return n;var o=(n+s)/2,h=i<0?Math.ceil(o):Math.floor(o);if(h==n)return e(h)?n:s;e(h)?s=h:n=h+i}}function Sr(e,n,s,i){if(!e)return i(n,s,"ltr",0);for(var o=!1,h=0;h<e.length;++h){var m=e[h];(m.from<s&&m.to>n||n==s&&m.to==n)&&(i(Math.max(m.from,n),Math.min(m.to,s),m.level==1?"rtl":"ltr",h),o=!0)}o||i(n,s,"ltr")}var Rr=null;function Br(e,n,s){var i;Rr=null;for(var o=0;o<e.length;++o){var h=e[o];if(h.from<n&&h.to>n)return o;h.to==n&&(h.from!=h.to&&s=="before"?i=o:Rr=o),h.from==n&&(h.from!=h.to&&s!="before"?i=o:Rr=o)}return i??Rr}var Ur=(function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function s(S){return S<=247?e.charAt(S):1424<=S&&S<=1524?"R":1536<=S&&S<=1785?n.charAt(S-1536):1774<=S&&S<=2220?"r":8192<=S&&S<=8203?"w":S==8204?"b":"L"}var i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,h=/[LRr]/,m=/[Lb1n]/,x=/[1n]/;function w(S,z,U){this.level=S,this.from=z,this.to=U}return function(S,z){var U=z=="ltr"?"L":"R";if(S.length==0||z=="ltr"&&!i.test(S))return!1;for(var re=S.length,ee=[],me=0;me<re;++me)ee.push(s(S.charCodeAt(me)));for(var xe=0,Ae=U;xe<re;++xe){var Ee=ee[xe];Ee=="m"?ee[xe]=Ae:Ae=Ee}for(var ze=0,Me=U;ze<re;++ze){var Ge=ee[ze];Ge=="1"&&Me=="r"?ee[ze]="n":h.test(Ge)&&(Me=Ge,Ge=="r"&&(ee[ze]="R"))}for(var at=1,Ve=ee[0];at<re-1;++at){var St=ee[at];St=="+"&&Ve=="1"&&ee[at+1]=="1"?ee[at]="1":St==","&&Ve==ee[at+1]&&(Ve=="1"||Ve=="n")&&(ee[at]=Ve),Ve=St}for(var Et=0;Et<re;++Et){var Un=ee[Et];if(Un==",")ee[Et]="N";else if(Un=="%"){var sn=void 0;for(sn=Et+1;sn<re&&ee[sn]=="%";++sn);for(var xr=Et&&ee[Et-1]=="!"||sn<re&&ee[sn]=="1"?"1":"N",lr=Et;lr<sn;++lr)ee[lr]=xr;Et=sn-1}}for(var vn=0,br=U;vn<re;++vn){var jn=ee[vn];br=="L"&&jn=="1"?ee[vn]="L":h.test(jn)&&(br=jn)}for(var xn=0;xn<re;++xn)if(o.test(ee[xn])){var Dt=void 0;for(Dt=xn+1;Dt<re&&o.test(ee[Dt]);++Dt);for(var dt=(xn?ee[xn-1]:U)=="L",zt=(Dt<re?ee[Dt]:U)=="L",on=dt==zt?dt?"L":"R":U,un=xn;un<Dt;++un)ee[un]=on;xn=Dt-1}for(var Ut=[],wr,Lt=0;Lt<re;)if(m.test(ee[Lt])){var lo=Lt;for(++Lt;Lt<re&&m.test(ee[Lt]);++Lt);Ut.push(new w(0,lo,Lt))}else{var kr=Lt,Ri=Ut.length,es=z=="rtl"?1:0;for(++Lt;Lt<re&&ee[Lt]!="L";++Lt);for(var Rn=kr;Rn<Lt;)if(x.test(ee[Rn])){kr<Rn&&(Ut.splice(Ri,0,new w(1,kr,Rn)),Ri+=es);var qn=Rn;for(++Rn;Rn<Lt&&x.test(ee[Rn]);++Rn);Ut.splice(Ri,0,new w(2,qn,Rn)),Ri+=es,kr=Rn}else++Rn;kr<Lt&&Ut.splice(Ri,0,new w(1,kr,Lt))}return z=="ltr"&&(Ut[0].level==1&&(wr=S.match(/^\s+/))&&(Ut[0].from=wr[0].length,Ut.unshift(new w(0,0,wr[0].length))),Qe(Ut).level==1&&(wr=S.match(/\s+$/))&&(Qe(Ut).to-=wr[0].length,Ut.push(new w(0,re-wr[0].length,re)))),z=="rtl"?Ut.reverse():Ut}})();function bt(e,n){var s=e.order;return s==null&&(s=e.order=Ur(e.text,n)),s}var fi=[],rt=function(e,n,s){if(e.addEventListener)e.addEventListener(n,s,!1);else if(e.attachEvent)e.attachEvent("on"+n,s);else{var i=e._handlers||(e._handlers={});i[n]=(i[n]||fi).concat(s)}};function _r(e,n){return e._handlers&&e._handlers[n]||fi}function tn(e,n,s){if(e.removeEventListener)e.removeEventListener(n,s,!1);else if(e.detachEvent)e.detachEvent("on"+n,s);else{var i=e._handlers,o=i&&i[n];if(o){var h=$e(o,s);h>-1&&(i[n]=o.slice(0,h).concat(o.slice(h+1)))}}}function It(e,n){var s=_r(e,n);if(s.length)for(var i=Array.prototype.slice.call(arguments,2),o=0;o<s.length;++o)s[o].apply(null,i)}function qt(e,n,s){return typeof n=="string"&&(n={type:n,preventDefault:function(){this.defaultPrevented=!0}}),It(e,s||n.type,e,n),On(n)||n.codemirrorIgnore}function bn(e){var n=e._handlers&&e._handlers.cursorActivity;if(n)for(var s=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),i=0;i<n.length;++i)$e(s,n[i])==-1&&s.push(n[i])}function gn(e,n){return _r(e,n).length>0}function En(e){e.prototype.on=function(n,s){rt(this,n,s)},e.prototype.off=function(n,s){tn(this,n,s)}}function wn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ni(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function On(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==!1}function pr(e){wn(e),ni(e)}function mi(e){return e.target||e.srcElement}function Ln(e){var n=e.which;return n==null&&(e.button&1?n=1:e.button&2?n=3:e.button&4&&(n=2)),Y&&e.ctrlKey&&n==1&&(n=3),n}var os=(function(){if(k&&E<9)return!1;var e=L("div");return"draggable"in e||"dragDrop"in e})(),kn;function Cr(e){if(kn==null){var n=L("span","​");ye(e,L("span",[n,document.createTextNode("x")])),e.firstChild.offsetHeight!=0&&(kn=n.offsetWidth<=1&&n.offsetHeight>2&&!(k&&E<8))}var s=kn?L("span","​"):L("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return s.setAttribute("cm-text",""),s}var qr;function Ir(e){if(qr!=null)return qr;var n=ye(e,document.createTextNode("AخA")),s=K(n,0,1).getBoundingClientRect(),i=K(n,1,2).getBoundingClientRect();return oe(e),!s||s.left==s.right?!1:qr=i.right-s.right<3}var Tr=`

b`.split(/\n/).length!=3?function(e){for(var n=0,s=[],i=e.length;n<=i;){var o=e.indexOf(`
`,n);o==-1&&(o=e.length);var h=e.slice(n,e.charAt(o-1)=="\r"?o-1:o),m=h.indexOf("\r");m!=-1?(s.push(h.slice(0,m)),n+=m+1):(s.push(h),n=o+1)}return s}:function(e){return e.split(/\r\n?|\n/)},gi=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch{return!1}}:function(e){var n;try{n=e.ownerDocument.selection.createRange()}catch{}return!n||n.parentElement()!=e?!1:n.compareEndPoints("StartToEnd",n)!=0},as=(function(){var e=L("div");return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),typeof e.oncopy=="function")})(),Mn=null;function ls(e){if(Mn!=null)return Mn;var n=ye(e,L("span","x")),s=n.getBoundingClientRect(),i=K(n,0,1).getBoundingClientRect();return Mn=Math.abs(s.left-i.left)>1}var Mi={},Or={};function Gn(e,n){arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),Mi[e]=n}function yi(e,n){Or[e]=n}function Di(e){if(typeof e=="string"&&Or.hasOwnProperty(e))e=Or[e];else if(e&&typeof e.name=="string"&&Or.hasOwnProperty(e.name)){var n=Or[e.name];typeof n=="string"&&(n={name:n}),e=pe(n,e),e.name=n.name}else{if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Di("application/xml");if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Di("application/json")}return typeof e=="string"?{name:e}:e||{name:"null"}}function Bt(e,n){n=Di(n);var s=Mi[n.name];if(!s)return Bt(e,"text/plain");var i=s(e,n);if(Mr.hasOwnProperty(n.name)){var o=Mr[n.name];for(var h in o)o.hasOwnProperty(h)&&(i.hasOwnProperty(h)&&(i["_"+h]=i[h]),i[h]=o[h])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var m in n.modeProps)i[m]=n.modeProps[m];return i}var Mr={};function us(e,n){var s=Mr.hasOwnProperty(e)?Mr[e]:Mr[e]={};Be(n,s)}function Rt(e,n){if(n===!0)return n;if(e.copyState)return e.copyState(n);var s={};for(var i in n){var o=n[i];o instanceof Array&&(o=o.concat([])),s[i]=o}return s}function zi(e,n){for(var s;e.innerMode&&(s=e.innerMode(n),!(!s||s.mode==e));)n=s.state,e=s.mode;return s||{mode:e,state:n}}function ri(e,n,s){return e.startState?e.startState(n,s):!0}var Vt=function(e,n,s){this.pos=this.start=0,this.string=e,this.tabSize=n||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=s};Vt.prototype.eol=function(){return this.pos>=this.string.length},Vt.prototype.sol=function(){return this.pos==this.lineStart},Vt.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Vt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Vt.prototype.eat=function(e){var n=this.string.charAt(this.pos),s;if(typeof e=="string"?s=n==e:s=n&&(e.test?e.test(n):e(n)),s)return++this.pos,n},Vt.prototype.eatWhile=function(e){for(var n=this.pos;this.eat(e););return this.pos>n},Vt.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Vt.prototype.skipToEnd=function(){this.pos=this.string.length},Vt.prototype.skipTo=function(e){var n=this.string.indexOf(e,this.pos);if(n>-1)return this.pos=n,!0},Vt.prototype.backUp=function(e){this.pos-=e},Vt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Ke(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Ke(this.string,this.lineStart,this.tabSize):0)},Vt.prototype.indentation=function(){return Ke(this.string,null,this.tabSize)-(this.lineStart?Ke(this.string,this.lineStart,this.tabSize):0)},Vt.prototype.match=function(e,n,s){if(typeof e=="string"){var i=function(m){return s?m.toLowerCase():m},o=this.string.substr(this.pos,e.length);if(i(o)==i(e))return n!==!1&&(this.pos+=e.length),!0}else{var h=this.string.slice(this.pos).match(e);return h&&h.index>0?null:(h&&n!==!1&&(this.pos+=h[0].length),h)}},Vt.prototype.current=function(){return this.string.slice(this.start,this.pos)},Vt.prototype.hideFirstChars=function(e,n){this.lineStart+=e;try{return n()}finally{this.lineStart-=e}},Vt.prototype.lookAhead=function(e){var n=this.lineOracle;return n&&n.lookAhead(e)},Vt.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};function Je(e,n){if(n-=e.first,n<0||n>=e.size)throw new Error("There is no line "+(n+e.first)+" in the document.");for(var s=e;!s.lines;)for(var i=0;;++i){var o=s.children[i],h=o.chunkSize();if(n<h){s=o;break}n-=h}return s.lines[n]}function ii(e,n,s){var i=[],o=n.line;return e.iter(n.line,s.line+1,function(h){var m=h.text;o==s.line&&(m=m.slice(0,s.ch)),o==n.line&&(m=m.slice(n.ch)),i.push(m),++o}),i}function cs(e,n,s){var i=[];return e.iter(n,s,function(o){i.push(o.text)}),i}function Yn(e,n){var s=n-e.height;if(s)for(var i=e;i;i=i.parent)i.height+=s}function T(e){if(e.parent==null)return null;for(var n=e.parent,s=$e(n.lines,e),i=n.parent;i;n=i,i=i.parent)for(var o=0;i.children[o]!=n;++o)s+=i.children[o].chunkSize();return s+n.first}function B(e,n){var s=e.first;e:do{for(var i=0;i<e.children.length;++i){var o=e.children[i],h=o.height;if(n<h){e=o;continue e}n-=h,s+=o.chunkSize()}return s}while(!e.lines);for(var m=0;m<e.lines.length;++m){var x=e.lines[m],w=x.height;if(n<w)break;n-=w}return s+m}function fe(e,n){return n>=e.first&&n<e.first+e.size}function Ne(e,n){return String(e.lineNumberFormatter(n+e.firstLineNumber))}function de(e,n,s){if(s===void 0&&(s=null),!(this instanceof de))return new de(e,n,s);this.line=e,this.ch=n,this.sticky=s}function He(e,n){return e.line-n.line||e.ch-n.ch}function jt(e,n){return e.sticky==n.sticky&&He(e,n)==0}function Qt(e){return de(e.line,e.ch)}function Sn(e,n){return He(e,n)<0?n:e}function Kr(e,n){return He(e,n)<0?e:n}function tl(e,n){return Math.max(e.first,Math.min(n,e.first+e.size-1))}function gt(e,n){if(n.line<e.first)return de(e.first,0);var s=e.first+e.size-1;return n.line>s?de(s,Je(e,s).text.length):ia(n,Je(e,n.line).text.length)}function ia(e,n){var s=e.ch;return s==null||s>n?de(e.line,n):s<0?de(e.line,0):e}function sa(e,n){for(var s=[],i=0;i<n.length;i++)s[i]=gt(e,n[i]);return s}var Fi=function(e,n){this.state=e,this.lookAhead=n},rr=function(e,n,s,i){this.state=n,this.doc=e,this.line=s,this.maxLookAhead=i||0,this.baseTokens=null,this.baseTokenPos=1};rr.prototype.lookAhead=function(e){var n=this.doc.getLine(this.line+e);return n!=null&&e>this.maxLookAhead&&(this.maxLookAhead=e),n},rr.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var n=this.baseTokens[this.baseTokenPos+1];return{type:n&&n.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},rr.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},rr.fromSaved=function(e,n,s){return n instanceof Fi?new rr(e,Rt(e.mode,n.state),s,n.lookAhead):new rr(e,Rt(e.mode,n),s)},rr.prototype.save=function(e){var n=e!==!1?Rt(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new Fi(n,this.maxLookAhead):n};function oa(e,n,s,i){var o=[e.state.modeGen],h={};ir(e,n.text,e.doc.mode,s,function(S,z){return o.push(S,z)},h,i);for(var m=s.state,x=function(S){s.baseTokens=o;var z=e.state.overlays[S],U=1,re=0;s.state=!0,ir(e,n.text,z.mode,s,function(ee,me){for(var xe=U;re<ee;){var Ae=o[U];Ae>ee&&o.splice(U,1,ee,o[U+1],Ae),U+=2,re=Math.min(ee,Ae)}if(me)if(z.opaque)o.splice(xe,U-xe,ee,"overlay "+me),U=xe+2;else for(;xe<U;xe+=2){var Ee=o[xe+1];o[xe+1]=(Ee?Ee+" ":"")+"overlay "+me}},h),s.state=m,s.baseTokens=null,s.baseTokenPos=1},w=0;w<e.state.overlays.length;++w)x(w);return{styles:o,classes:h.bgClass||h.textClass?h:null}}function Wi(e,n,s){if(!n.styles||n.styles[0]!=e.state.modeGen){var i=Nt(e,T(n)),o=n.text.length>e.options.maxHighlightLength&&Rt(e.doc.mode,i.state),h=oa(e,n,i);o&&(i.state=o),n.stateAfter=i.save(!o),n.styles=h.styles,h.classes?n.styleClasses=h.classes:n.styleClasses&&(n.styleClasses=null),s===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return n.styles}function Nt(e,n,s){var i=e.doc,o=e.display;if(!i.mode.startState)return new rr(i,!0,n);var h=bo(e,n,s),m=h>i.first&&Je(i,h-1).stateAfter,x=m?rr.fromSaved(i,m,h):new rr(i,ri(i.mode),h);return i.iter(h,n,function(w){ds(e,w.text,x);var S=x.line;w.stateAfter=S==n-1||S%5==0||S>=o.viewFrom&&S<o.viewTo?x.save():null,x.nextLine()}),s&&(i.modeFrontier=x.line),x}function ds(e,n,s,i){var o=e.doc.mode,h=new Vt(n,e.options.tabSize,s);for(h.start=h.pos=i||0,n==""&&Is(o,s.state);!h.eol();)vi(o,h,s.state),h.start=h.pos}function Is(e,n){if(e.blankLine)return e.blankLine(n);if(e.innerMode){var s=zi(e,n);if(s.mode.blankLine)return s.mode.blankLine(s.state)}}function vi(e,n,s,i){for(var o=0;o<10;o++){i&&(i[0]=zi(e,s).mode);var h=e.token(n,s);if(n.pos>n.start)return h}throw new Error("Mode "+e.name+" failed to advance stream.")}var xo=function(e,n,s){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=n||null,this.state=s};function xi(e,n,s,i){var o=e.doc,h=o.mode,m;n=gt(o,n);var x=Je(o,n.line),w=Nt(e,n.line,s),S=new Vt(x.text,e.options.tabSize,w),z;for(i&&(z=[]);(i||S.pos<n.ch)&&!S.eol();)S.start=S.pos,m=vi(h,S,w.state),i&&z.push(new xo(S,m,Rt(o.mode,w.state)));return i?z:new xo(S,m,w.state)}function Hi(e,n){if(e)for(;;){var s=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!s)break;e=e.slice(0,s.index)+e.slice(s.index+s[0].length);var i=s[1]?"bgClass":"textClass";n[i]==null?n[i]=s[2]:new RegExp("(?:^|\\s)"+s[2]+"(?:$|\\s)").test(n[i])||(n[i]+=" "+s[2])}return e}function ir(e,n,s,i,o,h,m){var x=s.flattenSpans;x==null&&(x=e.options.flattenSpans);var w=0,S=null,z=new Vt(n,e.options.tabSize,i),U,re=e.options.addModeClass&&[null];for(n==""&&Hi(Is(s,i.state),h);!z.eol();){if(z.pos>e.options.maxHighlightLength?(x=!1,m&&ds(e,n,i,z.pos),z.pos=n.length,U=null):U=Hi(vi(s,z,i.state,re),h),re){var ee=re[0].name;ee&&(U="m-"+(U?ee+" "+U:ee))}if(!x||S!=U){for(;w<z.start;)w=Math.min(z.start,w+5e3),o(w,S);S=U}z.start=z.pos}for(;w<z.pos;){var me=Math.min(z.pos,w+5e3);o(me,S),w=me}}function bo(e,n,s){for(var i,o,h=e.doc,m=s?-1:n-(e.doc.mode.innerMode?1e3:100),x=n;x>m;--x){if(x<=h.first)return h.first;var w=Je(h,x-1),S=w.stateAfter;if(S&&(!s||x+(S instanceof Fi?S.lookAhead:0)<=h.modeFrontier))return x;var z=Ke(w.text,null,e.options.tabSize);(o==null||i>z)&&(o=x-1,i=z)}return o}function Dr(e,n){if(e.modeFrontier=Math.min(e.modeFrontier,n),!(e.highlightFrontier<n-10)){for(var s=e.first,i=n-1;i>s;i--){var o=Je(e,i).stateAfter;if(o&&(!(o instanceof Fi)||i+o.lookAhead<n)){s=i+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,s)}}var si=!1,Dn=!1;function $r(){si=!0}function Os(){Dn=!0}function jr(e,n,s){this.marker=e,this.from=n,this.to=s}function Ms(e,n){if(e)for(var s=0;s<e.length;++s){var i=e[s];if(i.marker==n)return i}}function aa(e,n){for(var s,i=0;i<e.length;++i)e[i]!=n&&(s||(s=[])).push(e[i]);return s}function Ds(e,n,s){var i=s&&window.WeakSet&&(s.markedSpans||(s.markedSpans=new WeakSet));i&&e.markedSpans&&i.has(e.markedSpans)?e.markedSpans.push(n):(e.markedSpans=e.markedSpans?e.markedSpans.concat([n]):[n],i&&i.add(e.markedSpans)),n.marker.attachLine(e)}function Jl(e,n,s){var i;if(e)for(var o=0;o<e.length;++o){var h=e[o],m=h.marker,x=h.from==null||(m.inclusiveLeft?h.from<=n:h.from<n);if(x||h.from==n&&m.type=="bookmark"&&(!s||!h.marker.insertLeft)){var w=h.to==null||(m.inclusiveRight?h.to>=n:h.to>n);(i||(i=[])).push(new jr(m,h.from,w?null:h.to))}}return i}function la(e,n,s){var i;if(e)for(var o=0;o<e.length;++o){var h=e[o],m=h.marker,x=h.to==null||(m.inclusiveRight?h.to>=n:h.to>n);if(x||h.from==n&&m.type=="bookmark"&&(!s||h.marker.insertLeft)){var w=h.from==null||(m.inclusiveLeft?h.from<=n:h.from<n);(i||(i=[])).push(new jr(m,w?null:h.from-n,h.to==null?null:h.to-n))}}return i}function ps(e,n){if(n.full)return null;var s=fe(e,n.from.line)&&Je(e,n.from.line).markedSpans,i=fe(e,n.to.line)&&Je(e,n.to.line).markedSpans;if(!s&&!i)return null;var o=n.from.ch,h=n.to.ch,m=He(n.from,n.to)==0,x=Jl(s,o,m),w=la(i,h,m),S=n.text.length==1,z=Qe(n.text).length+(S?o:0);if(x)for(var U=0;U<x.length;++U){var re=x[U];if(re.to==null){var ee=Ms(w,re.marker);ee?S&&(re.to=ee.to==null?null:ee.to+z):re.to=o}}if(w)for(var me=0;me<w.length;++me){var xe=w[me];if(xe.to!=null&&(xe.to+=z),xe.from==null){var Ae=Ms(x,xe.marker);Ae||(xe.from=z,S&&(x||(x=[])).push(xe))}else xe.from+=z,S&&(x||(x=[])).push(xe)}x&&(x=zs(x)),w&&w!=x&&(w=zs(w));var Ee=[x];if(!S){var ze=n.text.length-2,Me;if(ze>0&&x)for(var Ge=0;Ge<x.length;++Ge)x[Ge].to==null&&(Me||(Me=[])).push(new jr(x[Ge].marker,null,null));for(var at=0;at<ze;++at)Ee.push(Me);Ee.push(w)}return Ee}function zs(e){for(var n=0;n<e.length;++n){var s=e[n];s.from!=null&&s.from==s.to&&s.marker.clearWhenEmpty!==!1&&e.splice(n--,1)}return e.length?e:null}function ua(e,n,s){var i=null;if(e.iter(n.line,s.line+1,function(ee){if(ee.markedSpans)for(var me=0;me<ee.markedSpans.length;++me){var xe=ee.markedSpans[me].marker;xe.readOnly&&(!i||$e(i,xe)==-1)&&(i||(i=[])).push(xe)}}),!i)return null;for(var o=[{from:n,to:s}],h=0;h<i.length;++h)for(var m=i[h],x=m.find(0),w=0;w<o.length;++w){var S=o[w];if(!(He(S.to,x.from)<0||He(S.from,x.to)>0)){var z=[w,1],U=He(S.from,x.from),re=He(S.to,x.to);(U<0||!m.inclusiveLeft&&!U)&&z.push({from:S.from,to:x.from}),(re>0||!m.inclusiveRight&&!re)&&z.push({from:x.to,to:S.to}),o.splice.apply(o,z),w+=z.length-3}}return o}function bi(e){var n=e.markedSpans;if(n){for(var s=0;s<n.length;++s)n[s].marker.detachLine(e);e.markedSpans=null}}function _e(e,n){if(n){for(var s=0;s<n.length;++s)n[s].marker.attachLine(e);e.markedSpans=n}}function O(e){return e.inclusiveLeft?-1:0}function te(e){return e.inclusiveRight?1:0}function ve(e,n){var s=e.lines.length-n.lines.length;if(s!=0)return s;var i=e.find(),o=n.find(),h=He(i.from,o.from)||O(e)-O(n);if(h)return-h;var m=He(i.to,o.to)||te(e)-te(n);return m||n.id-e.id}function Le(e,n){var s=Dn&&e.markedSpans,i;if(s)for(var o=void 0,h=0;h<s.length;++h)o=s[h],o.marker.collapsed&&(n?o.from:o.to)==null&&(!i||ve(i,o.marker)<0)&&(i=o.marker);return i}function nt(e){return Le(e,!0)}function ct(e){return Le(e,!1)}function Tt(e,n){var s=Dn&&e.markedSpans,i;if(s)for(var o=0;o<s.length;++o){var h=s[o];h.marker.collapsed&&(h.from==null||h.from<n)&&(h.to==null||h.to>n)&&(!i||ve(i,h.marker)<0)&&(i=h.marker)}return i}function dn(e,n,s,i,o){var h=Je(e,n),m=Dn&&h.markedSpans;if(m)for(var x=0;x<m.length;++x){var w=m[x];if(w.marker.collapsed){var S=w.marker.find(0),z=He(S.from,s)||O(w.marker)-O(o),U=He(S.to,i)||te(w.marker)-te(o);if(!(z>=0&&U<=0||z<=0&&U>=0)&&(z<=0&&(w.marker.inclusiveRight&&o.inclusiveLeft?He(S.to,s)>=0:He(S.to,s)>0)||z>=0&&(w.marker.inclusiveRight&&o.inclusiveLeft?He(S.from,i)<=0:He(S.from,i)<0)))return!0}}}function Kt(e){for(var n;n=nt(e);)e=n.find(-1,!0).line;return e}function hr(e){for(var n;n=ct(e);)e=n.find(1,!0).line;return e}function Vn(e){for(var n,s;n=ct(e);)e=n.find(1,!0).line,(s||(s=[])).push(e);return s}function fr(e,n){var s=Je(e,n),i=Kt(s);return s==i?n:T(i)}function pn(e,n){if(n>e.lastLine())return n;var s=Je(e,n),i;if(!Nr(e,s))return n;for(;i=ct(s);)s=i.find(1,!0).line;return T(s)+1}function Nr(e,n){var s=Dn&&n.markedSpans;if(s){for(var i=void 0,o=0;o<s.length;++o)if(i=s[o],!!i.marker.collapsed){if(i.from==null)return!0;if(!i.marker.widgetNode&&i.from==0&&i.marker.inclusiveLeft&&nl(e,n,i))return!0}}}function nl(e,n,s){if(s.to==null){var i=s.marker.find(1,!0);return nl(e,i.line,Ms(i.line.markedSpans,s.marker))}if(s.marker.inclusiveRight&&s.to==n.text.length)return!0;for(var o=void 0,h=0;h<n.markedSpans.length;++h)if(o=n.markedSpans[h],o.marker.collapsed&&!o.marker.widgetNode&&o.from==s.to&&(o.to==null||o.to!=s.from)&&(o.marker.inclusiveLeft||s.marker.inclusiveRight)&&nl(e,n,o))return!0}function _n(e){e=Kt(e);for(var n=0,s=e.parent,i=0;i<s.lines.length;++i){var o=s.lines[i];if(o==e)break;n+=o.height}for(var h=s.parent;h;s=h,h=s.parent)for(var m=0;m<h.children.length;++m){var x=h.children[m];if(x==s)break;n+=x.height}return n}function Bi(e){if(e.height==0)return 0;for(var n=e.text.length,s,i=e;s=nt(i);){var o=s.find(0,!0);i=o.from.line,n+=o.from.ch-o.to.ch}for(i=e;s=ct(i);){var h=s.find(0,!0);n-=i.text.length-h.from.ch,i=h.to.line,n+=i.text.length-h.to.ch}return n}function ca(e){var n=e.display,s=e.doc;n.maxLine=Je(s,s.first),n.maxLineLength=Bi(n.maxLine),n.maxLineChanged=!0,s.iter(function(i){var o=Bi(i);o>n.maxLineLength&&(n.maxLineLength=o,n.maxLine=i)})}var wi=function(e,n,s){this.text=e,_e(this,n),this.height=s?s(this):1};wi.prototype.lineNo=function(){return T(this)},En(wi);function qd(e,n,s,i){e.text=n,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),e.order!=null&&(e.order=null),bi(e),_e(e,s);var o=i?i(e):1;o!=e.height&&Yn(e,o)}function Xl(e){e.parent=null,bi(e)}var Ql={},da={};function pa(e,n){if(!e||/^\s*$/.test(e))return null;var s=n.addModeClass?da:Ql;return s[e]||(s[e]=e.replace(/\S+/g,"cm-$&"))}function Zl(e,n){var s=X("span",null,null,N?"padding-right: .1px":null),i={pre:X("pre",[s],"CodeMirror-line"),content:s,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};n.measure={};for(var o=0;o<=(n.rest?n.rest.length:0);o++){var h=o?n.rest[o-1]:n.line,m=void 0;i.pos=0,i.addToken=$d,Ir(e.display.measure)&&(m=bt(h,e.doc.direction))&&(i.addToken=eu(i.addToken,m)),i.map=[];var x=n!=e.display.externalMeasured&&T(h);Yd(h,i,Wi(e,h,x)),h.styleClasses&&(h.styleClasses.bgClass&&(i.bgClass=M(h.styleClasses.bgClass,i.bgClass||"")),h.styleClasses.textClass&&(i.textClass=M(h.styleClasses.textClass,i.textClass||""))),i.map.length==0&&i.map.push(0,0,i.content.appendChild(Cr(e.display.measure))),o==0?(n.measure.map=i.map,n.measure.cache={}):((n.measure.maps||(n.measure.maps=[])).push(i.map),(n.measure.caches||(n.measure.caches=[])).push({}))}if(N){var w=i.content.lastChild;(/\bcm-tab\b/.test(w.className)||w.querySelector&&w.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return It(e,"renderLine",e,n.line,i.pre),i.pre.className&&(i.textClass=M(i.pre.className,i.textClass||"")),i}function Kd(e){var n=L("span","•","cm-invalidchar");return n.title="\\u"+e.charCodeAt(0).toString(16),n.setAttribute("aria-label",n.title),n}function $d(e,n,s,i,o,h,m){if(n){var x=e.splitSpaces?Gd(n,e.trailingSpace):n,w=e.cm.state.specialChars,S=!1,z;if(!w.test(n))e.col+=n.length,z=document.createTextNode(x),e.map.push(e.pos,e.pos+n.length,z),k&&E<9&&(S=!0),e.pos+=n.length;else{z=document.createDocumentFragment();for(var U=0;;){w.lastIndex=U;var re=w.exec(n),ee=re?re.index-U:n.length-U;if(ee){var me=document.createTextNode(x.slice(U,U+ee));k&&E<9?z.appendChild(L("span",[me])):z.appendChild(me),e.map.push(e.pos,e.pos+ee,me),e.col+=ee,e.pos+=ee}if(!re)break;U+=ee+1;var xe=void 0;if(re[0]=="	"){var Ae=e.cm.options.tabSize,Ee=Ae-e.col%Ae;xe=z.appendChild(L("span",yt(Ee),"cm-tab")),xe.setAttribute("role","presentation"),xe.setAttribute("cm-text","	"),e.col+=Ee}else re[0]=="\r"||re[0]==`
`?(xe=z.appendChild(L("span",re[0]=="\r"?"␍":"␤","cm-invalidchar")),xe.setAttribute("cm-text",re[0]),e.col+=1):(xe=e.cm.options.specialCharPlaceholder(re[0]),xe.setAttribute("cm-text",re[0]),k&&E<9?z.appendChild(L("span",[xe])):z.appendChild(xe),e.col+=1);e.map.push(e.pos,e.pos+1,xe),e.pos++}}if(e.trailingSpace=x.charCodeAt(n.length-1)==32,s||i||o||S||h||m){var ze=s||"";i&&(ze+=i),o&&(ze+=o);var Me=L("span",[z],ze,h);if(m)for(var Ge in m)m.hasOwnProperty(Ge)&&Ge!="style"&&Ge!="class"&&Me.setAttribute(Ge,m[Ge]);return e.content.appendChild(Me)}e.content.appendChild(z)}}function Gd(e,n){if(e.length>1&&!/  /.test(e))return e;for(var s=n,i="",o=0;o<e.length;o++){var h=e.charAt(o);h==" "&&s&&(o==e.length-1||e.charCodeAt(o+1)==32)&&(h=" "),i+=h,s=h==" "}return i}function eu(e,n){return function(s,i,o,h,m,x,w){o=o?o+" cm-force-border":"cm-force-border";for(var S=s.pos,z=S+i.length;;){for(var U=void 0,re=0;re<n.length&&(U=n[re],!(U.to>S&&U.from<=S));re++);if(U.to>=z)return e(s,i,o,h,m,x,w);e(s,i.slice(0,U.to-S),o,h,null,x,w),h=null,i=i.slice(U.to-S),S=U.to}}}function hc(e,n,s,i){var o=!i&&s.widgetNode;o&&e.map.push(e.pos,e.pos+n,o),!i&&e.cm.display.input.needsContentAttribute&&(o||(o=e.content.appendChild(document.createElement("span"))),o.setAttribute("cm-marker",s.id)),o&&(e.cm.display.input.setUneditable(o),e.content.appendChild(o)),e.pos+=n,e.trailingSpace=!1}function Yd(e,n,s){var i=e.markedSpans,o=e.text,h=0;if(!i){for(var m=1;m<s.length;m+=2)n.addToken(n,o.slice(h,h=s[m]),pa(s[m+1],n.cm.options));return}for(var x=o.length,w=0,S=1,z="",U,re,ee=0,me,xe,Ae,Ee,ze;;){if(ee==w){me=xe=Ae=re="",ze=null,Ee=null,ee=1/0;for(var Me=[],Ge=void 0,at=0;at<i.length;++at){var Ve=i[at],St=Ve.marker;if(St.type=="bookmark"&&Ve.from==w&&St.widgetNode)Me.push(St);else if(Ve.from<=w&&(Ve.to==null||Ve.to>w||St.collapsed&&Ve.to==w&&Ve.from==w)){if(Ve.to!=null&&Ve.to!=w&&ee>Ve.to&&(ee=Ve.to,xe=""),St.className&&(me+=" "+St.className),St.css&&(re=(re?re+";":"")+St.css),St.startStyle&&Ve.from==w&&(Ae+=" "+St.startStyle),St.endStyle&&Ve.to==ee&&(Ge||(Ge=[])).push(St.endStyle,Ve.to),St.title&&((ze||(ze={})).title=St.title),St.attributes)for(var Et in St.attributes)(ze||(ze={}))[Et]=St.attributes[Et];St.collapsed&&(!Ee||ve(Ee.marker,St)<0)&&(Ee=Ve)}else Ve.from>w&&ee>Ve.from&&(ee=Ve.from)}if(Ge)for(var Un=0;Un<Ge.length;Un+=2)Ge[Un+1]==ee&&(xe+=" "+Ge[Un]);if(!Ee||Ee.from==w)for(var sn=0;sn<Me.length;++sn)hc(n,0,Me[sn]);if(Ee&&(Ee.from||0)==w){if(hc(n,(Ee.to==null?x+1:Ee.to)-w,Ee.marker,Ee.from==null),Ee.to==null)return;Ee.to==w&&(Ee=!1)}}if(w>=x)break;for(var xr=Math.min(x,ee);;){if(z){var lr=w+z.length;if(!Ee){var vn=lr>xr?z.slice(0,xr-w):z;n.addToken(n,vn,U?U+me:me,Ae,w+vn.length==ee?xe:"",re,ze)}if(lr>=xr){z=z.slice(xr-w),w=xr;break}w=lr,Ae=""}z=o.slice(h,h=s[S++]),U=pa(s[S++],n.cm.options)}}}function fc(e,n,s){this.line=n,this.rest=Vn(n),this.size=this.rest?T(Qe(this.rest))-s+1:1,this.node=this.text=null,this.hidden=Nr(e,n)}function rl(e,n,s){for(var i=[],o,h=n;h<s;h=o){var m=new fc(e.doc,Je(e.doc,h),h);o=h+m.size,i.push(m)}return i}var wo=null;function mc(e){wo?wo.ops.push(e):e.ownsGroup=wo={ops:[e],delayedCallbacks:[]}}function Vd(e){var n=e.delayedCallbacks,s=0;do{for(;s<n.length;s++)n[s].call(null);for(var i=0;i<e.ops.length;i++){var o=e.ops[i];if(o.cursorActivityHandlers)for(;o.cursorActivityCalled<o.cursorActivityHandlers.length;)o.cursorActivityHandlers[o.cursorActivityCalled++].call(null,o.cm)}}while(s<n.length)}function Jd(e,n){var s=e.ownsGroup;if(s)try{Vd(s)}finally{wo=null,n(s)}}var ha=null;function zn(e,n){var s=_r(e,n);if(s.length){var i=Array.prototype.slice.call(arguments,2),o;wo?o=wo.delayedCallbacks:ha?o=ha:(o=ha=[],setTimeout(tu,0));for(var h=function(x){o.push(function(){return s[x].apply(null,i)})},m=0;m<s.length;++m)h(m)}}function tu(){var e=ha;ha=null;for(var n=0;n<e.length;++n)e[n]()}function gc(e,n,s,i){for(var o=0;o<n.changes.length;o++){var h=n.changes[o];h=="text"?Qd(e,n):h=="gutter"?yc(e,n,s,i):h=="class"?ru(e,n):h=="widget"&&Zd(e,n,i)}n.changes=null}function fa(e){return e.node==e.text&&(e.node=L("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),k&&E<8&&(e.node.style.zIndex=2)),e.node}function Xd(e,n){var s=n.bgClass?n.bgClass+" "+(n.line.bgClass||""):n.line.bgClass;if(s&&(s+=" CodeMirror-linebackground"),n.background)s?n.background.className=s:(n.background.parentNode.removeChild(n.background),n.background=null);else if(s){var i=fa(n);n.background=i.insertBefore(L("div",null,s),i.firstChild),e.display.input.setUneditable(n.background)}}function nu(e,n){var s=e.display.externalMeasured;return s&&s.line==n.line?(e.display.externalMeasured=null,n.measure=s.measure,s.built):Zl(e,n)}function Qd(e,n){var s=n.text.className,i=nu(e,n);n.text==n.node&&(n.node=i.pre),n.text.parentNode.replaceChild(i.pre,n.text),n.text=i.pre,i.bgClass!=n.bgClass||i.textClass!=n.textClass?(n.bgClass=i.bgClass,n.textClass=i.textClass,ru(e,n)):s&&(n.text.className=s)}function ru(e,n){Xd(e,n),n.line.wrapClass?fa(n).className=n.line.wrapClass:n.node!=n.text&&(n.node.className="");var s=n.textClass?n.textClass+" "+(n.line.textClass||""):n.line.textClass;n.text.className=s||""}function yc(e,n,s,i){if(n.gutter&&(n.node.removeChild(n.gutter),n.gutter=null),n.gutterBackground&&(n.node.removeChild(n.gutterBackground),n.gutterBackground=null),n.line.gutterClass){var o=fa(n);n.gutterBackground=L("div",null,"CodeMirror-gutter-background "+n.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(n.gutterBackground),o.insertBefore(n.gutterBackground,n.text)}var h=n.line.gutterMarkers;if(e.options.lineNumbers||h){var m=fa(n),x=n.gutter=L("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(x.setAttribute("aria-hidden","true"),e.display.input.setUneditable(x),m.insertBefore(x,n.text),n.line.gutterClass&&(x.className+=" "+n.line.gutterClass),e.options.lineNumbers&&(!h||!h["CodeMirror-linenumbers"])&&(n.lineNumber=x.appendChild(L("div",Ne(e.options,s),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),h)for(var w=0;w<e.display.gutterSpecs.length;++w){var S=e.display.gutterSpecs[w].className,z=h.hasOwnProperty(S)&&h[S];z&&x.appendChild(L("div",[z],"CodeMirror-gutter-elt","left: "+i.gutterLeft[S]+"px; width: "+i.gutterWidth[S]+"px"))}}}function Zd(e,n,s){n.alignable&&(n.alignable=null);for(var i=se("CodeMirror-linewidget"),o=n.node.firstChild,h=void 0;o;o=h)h=o.nextSibling,i.test(o.className)&&n.node.removeChild(o);vc(e,n,s)}function ep(e,n,s,i){var o=nu(e,n);return n.text=n.node=o.pre,o.bgClass&&(n.bgClass=o.bgClass),o.textClass&&(n.textClass=o.textClass),ru(e,n),yc(e,n,s,i),vc(e,n,i),n.node}function vc(e,n,s){if(xc(e,n.line,n,s,!0),n.rest)for(var i=0;i<n.rest.length;i++)xc(e,n.rest[i],n,s,!1)}function xc(e,n,s,i,o){if(n.widgets)for(var h=fa(s),m=0,x=n.widgets;m<x.length;++m){var w=x[m],S=L("div",[w.node],"CodeMirror-linewidget"+(w.className?" "+w.className:""));w.handleMouseEvents||S.setAttribute("cm-ignore-events","true"),iu(w,S,s,i),e.display.input.setUneditable(S),o&&w.above?h.insertBefore(S,s.gutter||s.text):h.appendChild(S),zn(w,"redraw")}}function iu(e,n,s,i){if(e.noHScroll){(s.alignable||(s.alignable=[])).push(n);var o=i.wrapperWidth;n.style.left=i.fixedPos+"px",e.coverGutter||(o-=i.gutterTotalWidth,n.style.paddingLeft=i.gutterTotalWidth+"px"),n.style.width=o+"px"}e.coverGutter&&(n.style.zIndex=5,n.style.position="relative",e.noHScroll||(n.style.marginLeft=-i.gutterTotalWidth+"px"))}function Ui(e){if(e.height!=null)return e.height;var n=e.doc.cm;if(!n)return 0;if(!j(document.body,e.node)){var s="position: relative;";e.coverGutter&&(s+="margin-left: -"+n.display.gutters.offsetWidth+"px;"),e.noHScroll&&(s+="width: "+n.display.wrapper.clientWidth+"px;"),ye(n.display.measure,L("div",[e.node],null,s))}return e.height=e.node.parentNode.offsetHeight}function qi(e,n){for(var s=mi(n);s!=e.wrapper;s=s.parentNode)if(!s||s.nodeType==1&&s.getAttribute("cm-ignore-events")=="true"||s.parentNode==e.sizer&&s!=e.mover)return!0}function ma(e){return e.lineSpace.offsetTop}function il(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function su(e){if(e.cachedPaddingH)return e.cachedPaddingH;var n=ye(e.measure,L("pre","x","CodeMirror-line-like")),s=window.getComputedStyle?window.getComputedStyle(n):n.currentStyle,i={left:parseInt(s.paddingLeft),right:parseInt(s.paddingRight)};return!isNaN(i.left)&&!isNaN(i.right)&&(e.cachedPaddingH=i),i}function oi(e){return Ft-e.display.nativeBarWidth}function hs(e){return e.display.scroller.clientWidth-oi(e)-e.display.barWidth}function fs(e){return e.display.scroller.clientHeight-oi(e)-e.display.barHeight}function tp(e,n,s){var i=e.options.lineWrapping,o=i&&hs(e);if(!n.measure.heights||i&&n.measure.width!=o){var h=n.measure.heights=[];if(i){n.measure.width=o;for(var m=n.text.firstChild.getClientRects(),x=0;x<m.length-1;x++){var w=m[x],S=m[x+1];Math.abs(w.bottom-S.bottom)>2&&h.push((w.bottom+S.top)/2-s.top)}}h.push(s.bottom-s.top)}}function bc(e,n,s){if(e.line==n)return{map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var i=0;i<e.rest.length;i++)if(e.rest[i]==n)return{map:e.measure.maps[i],cache:e.measure.caches[i]};for(var o=0;o<e.rest.length;o++)if(T(e.rest[o])>s)return{map:e.measure.maps[o],cache:e.measure.caches[o],before:!0}}}function np(e,n){n=Kt(n);var s=T(n),i=e.display.externalMeasured=new fc(e.doc,n,s);i.lineN=s;var o=i.built=Zl(e,i);return i.text=o.pre,ye(e.display.lineMeasure,o.pre),i}function ou(e,n,s,i){return Er(e,ki(e,n),s,i)}function sl(e,n){if(n>=e.display.viewFrom&&n<e.display.viewTo)return e.display.view[_i(e,n)];var s=e.display.externalMeasured;if(s&&n>=s.lineN&&n<s.lineN+s.size)return s}function ki(e,n){var s=T(n),i=sl(e,s);i&&!i.text?i=null:i&&i.changes&&(gc(e,i,s,dl(e)),e.curOp.forceUpdate=!0),i||(i=np(e,n));var o=bc(i,n,s);return{line:n,view:i,rect:null,map:o.map,cache:o.cache,before:o.before,hasHeights:!1}}function Er(e,n,s,i,o){n.before&&(s=-1);var h=s+(i||""),m;return n.cache.hasOwnProperty(h)?m=n.cache[h]:(n.rect||(n.rect=n.view.text.getBoundingClientRect()),n.hasHeights||(tp(e,n.view,n.rect),n.hasHeights=!0),m=kc(e,n,s,i),m.bogus||(n.cache[h]=m)),{left:m.left,right:m.right,top:o?m.rtop:m.top,bottom:o?m.rbottom:m.bottom}}var wc={left:0,right:0,top:0,bottom:0};function ga(e,n,s){for(var i,o,h,m,x,w,S=0;S<e.length;S+=3)if(x=e[S],w=e[S+1],n<x?(o=0,h=1,m="left"):n<w?(o=n-x,h=o+1):(S==e.length-3||n==w&&e[S+3]>n)&&(h=w-x,o=h-1,n>=w&&(m="right")),o!=null){if(i=e[S+2],x==w&&s==(i.insertLeft?"left":"right")&&(m=s),s=="left"&&o==0)for(;S&&e[S-2]==e[S-3]&&e[S-1].insertLeft;)i=e[(S-=3)+2],m="left";if(s=="right"&&o==w-x)for(;S<e.length-3&&e[S+3]==e[S+4]&&!e[S+5].insertLeft;)i=e[(S+=3)+2],m="right";break}return{node:i,start:o,end:h,collapse:m,coverStart:x,coverEnd:w}}function rp(e,n){var s=wc;if(n=="left")for(var i=0;i<e.length&&(s=e[i]).left==s.right;i++);else for(var o=e.length-1;o>=0&&(s=e[o]).left==s.right;o--);return s}function kc(e,n,s,i){var o=ga(n.map,s,i),h=o.node,m=o.start,x=o.end,w=o.collapse,S;if(h.nodeType==3){for(var z=0;z<4;z++){for(;m&&pt(n.line.text.charAt(o.coverStart+m));)--m;for(;o.coverStart+x<o.coverEnd&&pt(n.line.text.charAt(o.coverStart+x));)++x;if(k&&E<9&&m==0&&x==o.coverEnd-o.coverStart?S=h.parentNode.getBoundingClientRect():S=rp(K(h,m,x).getClientRects(),i),S.left||S.right||m==0)break;x=m,m=m-1,w="right"}k&&E<11&&(S=au(e.display.measure,S))}else{m>0&&(w=i="right");var U;e.options.lineWrapping&&(U=h.getClientRects()).length>1?S=U[i=="right"?U.length-1:0]:S=h.getBoundingClientRect()}if(k&&E<9&&!m&&(!S||!S.left&&!S.right)){var re=h.parentNode.getClientRects()[0];re?S={left:re.left,right:re.left+ms(e.display),top:re.top,bottom:re.bottom}:S=wc}for(var ee=S.top-n.rect.top,me=S.bottom-n.rect.top,xe=(ee+me)/2,Ae=n.view.measure.heights,Ee=0;Ee<Ae.length-1&&!(xe<Ae[Ee]);Ee++);var ze=Ee?Ae[Ee-1]:0,Me=Ae[Ee],Ge={left:(w=="right"?S.right:S.left)-n.rect.left,right:(w=="left"?S.left:S.right)-n.rect.left,top:ze,bottom:Me};return!S.left&&!S.right&&(Ge.bogus=!0),e.options.singleCursorHeightPerLine||(Ge.rtop=ee,Ge.rbottom=me),Ge}function au(e,n){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!ls(e))return n;var s=screen.logicalXDPI/screen.deviceXDPI,i=screen.logicalYDPI/screen.deviceYDPI;return{left:n.left*s,right:n.right*s,top:n.top*i,bottom:n.bottom*i}}function ol(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var n=0;n<e.rest.length;n++)e.measure.caches[n]={}}function lu(e){e.display.externalMeasure=null,oe(e.display.lineMeasure);for(var n=0;n<e.display.view.length;n++)ol(e.display.view[n])}function ko(e){lu(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function uu(e){return A&&F?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function Sc(e){return A&&F?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function cu(e){var n=Kt(e),s=n.widgets,i=0;if(s)for(var o=0;o<s.length;++o)s[o].above&&(i+=Ui(s[o]));return i}function al(e,n,s,i,o){if(!o){var h=cu(n);s.top+=h,s.bottom+=h}if(i=="line")return s;i||(i="local");var m=_n(n);if(i=="local"?m+=ma(e.display):m-=e.display.viewOffset,i=="page"||i=="window"){var x=e.display.lineSpace.getBoundingClientRect();m+=x.top+(i=="window"?0:Sc(we(e)));var w=x.left+(i=="window"?0:uu(we(e)));s.left+=w,s.right+=w}return s.top+=m,s.bottom+=m,s}function _c(e,n,s){if(s=="div")return n;var i=n.left,o=n.top;if(s=="page")i-=uu(we(e)),o-=Sc(we(e));else if(s=="local"||!s){var h=e.display.sizer.getBoundingClientRect();i+=h.left,o+=h.top}var m=e.display.lineSpace.getBoundingClientRect();return{left:i-m.left,top:o-m.top}}function ll(e,n,s,i,o){return i||(i=Je(e.doc,n.line)),al(e,i,ou(e,i,n.ch,o),s)}function Cn(e,n,s,i,o,h){i=i||Je(e.doc,n.line),o||(o=ki(e,i));function m(me,xe){var Ae=Er(e,o,me,xe?"right":"left",h);return xe?Ae.left=Ae.right:Ae.right=Ae.left,al(e,i,Ae,s)}var x=bt(i,e.doc.direction),w=n.ch,S=n.sticky;if(w>=i.text.length?(w=i.text.length,S="before"):w<=0&&(w=0,S="after"),!x)return m(S=="before"?w-1:w,S=="before");function z(me,xe,Ae){var Ee=x[xe],ze=Ee.level==1;return m(Ae?me-1:me,ze!=Ae)}var U=Br(x,w,S),re=Rr,ee=z(w,U,S=="before");return re!=null&&(ee.other=z(w,re,S!="before")),ee}function So(e,n){var s=0;n=gt(e.doc,n),e.options.lineWrapping||(s=ms(e.display)*n.ch);var i=Je(e.doc,n.line),o=_n(i)+ma(e.display);return{left:s,right:s,top:o,bottom:o+i.height}}function ul(e,n,s,i,o){var h=de(e,n,s);return h.xRel=o,i&&(h.outside=i),h}function cl(e,n,s){var i=e.doc;if(s+=e.display.viewOffset,s<0)return ul(i.first,0,null,-1,-1);var o=B(i,s),h=i.first+i.size-1;if(o>h)return ul(i.first+i.size-1,Je(i,h).text.length,null,1,1);n<0&&(n=0);for(var m=Je(i,o);;){var x=ip(e,m,o,n,s),w=Tt(m,x.ch+(x.xRel>0||x.outside>0?1:0));if(!w)return x;var S=w.find(1);if(S.line==o)return S;m=Je(i,o=S.line)}}function du(e,n,s,i){i-=cu(n);var o=n.text.length,h=nr(function(m){return Er(e,s,m-1).bottom<=i},o,0);return o=nr(function(m){return Er(e,s,m).top>i},h,o),{begin:h,end:o}}function pu(e,n,s,i){s||(s=ki(e,n));var o=al(e,n,Er(e,s,i),"line").top;return du(e,n,s,o)}function ya(e,n,s,i){return e.bottom<=s?!1:e.top>s?!0:(i?e.left:e.right)>n}function ip(e,n,s,i,o){o-=_n(n);var h=ki(e,n),m=cu(n),x=0,w=n.text.length,S=!0,z=bt(n,e.doc.direction);if(z){var U=(e.options.lineWrapping?_o:sp)(e,n,s,h,z,i,o);S=U.level!=1,x=S?U.from:U.to-1,w=S?U.to:U.from-1}var re=null,ee=null,me=nr(function(at){var Ve=Er(e,h,at);return Ve.top+=m,Ve.bottom+=m,ya(Ve,i,o,!1)?(Ve.top<=o&&Ve.left<=i&&(re=at,ee=Ve),!0):!1},x,w),xe,Ae,Ee=!1;if(ee){var ze=i-ee.left<ee.right-i,Me=ze==S;me=re+(Me?0:1),Ae=Me?"after":"before",xe=ze?ee.left:ee.right}else{!S&&(me==w||me==x)&&me++,Ae=me==0?"after":me==n.text.length?"before":Er(e,h,me-(S?1:0)).bottom+m<=o==S?"after":"before";var Ge=Cn(e,de(s,me,Ae),"line",n,h);xe=Ge.left,Ee=o<Ge.top?-1:o>=Ge.bottom?1:0}return me=Xt(n.text,me,1),ul(s,me,Ae,Ee,i-xe)}function sp(e,n,s,i,o,h,m){var x=nr(function(U){var re=o[U],ee=re.level!=1;return ya(Cn(e,de(s,ee?re.to:re.from,ee?"before":"after"),"line",n,i),h,m,!0)},0,o.length-1),w=o[x];if(x>0){var S=w.level!=1,z=Cn(e,de(s,S?w.from:w.to,S?"after":"before"),"line",n,i);ya(z,h,m,!0)&&z.top>m&&(w=o[x-1])}return w}function _o(e,n,s,i,o,h,m){var x=du(e,n,i,m),w=x.begin,S=x.end;/\s/.test(n.text.charAt(S-1))&&S--;for(var z=null,U=null,re=0;re<o.length;re++){var ee=o[re];if(!(ee.from>=S||ee.to<=w)){var me=ee.level!=1,xe=Er(e,i,me?Math.min(S,ee.to)-1:Math.max(w,ee.from)).right,Ae=xe<h?h-xe+1e9:xe-h;(!z||U>Ae)&&(z=ee,U=Ae)}}return z||(z=o[o.length-1]),z.from<w&&(z={from:w,to:z.to,level:z.level}),z.to>S&&(z={from:z.from,to:S,level:z.level}),z}var Ki;function Si(e){if(e.cachedTextHeight!=null)return e.cachedTextHeight;if(Ki==null){Ki=L("pre",null,"CodeMirror-line-like");for(var n=0;n<49;++n)Ki.appendChild(document.createTextNode("x")),Ki.appendChild(L("br"));Ki.appendChild(document.createTextNode("x"))}ye(e.measure,Ki);var s=Ki.offsetHeight/50;return s>3&&(e.cachedTextHeight=s),oe(e.measure),s||1}function ms(e){if(e.cachedCharWidth!=null)return e.cachedCharWidth;var n=L("span","xxxxxxxxxx"),s=L("pre",[n],"CodeMirror-line-like");ye(e.measure,s);var i=n.getBoundingClientRect(),o=(i.right-i.left)/10;return o>2&&(e.cachedCharWidth=o),o||10}function dl(e){for(var n=e.display,s={},i={},o=n.gutters.clientLeft,h=n.gutters.firstChild,m=0;h;h=h.nextSibling,++m){var x=e.display.gutterSpecs[m].className;s[x]=h.offsetLeft+h.clientLeft+o,i[x]=h.clientWidth}return{fixedPos:Co(n),gutterTotalWidth:n.gutters.offsetWidth,gutterLeft:s,gutterWidth:i,wrapperWidth:n.wrapper.clientWidth}}function Co(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Fs(e){var n=Si(e.display),s=e.options.lineWrapping,i=s&&Math.max(5,e.display.scroller.clientWidth/ms(e.display)-3);return function(o){if(Nr(e.doc,o))return 0;var h=0;if(o.widgets)for(var m=0;m<o.widgets.length;m++)o.widgets[m].height&&(h+=o.widgets[m].height);return s?h+(Math.ceil(o.text.length/i)||1)*n:h+n}}function va(e){var n=e.doc,s=Fs(e);n.iter(function(i){var o=s(i);o!=i.height&&Yn(i,o)})}function gs(e,n,s,i){var o=e.display;if(!s&&mi(n).getAttribute("cm-not-content")=="true")return null;var h,m,x=o.lineSpace.getBoundingClientRect();try{h=n.clientX-x.left,m=n.clientY-x.top}catch{return null}var w=cl(e,h,m),S;if(i&&w.xRel>0&&(S=Je(e.doc,w.line).text).length==w.ch){var z=Ke(S,S.length,e.options.tabSize)-S.length;w=de(w.line,Math.max(0,Math.round((h-su(e.display).left)/ms(e.display))-z))}return w}function _i(e,n){if(n>=e.display.viewTo||(n-=e.display.viewFrom,n<0))return null;for(var s=e.display.view,i=0;i<s.length;i++)if(n-=s[i].size,n<0)return i}function sr(e,n,s,i){n==null&&(n=e.doc.first),s==null&&(s=e.doc.first+e.doc.size),i||(i=0);var o=e.display;if(i&&s<o.viewTo&&(o.updateLineNumbers==null||o.updateLineNumbers>n)&&(o.updateLineNumbers=n),e.curOp.viewChanged=!0,n>=o.viewTo)Dn&&fr(e.doc,n)<o.viewTo&&Gi(e);else if(s<=o.viewFrom)Dn&&pn(e.doc,s+i)>o.viewFrom?Gi(e):(o.viewFrom+=i,o.viewTo+=i);else if(n<=o.viewFrom&&s>=o.viewTo)Gi(e);else if(n<=o.viewFrom){var h=xa(e,s,s+i,1);h?(o.view=o.view.slice(h.index),o.viewFrom=h.lineN,o.viewTo+=i):Gi(e)}else if(s>=o.viewTo){var m=xa(e,n,n,-1);m?(o.view=o.view.slice(0,m.index),o.viewTo=m.lineN):Gi(e)}else{var x=xa(e,n,n,-1),w=xa(e,s,s+i,1);x&&w?(o.view=o.view.slice(0,x.index).concat(rl(e,x.lineN,w.lineN)).concat(o.view.slice(w.index)),o.viewTo+=i):Gi(e)}var S=o.externalMeasured;S&&(s<S.lineN?S.lineN+=i:n<S.lineN+S.size&&(o.externalMeasured=null))}function $i(e,n,s){e.curOp.viewChanged=!0;var i=e.display,o=e.display.externalMeasured;if(o&&n>=o.lineN&&n<o.lineN+o.size&&(i.externalMeasured=null),!(n<i.viewFrom||n>=i.viewTo)){var h=i.view[_i(e,n)];if(h.node!=null){var m=h.changes||(h.changes=[]);$e(m,s)==-1&&m.push(s)}}}function Gi(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function xa(e,n,s,i){var o=_i(e,n),h,m=e.display.view;if(!Dn||s==e.doc.first+e.doc.size)return{index:o,lineN:s};for(var x=e.display.viewFrom,w=0;w<o;w++)x+=m[w].size;if(x!=n){if(i>0){if(o==m.length-1)return null;h=x+m[o].size-n,o++}else h=x-n;n+=h,s+=h}for(;fr(e.doc,s)!=s;){if(o==(i<0?0:m.length-1))return null;s+=i*m[o-(i<0?1:0)].size,o+=i}return{index:o,lineN:s}}function Cc(e,n,s){var i=e.display,o=i.view;o.length==0||n>=i.viewTo||s<=i.viewFrom?(i.view=rl(e,n,s),i.viewFrom=n):(i.viewFrom>n?i.view=rl(e,n,i.viewFrom).concat(i.view):i.viewFrom<n&&(i.view=i.view.slice(_i(e,n))),i.viewFrom=n,i.viewTo<s?i.view=i.view.concat(rl(e,i.viewTo,s)):i.viewTo>s&&(i.view=i.view.slice(0,_i(e,s)))),i.viewTo=s}function hu(e){for(var n=e.display.view,s=0,i=0;i<n.length;i++){var o=n[i];!o.hidden&&(!o.node||o.changes)&&++s}return s}function Gr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function pl(e,n){n===void 0&&(n=!0);var s=e.doc,i={},o=i.cursors=document.createDocumentFragment(),h=i.selection=document.createDocumentFragment(),m=e.options.$customCursor;m&&(n=!0);for(var x=0;x<s.sel.ranges.length;x++)if(!(!n&&x==s.sel.primIndex)){var w=s.sel.ranges[x];if(!(w.from().line>=e.display.viewTo||w.to().line<e.display.viewFrom)){var S=w.empty();if(m){var z=m(e,w);z&&ba(e,z,o)}else(S||e.options.showCursorWhenSelecting)&&ba(e,w.head,o);S||op(e,w,h)}}return i}function ba(e,n,s){var i=Cn(e,n,"div",null,null,!e.options.singleCursorHeightPerLine),o=s.appendChild(L("div"," ","CodeMirror-cursor"));if(o.style.left=i.left+"px",o.style.top=i.top+"px",o.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var h=ll(e,n,"div",null,null),m=h.right-h.left;o.style.width=(m>0?m:e.defaultCharWidth())+"px"}if(i.other){var x=s.appendChild(L("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));x.style.display="",x.style.left=i.other.left+"px",x.style.top=i.other.top+"px",x.style.height=(i.other.bottom-i.other.top)*.85+"px"}}function hl(e,n){return e.top-n.top||e.left-n.left}function op(e,n,s){var i=e.display,o=e.doc,h=document.createDocumentFragment(),m=su(e.display),x=m.left,w=Math.max(i.sizerWidth,hs(e)-i.sizer.offsetLeft)-m.right,S=o.direction=="ltr";function z(Me,Ge,at,Ve){Ge<0&&(Ge=0),Ge=Math.round(Ge),Ve=Math.round(Ve),h.appendChild(L("div",null,"CodeMirror-selected","position: absolute; left: "+Me+`px;
                             top: `+Ge+"px; width: "+(at??w-Me)+`px;
                             height: `+(Ve-Ge)+"px"))}function U(Me,Ge,at){var Ve=Je(o,Me),St=Ve.text.length,Et,Un;function sn(vn,br){return ll(e,de(Me,vn),"div",Ve,br)}function xr(vn,br,jn){var xn=pu(e,Ve,null,vn),Dt=br=="ltr"==(jn=="after")?"left":"right",dt=jn=="after"?xn.begin:xn.end-(/\s/.test(Ve.text.charAt(xn.end-1))?2:1);return sn(dt,Dt)[Dt]}var lr=bt(Ve,o.direction);return Sr(lr,Ge||0,at??St,function(vn,br,jn,xn){var Dt=jn=="ltr",dt=sn(vn,Dt?"left":"right"),zt=sn(br-1,Dt?"right":"left"),on=Ge==null&&vn==0,un=at==null&&br==St,Ut=xn==0,wr=!lr||xn==lr.length-1;if(zt.top-dt.top<=3){var Lt=(S?on:un)&&Ut,lo=(S?un:on)&&wr,kr=Lt?x:(Dt?dt:zt).left,Ri=lo?w:(Dt?zt:dt).right;z(kr,dt.top,Ri-kr,dt.bottom)}else{var es,Rn,qn,qa;Dt?(es=S&&on&&Ut?x:dt.left,Rn=S?w:xr(vn,jn,"before"),qn=S?x:xr(br,jn,"after"),qa=S&&un&&wr?w:zt.right):(es=S?xr(vn,jn,"before"):x,Rn=!S&&on&&Ut?w:dt.right,qn=!S&&un&&wr?x:zt.left,qa=S?xr(br,jn,"after"):w),z(es,dt.top,Rn-es,dt.bottom),dt.bottom<zt.top&&z(x,dt.bottom,null,zt.top),z(qn,zt.top,qa-qn,zt.bottom)}(!Et||hl(dt,Et)<0)&&(Et=dt),hl(zt,Et)<0&&(Et=zt),(!Un||hl(dt,Un)<0)&&(Un=dt),hl(zt,Un)<0&&(Un=zt)}),{start:Et,end:Un}}var re=n.from(),ee=n.to();if(re.line==ee.line)U(re.line,re.ch,ee.ch);else{var me=Je(o,re.line),xe=Je(o,ee.line),Ae=Kt(me)==Kt(xe),Ee=U(re.line,re.ch,Ae?me.text.length+1:null).end,ze=U(ee.line,Ae?0:null,ee.ch).start;Ae&&(Ee.top<ze.top-2?(z(Ee.right,Ee.top,null,Ee.bottom),z(x,ze.top,ze.left,ze.bottom)):z(Ee.right,Ee.top,ze.left-Ee.right,Ee.bottom)),Ee.bottom<ze.top&&z(x,Ee.bottom,null,ze.top)}s.appendChild(h)}function Ws(e){if(e.state.focused){var n=e.display;clearInterval(n.blinker);var s=!0;n.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?n.blinker=setInterval(function(){e.hasFocus()||Wt(e),n.cursorDiv.style.visibility=(s=!s)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(n.cursorDiv.style.visibility="hidden")}}function Tc(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||ml(e))}function fl(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Wt(e))},100)}function ml(e,n){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),e.options.readOnly!="nocursor"&&(e.state.focused||(It(e,"focus",e,n),e.state.focused=!0,G(e.display.wrapper,"CodeMirror-focused"),!e.curOp&&e.display.selForContextMenu!=e.doc.sel&&(e.display.input.reset(),N&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Ws(e))}function Wt(e,n){e.state.delayingBlurEvent||(e.state.focused&&(It(e,"blur",e,n),e.state.focused=!1,Ce(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function To(e){for(var n=e.display,s=n.lineDiv.offsetTop,i=Math.max(0,n.scroller.getBoundingClientRect().top),o=n.lineDiv.getBoundingClientRect().top,h=0,m=0;m<n.view.length;m++){var x=n.view[m],w=e.options.lineWrapping,S=void 0,z=0;if(!x.hidden){if(o+=x.line.height,k&&E<8){var U=x.node.offsetTop+x.node.offsetHeight;S=U-s,s=U}else{var re=x.node.getBoundingClientRect();S=re.bottom-re.top,!w&&x.text.firstChild&&(z=x.text.firstChild.getBoundingClientRect().right-re.left-1)}var ee=x.line.height-S;if((ee>.005||ee<-.005)&&(o<i&&(h-=ee),Yn(x.line,S),wa(x.line),x.rest))for(var me=0;me<x.rest.length;me++)wa(x.rest[me]);if(z>e.display.sizerWidth){var xe=Math.ceil(z/ms(e.display));xe>e.display.maxLineLength&&(e.display.maxLineLength=xe,e.display.maxLine=x.line,e.display.maxLineChanged=!0)}}}Math.abs(h)>2&&(n.scroller.scrollTop+=h)}function wa(e){if(e.widgets)for(var n=0;n<e.widgets.length;++n){var s=e.widgets[n],i=s.node.parentNode;i&&(s.height=i.offsetHeight)}}function ys(e,n,s){var i=s&&s.top!=null?Math.max(0,s.top):e.scroller.scrollTop;i=Math.floor(i-ma(e));var o=s&&s.bottom!=null?s.bottom:i+e.wrapper.clientHeight,h=B(n,i),m=B(n,o);if(s&&s.ensure){var x=s.ensure.from.line,w=s.ensure.to.line;x<h?(h=x,m=B(n,_n(Je(n,x))+e.wrapper.clientHeight)):Math.min(w,n.lastLine())>=m&&(h=B(n,_n(Je(n,w))-e.wrapper.clientHeight),m=w)}return{from:h,to:Math.max(m,h+1)}}function jc(e,n){if(!qt(e,"scrollCursorIntoView")){var s=e.display,i=s.sizer.getBoundingClientRect(),o=null,h=s.wrapper.ownerDocument;if(n.top+i.top<0?o=!0:n.bottom+i.top>(h.defaultView.innerHeight||h.documentElement.clientHeight)&&(o=!1),o!=null&&!D){var m=L("div","​",null,`position: absolute;
                         top: `+(n.top-s.viewOffset-ma(e.display))+`px;
                         height: `+(n.bottom-n.top+oi(e)+s.barHeight)+`px;
                         left: `+n.left+"px; width: "+Math.max(2,n.right-n.left)+"px;");e.display.lineSpace.appendChild(m),m.scrollIntoView(o),e.display.lineSpace.removeChild(m)}}}function fu(e,n,s,i){i==null&&(i=0);var o;!e.options.lineWrapping&&n==s&&(s=n.sticky=="before"?de(n.line,n.ch+1,"before"):n,n=n.ch?de(n.line,n.sticky=="before"?n.ch-1:n.ch,"after"):n);for(var h=0;h<5;h++){var m=!1,x=Cn(e,n),w=!s||s==n?x:Cn(e,s);o={left:Math.min(x.left,w.left),top:Math.min(x.top,w.top)-i,right:Math.max(x.left,w.left),bottom:Math.max(x.bottom,w.bottom)+i};var S=jo(e,o),z=e.doc.scrollTop,U=e.doc.scrollLeft;if(S.scrollTop!=null&&(xs(e,S.scrollTop),Math.abs(e.doc.scrollTop-z)>1&&(m=!0)),S.scrollLeft!=null&&(Yi(e,S.scrollLeft),Math.abs(e.doc.scrollLeft-U)>1&&(m=!0)),!m)break}return o}function ka(e,n){var s=jo(e,n);s.scrollTop!=null&&xs(e,s.scrollTop),s.scrollLeft!=null&&Yi(e,s.scrollLeft)}function jo(e,n){var s=e.display,i=Si(e.display);n.top<0&&(n.top=0);var o=e.curOp&&e.curOp.scrollTop!=null?e.curOp.scrollTop:s.scroller.scrollTop,h=fs(e),m={};n.bottom-n.top>h&&(n.bottom=n.top+h);var x=e.doc.height+il(s),w=n.top<i,S=n.bottom>x-i;if(n.top<o)m.scrollTop=w?0:n.top;else if(n.bottom>o+h){var z=Math.min(n.top,(S?x:n.bottom)-h);z!=o&&(m.scrollTop=z)}var U=e.options.fixedGutter?0:s.gutters.offsetWidth,re=e.curOp&&e.curOp.scrollLeft!=null?e.curOp.scrollLeft:s.scroller.scrollLeft-U,ee=hs(e)-s.gutters.offsetWidth,me=n.right-n.left>ee;return me&&(n.right=n.left+ee),n.left<10?m.scrollLeft=0:n.left<re?m.scrollLeft=Math.max(0,n.left+U-(me?0:10)):n.right>ee+re-3&&(m.scrollLeft=n.right+(me?0:10)-ee),m}function vs(e,n){n!=null&&(_a(e),e.curOp.scrollTop=(e.curOp.scrollTop==null?e.doc.scrollTop:e.curOp.scrollTop)+n)}function Hs(e){_a(e);var n=e.getCursor();e.curOp.scrollToPos={from:n,to:n,margin:e.options.cursorScrollMargin}}function Sa(e,n,s){(n!=null||s!=null)&&_a(e),n!=null&&(e.curOp.scrollLeft=n),s!=null&&(e.curOp.scrollTop=s)}function ap(e,n){_a(e),e.curOp.scrollToPos=n}function _a(e){var n=e.curOp.scrollToPos;if(n){e.curOp.scrollToPos=null;var s=So(e,n.from),i=So(e,n.to);Ca(e,s,i,n.margin)}}function Ca(e,n,s,i){var o=jo(e,{left:Math.min(n.left,s.left),top:Math.min(n.top,s.top)-i,right:Math.max(n.right,s.right),bottom:Math.max(n.bottom,s.bottom)+i});Sa(e,o.scrollLeft,o.scrollTop)}function xs(e,n){Math.abs(e.doc.scrollTop-n)<2||(y||Xi(e,{top:n}),gl(e,n,!0),y&&Xi(e),qs(e,100))}function gl(e,n,s){n=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,n)),!(e.display.scroller.scrollTop==n&&!s)&&(e.doc.scrollTop=n,e.display.scrollbars.setScrollTop(n),e.display.scroller.scrollTop!=n&&(e.display.scroller.scrollTop=n))}function Yi(e,n,s,i){n=Math.max(0,Math.min(n,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),!((s?n==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-n)<2)&&!i)&&(e.doc.scrollLeft=n,gu(e),e.display.scroller.scrollLeft!=n&&(e.display.scroller.scrollLeft=n),e.display.scrollbars.setScrollLeft(n))}function Bs(e){var n=e.display,s=n.gutters.offsetWidth,i=Math.round(e.doc.height+il(e.display));return{clientHeight:n.scroller.clientHeight,viewHeight:n.wrapper.clientHeight,scrollWidth:n.scroller.scrollWidth,clientWidth:n.scroller.clientWidth,viewWidth:n.wrapper.clientWidth,barLeft:e.options.fixedGutter?s:0,docHeight:i,scrollHeight:i+oi(e)+n.barHeight,nativeBarWidth:n.nativeBarWidth,gutterWidth:s}}var Vi=function(e,n,s){this.cm=s;var i=this.vert=L("div",[L("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),o=this.horiz=L("div",[L("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=o.tabIndex=-1,e(i),e(o),rt(i,"scroll",function(){i.clientHeight&&n(i.scrollTop,"vertical")}),rt(o,"scroll",function(){o.clientWidth&&n(o.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,k&&E<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Vi.prototype.update=function(e){var n=e.scrollWidth>e.clientWidth+1,s=e.scrollHeight>e.clientHeight+1,i=e.nativeBarWidth;if(s){this.vert.style.display="block",this.vert.style.bottom=n?i+"px":"0";var o=e.viewHeight-(n?i:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+o)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(n){this.horiz.style.display="block",this.horiz.style.right=s?i+"px":"0",this.horiz.style.left=e.barLeft+"px";var h=e.viewWidth-e.barLeft-(s?i:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+h)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(i==0&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:s?i:0,bottom:n?i:0}},Vi.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Vi.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Vi.prototype.zeroWidthHack=function(){var e=Y&&!ae?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new et,this.disableVert=new et},Vi.prototype.enableZeroWidthBar=function(e,n,s){e.style.visibility="";function i(){var o=e.getBoundingClientRect(),h=s=="vert"?document.elementFromPoint(o.right-1,(o.top+o.bottom)/2):document.elementFromPoint((o.right+o.left)/2,o.bottom-1);h!=e?e.style.visibility="hidden":n.set(1e3,i)}n.set(1e3,i)},Vi.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var Ta=function(){};Ta.prototype.update=function(){return{bottom:0,right:0}},Ta.prototype.setScrollLeft=function(){},Ta.prototype.setScrollTop=function(){},Ta.prototype.clear=function(){};function Us(e,n){n||(n=Bs(e));var s=e.display.barWidth,i=e.display.barHeight;Nc(e,n);for(var o=0;o<4&&s!=e.display.barWidth||i!=e.display.barHeight;o++)s!=e.display.barWidth&&e.options.lineWrapping&&To(e),Nc(e,Bs(e)),s=e.display.barWidth,i=e.display.barHeight}function Nc(e,n){var s=e.display,i=s.scrollbars.update(n);s.sizer.style.paddingRight=(s.barWidth=i.right)+"px",s.sizer.style.paddingBottom=(s.barHeight=i.bottom)+"px",s.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(s.scrollbarFiller.style.display="block",s.scrollbarFiller.style.height=i.bottom+"px",s.scrollbarFiller.style.width=i.right+"px"):s.scrollbarFiller.style.display="",i.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(s.gutterFiller.style.display="block",s.gutterFiller.style.height=i.bottom+"px",s.gutterFiller.style.width=n.gutterWidth+"px"):s.gutterFiller.style.display=""}var Ec={native:Vi,null:Ta};function yl(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Ce(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Ec[e.options.scrollbarStyle](function(n){e.display.wrapper.insertBefore(n,e.display.scrollbarFiller),rt(n,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),n.setAttribute("cm-not-content","true")},function(n,s){s=="horizontal"?Yi(e,n):xs(e,n)},e),e.display.scrollbars.addClass&&G(e.display.wrapper,e.display.scrollbars.addClass)}var bs=0;function ws(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++bs,markArrays:null},mc(e.curOp)}function Yr(e){var n=e.curOp;n&&Jd(n,function(s){for(var i=0;i<s.ops.length;i++)s.ops[i].cm.curOp=null;Ci(s)})}function Ci(e){for(var n=e.ops,s=0;s<n.length;s++)ja(n[s]);for(var i=0;i<n.length;i++)Ji(n[i]);for(var o=0;o<n.length;o++)mu(n[o]);for(var h=0;h<n.length;h++)lp(n[h]);for(var m=0;m<n.length;m++)up(n[m])}function ja(e){var n=e.cm,s=n.display;nn(n),e.updateMaxLine&&ca(n),e.mustUpdate=e.viewChanged||e.forceUpdate||e.scrollTop!=null||e.scrollToPos&&(e.scrollToPos.from.line<s.viewFrom||e.scrollToPos.to.line>=s.viewTo)||s.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new ai(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Ji(e){e.updatedDisplay=e.mustUpdate&&Jn(e.cm,e.update)}function mu(e){var n=e.cm,s=n.display;e.updatedDisplay&&To(n),e.barMeasure=Bs(n),s.maxLineChanged&&!n.options.lineWrapping&&(e.adjustWidthTo=ou(n,s.maxLine,s.maxLine.text.length).left+3,n.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(s.scroller.clientWidth,s.sizer.offsetLeft+e.adjustWidthTo+oi(n)+n.display.barWidth),e.maxScrollLeft=Math.max(0,s.sizer.offsetLeft+e.adjustWidthTo-hs(n))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=s.input.prepareSelection())}function lp(e){var n=e.cm;e.adjustWidthTo!=null&&(n.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<n.doc.scrollLeft&&Yi(n,Math.min(n.display.scroller.scrollLeft,e.maxScrollLeft),!0),n.display.maxLineChanged=!1);var s=e.focus&&e.focus==R(De(n));e.preparedSelection&&n.display.input.showSelection(e.preparedSelection,s),(e.updatedDisplay||e.startHeight!=n.doc.height)&&Us(n,e.barMeasure),e.updatedDisplay&&Lo(n,e.barMeasure),e.selectionChanged&&Ws(n),n.state.focused&&e.updateInput&&n.display.input.reset(e.typing),s&&Tc(e.cm)}function up(e){var n=e.cm,s=n.display,i=n.doc;if(e.updatedDisplay&&mr(n,e.update),s.wheelStartX!=null&&(e.scrollTop!=null||e.scrollLeft!=null||e.scrollToPos)&&(s.wheelStartX=s.wheelStartY=null),e.scrollTop!=null&&gl(n,e.scrollTop,e.forceScroll),e.scrollLeft!=null&&Yi(n,e.scrollLeft,!0,!0),e.scrollToPos){var o=fu(n,gt(i,e.scrollToPos.from),gt(i,e.scrollToPos.to),e.scrollToPos.margin);jc(n,o)}var h=e.maybeHiddenMarkers,m=e.maybeUnhiddenMarkers;if(h)for(var x=0;x<h.length;++x)h[x].lines.length||It(h[x],"hide");if(m)for(var w=0;w<m.length;++w)m[w].lines.length&&It(m[w],"unhide");s.wrapper.offsetHeight&&(i.scrollTop=n.display.scroller.scrollTop),e.changeObjs&&It(n,"changes",n,e.changeObjs),e.update&&e.update.finish()}function Pn(e,n){if(e.curOp)return n();ws(e);try{return n()}finally{Yr(e)}}function hn(e,n){return function(){if(e.curOp)return n.apply(e,arguments);ws(e);try{return n.apply(e,arguments)}finally{Yr(e)}}}function Tn(e){return function(){if(this.curOp)return e.apply(this,arguments);ws(this);try{return e.apply(this,arguments)}finally{Yr(this)}}}function yn(e){return function(){var n=this.cm;if(!n||n.curOp)return e.apply(this,arguments);ws(n);try{return e.apply(this,arguments)}finally{Yr(n)}}}function qs(e,n){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(n,ke(No,e))}function No(e){var n=e.doc;if(!(n.highlightFrontier>=e.display.viewTo)){var s=+new Date+e.options.workTime,i=Nt(e,n.highlightFrontier),o=[];n.iter(i.line,Math.min(n.first+n.size,e.display.viewTo+500),function(h){if(i.line>=e.display.viewFrom){var m=h.styles,x=h.text.length>e.options.maxHighlightLength?Rt(n.mode,i.state):null,w=oa(e,h,i,!0);x&&(i.state=x),h.styles=w.styles;var S=h.styleClasses,z=w.classes;z?h.styleClasses=z:S&&(h.styleClasses=null);for(var U=!m||m.length!=h.styles.length||S!=z&&(!S||!z||S.bgClass!=z.bgClass||S.textClass!=z.textClass),re=0;!U&&re<m.length;++re)U=m[re]!=h.styles[re];U&&o.push(i.line),h.stateAfter=i.save(),i.nextLine()}else h.text.length<=e.options.maxHighlightLength&&ds(e,h.text,i),h.stateAfter=i.line%5==0?i.save():null,i.nextLine();if(+new Date>s)return qs(e,e.options.workDelay),!0}),n.highlightFrontier=i.line,n.modeFrontier=Math.max(n.modeFrontier,i.line),o.length&&Pn(e,function(){for(var h=0;h<o.length;h++)$i(e,o[h],"text")})}}var ai=function(e,n,s){var i=e.display;this.viewport=n,this.visible=ys(i,e.doc,n),this.editorIsHidden=!i.wrapper.offsetWidth,this.wrapperHeight=i.wrapper.clientHeight,this.wrapperWidth=i.wrapper.clientWidth,this.oldDisplayWidth=hs(e),this.force=s,this.dims=dl(e),this.events=[]};ai.prototype.signal=function(e,n){gn(e,n)&&this.events.push(arguments)},ai.prototype.finish=function(){for(var e=0;e<this.events.length;e++)It.apply(null,this.events[e])};function nn(e){var n=e.display;!n.scrollbarsClipped&&n.scroller.offsetWidth&&(n.nativeBarWidth=n.scroller.offsetWidth-n.scroller.clientWidth,n.heightForcer.style.height=oi(e)+"px",n.sizer.style.marginBottom=-n.nativeBarWidth+"px",n.sizer.style.borderRightWidth=oi(e)+"px",n.scrollbarsClipped=!0)}function Zt(e){if(e.hasFocus())return null;var n=R(De(e));if(!n||!j(e.display.lineDiv,n))return null;var s={activeElt:n};if(window.getSelection){var i=Ie(e).getSelection();i.anchorNode&&i.extend&&j(e.display.lineDiv,i.anchorNode)&&(s.anchorNode=i.anchorNode,s.anchorOffset=i.anchorOffset,s.focusNode=i.focusNode,s.focusOffset=i.focusOffset)}return s}function ks(e){if(!(!e||!e.activeElt||e.activeElt==R(qe(e.activeElt)))&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&j(document.body,e.anchorNode)&&j(document.body,e.focusNode))){var n=e.activeElt.ownerDocument,s=n.defaultView.getSelection(),i=n.createRange();i.setEnd(e.anchorNode,e.anchorOffset),i.collapse(!1),s.removeAllRanges(),s.addRange(i),s.extend(e.focusNode,e.focusOffset)}}function Jn(e,n){var s=e.display,i=e.doc;if(n.editorIsHidden)return Gi(e),!1;if(!n.force&&n.visible.from>=s.viewFrom&&n.visible.to<=s.viewTo&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo)&&s.renderedView==s.view&&hu(e)==0)return!1;yu(e)&&(Gi(e),n.dims=dl(e));var o=i.first+i.size,h=Math.max(n.visible.from-e.options.viewportMargin,i.first),m=Math.min(o,n.visible.to+e.options.viewportMargin);s.viewFrom<h&&h-s.viewFrom<20&&(h=Math.max(i.first,s.viewFrom)),s.viewTo>m&&s.viewTo-m<20&&(m=Math.min(o,s.viewTo)),Dn&&(h=fr(e.doc,h),m=pn(e.doc,m));var x=h!=s.viewFrom||m!=s.viewTo||s.lastWrapHeight!=n.wrapperHeight||s.lastWrapWidth!=n.wrapperWidth;Cc(e,h,m),s.viewOffset=_n(Je(e.doc,s.viewFrom)),e.display.mover.style.top=s.viewOffset+"px";var w=hu(e);if(!x&&w==0&&!n.force&&s.renderedView==s.view&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo))return!1;var S=Zt(e);return w>4&&(s.lineDiv.style.display="none"),Eo(e,s.updateLineNumbers,n.dims),w>4&&(s.lineDiv.style.display=""),s.renderedView=s.view,ks(S),oe(s.cursorDiv),oe(s.selectionDiv),s.gutters.style.height=s.sizer.style.minHeight=0,x&&(s.lastWrapHeight=n.wrapperHeight,s.lastWrapWidth=n.wrapperWidth,qs(e,400)),s.updateLineNumbers=null,!0}function mr(e,n){for(var s=n.viewport,i=!0;;i=!1){if(!i||!e.options.lineWrapping||n.oldDisplayWidth==hs(e)){if(s&&s.top!=null&&(s={top:Math.min(e.doc.height+il(e.display)-fs(e),s.top)}),n.visible=ys(e.display,e.doc,s),n.visible.from>=e.display.viewFrom&&n.visible.to<=e.display.viewTo)break}else i&&(n.visible=ys(e.display,e.doc,s));if(!Jn(e,n))break;To(e);var o=Bs(e);Gr(e),Us(e,o),Lo(e,o),n.force=!1}n.signal(e,"update",e),(e.display.viewFrom!=e.display.reportedViewFrom||e.display.viewTo!=e.display.reportedViewTo)&&(n.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Xi(e,n){var s=new ai(e,n);if(Jn(e,s)){To(e),mr(e,s);var i=Bs(e);Gr(e),Us(e,i),Lo(e,i),s.finish()}}function Eo(e,n,s){var i=e.display,o=e.options.lineNumbers,h=i.lineDiv,m=h.firstChild;function x(me){var xe=me.nextSibling;return N&&Y&&e.display.currentWheelTarget==me?me.style.display="none":me.parentNode.removeChild(me),xe}for(var w=i.view,S=i.viewFrom,z=0;z<w.length;z++){var U=w[z];if(!U.hidden)if(!U.node||U.node.parentNode!=h){var re=ep(e,U,S,s);h.insertBefore(re,m)}else{for(;m!=U.node;)m=x(m);var ee=o&&n!=null&&n<=S&&U.lineNumber;U.changes&&($e(U.changes,"gutter")>-1&&(ee=!1),gc(e,U,S,s)),ee&&(oe(U.lineNumber),U.lineNumber.appendChild(document.createTextNode(Ne(e.options,S)))),m=U.node.nextSibling}S+=U.size}for(;m;)m=x(m)}function or(e){var n=e.gutters.offsetWidth;e.sizer.style.marginLeft=n+"px",zn(e,"gutterChanged",e)}function Lo(e,n){e.display.sizer.style.minHeight=n.docHeight+"px",e.display.heightForcer.style.top=n.docHeight+"px",e.display.gutters.style.height=n.docHeight+e.display.barHeight+oi(e)+"px"}function gu(e){var n=e.display,s=n.view;if(!(!n.alignWidgets&&(!n.gutters.firstChild||!e.options.fixedGutter))){for(var i=Co(n)-n.scroller.scrollLeft+e.doc.scrollLeft,o=n.gutters.offsetWidth,h=i+"px",m=0;m<s.length;m++)if(!s[m].hidden){e.options.fixedGutter&&(s[m].gutter&&(s[m].gutter.style.left=h),s[m].gutterBackground&&(s[m].gutterBackground.style.left=h));var x=s[m].alignable;if(x)for(var w=0;w<x.length;w++)x[w].style.left=h}e.options.fixedGutter&&(n.gutters.style.left=i+o+"px")}}function yu(e){if(!e.options.lineNumbers)return!1;var n=e.doc,s=Ne(e.options,n.first+n.size-1),i=e.display;if(s.length!=i.lineNumChars){var o=i.measure.appendChild(L("div",[L("div",s)],"CodeMirror-linenumber CodeMirror-gutter-elt")),h=o.firstChild.offsetWidth,m=o.offsetWidth-h;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(h,i.lineGutter.offsetWidth-m)+1,i.lineNumWidth=i.lineNumInnerWidth+m,i.lineNumChars=i.lineNumInnerWidth?s.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",or(e.display),!0}return!1}function Po(e,n){for(var s=[],i=!1,o=0;o<e.length;o++){var h=e[o],m=null;if(typeof h!="string"&&(m=h.style,h=h.className),h=="CodeMirror-linenumbers")if(n)i=!0;else continue;s.push({className:h,style:m})}return n&&!i&&s.push({className:"CodeMirror-linenumbers",style:null}),s}function vu(e){var n=e.gutters,s=e.gutterSpecs;oe(n),e.lineGutter=null;for(var i=0;i<s.length;++i){var o=s[i],h=o.className,m=o.style,x=n.appendChild(L("div",null,"CodeMirror-gutter "+h));m&&(x.style.cssText=m),h=="CodeMirror-linenumbers"&&(e.lineGutter=x,x.style.width=(e.lineNumWidth||1)+"px")}n.style.display=s.length?"":"none",or(e)}function zr(e){vu(e.display),sr(e),gu(e)}function vl(e,n,s,i){var o=this;this.input=s,o.scrollbarFiller=L("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=L("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=X("div",null,"CodeMirror-code"),o.selectionDiv=L("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=L("div",null,"CodeMirror-cursors"),o.measure=L("div",null,"CodeMirror-measure"),o.lineMeasure=L("div",null,"CodeMirror-measure"),o.lineSpace=X("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none");var h=X("div",[o.lineSpace],"CodeMirror-lines");o.mover=L("div",[h],null,"position: relative"),o.sizer=L("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=L("div",null,null,"position: absolute; height: "+Ft+"px; width: 1px;"),o.gutters=L("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=L("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=L("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),A&&V===105&&(o.wrapper.style.clipPath="inset(0px)"),o.wrapper.setAttribute("translate","no"),k&&E<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),!N&&!(y&&q)&&(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=n.first,o.reportedViewFrom=o.reportedViewTo=n.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,o.gutterSpecs=Po(i.gutters,i.lineNumbers),vu(o),s.init(o)}var Ao=0,Ti=null;k?Ti=-.53:y?Ti=15:A?Ti=-.7:W&&(Ti=-1/3);function Lc(e){var n=e.wheelDeltaX,s=e.wheelDeltaY;return n==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(n=e.detail),s==null&&e.detail&&e.axis==e.VERTICAL_AXIS?s=e.detail:s==null&&(s=e.wheelDelta),{x:n,y:s}}function Ss(e){var n=Lc(e);return n.x*=Ti,n.y*=Ti,n}function Ks(e,n){A&&V==102&&(e.display.chromeScrollHack==null?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout(function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""},100));var s=Lc(n),i=s.x,o=s.y,h=Ti;n.deltaMode===0&&(i=n.deltaX,o=n.deltaY,h=1);var m=e.display,x=m.scroller,w=x.scrollWidth>x.clientWidth,S=x.scrollHeight>x.clientHeight;if(i&&w||o&&S){if(o&&Y&&N){e:for(var z=n.target,U=m.view;z!=x;z=z.parentNode)for(var re=0;re<U.length;re++)if(U[re].node==z){e.display.currentWheelTarget=z;break e}}if(i&&!y&&!J&&h!=null){o&&S&&xs(e,Math.max(0,x.scrollTop+o*h)),Yi(e,Math.max(0,x.scrollLeft+i*h)),(!o||o&&S)&&wn(n),m.wheelStartX=null;return}if(o&&h!=null){var ee=o*h,me=e.doc.scrollTop,xe=me+m.wrapper.clientHeight;ee<0?me=Math.max(0,me+ee-50):xe=Math.min(e.doc.height,xe+ee+50),Xi(e,{top:me,bottom:xe})}Ao<20&&n.deltaMode!==0&&(m.wheelStartX==null?(m.wheelStartX=x.scrollLeft,m.wheelStartY=x.scrollTop,m.wheelDX=i,m.wheelDY=o,setTimeout(function(){if(m.wheelStartX!=null){var Ae=x.scrollLeft-m.wheelStartX,Ee=x.scrollTop-m.wheelStartY,ze=Ee&&m.wheelDY&&Ee/m.wheelDY||Ae&&m.wheelDX&&Ae/m.wheelDX;m.wheelStartX=m.wheelStartY=null,ze&&(Ti=(Ti*Ao+ze)/(Ao+1),++Ao)}},200)):(m.wheelDX+=i,m.wheelDY+=o))}}var Xn=function(e,n){this.ranges=e,this.primIndex=n};Xn.prototype.primary=function(){return this.ranges[this.primIndex]},Xn.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var n=0;n<this.ranges.length;n++){var s=this.ranges[n],i=e.ranges[n];if(!jt(s.anchor,i.anchor)||!jt(s.head,i.head))return!1}return!0},Xn.prototype.deepCopy=function(){for(var e=[],n=0;n<this.ranges.length;n++)e[n]=new At(Qt(this.ranges[n].anchor),Qt(this.ranges[n].head));return new Xn(e,this.primIndex)},Xn.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Xn.prototype.contains=function(e,n){n||(n=e);for(var s=0;s<this.ranges.length;s++){var i=this.ranges[s];if(He(n,i.from())>=0&&He(e,i.to())<=0)return s}return-1};var At=function(e,n){this.anchor=e,this.head=n};At.prototype.from=function(){return Kr(this.anchor,this.head)},At.prototype.to=function(){return Sn(this.anchor,this.head)},At.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function Lr(e,n,s){var i=e&&e.options.selectionsMayTouch,o=n[s];n.sort(function(re,ee){return He(re.from(),ee.from())}),s=$e(n,o);for(var h=1;h<n.length;h++){var m=n[h],x=n[h-1],w=He(x.to(),m.from());if(i&&!m.empty()?w>0:w>=0){var S=Kr(x.from(),m.from()),z=Sn(x.to(),m.to()),U=x.empty()?m.from()==m.head:x.from()==x.head;h<=s&&--s,n.splice(--h,2,new At(U?z:S,U?S:z))}}return new Xn(n,s)}function Fn(e,n){return new Xn([new At(e,n||e)],0)}function Wn(e){return e.text?de(e.from.line+e.text.length-1,Qe(e.text).length+(e.text.length==1?e.from.ch:0)):e.to}function _s(e,n){if(He(e,n.from)<0)return e;if(He(e,n.to)<=0)return Wn(n);var s=e.line+n.text.length-(n.to.line-n.from.line)-1,i=e.ch;return e.line==n.to.line&&(i+=Wn(n).ch-n.to.ch),de(s,i)}function li(e,n){for(var s=[],i=0;i<e.sel.ranges.length;i++){var o=e.sel.ranges[i];s.push(new At(_s(o.anchor,n),_s(o.head,n)))}return Lr(e.cm,s,e.sel.primIndex)}function ji(e,n,s){return e.line==n.line?de(s.line,e.ch-n.ch+s.ch):de(s.line+(e.line-n.line),e.ch)}function $s(e,n,s){for(var i=[],o=de(e.first,0),h=o,m=0;m<n.length;m++){var x=n[m],w=ji(x.from,o,h),S=ji(Wn(x),o,h);if(o=x.to,h=S,s=="around"){var z=e.sel.ranges[m],U=He(z.head,z.anchor)<0;i[m]=new At(U?S:w,U?w:S)}else i[m]=new At(w,w)}return new Xn(i,e.sel.primIndex)}function xl(e){e.doc.mode=Bt(e.options,e.doc.modeOption),Gs(e)}function Gs(e){e.doc.iter(function(n){n.stateAfter&&(n.stateAfter=null),n.styles&&(n.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,qs(e,100),e.state.modeGen++,e.curOp&&sr(e)}function bl(e,n){return n.from.ch==0&&n.to.ch==0&&Qe(n.text)==""&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function gr(e,n,s,i){function o(ze){return s?s[ze]:null}function h(ze,Me,Ge){qd(ze,Me,Ge,i),zn(ze,"change",ze,n)}function m(ze,Me){for(var Ge=[],at=ze;at<Me;++at)Ge.push(new wi(S[at],o(at),i));return Ge}var x=n.from,w=n.to,S=n.text,z=Je(e,x.line),U=Je(e,w.line),re=Qe(S),ee=o(S.length-1),me=w.line-x.line;if(n.full)e.insert(0,m(0,S.length)),e.remove(S.length,e.size-S.length);else if(bl(e,n)){var xe=m(0,S.length-1);h(U,U.text,ee),me&&e.remove(x.line,me),xe.length&&e.insert(x.line,xe)}else if(z==U)if(S.length==1)h(z,z.text.slice(0,x.ch)+re+z.text.slice(w.ch),ee);else{var Ae=m(1,S.length-1);Ae.push(new wi(re+z.text.slice(w.ch),ee,i)),h(z,z.text.slice(0,x.ch)+S[0],o(0)),e.insert(x.line+1,Ae)}else if(S.length==1)h(z,z.text.slice(0,x.ch)+S[0]+U.text.slice(w.ch),o(0)),e.remove(x.line+1,me);else{h(z,z.text.slice(0,x.ch)+S[0],o(0)),h(U,re+U.text.slice(w.ch),ee);var Ee=m(1,S.length-1);me>1&&e.remove(x.line+1,me-1),e.insert(x.line+1,Ee)}zn(e,"change",e,n)}function An(e,n,s){function i(o,h,m){if(o.linked)for(var x=0;x<o.linked.length;++x){var w=o.linked[x];if(w.doc!=h){var S=m&&w.sharedHist;s&&!S||(n(w.doc,S),i(w.doc,o,S))}}}i(e,null,!0)}function rn(e,n){if(n.cm)throw new Error("This document is already in use.");e.doc=n,n.cm=e,va(e),xl(e),Vr(e),e.options.direction=n.direction,e.options.lineWrapping||ca(e),e.options.mode=n.modeOption,sr(e)}function Vr(e){(e.doc.direction=="rtl"?G:Ce)(e.display.lineDiv,"CodeMirror-rtl")}function Pc(e){Pn(e,function(){Vr(e),sr(e)})}function Na(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function Ea(e,n){var s={from:Qt(n.from),to:Wn(n),text:ii(e,n.from,n.to)};return Ic(e,s,n.from.line,n.to.line+1),An(e,function(i){return Ic(i,s,n.from.line,n.to.line+1)},!0),s}function wl(e){for(;e.length;){var n=Qe(e);if(n.ranges)e.pop();else break}}function Ac(e,n){if(n)return wl(e.done),Qe(e.done);if(e.done.length&&!Qe(e.done).ranges)return Qe(e.done);if(e.done.length>1&&!e.done[e.done.length-2].ranges)return e.done.pop(),Qe(e.done)}function La(e,n,s,i){var o=e.history;o.undone.length=0;var h=+new Date,m,x;if((o.lastOp==i||o.lastOrigin==n.origin&&n.origin&&(n.origin.charAt(0)=="+"&&o.lastModTime>h-(e.cm?e.cm.options.historyEventDelay:500)||n.origin.charAt(0)=="*"))&&(m=Ac(o,o.lastOp==i)))x=Qe(m.changes),He(n.from,n.to)==0&&He(n.from,x.to)==0?x.to=Wn(n):m.changes.push(Ea(e,n));else{var w=Qe(o.done);for((!w||!w.ranges)&&Io(e.sel,o.done),m={changes:[Ea(e,n)],generation:o.generation},o.done.push(m);o.done.length>o.undoDepth;)o.done.shift(),o.done[0].ranges||o.done.shift()}o.done.push(s),o.generation=++o.maxGeneration,o.lastModTime=o.lastSelTime=h,o.lastOp=o.lastSelOp=i,o.lastOrigin=o.lastSelOrigin=n.origin,x||It(e,"historyAdded")}function Rc(e,n,s,i){var o=n.charAt(0);return o=="*"||o=="+"&&s.ranges.length==i.ranges.length&&s.somethingSelected()==i.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function Ro(e,n,s,i){var o=e.history,h=i&&i.origin;s==o.lastSelOp||h&&o.lastSelOrigin==h&&(o.lastModTime==o.lastSelTime&&o.lastOrigin==h||Rc(e,h,Qe(o.done),n))?o.done[o.done.length-1]=n:Io(n,o.done),o.lastSelTime=+new Date,o.lastSelOrigin=h,o.lastSelOp=s,i&&i.clearRedo!==!1&&wl(o.undone)}function Io(e,n){var s=Qe(n);s&&s.ranges&&s.equals(e)||n.push(e)}function Ic(e,n,s,i){var o=n["spans_"+e.id],h=0;e.iter(Math.max(e.first,s),Math.min(e.first+e.size,i),function(m){m.markedSpans&&((o||(o=n["spans_"+e.id]={}))[h]=m.markedSpans),++h})}function Pa(e){if(!e)return null;for(var n,s=0;s<e.length;++s)e[s].marker.explicitlyCleared?n||(n=e.slice(0,s)):n&&n.push(e[s]);return n?n.length?n:null:e}function kl(e,n){var s=n["spans_"+e.id];if(!s)return null;for(var i=[],o=0;o<n.text.length;++o)i.push(Pa(s[o]));return i}function xu(e,n){var s=kl(e,n),i=ps(e,n);if(!s)return i;if(!i)return s;for(var o=0;o<s.length;++o){var h=s[o],m=i[o];if(h&&m)e:for(var x=0;x<m.length;++x){for(var w=m[x],S=0;S<h.length;++S)if(h[S].marker==w.marker)continue e;h.push(w)}else m&&(s[o]=m)}return s}function Ys(e,n,s){for(var i=[],o=0;o<e.length;++o){var h=e[o];if(h.ranges){i.push(s?Xn.prototype.deepCopy.call(h):h);continue}var m=h.changes,x=[];i.push({changes:x});for(var w=0;w<m.length;++w){var S=m[w],z=void 0;if(x.push({from:S.from,to:S.to,text:S.text}),n)for(var U in S)(z=U.match(/^spans_(\d+)$/))&&$e(n,Number(z[1]))>-1&&(Qe(x)[U]=S[U],delete S[U])}}return i}function Cs(e,n,s,i){if(i){var o=e.anchor;if(s){var h=He(n,o)<0;h!=He(s,o)<0?(o=n,n=s):h!=He(n,s)<0&&(n=s)}return new At(o,n)}else return new At(s||n,n)}function Aa(e,n,s,i,o){o==null&&(o=e.cm&&(e.cm.display.shift||e.extend)),Hn(e,new Xn([Cs(e.sel.primary(),n,s,o)],0),i)}function Ra(e,n,s){for(var i=[],o=e.cm&&(e.cm.display.shift||e.extend),h=0;h<e.sel.ranges.length;h++)i[h]=Cs(e.sel.ranges[h],n[h],null,o);var m=Lr(e.cm,i,e.sel.primIndex);Hn(e,m,s)}function Oo(e,n,s,i){var o=e.sel.ranges.slice(0);o[n]=s,Hn(e,Lr(e.cm,o,e.sel.primIndex),i)}function Vs(e,n,s,i){Hn(e,Fn(n,s),i)}function bu(e,n,s){var i={ranges:n.ranges,update:function(o){this.ranges=[];for(var h=0;h<o.length;h++)this.ranges[h]=new At(gt(e,o[h].anchor),gt(e,o[h].head))},origin:s&&s.origin};return It(e,"beforeSelectionChange",e,i),e.cm&&It(e.cm,"beforeSelectionChange",e.cm,i),i.ranges!=n.ranges?Lr(e.cm,i.ranges,i.ranges.length-1):n}function Sl(e,n,s){var i=e.history.done,o=Qe(i);o&&o.ranges?(i[i.length-1]=n,Mo(e,n,s)):Hn(e,n,s)}function Hn(e,n,s){Mo(e,n,s),Ro(e,e.sel,e.cm?e.cm.curOp.id:NaN,s)}function Mo(e,n,s){(gn(e,"beforeSelectionChange")||e.cm&&gn(e.cm,"beforeSelectionChange"))&&(n=bu(e,n,s));var i=s&&s.bias||(He(n.primary().head,e.sel.primary().head)<0?-1:1);Js(e,Ts(e,n,i,!0)),!(s&&s.scroll===!1)&&e.cm&&e.cm.getOption("readOnly")!="nocursor"&&Hs(e.cm)}function Js(e,n){n.equals(e.sel)||(e.sel=n,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,bn(e.cm)),zn(e,"cursorActivity",e))}function Fr(e){Js(e,Ts(e,e.sel,null,!1))}function Ts(e,n,s,i){for(var o,h=0;h<n.ranges.length;h++){var m=n.ranges[h],x=n.ranges.length==e.sel.ranges.length&&e.sel.ranges[h],w=Ia(e,m.anchor,x&&x.anchor,s,i),S=m.head==m.anchor?w:Ia(e,m.head,x&&x.head,s,i);(o||w!=m.anchor||S!=m.head)&&(o||(o=n.ranges.slice(0,h)),o[h]=new At(w,S))}return o?Lr(e.cm,o,n.primIndex):n}function js(e,n,s,i,o){var h=Je(e,n.line);if(h.markedSpans)for(var m=0;m<h.markedSpans.length;++m){var x=h.markedSpans[m],w=x.marker,S="selectLeft"in w?!w.selectLeft:w.inclusiveLeft,z="selectRight"in w?!w.selectRight:w.inclusiveRight;if((x.from==null||(S?x.from<=n.ch:x.from<n.ch))&&(x.to==null||(z?x.to>=n.ch:x.to>n.ch))){if(o&&(It(w,"beforeCursorEnter"),w.explicitlyCleared))if(h.markedSpans){--m;continue}else break;if(!w.atomic)continue;if(s){var U=w.find(i<0?1:-1),re=void 0;if((i<0?z:S)&&(U=Ni(e,U,-i,U&&U.line==n.line?h:null)),U&&U.line==n.line&&(re=He(U,s))&&(i<0?re<0:re>0))return js(e,U,n,i,o)}var ee=w.find(i<0?-1:1);return(i<0?S:z)&&(ee=Ni(e,ee,i,ee.line==n.line?h:null)),ee?js(e,ee,n,i,o):null}}return n}function Ia(e,n,s,i,o){var h=i||1,m=js(e,n,s,h,o)||!o&&js(e,n,s,h,!0)||js(e,n,s,-h,o)||!o&&js(e,n,s,-h,!0);return m||(e.cantEdit=!0,de(e.first,0))}function Ni(e,n,s,i){return s<0&&n.ch==0?n.line>e.first?gt(e,de(n.line-1)):null:s>0&&n.ch==(i||Je(e,n.line)).text.length?n.line<e.first+e.size-1?de(n.line+1,0):null:new de(n.line,n.ch+s)}function Qi(e){e.setSelection(de(e.firstLine(),0),de(e.lastLine()),Ct)}function _l(e,n,s){var i={canceled:!1,from:n.from,to:n.to,text:n.text,origin:n.origin,cancel:function(){return i.canceled=!0}};return s&&(i.update=function(o,h,m,x){o&&(i.from=gt(e,o)),h&&(i.to=gt(e,h)),m&&(i.text=m),x!==void 0&&(i.origin=x)}),It(e,"beforeChange",e,i),e.cm&&It(e.cm,"beforeChange",e.cm,i),i.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:i.from,to:i.to,text:i.text,origin:i.origin}}function Xs(e,n,s){if(e.cm){if(!e.cm.curOp)return hn(e.cm,Xs)(e,n,s);if(e.cm.state.suppressEdits)return}if(!((gn(e,"beforeChange")||e.cm&&gn(e.cm,"beforeChange"))&&(n=_l(e,n,!0),!n))){var i=si&&!s&&ua(e,n.from,n.to);if(i)for(var o=i.length-1;o>=0;--o)Ei(e,{from:i[o].from,to:i[o].to,text:o?[""]:n.text,origin:n.origin});else Ei(e,n)}}function Ei(e,n){if(!(n.text.length==1&&n.text[0]==""&&He(n.from,n.to)==0)){var s=li(e,n);La(e,n,s,e.cm?e.cm.curOp.id:NaN),Do(e,n,s,ps(e,n));var i=[];An(e,function(o,h){!h&&$e(i,o.history)==-1&&(Fo(o.history,n),i.push(o.history)),Do(o,n,null,ps(o,n))})}}function ui(e,n,s){var i=e.cm&&e.cm.state.suppressEdits;if(!(i&&!s)){for(var o=e.history,h,m=e.sel,x=n=="undo"?o.done:o.undone,w=n=="undo"?o.undone:o.done,S=0;S<x.length&&(h=x[S],!(s?h.ranges&&!h.equals(e.sel):!h.ranges));S++);if(S!=x.length){for(o.lastOrigin=o.lastSelOrigin=null;;)if(h=x.pop(),h.ranges){if(Io(h,w),s&&!h.equals(e.sel)){Hn(e,h,{clearRedo:!1});return}m=h}else if(i){x.push(h);return}else break;var z=[];Io(m,w),w.push({changes:z,generation:o.generation}),o.generation=h.generation||++o.maxGeneration;for(var U=gn(e,"beforeChange")||e.cm&&gn(e.cm,"beforeChange"),re=function(xe){var Ae=h.changes[xe];if(Ae.origin=n,U&&!_l(e,Ae,!1))return x.length=0,{};z.push(Ea(e,Ae));var Ee=xe?li(e,Ae):Qe(x);Do(e,Ae,Ee,xu(e,Ae)),!xe&&e.cm&&e.cm.scrollIntoView({from:Ae.from,to:Wn(Ae)});var ze=[];An(e,function(Me,Ge){!Ge&&$e(ze,Me.history)==-1&&(Fo(Me.history,Ae),ze.push(Me.history)),Do(Me,Ae,null,xu(Me,Ae))})},ee=h.changes.length-1;ee>=0;--ee){var me=re(ee);if(me)return me.v}}}}function Oa(e,n){if(n!=0&&(e.first+=n,e.sel=new Xn(ut(e.sel.ranges,function(o){return new At(de(o.anchor.line+n,o.anchor.ch),de(o.head.line+n,o.head.ch))}),e.sel.primIndex),e.cm)){sr(e.cm,e.first,e.first-n,n);for(var s=e.cm.display,i=s.viewFrom;i<s.viewTo;i++)$i(e.cm,i,"gutter")}}function Do(e,n,s,i){if(e.cm&&!e.cm.curOp)return hn(e.cm,Do)(e,n,s,i);if(n.to.line<e.first){Oa(e,n.text.length-1-(n.to.line-n.from.line));return}if(!(n.from.line>e.lastLine())){if(n.from.line<e.first){var o=n.text.length-1-(e.first-n.from.line);Oa(e,o),n={from:de(e.first,0),to:de(n.to.line+o,n.to.ch),text:[Qe(n.text)],origin:n.origin}}var h=e.lastLine();n.to.line>h&&(n={from:n.from,to:de(h,Je(e,h).text.length),text:[n.text[0]],origin:n.origin}),n.removed=ii(e,n.from,n.to),s||(s=li(e,n)),e.cm?Cl(e.cm,n,i):gr(e,n,i),Mo(e,s,Ct),e.cantEdit&&Ia(e,de(e.firstLine(),0))&&(e.cantEdit=!1)}}function Cl(e,n,s){var i=e.doc,o=e.display,h=n.from,m=n.to,x=!1,w=h.line;e.options.lineWrapping||(w=T(Kt(Je(i,h.line))),i.iter(w,m.line+1,function(ee){if(ee==o.maxLine)return x=!0,!0})),i.sel.contains(n.from,n.to)>-1&&bn(e),gr(i,n,s,Fs(e)),e.options.lineWrapping||(i.iter(w,h.line+n.text.length,function(ee){var me=Bi(ee);me>o.maxLineLength&&(o.maxLine=ee,o.maxLineLength=me,o.maxLineChanged=!0,x=!1)}),x&&(e.curOp.updateMaxLine=!0)),Dr(i,h.line),qs(e,400);var S=n.text.length-(m.line-h.line)-1;n.full?sr(e):h.line==m.line&&n.text.length==1&&!bl(e.doc,n)?$i(e,h.line,"text"):sr(e,h.line,m.line+1,S);var z=gn(e,"changes"),U=gn(e,"change");if(U||z){var re={from:h,to:m,text:n.text,removed:n.removed,origin:n.origin};U&&zn(e,"change",e,re),z&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(re)}e.display.selForContextMenu=null}function Qs(e,n,s,i,o){var h;i||(i=s),He(i,s)<0&&(h=[i,s],s=h[0],i=h[1]),typeof n=="string"&&(n=e.splitLines(n)),Xs(e,{from:s,to:i,text:n,origin:o})}function zo(e,n,s,i){s<e.line?e.line+=i:n<e.line&&(e.line=n,e.ch=0)}function ci(e,n,s,i){for(var o=0;o<e.length;++o){var h=e[o],m=!0;if(h.ranges){h.copied||(h=e[o]=h.deepCopy(),h.copied=!0);for(var x=0;x<h.ranges.length;x++)zo(h.ranges[x].anchor,n,s,i),zo(h.ranges[x].head,n,s,i);continue}for(var w=0;w<h.changes.length;++w){var S=h.changes[w];if(s<S.from.line)S.from=de(S.from.line+i,S.from.ch),S.to=de(S.to.line+i,S.to.ch);else if(n<=S.to.line){m=!1;break}}m||(e.splice(0,o+1),o=0)}}function Fo(e,n){var s=n.from.line,i=n.to.line,o=n.text.length-(i-s)-1;ci(e.done,s,i,o),ci(e.undone,s,i,o)}function Zi(e,n,s,i){var o=n,h=n;return typeof n=="number"?h=Je(e,tl(e,n)):o=T(n),o==null?null:(i(h,o)&&e.cm&&$i(e.cm,o,s),h)}function di(e){this.lines=e,this.parent=null;for(var n=0,s=0;s<e.length;++s)e[s].parent=this,n+=e[s].height;this.height=n}di.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,n){for(var s=e,i=e+n;s<i;++s){var o=this.lines[s];this.height-=o.height,Xl(o),zn(o,"delete")}this.lines.splice(e,n)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,n,s){this.height+=s,this.lines=this.lines.slice(0,e).concat(n).concat(this.lines.slice(e));for(var i=0;i<n.length;++i)n[i].parent=this},iterN:function(e,n,s){for(var i=e+n;e<i;++e)if(s(this.lines[e]))return!0}};function Zs(e){this.children=e;for(var n=0,s=0,i=0;i<e.length;++i){var o=e[i];n+=o.chunkSize(),s+=o.height,o.parent=this}this.size=n,this.height=s,this.parent=null}Zs.prototype={chunkSize:function(){return this.size},removeInner:function(e,n){this.size-=n;for(var s=0;s<this.children.length;++s){var i=this.children[s],o=i.chunkSize();if(e<o){var h=Math.min(n,o-e),m=i.height;if(i.removeInner(e,h),this.height-=m-i.height,o==h&&(this.children.splice(s--,1),i.parent=null),(n-=h)==0)break;e=0}else e-=o}if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof di))){var x=[];this.collapse(x),this.children=[new di(x)],this.children[0].parent=this}},collapse:function(e){for(var n=0;n<this.children.length;++n)this.children[n].collapse(e)},insertInner:function(e,n,s){this.size+=n.length,this.height+=s;for(var i=0;i<this.children.length;++i){var o=this.children[i],h=o.chunkSize();if(e<=h){if(o.insertInner(e,n,s),o.lines&&o.lines.length>50){for(var m=o.lines.length%25+25,x=m;x<o.lines.length;){var w=new di(o.lines.slice(x,x+=25));o.height-=w.height,this.children.splice(++i,0,w),w.parent=this}o.lines=o.lines.slice(0,m),this.maybeSpill()}break}e-=h}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var n=e.children.splice(e.children.length-5,5),s=new Zs(n);if(e.parent){e.size-=s.size,e.height-=s.height;var o=$e(e.parent.children,e);e.parent.children.splice(o+1,0,s)}else{var i=new Zs(e.children);i.parent=e,e.children=[i,s],e=i}s.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,n,s){for(var i=0;i<this.children.length;++i){var o=this.children[i],h=o.chunkSize();if(e<h){var m=Math.min(n,h-e);if(o.iterN(e,m,s))return!0;if((n-=m)==0)break;e=0}else e-=h}}};var Li=function(e,n,s){if(s)for(var i in s)s.hasOwnProperty(i)&&(this[i]=s[i]);this.doc=e,this.node=n};Li.prototype.clear=function(){var e=this.doc.cm,n=this.line.widgets,s=this.line,i=T(s);if(!(i==null||!n)){for(var o=0;o<n.length;++o)n[o]==this&&n.splice(o--,1);n.length||(s.widgets=null);var h=Ui(this);Yn(s,Math.max(0,s.height-h)),e&&(Pn(e,function(){wu(e,s,-h),$i(e,i,"widget")}),zn(e,"lineWidgetCleared",e,this,i))}},Li.prototype.changed=function(){var e=this,n=this.height,s=this.doc.cm,i=this.line;this.height=null;var o=Ui(this)-n;o&&(Nr(this.doc,i)||Yn(i,i.height+o),s&&Pn(s,function(){s.curOp.forceUpdate=!0,wu(s,i,o),zn(s,"lineWidgetChanged",s,e,T(i))}))},En(Li);function wu(e,n,s){_n(n)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&vs(e,s)}function ku(e,n,s,i){var o=new Li(e,s,i),h=e.cm;return h&&o.noHScroll&&(h.display.alignWidgets=!0),Zi(e,n,"widget",function(m){var x=m.widgets||(m.widgets=[]);if(o.insertAt==null?x.push(o):x.splice(Math.min(x.length,Math.max(0,o.insertAt)),0,o),o.line=m,h&&!Nr(e,m)){var w=_n(m)<e.scrollTop;Yn(m,m.height+Ui(o)),w&&vs(h,o.height),h.curOp.forceUpdate=!0}return!0}),h&&zn(h,"lineWidgetAdded",h,o,typeof n=="number"?n:T(n)),o}var ln=0,pi=function(e,n){this.lines=[],this.type=n,this.doc=e,this.id=++ln};pi.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,n=e&&!e.curOp;if(n&&ws(e),gn(this,"clear")){var s=this.find();s&&zn(this,"clear",s.from,s.to)}for(var i=null,o=null,h=0;h<this.lines.length;++h){var m=this.lines[h],x=Ms(m.markedSpans,this);e&&!this.collapsed?$i(e,T(m),"text"):e&&(x.to!=null&&(o=T(m)),x.from!=null&&(i=T(m))),m.markedSpans=aa(m.markedSpans,x),x.from==null&&this.collapsed&&!Nr(this.doc,m)&&e&&Yn(m,Si(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var w=0;w<this.lines.length;++w){var S=Kt(this.lines[w]),z=Bi(S);z>e.display.maxLineLength&&(e.display.maxLine=S,e.display.maxLineLength=z,e.display.maxLineChanged=!0)}i!=null&&e&&this.collapsed&&sr(e,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&Fr(e.doc)),e&&zn(e,"markerCleared",e,this,i,o),n&&Yr(e),this.parent&&this.parent.clear()}},pi.prototype.find=function(e,n){e==null&&this.type=="bookmark"&&(e=1);for(var s,i,o=0;o<this.lines.length;++o){var h=this.lines[o],m=Ms(h.markedSpans,this);if(m.from!=null&&(s=de(n?h:T(h),m.from),e==-1))return s;if(m.to!=null&&(i=de(n?h:T(h),m.to),e==1))return i}return s&&{from:s,to:i}},pi.prototype.changed=function(){var e=this,n=this.find(-1,!0),s=this,i=this.doc.cm;!n||!i||Pn(i,function(){var o=n.line,h=T(n.line),m=sl(i,h);if(m&&(ol(m),i.curOp.selectionChanged=i.curOp.forceUpdate=!0),i.curOp.updateMaxLine=!0,!Nr(s.doc,o)&&s.height!=null){var x=s.height;s.height=null;var w=Ui(s)-x;w&&Yn(o,o.height+w)}zn(i,"markerChanged",i,e)})},pi.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(!n.maybeHiddenMarkers||$e(n.maybeHiddenMarkers,this)==-1)&&(n.maybeUnhiddenMarkers||(n.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},pi.prototype.detachLine=function(e){if(this.lines.splice($e(this.lines,e),1),!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(n.maybeHiddenMarkers||(n.maybeHiddenMarkers=[])).push(this)}},En(pi);function Ns(e,n,s,i,o){if(i&&i.shared)return Tl(e,n,s,i,o);if(e.cm&&!e.cm.curOp)return hn(e.cm,Ns)(e,n,s,i,o);var h=new pi(e,o),m=He(n,s);if(i&&Be(i,h,!1),m>0||m==0&&h.clearWhenEmpty!==!1)return h;if(h.replacedWith&&(h.collapsed=!0,h.widgetNode=X("span",[h.replacedWith],"CodeMirror-widget"),i.handleMouseEvents||h.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(h.widgetNode.insertLeft=!0)),h.collapsed){if(dn(e,n.line,n,s,h)||n.line!=s.line&&dn(e,s.line,n,s,h))throw new Error("Inserting collapsed marker partially overlapping an existing one");Os()}h.addToHistory&&La(e,{from:n,to:s,origin:"markText"},e.sel,NaN);var x=n.line,w=e.cm,S;if(e.iter(x,s.line+1,function(U){w&&h.collapsed&&!w.options.lineWrapping&&Kt(U)==w.display.maxLine&&(S=!0),h.collapsed&&x!=n.line&&Yn(U,0),Ds(U,new jr(h,x==n.line?n.ch:null,x==s.line?s.ch:null),e.cm&&e.cm.curOp),++x}),h.collapsed&&e.iter(n.line,s.line+1,function(U){Nr(e,U)&&Yn(U,0)}),h.clearOnEnter&&rt(h,"beforeCursorEnter",function(){return h.clear()}),h.readOnly&&($r(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),h.collapsed&&(h.id=++ln,h.atomic=!0),w){if(S&&(w.curOp.updateMaxLine=!0),h.collapsed)sr(w,n.line,s.line+1);else if(h.className||h.startStyle||h.endStyle||h.css||h.attributes||h.title)for(var z=n.line;z<=s.line;z++)$i(w,z,"text");h.atomic&&Fr(w.doc),zn(w,"markerAdded",w,h)}return h}var eo=function(e,n){this.markers=e,this.primary=n;for(var s=0;s<e.length;++s)e[s].parent=this};eo.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();zn(this,"clear")}},eo.prototype.find=function(e,n){return this.primary.find(e,n)},En(eo);function Tl(e,n,s,i,o){i=Be(i),i.shared=!1;var h=[Ns(e,n,s,i,o)],m=h[0],x=i.widgetNode;return An(e,function(w){x&&(i.widgetNode=x.cloneNode(!0)),h.push(Ns(w,gt(w,n),gt(w,s),i,o));for(var S=0;S<w.linked.length;++S)if(w.linked[S].isParent)return;m=Qe(h)}),new eo(h,m)}function jl(e){return e.findMarks(de(e.first,0),e.clipPos(de(e.lastLine())),function(n){return n.parent})}function to(e,n){for(var s=0;s<n.length;s++){var i=n[s],o=i.find(),h=e.clipPos(o.from),m=e.clipPos(o.to);if(He(h,m)){var x=Ns(e,h,m,i.primary,i.primary.type);i.markers.push(x),x.parent=i}}}function fn(e){for(var n=function(i){var o=e[i],h=[o.primary.doc];An(o.primary.doc,function(w){return h.push(w)});for(var m=0;m<o.markers.length;m++){var x=o.markers[m];$e(h,x.doc)==-1&&(x.parent=null,o.markers.splice(m--,1))}},s=0;s<e.length;s++)n(s)}var Bn=0,Ot=function(e,n,s,i,o){if(!(this instanceof Ot))return new Ot(e,n,s,i,o);s==null&&(s=0),Zs.call(this,[new di([new wi("",null)])]),this.first=s,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=s;var h=de(s,0);this.sel=Fn(h),this.history=new Na(null),this.id=++Bn,this.modeOption=n,this.lineSep=i,this.direction=o=="rtl"?"rtl":"ltr",this.extend=!1,typeof e=="string"&&(e=this.splitLines(e)),gr(this,{from:h,to:h,text:e}),Hn(this,Fn(h),Ct)};Ot.prototype=pe(Zs.prototype,{constructor:Ot,iter:function(e,n,s){s?this.iterN(e-this.first,n-e,s):this.iterN(this.first,this.first+this.size,e)},insert:function(e,n){for(var s=0,i=0;i<n.length;++i)s+=n[i].height;this.insertInner(e-this.first,n,s)},remove:function(e,n){this.removeInner(e-this.first,n)},getValue:function(e){var n=cs(this,this.first,this.first+this.size);return e===!1?n:n.join(e||this.lineSeparator())},setValue:yn(function(e){var n=de(this.first,0),s=this.first+this.size-1;Xs(this,{from:n,to:de(s,Je(this,s).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&Sa(this.cm,0,0),Hn(this,Fn(n),Ct)}),replaceRange:function(e,n,s,i){n=gt(this,n),s=s?gt(this,s):n,Qs(this,e,n,s,i)},getRange:function(e,n,s){var i=ii(this,gt(this,e),gt(this,n));return s===!1?i:s===""?i.join(""):i.join(s||this.lineSeparator())},getLine:function(e){var n=this.getLineHandle(e);return n&&n.text},getLineHandle:function(e){if(fe(this,e))return Je(this,e)},getLineNumber:function(e){return T(e)},getLineHandleVisualStart:function(e){return typeof e=="number"&&(e=Je(this,e)),Kt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return gt(this,e)},getCursor:function(e){var n=this.sel.primary(),s;return e==null||e=="head"?s=n.head:e=="anchor"?s=n.anchor:e=="end"||e=="to"||e===!1?s=n.to():s=n.from(),s},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:yn(function(e,n,s){Vs(this,gt(this,typeof e=="number"?de(e,n||0):e),null,s)}),setSelection:yn(function(e,n,s){Vs(this,gt(this,e),gt(this,n||e),s)}),extendSelection:yn(function(e,n,s){Aa(this,gt(this,e),n&&gt(this,n),s)}),extendSelections:yn(function(e,n){Ra(this,sa(this,e),n)}),extendSelectionsBy:yn(function(e,n){var s=ut(this.sel.ranges,e);Ra(this,sa(this,s),n)}),setSelections:yn(function(e,n,s){if(e.length){for(var i=[],o=0;o<e.length;o++)i[o]=new At(gt(this,e[o].anchor),gt(this,e[o].head||e[o].anchor));n==null&&(n=Math.min(e.length-1,this.sel.primIndex)),Hn(this,Lr(this.cm,i,n),s)}}),addSelection:yn(function(e,n,s){var i=this.sel.ranges.slice(0);i.push(new At(gt(this,e),gt(this,n||e))),Hn(this,Lr(this.cm,i,i.length-1),s)}),getSelection:function(e){for(var n=this.sel.ranges,s,i=0;i<n.length;i++){var o=ii(this,n[i].from(),n[i].to());s=s?s.concat(o):o}return e===!1?s:s.join(e||this.lineSeparator())},getSelections:function(e){for(var n=[],s=this.sel.ranges,i=0;i<s.length;i++){var o=ii(this,s[i].from(),s[i].to());e!==!1&&(o=o.join(e||this.lineSeparator())),n[i]=o}return n},replaceSelection:function(e,n,s){for(var i=[],o=0;o<this.sel.ranges.length;o++)i[o]=e;this.replaceSelections(i,n,s||"+input")},replaceSelections:yn(function(e,n,s){for(var i=[],o=this.sel,h=0;h<o.ranges.length;h++){var m=o.ranges[h];i[h]={from:m.from(),to:m.to(),text:this.splitLines(e[h]),origin:s}}for(var x=n&&n!="end"&&$s(this,i,n),w=i.length-1;w>=0;w--)Xs(this,i[w]);x?Sl(this,x):this.cm&&Hs(this.cm)}),undo:yn(function(){ui(this,"undo")}),redo:yn(function(){ui(this,"redo")}),undoSelection:yn(function(){ui(this,"undo",!0)}),redoSelection:yn(function(){ui(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,n=0,s=0,i=0;i<e.done.length;i++)e.done[i].ranges||++n;for(var o=0;o<e.undone.length;o++)e.undone[o].ranges||++s;return{undo:n,redo:s}},clearHistory:function(){var e=this;this.history=new Na(this.history),An(this,function(n){return n.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Ys(this.history.done),undone:Ys(this.history.undone)}},setHistory:function(e){var n=this.history=new Na(this.history);n.done=Ys(e.done.slice(0),null,!0),n.undone=Ys(e.undone.slice(0),null,!0)},setGutterMarker:yn(function(e,n,s){return Zi(this,e,"gutter",function(i){var o=i.gutterMarkers||(i.gutterMarkers={});return o[n]=s,!s&&Ze(o)&&(i.gutterMarkers=null),!0})}),clearGutter:yn(function(e){var n=this;this.iter(function(s){s.gutterMarkers&&s.gutterMarkers[e]&&Zi(n,s,"gutter",function(){return s.gutterMarkers[e]=null,Ze(s.gutterMarkers)&&(s.gutterMarkers=null),!0})})}),lineInfo:function(e){var n;if(typeof e=="number"){if(!fe(this,e)||(n=e,e=Je(this,e),!e))return null}else if(n=T(e),n==null)return null;return{line:n,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:yn(function(e,n,s){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var o=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass";if(!i[o])i[o]=s;else{if(se(s).test(i[o]))return!1;i[o]+=" "+s}return!0})}),removeLineClass:yn(function(e,n,s){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var o=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass",h=i[o];if(h)if(s==null)i[o]=null;else{var m=h.match(se(s));if(!m)return!1;var x=m.index+m[0].length;i[o]=h.slice(0,m.index)+(!m.index||x==h.length?"":" ")+h.slice(x)||null}else return!1;return!0})}),addLineWidget:yn(function(e,n,s){return ku(this,e,n,s)}),removeLineWidget:function(e){e.clear()},markText:function(e,n,s){return Ns(this,gt(this,e),gt(this,n),s,s&&s.type||"range")},setBookmark:function(e,n){var s={replacedWith:n&&(n.nodeType==null?n.widget:n),insertLeft:n&&n.insertLeft,clearWhenEmpty:!1,shared:n&&n.shared,handleMouseEvents:n&&n.handleMouseEvents};return e=gt(this,e),Ns(this,e,e,s,"bookmark")},findMarksAt:function(e){e=gt(this,e);var n=[],s=Je(this,e.line).markedSpans;if(s)for(var i=0;i<s.length;++i){var o=s[i];(o.from==null||o.from<=e.ch)&&(o.to==null||o.to>=e.ch)&&n.push(o.marker.parent||o.marker)}return n},findMarks:function(e,n,s){e=gt(this,e),n=gt(this,n);var i=[],o=e.line;return this.iter(e.line,n.line+1,function(h){var m=h.markedSpans;if(m)for(var x=0;x<m.length;x++){var w=m[x];!(w.to!=null&&o==e.line&&e.ch>=w.to||w.from==null&&o!=e.line||w.from!=null&&o==n.line&&w.from>=n.ch)&&(!s||s(w.marker))&&i.push(w.marker.parent||w.marker)}++o}),i},getAllMarks:function(){var e=[];return this.iter(function(n){var s=n.markedSpans;if(s)for(var i=0;i<s.length;++i)s[i].from!=null&&e.push(s[i].marker)}),e},posFromIndex:function(e){var n,s=this.first,i=this.lineSeparator().length;return this.iter(function(o){var h=o.text.length+i;if(h>e)return n=e,!0;e-=h,++s}),gt(this,de(s,n))},indexFromPos:function(e){e=gt(this,e);var n=e.ch;if(e.line<this.first||e.ch<0)return 0;var s=this.lineSeparator().length;return this.iter(this.first,e.line,function(i){n+=i.text.length+s}),n},copy:function(e){var n=new Ot(cs(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,n.sel=this.sel,n.extend=!1,e&&(n.history.undoDepth=this.history.undoDepth,n.setHistory(this.getHistory())),n},linkedDoc:function(e){e||(e={});var n=this.first,s=this.first+this.size;e.from!=null&&e.from>n&&(n=e.from),e.to!=null&&e.to<s&&(s=e.to);var i=new Ot(cs(this,n,s),e.mode||this.modeOption,n,this.lineSep,this.direction);return e.sharedHist&&(i.history=this.history),(this.linked||(this.linked=[])).push({doc:i,sharedHist:e.sharedHist}),i.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],to(i,jl(this)),i},unlinkDoc:function(e){if(e instanceof en&&(e=e.doc),this.linked)for(var n=0;n<this.linked.length;++n){var s=this.linked[n];if(s.doc==e){this.linked.splice(n,1),e.unlinkDoc(this),fn(jl(this));break}}if(e.history==this.history){var i=[e.id];An(e,function(o){return i.push(o.id)},!0),e.history=new Na(null),e.history.done=Ys(this.history.done,i),e.history.undone=Ys(this.history.undone,i)}},iterLinkedDocs:function(e){An(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):Tr(e)},lineSeparator:function(){return this.lineSep||`
`},setDirection:yn(function(e){e!="rtl"&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(n){return n.order=null}),this.cm&&Pc(this.cm))})}),Ot.prototype.eachLine=Ot.prototype.iter;var Ma=0;function Da(e){var n=this;if(Zn(n),!(qt(n,e)||qi(n.display,e))){wn(e),k&&(Ma=+new Date);var s=gs(n,e,!0),i=e.dataTransfer.files;if(!(!s||n.isReadOnly()))if(i&&i.length&&window.FileReader&&window.File)for(var o=i.length,h=Array(o),m=0,x=function(){++m==o&&hn(n,function(){s=gt(n.doc,s);var ee={from:s,to:s,text:n.doc.splitLines(h.filter(function(me){return me!=null}).join(n.doc.lineSeparator())),origin:"paste"};Xs(n.doc,ee),Sl(n.doc,Fn(gt(n.doc,s),gt(n.doc,Wn(ee))))})()},w=function(ee,me){if(n.options.allowDropFileTypes&&$e(n.options.allowDropFileTypes,ee.type)==-1){x();return}var xe=new FileReader;xe.onerror=function(){return x()},xe.onload=function(){var Ae=xe.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(Ae)){x();return}h[me]=Ae,x()},xe.readAsText(ee)},S=0;S<i.length;S++)w(i[S],S);else{if(n.state.draggingText&&n.doc.sel.contains(s)>-1){n.state.draggingText(e),setTimeout(function(){return n.display.input.focus()},20);return}try{var z=e.dataTransfer.getData("Text");if(z){var U;if(n.state.draggingText&&!n.state.draggingText.copy&&(U=n.listSelections()),Mo(n.doc,Fn(s,s)),U)for(var re=0;re<U.length;++re)Qs(n.doc,"",U[re].anchor,U[re].head,"drag");n.replaceSelection(z,"around","paste"),n.display.input.focus()}}catch{}}}}function za(e,n){if(k&&(!e.state.draggingText||+new Date-Ma<100)){pr(n);return}if(!(qt(e,n)||qi(e.display,n))&&(n.dataTransfer.setData("Text",e.getSelection()),n.dataTransfer.effectAllowed="copyMove",n.dataTransfer.setDragImage&&!W)){var s=L("img",null,null,"position: fixed; left: 0; top: 0;");s.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",J&&(s.width=s.height=1,e.display.wrapper.appendChild(s),s._top=s.offsetTop),n.dataTransfer.setDragImage(s,0,0),J&&s.parentNode.removeChild(s)}}function cp(e,n){var s=gs(e,n);if(s){var i=document.createDocumentFragment();ba(e,s,i),e.display.dragCursor||(e.display.dragCursor=L("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),ye(e.display.dragCursor,i)}}function Zn(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Nl(e){if(document.getElementsByClassName){for(var n=document.getElementsByClassName("CodeMirror"),s=[],i=0;i<n.length;i++){var o=n[i].CodeMirror;o&&s.push(o)}s.length&&s[0].operation(function(){for(var h=0;h<s.length;h++)e(s[h])})}}var El=!1;function Su(){El||(Pi(),El=!0)}function Pi(){var e;rt(window,"resize",function(){e==null&&(e=setTimeout(function(){e=null,Nl(Jr)},100))}),rt(window,"blur",function(){return Nl(Wt)})}function Jr(e){var n=e.display;n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.scrollbarsClipped=!1,e.setSize()}for(var Xr={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},no=0;no<10;no++)Xr[no+48]=Xr[no+96]=String(no);for(var Wo=65;Wo<=90;Wo++)Xr[Wo]=String.fromCharCode(Wo);for(var Ho=1;Ho<=12;Ho++)Xr[Ho+111]=Xr[Ho+63235]="F"+Ho;var Ai={};Ai.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ai.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ai.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Ai.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ai.default=Y?Ai.macDefault:Ai.pcDefault;function Oc(e){var n=e.split(/-(?!$)/);e=n[n.length-1];for(var s,i,o,h,m=0;m<n.length-1;m++){var x=n[m];if(/^(cmd|meta|m)$/i.test(x))h=!0;else if(/^a(lt)?$/i.test(x))s=!0;else if(/^(c|ctrl|control)$/i.test(x))i=!0;else if(/^s(hift)?$/i.test(x))o=!0;else throw new Error("Unrecognized modifier name: "+x)}return s&&(e="Alt-"+e),i&&(e="Ctrl-"+e),h&&(e="Cmd-"+e),o&&(e="Shift-"+e),e}function Mc(e){var n={};for(var s in e)if(e.hasOwnProperty(s)){var i=e[s];if(/^(name|fallthrough|(de|at)tach)$/.test(s))continue;if(i=="..."){delete e[s];continue}for(var o=ut(s.split(" "),Oc),h=0;h<o.length;h++){var m=void 0,x=void 0;h==o.length-1?(x=o.join(" "),m=i):(x=o.slice(0,h+1).join(" "),m="...");var w=n[x];if(!w)n[x]=m;else if(w!=m)throw new Error("Inconsistent bindings for "+x)}delete e[s]}for(var S in n)e[S]=n[S];return e}function ro(e,n,s,i){n=Es(n);var o=n.call?n.call(e,i):n[e];if(o===!1)return"nothing";if(o==="...")return"multi";if(o!=null&&s(o))return"handled";if(n.fallthrough){if(Object.prototype.toString.call(n.fallthrough)!="[object Array]")return ro(e,n.fallthrough,s,i);for(var h=0;h<n.fallthrough.length;h++){var m=ro(e,n.fallthrough[h],s,i);if(m)return m}}}function _u(e){var n=typeof e=="string"?e:Xr[e.keyCode];return n=="Ctrl"||n=="Alt"||n=="Shift"||n=="Mod"}function Cu(e,n,s){var i=e;return n.altKey&&i!="Alt"&&(e="Alt-"+e),(We?n.metaKey:n.ctrlKey)&&i!="Ctrl"&&(e="Ctrl-"+e),(We?n.ctrlKey:n.metaKey)&&i!="Mod"&&(e="Cmd-"+e),!s&&n.shiftKey&&i!="Shift"&&(e="Shift-"+e),e}function Tu(e,n){if(J&&e.keyCode==34&&e.char)return!1;var s=Xr[e.keyCode];return s==null||e.altGraphKey?!1:(e.keyCode==3&&e.code&&(s=e.code),Cu(s,e,n))}function Es(e){return typeof e=="string"?Ai[e]:e}function io(e,n){for(var s=e.doc.sel.ranges,i=[],o=0;o<s.length;o++){for(var h=n(s[o]);i.length&&He(h.from,Qe(i).to)<=0;){var m=i.pop();if(He(m.from,h.from)<0){h.from=m.from;break}}i.push(h)}Pn(e,function(){for(var x=i.length-1;x>=0;x--)Qs(e.doc,"",i[x].from,i[x].to,"+delete");Hs(e)})}function Bo(e,n,s){var i=Xt(e.text,n+s,s);return i<0||i>e.text.length?null:i}function Uo(e,n,s){var i=Bo(e,n.ch,s);return i==null?null:new de(n.line,i,s<0?"after":"before")}function Ll(e,n,s,i,o){if(e){n.doc.direction=="rtl"&&(o=-o);var h=bt(s,n.doc.direction);if(h){var m=o<0?Qe(h):h[0],x=o<0==(m.level==1),w=x?"after":"before",S;if(m.level>0||n.doc.direction=="rtl"){var z=ki(n,s);S=o<0?s.text.length-1:0;var U=Er(n,z,S).top;S=nr(function(re){return Er(n,z,re).top==U},o<0==(m.level==1)?m.from:m.to-1,S),w=="before"&&(S=Bo(s,S,1))}else S=o<0?m.to:m.from;return new de(i,S,w)}}return new de(i,o<0?s.text.length:0,o<0?"before":"after")}function ju(e,n,s,i){var o=bt(n,e.doc.direction);if(!o)return Uo(n,s,i);s.ch>=n.text.length?(s.ch=n.text.length,s.sticky="before"):s.ch<=0&&(s.ch=0,s.sticky="after");var h=Br(o,s.ch,s.sticky),m=o[h];if(e.doc.direction=="ltr"&&m.level%2==0&&(i>0?m.to>s.ch:m.from<s.ch))return Uo(n,s,i);var x=function(Ee,ze){return Bo(n,Ee instanceof de?Ee.ch:Ee,ze)},w,S=function(Ee){return e.options.lineWrapping?(w=w||ki(e,n),pu(e,n,w,Ee)):{begin:0,end:n.text.length}},z=S(s.sticky=="before"?x(s,-1):s.ch);if(e.doc.direction=="rtl"||m.level==1){var U=m.level==1==i<0,re=x(s,U?1:-1);if(re!=null&&(U?re<=m.to&&re<=z.end:re>=m.from&&re>=z.begin)){var ee=U?"before":"after";return new de(s.line,re,ee)}}var me=function(Ee,ze,Me){for(var Ge=function(Et,Un){return Un?new de(s.line,x(Et,1),"before"):new de(s.line,Et,"after")};Ee>=0&&Ee<o.length;Ee+=ze){var at=o[Ee],Ve=ze>0==(at.level!=1),St=Ve?Me.begin:x(Me.end,-1);if(at.from<=St&&St<at.to||(St=Ve?at.from:x(at.to,-1),Me.begin<=St&&St<Me.end))return Ge(St,Ve)}},xe=me(h+i,i,z);if(xe)return xe;var Ae=i>0?z.end:x(z.begin,-1);return Ae!=null&&!(i>0&&Ae==n.text.length)&&(xe=me(i>0?0:o.length-1,i,S(Ae)),xe)?xe:null}var qo={selectAll:Qi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),Ct)},killLine:function(e){return io(e,function(n){if(n.empty()){var s=Je(e.doc,n.head.line).text.length;return n.head.ch==s&&n.head.line<e.lastLine()?{from:n.head,to:de(n.head.line+1,0)}:{from:n.head,to:de(n.head.line,s)}}else return{from:n.from(),to:n.to()}})},deleteLine:function(e){return io(e,function(n){return{from:de(n.from().line,0),to:gt(e.doc,de(n.to().line+1,0))}})},delLineLeft:function(e){return io(e,function(n){return{from:de(n.from().line,0),to:n.from()}})},delWrappedLineLeft:function(e){return io(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return{from:i,to:n.from()}})},delWrappedLineRight:function(e){return io(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div");return{from:n.from(),to:i}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(de(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(de(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(n){return Nu(e,n.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(n){return Eu(e,n.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(n){return Dc(e,n.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div")},tt)},goLineLeft:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:0,top:s},"div")},tt)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return i.ch<e.getLine(i.line).search(/\S/)?Eu(e,n.head):i},tt)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("	")},insertSoftTab:function(e){for(var n=[],s=e.listSelections(),i=e.options.tabSize,o=0;o<s.length;o++){var h=s[o].from(),m=Ke(e.getLine(h.line),h.ch,i);n.push(yt(i-m%i))}e.replaceSelections(n)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return Pn(e,function(){for(var n=e.listSelections(),s=[],i=0;i<n.length;i++)if(n[i].empty()){var o=n[i].head,h=Je(e.doc,o.line).text;if(h){if(o.ch==h.length&&(o=new de(o.line,o.ch-1)),o.ch>0)o=new de(o.line,o.ch+1),e.replaceRange(h.charAt(o.ch-1)+h.charAt(o.ch-2),de(o.line,o.ch-2),o,"+transpose");else if(o.line>e.doc.first){var m=Je(e.doc,o.line-1).text;m&&(o=new de(o.line,1),e.replaceRange(h.charAt(0)+e.doc.lineSeparator()+m.charAt(m.length-1),de(o.line-1,m.length-1),o,"+transpose"))}}s.push(new At(o,o))}e.setSelections(s)})},newlineAndIndent:function(e){return Pn(e,function(){for(var n=e.listSelections(),s=n.length-1;s>=0;s--)e.replaceRange(e.doc.lineSeparator(),n[s].anchor,n[s].head,"+input");n=e.listSelections();for(var i=0;i<n.length;i++)e.indentLine(n[i].from().line,null,!0);Hs(e)})},openLine:function(e){return e.replaceSelection(`
`,"start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function Nu(e,n){var s=Je(e.doc,n),i=Kt(s);return i!=s&&(n=T(i)),Ll(!0,e,i,n,1)}function Dc(e,n){var s=Je(e.doc,n),i=hr(s);return i!=s&&(n=T(i)),Ll(!0,e,s,n,-1)}function Eu(e,n){var s=Nu(e,n.line),i=Je(e.doc,s.line),o=bt(i,e.doc.direction);if(!o||o[0].level==0){var h=Math.max(s.ch,i.text.search(/\S/)),m=n.line==s.line&&n.ch<=h&&n.ch;return de(s.line,m?0:h,s.sticky)}return s}function Ko(e,n,s){if(typeof n=="string"&&(n=qo[n],!n))return!1;e.display.input.ensurePolled();var i=e.display.shift,o=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),s&&(e.display.shift=!1),o=n(e)!=Yt}finally{e.display.shift=i,e.state.suppressEdits=!1}return o}function zc(e,n,s){for(var i=0;i<e.state.keyMaps.length;i++){var o=ro(n,e.state.keyMaps[i],s,e);if(o)return o}return e.options.extraKeys&&ro(n,e.options.extraKeys,s,e)||ro(n,e.options.keyMap,s,e)}var Fc=new et;function $o(e,n,s,i){var o=e.state.keySeq;if(o){if(_u(n))return"handled";if(/\'$/.test(n)?e.state.keySeq=null:Fc.set(50,function(){e.state.keySeq==o&&(e.state.keySeq=null,e.display.input.reset())}),Wc(e,o+" "+n,s,i))return!0}return Wc(e,n,s,i)}function Wc(e,n,s,i){var o=zc(e,n,i);return o=="multi"&&(e.state.keySeq=n),o=="handled"&&zn(e,"keyHandled",e,n,s),(o=="handled"||o=="multi")&&(wn(s),Ws(e)),!!o}function Lu(e,n){var s=Tu(n,!0);return s?n.shiftKey&&!e.state.keySeq?$o(e,"Shift-"+s,n,function(i){return Ko(e,i,!0)})||$o(e,s,n,function(i){if(typeof i=="string"?/^go[A-Z]/.test(i):i.motion)return Ko(e,i)}):$o(e,s,n,function(i){return Ko(e,i)}):!1}function dp(e,n,s){return $o(e,"'"+s+"'",n,function(i){return Ko(e,i,!0)})}var Pu=null;function Au(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&(n.curOp.focus=R(De(n)),!qt(n,e))){k&&E<11&&e.keyCode==27&&(e.returnValue=!1);var s=e.keyCode;n.display.shift=s==16||e.shiftKey;var i=Lu(n,e);J&&(Pu=i?s:null,!i&&s==88&&!as&&(Y?e.metaKey:e.ctrlKey)&&n.replaceSelection("",null,"cut")),y&&!Y&&!i&&s==46&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),s==18&&!/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className)&&Hc(n)}}function Hc(e){var n=e.display.lineDiv;G(n,"CodeMirror-crosshair");function s(i){(i.keyCode==18||!i.altKey)&&(Ce(n,"CodeMirror-crosshair"),tn(document,"keyup",s),tn(document,"mouseover",s))}rt(document,"keyup",s),rt(document,"mouseover",s)}function Ru(e){e.keyCode==16&&(this.doc.sel.shift=!1),qt(this,e)}function Fa(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&!(qi(n.display,e)||qt(n,e)||e.ctrlKey&&!e.altKey||Y&&e.metaKey)){var s=e.keyCode,i=e.charCode;if(J&&s==Pu){Pu=null,wn(e);return}if(!(J&&(!e.which||e.which<10)&&Lu(n,e))){var o=String.fromCharCode(i??s);o!="\b"&&(dp(n,e,o)||n.display.input.onKeyPress(e))}}}var pp=400,Iu=function(e,n,s){this.time=e,this.pos=n,this.button=s};Iu.prototype.compare=function(e,n,s){return this.time+pp>e&&He(n,this.pos)==0&&s==this.button};var Wa,yr;function Ou(e,n){var s=+new Date;return yr&&yr.compare(s,e,n)?(Wa=yr=null,"triple"):Wa&&Wa.compare(s,e,n)?(yr=new Iu(s,e,n),Wa=null,"double"):(Wa=new Iu(s,e,n),yr=null,"single")}function Ha(e){var n=this,s=n.display;if(!(qt(n,e)||s.activeTouch&&s.input.supportsTouch())){if(s.input.ensurePolled(),s.shift=e.shiftKey,qi(s,e)){N||(s.scroller.draggable=!1,setTimeout(function(){return s.scroller.draggable=!0},100));return}if(!Pl(n,e)){var i=gs(n,e),o=Ln(e),h=i?Ou(i,o):"single";Ie(n).focus(),o==1&&n.state.selectingText&&n.state.selectingText(e),!(i&&Bc(n,o,i,h,e))&&(o==1?i?qc(n,i,h,e):mi(e)==s.scroller&&wn(e):o==2?(i&&Aa(n.doc,i),setTimeout(function(){return s.input.focus()},20)):o==3&&(Te?n.display.input.onContextMenu(e):fl(n)))}}}function Bc(e,n,s,i,o){var h="Click";return i=="double"?h="Double"+h:i=="triple"&&(h="Triple"+h),h=(n==1?"Left":n==2?"Middle":"Right")+h,$o(e,Cu(h,o),o,function(m){if(typeof m=="string"&&(m=qo[m]),!m)return!1;var x=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),x=m(e,s)!=Yt}finally{e.state.suppressEdits=!1}return x})}function Uc(e,n,s){var i=e.getOption("configureMouse"),o=i?i(e,n,s):{};if(o.unit==null){var h=ge?s.shiftKey&&s.metaKey:s.altKey;o.unit=h?"rectangle":n=="single"?"char":n=="double"?"word":"line"}return(o.extend==null||e.doc.extend)&&(o.extend=e.doc.extend||s.shiftKey),o.addNew==null&&(o.addNew=Y?s.metaKey:s.ctrlKey),o.moveOnDrag==null&&(o.moveOnDrag=!(Y?s.altKey:s.ctrlKey)),o}function qc(e,n,s,i){k?setTimeout(ke(Tc,e),0):e.curOp.focus=R(De(e));var o=Uc(e,s,i),h=e.doc.sel,m;e.options.dragDrop&&os&&!e.isReadOnly()&&s=="single"&&(m=h.contains(n))>-1&&(He((m=h.ranges[m]).from(),n)<0||n.xRel>0)&&(He(m.to(),n)>0||n.xRel<0)?Mu(e,i,n,o):Du(e,i,n,o)}function Mu(e,n,s,i){var o=e.display,h=!1,m=hn(e,function(S){N&&(o.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:fl(e)),tn(o.wrapper.ownerDocument,"mouseup",m),tn(o.wrapper.ownerDocument,"mousemove",x),tn(o.scroller,"dragstart",w),tn(o.scroller,"drop",m),h||(wn(S),i.addNew||Aa(e.doc,s,null,null,i.extend),N&&!W||k&&E==9?setTimeout(function(){o.wrapper.ownerDocument.body.focus({preventScroll:!0}),o.input.focus()},20):o.input.focus())}),x=function(S){h=h||Math.abs(n.clientX-S.clientX)+Math.abs(n.clientY-S.clientY)>=10},w=function(){return h=!0};N&&(o.scroller.draggable=!0),e.state.draggingText=m,m.copy=!i.moveOnDrag,rt(o.wrapper.ownerDocument,"mouseup",m),rt(o.wrapper.ownerDocument,"mousemove",x),rt(o.scroller,"dragstart",w),rt(o.scroller,"drop",m),e.state.delayingBlurEvent=!0,setTimeout(function(){return o.input.focus()},20),o.scroller.dragDrop&&o.scroller.dragDrop()}function so(e,n,s){if(s=="char")return new At(n,n);if(s=="word")return e.findWordAt(n);if(s=="line")return new At(de(n.line,0),gt(e.doc,de(n.line+1,0)));var i=s(e,n);return new At(i.from,i.to)}function Du(e,n,s,i){k&&fl(e);var o=e.display,h=e.doc;wn(n);var m,x,w=h.sel,S=w.ranges;if(i.addNew&&!i.extend?(x=h.sel.contains(s),x>-1?m=S[x]:m=new At(s,s)):(m=h.sel.primary(),x=h.sel.primIndex),i.unit=="rectangle")i.addNew||(m=new At(s,s)),s=gs(e,n,!0,!0),x=-1;else{var z=so(e,s,i.unit);i.extend?m=Cs(m,z.anchor,z.head,i.extend):m=z}i.addNew?x==-1?(x=S.length,Hn(h,Lr(e,S.concat([m]),x),{scroll:!1,origin:"*mouse"})):S.length>1&&S[x].empty()&&i.unit=="char"&&!i.extend?(Hn(h,Lr(e,S.slice(0,x).concat(S.slice(x+1)),0),{scroll:!1,origin:"*mouse"}),w=h.sel):Oo(h,x,m,xt):(x=0,Hn(h,new Xn([m],0),xt),w=h.sel);var U=s;function re(Me){if(He(U,Me)!=0)if(U=Me,i.unit=="rectangle"){for(var Ge=[],at=e.options.tabSize,Ve=Ke(Je(h,s.line).text,s.ch,at),St=Ke(Je(h,Me.line).text,Me.ch,at),Et=Math.min(Ve,St),Un=Math.max(Ve,St),sn=Math.min(s.line,Me.line),xr=Math.min(e.lastLine(),Math.max(s.line,Me.line));sn<=xr;sn++){var lr=Je(h,sn).text,vn=Ue(lr,Et,at);Et==Un?Ge.push(new At(de(sn,vn),de(sn,vn))):lr.length>vn&&Ge.push(new At(de(sn,vn),de(sn,Ue(lr,Un,at))))}Ge.length||Ge.push(new At(s,s)),Hn(h,Lr(e,w.ranges.slice(0,x).concat(Ge),x),{origin:"*mouse",scroll:!1}),e.scrollIntoView(Me)}else{var br=m,jn=so(e,Me,i.unit),xn=br.anchor,Dt;He(jn.anchor,xn)>0?(Dt=jn.head,xn=Kr(br.from(),jn.anchor)):(Dt=jn.anchor,xn=Sn(br.to(),jn.head));var dt=w.ranges.slice(0);dt[x]=zu(e,new At(gt(h,xn),Dt)),Hn(h,Lr(e,dt,x),xt)}}var ee=o.wrapper.getBoundingClientRect(),me=0;function xe(Me){var Ge=++me,at=gs(e,Me,!0,i.unit=="rectangle");if(at)if(He(at,U)!=0){e.curOp.focus=R(De(e)),re(at);var Ve=ys(o,h);(at.line>=Ve.to||at.line<Ve.from)&&setTimeout(hn(e,function(){me==Ge&&xe(Me)}),150)}else{var St=Me.clientY<ee.top?-20:Me.clientY>ee.bottom?20:0;St&&setTimeout(hn(e,function(){me==Ge&&(o.scroller.scrollTop+=St,xe(Me))}),50)}}function Ae(Me){e.state.selectingText=!1,me=1/0,Me&&(wn(Me),o.input.focus()),tn(o.wrapper.ownerDocument,"mousemove",Ee),tn(o.wrapper.ownerDocument,"mouseup",ze),h.history.lastSelOrigin=null}var Ee=hn(e,function(Me){Me.buttons===0||!Ln(Me)?Ae(Me):xe(Me)}),ze=hn(e,Ae);e.state.selectingText=ze,rt(o.wrapper.ownerDocument,"mousemove",Ee),rt(o.wrapper.ownerDocument,"mouseup",ze)}function zu(e,n){var s=n.anchor,i=n.head,o=Je(e.doc,s.line);if(He(s,i)==0&&s.sticky==i.sticky)return n;var h=bt(o);if(!h)return n;var m=Br(h,s.ch,s.sticky),x=h[m];if(x.from!=s.ch&&x.to!=s.ch)return n;var w=m+(x.from==s.ch==(x.level!=1)?0:1);if(w==0||w==h.length)return n;var S;if(i.line!=s.line)S=(i.line-s.line)*(e.doc.direction=="ltr"?1:-1)>0;else{var z=Br(h,i.ch,i.sticky),U=z-m||(i.ch-s.ch)*(x.level==1?-1:1);z==w-1||z==w?S=U<0:S=U>0}var re=h[w+(S?-1:0)],ee=S==(re.level==1),me=ee?re.from:re.to,xe=ee?"after":"before";return s.ch==me&&s.sticky==xe?n:new At(new de(s.line,me,xe),i)}function Kc(e,n,s,i){var o,h;if(n.touches)o=n.touches[0].clientX,h=n.touches[0].clientY;else try{o=n.clientX,h=n.clientY}catch{return!1}if(o>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;i&&wn(n);var m=e.display,x=m.lineDiv.getBoundingClientRect();if(h>x.bottom||!gn(e,s))return On(n);h-=x.top-m.viewOffset;for(var w=0;w<e.display.gutterSpecs.length;++w){var S=m.gutters.childNodes[w];if(S&&S.getBoundingClientRect().right>=o){var z=B(e.doc,h),U=e.display.gutterSpecs[w];return It(e,s,e,z,U.className,n),On(n)}}}function Pl(e,n){return Kc(e,n,"gutterClick",!0)}function Fu(e,n){qi(e.display,n)||$c(e,n)||qt(e,n,"contextmenu")||Te||e.display.input.onContextMenu(n)}function $c(e,n){return gn(e,"gutterContextMenu")?Kc(e,n,"gutterContextMenu",!1):!1}function Wu(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),ko(e)}var oo={toString:function(){return"CodeMirror.Init"}},Gc={},er={};function vr(e){var n=e.optionHandlers;function s(i,o,h,m){e.defaults[i]=o,h&&(n[i]=m?function(x,w,S){S!=oo&&h(x,w,S)}:h)}e.defineOption=s,e.Init=oo,s("value","",function(i,o){return i.setValue(o)},!0),s("mode",null,function(i,o){i.doc.modeOption=o,xl(i)},!0),s("indentUnit",2,xl,!0),s("indentWithTabs",!1),s("smartIndent",!0),s("tabSize",4,function(i){Gs(i),ko(i),sr(i)},!0),s("lineSeparator",null,function(i,o){if(i.doc.lineSep=o,!!o){var h=[],m=i.doc.first;i.doc.iter(function(w){for(var S=0;;){var z=w.text.indexOf(o,S);if(z==-1)break;S=z+o.length,h.push(de(m,z))}m++});for(var x=h.length-1;x>=0;x--)Qs(i.doc,o,h[x],de(h[x].line,h[x].ch+o.length))}}),s("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,function(i,o,h){i.state.specialChars=new RegExp(o.source+(o.test("	")?"":"|	"),"g"),h!=oo&&i.refresh()}),s("specialCharPlaceholder",Kd,function(i){return i.refresh()},!0),s("electricChars",!0),s("inputStyle",q?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),s("spellcheck",!1,function(i,o){return i.getInputField().spellcheck=o},!0),s("autocorrect",!1,function(i,o){return i.getInputField().autocorrect=o},!0),s("autocapitalize",!1,function(i,o){return i.getInputField().autocapitalize=o},!0),s("rtlMoveVisually",!le),s("wholeLineUpdateBefore",!0),s("theme","default",function(i){Wu(i),zr(i)},!0),s("keyMap","default",function(i,o,h){var m=Es(o),x=h!=oo&&Es(h);x&&x.detach&&x.detach(i,m),m.attach&&m.attach(i,x||null)}),s("extraKeys",null),s("configureMouse",null),s("lineWrapping",!1,Vc,!0),s("gutters",[],function(i,o){i.display.gutterSpecs=Po(o,i.options.lineNumbers),zr(i)},!0),s("fixedGutter",!0,function(i,o){i.display.gutters.style.left=o?Co(i.display)+"px":"0",i.refresh()},!0),s("coverGutterNextToScrollbar",!1,function(i){return Us(i)},!0),s("scrollbarStyle","native",function(i){yl(i),Us(i),i.display.scrollbars.setScrollTop(i.doc.scrollTop),i.display.scrollbars.setScrollLeft(i.doc.scrollLeft)},!0),s("lineNumbers",!1,function(i,o){i.display.gutterSpecs=Po(i.options.gutters,o),zr(i)},!0),s("firstLineNumber",1,zr,!0),s("lineNumberFormatter",function(i){return i},zr,!0),s("showCursorWhenSelecting",!1,Gr,!0),s("resetSelectionOnContextMenu",!0),s("lineWiseCopyCut",!0),s("pasteLinesPerSelection",!0),s("selectionsMayTouch",!1),s("readOnly",!1,function(i,o){o=="nocursor"&&(Wt(i),i.display.input.blur()),i.display.input.readOnlyChanged(o)}),s("screenReaderLabel",null,function(i,o){o=o===""?null:o,i.display.input.screenReaderLabelChanged(o)}),s("disableInput",!1,function(i,o){o||i.display.input.reset()},!0),s("dragDrop",!0,Yc),s("allowDropFileTypes",null),s("cursorBlinkRate",530),s("cursorScrollMargin",0),s("cursorHeight",1,Gr,!0),s("singleCursorHeightPerLine",!0,Gr,!0),s("workTime",100),s("workDelay",100),s("flattenSpans",!0,Gs,!0),s("addModeClass",!1,Gs,!0),s("pollInterval",100),s("undoDepth",200,function(i,o){return i.doc.history.undoDepth=o}),s("historyEventDelay",1250),s("viewportMargin",10,function(i){return i.refresh()},!0),s("maxHighlightLength",1e4,Gs,!0),s("moveInputWithCursor",!0,function(i,o){o||i.display.input.resetPosition()}),s("tabindex",null,function(i,o){return i.display.input.getField().tabIndex=o||""}),s("autofocus",null),s("direction","ltr",function(i,o){return i.doc.setDirection(o)},!0),s("phrases",null)}function Yc(e,n,s){var i=s&&s!=oo;if(!n!=!i){var o=e.display.dragFunctions,h=n?rt:tn;h(e.display.scroller,"dragstart",o.start),h(e.display.scroller,"dragenter",o.enter),h(e.display.scroller,"dragover",o.over),h(e.display.scroller,"dragleave",o.leave),h(e.display.scroller,"drop",o.drop)}}function Vc(e){e.options.lineWrapping?(G(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Ce(e.display.wrapper,"CodeMirror-wrap"),ca(e)),va(e),sr(e),ko(e),setTimeout(function(){return Us(e)},100)}function en(e,n){var s=this;if(!(this instanceof en))return new en(e,n);this.options=n=n?Be(n):{},Be(Gc,n,!1);var i=n.value;typeof i=="string"?i=new Ot(i,n.mode,null,n.lineSeparator,n.direction):n.mode&&(i.modeOption=n.mode),this.doc=i;var o=new en.inputStyles[n.inputStyle](this),h=this.display=new vl(e,i,o,n);h.wrapper.CodeMirror=this,Wu(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),yl(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new et,keySeq:null,specialChars:null},n.autofocus&&!q&&h.input.focus(),k&&E<11&&setTimeout(function(){return s.display.input.reset(!0)},20),Jc(this),Su(),ws(this),this.curOp.forceUpdate=!0,rn(this,i),n.autofocus&&!q||this.hasFocus()?setTimeout(function(){s.hasFocus()&&!s.state.focused&&ml(s)},20):Wt(this);for(var m in er)er.hasOwnProperty(m)&&er[m](this,n[m],oo);yu(this),n.finishInit&&n.finishInit(this);for(var x=0;x<Al.length;++x)Al[x](this);Yr(this),N&&n.lineWrapping&&getComputedStyle(h.lineDiv).textRendering=="optimizelegibility"&&(h.lineDiv.style.textRendering="auto")}en.defaults=Gc,en.optionHandlers=er;function Jc(e){var n=e.display;rt(n.scroller,"mousedown",hn(e,Ha)),k&&E<11?rt(n.scroller,"dblclick",hn(e,function(w){if(!qt(e,w)){var S=gs(e,w);if(!(!S||Pl(e,w)||qi(e.display,w))){wn(w);var z=e.findWordAt(S);Aa(e.doc,z.anchor,z.head)}}})):rt(n.scroller,"dblclick",function(w){return qt(e,w)||wn(w)}),rt(n.scroller,"contextmenu",function(w){return Fu(e,w)}),rt(n.input.getField(),"contextmenu",function(w){n.scroller.contains(w.target)||Fu(e,w)});var s,i={end:0};function o(){n.activeTouch&&(s=setTimeout(function(){return n.activeTouch=null},1e3),i=n.activeTouch,i.end=+new Date)}function h(w){if(w.touches.length!=1)return!1;var S=w.touches[0];return S.radiusX<=1&&S.radiusY<=1}function m(w,S){if(S.left==null)return!0;var z=S.left-w.left,U=S.top-w.top;return z*z+U*U>400}rt(n.scroller,"touchstart",function(w){if(!qt(e,w)&&!h(w)&&!Pl(e,w)){n.input.ensurePolled(),clearTimeout(s);var S=+new Date;n.activeTouch={start:S,moved:!1,prev:S-i.end<=300?i:null},w.touches.length==1&&(n.activeTouch.left=w.touches[0].pageX,n.activeTouch.top=w.touches[0].pageY)}}),rt(n.scroller,"touchmove",function(){n.activeTouch&&(n.activeTouch.moved=!0)}),rt(n.scroller,"touchend",function(w){var S=n.activeTouch;if(S&&!qi(n,w)&&S.left!=null&&!S.moved&&new Date-S.start<300){var z=e.coordsChar(n.activeTouch,"page"),U;!S.prev||m(S,S.prev)?U=new At(z,z):!S.prev.prev||m(S,S.prev.prev)?U=e.findWordAt(z):U=new At(de(z.line,0),gt(e.doc,de(z.line+1,0))),e.setSelection(U.anchor,U.head),e.focus(),wn(w)}o()}),rt(n.scroller,"touchcancel",o),rt(n.scroller,"scroll",function(){n.scroller.clientHeight&&(xs(e,n.scroller.scrollTop),Yi(e,n.scroller.scrollLeft,!0),It(e,"scroll",e))}),rt(n.scroller,"mousewheel",function(w){return Ks(e,w)}),rt(n.scroller,"DOMMouseScroll",function(w){return Ks(e,w)}),rt(n.wrapper,"scroll",function(){return n.wrapper.scrollTop=n.wrapper.scrollLeft=0}),n.dragFunctions={enter:function(w){qt(e,w)||pr(w)},over:function(w){qt(e,w)||(cp(e,w),pr(w))},start:function(w){return za(e,w)},drop:hn(e,Da),leave:function(w){qt(e,w)||Zn(e)}};var x=n.input.getField();rt(x,"keyup",function(w){return Ru.call(e,w)}),rt(x,"keydown",hn(e,Au)),rt(x,"keypress",hn(e,Fa)),rt(x,"focus",function(w){return ml(e,w)}),rt(x,"blur",function(w){return Wt(e,w)})}var Al=[];en.defineInitHook=function(e){return Al.push(e)};function ao(e,n,s,i){var o=e.doc,h;s==null&&(s="add"),s=="smart"&&(o.mode.indent?h=Nt(e,n).state:s="prev");var m=e.options.tabSize,x=Je(o,n),w=Ke(x.text,null,m);x.stateAfter&&(x.stateAfter=null);var S=x.text.match(/^\s*/)[0],z;if(!i&&!/\S/.test(x.text))z=0,s="not";else if(s=="smart"&&(z=o.mode.indent(h,x.text.slice(S.length),x.text),z==Yt||z>150)){if(!i)return;s="prev"}s=="prev"?n>o.first?z=Ke(Je(o,n-1).text,null,m):z=0:s=="add"?z=w+e.options.indentUnit:s=="subtract"?z=w-e.options.indentUnit:typeof s=="number"&&(z=w+s),z=Math.max(0,z);var U="",re=0;if(e.options.indentWithTabs)for(var ee=Math.floor(z/m);ee;--ee)re+=m,U+="	";if(re<z&&(U+=yt(z-re)),U!=S)return Qs(o,U,de(n,0),de(n,S.length),"+input"),x.stateAfter=null,!0;for(var me=0;me<o.sel.ranges.length;me++){var xe=o.sel.ranges[me];if(xe.head.line==n&&xe.head.ch<S.length){var Ae=de(n,S.length);Oo(o,me,new At(Ae,Ae));break}}}var Qr=null;function Go(e){Qr=e}function Rl(e,n,s,i,o){var h=e.doc;e.display.shift=!1,i||(i=h.sel);var m=+new Date-200,x=o=="paste"||e.state.pasteIncoming>m,w=Tr(n),S=null;if(x&&i.ranges.length>1)if(Qr&&Qr.text.join(`
`)==n){if(i.ranges.length%Qr.text.length==0){S=[];for(var z=0;z<Qr.text.length;z++)S.push(h.splitLines(Qr.text[z]))}}else w.length==i.ranges.length&&e.options.pasteLinesPerSelection&&(S=ut(w,function(Ee){return[Ee]}));for(var U=e.curOp.updateInput,re=i.ranges.length-1;re>=0;re--){var ee=i.ranges[re],me=ee.from(),xe=ee.to();ee.empty()&&(s&&s>0?me=de(me.line,me.ch-s):e.state.overwrite&&!x?xe=de(xe.line,Math.min(Je(h,xe.line).text.length,xe.ch+Qe(w).length)):x&&Qr&&Qr.lineWise&&Qr.text.join(`
`)==w.join(`
`)&&(me=xe=de(me.line,0)));var Ae={from:me,to:xe,text:S?S[re%S.length]:w,origin:o||(x?"paste":e.state.cutIncoming>m?"cut":"+input")};Xs(e.doc,Ae),zn(e,"inputRead",e,Ae)}n&&!x&&Il(e,n),Hs(e),e.curOp.updateInput<2&&(e.curOp.updateInput=U),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Hu(e,n){var s=e.clipboardData&&e.clipboardData.getData("Text");if(s)return e.preventDefault(),!n.isReadOnly()&&!n.options.disableInput&&n.hasFocus()&&Pn(n,function(){return Rl(n,s,0,null,"paste")}),!0}function Il(e,n){if(!(!e.options.electricChars||!e.options.smartIndent))for(var s=e.doc.sel,i=s.ranges.length-1;i>=0;i--){var o=s.ranges[i];if(!(o.head.ch>100||i&&s.ranges[i-1].head.line==o.head.line)){var h=e.getModeAt(o.head),m=!1;if(h.electricChars){for(var x=0;x<h.electricChars.length;x++)if(n.indexOf(h.electricChars.charAt(x))>-1){m=ao(e,o.head.line,"smart");break}}else h.electricInput&&h.electricInput.test(Je(e.doc,o.head.line).text.slice(0,o.head.ch))&&(m=ao(e,o.head.line,"smart"));m&&zn(e,"electricInput",e,o.head.line)}}}function Ol(e){for(var n=[],s=[],i=0;i<e.doc.sel.ranges.length;i++){var o=e.doc.sel.ranges[i].head.line,h={anchor:de(o,0),head:de(o+1,0)};s.push(h),n.push(e.getRange(h.anchor,h.head))}return{text:n,ranges:s}}function Ml(e,n,s,i){e.setAttribute("autocorrect",s?"on":"off"),e.setAttribute("autocapitalize",i?"on":"off"),e.setAttribute("spellcheck",!!n)}function Dl(){var e=L("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),n=L("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return N?e.style.width="1000px":e.setAttribute("wrap","off"),H&&(e.style.border="1px solid black"),n}function zl(e){var n=e.optionHandlers,s=e.helpers={};e.prototype={constructor:e,focus:function(){Ie(this).focus(),this.display.input.focus()},setOption:function(i,o){var h=this.options,m=h[i];h[i]==o&&i!="mode"||(h[i]=o,n.hasOwnProperty(i)&&hn(this,n[i])(this,o,m),It(this,"optionChange",this,i))},getOption:function(i){return this.options[i]},getDoc:function(){return this.doc},addKeyMap:function(i,o){this.state.keyMaps[o?"push":"unshift"](Es(i))},removeKeyMap:function(i){for(var o=this.state.keyMaps,h=0;h<o.length;++h)if(o[h]==i||o[h].name==i)return o.splice(h,1),!0},addOverlay:Tn(function(i,o){var h=i.token?i:e.getMode(this.options,i);if(h.startState)throw new Error("Overlays may not be stateful.");ie(this.state.overlays,{mode:h,modeSpec:i,opaque:o&&o.opaque,priority:o&&o.priority||0},function(m){return m.priority}),this.state.modeGen++,sr(this)}),removeOverlay:Tn(function(i){for(var o=this.state.overlays,h=0;h<o.length;++h){var m=o[h].modeSpec;if(m==i||typeof i=="string"&&m.name==i){o.splice(h,1),this.state.modeGen++,sr(this);return}}}),indentLine:Tn(function(i,o,h){typeof o!="string"&&typeof o!="number"&&(o==null?o=this.options.smartIndent?"smart":"prev":o=o?"add":"subtract"),fe(this.doc,i)&&ao(this,i,o,h)}),indentSelection:Tn(function(i){for(var o=this.doc.sel.ranges,h=-1,m=0;m<o.length;m++){var x=o[m];if(x.empty())x.head.line>h&&(ao(this,x.head.line,i,!0),h=x.head.line,m==this.doc.sel.primIndex&&Hs(this));else{var w=x.from(),S=x.to(),z=Math.max(h,w.line);h=Math.min(this.lastLine(),S.line-(S.ch?0:1))+1;for(var U=z;U<h;++U)ao(this,U,i);var re=this.doc.sel.ranges;w.ch==0&&o.length==re.length&&re[m].from().ch>0&&Oo(this.doc,m,new At(w,re[m].to()),Ct)}}}),getTokenAt:function(i,o){return xi(this,i,o)},getLineTokens:function(i,o){return xi(this,de(i),o,!0)},getTokenTypeAt:function(i){i=gt(this.doc,i);var o=Wi(this,Je(this.doc,i.line)),h=0,m=(o.length-1)/2,x=i.ch,w;if(x==0)w=o[2];else for(;;){var S=h+m>>1;if((S?o[S*2-1]:0)>=x)m=S;else if(o[S*2+1]<x)h=S+1;else{w=o[S*2+2];break}}var z=w?w.indexOf("overlay "):-1;return z<0?w:z==0?null:w.slice(0,z-1)},getModeAt:function(i){var o=this.doc.mode;return o.innerMode?e.innerMode(o,this.getTokenAt(i).state).mode:o},getHelper:function(i,o){return this.getHelpers(i,o)[0]},getHelpers:function(i,o){var h=[];if(!s.hasOwnProperty(o))return h;var m=s[o],x=this.getModeAt(i);if(typeof x[o]=="string")m[x[o]]&&h.push(m[x[o]]);else if(x[o])for(var w=0;w<x[o].length;w++){var S=m[x[o][w]];S&&h.push(S)}else x.helperType&&m[x.helperType]?h.push(m[x.helperType]):m[x.name]&&h.push(m[x.name]);for(var z=0;z<m._global.length;z++){var U=m._global[z];U.pred(x,this)&&$e(h,U.val)==-1&&h.push(U.val)}return h},getStateAfter:function(i,o){var h=this.doc;return i=tl(h,i??h.first+h.size-1),Nt(this,i+1,o).state},cursorCoords:function(i,o){var h,m=this.doc.sel.primary();return i==null?h=m.head:typeof i=="object"?h=gt(this.doc,i):h=i?m.from():m.to(),Cn(this,h,o||"page")},charCoords:function(i,o){return ll(this,gt(this.doc,i),o||"page")},coordsChar:function(i,o){return i=_c(this,i,o||"page"),cl(this,i.left,i.top)},lineAtHeight:function(i,o){return i=_c(this,{top:i,left:0},o||"page").top,B(this.doc,i+this.display.viewOffset)},heightAtLine:function(i,o,h){var m=!1,x;if(typeof i=="number"){var w=this.doc.first+this.doc.size-1;i<this.doc.first?i=this.doc.first:i>w&&(i=w,m=!0),x=Je(this.doc,i)}else x=i;return al(this,x,{top:0,left:0},o||"page",h||m).top+(m?this.doc.height-_n(x):0)},defaultTextHeight:function(){return Si(this.display)},defaultCharWidth:function(){return ms(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(i,o,h,m,x){var w=this.display;i=Cn(this,gt(this.doc,i));var S=i.bottom,z=i.left;if(o.style.position="absolute",o.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(o),w.sizer.appendChild(o),m=="over")S=i.top;else if(m=="above"||m=="near"){var U=Math.max(w.wrapper.clientHeight,this.doc.height),re=Math.max(w.sizer.clientWidth,w.lineSpace.clientWidth);(m=="above"||i.bottom+o.offsetHeight>U)&&i.top>o.offsetHeight?S=i.top-o.offsetHeight:i.bottom+o.offsetHeight<=U&&(S=i.bottom),z+o.offsetWidth>re&&(z=re-o.offsetWidth)}o.style.top=S+"px",o.style.left=o.style.right="",x=="right"?(z=w.sizer.clientWidth-o.offsetWidth,o.style.right="0px"):(x=="left"?z=0:x=="middle"&&(z=(w.sizer.clientWidth-o.offsetWidth)/2),o.style.left=z+"px"),h&&ka(this,{left:z,top:S,right:z+o.offsetWidth,bottom:S+o.offsetHeight})},triggerOnKeyDown:Tn(Au),triggerOnKeyPress:Tn(Fa),triggerOnKeyUp:Ru,triggerOnMouseDown:Tn(Ha),execCommand:function(i){if(qo.hasOwnProperty(i))return qo[i].call(null,this)},triggerElectric:Tn(function(i){Il(this,i)}),findPosH:function(i,o,h,m){var x=1;o<0&&(x=-1,o=-o);for(var w=gt(this.doc,i),S=0;S<o&&(w=Bu(this.doc,w,x,h,m),!w.hitSide);++S);return w},moveH:Tn(function(i,o){var h=this;this.extendSelectionsBy(function(m){return h.display.shift||h.doc.extend||m.empty()?Bu(h.doc,m.head,i,o,h.options.rtlMoveVisually):i<0?m.from():m.to()},tt)}),deleteH:Tn(function(i,o){var h=this.doc.sel,m=this.doc;h.somethingSelected()?m.replaceSelection("",null,"+delete"):io(this,function(x){var w=Bu(m,x.head,i,o,!1);return i<0?{from:w,to:x.head}:{from:x.head,to:w}})}),findPosV:function(i,o,h,m){var x=1,w=m;o<0&&(x=-1,o=-o);for(var S=gt(this.doc,i),z=0;z<o;++z){var U=Cn(this,S,"div");if(w==null?w=U.left:U.left=w,S=Uu(this,U,x,h),S.hitSide)break}return S},moveV:Tn(function(i,o){var h=this,m=this.doc,x=[],w=!this.display.shift&&!m.extend&&m.sel.somethingSelected();if(m.extendSelectionsBy(function(z){if(w)return i<0?z.from():z.to();var U=Cn(h,z.head,"div");z.goalColumn!=null&&(U.left=z.goalColumn),x.push(U.left);var re=Uu(h,U,i,o);return o=="page"&&z==m.sel.primary()&&vs(h,ll(h,re,"div").top-U.top),re},tt),x.length)for(var S=0;S<m.sel.ranges.length;S++)m.sel.ranges[S].goalColumn=x[S]}),findWordAt:function(i){var o=this.doc,h=Je(o,i.line).text,m=i.ch,x=i.ch;if(h){var w=this.getHelper(i,"wordChars");(i.sticky=="before"||x==h.length)&&m?--m:++x;for(var S=h.charAt(m),z=ot(S,w)?function(U){return ot(U,w)}:/\s/.test(S)?function(U){return/\s/.test(U)}:function(U){return!/\s/.test(U)&&!ot(U)};m>0&&z(h.charAt(m-1));)--m;for(;x<h.length&&z(h.charAt(x));)++x}return new At(de(i.line,m),de(i.line,x))},toggleOverwrite:function(i){i!=null&&i==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?G(this.display.cursorDiv,"CodeMirror-overwrite"):Ce(this.display.cursorDiv,"CodeMirror-overwrite"),It(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==R(De(this))},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:Tn(function(i,o){Sa(this,i,o)}),getScrollInfo:function(){var i=this.display.scroller;return{left:i.scrollLeft,top:i.scrollTop,height:i.scrollHeight-oi(this)-this.display.barHeight,width:i.scrollWidth-oi(this)-this.display.barWidth,clientHeight:fs(this),clientWidth:hs(this)}},scrollIntoView:Tn(function(i,o){i==null?(i={from:this.doc.sel.primary().head,to:null},o==null&&(o=this.options.cursorScrollMargin)):typeof i=="number"?i={from:de(i,0),to:null}:i.from==null&&(i={from:i,to:null}),i.to||(i.to=i.from),i.margin=o||0,i.from.line!=null?ap(this,i):Ca(this,i.from,i.to,i.margin)}),setSize:Tn(function(i,o){var h=this,m=function(w){return typeof w=="number"||/^\d+$/.test(String(w))?w+"px":w};i!=null&&(this.display.wrapper.style.width=m(i)),o!=null&&(this.display.wrapper.style.height=m(o)),this.options.lineWrapping&&lu(this);var x=this.display.viewFrom;this.doc.iter(x,this.display.viewTo,function(w){if(w.widgets){for(var S=0;S<w.widgets.length;S++)if(w.widgets[S].noHScroll){$i(h,x,"widget");break}}++x}),this.curOp.forceUpdate=!0,It(this,"refresh",this)}),operation:function(i){return Pn(this,i)},startOperation:function(){return ws(this)},endOperation:function(){return Yr(this)},refresh:Tn(function(){var i=this.display.cachedTextHeight;sr(this),this.curOp.forceUpdate=!0,ko(this),Sa(this,this.doc.scrollLeft,this.doc.scrollTop),or(this.display),(i==null||Math.abs(i-Si(this.display))>.5||this.options.lineWrapping)&&va(this),It(this,"refresh",this)}),swapDoc:Tn(function(i){var o=this.doc;return o.cm=null,this.state.selectingText&&this.state.selectingText(),rn(this,i),ko(this),this.display.input.reset(),Sa(this,i.scrollLeft,i.scrollTop),this.curOp.forceScroll=!0,zn(this,"swapDoc",this,o),o}),phrase:function(i){var o=this.options.phrases;return o&&Object.prototype.hasOwnProperty.call(o,i)?o[i]:i},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},En(e),e.registerHelper=function(i,o,h){s.hasOwnProperty(i)||(s[i]=e[i]={_global:[]}),s[i][o]=h},e.registerGlobalHelper=function(i,o,h,m){e.registerHelper(i,o,m),s[i]._global.push({pred:h,val:m})}}function Bu(e,n,s,i,o){var h=n,m=s,x=Je(e,n.line),w=o&&e.direction=="rtl"?-s:s;function S(){var ze=n.line+w;return ze<e.first||ze>=e.first+e.size?!1:(n=new de(ze,n.ch,n.sticky),x=Je(e,ze))}function z(ze){var Me;if(i=="codepoint"){var Ge=x.text.charCodeAt(n.ch+(s>0?0:-1));if(isNaN(Ge))Me=null;else{var at=s>0?Ge>=55296&&Ge<56320:Ge>=56320&&Ge<57343;Me=new de(n.line,Math.max(0,Math.min(x.text.length,n.ch+s*(at?2:1))),-s)}}else o?Me=ju(e.cm,x,n,s):Me=Uo(x,n,s);if(Me==null)if(!ze&&S())n=Ll(o,e.cm,x,n.line,w);else return!1;else n=Me;return!0}if(i=="char"||i=="codepoint")z();else if(i=="column")z(!0);else if(i=="word"||i=="group")for(var U=null,re=i=="group",ee=e.cm&&e.cm.getHelper(n,"wordChars"),me=!0;!(s<0&&!z(!me));me=!1){var xe=x.text.charAt(n.ch)||`
`,Ae=ot(xe,ee)?"w":re&&xe==`
`?"n":!re||/\s/.test(xe)?null:"p";if(re&&!me&&!Ae&&(Ae="s"),U&&U!=Ae){s<0&&(s=1,z(),n.sticky="after");break}if(Ae&&(U=Ae),s>0&&!z(!me))break}var Ee=Ia(e,n,h,m,!0);return jt(h,Ee)&&(Ee.hitSide=!0),Ee}function Uu(e,n,s,i){var o=e.doc,h=n.left,m;if(i=="page"){var x=Math.min(e.display.wrapper.clientHeight,Ie(e).innerHeight||o(e).documentElement.clientHeight),w=Math.max(x-.5*Si(e.display),3);m=(s>0?n.bottom:n.top)+s*w}else i=="line"&&(m=s>0?n.bottom+3:n.top-3);for(var S;S=cl(e,h,m),!!S.outside;){if(s<0?m<=0:m>=o.height){S.hitSide=!0;break}m+=s*5}return S}var Mt=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new et,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};Mt.prototype.init=function(e){var n=this,s=this,i=s.cm,o=s.div=e.lineDiv;o.contentEditable=!0,Ml(o,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize);function h(x){for(var w=x.target;w;w=w.parentNode){if(w==o)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(w.className))break}return!1}rt(o,"paste",function(x){!h(x)||qt(i,x)||Hu(x,i)||E<=11&&setTimeout(hn(i,function(){return n.updateFromDOM()}),20)}),rt(o,"compositionstart",function(x){n.composing={data:x.data,done:!1}}),rt(o,"compositionupdate",function(x){n.composing||(n.composing={data:x.data,done:!1})}),rt(o,"compositionend",function(x){n.composing&&(x.data!=n.composing.data&&n.readFromDOMSoon(),n.composing.done=!0)}),rt(o,"touchstart",function(){return s.forceCompositionEnd()}),rt(o,"input",function(){n.composing||n.readFromDOMSoon()});function m(x){if(!(!h(x)||qt(i,x))){if(i.somethingSelected())Go({lineWise:!1,text:i.getSelections()}),x.type=="cut"&&i.replaceSelection("",null,"cut");else if(i.options.lineWiseCopyCut){var w=Ol(i);Go({lineWise:!0,text:w.text}),x.type=="cut"&&i.operation(function(){i.setSelections(w.ranges,0,Ct),i.replaceSelection("",null,"cut")})}else return;if(x.clipboardData){x.clipboardData.clearData();var S=Qr.text.join(`
`);if(x.clipboardData.setData("Text",S),x.clipboardData.getData("Text")==S){x.preventDefault();return}}var z=Dl(),U=z.firstChild;Ml(U),i.display.lineSpace.insertBefore(z,i.display.lineSpace.firstChild),U.value=Qr.text.join(`
`);var re=R(qe(o));Z(U),setTimeout(function(){i.display.lineSpace.removeChild(z),re.focus(),re==o&&s.showPrimarySelection()},50)}}rt(o,"copy",m),rt(o,"cut",m)},Mt.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Mt.prototype.prepareSelection=function(){var e=pl(this.cm,!1);return e.focus=R(qe(this.div))==this.div,e},Mt.prototype.showSelection=function(e,n){!e||!this.cm.display.view.length||((e.focus||n)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Mt.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Mt.prototype.showPrimarySelection=function(){var e=this.getSelection(),n=this.cm,s=n.doc.sel.primary(),i=s.from(),o=s.to();if(n.display.viewTo==n.display.viewFrom||i.line>=n.display.viewTo||o.line<n.display.viewFrom){e.removeAllRanges();return}var h=Ba(n,e.anchorNode,e.anchorOffset),m=Ba(n,e.focusNode,e.focusOffset);if(!(h&&!h.bad&&m&&!m.bad&&He(Kr(h,m),i)==0&&He(Sn(h,m),o)==0)){var x=n.display.view,w=i.line>=n.display.viewFrom&&qu(n,i)||{node:x[0].measure.map[2],offset:0},S=o.line<n.display.viewTo&&qu(n,o);if(!S){var z=x[x.length-1].measure,U=z.maps?z.maps[z.maps.length-1]:z.map;S={node:U[U.length-1],offset:U[U.length-2]-U[U.length-3]}}if(!w||!S){e.removeAllRanges();return}var re=e.rangeCount&&e.getRangeAt(0),ee;try{ee=K(w.node,w.offset,S.offset,S.node)}catch{}ee&&(!y&&n.state.focused?(e.collapse(w.node,w.offset),ee.collapsed||(e.removeAllRanges(),e.addRange(ee))):(e.removeAllRanges(),e.addRange(ee)),re&&e.anchorNode==null?e.addRange(re):y&&this.startGracePeriod()),this.rememberSelection()}},Mt.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Mt.prototype.showMultipleSelections=function(e){ye(this.cm.display.cursorDiv,e.cursors),ye(this.cm.display.selectionDiv,e.selection)},Mt.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Mt.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var n=e.getRangeAt(0).commonAncestorContainer;return j(this.div,n)},Mt.prototype.focus=function(){this.cm.options.readOnly!="nocursor"&&((!this.selectionInEditor()||R(qe(this.div))!=this.div)&&this.showSelection(this.prepareSelection(),!0),this.div.focus())},Mt.prototype.blur=function(){this.div.blur()},Mt.prototype.getField=function(){return this.div},Mt.prototype.supportsTouch=function(){return!0},Mt.prototype.receivedFocus=function(){var e=this,n=this;this.selectionInEditor()?setTimeout(function(){return e.pollSelection()},20):Pn(this.cm,function(){return n.cm.curOp.selectionChanged=!0});function s(){n.cm.state.focused&&(n.pollSelection(),n.polling.set(n.cm.options.pollInterval,s))}this.polling.set(this.cm.options.pollInterval,s)},Mt.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Mt.prototype.pollSelection=function(){if(!(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged())){var e=this.getSelection(),n=this.cm;if(F&&A&&this.cm.display.gutterSpecs.length&&Fl(e.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();return}if(!this.composing){this.rememberSelection();var s=Ba(n,e.anchorNode,e.anchorOffset),i=Ba(n,e.focusNode,e.focusOffset);s&&i&&Pn(n,function(){Hn(n.doc,Fn(s,i),Ct),(s.bad||i.bad)&&(n.curOp.selectionChanged=!0)})}}},Mt.prototype.pollContent=function(){this.readDOMTimeout!=null&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e=this.cm,n=e.display,s=e.doc.sel.primary(),i=s.from(),o=s.to();if(i.ch==0&&i.line>e.firstLine()&&(i=de(i.line-1,Je(e.doc,i.line-1).length)),o.ch==Je(e.doc,o.line).text.length&&o.line<e.lastLine()&&(o=de(o.line+1,0)),i.line<n.viewFrom||o.line>n.viewTo-1)return!1;var h,m,x;i.line==n.viewFrom||(h=_i(e,i.line))==0?(m=T(n.view[0].line),x=n.view[0].node):(m=T(n.view[h].line),x=n.view[h-1].node.nextSibling);var w=_i(e,o.line),S,z;if(w==n.view.length-1?(S=n.viewTo-1,z=n.lineDiv.lastChild):(S=T(n.view[w+1].line)-1,z=n.view[w+1].node.previousSibling),!x)return!1;for(var U=e.doc.splitLines(hp(e,x,z,m,S)),re=ii(e.doc,de(m,0),de(S,Je(e.doc,S).text.length));U.length>1&&re.length>1;)if(Qe(U)==Qe(re))U.pop(),re.pop(),S--;else if(U[0]==re[0])U.shift(),re.shift(),m++;else break;for(var ee=0,me=0,xe=U[0],Ae=re[0],Ee=Math.min(xe.length,Ae.length);ee<Ee&&xe.charCodeAt(ee)==Ae.charCodeAt(ee);)++ee;for(var ze=Qe(U),Me=Qe(re),Ge=Math.min(ze.length-(U.length==1?ee:0),Me.length-(re.length==1?ee:0));me<Ge&&ze.charCodeAt(ze.length-me-1)==Me.charCodeAt(Me.length-me-1);)++me;if(U.length==1&&re.length==1&&m==i.line)for(;ee&&ee>i.ch&&ze.charCodeAt(ze.length-me-1)==Me.charCodeAt(Me.length-me-1);)ee--,me++;U[U.length-1]=ze.slice(0,ze.length-me).replace(/^\u200b+/,""),U[0]=U[0].slice(ee).replace(/\u200b+$/,"");var at=de(m,ee),Ve=de(S,re.length?Qe(re).length-me:0);if(U.length>1||U[0]||He(at,Ve))return Qs(e.doc,U,at,Ve,"+input"),!0},Mt.prototype.ensurePolled=function(){this.forceCompositionEnd()},Mt.prototype.reset=function(){this.forceCompositionEnd()},Mt.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Mt.prototype.readFromDOMSoon=function(){var e=this;this.readDOMTimeout==null&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing)if(e.composing.done)e.composing=null;else return;e.updateFromDOM()},80))},Mt.prototype.updateFromDOM=function(){var e=this;(this.cm.isReadOnly()||!this.pollContent())&&Pn(this.cm,function(){return sr(e.cm)})},Mt.prototype.setUneditable=function(e){e.contentEditable="false"},Mt.prototype.onKeyPress=function(e){e.charCode==0||this.composing||(e.preventDefault(),this.cm.isReadOnly()||hn(this.cm,Rl)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0))},Mt.prototype.readOnlyChanged=function(e){this.div.contentEditable=String(e!="nocursor")},Mt.prototype.onContextMenu=function(){},Mt.prototype.resetPosition=function(){},Mt.prototype.needsContentAttribute=!0;function qu(e,n){var s=sl(e,n.line);if(!s||s.hidden)return null;var i=Je(e.doc,n.line),o=bc(s,i,n.line),h=bt(i,e.doc.direction),m="left";if(h){var x=Br(h,n.ch);m=x%2?"right":"left"}var w=ga(o.map,n.ch,m);return w.offset=w.collapse=="right"?w.end:w.start,w}function Fl(e){for(var n=e;n;n=n.parentNode)if(/CodeMirror-gutter-wrapper/.test(n.className))return!0;return!1}function Pr(e,n){return n&&(e.bad=!0),e}function hp(e,n,s,i,o){var h="",m=!1,x=e.doc.lineSeparator(),w=!1;function S(ee){return function(me){return me.id==ee}}function z(){m&&(h+=x,w&&(h+=x),m=w=!1)}function U(ee){ee&&(z(),h+=ee)}function re(ee){if(ee.nodeType==1){var me=ee.getAttribute("cm-text");if(me){U(me);return}var xe=ee.getAttribute("cm-marker"),Ae;if(xe){var Ee=e.findMarks(de(i,0),de(o+1,0),S(+xe));Ee.length&&(Ae=Ee[0].find(0))&&U(ii(e.doc,Ae.from,Ae.to).join(x));return}if(ee.getAttribute("contenteditable")=="false")return;var ze=/^(pre|div|p|li|table|br)$/i.test(ee.nodeName);if(!/^br$/i.test(ee.nodeName)&&ee.textContent.length==0)return;ze&&z();for(var Me=0;Me<ee.childNodes.length;Me++)re(ee.childNodes[Me]);/^(pre|p)$/i.test(ee.nodeName)&&(w=!0),ze&&(m=!0)}else ee.nodeType==3&&U(ee.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;re(n),n!=s;)n=n.nextSibling,w=!1;return h}function Ba(e,n,s){var i;if(n==e.display.lineDiv){if(i=e.display.lineDiv.childNodes[s],!i)return Pr(e.clipPos(de(e.display.viewTo-1)),!0);n=null,s=0}else for(i=n;;i=i.parentNode){if(!i||i==e.display.lineDiv)return null;if(i.parentNode&&i.parentNode==e.display.lineDiv)break}for(var o=0;o<e.display.view.length;o++){var h=e.display.view[o];if(h.node==i)return Ku(h,n,s)}}function Ku(e,n,s){var i=e.text.firstChild,o=!1;if(!n||!j(i,n))return Pr(de(T(e.line),0),!0);if(n==i&&(o=!0,n=i.childNodes[s],s=0,!n)){var h=e.rest?Qe(e.rest):e.line;return Pr(de(T(h),h.text.length),o)}var m=n.nodeType==3?n:null,x=n;for(!m&&n.childNodes.length==1&&n.firstChild.nodeType==3&&(m=n.firstChild,s&&(s=m.nodeValue.length));x.parentNode!=i;)x=x.parentNode;var w=e.measure,S=w.maps;function z(Ae,Ee,ze){for(var Me=-1;Me<(S?S.length:0);Me++)for(var Ge=Me<0?w.map:S[Me],at=0;at<Ge.length;at+=3){var Ve=Ge[at+2];if(Ve==Ae||Ve==Ee){var St=T(Me<0?e.line:e.rest[Me]),Et=Ge[at]+ze;return(ze<0||Ve!=Ae)&&(Et=Ge[at+(ze?1:0)]),de(St,Et)}}}var U=z(m,x,s);if(U)return Pr(U,o);for(var re=x.nextSibling,ee=m?m.nodeValue.length-s:0;re;re=re.nextSibling){if(U=z(re,re.firstChild,0),U)return Pr(de(U.line,U.ch-ee),o);ee+=re.textContent.length}for(var me=x.previousSibling,xe=s;me;me=me.previousSibling){if(U=z(me,me.firstChild,-1),U)return Pr(de(U.line,U.ch+xe),o);xe+=me.textContent.length}}var mn=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new et,this.hasSelection=!1,this.composing=null,this.resetting=!1};mn.prototype.init=function(e){var n=this,s=this,i=this.cm;this.createField(e);var o=this.textarea;e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),H&&(o.style.width="0px"),rt(o,"input",function(){k&&E>=9&&n.hasSelection&&(n.hasSelection=null),s.poll()}),rt(o,"paste",function(m){qt(i,m)||Hu(m,i)||(i.state.pasteIncoming=+new Date,s.fastPoll())});function h(m){if(!qt(i,m)){if(i.somethingSelected())Go({lineWise:!1,text:i.getSelections()});else if(i.options.lineWiseCopyCut){var x=Ol(i);Go({lineWise:!0,text:x.text}),m.type=="cut"?i.setSelections(x.ranges,null,Ct):(s.prevInput="",o.value=x.text.join(`
`),Z(o))}else return;m.type=="cut"&&(i.state.cutIncoming=+new Date)}}rt(o,"cut",h),rt(o,"copy",h),rt(e.scroller,"paste",function(m){if(!(qi(e,m)||qt(i,m))){if(!o.dispatchEvent){i.state.pasteIncoming=+new Date,s.focus();return}var x=new Event("paste");x.clipboardData=m.clipboardData,o.dispatchEvent(x)}}),rt(e.lineSpace,"selectstart",function(m){qi(e,m)||wn(m)}),rt(o,"compositionstart",function(){var m=i.getCursor("from");s.composing&&s.composing.range.clear(),s.composing={start:m,range:i.markText(m,i.getCursor("to"),{className:"CodeMirror-composing"})}}),rt(o,"compositionend",function(){s.composing&&(s.poll(),s.composing.range.clear(),s.composing=null)})},mn.prototype.createField=function(e){this.wrapper=Dl(),this.textarea=this.wrapper.firstChild;var n=this.cm.options;Ml(this.textarea,n.spellcheck,n.autocorrect,n.autocapitalize)},mn.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},mn.prototype.prepareSelection=function(){var e=this.cm,n=e.display,s=e.doc,i=pl(e);if(e.options.moveInputWithCursor){var o=Cn(e,s.sel.primary().head,"div"),h=n.wrapper.getBoundingClientRect(),m=n.lineDiv.getBoundingClientRect();i.teTop=Math.max(0,Math.min(n.wrapper.clientHeight-10,o.top+m.top-h.top)),i.teLeft=Math.max(0,Math.min(n.wrapper.clientWidth-10,o.left+m.left-h.left))}return i},mn.prototype.showSelection=function(e){var n=this.cm,s=n.display;ye(s.cursorDiv,e.cursors),ye(s.selectionDiv,e.selection),e.teTop!=null&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},mn.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var n=this.cm;if(this.resetting=!0,n.somethingSelected()){this.prevInput="";var s=n.getSelection();this.textarea.value=s,n.state.focused&&Z(this.textarea),k&&E>=9&&(this.hasSelection=s)}else e||(this.prevInput=this.textarea.value="",k&&E>=9&&(this.hasSelection=null));this.resetting=!1}},mn.prototype.getField=function(){return this.textarea},mn.prototype.supportsTouch=function(){return!1},mn.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!q||R(qe(this.textarea))!=this.textarea))try{this.textarea.focus()}catch{}},mn.prototype.blur=function(){this.textarea.blur()},mn.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},mn.prototype.receivedFocus=function(){this.slowPoll()},mn.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},mn.prototype.fastPoll=function(){var e=!1,n=this;n.pollingFast=!0;function s(){var i=n.poll();!i&&!e?(e=!0,n.polling.set(60,s)):(n.pollingFast=!1,n.slowPoll())}n.polling.set(20,s)},mn.prototype.poll=function(){var e=this,n=this.cm,s=this.textarea,i=this.prevInput;if(this.contextMenuPending||this.resetting||!n.state.focused||gi(s)&&!i&&!this.composing||n.isReadOnly()||n.options.disableInput||n.state.keySeq)return!1;var o=s.value;if(o==i&&!n.somethingSelected())return!1;if(k&&E>=9&&this.hasSelection===o||Y&&/[\uf700-\uf7ff]/.test(o))return n.display.input.reset(),!1;if(n.doc.sel==n.display.selForContextMenu){var h=o.charCodeAt(0);if(h==8203&&!i&&(i="​"),h==8666)return this.reset(),this.cm.execCommand("undo")}for(var m=0,x=Math.min(i.length,o.length);m<x&&i.charCodeAt(m)==o.charCodeAt(m);)++m;return Pn(n,function(){Rl(n,o.slice(m),i.length-m,null,e.composing?"*compose":null),o.length>1e3||o.indexOf(`
`)>-1?s.value=e.prevInput="":e.prevInput=o,e.composing&&(e.composing.range.clear(),e.composing.range=n.markText(e.composing.start,n.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},mn.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},mn.prototype.onKeyPress=function(){k&&E>=9&&(this.hasSelection=null),this.fastPoll()},mn.prototype.onContextMenu=function(e){var n=this,s=n.cm,i=s.display,o=n.textarea;n.contextMenuPending&&n.contextMenuPending();var h=gs(s,e),m=i.scroller.scrollTop;if(!h||J)return;var x=s.options.resetSelectionOnContextMenu;x&&s.doc.sel.contains(h)==-1&&hn(s,Hn)(s.doc,Fn(h),Ct);var w=o.style.cssText,S=n.wrapper.style.cssText,z=n.wrapper.offsetParent.getBoundingClientRect();n.wrapper.style.cssText="position: static",o.style.cssText=`position: absolute; width: 30px; height: 30px;
      top: `+(e.clientY-z.top-5)+"px; left: "+(e.clientX-z.left-5)+`px;
      z-index: 1000; background: `+(k?"rgba(255, 255, 255, .05)":"transparent")+`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;var U;N&&(U=o.ownerDocument.defaultView.scrollY),i.input.focus(),N&&o.ownerDocument.defaultView.scrollTo(null,U),i.input.reset(),s.somethingSelected()||(o.value=n.prevInput=" "),n.contextMenuPending=ee,i.selForContextMenu=s.doc.sel,clearTimeout(i.detectingSelectAll);function re(){if(o.selectionStart!=null){var xe=s.somethingSelected(),Ae="​"+(xe?o.value:"");o.value="⇚",o.value=Ae,n.prevInput=xe?"":"​",o.selectionStart=1,o.selectionEnd=Ae.length,i.selForContextMenu=s.doc.sel}}function ee(){if(n.contextMenuPending==ee&&(n.contextMenuPending=!1,n.wrapper.style.cssText=S,o.style.cssText=w,k&&E<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=m),o.selectionStart!=null)){(!k||k&&E<9)&&re();var xe=0,Ae=function(){i.selForContextMenu==s.doc.sel&&o.selectionStart==0&&o.selectionEnd>0&&n.prevInput=="​"?hn(s,Qi)(s):xe++<10?i.detectingSelectAll=setTimeout(Ae,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(Ae,200)}}if(k&&E>=9&&re(),Te){pr(e);var me=function(){tn(window,"mouseup",me),setTimeout(ee,20)};rt(window,"mouseup",me)}else setTimeout(ee,50)},mn.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled=e=="nocursor",this.textarea.readOnly=!!e},mn.prototype.setUneditable=function(){},mn.prototype.needsContentAttribute=!1;function Xc(e,n){if(n=n?Be(n):{},n.value=e.value,!n.tabindex&&e.tabIndex&&(n.tabindex=e.tabIndex),!n.placeholder&&e.placeholder&&(n.placeholder=e.placeholder),n.autofocus==null){var s=R(qe(e));n.autofocus=s==e||e.getAttribute("autofocus")!=null&&s==document.body}function i(){e.value=x.getValue()}var o;if(e.form&&(rt(e.form,"submit",i),!n.leaveSubmitMethodAlone)){var h=e.form;o=h.submit;try{var m=h.submit=function(){i(),h.submit=o,h.submit(),h.submit=m}}catch{}}n.finishInit=function(w){w.save=i,w.getTextArea=function(){return e},w.toTextArea=function(){w.toTextArea=isNaN,i(),e.parentNode.removeChild(w.getWrapperElement()),e.style.display="",e.form&&(tn(e.form,"submit",i),!n.leaveSubmitMethodAlone&&typeof e.form.submit=="function"&&(e.form.submit=o))}},e.style.display="none";var x=en(function(w){return e.parentNode.insertBefore(w,e.nextSibling)},n);return x}function Ua(e){e.off=tn,e.on=rt,e.wheelEventPixels=Ss,e.Doc=Ot,e.splitLines=Tr,e.countColumn=Ke,e.findColumn=Ue,e.isWordChar=Ye,e.Pass=Yt,e.signal=It,e.Line=wi,e.changeEnd=Wn,e.scrollbarModel=Ec,e.Pos=de,e.cmpPos=He,e.modes=Mi,e.mimeModes=Or,e.resolveMode=Di,e.getMode=Bt,e.modeExtensions=Mr,e.extendMode=us,e.copyState=Rt,e.startState=ri,e.innerMode=zi,e.commands=qo,e.keyMap=Ai,e.keyName=Tu,e.isModifierKey=_u,e.lookupKey=ro,e.normalizeKeyMap=Mc,e.StringStream=Vt,e.SharedTextMarker=eo,e.TextMarker=pi,e.LineWidget=Li,e.e_preventDefault=wn,e.e_stopPropagation=ni,e.e_stop=pr,e.addClass=G,e.contains=j,e.rmClass=Ce,e.keyNames=Xr}vr(en),zl(en);var ar="iter insert remove copy getEditor constructor".split(" ");for(var Wl in Ot.prototype)Ot.prototype.hasOwnProperty(Wl)&&$e(ar,Wl)<0&&(en.prototype[Wl]=(function(e){return function(){return e.apply(this.doc,arguments)}})(Ot.prototype[Wl]));return En(Ot),en.inputStyles={textarea:mn,contenteditable:Mt},en.defineMode=function(e){!en.defaults.mode&&e!="null"&&(en.defaults.mode=e),Gn.apply(this,arguments)},en.defineMIME=yi,en.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),en.defineMIME("text/plain","null"),en.defineExtension=function(e,n){en.prototype[e]=n},en.defineDocExtension=function(e,n){Ot.prototype[e]=n},en.fromTextArea=Xc,Ua(en),en.version="5.65.21",en}))})(bd)),bd.exports}var Xx=ss();const _f=Qf(Xx);var Cf={exports:{}},Tf;function Qx(){return Tf||(Tf=1,(function(l,c){(function(p){p(ss())})(function(p){function g(E){return new RegExp("^(("+E.join(")|(")+"))\\b")}var y=g(["and","or","not","is"]),b=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],_=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];p.registerHelper("hintWords","python",b.concat(_).concat(["exec","print"]));function C(E){return E.scopes[E.scopes.length-1]}p.defineMode("python",function(E,N){for(var I="error",A=N.delimiters||N.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,V=[N.singleOperators,N.doubleOperators,N.doubleDelimiters,N.tripleDelimiters,N.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],J=0;J<V.length;J++)V[J]||V.splice(J--,1);var W=N.hangingIndent||E.indentUnit,ae=b,D=_;N.extra_keywords!=null&&(ae=ae.concat(N.extra_keywords)),N.extra_builtins!=null&&(D=D.concat(N.extra_builtins));var H=!(N.version&&Number(N.version)<3);if(H){var F=N.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;ae=ae.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),D=D.concat(["ascii","bytes","exec","print"]);var q=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var F=N.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;ae=ae.concat(["exec","print"]),D=D.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var q=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var Y=g(ae),ge=g(D);function le(X,K){var j=X.sol()&&K.lastToken!="\\";if(j&&(K.indent=X.indentation()),j&&C(K).type=="py"){var R=C(K).offset;if(X.eatSpace()){var G=X.indentation();return G>R?se(K):G<R&&oe(X,K)&&X.peek()!="#"&&(K.errorToken=!0),null}else{var M=be(X,K);return R>0&&oe(X,K)&&(M+=" "+I),M}}return be(X,K)}function be(X,K,j){if(X.eatSpace())return null;if(!j&&X.match(/^#.*/))return"comment";if(X.match(/^[0-9\.]/,!1)){var R=!1;if(X.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(R=!0),X.match(/^[\d_]+\.\d*/)&&(R=!0),X.match(/^\.\d+/)&&(R=!0),R)return X.eat(/J/i),"number";var G=!1;if(X.match(/^0x[0-9a-f_]+/i)&&(G=!0),X.match(/^0b[01_]+/i)&&(G=!0),X.match(/^0o[0-7_]+/i)&&(G=!0),X.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(X.eat(/J/i),G=!0),X.match(/^0(?![\dx])/i)&&(G=!0),G)return X.eat(/L/i),"number"}if(X.match(q)){var M=X.current().toLowerCase().indexOf("f")!==-1;return M?(K.tokenize=We(X.current(),K.tokenize),K.tokenize(X,K)):(K.tokenize=Te(X.current(),K.tokenize),K.tokenize(X,K))}for(var Z=0;Z<V.length;Z++)if(X.match(V[Z]))return"operator";return X.match(A)?"punctuation":K.lastToken=="."&&X.match(F)?"property":X.match(Y)||X.match(y)?"keyword":X.match(ge)?"builtin":X.match(/^(self|cls)\b/)?"variable-2":X.match(F)?K.lastToken=="def"||K.lastToken=="class"?"def":"variable":(X.next(),j?null:I)}function We(X,K){for(;"rubf".indexOf(X.charAt(0).toLowerCase())>=0;)X=X.substr(1);var j=X.length==1,R="string";function G(Z){return function(we,De){var qe=be(we,De,!0);return qe=="punctuation"&&(we.current()=="{"?De.tokenize=G(Z+1):we.current()=="}"&&(Z>1?De.tokenize=G(Z-1):De.tokenize=M)),qe}}function M(Z,we){for(;!Z.eol();)if(Z.eatWhile(/[^'"\{\}\\]/),Z.eat("\\")){if(Z.next(),j&&Z.eol())return R}else{if(Z.match(X))return we.tokenize=K,R;if(Z.match("{{"))return R;if(Z.match("{",!1))return we.tokenize=G(0),Z.current()?R:we.tokenize(Z,we);if(Z.match("}}"))return R;if(Z.match("}"))return I;Z.eat(/['"]/)}if(j){if(N.singleLineStringErrors)return I;we.tokenize=K}return R}return M.isString=!0,M}function Te(X,K){for(;"rubf".indexOf(X.charAt(0).toLowerCase())>=0;)X=X.substr(1);var j=X.length==1,R="string";function G(M,Z){for(;!M.eol();)if(M.eatWhile(/[^'"\\]/),M.eat("\\")){if(M.next(),j&&M.eol())return R}else{if(M.match(X))return Z.tokenize=K,R;M.eat(/['"]/)}if(j){if(N.singleLineStringErrors)return I;Z.tokenize=K}return R}return G.isString=!0,G}function se(X){for(;C(X).type!="py";)X.scopes.pop();X.scopes.push({offset:C(X).offset+E.indentUnit,type:"py",align:null})}function Ce(X,K,j){var R=X.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:X.column()+1;K.scopes.push({offset:K.indent+W,type:j,align:R})}function oe(X,K){for(var j=X.indentation();K.scopes.length>1&&C(K).offset>j;){if(C(K).type!="py")return!0;K.scopes.pop()}return C(K).offset!=j}function ye(X,K){X.sol()&&(K.beginningOfLine=!0,K.dedent=!1);var j=K.tokenize(X,K),R=X.current();if(K.beginningOfLine&&R=="@")return X.match(F,!1)?"meta":H?"operator":I;if(/\S/.test(R)&&(K.beginningOfLine=!1),(j=="variable"||j=="builtin")&&K.lastToken=="meta"&&(j="meta"),(R=="pass"||R=="return")&&(K.dedent=!0),R=="lambda"&&(K.lambda=!0),R==":"&&!K.lambda&&C(K).type=="py"&&X.match(/^\s*(?:#|$)/,!1)&&se(K),R.length==1&&!/string|comment/.test(j)){var G="[({".indexOf(R);if(G!=-1&&Ce(X,K,"])}".slice(G,G+1)),G="])}".indexOf(R),G!=-1)if(C(K).type==R)K.indent=K.scopes.pop().offset-W;else return I}return K.dedent&&X.eol()&&C(K).type=="py"&&K.scopes.length>1&&K.scopes.pop(),j}var L={startState:function(X){return{tokenize:le,scopes:[{offset:X||0,type:"py",align:null}],indent:X||0,lastToken:null,lambda:!1,dedent:0}},token:function(X,K){var j=K.errorToken;j&&(K.errorToken=!1);var R=ye(X,K);return R&&R!="comment"&&(K.lastToken=R=="keyword"||R=="punctuation"?X.current():R),R=="punctuation"&&(R=null),X.eol()&&K.lambda&&(K.lambda=!1),j?R+" "+I:R},indent:function(X,K){if(X.tokenize!=le)return X.tokenize.isString?p.Pass:0;var j=C(X),R=j.type==K.charAt(0)||j.type=="py"&&!X.dedent&&/^(else:|elif |except |finally:)/.test(K);return j.align!=null?j.align-(R?1:0):j.offset-(R?W:0)},electricInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,closeBrackets:{triples:`'"`},lineComment:"#",fold:"indent"};return L}),p.defineMIME("text/x-python","python");var k=function(E){return E.split(" ")};p.defineMIME("text/x-cython",{name:"python",extra_keywords:k("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})})})()),Cf.exports}Qx();var jf={exports:{}},Nf;function jm(){return Nf||(Nf=1,(function(l,c){(function(p){p(ss())})(function(p){p.defineMode("javascript",function(g,y){var b=g.indentUnit,_=y.statementIndent,C=y.jsonld,k=y.json||C,E=y.trackScope!==!1,N=y.typescript,I=y.wordCharacters||/[\w$\xa1-\uffff]/,A=(function(){function T(Qt){return{type:Qt,style:"keyword"}}var B=T("keyword a"),fe=T("keyword b"),Ne=T("keyword c"),de=T("keyword d"),He=T("operator"),jt={type:"atom",style:"atom"};return{if:T("if"),while:B,with:B,else:fe,do:fe,try:fe,finally:fe,return:de,break:de,continue:de,new:T("new"),delete:Ne,void:Ne,throw:Ne,debugger:T("debugger"),var:T("var"),const:T("var"),let:T("var"),function:T("function"),catch:T("catch"),for:T("for"),switch:T("switch"),case:T("case"),default:T("default"),in:He,typeof:He,instanceof:He,true:jt,false:jt,null:jt,undefined:jt,NaN:jt,Infinity:jt,this:T("this"),class:T("class"),super:T("atom"),yield:Ne,export:T("export"),import:T("import"),extends:Ne,await:Ne}})(),V=/[+\-*&%=<>!?|~^@]/,J=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function W(T){for(var B=!1,fe,Ne=!1;(fe=T.next())!=null;){if(!B){if(fe=="/"&&!Ne)return;fe=="["?Ne=!0:Ne&&fe=="]"&&(Ne=!1)}B=!B&&fe=="\\"}}var ae,D;function H(T,B,fe){return ae=T,D=fe,B}function F(T,B){var fe=T.next();if(fe=='"'||fe=="'")return B.tokenize=q(fe),B.tokenize(T,B);if(fe=="."&&T.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return H("number","number");if(fe=="."&&T.match(".."))return H("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(fe))return H(fe);if(fe=="="&&T.eat(">"))return H("=>","operator");if(fe=="0"&&T.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return H("number","number");if(/\d/.test(fe))return T.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),H("number","number");if(fe=="/")return T.eat("*")?(B.tokenize=Y,Y(T,B)):T.eat("/")?(T.skipToEnd(),H("comment","comment")):Yn(T,B,1)?(W(T),T.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),H("regexp","string-2")):(T.eat("="),H("operator","operator",T.current()));if(fe=="`")return B.tokenize=ge,ge(T,B);if(fe=="#"&&T.peek()=="!")return T.skipToEnd(),H("meta","meta");if(fe=="#"&&T.eatWhile(I))return H("variable","property");if(fe=="<"&&T.match("!--")||fe=="-"&&T.match("->")&&!/\S/.test(T.string.slice(0,T.start)))return T.skipToEnd(),H("comment","comment");if(V.test(fe))return(fe!=">"||!B.lexical||B.lexical.type!=">")&&(T.eat("=")?(fe=="!"||fe=="=")&&T.eat("="):/[<>*+\-|&?]/.test(fe)&&(T.eat(fe),fe==">"&&T.eat(fe))),fe=="?"&&T.eat(".")?H("."):H("operator","operator",T.current());if(I.test(fe)){T.eatWhile(I);var Ne=T.current();if(B.lastType!="."){if(A.propertyIsEnumerable(Ne)){var de=A[Ne];return H(de.type,de.style,Ne)}if(Ne=="async"&&T.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return H("async","keyword",Ne)}return H("variable","variable",Ne)}}function q(T){return function(B,fe){var Ne=!1,de;if(C&&B.peek()=="@"&&B.match(J))return fe.tokenize=F,H("jsonld-keyword","meta");for(;(de=B.next())!=null&&!(de==T&&!Ne);)Ne=!Ne&&de=="\\";return Ne||(fe.tokenize=F),H("string","string")}}function Y(T,B){for(var fe=!1,Ne;Ne=T.next();){if(Ne=="/"&&fe){B.tokenize=F;break}fe=Ne=="*"}return H("comment","comment")}function ge(T,B){for(var fe=!1,Ne;(Ne=T.next())!=null;){if(!fe&&(Ne=="`"||Ne=="$"&&T.eat("{"))){B.tokenize=F;break}fe=!fe&&Ne=="\\"}return H("quasi","string-2",T.current())}var le="([{}])";function be(T,B){B.fatArrowAt&&(B.fatArrowAt=null);var fe=T.string.indexOf("=>",T.start);if(!(fe<0)){if(N){var Ne=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(T.string.slice(T.start,fe));Ne&&(fe=Ne.index)}for(var de=0,He=!1,jt=fe-1;jt>=0;--jt){var Qt=T.string.charAt(jt),Sn=le.indexOf(Qt);if(Sn>=0&&Sn<3){if(!de){++jt;break}if(--de==0){Qt=="("&&(He=!0);break}}else if(Sn>=3&&Sn<6)++de;else if(I.test(Qt))He=!0;else if(/["'\/`]/.test(Qt))for(;;--jt){if(jt==0)return;var Kr=T.string.charAt(jt-1);if(Kr==Qt&&T.string.charAt(jt-2)!="\\"){jt--;break}}else if(He&&!de){++jt;break}}He&&!de&&(B.fatArrowAt=jt)}}var We={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function Te(T,B,fe,Ne,de,He){this.indented=T,this.column=B,this.type=fe,this.prev=de,this.info=He,Ne!=null&&(this.align=Ne)}function se(T,B){if(!E)return!1;for(var fe=T.localVars;fe;fe=fe.next)if(fe.name==B)return!0;for(var Ne=T.context;Ne;Ne=Ne.prev)for(var fe=Ne.vars;fe;fe=fe.next)if(fe.name==B)return!0}function Ce(T,B,fe,Ne,de){var He=T.cc;for(oe.state=T,oe.stream=de,oe.marked=null,oe.cc=He,oe.style=B,T.lexical.hasOwnProperty("align")||(T.lexical.align=!0);;){var jt=He.length?He.pop():k?$e:Ke;if(jt(fe,Ne)){for(;He.length&&He[He.length-1].lex;)He.pop()();return oe.marked?oe.marked:fe=="variable"&&se(T,Ne)?"variable-2":B}}}var oe={state:null,marked:null,cc:null};function ye(){for(var T=arguments.length-1;T>=0;T--)oe.cc.push(arguments[T])}function L(){return ye.apply(null,arguments),!0}function X(T,B){for(var fe=B;fe;fe=fe.next)if(fe.name==T)return!0;return!1}function K(T){var B=oe.state;if(oe.marked="def",!!E){if(B.context){if(B.lexical.info=="var"&&B.context&&B.context.block){var fe=j(T,B.context);if(fe!=null){B.context=fe;return}}else if(!X(T,B.localVars)){B.localVars=new M(T,B.localVars);return}}y.globalVars&&!X(T,B.globalVars)&&(B.globalVars=new M(T,B.globalVars))}}function j(T,B){if(B)if(B.block){var fe=j(T,B.prev);return fe?fe==B.prev?B:new G(fe,B.vars,!0):null}else return X(T,B.vars)?B:new G(B.prev,new M(T,B.vars),!1);else return null}function R(T){return T=="public"||T=="private"||T=="protected"||T=="abstract"||T=="readonly"}function G(T,B,fe){this.prev=T,this.vars=B,this.block=fe}function M(T,B){this.name=T,this.next=B}var Z=new M("this",new M("arguments",null));function we(){oe.state.context=new G(oe.state.context,oe.state.localVars,!1),oe.state.localVars=Z}function De(){oe.state.context=new G(oe.state.context,oe.state.localVars,!0),oe.state.localVars=null}we.lex=De.lex=!0;function qe(){oe.state.localVars=oe.state.context.vars,oe.state.context=oe.state.context.prev}qe.lex=!0;function Ie(T,B){var fe=function(){var Ne=oe.state,de=Ne.indented;if(Ne.lexical.type=="stat")de=Ne.lexical.indented;else for(var He=Ne.lexical;He&&He.type==")"&&He.align;He=He.prev)de=He.indented;Ne.lexical=new Te(de,oe.stream.column(),T,null,Ne.lexical,B)};return fe.lex=!0,fe}function ke(){var T=oe.state;T.lexical.prev&&(T.lexical.type==")"&&(T.indented=T.lexical.indented),T.lexical=T.lexical.prev)}ke.lex=!0;function Be(T){function B(fe){return fe==T?L():T==";"||fe=="}"||fe==")"||fe=="]"?ye():L(B)}return B}function Ke(T,B){return T=="var"?L(Ie("vardef",B),ni,Be(";"),ke):T=="keyword a"?L(Ie("form"),Yt,Ke,ke):T=="keyword b"?L(Ie("form"),Ke,ke):T=="keyword d"?oe.stream.match(/^\s*$/,!1)?L():L(Ie("stat"),xt,Be(";"),ke):T=="debugger"?L(Be(";")):T=="{"?L(Ie("}"),De,nr,ke,qe):T==";"?L():T=="if"?(oe.state.lexical.info=="else"&&oe.state.cc[oe.state.cc.length-1]==ke&&oe.state.cc.pop()(),L(Ie("form"),Yt,Ke,ke,kn)):T=="function"?L(Tr):T=="for"?L(Ie("form"),De,Cr,Ke,qe,ke):T=="class"||N&&B=="interface"?(oe.marked="keyword",L(Ie("form",T=="class"?T:B),Mi,ke)):T=="variable"?N&&B=="declare"?(oe.marked="keyword",L(Ke)):N&&(B=="module"||B=="enum"||B=="type")&&oe.stream.match(/^\s*\w/,!1)?(oe.marked="keyword",B=="enum"?L(Je):B=="type"?L(as,Be("operator"),bt,Be(";")):L(Ie("form"),On,Be("{"),Ie("}"),nr,ke,ke)):N&&B=="namespace"?(oe.marked="keyword",L(Ie("form"),$e,Ke,ke)):N&&B=="abstract"?(oe.marked="keyword",L(Ke)):L(Ie("stat"),kt):T=="switch"?L(Ie("form"),Yt,Be("{"),Ie("}","switch"),De,nr,ke,ke,qe):T=="case"?L($e,Be(":")):T=="default"?L(Be(":")):T=="catch"?L(Ie("form"),we,et,Ke,ke,qe):T=="export"?L(Ie("stat"),Di,ke):T=="import"?L(Ie("stat"),Mr,ke):T=="async"?L(Ke):B=="@"?L($e,Ke):ye(Ie("stat"),$e,Be(";"),ke)}function et(T){if(T=="(")return L(Mn,Be(")"))}function $e(T,B){return Ct(T,B,!1)}function Ft(T,B){return Ct(T,B,!0)}function Yt(T){return T!="("?ye():L(Ie(")"),xt,Be(")"),ke)}function Ct(T,B,fe){if(oe.state.fatArrowAt==oe.stream.start){var Ne=fe?ut:Qe;if(T=="(")return L(we,Ie(")"),pt(Mn,")"),ke,Be("=>"),Ne,qe);if(T=="variable")return ye(we,On,Be("=>"),Ne,qe)}var de=fe?Ue:tt;return We.hasOwnProperty(T)?L(de):T=="function"?L(Tr,de):T=="class"||N&&B=="interface"?(oe.marked="keyword",L(Ie("form"),ls,ke)):T=="keyword c"||T=="async"?L(fe?Ft:$e):T=="("?L(Ie(")"),xt,Be(")"),ke,de):T=="operator"||T=="spread"?L(fe?Ft:$e):T=="["?L(Ie("]"),Vt,ke,de):T=="{"?Xt(ot,"}",null,de):T=="quasi"?ye(vt,de):T=="new"?L(ie(fe)):L()}function xt(T){return T.match(/[;\}\)\],]/)?ye():ye($e)}function tt(T,B){return T==","?L(xt):Ue(T,B,!1)}function Ue(T,B,fe){var Ne=fe==!1?tt:Ue,de=fe==!1?$e:Ft;if(T=="=>")return L(we,fe?ut:Qe,qe);if(T=="operator")return/\+\+|--/.test(B)||N&&B=="!"?L(Ne):N&&B=="<"&&oe.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?L(Ie(">"),pt(bt,">"),ke,Ne):B=="?"?L($e,Be(":"),de):L(de);if(T=="quasi")return ye(vt,Ne);if(T!=";"){if(T=="(")return Xt(Ft,")","call",Ne);if(T==".")return L(Ye,Ne);if(T=="[")return L(Ie("]"),xt,Be("]"),ke,Ne);if(N&&B=="as")return oe.marked="keyword",L(bt,Ne);if(T=="regexp")return oe.state.lastType=oe.marked="operator",oe.stream.backUp(oe.stream.pos-oe.stream.start-1),L(de)}}function vt(T,B){return T!="quasi"?ye():B.slice(B.length-2)!="${"?L(vt):L(xt,yt)}function yt(T){if(T=="}")return oe.marked="string-2",oe.state.tokenize=ge,L(vt)}function Qe(T){return be(oe.stream,oe.state),ye(T=="{"?Ke:$e)}function ut(T){return be(oe.stream,oe.state),ye(T=="{"?Ke:Ft)}function ie(T){return function(B){return B=="."?L(T?pe:je):B=="variable"&&N?L(gn,T?Ue:tt):ye(T?Ft:$e)}}function je(T,B){if(B=="target")return oe.marked="keyword",L(tt)}function pe(T,B){if(B=="target")return oe.marked="keyword",L(Ue)}function kt(T){return T==":"?L(ke,Ke):ye(tt,Be(";"),ke)}function Ye(T){if(T=="variable")return oe.marked="property",L()}function ot(T,B){if(T=="async")return oe.marked="property",L(ot);if(T=="variable"||oe.style=="keyword"){if(oe.marked="property",B=="get"||B=="set")return L(Ze);var fe;return N&&oe.state.fatArrowAt==oe.stream.start&&(fe=oe.stream.match(/^\s*:\s*/,!1))&&(oe.state.fatArrowAt=oe.stream.pos+fe[0].length),L(mt)}else{if(T=="number"||T=="string")return oe.marked=C?"property":oe.style+" property",L(mt);if(T=="jsonld-keyword")return L(mt);if(N&&R(B))return oe.marked="keyword",L(ot);if(T=="[")return L($e,Sr,Be("]"),mt);if(T=="spread")return L(Ft,mt);if(B=="*")return oe.marked="keyword",L(ot);if(T==":")return ye(mt)}}function Ze(T){return T!="variable"?ye(mt):(oe.marked="property",L(Tr))}function mt(T){if(T==":")return L(Ft);if(T=="(")return ye(Tr)}function pt(T,B,fe){function Ne(de,He){if(fe?fe.indexOf(de)>-1:de==","){var jt=oe.state.lexical;return jt.info=="call"&&(jt.pos=(jt.pos||0)+1),L(function(Qt,Sn){return Qt==B||Sn==B?ye():ye(T)},Ne)}return de==B||He==B?L():fe&&fe.indexOf(";")>-1?ye(T):L(Be(B))}return function(de,He){return de==B||He==B?L():ye(T,Ne)}}function Xt(T,B,fe){for(var Ne=3;Ne<arguments.length;Ne++)oe.cc.push(arguments[Ne]);return L(Ie(B,fe),pt(T,B),ke)}function nr(T){return T=="}"?L():ye(Ke,nr)}function Sr(T,B){if(N){if(T==":")return L(bt);if(B=="?")return L(Sr)}}function Rr(T,B){if(N&&(T==":"||B=="in"))return L(bt)}function Br(T){if(N&&T==":")return oe.stream.match(/^\s*\w+\s+is\b/,!1)?L($e,Ur,bt):L(bt)}function Ur(T,B){if(B=="is")return oe.marked="keyword",L()}function bt(T,B){if(B=="keyof"||B=="typeof"||B=="infer"||B=="readonly")return oe.marked="keyword",L(B=="typeof"?Ft:bt);if(T=="variable"||B=="void")return oe.marked="type",L(bn);if(B=="|"||B=="&")return L(bt);if(T=="string"||T=="number"||T=="atom")return L(bn);if(T=="[")return L(Ie("]"),pt(bt,"]",","),ke,bn);if(T=="{")return L(Ie("}"),rt,ke,bn);if(T=="(")return L(pt(qt,")"),fi,bn);if(T=="<")return L(pt(bt,">"),bt);if(T=="quasi")return ye(tn,bn)}function fi(T){if(T=="=>")return L(bt)}function rt(T){return T.match(/[\}\)\]]/)?L():T==","||T==";"?L(rt):ye(_r,rt)}function _r(T,B){if(T=="variable"||oe.style=="keyword")return oe.marked="property",L(_r);if(B=="?"||T=="number"||T=="string")return L(_r);if(T==":")return L(bt);if(T=="[")return L(Be("variable"),Rr,Be("]"),_r);if(T=="(")return ye(gi,_r);if(!T.match(/[;\}\)\],]/))return L()}function tn(T,B){return T!="quasi"?ye():B.slice(B.length-2)!="${"?L(tn):L(bt,It)}function It(T){if(T=="}")return oe.marked="string-2",oe.state.tokenize=ge,L(tn)}function qt(T,B){return T=="variable"&&oe.stream.match(/^\s*[?:]/,!1)||B=="?"?L(qt):T==":"?L(bt):T=="spread"?L(qt):ye(bt)}function bn(T,B){if(B=="<")return L(Ie(">"),pt(bt,">"),ke,bn);if(B=="|"||T=="."||B=="&")return L(bt);if(T=="[")return L(bt,Be("]"),bn);if(B=="extends"||B=="implements")return oe.marked="keyword",L(bt);if(B=="?")return L(bt,Be(":"),bt)}function gn(T,B){if(B=="<")return L(Ie(">"),pt(bt,">"),ke,bn)}function En(){return ye(bt,wn)}function wn(T,B){if(B=="=")return L(bt)}function ni(T,B){return B=="enum"?(oe.marked="keyword",L(Je)):ye(On,Sr,Ln,os)}function On(T,B){if(N&&R(B))return oe.marked="keyword",L(On);if(T=="variable")return K(B),L();if(T=="spread")return L(On);if(T=="[")return Xt(mi,"]");if(T=="{")return Xt(pr,"}")}function pr(T,B){return T=="variable"&&!oe.stream.match(/^\s*:/,!1)?(K(B),L(Ln)):(T=="variable"&&(oe.marked="property"),T=="spread"?L(On):T=="}"?ye():T=="["?L($e,Be("]"),Be(":"),pr):L(Be(":"),On,Ln))}function mi(){return ye(On,Ln)}function Ln(T,B){if(B=="=")return L(Ft)}function os(T){if(T==",")return L(ni)}function kn(T,B){if(T=="keyword b"&&B=="else")return L(Ie("form","else"),Ke,ke)}function Cr(T,B){if(B=="await")return L(Cr);if(T=="(")return L(Ie(")"),qr,ke)}function qr(T){return T=="var"?L(ni,Ir):T=="variable"?L(Ir):ye(Ir)}function Ir(T,B){return T==")"?L():T==";"?L(Ir):B=="in"||B=="of"?(oe.marked="keyword",L($e,Ir)):ye($e,Ir)}function Tr(T,B){if(B=="*")return oe.marked="keyword",L(Tr);if(T=="variable")return K(B),L(Tr);if(T=="(")return L(we,Ie(")"),pt(Mn,")"),ke,Br,Ke,qe);if(N&&B=="<")return L(Ie(">"),pt(En,">"),ke,Tr)}function gi(T,B){if(B=="*")return oe.marked="keyword",L(gi);if(T=="variable")return K(B),L(gi);if(T=="(")return L(we,Ie(")"),pt(Mn,")"),ke,Br,qe);if(N&&B=="<")return L(Ie(">"),pt(En,">"),ke,gi)}function as(T,B){if(T=="keyword"||T=="variable")return oe.marked="type",L(as);if(B=="<")return L(Ie(">"),pt(En,">"),ke)}function Mn(T,B){return B=="@"&&L($e,Mn),T=="spread"?L(Mn):N&&R(B)?(oe.marked="keyword",L(Mn)):N&&T=="this"?L(Sr,Ln):ye(On,Sr,Ln)}function ls(T,B){return T=="variable"?Mi(T,B):Or(T,B)}function Mi(T,B){if(T=="variable")return K(B),L(Or)}function Or(T,B){if(B=="<")return L(Ie(">"),pt(En,">"),ke,Or);if(B=="extends"||B=="implements"||N&&T==",")return B=="implements"&&(oe.marked="keyword"),L(N?bt:$e,Or);if(T=="{")return L(Ie("}"),Gn,ke)}function Gn(T,B){if(T=="async"||T=="variable"&&(B=="static"||B=="get"||B=="set"||N&&R(B))&&oe.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return oe.marked="keyword",L(Gn);if(T=="variable"||oe.style=="keyword")return oe.marked="property",L(yi,Gn);if(T=="number"||T=="string")return L(yi,Gn);if(T=="[")return L($e,Sr,Be("]"),yi,Gn);if(B=="*")return oe.marked="keyword",L(Gn);if(N&&T=="(")return ye(gi,Gn);if(T==";"||T==",")return L(Gn);if(T=="}")return L();if(B=="@")return L($e,Gn)}function yi(T,B){if(B=="!"||B=="?")return L(yi);if(T==":")return L(bt,Ln);if(B=="=")return L(Ft);var fe=oe.state.lexical.prev,Ne=fe&&fe.info=="interface";return ye(Ne?gi:Tr)}function Di(T,B){return B=="*"?(oe.marked="keyword",L(ri,Be(";"))):B=="default"?(oe.marked="keyword",L($e,Be(";"))):T=="{"?L(pt(Bt,"}"),ri,Be(";")):ye(Ke)}function Bt(T,B){if(B=="as")return oe.marked="keyword",L(Be("variable"));if(T=="variable")return ye(Ft,Bt)}function Mr(T){return T=="string"?L():T=="("?ye($e):T=="."?ye(tt):ye(us,Rt,ri)}function us(T,B){return T=="{"?Xt(us,"}"):(T=="variable"&&K(B),B=="*"&&(oe.marked="keyword"),L(zi))}function Rt(T){if(T==",")return L(us,Rt)}function zi(T,B){if(B=="as")return oe.marked="keyword",L(us)}function ri(T,B){if(B=="from")return oe.marked="keyword",L($e)}function Vt(T){return T=="]"?L():ye(pt(Ft,"]"))}function Je(){return ye(Ie("form"),On,Be("{"),Ie("}"),pt(ii,"}"),ke,ke)}function ii(){return ye(On,Ln)}function cs(T,B){return T.lastType=="operator"||T.lastType==","||V.test(B.charAt(0))||/[,.]/.test(B.charAt(0))}function Yn(T,B,fe){return B.tokenize==F&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(B.lastType)||B.lastType=="quasi"&&/\{\s*$/.test(T.string.slice(0,T.pos-(fe||0)))}return{startState:function(T){var B={tokenize:F,lastType:"sof",cc:[],lexical:new Te((T||0)-b,0,"block",!1),localVars:y.localVars,context:y.localVars&&new G(null,null,!1),indented:T||0};return y.globalVars&&typeof y.globalVars=="object"&&(B.globalVars=y.globalVars),B},token:function(T,B){if(T.sol()&&(B.lexical.hasOwnProperty("align")||(B.lexical.align=!1),B.indented=T.indentation(),be(T,B)),B.tokenize!=Y&&T.eatSpace())return null;var fe=B.tokenize(T,B);return ae=="comment"?fe:(B.lastType=ae=="operator"&&(D=="++"||D=="--")?"incdec":ae,Ce(B,fe,ae,D,T))},indent:function(T,B){if(T.tokenize==Y||T.tokenize==ge)return p.Pass;if(T.tokenize!=F)return 0;var fe=B&&B.charAt(0),Ne=T.lexical,de;if(!/^\s*else\b/.test(B))for(var He=T.cc.length-1;He>=0;--He){var jt=T.cc[He];if(jt==ke)Ne=Ne.prev;else if(jt!=kn&&jt!=qe)break}for(;(Ne.type=="stat"||Ne.type=="form")&&(fe=="}"||(de=T.cc[T.cc.length-1])&&(de==tt||de==Ue)&&!/^[,\.=+\-*:?[\(]/.test(B));)Ne=Ne.prev;_&&Ne.type==")"&&Ne.prev.type=="stat"&&(Ne=Ne.prev);var Qt=Ne.type,Sn=fe==Qt;return Qt=="vardef"?Ne.indented+(T.lastType=="operator"||T.lastType==","?Ne.info.length+1:0):Qt=="form"&&fe=="{"?Ne.indented:Qt=="form"?Ne.indented+b:Qt=="stat"?Ne.indented+(cs(T,B)?_||b:0):Ne.info=="switch"&&!Sn&&y.doubleIndentSwitch!=!1?Ne.indented+(/^(?:case|default)\b/.test(B)?b:2*b):Ne.align?Ne.column+(Sn?0:1):Ne.indented+(Sn?0:b)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:k?null:"/*",blockCommentEnd:k?null:"*/",blockCommentContinue:k?null:" * ",lineComment:k?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:k?"json":"javascript",jsonldMode:C,jsonMode:k,expressionAllowed:Yn,skipExpression:function(T){Ce(T,"atom","atom","true",new p.StringStream("",2,null))}}}),p.registerHelper("wordChars","javascript",/[\w$]/),p.defineMIME("text/javascript","javascript"),p.defineMIME("text/ecmascript","javascript"),p.defineMIME("application/javascript","javascript"),p.defineMIME("application/x-javascript","javascript"),p.defineMIME("application/ecmascript","javascript"),p.defineMIME("application/json",{name:"javascript",json:!0}),p.defineMIME("application/x-json",{name:"javascript",json:!0}),p.defineMIME("application/manifest+json",{name:"javascript",json:!0}),p.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),p.defineMIME("text/typescript",{name:"javascript",typescript:!0}),p.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})()),jf.exports}jm();var Ef={exports:{}},Lf;function Zx(){return Lf||(Lf=1,(function(l,c){(function(p){p(ss())})(function(p){function g(j,R,G,M,Z,we){this.indented=j,this.column=R,this.type=G,this.info=M,this.align=Z,this.prev=we}function y(j,R,G,M){var Z=j.indented;return j.context&&j.context.type=="statement"&&G!="statement"&&(Z=j.context.indented),j.context=new g(Z,R,G,M,null,j.context)}function b(j){var R=j.context.type;return(R==")"||R=="]"||R=="}")&&(j.indented=j.context.indented),j.context=j.context.prev}function _(j,R,G){if(R.prevToken=="variable"||R.prevToken=="type"||/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(j.string.slice(0,G))||R.typeAtEndOfLine&&j.column()==j.indentation())return!0}function C(j){for(;;){if(!j||j.type=="top")return!0;if(j.type=="}"&&j.prev.info!="namespace")return!1;j=j.prev}}p.defineMode("clike",function(j,R){var G=j.indentUnit,M=R.statementIndentUnit||G,Z=R.dontAlignCalls,we=R.keywords||{},De=R.types||{},qe=R.builtin||{},Ie=R.blockKeywords||{},ke=R.defKeywords||{},Be=R.atoms||{},Ke=R.hooks||{},et=R.multiLineStrings,$e=R.indentStatements!==!1,Ft=R.indentSwitch!==!1,Yt=R.namespaceSeparator,Ct=R.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,xt=R.numberStart||/[\d\.]/,tt=R.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,Ue=R.isOperatorChar||/[+\-*&%=<>!?|\/]/,vt=R.isIdentifierChar||/[\w\$_\xa1-\uffff]/,yt=R.isReservedIdentifier||!1,Qe,ut;function ie(Ye,ot){var Ze=Ye.next();if(Ke[Ze]){var mt=Ke[Ze](Ye,ot);if(mt!==!1)return mt}if(Ze=='"'||Ze=="'")return ot.tokenize=je(Ze),ot.tokenize(Ye,ot);if(xt.test(Ze)){if(Ye.backUp(1),Ye.match(tt))return"number";Ye.next()}if(Ct.test(Ze))return Qe=Ze,null;if(Ze=="/"){if(Ye.eat("*"))return ot.tokenize=pe,pe(Ye,ot);if(Ye.eat("/"))return Ye.skipToEnd(),"comment"}if(Ue.test(Ze)){for(;!Ye.match(/^\/[\/*]/,!1)&&Ye.eat(Ue););return"operator"}if(Ye.eatWhile(vt),Yt)for(;Ye.match(Yt);)Ye.eatWhile(vt);var pt=Ye.current();return E(we,pt)?(E(Ie,pt)&&(Qe="newstatement"),E(ke,pt)&&(ut=!0),"keyword"):E(De,pt)?"type":E(qe,pt)||yt&&yt(pt)?(E(Ie,pt)&&(Qe="newstatement"),"builtin"):E(Be,pt)?"atom":"variable"}function je(Ye){return function(ot,Ze){for(var mt=!1,pt,Xt=!1;(pt=ot.next())!=null;){if(pt==Ye&&!mt){Xt=!0;break}mt=!mt&&pt=="\\"}return(Xt||!(mt||et))&&(Ze.tokenize=null),"string"}}function pe(Ye,ot){for(var Ze=!1,mt;mt=Ye.next();){if(mt=="/"&&Ze){ot.tokenize=null;break}Ze=mt=="*"}return"comment"}function kt(Ye,ot){R.typeFirstDefinitions&&Ye.eol()&&C(ot.context)&&(ot.typeAtEndOfLine=_(Ye,ot,Ye.pos))}return{startState:function(Ye){return{tokenize:null,context:new g((Ye||0)-G,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(Ye,ot){var Ze=ot.context;if(Ye.sol()&&(Ze.align==null&&(Ze.align=!1),ot.indented=Ye.indentation(),ot.startOfLine=!0),Ye.eatSpace())return kt(Ye,ot),null;Qe=ut=null;var mt=(ot.tokenize||ie)(Ye,ot);if(mt=="comment"||mt=="meta")return mt;if(Ze.align==null&&(Ze.align=!0),Qe==";"||Qe==":"||Qe==","&&Ye.match(/^\s*(?:\/\/.*)?$/,!1))for(;ot.context.type=="statement";)b(ot);else if(Qe=="{")y(ot,Ye.column(),"}");else if(Qe=="[")y(ot,Ye.column(),"]");else if(Qe=="(")y(ot,Ye.column(),")");else if(Qe=="}"){for(;Ze.type=="statement";)Ze=b(ot);for(Ze.type=="}"&&(Ze=b(ot));Ze.type=="statement";)Ze=b(ot)}else Qe==Ze.type?b(ot):$e&&((Ze.type=="}"||Ze.type=="top")&&Qe!=";"||Ze.type=="statement"&&Qe=="newstatement")&&y(ot,Ye.column(),"statement",Ye.current());if(mt=="variable"&&(ot.prevToken=="def"||R.typeFirstDefinitions&&_(Ye,ot,Ye.start)&&C(ot.context)&&Ye.match(/^\s*\(/,!1))&&(mt="def"),Ke.token){var pt=Ke.token(Ye,ot,mt);pt!==void 0&&(mt=pt)}return mt=="def"&&R.styleDefs===!1&&(mt="variable"),ot.startOfLine=!1,ot.prevToken=ut?"def":mt||Qe,kt(Ye,ot),mt},indent:function(Ye,ot){if(Ye.tokenize!=ie&&Ye.tokenize!=null||Ye.typeAtEndOfLine&&C(Ye.context))return p.Pass;var Ze=Ye.context,mt=ot&&ot.charAt(0),pt=mt==Ze.type;if(Ze.type=="statement"&&mt=="}"&&(Ze=Ze.prev),R.dontIndentStatements)for(;Ze.type=="statement"&&R.dontIndentStatements.test(Ze.info);)Ze=Ze.prev;if(Ke.indent){var Xt=Ke.indent(Ye,Ze,ot,G);if(typeof Xt=="number")return Xt}var nr=Ze.prev&&Ze.prev.info=="switch";if(R.allmanIndentation&&/[{(]/.test(mt)){for(;Ze.type!="top"&&Ze.type!="}";)Ze=Ze.prev;return Ze.indented}return Ze.type=="statement"?Ze.indented+(mt=="{"?0:M):Ze.align&&(!Z||Ze.type!=")")?Ze.column+(pt?0:1):Ze.type==")"&&!pt?Ze.indented+M:Ze.indented+(pt?0:G)+(!pt&&nr&&!/^(?:case|default)\b/.test(ot)?G:0)},electricInput:Ft?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});function k(j){for(var R={},G=j.split(" "),M=0;M<G.length;++M)R[G[M]]=!0;return R}function E(j,R){return typeof j=="function"?j(R):j.propertyIsEnumerable(R)}var N="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",I="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",A="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",V="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",J=k("int long char short double float unsigned signed void bool"),W=k("SEL instancetype id Class Protocol BOOL");function ae(j){return E(J,j)||/.+_t$/.test(j)}function D(j){return ae(j)||E(W,j)}var H="case do else for if switch while struct enum union",F="struct enum union";function q(j,R){if(!R.startOfLine)return!1;for(var G,M=null;G=j.peek();){if(G=="\\"&&j.match(/^.$/)){M=q;break}else if(G=="/"&&j.match(/^\/[\/\*]/,!1))break;j.next()}return R.tokenize=M,"meta"}function Y(j,R){return R.prevToken=="type"?"type":!1}function ge(j){return!j||j.length<2||j[0]!="_"?!1:j[1]=="_"||j[1]!==j[1].toLowerCase()}function le(j){return j.eatWhile(/[\w\.']/),"number"}function be(j,R){if(j.backUp(1),j.match(/^(?:R|u8R|uR|UR|LR)/)){var G=j.match(/^"([^\s\\()]{0,16})\(/);return G?(R.cpp11RawStringDelim=G[1],R.tokenize=se,se(j,R)):!1}return j.match(/^(?:u8|u|U|L)/)?j.match(/^["']/,!1)?"string":!1:(j.next(),!1)}function We(j){var R=/(\w+)::~?(\w+)$/.exec(j);return R&&R[1]==R[2]}function Te(j,R){for(var G;(G=j.next())!=null;)if(G=='"'&&!j.eat('"')){R.tokenize=null;break}return"string"}function se(j,R){var G=R.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),M=j.match(new RegExp(".*?\\)"+G+'"'));return M?R.tokenize=null:j.skipToEnd(),"string"}function Ce(j,R){typeof j=="string"&&(j=[j]);var G=[];function M(we){if(we)for(var De in we)we.hasOwnProperty(De)&&G.push(De)}M(R.keywords),M(R.types),M(R.builtin),M(R.atoms),G.length&&(R.helperType=j[0],p.registerHelper("hintWords",j[0],G));for(var Z=0;Z<j.length;++Z)p.defineMIME(j[Z],R)}Ce(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:k(N),types:ae,blockKeywords:k(H),defKeywords:k(F),typeFirstDefinitions:!0,atoms:k("NULL true false"),isReservedIdentifier:ge,hooks:{"#":q,"*":Y},modeProps:{fold:["brace","include"]}}),Ce(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:k(N+" "+I),types:ae,blockKeywords:k(H+" class try catch"),defKeywords:k(F+" class namespace"),typeFirstDefinitions:!0,atoms:k("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:ge,hooks:{"#":q,"*":Y,u:be,U:be,L:be,R:be,0:le,1:le,2:le,3:le,4:le,5:le,6:le,7:le,8:le,9:le,token:function(j,R,G){if(G=="variable"&&j.peek()=="("&&(R.prevToken==";"||R.prevToken==null||R.prevToken=="}")&&We(j.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ce("text/x-java",{name:"clike",keywords:k("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:k("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:k("catch class do else finally for if switch try while"),defKeywords:k("class interface enum @interface"),typeFirstDefinitions:!0,atoms:k("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(j){return j.match("interface",!1)?!1:(j.eatWhile(/[\w\$_]/),"meta")},'"':function(j,R){return j.match(/""$/)?(R.tokenize=oe,R.tokenize(j,R)):!1}},modeProps:{fold:["brace","import"]}}),Ce("text/x-csharp",{name:"clike",keywords:k("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:k("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:k("catch class do else finally for foreach if struct switch try while"),defKeywords:k("class interface namespace record struct var"),typeFirstDefinitions:!0,atoms:k("true false null"),hooks:{"@":function(j,R){return j.eat('"')?(R.tokenize=Te,Te(j,R)):(j.eatWhile(/[\w\$_]/),"meta")}}});function oe(j,R){for(var G=!1;!j.eol();){if(!G&&j.match('"""')){R.tokenize=null;break}G=j.next()=="\\"&&!G}return"string"}function ye(j){return function(R,G){for(var M;M=R.next();)if(M=="*"&&R.eat("/"))if(j==1){G.tokenize=null;break}else return G.tokenize=ye(j-1),G.tokenize(R,G);else if(M=="/"&&R.eat("*"))return G.tokenize=ye(j+1),G.tokenize(R,G);return"comment"}}Ce("text/x-scala",{name:"clike",keywords:k("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:k("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:k("catch class enum do else finally for forSome if match switch try while"),defKeywords:k("class enum def object package trait type val var"),atoms:k("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(j){return j.eatWhile(/[\w\$_]/),"meta"},'"':function(j,R){return j.match('""')?(R.tokenize=oe,R.tokenize(j,R)):!1},"'":function(j){return j.match(/^(\\[^'\s]+|[^\\'])'/)?"string-2":(j.eatWhile(/[\w\$_\xa1-\uffff]/),"atom")},"=":function(j,R){var G=R.context;return G.type=="}"&&G.align&&j.eat(">")?(R.context=new g(G.indented,G.column,G.type,G.info,null,G.prev),"operator"):!1},"/":function(j,R){return j.eat("*")?(R.tokenize=ye(1),R.tokenize(j,R)):!1}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}});function L(j){return function(R,G){for(var M=!1,Z,we=!1;!R.eol();){if(!j&&!M&&R.match('"')){we=!0;break}if(j&&R.match('"""')){we=!0;break}Z=R.next(),!M&&Z=="$"&&R.match("{")&&R.skipTo("}"),M=!M&&Z=="\\"&&!j}return(we||!j)&&(G.tokenize=null),"string"}}Ce("text/x-kotlin",{name:"clike",keywords:k("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"),types:k("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),indentSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(ul?|l|f)?/i,blockKeywords:k("catch class do else finally for if where try while enum"),defKeywords:k("class val var object interface fun"),atoms:k("true false null this"),hooks:{"@":function(j){return j.eatWhile(/[\w\$_]/),"meta"},"*":function(j,R){return R.prevToken=="."?"variable":"operator"},'"':function(j,R){return R.tokenize=L(j.match('""')),R.tokenize(j,R)},"/":function(j,R){return j.eat("*")?(R.tokenize=ye(1),R.tokenize(j,R)):!1},indent:function(j,R,G,M){var Z=G&&G.charAt(0);if((j.prevToken=="}"||j.prevToken==")")&&G=="")return j.indented;if(j.prevToken=="operator"&&G!="}"&&j.context.type!="}"||j.prevToken=="variable"&&Z=="."||(j.prevToken=="}"||j.prevToken==")")&&Z==".")return M*2+R.indented;if(R.align&&R.type=="}")return R.indented+(j.context.type==(G||"").charAt(0)?0:M)}},modeProps:{closeBrackets:{triples:'"'}}}),Ce(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:k("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:k("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:k("for while do if else struct"),builtin:k("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:k("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":q},modeProps:{fold:["brace","include"]}}),Ce("text/x-nesc",{name:"clike",keywords:k(N+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:ae,blockKeywords:k(H),atoms:k("null true false"),hooks:{"#":q},modeProps:{fold:["brace","include"]}}),Ce("text/x-objectivec",{name:"clike",keywords:k(N+" "+A),types:D,builtin:k(V),blockKeywords:k(H+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:k(F+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:k("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ge,hooks:{"#":q,"*":Y},modeProps:{fold:["brace","include"]}}),Ce("text/x-objectivec++",{name:"clike",keywords:k(N+" "+A+" "+I),types:D,builtin:k(V),blockKeywords:k(H+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:k(F+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:k("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ge,hooks:{"#":q,"*":Y,u:be,U:be,L:be,R:be,0:le,1:le,2:le,3:le,4:le,5:le,6:le,7:le,8:le,9:le,token:function(j,R,G){if(G=="variable"&&j.peek()=="("&&(R.prevToken==";"||R.prevToken==null||R.prevToken=="}")&&We(j.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ce("text/x-squirrel",{name:"clike",keywords:k("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:ae,blockKeywords:k("case catch class else for foreach if switch try while"),defKeywords:k("function local class"),typeFirstDefinitions:!0,atoms:k("true false null"),hooks:{"#":q},modeProps:{fold:["brace","include"]}});var X=null;function K(j){return function(R,G){for(var M=!1,Z,we=!1;!R.eol();){if(!M&&R.match('"')&&(j=="single"||R.match('""'))){we=!0;break}if(!M&&R.match("``")){X=K(j),we=!0;break}Z=R.next(),M=j=="single"&&!M&&Z=="\\"}return we&&(G.tokenize=null),"string"}}Ce("text/x-ceylon",{name:"clike",keywords:k("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(j){var R=j.charAt(0);return R===R.toUpperCase()&&R!==R.toLowerCase()},blockKeywords:k("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:k("class dynamic function interface module object package value"),builtin:k("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:k("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(j){return j.eatWhile(/[\w\$_]/),"meta"},'"':function(j,R){return R.tokenize=K(j.match('""')?"triple":"single"),R.tokenize(j,R)},"`":function(j,R){return!X||!j.match("`")?!1:(R.tokenize=X,X=null,R.tokenize(j,R))},"'":function(j){return j.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(j,R,G){if((G=="variable"||G=="type")&&R.prevToken==".")return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})})})()),Ef.exports}Zx();var Pf={exports:{}},Af;function Nm(){return Af||(Af=1,(function(l,c){(function(p){p(ss())})(function(p){var g={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},y={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};p.defineMode("xml",function(b,_){var C=b.indentUnit,k={},E=_.htmlMode?g:y;for(var N in E)k[N]=E[N];for(var N in _)k[N]=_[N];var I,A;function V(L,X){function K(G){return X.tokenize=G,G(L,X)}var j=L.next();if(j=="<")return L.eat("!")?L.eat("[")?L.match("CDATA[")?K(ae("atom","]]>")):null:L.match("--")?K(ae("comment","-->")):L.match("DOCTYPE",!0,!0)?(L.eatWhile(/[\w\._\-]/),K(D(1))):null:L.eat("?")?(L.eatWhile(/[\w\._\-]/),X.tokenize=ae("meta","?>"),"meta"):(I=L.eat("/")?"closeTag":"openTag",X.tokenize=J,"tag bracket");if(j=="&"){var R;return L.eat("#")?L.eat("x")?R=L.eatWhile(/[a-fA-F\d]/)&&L.eat(";"):R=L.eatWhile(/[\d]/)&&L.eat(";"):R=L.eatWhile(/[\w\.\-:]/)&&L.eat(";"),R?"atom":"error"}else return L.eatWhile(/[^&<]/),null}V.isInText=!0;function J(L,X){var K=L.next();if(K==">"||K=="/"&&L.eat(">"))return X.tokenize=V,I=K==">"?"endTag":"selfcloseTag","tag bracket";if(K=="=")return I="equals",null;if(K=="<"){X.tokenize=V,X.state=ge,X.tagName=X.tagStart=null;var j=X.tokenize(L,X);return j?j+" tag error":"tag error"}else return/[\'\"]/.test(K)?(X.tokenize=W(K),X.stringStartCol=L.column(),X.tokenize(L,X)):(L.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function W(L){var X=function(K,j){for(;!K.eol();)if(K.next()==L){j.tokenize=J;break}return"string"};return X.isInAttribute=!0,X}function ae(L,X){return function(K,j){for(;!K.eol();){if(K.match(X)){j.tokenize=V;break}K.next()}return L}}function D(L){return function(X,K){for(var j;(j=X.next())!=null;){if(j=="<")return K.tokenize=D(L+1),K.tokenize(X,K);if(j==">")if(L==1){K.tokenize=V;break}else return K.tokenize=D(L-1),K.tokenize(X,K)}return"meta"}}function H(L){return L&&L.toLowerCase()}function F(L,X,K){this.prev=L.context,this.tagName=X||"",this.indent=L.indented,this.startOfLine=K,(k.doNotIndent.hasOwnProperty(X)||L.context&&L.context.noIndent)&&(this.noIndent=!0)}function q(L){L.context&&(L.context=L.context.prev)}function Y(L,X){for(var K;;){if(!L.context||(K=L.context.tagName,!k.contextGrabbers.hasOwnProperty(H(K))||!k.contextGrabbers[H(K)].hasOwnProperty(H(X))))return;q(L)}}function ge(L,X,K){return L=="openTag"?(K.tagStart=X.column(),le):L=="closeTag"?be:ge}function le(L,X,K){return L=="word"?(K.tagName=X.current(),A="tag",se):k.allowMissingTagName&&L=="endTag"?(A="tag bracket",se(L,X,K)):(A="error",le)}function be(L,X,K){if(L=="word"){var j=X.current();return K.context&&K.context.tagName!=j&&k.implicitlyClosed.hasOwnProperty(H(K.context.tagName))&&q(K),K.context&&K.context.tagName==j||k.matchClosing===!1?(A="tag",We):(A="tag error",Te)}else return k.allowMissingTagName&&L=="endTag"?(A="tag bracket",We(L,X,K)):(A="error",Te)}function We(L,X,K){return L!="endTag"?(A="error",We):(q(K),ge)}function Te(L,X,K){return A="error",We(L,X,K)}function se(L,X,K){if(L=="word")return A="attribute",Ce;if(L=="endTag"||L=="selfcloseTag"){var j=K.tagName,R=K.tagStart;return K.tagName=K.tagStart=null,L=="selfcloseTag"||k.autoSelfClosers.hasOwnProperty(H(j))?Y(K,j):(Y(K,j),K.context=new F(K,j,R==K.indented)),ge}return A="error",se}function Ce(L,X,K){return L=="equals"?oe:(k.allowMissing||(A="error"),se(L,X,K))}function oe(L,X,K){return L=="string"?ye:L=="word"&&k.allowUnquoted?(A="string",se):(A="error",se(L,X,K))}function ye(L,X,K){return L=="string"?ye:se(L,X,K)}return{startState:function(L){var X={tokenize:V,state:ge,indented:L||0,tagName:null,tagStart:null,context:null};return L!=null&&(X.baseIndent=L),X},token:function(L,X){if(!X.tagName&&L.sol()&&(X.indented=L.indentation()),L.eatSpace())return null;I=null;var K=X.tokenize(L,X);return(K||I)&&K!="comment"&&(A=null,X.state=X.state(I||K,L,X),A&&(K=A=="error"?K+" error":A)),K},indent:function(L,X,K){var j=L.context;if(L.tokenize.isInAttribute)return L.tagStart==L.indented?L.stringStartCol+1:L.indented+C;if(j&&j.noIndent)return p.Pass;if(L.tokenize!=J&&L.tokenize!=V)return K?K.match(/^(\s*)/)[0].length:0;if(L.tagName)return k.multilineTagIndentPastTag!==!1?L.tagStart+L.tagName.length+2:L.tagStart+C*(k.multilineTagIndentFactor||1);if(k.alignCDATA&&/<!\[CDATA\[/.test(X))return 0;var R=X&&/^<(\/)?([\w_:\.-]*)/.exec(X);if(R&&R[1])for(;j;)if(j.tagName==R[2]){j=j.prev;break}else if(k.implicitlyClosed.hasOwnProperty(H(j.tagName)))j=j.prev;else break;else if(R)for(;j;){var G=k.contextGrabbers[H(j.tagName)];if(G&&G.hasOwnProperty(H(R[2])))j=j.prev;else break}for(;j&&j.prev&&!j.startOfLine;)j=j.prev;return j?j.indent+C:L.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:k.htmlMode?"html":"xml",helperType:k.htmlMode?"html":"xml",skipAttribute:function(L){L.state==oe&&(L.state=se)},xmlCurrentTag:function(L){return L.tagName?{name:L.tagName,close:L.type=="closeTag"}:null},xmlCurrentContext:function(L){for(var X=[],K=L.context;K;K=K.prev)X.push(K.tagName);return X.reverse()}}}),p.defineMIME("text/xml","xml"),p.defineMIME("application/xml","xml"),p.mimeModes.hasOwnProperty("text/html")||p.defineMIME("text/html",{name:"xml",htmlMode:!0})})})()),Pf.exports}Nm();var Rf={exports:{}},If;function Em(){return If||(If=1,(function(l,c){(function(p){p(ss())})(function(p){p.defineMode("css",function(Te,se){var Ce=se.inline;se.propertyKeywords||(se=p.resolveMode("text/css"));var oe=Te.indentUnit,ye=se.tokenHooks,L=se.documentTypes||{},X=se.mediaTypes||{},K=se.mediaFeatures||{},j=se.mediaValueKeywords||{},R=se.propertyKeywords||{},G=se.nonStandardPropertyKeywords||{},M=se.fontProperties||{},Z=se.counterDescriptors||{},we=se.colorKeywords||{},De=se.valueKeywords||{},qe=se.allowNested,Ie=se.lineComment,ke=se.supportsAtComponent===!0,Be=Te.highlightNonStandardPropertyKeywords!==!1,Ke,et;function $e(ie,je){return Ke=je,ie}function Ft(ie,je){var pe=ie.next();if(ye[pe]){var kt=ye[pe](ie,je);if(kt!==!1)return kt}if(pe=="@")return ie.eatWhile(/[\w\\\-]/),$e("def",ie.current());if(pe=="="||(pe=="~"||pe=="|")&&ie.eat("="))return $e(null,"compare");if(pe=='"'||pe=="'")return je.tokenize=Yt(pe),je.tokenize(ie,je);if(pe=="#")return ie.eatWhile(/[\w\\\-]/),$e("atom","hash");if(pe=="!")return ie.match(/^\s*\w*/),$e("keyword","important");if(/\d/.test(pe)||pe=="."&&ie.eat(/\d/))return ie.eatWhile(/[\w.%]/),$e("number","unit");if(pe==="-"){if(/[\d.]/.test(ie.peek()))return ie.eatWhile(/[\w.%]/),$e("number","unit");if(ie.match(/^-[\w\\\-]*/))return ie.eatWhile(/[\w\\\-]/),ie.match(/^\s*:/,!1)?$e("variable-2","variable-definition"):$e("variable-2","variable");if(ie.match(/^\w+-/))return $e("meta","meta")}else return/[,+>*\/]/.test(pe)?$e(null,"select-op"):pe=="."&&ie.match(/^-?[_a-z][_a-z0-9-]*/i)?$e("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(pe)?$e(null,pe):ie.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(ie.current())&&(je.tokenize=Ct),$e("variable callee","variable")):/[\w\\\-]/.test(pe)?(ie.eatWhile(/[\w\\\-]/),$e("property","word")):$e(null,null)}function Yt(ie){return function(je,pe){for(var kt=!1,Ye;(Ye=je.next())!=null;){if(Ye==ie&&!kt){ie==")"&&je.backUp(1);break}kt=!kt&&Ye=="\\"}return(Ye==ie||!kt&&ie!=")")&&(pe.tokenize=null),$e("string","string")}}function Ct(ie,je){return ie.next(),ie.match(/^\s*[\"\')]/,!1)?je.tokenize=null:je.tokenize=Yt(")"),$e(null,"(")}function xt(ie,je,pe){this.type=ie,this.indent=je,this.prev=pe}function tt(ie,je,pe,kt){return ie.context=new xt(pe,je.indentation()+(kt===!1?0:oe),ie.context),pe}function Ue(ie){return ie.context.prev&&(ie.context=ie.context.prev),ie.context.type}function vt(ie,je,pe){return ut[pe.context.type](ie,je,pe)}function yt(ie,je,pe,kt){for(var Ye=kt||1;Ye>0;Ye--)pe.context=pe.context.prev;return vt(ie,je,pe)}function Qe(ie){var je=ie.current().toLowerCase();De.hasOwnProperty(je)?et="atom":we.hasOwnProperty(je)?et="keyword":et="variable"}var ut={};return ut.top=function(ie,je,pe){if(ie=="{")return tt(pe,je,"block");if(ie=="}"&&pe.context.prev)return Ue(pe);if(ke&&/@component/i.test(ie))return tt(pe,je,"atComponentBlock");if(/^@(-moz-)?document$/i.test(ie))return tt(pe,je,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(ie))return tt(pe,je,"atBlock");if(/^@(font-face|counter-style)/i.test(ie))return pe.stateArg=ie,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(ie))return"keyframes";if(ie&&ie.charAt(0)=="@")return tt(pe,je,"at");if(ie=="hash")et="builtin";else if(ie=="word")et="tag";else{if(ie=="variable-definition")return"maybeprop";if(ie=="interpolation")return tt(pe,je,"interpolation");if(ie==":")return"pseudo";if(qe&&ie=="(")return tt(pe,je,"parens")}return pe.context.type},ut.block=function(ie,je,pe){if(ie=="word"){var kt=je.current().toLowerCase();return R.hasOwnProperty(kt)?(et="property","maybeprop"):G.hasOwnProperty(kt)?(et=Be?"string-2":"property","maybeprop"):qe?(et=je.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(et+=" error","maybeprop")}else return ie=="meta"?"block":!qe&&(ie=="hash"||ie=="qualifier")?(et="error","block"):ut.top(ie,je,pe)},ut.maybeprop=function(ie,je,pe){return ie==":"?tt(pe,je,"prop"):vt(ie,je,pe)},ut.prop=function(ie,je,pe){if(ie==";")return Ue(pe);if(ie=="{"&&qe)return tt(pe,je,"propBlock");if(ie=="}"||ie=="{")return yt(ie,je,pe);if(ie=="(")return tt(pe,je,"parens");if(ie=="hash"&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(je.current()))et+=" error";else if(ie=="word")Qe(je);else if(ie=="interpolation")return tt(pe,je,"interpolation");return"prop"},ut.propBlock=function(ie,je,pe){return ie=="}"?Ue(pe):ie=="word"?(et="property","maybeprop"):pe.context.type},ut.parens=function(ie,je,pe){return ie=="{"||ie=="}"?yt(ie,je,pe):ie==")"?Ue(pe):ie=="("?tt(pe,je,"parens"):ie=="interpolation"?tt(pe,je,"interpolation"):(ie=="word"&&Qe(je),"parens")},ut.pseudo=function(ie,je,pe){return ie=="meta"?"pseudo":ie=="word"?(et="variable-3",pe.context.type):vt(ie,je,pe)},ut.documentTypes=function(ie,je,pe){return ie=="word"&&L.hasOwnProperty(je.current())?(et="tag",pe.context.type):ut.atBlock(ie,je,pe)},ut.atBlock=function(ie,je,pe){if(ie=="(")return tt(pe,je,"atBlock_parens");if(ie=="}"||ie==";")return yt(ie,je,pe);if(ie=="{")return Ue(pe)&&tt(pe,je,qe?"block":"top");if(ie=="interpolation")return tt(pe,je,"interpolation");if(ie=="word"){var kt=je.current().toLowerCase();kt=="only"||kt=="not"||kt=="and"||kt=="or"?et="keyword":X.hasOwnProperty(kt)?et="attribute":K.hasOwnProperty(kt)?et="property":j.hasOwnProperty(kt)?et="keyword":R.hasOwnProperty(kt)?et="property":G.hasOwnProperty(kt)?et=Be?"string-2":"property":De.hasOwnProperty(kt)?et="atom":we.hasOwnProperty(kt)?et="keyword":et="error"}return pe.context.type},ut.atComponentBlock=function(ie,je,pe){return ie=="}"?yt(ie,je,pe):ie=="{"?Ue(pe)&&tt(pe,je,qe?"block":"top",!1):(ie=="word"&&(et="error"),pe.context.type)},ut.atBlock_parens=function(ie,je,pe){return ie==")"?Ue(pe):ie=="{"||ie=="}"?yt(ie,je,pe,2):ut.atBlock(ie,je,pe)},ut.restricted_atBlock_before=function(ie,je,pe){return ie=="{"?tt(pe,je,"restricted_atBlock"):ie=="word"&&pe.stateArg=="@counter-style"?(et="variable","restricted_atBlock_before"):vt(ie,je,pe)},ut.restricted_atBlock=function(ie,je,pe){return ie=="}"?(pe.stateArg=null,Ue(pe)):ie=="word"?(pe.stateArg=="@font-face"&&!M.hasOwnProperty(je.current().toLowerCase())||pe.stateArg=="@counter-style"&&!Z.hasOwnProperty(je.current().toLowerCase())?et="error":et="property","maybeprop"):"restricted_atBlock"},ut.keyframes=function(ie,je,pe){return ie=="word"?(et="variable","keyframes"):ie=="{"?tt(pe,je,"top"):vt(ie,je,pe)},ut.at=function(ie,je,pe){return ie==";"?Ue(pe):ie=="{"||ie=="}"?yt(ie,je,pe):(ie=="word"?et="tag":ie=="hash"&&(et="builtin"),"at")},ut.interpolation=function(ie,je,pe){return ie=="}"?Ue(pe):ie=="{"||ie==";"?yt(ie,je,pe):(ie=="word"?et="variable":ie!="variable"&&ie!="("&&ie!=")"&&(et="error"),"interpolation")},{startState:function(ie){return{tokenize:null,state:Ce?"block":"top",stateArg:null,context:new xt(Ce?"block":"top",ie||0,null)}},token:function(ie,je){if(!je.tokenize&&ie.eatSpace())return null;var pe=(je.tokenize||Ft)(ie,je);return pe&&typeof pe=="object"&&(Ke=pe[1],pe=pe[0]),et=pe,Ke!="comment"&&(je.state=ut[je.state](Ke,ie,je)),et},indent:function(ie,je){var pe=ie.context,kt=je&&je.charAt(0),Ye=pe.indent;return pe.type=="prop"&&(kt=="}"||kt==")")&&(pe=pe.prev),pe.prev&&(kt=="}"&&(pe.type=="block"||pe.type=="top"||pe.type=="interpolation"||pe.type=="restricted_atBlock")?(pe=pe.prev,Ye=pe.indent):(kt==")"&&(pe.type=="parens"||pe.type=="atBlock_parens")||kt=="{"&&(pe.type=="at"||pe.type=="atBlock"))&&(Ye=Math.max(0,pe.indent-oe))),Ye},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:Ie,fold:"brace"}});function g(Te){for(var se={},Ce=0;Ce<Te.length;++Ce)se[Te[Ce].toLowerCase()]=!0;return se}var y=["domain","regexp","url","url-prefix"],b=g(y),_=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],C=g(_),k=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],E=g(k),N=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],I=g(N),A=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],V=g(A),J=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],W=g(J),ae=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],D=g(ae),H=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],F=g(H),q=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],Y=g(q),ge=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],le=g(ge),be=y.concat(_).concat(k).concat(N).concat(A).concat(J).concat(q).concat(ge);p.registerHelper("hintWords","css",be);function We(Te,se){for(var Ce=!1,oe;(oe=Te.next())!=null;){if(Ce&&oe=="/"){se.tokenize=null;break}Ce=oe=="*"}return["comment","comment"]}p.defineMIME("text/css",{documentTypes:b,mediaTypes:C,mediaFeatures:E,mediaValueKeywords:I,propertyKeywords:V,nonStandardPropertyKeywords:W,fontProperties:D,counterDescriptors:F,colorKeywords:Y,valueKeywords:le,tokenHooks:{"/":function(Te,se){return Te.eat("*")?(se.tokenize=We,We(Te,se)):!1}},name:"css"}),p.defineMIME("text/x-scss",{mediaTypes:C,mediaFeatures:E,mediaValueKeywords:I,propertyKeywords:V,nonStandardPropertyKeywords:W,colorKeywords:Y,valueKeywords:le,fontProperties:D,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(Te,se){return Te.eat("/")?(Te.skipToEnd(),["comment","comment"]):Te.eat("*")?(se.tokenize=We,We(Te,se)):["operator","operator"]},":":function(Te){return Te.match(/^\s*\{/,!1)?[null,null]:!1},$:function(Te){return Te.match(/^[\w-]+/),Te.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(Te){return Te.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),p.defineMIME("text/x-less",{mediaTypes:C,mediaFeatures:E,mediaValueKeywords:I,propertyKeywords:V,nonStandardPropertyKeywords:W,colorKeywords:Y,valueKeywords:le,fontProperties:D,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(Te,se){return Te.eat("/")?(Te.skipToEnd(),["comment","comment"]):Te.eat("*")?(se.tokenize=We,We(Te,se)):["operator","operator"]},"@":function(Te){return Te.eat("{")?[null,"interpolation"]:Te.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)?!1:(Te.eatWhile(/[\w\\\-]/),Te.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),p.defineMIME("text/x-gss",{documentTypes:b,mediaTypes:C,mediaFeatures:E,propertyKeywords:V,nonStandardPropertyKeywords:W,fontProperties:D,counterDescriptors:F,colorKeywords:Y,valueKeywords:le,supportsAtComponent:!0,tokenHooks:{"/":function(Te,se){return Te.eat("*")?(se.tokenize=We,We(Te,se)):!1}},name:"css",helperType:"gss"})})})()),Rf.exports}Em();var Of={exports:{}},Mf;function eb(){return Mf||(Mf=1,(function(l,c){(function(p){p(ss(),Nm(),jm(),Em())})(function(p){var g={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function y(I,A,V){var J=I.current(),W=J.search(A);return W>-1?I.backUp(J.length-W):J.match(/<\/?$/)&&(I.backUp(J.length),I.match(A,!1)||I.match(J)),V}var b={};function _(I){var A=b[I];return A||(b[I]=new RegExp("\\s+"+I+`\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))}function C(I,A){var V=I.match(_(A));return V?/^\s*(.*?)\s*$/.exec(V[2])[1]:""}function k(I,A){return new RegExp((A?"^":"")+"</\\s*"+I+"\\s*>","i")}function E(I,A){for(var V in I)for(var J=A[V]||(A[V]=[]),W=I[V],ae=W.length-1;ae>=0;ae--)J.unshift(W[ae])}function N(I,A){for(var V=0;V<I.length;V++){var J=I[V];if(!J[0]||J[1].test(C(A,J[0])))return J[2]}}p.defineMode("htmlmixed",function(I,A){var V=p.getMode(I,{name:"xml",htmlMode:!0,multilineTagIndentFactor:A.multilineTagIndentFactor,multilineTagIndentPastTag:A.multilineTagIndentPastTag,allowMissingTagName:A.allowMissingTagName}),J={},W=A&&A.tags,ae=A&&A.scriptTypes;if(E(g,J),W&&E(W,J),ae)for(var D=ae.length-1;D>=0;D--)J.script.unshift(["type",ae[D].matches,ae[D].mode]);function H(F,q){var Y=V.token(F,q.htmlState),ge=/\btag\b/.test(Y),le;if(ge&&!/[<>\s\/]/.test(F.current())&&(le=q.htmlState.tagName&&q.htmlState.tagName.toLowerCase())&&J.hasOwnProperty(le))q.inTag=le+" ";else if(q.inTag&&ge&&/>$/.test(F.current())){var be=/^([\S]+) (.*)/.exec(q.inTag);q.inTag=null;var We=F.current()==">"&&N(J[be[1]],be[2]),Te=p.getMode(I,We),se=k(be[1],!0),Ce=k(be[1],!1);q.token=function(oe,ye){return oe.match(se,!1)?(ye.token=H,ye.localState=ye.localMode=null,null):y(oe,Ce,ye.localMode.token(oe,ye.localState))},q.localMode=Te,q.localState=p.startState(Te,V.indent(q.htmlState,"",""))}else q.inTag&&(q.inTag+=F.current(),F.eol()&&(q.inTag+=" "));return Y}return{startState:function(){var F=p.startState(V);return{token:H,inTag:null,localMode:null,localState:null,htmlState:F}},copyState:function(F){var q;return F.localState&&(q=p.copyState(F.localMode,F.localState)),{token:F.token,inTag:F.inTag,localMode:F.localMode,localState:q,htmlState:p.copyState(V,F.htmlState)}},token:function(F,q){return q.token(F,q)},indent:function(F,q,Y){return!F.localMode||/^\s*<\//.test(q)?V.indent(F.htmlState,q,Y):F.localMode.indent?F.localMode.indent(F.localState,q,Y):p.Pass},innerMode:function(F){return{state:F.localState||F.htmlState,mode:F.localMode||V}}}},"xml","javascript","css"),p.defineMIME("text/html","htmlmixed")})})()),Of.exports}eb();var Df={exports:{}},zf;function tb(){return zf||(zf=1,(function(l,c){(function(p){p(ss())})(function(p){var g={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},y=p.Pos;p.defineOption("autoCloseBrackets",!1,function(D,H,F){F&&F!=p.Init&&(D.removeKeyMap(_),D.state.closeBrackets=null),H&&(C(b(H,"pairs")),D.state.closeBrackets=H,D.addKeyMap(_))});function b(D,H){return H=="pairs"&&typeof D=="string"?D:typeof D=="object"&&D[H]!=null?D[H]:g[H]}var _={Backspace:N,Enter:I};function C(D){for(var H=0;H<D.length;H++){var F=D.charAt(H),q="'"+F+"'";_[q]||(_[q]=k(F))}}C(g.pairs+"`");function k(D){return function(H){return J(H,D)}}function E(D){var H=D.state.closeBrackets;if(!H||H.override)return H;var F=D.getModeAt(D.getCursor());return F.closeBrackets||H}function N(D){var H=E(D);if(!H||D.getOption("disableInput"))return p.Pass;for(var F=b(H,"pairs"),q=D.listSelections(),Y=0;Y<q.length;Y++){if(!q[Y].empty())return p.Pass;var ge=W(D,q[Y].head);if(!ge||F.indexOf(ge)%2!=0)return p.Pass}for(var Y=q.length-1;Y>=0;Y--){var le=q[Y].head;D.replaceRange("",y(le.line,le.ch-1),y(le.line,le.ch+1),"+delete")}}function I(D){var H=E(D),F=H&&b(H,"explode");if(!F||D.getOption("disableInput"))return p.Pass;for(var q=D.listSelections(),Y=0;Y<q.length;Y++){if(!q[Y].empty())return p.Pass;var ge=W(D,q[Y].head);if(!ge||F.indexOf(ge)%2!=0)return p.Pass}D.operation(function(){var le=D.lineSeparator()||`
`;D.replaceSelection(le+le,null),A(D,-1),q=D.listSelections();for(var be=0;be<q.length;be++){var We=q[be].head.line;D.indentLine(We,null,!0),D.indentLine(We+1,null,!0)}})}function A(D,H){for(var F=[],q=D.listSelections(),Y=0,ge=0;ge<q.length;ge++){var le=q[ge];le.head==D.getCursor()&&(Y=ge);var be=le.head.ch||H>0?{line:le.head.line,ch:le.head.ch+H}:{line:le.head.line-1};F.push({anchor:be,head:be})}D.setSelections(F,Y)}function V(D){var H=p.cmpPos(D.anchor,D.head)>0;return{anchor:new y(D.anchor.line,D.anchor.ch+(H?-1:1)),head:new y(D.head.line,D.head.ch+(H?1:-1))}}function J(D,H){var F=E(D);if(!F||D.getOption("disableInput"))return p.Pass;var q=b(F,"pairs"),Y=q.indexOf(H);if(Y==-1)return p.Pass;for(var ge=b(F,"closeBefore"),le=b(F,"triples"),be=q.charAt(Y+1)==H,We=D.listSelections(),Te=Y%2==0,se,Ce=0;Ce<We.length;Ce++){var oe=We[Ce],ye=oe.head,L,X=D.getRange(ye,y(ye.line,ye.ch+1));if(Te&&!oe.empty())L="surround";else if((be||!Te)&&X==H)be&&ae(D,ye)?L="both":le.indexOf(H)>=0&&D.getRange(ye,y(ye.line,ye.ch+3))==H+H+H?L="skipThree":L="skip";else if(be&&ye.ch>1&&le.indexOf(H)>=0&&D.getRange(y(ye.line,ye.ch-2),ye)==H+H){if(ye.ch>2&&/\bstring/.test(D.getTokenTypeAt(y(ye.line,ye.ch-2))))return p.Pass;L="addFour"}else if(be){var K=ye.ch==0?" ":D.getRange(y(ye.line,ye.ch-1),ye);if(!p.isWordChar(X)&&K!=H&&!p.isWordChar(K))L="both";else return p.Pass}else if(Te&&(X.length===0||/\s/.test(X)||ge.indexOf(X)>-1))L="both";else return p.Pass;if(!se)se=L;else if(se!=L)return p.Pass}var j=Y%2?q.charAt(Y-1):H,R=Y%2?H:q.charAt(Y+1);D.operation(function(){if(se=="skip")A(D,1);else if(se=="skipThree")A(D,3);else if(se=="surround"){for(var G=D.getSelections(),M=0;M<G.length;M++)G[M]=j+G[M]+R;D.replaceSelections(G,"around"),G=D.listSelections().slice();for(var M=0;M<G.length;M++)G[M]=V(G[M]);D.setSelections(G)}else se=="both"?(D.replaceSelection(j+R,null),D.triggerElectric(j+R),A(D,-1)):se=="addFour"&&(D.replaceSelection(j+j+j+j,"before"),A(D,1))})}function W(D,H){var F=D.getRange(y(H.line,H.ch-1),y(H.line,H.ch+1));return F.length==2?F:null}function ae(D,H){var F=D.getTokenAt(y(H.line,H.ch+1));return/\bstring/.test(F.type)&&F.start==H.ch&&(H.ch==0||!/\bstring/.test(D.getTokenTypeAt(H)))}})})()),Df.exports}tb();var Ff={exports:{}},Wf;function nb(){return Wf||(Wf=1,(function(l,c){(function(p){p(ss())})(function(p){var g=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),y=p.Pos,b={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function _(A){return A&&A.bracketRegex||/[(){}[\]]/}function C(A,V,J){var W=A.getLineHandle(V.line),ae=V.ch-1,D=J&&J.afterCursor;D==null&&(D=/(^| )cm-fat-cursor($| )/.test(A.getWrapperElement().className));var H=_(J),F=!D&&ae>=0&&H.test(W.text.charAt(ae))&&b[W.text.charAt(ae)]||H.test(W.text.charAt(ae+1))&&b[W.text.charAt(++ae)];if(!F)return null;var q=F.charAt(1)==">"?1:-1;if(J&&J.strict&&q>0!=(ae==V.ch))return null;var Y=A.getTokenTypeAt(y(V.line,ae+1)),ge=k(A,y(V.line,ae+(q>0?1:0)),q,Y,J);return ge==null?null:{from:y(V.line,ae),to:ge&&ge.pos,match:ge&&ge.ch==F.charAt(0),forward:q>0}}function k(A,V,J,W,ae){for(var D=ae&&ae.maxScanLineLength||1e4,H=ae&&ae.maxScanLines||1e3,F=[],q=_(ae),Y=J>0?Math.min(V.line+H,A.lastLine()+1):Math.max(A.firstLine()-1,V.line-H),ge=V.line;ge!=Y;ge+=J){var le=A.getLine(ge);if(le){var be=J>0?0:le.length-1,We=J>0?le.length:-1;if(!(le.length>D))for(ge==V.line&&(be=V.ch-(J<0?1:0));be!=We;be+=J){var Te=le.charAt(be);if(q.test(Te)&&(W===void 0||(A.getTokenTypeAt(y(ge,be+1))||"")==(W||""))){var se=b[Te];if(se&&se.charAt(1)==">"==J>0)F.push(Te);else if(F.length)F.pop();else return{pos:y(ge,be),ch:Te}}}}}return ge-J==(J>0?A.lastLine():A.firstLine())?!1:null}function E(A,V,J){for(var W=A.state.matchBrackets.maxHighlightLineLength||1e3,ae=J&&J.highlightNonMatching,D=[],H=A.listSelections(),F=0;F<H.length;F++){var q=H[F].empty()&&C(A,H[F].head,J);if(q&&(q.match||ae!==!1)&&A.getLine(q.from.line).length<=W){var Y=q.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";D.push(A.markText(q.from,y(q.from.line,q.from.ch+1),{className:Y})),q.to&&A.getLine(q.to.line).length<=W&&D.push(A.markText(q.to,y(q.to.line,q.to.ch+1),{className:Y}))}}if(D.length){g&&A.state.focused&&A.focus();var ge=function(){A.operation(function(){for(var le=0;le<D.length;le++)D[le].clear()})};if(V)setTimeout(ge,800);else return ge}}function N(A){A.operation(function(){A.state.matchBrackets.currentlyHighlighted&&(A.state.matchBrackets.currentlyHighlighted(),A.state.matchBrackets.currentlyHighlighted=null),A.state.matchBrackets.currentlyHighlighted=E(A,!1,A.state.matchBrackets)})}function I(A){A.state.matchBrackets&&A.state.matchBrackets.currentlyHighlighted&&(A.state.matchBrackets.currentlyHighlighted(),A.state.matchBrackets.currentlyHighlighted=null)}p.defineOption("matchBrackets",!1,function(A,V,J){J&&J!=p.Init&&(A.off("cursorActivity",N),A.off("focus",N),A.off("blur",I),I(A)),V&&(A.state.matchBrackets=typeof V=="object"?V:{},A.on("cursorActivity",N),A.on("focus",N),A.on("blur",I))}),p.defineExtension("matchBrackets",function(){E(this,!0)}),p.defineExtension("findMatchingBracket",function(A,V,J){return(J||typeof V=="boolean")&&(J?(J.strict=V,V=J):V=V?{strict:!0}:null),C(this,A,V)}),p.defineExtension("scanForBracket",function(A,V,J,W){return k(this,A,V,J,W)})})})()),Ff.exports}nb();var Hf={exports:{}},Bf;function rb(){return Bf||(Bf=1,(function(l,c){(function(p){p(ss())})(function(p){var g="CodeMirror-hint",y="CodeMirror-hint-active";p.showHint=function(D,H,F){if(!H)return D.showHint(F);F&&F.async&&(H.async=!0);var q={hint:H};if(F)for(var Y in F)q[Y]=F[Y];return D.showHint(q)},p.defineExtension("showHint",function(D){D=k(this,this.getCursor("start"),D);var H=this.listSelections();if(!(H.length>1)){if(this.somethingSelected()){if(!D.hint.supportsSelection)return;for(var F=0;F<H.length;F++)if(H[F].head.line!=H[F].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var q=this.state.completionActive=new b(this,D);q.options.hint&&(p.signal(this,"startCompletion",this),q.update(!0))}}),p.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function b(D,H){if(this.cm=D,this.options=H,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var F=this;D.on("cursorActivity",this.activityFunc=function(){F.cursorActivity()})}}var _=window.requestAnimationFrame||function(D){return setTimeout(D,1e3/60)},C=window.cancelAnimationFrame||clearTimeout;b.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&p.signal(this.data,"close"),this.widget&&this.widget.close(),p.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(D,H){var F=D.list[H],q=this;this.cm.operation(function(){F.hint?F.hint(q.cm,D,F):q.cm.replaceRange(E(F),F.from||D.from,F.to||D.to,"complete"),p.signal(D,"pick",F),q.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(C(this.debounce),this.debounce=0);var D=this.startPos;this.data&&(D=this.data.from);var H=this.cm.getCursor(),F=this.cm.getLine(H.line);if(H.line!=this.startPos.line||F.length-H.ch!=this.startLen-this.startPos.ch||H.ch<D.ch||this.cm.somethingSelected()||!H.ch||this.options.closeCharacters.test(F.charAt(H.ch-1)))this.close();else{var q=this;this.debounce=_(function(){q.update()}),this.widget&&this.widget.disable()}},update:function(D){if(this.tick!=null){var H=this,F=++this.tick;J(this.options.hint,this.cm,this.options,function(q){H.tick==F&&H.finishUpdate(q,D)})}},finishUpdate:function(D,H){this.data&&p.signal(this.data,"update");var F=this.widget&&this.widget.picked||H&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=D,D&&D.list.length&&(F&&D.list.length==1?this.pick(D,0):(this.widget=new A(this,D),p.signal(D,"shown")))}};function k(D,H,F){var q=D.options.hintOptions,Y={};for(var ge in ae)Y[ge]=ae[ge];if(q)for(var ge in q)q[ge]!==void 0&&(Y[ge]=q[ge]);if(F)for(var ge in F)F[ge]!==void 0&&(Y[ge]=F[ge]);return Y.hint.resolve&&(Y.hint=Y.hint.resolve(D,H)),Y}function E(D){return typeof D=="string"?D:D.text}function N(D,H){var F={Up:function(){H.moveFocus(-1)},Down:function(){H.moveFocus(1)},PageUp:function(){H.moveFocus(-H.menuSize()+1,!0)},PageDown:function(){H.moveFocus(H.menuSize()-1,!0)},Home:function(){H.setFocus(0)},End:function(){H.setFocus(H.length-1)},Enter:H.pick,Tab:H.pick,Esc:H.close},q=/Mac/.test(navigator.platform);q&&(F["Ctrl-P"]=function(){H.moveFocus(-1)},F["Ctrl-N"]=function(){H.moveFocus(1)});var Y=D.options.customKeys,ge=Y?{}:F;function le(Te,se){var Ce;typeof se!="string"?Ce=function(oe){return se(oe,H)}:F.hasOwnProperty(se)?Ce=F[se]:Ce=se,ge[Te]=Ce}if(Y)for(var be in Y)Y.hasOwnProperty(be)&&le(be,Y[be]);var We=D.options.extraKeys;if(We)for(var be in We)We.hasOwnProperty(be)&&le(be,We[be]);return ge}function I(D,H){for(;H&&H!=D;){if(H.nodeName.toUpperCase()==="LI"&&H.parentNode==D)return H;H=H.parentNode}}function A(D,H){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=D,this.data=H,this.picked=!1;var F=this,q=D.cm,Y=q.getInputField().ownerDocument,ge=Y.defaultView||Y.parentWindow,le=this.hints=Y.createElement("ul");le.setAttribute("role","listbox"),le.setAttribute("aria-expanded","true"),le.id=this.id;var be=D.cm.options.theme;le.className="CodeMirror-hints "+be,this.selectedHint=H.selectedHint||0;for(var We=H.list,Te=0;Te<We.length;++Te){var se=le.appendChild(Y.createElement("li")),Ce=We[Te],oe=g+(Te!=this.selectedHint?"":" "+y);Ce.className!=null&&(oe=Ce.className+" "+oe),se.className=oe,Te==this.selectedHint&&se.setAttribute("aria-selected","true"),se.id=this.id+"-"+Te,se.setAttribute("role","option"),Ce.render?Ce.render(se,H,Ce):se.appendChild(Y.createTextNode(Ce.displayText||E(Ce))),se.hintId=Te}var ye=D.options.container||Y.body,L=q.cursorCoords(D.options.alignWithWord?H.from:null),X=L.left,K=L.bottom,j=!0,R=0,G=0;if(ye!==Y.body){var M=["absolute","relative","fixed"].indexOf(ge.getComputedStyle(ye).position)!==-1,Z=M?ye:ye.offsetParent,we=Z.getBoundingClientRect(),De=Y.body.getBoundingClientRect();R=we.left-De.left-Z.scrollLeft,G=we.top-De.top-Z.scrollTop}le.style.left=X-R+"px",le.style.top=K-G+"px";var qe=ge.innerWidth||Math.max(Y.body.offsetWidth,Y.documentElement.offsetWidth),Ie=ge.innerHeight||Math.max(Y.body.offsetHeight,Y.documentElement.offsetHeight);ye.appendChild(le),q.getInputField().setAttribute("aria-autocomplete","list"),q.getInputField().setAttribute("aria-owns",this.id),q.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var ke=D.options.moveOnOverlap?le.getBoundingClientRect():new DOMRect,Be=D.options.paddingForScrollbar?le.scrollHeight>le.clientHeight+1:!1,Ke;setTimeout(function(){Ke=q.getScrollInfo()});var et=ke.bottom-Ie;if(et>0){var $e=ke.bottom-ke.top,Ft=ke.top-(L.bottom-L.top)-2;Ie-ke.top<Ft?($e>Ft&&(le.style.height=($e=Ft)+"px"),le.style.top=(K=L.top-$e)-G+"px",j=!1):le.style.height=Ie-ke.top-2+"px"}var Yt=ke.right-qe;if(Be&&(Yt+=q.display.nativeBarWidth),Yt>0&&(ke.right-ke.left>qe&&(le.style.width=qe-5+"px",Yt-=ke.right-ke.left-qe),le.style.left=(X=Math.max(L.left-Yt-R,0))+"px"),Be)for(var Ct=le.firstChild;Ct;Ct=Ct.nextSibling)Ct.style.paddingRight=q.display.nativeBarWidth+"px";if(q.addKeyMap(this.keyMap=N(D,{moveFocus:function(Ue,vt){F.changeActive(F.selectedHint+Ue,vt)},setFocus:function(Ue){F.changeActive(Ue)},menuSize:function(){return F.screenAmount()},length:We.length,close:function(){D.close()},pick:function(){F.pick()},data:H})),D.options.closeOnUnfocus){var xt;q.on("blur",this.onBlur=function(){xt=setTimeout(function(){D.close()},100)}),q.on("focus",this.onFocus=function(){clearTimeout(xt)})}q.on("scroll",this.onScroll=function(){var Ue=q.getScrollInfo(),vt=q.getWrapperElement().getBoundingClientRect();Ke||(Ke=q.getScrollInfo());var yt=K+Ke.top-Ue.top,Qe=yt-(ge.pageYOffset||(Y.documentElement||Y.body).scrollTop);if(j||(Qe+=le.offsetHeight),Qe<=vt.top||Qe>=vt.bottom)return D.close();le.style.top=yt+"px",le.style.left=X+Ke.left-Ue.left+"px"}),p.on(le,"dblclick",function(Ue){var vt=I(le,Ue.target||Ue.srcElement);vt&&vt.hintId!=null&&(F.changeActive(vt.hintId),F.pick())}),p.on(le,"click",function(Ue){var vt=I(le,Ue.target||Ue.srcElement);vt&&vt.hintId!=null&&(F.changeActive(vt.hintId),D.options.completeOnSingleClick&&F.pick())}),p.on(le,"mousedown",function(){setTimeout(function(){q.focus()},20)});var tt=this.getSelectedHintRange();return(tt.from!==0||tt.to!==0)&&this.scrollToActive(),p.signal(H,"select",We[this.selectedHint],le.childNodes[this.selectedHint]),!0}A.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var D=this.completion.cm.getInputField();D.removeAttribute("aria-activedescendant"),D.removeAttribute("aria-owns");var H=this.completion.cm;this.completion.options.closeOnUnfocus&&(H.off("blur",this.onBlur),H.off("focus",this.onFocus)),H.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var D=this;this.keyMap={Enter:function(){D.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(D,H){if(D>=this.data.list.length?D=H?this.data.list.length-1:0:D<0&&(D=H?0:this.data.list.length-1),this.selectedHint!=D){var F=this.hints.childNodes[this.selectedHint];F&&(F.className=F.className.replace(" "+y,""),F.removeAttribute("aria-selected")),F=this.hints.childNodes[this.selectedHint=D],F.className+=" "+y,F.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",F.id),this.scrollToActive(),p.signal(this.data,"select",this.data.list[this.selectedHint],F)}},scrollToActive:function(){var D=this.getSelectedHintRange(),H=this.hints.childNodes[D.from],F=this.hints.childNodes[D.to],q=this.hints.firstChild;H.offsetTop<this.hints.scrollTop?this.hints.scrollTop=H.offsetTop-q.offsetTop:F.offsetTop+F.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=F.offsetTop+F.offsetHeight-this.hints.clientHeight+q.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var D=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-D),to:Math.min(this.data.list.length-1,this.selectedHint+D)}}};function V(D,H){if(!D.somethingSelected())return H;for(var F=[],q=0;q<H.length;q++)H[q].supportsSelection&&F.push(H[q]);return F}function J(D,H,F,q){if(D.async)D(H,q,F);else{var Y=D(H,F);Y&&Y.then?Y.then(q):q(Y)}}function W(D,H){var F=D.getHelpers(H,"hint"),q;if(F.length){var Y=function(ge,le,be){var We=V(ge,F);function Te(se){if(se==We.length)return le(null);J(We[se],ge,be,function(Ce){Ce&&Ce.list.length>0?le(Ce):Te(se+1)})}Te(0)};return Y.async=!0,Y.supportsSelection=!0,Y}else return(q=D.getHelper(D.getCursor(),"hintWords"))?function(ge){return p.hint.fromList(ge,{words:q})}:p.hint.anyword?function(ge,le){return p.hint.anyword(ge,le)}:function(){}}p.registerHelper("hint","auto",{resolve:W}),p.registerHelper("hint","fromList",function(D,H){var F=D.getCursor(),q=D.getTokenAt(F),Y,ge=p.Pos(F.line,q.start),le=F;q.start<F.ch&&/\w/.test(q.string.charAt(F.ch-q.start-1))?Y=q.string.substr(0,F.ch-q.start):(Y="",ge=F);for(var be=[],We=0;We<H.words.length;We++){var Te=H.words[We];Te.slice(0,Y.length)==Y&&be.push(Te)}if(be.length)return{list:be,from:ge,to:le}}),p.commands.autocomplete=p.showHint;var ae={hint:p.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};p.defineOption("hintOptions",null)})})()),Hf.exports}rb();var Uf={exports:{}},qf;function ib(){return qf||(qf=1,(function(l,c){(function(p){p(ss())})(function(p){var g=/[\w$]+/,y=500;p.registerHelper("hint","anyword",function(b,_){for(var C=_&&_.word||g,k=_&&_.range||y,E=b.getCursor(),N=b.getLine(E.line),I=E.ch,A=I;A&&C.test(N.charAt(A-1));)--A;for(var V=A!=I&&N.slice(A,I),J=_&&_.list||[],W={},ae=new RegExp(C.source,"g"),D=-1;D<=1;D+=2)for(var H=E.line,F=Math.min(Math.max(H+D*k,b.firstLine()),b.lastLine())+D;H!=F;H+=D)for(var q=b.getLine(H),Y;Y=ae.exec(q);)H==E.line&&Y[0]===V||(!V||Y[0].lastIndexOf(V,0)==0)&&!Object.prototype.hasOwnProperty.call(W,Y[0])&&(W[Y[0]]=!0,J.push(Y[0]));return{list:J,from:p.Pos(E.line,A),to:p.Pos(E.line,I)}})})})()),Uf.exports}ib();function sb(l){return l==="python"?"python":l==="csharp"?"text/x-csharp":l==="java"?"text/x-java":l==="jsx"?{name:"javascript",jsx:!0}:l==="javascript"?"javascript":l==="html"?"htmlmixed":l==="css"?"css":"text/plain"}function Lm({value:l,onChange:c,language:p}){const g=Se.useRef(null),y=Se.useRef(null),b=Se.useRef(c);return b.current=c,Se.useEffect(()=>{const _=_f.fromTextArea(g.current,{mode:sb(p),lineNumbers:!0,lineWrapping:!1,indentUnit:4,tabSize:4,indentWithTabs:!1,smartIndent:!0,electricChars:!0,autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,extraKeys:{Tab(k){if(k.somethingSelected())k.execCommand("indentMore");else{const E=k.getOption("indentUnit")-k.getCursor().ch%k.getOption("indentUnit");k.replaceSelection(" ".repeat(E),"end")}},"Shift-Tab":k=>k.execCommand("indentLess"),"Ctrl-Space":k=>k.showHint({hint:_f.hint.anyword,completeSingle:!1})}});_.getInputField().setAttribute("aria-label","Code editor"),_.on("change",k=>{var E;return(E=b.current)==null?void 0:E.call(b,k.getValue())}),y.current=_;const C=typeof ResizeObserver<"u"?new ResizeObserver(()=>_.refresh()):null;return C==null||C.observe(_.getWrapperElement()),()=>{C==null||C.disconnect(),_.toTextArea(),y.current=null}},[p]),Se.useEffect(()=>{const _=y.current;if(_&&_.getValue()!==l){const C=_.getCursor();_.setValue(l??""),_.setCursor(C)}},[l]),u.jsx("div",{className:"code-editor-wrap",children:u.jsx("textarea",{ref:g,"aria-label":"Code editor",defaultValue:l,spellCheck:!1})})}const yd=l=>String(l??"").replace(/\r\n/g,`
`).replace(/\n$/,"");function ob(l){const c=Array.isArray(l)?l:[];return{passed:c.filter(p=>p.passed===!0).length,total:c.length}}function Kf(l,c){const p=String(l||"").split(/\r?\n/).find(y=>y.startsWith("PUBLIC_CHECK_RESULTS="));if(!p)throw new Error("Python returned no example-check results. See Console for errors.");const g=JSON.parse(p.slice(21));if(!Array.isArray(g)||g.length!==c.length)throw new Error("Python did not finish every published example.");return c.map((y,b)=>({call:y.call||"Example "+(b+1),expected:String(y.expected??""),received:String(g[b].actual??""),error:String(g[b].error||""),passed:g[b].ok===!0}))}function ab(l,c){return c.map((p,g)=>{var y,b,_,C;return{call:"main("+JSON.stringify(p.args||[])+")",expected:yd(p.expected),received:yd((y=l[g])==null?void 0:y.stdout),error:String(((b=l[g])==null?void 0:b.diagnostics)||((_=l[g])==null?void 0:_.stderr)||""),passed:((C=l[g])==null?void 0:C.success)===!0&&yd(l[g].stdout)===yd(p.expected)}})}function lb(l,c,p){return p(l,c.length).map(y=>({call:c[y.index].call,expected:y.expected,received:y.received,error:y.error,passed:y.passed}))}function Pm(l){return(l||[]).map((c,p)=>({call:String(c.call||c.label||"Check "+(p+1)),expected:String(c.expected??"Requirement met"),received:String(c.received??(c.pass===!0||c.passed===!0?"Requirement met":"Not yet met")),error:String(c.error||""),passed:c.pass===!0||c.passed===!0}))}function ub(l){var c;return((c=/^\s*(?:async\s+)?def\s+([A-Za-z_]\w*)\s*\(/m.exec(l))==null?void 0:c[1])||null}function oc(l,c){var p,g,y;return c==="python"?ub(l):c==="javascript"?((p=/(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:p[1])||null:c==="csharp"?((g=/\b(?:public\s+)?static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:g[1])||null:c==="java"&&((y=/\bpublic\s+static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:y[1])||null}const cb=oc;function Zp(l,c,p=null){if(typeof l=="string")return JSON.stringify(l);if(l===null)return"null";if(typeof l=="boolean")return String(l);if(typeof l=="number")return Number.isFinite(l)?String(l):"0";if(Array.isArray(l)){const g=l.every(k=>Number.isInteger(k)),y=l.every(k=>typeof k=="string"),b=l.every(k=>typeof k=="boolean"),_=l.length===0&&p?p:g?"int":y?"string":b?"bool":"double";return"new "+(c==="java"?_==="string"?"String":_==="bool"?"boolean":_:_)+"[]{"+l.map(k=>Zp(k,c)).join(",")+"}"}throw new Error("This example uses a data type unsupported by the browser checker.")}function eh(l,c,p){var _;const g=oc(p,c)||oc(l.starter||"",c);if(!g)throw new Error("The checker could not find a function declaration.");const y=l.challengeExamples||[],b=(((_=y[0])==null?void 0:_.input)||[]).map((C,k)=>{const E=y.map(N=>{var I;return(I=N.input)==null?void 0:I[k]}).find(N=>Array.isArray(N)&&N.length>0);return Array.isArray(E)?typeof E[0]=="boolean"?"bool":typeof E[0]=="string"?"string":Number.isInteger(E[0])?"int":"double":null});return y.map(C=>({...C,call:g+"("+(C.input||[]).map((k,E)=>Zp(k,c,b[E])).join(", ")+")",expectedLiteral:Zp(C.expected,c),expected:String(C.expected)}))}function db(l,c,p=!0){const g=oc(l,"python")||oc(c.starter||"","python");if(!g)throw new Error("Define the challenge function before running it.");const y=c.challengeExamples||[];return["import json as __json, io as __io, contextlib as __ctx","__source = "+JSON.stringify(l),"__cases = __json.loads("+JSON.stringify(JSON.stringify(p?y:y.slice(0,1)))+")","__results = []","for __case in __cases:","    try:",'        __env = {"__name__":"student"}','        with __ctx.redirect_stdout(__io.StringIO()): exec(compile(__source,"main.py","exec"),__env)',"        __actual = __env["+JSON.stringify(g)+'](*__case["input"])','        __ok = type(__actual) is type(__case["expected"]) and __actual == __case["expected"]','        __results.append({"ok":__ok,"actual":repr(__actual)[:300],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","error":type(__error).__name__+": "+str(__error)[:300]})','print("PUBLIC_CHECK_RESULTS="+__json.dumps(__results))'].join(`
`)}function pb(l,c){const p=eh(c,"java",l);if(!p.length)throw new Error("No visible examples are available.");const g=p.map((y,b)=>`try{Object actual=Solution.${y.call}; Object expected=${y.expectedLiteral}; boolean ok=java.util.Objects.deepEquals(actual,expected); String received=java.util.Arrays.deepToString(new Object[]{actual}); received=received.substring(1,received.length()-1); System.out.println("PLAYGROUND_CASE:${b}:"+(ok?"1":"0")+":"+received);}catch(Throwable error){System.out.println("PLAYGROUND_CASE:${b}:0:ERROR "+error.getClass().getSimpleName()+" "+error.getMessage());}`);return l+`
class __PlaygroundPracticeChecks {public static void main(String[] args) {`+g.join(`
`)+"}}"}function hb(l,c){const p=String(l||"").split(/\r?\n/).filter(g=>g.startsWith("PLAYGROUND_CASE:"));if(p.length!==c.length)throw new Error("Java did not return all published examples.");return c.map((g,y)=>{const b=p[y],_=/^PLAYGROUND_CASE:(\d+):([01]):([\s\S]*)$/.exec(b);if(!_||Number(_[1])!==y)throw Error("Java returned invalid check data.");return{call:g.call,expected:g.expected,received:_[3],passed:_[2]==="1",error:_[3].startsWith("ERROR ")?_[3]:""}})}function Am({text:l="",checksText:c="",checkRows:p=null,points:g=null,language:y,activeTab:b,onTabChange:_,previewEnabled:C=!1,previewDoc:k="",previewRef:E}){const N=C?["Preview","Console","Checks"]:["Console","Checks"],I=Array.isArray(p),{passed:A,total:V}=ob(p),J=Number.isFinite(Number(g))&&g!==null&&V?Number(g)*A/V:null;return u.jsxs("section",{className:"console-pane","aria-label":"Workspace output",children:[u.jsxs("div",{className:"console-heading",children:[u.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Output views",children:N.map(W=>u.jsxs("button",{type:"button",role:"tab","aria-selected":b===W,className:b===W?"active":"",onClick:()=>_(W),children:[W==="Console"&&u.jsx(Dy,{size:14}),W]},W))}),u.jsx("span",{children:"Practice · no submissions"})]}),["html","css","javascript","jsx"].includes(y)&&u.jsx("div",{className:"console-preview",hidden:!C||b!=="Preview",children:u.jsx("iframe",{ref:E,title:"Live student code preview",className:"live-preview-frame",sandbox:"allow-scripts allow-forms",srcDoc:k||"<p>Choose Run to preview your code.</p>"})}),b==="Checks"?u.jsx("div",{className:"practice-check-content",role:"tabpanel","aria-label":"Check feedback",children:I?u.jsxs(u.Fragment,{children:[u.jsxs("p",{className:"check-summary",children:["Checks ",u.jsxs("strong",{children:[A," of ",V," passing"]})]}),u.jsx("p",{className:"check-next",children:A===V?"All published practice checks passed.":"Revise your code, then check again."}),u.jsx("div",{className:"practice-check-cards",children:p.map((W,ae)=>u.jsxs("article",{className:"practice-check-card "+(W.passed?"passed":"needs-revision"),children:[u.jsxs("header",{children:[u.jsx("code",{children:W.call||"Example "+(ae+1)}),u.jsx("span",{children:W.passed?"Pass":"Review"})]}),u.jsxs("dl",{children:[u.jsx("dt",{children:"Expected"}),u.jsx("dd",{children:u.jsx("pre",{children:W.expected??""})}),u.jsx("dt",{children:W.error?"Error":"Received"}),u.jsx("dd",{children:u.jsx("pre",{children:W.error||W.received||"None"})})]})]},ae))}),J!==null&&u.jsxs("p",{className:"check-practice-score",children:["Public-check score: ",Number(J.toFixed(2)),"/",g," practice points · ",A,"/",V," examples passed."]}),u.jsx("p",{className:"check-disclaimer",children:"Public examples only. These results do not award grades, completion, or earned points."})]}):u.jsx("pre",{className:"practice-check-message",children:c})}):b==="Console"?u.jsx("pre",{role:"tabpanel","aria-label":"Console output",children:l}):null]})}const fb="PUBLIC_CHECK_RESULTS=";function mb(l,c){const p=Array.isArray(l==null?void 0:l.cases)?l.cases:[],g=JSON.stringify(String(c)),y=JSON.stringify(JSON.stringify(p));return["import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx","import traceback as __trace","__student = "+g,"__cases = __json.loads("+y+")","__results = []","for __example in __cases:","    __out = __io.StringIO()","    try:",'        __env = {"__name__": "__main__"}',"        with __ctx.redirect_stdout(__out), __ctx.redirect_stderr(__out):",'            exec(compile(__student, "main.py", "exec"), __env)',(l==null?void 0:l.mode)==="function"?'            __actual = eval(compile(__ast.parse(__example["call"], mode="eval"), "example", "eval"), __env)':'            __actual = __out.getvalue().rstrip("\\n")',(l==null?void 0:l.mode)==="function"?'        __expected = __ast.literal_eval(__example["expected"])':'        __expected = __example["expected"].rstrip("\\n")',(l==null?void 0:l.mode)==="function"?"        __ok = type(__actual) is type(__expected) and __actual == __expected":"        __ok = __actual == __expected",'        __results.append({"ok":__ok,"actual":str(__actual)[:240],"expected":str(__expected)[:240],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","expected":str(__example.get("expected",""))[:240],"error":type(__error).__name__+": "+str(__error)[:200]})','print("'+fb+'"+__json.dumps(__results))'].join(`
`)+`
`}function gb(l,c){const p=String(c).split("(",1)[0].trim();return["import ast as __ast, io as __io, json as __json, contextlib as __ctx",'__env={"__name__":"student"}',"__stream=__io.StringIO()","with __ctx.redirect_stdout(__stream):","    exec(compile("+JSON.stringify(String(l))+',"main.py","exec"),__env)',"    __name="+JSON.stringify(p),'    if __name not in __env and callable(__env.get("solution")): __env[__name]=__env["solution"]',"    __value=eval(compile(__ast.parse("+JSON.stringify(String(c))+',mode="eval"),"sample call","eval"),__env)','print("PLAYGROUND_PREVIEW="+__json.dumps({"call":'+JSON.stringify(String(c))+',"returned":repr(__value)[:5000],"printed":__stream.getvalue()[:10000]}))'].join(`
`)}const yb="modulepreload",vb=function(l){return"/playground/preview/"+l},$f={},Rm=function(c,p,g){let y=Promise.resolve();if(p&&p.length>0){let _=function(E){return Promise.all(E.map(N=>Promise.resolve(N).then(I=>({status:"fulfilled",value:I}),I=>({status:"rejected",reason:I}))))};document.getElementsByTagName("link");const C=document.querySelector("meta[property=csp-nonce]"),k=(C==null?void 0:C.nonce)||(C==null?void 0:C.getAttribute("nonce"));y=_(p.map(E=>{if(E=vb(E),E in $f)return;$f[E]=!0;const N=E.endsWith(".css"),I=N?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${E}"]${I}`))return;const A=document.createElement("link");if(A.rel=N?"stylesheet":yb,N||(A.as="script"),A.crossOrigin="",A.href=E,k&&A.setAttribute("nonce",k),document.head.appendChild(A),N)return new Promise((V,J)=>{A.addEventListener("load",V),A.addEventListener("error",()=>J(new Error(`Unable to preload CSS for ${E}`)))})}))}function b(_){const C=new Event("vite:preloadError",{cancelable:!0});if(C.payload=_,window.dispatchEvent(C),!C.defaultPrevented)throw _}return y.then(_=>{for(const C of _||[])C.status==="rejected"&&b(C.reason);return c().catch(b)})},As="/playground/";async function xb(l,c=()=>{}){if(l==="python"){const{PythonRunner:p}=await Rm(async()=>{const{PythonRunner:g}=await import("./pythonRunner-lCn9BIec.js");return{PythonRunner:g}},[]);return{kind:"python",instance:new p({onStatus:c})}}if(l==="java"){const{JavaRunner:p}=await import(As+"java-runner.mjs");return{kind:"java",instance:new p(c)}}if(l==="csharp"){const[{CSharpRunner:p},g]=await Promise.all([import(As+"csharp-runner.mjs"),import(As+"csharp-protocol.mjs")]);return{kind:"csharp",instance:new p({onStatus:c}),protocol:g}}throw Error("No code compiler for "+l)}function bb(l){var c;return((c=/\b(?:public\s+)?(?:static\s+)?class\s+([A-Za-z_]\w*)/.exec(String(l||"")))==null?void 0:c[1])||""}const Gf='<main class="event-card"><h1>Robotics meetup</h1><p>Thursday at 4 PM in the lab.</p><p>Attendees: <span id="count">0</span></p><button id="join">Join</button></main>',wd=l=>JSON.stringify(String(l)).replace(/</g,"\\u003c");function wb(l){return l==="html"?`(()=>{
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
  })();`}function kb(l,c,p){var _;const g=(c.challengeExamples||[]).slice(0,p?void 0:1);if(!g.length)throw Error("No public challenge examples were published.");const y=(_=/\b(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:_[1];if(!y)throw Error("Define and export the challenge function.");const b=String(l).replace(/\bexport\s+(?=(?:async\s+)?function|const|let|class)/g,"");return`(()=>{
    const cases=${JSON.stringify(g)};
    const results=[];
    try{
      const fn=new Function(${wd(b+"; return "+y+";")})();
      for(const row of cases){
        try{
          const got=fn(...row.input);
          const expected=row.expected;
          const pass=JSON.stringify(got)===JSON.stringify(expected);
          results.push({label:${wd(y)}+'('+row.input.map(x=>JSON.stringify(x)).join(', ')+')',
            expected:JSON.stringify(expected),received:JSON.stringify(got),pass});
        }catch(e){results.push({label:${wd(y)}+'(...)',expected:JSON.stringify(row.expected),
          received:'',error:e.name+': '+e.message,pass:false});}
      }
      if(${p?"true":"false"})send('checks',{results});
      else results.forEach(row=>send('log',{level:row.pass?'info':'warn',text:row.label+' → '+(row.error || row.received)+' (expected '+row.expected+')'}));
    }catch(e){send('error',{text:e.name+': '+e.message});}
  })();`}function Sb(l){return"<script>"+l.replace(/<\/script/gi,"<\\/script")+"<\/script>"}async function _h({code:l,language:c,lessonId:p,task:g={},token:y,check:b=!0}){if(!y)throw Error("A preview token is required.");if(g.webFiles){const{assembleWebFiles:W}=await Rm(async()=>{const{assembleWebFiles:le}=await Promise.resolve().then(()=>jb);return{assembleWebFiles:le}},[]),ae=c==="jsx"?"App.jsx":"script.js";let D=null;c==="jsx"&&(typeof window.PlaygroundJSX!="function"&&await new Promise((le,be)=>{const We=document.createElement("script");We.src=As+"vendor/learning/jsx.js",We.onload=le,We.onerror=()=>be(Error("React JSX compiler could not load.")),document.head.append(We)}),D=window.PlaygroundJSX(g.webFiles["App.jsx"]||""));const{html:H,linkedStyle:F,linkedScript:q}=W(g.webFiles,{scriptName:ae,scriptOverride:D});if(g.projectId){const{buildProjectPreview:le}=await import(As+"project-preview.mjs");return le(H,{token:y,step:g.stepId,projectId:g.projectId,check:b})}const Y='<script src="'+As+'vendor/learning/react.js"><\/script>',ge=c==="jsx"?/<\/head\s*>/i.test(H)?H.replace(/<\/head\s*>/i,Y+"</head>"):Y+H:H;return _h({code:ge,language:"html",lessonId:p,task:{},token:y,check:b})}if(g.projectId){const{buildProjectPreview:W}=await import(As+"project-preview.mjs");return W(l,{token:y,step:g.stepId,projectId:g.projectId,check:b})}const{previewConsoleBridge:_}=await import(As+"console-drawer.mjs"),C=Sb(_(y)),k=wd;let E="",N="",I="";if(g.isChallenge&&c==="javascript")E="<main><h2>JavaScript challenge</h2><p>See the Checks and Console tabs for actual function results.</p></main>",N=kb(l,g,b);else if(c==="html")E=String(l);else if(c==="css")E="<style>"+String(l).replace(/<\/style/gi,"")+"</style>"+Gf;else if(c==="javascript")E=Gf,N=l;else if(c==="jsx")E='<div id="root"></div>',typeof window.PlaygroundJSX!="function"&&await new Promise((W,ae)=>{const D=document.createElement("script");D.src=As+"vendor/learning/jsx.js",D.onload=W,D.onerror=()=>ae(Error("React JSX compiler could not load.")),document.head.append(D)}),N=window.PlaygroundJSX(l),I='<script src="'+As+'vendor/learning/react.js"><\/script>';else throw Error("Preview is not supported for "+c);const A=g.isChallenge&&c==="javascript"?"":wb(p),V=g.isChallenge&&c==="javascript"?"<script>try{"+N+';send("ready");}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>':"<script>try{(0,eval)("+k(N)+');setTimeout(()=>{send("ready");'+(b?A:"")+'},180)}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>',J='<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="form-action &apos;none&apos;"><style>body{font:16px/1.55 system-ui,sans-serif;padding:16px}button{padding:8px 15px}</style>'+C+I;if(c==="html"){const W=String(E).replace(/^\s*<!doctype[^>]*>/i,"");return"<!doctype html>"+(/<head(?:\s[^>]*)?>/i.test(W)?W.replace(/<head(?:\s[^>]*)?>/i,D=>D+J):"<head>"+J+"</head>"+W)+V}return"<!doctype html><html><head>"+J+"</head><body>"+E+V+"</body></html>"}function Im({lessonId:l,task:c}){const p=c.storageKey||Sh.code(l),g=!!c.projectDraft,y=!!c.isChallenge,b=Se.useRef(null),_=Se.useRef(null),C=Se.useRef(null),k=Se.useRef(null),E=Se.useRef(null),[N,I]=Se.useState(!1),[A,V]=Se.useState(c.starter||""),[J,W]=Se.useState(c.console||"Press Run to execute the code."),[ae,D]=Se.useState(""),[H,F]=Se.useState("Choose Check to run the published examples. Your scores are not recorded."),[q,Y]=Se.useState(null),[ge,le]=Se.useState(""),be=["html","css","javascript","jsx"].includes(c.language),We=be&&!y,[Te,se]=Se.useState(We?"Preview":"Console"),[Ce,oe]=cn("designlab:editor-height",300);Se.useEffect(()=>{V(Ad(p)??c.starter??""),W(c.console||"Run to see your program output."),F("Choose Check to run the published examples. Your scores are not recorded."),Y(null),se(be&&!y?"Preview":"Console"),le(""),D("")},[p,c.language,c.starter,c.console,be,y]),Se.useEffect(()=>()=>{var R;clearTimeout(E.current),k.current=null,(R=_.current)==null||R.instance.dispose(),_.current=null},[]),Se.useEffect(()=>{function R(G){var we;const M=k.current;if(!M||!C.current||G.source!==C.current.contentWindow||((we=G.data)==null?void 0:we.token)!==M.token)return;const Z=G.data;Z.kind==="log"&&W(De=>(De==="Run to see your program output."?"":De)+"["+(Z.level||"log")+"] "+Z.text+`
`),Z.kind==="clear"&&W(""),Z.kind==="error"&&(clearTimeout(E.current),W(De=>De+"Error: "+Z.text+`
`),M.check&&F("Fix the runtime error, then try Check again."),k.current=null,I(!1),se("Console")),(Z.kind==="checks"||Z.kind==="project-checks")&&(clearTimeout(E.current),Y(Pm(Z.results||(Z.text?[{label:Z.text,pass:Z.pass}]:[]))),k.current=null,I(!1),se("Checks")),Z.kind==="ready"&&!M.check&&(clearTimeout(E.current),k.current=null,I(!1))}return window.addEventListener("message",R),()=>window.removeEventListener("message",R)},[]);function ye(R){if(!b.current)return;const G=b.current.getBoundingClientRect();oe(Math.max(160,Math.min(G.height-120,R.clientY-G.top)))}async function L(){var R;if(!_.current||_.current.language!==c.language){(R=_.current)==null||R.instance.dispose();const G=await xb(c.language,M=>W(M));_.current={...G,language:c.language}}return _.current}async function X(R){var Z,we,De,qe,Ie,ke,Be,Ke,et,$e,Ft,Yt;const G=c.language;if(G==="java"&&c.environment==="ide")throw Error("This activity uses Java 26 file I/O and requires a full Java IDE. Browser execution is not supported for this exercise.");const M=await L();if(G==="python"){let Ct=A;if(y)Ct=db(A,{...c,starter:c.starter},R);else if(R){if(!((Z=c.cases)!=null&&Z.length))throw Error("This lesson has no published examples.");Ct=mb(c,A)}else c.mode==="function"&&((De=(we=c.cases)==null?void 0:we[0])!=null&&De.call)&&(Ct=gb(A,c.cases[0].call));const xt=await M.instance.run(Ct);if(R){const tt=y?c.challengeExamples.map(Ue=>({call:(cb(A,"python")||"Function")+"("+Ue.input.map(vt=>JSON.stringify(vt)).join(", ")+")",expected:JSON.stringify(Ue.expected)})):c.cases;Y(Kf(xt.output,tt)),W("Python completed the public checks. Review individual results in Checks.")}else if(y){const tt=Kf(xt.output,[{call:"First published example",expected:JSON.stringify(c.challengeExamples[0].expected)}]);W(tt[0].error||"First example returned "+tt[0].received+". Expected "+tt[0].expected+".")}else if(c.mode==="function"&&((Ie=(qe=c.cases)==null?void 0:qe[0])!=null&&Ie.call)){const tt=String(xt.output||"").split(`
`).find(Ue=>Ue.startsWith("PLAYGROUND_PREVIEW="));if(tt){const Ue=JSON.parse(tt.slice(19));W(Ue.call+`
Returned: `+Ue.returned+(Ue.printed?`
Printed: `+Ue.printed:""))}else W(xt.output||"No return value was captured. See your code and retry.")}else W(xt.output||(xt.success?"Program finished with no printed output.":"The Python program stopped."))}if(G==="java"){if(c.environment==="ide")throw Error("This lesson uses Java 26 file input and must run in a full Java IDE. Browser execution is not supported.");if(y){const Ct=eh(c,"java",A),xt=R?Ct:Ct.slice(0,1),tt=await M.instance.run(pb(A,{...c,challengeExamples:xt}),[]);if(!tt.success)throw Error([tt.stdout,tt.stderr,tt.diagnostics].filter(Boolean).join(`
`));const Ue=hb(tt.stdout,xt);R?Y(Ue):W(Ue.map(vt=>vt.call+`
Received: `+vt.received+`
Expected: `+vt.expected).join(`
`))}else{const Ct=R?c.cases||[]:[{args:c.runArgs||((Be=(ke=c.cases)==null?void 0:ke[0])==null?void 0:Be.args)||[]}];if(R&&!Ct.length)throw Error("No public Java examples are available for this exercise.");const xt=[];for(const tt of Ct){const Ue=await M.instance.run(A,tt.args||[]);if(xt.push(Ue),!Ue.success)break}if(R){const tt=ab(xt,Ct);if(xt.length!==Ct.length)throw Error("Java stopped before completing all published examples: "+(((Ke=xt.at(-1))==null?void 0:Ke.diagnostics)||((et=xt.at(-1))==null?void 0:et.stderr)||"Unknown error"));Y(tt),W("Java completed the published checks. Review the Checks tab.")}else W([($e=xt[0])==null?void 0:$e.stdout,(Ft=xt[0])==null?void 0:Ft.stderr,(Yt=xt[0])==null?void 0:Yt.diagnostics].filter(Boolean).join(`
`)||"Java ran without printed output.")}}if(G==="csharp"){const Ct=M.protocol,xt=y?eh(c,"csharp",A).map(ie=>({...ie,call:Array.isArray(ie.expected)?ie.call+".SequenceEqual("+ie.expectedLiteral+")":ie.call,arrayResult:Array.isArray(ie.expected),expected:Array.isArray(ie.expected)?"true":ie.expectedLiteral})):c.cases||[],tt=y?"Solution":bb(A),Ue=R||y&&xt.length>0;if(R&&!xt.length)throw Error("No public C# examples are available for this exercise.");if(Ue&&!tt)throw Error("The C# checker could not find the public class name.");const vt=R?xt:xt.slice(0,1),yt=Ue?Ct.buildChecks(vt,tt):null,Qe=yt&&vt.some(ie=>ie.arrayResult)?`using System.Linq;
`+yt:yt,ut=await M.instance.run(A,Qe);if(!ut.compiled||!ut.success)throw Error([ut.diagnostics,ut.stderr].filter(Boolean).join(`
`)||"C# could not execute.");if(Ue){const ie=lb(ut.stdout,vt,Ct.parseChecks);R?Y(ie):W(ie.map(je=>je.call+`
Received: `+je.received+`
Expected: `+je.expected).join(`
`))}else W(ut.stdout||"C# executed without printed output.")}}async function K(R){if(!N){I(!0),D(""),Y(null),R?(F("Running published example checks…"),se("Checks")):(W("Preparing runner…"),se(We?"Preview":"Console"));try{if(be){const G=crypto.randomUUID();k.current={token:G,check:R};const M=await _h({code:A,language:c.language,lessonId:l,task:c,token:G,check:R});le(M),W(""),clearTimeout(E.current),E.current=setTimeout(()=>{var Z;((Z=k.current)==null?void 0:Z.token)===G&&(k.current=null,I(!1),W("The preview did not finish within 7 seconds. Check for errors or an infinite loop."),F("Practice timed out. No result was recorded."),C.current&&(C.current.srcdoc="<p>Preview stopped after timeout.</p>"),se("Console"))},7e3)}else await X(R),I(!1)}catch(G){clearTimeout(E.current),k.current=null,I(!1);const M=String((G==null?void 0:G.message)||G);W(M),se("Console"),R&&F("Check unavailable: "+M)}}}function j(R){if(!N){if(R==="Run"||R==="Check"){K(R==="Check");return}if(R==="Save"){fo(p,A),D("Draft saved in this browser only.");return}R==="Reset"&&(V(c.starter||""),fo(p,c.starter||""),Y(null),le(""),F("Choose Check to run published examples again."),W("Starter code restored. No points were recorded."),se(We?"Preview":"Console"))}}return u.jsxs("div",{className:"code-pane",children:[u.jsxs("div",{className:"pane-header",children:[u.jsxs("strong",{children:[u.jsx(Dd,{size:16})," Editor"]}),u.jsxs("div",{className:"right-meta",children:[c.language.toUpperCase()," ",u.jsx(is,{children:"Live practice"})]})]}),u.jsxs("div",{className:"code-workspace",ref:b,style:{"--editor-height":Ce+"px"},children:[u.jsx(Lm,{value:A,language:c.language,onChange:R=>{V(R),(g||y)&&fo(p,R),D(""),Y(null),F("Code changed. Choose Check to run fresh examples.")}}),u.jsx(dc,{axis:"rows",onDrag:ye}),u.jsx(Am,{text:J,checksText:H,checkRows:q,points:c.points,language:c.language,lessonId:l,previewEnabled:We,previewDoc:ge,previewRef:C,activeTab:Te,onTabChange:se})]}),u.jsxs("div",{className:"editor-controls",children:[u.jsxs("div",{children:[["Run","Check","Reset"].map(R=>u.jsx("button",{type:"button",className:"btn",disabled:N,onClick:()=>j(R),children:R},R)),N&&u.jsx("button",{type:"button",className:"btn",onClick:()=>{var R,G,M;(M=(R=_.current)==null?void 0:(G=R.instance).stop)==null||M.call(G),k.current=null,clearTimeout(E.current),I(!1),W("Execution stopped.")},children:"Stop"})]}),u.jsxs("div",{children:[u.jsxs("button",{type:"button",className:"btn",disabled:N,onClick:()=>j("Save"),children:[u.jsx(Td,{size:15})," Save"]}),u.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submission and official grading are not connected in this preview",children:[u.jsx(uh,{size:15})," Submit (not enabled)"]})]})]}),u.jsx("div",{className:"editor-note",role:"status",children:ae||"Run executes code locally; Check tests public examples only. No grades, points or hand-ins are recorded."})]})}const Ch=Object.freeze(["index.html","styles.css","script.js"]),Th=Object.freeze(["index.html","styles.css","App.jsx"]),Om=l=>l==="jsx"?Th:Ch,th=`<!doctype html>
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
</html>`,_b=`<!doctype html>
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
</html>`;function Mm(l){return l.endsWith(".html")?"html":l.endsWith(".css")?"css":l.endsWith(".jsx")?"jsx":"javascript"}function nh(l,c=""){const p=String(c).toLowerCase();return l==="jsx"||p==="react"?"App.jsx":l==="css"||/css|style|readable|responsive/.test(p)?"styles.css":l==="javascript"||/\bjs\b|javascript|script|function|array|object|dom|event|state|team|matchup|pick|scor|leaderboard|test|integrat|interact/.test(p)?"script.js":"index.html"}function Cb(l,c="script.js"){if(!l.trim())return"";let p=l;if(!/<link\b[^>]*href\s*=\s*["']styles\.css["'][^>]*>/i.test(p)){const g=`  <link rel="stylesheet" href="styles.css">
`;p=/<\/head\s*>/i.test(p)?p.replace(/<\/head\s*>/i,g+"</head>"):g+p}if(!p.includes('src="'+c+'"')&&!p.includes("src='"+c+"'")){const g='  <script src="'+c+`" defer><\/script>
`;p=/<\/body\s*>/i.test(p)?p.replace(/<\/body\s*>/i,g+"</body>"):p+`
`+g}return p}function ac(l){let c=String(l??"");const p=[],g=[];return c=c.replace(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi,(y,b)=>(p.push(b.trim().replace(/^(?: {4}|\t)/gm,"")),"")),c=c.replace(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi,(y,b,_)=>/\bsrc\s*=/.test(b)||/\btype\s*=\s*["'](?:application\/json|application\/ld\+json|importmap)["']/i.test(b)?y:(g.push(_.trim().replace(/^(?: {4}|\t)/gm,"")),"")),{"index.html":Cb(c.replace(/\n{3,}/g,`

`).trim(),"script.js"),"styles.css":p.join(`

`),"script.js":g.join(`

`)}}function Dm(l,c){const p=String(c??"");if(l==="jsx")return{"index.html":_b,"styles.css":"","App.jsx":p};if(l==="html")return ac(p);if(l==="css")return{"index.html":th,"styles.css":p,"script.js":""};if(l==="javascript")return{"index.html":th,"styles.css":"","script.js":p};throw Error("Not a web lesson: "+l)}const zm=l=>ac(l);function Xa(l,c){if(![...Ch,...Th].includes(c))throw Error("Unknown workspace file");return l+":file:"+c}function Fm({base:l,starters:c,legacy:p,read:g,write:y}){const b=Object.keys(c),_=Object.fromEntries(b.map(N=>[N,g(Xa(l,N))]));if(b.some(N=>_[N]!==null&&_[N]!==void 0))return Object.fromEntries(b.map(N=>[N,_[N]??c[N]??""]));const k=p!=null?c["App.jsx"]!==void 0?{...c,"App.jsx":p}:Object.prototype.hasOwnProperty.call(c,"index.html")&&(c["styles.css"]||c["script.js"])&&/<html|<style|<script/i.test(p)||c["index.html"]!==void 0&&/<html|<!doctype|<body/i.test(p)?ac(p):{...c,[c["index.html"]===th?c["script.js"]?"script.js":"styles.css":"index.html"]:p}:c,E=Object.fromEntries(b.map(N=>[N,k[N]??c[N]??""]));return b.forEach(N=>y(Xa(l,N),E[N])),E}function Yf(l,c){return String(l??"").replace(new RegExp("</"+c,"gi"),"<\\/"+c)}function Tb(l,{scriptName:c="script.js",scriptOverride:p=null}={}){let g=String((l==null?void 0:l["index.html"])??"");const y=String((l==null?void 0:l["styles.css"])??""),b=String(p===null?(l==null?void 0:l[c])??"":p);let _=!1,C=!1;if(g=g.replace(/<link\b[^>]*>/gi,k=>/\bhref\s*=\s*["'](?:\.\/)?styles\.css["']/i.test(k)&&/\brel\s*=\s*["']stylesheet["']/i.test(k)?(_=!0,'<style data-web-file="styles.css">'+Yf(y,"style")+"</style>"):k),g=g.replace(/<script\b([^>]*)>\s*<\/script\s*>/gi,(k,E)=>{const N=/\bsrc\s*=\s*["']([^"']+)["']/i.exec(E);return N&&N[1].replace(/^\.\//,"")===c?(C=!0,""):k}),C){const k='<script data-web-file="'+c+'">'+Yf(b,"script")+"<\/script>";g=/<\/body\s*>/i.test(g)?g.replace(/<\/body\s*>/i,k+`
</body>`):g+`
`+k}return{html:g,linkedStyle:_,linkedScript:C}}const jb=Object.freeze(Object.defineProperty({__proto__:null,REACT_FILE_NAMES:Th,WEB_FILE_NAMES:Ch,assembleWebFiles:Tb,fileLanguage:Mm,fileNamesFor:Om,initialFocus:nh,lessonStarterFiles:Dm,loadWebDrafts:Fm,projectStarterFiles:zm,splitEmbeddedWebSource:ac,webDraftKey:Xa},Symbol.toStringTag,{value:"Module"}));function Wm({lessonId:l,task:c}){const p=Sh.code(l),g=Om(c.language),y=c.starterFiles||(c.projectDraft?zm(c.starter):Dm(c.language,c.starter)),[b,_]=Se.useState(()=>Fm({base:p,starters:y,legacy:Ad(p),read:Ad,write:fo})),[C,k]=Se.useState(()=>nh(c.language,c.focus)),[E,N]=Se.useState("Run to render all your linked files together."),[I,A]=Se.useState("Check runs the current published practice requirements."),[V,J]=Se.useState(null),[W,ae]=Se.useState(""),[D,H]=Se.useState("Preview"),[F,q]=Se.useState(""),[Y,ge]=Se.useState(!1),[le,be]=cn("designlab:web-files-editor-height",310),We=Se.useRef(null),Te=Se.useRef(null),se=Se.useRef(null),Ce=Se.useRef(null);Se.useEffect(()=>{const M=nh(c.language,c.focus);k(g.includes(M)?M:"index.html")},[c.stepId,c.focus,c.language]),Se.useEffect(()=>{const M=Z=>{var qe;const we=Te.current;if(!we||!We.current||Z.source!==We.current.contentWindow||((qe=Z.data)==null?void 0:qe.token)!==we.token)return;const De=Z.data;De.kind==="log"&&N(Ie=>Ie+(De.level==="error"?"Error: ":"")+De.text+`
`),De.kind==="clear"&&N(""),De.kind==="error"&&(clearTimeout(se.current),Te.current=null,N(Ie=>Ie+"Error: "+De.text+`
`),A("Fix the error reported in Console before checking again."),H("Console"),ge(!1)),(De.kind==="checks"||De.kind==="project-checks")&&(clearTimeout(se.current),Te.current=null,J(Pm(De.results||(De.text?[{label:De.text,pass:De.pass}]:[]))),H("Checks"),ge(!1)),De.kind==="ready"&&!we.check&&(clearTimeout(se.current),Te.current=null,ge(!1))};return window.addEventListener("message",M),()=>{clearTimeout(se.current),Te.current=null,window.removeEventListener("message",M)}},[]);function oe(M){_(Z=>({...Z,[C]:M})),fo(Xa(p,C),M),q(""),J(null),A("Code changed. Check again to update the results.")}function ye(){g.forEach(M=>fo(Xa(p,M),b[M]??"")),q("All three files saved in this browser only.")}function L(){window.confirm("Restore all three starter files? Your current saved changes will be replaced.")&&(_({...y}),g.forEach(M=>fo(Xa(p,M),y[M]??"")),J(null),ae(""),N("Starter files restored."),A("Run Check to evaluate the restored files."),H("Preview"),q("Starter files restored for this lesson or project."))}function X(){const M=b[C]||"",Z=document.createElement("a"),we=URL.createObjectURL(new Blob([M],{type:"text/plain;charset=utf-8"}));Z.href=we,Z.download=C,document.body.append(Z),Z.click(),Z.remove(),setTimeout(()=>URL.revokeObjectURL(we),2e3)}function K(){clearTimeout(se.current),Te.current=null,ge(!1),ae("<p>Preview stopped.</p>"),N("Preview stopped. Check your script for an endless loop."),H("Console")}async function j(M){var Z;if(!Y){ge(!0),J(null),q(""),N(""),A(M?"Checking the published requirements…":"Run Check to review the published requirements."),H(M?"Checks":"Preview");try{R();const we=crypto.randomUUID();Te.current={token:we,check:M};const De=await _h({language:c.language,code:b[C]||"",lessonId:c.lessonFocus||l,task:{...c,webFiles:b},token:we,check:M});if(((Z=Te.current)==null?void 0:Z.token)!==we)return;ae(De),clearTimeout(se.current),se.current=setTimeout(()=>{var qe;((qe=Te.current)==null?void 0:qe.token)===we&&(K(),A("The preview timed out. No result was recorded."))},7e3)}catch(we){clearTimeout(se.current),Te.current=null,ge(!1),N(String((we==null?void 0:we.message)||we)),A("Checks unavailable: "+String((we==null?void 0:we.message)||we)),H("Console")}}}function R(){g.forEach(M=>fo(Xa(p,M),b[M]||""))}function G(M){if(!Ce.current)return;const Z=Ce.current.getBoundingClientRect();be(Math.max(160,Math.min(Z.height-120,M.clientY-Z.top)))}return u.jsxs("div",{className:"code-pane web-files-pane",children:[u.jsxs("div",{className:"pane-header",children:[u.jsxs("strong",{children:[u.jsx(Dd,{size:16})," Project files"]}),u.jsxs("span",{className:"web-file-badge",children:["HTML + CSS + ",c.language==="jsx"?"React":"JavaScript"]})]}),u.jsx("div",{className:"web-file-tabs",role:"tablist","aria-label":"Source files",children:g.map(M=>u.jsx("button",{type:"button",role:"tab","aria-selected":M===C,className:M===C?"active":"",onClick:()=>k(M),children:M},M))}),u.jsxs("div",{className:"code-workspace",ref:Ce,style:{"--editor-height":le+"px"},children:[u.jsx(Lm,{value:b[C]??"",language:Mm(C),onChange:oe},C),u.jsx(dc,{axis:"rows",onDrag:G}),u.jsx(Am,{text:E,checksText:I,checkRows:V,points:null,language:"html",previewEnabled:!0,previewDoc:W,previewRef:We,activeTab:D,onTabChange:H})]}),u.jsxs("div",{className:"editor-controls",children:[u.jsxs("div",{children:[u.jsx("button",{type:"button",className:"btn",disabled:Y,onClick:()=>j(!1),children:"Run"}),u.jsx("button",{type:"button",className:"btn",disabled:Y,onClick:()=>j(!0),children:"Check"}),u.jsx("button",{type:"button",className:"btn",disabled:Y,onClick:L,children:"Reset"}),Y&&u.jsx("button",{type:"button",className:"btn",onClick:K,children:"Stop"})]}),u.jsxs("div",{children:[u.jsxs("button",{type:"button",className:"btn",disabled:Y,onClick:X,children:[u.jsx(ky,{size:15})," Download file"]}),u.jsxs("button",{type:"button",className:"btn",disabled:Y,onClick:ye,children:[u.jsx(Td,{size:15})," Save"]}),u.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submissions and grading are not connected",children:[u.jsx(uh,{size:15})," Submit (not enabled)"]})]})]}),u.jsx("div",{className:"editor-note",role:"status",children:F||"Edit one file at a time. The HTML link to styles.css and script tag for script.js (or App.jsx) connect the files. Drafts save locally; practice checks award no points."})]})}function Nb({lessonId:l,onAnswerChecked:c}){const p=hh[l],[g,y]=Se.useState(null),[b,_]=Se.useState(!1);function C(){_(!0),c==null||c({selected:g,correct:g===p.correct})}function k(){y(null),_(!1),c==null||c(null)}return u.jsxs("section",{className:"tsi-practice","aria-label":"Math question",children:[u.jsxs("div",{className:"tsi-practice-heading",children:[u.jsx(sm,{size:20}),u.jsxs("div",{children:[u.jsx("h2",{children:"Try this question"}),u.jsx("p",{children:"Choose an answer, then review the explanation on the right."})]})]}),u.jsxs("div",{className:"tsi-question-card",children:[u.jsx("div",{className:"eyebrow",children:"Question"}),u.jsx("h3",{children:p.prompt}),u.jsx("div",{className:"tsi-answers",role:"radiogroup","aria-label":"Choose the correct answer",children:p.options.map((E,N)=>u.jsxs("label",{className:`tsi-choice ${g===N?"selected":""} ${b&&N===p.correct?"correct":""}`,children:[u.jsx("input",{type:"radio",name:`tsi-${l}`,checked:g===N,disabled:b,onChange:()=>y(N)}),u.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+N)}),u.jsx("span",{children:E})]},E))}),b&&u.jsx("p",{className:"tsi-answer-status",role:"status",children:g===p.correct?"Correct! Read why on the right.":"Not quite. Review the explanation on the right."}),u.jsxs("div",{className:"tsi-buttons",children:[u.jsx("button",{className:"btn primary",disabled:g===null||b,onClick:C,children:"Check answer"}),u.jsxs("button",{className:"btn",onClick:k,children:[u.jsx(Fd,{size:15})," Try again"]})]})]})]})}function Eb(l){const c=String(l||""),p=c.indexOf("## Learn"),g=c.indexOf("## Practice"),y=c.indexOf("## Reflect");if(p<0||g<p)return{learn:"",reflect:"",questions:[]};const b=c.slice(p,g).trim(),_=c.slice(g,y>g?y:void 0),C=y>g?c.slice(y).trim():"",k=[..._.matchAll(/###\s+(\d+)\.\s+([^\n]+)\n([\s\S]*?)(?=\n###\s+\d+\.|$)/g)].map(E=>({number:Number(E[1]),prompt:E[2].trim(),options:[...E[3].matchAll(/-\s+\*\*([A-D])\.\*\*\s+([^\n]+)/g)].map(N=>({letter:N[1],text:N[2].trim()}))}));return{learn:b,reflect:C,questions:k}}function Lb({task:l}){var N;const c=Se.useMemo(()=>Eb(l.markdownSource),[l.markdownSource]),p=((N=l.tsiKey)==null?void 0:N.items)||[],[g,y]=Se.useState({}),[b,_]=Se.useState(!1),C=c.questions.filter(I=>{var A;return g[I.number]===((A=p.find(V=>V.question===I.number))==null?void 0:A.correct)}).length,k=c.questions.length===4&&c.questions.every(I=>I.options.length===4),E=k&&p.length===4&&Object.keys(g).length===4;return k?u.jsxs("div",{className:"tsi-strand-workspace",children:[u.jsxs("section",{className:"surface-card tsi-strand-questions","aria-label":"TSI math questions",children:[u.jsxs("div",{className:"tsi-strand-panel-heading",children:[u.jsx("span",{className:"eyebrow",children:"Practice"}),u.jsx("h2",{children:"Questions"}),u.jsx("p",{children:"Solve each problem, then check your answers against the explanations on the right."})]}),u.jsxs("form",{onSubmit:I=>{I.preventDefault(),E&&_(!0)},children:[c.questions.map(I=>{var V;const A=(V=p.find(J=>J.question===I.number))==null?void 0:V.correct;return u.jsxs("fieldset",{className:"tsi-strand-question",disabled:b,children:[u.jsxs("legend",{children:[u.jsx("span",{className:"tsi-strand-question-number",children:I.number})," ",I.prompt]}),u.jsx("div",{className:"tsi-strand-options",children:I.options.map(J=>u.jsxs("label",{className:["tsi-strand-option",g[I.number]===J.letter?"selected":"",b&&A===J.letter?"correct":""].filter(Boolean).join(" "),children:[u.jsx("input",{type:"radio",name:l.id+"-q"+I.number,value:J.letter,checked:g[I.number]===J.letter,onChange:()=>{y(W=>({...W,[I.number]:J.letter})),_(!1)}}),u.jsx("span",{className:"tsi-strand-letter",children:J.letter}),u.jsx("span",{children:J.text})]},J.letter))}),b&&u.jsx("p",{className:"tsi-strand-question-status",role:"status",children:g[I.number]===A?"Correct":"Review question "+I.number+" on the right"})]},I.number)}),u.jsxs("div",{className:"tsi-strand-actions",children:[u.jsx("button",{type:"submit",className:"btn primary",disabled:!E||b,children:"Check answers"}),u.jsxs("button",{type:"button",className:"btn",onClick:()=>{y({}),_(!1)},children:[u.jsx(Fd,{size:15})," Try again"]})]}),u.jsx("p",{className:"tsi-strand-progress",role:"status",children:b?C+" of 4 correct · instructional practice only":Object.keys(g).length+" of 4 answered"})]})]}),u.jsxs("section",{className:"surface-card tsi-strand-explanations","aria-label":"Math explanations",children:[u.jsxs("div",{className:"tsi-strand-panel-heading",children:[u.jsx("span",{className:"eyebrow",children:"Learn"}),u.jsxs("h2",{children:[u.jsx(Yl,{size:20,"aria-hidden":"true"})," Worked explanations"]})]}),u.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Za(c.learn)}}),u.jsxs("div",{className:"tsi-strand-review","aria-live":"polite",children:[u.jsx("h3",{children:b?u.jsxs(u.Fragment,{children:[u.jsx(sc,{size:18})," Answer explanations"]}):"Review your answers"}),b?c.questions.map(I=>{const A=p.find(V=>V.question===I.number);return u.jsxs("article",{className:"tsi-strand-answer",children:[u.jsxs("h4",{children:["Question ",I.number," · ",g[I.number]===(A==null?void 0:A.correct)?"Correct":"Needs review"]}),u.jsxs("p",{children:["Your choice: ",g[I.number]," · Correct: ",A==null?void 0:A.correct]}),u.jsx("p",{children:(A==null?void 0:A.explanation)||"A worked explanation is not yet available."})]},I.number)}):u.jsxs("p",{children:["Complete all four questions and choose ",u.jsx("strong",{children:"Check answers"})," to see the explanations for each."]})]}),c.reflect&&u.jsx("div",{className:"tsi-strand-reflect markdown-preview",dangerouslySetInnerHTML:{__html:Za(c.reflect)}})]}),u.jsx("p",{className:"tsi-strand-disclaimer",children:"Draft TSI instructional practice · 30 minutes · Not an official TSIA2 assessment. Answers in this React preview are not submitted or graded."})]}):u.jsxs("section",{className:"surface-card tsi-strand-error",role:"alert",children:[u.jsx("h2",{children:"Practice questions unavailable"}),u.jsx("p",{children:"This draft lesson's multiple-choice questions could not be loaded. No sample questions were substituted."})]})}const kd=[["quantitative","Quantitative Reasoning"],["algebraic","Algebraic Reasoning"],["geometry","Geometric and Spatial Reasoning"],["statistics","Probabilistic and Statistical Reasoning"]];function Pb(l){const c=l.answer,p=Number.isInteger(c)?Math.max(1,Math.round(Math.abs(c)*.15)):Math.max(.125,Math.round(Math.abs(c)*.2*1e3)/1e3),g=[c+p,c-p,c+2*p].map(y=>Number(y.toFixed(4)));return g.splice(l.correct_index??0,0,c),g}function Ab(l,c){return Object.fromEntries(kd.map(([p])=>{const g=l.filter(b=>b.strand===p),y=g.filter(b=>c[b.id]!=="skip"&&Number(c[b.id])===b.answer).length;return[p,{correct:y,total:g.length,level:y===g.length?"Advanced":y>=Math.ceil(g.length*.6)?"Proficient":"Basic"}]}))}function Rb({items:l=[],profiles:c=[]}){var ae,D,H;const[p,g]=Se.useState({}),[y,b]=Se.useState(""),[_,C]=Se.useState(""),[k,E]=cn("designlab:tsi-math-placement",{}),[N,I]=Se.useState(null),A=Se.useMemo(()=>kd.map(([F,q])=>({id:F,title:q,items:l.filter(Y=>Y.strand===F)})),[l]),V=N||((ae=k.diagnostic)==null?void 0:ae.latest)&&k.diagnostic.latest.placement;function J(F){F.preventDefault();const q=c.find(Y=>Y.code===y.trim().toUpperCase());if(!q){C("Enter a valid MATH01–MATH81 study code.");return}E(Y=>({...Y,code:q.code,levels:q.levels})),C("Study code applied in this browser. It does not enroll you in a class.")}function W(F){if(F.preventDefault(),l.some(le=>p[le.id]===void 0)){C("Answer or select Not sure for every question.");return}const q=Ab(l,p),Y=Object.fromEntries(Object.entries(q).map(([le,be])=>[le,be.level])),ge={at:new Date().toISOString(),placement:q,levels:Y,answers:p};E(le=>{var be;return{...le,levels:Y,diagnostic:{first:((be=le.diagnostic)==null?void 0:be.first)||ge,latest:ge}}}),I(q),C("Your recommended starting levels are ready. Results are stored in this browser only.")}return u.jsxs("div",{className:"published-reading surface-card tsi-diagnostic",children:[u.jsx("h2",{children:"Find your starting point"}),u.jsx("p",{children:"This is the existing 24-question, four-strand practice diagnostic. It suggests what to study; it does not predict an official TSIA2 score or assign an enrolled class."}),u.jsxs("form",{onSubmit:J,className:"tsi-code-entry",children:[u.jsx("label",{htmlFor:"math-locator-code",children:"Pearson study code (MATH01–MATH81)"}),u.jsx("input",{id:"math-locator-code",type:"text",placeholder:"MATH01",maxLength:6,value:y,onChange:F=>b(F.target.value)}),u.jsx("button",{className:"btn",type:"submit",children:"Apply code"})]}),!!k.code&&u.jsxs("p",{role:"status",children:["Current code: ",u.jsx("strong",{children:k.code}),"."," ","Recommended levels: ",kd.map(([F,q])=>{var Y;return q+": "+((Y=k.levels)==null?void 0:Y[F])}).join(" · ")]}),u.jsxs("form",{onSubmit:W,children:[u.jsx("h3",{children:"Take the diagnostic"}),u.jsxs("p",{children:["Choose one answer or Not sure for all ",l.length," questions. This open practice records your first and latest attempts in this browser, not the live gradebook."]}),A.map(F=>u.jsxs("section",{className:"tsi-diagnostic-strand",children:[u.jsx("h3",{children:F.title}),F.items.map(q=>u.jsxs("fieldset",{className:"tsi-question",children:[u.jsx("legend",{children:q.prompt}),u.jsxs("div",{className:"tsi-answers",children:[Pb(q).map((Y,ge)=>u.jsxs("label",{className:"tsi-choice",children:[u.jsx("input",{type:"radio",name:q.id,value:Y,checked:p[q.id]===String(Y),onChange:()=>g(le=>({...le,[q.id]:String(Y)}))}),u.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+ge)}),u.jsx("span",{children:Y})]},ge)),u.jsxs("label",{className:"tsi-choice",children:[u.jsx("input",{type:"radio",name:q.id,value:"skip",checked:p[q.id]==="skip",onChange:()=>g(Y=>({...Y,[q.id]:"skip"}))}),u.jsx("span",{children:"Not sure"})]})]})]},q.id))]},F.id)),u.jsx("button",{type:"submit",className:"btn primary",children:"Get my recommended levels"})]}),!!_&&u.jsx("p",{role:"status",children:_}),V&&u.jsxs("section",{className:"tsi-diagnostic-results","aria-label":"Diagnostic results",children:[u.jsx("h3",{children:"Recommended starting levels"}),kd.map(([F,q])=>u.jsxs("p",{children:[u.jsxs("strong",{children:[q,": ",V[F].level]})," (",V[F].correct," of ",V[F].total," correct)"]},F)),u.jsx("p",{children:"This diagnostic is instructional, not a verified measure of college readiness. All published lessons remain available regardless of recommendation."}),!!((D=k.diagnostic)!=null&&D.first)&&!!((H=k.diagnostic)!=null&&H.latest)&&u.jsxs("p",{children:["First attempt: ",new Date(k.diagnostic.first.at).toLocaleDateString()," · Latest: ",new Date(k.diagnostic.latest.at).toLocaleDateString()]})]})]})}function Ib({lessonId:l,course:c,unit:p,unitNumber:g,isCompleted:y=!1,assignment:b=null,grade:_=null,onToggleCompleted:C}){var ae;const k=na(c,l),E=Se.useRef(null),[N,I]=Se.useState(null),[A,V]=cn("designlab:left-width",420);function J(D){if(!E.current)return;const H=E.current.getBoundingClientRect();V(Math.max(260,Math.min(H.width-340,D.clientX-H.left)))}const W=c.id==="tsi-math";return W&&l==="tsi-20d-d01"&&((ae=c.diagnosticItems)!=null&&ae.length)?u.jsxs("div",{className:"lesson-screen",children:[u.jsxs("header",{className:"lesson-header",children:[u.jsx("div",{className:"eyebrow",children:"Day 1 · TSI Math Advisory"}),u.jsx("h1",{children:k.title}),u.jsx("p",{children:"Diagnostic placement · 30-minute advisory plan"})]}),u.jsx(Rb,{items:c.diagnosticItems,profiles:c.locatorProfiles})]}):k!=null&&k.ready?W&&k.tsiStrandDraft?u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Vu,{task:k,unit:p,unitNumber:g,isTsi:!0,isCompleted:y,assignment:b,grade:_,onToggleCompleted:C}),u.jsx(Lb,{task:k})]}):k.language==="text"&&!W?u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Vu,{task:k,unit:p,unitNumber:g,isTsi:!1,isCompleted:y,assignment:b,grade:_,onToggleCompleted:C}),u.jsxs("section",{className:"surface-card published-reading",children:[u.jsx("p",{className:"muted",children:"Published written-practice material. Answer checking and verified scores remain on the current Playground."}),u.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Za(k.markdownSource)}})]})]}):W&&!hh[l]?u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Vu,{task:k,unit:p,unitNumber:g,isTsi:!0,isCompleted:y,assignment:b,grade:_,onToggleCompleted:C}),u.jsxs("section",{className:"surface-card published-reading",children:[u.jsx("p",{className:"muted",children:"Published draft lesson · practice shown for learning, not an official TSIA2 score predictor."}),u.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Za(k.markdownSource)}})]})]}):u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Vu,{task:k,unit:p,unitNumber:g,isTsi:W,isCompleted:y,assignment:b,grade:_,onToggleCompleted:C}),u.jsxs("div",{className:`workspace-grid ${W?"tsi-workspace":""}`,ref:E,style:{"--left-pane":`${A}px`},children:[W?u.jsx(Nb,{lessonId:l,onAnswerChecked:I}):u.jsx(kf,{lessonId:l,task:k}),u.jsx(dc,{axis:"columns",onDrag:J}),W?u.jsx(kf,{lessonId:l,task:k,isTsi:!0,tsiAnswer:N}):c.id==="mobile-app-dev"&&["html","css","javascript","jsx"].includes(k.language)?u.jsx(Wm,{lessonId:l,task:{...k,lessonFocus:l}},l):u.jsx(Im,{lessonId:l,task:k})]})]}):u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Vu,{task:k,unit:p,unitNumber:g,isTsi:W,isCompleted:y,assignment:b,grade:_,onToggleCompleted:C}),u.jsxs("section",{className:"lesson-content-pending surface-card",children:[u.jsx("h2",{children:"Lesson coming soon"}),u.jsx("p",{children:"This scheduled lesson has not been authored yet. No practice or scores are available."})]})]})}function Ob({course:l,project:c,stepId:p,openProject:g}){const y=c.steps||[],b=Math.max(0,y.findIndex(V=>V.id===p)),_=y[b],C=Se.useRef(null),[k,E]=cn("designlab:project-left-width",430),N="project:"+l.id+":"+c.id,I={id:N,title:c.title,language:c.language||"html",starter:c.starter||"",starterFiles:c.starterFiles||null,challenge:c.summary||"",console:"Run to see your actual page. Check tests the published step requirements in a sandboxed browser preview.",projectDraft:!0,isPublished:!1,projectId:c.id,stepId:_.id,focus:_.focus};function A(V){if(!C.current)return;const J=C.current.getBoundingClientRect();E(Math.max(260,Math.min(J.width-340,V.clientX-J.left)))}return u.jsxs("div",{className:"lesson-screen project-workspace",children:[u.jsxs("header",{className:"lesson-header",children:[u.jsxs("div",{className:"eyebrow",children:["Published guided project · ",y.length," steps"]}),u.jsx("h1",{children:c.title}),u.jsx("p",{children:c.summary}),u.jsx("p",{className:"muted",children:"Run renders your actual project and Check tests the current step. Drafts save in this browser; Submit and verified grading remain disabled."})]}),u.jsx("nav",{className:"project-step-list","aria-label":"Project steps",children:y.map((V,J)=>u.jsxs("button",{type:"button","aria-current":J===b?"step":void 0,className:J===b?"btn primary":"btn",onClick:()=>g(l.id,c.id,V.id),children:[J+1,". ",V.title]},V.id))}),u.jsxs("div",{className:"workspace-grid",ref:C,style:{"--left-pane":k+"px"},children:[u.jsxs("section",{className:"instructions-pane project-reading",children:[u.jsx("div",{className:"pane-header",children:u.jsxs("strong",{children:["Step ",b+1,": ",_.title]})}),u.jsxs("p",{className:"web-files-reading-note",children:["This published walkthrough was originally written for one HTML file. When it says to add a <style> or <script> block, put that code in",u.jsx("code",{children:"styles.css"})," or ",u.jsx("code",{children:"script.js"})," instead. Keep the file links in",u.jsx("code",{children:"index.html"}),"; Run connects them automatically."]}),u.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Za(_.markdownSource)}})]}),u.jsx(dc,{axis:"columns",onDrag:A}),u.jsx(Wm,{lessonId:N,task:I})]}),u.jsxs("nav",{className:"lesson-next-bar","aria-label":"Project step navigation",children:[b>0&&u.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>g(l.id,c.id,y[b-1].id),children:[u.jsx(Md,{size:16})," ",u.jsxs("span",{children:["Prev: ",y[b-1].title]})]}),b<y.length-1&&u.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>g(l.id,c.id,y[b+1].id),children:[u.jsxs("span",{children:["Next: ",y[b+1].title]})," ",u.jsx(ti,{size:16})]})]})]})}function Mb({courseId:l,lessonId:c,projectId:p,projectStepId:g,availableCourses:y=ns,openCourse:b,openProject:_,openChallenges:C,completedLessons:k=[],assignments:E=[],grades:N=[],onToggleLessonComplete:I,courseColors:A={},onSetCourseColor:V,onResetCourseColor:J}){const W=y.find(Y=>Y.id===l)||y[0];if(W.id==="test-prep")return u.jsx(Vy,{lessonId:c,openCourse:b,completedLessons:k,onToggleLessonComplete:I});const ae=(W.projects||[]).find(Y=>Y.id===p),D=rc(W),H=W.units.findIndex(Y=>rs(Y).includes(c)),F=W.units[H],q=D.indexOf(c);return u.jsx("div",{className:"course-layout integrated-course","data-course":W.id,children:u.jsxs("div",{className:"course-main",children:[u.jsxs("div",{className:"course-breadcrumb",children:[u.jsx("button",{onClick:()=>b(null),children:"All playgrounds"}),u.jsx(ti,{size:14}),c||ae?u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:()=>b(W.id),children:W.label}),u.jsx(ti,{size:14}),u.jsx("span",{className:"breadcrumb-unit-name",title:F?Rs(F):"",children:F?Rs(F):(ae==null?void 0:ae.title)||""})]}):u.jsx("span",{children:W.label})]}),ae?u.jsx(Ob,{course:W,project:ae,stepId:g,openProject:_},ae.id):c?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"lesson-mobile-navigation",children:[u.jsx("label",{htmlFor:"lesson-select",children:"Lesson"}),u.jsx("select",{id:"lesson-select",value:c,onChange:Y=>b(W.id,Y.target.value),children:W.units.map((Y,ge)=>u.jsx("optgroup",{label:`Unit ${ge+1} · ${Rs(Y)}`,children:rs(Y).map(le=>u.jsx("option",{value:le,children:ra(W,le)},le))},Y.id))})]}),u.jsx(Ib,{lessonId:c,course:W,unit:F,unitNumber:H+1,isCompleted:k.includes(c),assignment:E.find(Y=>Y.id==="lesson:"+c),grade:N.find(Y=>Y.id==="lesson:"+c),onToggleCompleted:()=>I==null?void 0:I(c)},c),u.jsxs("nav",{className:"lesson-next-bar","aria-label":"Lesson sequence",children:[q>0&&u.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>b(W.id,D[q-1]),children:[u.jsx(Md,{size:16,"aria-hidden":"true"}),u.jsxs("span",{children:["Prev: ",ra(W,D[q-1])]})]}),q>=0&&q<D.length-1&&u.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>b(W.id,D[q+1]),children:[u.jsxs("span",{children:["Next: ",ra(W,D[q+1])]}),u.jsx(ti,{size:16,"aria-hidden":"true"})]})]})]}):u.jsx(Gy,{course:W,openCourse:b,openProject:_,openChallenges:C,completedLessons:k,assignments:E,grades:N,courseColors:A,onSetCourseColor:V,onResetCourseColor:J})]})})}const yo=[{id:"p1",period:"1",name:"Period 1",course:"computer-science-1"},{id:"p3",period:"3",name:"Period 3",course:"computer-science-1"},{id:"p5",period:"5",name:"Period 5",course:"mobile-app-dev"},{id:"p6",period:"6",name:"Period 6",course:"game-programming"},{id:"p7",period:"7",name:"Period 7",course:"mobile-app-dev"},{id:"p8",period:"8",name:"Period 8",course:"computer-science-1"}],Hm=l=>yo.find(c=>c.id===l),Bm=l=>{var c;return(c=Hm(l))==null?void 0:c.period},Db=[...new Set(yo.map(l=>l.period))].sort((l,c)=>Number(l)-Number(c)),Um=[{key:"2026-11-02",label:"Nov 2 – Nov 8, 2026"},{key:"2026-10-26",label:"Oct 26 – Nov 1, 2026"}],Vl=l=>{var c,p;return((c=l.sheetName)==null?void 0:c.trim())||((p=l.studentName)==null?void 0:p.trim())||l.github},Vf=l=>(l.sheetName||l.studentName||"").trim().split(/\s+/),qm=(l,c,p)=>{const g=y=>p==="github"?y.github.toLowerCase():p==="first"?(Vf(y)[0]||y.github).toLowerCase():(Vf(y).at(-1)||y.github).toLowerCase();return g(l).localeCompare(g(c),void 0,{numeric:!0})||l.github.localeCompare(c.github)},zb=[["last","Last name"],["first","First name"],["github","GitHub username"]];function Fb({sectionId:l,onSectionChange:c,setupOpen:p,onToggleSetup:g}){return u.jsxs("div",{className:"teacher-toolbar",children:[u.jsxs("label",{children:["Class section",u.jsx("select",{value:l,onChange:y=>c(y.target.value),children:yo.map(y=>u.jsxs("option",{value:y.id,children:[y.name," · ",sh(y.course)]},y.id))})]}),u.jsxs("button",{type:"button",className:"btn section-setup-toggle","aria-expanded":p,"aria-controls":"teacher-section-setup",onClick:g,children:[p?u.jsx(Wd,{size:16}):u.jsx(ch,{size:16}),p?"Close section setup":"Section setup"]})]})}const Wb=[["overview","Class overview",lh],["curriculum","Curriculum",Yl],["journals","Journals",ah]];function Hb({tab:l,onChange:c}){return u.jsx("div",{className:"tabs teacher-tabs",role:"tablist","aria-label":"Teacher dashboard tabs",children:Wb.map(([p,g,y])=>u.jsxs("button",{type:"button",role:"tab","aria-selected":l===p,className:l===p?"active":"",onClick:()=>c(p),children:[u.jsx(y,{size:16}),g]},p))})}function Bb({section:l}){return u.jsxs("div",{className:"section-banner",children:[u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Selected section"}),u.jsxs("h2",{children:[l.name," ",u.jsxs("span",{className:"muted",children:["· ",sh(l.course)]})]})]}),u.jsx(is,{children:"Demo join code: LOCAL01"})]})}function Ub({students:l}){const c=[[l.length,"Enrolled students"],[l.filter(p=>p.status==="Active now").length,"Recently interacting"],[l.filter(p=>p.sheetName).length,"Sheet names matched"]];return u.jsx("div",{className:"stat-grid",children:c.map(([p,g])=>u.jsxs("div",{className:"stat-card",children:[u.jsx("strong",{children:p}),u.jsx("span",{children:g})]},g))})}function qb({students:l,week:c,setWeek:p}){const g=Se.useMemo(()=>[...l].sort((y,b)=>(b.weekly[c]||0)-(y.weekly[c]||0)),[l,c]);return u.jsxs("section",{className:"panel",children:[u.jsxs("div",{className:"section-heading",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"Weekly points"}),u.jsx("p",{children:"Mock verified points · Monday–Sunday in Central Time"})]}),u.jsxs("label",{children:["Week",u.jsx("select",{value:c,onChange:y=>p(y.target.value),children:Um.map(y=>u.jsx("option",{value:y.key,children:y.label},y.key))})]})]}),u.jsx("div",{className:"overflow",children:u.jsxs("table",{className:"data-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Student"}),u.jsx("th",{children:"Weekly points"}),u.jsx("th",{children:"Sample assignments"})]})}),u.jsx("tbody",{children:g.map(y=>u.jsxs("tr",{children:[u.jsxs("th",{children:[Vl(y),u.jsxs("small",{children:["@",y.github]})]}),u.jsx("td",{children:u.jsx("strong",{children:y.weekly[c]||0})}),u.jsx("td",{children:y.assignments.filter(b=>b.score!==null).length})]},y.id))})]})})]})}function Km({label:l,value:c,onChange:p}){return u.jsxs("label",{children:[l,u.jsx("select",{value:c,onChange:g=>p(g.target.value),children:zb.map(([g,y])=>u.jsx("option",{value:g,children:y},g))})]})}const Kb=l=>l.includes("Completed")?"success":l==="Needs revision"?"warning":"";function $b({student:l,week:c}){const[p,g]=Se.useState(null),y=l.assignments,b=y.filter(C=>C.status==="Completed"||C.status==="Practice completed").length,_=y.filter(C=>C.score!==null).length;return u.jsxs("div",{className:"expanded-student",children:[u.jsxs("div",{className:"expanded-header",children:[u.jsxs("div",{children:[u.jsx("h3",{children:"Assignment history"}),u.jsxs("p",{className:"muted",children:["Sample records for ",Vl(l),". No student data is loaded."]})]}),u.jsxs(is,{tone:"success",children:[l.weekly[c]||0," verified pts this week"]})]}),u.jsxs("div",{className:"mini-stats",children:[u.jsxs("span",{children:[u.jsx("strong",{children:b})," completed"]}),u.jsxs("span",{children:[u.jsx("strong",{children:_})," graded"]}),u.jsxs("span",{children:[u.jsx("strong",{children:y.length})," tracked"]})]}),u.jsx("div",{className:"overflow",children:u.jsxs("table",{className:"data-table assignment-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Assignment"}),u.jsx("th",{children:"Status"}),u.jsx("th",{children:"Score"}),u.jsx("th",{children:"Updated"}),u.jsx("th",{children:"Action"})]})}),u.jsx("tbody",{children:y.map(C=>{const k=p===C.id;return u.jsxs(Se.Fragment,{children:[u.jsxs("tr",{children:[u.jsxs("th",{children:[C.name,u.jsx("small",{children:C.type})]}),u.jsx("td",{children:u.jsx(is,{tone:Kb(C.status),children:C.status})}),u.jsx("td",{children:C.score===null?"—":`${C.score} / ${C.possible}`}),u.jsx("td",{children:C.submitted}),u.jsx("td",{children:u.jsx("button",{className:"small-link",onClick:()=>g(k?null:C.id),children:k?"Hide details":"View details"})})]}),k&&u.jsx("tr",{className:"receipt-preview",children:u.jsxs("td",{colSpan:"5",children:[u.jsx("strong",{children:"Sample assignment detail"}),u.jsx("p",{children:"This is a mock submitted-copy preview for layout testing, not the student's actual code."})]})})]},C.id)})})]})})]})}function Gb({students:l,week:c,sort:p,setSort:g,expanded:y,setExpanded:b}){return u.jsxs("section",{className:"panel",children:[u.jsxs("div",{className:"section-heading",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"Section roster & activity"}),u.jsx("p",{children:"Click a student's name to expand their assignments directly inside the roster."})]}),u.jsx(Km,{label:"Sort students by",value:p,onChange:g})]}),u.jsx("div",{className:"overflow",children:u.jsxs("table",{className:"data-table roster-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Student"}),u.jsx("th",{children:"Activity signal"}),u.jsx("th",{children:"Current activity"}),u.jsx("th",{children:"Practice"}),u.jsx("th",{children:"Hand-ins"})]})}),u.jsx("tbody",{children:l.map(_=>{const C=y===_.id;return u.jsxs(Se.Fragment,{children:[u.jsxs("tr",{className:C?"selected-row":"",children:[u.jsxs("th",{children:[u.jsxs("button",{className:"student-name-button","aria-expanded":C,onClick:()=>b(C?null:_.id),children:[C?u.jsx(om,{size:16}):u.jsx(ti,{size:16})," ",Vl(_)]}),u.jsxs("small",{children:["@",_.github,_.sections.length>1?" · Sheet periods 1, 3":""]})]}),u.jsx("td",{children:u.jsx(is,{tone:_.status==="Active now"?"success":"",children:_.status})}),u.jsx("td",{children:_.current}),u.jsxs("td",{children:[_.assignments.filter(k=>k.status.includes("Completed")).length," complete"]}),u.jsx("td",{children:_.assignments.filter(k=>k.score!==null).length})]}),C&&u.jsx("tr",{className:"expansion-row",children:u.jsx("td",{colSpan:"5",children:u.jsx($b,{student:_,week:c})})})]},_.id)})})]})})]})}function Yb({section:l,students:c,week:p,setWeek:g,sort:y,setSort:b,expanded:_,setExpanded:C}){return u.jsxs(u.Fragment,{children:[u.jsx(Bb,{section:l}),u.jsx(Ub,{students:c}),u.jsx(qb,{students:c,week:p,setWeek:g}),u.jsx(Gb,{students:c,week:p,sort:y,setSort:b,expanded:_,setExpanded:C})]})}function $m(l,c){return l+"::"+c}function Vb(l,c=[]){if(!(l!=null&&l.sectionId)||!l.lessonId)return"Choose a section and lesson.";if(l.sectionCourseId&&l.sectionCourseId!=="computer-science-1")return"This section uses a different course. Only Computer Science I is connected.";if(!/^\d{4}-\d{2}-\d{2}$/.test(l.dueDate||""))return"Choose a valid due date.";const[p,g,y]=l.dueDate.split("-").map(Number);if(new Date(Date.UTC(p,g-1,y)).toISOString().slice(0,10)!==l.dueDate)return"Choose a valid due date.";const _=Number(l.points);if(!Number.isFinite(_)||!Number.isInteger(_)||_<0||_>1e3)return"Points must be a whole number between 0 and 1,000.";if(l.scope!=="section"&&l.scope!=="selected")return"Choose who receives the assignment.";if(l.scope==="selected"){const C=new Set(c.map(E=>E.id)),k=[...new Set(l.studentIds||[])];if(!k.length||k.some(E=>!C.has(E)))return"Select at least one student from this section."}return null}function Jb(l,c=[]){const p=Vb(l,c);if(p)throw new Error(p);return{id:$m(l.sectionId,l.lessonId),sectionId:l.sectionId,courseId:"computer-science-1",lessonId:l.lessonId,scope:l.scope,studentIds:l.scope==="selected"?[...new Set(l.studentIds)].sort():[],dueDate:l.dueDate,points:Number(l.points)}}function Xb(l,c){return[...(Array.isArray(l)?l:[]).filter(p=>p.id!==c.id),c]}function qp(l,c,p){return(l||[]).find(g=>g.id===$m(c,p))||null}const Qb="/playground/data/computer-science-1/course.json",tc=hi("computer-science-1");function Zb({section:l,students:c=[],assignments:p=[],setAssignments:g}){const[y,b]=Se.useState(null),[_,C]=Se.useState("loading"),[k,E]=Se.useState(tc.lessons[0]),[N,I]=Se.useState("section"),[A,V]=Se.useState([]),[J,W]=Se.useState(""),[ae,D]=Se.useState(""),[H,F]=Se.useState("starter"),[q,Y]=Se.useState("");Se.useEffect(()=>{const K=new AbortController;return fetch(Qb,{signal:K.signal,cache:"no-store"}).then(j=>{if(!j.ok)throw new Error("Curriculum unavailable");return j.json()}).then(j=>{if(!Array.isArray(j.lessons)||!j.lessons.length)throw new Error("Unexpected curriculum response");b(Gl(j)),C("live")}).catch(j=>{j.name!=="AbortError"&&C("snapshot")}),()=>K.abort()},[]);const ge=Se.useMemo(()=>y?{...tc,...y}:tc,[y]),le=ge.lessons,be=le.includes(k)?k:le[0],We=na(ge,be),Te=le.reduce((K,j)=>{var R;return K+(Number((R=na(ge,j))==null?void 0:R.points)||0)},0),se=tc.lessons.includes(be),Ce=(l==null?void 0:l.course)==="computer-science-1",oe=qp(p,l==null?void 0:l.id,be),ye=c.filter(K=>K.sections.includes(l==null?void 0:l.id));Se.useEffect(()=>{var j;const K=qp(p,l==null?void 0:l.id,be);I((K==null?void 0:K.scope)||"section"),V((K==null?void 0:K.studentIds)||[]),W((K==null?void 0:K.dueDate)||""),D(String((K==null?void 0:K.points)??((j=na(ge,be))==null?void 0:j.points)??0)),Y(""),F("starter")},[be,l==null?void 0:l.id]);function L(K){K.preventDefault();try{const j=Jb({sectionId:l==null?void 0:l.id,sectionCourseId:l==null?void 0:l.course,lessonId:be,scope:N,studentIds:A,dueDate:J,points:ae},ye);g==null||g(R=>Xb(R,j)),Y("Preview assignment saved in this browser. No students were notified.")}catch(j){Y(j.message)}}function X(){g==null||g(K=>(K||[]).filter(j=>j.id!==(oe==null?void 0:oe.id))),Y("Preview assignment cleared. Live student records were not changed.")}return u.jsxs("section",{className:"panel curriculum-panel","aria-label":"Published curriculum",children:[u.jsxs("div",{className:"section-heading",children:[u.jsxs("div",{children:[u.jsxs("h2",{children:[u.jsx(Yl,{size:18})," Computer Science I curriculum"]}),u.jsxs("p",{children:[ge.units.length," original units · ",le.length," lessons · ",Te," available lesson points"]})]}),u.jsx("span",{className:"curriculum-source",role:"status",children:_==="live"?"Published course • current":_==="loading"?"Checking published course…":"Bundled preview snapshot"})]}),u.jsx("p",{className:"curriculum-explanation",children:"Lesson titles, published points, starter code, and unit order come from the real CS1 catalog. Assignment controls below are a browser-only preview and do not affect live students."}),u.jsxs("div",{className:"curriculum-grid",children:[u.jsx("div",{className:"curriculum-units","aria-label":"Unit and lesson list",children:ge.units.map((K,j)=>u.jsxs("details",{open:rs(K).includes(be)||j===0,children:[u.jsxs("summary",{children:["Unit ",uc(K,j+1)," · ",Rs(K)]}),u.jsx("div",{children:rs(K).map(R=>u.jsxs("button",{type:"button",className:R===be?"curriculum-lesson selected":"curriculum-lesson","aria-current":R===be?"true":void 0,onClick:()=>E(R),children:[ra(ge,R),qp(p,l==null?void 0:l.id,R)&&u.jsx("small",{children:" · Assigned in preview"})]},R))})]},K.id))}),u.jsxs("article",{className:"curriculum-lesson-preview",children:[u.jsx("div",{className:"eyebrow",children:"Published lesson"}),u.jsx("h3",{children:We.title}),u.jsx("p",{children:We.summary||We.challenge||"Practice the skills from this unit."}),u.jsxs("div",{className:"curriculum-meta",children:[u.jsxs("span",{children:[We.points??0," published points"]}),u.jsxs("span",{children:[We.mode==="function"?"Function":"Script"," · Python"]})]}),u.jsxs("div",{className:"curriculum-code-tabs",role:"tablist","aria-label":"Lesson code",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":H==="starter",className:H==="starter"?"active":"",onClick:()=>F("starter"),children:"Starter code"}),u.jsxs("button",{type:"button",role:"tab","aria-selected":H==="solution",className:H==="solution"?"active":"",onClick:()=>F("solution"),children:[u.jsx(tf,{size:14})," Solution"]})]}),H==="starter"?u.jsx("pre",{className:"curriculum-code",children:u.jsx("code",{children:We.starter||"# No starter code provided"})}):u.jsxs("div",{className:"curriculum-solution-locked",role:"status",children:[u.jsx(tf,{size:20}),u.jsxs("div",{children:[u.jsx("strong",{children:"Teacher-only solutions"}),u.jsx("p",{children:"Solutions must be loaded from protected storage after teacher sign-in and authorization. Answer keys are not included in the public React preview."})]})]}),se?u.jsxs("a",{className:"btn",href:Od(tc,be),children:["Open lesson in React preview ",u.jsx(am,{size:14})]}):u.jsx("p",{className:"muted",children:"This newer published lesson is not yet in the React snapshot."}),u.jsxs("div",{className:"curriculum-assignment-editor",children:[u.jsx("h4",{children:"Assign lesson"}),Ce?u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"curriculum-assignment-warning",children:"Preview only. Assignments are saved in this browser, not sent to students or the live gradebook."}),u.jsxs("form",{onSubmit:L,className:"curriculum-assignment-form",children:[u.jsxs("label",{children:["Assign to",u.jsxs("select",{value:N,onChange:K=>I(K.target.value),children:[u.jsxs("option",{value:"section",children:["Whole class · ",ye.length," sample students"]}),u.jsx("option",{value:"selected",children:"Selected students"})]})]}),N==="selected"&&u.jsxs("fieldset",{className:"curriculum-recipient-picker",children:[u.jsx("legend",{children:"Choose students"}),ye.length?ye.map(K=>u.jsxs("label",{children:[u.jsx("input",{type:"checkbox",checked:A.includes(K.id),onChange:j=>V(R=>j.target.checked?[...R,K.id]:R.filter(G=>G!==K.id))}),u.jsx("span",{children:Vl(K)})]},K.id)):u.jsx("p",{children:"No sample students are enrolled in this section."})]}),u.jsxs("div",{className:"curriculum-assignment-fields",children:[u.jsxs("label",{children:["Due date",u.jsx("input",{type:"date",required:!0,value:J,onChange:K=>W(K.target.value)})]}),u.jsxs("label",{children:["Points",u.jsx("input",{type:"number",required:!0,min:"0",max:"1000",step:"1",value:ae,onChange:K=>D(K.target.value)})]})]}),u.jsxs("div",{className:"curriculum-assignment-actions",children:[u.jsx("button",{type:"submit",className:"btn primary",children:oe?"Update preview assignment":"Save preview assignment"}),oe&&u.jsx("button",{type:"button",className:"btn",onClick:X,children:"Remove assignment"})]})]}),oe&&u.jsxs("p",{className:"curriculum-current-assignment",children:["Saved for ",oe.scope==="section"?"whole class":oe.studentIds.length+" selected students"," · ","Due ",oe.dueDate," · ",oe.points," points"]}),q&&u.jsx("p",{className:"curriculum-assignment-feedback",role:"status",children:q})]}):u.jsxs("p",{className:"curriculum-assignment-warning",children:[(l==null?void 0:l.name)||"This section"," uses a different course. Choose a Computer Science I section to assign CS1 lessons."]})]})]})]})]})}function e0({students:l}){return u.jsxs("section",{className:"panel",children:[u.jsx("h2",{children:"Section setup"}),u.jsx("p",{children:"Visual preview of configured sections. This sandbox cannot create live classes or assign students."}),u.jsx("div",{className:"setup-grid",children:yo.map(c=>u.jsxs("div",{className:"setup-card",children:[u.jsx("div",{className:"eyebrow",children:c.name}),u.jsx("h3",{children:sh(c.course)}),u.jsxs("span",{children:[l.filter(p=>p.sections.includes(c.id)).length," sample students"]})]},c.id))})]})}function t0({section:l,students:c,submissions:p}){const[g,y]=Se.useState($p()[0]),[b,_]=Se.useState(null),C=$p(),k=c.map(N=>{const I=p.filter(A=>A.studentId===N.id&&A.sectionId===l.id&&A.week===g);return{student:N,copies:I,latest:I.at(-1)}}),E=k.filter(N=>N.latest).length;return u.jsxs("section",{className:"panel journal-inbox",children:[u.jsxs("div",{className:"section-heading",children:[u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Teacher review · Sample records"}),u.jsxs("h2",{children:[u.jsx(ah,{size:19})," Weekly journal submissions"]}),u.jsx("p",{children:"Review essays and logic puzzles from this section. Journals are never automatically graded."})]}),u.jsxs("label",{children:["Journal week ",u.jsx("select",{value:g,onChange:N=>{y(N.target.value),_(null)},children:C.map(N=>u.jsx("option",{value:N,children:Kl(N)},N))})]})]}),u.jsxs("div",{className:"stat-grid",children:[u.jsxs("div",{className:"stat-card",children:[u.jsx("strong",{children:E}),u.jsx("span",{children:"Submitted"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("strong",{children:k.length-E}),u.jsx("span",{children:"Missing"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("strong",{children:k.length}),u.jsx("span",{children:"Students in section"})]})]}),u.jsx("div",{className:"journal-inbox-rows",children:k.map(({student:N,latest:I,copies:A})=>u.jsxs("div",{className:"journal-inbox-row",children:[u.jsxs("div",{children:[u.jsxs("strong",{children:[N.first," ",N.last]}),u.jsxs("small",{children:["@",N.github]})]}),u.jsx("span",{className:`journal-status-pill ${I?"submitted":""}`,children:I?"Submitted":"Missing"}),u.jsx("span",{className:"journal-inbox-date",children:I?new Date(I.submittedAt).toLocaleString():"—"}),u.jsx("button",{className:"btn",disabled:!I,onClick:()=>_(b===N.id?null:N.id),children:b===N.id?"Close":"Review"}),b===N.id&&I&&u.jsxs("div",{className:"journal-review-detail",children:[u.jsxs("div",{className:"eyebrow",children:[I.type.replace("-"," ")," · ",A.length," ",A.length===1?"hand-in":"hand-ins"," · Manual review"]}),u.jsx("div",{className:"journal-history-answer",children:I.response}),u.jsxs("p",{className:"hint",children:["AI declaration: ",I.aiUse==="none"?"No AI reported":`Disclosed · ${I.aiDetails}`]})]})]},N.id))}),u.jsx("p",{className:"hint",children:"This inbox uses fictional students and demo submissions created in this browser. No grades or messages are sent."})]})}function n0({students:l,journalSubmissions:c}){const[p,g]=cn("designlab:teacher-tab","overview"),[y,b]=cn("designlab:section","p1"),[_,C]=cn("designlab:sort","last"),[k,E]=cn("designlab:week",Um[0].key),[N,I]=Se.useState(null),[A,V]=Se.useState(!1),[J,W]=cn("designlab:teacher-preview-assignments",[]),ae=["overview","curriculum","journals"].includes(p)?p:"overview",D=Hm(y)||yo[0],H=Se.useMemo(()=>l.filter(F=>F.sections.includes(y)).sort((F,q)=>qm(F,q,_)),[l,y,_]);return u.jsxs("div",{className:"main-content teacher-screen",children:[u.jsx(ph,{eyebrow:"Your classroom · Frontend preview",actions:u.jsx(is,{children:ae==="curriculum"?"Real CS1 catalog · demo assignments":"Sample student data"}),children:"Teacher dashboard"}),u.jsx("p",{className:"page-subtitle",children:ae==="curriculum"?"Browse published Computer Science I lessons and configure preview-only section assignments.":"Explore your class layout with fictional students. No real student information is loaded."}),u.jsx(Fb,{sectionId:D.id,onSectionChange:F=>{b(F),I(null)},setupOpen:A,onToggleSetup:()=>V(F=>!F)}),A&&u.jsx("div",{id:"teacher-section-setup",children:u.jsx(e0,{students:l})}),u.jsx(Hb,{tab:ae,onChange:F=>{g(F),I(null)}}),ae==="curriculum"&&u.jsx(Zb,{section:D,students:H,assignments:J,setAssignments:W}),ae==="overview"&&u.jsx(Yb,{section:D,students:H,week:k,setWeek:E,sort:_,setSort:C,expanded:N,setExpanded:I}),ae==="journals"&&u.jsx(t0,{section:D,students:H,submissions:c})]})}function r0({children:l}){return u.jsx("div",{className:"empty",children:l})}function i0({student:l,isEditing:c,onToggleEdit:p,onDone:g,onPatch:y}){const b=Vl(l);return u.jsxs("article",{className:"account-card",children:[u.jsxs("div",{className:"account-row",children:[u.jsx("span",{className:"avatar",children:b.slice(0,1).toUpperCase()}),u.jsxs("div",{className:"account-identity",children:[u.jsx("h3",{children:b}),u.jsxs("small",{children:["@",l.github]})]}),u.jsx("button",{className:"icon-button","aria-label":`Edit ${b}`,onClick:p,children:c?u.jsx(Wd,{size:17}):u.jsx(ch,{size:17})})]}),u.jsxs("div",{className:"account-footer",children:[u.jsx(is,{tone:l.sheetName?"success":"",children:l.sheetName?"Sheet matched":"Student name fallback"}),l.sections.map(_=>u.jsxs(is,{children:["Period ",Bm(_)]},_))]}),c&&u.jsxs("div",{className:"account-edit",children:[u.jsxs("label",{children:["Google Sheet name",u.jsx("input",{value:l.sheetName||"",onChange:_=>y({sheetName:_.target.value||null})})]}),u.jsxs("label",{children:["Student-provided backup",u.jsx("input",{value:l.studentName||"",onChange:_=>y({studentName:_.target.value})})]}),u.jsx("button",{className:"btn",onClick:g,children:"Done"})]})]})}function s0({students:l,sort:c,setSort:p,patchStudent:g}){const[y,b]=cn("designlab:period-filter","all"),[_,C]=Se.useState(""),[k,E]=Se.useState(null),N=Se.useMemo(()=>{const I=_.toLowerCase();return l.filter(A=>(y==="all"||A.sections.some(V=>Bm(V)===y))&&[Vl(A),A.github,A.studentName].some(V=>V.toLowerCase().includes(I))).sort((A,V)=>qm(A,V,c))},[l,y,c,_]);return u.jsxs("section",{className:"panel",children:[u.jsxs("div",{className:"section-heading",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"Accounts"}),u.jsx("p",{children:"Google Sheet name first, student-entered name second, then GitHub name."})]}),u.jsxs(is,{children:[N.length," accounts"]})]}),u.jsxs("div",{className:"filters",children:[u.jsxs("label",{children:[u.jsx(lm,{size:16})," ",u.jsx("input",{"aria-label":"Search accounts",value:_,placeholder:"Search name or GitHub username",onChange:I=>C(I.target.value)})]}),u.jsxs("label",{children:["Class period",u.jsxs("select",{value:y,onChange:I=>b(I.target.value),children:[u.jsx("option",{value:"all",children:"All periods"}),Db.map(I=>u.jsx("option",{children:I},I))]})]}),u.jsx(Km,{label:"Sort",value:c,onChange:p})]}),u.jsx("p",{className:"info-text",children:"Change a sample Sheet name to test precedence and fallback behavior. These edits are saved only in browser storage."}),u.jsx("div",{className:"account-grid",children:N.map(I=>u.jsx(i0,{student:I,isEditing:k===I.id,onToggleEdit:()=>E(k===I.id?null:I.id),onDone:()=>E(null),onPatch:A=>g(I.id,A)},I.id))}),!N.length&&u.jsx(r0,{children:"No accounts match those filters."})]})}function o0({students:l,setStudents:c}){const[p,g]=cn("designlab:admin-sort","last"),[y,b]=Se.useState(""),_=(C,k)=>c(E=>E.map(N=>N.id===C?{...N,...k}:N));return u.jsxs("div",{className:"main-content teacher-screen admin-screen",children:[u.jsx(ph,{eyebrow:"Global management · Frontend preview",actions:u.jsx(is,{children:"Sample accounts only"}),children:"Admin dashboard"}),u.jsxs("p",{className:"page-subtitle",children:[u.jsx(dh,{size:16,"aria-hidden":"true"})," Account management is separate from class-specific teacher tools. This demo has no real accounts or admin permissions attached."]}),u.jsxs("div",{className:"admin-actions",children:[u.jsxs("button",{type:"button",className:"btn",onClick:()=>{c(Sd),b("Fictional account records restored.")},children:[u.jsx(Fd,{size:15})," Reset sample accounts"]}),y&&u.jsx("small",{role:"status",children:y})]}),u.jsx(s0,{students:l,sort:p,setSort:g,patchStudent:_})]})}const a0={essay:"Think about a time you solved a difficult problem. Explain what you tried first, how you changed your approach, and what you learned. Use specific evidence.","logic-puzzle":"A robot follows this pattern: 2, 6, 12, 20, 30, __. Find the next number. Explain the pattern and show why your answer fits."},Jf={response:"",type:"essay",aiUse:"",aiDetails:""};function l0({submissions:l,setSubmissions:c}){var Te;const[p,g]=cn("designlab:journal-section",yo[0].id),y=yo.find(se=>se.id===p)||yo[0],b=Sd.filter(se=>se.sections.includes(y.id)),[_,C]=cn("designlab:journal-student",Sd[0].id),k=b.find(se=>se.id===_)||b[0],E=Se.useMemo(()=>$p(),[]),[N,I]=cn("designlab:journal-week",E[0]),A=E.includes(N)?N:E[0],[V,J]=cn("designlab:journal-drafts",{}),[W,ae]=Se.useState(""),[D,H]=Se.useState(!1),F=Tg(y.id,k.id,A),q=V[F]||Jf,Y=l.filter(se=>se.studentId===k.id&&se.sectionId===y.id&&se.week===A),ge=Y.at(-1),le=q.response.trim()?q.response.trim().split(/\s+/).length:0;function be(se,Ce){J(oe=>({...oe,[F]:{...oe[F]||Jf,[se]:Ce}})),ae("Draft saved in this browser.")}function We(se){se.preventDefault();const Ce=jg(q);if(Ce){ae(Ce);return}const oe={id:`demo-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,sectionId:y.id,studentId:k.id,studentName:`${k.first} ${k.last}`,courseId:y.course,week:A,response:q.response.trim(),type:q.type,aiUse:q.aiUse,aiDetails:q.aiDetails.trim(),submittedAt:new Date().toISOString()};c(ye=>[...ye,oe]),ae("Demo submission saved locally. Check the Teacher dashboard → Journals tab to review it.")}return u.jsxs("div",{className:"main-content journal-screen",children:[u.jsx("div",{className:"eyebrow",children:"Your classes · Written work"}),u.jsxs("header",{className:"journal-heading",children:[u.jsxs("div",{children:[u.jsx("h1",{children:"Weekly Journals"}),u.jsx("p",{children:"Essay responses, reflections, and logic puzzles—all in one place."})]}),u.jsxs("span",{className:"chip",children:[u.jsx(dh,{size:14})," Local demo only"]})]}),u.jsxs("section",{className:"journal-card journal-selection","aria-label":"Select a journal",children:[u.jsxs("label",{children:["Class section",u.jsx("select",{value:y.id,onChange:se=>{g(se.target.value),ae("")},children:yo.map(se=>{var Ce;return u.jsxs("option",{value:se.id,children:[se.name," · ",(Ce=hi(se.course))==null?void 0:Ce.label]},se.id)})})]}),u.jsxs("label",{children:["Preview as student",u.jsx("select",{value:k.id,onChange:se=>{C(se.target.value),ae("")},children:b.map(se=>u.jsxs("option",{value:se.id,children:[se.first," ",se.last," (sample)"]},se.id))})]}),u.jsxs("label",{children:["Journal week",u.jsx("select",{value:A,onChange:se=>{I(se.target.value),ae("")},children:E.map(se=>u.jsxs("option",{value:se,children:["Week of ",Kl(se)]},se))})]})]}),u.jsxs("section",{className:"journal-card journal-editor-card",children:[u.jsxs("div",{className:"journal-section-heading",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"eyebrow",children:[(Te=hi(y.course))==null?void 0:Te.label," · ",y.name]}),u.jsxs("h2",{children:["Journal · Week of ",Kl(A)]})]}),u.jsx("span",{className:`journal-status-pill ${ge?"submitted":""}`,children:ge?"Submitted":"Not submitted"})]}),u.jsx("p",{className:"journal-instructions",children:"This is a fictional prompt for design testing. In production, your teacher would publish the weekly assignment."}),u.jsxs("form",{onSubmit:We,children:[u.jsxs("label",{children:["Response type",u.jsxs("select",{value:q.type,onChange:se=>be("type",se.target.value),children:[u.jsx("option",{value:"essay",children:"Essay or written reflection"}),u.jsx("option",{value:"logic-puzzle",children:"Logic puzzle or reasoning task"})]})]}),u.jsxs("div",{className:"journal-prompt",children:[u.jsx("strong",{children:"Sample prompt"}),u.jsx("p",{children:a0[q.type]})]}),u.jsx("label",{htmlFor:"journal-answer",children:"Your response"}),u.jsx("textarea",{id:"journal-answer",rows:"13",maxLength:"100000",spellCheck:!0,placeholder:"Write your explanation here. Show steps and reasoning for logic puzzles.",value:q.response,onChange:se=>be("response",se.target.value)}),u.jsxs("div",{className:"journal-writing-meta",children:[u.jsxs("span",{children:[le," words"]}),u.jsxs("span",{children:[u.jsx(Td,{size:13})," Autosaved in this browser"]})]}),u.jsxs("div",{className:"journal-integrity",children:[u.jsxs("label",{children:["AI-use declaration",u.jsxs("select",{value:q.aiUse,onChange:se=>be("aiUse",se.target.value),children:[u.jsx("option",{value:"",children:"Choose one"}),u.jsx("option",{value:"none",children:"I did not use AI-generated content"}),u.jsx("option",{value:"disclosed",children:"I used AI and will explain how"})]})]}),u.jsx("p",{className:"hint",children:"This is a declaration for review, not an automatic grade. Follow your teacher's classroom AI policy."}),q.aiUse==="disclosed"&&u.jsxs("label",{children:["Describe the AI assistance",u.jsx("textarea",{rows:"3",value:q.aiDetails,onChange:se=>be("aiDetails",se.target.value),placeholder:"Identify which parts involved AI assistance."})]})]}),u.jsxs("div",{className:"journal-actions",children:[u.jsxs("button",{type:"button",className:"btn",onClick:()=>{ae("Draft saved in this browser.")},children:[u.jsx(Td,{size:15})," Save draft"]}),u.jsxs("button",{type:"submit",className:"btn submit",children:[u.jsx(uh,{size:15})," Demo submit"]})]}),u.jsx("p",{role:"status",className:"journal-submit-status",children:W})]}),u.jsxs("div",{className:"journal-bottom-row",children:[u.jsx("p",{className:"hint",children:"No real submissions are sent. Each demo submission records a separate copy; drafts remain editable."}),u.jsxs("button",{type:"button",className:"btn",onClick:()=>H(se=>!se),children:[u.jsx(Ny,{size:15})," ",D?"Hide history":`Submission history (${Y.length})`]})]}),D&&u.jsx("div",{className:"journal-history",children:Y.length?Y.map(se=>u.jsxs("details",{className:"journal-history-item",children:[u.jsxs("summary",{children:[u.jsx(sc,{size:16})," Submitted ",new Date(se.submittedAt).toLocaleString()," · ",se.type]}),u.jsx("div",{className:"journal-history-answer",children:se.response})]},se.id)):u.jsx("p",{className:"muted",children:"No submissions yet for this week."})})]})]})}const u0=`# Attendance Percentage

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
`,c0=`# Competition Leaderboard Ranks

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
`,d0=`# Confidence Pool Total

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
`,p0=`# Count Matching Events

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
`,h0=`# Longest Winning Streak

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
`,f0=`# Format a Score Line

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
`,m0=`# Second Largest Distinct Value

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
`,g0=`# Sum Positive Values

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
`,y0=`# Count Pairs With Target Sum

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
`,v0=`# Temperature Alert

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
`,x0=`using System;

public static class Solution {
    public static int AttendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,b0=`public class Solution {
    public static int attendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,w0=`export function attendancePercent(present, total) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,k0=`def attendance_percent(present: int, total: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,S0=`using System;

public static class Solution {
    public static int[] CompetitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,_0=`public class Solution {
    public static int[] competitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,C0=`export function competitionRanks(scores) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,T0=`def competition_ranks(scores: list[int]) -> list[int]:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,j0=`using System;

public static class Solution {
    public static int ConfidenceTotal(bool[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,N0=`public class Solution {
    public static int confidenceTotal(boolean[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,E0=`export function confidenceTotal(correct, weights) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,L0=`def confidence_total(correct: list[bool], weights: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,P0=`using System;

public static class Solution {
    public static int CountMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,A0=`public class Solution {
    public static int countMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,R0=`export function countMatches(events, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,I0=`def count_matches(events: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,O0=`using System;

public static class Solution {
    public static int LongestWinStreak(bool[] wins) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,M0=`public class Solution {
    public static int longestWinStreak(boolean[] wins) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,D0=`export function longestWinStreak(wins) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,z0=`def longest_win_streak(wins: list[bool]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,F0=`using System;

public static class Solution {
    public static string ScoreLine(string name, int points) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,W0=`public class Solution {
    public static String scoreLine(String name, int points) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,H0=`export function scoreLine(name, points) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,B0=`def score_line(name: str, points: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,U0=`using System;

public static class Solution {
    public static int? SecondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,q0=`public class Solution {
    public static Integer secondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,K0=`export function secondLargestDistinct(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,$0=`def second_largest_distinct(numbers: list[int]) -> int | None:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,G0=`using System;

public static class Solution {
    public static int SumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Y0=`public class Solution {
    public static int sumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,V0=`export function sumPositives(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,J0=`def sum_positives(numbers: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,X0=`using System;

public static class Solution {
    public static int TargetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Q0=`public class Solution {
    public static int targetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Z0=`export function targetPairs(numbers, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,ew=`def target_pairs(numbers: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,tw=`using System;

public static class Solution {
    public static string TemperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,nw=`public class Solution {
    public static String temperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,rw=`export function temperatureAlert(degrees) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,iw=`def temperature_alert(degrees: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,sw="attendance-percent",ow=[{input:[18,20],expected:90},{input:[2,3],expected:66},{input:[0,30],expected:0},{input:[7,7],expected:100}],aw={challengeId:sw,cases:ow},lw="competition-ranks",uw=[{input:[[50,50,40,20,40]],expected:[1,1,3,5,3]},{input:[[7,12,9]],expected:[3,1,2]},{input:[[5,5,5]],expected:[1,1,1]},{input:[[]],expected:[]}],cw={challengeId:lw,cases:uw},dw="confidence-total",pw=[{input:[[!0,!1,!0],[20,18,15]],expected:35},{input:[[!1,!1],[5,8]],expected:0},{input:[[],[]],expected:0}],hw={challengeId:dw,cases:pw},fw="count-matches",mw=[{input:[[2,1,2,3,2],2],expected:3},{input:[[],7],expected:0},{input:[[3,4],5],expected:0}],gw={challengeId:fw,cases:mw},yw="longest-win-streak",vw=[{input:[[!0,!0,!1,!0,!0,!0]],expected:3},{input:[[!1,!1]],expected:0},{input:[[]],expected:0},{input:[[!0,!0]],expected:2}],xw={challengeId:yw,cases:vw},bw="score-line",ww=[{input:["Avery",18],expected:"Avery: 18 points"},{input:["Jordan Lee",0],expected:"Jordan Lee: 0 points"},{input:["Mia",-2],expected:"Mia: -2 points"}],kw={challengeId:bw,cases:ww},Sw="second-largest-distinct",_w=[{input:[[3,1,3,2]],expected:2},{input:[[5,5]],expected:null},{input:[[-10,-7,-7,-2]],expected:-7},{input:[[1]],expected:null}],Cw={challengeId:Sw,cases:_w},Tw="sum-positives",jw=[{input:[[-3,6,0,2,-1]],expected:8},{input:[[-5,0,-1]],expected:0},{input:[[]],expected:0}],Nw={challengeId:Tw,cases:jw},Ew="target-pairs",Lw=[{input:[[1,3,2,2,4],4],expected:2},{input:[[2,2,2],4],expected:3},{input:[[1,2,3],9],expected:0},{input:[[],1],expected:0}],Pw={challengeId:Ew,cases:Lw},Aw="temperature-alert",Rw=[{input:[32],expected:"Freeze"},{input:[90],expected:"Heat"},{input:[72],expected:"Normal"},{input:[-5],expected:"Freeze"}],Iw={challengeId:Aw,cases:Rw},Ow=["python","java","javascript","csharp"],Mw=[{id:"temperature-alert",title:"Temperature Alert",summary:"Choose a status label based on a temperature reading.",difficulty:"Very Easy",points:5,tags:["conditionals","comparisons","functions"],prerequisites:["functions","conditionals"],suggestedCourses:["computer-science-1","game-programming","uil"],languages:["python","java","javascript","csharp"],path:"problems/temperature-alert"},{id:"count-matches",title:"Count Matching Events",summary:"Count how often a particular event code appears.",difficulty:"Easy",points:10,tags:["arrays","loops","comparisons"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/count-matches"},{id:"sum-positives",title:"Sum Positive Values",summary:"Add only the positive values in a data set.",difficulty:"Easy",points:10,tags:["arrays","loops","accumulators"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/sum-positives"},{id:"score-line",title:"Format a Score Line",summary:"Format a player score as a clear single line of text.",difficulty:"Easy",points:10,tags:["strings","formatting","functions"],prerequisites:["variables","strings","functions"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/score-line"},{id:"attendance-percent",title:"Attendance Percentage",summary:"Convert an attendance fraction into a whole-number percentage.",difficulty:"Easy",points:10,tags:["arithmetic","integer-division","functions"],prerequisites:["variables","functions","arithmetic"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/attendance-percent"},{id:"longest-win-streak",title:"Longest Winning Streak",summary:"Find the longest consecutive run of winning results.",difficulty:"Medium",points:15,tags:["arrays","loops","state"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/longest-win-streak"},{id:"confidence-total",title:"Confidence Pool Total",summary:"Compute the points earned from predictions.",difficulty:"Medium",points:15,tags:["arrays","loops","parallel-arrays"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/confidence-total"},{id:"second-largest-distinct",title:"Second Largest Distinct Value",summary:"Return the second-highest unique integer in a collection.",difficulty:"Medium",points:20,tags:["arrays","comparisons","distinct-values"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/second-largest-distinct"},{id:"target-pairs",title:"Count Pairs With Target Sum",summary:"Count pairs of positions that add to a target.",difficulty:"Hard",points:25,tags:["arrays","nested-loops","counting"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/target-pairs"},{id:"competition-ranks",title:"Competition Leaderboard Ranks",summary:"Assign ranks while handling tied scores and skipped positions.",difficulty:"Hard",points:25,tags:["arrays","sorting","ties"],prerequisites:["functions","loops","arrays","sorting"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/competition-ranks"}],Gm={languages:Ow,challenges:Mw},Dw=Object.assign({"../challenge-bank/problems/attendance-percent/problem.md":u0,"../challenge-bank/problems/competition-ranks/problem.md":c0,"../challenge-bank/problems/confidence-total/problem.md":d0,"../challenge-bank/problems/count-matches/problem.md":p0,"../challenge-bank/problems/longest-win-streak/problem.md":h0,"../challenge-bank/problems/score-line/problem.md":f0,"../challenge-bank/problems/second-largest-distinct/problem.md":m0,"../challenge-bank/problems/sum-positives/problem.md":g0,"../challenge-bank/problems/target-pairs/problem.md":y0,"../challenge-bank/problems/temperature-alert/problem.md":v0}),zw=Object.assign({"../challenge-bank/problems/attendance-percent/starters/Solution.cs":x0,"../challenge-bank/problems/attendance-percent/starters/Solution.java":b0,"../challenge-bank/problems/attendance-percent/starters/javascript.js":w0,"../challenge-bank/problems/attendance-percent/starters/python.py":k0,"../challenge-bank/problems/competition-ranks/starters/Solution.cs":S0,"../challenge-bank/problems/competition-ranks/starters/Solution.java":_0,"../challenge-bank/problems/competition-ranks/starters/javascript.js":C0,"../challenge-bank/problems/competition-ranks/starters/python.py":T0,"../challenge-bank/problems/confidence-total/starters/Solution.cs":j0,"../challenge-bank/problems/confidence-total/starters/Solution.java":N0,"../challenge-bank/problems/confidence-total/starters/javascript.js":E0,"../challenge-bank/problems/confidence-total/starters/python.py":L0,"../challenge-bank/problems/count-matches/starters/Solution.cs":P0,"../challenge-bank/problems/count-matches/starters/Solution.java":A0,"../challenge-bank/problems/count-matches/starters/javascript.js":R0,"../challenge-bank/problems/count-matches/starters/python.py":I0,"../challenge-bank/problems/longest-win-streak/starters/Solution.cs":O0,"../challenge-bank/problems/longest-win-streak/starters/Solution.java":M0,"../challenge-bank/problems/longest-win-streak/starters/javascript.js":D0,"../challenge-bank/problems/longest-win-streak/starters/python.py":z0,"../challenge-bank/problems/score-line/starters/Solution.cs":F0,"../challenge-bank/problems/score-line/starters/Solution.java":W0,"../challenge-bank/problems/score-line/starters/javascript.js":H0,"../challenge-bank/problems/score-line/starters/python.py":B0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.cs":U0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.java":q0,"../challenge-bank/problems/second-largest-distinct/starters/javascript.js":K0,"../challenge-bank/problems/second-largest-distinct/starters/python.py":$0,"../challenge-bank/problems/sum-positives/starters/Solution.cs":G0,"../challenge-bank/problems/sum-positives/starters/Solution.java":Y0,"../challenge-bank/problems/sum-positives/starters/javascript.js":V0,"../challenge-bank/problems/sum-positives/starters/python.py":J0,"../challenge-bank/problems/target-pairs/starters/Solution.cs":X0,"../challenge-bank/problems/target-pairs/starters/Solution.java":Q0,"../challenge-bank/problems/target-pairs/starters/javascript.js":Z0,"../challenge-bank/problems/target-pairs/starters/python.py":ew,"../challenge-bank/problems/temperature-alert/starters/Solution.cs":tw,"../challenge-bank/problems/temperature-alert/starters/Solution.java":nw,"../challenge-bank/problems/temperature-alert/starters/javascript.js":rw,"../challenge-bank/problems/temperature-alert/starters/python.py":iw}),Fw=Object.assign({"../challenge-bank/problems/attendance-percent/examples.json":aw,"../challenge-bank/problems/competition-ranks/examples.json":cw,"../challenge-bank/problems/confidence-total/examples.json":hw,"../challenge-bank/problems/count-matches/examples.json":gw,"../challenge-bank/problems/longest-win-streak/examples.json":xw,"../challenge-bank/problems/score-line/examples.json":kw,"../challenge-bank/problems/second-largest-distinct/examples.json":Cw,"../challenge-bank/problems/sum-positives/examples.json":Nw,"../challenge-bank/problems/target-pairs/examples.json":Pw,"../challenge-bank/problems/temperature-alert/examples.json":Iw}),Ud=Gm.challenges,rh=Gm.languages,Ym={python:"Python",java:"Java",javascript:"JavaScript",csharp:"C#"},Ww={python:"python.py",java:"Solution.java",javascript:"javascript.js",csharp:"Solution.cs"};function Vm(l){return Ud.find(c=>c.id===l)||null}function Hw(l){return Dw[`../challenge-bank/problems/${l}/problem.md`]??""}function Bw(l,c){return zw[`../challenge-bank/problems/${l}/starters/${Ww[c]}`]??""}function Uw(l){var c;return((c=Fw[`../challenge-bank/problems/${l}/examples.json`])==null?void 0:c.cases)??[]}const qw=[...new Set(Ud.flatMap(l=>l.tags))].sort((l,c)=>l.localeCompare(c)),Kw=["Very Easy","Easy","Medium","Hard"];function $w({query:l="",topic:c="all",difficulty:p="all",course:g="all",language:y="all"}={}){const b=l.trim().toLocaleLowerCase();return Ud.filter(_=>(!b||[_.title,_.summary,..._.tags].join(" ").toLowerCase().includes(b))&&(c==="all"||_.tags.includes(c))&&(p==="all"||_.difficulty===p)&&(g==="all"||_.suggestedCourses.includes(g))&&(y==="all"||_.languages.includes(y))).slice().sort((_,C)=>_.title.localeCompare(C.title))}function Xf(l,c){var b;const[p,...g]=l.split(":"),y=g.join(":");return p==="lesson"?ra(hi(c),y):((b=Vm(y))==null?void 0:b.title)||y}function Gw({grades:l=[],assignments:c=[],completedLessons:p=[]}){const[g,y]=Se.useState("all"),b=g==="all"?l:l.filter(I=>I.courseId===g),_=Gp(b),C=Xg(b),k=C[0],E=ns.map(I=>({...I,...Gp(l.filter(A=>A.courseId===I.id))})),N=c.filter(I=>g==="all"||I.courseId===g).map(I=>({...I,status:Id(I.id,{assignments:c,grades:l,completedLessons:p})})).filter(I=>I.status.state==="assigned"||I.status.state==="overdue").sort((I,A)=>I.dueDate.localeCompare(A.dueDate));return u.jsxs("div",{className:"main-content grades-screen",children:[u.jsxs("header",{className:"grades-heading",children:[u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Your progress"}),u.jsx("h1",{children:"Grades"}),u.jsx("p",{children:"See your earned points, weekly scores, and work still due."})]}),u.jsxs("label",{className:"grades-filter",children:["Course",u.jsxs("select",{value:g,onChange:I=>y(I.target.value),children:[u.jsx("option",{value:"all",children:"All courses"}),ns.map(I=>u.jsx("option",{value:I.id,children:I.label},I.id))]})]})]}),u.jsx("p",{className:"grades-preview-note",children:"This preview does not display real student grades or assignments. Verified scores remain in the current Playground."}),u.jsxs("div",{className:"grades-summary",children:[u.jsxs("div",{className:"grades-stat surface-card",children:[u.jsx(vy,{size:19}),u.jsx("span",{children:"Points earned"}),u.jsxs("strong",{children:[_.earned," ",u.jsxs("small",{children:["/ ",_.possible]})]}),u.jsx("p",{children:_.percent===null?"No graded work yet":`${_.percent}% of graded points`})]}),u.jsxs("div",{className:"grades-stat surface-card",children:[u.jsx(um,{size:19}),u.jsx("span",{children:"Graded activities"}),u.jsx("strong",{children:_.count}),u.jsx("p",{children:"Lessons and challenges"})]}),u.jsxs("div",{className:"grades-stat surface-card",children:[u.jsx(yy,{size:19}),u.jsx("span",{children:"Most recent scored week"}),u.jsx("strong",{children:k?`${k.earned} / ${k.possible}`:"—"}),u.jsx("p",{children:k?`Week of ${Kl(k.week)}`:"No scores yet"})]})]}),u.jsxs("section",{className:"grades-panel surface-card",children:[u.jsx("h2",{children:"Weekly scores"}),C.length?u.jsx("div",{className:"grades-weeks",children:C.map(I=>u.jsxs("div",{className:"grades-week",children:[u.jsxs("div",{children:[u.jsxs("strong",{children:["Week of ",Kl(I.week)]}),u.jsxs("small",{children:[I.count," scored ",I.count===1?"activity":"activities"]})]}),u.jsxs("div",{className:"grades-week-score",children:[u.jsxs("strong",{children:[I.earned," / ",I.possible," pts"]}),u.jsx("progress",{value:I.earned,max:Math.max(I.possible,1),"aria-label":`Week of ${Kl(I.week)}: ${I.earned} of ${I.possible} points`})]})]},I.week))}):u.jsx("p",{children:"No graded work in this selection."})]}),g==="all"&&u.jsxs("section",{className:"grades-panel surface-card",children:[u.jsx("h2",{children:"By course"}),u.jsx("div",{className:"grades-course-list",children:E.map(I=>u.jsxs("div",{className:"grades-course-row","data-course":I.id,children:[u.jsx("span",{className:"grades-course-dot","aria-hidden":"true"}),u.jsx("strong",{children:I.label}),u.jsx("span",{children:I.count?`${I.earned} / ${I.possible} pts`:"No grades yet"})]},I.id))})]}),u.jsxs("section",{className:"grades-panel surface-card",children:[u.jsx("h2",{children:"Scored work"}),b.length?u.jsx("div",{className:"grades-entries",children:b.slice().sort((I,A)=>A.gradedAt.localeCompare(I.gradedAt)).map(I=>{var A;return u.jsxs("div",{className:"grades-entry",children:[u.jsxs("div",{children:[u.jsx("strong",{children:Xf(I.id,I.courseId)}),u.jsxs("small",{children:[u.jsx(Yl,{size:13}),((A=hi(I.courseId))==null?void 0:A.label)||I.courseId," · ",Cd(I.gradedAt)]})]}),u.jsxs("strong",{children:[I.earned," / ",I.possible," pts"]})]},I.id)})}):u.jsx("p",{children:"No scored lessons or challenges yet."})]}),u.jsxs("section",{className:"grades-panel surface-card",children:[u.jsx("h2",{children:"Still to complete"}),N.length?u.jsx("div",{className:"grades-entries",children:N.map(I=>{var A;return u.jsxs("div",{className:"grades-entry",children:[u.jsxs("div",{children:[u.jsx("strong",{children:Xf(I.id,I.courseId)}),u.jsx("small",{children:((A=hi(I.courseId))==null?void 0:A.label)||I.courseId})]}),u.jsxs("div",{className:"grades-due-meta",children:[u.jsx("span",{className:`assignment-status ${I.status.state}`,children:I.status.state==="overdue"?"Overdue":"Assigned"}),u.jsxs("small",{children:["Due ",Cd(I.dueDate)]})]})]},I.id)})}):u.jsx("p",{children:"Nothing outstanding in this selection."})]})]})}function Yw({filterCourse:l,onSelect:c,onBrowseCourse:p,grades:g=[]}){const[y,b]=Se.useState(""),[_,C]=Se.useState("all"),[k,E]=Se.useState("all"),[N,I]=Se.useState("all"),A=l||"all",V=Se.useMemo(()=>$w({query:y,difficulty:_,topic:k,language:N,course:A}),[y,_,k,N,A]),J=()=>{b(""),C("all"),E("all"),I("all"),p(null)};return u.jsxs("div",{className:"main-content challenge-bank-screen",children:[u.jsxs("header",{className:"challenge-bank-intro",children:[u.jsxs("div",{className:"eyebrow",children:[u.jsx(zd,{size:15})," Shared programming practice"]}),u.jsx("h1",{children:"Challenge Bank"}),u.jsx("p",{children:"One problem library for every class. Choose Python, Java, JavaScript, or C# when solving—without duplicating problems across courses."}),u.jsxs("div",{className:"challenge-summary",children:[u.jsx("strong",{children:Ud.length})," original challenges · ",u.jsx("strong",{children:"4"})," languages · ",u.jsx("strong",{children:"1"})," shared library"]})]}),u.jsxs("section",{className:"challenge-filters surface-card","aria-label":"Filter challenges",children:[u.jsxs("div",{className:"filter-title",children:[u.jsx(_y,{size:17}),u.jsx("strong",{children:"Find a challenge"}),u.jsxs("button",{type:"button",className:"filter-clear",onClick:J,children:[u.jsx(Wd,{size:14})," Clear filters"]})]}),u.jsxs("div",{className:"challenge-filter-grid",children:[u.jsxs("label",{className:"challenge-search-label",children:["Search",u.jsxs("span",{className:"challenge-search",children:[u.jsx(lm,{size:16}),u.jsx("input",{type:"search",value:y,placeholder:"Problem, skill, or topic",onChange:W=>b(W.target.value)})]})]}),u.jsxs("label",{children:["Course view",u.jsxs("select",{value:A,onChange:W=>p(W.target.value==="all"?null:W.target.value),children:[u.jsx("option",{value:"all",children:"All courses"}),ns.filter(W=>W.id!=="tsi-math").map(W=>u.jsx("option",{value:W.id,children:W.label},W.id))]})]}),u.jsxs("label",{children:["Difficulty",u.jsxs("select",{value:_,onChange:W=>C(W.target.value),children:[u.jsx("option",{value:"all",children:"Any difficulty"}),Kw.map(W=>u.jsx("option",{value:W,children:W},W))]})]}),u.jsxs("label",{children:["Topic",u.jsxs("select",{value:k,onChange:W=>E(W.target.value),children:[u.jsx("option",{value:"all",children:"Any topic"}),qw.map(W=>u.jsx("option",{value:W,children:W},W))]})]}),u.jsxs("label",{children:["Language",u.jsxs("select",{value:N,onChange:W=>I(W.target.value),children:[u.jsx("option",{value:"all",children:"Any language"}),rh.map(W=>u.jsx("option",{value:W,children:Ym[W]},W))]})]})]}),u.jsx("p",{className:"challenge-filter-note",children:"Course matching is informational. Confirm students have learned the prerequisite skills before assigning problems."})]}),u.jsxs("div",{className:"challenge-results-heading",children:[u.jsxs("h2",{children:["Available challenges ",u.jsxs("span",{children:["(",V.length,")"]})]}),u.jsx("span",{children:"Alphabetical order"})]}),V.length?u.jsx("div",{className:"challenge-card-grid",children:V.map(W=>u.jsxs("a",{className:"challenge-card surface-card",href:tm(W.id),onClick:ae=>{ae.button!==0||ae.metaKey||ae.ctrlKey||ae.shiftKey||ae.altKey||(ae.preventDefault(),c(W.id))},children:[u.jsxs("div",{className:"challenge-card-top",children:[u.jsx("span",{className:"challenge-level level-"+W.difficulty.toLowerCase().replace(" ","-"),children:W.difficulty}),u.jsx("span",{className:"challenge-points",children:vd("challenge:"+W.id,g)?`${vd("challenge:"+W.id,g).earned} / ${vd("challenge:"+W.id,g).possible} pts earned`:`${W.points} pts available`})]}),u.jsx("h3",{children:W.title}),u.jsx("p",{children:W.summary}),u.jsx("div",{className:"challenge-tags",children:W.tags.map(ae=>u.jsx("span",{children:ae},ae))}),u.jsxs("div",{className:"challenge-course-tags",children:[W.suggestedCourses.slice(0,3).map(ae=>{var D,H;return u.jsx("span",{title:(D=hi(ae))==null?void 0:D.label,children:((H=hi(ae))==null?void 0:H.short)||ae},ae)}),W.suggestedCourses.length>3&&u.jsxs("span",{children:["+",W.suggestedCourses.length-3]})]}),u.jsxs("span",{className:"challenge-open",children:["Open challenge ",u.jsx(Yp,{size:16})]})]},W.id))}):u.jsxs("div",{className:"challenge-empty surface-card",children:[u.jsx("h3",{children:"No matching challenges"}),u.jsx("p",{children:"Try a broader topic or clear the filters."}),u.jsx("button",{className:"btn",onClick:J,children:"Show all challenges"})]}),u.jsx("p",{className:"hint challenge-bottom-note",children:"Choose a problem, work through its examples, and compare your approach. Practice here does not count toward your grade."})]})}const Vw=(l,c)=>"designlab:challenge-code:"+l+":"+c;function Jw({challengeId:l,onBack:c}){const p=Vm(l),[g,y]=cn("designlab:challenge-language","python"),b=rh.includes(g)?g:"python",[_,C]=cn("designlab:challenge-left-width",420),k=Se.useRef(null);if(!p)return u.jsxs("div",{className:"main-content",children:[u.jsx("h1",{children:"Challenge not found"}),u.jsx("button",{className:"btn",onClick:c,children:"Back to bank"})]});const E=Bw(l,b),N={id:l,title:p.title,language:b,starter:E,kind:"Challenge",challenge:p.summary,points:p.points,console:"Run or Check executes published examples in your selected language.",storageKey:Vw(l,b),challengeExamples:Uw(l),isChallenge:!0,isPublished:!1},I=A=>{if(!k.current)return;const V=k.current.getBoundingClientRect();C(Math.max(280,Math.min(V.width-360,A.clientX-V.left)))};return u.jsxs("div",{className:"challenge-detail-page",children:[u.jsxs("div",{className:"challenge-breadcrumb",children:[u.jsxs("button",{onClick:c,children:[u.jsx(im,{size:16})," Challenge Bank"]}),u.jsx("span",{children:"/"}),u.jsx("span",{children:p.title})]}),u.jsxs("header",{className:"challenge-detail-heading surface-card",children:[u.jsxs("div",{className:"eyebrow",children:["Shared challenge · ",p.difficulty," · ",p.points," available points in the published contract"]}),u.jsx("h1",{children:p.title}),u.jsx("p",{children:p.summary}),u.jsx("p",{children:"Run and Check execute student code using only published examples. No submissions, student records, official points or hidden grading are connected here."}),u.jsxs("div",{className:"challenge-prerequisites",children:[u.jsx("strong",{children:"Prerequisites:"}),p.prerequisites.map(A=>u.jsx("span",{children:A},A))]})]}),u.jsxs("div",{className:"challenge-workspace",ref:k,style:{"--challenge-left":_+"px"},children:[u.jsxs("section",{className:"challenge-instructions",children:[u.jsxs("div",{className:"pane-header",children:[u.jsxs("strong",{children:[u.jsx(gy,{size:16})," Problem & examples"]}),u.jsx("span",{className:"challenge-points",children:"Practice only"})]}),u.jsx("div",{className:"markdown-preview challenge-markdown",dangerouslySetInnerHTML:{__html:Za(Hw(l))}})]}),u.jsx(dc,{axis:"columns",onDrag:I}),u.jsxs("section",{className:"challenge-editor-panel",children:[u.jsxs("div",{className:"challenge-runtime-toolbar",children:[u.jsxs("label",{className:"challenge-language-selector",children:["Language",u.jsx("select",{"aria-label":"Solution language",value:b,onChange:A=>y(A.target.value),children:rh.map(A=>u.jsx("option",{value:A,children:Ym[A]},A))})]}),u.jsx("span",{children:"Live public-example checks"})]}),u.jsx(Im,{lessonId:"challenge:"+l+":"+b,task:N},l+":"+b)]})]})]})}function Xw(){const[l,c]=Se.useState(()=>hd()),[p,g]=cn("designlab:course","computer-science-1"),[y,b]=cn("designlab:theme","dark"),[_,C]=cn("designlab:course-colors",{}),[k,E]=cn("designlab:sidebar",!0),[N,I]=cn("designlab:completed-lessons",[]),A=[],V=[],J=Qg(N,A),[W,ae]=Se.useState({}),[D,H]=Se.useState({}),[F,q]=Se.useState(!0),Y=Se.useMemo(()=>ns.map(j=>{if(j.id==="computer-science-1"||j.id==="test-prep")return j;if(j.id==="capstone")return{...j,units:[],lessons:[],lessonRecords:{},publishedContent:!1,projects:[]};const R=W[j.id];return R?{...j,...R,publishedContent:!0}:{...j,units:[],lessons:[],lessonRecords:{},projects:[],contentLoadingError:D[j.id]||null}}),[W,D]);Se.useEffect(()=>{const j=new AbortController;let R=!0;return Promise.all(["game-programming","mobile-app-dev","uil","tsi-math"].map(async G=>{try{return{courseId:G,data:await oy(G,{signal:j.signal})}}catch(M){return{courseId:G,error:String((M==null?void 0:M.message)||M)}}})).then(G=>{if(!R)return;const M={},Z={};for(const we of G)we.data?M[we.courseId]=we.data:Z[we.courseId]=we.error;ae(M),H(Z),q(!1)}),()=>{R=!1,j.abort()}},[]),Se.useEffect(()=>{c(hd(window.location.pathname,Y))},[Y]);const[ge,le]=cn("designlab:students",Sd),[be,We]=cn("designlab:journal-submissions",Ng);Se.useEffect(()=>{document.documentElement.dataset.theme=y},[y]),Se.useEffect(()=>{Kg(_,ns)},[_]);function Te(j,R){!ns.some(G=>G.id===j)||!Rd(R)||C(G=>({...G&&typeof G=="object"?G:{},[j]:R.toUpperCase()}))}function se(j){C(R=>{const G={...R&&typeof R=="object"?R:{}};return delete G[j],G})}Se.useEffect(()=>{var R;l.page==="course"&&g(l.courseId);const j=l.page==="course"?(R=hi(l.courseId))==null?void 0:R.label:l.page==="admin"?"Admin dashboard":l.page==="teacher"?"Teacher dashboard":l.page==="grades"?"Grades":l.page==="journals"?"Weekly journals":l.page==="challenges"?"Challenge Bank":l.page==="challenge"?"Coding challenge":"Your playgrounds";document.title=`${j||"Playground"} | Ms. Whitby's Playground — React Lab`},[l.page,l.courseId,g]),Se.useEffect(()=>{const j=()=>c(hd(window.location.pathname,Y));return window.addEventListener("popstate",j),window.addEventListener("hashchange",j),()=>{window.removeEventListener("popstate",j),window.removeEventListener("hashchange",j)}},[Y]);const Ce=Se.useCallback(j=>{window.location.pathname!==j&&window.history.pushState({},"",j),c(hd(window.location.pathname,Y)),window.scrollTo({top:0,behavior:"auto"})},[Y]);function oe(j,R){if(!j)return Ce(ql());g(j),Ce(Od(j,R))}function ye(j,R,G=null){Ce(nm(j,R,G))}function L(j){j==="teacher"?Ce(Zh()):j==="admin"?Ce(cy()):j==="journals"?Ce(dy()):j==="grades"?Ce(py()):j==="challenges"?Ce(Ul()):j==="course"?oe(l.page==="course"?l.courseId:p):Ce(ql())}const X=l.page,K=l.courseId||p;return u.jsxs("div",{className:"app-shell",children:[u.jsx(Fy,{sidebarOpen:k,onToggleSidebar:()=>E(!k),onHome:()=>Ce(ql()),theme:y,setTheme:b}),u.jsxs("div",{className:ho("app-layout",!k&&"sidebar-closed"),children:[u.jsx(Hy,{open:k,page:X,courseId:K,lessonId:l.page==="course"?l.lessonId:null,setPage:L,openCourse:oe,completedLessons:J,assignments:V,grades:A,availableCourses:Y,onOpenProject:ye}),u.jsx("main",{className:"main-panel",children:X==="home"?u.jsx($y,{availableCourses:Y,completedLessons:J,openCourse:oe,openTeacher:()=>Ce(Zh()),openChallenges:()=>Ce(Ul())}):X==="course"?u.jsx(Mb,{courseId:l.courseId,lessonId:l.lessonId,projectId:l.projectId,projectStepId:l.stepId,availableCourses:Y,openCourse:oe,openProject:ye,openChallenges:j=>Ce(Ul(j)),completedLessons:J,assignments:V,grades:A,onToggleLessonComplete:j=>I(R=>Gg(R,j)),courseColors:_,onSetCourseColor:Te,onResetCourseColor:se},l.courseId):X==="grades"?u.jsx(Gw,{grades:A,assignments:V,completedLessons:J}):X==="challenges"?u.jsx(Yw,{grades:A,filterCourse:l.filterCourse,onSelect:j=>Ce(tm(j)),onBrowseCourse:j=>Ce(Ul(j))}):X==="challenge"?u.jsx(Jw,{challengeId:l.challengeId,grades:A,onBack:()=>Ce(Ul())},l.challengeId):X==="journals"?u.jsx(l0,{submissions:be,setSubmissions:We}):X==="teacher"?u.jsx(n0,{students:ge,journalSubmissions:be}):X==="admin"?u.jsx(o0,{students:ge,setStudents:le}):F?u.jsxs("div",{className:"main-content route-not-found",role:"status",children:[u.jsx("h1",{children:"Loading published course materials…"}),u.jsx("p",{children:"The lesson and project links will appear once the course catalogs are loaded."})]}):u.jsxs("div",{className:"main-content route-not-found",children:[u.jsx("div",{className:"eyebrow",children:"Link not found"}),u.jsx("h1",{children:"That playground page doesn't exist."}),u.jsx("p",{children:"Check the link or return to the list of playgrounds."}),u.jsx("button",{className:"btn primary",onClick:()=>Ce(ql()),children:"See all playgrounds"})]})})]}),u.jsx(By,{})]})}Sg.createRoot(document.getElementById("root")).render(u.jsx(yg.StrictMode,{children:u.jsx(Xw,{})}));
