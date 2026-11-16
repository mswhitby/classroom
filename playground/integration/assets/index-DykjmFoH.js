var ag=Object.defineProperty;var og=(l,c,p)=>c in l?ag(l,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):l[c]=p;var on=(l,c,p)=>og(l,typeof c!="symbol"?c+"":c,p);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))g(y);new MutationObserver(y=>{for(const b of y)if(b.type==="childList")for(const S of b.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&g(S)}).observe(document,{childList:!0,subtree:!0});function p(y){const b={};return y.integrity&&(b.integrity=y.integrity),y.referrerPolicy&&(b.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?b.credentials="include":y.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function g(y){if(y.ep)return;y.ep=!0;const b=p(y);fetch(y.href,b)}})();function Xf(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Np={exports:{}},$u={},Ep={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function lg(){if(Hh)return Pt;Hh=1;var l=Symbol.for("react.element"),c=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),S=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),H=Symbol.iterator;function R(I){return I===null||typeof I!="object"?null:(I=H&&I[H]||I["@@iterator"],typeof I=="function"?I:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,Y={};function X(I,ee,_e){this.props=I,this.context=ee,this.refs=Y,this.updater=_e||J}X.prototype.isReactComponent={},X.prototype.setState=function(I,ee){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ee,"setState")},X.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function M(){}M.prototype=X.prototype;function F(I,ee,_e){this.props=I,this.context=ee,this.refs=Y,this.updater=_e||J}var B=F.prototype=new M;B.constructor=F,D(B,X.prototype),B.isPureReactComponent=!0;var W=Array.isArray,G=Object.prototype.hasOwnProperty,ce={current:null},le={key:!0,ref:!0,__self:!0,__source:!0};function ve(I,ee,_e){var Ie,qe={},Oe=null,Se=null;if(ee!=null)for(Ie in ee.ref!==void 0&&(Se=ee.ref),ee.key!==void 0&&(Oe=""+ee.key),ee)G.call(ee,Ie)&&!le.hasOwnProperty(Ie)&&(qe[Ie]=ee[Ie]);var Be=arguments.length-2;if(Be===1)qe.children=_e;else if(1<Be){for(var Ke=Array(Be),et=0;et<Be;et++)Ke[et]=arguments[et+2];qe.children=Ke}if(I&&I.defaultProps)for(Ie in Be=I.defaultProps,Be)qe[Ie]===void 0&&(qe[Ie]=Be[Ie]);return{$$typeof:l,type:I,key:Oe,ref:Se,props:qe,_owner:ce.current}}function Me(I,ee){return{$$typeof:l,type:I.type,key:ee,ref:I.ref,props:I.props,_owner:I._owner}}function ke(I){return typeof I=="object"&&I!==null&&I.$$typeof===l}function ae(I){var ee={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(_e){return ee[_e]})}var Ce=/\/+/g;function V(I,ee){return typeof I=="object"&&I!==null&&I.key!=null?ae(""+I.key):ee.toString(36)}function he(I,ee,_e,Ie,qe){var Oe=typeof I;(Oe==="undefined"||Oe==="boolean")&&(I=null);var Se=!1;if(I===null)Se=!0;else switch(Oe){case"string":case"number":Se=!0;break;case"object":switch(I.$$typeof){case l:case c:Se=!0}}if(Se)return Se=I,qe=qe(Se),I=Ie===""?"."+V(Se,0):Ie,W(qe)?(_e="",I!=null&&(_e=I.replace(Ce,"$&/")+"/"),he(qe,ee,_e,"",function(et){return et})):qe!=null&&(ke(qe)&&(qe=Me(qe,_e+(!qe.key||Se&&Se.key===qe.key?"":(""+qe.key).replace(Ce,"$&/")+"/")+I)),ee.push(qe)),1;if(Se=0,Ie=Ie===""?".":Ie+":",W(I))for(var Be=0;Be<I.length;Be++){Oe=I[Be];var Ke=Ie+V(Oe,Be);Se+=he(Oe,ee,_e,Ke,qe)}else if(Ke=R(I),typeof Ke=="function")for(I=Ke.call(I),Be=0;!(Oe=I.next()).done;)Oe=Oe.value,Ke=Ie+V(Oe,Be++),Se+=he(Oe,ee,_e,Ke,qe);else if(Oe==="object")throw ee=String(I),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return Se}function E(I,ee,_e){if(I==null)return I;var Ie=[],qe=0;return he(I,Ie,"","",function(Oe){return ee.call(_e,Oe,qe++)}),Ie}function Z(I){if(I._status===-1){var ee=I._result;ee=ee(),ee.then(function(_e){(I._status===0||I._status===-1)&&(I._status=1,I._result=_e)},function(_e){(I._status===0||I._status===-1)&&(I._status=2,I._result=_e)}),I._status===-1&&(I._status=0,I._result=ee)}if(I._status===1)return I._result.default;throw I._result}var Q={current:null},A={transition:null},N={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:A,ReactCurrentOwner:ce};function K(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:E,forEach:function(I,ee,_e){E(I,function(){ee.apply(this,arguments)},_e)},count:function(I){var ee=0;return E(I,function(){ee++}),ee},toArray:function(I){return E(I,function(ee){return ee})||[]},only:function(I){if(!ke(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Pt.Component=X,Pt.Fragment=p,Pt.Profiler=y,Pt.PureComponent=F,Pt.StrictMode=g,Pt.Suspense=k,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,Pt.act=K,Pt.cloneElement=function(I,ee,_e){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Ie=D({},I.props),qe=I.key,Oe=I.ref,Se=I._owner;if(ee!=null){if(ee.ref!==void 0&&(Oe=ee.ref,Se=ce.current),ee.key!==void 0&&(qe=""+ee.key),I.type&&I.type.defaultProps)var Be=I.type.defaultProps;for(Ke in ee)G.call(ee,Ke)&&!le.hasOwnProperty(Ke)&&(Ie[Ke]=ee[Ke]===void 0&&Be!==void 0?Be[Ke]:ee[Ke])}var Ke=arguments.length-2;if(Ke===1)Ie.children=_e;else if(1<Ke){Be=Array(Ke);for(var et=0;et<Ke;et++)Be[et]=arguments[et+2];Ie.children=Be}return{$$typeof:l,type:I.type,key:qe,ref:Oe,props:Ie,_owner:Se}},Pt.createContext=function(I){return I={$$typeof:S,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:b,_context:I},I.Consumer=I},Pt.createElement=ve,Pt.createFactory=function(I){var ee=ve.bind(null,I);return ee.type=I,ee},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(I){return{$$typeof:C,render:I}},Pt.isValidElement=ke,Pt.lazy=function(I){return{$$typeof:L,_payload:{_status:-1,_result:I},_init:Z}},Pt.memo=function(I,ee){return{$$typeof:j,type:I,compare:ee===void 0?null:ee}},Pt.startTransition=function(I){var ee=A.transition;A.transition={};try{I()}finally{A.transition=ee}},Pt.unstable_act=K,Pt.useCallback=function(I,ee){return Q.current.useCallback(I,ee)},Pt.useContext=function(I){return Q.current.useContext(I)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(I){return Q.current.useDeferredValue(I)},Pt.useEffect=function(I,ee){return Q.current.useEffect(I,ee)},Pt.useId=function(){return Q.current.useId()},Pt.useImperativeHandle=function(I,ee,_e){return Q.current.useImperativeHandle(I,ee,_e)},Pt.useInsertionEffect=function(I,ee){return Q.current.useInsertionEffect(I,ee)},Pt.useLayoutEffect=function(I,ee){return Q.current.useLayoutEffect(I,ee)},Pt.useMemo=function(I,ee){return Q.current.useMemo(I,ee)},Pt.useReducer=function(I,ee,_e){return Q.current.useReducer(I,ee,_e)},Pt.useRef=function(I){return Q.current.useRef(I)},Pt.useState=function(I){return Q.current.useState(I)},Pt.useSyncExternalStore=function(I,ee,_e){return Q.current.useSyncExternalStore(I,ee,_e)},Pt.useTransition=function(){return Q.current.useTransition()},Pt.version="18.3.1",Pt}var Bh;function rh(){return Bh||(Bh=1,Ep.exports=lg()),Ep.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function ug(){if(Uh)return $u;Uh=1;var l=rh(),c=Symbol.for("react.element"),p=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,y=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function S(C,k,j){var L,H={},R=null,J=null;j!==void 0&&(R=""+j),k.key!==void 0&&(R=""+k.key),k.ref!==void 0&&(J=k.ref);for(L in k)g.call(k,L)&&!b.hasOwnProperty(L)&&(H[L]=k[L]);if(C&&C.defaultProps)for(L in k=C.defaultProps,k)H[L]===void 0&&(H[L]=k[L]);return{$$typeof:c,type:C,key:R,ref:J,props:H,_owner:y.current}}return $u.Fragment=p,$u.jsx=S,$u.jsxs=S,$u}var qh;function cg(){return qh||(qh=1,Np.exports=ug()),Np.exports}var u=cg(),we=rh();const dg=Xf(we);var pd={},Lp={exports:{}},ei={},Pp={exports:{}},Ap={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function pg(){return Kh||(Kh=1,(function(l){function c(A,N){var K=A.length;A.push(N);e:for(;0<K;){var I=K-1>>>1,ee=A[I];if(0<y(ee,N))A[I]=N,A[K]=ee,K=I;else break e}}function p(A){return A.length===0?null:A[0]}function g(A){if(A.length===0)return null;var N=A[0],K=A.pop();if(K!==N){A[0]=K;e:for(var I=0,ee=A.length,_e=ee>>>1;I<_e;){var Ie=2*(I+1)-1,qe=A[Ie],Oe=Ie+1,Se=A[Oe];if(0>y(qe,K))Oe<ee&&0>y(Se,qe)?(A[I]=Se,A[Oe]=K,I=Oe):(A[I]=qe,A[Ie]=K,I=Ie);else if(Oe<ee&&0>y(Se,K))A[I]=Se,A[Oe]=K,I=Oe;else break e}}return N}function y(A,N){var K=A.sortIndex-N.sortIndex;return K!==0?K:A.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;l.unstable_now=function(){return b.now()}}else{var S=Date,C=S.now();l.unstable_now=function(){return S.now()-C}}var k=[],j=[],L=1,H=null,R=3,J=!1,D=!1,Y=!1,X=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(A){for(var N=p(j);N!==null;){if(N.callback===null)g(j);else if(N.startTime<=A)g(j),N.sortIndex=N.expirationTime,c(k,N);else break;N=p(j)}}function W(A){if(Y=!1,B(A),!D)if(p(k)!==null)D=!0,Z(G);else{var N=p(j);N!==null&&Q(W,N.startTime-A)}}function G(A,N){D=!1,Y&&(Y=!1,M(ve),ve=-1),J=!0;var K=R;try{for(B(N),H=p(k);H!==null&&(!(H.expirationTime>N)||A&&!ae());){var I=H.callback;if(typeof I=="function"){H.callback=null,R=H.priorityLevel;var ee=I(H.expirationTime<=N);N=l.unstable_now(),typeof ee=="function"?H.callback=ee:H===p(k)&&g(k),B(N)}else g(k);H=p(k)}if(H!==null)var _e=!0;else{var Ie=p(j);Ie!==null&&Q(W,Ie.startTime-N),_e=!1}return _e}finally{H=null,R=K,J=!1}}var ce=!1,le=null,ve=-1,Me=5,ke=-1;function ae(){return!(l.unstable_now()-ke<Me)}function Ce(){if(le!==null){var A=l.unstable_now();ke=A;var N=!0;try{N=le(!0,A)}finally{N?V():(ce=!1,le=null)}}else ce=!1}var V;if(typeof F=="function")V=function(){F(Ce)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,E=he.port2;he.port1.onmessage=Ce,V=function(){E.postMessage(null)}}else V=function(){X(Ce,0)};function Z(A){le=A,ce||(ce=!0,V())}function Q(A,N){ve=X(function(){A(l.unstable_now())},N)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(A){A.callback=null},l.unstable_continueExecution=function(){D||J||(D=!0,Z(G))},l.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<A?Math.floor(1e3/A):5},l.unstable_getCurrentPriorityLevel=function(){return R},l.unstable_getFirstCallbackNode=function(){return p(k)},l.unstable_next=function(A){switch(R){case 1:case 2:case 3:var N=3;break;default:N=R}var K=R;R=N;try{return A()}finally{R=K}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(A,N){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var K=R;R=A;try{return N()}finally{R=K}},l.unstable_scheduleCallback=function(A,N,K){var I=l.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?I+K:I):K=I,A){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=K+ee,A={id:L++,callback:N,priorityLevel:A,startTime:K,expirationTime:ee,sortIndex:-1},K>I?(A.sortIndex=K,c(j,A),p(k)===null&&A===p(j)&&(Y?(M(ve),ve=-1):Y=!0,Q(W,K-I))):(A.sortIndex=ee,c(k,A),D||J||(D=!0,Z(G))),A},l.unstable_shouldYield=ae,l.unstable_wrapCallback=function(A){var N=R;return function(){var K=R;R=N;try{return A.apply(this,arguments)}finally{R=K}}}})(Ap)),Ap}var $h;function hg(){return $h||($h=1,Pp.exports=pg()),Pp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function fg(){if(Gh)return ei;Gh=1;var l=rh(),c=hg();function p(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g=new Set,y={};function b(t,r){S(t,r),S(t+"Capture",r)}function S(t,r){for(y[t]=r,t=0;t<r.length;t++)g.add(r[t])}var C=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L={},H={};function R(t){return k.call(H,t)?!0:k.call(L,t)?!1:j.test(t)?H[t]=!0:(L[t]=!0,!1)}function J(t,r,o,d){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function D(t,r,o,d){if(r===null||typeof r>"u"||J(t,r,o,d))return!0;if(d)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(t,r,o,d,f,v,P){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=v,this.removeEmptyString=P}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){X[t]=new Y(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];X[r]=new Y(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){X[t]=new Y(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){X[t]=new Y(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){X[t]=new Y(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){X[t]=new Y(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){X[t]=new Y(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){X[t]=new Y(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){X[t]=new Y(t,5,!1,t.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function F(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(M,F);X[r]=new Y(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(M,F);X[r]=new Y(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(M,F);X[r]=new Y(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){X[t]=new Y(t,1,!1,t.toLowerCase(),null,!1,!1)}),X.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){X[t]=new Y(t,1,!1,t.toLowerCase(),null,!0,!0)});function B(t,r,o,d){var f=X.hasOwnProperty(r)?X[r]:null;(f!==null?f.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(D(r,o,f,d)&&(o=null),d||f===null?R(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(r=f.attributeName,d=f.attributeNamespace,o===null?t.removeAttribute(r):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,d?t.setAttributeNS(d,r,o):t.setAttribute(r,o))))}var W=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),ce=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),Me=Symbol.for("react.profiler"),ke=Symbol.for("react.provider"),ae=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),A=Symbol.iterator;function N(t){return t===null||typeof t!="object"?null:(t=A&&t[A]||t["@@iterator"],typeof t=="function"?t:null)}var K=Object.assign,I;function ee(t){if(I===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+t}var _e=!1;function Ie(t,r){if(!t||_e)return"";_e=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(me){var d=me}Reflect.construct(t,[],r)}else{try{r.call()}catch(me){d=me}t.call(r.prototype)}else{try{throw Error()}catch(me){d=me}t()}}catch(me){if(me&&d&&typeof me.stack=="string"){for(var f=me.stack.split(`
`),v=d.stack.split(`
`),P=f.length-1,$=v.length-1;1<=P&&0<=$&&f[P]!==v[$];)$--;for(;1<=P&&0<=$;P--,$--)if(f[P]!==v[$]){if(P!==1||$!==1)do if(P--,$--,0>$||f[P]!==v[$]){var te=`
`+f[P].replace(" at new "," at ");return t.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",t.displayName)),te}while(1<=P&&0<=$);break}}}finally{_e=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ee(t):""}function qe(t){switch(t.tag){case 5:return ee(t.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return t=Ie(t.type,!1),t;case 11:return t=Ie(t.type.render,!1),t;case 1:return t=Ie(t.type,!0),t;default:return""}}function Oe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case le:return"Fragment";case ce:return"Portal";case Me:return"Profiler";case ve:return"StrictMode";case V:return"Suspense";case he:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ae:return(t.displayName||"Context")+".Consumer";case ke:return(t._context.displayName||"Context")+".Provider";case Ce:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case E:return r=t.displayName||null,r!==null?r:Oe(t.type)||"Memo";case Z:r=t._payload,t=t._init;try{return Oe(t(r))}catch{}}return null}function Se(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(r);case 8:return r===ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ke(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function et(t){var r=Ke(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),d=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,v=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(P){d=""+P,v.call(this,P)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return d},setValue:function(P){d=""+P},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function $e(t){t._valueTracker||(t._valueTracker=et(t))}function Ft(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),d="";return t&&(d=Ke(t)?t.checked?"true":"false":t.value),t=d,t!==o?(r.setValue(t),!0):!1}function Yt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ct(t,r){var o=r.checked;return K({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function xt(t,r){var o=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;o=Be(r.value!=null?r.value:o),t._wrapperState={initialChecked:d,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function tt(t,r){r=r.checked,r!=null&&B(t,"checked",r,!1)}function Ue(t,r){tt(t,r);var o=Be(r.value),d=r.type;if(o!=null)d==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(d==="submit"||d==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?yt(t,r.type,o):r.hasOwnProperty("defaultValue")&&yt(t,r.type,Be(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function vt(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function yt(t,r,o){(r!=="number"||Yt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Qe=Array.isArray;function ut(t,r,o,d){if(t=t.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=r.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&d&&(t[o].defaultSelected=!0)}else{for(o=""+Be(o),r=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,d&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function oe(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(p(91));return K({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function je(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(p(92));if(Qe(o)){if(1<o.length)throw Error(p(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:Be(o)}}function fe(t,r){var o=Be(r.value),d=Be(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),d!=null&&(t.defaultValue=""+d)}function kt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Ye(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Ye(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ze,mt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,d,f){MSApp.execUnsafeLocalFunction(function(){return t(r,o,d,f)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ze=Ze||document.createElement("div"),Ze.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ze.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function pt(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nr=["Webkit","ms","Moz","O"];Object.keys(Xt).forEach(function(t){nr.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Xt[r]=Xt[t]})});function Sr(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Xt.hasOwnProperty(t)&&Xt[t]?(""+r).trim():r+"px"}function Rr(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var d=o.indexOf("--")===0,f=Sr(o,r[o],d);o==="float"&&(o="cssFloat"),d?t.setProperty(o,f):t[o]=f}}var Br=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ur(t,r){if(r){if(Br[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(p(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(p(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(p(61))}if(r.style!=null&&typeof r.style!="object")throw Error(p(62))}}function bt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function rt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _r=null,tn=null,It=null;function qt(t){if(t=pn(t)){if(typeof _r!="function")throw Error(p(280));var r=t.stateNode;r&&(r=gn(r),_r(t.stateNode,t.type,r))}}function xn(t){tn?It?It.push(t):It=[t]:tn=t}function mn(){if(tn){var t=tn,r=It;if(It=tn=null,qt(t),r)for(t=0;t<r.length;t++)qt(r[t])}}function Nn(t,r){return t(r)}function bn(){}var ti=!1;function In(t,r,o){if(ti)return t(r,o);ti=!0;try{return Nn(t,r,o)}finally{ti=!1,(tn!==null||It!==null)&&(bn(),mn())}}function pr(t,r){var o=t.stateNode;if(o===null)return null;var d=gn(o);if(d===null)return null;o=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(t=t.type,d=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!d;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(p(231,r,typeof o));return o}var mi=!1;if(C)try{var En={};Object.defineProperty(En,"passive",{get:function(){mi=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{mi=!1}function ss(t,r,o,d,f,v,P,$,te){var me=Array.prototype.slice.call(arguments,3);try{r.apply(o,me)}catch(Re){this.onError(Re)}}var wn=!1,Cr=null,qr=!1,Ir=null,Tr={onError:function(t){wn=!0,Cr=t}};function gi(t,r,o,d,f,v,P,$,te){wn=!1,Cr=null,ss.apply(Tr,arguments)}function as(t,r,o,d,f,v,P,$,te){if(gi.apply(this,arguments),wn){if(wn){var me=Cr;wn=!1,Cr=null}else throw Error(p(198));qr||(qr=!0,Ir=me)}}function On(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function os(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Mi(t){if(On(t)!==t)throw Error(p(188))}function Or(t){var r=t.alternate;if(!r){if(r=On(t),r===null)throw Error(p(188));return r!==t?null:t}for(var o=t,d=r;;){var f=o.return;if(f===null)break;var v=f.alternate;if(v===null){if(d=f.return,d!==null){o=d;continue}break}if(f.child===v.child){for(v=f.child;v;){if(v===o)return Mi(f),t;if(v===d)return Mi(f),r;v=v.sibling}throw Error(p(188))}if(o.return!==d.return)o=f,d=v;else{for(var P=!1,$=f.child;$;){if($===o){P=!0,o=f,d=v;break}if($===d){P=!0,d=f,o=v;break}$=$.sibling}if(!P){for($=v.child;$;){if($===o){P=!0,o=v,d=f;break}if($===d){P=!0,d=v,o=f;break}$=$.sibling}if(!P)throw Error(p(189))}}if(o.alternate!==d)throw Error(p(190))}if(o.tag!==3)throw Error(p(188));return o.stateNode.current===o?t:r}function Gn(t){return t=Or(t),t!==null?yi(t):null}function yi(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=yi(t);if(r!==null)return r;t=t.sibling}return null}var Di=c.unstable_scheduleCallback,Bt=c.unstable_cancelCallback,Mr=c.unstable_shouldYield,ls=c.unstable_requestPaint,Rt=c.unstable_now,zi=c.unstable_getCurrentPriorityLevel,ni=c.unstable_ImmediatePriority,Vt=c.unstable_UserBlockingPriority,Je=c.unstable_NormalPriority,ri=c.unstable_LowPriority,us=c.unstable_IdlePriority,Yn=null,T=null;function U(t){if(T&&typeof T.onCommitFiberRoot=="function")try{T.onCommitFiberRoot(Yn,t,void 0,(t.current.flags&128)===128)}catch{}}var ge=Math.clz32?Math.clz32:He,Ne=Math.log,pe=Math.LN2;function He(t){return t>>>=0,t===0?32:31-(Ne(t)/pe|0)|0}var jt=64,Qt=4194304;function kn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kr(t,r){var o=t.pendingLanes;if(o===0)return 0;var d=0,f=t.suspendedLanes,v=t.pingedLanes,P=o&268435455;if(P!==0){var $=P&~f;$!==0?d=kn($):(v&=P,v!==0&&(d=kn(v)))}else P=o&~f,P!==0?d=kn(P):v!==0&&(d=kn(v));if(d===0)return 0;if(r!==0&&r!==d&&(r&f)===0&&(f=d&-d,v=r&-r,f>=v||f===16&&(v&4194240)!==0))return r;if((d&4)!==0&&(d|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=d;0<r;)o=31-ge(r),f=1<<o,d|=t[o],r&=~f;return d}function nl(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(t,r){for(var o=t.suspendedLanes,d=t.pingedLanes,f=t.expirationTimes,v=t.pendingLanes;0<v;){var P=31-ge(v),$=1<<P,te=f[P];te===-1?(($&o)===0||($&d)!==0)&&(f[P]=nl($,r)):te<=r&&(t.expiredLanes|=$),v&=~$}}function no(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ro(){var t=jt;return jt<<=1,(jt&4194240)===0&&(jt=64),t}function Fi(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function rr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-ge(r),t[r]=o}function io(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var d=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-ge(o),v=1<<f;r[f]=0,d[f]=-1,t[f]=-1,o&=~v}}function Wi(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var d=31-ge(o),f=1<<d;f&r|t[d]&r&&(t[d]|=r),o&=~f}}var Nt=0;function cs(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Is,vi,ya,xi,Hi,ir=!1,va=[],Dr=null,ii=null,Mn=null,$r=new Map,Os=new Map,jr=[],Ms="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function so(t,r){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":ii=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":$r.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(r.pointerId)}}function Ds(t,r,o,d,f,v){return t===null||t.nativeEvent!==v?(t={blockedOn:r,domEventName:o,eventSystemFlags:d,nativeEvent:v,targetContainers:[f]},r!==null&&(r=pn(r),r!==null&&vi(r)),t):(t.eventSystemFlags|=d,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function Yl(t,r,o,d,f){switch(r){case"focusin":return Dr=Ds(Dr,t,r,o,d,f),!0;case"dragenter":return ii=Ds(ii,t,r,o,d,f),!0;case"mouseover":return Mn=Ds(Mn,t,r,o,d,f),!0;case"pointerover":var v=f.pointerId;return $r.set(v,Ds($r.get(v)||null,t,r,o,d,f)),!0;case"gotpointercapture":return v=f.pointerId,Os.set(v,Ds(Os.get(v)||null,t,r,o,d,f)),!0}return!1}function ao(t){var r=Ln(t.target);if(r!==null){var o=On(r);if(o!==null){if(r=o.tag,r===13){if(r=os(o),r!==null){t.blockedOn=r,Hi(t.priority,function(){ya(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ds(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=Tt(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var d=new o.constructor(o.type,o);fi=d,o.target.dispatchEvent(d),fi=null}else return r=pn(o),r!==null&&vi(r),t.blockedOn=o,!1;r.shift()}return!0}function zs(t,r,o){ds(t)&&o.delete(r)}function oo(){ir=!1,Dr!==null&&ds(Dr)&&(Dr=null),ii!==null&&ds(ii)&&(ii=null),Mn!==null&&ds(Mn)&&(Mn=null),$r.forEach(zs),Os.forEach(zs)}function bi(t,r){t.blockedOn===r&&(t.blockedOn=null,ir||(ir=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,oo)))}function Te(t){function r(f){return bi(f,t)}if(0<va.length){bi(va[0],t);for(var o=1;o<va.length;o++){var d=va[o];d.blockedOn===t&&(d.blockedOn=null)}}for(Dr!==null&&bi(Dr,t),ii!==null&&bi(ii,t),Mn!==null&&bi(Mn,t),$r.forEach(r),Os.forEach(r),o=0;o<jr.length;o++)d=jr[o],d.blockedOn===t&&(d.blockedOn=null);for(;0<jr.length&&(o=jr[0],o.blockedOn===null);)ao(o),o.blockedOn===null&&jr.shift()}var O=W.ReactCurrentBatchConfig,re=!0;function xe(t,r,o,d){var f=Nt,v=O.transition;O.transition=null;try{Nt=1,nt(t,r,o,d)}finally{Nt=f,O.transition=v}}function Le(t,r,o,d){var f=Nt,v=O.transition;O.transition=null;try{Nt=4,nt(t,r,o,d)}finally{Nt=f,O.transition=v}}function nt(t,r,o,d){if(re){var f=Tt(t,r,o,d);if(f===null)pu(t,r,d,ct,o),so(t,d);else if(Yl(f,t,r,o,d))d.stopPropagation();else if(so(t,d),r&4&&-1<Ms.indexOf(t)){for(;f!==null;){var v=pn(f);if(v!==null&&Is(v),v=Tt(t,r,o,d),v===null&&pu(t,r,d,ct,o),v===f)break;f=v}f!==null&&d.stopPropagation()}else pu(t,r,d,null,o)}}var ct=null;function Tt(t,r,o,d){if(ct=null,t=rt(d),t=Ln(t),t!==null)if(r=On(t),r===null)t=null;else if(o=r.tag,o===13){if(t=os(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ct=t,null}function cn(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zi()){case ni:return 1;case Vt:return 4;case Je:case ri:return 16;case us:return 536870912;default:return 16}default:return 16}}var Kt=null,hr=null,Vn=null;function fr(){if(Vn)return Vn;var t,r=hr,o=r.length,d,f="value"in Kt?Kt.value:Kt.textContent,v=f.length;for(t=0;t<o&&r[t]===f[t];t++);var P=o-t;for(d=1;d<=P&&r[o-d]===f[v-d];d++);return Vn=f.slice(t,1<d?1-d:void 0)}function dn(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Nr(){return!0}function rl(){return!1}function Sn(t){function r(o,d,f,v,P){this._reactName=o,this._targetInst=f,this.type=d,this.nativeEvent=v,this.target=P,this.currentTarget=null;for(var $ in t)t.hasOwnProperty($)&&(o=t[$],this[$]=o?o(v):v[$]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Nr:rl,this.isPropagationStopped=rl,this}return K(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),r}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lo=Sn(Bi),wi=K({},Bi,{view:0,detail:0}),qd=Sn(wi),Vl,Jl,uo,co=K({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Vl=t.screenX-uo.screenX,Jl=t.screenY-uo.screenY):Jl=Vl=0,uo=t),Vl)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),Xl=Sn(co),Kd=K({},co,{dataTransfer:0}),$d=Sn(Kd),Gd=K({},wi,{relatedTarget:0}),Ql=Sn(Gd),hc=K({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Yd=Sn(hc),fc=K({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),il=Sn(fc),xa=K({},Bi,{data:0}),mc=Sn(xa),Vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},po={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dn(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=po[t])?!!r[t]:!1}function Zl(){return Dn}var gc=K({},wi,{key:function(t){if(t.key){var r=Vd[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=dn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?dn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ho=Sn(gc),Xd=K({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=Sn(Xd),Qd=K({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),tu=Sn(Qd),yc=K({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zd=Sn(yc),ep=K({},co,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vc=Sn(ep),xc=[9,13,27,32],nu=C&&"CompositionEvent"in window,Ui=null;C&&"documentMode"in document&&(Ui=document.documentMode);var qi=C&&"TextEvent"in window&&!Ui,fo=C&&(!nu||Ui&&8<Ui&&11>=Ui),sl=" ",ru=!1;function si(t,r){switch(t){case"keyup":return xc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ps(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function tp(t,r){switch(t){case"compositionend":return ps(r);case"keypress":return r.which!==32?null:(ru=!0,sl);case"textInput":return t=r.data,t===sl&&ru?null:t;default:return null}}function bc(t,r){if(hs)return t==="compositionend"||!nu&&si(t,r)?(t=fr(),Vn=hr=Kt=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return fo&&r.locale!=="ko"?null:r.data;default:return null}}var np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!np[t.type]:r==="textarea"}function al(t,r,o,d){xn(d),r=Ca(r,"onChange"),0<r.length&&(o=new lo("onChange","change",null,o,d),t.push({event:o,listeners:r}))}var ki=null,Er=null;function wc(t){gl(t,0)}function mo(t){var r=Cn(t);if(Ft(r))return t}function rp(t,r){if(t==="change")return r}var kc=!1;if(C){var su;if(C){var ol="oninput"in document;if(!ol){var au=document.createElement("div");au.setAttribute("oninput","return;"),ol=typeof au.oninput=="function"}su=ol}else su=!1;kc=su&&(!document.documentMode||9<document.documentMode)}function ba(){ki&&(ki.detachEvent("onpropertychange",ou),Er=ki=null)}function ou(t){if(t.propertyName==="value"&&mo(Er)){var r=[];al(r,Er,t,rt(t)),In(wc,r)}}function Sc(t,r,o){t==="focusin"?(ba(),ki=r,Er=o,ki.attachEvent("onpropertychange",ou)):t==="focusout"&&ba()}function lu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mo(Er)}function ll(t,r){if(t==="click")return mo(r)}function _c(t,r){if(t==="input"||t==="change")return mo(r)}function ul(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var _n=typeof Object.is=="function"?Object.is:ul;function wa(t,r){if(_n(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),d=Object.keys(r);if(o.length!==d.length)return!1;for(d=0;d<o.length;d++){var f=o[d];if(!k.call(r,f)||!_n(t[f],r[f]))return!1}return!0}function cl(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dl(t,r){var o=cl(t);t=0;for(var d;o;){if(o.nodeType===3){if(d=t+o.textContent.length,t<=r&&d>=r)return{node:o,offset:r-t};t=d}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=cl(o)}}function uu(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?uu(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function cu(){for(var t=window,r=Yt();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Yt(t.document)}return r}function go(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function ip(t){var r=cu(),o=t.focusedElem,d=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&uu(o.ownerDocument.documentElement,o)){if(d!==null&&go(o)){if(r=d.start,t=d.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,v=Math.min(d.start,f);d=d.end===void 0?v:Math.min(d.end,f),!t.extend&&v>d&&(f=d,d=v,v=f),f=dl(o,v);var P=dl(o,d);f&&P&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==P.node||t.focusOffset!==P.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),v>d?(t.addRange(r),t.extend(P.node,P.offset)):(r.setEnd(P.node,P.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sp=C&&"documentMode"in document&&11>=document.documentMode,ka=null,Ki=null,Si=null,fs=!1;function pl(t,r,o){var d=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;fs||ka==null||ka!==Yt(d)||(d=ka,"selectionStart"in d&&go(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Si&&wa(Si,d)||(Si=d,d=Ca(Ki,"onSelect"),0<d.length&&(r=new lo("onSelect","select",null,r,o),t.push({event:r,listeners:d}),r.target=ka)))}function Sa(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Fs={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},yo={},ms={};C&&(ms=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function _i(t){if(yo[t])return yo[t];if(!Fs[t])return t;var r=Fs[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in ms)return yo[t]=r[o];return t}var sr=_i("animationend"),$i=_i("animationiteration"),Gi=_i("animationstart"),vo=_i("transitionend"),Cc=new Map,du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,r){Cc.set(t,r),b(r,[t])}for(var hl=0;hl<du.length;hl++){var xo=du[hl],fl=xo.toLowerCase(),ap=xo[0].toUpperCase()+xo.slice(1);Gr(fl,"on"+ap)}Gr(sr,"onAnimationEnd"),Gr($i,"onAnimationIteration"),Gr(Gi,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(vo,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function ml(t,r,o){var d=t.type||"unknown-event";t.currentTarget=o,as(d,r,void 0,t),t.currentTarget=null}function gl(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var d=t[o],f=d.event;d=d.listeners;e:{var v=void 0;if(r)for(var P=d.length-1;0<=P;P--){var $=d[P],te=$.instance,me=$.currentTarget;if($=$.listener,te!==v&&f.isPropagationStopped())break e;ml(f,$,me),v=te}else for(P=0;P<d.length;P++){if($=d[P],te=$.instance,me=$.currentTarget,$=$.listener,te!==v&&f.isPropagationStopped())break e;ml(f,$,me),v=te}}}if(qr)throw t=Ir,qr=!1,Ir=null,t}function Wt(t,r){var o=r[hu];o===void 0&&(o=r[hu]=new Set);var d=t+"__bubble";o.has(d)||(jc(r,t,2,!1),o.add(d))}function _a(t,r,o){var d=0;r&&(d|=4),jc(o,t,d,r)}var bo="_reactListening"+Math.random().toString(36).slice(2);function gs(t){if(!t[bo]){t[bo]=!0,g.forEach(function(o){o!=="selectionchange"&&(Tc.has(o)||_a(o,!1,t),_a(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[bo]||(r[bo]=!0,_a("selectionchange",!1,r))}}function jc(t,r,o,d){switch(cn(r)){case 1:var f=xe;break;case 4:f=Le;break;default:f=nt}o=f.bind(null,r,o,t),f=void 0,!mi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),d?f!==void 0?t.addEventListener(r,o,{capture:!0,passive:f}):t.addEventListener(r,o,!0):f!==void 0?t.addEventListener(r,o,{passive:f}):t.addEventListener(r,o,!1)}function pu(t,r,o,d,f){var v=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var P=d.tag;if(P===3||P===4){var $=d.stateNode.containerInfo;if($===f||$.nodeType===8&&$.parentNode===f)break;if(P===4)for(P=d.return;P!==null;){var te=P.tag;if((te===3||te===4)&&(te=P.stateNode.containerInfo,te===f||te.nodeType===8&&te.parentNode===f))return;P=P.return}for(;$!==null;){if(P=Ln($),P===null)return;if(te=P.tag,te===5||te===6){d=v=P;continue e}$=$.parentNode}}d=d.return}In(function(){var me=v,Re=rt(o),De=[];e:{var Pe=Cc.get(t);if(Pe!==void 0){var Xe=lo,it=t;switch(t){case"keypress":if(dn(o)===0)break e;case"keydown":case"keyup":Xe=ho;break;case"focusin":it="focus",Xe=Ql;break;case"focusout":it="blur",Xe=Ql;break;case"beforeblur":case"afterblur":Xe=Ql;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=Xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=$d;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=tu;break;case sr:case $i:case Gi:Xe=Yd;break;case vo:Xe=Zd;break;case"scroll":Xe=qd;break;case"wheel":Xe=vc;break;case"copy":case"cut":case"paste":Xe=il;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=eu}var st=(r&4)!==0,qn=!st&&t==="scroll",ue=st?Pe!==null?Pe+"Capture":null:Pe;st=[];for(var ie=me,de;ie!==null;){de=ie;var We=de.stateNode;if(de.tag===5&&We!==null&&(de=We,ue!==null&&(We=pr(ie,ue),We!=null&&st.push(wo(ie,We,de)))),qn)break;ie=ie.return}0<st.length&&(Pe=new Xe(Pe,it,null,o,Re),De.push({event:Pe,listeners:st}))}}if((r&7)===0){e:{if(Pe=t==="mouseover"||t==="pointerover",Xe=t==="mouseout"||t==="pointerout",Pe&&o!==fi&&(it=o.relatedTarget||o.fromElement)&&(Ln(it)||it[Ji]))break e;if((Xe||Pe)&&(Pe=Re.window===Re?Re:(Pe=Re.ownerDocument)?Pe.defaultView||Pe.parentWindow:window,Xe?(it=o.relatedTarget||o.toElement,Xe=me,it=it?Ln(it):null,it!==null&&(qn=On(it),it!==qn||it.tag!==5&&it.tag!==6)&&(it=null)):(Xe=null,it=me),Xe!==it)){if(st=Xl,We="onMouseLeave",ue="onMouseEnter",ie="mouse",(t==="pointerout"||t==="pointerover")&&(st=eu,We="onPointerLeave",ue="onPointerEnter",ie="pointer"),qn=Xe==null?Pe:Cn(Xe),de=it==null?Pe:Cn(it),Pe=new st(We,ie+"leave",Xe,o,Re),Pe.target=qn,Pe.relatedTarget=de,We=null,Ln(Re)===me&&(st=new st(ue,ie+"enter",it,o,Re),st.target=de,st.relatedTarget=qn,We=st),qn=We,Xe&&it)t:{for(st=Xe,ue=it,ie=0,de=st;de;de=ys(de))ie++;for(de=0,We=ue;We;We=ys(We))de++;for(;0<ie-de;)st=ys(st),ie--;for(;0<de-ie;)ue=ys(ue),de--;for(;ie--;){if(st===ue||ue!==null&&st===ue.alternate)break t;st=ys(st),ue=ys(ue)}st=null}else st=null;Xe!==null&&Hs(De,Pe,Xe,st,!1),it!==null&&qn!==null&&Hs(De,qn,it,st,!0)}}e:{if(Pe=me?Cn(me):window,Xe=Pe.nodeName&&Pe.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&Pe.type==="file")var lt=rp;else if(iu(Pe))if(kc)lt=_c;else{lt=lu;var ht=Sc}else(Xe=Pe.nodeName)&&Xe.toLowerCase()==="input"&&(Pe.type==="checkbox"||Pe.type==="radio")&&(lt=ll);if(lt&&(lt=lt(t,me))){al(De,lt,o,Re);break e}ht&&ht(t,Pe,me),t==="focusout"&&(ht=Pe._wrapperState)&&ht.controlled&&Pe.type==="number"&&yt(Pe,"number",Pe.value)}switch(ht=me?Cn(me):window,t){case"focusin":(iu(ht)||ht.contentEditable==="true")&&(ka=ht,Ki=me,Si=null);break;case"focusout":Si=Ki=ka=null;break;case"mousedown":fs=!0;break;case"contextmenu":case"mouseup":case"dragend":fs=!1,pl(De,o,Re);break;case"selectionchange":if(sp)break;case"keydown":case"keyup":pl(De,o,Re)}var ft;if(nu)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else hs?si(t,o)&&(wt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(wt="onCompositionStart");wt&&(fo&&o.locale!=="ko"&&(hs||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&hs&&(ft=fr()):(Kt=Re,hr="value"in Kt?Kt.value:Kt.textContent,hs=!0)),ht=Ca(me,wt),0<ht.length&&(wt=new mc(wt,t,null,o,Re),De.push({event:wt,listeners:ht}),ft?wt.data=ft:(ft=ps(o),ft!==null&&(wt.data=ft)))),(ft=qi?tp(t,o):bc(t,o))&&(me=Ca(me,"onBeforeInput"),0<me.length&&(Re=new mc("onBeforeInput","beforeinput",null,o,Re),De.push({event:Re,listeners:me}),Re.data=ft))}gl(De,r)})}function wo(t,r,o){return{instance:t,listener:r,currentTarget:o}}function Ca(t,r){for(var o=r+"Capture",d=[];t!==null;){var f=t,v=f.stateNode;f.tag===5&&v!==null&&(f=v,v=pr(t,o),v!=null&&d.unshift(wo(t,v,f)),v=pr(t,r),v!=null&&d.push(wo(t,v,f))),t=t.return}return d}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hs(t,r,o,d,f){for(var v=r._reactName,P=[];o!==null&&o!==d;){var $=o,te=$.alternate,me=$.stateNode;if(te!==null&&te===d)break;$.tag===5&&me!==null&&($=me,f?(te=pr(o,v),te!=null&&P.unshift(wo(o,te,$))):f||(te=pr(o,v),te!=null&&P.push(wo(o,te,$)))),o=o.return}P.length!==0&&t.push({event:r,listeners:P})}var ko=/\r\n?/g,op=/\u0000|\uFFFD/g;function So(t){return(typeof t=="string"?t:""+t).replace(ko,`
`).replace(op,"")}function _o(t,r,o){if(r=So(r),So(t)!==r&&o)throw Error(p(425))}function vs(){}var yl=null,Yi=null;function Bs(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,Co=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,Nc=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(t){return Us.resolve(null).then(t).catch(Ec)}:Vi;function Ec(t){setTimeout(function(){throw t})}function vl(t,r){var o=r,d=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(d===0){t.removeChild(f),Te(r);return}d--}else o!=="$"&&o!=="$?"&&o!=="$!"||d++;o=f}while(o);Te(r)}function xs(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function bs(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Yr,To="__reactProps$"+Yr,Ji="__reactContainer$"+Yr,hu="__reactEvents$"+Yr,lp="__reactListeners$"+Yr,up="__reactHandles$"+Yr;function Ln(t){var r=t[Ci];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Ji]||o[Ci]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=bs(t);t!==null;){if(o=t[Ci])return o;t=bs(t)}return r}t=o,o=t.parentNode}return null}function pn(t){return t=t[Ci]||t[Ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(p(33))}function gn(t){return t[To]||null}var qs=[],Ta=-1;function ai(t){return{current:t}}function nn(t){0>Ta||(t.current=qs[Ta],qs[Ta]=null,Ta--)}function Zt(t,r){Ta++,qs[Ta]=t.current,t.current=r}var ws={},Jn=ai(ws),mr=ai(!1),Xi=ws;function ja(t,r){var o=t.type.contextTypes;if(!o)return ws;var d=t.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var f={},v;for(v in o)f[v]=r[v];return d&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function ar(t){return t=t.childContextTypes,t!=null}function Na(){nn(mr),nn(Jn)}function fu(t,r,o){if(Jn.current!==ws)throw Error(p(168));Zt(Jn,r),Zt(mr,o)}function mu(t,r,o){var d=t.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return o;d=d.getChildContext();for(var f in d)if(!(f in r))throw Error(p(108,Se(t)||"Unknown",f));return K({},o,d)}function Ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ws,Xi=Jn.current,Zt(Jn,t),Zt(mr,mr.current),!0}function gu(t,r,o){var d=t.stateNode;if(!d)throw Error(p(169));o?(t=mu(t,r,Xi),d.__reactInternalMemoizedMergedChildContext=t,nn(mr),nn(Jn),Zt(Jn,t)):nn(mr),Zt(mr,o)}var zr=null,xl=!1,La=!1;function Ti(t){zr===null?zr=[t]:zr.push(t)}function Lc(t){xl=!0,Ti(t)}function ks(){if(!La&&zr!==null){La=!0;var t=0,r=Nt;try{var o=zr;for(Nt=1;t<o.length;t++){var d=o[t];do d=d(!0);while(d!==null)}zr=null,xl=!1}catch(f){throw zr!==null&&(zr=zr.slice(t+1)),Di(ni,ks),f}finally{Nt=r,La=!1}}return null}var Ks=[],Xn=0,At=null,Lr=0,zn=[],Fn=0,Ss=null,oi=1,ji="";function $s(t,r){Ks[Xn++]=Lr,Ks[Xn++]=At,At=t,Lr=r}function bl(t,r,o){zn[Fn++]=oi,zn[Fn++]=ji,zn[Fn++]=Ss,Ss=t;var d=oi;t=ji;var f=32-ge(d)-1;d&=~(1<<f),o+=1;var v=32-ge(r)+f;if(30<v){var P=f-f%5;v=(d&(1<<P)-1).toString(32),d>>=P,f-=P,oi=1<<32-ge(r)+f|o<<f|d,ji=v+t}else oi=1<<v|o<<f|d,ji=t}function Gs(t){t.return!==null&&($s(t,1),bl(t,1,0))}function wl(t){for(;t===At;)At=Ks[--Xn],Ks[Xn]=null,Lr=Ks[--Xn],Ks[Xn]=null;for(;t===Ss;)Ss=zn[--Fn],zn[Fn]=null,ji=zn[--Fn],zn[Fn]=null,oi=zn[--Fn],zn[Fn]=null}var gr=null,Pn=null,rn=!1,Vr=null;function Pc(t,r){var o=Ii(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function jo(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,gr=t,Pn=xs(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,gr=t,Pn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Ss!==null?{id:oi,overflow:ji}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Ii(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,gr=t,Pn=null,!0):!1;default:return!1}}function No(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kl(t){if(rn){var r=Pn;if(r){var o=r;if(!jo(t,r)){if(No(t))throw Error(p(418));r=xs(o.nextSibling);var d=gr;r&&jo(t,r)?Pc(d,o):(t.flags=t.flags&-4097|2,rn=!1,gr=t)}}else{if(No(t))throw Error(p(418));t.flags=t.flags&-4097|2,rn=!1,gr=t}}}function Ac(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gr=t}function Eo(t){if(t!==gr)return!1;if(!rn)return Ac(t),rn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Bs(t.type,t.memoizedProps)),r&&(r=Pn)){if(No(t))throw Rc(),Error(p(418));for(;r;)Pc(t,r),r=xs(r.nextSibling)}if(Ac(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Pn=xs(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Pn=null}}else Pn=gr?xs(t.stateNode.nextSibling):null;return!0}function Rc(){for(var t=Pn;t;)t=xs(t.nextSibling)}function Pa(){Pn=gr=null,rn=!1}function Aa(t){Vr===null?Vr=[t]:Vr.push(t)}var Ic=W.ReactCurrentBatchConfig;function Lo(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(p(309));var d=o.stateNode}if(!d)throw Error(p(147,t));var f=d,v=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(P){var $=f.refs;P===null?delete $[v]:$[v]=P},r._stringRef=v,r)}if(typeof t!="string")throw Error(p(284));if(!o._owner)throw Error(p(290,t))}return t}function Sl(t,r){throw t=Object.prototype.toString.call(r),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function yu(t){var r=t._init;return r(t._payload)}function Ys(t){function r(ue,ie){if(t){var de=ue.deletions;de===null?(ue.deletions=[ie],ue.flags|=16):de.push(ie)}}function o(ue,ie){if(!t)return null;for(;ie!==null;)r(ue,ie),ie=ie.sibling;return null}function d(ue,ie){for(ue=new Map;ie!==null;)ie.key!==null?ue.set(ie.key,ie):ue.set(ie.index,ie),ie=ie.sibling;return ue}function f(ue,ie){return ue=Ja(ue,ie),ue.index=0,ue.sibling=null,ue}function v(ue,ie,de){return ue.index=de,t?(de=ue.alternate,de!==null?(de=de.index,de<ie?(ue.flags|=2,ie):de):(ue.flags|=2,ie)):(ue.flags|=1048576,ie)}function P(ue){return t&&ue.alternate===null&&(ue.flags|=2),ue}function $(ue,ie,de,We){return ie===null||ie.tag!==6?(ie=kp(de,ue.mode,We),ie.return=ue,ie):(ie=f(ie,de),ie.return=ue,ie)}function te(ue,ie,de,We){var lt=de.type;return lt===le?Re(ue,ie,de.props.children,We,de.key):ie!==null&&(ie.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===Z&&yu(lt)===ie.type)?(We=f(ie,de.props),We.ref=Lo(ue,ie,de),We.return=ue,We):(We=id(de.type,de.key,de.props,null,ue.mode,We),We.ref=Lo(ue,ie,de),We.return=ue,We)}function me(ue,ie,de,We){return ie===null||ie.tag!==4||ie.stateNode.containerInfo!==de.containerInfo||ie.stateNode.implementation!==de.implementation?(ie=Sp(de,ue.mode,We),ie.return=ue,ie):(ie=f(ie,de.children||[]),ie.return=ue,ie)}function Re(ue,ie,de,We,lt){return ie===null||ie.tag!==7?(ie=Go(de,ue.mode,We,lt),ie.return=ue,ie):(ie=f(ie,de),ie.return=ue,ie)}function De(ue,ie,de){if(typeof ie=="string"&&ie!==""||typeof ie=="number")return ie=kp(""+ie,ue.mode,de),ie.return=ue,ie;if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case G:return de=id(ie.type,ie.key,ie.props,null,ue.mode,de),de.ref=Lo(ue,null,ie),de.return=ue,de;case ce:return ie=Sp(ie,ue.mode,de),ie.return=ue,ie;case Z:var We=ie._init;return De(ue,We(ie._payload),de)}if(Qe(ie)||N(ie))return ie=Go(ie,ue.mode,de,null),ie.return=ue,ie;Sl(ue,ie)}return null}function Pe(ue,ie,de,We){var lt=ie!==null?ie.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return lt!==null?null:$(ue,ie,""+de,We);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case G:return de.key===lt?te(ue,ie,de,We):null;case ce:return de.key===lt?me(ue,ie,de,We):null;case Z:return lt=de._init,Pe(ue,ie,lt(de._payload),We)}if(Qe(de)||N(de))return lt!==null?null:Re(ue,ie,de,We,null);Sl(ue,de)}return null}function Xe(ue,ie,de,We,lt){if(typeof We=="string"&&We!==""||typeof We=="number")return ue=ue.get(de)||null,$(ie,ue,""+We,lt);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case G:return ue=ue.get(We.key===null?de:We.key)||null,te(ie,ue,We,lt);case ce:return ue=ue.get(We.key===null?de:We.key)||null,me(ie,ue,We,lt);case Z:var ht=We._init;return Xe(ue,ie,de,ht(We._payload),lt)}if(Qe(We)||N(We))return ue=ue.get(de)||null,Re(ie,ue,We,lt,null);Sl(ie,We)}return null}function it(ue,ie,de,We){for(var lt=null,ht=null,ft=ie,wt=ie=0,ur=null;ft!==null&&wt<de.length;wt++){ft.index>wt?(ur=ft,ft=null):ur=ft.sibling;var Ht=Pe(ue,ft,de[wt],We);if(Ht===null){ft===null&&(ft=ur);break}t&&ft&&Ht.alternate===null&&r(ue,ft),ie=v(Ht,ie,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht,ft=ur}if(wt===de.length)return o(ue,ft),rn&&$s(ue,wt),lt;if(ft===null){for(;wt<de.length;wt++)ft=De(ue,de[wt],We),ft!==null&&(ie=v(ft,ie,wt),ht===null?lt=ft:ht.sibling=ft,ht=ft);return rn&&$s(ue,wt),lt}for(ft=d(ue,ft);wt<de.length;wt++)ur=Xe(ft,ue,wt,de[wt],We),ur!==null&&(t&&ur.alternate!==null&&ft.delete(ur.key===null?wt:ur.key),ie=v(ur,ie,wt),ht===null?lt=ur:ht.sibling=ur,ht=ur);return t&&ft.forEach(function(Xa){return r(ue,Xa)}),rn&&$s(ue,wt),lt}function st(ue,ie,de,We){var lt=N(de);if(typeof lt!="function")throw Error(p(150));if(de=lt.call(de),de==null)throw Error(p(151));for(var ht=lt=null,ft=ie,wt=ie=0,ur=null,Ht=de.next();ft!==null&&!Ht.done;wt++,Ht=de.next()){ft.index>wt?(ur=ft,ft=null):ur=ft.sibling;var Xa=Pe(ue,ft,Ht.value,We);if(Xa===null){ft===null&&(ft=ur);break}t&&ft&&Xa.alternate===null&&r(ue,ft),ie=v(Xa,ie,wt),ht===null?lt=Xa:ht.sibling=Xa,ht=Xa,ft=ur}if(Ht.done)return o(ue,ft),rn&&$s(ue,wt),lt;if(ft===null){for(;!Ht.done;wt++,Ht=de.next())Ht=De(ue,Ht.value,We),Ht!==null&&(ie=v(Ht,ie,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht);return rn&&$s(ue,wt),lt}for(ft=d(ue,ft);!Ht.done;wt++,Ht=de.next())Ht=Xe(ft,ue,wt,Ht.value,We),Ht!==null&&(t&&Ht.alternate!==null&&ft.delete(Ht.key===null?wt:Ht.key),ie=v(Ht,ie,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht);return t&&ft.forEach(function(sg){return r(ue,sg)}),rn&&$s(ue,wt),lt}function qn(ue,ie,de,We){if(typeof de=="object"&&de!==null&&de.type===le&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case G:e:{for(var lt=de.key,ht=ie;ht!==null;){if(ht.key===lt){if(lt=de.type,lt===le){if(ht.tag===7){o(ue,ht.sibling),ie=f(ht,de.props.children),ie.return=ue,ue=ie;break e}}else if(ht.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===Z&&yu(lt)===ht.type){o(ue,ht.sibling),ie=f(ht,de.props),ie.ref=Lo(ue,ht,de),ie.return=ue,ue=ie;break e}o(ue,ht);break}else r(ue,ht);ht=ht.sibling}de.type===le?(ie=Go(de.props.children,ue.mode,We,de.key),ie.return=ue,ue=ie):(We=id(de.type,de.key,de.props,null,ue.mode,We),We.ref=Lo(ue,ie,de),We.return=ue,ue=We)}return P(ue);case ce:e:{for(ht=de.key;ie!==null;){if(ie.key===ht)if(ie.tag===4&&ie.stateNode.containerInfo===de.containerInfo&&ie.stateNode.implementation===de.implementation){o(ue,ie.sibling),ie=f(ie,de.children||[]),ie.return=ue,ue=ie;break e}else{o(ue,ie);break}else r(ue,ie);ie=ie.sibling}ie=Sp(de,ue.mode,We),ie.return=ue,ue=ie}return P(ue);case Z:return ht=de._init,qn(ue,ie,ht(de._payload),We)}if(Qe(de))return it(ue,ie,de,We);if(N(de))return st(ue,ie,de,We);Sl(ue,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,ie!==null&&ie.tag===6?(o(ue,ie.sibling),ie=f(ie,de),ie.return=ue,ue=ie):(o(ue,ie),ie=kp(de,ue.mode,We),ie.return=ue,ue=ie),P(ue)):o(ue,ie)}return qn}var _s=Ys(!0),Po=Ys(!1),Ao=ai(null),Ra=null,Vs=null,vu=null;function _l(){vu=Vs=Ra=null}function Wn(t){var r=Ao.current;nn(Ao),t._currentValue=r}function Ia(t,r,o){for(;t!==null;){var d=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),t===o)break;t=t.return}}function Js(t,r){Ra=t,vu=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(er=!0),t.firstContext=null)}function Fr(t){var r=t._currentValue;if(vu!==t)if(t={context:t,memoizedValue:r,next:null},Vs===null){if(Ra===null)throw Error(p(308));Vs=t,Ra.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return r}var Cs=null;function Ts(t){Cs===null?Cs=[t]:Cs.push(t)}function Ro(t,r,o,d){var f=r.interleaved;return f===null?(o.next=o,Ts(r)):(o.next=f.next,f.next=o),r.interleaved=o,Ni(t,d)}function Ni(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Qi=!1;function Cl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xs(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function li(t,r,o){var d=t.updateQueue;if(d===null)return null;if(d=d.shared,(dt&2)!==0){var f=d.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),d.pending=r,Ni(t,o)}return f=d.interleaved,f===null?(r.next=r,Ts(d)):(r.next=f.next,f.next=r),d.interleaved=r,Ni(t,o)}function Io(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var d=r.lanes;d&=t.pendingLanes,o|=d,r.lanes=o,Wi(t,o)}}function Oa(t,r){var o=t.updateQueue,d=t.alternate;if(d!==null&&(d=d.updateQueue,o===d)){var f=null,v=null;if(o=o.firstBaseUpdate,o!==null){do{var P={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};v===null?f=v=P:v=v.next=P,o=o.next}while(o!==null);v===null?f=v=r:v=v.next=r}else f=v=r;o={baseState:d.baseState,firstBaseUpdate:f,lastBaseUpdate:v,shared:d.shared,effects:d.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function Tl(t,r,o,d){var f=t.updateQueue;Qi=!1;var v=f.firstBaseUpdate,P=f.lastBaseUpdate,$=f.shared.pending;if($!==null){f.shared.pending=null;var te=$,me=te.next;te.next=null,P===null?v=me:P.next=me,P=te;var Re=t.alternate;Re!==null&&(Re=Re.updateQueue,$=Re.lastBaseUpdate,$!==P&&($===null?Re.firstBaseUpdate=me:$.next=me,Re.lastBaseUpdate=te))}if(v!==null){var De=f.baseState;P=0,Re=me=te=null,$=v;do{var Pe=$.lane,Xe=$.eventTime;if((d&Pe)===Pe){Re!==null&&(Re=Re.next={eventTime:Xe,lane:0,tag:$.tag,payload:$.payload,callback:$.callback,next:null});e:{var it=t,st=$;switch(Pe=r,Xe=o,st.tag){case 1:if(it=st.payload,typeof it=="function"){De=it.call(Xe,De,Pe);break e}De=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=st.payload,Pe=typeof it=="function"?it.call(Xe,De,Pe):it,Pe==null)break e;De=K({},De,Pe);break e;case 2:Qi=!0}}$.callback!==null&&$.lane!==0&&(t.flags|=64,Pe=f.effects,Pe===null?f.effects=[$]:Pe.push($))}else Xe={eventTime:Xe,lane:Pe,tag:$.tag,payload:$.payload,callback:$.callback,next:null},Re===null?(me=Re=Xe,te=De):Re=Re.next=Xe,P|=Pe;if($=$.next,$===null){if($=f.shared.pending,$===null)break;Pe=$,$=Pe.next,Pe.next=null,f.lastBaseUpdate=Pe,f.shared.pending=null}}while(!0);if(Re===null&&(te=De),f.baseState=te,f.firstBaseUpdate=me,f.lastBaseUpdate=Re,r=f.shared.interleaved,r!==null){f=r;do P|=f.lane,f=f.next;while(f!==r)}else v===null&&(f.shared.lanes=0);kr|=P,t.lanes=P,t.memoizedState=De}}function Qs(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var d=t[r],f=d.callback;if(f!==null){if(d.callback=null,d=o,typeof f!="function")throw Error(p(191,f));f.call(d)}}}var Ma={},ui=ai(Ma),Da=ai(Ma),Zi=ai(Ma);function ci(t){if(t===Ma)throw Error(p(174));return t}function Zs(t,r){switch(Zt(Zi,r),Zt(Da,t),Zt(ui,Ma),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:at(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=at(r,t)}nn(ui),Zt(ui,r)}function Li(){nn(ui),nn(Da),nn(Zi)}function xu(t){ci(Zi.current);var r=ci(ui.current),o=at(r,t.type);r!==o&&(Zt(Da,t),Zt(ui,o))}function bu(t){Da.current===t&&(nn(ui),nn(Da))}var ln=ai(0);function di(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var js=[];function ea(){for(var t=0;t<js.length;t++)js[t]._workInProgressVersionPrimary=null;js.length=0}var jl=W.ReactCurrentDispatcher,Nl=W.ReactCurrentBatchConfig,ta=0,hn=null,Hn=null,Ot=null,Oo=!1,Mo=!1,Do=0,cp=0;function Zn(){throw Error(p(321))}function El(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!_n(t[o],r[o]))return!1;return!0}function Ll(t,r,o,d,f,v){if(ta=v,hn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,jl.current=t===null||t.memoizedState===null?pp:Au,t=o(d,f),Mo){v=0;do{if(Mo=!1,Do=0,25<=v)throw Error(p(301));v+=1,Ot=Hn=null,r.updateQueue=null,jl.current=Fo,t=o(d,f)}while(Mo)}if(jl.current=zo,r=Hn!==null&&Hn.next!==null,ta=0,Ot=Hn=hn=null,Oo=!1,r)throw Error(p(300));return t}function wu(){var t=Do!==0;return Do=0,t}function Pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?hn.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Jr(){if(Hn===null){var t=hn.alternate;t=t!==null?t.memoizedState:null}else t=Hn.next;var r=Ot===null?hn.memoizedState:Ot.next;if(r!==null)Ot=r,Hn=t;else{if(t===null)throw Error(p(310));Hn=t,t={memoizedState:Hn.memoizedState,baseState:Hn.baseState,baseQueue:Hn.baseQueue,queue:Hn.queue,next:null},Ot===null?hn.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Xr(t,r){return typeof r=="function"?r(t):r}function na(t){var r=Jr(),o=r.queue;if(o===null)throw Error(p(311));o.lastRenderedReducer=t;var d=Hn,f=d.baseQueue,v=o.pending;if(v!==null){if(f!==null){var P=f.next;f.next=v.next,v.next=P}d.baseQueue=f=v,o.pending=null}if(f!==null){v=f.next,d=d.baseState;var $=P=null,te=null,me=v;do{var Re=me.lane;if((ta&Re)===Re)te!==null&&(te=te.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),d=me.hasEagerState?me.eagerState:t(d,me.action);else{var De={lane:Re,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};te===null?($=te=De,P=d):te=te.next=De,hn.lanes|=Re,kr|=Re}me=me.next}while(me!==null&&me!==v);te===null?P=d:te.next=$,_n(d,r.memoizedState)||(er=!0),r.memoizedState=d,r.baseState=P,r.baseQueue=te,o.lastRenderedState=d}if(t=o.interleaved,t!==null){f=t;do v=f.lane,hn.lanes|=v,kr|=v,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function za(t){var r=Jr(),o=r.queue;if(o===null)throw Error(p(311));o.lastRenderedReducer=t;var d=o.dispatch,f=o.pending,v=r.memoizedState;if(f!==null){o.pending=null;var P=f=f.next;do v=t(v,P.action),P=P.next;while(P!==f);_n(v,r.memoizedState)||(er=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),o.lastRenderedState=v}return[v,d]}function Fa(){}function Ai(t,r){var o=hn,d=Jr(),f=r(),v=!_n(d.memoizedState,f);if(v&&(d.memoizedState=f,er=!0),d=d.queue,Cu(ra.bind(null,o,d,t),[t]),d.getSnapshot!==r||v||Ot!==null&&Ot.memoizedState.tag&1){if(o.flags|=2048,Ns(9,Mc.bind(null,o,d,f,r),void 0,null),zt===null)throw Error(p(349));(ta&30)!==0||Oc(o,r,f)}return f}function Oc(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Mc(t,r,o,d){r.value=o,r.getSnapshot=d,ku(r)&&Su(t)}function ra(t,r,o){return o(function(){ku(r)&&Su(t)})}function ku(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!_n(t,o)}catch{return!0}}function Su(t){var r=Ni(t,1);r!==null&&ts(r,t,1,-1)}function _u(t){var r=Pi();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:t},r.queue=t,t=t.dispatch=Eu.bind(null,hn,t),[r.memoizedState,t]}function Ns(t,r,o,d){return t={tag:t,create:r,destroy:o,deps:d,next:null},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(d=o.next,o.next=t,t.next=d,r.lastEffect=t)),t}function ia(){return Jr().memoizedState}function Wa(t,r,o,d){var f=Pi();hn.flags|=t,f.memoizedState=Ns(1|r,o,void 0,d===void 0?null:d)}function Ha(t,r,o,d){var f=Jr();d=d===void 0?null:d;var v=void 0;if(Hn!==null){var P=Hn.memoizedState;if(v=P.destroy,d!==null&&El(d,P.deps)){f.memoizedState=Ns(r,o,v,d);return}}hn.flags|=t,f.memoizedState=Ns(1|r,o,v,d)}function Pl(t,r){return Wa(8390656,8,t,r)}function Cu(t,r){return Ha(2048,8,t,r)}function Ba(t,r){return Ha(4,2,t,r)}function Tu(t,r){return Ha(4,4,t,r)}function Dc(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function ju(t,r,o){return o=o!=null?o.concat([t]):null,Ha(4,4,Dc.bind(null,r,t),o)}function Ua(){}function zc(t,r){var o=Jr();r=r===void 0?null:r;var d=o.memoizedState;return d!==null&&r!==null&&El(r,d[1])?d[0]:(o.memoizedState=[t,r],t)}function Fc(t,r){var o=Jr();r=r===void 0?null:r;var d=o.memoizedState;return d!==null&&r!==null&&El(r,d[1])?d[0]:(t=t(),o.memoizedState=[t,r],t)}function qa(t,r,o){return(ta&21)===0?(t.baseState&&(t.baseState=!1,er=!0),t.memoizedState=o):(_n(o,r)||(o=ro(),hn.lanes|=o,kr|=o,t.baseState=!0),r)}function Wc(t,r){var o=Nt;Nt=o!==0&&4>o?o:4,t(!0);var d=Nl.transition;Nl.transition={};try{t(!1),r()}finally{Nt=o,Nl.transition=d}}function Nu(){return Jr().memoizedState}function dp(t,r,o){var d=Ya(t);if(o={lane:d,action:o,hasEagerState:!1,eagerState:null,next:null},Lu(t))Hc(r,o);else if(o=Ro(t,r,o,d),o!==null){var f=Wr();ts(o,t,d,f),Pu(o,r,d)}}function Eu(t,r,o){var d=Ya(t),f={lane:d,action:o,hasEagerState:!1,eagerState:null,next:null};if(Lu(t))Hc(r,f);else{var v=t.alternate;if(t.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var P=r.lastRenderedState,$=v(P,o);if(f.hasEagerState=!0,f.eagerState=$,_n($,P)){var te=r.interleaved;te===null?(f.next=f,Ts(r)):(f.next=te.next,te.next=f),r.interleaved=f;return}}catch{}finally{}o=Ro(t,r,f,d),o!==null&&(f=Wr(),ts(o,t,d,f),Pu(o,r,d))}}function Lu(t){var r=t.alternate;return t===hn||r!==null&&r===hn}function Hc(t,r){Mo=Oo=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Pu(t,r,o){if((o&4194240)!==0){var d=r.lanes;d&=t.pendingLanes,o|=d,r.lanes=o,Wi(t,o)}}var zo={readContext:Fr,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useInsertionEffect:Zn,useLayoutEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useMutableSource:Zn,useSyncExternalStore:Zn,useId:Zn,unstable_isNewReconciler:!1},pp={readContext:Fr,useCallback:function(t,r){return Pi().memoizedState=[t,r===void 0?null:r],t},useContext:Fr,useEffect:Pl,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Wa(4194308,4,Dc.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Wa(4194308,4,t,r)},useInsertionEffect:function(t,r){return Wa(4,2,t,r)},useMemo:function(t,r){var o=Pi();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var d=Pi();return r=o!==void 0?o(r):r,d.memoizedState=d.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},d.queue=t,t=t.dispatch=dp.bind(null,hn,t),[d.memoizedState,t]},useRef:function(t){var r=Pi();return t={current:t},r.memoizedState=t},useState:_u,useDebugValue:Ua,useDeferredValue:function(t){return Pi().memoizedState=t},useTransition:function(){var t=_u(!1),r=t[0];return t=Wc.bind(null,t[1]),Pi().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var d=hn,f=Pi();if(rn){if(o===void 0)throw Error(p(407));o=o()}else{if(o=r(),zt===null)throw Error(p(349));(ta&30)!==0||Oc(d,r,o)}f.memoizedState=o;var v={value:o,getSnapshot:r};return f.queue=v,Pl(ra.bind(null,d,v,t),[t]),d.flags|=2048,Ns(9,Mc.bind(null,d,v,o,r),void 0,null),o},useId:function(){var t=Pi(),r=zt.identifierPrefix;if(rn){var o=ji,d=oi;o=(d&~(1<<32-ge(d)-1)).toString(32)+o,r=":"+r+"R"+o,o=Do++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=cp++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Au={readContext:Fr,useCallback:zc,useContext:Fr,useEffect:Cu,useImperativeHandle:ju,useInsertionEffect:Ba,useLayoutEffect:Tu,useMemo:Fc,useReducer:na,useRef:ia,useState:function(){return na(Xr)},useDebugValue:Ua,useDeferredValue:function(t){var r=Jr();return qa(r,Hn.memoizedState,t)},useTransition:function(){var t=na(Xr)[0],r=Jr().memoizedState;return[t,r]},useMutableSource:Fa,useSyncExternalStore:Ai,useId:Nu,unstable_isNewReconciler:!1},Fo={readContext:Fr,useCallback:zc,useContext:Fr,useEffect:Cu,useImperativeHandle:ju,useInsertionEffect:Ba,useLayoutEffect:Tu,useMemo:Fc,useReducer:za,useRef:ia,useState:function(){return za(Xr)},useDebugValue:Ua,useDeferredValue:function(t){var r=Jr();return Hn===null?r.memoizedState=t:qa(r,Hn.memoizedState,t)},useTransition:function(){var t=za(Xr)[0],r=Jr().memoizedState;return[t,r]},useMutableSource:Fa,useSyncExternalStore:Ai,useId:Nu,unstable_isNewReconciler:!1};function yr(t,r){if(t&&t.defaultProps){r=K({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Ru(t,r,o,d){r=t.memoizedState,o=o(d,r),o=o==null?r:K({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Wo={isMounted:function(t){return(t=t._reactInternals)?On(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var d=Wr(),f=Ya(t),v=Ei(d,f);v.payload=r,o!=null&&(v.callback=o),r=li(t,v,f),r!==null&&(ts(r,t,f,d),Io(r,t,f))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var d=Wr(),f=Ya(t),v=Ei(d,f);v.tag=1,v.payload=r,o!=null&&(v.callback=o),r=li(t,v,f),r!==null&&(ts(r,t,f,d),Io(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Wr(),d=Ya(t),f=Ei(o,d);f.tag=2,r!=null&&(f.callback=r),r=li(t,f,d),r!==null&&(ts(r,t,d,o),Io(r,t,d))}};function Bc(t,r,o,d,f,v,P){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(d,v,P):r.prototype&&r.prototype.isPureReactComponent?!wa(o,d)||!wa(f,v):!0}function Uc(t,r,o){var d=!1,f=ws,v=r.contextType;return typeof v=="object"&&v!==null?v=Fr(v):(f=ar(r)?Xi:Jn.current,d=r.contextTypes,v=(d=d!=null)?ja(t,f):ws),r=new r(o,v),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Wo,t.stateNode=r,r._reactInternals=t,d&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=v),r}function qc(t,r,o,d){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,d),r.state!==t&&Wo.enqueueReplaceState(r,r.state,null)}function Iu(t,r,o,d){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Cl(t);var v=r.contextType;typeof v=="object"&&v!==null?f.context=Fr(v):(v=ar(r)?Xi:Jn.current,f.context=ja(t,v)),f.state=t.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Ru(t,r,v,o),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&Wo.enqueueReplaceState(f,f.state,null),Tl(t,o,f,d),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function sa(t,r){try{var o="",d=r;do o+=qe(d),d=d.return;while(d);var f=o}catch(v){f=`
Error generating stack: `+v.message+`
`+v.stack}return{value:t,source:r,stack:f,digest:null}}function Ou(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function Mu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Kc=typeof WeakMap=="function"?WeakMap:Map;function Al(t,r,o){o=Ei(-1,o),o.tag=3,o.payload={element:null};var d=r.value;return o.callback=function(){Qc||(Qc=!0,fp=d),Mu(t,r)},o}function Du(t,r,o){o=Ei(-1,o),o.tag=3;var d=t.type.getDerivedStateFromError;if(typeof d=="function"){var f=r.value;o.payload=function(){return d(f)},o.callback=function(){Mu(t,r)}}var v=t.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(o.callback=function(){Mu(t,r),typeof d!="function"&&($a===null?$a=new Set([this]):$a.add(this));var P=r.stack;this.componentDidCatch(r.value,{componentStack:P!==null?P:""})}),o}function $c(t,r,o){var d=t.pingCache;if(d===null){d=t.pingCache=new Kc;var f=new Set;d.set(r,f)}else f=d.get(r),f===void 0&&(f=new Set,d.set(r,f));f.has(o)||(f.add(o),t=Ym.bind(null,t,r,o),r.then(t,t))}function zu(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function aa(t,r,o,d,f){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Ei(-1,1),r.tag=2,li(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Gc=W.ReactCurrentOwner,er=!1;function vr(t,r,o,d){r.child=t===null?Po(r,null,o,d):_s(r,t.child,o,d)}function Yc(t,r,o,d,f){o=o.render;var v=r.ref;return Js(r,f),d=Ll(t,r,o,d,v,f),o=wu(),t!==null&&!er?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Pr(t,r,f)):(rn&&o&&Gs(r),r.flags|=1,vr(t,r,d,f),r.child)}function Vc(t,r,o,d,f){if(t===null){var v=o.type;return typeof v=="function"&&!wp(v)&&v.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=v,en(t,r,v,d,f)):(t=id(o.type,null,d,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(v=t.child,(t.lanes&f)===0){var P=v.memoizedProps;if(o=o.compare,o=o!==null?o:wa,o(P,d)&&t.ref===r.ref)return Pr(t,r,f)}return r.flags|=1,t=Ja(v,d),t.ref=r.ref,t.return=r,r.child=t}function en(t,r,o,d,f){if(t!==null){var v=t.memoizedProps;if(wa(v,d)&&t.ref===r.ref)if(er=!1,r.pendingProps=d=v,(t.lanes&f)!==0)(t.flags&131072)!==0&&(er=!0);else return r.lanes=t.lanes,Pr(t,r,f)}return oa(t,r,o,d,f)}function Jc(t,r,o){var d=r.pendingProps,f=d.children,v=t!==null?t.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(wr,Ut),Ut|=o;else{if((o&1073741824)===0)return t=v!==null?v.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Zt(wr,Ut),Ut|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=v!==null?v.baseLanes:o,Zt(wr,Ut),Ut|=d}else v!==null?(d=v.baseLanes|o,r.memoizedState=null):d=o,Zt(wr,Ut),Ut|=d;return vr(t,r,f,o),r.child}function Rl(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function oa(t,r,o,d,f){var v=ar(o)?Xi:Jn.current;return v=ja(r,v),Js(r,f),o=Ll(t,r,o,d,v,f),d=wu(),t!==null&&!er?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Pr(t,r,f)):(rn&&d&&Gs(r),r.flags|=1,vr(t,r,o,f),r.child)}function Qr(t,r,o,d,f){if(ar(o)){var v=!0;Ea(r)}else v=!1;if(Js(r,f),r.stateNode===null)Wl(t,r),Uc(r,o,d),Iu(r,o,d,f),d=!0;else if(t===null){var P=r.stateNode,$=r.memoizedProps;P.props=$;var te=P.context,me=o.contextType;typeof me=="object"&&me!==null?me=Fr(me):(me=ar(o)?Xi:Jn.current,me=ja(r,me));var Re=o.getDerivedStateFromProps,De=typeof Re=="function"||typeof P.getSnapshotBeforeUpdate=="function";De||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||($!==d||te!==me)&&qc(r,P,d,me),Qi=!1;var Pe=r.memoizedState;P.state=Pe,Tl(r,d,P,f),te=r.memoizedState,$!==d||Pe!==te||mr.current||Qi?(typeof Re=="function"&&(Ru(r,o,Re,d),te=r.memoizedState),($=Qi||Bc(r,o,$,d,Pe,te,me))?(De||typeof P.UNSAFE_componentWillMount!="function"&&typeof P.componentWillMount!="function"||(typeof P.componentWillMount=="function"&&P.componentWillMount(),typeof P.UNSAFE_componentWillMount=="function"&&P.UNSAFE_componentWillMount()),typeof P.componentDidMount=="function"&&(r.flags|=4194308)):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=te),P.props=d,P.state=te,P.context=me,d=$):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{P=r.stateNode,Xs(t,r),$=r.memoizedProps,me=r.type===r.elementType?$:yr(r.type,$),P.props=me,De=r.pendingProps,Pe=P.context,te=o.contextType,typeof te=="object"&&te!==null?te=Fr(te):(te=ar(o)?Xi:Jn.current,te=ja(r,te));var Xe=o.getDerivedStateFromProps;(Re=typeof Xe=="function"||typeof P.getSnapshotBeforeUpdate=="function")||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||($!==De||Pe!==te)&&qc(r,P,d,te),Qi=!1,Pe=r.memoizedState,P.state=Pe,Tl(r,d,P,f);var it=r.memoizedState;$!==De||Pe!==it||mr.current||Qi?(typeof Xe=="function"&&(Ru(r,o,Xe,d),it=r.memoizedState),(me=Qi||Bc(r,o,me,d,Pe,it,te)||!1)?(Re||typeof P.UNSAFE_componentWillUpdate!="function"&&typeof P.componentWillUpdate!="function"||(typeof P.componentWillUpdate=="function"&&P.componentWillUpdate(d,it,te),typeof P.UNSAFE_componentWillUpdate=="function"&&P.UNSAFE_componentWillUpdate(d,it,te)),typeof P.componentDidUpdate=="function"&&(r.flags|=4),typeof P.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof P.componentDidUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=it),P.props=d,P.state=it,P.context=te,d=me):(typeof P.componentDidUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||$===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=1024),d=!1)}return Ka(t,r,o,d,v,f)}function Ka(t,r,o,d,f,v){Rl(t,r);var P=(r.flags&128)!==0;if(!d&&!P)return f&&gu(r,o,!1),Pr(t,r,v);d=r.stateNode,Gc.current=r;var $=P&&typeof o.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,t!==null&&P?(r.child=_s(r,t.child,null,v),r.child=_s(r,null,$,v)):vr(t,r,$,v),r.memoizedState=d.state,f&&gu(r,o,!0),r.child}function Il(t){var r=t.stateNode;r.pendingContext?fu(t,r.pendingContext,r.pendingContext!==r.context):r.context&&fu(t,r.context,!1),Zs(t,r.containerInfo)}function Fu(t,r,o,d,f){return Pa(),Aa(f),r.flags|=256,vr(t,r,o,d),r.child}var Ol={dehydrated:null,treeContext:null,retryLane:0};function Ml(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dl(t,r,o){var d=r.pendingProps,f=ln.current,v=!1,P=(r.flags&128)!==0,$;if(($=P)||($=t!==null&&t.memoizedState===null?!1:(f&2)!==0),$?(v=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Zt(ln,f&1),t===null)return kl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(P=d.children,t=d.fallback,v?(d=r.mode,v=r.child,P={mode:"hidden",children:P},(d&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=P):v=sd(P,d,0,null),t=Go(t,d,o,null),v.return=r,t.return=r,v.sibling=t,r.child=v,r.child.memoizedState=Ml(o),r.memoizedState=Ol,t):zl(r,P));if(f=t.memoizedState,f!==null&&($=f.dehydrated,$!==null))return Wu(t,r,P,d,$,f,o);if(v){v=d.fallback,P=r.mode,f=t.child,$=f.sibling;var te={mode:"hidden",children:d.children};return(P&1)===0&&r.child!==f?(d=r.child,d.childLanes=0,d.pendingProps=te,r.deletions=null):(d=Ja(f,te),d.subtreeFlags=f.subtreeFlags&14680064),$!==null?v=Ja($,v):(v=Go(v,P,o,null),v.flags|=2),v.return=r,d.return=r,d.sibling=v,r.child=d,d=v,v=r.child,P=t.child.memoizedState,P=P===null?Ml(o):{baseLanes:P.baseLanes|o,cachePool:null,transitions:P.transitions},v.memoizedState=P,v.childLanes=t.childLanes&~o,r.memoizedState=Ol,d}return v=t.child,t=v.sibling,d=Ja(v,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=o),d.return=r,d.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=d,r.memoizedState=null,d}function zl(t,r){return r=sd({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Fl(t,r,o,d){return d!==null&&Aa(d),_s(r,t.child,null,o),t=zl(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Wu(t,r,o,d,f,v,P){if(o)return r.flags&256?(r.flags&=-257,d=Ou(Error(p(422))),Fl(t,r,P,d)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(v=d.fallback,f=r.mode,d=sd({mode:"visible",children:d.children},f,0,null),v=Go(v,f,P,null),v.flags|=2,d.return=r,v.return=r,d.sibling=v,r.child=d,(r.mode&1)!==0&&_s(r,t.child,null,P),r.child.memoizedState=Ml(P),r.memoizedState=Ol,v);if((r.mode&1)===0)return Fl(t,r,P,null);if(f.data==="$!"){if(d=f.nextSibling&&f.nextSibling.dataset,d)var $=d.dgst;return d=$,v=Error(p(419)),d=Ou(v,d,void 0),Fl(t,r,P,d)}if($=(P&t.childLanes)!==0,er||$){if(d=zt,d!==null){switch(P&-P){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(d.suspendedLanes|P))!==0?0:f,f!==0&&f!==v.retryLane&&(v.retryLane=f,Ni(t,f),ts(d,t,f,-1))}return bp(),d=Ou(Error(p(421))),Fl(t,r,P,d)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=Vm.bind(null,t),f._reactRetry=r,null):(t=v.treeContext,Pn=xs(f.nextSibling),gr=r,rn=!0,Vr=null,t!==null&&(zn[Fn++]=oi,zn[Fn++]=ji,zn[Fn++]=Ss,oi=t.id,ji=t.overflow,Ss=r),r=zl(r,d.children),r.flags|=4096,r)}function Hu(t,r,o){t.lanes|=r;var d=t.alternate;d!==null&&(d.lanes|=r),Ia(t.return,r,o)}function Mt(t,r,o,d,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:o,tailMode:f}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=d,v.tail=o,v.tailMode=f)}function Bu(t,r,o){var d=r.pendingProps,f=d.revealOrder,v=d.tail;if(vr(t,r,d.children,o),d=ln.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hu(t,o,r);else if(t.tag===19)Hu(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}d&=1}if(Zt(ln,d),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(o=r.child,f=null;o!==null;)t=o.alternate,t!==null&&di(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Mt(r,!1,f,o,v);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&di(t)===null){r.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Mt(r,!0,o,null,v);break;case"together":Mt(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Wl(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Pr(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),kr|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(p(153));if(r.child!==null){for(t=r.child,o=Ja(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Ja(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function hp(t,r,o){switch(r.tag){case 3:Il(r),Pa();break;case 5:xu(r);break;case 1:ar(r.type)&&Ea(r);break;case 4:Zs(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,f=r.memoizedProps.value;Zt(Ao,d._currentValue),d._currentValue=f;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Zt(ln,ln.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Dl(t,r,o):(Zt(ln,ln.current&1),t=Pr(t,r,o),t!==null?t.sibling:null);Zt(ln,ln.current&1);break;case 19:if(d=(o&r.childLanes)!==0,(t.flags&128)!==0){if(d)return Bu(t,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Zt(ln,ln.current),d)break;return null;case 22:case 23:return r.lanes=0,Jc(t,r,o)}return Pr(t,r,o)}var Ho,Uu,fn,Xc;Ho=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Uu=function(){},fn=function(t,r,o,d){var f=t.memoizedProps;if(f!==d){t=r.stateNode,ci(ui.current);var v=null;switch(o){case"input":f=Ct(t,f),d=Ct(t,d),v=[];break;case"select":f=K({},f,{value:void 0}),d=K({},d,{value:void 0}),v=[];break;case"textarea":f=oe(t,f),d=oe(t,d),v=[];break;default:typeof f.onClick!="function"&&typeof d.onClick=="function"&&(t.onclick=vs)}Ur(o,d);var P;o=null;for(me in f)if(!d.hasOwnProperty(me)&&f.hasOwnProperty(me)&&f[me]!=null)if(me==="style"){var $=f[me];for(P in $)$.hasOwnProperty(P)&&(o||(o={}),o[P]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(y.hasOwnProperty(me)?v||(v=[]):(v=v||[]).push(me,null));for(me in d){var te=d[me];if($=f!=null?f[me]:void 0,d.hasOwnProperty(me)&&te!==$&&(te!=null||$!=null))if(me==="style")if($){for(P in $)!$.hasOwnProperty(P)||te&&te.hasOwnProperty(P)||(o||(o={}),o[P]="");for(P in te)te.hasOwnProperty(P)&&$[P]!==te[P]&&(o||(o={}),o[P]=te[P])}else o||(v||(v=[]),v.push(me,o)),o=te;else me==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,$=$?$.__html:void 0,te!=null&&$!==te&&(v=v||[]).push(me,te)):me==="children"?typeof te!="string"&&typeof te!="number"||(v=v||[]).push(me,""+te):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(y.hasOwnProperty(me)?(te!=null&&me==="onScroll"&&Wt("scroll",t),v||$===te||(v=[])):(v=v||[]).push(me,te))}o&&(v=v||[]).push("style",o);var me=v;(r.updateQueue=me)&&(r.flags|=4)}},Xc=function(t,r,o,d){o!==d&&(r.flags|=4)};function Bo(t,r){if(!rn)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var d=null;o!==null;)o.alternate!==null&&(d=o),o=o.sibling;d===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:d.sibling=null}}function or(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,d=0;if(r)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,d|=f.subtreeFlags&14680064,d|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,d|=f.subtreeFlags,d|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=d,t.childLanes=o,r}function Hl(t,r,o){var d=r.pendingProps;switch(wl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return or(r),null;case 1:return ar(r.type)&&Na(),or(r),null;case 3:return d=r.stateNode,Li(),nn(mr),nn(Jn),ea(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(t===null||t.child===null)&&(Eo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vr!==null&&(yp(Vr),Vr=null))),Uu(t,r),or(r),null;case 5:bu(r);var f=ci(Zi.current);if(o=r.type,t!==null&&r.stateNode!=null)fn(t,r,o,d,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(p(166));return or(r),null}if(t=ci(ui.current),Eo(r)){d=r.stateNode,o=r.type;var v=r.memoizedProps;switch(d[Ci]=r,d[To]=v,t=(r.mode&1)!==0,o){case"dialog":Wt("cancel",d),Wt("close",d);break;case"iframe":case"object":case"embed":Wt("load",d);break;case"video":case"audio":for(f=0;f<Ws.length;f++)Wt(Ws[f],d);break;case"source":Wt("error",d);break;case"img":case"image":case"link":Wt("error",d),Wt("load",d);break;case"details":Wt("toggle",d);break;case"input":xt(d,v),Wt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!v.multiple},Wt("invalid",d);break;case"textarea":je(d,v),Wt("invalid",d)}Ur(o,v),f=null;for(var P in v)if(v.hasOwnProperty(P)){var $=v[P];P==="children"?typeof $=="string"?d.textContent!==$&&(v.suppressHydrationWarning!==!0&&_o(d.textContent,$,t),f=["children",$]):typeof $=="number"&&d.textContent!==""+$&&(v.suppressHydrationWarning!==!0&&_o(d.textContent,$,t),f=["children",""+$]):y.hasOwnProperty(P)&&$!=null&&P==="onScroll"&&Wt("scroll",d)}switch(o){case"input":$e(d),vt(d,v,!0);break;case"textarea":$e(d),kt(d);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(d.onclick=vs)}d=f,r.updateQueue=d,d!==null&&(r.flags|=4)}else{P=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ye(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=P.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof d.is=="string"?t=P.createElement(o,{is:d.is}):(t=P.createElement(o),o==="select"&&(P=t,d.multiple?P.multiple=!0:d.size&&(P.size=d.size))):t=P.createElementNS(t,o),t[Ci]=r,t[To]=d,Ho(t,r,!1,!1),r.stateNode=t;e:{switch(P=bt(o,d),o){case"dialog":Wt("cancel",t),Wt("close",t),f=d;break;case"iframe":case"object":case"embed":Wt("load",t),f=d;break;case"video":case"audio":for(f=0;f<Ws.length;f++)Wt(Ws[f],t);f=d;break;case"source":Wt("error",t),f=d;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),f=d;break;case"details":Wt("toggle",t),f=d;break;case"input":xt(t,d),f=Ct(t,d),Wt("invalid",t);break;case"option":f=d;break;case"select":t._wrapperState={wasMultiple:!!d.multiple},f=K({},d,{value:void 0}),Wt("invalid",t);break;case"textarea":je(t,d),f=oe(t,d),Wt("invalid",t);break;default:f=d}Ur(o,f),$=f;for(v in $)if($.hasOwnProperty(v)){var te=$[v];v==="style"?Rr(t,te):v==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,te!=null&&mt(t,te)):v==="children"?typeof te=="string"?(o!=="textarea"||te!=="")&&pt(t,te):typeof te=="number"&&pt(t,""+te):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(y.hasOwnProperty(v)?te!=null&&v==="onScroll"&&Wt("scroll",t):te!=null&&B(t,v,te,P))}switch(o){case"input":$e(t),vt(t,d,!1);break;case"textarea":$e(t),kt(t);break;case"option":d.value!=null&&t.setAttribute("value",""+Be(d.value));break;case"select":t.multiple=!!d.multiple,v=d.value,v!=null?ut(t,!!d.multiple,v,!1):d.defaultValue!=null&&ut(t,!!d.multiple,d.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=vs)}switch(o){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return or(r),null;case 6:if(t&&r.stateNode!=null)Xc(t,r,t.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(p(166));if(o=ci(Zi.current),ci(ui.current),Eo(r)){if(d=r.stateNode,o=r.memoizedProps,d[Ci]=r,(v=d.nodeValue!==o)&&(t=gr,t!==null))switch(t.tag){case 3:_o(d.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_o(d.nodeValue,o,(t.mode&1)!==0)}v&&(r.flags|=4)}else d=(o.nodeType===9?o:o.ownerDocument).createTextNode(d),d[Ci]=r,r.stateNode=d}return or(r),null;case 13:if(nn(ln),d=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rn&&Pn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Rc(),Pa(),r.flags|=98560,v=!1;else if(v=Eo(r),d!==null&&d.dehydrated!==null){if(t===null){if(!v)throw Error(p(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(p(317));v[Ci]=r}else Pa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;or(r),v=!1}else Vr!==null&&(yp(Vr),Vr=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(d=d!==null,d!==(t!==null&&t.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(ln.current&1)!==0?Lt===0&&(Lt=3):bp())),r.updateQueue!==null&&(r.flags|=4),or(r),null);case 4:return Li(),Uu(t,r),t===null&&gs(r.stateNode.containerInfo),or(r),null;case 10:return Wn(r.type._context),or(r),null;case 17:return ar(r.type)&&Na(),or(r),null;case 19:if(nn(ln),v=r.memoizedState,v===null)return or(r),null;if(d=(r.flags&128)!==0,P=v.rendering,P===null)if(d)Bo(v,!1);else{if(Lt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(P=di(t),P!==null){for(r.flags|=128,Bo(v,!1),d=P.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=o,o=r.child;o!==null;)v=o,t=d,v.flags&=14680066,P=v.alternate,P===null?(v.childLanes=0,v.lanes=t,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=P.childLanes,v.lanes=P.lanes,v.child=P.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=P.memoizedProps,v.memoizedState=P.memoizedState,v.updateQueue=P.updateQueue,v.type=P.type,t=P.dependencies,v.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Zt(ln,ln.current&1|2),r.child}t=t.sibling}v.tail!==null&&Rt()>Bl&&(r.flags|=128,d=!0,Bo(v,!1),r.lanes=4194304)}else{if(!d)if(t=di(P),t!==null){if(r.flags|=128,d=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Bo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!P.alternate&&!rn)return or(r),null}else 2*Rt()-v.renderingStartTime>Bl&&o!==1073741824&&(r.flags|=128,d=!0,Bo(v,!1),r.lanes=4194304);v.isBackwards?(P.sibling=r.child,r.child=P):(o=v.last,o!==null?o.sibling=P:r.child=P,v.last=P)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=Rt(),r.sibling=null,o=ln.current,Zt(ln,d?o&1|2:o&1),r):(or(r),null);case 22:case 23:return xp(),d=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(Ut&1073741824)!==0&&(or(r),r.subtreeFlags&6&&(r.flags|=8192)):or(r),null;case 24:return null;case 25:return null}throw Error(p(156,r.tag))}function e(t,r){switch(wl(r),r.tag){case 1:return ar(r.type)&&Na(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Li(),nn(mr),nn(Jn),ea(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return bu(r),null;case 13:if(nn(ln),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(p(340));Pa()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return nn(ln),null;case 4:return Li(),null;case 10:return Wn(r.type._context),null;case 22:case 23:return xp(),null;case 24:return null;default:return null}}var n=!1,s=!1,i=typeof WeakSet=="function"?WeakSet:Set,a=null;function h(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(d){Rn(t,r,d)}else o.current=null}function m(t,r,o){try{o()}catch(d){Rn(t,r,d)}}var x=!1;function w(t,r){if(yl=re,t=cu(),go(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var d=o.getSelection&&o.getSelection();if(d&&d.rangeCount!==0){o=d.anchorNode;var f=d.anchorOffset,v=d.focusNode;d=d.focusOffset;try{o.nodeType,v.nodeType}catch{o=null;break e}var P=0,$=-1,te=-1,me=0,Re=0,De=t,Pe=null;t:for(;;){for(var Xe;De!==o||f!==0&&De.nodeType!==3||($=P+f),De!==v||d!==0&&De.nodeType!==3||(te=P+d),De.nodeType===3&&(P+=De.nodeValue.length),(Xe=De.firstChild)!==null;)Pe=De,De=Xe;for(;;){if(De===t)break t;if(Pe===o&&++me===f&&($=P),Pe===v&&++Re===d&&(te=P),(Xe=De.nextSibling)!==null)break;De=Pe,Pe=De.parentNode}De=Xe}o=$===-1||te===-1?null:{start:$,end:te}}else o=null}o=o||{start:0,end:0}}else o=null;for(Yi={focusedElem:t,selectionRange:o},re=!1,a=r;a!==null;)if(r=a,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,a=t;else for(;a!==null;){r=a;try{var it=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var st=it.memoizedProps,qn=it.memoizedState,ue=r.stateNode,ie=ue.getSnapshotBeforeUpdate(r.elementType===r.type?st:yr(r.type,st),qn);ue.__reactInternalSnapshotBeforeUpdate=ie}break;case 3:var de=r.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(We){Rn(r,r.return,We)}if(t=r.sibling,t!==null){t.return=r.return,a=t;break}a=r.return}return it=x,x=!1,it}function _(t,r,o){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var f=d=d.next;do{if((f.tag&t)===t){var v=f.destroy;f.destroy=void 0,v!==void 0&&m(r,o,v)}f=f.next}while(f!==d)}}function z(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var d=o.create;o.destroy=d()}o=o.next}while(o!==r)}}function q(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function se(t){var r=t.alternate;r!==null&&(t.alternate=null,se(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ci],delete r[To],delete r[hu],delete r[lp],delete r[up])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ne(t){return t.tag===5||t.tag===3||t.tag===4}function ye(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ne(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function be(t,r,o){var d=t.tag;if(d===5||d===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=vs));else if(d!==4&&(t=t.child,t!==null))for(be(t,r,o),t=t.sibling;t!==null;)be(t,r,o),t=t.sibling}function Ae(t,r,o){var d=t.tag;if(d===5||d===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(d!==4&&(t=t.child,t!==null))for(Ae(t,r,o),t=t.sibling;t!==null;)Ae(t,r,o),t=t.sibling}var Ee=null,Fe=!1;function ze(t,r,o){for(o=o.child;o!==null;)Ge(t,r,o),o=o.sibling}function Ge(t,r,o){if(T&&typeof T.onCommitFiberUnmount=="function")try{T.onCommitFiberUnmount(Yn,o)}catch{}switch(o.tag){case 5:s||h(o,r);case 6:var d=Ee,f=Fe;Ee=null,ze(t,r,o),Ee=d,Fe=f,Ee!==null&&(Fe?(t=Ee,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ee.removeChild(o.stateNode));break;case 18:Ee!==null&&(Fe?(t=Ee,o=o.stateNode,t.nodeType===8?vl(t.parentNode,o):t.nodeType===1&&vl(t,o),Te(t)):vl(Ee,o.stateNode));break;case 4:d=Ee,f=Fe,Ee=o.stateNode.containerInfo,Fe=!0,ze(t,r,o),Ee=d,Fe=f;break;case 0:case 11:case 14:case 15:if(!s&&(d=o.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){f=d=d.next;do{var v=f,P=v.destroy;v=v.tag,P!==void 0&&((v&2)!==0||(v&4)!==0)&&m(o,r,P),f=f.next}while(f!==d)}ze(t,r,o);break;case 1:if(!s&&(h(o,r),d=o.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=o.memoizedProps,d.state=o.memoizedState,d.componentWillUnmount()}catch($){Rn(o,r,$)}ze(t,r,o);break;case 21:ze(t,r,o);break;case 22:o.mode&1?(s=(d=s)||o.memoizedState!==null,ze(t,r,o),s=d):ze(t,r,o);break;default:ze(t,r,o)}}function ot(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new i),r.forEach(function(d){var f=Jm.bind(null,t,d);o.has(d)||(o.add(d),d.then(f,f))})}}function Ve(t,r){var o=r.deletions;if(o!==null)for(var d=0;d<o.length;d++){var f=o[d];try{var v=t,P=r,$=P;e:for(;$!==null;){switch($.tag){case 5:Ee=$.stateNode,Fe=!1;break e;case 3:Ee=$.stateNode.containerInfo,Fe=!0;break e;case 4:Ee=$.stateNode.containerInfo,Fe=!0;break e}$=$.return}if(Ee===null)throw Error(p(160));Ge(v,P,f),Ee=null,Fe=!1;var te=f.alternate;te!==null&&(te.return=null),f.return=null}catch(me){Rn(f,r,me)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)St(r,t),r=r.sibling}function St(t,r){var o=t.alternate,d=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ve(r,t),Et(t),d&4){try{_(3,t,t.return),z(3,t)}catch(st){Rn(t,t.return,st)}try{_(5,t,t.return)}catch(st){Rn(t,t.return,st)}}break;case 1:Ve(r,t),Et(t),d&512&&o!==null&&h(o,o.return);break;case 5:if(Ve(r,t),Et(t),d&512&&o!==null&&h(o,o.return),t.flags&32){var f=t.stateNode;try{pt(f,"")}catch(st){Rn(t,t.return,st)}}if(d&4&&(f=t.stateNode,f!=null)){var v=t.memoizedProps,P=o!==null?o.memoizedProps:v,$=t.type,te=t.updateQueue;if(t.updateQueue=null,te!==null)try{$==="input"&&v.type==="radio"&&v.name!=null&&tt(f,v),bt($,P);var me=bt($,v);for(P=0;P<te.length;P+=2){var Re=te[P],De=te[P+1];Re==="style"?Rr(f,De):Re==="dangerouslySetInnerHTML"?mt(f,De):Re==="children"?pt(f,De):B(f,Re,De,me)}switch($){case"input":Ue(f,v);break;case"textarea":fe(f,v);break;case"select":var Pe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!v.multiple;var Xe=v.value;Xe!=null?ut(f,!!v.multiple,Xe,!1):Pe!==!!v.multiple&&(v.defaultValue!=null?ut(f,!!v.multiple,v.defaultValue,!0):ut(f,!!v.multiple,v.multiple?[]:"",!1))}f[To]=v}catch(st){Rn(t,t.return,st)}}break;case 6:if(Ve(r,t),Et(t),d&4){if(t.stateNode===null)throw Error(p(162));f=t.stateNode,v=t.memoizedProps;try{f.nodeValue=v}catch(st){Rn(t,t.return,st)}}break;case 3:if(Ve(r,t),Et(t),d&4&&o!==null&&o.memoizedState.isDehydrated)try{Te(r.containerInfo)}catch(st){Rn(t,t.return,st)}break;case 4:Ve(r,t),Et(t);break;case 13:Ve(r,t),Et(t),f=t.child,f.flags&8192&&(v=f.memoizedState!==null,f.stateNode.isHidden=v,!v||f.alternate!==null&&f.alternate.memoizedState!==null||(Uo=Rt())),d&4&&ot(t);break;case 22:if(Re=o!==null&&o.memoizedState!==null,t.mode&1?(s=(me=s)||Re,Ve(r,t),s=me):Ve(r,t),Et(t),d&8192){if(me=t.memoizedState!==null,(t.stateNode.isHidden=me)&&!Re&&(t.mode&1)!==0)for(a=t,Re=t.child;Re!==null;){for(De=a=Re;a!==null;){switch(Pe=a,Xe=Pe.child,Pe.tag){case 0:case 11:case 14:case 15:_(4,Pe,Pe.return);break;case 1:h(Pe,Pe.return);var it=Pe.stateNode;if(typeof it.componentWillUnmount=="function"){d=Pe,o=Pe.return;try{r=d,it.props=r.memoizedProps,it.state=r.memoizedState,it.componentWillUnmount()}catch(st){Rn(d,o,st)}}break;case 5:h(Pe,Pe.return);break;case 22:if(Pe.memoizedState!==null){lr(De);continue}}Xe!==null?(Xe.return=Pe,a=Xe):lr(De)}Re=Re.sibling}e:for(Re=null,De=t;;){if(De.tag===5){if(Re===null){Re=De;try{f=De.stateNode,me?(v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):($=De.stateNode,te=De.memoizedProps.style,P=te!=null&&te.hasOwnProperty("display")?te.display:null,$.style.display=Sr("display",P))}catch(st){Rn(t,t.return,st)}}}else if(De.tag===6){if(Re===null)try{De.stateNode.nodeValue=me?"":De.memoizedProps}catch(st){Rn(t,t.return,st)}}else if((De.tag!==22&&De.tag!==23||De.memoizedState===null||De===t)&&De.child!==null){De.child.return=De,De=De.child;continue}if(De===t)break e;for(;De.sibling===null;){if(De.return===null||De.return===t)break e;Re===De&&(Re=null),De=De.return}Re===De&&(Re=null),De.sibling.return=De.return,De=De.sibling}}break;case 19:Ve(r,t),Et(t),d&4&&ot(t);break;case 21:break;default:Ve(r,t),Et(t)}}function Et(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(ne(o)){var d=o;break e}o=o.return}throw Error(p(160))}switch(d.tag){case 5:var f=d.stateNode;d.flags&32&&(pt(f,""),d.flags&=-33);var v=ye(t);Ae(t,v,f);break;case 3:case 4:var P=d.stateNode.containerInfo,$=ye(t);be(t,$,P);break;default:throw Error(p(161))}}catch(te){Rn(t,t.return,te)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Bn(t,r,o){a=t,sn(t)}function sn(t,r,o){for(var d=(t.mode&1)!==0;a!==null;){var f=a,v=f.child;if(f.tag===22&&d){var P=f.memoizedState!==null||n;if(!P){var $=f.alternate,te=$!==null&&$.memoizedState!==null||s;$=n;var me=s;if(n=P,(s=te)&&!me)for(a=f;a!==null;)P=a,te=P.child,P.tag===22&&P.memoizedState!==null?yn(f):te!==null?(te.return=P,a=te):yn(f);for(;v!==null;)a=v,sn(v),v=v.sibling;a=f,n=$,s=me}xr(t)}else(f.subtreeFlags&8772)!==0&&v!==null?(v.return=f,a=v):xr(t)}}function xr(t){for(;a!==null;){var r=a;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:s||z(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!s)if(o===null)d.componentDidMount();else{var f=r.elementType===r.type?o.memoizedProps:yr(r.type,o.memoizedProps);d.componentDidUpdate(f,o.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Qs(r,v,d);break;case 3:var P=r.updateQueue;if(P!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Qs(r,P,o)}break;case 5:var $=r.stateNode;if(o===null&&r.flags&4){o=$;var te=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":te.autoFocus&&o.focus();break;case"img":te.src&&(o.src=te.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var me=r.alternate;if(me!==null){var Re=me.memoizedState;if(Re!==null){var De=Re.dehydrated;De!==null&&Te(De)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}s||r.flags&512&&q(r)}catch(Pe){Rn(r,r.return,Pe)}}if(r===t){a=null;break}if(o=r.sibling,o!==null){o.return=r.return,a=o;break}a=r.return}}function lr(t){for(;a!==null;){var r=a;if(r===t){a=null;break}var o=r.sibling;if(o!==null){o.return=r.return,a=o;break}a=r.return}}function yn(t){for(;a!==null;){var r=a;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{z(4,r)}catch(te){Rn(r,o,te)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var f=r.return;try{d.componentDidMount()}catch(te){Rn(r,f,te)}}var v=r.return;try{q(r)}catch(te){Rn(r,v,te)}break;case 5:var P=r.return;try{q(r)}catch(te){Rn(r,P,te)}}}catch(te){Rn(r,r.return,te)}if(r===t){a=null;break}var $=r.sibling;if($!==null){$.return=r.return,a=$;break}a=r.return}}var br=Math.ceil,Tn=W.ReactCurrentDispatcher,vn=W.ReactCurrentOwner,Dt=W.ReactCurrentBatchConfig,dt=0,zt=null,an=null,un=0,Ut=0,wr=ai(0),Lt=0,la=null,kr=0,Ri=0,es=0,An=null,Un=null,Uo=0,Bl=1/0,ua=null,Qc=!1,fp=null,$a=null,Zc=!1,Ga=null,ed=0,qu=0,mp=null,td=-1,nd=0;function Wr(){return(dt&6)!==0?Rt():td!==-1?td:td=Rt()}function Ya(t){return(t.mode&1)===0?1:(dt&2)!==0&&un!==0?un&-un:Ic.transition!==null?(nd===0&&(nd=ro()),nd):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:cn(t.type)),t)}function ts(t,r,o,d){if(50<qu)throw qu=0,mp=null,Error(p(185));rr(t,o,d),((dt&2)===0||t!==zt)&&(t===zt&&((dt&2)===0&&(Ri|=o),Lt===4&&Va(t,un)),Zr(t,d),o===1&&dt===0&&(r.mode&1)===0&&(Bl=Rt()+500,xl&&ks()))}function Zr(t,r){var o=t.callbackNode;gt(t,r);var d=Kr(t,t===zt?un:0);if(d===0)o!==null&&Bt(o),t.callbackNode=null,t.callbackPriority=0;else if(r=d&-d,t.callbackPriority!==r){if(o!=null&&Bt(o),r===1)t.tag===0?Lc(jh.bind(null,t)):Ti(jh.bind(null,t)),Nc(function(){(dt&6)===0&&ks()}),o=null;else{switch(cs(d)){case 1:o=ni;break;case 4:o=Vt;break;case 16:o=Je;break;case 536870912:o=us;break;default:o=Je}o=Oh(o,Th.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Th(t,r){if(td=-1,nd=0,(dt&6)!==0)throw Error(p(327));var o=t.callbackNode;if(Ul()&&t.callbackNode!==o)return null;var d=Kr(t,t===zt?un:0);if(d===0)return null;if((d&30)!==0||(d&t.expiredLanes)!==0||r)r=rd(t,d);else{r=d;var f=dt;dt|=2;var v=Eh();(zt!==t||un!==r)&&(ua=null,Bl=Rt()+500,Ko(t,r));do try{$m();break}catch($){Nh(t,$)}while(!0);_l(),Tn.current=v,dt=f,an!==null?r=0:(zt=null,un=0,r=Lt)}if(r!==0){if(r===2&&(f=no(t),f!==0&&(d=f,r=gp(t,f))),r===1)throw o=la,Ko(t,0),Va(t,d),Zr(t,Rt()),o;if(r===6)Va(t,d);else{if(f=t.current.alternate,(d&30)===0&&!qm(f)&&(r=rd(t,d),r===2&&(v=no(t),v!==0&&(d=v,r=gp(t,v))),r===1))throw o=la,Ko(t,0),Va(t,d),Zr(t,Rt()),o;switch(t.finishedWork=f,t.finishedLanes=d,r){case 0:case 1:throw Error(p(345));case 2:$o(t,Un,ua);break;case 3:if(Va(t,d),(d&130023424)===d&&(r=Uo+500-Rt(),10<r)){if(Kr(t,0)!==0)break;if(f=t.suspendedLanes,(f&d)!==d){Wr(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Vi($o.bind(null,t,Un,ua),r);break}$o(t,Un,ua);break;case 4:if(Va(t,d),(d&4194240)===d)break;for(r=t.eventTimes,f=-1;0<d;){var P=31-ge(d);v=1<<P,P=r[P],P>f&&(f=P),d&=~v}if(d=f,d=Rt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*br(d/1960))-d,10<d){t.timeoutHandle=Vi($o.bind(null,t,Un,ua),d);break}$o(t,Un,ua);break;case 5:$o(t,Un,ua);break;default:throw Error(p(329))}}}return Zr(t,Rt()),t.callbackNode===o?Th.bind(null,t):null}function gp(t,r){var o=An;return t.current.memoizedState.isDehydrated&&(Ko(t,r).flags|=256),t=rd(t,r),t!==2&&(r=Un,Un=o,r!==null&&yp(r)),t}function yp(t){Un===null?Un=t:Un.push.apply(Un,t)}function qm(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var d=0;d<o.length;d++){var f=o[d],v=f.getSnapshot;f=f.value;try{if(!_n(v(),f))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Va(t,r){for(r&=~es,r&=~Ri,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-ge(r),d=1<<o;t[o]=-1,r&=~d}}function jh(t){if((dt&6)!==0)throw Error(p(327));Ul();var r=Kr(t,0);if((r&1)===0)return Zr(t,Rt()),null;var o=rd(t,r);if(t.tag!==0&&o===2){var d=no(t);d!==0&&(r=d,o=gp(t,d))}if(o===1)throw o=la,Ko(t,0),Va(t,r),Zr(t,Rt()),o;if(o===6)throw Error(p(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,$o(t,Un,ua),Zr(t,Rt()),null}function vp(t,r){var o=dt;dt|=1;try{return t(r)}finally{dt=o,dt===0&&(Bl=Rt()+500,xl&&ks())}}function qo(t){Ga!==null&&Ga.tag===0&&(dt&6)===0&&Ul();var r=dt;dt|=1;var o=Dt.transition,d=Nt;try{if(Dt.transition=null,Nt=1,t)return t()}finally{Nt=d,Dt.transition=o,dt=r,(dt&6)===0&&ks()}}function xp(){Ut=wr.current,nn(wr)}function Ko(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Co(o)),an!==null)for(o=an.return;o!==null;){var d=o;switch(wl(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Na();break;case 3:Li(),nn(mr),nn(Jn),ea();break;case 5:bu(d);break;case 4:Li();break;case 13:nn(ln);break;case 19:nn(ln);break;case 10:Wn(d.type._context);break;case 22:case 23:xp()}o=o.return}if(zt=t,an=t=Ja(t.current,null),un=Ut=r,Lt=0,la=null,es=Ri=kr=0,Un=An=null,Cs!==null){for(r=0;r<Cs.length;r++)if(o=Cs[r],d=o.interleaved,d!==null){o.interleaved=null;var f=d.next,v=o.pending;if(v!==null){var P=v.next;v.next=f,d.next=P}o.pending=d}Cs=null}return t}function Nh(t,r){do{var o=an;try{if(_l(),jl.current=zo,Oo){for(var d=hn.memoizedState;d!==null;){var f=d.queue;f!==null&&(f.pending=null),d=d.next}Oo=!1}if(ta=0,Ot=Hn=hn=null,Mo=!1,Do=0,vn.current=null,o===null||o.return===null){Lt=1,la=r,an=null;break}e:{var v=t,P=o.return,$=o,te=r;if(r=un,$.flags|=32768,te!==null&&typeof te=="object"&&typeof te.then=="function"){var me=te,Re=$,De=Re.tag;if((Re.mode&1)===0&&(De===0||De===11||De===15)){var Pe=Re.alternate;Pe?(Re.updateQueue=Pe.updateQueue,Re.memoizedState=Pe.memoizedState,Re.lanes=Pe.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Xe=zu(P);if(Xe!==null){Xe.flags&=-257,aa(Xe,P,$,v,r),Xe.mode&1&&$c(v,me,r),r=Xe,te=me;var it=r.updateQueue;if(it===null){var st=new Set;st.add(te),r.updateQueue=st}else it.add(te);break e}else{if((r&1)===0){$c(v,me,r),bp();break e}te=Error(p(426))}}else if(rn&&$.mode&1){var qn=zu(P);if(qn!==null){(qn.flags&65536)===0&&(qn.flags|=256),aa(qn,P,$,v,r),Aa(sa(te,$));break e}}v=te=sa(te,$),Lt!==4&&(Lt=2),An===null?An=[v]:An.push(v),v=P;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var ue=Al(v,te,r);Oa(v,ue);break e;case 1:$=te;var ie=v.type,de=v.stateNode;if((v.flags&128)===0&&(typeof ie.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&($a===null||!$a.has(de)))){v.flags|=65536,r&=-r,v.lanes|=r;var We=Du(v,$,r);Oa(v,We);break e}}v=v.return}while(v!==null)}Ph(o)}catch(lt){r=lt,an===o&&o!==null&&(an=o=o.return);continue}break}while(!0)}function Eh(){var t=Tn.current;return Tn.current=zo,t===null?zo:t}function bp(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),zt===null||(kr&268435455)===0&&(Ri&268435455)===0||Va(zt,un)}function rd(t,r){var o=dt;dt|=2;var d=Eh();(zt!==t||un!==r)&&(ua=null,Ko(t,r));do try{Km();break}catch(f){Nh(t,f)}while(!0);if(_l(),dt=o,Tn.current=d,an!==null)throw Error(p(261));return zt=null,un=0,Lt}function Km(){for(;an!==null;)Lh(an)}function $m(){for(;an!==null&&!Mr();)Lh(an)}function Lh(t){var r=Ih(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,r===null?Ph(t):an=r,vn.current=null}function Ph(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=Hl(o,r,Ut),o!==null){an=o;return}}else{if(o=e(o,r),o!==null){o.flags&=32767,an=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,an=null;return}}if(r=r.sibling,r!==null){an=r;return}an=r=t}while(r!==null);Lt===0&&(Lt=5)}function $o(t,r,o){var d=Nt,f=Dt.transition;try{Dt.transition=null,Nt=1,Gm(t,r,o,d)}finally{Dt.transition=f,Nt=d}return null}function Gm(t,r,o,d){do Ul();while(Ga!==null);if((dt&6)!==0)throw Error(p(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(p(177));t.callbackNode=null,t.callbackPriority=0;var v=o.lanes|o.childLanes;if(io(t,v),t===zt&&(an=zt=null,un=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Zc||(Zc=!0,Oh(Je,function(){return Ul(),null})),v=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||v){v=Dt.transition,Dt.transition=null;var P=Nt;Nt=1;var $=dt;dt|=4,vn.current=null,w(t,o),St(o,t),ip(Yi),re=!!yl,Yi=yl=null,t.current=o,Bn(o),ls(),dt=$,Nt=P,Dt.transition=v}else t.current=o;if(Zc&&(Zc=!1,Ga=t,ed=f),v=t.pendingLanes,v===0&&($a=null),U(o.stateNode),Zr(t,Rt()),r!==null)for(d=t.onRecoverableError,o=0;o<r.length;o++)f=r[o],d(f.value,{componentStack:f.stack,digest:f.digest});if(Qc)throw Qc=!1,t=fp,fp=null,t;return(ed&1)!==0&&t.tag!==0&&Ul(),v=t.pendingLanes,(v&1)!==0?t===mp?qu++:(qu=0,mp=t):qu=0,ks(),null}function Ul(){if(Ga!==null){var t=cs(ed),r=Dt.transition,o=Nt;try{if(Dt.transition=null,Nt=16>t?16:t,Ga===null)var d=!1;else{if(t=Ga,Ga=null,ed=0,(dt&6)!==0)throw Error(p(331));var f=dt;for(dt|=4,a=t.current;a!==null;){var v=a,P=v.child;if((a.flags&16)!==0){var $=v.deletions;if($!==null){for(var te=0;te<$.length;te++){var me=$[te];for(a=me;a!==null;){var Re=a;switch(Re.tag){case 0:case 11:case 15:_(8,Re,v)}var De=Re.child;if(De!==null)De.return=Re,a=De;else for(;a!==null;){Re=a;var Pe=Re.sibling,Xe=Re.return;if(se(Re),Re===me){a=null;break}if(Pe!==null){Pe.return=Xe,a=Pe;break}a=Xe}}}var it=v.alternate;if(it!==null){var st=it.child;if(st!==null){it.child=null;do{var qn=st.sibling;st.sibling=null,st=qn}while(st!==null)}}a=v}}if((v.subtreeFlags&2064)!==0&&P!==null)P.return=v,a=P;else e:for(;a!==null;){if(v=a,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:_(9,v,v.return)}var ue=v.sibling;if(ue!==null){ue.return=v.return,a=ue;break e}a=v.return}}var ie=t.current;for(a=ie;a!==null;){P=a;var de=P.child;if((P.subtreeFlags&2064)!==0&&de!==null)de.return=P,a=de;else e:for(P=ie;a!==null;){if($=a,($.flags&2048)!==0)try{switch($.tag){case 0:case 11:case 15:z(9,$)}}catch(lt){Rn($,$.return,lt)}if($===P){a=null;break e}var We=$.sibling;if(We!==null){We.return=$.return,a=We;break e}a=$.return}}if(dt=f,ks(),T&&typeof T.onPostCommitFiberRoot=="function")try{T.onPostCommitFiberRoot(Yn,t)}catch{}d=!0}return d}finally{Nt=o,Dt.transition=r}}return!1}function Ah(t,r,o){r=sa(o,r),r=Al(t,r,1),t=li(t,r,1),r=Wr(),t!==null&&(rr(t,1,r),Zr(t,r))}function Rn(t,r,o){if(t.tag===3)Ah(t,t,o);else for(;r!==null;){if(r.tag===3){Ah(r,t,o);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&($a===null||!$a.has(d))){t=sa(o,t),t=Du(r,t,1),r=li(r,t,1),t=Wr(),r!==null&&(rr(r,1,t),Zr(r,t));break}}r=r.return}}function Ym(t,r,o){var d=t.pingCache;d!==null&&d.delete(r),r=Wr(),t.pingedLanes|=t.suspendedLanes&o,zt===t&&(un&o)===o&&(Lt===4||Lt===3&&(un&130023424)===un&&500>Rt()-Uo?Ko(t,0):es|=o),Zr(t,r)}function Rh(t,r){r===0&&((t.mode&1)===0?r=1:(r=Qt,Qt<<=1,(Qt&130023424)===0&&(Qt=4194304)));var o=Wr();t=Ni(t,r),t!==null&&(rr(t,r,o),Zr(t,o))}function Vm(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Rh(t,o)}function Jm(t,r){var o=0;switch(t.tag){case 13:var d=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:d=t.stateNode;break;default:throw Error(p(314))}d!==null&&d.delete(r),Rh(t,o)}var Ih;Ih=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||mr.current)er=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return er=!1,hp(t,r,o);er=(t.flags&131072)!==0}else er=!1,rn&&(r.flags&1048576)!==0&&bl(r,Lr,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Wl(t,r),t=r.pendingProps;var f=ja(r,Jn.current);Js(r,o),f=Ll(null,r,d,t,f,o);var v=wu();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ar(d)?(v=!0,Ea(r)):v=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Cl(r),f.updater=Wo,r.stateNode=f,f._reactInternals=r,Iu(r,d,t,o),r=Ka(null,r,d,!0,v,o)):(r.tag=0,rn&&v&&Gs(r),vr(null,r,f,o),r=r.child),r;case 16:d=r.elementType;e:{switch(Wl(t,r),t=r.pendingProps,f=d._init,d=f(d._payload),r.type=d,f=r.tag=Qm(d),t=yr(d,t),f){case 0:r=oa(null,r,d,t,o);break e;case 1:r=Qr(null,r,d,t,o);break e;case 11:r=Yc(null,r,d,t,o);break e;case 14:r=Vc(null,r,d,yr(d.type,t),o);break e}throw Error(p(306,d,""))}return r;case 0:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),oa(t,r,d,f,o);case 1:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),Qr(t,r,d,f,o);case 3:e:{if(Il(r),t===null)throw Error(p(387));d=r.pendingProps,v=r.memoizedState,f=v.element,Xs(t,r),Tl(r,d,null,o);var P=r.memoizedState;if(d=P.element,v.isDehydrated)if(v={element:d,isDehydrated:!1,cache:P.cache,pendingSuspenseBoundaries:P.pendingSuspenseBoundaries,transitions:P.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){f=sa(Error(p(423)),r),r=Fu(t,r,d,o,f);break e}else if(d!==f){f=sa(Error(p(424)),r),r=Fu(t,r,d,o,f);break e}else for(Pn=xs(r.stateNode.containerInfo.firstChild),gr=r,rn=!0,Vr=null,o=Po(r,null,d,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Pa(),d===f){r=Pr(t,r,o);break e}vr(t,r,d,o)}r=r.child}return r;case 5:return xu(r),t===null&&kl(r),d=r.type,f=r.pendingProps,v=t!==null?t.memoizedProps:null,P=f.children,Bs(d,f)?P=null:v!==null&&Bs(d,v)&&(r.flags|=32),Rl(t,r),vr(t,r,P,o),r.child;case 6:return t===null&&kl(r),null;case 13:return Dl(t,r,o);case 4:return Zs(r,r.stateNode.containerInfo),d=r.pendingProps,t===null?r.child=_s(r,null,d,o):vr(t,r,d,o),r.child;case 11:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),Yc(t,r,d,f,o);case 7:return vr(t,r,r.pendingProps,o),r.child;case 8:return vr(t,r,r.pendingProps.children,o),r.child;case 12:return vr(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(d=r.type._context,f=r.pendingProps,v=r.memoizedProps,P=f.value,Zt(Ao,d._currentValue),d._currentValue=P,v!==null)if(_n(v.value,P)){if(v.children===f.children&&!mr.current){r=Pr(t,r,o);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var $=v.dependencies;if($!==null){P=v.child;for(var te=$.firstContext;te!==null;){if(te.context===d){if(v.tag===1){te=Ei(-1,o&-o),te.tag=2;var me=v.updateQueue;if(me!==null){me=me.shared;var Re=me.pending;Re===null?te.next=te:(te.next=Re.next,Re.next=te),me.pending=te}}v.lanes|=o,te=v.alternate,te!==null&&(te.lanes|=o),Ia(v.return,o,r),$.lanes|=o;break}te=te.next}}else if(v.tag===10)P=v.type===r.type?null:v.child;else if(v.tag===18){if(P=v.return,P===null)throw Error(p(341));P.lanes|=o,$=P.alternate,$!==null&&($.lanes|=o),Ia(P,o,r),P=v.sibling}else P=v.child;if(P!==null)P.return=v;else for(P=v;P!==null;){if(P===r){P=null;break}if(v=P.sibling,v!==null){v.return=P.return,P=v;break}P=P.return}v=P}vr(t,r,f.children,o),r=r.child}return r;case 9:return f=r.type,d=r.pendingProps.children,Js(r,o),f=Fr(f),d=d(f),r.flags|=1,vr(t,r,d,o),r.child;case 14:return d=r.type,f=yr(d,r.pendingProps),f=yr(d.type,f),Vc(t,r,d,f,o);case 15:return en(t,r,r.type,r.pendingProps,o);case 17:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),Wl(t,r),r.tag=1,ar(d)?(t=!0,Ea(r)):t=!1,Js(r,o),Uc(r,d,f),Iu(r,d,f,o),Ka(null,r,d,!0,t,o);case 19:return Bu(t,r,o);case 22:return Jc(t,r,o)}throw Error(p(156,r.tag))};function Oh(t,r){return Di(t,r)}function Xm(t,r,o,d){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ii(t,r,o,d){return new Xm(t,r,o,d)}function wp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qm(t){if(typeof t=="function")return wp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ce)return 11;if(t===E)return 14}return 2}function Ja(t,r){var o=t.alternate;return o===null?(o=Ii(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function id(t,r,o,d,f,v){var P=2;if(d=t,typeof t=="function")wp(t)&&(P=1);else if(typeof t=="string")P=5;else e:switch(t){case le:return Go(o.children,f,v,r);case ve:P=8,f|=8;break;case Me:return t=Ii(12,o,r,f|2),t.elementType=Me,t.lanes=v,t;case V:return t=Ii(13,o,r,f),t.elementType=V,t.lanes=v,t;case he:return t=Ii(19,o,r,f),t.elementType=he,t.lanes=v,t;case Q:return sd(o,f,v,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ke:P=10;break e;case ae:P=9;break e;case Ce:P=11;break e;case E:P=14;break e;case Z:P=16,d=null;break e}throw Error(p(130,t==null?t:typeof t,""))}return r=Ii(P,o,r,f),r.elementType=t,r.type=d,r.lanes=v,r}function Go(t,r,o,d){return t=Ii(7,t,d,r),t.lanes=o,t}function sd(t,r,o,d){return t=Ii(22,t,d,r),t.elementType=Q,t.lanes=o,t.stateNode={isHidden:!1},t}function kp(t,r,o){return t=Ii(6,t,null,r),t.lanes=o,t}function Sp(t,r,o){return r=Ii(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Zm(t,r,o,d,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=d,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function _p(t,r,o,d,f,v,P,$,te){return t=new Zm(t,r,o,$,te),r===1?(r=1,v===!0&&(r|=8)):r=0,v=Ii(3,null,null,r),t.current=v,v.stateNode=t,v.memoizedState={element:d,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cl(v),t}function eg(t,r,o){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:d==null?null:""+d,children:t,containerInfo:r,implementation:o}}function Mh(t){if(!t)return ws;t=t._reactInternals;e:{if(On(t)!==t||t.tag!==1)throw Error(p(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ar(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(p(171))}if(t.tag===1){var o=t.type;if(ar(o))return mu(t,o,r)}return r}function Dh(t,r,o,d,f,v,P,$,te){return t=_p(o,d,!0,t,f,v,P,$,te),t.context=Mh(null),o=t.current,d=Wr(),f=Ya(o),v=Ei(d,f),v.callback=r??null,li(o,v,f),t.current.lanes=f,rr(t,f,d),Zr(t,d),t}function ad(t,r,o,d){var f=r.current,v=Wr(),P=Ya(f);return o=Mh(o),r.context===null?r.context=o:r.pendingContext=o,r=Ei(v,P),r.payload={element:t},d=d===void 0?null:d,d!==null&&(r.callback=d),t=li(f,r,P),t!==null&&(ts(t,f,P,v),Io(t,f,P)),P}function od(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zh(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function Cp(t,r){zh(t,r),(t=t.alternate)&&zh(t,r)}function tg(){return null}var Fh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tp(t){this._internalRoot=t}ld.prototype.render=Tp.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(p(409));ad(t,r,null,null)},ld.prototype.unmount=Tp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;qo(function(){ad(null,t,null,null)}),r[Ji]=null}};function ld(t){this._internalRoot=t}ld.prototype.unstable_scheduleHydration=function(t){if(t){var r=xi();t={blockedOn:null,target:t,priority:r};for(var o=0;o<jr.length&&r!==0&&r<jr[o].priority;o++);jr.splice(o,0,t),o===0&&ao(t)}};function jp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wh(){}function ng(t,r,o,d,f){if(f){if(typeof d=="function"){var v=d;d=function(){var me=od(P);v.call(me)}}var P=Dh(r,d,t,0,null,!1,!1,"",Wh);return t._reactRootContainer=P,t[Ji]=P.current,gs(t.nodeType===8?t.parentNode:t),qo(),P}for(;f=t.lastChild;)t.removeChild(f);if(typeof d=="function"){var $=d;d=function(){var me=od(te);$.call(me)}}var te=_p(t,0,!1,null,null,!1,!1,"",Wh);return t._reactRootContainer=te,t[Ji]=te.current,gs(t.nodeType===8?t.parentNode:t),qo(function(){ad(r,te,o,d)}),te}function cd(t,r,o,d,f){var v=o._reactRootContainer;if(v){var P=v;if(typeof f=="function"){var $=f;f=function(){var te=od(P);$.call(te)}}ad(r,P,t,f)}else P=ng(o,r,t,f,d);return od(P)}Is=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=kn(r.pendingLanes);o!==0&&(Wi(r,o|1),Zr(r,Rt()),(dt&6)===0&&(Bl=Rt()+500,ks()))}break;case 13:qo(function(){var d=Ni(t,1);if(d!==null){var f=Wr();ts(d,t,1,f)}}),Cp(t,1)}},vi=function(t){if(t.tag===13){var r=Ni(t,134217728);if(r!==null){var o=Wr();ts(r,t,134217728,o)}Cp(t,134217728)}},ya=function(t){if(t.tag===13){var r=Ya(t),o=Ni(t,r);if(o!==null){var d=Wr();ts(o,t,r,d)}Cp(t,r)}},xi=function(){return Nt},Hi=function(t,r){var o=Nt;try{return Nt=t,r()}finally{Nt=o}},_r=function(t,r,o){switch(r){case"input":if(Ue(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var d=o[r];if(d!==t&&d.form===t.form){var f=gn(d);if(!f)throw Error(p(90));Ft(d),Ue(d,f)}}}break;case"textarea":fe(t,o);break;case"select":r=o.value,r!=null&&ut(t,!!o.multiple,r,!1)}},Nn=vp,bn=qo;var rg={usingClientEntryPoint:!1,Events:[pn,Cn,gn,xn,mn,vp]},Ku={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ig={bundleType:Ku.bundleType,version:Ku.version,rendererPackageName:Ku.rendererPackageName,rendererConfig:Ku.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gn(t),t===null?null:t.stateNode},findFiberByHostInstance:Ku.findFiberByHostInstance||tg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dd.isDisabled&&dd.supportsFiber)try{Yn=dd.inject(ig),T=dd}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rg,ei.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jp(r))throw Error(p(200));return eg(t,r,null,o)},ei.createRoot=function(t,r){if(!jp(t))throw Error(p(299));var o=!1,d="",f=Fh;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=_p(t,1,!1,null,null,o,!1,d,f),t[Ji]=r.current,gs(t.nodeType===8?t.parentNode:t),new Tp(r)},ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=Gn(r),t=t===null?null:t.stateNode,t},ei.flushSync=function(t){return qo(t)},ei.hydrate=function(t,r,o){if(!ud(r))throw Error(p(200));return cd(null,t,r,!0,o)},ei.hydrateRoot=function(t,r,o){if(!jp(t))throw Error(p(405));var d=o!=null&&o.hydratedSources||null,f=!1,v="",P=Fh;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(v=o.identifierPrefix),o.onRecoverableError!==void 0&&(P=o.onRecoverableError)),r=Dh(r,null,t,1,o??null,f,!1,v,P),t[Ji]=r.current,gs(t),d)for(t=0;t<d.length;t++)o=d[t],f=o._getVersion,f=f(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,f]:r.mutableSourceEagerHydrationData.push(o,f);return new ld(r)},ei.render=function(t,r,o){if(!ud(r))throw Error(p(200));return cd(null,t,r,!1,o)},ei.unmountComponentAtNode=function(t){if(!ud(t))throw Error(p(40));return t._reactRootContainer?(qo(function(){cd(null,null,t,!1,function(){t._reactRootContainer=null,t[Ji]=null})}),!0):!1},ei.unstable_batchedUpdates=vp,ei.unstable_renderSubtreeIntoContainer=function(t,r,o,d){if(!ud(o))throw Error(p(200));if(t==null||t._reactInternals===void 0)throw Error(p(38));return cd(t,r,o,!1,d)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var Yh;function mg(){if(Yh)return Lp.exports;Yh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Lp.exports=fg(),Lp.exports}var Vh;function gg(){if(Vh)return pd;Vh=1;var l=mg();return pd.createRoot=l.createRoot,pd.hydrateRoot=l.hydrateRoot,pd}var yg=gg();const vg=[["Avery","Morgan","averym","Avery","p1"],["Jordan","Brooks","jbrooks17","Jordan Brooks","p1"],["Taylor","Reed","treed","T. Reed","p1"],["Casey","Nguyen","cnguyen","Casey","p1"],["Riley","Davis","rileyd","Riley","p1"],["Maya","Patel","maya-p","Maya","p3"],["Cameron","Lee","clee","Cameron Lee","p3"],["Sydney","Wilson","sydneyw","Sydney","p3"],["Quinn","Martinez","qmartinez","Quinn","p3"],["Bailey","Adams","bailey_a","Bailey","p5"],["Sam","Rivera","rivera-s","Sam","p5"],["Charlie","Brown","charlieb","Charlie","p6"],["Drew","Johnson","drewj","Drew","p6"],["Alex","Kim","alexk","Alex","p7"],["Robin","Clark","robin-c","Robin","p7"],["Jamie","Flores","jflores","Jamie","p8"]],Sd=vg.map(([l,c,p,g,y],b)=>({id:`sample-${b+1}`,first:l,last:c,sheetName:b===3||b===11?null:`${l} ${c}`,github:p,studentName:g,sections:b===0?["p1","p3"]:[y],status:b%5===0?"Active now":b%4===0?"Viewing page":"No recent signal",current:b%3===0?"Strings and Variables":b%3===1?"Format a Summary":"Intro to Arrays",assignments:[{id:"strings",name:"Strings and Variables",type:"Lesson",status:"Completed",score:b%4===0?null:8+b%3,possible:10,submitted:"2026-11-02"},{id:"summary",name:"Format a Summary",type:"Challenge",status:b%4===0?"Started":"Completed",score:b%4===0?null:11+b%5,possible:15,submitted:"2026-11-03"},{id:"decisions",name:"Decision Tree",type:"Challenge",status:b%3===0?"Submitted":"Needs revision",score:b%3===0?10:null,possible:20,submitted:"2026-10-28"},{id:"reflection",name:"Debugging Reflection",type:"Lesson",status:"Practice completed",score:null,possible:5,submitted:"2026-10-26"}],weekly:{"2026-11-02":b%4===0?0:19+b%6,"2026-10-26":b%3===0?12:8+b%5}})),xg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function _d(l=new Date){const c=Object.fromEntries(xg.formatToParts(l).filter(g=>g.type!=="literal").map(g=>[g.type,g.value])),p=new Date(Date.UTC(Number(c.year),Number(c.month)-1,Number(c.day)));return p.setUTCDate(p.getUTCDate()-(p.getUTCDay()+6)%7),p.toISOString().slice(0,10)}function bg(l=new Date,c=8){const p=new Date(_d(l)+"T12:00:00Z");return Array.from({length:c},(g,y)=>{const b=new Date(p);return b.setUTCDate(b.getUTCDate()-y*7),b.toISOString().slice(0,10)})}const nc=l=>new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"America/Chicago"}),wg=(l,c,p)=>`${l}|${c}|${p}`;function kg({response:l,type:c,aiUse:p,aiDetails:g}){return["essay","logic-puzzle"].includes(c)?String(l).trim().length<10?"Write your answer and explain your thinking.":["none","disclosed"].includes(p)?p==="disclosed"&&String(g).trim().length<5?"Describe which parts involved AI.":"":"Complete the AI-use declaration.":"Select an essay or logic puzzle."}const Sg=[{id:"seed-journal-1",sectionId:"p1",studentId:"sample-2",studentName:"Jordan Brooks",courseId:"computer-science-1",week:_d(),type:"essay",response:"When I debug code, I first reproduce the problem and read the error carefully. Next I try one small change and test again. I keep notes so I can explain what fixed the problem and why.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()},{id:"seed-journal-2",sectionId:"p1",studentId:"sample-3",studentName:"Taylor Reed",courseId:"computer-science-1",week:_d(),type:"logic-puzzle",response:"The differences are 4, 6, 8, and 10. The next difference is 12, so the next number is 42. This also follows the pattern n(n+1), starting at n = 1.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()}],Es={"game-programming":[{id:"csharp-foundations",title:"C# Foundations",description:"Build the logic behind games.",lessons:["csharp-variables","csharp-conditionals"]},{id:"unity-systems",title:"Unity Gameplay",description:"Connect scripts and game mechanics.",lessons:["unity-colliders","unity-player-controller","unity-score"]}],"mobile-app-dev":[{id:"web-basics",title:"Web Foundations",description:"Create and style interface elements.",lessons:["web-layout","web-events"]},{id:"react-foundations",title:"React Essentials",description:"Build reusable and interactive UI.",lessons:["react-components","react-state"]}],uil:[{id:"java-language",title:"Java Language & Tracing",description:"Reason about loops and variables.",lessons:["uil-loops","uil-methods"]},{id:"java-data",title:"Data Structures",description:"Trace arrays and string operations.",lessons:["uil-arrays","uil-strings"]}],"tsi-math":[{id:"tsi-quantitative",title:"Quantitative Reasoning",description:"Rates, ratios, percentages, and proportions.",lessons:["tsi-ratios","tsi-percents"]},{id:"tsi-algebra",title:"Algebraic Reasoning",description:"Solve equations and interpret graphs.",lessons:["tsi-equations","tsi-slope"]}],capstone:[{id:"capstone-discover",title:"Discover the Problem",description:"Investigate a need worth solving.",lessons:["capstone-discovery","capstone-interviews"]},{id:"capstone-validate",title:"Prototype & Validate",description:"Turn evidence into an iterated prototype.",lessons:["capstone-prototype","capstone-feedback"]}]},lc=[{id:"asvab",title:"ASVAB",subtitle:"Military aptitude",description:"Start with the four AFQT subjects; technical subtests can be added later.",reference:"https://www.officialasvab.com/applicants/sample-questions/",topics:[{id:"asvab-ar",title:"Arithmetic Reasoning",description:"Use math to solve everyday word problems.",questions:[{id:"asvab-ar-sample-01",prompt:"A supply team divides 96 bolts equally among 8 tool kits. How many bolts go into each kit?",options:["8","10","12","16"],correct:2,explanation:"Divide 96 by 8. Each tool kit receives 12 bolts."},{id:"asvab-ar-sample-02",prompt:"A delivery vehicle travels 180 miles in 3 hours at a steady speed. What is its average speed?",options:["45 mph","60 mph","75 mph","90 mph"],correct:1,explanation:"Average speed equals distance divided by time: 180 ÷ 3 = 60 mph."}]},{id:"asvab-wk",title:"Word Knowledge",description:"Practice synonyms and vocabulary in context.",questions:[{id:"asvab-wk-sample-01",prompt:'In the sentence "The technician was meticulous when checking each connection," meticulous most nearly means:',options:["hurried","careful","uninterested","unprepared"],correct:1,explanation:"Meticulous describes someone who gives careful attention to detail."},{id:"asvab-wk-sample-02",prompt:'The word "scarce" most nearly means:',options:["plentiful","fragile","limited","unusual"],correct:2,explanation:"If something is scarce, there is not much of it available."}]},{id:"asvab-pc",title:"Paragraph Comprehension",description:"Identify main ideas and supporting details.",questions:[{id:"asvab-pc-sample-01",prompt:"Passage: The neighborhood library added Saturday hours because weekday attendance had increased. Staff hope the extra day will help working families visit. Why did the library extend its schedule?",options:["To replace weekday hours","To make visits easier for more people","To reduce staff","To host only weekend events"],correct:1,explanation:"The passage says Saturday hours respond to demand and help working families visit."},{id:"asvab-pc-sample-02",prompt:"Passage: Before using the lab, workers inspect equipment, record damaged items, and report problems. This routine helps prevent interruptions and injuries. What is the main purpose of the routine?",options:["Improving safety and reliability","Making the lab look new","Reducing all written records","Increasing equipment costs"],correct:0,explanation:"The checklist catches problems early and lowers risk to people and equipment."}]},{id:"asvab-mk",title:"Mathematics Knowledge",description:"Review algebra, geometry, and number sense.",questions:[{id:"asvab-mk-sample-01",prompt:"Solve for x: 3(x − 2) = 15.",options:["3","5","7","9"],correct:2,explanation:"Divide by 3: x − 2 = 5. Add 2: x = 7."},{id:"asvab-mk-sample-02",prompt:"What is the area of a triangle with a base of 10 units and a height of 7 units?",options:["17 square units","35 square units","70 square units","140 square units"],correct:1,explanation:"Triangle area is one-half times base times height: (10 × 7) ÷ 2 = 35."}]}]},{id:"sat",title:"SAT",subtitle:"Digital SAT",description:"Practice the Reading and Writing and Math sections. These samples are not adaptive and do not produce SAT scores.",reference:"https://satsuite.collegeboard.org/sat/practice-preparation",topics:[{id:"sat-rw",title:"Reading and Writing",description:"Interpret short passages, revise sentences, and choose transitions.",questions:[{id:"sat-rw-sample-01",prompt:'Choose the best transition: "Maya planned to bike to school. _____, heavy rain forced her to take the bus."',options:["For example","However","Similarly","Therefore"],correct:1,explanation:"However signals the contrast between Maya's plan and what happened."},{id:"sat-rw-sample-02",prompt:"Choose the grammatically correct sentence.",options:["Each of the notebooks have a label.","Each of the notebooks has a label.","Each of the notebooks are labeled.","Each of the notebook have labels."],correct:1,explanation:"The subject each is singular, so it takes has."}]},{id:"sat-math",title:"Math",description:"Use algebra and problem-solving strategies.",questions:[{id:"sat-math-sample-01",prompt:"If f(x) = 2x + 5, what is f(4)?",options:["9","11","13","18"],correct:2,explanation:"Substitute 4 for x: f(4) = 2(4) + 5 = 13."},{id:"sat-math-sample-02",prompt:"If 2x + y = 11 and y = 3, what is x?",options:["3","4","5","7"],correct:1,explanation:"Replace y with 3: 2x + 3 = 11, so 2x = 8 and x = 4."}]}]},{id:"act",title:"ACT",subtitle:"Enhanced ACT",description:"Practice English, Math, Reading, and optional Science using the updated ACT structure.",reference:"https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/act-exam-sections-and-structure.html",topics:[{id:"act-english",title:"English",description:"Revise sentences for grammar and clarity.",questions:[{id:"act-english-sample-01",prompt:'Choose the correct verb: "The team of engineers _____ ready to begin."',options:["are","is","were","have"],correct:1,explanation:"The singular subject team takes the singular verb is."},{id:"act-english-sample-02",prompt:"Choose the correctly punctuated sentence.",options:["After the storm the street was quiet.","After the storm, the street was quiet.","After, the storm the street was quiet.","After the storm the, street was quiet."],correct:1,explanation:"An introductory phrase is commonly followed by a comma."}]},{id:"act-math",title:"Math",description:"Practice algebra, geometry, and problem solving.",questions:[{id:"act-math-sample-01",prompt:"What is the slope of the line through (2, 1) and (6, 9)?",options:["1","2","4","8"],correct:1,explanation:"Slope = change in y ÷ change in x = (9 − 1) ÷ (6 − 2) = 8 ÷ 4 = 2."},{id:"act-math-sample-02",prompt:"A rectangle measures 8 inches by 5 inches. What is its perimeter?",options:["13 inches","26 inches","40 inches","80 inches"],correct:1,explanation:"Perimeter = 2(length + width) = 2(8 + 5) = 26 inches."}]},{id:"act-reading",title:"Reading",description:"Find key details and reasonable inferences.",questions:[{id:"act-reading-sample-01",prompt:"Passage: Lena repaired an old bicycle rather than buy a new one. She replaced the chain and adjusted the brakes so she could use it to commute. Which statement is supported?",options:["Lena sold the bike.","Lena intends to ride the repaired bike.","Lena cannot fix brakes.","Lena purchased a new bike."],correct:1,explanation:"The passage explicitly says Lena repaired the bike to use it for commuting."},{id:"act-reading-sample-02",prompt:"Passage: Residents created a neighborhood garden on an empty lot. Volunteers donated seeds, installed raised beds, and shared the harvest. What best describes the project?",options:["A commercial farm run by one company","A volunteer project that benefits neighbors","A plan to close the lot permanently","An indoor science experiment"],correct:1,explanation:"The volunteers worked together on a shared garden and harvest."}]},{id:"act-science",title:"Science (optional)",description:"Interpret experimental results, charts, and evidence.",questions:[{id:"act-science-sample-01",prompt:"In an experiment, a plant grew 2 cm at 10°C, 4 cm at 20°C, and 6 cm at 30°C over the same period. What pattern is shown?",options:["Growth decreases as temperature increases.","Growth remains constant.","Growth increases with temperature in these trials.","Temperature has no measurable relationship."],correct:2,explanation:"The recorded growth rises from 2 to 4 to 6 cm as temperature increases across these trials."},{id:"act-science-sample-02",prompt:"Two identical seedlings get the same light and water. One receives fertilizer and the other does not. Which variable is intentionally changed?",options:["Amount of light","Amount of water","Type of plant","Use of fertilizer"],correct:3,explanation:"Fertilizer is the independent variable; the other conditions are kept the same."}]}]}],Jh=lc.map(l=>({id:l.id,title:l.title,description:l.description,lessons:l.topics.map(c=>c.id)})),_g=Object.fromEntries(lc.flatMap(l=>l.topics.map(c=>[c.id,{id:c.id,title:c.title,summary:c.description,language:"text",kind:"Sample practice",trackId:l.id}]))),Cg=l=>{for(const c of lc){const p=c.topics.find(g=>g.id===l);if(p)return{track:c,topic:p}}return null};lc.reduce((l,c)=>l+c.topics.reduce((p,g)=>p+g.questions.length,0),0);const Tg=[{id:"01-how-programs-work/01-first-message",unit:1,unitName:"How Programs Work",lesson:1,slug:"01-first-message",title:"Instructions and output",concept:"Output and strings",summary:"Tell a computer what to display using a simple Python instruction.",mode:"script",starter:`# Use print() to display the exact welcome message.
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
`}],jg=[{id:"02-values-and-variables/01-meet-variables",unit:2,unitName:"Values, Variables & Expressions",lesson:1,slug:"01-meet-variables",title:"Names for changing information",concept:"Variables and assignment  ",summary:"Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.",mode:"script",starter:`# Name the player with a variable, then display the required message.
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
`}],Ng=[{id:"03-functions-and-parameters/01-functions-return",unit:3,unitName:"Functions, Parameters & Return Values",lesson:1,slug:"01-functions-return",title:"Returning an answer",concept:"Function definitions and return  ",summary:"A function packages instructions into a reusable operation. A function can give a result back with `return`.",mode:"function",starter:`def increment_number(number):
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
`}],Eg=[{id:"04-comparisons-and-boolean-logic/01-comparisons",unit:4,unitName:"Comparisons & Boolean Logic",lesson:1,slug:"01-comparisons",title:"Ask Python a question",concept:"Comparison operators and Boolean values  ",summary:"A comparison is a question that evaluates to a Boolean value: `True` or `False`.",mode:"function",starter:`def has_required_points(current, required):
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
`}],Lg=[{id:"05-conditional-execution/01-first-if",unit:5,unitName:"Conditional Execution",lesson:1,slug:"01-first-if",title:"Make a choice with if",concept:"If statements and indentation  ",summary:"Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.",mode:"function",starter:`def classify_temperature(temperature):
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
`}],Pg=[{id:"06-iteration/01-for-ranges",unit:6,unitName:"Iteration & Accumulation",lesson:1,slug:"01-for-ranges",title:"Repeat an instruction",concept:"For loops and ranges  ",summary:"A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.",mode:"script",starter:`# Use one loop to print the integers 1 through 4.
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
`}],Ag=[{id:"07-strings-and-text/01-index-and-length",unit:7,unitName:"Strings & Text Processing",lesson:1,slug:"01-index-and-length",title:"Read characters by position",concept:"String indexing and length",summary:"A string is an ordered sequence of characters. Positions start at zero, and negative indexes count from the end.",mode:"function",starter:`def edge_letters(text):
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
`}],Rg=[{id:"08-lists-and-collections/01-list-indexing",unit:8,unitName:"Lists & Collections",lesson:1,slug:"01-list-indexing",title:"Read values from a list",concept:"Lists, indexes, negative positions",summary:"A list stores several values in order, and each can be read using its position.",mode:"function",starter:`def end_points(values):
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
`}],Ig=[{id:"09-dictionaries-and-data/01-keys-and-values",unit:9,unitName:"Dictionaries & Data",lesson:1,slug:"01-keys-and-values",title:"Look up information by key",concept:"Dictionary lookup and get",summary:"Dictionaries connect unique keys with values, letting a program retrieve information by name.",mode:"function",starter:`def price_for(prices, item):
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
`}],Og=[{id:"10-algorithms-and-testing/01-while-and-sentinels",unit:10,unitName:"Algorithms & Testing",lesson:1,slug:"01-while-and-sentinels",title:"Repeat until a stop signal",concept:"While loops and sentinel values",summary:"A `while` loop repeats until a condition changes, making it useful when the stopping point is part of the input.",mode:"function",starter:`def before_stop(events):
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
`}],Mg=[...Tg,...jg,...Ng,...Eg,...Lg,...Pg,...Ag,...Rg,...Ig,...Og],Qf={"python-strings":{title:"Strings and Variables",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Create a greeting using a name and a favorite topic.",starter:`name = "Jordan"
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
`,console:"Run, Check and Submit are simulated in this React design lab."},"tsi-percents":{title:"Percents and Discounts",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Use percentages in everyday situations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-equations":{title:"Solve Linear Equations",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Solve a one-variable equation with inverse operations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-slope":{title:"Slope and Rate of Change",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Interpret slope from a table of values.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."}};function Vo(l){return typeof l=="string"?l:typeof(l==null?void 0:l.id)=="string"?l.id:""}function As(l){return String((l==null?void 0:l.title)||(l==null?void 0:l.unitName)||(l==null?void 0:l.name)||"Lessons")}function uc(l,c=1){return(l==null?void 0:l.number)??(l==null?void 0:l.unit)??c}function rs(l){return((l==null?void 0:l.lessons)||[]).map(Vo).filter(Boolean)}function rc(l){return Array.isArray(l==null?void 0:l.units)?l.units.flatMap(rs):Array.isArray(l==null?void 0:l.lessons)?l.lessons.map(Vo).filter(Boolean):[]}function Dg(l,c){return((l==null?void 0:l.units)||[]).some(p=>rs(p).includes(c))}function eo(l,c,p=Qf){var k,j;if(!c)return null;const g=((l==null?void 0:l.units)||[]).find(L=>rs(L).includes(c)),y=((g==null?void 0:g.lessons)||[]).find(L=>Vo(L)===c),b=typeof y=="object"&&y||((k=g==null?void 0:g.lessonMeta)==null?void 0:k[c])||((j=l==null?void 0:l.lessonRecords)==null?void 0:j[c])||{},S=(p==null?void 0:p[c])||{},C=String(b.title||b.name||S.title||c.split("/").at(-1));return{...S,...b,id:c,title:C,kind:b.kind||S.kind||"Lesson",difficulty:b.difficulty||S.difficulty||"",points:b.points??S.points??null,language:b.language||S.language||(l==null?void 0:l.language)||"text",challenge:b.challenge||b.summary||S.challenge||"",starter:b.starter||S.starter||"",console:S.console||(b.markdownSource?b.language==="python"?"Run Python to see your output. Checks use published examples only.":"Preview-only workspace. Use the production Playground for functional language runners and verified checks.":""),ready:!!(p!=null&&p[c])||typeof b.markdownSource=="string"&&b.starter!==void 0,isPublished:typeof b.markdownSource=="string"&&b.starter!==void 0}}function to(l,c,p=Qf){var g;return((g=eo(l,c,p))==null?void 0:g.title)||""}function Gl(l){const c=Array.isArray(l)?{lessons:l}:l||{},p=new Map,g=new Set,y=[],b=(C,k,j,L)=>{const H=String(C);let R=y.find(J=>J.id===H);return R||(R={id:H,title:String(k||"Lessons"),description:String(j||""),number:L,lessons:[]},y.push(R)),R},S=(C,k)=>{const j=Vo(k);!j||g.has(j)||(g.add(j),C.lessons.push(j),p.set(j,typeof k=="string"?{id:j}:{...k}))};return Array.isArray(c.units)?c.units.forEach((C,k)=>{const j=b(C.id||`unit-${k+1}`,As(C),C.description||C.summary,uc(C,k+1));(C.lessons||[]).forEach(L=>S(j,L))}):Array.isArray(c.lessons)&&c.lessons.forEach((C,k)=>{if(!C||!Vo(C))return;const j=C.unit||null,L=Vo(C).indexOf("/"),H=j!=null?L>=0?Vo(C).slice(0,L):`unit-${j}`:C.competency?`topic-${String(C.competency).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`:"lessons",R=C.unitName||C.competency||"Lessons",J=b(H,R,"",j??y.length+1);S(J,C)}),{units:y,lessonRecords:Object.fromEntries(p),lessons:y.flatMap(rs)}}const Rp=Gl(Mg),ns=[{id:"computer-science-1",units:Rp.units,lessonRecords:Rp.lessonRecords,language:"python",publishedContent:!0,slug:"computer-science-1",label:"Computer Science I",short:"Python",glyph:"py",color:"#6366F1",description:"Build your problem-solving toolkit with Python.",lessons:Rp.lessons,topics:["Variables","Strings","Formatting","Conditions","Lists"]},{id:"game-programming",units:Es["game-programming"],slug:"game-programming",label:"Game Programming & Design",short:"C# · Unity",glyph:"C#",color:"#C052EB",description:"Make ideas playable with Unity and C#.",lessons:Es["game-programming"].flatMap(l=>l.lessons),topics:["C# Basics","Rigidbody","Colliders"]},{id:"mobile-app-dev",units:Es["mobile-app-dev"],slug:"mobile-app-web",label:"Mobile App & Web",short:"React · JavaScript",glyph:"js",color:"#27BBD2",description:"Create useful websites and mobile applications.",lessons:Es["mobile-app-dev"].flatMap(l=>l.lessons),topics:["HTML","CSS","JavaScript","React"]},{id:"capstone",units:Es.capstone,slug:"capstone",label:"Capstone",short:"Build for someone",glyph:"++",color:"#FF2D55",description:"Research a problem, prototype, and test a solution.",lessons:Es.capstone.flatMap(l=>l.lessons),topics:["Research","Prototype","Pitch"]},{id:"uil",units:Es.uil,slug:"uil",label:"UIL Computer Science",short:"Java",glyph:"jv",color:"#FF9F0A",description:"Trace Java, explain your reasoning, and practice.",lessons:Es.uil.flatMap(l=>l.lessons),topics:["Java","Arrays","Written","Programming"]},{id:"test-prep",units:Jh,lessonRecords:_g,slug:"test-prep",label:"Test Prep",short:"TSI · ASVAB · SAT · ACT",glyph:"ex",color:"#15B7A3",description:"College readiness and military aptitude study, all in one place.",lessons:Jh.flatMap(l=>l.lessons),topics:["TSI","ASVAB","SAT","ACT"]},{id:"tsi-math",units:Es["tsi-math"],slug:"tsi-math",label:"TSI Math Advisory",short:"Math · Open access",glyph:"ma",color:"#30C85A",description:"Quantitative reasoning and algebra practice.",lessons:Es["tsi-math"].flatMap(l=>l.lessons),topics:["Percents","Ratios","Equations"]}],hi=l=>ns.find(c=>c.id===l),zg=l=>{var c;return(c=hi(l))==null?void 0:c.label};function Rd(l){return typeof l=="string"&&/^#[0-9a-fA-F]{6}$/.test(l)}function Fg(l,c={}){const p=c&&typeof c=="object"?c[l.id]:null;return Rd(p)?p.toUpperCase():l.color}function Wg(l){if(!Rd(l))return"#101012";const c=[1,3,5].map(g=>parseInt(l.slice(g,g+2),16)/255).map(g=>g<=.04045?g/12.92:((g+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722>.179?"#101012":"#FFFFFF"}function Hg(l,c,p=document.documentElement){for(const g of c){const y=`--student-course-color-${g.id}`,b=l&&typeof l=="object"?l[g.id]:null,S=`--student-course-ink-${g.id}`;Rd(b)?(p.style.setProperty(y,b),p.style.setProperty(S,Wg(b))):(p.style.removeProperty(y),p.style.removeProperty(S))}}function $n(l,c){const[p,g]=we.useState(()=>{try{const y=localStorage.getItem(l);return y===null?c:JSON.parse(y)}catch{return c}});return we.useEffect(()=>{try{localStorage.setItem(l,JSON.stringify(p))}catch{}},[l,p]),[p,g]}function Bg(l,c=[]){return Array.isArray(c)&&c.includes(l)}function Zf(l,c=[]){const p=rc(l),g=p.filter(y=>Bg(y,c)).length;return{completed:g,total:p.length,percent:p.length?Math.round(g/p.length*100):0}}const Ug=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function qg(l=new Date){const c=Object.fromEntries(Ug.formatToParts(l).filter(p=>p.type!=="literal").map(p=>[p.type,p.value]));return`${c.year}-${c.month}-${c.day}`}function Cd(l){return l?new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}):""}function vd(l,c=[]){return c.find(p=>p.id===l)||null}function Kg(l,c=[]){return c.find(p=>p.id===l)||null}function Id(l,{assignments:c=[],grades:p=[],completedLessons:g=[],today:y=qg()}={}){const b=Kg(l,c),S=vd(l,p),C=l.startsWith("lesson:")&&g.includes(l.slice(7)),k=!!S||C;return b!=null&&b.dueDate?{state:k?"completed":b.dueDate<y?"overdue":"assigned",dueDate:b.dueDate,grade:S,completed:k}:{state:k?"completed":"unassigned",dueDate:null,grade:S,completed:k}}function $p(l=[]){const c=l.reduce((g,y)=>g+y.earned,0),p=l.reduce((g,y)=>g+y.possible,0);return{earned:c,possible:p,percent:p?Math.round(100*c/p):null,count:l.length}}function $g(l=[]){const c=new Map;return l.forEach(p=>{const g=_d(new Date(p.gradedAt+"T12:00:00Z"));c.has(g)||c.set(g,[]),c.get(g).push(p)}),[...c.entries()].map(([p,g])=>({week:p,...$p(g)})).sort((p,g)=>g.week.localeCompare(p.week))}function Gg(l=[],c=[]){return[...new Set([...Array.isArray(l)?l:[],...c.filter(p=>p.id.startsWith("lesson:")).map(p=>p.id.slice(7))])]}const Yg="/playground/data",Vg=new Set(["game-programming","mobile-app-dev","uil","tsi-math"]);function Jg(l){if(typeof l!="string"||!l||l.startsWith("/")||l.includes("\\")||l.includes("?")||l.includes("#")||l.split("/").some(c=>c===".."||c==="."||c===""))throw new Error("Invalid curriculum resource path");return l}function cc(l,c){if(!Vg.has(l))throw new Error("Unknown published course");return Yg+"/"+l+"/"+Jg(c)}async function tr(l,c,p,g,y=!1){const b=await p(cc(l,c),{signal:g,cache:"no-store"});if(!b.ok)throw new Error("Published "+l+" resource unavailable: "+c);return y?b.json():b.text()}function ih(l,c,p,g,y){var b,S,C;return{...l,markdownSource:c,starter:p??"",language:g,markdownUrl:cc(y,l.markdown),kind:"Lesson",challenge:((b=l.exercise)==null?void 0:b.prompt)||l.summary||l.objective||l.title||"",points:l.points??null,cases:((S=l.exercise)==null?void 0:S.examples)||l.cases||[],hints:((C=l.exercise)==null?void 0:C.hints)||l.hints||[],mode:l.exercise?"function":"script"}}async function Xg(l,c){const p="game-programming",g=await tr(p,"course.json",l,c,!0),y=await Promise.all(g.units.map(async b=>({id:b.id,number:b.number,title:b.title,description:b.summary||"",lessons:await Promise.all(b.lessons.map(async S=>{var j,L,H,R,J;const C=await tr(p,S.markdown,l,c);return{...ih(S,C,(j=S.exercise)==null?void 0:j.starter,"csharp",p),starter:((L=S.exercise)==null?void 0:L.starter)||"",kind:"Lesson",exerciseId:(H=S.exercise)==null?void 0:H.id,challenge:((R=S.exercise)==null?void 0:R.prompt)||S.title,unityTask:S.unityTask||[],markdownSource:C+((J=S.unityTask)!=null&&J.length?`

### Unity activity
`+S.unityTask.map(D=>"- "+D).join(`
`):"")}}))})));return{...Gl({units:y}),source:"published",projects:[]}}async function Xh(l,c,p,g){if(!c)return null;const y=Object.keys(c);if(!y.includes("index.html")||!y.includes("styles.css")||!y.includes("script.js")&&!y.includes("App.jsx"))throw Error("A Mobile App starterFiles entry requires index.html, styles.css and script.js (or App.jsx).");return Object.fromEntries(await Promise.all(y.map(async b=>[b,await tr(l,c[b],p,g)])))}async function Qg(l,c){const p="mobile-app-dev",g=await tr(p,"course.json",l,c,!0),y=await Promise.all(g.lessons.map(async S=>{const[C,k,j]=await Promise.all([tr(p,S.markdown,l,c),S.starterFile?tr(p,S.starterFile,l,c):Promise.resolve(""),Xh(p,S.starterFiles,l,c)]);return{...ih(S,C,k,S.language==="react"?"jsx":S.language,p),...j?{starterFiles:j}:{}}})),b=await Promise.all((g.projects||[]).map(async S=>{const[C,k]=await Promise.all([S.starterFile?tr(p,S.starterFile,l,c):Promise.resolve(""),Xh(p,S.starterFiles,l,c)]),j=await Promise.all(S.steps.map(async L=>({...L,focus:L.focus||L.title,markdownSource:await tr(p,L.markdown,l,c),markdownUrl:cc(p,L.markdown)})));return{id:S.id,title:S.title,summary:S.summary,skills:S.skills||[],starter:C,language:"html",steps:j,...k?{starterFiles:k}:{}}}));return{...Gl({lessons:y}),projects:b,source:"published"}}async function Zg(l,c){const g=await tr("uil","course.json",l,c,!0),y=await tr("uil",g.written.markdown,l,c),b=await tr("uil",g.written.practice,l,c,!0),C=(Array.isArray(b)?b:b.questions||[]).map((H,R)=>{const J=H.choices||H.options||[];return"### Practice question "+(R+1)+`

`+String(H.prompt||H.question||"")+`

`+J.map((D,Y)=>String.fromCharCode(65+Y)+". "+D).join(`

`)}).join(`

`),k={id:"written",title:"Written practice",language:"text",markdown:g.written.markdown,markdownSource:y+`

## Published practice questions

`+C,markdownUrl:cc("uil",g.written.markdown),starter:"",kind:"Practice",challenge:"Review Java reasoning and the published written-practice questions."},j=await Promise.all(g.lessons.map(async H=>{const[R,J]=await Promise.all([tr("uil",H.markdown,l,c),tr("uil",H.starterFile,l,c)]);return ih(H,R,J,"java","uil")}));return{...Gl({units:[{id:"written-preparation",number:1,title:"Written preparation",lessons:[k]},{id:"programming-practice",number:2,title:"Java programming practice",lessons:j}]}),source:"published",projects:[]}}async function ey(l,c){const p="tsi-math",[g,y,b,S]=await Promise.all([tr(p,"content/20-day-program.json",l,c,!0),tr(p,"content/strand-lessons-v1.json",l,c,!0),tr(p,"content/diagnostic-24-mc-v2.json",l,c,!0),tr(p,"content/math-locator-profiles.json",l,c,!0)]),C=(g.days||[]).map(j=>({id:j.id,title:j.title,challenge:"Day "+j.day+" · "+j.strand+" · 30 minutes",kind:"Planned session",language:"text",starter:"",ready:!1,status:"planned"})),k=await Promise.all((y.lessons||[]).map(async j=>{const[L,H]=await Promise.all([tr(p,j.student_lesson,l,c),tr(p,j.teacher_key,l,c,!0)]);return{id:j.id,title:j.title,kind:"Draft practice",status:"draft",language:"text",markdown:j.student_lesson,markdownUrl:cc(p,j.student_lesson),markdownSource:L,tsiKey:H,tsiStrandDraft:!0,starter:"",challenge:"Currently authored draft lesson · "+j.minutes+" minutes"}}));return{...Gl({units:[{id:"study-schedule",number:1,title:"20-day study schedule (in development)",lessons:C},{id:"authored-strands",number:2,title:"Available draft strand lessons",lessons:k}]}),source:"published-draft",projects:[],tsiDraft:!0,diagnosticItems:b.items||[],locatorProfiles:S.profiles||[]}}async function ty(l,{fetchImpl:c=fetch,signal:p}={}){if(l==="game-programming")return Xg(c,p);if(l==="mobile-app-dev")return Qg(c,p);if(l==="uil")return Zg(c,p);if(l==="tsi-math")return ey(c,p);throw new Error("Unknown published course")}const Gu=!0;async function ny(){const l="/playground/integration/account-bridge.js",{readOnlyCs1Snapshot:c}=await import(l);return c()}const pa=(...l)=>l.filter(Boolean).join(" "),ry=["temperature-alert","count-matches","sum-positives","score-line","attendance-percent","longest-win-streak","confidence-total","second-largest-distinct","target-pairs","competition-ranks"],iy="/playground/integration/",sy="/"+iy.replace(/^\/+|\/+$/g,""),ga=l=>`${sy}/#${l}`,Kl=()=>ga("/"),Qh=()=>ga("/teacher"),ay=()=>ga("/admin"),oy=()=>ga("/journals"),ly=()=>ga("/grades"),ql=(l=null)=>ga(l?`/challenges/course/${encodeURIComponent(l)}`:"/challenges"),em=l=>ga(`/challenges/${encodeURIComponent(l)}`);function tm(l,c,p=null){const g=typeof l=="string"?hi(l):l;if(!g||!c)return Kl();const y=`/playgrounds/${encodeURIComponent(g.slug)}/projects/${encodeURIComponent(c)}`;return ga(p?`${y}/steps/${encodeURIComponent(p)}`:y)}function Od(l,c){const p=typeof l=="string"?hi(l):l;if(!p)return Kl();const g=`/playgrounds/${encodeURIComponent(p.slug)}`;return ga(c?`${g}/lessons/${encodeURIComponent(c)}`:g)}function hd(l,c=ns){const b=((typeof window<"u"&&window.location.hash.slice(1)||"/").replace(/\/+$/,"")||"/").slice("".length)||"/";if(b==="/")return{page:"home"};if(b==="/teacher")return{page:"teacher"};if(b==="/admin")return{page:"admin"};if(b==="/journals")return{page:"journals"};if(b==="/grades")return{page:"grades"};if(b==="/challenges")return{page:"challenges",filterCourse:null};if(b.startsWith("/challenges/")){const L=b.split("/").filter(Boolean);try{if(L.length===3&&L[1]==="course"){const H=decodeURIComponent(L[2]);return hi(H)?{page:"challenges",filterCourse:H}:{page:"not-found"}}if(L.length===2){const H=decodeURIComponent(L[1]);return ry.includes(H)?{page:"challenge",challengeId:H}:{page:"not-found"}}}catch{return{page:"not-found"}}return{page:"not-found"}}const S=b.split("/").filter(Boolean);if(S[0]!=="playgrounds"||![2,4,6].includes(S.length))return{page:"not-found"};let C,k;try{C=decodeURIComponent(S[1]),k=S.length===4?decodeURIComponent(S[3]):void 0}catch{return{page:"not-found"}}const j=c.find(L=>L.slug===C);if(!j)return{page:"not-found"};if(S[2]==="projects"&&(S.length===4||S.length===6))try{const L=decodeURIComponent(S[3]),H=(j.projects||[]).find(J=>J.id===L),R=S.length===6?decodeURIComponent(S[5]):null;return!H||R&&(S[4]!=="steps"||!H.steps.some(J=>J.id===R))?{page:"not-found"}:{page:"course",courseId:j.id,lessonId:null,projectId:L,stepId:R}}catch{return{page:"not-found"}}return S.length!==2&&(S.length!==4||S[2]!=="lessons")?{page:"not-found"}:k&&!Dg(j,k)?{page:"not-found"}:{page:"course",courseId:j.id,lessonId:k??null}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nm=(...l)=>l.filter((c,p,g)=>!!c&&c.trim()!==""&&g.indexOf(c)===p).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=we.forwardRef(({color:l="currentColor",size:c=24,strokeWidth:p=2,absoluteStrokeWidth:g,className:y="",children:b,iconNode:S,...C},k)=>we.createElement("svg",{ref:k,...cy,width:c,height:c,stroke:l,strokeWidth:g?Number(p)*24/Number(c):p,className:nm("lucide",y),...C},[...S.map(([j,L])=>we.createElement(j,L)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=(l,c)=>{const p=we.forwardRef(({className:g,...y},b)=>we.createElement(dy,{ref:b,iconNode:c,className:nm(`lucide-${uy(l)}`,g),...y}));return p.displayName=`${l}`,p};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=_t("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=_t("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=_t("BookOpenCheck",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=_t("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=_t("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=_t("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=_t("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=_t("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=_t("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=_t("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=_t("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=_t("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=_t("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=_t("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=_t("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=_t("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=_t("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=_t("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=_t("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=_t("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=_t("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=_t("FlaskConical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=_t("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=_t("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=_t("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=_t("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=_t("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=_t("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=_t("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=_t("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=_t("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=_t("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=_t("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=_t("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
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
 */const am=_t("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=_t("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=_t("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=_t("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=_t("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=_t("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=_t("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=_t("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=_t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Rs({children:l,tone:c=""}){return u.jsx("span",{className:pa("chip",c&&`chip-${c}`),children:l})}function Oy({theme:l,setTheme:c}){const p=l==="dark";return u.jsx("button",{className:"icon-button",title:p?"Switch to light mode":"Switch to dark mode","aria-label":"Toggle light and dark mode",onClick:()=>c(p?"light":"dark"),children:p?u.jsx(Ry,{size:17}):u.jsx(Ey,{size:17})})}function My({sidebarOpen:l,onToggleSidebar:c,onHome:p,theme:g,setTheme:y,readOnlyMode:b=!1,accountLabel:S=null}){var C;return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("button",{className:"icon-button nav-toggle",onClick:c,"aria-label":"Toggle navigation",children:l?u.jsx(Ly,{size:18}):u.jsx(Ny,{size:18})}),u.jsxs("button",{className:"brand",onClick:p,children:[u.jsx("span",{className:"brand-logo",children:"{ }"}),u.jsx("strong",{children:"Ms. Whitby's Playground"}),u.jsx("span",{className:"brand-compact",children:"React Lab"})]}),u.jsx("div",{className:"topbar-spacer"}),u.jsx(Rs,{children:b?"CS1 READ-ONLY TEST":"LOCAL DESIGN LAB"}),u.jsx(Oy,{theme:g,setTheme:y}),u.jsx("span",{className:"user-circle",title:S||"Read-only preview",children:((C=S==null?void 0:S[0])==null?void 0:C.toUpperCase())||"W"})]})})}const Dy=[["home","Home",Ty],["challenges","Challenge Bank",zd],["journals","Weekly journals",sh],["grades","Grades",_y],["teacher","Teacher dashboard",ah],["admin","Admin dashboard",uh]];function zy({open:l,page:c,courseId:p,lessonId:g,setPage:y,openCourse:b,onOpenProject:S,availableCourses:C=ns,completedLessons:k=[],assignments:j=[],grades:L=[],readOnlyMode:H=!1}){var J;const R=c==="course"?C.find(D=>D.id===p):null;return u.jsxs("aside",{className:pa("main-sidebar",!l&&"collapsed"),"aria-label":"Playground navigation",children:[u.jsx("div",{className:"side-title",children:"EXPLORE"}),Dy.filter(([D])=>!H||["home","grades","teacher"].includes(D)).map(([D,Y,X])=>u.jsxs("button",{className:pa("nav-item",(c===D||D==="challenges"&&c==="challenge")&&"active"),onClick:()=>y(D),title:Y,children:[u.jsx(X,{size:19}),u.jsx("span",{children:Y})]},D)),R&&u.jsxs("section",{className:"course-outline","data-course":R.id,"aria-label":`${R.label} outline`,children:[u.jsx("div",{className:"side-rule"}),u.jsx("div",{className:"side-title",children:"COURSE CONTENT"}),u.jsxs("button",{className:pa("outline-overview",!g&&"active"),onClick:()=>b(R.id),children:[u.jsx(el,{size:16}),u.jsx("span",{children:"Course overview"})]}),R.units.map((D,Y)=>u.jsxs("details",{className:"outline-unit",open:rs(D).includes(g)||!g&&Y===0?!0:void 0,children:[u.jsxs("summary",{children:[u.jsx("span",{className:"outline-unit-number",children:String(uc(D,Y+1)).padStart(2,"0")}),u.jsx("span",{className:"outline-unit-title",title:As(D),children:As(D)}),u.jsx(my,{size:14})]}),u.jsx("div",{className:"outline-lesson-list",children:rs(D).map(X=>{const M=to(R,X),F=Id("lesson:"+X,{assignments:j,grades:L,completedLessons:k}),B=F.completed?"completed":F.dueDate?F.state:"",W=B==="completed"?"Completed":B==="overdue"?"Overdue":B==="assigned"?"Assigned":"";return u.jsxs("button",{onClick:()=>b(R.id,X),className:pa("outline-lesson",X===g&&"selected"),"aria-label":W?`${M}, ${W.toLowerCase()}`:M,title:W?`${M} · ${W}`:M,"aria-current":X===g?"page":void 0,children:[u.jsx("span",{className:"outline-lesson-name",children:M}),W&&u.jsx("span",{className:`assignment-dot ${B}`,"aria-hidden":"true"})]},X)})})]},`${R.id}-${D.id}-${g||"overview"}`)),!!((J=R.projects)!=null&&J.length)&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"side-section-title",children:"PROJECTS"}),R.projects.map(D=>u.jsx("button",{type:"button",className:"outline-lesson",title:D.title,onClick:()=>S==null?void 0:S(R.id,D.id),children:u.jsx("span",{className:"outline-lesson-name",children:D.title})},D.id))]})]}),u.jsx("div",{className:"side-rule"}),u.jsx("div",{className:"side-title",children:"PLAYGROUNDS"}),C.filter(D=>D.id!=="tsi-math").map(D=>u.jsxs("button",{"data-course":D.id,className:pa("nav-item course-nav-item",c==="course"&&p===D.id&&"active"),onClick:()=>b(D.id),title:D.label,children:[u.jsx("span",{className:"nav-dot"}),u.jsx("span",{children:D.label})]},D.id)),u.jsxs("div",{className:"sidebar-bottom",children:[u.jsx(gy,{size:17}),u.jsx("span",{children:"Your learning spaces"})]})]})}function Fy(){return u.jsxs("footer",{className:"site-footer",children:[u.jsx("span",{children:"Ms. Whitby's Playground · React design lab"}),u.jsx("span",{children:"Fictional data · No authentication or backend · No real code execution"})]})}const Wy={"computer-science-1":Dd,"game-programming":Sy,"mobile-app-dev":Ay,uil:om,"tsi-math":im,"test-prep":vy,capstone:Py};function Hy({course:l,onOpen:c,completedLessons:p=[]}){const{completed:g,total:y}=Zf(l,p),b=Wy[l.id]||Dd;function S(C){C.button!==0||C.metaKey||C.ctrlKey||C.shiftKey||C.altKey||(C.preventDefault(),c())}return u.jsxs("a",{className:"course-card","data-course":l.id,href:Od(l),onClick:S,children:[u.jsxs("div",{className:"course-card-heading",children:[u.jsx("span",{className:"course-glyph","aria-hidden":"true",children:u.jsx(b,{size:24,strokeWidth:2.2})}),u.jsxs("div",{children:[u.jsx("h2",{children:l.label}),u.jsx("p",{children:l.short})]})]}),u.jsx("p",{className:"course-description",children:l.description}),u.jsxs("div",{className:"course-card-footer",children:[u.jsxs("div",{className:"course-meta",children:[u.jsxs("span",{children:[y," ",y===1?"lesson":"lessons"]}),u.jsxs("span",{children:[g," completed"]})]}),u.jsx("progress",{className:"course-progress-track",value:g,max:Math.max(y,1),"aria-label":`${l.label}: ${g} of ${y} lessons completed`})]})]})}function By({onClick:l}){return u.jsxs("button",{className:"wide-shortcut",onClick:l,children:[u.jsx(ah,{size:18}),u.jsxs("span",{children:[u.jsx("strong",{children:"Teacher Dashboard preview"}),u.jsx("small",{children:"Section roster, expanded student assignments, account matching, and weekly points"})]}),u.jsx(pi,{size:18})]})}function Uy({openCourse:l,openTeacher:c,openChallenges:p,availableCourses:g=ns,completedLessons:y=[],readOnlyMode:b=!1}){return u.jsxs("div",{className:"main-content",children:[u.jsxs("div",{className:"welcome",children:[u.jsx("div",{className:"eyebrow",children:"Your learning spaces"}),u.jsx("h1",{children:"Your playgrounds"}),u.jsxs("p",{children:["Choose a course to continue learning. ",b?"Review Computer Science I lessons and your existing verified results. Practice is local to this test build.":"Complete lessons to fill your progress bars."]})]}),u.jsx("div",{className:"course-card-grid",children:g.filter(S=>S.id!=="tsi-math").map(S=>u.jsx(Hy,{course:S,completedLessons:y,onOpen:()=>l(S.id)},S.id))}),!b&&u.jsxs("button",{type:"button",className:"wide-shortcut challenge-bank-shortcut",onClick:p,children:[u.jsx(zd,{size:23}),u.jsxs("span",{children:[u.jsx("strong",{children:"Shared Challenge Bank"}),u.jsx("small",{children:"Practice one problem in Python, Java, JavaScript, or C#."})]}),u.jsx("span",{"aria-hidden":"true",children:"→"})]}),!b&&u.jsx(By,{onClick:c})]})}function qy({course:l,openCourse:c,openProject:p,openChallenges:g,completedLessons:y=[],assignments:b=[],grades:S=[],courseColors:C={},onSetCourseColor:k,onResetCourseColor:j,readOnlyMode:L=!1}){var Y;const H=Zf(l,y),[R,J]=we.useState(!1),D=Fg(l,C);return u.jsxs("div",{className:"course-landing",children:[u.jsxs("header",{className:"course-hero surface-card",children:[u.jsx("button",{type:"button",className:"icon-button course-color-settings",onClick:()=>J(X=>!X),"aria-label":R?"Close course color settings":`Change ${l.label} color`,title:R?"Close settings":"Course color","aria-expanded":R,"aria-controls":"course-color-controls",children:R?u.jsx(Wd,{size:17}):u.jsx(lh,{size:17})}),u.jsx("div",{className:"eyebrow",children:"Course overview"}),u.jsx("h1",{children:l.label}),u.jsx("p",{children:l.description}),u.jsxs("div",{className:"course-hero-stats",children:[u.jsxs("span",{children:[u.jsx(jy,{size:16})," ",l.units.length," units"]}),u.jsxs("span",{children:[u.jsx(el,{size:16})," ",rc(l).length," lessons"]})]}),u.jsxs("button",{className:"btn primary",disabled:!rc(l).length,onClick:()=>c(l.id,rc(l)[0]),children:["Start learning ",u.jsx(pi,{size:16})]}),R&&u.jsxs("section",{id:"course-color-controls",className:"course-color-controls","aria-label":"Choose a course color",children:[u.jsxs("div",{className:"course-color-control-copy",children:[u.jsx("strong",{children:"Course color"}),u.jsx("p",{children:"Make this course your own. The color updates throughout your Playground."})]}),u.jsxs("label",{className:"course-color-picker",children:[u.jsx("input",{type:"color",value:D,onChange:X=>k==null?void 0:k(l.id,X.target.value),"aria-label":`Choose a color for ${l.label}`}),u.jsx("span",{children:"Choose color"})]}),u.jsx("button",{type:"button",className:"btn",onClick:()=>j==null?void 0:j(l.id),children:"Reset to default"}),u.jsx("button",{type:"button",className:"btn",onClick:()=>J(!1),children:"Done"})]})]}),l.publishedContent&&u.jsx("p",{className:"course-published-note",children:"Real published lessons are shown here. Practice in this preview does not change your grades."}),l.contentLoadingError&&u.jsxs("p",{className:"course-published-note",role:"alert",children:["Published course materials could not be loaded: ",l.contentLoadingError,". Sample lessons are not substituted."]}),!l.publishedContent&&!l.contentLoadingError&&u.jsx("p",{className:"course-published-note",children:"Course materials are not yet published here. This is a design preview, not a course to assign."}),l.tsiDraft&&u.jsx("p",{className:"course-published-note",children:"The 20-day TSI schedule is an outline; four strand lessons are drafts. Unwritten sessions are not available for practice."}),u.jsxs("p",{className:"course-landing-progress",children:[H.completed," of ",H.total," lessons ",L?"with verified grades":l.publishedContent?"marked complete in preview":"completed"," · ",H.percent,"%"]}),u.jsx("div",{className:"course-landing-heading",children:u.jsxs("div",{children:[u.jsx("h2",{children:"Units & lessons"}),u.jsx("p",{children:"Choose a unit or jump directly into a lesson."})]})}),u.jsx("div",{className:"unit-card-grid",children:l.units.map((X,M)=>u.jsxs("section",{className:"unit-card surface-card",children:[u.jsxs("header",{className:"unit-card-header",children:[u.jsxs("span",{className:"unit-badge",children:["UNIT ",String(uc(X,M+1)).padStart(2,"0")]}),u.jsx("h3",{title:As(X),children:As(X)}),X.description&&u.jsx("p",{children:X.description})]}),u.jsx("div",{className:"unit-lessons",children:rs(X).map((F,B)=>u.jsxs("a",{className:"unit-lesson-link",href:Od(l,F),onClick:W=>{W.button!==0||W.metaKey||W.ctrlKey||W.shiftKey||W.altKey||(W.preventDefault(),c(l.id,F))},children:[u.jsx("span",{className:"unit-lesson-index",children:B+1}),u.jsxs("span",{className:"unit-lesson-label",children:[u.jsx("strong",{title:to(l,F),children:to(l,F)}),(()=>{var G,ce;const W=Id("lesson:"+F,{assignments:b,grades:S,completedLessons:y});return W.dueDate||W.completed?u.jsxs("span",{className:"unit-assignment-meta",children:[u.jsxs("span",{className:`assignment-status ${W.state}`,children:[u.jsx("span",{className:`assignment-dot ${W.state}`,"aria-hidden":"true"}),W.completed?"Completed":W.state==="overdue"?"Overdue":"Assigned"]}),W.dueDate&&u.jsxs("small",{children:["Due ",Cd(W.dueDate)]}),W.grade&&u.jsxs("small",{children:[W.grade.earned," / ",W.grade.possible," pts"]})]}):u.jsxs("small",{children:[(G=eo(l,F))==null?void 0:G.kind,(ce=eo(l,F))!=null&&ce.difficulty?` · ${eo(l,F).difficulty}`:""]})})()]}),u.jsx(Gp,{size:16})]},F))})]},X.id))}),!!((Y=l.projects)!=null&&Y.length)&&u.jsxs("section",{className:"course-projects surface-card",children:[u.jsx("div",{className:"eyebrow",children:"Published guided projects"}),u.jsx("h2",{children:"Projects"}),u.jsx("div",{className:"unit-card-grid",children:l.projects.map(X=>u.jsxs("a",{className:"unit-lesson-link",href:tm(l,X.id),onClick:M=>{M.button!==0||M.metaKey||M.ctrlKey||M.shiftKey||M.altKey||(M.preventDefault(),p(l.id,X.id))},children:[u.jsxs("span",{className:"unit-lesson-label",children:[u.jsx("strong",{children:X.title}),u.jsxs("small",{children:[X.steps.length," steps · ",X.summary]})]}),u.jsx(Gp,{size:16})]},X.id))})]}),u.jsxs("section",{className:"course-challenges-shelf surface-card",children:[u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Shared practice library"}),u.jsx("h2",{children:"Related programming challenges"}),u.jsx("p",{children:"Browse reusable problems suited to this course. Review each challenge's prerequisites before recommending it to students."})]}),u.jsxs("a",{href:ql(l.id),className:"btn",onClick:X=>{X.button!==0||X.metaKey||X.ctrlKey||X.shiftKey||X.altKey||(X.preventDefault(),g(l.id))},children:[u.jsx(zd,{size:16})," Browse challenges"]})]})]})}function Ky({selectedTopic:l,attempts:c,setAttempts:p,openCourse:g,completedLessons:y,onToggleLessonComplete:b}){const{track:S,topic:C}=l,[k,j]=we.useState(0),[L,H]=we.useState(null),[R,J]=we.useState(!1),D=C.questions[k],Y=C.questions.filter(W=>c[W.id]!==void 0).length,X=y.includes(C.id);function M(W){j(W),H(null),J(!1)}function F(){L===null||R||(J(!0),p(W=>({...W,[D.id]:{chosen:L,correct:L===D.correct}})))}const B=L===D.correct;return u.jsxs("section",{className:"test-prep-practice",children:[u.jsxs("button",{type:"button",className:"test-prep-back",onClick:()=>g("test-prep"),children:[u.jsx(rm,{size:16})," All Test Prep"]}),u.jsxs("div",{className:"surface-card test-prep-practice-header",children:[u.jsxs("div",{className:"eyebrow",children:[S.title," / ",C.title]}),u.jsx("h1",{children:C.title}),u.jsx("p",{children:C.description}),u.jsx("p",{className:"muted",children:"Original sample questions only. Your practice results are not official exam scores."}),u.jsxs("div",{className:"test-prep-practice-meta",children:[u.jsxs("span",{children:[Y," of ",C.questions.length," attempted"]}),X&&u.jsxs("span",{className:"test-prep-complete",children:[u.jsx(sc,{size:16})," Practiced"]})]})]}),u.jsxs("div",{className:"surface-card test-prep-question",children:[u.jsxs("div",{className:"test-prep-question-top",children:[u.jsxs("strong",{children:["Question ",k+1," of ",C.questions.length]}),u.jsx("span",{className:"muted",children:"Practice / multiple choice"})]}),u.jsx("h2",{children:D.prompt}),u.jsxs("fieldset",{className:"test-prep-options",disabled:R,children:[u.jsx("legend",{className:"sr-only",children:"Choose your answer"}),D.options.map((W,G)=>u.jsxs("label",{className:"test-prep-option "+(L===G?"selected ":"")+(R&&G===D.correct?"correct":""),children:[u.jsx("input",{type:"radio",name:D.id,checked:L===G,onChange:()=>H(G)}),u.jsx("span",{className:"test-prep-letter",children:String.fromCharCode(65+G)}),u.jsx("span",{children:W})]},G))]}),R&&u.jsxs("div",{className:"test-prep-feedback "+(B?"is-correct":"is-incorrect"),role:"status",children:[u.jsx("strong",{children:B?"Correct!":"Review this answer"}),u.jsx("p",{children:D.explanation})]}),u.jsxs("div",{className:"test-prep-actions",children:[u.jsx("button",{type:"button",className:"btn primary",disabled:L===null||R,onClick:F,children:"Check answer"}),u.jsxs("button",{type:"button",className:"btn",onClick:()=>{H(null),J(!1)},children:[u.jsx(Fd,{size:14})," Try again"]})]})]}),u.jsxs("nav",{className:"test-prep-topic-nav","aria-label":"Sample question navigation",children:[k>0?u.jsxs("button",{type:"button",className:"btn",onClick:()=>M(k-1),children:[u.jsx(Md,{size:16})," Previous"]}):u.jsx("span",{}),k<C.questions.length-1?u.jsxs("button",{type:"button",className:"btn",onClick:()=>M(k+1),children:["Next question ",u.jsx(pi,{size:16})]}):u.jsx("span",{})]}),Y===C.questions.length&&!X&&u.jsxs("div",{className:"test-prep-completion surface-card",children:[u.jsx("span",{children:"You've attempted every sample in this subject."}),u.jsx("button",{type:"button",className:"btn primary",onClick:()=>b==null?void 0:b(C.id),children:"Mark topic practiced"})]}),u.jsxs("p",{className:"test-prep-official",children:["Need more questions? ",u.jsxs("a",{href:S.reference,target:"_blank",rel:"noreferrer",children:["Visit official ",S.title," preparation resources ",u.jsx(sm,{size:13})]})]})]})}function $y({lessonId:l,openCourse:c,completedLessons:p=[],onToggleLessonComplete:g}){const[y,b]=$n("designlab:test-prep-sample-answers",{}),S=l?Cg(l):null;return u.jsx("div",{className:"course-layout integrated-course","data-course":"test-prep",children:u.jsxs("div",{className:"course-main",children:[u.jsxs("div",{className:"course-breadcrumb",children:[u.jsx("button",{type:"button",onClick:()=>c(null),children:"All playgrounds"}),u.jsx(pi,{size:14}),l?u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",onClick:()=>c("test-prep"),children:"Test Prep"}),u.jsx(pi,{size:14}),u.jsx("span",{children:S==null?void 0:S.topic.title})]}):u.jsx("span",{children:"Test Prep"})]}),S?u.jsx(Ky,{selectedTopic:S,attempts:y,setAttempts:b,openCourse:c,completedLessons:p,onToggleLessonComplete:g},l):u.jsxs("div",{className:"test-prep-hub",children:[u.jsxs("header",{className:"surface-card test-prep-hero",children:[u.jsx("div",{className:"eyebrow",children:"Test Prep / Self-study"}),u.jsx("h1",{children:"Choose a test to prepare for"}),u.jsx("p",{children:"Study in short sessions, answer original sample questions, and review the reasoning behind each answer. No class code required."}),u.jsx("p",{className:"muted",children:"This is a preview. Practice history stays in this browser. No scores are sent to a teacher, and no official exam scores are predicted."})]}),u.jsxs("div",{className:"test-prep-exams",children:[u.jsxs("section",{className:"surface-card test-prep-exam","data-exam":"tsi",children:[u.jsx("div",{className:"test-prep-exam-icon",children:u.jsx(Zh,{size:23})}),u.jsx("div",{className:"eyebrow",children:"College readiness"}),u.jsx("h2",{children:"TSI Math"}),u.jsx("p",{children:"Continue the existing TSIA2 math curriculum and diagnostic work without changing old lesson links."}),u.jsx("p",{className:"test-prep-exam-meta",children:"Existing course / classroom study"}),u.jsxs("button",{type:"button",className:"btn primary",onClick:()=>c("tsi-math"),children:["Open TSI Math ",u.jsx(pi,{size:16})]})]}),lc.map(C=>{const k=C.topics.reduce((L,H)=>L+H.questions.length,0),j=C.topics.reduce((L,H)=>L+H.questions.filter(R=>y[R.id]!==void 0).length,0);return u.jsxs("section",{className:"surface-card test-prep-exam","data-exam":C.id,children:[u.jsx("div",{className:"test-prep-exam-icon",children:C.id==="act"?u.jsx(ky,{size:23}):u.jsx(Zh,{size:23})}),u.jsx("div",{className:"eyebrow",children:C.subtitle}),u.jsx("h2",{children:C.title}),u.jsx("p",{children:C.description}),u.jsxs("p",{className:"test-prep-exam-meta",children:[C.topics.length," subjects · ",j,"/",k," samples attempted"]}),u.jsx("progress",{className:"course-progress-track",value:j,max:k,"aria-label":C.title+" sample practice progress"}),u.jsx("div",{className:"test-prep-topic-links",children:C.topics.map(L=>u.jsxs("button",{type:"button",onClick:()=>c("test-prep",L.id),children:[u.jsx("span",{children:L.title}),u.jsx(pi,{size:15})]},L.id))}),u.jsxs("button",{type:"button",className:"btn primary",onClick:()=>c("test-prep",C.topics[0].id),children:["Start ",C.title," samples ",u.jsx(pi,{size:16})]})]},C.id)})]})]})]})})}function dc({axis:l,onDrag:c}){const p=we.useRef(!1),g=l==="columns",y=()=>p.current=!1;return u.jsx("div",{className:pa("splitter",g?"column-split":"row-split"),role:"separator","aria-label":g?"Resize instructions and editor":"Resize editor and console","aria-orientation":g?"vertical":"horizontal",tabIndex:0,onPointerDown:b=>{b.preventDefault(),b.currentTarget.setPointerCapture(b.pointerId),p.current=!0},onPointerMove:b=>{p.current&&b.buttons===1&&c(b)},onPointerUp:y,onLostPointerCapture:y,children:u.jsx("span",{})})}function ch({eyebrow:l,children:c,actions:p}){return u.jsxs("div",{className:"page-title-row",children:[u.jsxs("div",{children:[l&&u.jsx("div",{className:"eyebrow",children:l}),u.jsx("h1",{children:c})]}),p&&u.jsx("div",{className:"page-actions",children:p})]})}function Yu({task:l,unit:c,unitNumber:p,isTsi:g,isCompleted:y=!1,assignment:b=null,grade:S=null,onToggleCompleted:C,readOnlyMode:k=!1}){const j=(b==null?void 0:b.id)||(S==null?void 0:S.id)||"",L=Id(j,{assignments:b?[b]:[],grades:S?[S]:[],completedLessons:y?[j.replace(/^lesson:/,"")]:[]});return u.jsxs("div",{className:"lesson-header",children:[u.jsxs("div",{className:"eyebrow",children:["Unit ",uc(c,p)," · ",As(c)," ",u.jsx("span",{className:"dot",children:"·"})," ",l.kind]}),u.jsx(ch,{actions:u.jsxs("div",{className:"lesson-heading-actions",children:[!g&&(l==null?void 0:l.points)!=null&&u.jsx("span",{className:"points-tag",children:S?`${S.earned} / ${S.possible} pts`:`${l.points} points available`}),k&&!S?u.jsx("span",{className:"points-tag",children:"Verified scores only"}):S?u.jsxs("span",{className:"btn completion-toggle completed",children:[u.jsx(sc,{size:16})," Completed"]}):u.jsxs("button",{type:"button",className:`btn completion-toggle ${y?"completed":""}`,"aria-pressed":y,onClick:C,children:[y?u.jsx(sc,{size:16}):u.jsx(yy,{size:16}),y?"Completed":"Mark complete"]})]}),children:l.title}),u.jsx("p",{children:l.challenge}),(b==null?void 0:b.dueDate)&&u.jsxs("div",{className:"lesson-assignment-info",children:[u.jsx("span",{className:`assignment-status ${L.state}`,children:L.state==="completed"?"Completed":L.state==="overdue"?"Overdue":"Assigned"}),u.jsxs("span",{children:["Due ",Cd(b.dueDate)]})]})]})}const dh={"tsi-ratios":{prompt:"A recipe uses 3 cups of water for every 5 cups of rice. How many cups of water are needed for 15 cups of rice?",options:["5 cups","9 cups","12 cups","25 cups"],correct:1,explanation:"15 is three times 5, so multiply the 3 cups of water by 3 to get 9."},"tsi-percents":{prompt:"A $60 backpack is discounted by 25%. What is the sale price?",options:["$15","$35","$45","$75"],correct:2,explanation:"25% of $60 is $15; subtract $15 from $60 to get $45."},"tsi-equations":{prompt:"Solve for x: 4x + 6 = 22.",options:["2","4","6","7"],correct:1,explanation:"Subtract 6 from both sides to get 4x = 16, then divide by 4: x = 4."},"tsi-slope":{prompt:"A table gives points (1, 3), (2, 5), and (3, 7). What is the slope?",options:["1","2","3","4"],correct:1,explanation:"As x goes up by 1, y goes up by 2, so slope = 2/1 = 2."}},Gy=`# Find an Inefficiency

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
`,Yy=`# Interpret User Feedback

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
`,Vy=`# Interview for Evidence

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
`,Jy=`# Make a Minimum Viable Prototype

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
`,Xy=`# Player Decisions

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
`,Qy=`# Variables for a Game

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
`,Zy=`# Decision Making

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
`,ev=`# Format a Summary

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
`,tv=`# Lists and Indexing

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
`,nv=`# For Loops

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
`,rv=`# Strings and Variables

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
`,iv=`<!-- Learning example adapted from mswhitby/computer-science-1/docs/units/content/02-values-and-variables/lessons/01-meet-variables.md; displayed in independent React preview. -->
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
`,sv=`# Your First React Card

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
`,av=`# Interactive React State

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
`,ov=`# Solve Linear Equations

## Learn

Solve an equation by doing the same operation to both sides. For 3x + 5 = 20, first subtract 5, then divide by 3.

### Example

Explain the quantities and operations before calculating.

## Practice

Solve 4x + 6 = 22. Explain each step.

Choose an answer in the practice card.
`,lv=`# Percents and Discounts

## Learn

A percent compares a quantity with 100. To find 20% of 50, multiply 0.20 × 50 = 10.

### Example

Explain the quantities and operations before calculating.

## Practice

A backpack costs $60 and is discounted by 25%. What is the sale price?

Choose an answer in the practice card.
`,uv=`# Ratios and Rates

## Learn

A ratio compares quantities. A **unit rate** tells us how many of one item correspond to one unit of another.

Example: If 3 markers are shared by 5 students, the number of markers per student is:

**3 ÷ 5 = 0.6 markers per student.**

## Practice

A group of 15 students needs markers at the same rate. How many markers are needed? Explain how you know.
`,cv=`# Slope and Rate of Change

## Learn

Slope is the change in y divided by the change in x. A constant rate makes a linear relationship.

### Example

Explain the quantities and operations before calculating.

## Practice

The table gives (1, 3), (2, 5), and (3, 7). What is the slope?

Choose an answer in the practice card.
`,dv=`# Trace a Java Array

## Learn

An array holds multiple values. Java arrays start at index **0**.

\`\`\`java
int[] scores = {2, 4, 6};
System.out.println(scores[0]); // 2
\`\`\`

## Practice

Trace the loop in the starter code. Record every index and the updated element value in a table. Then write the final array.
`,pv=`# Trace Java Loops

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
`,hv=`# Method Calls and Scope

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
`,fv=`# String Indexing

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
`,mv=`# Collision Events

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
`,gv=`<!-- Learning example adapted from mswhitby/game-programming/samples/PlayerController.md (sample-lessons); displayed in independent React preview. -->
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
`,yv=`# Score and Feedback

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
`,vv=`# Events and Forms

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
`,xv=`# Responsive Layouts

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
`;function ph(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var tl=ph();function lm(l){tl=l}var ic={exec:()=>null};function Gt(l,c=""){let p=typeof l=="string"?l:l.source;const g={replace:(y,b)=>{let S=typeof b=="string"?b:b.source;return S=S.replace(Hr.caret,"$1"),p=p.replace(y,S),g},getRegex:()=>new RegExp(p,c)};return g}var Hr={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:l=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}#`),htmlBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}<(?:[a-z].*>|!--)`,"i")},bv=/^(?:[ \t]*(?:\n|$))+/,wv=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,kv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,pc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Sv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hh=/(?:[*+-]|\d{1,9}[.)])/,um=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,cm=Gt(um).replace(/bull/g,hh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),_v=Gt(um).replace(/bull/g,hh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),fh=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Cv=/^[^\n]+/,mh=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Tv=Gt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",mh).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),jv=Gt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,hh).getRegex(),Hd="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",gh=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Nv=Gt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",gh).replace("tag",Hd).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),dm=Gt(fh).replace("hr",pc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hd).getRegex(),Ev=Gt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",dm).getRegex(),yh={blockquote:Ev,code:wv,def:Tv,fences:kv,heading:Sv,hr:pc,html:Nv,lheading:cm,list:jv,newline:bv,paragraph:dm,table:ic,text:Cv},tf=Gt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",pc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hd).getRegex(),Lv={...yh,lheading:_v,table:tf,paragraph:Gt(fh).replace("hr",pc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",tf).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hd).getRegex()},Pv={...yh,html:Gt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",gh).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ic,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Gt(fh).replace("hr",pc).replace("heading",` *#{1,6} *[^
]`).replace("lheading",cm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Av=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Rv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,pm=/^( {2,}|\\)\n(?!\s*$)/,Iv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Bd=/[\p{P}\p{S}]/u,vh=/[\s\p{P}\p{S}]/u,hm=/[^\s\p{P}\p{S}]/u,Ov=Gt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,vh).getRegex(),fm=/(?!~)[\p{P}\p{S}]/u,Mv=/(?!~)[\s\p{P}\p{S}]/u,Dv=/(?:[^\s\p{P}\p{S}]|~)/u,zv=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,mm=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Fv=Gt(mm,"u").replace(/punct/g,Bd).getRegex(),Wv=Gt(mm,"u").replace(/punct/g,fm).getRegex(),gm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Hv=Gt(gm,"gu").replace(/notPunctSpace/g,hm).replace(/punctSpace/g,vh).replace(/punct/g,Bd).getRegex(),Bv=Gt(gm,"gu").replace(/notPunctSpace/g,Dv).replace(/punctSpace/g,Mv).replace(/punct/g,fm).getRegex(),Uv=Gt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,hm).replace(/punctSpace/g,vh).replace(/punct/g,Bd).getRegex(),qv=Gt(/\\(punct)/,"gu").replace(/punct/g,Bd).getRegex(),Kv=Gt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),$v=Gt(gh).replace("(?:-->|$)","-->").getRegex(),Gv=Gt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",$v).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),jd=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Yv=Gt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",jd).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ym=Gt(/^!?\[(label)\]\[(ref)\]/).replace("label",jd).replace("ref",mh).getRegex(),vm=Gt(/^!?\[(ref)\](?:\[\])?/).replace("ref",mh).getRegex(),Vv=Gt("reflink|nolink(?!\\()","g").replace("reflink",ym).replace("nolink",vm).getRegex(),xh={_backpedal:ic,anyPunctuation:qv,autolink:Kv,blockSkip:zv,br:pm,code:Rv,del:ic,emStrongLDelim:Fv,emStrongRDelimAst:Hv,emStrongRDelimUnd:Uv,escape:Av,link:Yv,nolink:vm,punctuation:Ov,reflink:ym,reflinkSearch:Vv,tag:Gv,text:Iv,url:ic},Jv={...xh,link:Gt(/^!?\[(label)\]\((.*?)\)/).replace("label",jd).getRegex(),reflink:Gt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",jd).getRegex()},Yp={...xh,emStrongRDelimAst:Bv,emStrongLDelim:Wv,url:Gt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Xv={...Yp,br:Gt(pm).replace("{2,}","*").getRegex(),text:Gt(Yp.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},fd={normal:yh,gfm:Lv,pedantic:Pv},Vu={normal:xh,gfm:Yp,breaks:Xv,pedantic:Jv},Qv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},nf=l=>Qv[l];function Ls(l,c){if(c){if(Hr.escapeTest.test(l))return l.replace(Hr.escapeReplace,nf)}else if(Hr.escapeTestNoEncode.test(l))return l.replace(Hr.escapeReplaceNoEncode,nf);return l}function rf(l){try{l=encodeURI(l).replace(Hr.percentDecode,"%")}catch{return null}return l}function sf(l,c){var b;const p=l.replace(Hr.findPipe,(S,C,k)=>{let j=!1,L=C;for(;--L>=0&&k[L]==="\\";)j=!j;return j?"|":" |"}),g=p.split(Hr.splitPipe);let y=0;if(g[0].trim()||g.shift(),g.length>0&&!((b=g.at(-1))!=null&&b.trim())&&g.pop(),c)if(g.length>c)g.splice(c);else for(;g.length<c;)g.push("");for(;y<g.length;y++)g[y]=g[y].trim().replace(Hr.slashPipe,"|");return g}function Ju(l,c,p){const g=l.length;if(g===0)return"";let y=0;for(;y<g&&l.charAt(g-y-1)===c;)y++;return l.slice(0,g-y)}function Zv(l,c){if(l.indexOf(c[1])===-1)return-1;let p=0;for(let g=0;g<l.length;g++)if(l[g]==="\\")g++;else if(l[g]===c[0])p++;else if(l[g]===c[1]&&(p--,p<0))return g;return p>0?-2:-1}function af(l,c,p,g,y){const b=c.href,S=c.title||null,C=l[1].replace(y.other.outputLinkReplace,"$1");g.state.inLink=!0;const k={type:l[0].charAt(0)==="!"?"image":"link",raw:p,href:b,title:S,text:C,tokens:g.inlineTokens(C)};return g.state.inLink=!1,k}function ex(l,c,p){const g=l.match(p.other.indentCodeCompensation);if(g===null)return c;const y=g[1];return c.split(`
`).map(b=>{const S=b.match(p.other.beginningSpace);if(S===null)return b;const[C]=S;return C.length>=y.length?b.slice(y.length):b}).join(`
`)}var Nd=class{constructor(l){on(this,"options");on(this,"rules");on(this,"lexer");this.options=l||tl}space(l){const c=this.rules.block.newline.exec(l);if(c&&c[0].length>0)return{type:"space",raw:c[0]}}code(l){const c=this.rules.block.code.exec(l);if(c){const p=c[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:c[0],codeBlockStyle:"indented",text:this.options.pedantic?p:Ju(p,`
`)}}}fences(l){const c=this.rules.block.fences.exec(l);if(c){const p=c[0],g=ex(p,c[3]||"",this.rules);return{type:"code",raw:p,lang:c[2]?c[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):c[2],text:g}}}heading(l){const c=this.rules.block.heading.exec(l);if(c){let p=c[2].trim();if(this.rules.other.endingHash.test(p)){const g=Ju(p,"#");(this.options.pedantic||!g||this.rules.other.endingSpaceChar.test(g))&&(p=g.trim())}return{type:"heading",raw:c[0],depth:c[1].length,text:p,tokens:this.lexer.inline(p)}}}hr(l){const c=this.rules.block.hr.exec(l);if(c)return{type:"hr",raw:Ju(c[0],`
`)}}blockquote(l){const c=this.rules.block.blockquote.exec(l);if(c){let p=Ju(c[0],`
`).split(`
`),g="",y="";const b=[];for(;p.length>0;){let S=!1;const C=[];let k;for(k=0;k<p.length;k++)if(this.rules.other.blockquoteStart.test(p[k]))C.push(p[k]),S=!0;else if(!S)C.push(p[k]);else break;p=p.slice(k);const j=C.join(`
`),L=j.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");g=g?`${g}
${j}`:j,y=y?`${y}
${L}`:L;const H=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(L,b,!0),this.lexer.state.top=H,p.length===0)break;const R=b.at(-1);if((R==null?void 0:R.type)==="code")break;if((R==null?void 0:R.type)==="blockquote"){const J=R,D=J.raw+`
`+p.join(`
`),Y=this.blockquote(D);b[b.length-1]=Y,g=g.substring(0,g.length-J.raw.length)+Y.raw,y=y.substring(0,y.length-J.text.length)+Y.text;break}else if((R==null?void 0:R.type)==="list"){const J=R,D=J.raw+`
`+p.join(`
`),Y=this.list(D);b[b.length-1]=Y,g=g.substring(0,g.length-R.raw.length)+Y.raw,y=y.substring(0,y.length-J.raw.length)+Y.raw,p=D.substring(b.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:g,tokens:b,text:y}}}list(l){let c=this.rules.block.list.exec(l);if(c){let p=c[1].trim();const g=p.length>1,y={type:"list",raw:"",ordered:g,start:g?+p.slice(0,-1):"",loose:!1,items:[]};p=g?`\\d{1,9}\\${p.slice(-1)}`:`\\${p}`,this.options.pedantic&&(p=g?p:"[*+-]");const b=this.rules.other.listItemRegex(p);let S=!1;for(;l;){let k=!1,j="",L="";if(!(c=b.exec(l))||this.rules.block.hr.test(l))break;j=c[0],l=l.substring(j.length);let H=c[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,M=>" ".repeat(3*M.length)),R=l.split(`
`,1)[0],J=!H.trim(),D=0;if(this.options.pedantic?(D=2,L=H.trimStart()):J?D=c[1].length+1:(D=c[2].search(this.rules.other.nonSpaceChar),D=D>4?1:D,L=H.slice(D),D+=c[1].length),J&&this.rules.other.blankLine.test(R)&&(j+=R+`
`,l=l.substring(R.length+1),k=!0),!k){const M=this.rules.other.nextBulletRegex(D),F=this.rules.other.hrRegex(D),B=this.rules.other.fencesBeginRegex(D),W=this.rules.other.headingBeginRegex(D),G=this.rules.other.htmlBeginRegex(D);for(;l;){const ce=l.split(`
`,1)[0];let le;if(R=ce,this.options.pedantic?(R=R.replace(this.rules.other.listReplaceNesting,"  "),le=R):le=R.replace(this.rules.other.tabCharGlobal,"    "),B.test(R)||W.test(R)||G.test(R)||M.test(R)||F.test(R))break;if(le.search(this.rules.other.nonSpaceChar)>=D||!R.trim())L+=`
`+le.slice(D);else{if(J||H.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||B.test(H)||W.test(H)||F.test(H))break;L+=`
`+R}!J&&!R.trim()&&(J=!0),j+=ce+`
`,l=l.substring(ce.length+1),H=le.slice(D)}}y.loose||(S?y.loose=!0:this.rules.other.doubleBlankLine.test(j)&&(S=!0));let Y=null,X;this.options.gfm&&(Y=this.rules.other.listIsTask.exec(L),Y&&(X=Y[0]!=="[ ] ",L=L.replace(this.rules.other.listReplaceTask,""))),y.items.push({type:"list_item",raw:j,task:!!Y,checked:X,loose:!1,text:L,tokens:[]}),y.raw+=j}const C=y.items.at(-1);if(C)C.raw=C.raw.trimEnd(),C.text=C.text.trimEnd();else return;y.raw=y.raw.trimEnd();for(let k=0;k<y.items.length;k++)if(this.lexer.state.top=!1,y.items[k].tokens=this.lexer.blockTokens(y.items[k].text,[]),!y.loose){const j=y.items[k].tokens.filter(H=>H.type==="space"),L=j.length>0&&j.some(H=>this.rules.other.anyLine.test(H.raw));y.loose=L}if(y.loose)for(let k=0;k<y.items.length;k++)y.items[k].loose=!0;return y}}html(l){const c=this.rules.block.html.exec(l);if(c)return{type:"html",block:!0,raw:c[0],pre:c[1]==="pre"||c[1]==="script"||c[1]==="style",text:c[0]}}def(l){const c=this.rules.block.def.exec(l);if(c){const p=c[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),g=c[2]?c[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",y=c[3]?c[3].substring(1,c[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):c[3];return{type:"def",tag:p,raw:c[0],href:g,title:y}}}table(l){var S;const c=this.rules.block.table.exec(l);if(!c||!this.rules.other.tableDelimiter.test(c[2]))return;const p=sf(c[1]),g=c[2].replace(this.rules.other.tableAlignChars,"").split("|"),y=(S=c[3])!=null&&S.trim()?c[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],b={type:"table",raw:c[0],header:[],align:[],rows:[]};if(p.length===g.length){for(const C of g)this.rules.other.tableAlignRight.test(C)?b.align.push("right"):this.rules.other.tableAlignCenter.test(C)?b.align.push("center"):this.rules.other.tableAlignLeft.test(C)?b.align.push("left"):b.align.push(null);for(let C=0;C<p.length;C++)b.header.push({text:p[C],tokens:this.lexer.inline(p[C]),header:!0,align:b.align[C]});for(const C of y)b.rows.push(sf(C,b.header.length).map((k,j)=>({text:k,tokens:this.lexer.inline(k),header:!1,align:b.align[j]})));return b}}lheading(l){const c=this.rules.block.lheading.exec(l);if(c)return{type:"heading",raw:c[0],depth:c[2].charAt(0)==="="?1:2,text:c[1],tokens:this.lexer.inline(c[1])}}paragraph(l){const c=this.rules.block.paragraph.exec(l);if(c){const p=c[1].charAt(c[1].length-1)===`
`?c[1].slice(0,-1):c[1];return{type:"paragraph",raw:c[0],text:p,tokens:this.lexer.inline(p)}}}text(l){const c=this.rules.block.text.exec(l);if(c)return{type:"text",raw:c[0],text:c[0],tokens:this.lexer.inline(c[0])}}escape(l){const c=this.rules.inline.escape.exec(l);if(c)return{type:"escape",raw:c[0],text:c[1]}}tag(l){const c=this.rules.inline.tag.exec(l);if(c)return!this.lexer.state.inLink&&this.rules.other.startATag.test(c[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(c[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(c[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(c[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:c[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:c[0]}}link(l){const c=this.rules.inline.link.exec(l);if(c){const p=c[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(p)){if(!this.rules.other.endAngleBracket.test(p))return;const b=Ju(p.slice(0,-1),"\\");if((p.length-b.length)%2===0)return}else{const b=Zv(c[2],"()");if(b===-2)return;if(b>-1){const C=(c[0].indexOf("!")===0?5:4)+c[1].length+b;c[2]=c[2].substring(0,b),c[0]=c[0].substring(0,C).trim(),c[3]=""}}let g=c[2],y="";if(this.options.pedantic){const b=this.rules.other.pedanticHrefTitle.exec(g);b&&(g=b[1],y=b[3])}else y=c[3]?c[3].slice(1,-1):"";return g=g.trim(),this.rules.other.startAngleBracket.test(g)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(p)?g=g.slice(1):g=g.slice(1,-1)),af(c,{href:g&&g.replace(this.rules.inline.anyPunctuation,"$1"),title:y&&y.replace(this.rules.inline.anyPunctuation,"$1")},c[0],this.lexer,this.rules)}}reflink(l,c){let p;if((p=this.rules.inline.reflink.exec(l))||(p=this.rules.inline.nolink.exec(l))){const g=(p[2]||p[1]).replace(this.rules.other.multipleSpaceGlobal," "),y=c[g.toLowerCase()];if(!y){const b=p[0].charAt(0);return{type:"text",raw:b,text:b}}return af(p,y,p[0],this.lexer,this.rules)}}emStrong(l,c,p=""){let g=this.rules.inline.emStrongLDelim.exec(l);if(!g||g[3]&&p.match(this.rules.other.unicodeAlphaNumeric))return;if(!(g[1]||g[2]||"")||!p||this.rules.inline.punctuation.exec(p)){const b=[...g[0]].length-1;let S,C,k=b,j=0;const L=g[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(L.lastIndex=0,c=c.slice(-1*l.length+b);(g=L.exec(c))!=null;){if(S=g[1]||g[2]||g[3]||g[4]||g[5]||g[6],!S)continue;if(C=[...S].length,g[3]||g[4]){k+=C;continue}else if((g[5]||g[6])&&b%3&&!((b+C)%3)){j+=C;continue}if(k-=C,k>0)continue;C=Math.min(C,C+k+j);const H=[...g[0]][0].length,R=l.slice(0,b+g.index+H+C);if(Math.min(b,C)%2){const D=R.slice(1,-1);return{type:"em",raw:R,text:D,tokens:this.lexer.inlineTokens(D)}}const J=R.slice(2,-2);return{type:"strong",raw:R,text:J,tokens:this.lexer.inlineTokens(J)}}}}codespan(l){const c=this.rules.inline.code.exec(l);if(c){let p=c[2].replace(this.rules.other.newLineCharGlobal," ");const g=this.rules.other.nonSpaceChar.test(p),y=this.rules.other.startingSpaceChar.test(p)&&this.rules.other.endingSpaceChar.test(p);return g&&y&&(p=p.substring(1,p.length-1)),{type:"codespan",raw:c[0],text:p}}}br(l){const c=this.rules.inline.br.exec(l);if(c)return{type:"br",raw:c[0]}}del(l){const c=this.rules.inline.del.exec(l);if(c)return{type:"del",raw:c[0],text:c[2],tokens:this.lexer.inlineTokens(c[2])}}autolink(l){const c=this.rules.inline.autolink.exec(l);if(c){let p,g;return c[2]==="@"?(p=c[1],g="mailto:"+p):(p=c[1],g=p),{type:"link",raw:c[0],text:p,href:g,tokens:[{type:"text",raw:p,text:p}]}}}url(l){var p;let c;if(c=this.rules.inline.url.exec(l)){let g,y;if(c[2]==="@")g=c[0],y="mailto:"+g;else{let b;do b=c[0],c[0]=((p=this.rules.inline._backpedal.exec(c[0]))==null?void 0:p[0])??"";while(b!==c[0]);g=c[0],c[1]==="www."?y="http://"+c[0]:y=c[0]}return{type:"link",raw:c[0],text:g,href:y,tokens:[{type:"text",raw:g,text:g}]}}}inlineText(l){const c=this.rules.inline.text.exec(l);if(c){const p=this.lexer.state.inRawBlock;return{type:"text",raw:c[0],text:c[0],escaped:p}}}},fa=class Vp{constructor(c){on(this,"tokens");on(this,"options");on(this,"state");on(this,"tokenizer");on(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=c||tl,this.options.tokenizer=this.options.tokenizer||new Nd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const p={other:Hr,block:fd.normal,inline:Vu.normal};this.options.pedantic?(p.block=fd.pedantic,p.inline=Vu.pedantic):this.options.gfm&&(p.block=fd.gfm,this.options.breaks?p.inline=Vu.breaks:p.inline=Vu.gfm),this.tokenizer.rules=p}static get rules(){return{block:fd,inline:Vu}}static lex(c,p){return new Vp(p).lex(c)}static lexInline(c,p){return new Vp(p).inlineTokens(c)}lex(c){c=c.replace(Hr.carriageReturn,`
`),this.blockTokens(c,this.tokens);for(let p=0;p<this.inlineQueue.length;p++){const g=this.inlineQueue[p];this.inlineTokens(g.src,g.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(c,p=[],g=!1){var y,b,S;for(this.options.pedantic&&(c=c.replace(Hr.tabCharGlobal,"    ").replace(Hr.spaceLine,""));c;){let C;if((b=(y=this.options.extensions)==null?void 0:y.block)!=null&&b.some(j=>(C=j.call({lexer:this},c,p))?(c=c.substring(C.raw.length),p.push(C),!0):!1))continue;if(C=this.tokenizer.space(c)){c=c.substring(C.raw.length);const j=p.at(-1);C.raw.length===1&&j!==void 0?j.raw+=`
`:p.push(C);continue}if(C=this.tokenizer.code(c)){c=c.substring(C.raw.length);const j=p.at(-1);(j==null?void 0:j.type)==="paragraph"||(j==null?void 0:j.type)==="text"?(j.raw+=`
`+C.raw,j.text+=`
`+C.text,this.inlineQueue.at(-1).src=j.text):p.push(C);continue}if(C=this.tokenizer.fences(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.heading(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.hr(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.blockquote(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.list(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.html(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.def(c)){c=c.substring(C.raw.length);const j=p.at(-1);(j==null?void 0:j.type)==="paragraph"||(j==null?void 0:j.type)==="text"?(j.raw+=`
`+C.raw,j.text+=`
`+C.raw,this.inlineQueue.at(-1).src=j.text):this.tokens.links[C.tag]||(this.tokens.links[C.tag]={href:C.href,title:C.title});continue}if(C=this.tokenizer.table(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.lheading(c)){c=c.substring(C.raw.length),p.push(C);continue}let k=c;if((S=this.options.extensions)!=null&&S.startBlock){let j=1/0;const L=c.slice(1);let H;this.options.extensions.startBlock.forEach(R=>{H=R.call({lexer:this},L),typeof H=="number"&&H>=0&&(j=Math.min(j,H))}),j<1/0&&j>=0&&(k=c.substring(0,j+1))}if(this.state.top&&(C=this.tokenizer.paragraph(k))){const j=p.at(-1);g&&(j==null?void 0:j.type)==="paragraph"?(j.raw+=`
`+C.raw,j.text+=`
`+C.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=j.text):p.push(C),g=k.length!==c.length,c=c.substring(C.raw.length);continue}if(C=this.tokenizer.text(c)){c=c.substring(C.raw.length);const j=p.at(-1);(j==null?void 0:j.type)==="text"?(j.raw+=`
`+C.raw,j.text+=`
`+C.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=j.text):p.push(C);continue}if(c){const j="Infinite loop on byte: "+c.charCodeAt(0);if(this.options.silent){console.error(j);break}else throw new Error(j)}}return this.state.top=!0,p}inline(c,p=[]){return this.inlineQueue.push({src:c,tokens:p}),p}inlineTokens(c,p=[]){var C,k,j;let g=c,y=null;if(this.tokens.links){const L=Object.keys(this.tokens.links);if(L.length>0)for(;(y=this.tokenizer.rules.inline.reflinkSearch.exec(g))!=null;)L.includes(y[0].slice(y[0].lastIndexOf("[")+1,-1))&&(g=g.slice(0,y.index)+"["+"a".repeat(y[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(y=this.tokenizer.rules.inline.anyPunctuation.exec(g))!=null;)g=g.slice(0,y.index)+"++"+g.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(y=this.tokenizer.rules.inline.blockSkip.exec(g))!=null;)g=g.slice(0,y.index)+"["+"a".repeat(y[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let b=!1,S="";for(;c;){b||(S=""),b=!1;let L;if((k=(C=this.options.extensions)==null?void 0:C.inline)!=null&&k.some(R=>(L=R.call({lexer:this},c,p))?(c=c.substring(L.raw.length),p.push(L),!0):!1))continue;if(L=this.tokenizer.escape(c)){c=c.substring(L.raw.length),p.push(L);continue}if(L=this.tokenizer.tag(c)){c=c.substring(L.raw.length),p.push(L);continue}if(L=this.tokenizer.link(c)){c=c.substring(L.raw.length),p.push(L);continue}if(L=this.tokenizer.reflink(c,this.tokens.links)){c=c.substring(L.raw.length);const R=p.at(-1);L.type==="text"&&(R==null?void 0:R.type)==="text"?(R.raw+=L.raw,R.text+=L.text):p.push(L);continue}if(L=this.tokenizer.emStrong(c,g,S)){c=c.substring(L.raw.length),p.push(L);continue}if(L=this.tokenizer.codespan(c)){c=c.substring(L.raw.length),p.push(L);continue}if(L=this.tokenizer.br(c)){c=c.substring(L.raw.length),p.push(L);continue}if(L=this.tokenizer.del(c)){c=c.substring(L.raw.length),p.push(L);continue}if(L=this.tokenizer.autolink(c)){c=c.substring(L.raw.length),p.push(L);continue}if(!this.state.inLink&&(L=this.tokenizer.url(c))){c=c.substring(L.raw.length),p.push(L);continue}let H=c;if((j=this.options.extensions)!=null&&j.startInline){let R=1/0;const J=c.slice(1);let D;this.options.extensions.startInline.forEach(Y=>{D=Y.call({lexer:this},J),typeof D=="number"&&D>=0&&(R=Math.min(R,D))}),R<1/0&&R>=0&&(H=c.substring(0,R+1))}if(L=this.tokenizer.inlineText(H)){c=c.substring(L.raw.length),L.raw.slice(-1)!=="_"&&(S=L.raw.slice(-1)),b=!0;const R=p.at(-1);(R==null?void 0:R.type)==="text"?(R.raw+=L.raw,R.text+=L.text):p.push(L);continue}if(c){const R="Infinite loop on byte: "+c.charCodeAt(0);if(this.options.silent){console.error(R);break}else throw new Error(R)}}return p}},Ed=class{constructor(l){on(this,"options");on(this,"parser");this.options=l||tl}space(l){return""}code({text:l,lang:c,escaped:p}){var b;const g=(b=(c||"").match(Hr.notSpaceStart))==null?void 0:b[0],y=l.replace(Hr.endingNewline,"")+`
`;return g?'<pre><code class="language-'+Ls(g)+'">'+(p?y:Ls(y,!0))+`</code></pre>
`:"<pre><code>"+(p?y:Ls(y,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:c}){return`<h${c}>${this.parser.parseInline(l)}</h${c}>
`}hr(l){return`<hr>
`}list(l){const c=l.ordered,p=l.start;let g="";for(let S=0;S<l.items.length;S++){const C=l.items[S];g+=this.listitem(C)}const y=c?"ol":"ul",b=c&&p!==1?' start="'+p+'"':"";return"<"+y+b+`>
`+g+"</"+y+`>
`}listitem(l){var p;let c="";if(l.task){const g=this.checkbox({checked:!!l.checked});l.loose?((p=l.tokens[0])==null?void 0:p.type)==="paragraph"?(l.tokens[0].text=g+" "+l.tokens[0].text,l.tokens[0].tokens&&l.tokens[0].tokens.length>0&&l.tokens[0].tokens[0].type==="text"&&(l.tokens[0].tokens[0].text=g+" "+Ls(l.tokens[0].tokens[0].text),l.tokens[0].tokens[0].escaped=!0)):l.tokens.unshift({type:"text",raw:g+" ",text:g+" ",escaped:!0}):c+=g+" "}return c+=this.parser.parse(l.tokens,!!l.loose),`<li>${c}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let c="",p="";for(let y=0;y<l.header.length;y++)p+=this.tablecell(l.header[y]);c+=this.tablerow({text:p});let g="";for(let y=0;y<l.rows.length;y++){const b=l.rows[y];p="";for(let S=0;S<b.length;S++)p+=this.tablecell(b[S]);g+=this.tablerow({text:p})}return g&&(g=`<tbody>${g}</tbody>`),`<table>
<thead>
`+c+`</thead>
`+g+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){const c=this.parser.parseInline(l.tokens),p=l.header?"th":"td";return(l.align?`<${p} align="${l.align}">`:`<${p}>`)+c+`</${p}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${Ls(l,!0)}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:c,tokens:p}){const g=this.parser.parseInline(p),y=rf(l);if(y===null)return g;l=y;let b='<a href="'+l+'"';return c&&(b+=' title="'+Ls(c)+'"'),b+=">"+g+"</a>",b}image({href:l,title:c,text:p,tokens:g}){g&&(p=this.parser.parseInline(g,this.parser.textRenderer));const y=rf(l);if(y===null)return Ls(p);l=y;let b=`<img src="${l}" alt="${p}"`;return c&&(b+=` title="${Ls(c)}"`),b+=">",b}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):"escaped"in l&&l.escaped?l.text:Ls(l.text)}},bh=class{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}},ma=class Jp{constructor(c){on(this,"options");on(this,"renderer");on(this,"textRenderer");this.options=c||tl,this.options.renderer=this.options.renderer||new Ed,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new bh}static parse(c,p){return new Jp(p).parse(c)}static parseInline(c,p){return new Jp(p).parseInline(c)}parse(c,p=!0){var y,b;let g="";for(let S=0;S<c.length;S++){const C=c[S];if((b=(y=this.options.extensions)==null?void 0:y.renderers)!=null&&b[C.type]){const j=C,L=this.options.extensions.renderers[j.type].call({parser:this},j);if(L!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(j.type)){g+=L||"";continue}}const k=C;switch(k.type){case"space":{g+=this.renderer.space(k);continue}case"hr":{g+=this.renderer.hr(k);continue}case"heading":{g+=this.renderer.heading(k);continue}case"code":{g+=this.renderer.code(k);continue}case"table":{g+=this.renderer.table(k);continue}case"blockquote":{g+=this.renderer.blockquote(k);continue}case"list":{g+=this.renderer.list(k);continue}case"html":{g+=this.renderer.html(k);continue}case"paragraph":{g+=this.renderer.paragraph(k);continue}case"text":{let j=k,L=this.renderer.text(j);for(;S+1<c.length&&c[S+1].type==="text";)j=c[++S],L+=`
`+this.renderer.text(j);p?g+=this.renderer.paragraph({type:"paragraph",raw:L,text:L,tokens:[{type:"text",raw:L,text:L,escaped:!0}]}):g+=L;continue}default:{const j='Token with "'+k.type+'" type was not found.';if(this.options.silent)return console.error(j),"";throw new Error(j)}}}return g}parseInline(c,p=this.renderer){var y,b;let g="";for(let S=0;S<c.length;S++){const C=c[S];if((b=(y=this.options.extensions)==null?void 0:y.renderers)!=null&&b[C.type]){const j=this.options.extensions.renderers[C.type].call({parser:this},C);if(j!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(C.type)){g+=j||"";continue}}const k=C;switch(k.type){case"escape":{g+=p.text(k);break}case"html":{g+=p.html(k);break}case"link":{g+=p.link(k);break}case"image":{g+=p.image(k);break}case"strong":{g+=p.strong(k);break}case"em":{g+=p.em(k);break}case"codespan":{g+=p.codespan(k);break}case"br":{g+=p.br(k);break}case"del":{g+=p.del(k);break}case"text":{g+=p.text(k);break}default:{const j='Token with "'+k.type+'" type was not found.';if(this.options.silent)return console.error(j),"";throw new Error(j)}}}return g}},Kp,xd=(Kp=class{constructor(l){on(this,"options");on(this,"block");this.options=l||tl}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}provideLexer(){return this.block?fa.lex:fa.lexInline}provideParser(){return this.block?ma.parse:ma.parseInline}},on(Kp,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Kp),tx=class{constructor(...l){on(this,"defaults",ph());on(this,"options",this.setOptions);on(this,"parse",this.parseMarkdown(!0));on(this,"parseInline",this.parseMarkdown(!1));on(this,"Parser",ma);on(this,"Renderer",Ed);on(this,"TextRenderer",bh);on(this,"Lexer",fa);on(this,"Tokenizer",Nd);on(this,"Hooks",xd);this.use(...l)}walkTokens(l,c){var g,y;let p=[];for(const b of l)switch(p=p.concat(c.call(this,b)),b.type){case"table":{const S=b;for(const C of S.header)p=p.concat(this.walkTokens(C.tokens,c));for(const C of S.rows)for(const k of C)p=p.concat(this.walkTokens(k.tokens,c));break}case"list":{const S=b;p=p.concat(this.walkTokens(S.items,c));break}default:{const S=b;(y=(g=this.defaults.extensions)==null?void 0:g.childTokens)!=null&&y[S.type]?this.defaults.extensions.childTokens[S.type].forEach(C=>{const k=S[C].flat(1/0);p=p.concat(this.walkTokens(k,c))}):S.tokens&&(p=p.concat(this.walkTokens(S.tokens,c)))}}return p}use(...l){const c=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(p=>{const g={...p};if(g.async=this.defaults.async||g.async||!1,p.extensions&&(p.extensions.forEach(y=>{if(!y.name)throw new Error("extension name required");if("renderer"in y){const b=c.renderers[y.name];b?c.renderers[y.name]=function(...S){let C=y.renderer.apply(this,S);return C===!1&&(C=b.apply(this,S)),C}:c.renderers[y.name]=y.renderer}if("tokenizer"in y){if(!y.level||y.level!=="block"&&y.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const b=c[y.level];b?b.unshift(y.tokenizer):c[y.level]=[y.tokenizer],y.start&&(y.level==="block"?c.startBlock?c.startBlock.push(y.start):c.startBlock=[y.start]:y.level==="inline"&&(c.startInline?c.startInline.push(y.start):c.startInline=[y.start]))}"childTokens"in y&&y.childTokens&&(c.childTokens[y.name]=y.childTokens)}),g.extensions=c),p.renderer){const y=this.defaults.renderer||new Ed(this.defaults);for(const b in p.renderer){if(!(b in y))throw new Error(`renderer '${b}' does not exist`);if(["options","parser"].includes(b))continue;const S=b,C=p.renderer[S],k=y[S];y[S]=(...j)=>{let L=C.apply(y,j);return L===!1&&(L=k.apply(y,j)),L||""}}g.renderer=y}if(p.tokenizer){const y=this.defaults.tokenizer||new Nd(this.defaults);for(const b in p.tokenizer){if(!(b in y))throw new Error(`tokenizer '${b}' does not exist`);if(["options","rules","lexer"].includes(b))continue;const S=b,C=p.tokenizer[S],k=y[S];y[S]=(...j)=>{let L=C.apply(y,j);return L===!1&&(L=k.apply(y,j)),L}}g.tokenizer=y}if(p.hooks){const y=this.defaults.hooks||new xd;for(const b in p.hooks){if(!(b in y))throw new Error(`hook '${b}' does not exist`);if(["options","block"].includes(b))continue;const S=b,C=p.hooks[S],k=y[S];xd.passThroughHooks.has(b)?y[S]=j=>{if(this.defaults.async)return Promise.resolve(C.call(y,j)).then(H=>k.call(y,H));const L=C.call(y,j);return k.call(y,L)}:y[S]=(...j)=>{let L=C.apply(y,j);return L===!1&&(L=k.apply(y,j)),L}}g.hooks=y}if(p.walkTokens){const y=this.defaults.walkTokens,b=p.walkTokens;g.walkTokens=function(S){let C=[];return C.push(b.call(this,S)),y&&(C=C.concat(y.call(this,S))),C}}this.defaults={...this.defaults,...g}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,c){return fa.lex(l,c??this.defaults)}parser(l,c){return ma.parse(l,c??this.defaults)}parseMarkdown(l){return(p,g)=>{const y={...g},b={...this.defaults,...y},S=this.onError(!!b.silent,!!b.async);if(this.defaults.async===!0&&y.async===!1)return S(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof p>"u"||p===null)return S(new Error("marked(): input parameter is undefined or null"));if(typeof p!="string")return S(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(p)+", string expected"));b.hooks&&(b.hooks.options=b,b.hooks.block=l);const C=b.hooks?b.hooks.provideLexer():l?fa.lex:fa.lexInline,k=b.hooks?b.hooks.provideParser():l?ma.parse:ma.parseInline;if(b.async)return Promise.resolve(b.hooks?b.hooks.preprocess(p):p).then(j=>C(j,b)).then(j=>b.hooks?b.hooks.processAllTokens(j):j).then(j=>b.walkTokens?Promise.all(this.walkTokens(j,b.walkTokens)).then(()=>j):j).then(j=>k(j,b)).then(j=>b.hooks?b.hooks.postprocess(j):j).catch(S);try{b.hooks&&(p=b.hooks.preprocess(p));let j=C(p,b);b.hooks&&(j=b.hooks.processAllTokens(j)),b.walkTokens&&this.walkTokens(j,b.walkTokens);let L=k(j,b);return b.hooks&&(L=b.hooks.postprocess(L)),L}catch(j){return S(j)}}}onError(l,c){return p=>{if(p.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const g="<p>An error occurred:</p><pre>"+Ls(p.message+"",!0)+"</pre>";return c?Promise.resolve(g):g}if(c)return Promise.reject(p);throw p}}},Qo=new tx;function Jt(l,c){return Qo.parse(l,c)}Jt.options=Jt.setOptions=function(l){return Qo.setOptions(l),Jt.defaults=Qo.defaults,lm(Jt.defaults),Jt};Jt.getDefaults=ph;Jt.defaults=tl;Jt.use=function(...l){return Qo.use(...l),Jt.defaults=Qo.defaults,lm(Jt.defaults),Jt};Jt.walkTokens=function(l,c){return Qo.walkTokens(l,c)};Jt.parseInline=Qo.parseInline;Jt.Parser=ma;Jt.parser=ma.parse;Jt.Renderer=Ed;Jt.TextRenderer=bh;Jt.Lexer=fa;Jt.lexer=fa.lex;Jt.Tokenizer=Nd;Jt.Hooks=xd;Jt.parse=Jt;Jt.options;Jt.setOptions;Jt.use;Jt.walkTokens;Jt.parseInline;ma.parse;fa.lex;/*! @license DOMPurify 3.4.18 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.18/LICENSE */function of(l,c){(c==null||c>l.length)&&(c=l.length);for(var p=0,g=Array(c);p<c;p++)g[p]=l[p];return g}function nx(l){if(Array.isArray(l))return l}function rx(l,c){var p=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(p!=null){var g,y,b,S,C=[],k=!0,j=!1;try{if(b=(p=p.call(l)).next,c!==0)for(;!(k=(g=b.call(p)).done)&&(C.push(g.value),C.length!==c);k=!0);}catch(L){j=!0,y=L}finally{try{if(!k&&p.return!=null&&(S=p.return(),Object(S)!==S))return}finally{if(j)throw y}}return C}}function ix(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function sx(l,c){return nx(l)||rx(l,c)||ax(l,c)||ix()}function ax(l,c){if(l){if(typeof l=="string")return of(l,c);var p={}.toString.call(l).slice(8,-1);return p==="Object"&&l.constructor&&(p=l.constructor.name),p==="Map"||p==="Set"?Array.from(l):p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)?of(l,c):void 0}}const xm=Object.entries,ox=Object.keys,lf=Object.setPrototypeOf,lx=Object.isFrozen,bm=Object.getPrototypeOf,wm=Object.getOwnPropertyDescriptor;let dr=Object.freeze,Qn=Object.seal,Za=Object.create,km=typeof Reflect<"u"&&Reflect,Ld=km.apply,Xp=km.construct;dr||(dr=function(c){return c});Qn||(Qn=function(c){return c});Ld||(Ld=function(c,p){for(var g=arguments.length,y=new Array(g>2?g-2:0),b=2;b<g;b++)y[b-2]=arguments[b];return c.apply(p,y)});Xp||(Xp=function(c){for(var p=arguments.length,g=new Array(p>1?p-1:0),y=1;y<p;y++)g[y-1]=arguments[y];return new c(...g)});const ca=jn(Array.prototype.forEach),ux=jn(Array.prototype.lastIndexOf),uf=jn(Array.prototype.pop),Xu=jn(Array.prototype.push),cx=jn(Array.prototype.slice),dx=jn(Array.prototype.splice),$l=Array.isArray,Ip=Sm(Set),Op=jn(Set.prototype.add),Qu=jn(Set.prototype.has),Yo=jn(String.prototype.toLowerCase),Mp=jn(String.prototype.toString),px=jn(String.prototype.match),md=jn(String.prototype.replace),Dp=jn(String.prototype.indexOf),hx=jn(String.prototype.trim),fx=jn(Number.prototype.toString),mx=jn(Boolean.prototype.toString),cf=typeof BigInt>"u"?null:jn(BigInt.prototype.toString),df=typeof Symbol>"u"?null:jn(Symbol.prototype.toString),Ar=jn(Object.prototype.hasOwnProperty),Zu=jn(Object.prototype.toString),gx=RegExp.prototype.test,cr=function(c,p){return c instanceof RegExp&&(c.lastIndex=0),Ld(gx,c,[p])},da=Sm(TypeError);function jn(l){return function(c){for(var p=arguments.length,g=new Array(p>1?p-1:0),y=1;y<p;y++)g[y-1]=arguments[y];return Ld(l,c,g)}}function Sm(l){return function(){for(var c=arguments.length,p=new Array(c),g=0;g<c;g++)p[g]=arguments[g];return Xp(l,p)}}function $t(l,c){let p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Yo;if(lf&&lf(l,null),!$l(c))return l;let g=c.length;for(;g--;){let y=c[g];if(typeof y=="string"){const b=p(y);b!==y&&(lx(c)||(c[g]=b),y=b)}l[y]=!0}return l}function yx(l){for(let c=0;c<l.length;c++)Ar(l,c)||(l[c]=null);return l}function Pd(l){const c=Za(null);for(const g of xm(l)){var p=sx(g,2);const y=p[0],b=p[1];Ar(l,y)&&($l(b)?c[y]=yx(b):b&&typeof b=="object"&&b.constructor===Object?c[y]=Pd(b):c[y]=b)}return c}function tc(l){const c=Za(null),p=ox(l);let g=p.length;for(;g--;)c[p[g]]=l[p[g]];return c}function vx(l){switch(typeof l){case"string":return l;case"number":return fx(l);case"boolean":return mx(l);case"bigint":return cf?cf(l):"0";case"symbol":return df?df(l):"Symbol()";case"undefined":return Zu(l);case"function":case"object":{if(l===null)return Zu(l);const c=l,p=Oi(c,"toString");if(typeof p=="function"){const g=p(c);return typeof g=="string"?g:Zu(g)}return Zu(l)}default:return Zu(l)}}function Oi(l,c){for(;l!==null;){const g=wm(l,c);if(g){if(g.get)return jn(g.get);if(typeof g.value=="function")return jn(g.value)}l=bm(l)}function p(){return null}return p}function xx(l,c){for(;l!==null;){const p=wm(l,c);if(p)return p.get?jn(p.get):null;l=bm(l)}return null}function bx(l){if(!l)return!1;try{return cr(l,""),!0}catch{return!1}}const pf=dr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),zp=dr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Fp=dr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),wx=dr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Wp=dr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),kx=dr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),hf=dr(["#text"]),ff=dr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Hp=dr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),mf=dr(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),gd=dr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Sx=Qn(/{{[\w\W]*|^[\w\W]*}}/g),_x=Qn(/<%[\w\W]*|^[\w\W]*%>/g),Cx=Qn(/\${[\w\W]*/g),Tx=Qn(/{{|}}|\${|<%|%>|&lt;%|%&gt;/),jx=Qn(/^data-[\-\w.\u00B7-\uFFFF]+$/),Nx=Qn(/^aria-[\-\w]+$/),gf=Qn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ex=Qn(/^(?:\w+script|data):/i),Lx=Qn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Px=Qn(/^html$/i),Ax=Qn(/^[a-z][.\w]*(-[.\w]+)+$/i),Bp=Qn(/<[/\w!]/g),yf=Qn(/<[/\w]/g),Rx=Qn(/<\/no(script|embed|frames)/i),vf=Qn(/\/>/i),Ix=Qn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i),Ox=Qn(/^[\r\n\t ]+/),Kn={element:1,text:3,processingInstruction:7,comment:8,document:9,documentFragment:11},Mx=dr($t({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),Dx=function(){return typeof window>"u"?null:window},zx=function(c,p){if(typeof c!="object"||typeof c.createPolicy!="function")return null;let g=null;const y="data-tt-policy-suffix";p&&p.hasAttribute(y)&&(g=p.getAttribute(y));const b="dompurify"+(g?"#"+g:"");try{return c.createPolicy(b,{createHTML(S){return S},createScriptURL(S){return S}})}catch{return console.warn("TrustedTypes policy "+b+" could not be created."),null}},xf=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Qa=function(c,p,g,y){return Ar(c,p)&&$l(c[p])?$t(y.base?tc(y.base):{},c[p],y.transform):g},Up=function(c,p,g){const y=Ar(c,p)?c[p]:void 0;return y&&typeof y=="object"?Pd(y):g};function _m(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Dx();const c=Te=>_m(Te);if(c.version="3.4.18",c.removed=[],!l||!l.document||l.document.nodeType!==Kn.document||!l.Element)return c.isSupported=!1,c;let p=l.document;const g=p,y=g.currentScript,b=l.HTMLTemplateElement,S=l.Node,C=l.Element,k=l.NodeFilter,j=l.DOMParser,L=l.trustedTypes,H=C.prototype,R=Oi(H,"cloneNode"),J=Oi(H,"remove"),D=Oi(H,"removeAttributeNode"),Y=Oi(H,"nextSibling"),X=Oi(H,"childNodes"),M=Oi(H,"parentNode"),F=Oi(H,"shadowRoot"),B=Oi(H,"attributes"),W=S&&S.prototype?Oi(S.prototype,"nodeType"):null,G=S&&S.prototype?Oi(S.prototype,"nodeName"):null,ce=S&&S.prototype?Oi(S.prototype,"ownerDocument"):null,le=function(O){return W?W(O):O.nodeType},ve=function(O){return G?G(O):O.nodeName},Me=xx(H,"namespaceURI"),ke=function(O){return Me?Me(O):O.namespaceURI};if(typeof b=="function"){const Te=p.createElement("template");Te.content&&Te.content.ownerDocument&&(p=Te.content.ownerDocument)}let ae,Ce="",V,he=!1,E=0;const Z=function(){if(E>0)throw da('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Q=function(O){Z(),E++;try{return ae.createHTML(O)}finally{E--}},A=function(O){return ae&&fi?Q(O):O},N=function(O){Z(),E++;try{return ae.createScriptURL(O)}finally{E--}},K=function(){return he||(V=zx(L,y),he=!0),V},I=p,ee=I.implementation,_e=I.createNodeIterator,Ie=I.createDocumentFragment,qe=I.getElementsByTagName,Oe=g.importNode;let Se=xf();c.isSupported=typeof xm=="function"&&typeof M=="function"&&ee&&ee.createHTMLDocument!==void 0;const Be=Sx,Ke=_x,et=Cx,$e=jx,Ft=Nx,Yt=Ex,Ct=Lx,xt=Ax;let tt=gf,Ue=null;const vt=$t({},[...pf,...zp,...Fp,...Wp,...hf]);let yt=null;const Qe=$t({},[...ff,...Hp,...mf,...gd]);let ut=null,oe=null,je=null;const fe=Object.seal(Za(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let kt=!0,Ye=!0,at=!1,Ze=!0,mt=!1,pt=!0,Xt=!1,nr=!1,Sr=null,Rr=null,Br=!1,Ur=!1,bt=!1,fi=!1,rt=!0,_r=!1;const tn="user-content-";let It=!0,qt=!1,xn=null,mn=!1,Nn=null;const bn=$t({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let ti=null;const In=$t({},["audio","video","img","source","image","track"]);let pr=null;const mi=$t({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),En="http://www.w3.org/1998/Math/MathML",ss="http://www.w3.org/2000/svg",wn="http://www.w3.org/1999/xhtml";let Cr=wn,qr=!1,Ir=null;const Tr=$t({},[En,ss,wn],Mp),gi=dr($t({},["mi","mo","mn","ms","mtext"]));let as=null;const On=dr($t({},["annotation-xml"]));let os=null;const Mi=dr(Za(null)),Or=$t({},["title","style","font","a","script"]);let Gn=null;const yi=["application/xhtml+xml","text/html"],Di="text/html";let Bt=null,Mr=null;const ls=p.createElement("form"),Rt=function(O){return O instanceof RegExp||O instanceof Function},zi=function(){let O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(!O||typeof O!="object")&&(O={}),O=Pd(O),Gn=yi.indexOf(O.PARSER_MEDIA_TYPE)===-1?Di:O.PARSER_MEDIA_TYPE,Bt=Gn==="application/xhtml+xml"?Mp:Yo,Ue=Qa(O,"ALLOWED_TAGS",vt,{transform:Bt}),yt=Qa(O,"ALLOWED_ATTR",Qe,{transform:Bt}),Ir=Qa(O,"ALLOWED_NAMESPACES",Tr,{transform:Mp}),pr=Qa(O,"ADD_URI_SAFE_ATTR",mi,{transform:Bt,base:mi}),ti=Qa(O,"ADD_DATA_URI_TAGS",In,{transform:Bt,base:In}),Nn=Qa(O,"FORBID_CONTENTS",bn,{transform:Bt}),oe=Qa(O,"FORBID_TAGS",Za(null),{transform:Bt}),je=Qa(O,"FORBID_ATTR",Za(null),{transform:Bt}),mn=Ar(O,"USE_PROFILES")?O.USE_PROFILES&&typeof O.USE_PROFILES=="object"?Pd(O.USE_PROFILES):O.USE_PROFILES:!1,kt=O.ALLOW_ARIA_ATTR!==!1,Ye=O.ALLOW_DATA_ATTR!==!1,at=O.ALLOW_UNKNOWN_PROTOCOLS||!1,Ze=O.ALLOW_SELF_CLOSE_IN_ATTR!==!1,mt=O.SAFE_FOR_TEMPLATES||!1,pt=O.SAFE_FOR_XML!==!1,Xt=O.WHOLE_DOCUMENT||!1,Ur=O.RETURN_DOM||!1,bt=O.RETURN_DOM_FRAGMENT||!1,fi=O.RETURN_TRUSTED_TYPE||!1,Br=O.FORCE_BODY||!1,rt=O.SANITIZE_DOM!==!1,_r=O.SANITIZE_NAMED_PROPS||!1,It=O.KEEP_CONTENT!==!1,qt=O.IN_PLACE||!1,tt=bx(O.ALLOWED_URI_REGEXP)?O.ALLOWED_URI_REGEXP:gf,Cr=typeof O.NAMESPACE=="string"?O.NAMESPACE:wn,as=Up(O,"MATHML_TEXT_INTEGRATION_POINTS",gi),os=Up(O,"HTML_INTEGRATION_POINTS",On);const re=Up(O,"CUSTOM_ELEMENT_HANDLING",Mi);if(ut=Za(null),Ar(re,"tagNameCheck")&&Rt(re.tagNameCheck)&&(ut.tagNameCheck=re.tagNameCheck),Ar(re,"attributeNameCheck")&&Rt(re.attributeNameCheck)&&(ut.attributeNameCheck=re.attributeNameCheck),Ar(re,"allowCustomizedBuiltInElements")&&typeof re.allowCustomizedBuiltInElements=="boolean"&&(ut.allowCustomizedBuiltInElements=re.allowCustomizedBuiltInElements),Qn(ut),mt&&(Ye=!1),bt&&(Ur=!0),mn&&((Ar(O,"ALLOWED_TAGS")||Ar(O,"ALLOWED_ATTR"))&&typeof console<"u"&&typeof console.warn=="function"&&console.warn("DOMPurify: USE_PROFILES overrides ALLOWED_TAGS and ALLOWED_ATTR. Do not use these options together."),Ue=$t({},hf),yt=Za(null),mn.html===!0&&($t(Ue,pf),$t(yt,ff)),mn.svg===!0&&($t(Ue,zp),$t(yt,Hp),$t(yt,gd)),mn.svgFilters===!0&&($t(Ue,Fp),$t(yt,Hp),$t(yt,gd)),mn.mathMl===!0&&($t(Ue,Wp),$t(yt,mf),$t(yt,gd))),fe.tagCheck=null,fe.attributeCheck=null,Ar(O,"ADD_TAGS")&&(typeof O.ADD_TAGS=="function"?fe.tagCheck=O.ADD_TAGS:$l(O.ADD_TAGS)&&(Ue===vt&&(Ue=tc(Ue)),$t(Ue,O.ADD_TAGS,Bt))),Ar(O,"ADD_ATTR")&&(typeof O.ADD_ATTR=="function"?fe.attributeCheck=O.ADD_ATTR:$l(O.ADD_ATTR)&&(yt===Qe&&(yt=tc(yt)),$t(yt,O.ADD_ATTR,Bt))),Ar(O,"ADD_FORBID_CONTENTS")&&$l(O.ADD_FORBID_CONTENTS)&&(Nn===bn&&(Nn=tc(Nn)),$t(Nn,O.ADD_FORBID_CONTENTS,Bt)),It&&(Ue["#text"]=!0),Xt&&$t(Ue,["html","head","body"]),Ue.table&&(Ue.tbody=!0,delete oe.tbody),O.TRUSTED_TYPES_POLICY){if(typeof O.TRUSTED_TYPES_POLICY.createHTML!="function")throw da('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof O.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw da('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const xe=ae;ae=O.TRUSTED_TYPES_POLICY;try{Ce=Q("")}catch(Le){throw ae=xe,Le}}else O.TRUSTED_TYPES_POLICY===null?(ae=void 0,Ce=""):(ae===void 0&&(ae=K()),ae&&typeof Ce=="string"&&(Ce=Q("")));Mr=dr(O)},ni=$t({},[...zp,...Fp,...wx]),Vt=$t({},[...Wp,...kx]),Je=function(O,re,xe){return re===wn?O==="svg":re===En?O==="svg"&&(xe==="annotation-xml"||as[xe]):!!ni[O]},ri=function(O,re,xe){return re===wn?O==="math":re===ss?O==="math"&&os[xe]:!!Vt[O]},us=function(O,re,xe){return re===ss&&!os[xe]||re===En&&!as[xe]?!1:!Vt[O]&&(Or[O]||!ni[O])},Yn=function(O){const re=ke(O),xe=Yo(ve(O)),Le=M(O);let nt=Cr,ct="template";return Le&&le(Le)===Kn.element&&(nt=ke(Le),ct=Yo(ve(Le))),Ir[re]?re===ss?Je(xe,nt,ct):re===En?ri(xe,nt,ct):re===wn?us(xe,nt,ct):Gn==="application/xhtml+xml":!1},T=function(O){Xu(c.removed,{element:O});try{M(O).removeChild(O)}catch{if(J(O),!M(O))throw da("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},U=function(O,re,xe){try{D(O,re)}catch{try{O.removeAttribute(xe)}catch{}}},ge=function(O){jt(O);const re=X(O);re&&ca(cx(re),xe=>{try{J(xe)}catch{}}),le(O)===Kn.element&&pe(O,!1)},Ne=function(O,re,xe){if(!xe)try{xe=re.getAttributeNode(O)}catch{xe=null}if(Xu(c.removed,{attribute:xe||null,from:re}),xe)U(re,xe,O);else try{re.removeAttribute(O)}catch{}if(O==="is")if(Ur||bt)try{T(re)}catch{}else try{re.setAttribute(O,"")}catch{}},pe=function(O,re){const xe=B(O);if(xe)for(let Le=xe.length-1;Le>=0;--Le){const nt=xe[Le],ct=nt&&nt.name;typeof ct=="string"&&!(re&&yt[Bt(ct)])&&U(O,nt,ct)}},He=function(O,re){let xe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const Le=[O];for(;Le.length>0;){const nt=Le.pop();if(re(nt)===!1)continue;if(xe&&le(nt)===Kn.element){const Tt=F(nt);xi(Tt)&&Le.push(Tt)}const ct=X(nt);if(ct)for(let Tt=ct.length-1;Tt>=0;--Tt)Le.push(ct[Tt])}},jt=function(O){He(O,re=>{le(re)===Kn.element&&pe(re,!0)})},Qt=function(O){const re=[];return He(O,xe=>{re.push(xe)},!0),re},kn=function(O,re){const xe=Ip();ca(Qt(O),Le=>{le(Le)===Kn.element&&Op(xe,Le)}),ca(re,Le=>{le(Le)===Kn.element&&!Qu(xe,Le)&&pe(Le,!0)})},Kr=function(O,re){let xe=!1;return ca(c.removed,Le=>{Le.element&&(xe=xe||Le.element===O,jt(Le.element))}),kn(O,re),xe},nl=8,gt=function(O,re){const xe=xn;let Le=null;const nt=()=>(Le||(Le=Ip(),ca(re,ct=>{Op(Le,ct)})),Le);for(let ct=0;;ct++){const Tt=Qt(O),cn=[O];let Kt=!1;if(ca(Tt,hr=>{le(hr)===Kn.documentFragment?Xu(cn,hr):!Kt&&!Qu(xe,hr)&&(Kt=Qu(nt(),hr))}),!Kt)return;if(ct>=nl)throw da("the tree kept changing during in-place sanitization; refusing to return it");ca(cn,(hr,Vn)=>{no(hr,Vn>0,O,nt())})}},no=function(O,re,xe,Le){const nt=Wi(O);let ct;for(;ct=nt.nextNode();)!Qu(Le,ct)||Qu(xn,ct)||(re&&ir(Se.uponSanitizeShadowNode,ct,null),zs(ct,xe))},ro=function(O){xn&&Op(xn,O)},Fi=function(O,re){return pt?O==="patchsrc"?!0:O==="for"&&re!=="label"&&re!=="output":!1},rr=function(O){pt&&He(O,re=>{const xe=le(re);if(xe===Kn.processingInstruction||xe===Kn.comment&&cr(yf,re.data)){try{J(re)}catch{}return!1}if(xe===Kn.element){const Le=re,nt=Bt(ve(re));try{Le.hasAttribute&&Le.hasAttribute("patchsrc")&&Le.removeAttribute("patchsrc"),Le.hasAttribute&&Le.hasAttribute("for")&&Fi("for",nt)&&Le.removeAttribute("for")}catch{}}return!0})},io=function(O){let re=null,xe=null;if(Br)O="<remove></remove>"+O;else{const ct=px(O,Ox);xe=ct&&ct[0]}Gn==="application/xhtml+xml"&&Cr===wn&&(O='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+O+"</body></html>");const Le=ae?Q(O):O;if(Cr===wn)try{re=new j().parseFromString(Le,Gn)}catch{}if(!re||!re.documentElement){re=ee.createDocument(Cr,"template",null);try{re.documentElement.innerHTML=qr?Ce:Le}catch{}}const nt=re.body||re.documentElement;return O&&xe&&nt.insertBefore(p.createTextNode(xe),nt.childNodes[0]||null),Cr===wn?qe.call(re,Xt?"html":"body")[0]:Xt?re.documentElement:nt},Wi=function(O){let re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const xe=ce?ce(O):O.ownerDocument;return _e.call(xe||O,O,(re?0:k.SHOW_ELEMENT)|k.SHOW_COMMENT|k.SHOW_TEXT|k.SHOW_PROCESSING_INSTRUCTION|k.SHOW_CDATA_SECTION,null)},Nt=function(O){return O=md(O,Be," "),O=md(O,Ke," "),O=md(O,et," "),O},cs=function(O){var re;Is(O);const xe=(re=O.querySelectorAll)===null||re===void 0?void 0:re.call(O,"template");xe&&ca(xe,Le=>{xi(Le.content)&&cs(Le.content)})},Is=function(O){O.normalize();const re=Wi(O,!0);let xe=re.nextNode();for(;xe;)xe.data=Nt(xe.data),xe=re.nextNode()},vi=function(O){const re=G?G(O):null;return typeof re!="string"||Bt(re)!=="form"?!1:typeof O.nodeName!="string"||typeof O.textContent!="string"||typeof O.removeChild!="function"||O.attributes!==B(O)||typeof O.removeAttribute!="function"||typeof O.removeAttributeNode!="function"||typeof O.getAttributeNode!="function"||typeof O.setAttribute!="function"||typeof O.namespaceURI!="string"||typeof O.insertBefore!="function"||typeof O.hasChildNodes!="function"||O.nodeType!==W(O)||O.childNodes!==X(O)},ya=function(O){if(!W||typeof O!="object"||O===null)return null;try{const re=W(O);return typeof re=="number"?re:null}catch{return null}},xi=function(O){return ya(O)===Kn.documentFragment},Hi=function(O){return ya(O)!==null};function ir(Te,O,re){Te.length!==0&&ca(Te,xe=>{xe.call(c,O,re,Mr)})}const va=function(O,re,xe){return!!(pt&&xe===Kn.element&&O.hasChildNodes()&&!Hi(O.firstElementChild)&&cr(Bp,O.textContent)&&cr(Bp,O.innerHTML)||pt&&Mx[re]&&xe===Kn.element&&ke(O)===wn&&(Hi(O.firstElementChild)||typeof O.textContent=="string"&&cr(Bp,O.textContent))||xe===Kn.processingInstruction||pt&&xe===Kn.comment&&cr(yf,O.data))},Dr=function(O,re){if(O instanceof RegExp)return cr(O,re);if(O instanceof Function){for(var xe=arguments.length,Le=new Array(xe>2?xe-2:0),nt=2;nt<xe;nt++)Le[nt-2]=arguments[nt];return!!O(re,...Le)}return!1},ii=function(O,re,xe){if(!oe[re]&&so(re)&&Dr(ut.tagNameCheck,re))return!1;if(It&&!Nn[re]&&!Nn[Yo(re)]){const Le=M(O),nt=X(O);if(nt&&Le){const ct=nt.length;for(let Tt=ct-1;Tt>=0;--Tt){const cn=O===xe?R(nt[Tt],!0):nt[Tt];Le.insertBefore(cn,Y(O))}}}return T(O),!0},Mn=function(O,re,xe,Le){return O.length===0?re:re===xe||re===Le?tc(re):re},$r=function(O,re){return O===re||M(O)!==null?!1:(qt&&jt(O),!0)},Os=function(O,re){if(ro(O),ir(Se.beforeSanitizeElements,O,null),$r(O,re))return!0;if(vi(O))return T(O),!0;const xe=Bt(ve(O)),Le=le(O);if(Ue=Mn(Se.uponSanitizeElement,Ue,vt,Sr),ir(Se.uponSanitizeElement,O,{tagName:xe,allowedTags:Ue}),$r(O,re))return!0;if(va(O,xe,Le))return T(O),!0;if(oe[xe]||!(fe.tagCheck instanceof Function&&fe.tagCheck(xe))&&!Ue[xe]){const nt=ii(O,xe,re);return nt===!1&&(ir(Se.afterSanitizeElements,O,null),$r(O,re))?!0:nt}if(Le===Kn.element&&!Yn(O)||(xe==="noscript"||xe==="noembed"||xe==="noframes")&&cr(Rx,O.innerHTML))return T(O),!0;if(mt&&Le===Kn.text){const nt=O.textContent,ct=Nt(nt);nt!==ct&&(Xu(c.removed,{element:O.cloneNode()}),O.textContent=ct)}return ir(Se.afterSanitizeElements,O,null),$r(O,re)},jr=function(O,re,xe){if(je[re]||Fi(re,O)||rt&&(re==="id"||re==="name")&&(xe in p||xe in ls))return!1;const Le=yt[re]||fe.attributeCheck instanceof Function&&fe.attributeCheck(re,O);if(Ye&&cr($e,re)||kt&&cr(Ft,re))return!0;if(!Le)return so(O)&&Dr(ut.tagNameCheck,O)&&Dr(ut.attributeNameCheck,re,O)||re==="is"&&ut.allowCustomizedBuiltInElements&&Dr(ut.tagNameCheck,xe);if(pr[re])return!0;const nt=md(xe,Ct,"");return cr(tt,nt)||(re==="src"||re==="xlink:href"||re==="href")&&O!=="script"&&Dp(xe,"data:")===0&&ti[O]||at&&!cr(Yt,nt)?!0:!xe},Ms=$t({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),so=function(O){return!Ms[Yo(O)]&&cr(xt,O)},Ds=function(O,re,xe,Le){if(ae&&typeof L=="object"&&typeof L.getAttributeType=="function"&&!xe)switch(L.getAttributeType(O,re)){case"TrustedHTML":return Q(Le);case"TrustedScriptURL":return N(Le)}return Le},Yl=function(O,re,xe,Le){try{return xe?O.setAttributeNS(xe,re,Le):O.setAttribute(re,Le),vi(O)?(T(O),!1):!0}catch{return Ne(re,O),!1}},ao=function(O,re){return pt&&cr(Ix,re)?!0:Yo(O)==="attributename"&&Dp(re,"href")!==-1},ds=function(O,re){if(ir(Se.beforeSanitizeAttributes,O,null),$r(O,re))return;const xe=O.attributes;if(!xe||vi(O))return;yt=Mn(Se.uponSanitizeAttribute,yt,Qe,Rr);const Le={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:yt,forceKeepAttr:void 0};let nt=xe.length;const ct=Bt(ve(O));for(;nt--;){const Tt=xe[nt],cn=Tt.name,Kt=Tt.namespaceURI,hr=Tt.value,Vn=Bt(cn),fr=hr;let dn=cn==="value"?fr:hx(fr),Nr=!1;if(Le.attrName=Vn,Le.attrValue=dn,Le.keepAttr=!0,Le.forceKeepAttr=void 0,ir(Se.uponSanitizeAttribute,O,Le),dn=Le.attrValue,_r&&(Vn==="id"||Vn==="name")&&Dp(dn,tn)!==0&&(Ne(cn,O,Tt),dn=tn+dn,Nr=!0),ao(cn,dn)){Ne(cn,O,Tt);continue}if(!Le.forceKeepAttr){if(!Le.keepAttr){Ne(cn,O,Tt);continue}if(!Ze&&cr(vf,dn)){Ne(cn,O,Tt);continue}if(mt&&(dn=Nt(dn)),!jr(ct,Vn,dn)){Ne(cn,O,Tt);continue}dn=Ds(ct,Vn,Kt,dn),dn!==fr&&Yl(O,cn,Kt,dn)&&Nr&&uf(c.removed)}}ir(Se.afterSanitizeAttributes,O,null),$r(O,re)},zs=function(O,re){Os(O,re),ds(O,re),xi(O.content)&&oo(O.content)},oo=function(O){let re=null;const xe=Wi(O);for(ir(Se.beforeSanitizeShadowDOM,O,null);re=xe.nextNode();)if(ir(Se.uponSanitizeShadowNode,re,null),zs(re,O),le(re)===Kn.element){const Le=F(re);xi(Le)&&(bi(Le),oo(Le))}mt&&Is(O),ir(Se.afterSanitizeShadowDOM,O,null)},bi=function(O){const re=[{node:O,shadow:null}];for(;re.length>0;){const xe=re.pop();if(xe.shadow){oo(xe.shadow);continue}const Le=xe.node,nt=le(Le)===Kn.element,ct=X(Le);if(ct)for(let Tt=ct.length-1;Tt>=0;--Tt)re.push({node:ct[Tt],shadow:null});if(nt){const Tt=G?G(Le):null;if(typeof Tt=="string"&&Bt(Tt)==="template"){const cn=Le.content;xi(cn)&&re.push({node:cn,shadow:null})}}if(nt){const Tt=F(Le);xi(Tt)&&re.push({node:null,shadow:Tt},{node:Tt,shadow:null})}}};return c.sanitize=function(Te){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},re=null,xe=null,Le=null,nt=null;if(qr=!Te,qr&&(Te="<!-->"),typeof Te!="string"&&!Hi(Te)&&(Te=vx(Te),typeof Te!="string"))throw da("dirty is not a string, aborting");if(!c.isSupported)return Te;nr?(Ue=Sr,yt=Rr):zi(O),c.removed=[];const ct=qt&&typeof Te!="string"&&Hi(Te);let Tt=[];const cn=xn;if(ct){rr(Te);const fr=ve(Te);if(typeof fr=="string"){const dn=Bt(fr);if(!Ue[dn]||oe[dn])throw ge(Te),da("root node is forbidden and cannot be sanitized in-place")}if(vi(Te))throw ge(Te),da("root node is clobbered and cannot be sanitized in-place");Tt=Qt(Te),xn=Ip()}else if(Hi(Te))re=io("<!---->"),xe=re.ownerDocument.importNode(Te,!0),xe.nodeType===Kn.element&&xe.nodeName==="BODY"||xe.nodeName==="HTML"?re=xe:re.appendChild(xe),bi(re);else{if(!Ur&&!mt&&!Xt&&Te.indexOf("<")===-1)return A(Te);if(re=io(Te),!re)return Ur?null:fi?Ce:""}re&&Br&&T(re.firstChild);const Kt=ct?Te:re;try{ct&&bi(Te);const fr=Wi(Kt);for(;Le=fr.nextNode();)zs(Le,Kt);ct&&gt(Te,Tt)}catch(fr){throw ct&&(ge(Te),Kr(Te,Tt)),fr}finally{xn=cn}if(ct){if(Kr(Te,Tt))throw da("a node selected for removal could not be safely returned; refusing to sanitize in place");return mt&&cs(Te),Te}if(Ur){if(mt&&cs(re),bt)for(nt=Ie.call(re.ownerDocument);re.firstChild;)nt.appendChild(re.firstChild);else nt=re;return(yt.shadowroot||yt.shadowrootmode)&&(nt=Oe.call(g,nt,!0)),nt}const hr=()=>Xt?re.outerHTML:re.innerHTML;let Vn=hr();return mt&&cr(Tx,Vn)&&(Is(re),Vn=hr()),Xt&&Ue["!doctype"]&&re.ownerDocument&&re.ownerDocument.doctype&&re.ownerDocument.doctype.name&&cr(Px,re.ownerDocument.doctype.name)&&(Vn="<!DOCTYPE "+re.ownerDocument.doctype.name+`>
`+Vn),A(Vn)},c.setConfig=function(){let Te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};zi(Te),nr=!0,Sr=Ue,Rr=yt},c.clearConfig=function(){Mr=null,nr=!1,Sr=null,Rr=null,ae=V,Ce=""},c.isValidAttribute=function(Te,O,re){Mr||zi({});const xe=Bt(Te),Le=Bt(O);return typeof re=="string"&&(ao(O,re)||!Ze&&cr(vf,re))?!1:jr(xe,Le,re)},c.addHook=function(Te,O){typeof O=="function"&&Ar(Se,Te)&&Xu(Se[Te],O)},c.removeHook=function(Te,O){if(Ar(Se,Te)){if(O!==void 0){const re=ux(Se[Te],O);return re===-1?void 0:dx(Se[Te],re,1)[0]}return uf(Se[Te])}},c.removeHooks=function(Te){Ar(Se,Te)&&(Se[Te]=[])},c.removeAllHooks=function(){Se=xf()},c}var Fx=_m();function Wx(l,c=null){const p=String(l||""),g=p.split(`
`),y=g.findIndex(k=>/^##\s+(?:Practice|Solve)(?:\s*[:—-].*)?\s*$/i.test(k)),b=y===-1?-1:g.findIndex((k,j)=>j>y&&/^##\s+(?:Reflect(?:ion)?|Learn|Stop and think|Optional reading)(?:\b|\s*[:—-])/i.test(k)),S=y>=0?g.slice(y,b<0?g.length:b).join(`
`):`# Solve

${(c==null?void 0:c.challenge)||"Try the lesson task before looking at the guide."}`,C=y>=0?[...g.slice(0,y),...b<0?[]:g.slice(b)].join(`
`).trim():p;return{solve:S,learn:C}}function Hx(l){const c=String(l||"").split(`
`),p=[];let g=null;c.forEach((S,C)=>{const k=S.trim(),j=/^(`{3,}|~{3,})/.exec(k);if(j){const J=j[1];g?g.char===J[0]&&J.length>=g.length&&(g=null):g={char:J[0],length:J.length};return}if(g)return;const L=/^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(S);if(!L)return;const H=L[2],R=/\bStep\s+\d+(?=\s*(?:[:.·–—-]|$))/i.test(H);p.push({index:C,level:L[1].length,numbered:R})});const y=p.filter(S=>S.numbered),b=(y.length?y:p.filter(S=>S.level===2)).map(S=>S.index);return b.length?{intro:c.slice(0,b[0]).join(`
`).trim(),steps:b.map((S,C)=>c.slice(S,b[C+1]??c.length).join(`
`).trim())}:{intro:c.join(`
`),steps:[]}}const Bx=Object.assign({"../content/capstone-discovery.md":Gy,"../content/capstone-feedback.md":Yy,"../content/capstone-interviews.md":Vy,"../content/capstone-prototype.md":Jy,"../content/csharp-conditionals.md":Xy,"../content/csharp-variables.md":Qy,"../content/python-decisions.md":Zy,"../content/python-formatting.md":ev,"../content/python-lists.md":tv,"../content/python-loops.md":nv,"../content/python-strings.md":rv,"../content/python-variables.md":iv,"../content/react-components.md":sv,"../content/react-state.md":av,"../content/tsi-equations.md":ov,"../content/tsi-percents.md":lv,"../content/tsi-ratios.md":uv,"../content/tsi-slope.md":cv,"../content/uil-arrays.md":dv,"../content/uil-loops.md":pv,"../content/uil-methods.md":hv,"../content/uil-strings.md":fv,"../content/unity-colliders.md":mv,"../content/unity-player-controller.md":gv,"../content/unity-score.md":yv,"../content/web-events.md":vv,"../content/web-layout.md":xv}),Ux="# Add a Markdown lesson\n\nSave a new `.md` file inside `src/content/`.\n",qx=l=>Bx[`../content/${l}.md`]||Ux,Zo=l=>Fx.sanitize(Jt.parse(l,{breaks:!1,gfm:!0}));function Kx(l,c=""){if(!(l!=null&&l.isPublished))return"";let p="";const g=Array.isArray(l.cases)?l.cases:[];g.length&&!/##\s+(?:Published )?Examples\b/i.test(c)&&(p+=`

### Published examples
`,g.forEach((b,S)=>{p+=`
**Example `+(S+1)+`**

`,b.call&&(p+="Input: `"+b.call+`\`

`),p+=l.mode==="function"?`Expected return:
`:`Expected output:
`,p+="\n```text\n"+String(b.expected??"")+"\n```\n"}));const y=Array.isArray(l.hints)?l.hints:[];return y.length&&!/<details(?:\s|>)/i.test(c)&&(p+=`

### Need a hint?
`,y.forEach((b,S)=>{p+=`
<details>
<summary>Hint `+(S+1)+`</summary>

`+String(b).replaceAll("<","&lt;")+`

</details>
`})),p}function bf(l,c){if(!c)return l;const p="https://github.com/mswhitby/computer-science-1/blob/main/units/",g=c.startsWith("/playground/data/")?new URL(c,"https://www.mswhitby.com"):new URL(c,p);return String(l).replace(/\]\(([^)]+)\)/g,(y,b)=>{if(/^(?:https?:|mailto:|#|data:)/i.test(b))return y;const[S,...C]=b.split(" ");try{const k=new URL(S,g);return k.origin!==g.origin?y:"]("+k.href+(C.length?" "+C.join(" "):"")+")"}catch{return y}})}const wh={markdown:l=>`designlab:md:${l}`,code:l=>`designlab:code:${l}`};function Ad(l){try{return localStorage.getItem(l)}catch{return null}}function ha(l,c){try{localStorage.setItem(l,c)}catch{}}function $x(l){try{localStorage.removeItem(l)}catch{}}function wf({lessonId:l,task:c,isTsi:p=!1,tsiAnswer:g=null}){var W;const y=(c==null?void 0:c.markdownSource)||qx(l),b=wh.markdown(l),[S,C]=we.useState(y),[k,j]=we.useState(p?"learn":"solve"),[L,H]=we.useState(0),[R,J]=we.useState(!1);we.useEffect(()=>{C(Ad(b)??y),j(p?"learn":"solve"),H(0),J(!1)},[b,y,p]);const D=we.useMemo(()=>{const G=Wx(S,c),ce=G.solve+Kx(c,G.solve);return{solve:bf(ce,(c==null?void 0:c.markdownUrl)||(c==null?void 0:c.markdown)),learn:bf(G.learn,(c==null?void 0:c.markdownUrl)||(c==null?void 0:c.markdown))}},[S,c]),Y=we.useMemo(()=>Hx(D.learn),[D.learn]),X=!p&&k==="learn"&&Y.steps.length>0,M=Math.min(L,Math.max(0,Y.steps.length-1)),F=p?D.learn:k==="solve"?D.solve:X?Y.intro+`

`+Y.steps[M]:D.learn,B=we.useMemo(()=>Zo(F),[F]);return u.jsxs("section",{className:"instructions-pane",children:[u.jsxs("div",{className:"pane-header",children:[p?u.jsx("strong",{className:"tsi-learn-title",children:"Learn"}):u.jsxs("div",{className:"tabs compact",role:"tablist","aria-label":"Lesson views",children:[u.jsx("button",{role:"tab","aria-selected":k==="solve",className:k==="solve"?"active":"",onClick:()=>{j("solve"),H(0)},children:"Solve"}),u.jsx("button",{role:"tab","aria-selected":k==="learn",className:k==="learn"?"active":"",onClick:()=>{j("learn"),H(0)},children:"Learn"})]}),u.jsx("button",{type:"button",className:pa("icon-button",R&&"active"),title:"Edit lesson text","aria-label":"Edit lesson text",onClick:()=>J(!R),children:u.jsx(by,{size:16})})]}),R?u.jsxs("div",{className:"markdown-source",children:[u.jsx("p",{className:"hint",children:"Try editing these instructions. Changes here are just for your preview."}),u.jsx("textarea",{"aria-label":"Markdown source",value:S,onChange:G=>{C(G.target.value),H(0),ha(b,G.target.value)}}),u.jsx("button",{type:"button",className:"btn",onClick:()=>{$x(b),C(y),H(0)},children:"Reset lesson text"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"markdown-preview",role:"tabpanel",children:[u.jsx("div",{dangerouslySetInnerHTML:{__html:B}}),p&&g&&u.jsxs("section",{className:"tsi-worked-solution",role:"status",children:[u.jsx("h3",{children:g.correct?"Why that works":"Review the solution"}),u.jsx("p",{children:(W=dh[l])==null?void 0:W.explanation})]})]}),X&&u.jsxs("nav",{className:"lesson-step-controls","aria-label":"Learning steps",children:[M>0&&u.jsxs("button",{type:"button",className:"step-link previous",onClick:()=>H(G=>Math.max(0,G-1)),children:[u.jsx(Md,{size:16,"aria-hidden":"true"})," Previous"]}),u.jsxs("span",{children:["Step ",M+1," of ",Y.steps.length]}),M<Y.steps.length-1&&u.jsxs("button",{type:"button",className:"step-link next",onClick:()=>H(G=>Math.min(Y.steps.length-1,G+1)),children:["Next ",u.jsx(pi,{size:16,"aria-hidden":"true"})]})]})]})]})}var bd={exports:{}},Gx=bd.exports,kf;function is(){return kf||(kf=1,(function(l,c){(function(p,g){l.exports=g()})(Gx,(function(){var p=navigator.userAgent,g=navigator.platform,y=/gecko\/\d/i.test(p),b=/MSIE \d/.test(p),S=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(p),C=/Edge\/(\d+)/.exec(p),k=b||S||C,j=k&&(b?document.documentMode||6:+(C||S)[1]),L=!C&&/WebKit\//.test(p),H=L&&/Qt\/\d+\.\d+/.test(p),R=!C&&/Chrome\/(\d+)/.exec(p),J=R&&+R[1],D=/Opera\//.test(p),Y=/Apple Computer/.test(navigator.vendor),X=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(p),M=/PhantomJS/.test(p),F=Y&&(/Mobile\/\w+/.test(p)||navigator.maxTouchPoints>2),B=/Android/.test(p),W=F||B||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(p),G=F||/Mac/.test(g),ce=/\bCrOS\b/.test(p),le=/win/i.test(g),ve=D&&p.match(/Version\/(\d*\.\d*)/);ve&&(ve=Number(ve[1])),ve&&ve>=15&&(D=!1,L=!0);var Me=G&&(H||D&&(ve==null||ve<12.11)),ke=y||k&&j>=9;function ae(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var Ce=function(e,n){var s=e.className,i=ae(n).exec(s);if(i){var a=s.slice(i.index+i[0].length);e.className=s.slice(0,i.index)+(a?i[1]+a:"")}};function V(e){for(var n=e.childNodes.length;n>0;--n)e.removeChild(e.firstChild);return e}function he(e,n){return V(e).appendChild(n)}function E(e,n,s,i){var a=document.createElement(e);if(s&&(a.className=s),i&&(a.style.cssText=i),typeof n=="string")a.appendChild(document.createTextNode(n));else if(n)for(var h=0;h<n.length;++h)a.appendChild(n[h]);return a}function Z(e,n,s,i){var a=E(e,n,s,i);return a.setAttribute("role","presentation"),a}var Q;document.createRange?Q=function(e,n,s,i){var a=document.createRange();return a.setEnd(i||e,s),a.setStart(e,n),a}:Q=function(e,n,s){var i=document.body.createTextRange();try{i.moveToElementText(e.parentNode)}catch{return i}return i.collapse(!0),i.moveEnd("character",s),i.moveStart("character",n),i};function A(e,n){if(n.nodeType==3&&(n=n.parentNode),e.contains)return e.contains(n);do if(n.nodeType==11&&(n=n.host),n==e)return!0;while(n=n.parentNode)}function N(e){var n=e.ownerDocument||e,s;try{s=e.activeElement}catch{s=n.body||null}for(;s&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function K(e,n){var s=e.className;ae(n).test(s)||(e.className+=(s?" ":"")+n)}function I(e,n){for(var s=e.split(" "),i=0;i<s.length;i++)s[i]&&!ae(s[i]).test(n)&&(n+=" "+s[i]);return n}var ee=function(e){e.select()};F?ee=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:k&&(ee=function(e){try{e.select()}catch{}});function _e(e){return e.display.wrapper.ownerDocument}function Ie(e){return qe(e.display.wrapper)}function qe(e){return e.getRootNode?e.getRootNode():e.ownerDocument}function Oe(e){return _e(e).defaultView}function Se(e){var n=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,n)}}function Be(e,n,s){n||(n={});for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s!==!1||!Object.prototype.hasOwnProperty.call(n,i))&&(n[i]=e[i]);return n}function Ke(e,n,s,i,a){n==null&&(n=e.search(/[^\s\u00a0]/),n==-1&&(n=e.length));for(var h=i||0,m=a||0;;){var x=e.indexOf("	",h);if(x<0||x>=n)return m+(n-h);m+=x-h,m+=s-m%s,h=x+1}}var et=function(){this.id=null,this.f=null,this.time=0,this.handler=Se(this.onTimeout,this)};et.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},et.prototype.set=function(e,n){this.f=n;var s=+new Date+e;(!this.id||s<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=s)};function $e(e,n){for(var s=0;s<e.length;++s)if(e[s]==n)return s;return-1}var Ft=50,Yt={toString:function(){return"CodeMirror.Pass"}},Ct={scroll:!1},xt={origin:"*mouse"},tt={origin:"+move"};function Ue(e,n,s){for(var i=0,a=0;;){var h=e.indexOf("	",i);h==-1&&(h=e.length);var m=h-i;if(h==e.length||a+m>=n)return i+Math.min(m,n-a);if(a+=h-i,a+=s-a%s,i=h+1,a>=n)return i}}var vt=[""];function yt(e){for(;vt.length<=e;)vt.push(Qe(vt)+" ");return vt[e]}function Qe(e){return e[e.length-1]}function ut(e,n){for(var s=[],i=0;i<e.length;i++)s[i]=n(e[i],i);return s}function oe(e,n,s){for(var i=0,a=s(n);i<e.length&&s(e[i])<=a;)i++;e.splice(i,0,n)}function je(){}function fe(e,n){var s;return Object.create?s=Object.create(e):(je.prototype=e,s=new je),n&&Be(n,s),s}var kt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function Ye(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||kt.test(e))}function at(e,n){return n?n.source.indexOf("\\w")>-1&&Ye(e)?!0:n.test(e):Ye(e)}function Ze(e){for(var n in e)if(e.hasOwnProperty(n)&&e[n])return!1;return!0}var mt=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function pt(e){return e.charCodeAt(0)>=768&&mt.test(e)}function Xt(e,n,s){for(;(s<0?n>0:n<e.length)&&pt(e.charAt(n));)n+=s;return n}function nr(e,n,s){for(var i=n>s?-1:1;;){if(n==s)return n;var a=(n+s)/2,h=i<0?Math.ceil(a):Math.floor(a);if(h==n)return e(h)?n:s;e(h)?s=h:n=h+i}}function Sr(e,n,s,i){if(!e)return i(n,s,"ltr",0);for(var a=!1,h=0;h<e.length;++h){var m=e[h];(m.from<s&&m.to>n||n==s&&m.to==n)&&(i(Math.max(m.from,n),Math.min(m.to,s),m.level==1?"rtl":"ltr",h),a=!0)}a||i(n,s,"ltr")}var Rr=null;function Br(e,n,s){var i;Rr=null;for(var a=0;a<e.length;++a){var h=e[a];if(h.from<n&&h.to>n)return a;h.to==n&&(h.from!=h.to&&s=="before"?i=a:Rr=a),h.from==n&&(h.from!=h.to&&s!="before"?i=a:Rr=a)}return i??Rr}var Ur=(function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function s(_){return _<=247?e.charAt(_):1424<=_&&_<=1524?"R":1536<=_&&_<=1785?n.charAt(_-1536):1774<=_&&_<=2220?"r":8192<=_&&_<=8203?"w":_==8204?"b":"L"}var i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,a=/[stwN]/,h=/[LRr]/,m=/[Lb1n]/,x=/[1n]/;function w(_,z,q){this.level=_,this.from=z,this.to=q}return function(_,z){var q=z=="ltr"?"L":"R";if(_.length==0||z=="ltr"&&!i.test(_))return!1;for(var se=_.length,ne=[],ye=0;ye<se;++ye)ne.push(s(_.charCodeAt(ye)));for(var be=0,Ae=q;be<se;++be){var Ee=ne[be];Ee=="m"?ne[be]=Ae:Ae=Ee}for(var Fe=0,ze=q;Fe<se;++Fe){var Ge=ne[Fe];Ge=="1"&&ze=="r"?ne[Fe]="n":h.test(Ge)&&(ze=Ge,Ge=="r"&&(ne[Fe]="R"))}for(var ot=1,Ve=ne[0];ot<se-1;++ot){var St=ne[ot];St=="+"&&Ve=="1"&&ne[ot+1]=="1"?ne[ot]="1":St==","&&Ve==ne[ot+1]&&(Ve=="1"||Ve=="n")&&(ne[ot]=Ve),Ve=St}for(var Et=0;Et<se;++Et){var Bn=ne[Et];if(Bn==",")ne[Et]="N";else if(Bn=="%"){var sn=void 0;for(sn=Et+1;sn<se&&ne[sn]=="%";++sn);for(var xr=Et&&ne[Et-1]=="!"||sn<se&&ne[sn]=="1"?"1":"N",lr=Et;lr<sn;++lr)ne[lr]=xr;Et=sn-1}}for(var yn=0,br=q;yn<se;++yn){var Tn=ne[yn];br=="L"&&Tn=="1"?ne[yn]="L":h.test(Tn)&&(br=Tn)}for(var vn=0;vn<se;++vn)if(a.test(ne[vn])){var Dt=void 0;for(Dt=vn+1;Dt<se&&a.test(ne[Dt]);++Dt);for(var dt=(vn?ne[vn-1]:q)=="L",zt=(Dt<se?ne[Dt]:q)=="L",an=dt==zt?dt?"L":"R":q,un=vn;un<Dt;++un)ne[un]=an;vn=Dt-1}for(var Ut=[],wr,Lt=0;Lt<se;)if(m.test(ne[Lt])){var la=Lt;for(++Lt;Lt<se&&m.test(ne[Lt]);++Lt);Ut.push(new w(0,la,Lt))}else{var kr=Lt,Ri=Ut.length,es=z=="rtl"?1:0;for(++Lt;Lt<se&&ne[Lt]!="L";++Lt);for(var An=kr;An<Lt;)if(x.test(ne[An])){kr<An&&(Ut.splice(Ri,0,new w(1,kr,An)),Ri+=es);var Un=An;for(++An;An<Lt&&x.test(ne[An]);++An);Ut.splice(Ri,0,new w(2,Un,An)),Ri+=es,kr=An}else++An;kr<Lt&&Ut.splice(Ri,0,new w(1,kr,Lt))}return z=="ltr"&&(Ut[0].level==1&&(wr=_.match(/^\s+/))&&(Ut[0].from=wr[0].length,Ut.unshift(new w(0,0,wr[0].length))),Qe(Ut).level==1&&(wr=_.match(/\s+$/))&&(Qe(Ut).to-=wr[0].length,Ut.push(new w(0,se-wr[0].length,se)))),z=="rtl"?Ut.reverse():Ut}})();function bt(e,n){var s=e.order;return s==null&&(s=e.order=Ur(e.text,n)),s}var fi=[],rt=function(e,n,s){if(e.addEventListener)e.addEventListener(n,s,!1);else if(e.attachEvent)e.attachEvent("on"+n,s);else{var i=e._handlers||(e._handlers={});i[n]=(i[n]||fi).concat(s)}};function _r(e,n){return e._handlers&&e._handlers[n]||fi}function tn(e,n,s){if(e.removeEventListener)e.removeEventListener(n,s,!1);else if(e.detachEvent)e.detachEvent("on"+n,s);else{var i=e._handlers,a=i&&i[n];if(a){var h=$e(a,s);h>-1&&(i[n]=a.slice(0,h).concat(a.slice(h+1)))}}}function It(e,n){var s=_r(e,n);if(s.length)for(var i=Array.prototype.slice.call(arguments,2),a=0;a<s.length;++a)s[a].apply(null,i)}function qt(e,n,s){return typeof n=="string"&&(n={type:n,preventDefault:function(){this.defaultPrevented=!0}}),It(e,s||n.type,e,n),In(n)||n.codemirrorIgnore}function xn(e){var n=e._handlers&&e._handlers.cursorActivity;if(n)for(var s=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),i=0;i<n.length;++i)$e(s,n[i])==-1&&s.push(n[i])}function mn(e,n){return _r(e,n).length>0}function Nn(e){e.prototype.on=function(n,s){rt(this,n,s)},e.prototype.off=function(n,s){tn(this,n,s)}}function bn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ti(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function In(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==!1}function pr(e){bn(e),ti(e)}function mi(e){return e.target||e.srcElement}function En(e){var n=e.which;return n==null&&(e.button&1?n=1:e.button&2?n=3:e.button&4&&(n=2)),G&&e.ctrlKey&&n==1&&(n=3),n}var ss=(function(){if(k&&j<9)return!1;var e=E("div");return"draggable"in e||"dragDrop"in e})(),wn;function Cr(e){if(wn==null){var n=E("span","​");he(e,E("span",[n,document.createTextNode("x")])),e.firstChild.offsetHeight!=0&&(wn=n.offsetWidth<=1&&n.offsetHeight>2&&!(k&&j<8))}var s=wn?E("span","​"):E("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return s.setAttribute("cm-text",""),s}var qr;function Ir(e){if(qr!=null)return qr;var n=he(e,document.createTextNode("AخA")),s=Q(n,0,1).getBoundingClientRect(),i=Q(n,1,2).getBoundingClientRect();return V(e),!s||s.left==s.right?!1:qr=i.right-s.right<3}var Tr=`

b`.split(/\n/).length!=3?function(e){for(var n=0,s=[],i=e.length;n<=i;){var a=e.indexOf(`
`,n);a==-1&&(a=e.length);var h=e.slice(n,e.charAt(a-1)=="\r"?a-1:a),m=h.indexOf("\r");m!=-1?(s.push(h.slice(0,m)),n+=m+1):(s.push(h),n=a+1)}return s}:function(e){return e.split(/\r\n?|\n/)},gi=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch{return!1}}:function(e){var n;try{n=e.ownerDocument.selection.createRange()}catch{}return!n||n.parentElement()!=e?!1:n.compareEndPoints("StartToEnd",n)!=0},as=(function(){var e=E("div");return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),typeof e.oncopy=="function")})(),On=null;function os(e){if(On!=null)return On;var n=he(e,E("span","x")),s=n.getBoundingClientRect(),i=Q(n,0,1).getBoundingClientRect();return On=Math.abs(s.left-i.left)>1}var Mi={},Or={};function Gn(e,n){arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),Mi[e]=n}function yi(e,n){Or[e]=n}function Di(e){if(typeof e=="string"&&Or.hasOwnProperty(e))e=Or[e];else if(e&&typeof e.name=="string"&&Or.hasOwnProperty(e.name)){var n=Or[e.name];typeof n=="string"&&(n={name:n}),e=fe(n,e),e.name=n.name}else{if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Di("application/xml");if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Di("application/json")}return typeof e=="string"?{name:e}:e||{name:"null"}}function Bt(e,n){n=Di(n);var s=Mi[n.name];if(!s)return Bt(e,"text/plain");var i=s(e,n);if(Mr.hasOwnProperty(n.name)){var a=Mr[n.name];for(var h in a)a.hasOwnProperty(h)&&(i.hasOwnProperty(h)&&(i["_"+h]=i[h]),i[h]=a[h])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var m in n.modeProps)i[m]=n.modeProps[m];return i}var Mr={};function ls(e,n){var s=Mr.hasOwnProperty(e)?Mr[e]:Mr[e]={};Be(n,s)}function Rt(e,n){if(n===!0)return n;if(e.copyState)return e.copyState(n);var s={};for(var i in n){var a=n[i];a instanceof Array&&(a=a.concat([])),s[i]=a}return s}function zi(e,n){for(var s;e.innerMode&&(s=e.innerMode(n),!(!s||s.mode==e));)n=s.state,e=s.mode;return s||{mode:e,state:n}}function ni(e,n,s){return e.startState?e.startState(n,s):!0}var Vt=function(e,n,s){this.pos=this.start=0,this.string=e,this.tabSize=n||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=s};Vt.prototype.eol=function(){return this.pos>=this.string.length},Vt.prototype.sol=function(){return this.pos==this.lineStart},Vt.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Vt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Vt.prototype.eat=function(e){var n=this.string.charAt(this.pos),s;if(typeof e=="string"?s=n==e:s=n&&(e.test?e.test(n):e(n)),s)return++this.pos,n},Vt.prototype.eatWhile=function(e){for(var n=this.pos;this.eat(e););return this.pos>n},Vt.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Vt.prototype.skipToEnd=function(){this.pos=this.string.length},Vt.prototype.skipTo=function(e){var n=this.string.indexOf(e,this.pos);if(n>-1)return this.pos=n,!0},Vt.prototype.backUp=function(e){this.pos-=e},Vt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Ke(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Ke(this.string,this.lineStart,this.tabSize):0)},Vt.prototype.indentation=function(){return Ke(this.string,null,this.tabSize)-(this.lineStart?Ke(this.string,this.lineStart,this.tabSize):0)},Vt.prototype.match=function(e,n,s){if(typeof e=="string"){var i=function(m){return s?m.toLowerCase():m},a=this.string.substr(this.pos,e.length);if(i(a)==i(e))return n!==!1&&(this.pos+=e.length),!0}else{var h=this.string.slice(this.pos).match(e);return h&&h.index>0?null:(h&&n!==!1&&(this.pos+=h[0].length),h)}},Vt.prototype.current=function(){return this.string.slice(this.start,this.pos)},Vt.prototype.hideFirstChars=function(e,n){this.lineStart+=e;try{return n()}finally{this.lineStart-=e}},Vt.prototype.lookAhead=function(e){var n=this.lineOracle;return n&&n.lookAhead(e)},Vt.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};function Je(e,n){if(n-=e.first,n<0||n>=e.size)throw new Error("There is no line "+(n+e.first)+" in the document.");for(var s=e;!s.lines;)for(var i=0;;++i){var a=s.children[i],h=a.chunkSize();if(n<h){s=a;break}n-=h}return s.lines[n]}function ri(e,n,s){var i=[],a=n.line;return e.iter(n.line,s.line+1,function(h){var m=h.text;a==s.line&&(m=m.slice(0,s.ch)),a==n.line&&(m=m.slice(n.ch)),i.push(m),++a}),i}function us(e,n,s){var i=[];return e.iter(n,s,function(a){i.push(a.text)}),i}function Yn(e,n){var s=n-e.height;if(s)for(var i=e;i;i=i.parent)i.height+=s}function T(e){if(e.parent==null)return null;for(var n=e.parent,s=$e(n.lines,e),i=n.parent;i;n=i,i=i.parent)for(var a=0;i.children[a]!=n;++a)s+=i.children[a].chunkSize();return s+n.first}function U(e,n){var s=e.first;e:do{for(var i=0;i<e.children.length;++i){var a=e.children[i],h=a.height;if(n<h){e=a;continue e}n-=h,s+=a.chunkSize()}return s}while(!e.lines);for(var m=0;m<e.lines.length;++m){var x=e.lines[m],w=x.height;if(n<w)break;n-=w}return s+m}function ge(e,n){return n>=e.first&&n<e.first+e.size}function Ne(e,n){return String(e.lineNumberFormatter(n+e.firstLineNumber))}function pe(e,n,s){if(s===void 0&&(s=null),!(this instanceof pe))return new pe(e,n,s);this.line=e,this.ch=n,this.sticky=s}function He(e,n){return e.line-n.line||e.ch-n.ch}function jt(e,n){return e.sticky==n.sticky&&He(e,n)==0}function Qt(e){return pe(e.line,e.ch)}function kn(e,n){return He(e,n)<0?n:e}function Kr(e,n){return He(e,n)<0?e:n}function nl(e,n){return Math.max(e.first,Math.min(n,e.first+e.size-1))}function gt(e,n){if(n.line<e.first)return pe(e.first,0);var s=e.first+e.size-1;return n.line>s?pe(s,Je(e,s).text.length):no(n,Je(e,n.line).text.length)}function no(e,n){var s=e.ch;return s==null||s>n?pe(e.line,n):s<0?pe(e.line,0):e}function ro(e,n){for(var s=[],i=0;i<n.length;i++)s[i]=gt(e,n[i]);return s}var Fi=function(e,n){this.state=e,this.lookAhead=n},rr=function(e,n,s,i){this.state=n,this.doc=e,this.line=s,this.maxLookAhead=i||0,this.baseTokens=null,this.baseTokenPos=1};rr.prototype.lookAhead=function(e){var n=this.doc.getLine(this.line+e);return n!=null&&e>this.maxLookAhead&&(this.maxLookAhead=e),n},rr.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var n=this.baseTokens[this.baseTokenPos+1];return{type:n&&n.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},rr.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},rr.fromSaved=function(e,n,s){return n instanceof Fi?new rr(e,Rt(e.mode,n.state),s,n.lookAhead):new rr(e,Rt(e.mode,n),s)},rr.prototype.save=function(e){var n=e!==!1?Rt(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new Fi(n,this.maxLookAhead):n};function io(e,n,s,i){var a=[e.state.modeGen],h={};ir(e,n.text,e.doc.mode,s,function(_,z){return a.push(_,z)},h,i);for(var m=s.state,x=function(_){s.baseTokens=a;var z=e.state.overlays[_],q=1,se=0;s.state=!0,ir(e,n.text,z.mode,s,function(ne,ye){for(var be=q;se<ne;){var Ae=a[q];Ae>ne&&a.splice(q,1,ne,a[q+1],Ae),q+=2,se=Math.min(ne,Ae)}if(ye)if(z.opaque)a.splice(be,q-be,ne,"overlay "+ye),q=be+2;else for(;be<q;be+=2){var Ee=a[be+1];a[be+1]=(Ee?Ee+" ":"")+"overlay "+ye}},h),s.state=m,s.baseTokens=null,s.baseTokenPos=1},w=0;w<e.state.overlays.length;++w)x(w);return{styles:a,classes:h.bgClass||h.textClass?h:null}}function Wi(e,n,s){if(!n.styles||n.styles[0]!=e.state.modeGen){var i=Nt(e,T(n)),a=n.text.length>e.options.maxHighlightLength&&Rt(e.doc.mode,i.state),h=io(e,n,i);a&&(i.state=a),n.stateAfter=i.save(!a),n.styles=h.styles,h.classes?n.styleClasses=h.classes:n.styleClasses&&(n.styleClasses=null),s===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return n.styles}function Nt(e,n,s){var i=e.doc,a=e.display;if(!i.mode.startState)return new rr(i,!0,n);var h=va(e,n,s),m=h>i.first&&Je(i,h-1).stateAfter,x=m?rr.fromSaved(i,m,h):new rr(i,ni(i.mode),h);return i.iter(h,n,function(w){cs(e,w.text,x);var _=x.line;w.stateAfter=_==n-1||_%5==0||_>=a.viewFrom&&_<a.viewTo?x.save():null,x.nextLine()}),s&&(i.modeFrontier=x.line),x}function cs(e,n,s,i){var a=e.doc.mode,h=new Vt(n,e.options.tabSize,s);for(h.start=h.pos=i||0,n==""&&Is(a,s.state);!h.eol();)vi(a,h,s.state),h.start=h.pos}function Is(e,n){if(e.blankLine)return e.blankLine(n);if(e.innerMode){var s=zi(e,n);if(s.mode.blankLine)return s.mode.blankLine(s.state)}}function vi(e,n,s,i){for(var a=0;a<10;a++){i&&(i[0]=zi(e,s).mode);var h=e.token(n,s);if(n.pos>n.start)return h}throw new Error("Mode "+e.name+" failed to advance stream.")}var ya=function(e,n,s){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=n||null,this.state=s};function xi(e,n,s,i){var a=e.doc,h=a.mode,m;n=gt(a,n);var x=Je(a,n.line),w=Nt(e,n.line,s),_=new Vt(x.text,e.options.tabSize,w),z;for(i&&(z=[]);(i||_.pos<n.ch)&&!_.eol();)_.start=_.pos,m=vi(h,_,w.state),i&&z.push(new ya(_,m,Rt(a.mode,w.state)));return i?z:new ya(_,m,w.state)}function Hi(e,n){if(e)for(;;){var s=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!s)break;e=e.slice(0,s.index)+e.slice(s.index+s[0].length);var i=s[1]?"bgClass":"textClass";n[i]==null?n[i]=s[2]:new RegExp("(?:^|\\s)"+s[2]+"(?:$|\\s)").test(n[i])||(n[i]+=" "+s[2])}return e}function ir(e,n,s,i,a,h,m){var x=s.flattenSpans;x==null&&(x=e.options.flattenSpans);var w=0,_=null,z=new Vt(n,e.options.tabSize,i),q,se=e.options.addModeClass&&[null];for(n==""&&Hi(Is(s,i.state),h);!z.eol();){if(z.pos>e.options.maxHighlightLength?(x=!1,m&&cs(e,n,i,z.pos),z.pos=n.length,q=null):q=Hi(vi(s,z,i.state,se),h),se){var ne=se[0].name;ne&&(q="m-"+(q?ne+" "+q:ne))}if(!x||_!=q){for(;w<z.start;)w=Math.min(z.start,w+5e3),a(w,_);_=q}z.start=z.pos}for(;w<z.pos;){var ye=Math.min(z.pos,w+5e3);a(ye,_),w=ye}}function va(e,n,s){for(var i,a,h=e.doc,m=s?-1:n-(e.doc.mode.innerMode?1e3:100),x=n;x>m;--x){if(x<=h.first)return h.first;var w=Je(h,x-1),_=w.stateAfter;if(_&&(!s||x+(_ instanceof Fi?_.lookAhead:0)<=h.modeFrontier))return x;var z=Ke(w.text,null,e.options.tabSize);(a==null||i>z)&&(a=x-1,i=z)}return a}function Dr(e,n){if(e.modeFrontier=Math.min(e.modeFrontier,n),!(e.highlightFrontier<n-10)){for(var s=e.first,i=n-1;i>s;i--){var a=Je(e,i).stateAfter;if(a&&(!(a instanceof Fi)||i+a.lookAhead<n)){s=i+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,s)}}var ii=!1,Mn=!1;function $r(){ii=!0}function Os(){Mn=!0}function jr(e,n,s){this.marker=e,this.from=n,this.to=s}function Ms(e,n){if(e)for(var s=0;s<e.length;++s){var i=e[s];if(i.marker==n)return i}}function so(e,n){for(var s,i=0;i<e.length;++i)e[i]!=n&&(s||(s=[])).push(e[i]);return s}function Ds(e,n,s){var i=s&&window.WeakSet&&(s.markedSpans||(s.markedSpans=new WeakSet));i&&e.markedSpans&&i.has(e.markedSpans)?e.markedSpans.push(n):(e.markedSpans=e.markedSpans?e.markedSpans.concat([n]):[n],i&&i.add(e.markedSpans)),n.marker.attachLine(e)}function Yl(e,n,s){var i;if(e)for(var a=0;a<e.length;++a){var h=e[a],m=h.marker,x=h.from==null||(m.inclusiveLeft?h.from<=n:h.from<n);if(x||h.from==n&&m.type=="bookmark"&&(!s||!h.marker.insertLeft)){var w=h.to==null||(m.inclusiveRight?h.to>=n:h.to>n);(i||(i=[])).push(new jr(m,h.from,w?null:h.to))}}return i}function ao(e,n,s){var i;if(e)for(var a=0;a<e.length;++a){var h=e[a],m=h.marker,x=h.to==null||(m.inclusiveRight?h.to>=n:h.to>n);if(x||h.from==n&&m.type=="bookmark"&&(!s||h.marker.insertLeft)){var w=h.from==null||(m.inclusiveLeft?h.from<=n:h.from<n);(i||(i=[])).push(new jr(m,w?null:h.from-n,h.to==null?null:h.to-n))}}return i}function ds(e,n){if(n.full)return null;var s=ge(e,n.from.line)&&Je(e,n.from.line).markedSpans,i=ge(e,n.to.line)&&Je(e,n.to.line).markedSpans;if(!s&&!i)return null;var a=n.from.ch,h=n.to.ch,m=He(n.from,n.to)==0,x=Yl(s,a,m),w=ao(i,h,m),_=n.text.length==1,z=Qe(n.text).length+(_?a:0);if(x)for(var q=0;q<x.length;++q){var se=x[q];if(se.to==null){var ne=Ms(w,se.marker);ne?_&&(se.to=ne.to==null?null:ne.to+z):se.to=a}}if(w)for(var ye=0;ye<w.length;++ye){var be=w[ye];if(be.to!=null&&(be.to+=z),be.from==null){var Ae=Ms(x,be.marker);Ae||(be.from=z,_&&(x||(x=[])).push(be))}else be.from+=z,_&&(x||(x=[])).push(be)}x&&(x=zs(x)),w&&w!=x&&(w=zs(w));var Ee=[x];if(!_){var Fe=n.text.length-2,ze;if(Fe>0&&x)for(var Ge=0;Ge<x.length;++Ge)x[Ge].to==null&&(ze||(ze=[])).push(new jr(x[Ge].marker,null,null));for(var ot=0;ot<Fe;++ot)Ee.push(ze);Ee.push(w)}return Ee}function zs(e){for(var n=0;n<e.length;++n){var s=e[n];s.from!=null&&s.from==s.to&&s.marker.clearWhenEmpty!==!1&&e.splice(n--,1)}return e.length?e:null}function oo(e,n,s){var i=null;if(e.iter(n.line,s.line+1,function(ne){if(ne.markedSpans)for(var ye=0;ye<ne.markedSpans.length;++ye){var be=ne.markedSpans[ye].marker;be.readOnly&&(!i||$e(i,be)==-1)&&(i||(i=[])).push(be)}}),!i)return null;for(var a=[{from:n,to:s}],h=0;h<i.length;++h)for(var m=i[h],x=m.find(0),w=0;w<a.length;++w){var _=a[w];if(!(He(_.to,x.from)<0||He(_.from,x.to)>0)){var z=[w,1],q=He(_.from,x.from),se=He(_.to,x.to);(q<0||!m.inclusiveLeft&&!q)&&z.push({from:_.from,to:x.from}),(se>0||!m.inclusiveRight&&!se)&&z.push({from:x.to,to:_.to}),a.splice.apply(a,z),w+=z.length-3}}return a}function bi(e){var n=e.markedSpans;if(n){for(var s=0;s<n.length;++s)n[s].marker.detachLine(e);e.markedSpans=null}}function Te(e,n){if(n){for(var s=0;s<n.length;++s)n[s].marker.attachLine(e);e.markedSpans=n}}function O(e){return e.inclusiveLeft?-1:0}function re(e){return e.inclusiveRight?1:0}function xe(e,n){var s=e.lines.length-n.lines.length;if(s!=0)return s;var i=e.find(),a=n.find(),h=He(i.from,a.from)||O(e)-O(n);if(h)return-h;var m=He(i.to,a.to)||re(e)-re(n);return m||n.id-e.id}function Le(e,n){var s=Mn&&e.markedSpans,i;if(s)for(var a=void 0,h=0;h<s.length;++h)a=s[h],a.marker.collapsed&&(n?a.from:a.to)==null&&(!i||xe(i,a.marker)<0)&&(i=a.marker);return i}function nt(e){return Le(e,!0)}function ct(e){return Le(e,!1)}function Tt(e,n){var s=Mn&&e.markedSpans,i;if(s)for(var a=0;a<s.length;++a){var h=s[a];h.marker.collapsed&&(h.from==null||h.from<n)&&(h.to==null||h.to>n)&&(!i||xe(i,h.marker)<0)&&(i=h.marker)}return i}function cn(e,n,s,i,a){var h=Je(e,n),m=Mn&&h.markedSpans;if(m)for(var x=0;x<m.length;++x){var w=m[x];if(w.marker.collapsed){var _=w.marker.find(0),z=He(_.from,s)||O(w.marker)-O(a),q=He(_.to,i)||re(w.marker)-re(a);if(!(z>=0&&q<=0||z<=0&&q>=0)&&(z<=0&&(w.marker.inclusiveRight&&a.inclusiveLeft?He(_.to,s)>=0:He(_.to,s)>0)||z>=0&&(w.marker.inclusiveRight&&a.inclusiveLeft?He(_.from,i)<=0:He(_.from,i)<0)))return!0}}}function Kt(e){for(var n;n=nt(e);)e=n.find(-1,!0).line;return e}function hr(e){for(var n;n=ct(e);)e=n.find(1,!0).line;return e}function Vn(e){for(var n,s;n=ct(e);)e=n.find(1,!0).line,(s||(s=[])).push(e);return s}function fr(e,n){var s=Je(e,n),i=Kt(s);return s==i?n:T(i)}function dn(e,n){if(n>e.lastLine())return n;var s=Je(e,n),i;if(!Nr(e,s))return n;for(;i=ct(s);)s=i.find(1,!0).line;return T(s)+1}function Nr(e,n){var s=Mn&&n.markedSpans;if(s){for(var i=void 0,a=0;a<s.length;++a)if(i=s[a],!!i.marker.collapsed){if(i.from==null)return!0;if(!i.marker.widgetNode&&i.from==0&&i.marker.inclusiveLeft&&rl(e,n,i))return!0}}}function rl(e,n,s){if(s.to==null){var i=s.marker.find(1,!0);return rl(e,i.line,Ms(i.line.markedSpans,s.marker))}if(s.marker.inclusiveRight&&s.to==n.text.length)return!0;for(var a=void 0,h=0;h<n.markedSpans.length;++h)if(a=n.markedSpans[h],a.marker.collapsed&&!a.marker.widgetNode&&a.from==s.to&&(a.to==null||a.to!=s.from)&&(a.marker.inclusiveLeft||s.marker.inclusiveRight)&&rl(e,n,a))return!0}function Sn(e){e=Kt(e);for(var n=0,s=e.parent,i=0;i<s.lines.length;++i){var a=s.lines[i];if(a==e)break;n+=a.height}for(var h=s.parent;h;s=h,h=s.parent)for(var m=0;m<h.children.length;++m){var x=h.children[m];if(x==s)break;n+=x.height}return n}function Bi(e){if(e.height==0)return 0;for(var n=e.text.length,s,i=e;s=nt(i);){var a=s.find(0,!0);i=a.from.line,n+=a.from.ch-a.to.ch}for(i=e;s=ct(i);){var h=s.find(0,!0);n-=i.text.length-h.from.ch,i=h.to.line,n+=i.text.length-h.to.ch}return n}function lo(e){var n=e.display,s=e.doc;n.maxLine=Je(s,s.first),n.maxLineLength=Bi(n.maxLine),n.maxLineChanged=!0,s.iter(function(i){var a=Bi(i);a>n.maxLineLength&&(n.maxLineLength=a,n.maxLine=i)})}var wi=function(e,n,s){this.text=e,Te(this,n),this.height=s?s(this):1};wi.prototype.lineNo=function(){return T(this)},Nn(wi);function qd(e,n,s,i){e.text=n,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),e.order!=null&&(e.order=null),bi(e),Te(e,s);var a=i?i(e):1;a!=e.height&&Yn(e,a)}function Vl(e){e.parent=null,bi(e)}var Jl={},uo={};function co(e,n){if(!e||/^\s*$/.test(e))return null;var s=n.addModeClass?uo:Jl;return s[e]||(s[e]=e.replace(/\S+/g,"cm-$&"))}function Xl(e,n){var s=Z("span",null,null,L?"padding-right: .1px":null),i={pre:Z("pre",[s],"CodeMirror-line"),content:s,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};n.measure={};for(var a=0;a<=(n.rest?n.rest.length:0);a++){var h=a?n.rest[a-1]:n.line,m=void 0;i.pos=0,i.addToken=$d,Ir(e.display.measure)&&(m=bt(h,e.doc.direction))&&(i.addToken=Ql(i.addToken,m)),i.map=[];var x=n!=e.display.externalMeasured&&T(h);Yd(h,i,Wi(e,h,x)),h.styleClasses&&(h.styleClasses.bgClass&&(i.bgClass=I(h.styleClasses.bgClass,i.bgClass||"")),h.styleClasses.textClass&&(i.textClass=I(h.styleClasses.textClass,i.textClass||""))),i.map.length==0&&i.map.push(0,0,i.content.appendChild(Cr(e.display.measure))),a==0?(n.measure.map=i.map,n.measure.cache={}):((n.measure.maps||(n.measure.maps=[])).push(i.map),(n.measure.caches||(n.measure.caches=[])).push({}))}if(L){var w=i.content.lastChild;(/\bcm-tab\b/.test(w.className)||w.querySelector&&w.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return It(e,"renderLine",e,n.line,i.pre),i.pre.className&&(i.textClass=I(i.pre.className,i.textClass||"")),i}function Kd(e){var n=E("span","•","cm-invalidchar");return n.title="\\u"+e.charCodeAt(0).toString(16),n.setAttribute("aria-label",n.title),n}function $d(e,n,s,i,a,h,m){if(n){var x=e.splitSpaces?Gd(n,e.trailingSpace):n,w=e.cm.state.specialChars,_=!1,z;if(!w.test(n))e.col+=n.length,z=document.createTextNode(x),e.map.push(e.pos,e.pos+n.length,z),k&&j<9&&(_=!0),e.pos+=n.length;else{z=document.createDocumentFragment();for(var q=0;;){w.lastIndex=q;var se=w.exec(n),ne=se?se.index-q:n.length-q;if(ne){var ye=document.createTextNode(x.slice(q,q+ne));k&&j<9?z.appendChild(E("span",[ye])):z.appendChild(ye),e.map.push(e.pos,e.pos+ne,ye),e.col+=ne,e.pos+=ne}if(!se)break;q+=ne+1;var be=void 0;if(se[0]=="	"){var Ae=e.cm.options.tabSize,Ee=Ae-e.col%Ae;be=z.appendChild(E("span",yt(Ee),"cm-tab")),be.setAttribute("role","presentation"),be.setAttribute("cm-text","	"),e.col+=Ee}else se[0]=="\r"||se[0]==`
`?(be=z.appendChild(E("span",se[0]=="\r"?"␍":"␤","cm-invalidchar")),be.setAttribute("cm-text",se[0]),e.col+=1):(be=e.cm.options.specialCharPlaceholder(se[0]),be.setAttribute("cm-text",se[0]),k&&j<9?z.appendChild(E("span",[be])):z.appendChild(be),e.col+=1);e.map.push(e.pos,e.pos+1,be),e.pos++}}if(e.trailingSpace=x.charCodeAt(n.length-1)==32,s||i||a||_||h||m){var Fe=s||"";i&&(Fe+=i),a&&(Fe+=a);var ze=E("span",[z],Fe,h);if(m)for(var Ge in m)m.hasOwnProperty(Ge)&&Ge!="style"&&Ge!="class"&&ze.setAttribute(Ge,m[Ge]);return e.content.appendChild(ze)}e.content.appendChild(z)}}function Gd(e,n){if(e.length>1&&!/  /.test(e))return e;for(var s=n,i="",a=0;a<e.length;a++){var h=e.charAt(a);h==" "&&s&&(a==e.length-1||e.charCodeAt(a+1)==32)&&(h=" "),i+=h,s=h==" "}return i}function Ql(e,n){return function(s,i,a,h,m,x,w){a=a?a+" cm-force-border":"cm-force-border";for(var _=s.pos,z=_+i.length;;){for(var q=void 0,se=0;se<n.length&&(q=n[se],!(q.to>_&&q.from<=_));se++);if(q.to>=z)return e(s,i,a,h,m,x,w);e(s,i.slice(0,q.to-_),a,h,null,x,w),h=null,i=i.slice(q.to-_),_=q.to}}}function hc(e,n,s,i){var a=!i&&s.widgetNode;a&&e.map.push(e.pos,e.pos+n,a),!i&&e.cm.display.input.needsContentAttribute&&(a||(a=e.content.appendChild(document.createElement("span"))),a.setAttribute("cm-marker",s.id)),a&&(e.cm.display.input.setUneditable(a),e.content.appendChild(a)),e.pos+=n,e.trailingSpace=!1}function Yd(e,n,s){var i=e.markedSpans,a=e.text,h=0;if(!i){for(var m=1;m<s.length;m+=2)n.addToken(n,a.slice(h,h=s[m]),co(s[m+1],n.cm.options));return}for(var x=a.length,w=0,_=1,z="",q,se,ne=0,ye,be,Ae,Ee,Fe;;){if(ne==w){ye=be=Ae=se="",Fe=null,Ee=null,ne=1/0;for(var ze=[],Ge=void 0,ot=0;ot<i.length;++ot){var Ve=i[ot],St=Ve.marker;if(St.type=="bookmark"&&Ve.from==w&&St.widgetNode)ze.push(St);else if(Ve.from<=w&&(Ve.to==null||Ve.to>w||St.collapsed&&Ve.to==w&&Ve.from==w)){if(Ve.to!=null&&Ve.to!=w&&ne>Ve.to&&(ne=Ve.to,be=""),St.className&&(ye+=" "+St.className),St.css&&(se=(se?se+";":"")+St.css),St.startStyle&&Ve.from==w&&(Ae+=" "+St.startStyle),St.endStyle&&Ve.to==ne&&(Ge||(Ge=[])).push(St.endStyle,Ve.to),St.title&&((Fe||(Fe={})).title=St.title),St.attributes)for(var Et in St.attributes)(Fe||(Fe={}))[Et]=St.attributes[Et];St.collapsed&&(!Ee||xe(Ee.marker,St)<0)&&(Ee=Ve)}else Ve.from>w&&ne>Ve.from&&(ne=Ve.from)}if(Ge)for(var Bn=0;Bn<Ge.length;Bn+=2)Ge[Bn+1]==ne&&(be+=" "+Ge[Bn]);if(!Ee||Ee.from==w)for(var sn=0;sn<ze.length;++sn)hc(n,0,ze[sn]);if(Ee&&(Ee.from||0)==w){if(hc(n,(Ee.to==null?x+1:Ee.to)-w,Ee.marker,Ee.from==null),Ee.to==null)return;Ee.to==w&&(Ee=!1)}}if(w>=x)break;for(var xr=Math.min(x,ne);;){if(z){var lr=w+z.length;if(!Ee){var yn=lr>xr?z.slice(0,xr-w):z;n.addToken(n,yn,q?q+ye:ye,Ae,w+yn.length==ne?be:"",se,Fe)}if(lr>=xr){z=z.slice(xr-w),w=xr;break}w=lr,Ae=""}z=a.slice(h,h=s[_++]),q=co(s[_++],n.cm.options)}}}function fc(e,n,s){this.line=n,this.rest=Vn(n),this.size=this.rest?T(Qe(this.rest))-s+1:1,this.node=this.text=null,this.hidden=Nr(e,n)}function il(e,n,s){for(var i=[],a,h=n;h<s;h=a){var m=new fc(e.doc,Je(e.doc,h),h);a=h+m.size,i.push(m)}return i}var xa=null;function mc(e){xa?xa.ops.push(e):e.ownsGroup=xa={ops:[e],delayedCallbacks:[]}}function Vd(e){var n=e.delayedCallbacks,s=0;do{for(;s<n.length;s++)n[s].call(null);for(var i=0;i<e.ops.length;i++){var a=e.ops[i];if(a.cursorActivityHandlers)for(;a.cursorActivityCalled<a.cursorActivityHandlers.length;)a.cursorActivityHandlers[a.cursorActivityCalled++].call(null,a.cm)}}while(s<n.length)}function Jd(e,n){var s=e.ownsGroup;if(s)try{Vd(s)}finally{xa=null,n(s)}}var po=null;function Dn(e,n){var s=_r(e,n);if(s.length){var i=Array.prototype.slice.call(arguments,2),a;xa?a=xa.delayedCallbacks:po?a=po:(a=po=[],setTimeout(Zl,0));for(var h=function(x){a.push(function(){return s[x].apply(null,i)})},m=0;m<s.length;++m)h(m)}}function Zl(){var e=po;po=null;for(var n=0;n<e.length;++n)e[n]()}function gc(e,n,s,i){for(var a=0;a<n.changes.length;a++){var h=n.changes[a];h=="text"?Qd(e,n):h=="gutter"?yc(e,n,s,i):h=="class"?tu(e,n):h=="widget"&&Zd(e,n,i)}n.changes=null}function ho(e){return e.node==e.text&&(e.node=E("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),k&&j<8&&(e.node.style.zIndex=2)),e.node}function Xd(e,n){var s=n.bgClass?n.bgClass+" "+(n.line.bgClass||""):n.line.bgClass;if(s&&(s+=" CodeMirror-linebackground"),n.background)s?n.background.className=s:(n.background.parentNode.removeChild(n.background),n.background=null);else if(s){var i=ho(n);n.background=i.insertBefore(E("div",null,s),i.firstChild),e.display.input.setUneditable(n.background)}}function eu(e,n){var s=e.display.externalMeasured;return s&&s.line==n.line?(e.display.externalMeasured=null,n.measure=s.measure,s.built):Xl(e,n)}function Qd(e,n){var s=n.text.className,i=eu(e,n);n.text==n.node&&(n.node=i.pre),n.text.parentNode.replaceChild(i.pre,n.text),n.text=i.pre,i.bgClass!=n.bgClass||i.textClass!=n.textClass?(n.bgClass=i.bgClass,n.textClass=i.textClass,tu(e,n)):s&&(n.text.className=s)}function tu(e,n){Xd(e,n),n.line.wrapClass?ho(n).className=n.line.wrapClass:n.node!=n.text&&(n.node.className="");var s=n.textClass?n.textClass+" "+(n.line.textClass||""):n.line.textClass;n.text.className=s||""}function yc(e,n,s,i){if(n.gutter&&(n.node.removeChild(n.gutter),n.gutter=null),n.gutterBackground&&(n.node.removeChild(n.gutterBackground),n.gutterBackground=null),n.line.gutterClass){var a=ho(n);n.gutterBackground=E("div",null,"CodeMirror-gutter-background "+n.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(n.gutterBackground),a.insertBefore(n.gutterBackground,n.text)}var h=n.line.gutterMarkers;if(e.options.lineNumbers||h){var m=ho(n),x=n.gutter=E("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(x.setAttribute("aria-hidden","true"),e.display.input.setUneditable(x),m.insertBefore(x,n.text),n.line.gutterClass&&(x.className+=" "+n.line.gutterClass),e.options.lineNumbers&&(!h||!h["CodeMirror-linenumbers"])&&(n.lineNumber=x.appendChild(E("div",Ne(e.options,s),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),h)for(var w=0;w<e.display.gutterSpecs.length;++w){var _=e.display.gutterSpecs[w].className,z=h.hasOwnProperty(_)&&h[_];z&&x.appendChild(E("div",[z],"CodeMirror-gutter-elt","left: "+i.gutterLeft[_]+"px; width: "+i.gutterWidth[_]+"px"))}}}function Zd(e,n,s){n.alignable&&(n.alignable=null);for(var i=ae("CodeMirror-linewidget"),a=n.node.firstChild,h=void 0;a;a=h)h=a.nextSibling,i.test(a.className)&&n.node.removeChild(a);vc(e,n,s)}function ep(e,n,s,i){var a=eu(e,n);return n.text=n.node=a.pre,a.bgClass&&(n.bgClass=a.bgClass),a.textClass&&(n.textClass=a.textClass),tu(e,n),yc(e,n,s,i),vc(e,n,i),n.node}function vc(e,n,s){if(xc(e,n.line,n,s,!0),n.rest)for(var i=0;i<n.rest.length;i++)xc(e,n.rest[i],n,s,!1)}function xc(e,n,s,i,a){if(n.widgets)for(var h=ho(s),m=0,x=n.widgets;m<x.length;++m){var w=x[m],_=E("div",[w.node],"CodeMirror-linewidget"+(w.className?" "+w.className:""));w.handleMouseEvents||_.setAttribute("cm-ignore-events","true"),nu(w,_,s,i),e.display.input.setUneditable(_),a&&w.above?h.insertBefore(_,s.gutter||s.text):h.appendChild(_),Dn(w,"redraw")}}function nu(e,n,s,i){if(e.noHScroll){(s.alignable||(s.alignable=[])).push(n);var a=i.wrapperWidth;n.style.left=i.fixedPos+"px",e.coverGutter||(a-=i.gutterTotalWidth,n.style.paddingLeft=i.gutterTotalWidth+"px"),n.style.width=a+"px"}e.coverGutter&&(n.style.zIndex=5,n.style.position="relative",e.noHScroll||(n.style.marginLeft=-i.gutterTotalWidth+"px"))}function Ui(e){if(e.height!=null)return e.height;var n=e.doc.cm;if(!n)return 0;if(!A(document.body,e.node)){var s="position: relative;";e.coverGutter&&(s+="margin-left: -"+n.display.gutters.offsetWidth+"px;"),e.noHScroll&&(s+="width: "+n.display.wrapper.clientWidth+"px;"),he(n.display.measure,E("div",[e.node],null,s))}return e.height=e.node.parentNode.offsetHeight}function qi(e,n){for(var s=mi(n);s!=e.wrapper;s=s.parentNode)if(!s||s.nodeType==1&&s.getAttribute("cm-ignore-events")=="true"||s.parentNode==e.sizer&&s!=e.mover)return!0}function fo(e){return e.lineSpace.offsetTop}function sl(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function ru(e){if(e.cachedPaddingH)return e.cachedPaddingH;var n=he(e.measure,E("pre","x","CodeMirror-line-like")),s=window.getComputedStyle?window.getComputedStyle(n):n.currentStyle,i={left:parseInt(s.paddingLeft),right:parseInt(s.paddingRight)};return!isNaN(i.left)&&!isNaN(i.right)&&(e.cachedPaddingH=i),i}function si(e){return Ft-e.display.nativeBarWidth}function ps(e){return e.display.scroller.clientWidth-si(e)-e.display.barWidth}function hs(e){return e.display.scroller.clientHeight-si(e)-e.display.barHeight}function tp(e,n,s){var i=e.options.lineWrapping,a=i&&ps(e);if(!n.measure.heights||i&&n.measure.width!=a){var h=n.measure.heights=[];if(i){n.measure.width=a;for(var m=n.text.firstChild.getClientRects(),x=0;x<m.length-1;x++){var w=m[x],_=m[x+1];Math.abs(w.bottom-_.bottom)>2&&h.push((w.bottom+_.top)/2-s.top)}}h.push(s.bottom-s.top)}}function bc(e,n,s){if(e.line==n)return{map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var i=0;i<e.rest.length;i++)if(e.rest[i]==n)return{map:e.measure.maps[i],cache:e.measure.caches[i]};for(var a=0;a<e.rest.length;a++)if(T(e.rest[a])>s)return{map:e.measure.maps[a],cache:e.measure.caches[a],before:!0}}}function np(e,n){n=Kt(n);var s=T(n),i=e.display.externalMeasured=new fc(e.doc,n,s);i.lineN=s;var a=i.built=Xl(e,i);return i.text=a.pre,he(e.display.lineMeasure,a.pre),i}function iu(e,n,s,i){return Er(e,ki(e,n),s,i)}function al(e,n){if(n>=e.display.viewFrom&&n<e.display.viewTo)return e.display.view[_i(e,n)];var s=e.display.externalMeasured;if(s&&n>=s.lineN&&n<s.lineN+s.size)return s}function ki(e,n){var s=T(n),i=al(e,s);i&&!i.text?i=null:i&&i.changes&&(gc(e,i,s,pl(e)),e.curOp.forceUpdate=!0),i||(i=np(e,n));var a=bc(i,n,s);return{line:n,view:i,rect:null,map:a.map,cache:a.cache,before:a.before,hasHeights:!1}}function Er(e,n,s,i,a){n.before&&(s=-1);var h=s+(i||""),m;return n.cache.hasOwnProperty(h)?m=n.cache[h]:(n.rect||(n.rect=n.view.text.getBoundingClientRect()),n.hasHeights||(tp(e,n.view,n.rect),n.hasHeights=!0),m=kc(e,n,s,i),m.bogus||(n.cache[h]=m)),{left:m.left,right:m.right,top:a?m.rtop:m.top,bottom:a?m.rbottom:m.bottom}}var wc={left:0,right:0,top:0,bottom:0};function mo(e,n,s){for(var i,a,h,m,x,w,_=0;_<e.length;_+=3)if(x=e[_],w=e[_+1],n<x?(a=0,h=1,m="left"):n<w?(a=n-x,h=a+1):(_==e.length-3||n==w&&e[_+3]>n)&&(h=w-x,a=h-1,n>=w&&(m="right")),a!=null){if(i=e[_+2],x==w&&s==(i.insertLeft?"left":"right")&&(m=s),s=="left"&&a==0)for(;_&&e[_-2]==e[_-3]&&e[_-1].insertLeft;)i=e[(_-=3)+2],m="left";if(s=="right"&&a==w-x)for(;_<e.length-3&&e[_+3]==e[_+4]&&!e[_+5].insertLeft;)i=e[(_+=3)+2],m="right";break}return{node:i,start:a,end:h,collapse:m,coverStart:x,coverEnd:w}}function rp(e,n){var s=wc;if(n=="left")for(var i=0;i<e.length&&(s=e[i]).left==s.right;i++);else for(var a=e.length-1;a>=0&&(s=e[a]).left==s.right;a--);return s}function kc(e,n,s,i){var a=mo(n.map,s,i),h=a.node,m=a.start,x=a.end,w=a.collapse,_;if(h.nodeType==3){for(var z=0;z<4;z++){for(;m&&pt(n.line.text.charAt(a.coverStart+m));)--m;for(;a.coverStart+x<a.coverEnd&&pt(n.line.text.charAt(a.coverStart+x));)++x;if(k&&j<9&&m==0&&x==a.coverEnd-a.coverStart?_=h.parentNode.getBoundingClientRect():_=rp(Q(h,m,x).getClientRects(),i),_.left||_.right||m==0)break;x=m,m=m-1,w="right"}k&&j<11&&(_=su(e.display.measure,_))}else{m>0&&(w=i="right");var q;e.options.lineWrapping&&(q=h.getClientRects()).length>1?_=q[i=="right"?q.length-1:0]:_=h.getBoundingClientRect()}if(k&&j<9&&!m&&(!_||!_.left&&!_.right)){var se=h.parentNode.getClientRects()[0];se?_={left:se.left,right:se.left+fs(e.display),top:se.top,bottom:se.bottom}:_=wc}for(var ne=_.top-n.rect.top,ye=_.bottom-n.rect.top,be=(ne+ye)/2,Ae=n.view.measure.heights,Ee=0;Ee<Ae.length-1&&!(be<Ae[Ee]);Ee++);var Fe=Ee?Ae[Ee-1]:0,ze=Ae[Ee],Ge={left:(w=="right"?_.right:_.left)-n.rect.left,right:(w=="left"?_.left:_.right)-n.rect.left,top:Fe,bottom:ze};return!_.left&&!_.right&&(Ge.bogus=!0),e.options.singleCursorHeightPerLine||(Ge.rtop=ne,Ge.rbottom=ye),Ge}function su(e,n){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!os(e))return n;var s=screen.logicalXDPI/screen.deviceXDPI,i=screen.logicalYDPI/screen.deviceYDPI;return{left:n.left*s,right:n.right*s,top:n.top*i,bottom:n.bottom*i}}function ol(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var n=0;n<e.rest.length;n++)e.measure.caches[n]={}}function au(e){e.display.externalMeasure=null,V(e.display.lineMeasure);for(var n=0;n<e.display.view.length;n++)ol(e.display.view[n])}function ba(e){au(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function ou(e){return R&&B?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function Sc(e){return R&&B?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function lu(e){var n=Kt(e),s=n.widgets,i=0;if(s)for(var a=0;a<s.length;++a)s[a].above&&(i+=Ui(s[a]));return i}function ll(e,n,s,i,a){if(!a){var h=lu(n);s.top+=h,s.bottom+=h}if(i=="line")return s;i||(i="local");var m=Sn(n);if(i=="local"?m+=fo(e.display):m-=e.display.viewOffset,i=="page"||i=="window"){var x=e.display.lineSpace.getBoundingClientRect();m+=x.top+(i=="window"?0:Sc(_e(e)));var w=x.left+(i=="window"?0:ou(_e(e)));s.left+=w,s.right+=w}return s.top+=m,s.bottom+=m,s}function _c(e,n,s){if(s=="div")return n;var i=n.left,a=n.top;if(s=="page")i-=ou(_e(e)),a-=Sc(_e(e));else if(s=="local"||!s){var h=e.display.sizer.getBoundingClientRect();i+=h.left,a+=h.top}var m=e.display.lineSpace.getBoundingClientRect();return{left:i-m.left,top:a-m.top}}function ul(e,n,s,i,a){return i||(i=Je(e.doc,n.line)),ll(e,i,iu(e,i,n.ch,a),s)}function _n(e,n,s,i,a,h){i=i||Je(e.doc,n.line),a||(a=ki(e,i));function m(ye,be){var Ae=Er(e,a,ye,be?"right":"left",h);return be?Ae.left=Ae.right:Ae.right=Ae.left,ll(e,i,Ae,s)}var x=bt(i,e.doc.direction),w=n.ch,_=n.sticky;if(w>=i.text.length?(w=i.text.length,_="before"):w<=0&&(w=0,_="after"),!x)return m(_=="before"?w-1:w,_=="before");function z(ye,be,Ae){var Ee=x[be],Fe=Ee.level==1;return m(Ae?ye-1:ye,Fe!=Ae)}var q=Br(x,w,_),se=Rr,ne=z(w,q,_=="before");return se!=null&&(ne.other=z(w,se,_!="before")),ne}function wa(e,n){var s=0;n=gt(e.doc,n),e.options.lineWrapping||(s=fs(e.display)*n.ch);var i=Je(e.doc,n.line),a=Sn(i)+fo(e.display);return{left:s,right:s,top:a,bottom:a+i.height}}function cl(e,n,s,i,a){var h=pe(e,n,s);return h.xRel=a,i&&(h.outside=i),h}function dl(e,n,s){var i=e.doc;if(s+=e.display.viewOffset,s<0)return cl(i.first,0,null,-1,-1);var a=U(i,s),h=i.first+i.size-1;if(a>h)return cl(i.first+i.size-1,Je(i,h).text.length,null,1,1);n<0&&(n=0);for(var m=Je(i,a);;){var x=ip(e,m,a,n,s),w=Tt(m,x.ch+(x.xRel>0||x.outside>0?1:0));if(!w)return x;var _=w.find(1);if(_.line==a)return _;m=Je(i,a=_.line)}}function uu(e,n,s,i){i-=lu(n);var a=n.text.length,h=nr(function(m){return Er(e,s,m-1).bottom<=i},a,0);return a=nr(function(m){return Er(e,s,m).top>i},h,a),{begin:h,end:a}}function cu(e,n,s,i){s||(s=ki(e,n));var a=ll(e,n,Er(e,s,i),"line").top;return uu(e,n,s,a)}function go(e,n,s,i){return e.bottom<=s?!1:e.top>s?!0:(i?e.left:e.right)>n}function ip(e,n,s,i,a){a-=Sn(n);var h=ki(e,n),m=lu(n),x=0,w=n.text.length,_=!0,z=bt(n,e.doc.direction);if(z){var q=(e.options.lineWrapping?ka:sp)(e,n,s,h,z,i,a);_=q.level!=1,x=_?q.from:q.to-1,w=_?q.to:q.from-1}var se=null,ne=null,ye=nr(function(ot){var Ve=Er(e,h,ot);return Ve.top+=m,Ve.bottom+=m,go(Ve,i,a,!1)?(Ve.top<=a&&Ve.left<=i&&(se=ot,ne=Ve),!0):!1},x,w),be,Ae,Ee=!1;if(ne){var Fe=i-ne.left<ne.right-i,ze=Fe==_;ye=se+(ze?0:1),Ae=ze?"after":"before",be=Fe?ne.left:ne.right}else{!_&&(ye==w||ye==x)&&ye++,Ae=ye==0?"after":ye==n.text.length?"before":Er(e,h,ye-(_?1:0)).bottom+m<=a==_?"after":"before";var Ge=_n(e,pe(s,ye,Ae),"line",n,h);be=Ge.left,Ee=a<Ge.top?-1:a>=Ge.bottom?1:0}return ye=Xt(n.text,ye,1),cl(s,ye,Ae,Ee,i-be)}function sp(e,n,s,i,a,h,m){var x=nr(function(q){var se=a[q],ne=se.level!=1;return go(_n(e,pe(s,ne?se.to:se.from,ne?"before":"after"),"line",n,i),h,m,!0)},0,a.length-1),w=a[x];if(x>0){var _=w.level!=1,z=_n(e,pe(s,_?w.from:w.to,_?"after":"before"),"line",n,i);go(z,h,m,!0)&&z.top>m&&(w=a[x-1])}return w}function ka(e,n,s,i,a,h,m){var x=uu(e,n,i,m),w=x.begin,_=x.end;/\s/.test(n.text.charAt(_-1))&&_--;for(var z=null,q=null,se=0;se<a.length;se++){var ne=a[se];if(!(ne.from>=_||ne.to<=w)){var ye=ne.level!=1,be=Er(e,i,ye?Math.min(_,ne.to)-1:Math.max(w,ne.from)).right,Ae=be<h?h-be+1e9:be-h;(!z||q>Ae)&&(z=ne,q=Ae)}}return z||(z=a[a.length-1]),z.from<w&&(z={from:w,to:z.to,level:z.level}),z.to>_&&(z={from:z.from,to:_,level:z.level}),z}var Ki;function Si(e){if(e.cachedTextHeight!=null)return e.cachedTextHeight;if(Ki==null){Ki=E("pre",null,"CodeMirror-line-like");for(var n=0;n<49;++n)Ki.appendChild(document.createTextNode("x")),Ki.appendChild(E("br"));Ki.appendChild(document.createTextNode("x"))}he(e.measure,Ki);var s=Ki.offsetHeight/50;return s>3&&(e.cachedTextHeight=s),V(e.measure),s||1}function fs(e){if(e.cachedCharWidth!=null)return e.cachedCharWidth;var n=E("span","xxxxxxxxxx"),s=E("pre",[n],"CodeMirror-line-like");he(e.measure,s);var i=n.getBoundingClientRect(),a=(i.right-i.left)/10;return a>2&&(e.cachedCharWidth=a),a||10}function pl(e){for(var n=e.display,s={},i={},a=n.gutters.clientLeft,h=n.gutters.firstChild,m=0;h;h=h.nextSibling,++m){var x=e.display.gutterSpecs[m].className;s[x]=h.offsetLeft+h.clientLeft+a,i[x]=h.clientWidth}return{fixedPos:Sa(n),gutterTotalWidth:n.gutters.offsetWidth,gutterLeft:s,gutterWidth:i,wrapperWidth:n.wrapper.clientWidth}}function Sa(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Fs(e){var n=Si(e.display),s=e.options.lineWrapping,i=s&&Math.max(5,e.display.scroller.clientWidth/fs(e.display)-3);return function(a){if(Nr(e.doc,a))return 0;var h=0;if(a.widgets)for(var m=0;m<a.widgets.length;m++)a.widgets[m].height&&(h+=a.widgets[m].height);return s?h+(Math.ceil(a.text.length/i)||1)*n:h+n}}function yo(e){var n=e.doc,s=Fs(e);n.iter(function(i){var a=s(i);a!=i.height&&Yn(i,a)})}function ms(e,n,s,i){var a=e.display;if(!s&&mi(n).getAttribute("cm-not-content")=="true")return null;var h,m,x=a.lineSpace.getBoundingClientRect();try{h=n.clientX-x.left,m=n.clientY-x.top}catch{return null}var w=dl(e,h,m),_;if(i&&w.xRel>0&&(_=Je(e.doc,w.line).text).length==w.ch){var z=Ke(_,_.length,e.options.tabSize)-_.length;w=pe(w.line,Math.max(0,Math.round((h-ru(e.display).left)/fs(e.display))-z))}return w}function _i(e,n){if(n>=e.display.viewTo||(n-=e.display.viewFrom,n<0))return null;for(var s=e.display.view,i=0;i<s.length;i++)if(n-=s[i].size,n<0)return i}function sr(e,n,s,i){n==null&&(n=e.doc.first),s==null&&(s=e.doc.first+e.doc.size),i||(i=0);var a=e.display;if(i&&s<a.viewTo&&(a.updateLineNumbers==null||a.updateLineNumbers>n)&&(a.updateLineNumbers=n),e.curOp.viewChanged=!0,n>=a.viewTo)Mn&&fr(e.doc,n)<a.viewTo&&Gi(e);else if(s<=a.viewFrom)Mn&&dn(e.doc,s+i)>a.viewFrom?Gi(e):(a.viewFrom+=i,a.viewTo+=i);else if(n<=a.viewFrom&&s>=a.viewTo)Gi(e);else if(n<=a.viewFrom){var h=vo(e,s,s+i,1);h?(a.view=a.view.slice(h.index),a.viewFrom=h.lineN,a.viewTo+=i):Gi(e)}else if(s>=a.viewTo){var m=vo(e,n,n,-1);m?(a.view=a.view.slice(0,m.index),a.viewTo=m.lineN):Gi(e)}else{var x=vo(e,n,n,-1),w=vo(e,s,s+i,1);x&&w?(a.view=a.view.slice(0,x.index).concat(il(e,x.lineN,w.lineN)).concat(a.view.slice(w.index)),a.viewTo+=i):Gi(e)}var _=a.externalMeasured;_&&(s<_.lineN?_.lineN+=i:n<_.lineN+_.size&&(a.externalMeasured=null))}function $i(e,n,s){e.curOp.viewChanged=!0;var i=e.display,a=e.display.externalMeasured;if(a&&n>=a.lineN&&n<a.lineN+a.size&&(i.externalMeasured=null),!(n<i.viewFrom||n>=i.viewTo)){var h=i.view[_i(e,n)];if(h.node!=null){var m=h.changes||(h.changes=[]);$e(m,s)==-1&&m.push(s)}}}function Gi(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function vo(e,n,s,i){var a=_i(e,n),h,m=e.display.view;if(!Mn||s==e.doc.first+e.doc.size)return{index:a,lineN:s};for(var x=e.display.viewFrom,w=0;w<a;w++)x+=m[w].size;if(x!=n){if(i>0){if(a==m.length-1)return null;h=x+m[a].size-n,a++}else h=x-n;n+=h,s+=h}for(;fr(e.doc,s)!=s;){if(a==(i<0?0:m.length-1))return null;s+=i*m[a-(i<0?1:0)].size,a+=i}return{index:a,lineN:s}}function Cc(e,n,s){var i=e.display,a=i.view;a.length==0||n>=i.viewTo||s<=i.viewFrom?(i.view=il(e,n,s),i.viewFrom=n):(i.viewFrom>n?i.view=il(e,n,i.viewFrom).concat(i.view):i.viewFrom<n&&(i.view=i.view.slice(_i(e,n))),i.viewFrom=n,i.viewTo<s?i.view=i.view.concat(il(e,i.viewTo,s)):i.viewTo>s&&(i.view=i.view.slice(0,_i(e,s)))),i.viewTo=s}function du(e){for(var n=e.display.view,s=0,i=0;i<n.length;i++){var a=n[i];!a.hidden&&(!a.node||a.changes)&&++s}return s}function Gr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function hl(e,n){n===void 0&&(n=!0);var s=e.doc,i={},a=i.cursors=document.createDocumentFragment(),h=i.selection=document.createDocumentFragment(),m=e.options.$customCursor;m&&(n=!0);for(var x=0;x<s.sel.ranges.length;x++)if(!(!n&&x==s.sel.primIndex)){var w=s.sel.ranges[x];if(!(w.from().line>=e.display.viewTo||w.to().line<e.display.viewFrom)){var _=w.empty();if(m){var z=m(e,w);z&&xo(e,z,a)}else(_||e.options.showCursorWhenSelecting)&&xo(e,w.head,a);_||ap(e,w,h)}}return i}function xo(e,n,s){var i=_n(e,n,"div",null,null,!e.options.singleCursorHeightPerLine),a=s.appendChild(E("div"," ","CodeMirror-cursor"));if(a.style.left=i.left+"px",a.style.top=i.top+"px",a.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var h=ul(e,n,"div",null,null),m=h.right-h.left;a.style.width=(m>0?m:e.defaultCharWidth())+"px"}if(i.other){var x=s.appendChild(E("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));x.style.display="",x.style.left=i.other.left+"px",x.style.top=i.other.top+"px",x.style.height=(i.other.bottom-i.other.top)*.85+"px"}}function fl(e,n){return e.top-n.top||e.left-n.left}function ap(e,n,s){var i=e.display,a=e.doc,h=document.createDocumentFragment(),m=ru(e.display),x=m.left,w=Math.max(i.sizerWidth,ps(e)-i.sizer.offsetLeft)-m.right,_=a.direction=="ltr";function z(ze,Ge,ot,Ve){Ge<0&&(Ge=0),Ge=Math.round(Ge),Ve=Math.round(Ve),h.appendChild(E("div",null,"CodeMirror-selected","position: absolute; left: "+ze+`px;
                             top: `+Ge+"px; width: "+(ot??w-ze)+`px;
                             height: `+(Ve-Ge)+"px"))}function q(ze,Ge,ot){var Ve=Je(a,ze),St=Ve.text.length,Et,Bn;function sn(yn,br){return ul(e,pe(ze,yn),"div",Ve,br)}function xr(yn,br,Tn){var vn=cu(e,Ve,null,yn),Dt=br=="ltr"==(Tn=="after")?"left":"right",dt=Tn=="after"?vn.begin:vn.end-(/\s/.test(Ve.text.charAt(vn.end-1))?2:1);return sn(dt,Dt)[Dt]}var lr=bt(Ve,a.direction);return Sr(lr,Ge||0,ot??St,function(yn,br,Tn,vn){var Dt=Tn=="ltr",dt=sn(yn,Dt?"left":"right"),zt=sn(br-1,Dt?"right":"left"),an=Ge==null&&yn==0,un=ot==null&&br==St,Ut=vn==0,wr=!lr||vn==lr.length-1;if(zt.top-dt.top<=3){var Lt=(_?an:un)&&Ut,la=(_?un:an)&&wr,kr=Lt?x:(Dt?dt:zt).left,Ri=la?w:(Dt?zt:dt).right;z(kr,dt.top,Ri-kr,dt.bottom)}else{var es,An,Un,Uo;Dt?(es=_&&an&&Ut?x:dt.left,An=_?w:xr(yn,Tn,"before"),Un=_?x:xr(br,Tn,"after"),Uo=_&&un&&wr?w:zt.right):(es=_?xr(yn,Tn,"before"):x,An=!_&&an&&Ut?w:dt.right,Un=!_&&un&&wr?x:zt.left,Uo=_?xr(br,Tn,"after"):w),z(es,dt.top,An-es,dt.bottom),dt.bottom<zt.top&&z(x,dt.bottom,null,zt.top),z(Un,zt.top,Uo-Un,zt.bottom)}(!Et||fl(dt,Et)<0)&&(Et=dt),fl(zt,Et)<0&&(Et=zt),(!Bn||fl(dt,Bn)<0)&&(Bn=dt),fl(zt,Bn)<0&&(Bn=zt)}),{start:Et,end:Bn}}var se=n.from(),ne=n.to();if(se.line==ne.line)q(se.line,se.ch,ne.ch);else{var ye=Je(a,se.line),be=Je(a,ne.line),Ae=Kt(ye)==Kt(be),Ee=q(se.line,se.ch,Ae?ye.text.length+1:null).end,Fe=q(ne.line,Ae?0:null,ne.ch).start;Ae&&(Ee.top<Fe.top-2?(z(Ee.right,Ee.top,null,Ee.bottom),z(x,Fe.top,Fe.left,Fe.bottom)):z(Ee.right,Ee.top,Fe.left-Ee.right,Ee.bottom)),Ee.bottom<Fe.top&&z(x,Ee.bottom,null,Fe.top)}s.appendChild(h)}function Ws(e){if(e.state.focused){var n=e.display;clearInterval(n.blinker);var s=!0;n.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?n.blinker=setInterval(function(){e.hasFocus()||Wt(e),n.cursorDiv.style.visibility=(s=!s)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(n.cursorDiv.style.visibility="hidden")}}function Tc(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||gl(e))}function ml(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Wt(e))},100)}function gl(e,n){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),e.options.readOnly!="nocursor"&&(e.state.focused||(It(e,"focus",e,n),e.state.focused=!0,K(e.display.wrapper,"CodeMirror-focused"),!e.curOp&&e.display.selForContextMenu!=e.doc.sel&&(e.display.input.reset(),L&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Ws(e))}function Wt(e,n){e.state.delayingBlurEvent||(e.state.focused&&(It(e,"blur",e,n),e.state.focused=!1,Ce(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function _a(e){for(var n=e.display,s=n.lineDiv.offsetTop,i=Math.max(0,n.scroller.getBoundingClientRect().top),a=n.lineDiv.getBoundingClientRect().top,h=0,m=0;m<n.view.length;m++){var x=n.view[m],w=e.options.lineWrapping,_=void 0,z=0;if(!x.hidden){if(a+=x.line.height,k&&j<8){var q=x.node.offsetTop+x.node.offsetHeight;_=q-s,s=q}else{var se=x.node.getBoundingClientRect();_=se.bottom-se.top,!w&&x.text.firstChild&&(z=x.text.firstChild.getBoundingClientRect().right-se.left-1)}var ne=x.line.height-_;if((ne>.005||ne<-.005)&&(a<i&&(h-=ne),Yn(x.line,_),bo(x.line),x.rest))for(var ye=0;ye<x.rest.length;ye++)bo(x.rest[ye]);if(z>e.display.sizerWidth){var be=Math.ceil(z/fs(e.display));be>e.display.maxLineLength&&(e.display.maxLineLength=be,e.display.maxLine=x.line,e.display.maxLineChanged=!0)}}}Math.abs(h)>2&&(n.scroller.scrollTop+=h)}function bo(e){if(e.widgets)for(var n=0;n<e.widgets.length;++n){var s=e.widgets[n],i=s.node.parentNode;i&&(s.height=i.offsetHeight)}}function gs(e,n,s){var i=s&&s.top!=null?Math.max(0,s.top):e.scroller.scrollTop;i=Math.floor(i-fo(e));var a=s&&s.bottom!=null?s.bottom:i+e.wrapper.clientHeight,h=U(n,i),m=U(n,a);if(s&&s.ensure){var x=s.ensure.from.line,w=s.ensure.to.line;x<h?(h=x,m=U(n,Sn(Je(n,x))+e.wrapper.clientHeight)):Math.min(w,n.lastLine())>=m&&(h=U(n,Sn(Je(n,w))-e.wrapper.clientHeight),m=w)}return{from:h,to:Math.max(m,h+1)}}function jc(e,n){if(!qt(e,"scrollCursorIntoView")){var s=e.display,i=s.sizer.getBoundingClientRect(),a=null,h=s.wrapper.ownerDocument;if(n.top+i.top<0?a=!0:n.bottom+i.top>(h.defaultView.innerHeight||h.documentElement.clientHeight)&&(a=!1),a!=null&&!M){var m=E("div","​",null,`position: absolute;
                         top: `+(n.top-s.viewOffset-fo(e.display))+`px;
                         height: `+(n.bottom-n.top+si(e)+s.barHeight)+`px;
                         left: `+n.left+"px; width: "+Math.max(2,n.right-n.left)+"px;");e.display.lineSpace.appendChild(m),m.scrollIntoView(a),e.display.lineSpace.removeChild(m)}}}function pu(e,n,s,i){i==null&&(i=0);var a;!e.options.lineWrapping&&n==s&&(s=n.sticky=="before"?pe(n.line,n.ch+1,"before"):n,n=n.ch?pe(n.line,n.sticky=="before"?n.ch-1:n.ch,"after"):n);for(var h=0;h<5;h++){var m=!1,x=_n(e,n),w=!s||s==n?x:_n(e,s);a={left:Math.min(x.left,w.left),top:Math.min(x.top,w.top)-i,right:Math.max(x.left,w.left),bottom:Math.max(x.bottom,w.bottom)+i};var _=Ca(e,a),z=e.doc.scrollTop,q=e.doc.scrollLeft;if(_.scrollTop!=null&&(vs(e,_.scrollTop),Math.abs(e.doc.scrollTop-z)>1&&(m=!0)),_.scrollLeft!=null&&(Yi(e,_.scrollLeft),Math.abs(e.doc.scrollLeft-q)>1&&(m=!0)),!m)break}return a}function wo(e,n){var s=Ca(e,n);s.scrollTop!=null&&vs(e,s.scrollTop),s.scrollLeft!=null&&Yi(e,s.scrollLeft)}function Ca(e,n){var s=e.display,i=Si(e.display);n.top<0&&(n.top=0);var a=e.curOp&&e.curOp.scrollTop!=null?e.curOp.scrollTop:s.scroller.scrollTop,h=hs(e),m={};n.bottom-n.top>h&&(n.bottom=n.top+h);var x=e.doc.height+sl(s),w=n.top<i,_=n.bottom>x-i;if(n.top<a)m.scrollTop=w?0:n.top;else if(n.bottom>a+h){var z=Math.min(n.top,(_?x:n.bottom)-h);z!=a&&(m.scrollTop=z)}var q=e.options.fixedGutter?0:s.gutters.offsetWidth,se=e.curOp&&e.curOp.scrollLeft!=null?e.curOp.scrollLeft:s.scroller.scrollLeft-q,ne=ps(e)-s.gutters.offsetWidth,ye=n.right-n.left>ne;return ye&&(n.right=n.left+ne),n.left<10?m.scrollLeft=0:n.left<se?m.scrollLeft=Math.max(0,n.left+q-(ye?0:10)):n.right>ne+se-3&&(m.scrollLeft=n.right+(ye?0:10)-ne),m}function ys(e,n){n!=null&&(So(e),e.curOp.scrollTop=(e.curOp.scrollTop==null?e.doc.scrollTop:e.curOp.scrollTop)+n)}function Hs(e){So(e);var n=e.getCursor();e.curOp.scrollToPos={from:n,to:n,margin:e.options.cursorScrollMargin}}function ko(e,n,s){(n!=null||s!=null)&&So(e),n!=null&&(e.curOp.scrollLeft=n),s!=null&&(e.curOp.scrollTop=s)}function op(e,n){So(e),e.curOp.scrollToPos=n}function So(e){var n=e.curOp.scrollToPos;if(n){e.curOp.scrollToPos=null;var s=wa(e,n.from),i=wa(e,n.to);_o(e,s,i,n.margin)}}function _o(e,n,s,i){var a=Ca(e,{left:Math.min(n.left,s.left),top:Math.min(n.top,s.top)-i,right:Math.max(n.right,s.right),bottom:Math.max(n.bottom,s.bottom)+i});ko(e,a.scrollLeft,a.scrollTop)}function vs(e,n){Math.abs(e.doc.scrollTop-n)<2||(y||Xi(e,{top:n}),yl(e,n,!0),y&&Xi(e),qs(e,100))}function yl(e,n,s){n=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,n)),!(e.display.scroller.scrollTop==n&&!s)&&(e.doc.scrollTop=n,e.display.scrollbars.setScrollTop(n),e.display.scroller.scrollTop!=n&&(e.display.scroller.scrollTop=n))}function Yi(e,n,s,i){n=Math.max(0,Math.min(n,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),!((s?n==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-n)<2)&&!i)&&(e.doc.scrollLeft=n,fu(e),e.display.scroller.scrollLeft!=n&&(e.display.scroller.scrollLeft=n),e.display.scrollbars.setScrollLeft(n))}function Bs(e){var n=e.display,s=n.gutters.offsetWidth,i=Math.round(e.doc.height+sl(e.display));return{clientHeight:n.scroller.clientHeight,viewHeight:n.wrapper.clientHeight,scrollWidth:n.scroller.scrollWidth,clientWidth:n.scroller.clientWidth,viewWidth:n.wrapper.clientWidth,barLeft:e.options.fixedGutter?s:0,docHeight:i,scrollHeight:i+si(e)+n.barHeight,nativeBarWidth:n.nativeBarWidth,gutterWidth:s}}var Vi=function(e,n,s){this.cm=s;var i=this.vert=E("div",[E("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),a=this.horiz=E("div",[E("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=a.tabIndex=-1,e(i),e(a),rt(i,"scroll",function(){i.clientHeight&&n(i.scrollTop,"vertical")}),rt(a,"scroll",function(){a.clientWidth&&n(a.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,k&&j<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Vi.prototype.update=function(e){var n=e.scrollWidth>e.clientWidth+1,s=e.scrollHeight>e.clientHeight+1,i=e.nativeBarWidth;if(s){this.vert.style.display="block",this.vert.style.bottom=n?i+"px":"0";var a=e.viewHeight-(n?i:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+a)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(n){this.horiz.style.display="block",this.horiz.style.right=s?i+"px":"0",this.horiz.style.left=e.barLeft+"px";var h=e.viewWidth-e.barLeft-(s?i:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+h)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(i==0&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:s?i:0,bottom:n?i:0}},Vi.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Vi.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Vi.prototype.zeroWidthHack=function(){var e=G&&!X?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new et,this.disableVert=new et},Vi.prototype.enableZeroWidthBar=function(e,n,s){e.style.visibility="";function i(){var a=e.getBoundingClientRect(),h=s=="vert"?document.elementFromPoint(a.right-1,(a.top+a.bottom)/2):document.elementFromPoint((a.right+a.left)/2,a.bottom-1);h!=e?e.style.visibility="hidden":n.set(1e3,i)}n.set(1e3,i)},Vi.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var Co=function(){};Co.prototype.update=function(){return{bottom:0,right:0}},Co.prototype.setScrollLeft=function(){},Co.prototype.setScrollTop=function(){},Co.prototype.clear=function(){};function Us(e,n){n||(n=Bs(e));var s=e.display.barWidth,i=e.display.barHeight;Nc(e,n);for(var a=0;a<4&&s!=e.display.barWidth||i!=e.display.barHeight;a++)s!=e.display.barWidth&&e.options.lineWrapping&&_a(e),Nc(e,Bs(e)),s=e.display.barWidth,i=e.display.barHeight}function Nc(e,n){var s=e.display,i=s.scrollbars.update(n);s.sizer.style.paddingRight=(s.barWidth=i.right)+"px",s.sizer.style.paddingBottom=(s.barHeight=i.bottom)+"px",s.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(s.scrollbarFiller.style.display="block",s.scrollbarFiller.style.height=i.bottom+"px",s.scrollbarFiller.style.width=i.right+"px"):s.scrollbarFiller.style.display="",i.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(s.gutterFiller.style.display="block",s.gutterFiller.style.height=i.bottom+"px",s.gutterFiller.style.width=n.gutterWidth+"px"):s.gutterFiller.style.display=""}var Ec={native:Vi,null:Co};function vl(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Ce(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Ec[e.options.scrollbarStyle](function(n){e.display.wrapper.insertBefore(n,e.display.scrollbarFiller),rt(n,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),n.setAttribute("cm-not-content","true")},function(n,s){s=="horizontal"?Yi(e,n):vs(e,n)},e),e.display.scrollbars.addClass&&K(e.display.wrapper,e.display.scrollbars.addClass)}var xs=0;function bs(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++xs,markArrays:null},mc(e.curOp)}function Yr(e){var n=e.curOp;n&&Jd(n,function(s){for(var i=0;i<s.ops.length;i++)s.ops[i].cm.curOp=null;Ci(s)})}function Ci(e){for(var n=e.ops,s=0;s<n.length;s++)To(n[s]);for(var i=0;i<n.length;i++)Ji(n[i]);for(var a=0;a<n.length;a++)hu(n[a]);for(var h=0;h<n.length;h++)lp(n[h]);for(var m=0;m<n.length;m++)up(n[m])}function To(e){var n=e.cm,s=n.display;nn(n),e.updateMaxLine&&lo(n),e.mustUpdate=e.viewChanged||e.forceUpdate||e.scrollTop!=null||e.scrollToPos&&(e.scrollToPos.from.line<s.viewFrom||e.scrollToPos.to.line>=s.viewTo)||s.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new ai(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Ji(e){e.updatedDisplay=e.mustUpdate&&Jn(e.cm,e.update)}function hu(e){var n=e.cm,s=n.display;e.updatedDisplay&&_a(n),e.barMeasure=Bs(n),s.maxLineChanged&&!n.options.lineWrapping&&(e.adjustWidthTo=iu(n,s.maxLine,s.maxLine.text.length).left+3,n.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(s.scroller.clientWidth,s.sizer.offsetLeft+e.adjustWidthTo+si(n)+n.display.barWidth),e.maxScrollLeft=Math.max(0,s.sizer.offsetLeft+e.adjustWidthTo-ps(n))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=s.input.prepareSelection())}function lp(e){var n=e.cm;e.adjustWidthTo!=null&&(n.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<n.doc.scrollLeft&&Yi(n,Math.min(n.display.scroller.scrollLeft,e.maxScrollLeft),!0),n.display.maxLineChanged=!1);var s=e.focus&&e.focus==N(Ie(n));e.preparedSelection&&n.display.input.showSelection(e.preparedSelection,s),(e.updatedDisplay||e.startHeight!=n.doc.height)&&Us(n,e.barMeasure),e.updatedDisplay&&Na(n,e.barMeasure),e.selectionChanged&&Ws(n),n.state.focused&&e.updateInput&&n.display.input.reset(e.typing),s&&Tc(e.cm)}function up(e){var n=e.cm,s=n.display,i=n.doc;if(e.updatedDisplay&&mr(n,e.update),s.wheelStartX!=null&&(e.scrollTop!=null||e.scrollLeft!=null||e.scrollToPos)&&(s.wheelStartX=s.wheelStartY=null),e.scrollTop!=null&&yl(n,e.scrollTop,e.forceScroll),e.scrollLeft!=null&&Yi(n,e.scrollLeft,!0,!0),e.scrollToPos){var a=pu(n,gt(i,e.scrollToPos.from),gt(i,e.scrollToPos.to),e.scrollToPos.margin);jc(n,a)}var h=e.maybeHiddenMarkers,m=e.maybeUnhiddenMarkers;if(h)for(var x=0;x<h.length;++x)h[x].lines.length||It(h[x],"hide");if(m)for(var w=0;w<m.length;++w)m[w].lines.length&&It(m[w],"unhide");s.wrapper.offsetHeight&&(i.scrollTop=n.display.scroller.scrollTop),e.changeObjs&&It(n,"changes",n,e.changeObjs),e.update&&e.update.finish()}function Ln(e,n){if(e.curOp)return n();bs(e);try{return n()}finally{Yr(e)}}function pn(e,n){return function(){if(e.curOp)return n.apply(e,arguments);bs(e);try{return n.apply(e,arguments)}finally{Yr(e)}}}function Cn(e){return function(){if(this.curOp)return e.apply(this,arguments);bs(this);try{return e.apply(this,arguments)}finally{Yr(this)}}}function gn(e){return function(){var n=this.cm;if(!n||n.curOp)return e.apply(this,arguments);bs(n);try{return e.apply(this,arguments)}finally{Yr(n)}}}function qs(e,n){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(n,Se(Ta,e))}function Ta(e){var n=e.doc;if(!(n.highlightFrontier>=e.display.viewTo)){var s=+new Date+e.options.workTime,i=Nt(e,n.highlightFrontier),a=[];n.iter(i.line,Math.min(n.first+n.size,e.display.viewTo+500),function(h){if(i.line>=e.display.viewFrom){var m=h.styles,x=h.text.length>e.options.maxHighlightLength?Rt(n.mode,i.state):null,w=io(e,h,i,!0);x&&(i.state=x),h.styles=w.styles;var _=h.styleClasses,z=w.classes;z?h.styleClasses=z:_&&(h.styleClasses=null);for(var q=!m||m.length!=h.styles.length||_!=z&&(!_||!z||_.bgClass!=z.bgClass||_.textClass!=z.textClass),se=0;!q&&se<m.length;++se)q=m[se]!=h.styles[se];q&&a.push(i.line),h.stateAfter=i.save(),i.nextLine()}else h.text.length<=e.options.maxHighlightLength&&cs(e,h.text,i),h.stateAfter=i.line%5==0?i.save():null,i.nextLine();if(+new Date>s)return qs(e,e.options.workDelay),!0}),n.highlightFrontier=i.line,n.modeFrontier=Math.max(n.modeFrontier,i.line),a.length&&Ln(e,function(){for(var h=0;h<a.length;h++)$i(e,a[h],"text")})}}var ai=function(e,n,s){var i=e.display;this.viewport=n,this.visible=gs(i,e.doc,n),this.editorIsHidden=!i.wrapper.offsetWidth,this.wrapperHeight=i.wrapper.clientHeight,this.wrapperWidth=i.wrapper.clientWidth,this.oldDisplayWidth=ps(e),this.force=s,this.dims=pl(e),this.events=[]};ai.prototype.signal=function(e,n){mn(e,n)&&this.events.push(arguments)},ai.prototype.finish=function(){for(var e=0;e<this.events.length;e++)It.apply(null,this.events[e])};function nn(e){var n=e.display;!n.scrollbarsClipped&&n.scroller.offsetWidth&&(n.nativeBarWidth=n.scroller.offsetWidth-n.scroller.clientWidth,n.heightForcer.style.height=si(e)+"px",n.sizer.style.marginBottom=-n.nativeBarWidth+"px",n.sizer.style.borderRightWidth=si(e)+"px",n.scrollbarsClipped=!0)}function Zt(e){if(e.hasFocus())return null;var n=N(Ie(e));if(!n||!A(e.display.lineDiv,n))return null;var s={activeElt:n};if(window.getSelection){var i=Oe(e).getSelection();i.anchorNode&&i.extend&&A(e.display.lineDiv,i.anchorNode)&&(s.anchorNode=i.anchorNode,s.anchorOffset=i.anchorOffset,s.focusNode=i.focusNode,s.focusOffset=i.focusOffset)}return s}function ws(e){if(!(!e||!e.activeElt||e.activeElt==N(qe(e.activeElt)))&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&A(document.body,e.anchorNode)&&A(document.body,e.focusNode))){var n=e.activeElt.ownerDocument,s=n.defaultView.getSelection(),i=n.createRange();i.setEnd(e.anchorNode,e.anchorOffset),i.collapse(!1),s.removeAllRanges(),s.addRange(i),s.extend(e.focusNode,e.focusOffset)}}function Jn(e,n){var s=e.display,i=e.doc;if(n.editorIsHidden)return Gi(e),!1;if(!n.force&&n.visible.from>=s.viewFrom&&n.visible.to<=s.viewTo&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo)&&s.renderedView==s.view&&du(e)==0)return!1;mu(e)&&(Gi(e),n.dims=pl(e));var a=i.first+i.size,h=Math.max(n.visible.from-e.options.viewportMargin,i.first),m=Math.min(a,n.visible.to+e.options.viewportMargin);s.viewFrom<h&&h-s.viewFrom<20&&(h=Math.max(i.first,s.viewFrom)),s.viewTo>m&&s.viewTo-m<20&&(m=Math.min(a,s.viewTo)),Mn&&(h=fr(e.doc,h),m=dn(e.doc,m));var x=h!=s.viewFrom||m!=s.viewTo||s.lastWrapHeight!=n.wrapperHeight||s.lastWrapWidth!=n.wrapperWidth;Cc(e,h,m),s.viewOffset=Sn(Je(e.doc,s.viewFrom)),e.display.mover.style.top=s.viewOffset+"px";var w=du(e);if(!x&&w==0&&!n.force&&s.renderedView==s.view&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo))return!1;var _=Zt(e);return w>4&&(s.lineDiv.style.display="none"),ja(e,s.updateLineNumbers,n.dims),w>4&&(s.lineDiv.style.display=""),s.renderedView=s.view,ws(_),V(s.cursorDiv),V(s.selectionDiv),s.gutters.style.height=s.sizer.style.minHeight=0,x&&(s.lastWrapHeight=n.wrapperHeight,s.lastWrapWidth=n.wrapperWidth,qs(e,400)),s.updateLineNumbers=null,!0}function mr(e,n){for(var s=n.viewport,i=!0;;i=!1){if(!i||!e.options.lineWrapping||n.oldDisplayWidth==ps(e)){if(s&&s.top!=null&&(s={top:Math.min(e.doc.height+sl(e.display)-hs(e),s.top)}),n.visible=gs(e.display,e.doc,s),n.visible.from>=e.display.viewFrom&&n.visible.to<=e.display.viewTo)break}else i&&(n.visible=gs(e.display,e.doc,s));if(!Jn(e,n))break;_a(e);var a=Bs(e);Gr(e),Us(e,a),Na(e,a),n.force=!1}n.signal(e,"update",e),(e.display.viewFrom!=e.display.reportedViewFrom||e.display.viewTo!=e.display.reportedViewTo)&&(n.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Xi(e,n){var s=new ai(e,n);if(Jn(e,s)){_a(e),mr(e,s);var i=Bs(e);Gr(e),Us(e,i),Na(e,i),s.finish()}}function ja(e,n,s){var i=e.display,a=e.options.lineNumbers,h=i.lineDiv,m=h.firstChild;function x(ye){var be=ye.nextSibling;return L&&G&&e.display.currentWheelTarget==ye?ye.style.display="none":ye.parentNode.removeChild(ye),be}for(var w=i.view,_=i.viewFrom,z=0;z<w.length;z++){var q=w[z];if(!q.hidden)if(!q.node||q.node.parentNode!=h){var se=ep(e,q,_,s);h.insertBefore(se,m)}else{for(;m!=q.node;)m=x(m);var ne=a&&n!=null&&n<=_&&q.lineNumber;q.changes&&($e(q.changes,"gutter")>-1&&(ne=!1),gc(e,q,_,s)),ne&&(V(q.lineNumber),q.lineNumber.appendChild(document.createTextNode(Ne(e.options,_)))),m=q.node.nextSibling}_+=q.size}for(;m;)m=x(m)}function ar(e){var n=e.gutters.offsetWidth;e.sizer.style.marginLeft=n+"px",Dn(e,"gutterChanged",e)}function Na(e,n){e.display.sizer.style.minHeight=n.docHeight+"px",e.display.heightForcer.style.top=n.docHeight+"px",e.display.gutters.style.height=n.docHeight+e.display.barHeight+si(e)+"px"}function fu(e){var n=e.display,s=n.view;if(!(!n.alignWidgets&&(!n.gutters.firstChild||!e.options.fixedGutter))){for(var i=Sa(n)-n.scroller.scrollLeft+e.doc.scrollLeft,a=n.gutters.offsetWidth,h=i+"px",m=0;m<s.length;m++)if(!s[m].hidden){e.options.fixedGutter&&(s[m].gutter&&(s[m].gutter.style.left=h),s[m].gutterBackground&&(s[m].gutterBackground.style.left=h));var x=s[m].alignable;if(x)for(var w=0;w<x.length;w++)x[w].style.left=h}e.options.fixedGutter&&(n.gutters.style.left=i+a+"px")}}function mu(e){if(!e.options.lineNumbers)return!1;var n=e.doc,s=Ne(e.options,n.first+n.size-1),i=e.display;if(s.length!=i.lineNumChars){var a=i.measure.appendChild(E("div",[E("div",s)],"CodeMirror-linenumber CodeMirror-gutter-elt")),h=a.firstChild.offsetWidth,m=a.offsetWidth-h;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(h,i.lineGutter.offsetWidth-m)+1,i.lineNumWidth=i.lineNumInnerWidth+m,i.lineNumChars=i.lineNumInnerWidth?s.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",ar(e.display),!0}return!1}function Ea(e,n){for(var s=[],i=!1,a=0;a<e.length;a++){var h=e[a],m=null;if(typeof h!="string"&&(m=h.style,h=h.className),h=="CodeMirror-linenumbers")if(n)i=!0;else continue;s.push({className:h,style:m})}return n&&!i&&s.push({className:"CodeMirror-linenumbers",style:null}),s}function gu(e){var n=e.gutters,s=e.gutterSpecs;V(n),e.lineGutter=null;for(var i=0;i<s.length;++i){var a=s[i],h=a.className,m=a.style,x=n.appendChild(E("div",null,"CodeMirror-gutter "+h));m&&(x.style.cssText=m),h=="CodeMirror-linenumbers"&&(e.lineGutter=x,x.style.width=(e.lineNumWidth||1)+"px")}n.style.display=s.length?"":"none",ar(e)}function zr(e){gu(e.display),sr(e),fu(e)}function xl(e,n,s,i){var a=this;this.input=s,a.scrollbarFiller=E("div",null,"CodeMirror-scrollbar-filler"),a.scrollbarFiller.setAttribute("cm-not-content","true"),a.gutterFiller=E("div",null,"CodeMirror-gutter-filler"),a.gutterFiller.setAttribute("cm-not-content","true"),a.lineDiv=Z("div",null,"CodeMirror-code"),a.selectionDiv=E("div",null,null,"position: relative; z-index: 1"),a.cursorDiv=E("div",null,"CodeMirror-cursors"),a.measure=E("div",null,"CodeMirror-measure"),a.lineMeasure=E("div",null,"CodeMirror-measure"),a.lineSpace=Z("div",[a.measure,a.lineMeasure,a.selectionDiv,a.cursorDiv,a.lineDiv],null,"position: relative; outline: none");var h=Z("div",[a.lineSpace],"CodeMirror-lines");a.mover=E("div",[h],null,"position: relative"),a.sizer=E("div",[a.mover],"CodeMirror-sizer"),a.sizerWidth=null,a.heightForcer=E("div",null,null,"position: absolute; height: "+Ft+"px; width: 1px;"),a.gutters=E("div",null,"CodeMirror-gutters"),a.lineGutter=null,a.scroller=E("div",[a.sizer,a.heightForcer,a.gutters],"CodeMirror-scroll"),a.scroller.setAttribute("tabIndex","-1"),a.wrapper=E("div",[a.scrollbarFiller,a.gutterFiller,a.scroller],"CodeMirror"),R&&J===105&&(a.wrapper.style.clipPath="inset(0px)"),a.wrapper.setAttribute("translate","no"),k&&j<8&&(a.gutters.style.zIndex=-1,a.scroller.style.paddingRight=0),!L&&!(y&&W)&&(a.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(a.wrapper):e(a.wrapper)),a.viewFrom=a.viewTo=n.first,a.reportedViewFrom=a.reportedViewTo=n.first,a.view=[],a.renderedView=null,a.externalMeasured=null,a.viewOffset=0,a.lastWrapHeight=a.lastWrapWidth=0,a.updateLineNumbers=null,a.nativeBarWidth=a.barHeight=a.barWidth=0,a.scrollbarsClipped=!1,a.lineNumWidth=a.lineNumInnerWidth=a.lineNumChars=null,a.alignWidgets=!1,a.cachedCharWidth=a.cachedTextHeight=a.cachedPaddingH=null,a.maxLine=null,a.maxLineLength=0,a.maxLineChanged=!1,a.wheelDX=a.wheelDY=a.wheelStartX=a.wheelStartY=null,a.shift=!1,a.selForContextMenu=null,a.activeTouch=null,a.gutterSpecs=Ea(i.gutters,i.lineNumbers),gu(a),s.init(a)}var La=0,Ti=null;k?Ti=-.53:y?Ti=15:R?Ti=-.7:Y&&(Ti=-1/3);function Lc(e){var n=e.wheelDeltaX,s=e.wheelDeltaY;return n==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(n=e.detail),s==null&&e.detail&&e.axis==e.VERTICAL_AXIS?s=e.detail:s==null&&(s=e.wheelDelta),{x:n,y:s}}function ks(e){var n=Lc(e);return n.x*=Ti,n.y*=Ti,n}function Ks(e,n){R&&J==102&&(e.display.chromeScrollHack==null?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout(function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""},100));var s=Lc(n),i=s.x,a=s.y,h=Ti;n.deltaMode===0&&(i=n.deltaX,a=n.deltaY,h=1);var m=e.display,x=m.scroller,w=x.scrollWidth>x.clientWidth,_=x.scrollHeight>x.clientHeight;if(i&&w||a&&_){if(a&&G&&L){e:for(var z=n.target,q=m.view;z!=x;z=z.parentNode)for(var se=0;se<q.length;se++)if(q[se].node==z){e.display.currentWheelTarget=z;break e}}if(i&&!y&&!D&&h!=null){a&&_&&vs(e,Math.max(0,x.scrollTop+a*h)),Yi(e,Math.max(0,x.scrollLeft+i*h)),(!a||a&&_)&&bn(n),m.wheelStartX=null;return}if(a&&h!=null){var ne=a*h,ye=e.doc.scrollTop,be=ye+m.wrapper.clientHeight;ne<0?ye=Math.max(0,ye+ne-50):be=Math.min(e.doc.height,be+ne+50),Xi(e,{top:ye,bottom:be})}La<20&&n.deltaMode!==0&&(m.wheelStartX==null?(m.wheelStartX=x.scrollLeft,m.wheelStartY=x.scrollTop,m.wheelDX=i,m.wheelDY=a,setTimeout(function(){if(m.wheelStartX!=null){var Ae=x.scrollLeft-m.wheelStartX,Ee=x.scrollTop-m.wheelStartY,Fe=Ee&&m.wheelDY&&Ee/m.wheelDY||Ae&&m.wheelDX&&Ae/m.wheelDX;m.wheelStartX=m.wheelStartY=null,Fe&&(Ti=(Ti*La+Fe)/(La+1),++La)}},200)):(m.wheelDX+=i,m.wheelDY+=a))}}var Xn=function(e,n){this.ranges=e,this.primIndex=n};Xn.prototype.primary=function(){return this.ranges[this.primIndex]},Xn.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var n=0;n<this.ranges.length;n++){var s=this.ranges[n],i=e.ranges[n];if(!jt(s.anchor,i.anchor)||!jt(s.head,i.head))return!1}return!0},Xn.prototype.deepCopy=function(){for(var e=[],n=0;n<this.ranges.length;n++)e[n]=new At(Qt(this.ranges[n].anchor),Qt(this.ranges[n].head));return new Xn(e,this.primIndex)},Xn.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Xn.prototype.contains=function(e,n){n||(n=e);for(var s=0;s<this.ranges.length;s++){var i=this.ranges[s];if(He(n,i.from())>=0&&He(e,i.to())<=0)return s}return-1};var At=function(e,n){this.anchor=e,this.head=n};At.prototype.from=function(){return Kr(this.anchor,this.head)},At.prototype.to=function(){return kn(this.anchor,this.head)},At.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function Lr(e,n,s){var i=e&&e.options.selectionsMayTouch,a=n[s];n.sort(function(se,ne){return He(se.from(),ne.from())}),s=$e(n,a);for(var h=1;h<n.length;h++){var m=n[h],x=n[h-1],w=He(x.to(),m.from());if(i&&!m.empty()?w>0:w>=0){var _=Kr(x.from(),m.from()),z=kn(x.to(),m.to()),q=x.empty()?m.from()==m.head:x.from()==x.head;h<=s&&--s,n.splice(--h,2,new At(q?z:_,q?_:z))}}return new Xn(n,s)}function zn(e,n){return new Xn([new At(e,n||e)],0)}function Fn(e){return e.text?pe(e.from.line+e.text.length-1,Qe(e.text).length+(e.text.length==1?e.from.ch:0)):e.to}function Ss(e,n){if(He(e,n.from)<0)return e;if(He(e,n.to)<=0)return Fn(n);var s=e.line+n.text.length-(n.to.line-n.from.line)-1,i=e.ch;return e.line==n.to.line&&(i+=Fn(n).ch-n.to.ch),pe(s,i)}function oi(e,n){for(var s=[],i=0;i<e.sel.ranges.length;i++){var a=e.sel.ranges[i];s.push(new At(Ss(a.anchor,n),Ss(a.head,n)))}return Lr(e.cm,s,e.sel.primIndex)}function ji(e,n,s){return e.line==n.line?pe(s.line,e.ch-n.ch+s.ch):pe(s.line+(e.line-n.line),e.ch)}function $s(e,n,s){for(var i=[],a=pe(e.first,0),h=a,m=0;m<n.length;m++){var x=n[m],w=ji(x.from,a,h),_=ji(Fn(x),a,h);if(a=x.to,h=_,s=="around"){var z=e.sel.ranges[m],q=He(z.head,z.anchor)<0;i[m]=new At(q?_:w,q?w:_)}else i[m]=new At(w,w)}return new Xn(i,e.sel.primIndex)}function bl(e){e.doc.mode=Bt(e.options,e.doc.modeOption),Gs(e)}function Gs(e){e.doc.iter(function(n){n.stateAfter&&(n.stateAfter=null),n.styles&&(n.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,qs(e,100),e.state.modeGen++,e.curOp&&sr(e)}function wl(e,n){return n.from.ch==0&&n.to.ch==0&&Qe(n.text)==""&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function gr(e,n,s,i){function a(Fe){return s?s[Fe]:null}function h(Fe,ze,Ge){qd(Fe,ze,Ge,i),Dn(Fe,"change",Fe,n)}function m(Fe,ze){for(var Ge=[],ot=Fe;ot<ze;++ot)Ge.push(new wi(_[ot],a(ot),i));return Ge}var x=n.from,w=n.to,_=n.text,z=Je(e,x.line),q=Je(e,w.line),se=Qe(_),ne=a(_.length-1),ye=w.line-x.line;if(n.full)e.insert(0,m(0,_.length)),e.remove(_.length,e.size-_.length);else if(wl(e,n)){var be=m(0,_.length-1);h(q,q.text,ne),ye&&e.remove(x.line,ye),be.length&&e.insert(x.line,be)}else if(z==q)if(_.length==1)h(z,z.text.slice(0,x.ch)+se+z.text.slice(w.ch),ne);else{var Ae=m(1,_.length-1);Ae.push(new wi(se+z.text.slice(w.ch),ne,i)),h(z,z.text.slice(0,x.ch)+_[0],a(0)),e.insert(x.line+1,Ae)}else if(_.length==1)h(z,z.text.slice(0,x.ch)+_[0]+q.text.slice(w.ch),a(0)),e.remove(x.line+1,ye);else{h(z,z.text.slice(0,x.ch)+_[0],a(0)),h(q,se+q.text.slice(w.ch),ne);var Ee=m(1,_.length-1);ye>1&&e.remove(x.line+1,ye-1),e.insert(x.line+1,Ee)}Dn(e,"change",e,n)}function Pn(e,n,s){function i(a,h,m){if(a.linked)for(var x=0;x<a.linked.length;++x){var w=a.linked[x];if(w.doc!=h){var _=m&&w.sharedHist;s&&!_||(n(w.doc,_),i(w.doc,a,_))}}}i(e,null,!0)}function rn(e,n){if(n.cm)throw new Error("This document is already in use.");e.doc=n,n.cm=e,yo(e),bl(e),Vr(e),e.options.direction=n.direction,e.options.lineWrapping||lo(e),e.options.mode=n.modeOption,sr(e)}function Vr(e){(e.doc.direction=="rtl"?K:Ce)(e.display.lineDiv,"CodeMirror-rtl")}function Pc(e){Ln(e,function(){Vr(e),sr(e)})}function jo(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function No(e,n){var s={from:Qt(n.from),to:Fn(n),text:ri(e,n.from,n.to)};return Ic(e,s,n.from.line,n.to.line+1),Pn(e,function(i){return Ic(i,s,n.from.line,n.to.line+1)},!0),s}function kl(e){for(;e.length;){var n=Qe(e);if(n.ranges)e.pop();else break}}function Ac(e,n){if(n)return kl(e.done),Qe(e.done);if(e.done.length&&!Qe(e.done).ranges)return Qe(e.done);if(e.done.length>1&&!e.done[e.done.length-2].ranges)return e.done.pop(),Qe(e.done)}function Eo(e,n,s,i){var a=e.history;a.undone.length=0;var h=+new Date,m,x;if((a.lastOp==i||a.lastOrigin==n.origin&&n.origin&&(n.origin.charAt(0)=="+"&&a.lastModTime>h-(e.cm?e.cm.options.historyEventDelay:500)||n.origin.charAt(0)=="*"))&&(m=Ac(a,a.lastOp==i)))x=Qe(m.changes),He(n.from,n.to)==0&&He(n.from,x.to)==0?x.to=Fn(n):m.changes.push(No(e,n));else{var w=Qe(a.done);for((!w||!w.ranges)&&Aa(e.sel,a.done),m={changes:[No(e,n)],generation:a.generation},a.done.push(m);a.done.length>a.undoDepth;)a.done.shift(),a.done[0].ranges||a.done.shift()}a.done.push(s),a.generation=++a.maxGeneration,a.lastModTime=a.lastSelTime=h,a.lastOp=a.lastSelOp=i,a.lastOrigin=a.lastSelOrigin=n.origin,x||It(e,"historyAdded")}function Rc(e,n,s,i){var a=n.charAt(0);return a=="*"||a=="+"&&s.ranges.length==i.ranges.length&&s.somethingSelected()==i.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function Pa(e,n,s,i){var a=e.history,h=i&&i.origin;s==a.lastSelOp||h&&a.lastSelOrigin==h&&(a.lastModTime==a.lastSelTime&&a.lastOrigin==h||Rc(e,h,Qe(a.done),n))?a.done[a.done.length-1]=n:Aa(n,a.done),a.lastSelTime=+new Date,a.lastSelOrigin=h,a.lastSelOp=s,i&&i.clearRedo!==!1&&kl(a.undone)}function Aa(e,n){var s=Qe(n);s&&s.ranges&&s.equals(e)||n.push(e)}function Ic(e,n,s,i){var a=n["spans_"+e.id],h=0;e.iter(Math.max(e.first,s),Math.min(e.first+e.size,i),function(m){m.markedSpans&&((a||(a=n["spans_"+e.id]={}))[h]=m.markedSpans),++h})}function Lo(e){if(!e)return null;for(var n,s=0;s<e.length;++s)e[s].marker.explicitlyCleared?n||(n=e.slice(0,s)):n&&n.push(e[s]);return n?n.length?n:null:e}function Sl(e,n){var s=n["spans_"+e.id];if(!s)return null;for(var i=[],a=0;a<n.text.length;++a)i.push(Lo(s[a]));return i}function yu(e,n){var s=Sl(e,n),i=ds(e,n);if(!s)return i;if(!i)return s;for(var a=0;a<s.length;++a){var h=s[a],m=i[a];if(h&&m)e:for(var x=0;x<m.length;++x){for(var w=m[x],_=0;_<h.length;++_)if(h[_].marker==w.marker)continue e;h.push(w)}else m&&(s[a]=m)}return s}function Ys(e,n,s){for(var i=[],a=0;a<e.length;++a){var h=e[a];if(h.ranges){i.push(s?Xn.prototype.deepCopy.call(h):h);continue}var m=h.changes,x=[];i.push({changes:x});for(var w=0;w<m.length;++w){var _=m[w],z=void 0;if(x.push({from:_.from,to:_.to,text:_.text}),n)for(var q in _)(z=q.match(/^spans_(\d+)$/))&&$e(n,Number(z[1]))>-1&&(Qe(x)[q]=_[q],delete _[q])}}return i}function _s(e,n,s,i){if(i){var a=e.anchor;if(s){var h=He(n,a)<0;h!=He(s,a)<0?(a=n,n=s):h!=He(n,s)<0&&(n=s)}return new At(a,n)}else return new At(s||n,n)}function Po(e,n,s,i,a){a==null&&(a=e.cm&&(e.cm.display.shift||e.extend)),Wn(e,new Xn([_s(e.sel.primary(),n,s,a)],0),i)}function Ao(e,n,s){for(var i=[],a=e.cm&&(e.cm.display.shift||e.extend),h=0;h<e.sel.ranges.length;h++)i[h]=_s(e.sel.ranges[h],n[h],null,a);var m=Lr(e.cm,i,e.sel.primIndex);Wn(e,m,s)}function Ra(e,n,s,i){var a=e.sel.ranges.slice(0);a[n]=s,Wn(e,Lr(e.cm,a,e.sel.primIndex),i)}function Vs(e,n,s,i){Wn(e,zn(n,s),i)}function vu(e,n,s){var i={ranges:n.ranges,update:function(a){this.ranges=[];for(var h=0;h<a.length;h++)this.ranges[h]=new At(gt(e,a[h].anchor),gt(e,a[h].head))},origin:s&&s.origin};return It(e,"beforeSelectionChange",e,i),e.cm&&It(e.cm,"beforeSelectionChange",e.cm,i),i.ranges!=n.ranges?Lr(e.cm,i.ranges,i.ranges.length-1):n}function _l(e,n,s){var i=e.history.done,a=Qe(i);a&&a.ranges?(i[i.length-1]=n,Ia(e,n,s)):Wn(e,n,s)}function Wn(e,n,s){Ia(e,n,s),Pa(e,e.sel,e.cm?e.cm.curOp.id:NaN,s)}function Ia(e,n,s){(mn(e,"beforeSelectionChange")||e.cm&&mn(e.cm,"beforeSelectionChange"))&&(n=vu(e,n,s));var i=s&&s.bias||(He(n.primary().head,e.sel.primary().head)<0?-1:1);Js(e,Cs(e,n,i,!0)),!(s&&s.scroll===!1)&&e.cm&&e.cm.getOption("readOnly")!="nocursor"&&Hs(e.cm)}function Js(e,n){n.equals(e.sel)||(e.sel=n,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,xn(e.cm)),Dn(e,"cursorActivity",e))}function Fr(e){Js(e,Cs(e,e.sel,null,!1))}function Cs(e,n,s,i){for(var a,h=0;h<n.ranges.length;h++){var m=n.ranges[h],x=n.ranges.length==e.sel.ranges.length&&e.sel.ranges[h],w=Ro(e,m.anchor,x&&x.anchor,s,i),_=m.head==m.anchor?w:Ro(e,m.head,x&&x.head,s,i);(a||w!=m.anchor||_!=m.head)&&(a||(a=n.ranges.slice(0,h)),a[h]=new At(w,_))}return a?Lr(e.cm,a,n.primIndex):n}function Ts(e,n,s,i,a){var h=Je(e,n.line);if(h.markedSpans)for(var m=0;m<h.markedSpans.length;++m){var x=h.markedSpans[m],w=x.marker,_="selectLeft"in w?!w.selectLeft:w.inclusiveLeft,z="selectRight"in w?!w.selectRight:w.inclusiveRight;if((x.from==null||(_?x.from<=n.ch:x.from<n.ch))&&(x.to==null||(z?x.to>=n.ch:x.to>n.ch))){if(a&&(It(w,"beforeCursorEnter"),w.explicitlyCleared))if(h.markedSpans){--m;continue}else break;if(!w.atomic)continue;if(s){var q=w.find(i<0?1:-1),se=void 0;if((i<0?z:_)&&(q=Ni(e,q,-i,q&&q.line==n.line?h:null)),q&&q.line==n.line&&(se=He(q,s))&&(i<0?se<0:se>0))return Ts(e,q,n,i,a)}var ne=w.find(i<0?-1:1);return(i<0?_:z)&&(ne=Ni(e,ne,i,ne.line==n.line?h:null)),ne?Ts(e,ne,n,i,a):null}}return n}function Ro(e,n,s,i,a){var h=i||1,m=Ts(e,n,s,h,a)||!a&&Ts(e,n,s,h,!0)||Ts(e,n,s,-h,a)||!a&&Ts(e,n,s,-h,!0);return m||(e.cantEdit=!0,pe(e.first,0))}function Ni(e,n,s,i){return s<0&&n.ch==0?n.line>e.first?gt(e,pe(n.line-1)):null:s>0&&n.ch==(i||Je(e,n.line)).text.length?n.line<e.first+e.size-1?pe(n.line+1,0):null:new pe(n.line,n.ch+s)}function Qi(e){e.setSelection(pe(e.firstLine(),0),pe(e.lastLine()),Ct)}function Cl(e,n,s){var i={canceled:!1,from:n.from,to:n.to,text:n.text,origin:n.origin,cancel:function(){return i.canceled=!0}};return s&&(i.update=function(a,h,m,x){a&&(i.from=gt(e,a)),h&&(i.to=gt(e,h)),m&&(i.text=m),x!==void 0&&(i.origin=x)}),It(e,"beforeChange",e,i),e.cm&&It(e.cm,"beforeChange",e.cm,i),i.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:i.from,to:i.to,text:i.text,origin:i.origin}}function Xs(e,n,s){if(e.cm){if(!e.cm.curOp)return pn(e.cm,Xs)(e,n,s);if(e.cm.state.suppressEdits)return}if(!((mn(e,"beforeChange")||e.cm&&mn(e.cm,"beforeChange"))&&(n=Cl(e,n,!0),!n))){var i=ii&&!s&&oo(e,n.from,n.to);if(i)for(var a=i.length-1;a>=0;--a)Ei(e,{from:i[a].from,to:i[a].to,text:a?[""]:n.text,origin:n.origin});else Ei(e,n)}}function Ei(e,n){if(!(n.text.length==1&&n.text[0]==""&&He(n.from,n.to)==0)){var s=oi(e,n);Eo(e,n,s,e.cm?e.cm.curOp.id:NaN),Oa(e,n,s,ds(e,n));var i=[];Pn(e,function(a,h){!h&&$e(i,a.history)==-1&&(Da(a.history,n),i.push(a.history)),Oa(a,n,null,ds(a,n))})}}function li(e,n,s){var i=e.cm&&e.cm.state.suppressEdits;if(!(i&&!s)){for(var a=e.history,h,m=e.sel,x=n=="undo"?a.done:a.undone,w=n=="undo"?a.undone:a.done,_=0;_<x.length&&(h=x[_],!(s?h.ranges&&!h.equals(e.sel):!h.ranges));_++);if(_!=x.length){for(a.lastOrigin=a.lastSelOrigin=null;;)if(h=x.pop(),h.ranges){if(Aa(h,w),s&&!h.equals(e.sel)){Wn(e,h,{clearRedo:!1});return}m=h}else if(i){x.push(h);return}else break;var z=[];Aa(m,w),w.push({changes:z,generation:a.generation}),a.generation=h.generation||++a.maxGeneration;for(var q=mn(e,"beforeChange")||e.cm&&mn(e.cm,"beforeChange"),se=function(be){var Ae=h.changes[be];if(Ae.origin=n,q&&!Cl(e,Ae,!1))return x.length=0,{};z.push(No(e,Ae));var Ee=be?oi(e,Ae):Qe(x);Oa(e,Ae,Ee,yu(e,Ae)),!be&&e.cm&&e.cm.scrollIntoView({from:Ae.from,to:Fn(Ae)});var Fe=[];Pn(e,function(ze,Ge){!Ge&&$e(Fe,ze.history)==-1&&(Da(ze.history,Ae),Fe.push(ze.history)),Oa(ze,Ae,null,yu(ze,Ae))})},ne=h.changes.length-1;ne>=0;--ne){var ye=se(ne);if(ye)return ye.v}}}}function Io(e,n){if(n!=0&&(e.first+=n,e.sel=new Xn(ut(e.sel.ranges,function(a){return new At(pe(a.anchor.line+n,a.anchor.ch),pe(a.head.line+n,a.head.ch))}),e.sel.primIndex),e.cm)){sr(e.cm,e.first,e.first-n,n);for(var s=e.cm.display,i=s.viewFrom;i<s.viewTo;i++)$i(e.cm,i,"gutter")}}function Oa(e,n,s,i){if(e.cm&&!e.cm.curOp)return pn(e.cm,Oa)(e,n,s,i);if(n.to.line<e.first){Io(e,n.text.length-1-(n.to.line-n.from.line));return}if(!(n.from.line>e.lastLine())){if(n.from.line<e.first){var a=n.text.length-1-(e.first-n.from.line);Io(e,a),n={from:pe(e.first,0),to:pe(n.to.line+a,n.to.ch),text:[Qe(n.text)],origin:n.origin}}var h=e.lastLine();n.to.line>h&&(n={from:n.from,to:pe(h,Je(e,h).text.length),text:[n.text[0]],origin:n.origin}),n.removed=ri(e,n.from,n.to),s||(s=oi(e,n)),e.cm?Tl(e.cm,n,i):gr(e,n,i),Ia(e,s,Ct),e.cantEdit&&Ro(e,pe(e.firstLine(),0))&&(e.cantEdit=!1)}}function Tl(e,n,s){var i=e.doc,a=e.display,h=n.from,m=n.to,x=!1,w=h.line;e.options.lineWrapping||(w=T(Kt(Je(i,h.line))),i.iter(w,m.line+1,function(ne){if(ne==a.maxLine)return x=!0,!0})),i.sel.contains(n.from,n.to)>-1&&xn(e),gr(i,n,s,Fs(e)),e.options.lineWrapping||(i.iter(w,h.line+n.text.length,function(ne){var ye=Bi(ne);ye>a.maxLineLength&&(a.maxLine=ne,a.maxLineLength=ye,a.maxLineChanged=!0,x=!1)}),x&&(e.curOp.updateMaxLine=!0)),Dr(i,h.line),qs(e,400);var _=n.text.length-(m.line-h.line)-1;n.full?sr(e):h.line==m.line&&n.text.length==1&&!wl(e.doc,n)?$i(e,h.line,"text"):sr(e,h.line,m.line+1,_);var z=mn(e,"changes"),q=mn(e,"change");if(q||z){var se={from:h,to:m,text:n.text,removed:n.removed,origin:n.origin};q&&Dn(e,"change",e,se),z&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(se)}e.display.selForContextMenu=null}function Qs(e,n,s,i,a){var h;i||(i=s),He(i,s)<0&&(h=[i,s],s=h[0],i=h[1]),typeof n=="string"&&(n=e.splitLines(n)),Xs(e,{from:s,to:i,text:n,origin:a})}function Ma(e,n,s,i){s<e.line?e.line+=i:n<e.line&&(e.line=n,e.ch=0)}function ui(e,n,s,i){for(var a=0;a<e.length;++a){var h=e[a],m=!0;if(h.ranges){h.copied||(h=e[a]=h.deepCopy(),h.copied=!0);for(var x=0;x<h.ranges.length;x++)Ma(h.ranges[x].anchor,n,s,i),Ma(h.ranges[x].head,n,s,i);continue}for(var w=0;w<h.changes.length;++w){var _=h.changes[w];if(s<_.from.line)_.from=pe(_.from.line+i,_.from.ch),_.to=pe(_.to.line+i,_.to.ch);else if(n<=_.to.line){m=!1;break}}m||(e.splice(0,a+1),a=0)}}function Da(e,n){var s=n.from.line,i=n.to.line,a=n.text.length-(i-s)-1;ui(e.done,s,i,a),ui(e.undone,s,i,a)}function Zi(e,n,s,i){var a=n,h=n;return typeof n=="number"?h=Je(e,nl(e,n)):a=T(n),a==null?null:(i(h,a)&&e.cm&&$i(e.cm,a,s),h)}function ci(e){this.lines=e,this.parent=null;for(var n=0,s=0;s<e.length;++s)e[s].parent=this,n+=e[s].height;this.height=n}ci.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,n){for(var s=e,i=e+n;s<i;++s){var a=this.lines[s];this.height-=a.height,Vl(a),Dn(a,"delete")}this.lines.splice(e,n)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,n,s){this.height+=s,this.lines=this.lines.slice(0,e).concat(n).concat(this.lines.slice(e));for(var i=0;i<n.length;++i)n[i].parent=this},iterN:function(e,n,s){for(var i=e+n;e<i;++e)if(s(this.lines[e]))return!0}};function Zs(e){this.children=e;for(var n=0,s=0,i=0;i<e.length;++i){var a=e[i];n+=a.chunkSize(),s+=a.height,a.parent=this}this.size=n,this.height=s,this.parent=null}Zs.prototype={chunkSize:function(){return this.size},removeInner:function(e,n){this.size-=n;for(var s=0;s<this.children.length;++s){var i=this.children[s],a=i.chunkSize();if(e<a){var h=Math.min(n,a-e),m=i.height;if(i.removeInner(e,h),this.height-=m-i.height,a==h&&(this.children.splice(s--,1),i.parent=null),(n-=h)==0)break;e=0}else e-=a}if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof ci))){var x=[];this.collapse(x),this.children=[new ci(x)],this.children[0].parent=this}},collapse:function(e){for(var n=0;n<this.children.length;++n)this.children[n].collapse(e)},insertInner:function(e,n,s){this.size+=n.length,this.height+=s;for(var i=0;i<this.children.length;++i){var a=this.children[i],h=a.chunkSize();if(e<=h){if(a.insertInner(e,n,s),a.lines&&a.lines.length>50){for(var m=a.lines.length%25+25,x=m;x<a.lines.length;){var w=new ci(a.lines.slice(x,x+=25));a.height-=w.height,this.children.splice(++i,0,w),w.parent=this}a.lines=a.lines.slice(0,m),this.maybeSpill()}break}e-=h}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var n=e.children.splice(e.children.length-5,5),s=new Zs(n);if(e.parent){e.size-=s.size,e.height-=s.height;var a=$e(e.parent.children,e);e.parent.children.splice(a+1,0,s)}else{var i=new Zs(e.children);i.parent=e,e.children=[i,s],e=i}s.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,n,s){for(var i=0;i<this.children.length;++i){var a=this.children[i],h=a.chunkSize();if(e<h){var m=Math.min(n,h-e);if(a.iterN(e,m,s))return!0;if((n-=m)==0)break;e=0}else e-=h}}};var Li=function(e,n,s){if(s)for(var i in s)s.hasOwnProperty(i)&&(this[i]=s[i]);this.doc=e,this.node=n};Li.prototype.clear=function(){var e=this.doc.cm,n=this.line.widgets,s=this.line,i=T(s);if(!(i==null||!n)){for(var a=0;a<n.length;++a)n[a]==this&&n.splice(a--,1);n.length||(s.widgets=null);var h=Ui(this);Yn(s,Math.max(0,s.height-h)),e&&(Ln(e,function(){xu(e,s,-h),$i(e,i,"widget")}),Dn(e,"lineWidgetCleared",e,this,i))}},Li.prototype.changed=function(){var e=this,n=this.height,s=this.doc.cm,i=this.line;this.height=null;var a=Ui(this)-n;a&&(Nr(this.doc,i)||Yn(i,i.height+a),s&&Ln(s,function(){s.curOp.forceUpdate=!0,xu(s,i,a),Dn(s,"lineWidgetChanged",s,e,T(i))}))},Nn(Li);function xu(e,n,s){Sn(n)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&ys(e,s)}function bu(e,n,s,i){var a=new Li(e,s,i),h=e.cm;return h&&a.noHScroll&&(h.display.alignWidgets=!0),Zi(e,n,"widget",function(m){var x=m.widgets||(m.widgets=[]);if(a.insertAt==null?x.push(a):x.splice(Math.min(x.length,Math.max(0,a.insertAt)),0,a),a.line=m,h&&!Nr(e,m)){var w=Sn(m)<e.scrollTop;Yn(m,m.height+Ui(a)),w&&ys(h,a.height),h.curOp.forceUpdate=!0}return!0}),h&&Dn(h,"lineWidgetAdded",h,a,typeof n=="number"?n:T(n)),a}var ln=0,di=function(e,n){this.lines=[],this.type=n,this.doc=e,this.id=++ln};di.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,n=e&&!e.curOp;if(n&&bs(e),mn(this,"clear")){var s=this.find();s&&Dn(this,"clear",s.from,s.to)}for(var i=null,a=null,h=0;h<this.lines.length;++h){var m=this.lines[h],x=Ms(m.markedSpans,this);e&&!this.collapsed?$i(e,T(m),"text"):e&&(x.to!=null&&(a=T(m)),x.from!=null&&(i=T(m))),m.markedSpans=so(m.markedSpans,x),x.from==null&&this.collapsed&&!Nr(this.doc,m)&&e&&Yn(m,Si(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var w=0;w<this.lines.length;++w){var _=Kt(this.lines[w]),z=Bi(_);z>e.display.maxLineLength&&(e.display.maxLine=_,e.display.maxLineLength=z,e.display.maxLineChanged=!0)}i!=null&&e&&this.collapsed&&sr(e,i,a+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&Fr(e.doc)),e&&Dn(e,"markerCleared",e,this,i,a),n&&Yr(e),this.parent&&this.parent.clear()}},di.prototype.find=function(e,n){e==null&&this.type=="bookmark"&&(e=1);for(var s,i,a=0;a<this.lines.length;++a){var h=this.lines[a],m=Ms(h.markedSpans,this);if(m.from!=null&&(s=pe(n?h:T(h),m.from),e==-1))return s;if(m.to!=null&&(i=pe(n?h:T(h),m.to),e==1))return i}return s&&{from:s,to:i}},di.prototype.changed=function(){var e=this,n=this.find(-1,!0),s=this,i=this.doc.cm;!n||!i||Ln(i,function(){var a=n.line,h=T(n.line),m=al(i,h);if(m&&(ol(m),i.curOp.selectionChanged=i.curOp.forceUpdate=!0),i.curOp.updateMaxLine=!0,!Nr(s.doc,a)&&s.height!=null){var x=s.height;s.height=null;var w=Ui(s)-x;w&&Yn(a,a.height+w)}Dn(i,"markerChanged",i,e)})},di.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(!n.maybeHiddenMarkers||$e(n.maybeHiddenMarkers,this)==-1)&&(n.maybeUnhiddenMarkers||(n.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},di.prototype.detachLine=function(e){if(this.lines.splice($e(this.lines,e),1),!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(n.maybeHiddenMarkers||(n.maybeHiddenMarkers=[])).push(this)}},Nn(di);function js(e,n,s,i,a){if(i&&i.shared)return jl(e,n,s,i,a);if(e.cm&&!e.cm.curOp)return pn(e.cm,js)(e,n,s,i,a);var h=new di(e,a),m=He(n,s);if(i&&Be(i,h,!1),m>0||m==0&&h.clearWhenEmpty!==!1)return h;if(h.replacedWith&&(h.collapsed=!0,h.widgetNode=Z("span",[h.replacedWith],"CodeMirror-widget"),i.handleMouseEvents||h.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(h.widgetNode.insertLeft=!0)),h.collapsed){if(cn(e,n.line,n,s,h)||n.line!=s.line&&cn(e,s.line,n,s,h))throw new Error("Inserting collapsed marker partially overlapping an existing one");Os()}h.addToHistory&&Eo(e,{from:n,to:s,origin:"markText"},e.sel,NaN);var x=n.line,w=e.cm,_;if(e.iter(x,s.line+1,function(q){w&&h.collapsed&&!w.options.lineWrapping&&Kt(q)==w.display.maxLine&&(_=!0),h.collapsed&&x!=n.line&&Yn(q,0),Ds(q,new jr(h,x==n.line?n.ch:null,x==s.line?s.ch:null),e.cm&&e.cm.curOp),++x}),h.collapsed&&e.iter(n.line,s.line+1,function(q){Nr(e,q)&&Yn(q,0)}),h.clearOnEnter&&rt(h,"beforeCursorEnter",function(){return h.clear()}),h.readOnly&&($r(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),h.collapsed&&(h.id=++ln,h.atomic=!0),w){if(_&&(w.curOp.updateMaxLine=!0),h.collapsed)sr(w,n.line,s.line+1);else if(h.className||h.startStyle||h.endStyle||h.css||h.attributes||h.title)for(var z=n.line;z<=s.line;z++)$i(w,z,"text");h.atomic&&Fr(w.doc),Dn(w,"markerAdded",w,h)}return h}var ea=function(e,n){this.markers=e,this.primary=n;for(var s=0;s<e.length;++s)e[s].parent=this};ea.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();Dn(this,"clear")}},ea.prototype.find=function(e,n){return this.primary.find(e,n)},Nn(ea);function jl(e,n,s,i,a){i=Be(i),i.shared=!1;var h=[js(e,n,s,i,a)],m=h[0],x=i.widgetNode;return Pn(e,function(w){x&&(i.widgetNode=x.cloneNode(!0)),h.push(js(w,gt(w,n),gt(w,s),i,a));for(var _=0;_<w.linked.length;++_)if(w.linked[_].isParent)return;m=Qe(h)}),new ea(h,m)}function Nl(e){return e.findMarks(pe(e.first,0),e.clipPos(pe(e.lastLine())),function(n){return n.parent})}function ta(e,n){for(var s=0;s<n.length;s++){var i=n[s],a=i.find(),h=e.clipPos(a.from),m=e.clipPos(a.to);if(He(h,m)){var x=js(e,h,m,i.primary,i.primary.type);i.markers.push(x),x.parent=i}}}function hn(e){for(var n=function(i){var a=e[i],h=[a.primary.doc];Pn(a.primary.doc,function(w){return h.push(w)});for(var m=0;m<a.markers.length;m++){var x=a.markers[m];$e(h,x.doc)==-1&&(x.parent=null,a.markers.splice(m--,1))}},s=0;s<e.length;s++)n(s)}var Hn=0,Ot=function(e,n,s,i,a){if(!(this instanceof Ot))return new Ot(e,n,s,i,a);s==null&&(s=0),Zs.call(this,[new ci([new wi("",null)])]),this.first=s,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=s;var h=pe(s,0);this.sel=zn(h),this.history=new jo(null),this.id=++Hn,this.modeOption=n,this.lineSep=i,this.direction=a=="rtl"?"rtl":"ltr",this.extend=!1,typeof e=="string"&&(e=this.splitLines(e)),gr(this,{from:h,to:h,text:e}),Wn(this,zn(h),Ct)};Ot.prototype=fe(Zs.prototype,{constructor:Ot,iter:function(e,n,s){s?this.iterN(e-this.first,n-e,s):this.iterN(this.first,this.first+this.size,e)},insert:function(e,n){for(var s=0,i=0;i<n.length;++i)s+=n[i].height;this.insertInner(e-this.first,n,s)},remove:function(e,n){this.removeInner(e-this.first,n)},getValue:function(e){var n=us(this,this.first,this.first+this.size);return e===!1?n:n.join(e||this.lineSeparator())},setValue:gn(function(e){var n=pe(this.first,0),s=this.first+this.size-1;Xs(this,{from:n,to:pe(s,Je(this,s).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&ko(this.cm,0,0),Wn(this,zn(n),Ct)}),replaceRange:function(e,n,s,i){n=gt(this,n),s=s?gt(this,s):n,Qs(this,e,n,s,i)},getRange:function(e,n,s){var i=ri(this,gt(this,e),gt(this,n));return s===!1?i:s===""?i.join(""):i.join(s||this.lineSeparator())},getLine:function(e){var n=this.getLineHandle(e);return n&&n.text},getLineHandle:function(e){if(ge(this,e))return Je(this,e)},getLineNumber:function(e){return T(e)},getLineHandleVisualStart:function(e){return typeof e=="number"&&(e=Je(this,e)),Kt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return gt(this,e)},getCursor:function(e){var n=this.sel.primary(),s;return e==null||e=="head"?s=n.head:e=="anchor"?s=n.anchor:e=="end"||e=="to"||e===!1?s=n.to():s=n.from(),s},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:gn(function(e,n,s){Vs(this,gt(this,typeof e=="number"?pe(e,n||0):e),null,s)}),setSelection:gn(function(e,n,s){Vs(this,gt(this,e),gt(this,n||e),s)}),extendSelection:gn(function(e,n,s){Po(this,gt(this,e),n&&gt(this,n),s)}),extendSelections:gn(function(e,n){Ao(this,ro(this,e),n)}),extendSelectionsBy:gn(function(e,n){var s=ut(this.sel.ranges,e);Ao(this,ro(this,s),n)}),setSelections:gn(function(e,n,s){if(e.length){for(var i=[],a=0;a<e.length;a++)i[a]=new At(gt(this,e[a].anchor),gt(this,e[a].head||e[a].anchor));n==null&&(n=Math.min(e.length-1,this.sel.primIndex)),Wn(this,Lr(this.cm,i,n),s)}}),addSelection:gn(function(e,n,s){var i=this.sel.ranges.slice(0);i.push(new At(gt(this,e),gt(this,n||e))),Wn(this,Lr(this.cm,i,i.length-1),s)}),getSelection:function(e){for(var n=this.sel.ranges,s,i=0;i<n.length;i++){var a=ri(this,n[i].from(),n[i].to());s=s?s.concat(a):a}return e===!1?s:s.join(e||this.lineSeparator())},getSelections:function(e){for(var n=[],s=this.sel.ranges,i=0;i<s.length;i++){var a=ri(this,s[i].from(),s[i].to());e!==!1&&(a=a.join(e||this.lineSeparator())),n[i]=a}return n},replaceSelection:function(e,n,s){for(var i=[],a=0;a<this.sel.ranges.length;a++)i[a]=e;this.replaceSelections(i,n,s||"+input")},replaceSelections:gn(function(e,n,s){for(var i=[],a=this.sel,h=0;h<a.ranges.length;h++){var m=a.ranges[h];i[h]={from:m.from(),to:m.to(),text:this.splitLines(e[h]),origin:s}}for(var x=n&&n!="end"&&$s(this,i,n),w=i.length-1;w>=0;w--)Xs(this,i[w]);x?_l(this,x):this.cm&&Hs(this.cm)}),undo:gn(function(){li(this,"undo")}),redo:gn(function(){li(this,"redo")}),undoSelection:gn(function(){li(this,"undo",!0)}),redoSelection:gn(function(){li(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,n=0,s=0,i=0;i<e.done.length;i++)e.done[i].ranges||++n;for(var a=0;a<e.undone.length;a++)e.undone[a].ranges||++s;return{undo:n,redo:s}},clearHistory:function(){var e=this;this.history=new jo(this.history),Pn(this,function(n){return n.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Ys(this.history.done),undone:Ys(this.history.undone)}},setHistory:function(e){var n=this.history=new jo(this.history);n.done=Ys(e.done.slice(0),null,!0),n.undone=Ys(e.undone.slice(0),null,!0)},setGutterMarker:gn(function(e,n,s){return Zi(this,e,"gutter",function(i){var a=i.gutterMarkers||(i.gutterMarkers={});return a[n]=s,!s&&Ze(a)&&(i.gutterMarkers=null),!0})}),clearGutter:gn(function(e){var n=this;this.iter(function(s){s.gutterMarkers&&s.gutterMarkers[e]&&Zi(n,s,"gutter",function(){return s.gutterMarkers[e]=null,Ze(s.gutterMarkers)&&(s.gutterMarkers=null),!0})})}),lineInfo:function(e){var n;if(typeof e=="number"){if(!ge(this,e)||(n=e,e=Je(this,e),!e))return null}else if(n=T(e),n==null)return null;return{line:n,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:gn(function(e,n,s){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var a=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass";if(!i[a])i[a]=s;else{if(ae(s).test(i[a]))return!1;i[a]+=" "+s}return!0})}),removeLineClass:gn(function(e,n,s){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var a=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass",h=i[a];if(h)if(s==null)i[a]=null;else{var m=h.match(ae(s));if(!m)return!1;var x=m.index+m[0].length;i[a]=h.slice(0,m.index)+(!m.index||x==h.length?"":" ")+h.slice(x)||null}else return!1;return!0})}),addLineWidget:gn(function(e,n,s){return bu(this,e,n,s)}),removeLineWidget:function(e){e.clear()},markText:function(e,n,s){return js(this,gt(this,e),gt(this,n),s,s&&s.type||"range")},setBookmark:function(e,n){var s={replacedWith:n&&(n.nodeType==null?n.widget:n),insertLeft:n&&n.insertLeft,clearWhenEmpty:!1,shared:n&&n.shared,handleMouseEvents:n&&n.handleMouseEvents};return e=gt(this,e),js(this,e,e,s,"bookmark")},findMarksAt:function(e){e=gt(this,e);var n=[],s=Je(this,e.line).markedSpans;if(s)for(var i=0;i<s.length;++i){var a=s[i];(a.from==null||a.from<=e.ch)&&(a.to==null||a.to>=e.ch)&&n.push(a.marker.parent||a.marker)}return n},findMarks:function(e,n,s){e=gt(this,e),n=gt(this,n);var i=[],a=e.line;return this.iter(e.line,n.line+1,function(h){var m=h.markedSpans;if(m)for(var x=0;x<m.length;x++){var w=m[x];!(w.to!=null&&a==e.line&&e.ch>=w.to||w.from==null&&a!=e.line||w.from!=null&&a==n.line&&w.from>=n.ch)&&(!s||s(w.marker))&&i.push(w.marker.parent||w.marker)}++a}),i},getAllMarks:function(){var e=[];return this.iter(function(n){var s=n.markedSpans;if(s)for(var i=0;i<s.length;++i)s[i].from!=null&&e.push(s[i].marker)}),e},posFromIndex:function(e){var n,s=this.first,i=this.lineSeparator().length;return this.iter(function(a){var h=a.text.length+i;if(h>e)return n=e,!0;e-=h,++s}),gt(this,pe(s,n))},indexFromPos:function(e){e=gt(this,e);var n=e.ch;if(e.line<this.first||e.ch<0)return 0;var s=this.lineSeparator().length;return this.iter(this.first,e.line,function(i){n+=i.text.length+s}),n},copy:function(e){var n=new Ot(us(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,n.sel=this.sel,n.extend=!1,e&&(n.history.undoDepth=this.history.undoDepth,n.setHistory(this.getHistory())),n},linkedDoc:function(e){e||(e={});var n=this.first,s=this.first+this.size;e.from!=null&&e.from>n&&(n=e.from),e.to!=null&&e.to<s&&(s=e.to);var i=new Ot(us(this,n,s),e.mode||this.modeOption,n,this.lineSep,this.direction);return e.sharedHist&&(i.history=this.history),(this.linked||(this.linked=[])).push({doc:i,sharedHist:e.sharedHist}),i.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],ta(i,Nl(this)),i},unlinkDoc:function(e){if(e instanceof en&&(e=e.doc),this.linked)for(var n=0;n<this.linked.length;++n){var s=this.linked[n];if(s.doc==e){this.linked.splice(n,1),e.unlinkDoc(this),hn(Nl(this));break}}if(e.history==this.history){var i=[e.id];Pn(e,function(a){return i.push(a.id)},!0),e.history=new jo(null),e.history.done=Ys(this.history.done,i),e.history.undone=Ys(this.history.undone,i)}},iterLinkedDocs:function(e){Pn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):Tr(e)},lineSeparator:function(){return this.lineSep||`
`},setDirection:gn(function(e){e!="rtl"&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(n){return n.order=null}),this.cm&&Pc(this.cm))})}),Ot.prototype.eachLine=Ot.prototype.iter;var Oo=0;function Mo(e){var n=this;if(Zn(n),!(qt(n,e)||qi(n.display,e))){bn(e),k&&(Oo=+new Date);var s=ms(n,e,!0),i=e.dataTransfer.files;if(!(!s||n.isReadOnly()))if(i&&i.length&&window.FileReader&&window.File)for(var a=i.length,h=Array(a),m=0,x=function(){++m==a&&pn(n,function(){s=gt(n.doc,s);var ne={from:s,to:s,text:n.doc.splitLines(h.filter(function(ye){return ye!=null}).join(n.doc.lineSeparator())),origin:"paste"};Xs(n.doc,ne),_l(n.doc,zn(gt(n.doc,s),gt(n.doc,Fn(ne))))})()},w=function(ne,ye){if(n.options.allowDropFileTypes&&$e(n.options.allowDropFileTypes,ne.type)==-1){x();return}var be=new FileReader;be.onerror=function(){return x()},be.onload=function(){var Ae=be.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(Ae)){x();return}h[ye]=Ae,x()},be.readAsText(ne)},_=0;_<i.length;_++)w(i[_],_);else{if(n.state.draggingText&&n.doc.sel.contains(s)>-1){n.state.draggingText(e),setTimeout(function(){return n.display.input.focus()},20);return}try{var z=e.dataTransfer.getData("Text");if(z){var q;if(n.state.draggingText&&!n.state.draggingText.copy&&(q=n.listSelections()),Ia(n.doc,zn(s,s)),q)for(var se=0;se<q.length;++se)Qs(n.doc,"",q[se].anchor,q[se].head,"drag");n.replaceSelection(z,"around","paste"),n.display.input.focus()}}catch{}}}}function Do(e,n){if(k&&(!e.state.draggingText||+new Date-Oo<100)){pr(n);return}if(!(qt(e,n)||qi(e.display,n))&&(n.dataTransfer.setData("Text",e.getSelection()),n.dataTransfer.effectAllowed="copyMove",n.dataTransfer.setDragImage&&!Y)){var s=E("img",null,null,"position: fixed; left: 0; top: 0;");s.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",D&&(s.width=s.height=1,e.display.wrapper.appendChild(s),s._top=s.offsetTop),n.dataTransfer.setDragImage(s,0,0),D&&s.parentNode.removeChild(s)}}function cp(e,n){var s=ms(e,n);if(s){var i=document.createDocumentFragment();xo(e,s,i),e.display.dragCursor||(e.display.dragCursor=E("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),he(e.display.dragCursor,i)}}function Zn(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function El(e){if(document.getElementsByClassName){for(var n=document.getElementsByClassName("CodeMirror"),s=[],i=0;i<n.length;i++){var a=n[i].CodeMirror;a&&s.push(a)}s.length&&s[0].operation(function(){for(var h=0;h<s.length;h++)e(s[h])})}}var Ll=!1;function wu(){Ll||(Pi(),Ll=!0)}function Pi(){var e;rt(window,"resize",function(){e==null&&(e=setTimeout(function(){e=null,El(Jr)},100))}),rt(window,"blur",function(){return El(Wt)})}function Jr(e){var n=e.display;n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.scrollbarsClipped=!1,e.setSize()}for(var Xr={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},na=0;na<10;na++)Xr[na+48]=Xr[na+96]=String(na);for(var za=65;za<=90;za++)Xr[za]=String.fromCharCode(za);for(var Fa=1;Fa<=12;Fa++)Xr[Fa+111]=Xr[Fa+63235]="F"+Fa;var Ai={};Ai.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ai.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ai.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Ai.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ai.default=G?Ai.macDefault:Ai.pcDefault;function Oc(e){var n=e.split(/-(?!$)/);e=n[n.length-1];for(var s,i,a,h,m=0;m<n.length-1;m++){var x=n[m];if(/^(cmd|meta|m)$/i.test(x))h=!0;else if(/^a(lt)?$/i.test(x))s=!0;else if(/^(c|ctrl|control)$/i.test(x))i=!0;else if(/^s(hift)?$/i.test(x))a=!0;else throw new Error("Unrecognized modifier name: "+x)}return s&&(e="Alt-"+e),i&&(e="Ctrl-"+e),h&&(e="Cmd-"+e),a&&(e="Shift-"+e),e}function Mc(e){var n={};for(var s in e)if(e.hasOwnProperty(s)){var i=e[s];if(/^(name|fallthrough|(de|at)tach)$/.test(s))continue;if(i=="..."){delete e[s];continue}for(var a=ut(s.split(" "),Oc),h=0;h<a.length;h++){var m=void 0,x=void 0;h==a.length-1?(x=a.join(" "),m=i):(x=a.slice(0,h+1).join(" "),m="...");var w=n[x];if(!w)n[x]=m;else if(w!=m)throw new Error("Inconsistent bindings for "+x)}delete e[s]}for(var _ in n)e[_]=n[_];return e}function ra(e,n,s,i){n=Ns(n);var a=n.call?n.call(e,i):n[e];if(a===!1)return"nothing";if(a==="...")return"multi";if(a!=null&&s(a))return"handled";if(n.fallthrough){if(Object.prototype.toString.call(n.fallthrough)!="[object Array]")return ra(e,n.fallthrough,s,i);for(var h=0;h<n.fallthrough.length;h++){var m=ra(e,n.fallthrough[h],s,i);if(m)return m}}}function ku(e){var n=typeof e=="string"?e:Xr[e.keyCode];return n=="Ctrl"||n=="Alt"||n=="Shift"||n=="Mod"}function Su(e,n,s){var i=e;return n.altKey&&i!="Alt"&&(e="Alt-"+e),(Me?n.metaKey:n.ctrlKey)&&i!="Ctrl"&&(e="Ctrl-"+e),(Me?n.ctrlKey:n.metaKey)&&i!="Mod"&&(e="Cmd-"+e),!s&&n.shiftKey&&i!="Shift"&&(e="Shift-"+e),e}function _u(e,n){if(D&&e.keyCode==34&&e.char)return!1;var s=Xr[e.keyCode];return s==null||e.altGraphKey?!1:(e.keyCode==3&&e.code&&(s=e.code),Su(s,e,n))}function Ns(e){return typeof e=="string"?Ai[e]:e}function ia(e,n){for(var s=e.doc.sel.ranges,i=[],a=0;a<s.length;a++){for(var h=n(s[a]);i.length&&He(h.from,Qe(i).to)<=0;){var m=i.pop();if(He(m.from,h.from)<0){h.from=m.from;break}}i.push(h)}Ln(e,function(){for(var x=i.length-1;x>=0;x--)Qs(e.doc,"",i[x].from,i[x].to,"+delete");Hs(e)})}function Wa(e,n,s){var i=Xt(e.text,n+s,s);return i<0||i>e.text.length?null:i}function Ha(e,n,s){var i=Wa(e,n.ch,s);return i==null?null:new pe(n.line,i,s<0?"after":"before")}function Pl(e,n,s,i,a){if(e){n.doc.direction=="rtl"&&(a=-a);var h=bt(s,n.doc.direction);if(h){var m=a<0?Qe(h):h[0],x=a<0==(m.level==1),w=x?"after":"before",_;if(m.level>0||n.doc.direction=="rtl"){var z=ki(n,s);_=a<0?s.text.length-1:0;var q=Er(n,z,_).top;_=nr(function(se){return Er(n,z,se).top==q},a<0==(m.level==1)?m.from:m.to-1,_),w=="before"&&(_=Wa(s,_,1))}else _=a<0?m.to:m.from;return new pe(i,_,w)}}return new pe(i,a<0?s.text.length:0,a<0?"before":"after")}function Cu(e,n,s,i){var a=bt(n,e.doc.direction);if(!a)return Ha(n,s,i);s.ch>=n.text.length?(s.ch=n.text.length,s.sticky="before"):s.ch<=0&&(s.ch=0,s.sticky="after");var h=Br(a,s.ch,s.sticky),m=a[h];if(e.doc.direction=="ltr"&&m.level%2==0&&(i>0?m.to>s.ch:m.from<s.ch))return Ha(n,s,i);var x=function(Ee,Fe){return Wa(n,Ee instanceof pe?Ee.ch:Ee,Fe)},w,_=function(Ee){return e.options.lineWrapping?(w=w||ki(e,n),cu(e,n,w,Ee)):{begin:0,end:n.text.length}},z=_(s.sticky=="before"?x(s,-1):s.ch);if(e.doc.direction=="rtl"||m.level==1){var q=m.level==1==i<0,se=x(s,q?1:-1);if(se!=null&&(q?se<=m.to&&se<=z.end:se>=m.from&&se>=z.begin)){var ne=q?"before":"after";return new pe(s.line,se,ne)}}var ye=function(Ee,Fe,ze){for(var Ge=function(Et,Bn){return Bn?new pe(s.line,x(Et,1),"before"):new pe(s.line,Et,"after")};Ee>=0&&Ee<a.length;Ee+=Fe){var ot=a[Ee],Ve=Fe>0==(ot.level!=1),St=Ve?ze.begin:x(ze.end,-1);if(ot.from<=St&&St<ot.to||(St=Ve?ot.from:x(ot.to,-1),ze.begin<=St&&St<ze.end))return Ge(St,Ve)}},be=ye(h+i,i,z);if(be)return be;var Ae=i>0?z.end:x(z.begin,-1);return Ae!=null&&!(i>0&&Ae==n.text.length)&&(be=ye(i>0?0:a.length-1,i,_(Ae)),be)?be:null}var Ba={selectAll:Qi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),Ct)},killLine:function(e){return ia(e,function(n){if(n.empty()){var s=Je(e.doc,n.head.line).text.length;return n.head.ch==s&&n.head.line<e.lastLine()?{from:n.head,to:pe(n.head.line+1,0)}:{from:n.head,to:pe(n.head.line,s)}}else return{from:n.from(),to:n.to()}})},deleteLine:function(e){return ia(e,function(n){return{from:pe(n.from().line,0),to:gt(e.doc,pe(n.to().line+1,0))}})},delLineLeft:function(e){return ia(e,function(n){return{from:pe(n.from().line,0),to:n.from()}})},delWrappedLineLeft:function(e){return ia(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return{from:i,to:n.from()}})},delWrappedLineRight:function(e){return ia(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div");return{from:n.from(),to:i}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(pe(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(pe(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(n){return Tu(e,n.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(n){return ju(e,n.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(n){return Dc(e,n.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div")},tt)},goLineLeft:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:0,top:s},"div")},tt)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return i.ch<e.getLine(i.line).search(/\S/)?ju(e,n.head):i},tt)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("	")},insertSoftTab:function(e){for(var n=[],s=e.listSelections(),i=e.options.tabSize,a=0;a<s.length;a++){var h=s[a].from(),m=Ke(e.getLine(h.line),h.ch,i);n.push(yt(i-m%i))}e.replaceSelections(n)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=[],i=0;i<n.length;i++)if(n[i].empty()){var a=n[i].head,h=Je(e.doc,a.line).text;if(h){if(a.ch==h.length&&(a=new pe(a.line,a.ch-1)),a.ch>0)a=new pe(a.line,a.ch+1),e.replaceRange(h.charAt(a.ch-1)+h.charAt(a.ch-2),pe(a.line,a.ch-2),a,"+transpose");else if(a.line>e.doc.first){var m=Je(e.doc,a.line-1).text;m&&(a=new pe(a.line,1),e.replaceRange(h.charAt(0)+e.doc.lineSeparator()+m.charAt(m.length-1),pe(a.line-1,m.length-1),a,"+transpose"))}}s.push(new At(a,a))}e.setSelections(s)})},newlineAndIndent:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=n.length-1;s>=0;s--)e.replaceRange(e.doc.lineSeparator(),n[s].anchor,n[s].head,"+input");n=e.listSelections();for(var i=0;i<n.length;i++)e.indentLine(n[i].from().line,null,!0);Hs(e)})},openLine:function(e){return e.replaceSelection(`
`,"start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function Tu(e,n){var s=Je(e.doc,n),i=Kt(s);return i!=s&&(n=T(i)),Pl(!0,e,i,n,1)}function Dc(e,n){var s=Je(e.doc,n),i=hr(s);return i!=s&&(n=T(i)),Pl(!0,e,s,n,-1)}function ju(e,n){var s=Tu(e,n.line),i=Je(e.doc,s.line),a=bt(i,e.doc.direction);if(!a||a[0].level==0){var h=Math.max(s.ch,i.text.search(/\S/)),m=n.line==s.line&&n.ch<=h&&n.ch;return pe(s.line,m?0:h,s.sticky)}return s}function Ua(e,n,s){if(typeof n=="string"&&(n=Ba[n],!n))return!1;e.display.input.ensurePolled();var i=e.display.shift,a=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),s&&(e.display.shift=!1),a=n(e)!=Yt}finally{e.display.shift=i,e.state.suppressEdits=!1}return a}function zc(e,n,s){for(var i=0;i<e.state.keyMaps.length;i++){var a=ra(n,e.state.keyMaps[i],s,e);if(a)return a}return e.options.extraKeys&&ra(n,e.options.extraKeys,s,e)||ra(n,e.options.keyMap,s,e)}var Fc=new et;function qa(e,n,s,i){var a=e.state.keySeq;if(a){if(ku(n))return"handled";if(/\'$/.test(n)?e.state.keySeq=null:Fc.set(50,function(){e.state.keySeq==a&&(e.state.keySeq=null,e.display.input.reset())}),Wc(e,a+" "+n,s,i))return!0}return Wc(e,n,s,i)}function Wc(e,n,s,i){var a=zc(e,n,i);return a=="multi"&&(e.state.keySeq=n),a=="handled"&&Dn(e,"keyHandled",e,n,s),(a=="handled"||a=="multi")&&(bn(s),Ws(e)),!!a}function Nu(e,n){var s=_u(n,!0);return s?n.shiftKey&&!e.state.keySeq?qa(e,"Shift-"+s,n,function(i){return Ua(e,i,!0)})||qa(e,s,n,function(i){if(typeof i=="string"?/^go[A-Z]/.test(i):i.motion)return Ua(e,i)}):qa(e,s,n,function(i){return Ua(e,i)}):!1}function dp(e,n,s){return qa(e,"'"+s+"'",n,function(i){return Ua(e,i,!0)})}var Eu=null;function Lu(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&(n.curOp.focus=N(Ie(n)),!qt(n,e))){k&&j<11&&e.keyCode==27&&(e.returnValue=!1);var s=e.keyCode;n.display.shift=s==16||e.shiftKey;var i=Nu(n,e);D&&(Eu=i?s:null,!i&&s==88&&!as&&(G?e.metaKey:e.ctrlKey)&&n.replaceSelection("",null,"cut")),y&&!G&&!i&&s==46&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),s==18&&!/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className)&&Hc(n)}}function Hc(e){var n=e.display.lineDiv;K(n,"CodeMirror-crosshair");function s(i){(i.keyCode==18||!i.altKey)&&(Ce(n,"CodeMirror-crosshair"),tn(document,"keyup",s),tn(document,"mouseover",s))}rt(document,"keyup",s),rt(document,"mouseover",s)}function Pu(e){e.keyCode==16&&(this.doc.sel.shift=!1),qt(this,e)}function zo(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&!(qi(n.display,e)||qt(n,e)||e.ctrlKey&&!e.altKey||G&&e.metaKey)){var s=e.keyCode,i=e.charCode;if(D&&s==Eu){Eu=null,bn(e);return}if(!(D&&(!e.which||e.which<10)&&Nu(n,e))){var a=String.fromCharCode(i??s);a!="\b"&&(dp(n,e,a)||n.display.input.onKeyPress(e))}}}var pp=400,Au=function(e,n,s){this.time=e,this.pos=n,this.button=s};Au.prototype.compare=function(e,n,s){return this.time+pp>e&&He(n,this.pos)==0&&s==this.button};var Fo,yr;function Ru(e,n){var s=+new Date;return yr&&yr.compare(s,e,n)?(Fo=yr=null,"triple"):Fo&&Fo.compare(s,e,n)?(yr=new Au(s,e,n),Fo=null,"double"):(Fo=new Au(s,e,n),yr=null,"single")}function Wo(e){var n=this,s=n.display;if(!(qt(n,e)||s.activeTouch&&s.input.supportsTouch())){if(s.input.ensurePolled(),s.shift=e.shiftKey,qi(s,e)){L||(s.scroller.draggable=!1,setTimeout(function(){return s.scroller.draggable=!0},100));return}if(!Al(n,e)){var i=ms(n,e),a=En(e),h=i?Ru(i,a):"single";Oe(n).focus(),a==1&&n.state.selectingText&&n.state.selectingText(e),!(i&&Bc(n,a,i,h,e))&&(a==1?i?qc(n,i,h,e):mi(e)==s.scroller&&bn(e):a==2?(i&&Po(n.doc,i),setTimeout(function(){return s.input.focus()},20)):a==3&&(ke?n.display.input.onContextMenu(e):ml(n)))}}}function Bc(e,n,s,i,a){var h="Click";return i=="double"?h="Double"+h:i=="triple"&&(h="Triple"+h),h=(n==1?"Left":n==2?"Middle":"Right")+h,qa(e,Su(h,a),a,function(m){if(typeof m=="string"&&(m=Ba[m]),!m)return!1;var x=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),x=m(e,s)!=Yt}finally{e.state.suppressEdits=!1}return x})}function Uc(e,n,s){var i=e.getOption("configureMouse"),a=i?i(e,n,s):{};if(a.unit==null){var h=ce?s.shiftKey&&s.metaKey:s.altKey;a.unit=h?"rectangle":n=="single"?"char":n=="double"?"word":"line"}return(a.extend==null||e.doc.extend)&&(a.extend=e.doc.extend||s.shiftKey),a.addNew==null&&(a.addNew=G?s.metaKey:s.ctrlKey),a.moveOnDrag==null&&(a.moveOnDrag=!(G?s.altKey:s.ctrlKey)),a}function qc(e,n,s,i){k?setTimeout(Se(Tc,e),0):e.curOp.focus=N(Ie(e));var a=Uc(e,s,i),h=e.doc.sel,m;e.options.dragDrop&&ss&&!e.isReadOnly()&&s=="single"&&(m=h.contains(n))>-1&&(He((m=h.ranges[m]).from(),n)<0||n.xRel>0)&&(He(m.to(),n)>0||n.xRel<0)?Iu(e,i,n,a):Ou(e,i,n,a)}function Iu(e,n,s,i){var a=e.display,h=!1,m=pn(e,function(_){L&&(a.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:ml(e)),tn(a.wrapper.ownerDocument,"mouseup",m),tn(a.wrapper.ownerDocument,"mousemove",x),tn(a.scroller,"dragstart",w),tn(a.scroller,"drop",m),h||(bn(_),i.addNew||Po(e.doc,s,null,null,i.extend),L&&!Y||k&&j==9?setTimeout(function(){a.wrapper.ownerDocument.body.focus({preventScroll:!0}),a.input.focus()},20):a.input.focus())}),x=function(_){h=h||Math.abs(n.clientX-_.clientX)+Math.abs(n.clientY-_.clientY)>=10},w=function(){return h=!0};L&&(a.scroller.draggable=!0),e.state.draggingText=m,m.copy=!i.moveOnDrag,rt(a.wrapper.ownerDocument,"mouseup",m),rt(a.wrapper.ownerDocument,"mousemove",x),rt(a.scroller,"dragstart",w),rt(a.scroller,"drop",m),e.state.delayingBlurEvent=!0,setTimeout(function(){return a.input.focus()},20),a.scroller.dragDrop&&a.scroller.dragDrop()}function sa(e,n,s){if(s=="char")return new At(n,n);if(s=="word")return e.findWordAt(n);if(s=="line")return new At(pe(n.line,0),gt(e.doc,pe(n.line+1,0)));var i=s(e,n);return new At(i.from,i.to)}function Ou(e,n,s,i){k&&ml(e);var a=e.display,h=e.doc;bn(n);var m,x,w=h.sel,_=w.ranges;if(i.addNew&&!i.extend?(x=h.sel.contains(s),x>-1?m=_[x]:m=new At(s,s)):(m=h.sel.primary(),x=h.sel.primIndex),i.unit=="rectangle")i.addNew||(m=new At(s,s)),s=ms(e,n,!0,!0),x=-1;else{var z=sa(e,s,i.unit);i.extend?m=_s(m,z.anchor,z.head,i.extend):m=z}i.addNew?x==-1?(x=_.length,Wn(h,Lr(e,_.concat([m]),x),{scroll:!1,origin:"*mouse"})):_.length>1&&_[x].empty()&&i.unit=="char"&&!i.extend?(Wn(h,Lr(e,_.slice(0,x).concat(_.slice(x+1)),0),{scroll:!1,origin:"*mouse"}),w=h.sel):Ra(h,x,m,xt):(x=0,Wn(h,new Xn([m],0),xt),w=h.sel);var q=s;function se(ze){if(He(q,ze)!=0)if(q=ze,i.unit=="rectangle"){for(var Ge=[],ot=e.options.tabSize,Ve=Ke(Je(h,s.line).text,s.ch,ot),St=Ke(Je(h,ze.line).text,ze.ch,ot),Et=Math.min(Ve,St),Bn=Math.max(Ve,St),sn=Math.min(s.line,ze.line),xr=Math.min(e.lastLine(),Math.max(s.line,ze.line));sn<=xr;sn++){var lr=Je(h,sn).text,yn=Ue(lr,Et,ot);Et==Bn?Ge.push(new At(pe(sn,yn),pe(sn,yn))):lr.length>yn&&Ge.push(new At(pe(sn,yn),pe(sn,Ue(lr,Bn,ot))))}Ge.length||Ge.push(new At(s,s)),Wn(h,Lr(e,w.ranges.slice(0,x).concat(Ge),x),{origin:"*mouse",scroll:!1}),e.scrollIntoView(ze)}else{var br=m,Tn=sa(e,ze,i.unit),vn=br.anchor,Dt;He(Tn.anchor,vn)>0?(Dt=Tn.head,vn=Kr(br.from(),Tn.anchor)):(Dt=Tn.anchor,vn=kn(br.to(),Tn.head));var dt=w.ranges.slice(0);dt[x]=Mu(e,new At(gt(h,vn),Dt)),Wn(h,Lr(e,dt,x),xt)}}var ne=a.wrapper.getBoundingClientRect(),ye=0;function be(ze){var Ge=++ye,ot=ms(e,ze,!0,i.unit=="rectangle");if(ot)if(He(ot,q)!=0){e.curOp.focus=N(Ie(e)),se(ot);var Ve=gs(a,h);(ot.line>=Ve.to||ot.line<Ve.from)&&setTimeout(pn(e,function(){ye==Ge&&be(ze)}),150)}else{var St=ze.clientY<ne.top?-20:ze.clientY>ne.bottom?20:0;St&&setTimeout(pn(e,function(){ye==Ge&&(a.scroller.scrollTop+=St,be(ze))}),50)}}function Ae(ze){e.state.selectingText=!1,ye=1/0,ze&&(bn(ze),a.input.focus()),tn(a.wrapper.ownerDocument,"mousemove",Ee),tn(a.wrapper.ownerDocument,"mouseup",Fe),h.history.lastSelOrigin=null}var Ee=pn(e,function(ze){ze.buttons===0||!En(ze)?Ae(ze):be(ze)}),Fe=pn(e,Ae);e.state.selectingText=Fe,rt(a.wrapper.ownerDocument,"mousemove",Ee),rt(a.wrapper.ownerDocument,"mouseup",Fe)}function Mu(e,n){var s=n.anchor,i=n.head,a=Je(e.doc,s.line);if(He(s,i)==0&&s.sticky==i.sticky)return n;var h=bt(a);if(!h)return n;var m=Br(h,s.ch,s.sticky),x=h[m];if(x.from!=s.ch&&x.to!=s.ch)return n;var w=m+(x.from==s.ch==(x.level!=1)?0:1);if(w==0||w==h.length)return n;var _;if(i.line!=s.line)_=(i.line-s.line)*(e.doc.direction=="ltr"?1:-1)>0;else{var z=Br(h,i.ch,i.sticky),q=z-m||(i.ch-s.ch)*(x.level==1?-1:1);z==w-1||z==w?_=q<0:_=q>0}var se=h[w+(_?-1:0)],ne=_==(se.level==1),ye=ne?se.from:se.to,be=ne?"after":"before";return s.ch==ye&&s.sticky==be?n:new At(new pe(s.line,ye,be),i)}function Kc(e,n,s,i){var a,h;if(n.touches)a=n.touches[0].clientX,h=n.touches[0].clientY;else try{a=n.clientX,h=n.clientY}catch{return!1}if(a>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;i&&bn(n);var m=e.display,x=m.lineDiv.getBoundingClientRect();if(h>x.bottom||!mn(e,s))return In(n);h-=x.top-m.viewOffset;for(var w=0;w<e.display.gutterSpecs.length;++w){var _=m.gutters.childNodes[w];if(_&&_.getBoundingClientRect().right>=a){var z=U(e.doc,h),q=e.display.gutterSpecs[w];return It(e,s,e,z,q.className,n),In(n)}}}function Al(e,n){return Kc(e,n,"gutterClick",!0)}function Du(e,n){qi(e.display,n)||$c(e,n)||qt(e,n,"contextmenu")||ke||e.display.input.onContextMenu(n)}function $c(e,n){return mn(e,"gutterContextMenu")?Kc(e,n,"gutterContextMenu",!1):!1}function zu(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),ba(e)}var aa={toString:function(){return"CodeMirror.Init"}},Gc={},er={};function vr(e){var n=e.optionHandlers;function s(i,a,h,m){e.defaults[i]=a,h&&(n[i]=m?function(x,w,_){_!=aa&&h(x,w,_)}:h)}e.defineOption=s,e.Init=aa,s("value","",function(i,a){return i.setValue(a)},!0),s("mode",null,function(i,a){i.doc.modeOption=a,bl(i)},!0),s("indentUnit",2,bl,!0),s("indentWithTabs",!1),s("smartIndent",!0),s("tabSize",4,function(i){Gs(i),ba(i),sr(i)},!0),s("lineSeparator",null,function(i,a){if(i.doc.lineSep=a,!!a){var h=[],m=i.doc.first;i.doc.iter(function(w){for(var _=0;;){var z=w.text.indexOf(a,_);if(z==-1)break;_=z+a.length,h.push(pe(m,z))}m++});for(var x=h.length-1;x>=0;x--)Qs(i.doc,a,h[x],pe(h[x].line,h[x].ch+a.length))}}),s("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,function(i,a,h){i.state.specialChars=new RegExp(a.source+(a.test("	")?"":"|	"),"g"),h!=aa&&i.refresh()}),s("specialCharPlaceholder",Kd,function(i){return i.refresh()},!0),s("electricChars",!0),s("inputStyle",W?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),s("spellcheck",!1,function(i,a){return i.getInputField().spellcheck=a},!0),s("autocorrect",!1,function(i,a){return i.getInputField().autocorrect=a},!0),s("autocapitalize",!1,function(i,a){return i.getInputField().autocapitalize=a},!0),s("rtlMoveVisually",!le),s("wholeLineUpdateBefore",!0),s("theme","default",function(i){zu(i),zr(i)},!0),s("keyMap","default",function(i,a,h){var m=Ns(a),x=h!=aa&&Ns(h);x&&x.detach&&x.detach(i,m),m.attach&&m.attach(i,x||null)}),s("extraKeys",null),s("configureMouse",null),s("lineWrapping",!1,Vc,!0),s("gutters",[],function(i,a){i.display.gutterSpecs=Ea(a,i.options.lineNumbers),zr(i)},!0),s("fixedGutter",!0,function(i,a){i.display.gutters.style.left=a?Sa(i.display)+"px":"0",i.refresh()},!0),s("coverGutterNextToScrollbar",!1,function(i){return Us(i)},!0),s("scrollbarStyle","native",function(i){vl(i),Us(i),i.display.scrollbars.setScrollTop(i.doc.scrollTop),i.display.scrollbars.setScrollLeft(i.doc.scrollLeft)},!0),s("lineNumbers",!1,function(i,a){i.display.gutterSpecs=Ea(i.options.gutters,a),zr(i)},!0),s("firstLineNumber",1,zr,!0),s("lineNumberFormatter",function(i){return i},zr,!0),s("showCursorWhenSelecting",!1,Gr,!0),s("resetSelectionOnContextMenu",!0),s("lineWiseCopyCut",!0),s("pasteLinesPerSelection",!0),s("selectionsMayTouch",!1),s("readOnly",!1,function(i,a){a=="nocursor"&&(Wt(i),i.display.input.blur()),i.display.input.readOnlyChanged(a)}),s("screenReaderLabel",null,function(i,a){a=a===""?null:a,i.display.input.screenReaderLabelChanged(a)}),s("disableInput",!1,function(i,a){a||i.display.input.reset()},!0),s("dragDrop",!0,Yc),s("allowDropFileTypes",null),s("cursorBlinkRate",530),s("cursorScrollMargin",0),s("cursorHeight",1,Gr,!0),s("singleCursorHeightPerLine",!0,Gr,!0),s("workTime",100),s("workDelay",100),s("flattenSpans",!0,Gs,!0),s("addModeClass",!1,Gs,!0),s("pollInterval",100),s("undoDepth",200,function(i,a){return i.doc.history.undoDepth=a}),s("historyEventDelay",1250),s("viewportMargin",10,function(i){return i.refresh()},!0),s("maxHighlightLength",1e4,Gs,!0),s("moveInputWithCursor",!0,function(i,a){a||i.display.input.resetPosition()}),s("tabindex",null,function(i,a){return i.display.input.getField().tabIndex=a||""}),s("autofocus",null),s("direction","ltr",function(i,a){return i.doc.setDirection(a)},!0),s("phrases",null)}function Yc(e,n,s){var i=s&&s!=aa;if(!n!=!i){var a=e.display.dragFunctions,h=n?rt:tn;h(e.display.scroller,"dragstart",a.start),h(e.display.scroller,"dragenter",a.enter),h(e.display.scroller,"dragover",a.over),h(e.display.scroller,"dragleave",a.leave),h(e.display.scroller,"drop",a.drop)}}function Vc(e){e.options.lineWrapping?(K(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Ce(e.display.wrapper,"CodeMirror-wrap"),lo(e)),yo(e),sr(e),ba(e),setTimeout(function(){return Us(e)},100)}function en(e,n){var s=this;if(!(this instanceof en))return new en(e,n);this.options=n=n?Be(n):{},Be(Gc,n,!1);var i=n.value;typeof i=="string"?i=new Ot(i,n.mode,null,n.lineSeparator,n.direction):n.mode&&(i.modeOption=n.mode),this.doc=i;var a=new en.inputStyles[n.inputStyle](this),h=this.display=new xl(e,i,a,n);h.wrapper.CodeMirror=this,zu(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),vl(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new et,keySeq:null,specialChars:null},n.autofocus&&!W&&h.input.focus(),k&&j<11&&setTimeout(function(){return s.display.input.reset(!0)},20),Jc(this),wu(),bs(this),this.curOp.forceUpdate=!0,rn(this,i),n.autofocus&&!W||this.hasFocus()?setTimeout(function(){s.hasFocus()&&!s.state.focused&&gl(s)},20):Wt(this);for(var m in er)er.hasOwnProperty(m)&&er[m](this,n[m],aa);mu(this),n.finishInit&&n.finishInit(this);for(var x=0;x<Rl.length;++x)Rl[x](this);Yr(this),L&&n.lineWrapping&&getComputedStyle(h.lineDiv).textRendering=="optimizelegibility"&&(h.lineDiv.style.textRendering="auto")}en.defaults=Gc,en.optionHandlers=er;function Jc(e){var n=e.display;rt(n.scroller,"mousedown",pn(e,Wo)),k&&j<11?rt(n.scroller,"dblclick",pn(e,function(w){if(!qt(e,w)){var _=ms(e,w);if(!(!_||Al(e,w)||qi(e.display,w))){bn(w);var z=e.findWordAt(_);Po(e.doc,z.anchor,z.head)}}})):rt(n.scroller,"dblclick",function(w){return qt(e,w)||bn(w)}),rt(n.scroller,"contextmenu",function(w){return Du(e,w)}),rt(n.input.getField(),"contextmenu",function(w){n.scroller.contains(w.target)||Du(e,w)});var s,i={end:0};function a(){n.activeTouch&&(s=setTimeout(function(){return n.activeTouch=null},1e3),i=n.activeTouch,i.end=+new Date)}function h(w){if(w.touches.length!=1)return!1;var _=w.touches[0];return _.radiusX<=1&&_.radiusY<=1}function m(w,_){if(_.left==null)return!0;var z=_.left-w.left,q=_.top-w.top;return z*z+q*q>400}rt(n.scroller,"touchstart",function(w){if(!qt(e,w)&&!h(w)&&!Al(e,w)){n.input.ensurePolled(),clearTimeout(s);var _=+new Date;n.activeTouch={start:_,moved:!1,prev:_-i.end<=300?i:null},w.touches.length==1&&(n.activeTouch.left=w.touches[0].pageX,n.activeTouch.top=w.touches[0].pageY)}}),rt(n.scroller,"touchmove",function(){n.activeTouch&&(n.activeTouch.moved=!0)}),rt(n.scroller,"touchend",function(w){var _=n.activeTouch;if(_&&!qi(n,w)&&_.left!=null&&!_.moved&&new Date-_.start<300){var z=e.coordsChar(n.activeTouch,"page"),q;!_.prev||m(_,_.prev)?q=new At(z,z):!_.prev.prev||m(_,_.prev.prev)?q=e.findWordAt(z):q=new At(pe(z.line,0),gt(e.doc,pe(z.line+1,0))),e.setSelection(q.anchor,q.head),e.focus(),bn(w)}a()}),rt(n.scroller,"touchcancel",a),rt(n.scroller,"scroll",function(){n.scroller.clientHeight&&(vs(e,n.scroller.scrollTop),Yi(e,n.scroller.scrollLeft,!0),It(e,"scroll",e))}),rt(n.scroller,"mousewheel",function(w){return Ks(e,w)}),rt(n.scroller,"DOMMouseScroll",function(w){return Ks(e,w)}),rt(n.wrapper,"scroll",function(){return n.wrapper.scrollTop=n.wrapper.scrollLeft=0}),n.dragFunctions={enter:function(w){qt(e,w)||pr(w)},over:function(w){qt(e,w)||(cp(e,w),pr(w))},start:function(w){return Do(e,w)},drop:pn(e,Mo),leave:function(w){qt(e,w)||Zn(e)}};var x=n.input.getField();rt(x,"keyup",function(w){return Pu.call(e,w)}),rt(x,"keydown",pn(e,Lu)),rt(x,"keypress",pn(e,zo)),rt(x,"focus",function(w){return gl(e,w)}),rt(x,"blur",function(w){return Wt(e,w)})}var Rl=[];en.defineInitHook=function(e){return Rl.push(e)};function oa(e,n,s,i){var a=e.doc,h;s==null&&(s="add"),s=="smart"&&(a.mode.indent?h=Nt(e,n).state:s="prev");var m=e.options.tabSize,x=Je(a,n),w=Ke(x.text,null,m);x.stateAfter&&(x.stateAfter=null);var _=x.text.match(/^\s*/)[0],z;if(!i&&!/\S/.test(x.text))z=0,s="not";else if(s=="smart"&&(z=a.mode.indent(h,x.text.slice(_.length),x.text),z==Yt||z>150)){if(!i)return;s="prev"}s=="prev"?n>a.first?z=Ke(Je(a,n-1).text,null,m):z=0:s=="add"?z=w+e.options.indentUnit:s=="subtract"?z=w-e.options.indentUnit:typeof s=="number"&&(z=w+s),z=Math.max(0,z);var q="",se=0;if(e.options.indentWithTabs)for(var ne=Math.floor(z/m);ne;--ne)se+=m,q+="	";if(se<z&&(q+=yt(z-se)),q!=_)return Qs(a,q,pe(n,0),pe(n,_.length),"+input"),x.stateAfter=null,!0;for(var ye=0;ye<a.sel.ranges.length;ye++){var be=a.sel.ranges[ye];if(be.head.line==n&&be.head.ch<_.length){var Ae=pe(n,_.length);Ra(a,ye,new At(Ae,Ae));break}}}var Qr=null;function Ka(e){Qr=e}function Il(e,n,s,i,a){var h=e.doc;e.display.shift=!1,i||(i=h.sel);var m=+new Date-200,x=a=="paste"||e.state.pasteIncoming>m,w=Tr(n),_=null;if(x&&i.ranges.length>1)if(Qr&&Qr.text.join(`
`)==n){if(i.ranges.length%Qr.text.length==0){_=[];for(var z=0;z<Qr.text.length;z++)_.push(h.splitLines(Qr.text[z]))}}else w.length==i.ranges.length&&e.options.pasteLinesPerSelection&&(_=ut(w,function(Ee){return[Ee]}));for(var q=e.curOp.updateInput,se=i.ranges.length-1;se>=0;se--){var ne=i.ranges[se],ye=ne.from(),be=ne.to();ne.empty()&&(s&&s>0?ye=pe(ye.line,ye.ch-s):e.state.overwrite&&!x?be=pe(be.line,Math.min(Je(h,be.line).text.length,be.ch+Qe(w).length)):x&&Qr&&Qr.lineWise&&Qr.text.join(`
`)==w.join(`
`)&&(ye=be=pe(ye.line,0)));var Ae={from:ye,to:be,text:_?_[se%_.length]:w,origin:a||(x?"paste":e.state.cutIncoming>m?"cut":"+input")};Xs(e.doc,Ae),Dn(e,"inputRead",e,Ae)}n&&!x&&Ol(e,n),Hs(e),e.curOp.updateInput<2&&(e.curOp.updateInput=q),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Fu(e,n){var s=e.clipboardData&&e.clipboardData.getData("Text");if(s)return e.preventDefault(),!n.isReadOnly()&&!n.options.disableInput&&n.hasFocus()&&Ln(n,function(){return Il(n,s,0,null,"paste")}),!0}function Ol(e,n){if(!(!e.options.electricChars||!e.options.smartIndent))for(var s=e.doc.sel,i=s.ranges.length-1;i>=0;i--){var a=s.ranges[i];if(!(a.head.ch>100||i&&s.ranges[i-1].head.line==a.head.line)){var h=e.getModeAt(a.head),m=!1;if(h.electricChars){for(var x=0;x<h.electricChars.length;x++)if(n.indexOf(h.electricChars.charAt(x))>-1){m=oa(e,a.head.line,"smart");break}}else h.electricInput&&h.electricInput.test(Je(e.doc,a.head.line).text.slice(0,a.head.ch))&&(m=oa(e,a.head.line,"smart"));m&&Dn(e,"electricInput",e,a.head.line)}}}function Ml(e){for(var n=[],s=[],i=0;i<e.doc.sel.ranges.length;i++){var a=e.doc.sel.ranges[i].head.line,h={anchor:pe(a,0),head:pe(a+1,0)};s.push(h),n.push(e.getRange(h.anchor,h.head))}return{text:n,ranges:s}}function Dl(e,n,s,i){e.setAttribute("autocorrect",s?"on":"off"),e.setAttribute("autocapitalize",i?"on":"off"),e.setAttribute("spellcheck",!!n)}function zl(){var e=E("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),n=E("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return L?e.style.width="1000px":e.setAttribute("wrap","off"),F&&(e.style.border="1px solid black"),n}function Fl(e){var n=e.optionHandlers,s=e.helpers={};e.prototype={constructor:e,focus:function(){Oe(this).focus(),this.display.input.focus()},setOption:function(i,a){var h=this.options,m=h[i];h[i]==a&&i!="mode"||(h[i]=a,n.hasOwnProperty(i)&&pn(this,n[i])(this,a,m),It(this,"optionChange",this,i))},getOption:function(i){return this.options[i]},getDoc:function(){return this.doc},addKeyMap:function(i,a){this.state.keyMaps[a?"push":"unshift"](Ns(i))},removeKeyMap:function(i){for(var a=this.state.keyMaps,h=0;h<a.length;++h)if(a[h]==i||a[h].name==i)return a.splice(h,1),!0},addOverlay:Cn(function(i,a){var h=i.token?i:e.getMode(this.options,i);if(h.startState)throw new Error("Overlays may not be stateful.");oe(this.state.overlays,{mode:h,modeSpec:i,opaque:a&&a.opaque,priority:a&&a.priority||0},function(m){return m.priority}),this.state.modeGen++,sr(this)}),removeOverlay:Cn(function(i){for(var a=this.state.overlays,h=0;h<a.length;++h){var m=a[h].modeSpec;if(m==i||typeof i=="string"&&m.name==i){a.splice(h,1),this.state.modeGen++,sr(this);return}}}),indentLine:Cn(function(i,a,h){typeof a!="string"&&typeof a!="number"&&(a==null?a=this.options.smartIndent?"smart":"prev":a=a?"add":"subtract"),ge(this.doc,i)&&oa(this,i,a,h)}),indentSelection:Cn(function(i){for(var a=this.doc.sel.ranges,h=-1,m=0;m<a.length;m++){var x=a[m];if(x.empty())x.head.line>h&&(oa(this,x.head.line,i,!0),h=x.head.line,m==this.doc.sel.primIndex&&Hs(this));else{var w=x.from(),_=x.to(),z=Math.max(h,w.line);h=Math.min(this.lastLine(),_.line-(_.ch?0:1))+1;for(var q=z;q<h;++q)oa(this,q,i);var se=this.doc.sel.ranges;w.ch==0&&a.length==se.length&&se[m].from().ch>0&&Ra(this.doc,m,new At(w,se[m].to()),Ct)}}}),getTokenAt:function(i,a){return xi(this,i,a)},getLineTokens:function(i,a){return xi(this,pe(i),a,!0)},getTokenTypeAt:function(i){i=gt(this.doc,i);var a=Wi(this,Je(this.doc,i.line)),h=0,m=(a.length-1)/2,x=i.ch,w;if(x==0)w=a[2];else for(;;){var _=h+m>>1;if((_?a[_*2-1]:0)>=x)m=_;else if(a[_*2+1]<x)h=_+1;else{w=a[_*2+2];break}}var z=w?w.indexOf("overlay "):-1;return z<0?w:z==0?null:w.slice(0,z-1)},getModeAt:function(i){var a=this.doc.mode;return a.innerMode?e.innerMode(a,this.getTokenAt(i).state).mode:a},getHelper:function(i,a){return this.getHelpers(i,a)[0]},getHelpers:function(i,a){var h=[];if(!s.hasOwnProperty(a))return h;var m=s[a],x=this.getModeAt(i);if(typeof x[a]=="string")m[x[a]]&&h.push(m[x[a]]);else if(x[a])for(var w=0;w<x[a].length;w++){var _=m[x[a][w]];_&&h.push(_)}else x.helperType&&m[x.helperType]?h.push(m[x.helperType]):m[x.name]&&h.push(m[x.name]);for(var z=0;z<m._global.length;z++){var q=m._global[z];q.pred(x,this)&&$e(h,q.val)==-1&&h.push(q.val)}return h},getStateAfter:function(i,a){var h=this.doc;return i=nl(h,i??h.first+h.size-1),Nt(this,i+1,a).state},cursorCoords:function(i,a){var h,m=this.doc.sel.primary();return i==null?h=m.head:typeof i=="object"?h=gt(this.doc,i):h=i?m.from():m.to(),_n(this,h,a||"page")},charCoords:function(i,a){return ul(this,gt(this.doc,i),a||"page")},coordsChar:function(i,a){return i=_c(this,i,a||"page"),dl(this,i.left,i.top)},lineAtHeight:function(i,a){return i=_c(this,{top:i,left:0},a||"page").top,U(this.doc,i+this.display.viewOffset)},heightAtLine:function(i,a,h){var m=!1,x;if(typeof i=="number"){var w=this.doc.first+this.doc.size-1;i<this.doc.first?i=this.doc.first:i>w&&(i=w,m=!0),x=Je(this.doc,i)}else x=i;return ll(this,x,{top:0,left:0},a||"page",h||m).top+(m?this.doc.height-Sn(x):0)},defaultTextHeight:function(){return Si(this.display)},defaultCharWidth:function(){return fs(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(i,a,h,m,x){var w=this.display;i=_n(this,gt(this.doc,i));var _=i.bottom,z=i.left;if(a.style.position="absolute",a.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(a),w.sizer.appendChild(a),m=="over")_=i.top;else if(m=="above"||m=="near"){var q=Math.max(w.wrapper.clientHeight,this.doc.height),se=Math.max(w.sizer.clientWidth,w.lineSpace.clientWidth);(m=="above"||i.bottom+a.offsetHeight>q)&&i.top>a.offsetHeight?_=i.top-a.offsetHeight:i.bottom+a.offsetHeight<=q&&(_=i.bottom),z+a.offsetWidth>se&&(z=se-a.offsetWidth)}a.style.top=_+"px",a.style.left=a.style.right="",x=="right"?(z=w.sizer.clientWidth-a.offsetWidth,a.style.right="0px"):(x=="left"?z=0:x=="middle"&&(z=(w.sizer.clientWidth-a.offsetWidth)/2),a.style.left=z+"px"),h&&wo(this,{left:z,top:_,right:z+a.offsetWidth,bottom:_+a.offsetHeight})},triggerOnKeyDown:Cn(Lu),triggerOnKeyPress:Cn(zo),triggerOnKeyUp:Pu,triggerOnMouseDown:Cn(Wo),execCommand:function(i){if(Ba.hasOwnProperty(i))return Ba[i].call(null,this)},triggerElectric:Cn(function(i){Ol(this,i)}),findPosH:function(i,a,h,m){var x=1;a<0&&(x=-1,a=-a);for(var w=gt(this.doc,i),_=0;_<a&&(w=Wu(this.doc,w,x,h,m),!w.hitSide);++_);return w},moveH:Cn(function(i,a){var h=this;this.extendSelectionsBy(function(m){return h.display.shift||h.doc.extend||m.empty()?Wu(h.doc,m.head,i,a,h.options.rtlMoveVisually):i<0?m.from():m.to()},tt)}),deleteH:Cn(function(i,a){var h=this.doc.sel,m=this.doc;h.somethingSelected()?m.replaceSelection("",null,"+delete"):ia(this,function(x){var w=Wu(m,x.head,i,a,!1);return i<0?{from:w,to:x.head}:{from:x.head,to:w}})}),findPosV:function(i,a,h,m){var x=1,w=m;a<0&&(x=-1,a=-a);for(var _=gt(this.doc,i),z=0;z<a;++z){var q=_n(this,_,"div");if(w==null?w=q.left:q.left=w,_=Hu(this,q,x,h),_.hitSide)break}return _},moveV:Cn(function(i,a){var h=this,m=this.doc,x=[],w=!this.display.shift&&!m.extend&&m.sel.somethingSelected();if(m.extendSelectionsBy(function(z){if(w)return i<0?z.from():z.to();var q=_n(h,z.head,"div");z.goalColumn!=null&&(q.left=z.goalColumn),x.push(q.left);var se=Hu(h,q,i,a);return a=="page"&&z==m.sel.primary()&&ys(h,ul(h,se,"div").top-q.top),se},tt),x.length)for(var _=0;_<m.sel.ranges.length;_++)m.sel.ranges[_].goalColumn=x[_]}),findWordAt:function(i){var a=this.doc,h=Je(a,i.line).text,m=i.ch,x=i.ch;if(h){var w=this.getHelper(i,"wordChars");(i.sticky=="before"||x==h.length)&&m?--m:++x;for(var _=h.charAt(m),z=at(_,w)?function(q){return at(q,w)}:/\s/.test(_)?function(q){return/\s/.test(q)}:function(q){return!/\s/.test(q)&&!at(q)};m>0&&z(h.charAt(m-1));)--m;for(;x<h.length&&z(h.charAt(x));)++x}return new At(pe(i.line,m),pe(i.line,x))},toggleOverwrite:function(i){i!=null&&i==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?K(this.display.cursorDiv,"CodeMirror-overwrite"):Ce(this.display.cursorDiv,"CodeMirror-overwrite"),It(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==N(Ie(this))},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:Cn(function(i,a){ko(this,i,a)}),getScrollInfo:function(){var i=this.display.scroller;return{left:i.scrollLeft,top:i.scrollTop,height:i.scrollHeight-si(this)-this.display.barHeight,width:i.scrollWidth-si(this)-this.display.barWidth,clientHeight:hs(this),clientWidth:ps(this)}},scrollIntoView:Cn(function(i,a){i==null?(i={from:this.doc.sel.primary().head,to:null},a==null&&(a=this.options.cursorScrollMargin)):typeof i=="number"?i={from:pe(i,0),to:null}:i.from==null&&(i={from:i,to:null}),i.to||(i.to=i.from),i.margin=a||0,i.from.line!=null?op(this,i):_o(this,i.from,i.to,i.margin)}),setSize:Cn(function(i,a){var h=this,m=function(w){return typeof w=="number"||/^\d+$/.test(String(w))?w+"px":w};i!=null&&(this.display.wrapper.style.width=m(i)),a!=null&&(this.display.wrapper.style.height=m(a)),this.options.lineWrapping&&au(this);var x=this.display.viewFrom;this.doc.iter(x,this.display.viewTo,function(w){if(w.widgets){for(var _=0;_<w.widgets.length;_++)if(w.widgets[_].noHScroll){$i(h,x,"widget");break}}++x}),this.curOp.forceUpdate=!0,It(this,"refresh",this)}),operation:function(i){return Ln(this,i)},startOperation:function(){return bs(this)},endOperation:function(){return Yr(this)},refresh:Cn(function(){var i=this.display.cachedTextHeight;sr(this),this.curOp.forceUpdate=!0,ba(this),ko(this,this.doc.scrollLeft,this.doc.scrollTop),ar(this.display),(i==null||Math.abs(i-Si(this.display))>.5||this.options.lineWrapping)&&yo(this),It(this,"refresh",this)}),swapDoc:Cn(function(i){var a=this.doc;return a.cm=null,this.state.selectingText&&this.state.selectingText(),rn(this,i),ba(this),this.display.input.reset(),ko(this,i.scrollLeft,i.scrollTop),this.curOp.forceScroll=!0,Dn(this,"swapDoc",this,a),a}),phrase:function(i){var a=this.options.phrases;return a&&Object.prototype.hasOwnProperty.call(a,i)?a[i]:i},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Nn(e),e.registerHelper=function(i,a,h){s.hasOwnProperty(i)||(s[i]=e[i]={_global:[]}),s[i][a]=h},e.registerGlobalHelper=function(i,a,h,m){e.registerHelper(i,a,m),s[i]._global.push({pred:h,val:m})}}function Wu(e,n,s,i,a){var h=n,m=s,x=Je(e,n.line),w=a&&e.direction=="rtl"?-s:s;function _(){var Fe=n.line+w;return Fe<e.first||Fe>=e.first+e.size?!1:(n=new pe(Fe,n.ch,n.sticky),x=Je(e,Fe))}function z(Fe){var ze;if(i=="codepoint"){var Ge=x.text.charCodeAt(n.ch+(s>0?0:-1));if(isNaN(Ge))ze=null;else{var ot=s>0?Ge>=55296&&Ge<56320:Ge>=56320&&Ge<57343;ze=new pe(n.line,Math.max(0,Math.min(x.text.length,n.ch+s*(ot?2:1))),-s)}}else a?ze=Cu(e.cm,x,n,s):ze=Ha(x,n,s);if(ze==null)if(!Fe&&_())n=Pl(a,e.cm,x,n.line,w);else return!1;else n=ze;return!0}if(i=="char"||i=="codepoint")z();else if(i=="column")z(!0);else if(i=="word"||i=="group")for(var q=null,se=i=="group",ne=e.cm&&e.cm.getHelper(n,"wordChars"),ye=!0;!(s<0&&!z(!ye));ye=!1){var be=x.text.charAt(n.ch)||`
`,Ae=at(be,ne)?"w":se&&be==`
`?"n":!se||/\s/.test(be)?null:"p";if(se&&!ye&&!Ae&&(Ae="s"),q&&q!=Ae){s<0&&(s=1,z(),n.sticky="after");break}if(Ae&&(q=Ae),s>0&&!z(!ye))break}var Ee=Ro(e,n,h,m,!0);return jt(h,Ee)&&(Ee.hitSide=!0),Ee}function Hu(e,n,s,i){var a=e.doc,h=n.left,m;if(i=="page"){var x=Math.min(e.display.wrapper.clientHeight,Oe(e).innerHeight||a(e).documentElement.clientHeight),w=Math.max(x-.5*Si(e.display),3);m=(s>0?n.bottom:n.top)+s*w}else i=="line"&&(m=s>0?n.bottom+3:n.top-3);for(var _;_=dl(e,h,m),!!_.outside;){if(s<0?m<=0:m>=a.height){_.hitSide=!0;break}m+=s*5}return _}var Mt=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new et,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};Mt.prototype.init=function(e){var n=this,s=this,i=s.cm,a=s.div=e.lineDiv;a.contentEditable=!0,Dl(a,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize);function h(x){for(var w=x.target;w;w=w.parentNode){if(w==a)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(w.className))break}return!1}rt(a,"paste",function(x){!h(x)||qt(i,x)||Fu(x,i)||j<=11&&setTimeout(pn(i,function(){return n.updateFromDOM()}),20)}),rt(a,"compositionstart",function(x){n.composing={data:x.data,done:!1}}),rt(a,"compositionupdate",function(x){n.composing||(n.composing={data:x.data,done:!1})}),rt(a,"compositionend",function(x){n.composing&&(x.data!=n.composing.data&&n.readFromDOMSoon(),n.composing.done=!0)}),rt(a,"touchstart",function(){return s.forceCompositionEnd()}),rt(a,"input",function(){n.composing||n.readFromDOMSoon()});function m(x){if(!(!h(x)||qt(i,x))){if(i.somethingSelected())Ka({lineWise:!1,text:i.getSelections()}),x.type=="cut"&&i.replaceSelection("",null,"cut");else if(i.options.lineWiseCopyCut){var w=Ml(i);Ka({lineWise:!0,text:w.text}),x.type=="cut"&&i.operation(function(){i.setSelections(w.ranges,0,Ct),i.replaceSelection("",null,"cut")})}else return;if(x.clipboardData){x.clipboardData.clearData();var _=Qr.text.join(`
`);if(x.clipboardData.setData("Text",_),x.clipboardData.getData("Text")==_){x.preventDefault();return}}var z=zl(),q=z.firstChild;Dl(q),i.display.lineSpace.insertBefore(z,i.display.lineSpace.firstChild),q.value=Qr.text.join(`
`);var se=N(qe(a));ee(q),setTimeout(function(){i.display.lineSpace.removeChild(z),se.focus(),se==a&&s.showPrimarySelection()},50)}}rt(a,"copy",m),rt(a,"cut",m)},Mt.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Mt.prototype.prepareSelection=function(){var e=hl(this.cm,!1);return e.focus=N(qe(this.div))==this.div,e},Mt.prototype.showSelection=function(e,n){!e||!this.cm.display.view.length||((e.focus||n)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Mt.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Mt.prototype.showPrimarySelection=function(){var e=this.getSelection(),n=this.cm,s=n.doc.sel.primary(),i=s.from(),a=s.to();if(n.display.viewTo==n.display.viewFrom||i.line>=n.display.viewTo||a.line<n.display.viewFrom){e.removeAllRanges();return}var h=Ho(n,e.anchorNode,e.anchorOffset),m=Ho(n,e.focusNode,e.focusOffset);if(!(h&&!h.bad&&m&&!m.bad&&He(Kr(h,m),i)==0&&He(kn(h,m),a)==0)){var x=n.display.view,w=i.line>=n.display.viewFrom&&Bu(n,i)||{node:x[0].measure.map[2],offset:0},_=a.line<n.display.viewTo&&Bu(n,a);if(!_){var z=x[x.length-1].measure,q=z.maps?z.maps[z.maps.length-1]:z.map;_={node:q[q.length-1],offset:q[q.length-2]-q[q.length-3]}}if(!w||!_){e.removeAllRanges();return}var se=e.rangeCount&&e.getRangeAt(0),ne;try{ne=Q(w.node,w.offset,_.offset,_.node)}catch{}ne&&(!y&&n.state.focused?(e.collapse(w.node,w.offset),ne.collapsed||(e.removeAllRanges(),e.addRange(ne))):(e.removeAllRanges(),e.addRange(ne)),se&&e.anchorNode==null?e.addRange(se):y&&this.startGracePeriod()),this.rememberSelection()}},Mt.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Mt.prototype.showMultipleSelections=function(e){he(this.cm.display.cursorDiv,e.cursors),he(this.cm.display.selectionDiv,e.selection)},Mt.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Mt.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var n=e.getRangeAt(0).commonAncestorContainer;return A(this.div,n)},Mt.prototype.focus=function(){this.cm.options.readOnly!="nocursor"&&((!this.selectionInEditor()||N(qe(this.div))!=this.div)&&this.showSelection(this.prepareSelection(),!0),this.div.focus())},Mt.prototype.blur=function(){this.div.blur()},Mt.prototype.getField=function(){return this.div},Mt.prototype.supportsTouch=function(){return!0},Mt.prototype.receivedFocus=function(){var e=this,n=this;this.selectionInEditor()?setTimeout(function(){return e.pollSelection()},20):Ln(this.cm,function(){return n.cm.curOp.selectionChanged=!0});function s(){n.cm.state.focused&&(n.pollSelection(),n.polling.set(n.cm.options.pollInterval,s))}this.polling.set(this.cm.options.pollInterval,s)},Mt.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Mt.prototype.pollSelection=function(){if(!(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged())){var e=this.getSelection(),n=this.cm;if(B&&R&&this.cm.display.gutterSpecs.length&&Wl(e.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();return}if(!this.composing){this.rememberSelection();var s=Ho(n,e.anchorNode,e.anchorOffset),i=Ho(n,e.focusNode,e.focusOffset);s&&i&&Ln(n,function(){Wn(n.doc,zn(s,i),Ct),(s.bad||i.bad)&&(n.curOp.selectionChanged=!0)})}}},Mt.prototype.pollContent=function(){this.readDOMTimeout!=null&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e=this.cm,n=e.display,s=e.doc.sel.primary(),i=s.from(),a=s.to();if(i.ch==0&&i.line>e.firstLine()&&(i=pe(i.line-1,Je(e.doc,i.line-1).length)),a.ch==Je(e.doc,a.line).text.length&&a.line<e.lastLine()&&(a=pe(a.line+1,0)),i.line<n.viewFrom||a.line>n.viewTo-1)return!1;var h,m,x;i.line==n.viewFrom||(h=_i(e,i.line))==0?(m=T(n.view[0].line),x=n.view[0].node):(m=T(n.view[h].line),x=n.view[h-1].node.nextSibling);var w=_i(e,a.line),_,z;if(w==n.view.length-1?(_=n.viewTo-1,z=n.lineDiv.lastChild):(_=T(n.view[w+1].line)-1,z=n.view[w+1].node.previousSibling),!x)return!1;for(var q=e.doc.splitLines(hp(e,x,z,m,_)),se=ri(e.doc,pe(m,0),pe(_,Je(e.doc,_).text.length));q.length>1&&se.length>1;)if(Qe(q)==Qe(se))q.pop(),se.pop(),_--;else if(q[0]==se[0])q.shift(),se.shift(),m++;else break;for(var ne=0,ye=0,be=q[0],Ae=se[0],Ee=Math.min(be.length,Ae.length);ne<Ee&&be.charCodeAt(ne)==Ae.charCodeAt(ne);)++ne;for(var Fe=Qe(q),ze=Qe(se),Ge=Math.min(Fe.length-(q.length==1?ne:0),ze.length-(se.length==1?ne:0));ye<Ge&&Fe.charCodeAt(Fe.length-ye-1)==ze.charCodeAt(ze.length-ye-1);)++ye;if(q.length==1&&se.length==1&&m==i.line)for(;ne&&ne>i.ch&&Fe.charCodeAt(Fe.length-ye-1)==ze.charCodeAt(ze.length-ye-1);)ne--,ye++;q[q.length-1]=Fe.slice(0,Fe.length-ye).replace(/^\u200b+/,""),q[0]=q[0].slice(ne).replace(/\u200b+$/,"");var ot=pe(m,ne),Ve=pe(_,se.length?Qe(se).length-ye:0);if(q.length>1||q[0]||He(ot,Ve))return Qs(e.doc,q,ot,Ve,"+input"),!0},Mt.prototype.ensurePolled=function(){this.forceCompositionEnd()},Mt.prototype.reset=function(){this.forceCompositionEnd()},Mt.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Mt.prototype.readFromDOMSoon=function(){var e=this;this.readDOMTimeout==null&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing)if(e.composing.done)e.composing=null;else return;e.updateFromDOM()},80))},Mt.prototype.updateFromDOM=function(){var e=this;(this.cm.isReadOnly()||!this.pollContent())&&Ln(this.cm,function(){return sr(e.cm)})},Mt.prototype.setUneditable=function(e){e.contentEditable="false"},Mt.prototype.onKeyPress=function(e){e.charCode==0||this.composing||(e.preventDefault(),this.cm.isReadOnly()||pn(this.cm,Il)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0))},Mt.prototype.readOnlyChanged=function(e){this.div.contentEditable=String(e!="nocursor")},Mt.prototype.onContextMenu=function(){},Mt.prototype.resetPosition=function(){},Mt.prototype.needsContentAttribute=!0;function Bu(e,n){var s=al(e,n.line);if(!s||s.hidden)return null;var i=Je(e.doc,n.line),a=bc(s,i,n.line),h=bt(i,e.doc.direction),m="left";if(h){var x=Br(h,n.ch);m=x%2?"right":"left"}var w=mo(a.map,n.ch,m);return w.offset=w.collapse=="right"?w.end:w.start,w}function Wl(e){for(var n=e;n;n=n.parentNode)if(/CodeMirror-gutter-wrapper/.test(n.className))return!0;return!1}function Pr(e,n){return n&&(e.bad=!0),e}function hp(e,n,s,i,a){var h="",m=!1,x=e.doc.lineSeparator(),w=!1;function _(ne){return function(ye){return ye.id==ne}}function z(){m&&(h+=x,w&&(h+=x),m=w=!1)}function q(ne){ne&&(z(),h+=ne)}function se(ne){if(ne.nodeType==1){var ye=ne.getAttribute("cm-text");if(ye){q(ye);return}var be=ne.getAttribute("cm-marker"),Ae;if(be){var Ee=e.findMarks(pe(i,0),pe(a+1,0),_(+be));Ee.length&&(Ae=Ee[0].find(0))&&q(ri(e.doc,Ae.from,Ae.to).join(x));return}if(ne.getAttribute("contenteditable")=="false")return;var Fe=/^(pre|div|p|li|table|br)$/i.test(ne.nodeName);if(!/^br$/i.test(ne.nodeName)&&ne.textContent.length==0)return;Fe&&z();for(var ze=0;ze<ne.childNodes.length;ze++)se(ne.childNodes[ze]);/^(pre|p)$/i.test(ne.nodeName)&&(w=!0),Fe&&(m=!0)}else ne.nodeType==3&&q(ne.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;se(n),n!=s;)n=n.nextSibling,w=!1;return h}function Ho(e,n,s){var i;if(n==e.display.lineDiv){if(i=e.display.lineDiv.childNodes[s],!i)return Pr(e.clipPos(pe(e.display.viewTo-1)),!0);n=null,s=0}else for(i=n;;i=i.parentNode){if(!i||i==e.display.lineDiv)return null;if(i.parentNode&&i.parentNode==e.display.lineDiv)break}for(var a=0;a<e.display.view.length;a++){var h=e.display.view[a];if(h.node==i)return Uu(h,n,s)}}function Uu(e,n,s){var i=e.text.firstChild,a=!1;if(!n||!A(i,n))return Pr(pe(T(e.line),0),!0);if(n==i&&(a=!0,n=i.childNodes[s],s=0,!n)){var h=e.rest?Qe(e.rest):e.line;return Pr(pe(T(h),h.text.length),a)}var m=n.nodeType==3?n:null,x=n;for(!m&&n.childNodes.length==1&&n.firstChild.nodeType==3&&(m=n.firstChild,s&&(s=m.nodeValue.length));x.parentNode!=i;)x=x.parentNode;var w=e.measure,_=w.maps;function z(Ae,Ee,Fe){for(var ze=-1;ze<(_?_.length:0);ze++)for(var Ge=ze<0?w.map:_[ze],ot=0;ot<Ge.length;ot+=3){var Ve=Ge[ot+2];if(Ve==Ae||Ve==Ee){var St=T(ze<0?e.line:e.rest[ze]),Et=Ge[ot]+Fe;return(Fe<0||Ve!=Ae)&&(Et=Ge[ot+(Fe?1:0)]),pe(St,Et)}}}var q=z(m,x,s);if(q)return Pr(q,a);for(var se=x.nextSibling,ne=m?m.nodeValue.length-s:0;se;se=se.nextSibling){if(q=z(se,se.firstChild,0),q)return Pr(pe(q.line,q.ch-ne),a);ne+=se.textContent.length}for(var ye=x.previousSibling,be=s;ye;ye=ye.previousSibling){if(q=z(ye,ye.firstChild,-1),q)return Pr(pe(q.line,q.ch+be),a);be+=ye.textContent.length}}var fn=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new et,this.hasSelection=!1,this.composing=null,this.resetting=!1};fn.prototype.init=function(e){var n=this,s=this,i=this.cm;this.createField(e);var a=this.textarea;e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),F&&(a.style.width="0px"),rt(a,"input",function(){k&&j>=9&&n.hasSelection&&(n.hasSelection=null),s.poll()}),rt(a,"paste",function(m){qt(i,m)||Fu(m,i)||(i.state.pasteIncoming=+new Date,s.fastPoll())});function h(m){if(!qt(i,m)){if(i.somethingSelected())Ka({lineWise:!1,text:i.getSelections()});else if(i.options.lineWiseCopyCut){var x=Ml(i);Ka({lineWise:!0,text:x.text}),m.type=="cut"?i.setSelections(x.ranges,null,Ct):(s.prevInput="",a.value=x.text.join(`
`),ee(a))}else return;m.type=="cut"&&(i.state.cutIncoming=+new Date)}}rt(a,"cut",h),rt(a,"copy",h),rt(e.scroller,"paste",function(m){if(!(qi(e,m)||qt(i,m))){if(!a.dispatchEvent){i.state.pasteIncoming=+new Date,s.focus();return}var x=new Event("paste");x.clipboardData=m.clipboardData,a.dispatchEvent(x)}}),rt(e.lineSpace,"selectstart",function(m){qi(e,m)||bn(m)}),rt(a,"compositionstart",function(){var m=i.getCursor("from");s.composing&&s.composing.range.clear(),s.composing={start:m,range:i.markText(m,i.getCursor("to"),{className:"CodeMirror-composing"})}}),rt(a,"compositionend",function(){s.composing&&(s.poll(),s.composing.range.clear(),s.composing=null)})},fn.prototype.createField=function(e){this.wrapper=zl(),this.textarea=this.wrapper.firstChild;var n=this.cm.options;Dl(this.textarea,n.spellcheck,n.autocorrect,n.autocapitalize)},fn.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},fn.prototype.prepareSelection=function(){var e=this.cm,n=e.display,s=e.doc,i=hl(e);if(e.options.moveInputWithCursor){var a=_n(e,s.sel.primary().head,"div"),h=n.wrapper.getBoundingClientRect(),m=n.lineDiv.getBoundingClientRect();i.teTop=Math.max(0,Math.min(n.wrapper.clientHeight-10,a.top+m.top-h.top)),i.teLeft=Math.max(0,Math.min(n.wrapper.clientWidth-10,a.left+m.left-h.left))}return i},fn.prototype.showSelection=function(e){var n=this.cm,s=n.display;he(s.cursorDiv,e.cursors),he(s.selectionDiv,e.selection),e.teTop!=null&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},fn.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var n=this.cm;if(this.resetting=!0,n.somethingSelected()){this.prevInput="";var s=n.getSelection();this.textarea.value=s,n.state.focused&&ee(this.textarea),k&&j>=9&&(this.hasSelection=s)}else e||(this.prevInput=this.textarea.value="",k&&j>=9&&(this.hasSelection=null));this.resetting=!1}},fn.prototype.getField=function(){return this.textarea},fn.prototype.supportsTouch=function(){return!1},fn.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!W||N(qe(this.textarea))!=this.textarea))try{this.textarea.focus()}catch{}},fn.prototype.blur=function(){this.textarea.blur()},fn.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},fn.prototype.receivedFocus=function(){this.slowPoll()},fn.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},fn.prototype.fastPoll=function(){var e=!1,n=this;n.pollingFast=!0;function s(){var i=n.poll();!i&&!e?(e=!0,n.polling.set(60,s)):(n.pollingFast=!1,n.slowPoll())}n.polling.set(20,s)},fn.prototype.poll=function(){var e=this,n=this.cm,s=this.textarea,i=this.prevInput;if(this.contextMenuPending||this.resetting||!n.state.focused||gi(s)&&!i&&!this.composing||n.isReadOnly()||n.options.disableInput||n.state.keySeq)return!1;var a=s.value;if(a==i&&!n.somethingSelected())return!1;if(k&&j>=9&&this.hasSelection===a||G&&/[\uf700-\uf7ff]/.test(a))return n.display.input.reset(),!1;if(n.doc.sel==n.display.selForContextMenu){var h=a.charCodeAt(0);if(h==8203&&!i&&(i="​"),h==8666)return this.reset(),this.cm.execCommand("undo")}for(var m=0,x=Math.min(i.length,a.length);m<x&&i.charCodeAt(m)==a.charCodeAt(m);)++m;return Ln(n,function(){Il(n,a.slice(m),i.length-m,null,e.composing?"*compose":null),a.length>1e3||a.indexOf(`
`)>-1?s.value=e.prevInput="":e.prevInput=a,e.composing&&(e.composing.range.clear(),e.composing.range=n.markText(e.composing.start,n.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},fn.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},fn.prototype.onKeyPress=function(){k&&j>=9&&(this.hasSelection=null),this.fastPoll()},fn.prototype.onContextMenu=function(e){var n=this,s=n.cm,i=s.display,a=n.textarea;n.contextMenuPending&&n.contextMenuPending();var h=ms(s,e),m=i.scroller.scrollTop;if(!h||D)return;var x=s.options.resetSelectionOnContextMenu;x&&s.doc.sel.contains(h)==-1&&pn(s,Wn)(s.doc,zn(h),Ct);var w=a.style.cssText,_=n.wrapper.style.cssText,z=n.wrapper.offsetParent.getBoundingClientRect();n.wrapper.style.cssText="position: static",a.style.cssText=`position: absolute; width: 30px; height: 30px;
      top: `+(e.clientY-z.top-5)+"px; left: "+(e.clientX-z.left-5)+`px;
      z-index: 1000; background: `+(k?"rgba(255, 255, 255, .05)":"transparent")+`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;var q;L&&(q=a.ownerDocument.defaultView.scrollY),i.input.focus(),L&&a.ownerDocument.defaultView.scrollTo(null,q),i.input.reset(),s.somethingSelected()||(a.value=n.prevInput=" "),n.contextMenuPending=ne,i.selForContextMenu=s.doc.sel,clearTimeout(i.detectingSelectAll);function se(){if(a.selectionStart!=null){var be=s.somethingSelected(),Ae="​"+(be?a.value:"");a.value="⇚",a.value=Ae,n.prevInput=be?"":"​",a.selectionStart=1,a.selectionEnd=Ae.length,i.selForContextMenu=s.doc.sel}}function ne(){if(n.contextMenuPending==ne&&(n.contextMenuPending=!1,n.wrapper.style.cssText=_,a.style.cssText=w,k&&j<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=m),a.selectionStart!=null)){(!k||k&&j<9)&&se();var be=0,Ae=function(){i.selForContextMenu==s.doc.sel&&a.selectionStart==0&&a.selectionEnd>0&&n.prevInput=="​"?pn(s,Qi)(s):be++<10?i.detectingSelectAll=setTimeout(Ae,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(Ae,200)}}if(k&&j>=9&&se(),ke){pr(e);var ye=function(){tn(window,"mouseup",ye),setTimeout(ne,20)};rt(window,"mouseup",ye)}else setTimeout(ne,50)},fn.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled=e=="nocursor",this.textarea.readOnly=!!e},fn.prototype.setUneditable=function(){},fn.prototype.needsContentAttribute=!1;function Xc(e,n){if(n=n?Be(n):{},n.value=e.value,!n.tabindex&&e.tabIndex&&(n.tabindex=e.tabIndex),!n.placeholder&&e.placeholder&&(n.placeholder=e.placeholder),n.autofocus==null){var s=N(qe(e));n.autofocus=s==e||e.getAttribute("autofocus")!=null&&s==document.body}function i(){e.value=x.getValue()}var a;if(e.form&&(rt(e.form,"submit",i),!n.leaveSubmitMethodAlone)){var h=e.form;a=h.submit;try{var m=h.submit=function(){i(),h.submit=a,h.submit(),h.submit=m}}catch{}}n.finishInit=function(w){w.save=i,w.getTextArea=function(){return e},w.toTextArea=function(){w.toTextArea=isNaN,i(),e.parentNode.removeChild(w.getWrapperElement()),e.style.display="",e.form&&(tn(e.form,"submit",i),!n.leaveSubmitMethodAlone&&typeof e.form.submit=="function"&&(e.form.submit=a))}},e.style.display="none";var x=en(function(w){return e.parentNode.insertBefore(w,e.nextSibling)},n);return x}function Bo(e){e.off=tn,e.on=rt,e.wheelEventPixels=ks,e.Doc=Ot,e.splitLines=Tr,e.countColumn=Ke,e.findColumn=Ue,e.isWordChar=Ye,e.Pass=Yt,e.signal=It,e.Line=wi,e.changeEnd=Fn,e.scrollbarModel=Ec,e.Pos=pe,e.cmpPos=He,e.modes=Mi,e.mimeModes=Or,e.resolveMode=Di,e.getMode=Bt,e.modeExtensions=Mr,e.extendMode=ls,e.copyState=Rt,e.startState=ni,e.innerMode=zi,e.commands=Ba,e.keyMap=Ai,e.keyName=_u,e.isModifierKey=ku,e.lookupKey=ra,e.normalizeKeyMap=Mc,e.StringStream=Vt,e.SharedTextMarker=ea,e.TextMarker=di,e.LineWidget=Li,e.e_preventDefault=bn,e.e_stopPropagation=ti,e.e_stop=pr,e.addClass=K,e.contains=A,e.rmClass=Ce,e.keyNames=Xr}vr(en),Fl(en);var or="iter insert remove copy getEditor constructor".split(" ");for(var Hl in Ot.prototype)Ot.prototype.hasOwnProperty(Hl)&&$e(or,Hl)<0&&(en.prototype[Hl]=(function(e){return function(){return e.apply(this.doc,arguments)}})(Ot.prototype[Hl]));return Nn(Ot),en.inputStyles={textarea:fn,contenteditable:Mt},en.defineMode=function(e){!en.defaults.mode&&e!="null"&&(en.defaults.mode=e),Gn.apply(this,arguments)},en.defineMIME=yi,en.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),en.defineMIME("text/plain","null"),en.defineExtension=function(e,n){en.prototype[e]=n},en.defineDocExtension=function(e,n){Ot.prototype[e]=n},en.fromTextArea=Xc,Bo(en),en.version="5.65.21",en}))})(bd)),bd.exports}var Yx=is();const Sf=Xf(Yx);var _f={exports:{}},Cf;function Vx(){return Cf||(Cf=1,(function(l,c){(function(p){p(is())})(function(p){function g(j){return new RegExp("^(("+j.join(")|(")+"))\\b")}var y=g(["and","or","not","is"]),b=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],S=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];p.registerHelper("hintWords","python",b.concat(S).concat(["exec","print"]));function C(j){return j.scopes[j.scopes.length-1]}p.defineMode("python",function(j,L){for(var H="error",R=L.delimiters||L.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,J=[L.singleOperators,L.doubleOperators,L.doubleDelimiters,L.tripleDelimiters,L.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],D=0;D<J.length;D++)J[D]||J.splice(D--,1);var Y=L.hangingIndent||j.indentUnit,X=b,M=S;L.extra_keywords!=null&&(X=X.concat(L.extra_keywords)),L.extra_builtins!=null&&(M=M.concat(L.extra_builtins));var F=!(L.version&&Number(L.version)<3);if(F){var B=L.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;X=X.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),M=M.concat(["ascii","bytes","exec","print"]);var W=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var B=L.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;X=X.concat(["exec","print"]),M=M.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var W=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var G=g(X),ce=g(M);function le(Z,Q){var A=Z.sol()&&Q.lastToken!="\\";if(A&&(Q.indent=Z.indentation()),A&&C(Q).type=="py"){var N=C(Q).offset;if(Z.eatSpace()){var K=Z.indentation();return K>N?ae(Q):K<N&&V(Z,Q)&&Z.peek()!="#"&&(Q.errorToken=!0),null}else{var I=ve(Z,Q);return N>0&&V(Z,Q)&&(I+=" "+H),I}}return ve(Z,Q)}function ve(Z,Q,A){if(Z.eatSpace())return null;if(!A&&Z.match(/^#.*/))return"comment";if(Z.match(/^[0-9\.]/,!1)){var N=!1;if(Z.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(N=!0),Z.match(/^[\d_]+\.\d*/)&&(N=!0),Z.match(/^\.\d+/)&&(N=!0),N)return Z.eat(/J/i),"number";var K=!1;if(Z.match(/^0x[0-9a-f_]+/i)&&(K=!0),Z.match(/^0b[01_]+/i)&&(K=!0),Z.match(/^0o[0-7_]+/i)&&(K=!0),Z.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(Z.eat(/J/i),K=!0),Z.match(/^0(?![\dx])/i)&&(K=!0),K)return Z.eat(/L/i),"number"}if(Z.match(W)){var I=Z.current().toLowerCase().indexOf("f")!==-1;return I?(Q.tokenize=Me(Z.current(),Q.tokenize),Q.tokenize(Z,Q)):(Q.tokenize=ke(Z.current(),Q.tokenize),Q.tokenize(Z,Q))}for(var ee=0;ee<J.length;ee++)if(Z.match(J[ee]))return"operator";return Z.match(R)?"punctuation":Q.lastToken=="."&&Z.match(B)?"property":Z.match(G)||Z.match(y)?"keyword":Z.match(ce)?"builtin":Z.match(/^(self|cls)\b/)?"variable-2":Z.match(B)?Q.lastToken=="def"||Q.lastToken=="class"?"def":"variable":(Z.next(),A?null:H)}function Me(Z,Q){for(;"rubf".indexOf(Z.charAt(0).toLowerCase())>=0;)Z=Z.substr(1);var A=Z.length==1,N="string";function K(ee){return function(_e,Ie){var qe=ve(_e,Ie,!0);return qe=="punctuation"&&(_e.current()=="{"?Ie.tokenize=K(ee+1):_e.current()=="}"&&(ee>1?Ie.tokenize=K(ee-1):Ie.tokenize=I)),qe}}function I(ee,_e){for(;!ee.eol();)if(ee.eatWhile(/[^'"\{\}\\]/),ee.eat("\\")){if(ee.next(),A&&ee.eol())return N}else{if(ee.match(Z))return _e.tokenize=Q,N;if(ee.match("{{"))return N;if(ee.match("{",!1))return _e.tokenize=K(0),ee.current()?N:_e.tokenize(ee,_e);if(ee.match("}}"))return N;if(ee.match("}"))return H;ee.eat(/['"]/)}if(A){if(L.singleLineStringErrors)return H;_e.tokenize=Q}return N}return I.isString=!0,I}function ke(Z,Q){for(;"rubf".indexOf(Z.charAt(0).toLowerCase())>=0;)Z=Z.substr(1);var A=Z.length==1,N="string";function K(I,ee){for(;!I.eol();)if(I.eatWhile(/[^'"\\]/),I.eat("\\")){if(I.next(),A&&I.eol())return N}else{if(I.match(Z))return ee.tokenize=Q,N;I.eat(/['"]/)}if(A){if(L.singleLineStringErrors)return H;ee.tokenize=Q}return N}return K.isString=!0,K}function ae(Z){for(;C(Z).type!="py";)Z.scopes.pop();Z.scopes.push({offset:C(Z).offset+j.indentUnit,type:"py",align:null})}function Ce(Z,Q,A){var N=Z.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:Z.column()+1;Q.scopes.push({offset:Q.indent+Y,type:A,align:N})}function V(Z,Q){for(var A=Z.indentation();Q.scopes.length>1&&C(Q).offset>A;){if(C(Q).type!="py")return!0;Q.scopes.pop()}return C(Q).offset!=A}function he(Z,Q){Z.sol()&&(Q.beginningOfLine=!0,Q.dedent=!1);var A=Q.tokenize(Z,Q),N=Z.current();if(Q.beginningOfLine&&N=="@")return Z.match(B,!1)?"meta":F?"operator":H;if(/\S/.test(N)&&(Q.beginningOfLine=!1),(A=="variable"||A=="builtin")&&Q.lastToken=="meta"&&(A="meta"),(N=="pass"||N=="return")&&(Q.dedent=!0),N=="lambda"&&(Q.lambda=!0),N==":"&&!Q.lambda&&C(Q).type=="py"&&Z.match(/^\s*(?:#|$)/,!1)&&ae(Q),N.length==1&&!/string|comment/.test(A)){var K="[({".indexOf(N);if(K!=-1&&Ce(Z,Q,"])}".slice(K,K+1)),K="])}".indexOf(N),K!=-1)if(C(Q).type==N)Q.indent=Q.scopes.pop().offset-Y;else return H}return Q.dedent&&Z.eol()&&C(Q).type=="py"&&Q.scopes.length>1&&Q.scopes.pop(),A}var E={startState:function(Z){return{tokenize:le,scopes:[{offset:Z||0,type:"py",align:null}],indent:Z||0,lastToken:null,lambda:!1,dedent:0}},token:function(Z,Q){var A=Q.errorToken;A&&(Q.errorToken=!1);var N=he(Z,Q);return N&&N!="comment"&&(Q.lastToken=N=="keyword"||N=="punctuation"?Z.current():N),N=="punctuation"&&(N=null),Z.eol()&&Q.lambda&&(Q.lambda=!1),A?N+" "+H:N},indent:function(Z,Q){if(Z.tokenize!=le)return Z.tokenize.isString?p.Pass:0;var A=C(Z),N=A.type==Q.charAt(0)||A.type=="py"&&!Z.dedent&&/^(else:|elif |except |finally:)/.test(Q);return A.align!=null?A.align-(N?1:0):A.offset-(N?Y:0)},electricInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,closeBrackets:{triples:`'"`},lineComment:"#",fold:"indent"};return E}),p.defineMIME("text/x-python","python");var k=function(j){return j.split(" ")};p.defineMIME("text/x-cython",{name:"python",extra_keywords:k("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})})})()),_f.exports}Vx();var Tf={exports:{}},jf;function Cm(){return jf||(jf=1,(function(l,c){(function(p){p(is())})(function(p){p.defineMode("javascript",function(g,y){var b=g.indentUnit,S=y.statementIndent,C=y.jsonld,k=y.json||C,j=y.trackScope!==!1,L=y.typescript,H=y.wordCharacters||/[\w$\xa1-\uffff]/,R=(function(){function T(Qt){return{type:Qt,style:"keyword"}}var U=T("keyword a"),ge=T("keyword b"),Ne=T("keyword c"),pe=T("keyword d"),He=T("operator"),jt={type:"atom",style:"atom"};return{if:T("if"),while:U,with:U,else:ge,do:ge,try:ge,finally:ge,return:pe,break:pe,continue:pe,new:T("new"),delete:Ne,void:Ne,throw:Ne,debugger:T("debugger"),var:T("var"),const:T("var"),let:T("var"),function:T("function"),catch:T("catch"),for:T("for"),switch:T("switch"),case:T("case"),default:T("default"),in:He,typeof:He,instanceof:He,true:jt,false:jt,null:jt,undefined:jt,NaN:jt,Infinity:jt,this:T("this"),class:T("class"),super:T("atom"),yield:Ne,export:T("export"),import:T("import"),extends:Ne,await:Ne}})(),J=/[+\-*&%=<>!?|~^@]/,D=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function Y(T){for(var U=!1,ge,Ne=!1;(ge=T.next())!=null;){if(!U){if(ge=="/"&&!Ne)return;ge=="["?Ne=!0:Ne&&ge=="]"&&(Ne=!1)}U=!U&&ge=="\\"}}var X,M;function F(T,U,ge){return X=T,M=ge,U}function B(T,U){var ge=T.next();if(ge=='"'||ge=="'")return U.tokenize=W(ge),U.tokenize(T,U);if(ge=="."&&T.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return F("number","number");if(ge=="."&&T.match(".."))return F("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(ge))return F(ge);if(ge=="="&&T.eat(">"))return F("=>","operator");if(ge=="0"&&T.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return F("number","number");if(/\d/.test(ge))return T.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),F("number","number");if(ge=="/")return T.eat("*")?(U.tokenize=G,G(T,U)):T.eat("/")?(T.skipToEnd(),F("comment","comment")):Yn(T,U,1)?(Y(T),T.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),F("regexp","string-2")):(T.eat("="),F("operator","operator",T.current()));if(ge=="`")return U.tokenize=ce,ce(T,U);if(ge=="#"&&T.peek()=="!")return T.skipToEnd(),F("meta","meta");if(ge=="#"&&T.eatWhile(H))return F("variable","property");if(ge=="<"&&T.match("!--")||ge=="-"&&T.match("->")&&!/\S/.test(T.string.slice(0,T.start)))return T.skipToEnd(),F("comment","comment");if(J.test(ge))return(ge!=">"||!U.lexical||U.lexical.type!=">")&&(T.eat("=")?(ge=="!"||ge=="=")&&T.eat("="):/[<>*+\-|&?]/.test(ge)&&(T.eat(ge),ge==">"&&T.eat(ge))),ge=="?"&&T.eat(".")?F("."):F("operator","operator",T.current());if(H.test(ge)){T.eatWhile(H);var Ne=T.current();if(U.lastType!="."){if(R.propertyIsEnumerable(Ne)){var pe=R[Ne];return F(pe.type,pe.style,Ne)}if(Ne=="async"&&T.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return F("async","keyword",Ne)}return F("variable","variable",Ne)}}function W(T){return function(U,ge){var Ne=!1,pe;if(C&&U.peek()=="@"&&U.match(D))return ge.tokenize=B,F("jsonld-keyword","meta");for(;(pe=U.next())!=null&&!(pe==T&&!Ne);)Ne=!Ne&&pe=="\\";return Ne||(ge.tokenize=B),F("string","string")}}function G(T,U){for(var ge=!1,Ne;Ne=T.next();){if(Ne=="/"&&ge){U.tokenize=B;break}ge=Ne=="*"}return F("comment","comment")}function ce(T,U){for(var ge=!1,Ne;(Ne=T.next())!=null;){if(!ge&&(Ne=="`"||Ne=="$"&&T.eat("{"))){U.tokenize=B;break}ge=!ge&&Ne=="\\"}return F("quasi","string-2",T.current())}var le="([{}])";function ve(T,U){U.fatArrowAt&&(U.fatArrowAt=null);var ge=T.string.indexOf("=>",T.start);if(!(ge<0)){if(L){var Ne=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(T.string.slice(T.start,ge));Ne&&(ge=Ne.index)}for(var pe=0,He=!1,jt=ge-1;jt>=0;--jt){var Qt=T.string.charAt(jt),kn=le.indexOf(Qt);if(kn>=0&&kn<3){if(!pe){++jt;break}if(--pe==0){Qt=="("&&(He=!0);break}}else if(kn>=3&&kn<6)++pe;else if(H.test(Qt))He=!0;else if(/["'\/`]/.test(Qt))for(;;--jt){if(jt==0)return;var Kr=T.string.charAt(jt-1);if(Kr==Qt&&T.string.charAt(jt-2)!="\\"){jt--;break}}else if(He&&!pe){++jt;break}}He&&!pe&&(U.fatArrowAt=jt)}}var Me={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function ke(T,U,ge,Ne,pe,He){this.indented=T,this.column=U,this.type=ge,this.prev=pe,this.info=He,Ne!=null&&(this.align=Ne)}function ae(T,U){if(!j)return!1;for(var ge=T.localVars;ge;ge=ge.next)if(ge.name==U)return!0;for(var Ne=T.context;Ne;Ne=Ne.prev)for(var ge=Ne.vars;ge;ge=ge.next)if(ge.name==U)return!0}function Ce(T,U,ge,Ne,pe){var He=T.cc;for(V.state=T,V.stream=pe,V.marked=null,V.cc=He,V.style=U,T.lexical.hasOwnProperty("align")||(T.lexical.align=!0);;){var jt=He.length?He.pop():k?$e:Ke;if(jt(ge,Ne)){for(;He.length&&He[He.length-1].lex;)He.pop()();return V.marked?V.marked:ge=="variable"&&ae(T,Ne)?"variable-2":U}}}var V={state:null,marked:null,cc:null};function he(){for(var T=arguments.length-1;T>=0;T--)V.cc.push(arguments[T])}function E(){return he.apply(null,arguments),!0}function Z(T,U){for(var ge=U;ge;ge=ge.next)if(ge.name==T)return!0;return!1}function Q(T){var U=V.state;if(V.marked="def",!!j){if(U.context){if(U.lexical.info=="var"&&U.context&&U.context.block){var ge=A(T,U.context);if(ge!=null){U.context=ge;return}}else if(!Z(T,U.localVars)){U.localVars=new I(T,U.localVars);return}}y.globalVars&&!Z(T,U.globalVars)&&(U.globalVars=new I(T,U.globalVars))}}function A(T,U){if(U)if(U.block){var ge=A(T,U.prev);return ge?ge==U.prev?U:new K(ge,U.vars,!0):null}else return Z(T,U.vars)?U:new K(U.prev,new I(T,U.vars),!1);else return null}function N(T){return T=="public"||T=="private"||T=="protected"||T=="abstract"||T=="readonly"}function K(T,U,ge){this.prev=T,this.vars=U,this.block=ge}function I(T,U){this.name=T,this.next=U}var ee=new I("this",new I("arguments",null));function _e(){V.state.context=new K(V.state.context,V.state.localVars,!1),V.state.localVars=ee}function Ie(){V.state.context=new K(V.state.context,V.state.localVars,!0),V.state.localVars=null}_e.lex=Ie.lex=!0;function qe(){V.state.localVars=V.state.context.vars,V.state.context=V.state.context.prev}qe.lex=!0;function Oe(T,U){var ge=function(){var Ne=V.state,pe=Ne.indented;if(Ne.lexical.type=="stat")pe=Ne.lexical.indented;else for(var He=Ne.lexical;He&&He.type==")"&&He.align;He=He.prev)pe=He.indented;Ne.lexical=new ke(pe,V.stream.column(),T,null,Ne.lexical,U)};return ge.lex=!0,ge}function Se(){var T=V.state;T.lexical.prev&&(T.lexical.type==")"&&(T.indented=T.lexical.indented),T.lexical=T.lexical.prev)}Se.lex=!0;function Be(T){function U(ge){return ge==T?E():T==";"||ge=="}"||ge==")"||ge=="]"?he():E(U)}return U}function Ke(T,U){return T=="var"?E(Oe("vardef",U),ti,Be(";"),Se):T=="keyword a"?E(Oe("form"),Yt,Ke,Se):T=="keyword b"?E(Oe("form"),Ke,Se):T=="keyword d"?V.stream.match(/^\s*$/,!1)?E():E(Oe("stat"),xt,Be(";"),Se):T=="debugger"?E(Be(";")):T=="{"?E(Oe("}"),Ie,nr,Se,qe):T==";"?E():T=="if"?(V.state.lexical.info=="else"&&V.state.cc[V.state.cc.length-1]==Se&&V.state.cc.pop()(),E(Oe("form"),Yt,Ke,Se,wn)):T=="function"?E(Tr):T=="for"?E(Oe("form"),Ie,Cr,Ke,qe,Se):T=="class"||L&&U=="interface"?(V.marked="keyword",E(Oe("form",T=="class"?T:U),Mi,Se)):T=="variable"?L&&U=="declare"?(V.marked="keyword",E(Ke)):L&&(U=="module"||U=="enum"||U=="type")&&V.stream.match(/^\s*\w/,!1)?(V.marked="keyword",U=="enum"?E(Je):U=="type"?E(as,Be("operator"),bt,Be(";")):E(Oe("form"),In,Be("{"),Oe("}"),nr,Se,Se)):L&&U=="namespace"?(V.marked="keyword",E(Oe("form"),$e,Ke,Se)):L&&U=="abstract"?(V.marked="keyword",E(Ke)):E(Oe("stat"),kt):T=="switch"?E(Oe("form"),Yt,Be("{"),Oe("}","switch"),Ie,nr,Se,Se,qe):T=="case"?E($e,Be(":")):T=="default"?E(Be(":")):T=="catch"?E(Oe("form"),_e,et,Ke,Se,qe):T=="export"?E(Oe("stat"),Di,Se):T=="import"?E(Oe("stat"),Mr,Se):T=="async"?E(Ke):U=="@"?E($e,Ke):he(Oe("stat"),$e,Be(";"),Se)}function et(T){if(T=="(")return E(On,Be(")"))}function $e(T,U){return Ct(T,U,!1)}function Ft(T,U){return Ct(T,U,!0)}function Yt(T){return T!="("?he():E(Oe(")"),xt,Be(")"),Se)}function Ct(T,U,ge){if(V.state.fatArrowAt==V.stream.start){var Ne=ge?ut:Qe;if(T=="(")return E(_e,Oe(")"),pt(On,")"),Se,Be("=>"),Ne,qe);if(T=="variable")return he(_e,In,Be("=>"),Ne,qe)}var pe=ge?Ue:tt;return Me.hasOwnProperty(T)?E(pe):T=="function"?E(Tr,pe):T=="class"||L&&U=="interface"?(V.marked="keyword",E(Oe("form"),os,Se)):T=="keyword c"||T=="async"?E(ge?Ft:$e):T=="("?E(Oe(")"),xt,Be(")"),Se,pe):T=="operator"||T=="spread"?E(ge?Ft:$e):T=="["?E(Oe("]"),Vt,Se,pe):T=="{"?Xt(at,"}",null,pe):T=="quasi"?he(vt,pe):T=="new"?E(oe(ge)):E()}function xt(T){return T.match(/[;\}\)\],]/)?he():he($e)}function tt(T,U){return T==","?E(xt):Ue(T,U,!1)}function Ue(T,U,ge){var Ne=ge==!1?tt:Ue,pe=ge==!1?$e:Ft;if(T=="=>")return E(_e,ge?ut:Qe,qe);if(T=="operator")return/\+\+|--/.test(U)||L&&U=="!"?E(Ne):L&&U=="<"&&V.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?E(Oe(">"),pt(bt,">"),Se,Ne):U=="?"?E($e,Be(":"),pe):E(pe);if(T=="quasi")return he(vt,Ne);if(T!=";"){if(T=="(")return Xt(Ft,")","call",Ne);if(T==".")return E(Ye,Ne);if(T=="[")return E(Oe("]"),xt,Be("]"),Se,Ne);if(L&&U=="as")return V.marked="keyword",E(bt,Ne);if(T=="regexp")return V.state.lastType=V.marked="operator",V.stream.backUp(V.stream.pos-V.stream.start-1),E(pe)}}function vt(T,U){return T!="quasi"?he():U.slice(U.length-2)!="${"?E(vt):E(xt,yt)}function yt(T){if(T=="}")return V.marked="string-2",V.state.tokenize=ce,E(vt)}function Qe(T){return ve(V.stream,V.state),he(T=="{"?Ke:$e)}function ut(T){return ve(V.stream,V.state),he(T=="{"?Ke:Ft)}function oe(T){return function(U){return U=="."?E(T?fe:je):U=="variable"&&L?E(mn,T?Ue:tt):he(T?Ft:$e)}}function je(T,U){if(U=="target")return V.marked="keyword",E(tt)}function fe(T,U){if(U=="target")return V.marked="keyword",E(Ue)}function kt(T){return T==":"?E(Se,Ke):he(tt,Be(";"),Se)}function Ye(T){if(T=="variable")return V.marked="property",E()}function at(T,U){if(T=="async")return V.marked="property",E(at);if(T=="variable"||V.style=="keyword"){if(V.marked="property",U=="get"||U=="set")return E(Ze);var ge;return L&&V.state.fatArrowAt==V.stream.start&&(ge=V.stream.match(/^\s*:\s*/,!1))&&(V.state.fatArrowAt=V.stream.pos+ge[0].length),E(mt)}else{if(T=="number"||T=="string")return V.marked=C?"property":V.style+" property",E(mt);if(T=="jsonld-keyword")return E(mt);if(L&&N(U))return V.marked="keyword",E(at);if(T=="[")return E($e,Sr,Be("]"),mt);if(T=="spread")return E(Ft,mt);if(U=="*")return V.marked="keyword",E(at);if(T==":")return he(mt)}}function Ze(T){return T!="variable"?he(mt):(V.marked="property",E(Tr))}function mt(T){if(T==":")return E(Ft);if(T=="(")return he(Tr)}function pt(T,U,ge){function Ne(pe,He){if(ge?ge.indexOf(pe)>-1:pe==","){var jt=V.state.lexical;return jt.info=="call"&&(jt.pos=(jt.pos||0)+1),E(function(Qt,kn){return Qt==U||kn==U?he():he(T)},Ne)}return pe==U||He==U?E():ge&&ge.indexOf(";")>-1?he(T):E(Be(U))}return function(pe,He){return pe==U||He==U?E():he(T,Ne)}}function Xt(T,U,ge){for(var Ne=3;Ne<arguments.length;Ne++)V.cc.push(arguments[Ne]);return E(Oe(U,ge),pt(T,U),Se)}function nr(T){return T=="}"?E():he(Ke,nr)}function Sr(T,U){if(L){if(T==":")return E(bt);if(U=="?")return E(Sr)}}function Rr(T,U){if(L&&(T==":"||U=="in"))return E(bt)}function Br(T){if(L&&T==":")return V.stream.match(/^\s*\w+\s+is\b/,!1)?E($e,Ur,bt):E(bt)}function Ur(T,U){if(U=="is")return V.marked="keyword",E()}function bt(T,U){if(U=="keyof"||U=="typeof"||U=="infer"||U=="readonly")return V.marked="keyword",E(U=="typeof"?Ft:bt);if(T=="variable"||U=="void")return V.marked="type",E(xn);if(U=="|"||U=="&")return E(bt);if(T=="string"||T=="number"||T=="atom")return E(xn);if(T=="[")return E(Oe("]"),pt(bt,"]",","),Se,xn);if(T=="{")return E(Oe("}"),rt,Se,xn);if(T=="(")return E(pt(qt,")"),fi,xn);if(T=="<")return E(pt(bt,">"),bt);if(T=="quasi")return he(tn,xn)}function fi(T){if(T=="=>")return E(bt)}function rt(T){return T.match(/[\}\)\]]/)?E():T==","||T==";"?E(rt):he(_r,rt)}function _r(T,U){if(T=="variable"||V.style=="keyword")return V.marked="property",E(_r);if(U=="?"||T=="number"||T=="string")return E(_r);if(T==":")return E(bt);if(T=="[")return E(Be("variable"),Rr,Be("]"),_r);if(T=="(")return he(gi,_r);if(!T.match(/[;\}\)\],]/))return E()}function tn(T,U){return T!="quasi"?he():U.slice(U.length-2)!="${"?E(tn):E(bt,It)}function It(T){if(T=="}")return V.marked="string-2",V.state.tokenize=ce,E(tn)}function qt(T,U){return T=="variable"&&V.stream.match(/^\s*[?:]/,!1)||U=="?"?E(qt):T==":"?E(bt):T=="spread"?E(qt):he(bt)}function xn(T,U){if(U=="<")return E(Oe(">"),pt(bt,">"),Se,xn);if(U=="|"||T=="."||U=="&")return E(bt);if(T=="[")return E(bt,Be("]"),xn);if(U=="extends"||U=="implements")return V.marked="keyword",E(bt);if(U=="?")return E(bt,Be(":"),bt)}function mn(T,U){if(U=="<")return E(Oe(">"),pt(bt,">"),Se,xn)}function Nn(){return he(bt,bn)}function bn(T,U){if(U=="=")return E(bt)}function ti(T,U){return U=="enum"?(V.marked="keyword",E(Je)):he(In,Sr,En,ss)}function In(T,U){if(L&&N(U))return V.marked="keyword",E(In);if(T=="variable")return Q(U),E();if(T=="spread")return E(In);if(T=="[")return Xt(mi,"]");if(T=="{")return Xt(pr,"}")}function pr(T,U){return T=="variable"&&!V.stream.match(/^\s*:/,!1)?(Q(U),E(En)):(T=="variable"&&(V.marked="property"),T=="spread"?E(In):T=="}"?he():T=="["?E($e,Be("]"),Be(":"),pr):E(Be(":"),In,En))}function mi(){return he(In,En)}function En(T,U){if(U=="=")return E(Ft)}function ss(T){if(T==",")return E(ti)}function wn(T,U){if(T=="keyword b"&&U=="else")return E(Oe("form","else"),Ke,Se)}function Cr(T,U){if(U=="await")return E(Cr);if(T=="(")return E(Oe(")"),qr,Se)}function qr(T){return T=="var"?E(ti,Ir):T=="variable"?E(Ir):he(Ir)}function Ir(T,U){return T==")"?E():T==";"?E(Ir):U=="in"||U=="of"?(V.marked="keyword",E($e,Ir)):he($e,Ir)}function Tr(T,U){if(U=="*")return V.marked="keyword",E(Tr);if(T=="variable")return Q(U),E(Tr);if(T=="(")return E(_e,Oe(")"),pt(On,")"),Se,Br,Ke,qe);if(L&&U=="<")return E(Oe(">"),pt(Nn,">"),Se,Tr)}function gi(T,U){if(U=="*")return V.marked="keyword",E(gi);if(T=="variable")return Q(U),E(gi);if(T=="(")return E(_e,Oe(")"),pt(On,")"),Se,Br,qe);if(L&&U=="<")return E(Oe(">"),pt(Nn,">"),Se,gi)}function as(T,U){if(T=="keyword"||T=="variable")return V.marked="type",E(as);if(U=="<")return E(Oe(">"),pt(Nn,">"),Se)}function On(T,U){return U=="@"&&E($e,On),T=="spread"?E(On):L&&N(U)?(V.marked="keyword",E(On)):L&&T=="this"?E(Sr,En):he(In,Sr,En)}function os(T,U){return T=="variable"?Mi(T,U):Or(T,U)}function Mi(T,U){if(T=="variable")return Q(U),E(Or)}function Or(T,U){if(U=="<")return E(Oe(">"),pt(Nn,">"),Se,Or);if(U=="extends"||U=="implements"||L&&T==",")return U=="implements"&&(V.marked="keyword"),E(L?bt:$e,Or);if(T=="{")return E(Oe("}"),Gn,Se)}function Gn(T,U){if(T=="async"||T=="variable"&&(U=="static"||U=="get"||U=="set"||L&&N(U))&&V.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return V.marked="keyword",E(Gn);if(T=="variable"||V.style=="keyword")return V.marked="property",E(yi,Gn);if(T=="number"||T=="string")return E(yi,Gn);if(T=="[")return E($e,Sr,Be("]"),yi,Gn);if(U=="*")return V.marked="keyword",E(Gn);if(L&&T=="(")return he(gi,Gn);if(T==";"||T==",")return E(Gn);if(T=="}")return E();if(U=="@")return E($e,Gn)}function yi(T,U){if(U=="!"||U=="?")return E(yi);if(T==":")return E(bt,En);if(U=="=")return E(Ft);var ge=V.state.lexical.prev,Ne=ge&&ge.info=="interface";return he(Ne?gi:Tr)}function Di(T,U){return U=="*"?(V.marked="keyword",E(ni,Be(";"))):U=="default"?(V.marked="keyword",E($e,Be(";"))):T=="{"?E(pt(Bt,"}"),ni,Be(";")):he(Ke)}function Bt(T,U){if(U=="as")return V.marked="keyword",E(Be("variable"));if(T=="variable")return he(Ft,Bt)}function Mr(T){return T=="string"?E():T=="("?he($e):T=="."?he(tt):he(ls,Rt,ni)}function ls(T,U){return T=="{"?Xt(ls,"}"):(T=="variable"&&Q(U),U=="*"&&(V.marked="keyword"),E(zi))}function Rt(T){if(T==",")return E(ls,Rt)}function zi(T,U){if(U=="as")return V.marked="keyword",E(ls)}function ni(T,U){if(U=="from")return V.marked="keyword",E($e)}function Vt(T){return T=="]"?E():he(pt(Ft,"]"))}function Je(){return he(Oe("form"),In,Be("{"),Oe("}"),pt(ri,"}"),Se,Se)}function ri(){return he(In,En)}function us(T,U){return T.lastType=="operator"||T.lastType==","||J.test(U.charAt(0))||/[,.]/.test(U.charAt(0))}function Yn(T,U,ge){return U.tokenize==B&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(U.lastType)||U.lastType=="quasi"&&/\{\s*$/.test(T.string.slice(0,T.pos-(ge||0)))}return{startState:function(T){var U={tokenize:B,lastType:"sof",cc:[],lexical:new ke((T||0)-b,0,"block",!1),localVars:y.localVars,context:y.localVars&&new K(null,null,!1),indented:T||0};return y.globalVars&&typeof y.globalVars=="object"&&(U.globalVars=y.globalVars),U},token:function(T,U){if(T.sol()&&(U.lexical.hasOwnProperty("align")||(U.lexical.align=!1),U.indented=T.indentation(),ve(T,U)),U.tokenize!=G&&T.eatSpace())return null;var ge=U.tokenize(T,U);return X=="comment"?ge:(U.lastType=X=="operator"&&(M=="++"||M=="--")?"incdec":X,Ce(U,ge,X,M,T))},indent:function(T,U){if(T.tokenize==G||T.tokenize==ce)return p.Pass;if(T.tokenize!=B)return 0;var ge=U&&U.charAt(0),Ne=T.lexical,pe;if(!/^\s*else\b/.test(U))for(var He=T.cc.length-1;He>=0;--He){var jt=T.cc[He];if(jt==Se)Ne=Ne.prev;else if(jt!=wn&&jt!=qe)break}for(;(Ne.type=="stat"||Ne.type=="form")&&(ge=="}"||(pe=T.cc[T.cc.length-1])&&(pe==tt||pe==Ue)&&!/^[,\.=+\-*:?[\(]/.test(U));)Ne=Ne.prev;S&&Ne.type==")"&&Ne.prev.type=="stat"&&(Ne=Ne.prev);var Qt=Ne.type,kn=ge==Qt;return Qt=="vardef"?Ne.indented+(T.lastType=="operator"||T.lastType==","?Ne.info.length+1:0):Qt=="form"&&ge=="{"?Ne.indented:Qt=="form"?Ne.indented+b:Qt=="stat"?Ne.indented+(us(T,U)?S||b:0):Ne.info=="switch"&&!kn&&y.doubleIndentSwitch!=!1?Ne.indented+(/^(?:case|default)\b/.test(U)?b:2*b):Ne.align?Ne.column+(kn?0:1):Ne.indented+(kn?0:b)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:k?null:"/*",blockCommentEnd:k?null:"*/",blockCommentContinue:k?null:" * ",lineComment:k?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:k?"json":"javascript",jsonldMode:C,jsonMode:k,expressionAllowed:Yn,skipExpression:function(T){Ce(T,"atom","atom","true",new p.StringStream("",2,null))}}}),p.registerHelper("wordChars","javascript",/[\w$]/),p.defineMIME("text/javascript","javascript"),p.defineMIME("text/ecmascript","javascript"),p.defineMIME("application/javascript","javascript"),p.defineMIME("application/x-javascript","javascript"),p.defineMIME("application/ecmascript","javascript"),p.defineMIME("application/json",{name:"javascript",json:!0}),p.defineMIME("application/x-json",{name:"javascript",json:!0}),p.defineMIME("application/manifest+json",{name:"javascript",json:!0}),p.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),p.defineMIME("text/typescript",{name:"javascript",typescript:!0}),p.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})()),Tf.exports}Cm();var Nf={exports:{}},Ef;function Jx(){return Ef||(Ef=1,(function(l,c){(function(p){p(is())})(function(p){function g(A,N,K,I,ee,_e){this.indented=A,this.column=N,this.type=K,this.info=I,this.align=ee,this.prev=_e}function y(A,N,K,I){var ee=A.indented;return A.context&&A.context.type=="statement"&&K!="statement"&&(ee=A.context.indented),A.context=new g(ee,N,K,I,null,A.context)}function b(A){var N=A.context.type;return(N==")"||N=="]"||N=="}")&&(A.indented=A.context.indented),A.context=A.context.prev}function S(A,N,K){if(N.prevToken=="variable"||N.prevToken=="type"||/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(A.string.slice(0,K))||N.typeAtEndOfLine&&A.column()==A.indentation())return!0}function C(A){for(;;){if(!A||A.type=="top")return!0;if(A.type=="}"&&A.prev.info!="namespace")return!1;A=A.prev}}p.defineMode("clike",function(A,N){var K=A.indentUnit,I=N.statementIndentUnit||K,ee=N.dontAlignCalls,_e=N.keywords||{},Ie=N.types||{},qe=N.builtin||{},Oe=N.blockKeywords||{},Se=N.defKeywords||{},Be=N.atoms||{},Ke=N.hooks||{},et=N.multiLineStrings,$e=N.indentStatements!==!1,Ft=N.indentSwitch!==!1,Yt=N.namespaceSeparator,Ct=N.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,xt=N.numberStart||/[\d\.]/,tt=N.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,Ue=N.isOperatorChar||/[+\-*&%=<>!?|\/]/,vt=N.isIdentifierChar||/[\w\$_\xa1-\uffff]/,yt=N.isReservedIdentifier||!1,Qe,ut;function oe(Ye,at){var Ze=Ye.next();if(Ke[Ze]){var mt=Ke[Ze](Ye,at);if(mt!==!1)return mt}if(Ze=='"'||Ze=="'")return at.tokenize=je(Ze),at.tokenize(Ye,at);if(xt.test(Ze)){if(Ye.backUp(1),Ye.match(tt))return"number";Ye.next()}if(Ct.test(Ze))return Qe=Ze,null;if(Ze=="/"){if(Ye.eat("*"))return at.tokenize=fe,fe(Ye,at);if(Ye.eat("/"))return Ye.skipToEnd(),"comment"}if(Ue.test(Ze)){for(;!Ye.match(/^\/[\/*]/,!1)&&Ye.eat(Ue););return"operator"}if(Ye.eatWhile(vt),Yt)for(;Ye.match(Yt);)Ye.eatWhile(vt);var pt=Ye.current();return j(_e,pt)?(j(Oe,pt)&&(Qe="newstatement"),j(Se,pt)&&(ut=!0),"keyword"):j(Ie,pt)?"type":j(qe,pt)||yt&&yt(pt)?(j(Oe,pt)&&(Qe="newstatement"),"builtin"):j(Be,pt)?"atom":"variable"}function je(Ye){return function(at,Ze){for(var mt=!1,pt,Xt=!1;(pt=at.next())!=null;){if(pt==Ye&&!mt){Xt=!0;break}mt=!mt&&pt=="\\"}return(Xt||!(mt||et))&&(Ze.tokenize=null),"string"}}function fe(Ye,at){for(var Ze=!1,mt;mt=Ye.next();){if(mt=="/"&&Ze){at.tokenize=null;break}Ze=mt=="*"}return"comment"}function kt(Ye,at){N.typeFirstDefinitions&&Ye.eol()&&C(at.context)&&(at.typeAtEndOfLine=S(Ye,at,Ye.pos))}return{startState:function(Ye){return{tokenize:null,context:new g((Ye||0)-K,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(Ye,at){var Ze=at.context;if(Ye.sol()&&(Ze.align==null&&(Ze.align=!1),at.indented=Ye.indentation(),at.startOfLine=!0),Ye.eatSpace())return kt(Ye,at),null;Qe=ut=null;var mt=(at.tokenize||oe)(Ye,at);if(mt=="comment"||mt=="meta")return mt;if(Ze.align==null&&(Ze.align=!0),Qe==";"||Qe==":"||Qe==","&&Ye.match(/^\s*(?:\/\/.*)?$/,!1))for(;at.context.type=="statement";)b(at);else if(Qe=="{")y(at,Ye.column(),"}");else if(Qe=="[")y(at,Ye.column(),"]");else if(Qe=="(")y(at,Ye.column(),")");else if(Qe=="}"){for(;Ze.type=="statement";)Ze=b(at);for(Ze.type=="}"&&(Ze=b(at));Ze.type=="statement";)Ze=b(at)}else Qe==Ze.type?b(at):$e&&((Ze.type=="}"||Ze.type=="top")&&Qe!=";"||Ze.type=="statement"&&Qe=="newstatement")&&y(at,Ye.column(),"statement",Ye.current());if(mt=="variable"&&(at.prevToken=="def"||N.typeFirstDefinitions&&S(Ye,at,Ye.start)&&C(at.context)&&Ye.match(/^\s*\(/,!1))&&(mt="def"),Ke.token){var pt=Ke.token(Ye,at,mt);pt!==void 0&&(mt=pt)}return mt=="def"&&N.styleDefs===!1&&(mt="variable"),at.startOfLine=!1,at.prevToken=ut?"def":mt||Qe,kt(Ye,at),mt},indent:function(Ye,at){if(Ye.tokenize!=oe&&Ye.tokenize!=null||Ye.typeAtEndOfLine&&C(Ye.context))return p.Pass;var Ze=Ye.context,mt=at&&at.charAt(0),pt=mt==Ze.type;if(Ze.type=="statement"&&mt=="}"&&(Ze=Ze.prev),N.dontIndentStatements)for(;Ze.type=="statement"&&N.dontIndentStatements.test(Ze.info);)Ze=Ze.prev;if(Ke.indent){var Xt=Ke.indent(Ye,Ze,at,K);if(typeof Xt=="number")return Xt}var nr=Ze.prev&&Ze.prev.info=="switch";if(N.allmanIndentation&&/[{(]/.test(mt)){for(;Ze.type!="top"&&Ze.type!="}";)Ze=Ze.prev;return Ze.indented}return Ze.type=="statement"?Ze.indented+(mt=="{"?0:I):Ze.align&&(!ee||Ze.type!=")")?Ze.column+(pt?0:1):Ze.type==")"&&!pt?Ze.indented+I:Ze.indented+(pt?0:K)+(!pt&&nr&&!/^(?:case|default)\b/.test(at)?K:0)},electricInput:Ft?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});function k(A){for(var N={},K=A.split(" "),I=0;I<K.length;++I)N[K[I]]=!0;return N}function j(A,N){return typeof A=="function"?A(N):A.propertyIsEnumerable(N)}var L="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",H="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",R="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",J="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",D=k("int long char short double float unsigned signed void bool"),Y=k("SEL instancetype id Class Protocol BOOL");function X(A){return j(D,A)||/.+_t$/.test(A)}function M(A){return X(A)||j(Y,A)}var F="case do else for if switch while struct enum union",B="struct enum union";function W(A,N){if(!N.startOfLine)return!1;for(var K,I=null;K=A.peek();){if(K=="\\"&&A.match(/^.$/)){I=W;break}else if(K=="/"&&A.match(/^\/[\/\*]/,!1))break;A.next()}return N.tokenize=I,"meta"}function G(A,N){return N.prevToken=="type"?"type":!1}function ce(A){return!A||A.length<2||A[0]!="_"?!1:A[1]=="_"||A[1]!==A[1].toLowerCase()}function le(A){return A.eatWhile(/[\w\.']/),"number"}function ve(A,N){if(A.backUp(1),A.match(/^(?:R|u8R|uR|UR|LR)/)){var K=A.match(/^"([^\s\\()]{0,16})\(/);return K?(N.cpp11RawStringDelim=K[1],N.tokenize=ae,ae(A,N)):!1}return A.match(/^(?:u8|u|U|L)/)?A.match(/^["']/,!1)?"string":!1:(A.next(),!1)}function Me(A){var N=/(\w+)::~?(\w+)$/.exec(A);return N&&N[1]==N[2]}function ke(A,N){for(var K;(K=A.next())!=null;)if(K=='"'&&!A.eat('"')){N.tokenize=null;break}return"string"}function ae(A,N){var K=N.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),I=A.match(new RegExp(".*?\\)"+K+'"'));return I?N.tokenize=null:A.skipToEnd(),"string"}function Ce(A,N){typeof A=="string"&&(A=[A]);var K=[];function I(_e){if(_e)for(var Ie in _e)_e.hasOwnProperty(Ie)&&K.push(Ie)}I(N.keywords),I(N.types),I(N.builtin),I(N.atoms),K.length&&(N.helperType=A[0],p.registerHelper("hintWords",A[0],K));for(var ee=0;ee<A.length;++ee)p.defineMIME(A[ee],N)}Ce(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:k(L),types:X,blockKeywords:k(F),defKeywords:k(B),typeFirstDefinitions:!0,atoms:k("NULL true false"),isReservedIdentifier:ce,hooks:{"#":W,"*":G},modeProps:{fold:["brace","include"]}}),Ce(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:k(L+" "+H),types:X,blockKeywords:k(F+" class try catch"),defKeywords:k(B+" class namespace"),typeFirstDefinitions:!0,atoms:k("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:ce,hooks:{"#":W,"*":G,u:ve,U:ve,L:ve,R:ve,0:le,1:le,2:le,3:le,4:le,5:le,6:le,7:le,8:le,9:le,token:function(A,N,K){if(K=="variable"&&A.peek()=="("&&(N.prevToken==";"||N.prevToken==null||N.prevToken=="}")&&Me(A.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ce("text/x-java",{name:"clike",keywords:k("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:k("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:k("catch class do else finally for if switch try while"),defKeywords:k("class interface enum @interface"),typeFirstDefinitions:!0,atoms:k("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(A){return A.match("interface",!1)?!1:(A.eatWhile(/[\w\$_]/),"meta")},'"':function(A,N){return A.match(/""$/)?(N.tokenize=V,N.tokenize(A,N)):!1}},modeProps:{fold:["brace","import"]}}),Ce("text/x-csharp",{name:"clike",keywords:k("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:k("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:k("catch class do else finally for foreach if struct switch try while"),defKeywords:k("class interface namespace record struct var"),typeFirstDefinitions:!0,atoms:k("true false null"),hooks:{"@":function(A,N){return A.eat('"')?(N.tokenize=ke,ke(A,N)):(A.eatWhile(/[\w\$_]/),"meta")}}});function V(A,N){for(var K=!1;!A.eol();){if(!K&&A.match('"""')){N.tokenize=null;break}K=A.next()=="\\"&&!K}return"string"}function he(A){return function(N,K){for(var I;I=N.next();)if(I=="*"&&N.eat("/"))if(A==1){K.tokenize=null;break}else return K.tokenize=he(A-1),K.tokenize(N,K);else if(I=="/"&&N.eat("*"))return K.tokenize=he(A+1),K.tokenize(N,K);return"comment"}}Ce("text/x-scala",{name:"clike",keywords:k("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:k("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:k("catch class enum do else finally for forSome if match switch try while"),defKeywords:k("class enum def object package trait type val var"),atoms:k("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(A){return A.eatWhile(/[\w\$_]/),"meta"},'"':function(A,N){return A.match('""')?(N.tokenize=V,N.tokenize(A,N)):!1},"'":function(A){return A.match(/^(\\[^'\s]+|[^\\'])'/)?"string-2":(A.eatWhile(/[\w\$_\xa1-\uffff]/),"atom")},"=":function(A,N){var K=N.context;return K.type=="}"&&K.align&&A.eat(">")?(N.context=new g(K.indented,K.column,K.type,K.info,null,K.prev),"operator"):!1},"/":function(A,N){return A.eat("*")?(N.tokenize=he(1),N.tokenize(A,N)):!1}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}});function E(A){return function(N,K){for(var I=!1,ee,_e=!1;!N.eol();){if(!A&&!I&&N.match('"')){_e=!0;break}if(A&&N.match('"""')){_e=!0;break}ee=N.next(),!I&&ee=="$"&&N.match("{")&&N.skipTo("}"),I=!I&&ee=="\\"&&!A}return(_e||!A)&&(K.tokenize=null),"string"}}Ce("text/x-kotlin",{name:"clike",keywords:k("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"),types:k("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),indentSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(ul?|l|f)?/i,blockKeywords:k("catch class do else finally for if where try while enum"),defKeywords:k("class val var object interface fun"),atoms:k("true false null this"),hooks:{"@":function(A){return A.eatWhile(/[\w\$_]/),"meta"},"*":function(A,N){return N.prevToken=="."?"variable":"operator"},'"':function(A,N){return N.tokenize=E(A.match('""')),N.tokenize(A,N)},"/":function(A,N){return A.eat("*")?(N.tokenize=he(1),N.tokenize(A,N)):!1},indent:function(A,N,K,I){var ee=K&&K.charAt(0);if((A.prevToken=="}"||A.prevToken==")")&&K=="")return A.indented;if(A.prevToken=="operator"&&K!="}"&&A.context.type!="}"||A.prevToken=="variable"&&ee=="."||(A.prevToken=="}"||A.prevToken==")")&&ee==".")return I*2+N.indented;if(N.align&&N.type=="}")return N.indented+(A.context.type==(K||"").charAt(0)?0:I)}},modeProps:{closeBrackets:{triples:'"'}}}),Ce(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:k("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:k("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:k("for while do if else struct"),builtin:k("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:k("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":W},modeProps:{fold:["brace","include"]}}),Ce("text/x-nesc",{name:"clike",keywords:k(L+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:X,blockKeywords:k(F),atoms:k("null true false"),hooks:{"#":W},modeProps:{fold:["brace","include"]}}),Ce("text/x-objectivec",{name:"clike",keywords:k(L+" "+R),types:M,builtin:k(J),blockKeywords:k(F+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:k(B+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:k("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ce,hooks:{"#":W,"*":G},modeProps:{fold:["brace","include"]}}),Ce("text/x-objectivec++",{name:"clike",keywords:k(L+" "+R+" "+H),types:M,builtin:k(J),blockKeywords:k(F+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:k(B+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:k("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ce,hooks:{"#":W,"*":G,u:ve,U:ve,L:ve,R:ve,0:le,1:le,2:le,3:le,4:le,5:le,6:le,7:le,8:le,9:le,token:function(A,N,K){if(K=="variable"&&A.peek()=="("&&(N.prevToken==";"||N.prevToken==null||N.prevToken=="}")&&Me(A.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ce("text/x-squirrel",{name:"clike",keywords:k("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:X,blockKeywords:k("case catch class else for foreach if switch try while"),defKeywords:k("function local class"),typeFirstDefinitions:!0,atoms:k("true false null"),hooks:{"#":W},modeProps:{fold:["brace","include"]}});var Z=null;function Q(A){return function(N,K){for(var I=!1,ee,_e=!1;!N.eol();){if(!I&&N.match('"')&&(A=="single"||N.match('""'))){_e=!0;break}if(!I&&N.match("``")){Z=Q(A),_e=!0;break}ee=N.next(),I=A=="single"&&!I&&ee=="\\"}return _e&&(K.tokenize=null),"string"}}Ce("text/x-ceylon",{name:"clike",keywords:k("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(A){var N=A.charAt(0);return N===N.toUpperCase()&&N!==N.toLowerCase()},blockKeywords:k("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:k("class dynamic function interface module object package value"),builtin:k("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:k("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(A){return A.eatWhile(/[\w\$_]/),"meta"},'"':function(A,N){return N.tokenize=Q(A.match('""')?"triple":"single"),N.tokenize(A,N)},"`":function(A,N){return!Z||!A.match("`")?!1:(N.tokenize=Z,Z=null,N.tokenize(A,N))},"'":function(A){return A.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(A,N,K){if((K=="variable"||K=="type")&&N.prevToken==".")return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})})})()),Nf.exports}Jx();var Lf={exports:{}},Pf;function Tm(){return Pf||(Pf=1,(function(l,c){(function(p){p(is())})(function(p){var g={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},y={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};p.defineMode("xml",function(b,S){var C=b.indentUnit,k={},j=S.htmlMode?g:y;for(var L in j)k[L]=j[L];for(var L in S)k[L]=S[L];var H,R;function J(E,Z){function Q(K){return Z.tokenize=K,K(E,Z)}var A=E.next();if(A=="<")return E.eat("!")?E.eat("[")?E.match("CDATA[")?Q(X("atom","]]>")):null:E.match("--")?Q(X("comment","-->")):E.match("DOCTYPE",!0,!0)?(E.eatWhile(/[\w\._\-]/),Q(M(1))):null:E.eat("?")?(E.eatWhile(/[\w\._\-]/),Z.tokenize=X("meta","?>"),"meta"):(H=E.eat("/")?"closeTag":"openTag",Z.tokenize=D,"tag bracket");if(A=="&"){var N;return E.eat("#")?E.eat("x")?N=E.eatWhile(/[a-fA-F\d]/)&&E.eat(";"):N=E.eatWhile(/[\d]/)&&E.eat(";"):N=E.eatWhile(/[\w\.\-:]/)&&E.eat(";"),N?"atom":"error"}else return E.eatWhile(/[^&<]/),null}J.isInText=!0;function D(E,Z){var Q=E.next();if(Q==">"||Q=="/"&&E.eat(">"))return Z.tokenize=J,H=Q==">"?"endTag":"selfcloseTag","tag bracket";if(Q=="=")return H="equals",null;if(Q=="<"){Z.tokenize=J,Z.state=ce,Z.tagName=Z.tagStart=null;var A=Z.tokenize(E,Z);return A?A+" tag error":"tag error"}else return/[\'\"]/.test(Q)?(Z.tokenize=Y(Q),Z.stringStartCol=E.column(),Z.tokenize(E,Z)):(E.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function Y(E){var Z=function(Q,A){for(;!Q.eol();)if(Q.next()==E){A.tokenize=D;break}return"string"};return Z.isInAttribute=!0,Z}function X(E,Z){return function(Q,A){for(;!Q.eol();){if(Q.match(Z)){A.tokenize=J;break}Q.next()}return E}}function M(E){return function(Z,Q){for(var A;(A=Z.next())!=null;){if(A=="<")return Q.tokenize=M(E+1),Q.tokenize(Z,Q);if(A==">")if(E==1){Q.tokenize=J;break}else return Q.tokenize=M(E-1),Q.tokenize(Z,Q)}return"meta"}}function F(E){return E&&E.toLowerCase()}function B(E,Z,Q){this.prev=E.context,this.tagName=Z||"",this.indent=E.indented,this.startOfLine=Q,(k.doNotIndent.hasOwnProperty(Z)||E.context&&E.context.noIndent)&&(this.noIndent=!0)}function W(E){E.context&&(E.context=E.context.prev)}function G(E,Z){for(var Q;;){if(!E.context||(Q=E.context.tagName,!k.contextGrabbers.hasOwnProperty(F(Q))||!k.contextGrabbers[F(Q)].hasOwnProperty(F(Z))))return;W(E)}}function ce(E,Z,Q){return E=="openTag"?(Q.tagStart=Z.column(),le):E=="closeTag"?ve:ce}function le(E,Z,Q){return E=="word"?(Q.tagName=Z.current(),R="tag",ae):k.allowMissingTagName&&E=="endTag"?(R="tag bracket",ae(E,Z,Q)):(R="error",le)}function ve(E,Z,Q){if(E=="word"){var A=Z.current();return Q.context&&Q.context.tagName!=A&&k.implicitlyClosed.hasOwnProperty(F(Q.context.tagName))&&W(Q),Q.context&&Q.context.tagName==A||k.matchClosing===!1?(R="tag",Me):(R="tag error",ke)}else return k.allowMissingTagName&&E=="endTag"?(R="tag bracket",Me(E,Z,Q)):(R="error",ke)}function Me(E,Z,Q){return E!="endTag"?(R="error",Me):(W(Q),ce)}function ke(E,Z,Q){return R="error",Me(E,Z,Q)}function ae(E,Z,Q){if(E=="word")return R="attribute",Ce;if(E=="endTag"||E=="selfcloseTag"){var A=Q.tagName,N=Q.tagStart;return Q.tagName=Q.tagStart=null,E=="selfcloseTag"||k.autoSelfClosers.hasOwnProperty(F(A))?G(Q,A):(G(Q,A),Q.context=new B(Q,A,N==Q.indented)),ce}return R="error",ae}function Ce(E,Z,Q){return E=="equals"?V:(k.allowMissing||(R="error"),ae(E,Z,Q))}function V(E,Z,Q){return E=="string"?he:E=="word"&&k.allowUnquoted?(R="string",ae):(R="error",ae(E,Z,Q))}function he(E,Z,Q){return E=="string"?he:ae(E,Z,Q)}return{startState:function(E){var Z={tokenize:J,state:ce,indented:E||0,tagName:null,tagStart:null,context:null};return E!=null&&(Z.baseIndent=E),Z},token:function(E,Z){if(!Z.tagName&&E.sol()&&(Z.indented=E.indentation()),E.eatSpace())return null;H=null;var Q=Z.tokenize(E,Z);return(Q||H)&&Q!="comment"&&(R=null,Z.state=Z.state(H||Q,E,Z),R&&(Q=R=="error"?Q+" error":R)),Q},indent:function(E,Z,Q){var A=E.context;if(E.tokenize.isInAttribute)return E.tagStart==E.indented?E.stringStartCol+1:E.indented+C;if(A&&A.noIndent)return p.Pass;if(E.tokenize!=D&&E.tokenize!=J)return Q?Q.match(/^(\s*)/)[0].length:0;if(E.tagName)return k.multilineTagIndentPastTag!==!1?E.tagStart+E.tagName.length+2:E.tagStart+C*(k.multilineTagIndentFactor||1);if(k.alignCDATA&&/<!\[CDATA\[/.test(Z))return 0;var N=Z&&/^<(\/)?([\w_:\.-]*)/.exec(Z);if(N&&N[1])for(;A;)if(A.tagName==N[2]){A=A.prev;break}else if(k.implicitlyClosed.hasOwnProperty(F(A.tagName)))A=A.prev;else break;else if(N)for(;A;){var K=k.contextGrabbers[F(A.tagName)];if(K&&K.hasOwnProperty(F(N[2])))A=A.prev;else break}for(;A&&A.prev&&!A.startOfLine;)A=A.prev;return A?A.indent+C:E.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:k.htmlMode?"html":"xml",helperType:k.htmlMode?"html":"xml",skipAttribute:function(E){E.state==V&&(E.state=ae)},xmlCurrentTag:function(E){return E.tagName?{name:E.tagName,close:E.type=="closeTag"}:null},xmlCurrentContext:function(E){for(var Z=[],Q=E.context;Q;Q=Q.prev)Z.push(Q.tagName);return Z.reverse()}}}),p.defineMIME("text/xml","xml"),p.defineMIME("application/xml","xml"),p.mimeModes.hasOwnProperty("text/html")||p.defineMIME("text/html",{name:"xml",htmlMode:!0})})})()),Lf.exports}Tm();var Af={exports:{}},Rf;function jm(){return Rf||(Rf=1,(function(l,c){(function(p){p(is())})(function(p){p.defineMode("css",function(ke,ae){var Ce=ae.inline;ae.propertyKeywords||(ae=p.resolveMode("text/css"));var V=ke.indentUnit,he=ae.tokenHooks,E=ae.documentTypes||{},Z=ae.mediaTypes||{},Q=ae.mediaFeatures||{},A=ae.mediaValueKeywords||{},N=ae.propertyKeywords||{},K=ae.nonStandardPropertyKeywords||{},I=ae.fontProperties||{},ee=ae.counterDescriptors||{},_e=ae.colorKeywords||{},Ie=ae.valueKeywords||{},qe=ae.allowNested,Oe=ae.lineComment,Se=ae.supportsAtComponent===!0,Be=ke.highlightNonStandardPropertyKeywords!==!1,Ke,et;function $e(oe,je){return Ke=je,oe}function Ft(oe,je){var fe=oe.next();if(he[fe]){var kt=he[fe](oe,je);if(kt!==!1)return kt}if(fe=="@")return oe.eatWhile(/[\w\\\-]/),$e("def",oe.current());if(fe=="="||(fe=="~"||fe=="|")&&oe.eat("="))return $e(null,"compare");if(fe=='"'||fe=="'")return je.tokenize=Yt(fe),je.tokenize(oe,je);if(fe=="#")return oe.eatWhile(/[\w\\\-]/),$e("atom","hash");if(fe=="!")return oe.match(/^\s*\w*/),$e("keyword","important");if(/\d/.test(fe)||fe=="."&&oe.eat(/\d/))return oe.eatWhile(/[\w.%]/),$e("number","unit");if(fe==="-"){if(/[\d.]/.test(oe.peek()))return oe.eatWhile(/[\w.%]/),$e("number","unit");if(oe.match(/^-[\w\\\-]*/))return oe.eatWhile(/[\w\\\-]/),oe.match(/^\s*:/,!1)?$e("variable-2","variable-definition"):$e("variable-2","variable");if(oe.match(/^\w+-/))return $e("meta","meta")}else return/[,+>*\/]/.test(fe)?$e(null,"select-op"):fe=="."&&oe.match(/^-?[_a-z][_a-z0-9-]*/i)?$e("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(fe)?$e(null,fe):oe.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(oe.current())&&(je.tokenize=Ct),$e("variable callee","variable")):/[\w\\\-]/.test(fe)?(oe.eatWhile(/[\w\\\-]/),$e("property","word")):$e(null,null)}function Yt(oe){return function(je,fe){for(var kt=!1,Ye;(Ye=je.next())!=null;){if(Ye==oe&&!kt){oe==")"&&je.backUp(1);break}kt=!kt&&Ye=="\\"}return(Ye==oe||!kt&&oe!=")")&&(fe.tokenize=null),$e("string","string")}}function Ct(oe,je){return oe.next(),oe.match(/^\s*[\"\')]/,!1)?je.tokenize=null:je.tokenize=Yt(")"),$e(null,"(")}function xt(oe,je,fe){this.type=oe,this.indent=je,this.prev=fe}function tt(oe,je,fe,kt){return oe.context=new xt(fe,je.indentation()+(kt===!1?0:V),oe.context),fe}function Ue(oe){return oe.context.prev&&(oe.context=oe.context.prev),oe.context.type}function vt(oe,je,fe){return ut[fe.context.type](oe,je,fe)}function yt(oe,je,fe,kt){for(var Ye=kt||1;Ye>0;Ye--)fe.context=fe.context.prev;return vt(oe,je,fe)}function Qe(oe){var je=oe.current().toLowerCase();Ie.hasOwnProperty(je)?et="atom":_e.hasOwnProperty(je)?et="keyword":et="variable"}var ut={};return ut.top=function(oe,je,fe){if(oe=="{")return tt(fe,je,"block");if(oe=="}"&&fe.context.prev)return Ue(fe);if(Se&&/@component/i.test(oe))return tt(fe,je,"atComponentBlock");if(/^@(-moz-)?document$/i.test(oe))return tt(fe,je,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(oe))return tt(fe,je,"atBlock");if(/^@(font-face|counter-style)/i.test(oe))return fe.stateArg=oe,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(oe))return"keyframes";if(oe&&oe.charAt(0)=="@")return tt(fe,je,"at");if(oe=="hash")et="builtin";else if(oe=="word")et="tag";else{if(oe=="variable-definition")return"maybeprop";if(oe=="interpolation")return tt(fe,je,"interpolation");if(oe==":")return"pseudo";if(qe&&oe=="(")return tt(fe,je,"parens")}return fe.context.type},ut.block=function(oe,je,fe){if(oe=="word"){var kt=je.current().toLowerCase();return N.hasOwnProperty(kt)?(et="property","maybeprop"):K.hasOwnProperty(kt)?(et=Be?"string-2":"property","maybeprop"):qe?(et=je.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(et+=" error","maybeprop")}else return oe=="meta"?"block":!qe&&(oe=="hash"||oe=="qualifier")?(et="error","block"):ut.top(oe,je,fe)},ut.maybeprop=function(oe,je,fe){return oe==":"?tt(fe,je,"prop"):vt(oe,je,fe)},ut.prop=function(oe,je,fe){if(oe==";")return Ue(fe);if(oe=="{"&&qe)return tt(fe,je,"propBlock");if(oe=="}"||oe=="{")return yt(oe,je,fe);if(oe=="(")return tt(fe,je,"parens");if(oe=="hash"&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(je.current()))et+=" error";else if(oe=="word")Qe(je);else if(oe=="interpolation")return tt(fe,je,"interpolation");return"prop"},ut.propBlock=function(oe,je,fe){return oe=="}"?Ue(fe):oe=="word"?(et="property","maybeprop"):fe.context.type},ut.parens=function(oe,je,fe){return oe=="{"||oe=="}"?yt(oe,je,fe):oe==")"?Ue(fe):oe=="("?tt(fe,je,"parens"):oe=="interpolation"?tt(fe,je,"interpolation"):(oe=="word"&&Qe(je),"parens")},ut.pseudo=function(oe,je,fe){return oe=="meta"?"pseudo":oe=="word"?(et="variable-3",fe.context.type):vt(oe,je,fe)},ut.documentTypes=function(oe,je,fe){return oe=="word"&&E.hasOwnProperty(je.current())?(et="tag",fe.context.type):ut.atBlock(oe,je,fe)},ut.atBlock=function(oe,je,fe){if(oe=="(")return tt(fe,je,"atBlock_parens");if(oe=="}"||oe==";")return yt(oe,je,fe);if(oe=="{")return Ue(fe)&&tt(fe,je,qe?"block":"top");if(oe=="interpolation")return tt(fe,je,"interpolation");if(oe=="word"){var kt=je.current().toLowerCase();kt=="only"||kt=="not"||kt=="and"||kt=="or"?et="keyword":Z.hasOwnProperty(kt)?et="attribute":Q.hasOwnProperty(kt)?et="property":A.hasOwnProperty(kt)?et="keyword":N.hasOwnProperty(kt)?et="property":K.hasOwnProperty(kt)?et=Be?"string-2":"property":Ie.hasOwnProperty(kt)?et="atom":_e.hasOwnProperty(kt)?et="keyword":et="error"}return fe.context.type},ut.atComponentBlock=function(oe,je,fe){return oe=="}"?yt(oe,je,fe):oe=="{"?Ue(fe)&&tt(fe,je,qe?"block":"top",!1):(oe=="word"&&(et="error"),fe.context.type)},ut.atBlock_parens=function(oe,je,fe){return oe==")"?Ue(fe):oe=="{"||oe=="}"?yt(oe,je,fe,2):ut.atBlock(oe,je,fe)},ut.restricted_atBlock_before=function(oe,je,fe){return oe=="{"?tt(fe,je,"restricted_atBlock"):oe=="word"&&fe.stateArg=="@counter-style"?(et="variable","restricted_atBlock_before"):vt(oe,je,fe)},ut.restricted_atBlock=function(oe,je,fe){return oe=="}"?(fe.stateArg=null,Ue(fe)):oe=="word"?(fe.stateArg=="@font-face"&&!I.hasOwnProperty(je.current().toLowerCase())||fe.stateArg=="@counter-style"&&!ee.hasOwnProperty(je.current().toLowerCase())?et="error":et="property","maybeprop"):"restricted_atBlock"},ut.keyframes=function(oe,je,fe){return oe=="word"?(et="variable","keyframes"):oe=="{"?tt(fe,je,"top"):vt(oe,je,fe)},ut.at=function(oe,je,fe){return oe==";"?Ue(fe):oe=="{"||oe=="}"?yt(oe,je,fe):(oe=="word"?et="tag":oe=="hash"&&(et="builtin"),"at")},ut.interpolation=function(oe,je,fe){return oe=="}"?Ue(fe):oe=="{"||oe==";"?yt(oe,je,fe):(oe=="word"?et="variable":oe!="variable"&&oe!="("&&oe!=")"&&(et="error"),"interpolation")},{startState:function(oe){return{tokenize:null,state:Ce?"block":"top",stateArg:null,context:new xt(Ce?"block":"top",oe||0,null)}},token:function(oe,je){if(!je.tokenize&&oe.eatSpace())return null;var fe=(je.tokenize||Ft)(oe,je);return fe&&typeof fe=="object"&&(Ke=fe[1],fe=fe[0]),et=fe,Ke!="comment"&&(je.state=ut[je.state](Ke,oe,je)),et},indent:function(oe,je){var fe=oe.context,kt=je&&je.charAt(0),Ye=fe.indent;return fe.type=="prop"&&(kt=="}"||kt==")")&&(fe=fe.prev),fe.prev&&(kt=="}"&&(fe.type=="block"||fe.type=="top"||fe.type=="interpolation"||fe.type=="restricted_atBlock")?(fe=fe.prev,Ye=fe.indent):(kt==")"&&(fe.type=="parens"||fe.type=="atBlock_parens")||kt=="{"&&(fe.type=="at"||fe.type=="atBlock"))&&(Ye=Math.max(0,fe.indent-V))),Ye},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:Oe,fold:"brace"}});function g(ke){for(var ae={},Ce=0;Ce<ke.length;++Ce)ae[ke[Ce].toLowerCase()]=!0;return ae}var y=["domain","regexp","url","url-prefix"],b=g(y),S=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],C=g(S),k=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],j=g(k),L=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],H=g(L),R=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],J=g(R),D=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],Y=g(D),X=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],M=g(X),F=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],B=g(F),W=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],G=g(W),ce=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],le=g(ce),ve=y.concat(S).concat(k).concat(L).concat(R).concat(D).concat(W).concat(ce);p.registerHelper("hintWords","css",ve);function Me(ke,ae){for(var Ce=!1,V;(V=ke.next())!=null;){if(Ce&&V=="/"){ae.tokenize=null;break}Ce=V=="*"}return["comment","comment"]}p.defineMIME("text/css",{documentTypes:b,mediaTypes:C,mediaFeatures:j,mediaValueKeywords:H,propertyKeywords:J,nonStandardPropertyKeywords:Y,fontProperties:M,counterDescriptors:B,colorKeywords:G,valueKeywords:le,tokenHooks:{"/":function(ke,ae){return ke.eat("*")?(ae.tokenize=Me,Me(ke,ae)):!1}},name:"css"}),p.defineMIME("text/x-scss",{mediaTypes:C,mediaFeatures:j,mediaValueKeywords:H,propertyKeywords:J,nonStandardPropertyKeywords:Y,colorKeywords:G,valueKeywords:le,fontProperties:M,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(ke,ae){return ke.eat("/")?(ke.skipToEnd(),["comment","comment"]):ke.eat("*")?(ae.tokenize=Me,Me(ke,ae)):["operator","operator"]},":":function(ke){return ke.match(/^\s*\{/,!1)?[null,null]:!1},$:function(ke){return ke.match(/^[\w-]+/),ke.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(ke){return ke.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),p.defineMIME("text/x-less",{mediaTypes:C,mediaFeatures:j,mediaValueKeywords:H,propertyKeywords:J,nonStandardPropertyKeywords:Y,colorKeywords:G,valueKeywords:le,fontProperties:M,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(ke,ae){return ke.eat("/")?(ke.skipToEnd(),["comment","comment"]):ke.eat("*")?(ae.tokenize=Me,Me(ke,ae)):["operator","operator"]},"@":function(ke){return ke.eat("{")?[null,"interpolation"]:ke.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)?!1:(ke.eatWhile(/[\w\\\-]/),ke.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),p.defineMIME("text/x-gss",{documentTypes:b,mediaTypes:C,mediaFeatures:j,propertyKeywords:J,nonStandardPropertyKeywords:Y,fontProperties:M,counterDescriptors:B,colorKeywords:G,valueKeywords:le,supportsAtComponent:!0,tokenHooks:{"/":function(ke,ae){return ke.eat("*")?(ae.tokenize=Me,Me(ke,ae)):!1}},name:"css",helperType:"gss"})})})()),Af.exports}jm();var If={exports:{}},Of;function Xx(){return Of||(Of=1,(function(l,c){(function(p){p(is(),Tm(),Cm(),jm())})(function(p){var g={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function y(H,R,J){var D=H.current(),Y=D.search(R);return Y>-1?H.backUp(D.length-Y):D.match(/<\/?$/)&&(H.backUp(D.length),H.match(R,!1)||H.match(D)),J}var b={};function S(H){var R=b[H];return R||(b[H]=new RegExp("\\s+"+H+`\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))}function C(H,R){var J=H.match(S(R));return J?/^\s*(.*?)\s*$/.exec(J[2])[1]:""}function k(H,R){return new RegExp((R?"^":"")+"</\\s*"+H+"\\s*>","i")}function j(H,R){for(var J in H)for(var D=R[J]||(R[J]=[]),Y=H[J],X=Y.length-1;X>=0;X--)D.unshift(Y[X])}function L(H,R){for(var J=0;J<H.length;J++){var D=H[J];if(!D[0]||D[1].test(C(R,D[0])))return D[2]}}p.defineMode("htmlmixed",function(H,R){var J=p.getMode(H,{name:"xml",htmlMode:!0,multilineTagIndentFactor:R.multilineTagIndentFactor,multilineTagIndentPastTag:R.multilineTagIndentPastTag,allowMissingTagName:R.allowMissingTagName}),D={},Y=R&&R.tags,X=R&&R.scriptTypes;if(j(g,D),Y&&j(Y,D),X)for(var M=X.length-1;M>=0;M--)D.script.unshift(["type",X[M].matches,X[M].mode]);function F(B,W){var G=J.token(B,W.htmlState),ce=/\btag\b/.test(G),le;if(ce&&!/[<>\s\/]/.test(B.current())&&(le=W.htmlState.tagName&&W.htmlState.tagName.toLowerCase())&&D.hasOwnProperty(le))W.inTag=le+" ";else if(W.inTag&&ce&&/>$/.test(B.current())){var ve=/^([\S]+) (.*)/.exec(W.inTag);W.inTag=null;var Me=B.current()==">"&&L(D[ve[1]],ve[2]),ke=p.getMode(H,Me),ae=k(ve[1],!0),Ce=k(ve[1],!1);W.token=function(V,he){return V.match(ae,!1)?(he.token=F,he.localState=he.localMode=null,null):y(V,Ce,he.localMode.token(V,he.localState))},W.localMode=ke,W.localState=p.startState(ke,J.indent(W.htmlState,"",""))}else W.inTag&&(W.inTag+=B.current(),B.eol()&&(W.inTag+=" "));return G}return{startState:function(){var B=p.startState(J);return{token:F,inTag:null,localMode:null,localState:null,htmlState:B}},copyState:function(B){var W;return B.localState&&(W=p.copyState(B.localMode,B.localState)),{token:B.token,inTag:B.inTag,localMode:B.localMode,localState:W,htmlState:p.copyState(J,B.htmlState)}},token:function(B,W){return W.token(B,W)},indent:function(B,W,G){return!B.localMode||/^\s*<\//.test(W)?J.indent(B.htmlState,W,G):B.localMode.indent?B.localMode.indent(B.localState,W,G):p.Pass},innerMode:function(B){return{state:B.localState||B.htmlState,mode:B.localMode||J}}}},"xml","javascript","css"),p.defineMIME("text/html","htmlmixed")})})()),If.exports}Xx();var Mf={exports:{}},Df;function Qx(){return Df||(Df=1,(function(l,c){(function(p){p(is())})(function(p){var g={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},y=p.Pos;p.defineOption("autoCloseBrackets",!1,function(M,F,B){B&&B!=p.Init&&(M.removeKeyMap(S),M.state.closeBrackets=null),F&&(C(b(F,"pairs")),M.state.closeBrackets=F,M.addKeyMap(S))});function b(M,F){return F=="pairs"&&typeof M=="string"?M:typeof M=="object"&&M[F]!=null?M[F]:g[F]}var S={Backspace:L,Enter:H};function C(M){for(var F=0;F<M.length;F++){var B=M.charAt(F),W="'"+B+"'";S[W]||(S[W]=k(B))}}C(g.pairs+"`");function k(M){return function(F){return D(F,M)}}function j(M){var F=M.state.closeBrackets;if(!F||F.override)return F;var B=M.getModeAt(M.getCursor());return B.closeBrackets||F}function L(M){var F=j(M);if(!F||M.getOption("disableInput"))return p.Pass;for(var B=b(F,"pairs"),W=M.listSelections(),G=0;G<W.length;G++){if(!W[G].empty())return p.Pass;var ce=Y(M,W[G].head);if(!ce||B.indexOf(ce)%2!=0)return p.Pass}for(var G=W.length-1;G>=0;G--){var le=W[G].head;M.replaceRange("",y(le.line,le.ch-1),y(le.line,le.ch+1),"+delete")}}function H(M){var F=j(M),B=F&&b(F,"explode");if(!B||M.getOption("disableInput"))return p.Pass;for(var W=M.listSelections(),G=0;G<W.length;G++){if(!W[G].empty())return p.Pass;var ce=Y(M,W[G].head);if(!ce||B.indexOf(ce)%2!=0)return p.Pass}M.operation(function(){var le=M.lineSeparator()||`
`;M.replaceSelection(le+le,null),R(M,-1),W=M.listSelections();for(var ve=0;ve<W.length;ve++){var Me=W[ve].head.line;M.indentLine(Me,null,!0),M.indentLine(Me+1,null,!0)}})}function R(M,F){for(var B=[],W=M.listSelections(),G=0,ce=0;ce<W.length;ce++){var le=W[ce];le.head==M.getCursor()&&(G=ce);var ve=le.head.ch||F>0?{line:le.head.line,ch:le.head.ch+F}:{line:le.head.line-1};B.push({anchor:ve,head:ve})}M.setSelections(B,G)}function J(M){var F=p.cmpPos(M.anchor,M.head)>0;return{anchor:new y(M.anchor.line,M.anchor.ch+(F?-1:1)),head:new y(M.head.line,M.head.ch+(F?1:-1))}}function D(M,F){var B=j(M);if(!B||M.getOption("disableInput"))return p.Pass;var W=b(B,"pairs"),G=W.indexOf(F);if(G==-1)return p.Pass;for(var ce=b(B,"closeBefore"),le=b(B,"triples"),ve=W.charAt(G+1)==F,Me=M.listSelections(),ke=G%2==0,ae,Ce=0;Ce<Me.length;Ce++){var V=Me[Ce],he=V.head,E,Z=M.getRange(he,y(he.line,he.ch+1));if(ke&&!V.empty())E="surround";else if((ve||!ke)&&Z==F)ve&&X(M,he)?E="both":le.indexOf(F)>=0&&M.getRange(he,y(he.line,he.ch+3))==F+F+F?E="skipThree":E="skip";else if(ve&&he.ch>1&&le.indexOf(F)>=0&&M.getRange(y(he.line,he.ch-2),he)==F+F){if(he.ch>2&&/\bstring/.test(M.getTokenTypeAt(y(he.line,he.ch-2))))return p.Pass;E="addFour"}else if(ve){var Q=he.ch==0?" ":M.getRange(y(he.line,he.ch-1),he);if(!p.isWordChar(Z)&&Q!=F&&!p.isWordChar(Q))E="both";else return p.Pass}else if(ke&&(Z.length===0||/\s/.test(Z)||ce.indexOf(Z)>-1))E="both";else return p.Pass;if(!ae)ae=E;else if(ae!=E)return p.Pass}var A=G%2?W.charAt(G-1):F,N=G%2?F:W.charAt(G+1);M.operation(function(){if(ae=="skip")R(M,1);else if(ae=="skipThree")R(M,3);else if(ae=="surround"){for(var K=M.getSelections(),I=0;I<K.length;I++)K[I]=A+K[I]+N;M.replaceSelections(K,"around"),K=M.listSelections().slice();for(var I=0;I<K.length;I++)K[I]=J(K[I]);M.setSelections(K)}else ae=="both"?(M.replaceSelection(A+N,null),M.triggerElectric(A+N),R(M,-1)):ae=="addFour"&&(M.replaceSelection(A+A+A+A,"before"),R(M,1))})}function Y(M,F){var B=M.getRange(y(F.line,F.ch-1),y(F.line,F.ch+1));return B.length==2?B:null}function X(M,F){var B=M.getTokenAt(y(F.line,F.ch+1));return/\bstring/.test(B.type)&&B.start==F.ch&&(F.ch==0||!/\bstring/.test(M.getTokenTypeAt(F)))}})})()),Mf.exports}Qx();var zf={exports:{}},Ff;function Zx(){return Ff||(Ff=1,(function(l,c){(function(p){p(is())})(function(p){var g=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),y=p.Pos,b={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function S(R){return R&&R.bracketRegex||/[(){}[\]]/}function C(R,J,D){var Y=R.getLineHandle(J.line),X=J.ch-1,M=D&&D.afterCursor;M==null&&(M=/(^| )cm-fat-cursor($| )/.test(R.getWrapperElement().className));var F=S(D),B=!M&&X>=0&&F.test(Y.text.charAt(X))&&b[Y.text.charAt(X)]||F.test(Y.text.charAt(X+1))&&b[Y.text.charAt(++X)];if(!B)return null;var W=B.charAt(1)==">"?1:-1;if(D&&D.strict&&W>0!=(X==J.ch))return null;var G=R.getTokenTypeAt(y(J.line,X+1)),ce=k(R,y(J.line,X+(W>0?1:0)),W,G,D);return ce==null?null:{from:y(J.line,X),to:ce&&ce.pos,match:ce&&ce.ch==B.charAt(0),forward:W>0}}function k(R,J,D,Y,X){for(var M=X&&X.maxScanLineLength||1e4,F=X&&X.maxScanLines||1e3,B=[],W=S(X),G=D>0?Math.min(J.line+F,R.lastLine()+1):Math.max(R.firstLine()-1,J.line-F),ce=J.line;ce!=G;ce+=D){var le=R.getLine(ce);if(le){var ve=D>0?0:le.length-1,Me=D>0?le.length:-1;if(!(le.length>M))for(ce==J.line&&(ve=J.ch-(D<0?1:0));ve!=Me;ve+=D){var ke=le.charAt(ve);if(W.test(ke)&&(Y===void 0||(R.getTokenTypeAt(y(ce,ve+1))||"")==(Y||""))){var ae=b[ke];if(ae&&ae.charAt(1)==">"==D>0)B.push(ke);else if(B.length)B.pop();else return{pos:y(ce,ve),ch:ke}}}}}return ce-D==(D>0?R.lastLine():R.firstLine())?!1:null}function j(R,J,D){for(var Y=R.state.matchBrackets.maxHighlightLineLength||1e3,X=D&&D.highlightNonMatching,M=[],F=R.listSelections(),B=0;B<F.length;B++){var W=F[B].empty()&&C(R,F[B].head,D);if(W&&(W.match||X!==!1)&&R.getLine(W.from.line).length<=Y){var G=W.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";M.push(R.markText(W.from,y(W.from.line,W.from.ch+1),{className:G})),W.to&&R.getLine(W.to.line).length<=Y&&M.push(R.markText(W.to,y(W.to.line,W.to.ch+1),{className:G}))}}if(M.length){g&&R.state.focused&&R.focus();var ce=function(){R.operation(function(){for(var le=0;le<M.length;le++)M[le].clear()})};if(J)setTimeout(ce,800);else return ce}}function L(R){R.operation(function(){R.state.matchBrackets.currentlyHighlighted&&(R.state.matchBrackets.currentlyHighlighted(),R.state.matchBrackets.currentlyHighlighted=null),R.state.matchBrackets.currentlyHighlighted=j(R,!1,R.state.matchBrackets)})}function H(R){R.state.matchBrackets&&R.state.matchBrackets.currentlyHighlighted&&(R.state.matchBrackets.currentlyHighlighted(),R.state.matchBrackets.currentlyHighlighted=null)}p.defineOption("matchBrackets",!1,function(R,J,D){D&&D!=p.Init&&(R.off("cursorActivity",L),R.off("focus",L),R.off("blur",H),H(R)),J&&(R.state.matchBrackets=typeof J=="object"?J:{},R.on("cursorActivity",L),R.on("focus",L),R.on("blur",H))}),p.defineExtension("matchBrackets",function(){j(this,!0)}),p.defineExtension("findMatchingBracket",function(R,J,D){return(D||typeof J=="boolean")&&(D?(D.strict=J,J=D):J=J?{strict:!0}:null),C(this,R,J)}),p.defineExtension("scanForBracket",function(R,J,D,Y){return k(this,R,J,D,Y)})})})()),zf.exports}Zx();var Wf={exports:{}},Hf;function eb(){return Hf||(Hf=1,(function(l,c){(function(p){p(is())})(function(p){var g="CodeMirror-hint",y="CodeMirror-hint-active";p.showHint=function(M,F,B){if(!F)return M.showHint(B);B&&B.async&&(F.async=!0);var W={hint:F};if(B)for(var G in B)W[G]=B[G];return M.showHint(W)},p.defineExtension("showHint",function(M){M=k(this,this.getCursor("start"),M);var F=this.listSelections();if(!(F.length>1)){if(this.somethingSelected()){if(!M.hint.supportsSelection)return;for(var B=0;B<F.length;B++)if(F[B].head.line!=F[B].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var W=this.state.completionActive=new b(this,M);W.options.hint&&(p.signal(this,"startCompletion",this),W.update(!0))}}),p.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function b(M,F){if(this.cm=M,this.options=F,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var B=this;M.on("cursorActivity",this.activityFunc=function(){B.cursorActivity()})}}var S=window.requestAnimationFrame||function(M){return setTimeout(M,1e3/60)},C=window.cancelAnimationFrame||clearTimeout;b.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&p.signal(this.data,"close"),this.widget&&this.widget.close(),p.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(M,F){var B=M.list[F],W=this;this.cm.operation(function(){B.hint?B.hint(W.cm,M,B):W.cm.replaceRange(j(B),B.from||M.from,B.to||M.to,"complete"),p.signal(M,"pick",B),W.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(C(this.debounce),this.debounce=0);var M=this.startPos;this.data&&(M=this.data.from);var F=this.cm.getCursor(),B=this.cm.getLine(F.line);if(F.line!=this.startPos.line||B.length-F.ch!=this.startLen-this.startPos.ch||F.ch<M.ch||this.cm.somethingSelected()||!F.ch||this.options.closeCharacters.test(B.charAt(F.ch-1)))this.close();else{var W=this;this.debounce=S(function(){W.update()}),this.widget&&this.widget.disable()}},update:function(M){if(this.tick!=null){var F=this,B=++this.tick;D(this.options.hint,this.cm,this.options,function(W){F.tick==B&&F.finishUpdate(W,M)})}},finishUpdate:function(M,F){this.data&&p.signal(this.data,"update");var B=this.widget&&this.widget.picked||F&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=M,M&&M.list.length&&(B&&M.list.length==1?this.pick(M,0):(this.widget=new R(this,M),p.signal(M,"shown")))}};function k(M,F,B){var W=M.options.hintOptions,G={};for(var ce in X)G[ce]=X[ce];if(W)for(var ce in W)W[ce]!==void 0&&(G[ce]=W[ce]);if(B)for(var ce in B)B[ce]!==void 0&&(G[ce]=B[ce]);return G.hint.resolve&&(G.hint=G.hint.resolve(M,F)),G}function j(M){return typeof M=="string"?M:M.text}function L(M,F){var B={Up:function(){F.moveFocus(-1)},Down:function(){F.moveFocus(1)},PageUp:function(){F.moveFocus(-F.menuSize()+1,!0)},PageDown:function(){F.moveFocus(F.menuSize()-1,!0)},Home:function(){F.setFocus(0)},End:function(){F.setFocus(F.length-1)},Enter:F.pick,Tab:F.pick,Esc:F.close},W=/Mac/.test(navigator.platform);W&&(B["Ctrl-P"]=function(){F.moveFocus(-1)},B["Ctrl-N"]=function(){F.moveFocus(1)});var G=M.options.customKeys,ce=G?{}:B;function le(ke,ae){var Ce;typeof ae!="string"?Ce=function(V){return ae(V,F)}:B.hasOwnProperty(ae)?Ce=B[ae]:Ce=ae,ce[ke]=Ce}if(G)for(var ve in G)G.hasOwnProperty(ve)&&le(ve,G[ve]);var Me=M.options.extraKeys;if(Me)for(var ve in Me)Me.hasOwnProperty(ve)&&le(ve,Me[ve]);return ce}function H(M,F){for(;F&&F!=M;){if(F.nodeName.toUpperCase()==="LI"&&F.parentNode==M)return F;F=F.parentNode}}function R(M,F){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=M,this.data=F,this.picked=!1;var B=this,W=M.cm,G=W.getInputField().ownerDocument,ce=G.defaultView||G.parentWindow,le=this.hints=G.createElement("ul");le.setAttribute("role","listbox"),le.setAttribute("aria-expanded","true"),le.id=this.id;var ve=M.cm.options.theme;le.className="CodeMirror-hints "+ve,this.selectedHint=F.selectedHint||0;for(var Me=F.list,ke=0;ke<Me.length;++ke){var ae=le.appendChild(G.createElement("li")),Ce=Me[ke],V=g+(ke!=this.selectedHint?"":" "+y);Ce.className!=null&&(V=Ce.className+" "+V),ae.className=V,ke==this.selectedHint&&ae.setAttribute("aria-selected","true"),ae.id=this.id+"-"+ke,ae.setAttribute("role","option"),Ce.render?Ce.render(ae,F,Ce):ae.appendChild(G.createTextNode(Ce.displayText||j(Ce))),ae.hintId=ke}var he=M.options.container||G.body,E=W.cursorCoords(M.options.alignWithWord?F.from:null),Z=E.left,Q=E.bottom,A=!0,N=0,K=0;if(he!==G.body){var I=["absolute","relative","fixed"].indexOf(ce.getComputedStyle(he).position)!==-1,ee=I?he:he.offsetParent,_e=ee.getBoundingClientRect(),Ie=G.body.getBoundingClientRect();N=_e.left-Ie.left-ee.scrollLeft,K=_e.top-Ie.top-ee.scrollTop}le.style.left=Z-N+"px",le.style.top=Q-K+"px";var qe=ce.innerWidth||Math.max(G.body.offsetWidth,G.documentElement.offsetWidth),Oe=ce.innerHeight||Math.max(G.body.offsetHeight,G.documentElement.offsetHeight);he.appendChild(le),W.getInputField().setAttribute("aria-autocomplete","list"),W.getInputField().setAttribute("aria-owns",this.id),W.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var Se=M.options.moveOnOverlap?le.getBoundingClientRect():new DOMRect,Be=M.options.paddingForScrollbar?le.scrollHeight>le.clientHeight+1:!1,Ke;setTimeout(function(){Ke=W.getScrollInfo()});var et=Se.bottom-Oe;if(et>0){var $e=Se.bottom-Se.top,Ft=Se.top-(E.bottom-E.top)-2;Oe-Se.top<Ft?($e>Ft&&(le.style.height=($e=Ft)+"px"),le.style.top=(Q=E.top-$e)-K+"px",A=!1):le.style.height=Oe-Se.top-2+"px"}var Yt=Se.right-qe;if(Be&&(Yt+=W.display.nativeBarWidth),Yt>0&&(Se.right-Se.left>qe&&(le.style.width=qe-5+"px",Yt-=Se.right-Se.left-qe),le.style.left=(Z=Math.max(E.left-Yt-N,0))+"px"),Be)for(var Ct=le.firstChild;Ct;Ct=Ct.nextSibling)Ct.style.paddingRight=W.display.nativeBarWidth+"px";if(W.addKeyMap(this.keyMap=L(M,{moveFocus:function(Ue,vt){B.changeActive(B.selectedHint+Ue,vt)},setFocus:function(Ue){B.changeActive(Ue)},menuSize:function(){return B.screenAmount()},length:Me.length,close:function(){M.close()},pick:function(){B.pick()},data:F})),M.options.closeOnUnfocus){var xt;W.on("blur",this.onBlur=function(){xt=setTimeout(function(){M.close()},100)}),W.on("focus",this.onFocus=function(){clearTimeout(xt)})}W.on("scroll",this.onScroll=function(){var Ue=W.getScrollInfo(),vt=W.getWrapperElement().getBoundingClientRect();Ke||(Ke=W.getScrollInfo());var yt=Q+Ke.top-Ue.top,Qe=yt-(ce.pageYOffset||(G.documentElement||G.body).scrollTop);if(A||(Qe+=le.offsetHeight),Qe<=vt.top||Qe>=vt.bottom)return M.close();le.style.top=yt+"px",le.style.left=Z+Ke.left-Ue.left+"px"}),p.on(le,"dblclick",function(Ue){var vt=H(le,Ue.target||Ue.srcElement);vt&&vt.hintId!=null&&(B.changeActive(vt.hintId),B.pick())}),p.on(le,"click",function(Ue){var vt=H(le,Ue.target||Ue.srcElement);vt&&vt.hintId!=null&&(B.changeActive(vt.hintId),M.options.completeOnSingleClick&&B.pick())}),p.on(le,"mousedown",function(){setTimeout(function(){W.focus()},20)});var tt=this.getSelectedHintRange();return(tt.from!==0||tt.to!==0)&&this.scrollToActive(),p.signal(F,"select",Me[this.selectedHint],le.childNodes[this.selectedHint]),!0}R.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var M=this.completion.cm.getInputField();M.removeAttribute("aria-activedescendant"),M.removeAttribute("aria-owns");var F=this.completion.cm;this.completion.options.closeOnUnfocus&&(F.off("blur",this.onBlur),F.off("focus",this.onFocus)),F.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var M=this;this.keyMap={Enter:function(){M.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(M,F){if(M>=this.data.list.length?M=F?this.data.list.length-1:0:M<0&&(M=F?0:this.data.list.length-1),this.selectedHint!=M){var B=this.hints.childNodes[this.selectedHint];B&&(B.className=B.className.replace(" "+y,""),B.removeAttribute("aria-selected")),B=this.hints.childNodes[this.selectedHint=M],B.className+=" "+y,B.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",B.id),this.scrollToActive(),p.signal(this.data,"select",this.data.list[this.selectedHint],B)}},scrollToActive:function(){var M=this.getSelectedHintRange(),F=this.hints.childNodes[M.from],B=this.hints.childNodes[M.to],W=this.hints.firstChild;F.offsetTop<this.hints.scrollTop?this.hints.scrollTop=F.offsetTop-W.offsetTop:B.offsetTop+B.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=B.offsetTop+B.offsetHeight-this.hints.clientHeight+W.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var M=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-M),to:Math.min(this.data.list.length-1,this.selectedHint+M)}}};function J(M,F){if(!M.somethingSelected())return F;for(var B=[],W=0;W<F.length;W++)F[W].supportsSelection&&B.push(F[W]);return B}function D(M,F,B,W){if(M.async)M(F,W,B);else{var G=M(F,B);G&&G.then?G.then(W):W(G)}}function Y(M,F){var B=M.getHelpers(F,"hint"),W;if(B.length){var G=function(ce,le,ve){var Me=J(ce,B);function ke(ae){if(ae==Me.length)return le(null);D(Me[ae],ce,ve,function(Ce){Ce&&Ce.list.length>0?le(Ce):ke(ae+1)})}ke(0)};return G.async=!0,G.supportsSelection=!0,G}else return(W=M.getHelper(M.getCursor(),"hintWords"))?function(ce){return p.hint.fromList(ce,{words:W})}:p.hint.anyword?function(ce,le){return p.hint.anyword(ce,le)}:function(){}}p.registerHelper("hint","auto",{resolve:Y}),p.registerHelper("hint","fromList",function(M,F){var B=M.getCursor(),W=M.getTokenAt(B),G,ce=p.Pos(B.line,W.start),le=B;W.start<B.ch&&/\w/.test(W.string.charAt(B.ch-W.start-1))?G=W.string.substr(0,B.ch-W.start):(G="",ce=B);for(var ve=[],Me=0;Me<F.words.length;Me++){var ke=F.words[Me];ke.slice(0,G.length)==G&&ve.push(ke)}if(ve.length)return{list:ve,from:ce,to:le}}),p.commands.autocomplete=p.showHint;var X={hint:p.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};p.defineOption("hintOptions",null)})})()),Wf.exports}eb();var Bf={exports:{}},Uf;function tb(){return Uf||(Uf=1,(function(l,c){(function(p){p(is())})(function(p){var g=/[\w$]+/,y=500;p.registerHelper("hint","anyword",function(b,S){for(var C=S&&S.word||g,k=S&&S.range||y,j=b.getCursor(),L=b.getLine(j.line),H=j.ch,R=H;R&&C.test(L.charAt(R-1));)--R;for(var J=R!=H&&L.slice(R,H),D=S&&S.list||[],Y={},X=new RegExp(C.source,"g"),M=-1;M<=1;M+=2)for(var F=j.line,B=Math.min(Math.max(F+M*k,b.firstLine()),b.lastLine())+M;F!=B;F+=M)for(var W=b.getLine(F),G;G=X.exec(W);)F==j.line&&G[0]===J||(!J||G[0].lastIndexOf(J,0)==0)&&!Object.prototype.hasOwnProperty.call(Y,G[0])&&(Y[G[0]]=!0,D.push(G[0]));return{list:D,from:p.Pos(j.line,R),to:p.Pos(j.line,H)}})})})()),Bf.exports}tb();function nb(l){return l==="python"?"python":l==="csharp"?"text/x-csharp":l==="java"?"text/x-java":l==="jsx"?{name:"javascript",jsx:!0}:l==="javascript"?"javascript":l==="html"?"htmlmixed":l==="css"?"css":"text/plain"}function Nm({value:l,onChange:c,language:p}){const g=we.useRef(null),y=we.useRef(null),b=we.useRef(c);return b.current=c,we.useEffect(()=>{const S=Sf.fromTextArea(g.current,{mode:nb(p),lineNumbers:!0,lineWrapping:!1,indentUnit:4,tabSize:4,indentWithTabs:!1,smartIndent:!0,electricChars:!0,autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,extraKeys:{Tab(k){if(k.somethingSelected())k.execCommand("indentMore");else{const j=k.getOption("indentUnit")-k.getCursor().ch%k.getOption("indentUnit");k.replaceSelection(" ".repeat(j),"end")}},"Shift-Tab":k=>k.execCommand("indentLess"),"Ctrl-Space":k=>k.showHint({hint:Sf.hint.anyword,completeSingle:!1})}});S.getInputField().setAttribute("aria-label","Code editor"),S.on("change",k=>{var j;return(j=b.current)==null?void 0:j.call(b,k.getValue())}),y.current=S;const C=typeof ResizeObserver<"u"?new ResizeObserver(()=>S.refresh()):null;return C==null||C.observe(S.getWrapperElement()),()=>{C==null||C.disconnect(),S.toTextArea(),y.current=null}},[p]),we.useEffect(()=>{const S=y.current;if(S&&S.getValue()!==l){const C=S.getCursor();S.setValue(l??""),S.setCursor(C)}},[l]),u.jsx("div",{className:"code-editor-wrap",children:u.jsx("textarea",{ref:g,"aria-label":"Code editor",defaultValue:l,spellCheck:!1})})}const yd=l=>String(l??"").replace(/\r\n/g,`
`).replace(/\n$/,"");function rb(l){const c=Array.isArray(l)?l:[];return{passed:c.filter(p=>p.passed===!0).length,total:c.length}}function qf(l,c){const p=String(l||"").split(/\r?\n/).find(y=>y.startsWith("PUBLIC_CHECK_RESULTS="));if(!p)throw new Error("Python returned no example-check results. See Console for errors.");const g=JSON.parse(p.slice(21));if(!Array.isArray(g)||g.length!==c.length)throw new Error("Python did not finish every published example.");return c.map((y,b)=>({call:y.call||"Example "+(b+1),expected:String(y.expected??""),received:String(g[b].actual??""),error:String(g[b].error||""),passed:g[b].ok===!0}))}function ib(l,c){return c.map((p,g)=>{var y,b,S,C;return{call:"main("+JSON.stringify(p.args||[])+")",expected:yd(p.expected),received:yd((y=l[g])==null?void 0:y.stdout),error:String(((b=l[g])==null?void 0:b.diagnostics)||((S=l[g])==null?void 0:S.stderr)||""),passed:((C=l[g])==null?void 0:C.success)===!0&&yd(l[g].stdout)===yd(p.expected)}})}function sb(l,c,p){return p(l,c.length).map(y=>({call:c[y.index].call,expected:y.expected,received:y.received,error:y.error,passed:y.passed}))}function Em(l){return(l||[]).map((c,p)=>({call:String(c.call||c.label||"Check "+(p+1)),expected:String(c.expected??"Requirement met"),received:String(c.received??(c.pass===!0||c.passed===!0?"Requirement met":"Not yet met")),error:String(c.error||""),passed:c.pass===!0||c.passed===!0}))}function ab(l){var c;return((c=/^\s*(?:async\s+)?def\s+([A-Za-z_]\w*)\s*\(/m.exec(l))==null?void 0:c[1])||null}function ac(l,c){var p,g,y;return c==="python"?ab(l):c==="javascript"?((p=/(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:p[1])||null:c==="csharp"?((g=/\b(?:public\s+)?static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:g[1])||null:c==="java"&&((y=/\bpublic\s+static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:y[1])||null}const ob=ac;function Qp(l,c,p=null){if(typeof l=="string")return JSON.stringify(l);if(l===null)return"null";if(typeof l=="boolean")return String(l);if(typeof l=="number")return Number.isFinite(l)?String(l):"0";if(Array.isArray(l)){const g=l.every(k=>Number.isInteger(k)),y=l.every(k=>typeof k=="string"),b=l.every(k=>typeof k=="boolean"),S=l.length===0&&p?p:g?"int":y?"string":b?"bool":"double";return"new "+(c==="java"?S==="string"?"String":S==="bool"?"boolean":S:S)+"[]{"+l.map(k=>Qp(k,c)).join(",")+"}"}throw new Error("This example uses a data type unsupported by the browser checker.")}function Zp(l,c,p){var S;const g=ac(p,c)||ac(l.starter||"",c);if(!g)throw new Error("The checker could not find a function declaration.");const y=l.challengeExamples||[],b=(((S=y[0])==null?void 0:S.input)||[]).map((C,k)=>{const j=y.map(L=>{var H;return(H=L.input)==null?void 0:H[k]}).find(L=>Array.isArray(L)&&L.length>0);return Array.isArray(j)?typeof j[0]=="boolean"?"bool":typeof j[0]=="string"?"string":Number.isInteger(j[0])?"int":"double":null});return y.map(C=>({...C,call:g+"("+(C.input||[]).map((k,j)=>Qp(k,c,b[j])).join(", ")+")",expectedLiteral:Qp(C.expected,c),expected:String(C.expected)}))}function lb(l,c,p=!0){const g=ac(l,"python")||ac(c.starter||"","python");if(!g)throw new Error("Define the challenge function before running it.");const y=c.challengeExamples||[];return["import json as __json, io as __io, contextlib as __ctx","__source = "+JSON.stringify(l),"__cases = __json.loads("+JSON.stringify(JSON.stringify(p?y:y.slice(0,1)))+")","__results = []","for __case in __cases:","    try:",'        __env = {"__name__":"student"}','        with __ctx.redirect_stdout(__io.StringIO()): exec(compile(__source,"main.py","exec"),__env)',"        __actual = __env["+JSON.stringify(g)+'](*__case["input"])','        __ok = type(__actual) is type(__case["expected"]) and __actual == __case["expected"]','        __results.append({"ok":__ok,"actual":repr(__actual)[:300],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","error":type(__error).__name__+": "+str(__error)[:300]})','print("PUBLIC_CHECK_RESULTS="+__json.dumps(__results))'].join(`
`)}function ub(l,c){const p=Zp(c,"java",l);if(!p.length)throw new Error("No visible examples are available.");const g=p.map((y,b)=>`try{Object actual=Solution.${y.call}; Object expected=${y.expectedLiteral}; boolean ok=java.util.Objects.deepEquals(actual,expected); String received=java.util.Arrays.deepToString(new Object[]{actual}); received=received.substring(1,received.length()-1); System.out.println("PLAYGROUND_CASE:${b}:"+(ok?"1":"0")+":"+received);}catch(Throwable error){System.out.println("PLAYGROUND_CASE:${b}:0:ERROR "+error.getClass().getSimpleName()+" "+error.getMessage());}`);return l+`
class __PlaygroundPracticeChecks {public static void main(String[] args) {`+g.join(`
`)+"}}"}function cb(l,c){const p=String(l||"").split(/\r?\n/).filter(g=>g.startsWith("PLAYGROUND_CASE:"));if(p.length!==c.length)throw new Error("Java did not return all published examples.");return c.map((g,y)=>{const b=p[y],S=/^PLAYGROUND_CASE:(\d+):([01]):([\s\S]*)$/.exec(b);if(!S||Number(S[1])!==y)throw Error("Java returned invalid check data.");return{call:g.call,expected:g.expected,received:S[3],passed:S[2]==="1",error:S[3].startsWith("ERROR ")?S[3]:""}})}function Lm({text:l="",checksText:c="",checkRows:p=null,points:g=null,language:y,activeTab:b,onTabChange:S,previewEnabled:C=!1,previewDoc:k="",previewRef:j}){const L=C?["Preview","Console","Checks"]:["Console","Checks"],H=Array.isArray(p),{passed:R,total:J}=rb(p),D=Number.isFinite(Number(g))&&g!==null&&J?Number(g)*R/J:null;return u.jsxs("section",{className:"console-pane","aria-label":"Workspace output",children:[u.jsxs("div",{className:"console-heading",children:[u.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Output views",children:L.map(Y=>u.jsxs("button",{type:"button",role:"tab","aria-selected":b===Y,className:b===Y?"active":"",onClick:()=>S(Y),children:[Y==="Console"&&u.jsx(Iy,{size:14}),Y]},Y))}),u.jsx("span",{children:"Practice · no submissions"})]}),["html","css","javascript","jsx"].includes(y)&&u.jsx("div",{className:"console-preview",hidden:!C||b!=="Preview",children:u.jsx("iframe",{ref:j,title:"Live student code preview",className:"live-preview-frame",sandbox:"allow-scripts allow-forms",srcDoc:k||"<p>Choose Run to preview your code.</p>"})}),b==="Checks"?u.jsx("div",{className:"practice-check-content",role:"tabpanel","aria-label":"Check feedback",children:H?u.jsxs(u.Fragment,{children:[u.jsxs("p",{className:"check-summary",children:["Checks ",u.jsxs("strong",{children:[R," of ",J," passing"]})]}),u.jsx("p",{className:"check-next",children:R===J?"All published practice checks passed.":"Revise your code, then check again."}),u.jsx("div",{className:"practice-check-cards",children:p.map((Y,X)=>u.jsxs("article",{className:"practice-check-card "+(Y.passed?"passed":"needs-revision"),children:[u.jsxs("header",{children:[u.jsx("code",{children:Y.call||"Example "+(X+1)}),u.jsx("span",{children:Y.passed?"Pass":"Review"})]}),u.jsxs("dl",{children:[u.jsx("dt",{children:"Expected"}),u.jsx("dd",{children:u.jsx("pre",{children:Y.expected??""})}),u.jsx("dt",{children:Y.error?"Error":"Received"}),u.jsx("dd",{children:u.jsx("pre",{children:Y.error||Y.received||"None"})})]})]},X))}),D!==null&&u.jsxs("p",{className:"check-practice-score",children:["Public-check score: ",Number(D.toFixed(2)),"/",g," practice points · ",R,"/",J," examples passed."]}),u.jsx("p",{className:"check-disclaimer",children:"Public examples only. These results do not award grades, completion, or earned points."})]}):u.jsx("pre",{className:"practice-check-message",children:c})}):b==="Console"?u.jsx("pre",{role:"tabpanel","aria-label":"Console output",children:l}):null]})}const db="PUBLIC_CHECK_RESULTS=";function pb(l,c){const p=Array.isArray(l==null?void 0:l.cases)?l.cases:[],g=JSON.stringify(String(c)),y=JSON.stringify(JSON.stringify(p));return["import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx","import traceback as __trace","__student = "+g,"__cases = __json.loads("+y+")","__results = []","for __example in __cases:","    __out = __io.StringIO()","    try:",'        __env = {"__name__": "__main__"}',"        with __ctx.redirect_stdout(__out), __ctx.redirect_stderr(__out):",'            exec(compile(__student, "main.py", "exec"), __env)',(l==null?void 0:l.mode)==="function"?'            __actual = eval(compile(__ast.parse(__example["call"], mode="eval"), "example", "eval"), __env)':'            __actual = __out.getvalue().rstrip("\\n")',(l==null?void 0:l.mode)==="function"?'        __expected = __ast.literal_eval(__example["expected"])':'        __expected = __example["expected"].rstrip("\\n")',(l==null?void 0:l.mode)==="function"?"        __ok = type(__actual) is type(__expected) and __actual == __expected":"        __ok = __actual == __expected",'        __results.append({"ok":__ok,"actual":str(__actual)[:240],"expected":str(__expected)[:240],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","expected":str(__example.get("expected",""))[:240],"error":type(__error).__name__+": "+str(__error)[:200]})','print("'+db+'"+__json.dumps(__results))'].join(`
`)+`
`}function hb(l,c){const p=String(c).split("(",1)[0].trim();return["import ast as __ast, io as __io, json as __json, contextlib as __ctx",'__env={"__name__":"student"}',"__stream=__io.StringIO()","with __ctx.redirect_stdout(__stream):","    exec(compile("+JSON.stringify(String(l))+',"main.py","exec"),__env)',"    __name="+JSON.stringify(p),'    if __name not in __env and callable(__env.get("solution")): __env[__name]=__env["solution"]',"    __value=eval(compile(__ast.parse("+JSON.stringify(String(c))+',mode="eval"),"sample call","eval"),__env)','print("PLAYGROUND_PREVIEW="+__json.dumps({"call":'+JSON.stringify(String(c))+',"returned":repr(__value)[:5000],"printed":__stream.getvalue()[:10000]}))'].join(`
`)}const fb="modulepreload",mb=function(l){return"/playground/integration/"+l},Kf={},Pm=function(c,p,g){let y=Promise.resolve();if(p&&p.length>0){let S=function(j){return Promise.all(j.map(L=>Promise.resolve(L).then(H=>({status:"fulfilled",value:H}),H=>({status:"rejected",reason:H}))))};document.getElementsByTagName("link");const C=document.querySelector("meta[property=csp-nonce]"),k=(C==null?void 0:C.nonce)||(C==null?void 0:C.getAttribute("nonce"));y=S(p.map(j=>{if(j=mb(j),j in Kf)return;Kf[j]=!0;const L=j.endsWith(".css"),H=L?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${j}"]${H}`))return;const R=document.createElement("link");if(R.rel=L?"stylesheet":fb,L||(R.as="script"),R.crossOrigin="",R.href=j,k&&R.setAttribute("nonce",k),document.head.appendChild(R),L)return new Promise((J,D)=>{R.addEventListener("load",J),R.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${j}`)))})}))}function b(S){const C=new Event("vite:preloadError",{cancelable:!0});if(C.payload=S,window.dispatchEvent(C),!C.defaultPrevented)throw S}return y.then(S=>{for(const C of S||[])C.status==="rejected"&&b(C.reason);return c().catch(b)})},Ps="/playground/";async function gb(l,c=()=>{}){if(l==="python"){const{PythonRunner:p}=await Pm(async()=>{const{PythonRunner:g}=await import("./pythonRunner-Camw9ZBH.js");return{PythonRunner:g}},[]);return{kind:"python",instance:new p({onStatus:c})}}if(l==="java"){const{JavaRunner:p}=await import(Ps+"java-runner.mjs");return{kind:"java",instance:new p(c)}}if(l==="csharp"){const[{CSharpRunner:p},g]=await Promise.all([import(Ps+"csharp-runner.mjs"),import(Ps+"csharp-protocol.mjs")]);return{kind:"csharp",instance:new p({onStatus:c}),protocol:g}}throw Error("No code compiler for "+l)}function yb(l){var c;return((c=/\b(?:public\s+)?(?:static\s+)?class\s+([A-Za-z_]\w*)/.exec(String(l||"")))==null?void 0:c[1])||""}const $f='<main class="event-card"><h1>Robotics meetup</h1><p>Thursday at 4 PM in the lab.</p><p>Attendees: <span id="count">0</span></p><button id="join">Join</button></main>',wd=l=>JSON.stringify(String(l)).replace(/</g,"\\u003c");function vb(l){return l==="html"?`(()=>{
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
  })();`}function xb(l,c,p){var S;const g=(c.challengeExamples||[]).slice(0,p?void 0:1);if(!g.length)throw Error("No public challenge examples were published.");const y=(S=/\b(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:S[1];if(!y)throw Error("Define and export the challenge function.");const b=String(l).replace(/\bexport\s+(?=(?:async\s+)?function|const|let|class)/g,"");return`(()=>{
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
  })();`}function bb(l){return"<script>"+l.replace(/<\/script/gi,"<\\/script")+"<\/script>"}async function kh({code:l,language:c,lessonId:p,task:g={},token:y,check:b=!0}){if(!y)throw Error("A preview token is required.");if(g.webFiles){const{assembleWebFiles:Y}=await Pm(async()=>{const{assembleWebFiles:le}=await Promise.resolve().then(()=>_b);return{assembleWebFiles:le}},[]),X=c==="jsx"?"App.jsx":"script.js";let M=null;c==="jsx"&&(typeof window.PlaygroundJSX!="function"&&await new Promise((le,ve)=>{const Me=document.createElement("script");Me.src=Ps+"vendor/learning/jsx.js",Me.onload=le,Me.onerror=()=>ve(Error("React JSX compiler could not load.")),document.head.append(Me)}),M=window.PlaygroundJSX(g.webFiles["App.jsx"]||""));const{html:F,linkedStyle:B,linkedScript:W}=Y(g.webFiles,{scriptName:X,scriptOverride:M});if(g.projectId){const{buildProjectPreview:le}=await import(Ps+"project-preview.mjs");return le(F,{token:y,step:g.stepId,projectId:g.projectId,check:b})}const G='<script src="'+Ps+'vendor/learning/react.js"><\/script>',ce=c==="jsx"?/<\/head\s*>/i.test(F)?F.replace(/<\/head\s*>/i,G+"</head>"):G+F:F;return kh({code:ce,language:"html",lessonId:p,task:{},token:y,check:b})}if(g.projectId){const{buildProjectPreview:Y}=await import(Ps+"project-preview.mjs");return Y(l,{token:y,step:g.stepId,projectId:g.projectId,check:b})}const{previewConsoleBridge:S}=await import(Ps+"console-drawer.mjs"),C=bb(S(y)),k=wd;let j="",L="",H="";if(g.isChallenge&&c==="javascript")j="<main><h2>JavaScript challenge</h2><p>See the Checks and Console tabs for actual function results.</p></main>",L=xb(l,g,b);else if(c==="html")j=String(l);else if(c==="css")j="<style>"+String(l).replace(/<\/style/gi,"")+"</style>"+$f;else if(c==="javascript")j=$f,L=l;else if(c==="jsx")j='<div id="root"></div>',typeof window.PlaygroundJSX!="function"&&await new Promise((Y,X)=>{const M=document.createElement("script");M.src=Ps+"vendor/learning/jsx.js",M.onload=Y,M.onerror=()=>X(Error("React JSX compiler could not load.")),document.head.append(M)}),L=window.PlaygroundJSX(l),H='<script src="'+Ps+'vendor/learning/react.js"><\/script>';else throw Error("Preview is not supported for "+c);const R=g.isChallenge&&c==="javascript"?"":vb(p),J=g.isChallenge&&c==="javascript"?"<script>try{"+L+';send("ready");}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>':"<script>try{(0,eval)("+k(L)+');setTimeout(()=>{send("ready");'+(b?R:"")+'},180)}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>',D='<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="form-action &apos;none&apos;"><style>body{font:16px/1.55 system-ui,sans-serif;padding:16px}button{padding:8px 15px}</style>'+C+H;if(c==="html"){const Y=String(j).replace(/^\s*<!doctype[^>]*>/i,"");return"<!doctype html>"+(/<head(?:\s[^>]*)?>/i.test(Y)?Y.replace(/<head(?:\s[^>]*)?>/i,M=>M+D):"<head>"+D+"</head>"+Y)+J}return"<!doctype html><html><head>"+D+"</head><body>"+j+J+"</body></html>"}function Am({lessonId:l,task:c}){const p=c.storageKey||wh.code(l),g=!!c.projectDraft,y=!!c.isChallenge,b=we.useRef(null),S=we.useRef(null),C=we.useRef(null),k=we.useRef(null),j=we.useRef(null),[L,H]=we.useState(!1),[R,J]=we.useState(c.starter||""),[D,Y]=we.useState(c.console||"Press Run to execute the code."),[X,M]=we.useState(""),[F,B]=we.useState("Choose Check to run the published examples. Your scores are not recorded."),[W,G]=we.useState(null),[ce,le]=we.useState(""),ve=["html","css","javascript","jsx"].includes(c.language),Me=ve&&!y,[ke,ae]=we.useState(Me?"Preview":"Console"),[Ce,V]=$n("designlab:editor-height",300);we.useEffect(()=>{J(Ad(p)??c.starter??""),Y(c.console||"Run to see your program output."),B("Choose Check to run the published examples. Your scores are not recorded."),G(null),ae(ve&&!y?"Preview":"Console"),le(""),M("")},[p,c.language,c.starter,c.console,ve,y]),we.useEffect(()=>()=>{var N;clearTimeout(j.current),k.current=null,(N=S.current)==null||N.instance.dispose(),S.current=null},[]),we.useEffect(()=>{function N(K){var _e;const I=k.current;if(!I||!C.current||K.source!==C.current.contentWindow||((_e=K.data)==null?void 0:_e.token)!==I.token)return;const ee=K.data;ee.kind==="log"&&Y(Ie=>(Ie==="Run to see your program output."?"":Ie)+"["+(ee.level||"log")+"] "+ee.text+`
`),ee.kind==="clear"&&Y(""),ee.kind==="error"&&(clearTimeout(j.current),Y(Ie=>Ie+"Error: "+ee.text+`
`),I.check&&B("Fix the runtime error, then try Check again."),k.current=null,H(!1),ae("Console")),(ee.kind==="checks"||ee.kind==="project-checks")&&(clearTimeout(j.current),G(Em(ee.results||(ee.text?[{label:ee.text,pass:ee.pass}]:[]))),k.current=null,H(!1),ae("Checks")),ee.kind==="ready"&&!I.check&&(clearTimeout(j.current),k.current=null,H(!1))}return window.addEventListener("message",N),()=>window.removeEventListener("message",N)},[]);function he(N){if(!b.current)return;const K=b.current.getBoundingClientRect();V(Math.max(160,Math.min(K.height-120,N.clientY-K.top)))}async function E(){var N;if(!S.current||S.current.language!==c.language){(N=S.current)==null||N.instance.dispose();const K=await gb(c.language,I=>Y(I));S.current={...K,language:c.language}}return S.current}async function Z(N){var ee,_e,Ie,qe,Oe,Se,Be,Ke,et,$e,Ft,Yt;const K=c.language;if(K==="java"&&c.environment==="ide")throw Error("This activity uses Java 26 file I/O and requires a full Java IDE. Browser execution is not supported for this exercise.");const I=await E();if(K==="python"){let Ct=R;if(y)Ct=lb(R,{...c,starter:c.starter},N);else if(N){if(!((ee=c.cases)!=null&&ee.length))throw Error("This lesson has no published examples.");Ct=pb(c,R)}else c.mode==="function"&&((Ie=(_e=c.cases)==null?void 0:_e[0])!=null&&Ie.call)&&(Ct=hb(R,c.cases[0].call));const xt=await I.instance.run(Ct);if(N){const tt=y?c.challengeExamples.map(Ue=>({call:(ob(R,"python")||"Function")+"("+Ue.input.map(vt=>JSON.stringify(vt)).join(", ")+")",expected:JSON.stringify(Ue.expected)})):c.cases;G(qf(xt.output,tt)),Y("Python completed the public checks. Review individual results in Checks.")}else if(y){const tt=qf(xt.output,[{call:"First published example",expected:JSON.stringify(c.challengeExamples[0].expected)}]);Y(tt[0].error||"First example returned "+tt[0].received+". Expected "+tt[0].expected+".")}else if(c.mode==="function"&&((Oe=(qe=c.cases)==null?void 0:qe[0])!=null&&Oe.call)){const tt=String(xt.output||"").split(`
`).find(Ue=>Ue.startsWith("PLAYGROUND_PREVIEW="));if(tt){const Ue=JSON.parse(tt.slice(19));Y(Ue.call+`
Returned: `+Ue.returned+(Ue.printed?`
Printed: `+Ue.printed:""))}else Y(xt.output||"No return value was captured. See your code and retry.")}else Y(xt.output||(xt.success?"Program finished with no printed output.":"The Python program stopped."))}if(K==="java"){if(c.environment==="ide")throw Error("This lesson uses Java 26 file input and must run in a full Java IDE. Browser execution is not supported.");if(y){const Ct=Zp(c,"java",R),xt=N?Ct:Ct.slice(0,1),tt=await I.instance.run(ub(R,{...c,challengeExamples:xt}),[]);if(!tt.success)throw Error([tt.stdout,tt.stderr,tt.diagnostics].filter(Boolean).join(`
`));const Ue=cb(tt.stdout,xt);N?G(Ue):Y(Ue.map(vt=>vt.call+`
Received: `+vt.received+`
Expected: `+vt.expected).join(`
`))}else{const Ct=N?c.cases||[]:[{args:c.runArgs||((Be=(Se=c.cases)==null?void 0:Se[0])==null?void 0:Be.args)||[]}];if(N&&!Ct.length)throw Error("No public Java examples are available for this exercise.");const xt=[];for(const tt of Ct){const Ue=await I.instance.run(R,tt.args||[]);if(xt.push(Ue),!Ue.success)break}if(N){const tt=ib(xt,Ct);if(xt.length!==Ct.length)throw Error("Java stopped before completing all published examples: "+(((Ke=xt.at(-1))==null?void 0:Ke.diagnostics)||((et=xt.at(-1))==null?void 0:et.stderr)||"Unknown error"));G(tt),Y("Java completed the published checks. Review the Checks tab.")}else Y([($e=xt[0])==null?void 0:$e.stdout,(Ft=xt[0])==null?void 0:Ft.stderr,(Yt=xt[0])==null?void 0:Yt.diagnostics].filter(Boolean).join(`
`)||"Java ran without printed output.")}}if(K==="csharp"){const Ct=I.protocol,xt=y?Zp(c,"csharp",R).map(oe=>({...oe,call:Array.isArray(oe.expected)?oe.call+".SequenceEqual("+oe.expectedLiteral+")":oe.call,arrayResult:Array.isArray(oe.expected),expected:Array.isArray(oe.expected)?"true":oe.expectedLiteral})):c.cases||[],tt=y?"Solution":yb(R),Ue=N||y&&xt.length>0;if(N&&!xt.length)throw Error("No public C# examples are available for this exercise.");if(Ue&&!tt)throw Error("The C# checker could not find the public class name.");const vt=N?xt:xt.slice(0,1),yt=Ue?Ct.buildChecks(vt,tt):null,Qe=yt&&vt.some(oe=>oe.arrayResult)?`using System.Linq;
`+yt:yt,ut=await I.instance.run(R,Qe);if(!ut.compiled||!ut.success)throw Error([ut.diagnostics,ut.stderr].filter(Boolean).join(`
`)||"C# could not execute.");if(Ue){const oe=sb(ut.stdout,vt,Ct.parseChecks);N?G(oe):Y(oe.map(je=>je.call+`
Received: `+je.received+`
Expected: `+je.expected).join(`
`))}else Y(ut.stdout||"C# executed without printed output.")}}async function Q(N){if(!L){H(!0),M(""),G(null),N?(B("Running published example checks…"),ae("Checks")):(Y("Preparing runner…"),ae(Me?"Preview":"Console"));try{if(ve){const K=crypto.randomUUID();k.current={token:K,check:N};const I=await kh({code:R,language:c.language,lessonId:l,task:c,token:K,check:N});le(I),Y(""),clearTimeout(j.current),j.current=setTimeout(()=>{var ee;((ee=k.current)==null?void 0:ee.token)===K&&(k.current=null,H(!1),Y("The preview did not finish within 7 seconds. Check for errors or an infinite loop."),B("Practice timed out. No result was recorded."),C.current&&(C.current.srcdoc="<p>Preview stopped after timeout.</p>"),ae("Console"))},7e3)}else await Z(N),H(!1)}catch(K){clearTimeout(j.current),k.current=null,H(!1);const I=String((K==null?void 0:K.message)||K);Y(I),ae("Console"),N&&B("Check unavailable: "+I)}}}function A(N){if(!L){if(N==="Run"||N==="Check"){Q(N==="Check");return}if(N==="Save"){ha(p,R),M("Draft saved in this browser only.");return}N==="Reset"&&(J(c.starter||""),ha(p,c.starter||""),G(null),le(""),B("Choose Check to run published examples again."),Y("Starter code restored. No points were recorded."),ae(Me?"Preview":"Console"))}}return u.jsxs("div",{className:"code-pane",children:[u.jsxs("div",{className:"pane-header",children:[u.jsxs("strong",{children:[u.jsx(Dd,{size:16})," Editor"]}),u.jsxs("div",{className:"right-meta",children:[c.language.toUpperCase()," ",u.jsx(Rs,{children:"Live practice"})]})]}),u.jsxs("div",{className:"code-workspace",ref:b,style:{"--editor-height":Ce+"px"},children:[u.jsx(Nm,{value:R,language:c.language,onChange:N=>{J(N),(g||y)&&ha(p,N),M(""),G(null),B("Code changed. Choose Check to run fresh examples.")}}),u.jsx(dc,{axis:"rows",onDrag:he}),u.jsx(Lm,{text:D,checksText:F,checkRows:W,points:c.points,language:c.language,lessonId:l,previewEnabled:Me,previewDoc:ce,previewRef:C,activeTab:ke,onTabChange:ae})]}),u.jsxs("div",{className:"editor-controls",children:[u.jsxs("div",{children:[["Run","Check","Reset"].map(N=>u.jsx("button",{type:"button",className:"btn",disabled:L,onClick:()=>A(N),children:N},N)),L&&u.jsx("button",{type:"button",className:"btn",onClick:()=>{var N,K,I;(I=(N=S.current)==null?void 0:(K=N.instance).stop)==null||I.call(K),k.current=null,clearTimeout(j.current),H(!1),Y("Execution stopped.")},children:"Stop"})]}),u.jsxs("div",{children:[u.jsxs("button",{type:"button",className:"btn",disabled:L,onClick:()=>A("Save"),children:[u.jsx(Td,{size:15})," Save"]}),u.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submission and official grading are not connected in this preview",children:[u.jsx(oh,{size:15})," Submit (not enabled)"]})]})]}),u.jsx("div",{className:"editor-note",role:"status",children:X||"Run executes code locally; Check tests public examples only. No grades, points or hand-ins are recorded."})]})}const Sh=Object.freeze(["index.html","styles.css","script.js"]),_h=Object.freeze(["index.html","styles.css","App.jsx"]),Rm=l=>l==="jsx"?_h:Sh,eh=`<!doctype html>
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
</html>`,wb=`<!doctype html>
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
</html>`;function Im(l){return l.endsWith(".html")?"html":l.endsWith(".css")?"css":l.endsWith(".jsx")?"jsx":"javascript"}function th(l,c=""){const p=String(c).toLowerCase();return l==="jsx"||p==="react"?"App.jsx":l==="css"||/css|style|readable|responsive/.test(p)?"styles.css":l==="javascript"||/\bjs\b|javascript|script|function|array|object|dom|event|state|team|matchup|pick|scor|leaderboard|test|integrat|interact/.test(p)?"script.js":"index.html"}function kb(l,c="script.js"){if(!l.trim())return"";let p=l;if(!/<link\b[^>]*href\s*=\s*["']styles\.css["'][^>]*>/i.test(p)){const g=`  <link rel="stylesheet" href="styles.css">
`;p=/<\/head\s*>/i.test(p)?p.replace(/<\/head\s*>/i,g+"</head>"):g+p}if(!p.includes('src="'+c+'"')&&!p.includes("src='"+c+"'")){const g='  <script src="'+c+`" defer><\/script>
`;p=/<\/body\s*>/i.test(p)?p.replace(/<\/body\s*>/i,g+"</body>"):p+`
`+g}return p}function oc(l){let c=String(l??"");const p=[],g=[];return c=c.replace(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi,(y,b)=>(p.push(b.trim().replace(/^(?: {4}|\t)/gm,"")),"")),c=c.replace(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi,(y,b,S)=>/\bsrc\s*=/.test(b)||/\btype\s*=\s*["'](?:application\/json|application\/ld\+json|importmap)["']/i.test(b)?y:(g.push(S.trim().replace(/^(?: {4}|\t)/gm,"")),"")),{"index.html":kb(c.replace(/\n{3,}/g,`

`).trim(),"script.js"),"styles.css":p.join(`

`),"script.js":g.join(`

`)}}function Om(l,c){const p=String(c??"");if(l==="jsx")return{"index.html":wb,"styles.css":"","App.jsx":p};if(l==="html")return oc(p);if(l==="css")return{"index.html":eh,"styles.css":p,"script.js":""};if(l==="javascript")return{"index.html":eh,"styles.css":"","script.js":p};throw Error("Not a web lesson: "+l)}const Mm=l=>oc(l);function Jo(l,c){if(![...Sh,..._h].includes(c))throw Error("Unknown workspace file");return l+":file:"+c}function Dm({base:l,starters:c,legacy:p,read:g,write:y}){const b=Object.keys(c),S=Object.fromEntries(b.map(L=>[L,g(Jo(l,L))]));if(b.some(L=>S[L]!==null&&S[L]!==void 0))return Object.fromEntries(b.map(L=>[L,S[L]??c[L]??""]));const k=p!=null?c["App.jsx"]!==void 0?{...c,"App.jsx":p}:Object.prototype.hasOwnProperty.call(c,"index.html")&&(c["styles.css"]||c["script.js"])&&/<html|<style|<script/i.test(p)||c["index.html"]!==void 0&&/<html|<!doctype|<body/i.test(p)?oc(p):{...c,[c["index.html"]===eh?c["script.js"]?"script.js":"styles.css":"index.html"]:p}:c,j=Object.fromEntries(b.map(L=>[L,k[L]??c[L]??""]));return b.forEach(L=>y(Jo(l,L),j[L])),j}function Gf(l,c){return String(l??"").replace(new RegExp("</"+c,"gi"),"<\\/"+c)}function Sb(l,{scriptName:c="script.js",scriptOverride:p=null}={}){let g=String((l==null?void 0:l["index.html"])??"");const y=String((l==null?void 0:l["styles.css"])??""),b=String(p===null?(l==null?void 0:l[c])??"":p);let S=!1,C=!1;if(g=g.replace(/<link\b[^>]*>/gi,k=>/\bhref\s*=\s*["'](?:\.\/)?styles\.css["']/i.test(k)&&/\brel\s*=\s*["']stylesheet["']/i.test(k)?(S=!0,'<style data-web-file="styles.css">'+Gf(y,"style")+"</style>"):k),g=g.replace(/<script\b([^>]*)>\s*<\/script\s*>/gi,(k,j)=>{const L=/\bsrc\s*=\s*["']([^"']+)["']/i.exec(j);return L&&L[1].replace(/^\.\//,"")===c?(C=!0,""):k}),C){const k='<script data-web-file="'+c+'">'+Gf(b,"script")+"<\/script>";g=/<\/body\s*>/i.test(g)?g.replace(/<\/body\s*>/i,k+`
</body>`):g+`
`+k}return{html:g,linkedStyle:S,linkedScript:C}}const _b=Object.freeze(Object.defineProperty({__proto__:null,REACT_FILE_NAMES:_h,WEB_FILE_NAMES:Sh,assembleWebFiles:Sb,fileLanguage:Im,fileNamesFor:Rm,initialFocus:th,lessonStarterFiles:Om,loadWebDrafts:Dm,projectStarterFiles:Mm,splitEmbeddedWebSource:oc,webDraftKey:Jo},Symbol.toStringTag,{value:"Module"}));function zm({lessonId:l,task:c}){const p=wh.code(l),g=Rm(c.language),y=c.starterFiles||(c.projectDraft?Mm(c.starter):Om(c.language,c.starter)),[b,S]=we.useState(()=>Dm({base:p,starters:y,legacy:Ad(p),read:Ad,write:ha})),[C,k]=we.useState(()=>th(c.language,c.focus)),[j,L]=we.useState("Run to render all your linked files together."),[H,R]=we.useState("Check runs the current published practice requirements."),[J,D]=we.useState(null),[Y,X]=we.useState(""),[M,F]=we.useState("Preview"),[B,W]=we.useState(""),[G,ce]=we.useState(!1),[le,ve]=$n("designlab:web-files-editor-height",310),Me=we.useRef(null),ke=we.useRef(null),ae=we.useRef(null),Ce=we.useRef(null);we.useEffect(()=>{const I=th(c.language,c.focus);k(g.includes(I)?I:"index.html")},[c.stepId,c.focus,c.language]),we.useEffect(()=>{const I=ee=>{var qe;const _e=ke.current;if(!_e||!Me.current||ee.source!==Me.current.contentWindow||((qe=ee.data)==null?void 0:qe.token)!==_e.token)return;const Ie=ee.data;Ie.kind==="log"&&L(Oe=>Oe+(Ie.level==="error"?"Error: ":"")+Ie.text+`
`),Ie.kind==="clear"&&L(""),Ie.kind==="error"&&(clearTimeout(ae.current),ke.current=null,L(Oe=>Oe+"Error: "+Ie.text+`
`),R("Fix the error reported in Console before checking again."),F("Console"),ce(!1)),(Ie.kind==="checks"||Ie.kind==="project-checks")&&(clearTimeout(ae.current),ke.current=null,D(Em(Ie.results||(Ie.text?[{label:Ie.text,pass:Ie.pass}]:[]))),F("Checks"),ce(!1)),Ie.kind==="ready"&&!_e.check&&(clearTimeout(ae.current),ke.current=null,ce(!1))};return window.addEventListener("message",I),()=>{clearTimeout(ae.current),ke.current=null,window.removeEventListener("message",I)}},[]);function V(I){S(ee=>({...ee,[C]:I})),ha(Jo(p,C),I),W(""),D(null),R("Code changed. Check again to update the results.")}function he(){g.forEach(I=>ha(Jo(p,I),b[I]??"")),W("All three files saved in this browser only.")}function E(){window.confirm("Restore all three starter files? Your current saved changes will be replaced.")&&(S({...y}),g.forEach(I=>ha(Jo(p,I),y[I]??"")),D(null),X(""),L("Starter files restored."),R("Run Check to evaluate the restored files."),F("Preview"),W("Starter files restored for this lesson or project."))}function Z(){const I=b[C]||"",ee=document.createElement("a"),_e=URL.createObjectURL(new Blob([I],{type:"text/plain;charset=utf-8"}));ee.href=_e,ee.download=C,document.body.append(ee),ee.click(),ee.remove(),setTimeout(()=>URL.revokeObjectURL(_e),2e3)}function Q(){clearTimeout(ae.current),ke.current=null,ce(!1),X("<p>Preview stopped.</p>"),L("Preview stopped. Check your script for an endless loop."),F("Console")}async function A(I){var ee;if(!G){ce(!0),D(null),W(""),L(""),R(I?"Checking the published requirements…":"Run Check to review the published requirements."),F(I?"Checks":"Preview");try{N();const _e=crypto.randomUUID();ke.current={token:_e,check:I};const Ie=await kh({language:c.language,code:b[C]||"",lessonId:c.lessonFocus||l,task:{...c,webFiles:b},token:_e,check:I});if(((ee=ke.current)==null?void 0:ee.token)!==_e)return;X(Ie),clearTimeout(ae.current),ae.current=setTimeout(()=>{var qe;((qe=ke.current)==null?void 0:qe.token)===_e&&(Q(),R("The preview timed out. No result was recorded."))},7e3)}catch(_e){clearTimeout(ae.current),ke.current=null,ce(!1),L(String((_e==null?void 0:_e.message)||_e)),R("Checks unavailable: "+String((_e==null?void 0:_e.message)||_e)),F("Console")}}}function N(){g.forEach(I=>ha(Jo(p,I),b[I]||""))}function K(I){if(!Ce.current)return;const ee=Ce.current.getBoundingClientRect();ve(Math.max(160,Math.min(ee.height-120,I.clientY-ee.top)))}return u.jsxs("div",{className:"code-pane web-files-pane",children:[u.jsxs("div",{className:"pane-header",children:[u.jsxs("strong",{children:[u.jsx(Dd,{size:16})," Project files"]}),u.jsxs("span",{className:"web-file-badge",children:["HTML + CSS + ",c.language==="jsx"?"React":"JavaScript"]})]}),u.jsx("div",{className:"web-file-tabs",role:"tablist","aria-label":"Source files",children:g.map(I=>u.jsx("button",{type:"button",role:"tab","aria-selected":I===C,className:I===C?"active":"",onClick:()=>k(I),children:I},I))}),u.jsxs("div",{className:"code-workspace",ref:Ce,style:{"--editor-height":le+"px"},children:[u.jsx(Nm,{value:b[C]??"",language:Im(C),onChange:V},C),u.jsx(dc,{axis:"rows",onDrag:K}),u.jsx(Lm,{text:j,checksText:H,checkRows:J,points:null,language:"html",previewEnabled:!0,previewDoc:Y,previewRef:Me,activeTab:M,onTabChange:F})]}),u.jsxs("div",{className:"editor-controls",children:[u.jsxs("div",{children:[u.jsx("button",{type:"button",className:"btn",disabled:G,onClick:()=>A(!1),children:"Run"}),u.jsx("button",{type:"button",className:"btn",disabled:G,onClick:()=>A(!0),children:"Check"}),u.jsx("button",{type:"button",className:"btn",disabled:G,onClick:E,children:"Reset"}),G&&u.jsx("button",{type:"button",className:"btn",onClick:Q,children:"Stop"})]}),u.jsxs("div",{children:[u.jsxs("button",{type:"button",className:"btn",disabled:G,onClick:Z,children:[u.jsx(xy,{size:15})," Download file"]}),u.jsxs("button",{type:"button",className:"btn",disabled:G,onClick:he,children:[u.jsx(Td,{size:15})," Save"]}),u.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submissions and grading are not connected",children:[u.jsx(oh,{size:15})," Submit (not enabled)"]})]})]}),u.jsx("div",{className:"editor-note",role:"status",children:B||"Edit one file at a time. The HTML link to styles.css and script tag for script.js (or App.jsx) connect the files. Drafts save locally; practice checks award no points."})]})}function Cb({lessonId:l,onAnswerChecked:c}){const p=dh[l],[g,y]=we.useState(null),[b,S]=we.useState(!1);function C(){S(!0),c==null||c({selected:g,correct:g===p.correct})}function k(){y(null),S(!1),c==null||c(null)}return u.jsxs("section",{className:"tsi-practice","aria-label":"Math question",children:[u.jsxs("div",{className:"tsi-practice-heading",children:[u.jsx(im,{size:20}),u.jsxs("div",{children:[u.jsx("h2",{children:"Try this question"}),u.jsx("p",{children:"Choose an answer, then review the explanation on the right."})]})]}),u.jsxs("div",{className:"tsi-question-card",children:[u.jsx("div",{className:"eyebrow",children:"Question"}),u.jsx("h3",{children:p.prompt}),u.jsx("div",{className:"tsi-answers",role:"radiogroup","aria-label":"Choose the correct answer",children:p.options.map((j,L)=>u.jsxs("label",{className:`tsi-choice ${g===L?"selected":""} ${b&&L===p.correct?"correct":""}`,children:[u.jsx("input",{type:"radio",name:`tsi-${l}`,checked:g===L,disabled:b,onChange:()=>y(L)}),u.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+L)}),u.jsx("span",{children:j})]},j))}),b&&u.jsx("p",{className:"tsi-answer-status",role:"status",children:g===p.correct?"Correct! Read why on the right.":"Not quite. Review the explanation on the right."}),u.jsxs("div",{className:"tsi-buttons",children:[u.jsx("button",{className:"btn primary",disabled:g===null||b,onClick:C,children:"Check answer"}),u.jsxs("button",{className:"btn",onClick:k,children:[u.jsx(Fd,{size:15})," Try again"]})]})]})]})}function Tb(l){const c=String(l||""),p=c.indexOf("## Learn"),g=c.indexOf("## Practice"),y=c.indexOf("## Reflect");if(p<0||g<p)return{learn:"",reflect:"",questions:[]};const b=c.slice(p,g).trim(),S=c.slice(g,y>g?y:void 0),C=y>g?c.slice(y).trim():"",k=[...S.matchAll(/###\s+(\d+)\.\s+([^\n]+)\n([\s\S]*?)(?=\n###\s+\d+\.|$)/g)].map(j=>({number:Number(j[1]),prompt:j[2].trim(),options:[...j[3].matchAll(/-\s+\*\*([A-D])\.\*\*\s+([^\n]+)/g)].map(L=>({letter:L[1],text:L[2].trim()}))}));return{learn:b,reflect:C,questions:k}}function jb({task:l}){var L;const c=we.useMemo(()=>Tb(l.markdownSource),[l.markdownSource]),p=((L=l.tsiKey)==null?void 0:L.items)||[],[g,y]=we.useState({}),[b,S]=we.useState(!1),C=c.questions.filter(H=>{var R;return g[H.number]===((R=p.find(J=>J.question===H.number))==null?void 0:R.correct)}).length,k=c.questions.length===4&&c.questions.every(H=>H.options.length===4),j=k&&p.length===4&&Object.keys(g).length===4;return k?u.jsxs("div",{className:"tsi-strand-workspace",children:[u.jsxs("section",{className:"surface-card tsi-strand-questions","aria-label":"TSI math questions",children:[u.jsxs("div",{className:"tsi-strand-panel-heading",children:[u.jsx("span",{className:"eyebrow",children:"Practice"}),u.jsx("h2",{children:"Questions"}),u.jsx("p",{children:"Solve each problem, then check your answers against the explanations on the right."})]}),u.jsxs("form",{onSubmit:H=>{H.preventDefault(),j&&S(!0)},children:[c.questions.map(H=>{var J;const R=(J=p.find(D=>D.question===H.number))==null?void 0:J.correct;return u.jsxs("fieldset",{className:"tsi-strand-question",disabled:b,children:[u.jsxs("legend",{children:[u.jsx("span",{className:"tsi-strand-question-number",children:H.number})," ",H.prompt]}),u.jsx("div",{className:"tsi-strand-options",children:H.options.map(D=>u.jsxs("label",{className:["tsi-strand-option",g[H.number]===D.letter?"selected":"",b&&R===D.letter?"correct":""].filter(Boolean).join(" "),children:[u.jsx("input",{type:"radio",name:l.id+"-q"+H.number,value:D.letter,checked:g[H.number]===D.letter,onChange:()=>{y(Y=>({...Y,[H.number]:D.letter})),S(!1)}}),u.jsx("span",{className:"tsi-strand-letter",children:D.letter}),u.jsx("span",{children:D.text})]},D.letter))}),b&&u.jsx("p",{className:"tsi-strand-question-status",role:"status",children:g[H.number]===R?"Correct":"Review question "+H.number+" on the right"})]},H.number)}),u.jsxs("div",{className:"tsi-strand-actions",children:[u.jsx("button",{type:"submit",className:"btn primary",disabled:!j||b,children:"Check answers"}),u.jsxs("button",{type:"button",className:"btn",onClick:()=>{y({}),S(!1)},children:[u.jsx(Fd,{size:15})," Try again"]})]}),u.jsx("p",{className:"tsi-strand-progress",role:"status",children:b?C+" of 4 correct · instructional practice only":Object.keys(g).length+" of 4 answered"})]})]}),u.jsxs("section",{className:"surface-card tsi-strand-explanations","aria-label":"Math explanations",children:[u.jsxs("div",{className:"tsi-strand-panel-heading",children:[u.jsx("span",{className:"eyebrow",children:"Learn"}),u.jsxs("h2",{children:[u.jsx(el,{size:20,"aria-hidden":"true"})," Worked explanations"]})]}),u.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Zo(c.learn)}}),u.jsxs("div",{className:"tsi-strand-review","aria-live":"polite",children:[u.jsx("h3",{children:b?u.jsxs(u.Fragment,{children:[u.jsx(sc,{size:18})," Answer explanations"]}):"Review your answers"}),b?c.questions.map(H=>{const R=p.find(J=>J.question===H.number);return u.jsxs("article",{className:"tsi-strand-answer",children:[u.jsxs("h4",{children:["Question ",H.number," · ",g[H.number]===(R==null?void 0:R.correct)?"Correct":"Needs review"]}),u.jsxs("p",{children:["Your choice: ",g[H.number]," · Correct: ",R==null?void 0:R.correct]}),u.jsx("p",{children:(R==null?void 0:R.explanation)||"A worked explanation is not yet available."})]},H.number)}):u.jsxs("p",{children:["Complete all four questions and choose ",u.jsx("strong",{children:"Check answers"})," to see the explanations for each."]})]}),c.reflect&&u.jsx("div",{className:"tsi-strand-reflect markdown-preview",dangerouslySetInnerHTML:{__html:Zo(c.reflect)}})]}),u.jsx("p",{className:"tsi-strand-disclaimer",children:"Draft TSI instructional practice · 30 minutes · Not an official TSIA2 assessment. Answers in this React preview are not submitted or graded."})]}):u.jsxs("section",{className:"surface-card tsi-strand-error",role:"alert",children:[u.jsx("h2",{children:"Practice questions unavailable"}),u.jsx("p",{children:"This draft lesson's multiple-choice questions could not be loaded. No sample questions were substituted."})]})}const kd=[["quantitative","Quantitative Reasoning"],["algebraic","Algebraic Reasoning"],["geometry","Geometric and Spatial Reasoning"],["statistics","Probabilistic and Statistical Reasoning"]];function Nb(l){const c=l.answer,p=Number.isInteger(c)?Math.max(1,Math.round(Math.abs(c)*.15)):Math.max(.125,Math.round(Math.abs(c)*.2*1e3)/1e3),g=[c+p,c-p,c+2*p].map(y=>Number(y.toFixed(4)));return g.splice(l.correct_index??0,0,c),g}function Eb(l,c){return Object.fromEntries(kd.map(([p])=>{const g=l.filter(b=>b.strand===p),y=g.filter(b=>c[b.id]!=="skip"&&Number(c[b.id])===b.answer).length;return[p,{correct:y,total:g.length,level:y===g.length?"Advanced":y>=Math.ceil(g.length*.6)?"Proficient":"Basic"}]}))}function Lb({items:l=[],profiles:c=[]}){var X,M,F;const[p,g]=we.useState({}),[y,b]=we.useState(""),[S,C]=we.useState(""),[k,j]=$n("designlab:tsi-math-placement",{}),[L,H]=we.useState(null),R=we.useMemo(()=>kd.map(([B,W])=>({id:B,title:W,items:l.filter(G=>G.strand===B)})),[l]),J=L||((X=k.diagnostic)==null?void 0:X.latest)&&k.diagnostic.latest.placement;function D(B){B.preventDefault();const W=c.find(G=>G.code===y.trim().toUpperCase());if(!W){C("Enter a valid MATH01–MATH81 study code.");return}j(G=>({...G,code:W.code,levels:W.levels})),C("Study code applied in this browser. It does not enroll you in a class.")}function Y(B){if(B.preventDefault(),l.some(le=>p[le.id]===void 0)){C("Answer or select Not sure for every question.");return}const W=Eb(l,p),G=Object.fromEntries(Object.entries(W).map(([le,ve])=>[le,ve.level])),ce={at:new Date().toISOString(),placement:W,levels:G,answers:p};j(le=>{var ve;return{...le,levels:G,diagnostic:{first:((ve=le.diagnostic)==null?void 0:ve.first)||ce,latest:ce}}}),H(W),C("Your recommended starting levels are ready. Results are stored in this browser only.")}return u.jsxs("div",{className:"published-reading surface-card tsi-diagnostic",children:[u.jsx("h2",{children:"Find your starting point"}),u.jsx("p",{children:"This is the existing 24-question, four-strand practice diagnostic. It suggests what to study; it does not predict an official TSIA2 score or assign an enrolled class."}),u.jsxs("form",{onSubmit:D,className:"tsi-code-entry",children:[u.jsx("label",{htmlFor:"math-locator-code",children:"Pearson study code (MATH01–MATH81)"}),u.jsx("input",{id:"math-locator-code",type:"text",placeholder:"MATH01",maxLength:6,value:y,onChange:B=>b(B.target.value)}),u.jsx("button",{className:"btn",type:"submit",children:"Apply code"})]}),!!k.code&&u.jsxs("p",{role:"status",children:["Current code: ",u.jsx("strong",{children:k.code}),"."," ","Recommended levels: ",kd.map(([B,W])=>{var G;return W+": "+((G=k.levels)==null?void 0:G[B])}).join(" · ")]}),u.jsxs("form",{onSubmit:Y,children:[u.jsx("h3",{children:"Take the diagnostic"}),u.jsxs("p",{children:["Choose one answer or Not sure for all ",l.length," questions. This open practice records your first and latest attempts in this browser, not the live gradebook."]}),R.map((B,W)=>u.jsxs("section",{className:"tsi-diagnostic-strand surface-card",children:[u.jsxs("div",{className:"tsi-strand-panel-heading",children:[u.jsxs("span",{className:"eyebrow",children:["Strand ",W+1," of ",R.length]}),u.jsx("h3",{children:B.title}),u.jsxs("p",{children:[B.items.length," questions · Choose an answer or Not sure for each question."]})]}),B.items.map((G,ce)=>u.jsxs("fieldset",{className:"tsi-strand-question",children:[u.jsxs("legend",{children:[u.jsx("span",{className:"tsi-strand-question-number",children:ce+1})," ",G.prompt]}),u.jsxs("div",{className:"tsi-strand-options",children:[Nb(G).map((le,ve)=>u.jsxs("label",{className:"tsi-strand-option "+(p[G.id]===String(le)?"selected":""),children:[u.jsx("input",{type:"radio",name:G.id,value:le,checked:p[G.id]===String(le),onChange:()=>g(Me=>({...Me,[G.id]:String(le)}))}),u.jsx("span",{className:"tsi-strand-letter",children:String.fromCharCode(65+ve)}),u.jsx("span",{children:le})]},ve)),u.jsxs("label",{className:"tsi-strand-option tsi-diagnostic-unsure "+(p[G.id]==="skip"?"selected":""),children:[u.jsx("input",{type:"radio",name:G.id,value:"skip",checked:p[G.id]==="skip",onChange:()=>g(le=>({...le,[G.id]:"skip"}))}),u.jsx("span",{className:"tsi-strand-letter",children:"?"}),u.jsx("span",{children:"Not sure"})]})]})]},G.id))]},B.id)),u.jsx("button",{type:"submit",className:"btn primary",children:"Get my recommended levels"})]}),!!S&&u.jsx("p",{role:"status",children:S}),J&&u.jsxs("section",{className:"tsi-diagnostic-results","aria-label":"Diagnostic results",children:[u.jsx("h3",{children:"Recommended starting levels"}),kd.map(([B,W])=>u.jsxs("p",{children:[u.jsxs("strong",{children:[W,": ",J[B].level]})," (",J[B].correct," of ",J[B].total," correct)"]},B)),u.jsx("p",{children:"This diagnostic is instructional, not a verified measure of college readiness. All published lessons remain available regardless of recommendation."}),!!((M=k.diagnostic)!=null&&M.first)&&!!((F=k.diagnostic)!=null&&F.latest)&&u.jsxs("p",{children:["First attempt: ",new Date(k.diagnostic.first.at).toLocaleDateString()," · Latest: ",new Date(k.diagnostic.latest.at).toLocaleDateString()]})]})]})}function Pb({lessonId:l,course:c,unit:p,unitNumber:g,isCompleted:y=!1,assignment:b=null,grade:S=null,onToggleCompleted:C,readOnlyMode:k=!1}){var M;const j=eo(c,l),L=we.useRef(null),[H,R]=we.useState(null),[J,D]=$n("designlab:left-width",420);function Y(F){if(!L.current)return;const B=L.current.getBoundingClientRect();D(Math.max(260,Math.min(B.width-340,F.clientX-B.left)))}const X=c.id==="tsi-math";return X&&l==="tsi-20d-d01"&&((M=c.diagnosticItems)!=null&&M.length)?u.jsxs("div",{className:"lesson-screen",children:[u.jsxs("header",{className:"lesson-header",children:[u.jsx("div",{className:"eyebrow",children:"Day 1 · TSI Math Advisory"}),u.jsx("h1",{children:j.title}),u.jsx("p",{children:"Diagnostic placement · 30-minute advisory plan"})]}),u.jsx(Lb,{items:c.diagnosticItems,profiles:c.locatorProfiles})]}):j!=null&&j.ready?X&&j.tsiStrandDraft?u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Yu,{task:j,unit:p,unitNumber:g,isTsi:!0,isCompleted:y,assignment:b,grade:S,onToggleCompleted:C,readOnlyMode:k}),u.jsx(jb,{task:j})]}):j.language==="text"&&!X?u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Yu,{task:j,unit:p,unitNumber:g,isTsi:!1,isCompleted:y,assignment:b,grade:S,onToggleCompleted:C,readOnlyMode:k}),u.jsxs("section",{className:"surface-card published-reading",children:[u.jsx("p",{className:"muted",children:"Published written-practice material. Answer checking and verified scores remain on the current Playground."}),u.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Zo(j.markdownSource)}})]})]}):X&&!dh[l]?u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Yu,{task:j,unit:p,unitNumber:g,isTsi:!0,isCompleted:y,assignment:b,grade:S,onToggleCompleted:C,readOnlyMode:k}),u.jsxs("section",{className:"surface-card published-reading",children:[u.jsx("p",{className:"muted",children:"Published draft lesson · practice shown for learning, not an official TSIA2 score predictor."}),u.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Zo(j.markdownSource)}})]})]}):u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Yu,{task:j,unit:p,unitNumber:g,isTsi:X,isCompleted:y,assignment:b,grade:S,onToggleCompleted:C,readOnlyMode:k}),u.jsxs("div",{className:`workspace-grid ${X?"tsi-workspace":""}`,ref:L,style:{"--left-pane":`${J}px`},children:[X?u.jsx(Cb,{lessonId:l,onAnswerChecked:R}):u.jsx(wf,{lessonId:l,task:j}),u.jsx(dc,{axis:"columns",onDrag:Y}),X?u.jsx(wf,{lessonId:l,task:j,isTsi:!0,tsiAnswer:H}):c.id==="mobile-app-dev"&&["html","css","javascript","jsx"].includes(j.language)?u.jsx(zm,{lessonId:l,task:{...j,lessonFocus:l}},l):u.jsx(Am,{lessonId:l,task:j})]})]}):u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Yu,{task:j,unit:p,unitNumber:g,isTsi:X,isCompleted:y,assignment:b,grade:S,onToggleCompleted:C,readOnlyMode:k}),u.jsxs("section",{className:"lesson-content-pending surface-card",children:[u.jsx("h2",{children:"Lesson coming soon"}),u.jsx("p",{children:"This scheduled lesson has not been authored yet. No practice or scores are available."})]})]})}function Ab({course:l,project:c,stepId:p,openProject:g}){const y=c.steps||[],b=Math.max(0,y.findIndex(J=>J.id===p)),S=y[b],C=we.useRef(null),[k,j]=$n("designlab:project-left-width",430),L="project:"+l.id+":"+c.id,H={id:L,title:c.title,language:c.language||"html",starter:c.starter||"",starterFiles:c.starterFiles||null,challenge:c.summary||"",console:"Run to see your actual page. Check tests the published step requirements in a sandboxed browser preview.",projectDraft:!0,isPublished:!1,projectId:c.id,stepId:S.id,focus:S.focus};function R(J){if(!C.current)return;const D=C.current.getBoundingClientRect();j(Math.max(260,Math.min(D.width-340,J.clientX-D.left)))}return u.jsxs("div",{className:"lesson-screen project-workspace",children:[u.jsxs("header",{className:"lesson-header",children:[u.jsxs("div",{className:"eyebrow",children:["Published guided project · ",y.length," steps"]}),u.jsx("h1",{children:c.title}),u.jsx("p",{children:c.summary}),u.jsx("p",{className:"muted",children:"Run renders your actual project and Check tests the current step. Drafts save in this browser; Submit and verified grading remain disabled."})]}),u.jsx("nav",{className:"project-step-list","aria-label":"Project steps",children:y.map((J,D)=>u.jsxs("button",{type:"button","aria-current":D===b?"step":void 0,className:D===b?"btn primary":"btn",onClick:()=>g(l.id,c.id,J.id),children:[D+1,". ",J.title]},J.id))}),u.jsxs("div",{className:"workspace-grid",ref:C,style:{"--left-pane":k+"px"},children:[u.jsxs("section",{className:"instructions-pane project-reading",children:[u.jsx("div",{className:"pane-header",children:u.jsxs("strong",{children:["Step ",b+1,": ",S.title]})}),u.jsxs("p",{className:"web-files-reading-note",children:["This published walkthrough was originally written for one HTML file. When it says to add a <style> or <script> block, put that code in",u.jsx("code",{children:"styles.css"})," or ",u.jsx("code",{children:"script.js"})," instead. Keep the file links in",u.jsx("code",{children:"index.html"}),"; Run connects them automatically."]}),u.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Zo(S.markdownSource)}})]}),u.jsx(dc,{axis:"columns",onDrag:R}),u.jsx(zm,{lessonId:L,task:H})]}),u.jsxs("nav",{className:"lesson-next-bar","aria-label":"Project step navigation",children:[b>0&&u.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>g(l.id,c.id,y[b-1].id),children:[u.jsx(Md,{size:16})," ",u.jsxs("span",{children:["Prev: ",y[b-1].title]})]}),b<y.length-1&&u.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>g(l.id,c.id,y[b+1].id),children:[u.jsxs("span",{children:["Next: ",y[b+1].title]})," ",u.jsx(pi,{size:16})]})]})]})}function Rb({courseId:l,lessonId:c,projectId:p,projectStepId:g,availableCourses:y=ns,openCourse:b,openProject:S,openChallenges:C,completedLessons:k=[],assignments:j=[],grades:L=[],onToggleLessonComplete:H,courseColors:R={},onSetCourseColor:J,onResetCourseColor:D,readOnlyMode:Y=!1}){const X=y.find(ce=>ce.id===l)||y[0];if(X.id==="test-prep")return u.jsx($y,{lessonId:c,openCourse:b,completedLessons:k,onToggleLessonComplete:H});const M=(X.projects||[]).find(ce=>ce.id===p),F=rc(X),B=X.units.findIndex(ce=>rs(ce).includes(c)),W=X.units[B],G=F.indexOf(c);return u.jsx("div",{className:"course-layout integrated-course","data-course":X.id,children:u.jsxs("div",{className:"course-main",children:[u.jsxs("div",{className:"course-breadcrumb",children:[u.jsx("button",{onClick:()=>b(null),children:"All playgrounds"}),u.jsx(pi,{size:14}),c||M?u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:()=>b(X.id),children:X.label}),u.jsx(pi,{size:14}),u.jsx("span",{className:"breadcrumb-unit-name",title:W?As(W):"",children:W?As(W):(M==null?void 0:M.title)||""})]}):u.jsx("span",{children:X.label})]}),M?u.jsx(Ab,{course:X,project:M,stepId:g,openProject:S},M.id):c?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"lesson-mobile-navigation",children:[u.jsx("label",{htmlFor:"lesson-select",children:"Lesson"}),u.jsx("select",{id:"lesson-select",value:c,onChange:ce=>b(X.id,ce.target.value),children:X.units.map((ce,le)=>u.jsx("optgroup",{label:`Unit ${le+1} · ${As(ce)}`,children:rs(ce).map(ve=>u.jsx("option",{value:ve,children:to(X,ve)},ve))},ce.id))})]}),u.jsx(Pb,{lessonId:c,course:X,unit:W,unitNumber:B+1,isCompleted:k.includes(c),assignment:j.find(ce=>ce.id==="lesson:"+c),grade:L.find(ce=>ce.id==="lesson:"+c),onToggleCompleted:()=>H==null?void 0:H(c),readOnlyMode:Y},c),u.jsxs("nav",{className:"lesson-next-bar","aria-label":"Lesson sequence",children:[G>0&&u.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>b(X.id,F[G-1]),children:[u.jsx(Md,{size:16,"aria-hidden":"true"}),u.jsxs("span",{children:["Prev: ",to(X,F[G-1])]})]}),G>=0&&G<F.length-1&&u.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>b(X.id,F[G+1]),children:[u.jsxs("span",{children:["Next: ",to(X,F[G+1])]}),u.jsx(pi,{size:16,"aria-hidden":"true"})]})]})]}):u.jsx(qy,{course:X,openCourse:b,openProject:S,openChallenges:C,completedLessons:k,assignments:j,grades:L,courseColors:R,onSetCourseColor:J,onResetCourseColor:D,readOnlyMode:Y})]})})}const Xo=[{id:"p1",period:"1",name:"Period 1",course:"computer-science-1"},{id:"p3",period:"3",name:"Period 3",course:"computer-science-1"},{id:"p5",period:"5",name:"Period 5",course:"mobile-app-dev"},{id:"p6",period:"6",name:"Period 6",course:"game-programming"},{id:"p7",period:"7",name:"Period 7",course:"mobile-app-dev"},{id:"p8",period:"8",name:"Period 8",course:"computer-science-1"}],Ib=l=>Xo.find(c=>c.id===l),Fm=l=>{var c;return(c=Ib(l))==null?void 0:c.period},Ob=[...new Set(Xo.map(l=>l.period))].sort((l,c)=>Number(l)-Number(c)),Ch=l=>{var c,p;return((c=l.sheetName)==null?void 0:c.trim())||((p=l.studentName)==null?void 0:p.trim())||l.github},Yf=l=>(l.sheetName||l.studentName||"").trim().split(/\s+/),Mb=(l,c,p)=>{const g=y=>p==="github"?y.github.toLowerCase():p==="first"?(Yf(y)[0]||y.github).toLowerCase():(Yf(y).at(-1)||y.github).toLowerCase();return g(l).localeCompare(g(c),void 0,{numeric:!0})||l.github.localeCompare(c.github)},Db=[["last","Last name"],["first","First name"],["github","GitHub username"]];function zb({sectionId:l,onSectionChange:c,setupOpen:p,onToggleSetup:g,sections:y=Xo,readOnlyMode:b=!1}){return u.jsxs("div",{className:"teacher-toolbar",children:[u.jsxs("label",{children:["Class section",u.jsx("select",{value:l,onChange:S=>c(S.target.value),children:y.map(S=>u.jsxs("option",{value:S.id,children:[S.name," · ",zg(S.course)]},S.id))})]}),!b&&u.jsxs("button",{type:"button",className:"btn section-setup-toggle","aria-expanded":p,"aria-controls":"teacher-section-setup",onClick:g,children:[p?u.jsx(Wd,{size:16}):u.jsx(lh,{size:16}),p?"Close section setup":"Section setup"]})]})}const Fb=[["overview","Class overview",ah],["curriculum","Curriculum",el],["journals","Journals",sh]];function Wb({tab:l,onChange:c}){return u.jsx("div",{className:"tabs teacher-tabs",role:"tablist","aria-label":"Teacher dashboard tabs",children:Fb.map(([p,g,y])=>u.jsxs("button",{type:"button",role:"tab","aria-selected":l===p,className:l===p?"active":"",onClick:()=>c(p),children:[u.jsx(y,{size:16}),g]},p))})}function Hb({label:l,value:c,onChange:p}){return u.jsxs("label",{children:[l,u.jsx("select",{value:c,onChange:g=>p(g.target.value),children:Db.map(([g,y])=>u.jsx("option",{value:g,children:y},g))})]})}function Wm(l,c){return l+"::"+c}function Bb(l,c=[]){if(!(l!=null&&l.sectionId)||!l.lessonId)return"Choose a section and lesson.";if(l.sectionCourseId&&l.sectionCourseId!=="computer-science-1")return"This section uses a different course. Only Computer Science I is connected.";if(!/^\d{4}-\d{2}-\d{2}$/.test(l.dueDate||""))return"Choose a valid due date.";const[p,g,y]=l.dueDate.split("-").map(Number);if(new Date(Date.UTC(p,g-1,y)).toISOString().slice(0,10)!==l.dueDate)return"Choose a valid due date.";const S=Number(l.points);if(!Number.isFinite(S)||!Number.isInteger(S)||S<0||S>1e3)return"Points must be a whole number between 0 and 1,000.";if(l.scope!=="section"&&l.scope!=="selected")return"Choose who receives the assignment.";if(l.scope==="selected"){const C=new Set(c.map(j=>j.id)),k=[...new Set(l.studentIds||[])];if(!k.length||k.some(j=>!C.has(j)))return"Select at least one student from this section."}return null}function Ub(l,c=[]){const p=Bb(l,c);if(p)throw new Error(p);return{id:Wm(l.sectionId,l.lessonId),sectionId:l.sectionId,courseId:"computer-science-1",lessonId:l.lessonId,scope:l.scope,studentIds:l.scope==="selected"?[...new Set(l.studentIds)].sort():[],dueDate:l.dueDate,points:Number(l.points)}}function qb(l,c){return[...(Array.isArray(l)?l:[]).filter(p=>p.id!==c.id),c]}function qp(l,c,p){return(l||[]).find(g=>g.id===Wm(c,p))||null}const Kb="/playground/data/computer-science-1/course.json",ec=hi("computer-science-1");function $b({section:l,students:c=[],assignments:p=[],setAssignments:g,readOnlyMode:y=!1}){const[b,S]=we.useState(null),[C,k]=we.useState("loading"),[j,L]=we.useState(ec.lessons[0]),[H,R]=we.useState("section"),[J,D]=we.useState([]),[Y,X]=we.useState(""),[M,F]=we.useState(""),[B,W]=we.useState("starter"),[G,ce]=we.useState("");we.useEffect(()=>{const A=new AbortController;return fetch(Kb,{signal:A.signal,cache:"no-store"}).then(N=>{if(!N.ok)throw new Error("Curriculum unavailable");return N.json()}).then(N=>{if(!Array.isArray(N.lessons)||!N.lessons.length)throw new Error("Unexpected curriculum response");S(Gl(N)),k("live")}).catch(N=>{N.name!=="AbortError"&&k("snapshot")}),()=>A.abort()},[]);const le=we.useMemo(()=>b?{...ec,...b}:ec,[b]),ve=le.lessons,Me=ve.includes(j)?j:ve[0],ke=eo(le,Me),ae=ve.reduce((A,N)=>{var K;return A+(Number((K=eo(le,N))==null?void 0:K.points)||0)},0),Ce=ec.lessons.includes(Me),V=(l==null?void 0:l.course)==="computer-science-1",he=qp(p,l==null?void 0:l.id,Me),E=c.filter(A=>A.sections.includes(l==null?void 0:l.id));we.useEffect(()=>{var N;const A=qp(p,l==null?void 0:l.id,Me);R((A==null?void 0:A.scope)||"section"),D((A==null?void 0:A.studentIds)||[]),X((A==null?void 0:A.dueDate)||""),F(String((A==null?void 0:A.points)??((N=eo(le,Me))==null?void 0:N.points)??0)),ce(""),W("starter")},[Me,l==null?void 0:l.id]);function Z(A){A.preventDefault();try{const N=Ub({sectionId:l==null?void 0:l.id,sectionCourseId:l==null?void 0:l.course,lessonId:Me,scope:H,studentIds:J,dueDate:Y,points:M},E);if(y)throw Error("Assignment changes are disabled in this integration test.");g==null||g(K=>qb(K,N)),ce("Preview assignment saved in this browser. No students were notified.")}catch(N){ce(N.message)}}function Q(){if(y){ce("Assignment changes are disabled in this integration test.");return}g==null||g(A=>(A||[]).filter(N=>N.id!==(he==null?void 0:he.id))),ce("Preview assignment cleared. Live student records were not changed.")}return u.jsxs("section",{className:"panel curriculum-panel","aria-label":"Published curriculum",children:[u.jsxs("div",{className:"section-heading",children:[u.jsxs("div",{children:[u.jsxs("h2",{children:[u.jsx(el,{size:18})," Computer Science I curriculum"]}),u.jsxs("p",{children:[le.units.length," original units · ",ve.length," lessons · ",ae," available lesson points"]})]}),u.jsx("span",{className:"curriculum-source",role:"status",children:C==="live"?"Published course • current":C==="loading"?"Checking published course…":"Bundled preview snapshot"})]}),u.jsx("p",{className:"curriculum-explanation",children:"Lesson titles, published points, starter code, and unit order come from the real CS1 catalog. Assignment controls below are a browser-only preview and do not affect live students."}),u.jsxs("div",{className:"curriculum-grid",children:[u.jsx("div",{className:"curriculum-units","aria-label":"Unit and lesson list",children:le.units.map((A,N)=>u.jsxs("details",{open:rs(A).includes(Me)||N===0,children:[u.jsxs("summary",{children:["Unit ",uc(A,N+1)," · ",As(A)]}),u.jsx("div",{children:rs(A).map(K=>u.jsxs("button",{type:"button",className:K===Me?"curriculum-lesson selected":"curriculum-lesson","aria-current":K===Me?"true":void 0,onClick:()=>L(K),children:[to(le,K),qp(p,l==null?void 0:l.id,K)&&u.jsx("small",{children:" · Assigned in preview"})]},K))})]},A.id))}),u.jsxs("article",{className:"curriculum-lesson-preview",children:[u.jsx("div",{className:"eyebrow",children:"Published lesson"}),u.jsx("h3",{children:ke.title}),u.jsx("p",{children:ke.summary||ke.challenge||"Practice the skills from this unit."}),u.jsxs("div",{className:"curriculum-meta",children:[u.jsxs("span",{children:[ke.points??0," published points"]}),u.jsxs("span",{children:[ke.mode==="function"?"Function":"Script"," · Python"]})]}),u.jsxs("div",{className:"curriculum-code-tabs",role:"tablist","aria-label":"Lesson code",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":B==="starter",className:B==="starter"?"active":"",onClick:()=>W("starter"),children:"Starter code"}),u.jsxs("button",{type:"button",role:"tab","aria-selected":B==="solution",className:B==="solution"?"active":"",onClick:()=>W("solution"),children:[u.jsx(ef,{size:14})," Solution"]})]}),B==="starter"?u.jsx("pre",{className:"curriculum-code",children:u.jsx("code",{children:ke.starter||"# No starter code provided"})}):u.jsxs("div",{className:"curriculum-solution-locked",role:"status",children:[u.jsx(ef,{size:20}),u.jsxs("div",{children:[u.jsx("strong",{children:"Teacher-only solutions"}),u.jsx("p",{children:"Solutions must be loaded from protected storage after teacher sign-in and authorization. Answer keys are not included in the public React preview."})]})]}),Ce?u.jsxs("a",{className:"btn",href:Od(ec,Me),children:["Open lesson in React preview ",u.jsx(sm,{size:14})]}):u.jsx("p",{className:"muted",children:"This newer published lesson is not yet in the React snapshot."}),u.jsxs("div",{className:"curriculum-assignment-editor",children:[u.jsx("h4",{children:"Assign lesson"}),V?u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"curriculum-assignment-warning",children:y?"Read-only integration: assignments cannot be saved or changed.":"Preview only. Assignments are saved in this browser, not sent to students or the live gradebook."}),u.jsx("form",{onSubmit:Z,className:"curriculum-assignment-form",children:u.jsxs("fieldset",{disabled:y,style:{border:0,padding:0,margin:0,minWidth:0},children:[u.jsxs("label",{children:["Assign to",u.jsxs("select",{value:H,onChange:A=>R(A.target.value),children:[u.jsxs("option",{value:"section",children:["Whole class · ",E.length," students"]}),u.jsx("option",{value:"selected",children:"Selected students"})]})]}),H==="selected"&&u.jsxs("fieldset",{className:"curriculum-recipient-picker",children:[u.jsx("legend",{children:"Choose students"}),E.length?E.map(A=>u.jsxs("label",{children:[u.jsx("input",{type:"checkbox",checked:J.includes(A.id),onChange:N=>D(K=>N.target.checked?[...K,A.id]:K.filter(I=>I!==A.id))}),u.jsx("span",{children:Ch(A)})]},A.id)):u.jsx("p",{children:"No students are enrolled in this section."})]}),u.jsxs("div",{className:"curriculum-assignment-fields",children:[u.jsxs("label",{children:["Due date",u.jsx("input",{type:"date",required:!0,value:Y,onChange:A=>X(A.target.value)})]}),u.jsxs("label",{children:["Points",u.jsx("input",{type:"number",required:!0,min:"0",max:"1000",step:"1",value:M,onChange:A=>F(A.target.value)})]})]}),u.jsxs("div",{className:"curriculum-assignment-actions",children:[u.jsx("button",{type:"submit",className:"btn primary",children:he?"Update preview assignment":"Save preview assignment"}),he&&u.jsx("button",{type:"button",className:"btn",onClick:Q,children:"Remove assignment"})]})]})}),he&&u.jsxs("p",{className:"curriculum-current-assignment",children:["Saved for ",he.scope==="section"?"whole class":he.studentIds.length+" selected students"," · ","Due ",he.dueDate," · ",he.points," points"]}),G&&u.jsx("p",{className:"curriculum-assignment-feedback",role:"status",children:G})]}):u.jsxs("p",{className:"curriculum-assignment-warning",children:[(l==null?void 0:l.name)||"This section"," uses a different course. Choose a Computer Science I section to assign CS1 lessons."]})]})]})]})]})}const Gb="/playground/integration/teacher-bridge.js";function Yb(){const l=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date).filter(p=>p.type!=="literal").map(p=>[p.type,p.value])),c=new Date(l.year+"-"+l.month+"-"+l.day+"T12:00:00Z");return c.setUTCDate(c.getUTCDate()-(c.getUTCDay()+6)%7),c.toISOString().slice(0,10)}function Vb(){var Ce;const[l,c]=we.useState(null),[p,g]=we.useState("loading"),[y,b]=we.useState(""),[S,C]=we.useState("overview"),[k,j]=we.useState(null),[L,H]=we.useState(null),[R,J]=we.useState(Yb),[D,Y]=we.useState(null),[X,M]=we.useState(null),[F,B]=we.useState("");we.useEffect(()=>{let V=!0;return import(Gb).then(he=>he.teacherReadOnlyClient()).then(he=>{var E;V&&(c(he),g(he.status),he.status==="ready"&&b(((E=he.classes[0])==null?void 0:E.id)||""))}).catch(()=>{V&&g("unavailable")}),()=>{V=!1}},[]),we.useEffect(()=>{if(!y||(l==null?void 0:l.status)!=="ready")return;let V=!0;return j(null),H(null),Y(null),M(null),B(""),Promise.all([l.rpc("playground_teacher_snapshot",{p_class:y}),l.rpc("playground_teacher_weekly_points",{p_class:y})]).then(([he,E])=>{V&&(j(he),H(E))}).catch(()=>{V&&B("Could not load this section. No records were changed.")}),()=>{V=!1}},[y,l]),we.useEffect(()=>{if(!D||!y||!l)return;let V=!0;return M(null),l.rpc("playground_teacher_student_history",{p_class:y,p_student:D}).then(he=>{V&&M(he)}).catch(()=>{V&&M({error:"Student history unavailable"})}),()=>{V=!1}},[D,y,l]);const W=(Ce=l==null?void 0:l.classes)==null?void 0:Ce.find(V=>V.id===y),G=((k==null?void 0:k.roster)||[]).filter(V=>V.status==="approved"),ce=((k==null?void 0:k.roster)||[]).filter(V=>V.status==="pending"),le=[...new Set([R,...((L==null?void 0:L.weeks)||[]).map(V=>V.week_start)])].sort().reverse(),ve=new Map(((L==null?void 0:L.weeks)||[]).filter(V=>V.week_start===R).map(V=>[V.user_id,V])),Me=new Map(((k==null?void 0:k.checks)||[]).map(V=>[V.user_id,V])),ke=G.map(V=>({id:V.user_id,first:(V.display_name||V.github_account||"Student").split(" ")[0],last:(V.display_name||"").split(" ").slice(1).join(" "),github:V.github_account||"",sections:[y]})),ae=W?{id:W.id,name:W.name,course:W.course_id}:null;return u.jsxs("div",{className:"main-content teacher-screen",children:[u.jsx(ch,{eyebrow:"Your classroom · Connected integration",actions:u.jsx(Rs,{children:"Authorized teacher · Read only"}),children:"Teacher dashboard"}),u.jsx("p",{className:"page-subtitle",children:"The original React dashboard layout, connected to your existing authorized class data. No student records can be changed here."}),p==="loading"?u.jsx("p",{role:"status",children:"Checking your teacher session…"}):p==="signed-out"?u.jsxs("p",{children:["Sign in through the ",u.jsx("a",{href:"/playground/",children:"current Playground"}),", then return here."]}):p==="forbidden"?u.jsx("p",{role:"alert",children:"This account does not have teacher access."}):p!=="ready"?u.jsx("p",{role:"alert",children:"Teacher data is unavailable."}):u.jsxs(u.Fragment,{children:[u.jsx(zb,{sectionId:y,sections:l.classes.map(V=>({id:V.id,name:V.name,course:V.course_id})),onSectionChange:V=>{b(V),Y(null)},readOnlyMode:!0}),u.jsx(Wb,{tab:S,onChange:V=>{C(V),Y(null)}}),F?u.jsx("p",{role:"alert",children:F}):!k||!L?u.jsx("p",{role:"status",children:"Loading section information…"}):u.jsxs(u.Fragment,{children:[S==="overview"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"section-banner",children:[u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Selected section"}),u.jsxs("h2",{children:[W==null?void 0:W.name," ",u.jsxs("span",{className:"muted",children:["· ",W==null?void 0:W.course_id]})]})]}),u.jsx(Rs,{children:"Verified data"})]}),u.jsxs("div",{className:"stat-grid",children:[u.jsxs("div",{className:"stat-card",children:[u.jsx("strong",{children:G.length}),u.jsx("span",{children:"Enrolled students"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("strong",{children:ce.length}),u.jsx("span",{children:"Pending enrollment requests"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("strong",{children:G.reduce((V,he)=>{var E;return V+(Number((E=ve.get(he.user_id))==null?void 0:E.points)||0)},0)}),u.jsx("span",{children:"Verified weekly points"})]})]}),u.jsxs("section",{className:"panel",children:[u.jsxs("div",{className:"section-heading",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"Weekly points"}),u.jsx("p",{children:"Server-verified improvements · Monday–Sunday in Central Time"})]}),u.jsxs("label",{children:["Week ",u.jsx("select",{value:R,onChange:V=>J(V.target.value),children:le.map(V=>u.jsx("option",{value:V,children:V},V))})]})]}),u.jsx("div",{className:"overflow",children:u.jsxs("table",{className:"data-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Student"}),u.jsx("th",{children:"Weekly points"}),u.jsx("th",{children:"Improved assignments"})]})}),u.jsx("tbody",{children:G.map(V=>{var he,E;return u.jsxs("tr",{children:[u.jsx("th",{children:V.display_name||V.github_account||"Student"}),u.jsx("td",{children:u.jsx("strong",{children:Number((he=ve.get(V.user_id))==null?void 0:he.points)||0})}),u.jsx("td",{children:Number((E=ve.get(V.user_id))==null?void 0:E.assignments)||0})]},V.user_id)})})]})})]}),u.jsxs("section",{className:"panel",children:[u.jsx("div",{className:"section-heading",children:u.jsxs("div",{children:[u.jsx("h2",{children:"Section roster & activity"}),u.jsx("p",{children:"Select a student to expand verified submission history."})]})}),u.jsx("div",{className:"overflow",children:u.jsxs("table",{className:"data-table roster-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Student"}),u.jsx("th",{children:"Activity signal"}),u.jsx("th",{children:"Current activity"}),u.jsx("th",{children:"Practice"}),u.jsx("th",{children:"Hand-ins"})]})}),u.jsx("tbody",{children:G.map(V=>u.jsx(Jb,{row:V,expanded:D,setExpanded:Y,history:X,checks:Me},V.user_id))})]})})]})]}),S==="curriculum"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"section-banner",children:[u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Selected section"}),u.jsx("h2",{children:W==null?void 0:W.name})]}),u.jsx(Rs,{children:"Assignment changes disabled"})]}),(ae==null?void 0:ae.course)==="computer-science-1"?u.jsx($b,{section:ae,students:ke,assignments:[],readOnlyMode:!0}):u.jsxs("section",{className:"panel",children:[u.jsxs("h2",{children:[u.jsx(el,{size:18})," Curriculum"]}),u.jsx("p",{children:"Course-specific assignments will be connected after authorization and content verification."})]})]}),S==="journals"&&u.jsxs("section",{className:"panel",children:[u.jsx("div",{className:"section-heading",children:u.jsxs("h2",{children:[u.jsx(sh,{size:18})," Weekly journal submissions"]})}),u.jsx("p",{children:"Journal access will be connected to authorized section records. No fictional student submissions are shown."})]})]})]})]})}function Jb({row:l,expanded:c,setExpanded:p,history:g,checks:y}){var S;const b=c===l.user_id;return u.jsxs(u.Fragment,{children:[u.jsxs("tr",{className:b?"selected-row":"",children:[u.jsxs("th",{children:[u.jsxs("button",{className:"student-name-button","aria-expanded":b,onClick:()=>p(b?null:l.user_id),children:[b?"⌄":"›"," ",l.display_name||l.github_account||"Student"]}),u.jsxs("small",{children:["@",l.github_account||"—"]})]}),u.jsx("td",{children:u.jsx(Rs,{children:"Not connected"})}),u.jsx("td",{children:"—"}),u.jsxs("td",{children:[Number((S=y.get(l.user_id))==null?void 0:S.checks)||0," checks"]}),u.jsx("td",{children:"View history"})]}),b&&u.jsx("tr",{className:"expansion-row",children:u.jsx("td",{colSpan:"5",children:g?g.error?u.jsx("p",{role:"alert",children:g.error}):u.jsxs("div",{children:[u.jsx("strong",{children:"Submission history"}),u.jsx("div",{className:"overflow",children:u.jsxs("table",{className:"data-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Activity"}),u.jsx("th",{children:"Submitted"}),u.jsx("th",{children:"Verified grade"})]})}),u.jsx("tbody",{children:(g.submissions||[]).map(C=>u.jsxs("tr",{children:[u.jsx("td",{children:C.activity_id}),u.jsx("td",{children:new Date(C.submitted_at).toLocaleString()}),u.jsx("td",{children:C.grade_status==="graded"?C.points+" / "+C.possible:"Not graded"})]},C.id))})]})})]}):u.jsx("p",{children:"Loading verified history…"})})})]})}function Xb({children:l}){return u.jsx("div",{className:"empty",children:l})}function Qb({student:l,isEditing:c,onToggleEdit:p,onDone:g,onPatch:y}){const b=Ch(l);return u.jsxs("article",{className:"account-card",children:[u.jsxs("div",{className:"account-row",children:[u.jsx("span",{className:"avatar",children:b.slice(0,1).toUpperCase()}),u.jsxs("div",{className:"account-identity",children:[u.jsx("h3",{children:b}),u.jsxs("small",{children:["@",l.github]})]}),u.jsx("button",{className:"icon-button","aria-label":`Edit ${b}`,onClick:p,children:c?u.jsx(Wd,{size:17}):u.jsx(lh,{size:17})})]}),u.jsxs("div",{className:"account-footer",children:[u.jsx(Rs,{tone:l.sheetName?"success":"",children:l.sheetName?"Sheet matched":"Student name fallback"}),l.sections.map(S=>u.jsxs(Rs,{children:["Period ",Fm(S)]},S))]}),c&&u.jsxs("div",{className:"account-edit",children:[u.jsxs("label",{children:["Google Sheet name",u.jsx("input",{value:l.sheetName||"",onChange:S=>y({sheetName:S.target.value||null})})]}),u.jsxs("label",{children:["Student-provided backup",u.jsx("input",{value:l.studentName||"",onChange:S=>y({studentName:S.target.value})})]}),u.jsx("button",{className:"btn",onClick:g,children:"Done"})]})]})}function Zb({students:l,sort:c,setSort:p,patchStudent:g}){const[y,b]=$n("designlab:period-filter","all"),[S,C]=we.useState(""),[k,j]=we.useState(null),L=we.useMemo(()=>{const H=S.toLowerCase();return l.filter(R=>(y==="all"||R.sections.some(J=>Fm(J)===y))&&[Ch(R),R.github,R.studentName].some(J=>J.toLowerCase().includes(H))).sort((R,J)=>Mb(R,J,c))},[l,y,c,S]);return u.jsxs("section",{className:"panel",children:[u.jsxs("div",{className:"section-heading",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"Accounts"}),u.jsx("p",{children:"Google Sheet name first, student-entered name second, then GitHub name."})]}),u.jsxs(Rs,{children:[L.length," accounts"]})]}),u.jsxs("div",{className:"filters",children:[u.jsxs("label",{children:[u.jsx(am,{size:16})," ",u.jsx("input",{"aria-label":"Search accounts",value:S,placeholder:"Search name or GitHub username",onChange:H=>C(H.target.value)})]}),u.jsxs("label",{children:["Class period",u.jsxs("select",{value:y,onChange:H=>b(H.target.value),children:[u.jsx("option",{value:"all",children:"All periods"}),Ob.map(H=>u.jsx("option",{children:H},H))]})]}),u.jsx(Hb,{label:"Sort",value:c,onChange:p})]}),u.jsx("p",{className:"info-text",children:"Change a sample Sheet name to test precedence and fallback behavior. These edits are saved only in browser storage."}),u.jsx("div",{className:"account-grid",children:L.map(H=>u.jsx(Qb,{student:H,isEditing:k===H.id,onToggleEdit:()=>j(k===H.id?null:H.id),onDone:()=>j(null),onPatch:R=>g(H.id,R)},H.id))}),!L.length&&u.jsx(Xb,{children:"No accounts match those filters."})]})}function e0({students:l,setStudents:c}){const[p,g]=$n("designlab:admin-sort","last"),[y,b]=we.useState(""),S=(C,k)=>c(j=>j.map(L=>L.id===C?{...L,...k}:L));return u.jsxs("div",{className:"main-content teacher-screen admin-screen",children:[u.jsx(ch,{eyebrow:"Global management · Frontend preview",actions:u.jsx(Rs,{children:"Sample accounts only"}),children:"Admin dashboard"}),u.jsxs("p",{className:"page-subtitle",children:[u.jsx(uh,{size:16,"aria-hidden":"true"})," Account management is separate from class-specific teacher tools. This demo has no real accounts or admin permissions attached."]}),u.jsxs("div",{className:"admin-actions",children:[u.jsxs("button",{type:"button",className:"btn",onClick:()=>{c(Sd),b("Fictional account records restored.")},children:[u.jsx(Fd,{size:15})," Reset sample accounts"]}),y&&u.jsx("small",{role:"status",children:y})]}),u.jsx(Zb,{students:l,sort:p,setSort:g,patchStudent:S})]})}const t0={essay:"Think about a time you solved a difficult problem. Explain what you tried first, how you changed your approach, and what you learned. Use specific evidence.","logic-puzzle":"A robot follows this pattern: 2, 6, 12, 20, 30, __. Find the next number. Explain the pattern and show why your answer fits."},Vf={response:"",type:"essay",aiUse:"",aiDetails:""};function n0({submissions:l,setSubmissions:c}){var ke;const[p,g]=$n("designlab:journal-section",Xo[0].id),y=Xo.find(ae=>ae.id===p)||Xo[0],b=Sd.filter(ae=>ae.sections.includes(y.id)),[S,C]=$n("designlab:journal-student",Sd[0].id),k=b.find(ae=>ae.id===S)||b[0],j=we.useMemo(()=>bg(),[]),[L,H]=$n("designlab:journal-week",j[0]),R=j.includes(L)?L:j[0],[J,D]=$n("designlab:journal-drafts",{}),[Y,X]=we.useState(""),[M,F]=we.useState(!1),B=wg(y.id,k.id,R),W=J[B]||Vf,G=l.filter(ae=>ae.studentId===k.id&&ae.sectionId===y.id&&ae.week===R),ce=G.at(-1),le=W.response.trim()?W.response.trim().split(/\s+/).length:0;function ve(ae,Ce){D(V=>({...V,[B]:{...V[B]||Vf,[ae]:Ce}})),X("Draft saved in this browser.")}function Me(ae){ae.preventDefault();const Ce=kg(W);if(Ce){X(Ce);return}const V={id:`demo-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,sectionId:y.id,studentId:k.id,studentName:`${k.first} ${k.last}`,courseId:y.course,week:R,response:W.response.trim(),type:W.type,aiUse:W.aiUse,aiDetails:W.aiDetails.trim(),submittedAt:new Date().toISOString()};c(he=>[...he,V]),X("Demo submission saved locally. Check the Teacher dashboard → Journals tab to review it.")}return u.jsxs("div",{className:"main-content journal-screen",children:[u.jsx("div",{className:"eyebrow",children:"Your classes · Written work"}),u.jsxs("header",{className:"journal-heading",children:[u.jsxs("div",{children:[u.jsx("h1",{children:"Weekly Journals"}),u.jsx("p",{children:"Essay responses, reflections, and logic puzzles—all in one place."})]}),u.jsxs("span",{className:"chip",children:[u.jsx(uh,{size:14})," Local demo only"]})]}),u.jsxs("section",{className:"journal-card journal-selection","aria-label":"Select a journal",children:[u.jsxs("label",{children:["Class section",u.jsx("select",{value:y.id,onChange:ae=>{g(ae.target.value),X("")},children:Xo.map(ae=>{var Ce;return u.jsxs("option",{value:ae.id,children:[ae.name," · ",(Ce=hi(ae.course))==null?void 0:Ce.label]},ae.id)})})]}),u.jsxs("label",{children:["Preview as student",u.jsx("select",{value:k.id,onChange:ae=>{C(ae.target.value),X("")},children:b.map(ae=>u.jsxs("option",{value:ae.id,children:[ae.first," ",ae.last," (sample)"]},ae.id))})]}),u.jsxs("label",{children:["Journal week",u.jsx("select",{value:R,onChange:ae=>{H(ae.target.value),X("")},children:j.map(ae=>u.jsxs("option",{value:ae,children:["Week of ",nc(ae)]},ae))})]})]}),u.jsxs("section",{className:"journal-card journal-editor-card",children:[u.jsxs("div",{className:"journal-section-heading",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"eyebrow",children:[(ke=hi(y.course))==null?void 0:ke.label," · ",y.name]}),u.jsxs("h2",{children:["Journal · Week of ",nc(R)]})]}),u.jsx("span",{className:`journal-status-pill ${ce?"submitted":""}`,children:ce?"Submitted":"Not submitted"})]}),u.jsx("p",{className:"journal-instructions",children:"This is a fictional prompt for design testing. In production, your teacher would publish the weekly assignment."}),u.jsxs("form",{onSubmit:Me,children:[u.jsxs("label",{children:["Response type",u.jsxs("select",{value:W.type,onChange:ae=>ve("type",ae.target.value),children:[u.jsx("option",{value:"essay",children:"Essay or written reflection"}),u.jsx("option",{value:"logic-puzzle",children:"Logic puzzle or reasoning task"})]})]}),u.jsxs("div",{className:"journal-prompt",children:[u.jsx("strong",{children:"Sample prompt"}),u.jsx("p",{children:t0[W.type]})]}),u.jsx("label",{htmlFor:"journal-answer",children:"Your response"}),u.jsx("textarea",{id:"journal-answer",rows:"13",maxLength:"100000",spellCheck:!0,placeholder:"Write your explanation here. Show steps and reasoning for logic puzzles.",value:W.response,onChange:ae=>ve("response",ae.target.value)}),u.jsxs("div",{className:"journal-writing-meta",children:[u.jsxs("span",{children:[le," words"]}),u.jsxs("span",{children:[u.jsx(Td,{size:13})," Autosaved in this browser"]})]}),u.jsxs("div",{className:"journal-integrity",children:[u.jsxs("label",{children:["AI-use declaration",u.jsxs("select",{value:W.aiUse,onChange:ae=>ve("aiUse",ae.target.value),children:[u.jsx("option",{value:"",children:"Choose one"}),u.jsx("option",{value:"none",children:"I did not use AI-generated content"}),u.jsx("option",{value:"disclosed",children:"I used AI and will explain how"})]})]}),u.jsx("p",{className:"hint",children:"This is a declaration for review, not an automatic grade. Follow your teacher's classroom AI policy."}),W.aiUse==="disclosed"&&u.jsxs("label",{children:["Describe the AI assistance",u.jsx("textarea",{rows:"3",value:W.aiDetails,onChange:ae=>ve("aiDetails",ae.target.value),placeholder:"Identify which parts involved AI assistance."})]})]}),u.jsxs("div",{className:"journal-actions",children:[u.jsxs("button",{type:"button",className:"btn",onClick:()=>{X("Draft saved in this browser.")},children:[u.jsx(Td,{size:15})," Save draft"]}),u.jsxs("button",{type:"submit",className:"btn submit",children:[u.jsx(oh,{size:15})," Demo submit"]})]}),u.jsx("p",{role:"status",className:"journal-submit-status",children:Y})]}),u.jsxs("div",{className:"journal-bottom-row",children:[u.jsx("p",{className:"hint",children:"No real submissions are sent. Each demo submission records a separate copy; drafts remain editable."}),u.jsxs("button",{type:"button",className:"btn",onClick:()=>F(ae=>!ae),children:[u.jsx(Cy,{size:15})," ",M?"Hide history":`Submission history (${G.length})`]})]}),M&&u.jsx("div",{className:"journal-history",children:G.length?G.map(ae=>u.jsxs("details",{className:"journal-history-item",children:[u.jsxs("summary",{children:[u.jsx(sc,{size:16})," Submitted ",new Date(ae.submittedAt).toLocaleString()," · ",ae.type]}),u.jsx("div",{className:"journal-history-answer",children:ae.response})]},ae.id)):u.jsx("p",{className:"muted",children:"No submissions yet for this week."})})]})]})}const r0=`# Attendance Percentage

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
`,i0=`# Competition Leaderboard Ranks

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
`,s0=`# Confidence Pool Total

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
`,a0=`# Count Matching Events

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
`,o0=`# Longest Winning Streak

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
`,l0=`# Format a Score Line

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
`,u0=`# Second Largest Distinct Value

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
`,c0=`# Sum Positive Values

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
`,d0=`# Count Pairs With Target Sum

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
`,p0=`# Temperature Alert

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
`,h0=`using System;

public static class Solution {
    public static int AttendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,f0=`public class Solution {
    public static int attendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,m0=`export function attendancePercent(present, total) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,g0=`def attendance_percent(present: int, total: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,y0=`using System;

public static class Solution {
    public static int[] CompetitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,v0=`public class Solution {
    public static int[] competitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,x0=`export function competitionRanks(scores) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,b0=`def competition_ranks(scores: list[int]) -> list[int]:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,w0=`using System;

public static class Solution {
    public static int ConfidenceTotal(bool[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,k0=`public class Solution {
    public static int confidenceTotal(boolean[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,S0=`export function confidenceTotal(correct, weights) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,_0=`def confidence_total(correct: list[bool], weights: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,C0=`using System;

public static class Solution {
    public static int CountMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,T0=`public class Solution {
    public static int countMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,j0=`export function countMatches(events, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,N0=`def count_matches(events: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,E0=`using System;

public static class Solution {
    public static int LongestWinStreak(bool[] wins) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,L0=`public class Solution {
    public static int longestWinStreak(boolean[] wins) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,P0=`export function longestWinStreak(wins) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,A0=`def longest_win_streak(wins: list[bool]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,R0=`using System;

public static class Solution {
    public static string ScoreLine(string name, int points) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,I0=`public class Solution {
    public static String scoreLine(String name, int points) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,O0=`export function scoreLine(name, points) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,M0=`def score_line(name: str, points: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,D0=`using System;

public static class Solution {
    public static int? SecondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,z0=`public class Solution {
    public static Integer secondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,F0=`export function secondLargestDistinct(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,W0=`def second_largest_distinct(numbers: list[int]) -> int | None:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,H0=`using System;

public static class Solution {
    public static int SumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,B0=`public class Solution {
    public static int sumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,U0=`export function sumPositives(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,q0=`def sum_positives(numbers: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,K0=`using System;

public static class Solution {
    public static int TargetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,$0=`public class Solution {
    public static int targetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,G0=`export function targetPairs(numbers, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Y0=`def target_pairs(numbers: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,V0=`using System;

public static class Solution {
    public static string TemperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,J0=`public class Solution {
    public static String temperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,X0=`export function temperatureAlert(degrees) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Q0=`def temperature_alert(degrees: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Z0="attendance-percent",ew=[{input:[18,20],expected:90},{input:[2,3],expected:66},{input:[0,30],expected:0},{input:[7,7],expected:100}],tw={challengeId:Z0,cases:ew},nw="competition-ranks",rw=[{input:[[50,50,40,20,40]],expected:[1,1,3,5,3]},{input:[[7,12,9]],expected:[3,1,2]},{input:[[5,5,5]],expected:[1,1,1]},{input:[[]],expected:[]}],iw={challengeId:nw,cases:rw},sw="confidence-total",aw=[{input:[[!0,!1,!0],[20,18,15]],expected:35},{input:[[!1,!1],[5,8]],expected:0},{input:[[],[]],expected:0}],ow={challengeId:sw,cases:aw},lw="count-matches",uw=[{input:[[2,1,2,3,2],2],expected:3},{input:[[],7],expected:0},{input:[[3,4],5],expected:0}],cw={challengeId:lw,cases:uw},dw="longest-win-streak",pw=[{input:[[!0,!0,!1,!0,!0,!0]],expected:3},{input:[[!1,!1]],expected:0},{input:[[]],expected:0},{input:[[!0,!0]],expected:2}],hw={challengeId:dw,cases:pw},fw="score-line",mw=[{input:["Avery",18],expected:"Avery: 18 points"},{input:["Jordan Lee",0],expected:"Jordan Lee: 0 points"},{input:["Mia",-2],expected:"Mia: -2 points"}],gw={challengeId:fw,cases:mw},yw="second-largest-distinct",vw=[{input:[[3,1,3,2]],expected:2},{input:[[5,5]],expected:null},{input:[[-10,-7,-7,-2]],expected:-7},{input:[[1]],expected:null}],xw={challengeId:yw,cases:vw},bw="sum-positives",ww=[{input:[[-3,6,0,2,-1]],expected:8},{input:[[-5,0,-1]],expected:0},{input:[[]],expected:0}],kw={challengeId:bw,cases:ww},Sw="target-pairs",_w=[{input:[[1,3,2,2,4],4],expected:2},{input:[[2,2,2],4],expected:3},{input:[[1,2,3],9],expected:0},{input:[[],1],expected:0}],Cw={challengeId:Sw,cases:_w},Tw="temperature-alert",jw=[{input:[32],expected:"Freeze"},{input:[90],expected:"Heat"},{input:[72],expected:"Normal"},{input:[-5],expected:"Freeze"}],Nw={challengeId:Tw,cases:jw},Ew=["python","java","javascript","csharp"],Lw=[{id:"temperature-alert",title:"Temperature Alert",summary:"Choose a status label based on a temperature reading.",difficulty:"Very Easy",points:5,tags:["conditionals","comparisons","functions"],prerequisites:["functions","conditionals"],suggestedCourses:["computer-science-1","game-programming","uil"],languages:["python","java","javascript","csharp"],path:"problems/temperature-alert"},{id:"count-matches",title:"Count Matching Events",summary:"Count how often a particular event code appears.",difficulty:"Easy",points:10,tags:["arrays","loops","comparisons"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/count-matches"},{id:"sum-positives",title:"Sum Positive Values",summary:"Add only the positive values in a data set.",difficulty:"Easy",points:10,tags:["arrays","loops","accumulators"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/sum-positives"},{id:"score-line",title:"Format a Score Line",summary:"Format a player score as a clear single line of text.",difficulty:"Easy",points:10,tags:["strings","formatting","functions"],prerequisites:["variables","strings","functions"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/score-line"},{id:"attendance-percent",title:"Attendance Percentage",summary:"Convert an attendance fraction into a whole-number percentage.",difficulty:"Easy",points:10,tags:["arithmetic","integer-division","functions"],prerequisites:["variables","functions","arithmetic"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/attendance-percent"},{id:"longest-win-streak",title:"Longest Winning Streak",summary:"Find the longest consecutive run of winning results.",difficulty:"Medium",points:15,tags:["arrays","loops","state"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/longest-win-streak"},{id:"confidence-total",title:"Confidence Pool Total",summary:"Compute the points earned from predictions.",difficulty:"Medium",points:15,tags:["arrays","loops","parallel-arrays"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/confidence-total"},{id:"second-largest-distinct",title:"Second Largest Distinct Value",summary:"Return the second-highest unique integer in a collection.",difficulty:"Medium",points:20,tags:["arrays","comparisons","distinct-values"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/second-largest-distinct"},{id:"target-pairs",title:"Count Pairs With Target Sum",summary:"Count pairs of positions that add to a target.",difficulty:"Hard",points:25,tags:["arrays","nested-loops","counting"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/target-pairs"},{id:"competition-ranks",title:"Competition Leaderboard Ranks",summary:"Assign ranks while handling tied scores and skipped positions.",difficulty:"Hard",points:25,tags:["arrays","sorting","ties"],prerequisites:["functions","loops","arrays","sorting"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/competition-ranks"}],Hm={languages:Ew,challenges:Lw},Pw=Object.assign({"../challenge-bank/problems/attendance-percent/problem.md":r0,"../challenge-bank/problems/competition-ranks/problem.md":i0,"../challenge-bank/problems/confidence-total/problem.md":s0,"../challenge-bank/problems/count-matches/problem.md":a0,"../challenge-bank/problems/longest-win-streak/problem.md":o0,"../challenge-bank/problems/score-line/problem.md":l0,"../challenge-bank/problems/second-largest-distinct/problem.md":u0,"../challenge-bank/problems/sum-positives/problem.md":c0,"../challenge-bank/problems/target-pairs/problem.md":d0,"../challenge-bank/problems/temperature-alert/problem.md":p0}),Aw=Object.assign({"../challenge-bank/problems/attendance-percent/starters/Solution.cs":h0,"../challenge-bank/problems/attendance-percent/starters/Solution.java":f0,"../challenge-bank/problems/attendance-percent/starters/javascript.js":m0,"../challenge-bank/problems/attendance-percent/starters/python.py":g0,"../challenge-bank/problems/competition-ranks/starters/Solution.cs":y0,"../challenge-bank/problems/competition-ranks/starters/Solution.java":v0,"../challenge-bank/problems/competition-ranks/starters/javascript.js":x0,"../challenge-bank/problems/competition-ranks/starters/python.py":b0,"../challenge-bank/problems/confidence-total/starters/Solution.cs":w0,"../challenge-bank/problems/confidence-total/starters/Solution.java":k0,"../challenge-bank/problems/confidence-total/starters/javascript.js":S0,"../challenge-bank/problems/confidence-total/starters/python.py":_0,"../challenge-bank/problems/count-matches/starters/Solution.cs":C0,"../challenge-bank/problems/count-matches/starters/Solution.java":T0,"../challenge-bank/problems/count-matches/starters/javascript.js":j0,"../challenge-bank/problems/count-matches/starters/python.py":N0,"../challenge-bank/problems/longest-win-streak/starters/Solution.cs":E0,"../challenge-bank/problems/longest-win-streak/starters/Solution.java":L0,"../challenge-bank/problems/longest-win-streak/starters/javascript.js":P0,"../challenge-bank/problems/longest-win-streak/starters/python.py":A0,"../challenge-bank/problems/score-line/starters/Solution.cs":R0,"../challenge-bank/problems/score-line/starters/Solution.java":I0,"../challenge-bank/problems/score-line/starters/javascript.js":O0,"../challenge-bank/problems/score-line/starters/python.py":M0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.cs":D0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.java":z0,"../challenge-bank/problems/second-largest-distinct/starters/javascript.js":F0,"../challenge-bank/problems/second-largest-distinct/starters/python.py":W0,"../challenge-bank/problems/sum-positives/starters/Solution.cs":H0,"../challenge-bank/problems/sum-positives/starters/Solution.java":B0,"../challenge-bank/problems/sum-positives/starters/javascript.js":U0,"../challenge-bank/problems/sum-positives/starters/python.py":q0,"../challenge-bank/problems/target-pairs/starters/Solution.cs":K0,"../challenge-bank/problems/target-pairs/starters/Solution.java":$0,"../challenge-bank/problems/target-pairs/starters/javascript.js":G0,"../challenge-bank/problems/target-pairs/starters/python.py":Y0,"../challenge-bank/problems/temperature-alert/starters/Solution.cs":V0,"../challenge-bank/problems/temperature-alert/starters/Solution.java":J0,"../challenge-bank/problems/temperature-alert/starters/javascript.js":X0,"../challenge-bank/problems/temperature-alert/starters/python.py":Q0}),Rw=Object.assign({"../challenge-bank/problems/attendance-percent/examples.json":tw,"../challenge-bank/problems/competition-ranks/examples.json":iw,"../challenge-bank/problems/confidence-total/examples.json":ow,"../challenge-bank/problems/count-matches/examples.json":cw,"../challenge-bank/problems/longest-win-streak/examples.json":hw,"../challenge-bank/problems/score-line/examples.json":gw,"../challenge-bank/problems/second-largest-distinct/examples.json":xw,"../challenge-bank/problems/sum-positives/examples.json":kw,"../challenge-bank/problems/target-pairs/examples.json":Cw,"../challenge-bank/problems/temperature-alert/examples.json":Nw}),Ud=Hm.challenges,nh=Hm.languages,Bm={python:"Python",java:"Java",javascript:"JavaScript",csharp:"C#"},Iw={python:"python.py",java:"Solution.java",javascript:"javascript.js",csharp:"Solution.cs"};function Um(l){return Ud.find(c=>c.id===l)||null}function Ow(l){return Pw[`../challenge-bank/problems/${l}/problem.md`]??""}function Mw(l,c){return Aw[`../challenge-bank/problems/${l}/starters/${Iw[c]}`]??""}function Dw(l){var c;return((c=Rw[`../challenge-bank/problems/${l}/examples.json`])==null?void 0:c.cases)??[]}const zw=[...new Set(Ud.flatMap(l=>l.tags))].sort((l,c)=>l.localeCompare(c)),Fw=["Very Easy","Easy","Medium","Hard"];function Ww({query:l="",topic:c="all",difficulty:p="all",course:g="all",language:y="all"}={}){const b=l.trim().toLocaleLowerCase();return Ud.filter(S=>(!b||[S.title,S.summary,...S.tags].join(" ").toLowerCase().includes(b))&&(c==="all"||S.tags.includes(c))&&(p==="all"||S.difficulty===p)&&(g==="all"||S.suggestedCourses.includes(g))&&(y==="all"||S.languages.includes(y))).slice().sort((S,C)=>S.title.localeCompare(C.title))}function Jf(l,c){var b;const[p,...g]=l.split(":"),y=g.join(":");return p==="lesson"?to(hi(c),y):((b=Um(y))==null?void 0:b.title)||y}function Hw({grades:l=[],assignments:c=[],completedLessons:p=[],readOnlyMode:g=!1,weeklyPoints:y=[],accountStatus:b="disabled"}){const[S,C]=we.useState("all"),k=S==="all"?l:l.filter(D=>D.courseId===S),j=$p(k),L=g?S==="all"||S==="computer-science-1"?y:[]:$g(k),H=L[0],R=ns.filter(D=>!g||D.id==="computer-science-1").map(D=>({...D,...$p(l.filter(Y=>Y.courseId===D.id))})),J=c.filter(D=>S==="all"||D.courseId===S).map(D=>({...D,status:Id(D.id,{assignments:c,grades:l,completedLessons:p})})).filter(D=>D.status.state==="assigned"||D.status.state==="overdue").sort((D,Y)=>D.dueDate.localeCompare(Y.dueDate));return u.jsxs("div",{className:"main-content grades-screen",children:[u.jsxs("header",{className:"grades-heading",children:[u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Your progress"}),u.jsx("h1",{children:"Grades"}),u.jsx("p",{children:g?"Verified Computer Science I scores and weekly improvements. Assignments are not yet connected here.":"See your earned points, weekly scores, and work still due."})]}),u.jsxs("label",{className:"grades-filter",children:["Course",u.jsxs("select",{value:S,onChange:D=>C(D.target.value),children:[u.jsx("option",{value:"all",children:"All courses"}),ns.map(D=>u.jsx("option",{value:D.id,children:D.label},D.id))]})]})]}),u.jsx("p",{className:"grades-preview-note",children:g?b==="signed-in"?"Verified Computer Science I results from your existing Playground account. Submissions and grading remain in the current Playground.":"Sign in on the current Playground to see your own verified results here. No changes are made from this test build.":"This preview does not display real student grades or assignments. Verified scores remain in the current Playground."}),u.jsxs("div",{className:"grades-summary",children:[u.jsxs("div",{className:"grades-stat surface-card",children:[u.jsx(fy,{size:19}),u.jsx("span",{children:"Points earned"}),u.jsxs("strong",{children:[j.earned," ",u.jsxs("small",{children:["/ ",j.possible]})]}),u.jsx("p",{children:j.percent===null?"No graded work yet":`${j.percent}% of graded points`})]}),u.jsxs("div",{className:"grades-stat surface-card",children:[u.jsx(om,{size:19}),u.jsx("span",{children:"Graded activities"}),u.jsx("strong",{children:j.count}),u.jsx("p",{children:"Lessons and challenges"})]}),u.jsxs("div",{className:"grades-stat surface-card",children:[u.jsx(hy,{size:19}),u.jsx("span",{children:"Most recent scored week"}),u.jsx("strong",{children:H?g?`+${H.earned}`:`${H.earned} / ${H.possible}`:"—"}),u.jsx("p",{children:H?`Week of ${nc(H.week)}`:"No scores yet"})]})]}),u.jsxs("section",{className:"grades-panel surface-card",children:[u.jsx("h2",{children:g?"Weekly verified point increases":"Weekly scores"}),L.length?u.jsx("div",{className:"grades-weeks",children:L.map(D=>u.jsxs("div",{className:"grades-week",children:[u.jsxs("div",{children:[u.jsxs("strong",{children:["Week of ",nc(D.week)]}),u.jsxs("small",{children:[D.count," scored ",D.count===1?"activity":"activities"]})]}),u.jsxs("div",{className:"grades-week-score",children:[u.jsx("strong",{children:g?`+${D.earned} pts`:`${D.earned} / ${D.possible} pts`}),!g&&u.jsx("progress",{value:D.earned,max:Math.max(D.possible,1),"aria-label":`Week of ${nc(D.week)}: ${D.earned} of ${D.possible} points`})]})]},D.week))}):u.jsx("p",{children:"No graded work in this selection."})]}),S==="all"&&u.jsxs("section",{className:"grades-panel surface-card",children:[u.jsx("h2",{children:"By course"}),u.jsx("div",{className:"grades-course-list",children:R.map(D=>u.jsxs("div",{className:"grades-course-row","data-course":D.id,children:[u.jsx("span",{className:"grades-course-dot","aria-hidden":"true"}),u.jsx("strong",{children:D.label}),u.jsx("span",{children:D.count?`${D.earned} / ${D.possible} pts`:"No grades yet"})]},D.id))})]}),u.jsxs("section",{className:"grades-panel surface-card",children:[u.jsx("h2",{children:"Scored work"}),k.length?u.jsx("div",{className:"grades-entries",children:k.slice().sort((D,Y)=>Y.gradedAt.localeCompare(D.gradedAt)).map(D=>{var Y;return u.jsxs("div",{className:"grades-entry",children:[u.jsxs("div",{children:[u.jsx("strong",{children:Jf(D.id,D.courseId)}),u.jsxs("small",{children:[u.jsx(el,{size:13}),((Y=hi(D.courseId))==null?void 0:Y.label)||D.courseId," · ",Cd(D.gradedAt)]})]}),u.jsxs("strong",{children:[D.earned," / ",D.possible," pts"]})]},D.id)})}):u.jsx("p",{children:"No scored lessons or challenges yet."})]}),u.jsxs("section",{className:"grades-panel surface-card",children:[u.jsx("h2",{children:"Still to complete"}),g?u.jsx("p",{children:"Assignment and due-date data will be connected in the next integration stage."}):J.length?u.jsx("div",{className:"grades-entries",children:J.map(D=>{var Y;return u.jsxs("div",{className:"grades-entry",children:[u.jsxs("div",{children:[u.jsx("strong",{children:Jf(D.id,D.courseId)}),u.jsx("small",{children:((Y=hi(D.courseId))==null?void 0:Y.label)||D.courseId})]}),u.jsxs("div",{className:"grades-due-meta",children:[u.jsx("span",{className:`assignment-status ${D.status.state}`,children:D.status.state==="overdue"?"Overdue":"Assigned"}),u.jsxs("small",{children:["Due ",Cd(D.dueDate)]})]})]},D.id)})}):u.jsx("p",{children:"Nothing outstanding in this selection."})]})]})}function Bw({filterCourse:l,onSelect:c,onBrowseCourse:p,grades:g=[]}){const[y,b]=we.useState(""),[S,C]=we.useState("all"),[k,j]=we.useState("all"),[L,H]=we.useState("all"),R=l||"all",J=we.useMemo(()=>Ww({query:y,difficulty:S,topic:k,language:L,course:R}),[y,S,k,L,R]),D=()=>{b(""),C("all"),j("all"),H("all"),p(null)};return u.jsxs("div",{className:"main-content challenge-bank-screen",children:[u.jsxs("header",{className:"challenge-bank-intro",children:[u.jsxs("div",{className:"eyebrow",children:[u.jsx(zd,{size:15})," Shared programming practice"]}),u.jsx("h1",{children:"Challenge Bank"}),u.jsx("p",{children:"One problem library for every class. Choose Python, Java, JavaScript, or C# when solving—without duplicating problems across courses."}),u.jsxs("div",{className:"challenge-summary",children:[u.jsx("strong",{children:Ud.length})," original challenges · ",u.jsx("strong",{children:"4"})," languages · ",u.jsx("strong",{children:"1"})," shared library"]})]}),u.jsxs("section",{className:"challenge-filters surface-card","aria-label":"Filter challenges",children:[u.jsxs("div",{className:"filter-title",children:[u.jsx(wy,{size:17}),u.jsx("strong",{children:"Find a challenge"}),u.jsxs("button",{type:"button",className:"filter-clear",onClick:D,children:[u.jsx(Wd,{size:14})," Clear filters"]})]}),u.jsxs("div",{className:"challenge-filter-grid",children:[u.jsxs("label",{className:"challenge-search-label",children:["Search",u.jsxs("span",{className:"challenge-search",children:[u.jsx(am,{size:16}),u.jsx("input",{type:"search",value:y,placeholder:"Problem, skill, or topic",onChange:Y=>b(Y.target.value)})]})]}),u.jsxs("label",{children:["Course view",u.jsxs("select",{value:R,onChange:Y=>p(Y.target.value==="all"?null:Y.target.value),children:[u.jsx("option",{value:"all",children:"All courses"}),ns.filter(Y=>Y.id!=="tsi-math").map(Y=>u.jsx("option",{value:Y.id,children:Y.label},Y.id))]})]}),u.jsxs("label",{children:["Difficulty",u.jsxs("select",{value:S,onChange:Y=>C(Y.target.value),children:[u.jsx("option",{value:"all",children:"Any difficulty"}),Fw.map(Y=>u.jsx("option",{value:Y,children:Y},Y))]})]}),u.jsxs("label",{children:["Topic",u.jsxs("select",{value:k,onChange:Y=>j(Y.target.value),children:[u.jsx("option",{value:"all",children:"Any topic"}),zw.map(Y=>u.jsx("option",{value:Y,children:Y},Y))]})]}),u.jsxs("label",{children:["Language",u.jsxs("select",{value:L,onChange:Y=>H(Y.target.value),children:[u.jsx("option",{value:"all",children:"Any language"}),nh.map(Y=>u.jsx("option",{value:Y,children:Bm[Y]},Y))]})]})]}),u.jsx("p",{className:"challenge-filter-note",children:"Course matching is informational. Confirm students have learned the prerequisite skills before assigning problems."})]}),u.jsxs("div",{className:"challenge-results-heading",children:[u.jsxs("h2",{children:["Available challenges ",u.jsxs("span",{children:["(",J.length,")"]})]}),u.jsx("span",{children:"Alphabetical order"})]}),J.length?u.jsx("div",{className:"challenge-card-grid",children:J.map(Y=>u.jsxs("a",{className:"challenge-card surface-card",href:em(Y.id),onClick:X=>{X.button!==0||X.metaKey||X.ctrlKey||X.shiftKey||X.altKey||(X.preventDefault(),c(Y.id))},children:[u.jsxs("div",{className:"challenge-card-top",children:[u.jsx("span",{className:"challenge-level level-"+Y.difficulty.toLowerCase().replace(" ","-"),children:Y.difficulty}),u.jsx("span",{className:"challenge-points",children:vd("challenge:"+Y.id,g)?`${vd("challenge:"+Y.id,g).earned} / ${vd("challenge:"+Y.id,g).possible} pts earned`:`${Y.points} pts available`})]}),u.jsx("h3",{children:Y.title}),u.jsx("p",{children:Y.summary}),u.jsx("div",{className:"challenge-tags",children:Y.tags.map(X=>u.jsx("span",{children:X},X))}),u.jsxs("div",{className:"challenge-course-tags",children:[Y.suggestedCourses.slice(0,3).map(X=>{var M,F;return u.jsx("span",{title:(M=hi(X))==null?void 0:M.label,children:((F=hi(X))==null?void 0:F.short)||X},X)}),Y.suggestedCourses.length>3&&u.jsxs("span",{children:["+",Y.suggestedCourses.length-3]})]}),u.jsxs("span",{className:"challenge-open",children:["Open challenge ",u.jsx(Gp,{size:16})]})]},Y.id))}):u.jsxs("div",{className:"challenge-empty surface-card",children:[u.jsx("h3",{children:"No matching challenges"}),u.jsx("p",{children:"Try a broader topic or clear the filters."}),u.jsx("button",{className:"btn",onClick:D,children:"Show all challenges"})]}),u.jsx("p",{className:"hint challenge-bottom-note",children:"Choose a problem, work through its examples, and compare your approach. Practice here does not count toward your grade."})]})}const Uw=(l,c)=>"designlab:challenge-code:"+l+":"+c;function qw({challengeId:l,onBack:c}){const p=Um(l),[g,y]=$n("designlab:challenge-language","python"),b=nh.includes(g)?g:"python",[S,C]=$n("designlab:challenge-left-width",420),k=we.useRef(null);if(!p)return u.jsxs("div",{className:"main-content",children:[u.jsx("h1",{children:"Challenge not found"}),u.jsx("button",{className:"btn",onClick:c,children:"Back to bank"})]});const j=Mw(l,b),L={id:l,title:p.title,language:b,starter:j,kind:"Challenge",challenge:p.summary,points:p.points,console:"Run or Check executes published examples in your selected language.",storageKey:Uw(l,b),challengeExamples:Dw(l),isChallenge:!0,isPublished:!1},H=R=>{if(!k.current)return;const J=k.current.getBoundingClientRect();C(Math.max(280,Math.min(J.width-360,R.clientX-J.left)))};return u.jsxs("div",{className:"challenge-detail-page",children:[u.jsxs("div",{className:"challenge-breadcrumb",children:[u.jsxs("button",{onClick:c,children:[u.jsx(rm,{size:16})," Challenge Bank"]}),u.jsx("span",{children:"/"}),u.jsx("span",{children:p.title})]}),u.jsxs("header",{className:"challenge-detail-heading surface-card",children:[u.jsxs("div",{className:"eyebrow",children:["Shared challenge · ",p.difficulty," · ",p.points," available points in the published contract"]}),u.jsx("h1",{children:p.title}),u.jsx("p",{children:p.summary}),u.jsx("p",{children:"Run and Check execute student code using only published examples. No submissions, student records, official points or hidden grading are connected here."}),u.jsxs("div",{className:"challenge-prerequisites",children:[u.jsx("strong",{children:"Prerequisites:"}),p.prerequisites.map(R=>u.jsx("span",{children:R},R))]})]}),u.jsxs("div",{className:"challenge-workspace",ref:k,style:{"--challenge-left":S+"px"},children:[u.jsxs("section",{className:"challenge-instructions",children:[u.jsxs("div",{className:"pane-header",children:[u.jsxs("strong",{children:[u.jsx(py,{size:16})," Problem & examples"]}),u.jsx("span",{className:"challenge-points",children:"Practice only"})]}),u.jsx("div",{className:"markdown-preview challenge-markdown",dangerouslySetInnerHTML:{__html:Zo(Ow(l))}})]}),u.jsx(dc,{axis:"columns",onDrag:H}),u.jsxs("section",{className:"challenge-editor-panel",children:[u.jsxs("div",{className:"challenge-runtime-toolbar",children:[u.jsxs("label",{className:"challenge-language-selector",children:["Language",u.jsx("select",{"aria-label":"Solution language",value:b,onChange:R=>y(R.target.value),children:nh.map(R=>u.jsx("option",{value:R,children:Bm[R]},R))})]}),u.jsx("span",{children:"Live public-example checks"})]}),u.jsx(Am,{lessonId:"challenge:"+l+":"+b,task:L},l+":"+b)]})]})]})}function Kw(){var A;const[l,c]=we.useState(()=>hd()),[p,g]=$n("designlab:course","computer-science-1"),[y,b]=$n("designlab:theme","dark"),[S,C]=$n("designlab:course-colors",{}),[k,j]=$n("designlab:sidebar",!0);$n("designlab:completed-lessons",[]);const[L,H]=we.useState({status:"loading",grades:[],weeklyPoints:[]}),R=L.grades,J=[],D=Gg([],R),[Y,X]=we.useState({}),[M,F]=we.useState({}),[B,W]=we.useState(!0),G=we.useMemo(()=>ns.filter(N=>N.id==="computer-science-1").map(N=>{if(N.id==="computer-science-1"||N.id==="test-prep")return N;if(N.id==="capstone")return{...N,units:[],lessons:[],lessonRecords:{},publishedContent:!1,projects:[]};const K=Y[N.id];return K?{...N,...K,publishedContent:!0}:{...N,units:[],lessons:[],lessonRecords:{},projects:[],contentLoadingError:M[N.id]||null}}),[Y,M]);we.useEffect(()=>{let N=!0;return ny().then(K=>{N&&H(K)}).catch(()=>{N&&H({status:"unavailable",grades:[],weeklyPoints:[],message:"Account lookup unavailable. No production records were changed."})}),()=>{N=!1}},[]),we.useEffect(()=>{const N=new AbortController;let K=!0;return Promise.all([].map(async I=>{try{return{courseId:I,data:await ty(I,{signal:N.signal})}}catch(ee){return{courseId:I,error:String((ee==null?void 0:ee.message)||ee)}}})).then(I=>{if(!K)return;const ee={},_e={};for(const Ie of I)Ie.data?ee[Ie.courseId]=Ie.data:_e[Ie.courseId]=Ie.error;X(ee),F(_e),W(!1)}),()=>{K=!1,N.abort()}},[]),we.useEffect(()=>{c(hd(window.location.pathname,G))},[G]);const[ce,le]=$n("designlab:students",Sd),[ve,Me]=$n("designlab:journal-submissions",Sg);we.useEffect(()=>{document.documentElement.dataset.theme=y},[y]),we.useEffect(()=>{Hg(S,ns)},[S]);function ke(N,K){!ns.some(I=>I.id===N)||!Rd(K)||C(I=>({...I&&typeof I=="object"?I:{},[N]:K.toUpperCase()}))}function ae(N){C(K=>{const I={...K&&typeof K=="object"?K:{}};return delete I[N],I})}we.useEffect(()=>{var K;l.page==="course"&&g(l.courseId);const N=l.page==="course"?(K=hi(l.courseId))==null?void 0:K.label:l.page==="admin"?"Admin dashboard":l.page==="teacher"?"Teacher dashboard":l.page==="grades"?"Grades":l.page==="journals"?"Weekly journals":l.page==="challenges"?"Challenge Bank":l.page==="challenge"?"Coding challenge":"Your playgrounds";document.title=`${N||"Playground"} | Ms. Whitby's Playground — React Lab`},[l.page,l.courseId,g]),we.useEffect(()=>{const N=()=>c(hd(window.location.pathname,G));return window.addEventListener("popstate",N),window.addEventListener("hashchange",N),()=>{window.removeEventListener("popstate",N),window.removeEventListener("hashchange",N)}},[G]);const Ce=we.useCallback(N=>{window.location.pathname!==N&&window.history.pushState({},"",N),c(hd(window.location.pathname,G)),window.scrollTo({top:0,behavior:"auto"})},[G]);function V(N,K){if(!N)return Ce(Kl());g(N),Ce(Od(N,K))}function he(N,K,I=null){Ce(tm(N,K,I))}function E(N){N==="teacher"?Ce(Qh()):N==="admin"?Ce(ay()):N==="journals"?Ce(oy()):N==="grades"?Ce(ly()):N==="challenges"?Ce(ql()):N==="course"?V(l.page==="course"?l.courseId:p):Ce(Kl())}const Z=l.page,Q=l.courseId||p;return u.jsxs("div",{className:"app-shell",children:[u.jsx(My,{sidebarOpen:k,onToggleSidebar:()=>j(!k),onHome:()=>Ce(Kl()),theme:y,setTheme:b,readOnlyMode:Gu,accountLabel:(A=L.user)==null?void 0:A.handle}),u.jsxs("div",{className:pa("app-layout",!k&&"sidebar-closed"),children:[u.jsx(zy,{open:k,page:Z,courseId:Q,lessonId:l.page==="course"?l.lessonId:null,setPage:E,openCourse:V,completedLessons:D,assignments:J,grades:R,availableCourses:G,readOnlyMode:Gu,onOpenProject:he}),u.jsxs("main",{className:"main-panel",children:[u.jsxs("section",{className:"cs1-integration-notice",role:"status",children:[u.jsx("strong",{children:"Computer Science I · read-only integration test"}),u.jsx("span",{children:L.status==="loading"?"Checking your existing Playground session…":L.status==="signed-in"?"Signed in as "+L.user.handle+" · Your own verified grades are shown.":L.status==="signed-out"?"Sign in on the current Playground to view your existing results.":L.message||"Could not verify your existing session."}),u.jsx("a",{href:"/playground/",children:"Open current Playground"})]}),["home","course","grades","teacher"].includes(Z)?Z==="home"?u.jsx(Uy,{availableCourses:G,completedLessons:D,openCourse:V,openTeacher:()=>Ce(Qh()),openChallenges:()=>Ce(ql()),readOnlyMode:Gu}):Z==="course"?u.jsx(Rb,{courseId:l.courseId,lessonId:l.lessonId,projectId:l.projectId,projectStepId:l.stepId,availableCourses:G,openCourse:V,openProject:he,openChallenges:N=>Ce(ql(N)),completedLessons:D,assignments:J,grades:R,readOnlyMode:Gu,onToggleLessonComplete:void 0,courseColors:S,onSetCourseColor:ke,onResetCourseColor:ae},l.courseId):Z==="grades"?u.jsx(Hw,{grades:R,assignments:J,completedLessons:D,readOnlyMode:Gu,weeklyPoints:L.weeklyPoints,accountStatus:L.status}):Z==="challenges"?u.jsx(Bw,{grades:R,filterCourse:l.filterCourse,onSelect:N=>Ce(em(N)),onBrowseCourse:N=>Ce(ql(N))}):Z==="challenge"?u.jsx(qw,{challengeId:l.challengeId,grades:R,onBack:()=>Ce(ql())},l.challengeId):Z==="journals"?u.jsx(n0,{submissions:ve,setSubmissions:Me}):Z==="teacher"?u.jsx(Vb,{}):Z==="admin"?u.jsx(e0,{students:ce,setStudents:le}):B?u.jsxs("div",{className:"main-content route-not-found",role:"status",children:[u.jsx("h1",{children:"Loading published course materials…"}),u.jsx("p",{children:"The lesson and project links will appear once the course catalogs are loaded."})]}):u.jsxs("div",{className:"main-content route-not-found",children:[u.jsx("div",{className:"eyebrow",children:"Link not found"}),u.jsx("h1",{children:"That playground page doesn't exist."}),u.jsx("p",{children:"Check the link or return to the list of playgrounds."}),u.jsx("button",{className:"btn primary",onClick:()=>Ce(Kl()),children:"See all playgrounds"})]}):u.jsxs("div",{className:"main-content",children:[u.jsx("h1",{children:"Not enabled in this test build"}),u.jsx("p",{children:"Teacher tools, journals, challenges, and submissions remain in the current Playground until their permissions and data are integrated."}),u.jsx("a",{href:"/playground/",children:"Return to current Playground"})]})]})]}),u.jsx(Fy,{})]})}yg.createRoot(document.getElementById("root")).render(u.jsx(dg.StrictMode,{children:u.jsx(Kw,{})}));
