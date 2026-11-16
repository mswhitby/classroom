var eg=Object.defineProperty;var tg=(l,u,d)=>u in l?eg(l,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[u]=d;var on=(l,u,d)=>tg(l,typeof u!="symbol"?u+"":u,d);(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))g(x);new MutationObserver(x=>{for(const b of x)if(b.type==="childList")for(const _ of b.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&g(_)}).observe(document,{childList:!0,subtree:!0});function d(x){const b={};return x.integrity&&(b.integrity=x.integrity),x.referrerPolicy&&(b.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?b.credentials="include":x.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function g(x){if(x.ep)return;x.ep=!0;const b=d(x);fetch(x.href,b)}})();function qf(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Cp={exports:{}},Uu={},Tp={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function ng(){if(Oh)return Pt;Oh=1;var l=Symbol.for("react.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),_=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),W=Symbol.iterator;function A(O){return O===null||typeof O!="object"?null:(O=W&&O[W]||O["@@iterator"],typeof O=="function"?O:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,G={};function X(O,Z,ke){this.props=O,this.context=Z,this.refs=G,this.updater=ke||J}X.prototype.isReactComponent={},X.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},X.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function M(){}M.prototype=X.prototype;function F(O,Z,ke){this.props=O,this.context=Z,this.refs=G,this.updater=ke||J}var q=F.prototype=new M;q.constructor=F,D(q,X.prototype),q.isPureReactComponent=!0;var H=Array.isArray,Y=Object.prototype.hasOwnProperty,pe={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function ye(O,Z,ke){var Ie,qe={},Oe=null,we=null;if(Z!=null)for(Ie in Z.ref!==void 0&&(we=Z.ref),Z.key!==void 0&&(Oe=""+Z.key),Z)Y.call(Z,Ie)&&!V.hasOwnProperty(Ie)&&(qe[Ie]=Z[Ie]);var Be=arguments.length-2;if(Be===1)qe.children=ke;else if(1<Be){for(var Ke=Array(Be),et=0;et<Be;et++)Ke[et]=arguments[et+2];qe.children=Ke}if(O&&O.defaultProps)for(Ie in Be=O.defaultProps,Be)qe[Ie]===void 0&&(qe[Ie]=Be[Ie]);return{$$typeof:l,type:O,key:Oe,ref:we,props:qe,_owner:pe.current}}function ze(O,Z){return{$$typeof:l,type:O.type,key:Z,ref:O.ref,props:O.props,_owner:O._owner}}function _e(O){return typeof O=="object"&&O!==null&&O.$$typeof===l}function oe(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ke){return Z[ke]})}var Ce=/\/+/g;function le(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?oe(""+O.key):Z.toString(36)}function ve(O,Z,ke,Ie,qe){var Oe=typeof O;(Oe==="undefined"||Oe==="boolean")&&(O=null);var we=!1;if(O===null)we=!0;else switch(Oe){case"string":case"number":we=!0;break;case"object":switch(O.$$typeof){case l:case u:we=!0}}if(we)return we=O,qe=qe(we),O=Ie===""?"."+le(we,0):Ie,H(qe)?(ke="",O!=null&&(ke=O.replace(Ce,"$&/")+"/"),ve(qe,Z,ke,"",function(et){return et})):qe!=null&&(_e(qe)&&(qe=ze(qe,ke+(!qe.key||we&&we.key===qe.key?"":(""+qe.key).replace(Ce,"$&/")+"/")+O)),Z.push(qe)),1;if(we=0,Ie=Ie===""?".":Ie+":",H(O))for(var Be=0;Be<O.length;Be++){Oe=O[Be];var Ke=Ie+le(Oe,Be);we+=ve(Oe,Z,ke,Ke,qe)}else if(Ke=A(O),typeof Ke=="function")for(O=Ke.call(O),Be=0;!(Oe=O.next()).done;)Oe=Oe.value,Ke=Ie+le(Oe,Be++),we+=ve(Oe,Z,ke,Ke,qe);else if(Oe==="object")throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return we}function E(O,Z,ke){if(O==null)return O;var Ie=[],qe=0;return ve(O,Ie,"","",function(Oe){return Z.call(ke,Oe,qe++)}),Ie}function ee(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(ke){(O._status===0||O._status===-1)&&(O._status=1,O._result=ke)},function(ke){(O._status===0||O._status===-1)&&(O._status=2,O._result=ke)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var Q={current:null},R={transition:null},L={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:R,ReactCurrentOwner:pe};function $(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:E,forEach:function(O,Z,ke){E(O,function(){Z.apply(this,arguments)},ke)},count:function(O){var Z=0;return E(O,function(){Z++}),Z},toArray:function(O){return E(O,function(Z){return Z})||[]},only:function(O){if(!_e(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Pt.Component=X,Pt.Fragment=d,Pt.Profiler=x,Pt.PureComponent=F,Pt.StrictMode=g,Pt.Suspense=S,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,Pt.act=$,Pt.cloneElement=function(O,Z,ke){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ie=D({},O.props),qe=O.key,Oe=O.ref,we=O._owner;if(Z!=null){if(Z.ref!==void 0&&(Oe=Z.ref,we=pe.current),Z.key!==void 0&&(qe=""+Z.key),O.type&&O.type.defaultProps)var Be=O.type.defaultProps;for(Ke in Z)Y.call(Z,Ke)&&!V.hasOwnProperty(Ke)&&(Ie[Ke]=Z[Ke]===void 0&&Be!==void 0?Be[Ke]:Z[Ke])}var Ke=arguments.length-2;if(Ke===1)Ie.children=ke;else if(1<Ke){Be=Array(Ke);for(var et=0;et<Ke;et++)Be[et]=arguments[et+2];Ie.children=Be}return{$$typeof:l,type:O.type,key:qe,ref:Oe,props:Ie,_owner:we}},Pt.createContext=function(O){return O={$$typeof:_,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:b,_context:O},O.Consumer=O},Pt.createElement=ye,Pt.createFactory=function(O){var Z=ye.bind(null,O);return Z.type=O,Z},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(O){return{$$typeof:T,render:O}},Pt.isValidElement=_e,Pt.lazy=function(O){return{$$typeof:N,_payload:{_status:-1,_result:O},_init:ee}},Pt.memo=function(O,Z){return{$$typeof:j,type:O,compare:Z===void 0?null:Z}},Pt.startTransition=function(O){var Z=R.transition;R.transition={};try{O()}finally{R.transition=Z}},Pt.unstable_act=$,Pt.useCallback=function(O,Z){return Q.current.useCallback(O,Z)},Pt.useContext=function(O){return Q.current.useContext(O)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(O){return Q.current.useDeferredValue(O)},Pt.useEffect=function(O,Z){return Q.current.useEffect(O,Z)},Pt.useId=function(){return Q.current.useId()},Pt.useImperativeHandle=function(O,Z,ke){return Q.current.useImperativeHandle(O,Z,ke)},Pt.useInsertionEffect=function(O,Z){return Q.current.useInsertionEffect(O,Z)},Pt.useLayoutEffect=function(O,Z){return Q.current.useLayoutEffect(O,Z)},Pt.useMemo=function(O,Z){return Q.current.useMemo(O,Z)},Pt.useReducer=function(O,Z,ke){return Q.current.useReducer(O,Z,ke)},Pt.useRef=function(O){return Q.current.useRef(O)},Pt.useState=function(O){return Q.current.useState(O)},Pt.useSyncExternalStore=function(O,Z,ke){return Q.current.useSyncExternalStore(O,Z,ke)},Pt.useTransition=function(){return Q.current.useTransition()},Pt.version="18.3.1",Pt}var Mh;function Zp(){return Mh||(Mh=1,Tp.exports=ng()),Tp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function rg(){if(Dh)return Uu;Dh=1;var l=Zp(),u=Symbol.for("react.element"),d=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,x=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function _(T,S,j){var N,W={},A=null,J=null;j!==void 0&&(A=""+j),S.key!==void 0&&(A=""+S.key),S.ref!==void 0&&(J=S.ref);for(N in S)g.call(S,N)&&!b.hasOwnProperty(N)&&(W[N]=S[N]);if(T&&T.defaultProps)for(N in S=T.defaultProps,S)W[N]===void 0&&(W[N]=S[N]);return{$$typeof:u,type:T,key:A,ref:J,props:W,_owner:x.current}}return Uu.Fragment=d,Uu.jsx=_,Uu.jsxs=_,Uu}var zh;function ig(){return zh||(zh=1,Cp.exports=rg()),Cp.exports}var p=ig(),Te=Zp();const sg=qf(Te);var ud={},jp={exports:{}},ei={},Np={exports:{}},Ep={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function ag(){return Fh||(Fh=1,(function(l){function u(R,L){var $=R.length;R.push(L);e:for(;0<$;){var O=$-1>>>1,Z=R[O];if(0<x(Z,L))R[O]=L,R[$]=Z,$=O;else break e}}function d(R){return R.length===0?null:R[0]}function g(R){if(R.length===0)return null;var L=R[0],$=R.pop();if($!==L){R[0]=$;e:for(var O=0,Z=R.length,ke=Z>>>1;O<ke;){var Ie=2*(O+1)-1,qe=R[Ie],Oe=Ie+1,we=R[Oe];if(0>x(qe,$))Oe<Z&&0>x(we,qe)?(R[O]=we,R[Oe]=$,O=Oe):(R[O]=qe,R[Ie]=$,O=Ie);else if(Oe<Z&&0>x(we,$))R[O]=we,R[Oe]=$,O=Oe;else break e}}return L}function x(R,L){var $=R.sortIndex-L.sortIndex;return $!==0?$:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;l.unstable_now=function(){return b.now()}}else{var _=Date,T=_.now();l.unstable_now=function(){return _.now()-T}}var S=[],j=[],N=1,W=null,A=3,J=!1,D=!1,G=!1,X=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(R){for(var L=d(j);L!==null;){if(L.callback===null)g(j);else if(L.startTime<=R)g(j),L.sortIndex=L.expirationTime,u(S,L);else break;L=d(j)}}function H(R){if(G=!1,q(R),!D)if(d(S)!==null)D=!0,ee(Y);else{var L=d(j);L!==null&&Q(H,L.startTime-R)}}function Y(R,L){D=!1,G&&(G=!1,M(ye),ye=-1),J=!0;var $=A;try{for(q(L),W=d(S);W!==null&&(!(W.expirationTime>L)||R&&!oe());){var O=W.callback;if(typeof O=="function"){W.callback=null,A=W.priorityLevel;var Z=O(W.expirationTime<=L);L=l.unstable_now(),typeof Z=="function"?W.callback=Z:W===d(S)&&g(S),q(L)}else g(S);W=d(S)}if(W!==null)var ke=!0;else{var Ie=d(j);Ie!==null&&Q(H,Ie.startTime-L),ke=!1}return ke}finally{W=null,A=$,J=!1}}var pe=!1,V=null,ye=-1,ze=5,_e=-1;function oe(){return!(l.unstable_now()-_e<ze)}function Ce(){if(V!==null){var R=l.unstable_now();_e=R;var L=!0;try{L=V(!0,R)}finally{L?le():(pe=!1,V=null)}}else pe=!1}var le;if(typeof F=="function")le=function(){F(Ce)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,E=ve.port2;ve.port1.onmessage=Ce,le=function(){E.postMessage(null)}}else le=function(){X(Ce,0)};function ee(R){V=R,pe||(pe=!0,le())}function Q(R,L){ye=X(function(){R(l.unstable_now())},L)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(R){R.callback=null},l.unstable_continueExecution=function(){D||J||(D=!0,ee(Y))},l.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ze=0<R?Math.floor(1e3/R):5},l.unstable_getCurrentPriorityLevel=function(){return A},l.unstable_getFirstCallbackNode=function(){return d(S)},l.unstable_next=function(R){switch(A){case 1:case 2:case 3:var L=3;break;default:L=A}var $=A;A=L;try{return R()}finally{A=$}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var $=A;A=R;try{return L()}finally{A=$}},l.unstable_scheduleCallback=function(R,L,$){var O=l.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?O+$:O):$=O,R){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=$+Z,R={id:N++,callback:L,priorityLevel:R,startTime:$,expirationTime:Z,sortIndex:-1},$>O?(R.sortIndex=$,u(j,R),d(S)===null&&R===d(j)&&(G?(M(ye),ye=-1):G=!0,Q(H,$-O))):(R.sortIndex=Z,u(S,R),D||J||(D=!0,ee(Y))),R},l.unstable_shouldYield=oe,l.unstable_wrapCallback=function(R){var L=A;return function(){var $=A;A=L;try{return R.apply(this,arguments)}finally{A=$}}}})(Ep)),Ep}var Wh;function og(){return Wh||(Wh=1,Np.exports=ag()),Np.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function lg(){if(Hh)return ei;Hh=1;var l=Zp(),u=og();function d(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g=new Set,x={};function b(t,r){_(t,r),_(t+"Capture",r)}function _(t,r){for(x[t]=r,t=0;t<r.length;t++)g.add(r[t])}var T=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},W={};function A(t){return S.call(W,t)?!0:S.call(N,t)?!1:j.test(t)?W[t]=!0:(N[t]=!0,!1)}function J(t,r,o,c){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function D(t,r,o,c){if(r===null||typeof r>"u"||J(t,r,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function G(t,r,o,c,f,y,P){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=y,this.removeEmptyString=P}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){X[t]=new G(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];X[r]=new G(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){X[t]=new G(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){X[t]=new G(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){X[t]=new G(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){X[t]=new G(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){X[t]=new G(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){X[t]=new G(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){X[t]=new G(t,5,!1,t.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function F(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(M,F);X[r]=new G(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(M,F);X[r]=new G(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(M,F);X[r]=new G(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){X[t]=new G(t,1,!1,t.toLowerCase(),null,!1,!1)}),X.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){X[t]=new G(t,1,!1,t.toLowerCase(),null,!0,!0)});function q(t,r,o,c){var f=X.hasOwnProperty(r)?X[r]:null;(f!==null?f.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(D(r,o,f,c)&&(o=null),c||f===null?A(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(r=f.attributeName,c=f.attributeNamespace,o===null?t.removeAttribute(r):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?t.setAttributeNS(c,r,o):t.setAttribute(r,o))))}var H=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),pe=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),ze=Symbol.for("react.profiler"),_e=Symbol.for("react.provider"),oe=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),R=Symbol.iterator;function L(t){return t===null||typeof t!="object"?null:(t=R&&t[R]||t["@@iterator"],typeof t=="function"?t:null)}var $=Object.assign,O;function Z(t){if(O===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+t}var ke=!1;function Ie(t,r){if(!t||ke)return"";ke=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(fe){var c=fe}Reflect.construct(t,[],r)}else{try{r.call()}catch(fe){c=fe}t.call(r.prototype)}else{try{throw Error()}catch(fe){c=fe}t()}}catch(fe){if(fe&&c&&typeof fe.stack=="string"){for(var f=fe.stack.split(`
`),y=c.stack.split(`
`),P=f.length-1,K=y.length-1;1<=P&&0<=K&&f[P]!==y[K];)K--;for(;1<=P&&0<=K;P--,K--)if(f[P]!==y[K]){if(P!==1||K!==1)do if(P--,K--,0>K||f[P]!==y[K]){var te=`
`+f[P].replace(" at new "," at ");return t.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",t.displayName)),te}while(1<=P&&0<=K);break}}}finally{ke=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?Z(t):""}function qe(t){switch(t.tag){case 5:return Z(t.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return t=Ie(t.type,!1),t;case 11:return t=Ie(t.type.render,!1),t;case 1:return t=Ie(t.type,!0),t;default:return""}}function Oe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case pe:return"Portal";case ze:return"Profiler";case ye:return"StrictMode";case le:return"Suspense";case ve:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case oe:return(t.displayName||"Context")+".Consumer";case _e:return(t._context.displayName||"Context")+".Provider";case Ce:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case E:return r=t.displayName||null,r!==null?r:Oe(t.type)||"Memo";case ee:r=t._payload,t=t._init;try{return Oe(t(r))}catch{}}return null}function we(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(r);case 8:return r===ye?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ke(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function et(t){var r=Ke(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,y=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(P){c=""+P,y.call(this,P)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(P){c=""+P},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function $e(t){t._valueTracker||(t._valueTracker=et(t))}function Ft(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return t&&(c=Ke(t)?t.checked?"true":"false":t.value),t=c,t!==o?(r.setValue(t),!0):!1}function Yt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _t(t,r){var o=r.checked;return $({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function xt(t,r){var o=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;o=Be(r.value!=null?r.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function tt(t,r){r=r.checked,r!=null&&q(t,"checked",r,!1)}function Ue(t,r){tt(t,r);var o=Be(r.value),c=r.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?yt(t,r.type,o):r.hasOwnProperty("defaultValue")&&yt(t,r.type,Be(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function vt(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function yt(t,r,o){(r!=="number"||Yt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Qe=Array.isArray;function ut(t,r,o,c){if(t=t.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=r.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&c&&(t[o].defaultSelected=!0)}else{for(o=""+Be(o),r=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function ae(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(d(91));return $({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function je(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(d(92));if(Qe(o)){if(1<o.length)throw Error(d(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:Be(o)}}function he(t,r){var o=Be(r.value),c=Be(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function kt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Ye(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Ye(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ze,mt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,c,f){MSApp.execUnsafeLocalFunction(function(){return t(r,o,c,f)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ze=Ze||document.createElement("div"),Ze.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ze.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function pt(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nr=["Webkit","ms","Moz","O"];Object.keys(Xt).forEach(function(t){nr.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Xt[r]=Xt[t]})});function Sr(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Xt.hasOwnProperty(t)&&Xt[t]?(""+r).trim():r+"px"}function Rr(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=Sr(o,r[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,f):t[o]=f}}var Br=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ur(t,r){if(r){if(Br[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(d(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(d(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(d(61))}if(r.style!=null&&typeof r.style!="object")throw Error(d(62))}}function bt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hi=null;function rt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _r=null,tn=null,It=null;function qt(t){if(t=pn(t)){if(typeof _r!="function")throw Error(d(280));var r=t.stateNode;r&&(r=gn(r),_r(t.stateNode,t.type,r))}}function xn(t){tn?It?It.push(t):It=[t]:tn=t}function mn(){if(tn){var t=tn,r=It;if(It=tn=null,qt(t),r)for(t=0;t<r.length;t++)qt(r[t])}}function Nn(t,r){return t(r)}function bn(){}var ti=!1;function In(t,r,o){if(ti)return t(r,o);ti=!0;try{return Nn(t,r,o)}finally{ti=!1,(tn!==null||It!==null)&&(bn(),mn())}}function pr(t,r){var o=t.stateNode;if(o===null)return null;var c=gn(o);if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(d(231,r,typeof o));return o}var fi=!1;if(T)try{var En={};Object.defineProperty(En,"passive",{get:function(){fi=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{fi=!1}function is(t,r,o,c,f,y,P,K,te){var fe=Array.prototype.slice.call(arguments,3);try{r.apply(o,fe)}catch(Re){this.onError(Re)}}var wn=!1,Cr=null,qr=!1,Ir=null,Tr={onError:function(t){wn=!0,Cr=t}};function mi(t,r,o,c,f,y,P,K,te){wn=!1,Cr=null,is.apply(Tr,arguments)}function ss(t,r,o,c,f,y,P,K,te){if(mi.apply(this,arguments),wn){if(wn){var fe=Cr;wn=!1,Cr=null}else throw Error(d(198));qr||(qr=!0,Ir=fe)}}function On(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function as(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Mi(t){if(On(t)!==t)throw Error(d(188))}function Or(t){var r=t.alternate;if(!r){if(r=On(t),r===null)throw Error(d(188));return r!==t?null:t}for(var o=t,c=r;;){var f=o.return;if(f===null)break;var y=f.alternate;if(y===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===y.child){for(y=f.child;y;){if(y===o)return Mi(f),t;if(y===c)return Mi(f),r;y=y.sibling}throw Error(d(188))}if(o.return!==c.return)o=f,c=y;else{for(var P=!1,K=f.child;K;){if(K===o){P=!0,o=f,c=y;break}if(K===c){P=!0,c=f,o=y;break}K=K.sibling}if(!P){for(K=y.child;K;){if(K===o){P=!0,o=y,c=f;break}if(K===c){P=!0,c=y,o=f;break}K=K.sibling}if(!P)throw Error(d(189))}}if(o.alternate!==c)throw Error(d(190))}if(o.tag!==3)throw Error(d(188));return o.stateNode.current===o?t:r}function Gn(t){return t=Or(t),t!==null?gi(t):null}function gi(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=gi(t);if(r!==null)return r;t=t.sibling}return null}var Di=u.unstable_scheduleCallback,Bt=u.unstable_cancelCallback,Mr=u.unstable_shouldYield,os=u.unstable_requestPaint,Rt=u.unstable_now,zi=u.unstable_getCurrentPriorityLevel,ni=u.unstable_ImmediatePriority,Vt=u.unstable_UserBlockingPriority,Je=u.unstable_NormalPriority,ri=u.unstable_LowPriority,ls=u.unstable_IdlePriority,Yn=null,C=null;function B(t){if(C&&typeof C.onCommitFiberRoot=="function")try{C.onCommitFiberRoot(Yn,t,void 0,(t.current.flags&128)===128)}catch{}}var me=Math.clz32?Math.clz32:He,Ne=Math.log,de=Math.LN2;function He(t){return t>>>=0,t===0?32:31-(Ne(t)/de|0)|0}var jt=64,Qt=4194304;function kn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kr(t,r){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,y=t.pingedLanes,P=o&268435455;if(P!==0){var K=P&~f;K!==0?c=kn(K):(y&=P,y!==0&&(c=kn(y)))}else P=o&~f,P!==0?c=kn(P):y!==0&&(c=kn(y));if(c===0)return 0;if(r!==0&&r!==c&&(r&f)===0&&(f=c&-c,y=r&-r,f>=y||f===16&&(y&4194240)!==0))return r;if((c&4)!==0&&(c|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)o=31-me(r),f=1<<o,c|=t[o],r&=~f;return c}function Qo(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(t,r){for(var o=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,y=t.pendingLanes;0<y;){var P=31-me(y),K=1<<P,te=f[P];te===-1?((K&o)===0||(K&c)!==0)&&(f[P]=Qo(K,r)):te<=r&&(t.expiredLanes|=K),y&=~K}}function Za(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function eo(){var t=jt;return jt<<=1,(jt&4194240)===0&&(jt=64),t}function Fi(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function rr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-me(r),t[r]=o}function to(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-me(o),y=1<<f;r[f]=0,c[f]=-1,t[f]=-1,o&=~y}}function Wi(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var c=31-me(o),f=1<<c;f&r|t[c]&r&&(t[c]|=r),o&=~f}}var Nt=0;function us(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ps,yi,ga,vi,Hi,ir=!1,ya=[],Dr=null,ii=null,Mn=null,$r=new Map,As=new Map,jr=[],Rs="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function no(t,r){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":ii=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":$r.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":As.delete(r.pointerId)}}function Is(t,r,o,c,f,y){return t===null||t.nativeEvent!==y?(t={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:y,targetContainers:[f]},r!==null&&(r=pn(r),r!==null&&yi(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function Kl(t,r,o,c,f){switch(r){case"focusin":return Dr=Is(Dr,t,r,o,c,f),!0;case"dragenter":return ii=Is(ii,t,r,o,c,f),!0;case"mouseover":return Mn=Is(Mn,t,r,o,c,f),!0;case"pointerover":var y=f.pointerId;return $r.set(y,Is($r.get(y)||null,t,r,o,c,f)),!0;case"gotpointercapture":return y=f.pointerId,As.set(y,Is(As.get(y)||null,t,r,o,c,f)),!0}return!1}function ro(t){var r=Ln(t.target);if(r!==null){var o=On(r);if(o!==null){if(r=o.tag,r===13){if(r=as(o),r!==null){t.blockedOn=r,Hi(t.priority,function(){ga(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cs(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=Ct(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);hi=c,o.target.dispatchEvent(c),hi=null}else return r=pn(o),r!==null&&yi(r),t.blockedOn=o,!1;r.shift()}return!0}function Os(t,r,o){cs(t)&&o.delete(r)}function io(){ir=!1,Dr!==null&&cs(Dr)&&(Dr=null),ii!==null&&cs(ii)&&(ii=null),Mn!==null&&cs(Mn)&&(Mn=null),$r.forEach(Os),As.forEach(Os)}function xi(t,r){t.blockedOn===r&&(t.blockedOn=null,ir||(ir=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,io)))}function Se(t){function r(f){return xi(f,t)}if(0<ya.length){xi(ya[0],t);for(var o=1;o<ya.length;o++){var c=ya[o];c.blockedOn===t&&(c.blockedOn=null)}}for(Dr!==null&&xi(Dr,t),ii!==null&&xi(ii,t),Mn!==null&&xi(Mn,t),$r.forEach(r),As.forEach(r),o=0;o<jr.length;o++)c=jr[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<jr.length&&(o=jr[0],o.blockedOn===null);)ro(o),o.blockedOn===null&&jr.shift()}var I=H.ReactCurrentBatchConfig,re=!0;function xe(t,r,o,c){var f=Nt,y=I.transition;I.transition=null;try{Nt=1,nt(t,r,o,c)}finally{Nt=f,I.transition=y}}function Le(t,r,o,c){var f=Nt,y=I.transition;I.transition=null;try{Nt=4,nt(t,r,o,c)}finally{Nt=f,I.transition=y}}function nt(t,r,o,c){if(re){var f=Ct(t,r,o,c);if(f===null)uu(t,r,c,ct,o),no(t,c);else if(Kl(f,t,r,o,c))c.stopPropagation();else if(no(t,c),r&4&&-1<Rs.indexOf(t)){for(;f!==null;){var y=pn(f);if(y!==null&&Ps(y),y=Ct(t,r,o,c),y===null&&uu(t,r,c,ct,o),y===f)break;f=y}f!==null&&c.stopPropagation()}else uu(t,r,c,null,o)}}var ct=null;function Ct(t,r,o,c){if(ct=null,t=rt(c),t=Ln(t),t!==null)if(r=On(t),r===null)t=null;else if(o=r.tag,o===13){if(t=as(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ct=t,null}function cn(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zi()){case ni:return 1;case Vt:return 4;case Je:case ri:return 16;case ls:return 536870912;default:return 16}default:return 16}}var Kt=null,hr=null,Vn=null;function fr(){if(Vn)return Vn;var t,r=hr,o=r.length,c,f="value"in Kt?Kt.value:Kt.textContent,y=f.length;for(t=0;t<o&&r[t]===f[t];t++);var P=o-t;for(c=1;c<=P&&r[o-c]===f[y-c];c++);return Vn=f.slice(t,1<c?1-c:void 0)}function dn(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Nr(){return!0}function Zo(){return!1}function Sn(t){function r(o,c,f,y,P){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=y,this.target=P,this.currentTarget=null;for(var K in t)t.hasOwnProperty(K)&&(o=t[K],this[K]=o?o(y):y[K]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Nr:Zo,this.isPropagationStopped=Zo,this}return $(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),r}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},so=Sn(Bi),bi=$({},Bi,{view:0,detail:0}),Hd=Sn(bi),$l,Gl,ao,oo=$({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?($l=t.screenX-ao.screenX,Gl=t.screenY-ao.screenY):Gl=$l=0,ao=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:Gl}}),Yl=Sn(oo),Bd=$({},oo,{dataTransfer:0}),Ud=Sn(Bd),qd=$({},bi,{relatedTarget:0}),Vl=Sn(qd),cc=$({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Kd=Sn(cc),dc=$({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),el=Sn(dc),va=$({},Bi,{data:0}),pc=Sn(va),$d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dn(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=lo[t])?!!r[t]:!1}function Jl(){return Dn}var hc=$({},bi,{key:function(t){if(t.key){var r=$d[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=dn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(t){return t.type==="keypress"?dn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uo=Sn(hc),Yd=$({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xl=Sn(Yd),Vd=$({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),Ql=Sn(Vd),fc=$({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jd=Sn(fc),Xd=$({},oo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mc=Sn(Xd),gc=[9,13,27,32],Zl=T&&"CompositionEvent"in window,Ui=null;T&&"documentMode"in document&&(Ui=document.documentMode);var qi=T&&"TextEvent"in window&&!Ui,co=T&&(!Zl||Ui&&8<Ui&&11>=Ui),tl=" ",eu=!1;function si(t,r){switch(t){case"keyup":return gc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ds(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function Qd(t,r){switch(t){case"compositionend":return ds(r);case"keypress":return r.which!==32?null:(eu=!0,tl);case"textInput":return t=r.data,t===tl&&eu?null:t;default:return null}}function yc(t,r){if(ps)return t==="compositionend"||!Zl&&si(t,r)?(t=fr(),Vn=hr=Kt=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return co&&r.locale!=="ko"?null:r.data;default:return null}}var Zd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Zd[t.type]:r==="textarea"}function nl(t,r,o,c){xn(c),r=_a(r,"onChange"),0<r.length&&(o=new so("onChange","change",null,o,c),t.push({event:o,listeners:r}))}var wi=null,Er=null;function vc(t){pl(t,0)}function po(t){var r=Cn(t);if(Ft(r))return t}function ep(t,r){if(t==="change")return r}var xc=!1;if(T){var nu;if(T){var rl="oninput"in document;if(!rl){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),rl=typeof ru.oninput=="function"}nu=rl}else nu=!1;xc=nu&&(!document.documentMode||9<document.documentMode)}function xa(){wi&&(wi.detachEvent("onpropertychange",iu),Er=wi=null)}function iu(t){if(t.propertyName==="value"&&po(Er)){var r=[];nl(r,Er,t,rt(t)),In(vc,r)}}function bc(t,r,o){t==="focusin"?(xa(),wi=r,Er=o,wi.attachEvent("onpropertychange",iu)):t==="focusout"&&xa()}function su(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return po(Er)}function il(t,r){if(t==="click")return po(r)}function wc(t,r){if(t==="input"||t==="change")return po(r)}function sl(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var _n=typeof Object.is=="function"?Object.is:sl;function ba(t,r){if(_n(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!S.call(r,f)||!_n(t[f],r[f]))return!1}return!0}function al(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ol(t,r){var o=al(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=r&&c>=r)return{node:o,offset:r-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=al(o)}}function au(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?au(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function ou(){for(var t=window,r=Yt();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Yt(t.document)}return r}function ho(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function tp(t){var r=ou(),o=t.focusedElem,c=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&au(o.ownerDocument.documentElement,o)){if(c!==null&&ho(o)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,y=Math.min(c.start,f);c=c.end===void 0?y:Math.min(c.end,f),!t.extend&&y>c&&(f=c,c=y,y=f),f=ol(o,y);var P=ol(o,c);f&&P&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==P.node||t.focusOffset!==P.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),y>c?(t.addRange(r),t.extend(P.node,P.offset)):(r.setEnd(P.node,P.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var np=T&&"documentMode"in document&&11>=document.documentMode,wa=null,Ki=null,ki=null,hs=!1;function ll(t,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hs||wa==null||wa!==Yt(c)||(c=wa,"selectionStart"in c&&ho(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ki&&ba(ki,c)||(ki=c,c=_a(Ki,"onSelect"),0<c.length&&(r=new so("onSelect","select",null,r,o),t.push({event:r,listeners:c}),r.target=wa)))}function ka(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Ms={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},fo={},fs={};T&&(fs=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Si(t){if(fo[t])return fo[t];if(!Ms[t])return t;var r=Ms[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in fs)return fo[t]=r[o];return t}var sr=Si("animationend"),$i=Si("animationiteration"),Gi=Si("animationstart"),mo=Si("transitionend"),kc=new Map,lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,r){kc.set(t,r),b(r,[t])}for(var ul=0;ul<lu.length;ul++){var go=lu[ul],cl=go.toLowerCase(),rp=go[0].toUpperCase()+go.slice(1);Gr(cl,"on"+rp)}Gr(sr,"onAnimationEnd"),Gr($i,"onAnimationIteration"),Gr(Gi,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(mo,"onTransitionEnd"),_("onMouseEnter",["mouseout","mouseover"]),_("onMouseLeave",["mouseout","mouseover"]),_("onPointerEnter",["pointerout","pointerover"]),_("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function dl(t,r,o){var c=t.type||"unknown-event";t.currentTarget=o,ss(c,r,void 0,t),t.currentTarget=null}function pl(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],f=c.event;c=c.listeners;e:{var y=void 0;if(r)for(var P=c.length-1;0<=P;P--){var K=c[P],te=K.instance,fe=K.currentTarget;if(K=K.listener,te!==y&&f.isPropagationStopped())break e;dl(f,K,fe),y=te}else for(P=0;P<c.length;P++){if(K=c[P],te=K.instance,fe=K.currentTarget,K=K.listener,te!==y&&f.isPropagationStopped())break e;dl(f,K,fe),y=te}}}if(qr)throw t=Ir,qr=!1,Ir=null,t}function Wt(t,r){var o=r[cu];o===void 0&&(o=r[cu]=new Set);var c=t+"__bubble";o.has(c)||(_c(r,t,2,!1),o.add(c))}function Sa(t,r,o){var c=0;r&&(c|=4),_c(o,t,c,r)}var yo="_reactListening"+Math.random().toString(36).slice(2);function ms(t){if(!t[yo]){t[yo]=!0,g.forEach(function(o){o!=="selectionchange"&&(Sc.has(o)||Sa(o,!1,t),Sa(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[yo]||(r[yo]=!0,Sa("selectionchange",!1,r))}}function _c(t,r,o,c){switch(cn(r)){case 1:var f=xe;break;case 4:f=Le;break;default:f=nt}o=f.bind(null,r,o,t),f=void 0,!fi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(r,o,{capture:!0,passive:f}):t.addEventListener(r,o,!0):f!==void 0?t.addEventListener(r,o,{passive:f}):t.addEventListener(r,o,!1)}function uu(t,r,o,c,f){var y=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var P=c.tag;if(P===3||P===4){var K=c.stateNode.containerInfo;if(K===f||K.nodeType===8&&K.parentNode===f)break;if(P===4)for(P=c.return;P!==null;){var te=P.tag;if((te===3||te===4)&&(te=P.stateNode.containerInfo,te===f||te.nodeType===8&&te.parentNode===f))return;P=P.return}for(;K!==null;){if(P=Ln(K),P===null)return;if(te=P.tag,te===5||te===6){c=y=P;continue e}K=K.parentNode}}c=c.return}In(function(){var fe=y,Re=rt(o),Me=[];e:{var Pe=kc.get(t);if(Pe!==void 0){var Xe=so,it=t;switch(t){case"keypress":if(dn(o)===0)break e;case"keydown":case"keyup":Xe=uo;break;case"focusin":it="focus",Xe=Vl;break;case"focusout":it="blur",Xe=Vl;break;case"beforeblur":case"afterblur":Xe=Vl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=Yl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=Ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=Ql;break;case sr:case $i:case Gi:Xe=Kd;break;case mo:Xe=Jd;break;case"scroll":Xe=Hd;break;case"wheel":Xe=mc;break;case"copy":case"cut":case"paste":Xe=el;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=Xl}var st=(r&4)!==0,qn=!st&&t==="scroll",ue=st?Pe!==null?Pe+"Capture":null:Pe;st=[];for(var ie=fe,ce;ie!==null;){ce=ie;var We=ce.stateNode;if(ce.tag===5&&We!==null&&(ce=We,ue!==null&&(We=pr(ie,ue),We!=null&&st.push(vo(ie,We,ce)))),qn)break;ie=ie.return}0<st.length&&(Pe=new Xe(Pe,it,null,o,Re),Me.push({event:Pe,listeners:st}))}}if((r&7)===0){e:{if(Pe=t==="mouseover"||t==="pointerover",Xe=t==="mouseout"||t==="pointerout",Pe&&o!==hi&&(it=o.relatedTarget||o.fromElement)&&(Ln(it)||it[Ji]))break e;if((Xe||Pe)&&(Pe=Re.window===Re?Re:(Pe=Re.ownerDocument)?Pe.defaultView||Pe.parentWindow:window,Xe?(it=o.relatedTarget||o.toElement,Xe=fe,it=it?Ln(it):null,it!==null&&(qn=On(it),it!==qn||it.tag!==5&&it.tag!==6)&&(it=null)):(Xe=null,it=fe),Xe!==it)){if(st=Yl,We="onMouseLeave",ue="onMouseEnter",ie="mouse",(t==="pointerout"||t==="pointerover")&&(st=Xl,We="onPointerLeave",ue="onPointerEnter",ie="pointer"),qn=Xe==null?Pe:Cn(Xe),ce=it==null?Pe:Cn(it),Pe=new st(We,ie+"leave",Xe,o,Re),Pe.target=qn,Pe.relatedTarget=ce,We=null,Ln(Re)===fe&&(st=new st(ue,ie+"enter",it,o,Re),st.target=ce,st.relatedTarget=qn,We=st),qn=We,Xe&&it)t:{for(st=Xe,ue=it,ie=0,ce=st;ce;ce=gs(ce))ie++;for(ce=0,We=ue;We;We=gs(We))ce++;for(;0<ie-ce;)st=gs(st),ie--;for(;0<ce-ie;)ue=gs(ue),ce--;for(;ie--;){if(st===ue||ue!==null&&st===ue.alternate)break t;st=gs(st),ue=gs(ue)}st=null}else st=null;Xe!==null&&zs(Me,Pe,Xe,st,!1),it!==null&&qn!==null&&zs(Me,qn,it,st,!0)}}e:{if(Pe=fe?Cn(fe):window,Xe=Pe.nodeName&&Pe.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&Pe.type==="file")var lt=ep;else if(tu(Pe))if(xc)lt=wc;else{lt=su;var ht=bc}else(Xe=Pe.nodeName)&&Xe.toLowerCase()==="input"&&(Pe.type==="checkbox"||Pe.type==="radio")&&(lt=il);if(lt&&(lt=lt(t,fe))){nl(Me,lt,o,Re);break e}ht&&ht(t,Pe,fe),t==="focusout"&&(ht=Pe._wrapperState)&&ht.controlled&&Pe.type==="number"&&yt(Pe,"number",Pe.value)}switch(ht=fe?Cn(fe):window,t){case"focusin":(tu(ht)||ht.contentEditable==="true")&&(wa=ht,Ki=fe,ki=null);break;case"focusout":ki=Ki=wa=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,ll(Me,o,Re);break;case"selectionchange":if(np)break;case"keydown":case"keyup":ll(Me,o,Re)}var ft;if(Zl)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else ps?si(t,o)&&(wt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(wt="onCompositionStart");wt&&(co&&o.locale!=="ko"&&(ps||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&ps&&(ft=fr()):(Kt=Re,hr="value"in Kt?Kt.value:Kt.textContent,ps=!0)),ht=_a(fe,wt),0<ht.length&&(wt=new pc(wt,t,null,o,Re),Me.push({event:wt,listeners:ht}),ft?wt.data=ft:(ft=ds(o),ft!==null&&(wt.data=ft)))),(ft=qi?Qd(t,o):yc(t,o))&&(fe=_a(fe,"onBeforeInput"),0<fe.length&&(Re=new pc("onBeforeInput","beforeinput",null,o,Re),Me.push({event:Re,listeners:fe}),Re.data=ft))}pl(Me,r)})}function vo(t,r,o){return{instance:t,listener:r,currentTarget:o}}function _a(t,r){for(var o=r+"Capture",c=[];t!==null;){var f=t,y=f.stateNode;f.tag===5&&y!==null&&(f=y,y=pr(t,o),y!=null&&c.unshift(vo(t,y,f)),y=pr(t,r),y!=null&&c.push(vo(t,y,f))),t=t.return}return c}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zs(t,r,o,c,f){for(var y=r._reactName,P=[];o!==null&&o!==c;){var K=o,te=K.alternate,fe=K.stateNode;if(te!==null&&te===c)break;K.tag===5&&fe!==null&&(K=fe,f?(te=pr(o,y),te!=null&&P.unshift(vo(o,te,K))):f||(te=pr(o,y),te!=null&&P.push(vo(o,te,K)))),o=o.return}P.length!==0&&t.push({event:r,listeners:P})}var xo=/\r\n?/g,ip=/\u0000|\uFFFD/g;function bo(t){return(typeof t=="string"?t:""+t).replace(xo,`
`).replace(ip,"")}function wo(t,r,o){if(r=bo(r),bo(t)!==r&&o)throw Error(d(425))}function ys(){}var hl=null,Yi=null;function Fs(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,ko=typeof clearTimeout=="function"?clearTimeout:void 0,Ws=typeof Promise=="function"?Promise:void 0,Cc=typeof queueMicrotask=="function"?queueMicrotask:typeof Ws<"u"?function(t){return Ws.resolve(null).then(t).catch(Tc)}:Vi;function Tc(t){setTimeout(function(){throw t})}function fl(t,r){var o=r,c=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){t.removeChild(f),Se(r);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);Se(r)}function vs(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function xs(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),_i="__reactFiber$"+Yr,So="__reactProps$"+Yr,Ji="__reactContainer$"+Yr,cu="__reactEvents$"+Yr,sp="__reactListeners$"+Yr,ap="__reactHandles$"+Yr;function Ln(t){var r=t[_i];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Ji]||o[_i]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=xs(t);t!==null;){if(o=t[_i])return o;t=xs(t)}return r}t=o,o=t.parentNode}return null}function pn(t){return t=t[_i]||t[Ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(d(33))}function gn(t){return t[So]||null}var Hs=[],Ca=-1;function ai(t){return{current:t}}function nn(t){0>Ca||(t.current=Hs[Ca],Hs[Ca]=null,Ca--)}function Zt(t,r){Ca++,Hs[Ca]=t.current,t.current=r}var bs={},Jn=ai(bs),mr=ai(!1),Xi=bs;function Ta(t,r){var o=t.type.contextTypes;if(!o)return bs;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var f={},y;for(y in o)f[y]=r[y];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function ar(t){return t=t.childContextTypes,t!=null}function ja(){nn(mr),nn(Jn)}function du(t,r,o){if(Jn.current!==bs)throw Error(d(168));Zt(Jn,r),Zt(mr,o)}function pu(t,r,o){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in r))throw Error(d(108,we(t)||"Unknown",f));return $({},o,c)}function Na(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||bs,Xi=Jn.current,Zt(Jn,t),Zt(mr,mr.current),!0}function hu(t,r,o){var c=t.stateNode;if(!c)throw Error(d(169));o?(t=pu(t,r,Xi),c.__reactInternalMemoizedMergedChildContext=t,nn(mr),nn(Jn),Zt(Jn,t)):nn(mr),Zt(mr,o)}var zr=null,ml=!1,Ea=!1;function Ci(t){zr===null?zr=[t]:zr.push(t)}function jc(t){ml=!0,Ci(t)}function ws(){if(!Ea&&zr!==null){Ea=!0;var t=0,r=Nt;try{var o=zr;for(Nt=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}zr=null,ml=!1}catch(f){throw zr!==null&&(zr=zr.slice(t+1)),Di(ni,ws),f}finally{Nt=r,Ea=!1}}return null}var Bs=[],Xn=0,At=null,Lr=0,zn=[],Fn=0,ks=null,oi=1,Ti="";function Us(t,r){Bs[Xn++]=Lr,Bs[Xn++]=At,At=t,Lr=r}function gl(t,r,o){zn[Fn++]=oi,zn[Fn++]=Ti,zn[Fn++]=ks,ks=t;var c=oi;t=Ti;var f=32-me(c)-1;c&=~(1<<f),o+=1;var y=32-me(r)+f;if(30<y){var P=f-f%5;y=(c&(1<<P)-1).toString(32),c>>=P,f-=P,oi=1<<32-me(r)+f|o<<f|c,Ti=y+t}else oi=1<<y|o<<f|c,Ti=t}function qs(t){t.return!==null&&(Us(t,1),gl(t,1,0))}function yl(t){for(;t===At;)At=Bs[--Xn],Bs[Xn]=null,Lr=Bs[--Xn],Bs[Xn]=null;for(;t===ks;)ks=zn[--Fn],zn[Fn]=null,Ti=zn[--Fn],zn[Fn]=null,oi=zn[--Fn],zn[Fn]=null}var gr=null,Pn=null,rn=!1,Vr=null;function Nc(t,r){var o=Ri(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function _o(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,gr=t,Pn=vs(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,gr=t,Pn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ks!==null?{id:oi,overflow:Ti}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Ri(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,gr=t,Pn=null,!0):!1;default:return!1}}function Co(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vl(t){if(rn){var r=Pn;if(r){var o=r;if(!_o(t,r)){if(Co(t))throw Error(d(418));r=vs(o.nextSibling);var c=gr;r&&_o(t,r)?Nc(c,o):(t.flags=t.flags&-4097|2,rn=!1,gr=t)}}else{if(Co(t))throw Error(d(418));t.flags=t.flags&-4097|2,rn=!1,gr=t}}}function Ec(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gr=t}function To(t){if(t!==gr)return!1;if(!rn)return Ec(t),rn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Fs(t.type,t.memoizedProps)),r&&(r=Pn)){if(Co(t))throw Lc(),Error(d(418));for(;r;)Nc(t,r),r=vs(r.nextSibling)}if(Ec(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Pn=vs(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Pn=null}}else Pn=gr?vs(t.stateNode.nextSibling):null;return!0}function Lc(){for(var t=Pn;t;)t=vs(t.nextSibling)}function La(){Pn=gr=null,rn=!1}function Pa(t){Vr===null?Vr=[t]:Vr.push(t)}var Pc=H.ReactCurrentBatchConfig;function jo(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(d(309));var c=o.stateNode}if(!c)throw Error(d(147,t));var f=c,y=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===y?r.ref:(r=function(P){var K=f.refs;P===null?delete K[y]:K[y]=P},r._stringRef=y,r)}if(typeof t!="string")throw Error(d(284));if(!o._owner)throw Error(d(290,t))}return t}function xl(t,r){throw t=Object.prototype.toString.call(r),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function fu(t){var r=t._init;return r(t._payload)}function Ks(t){function r(ue,ie){if(t){var ce=ue.deletions;ce===null?(ue.deletions=[ie],ue.flags|=16):ce.push(ie)}}function o(ue,ie){if(!t)return null;for(;ie!==null;)r(ue,ie),ie=ie.sibling;return null}function c(ue,ie){for(ue=new Map;ie!==null;)ie.key!==null?ue.set(ie.key,ie):ue.set(ie.index,ie),ie=ie.sibling;return ue}function f(ue,ie){return ue=Va(ue,ie),ue.index=0,ue.sibling=null,ue}function y(ue,ie,ce){return ue.index=ce,t?(ce=ue.alternate,ce!==null?(ce=ce.index,ce<ie?(ue.flags|=2,ie):ce):(ue.flags|=2,ie)):(ue.flags|=1048576,ie)}function P(ue){return t&&ue.alternate===null&&(ue.flags|=2),ue}function K(ue,ie,ce,We){return ie===null||ie.tag!==6?(ie=xp(ce,ue.mode,We),ie.return=ue,ie):(ie=f(ie,ce),ie.return=ue,ie)}function te(ue,ie,ce,We){var lt=ce.type;return lt===V?Re(ue,ie,ce.props.children,We,ce.key):ie!==null&&(ie.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===ee&&fu(lt)===ie.type)?(We=f(ie,ce.props),We.ref=jo(ue,ie,ce),We.return=ue,We):(We=td(ce.type,ce.key,ce.props,null,ue.mode,We),We.ref=jo(ue,ie,ce),We.return=ue,We)}function fe(ue,ie,ce,We){return ie===null||ie.tag!==4||ie.stateNode.containerInfo!==ce.containerInfo||ie.stateNode.implementation!==ce.implementation?(ie=bp(ce,ue.mode,We),ie.return=ue,ie):(ie=f(ie,ce.children||[]),ie.return=ue,ie)}function Re(ue,ie,ce,We,lt){return ie===null||ie.tag!==7?(ie=qo(ce,ue.mode,We,lt),ie.return=ue,ie):(ie=f(ie,ce),ie.return=ue,ie)}function Me(ue,ie,ce){if(typeof ie=="string"&&ie!==""||typeof ie=="number")return ie=xp(""+ie,ue.mode,ce),ie.return=ue,ie;if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case Y:return ce=td(ie.type,ie.key,ie.props,null,ue.mode,ce),ce.ref=jo(ue,null,ie),ce.return=ue,ce;case pe:return ie=bp(ie,ue.mode,ce),ie.return=ue,ie;case ee:var We=ie._init;return Me(ue,We(ie._payload),ce)}if(Qe(ie)||L(ie))return ie=qo(ie,ue.mode,ce,null),ie.return=ue,ie;xl(ue,ie)}return null}function Pe(ue,ie,ce,We){var lt=ie!==null?ie.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return lt!==null?null:K(ue,ie,""+ce,We);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case Y:return ce.key===lt?te(ue,ie,ce,We):null;case pe:return ce.key===lt?fe(ue,ie,ce,We):null;case ee:return lt=ce._init,Pe(ue,ie,lt(ce._payload),We)}if(Qe(ce)||L(ce))return lt!==null?null:Re(ue,ie,ce,We,null);xl(ue,ce)}return null}function Xe(ue,ie,ce,We,lt){if(typeof We=="string"&&We!==""||typeof We=="number")return ue=ue.get(ce)||null,K(ie,ue,""+We,lt);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case Y:return ue=ue.get(We.key===null?ce:We.key)||null,te(ie,ue,We,lt);case pe:return ue=ue.get(We.key===null?ce:We.key)||null,fe(ie,ue,We,lt);case ee:var ht=We._init;return Xe(ue,ie,ce,ht(We._payload),lt)}if(Qe(We)||L(We))return ue=ue.get(ce)||null,Re(ie,ue,We,lt,null);xl(ie,We)}return null}function it(ue,ie,ce,We){for(var lt=null,ht=null,ft=ie,wt=ie=0,ur=null;ft!==null&&wt<ce.length;wt++){ft.index>wt?(ur=ft,ft=null):ur=ft.sibling;var Ht=Pe(ue,ft,ce[wt],We);if(Ht===null){ft===null&&(ft=ur);break}t&&ft&&Ht.alternate===null&&r(ue,ft),ie=y(Ht,ie,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht,ft=ur}if(wt===ce.length)return o(ue,ft),rn&&Us(ue,wt),lt;if(ft===null){for(;wt<ce.length;wt++)ft=Me(ue,ce[wt],We),ft!==null&&(ie=y(ft,ie,wt),ht===null?lt=ft:ht.sibling=ft,ht=ft);return rn&&Us(ue,wt),lt}for(ft=c(ue,ft);wt<ce.length;wt++)ur=Xe(ft,ue,wt,ce[wt],We),ur!==null&&(t&&ur.alternate!==null&&ft.delete(ur.key===null?wt:ur.key),ie=y(ur,ie,wt),ht===null?lt=ur:ht.sibling=ur,ht=ur);return t&&ft.forEach(function(Ja){return r(ue,Ja)}),rn&&Us(ue,wt),lt}function st(ue,ie,ce,We){var lt=L(ce);if(typeof lt!="function")throw Error(d(150));if(ce=lt.call(ce),ce==null)throw Error(d(151));for(var ht=lt=null,ft=ie,wt=ie=0,ur=null,Ht=ce.next();ft!==null&&!Ht.done;wt++,Ht=ce.next()){ft.index>wt?(ur=ft,ft=null):ur=ft.sibling;var Ja=Pe(ue,ft,Ht.value,We);if(Ja===null){ft===null&&(ft=ur);break}t&&ft&&Ja.alternate===null&&r(ue,ft),ie=y(Ja,ie,wt),ht===null?lt=Ja:ht.sibling=Ja,ht=Ja,ft=ur}if(Ht.done)return o(ue,ft),rn&&Us(ue,wt),lt;if(ft===null){for(;!Ht.done;wt++,Ht=ce.next())Ht=Me(ue,Ht.value,We),Ht!==null&&(ie=y(Ht,ie,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht);return rn&&Us(ue,wt),lt}for(ft=c(ue,ft);!Ht.done;wt++,Ht=ce.next())Ht=Xe(ft,ue,wt,Ht.value,We),Ht!==null&&(t&&Ht.alternate!==null&&ft.delete(Ht.key===null?wt:Ht.key),ie=y(Ht,ie,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht);return t&&ft.forEach(function(Zm){return r(ue,Zm)}),rn&&Us(ue,wt),lt}function qn(ue,ie,ce,We){if(typeof ce=="object"&&ce!==null&&ce.type===V&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case Y:e:{for(var lt=ce.key,ht=ie;ht!==null;){if(ht.key===lt){if(lt=ce.type,lt===V){if(ht.tag===7){o(ue,ht.sibling),ie=f(ht,ce.props.children),ie.return=ue,ue=ie;break e}}else if(ht.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===ee&&fu(lt)===ht.type){o(ue,ht.sibling),ie=f(ht,ce.props),ie.ref=jo(ue,ht,ce),ie.return=ue,ue=ie;break e}o(ue,ht);break}else r(ue,ht);ht=ht.sibling}ce.type===V?(ie=qo(ce.props.children,ue.mode,We,ce.key),ie.return=ue,ue=ie):(We=td(ce.type,ce.key,ce.props,null,ue.mode,We),We.ref=jo(ue,ie,ce),We.return=ue,ue=We)}return P(ue);case pe:e:{for(ht=ce.key;ie!==null;){if(ie.key===ht)if(ie.tag===4&&ie.stateNode.containerInfo===ce.containerInfo&&ie.stateNode.implementation===ce.implementation){o(ue,ie.sibling),ie=f(ie,ce.children||[]),ie.return=ue,ue=ie;break e}else{o(ue,ie);break}else r(ue,ie);ie=ie.sibling}ie=bp(ce,ue.mode,We),ie.return=ue,ue=ie}return P(ue);case ee:return ht=ce._init,qn(ue,ie,ht(ce._payload),We)}if(Qe(ce))return it(ue,ie,ce,We);if(L(ce))return st(ue,ie,ce,We);xl(ue,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,ie!==null&&ie.tag===6?(o(ue,ie.sibling),ie=f(ie,ce),ie.return=ue,ue=ie):(o(ue,ie),ie=xp(ce,ue.mode,We),ie.return=ue,ue=ie),P(ue)):o(ue,ie)}return qn}var Ss=Ks(!0),No=Ks(!1),Eo=ai(null),Aa=null,$s=null,mu=null;function bl(){mu=$s=Aa=null}function Wn(t){var r=Eo.current;nn(Eo),t._currentValue=r}function Ra(t,r,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===o)break;t=t.return}}function Gs(t,r){Aa=t,mu=$s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(er=!0),t.firstContext=null)}function Fr(t){var r=t._currentValue;if(mu!==t)if(t={context:t,memoizedValue:r,next:null},$s===null){if(Aa===null)throw Error(d(308));$s=t,Aa.dependencies={lanes:0,firstContext:t}}else $s=$s.next=t;return r}var _s=null;function Cs(t){_s===null?_s=[t]:_s.push(t)}function Lo(t,r,o,c){var f=r.interleaved;return f===null?(o.next=o,Cs(r)):(o.next=f.next,f.next=o),r.interleaved=o,ji(t,c)}function ji(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Qi=!1;function wl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ys(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function li(t,r,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(dt&2)!==0){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,ji(t,o)}return f=c.interleaved,f===null?(r.next=r,Cs(c)):(r.next=f.next,f.next=r),c.interleaved=r,ji(t,o)}function Po(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,o|=c,r.lanes=o,Wi(t,o)}}function Ia(t,r){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,y=null;if(o=o.firstBaseUpdate,o!==null){do{var P={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};y===null?f=y=P:y=y.next=P,o=o.next}while(o!==null);y===null?f=y=r:y=y.next=r}else f=y=r;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:y,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function kl(t,r,o,c){var f=t.updateQueue;Qi=!1;var y=f.firstBaseUpdate,P=f.lastBaseUpdate,K=f.shared.pending;if(K!==null){f.shared.pending=null;var te=K,fe=te.next;te.next=null,P===null?y=fe:P.next=fe,P=te;var Re=t.alternate;Re!==null&&(Re=Re.updateQueue,K=Re.lastBaseUpdate,K!==P&&(K===null?Re.firstBaseUpdate=fe:K.next=fe,Re.lastBaseUpdate=te))}if(y!==null){var Me=f.baseState;P=0,Re=fe=te=null,K=y;do{var Pe=K.lane,Xe=K.eventTime;if((c&Pe)===Pe){Re!==null&&(Re=Re.next={eventTime:Xe,lane:0,tag:K.tag,payload:K.payload,callback:K.callback,next:null});e:{var it=t,st=K;switch(Pe=r,Xe=o,st.tag){case 1:if(it=st.payload,typeof it=="function"){Me=it.call(Xe,Me,Pe);break e}Me=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=st.payload,Pe=typeof it=="function"?it.call(Xe,Me,Pe):it,Pe==null)break e;Me=$({},Me,Pe);break e;case 2:Qi=!0}}K.callback!==null&&K.lane!==0&&(t.flags|=64,Pe=f.effects,Pe===null?f.effects=[K]:Pe.push(K))}else Xe={eventTime:Xe,lane:Pe,tag:K.tag,payload:K.payload,callback:K.callback,next:null},Re===null?(fe=Re=Xe,te=Me):Re=Re.next=Xe,P|=Pe;if(K=K.next,K===null){if(K=f.shared.pending,K===null)break;Pe=K,K=Pe.next,Pe.next=null,f.lastBaseUpdate=Pe,f.shared.pending=null}}while(!0);if(Re===null&&(te=Me),f.baseState=te,f.firstBaseUpdate=fe,f.lastBaseUpdate=Re,r=f.shared.interleaved,r!==null){f=r;do P|=f.lane,f=f.next;while(f!==r)}else y===null&&(f.shared.lanes=0);kr|=P,t.lanes=P,t.memoizedState=Me}}function Vs(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(d(191,f));f.call(c)}}}var Oa={},ui=ai(Oa),Ma=ai(Oa),Zi=ai(Oa);function ci(t){if(t===Oa)throw Error(d(174));return t}function Js(t,r){switch(Zt(Zi,r),Zt(Ma,t),Zt(ui,Oa),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:at(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=at(r,t)}nn(ui),Zt(ui,r)}function Ei(){nn(ui),nn(Ma),nn(Zi)}function gu(t){ci(Zi.current);var r=ci(ui.current),o=at(r,t.type);r!==o&&(Zt(Ma,t),Zt(ui,o))}function yu(t){Ma.current===t&&(nn(ui),nn(Ma))}var ln=ai(0);function di(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ts=[];function Xs(){for(var t=0;t<Ts.length;t++)Ts[t]._workInProgressVersionPrimary=null;Ts.length=0}var Sl=H.ReactCurrentDispatcher,_l=H.ReactCurrentBatchConfig,Qs=0,hn=null,Hn=null,Ot=null,Ao=!1,Ro=!1,Io=0,op=0;function Zn(){throw Error(d(321))}function Cl(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!_n(t[o],r[o]))return!1;return!0}function Tl(t,r,o,c,f,y){if(Qs=y,hn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Sl.current=t===null||t.memoizedState===null?up:Eu,t=o(c,f),Ro){y=0;do{if(Ro=!1,Io=0,25<=y)throw Error(d(301));y+=1,Ot=Hn=null,r.updateQueue=null,Sl.current=Mo,t=o(c,f)}while(Ro)}if(Sl.current=Oo,r=Hn!==null&&Hn.next!==null,Qs=0,Ot=Hn=hn=null,Ao=!1,r)throw Error(d(300));return t}function vu(){var t=Io!==0;return Io=0,t}function Li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?hn.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Jr(){if(Hn===null){var t=hn.alternate;t=t!==null?t.memoizedState:null}else t=Hn.next;var r=Ot===null?hn.memoizedState:Ot.next;if(r!==null)Ot=r,Hn=t;else{if(t===null)throw Error(d(310));Hn=t,t={memoizedState:Hn.memoizedState,baseState:Hn.baseState,baseQueue:Hn.baseQueue,queue:Hn.queue,next:null},Ot===null?hn.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Xr(t,r){return typeof r=="function"?r(t):r}function Zs(t){var r=Jr(),o=r.queue;if(o===null)throw Error(d(311));o.lastRenderedReducer=t;var c=Hn,f=c.baseQueue,y=o.pending;if(y!==null){if(f!==null){var P=f.next;f.next=y.next,y.next=P}c.baseQueue=f=y,o.pending=null}if(f!==null){y=f.next,c=c.baseState;var K=P=null,te=null,fe=y;do{var Re=fe.lane;if((Qs&Re)===Re)te!==null&&(te=te.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),c=fe.hasEagerState?fe.eagerState:t(c,fe.action);else{var Me={lane:Re,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};te===null?(K=te=Me,P=c):te=te.next=Me,hn.lanes|=Re,kr|=Re}fe=fe.next}while(fe!==null&&fe!==y);te===null?P=c:te.next=K,_n(c,r.memoizedState)||(er=!0),r.memoizedState=c,r.baseState=P,r.baseQueue=te,o.lastRenderedState=c}if(t=o.interleaved,t!==null){f=t;do y=f.lane,hn.lanes|=y,kr|=y,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Da(t){var r=Jr(),o=r.queue;if(o===null)throw Error(d(311));o.lastRenderedReducer=t;var c=o.dispatch,f=o.pending,y=r.memoizedState;if(f!==null){o.pending=null;var P=f=f.next;do y=t(y,P.action),P=P.next;while(P!==f);_n(y,r.memoizedState)||(er=!0),r.memoizedState=y,r.baseQueue===null&&(r.baseState=y),o.lastRenderedState=y}return[y,c]}function za(){}function Pi(t,r){var o=hn,c=Jr(),f=r(),y=!_n(c.memoizedState,f);if(y&&(c.memoizedState=f,er=!0),c=c.queue,ku(ea.bind(null,o,c,t),[t]),c.getSnapshot!==r||y||Ot!==null&&Ot.memoizedState.tag&1){if(o.flags|=2048,js(9,Rc.bind(null,o,c,f,r),void 0,null),zt===null)throw Error(d(349));(Qs&30)!==0||Ac(o,r,f)}return f}function Ac(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Rc(t,r,o,c){r.value=o,r.getSnapshot=c,xu(r)&&bu(t)}function ea(t,r,o){return o(function(){xu(r)&&bu(t)})}function xu(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!_n(t,o)}catch{return!0}}function bu(t){var r=ji(t,1);r!==null&&ts(r,t,1,-1)}function wu(t){var r=Li();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:t},r.queue=t,t=t.dispatch=Tu.bind(null,hn,t),[r.memoizedState,t]}function js(t,r,o,c){return t={tag:t,create:r,destroy:o,deps:c,next:null},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,r.lastEffect=t)),t}function ta(){return Jr().memoizedState}function Fa(t,r,o,c){var f=Li();hn.flags|=t,f.memoizedState=js(1|r,o,void 0,c===void 0?null:c)}function Wa(t,r,o,c){var f=Jr();c=c===void 0?null:c;var y=void 0;if(Hn!==null){var P=Hn.memoizedState;if(y=P.destroy,c!==null&&Cl(c,P.deps)){f.memoizedState=js(r,o,y,c);return}}hn.flags|=t,f.memoizedState=js(1|r,o,y,c)}function jl(t,r){return Fa(8390656,8,t,r)}function ku(t,r){return Wa(2048,8,t,r)}function Ha(t,r){return Wa(4,2,t,r)}function Su(t,r){return Wa(4,4,t,r)}function Ic(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function _u(t,r,o){return o=o!=null?o.concat([t]):null,Wa(4,4,Ic.bind(null,r,t),o)}function Ba(){}function Oc(t,r){var o=Jr();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&Cl(r,c[1])?c[0]:(o.memoizedState=[t,r],t)}function Mc(t,r){var o=Jr();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&Cl(r,c[1])?c[0]:(t=t(),o.memoizedState=[t,r],t)}function Ua(t,r,o){return(Qs&21)===0?(t.baseState&&(t.baseState=!1,er=!0),t.memoizedState=o):(_n(o,r)||(o=eo(),hn.lanes|=o,kr|=o,t.baseState=!0),r)}function Dc(t,r){var o=Nt;Nt=o!==0&&4>o?o:4,t(!0);var c=_l.transition;_l.transition={};try{t(!1),r()}finally{Nt=o,_l.transition=c}}function Cu(){return Jr().memoizedState}function lp(t,r,o){var c=Ga(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},ju(t))zc(r,o);else if(o=Lo(t,r,o,c),o!==null){var f=Wr();ts(o,t,c,f),Nu(o,r,c)}}function Tu(t,r,o){var c=Ga(t),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(ju(t))zc(r,f);else{var y=t.alternate;if(t.lanes===0&&(y===null||y.lanes===0)&&(y=r.lastRenderedReducer,y!==null))try{var P=r.lastRenderedState,K=y(P,o);if(f.hasEagerState=!0,f.eagerState=K,_n(K,P)){var te=r.interleaved;te===null?(f.next=f,Cs(r)):(f.next=te.next,te.next=f),r.interleaved=f;return}}catch{}finally{}o=Lo(t,r,f,c),o!==null&&(f=Wr(),ts(o,t,c,f),Nu(o,r,c))}}function ju(t){var r=t.alternate;return t===hn||r!==null&&r===hn}function zc(t,r){Ro=Ao=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Nu(t,r,o){if((o&4194240)!==0){var c=r.lanes;c&=t.pendingLanes,o|=c,r.lanes=o,Wi(t,o)}}var Oo={readContext:Fr,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useInsertionEffect:Zn,useLayoutEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useMutableSource:Zn,useSyncExternalStore:Zn,useId:Zn,unstable_isNewReconciler:!1},up={readContext:Fr,useCallback:function(t,r){return Li().memoizedState=[t,r===void 0?null:r],t},useContext:Fr,useEffect:jl,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Fa(4194308,4,Ic.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Fa(4194308,4,t,r)},useInsertionEffect:function(t,r){return Fa(4,2,t,r)},useMemo:function(t,r){var o=Li();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var c=Li();return r=o!==void 0?o(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=lp.bind(null,hn,t),[c.memoizedState,t]},useRef:function(t){var r=Li();return t={current:t},r.memoizedState=t},useState:wu,useDebugValue:Ba,useDeferredValue:function(t){return Li().memoizedState=t},useTransition:function(){var t=wu(!1),r=t[0];return t=Dc.bind(null,t[1]),Li().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var c=hn,f=Li();if(rn){if(o===void 0)throw Error(d(407));o=o()}else{if(o=r(),zt===null)throw Error(d(349));(Qs&30)!==0||Ac(c,r,o)}f.memoizedState=o;var y={value:o,getSnapshot:r};return f.queue=y,jl(ea.bind(null,c,y,t),[t]),c.flags|=2048,js(9,Rc.bind(null,c,y,o,r),void 0,null),o},useId:function(){var t=Li(),r=zt.identifierPrefix;if(rn){var o=Ti,c=oi;o=(c&~(1<<32-me(c)-1)).toString(32)+o,r=":"+r+"R"+o,o=Io++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=op++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Eu={readContext:Fr,useCallback:Oc,useContext:Fr,useEffect:ku,useImperativeHandle:_u,useInsertionEffect:Ha,useLayoutEffect:Su,useMemo:Mc,useReducer:Zs,useRef:ta,useState:function(){return Zs(Xr)},useDebugValue:Ba,useDeferredValue:function(t){var r=Jr();return Ua(r,Hn.memoizedState,t)},useTransition:function(){var t=Zs(Xr)[0],r=Jr().memoizedState;return[t,r]},useMutableSource:za,useSyncExternalStore:Pi,useId:Cu,unstable_isNewReconciler:!1},Mo={readContext:Fr,useCallback:Oc,useContext:Fr,useEffect:ku,useImperativeHandle:_u,useInsertionEffect:Ha,useLayoutEffect:Su,useMemo:Mc,useReducer:Da,useRef:ta,useState:function(){return Da(Xr)},useDebugValue:Ba,useDeferredValue:function(t){var r=Jr();return Hn===null?r.memoizedState=t:Ua(r,Hn.memoizedState,t)},useTransition:function(){var t=Da(Xr)[0],r=Jr().memoizedState;return[t,r]},useMutableSource:za,useSyncExternalStore:Pi,useId:Cu,unstable_isNewReconciler:!1};function yr(t,r){if(t&&t.defaultProps){r=$({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Lu(t,r,o,c){r=t.memoizedState,o=o(c,r),o=o==null?r:$({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Do={isMounted:function(t){return(t=t._reactInternals)?On(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var c=Wr(),f=Ga(t),y=Ni(c,f);y.payload=r,o!=null&&(y.callback=o),r=li(t,y,f),r!==null&&(ts(r,t,f,c),Po(r,t,f))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var c=Wr(),f=Ga(t),y=Ni(c,f);y.tag=1,y.payload=r,o!=null&&(y.callback=o),r=li(t,y,f),r!==null&&(ts(r,t,f,c),Po(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Wr(),c=Ga(t),f=Ni(o,c);f.tag=2,r!=null&&(f.callback=r),r=li(t,f,c),r!==null&&(ts(r,t,c,o),Po(r,t,c))}};function Fc(t,r,o,c,f,y,P){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,y,P):r.prototype&&r.prototype.isPureReactComponent?!ba(o,c)||!ba(f,y):!0}function Wc(t,r,o){var c=!1,f=bs,y=r.contextType;return typeof y=="object"&&y!==null?y=Fr(y):(f=ar(r)?Xi:Jn.current,c=r.contextTypes,y=(c=c!=null)?Ta(t,f):bs),r=new r(o,y),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Do,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=y),r}function Hc(t,r,o,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==t&&Do.enqueueReplaceState(r,r.state,null)}function Pu(t,r,o,c){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},wl(t);var y=r.contextType;typeof y=="object"&&y!==null?f.context=Fr(y):(y=ar(r)?Xi:Jn.current,f.context=Ta(t,y)),f.state=t.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Lu(t,r,y,o),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&Do.enqueueReplaceState(f,f.state,null),kl(t,o,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function na(t,r){try{var o="",c=r;do o+=qe(c),c=c.return;while(c);var f=o}catch(y){f=`
Error generating stack: `+y.message+`
`+y.stack}return{value:t,source:r,stack:f,digest:null}}function Au(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function Ru(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Bc=typeof WeakMap=="function"?WeakMap:Map;function Nl(t,r,o){o=Ni(-1,o),o.tag=3,o.payload={element:null};var c=r.value;return o.callback=function(){Vc||(Vc=!0,dp=c),Ru(t,r)},o}function Iu(t,r,o){o=Ni(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;o.payload=function(){return c(f)},o.callback=function(){Ru(t,r)}}var y=t.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(o.callback=function(){Ru(t,r),typeof c!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var P=r.stack;this.componentDidCatch(r.value,{componentStack:P!==null?P:""})}),o}function Uc(t,r,o){var c=t.pingCache;if(c===null){c=t.pingCache=new Bc;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(o)||(f.add(o),t=Bm.bind(null,t,r,o),r.then(t,t))}function Ou(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function ra(t,r,o,c,f){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Ni(-1,1),r.tag=2,li(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var qc=H.ReactCurrentOwner,er=!1;function vr(t,r,o,c){r.child=t===null?No(r,null,o,c):Ss(r,t.child,o,c)}function Kc(t,r,o,c,f){o=o.render;var y=r.ref;return Gs(r,f),c=Tl(t,r,o,c,y,f),o=vu(),t!==null&&!er?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Pr(t,r,f)):(rn&&o&&qs(r),r.flags|=1,vr(t,r,c,f),r.child)}function $c(t,r,o,c,f){if(t===null){var y=o.type;return typeof y=="function"&&!vp(y)&&y.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=y,en(t,r,y,c,f)):(t=td(o.type,null,c,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(y=t.child,(t.lanes&f)===0){var P=y.memoizedProps;if(o=o.compare,o=o!==null?o:ba,o(P,c)&&t.ref===r.ref)return Pr(t,r,f)}return r.flags|=1,t=Va(y,c),t.ref=r.ref,t.return=r,r.child=t}function en(t,r,o,c,f){if(t!==null){var y=t.memoizedProps;if(ba(y,c)&&t.ref===r.ref)if(er=!1,r.pendingProps=c=y,(t.lanes&f)!==0)(t.flags&131072)!==0&&(er=!0);else return r.lanes=t.lanes,Pr(t,r,f)}return ia(t,r,o,c,f)}function Gc(t,r,o){var c=r.pendingProps,f=c.children,y=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(wr,Ut),Ut|=o;else{if((o&1073741824)===0)return t=y!==null?y.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Zt(wr,Ut),Ut|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=y!==null?y.baseLanes:o,Zt(wr,Ut),Ut|=c}else y!==null?(c=y.baseLanes|o,r.memoizedState=null):c=o,Zt(wr,Ut),Ut|=c;return vr(t,r,f,o),r.child}function El(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function ia(t,r,o,c,f){var y=ar(o)?Xi:Jn.current;return y=Ta(r,y),Gs(r,f),o=Tl(t,r,o,c,y,f),c=vu(),t!==null&&!er?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Pr(t,r,f)):(rn&&c&&qs(r),r.flags|=1,vr(t,r,o,f),r.child)}function Qr(t,r,o,c,f){if(ar(o)){var y=!0;Na(r)}else y=!1;if(Gs(r,f),r.stateNode===null)Ml(t,r),Wc(r,o,c),Pu(r,o,c,f),c=!0;else if(t===null){var P=r.stateNode,K=r.memoizedProps;P.props=K;var te=P.context,fe=o.contextType;typeof fe=="object"&&fe!==null?fe=Fr(fe):(fe=ar(o)?Xi:Jn.current,fe=Ta(r,fe));var Re=o.getDerivedStateFromProps,Me=typeof Re=="function"||typeof P.getSnapshotBeforeUpdate=="function";Me||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(K!==c||te!==fe)&&Hc(r,P,c,fe),Qi=!1;var Pe=r.memoizedState;P.state=Pe,kl(r,c,P,f),te=r.memoizedState,K!==c||Pe!==te||mr.current||Qi?(typeof Re=="function"&&(Lu(r,o,Re,c),te=r.memoizedState),(K=Qi||Fc(r,o,K,c,Pe,te,fe))?(Me||typeof P.UNSAFE_componentWillMount!="function"&&typeof P.componentWillMount!="function"||(typeof P.componentWillMount=="function"&&P.componentWillMount(),typeof P.UNSAFE_componentWillMount=="function"&&P.UNSAFE_componentWillMount()),typeof P.componentDidMount=="function"&&(r.flags|=4194308)):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=te),P.props=c,P.state=te,P.context=fe,c=K):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{P=r.stateNode,Ys(t,r),K=r.memoizedProps,fe=r.type===r.elementType?K:yr(r.type,K),P.props=fe,Me=r.pendingProps,Pe=P.context,te=o.contextType,typeof te=="object"&&te!==null?te=Fr(te):(te=ar(o)?Xi:Jn.current,te=Ta(r,te));var Xe=o.getDerivedStateFromProps;(Re=typeof Xe=="function"||typeof P.getSnapshotBeforeUpdate=="function")||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(K!==Me||Pe!==te)&&Hc(r,P,c,te),Qi=!1,Pe=r.memoizedState,P.state=Pe,kl(r,c,P,f);var it=r.memoizedState;K!==Me||Pe!==it||mr.current||Qi?(typeof Xe=="function"&&(Lu(r,o,Xe,c),it=r.memoizedState),(fe=Qi||Fc(r,o,fe,c,Pe,it,te)||!1)?(Re||typeof P.UNSAFE_componentWillUpdate!="function"&&typeof P.componentWillUpdate!="function"||(typeof P.componentWillUpdate=="function"&&P.componentWillUpdate(c,it,te),typeof P.UNSAFE_componentWillUpdate=="function"&&P.UNSAFE_componentWillUpdate(c,it,te)),typeof P.componentDidUpdate=="function"&&(r.flags|=4),typeof P.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof P.componentDidUpdate!="function"||K===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||K===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=it),P.props=c,P.state=it,P.context=te,c=fe):(typeof P.componentDidUpdate!="function"||K===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||K===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=1024),c=!1)}return qa(t,r,o,c,y,f)}function qa(t,r,o,c,f,y){El(t,r);var P=(r.flags&128)!==0;if(!c&&!P)return f&&hu(r,o,!1),Pr(t,r,y);c=r.stateNode,qc.current=r;var K=P&&typeof o.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&P?(r.child=Ss(r,t.child,null,y),r.child=Ss(r,null,K,y)):vr(t,r,K,y),r.memoizedState=c.state,f&&hu(r,o,!0),r.child}function Ll(t){var r=t.stateNode;r.pendingContext?du(t,r.pendingContext,r.pendingContext!==r.context):r.context&&du(t,r.context,!1),Js(t,r.containerInfo)}function Mu(t,r,o,c,f){return La(),Pa(f),r.flags|=256,vr(t,r,o,c),r.child}var Pl={dehydrated:null,treeContext:null,retryLane:0};function Al(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rl(t,r,o){var c=r.pendingProps,f=ln.current,y=!1,P=(r.flags&128)!==0,K;if((K=P)||(K=t!==null&&t.memoizedState===null?!1:(f&2)!==0),K?(y=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Zt(ln,f&1),t===null)return vl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(P=c.children,t=c.fallback,y?(c=r.mode,y=r.child,P={mode:"hidden",children:P},(c&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=P):y=nd(P,c,0,null),t=qo(t,c,o,null),y.return=r,t.return=r,y.sibling=t,r.child=y,r.child.memoizedState=Al(o),r.memoizedState=Pl,t):Il(r,P));if(f=t.memoizedState,f!==null&&(K=f.dehydrated,K!==null))return Du(t,r,P,c,K,f,o);if(y){y=c.fallback,P=r.mode,f=t.child,K=f.sibling;var te={mode:"hidden",children:c.children};return(P&1)===0&&r.child!==f?(c=r.child,c.childLanes=0,c.pendingProps=te,r.deletions=null):(c=Va(f,te),c.subtreeFlags=f.subtreeFlags&14680064),K!==null?y=Va(K,y):(y=qo(y,P,o,null),y.flags|=2),y.return=r,c.return=r,c.sibling=y,r.child=c,c=y,y=r.child,P=t.child.memoizedState,P=P===null?Al(o):{baseLanes:P.baseLanes|o,cachePool:null,transitions:P.transitions},y.memoizedState=P,y.childLanes=t.childLanes&~o,r.memoizedState=Pl,c}return y=t.child,t=y.sibling,c=Va(y,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=o),c.return=r,c.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=c,r.memoizedState=null,c}function Il(t,r){return r=nd({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Ol(t,r,o,c){return c!==null&&Pa(c),Ss(r,t.child,null,o),t=Il(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Du(t,r,o,c,f,y,P){if(o)return r.flags&256?(r.flags&=-257,c=Au(Error(d(422))),Ol(t,r,P,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(y=c.fallback,f=r.mode,c=nd({mode:"visible",children:c.children},f,0,null),y=qo(y,f,P,null),y.flags|=2,c.return=r,y.return=r,c.sibling=y,r.child=c,(r.mode&1)!==0&&Ss(r,t.child,null,P),r.child.memoizedState=Al(P),r.memoizedState=Pl,y);if((r.mode&1)===0)return Ol(t,r,P,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var K=c.dgst;return c=K,y=Error(d(419)),c=Au(y,c,void 0),Ol(t,r,P,c)}if(K=(P&t.childLanes)!==0,er||K){if(c=zt,c!==null){switch(P&-P){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|P))!==0?0:f,f!==0&&f!==y.retryLane&&(y.retryLane=f,ji(t,f),ts(c,t,f,-1))}return yp(),c=Au(Error(d(421))),Ol(t,r,P,c)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=Um.bind(null,t),f._reactRetry=r,null):(t=y.treeContext,Pn=vs(f.nextSibling),gr=r,rn=!0,Vr=null,t!==null&&(zn[Fn++]=oi,zn[Fn++]=Ti,zn[Fn++]=ks,oi=t.id,Ti=t.overflow,ks=r),r=Il(r,c.children),r.flags|=4096,r)}function zu(t,r,o){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),Ra(t.return,r,o)}function Mt(t,r,o,c,f){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=c,y.tail=o,y.tailMode=f)}function Fu(t,r,o){var c=r.pendingProps,f=c.revealOrder,y=c.tail;if(vr(t,r,c.children,o),c=ln.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zu(t,o,r);else if(t.tag===19)zu(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Zt(ln,c),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(o=r.child,f=null;o!==null;)t=o.alternate,t!==null&&di(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Mt(r,!1,f,o,y);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&di(t)===null){r.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Mt(r,!0,o,null,y);break;case"together":Mt(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ml(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Pr(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),kr|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(d(153));if(r.child!==null){for(t=r.child,o=Va(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Va(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function cp(t,r,o){switch(r.tag){case 3:Ll(r),La();break;case 5:gu(r);break;case 1:ar(r.type)&&Na(r);break;case 4:Js(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,f=r.memoizedProps.value;Zt(Eo,c._currentValue),c._currentValue=f;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Zt(ln,ln.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Rl(t,r,o):(Zt(ln,ln.current&1),t=Pr(t,r,o),t!==null?t.sibling:null);Zt(ln,ln.current&1);break;case 19:if(c=(o&r.childLanes)!==0,(t.flags&128)!==0){if(c)return Fu(t,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Zt(ln,ln.current),c)break;return null;case 22:case 23:return r.lanes=0,Gc(t,r,o)}return Pr(t,r,o)}var zo,Wu,fn,Yc;zo=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Wu=function(){},fn=function(t,r,o,c){var f=t.memoizedProps;if(f!==c){t=r.stateNode,ci(ui.current);var y=null;switch(o){case"input":f=_t(t,f),c=_t(t,c),y=[];break;case"select":f=$({},f,{value:void 0}),c=$({},c,{value:void 0}),y=[];break;case"textarea":f=ae(t,f),c=ae(t,c),y=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=ys)}Ur(o,c);var P;o=null;for(fe in f)if(!c.hasOwnProperty(fe)&&f.hasOwnProperty(fe)&&f[fe]!=null)if(fe==="style"){var K=f[fe];for(P in K)K.hasOwnProperty(P)&&(o||(o={}),o[P]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(x.hasOwnProperty(fe)?y||(y=[]):(y=y||[]).push(fe,null));for(fe in c){var te=c[fe];if(K=f!=null?f[fe]:void 0,c.hasOwnProperty(fe)&&te!==K&&(te!=null||K!=null))if(fe==="style")if(K){for(P in K)!K.hasOwnProperty(P)||te&&te.hasOwnProperty(P)||(o||(o={}),o[P]="");for(P in te)te.hasOwnProperty(P)&&K[P]!==te[P]&&(o||(o={}),o[P]=te[P])}else o||(y||(y=[]),y.push(fe,o)),o=te;else fe==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,K=K?K.__html:void 0,te!=null&&K!==te&&(y=y||[]).push(fe,te)):fe==="children"?typeof te!="string"&&typeof te!="number"||(y=y||[]).push(fe,""+te):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(x.hasOwnProperty(fe)?(te!=null&&fe==="onScroll"&&Wt("scroll",t),y||K===te||(y=[])):(y=y||[]).push(fe,te))}o&&(y=y||[]).push("style",o);var fe=y;(r.updateQueue=fe)&&(r.flags|=4)}},Yc=function(t,r,o,c){o!==c&&(r.flags|=4)};function Fo(t,r){if(!rn)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function or(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(r)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=o,r}function Dl(t,r,o){var c=r.pendingProps;switch(yl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return or(r),null;case 1:return ar(r.type)&&ja(),or(r),null;case 3:return c=r.stateNode,Ei(),nn(mr),nn(Jn),Xs(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(To(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vr!==null&&(fp(Vr),Vr=null))),Wu(t,r),or(r),null;case 5:yu(r);var f=ci(Zi.current);if(o=r.type,t!==null&&r.stateNode!=null)fn(t,r,o,c,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(d(166));return or(r),null}if(t=ci(ui.current),To(r)){c=r.stateNode,o=r.type;var y=r.memoizedProps;switch(c[_i]=r,c[So]=y,t=(r.mode&1)!==0,o){case"dialog":Wt("cancel",c),Wt("close",c);break;case"iframe":case"object":case"embed":Wt("load",c);break;case"video":case"audio":for(f=0;f<Ds.length;f++)Wt(Ds[f],c);break;case"source":Wt("error",c);break;case"img":case"image":case"link":Wt("error",c),Wt("load",c);break;case"details":Wt("toggle",c);break;case"input":xt(c,y),Wt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!y.multiple},Wt("invalid",c);break;case"textarea":je(c,y),Wt("invalid",c)}Ur(o,y),f=null;for(var P in y)if(y.hasOwnProperty(P)){var K=y[P];P==="children"?typeof K=="string"?c.textContent!==K&&(y.suppressHydrationWarning!==!0&&wo(c.textContent,K,t),f=["children",K]):typeof K=="number"&&c.textContent!==""+K&&(y.suppressHydrationWarning!==!0&&wo(c.textContent,K,t),f=["children",""+K]):x.hasOwnProperty(P)&&K!=null&&P==="onScroll"&&Wt("scroll",c)}switch(o){case"input":$e(c),vt(c,y,!0);break;case"textarea":$e(c),kt(c);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(c.onclick=ys)}c=f,r.updateQueue=c,c!==null&&(r.flags|=4)}else{P=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ye(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=P.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=P.createElement(o,{is:c.is}):(t=P.createElement(o),o==="select"&&(P=t,c.multiple?P.multiple=!0:c.size&&(P.size=c.size))):t=P.createElementNS(t,o),t[_i]=r,t[So]=c,zo(t,r,!1,!1),r.stateNode=t;e:{switch(P=bt(o,c),o){case"dialog":Wt("cancel",t),Wt("close",t),f=c;break;case"iframe":case"object":case"embed":Wt("load",t),f=c;break;case"video":case"audio":for(f=0;f<Ds.length;f++)Wt(Ds[f],t);f=c;break;case"source":Wt("error",t),f=c;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),f=c;break;case"details":Wt("toggle",t),f=c;break;case"input":xt(t,c),f=_t(t,c),Wt("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=$({},c,{value:void 0}),Wt("invalid",t);break;case"textarea":je(t,c),f=ae(t,c),Wt("invalid",t);break;default:f=c}Ur(o,f),K=f;for(y in K)if(K.hasOwnProperty(y)){var te=K[y];y==="style"?Rr(t,te):y==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,te!=null&&mt(t,te)):y==="children"?typeof te=="string"?(o!=="textarea"||te!=="")&&pt(t,te):typeof te=="number"&&pt(t,""+te):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(x.hasOwnProperty(y)?te!=null&&y==="onScroll"&&Wt("scroll",t):te!=null&&q(t,y,te,P))}switch(o){case"input":$e(t),vt(t,c,!1);break;case"textarea":$e(t),kt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Be(c.value));break;case"select":t.multiple=!!c.multiple,y=c.value,y!=null?ut(t,!!c.multiple,y,!1):c.defaultValue!=null&&ut(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=ys)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return or(r),null;case 6:if(t&&r.stateNode!=null)Yc(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(d(166));if(o=ci(Zi.current),ci(ui.current),To(r)){if(c=r.stateNode,o=r.memoizedProps,c[_i]=r,(y=c.nodeValue!==o)&&(t=gr,t!==null))switch(t.tag){case 3:wo(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wo(c.nodeValue,o,(t.mode&1)!==0)}y&&(r.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[_i]=r,r.stateNode=c}return or(r),null;case 13:if(nn(ln),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rn&&Pn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Lc(),La(),r.flags|=98560,y=!1;else if(y=To(r),c!==null&&c.dehydrated!==null){if(t===null){if(!y)throw Error(d(318));if(y=r.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(d(317));y[_i]=r}else La(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;or(r),y=!1}else Vr!==null&&(fp(Vr),Vr=null),y=!0;if(!y)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(ln.current&1)!==0?Lt===0&&(Lt=3):yp())),r.updateQueue!==null&&(r.flags|=4),or(r),null);case 4:return Ei(),Wu(t,r),t===null&&ms(r.stateNode.containerInfo),or(r),null;case 10:return Wn(r.type._context),or(r),null;case 17:return ar(r.type)&&ja(),or(r),null;case 19:if(nn(ln),y=r.memoizedState,y===null)return or(r),null;if(c=(r.flags&128)!==0,P=y.rendering,P===null)if(c)Fo(y,!1);else{if(Lt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(P=di(t),P!==null){for(r.flags|=128,Fo(y,!1),c=P.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=o,o=r.child;o!==null;)y=o,t=c,y.flags&=14680066,P=y.alternate,P===null?(y.childLanes=0,y.lanes=t,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=P.childLanes,y.lanes=P.lanes,y.child=P.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=P.memoizedProps,y.memoizedState=P.memoizedState,y.updateQueue=P.updateQueue,y.type=P.type,t=P.dependencies,y.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Zt(ln,ln.current&1|2),r.child}t=t.sibling}y.tail!==null&&Rt()>zl&&(r.flags|=128,c=!0,Fo(y,!1),r.lanes=4194304)}else{if(!c)if(t=di(P),t!==null){if(r.flags|=128,c=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Fo(y,!0),y.tail===null&&y.tailMode==="hidden"&&!P.alternate&&!rn)return or(r),null}else 2*Rt()-y.renderingStartTime>zl&&o!==1073741824&&(r.flags|=128,c=!0,Fo(y,!1),r.lanes=4194304);y.isBackwards?(P.sibling=r.child,r.child=P):(o=y.last,o!==null?o.sibling=P:r.child=P,y.last=P)}return y.tail!==null?(r=y.tail,y.rendering=r,y.tail=r.sibling,y.renderingStartTime=Rt(),r.sibling=null,o=ln.current,Zt(ln,c?o&1|2:o&1),r):(or(r),null);case 22:case 23:return gp(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(Ut&1073741824)!==0&&(or(r),r.subtreeFlags&6&&(r.flags|=8192)):or(r),null;case 24:return null;case 25:return null}throw Error(d(156,r.tag))}function e(t,r){switch(yl(r),r.tag){case 1:return ar(r.type)&&ja(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ei(),nn(mr),nn(Jn),Xs(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return yu(r),null;case 13:if(nn(ln),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(d(340));La()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return nn(ln),null;case 4:return Ei(),null;case 10:return Wn(r.type._context),null;case 22:case 23:return gp(),null;case 24:return null;default:return null}}var n=!1,s=!1,i=typeof WeakSet=="function"?WeakSet:Set,a=null;function h(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Rn(t,r,c)}else o.current=null}function m(t,r,o){try{o()}catch(c){Rn(t,r,c)}}var v=!1;function w(t,r){if(hl=re,t=ou(),ho(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,y=c.focusNode;c=c.focusOffset;try{o.nodeType,y.nodeType}catch{o=null;break e}var P=0,K=-1,te=-1,fe=0,Re=0,Me=t,Pe=null;t:for(;;){for(var Xe;Me!==o||f!==0&&Me.nodeType!==3||(K=P+f),Me!==y||c!==0&&Me.nodeType!==3||(te=P+c),Me.nodeType===3&&(P+=Me.nodeValue.length),(Xe=Me.firstChild)!==null;)Pe=Me,Me=Xe;for(;;){if(Me===t)break t;if(Pe===o&&++fe===f&&(K=P),Pe===y&&++Re===c&&(te=P),(Xe=Me.nextSibling)!==null)break;Me=Pe,Pe=Me.parentNode}Me=Xe}o=K===-1||te===-1?null:{start:K,end:te}}else o=null}o=o||{start:0,end:0}}else o=null;for(Yi={focusedElem:t,selectionRange:o},re=!1,a=r;a!==null;)if(r=a,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,a=t;else for(;a!==null;){r=a;try{var it=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var st=it.memoizedProps,qn=it.memoizedState,ue=r.stateNode,ie=ue.getSnapshotBeforeUpdate(r.elementType===r.type?st:yr(r.type,st),qn);ue.__reactInternalSnapshotBeforeUpdate=ie}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(We){Rn(r,r.return,We)}if(t=r.sibling,t!==null){t.return=r.return,a=t;break}a=r.return}return it=v,v=!1,it}function k(t,r,o){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var y=f.destroy;f.destroy=void 0,y!==void 0&&m(r,o,y)}f=f.next}while(f!==c)}}function z(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==r)}}function U(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function se(t){var r=t.alternate;r!==null&&(t.alternate=null,se(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[_i],delete r[So],delete r[cu],delete r[sp],delete r[ap])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ne(t){return t.tag===5||t.tag===3||t.tag===4}function ge(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ne(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function be(t,r,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=ys));else if(c!==4&&(t=t.child,t!==null))for(be(t,r,o),t=t.sibling;t!==null;)be(t,r,o),t=t.sibling}function Ae(t,r,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Ae(t,r,o),t=t.sibling;t!==null;)Ae(t,r,o),t=t.sibling}var Ee=null,Fe=!1;function De(t,r,o){for(o=o.child;o!==null;)Ge(t,r,o),o=o.sibling}function Ge(t,r,o){if(C&&typeof C.onCommitFiberUnmount=="function")try{C.onCommitFiberUnmount(Yn,o)}catch{}switch(o.tag){case 5:s||h(o,r);case 6:var c=Ee,f=Fe;Ee=null,De(t,r,o),Ee=c,Fe=f,Ee!==null&&(Fe?(t=Ee,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ee.removeChild(o.stateNode));break;case 18:Ee!==null&&(Fe?(t=Ee,o=o.stateNode,t.nodeType===8?fl(t.parentNode,o):t.nodeType===1&&fl(t,o),Se(t)):fl(Ee,o.stateNode));break;case 4:c=Ee,f=Fe,Ee=o.stateNode.containerInfo,Fe=!0,De(t,r,o),Ee=c,Fe=f;break;case 0:case 11:case 14:case 15:if(!s&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var y=f,P=y.destroy;y=y.tag,P!==void 0&&((y&2)!==0||(y&4)!==0)&&m(o,r,P),f=f.next}while(f!==c)}De(t,r,o);break;case 1:if(!s&&(h(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(K){Rn(o,r,K)}De(t,r,o);break;case 21:De(t,r,o);break;case 22:o.mode&1?(s=(c=s)||o.memoizedState!==null,De(t,r,o),s=c):De(t,r,o);break;default:De(t,r,o)}}function ot(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new i),r.forEach(function(c){var f=qm.bind(null,t,c);o.has(c)||(o.add(c),c.then(f,f))})}}function Ve(t,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var y=t,P=r,K=P;e:for(;K!==null;){switch(K.tag){case 5:Ee=K.stateNode,Fe=!1;break e;case 3:Ee=K.stateNode.containerInfo,Fe=!0;break e;case 4:Ee=K.stateNode.containerInfo,Fe=!0;break e}K=K.return}if(Ee===null)throw Error(d(160));Ge(y,P,f),Ee=null,Fe=!1;var te=f.alternate;te!==null&&(te.return=null),f.return=null}catch(fe){Rn(f,r,fe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)St(r,t),r=r.sibling}function St(t,r){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ve(r,t),Et(t),c&4){try{k(3,t,t.return),z(3,t)}catch(st){Rn(t,t.return,st)}try{k(5,t,t.return)}catch(st){Rn(t,t.return,st)}}break;case 1:Ve(r,t),Et(t),c&512&&o!==null&&h(o,o.return);break;case 5:if(Ve(r,t),Et(t),c&512&&o!==null&&h(o,o.return),t.flags&32){var f=t.stateNode;try{pt(f,"")}catch(st){Rn(t,t.return,st)}}if(c&4&&(f=t.stateNode,f!=null)){var y=t.memoizedProps,P=o!==null?o.memoizedProps:y,K=t.type,te=t.updateQueue;if(t.updateQueue=null,te!==null)try{K==="input"&&y.type==="radio"&&y.name!=null&&tt(f,y),bt(K,P);var fe=bt(K,y);for(P=0;P<te.length;P+=2){var Re=te[P],Me=te[P+1];Re==="style"?Rr(f,Me):Re==="dangerouslySetInnerHTML"?mt(f,Me):Re==="children"?pt(f,Me):q(f,Re,Me,fe)}switch(K){case"input":Ue(f,y);break;case"textarea":he(f,y);break;case"select":var Pe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!y.multiple;var Xe=y.value;Xe!=null?ut(f,!!y.multiple,Xe,!1):Pe!==!!y.multiple&&(y.defaultValue!=null?ut(f,!!y.multiple,y.defaultValue,!0):ut(f,!!y.multiple,y.multiple?[]:"",!1))}f[So]=y}catch(st){Rn(t,t.return,st)}}break;case 6:if(Ve(r,t),Et(t),c&4){if(t.stateNode===null)throw Error(d(162));f=t.stateNode,y=t.memoizedProps;try{f.nodeValue=y}catch(st){Rn(t,t.return,st)}}break;case 3:if(Ve(r,t),Et(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Se(r.containerInfo)}catch(st){Rn(t,t.return,st)}break;case 4:Ve(r,t),Et(t);break;case 13:Ve(r,t),Et(t),f=t.child,f.flags&8192&&(y=f.memoizedState!==null,f.stateNode.isHidden=y,!y||f.alternate!==null&&f.alternate.memoizedState!==null||(Wo=Rt())),c&4&&ot(t);break;case 22:if(Re=o!==null&&o.memoizedState!==null,t.mode&1?(s=(fe=s)||Re,Ve(r,t),s=fe):Ve(r,t),Et(t),c&8192){if(fe=t.memoizedState!==null,(t.stateNode.isHidden=fe)&&!Re&&(t.mode&1)!==0)for(a=t,Re=t.child;Re!==null;){for(Me=a=Re;a!==null;){switch(Pe=a,Xe=Pe.child,Pe.tag){case 0:case 11:case 14:case 15:k(4,Pe,Pe.return);break;case 1:h(Pe,Pe.return);var it=Pe.stateNode;if(typeof it.componentWillUnmount=="function"){c=Pe,o=Pe.return;try{r=c,it.props=r.memoizedProps,it.state=r.memoizedState,it.componentWillUnmount()}catch(st){Rn(c,o,st)}}break;case 5:h(Pe,Pe.return);break;case 22:if(Pe.memoizedState!==null){lr(Me);continue}}Xe!==null?(Xe.return=Pe,a=Xe):lr(Me)}Re=Re.sibling}e:for(Re=null,Me=t;;){if(Me.tag===5){if(Re===null){Re=Me;try{f=Me.stateNode,fe?(y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(K=Me.stateNode,te=Me.memoizedProps.style,P=te!=null&&te.hasOwnProperty("display")?te.display:null,K.style.display=Sr("display",P))}catch(st){Rn(t,t.return,st)}}}else if(Me.tag===6){if(Re===null)try{Me.stateNode.nodeValue=fe?"":Me.memoizedProps}catch(st){Rn(t,t.return,st)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===t)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===t)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===t)break e;Re===Me&&(Re=null),Me=Me.return}Re===Me&&(Re=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Ve(r,t),Et(t),c&4&&ot(t);break;case 21:break;default:Ve(r,t),Et(t)}}function Et(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(ne(o)){var c=o;break e}o=o.return}throw Error(d(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(pt(f,""),c.flags&=-33);var y=ge(t);Ae(t,y,f);break;case 3:case 4:var P=c.stateNode.containerInfo,K=ge(t);be(t,K,P);break;default:throw Error(d(161))}}catch(te){Rn(t,t.return,te)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Bn(t,r,o){a=t,sn(t)}function sn(t,r,o){for(var c=(t.mode&1)!==0;a!==null;){var f=a,y=f.child;if(f.tag===22&&c){var P=f.memoizedState!==null||n;if(!P){var K=f.alternate,te=K!==null&&K.memoizedState!==null||s;K=n;var fe=s;if(n=P,(s=te)&&!fe)for(a=f;a!==null;)P=a,te=P.child,P.tag===22&&P.memoizedState!==null?yn(f):te!==null?(te.return=P,a=te):yn(f);for(;y!==null;)a=y,sn(y),y=y.sibling;a=f,n=K,s=fe}xr(t)}else(f.subtreeFlags&8772)!==0&&y!==null?(y.return=f,a=y):xr(t)}}function xr(t){for(;a!==null;){var r=a;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:s||z(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!s)if(o===null)c.componentDidMount();else{var f=r.elementType===r.type?o.memoizedProps:yr(r.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var y=r.updateQueue;y!==null&&Vs(r,y,c);break;case 3:var P=r.updateQueue;if(P!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Vs(r,P,o)}break;case 5:var K=r.stateNode;if(o===null&&r.flags&4){o=K;var te=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":te.autoFocus&&o.focus();break;case"img":te.src&&(o.src=te.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var fe=r.alternate;if(fe!==null){var Re=fe.memoizedState;if(Re!==null){var Me=Re.dehydrated;Me!==null&&Se(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}s||r.flags&512&&U(r)}catch(Pe){Rn(r,r.return,Pe)}}if(r===t){a=null;break}if(o=r.sibling,o!==null){o.return=r.return,a=o;break}a=r.return}}function lr(t){for(;a!==null;){var r=a;if(r===t){a=null;break}var o=r.sibling;if(o!==null){o.return=r.return,a=o;break}a=r.return}}function yn(t){for(;a!==null;){var r=a;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{z(4,r)}catch(te){Rn(r,o,te)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var f=r.return;try{c.componentDidMount()}catch(te){Rn(r,f,te)}}var y=r.return;try{U(r)}catch(te){Rn(r,y,te)}break;case 5:var P=r.return;try{U(r)}catch(te){Rn(r,P,te)}}}catch(te){Rn(r,r.return,te)}if(r===t){a=null;break}var K=r.sibling;if(K!==null){K.return=r.return,a=K;break}a=r.return}}var br=Math.ceil,Tn=H.ReactCurrentDispatcher,vn=H.ReactCurrentOwner,Dt=H.ReactCurrentBatchConfig,dt=0,zt=null,an=null,un=0,Ut=0,wr=ai(0),Lt=0,sa=null,kr=0,Ai=0,es=0,An=null,Un=null,Wo=0,zl=1/0,aa=null,Vc=!1,dp=null,Ka=null,Jc=!1,$a=null,Xc=0,Hu=0,pp=null,Qc=-1,Zc=0;function Wr(){return(dt&6)!==0?Rt():Qc!==-1?Qc:Qc=Rt()}function Ga(t){return(t.mode&1)===0?1:(dt&2)!==0&&un!==0?un&-un:Pc.transition!==null?(Zc===0&&(Zc=eo()),Zc):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:cn(t.type)),t)}function ts(t,r,o,c){if(50<Hu)throw Hu=0,pp=null,Error(d(185));rr(t,o,c),((dt&2)===0||t!==zt)&&(t===zt&&((dt&2)===0&&(Ai|=o),Lt===4&&Ya(t,un)),Zr(t,c),o===1&&dt===0&&(r.mode&1)===0&&(zl=Rt()+500,ml&&ws()))}function Zr(t,r){var o=t.callbackNode;gt(t,r);var c=Kr(t,t===zt?un:0);if(c===0)o!==null&&Bt(o),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(o!=null&&Bt(o),r===1)t.tag===0?jc(wh.bind(null,t)):Ci(wh.bind(null,t)),Cc(function(){(dt&6)===0&&ws()}),o=null;else{switch(us(c)){case 1:o=ni;break;case 4:o=Vt;break;case 16:o=Je;break;case 536870912:o=ls;break;default:o=Je}o=Eh(o,bh.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function bh(t,r){if(Qc=-1,Zc=0,(dt&6)!==0)throw Error(d(327));var o=t.callbackNode;if(Fl()&&t.callbackNode!==o)return null;var c=Kr(t,t===zt?un:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||r)r=ed(t,c);else{r=c;var f=dt;dt|=2;var y=Sh();(zt!==t||un!==r)&&(aa=null,zl=Rt()+500,Bo(t,r));do try{Wm();break}catch(K){kh(t,K)}while(!0);bl(),Tn.current=y,dt=f,an!==null?r=0:(zt=null,un=0,r=Lt)}if(r!==0){if(r===2&&(f=Za(t),f!==0&&(c=f,r=hp(t,f))),r===1)throw o=sa,Bo(t,0),Ya(t,c),Zr(t,Rt()),o;if(r===6)Ya(t,c);else{if(f=t.current.alternate,(c&30)===0&&!zm(f)&&(r=ed(t,c),r===2&&(y=Za(t),y!==0&&(c=y,r=hp(t,y))),r===1))throw o=sa,Bo(t,0),Ya(t,c),Zr(t,Rt()),o;switch(t.finishedWork=f,t.finishedLanes=c,r){case 0:case 1:throw Error(d(345));case 2:Uo(t,Un,aa);break;case 3:if(Ya(t,c),(c&130023424)===c&&(r=Wo+500-Rt(),10<r)){if(Kr(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Wr(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Vi(Uo.bind(null,t,Un,aa),r);break}Uo(t,Un,aa);break;case 4:if(Ya(t,c),(c&4194240)===c)break;for(r=t.eventTimes,f=-1;0<c;){var P=31-me(c);y=1<<P,P=r[P],P>f&&(f=P),c&=~y}if(c=f,c=Rt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*br(c/1960))-c,10<c){t.timeoutHandle=Vi(Uo.bind(null,t,Un,aa),c);break}Uo(t,Un,aa);break;case 5:Uo(t,Un,aa);break;default:throw Error(d(329))}}}return Zr(t,Rt()),t.callbackNode===o?bh.bind(null,t):null}function hp(t,r){var o=An;return t.current.memoizedState.isDehydrated&&(Bo(t,r).flags|=256),t=ed(t,r),t!==2&&(r=Un,Un=o,r!==null&&fp(r)),t}function fp(t){Un===null?Un=t:Un.push.apply(Un,t)}function zm(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],y=f.getSnapshot;f=f.value;try{if(!_n(y(),f))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ya(t,r){for(r&=~es,r&=~Ai,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-me(r),c=1<<o;t[o]=-1,r&=~c}}function wh(t){if((dt&6)!==0)throw Error(d(327));Fl();var r=Kr(t,0);if((r&1)===0)return Zr(t,Rt()),null;var o=ed(t,r);if(t.tag!==0&&o===2){var c=Za(t);c!==0&&(r=c,o=hp(t,c))}if(o===1)throw o=sa,Bo(t,0),Ya(t,r),Zr(t,Rt()),o;if(o===6)throw Error(d(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Uo(t,Un,aa),Zr(t,Rt()),null}function mp(t,r){var o=dt;dt|=1;try{return t(r)}finally{dt=o,dt===0&&(zl=Rt()+500,ml&&ws())}}function Ho(t){$a!==null&&$a.tag===0&&(dt&6)===0&&Fl();var r=dt;dt|=1;var o=Dt.transition,c=Nt;try{if(Dt.transition=null,Nt=1,t)return t()}finally{Nt=c,Dt.transition=o,dt=r,(dt&6)===0&&ws()}}function gp(){Ut=wr.current,nn(wr)}function Bo(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,ko(o)),an!==null)for(o=an.return;o!==null;){var c=o;switch(yl(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ja();break;case 3:Ei(),nn(mr),nn(Jn),Xs();break;case 5:yu(c);break;case 4:Ei();break;case 13:nn(ln);break;case 19:nn(ln);break;case 10:Wn(c.type._context);break;case 22:case 23:gp()}o=o.return}if(zt=t,an=t=Va(t.current,null),un=Ut=r,Lt=0,sa=null,es=Ai=kr=0,Un=An=null,_s!==null){for(r=0;r<_s.length;r++)if(o=_s[r],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,y=o.pending;if(y!==null){var P=y.next;y.next=f,c.next=P}o.pending=c}_s=null}return t}function kh(t,r){do{var o=an;try{if(bl(),Sl.current=Oo,Ao){for(var c=hn.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Ao=!1}if(Qs=0,Ot=Hn=hn=null,Ro=!1,Io=0,vn.current=null,o===null||o.return===null){Lt=1,sa=r,an=null;break}e:{var y=t,P=o.return,K=o,te=r;if(r=un,K.flags|=32768,te!==null&&typeof te=="object"&&typeof te.then=="function"){var fe=te,Re=K,Me=Re.tag;if((Re.mode&1)===0&&(Me===0||Me===11||Me===15)){var Pe=Re.alternate;Pe?(Re.updateQueue=Pe.updateQueue,Re.memoizedState=Pe.memoizedState,Re.lanes=Pe.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Xe=Ou(P);if(Xe!==null){Xe.flags&=-257,ra(Xe,P,K,y,r),Xe.mode&1&&Uc(y,fe,r),r=Xe,te=fe;var it=r.updateQueue;if(it===null){var st=new Set;st.add(te),r.updateQueue=st}else it.add(te);break e}else{if((r&1)===0){Uc(y,fe,r),yp();break e}te=Error(d(426))}}else if(rn&&K.mode&1){var qn=Ou(P);if(qn!==null){(qn.flags&65536)===0&&(qn.flags|=256),ra(qn,P,K,y,r),Pa(na(te,K));break e}}y=te=na(te,K),Lt!==4&&(Lt=2),An===null?An=[y]:An.push(y),y=P;do{switch(y.tag){case 3:y.flags|=65536,r&=-r,y.lanes|=r;var ue=Nl(y,te,r);Ia(y,ue);break e;case 1:K=te;var ie=y.type,ce=y.stateNode;if((y.flags&128)===0&&(typeof ie.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Ka===null||!Ka.has(ce)))){y.flags|=65536,r&=-r,y.lanes|=r;var We=Iu(y,K,r);Ia(y,We);break e}}y=y.return}while(y!==null)}Ch(o)}catch(lt){r=lt,an===o&&o!==null&&(an=o=o.return);continue}break}while(!0)}function Sh(){var t=Tn.current;return Tn.current=Oo,t===null?Oo:t}function yp(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),zt===null||(kr&268435455)===0&&(Ai&268435455)===0||Ya(zt,un)}function ed(t,r){var o=dt;dt|=2;var c=Sh();(zt!==t||un!==r)&&(aa=null,Bo(t,r));do try{Fm();break}catch(f){kh(t,f)}while(!0);if(bl(),dt=o,Tn.current=c,an!==null)throw Error(d(261));return zt=null,un=0,Lt}function Fm(){for(;an!==null;)_h(an)}function Wm(){for(;an!==null&&!Mr();)_h(an)}function _h(t){var r=Nh(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,r===null?Ch(t):an=r,vn.current=null}function Ch(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=Dl(o,r,Ut),o!==null){an=o;return}}else{if(o=e(o,r),o!==null){o.flags&=32767,an=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,an=null;return}}if(r=r.sibling,r!==null){an=r;return}an=r=t}while(r!==null);Lt===0&&(Lt=5)}function Uo(t,r,o){var c=Nt,f=Dt.transition;try{Dt.transition=null,Nt=1,Hm(t,r,o,c)}finally{Dt.transition=f,Nt=c}return null}function Hm(t,r,o,c){do Fl();while($a!==null);if((dt&6)!==0)throw Error(d(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(d(177));t.callbackNode=null,t.callbackPriority=0;var y=o.lanes|o.childLanes;if(to(t,y),t===zt&&(an=zt=null,un=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Jc||(Jc=!0,Eh(Je,function(){return Fl(),null})),y=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||y){y=Dt.transition,Dt.transition=null;var P=Nt;Nt=1;var K=dt;dt|=4,vn.current=null,w(t,o),St(o,t),tp(Yi),re=!!hl,Yi=hl=null,t.current=o,Bn(o),os(),dt=K,Nt=P,Dt.transition=y}else t.current=o;if(Jc&&(Jc=!1,$a=t,Xc=f),y=t.pendingLanes,y===0&&(Ka=null),B(o.stateNode),Zr(t,Rt()),r!==null)for(c=t.onRecoverableError,o=0;o<r.length;o++)f=r[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Vc)throw Vc=!1,t=dp,dp=null,t;return(Xc&1)!==0&&t.tag!==0&&Fl(),y=t.pendingLanes,(y&1)!==0?t===pp?Hu++:(Hu=0,pp=t):Hu=0,ws(),null}function Fl(){if($a!==null){var t=us(Xc),r=Dt.transition,o=Nt;try{if(Dt.transition=null,Nt=16>t?16:t,$a===null)var c=!1;else{if(t=$a,$a=null,Xc=0,(dt&6)!==0)throw Error(d(331));var f=dt;for(dt|=4,a=t.current;a!==null;){var y=a,P=y.child;if((a.flags&16)!==0){var K=y.deletions;if(K!==null){for(var te=0;te<K.length;te++){var fe=K[te];for(a=fe;a!==null;){var Re=a;switch(Re.tag){case 0:case 11:case 15:k(8,Re,y)}var Me=Re.child;if(Me!==null)Me.return=Re,a=Me;else for(;a!==null;){Re=a;var Pe=Re.sibling,Xe=Re.return;if(se(Re),Re===fe){a=null;break}if(Pe!==null){Pe.return=Xe,a=Pe;break}a=Xe}}}var it=y.alternate;if(it!==null){var st=it.child;if(st!==null){it.child=null;do{var qn=st.sibling;st.sibling=null,st=qn}while(st!==null)}}a=y}}if((y.subtreeFlags&2064)!==0&&P!==null)P.return=y,a=P;else e:for(;a!==null;){if(y=a,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:k(9,y,y.return)}var ue=y.sibling;if(ue!==null){ue.return=y.return,a=ue;break e}a=y.return}}var ie=t.current;for(a=ie;a!==null;){P=a;var ce=P.child;if((P.subtreeFlags&2064)!==0&&ce!==null)ce.return=P,a=ce;else e:for(P=ie;a!==null;){if(K=a,(K.flags&2048)!==0)try{switch(K.tag){case 0:case 11:case 15:z(9,K)}}catch(lt){Rn(K,K.return,lt)}if(K===P){a=null;break e}var We=K.sibling;if(We!==null){We.return=K.return,a=We;break e}a=K.return}}if(dt=f,ws(),C&&typeof C.onPostCommitFiberRoot=="function")try{C.onPostCommitFiberRoot(Yn,t)}catch{}c=!0}return c}finally{Nt=o,Dt.transition=r}}return!1}function Th(t,r,o){r=na(o,r),r=Nl(t,r,1),t=li(t,r,1),r=Wr(),t!==null&&(rr(t,1,r),Zr(t,r))}function Rn(t,r,o){if(t.tag===3)Th(t,t,o);else for(;r!==null;){if(r.tag===3){Th(r,t,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ka===null||!Ka.has(c))){t=na(o,t),t=Iu(r,t,1),r=li(r,t,1),t=Wr(),r!==null&&(rr(r,1,t),Zr(r,t));break}}r=r.return}}function Bm(t,r,o){var c=t.pingCache;c!==null&&c.delete(r),r=Wr(),t.pingedLanes|=t.suspendedLanes&o,zt===t&&(un&o)===o&&(Lt===4||Lt===3&&(un&130023424)===un&&500>Rt()-Wo?Bo(t,0):es|=o),Zr(t,r)}function jh(t,r){r===0&&((t.mode&1)===0?r=1:(r=Qt,Qt<<=1,(Qt&130023424)===0&&(Qt=4194304)));var o=Wr();t=ji(t,r),t!==null&&(rr(t,r,o),Zr(t,o))}function Um(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),jh(t,o)}function qm(t,r){var o=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(d(314))}c!==null&&c.delete(r),jh(t,o)}var Nh;Nh=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||mr.current)er=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return er=!1,cp(t,r,o);er=(t.flags&131072)!==0}else er=!1,rn&&(r.flags&1048576)!==0&&gl(r,Lr,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Ml(t,r),t=r.pendingProps;var f=Ta(r,Jn.current);Gs(r,o),f=Tl(null,r,c,t,f,o);var y=vu();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ar(c)?(y=!0,Na(r)):y=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,wl(r),f.updater=Do,r.stateNode=f,f._reactInternals=r,Pu(r,c,t,o),r=qa(null,r,c,!0,y,o)):(r.tag=0,rn&&y&&qs(r),vr(null,r,f,o),r=r.child),r;case 16:c=r.elementType;e:{switch(Ml(t,r),t=r.pendingProps,f=c._init,c=f(c._payload),r.type=c,f=r.tag=$m(c),t=yr(c,t),f){case 0:r=ia(null,r,c,t,o);break e;case 1:r=Qr(null,r,c,t,o);break e;case 11:r=Kc(null,r,c,t,o);break e;case 14:r=$c(null,r,c,yr(c.type,t),o);break e}throw Error(d(306,c,""))}return r;case 0:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:yr(c,f),ia(t,r,c,f,o);case 1:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:yr(c,f),Qr(t,r,c,f,o);case 3:e:{if(Ll(r),t===null)throw Error(d(387));c=r.pendingProps,y=r.memoizedState,f=y.element,Ys(t,r),kl(r,c,null,o);var P=r.memoizedState;if(c=P.element,y.isDehydrated)if(y={element:c,isDehydrated:!1,cache:P.cache,pendingSuspenseBoundaries:P.pendingSuspenseBoundaries,transitions:P.transitions},r.updateQueue.baseState=y,r.memoizedState=y,r.flags&256){f=na(Error(d(423)),r),r=Mu(t,r,c,o,f);break e}else if(c!==f){f=na(Error(d(424)),r),r=Mu(t,r,c,o,f);break e}else for(Pn=vs(r.stateNode.containerInfo.firstChild),gr=r,rn=!0,Vr=null,o=No(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(La(),c===f){r=Pr(t,r,o);break e}vr(t,r,c,o)}r=r.child}return r;case 5:return gu(r),t===null&&vl(r),c=r.type,f=r.pendingProps,y=t!==null?t.memoizedProps:null,P=f.children,Fs(c,f)?P=null:y!==null&&Fs(c,y)&&(r.flags|=32),El(t,r),vr(t,r,P,o),r.child;case 6:return t===null&&vl(r),null;case 13:return Rl(t,r,o);case 4:return Js(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=Ss(r,null,c,o):vr(t,r,c,o),r.child;case 11:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:yr(c,f),Kc(t,r,c,f,o);case 7:return vr(t,r,r.pendingProps,o),r.child;case 8:return vr(t,r,r.pendingProps.children,o),r.child;case 12:return vr(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(c=r.type._context,f=r.pendingProps,y=r.memoizedProps,P=f.value,Zt(Eo,c._currentValue),c._currentValue=P,y!==null)if(_n(y.value,P)){if(y.children===f.children&&!mr.current){r=Pr(t,r,o);break e}}else for(y=r.child,y!==null&&(y.return=r);y!==null;){var K=y.dependencies;if(K!==null){P=y.child;for(var te=K.firstContext;te!==null;){if(te.context===c){if(y.tag===1){te=Ni(-1,o&-o),te.tag=2;var fe=y.updateQueue;if(fe!==null){fe=fe.shared;var Re=fe.pending;Re===null?te.next=te:(te.next=Re.next,Re.next=te),fe.pending=te}}y.lanes|=o,te=y.alternate,te!==null&&(te.lanes|=o),Ra(y.return,o,r),K.lanes|=o;break}te=te.next}}else if(y.tag===10)P=y.type===r.type?null:y.child;else if(y.tag===18){if(P=y.return,P===null)throw Error(d(341));P.lanes|=o,K=P.alternate,K!==null&&(K.lanes|=o),Ra(P,o,r),P=y.sibling}else P=y.child;if(P!==null)P.return=y;else for(P=y;P!==null;){if(P===r){P=null;break}if(y=P.sibling,y!==null){y.return=P.return,P=y;break}P=P.return}y=P}vr(t,r,f.children,o),r=r.child}return r;case 9:return f=r.type,c=r.pendingProps.children,Gs(r,o),f=Fr(f),c=c(f),r.flags|=1,vr(t,r,c,o),r.child;case 14:return c=r.type,f=yr(c,r.pendingProps),f=yr(c.type,f),$c(t,r,c,f,o);case 15:return en(t,r,r.type,r.pendingProps,o);case 17:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:yr(c,f),Ml(t,r),r.tag=1,ar(c)?(t=!0,Na(r)):t=!1,Gs(r,o),Wc(r,c,f),Pu(r,c,f,o),qa(null,r,c,!0,t,o);case 19:return Fu(t,r,o);case 22:return Gc(t,r,o)}throw Error(d(156,r.tag))};function Eh(t,r){return Di(t,r)}function Km(t,r,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(t,r,o,c){return new Km(t,r,o,c)}function vp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $m(t){if(typeof t=="function")return vp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ce)return 11;if(t===E)return 14}return 2}function Va(t,r){var o=t.alternate;return o===null?(o=Ri(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function td(t,r,o,c,f,y){var P=2;if(c=t,typeof t=="function")vp(t)&&(P=1);else if(typeof t=="string")P=5;else e:switch(t){case V:return qo(o.children,f,y,r);case ye:P=8,f|=8;break;case ze:return t=Ri(12,o,r,f|2),t.elementType=ze,t.lanes=y,t;case le:return t=Ri(13,o,r,f),t.elementType=le,t.lanes=y,t;case ve:return t=Ri(19,o,r,f),t.elementType=ve,t.lanes=y,t;case Q:return nd(o,f,y,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _e:P=10;break e;case oe:P=9;break e;case Ce:P=11;break e;case E:P=14;break e;case ee:P=16,c=null;break e}throw Error(d(130,t==null?t:typeof t,""))}return r=Ri(P,o,r,f),r.elementType=t,r.type=c,r.lanes=y,r}function qo(t,r,o,c){return t=Ri(7,t,c,r),t.lanes=o,t}function nd(t,r,o,c){return t=Ri(22,t,c,r),t.elementType=Q,t.lanes=o,t.stateNode={isHidden:!1},t}function xp(t,r,o){return t=Ri(6,t,null,r),t.lanes=o,t}function bp(t,r,o){return r=Ri(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Gm(t,r,o,c,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function wp(t,r,o,c,f,y,P,K,te){return t=new Gm(t,r,o,K,te),r===1?(r=1,y===!0&&(r|=8)):r=0,y=Ri(3,null,null,r),t.current=y,y.stateNode=t,y.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},wl(y),t}function Ym(t,r,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pe,key:c==null?null:""+c,children:t,containerInfo:r,implementation:o}}function Lh(t){if(!t)return bs;t=t._reactInternals;e:{if(On(t)!==t||t.tag!==1)throw Error(d(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ar(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(d(171))}if(t.tag===1){var o=t.type;if(ar(o))return pu(t,o,r)}return r}function Ph(t,r,o,c,f,y,P,K,te){return t=wp(o,c,!0,t,f,y,P,K,te),t.context=Lh(null),o=t.current,c=Wr(),f=Ga(o),y=Ni(c,f),y.callback=r??null,li(o,y,f),t.current.lanes=f,rr(t,f,c),Zr(t,c),t}function rd(t,r,o,c){var f=r.current,y=Wr(),P=Ga(f);return o=Lh(o),r.context===null?r.context=o:r.pendingContext=o,r=Ni(y,P),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=li(f,r,P),t!==null&&(ts(t,f,P,y),Po(t,f,P)),P}function id(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ah(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function kp(t,r){Ah(t,r),(t=t.alternate)&&Ah(t,r)}function Vm(){return null}var Rh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sp(t){this._internalRoot=t}sd.prototype.render=Sp.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(d(409));rd(t,r,null,null)},sd.prototype.unmount=Sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Ho(function(){rd(null,t,null,null)}),r[Ji]=null}};function sd(t){this._internalRoot=t}sd.prototype.unstable_scheduleHydration=function(t){if(t){var r=vi();t={blockedOn:null,target:t,priority:r};for(var o=0;o<jr.length&&r!==0&&r<jr[o].priority;o++);jr.splice(o,0,t),o===0&&ro(t)}};function _p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ad(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ih(){}function Jm(t,r,o,c,f){if(f){if(typeof c=="function"){var y=c;c=function(){var fe=id(P);y.call(fe)}}var P=Ph(r,c,t,0,null,!1,!1,"",Ih);return t._reactRootContainer=P,t[Ji]=P.current,ms(t.nodeType===8?t.parentNode:t),Ho(),P}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var K=c;c=function(){var fe=id(te);K.call(fe)}}var te=wp(t,0,!1,null,null,!1,!1,"",Ih);return t._reactRootContainer=te,t[Ji]=te.current,ms(t.nodeType===8?t.parentNode:t),Ho(function(){rd(r,te,o,c)}),te}function od(t,r,o,c,f){var y=o._reactRootContainer;if(y){var P=y;if(typeof f=="function"){var K=f;f=function(){var te=id(P);K.call(te)}}rd(r,P,t,f)}else P=Jm(o,r,t,f,c);return id(P)}Ps=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=kn(r.pendingLanes);o!==0&&(Wi(r,o|1),Zr(r,Rt()),(dt&6)===0&&(zl=Rt()+500,ws()))}break;case 13:Ho(function(){var c=ji(t,1);if(c!==null){var f=Wr();ts(c,t,1,f)}}),kp(t,1)}},yi=function(t){if(t.tag===13){var r=ji(t,134217728);if(r!==null){var o=Wr();ts(r,t,134217728,o)}kp(t,134217728)}},ga=function(t){if(t.tag===13){var r=Ga(t),o=ji(t,r);if(o!==null){var c=Wr();ts(o,t,r,c)}kp(t,r)}},vi=function(){return Nt},Hi=function(t,r){var o=Nt;try{return Nt=t,r()}finally{Nt=o}},_r=function(t,r,o){switch(r){case"input":if(Ue(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==t&&c.form===t.form){var f=gn(c);if(!f)throw Error(d(90));Ft(c),Ue(c,f)}}}break;case"textarea":he(t,o);break;case"select":r=o.value,r!=null&&ut(t,!!o.multiple,r,!1)}},Nn=mp,bn=Ho;var Xm={usingClientEntryPoint:!1,Events:[pn,Cn,gn,xn,mn,mp]},Bu={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qm={bundleType:Bu.bundleType,version:Bu.version,rendererPackageName:Bu.rendererPackageName,rendererConfig:Bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gn(t),t===null?null:t.stateNode},findFiberByHostInstance:Bu.findFiberByHostInstance||Vm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ld=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ld.isDisabled&&ld.supportsFiber)try{Yn=ld.inject(Qm),C=ld}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xm,ei.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_p(r))throw Error(d(200));return Ym(t,r,null,o)},ei.createRoot=function(t,r){if(!_p(t))throw Error(d(299));var o=!1,c="",f=Rh;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=wp(t,1,!1,null,null,o,!1,c,f),t[Ji]=r.current,ms(t.nodeType===8?t.parentNode:t),new Sp(r)},ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=Gn(r),t=t===null?null:t.stateNode,t},ei.flushSync=function(t){return Ho(t)},ei.hydrate=function(t,r,o){if(!ad(r))throw Error(d(200));return od(null,t,r,!0,o)},ei.hydrateRoot=function(t,r,o){if(!_p(t))throw Error(d(405));var c=o!=null&&o.hydratedSources||null,f=!1,y="",P=Rh;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(y=o.identifierPrefix),o.onRecoverableError!==void 0&&(P=o.onRecoverableError)),r=Ph(r,null,t,1,o??null,f,!1,y,P),t[Ji]=r.current,ms(t),c)for(t=0;t<c.length;t++)o=c[t],f=o._getVersion,f=f(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,f]:r.mutableSourceEagerHydrationData.push(o,f);return new sd(r)},ei.render=function(t,r,o){if(!ad(r))throw Error(d(200));return od(null,t,r,!1,o)},ei.unmountComponentAtNode=function(t){if(!ad(t))throw Error(d(40));return t._reactRootContainer?(Ho(function(){od(null,null,t,!1,function(){t._reactRootContainer=null,t[Ji]=null})}),!0):!1},ei.unstable_batchedUpdates=mp,ei.unstable_renderSubtreeIntoContainer=function(t,r,o,c){if(!ad(o))throw Error(d(200));if(t==null||t._reactInternals===void 0)throw Error(d(38));return od(t,r,o,!1,c)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var Bh;function ug(){if(Bh)return jp.exports;Bh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),jp.exports=lg(),jp.exports}var Uh;function cg(){if(Uh)return ud;Uh=1;var l=ug();return ud.createRoot=l.createRoot,ud.hydrateRoot=l.hydrateRoot,ud}var dg=cg();const pg=[["Avery","Morgan","averym","Avery","p1"],["Jordan","Brooks","jbrooks17","Jordan Brooks","p1"],["Taylor","Reed","treed","T. Reed","p1"],["Casey","Nguyen","cnguyen","Casey","p1"],["Riley","Davis","rileyd","Riley","p1"],["Maya","Patel","maya-p","Maya","p3"],["Cameron","Lee","clee","Cameron Lee","p3"],["Sydney","Wilson","sydneyw","Sydney","p3"],["Quinn","Martinez","qmartinez","Quinn","p3"],["Bailey","Adams","bailey_a","Bailey","p5"],["Sam","Rivera","rivera-s","Sam","p5"],["Charlie","Brown","charlieb","Charlie","p6"],["Drew","Johnson","drewj","Drew","p6"],["Alex","Kim","alexk","Alex","p7"],["Robin","Clark","robin-c","Robin","p7"],["Jamie","Flores","jflores","Jamie","p8"]],bd=pg.map(([l,u,d,g,x],b)=>({id:`sample-${b+1}`,first:l,last:u,sheetName:b===3||b===11?null:`${l} ${u}`,github:d,studentName:g,sections:b===0?["p1","p3"]:[x],status:b%5===0?"Active now":b%4===0?"Viewing page":"No recent signal",current:b%3===0?"Strings and Variables":b%3===1?"Format a Summary":"Intro to Arrays",assignments:[{id:"strings",name:"Strings and Variables",type:"Lesson",status:"Completed",score:b%4===0?null:8+b%3,possible:10,submitted:"2026-11-02"},{id:"summary",name:"Format a Summary",type:"Challenge",status:b%4===0?"Started":"Completed",score:b%4===0?null:11+b%5,possible:15,submitted:"2026-11-03"},{id:"decisions",name:"Decision Tree",type:"Challenge",status:b%3===0?"Submitted":"Needs revision",score:b%3===0?10:null,possible:20,submitted:"2026-10-28"},{id:"reflection",name:"Debugging Reflection",type:"Lesson",status:"Practice completed",score:null,possible:5,submitted:"2026-10-26"}],weekly:{"2026-11-02":b%4===0?0:19+b%6,"2026-10-26":b%3===0?12:8+b%5}})),hg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function wd(l=new Date){const u=Object.fromEntries(hg.formatToParts(l).filter(g=>g.type!=="literal").map(g=>[g.type,g.value])),d=new Date(Date.UTC(Number(u.year),Number(u.month)-1,Number(u.day)));return d.setUTCDate(d.getUTCDate()-(d.getUTCDay()+6)%7),d.toISOString().slice(0,10)}function fg(l=new Date,u=8){const d=new Date(wd(l)+"T12:00:00Z");return Array.from({length:u},(g,x)=>{const b=new Date(d);return b.setUTCDate(b.getUTCDate()-x*7),b.toISOString().slice(0,10)})}const Qu=l=>new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"America/Chicago"}),mg=(l,u,d)=>`${l}|${u}|${d}`;function gg({response:l,type:u,aiUse:d,aiDetails:g}){return["essay","logic-puzzle"].includes(u)?String(l).trim().length<10?"Write your answer and explain your thinking.":["none","disclosed"].includes(d)?d==="disclosed"&&String(g).trim().length<5?"Describe which parts involved AI.":"":"Complete the AI-use declaration.":"Select an essay or logic puzzle."}const yg=[{id:"seed-journal-1",sectionId:"p1",studentId:"sample-2",studentName:"Jordan Brooks",courseId:"computer-science-1",week:wd(),type:"essay",response:"When I debug code, I first reproduce the problem and read the error carefully. Next I try one small change and test again. I keep notes so I can explain what fixed the problem and why.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()},{id:"seed-journal-2",sectionId:"p1",studentId:"sample-3",studentName:"Taylor Reed",courseId:"computer-science-1",week:wd(),type:"logic-puzzle",response:"The differences are 4, 6, 8, and 10. The next difference is 12, so the next number is 42. This also follows the pattern n(n+1), starting at n = 1.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()}],Ns={"game-programming":[{id:"csharp-foundations",title:"C# Foundations",description:"Build the logic behind games.",lessons:["csharp-variables","csharp-conditionals"]},{id:"unity-systems",title:"Unity Gameplay",description:"Connect scripts and game mechanics.",lessons:["unity-colliders","unity-player-controller","unity-score"]}],"mobile-app-dev":[{id:"web-basics",title:"Web Foundations",description:"Create and style interface elements.",lessons:["web-layout","web-events"]},{id:"react-foundations",title:"React Essentials",description:"Build reusable and interactive UI.",lessons:["react-components","react-state"]}],uil:[{id:"java-language",title:"Java Language & Tracing",description:"Reason about loops and variables.",lessons:["uil-loops","uil-methods"]},{id:"java-data",title:"Data Structures",description:"Trace arrays and string operations.",lessons:["uil-arrays","uil-strings"]}],"tsi-math":[{id:"tsi-quantitative",title:"Quantitative Reasoning",description:"Rates, ratios, percentages, and proportions.",lessons:["tsi-ratios","tsi-percents"]},{id:"tsi-algebra",title:"Algebraic Reasoning",description:"Solve equations and interpret graphs.",lessons:["tsi-equations","tsi-slope"]}],capstone:[{id:"capstone-discover",title:"Discover the Problem",description:"Investigate a need worth solving.",lessons:["capstone-discovery","capstone-interviews"]},{id:"capstone-validate",title:"Prototype & Validate",description:"Turn evidence into an iterated prototype.",lessons:["capstone-prototype","capstone-feedback"]}]},sc=[{id:"asvab",title:"ASVAB",subtitle:"Military aptitude",description:"Start with the four AFQT subjects; technical subtests can be added later.",reference:"https://www.officialasvab.com/applicants/sample-questions/",topics:[{id:"asvab-ar",title:"Arithmetic Reasoning",description:"Use math to solve everyday word problems.",questions:[{id:"asvab-ar-sample-01",prompt:"A supply team divides 96 bolts equally among 8 tool kits. How many bolts go into each kit?",options:["8","10","12","16"],correct:2,explanation:"Divide 96 by 8. Each tool kit receives 12 bolts."},{id:"asvab-ar-sample-02",prompt:"A delivery vehicle travels 180 miles in 3 hours at a steady speed. What is its average speed?",options:["45 mph","60 mph","75 mph","90 mph"],correct:1,explanation:"Average speed equals distance divided by time: 180 ÷ 3 = 60 mph."}]},{id:"asvab-wk",title:"Word Knowledge",description:"Practice synonyms and vocabulary in context.",questions:[{id:"asvab-wk-sample-01",prompt:'In the sentence "The technician was meticulous when checking each connection," meticulous most nearly means:',options:["hurried","careful","uninterested","unprepared"],correct:1,explanation:"Meticulous describes someone who gives careful attention to detail."},{id:"asvab-wk-sample-02",prompt:'The word "scarce" most nearly means:',options:["plentiful","fragile","limited","unusual"],correct:2,explanation:"If something is scarce, there is not much of it available."}]},{id:"asvab-pc",title:"Paragraph Comprehension",description:"Identify main ideas and supporting details.",questions:[{id:"asvab-pc-sample-01",prompt:"Passage: The neighborhood library added Saturday hours because weekday attendance had increased. Staff hope the extra day will help working families visit. Why did the library extend its schedule?",options:["To replace weekday hours","To make visits easier for more people","To reduce staff","To host only weekend events"],correct:1,explanation:"The passage says Saturday hours respond to demand and help working families visit."},{id:"asvab-pc-sample-02",prompt:"Passage: Before using the lab, workers inspect equipment, record damaged items, and report problems. This routine helps prevent interruptions and injuries. What is the main purpose of the routine?",options:["Improving safety and reliability","Making the lab look new","Reducing all written records","Increasing equipment costs"],correct:0,explanation:"The checklist catches problems early and lowers risk to people and equipment."}]},{id:"asvab-mk",title:"Mathematics Knowledge",description:"Review algebra, geometry, and number sense.",questions:[{id:"asvab-mk-sample-01",prompt:"Solve for x: 3(x − 2) = 15.",options:["3","5","7","9"],correct:2,explanation:"Divide by 3: x − 2 = 5. Add 2: x = 7."},{id:"asvab-mk-sample-02",prompt:"What is the area of a triangle with a base of 10 units and a height of 7 units?",options:["17 square units","35 square units","70 square units","140 square units"],correct:1,explanation:"Triangle area is one-half times base times height: (10 × 7) ÷ 2 = 35."}]}]},{id:"sat",title:"SAT",subtitle:"Digital SAT",description:"Practice the Reading and Writing and Math sections. These samples are not adaptive and do not produce SAT scores.",reference:"https://satsuite.collegeboard.org/sat/practice-preparation",topics:[{id:"sat-rw",title:"Reading and Writing",description:"Interpret short passages, revise sentences, and choose transitions.",questions:[{id:"sat-rw-sample-01",prompt:'Choose the best transition: "Maya planned to bike to school. _____, heavy rain forced her to take the bus."',options:["For example","However","Similarly","Therefore"],correct:1,explanation:"However signals the contrast between Maya's plan and what happened."},{id:"sat-rw-sample-02",prompt:"Choose the grammatically correct sentence.",options:["Each of the notebooks have a label.","Each of the notebooks has a label.","Each of the notebooks are labeled.","Each of the notebook have labels."],correct:1,explanation:"The subject each is singular, so it takes has."}]},{id:"sat-math",title:"Math",description:"Use algebra and problem-solving strategies.",questions:[{id:"sat-math-sample-01",prompt:"If f(x) = 2x + 5, what is f(4)?",options:["9","11","13","18"],correct:2,explanation:"Substitute 4 for x: f(4) = 2(4) + 5 = 13."},{id:"sat-math-sample-02",prompt:"If 2x + y = 11 and y = 3, what is x?",options:["3","4","5","7"],correct:1,explanation:"Replace y with 3: 2x + 3 = 11, so 2x = 8 and x = 4."}]}]},{id:"act",title:"ACT",subtitle:"Enhanced ACT",description:"Practice English, Math, Reading, and optional Science using the updated ACT structure.",reference:"https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/act-exam-sections-and-structure.html",topics:[{id:"act-english",title:"English",description:"Revise sentences for grammar and clarity.",questions:[{id:"act-english-sample-01",prompt:'Choose the correct verb: "The team of engineers _____ ready to begin."',options:["are","is","were","have"],correct:1,explanation:"The singular subject team takes the singular verb is."},{id:"act-english-sample-02",prompt:"Choose the correctly punctuated sentence.",options:["After the storm the street was quiet.","After the storm, the street was quiet.","After, the storm the street was quiet.","After the storm the, street was quiet."],correct:1,explanation:"An introductory phrase is commonly followed by a comma."}]},{id:"act-math",title:"Math",description:"Practice algebra, geometry, and problem solving.",questions:[{id:"act-math-sample-01",prompt:"What is the slope of the line through (2, 1) and (6, 9)?",options:["1","2","4","8"],correct:1,explanation:"Slope = change in y ÷ change in x = (9 − 1) ÷ (6 − 2) = 8 ÷ 4 = 2."},{id:"act-math-sample-02",prompt:"A rectangle measures 8 inches by 5 inches. What is its perimeter?",options:["13 inches","26 inches","40 inches","80 inches"],correct:1,explanation:"Perimeter = 2(length + width) = 2(8 + 5) = 26 inches."}]},{id:"act-reading",title:"Reading",description:"Find key details and reasonable inferences.",questions:[{id:"act-reading-sample-01",prompt:"Passage: Lena repaired an old bicycle rather than buy a new one. She replaced the chain and adjusted the brakes so she could use it to commute. Which statement is supported?",options:["Lena sold the bike.","Lena intends to ride the repaired bike.","Lena cannot fix brakes.","Lena purchased a new bike."],correct:1,explanation:"The passage explicitly says Lena repaired the bike to use it for commuting."},{id:"act-reading-sample-02",prompt:"Passage: Residents created a neighborhood garden on an empty lot. Volunteers donated seeds, installed raised beds, and shared the harvest. What best describes the project?",options:["A commercial farm run by one company","A volunteer project that benefits neighbors","A plan to close the lot permanently","An indoor science experiment"],correct:1,explanation:"The volunteers worked together on a shared garden and harvest."}]},{id:"act-science",title:"Science (optional)",description:"Interpret experimental results, charts, and evidence.",questions:[{id:"act-science-sample-01",prompt:"In an experiment, a plant grew 2 cm at 10°C, 4 cm at 20°C, and 6 cm at 30°C over the same period. What pattern is shown?",options:["Growth decreases as temperature increases.","Growth remains constant.","Growth increases with temperature in these trials.","Temperature has no measurable relationship."],correct:2,explanation:"The recorded growth rises from 2 to 4 to 6 cm as temperature increases across these trials."},{id:"act-science-sample-02",prompt:"Two identical seedlings get the same light and water. One receives fertilizer and the other does not. Which variable is intentionally changed?",options:["Amount of light","Amount of water","Type of plant","Use of fertilizer"],correct:3,explanation:"Fertilizer is the independent variable; the other conditions are kept the same."}]}]}],qh=sc.map(l=>({id:l.id,title:l.title,description:l.description,lessons:l.topics.map(u=>u.id)})),vg=Object.fromEntries(sc.flatMap(l=>l.topics.map(u=>[u.id,{id:u.id,title:u.title,summary:u.description,language:"text",kind:"Sample practice",trackId:l.id}]))),xg=l=>{for(const u of sc){const d=u.topics.find(g=>g.id===l);if(d)return{track:u,topic:d}}return null};sc.reduce((l,u)=>l+u.topics.reduce((d,g)=>d+g.questions.length,0),0);const bg=[{id:"01-how-programs-work/01-first-message",unit:1,unitName:"How Programs Work",lesson:1,slug:"01-first-message",title:"Instructions and output",concept:"Output and strings",summary:"Tell a computer what to display using a simple Python instruction.",mode:"script",starter:`# Use print() to display the exact welcome message.
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
`}],wg=[{id:"02-values-and-variables/01-meet-variables",unit:2,unitName:"Values, Variables & Expressions",lesson:1,slug:"01-meet-variables",title:"Names for changing information",concept:"Variables and assignment  ",summary:"Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.",mode:"script",starter:`# Name the player with a variable, then display the required message.
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
`}],kg=[{id:"03-functions-and-parameters/01-functions-return",unit:3,unitName:"Functions, Parameters & Return Values",lesson:1,slug:"01-functions-return",title:"Returning an answer",concept:"Function definitions and return  ",summary:"A function packages instructions into a reusable operation. A function can give a result back with `return`.",mode:"function",starter:`def increment_number(number):
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
`}],Sg=[{id:"04-comparisons-and-boolean-logic/01-comparisons",unit:4,unitName:"Comparisons & Boolean Logic",lesson:1,slug:"01-comparisons",title:"Ask Python a question",concept:"Comparison operators and Boolean values  ",summary:"A comparison is a question that evaluates to a Boolean value: `True` or `False`.",mode:"function",starter:`def has_required_points(current, required):
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
`}],_g=[{id:"05-conditional-execution/01-first-if",unit:5,unitName:"Conditional Execution",lesson:1,slug:"01-first-if",title:"Make a choice with if",concept:"If statements and indentation  ",summary:"Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.",mode:"function",starter:`def classify_temperature(temperature):
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
`}],Cg=[{id:"06-iteration/01-for-ranges",unit:6,unitName:"Iteration & Accumulation",lesson:1,slug:"01-for-ranges",title:"Repeat an instruction",concept:"For loops and ranges  ",summary:"A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.",mode:"script",starter:`# Use one loop to print the integers 1 through 4.
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
`}],Tg=[{id:"07-strings-and-text/01-index-and-length",unit:7,unitName:"Strings & Text Processing",lesson:1,slug:"01-index-and-length",title:"Read characters by position",concept:"String indexing and length",summary:"A string is an ordered sequence of characters. Positions start at zero, and negative indexes count from the end.",mode:"function",starter:`def edge_letters(text):
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
`}],jg=[{id:"08-lists-and-collections/01-list-indexing",unit:8,unitName:"Lists & Collections",lesson:1,slug:"01-list-indexing",title:"Read values from a list",concept:"Lists, indexes, negative positions",summary:"A list stores several values in order, and each can be read using its position.",mode:"function",starter:`def end_points(values):
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
`}],Ng=[{id:"09-dictionaries-and-data/01-keys-and-values",unit:9,unitName:"Dictionaries & Data",lesson:1,slug:"01-keys-and-values",title:"Look up information by key",concept:"Dictionary lookup and get",summary:"Dictionaries connect unique keys with values, letting a program retrieve information by name.",mode:"function",starter:`def price_for(prices, item):
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
`}],Eg=[{id:"10-algorithms-and-testing/01-while-and-sentinels",unit:10,unitName:"Algorithms & Testing",lesson:1,slug:"01-while-and-sentinels",title:"Repeat until a stop signal",concept:"While loops and sentinel values",summary:"A `while` loop repeats until a condition changes, making it useful when the stopping point is part of the input.",mode:"function",starter:`def before_stop(events):
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
`}],Lg=[...bg,...wg,...kg,...Sg,..._g,...Cg,...Tg,...jg,...Ng,...Eg],Kf={"python-strings":{title:"Strings and Variables",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Create a greeting using a name and a favorite topic.",starter:`name = "Jordan"
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
`,console:"Run, Check and Submit are simulated in this React design lab."},"tsi-percents":{title:"Percents and Discounts",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Use percentages in everyday situations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-equations":{title:"Solve Linear Equations",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Solve a one-variable equation with inverse operations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-slope":{title:"Slope and Rate of Change",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Interpret slope from a table of values.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."}};function $o(l){return typeof l=="string"?l:typeof(l==null?void 0:l.id)=="string"?l.id:""}function ha(l){return String((l==null?void 0:l.title)||(l==null?void 0:l.unitName)||(l==null?void 0:l.name)||"Lessons")}function Ld(l,u=1){return(l==null?void 0:l.number)??(l==null?void 0:l.unit)??u}function fa(l){return((l==null?void 0:l.lessons)||[]).map($o).filter(Boolean)}function Zu(l){return Array.isArray(l==null?void 0:l.units)?l.units.flatMap(fa):Array.isArray(l==null?void 0:l.lessons)?l.lessons.map($o).filter(Boolean):[]}function Pg(l,u){return((l==null?void 0:l.units)||[]).some(d=>fa(d).includes(u))}function ec(l,u,d=Kf){var S,j;if(!u)return null;const g=((l==null?void 0:l.units)||[]).find(N=>fa(N).includes(u)),x=((g==null?void 0:g.lessons)||[]).find(N=>$o(N)===u),b=typeof x=="object"&&x||((S=g==null?void 0:g.lessonMeta)==null?void 0:S[u])||((j=l==null?void 0:l.lessonRecords)==null?void 0:j[u])||{},_=(d==null?void 0:d[u])||{},T=String(b.title||b.name||_.title||u.split("/").at(-1));return{..._,...b,id:u,title:T,kind:b.kind||_.kind||"Lesson",difficulty:b.difficulty||_.difficulty||"",points:b.points??_.points??null,language:b.language||_.language||(l==null?void 0:l.language)||"text",challenge:b.challenge||b.summary||_.challenge||"",starter:b.starter||_.starter||"",console:_.console||(b.markdownSource?b.language==="python"?"Run Python to see your output. Checks use published examples only.":"Preview-only workspace. Use the production Playground for functional language runners and verified checks.":""),ready:!!(d!=null&&d[u])||typeof b.markdownSource=="string"&&b.starter!==void 0,isPublished:typeof b.markdownSource=="string"&&b.starter!==void 0}}function Yo(l,u,d=Kf){var g;return((g=ec(l,u,d))==null?void 0:g.title)||""}function ac(l){const u=Array.isArray(l)?{lessons:l}:l||{},d=new Map,g=new Set,x=[],b=(T,S,j,N)=>{const W=String(T);let A=x.find(J=>J.id===W);return A||(A={id:W,title:String(S||"Lessons"),description:String(j||""),number:N,lessons:[]},x.push(A)),A},_=(T,S)=>{const j=$o(S);!j||g.has(j)||(g.add(j),T.lessons.push(j),d.set(j,typeof S=="string"?{id:j}:{...S}))};return Array.isArray(u.units)?u.units.forEach((T,S)=>{const j=b(T.id||`unit-${S+1}`,ha(T),T.description||T.summary,Ld(T,S+1));(T.lessons||[]).forEach(N=>_(j,N))}):Array.isArray(u.lessons)&&u.lessons.forEach((T,S)=>{if(!T||!$o(T))return;const j=T.unit||null,N=$o(T).indexOf("/"),W=j!=null?N>=0?$o(T).slice(0,N):`unit-${j}`:T.competency?`topic-${String(T.competency).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`:"lessons",A=T.unitName||T.competency||"Lessons",J=b(W,A,"",j??x.length+1);_(J,T)}),{units:x,lessonRecords:Object.fromEntries(d),lessons:x.flatMap(fa)}}const Lp=ac(Lg),ns=[{id:"computer-science-1",units:Lp.units,lessonRecords:Lp.lessonRecords,language:"python",publishedContent:!0,slug:"computer-science-1",label:"Computer Science I",short:"Python",glyph:"py",color:"#6366F1",description:"Build your problem-solving toolkit with Python.",lessons:Lp.lessons,topics:["Variables","Strings","Formatting","Conditions","Lists"]},{id:"game-programming",units:Ns["game-programming"],slug:"game-programming",label:"Game Programming & Design",short:"C# · Unity",glyph:"C#",color:"#C052EB",description:"Make ideas playable with Unity and C#.",lessons:Ns["game-programming"].flatMap(l=>l.lessons),topics:["C# Basics","Rigidbody","Colliders"]},{id:"mobile-app-dev",units:Ns["mobile-app-dev"],slug:"mobile-app-web",label:"Mobile App & Web",short:"React · JavaScript",glyph:"js",color:"#27BBD2",description:"Create useful websites and mobile applications.",lessons:Ns["mobile-app-dev"].flatMap(l=>l.lessons),topics:["HTML","CSS","JavaScript","React"]},{id:"capstone",units:Ns.capstone,slug:"capstone",label:"Capstone",short:"Build for someone",glyph:"++",color:"#FF2D55",description:"Research a problem, prototype, and test a solution.",lessons:Ns.capstone.flatMap(l=>l.lessons),topics:["Research","Prototype","Pitch"]},{id:"uil",units:Ns.uil,slug:"uil",label:"UIL Computer Science",short:"Java",glyph:"jv",color:"#FF9F0A",description:"Trace Java, explain your reasoning, and practice.",lessons:Ns.uil.flatMap(l=>l.lessons),topics:["Java","Arrays","Written","Programming"]},{id:"test-prep",units:qh,lessonRecords:vg,slug:"test-prep",label:"Test Prep",short:"TSI · ASVAB · SAT · ACT",glyph:"ex",color:"#15B7A3",description:"College readiness and military aptitude study, all in one place.",lessons:qh.flatMap(l=>l.lessons),topics:["TSI","ASVAB","SAT","ACT"]},{id:"tsi-math",units:Ns["tsi-math"],slug:"tsi-math",label:"TSI Math Advisory",short:"Math · Open access",glyph:"ma",color:"#30C85A",description:"Quantitative reasoning and algebra practice.",lessons:Ns["tsi-math"].flatMap(l=>l.lessons),topics:["Percents","Ratios","Equations"]}],Oi=l=>ns.find(u=>u.id===l);function Pd(l){return typeof l=="string"&&/^#[0-9a-fA-F]{6}$/.test(l)}function Ag(l,u={}){const d=u&&typeof u=="object"?u[l.id]:null;return Pd(d)?d.toUpperCase():l.color}function Rg(l){if(!Pd(l))return"#101012";const u=[1,3,5].map(g=>parseInt(l.slice(g,g+2),16)/255).map(g=>g<=.04045?g/12.92:((g+.055)/1.055)**2.4);return u[0]*.2126+u[1]*.7152+u[2]*.0722>.179?"#101012":"#FFFFFF"}function Ig(l,u,d=document.documentElement){for(const g of u){const x=`--student-course-color-${g.id}`,b=l&&typeof l=="object"?l[g.id]:null,_=`--student-course-ink-${g.id}`;Pd(b)?(d.style.setProperty(x,b),d.style.setProperty(_,Rg(b))):(d.style.removeProperty(x),d.style.removeProperty(_))}}function $n(l,u){const[d,g]=Te.useState(()=>{try{const x=localStorage.getItem(l);return x===null?u:JSON.parse(x)}catch{return u}});return Te.useEffect(()=>{try{localStorage.setItem(l,JSON.stringify(d))}catch{}},[l,d]),[d,g]}function Og(l,u=[]){return Array.isArray(u)&&u.includes(l)}function $f(l,u=[]){const d=Zu(l),g=d.filter(x=>Og(x,u)).length;return{completed:g,total:d.length,percent:d.length?Math.round(g/d.length*100):0}}const Mg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function Dg(l=new Date){const u=Object.fromEntries(Mg.formatToParts(l).filter(d=>d.type!=="literal").map(d=>[d.type,d.value]));return`${u.year}-${u.month}-${u.day}`}function kd(l){return l?new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}):""}function md(l,u=[]){return u.find(d=>d.id===l)||null}function zg(l,u=[]){return u.find(d=>d.id===l)||null}function Ad(l,{assignments:u=[],grades:d=[],completedLessons:g=[],today:x=Dg()}={}){const b=zg(l,u),_=md(l,d),T=l.startsWith("lesson:")&&g.includes(l.slice(7)),S=!!_||T;return b!=null&&b.dueDate?{state:S?"completed":b.dueDate<x?"overdue":"assigned",dueDate:b.dueDate,grade:_,completed:S}:{state:S?"completed":"unassigned",dueDate:null,grade:_,completed:S}}function Bp(l=[]){const u=l.reduce((g,x)=>g+x.earned,0),d=l.reduce((g,x)=>g+x.possible,0);return{earned:u,possible:d,percent:d?Math.round(100*u/d):null,count:l.length}}function Fg(l=[]){const u=new Map;return l.forEach(d=>{const g=wd(new Date(d.gradedAt+"T12:00:00Z"));u.has(g)||u.set(g,[]),u.get(g).push(d)}),[...u.entries()].map(([d,g])=>({week:d,...Bp(g)})).sort((d,g)=>g.week.localeCompare(d.week))}function Wg(l=[],u=[]){return[...new Set([...Array.isArray(l)?l:[],...u.filter(d=>d.id.startsWith("lesson:")).map(d=>d.id.slice(7))])]}const Hg="/playground/data",Bg=new Set(["game-programming","mobile-app-dev","uil","tsi-math"]);function Ug(l){if(typeof l!="string"||!l||l.startsWith("/")||l.includes("\\")||l.includes("?")||l.includes("#")||l.split("/").some(u=>u===".."||u==="."||u===""))throw new Error("Invalid curriculum resource path");return l}function oc(l,u){if(!Bg.has(l))throw new Error("Unknown published course");return Hg+"/"+l+"/"+Ug(u)}async function tr(l,u,d,g,x=!1){const b=await d(oc(l,u),{signal:g,cache:"no-store"});if(!b.ok)throw new Error("Published "+l+" resource unavailable: "+u);return x?b.json():b.text()}function eh(l,u,d,g,x){var b,_,T;return{...l,markdownSource:u,starter:d??"",language:g,markdownUrl:oc(x,l.markdown),kind:"Lesson",challenge:((b=l.exercise)==null?void 0:b.prompt)||l.summary||l.objective||l.title||"",points:l.points??null,cases:((_=l.exercise)==null?void 0:_.examples)||l.cases||[],hints:((T=l.exercise)==null?void 0:T.hints)||l.hints||[],mode:l.exercise?"function":"script"}}async function qg(l,u){const d="game-programming",g=await tr(d,"course.json",l,u,!0),x=await Promise.all(g.units.map(async b=>({id:b.id,number:b.number,title:b.title,description:b.summary||"",lessons:await Promise.all(b.lessons.map(async _=>{var j,N,W,A,J;const T=await tr(d,_.markdown,l,u);return{...eh(_,T,(j=_.exercise)==null?void 0:j.starter,"csharp",d),starter:((N=_.exercise)==null?void 0:N.starter)||"",kind:"Lesson",exerciseId:(W=_.exercise)==null?void 0:W.id,challenge:((A=_.exercise)==null?void 0:A.prompt)||_.title,unityTask:_.unityTask||[],markdownSource:T+((J=_.unityTask)!=null&&J.length?`

### Unity activity
`+_.unityTask.map(D=>"- "+D).join(`
`):"")}}))})));return{...ac({units:x}),source:"published",projects:[]}}async function Kh(l,u,d,g){if(!u)return null;const x=Object.keys(u);if(!x.includes("index.html")||!x.includes("styles.css")||!x.includes("script.js")&&!x.includes("App.jsx"))throw Error("A Mobile App starterFiles entry requires index.html, styles.css and script.js (or App.jsx).");return Object.fromEntries(await Promise.all(x.map(async b=>[b,await tr(l,u[b],d,g)])))}async function Kg(l,u){const d="mobile-app-dev",g=await tr(d,"course.json",l,u,!0),x=await Promise.all(g.lessons.map(async _=>{const[T,S,j]=await Promise.all([tr(d,_.markdown,l,u),_.starterFile?tr(d,_.starterFile,l,u):Promise.resolve(""),Kh(d,_.starterFiles,l,u)]);return{...eh(_,T,S,_.language==="react"?"jsx":_.language,d),...j?{starterFiles:j}:{}}})),b=await Promise.all((g.projects||[]).map(async _=>{const[T,S]=await Promise.all([_.starterFile?tr(d,_.starterFile,l,u):Promise.resolve(""),Kh(d,_.starterFiles,l,u)]),j=await Promise.all(_.steps.map(async N=>({...N,focus:N.focus||N.title,markdownSource:await tr(d,N.markdown,l,u),markdownUrl:oc(d,N.markdown)})));return{id:_.id,title:_.title,summary:_.summary,skills:_.skills||[],starter:T,language:"html",steps:j,...S?{starterFiles:S}:{}}}));return{...ac({lessons:x}),projects:b,source:"published"}}async function $g(l,u){const g=await tr("uil","course.json",l,u,!0),x=await tr("uil",g.written.markdown,l,u),b=await tr("uil",g.written.practice,l,u,!0),T=(Array.isArray(b)?b:b.questions||[]).map((W,A)=>{const J=W.choices||W.options||[];return"### Practice question "+(A+1)+`

`+String(W.prompt||W.question||"")+`

`+J.map((D,G)=>String.fromCharCode(65+G)+". "+D).join(`

`)}).join(`

`),S={id:"written",title:"Written practice",language:"text",markdown:g.written.markdown,markdownSource:x+`

## Published practice questions

`+T,markdownUrl:oc("uil",g.written.markdown),starter:"",kind:"Practice",challenge:"Review Java reasoning and the published written-practice questions."},j=await Promise.all(g.lessons.map(async W=>{const[A,J]=await Promise.all([tr("uil",W.markdown,l,u),tr("uil",W.starterFile,l,u)]);return eh(W,A,J,"java","uil")}));return{...ac({units:[{id:"written-preparation",number:1,title:"Written preparation",lessons:[S]},{id:"programming-practice",number:2,title:"Java programming practice",lessons:j}]}),source:"published",projects:[]}}async function Gg(l,u){const d="tsi-math",[g,x,b,_]=await Promise.all([tr(d,"content/20-day-program.json",l,u,!0),tr(d,"content/strand-lessons-v1.json",l,u,!0),tr(d,"content/diagnostic-24-mc-v2.json",l,u,!0),tr(d,"content/math-locator-profiles.json",l,u,!0)]),T=(g.days||[]).map(j=>({id:j.id,title:j.title,challenge:"Day "+j.day+" · "+j.strand+" · 30 minutes",kind:"Planned session",language:"text",starter:"",ready:!1,status:"planned"})),S=await Promise.all((x.lessons||[]).map(async j=>{const[N,W]=await Promise.all([tr(d,j.student_lesson,l,u),tr(d,j.teacher_key,l,u,!0)]);return{id:j.id,title:j.title,kind:"Draft practice",status:"draft",language:"text",markdown:j.student_lesson,markdownUrl:oc(d,j.student_lesson),markdownSource:N,tsiKey:W,tsiStrandDraft:!0,starter:"",challenge:"Currently authored draft lesson · "+j.minutes+" minutes"}}));return{...ac({units:[{id:"study-schedule",number:1,title:"20-day study schedule (in development)",lessons:T},{id:"authored-strands",number:2,title:"Available draft strand lessons",lessons:S}]}),source:"published-draft",projects:[],tsiDraft:!0,diagnosticItems:b.items||[],locatorProfiles:_.profiles||[]}}async function Yg(l,{fetchImpl:u=fetch,signal:d}={}){if(l==="game-programming")return qg(u,d);if(l==="mobile-app-dev")return Kg(u,d);if(l==="uil")return $g(u,d);if(l==="tsi-math")return Gg(u,d);throw new Error("Unknown published course")}const qu=!0;async function Vg(){const l="/playground/integration/account-bridge.js",{readOnlyCs1Snapshot:u}=await import(l);return u()}const ua=(...l)=>l.filter(Boolean).join(" "),Jg=["temperature-alert","count-matches","sum-positives","score-line","attendance-percent","longest-win-streak","confidence-total","second-largest-distinct","target-pairs","competition-ranks"],Xg="/playground/integration/",Qg="/"+Xg.replace(/^\/+|\/+$/g,""),ma=l=>`${Qg}/#${l}`,Hl=()=>ma("/"),$h=()=>ma("/teacher"),Zg=()=>ma("/admin"),ey=()=>ma("/journals"),ty=()=>ma("/grades"),Wl=(l=null)=>ma(l?`/challenges/course/${encodeURIComponent(l)}`:"/challenges"),Gf=l=>ma(`/challenges/${encodeURIComponent(l)}`);function Yf(l,u,d=null){const g=typeof l=="string"?Oi(l):l;if(!g||!u)return Hl();const x=`/playgrounds/${encodeURIComponent(g.slug)}/projects/${encodeURIComponent(u)}`;return ma(d?`${x}/steps/${encodeURIComponent(d)}`:x)}function th(l,u){const d=typeof l=="string"?Oi(l):l;if(!d)return Hl();const g=`/playgrounds/${encodeURIComponent(d.slug)}`;return ma(u?`${g}/lessons/${encodeURIComponent(u)}`:g)}function cd(l,u=ns){const b=((typeof window<"u"&&window.location.hash.slice(1)||"/").replace(/\/+$/,"")||"/").slice("".length)||"/";if(b==="/")return{page:"home"};if(b==="/teacher")return{page:"teacher"};if(b==="/admin")return{page:"admin"};if(b==="/journals")return{page:"journals"};if(b==="/grades")return{page:"grades"};if(b==="/challenges")return{page:"challenges",filterCourse:null};if(b.startsWith("/challenges/")){const N=b.split("/").filter(Boolean);try{if(N.length===3&&N[1]==="course"){const W=decodeURIComponent(N[2]);return Oi(W)?{page:"challenges",filterCourse:W}:{page:"not-found"}}if(N.length===2){const W=decodeURIComponent(N[1]);return Jg.includes(W)?{page:"challenge",challengeId:W}:{page:"not-found"}}}catch{return{page:"not-found"}}return{page:"not-found"}}const _=b.split("/").filter(Boolean);if(_[0]!=="playgrounds"||![2,4,6].includes(_.length))return{page:"not-found"};let T,S;try{T=decodeURIComponent(_[1]),S=_.length===4?decodeURIComponent(_[3]):void 0}catch{return{page:"not-found"}}const j=u.find(N=>N.slug===T);if(!j)return{page:"not-found"};if(_[2]==="projects"&&(_.length===4||_.length===6))try{const N=decodeURIComponent(_[3]),W=(j.projects||[]).find(J=>J.id===N),A=_.length===6?decodeURIComponent(_[5]):null;return!W||A&&(_[4]!=="steps"||!W.steps.some(J=>J.id===A))?{page:"not-found"}:{page:"course",courseId:j.id,lessonId:null,projectId:N,stepId:A}}catch{return{page:"not-found"}}return _.length!==2&&(_.length!==4||_[2]!=="lessons")?{page:"not-found"}:S&&!Pg(j,S)?{page:"not-found"}:{page:"course",courseId:j.id,lessonId:S??null}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vf=(...l)=>l.filter((u,d,g)=>!!u&&u.trim()!==""&&g.indexOf(u)===d).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ry={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Te.forwardRef(({color:l="currentColor",size:u=24,strokeWidth:d=2,absoluteStrokeWidth:g,className:x="",children:b,iconNode:_,...T},S)=>Te.createElement("svg",{ref:S,...ry,width:u,height:u,stroke:l,strokeWidth:g?Number(d)*24/Number(u):d,className:Vf("lucide",x),...T},[..._.map(([j,N])=>Te.createElement(j,N)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=(l,u)=>{const d=Te.forwardRef(({className:g,...x},b)=>Te.createElement(iy,{ref:b,iconNode:u,className:Vf(`lucide-${ny(l)}`,g),...x}));return d.displayName=`${l}`,d};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=Tt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=Tt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=Tt("BookOpenCheck",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Tt("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=Tt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=Tt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Tt("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Tt("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=Tt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=Tt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=Tt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=Tt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=Tt("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=Tt("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=Tt("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=Tt("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=Tt("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=Tt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=Tt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=Tt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=Tt("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=Tt("FlaskConical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=Tt("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=Tt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=Tt("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=Tt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=Tt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=Tt("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=Tt("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=Tt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=Tt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=Tt("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=Tt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=Tt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=Tt("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=Tt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=Tt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=Tt("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=Tt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=Tt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=Tt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=Tt("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=Tt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=Tt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function ql({children:l,tone:u=""}){return p.jsx("span",{className:ua("chip",u&&`chip-${u}`),children:l})}function Ly({theme:l,setTheme:u}){const d=l==="dark";return p.jsx("button",{className:"icon-button",title:d?"Switch to light mode":"Switch to dark mode","aria-label":"Toggle light and dark mode",onClick:()=>u(d?"light":"dark"),children:d?p.jsx(Ny,{size:17}):p.jsx(_y,{size:17})})}function Py({sidebarOpen:l,onToggleSidebar:u,onHome:d,theme:g,setTheme:x,readOnlyMode:b=!1,accountLabel:_=null}){var T;return p.jsx("header",{className:"topbar",children:p.jsxs("div",{className:"topbar-inner",children:[p.jsx("button",{className:"icon-button nav-toggle",onClick:u,"aria-label":"Toggle navigation",children:l?p.jsx(Cy,{size:18}):p.jsx(Sy,{size:18})}),p.jsxs("button",{className:"brand",onClick:d,children:[p.jsx("span",{className:"brand-logo",children:"{ }"}),p.jsx("strong",{children:"Ms. Whitby's Playground"}),p.jsx("span",{className:"brand-compact",children:"React Lab"})]}),p.jsx("div",{className:"topbar-spacer"}),p.jsx(ql,{children:b?"CS1 READ-ONLY TEST":"LOCAL DESIGN LAB"}),p.jsx(Ly,{theme:g,setTheme:x}),p.jsx("span",{className:"user-circle",title:_||"Read-only preview",children:((T=_==null?void 0:_[0])==null?void 0:T.toUpperCase())||"W"})]})})}const Ay=[["home","Home",wy],["challenges","Challenge Bank",Md],["journals","Weekly journals",py],["grades","Grades",xy],["teacher","Teacher dashboard",Qf],["admin","Admin dashboard",rh]];function Ry({open:l,page:u,courseId:d,lessonId:g,setPage:x,openCourse:b,onOpenProject:_,availableCourses:T=ns,completedLessons:S=[],assignments:j=[],grades:N=[],readOnlyMode:W=!1}){var J;const A=u==="course"?T.find(D=>D.id===d):null;return p.jsxs("aside",{className:ua("main-sidebar",!l&&"collapsed"),"aria-label":"Playground navigation",children:[p.jsx("div",{className:"side-title",children:"EXPLORE"}),Ay.filter(([D])=>!W||["home","grades","teacher"].includes(D)).map(([D,G,X])=>p.jsxs("button",{className:ua("nav-item",(u===D||D==="challenges"&&u==="challenge")&&"active"),onClick:()=>x(D),title:G,children:[p.jsx(X,{size:19}),p.jsx("span",{children:G})]},D)),A&&p.jsxs("section",{className:"course-outline","data-course":A.id,"aria-label":`${A.label} outline`,children:[p.jsx("div",{className:"side-rule"}),p.jsx("div",{className:"side-title",children:"COURSE CONTENT"}),p.jsxs("button",{className:ua("outline-overview",!g&&"active"),onClick:()=>b(A.id),children:[p.jsx(Rd,{size:16}),p.jsx("span",{children:"Course overview"})]}),A.units.map((D,G)=>p.jsxs("details",{className:"outline-unit",open:fa(D).includes(g)||!g&&G===0?!0:void 0,children:[p.jsxs("summary",{children:[p.jsx("span",{className:"outline-unit-number",children:String(Ld(D,G+1)).padStart(2,"0")}),p.jsx("span",{className:"outline-unit-title",title:ha(D),children:ha(D)}),p.jsx(ly,{size:14})]}),p.jsx("div",{className:"outline-lesson-list",children:fa(D).map(X=>{const M=Yo(A,X),F=Ad("lesson:"+X,{assignments:j,grades:N,completedLessons:S}),q=F.completed?"completed":F.dueDate?F.state:"",H=q==="completed"?"Completed":q==="overdue"?"Overdue":q==="assigned"?"Assigned":"";return p.jsxs("button",{onClick:()=>b(A.id,X),className:ua("outline-lesson",X===g&&"selected"),"aria-label":H?`${M}, ${H.toLowerCase()}`:M,title:H?`${M} · ${H}`:M,"aria-current":X===g?"page":void 0,children:[p.jsx("span",{className:"outline-lesson-name",children:M}),H&&p.jsx("span",{className:`assignment-dot ${q}`,"aria-hidden":"true"})]},X)})})]},`${A.id}-${D.id}-${g||"overview"}`)),!!((J=A.projects)!=null&&J.length)&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"side-section-title",children:"PROJECTS"}),A.projects.map(D=>p.jsx("button",{type:"button",className:"outline-lesson",title:D.title,onClick:()=>_==null?void 0:_(A.id,D.id),children:p.jsx("span",{className:"outline-lesson-name",children:D.title})},D.id))]})]}),p.jsx("div",{className:"side-rule"}),p.jsx("div",{className:"side-title",children:"PLAYGROUNDS"}),T.filter(D=>D.id!=="tsi-math").map(D=>p.jsxs("button",{"data-course":D.id,className:ua("nav-item course-nav-item",u==="course"&&d===D.id&&"active"),onClick:()=>b(D.id),title:D.label,children:[p.jsx("span",{className:"nav-dot"}),p.jsx("span",{children:D.label})]},D.id)),p.jsxs("div",{className:"sidebar-bottom",children:[p.jsx(uy,{size:17}),p.jsx("span",{children:"Your learning spaces"})]})]})}function Iy(){return p.jsxs("footer",{className:"site-footer",children:[p.jsx("span",{children:"Ms. Whitby's Playground · React design lab"}),p.jsx("span",{children:"Fictional data · No authentication or backend · No real code execution"})]})}const Oy={"computer-science-1":Od,"game-programming":vy,"mobile-app-dev":jy,uil:tm,"tsi-math":Xf,"test-prep":dy,capstone:Ty};function My({course:l,onOpen:u,completedLessons:d=[]}){const{completed:g,total:x}=$f(l,d),b=Oy[l.id]||Od;function _(T){T.button!==0||T.metaKey||T.ctrlKey||T.shiftKey||T.altKey||(T.preventDefault(),u())}return p.jsxs("a",{className:"course-card","data-course":l.id,href:th(l),onClick:_,children:[p.jsxs("div",{className:"course-card-heading",children:[p.jsx("span",{className:"course-glyph","aria-hidden":"true",children:p.jsx(b,{size:24,strokeWidth:2.2})}),p.jsxs("div",{children:[p.jsx("h2",{children:l.label}),p.jsx("p",{children:l.short})]})]}),p.jsx("p",{className:"course-description",children:l.description}),p.jsxs("div",{className:"course-card-footer",children:[p.jsxs("div",{className:"course-meta",children:[p.jsxs("span",{children:[x," ",x===1?"lesson":"lessons"]}),p.jsxs("span",{children:[g," completed"]})]}),p.jsx("progress",{className:"course-progress-track",value:g,max:Math.max(x,1),"aria-label":`${l.label}: ${g} of ${x} lessons completed`})]})]})}function Dy({onClick:l}){return p.jsxs("button",{className:"wide-shortcut",onClick:l,children:[p.jsx(Qf,{size:18}),p.jsxs("span",{children:[p.jsx("strong",{children:"Teacher Dashboard preview"}),p.jsx("small",{children:"Section roster, expanded student assignments, account matching, and weekly points"})]}),p.jsx(pi,{size:18})]})}function zy({openCourse:l,openTeacher:u,openChallenges:d,availableCourses:g=ns,completedLessons:x=[],readOnlyMode:b=!1}){return p.jsxs("div",{className:"main-content",children:[p.jsxs("div",{className:"welcome",children:[p.jsx("div",{className:"eyebrow",children:"Your learning spaces"}),p.jsx("h1",{children:"Your playgrounds"}),p.jsxs("p",{children:["Choose a course to continue learning. ",b?"Review Computer Science I lessons and your existing verified results. Practice is local to this test build.":"Complete lessons to fill your progress bars."]})]}),p.jsx("div",{className:"course-card-grid",children:g.filter(_=>_.id!=="tsi-math").map(_=>p.jsx(My,{course:_,completedLessons:x,onOpen:()=>l(_.id)},_.id))}),!b&&p.jsxs("button",{type:"button",className:"wide-shortcut challenge-bank-shortcut",onClick:d,children:[p.jsx(Md,{size:23}),p.jsxs("span",{children:[p.jsx("strong",{children:"Shared Challenge Bank"}),p.jsx("small",{children:"Practice one problem in Python, Java, JavaScript, or C#."})]}),p.jsx("span",{"aria-hidden":"true",children:"→"})]}),!b&&p.jsx(Dy,{onClick:u})]})}function Fy({course:l,openCourse:u,openProject:d,openChallenges:g,completedLessons:x=[],assignments:b=[],grades:_=[],courseColors:T={},onSetCourseColor:S,onResetCourseColor:j,readOnlyMode:N=!1}){var G;const W=$f(l,x),[A,J]=Te.useState(!1),D=Ag(l,T);return p.jsxs("div",{className:"course-landing",children:[p.jsxs("header",{className:"course-hero surface-card",children:[p.jsx("button",{type:"button",className:"icon-button course-color-settings",onClick:()=>J(X=>!X),"aria-label":A?"Close course color settings":`Change ${l.label} color`,title:A?"Close settings":"Course color","aria-expanded":A,"aria-controls":"course-color-controls",children:A?p.jsx(ih,{size:17}):p.jsx(em,{size:17})}),p.jsx("div",{className:"eyebrow",children:"Course overview"}),p.jsx("h1",{children:l.label}),p.jsx("p",{children:l.description}),p.jsxs("div",{className:"course-hero-stats",children:[p.jsxs("span",{children:[p.jsx(ky,{size:16})," ",l.units.length," units"]}),p.jsxs("span",{children:[p.jsx(Rd,{size:16})," ",Zu(l).length," lessons"]})]}),p.jsxs("button",{className:"btn primary",disabled:!Zu(l).length,onClick:()=>u(l.id,Zu(l)[0]),children:["Start learning ",p.jsx(pi,{size:16})]}),A&&p.jsxs("section",{id:"course-color-controls",className:"course-color-controls","aria-label":"Choose a course color",children:[p.jsxs("div",{className:"course-color-control-copy",children:[p.jsx("strong",{children:"Course color"}),p.jsx("p",{children:"Make this course your own. The color updates throughout your Playground."})]}),p.jsxs("label",{className:"course-color-picker",children:[p.jsx("input",{type:"color",value:D,onChange:X=>S==null?void 0:S(l.id,X.target.value),"aria-label":`Choose a color for ${l.label}`}),p.jsx("span",{children:"Choose color"})]}),p.jsx("button",{type:"button",className:"btn",onClick:()=>j==null?void 0:j(l.id),children:"Reset to default"}),p.jsx("button",{type:"button",className:"btn",onClick:()=>J(!1),children:"Done"})]})]}),l.publishedContent&&p.jsx("p",{className:"course-published-note",children:"Real published lessons are shown here. Practice in this preview does not change your grades."}),l.contentLoadingError&&p.jsxs("p",{className:"course-published-note",role:"alert",children:["Published course materials could not be loaded: ",l.contentLoadingError,". Sample lessons are not substituted."]}),!l.publishedContent&&!l.contentLoadingError&&p.jsx("p",{className:"course-published-note",children:"Course materials are not yet published here. This is a design preview, not a course to assign."}),l.tsiDraft&&p.jsx("p",{className:"course-published-note",children:"The 20-day TSI schedule is an outline; four strand lessons are drafts. Unwritten sessions are not available for practice."}),p.jsxs("p",{className:"course-landing-progress",children:[W.completed," of ",W.total," lessons ",N?"with verified grades":l.publishedContent?"marked complete in preview":"completed"," · ",W.percent,"%"]}),p.jsx("div",{className:"course-landing-heading",children:p.jsxs("div",{children:[p.jsx("h2",{children:"Units & lessons"}),p.jsx("p",{children:"Choose a unit or jump directly into a lesson."})]})}),p.jsx("div",{className:"unit-card-grid",children:l.units.map((X,M)=>p.jsxs("section",{className:"unit-card surface-card",children:[p.jsxs("header",{className:"unit-card-header",children:[p.jsxs("span",{className:"unit-badge",children:["UNIT ",String(Ld(X,M+1)).padStart(2,"0")]}),p.jsx("h3",{title:ha(X),children:ha(X)}),X.description&&p.jsx("p",{children:X.description})]}),p.jsx("div",{className:"unit-lessons",children:fa(X).map((F,q)=>p.jsxs("a",{className:"unit-lesson-link",href:th(l,F),onClick:H=>{H.button!==0||H.metaKey||H.ctrlKey||H.shiftKey||H.altKey||(H.preventDefault(),u(l.id,F))},children:[p.jsx("span",{className:"unit-lesson-index",children:q+1}),p.jsxs("span",{className:"unit-lesson-label",children:[p.jsx("strong",{title:Yo(l,F),children:Yo(l,F)}),(()=>{var Y,pe;const H=Ad("lesson:"+F,{assignments:b,grades:_,completedLessons:x});return H.dueDate||H.completed?p.jsxs("span",{className:"unit-assignment-meta",children:[p.jsxs("span",{className:`assignment-status ${H.state}`,children:[p.jsx("span",{className:`assignment-dot ${H.state}`,"aria-hidden":"true"}),H.completed?"Completed":H.state==="overdue"?"Overdue":"Assigned"]}),H.dueDate&&p.jsxs("small",{children:["Due ",kd(H.dueDate)]}),H.grade&&p.jsxs("small",{children:[H.grade.earned," / ",H.grade.possible," pts"]})]}):p.jsxs("small",{children:[(Y=ec(l,F))==null?void 0:Y.kind,(pe=ec(l,F))!=null&&pe.difficulty?` · ${ec(l,F).difficulty}`:""]})})()]}),p.jsx(Up,{size:16})]},F))})]},X.id))}),!!((G=l.projects)!=null&&G.length)&&p.jsxs("section",{className:"course-projects surface-card",children:[p.jsx("div",{className:"eyebrow",children:"Published guided projects"}),p.jsx("h2",{children:"Projects"}),p.jsx("div",{className:"unit-card-grid",children:l.projects.map(X=>p.jsxs("a",{className:"unit-lesson-link",href:Yf(l,X.id),onClick:M=>{M.button!==0||M.metaKey||M.ctrlKey||M.shiftKey||M.altKey||(M.preventDefault(),d(l.id,X.id))},children:[p.jsxs("span",{className:"unit-lesson-label",children:[p.jsx("strong",{children:X.title}),p.jsxs("small",{children:[X.steps.length," steps · ",X.summary]})]}),p.jsx(Up,{size:16})]},X.id))})]}),p.jsxs("section",{className:"course-challenges-shelf surface-card",children:[p.jsxs("div",{children:[p.jsx("div",{className:"eyebrow",children:"Shared practice library"}),p.jsx("h2",{children:"Related programming challenges"}),p.jsx("p",{children:"Browse reusable problems suited to this course. Review each challenge's prerequisites before recommending it to students."})]}),p.jsxs("a",{href:Wl(l.id),className:"btn",onClick:X=>{X.button!==0||X.metaKey||X.ctrlKey||X.shiftKey||X.altKey||(X.preventDefault(),g(l.id))},children:[p.jsx(Md,{size:16})," Browse challenges"]})]})]})}function Wy({selectedTopic:l,attempts:u,setAttempts:d,openCourse:g,completedLessons:x,onToggleLessonComplete:b}){const{track:_,topic:T}=l,[S,j]=Te.useState(0),[N,W]=Te.useState(null),[A,J]=Te.useState(!1),D=T.questions[S],G=T.questions.filter(H=>u[H.id]!==void 0).length,X=x.includes(T.id);function M(H){j(H),W(null),J(!1)}function F(){N===null||A||(J(!0),d(H=>({...H,[D.id]:{chosen:N,correct:N===D.correct}})))}const q=N===D.correct;return p.jsxs("section",{className:"test-prep-practice",children:[p.jsxs("button",{type:"button",className:"test-prep-back",onClick:()=>g("test-prep"),children:[p.jsx(Jf,{size:16})," All Test Prep"]}),p.jsxs("div",{className:"surface-card test-prep-practice-header",children:[p.jsxs("div",{className:"eyebrow",children:[_.title," / ",T.title]}),p.jsx("h1",{children:T.title}),p.jsx("p",{children:T.description}),p.jsx("p",{className:"muted",children:"Original sample questions only. Your practice results are not official exam scores."}),p.jsxs("div",{className:"test-prep-practice-meta",children:[p.jsxs("span",{children:[G," of ",T.questions.length," attempted"]}),X&&p.jsxs("span",{className:"test-prep-complete",children:[p.jsx(nc,{size:16})," Practiced"]})]})]}),p.jsxs("div",{className:"surface-card test-prep-question",children:[p.jsxs("div",{className:"test-prep-question-top",children:[p.jsxs("strong",{children:["Question ",S+1," of ",T.questions.length]}),p.jsx("span",{className:"muted",children:"Practice / multiple choice"})]}),p.jsx("h2",{children:D.prompt}),p.jsxs("fieldset",{className:"test-prep-options",disabled:A,children:[p.jsx("legend",{className:"sr-only",children:"Choose your answer"}),D.options.map((H,Y)=>p.jsxs("label",{className:"test-prep-option "+(N===Y?"selected ":"")+(A&&Y===D.correct?"correct":""),children:[p.jsx("input",{type:"radio",name:D.id,checked:N===Y,onChange:()=>W(Y)}),p.jsx("span",{className:"test-prep-letter",children:String.fromCharCode(65+Y)}),p.jsx("span",{children:H})]},Y))]}),A&&p.jsxs("div",{className:"test-prep-feedback "+(q?"is-correct":"is-incorrect"),role:"status",children:[p.jsx("strong",{children:q?"Correct!":"Review this answer"}),p.jsx("p",{children:D.explanation})]}),p.jsxs("div",{className:"test-prep-actions",children:[p.jsx("button",{type:"button",className:"btn primary",disabled:N===null||A,onClick:F,children:"Check answer"}),p.jsxs("button",{type:"button",className:"btn",onClick:()=>{W(null),J(!1)},children:[p.jsx(Dd,{size:14})," Try again"]})]})]}),p.jsxs("nav",{className:"test-prep-topic-nav","aria-label":"Sample question navigation",children:[S>0?p.jsxs("button",{type:"button",className:"btn",onClick:()=>M(S-1),children:[p.jsx(Id,{size:16})," Previous"]}):p.jsx("span",{}),S<T.questions.length-1?p.jsxs("button",{type:"button",className:"btn",onClick:()=>M(S+1),children:["Next question ",p.jsx(pi,{size:16})]}):p.jsx("span",{})]}),G===T.questions.length&&!X&&p.jsxs("div",{className:"test-prep-completion surface-card",children:[p.jsx("span",{children:"You've attempted every sample in this subject."}),p.jsx("button",{type:"button",className:"btn primary",onClick:()=>b==null?void 0:b(T.id),children:"Mark topic practiced"})]}),p.jsxs("p",{className:"test-prep-official",children:["Need more questions? ",p.jsxs("a",{href:_.reference,target:"_blank",rel:"noreferrer",children:["Visit official ",_.title," preparation resources ",p.jsx(fy,{size:13})]})]})]})}function Hy({lessonId:l,openCourse:u,completedLessons:d=[],onToggleLessonComplete:g}){const[x,b]=$n("designlab:test-prep-sample-answers",{}),_=l?xg(l):null;return p.jsx("div",{className:"course-layout integrated-course","data-course":"test-prep",children:p.jsxs("div",{className:"course-main",children:[p.jsxs("div",{className:"course-breadcrumb",children:[p.jsx("button",{type:"button",onClick:()=>u(null),children:"All playgrounds"}),p.jsx(pi,{size:14}),l?p.jsxs(p.Fragment,{children:[p.jsx("button",{type:"button",onClick:()=>u("test-prep"),children:"Test Prep"}),p.jsx(pi,{size:14}),p.jsx("span",{children:_==null?void 0:_.topic.title})]}):p.jsx("span",{children:"Test Prep"})]}),_?p.jsx(Wy,{selectedTopic:_,attempts:x,setAttempts:b,openCourse:u,completedLessons:d,onToggleLessonComplete:g},l):p.jsxs("div",{className:"test-prep-hub",children:[p.jsxs("header",{className:"surface-card test-prep-hero",children:[p.jsx("div",{className:"eyebrow",children:"Test Prep / Self-study"}),p.jsx("h1",{children:"Choose a test to prepare for"}),p.jsx("p",{children:"Study in short sessions, answer original sample questions, and review the reasoning behind each answer. No class code required."}),p.jsx("p",{className:"muted",children:"This is a preview. Practice history stays in this browser. No scores are sent to a teacher, and no official exam scores are predicted."})]}),p.jsxs("div",{className:"test-prep-exams",children:[p.jsxs("section",{className:"surface-card test-prep-exam","data-exam":"tsi",children:[p.jsx("div",{className:"test-prep-exam-icon",children:p.jsx(Gh,{size:23})}),p.jsx("div",{className:"eyebrow",children:"College readiness"}),p.jsx("h2",{children:"TSI Math"}),p.jsx("p",{children:"Continue the existing TSIA2 math curriculum and diagnostic work without changing old lesson links."}),p.jsx("p",{className:"test-prep-exam-meta",children:"Existing course / classroom study"}),p.jsxs("button",{type:"button",className:"btn primary",onClick:()=>u("tsi-math"),children:["Open TSI Math ",p.jsx(pi,{size:16})]})]}),sc.map(T=>{const S=T.topics.reduce((N,W)=>N+W.questions.length,0),j=T.topics.reduce((N,W)=>N+W.questions.filter(A=>x[A.id]!==void 0).length,0);return p.jsxs("section",{className:"surface-card test-prep-exam","data-exam":T.id,children:[p.jsx("div",{className:"test-prep-exam-icon",children:T.id==="act"?p.jsx(yy,{size:23}):p.jsx(Gh,{size:23})}),p.jsx("div",{className:"eyebrow",children:T.subtitle}),p.jsx("h2",{children:T.title}),p.jsx("p",{children:T.description}),p.jsxs("p",{className:"test-prep-exam-meta",children:[T.topics.length," subjects · ",j,"/",S," samples attempted"]}),p.jsx("progress",{className:"course-progress-track",value:j,max:S,"aria-label":T.title+" sample practice progress"}),p.jsx("div",{className:"test-prep-topic-links",children:T.topics.map(N=>p.jsxs("button",{type:"button",onClick:()=>u("test-prep",N.id),children:[p.jsx("span",{children:N.title}),p.jsx(pi,{size:15})]},N.id))}),p.jsxs("button",{type:"button",className:"btn primary",onClick:()=>u("test-prep",T.topics[0].id),children:["Start ",T.title," samples ",p.jsx(pi,{size:16})]})]},T.id)})]})]})]})})}function lc({axis:l,onDrag:u}){const d=Te.useRef(!1),g=l==="columns",x=()=>d.current=!1;return p.jsx("div",{className:ua("splitter",g?"column-split":"row-split"),role:"separator","aria-label":g?"Resize instructions and editor":"Resize editor and console","aria-orientation":g?"vertical":"horizontal",tabIndex:0,onPointerDown:b=>{b.preventDefault(),b.currentTarget.setPointerCapture(b.pointerId),d.current=!0},onPointerMove:b=>{d.current&&b.buttons===1&&u(b)},onPointerUp:x,onLostPointerCapture:x,children:p.jsx("span",{})})}function sh({eyebrow:l,children:u,actions:d}){return p.jsxs("div",{className:"page-title-row",children:[p.jsxs("div",{children:[l&&p.jsx("div",{className:"eyebrow",children:l}),p.jsx("h1",{children:u})]}),d&&p.jsx("div",{className:"page-actions",children:d})]})}function Ku({task:l,unit:u,unitNumber:d,isTsi:g,isCompleted:x=!1,assignment:b=null,grade:_=null,onToggleCompleted:T,readOnlyMode:S=!1}){const j=(b==null?void 0:b.id)||(_==null?void 0:_.id)||"",N=Ad(j,{assignments:b?[b]:[],grades:_?[_]:[],completedLessons:x?[j.replace(/^lesson:/,"")]:[]});return p.jsxs("div",{className:"lesson-header",children:[p.jsxs("div",{className:"eyebrow",children:["Unit ",Ld(u,d)," · ",ha(u)," ",p.jsx("span",{className:"dot",children:"·"})," ",l.kind]}),p.jsx(sh,{actions:p.jsxs("div",{className:"lesson-heading-actions",children:[!g&&(l==null?void 0:l.points)!=null&&p.jsx("span",{className:"points-tag",children:_?`${_.earned} / ${_.possible} pts`:`${l.points} points available`}),S&&!_?p.jsx("span",{className:"points-tag",children:"Verified scores only"}):_?p.jsxs("span",{className:"btn completion-toggle completed",children:[p.jsx(nc,{size:16})," Completed"]}):p.jsxs("button",{type:"button",className:`btn completion-toggle ${x?"completed":""}`,"aria-pressed":x,onClick:T,children:[x?p.jsx(nc,{size:16}):p.jsx(cy,{size:16}),x?"Completed":"Mark complete"]})]}),children:l.title}),p.jsx("p",{children:l.challenge}),(b==null?void 0:b.dueDate)&&p.jsxs("div",{className:"lesson-assignment-info",children:[p.jsx("span",{className:`assignment-status ${N.state}`,children:N.state==="completed"?"Completed":N.state==="overdue"?"Overdue":"Assigned"}),p.jsxs("span",{children:["Due ",kd(b.dueDate)]})]})]})}const ah={"tsi-ratios":{prompt:"A recipe uses 3 cups of water for every 5 cups of rice. How many cups of water are needed for 15 cups of rice?",options:["5 cups","9 cups","12 cups","25 cups"],correct:1,explanation:"15 is three times 5, so multiply the 3 cups of water by 3 to get 9."},"tsi-percents":{prompt:"A $60 backpack is discounted by 25%. What is the sale price?",options:["$15","$35","$45","$75"],correct:2,explanation:"25% of $60 is $15; subtract $15 from $60 to get $45."},"tsi-equations":{prompt:"Solve for x: 4x + 6 = 22.",options:["2","4","6","7"],correct:1,explanation:"Subtract 6 from both sides to get 4x = 16, then divide by 4: x = 4."},"tsi-slope":{prompt:"A table gives points (1, 3), (2, 5), and (3, 7). What is the slope?",options:["1","2","3","4"],correct:1,explanation:"As x goes up by 1, y goes up by 2, so slope = 2/1 = 2."}},By=`# Find an Inefficiency

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
`,Uy=`# Interpret User Feedback

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
`,qy=`# Interview for Evidence

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
`,Ky=`# Make a Minimum Viable Prototype

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
`,$y=`# Player Decisions

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
`,Gy=`# Variables for a Game

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
`,Yy=`# Decision Making

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
`,Vy=`# Format a Summary

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
`,Jy=`# Lists and Indexing

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
`,Xy=`# For Loops

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
`,Qy=`# Strings and Variables

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
`,Zy=`<!-- Learning example adapted from mswhitby/computer-science-1/docs/units/content/02-values-and-variables/lessons/01-meet-variables.md; displayed in independent React preview. -->
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
`,ev=`# Your First React Card

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
`,tv=`# Interactive React State

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
`,nv=`# Solve Linear Equations

## Learn

Solve an equation by doing the same operation to both sides. For 3x + 5 = 20, first subtract 5, then divide by 3.

### Example

Explain the quantities and operations before calculating.

## Practice

Solve 4x + 6 = 22. Explain each step.

Choose an answer in the practice card.
`,rv=`# Percents and Discounts

## Learn

A percent compares a quantity with 100. To find 20% of 50, multiply 0.20 × 50 = 10.

### Example

Explain the quantities and operations before calculating.

## Practice

A backpack costs $60 and is discounted by 25%. What is the sale price?

Choose an answer in the practice card.
`,iv=`# Ratios and Rates

## Learn

A ratio compares quantities. A **unit rate** tells us how many of one item correspond to one unit of another.

Example: If 3 markers are shared by 5 students, the number of markers per student is:

**3 ÷ 5 = 0.6 markers per student.**

## Practice

A group of 15 students needs markers at the same rate. How many markers are needed? Explain how you know.
`,sv=`# Slope and Rate of Change

## Learn

Slope is the change in y divided by the change in x. A constant rate makes a linear relationship.

### Example

Explain the quantities and operations before calculating.

## Practice

The table gives (1, 3), (2, 5), and (3, 7). What is the slope?

Choose an answer in the practice card.
`,av=`# Trace a Java Array

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
`,lv=`# Method Calls and Scope

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
`,uv=`# String Indexing

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
`,cv=`# Collision Events

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
`,dv=`<!-- Learning example adapted from mswhitby/game-programming/samples/PlayerController.md (sample-lessons); displayed in independent React preview. -->
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
`,pv=`# Score and Feedback

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
`,hv=`# Events and Forms

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
`,fv=`# Responsive Layouts

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
`;function oh(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Xo=oh();function nm(l){Xo=l}var tc={exec:()=>null};function Gt(l,u=""){let d=typeof l=="string"?l:l.source;const g={replace:(x,b)=>{let _=typeof b=="string"?b:b.source;return _=_.replace(Hr.caret,"$1"),d=d.replace(x,_),g},getRegex:()=>new RegExp(d,u)};return g}var Hr={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:l=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}#`),htmlBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}<(?:[a-z].*>|!--)`,"i")},mv=/^(?:[ \t]*(?:\n|$))+/,gv=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,yv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,uc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,vv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,lh=/(?:[*+-]|\d{1,9}[.)])/,rm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,im=Gt(rm).replace(/bull/g,lh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),xv=Gt(rm).replace(/bull/g,lh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),uh=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,bv=/^[^\n]+/,ch=/(?!\s*\])(?:\\.|[^\[\]\\])+/,wv=Gt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ch).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),kv=Gt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,lh).getRegex(),zd="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",dh=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Sv=Gt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",dh).replace("tag",zd).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),sm=Gt(uh).replace("hr",uc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",zd).getRegex(),_v=Gt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",sm).getRegex(),ph={blockquote:_v,code:gv,def:wv,fences:yv,heading:vv,hr:uc,html:Sv,lheading:im,list:kv,newline:mv,paragraph:sm,table:tc,text:bv},Yh=Gt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",uc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",zd).getRegex(),Cv={...ph,lheading:xv,table:Yh,paragraph:Gt(uh).replace("hr",uc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Yh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",zd).getRegex()},Tv={...ph,html:Gt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",dh).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:tc,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Gt(uh).replace("hr",uc).replace("heading",` *#{1,6} *[^
]`).replace("lheading",im).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},jv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Nv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,am=/^( {2,}|\\)\n(?!\s*$)/,Ev=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Fd=/[\p{P}\p{S}]/u,hh=/[\s\p{P}\p{S}]/u,om=/[^\s\p{P}\p{S}]/u,Lv=Gt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,hh).getRegex(),lm=/(?!~)[\p{P}\p{S}]/u,Pv=/(?!~)[\s\p{P}\p{S}]/u,Av=/(?:[^\s\p{P}\p{S}]|~)/u,Rv=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,um=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Iv=Gt(um,"u").replace(/punct/g,Fd).getRegex(),Ov=Gt(um,"u").replace(/punct/g,lm).getRegex(),cm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Mv=Gt(cm,"gu").replace(/notPunctSpace/g,om).replace(/punctSpace/g,hh).replace(/punct/g,Fd).getRegex(),Dv=Gt(cm,"gu").replace(/notPunctSpace/g,Av).replace(/punctSpace/g,Pv).replace(/punct/g,lm).getRegex(),zv=Gt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,om).replace(/punctSpace/g,hh).replace(/punct/g,Fd).getRegex(),Fv=Gt(/\\(punct)/,"gu").replace(/punct/g,Fd).getRegex(),Wv=Gt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Hv=Gt(dh).replace("(?:-->|$)","-->").getRegex(),Bv=Gt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Hv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),_d=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Uv=Gt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",_d).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),dm=Gt(/^!?\[(label)\]\[(ref)\]/).replace("label",_d).replace("ref",ch).getRegex(),pm=Gt(/^!?\[(ref)\](?:\[\])?/).replace("ref",ch).getRegex(),qv=Gt("reflink|nolink(?!\\()","g").replace("reflink",dm).replace("nolink",pm).getRegex(),fh={_backpedal:tc,anyPunctuation:Fv,autolink:Wv,blockSkip:Rv,br:am,code:Nv,del:tc,emStrongLDelim:Iv,emStrongRDelimAst:Mv,emStrongRDelimUnd:zv,escape:jv,link:Uv,nolink:pm,punctuation:Lv,reflink:dm,reflinkSearch:qv,tag:Bv,text:Ev,url:tc},Kv={...fh,link:Gt(/^!?\[(label)\]\((.*?)\)/).replace("label",_d).getRegex(),reflink:Gt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",_d).getRegex()},qp={...fh,emStrongRDelimAst:Dv,emStrongLDelim:Ov,url:Gt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},$v={...qp,br:Gt(am).replace("{2,}","*").getRegex(),text:Gt(qp.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},dd={normal:ph,gfm:Cv,pedantic:Tv},$u={normal:fh,gfm:qp,breaks:$v,pedantic:Kv},Gv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vh=l=>Gv[l];function Es(l,u){if(u){if(Hr.escapeTest.test(l))return l.replace(Hr.escapeReplace,Vh)}else if(Hr.escapeTestNoEncode.test(l))return l.replace(Hr.escapeReplaceNoEncode,Vh);return l}function Jh(l){try{l=encodeURI(l).replace(Hr.percentDecode,"%")}catch{return null}return l}function Xh(l,u){var b;const d=l.replace(Hr.findPipe,(_,T,S)=>{let j=!1,N=T;for(;--N>=0&&S[N]==="\\";)j=!j;return j?"|":" |"}),g=d.split(Hr.splitPipe);let x=0;if(g[0].trim()||g.shift(),g.length>0&&!((b=g.at(-1))!=null&&b.trim())&&g.pop(),u)if(g.length>u)g.splice(u);else for(;g.length<u;)g.push("");for(;x<g.length;x++)g[x]=g[x].trim().replace(Hr.slashPipe,"|");return g}function Gu(l,u,d){const g=l.length;if(g===0)return"";let x=0;for(;x<g&&l.charAt(g-x-1)===u;)x++;return l.slice(0,g-x)}function Yv(l,u){if(l.indexOf(u[1])===-1)return-1;let d=0;for(let g=0;g<l.length;g++)if(l[g]==="\\")g++;else if(l[g]===u[0])d++;else if(l[g]===u[1]&&(d--,d<0))return g;return d>0?-2:-1}function Qh(l,u,d,g,x){const b=u.href,_=u.title||null,T=l[1].replace(x.other.outputLinkReplace,"$1");g.state.inLink=!0;const S={type:l[0].charAt(0)==="!"?"image":"link",raw:d,href:b,title:_,text:T,tokens:g.inlineTokens(T)};return g.state.inLink=!1,S}function Vv(l,u,d){const g=l.match(d.other.indentCodeCompensation);if(g===null)return u;const x=g[1];return u.split(`
`).map(b=>{const _=b.match(d.other.beginningSpace);if(_===null)return b;const[T]=_;return T.length>=x.length?b.slice(x.length):b}).join(`
`)}var Cd=class{constructor(l){on(this,"options");on(this,"rules");on(this,"lexer");this.options=l||Xo}space(l){const u=this.rules.block.newline.exec(l);if(u&&u[0].length>0)return{type:"space",raw:u[0]}}code(l){const u=this.rules.block.code.exec(l);if(u){const d=u[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:u[0],codeBlockStyle:"indented",text:this.options.pedantic?d:Gu(d,`
`)}}}fences(l){const u=this.rules.block.fences.exec(l);if(u){const d=u[0],g=Vv(d,u[3]||"",this.rules);return{type:"code",raw:d,lang:u[2]?u[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):u[2],text:g}}}heading(l){const u=this.rules.block.heading.exec(l);if(u){let d=u[2].trim();if(this.rules.other.endingHash.test(d)){const g=Gu(d,"#");(this.options.pedantic||!g||this.rules.other.endingSpaceChar.test(g))&&(d=g.trim())}return{type:"heading",raw:u[0],depth:u[1].length,text:d,tokens:this.lexer.inline(d)}}}hr(l){const u=this.rules.block.hr.exec(l);if(u)return{type:"hr",raw:Gu(u[0],`
`)}}blockquote(l){const u=this.rules.block.blockquote.exec(l);if(u){let d=Gu(u[0],`
`).split(`
`),g="",x="";const b=[];for(;d.length>0;){let _=!1;const T=[];let S;for(S=0;S<d.length;S++)if(this.rules.other.blockquoteStart.test(d[S]))T.push(d[S]),_=!0;else if(!_)T.push(d[S]);else break;d=d.slice(S);const j=T.join(`
`),N=j.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");g=g?`${g}
${j}`:j,x=x?`${x}
${N}`:N;const W=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(N,b,!0),this.lexer.state.top=W,d.length===0)break;const A=b.at(-1);if((A==null?void 0:A.type)==="code")break;if((A==null?void 0:A.type)==="blockquote"){const J=A,D=J.raw+`
`+d.join(`
`),G=this.blockquote(D);b[b.length-1]=G,g=g.substring(0,g.length-J.raw.length)+G.raw,x=x.substring(0,x.length-J.text.length)+G.text;break}else if((A==null?void 0:A.type)==="list"){const J=A,D=J.raw+`
`+d.join(`
`),G=this.list(D);b[b.length-1]=G,g=g.substring(0,g.length-A.raw.length)+G.raw,x=x.substring(0,x.length-J.raw.length)+G.raw,d=D.substring(b.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:g,tokens:b,text:x}}}list(l){let u=this.rules.block.list.exec(l);if(u){let d=u[1].trim();const g=d.length>1,x={type:"list",raw:"",ordered:g,start:g?+d.slice(0,-1):"",loose:!1,items:[]};d=g?`\\d{1,9}\\${d.slice(-1)}`:`\\${d}`,this.options.pedantic&&(d=g?d:"[*+-]");const b=this.rules.other.listItemRegex(d);let _=!1;for(;l;){let S=!1,j="",N="";if(!(u=b.exec(l))||this.rules.block.hr.test(l))break;j=u[0],l=l.substring(j.length);let W=u[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,M=>" ".repeat(3*M.length)),A=l.split(`
`,1)[0],J=!W.trim(),D=0;if(this.options.pedantic?(D=2,N=W.trimStart()):J?D=u[1].length+1:(D=u[2].search(this.rules.other.nonSpaceChar),D=D>4?1:D,N=W.slice(D),D+=u[1].length),J&&this.rules.other.blankLine.test(A)&&(j+=A+`
`,l=l.substring(A.length+1),S=!0),!S){const M=this.rules.other.nextBulletRegex(D),F=this.rules.other.hrRegex(D),q=this.rules.other.fencesBeginRegex(D),H=this.rules.other.headingBeginRegex(D),Y=this.rules.other.htmlBeginRegex(D);for(;l;){const pe=l.split(`
`,1)[0];let V;if(A=pe,this.options.pedantic?(A=A.replace(this.rules.other.listReplaceNesting,"  "),V=A):V=A.replace(this.rules.other.tabCharGlobal,"    "),q.test(A)||H.test(A)||Y.test(A)||M.test(A)||F.test(A))break;if(V.search(this.rules.other.nonSpaceChar)>=D||!A.trim())N+=`
`+V.slice(D);else{if(J||W.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||q.test(W)||H.test(W)||F.test(W))break;N+=`
`+A}!J&&!A.trim()&&(J=!0),j+=pe+`
`,l=l.substring(pe.length+1),W=V.slice(D)}}x.loose||(_?x.loose=!0:this.rules.other.doubleBlankLine.test(j)&&(_=!0));let G=null,X;this.options.gfm&&(G=this.rules.other.listIsTask.exec(N),G&&(X=G[0]!=="[ ] ",N=N.replace(this.rules.other.listReplaceTask,""))),x.items.push({type:"list_item",raw:j,task:!!G,checked:X,loose:!1,text:N,tokens:[]}),x.raw+=j}const T=x.items.at(-1);if(T)T.raw=T.raw.trimEnd(),T.text=T.text.trimEnd();else return;x.raw=x.raw.trimEnd();for(let S=0;S<x.items.length;S++)if(this.lexer.state.top=!1,x.items[S].tokens=this.lexer.blockTokens(x.items[S].text,[]),!x.loose){const j=x.items[S].tokens.filter(W=>W.type==="space"),N=j.length>0&&j.some(W=>this.rules.other.anyLine.test(W.raw));x.loose=N}if(x.loose)for(let S=0;S<x.items.length;S++)x.items[S].loose=!0;return x}}html(l){const u=this.rules.block.html.exec(l);if(u)return{type:"html",block:!0,raw:u[0],pre:u[1]==="pre"||u[1]==="script"||u[1]==="style",text:u[0]}}def(l){const u=this.rules.block.def.exec(l);if(u){const d=u[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),g=u[2]?u[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",x=u[3]?u[3].substring(1,u[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):u[3];return{type:"def",tag:d,raw:u[0],href:g,title:x}}}table(l){var _;const u=this.rules.block.table.exec(l);if(!u||!this.rules.other.tableDelimiter.test(u[2]))return;const d=Xh(u[1]),g=u[2].replace(this.rules.other.tableAlignChars,"").split("|"),x=(_=u[3])!=null&&_.trim()?u[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],b={type:"table",raw:u[0],header:[],align:[],rows:[]};if(d.length===g.length){for(const T of g)this.rules.other.tableAlignRight.test(T)?b.align.push("right"):this.rules.other.tableAlignCenter.test(T)?b.align.push("center"):this.rules.other.tableAlignLeft.test(T)?b.align.push("left"):b.align.push(null);for(let T=0;T<d.length;T++)b.header.push({text:d[T],tokens:this.lexer.inline(d[T]),header:!0,align:b.align[T]});for(const T of x)b.rows.push(Xh(T,b.header.length).map((S,j)=>({text:S,tokens:this.lexer.inline(S),header:!1,align:b.align[j]})));return b}}lheading(l){const u=this.rules.block.lheading.exec(l);if(u)return{type:"heading",raw:u[0],depth:u[2].charAt(0)==="="?1:2,text:u[1],tokens:this.lexer.inline(u[1])}}paragraph(l){const u=this.rules.block.paragraph.exec(l);if(u){const d=u[1].charAt(u[1].length-1)===`
`?u[1].slice(0,-1):u[1];return{type:"paragraph",raw:u[0],text:d,tokens:this.lexer.inline(d)}}}text(l){const u=this.rules.block.text.exec(l);if(u)return{type:"text",raw:u[0],text:u[0],tokens:this.lexer.inline(u[0])}}escape(l){const u=this.rules.inline.escape.exec(l);if(u)return{type:"escape",raw:u[0],text:u[1]}}tag(l){const u=this.rules.inline.tag.exec(l);if(u)return!this.lexer.state.inLink&&this.rules.other.startATag.test(u[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(u[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(u[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(u[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:u[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:u[0]}}link(l){const u=this.rules.inline.link.exec(l);if(u){const d=u[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(d)){if(!this.rules.other.endAngleBracket.test(d))return;const b=Gu(d.slice(0,-1),"\\");if((d.length-b.length)%2===0)return}else{const b=Yv(u[2],"()");if(b===-2)return;if(b>-1){const T=(u[0].indexOf("!")===0?5:4)+u[1].length+b;u[2]=u[2].substring(0,b),u[0]=u[0].substring(0,T).trim(),u[3]=""}}let g=u[2],x="";if(this.options.pedantic){const b=this.rules.other.pedanticHrefTitle.exec(g);b&&(g=b[1],x=b[3])}else x=u[3]?u[3].slice(1,-1):"";return g=g.trim(),this.rules.other.startAngleBracket.test(g)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(d)?g=g.slice(1):g=g.slice(1,-1)),Qh(u,{href:g&&g.replace(this.rules.inline.anyPunctuation,"$1"),title:x&&x.replace(this.rules.inline.anyPunctuation,"$1")},u[0],this.lexer,this.rules)}}reflink(l,u){let d;if((d=this.rules.inline.reflink.exec(l))||(d=this.rules.inline.nolink.exec(l))){const g=(d[2]||d[1]).replace(this.rules.other.multipleSpaceGlobal," "),x=u[g.toLowerCase()];if(!x){const b=d[0].charAt(0);return{type:"text",raw:b,text:b}}return Qh(d,x,d[0],this.lexer,this.rules)}}emStrong(l,u,d=""){let g=this.rules.inline.emStrongLDelim.exec(l);if(!g||g[3]&&d.match(this.rules.other.unicodeAlphaNumeric))return;if(!(g[1]||g[2]||"")||!d||this.rules.inline.punctuation.exec(d)){const b=[...g[0]].length-1;let _,T,S=b,j=0;const N=g[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(N.lastIndex=0,u=u.slice(-1*l.length+b);(g=N.exec(u))!=null;){if(_=g[1]||g[2]||g[3]||g[4]||g[5]||g[6],!_)continue;if(T=[..._].length,g[3]||g[4]){S+=T;continue}else if((g[5]||g[6])&&b%3&&!((b+T)%3)){j+=T;continue}if(S-=T,S>0)continue;T=Math.min(T,T+S+j);const W=[...g[0]][0].length,A=l.slice(0,b+g.index+W+T);if(Math.min(b,T)%2){const D=A.slice(1,-1);return{type:"em",raw:A,text:D,tokens:this.lexer.inlineTokens(D)}}const J=A.slice(2,-2);return{type:"strong",raw:A,text:J,tokens:this.lexer.inlineTokens(J)}}}}codespan(l){const u=this.rules.inline.code.exec(l);if(u){let d=u[2].replace(this.rules.other.newLineCharGlobal," ");const g=this.rules.other.nonSpaceChar.test(d),x=this.rules.other.startingSpaceChar.test(d)&&this.rules.other.endingSpaceChar.test(d);return g&&x&&(d=d.substring(1,d.length-1)),{type:"codespan",raw:u[0],text:d}}}br(l){const u=this.rules.inline.br.exec(l);if(u)return{type:"br",raw:u[0]}}del(l){const u=this.rules.inline.del.exec(l);if(u)return{type:"del",raw:u[0],text:u[2],tokens:this.lexer.inlineTokens(u[2])}}autolink(l){const u=this.rules.inline.autolink.exec(l);if(u){let d,g;return u[2]==="@"?(d=u[1],g="mailto:"+d):(d=u[1],g=d),{type:"link",raw:u[0],text:d,href:g,tokens:[{type:"text",raw:d,text:d}]}}}url(l){var d;let u;if(u=this.rules.inline.url.exec(l)){let g,x;if(u[2]==="@")g=u[0],x="mailto:"+g;else{let b;do b=u[0],u[0]=((d=this.rules.inline._backpedal.exec(u[0]))==null?void 0:d[0])??"";while(b!==u[0]);g=u[0],u[1]==="www."?x="http://"+u[0]:x=u[0]}return{type:"link",raw:u[0],text:g,href:x,tokens:[{type:"text",raw:g,text:g}]}}}inlineText(l){const u=this.rules.inline.text.exec(l);if(u){const d=this.lexer.state.inRawBlock;return{type:"text",raw:u[0],text:u[0],escaped:d}}}},da=class Kp{constructor(u){on(this,"tokens");on(this,"options");on(this,"state");on(this,"tokenizer");on(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=u||Xo,this.options.tokenizer=this.options.tokenizer||new Cd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const d={other:Hr,block:dd.normal,inline:$u.normal};this.options.pedantic?(d.block=dd.pedantic,d.inline=$u.pedantic):this.options.gfm&&(d.block=dd.gfm,this.options.breaks?d.inline=$u.breaks:d.inline=$u.gfm),this.tokenizer.rules=d}static get rules(){return{block:dd,inline:$u}}static lex(u,d){return new Kp(d).lex(u)}static lexInline(u,d){return new Kp(d).inlineTokens(u)}lex(u){u=u.replace(Hr.carriageReturn,`
`),this.blockTokens(u,this.tokens);for(let d=0;d<this.inlineQueue.length;d++){const g=this.inlineQueue[d];this.inlineTokens(g.src,g.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(u,d=[],g=!1){var x,b,_;for(this.options.pedantic&&(u=u.replace(Hr.tabCharGlobal,"    ").replace(Hr.spaceLine,""));u;){let T;if((b=(x=this.options.extensions)==null?void 0:x.block)!=null&&b.some(j=>(T=j.call({lexer:this},u,d))?(u=u.substring(T.raw.length),d.push(T),!0):!1))continue;if(T=this.tokenizer.space(u)){u=u.substring(T.raw.length);const j=d.at(-1);T.raw.length===1&&j!==void 0?j.raw+=`
`:d.push(T);continue}if(T=this.tokenizer.code(u)){u=u.substring(T.raw.length);const j=d.at(-1);(j==null?void 0:j.type)==="paragraph"||(j==null?void 0:j.type)==="text"?(j.raw+=`
`+T.raw,j.text+=`
`+T.text,this.inlineQueue.at(-1).src=j.text):d.push(T);continue}if(T=this.tokenizer.fences(u)){u=u.substring(T.raw.length),d.push(T);continue}if(T=this.tokenizer.heading(u)){u=u.substring(T.raw.length),d.push(T);continue}if(T=this.tokenizer.hr(u)){u=u.substring(T.raw.length),d.push(T);continue}if(T=this.tokenizer.blockquote(u)){u=u.substring(T.raw.length),d.push(T);continue}if(T=this.tokenizer.list(u)){u=u.substring(T.raw.length),d.push(T);continue}if(T=this.tokenizer.html(u)){u=u.substring(T.raw.length),d.push(T);continue}if(T=this.tokenizer.def(u)){u=u.substring(T.raw.length);const j=d.at(-1);(j==null?void 0:j.type)==="paragraph"||(j==null?void 0:j.type)==="text"?(j.raw+=`
`+T.raw,j.text+=`
`+T.raw,this.inlineQueue.at(-1).src=j.text):this.tokens.links[T.tag]||(this.tokens.links[T.tag]={href:T.href,title:T.title});continue}if(T=this.tokenizer.table(u)){u=u.substring(T.raw.length),d.push(T);continue}if(T=this.tokenizer.lheading(u)){u=u.substring(T.raw.length),d.push(T);continue}let S=u;if((_=this.options.extensions)!=null&&_.startBlock){let j=1/0;const N=u.slice(1);let W;this.options.extensions.startBlock.forEach(A=>{W=A.call({lexer:this},N),typeof W=="number"&&W>=0&&(j=Math.min(j,W))}),j<1/0&&j>=0&&(S=u.substring(0,j+1))}if(this.state.top&&(T=this.tokenizer.paragraph(S))){const j=d.at(-1);g&&(j==null?void 0:j.type)==="paragraph"?(j.raw+=`
`+T.raw,j.text+=`
`+T.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=j.text):d.push(T),g=S.length!==u.length,u=u.substring(T.raw.length);continue}if(T=this.tokenizer.text(u)){u=u.substring(T.raw.length);const j=d.at(-1);(j==null?void 0:j.type)==="text"?(j.raw+=`
`+T.raw,j.text+=`
`+T.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=j.text):d.push(T);continue}if(u){const j="Infinite loop on byte: "+u.charCodeAt(0);if(this.options.silent){console.error(j);break}else throw new Error(j)}}return this.state.top=!0,d}inline(u,d=[]){return this.inlineQueue.push({src:u,tokens:d}),d}inlineTokens(u,d=[]){var T,S,j;let g=u,x=null;if(this.tokens.links){const N=Object.keys(this.tokens.links);if(N.length>0)for(;(x=this.tokenizer.rules.inline.reflinkSearch.exec(g))!=null;)N.includes(x[0].slice(x[0].lastIndexOf("[")+1,-1))&&(g=g.slice(0,x.index)+"["+"a".repeat(x[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(x=this.tokenizer.rules.inline.anyPunctuation.exec(g))!=null;)g=g.slice(0,x.index)+"++"+g.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(x=this.tokenizer.rules.inline.blockSkip.exec(g))!=null;)g=g.slice(0,x.index)+"["+"a".repeat(x[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let b=!1,_="";for(;u;){b||(_=""),b=!1;let N;if((S=(T=this.options.extensions)==null?void 0:T.inline)!=null&&S.some(A=>(N=A.call({lexer:this},u,d))?(u=u.substring(N.raw.length),d.push(N),!0):!1))continue;if(N=this.tokenizer.escape(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.tag(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.link(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.reflink(u,this.tokens.links)){u=u.substring(N.raw.length);const A=d.at(-1);N.type==="text"&&(A==null?void 0:A.type)==="text"?(A.raw+=N.raw,A.text+=N.text):d.push(N);continue}if(N=this.tokenizer.emStrong(u,g,_)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.codespan(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.br(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.del(u)){u=u.substring(N.raw.length),d.push(N);continue}if(N=this.tokenizer.autolink(u)){u=u.substring(N.raw.length),d.push(N);continue}if(!this.state.inLink&&(N=this.tokenizer.url(u))){u=u.substring(N.raw.length),d.push(N);continue}let W=u;if((j=this.options.extensions)!=null&&j.startInline){let A=1/0;const J=u.slice(1);let D;this.options.extensions.startInline.forEach(G=>{D=G.call({lexer:this},J),typeof D=="number"&&D>=0&&(A=Math.min(A,D))}),A<1/0&&A>=0&&(W=u.substring(0,A+1))}if(N=this.tokenizer.inlineText(W)){u=u.substring(N.raw.length),N.raw.slice(-1)!=="_"&&(_=N.raw.slice(-1)),b=!0;const A=d.at(-1);(A==null?void 0:A.type)==="text"?(A.raw+=N.raw,A.text+=N.text):d.push(N);continue}if(u){const A="Infinite loop on byte: "+u.charCodeAt(0);if(this.options.silent){console.error(A);break}else throw new Error(A)}}return d}},Td=class{constructor(l){on(this,"options");on(this,"parser");this.options=l||Xo}space(l){return""}code({text:l,lang:u,escaped:d}){var b;const g=(b=(u||"").match(Hr.notSpaceStart))==null?void 0:b[0],x=l.replace(Hr.endingNewline,"")+`
`;return g?'<pre><code class="language-'+Es(g)+'">'+(d?x:Es(x,!0))+`</code></pre>
`:"<pre><code>"+(d?x:Es(x,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:u}){return`<h${u}>${this.parser.parseInline(l)}</h${u}>
`}hr(l){return`<hr>
`}list(l){const u=l.ordered,d=l.start;let g="";for(let _=0;_<l.items.length;_++){const T=l.items[_];g+=this.listitem(T)}const x=u?"ol":"ul",b=u&&d!==1?' start="'+d+'"':"";return"<"+x+b+`>
`+g+"</"+x+`>
`}listitem(l){var d;let u="";if(l.task){const g=this.checkbox({checked:!!l.checked});l.loose?((d=l.tokens[0])==null?void 0:d.type)==="paragraph"?(l.tokens[0].text=g+" "+l.tokens[0].text,l.tokens[0].tokens&&l.tokens[0].tokens.length>0&&l.tokens[0].tokens[0].type==="text"&&(l.tokens[0].tokens[0].text=g+" "+Es(l.tokens[0].tokens[0].text),l.tokens[0].tokens[0].escaped=!0)):l.tokens.unshift({type:"text",raw:g+" ",text:g+" ",escaped:!0}):u+=g+" "}return u+=this.parser.parse(l.tokens,!!l.loose),`<li>${u}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let u="",d="";for(let x=0;x<l.header.length;x++)d+=this.tablecell(l.header[x]);u+=this.tablerow({text:d});let g="";for(let x=0;x<l.rows.length;x++){const b=l.rows[x];d="";for(let _=0;_<b.length;_++)d+=this.tablecell(b[_]);g+=this.tablerow({text:d})}return g&&(g=`<tbody>${g}</tbody>`),`<table>
<thead>
`+u+`</thead>
`+g+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){const u=this.parser.parseInline(l.tokens),d=l.header?"th":"td";return(l.align?`<${d} align="${l.align}">`:`<${d}>`)+u+`</${d}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${Es(l,!0)}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:u,tokens:d}){const g=this.parser.parseInline(d),x=Jh(l);if(x===null)return g;l=x;let b='<a href="'+l+'"';return u&&(b+=' title="'+Es(u)+'"'),b+=">"+g+"</a>",b}image({href:l,title:u,text:d,tokens:g}){g&&(d=this.parser.parseInline(g,this.parser.textRenderer));const x=Jh(l);if(x===null)return Es(d);l=x;let b=`<img src="${l}" alt="${d}"`;return u&&(b+=` title="${Es(u)}"`),b+=">",b}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):"escaped"in l&&l.escaped?l.text:Es(l.text)}},mh=class{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}},pa=class $p{constructor(u){on(this,"options");on(this,"renderer");on(this,"textRenderer");this.options=u||Xo,this.options.renderer=this.options.renderer||new Td,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new mh}static parse(u,d){return new $p(d).parse(u)}static parseInline(u,d){return new $p(d).parseInline(u)}parse(u,d=!0){var x,b;let g="";for(let _=0;_<u.length;_++){const T=u[_];if((b=(x=this.options.extensions)==null?void 0:x.renderers)!=null&&b[T.type]){const j=T,N=this.options.extensions.renderers[j.type].call({parser:this},j);if(N!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(j.type)){g+=N||"";continue}}const S=T;switch(S.type){case"space":{g+=this.renderer.space(S);continue}case"hr":{g+=this.renderer.hr(S);continue}case"heading":{g+=this.renderer.heading(S);continue}case"code":{g+=this.renderer.code(S);continue}case"table":{g+=this.renderer.table(S);continue}case"blockquote":{g+=this.renderer.blockquote(S);continue}case"list":{g+=this.renderer.list(S);continue}case"html":{g+=this.renderer.html(S);continue}case"paragraph":{g+=this.renderer.paragraph(S);continue}case"text":{let j=S,N=this.renderer.text(j);for(;_+1<u.length&&u[_+1].type==="text";)j=u[++_],N+=`
`+this.renderer.text(j);d?g+=this.renderer.paragraph({type:"paragraph",raw:N,text:N,tokens:[{type:"text",raw:N,text:N,escaped:!0}]}):g+=N;continue}default:{const j='Token with "'+S.type+'" type was not found.';if(this.options.silent)return console.error(j),"";throw new Error(j)}}}return g}parseInline(u,d=this.renderer){var x,b;let g="";for(let _=0;_<u.length;_++){const T=u[_];if((b=(x=this.options.extensions)==null?void 0:x.renderers)!=null&&b[T.type]){const j=this.options.extensions.renderers[T.type].call({parser:this},T);if(j!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(T.type)){g+=j||"";continue}}const S=T;switch(S.type){case"escape":{g+=d.text(S);break}case"html":{g+=d.html(S);break}case"link":{g+=d.link(S);break}case"image":{g+=d.image(S);break}case"strong":{g+=d.strong(S);break}case"em":{g+=d.em(S);break}case"codespan":{g+=d.codespan(S);break}case"br":{g+=d.br(S);break}case"del":{g+=d.del(S);break}case"text":{g+=d.text(S);break}default:{const j='Token with "'+S.type+'" type was not found.';if(this.options.silent)return console.error(j),"";throw new Error(j)}}}return g}},Hp,gd=(Hp=class{constructor(l){on(this,"options");on(this,"block");this.options=l||Xo}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}provideLexer(){return this.block?da.lex:da.lexInline}provideParser(){return this.block?pa.parse:pa.parseInline}},on(Hp,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Hp),Jv=class{constructor(...l){on(this,"defaults",oh());on(this,"options",this.setOptions);on(this,"parse",this.parseMarkdown(!0));on(this,"parseInline",this.parseMarkdown(!1));on(this,"Parser",pa);on(this,"Renderer",Td);on(this,"TextRenderer",mh);on(this,"Lexer",da);on(this,"Tokenizer",Cd);on(this,"Hooks",gd);this.use(...l)}walkTokens(l,u){var g,x;let d=[];for(const b of l)switch(d=d.concat(u.call(this,b)),b.type){case"table":{const _=b;for(const T of _.header)d=d.concat(this.walkTokens(T.tokens,u));for(const T of _.rows)for(const S of T)d=d.concat(this.walkTokens(S.tokens,u));break}case"list":{const _=b;d=d.concat(this.walkTokens(_.items,u));break}default:{const _=b;(x=(g=this.defaults.extensions)==null?void 0:g.childTokens)!=null&&x[_.type]?this.defaults.extensions.childTokens[_.type].forEach(T=>{const S=_[T].flat(1/0);d=d.concat(this.walkTokens(S,u))}):_.tokens&&(d=d.concat(this.walkTokens(_.tokens,u)))}}return d}use(...l){const u=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(d=>{const g={...d};if(g.async=this.defaults.async||g.async||!1,d.extensions&&(d.extensions.forEach(x=>{if(!x.name)throw new Error("extension name required");if("renderer"in x){const b=u.renderers[x.name];b?u.renderers[x.name]=function(..._){let T=x.renderer.apply(this,_);return T===!1&&(T=b.apply(this,_)),T}:u.renderers[x.name]=x.renderer}if("tokenizer"in x){if(!x.level||x.level!=="block"&&x.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const b=u[x.level];b?b.unshift(x.tokenizer):u[x.level]=[x.tokenizer],x.start&&(x.level==="block"?u.startBlock?u.startBlock.push(x.start):u.startBlock=[x.start]:x.level==="inline"&&(u.startInline?u.startInline.push(x.start):u.startInline=[x.start]))}"childTokens"in x&&x.childTokens&&(u.childTokens[x.name]=x.childTokens)}),g.extensions=u),d.renderer){const x=this.defaults.renderer||new Td(this.defaults);for(const b in d.renderer){if(!(b in x))throw new Error(`renderer '${b}' does not exist`);if(["options","parser"].includes(b))continue;const _=b,T=d.renderer[_],S=x[_];x[_]=(...j)=>{let N=T.apply(x,j);return N===!1&&(N=S.apply(x,j)),N||""}}g.renderer=x}if(d.tokenizer){const x=this.defaults.tokenizer||new Cd(this.defaults);for(const b in d.tokenizer){if(!(b in x))throw new Error(`tokenizer '${b}' does not exist`);if(["options","rules","lexer"].includes(b))continue;const _=b,T=d.tokenizer[_],S=x[_];x[_]=(...j)=>{let N=T.apply(x,j);return N===!1&&(N=S.apply(x,j)),N}}g.tokenizer=x}if(d.hooks){const x=this.defaults.hooks||new gd;for(const b in d.hooks){if(!(b in x))throw new Error(`hook '${b}' does not exist`);if(["options","block"].includes(b))continue;const _=b,T=d.hooks[_],S=x[_];gd.passThroughHooks.has(b)?x[_]=j=>{if(this.defaults.async)return Promise.resolve(T.call(x,j)).then(W=>S.call(x,W));const N=T.call(x,j);return S.call(x,N)}:x[_]=(...j)=>{let N=T.apply(x,j);return N===!1&&(N=S.apply(x,j)),N}}g.hooks=x}if(d.walkTokens){const x=this.defaults.walkTokens,b=d.walkTokens;g.walkTokens=function(_){let T=[];return T.push(b.call(this,_)),x&&(T=T.concat(x.call(this,_))),T}}this.defaults={...this.defaults,...g}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,u){return da.lex(l,u??this.defaults)}parser(l,u){return pa.parse(l,u??this.defaults)}parseMarkdown(l){return(d,g)=>{const x={...g},b={...this.defaults,...x},_=this.onError(!!b.silent,!!b.async);if(this.defaults.async===!0&&x.async===!1)return _(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof d>"u"||d===null)return _(new Error("marked(): input parameter is undefined or null"));if(typeof d!="string")return _(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(d)+", string expected"));b.hooks&&(b.hooks.options=b,b.hooks.block=l);const T=b.hooks?b.hooks.provideLexer():l?da.lex:da.lexInline,S=b.hooks?b.hooks.provideParser():l?pa.parse:pa.parseInline;if(b.async)return Promise.resolve(b.hooks?b.hooks.preprocess(d):d).then(j=>T(j,b)).then(j=>b.hooks?b.hooks.processAllTokens(j):j).then(j=>b.walkTokens?Promise.all(this.walkTokens(j,b.walkTokens)).then(()=>j):j).then(j=>S(j,b)).then(j=>b.hooks?b.hooks.postprocess(j):j).catch(_);try{b.hooks&&(d=b.hooks.preprocess(d));let j=T(d,b);b.hooks&&(j=b.hooks.processAllTokens(j)),b.walkTokens&&this.walkTokens(j,b.walkTokens);let N=S(j,b);return b.hooks&&(N=b.hooks.postprocess(N)),N}catch(j){return _(j)}}}onError(l,u){return d=>{if(d.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const g="<p>An error occurred:</p><pre>"+Es(d.message+"",!0)+"</pre>";return u?Promise.resolve(g):g}if(u)return Promise.reject(d);throw d}}},Vo=new Jv;function Jt(l,u){return Vo.parse(l,u)}Jt.options=Jt.setOptions=function(l){return Vo.setOptions(l),Jt.defaults=Vo.defaults,nm(Jt.defaults),Jt};Jt.getDefaults=oh;Jt.defaults=Xo;Jt.use=function(...l){return Vo.use(...l),Jt.defaults=Vo.defaults,nm(Jt.defaults),Jt};Jt.walkTokens=function(l,u){return Vo.walkTokens(l,u)};Jt.parseInline=Vo.parseInline;Jt.Parser=pa;Jt.parser=pa.parse;Jt.Renderer=Td;Jt.TextRenderer=mh;Jt.Lexer=da;Jt.lexer=da.lex;Jt.Tokenizer=Cd;Jt.Hooks=gd;Jt.parse=Jt;Jt.options;Jt.setOptions;Jt.use;Jt.walkTokens;Jt.parseInline;pa.parse;da.lex;/*! @license DOMPurify 3.4.18 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.18/LICENSE */function Zh(l,u){(u==null||u>l.length)&&(u=l.length);for(var d=0,g=Array(u);d<u;d++)g[d]=l[d];return g}function Xv(l){if(Array.isArray(l))return l}function Qv(l,u){var d=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(d!=null){var g,x,b,_,T=[],S=!0,j=!1;try{if(b=(d=d.call(l)).next,u!==0)for(;!(S=(g=b.call(d)).done)&&(T.push(g.value),T.length!==u);S=!0);}catch(N){j=!0,x=N}finally{try{if(!S&&d.return!=null&&(_=d.return(),Object(_)!==_))return}finally{if(j)throw x}}return T}}function Zv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function ex(l,u){return Xv(l)||Qv(l,u)||tx(l,u)||Zv()}function tx(l,u){if(l){if(typeof l=="string")return Zh(l,u);var d={}.toString.call(l).slice(8,-1);return d==="Object"&&l.constructor&&(d=l.constructor.name),d==="Map"||d==="Set"?Array.from(l):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?Zh(l,u):void 0}}const hm=Object.entries,nx=Object.keys,ef=Object.setPrototypeOf,rx=Object.isFrozen,fm=Object.getPrototypeOf,mm=Object.getOwnPropertyDescriptor;let dr=Object.freeze,Qn=Object.seal,Qa=Object.create,gm=typeof Reflect<"u"&&Reflect,jd=gm.apply,Gp=gm.construct;dr||(dr=function(u){return u});Qn||(Qn=function(u){return u});jd||(jd=function(u,d){for(var g=arguments.length,x=new Array(g>2?g-2:0),b=2;b<g;b++)x[b-2]=arguments[b];return u.apply(d,x)});Gp||(Gp=function(u){for(var d=arguments.length,g=new Array(d>1?d-1:0),x=1;x<d;x++)g[x-1]=arguments[x];return new u(...g)});const oa=jn(Array.prototype.forEach),ix=jn(Array.prototype.lastIndexOf),tf=jn(Array.prototype.pop),Yu=jn(Array.prototype.push),sx=jn(Array.prototype.slice),ax=jn(Array.prototype.splice),Ul=Array.isArray,Pp=ym(Set),Ap=jn(Set.prototype.add),Vu=jn(Set.prototype.has),Ko=jn(String.prototype.toLowerCase),Rp=jn(String.prototype.toString),ox=jn(String.prototype.match),pd=jn(String.prototype.replace),Ip=jn(String.prototype.indexOf),lx=jn(String.prototype.trim),ux=jn(Number.prototype.toString),cx=jn(Boolean.prototype.toString),nf=typeof BigInt>"u"?null:jn(BigInt.prototype.toString),rf=typeof Symbol>"u"?null:jn(Symbol.prototype.toString),Ar=jn(Object.prototype.hasOwnProperty),Ju=jn(Object.prototype.toString),dx=RegExp.prototype.test,cr=function(u,d){return u instanceof RegExp&&(u.lastIndex=0),jd(dx,u,[d])},la=ym(TypeError);function jn(l){return function(u){for(var d=arguments.length,g=new Array(d>1?d-1:0),x=1;x<d;x++)g[x-1]=arguments[x];return jd(l,u,g)}}function ym(l){return function(){for(var u=arguments.length,d=new Array(u),g=0;g<u;g++)d[g]=arguments[g];return Gp(l,d)}}function $t(l,u){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ko;if(ef&&ef(l,null),!Ul(u))return l;let g=u.length;for(;g--;){let x=u[g];if(typeof x=="string"){const b=d(x);b!==x&&(rx(u)||(u[g]=b),x=b)}l[x]=!0}return l}function px(l){for(let u=0;u<l.length;u++)Ar(l,u)||(l[u]=null);return l}function Nd(l){const u=Qa(null);for(const g of hm(l)){var d=ex(g,2);const x=d[0],b=d[1];Ar(l,x)&&(Ul(b)?u[x]=px(b):b&&typeof b=="object"&&b.constructor===Object?u[x]=Nd(b):u[x]=b)}return u}function Xu(l){const u=Qa(null),d=nx(l);let g=d.length;for(;g--;)u[d[g]]=l[d[g]];return u}function hx(l){switch(typeof l){case"string":return l;case"number":return ux(l);case"boolean":return cx(l);case"bigint":return nf?nf(l):"0";case"symbol":return rf?rf(l):"Symbol()";case"undefined":return Ju(l);case"function":case"object":{if(l===null)return Ju(l);const u=l,d=Ii(u,"toString");if(typeof d=="function"){const g=d(u);return typeof g=="string"?g:Ju(g)}return Ju(l)}default:return Ju(l)}}function Ii(l,u){for(;l!==null;){const g=mm(l,u);if(g){if(g.get)return jn(g.get);if(typeof g.value=="function")return jn(g.value)}l=fm(l)}function d(){return null}return d}function fx(l,u){for(;l!==null;){const d=mm(l,u);if(d)return d.get?jn(d.get):null;l=fm(l)}return null}function mx(l){if(!l)return!1;try{return cr(l,""),!0}catch{return!1}}const sf=dr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Op=dr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Mp=dr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),gx=dr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Dp=dr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),yx=dr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),af=dr(["#text"]),of=dr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),zp=dr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),lf=dr(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),hd=dr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),vx=Qn(/{{[\w\W]*|^[\w\W]*}}/g),xx=Qn(/<%[\w\W]*|^[\w\W]*%>/g),bx=Qn(/\${[\w\W]*/g),wx=Qn(/{{|}}|\${|<%|%>|&lt;%|%&gt;/),kx=Qn(/^data-[\-\w.\u00B7-\uFFFF]+$/),Sx=Qn(/^aria-[\-\w]+$/),uf=Qn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),_x=Qn(/^(?:\w+script|data):/i),Cx=Qn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Tx=Qn(/^html$/i),jx=Qn(/^[a-z][.\w]*(-[.\w]+)+$/i),Fp=Qn(/<[/\w!]/g),cf=Qn(/<[/\w]/g),Nx=Qn(/<\/no(script|embed|frames)/i),df=Qn(/\/>/i),Ex=Qn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i),Lx=Qn(/^[\r\n\t ]+/),Kn={element:1,text:3,processingInstruction:7,comment:8,document:9,documentFragment:11},Px=dr($t({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),Ax=function(){return typeof window>"u"?null:window},Rx=function(u,d){if(typeof u!="object"||typeof u.createPolicy!="function")return null;let g=null;const x="data-tt-policy-suffix";d&&d.hasAttribute(x)&&(g=d.getAttribute(x));const b="dompurify"+(g?"#"+g:"");try{return u.createPolicy(b,{createHTML(_){return _},createScriptURL(_){return _}})}catch{return console.warn("TrustedTypes policy "+b+" could not be created."),null}},pf=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Xa=function(u,d,g,x){return Ar(u,d)&&Ul(u[d])?$t(x.base?Xu(x.base):{},u[d],x.transform):g},Wp=function(u,d,g){const x=Ar(u,d)?u[d]:void 0;return x&&typeof x=="object"?Nd(x):g};function vm(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ax();const u=Se=>vm(Se);if(u.version="3.4.18",u.removed=[],!l||!l.document||l.document.nodeType!==Kn.document||!l.Element)return u.isSupported=!1,u;let d=l.document;const g=d,x=g.currentScript,b=l.HTMLTemplateElement,_=l.Node,T=l.Element,S=l.NodeFilter,j=l.DOMParser,N=l.trustedTypes,W=T.prototype,A=Ii(W,"cloneNode"),J=Ii(W,"remove"),D=Ii(W,"removeAttributeNode"),G=Ii(W,"nextSibling"),X=Ii(W,"childNodes"),M=Ii(W,"parentNode"),F=Ii(W,"shadowRoot"),q=Ii(W,"attributes"),H=_&&_.prototype?Ii(_.prototype,"nodeType"):null,Y=_&&_.prototype?Ii(_.prototype,"nodeName"):null,pe=_&&_.prototype?Ii(_.prototype,"ownerDocument"):null,V=function(I){return H?H(I):I.nodeType},ye=function(I){return Y?Y(I):I.nodeName},ze=fx(W,"namespaceURI"),_e=function(I){return ze?ze(I):I.namespaceURI};if(typeof b=="function"){const Se=d.createElement("template");Se.content&&Se.content.ownerDocument&&(d=Se.content.ownerDocument)}let oe,Ce="",le,ve=!1,E=0;const ee=function(){if(E>0)throw la('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Q=function(I){ee(),E++;try{return oe.createHTML(I)}finally{E--}},R=function(I){return oe&&hi?Q(I):I},L=function(I){ee(),E++;try{return oe.createScriptURL(I)}finally{E--}},$=function(){return ve||(le=Rx(N,x),ve=!0),le},O=d,Z=O.implementation,ke=O.createNodeIterator,Ie=O.createDocumentFragment,qe=O.getElementsByTagName,Oe=g.importNode;let we=pf();u.isSupported=typeof hm=="function"&&typeof M=="function"&&Z&&Z.createHTMLDocument!==void 0;const Be=vx,Ke=xx,et=bx,$e=kx,Ft=Sx,Yt=_x,_t=Cx,xt=jx;let tt=uf,Ue=null;const vt=$t({},[...sf,...Op,...Mp,...Dp,...af]);let yt=null;const Qe=$t({},[...of,...zp,...lf,...hd]);let ut=null,ae=null,je=null;const he=Object.seal(Qa(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let kt=!0,Ye=!0,at=!1,Ze=!0,mt=!1,pt=!0,Xt=!1,nr=!1,Sr=null,Rr=null,Br=!1,Ur=!1,bt=!1,hi=!1,rt=!0,_r=!1;const tn="user-content-";let It=!0,qt=!1,xn=null,mn=!1,Nn=null;const bn=$t({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let ti=null;const In=$t({},["audio","video","img","source","image","track"]);let pr=null;const fi=$t({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),En="http://www.w3.org/1998/Math/MathML",is="http://www.w3.org/2000/svg",wn="http://www.w3.org/1999/xhtml";let Cr=wn,qr=!1,Ir=null;const Tr=$t({},[En,is,wn],Rp),mi=dr($t({},["mi","mo","mn","ms","mtext"]));let ss=null;const On=dr($t({},["annotation-xml"]));let as=null;const Mi=dr(Qa(null)),Or=$t({},["title","style","font","a","script"]);let Gn=null;const gi=["application/xhtml+xml","text/html"],Di="text/html";let Bt=null,Mr=null;const os=d.createElement("form"),Rt=function(I){return I instanceof RegExp||I instanceof Function},zi=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(!I||typeof I!="object")&&(I={}),I=Nd(I),Gn=gi.indexOf(I.PARSER_MEDIA_TYPE)===-1?Di:I.PARSER_MEDIA_TYPE,Bt=Gn==="application/xhtml+xml"?Rp:Ko,Ue=Xa(I,"ALLOWED_TAGS",vt,{transform:Bt}),yt=Xa(I,"ALLOWED_ATTR",Qe,{transform:Bt}),Ir=Xa(I,"ALLOWED_NAMESPACES",Tr,{transform:Rp}),pr=Xa(I,"ADD_URI_SAFE_ATTR",fi,{transform:Bt,base:fi}),ti=Xa(I,"ADD_DATA_URI_TAGS",In,{transform:Bt,base:In}),Nn=Xa(I,"FORBID_CONTENTS",bn,{transform:Bt}),ae=Xa(I,"FORBID_TAGS",Qa(null),{transform:Bt}),je=Xa(I,"FORBID_ATTR",Qa(null),{transform:Bt}),mn=Ar(I,"USE_PROFILES")?I.USE_PROFILES&&typeof I.USE_PROFILES=="object"?Nd(I.USE_PROFILES):I.USE_PROFILES:!1,kt=I.ALLOW_ARIA_ATTR!==!1,Ye=I.ALLOW_DATA_ATTR!==!1,at=I.ALLOW_UNKNOWN_PROTOCOLS||!1,Ze=I.ALLOW_SELF_CLOSE_IN_ATTR!==!1,mt=I.SAFE_FOR_TEMPLATES||!1,pt=I.SAFE_FOR_XML!==!1,Xt=I.WHOLE_DOCUMENT||!1,Ur=I.RETURN_DOM||!1,bt=I.RETURN_DOM_FRAGMENT||!1,hi=I.RETURN_TRUSTED_TYPE||!1,Br=I.FORCE_BODY||!1,rt=I.SANITIZE_DOM!==!1,_r=I.SANITIZE_NAMED_PROPS||!1,It=I.KEEP_CONTENT!==!1,qt=I.IN_PLACE||!1,tt=mx(I.ALLOWED_URI_REGEXP)?I.ALLOWED_URI_REGEXP:uf,Cr=typeof I.NAMESPACE=="string"?I.NAMESPACE:wn,ss=Wp(I,"MATHML_TEXT_INTEGRATION_POINTS",mi),as=Wp(I,"HTML_INTEGRATION_POINTS",On);const re=Wp(I,"CUSTOM_ELEMENT_HANDLING",Mi);if(ut=Qa(null),Ar(re,"tagNameCheck")&&Rt(re.tagNameCheck)&&(ut.tagNameCheck=re.tagNameCheck),Ar(re,"attributeNameCheck")&&Rt(re.attributeNameCheck)&&(ut.attributeNameCheck=re.attributeNameCheck),Ar(re,"allowCustomizedBuiltInElements")&&typeof re.allowCustomizedBuiltInElements=="boolean"&&(ut.allowCustomizedBuiltInElements=re.allowCustomizedBuiltInElements),Qn(ut),mt&&(Ye=!1),bt&&(Ur=!0),mn&&((Ar(I,"ALLOWED_TAGS")||Ar(I,"ALLOWED_ATTR"))&&typeof console<"u"&&typeof console.warn=="function"&&console.warn("DOMPurify: USE_PROFILES overrides ALLOWED_TAGS and ALLOWED_ATTR. Do not use these options together."),Ue=$t({},af),yt=Qa(null),mn.html===!0&&($t(Ue,sf),$t(yt,of)),mn.svg===!0&&($t(Ue,Op),$t(yt,zp),$t(yt,hd)),mn.svgFilters===!0&&($t(Ue,Mp),$t(yt,zp),$t(yt,hd)),mn.mathMl===!0&&($t(Ue,Dp),$t(yt,lf),$t(yt,hd))),he.tagCheck=null,he.attributeCheck=null,Ar(I,"ADD_TAGS")&&(typeof I.ADD_TAGS=="function"?he.tagCheck=I.ADD_TAGS:Ul(I.ADD_TAGS)&&(Ue===vt&&(Ue=Xu(Ue)),$t(Ue,I.ADD_TAGS,Bt))),Ar(I,"ADD_ATTR")&&(typeof I.ADD_ATTR=="function"?he.attributeCheck=I.ADD_ATTR:Ul(I.ADD_ATTR)&&(yt===Qe&&(yt=Xu(yt)),$t(yt,I.ADD_ATTR,Bt))),Ar(I,"ADD_FORBID_CONTENTS")&&Ul(I.ADD_FORBID_CONTENTS)&&(Nn===bn&&(Nn=Xu(Nn)),$t(Nn,I.ADD_FORBID_CONTENTS,Bt)),It&&(Ue["#text"]=!0),Xt&&$t(Ue,["html","head","body"]),Ue.table&&(Ue.tbody=!0,delete ae.tbody),I.TRUSTED_TYPES_POLICY){if(typeof I.TRUSTED_TYPES_POLICY.createHTML!="function")throw la('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof I.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw la('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const xe=oe;oe=I.TRUSTED_TYPES_POLICY;try{Ce=Q("")}catch(Le){throw oe=xe,Le}}else I.TRUSTED_TYPES_POLICY===null?(oe=void 0,Ce=""):(oe===void 0&&(oe=$()),oe&&typeof Ce=="string"&&(Ce=Q("")));Mr=dr(I)},ni=$t({},[...Op,...Mp,...gx]),Vt=$t({},[...Dp,...yx]),Je=function(I,re,xe){return re===wn?I==="svg":re===En?I==="svg"&&(xe==="annotation-xml"||ss[xe]):!!ni[I]},ri=function(I,re,xe){return re===wn?I==="math":re===is?I==="math"&&as[xe]:!!Vt[I]},ls=function(I,re,xe){return re===is&&!as[xe]||re===En&&!ss[xe]?!1:!Vt[I]&&(Or[I]||!ni[I])},Yn=function(I){const re=_e(I),xe=Ko(ye(I)),Le=M(I);let nt=Cr,ct="template";return Le&&V(Le)===Kn.element&&(nt=_e(Le),ct=Ko(ye(Le))),Ir[re]?re===is?Je(xe,nt,ct):re===En?ri(xe,nt,ct):re===wn?ls(xe,nt,ct):Gn==="application/xhtml+xml":!1},C=function(I){Yu(u.removed,{element:I});try{M(I).removeChild(I)}catch{if(J(I),!M(I))throw la("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},B=function(I,re,xe){try{D(I,re)}catch{try{I.removeAttribute(xe)}catch{}}},me=function(I){jt(I);const re=X(I);re&&oa(sx(re),xe=>{try{J(xe)}catch{}}),V(I)===Kn.element&&de(I,!1)},Ne=function(I,re,xe){if(!xe)try{xe=re.getAttributeNode(I)}catch{xe=null}if(Yu(u.removed,{attribute:xe||null,from:re}),xe)B(re,xe,I);else try{re.removeAttribute(I)}catch{}if(I==="is")if(Ur||bt)try{C(re)}catch{}else try{re.setAttribute(I,"")}catch{}},de=function(I,re){const xe=q(I);if(xe)for(let Le=xe.length-1;Le>=0;--Le){const nt=xe[Le],ct=nt&&nt.name;typeof ct=="string"&&!(re&&yt[Bt(ct)])&&B(I,nt,ct)}},He=function(I,re){let xe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const Le=[I];for(;Le.length>0;){const nt=Le.pop();if(re(nt)===!1)continue;if(xe&&V(nt)===Kn.element){const Ct=F(nt);vi(Ct)&&Le.push(Ct)}const ct=X(nt);if(ct)for(let Ct=ct.length-1;Ct>=0;--Ct)Le.push(ct[Ct])}},jt=function(I){He(I,re=>{V(re)===Kn.element&&de(re,!0)})},Qt=function(I){const re=[];return He(I,xe=>{re.push(xe)},!0),re},kn=function(I,re){const xe=Pp();oa(Qt(I),Le=>{V(Le)===Kn.element&&Ap(xe,Le)}),oa(re,Le=>{V(Le)===Kn.element&&!Vu(xe,Le)&&de(Le,!0)})},Kr=function(I,re){let xe=!1;return oa(u.removed,Le=>{Le.element&&(xe=xe||Le.element===I,jt(Le.element))}),kn(I,re),xe},Qo=8,gt=function(I,re){const xe=xn;let Le=null;const nt=()=>(Le||(Le=Pp(),oa(re,ct=>{Ap(Le,ct)})),Le);for(let ct=0;;ct++){const Ct=Qt(I),cn=[I];let Kt=!1;if(oa(Ct,hr=>{V(hr)===Kn.documentFragment?Yu(cn,hr):!Kt&&!Vu(xe,hr)&&(Kt=Vu(nt(),hr))}),!Kt)return;if(ct>=Qo)throw la("the tree kept changing during in-place sanitization; refusing to return it");oa(cn,(hr,Vn)=>{Za(hr,Vn>0,I,nt())})}},Za=function(I,re,xe,Le){const nt=Wi(I);let ct;for(;ct=nt.nextNode();)!Vu(Le,ct)||Vu(xn,ct)||(re&&ir(we.uponSanitizeShadowNode,ct,null),Os(ct,xe))},eo=function(I){xn&&Ap(xn,I)},Fi=function(I,re){return pt?I==="patchsrc"?!0:I==="for"&&re!=="label"&&re!=="output":!1},rr=function(I){pt&&He(I,re=>{const xe=V(re);if(xe===Kn.processingInstruction||xe===Kn.comment&&cr(cf,re.data)){try{J(re)}catch{}return!1}if(xe===Kn.element){const Le=re,nt=Bt(ye(re));try{Le.hasAttribute&&Le.hasAttribute("patchsrc")&&Le.removeAttribute("patchsrc"),Le.hasAttribute&&Le.hasAttribute("for")&&Fi("for",nt)&&Le.removeAttribute("for")}catch{}}return!0})},to=function(I){let re=null,xe=null;if(Br)I="<remove></remove>"+I;else{const ct=ox(I,Lx);xe=ct&&ct[0]}Gn==="application/xhtml+xml"&&Cr===wn&&(I='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+I+"</body></html>");const Le=oe?Q(I):I;if(Cr===wn)try{re=new j().parseFromString(Le,Gn)}catch{}if(!re||!re.documentElement){re=Z.createDocument(Cr,"template",null);try{re.documentElement.innerHTML=qr?Ce:Le}catch{}}const nt=re.body||re.documentElement;return I&&xe&&nt.insertBefore(d.createTextNode(xe),nt.childNodes[0]||null),Cr===wn?qe.call(re,Xt?"html":"body")[0]:Xt?re.documentElement:nt},Wi=function(I){let re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const xe=pe?pe(I):I.ownerDocument;return ke.call(xe||I,I,(re?0:S.SHOW_ELEMENT)|S.SHOW_COMMENT|S.SHOW_TEXT|S.SHOW_PROCESSING_INSTRUCTION|S.SHOW_CDATA_SECTION,null)},Nt=function(I){return I=pd(I,Be," "),I=pd(I,Ke," "),I=pd(I,et," "),I},us=function(I){var re;Ps(I);const xe=(re=I.querySelectorAll)===null||re===void 0?void 0:re.call(I,"template");xe&&oa(xe,Le=>{vi(Le.content)&&us(Le.content)})},Ps=function(I){I.normalize();const re=Wi(I,!0);let xe=re.nextNode();for(;xe;)xe.data=Nt(xe.data),xe=re.nextNode()},yi=function(I){const re=Y?Y(I):null;return typeof re!="string"||Bt(re)!=="form"?!1:typeof I.nodeName!="string"||typeof I.textContent!="string"||typeof I.removeChild!="function"||I.attributes!==q(I)||typeof I.removeAttribute!="function"||typeof I.removeAttributeNode!="function"||typeof I.getAttributeNode!="function"||typeof I.setAttribute!="function"||typeof I.namespaceURI!="string"||typeof I.insertBefore!="function"||typeof I.hasChildNodes!="function"||I.nodeType!==H(I)||I.childNodes!==X(I)},ga=function(I){if(!H||typeof I!="object"||I===null)return null;try{const re=H(I);return typeof re=="number"?re:null}catch{return null}},vi=function(I){return ga(I)===Kn.documentFragment},Hi=function(I){return ga(I)!==null};function ir(Se,I,re){Se.length!==0&&oa(Se,xe=>{xe.call(u,I,re,Mr)})}const ya=function(I,re,xe){return!!(pt&&xe===Kn.element&&I.hasChildNodes()&&!Hi(I.firstElementChild)&&cr(Fp,I.textContent)&&cr(Fp,I.innerHTML)||pt&&Px[re]&&xe===Kn.element&&_e(I)===wn&&(Hi(I.firstElementChild)||typeof I.textContent=="string"&&cr(Fp,I.textContent))||xe===Kn.processingInstruction||pt&&xe===Kn.comment&&cr(cf,I.data))},Dr=function(I,re){if(I instanceof RegExp)return cr(I,re);if(I instanceof Function){for(var xe=arguments.length,Le=new Array(xe>2?xe-2:0),nt=2;nt<xe;nt++)Le[nt-2]=arguments[nt];return!!I(re,...Le)}return!1},ii=function(I,re,xe){if(!ae[re]&&no(re)&&Dr(ut.tagNameCheck,re))return!1;if(It&&!Nn[re]&&!Nn[Ko(re)]){const Le=M(I),nt=X(I);if(nt&&Le){const ct=nt.length;for(let Ct=ct-1;Ct>=0;--Ct){const cn=I===xe?A(nt[Ct],!0):nt[Ct];Le.insertBefore(cn,G(I))}}}return C(I),!0},Mn=function(I,re,xe,Le){return I.length===0?re:re===xe||re===Le?Xu(re):re},$r=function(I,re){return I===re||M(I)!==null?!1:(qt&&jt(I),!0)},As=function(I,re){if(eo(I),ir(we.beforeSanitizeElements,I,null),$r(I,re))return!0;if(yi(I))return C(I),!0;const xe=Bt(ye(I)),Le=V(I);if(Ue=Mn(we.uponSanitizeElement,Ue,vt,Sr),ir(we.uponSanitizeElement,I,{tagName:xe,allowedTags:Ue}),$r(I,re))return!0;if(ya(I,xe,Le))return C(I),!0;if(ae[xe]||!(he.tagCheck instanceof Function&&he.tagCheck(xe))&&!Ue[xe]){const nt=ii(I,xe,re);return nt===!1&&(ir(we.afterSanitizeElements,I,null),$r(I,re))?!0:nt}if(Le===Kn.element&&!Yn(I)||(xe==="noscript"||xe==="noembed"||xe==="noframes")&&cr(Nx,I.innerHTML))return C(I),!0;if(mt&&Le===Kn.text){const nt=I.textContent,ct=Nt(nt);nt!==ct&&(Yu(u.removed,{element:I.cloneNode()}),I.textContent=ct)}return ir(we.afterSanitizeElements,I,null),$r(I,re)},jr=function(I,re,xe){if(je[re]||Fi(re,I)||rt&&(re==="id"||re==="name")&&(xe in d||xe in os))return!1;const Le=yt[re]||he.attributeCheck instanceof Function&&he.attributeCheck(re,I);if(Ye&&cr($e,re)||kt&&cr(Ft,re))return!0;if(!Le)return no(I)&&Dr(ut.tagNameCheck,I)&&Dr(ut.attributeNameCheck,re,I)||re==="is"&&ut.allowCustomizedBuiltInElements&&Dr(ut.tagNameCheck,xe);if(pr[re])return!0;const nt=pd(xe,_t,"");return cr(tt,nt)||(re==="src"||re==="xlink:href"||re==="href")&&I!=="script"&&Ip(xe,"data:")===0&&ti[I]||at&&!cr(Yt,nt)?!0:!xe},Rs=$t({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),no=function(I){return!Rs[Ko(I)]&&cr(xt,I)},Is=function(I,re,xe,Le){if(oe&&typeof N=="object"&&typeof N.getAttributeType=="function"&&!xe)switch(N.getAttributeType(I,re)){case"TrustedHTML":return Q(Le);case"TrustedScriptURL":return L(Le)}return Le},Kl=function(I,re,xe,Le){try{return xe?I.setAttributeNS(xe,re,Le):I.setAttribute(re,Le),yi(I)?(C(I),!1):!0}catch{return Ne(re,I),!1}},ro=function(I,re){return pt&&cr(Ex,re)?!0:Ko(I)==="attributename"&&Ip(re,"href")!==-1},cs=function(I,re){if(ir(we.beforeSanitizeAttributes,I,null),$r(I,re))return;const xe=I.attributes;if(!xe||yi(I))return;yt=Mn(we.uponSanitizeAttribute,yt,Qe,Rr);const Le={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:yt,forceKeepAttr:void 0};let nt=xe.length;const ct=Bt(ye(I));for(;nt--;){const Ct=xe[nt],cn=Ct.name,Kt=Ct.namespaceURI,hr=Ct.value,Vn=Bt(cn),fr=hr;let dn=cn==="value"?fr:lx(fr),Nr=!1;if(Le.attrName=Vn,Le.attrValue=dn,Le.keepAttr=!0,Le.forceKeepAttr=void 0,ir(we.uponSanitizeAttribute,I,Le),dn=Le.attrValue,_r&&(Vn==="id"||Vn==="name")&&Ip(dn,tn)!==0&&(Ne(cn,I,Ct),dn=tn+dn,Nr=!0),ro(cn,dn)){Ne(cn,I,Ct);continue}if(!Le.forceKeepAttr){if(!Le.keepAttr){Ne(cn,I,Ct);continue}if(!Ze&&cr(df,dn)){Ne(cn,I,Ct);continue}if(mt&&(dn=Nt(dn)),!jr(ct,Vn,dn)){Ne(cn,I,Ct);continue}dn=Is(ct,Vn,Kt,dn),dn!==fr&&Kl(I,cn,Kt,dn)&&Nr&&tf(u.removed)}}ir(we.afterSanitizeAttributes,I,null),$r(I,re)},Os=function(I,re){As(I,re),cs(I,re),vi(I.content)&&io(I.content)},io=function(I){let re=null;const xe=Wi(I);for(ir(we.beforeSanitizeShadowDOM,I,null);re=xe.nextNode();)if(ir(we.uponSanitizeShadowNode,re,null),Os(re,I),V(re)===Kn.element){const Le=F(re);vi(Le)&&(xi(Le),io(Le))}mt&&Ps(I),ir(we.afterSanitizeShadowDOM,I,null)},xi=function(I){const re=[{node:I,shadow:null}];for(;re.length>0;){const xe=re.pop();if(xe.shadow){io(xe.shadow);continue}const Le=xe.node,nt=V(Le)===Kn.element,ct=X(Le);if(ct)for(let Ct=ct.length-1;Ct>=0;--Ct)re.push({node:ct[Ct],shadow:null});if(nt){const Ct=Y?Y(Le):null;if(typeof Ct=="string"&&Bt(Ct)==="template"){const cn=Le.content;vi(cn)&&re.push({node:cn,shadow:null})}}if(nt){const Ct=F(Le);vi(Ct)&&re.push({node:null,shadow:Ct},{node:Ct,shadow:null})}}};return u.sanitize=function(Se){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},re=null,xe=null,Le=null,nt=null;if(qr=!Se,qr&&(Se="<!-->"),typeof Se!="string"&&!Hi(Se)&&(Se=hx(Se),typeof Se!="string"))throw la("dirty is not a string, aborting");if(!u.isSupported)return Se;nr?(Ue=Sr,yt=Rr):zi(I),u.removed=[];const ct=qt&&typeof Se!="string"&&Hi(Se);let Ct=[];const cn=xn;if(ct){rr(Se);const fr=ye(Se);if(typeof fr=="string"){const dn=Bt(fr);if(!Ue[dn]||ae[dn])throw me(Se),la("root node is forbidden and cannot be sanitized in-place")}if(yi(Se))throw me(Se),la("root node is clobbered and cannot be sanitized in-place");Ct=Qt(Se),xn=Pp()}else if(Hi(Se))re=to("<!---->"),xe=re.ownerDocument.importNode(Se,!0),xe.nodeType===Kn.element&&xe.nodeName==="BODY"||xe.nodeName==="HTML"?re=xe:re.appendChild(xe),xi(re);else{if(!Ur&&!mt&&!Xt&&Se.indexOf("<")===-1)return R(Se);if(re=to(Se),!re)return Ur?null:hi?Ce:""}re&&Br&&C(re.firstChild);const Kt=ct?Se:re;try{ct&&xi(Se);const fr=Wi(Kt);for(;Le=fr.nextNode();)Os(Le,Kt);ct&&gt(Se,Ct)}catch(fr){throw ct&&(me(Se),Kr(Se,Ct)),fr}finally{xn=cn}if(ct){if(Kr(Se,Ct))throw la("a node selected for removal could not be safely returned; refusing to sanitize in place");return mt&&us(Se),Se}if(Ur){if(mt&&us(re),bt)for(nt=Ie.call(re.ownerDocument);re.firstChild;)nt.appendChild(re.firstChild);else nt=re;return(yt.shadowroot||yt.shadowrootmode)&&(nt=Oe.call(g,nt,!0)),nt}const hr=()=>Xt?re.outerHTML:re.innerHTML;let Vn=hr();return mt&&cr(wx,Vn)&&(Ps(re),Vn=hr()),Xt&&Ue["!doctype"]&&re.ownerDocument&&re.ownerDocument.doctype&&re.ownerDocument.doctype.name&&cr(Tx,re.ownerDocument.doctype.name)&&(Vn="<!DOCTYPE "+re.ownerDocument.doctype.name+`>
`+Vn),R(Vn)},u.setConfig=function(){let Se=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};zi(Se),nr=!0,Sr=Ue,Rr=yt},u.clearConfig=function(){Mr=null,nr=!1,Sr=null,Rr=null,oe=le,Ce=""},u.isValidAttribute=function(Se,I,re){Mr||zi({});const xe=Bt(Se),Le=Bt(I);return typeof re=="string"&&(ro(I,re)||!Ze&&cr(df,re))?!1:jr(xe,Le,re)},u.addHook=function(Se,I){typeof I=="function"&&Ar(we,Se)&&Yu(we[Se],I)},u.removeHook=function(Se,I){if(Ar(we,Se)){if(I!==void 0){const re=ix(we[Se],I);return re===-1?void 0:ax(we[Se],re,1)[0]}return tf(we[Se])}},u.removeHooks=function(Se){Ar(we,Se)&&(we[Se]=[])},u.removeAllHooks=function(){we=pf()},u}var Ix=vm();function Ox(l,u=null){const d=String(l||""),g=d.split(`
`),x=g.findIndex(S=>/^##\s+(?:Practice|Solve)(?:\s*[:—-].*)?\s*$/i.test(S)),b=x===-1?-1:g.findIndex((S,j)=>j>x&&/^##\s+(?:Reflect(?:ion)?|Learn|Stop and think|Optional reading)(?:\b|\s*[:—-])/i.test(S)),_=x>=0?g.slice(x,b<0?g.length:b).join(`
`):`# Solve

${(u==null?void 0:u.challenge)||"Try the lesson task before looking at the guide."}`,T=x>=0?[...g.slice(0,x),...b<0?[]:g.slice(b)].join(`
`).trim():d;return{solve:_,learn:T}}function Mx(l){const u=String(l||"").split(`
`),d=[];let g=null;u.forEach((_,T)=>{const S=_.trim(),j=/^(`{3,}|~{3,})/.exec(S);if(j){const J=j[1];g?g.char===J[0]&&J.length>=g.length&&(g=null):g={char:J[0],length:J.length};return}if(g)return;const N=/^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(_);if(!N)return;const W=N[2],A=/\bStep\s+\d+(?=\s*(?:[:.·–—-]|$))/i.test(W);d.push({index:T,level:N[1].length,numbered:A})});const x=d.filter(_=>_.numbered),b=(x.length?x:d.filter(_=>_.level===2)).map(_=>_.index);return b.length?{intro:u.slice(0,b[0]).join(`
`).trim(),steps:b.map((_,T)=>u.slice(_,b[T+1]??u.length).join(`
`).trim())}:{intro:u.join(`
`),steps:[]}}const Dx=Object.assign({"../content/capstone-discovery.md":By,"../content/capstone-feedback.md":Uy,"../content/capstone-interviews.md":qy,"../content/capstone-prototype.md":Ky,"../content/csharp-conditionals.md":$y,"../content/csharp-variables.md":Gy,"../content/python-decisions.md":Yy,"../content/python-formatting.md":Vy,"../content/python-lists.md":Jy,"../content/python-loops.md":Xy,"../content/python-strings.md":Qy,"../content/python-variables.md":Zy,"../content/react-components.md":ev,"../content/react-state.md":tv,"../content/tsi-equations.md":nv,"../content/tsi-percents.md":rv,"../content/tsi-ratios.md":iv,"../content/tsi-slope.md":sv,"../content/uil-arrays.md":av,"../content/uil-loops.md":ov,"../content/uil-methods.md":lv,"../content/uil-strings.md":uv,"../content/unity-colliders.md":cv,"../content/unity-player-controller.md":dv,"../content/unity-score.md":pv,"../content/web-events.md":hv,"../content/web-layout.md":fv}),zx="# Add a Markdown lesson\n\nSave a new `.md` file inside `src/content/`.\n",Fx=l=>Dx[`../content/${l}.md`]||zx,Jo=l=>Ix.sanitize(Jt.parse(l,{breaks:!1,gfm:!0}));function Wx(l,u=""){if(!(l!=null&&l.isPublished))return"";let d="";const g=Array.isArray(l.cases)?l.cases:[];g.length&&!/##\s+(?:Published )?Examples\b/i.test(u)&&(d+=`

### Published examples
`,g.forEach((b,_)=>{d+=`
**Example `+(_+1)+`**

`,b.call&&(d+="Input: `"+b.call+`\`

`),d+=l.mode==="function"?`Expected return:
`:`Expected output:
`,d+="\n```text\n"+String(b.expected??"")+"\n```\n"}));const x=Array.isArray(l.hints)?l.hints:[];return x.length&&!/<details(?:\s|>)/i.test(u)&&(d+=`

### Need a hint?
`,x.forEach((b,_)=>{d+=`
<details>
<summary>Hint `+(_+1)+`</summary>

`+String(b).replaceAll("<","&lt;")+`

</details>
`})),d}function hf(l,u){if(!u)return l;const d="https://github.com/mswhitby/computer-science-1/blob/main/units/",g=u.startsWith("/playground/data/")?new URL(u,"https://www.mswhitby.com"):new URL(u,d);return String(l).replace(/\]\(([^)]+)\)/g,(x,b)=>{if(/^(?:https?:|mailto:|#|data:)/i.test(b))return x;const[_,...T]=b.split(" ");try{const S=new URL(_,g);return S.origin!==g.origin?x:"]("+S.href+(T.length?" "+T.join(" "):"")+")"}catch{return x}})}const gh={markdown:l=>`designlab:md:${l}`,code:l=>`designlab:code:${l}`};function Ed(l){try{return localStorage.getItem(l)}catch{return null}}function ca(l,u){try{localStorage.setItem(l,u)}catch{}}function Hx(l){try{localStorage.removeItem(l)}catch{}}function ff({lessonId:l,task:u,isTsi:d=!1,tsiAnswer:g=null}){var H;const x=(u==null?void 0:u.markdownSource)||Fx(l),b=gh.markdown(l),[_,T]=Te.useState(x),[S,j]=Te.useState(d?"learn":"solve"),[N,W]=Te.useState(0),[A,J]=Te.useState(!1);Te.useEffect(()=>{T(Ed(b)??x),j(d?"learn":"solve"),W(0),J(!1)},[b,x,d]);const D=Te.useMemo(()=>{const Y=Ox(_,u),pe=Y.solve+Wx(u,Y.solve);return{solve:hf(pe,(u==null?void 0:u.markdownUrl)||(u==null?void 0:u.markdown)),learn:hf(Y.learn,(u==null?void 0:u.markdownUrl)||(u==null?void 0:u.markdown))}},[_,u]),G=Te.useMemo(()=>Mx(D.learn),[D.learn]),X=!d&&S==="learn"&&G.steps.length>0,M=Math.min(N,Math.max(0,G.steps.length-1)),F=d?D.learn:S==="solve"?D.solve:X?G.intro+`

`+G.steps[M]:D.learn,q=Te.useMemo(()=>Jo(F),[F]);return p.jsxs("section",{className:"instructions-pane",children:[p.jsxs("div",{className:"pane-header",children:[d?p.jsx("strong",{className:"tsi-learn-title",children:"Learn"}):p.jsxs("div",{className:"tabs compact",role:"tablist","aria-label":"Lesson views",children:[p.jsx("button",{role:"tab","aria-selected":S==="solve",className:S==="solve"?"active":"",onClick:()=>{j("solve"),W(0)},children:"Solve"}),p.jsx("button",{role:"tab","aria-selected":S==="learn",className:S==="learn"?"active":"",onClick:()=>{j("learn"),W(0)},children:"Learn"})]}),p.jsx("button",{type:"button",className:ua("icon-button",A&&"active"),title:"Edit lesson text","aria-label":"Edit lesson text",onClick:()=>J(!A),children:p.jsx(my,{size:16})})]}),A?p.jsxs("div",{className:"markdown-source",children:[p.jsx("p",{className:"hint",children:"Try editing these instructions. Changes here are just for your preview."}),p.jsx("textarea",{"aria-label":"Markdown source",value:_,onChange:Y=>{T(Y.target.value),W(0),ca(b,Y.target.value)}}),p.jsx("button",{type:"button",className:"btn",onClick:()=>{Hx(b),T(x),W(0)},children:"Reset lesson text"})]}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"markdown-preview",role:"tabpanel",children:[p.jsx("div",{dangerouslySetInnerHTML:{__html:q}}),d&&g&&p.jsxs("section",{className:"tsi-worked-solution",role:"status",children:[p.jsx("h3",{children:g.correct?"Why that works":"Review the solution"}),p.jsx("p",{children:(H=ah[l])==null?void 0:H.explanation})]})]}),X&&p.jsxs("nav",{className:"lesson-step-controls","aria-label":"Learning steps",children:[M>0&&p.jsxs("button",{type:"button",className:"step-link previous",onClick:()=>W(Y=>Math.max(0,Y-1)),children:[p.jsx(Id,{size:16,"aria-hidden":"true"})," Previous"]}),p.jsxs("span",{children:["Step ",M+1," of ",G.steps.length]}),M<G.steps.length-1&&p.jsxs("button",{type:"button",className:"step-link next",onClick:()=>W(Y=>Math.min(G.steps.length-1,Y+1)),children:["Next ",p.jsx(pi,{size:16,"aria-hidden":"true"})]})]})]})]})}var yd={exports:{}},Bx=yd.exports,mf;function rs(){return mf||(mf=1,(function(l,u){(function(d,g){l.exports=g()})(Bx,(function(){var d=navigator.userAgent,g=navigator.platform,x=/gecko\/\d/i.test(d),b=/MSIE \d/.test(d),_=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(d),T=/Edge\/(\d+)/.exec(d),S=b||_||T,j=S&&(b?document.documentMode||6:+(T||_)[1]),N=!T&&/WebKit\//.test(d),W=N&&/Qt\/\d+\.\d+/.test(d),A=!T&&/Chrome\/(\d+)/.exec(d),J=A&&+A[1],D=/Opera\//.test(d),G=/Apple Computer/.test(navigator.vendor),X=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(d),M=/PhantomJS/.test(d),F=G&&(/Mobile\/\w+/.test(d)||navigator.maxTouchPoints>2),q=/Android/.test(d),H=F||q||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(d),Y=F||/Mac/.test(g),pe=/\bCrOS\b/.test(d),V=/win/i.test(g),ye=D&&d.match(/Version\/(\d*\.\d*)/);ye&&(ye=Number(ye[1])),ye&&ye>=15&&(D=!1,N=!0);var ze=Y&&(W||D&&(ye==null||ye<12.11)),_e=x||S&&j>=9;function oe(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var Ce=function(e,n){var s=e.className,i=oe(n).exec(s);if(i){var a=s.slice(i.index+i[0].length);e.className=s.slice(0,i.index)+(a?i[1]+a:"")}};function le(e){for(var n=e.childNodes.length;n>0;--n)e.removeChild(e.firstChild);return e}function ve(e,n){return le(e).appendChild(n)}function E(e,n,s,i){var a=document.createElement(e);if(s&&(a.className=s),i&&(a.style.cssText=i),typeof n=="string")a.appendChild(document.createTextNode(n));else if(n)for(var h=0;h<n.length;++h)a.appendChild(n[h]);return a}function ee(e,n,s,i){var a=E(e,n,s,i);return a.setAttribute("role","presentation"),a}var Q;document.createRange?Q=function(e,n,s,i){var a=document.createRange();return a.setEnd(i||e,s),a.setStart(e,n),a}:Q=function(e,n,s){var i=document.body.createTextRange();try{i.moveToElementText(e.parentNode)}catch{return i}return i.collapse(!0),i.moveEnd("character",s),i.moveStart("character",n),i};function R(e,n){if(n.nodeType==3&&(n=n.parentNode),e.contains)return e.contains(n);do if(n.nodeType==11&&(n=n.host),n==e)return!0;while(n=n.parentNode)}function L(e){var n=e.ownerDocument||e,s;try{s=e.activeElement}catch{s=n.body||null}for(;s&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function $(e,n){var s=e.className;oe(n).test(s)||(e.className+=(s?" ":"")+n)}function O(e,n){for(var s=e.split(" "),i=0;i<s.length;i++)s[i]&&!oe(s[i]).test(n)&&(n+=" "+s[i]);return n}var Z=function(e){e.select()};F?Z=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:S&&(Z=function(e){try{e.select()}catch{}});function ke(e){return e.display.wrapper.ownerDocument}function Ie(e){return qe(e.display.wrapper)}function qe(e){return e.getRootNode?e.getRootNode():e.ownerDocument}function Oe(e){return ke(e).defaultView}function we(e){var n=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,n)}}function Be(e,n,s){n||(n={});for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s!==!1||!Object.prototype.hasOwnProperty.call(n,i))&&(n[i]=e[i]);return n}function Ke(e,n,s,i,a){n==null&&(n=e.search(/[^\s\u00a0]/),n==-1&&(n=e.length));for(var h=i||0,m=a||0;;){var v=e.indexOf("	",h);if(v<0||v>=n)return m+(n-h);m+=v-h,m+=s-m%s,h=v+1}}var et=function(){this.id=null,this.f=null,this.time=0,this.handler=we(this.onTimeout,this)};et.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},et.prototype.set=function(e,n){this.f=n;var s=+new Date+e;(!this.id||s<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=s)};function $e(e,n){for(var s=0;s<e.length;++s)if(e[s]==n)return s;return-1}var Ft=50,Yt={toString:function(){return"CodeMirror.Pass"}},_t={scroll:!1},xt={origin:"*mouse"},tt={origin:"+move"};function Ue(e,n,s){for(var i=0,a=0;;){var h=e.indexOf("	",i);h==-1&&(h=e.length);var m=h-i;if(h==e.length||a+m>=n)return i+Math.min(m,n-a);if(a+=h-i,a+=s-a%s,i=h+1,a>=n)return i}}var vt=[""];function yt(e){for(;vt.length<=e;)vt.push(Qe(vt)+" ");return vt[e]}function Qe(e){return e[e.length-1]}function ut(e,n){for(var s=[],i=0;i<e.length;i++)s[i]=n(e[i],i);return s}function ae(e,n,s){for(var i=0,a=s(n);i<e.length&&s(e[i])<=a;)i++;e.splice(i,0,n)}function je(){}function he(e,n){var s;return Object.create?s=Object.create(e):(je.prototype=e,s=new je),n&&Be(n,s),s}var kt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function Ye(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||kt.test(e))}function at(e,n){return n?n.source.indexOf("\\w")>-1&&Ye(e)?!0:n.test(e):Ye(e)}function Ze(e){for(var n in e)if(e.hasOwnProperty(n)&&e[n])return!1;return!0}var mt=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function pt(e){return e.charCodeAt(0)>=768&&mt.test(e)}function Xt(e,n,s){for(;(s<0?n>0:n<e.length)&&pt(e.charAt(n));)n+=s;return n}function nr(e,n,s){for(var i=n>s?-1:1;;){if(n==s)return n;var a=(n+s)/2,h=i<0?Math.ceil(a):Math.floor(a);if(h==n)return e(h)?n:s;e(h)?s=h:n=h+i}}function Sr(e,n,s,i){if(!e)return i(n,s,"ltr",0);for(var a=!1,h=0;h<e.length;++h){var m=e[h];(m.from<s&&m.to>n||n==s&&m.to==n)&&(i(Math.max(m.from,n),Math.min(m.to,s),m.level==1?"rtl":"ltr",h),a=!0)}a||i(n,s,"ltr")}var Rr=null;function Br(e,n,s){var i;Rr=null;for(var a=0;a<e.length;++a){var h=e[a];if(h.from<n&&h.to>n)return a;h.to==n&&(h.from!=h.to&&s=="before"?i=a:Rr=a),h.from==n&&(h.from!=h.to&&s!="before"?i=a:Rr=a)}return i??Rr}var Ur=(function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function s(k){return k<=247?e.charAt(k):1424<=k&&k<=1524?"R":1536<=k&&k<=1785?n.charAt(k-1536):1774<=k&&k<=2220?"r":8192<=k&&k<=8203?"w":k==8204?"b":"L"}var i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,a=/[stwN]/,h=/[LRr]/,m=/[Lb1n]/,v=/[1n]/;function w(k,z,U){this.level=k,this.from=z,this.to=U}return function(k,z){var U=z=="ltr"?"L":"R";if(k.length==0||z=="ltr"&&!i.test(k))return!1;for(var se=k.length,ne=[],ge=0;ge<se;++ge)ne.push(s(k.charCodeAt(ge)));for(var be=0,Ae=U;be<se;++be){var Ee=ne[be];Ee=="m"?ne[be]=Ae:Ae=Ee}for(var Fe=0,De=U;Fe<se;++Fe){var Ge=ne[Fe];Ge=="1"&&De=="r"?ne[Fe]="n":h.test(Ge)&&(De=Ge,Ge=="r"&&(ne[Fe]="R"))}for(var ot=1,Ve=ne[0];ot<se-1;++ot){var St=ne[ot];St=="+"&&Ve=="1"&&ne[ot+1]=="1"?ne[ot]="1":St==","&&Ve==ne[ot+1]&&(Ve=="1"||Ve=="n")&&(ne[ot]=Ve),Ve=St}for(var Et=0;Et<se;++Et){var Bn=ne[Et];if(Bn==",")ne[Et]="N";else if(Bn=="%"){var sn=void 0;for(sn=Et+1;sn<se&&ne[sn]=="%";++sn);for(var xr=Et&&ne[Et-1]=="!"||sn<se&&ne[sn]=="1"?"1":"N",lr=Et;lr<sn;++lr)ne[lr]=xr;Et=sn-1}}for(var yn=0,br=U;yn<se;++yn){var Tn=ne[yn];br=="L"&&Tn=="1"?ne[yn]="L":h.test(Tn)&&(br=Tn)}for(var vn=0;vn<se;++vn)if(a.test(ne[vn])){var Dt=void 0;for(Dt=vn+1;Dt<se&&a.test(ne[Dt]);++Dt);for(var dt=(vn?ne[vn-1]:U)=="L",zt=(Dt<se?ne[Dt]:U)=="L",an=dt==zt?dt?"L":"R":U,un=vn;un<Dt;++un)ne[un]=an;vn=Dt-1}for(var Ut=[],wr,Lt=0;Lt<se;)if(m.test(ne[Lt])){var sa=Lt;for(++Lt;Lt<se&&m.test(ne[Lt]);++Lt);Ut.push(new w(0,sa,Lt))}else{var kr=Lt,Ai=Ut.length,es=z=="rtl"?1:0;for(++Lt;Lt<se&&ne[Lt]!="L";++Lt);for(var An=kr;An<Lt;)if(v.test(ne[An])){kr<An&&(Ut.splice(Ai,0,new w(1,kr,An)),Ai+=es);var Un=An;for(++An;An<Lt&&v.test(ne[An]);++An);Ut.splice(Ai,0,new w(2,Un,An)),Ai+=es,kr=An}else++An;kr<Lt&&Ut.splice(Ai,0,new w(1,kr,Lt))}return z=="ltr"&&(Ut[0].level==1&&(wr=k.match(/^\s+/))&&(Ut[0].from=wr[0].length,Ut.unshift(new w(0,0,wr[0].length))),Qe(Ut).level==1&&(wr=k.match(/\s+$/))&&(Qe(Ut).to-=wr[0].length,Ut.push(new w(0,se-wr[0].length,se)))),z=="rtl"?Ut.reverse():Ut}})();function bt(e,n){var s=e.order;return s==null&&(s=e.order=Ur(e.text,n)),s}var hi=[],rt=function(e,n,s){if(e.addEventListener)e.addEventListener(n,s,!1);else if(e.attachEvent)e.attachEvent("on"+n,s);else{var i=e._handlers||(e._handlers={});i[n]=(i[n]||hi).concat(s)}};function _r(e,n){return e._handlers&&e._handlers[n]||hi}function tn(e,n,s){if(e.removeEventListener)e.removeEventListener(n,s,!1);else if(e.detachEvent)e.detachEvent("on"+n,s);else{var i=e._handlers,a=i&&i[n];if(a){var h=$e(a,s);h>-1&&(i[n]=a.slice(0,h).concat(a.slice(h+1)))}}}function It(e,n){var s=_r(e,n);if(s.length)for(var i=Array.prototype.slice.call(arguments,2),a=0;a<s.length;++a)s[a].apply(null,i)}function qt(e,n,s){return typeof n=="string"&&(n={type:n,preventDefault:function(){this.defaultPrevented=!0}}),It(e,s||n.type,e,n),In(n)||n.codemirrorIgnore}function xn(e){var n=e._handlers&&e._handlers.cursorActivity;if(n)for(var s=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),i=0;i<n.length;++i)$e(s,n[i])==-1&&s.push(n[i])}function mn(e,n){return _r(e,n).length>0}function Nn(e){e.prototype.on=function(n,s){rt(this,n,s)},e.prototype.off=function(n,s){tn(this,n,s)}}function bn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ti(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function In(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==!1}function pr(e){bn(e),ti(e)}function fi(e){return e.target||e.srcElement}function En(e){var n=e.which;return n==null&&(e.button&1?n=1:e.button&2?n=3:e.button&4&&(n=2)),Y&&e.ctrlKey&&n==1&&(n=3),n}var is=(function(){if(S&&j<9)return!1;var e=E("div");return"draggable"in e||"dragDrop"in e})(),wn;function Cr(e){if(wn==null){var n=E("span","​");ve(e,E("span",[n,document.createTextNode("x")])),e.firstChild.offsetHeight!=0&&(wn=n.offsetWidth<=1&&n.offsetHeight>2&&!(S&&j<8))}var s=wn?E("span","​"):E("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return s.setAttribute("cm-text",""),s}var qr;function Ir(e){if(qr!=null)return qr;var n=ve(e,document.createTextNode("AخA")),s=Q(n,0,1).getBoundingClientRect(),i=Q(n,1,2).getBoundingClientRect();return le(e),!s||s.left==s.right?!1:qr=i.right-s.right<3}var Tr=`

b`.split(/\n/).length!=3?function(e){for(var n=0,s=[],i=e.length;n<=i;){var a=e.indexOf(`
`,n);a==-1&&(a=e.length);var h=e.slice(n,e.charAt(a-1)=="\r"?a-1:a),m=h.indexOf("\r");m!=-1?(s.push(h.slice(0,m)),n+=m+1):(s.push(h),n=a+1)}return s}:function(e){return e.split(/\r\n?|\n/)},mi=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch{return!1}}:function(e){var n;try{n=e.ownerDocument.selection.createRange()}catch{}return!n||n.parentElement()!=e?!1:n.compareEndPoints("StartToEnd",n)!=0},ss=(function(){var e=E("div");return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),typeof e.oncopy=="function")})(),On=null;function as(e){if(On!=null)return On;var n=ve(e,E("span","x")),s=n.getBoundingClientRect(),i=Q(n,0,1).getBoundingClientRect();return On=Math.abs(s.left-i.left)>1}var Mi={},Or={};function Gn(e,n){arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),Mi[e]=n}function gi(e,n){Or[e]=n}function Di(e){if(typeof e=="string"&&Or.hasOwnProperty(e))e=Or[e];else if(e&&typeof e.name=="string"&&Or.hasOwnProperty(e.name)){var n=Or[e.name];typeof n=="string"&&(n={name:n}),e=he(n,e),e.name=n.name}else{if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Di("application/xml");if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Di("application/json")}return typeof e=="string"?{name:e}:e||{name:"null"}}function Bt(e,n){n=Di(n);var s=Mi[n.name];if(!s)return Bt(e,"text/plain");var i=s(e,n);if(Mr.hasOwnProperty(n.name)){var a=Mr[n.name];for(var h in a)a.hasOwnProperty(h)&&(i.hasOwnProperty(h)&&(i["_"+h]=i[h]),i[h]=a[h])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var m in n.modeProps)i[m]=n.modeProps[m];return i}var Mr={};function os(e,n){var s=Mr.hasOwnProperty(e)?Mr[e]:Mr[e]={};Be(n,s)}function Rt(e,n){if(n===!0)return n;if(e.copyState)return e.copyState(n);var s={};for(var i in n){var a=n[i];a instanceof Array&&(a=a.concat([])),s[i]=a}return s}function zi(e,n){for(var s;e.innerMode&&(s=e.innerMode(n),!(!s||s.mode==e));)n=s.state,e=s.mode;return s||{mode:e,state:n}}function ni(e,n,s){return e.startState?e.startState(n,s):!0}var Vt=function(e,n,s){this.pos=this.start=0,this.string=e,this.tabSize=n||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=s};Vt.prototype.eol=function(){return this.pos>=this.string.length},Vt.prototype.sol=function(){return this.pos==this.lineStart},Vt.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Vt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Vt.prototype.eat=function(e){var n=this.string.charAt(this.pos),s;if(typeof e=="string"?s=n==e:s=n&&(e.test?e.test(n):e(n)),s)return++this.pos,n},Vt.prototype.eatWhile=function(e){for(var n=this.pos;this.eat(e););return this.pos>n},Vt.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Vt.prototype.skipToEnd=function(){this.pos=this.string.length},Vt.prototype.skipTo=function(e){var n=this.string.indexOf(e,this.pos);if(n>-1)return this.pos=n,!0},Vt.prototype.backUp=function(e){this.pos-=e},Vt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Ke(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Ke(this.string,this.lineStart,this.tabSize):0)},Vt.prototype.indentation=function(){return Ke(this.string,null,this.tabSize)-(this.lineStart?Ke(this.string,this.lineStart,this.tabSize):0)},Vt.prototype.match=function(e,n,s){if(typeof e=="string"){var i=function(m){return s?m.toLowerCase():m},a=this.string.substr(this.pos,e.length);if(i(a)==i(e))return n!==!1&&(this.pos+=e.length),!0}else{var h=this.string.slice(this.pos).match(e);return h&&h.index>0?null:(h&&n!==!1&&(this.pos+=h[0].length),h)}},Vt.prototype.current=function(){return this.string.slice(this.start,this.pos)},Vt.prototype.hideFirstChars=function(e,n){this.lineStart+=e;try{return n()}finally{this.lineStart-=e}},Vt.prototype.lookAhead=function(e){var n=this.lineOracle;return n&&n.lookAhead(e)},Vt.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};function Je(e,n){if(n-=e.first,n<0||n>=e.size)throw new Error("There is no line "+(n+e.first)+" in the document.");for(var s=e;!s.lines;)for(var i=0;;++i){var a=s.children[i],h=a.chunkSize();if(n<h){s=a;break}n-=h}return s.lines[n]}function ri(e,n,s){var i=[],a=n.line;return e.iter(n.line,s.line+1,function(h){var m=h.text;a==s.line&&(m=m.slice(0,s.ch)),a==n.line&&(m=m.slice(n.ch)),i.push(m),++a}),i}function ls(e,n,s){var i=[];return e.iter(n,s,function(a){i.push(a.text)}),i}function Yn(e,n){var s=n-e.height;if(s)for(var i=e;i;i=i.parent)i.height+=s}function C(e){if(e.parent==null)return null;for(var n=e.parent,s=$e(n.lines,e),i=n.parent;i;n=i,i=i.parent)for(var a=0;i.children[a]!=n;++a)s+=i.children[a].chunkSize();return s+n.first}function B(e,n){var s=e.first;e:do{for(var i=0;i<e.children.length;++i){var a=e.children[i],h=a.height;if(n<h){e=a;continue e}n-=h,s+=a.chunkSize()}return s}while(!e.lines);for(var m=0;m<e.lines.length;++m){var v=e.lines[m],w=v.height;if(n<w)break;n-=w}return s+m}function me(e,n){return n>=e.first&&n<e.first+e.size}function Ne(e,n){return String(e.lineNumberFormatter(n+e.firstLineNumber))}function de(e,n,s){if(s===void 0&&(s=null),!(this instanceof de))return new de(e,n,s);this.line=e,this.ch=n,this.sticky=s}function He(e,n){return e.line-n.line||e.ch-n.ch}function jt(e,n){return e.sticky==n.sticky&&He(e,n)==0}function Qt(e){return de(e.line,e.ch)}function kn(e,n){return He(e,n)<0?n:e}function Kr(e,n){return He(e,n)<0?e:n}function Qo(e,n){return Math.max(e.first,Math.min(n,e.first+e.size-1))}function gt(e,n){if(n.line<e.first)return de(e.first,0);var s=e.first+e.size-1;return n.line>s?de(s,Je(e,s).text.length):Za(n,Je(e,n.line).text.length)}function Za(e,n){var s=e.ch;return s==null||s>n?de(e.line,n):s<0?de(e.line,0):e}function eo(e,n){for(var s=[],i=0;i<n.length;i++)s[i]=gt(e,n[i]);return s}var Fi=function(e,n){this.state=e,this.lookAhead=n},rr=function(e,n,s,i){this.state=n,this.doc=e,this.line=s,this.maxLookAhead=i||0,this.baseTokens=null,this.baseTokenPos=1};rr.prototype.lookAhead=function(e){var n=this.doc.getLine(this.line+e);return n!=null&&e>this.maxLookAhead&&(this.maxLookAhead=e),n},rr.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var n=this.baseTokens[this.baseTokenPos+1];return{type:n&&n.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},rr.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},rr.fromSaved=function(e,n,s){return n instanceof Fi?new rr(e,Rt(e.mode,n.state),s,n.lookAhead):new rr(e,Rt(e.mode,n),s)},rr.prototype.save=function(e){var n=e!==!1?Rt(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new Fi(n,this.maxLookAhead):n};function to(e,n,s,i){var a=[e.state.modeGen],h={};ir(e,n.text,e.doc.mode,s,function(k,z){return a.push(k,z)},h,i);for(var m=s.state,v=function(k){s.baseTokens=a;var z=e.state.overlays[k],U=1,se=0;s.state=!0,ir(e,n.text,z.mode,s,function(ne,ge){for(var be=U;se<ne;){var Ae=a[U];Ae>ne&&a.splice(U,1,ne,a[U+1],Ae),U+=2,se=Math.min(ne,Ae)}if(ge)if(z.opaque)a.splice(be,U-be,ne,"overlay "+ge),U=be+2;else for(;be<U;be+=2){var Ee=a[be+1];a[be+1]=(Ee?Ee+" ":"")+"overlay "+ge}},h),s.state=m,s.baseTokens=null,s.baseTokenPos=1},w=0;w<e.state.overlays.length;++w)v(w);return{styles:a,classes:h.bgClass||h.textClass?h:null}}function Wi(e,n,s){if(!n.styles||n.styles[0]!=e.state.modeGen){var i=Nt(e,C(n)),a=n.text.length>e.options.maxHighlightLength&&Rt(e.doc.mode,i.state),h=to(e,n,i);a&&(i.state=a),n.stateAfter=i.save(!a),n.styles=h.styles,h.classes?n.styleClasses=h.classes:n.styleClasses&&(n.styleClasses=null),s===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return n.styles}function Nt(e,n,s){var i=e.doc,a=e.display;if(!i.mode.startState)return new rr(i,!0,n);var h=ya(e,n,s),m=h>i.first&&Je(i,h-1).stateAfter,v=m?rr.fromSaved(i,m,h):new rr(i,ni(i.mode),h);return i.iter(h,n,function(w){us(e,w.text,v);var k=v.line;w.stateAfter=k==n-1||k%5==0||k>=a.viewFrom&&k<a.viewTo?v.save():null,v.nextLine()}),s&&(i.modeFrontier=v.line),v}function us(e,n,s,i){var a=e.doc.mode,h=new Vt(n,e.options.tabSize,s);for(h.start=h.pos=i||0,n==""&&Ps(a,s.state);!h.eol();)yi(a,h,s.state),h.start=h.pos}function Ps(e,n){if(e.blankLine)return e.blankLine(n);if(e.innerMode){var s=zi(e,n);if(s.mode.blankLine)return s.mode.blankLine(s.state)}}function yi(e,n,s,i){for(var a=0;a<10;a++){i&&(i[0]=zi(e,s).mode);var h=e.token(n,s);if(n.pos>n.start)return h}throw new Error("Mode "+e.name+" failed to advance stream.")}var ga=function(e,n,s){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=n||null,this.state=s};function vi(e,n,s,i){var a=e.doc,h=a.mode,m;n=gt(a,n);var v=Je(a,n.line),w=Nt(e,n.line,s),k=new Vt(v.text,e.options.tabSize,w),z;for(i&&(z=[]);(i||k.pos<n.ch)&&!k.eol();)k.start=k.pos,m=yi(h,k,w.state),i&&z.push(new ga(k,m,Rt(a.mode,w.state)));return i?z:new ga(k,m,w.state)}function Hi(e,n){if(e)for(;;){var s=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!s)break;e=e.slice(0,s.index)+e.slice(s.index+s[0].length);var i=s[1]?"bgClass":"textClass";n[i]==null?n[i]=s[2]:new RegExp("(?:^|\\s)"+s[2]+"(?:$|\\s)").test(n[i])||(n[i]+=" "+s[2])}return e}function ir(e,n,s,i,a,h,m){var v=s.flattenSpans;v==null&&(v=e.options.flattenSpans);var w=0,k=null,z=new Vt(n,e.options.tabSize,i),U,se=e.options.addModeClass&&[null];for(n==""&&Hi(Ps(s,i.state),h);!z.eol();){if(z.pos>e.options.maxHighlightLength?(v=!1,m&&us(e,n,i,z.pos),z.pos=n.length,U=null):U=Hi(yi(s,z,i.state,se),h),se){var ne=se[0].name;ne&&(U="m-"+(U?ne+" "+U:ne))}if(!v||k!=U){for(;w<z.start;)w=Math.min(z.start,w+5e3),a(w,k);k=U}z.start=z.pos}for(;w<z.pos;){var ge=Math.min(z.pos,w+5e3);a(ge,k),w=ge}}function ya(e,n,s){for(var i,a,h=e.doc,m=s?-1:n-(e.doc.mode.innerMode?1e3:100),v=n;v>m;--v){if(v<=h.first)return h.first;var w=Je(h,v-1),k=w.stateAfter;if(k&&(!s||v+(k instanceof Fi?k.lookAhead:0)<=h.modeFrontier))return v;var z=Ke(w.text,null,e.options.tabSize);(a==null||i>z)&&(a=v-1,i=z)}return a}function Dr(e,n){if(e.modeFrontier=Math.min(e.modeFrontier,n),!(e.highlightFrontier<n-10)){for(var s=e.first,i=n-1;i>s;i--){var a=Je(e,i).stateAfter;if(a&&(!(a instanceof Fi)||i+a.lookAhead<n)){s=i+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,s)}}var ii=!1,Mn=!1;function $r(){ii=!0}function As(){Mn=!0}function jr(e,n,s){this.marker=e,this.from=n,this.to=s}function Rs(e,n){if(e)for(var s=0;s<e.length;++s){var i=e[s];if(i.marker==n)return i}}function no(e,n){for(var s,i=0;i<e.length;++i)e[i]!=n&&(s||(s=[])).push(e[i]);return s}function Is(e,n,s){var i=s&&window.WeakSet&&(s.markedSpans||(s.markedSpans=new WeakSet));i&&e.markedSpans&&i.has(e.markedSpans)?e.markedSpans.push(n):(e.markedSpans=e.markedSpans?e.markedSpans.concat([n]):[n],i&&i.add(e.markedSpans)),n.marker.attachLine(e)}function Kl(e,n,s){var i;if(e)for(var a=0;a<e.length;++a){var h=e[a],m=h.marker,v=h.from==null||(m.inclusiveLeft?h.from<=n:h.from<n);if(v||h.from==n&&m.type=="bookmark"&&(!s||!h.marker.insertLeft)){var w=h.to==null||(m.inclusiveRight?h.to>=n:h.to>n);(i||(i=[])).push(new jr(m,h.from,w?null:h.to))}}return i}function ro(e,n,s){var i;if(e)for(var a=0;a<e.length;++a){var h=e[a],m=h.marker,v=h.to==null||(m.inclusiveRight?h.to>=n:h.to>n);if(v||h.from==n&&m.type=="bookmark"&&(!s||h.marker.insertLeft)){var w=h.from==null||(m.inclusiveLeft?h.from<=n:h.from<n);(i||(i=[])).push(new jr(m,w?null:h.from-n,h.to==null?null:h.to-n))}}return i}function cs(e,n){if(n.full)return null;var s=me(e,n.from.line)&&Je(e,n.from.line).markedSpans,i=me(e,n.to.line)&&Je(e,n.to.line).markedSpans;if(!s&&!i)return null;var a=n.from.ch,h=n.to.ch,m=He(n.from,n.to)==0,v=Kl(s,a,m),w=ro(i,h,m),k=n.text.length==1,z=Qe(n.text).length+(k?a:0);if(v)for(var U=0;U<v.length;++U){var se=v[U];if(se.to==null){var ne=Rs(w,se.marker);ne?k&&(se.to=ne.to==null?null:ne.to+z):se.to=a}}if(w)for(var ge=0;ge<w.length;++ge){var be=w[ge];if(be.to!=null&&(be.to+=z),be.from==null){var Ae=Rs(v,be.marker);Ae||(be.from=z,k&&(v||(v=[])).push(be))}else be.from+=z,k&&(v||(v=[])).push(be)}v&&(v=Os(v)),w&&w!=v&&(w=Os(w));var Ee=[v];if(!k){var Fe=n.text.length-2,De;if(Fe>0&&v)for(var Ge=0;Ge<v.length;++Ge)v[Ge].to==null&&(De||(De=[])).push(new jr(v[Ge].marker,null,null));for(var ot=0;ot<Fe;++ot)Ee.push(De);Ee.push(w)}return Ee}function Os(e){for(var n=0;n<e.length;++n){var s=e[n];s.from!=null&&s.from==s.to&&s.marker.clearWhenEmpty!==!1&&e.splice(n--,1)}return e.length?e:null}function io(e,n,s){var i=null;if(e.iter(n.line,s.line+1,function(ne){if(ne.markedSpans)for(var ge=0;ge<ne.markedSpans.length;++ge){var be=ne.markedSpans[ge].marker;be.readOnly&&(!i||$e(i,be)==-1)&&(i||(i=[])).push(be)}}),!i)return null;for(var a=[{from:n,to:s}],h=0;h<i.length;++h)for(var m=i[h],v=m.find(0),w=0;w<a.length;++w){var k=a[w];if(!(He(k.to,v.from)<0||He(k.from,v.to)>0)){var z=[w,1],U=He(k.from,v.from),se=He(k.to,v.to);(U<0||!m.inclusiveLeft&&!U)&&z.push({from:k.from,to:v.from}),(se>0||!m.inclusiveRight&&!se)&&z.push({from:v.to,to:k.to}),a.splice.apply(a,z),w+=z.length-3}}return a}function xi(e){var n=e.markedSpans;if(n){for(var s=0;s<n.length;++s)n[s].marker.detachLine(e);e.markedSpans=null}}function Se(e,n){if(n){for(var s=0;s<n.length;++s)n[s].marker.attachLine(e);e.markedSpans=n}}function I(e){return e.inclusiveLeft?-1:0}function re(e){return e.inclusiveRight?1:0}function xe(e,n){var s=e.lines.length-n.lines.length;if(s!=0)return s;var i=e.find(),a=n.find(),h=He(i.from,a.from)||I(e)-I(n);if(h)return-h;var m=He(i.to,a.to)||re(e)-re(n);return m||n.id-e.id}function Le(e,n){var s=Mn&&e.markedSpans,i;if(s)for(var a=void 0,h=0;h<s.length;++h)a=s[h],a.marker.collapsed&&(n?a.from:a.to)==null&&(!i||xe(i,a.marker)<0)&&(i=a.marker);return i}function nt(e){return Le(e,!0)}function ct(e){return Le(e,!1)}function Ct(e,n){var s=Mn&&e.markedSpans,i;if(s)for(var a=0;a<s.length;++a){var h=s[a];h.marker.collapsed&&(h.from==null||h.from<n)&&(h.to==null||h.to>n)&&(!i||xe(i,h.marker)<0)&&(i=h.marker)}return i}function cn(e,n,s,i,a){var h=Je(e,n),m=Mn&&h.markedSpans;if(m)for(var v=0;v<m.length;++v){var w=m[v];if(w.marker.collapsed){var k=w.marker.find(0),z=He(k.from,s)||I(w.marker)-I(a),U=He(k.to,i)||re(w.marker)-re(a);if(!(z>=0&&U<=0||z<=0&&U>=0)&&(z<=0&&(w.marker.inclusiveRight&&a.inclusiveLeft?He(k.to,s)>=0:He(k.to,s)>0)||z>=0&&(w.marker.inclusiveRight&&a.inclusiveLeft?He(k.from,i)<=0:He(k.from,i)<0)))return!0}}}function Kt(e){for(var n;n=nt(e);)e=n.find(-1,!0).line;return e}function hr(e){for(var n;n=ct(e);)e=n.find(1,!0).line;return e}function Vn(e){for(var n,s;n=ct(e);)e=n.find(1,!0).line,(s||(s=[])).push(e);return s}function fr(e,n){var s=Je(e,n),i=Kt(s);return s==i?n:C(i)}function dn(e,n){if(n>e.lastLine())return n;var s=Je(e,n),i;if(!Nr(e,s))return n;for(;i=ct(s);)s=i.find(1,!0).line;return C(s)+1}function Nr(e,n){var s=Mn&&n.markedSpans;if(s){for(var i=void 0,a=0;a<s.length;++a)if(i=s[a],!!i.marker.collapsed){if(i.from==null)return!0;if(!i.marker.widgetNode&&i.from==0&&i.marker.inclusiveLeft&&Zo(e,n,i))return!0}}}function Zo(e,n,s){if(s.to==null){var i=s.marker.find(1,!0);return Zo(e,i.line,Rs(i.line.markedSpans,s.marker))}if(s.marker.inclusiveRight&&s.to==n.text.length)return!0;for(var a=void 0,h=0;h<n.markedSpans.length;++h)if(a=n.markedSpans[h],a.marker.collapsed&&!a.marker.widgetNode&&a.from==s.to&&(a.to==null||a.to!=s.from)&&(a.marker.inclusiveLeft||s.marker.inclusiveRight)&&Zo(e,n,a))return!0}function Sn(e){e=Kt(e);for(var n=0,s=e.parent,i=0;i<s.lines.length;++i){var a=s.lines[i];if(a==e)break;n+=a.height}for(var h=s.parent;h;s=h,h=s.parent)for(var m=0;m<h.children.length;++m){var v=h.children[m];if(v==s)break;n+=v.height}return n}function Bi(e){if(e.height==0)return 0;for(var n=e.text.length,s,i=e;s=nt(i);){var a=s.find(0,!0);i=a.from.line,n+=a.from.ch-a.to.ch}for(i=e;s=ct(i);){var h=s.find(0,!0);n-=i.text.length-h.from.ch,i=h.to.line,n+=i.text.length-h.to.ch}return n}function so(e){var n=e.display,s=e.doc;n.maxLine=Je(s,s.first),n.maxLineLength=Bi(n.maxLine),n.maxLineChanged=!0,s.iter(function(i){var a=Bi(i);a>n.maxLineLength&&(n.maxLineLength=a,n.maxLine=i)})}var bi=function(e,n,s){this.text=e,Se(this,n),this.height=s?s(this):1};bi.prototype.lineNo=function(){return C(this)},Nn(bi);function Hd(e,n,s,i){e.text=n,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),e.order!=null&&(e.order=null),xi(e),Se(e,s);var a=i?i(e):1;a!=e.height&&Yn(e,a)}function $l(e){e.parent=null,xi(e)}var Gl={},ao={};function oo(e,n){if(!e||/^\s*$/.test(e))return null;var s=n.addModeClass?ao:Gl;return s[e]||(s[e]=e.replace(/\S+/g,"cm-$&"))}function Yl(e,n){var s=ee("span",null,null,N?"padding-right: .1px":null),i={pre:ee("pre",[s],"CodeMirror-line"),content:s,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};n.measure={};for(var a=0;a<=(n.rest?n.rest.length:0);a++){var h=a?n.rest[a-1]:n.line,m=void 0;i.pos=0,i.addToken=Ud,Ir(e.display.measure)&&(m=bt(h,e.doc.direction))&&(i.addToken=Vl(i.addToken,m)),i.map=[];var v=n!=e.display.externalMeasured&&C(h);Kd(h,i,Wi(e,h,v)),h.styleClasses&&(h.styleClasses.bgClass&&(i.bgClass=O(h.styleClasses.bgClass,i.bgClass||"")),h.styleClasses.textClass&&(i.textClass=O(h.styleClasses.textClass,i.textClass||""))),i.map.length==0&&i.map.push(0,0,i.content.appendChild(Cr(e.display.measure))),a==0?(n.measure.map=i.map,n.measure.cache={}):((n.measure.maps||(n.measure.maps=[])).push(i.map),(n.measure.caches||(n.measure.caches=[])).push({}))}if(N){var w=i.content.lastChild;(/\bcm-tab\b/.test(w.className)||w.querySelector&&w.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return It(e,"renderLine",e,n.line,i.pre),i.pre.className&&(i.textClass=O(i.pre.className,i.textClass||"")),i}function Bd(e){var n=E("span","•","cm-invalidchar");return n.title="\\u"+e.charCodeAt(0).toString(16),n.setAttribute("aria-label",n.title),n}function Ud(e,n,s,i,a,h,m){if(n){var v=e.splitSpaces?qd(n,e.trailingSpace):n,w=e.cm.state.specialChars,k=!1,z;if(!w.test(n))e.col+=n.length,z=document.createTextNode(v),e.map.push(e.pos,e.pos+n.length,z),S&&j<9&&(k=!0),e.pos+=n.length;else{z=document.createDocumentFragment();for(var U=0;;){w.lastIndex=U;var se=w.exec(n),ne=se?se.index-U:n.length-U;if(ne){var ge=document.createTextNode(v.slice(U,U+ne));S&&j<9?z.appendChild(E("span",[ge])):z.appendChild(ge),e.map.push(e.pos,e.pos+ne,ge),e.col+=ne,e.pos+=ne}if(!se)break;U+=ne+1;var be=void 0;if(se[0]=="	"){var Ae=e.cm.options.tabSize,Ee=Ae-e.col%Ae;be=z.appendChild(E("span",yt(Ee),"cm-tab")),be.setAttribute("role","presentation"),be.setAttribute("cm-text","	"),e.col+=Ee}else se[0]=="\r"||se[0]==`
`?(be=z.appendChild(E("span",se[0]=="\r"?"␍":"␤","cm-invalidchar")),be.setAttribute("cm-text",se[0]),e.col+=1):(be=e.cm.options.specialCharPlaceholder(se[0]),be.setAttribute("cm-text",se[0]),S&&j<9?z.appendChild(E("span",[be])):z.appendChild(be),e.col+=1);e.map.push(e.pos,e.pos+1,be),e.pos++}}if(e.trailingSpace=v.charCodeAt(n.length-1)==32,s||i||a||k||h||m){var Fe=s||"";i&&(Fe+=i),a&&(Fe+=a);var De=E("span",[z],Fe,h);if(m)for(var Ge in m)m.hasOwnProperty(Ge)&&Ge!="style"&&Ge!="class"&&De.setAttribute(Ge,m[Ge]);return e.content.appendChild(De)}e.content.appendChild(z)}}function qd(e,n){if(e.length>1&&!/  /.test(e))return e;for(var s=n,i="",a=0;a<e.length;a++){var h=e.charAt(a);h==" "&&s&&(a==e.length-1||e.charCodeAt(a+1)==32)&&(h=" "),i+=h,s=h==" "}return i}function Vl(e,n){return function(s,i,a,h,m,v,w){a=a?a+" cm-force-border":"cm-force-border";for(var k=s.pos,z=k+i.length;;){for(var U=void 0,se=0;se<n.length&&(U=n[se],!(U.to>k&&U.from<=k));se++);if(U.to>=z)return e(s,i,a,h,m,v,w);e(s,i.slice(0,U.to-k),a,h,null,v,w),h=null,i=i.slice(U.to-k),k=U.to}}}function cc(e,n,s,i){var a=!i&&s.widgetNode;a&&e.map.push(e.pos,e.pos+n,a),!i&&e.cm.display.input.needsContentAttribute&&(a||(a=e.content.appendChild(document.createElement("span"))),a.setAttribute("cm-marker",s.id)),a&&(e.cm.display.input.setUneditable(a),e.content.appendChild(a)),e.pos+=n,e.trailingSpace=!1}function Kd(e,n,s){var i=e.markedSpans,a=e.text,h=0;if(!i){for(var m=1;m<s.length;m+=2)n.addToken(n,a.slice(h,h=s[m]),oo(s[m+1],n.cm.options));return}for(var v=a.length,w=0,k=1,z="",U,se,ne=0,ge,be,Ae,Ee,Fe;;){if(ne==w){ge=be=Ae=se="",Fe=null,Ee=null,ne=1/0;for(var De=[],Ge=void 0,ot=0;ot<i.length;++ot){var Ve=i[ot],St=Ve.marker;if(St.type=="bookmark"&&Ve.from==w&&St.widgetNode)De.push(St);else if(Ve.from<=w&&(Ve.to==null||Ve.to>w||St.collapsed&&Ve.to==w&&Ve.from==w)){if(Ve.to!=null&&Ve.to!=w&&ne>Ve.to&&(ne=Ve.to,be=""),St.className&&(ge+=" "+St.className),St.css&&(se=(se?se+";":"")+St.css),St.startStyle&&Ve.from==w&&(Ae+=" "+St.startStyle),St.endStyle&&Ve.to==ne&&(Ge||(Ge=[])).push(St.endStyle,Ve.to),St.title&&((Fe||(Fe={})).title=St.title),St.attributes)for(var Et in St.attributes)(Fe||(Fe={}))[Et]=St.attributes[Et];St.collapsed&&(!Ee||xe(Ee.marker,St)<0)&&(Ee=Ve)}else Ve.from>w&&ne>Ve.from&&(ne=Ve.from)}if(Ge)for(var Bn=0;Bn<Ge.length;Bn+=2)Ge[Bn+1]==ne&&(be+=" "+Ge[Bn]);if(!Ee||Ee.from==w)for(var sn=0;sn<De.length;++sn)cc(n,0,De[sn]);if(Ee&&(Ee.from||0)==w){if(cc(n,(Ee.to==null?v+1:Ee.to)-w,Ee.marker,Ee.from==null),Ee.to==null)return;Ee.to==w&&(Ee=!1)}}if(w>=v)break;for(var xr=Math.min(v,ne);;){if(z){var lr=w+z.length;if(!Ee){var yn=lr>xr?z.slice(0,xr-w):z;n.addToken(n,yn,U?U+ge:ge,Ae,w+yn.length==ne?be:"",se,Fe)}if(lr>=xr){z=z.slice(xr-w),w=xr;break}w=lr,Ae=""}z=a.slice(h,h=s[k++]),U=oo(s[k++],n.cm.options)}}}function dc(e,n,s){this.line=n,this.rest=Vn(n),this.size=this.rest?C(Qe(this.rest))-s+1:1,this.node=this.text=null,this.hidden=Nr(e,n)}function el(e,n,s){for(var i=[],a,h=n;h<s;h=a){var m=new dc(e.doc,Je(e.doc,h),h);a=h+m.size,i.push(m)}return i}var va=null;function pc(e){va?va.ops.push(e):e.ownsGroup=va={ops:[e],delayedCallbacks:[]}}function $d(e){var n=e.delayedCallbacks,s=0;do{for(;s<n.length;s++)n[s].call(null);for(var i=0;i<e.ops.length;i++){var a=e.ops[i];if(a.cursorActivityHandlers)for(;a.cursorActivityCalled<a.cursorActivityHandlers.length;)a.cursorActivityHandlers[a.cursorActivityCalled++].call(null,a.cm)}}while(s<n.length)}function Gd(e,n){var s=e.ownsGroup;if(s)try{$d(s)}finally{va=null,n(s)}}var lo=null;function Dn(e,n){var s=_r(e,n);if(s.length){var i=Array.prototype.slice.call(arguments,2),a;va?a=va.delayedCallbacks:lo?a=lo:(a=lo=[],setTimeout(Jl,0));for(var h=function(v){a.push(function(){return s[v].apply(null,i)})},m=0;m<s.length;++m)h(m)}}function Jl(){var e=lo;lo=null;for(var n=0;n<e.length;++n)e[n]()}function hc(e,n,s,i){for(var a=0;a<n.changes.length;a++){var h=n.changes[a];h=="text"?Vd(e,n):h=="gutter"?fc(e,n,s,i):h=="class"?Ql(e,n):h=="widget"&&Jd(e,n,i)}n.changes=null}function uo(e){return e.node==e.text&&(e.node=E("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),S&&j<8&&(e.node.style.zIndex=2)),e.node}function Yd(e,n){var s=n.bgClass?n.bgClass+" "+(n.line.bgClass||""):n.line.bgClass;if(s&&(s+=" CodeMirror-linebackground"),n.background)s?n.background.className=s:(n.background.parentNode.removeChild(n.background),n.background=null);else if(s){var i=uo(n);n.background=i.insertBefore(E("div",null,s),i.firstChild),e.display.input.setUneditable(n.background)}}function Xl(e,n){var s=e.display.externalMeasured;return s&&s.line==n.line?(e.display.externalMeasured=null,n.measure=s.measure,s.built):Yl(e,n)}function Vd(e,n){var s=n.text.className,i=Xl(e,n);n.text==n.node&&(n.node=i.pre),n.text.parentNode.replaceChild(i.pre,n.text),n.text=i.pre,i.bgClass!=n.bgClass||i.textClass!=n.textClass?(n.bgClass=i.bgClass,n.textClass=i.textClass,Ql(e,n)):s&&(n.text.className=s)}function Ql(e,n){Yd(e,n),n.line.wrapClass?uo(n).className=n.line.wrapClass:n.node!=n.text&&(n.node.className="");var s=n.textClass?n.textClass+" "+(n.line.textClass||""):n.line.textClass;n.text.className=s||""}function fc(e,n,s,i){if(n.gutter&&(n.node.removeChild(n.gutter),n.gutter=null),n.gutterBackground&&(n.node.removeChild(n.gutterBackground),n.gutterBackground=null),n.line.gutterClass){var a=uo(n);n.gutterBackground=E("div",null,"CodeMirror-gutter-background "+n.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(n.gutterBackground),a.insertBefore(n.gutterBackground,n.text)}var h=n.line.gutterMarkers;if(e.options.lineNumbers||h){var m=uo(n),v=n.gutter=E("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(v.setAttribute("aria-hidden","true"),e.display.input.setUneditable(v),m.insertBefore(v,n.text),n.line.gutterClass&&(v.className+=" "+n.line.gutterClass),e.options.lineNumbers&&(!h||!h["CodeMirror-linenumbers"])&&(n.lineNumber=v.appendChild(E("div",Ne(e.options,s),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),h)for(var w=0;w<e.display.gutterSpecs.length;++w){var k=e.display.gutterSpecs[w].className,z=h.hasOwnProperty(k)&&h[k];z&&v.appendChild(E("div",[z],"CodeMirror-gutter-elt","left: "+i.gutterLeft[k]+"px; width: "+i.gutterWidth[k]+"px"))}}}function Jd(e,n,s){n.alignable&&(n.alignable=null);for(var i=oe("CodeMirror-linewidget"),a=n.node.firstChild,h=void 0;a;a=h)h=a.nextSibling,i.test(a.className)&&n.node.removeChild(a);mc(e,n,s)}function Xd(e,n,s,i){var a=Xl(e,n);return n.text=n.node=a.pre,a.bgClass&&(n.bgClass=a.bgClass),a.textClass&&(n.textClass=a.textClass),Ql(e,n),fc(e,n,s,i),mc(e,n,i),n.node}function mc(e,n,s){if(gc(e,n.line,n,s,!0),n.rest)for(var i=0;i<n.rest.length;i++)gc(e,n.rest[i],n,s,!1)}function gc(e,n,s,i,a){if(n.widgets)for(var h=uo(s),m=0,v=n.widgets;m<v.length;++m){var w=v[m],k=E("div",[w.node],"CodeMirror-linewidget"+(w.className?" "+w.className:""));w.handleMouseEvents||k.setAttribute("cm-ignore-events","true"),Zl(w,k,s,i),e.display.input.setUneditable(k),a&&w.above?h.insertBefore(k,s.gutter||s.text):h.appendChild(k),Dn(w,"redraw")}}function Zl(e,n,s,i){if(e.noHScroll){(s.alignable||(s.alignable=[])).push(n);var a=i.wrapperWidth;n.style.left=i.fixedPos+"px",e.coverGutter||(a-=i.gutterTotalWidth,n.style.paddingLeft=i.gutterTotalWidth+"px"),n.style.width=a+"px"}e.coverGutter&&(n.style.zIndex=5,n.style.position="relative",e.noHScroll||(n.style.marginLeft=-i.gutterTotalWidth+"px"))}function Ui(e){if(e.height!=null)return e.height;var n=e.doc.cm;if(!n)return 0;if(!R(document.body,e.node)){var s="position: relative;";e.coverGutter&&(s+="margin-left: -"+n.display.gutters.offsetWidth+"px;"),e.noHScroll&&(s+="width: "+n.display.wrapper.clientWidth+"px;"),ve(n.display.measure,E("div",[e.node],null,s))}return e.height=e.node.parentNode.offsetHeight}function qi(e,n){for(var s=fi(n);s!=e.wrapper;s=s.parentNode)if(!s||s.nodeType==1&&s.getAttribute("cm-ignore-events")=="true"||s.parentNode==e.sizer&&s!=e.mover)return!0}function co(e){return e.lineSpace.offsetTop}function tl(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function eu(e){if(e.cachedPaddingH)return e.cachedPaddingH;var n=ve(e.measure,E("pre","x","CodeMirror-line-like")),s=window.getComputedStyle?window.getComputedStyle(n):n.currentStyle,i={left:parseInt(s.paddingLeft),right:parseInt(s.paddingRight)};return!isNaN(i.left)&&!isNaN(i.right)&&(e.cachedPaddingH=i),i}function si(e){return Ft-e.display.nativeBarWidth}function ds(e){return e.display.scroller.clientWidth-si(e)-e.display.barWidth}function ps(e){return e.display.scroller.clientHeight-si(e)-e.display.barHeight}function Qd(e,n,s){var i=e.options.lineWrapping,a=i&&ds(e);if(!n.measure.heights||i&&n.measure.width!=a){var h=n.measure.heights=[];if(i){n.measure.width=a;for(var m=n.text.firstChild.getClientRects(),v=0;v<m.length-1;v++){var w=m[v],k=m[v+1];Math.abs(w.bottom-k.bottom)>2&&h.push((w.bottom+k.top)/2-s.top)}}h.push(s.bottom-s.top)}}function yc(e,n,s){if(e.line==n)return{map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var i=0;i<e.rest.length;i++)if(e.rest[i]==n)return{map:e.measure.maps[i],cache:e.measure.caches[i]};for(var a=0;a<e.rest.length;a++)if(C(e.rest[a])>s)return{map:e.measure.maps[a],cache:e.measure.caches[a],before:!0}}}function Zd(e,n){n=Kt(n);var s=C(n),i=e.display.externalMeasured=new dc(e.doc,n,s);i.lineN=s;var a=i.built=Yl(e,i);return i.text=a.pre,ve(e.display.lineMeasure,a.pre),i}function tu(e,n,s,i){return Er(e,wi(e,n),s,i)}function nl(e,n){if(n>=e.display.viewFrom&&n<e.display.viewTo)return e.display.view[Si(e,n)];var s=e.display.externalMeasured;if(s&&n>=s.lineN&&n<s.lineN+s.size)return s}function wi(e,n){var s=C(n),i=nl(e,s);i&&!i.text?i=null:i&&i.changes&&(hc(e,i,s,ll(e)),e.curOp.forceUpdate=!0),i||(i=Zd(e,n));var a=yc(i,n,s);return{line:n,view:i,rect:null,map:a.map,cache:a.cache,before:a.before,hasHeights:!1}}function Er(e,n,s,i,a){n.before&&(s=-1);var h=s+(i||""),m;return n.cache.hasOwnProperty(h)?m=n.cache[h]:(n.rect||(n.rect=n.view.text.getBoundingClientRect()),n.hasHeights||(Qd(e,n.view,n.rect),n.hasHeights=!0),m=xc(e,n,s,i),m.bogus||(n.cache[h]=m)),{left:m.left,right:m.right,top:a?m.rtop:m.top,bottom:a?m.rbottom:m.bottom}}var vc={left:0,right:0,top:0,bottom:0};function po(e,n,s){for(var i,a,h,m,v,w,k=0;k<e.length;k+=3)if(v=e[k],w=e[k+1],n<v?(a=0,h=1,m="left"):n<w?(a=n-v,h=a+1):(k==e.length-3||n==w&&e[k+3]>n)&&(h=w-v,a=h-1,n>=w&&(m="right")),a!=null){if(i=e[k+2],v==w&&s==(i.insertLeft?"left":"right")&&(m=s),s=="left"&&a==0)for(;k&&e[k-2]==e[k-3]&&e[k-1].insertLeft;)i=e[(k-=3)+2],m="left";if(s=="right"&&a==w-v)for(;k<e.length-3&&e[k+3]==e[k+4]&&!e[k+5].insertLeft;)i=e[(k+=3)+2],m="right";break}return{node:i,start:a,end:h,collapse:m,coverStart:v,coverEnd:w}}function ep(e,n){var s=vc;if(n=="left")for(var i=0;i<e.length&&(s=e[i]).left==s.right;i++);else for(var a=e.length-1;a>=0&&(s=e[a]).left==s.right;a--);return s}function xc(e,n,s,i){var a=po(n.map,s,i),h=a.node,m=a.start,v=a.end,w=a.collapse,k;if(h.nodeType==3){for(var z=0;z<4;z++){for(;m&&pt(n.line.text.charAt(a.coverStart+m));)--m;for(;a.coverStart+v<a.coverEnd&&pt(n.line.text.charAt(a.coverStart+v));)++v;if(S&&j<9&&m==0&&v==a.coverEnd-a.coverStart?k=h.parentNode.getBoundingClientRect():k=ep(Q(h,m,v).getClientRects(),i),k.left||k.right||m==0)break;v=m,m=m-1,w="right"}S&&j<11&&(k=nu(e.display.measure,k))}else{m>0&&(w=i="right");var U;e.options.lineWrapping&&(U=h.getClientRects()).length>1?k=U[i=="right"?U.length-1:0]:k=h.getBoundingClientRect()}if(S&&j<9&&!m&&(!k||!k.left&&!k.right)){var se=h.parentNode.getClientRects()[0];se?k={left:se.left,right:se.left+hs(e.display),top:se.top,bottom:se.bottom}:k=vc}for(var ne=k.top-n.rect.top,ge=k.bottom-n.rect.top,be=(ne+ge)/2,Ae=n.view.measure.heights,Ee=0;Ee<Ae.length-1&&!(be<Ae[Ee]);Ee++);var Fe=Ee?Ae[Ee-1]:0,De=Ae[Ee],Ge={left:(w=="right"?k.right:k.left)-n.rect.left,right:(w=="left"?k.left:k.right)-n.rect.left,top:Fe,bottom:De};return!k.left&&!k.right&&(Ge.bogus=!0),e.options.singleCursorHeightPerLine||(Ge.rtop=ne,Ge.rbottom=ge),Ge}function nu(e,n){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!as(e))return n;var s=screen.logicalXDPI/screen.deviceXDPI,i=screen.logicalYDPI/screen.deviceYDPI;return{left:n.left*s,right:n.right*s,top:n.top*i,bottom:n.bottom*i}}function rl(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var n=0;n<e.rest.length;n++)e.measure.caches[n]={}}function ru(e){e.display.externalMeasure=null,le(e.display.lineMeasure);for(var n=0;n<e.display.view.length;n++)rl(e.display.view[n])}function xa(e){ru(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function iu(e){return A&&q?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function bc(e){return A&&q?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function su(e){var n=Kt(e),s=n.widgets,i=0;if(s)for(var a=0;a<s.length;++a)s[a].above&&(i+=Ui(s[a]));return i}function il(e,n,s,i,a){if(!a){var h=su(n);s.top+=h,s.bottom+=h}if(i=="line")return s;i||(i="local");var m=Sn(n);if(i=="local"?m+=co(e.display):m-=e.display.viewOffset,i=="page"||i=="window"){var v=e.display.lineSpace.getBoundingClientRect();m+=v.top+(i=="window"?0:bc(ke(e)));var w=v.left+(i=="window"?0:iu(ke(e)));s.left+=w,s.right+=w}return s.top+=m,s.bottom+=m,s}function wc(e,n,s){if(s=="div")return n;var i=n.left,a=n.top;if(s=="page")i-=iu(ke(e)),a-=bc(ke(e));else if(s=="local"||!s){var h=e.display.sizer.getBoundingClientRect();i+=h.left,a+=h.top}var m=e.display.lineSpace.getBoundingClientRect();return{left:i-m.left,top:a-m.top}}function sl(e,n,s,i,a){return i||(i=Je(e.doc,n.line)),il(e,i,tu(e,i,n.ch,a),s)}function _n(e,n,s,i,a,h){i=i||Je(e.doc,n.line),a||(a=wi(e,i));function m(ge,be){var Ae=Er(e,a,ge,be?"right":"left",h);return be?Ae.left=Ae.right:Ae.right=Ae.left,il(e,i,Ae,s)}var v=bt(i,e.doc.direction),w=n.ch,k=n.sticky;if(w>=i.text.length?(w=i.text.length,k="before"):w<=0&&(w=0,k="after"),!v)return m(k=="before"?w-1:w,k=="before");function z(ge,be,Ae){var Ee=v[be],Fe=Ee.level==1;return m(Ae?ge-1:ge,Fe!=Ae)}var U=Br(v,w,k),se=Rr,ne=z(w,U,k=="before");return se!=null&&(ne.other=z(w,se,k!="before")),ne}function ba(e,n){var s=0;n=gt(e.doc,n),e.options.lineWrapping||(s=hs(e.display)*n.ch);var i=Je(e.doc,n.line),a=Sn(i)+co(e.display);return{left:s,right:s,top:a,bottom:a+i.height}}function al(e,n,s,i,a){var h=de(e,n,s);return h.xRel=a,i&&(h.outside=i),h}function ol(e,n,s){var i=e.doc;if(s+=e.display.viewOffset,s<0)return al(i.first,0,null,-1,-1);var a=B(i,s),h=i.first+i.size-1;if(a>h)return al(i.first+i.size-1,Je(i,h).text.length,null,1,1);n<0&&(n=0);for(var m=Je(i,a);;){var v=tp(e,m,a,n,s),w=Ct(m,v.ch+(v.xRel>0||v.outside>0?1:0));if(!w)return v;var k=w.find(1);if(k.line==a)return k;m=Je(i,a=k.line)}}function au(e,n,s,i){i-=su(n);var a=n.text.length,h=nr(function(m){return Er(e,s,m-1).bottom<=i},a,0);return a=nr(function(m){return Er(e,s,m).top>i},h,a),{begin:h,end:a}}function ou(e,n,s,i){s||(s=wi(e,n));var a=il(e,n,Er(e,s,i),"line").top;return au(e,n,s,a)}function ho(e,n,s,i){return e.bottom<=s?!1:e.top>s?!0:(i?e.left:e.right)>n}function tp(e,n,s,i,a){a-=Sn(n);var h=wi(e,n),m=su(n),v=0,w=n.text.length,k=!0,z=bt(n,e.doc.direction);if(z){var U=(e.options.lineWrapping?wa:np)(e,n,s,h,z,i,a);k=U.level!=1,v=k?U.from:U.to-1,w=k?U.to:U.from-1}var se=null,ne=null,ge=nr(function(ot){var Ve=Er(e,h,ot);return Ve.top+=m,Ve.bottom+=m,ho(Ve,i,a,!1)?(Ve.top<=a&&Ve.left<=i&&(se=ot,ne=Ve),!0):!1},v,w),be,Ae,Ee=!1;if(ne){var Fe=i-ne.left<ne.right-i,De=Fe==k;ge=se+(De?0:1),Ae=De?"after":"before",be=Fe?ne.left:ne.right}else{!k&&(ge==w||ge==v)&&ge++,Ae=ge==0?"after":ge==n.text.length?"before":Er(e,h,ge-(k?1:0)).bottom+m<=a==k?"after":"before";var Ge=_n(e,de(s,ge,Ae),"line",n,h);be=Ge.left,Ee=a<Ge.top?-1:a>=Ge.bottom?1:0}return ge=Xt(n.text,ge,1),al(s,ge,Ae,Ee,i-be)}function np(e,n,s,i,a,h,m){var v=nr(function(U){var se=a[U],ne=se.level!=1;return ho(_n(e,de(s,ne?se.to:se.from,ne?"before":"after"),"line",n,i),h,m,!0)},0,a.length-1),w=a[v];if(v>0){var k=w.level!=1,z=_n(e,de(s,k?w.from:w.to,k?"after":"before"),"line",n,i);ho(z,h,m,!0)&&z.top>m&&(w=a[v-1])}return w}function wa(e,n,s,i,a,h,m){var v=au(e,n,i,m),w=v.begin,k=v.end;/\s/.test(n.text.charAt(k-1))&&k--;for(var z=null,U=null,se=0;se<a.length;se++){var ne=a[se];if(!(ne.from>=k||ne.to<=w)){var ge=ne.level!=1,be=Er(e,i,ge?Math.min(k,ne.to)-1:Math.max(w,ne.from)).right,Ae=be<h?h-be+1e9:be-h;(!z||U>Ae)&&(z=ne,U=Ae)}}return z||(z=a[a.length-1]),z.from<w&&(z={from:w,to:z.to,level:z.level}),z.to>k&&(z={from:z.from,to:k,level:z.level}),z}var Ki;function ki(e){if(e.cachedTextHeight!=null)return e.cachedTextHeight;if(Ki==null){Ki=E("pre",null,"CodeMirror-line-like");for(var n=0;n<49;++n)Ki.appendChild(document.createTextNode("x")),Ki.appendChild(E("br"));Ki.appendChild(document.createTextNode("x"))}ve(e.measure,Ki);var s=Ki.offsetHeight/50;return s>3&&(e.cachedTextHeight=s),le(e.measure),s||1}function hs(e){if(e.cachedCharWidth!=null)return e.cachedCharWidth;var n=E("span","xxxxxxxxxx"),s=E("pre",[n],"CodeMirror-line-like");ve(e.measure,s);var i=n.getBoundingClientRect(),a=(i.right-i.left)/10;return a>2&&(e.cachedCharWidth=a),a||10}function ll(e){for(var n=e.display,s={},i={},a=n.gutters.clientLeft,h=n.gutters.firstChild,m=0;h;h=h.nextSibling,++m){var v=e.display.gutterSpecs[m].className;s[v]=h.offsetLeft+h.clientLeft+a,i[v]=h.clientWidth}return{fixedPos:ka(n),gutterTotalWidth:n.gutters.offsetWidth,gutterLeft:s,gutterWidth:i,wrapperWidth:n.wrapper.clientWidth}}function ka(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Ms(e){var n=ki(e.display),s=e.options.lineWrapping,i=s&&Math.max(5,e.display.scroller.clientWidth/hs(e.display)-3);return function(a){if(Nr(e.doc,a))return 0;var h=0;if(a.widgets)for(var m=0;m<a.widgets.length;m++)a.widgets[m].height&&(h+=a.widgets[m].height);return s?h+(Math.ceil(a.text.length/i)||1)*n:h+n}}function fo(e){var n=e.doc,s=Ms(e);n.iter(function(i){var a=s(i);a!=i.height&&Yn(i,a)})}function fs(e,n,s,i){var a=e.display;if(!s&&fi(n).getAttribute("cm-not-content")=="true")return null;var h,m,v=a.lineSpace.getBoundingClientRect();try{h=n.clientX-v.left,m=n.clientY-v.top}catch{return null}var w=ol(e,h,m),k;if(i&&w.xRel>0&&(k=Je(e.doc,w.line).text).length==w.ch){var z=Ke(k,k.length,e.options.tabSize)-k.length;w=de(w.line,Math.max(0,Math.round((h-eu(e.display).left)/hs(e.display))-z))}return w}function Si(e,n){if(n>=e.display.viewTo||(n-=e.display.viewFrom,n<0))return null;for(var s=e.display.view,i=0;i<s.length;i++)if(n-=s[i].size,n<0)return i}function sr(e,n,s,i){n==null&&(n=e.doc.first),s==null&&(s=e.doc.first+e.doc.size),i||(i=0);var a=e.display;if(i&&s<a.viewTo&&(a.updateLineNumbers==null||a.updateLineNumbers>n)&&(a.updateLineNumbers=n),e.curOp.viewChanged=!0,n>=a.viewTo)Mn&&fr(e.doc,n)<a.viewTo&&Gi(e);else if(s<=a.viewFrom)Mn&&dn(e.doc,s+i)>a.viewFrom?Gi(e):(a.viewFrom+=i,a.viewTo+=i);else if(n<=a.viewFrom&&s>=a.viewTo)Gi(e);else if(n<=a.viewFrom){var h=mo(e,s,s+i,1);h?(a.view=a.view.slice(h.index),a.viewFrom=h.lineN,a.viewTo+=i):Gi(e)}else if(s>=a.viewTo){var m=mo(e,n,n,-1);m?(a.view=a.view.slice(0,m.index),a.viewTo=m.lineN):Gi(e)}else{var v=mo(e,n,n,-1),w=mo(e,s,s+i,1);v&&w?(a.view=a.view.slice(0,v.index).concat(el(e,v.lineN,w.lineN)).concat(a.view.slice(w.index)),a.viewTo+=i):Gi(e)}var k=a.externalMeasured;k&&(s<k.lineN?k.lineN+=i:n<k.lineN+k.size&&(a.externalMeasured=null))}function $i(e,n,s){e.curOp.viewChanged=!0;var i=e.display,a=e.display.externalMeasured;if(a&&n>=a.lineN&&n<a.lineN+a.size&&(i.externalMeasured=null),!(n<i.viewFrom||n>=i.viewTo)){var h=i.view[Si(e,n)];if(h.node!=null){var m=h.changes||(h.changes=[]);$e(m,s)==-1&&m.push(s)}}}function Gi(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function mo(e,n,s,i){var a=Si(e,n),h,m=e.display.view;if(!Mn||s==e.doc.first+e.doc.size)return{index:a,lineN:s};for(var v=e.display.viewFrom,w=0;w<a;w++)v+=m[w].size;if(v!=n){if(i>0){if(a==m.length-1)return null;h=v+m[a].size-n,a++}else h=v-n;n+=h,s+=h}for(;fr(e.doc,s)!=s;){if(a==(i<0?0:m.length-1))return null;s+=i*m[a-(i<0?1:0)].size,a+=i}return{index:a,lineN:s}}function kc(e,n,s){var i=e.display,a=i.view;a.length==0||n>=i.viewTo||s<=i.viewFrom?(i.view=el(e,n,s),i.viewFrom=n):(i.viewFrom>n?i.view=el(e,n,i.viewFrom).concat(i.view):i.viewFrom<n&&(i.view=i.view.slice(Si(e,n))),i.viewFrom=n,i.viewTo<s?i.view=i.view.concat(el(e,i.viewTo,s)):i.viewTo>s&&(i.view=i.view.slice(0,Si(e,s)))),i.viewTo=s}function lu(e){for(var n=e.display.view,s=0,i=0;i<n.length;i++){var a=n[i];!a.hidden&&(!a.node||a.changes)&&++s}return s}function Gr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function ul(e,n){n===void 0&&(n=!0);var s=e.doc,i={},a=i.cursors=document.createDocumentFragment(),h=i.selection=document.createDocumentFragment(),m=e.options.$customCursor;m&&(n=!0);for(var v=0;v<s.sel.ranges.length;v++)if(!(!n&&v==s.sel.primIndex)){var w=s.sel.ranges[v];if(!(w.from().line>=e.display.viewTo||w.to().line<e.display.viewFrom)){var k=w.empty();if(m){var z=m(e,w);z&&go(e,z,a)}else(k||e.options.showCursorWhenSelecting)&&go(e,w.head,a);k||rp(e,w,h)}}return i}function go(e,n,s){var i=_n(e,n,"div",null,null,!e.options.singleCursorHeightPerLine),a=s.appendChild(E("div"," ","CodeMirror-cursor"));if(a.style.left=i.left+"px",a.style.top=i.top+"px",a.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var h=sl(e,n,"div",null,null),m=h.right-h.left;a.style.width=(m>0?m:e.defaultCharWidth())+"px"}if(i.other){var v=s.appendChild(E("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));v.style.display="",v.style.left=i.other.left+"px",v.style.top=i.other.top+"px",v.style.height=(i.other.bottom-i.other.top)*.85+"px"}}function cl(e,n){return e.top-n.top||e.left-n.left}function rp(e,n,s){var i=e.display,a=e.doc,h=document.createDocumentFragment(),m=eu(e.display),v=m.left,w=Math.max(i.sizerWidth,ds(e)-i.sizer.offsetLeft)-m.right,k=a.direction=="ltr";function z(De,Ge,ot,Ve){Ge<0&&(Ge=0),Ge=Math.round(Ge),Ve=Math.round(Ve),h.appendChild(E("div",null,"CodeMirror-selected","position: absolute; left: "+De+`px;
                             top: `+Ge+"px; width: "+(ot??w-De)+`px;
                             height: `+(Ve-Ge)+"px"))}function U(De,Ge,ot){var Ve=Je(a,De),St=Ve.text.length,Et,Bn;function sn(yn,br){return sl(e,de(De,yn),"div",Ve,br)}function xr(yn,br,Tn){var vn=ou(e,Ve,null,yn),Dt=br=="ltr"==(Tn=="after")?"left":"right",dt=Tn=="after"?vn.begin:vn.end-(/\s/.test(Ve.text.charAt(vn.end-1))?2:1);return sn(dt,Dt)[Dt]}var lr=bt(Ve,a.direction);return Sr(lr,Ge||0,ot??St,function(yn,br,Tn,vn){var Dt=Tn=="ltr",dt=sn(yn,Dt?"left":"right"),zt=sn(br-1,Dt?"right":"left"),an=Ge==null&&yn==0,un=ot==null&&br==St,Ut=vn==0,wr=!lr||vn==lr.length-1;if(zt.top-dt.top<=3){var Lt=(k?an:un)&&Ut,sa=(k?un:an)&&wr,kr=Lt?v:(Dt?dt:zt).left,Ai=sa?w:(Dt?zt:dt).right;z(kr,dt.top,Ai-kr,dt.bottom)}else{var es,An,Un,Wo;Dt?(es=k&&an&&Ut?v:dt.left,An=k?w:xr(yn,Tn,"before"),Un=k?v:xr(br,Tn,"after"),Wo=k&&un&&wr?w:zt.right):(es=k?xr(yn,Tn,"before"):v,An=!k&&an&&Ut?w:dt.right,Un=!k&&un&&wr?v:zt.left,Wo=k?xr(br,Tn,"after"):w),z(es,dt.top,An-es,dt.bottom),dt.bottom<zt.top&&z(v,dt.bottom,null,zt.top),z(Un,zt.top,Wo-Un,zt.bottom)}(!Et||cl(dt,Et)<0)&&(Et=dt),cl(zt,Et)<0&&(Et=zt),(!Bn||cl(dt,Bn)<0)&&(Bn=dt),cl(zt,Bn)<0&&(Bn=zt)}),{start:Et,end:Bn}}var se=n.from(),ne=n.to();if(se.line==ne.line)U(se.line,se.ch,ne.ch);else{var ge=Je(a,se.line),be=Je(a,ne.line),Ae=Kt(ge)==Kt(be),Ee=U(se.line,se.ch,Ae?ge.text.length+1:null).end,Fe=U(ne.line,Ae?0:null,ne.ch).start;Ae&&(Ee.top<Fe.top-2?(z(Ee.right,Ee.top,null,Ee.bottom),z(v,Fe.top,Fe.left,Fe.bottom)):z(Ee.right,Ee.top,Fe.left-Ee.right,Ee.bottom)),Ee.bottom<Fe.top&&z(v,Ee.bottom,null,Fe.top)}s.appendChild(h)}function Ds(e){if(e.state.focused){var n=e.display;clearInterval(n.blinker);var s=!0;n.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?n.blinker=setInterval(function(){e.hasFocus()||Wt(e),n.cursorDiv.style.visibility=(s=!s)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(n.cursorDiv.style.visibility="hidden")}}function Sc(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||pl(e))}function dl(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Wt(e))},100)}function pl(e,n){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),e.options.readOnly!="nocursor"&&(e.state.focused||(It(e,"focus",e,n),e.state.focused=!0,$(e.display.wrapper,"CodeMirror-focused"),!e.curOp&&e.display.selForContextMenu!=e.doc.sel&&(e.display.input.reset(),N&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Ds(e))}function Wt(e,n){e.state.delayingBlurEvent||(e.state.focused&&(It(e,"blur",e,n),e.state.focused=!1,Ce(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Sa(e){for(var n=e.display,s=n.lineDiv.offsetTop,i=Math.max(0,n.scroller.getBoundingClientRect().top),a=n.lineDiv.getBoundingClientRect().top,h=0,m=0;m<n.view.length;m++){var v=n.view[m],w=e.options.lineWrapping,k=void 0,z=0;if(!v.hidden){if(a+=v.line.height,S&&j<8){var U=v.node.offsetTop+v.node.offsetHeight;k=U-s,s=U}else{var se=v.node.getBoundingClientRect();k=se.bottom-se.top,!w&&v.text.firstChild&&(z=v.text.firstChild.getBoundingClientRect().right-se.left-1)}var ne=v.line.height-k;if((ne>.005||ne<-.005)&&(a<i&&(h-=ne),Yn(v.line,k),yo(v.line),v.rest))for(var ge=0;ge<v.rest.length;ge++)yo(v.rest[ge]);if(z>e.display.sizerWidth){var be=Math.ceil(z/hs(e.display));be>e.display.maxLineLength&&(e.display.maxLineLength=be,e.display.maxLine=v.line,e.display.maxLineChanged=!0)}}}Math.abs(h)>2&&(n.scroller.scrollTop+=h)}function yo(e){if(e.widgets)for(var n=0;n<e.widgets.length;++n){var s=e.widgets[n],i=s.node.parentNode;i&&(s.height=i.offsetHeight)}}function ms(e,n,s){var i=s&&s.top!=null?Math.max(0,s.top):e.scroller.scrollTop;i=Math.floor(i-co(e));var a=s&&s.bottom!=null?s.bottom:i+e.wrapper.clientHeight,h=B(n,i),m=B(n,a);if(s&&s.ensure){var v=s.ensure.from.line,w=s.ensure.to.line;v<h?(h=v,m=B(n,Sn(Je(n,v))+e.wrapper.clientHeight)):Math.min(w,n.lastLine())>=m&&(h=B(n,Sn(Je(n,w))-e.wrapper.clientHeight),m=w)}return{from:h,to:Math.max(m,h+1)}}function _c(e,n){if(!qt(e,"scrollCursorIntoView")){var s=e.display,i=s.sizer.getBoundingClientRect(),a=null,h=s.wrapper.ownerDocument;if(n.top+i.top<0?a=!0:n.bottom+i.top>(h.defaultView.innerHeight||h.documentElement.clientHeight)&&(a=!1),a!=null&&!M){var m=E("div","​",null,`position: absolute;
                         top: `+(n.top-s.viewOffset-co(e.display))+`px;
                         height: `+(n.bottom-n.top+si(e)+s.barHeight)+`px;
                         left: `+n.left+"px; width: "+Math.max(2,n.right-n.left)+"px;");e.display.lineSpace.appendChild(m),m.scrollIntoView(a),e.display.lineSpace.removeChild(m)}}}function uu(e,n,s,i){i==null&&(i=0);var a;!e.options.lineWrapping&&n==s&&(s=n.sticky=="before"?de(n.line,n.ch+1,"before"):n,n=n.ch?de(n.line,n.sticky=="before"?n.ch-1:n.ch,"after"):n);for(var h=0;h<5;h++){var m=!1,v=_n(e,n),w=!s||s==n?v:_n(e,s);a={left:Math.min(v.left,w.left),top:Math.min(v.top,w.top)-i,right:Math.max(v.left,w.left),bottom:Math.max(v.bottom,w.bottom)+i};var k=_a(e,a),z=e.doc.scrollTop,U=e.doc.scrollLeft;if(k.scrollTop!=null&&(ys(e,k.scrollTop),Math.abs(e.doc.scrollTop-z)>1&&(m=!0)),k.scrollLeft!=null&&(Yi(e,k.scrollLeft),Math.abs(e.doc.scrollLeft-U)>1&&(m=!0)),!m)break}return a}function vo(e,n){var s=_a(e,n);s.scrollTop!=null&&ys(e,s.scrollTop),s.scrollLeft!=null&&Yi(e,s.scrollLeft)}function _a(e,n){var s=e.display,i=ki(e.display);n.top<0&&(n.top=0);var a=e.curOp&&e.curOp.scrollTop!=null?e.curOp.scrollTop:s.scroller.scrollTop,h=ps(e),m={};n.bottom-n.top>h&&(n.bottom=n.top+h);var v=e.doc.height+tl(s),w=n.top<i,k=n.bottom>v-i;if(n.top<a)m.scrollTop=w?0:n.top;else if(n.bottom>a+h){var z=Math.min(n.top,(k?v:n.bottom)-h);z!=a&&(m.scrollTop=z)}var U=e.options.fixedGutter?0:s.gutters.offsetWidth,se=e.curOp&&e.curOp.scrollLeft!=null?e.curOp.scrollLeft:s.scroller.scrollLeft-U,ne=ds(e)-s.gutters.offsetWidth,ge=n.right-n.left>ne;return ge&&(n.right=n.left+ne),n.left<10?m.scrollLeft=0:n.left<se?m.scrollLeft=Math.max(0,n.left+U-(ge?0:10)):n.right>ne+se-3&&(m.scrollLeft=n.right+(ge?0:10)-ne),m}function gs(e,n){n!=null&&(bo(e),e.curOp.scrollTop=(e.curOp.scrollTop==null?e.doc.scrollTop:e.curOp.scrollTop)+n)}function zs(e){bo(e);var n=e.getCursor();e.curOp.scrollToPos={from:n,to:n,margin:e.options.cursorScrollMargin}}function xo(e,n,s){(n!=null||s!=null)&&bo(e),n!=null&&(e.curOp.scrollLeft=n),s!=null&&(e.curOp.scrollTop=s)}function ip(e,n){bo(e),e.curOp.scrollToPos=n}function bo(e){var n=e.curOp.scrollToPos;if(n){e.curOp.scrollToPos=null;var s=ba(e,n.from),i=ba(e,n.to);wo(e,s,i,n.margin)}}function wo(e,n,s,i){var a=_a(e,{left:Math.min(n.left,s.left),top:Math.min(n.top,s.top)-i,right:Math.max(n.right,s.right),bottom:Math.max(n.bottom,s.bottom)+i});xo(e,a.scrollLeft,a.scrollTop)}function ys(e,n){Math.abs(e.doc.scrollTop-n)<2||(x||Xi(e,{top:n}),hl(e,n,!0),x&&Xi(e),Hs(e,100))}function hl(e,n,s){n=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,n)),!(e.display.scroller.scrollTop==n&&!s)&&(e.doc.scrollTop=n,e.display.scrollbars.setScrollTop(n),e.display.scroller.scrollTop!=n&&(e.display.scroller.scrollTop=n))}function Yi(e,n,s,i){n=Math.max(0,Math.min(n,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),!((s?n==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-n)<2)&&!i)&&(e.doc.scrollLeft=n,du(e),e.display.scroller.scrollLeft!=n&&(e.display.scroller.scrollLeft=n),e.display.scrollbars.setScrollLeft(n))}function Fs(e){var n=e.display,s=n.gutters.offsetWidth,i=Math.round(e.doc.height+tl(e.display));return{clientHeight:n.scroller.clientHeight,viewHeight:n.wrapper.clientHeight,scrollWidth:n.scroller.scrollWidth,clientWidth:n.scroller.clientWidth,viewWidth:n.wrapper.clientWidth,barLeft:e.options.fixedGutter?s:0,docHeight:i,scrollHeight:i+si(e)+n.barHeight,nativeBarWidth:n.nativeBarWidth,gutterWidth:s}}var Vi=function(e,n,s){this.cm=s;var i=this.vert=E("div",[E("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),a=this.horiz=E("div",[E("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=a.tabIndex=-1,e(i),e(a),rt(i,"scroll",function(){i.clientHeight&&n(i.scrollTop,"vertical")}),rt(a,"scroll",function(){a.clientWidth&&n(a.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,S&&j<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Vi.prototype.update=function(e){var n=e.scrollWidth>e.clientWidth+1,s=e.scrollHeight>e.clientHeight+1,i=e.nativeBarWidth;if(s){this.vert.style.display="block",this.vert.style.bottom=n?i+"px":"0";var a=e.viewHeight-(n?i:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+a)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(n){this.horiz.style.display="block",this.horiz.style.right=s?i+"px":"0",this.horiz.style.left=e.barLeft+"px";var h=e.viewWidth-e.barLeft-(s?i:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+h)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(i==0&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:s?i:0,bottom:n?i:0}},Vi.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Vi.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Vi.prototype.zeroWidthHack=function(){var e=Y&&!X?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new et,this.disableVert=new et},Vi.prototype.enableZeroWidthBar=function(e,n,s){e.style.visibility="";function i(){var a=e.getBoundingClientRect(),h=s=="vert"?document.elementFromPoint(a.right-1,(a.top+a.bottom)/2):document.elementFromPoint((a.right+a.left)/2,a.bottom-1);h!=e?e.style.visibility="hidden":n.set(1e3,i)}n.set(1e3,i)},Vi.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var ko=function(){};ko.prototype.update=function(){return{bottom:0,right:0}},ko.prototype.setScrollLeft=function(){},ko.prototype.setScrollTop=function(){},ko.prototype.clear=function(){};function Ws(e,n){n||(n=Fs(e));var s=e.display.barWidth,i=e.display.barHeight;Cc(e,n);for(var a=0;a<4&&s!=e.display.barWidth||i!=e.display.barHeight;a++)s!=e.display.barWidth&&e.options.lineWrapping&&Sa(e),Cc(e,Fs(e)),s=e.display.barWidth,i=e.display.barHeight}function Cc(e,n){var s=e.display,i=s.scrollbars.update(n);s.sizer.style.paddingRight=(s.barWidth=i.right)+"px",s.sizer.style.paddingBottom=(s.barHeight=i.bottom)+"px",s.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(s.scrollbarFiller.style.display="block",s.scrollbarFiller.style.height=i.bottom+"px",s.scrollbarFiller.style.width=i.right+"px"):s.scrollbarFiller.style.display="",i.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(s.gutterFiller.style.display="block",s.gutterFiller.style.height=i.bottom+"px",s.gutterFiller.style.width=n.gutterWidth+"px"):s.gutterFiller.style.display=""}var Tc={native:Vi,null:ko};function fl(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Ce(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Tc[e.options.scrollbarStyle](function(n){e.display.wrapper.insertBefore(n,e.display.scrollbarFiller),rt(n,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),n.setAttribute("cm-not-content","true")},function(n,s){s=="horizontal"?Yi(e,n):ys(e,n)},e),e.display.scrollbars.addClass&&$(e.display.wrapper,e.display.scrollbars.addClass)}var vs=0;function xs(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++vs,markArrays:null},pc(e.curOp)}function Yr(e){var n=e.curOp;n&&Gd(n,function(s){for(var i=0;i<s.ops.length;i++)s.ops[i].cm.curOp=null;_i(s)})}function _i(e){for(var n=e.ops,s=0;s<n.length;s++)So(n[s]);for(var i=0;i<n.length;i++)Ji(n[i]);for(var a=0;a<n.length;a++)cu(n[a]);for(var h=0;h<n.length;h++)sp(n[h]);for(var m=0;m<n.length;m++)ap(n[m])}function So(e){var n=e.cm,s=n.display;nn(n),e.updateMaxLine&&so(n),e.mustUpdate=e.viewChanged||e.forceUpdate||e.scrollTop!=null||e.scrollToPos&&(e.scrollToPos.from.line<s.viewFrom||e.scrollToPos.to.line>=s.viewTo)||s.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new ai(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Ji(e){e.updatedDisplay=e.mustUpdate&&Jn(e.cm,e.update)}function cu(e){var n=e.cm,s=n.display;e.updatedDisplay&&Sa(n),e.barMeasure=Fs(n),s.maxLineChanged&&!n.options.lineWrapping&&(e.adjustWidthTo=tu(n,s.maxLine,s.maxLine.text.length).left+3,n.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(s.scroller.clientWidth,s.sizer.offsetLeft+e.adjustWidthTo+si(n)+n.display.barWidth),e.maxScrollLeft=Math.max(0,s.sizer.offsetLeft+e.adjustWidthTo-ds(n))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=s.input.prepareSelection())}function sp(e){var n=e.cm;e.adjustWidthTo!=null&&(n.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<n.doc.scrollLeft&&Yi(n,Math.min(n.display.scroller.scrollLeft,e.maxScrollLeft),!0),n.display.maxLineChanged=!1);var s=e.focus&&e.focus==L(Ie(n));e.preparedSelection&&n.display.input.showSelection(e.preparedSelection,s),(e.updatedDisplay||e.startHeight!=n.doc.height)&&Ws(n,e.barMeasure),e.updatedDisplay&&ja(n,e.barMeasure),e.selectionChanged&&Ds(n),n.state.focused&&e.updateInput&&n.display.input.reset(e.typing),s&&Sc(e.cm)}function ap(e){var n=e.cm,s=n.display,i=n.doc;if(e.updatedDisplay&&mr(n,e.update),s.wheelStartX!=null&&(e.scrollTop!=null||e.scrollLeft!=null||e.scrollToPos)&&(s.wheelStartX=s.wheelStartY=null),e.scrollTop!=null&&hl(n,e.scrollTop,e.forceScroll),e.scrollLeft!=null&&Yi(n,e.scrollLeft,!0,!0),e.scrollToPos){var a=uu(n,gt(i,e.scrollToPos.from),gt(i,e.scrollToPos.to),e.scrollToPos.margin);_c(n,a)}var h=e.maybeHiddenMarkers,m=e.maybeUnhiddenMarkers;if(h)for(var v=0;v<h.length;++v)h[v].lines.length||It(h[v],"hide");if(m)for(var w=0;w<m.length;++w)m[w].lines.length&&It(m[w],"unhide");s.wrapper.offsetHeight&&(i.scrollTop=n.display.scroller.scrollTop),e.changeObjs&&It(n,"changes",n,e.changeObjs),e.update&&e.update.finish()}function Ln(e,n){if(e.curOp)return n();xs(e);try{return n()}finally{Yr(e)}}function pn(e,n){return function(){if(e.curOp)return n.apply(e,arguments);xs(e);try{return n.apply(e,arguments)}finally{Yr(e)}}}function Cn(e){return function(){if(this.curOp)return e.apply(this,arguments);xs(this);try{return e.apply(this,arguments)}finally{Yr(this)}}}function gn(e){return function(){var n=this.cm;if(!n||n.curOp)return e.apply(this,arguments);xs(n);try{return e.apply(this,arguments)}finally{Yr(n)}}}function Hs(e,n){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(n,we(Ca,e))}function Ca(e){var n=e.doc;if(!(n.highlightFrontier>=e.display.viewTo)){var s=+new Date+e.options.workTime,i=Nt(e,n.highlightFrontier),a=[];n.iter(i.line,Math.min(n.first+n.size,e.display.viewTo+500),function(h){if(i.line>=e.display.viewFrom){var m=h.styles,v=h.text.length>e.options.maxHighlightLength?Rt(n.mode,i.state):null,w=to(e,h,i,!0);v&&(i.state=v),h.styles=w.styles;var k=h.styleClasses,z=w.classes;z?h.styleClasses=z:k&&(h.styleClasses=null);for(var U=!m||m.length!=h.styles.length||k!=z&&(!k||!z||k.bgClass!=z.bgClass||k.textClass!=z.textClass),se=0;!U&&se<m.length;++se)U=m[se]!=h.styles[se];U&&a.push(i.line),h.stateAfter=i.save(),i.nextLine()}else h.text.length<=e.options.maxHighlightLength&&us(e,h.text,i),h.stateAfter=i.line%5==0?i.save():null,i.nextLine();if(+new Date>s)return Hs(e,e.options.workDelay),!0}),n.highlightFrontier=i.line,n.modeFrontier=Math.max(n.modeFrontier,i.line),a.length&&Ln(e,function(){for(var h=0;h<a.length;h++)$i(e,a[h],"text")})}}var ai=function(e,n,s){var i=e.display;this.viewport=n,this.visible=ms(i,e.doc,n),this.editorIsHidden=!i.wrapper.offsetWidth,this.wrapperHeight=i.wrapper.clientHeight,this.wrapperWidth=i.wrapper.clientWidth,this.oldDisplayWidth=ds(e),this.force=s,this.dims=ll(e),this.events=[]};ai.prototype.signal=function(e,n){mn(e,n)&&this.events.push(arguments)},ai.prototype.finish=function(){for(var e=0;e<this.events.length;e++)It.apply(null,this.events[e])};function nn(e){var n=e.display;!n.scrollbarsClipped&&n.scroller.offsetWidth&&(n.nativeBarWidth=n.scroller.offsetWidth-n.scroller.clientWidth,n.heightForcer.style.height=si(e)+"px",n.sizer.style.marginBottom=-n.nativeBarWidth+"px",n.sizer.style.borderRightWidth=si(e)+"px",n.scrollbarsClipped=!0)}function Zt(e){if(e.hasFocus())return null;var n=L(Ie(e));if(!n||!R(e.display.lineDiv,n))return null;var s={activeElt:n};if(window.getSelection){var i=Oe(e).getSelection();i.anchorNode&&i.extend&&R(e.display.lineDiv,i.anchorNode)&&(s.anchorNode=i.anchorNode,s.anchorOffset=i.anchorOffset,s.focusNode=i.focusNode,s.focusOffset=i.focusOffset)}return s}function bs(e){if(!(!e||!e.activeElt||e.activeElt==L(qe(e.activeElt)))&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&R(document.body,e.anchorNode)&&R(document.body,e.focusNode))){var n=e.activeElt.ownerDocument,s=n.defaultView.getSelection(),i=n.createRange();i.setEnd(e.anchorNode,e.anchorOffset),i.collapse(!1),s.removeAllRanges(),s.addRange(i),s.extend(e.focusNode,e.focusOffset)}}function Jn(e,n){var s=e.display,i=e.doc;if(n.editorIsHidden)return Gi(e),!1;if(!n.force&&n.visible.from>=s.viewFrom&&n.visible.to<=s.viewTo&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo)&&s.renderedView==s.view&&lu(e)==0)return!1;pu(e)&&(Gi(e),n.dims=ll(e));var a=i.first+i.size,h=Math.max(n.visible.from-e.options.viewportMargin,i.first),m=Math.min(a,n.visible.to+e.options.viewportMargin);s.viewFrom<h&&h-s.viewFrom<20&&(h=Math.max(i.first,s.viewFrom)),s.viewTo>m&&s.viewTo-m<20&&(m=Math.min(a,s.viewTo)),Mn&&(h=fr(e.doc,h),m=dn(e.doc,m));var v=h!=s.viewFrom||m!=s.viewTo||s.lastWrapHeight!=n.wrapperHeight||s.lastWrapWidth!=n.wrapperWidth;kc(e,h,m),s.viewOffset=Sn(Je(e.doc,s.viewFrom)),e.display.mover.style.top=s.viewOffset+"px";var w=lu(e);if(!v&&w==0&&!n.force&&s.renderedView==s.view&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo))return!1;var k=Zt(e);return w>4&&(s.lineDiv.style.display="none"),Ta(e,s.updateLineNumbers,n.dims),w>4&&(s.lineDiv.style.display=""),s.renderedView=s.view,bs(k),le(s.cursorDiv),le(s.selectionDiv),s.gutters.style.height=s.sizer.style.minHeight=0,v&&(s.lastWrapHeight=n.wrapperHeight,s.lastWrapWidth=n.wrapperWidth,Hs(e,400)),s.updateLineNumbers=null,!0}function mr(e,n){for(var s=n.viewport,i=!0;;i=!1){if(!i||!e.options.lineWrapping||n.oldDisplayWidth==ds(e)){if(s&&s.top!=null&&(s={top:Math.min(e.doc.height+tl(e.display)-ps(e),s.top)}),n.visible=ms(e.display,e.doc,s),n.visible.from>=e.display.viewFrom&&n.visible.to<=e.display.viewTo)break}else i&&(n.visible=ms(e.display,e.doc,s));if(!Jn(e,n))break;Sa(e);var a=Fs(e);Gr(e),Ws(e,a),ja(e,a),n.force=!1}n.signal(e,"update",e),(e.display.viewFrom!=e.display.reportedViewFrom||e.display.viewTo!=e.display.reportedViewTo)&&(n.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Xi(e,n){var s=new ai(e,n);if(Jn(e,s)){Sa(e),mr(e,s);var i=Fs(e);Gr(e),Ws(e,i),ja(e,i),s.finish()}}function Ta(e,n,s){var i=e.display,a=e.options.lineNumbers,h=i.lineDiv,m=h.firstChild;function v(ge){var be=ge.nextSibling;return N&&Y&&e.display.currentWheelTarget==ge?ge.style.display="none":ge.parentNode.removeChild(ge),be}for(var w=i.view,k=i.viewFrom,z=0;z<w.length;z++){var U=w[z];if(!U.hidden)if(!U.node||U.node.parentNode!=h){var se=Xd(e,U,k,s);h.insertBefore(se,m)}else{for(;m!=U.node;)m=v(m);var ne=a&&n!=null&&n<=k&&U.lineNumber;U.changes&&($e(U.changes,"gutter")>-1&&(ne=!1),hc(e,U,k,s)),ne&&(le(U.lineNumber),U.lineNumber.appendChild(document.createTextNode(Ne(e.options,k)))),m=U.node.nextSibling}k+=U.size}for(;m;)m=v(m)}function ar(e){var n=e.gutters.offsetWidth;e.sizer.style.marginLeft=n+"px",Dn(e,"gutterChanged",e)}function ja(e,n){e.display.sizer.style.minHeight=n.docHeight+"px",e.display.heightForcer.style.top=n.docHeight+"px",e.display.gutters.style.height=n.docHeight+e.display.barHeight+si(e)+"px"}function du(e){var n=e.display,s=n.view;if(!(!n.alignWidgets&&(!n.gutters.firstChild||!e.options.fixedGutter))){for(var i=ka(n)-n.scroller.scrollLeft+e.doc.scrollLeft,a=n.gutters.offsetWidth,h=i+"px",m=0;m<s.length;m++)if(!s[m].hidden){e.options.fixedGutter&&(s[m].gutter&&(s[m].gutter.style.left=h),s[m].gutterBackground&&(s[m].gutterBackground.style.left=h));var v=s[m].alignable;if(v)for(var w=0;w<v.length;w++)v[w].style.left=h}e.options.fixedGutter&&(n.gutters.style.left=i+a+"px")}}function pu(e){if(!e.options.lineNumbers)return!1;var n=e.doc,s=Ne(e.options,n.first+n.size-1),i=e.display;if(s.length!=i.lineNumChars){var a=i.measure.appendChild(E("div",[E("div",s)],"CodeMirror-linenumber CodeMirror-gutter-elt")),h=a.firstChild.offsetWidth,m=a.offsetWidth-h;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(h,i.lineGutter.offsetWidth-m)+1,i.lineNumWidth=i.lineNumInnerWidth+m,i.lineNumChars=i.lineNumInnerWidth?s.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",ar(e.display),!0}return!1}function Na(e,n){for(var s=[],i=!1,a=0;a<e.length;a++){var h=e[a],m=null;if(typeof h!="string"&&(m=h.style,h=h.className),h=="CodeMirror-linenumbers")if(n)i=!0;else continue;s.push({className:h,style:m})}return n&&!i&&s.push({className:"CodeMirror-linenumbers",style:null}),s}function hu(e){var n=e.gutters,s=e.gutterSpecs;le(n),e.lineGutter=null;for(var i=0;i<s.length;++i){var a=s[i],h=a.className,m=a.style,v=n.appendChild(E("div",null,"CodeMirror-gutter "+h));m&&(v.style.cssText=m),h=="CodeMirror-linenumbers"&&(e.lineGutter=v,v.style.width=(e.lineNumWidth||1)+"px")}n.style.display=s.length?"":"none",ar(e)}function zr(e){hu(e.display),sr(e),du(e)}function ml(e,n,s,i){var a=this;this.input=s,a.scrollbarFiller=E("div",null,"CodeMirror-scrollbar-filler"),a.scrollbarFiller.setAttribute("cm-not-content","true"),a.gutterFiller=E("div",null,"CodeMirror-gutter-filler"),a.gutterFiller.setAttribute("cm-not-content","true"),a.lineDiv=ee("div",null,"CodeMirror-code"),a.selectionDiv=E("div",null,null,"position: relative; z-index: 1"),a.cursorDiv=E("div",null,"CodeMirror-cursors"),a.measure=E("div",null,"CodeMirror-measure"),a.lineMeasure=E("div",null,"CodeMirror-measure"),a.lineSpace=ee("div",[a.measure,a.lineMeasure,a.selectionDiv,a.cursorDiv,a.lineDiv],null,"position: relative; outline: none");var h=ee("div",[a.lineSpace],"CodeMirror-lines");a.mover=E("div",[h],null,"position: relative"),a.sizer=E("div",[a.mover],"CodeMirror-sizer"),a.sizerWidth=null,a.heightForcer=E("div",null,null,"position: absolute; height: "+Ft+"px; width: 1px;"),a.gutters=E("div",null,"CodeMirror-gutters"),a.lineGutter=null,a.scroller=E("div",[a.sizer,a.heightForcer,a.gutters],"CodeMirror-scroll"),a.scroller.setAttribute("tabIndex","-1"),a.wrapper=E("div",[a.scrollbarFiller,a.gutterFiller,a.scroller],"CodeMirror"),A&&J===105&&(a.wrapper.style.clipPath="inset(0px)"),a.wrapper.setAttribute("translate","no"),S&&j<8&&(a.gutters.style.zIndex=-1,a.scroller.style.paddingRight=0),!N&&!(x&&H)&&(a.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(a.wrapper):e(a.wrapper)),a.viewFrom=a.viewTo=n.first,a.reportedViewFrom=a.reportedViewTo=n.first,a.view=[],a.renderedView=null,a.externalMeasured=null,a.viewOffset=0,a.lastWrapHeight=a.lastWrapWidth=0,a.updateLineNumbers=null,a.nativeBarWidth=a.barHeight=a.barWidth=0,a.scrollbarsClipped=!1,a.lineNumWidth=a.lineNumInnerWidth=a.lineNumChars=null,a.alignWidgets=!1,a.cachedCharWidth=a.cachedTextHeight=a.cachedPaddingH=null,a.maxLine=null,a.maxLineLength=0,a.maxLineChanged=!1,a.wheelDX=a.wheelDY=a.wheelStartX=a.wheelStartY=null,a.shift=!1,a.selForContextMenu=null,a.activeTouch=null,a.gutterSpecs=Na(i.gutters,i.lineNumbers),hu(a),s.init(a)}var Ea=0,Ci=null;S?Ci=-.53:x?Ci=15:A?Ci=-.7:G&&(Ci=-1/3);function jc(e){var n=e.wheelDeltaX,s=e.wheelDeltaY;return n==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(n=e.detail),s==null&&e.detail&&e.axis==e.VERTICAL_AXIS?s=e.detail:s==null&&(s=e.wheelDelta),{x:n,y:s}}function ws(e){var n=jc(e);return n.x*=Ci,n.y*=Ci,n}function Bs(e,n){A&&J==102&&(e.display.chromeScrollHack==null?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout(function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""},100));var s=jc(n),i=s.x,a=s.y,h=Ci;n.deltaMode===0&&(i=n.deltaX,a=n.deltaY,h=1);var m=e.display,v=m.scroller,w=v.scrollWidth>v.clientWidth,k=v.scrollHeight>v.clientHeight;if(i&&w||a&&k){if(a&&Y&&N){e:for(var z=n.target,U=m.view;z!=v;z=z.parentNode)for(var se=0;se<U.length;se++)if(U[se].node==z){e.display.currentWheelTarget=z;break e}}if(i&&!x&&!D&&h!=null){a&&k&&ys(e,Math.max(0,v.scrollTop+a*h)),Yi(e,Math.max(0,v.scrollLeft+i*h)),(!a||a&&k)&&bn(n),m.wheelStartX=null;return}if(a&&h!=null){var ne=a*h,ge=e.doc.scrollTop,be=ge+m.wrapper.clientHeight;ne<0?ge=Math.max(0,ge+ne-50):be=Math.min(e.doc.height,be+ne+50),Xi(e,{top:ge,bottom:be})}Ea<20&&n.deltaMode!==0&&(m.wheelStartX==null?(m.wheelStartX=v.scrollLeft,m.wheelStartY=v.scrollTop,m.wheelDX=i,m.wheelDY=a,setTimeout(function(){if(m.wheelStartX!=null){var Ae=v.scrollLeft-m.wheelStartX,Ee=v.scrollTop-m.wheelStartY,Fe=Ee&&m.wheelDY&&Ee/m.wheelDY||Ae&&m.wheelDX&&Ae/m.wheelDX;m.wheelStartX=m.wheelStartY=null,Fe&&(Ci=(Ci*Ea+Fe)/(Ea+1),++Ea)}},200)):(m.wheelDX+=i,m.wheelDY+=a))}}var Xn=function(e,n){this.ranges=e,this.primIndex=n};Xn.prototype.primary=function(){return this.ranges[this.primIndex]},Xn.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var n=0;n<this.ranges.length;n++){var s=this.ranges[n],i=e.ranges[n];if(!jt(s.anchor,i.anchor)||!jt(s.head,i.head))return!1}return!0},Xn.prototype.deepCopy=function(){for(var e=[],n=0;n<this.ranges.length;n++)e[n]=new At(Qt(this.ranges[n].anchor),Qt(this.ranges[n].head));return new Xn(e,this.primIndex)},Xn.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Xn.prototype.contains=function(e,n){n||(n=e);for(var s=0;s<this.ranges.length;s++){var i=this.ranges[s];if(He(n,i.from())>=0&&He(e,i.to())<=0)return s}return-1};var At=function(e,n){this.anchor=e,this.head=n};At.prototype.from=function(){return Kr(this.anchor,this.head)},At.prototype.to=function(){return kn(this.anchor,this.head)},At.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function Lr(e,n,s){var i=e&&e.options.selectionsMayTouch,a=n[s];n.sort(function(se,ne){return He(se.from(),ne.from())}),s=$e(n,a);for(var h=1;h<n.length;h++){var m=n[h],v=n[h-1],w=He(v.to(),m.from());if(i&&!m.empty()?w>0:w>=0){var k=Kr(v.from(),m.from()),z=kn(v.to(),m.to()),U=v.empty()?m.from()==m.head:v.from()==v.head;h<=s&&--s,n.splice(--h,2,new At(U?z:k,U?k:z))}}return new Xn(n,s)}function zn(e,n){return new Xn([new At(e,n||e)],0)}function Fn(e){return e.text?de(e.from.line+e.text.length-1,Qe(e.text).length+(e.text.length==1?e.from.ch:0)):e.to}function ks(e,n){if(He(e,n.from)<0)return e;if(He(e,n.to)<=0)return Fn(n);var s=e.line+n.text.length-(n.to.line-n.from.line)-1,i=e.ch;return e.line==n.to.line&&(i+=Fn(n).ch-n.to.ch),de(s,i)}function oi(e,n){for(var s=[],i=0;i<e.sel.ranges.length;i++){var a=e.sel.ranges[i];s.push(new At(ks(a.anchor,n),ks(a.head,n)))}return Lr(e.cm,s,e.sel.primIndex)}function Ti(e,n,s){return e.line==n.line?de(s.line,e.ch-n.ch+s.ch):de(s.line+(e.line-n.line),e.ch)}function Us(e,n,s){for(var i=[],a=de(e.first,0),h=a,m=0;m<n.length;m++){var v=n[m],w=Ti(v.from,a,h),k=Ti(Fn(v),a,h);if(a=v.to,h=k,s=="around"){var z=e.sel.ranges[m],U=He(z.head,z.anchor)<0;i[m]=new At(U?k:w,U?w:k)}else i[m]=new At(w,w)}return new Xn(i,e.sel.primIndex)}function gl(e){e.doc.mode=Bt(e.options,e.doc.modeOption),qs(e)}function qs(e){e.doc.iter(function(n){n.stateAfter&&(n.stateAfter=null),n.styles&&(n.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,Hs(e,100),e.state.modeGen++,e.curOp&&sr(e)}function yl(e,n){return n.from.ch==0&&n.to.ch==0&&Qe(n.text)==""&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function gr(e,n,s,i){function a(Fe){return s?s[Fe]:null}function h(Fe,De,Ge){Hd(Fe,De,Ge,i),Dn(Fe,"change",Fe,n)}function m(Fe,De){for(var Ge=[],ot=Fe;ot<De;++ot)Ge.push(new bi(k[ot],a(ot),i));return Ge}var v=n.from,w=n.to,k=n.text,z=Je(e,v.line),U=Je(e,w.line),se=Qe(k),ne=a(k.length-1),ge=w.line-v.line;if(n.full)e.insert(0,m(0,k.length)),e.remove(k.length,e.size-k.length);else if(yl(e,n)){var be=m(0,k.length-1);h(U,U.text,ne),ge&&e.remove(v.line,ge),be.length&&e.insert(v.line,be)}else if(z==U)if(k.length==1)h(z,z.text.slice(0,v.ch)+se+z.text.slice(w.ch),ne);else{var Ae=m(1,k.length-1);Ae.push(new bi(se+z.text.slice(w.ch),ne,i)),h(z,z.text.slice(0,v.ch)+k[0],a(0)),e.insert(v.line+1,Ae)}else if(k.length==1)h(z,z.text.slice(0,v.ch)+k[0]+U.text.slice(w.ch),a(0)),e.remove(v.line+1,ge);else{h(z,z.text.slice(0,v.ch)+k[0],a(0)),h(U,se+U.text.slice(w.ch),ne);var Ee=m(1,k.length-1);ge>1&&e.remove(v.line+1,ge-1),e.insert(v.line+1,Ee)}Dn(e,"change",e,n)}function Pn(e,n,s){function i(a,h,m){if(a.linked)for(var v=0;v<a.linked.length;++v){var w=a.linked[v];if(w.doc!=h){var k=m&&w.sharedHist;s&&!k||(n(w.doc,k),i(w.doc,a,k))}}}i(e,null,!0)}function rn(e,n){if(n.cm)throw new Error("This document is already in use.");e.doc=n,n.cm=e,fo(e),gl(e),Vr(e),e.options.direction=n.direction,e.options.lineWrapping||so(e),e.options.mode=n.modeOption,sr(e)}function Vr(e){(e.doc.direction=="rtl"?$:Ce)(e.display.lineDiv,"CodeMirror-rtl")}function Nc(e){Ln(e,function(){Vr(e),sr(e)})}function _o(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function Co(e,n){var s={from:Qt(n.from),to:Fn(n),text:ri(e,n.from,n.to)};return Pc(e,s,n.from.line,n.to.line+1),Pn(e,function(i){return Pc(i,s,n.from.line,n.to.line+1)},!0),s}function vl(e){for(;e.length;){var n=Qe(e);if(n.ranges)e.pop();else break}}function Ec(e,n){if(n)return vl(e.done),Qe(e.done);if(e.done.length&&!Qe(e.done).ranges)return Qe(e.done);if(e.done.length>1&&!e.done[e.done.length-2].ranges)return e.done.pop(),Qe(e.done)}function To(e,n,s,i){var a=e.history;a.undone.length=0;var h=+new Date,m,v;if((a.lastOp==i||a.lastOrigin==n.origin&&n.origin&&(n.origin.charAt(0)=="+"&&a.lastModTime>h-(e.cm?e.cm.options.historyEventDelay:500)||n.origin.charAt(0)=="*"))&&(m=Ec(a,a.lastOp==i)))v=Qe(m.changes),He(n.from,n.to)==0&&He(n.from,v.to)==0?v.to=Fn(n):m.changes.push(Co(e,n));else{var w=Qe(a.done);for((!w||!w.ranges)&&Pa(e.sel,a.done),m={changes:[Co(e,n)],generation:a.generation},a.done.push(m);a.done.length>a.undoDepth;)a.done.shift(),a.done[0].ranges||a.done.shift()}a.done.push(s),a.generation=++a.maxGeneration,a.lastModTime=a.lastSelTime=h,a.lastOp=a.lastSelOp=i,a.lastOrigin=a.lastSelOrigin=n.origin,v||It(e,"historyAdded")}function Lc(e,n,s,i){var a=n.charAt(0);return a=="*"||a=="+"&&s.ranges.length==i.ranges.length&&s.somethingSelected()==i.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function La(e,n,s,i){var a=e.history,h=i&&i.origin;s==a.lastSelOp||h&&a.lastSelOrigin==h&&(a.lastModTime==a.lastSelTime&&a.lastOrigin==h||Lc(e,h,Qe(a.done),n))?a.done[a.done.length-1]=n:Pa(n,a.done),a.lastSelTime=+new Date,a.lastSelOrigin=h,a.lastSelOp=s,i&&i.clearRedo!==!1&&vl(a.undone)}function Pa(e,n){var s=Qe(n);s&&s.ranges&&s.equals(e)||n.push(e)}function Pc(e,n,s,i){var a=n["spans_"+e.id],h=0;e.iter(Math.max(e.first,s),Math.min(e.first+e.size,i),function(m){m.markedSpans&&((a||(a=n["spans_"+e.id]={}))[h]=m.markedSpans),++h})}function jo(e){if(!e)return null;for(var n,s=0;s<e.length;++s)e[s].marker.explicitlyCleared?n||(n=e.slice(0,s)):n&&n.push(e[s]);return n?n.length?n:null:e}function xl(e,n){var s=n["spans_"+e.id];if(!s)return null;for(var i=[],a=0;a<n.text.length;++a)i.push(jo(s[a]));return i}function fu(e,n){var s=xl(e,n),i=cs(e,n);if(!s)return i;if(!i)return s;for(var a=0;a<s.length;++a){var h=s[a],m=i[a];if(h&&m)e:for(var v=0;v<m.length;++v){for(var w=m[v],k=0;k<h.length;++k)if(h[k].marker==w.marker)continue e;h.push(w)}else m&&(s[a]=m)}return s}function Ks(e,n,s){for(var i=[],a=0;a<e.length;++a){var h=e[a];if(h.ranges){i.push(s?Xn.prototype.deepCopy.call(h):h);continue}var m=h.changes,v=[];i.push({changes:v});for(var w=0;w<m.length;++w){var k=m[w],z=void 0;if(v.push({from:k.from,to:k.to,text:k.text}),n)for(var U in k)(z=U.match(/^spans_(\d+)$/))&&$e(n,Number(z[1]))>-1&&(Qe(v)[U]=k[U],delete k[U])}}return i}function Ss(e,n,s,i){if(i){var a=e.anchor;if(s){var h=He(n,a)<0;h!=He(s,a)<0?(a=n,n=s):h!=He(n,s)<0&&(n=s)}return new At(a,n)}else return new At(s||n,n)}function No(e,n,s,i,a){a==null&&(a=e.cm&&(e.cm.display.shift||e.extend)),Wn(e,new Xn([Ss(e.sel.primary(),n,s,a)],0),i)}function Eo(e,n,s){for(var i=[],a=e.cm&&(e.cm.display.shift||e.extend),h=0;h<e.sel.ranges.length;h++)i[h]=Ss(e.sel.ranges[h],n[h],null,a);var m=Lr(e.cm,i,e.sel.primIndex);Wn(e,m,s)}function Aa(e,n,s,i){var a=e.sel.ranges.slice(0);a[n]=s,Wn(e,Lr(e.cm,a,e.sel.primIndex),i)}function $s(e,n,s,i){Wn(e,zn(n,s),i)}function mu(e,n,s){var i={ranges:n.ranges,update:function(a){this.ranges=[];for(var h=0;h<a.length;h++)this.ranges[h]=new At(gt(e,a[h].anchor),gt(e,a[h].head))},origin:s&&s.origin};return It(e,"beforeSelectionChange",e,i),e.cm&&It(e.cm,"beforeSelectionChange",e.cm,i),i.ranges!=n.ranges?Lr(e.cm,i.ranges,i.ranges.length-1):n}function bl(e,n,s){var i=e.history.done,a=Qe(i);a&&a.ranges?(i[i.length-1]=n,Ra(e,n,s)):Wn(e,n,s)}function Wn(e,n,s){Ra(e,n,s),La(e,e.sel,e.cm?e.cm.curOp.id:NaN,s)}function Ra(e,n,s){(mn(e,"beforeSelectionChange")||e.cm&&mn(e.cm,"beforeSelectionChange"))&&(n=mu(e,n,s));var i=s&&s.bias||(He(n.primary().head,e.sel.primary().head)<0?-1:1);Gs(e,_s(e,n,i,!0)),!(s&&s.scroll===!1)&&e.cm&&e.cm.getOption("readOnly")!="nocursor"&&zs(e.cm)}function Gs(e,n){n.equals(e.sel)||(e.sel=n,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,xn(e.cm)),Dn(e,"cursorActivity",e))}function Fr(e){Gs(e,_s(e,e.sel,null,!1))}function _s(e,n,s,i){for(var a,h=0;h<n.ranges.length;h++){var m=n.ranges[h],v=n.ranges.length==e.sel.ranges.length&&e.sel.ranges[h],w=Lo(e,m.anchor,v&&v.anchor,s,i),k=m.head==m.anchor?w:Lo(e,m.head,v&&v.head,s,i);(a||w!=m.anchor||k!=m.head)&&(a||(a=n.ranges.slice(0,h)),a[h]=new At(w,k))}return a?Lr(e.cm,a,n.primIndex):n}function Cs(e,n,s,i,a){var h=Je(e,n.line);if(h.markedSpans)for(var m=0;m<h.markedSpans.length;++m){var v=h.markedSpans[m],w=v.marker,k="selectLeft"in w?!w.selectLeft:w.inclusiveLeft,z="selectRight"in w?!w.selectRight:w.inclusiveRight;if((v.from==null||(k?v.from<=n.ch:v.from<n.ch))&&(v.to==null||(z?v.to>=n.ch:v.to>n.ch))){if(a&&(It(w,"beforeCursorEnter"),w.explicitlyCleared))if(h.markedSpans){--m;continue}else break;if(!w.atomic)continue;if(s){var U=w.find(i<0?1:-1),se=void 0;if((i<0?z:k)&&(U=ji(e,U,-i,U&&U.line==n.line?h:null)),U&&U.line==n.line&&(se=He(U,s))&&(i<0?se<0:se>0))return Cs(e,U,n,i,a)}var ne=w.find(i<0?-1:1);return(i<0?k:z)&&(ne=ji(e,ne,i,ne.line==n.line?h:null)),ne?Cs(e,ne,n,i,a):null}}return n}function Lo(e,n,s,i,a){var h=i||1,m=Cs(e,n,s,h,a)||!a&&Cs(e,n,s,h,!0)||Cs(e,n,s,-h,a)||!a&&Cs(e,n,s,-h,!0);return m||(e.cantEdit=!0,de(e.first,0))}function ji(e,n,s,i){return s<0&&n.ch==0?n.line>e.first?gt(e,de(n.line-1)):null:s>0&&n.ch==(i||Je(e,n.line)).text.length?n.line<e.first+e.size-1?de(n.line+1,0):null:new de(n.line,n.ch+s)}function Qi(e){e.setSelection(de(e.firstLine(),0),de(e.lastLine()),_t)}function wl(e,n,s){var i={canceled:!1,from:n.from,to:n.to,text:n.text,origin:n.origin,cancel:function(){return i.canceled=!0}};return s&&(i.update=function(a,h,m,v){a&&(i.from=gt(e,a)),h&&(i.to=gt(e,h)),m&&(i.text=m),v!==void 0&&(i.origin=v)}),It(e,"beforeChange",e,i),e.cm&&It(e.cm,"beforeChange",e.cm,i),i.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:i.from,to:i.to,text:i.text,origin:i.origin}}function Ys(e,n,s){if(e.cm){if(!e.cm.curOp)return pn(e.cm,Ys)(e,n,s);if(e.cm.state.suppressEdits)return}if(!((mn(e,"beforeChange")||e.cm&&mn(e.cm,"beforeChange"))&&(n=wl(e,n,!0),!n))){var i=ii&&!s&&io(e,n.from,n.to);if(i)for(var a=i.length-1;a>=0;--a)Ni(e,{from:i[a].from,to:i[a].to,text:a?[""]:n.text,origin:n.origin});else Ni(e,n)}}function Ni(e,n){if(!(n.text.length==1&&n.text[0]==""&&He(n.from,n.to)==0)){var s=oi(e,n);To(e,n,s,e.cm?e.cm.curOp.id:NaN),Ia(e,n,s,cs(e,n));var i=[];Pn(e,function(a,h){!h&&$e(i,a.history)==-1&&(Ma(a.history,n),i.push(a.history)),Ia(a,n,null,cs(a,n))})}}function li(e,n,s){var i=e.cm&&e.cm.state.suppressEdits;if(!(i&&!s)){for(var a=e.history,h,m=e.sel,v=n=="undo"?a.done:a.undone,w=n=="undo"?a.undone:a.done,k=0;k<v.length&&(h=v[k],!(s?h.ranges&&!h.equals(e.sel):!h.ranges));k++);if(k!=v.length){for(a.lastOrigin=a.lastSelOrigin=null;;)if(h=v.pop(),h.ranges){if(Pa(h,w),s&&!h.equals(e.sel)){Wn(e,h,{clearRedo:!1});return}m=h}else if(i){v.push(h);return}else break;var z=[];Pa(m,w),w.push({changes:z,generation:a.generation}),a.generation=h.generation||++a.maxGeneration;for(var U=mn(e,"beforeChange")||e.cm&&mn(e.cm,"beforeChange"),se=function(be){var Ae=h.changes[be];if(Ae.origin=n,U&&!wl(e,Ae,!1))return v.length=0,{};z.push(Co(e,Ae));var Ee=be?oi(e,Ae):Qe(v);Ia(e,Ae,Ee,fu(e,Ae)),!be&&e.cm&&e.cm.scrollIntoView({from:Ae.from,to:Fn(Ae)});var Fe=[];Pn(e,function(De,Ge){!Ge&&$e(Fe,De.history)==-1&&(Ma(De.history,Ae),Fe.push(De.history)),Ia(De,Ae,null,fu(De,Ae))})},ne=h.changes.length-1;ne>=0;--ne){var ge=se(ne);if(ge)return ge.v}}}}function Po(e,n){if(n!=0&&(e.first+=n,e.sel=new Xn(ut(e.sel.ranges,function(a){return new At(de(a.anchor.line+n,a.anchor.ch),de(a.head.line+n,a.head.ch))}),e.sel.primIndex),e.cm)){sr(e.cm,e.first,e.first-n,n);for(var s=e.cm.display,i=s.viewFrom;i<s.viewTo;i++)$i(e.cm,i,"gutter")}}function Ia(e,n,s,i){if(e.cm&&!e.cm.curOp)return pn(e.cm,Ia)(e,n,s,i);if(n.to.line<e.first){Po(e,n.text.length-1-(n.to.line-n.from.line));return}if(!(n.from.line>e.lastLine())){if(n.from.line<e.first){var a=n.text.length-1-(e.first-n.from.line);Po(e,a),n={from:de(e.first,0),to:de(n.to.line+a,n.to.ch),text:[Qe(n.text)],origin:n.origin}}var h=e.lastLine();n.to.line>h&&(n={from:n.from,to:de(h,Je(e,h).text.length),text:[n.text[0]],origin:n.origin}),n.removed=ri(e,n.from,n.to),s||(s=oi(e,n)),e.cm?kl(e.cm,n,i):gr(e,n,i),Ra(e,s,_t),e.cantEdit&&Lo(e,de(e.firstLine(),0))&&(e.cantEdit=!1)}}function kl(e,n,s){var i=e.doc,a=e.display,h=n.from,m=n.to,v=!1,w=h.line;e.options.lineWrapping||(w=C(Kt(Je(i,h.line))),i.iter(w,m.line+1,function(ne){if(ne==a.maxLine)return v=!0,!0})),i.sel.contains(n.from,n.to)>-1&&xn(e),gr(i,n,s,Ms(e)),e.options.lineWrapping||(i.iter(w,h.line+n.text.length,function(ne){var ge=Bi(ne);ge>a.maxLineLength&&(a.maxLine=ne,a.maxLineLength=ge,a.maxLineChanged=!0,v=!1)}),v&&(e.curOp.updateMaxLine=!0)),Dr(i,h.line),Hs(e,400);var k=n.text.length-(m.line-h.line)-1;n.full?sr(e):h.line==m.line&&n.text.length==1&&!yl(e.doc,n)?$i(e,h.line,"text"):sr(e,h.line,m.line+1,k);var z=mn(e,"changes"),U=mn(e,"change");if(U||z){var se={from:h,to:m,text:n.text,removed:n.removed,origin:n.origin};U&&Dn(e,"change",e,se),z&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(se)}e.display.selForContextMenu=null}function Vs(e,n,s,i,a){var h;i||(i=s),He(i,s)<0&&(h=[i,s],s=h[0],i=h[1]),typeof n=="string"&&(n=e.splitLines(n)),Ys(e,{from:s,to:i,text:n,origin:a})}function Oa(e,n,s,i){s<e.line?e.line+=i:n<e.line&&(e.line=n,e.ch=0)}function ui(e,n,s,i){for(var a=0;a<e.length;++a){var h=e[a],m=!0;if(h.ranges){h.copied||(h=e[a]=h.deepCopy(),h.copied=!0);for(var v=0;v<h.ranges.length;v++)Oa(h.ranges[v].anchor,n,s,i),Oa(h.ranges[v].head,n,s,i);continue}for(var w=0;w<h.changes.length;++w){var k=h.changes[w];if(s<k.from.line)k.from=de(k.from.line+i,k.from.ch),k.to=de(k.to.line+i,k.to.ch);else if(n<=k.to.line){m=!1;break}}m||(e.splice(0,a+1),a=0)}}function Ma(e,n){var s=n.from.line,i=n.to.line,a=n.text.length-(i-s)-1;ui(e.done,s,i,a),ui(e.undone,s,i,a)}function Zi(e,n,s,i){var a=n,h=n;return typeof n=="number"?h=Je(e,Qo(e,n)):a=C(n),a==null?null:(i(h,a)&&e.cm&&$i(e.cm,a,s),h)}function ci(e){this.lines=e,this.parent=null;for(var n=0,s=0;s<e.length;++s)e[s].parent=this,n+=e[s].height;this.height=n}ci.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,n){for(var s=e,i=e+n;s<i;++s){var a=this.lines[s];this.height-=a.height,$l(a),Dn(a,"delete")}this.lines.splice(e,n)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,n,s){this.height+=s,this.lines=this.lines.slice(0,e).concat(n).concat(this.lines.slice(e));for(var i=0;i<n.length;++i)n[i].parent=this},iterN:function(e,n,s){for(var i=e+n;e<i;++e)if(s(this.lines[e]))return!0}};function Js(e){this.children=e;for(var n=0,s=0,i=0;i<e.length;++i){var a=e[i];n+=a.chunkSize(),s+=a.height,a.parent=this}this.size=n,this.height=s,this.parent=null}Js.prototype={chunkSize:function(){return this.size},removeInner:function(e,n){this.size-=n;for(var s=0;s<this.children.length;++s){var i=this.children[s],a=i.chunkSize();if(e<a){var h=Math.min(n,a-e),m=i.height;if(i.removeInner(e,h),this.height-=m-i.height,a==h&&(this.children.splice(s--,1),i.parent=null),(n-=h)==0)break;e=0}else e-=a}if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof ci))){var v=[];this.collapse(v),this.children=[new ci(v)],this.children[0].parent=this}},collapse:function(e){for(var n=0;n<this.children.length;++n)this.children[n].collapse(e)},insertInner:function(e,n,s){this.size+=n.length,this.height+=s;for(var i=0;i<this.children.length;++i){var a=this.children[i],h=a.chunkSize();if(e<=h){if(a.insertInner(e,n,s),a.lines&&a.lines.length>50){for(var m=a.lines.length%25+25,v=m;v<a.lines.length;){var w=new ci(a.lines.slice(v,v+=25));a.height-=w.height,this.children.splice(++i,0,w),w.parent=this}a.lines=a.lines.slice(0,m),this.maybeSpill()}break}e-=h}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var n=e.children.splice(e.children.length-5,5),s=new Js(n);if(e.parent){e.size-=s.size,e.height-=s.height;var a=$e(e.parent.children,e);e.parent.children.splice(a+1,0,s)}else{var i=new Js(e.children);i.parent=e,e.children=[i,s],e=i}s.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,n,s){for(var i=0;i<this.children.length;++i){var a=this.children[i],h=a.chunkSize();if(e<h){var m=Math.min(n,h-e);if(a.iterN(e,m,s))return!0;if((n-=m)==0)break;e=0}else e-=h}}};var Ei=function(e,n,s){if(s)for(var i in s)s.hasOwnProperty(i)&&(this[i]=s[i]);this.doc=e,this.node=n};Ei.prototype.clear=function(){var e=this.doc.cm,n=this.line.widgets,s=this.line,i=C(s);if(!(i==null||!n)){for(var a=0;a<n.length;++a)n[a]==this&&n.splice(a--,1);n.length||(s.widgets=null);var h=Ui(this);Yn(s,Math.max(0,s.height-h)),e&&(Ln(e,function(){gu(e,s,-h),$i(e,i,"widget")}),Dn(e,"lineWidgetCleared",e,this,i))}},Ei.prototype.changed=function(){var e=this,n=this.height,s=this.doc.cm,i=this.line;this.height=null;var a=Ui(this)-n;a&&(Nr(this.doc,i)||Yn(i,i.height+a),s&&Ln(s,function(){s.curOp.forceUpdate=!0,gu(s,i,a),Dn(s,"lineWidgetChanged",s,e,C(i))}))},Nn(Ei);function gu(e,n,s){Sn(n)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&gs(e,s)}function yu(e,n,s,i){var a=new Ei(e,s,i),h=e.cm;return h&&a.noHScroll&&(h.display.alignWidgets=!0),Zi(e,n,"widget",function(m){var v=m.widgets||(m.widgets=[]);if(a.insertAt==null?v.push(a):v.splice(Math.min(v.length,Math.max(0,a.insertAt)),0,a),a.line=m,h&&!Nr(e,m)){var w=Sn(m)<e.scrollTop;Yn(m,m.height+Ui(a)),w&&gs(h,a.height),h.curOp.forceUpdate=!0}return!0}),h&&Dn(h,"lineWidgetAdded",h,a,typeof n=="number"?n:C(n)),a}var ln=0,di=function(e,n){this.lines=[],this.type=n,this.doc=e,this.id=++ln};di.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,n=e&&!e.curOp;if(n&&xs(e),mn(this,"clear")){var s=this.find();s&&Dn(this,"clear",s.from,s.to)}for(var i=null,a=null,h=0;h<this.lines.length;++h){var m=this.lines[h],v=Rs(m.markedSpans,this);e&&!this.collapsed?$i(e,C(m),"text"):e&&(v.to!=null&&(a=C(m)),v.from!=null&&(i=C(m))),m.markedSpans=no(m.markedSpans,v),v.from==null&&this.collapsed&&!Nr(this.doc,m)&&e&&Yn(m,ki(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var w=0;w<this.lines.length;++w){var k=Kt(this.lines[w]),z=Bi(k);z>e.display.maxLineLength&&(e.display.maxLine=k,e.display.maxLineLength=z,e.display.maxLineChanged=!0)}i!=null&&e&&this.collapsed&&sr(e,i,a+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&Fr(e.doc)),e&&Dn(e,"markerCleared",e,this,i,a),n&&Yr(e),this.parent&&this.parent.clear()}},di.prototype.find=function(e,n){e==null&&this.type=="bookmark"&&(e=1);for(var s,i,a=0;a<this.lines.length;++a){var h=this.lines[a],m=Rs(h.markedSpans,this);if(m.from!=null&&(s=de(n?h:C(h),m.from),e==-1))return s;if(m.to!=null&&(i=de(n?h:C(h),m.to),e==1))return i}return s&&{from:s,to:i}},di.prototype.changed=function(){var e=this,n=this.find(-1,!0),s=this,i=this.doc.cm;!n||!i||Ln(i,function(){var a=n.line,h=C(n.line),m=nl(i,h);if(m&&(rl(m),i.curOp.selectionChanged=i.curOp.forceUpdate=!0),i.curOp.updateMaxLine=!0,!Nr(s.doc,a)&&s.height!=null){var v=s.height;s.height=null;var w=Ui(s)-v;w&&Yn(a,a.height+w)}Dn(i,"markerChanged",i,e)})},di.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(!n.maybeHiddenMarkers||$e(n.maybeHiddenMarkers,this)==-1)&&(n.maybeUnhiddenMarkers||(n.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},di.prototype.detachLine=function(e){if(this.lines.splice($e(this.lines,e),1),!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(n.maybeHiddenMarkers||(n.maybeHiddenMarkers=[])).push(this)}},Nn(di);function Ts(e,n,s,i,a){if(i&&i.shared)return Sl(e,n,s,i,a);if(e.cm&&!e.cm.curOp)return pn(e.cm,Ts)(e,n,s,i,a);var h=new di(e,a),m=He(n,s);if(i&&Be(i,h,!1),m>0||m==0&&h.clearWhenEmpty!==!1)return h;if(h.replacedWith&&(h.collapsed=!0,h.widgetNode=ee("span",[h.replacedWith],"CodeMirror-widget"),i.handleMouseEvents||h.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(h.widgetNode.insertLeft=!0)),h.collapsed){if(cn(e,n.line,n,s,h)||n.line!=s.line&&cn(e,s.line,n,s,h))throw new Error("Inserting collapsed marker partially overlapping an existing one");As()}h.addToHistory&&To(e,{from:n,to:s,origin:"markText"},e.sel,NaN);var v=n.line,w=e.cm,k;if(e.iter(v,s.line+1,function(U){w&&h.collapsed&&!w.options.lineWrapping&&Kt(U)==w.display.maxLine&&(k=!0),h.collapsed&&v!=n.line&&Yn(U,0),Is(U,new jr(h,v==n.line?n.ch:null,v==s.line?s.ch:null),e.cm&&e.cm.curOp),++v}),h.collapsed&&e.iter(n.line,s.line+1,function(U){Nr(e,U)&&Yn(U,0)}),h.clearOnEnter&&rt(h,"beforeCursorEnter",function(){return h.clear()}),h.readOnly&&($r(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),h.collapsed&&(h.id=++ln,h.atomic=!0),w){if(k&&(w.curOp.updateMaxLine=!0),h.collapsed)sr(w,n.line,s.line+1);else if(h.className||h.startStyle||h.endStyle||h.css||h.attributes||h.title)for(var z=n.line;z<=s.line;z++)$i(w,z,"text");h.atomic&&Fr(w.doc),Dn(w,"markerAdded",w,h)}return h}var Xs=function(e,n){this.markers=e,this.primary=n;for(var s=0;s<e.length;++s)e[s].parent=this};Xs.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();Dn(this,"clear")}},Xs.prototype.find=function(e,n){return this.primary.find(e,n)},Nn(Xs);function Sl(e,n,s,i,a){i=Be(i),i.shared=!1;var h=[Ts(e,n,s,i,a)],m=h[0],v=i.widgetNode;return Pn(e,function(w){v&&(i.widgetNode=v.cloneNode(!0)),h.push(Ts(w,gt(w,n),gt(w,s),i,a));for(var k=0;k<w.linked.length;++k)if(w.linked[k].isParent)return;m=Qe(h)}),new Xs(h,m)}function _l(e){return e.findMarks(de(e.first,0),e.clipPos(de(e.lastLine())),function(n){return n.parent})}function Qs(e,n){for(var s=0;s<n.length;s++){var i=n[s],a=i.find(),h=e.clipPos(a.from),m=e.clipPos(a.to);if(He(h,m)){var v=Ts(e,h,m,i.primary,i.primary.type);i.markers.push(v),v.parent=i}}}function hn(e){for(var n=function(i){var a=e[i],h=[a.primary.doc];Pn(a.primary.doc,function(w){return h.push(w)});for(var m=0;m<a.markers.length;m++){var v=a.markers[m];$e(h,v.doc)==-1&&(v.parent=null,a.markers.splice(m--,1))}},s=0;s<e.length;s++)n(s)}var Hn=0,Ot=function(e,n,s,i,a){if(!(this instanceof Ot))return new Ot(e,n,s,i,a);s==null&&(s=0),Js.call(this,[new ci([new bi("",null)])]),this.first=s,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=s;var h=de(s,0);this.sel=zn(h),this.history=new _o(null),this.id=++Hn,this.modeOption=n,this.lineSep=i,this.direction=a=="rtl"?"rtl":"ltr",this.extend=!1,typeof e=="string"&&(e=this.splitLines(e)),gr(this,{from:h,to:h,text:e}),Wn(this,zn(h),_t)};Ot.prototype=he(Js.prototype,{constructor:Ot,iter:function(e,n,s){s?this.iterN(e-this.first,n-e,s):this.iterN(this.first,this.first+this.size,e)},insert:function(e,n){for(var s=0,i=0;i<n.length;++i)s+=n[i].height;this.insertInner(e-this.first,n,s)},remove:function(e,n){this.removeInner(e-this.first,n)},getValue:function(e){var n=ls(this,this.first,this.first+this.size);return e===!1?n:n.join(e||this.lineSeparator())},setValue:gn(function(e){var n=de(this.first,0),s=this.first+this.size-1;Ys(this,{from:n,to:de(s,Je(this,s).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&xo(this.cm,0,0),Wn(this,zn(n),_t)}),replaceRange:function(e,n,s,i){n=gt(this,n),s=s?gt(this,s):n,Vs(this,e,n,s,i)},getRange:function(e,n,s){var i=ri(this,gt(this,e),gt(this,n));return s===!1?i:s===""?i.join(""):i.join(s||this.lineSeparator())},getLine:function(e){var n=this.getLineHandle(e);return n&&n.text},getLineHandle:function(e){if(me(this,e))return Je(this,e)},getLineNumber:function(e){return C(e)},getLineHandleVisualStart:function(e){return typeof e=="number"&&(e=Je(this,e)),Kt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return gt(this,e)},getCursor:function(e){var n=this.sel.primary(),s;return e==null||e=="head"?s=n.head:e=="anchor"?s=n.anchor:e=="end"||e=="to"||e===!1?s=n.to():s=n.from(),s},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:gn(function(e,n,s){$s(this,gt(this,typeof e=="number"?de(e,n||0):e),null,s)}),setSelection:gn(function(e,n,s){$s(this,gt(this,e),gt(this,n||e),s)}),extendSelection:gn(function(e,n,s){No(this,gt(this,e),n&&gt(this,n),s)}),extendSelections:gn(function(e,n){Eo(this,eo(this,e),n)}),extendSelectionsBy:gn(function(e,n){var s=ut(this.sel.ranges,e);Eo(this,eo(this,s),n)}),setSelections:gn(function(e,n,s){if(e.length){for(var i=[],a=0;a<e.length;a++)i[a]=new At(gt(this,e[a].anchor),gt(this,e[a].head||e[a].anchor));n==null&&(n=Math.min(e.length-1,this.sel.primIndex)),Wn(this,Lr(this.cm,i,n),s)}}),addSelection:gn(function(e,n,s){var i=this.sel.ranges.slice(0);i.push(new At(gt(this,e),gt(this,n||e))),Wn(this,Lr(this.cm,i,i.length-1),s)}),getSelection:function(e){for(var n=this.sel.ranges,s,i=0;i<n.length;i++){var a=ri(this,n[i].from(),n[i].to());s=s?s.concat(a):a}return e===!1?s:s.join(e||this.lineSeparator())},getSelections:function(e){for(var n=[],s=this.sel.ranges,i=0;i<s.length;i++){var a=ri(this,s[i].from(),s[i].to());e!==!1&&(a=a.join(e||this.lineSeparator())),n[i]=a}return n},replaceSelection:function(e,n,s){for(var i=[],a=0;a<this.sel.ranges.length;a++)i[a]=e;this.replaceSelections(i,n,s||"+input")},replaceSelections:gn(function(e,n,s){for(var i=[],a=this.sel,h=0;h<a.ranges.length;h++){var m=a.ranges[h];i[h]={from:m.from(),to:m.to(),text:this.splitLines(e[h]),origin:s}}for(var v=n&&n!="end"&&Us(this,i,n),w=i.length-1;w>=0;w--)Ys(this,i[w]);v?bl(this,v):this.cm&&zs(this.cm)}),undo:gn(function(){li(this,"undo")}),redo:gn(function(){li(this,"redo")}),undoSelection:gn(function(){li(this,"undo",!0)}),redoSelection:gn(function(){li(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,n=0,s=0,i=0;i<e.done.length;i++)e.done[i].ranges||++n;for(var a=0;a<e.undone.length;a++)e.undone[a].ranges||++s;return{undo:n,redo:s}},clearHistory:function(){var e=this;this.history=new _o(this.history),Pn(this,function(n){return n.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Ks(this.history.done),undone:Ks(this.history.undone)}},setHistory:function(e){var n=this.history=new _o(this.history);n.done=Ks(e.done.slice(0),null,!0),n.undone=Ks(e.undone.slice(0),null,!0)},setGutterMarker:gn(function(e,n,s){return Zi(this,e,"gutter",function(i){var a=i.gutterMarkers||(i.gutterMarkers={});return a[n]=s,!s&&Ze(a)&&(i.gutterMarkers=null),!0})}),clearGutter:gn(function(e){var n=this;this.iter(function(s){s.gutterMarkers&&s.gutterMarkers[e]&&Zi(n,s,"gutter",function(){return s.gutterMarkers[e]=null,Ze(s.gutterMarkers)&&(s.gutterMarkers=null),!0})})}),lineInfo:function(e){var n;if(typeof e=="number"){if(!me(this,e)||(n=e,e=Je(this,e),!e))return null}else if(n=C(e),n==null)return null;return{line:n,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:gn(function(e,n,s){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var a=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass";if(!i[a])i[a]=s;else{if(oe(s).test(i[a]))return!1;i[a]+=" "+s}return!0})}),removeLineClass:gn(function(e,n,s){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var a=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass",h=i[a];if(h)if(s==null)i[a]=null;else{var m=h.match(oe(s));if(!m)return!1;var v=m.index+m[0].length;i[a]=h.slice(0,m.index)+(!m.index||v==h.length?"":" ")+h.slice(v)||null}else return!1;return!0})}),addLineWidget:gn(function(e,n,s){return yu(this,e,n,s)}),removeLineWidget:function(e){e.clear()},markText:function(e,n,s){return Ts(this,gt(this,e),gt(this,n),s,s&&s.type||"range")},setBookmark:function(e,n){var s={replacedWith:n&&(n.nodeType==null?n.widget:n),insertLeft:n&&n.insertLeft,clearWhenEmpty:!1,shared:n&&n.shared,handleMouseEvents:n&&n.handleMouseEvents};return e=gt(this,e),Ts(this,e,e,s,"bookmark")},findMarksAt:function(e){e=gt(this,e);var n=[],s=Je(this,e.line).markedSpans;if(s)for(var i=0;i<s.length;++i){var a=s[i];(a.from==null||a.from<=e.ch)&&(a.to==null||a.to>=e.ch)&&n.push(a.marker.parent||a.marker)}return n},findMarks:function(e,n,s){e=gt(this,e),n=gt(this,n);var i=[],a=e.line;return this.iter(e.line,n.line+1,function(h){var m=h.markedSpans;if(m)for(var v=0;v<m.length;v++){var w=m[v];!(w.to!=null&&a==e.line&&e.ch>=w.to||w.from==null&&a!=e.line||w.from!=null&&a==n.line&&w.from>=n.ch)&&(!s||s(w.marker))&&i.push(w.marker.parent||w.marker)}++a}),i},getAllMarks:function(){var e=[];return this.iter(function(n){var s=n.markedSpans;if(s)for(var i=0;i<s.length;++i)s[i].from!=null&&e.push(s[i].marker)}),e},posFromIndex:function(e){var n,s=this.first,i=this.lineSeparator().length;return this.iter(function(a){var h=a.text.length+i;if(h>e)return n=e,!0;e-=h,++s}),gt(this,de(s,n))},indexFromPos:function(e){e=gt(this,e);var n=e.ch;if(e.line<this.first||e.ch<0)return 0;var s=this.lineSeparator().length;return this.iter(this.first,e.line,function(i){n+=i.text.length+s}),n},copy:function(e){var n=new Ot(ls(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,n.sel=this.sel,n.extend=!1,e&&(n.history.undoDepth=this.history.undoDepth,n.setHistory(this.getHistory())),n},linkedDoc:function(e){e||(e={});var n=this.first,s=this.first+this.size;e.from!=null&&e.from>n&&(n=e.from),e.to!=null&&e.to<s&&(s=e.to);var i=new Ot(ls(this,n,s),e.mode||this.modeOption,n,this.lineSep,this.direction);return e.sharedHist&&(i.history=this.history),(this.linked||(this.linked=[])).push({doc:i,sharedHist:e.sharedHist}),i.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],Qs(i,_l(this)),i},unlinkDoc:function(e){if(e instanceof en&&(e=e.doc),this.linked)for(var n=0;n<this.linked.length;++n){var s=this.linked[n];if(s.doc==e){this.linked.splice(n,1),e.unlinkDoc(this),hn(_l(this));break}}if(e.history==this.history){var i=[e.id];Pn(e,function(a){return i.push(a.id)},!0),e.history=new _o(null),e.history.done=Ks(this.history.done,i),e.history.undone=Ks(this.history.undone,i)}},iterLinkedDocs:function(e){Pn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):Tr(e)},lineSeparator:function(){return this.lineSep||`
`},setDirection:gn(function(e){e!="rtl"&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(n){return n.order=null}),this.cm&&Nc(this.cm))})}),Ot.prototype.eachLine=Ot.prototype.iter;var Ao=0;function Ro(e){var n=this;if(Zn(n),!(qt(n,e)||qi(n.display,e))){bn(e),S&&(Ao=+new Date);var s=fs(n,e,!0),i=e.dataTransfer.files;if(!(!s||n.isReadOnly()))if(i&&i.length&&window.FileReader&&window.File)for(var a=i.length,h=Array(a),m=0,v=function(){++m==a&&pn(n,function(){s=gt(n.doc,s);var ne={from:s,to:s,text:n.doc.splitLines(h.filter(function(ge){return ge!=null}).join(n.doc.lineSeparator())),origin:"paste"};Ys(n.doc,ne),bl(n.doc,zn(gt(n.doc,s),gt(n.doc,Fn(ne))))})()},w=function(ne,ge){if(n.options.allowDropFileTypes&&$e(n.options.allowDropFileTypes,ne.type)==-1){v();return}var be=new FileReader;be.onerror=function(){return v()},be.onload=function(){var Ae=be.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(Ae)){v();return}h[ge]=Ae,v()},be.readAsText(ne)},k=0;k<i.length;k++)w(i[k],k);else{if(n.state.draggingText&&n.doc.sel.contains(s)>-1){n.state.draggingText(e),setTimeout(function(){return n.display.input.focus()},20);return}try{var z=e.dataTransfer.getData("Text");if(z){var U;if(n.state.draggingText&&!n.state.draggingText.copy&&(U=n.listSelections()),Ra(n.doc,zn(s,s)),U)for(var se=0;se<U.length;++se)Vs(n.doc,"",U[se].anchor,U[se].head,"drag");n.replaceSelection(z,"around","paste"),n.display.input.focus()}}catch{}}}}function Io(e,n){if(S&&(!e.state.draggingText||+new Date-Ao<100)){pr(n);return}if(!(qt(e,n)||qi(e.display,n))&&(n.dataTransfer.setData("Text",e.getSelection()),n.dataTransfer.effectAllowed="copyMove",n.dataTransfer.setDragImage&&!G)){var s=E("img",null,null,"position: fixed; left: 0; top: 0;");s.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",D&&(s.width=s.height=1,e.display.wrapper.appendChild(s),s._top=s.offsetTop),n.dataTransfer.setDragImage(s,0,0),D&&s.parentNode.removeChild(s)}}function op(e,n){var s=fs(e,n);if(s){var i=document.createDocumentFragment();go(e,s,i),e.display.dragCursor||(e.display.dragCursor=E("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),ve(e.display.dragCursor,i)}}function Zn(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Cl(e){if(document.getElementsByClassName){for(var n=document.getElementsByClassName("CodeMirror"),s=[],i=0;i<n.length;i++){var a=n[i].CodeMirror;a&&s.push(a)}s.length&&s[0].operation(function(){for(var h=0;h<s.length;h++)e(s[h])})}}var Tl=!1;function vu(){Tl||(Li(),Tl=!0)}function Li(){var e;rt(window,"resize",function(){e==null&&(e=setTimeout(function(){e=null,Cl(Jr)},100))}),rt(window,"blur",function(){return Cl(Wt)})}function Jr(e){var n=e.display;n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.scrollbarsClipped=!1,e.setSize()}for(var Xr={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Zs=0;Zs<10;Zs++)Xr[Zs+48]=Xr[Zs+96]=String(Zs);for(var Da=65;Da<=90;Da++)Xr[Da]=String.fromCharCode(Da);for(var za=1;za<=12;za++)Xr[za+111]=Xr[za+63235]="F"+za;var Pi={};Pi.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Pi.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Pi.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Pi.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Pi.default=Y?Pi.macDefault:Pi.pcDefault;function Ac(e){var n=e.split(/-(?!$)/);e=n[n.length-1];for(var s,i,a,h,m=0;m<n.length-1;m++){var v=n[m];if(/^(cmd|meta|m)$/i.test(v))h=!0;else if(/^a(lt)?$/i.test(v))s=!0;else if(/^(c|ctrl|control)$/i.test(v))i=!0;else if(/^s(hift)?$/i.test(v))a=!0;else throw new Error("Unrecognized modifier name: "+v)}return s&&(e="Alt-"+e),i&&(e="Ctrl-"+e),h&&(e="Cmd-"+e),a&&(e="Shift-"+e),e}function Rc(e){var n={};for(var s in e)if(e.hasOwnProperty(s)){var i=e[s];if(/^(name|fallthrough|(de|at)tach)$/.test(s))continue;if(i=="..."){delete e[s];continue}for(var a=ut(s.split(" "),Ac),h=0;h<a.length;h++){var m=void 0,v=void 0;h==a.length-1?(v=a.join(" "),m=i):(v=a.slice(0,h+1).join(" "),m="...");var w=n[v];if(!w)n[v]=m;else if(w!=m)throw new Error("Inconsistent bindings for "+v)}delete e[s]}for(var k in n)e[k]=n[k];return e}function ea(e,n,s,i){n=js(n);var a=n.call?n.call(e,i):n[e];if(a===!1)return"nothing";if(a==="...")return"multi";if(a!=null&&s(a))return"handled";if(n.fallthrough){if(Object.prototype.toString.call(n.fallthrough)!="[object Array]")return ea(e,n.fallthrough,s,i);for(var h=0;h<n.fallthrough.length;h++){var m=ea(e,n.fallthrough[h],s,i);if(m)return m}}}function xu(e){var n=typeof e=="string"?e:Xr[e.keyCode];return n=="Ctrl"||n=="Alt"||n=="Shift"||n=="Mod"}function bu(e,n,s){var i=e;return n.altKey&&i!="Alt"&&(e="Alt-"+e),(ze?n.metaKey:n.ctrlKey)&&i!="Ctrl"&&(e="Ctrl-"+e),(ze?n.ctrlKey:n.metaKey)&&i!="Mod"&&(e="Cmd-"+e),!s&&n.shiftKey&&i!="Shift"&&(e="Shift-"+e),e}function wu(e,n){if(D&&e.keyCode==34&&e.char)return!1;var s=Xr[e.keyCode];return s==null||e.altGraphKey?!1:(e.keyCode==3&&e.code&&(s=e.code),bu(s,e,n))}function js(e){return typeof e=="string"?Pi[e]:e}function ta(e,n){for(var s=e.doc.sel.ranges,i=[],a=0;a<s.length;a++){for(var h=n(s[a]);i.length&&He(h.from,Qe(i).to)<=0;){var m=i.pop();if(He(m.from,h.from)<0){h.from=m.from;break}}i.push(h)}Ln(e,function(){for(var v=i.length-1;v>=0;v--)Vs(e.doc,"",i[v].from,i[v].to,"+delete");zs(e)})}function Fa(e,n,s){var i=Xt(e.text,n+s,s);return i<0||i>e.text.length?null:i}function Wa(e,n,s){var i=Fa(e,n.ch,s);return i==null?null:new de(n.line,i,s<0?"after":"before")}function jl(e,n,s,i,a){if(e){n.doc.direction=="rtl"&&(a=-a);var h=bt(s,n.doc.direction);if(h){var m=a<0?Qe(h):h[0],v=a<0==(m.level==1),w=v?"after":"before",k;if(m.level>0||n.doc.direction=="rtl"){var z=wi(n,s);k=a<0?s.text.length-1:0;var U=Er(n,z,k).top;k=nr(function(se){return Er(n,z,se).top==U},a<0==(m.level==1)?m.from:m.to-1,k),w=="before"&&(k=Fa(s,k,1))}else k=a<0?m.to:m.from;return new de(i,k,w)}}return new de(i,a<0?s.text.length:0,a<0?"before":"after")}function ku(e,n,s,i){var a=bt(n,e.doc.direction);if(!a)return Wa(n,s,i);s.ch>=n.text.length?(s.ch=n.text.length,s.sticky="before"):s.ch<=0&&(s.ch=0,s.sticky="after");var h=Br(a,s.ch,s.sticky),m=a[h];if(e.doc.direction=="ltr"&&m.level%2==0&&(i>0?m.to>s.ch:m.from<s.ch))return Wa(n,s,i);var v=function(Ee,Fe){return Fa(n,Ee instanceof de?Ee.ch:Ee,Fe)},w,k=function(Ee){return e.options.lineWrapping?(w=w||wi(e,n),ou(e,n,w,Ee)):{begin:0,end:n.text.length}},z=k(s.sticky=="before"?v(s,-1):s.ch);if(e.doc.direction=="rtl"||m.level==1){var U=m.level==1==i<0,se=v(s,U?1:-1);if(se!=null&&(U?se<=m.to&&se<=z.end:se>=m.from&&se>=z.begin)){var ne=U?"before":"after";return new de(s.line,se,ne)}}var ge=function(Ee,Fe,De){for(var Ge=function(Et,Bn){return Bn?new de(s.line,v(Et,1),"before"):new de(s.line,Et,"after")};Ee>=0&&Ee<a.length;Ee+=Fe){var ot=a[Ee],Ve=Fe>0==(ot.level!=1),St=Ve?De.begin:v(De.end,-1);if(ot.from<=St&&St<ot.to||(St=Ve?ot.from:v(ot.to,-1),De.begin<=St&&St<De.end))return Ge(St,Ve)}},be=ge(h+i,i,z);if(be)return be;var Ae=i>0?z.end:v(z.begin,-1);return Ae!=null&&!(i>0&&Ae==n.text.length)&&(be=ge(i>0?0:a.length-1,i,k(Ae)),be)?be:null}var Ha={selectAll:Qi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),_t)},killLine:function(e){return ta(e,function(n){if(n.empty()){var s=Je(e.doc,n.head.line).text.length;return n.head.ch==s&&n.head.line<e.lastLine()?{from:n.head,to:de(n.head.line+1,0)}:{from:n.head,to:de(n.head.line,s)}}else return{from:n.from(),to:n.to()}})},deleteLine:function(e){return ta(e,function(n){return{from:de(n.from().line,0),to:gt(e.doc,de(n.to().line+1,0))}})},delLineLeft:function(e){return ta(e,function(n){return{from:de(n.from().line,0),to:n.from()}})},delWrappedLineLeft:function(e){return ta(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return{from:i,to:n.from()}})},delWrappedLineRight:function(e){return ta(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div");return{from:n.from(),to:i}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(de(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(de(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(n){return Su(e,n.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(n){return _u(e,n.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(n){return Ic(e,n.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div")},tt)},goLineLeft:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:0,top:s},"div")},tt)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return i.ch<e.getLine(i.line).search(/\S/)?_u(e,n.head):i},tt)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("	")},insertSoftTab:function(e){for(var n=[],s=e.listSelections(),i=e.options.tabSize,a=0;a<s.length;a++){var h=s[a].from(),m=Ke(e.getLine(h.line),h.ch,i);n.push(yt(i-m%i))}e.replaceSelections(n)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=[],i=0;i<n.length;i++)if(n[i].empty()){var a=n[i].head,h=Je(e.doc,a.line).text;if(h){if(a.ch==h.length&&(a=new de(a.line,a.ch-1)),a.ch>0)a=new de(a.line,a.ch+1),e.replaceRange(h.charAt(a.ch-1)+h.charAt(a.ch-2),de(a.line,a.ch-2),a,"+transpose");else if(a.line>e.doc.first){var m=Je(e.doc,a.line-1).text;m&&(a=new de(a.line,1),e.replaceRange(h.charAt(0)+e.doc.lineSeparator()+m.charAt(m.length-1),de(a.line-1,m.length-1),a,"+transpose"))}}s.push(new At(a,a))}e.setSelections(s)})},newlineAndIndent:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=n.length-1;s>=0;s--)e.replaceRange(e.doc.lineSeparator(),n[s].anchor,n[s].head,"+input");n=e.listSelections();for(var i=0;i<n.length;i++)e.indentLine(n[i].from().line,null,!0);zs(e)})},openLine:function(e){return e.replaceSelection(`
`,"start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function Su(e,n){var s=Je(e.doc,n),i=Kt(s);return i!=s&&(n=C(i)),jl(!0,e,i,n,1)}function Ic(e,n){var s=Je(e.doc,n),i=hr(s);return i!=s&&(n=C(i)),jl(!0,e,s,n,-1)}function _u(e,n){var s=Su(e,n.line),i=Je(e.doc,s.line),a=bt(i,e.doc.direction);if(!a||a[0].level==0){var h=Math.max(s.ch,i.text.search(/\S/)),m=n.line==s.line&&n.ch<=h&&n.ch;return de(s.line,m?0:h,s.sticky)}return s}function Ba(e,n,s){if(typeof n=="string"&&(n=Ha[n],!n))return!1;e.display.input.ensurePolled();var i=e.display.shift,a=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),s&&(e.display.shift=!1),a=n(e)!=Yt}finally{e.display.shift=i,e.state.suppressEdits=!1}return a}function Oc(e,n,s){for(var i=0;i<e.state.keyMaps.length;i++){var a=ea(n,e.state.keyMaps[i],s,e);if(a)return a}return e.options.extraKeys&&ea(n,e.options.extraKeys,s,e)||ea(n,e.options.keyMap,s,e)}var Mc=new et;function Ua(e,n,s,i){var a=e.state.keySeq;if(a){if(xu(n))return"handled";if(/\'$/.test(n)?e.state.keySeq=null:Mc.set(50,function(){e.state.keySeq==a&&(e.state.keySeq=null,e.display.input.reset())}),Dc(e,a+" "+n,s,i))return!0}return Dc(e,n,s,i)}function Dc(e,n,s,i){var a=Oc(e,n,i);return a=="multi"&&(e.state.keySeq=n),a=="handled"&&Dn(e,"keyHandled",e,n,s),(a=="handled"||a=="multi")&&(bn(s),Ds(e)),!!a}function Cu(e,n){var s=wu(n,!0);return s?n.shiftKey&&!e.state.keySeq?Ua(e,"Shift-"+s,n,function(i){return Ba(e,i,!0)})||Ua(e,s,n,function(i){if(typeof i=="string"?/^go[A-Z]/.test(i):i.motion)return Ba(e,i)}):Ua(e,s,n,function(i){return Ba(e,i)}):!1}function lp(e,n,s){return Ua(e,"'"+s+"'",n,function(i){return Ba(e,i,!0)})}var Tu=null;function ju(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&(n.curOp.focus=L(Ie(n)),!qt(n,e))){S&&j<11&&e.keyCode==27&&(e.returnValue=!1);var s=e.keyCode;n.display.shift=s==16||e.shiftKey;var i=Cu(n,e);D&&(Tu=i?s:null,!i&&s==88&&!ss&&(Y?e.metaKey:e.ctrlKey)&&n.replaceSelection("",null,"cut")),x&&!Y&&!i&&s==46&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),s==18&&!/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className)&&zc(n)}}function zc(e){var n=e.display.lineDiv;$(n,"CodeMirror-crosshair");function s(i){(i.keyCode==18||!i.altKey)&&(Ce(n,"CodeMirror-crosshair"),tn(document,"keyup",s),tn(document,"mouseover",s))}rt(document,"keyup",s),rt(document,"mouseover",s)}function Nu(e){e.keyCode==16&&(this.doc.sel.shift=!1),qt(this,e)}function Oo(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&!(qi(n.display,e)||qt(n,e)||e.ctrlKey&&!e.altKey||Y&&e.metaKey)){var s=e.keyCode,i=e.charCode;if(D&&s==Tu){Tu=null,bn(e);return}if(!(D&&(!e.which||e.which<10)&&Cu(n,e))){var a=String.fromCharCode(i??s);a!="\b"&&(lp(n,e,a)||n.display.input.onKeyPress(e))}}}var up=400,Eu=function(e,n,s){this.time=e,this.pos=n,this.button=s};Eu.prototype.compare=function(e,n,s){return this.time+up>e&&He(n,this.pos)==0&&s==this.button};var Mo,yr;function Lu(e,n){var s=+new Date;return yr&&yr.compare(s,e,n)?(Mo=yr=null,"triple"):Mo&&Mo.compare(s,e,n)?(yr=new Eu(s,e,n),Mo=null,"double"):(Mo=new Eu(s,e,n),yr=null,"single")}function Do(e){var n=this,s=n.display;if(!(qt(n,e)||s.activeTouch&&s.input.supportsTouch())){if(s.input.ensurePolled(),s.shift=e.shiftKey,qi(s,e)){N||(s.scroller.draggable=!1,setTimeout(function(){return s.scroller.draggable=!0},100));return}if(!Nl(n,e)){var i=fs(n,e),a=En(e),h=i?Lu(i,a):"single";Oe(n).focus(),a==1&&n.state.selectingText&&n.state.selectingText(e),!(i&&Fc(n,a,i,h,e))&&(a==1?i?Hc(n,i,h,e):fi(e)==s.scroller&&bn(e):a==2?(i&&No(n.doc,i),setTimeout(function(){return s.input.focus()},20)):a==3&&(_e?n.display.input.onContextMenu(e):dl(n)))}}}function Fc(e,n,s,i,a){var h="Click";return i=="double"?h="Double"+h:i=="triple"&&(h="Triple"+h),h=(n==1?"Left":n==2?"Middle":"Right")+h,Ua(e,bu(h,a),a,function(m){if(typeof m=="string"&&(m=Ha[m]),!m)return!1;var v=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),v=m(e,s)!=Yt}finally{e.state.suppressEdits=!1}return v})}function Wc(e,n,s){var i=e.getOption("configureMouse"),a=i?i(e,n,s):{};if(a.unit==null){var h=pe?s.shiftKey&&s.metaKey:s.altKey;a.unit=h?"rectangle":n=="single"?"char":n=="double"?"word":"line"}return(a.extend==null||e.doc.extend)&&(a.extend=e.doc.extend||s.shiftKey),a.addNew==null&&(a.addNew=Y?s.metaKey:s.ctrlKey),a.moveOnDrag==null&&(a.moveOnDrag=!(Y?s.altKey:s.ctrlKey)),a}function Hc(e,n,s,i){S?setTimeout(we(Sc,e),0):e.curOp.focus=L(Ie(e));var a=Wc(e,s,i),h=e.doc.sel,m;e.options.dragDrop&&is&&!e.isReadOnly()&&s=="single"&&(m=h.contains(n))>-1&&(He((m=h.ranges[m]).from(),n)<0||n.xRel>0)&&(He(m.to(),n)>0||n.xRel<0)?Pu(e,i,n,a):Au(e,i,n,a)}function Pu(e,n,s,i){var a=e.display,h=!1,m=pn(e,function(k){N&&(a.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:dl(e)),tn(a.wrapper.ownerDocument,"mouseup",m),tn(a.wrapper.ownerDocument,"mousemove",v),tn(a.scroller,"dragstart",w),tn(a.scroller,"drop",m),h||(bn(k),i.addNew||No(e.doc,s,null,null,i.extend),N&&!G||S&&j==9?setTimeout(function(){a.wrapper.ownerDocument.body.focus({preventScroll:!0}),a.input.focus()},20):a.input.focus())}),v=function(k){h=h||Math.abs(n.clientX-k.clientX)+Math.abs(n.clientY-k.clientY)>=10},w=function(){return h=!0};N&&(a.scroller.draggable=!0),e.state.draggingText=m,m.copy=!i.moveOnDrag,rt(a.wrapper.ownerDocument,"mouseup",m),rt(a.wrapper.ownerDocument,"mousemove",v),rt(a.scroller,"dragstart",w),rt(a.scroller,"drop",m),e.state.delayingBlurEvent=!0,setTimeout(function(){return a.input.focus()},20),a.scroller.dragDrop&&a.scroller.dragDrop()}function na(e,n,s){if(s=="char")return new At(n,n);if(s=="word")return e.findWordAt(n);if(s=="line")return new At(de(n.line,0),gt(e.doc,de(n.line+1,0)));var i=s(e,n);return new At(i.from,i.to)}function Au(e,n,s,i){S&&dl(e);var a=e.display,h=e.doc;bn(n);var m,v,w=h.sel,k=w.ranges;if(i.addNew&&!i.extend?(v=h.sel.contains(s),v>-1?m=k[v]:m=new At(s,s)):(m=h.sel.primary(),v=h.sel.primIndex),i.unit=="rectangle")i.addNew||(m=new At(s,s)),s=fs(e,n,!0,!0),v=-1;else{var z=na(e,s,i.unit);i.extend?m=Ss(m,z.anchor,z.head,i.extend):m=z}i.addNew?v==-1?(v=k.length,Wn(h,Lr(e,k.concat([m]),v),{scroll:!1,origin:"*mouse"})):k.length>1&&k[v].empty()&&i.unit=="char"&&!i.extend?(Wn(h,Lr(e,k.slice(0,v).concat(k.slice(v+1)),0),{scroll:!1,origin:"*mouse"}),w=h.sel):Aa(h,v,m,xt):(v=0,Wn(h,new Xn([m],0),xt),w=h.sel);var U=s;function se(De){if(He(U,De)!=0)if(U=De,i.unit=="rectangle"){for(var Ge=[],ot=e.options.tabSize,Ve=Ke(Je(h,s.line).text,s.ch,ot),St=Ke(Je(h,De.line).text,De.ch,ot),Et=Math.min(Ve,St),Bn=Math.max(Ve,St),sn=Math.min(s.line,De.line),xr=Math.min(e.lastLine(),Math.max(s.line,De.line));sn<=xr;sn++){var lr=Je(h,sn).text,yn=Ue(lr,Et,ot);Et==Bn?Ge.push(new At(de(sn,yn),de(sn,yn))):lr.length>yn&&Ge.push(new At(de(sn,yn),de(sn,Ue(lr,Bn,ot))))}Ge.length||Ge.push(new At(s,s)),Wn(h,Lr(e,w.ranges.slice(0,v).concat(Ge),v),{origin:"*mouse",scroll:!1}),e.scrollIntoView(De)}else{var br=m,Tn=na(e,De,i.unit),vn=br.anchor,Dt;He(Tn.anchor,vn)>0?(Dt=Tn.head,vn=Kr(br.from(),Tn.anchor)):(Dt=Tn.anchor,vn=kn(br.to(),Tn.head));var dt=w.ranges.slice(0);dt[v]=Ru(e,new At(gt(h,vn),Dt)),Wn(h,Lr(e,dt,v),xt)}}var ne=a.wrapper.getBoundingClientRect(),ge=0;function be(De){var Ge=++ge,ot=fs(e,De,!0,i.unit=="rectangle");if(ot)if(He(ot,U)!=0){e.curOp.focus=L(Ie(e)),se(ot);var Ve=ms(a,h);(ot.line>=Ve.to||ot.line<Ve.from)&&setTimeout(pn(e,function(){ge==Ge&&be(De)}),150)}else{var St=De.clientY<ne.top?-20:De.clientY>ne.bottom?20:0;St&&setTimeout(pn(e,function(){ge==Ge&&(a.scroller.scrollTop+=St,be(De))}),50)}}function Ae(De){e.state.selectingText=!1,ge=1/0,De&&(bn(De),a.input.focus()),tn(a.wrapper.ownerDocument,"mousemove",Ee),tn(a.wrapper.ownerDocument,"mouseup",Fe),h.history.lastSelOrigin=null}var Ee=pn(e,function(De){De.buttons===0||!En(De)?Ae(De):be(De)}),Fe=pn(e,Ae);e.state.selectingText=Fe,rt(a.wrapper.ownerDocument,"mousemove",Ee),rt(a.wrapper.ownerDocument,"mouseup",Fe)}function Ru(e,n){var s=n.anchor,i=n.head,a=Je(e.doc,s.line);if(He(s,i)==0&&s.sticky==i.sticky)return n;var h=bt(a);if(!h)return n;var m=Br(h,s.ch,s.sticky),v=h[m];if(v.from!=s.ch&&v.to!=s.ch)return n;var w=m+(v.from==s.ch==(v.level!=1)?0:1);if(w==0||w==h.length)return n;var k;if(i.line!=s.line)k=(i.line-s.line)*(e.doc.direction=="ltr"?1:-1)>0;else{var z=Br(h,i.ch,i.sticky),U=z-m||(i.ch-s.ch)*(v.level==1?-1:1);z==w-1||z==w?k=U<0:k=U>0}var se=h[w+(k?-1:0)],ne=k==(se.level==1),ge=ne?se.from:se.to,be=ne?"after":"before";return s.ch==ge&&s.sticky==be?n:new At(new de(s.line,ge,be),i)}function Bc(e,n,s,i){var a,h;if(n.touches)a=n.touches[0].clientX,h=n.touches[0].clientY;else try{a=n.clientX,h=n.clientY}catch{return!1}if(a>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;i&&bn(n);var m=e.display,v=m.lineDiv.getBoundingClientRect();if(h>v.bottom||!mn(e,s))return In(n);h-=v.top-m.viewOffset;for(var w=0;w<e.display.gutterSpecs.length;++w){var k=m.gutters.childNodes[w];if(k&&k.getBoundingClientRect().right>=a){var z=B(e.doc,h),U=e.display.gutterSpecs[w];return It(e,s,e,z,U.className,n),In(n)}}}function Nl(e,n){return Bc(e,n,"gutterClick",!0)}function Iu(e,n){qi(e.display,n)||Uc(e,n)||qt(e,n,"contextmenu")||_e||e.display.input.onContextMenu(n)}function Uc(e,n){return mn(e,"gutterContextMenu")?Bc(e,n,"gutterContextMenu",!1):!1}function Ou(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),xa(e)}var ra={toString:function(){return"CodeMirror.Init"}},qc={},er={};function vr(e){var n=e.optionHandlers;function s(i,a,h,m){e.defaults[i]=a,h&&(n[i]=m?function(v,w,k){k!=ra&&h(v,w,k)}:h)}e.defineOption=s,e.Init=ra,s("value","",function(i,a){return i.setValue(a)},!0),s("mode",null,function(i,a){i.doc.modeOption=a,gl(i)},!0),s("indentUnit",2,gl,!0),s("indentWithTabs",!1),s("smartIndent",!0),s("tabSize",4,function(i){qs(i),xa(i),sr(i)},!0),s("lineSeparator",null,function(i,a){if(i.doc.lineSep=a,!!a){var h=[],m=i.doc.first;i.doc.iter(function(w){for(var k=0;;){var z=w.text.indexOf(a,k);if(z==-1)break;k=z+a.length,h.push(de(m,z))}m++});for(var v=h.length-1;v>=0;v--)Vs(i.doc,a,h[v],de(h[v].line,h[v].ch+a.length))}}),s("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,function(i,a,h){i.state.specialChars=new RegExp(a.source+(a.test("	")?"":"|	"),"g"),h!=ra&&i.refresh()}),s("specialCharPlaceholder",Bd,function(i){return i.refresh()},!0),s("electricChars",!0),s("inputStyle",H?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),s("spellcheck",!1,function(i,a){return i.getInputField().spellcheck=a},!0),s("autocorrect",!1,function(i,a){return i.getInputField().autocorrect=a},!0),s("autocapitalize",!1,function(i,a){return i.getInputField().autocapitalize=a},!0),s("rtlMoveVisually",!V),s("wholeLineUpdateBefore",!0),s("theme","default",function(i){Ou(i),zr(i)},!0),s("keyMap","default",function(i,a,h){var m=js(a),v=h!=ra&&js(h);v&&v.detach&&v.detach(i,m),m.attach&&m.attach(i,v||null)}),s("extraKeys",null),s("configureMouse",null),s("lineWrapping",!1,$c,!0),s("gutters",[],function(i,a){i.display.gutterSpecs=Na(a,i.options.lineNumbers),zr(i)},!0),s("fixedGutter",!0,function(i,a){i.display.gutters.style.left=a?ka(i.display)+"px":"0",i.refresh()},!0),s("coverGutterNextToScrollbar",!1,function(i){return Ws(i)},!0),s("scrollbarStyle","native",function(i){fl(i),Ws(i),i.display.scrollbars.setScrollTop(i.doc.scrollTop),i.display.scrollbars.setScrollLeft(i.doc.scrollLeft)},!0),s("lineNumbers",!1,function(i,a){i.display.gutterSpecs=Na(i.options.gutters,a),zr(i)},!0),s("firstLineNumber",1,zr,!0),s("lineNumberFormatter",function(i){return i},zr,!0),s("showCursorWhenSelecting",!1,Gr,!0),s("resetSelectionOnContextMenu",!0),s("lineWiseCopyCut",!0),s("pasteLinesPerSelection",!0),s("selectionsMayTouch",!1),s("readOnly",!1,function(i,a){a=="nocursor"&&(Wt(i),i.display.input.blur()),i.display.input.readOnlyChanged(a)}),s("screenReaderLabel",null,function(i,a){a=a===""?null:a,i.display.input.screenReaderLabelChanged(a)}),s("disableInput",!1,function(i,a){a||i.display.input.reset()},!0),s("dragDrop",!0,Kc),s("allowDropFileTypes",null),s("cursorBlinkRate",530),s("cursorScrollMargin",0),s("cursorHeight",1,Gr,!0),s("singleCursorHeightPerLine",!0,Gr,!0),s("workTime",100),s("workDelay",100),s("flattenSpans",!0,qs,!0),s("addModeClass",!1,qs,!0),s("pollInterval",100),s("undoDepth",200,function(i,a){return i.doc.history.undoDepth=a}),s("historyEventDelay",1250),s("viewportMargin",10,function(i){return i.refresh()},!0),s("maxHighlightLength",1e4,qs,!0),s("moveInputWithCursor",!0,function(i,a){a||i.display.input.resetPosition()}),s("tabindex",null,function(i,a){return i.display.input.getField().tabIndex=a||""}),s("autofocus",null),s("direction","ltr",function(i,a){return i.doc.setDirection(a)},!0),s("phrases",null)}function Kc(e,n,s){var i=s&&s!=ra;if(!n!=!i){var a=e.display.dragFunctions,h=n?rt:tn;h(e.display.scroller,"dragstart",a.start),h(e.display.scroller,"dragenter",a.enter),h(e.display.scroller,"dragover",a.over),h(e.display.scroller,"dragleave",a.leave),h(e.display.scroller,"drop",a.drop)}}function $c(e){e.options.lineWrapping?($(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Ce(e.display.wrapper,"CodeMirror-wrap"),so(e)),fo(e),sr(e),xa(e),setTimeout(function(){return Ws(e)},100)}function en(e,n){var s=this;if(!(this instanceof en))return new en(e,n);this.options=n=n?Be(n):{},Be(qc,n,!1);var i=n.value;typeof i=="string"?i=new Ot(i,n.mode,null,n.lineSeparator,n.direction):n.mode&&(i.modeOption=n.mode),this.doc=i;var a=new en.inputStyles[n.inputStyle](this),h=this.display=new ml(e,i,a,n);h.wrapper.CodeMirror=this,Ou(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),fl(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new et,keySeq:null,specialChars:null},n.autofocus&&!H&&h.input.focus(),S&&j<11&&setTimeout(function(){return s.display.input.reset(!0)},20),Gc(this),vu(),xs(this),this.curOp.forceUpdate=!0,rn(this,i),n.autofocus&&!H||this.hasFocus()?setTimeout(function(){s.hasFocus()&&!s.state.focused&&pl(s)},20):Wt(this);for(var m in er)er.hasOwnProperty(m)&&er[m](this,n[m],ra);pu(this),n.finishInit&&n.finishInit(this);for(var v=0;v<El.length;++v)El[v](this);Yr(this),N&&n.lineWrapping&&getComputedStyle(h.lineDiv).textRendering=="optimizelegibility"&&(h.lineDiv.style.textRendering="auto")}en.defaults=qc,en.optionHandlers=er;function Gc(e){var n=e.display;rt(n.scroller,"mousedown",pn(e,Do)),S&&j<11?rt(n.scroller,"dblclick",pn(e,function(w){if(!qt(e,w)){var k=fs(e,w);if(!(!k||Nl(e,w)||qi(e.display,w))){bn(w);var z=e.findWordAt(k);No(e.doc,z.anchor,z.head)}}})):rt(n.scroller,"dblclick",function(w){return qt(e,w)||bn(w)}),rt(n.scroller,"contextmenu",function(w){return Iu(e,w)}),rt(n.input.getField(),"contextmenu",function(w){n.scroller.contains(w.target)||Iu(e,w)});var s,i={end:0};function a(){n.activeTouch&&(s=setTimeout(function(){return n.activeTouch=null},1e3),i=n.activeTouch,i.end=+new Date)}function h(w){if(w.touches.length!=1)return!1;var k=w.touches[0];return k.radiusX<=1&&k.radiusY<=1}function m(w,k){if(k.left==null)return!0;var z=k.left-w.left,U=k.top-w.top;return z*z+U*U>400}rt(n.scroller,"touchstart",function(w){if(!qt(e,w)&&!h(w)&&!Nl(e,w)){n.input.ensurePolled(),clearTimeout(s);var k=+new Date;n.activeTouch={start:k,moved:!1,prev:k-i.end<=300?i:null},w.touches.length==1&&(n.activeTouch.left=w.touches[0].pageX,n.activeTouch.top=w.touches[0].pageY)}}),rt(n.scroller,"touchmove",function(){n.activeTouch&&(n.activeTouch.moved=!0)}),rt(n.scroller,"touchend",function(w){var k=n.activeTouch;if(k&&!qi(n,w)&&k.left!=null&&!k.moved&&new Date-k.start<300){var z=e.coordsChar(n.activeTouch,"page"),U;!k.prev||m(k,k.prev)?U=new At(z,z):!k.prev.prev||m(k,k.prev.prev)?U=e.findWordAt(z):U=new At(de(z.line,0),gt(e.doc,de(z.line+1,0))),e.setSelection(U.anchor,U.head),e.focus(),bn(w)}a()}),rt(n.scroller,"touchcancel",a),rt(n.scroller,"scroll",function(){n.scroller.clientHeight&&(ys(e,n.scroller.scrollTop),Yi(e,n.scroller.scrollLeft,!0),It(e,"scroll",e))}),rt(n.scroller,"mousewheel",function(w){return Bs(e,w)}),rt(n.scroller,"DOMMouseScroll",function(w){return Bs(e,w)}),rt(n.wrapper,"scroll",function(){return n.wrapper.scrollTop=n.wrapper.scrollLeft=0}),n.dragFunctions={enter:function(w){qt(e,w)||pr(w)},over:function(w){qt(e,w)||(op(e,w),pr(w))},start:function(w){return Io(e,w)},drop:pn(e,Ro),leave:function(w){qt(e,w)||Zn(e)}};var v=n.input.getField();rt(v,"keyup",function(w){return Nu.call(e,w)}),rt(v,"keydown",pn(e,ju)),rt(v,"keypress",pn(e,Oo)),rt(v,"focus",function(w){return pl(e,w)}),rt(v,"blur",function(w){return Wt(e,w)})}var El=[];en.defineInitHook=function(e){return El.push(e)};function ia(e,n,s,i){var a=e.doc,h;s==null&&(s="add"),s=="smart"&&(a.mode.indent?h=Nt(e,n).state:s="prev");var m=e.options.tabSize,v=Je(a,n),w=Ke(v.text,null,m);v.stateAfter&&(v.stateAfter=null);var k=v.text.match(/^\s*/)[0],z;if(!i&&!/\S/.test(v.text))z=0,s="not";else if(s=="smart"&&(z=a.mode.indent(h,v.text.slice(k.length),v.text),z==Yt||z>150)){if(!i)return;s="prev"}s=="prev"?n>a.first?z=Ke(Je(a,n-1).text,null,m):z=0:s=="add"?z=w+e.options.indentUnit:s=="subtract"?z=w-e.options.indentUnit:typeof s=="number"&&(z=w+s),z=Math.max(0,z);var U="",se=0;if(e.options.indentWithTabs)for(var ne=Math.floor(z/m);ne;--ne)se+=m,U+="	";if(se<z&&(U+=yt(z-se)),U!=k)return Vs(a,U,de(n,0),de(n,k.length),"+input"),v.stateAfter=null,!0;for(var ge=0;ge<a.sel.ranges.length;ge++){var be=a.sel.ranges[ge];if(be.head.line==n&&be.head.ch<k.length){var Ae=de(n,k.length);Aa(a,ge,new At(Ae,Ae));break}}}var Qr=null;function qa(e){Qr=e}function Ll(e,n,s,i,a){var h=e.doc;e.display.shift=!1,i||(i=h.sel);var m=+new Date-200,v=a=="paste"||e.state.pasteIncoming>m,w=Tr(n),k=null;if(v&&i.ranges.length>1)if(Qr&&Qr.text.join(`
`)==n){if(i.ranges.length%Qr.text.length==0){k=[];for(var z=0;z<Qr.text.length;z++)k.push(h.splitLines(Qr.text[z]))}}else w.length==i.ranges.length&&e.options.pasteLinesPerSelection&&(k=ut(w,function(Ee){return[Ee]}));for(var U=e.curOp.updateInput,se=i.ranges.length-1;se>=0;se--){var ne=i.ranges[se],ge=ne.from(),be=ne.to();ne.empty()&&(s&&s>0?ge=de(ge.line,ge.ch-s):e.state.overwrite&&!v?be=de(be.line,Math.min(Je(h,be.line).text.length,be.ch+Qe(w).length)):v&&Qr&&Qr.lineWise&&Qr.text.join(`
`)==w.join(`
`)&&(ge=be=de(ge.line,0)));var Ae={from:ge,to:be,text:k?k[se%k.length]:w,origin:a||(v?"paste":e.state.cutIncoming>m?"cut":"+input")};Ys(e.doc,Ae),Dn(e,"inputRead",e,Ae)}n&&!v&&Pl(e,n),zs(e),e.curOp.updateInput<2&&(e.curOp.updateInput=U),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Mu(e,n){var s=e.clipboardData&&e.clipboardData.getData("Text");if(s)return e.preventDefault(),!n.isReadOnly()&&!n.options.disableInput&&n.hasFocus()&&Ln(n,function(){return Ll(n,s,0,null,"paste")}),!0}function Pl(e,n){if(!(!e.options.electricChars||!e.options.smartIndent))for(var s=e.doc.sel,i=s.ranges.length-1;i>=0;i--){var a=s.ranges[i];if(!(a.head.ch>100||i&&s.ranges[i-1].head.line==a.head.line)){var h=e.getModeAt(a.head),m=!1;if(h.electricChars){for(var v=0;v<h.electricChars.length;v++)if(n.indexOf(h.electricChars.charAt(v))>-1){m=ia(e,a.head.line,"smart");break}}else h.electricInput&&h.electricInput.test(Je(e.doc,a.head.line).text.slice(0,a.head.ch))&&(m=ia(e,a.head.line,"smart"));m&&Dn(e,"electricInput",e,a.head.line)}}}function Al(e){for(var n=[],s=[],i=0;i<e.doc.sel.ranges.length;i++){var a=e.doc.sel.ranges[i].head.line,h={anchor:de(a,0),head:de(a+1,0)};s.push(h),n.push(e.getRange(h.anchor,h.head))}return{text:n,ranges:s}}function Rl(e,n,s,i){e.setAttribute("autocorrect",s?"on":"off"),e.setAttribute("autocapitalize",i?"on":"off"),e.setAttribute("spellcheck",!!n)}function Il(){var e=E("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),n=E("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return N?e.style.width="1000px":e.setAttribute("wrap","off"),F&&(e.style.border="1px solid black"),n}function Ol(e){var n=e.optionHandlers,s=e.helpers={};e.prototype={constructor:e,focus:function(){Oe(this).focus(),this.display.input.focus()},setOption:function(i,a){var h=this.options,m=h[i];h[i]==a&&i!="mode"||(h[i]=a,n.hasOwnProperty(i)&&pn(this,n[i])(this,a,m),It(this,"optionChange",this,i))},getOption:function(i){return this.options[i]},getDoc:function(){return this.doc},addKeyMap:function(i,a){this.state.keyMaps[a?"push":"unshift"](js(i))},removeKeyMap:function(i){for(var a=this.state.keyMaps,h=0;h<a.length;++h)if(a[h]==i||a[h].name==i)return a.splice(h,1),!0},addOverlay:Cn(function(i,a){var h=i.token?i:e.getMode(this.options,i);if(h.startState)throw new Error("Overlays may not be stateful.");ae(this.state.overlays,{mode:h,modeSpec:i,opaque:a&&a.opaque,priority:a&&a.priority||0},function(m){return m.priority}),this.state.modeGen++,sr(this)}),removeOverlay:Cn(function(i){for(var a=this.state.overlays,h=0;h<a.length;++h){var m=a[h].modeSpec;if(m==i||typeof i=="string"&&m.name==i){a.splice(h,1),this.state.modeGen++,sr(this);return}}}),indentLine:Cn(function(i,a,h){typeof a!="string"&&typeof a!="number"&&(a==null?a=this.options.smartIndent?"smart":"prev":a=a?"add":"subtract"),me(this.doc,i)&&ia(this,i,a,h)}),indentSelection:Cn(function(i){for(var a=this.doc.sel.ranges,h=-1,m=0;m<a.length;m++){var v=a[m];if(v.empty())v.head.line>h&&(ia(this,v.head.line,i,!0),h=v.head.line,m==this.doc.sel.primIndex&&zs(this));else{var w=v.from(),k=v.to(),z=Math.max(h,w.line);h=Math.min(this.lastLine(),k.line-(k.ch?0:1))+1;for(var U=z;U<h;++U)ia(this,U,i);var se=this.doc.sel.ranges;w.ch==0&&a.length==se.length&&se[m].from().ch>0&&Aa(this.doc,m,new At(w,se[m].to()),_t)}}}),getTokenAt:function(i,a){return vi(this,i,a)},getLineTokens:function(i,a){return vi(this,de(i),a,!0)},getTokenTypeAt:function(i){i=gt(this.doc,i);var a=Wi(this,Je(this.doc,i.line)),h=0,m=(a.length-1)/2,v=i.ch,w;if(v==0)w=a[2];else for(;;){var k=h+m>>1;if((k?a[k*2-1]:0)>=v)m=k;else if(a[k*2+1]<v)h=k+1;else{w=a[k*2+2];break}}var z=w?w.indexOf("overlay "):-1;return z<0?w:z==0?null:w.slice(0,z-1)},getModeAt:function(i){var a=this.doc.mode;return a.innerMode?e.innerMode(a,this.getTokenAt(i).state).mode:a},getHelper:function(i,a){return this.getHelpers(i,a)[0]},getHelpers:function(i,a){var h=[];if(!s.hasOwnProperty(a))return h;var m=s[a],v=this.getModeAt(i);if(typeof v[a]=="string")m[v[a]]&&h.push(m[v[a]]);else if(v[a])for(var w=0;w<v[a].length;w++){var k=m[v[a][w]];k&&h.push(k)}else v.helperType&&m[v.helperType]?h.push(m[v.helperType]):m[v.name]&&h.push(m[v.name]);for(var z=0;z<m._global.length;z++){var U=m._global[z];U.pred(v,this)&&$e(h,U.val)==-1&&h.push(U.val)}return h},getStateAfter:function(i,a){var h=this.doc;return i=Qo(h,i??h.first+h.size-1),Nt(this,i+1,a).state},cursorCoords:function(i,a){var h,m=this.doc.sel.primary();return i==null?h=m.head:typeof i=="object"?h=gt(this.doc,i):h=i?m.from():m.to(),_n(this,h,a||"page")},charCoords:function(i,a){return sl(this,gt(this.doc,i),a||"page")},coordsChar:function(i,a){return i=wc(this,i,a||"page"),ol(this,i.left,i.top)},lineAtHeight:function(i,a){return i=wc(this,{top:i,left:0},a||"page").top,B(this.doc,i+this.display.viewOffset)},heightAtLine:function(i,a,h){var m=!1,v;if(typeof i=="number"){var w=this.doc.first+this.doc.size-1;i<this.doc.first?i=this.doc.first:i>w&&(i=w,m=!0),v=Je(this.doc,i)}else v=i;return il(this,v,{top:0,left:0},a||"page",h||m).top+(m?this.doc.height-Sn(v):0)},defaultTextHeight:function(){return ki(this.display)},defaultCharWidth:function(){return hs(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(i,a,h,m,v){var w=this.display;i=_n(this,gt(this.doc,i));var k=i.bottom,z=i.left;if(a.style.position="absolute",a.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(a),w.sizer.appendChild(a),m=="over")k=i.top;else if(m=="above"||m=="near"){var U=Math.max(w.wrapper.clientHeight,this.doc.height),se=Math.max(w.sizer.clientWidth,w.lineSpace.clientWidth);(m=="above"||i.bottom+a.offsetHeight>U)&&i.top>a.offsetHeight?k=i.top-a.offsetHeight:i.bottom+a.offsetHeight<=U&&(k=i.bottom),z+a.offsetWidth>se&&(z=se-a.offsetWidth)}a.style.top=k+"px",a.style.left=a.style.right="",v=="right"?(z=w.sizer.clientWidth-a.offsetWidth,a.style.right="0px"):(v=="left"?z=0:v=="middle"&&(z=(w.sizer.clientWidth-a.offsetWidth)/2),a.style.left=z+"px"),h&&vo(this,{left:z,top:k,right:z+a.offsetWidth,bottom:k+a.offsetHeight})},triggerOnKeyDown:Cn(ju),triggerOnKeyPress:Cn(Oo),triggerOnKeyUp:Nu,triggerOnMouseDown:Cn(Do),execCommand:function(i){if(Ha.hasOwnProperty(i))return Ha[i].call(null,this)},triggerElectric:Cn(function(i){Pl(this,i)}),findPosH:function(i,a,h,m){var v=1;a<0&&(v=-1,a=-a);for(var w=gt(this.doc,i),k=0;k<a&&(w=Du(this.doc,w,v,h,m),!w.hitSide);++k);return w},moveH:Cn(function(i,a){var h=this;this.extendSelectionsBy(function(m){return h.display.shift||h.doc.extend||m.empty()?Du(h.doc,m.head,i,a,h.options.rtlMoveVisually):i<0?m.from():m.to()},tt)}),deleteH:Cn(function(i,a){var h=this.doc.sel,m=this.doc;h.somethingSelected()?m.replaceSelection("",null,"+delete"):ta(this,function(v){var w=Du(m,v.head,i,a,!1);return i<0?{from:w,to:v.head}:{from:v.head,to:w}})}),findPosV:function(i,a,h,m){var v=1,w=m;a<0&&(v=-1,a=-a);for(var k=gt(this.doc,i),z=0;z<a;++z){var U=_n(this,k,"div");if(w==null?w=U.left:U.left=w,k=zu(this,U,v,h),k.hitSide)break}return k},moveV:Cn(function(i,a){var h=this,m=this.doc,v=[],w=!this.display.shift&&!m.extend&&m.sel.somethingSelected();if(m.extendSelectionsBy(function(z){if(w)return i<0?z.from():z.to();var U=_n(h,z.head,"div");z.goalColumn!=null&&(U.left=z.goalColumn),v.push(U.left);var se=zu(h,U,i,a);return a=="page"&&z==m.sel.primary()&&gs(h,sl(h,se,"div").top-U.top),se},tt),v.length)for(var k=0;k<m.sel.ranges.length;k++)m.sel.ranges[k].goalColumn=v[k]}),findWordAt:function(i){var a=this.doc,h=Je(a,i.line).text,m=i.ch,v=i.ch;if(h){var w=this.getHelper(i,"wordChars");(i.sticky=="before"||v==h.length)&&m?--m:++v;for(var k=h.charAt(m),z=at(k,w)?function(U){return at(U,w)}:/\s/.test(k)?function(U){return/\s/.test(U)}:function(U){return!/\s/.test(U)&&!at(U)};m>0&&z(h.charAt(m-1));)--m;for(;v<h.length&&z(h.charAt(v));)++v}return new At(de(i.line,m),de(i.line,v))},toggleOverwrite:function(i){i!=null&&i==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?$(this.display.cursorDiv,"CodeMirror-overwrite"):Ce(this.display.cursorDiv,"CodeMirror-overwrite"),It(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==L(Ie(this))},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:Cn(function(i,a){xo(this,i,a)}),getScrollInfo:function(){var i=this.display.scroller;return{left:i.scrollLeft,top:i.scrollTop,height:i.scrollHeight-si(this)-this.display.barHeight,width:i.scrollWidth-si(this)-this.display.barWidth,clientHeight:ps(this),clientWidth:ds(this)}},scrollIntoView:Cn(function(i,a){i==null?(i={from:this.doc.sel.primary().head,to:null},a==null&&(a=this.options.cursorScrollMargin)):typeof i=="number"?i={from:de(i,0),to:null}:i.from==null&&(i={from:i,to:null}),i.to||(i.to=i.from),i.margin=a||0,i.from.line!=null?ip(this,i):wo(this,i.from,i.to,i.margin)}),setSize:Cn(function(i,a){var h=this,m=function(w){return typeof w=="number"||/^\d+$/.test(String(w))?w+"px":w};i!=null&&(this.display.wrapper.style.width=m(i)),a!=null&&(this.display.wrapper.style.height=m(a)),this.options.lineWrapping&&ru(this);var v=this.display.viewFrom;this.doc.iter(v,this.display.viewTo,function(w){if(w.widgets){for(var k=0;k<w.widgets.length;k++)if(w.widgets[k].noHScroll){$i(h,v,"widget");break}}++v}),this.curOp.forceUpdate=!0,It(this,"refresh",this)}),operation:function(i){return Ln(this,i)},startOperation:function(){return xs(this)},endOperation:function(){return Yr(this)},refresh:Cn(function(){var i=this.display.cachedTextHeight;sr(this),this.curOp.forceUpdate=!0,xa(this),xo(this,this.doc.scrollLeft,this.doc.scrollTop),ar(this.display),(i==null||Math.abs(i-ki(this.display))>.5||this.options.lineWrapping)&&fo(this),It(this,"refresh",this)}),swapDoc:Cn(function(i){var a=this.doc;return a.cm=null,this.state.selectingText&&this.state.selectingText(),rn(this,i),xa(this),this.display.input.reset(),xo(this,i.scrollLeft,i.scrollTop),this.curOp.forceScroll=!0,Dn(this,"swapDoc",this,a),a}),phrase:function(i){var a=this.options.phrases;return a&&Object.prototype.hasOwnProperty.call(a,i)?a[i]:i},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Nn(e),e.registerHelper=function(i,a,h){s.hasOwnProperty(i)||(s[i]=e[i]={_global:[]}),s[i][a]=h},e.registerGlobalHelper=function(i,a,h,m){e.registerHelper(i,a,m),s[i]._global.push({pred:h,val:m})}}function Du(e,n,s,i,a){var h=n,m=s,v=Je(e,n.line),w=a&&e.direction=="rtl"?-s:s;function k(){var Fe=n.line+w;return Fe<e.first||Fe>=e.first+e.size?!1:(n=new de(Fe,n.ch,n.sticky),v=Je(e,Fe))}function z(Fe){var De;if(i=="codepoint"){var Ge=v.text.charCodeAt(n.ch+(s>0?0:-1));if(isNaN(Ge))De=null;else{var ot=s>0?Ge>=55296&&Ge<56320:Ge>=56320&&Ge<57343;De=new de(n.line,Math.max(0,Math.min(v.text.length,n.ch+s*(ot?2:1))),-s)}}else a?De=ku(e.cm,v,n,s):De=Wa(v,n,s);if(De==null)if(!Fe&&k())n=jl(a,e.cm,v,n.line,w);else return!1;else n=De;return!0}if(i=="char"||i=="codepoint")z();else if(i=="column")z(!0);else if(i=="word"||i=="group")for(var U=null,se=i=="group",ne=e.cm&&e.cm.getHelper(n,"wordChars"),ge=!0;!(s<0&&!z(!ge));ge=!1){var be=v.text.charAt(n.ch)||`
`,Ae=at(be,ne)?"w":se&&be==`
`?"n":!se||/\s/.test(be)?null:"p";if(se&&!ge&&!Ae&&(Ae="s"),U&&U!=Ae){s<0&&(s=1,z(),n.sticky="after");break}if(Ae&&(U=Ae),s>0&&!z(!ge))break}var Ee=Lo(e,n,h,m,!0);return jt(h,Ee)&&(Ee.hitSide=!0),Ee}function zu(e,n,s,i){var a=e.doc,h=n.left,m;if(i=="page"){var v=Math.min(e.display.wrapper.clientHeight,Oe(e).innerHeight||a(e).documentElement.clientHeight),w=Math.max(v-.5*ki(e.display),3);m=(s>0?n.bottom:n.top)+s*w}else i=="line"&&(m=s>0?n.bottom+3:n.top-3);for(var k;k=ol(e,h,m),!!k.outside;){if(s<0?m<=0:m>=a.height){k.hitSide=!0;break}m+=s*5}return k}var Mt=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new et,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};Mt.prototype.init=function(e){var n=this,s=this,i=s.cm,a=s.div=e.lineDiv;a.contentEditable=!0,Rl(a,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize);function h(v){for(var w=v.target;w;w=w.parentNode){if(w==a)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(w.className))break}return!1}rt(a,"paste",function(v){!h(v)||qt(i,v)||Mu(v,i)||j<=11&&setTimeout(pn(i,function(){return n.updateFromDOM()}),20)}),rt(a,"compositionstart",function(v){n.composing={data:v.data,done:!1}}),rt(a,"compositionupdate",function(v){n.composing||(n.composing={data:v.data,done:!1})}),rt(a,"compositionend",function(v){n.composing&&(v.data!=n.composing.data&&n.readFromDOMSoon(),n.composing.done=!0)}),rt(a,"touchstart",function(){return s.forceCompositionEnd()}),rt(a,"input",function(){n.composing||n.readFromDOMSoon()});function m(v){if(!(!h(v)||qt(i,v))){if(i.somethingSelected())qa({lineWise:!1,text:i.getSelections()}),v.type=="cut"&&i.replaceSelection("",null,"cut");else if(i.options.lineWiseCopyCut){var w=Al(i);qa({lineWise:!0,text:w.text}),v.type=="cut"&&i.operation(function(){i.setSelections(w.ranges,0,_t),i.replaceSelection("",null,"cut")})}else return;if(v.clipboardData){v.clipboardData.clearData();var k=Qr.text.join(`
`);if(v.clipboardData.setData("Text",k),v.clipboardData.getData("Text")==k){v.preventDefault();return}}var z=Il(),U=z.firstChild;Rl(U),i.display.lineSpace.insertBefore(z,i.display.lineSpace.firstChild),U.value=Qr.text.join(`
`);var se=L(qe(a));Z(U),setTimeout(function(){i.display.lineSpace.removeChild(z),se.focus(),se==a&&s.showPrimarySelection()},50)}}rt(a,"copy",m),rt(a,"cut",m)},Mt.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Mt.prototype.prepareSelection=function(){var e=ul(this.cm,!1);return e.focus=L(qe(this.div))==this.div,e},Mt.prototype.showSelection=function(e,n){!e||!this.cm.display.view.length||((e.focus||n)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Mt.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Mt.prototype.showPrimarySelection=function(){var e=this.getSelection(),n=this.cm,s=n.doc.sel.primary(),i=s.from(),a=s.to();if(n.display.viewTo==n.display.viewFrom||i.line>=n.display.viewTo||a.line<n.display.viewFrom){e.removeAllRanges();return}var h=zo(n,e.anchorNode,e.anchorOffset),m=zo(n,e.focusNode,e.focusOffset);if(!(h&&!h.bad&&m&&!m.bad&&He(Kr(h,m),i)==0&&He(kn(h,m),a)==0)){var v=n.display.view,w=i.line>=n.display.viewFrom&&Fu(n,i)||{node:v[0].measure.map[2],offset:0},k=a.line<n.display.viewTo&&Fu(n,a);if(!k){var z=v[v.length-1].measure,U=z.maps?z.maps[z.maps.length-1]:z.map;k={node:U[U.length-1],offset:U[U.length-2]-U[U.length-3]}}if(!w||!k){e.removeAllRanges();return}var se=e.rangeCount&&e.getRangeAt(0),ne;try{ne=Q(w.node,w.offset,k.offset,k.node)}catch{}ne&&(!x&&n.state.focused?(e.collapse(w.node,w.offset),ne.collapsed||(e.removeAllRanges(),e.addRange(ne))):(e.removeAllRanges(),e.addRange(ne)),se&&e.anchorNode==null?e.addRange(se):x&&this.startGracePeriod()),this.rememberSelection()}},Mt.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Mt.prototype.showMultipleSelections=function(e){ve(this.cm.display.cursorDiv,e.cursors),ve(this.cm.display.selectionDiv,e.selection)},Mt.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Mt.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var n=e.getRangeAt(0).commonAncestorContainer;return R(this.div,n)},Mt.prototype.focus=function(){this.cm.options.readOnly!="nocursor"&&((!this.selectionInEditor()||L(qe(this.div))!=this.div)&&this.showSelection(this.prepareSelection(),!0),this.div.focus())},Mt.prototype.blur=function(){this.div.blur()},Mt.prototype.getField=function(){return this.div},Mt.prototype.supportsTouch=function(){return!0},Mt.prototype.receivedFocus=function(){var e=this,n=this;this.selectionInEditor()?setTimeout(function(){return e.pollSelection()},20):Ln(this.cm,function(){return n.cm.curOp.selectionChanged=!0});function s(){n.cm.state.focused&&(n.pollSelection(),n.polling.set(n.cm.options.pollInterval,s))}this.polling.set(this.cm.options.pollInterval,s)},Mt.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Mt.prototype.pollSelection=function(){if(!(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged())){var e=this.getSelection(),n=this.cm;if(q&&A&&this.cm.display.gutterSpecs.length&&Ml(e.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();return}if(!this.composing){this.rememberSelection();var s=zo(n,e.anchorNode,e.anchorOffset),i=zo(n,e.focusNode,e.focusOffset);s&&i&&Ln(n,function(){Wn(n.doc,zn(s,i),_t),(s.bad||i.bad)&&(n.curOp.selectionChanged=!0)})}}},Mt.prototype.pollContent=function(){this.readDOMTimeout!=null&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e=this.cm,n=e.display,s=e.doc.sel.primary(),i=s.from(),a=s.to();if(i.ch==0&&i.line>e.firstLine()&&(i=de(i.line-1,Je(e.doc,i.line-1).length)),a.ch==Je(e.doc,a.line).text.length&&a.line<e.lastLine()&&(a=de(a.line+1,0)),i.line<n.viewFrom||a.line>n.viewTo-1)return!1;var h,m,v;i.line==n.viewFrom||(h=Si(e,i.line))==0?(m=C(n.view[0].line),v=n.view[0].node):(m=C(n.view[h].line),v=n.view[h-1].node.nextSibling);var w=Si(e,a.line),k,z;if(w==n.view.length-1?(k=n.viewTo-1,z=n.lineDiv.lastChild):(k=C(n.view[w+1].line)-1,z=n.view[w+1].node.previousSibling),!v)return!1;for(var U=e.doc.splitLines(cp(e,v,z,m,k)),se=ri(e.doc,de(m,0),de(k,Je(e.doc,k).text.length));U.length>1&&se.length>1;)if(Qe(U)==Qe(se))U.pop(),se.pop(),k--;else if(U[0]==se[0])U.shift(),se.shift(),m++;else break;for(var ne=0,ge=0,be=U[0],Ae=se[0],Ee=Math.min(be.length,Ae.length);ne<Ee&&be.charCodeAt(ne)==Ae.charCodeAt(ne);)++ne;for(var Fe=Qe(U),De=Qe(se),Ge=Math.min(Fe.length-(U.length==1?ne:0),De.length-(se.length==1?ne:0));ge<Ge&&Fe.charCodeAt(Fe.length-ge-1)==De.charCodeAt(De.length-ge-1);)++ge;if(U.length==1&&se.length==1&&m==i.line)for(;ne&&ne>i.ch&&Fe.charCodeAt(Fe.length-ge-1)==De.charCodeAt(De.length-ge-1);)ne--,ge++;U[U.length-1]=Fe.slice(0,Fe.length-ge).replace(/^\u200b+/,""),U[0]=U[0].slice(ne).replace(/\u200b+$/,"");var ot=de(m,ne),Ve=de(k,se.length?Qe(se).length-ge:0);if(U.length>1||U[0]||He(ot,Ve))return Vs(e.doc,U,ot,Ve,"+input"),!0},Mt.prototype.ensurePolled=function(){this.forceCompositionEnd()},Mt.prototype.reset=function(){this.forceCompositionEnd()},Mt.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Mt.prototype.readFromDOMSoon=function(){var e=this;this.readDOMTimeout==null&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing)if(e.composing.done)e.composing=null;else return;e.updateFromDOM()},80))},Mt.prototype.updateFromDOM=function(){var e=this;(this.cm.isReadOnly()||!this.pollContent())&&Ln(this.cm,function(){return sr(e.cm)})},Mt.prototype.setUneditable=function(e){e.contentEditable="false"},Mt.prototype.onKeyPress=function(e){e.charCode==0||this.composing||(e.preventDefault(),this.cm.isReadOnly()||pn(this.cm,Ll)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0))},Mt.prototype.readOnlyChanged=function(e){this.div.contentEditable=String(e!="nocursor")},Mt.prototype.onContextMenu=function(){},Mt.prototype.resetPosition=function(){},Mt.prototype.needsContentAttribute=!0;function Fu(e,n){var s=nl(e,n.line);if(!s||s.hidden)return null;var i=Je(e.doc,n.line),a=yc(s,i,n.line),h=bt(i,e.doc.direction),m="left";if(h){var v=Br(h,n.ch);m=v%2?"right":"left"}var w=po(a.map,n.ch,m);return w.offset=w.collapse=="right"?w.end:w.start,w}function Ml(e){for(var n=e;n;n=n.parentNode)if(/CodeMirror-gutter-wrapper/.test(n.className))return!0;return!1}function Pr(e,n){return n&&(e.bad=!0),e}function cp(e,n,s,i,a){var h="",m=!1,v=e.doc.lineSeparator(),w=!1;function k(ne){return function(ge){return ge.id==ne}}function z(){m&&(h+=v,w&&(h+=v),m=w=!1)}function U(ne){ne&&(z(),h+=ne)}function se(ne){if(ne.nodeType==1){var ge=ne.getAttribute("cm-text");if(ge){U(ge);return}var be=ne.getAttribute("cm-marker"),Ae;if(be){var Ee=e.findMarks(de(i,0),de(a+1,0),k(+be));Ee.length&&(Ae=Ee[0].find(0))&&U(ri(e.doc,Ae.from,Ae.to).join(v));return}if(ne.getAttribute("contenteditable")=="false")return;var Fe=/^(pre|div|p|li|table|br)$/i.test(ne.nodeName);if(!/^br$/i.test(ne.nodeName)&&ne.textContent.length==0)return;Fe&&z();for(var De=0;De<ne.childNodes.length;De++)se(ne.childNodes[De]);/^(pre|p)$/i.test(ne.nodeName)&&(w=!0),Fe&&(m=!0)}else ne.nodeType==3&&U(ne.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;se(n),n!=s;)n=n.nextSibling,w=!1;return h}function zo(e,n,s){var i;if(n==e.display.lineDiv){if(i=e.display.lineDiv.childNodes[s],!i)return Pr(e.clipPos(de(e.display.viewTo-1)),!0);n=null,s=0}else for(i=n;;i=i.parentNode){if(!i||i==e.display.lineDiv)return null;if(i.parentNode&&i.parentNode==e.display.lineDiv)break}for(var a=0;a<e.display.view.length;a++){var h=e.display.view[a];if(h.node==i)return Wu(h,n,s)}}function Wu(e,n,s){var i=e.text.firstChild,a=!1;if(!n||!R(i,n))return Pr(de(C(e.line),0),!0);if(n==i&&(a=!0,n=i.childNodes[s],s=0,!n)){var h=e.rest?Qe(e.rest):e.line;return Pr(de(C(h),h.text.length),a)}var m=n.nodeType==3?n:null,v=n;for(!m&&n.childNodes.length==1&&n.firstChild.nodeType==3&&(m=n.firstChild,s&&(s=m.nodeValue.length));v.parentNode!=i;)v=v.parentNode;var w=e.measure,k=w.maps;function z(Ae,Ee,Fe){for(var De=-1;De<(k?k.length:0);De++)for(var Ge=De<0?w.map:k[De],ot=0;ot<Ge.length;ot+=3){var Ve=Ge[ot+2];if(Ve==Ae||Ve==Ee){var St=C(De<0?e.line:e.rest[De]),Et=Ge[ot]+Fe;return(Fe<0||Ve!=Ae)&&(Et=Ge[ot+(Fe?1:0)]),de(St,Et)}}}var U=z(m,v,s);if(U)return Pr(U,a);for(var se=v.nextSibling,ne=m?m.nodeValue.length-s:0;se;se=se.nextSibling){if(U=z(se,se.firstChild,0),U)return Pr(de(U.line,U.ch-ne),a);ne+=se.textContent.length}for(var ge=v.previousSibling,be=s;ge;ge=ge.previousSibling){if(U=z(ge,ge.firstChild,-1),U)return Pr(de(U.line,U.ch+be),a);be+=ge.textContent.length}}var fn=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new et,this.hasSelection=!1,this.composing=null,this.resetting=!1};fn.prototype.init=function(e){var n=this,s=this,i=this.cm;this.createField(e);var a=this.textarea;e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),F&&(a.style.width="0px"),rt(a,"input",function(){S&&j>=9&&n.hasSelection&&(n.hasSelection=null),s.poll()}),rt(a,"paste",function(m){qt(i,m)||Mu(m,i)||(i.state.pasteIncoming=+new Date,s.fastPoll())});function h(m){if(!qt(i,m)){if(i.somethingSelected())qa({lineWise:!1,text:i.getSelections()});else if(i.options.lineWiseCopyCut){var v=Al(i);qa({lineWise:!0,text:v.text}),m.type=="cut"?i.setSelections(v.ranges,null,_t):(s.prevInput="",a.value=v.text.join(`
`),Z(a))}else return;m.type=="cut"&&(i.state.cutIncoming=+new Date)}}rt(a,"cut",h),rt(a,"copy",h),rt(e.scroller,"paste",function(m){if(!(qi(e,m)||qt(i,m))){if(!a.dispatchEvent){i.state.pasteIncoming=+new Date,s.focus();return}var v=new Event("paste");v.clipboardData=m.clipboardData,a.dispatchEvent(v)}}),rt(e.lineSpace,"selectstart",function(m){qi(e,m)||bn(m)}),rt(a,"compositionstart",function(){var m=i.getCursor("from");s.composing&&s.composing.range.clear(),s.composing={start:m,range:i.markText(m,i.getCursor("to"),{className:"CodeMirror-composing"})}}),rt(a,"compositionend",function(){s.composing&&(s.poll(),s.composing.range.clear(),s.composing=null)})},fn.prototype.createField=function(e){this.wrapper=Il(),this.textarea=this.wrapper.firstChild;var n=this.cm.options;Rl(this.textarea,n.spellcheck,n.autocorrect,n.autocapitalize)},fn.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},fn.prototype.prepareSelection=function(){var e=this.cm,n=e.display,s=e.doc,i=ul(e);if(e.options.moveInputWithCursor){var a=_n(e,s.sel.primary().head,"div"),h=n.wrapper.getBoundingClientRect(),m=n.lineDiv.getBoundingClientRect();i.teTop=Math.max(0,Math.min(n.wrapper.clientHeight-10,a.top+m.top-h.top)),i.teLeft=Math.max(0,Math.min(n.wrapper.clientWidth-10,a.left+m.left-h.left))}return i},fn.prototype.showSelection=function(e){var n=this.cm,s=n.display;ve(s.cursorDiv,e.cursors),ve(s.selectionDiv,e.selection),e.teTop!=null&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},fn.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var n=this.cm;if(this.resetting=!0,n.somethingSelected()){this.prevInput="";var s=n.getSelection();this.textarea.value=s,n.state.focused&&Z(this.textarea),S&&j>=9&&(this.hasSelection=s)}else e||(this.prevInput=this.textarea.value="",S&&j>=9&&(this.hasSelection=null));this.resetting=!1}},fn.prototype.getField=function(){return this.textarea},fn.prototype.supportsTouch=function(){return!1},fn.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!H||L(qe(this.textarea))!=this.textarea))try{this.textarea.focus()}catch{}},fn.prototype.blur=function(){this.textarea.blur()},fn.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},fn.prototype.receivedFocus=function(){this.slowPoll()},fn.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},fn.prototype.fastPoll=function(){var e=!1,n=this;n.pollingFast=!0;function s(){var i=n.poll();!i&&!e?(e=!0,n.polling.set(60,s)):(n.pollingFast=!1,n.slowPoll())}n.polling.set(20,s)},fn.prototype.poll=function(){var e=this,n=this.cm,s=this.textarea,i=this.prevInput;if(this.contextMenuPending||this.resetting||!n.state.focused||mi(s)&&!i&&!this.composing||n.isReadOnly()||n.options.disableInput||n.state.keySeq)return!1;var a=s.value;if(a==i&&!n.somethingSelected())return!1;if(S&&j>=9&&this.hasSelection===a||Y&&/[\uf700-\uf7ff]/.test(a))return n.display.input.reset(),!1;if(n.doc.sel==n.display.selForContextMenu){var h=a.charCodeAt(0);if(h==8203&&!i&&(i="​"),h==8666)return this.reset(),this.cm.execCommand("undo")}for(var m=0,v=Math.min(i.length,a.length);m<v&&i.charCodeAt(m)==a.charCodeAt(m);)++m;return Ln(n,function(){Ll(n,a.slice(m),i.length-m,null,e.composing?"*compose":null),a.length>1e3||a.indexOf(`
`)>-1?s.value=e.prevInput="":e.prevInput=a,e.composing&&(e.composing.range.clear(),e.composing.range=n.markText(e.composing.start,n.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},fn.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},fn.prototype.onKeyPress=function(){S&&j>=9&&(this.hasSelection=null),this.fastPoll()},fn.prototype.onContextMenu=function(e){var n=this,s=n.cm,i=s.display,a=n.textarea;n.contextMenuPending&&n.contextMenuPending();var h=fs(s,e),m=i.scroller.scrollTop;if(!h||D)return;var v=s.options.resetSelectionOnContextMenu;v&&s.doc.sel.contains(h)==-1&&pn(s,Wn)(s.doc,zn(h),_t);var w=a.style.cssText,k=n.wrapper.style.cssText,z=n.wrapper.offsetParent.getBoundingClientRect();n.wrapper.style.cssText="position: static",a.style.cssText=`position: absolute; width: 30px; height: 30px;
      top: `+(e.clientY-z.top-5)+"px; left: "+(e.clientX-z.left-5)+`px;
      z-index: 1000; background: `+(S?"rgba(255, 255, 255, .05)":"transparent")+`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;var U;N&&(U=a.ownerDocument.defaultView.scrollY),i.input.focus(),N&&a.ownerDocument.defaultView.scrollTo(null,U),i.input.reset(),s.somethingSelected()||(a.value=n.prevInput=" "),n.contextMenuPending=ne,i.selForContextMenu=s.doc.sel,clearTimeout(i.detectingSelectAll);function se(){if(a.selectionStart!=null){var be=s.somethingSelected(),Ae="​"+(be?a.value:"");a.value="⇚",a.value=Ae,n.prevInput=be?"":"​",a.selectionStart=1,a.selectionEnd=Ae.length,i.selForContextMenu=s.doc.sel}}function ne(){if(n.contextMenuPending==ne&&(n.contextMenuPending=!1,n.wrapper.style.cssText=k,a.style.cssText=w,S&&j<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=m),a.selectionStart!=null)){(!S||S&&j<9)&&se();var be=0,Ae=function(){i.selForContextMenu==s.doc.sel&&a.selectionStart==0&&a.selectionEnd>0&&n.prevInput=="​"?pn(s,Qi)(s):be++<10?i.detectingSelectAll=setTimeout(Ae,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(Ae,200)}}if(S&&j>=9&&se(),_e){pr(e);var ge=function(){tn(window,"mouseup",ge),setTimeout(ne,20)};rt(window,"mouseup",ge)}else setTimeout(ne,50)},fn.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled=e=="nocursor",this.textarea.readOnly=!!e},fn.prototype.setUneditable=function(){},fn.prototype.needsContentAttribute=!1;function Yc(e,n){if(n=n?Be(n):{},n.value=e.value,!n.tabindex&&e.tabIndex&&(n.tabindex=e.tabIndex),!n.placeholder&&e.placeholder&&(n.placeholder=e.placeholder),n.autofocus==null){var s=L(qe(e));n.autofocus=s==e||e.getAttribute("autofocus")!=null&&s==document.body}function i(){e.value=v.getValue()}var a;if(e.form&&(rt(e.form,"submit",i),!n.leaveSubmitMethodAlone)){var h=e.form;a=h.submit;try{var m=h.submit=function(){i(),h.submit=a,h.submit(),h.submit=m}}catch{}}n.finishInit=function(w){w.save=i,w.getTextArea=function(){return e},w.toTextArea=function(){w.toTextArea=isNaN,i(),e.parentNode.removeChild(w.getWrapperElement()),e.style.display="",e.form&&(tn(e.form,"submit",i),!n.leaveSubmitMethodAlone&&typeof e.form.submit=="function"&&(e.form.submit=a))}},e.style.display="none";var v=en(function(w){return e.parentNode.insertBefore(w,e.nextSibling)},n);return v}function Fo(e){e.off=tn,e.on=rt,e.wheelEventPixels=ws,e.Doc=Ot,e.splitLines=Tr,e.countColumn=Ke,e.findColumn=Ue,e.isWordChar=Ye,e.Pass=Yt,e.signal=It,e.Line=bi,e.changeEnd=Fn,e.scrollbarModel=Tc,e.Pos=de,e.cmpPos=He,e.modes=Mi,e.mimeModes=Or,e.resolveMode=Di,e.getMode=Bt,e.modeExtensions=Mr,e.extendMode=os,e.copyState=Rt,e.startState=ni,e.innerMode=zi,e.commands=Ha,e.keyMap=Pi,e.keyName=wu,e.isModifierKey=xu,e.lookupKey=ea,e.normalizeKeyMap=Rc,e.StringStream=Vt,e.SharedTextMarker=Xs,e.TextMarker=di,e.LineWidget=Ei,e.e_preventDefault=bn,e.e_stopPropagation=ti,e.e_stop=pr,e.addClass=$,e.contains=R,e.rmClass=Ce,e.keyNames=Xr}vr(en),Ol(en);var or="iter insert remove copy getEditor constructor".split(" ");for(var Dl in Ot.prototype)Ot.prototype.hasOwnProperty(Dl)&&$e(or,Dl)<0&&(en.prototype[Dl]=(function(e){return function(){return e.apply(this.doc,arguments)}})(Ot.prototype[Dl]));return Nn(Ot),en.inputStyles={textarea:fn,contenteditable:Mt},en.defineMode=function(e){!en.defaults.mode&&e!="null"&&(en.defaults.mode=e),Gn.apply(this,arguments)},en.defineMIME=gi,en.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),en.defineMIME("text/plain","null"),en.defineExtension=function(e,n){en.prototype[e]=n},en.defineDocExtension=function(e,n){Ot.prototype[e]=n},en.fromTextArea=Yc,Fo(en),en.version="5.65.21",en}))})(yd)),yd.exports}var Ux=rs();const gf=qf(Ux);var yf={exports:{}},vf;function qx(){return vf||(vf=1,(function(l,u){(function(d){d(rs())})(function(d){function g(j){return new RegExp("^(("+j.join(")|(")+"))\\b")}var x=g(["and","or","not","is"]),b=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],_=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];d.registerHelper("hintWords","python",b.concat(_).concat(["exec","print"]));function T(j){return j.scopes[j.scopes.length-1]}d.defineMode("python",function(j,N){for(var W="error",A=N.delimiters||N.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,J=[N.singleOperators,N.doubleOperators,N.doubleDelimiters,N.tripleDelimiters,N.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],D=0;D<J.length;D++)J[D]||J.splice(D--,1);var G=N.hangingIndent||j.indentUnit,X=b,M=_;N.extra_keywords!=null&&(X=X.concat(N.extra_keywords)),N.extra_builtins!=null&&(M=M.concat(N.extra_builtins));var F=!(N.version&&Number(N.version)<3);if(F){var q=N.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;X=X.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),M=M.concat(["ascii","bytes","exec","print"]);var H=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var q=N.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;X=X.concat(["exec","print"]),M=M.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var H=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var Y=g(X),pe=g(M);function V(ee,Q){var R=ee.sol()&&Q.lastToken!="\\";if(R&&(Q.indent=ee.indentation()),R&&T(Q).type=="py"){var L=T(Q).offset;if(ee.eatSpace()){var $=ee.indentation();return $>L?oe(Q):$<L&&le(ee,Q)&&ee.peek()!="#"&&(Q.errorToken=!0),null}else{var O=ye(ee,Q);return L>0&&le(ee,Q)&&(O+=" "+W),O}}return ye(ee,Q)}function ye(ee,Q,R){if(ee.eatSpace())return null;if(!R&&ee.match(/^#.*/))return"comment";if(ee.match(/^[0-9\.]/,!1)){var L=!1;if(ee.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(L=!0),ee.match(/^[\d_]+\.\d*/)&&(L=!0),ee.match(/^\.\d+/)&&(L=!0),L)return ee.eat(/J/i),"number";var $=!1;if(ee.match(/^0x[0-9a-f_]+/i)&&($=!0),ee.match(/^0b[01_]+/i)&&($=!0),ee.match(/^0o[0-7_]+/i)&&($=!0),ee.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(ee.eat(/J/i),$=!0),ee.match(/^0(?![\dx])/i)&&($=!0),$)return ee.eat(/L/i),"number"}if(ee.match(H)){var O=ee.current().toLowerCase().indexOf("f")!==-1;return O?(Q.tokenize=ze(ee.current(),Q.tokenize),Q.tokenize(ee,Q)):(Q.tokenize=_e(ee.current(),Q.tokenize),Q.tokenize(ee,Q))}for(var Z=0;Z<J.length;Z++)if(ee.match(J[Z]))return"operator";return ee.match(A)?"punctuation":Q.lastToken=="."&&ee.match(q)?"property":ee.match(Y)||ee.match(x)?"keyword":ee.match(pe)?"builtin":ee.match(/^(self|cls)\b/)?"variable-2":ee.match(q)?Q.lastToken=="def"||Q.lastToken=="class"?"def":"variable":(ee.next(),R?null:W)}function ze(ee,Q){for(;"rubf".indexOf(ee.charAt(0).toLowerCase())>=0;)ee=ee.substr(1);var R=ee.length==1,L="string";function $(Z){return function(ke,Ie){var qe=ye(ke,Ie,!0);return qe=="punctuation"&&(ke.current()=="{"?Ie.tokenize=$(Z+1):ke.current()=="}"&&(Z>1?Ie.tokenize=$(Z-1):Ie.tokenize=O)),qe}}function O(Z,ke){for(;!Z.eol();)if(Z.eatWhile(/[^'"\{\}\\]/),Z.eat("\\")){if(Z.next(),R&&Z.eol())return L}else{if(Z.match(ee))return ke.tokenize=Q,L;if(Z.match("{{"))return L;if(Z.match("{",!1))return ke.tokenize=$(0),Z.current()?L:ke.tokenize(Z,ke);if(Z.match("}}"))return L;if(Z.match("}"))return W;Z.eat(/['"]/)}if(R){if(N.singleLineStringErrors)return W;ke.tokenize=Q}return L}return O.isString=!0,O}function _e(ee,Q){for(;"rubf".indexOf(ee.charAt(0).toLowerCase())>=0;)ee=ee.substr(1);var R=ee.length==1,L="string";function $(O,Z){for(;!O.eol();)if(O.eatWhile(/[^'"\\]/),O.eat("\\")){if(O.next(),R&&O.eol())return L}else{if(O.match(ee))return Z.tokenize=Q,L;O.eat(/['"]/)}if(R){if(N.singleLineStringErrors)return W;Z.tokenize=Q}return L}return $.isString=!0,$}function oe(ee){for(;T(ee).type!="py";)ee.scopes.pop();ee.scopes.push({offset:T(ee).offset+j.indentUnit,type:"py",align:null})}function Ce(ee,Q,R){var L=ee.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:ee.column()+1;Q.scopes.push({offset:Q.indent+G,type:R,align:L})}function le(ee,Q){for(var R=ee.indentation();Q.scopes.length>1&&T(Q).offset>R;){if(T(Q).type!="py")return!0;Q.scopes.pop()}return T(Q).offset!=R}function ve(ee,Q){ee.sol()&&(Q.beginningOfLine=!0,Q.dedent=!1);var R=Q.tokenize(ee,Q),L=ee.current();if(Q.beginningOfLine&&L=="@")return ee.match(q,!1)?"meta":F?"operator":W;if(/\S/.test(L)&&(Q.beginningOfLine=!1),(R=="variable"||R=="builtin")&&Q.lastToken=="meta"&&(R="meta"),(L=="pass"||L=="return")&&(Q.dedent=!0),L=="lambda"&&(Q.lambda=!0),L==":"&&!Q.lambda&&T(Q).type=="py"&&ee.match(/^\s*(?:#|$)/,!1)&&oe(Q),L.length==1&&!/string|comment/.test(R)){var $="[({".indexOf(L);if($!=-1&&Ce(ee,Q,"])}".slice($,$+1)),$="])}".indexOf(L),$!=-1)if(T(Q).type==L)Q.indent=Q.scopes.pop().offset-G;else return W}return Q.dedent&&ee.eol()&&T(Q).type=="py"&&Q.scopes.length>1&&Q.scopes.pop(),R}var E={startState:function(ee){return{tokenize:V,scopes:[{offset:ee||0,type:"py",align:null}],indent:ee||0,lastToken:null,lambda:!1,dedent:0}},token:function(ee,Q){var R=Q.errorToken;R&&(Q.errorToken=!1);var L=ve(ee,Q);return L&&L!="comment"&&(Q.lastToken=L=="keyword"||L=="punctuation"?ee.current():L),L=="punctuation"&&(L=null),ee.eol()&&Q.lambda&&(Q.lambda=!1),R?L+" "+W:L},indent:function(ee,Q){if(ee.tokenize!=V)return ee.tokenize.isString?d.Pass:0;var R=T(ee),L=R.type==Q.charAt(0)||R.type=="py"&&!ee.dedent&&/^(else:|elif |except |finally:)/.test(Q);return R.align!=null?R.align-(L?1:0):R.offset-(L?G:0)},electricInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,closeBrackets:{triples:`'"`},lineComment:"#",fold:"indent"};return E}),d.defineMIME("text/x-python","python");var S=function(j){return j.split(" ")};d.defineMIME("text/x-cython",{name:"python",extra_keywords:S("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})})})()),yf.exports}qx();var xf={exports:{}},bf;function xm(){return bf||(bf=1,(function(l,u){(function(d){d(rs())})(function(d){d.defineMode("javascript",function(g,x){var b=g.indentUnit,_=x.statementIndent,T=x.jsonld,S=x.json||T,j=x.trackScope!==!1,N=x.typescript,W=x.wordCharacters||/[\w$\xa1-\uffff]/,A=(function(){function C(Qt){return{type:Qt,style:"keyword"}}var B=C("keyword a"),me=C("keyword b"),Ne=C("keyword c"),de=C("keyword d"),He=C("operator"),jt={type:"atom",style:"atom"};return{if:C("if"),while:B,with:B,else:me,do:me,try:me,finally:me,return:de,break:de,continue:de,new:C("new"),delete:Ne,void:Ne,throw:Ne,debugger:C("debugger"),var:C("var"),const:C("var"),let:C("var"),function:C("function"),catch:C("catch"),for:C("for"),switch:C("switch"),case:C("case"),default:C("default"),in:He,typeof:He,instanceof:He,true:jt,false:jt,null:jt,undefined:jt,NaN:jt,Infinity:jt,this:C("this"),class:C("class"),super:C("atom"),yield:Ne,export:C("export"),import:C("import"),extends:Ne,await:Ne}})(),J=/[+\-*&%=<>!?|~^@]/,D=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function G(C){for(var B=!1,me,Ne=!1;(me=C.next())!=null;){if(!B){if(me=="/"&&!Ne)return;me=="["?Ne=!0:Ne&&me=="]"&&(Ne=!1)}B=!B&&me=="\\"}}var X,M;function F(C,B,me){return X=C,M=me,B}function q(C,B){var me=C.next();if(me=='"'||me=="'")return B.tokenize=H(me),B.tokenize(C,B);if(me=="."&&C.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return F("number","number");if(me=="."&&C.match(".."))return F("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(me))return F(me);if(me=="="&&C.eat(">"))return F("=>","operator");if(me=="0"&&C.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return F("number","number");if(/\d/.test(me))return C.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),F("number","number");if(me=="/")return C.eat("*")?(B.tokenize=Y,Y(C,B)):C.eat("/")?(C.skipToEnd(),F("comment","comment")):Yn(C,B,1)?(G(C),C.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),F("regexp","string-2")):(C.eat("="),F("operator","operator",C.current()));if(me=="`")return B.tokenize=pe,pe(C,B);if(me=="#"&&C.peek()=="!")return C.skipToEnd(),F("meta","meta");if(me=="#"&&C.eatWhile(W))return F("variable","property");if(me=="<"&&C.match("!--")||me=="-"&&C.match("->")&&!/\S/.test(C.string.slice(0,C.start)))return C.skipToEnd(),F("comment","comment");if(J.test(me))return(me!=">"||!B.lexical||B.lexical.type!=">")&&(C.eat("=")?(me=="!"||me=="=")&&C.eat("="):/[<>*+\-|&?]/.test(me)&&(C.eat(me),me==">"&&C.eat(me))),me=="?"&&C.eat(".")?F("."):F("operator","operator",C.current());if(W.test(me)){C.eatWhile(W);var Ne=C.current();if(B.lastType!="."){if(A.propertyIsEnumerable(Ne)){var de=A[Ne];return F(de.type,de.style,Ne)}if(Ne=="async"&&C.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return F("async","keyword",Ne)}return F("variable","variable",Ne)}}function H(C){return function(B,me){var Ne=!1,de;if(T&&B.peek()=="@"&&B.match(D))return me.tokenize=q,F("jsonld-keyword","meta");for(;(de=B.next())!=null&&!(de==C&&!Ne);)Ne=!Ne&&de=="\\";return Ne||(me.tokenize=q),F("string","string")}}function Y(C,B){for(var me=!1,Ne;Ne=C.next();){if(Ne=="/"&&me){B.tokenize=q;break}me=Ne=="*"}return F("comment","comment")}function pe(C,B){for(var me=!1,Ne;(Ne=C.next())!=null;){if(!me&&(Ne=="`"||Ne=="$"&&C.eat("{"))){B.tokenize=q;break}me=!me&&Ne=="\\"}return F("quasi","string-2",C.current())}var V="([{}])";function ye(C,B){B.fatArrowAt&&(B.fatArrowAt=null);var me=C.string.indexOf("=>",C.start);if(!(me<0)){if(N){var Ne=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(C.string.slice(C.start,me));Ne&&(me=Ne.index)}for(var de=0,He=!1,jt=me-1;jt>=0;--jt){var Qt=C.string.charAt(jt),kn=V.indexOf(Qt);if(kn>=0&&kn<3){if(!de){++jt;break}if(--de==0){Qt=="("&&(He=!0);break}}else if(kn>=3&&kn<6)++de;else if(W.test(Qt))He=!0;else if(/["'\/`]/.test(Qt))for(;;--jt){if(jt==0)return;var Kr=C.string.charAt(jt-1);if(Kr==Qt&&C.string.charAt(jt-2)!="\\"){jt--;break}}else if(He&&!de){++jt;break}}He&&!de&&(B.fatArrowAt=jt)}}var ze={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function _e(C,B,me,Ne,de,He){this.indented=C,this.column=B,this.type=me,this.prev=de,this.info=He,Ne!=null&&(this.align=Ne)}function oe(C,B){if(!j)return!1;for(var me=C.localVars;me;me=me.next)if(me.name==B)return!0;for(var Ne=C.context;Ne;Ne=Ne.prev)for(var me=Ne.vars;me;me=me.next)if(me.name==B)return!0}function Ce(C,B,me,Ne,de){var He=C.cc;for(le.state=C,le.stream=de,le.marked=null,le.cc=He,le.style=B,C.lexical.hasOwnProperty("align")||(C.lexical.align=!0);;){var jt=He.length?He.pop():S?$e:Ke;if(jt(me,Ne)){for(;He.length&&He[He.length-1].lex;)He.pop()();return le.marked?le.marked:me=="variable"&&oe(C,Ne)?"variable-2":B}}}var le={state:null,marked:null,cc:null};function ve(){for(var C=arguments.length-1;C>=0;C--)le.cc.push(arguments[C])}function E(){return ve.apply(null,arguments),!0}function ee(C,B){for(var me=B;me;me=me.next)if(me.name==C)return!0;return!1}function Q(C){var B=le.state;if(le.marked="def",!!j){if(B.context){if(B.lexical.info=="var"&&B.context&&B.context.block){var me=R(C,B.context);if(me!=null){B.context=me;return}}else if(!ee(C,B.localVars)){B.localVars=new O(C,B.localVars);return}}x.globalVars&&!ee(C,B.globalVars)&&(B.globalVars=new O(C,B.globalVars))}}function R(C,B){if(B)if(B.block){var me=R(C,B.prev);return me?me==B.prev?B:new $(me,B.vars,!0):null}else return ee(C,B.vars)?B:new $(B.prev,new O(C,B.vars),!1);else return null}function L(C){return C=="public"||C=="private"||C=="protected"||C=="abstract"||C=="readonly"}function $(C,B,me){this.prev=C,this.vars=B,this.block=me}function O(C,B){this.name=C,this.next=B}var Z=new O("this",new O("arguments",null));function ke(){le.state.context=new $(le.state.context,le.state.localVars,!1),le.state.localVars=Z}function Ie(){le.state.context=new $(le.state.context,le.state.localVars,!0),le.state.localVars=null}ke.lex=Ie.lex=!0;function qe(){le.state.localVars=le.state.context.vars,le.state.context=le.state.context.prev}qe.lex=!0;function Oe(C,B){var me=function(){var Ne=le.state,de=Ne.indented;if(Ne.lexical.type=="stat")de=Ne.lexical.indented;else for(var He=Ne.lexical;He&&He.type==")"&&He.align;He=He.prev)de=He.indented;Ne.lexical=new _e(de,le.stream.column(),C,null,Ne.lexical,B)};return me.lex=!0,me}function we(){var C=le.state;C.lexical.prev&&(C.lexical.type==")"&&(C.indented=C.lexical.indented),C.lexical=C.lexical.prev)}we.lex=!0;function Be(C){function B(me){return me==C?E():C==";"||me=="}"||me==")"||me=="]"?ve():E(B)}return B}function Ke(C,B){return C=="var"?E(Oe("vardef",B),ti,Be(";"),we):C=="keyword a"?E(Oe("form"),Yt,Ke,we):C=="keyword b"?E(Oe("form"),Ke,we):C=="keyword d"?le.stream.match(/^\s*$/,!1)?E():E(Oe("stat"),xt,Be(";"),we):C=="debugger"?E(Be(";")):C=="{"?E(Oe("}"),Ie,nr,we,qe):C==";"?E():C=="if"?(le.state.lexical.info=="else"&&le.state.cc[le.state.cc.length-1]==we&&le.state.cc.pop()(),E(Oe("form"),Yt,Ke,we,wn)):C=="function"?E(Tr):C=="for"?E(Oe("form"),Ie,Cr,Ke,qe,we):C=="class"||N&&B=="interface"?(le.marked="keyword",E(Oe("form",C=="class"?C:B),Mi,we)):C=="variable"?N&&B=="declare"?(le.marked="keyword",E(Ke)):N&&(B=="module"||B=="enum"||B=="type")&&le.stream.match(/^\s*\w/,!1)?(le.marked="keyword",B=="enum"?E(Je):B=="type"?E(ss,Be("operator"),bt,Be(";")):E(Oe("form"),In,Be("{"),Oe("}"),nr,we,we)):N&&B=="namespace"?(le.marked="keyword",E(Oe("form"),$e,Ke,we)):N&&B=="abstract"?(le.marked="keyword",E(Ke)):E(Oe("stat"),kt):C=="switch"?E(Oe("form"),Yt,Be("{"),Oe("}","switch"),Ie,nr,we,we,qe):C=="case"?E($e,Be(":")):C=="default"?E(Be(":")):C=="catch"?E(Oe("form"),ke,et,Ke,we,qe):C=="export"?E(Oe("stat"),Di,we):C=="import"?E(Oe("stat"),Mr,we):C=="async"?E(Ke):B=="@"?E($e,Ke):ve(Oe("stat"),$e,Be(";"),we)}function et(C){if(C=="(")return E(On,Be(")"))}function $e(C,B){return _t(C,B,!1)}function Ft(C,B){return _t(C,B,!0)}function Yt(C){return C!="("?ve():E(Oe(")"),xt,Be(")"),we)}function _t(C,B,me){if(le.state.fatArrowAt==le.stream.start){var Ne=me?ut:Qe;if(C=="(")return E(ke,Oe(")"),pt(On,")"),we,Be("=>"),Ne,qe);if(C=="variable")return ve(ke,In,Be("=>"),Ne,qe)}var de=me?Ue:tt;return ze.hasOwnProperty(C)?E(de):C=="function"?E(Tr,de):C=="class"||N&&B=="interface"?(le.marked="keyword",E(Oe("form"),as,we)):C=="keyword c"||C=="async"?E(me?Ft:$e):C=="("?E(Oe(")"),xt,Be(")"),we,de):C=="operator"||C=="spread"?E(me?Ft:$e):C=="["?E(Oe("]"),Vt,we,de):C=="{"?Xt(at,"}",null,de):C=="quasi"?ve(vt,de):C=="new"?E(ae(me)):E()}function xt(C){return C.match(/[;\}\)\],]/)?ve():ve($e)}function tt(C,B){return C==","?E(xt):Ue(C,B,!1)}function Ue(C,B,me){var Ne=me==!1?tt:Ue,de=me==!1?$e:Ft;if(C=="=>")return E(ke,me?ut:Qe,qe);if(C=="operator")return/\+\+|--/.test(B)||N&&B=="!"?E(Ne):N&&B=="<"&&le.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?E(Oe(">"),pt(bt,">"),we,Ne):B=="?"?E($e,Be(":"),de):E(de);if(C=="quasi")return ve(vt,Ne);if(C!=";"){if(C=="(")return Xt(Ft,")","call",Ne);if(C==".")return E(Ye,Ne);if(C=="[")return E(Oe("]"),xt,Be("]"),we,Ne);if(N&&B=="as")return le.marked="keyword",E(bt,Ne);if(C=="regexp")return le.state.lastType=le.marked="operator",le.stream.backUp(le.stream.pos-le.stream.start-1),E(de)}}function vt(C,B){return C!="quasi"?ve():B.slice(B.length-2)!="${"?E(vt):E(xt,yt)}function yt(C){if(C=="}")return le.marked="string-2",le.state.tokenize=pe,E(vt)}function Qe(C){return ye(le.stream,le.state),ve(C=="{"?Ke:$e)}function ut(C){return ye(le.stream,le.state),ve(C=="{"?Ke:Ft)}function ae(C){return function(B){return B=="."?E(C?he:je):B=="variable"&&N?E(mn,C?Ue:tt):ve(C?Ft:$e)}}function je(C,B){if(B=="target")return le.marked="keyword",E(tt)}function he(C,B){if(B=="target")return le.marked="keyword",E(Ue)}function kt(C){return C==":"?E(we,Ke):ve(tt,Be(";"),we)}function Ye(C){if(C=="variable")return le.marked="property",E()}function at(C,B){if(C=="async")return le.marked="property",E(at);if(C=="variable"||le.style=="keyword"){if(le.marked="property",B=="get"||B=="set")return E(Ze);var me;return N&&le.state.fatArrowAt==le.stream.start&&(me=le.stream.match(/^\s*:\s*/,!1))&&(le.state.fatArrowAt=le.stream.pos+me[0].length),E(mt)}else{if(C=="number"||C=="string")return le.marked=T?"property":le.style+" property",E(mt);if(C=="jsonld-keyword")return E(mt);if(N&&L(B))return le.marked="keyword",E(at);if(C=="[")return E($e,Sr,Be("]"),mt);if(C=="spread")return E(Ft,mt);if(B=="*")return le.marked="keyword",E(at);if(C==":")return ve(mt)}}function Ze(C){return C!="variable"?ve(mt):(le.marked="property",E(Tr))}function mt(C){if(C==":")return E(Ft);if(C=="(")return ve(Tr)}function pt(C,B,me){function Ne(de,He){if(me?me.indexOf(de)>-1:de==","){var jt=le.state.lexical;return jt.info=="call"&&(jt.pos=(jt.pos||0)+1),E(function(Qt,kn){return Qt==B||kn==B?ve():ve(C)},Ne)}return de==B||He==B?E():me&&me.indexOf(";")>-1?ve(C):E(Be(B))}return function(de,He){return de==B||He==B?E():ve(C,Ne)}}function Xt(C,B,me){for(var Ne=3;Ne<arguments.length;Ne++)le.cc.push(arguments[Ne]);return E(Oe(B,me),pt(C,B),we)}function nr(C){return C=="}"?E():ve(Ke,nr)}function Sr(C,B){if(N){if(C==":")return E(bt);if(B=="?")return E(Sr)}}function Rr(C,B){if(N&&(C==":"||B=="in"))return E(bt)}function Br(C){if(N&&C==":")return le.stream.match(/^\s*\w+\s+is\b/,!1)?E($e,Ur,bt):E(bt)}function Ur(C,B){if(B=="is")return le.marked="keyword",E()}function bt(C,B){if(B=="keyof"||B=="typeof"||B=="infer"||B=="readonly")return le.marked="keyword",E(B=="typeof"?Ft:bt);if(C=="variable"||B=="void")return le.marked="type",E(xn);if(B=="|"||B=="&")return E(bt);if(C=="string"||C=="number"||C=="atom")return E(xn);if(C=="[")return E(Oe("]"),pt(bt,"]",","),we,xn);if(C=="{")return E(Oe("}"),rt,we,xn);if(C=="(")return E(pt(qt,")"),hi,xn);if(C=="<")return E(pt(bt,">"),bt);if(C=="quasi")return ve(tn,xn)}function hi(C){if(C=="=>")return E(bt)}function rt(C){return C.match(/[\}\)\]]/)?E():C==","||C==";"?E(rt):ve(_r,rt)}function _r(C,B){if(C=="variable"||le.style=="keyword")return le.marked="property",E(_r);if(B=="?"||C=="number"||C=="string")return E(_r);if(C==":")return E(bt);if(C=="[")return E(Be("variable"),Rr,Be("]"),_r);if(C=="(")return ve(mi,_r);if(!C.match(/[;\}\)\],]/))return E()}function tn(C,B){return C!="quasi"?ve():B.slice(B.length-2)!="${"?E(tn):E(bt,It)}function It(C){if(C=="}")return le.marked="string-2",le.state.tokenize=pe,E(tn)}function qt(C,B){return C=="variable"&&le.stream.match(/^\s*[?:]/,!1)||B=="?"?E(qt):C==":"?E(bt):C=="spread"?E(qt):ve(bt)}function xn(C,B){if(B=="<")return E(Oe(">"),pt(bt,">"),we,xn);if(B=="|"||C=="."||B=="&")return E(bt);if(C=="[")return E(bt,Be("]"),xn);if(B=="extends"||B=="implements")return le.marked="keyword",E(bt);if(B=="?")return E(bt,Be(":"),bt)}function mn(C,B){if(B=="<")return E(Oe(">"),pt(bt,">"),we,xn)}function Nn(){return ve(bt,bn)}function bn(C,B){if(B=="=")return E(bt)}function ti(C,B){return B=="enum"?(le.marked="keyword",E(Je)):ve(In,Sr,En,is)}function In(C,B){if(N&&L(B))return le.marked="keyword",E(In);if(C=="variable")return Q(B),E();if(C=="spread")return E(In);if(C=="[")return Xt(fi,"]");if(C=="{")return Xt(pr,"}")}function pr(C,B){return C=="variable"&&!le.stream.match(/^\s*:/,!1)?(Q(B),E(En)):(C=="variable"&&(le.marked="property"),C=="spread"?E(In):C=="}"?ve():C=="["?E($e,Be("]"),Be(":"),pr):E(Be(":"),In,En))}function fi(){return ve(In,En)}function En(C,B){if(B=="=")return E(Ft)}function is(C){if(C==",")return E(ti)}function wn(C,B){if(C=="keyword b"&&B=="else")return E(Oe("form","else"),Ke,we)}function Cr(C,B){if(B=="await")return E(Cr);if(C=="(")return E(Oe(")"),qr,we)}function qr(C){return C=="var"?E(ti,Ir):C=="variable"?E(Ir):ve(Ir)}function Ir(C,B){return C==")"?E():C==";"?E(Ir):B=="in"||B=="of"?(le.marked="keyword",E($e,Ir)):ve($e,Ir)}function Tr(C,B){if(B=="*")return le.marked="keyword",E(Tr);if(C=="variable")return Q(B),E(Tr);if(C=="(")return E(ke,Oe(")"),pt(On,")"),we,Br,Ke,qe);if(N&&B=="<")return E(Oe(">"),pt(Nn,">"),we,Tr)}function mi(C,B){if(B=="*")return le.marked="keyword",E(mi);if(C=="variable")return Q(B),E(mi);if(C=="(")return E(ke,Oe(")"),pt(On,")"),we,Br,qe);if(N&&B=="<")return E(Oe(">"),pt(Nn,">"),we,mi)}function ss(C,B){if(C=="keyword"||C=="variable")return le.marked="type",E(ss);if(B=="<")return E(Oe(">"),pt(Nn,">"),we)}function On(C,B){return B=="@"&&E($e,On),C=="spread"?E(On):N&&L(B)?(le.marked="keyword",E(On)):N&&C=="this"?E(Sr,En):ve(In,Sr,En)}function as(C,B){return C=="variable"?Mi(C,B):Or(C,B)}function Mi(C,B){if(C=="variable")return Q(B),E(Or)}function Or(C,B){if(B=="<")return E(Oe(">"),pt(Nn,">"),we,Or);if(B=="extends"||B=="implements"||N&&C==",")return B=="implements"&&(le.marked="keyword"),E(N?bt:$e,Or);if(C=="{")return E(Oe("}"),Gn,we)}function Gn(C,B){if(C=="async"||C=="variable"&&(B=="static"||B=="get"||B=="set"||N&&L(B))&&le.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return le.marked="keyword",E(Gn);if(C=="variable"||le.style=="keyword")return le.marked="property",E(gi,Gn);if(C=="number"||C=="string")return E(gi,Gn);if(C=="[")return E($e,Sr,Be("]"),gi,Gn);if(B=="*")return le.marked="keyword",E(Gn);if(N&&C=="(")return ve(mi,Gn);if(C==";"||C==",")return E(Gn);if(C=="}")return E();if(B=="@")return E($e,Gn)}function gi(C,B){if(B=="!"||B=="?")return E(gi);if(C==":")return E(bt,En);if(B=="=")return E(Ft);var me=le.state.lexical.prev,Ne=me&&me.info=="interface";return ve(Ne?mi:Tr)}function Di(C,B){return B=="*"?(le.marked="keyword",E(ni,Be(";"))):B=="default"?(le.marked="keyword",E($e,Be(";"))):C=="{"?E(pt(Bt,"}"),ni,Be(";")):ve(Ke)}function Bt(C,B){if(B=="as")return le.marked="keyword",E(Be("variable"));if(C=="variable")return ve(Ft,Bt)}function Mr(C){return C=="string"?E():C=="("?ve($e):C=="."?ve(tt):ve(os,Rt,ni)}function os(C,B){return C=="{"?Xt(os,"}"):(C=="variable"&&Q(B),B=="*"&&(le.marked="keyword"),E(zi))}function Rt(C){if(C==",")return E(os,Rt)}function zi(C,B){if(B=="as")return le.marked="keyword",E(os)}function ni(C,B){if(B=="from")return le.marked="keyword",E($e)}function Vt(C){return C=="]"?E():ve(pt(Ft,"]"))}function Je(){return ve(Oe("form"),In,Be("{"),Oe("}"),pt(ri,"}"),we,we)}function ri(){return ve(In,En)}function ls(C,B){return C.lastType=="operator"||C.lastType==","||J.test(B.charAt(0))||/[,.]/.test(B.charAt(0))}function Yn(C,B,me){return B.tokenize==q&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(B.lastType)||B.lastType=="quasi"&&/\{\s*$/.test(C.string.slice(0,C.pos-(me||0)))}return{startState:function(C){var B={tokenize:q,lastType:"sof",cc:[],lexical:new _e((C||0)-b,0,"block",!1),localVars:x.localVars,context:x.localVars&&new $(null,null,!1),indented:C||0};return x.globalVars&&typeof x.globalVars=="object"&&(B.globalVars=x.globalVars),B},token:function(C,B){if(C.sol()&&(B.lexical.hasOwnProperty("align")||(B.lexical.align=!1),B.indented=C.indentation(),ye(C,B)),B.tokenize!=Y&&C.eatSpace())return null;var me=B.tokenize(C,B);return X=="comment"?me:(B.lastType=X=="operator"&&(M=="++"||M=="--")?"incdec":X,Ce(B,me,X,M,C))},indent:function(C,B){if(C.tokenize==Y||C.tokenize==pe)return d.Pass;if(C.tokenize!=q)return 0;var me=B&&B.charAt(0),Ne=C.lexical,de;if(!/^\s*else\b/.test(B))for(var He=C.cc.length-1;He>=0;--He){var jt=C.cc[He];if(jt==we)Ne=Ne.prev;else if(jt!=wn&&jt!=qe)break}for(;(Ne.type=="stat"||Ne.type=="form")&&(me=="}"||(de=C.cc[C.cc.length-1])&&(de==tt||de==Ue)&&!/^[,\.=+\-*:?[\(]/.test(B));)Ne=Ne.prev;_&&Ne.type==")"&&Ne.prev.type=="stat"&&(Ne=Ne.prev);var Qt=Ne.type,kn=me==Qt;return Qt=="vardef"?Ne.indented+(C.lastType=="operator"||C.lastType==","?Ne.info.length+1:0):Qt=="form"&&me=="{"?Ne.indented:Qt=="form"?Ne.indented+b:Qt=="stat"?Ne.indented+(ls(C,B)?_||b:0):Ne.info=="switch"&&!kn&&x.doubleIndentSwitch!=!1?Ne.indented+(/^(?:case|default)\b/.test(B)?b:2*b):Ne.align?Ne.column+(kn?0:1):Ne.indented+(kn?0:b)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:S?null:"/*",blockCommentEnd:S?null:"*/",blockCommentContinue:S?null:" * ",lineComment:S?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:S?"json":"javascript",jsonldMode:T,jsonMode:S,expressionAllowed:Yn,skipExpression:function(C){Ce(C,"atom","atom","true",new d.StringStream("",2,null))}}}),d.registerHelper("wordChars","javascript",/[\w$]/),d.defineMIME("text/javascript","javascript"),d.defineMIME("text/ecmascript","javascript"),d.defineMIME("application/javascript","javascript"),d.defineMIME("application/x-javascript","javascript"),d.defineMIME("application/ecmascript","javascript"),d.defineMIME("application/json",{name:"javascript",json:!0}),d.defineMIME("application/x-json",{name:"javascript",json:!0}),d.defineMIME("application/manifest+json",{name:"javascript",json:!0}),d.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),d.defineMIME("text/typescript",{name:"javascript",typescript:!0}),d.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})()),xf.exports}xm();var wf={exports:{}},kf;function Kx(){return kf||(kf=1,(function(l,u){(function(d){d(rs())})(function(d){function g(R,L,$,O,Z,ke){this.indented=R,this.column=L,this.type=$,this.info=O,this.align=Z,this.prev=ke}function x(R,L,$,O){var Z=R.indented;return R.context&&R.context.type=="statement"&&$!="statement"&&(Z=R.context.indented),R.context=new g(Z,L,$,O,null,R.context)}function b(R){var L=R.context.type;return(L==")"||L=="]"||L=="}")&&(R.indented=R.context.indented),R.context=R.context.prev}function _(R,L,$){if(L.prevToken=="variable"||L.prevToken=="type"||/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(R.string.slice(0,$))||L.typeAtEndOfLine&&R.column()==R.indentation())return!0}function T(R){for(;;){if(!R||R.type=="top")return!0;if(R.type=="}"&&R.prev.info!="namespace")return!1;R=R.prev}}d.defineMode("clike",function(R,L){var $=R.indentUnit,O=L.statementIndentUnit||$,Z=L.dontAlignCalls,ke=L.keywords||{},Ie=L.types||{},qe=L.builtin||{},Oe=L.blockKeywords||{},we=L.defKeywords||{},Be=L.atoms||{},Ke=L.hooks||{},et=L.multiLineStrings,$e=L.indentStatements!==!1,Ft=L.indentSwitch!==!1,Yt=L.namespaceSeparator,_t=L.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,xt=L.numberStart||/[\d\.]/,tt=L.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,Ue=L.isOperatorChar||/[+\-*&%=<>!?|\/]/,vt=L.isIdentifierChar||/[\w\$_\xa1-\uffff]/,yt=L.isReservedIdentifier||!1,Qe,ut;function ae(Ye,at){var Ze=Ye.next();if(Ke[Ze]){var mt=Ke[Ze](Ye,at);if(mt!==!1)return mt}if(Ze=='"'||Ze=="'")return at.tokenize=je(Ze),at.tokenize(Ye,at);if(xt.test(Ze)){if(Ye.backUp(1),Ye.match(tt))return"number";Ye.next()}if(_t.test(Ze))return Qe=Ze,null;if(Ze=="/"){if(Ye.eat("*"))return at.tokenize=he,he(Ye,at);if(Ye.eat("/"))return Ye.skipToEnd(),"comment"}if(Ue.test(Ze)){for(;!Ye.match(/^\/[\/*]/,!1)&&Ye.eat(Ue););return"operator"}if(Ye.eatWhile(vt),Yt)for(;Ye.match(Yt);)Ye.eatWhile(vt);var pt=Ye.current();return j(ke,pt)?(j(Oe,pt)&&(Qe="newstatement"),j(we,pt)&&(ut=!0),"keyword"):j(Ie,pt)?"type":j(qe,pt)||yt&&yt(pt)?(j(Oe,pt)&&(Qe="newstatement"),"builtin"):j(Be,pt)?"atom":"variable"}function je(Ye){return function(at,Ze){for(var mt=!1,pt,Xt=!1;(pt=at.next())!=null;){if(pt==Ye&&!mt){Xt=!0;break}mt=!mt&&pt=="\\"}return(Xt||!(mt||et))&&(Ze.tokenize=null),"string"}}function he(Ye,at){for(var Ze=!1,mt;mt=Ye.next();){if(mt=="/"&&Ze){at.tokenize=null;break}Ze=mt=="*"}return"comment"}function kt(Ye,at){L.typeFirstDefinitions&&Ye.eol()&&T(at.context)&&(at.typeAtEndOfLine=_(Ye,at,Ye.pos))}return{startState:function(Ye){return{tokenize:null,context:new g((Ye||0)-$,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(Ye,at){var Ze=at.context;if(Ye.sol()&&(Ze.align==null&&(Ze.align=!1),at.indented=Ye.indentation(),at.startOfLine=!0),Ye.eatSpace())return kt(Ye,at),null;Qe=ut=null;var mt=(at.tokenize||ae)(Ye,at);if(mt=="comment"||mt=="meta")return mt;if(Ze.align==null&&(Ze.align=!0),Qe==";"||Qe==":"||Qe==","&&Ye.match(/^\s*(?:\/\/.*)?$/,!1))for(;at.context.type=="statement";)b(at);else if(Qe=="{")x(at,Ye.column(),"}");else if(Qe=="[")x(at,Ye.column(),"]");else if(Qe=="(")x(at,Ye.column(),")");else if(Qe=="}"){for(;Ze.type=="statement";)Ze=b(at);for(Ze.type=="}"&&(Ze=b(at));Ze.type=="statement";)Ze=b(at)}else Qe==Ze.type?b(at):$e&&((Ze.type=="}"||Ze.type=="top")&&Qe!=";"||Ze.type=="statement"&&Qe=="newstatement")&&x(at,Ye.column(),"statement",Ye.current());if(mt=="variable"&&(at.prevToken=="def"||L.typeFirstDefinitions&&_(Ye,at,Ye.start)&&T(at.context)&&Ye.match(/^\s*\(/,!1))&&(mt="def"),Ke.token){var pt=Ke.token(Ye,at,mt);pt!==void 0&&(mt=pt)}return mt=="def"&&L.styleDefs===!1&&(mt="variable"),at.startOfLine=!1,at.prevToken=ut?"def":mt||Qe,kt(Ye,at),mt},indent:function(Ye,at){if(Ye.tokenize!=ae&&Ye.tokenize!=null||Ye.typeAtEndOfLine&&T(Ye.context))return d.Pass;var Ze=Ye.context,mt=at&&at.charAt(0),pt=mt==Ze.type;if(Ze.type=="statement"&&mt=="}"&&(Ze=Ze.prev),L.dontIndentStatements)for(;Ze.type=="statement"&&L.dontIndentStatements.test(Ze.info);)Ze=Ze.prev;if(Ke.indent){var Xt=Ke.indent(Ye,Ze,at,$);if(typeof Xt=="number")return Xt}var nr=Ze.prev&&Ze.prev.info=="switch";if(L.allmanIndentation&&/[{(]/.test(mt)){for(;Ze.type!="top"&&Ze.type!="}";)Ze=Ze.prev;return Ze.indented}return Ze.type=="statement"?Ze.indented+(mt=="{"?0:O):Ze.align&&(!Z||Ze.type!=")")?Ze.column+(pt?0:1):Ze.type==")"&&!pt?Ze.indented+O:Ze.indented+(pt?0:$)+(!pt&&nr&&!/^(?:case|default)\b/.test(at)?$:0)},electricInput:Ft?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});function S(R){for(var L={},$=R.split(" "),O=0;O<$.length;++O)L[$[O]]=!0;return L}function j(R,L){return typeof R=="function"?R(L):R.propertyIsEnumerable(L)}var N="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",W="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",A="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",J="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",D=S("int long char short double float unsigned signed void bool"),G=S("SEL instancetype id Class Protocol BOOL");function X(R){return j(D,R)||/.+_t$/.test(R)}function M(R){return X(R)||j(G,R)}var F="case do else for if switch while struct enum union",q="struct enum union";function H(R,L){if(!L.startOfLine)return!1;for(var $,O=null;$=R.peek();){if($=="\\"&&R.match(/^.$/)){O=H;break}else if($=="/"&&R.match(/^\/[\/\*]/,!1))break;R.next()}return L.tokenize=O,"meta"}function Y(R,L){return L.prevToken=="type"?"type":!1}function pe(R){return!R||R.length<2||R[0]!="_"?!1:R[1]=="_"||R[1]!==R[1].toLowerCase()}function V(R){return R.eatWhile(/[\w\.']/),"number"}function ye(R,L){if(R.backUp(1),R.match(/^(?:R|u8R|uR|UR|LR)/)){var $=R.match(/^"([^\s\\()]{0,16})\(/);return $?(L.cpp11RawStringDelim=$[1],L.tokenize=oe,oe(R,L)):!1}return R.match(/^(?:u8|u|U|L)/)?R.match(/^["']/,!1)?"string":!1:(R.next(),!1)}function ze(R){var L=/(\w+)::~?(\w+)$/.exec(R);return L&&L[1]==L[2]}function _e(R,L){for(var $;($=R.next())!=null;)if($=='"'&&!R.eat('"')){L.tokenize=null;break}return"string"}function oe(R,L){var $=L.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),O=R.match(new RegExp(".*?\\)"+$+'"'));return O?L.tokenize=null:R.skipToEnd(),"string"}function Ce(R,L){typeof R=="string"&&(R=[R]);var $=[];function O(ke){if(ke)for(var Ie in ke)ke.hasOwnProperty(Ie)&&$.push(Ie)}O(L.keywords),O(L.types),O(L.builtin),O(L.atoms),$.length&&(L.helperType=R[0],d.registerHelper("hintWords",R[0],$));for(var Z=0;Z<R.length;++Z)d.defineMIME(R[Z],L)}Ce(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:S(N),types:X,blockKeywords:S(F),defKeywords:S(q),typeFirstDefinitions:!0,atoms:S("NULL true false"),isReservedIdentifier:pe,hooks:{"#":H,"*":Y},modeProps:{fold:["brace","include"]}}),Ce(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:S(N+" "+W),types:X,blockKeywords:S(F+" class try catch"),defKeywords:S(q+" class namespace"),typeFirstDefinitions:!0,atoms:S("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:pe,hooks:{"#":H,"*":Y,u:ye,U:ye,L:ye,R:ye,0:V,1:V,2:V,3:V,4:V,5:V,6:V,7:V,8:V,9:V,token:function(R,L,$){if($=="variable"&&R.peek()=="("&&(L.prevToken==";"||L.prevToken==null||L.prevToken=="}")&&ze(R.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ce("text/x-java",{name:"clike",keywords:S("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:S("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:S("catch class do else finally for if switch try while"),defKeywords:S("class interface enum @interface"),typeFirstDefinitions:!0,atoms:S("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(R){return R.match("interface",!1)?!1:(R.eatWhile(/[\w\$_]/),"meta")},'"':function(R,L){return R.match(/""$/)?(L.tokenize=le,L.tokenize(R,L)):!1}},modeProps:{fold:["brace","import"]}}),Ce("text/x-csharp",{name:"clike",keywords:S("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:S("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:S("catch class do else finally for foreach if struct switch try while"),defKeywords:S("class interface namespace record struct var"),typeFirstDefinitions:!0,atoms:S("true false null"),hooks:{"@":function(R,L){return R.eat('"')?(L.tokenize=_e,_e(R,L)):(R.eatWhile(/[\w\$_]/),"meta")}}});function le(R,L){for(var $=!1;!R.eol();){if(!$&&R.match('"""')){L.tokenize=null;break}$=R.next()=="\\"&&!$}return"string"}function ve(R){return function(L,$){for(var O;O=L.next();)if(O=="*"&&L.eat("/"))if(R==1){$.tokenize=null;break}else return $.tokenize=ve(R-1),$.tokenize(L,$);else if(O=="/"&&L.eat("*"))return $.tokenize=ve(R+1),$.tokenize(L,$);return"comment"}}Ce("text/x-scala",{name:"clike",keywords:S("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:S("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:S("catch class enum do else finally for forSome if match switch try while"),defKeywords:S("class enum def object package trait type val var"),atoms:S("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(R){return R.eatWhile(/[\w\$_]/),"meta"},'"':function(R,L){return R.match('""')?(L.tokenize=le,L.tokenize(R,L)):!1},"'":function(R){return R.match(/^(\\[^'\s]+|[^\\'])'/)?"string-2":(R.eatWhile(/[\w\$_\xa1-\uffff]/),"atom")},"=":function(R,L){var $=L.context;return $.type=="}"&&$.align&&R.eat(">")?(L.context=new g($.indented,$.column,$.type,$.info,null,$.prev),"operator"):!1},"/":function(R,L){return R.eat("*")?(L.tokenize=ve(1),L.tokenize(R,L)):!1}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}});function E(R){return function(L,$){for(var O=!1,Z,ke=!1;!L.eol();){if(!R&&!O&&L.match('"')){ke=!0;break}if(R&&L.match('"""')){ke=!0;break}Z=L.next(),!O&&Z=="$"&&L.match("{")&&L.skipTo("}"),O=!O&&Z=="\\"&&!R}return(ke||!R)&&($.tokenize=null),"string"}}Ce("text/x-kotlin",{name:"clike",keywords:S("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"),types:S("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),indentSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(ul?|l|f)?/i,blockKeywords:S("catch class do else finally for if where try while enum"),defKeywords:S("class val var object interface fun"),atoms:S("true false null this"),hooks:{"@":function(R){return R.eatWhile(/[\w\$_]/),"meta"},"*":function(R,L){return L.prevToken=="."?"variable":"operator"},'"':function(R,L){return L.tokenize=E(R.match('""')),L.tokenize(R,L)},"/":function(R,L){return R.eat("*")?(L.tokenize=ve(1),L.tokenize(R,L)):!1},indent:function(R,L,$,O){var Z=$&&$.charAt(0);if((R.prevToken=="}"||R.prevToken==")")&&$=="")return R.indented;if(R.prevToken=="operator"&&$!="}"&&R.context.type!="}"||R.prevToken=="variable"&&Z=="."||(R.prevToken=="}"||R.prevToken==")")&&Z==".")return O*2+L.indented;if(L.align&&L.type=="}")return L.indented+(R.context.type==($||"").charAt(0)?0:O)}},modeProps:{closeBrackets:{triples:'"'}}}),Ce(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:S("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:S("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:S("for while do if else struct"),builtin:S("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:S("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":H},modeProps:{fold:["brace","include"]}}),Ce("text/x-nesc",{name:"clike",keywords:S(N+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:X,blockKeywords:S(F),atoms:S("null true false"),hooks:{"#":H},modeProps:{fold:["brace","include"]}}),Ce("text/x-objectivec",{name:"clike",keywords:S(N+" "+A),types:M,builtin:S(J),blockKeywords:S(F+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:S(q+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:S("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:pe,hooks:{"#":H,"*":Y},modeProps:{fold:["brace","include"]}}),Ce("text/x-objectivec++",{name:"clike",keywords:S(N+" "+A+" "+W),types:M,builtin:S(J),blockKeywords:S(F+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:S(q+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:S("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:pe,hooks:{"#":H,"*":Y,u:ye,U:ye,L:ye,R:ye,0:V,1:V,2:V,3:V,4:V,5:V,6:V,7:V,8:V,9:V,token:function(R,L,$){if($=="variable"&&R.peek()=="("&&(L.prevToken==";"||L.prevToken==null||L.prevToken=="}")&&ze(R.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ce("text/x-squirrel",{name:"clike",keywords:S("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:X,blockKeywords:S("case catch class else for foreach if switch try while"),defKeywords:S("function local class"),typeFirstDefinitions:!0,atoms:S("true false null"),hooks:{"#":H},modeProps:{fold:["brace","include"]}});var ee=null;function Q(R){return function(L,$){for(var O=!1,Z,ke=!1;!L.eol();){if(!O&&L.match('"')&&(R=="single"||L.match('""'))){ke=!0;break}if(!O&&L.match("``")){ee=Q(R),ke=!0;break}Z=L.next(),O=R=="single"&&!O&&Z=="\\"}return ke&&($.tokenize=null),"string"}}Ce("text/x-ceylon",{name:"clike",keywords:S("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(R){var L=R.charAt(0);return L===L.toUpperCase()&&L!==L.toLowerCase()},blockKeywords:S("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:S("class dynamic function interface module object package value"),builtin:S("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:S("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(R){return R.eatWhile(/[\w\$_]/),"meta"},'"':function(R,L){return L.tokenize=Q(R.match('""')?"triple":"single"),L.tokenize(R,L)},"`":function(R,L){return!ee||!R.match("`")?!1:(L.tokenize=ee,ee=null,L.tokenize(R,L))},"'":function(R){return R.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(R,L,$){if(($=="variable"||$=="type")&&L.prevToken==".")return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})})})()),wf.exports}Kx();var Sf={exports:{}},_f;function bm(){return _f||(_f=1,(function(l,u){(function(d){d(rs())})(function(d){var g={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},x={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};d.defineMode("xml",function(b,_){var T=b.indentUnit,S={},j=_.htmlMode?g:x;for(var N in j)S[N]=j[N];for(var N in _)S[N]=_[N];var W,A;function J(E,ee){function Q($){return ee.tokenize=$,$(E,ee)}var R=E.next();if(R=="<")return E.eat("!")?E.eat("[")?E.match("CDATA[")?Q(X("atom","]]>")):null:E.match("--")?Q(X("comment","-->")):E.match("DOCTYPE",!0,!0)?(E.eatWhile(/[\w\._\-]/),Q(M(1))):null:E.eat("?")?(E.eatWhile(/[\w\._\-]/),ee.tokenize=X("meta","?>"),"meta"):(W=E.eat("/")?"closeTag":"openTag",ee.tokenize=D,"tag bracket");if(R=="&"){var L;return E.eat("#")?E.eat("x")?L=E.eatWhile(/[a-fA-F\d]/)&&E.eat(";"):L=E.eatWhile(/[\d]/)&&E.eat(";"):L=E.eatWhile(/[\w\.\-:]/)&&E.eat(";"),L?"atom":"error"}else return E.eatWhile(/[^&<]/),null}J.isInText=!0;function D(E,ee){var Q=E.next();if(Q==">"||Q=="/"&&E.eat(">"))return ee.tokenize=J,W=Q==">"?"endTag":"selfcloseTag","tag bracket";if(Q=="=")return W="equals",null;if(Q=="<"){ee.tokenize=J,ee.state=pe,ee.tagName=ee.tagStart=null;var R=ee.tokenize(E,ee);return R?R+" tag error":"tag error"}else return/[\'\"]/.test(Q)?(ee.tokenize=G(Q),ee.stringStartCol=E.column(),ee.tokenize(E,ee)):(E.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function G(E){var ee=function(Q,R){for(;!Q.eol();)if(Q.next()==E){R.tokenize=D;break}return"string"};return ee.isInAttribute=!0,ee}function X(E,ee){return function(Q,R){for(;!Q.eol();){if(Q.match(ee)){R.tokenize=J;break}Q.next()}return E}}function M(E){return function(ee,Q){for(var R;(R=ee.next())!=null;){if(R=="<")return Q.tokenize=M(E+1),Q.tokenize(ee,Q);if(R==">")if(E==1){Q.tokenize=J;break}else return Q.tokenize=M(E-1),Q.tokenize(ee,Q)}return"meta"}}function F(E){return E&&E.toLowerCase()}function q(E,ee,Q){this.prev=E.context,this.tagName=ee||"",this.indent=E.indented,this.startOfLine=Q,(S.doNotIndent.hasOwnProperty(ee)||E.context&&E.context.noIndent)&&(this.noIndent=!0)}function H(E){E.context&&(E.context=E.context.prev)}function Y(E,ee){for(var Q;;){if(!E.context||(Q=E.context.tagName,!S.contextGrabbers.hasOwnProperty(F(Q))||!S.contextGrabbers[F(Q)].hasOwnProperty(F(ee))))return;H(E)}}function pe(E,ee,Q){return E=="openTag"?(Q.tagStart=ee.column(),V):E=="closeTag"?ye:pe}function V(E,ee,Q){return E=="word"?(Q.tagName=ee.current(),A="tag",oe):S.allowMissingTagName&&E=="endTag"?(A="tag bracket",oe(E,ee,Q)):(A="error",V)}function ye(E,ee,Q){if(E=="word"){var R=ee.current();return Q.context&&Q.context.tagName!=R&&S.implicitlyClosed.hasOwnProperty(F(Q.context.tagName))&&H(Q),Q.context&&Q.context.tagName==R||S.matchClosing===!1?(A="tag",ze):(A="tag error",_e)}else return S.allowMissingTagName&&E=="endTag"?(A="tag bracket",ze(E,ee,Q)):(A="error",_e)}function ze(E,ee,Q){return E!="endTag"?(A="error",ze):(H(Q),pe)}function _e(E,ee,Q){return A="error",ze(E,ee,Q)}function oe(E,ee,Q){if(E=="word")return A="attribute",Ce;if(E=="endTag"||E=="selfcloseTag"){var R=Q.tagName,L=Q.tagStart;return Q.tagName=Q.tagStart=null,E=="selfcloseTag"||S.autoSelfClosers.hasOwnProperty(F(R))?Y(Q,R):(Y(Q,R),Q.context=new q(Q,R,L==Q.indented)),pe}return A="error",oe}function Ce(E,ee,Q){return E=="equals"?le:(S.allowMissing||(A="error"),oe(E,ee,Q))}function le(E,ee,Q){return E=="string"?ve:E=="word"&&S.allowUnquoted?(A="string",oe):(A="error",oe(E,ee,Q))}function ve(E,ee,Q){return E=="string"?ve:oe(E,ee,Q)}return{startState:function(E){var ee={tokenize:J,state:pe,indented:E||0,tagName:null,tagStart:null,context:null};return E!=null&&(ee.baseIndent=E),ee},token:function(E,ee){if(!ee.tagName&&E.sol()&&(ee.indented=E.indentation()),E.eatSpace())return null;W=null;var Q=ee.tokenize(E,ee);return(Q||W)&&Q!="comment"&&(A=null,ee.state=ee.state(W||Q,E,ee),A&&(Q=A=="error"?Q+" error":A)),Q},indent:function(E,ee,Q){var R=E.context;if(E.tokenize.isInAttribute)return E.tagStart==E.indented?E.stringStartCol+1:E.indented+T;if(R&&R.noIndent)return d.Pass;if(E.tokenize!=D&&E.tokenize!=J)return Q?Q.match(/^(\s*)/)[0].length:0;if(E.tagName)return S.multilineTagIndentPastTag!==!1?E.tagStart+E.tagName.length+2:E.tagStart+T*(S.multilineTagIndentFactor||1);if(S.alignCDATA&&/<!\[CDATA\[/.test(ee))return 0;var L=ee&&/^<(\/)?([\w_:\.-]*)/.exec(ee);if(L&&L[1])for(;R;)if(R.tagName==L[2]){R=R.prev;break}else if(S.implicitlyClosed.hasOwnProperty(F(R.tagName)))R=R.prev;else break;else if(L)for(;R;){var $=S.contextGrabbers[F(R.tagName)];if($&&$.hasOwnProperty(F(L[2])))R=R.prev;else break}for(;R&&R.prev&&!R.startOfLine;)R=R.prev;return R?R.indent+T:E.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:S.htmlMode?"html":"xml",helperType:S.htmlMode?"html":"xml",skipAttribute:function(E){E.state==le&&(E.state=oe)},xmlCurrentTag:function(E){return E.tagName?{name:E.tagName,close:E.type=="closeTag"}:null},xmlCurrentContext:function(E){for(var ee=[],Q=E.context;Q;Q=Q.prev)ee.push(Q.tagName);return ee.reverse()}}}),d.defineMIME("text/xml","xml"),d.defineMIME("application/xml","xml"),d.mimeModes.hasOwnProperty("text/html")||d.defineMIME("text/html",{name:"xml",htmlMode:!0})})})()),Sf.exports}bm();var Cf={exports:{}},Tf;function wm(){return Tf||(Tf=1,(function(l,u){(function(d){d(rs())})(function(d){d.defineMode("css",function(_e,oe){var Ce=oe.inline;oe.propertyKeywords||(oe=d.resolveMode("text/css"));var le=_e.indentUnit,ve=oe.tokenHooks,E=oe.documentTypes||{},ee=oe.mediaTypes||{},Q=oe.mediaFeatures||{},R=oe.mediaValueKeywords||{},L=oe.propertyKeywords||{},$=oe.nonStandardPropertyKeywords||{},O=oe.fontProperties||{},Z=oe.counterDescriptors||{},ke=oe.colorKeywords||{},Ie=oe.valueKeywords||{},qe=oe.allowNested,Oe=oe.lineComment,we=oe.supportsAtComponent===!0,Be=_e.highlightNonStandardPropertyKeywords!==!1,Ke,et;function $e(ae,je){return Ke=je,ae}function Ft(ae,je){var he=ae.next();if(ve[he]){var kt=ve[he](ae,je);if(kt!==!1)return kt}if(he=="@")return ae.eatWhile(/[\w\\\-]/),$e("def",ae.current());if(he=="="||(he=="~"||he=="|")&&ae.eat("="))return $e(null,"compare");if(he=='"'||he=="'")return je.tokenize=Yt(he),je.tokenize(ae,je);if(he=="#")return ae.eatWhile(/[\w\\\-]/),$e("atom","hash");if(he=="!")return ae.match(/^\s*\w*/),$e("keyword","important");if(/\d/.test(he)||he=="."&&ae.eat(/\d/))return ae.eatWhile(/[\w.%]/),$e("number","unit");if(he==="-"){if(/[\d.]/.test(ae.peek()))return ae.eatWhile(/[\w.%]/),$e("number","unit");if(ae.match(/^-[\w\\\-]*/))return ae.eatWhile(/[\w\\\-]/),ae.match(/^\s*:/,!1)?$e("variable-2","variable-definition"):$e("variable-2","variable");if(ae.match(/^\w+-/))return $e("meta","meta")}else return/[,+>*\/]/.test(he)?$e(null,"select-op"):he=="."&&ae.match(/^-?[_a-z][_a-z0-9-]*/i)?$e("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(he)?$e(null,he):ae.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(ae.current())&&(je.tokenize=_t),$e("variable callee","variable")):/[\w\\\-]/.test(he)?(ae.eatWhile(/[\w\\\-]/),$e("property","word")):$e(null,null)}function Yt(ae){return function(je,he){for(var kt=!1,Ye;(Ye=je.next())!=null;){if(Ye==ae&&!kt){ae==")"&&je.backUp(1);break}kt=!kt&&Ye=="\\"}return(Ye==ae||!kt&&ae!=")")&&(he.tokenize=null),$e("string","string")}}function _t(ae,je){return ae.next(),ae.match(/^\s*[\"\')]/,!1)?je.tokenize=null:je.tokenize=Yt(")"),$e(null,"(")}function xt(ae,je,he){this.type=ae,this.indent=je,this.prev=he}function tt(ae,je,he,kt){return ae.context=new xt(he,je.indentation()+(kt===!1?0:le),ae.context),he}function Ue(ae){return ae.context.prev&&(ae.context=ae.context.prev),ae.context.type}function vt(ae,je,he){return ut[he.context.type](ae,je,he)}function yt(ae,je,he,kt){for(var Ye=kt||1;Ye>0;Ye--)he.context=he.context.prev;return vt(ae,je,he)}function Qe(ae){var je=ae.current().toLowerCase();Ie.hasOwnProperty(je)?et="atom":ke.hasOwnProperty(je)?et="keyword":et="variable"}var ut={};return ut.top=function(ae,je,he){if(ae=="{")return tt(he,je,"block");if(ae=="}"&&he.context.prev)return Ue(he);if(we&&/@component/i.test(ae))return tt(he,je,"atComponentBlock");if(/^@(-moz-)?document$/i.test(ae))return tt(he,je,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(ae))return tt(he,je,"atBlock");if(/^@(font-face|counter-style)/i.test(ae))return he.stateArg=ae,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(ae))return"keyframes";if(ae&&ae.charAt(0)=="@")return tt(he,je,"at");if(ae=="hash")et="builtin";else if(ae=="word")et="tag";else{if(ae=="variable-definition")return"maybeprop";if(ae=="interpolation")return tt(he,je,"interpolation");if(ae==":")return"pseudo";if(qe&&ae=="(")return tt(he,je,"parens")}return he.context.type},ut.block=function(ae,je,he){if(ae=="word"){var kt=je.current().toLowerCase();return L.hasOwnProperty(kt)?(et="property","maybeprop"):$.hasOwnProperty(kt)?(et=Be?"string-2":"property","maybeprop"):qe?(et=je.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(et+=" error","maybeprop")}else return ae=="meta"?"block":!qe&&(ae=="hash"||ae=="qualifier")?(et="error","block"):ut.top(ae,je,he)},ut.maybeprop=function(ae,je,he){return ae==":"?tt(he,je,"prop"):vt(ae,je,he)},ut.prop=function(ae,je,he){if(ae==";")return Ue(he);if(ae=="{"&&qe)return tt(he,je,"propBlock");if(ae=="}"||ae=="{")return yt(ae,je,he);if(ae=="(")return tt(he,je,"parens");if(ae=="hash"&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(je.current()))et+=" error";else if(ae=="word")Qe(je);else if(ae=="interpolation")return tt(he,je,"interpolation");return"prop"},ut.propBlock=function(ae,je,he){return ae=="}"?Ue(he):ae=="word"?(et="property","maybeprop"):he.context.type},ut.parens=function(ae,je,he){return ae=="{"||ae=="}"?yt(ae,je,he):ae==")"?Ue(he):ae=="("?tt(he,je,"parens"):ae=="interpolation"?tt(he,je,"interpolation"):(ae=="word"&&Qe(je),"parens")},ut.pseudo=function(ae,je,he){return ae=="meta"?"pseudo":ae=="word"?(et="variable-3",he.context.type):vt(ae,je,he)},ut.documentTypes=function(ae,je,he){return ae=="word"&&E.hasOwnProperty(je.current())?(et="tag",he.context.type):ut.atBlock(ae,je,he)},ut.atBlock=function(ae,je,he){if(ae=="(")return tt(he,je,"atBlock_parens");if(ae=="}"||ae==";")return yt(ae,je,he);if(ae=="{")return Ue(he)&&tt(he,je,qe?"block":"top");if(ae=="interpolation")return tt(he,je,"interpolation");if(ae=="word"){var kt=je.current().toLowerCase();kt=="only"||kt=="not"||kt=="and"||kt=="or"?et="keyword":ee.hasOwnProperty(kt)?et="attribute":Q.hasOwnProperty(kt)?et="property":R.hasOwnProperty(kt)?et="keyword":L.hasOwnProperty(kt)?et="property":$.hasOwnProperty(kt)?et=Be?"string-2":"property":Ie.hasOwnProperty(kt)?et="atom":ke.hasOwnProperty(kt)?et="keyword":et="error"}return he.context.type},ut.atComponentBlock=function(ae,je,he){return ae=="}"?yt(ae,je,he):ae=="{"?Ue(he)&&tt(he,je,qe?"block":"top",!1):(ae=="word"&&(et="error"),he.context.type)},ut.atBlock_parens=function(ae,je,he){return ae==")"?Ue(he):ae=="{"||ae=="}"?yt(ae,je,he,2):ut.atBlock(ae,je,he)},ut.restricted_atBlock_before=function(ae,je,he){return ae=="{"?tt(he,je,"restricted_atBlock"):ae=="word"&&he.stateArg=="@counter-style"?(et="variable","restricted_atBlock_before"):vt(ae,je,he)},ut.restricted_atBlock=function(ae,je,he){return ae=="}"?(he.stateArg=null,Ue(he)):ae=="word"?(he.stateArg=="@font-face"&&!O.hasOwnProperty(je.current().toLowerCase())||he.stateArg=="@counter-style"&&!Z.hasOwnProperty(je.current().toLowerCase())?et="error":et="property","maybeprop"):"restricted_atBlock"},ut.keyframes=function(ae,je,he){return ae=="word"?(et="variable","keyframes"):ae=="{"?tt(he,je,"top"):vt(ae,je,he)},ut.at=function(ae,je,he){return ae==";"?Ue(he):ae=="{"||ae=="}"?yt(ae,je,he):(ae=="word"?et="tag":ae=="hash"&&(et="builtin"),"at")},ut.interpolation=function(ae,je,he){return ae=="}"?Ue(he):ae=="{"||ae==";"?yt(ae,je,he):(ae=="word"?et="variable":ae!="variable"&&ae!="("&&ae!=")"&&(et="error"),"interpolation")},{startState:function(ae){return{tokenize:null,state:Ce?"block":"top",stateArg:null,context:new xt(Ce?"block":"top",ae||0,null)}},token:function(ae,je){if(!je.tokenize&&ae.eatSpace())return null;var he=(je.tokenize||Ft)(ae,je);return he&&typeof he=="object"&&(Ke=he[1],he=he[0]),et=he,Ke!="comment"&&(je.state=ut[je.state](Ke,ae,je)),et},indent:function(ae,je){var he=ae.context,kt=je&&je.charAt(0),Ye=he.indent;return he.type=="prop"&&(kt=="}"||kt==")")&&(he=he.prev),he.prev&&(kt=="}"&&(he.type=="block"||he.type=="top"||he.type=="interpolation"||he.type=="restricted_atBlock")?(he=he.prev,Ye=he.indent):(kt==")"&&(he.type=="parens"||he.type=="atBlock_parens")||kt=="{"&&(he.type=="at"||he.type=="atBlock"))&&(Ye=Math.max(0,he.indent-le))),Ye},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:Oe,fold:"brace"}});function g(_e){for(var oe={},Ce=0;Ce<_e.length;++Ce)oe[_e[Ce].toLowerCase()]=!0;return oe}var x=["domain","regexp","url","url-prefix"],b=g(x),_=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],T=g(_),S=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],j=g(S),N=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],W=g(N),A=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],J=g(A),D=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],G=g(D),X=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],M=g(X),F=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],q=g(F),H=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],Y=g(H),pe=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],V=g(pe),ye=x.concat(_).concat(S).concat(N).concat(A).concat(D).concat(H).concat(pe);d.registerHelper("hintWords","css",ye);function ze(_e,oe){for(var Ce=!1,le;(le=_e.next())!=null;){if(Ce&&le=="/"){oe.tokenize=null;break}Ce=le=="*"}return["comment","comment"]}d.defineMIME("text/css",{documentTypes:b,mediaTypes:T,mediaFeatures:j,mediaValueKeywords:W,propertyKeywords:J,nonStandardPropertyKeywords:G,fontProperties:M,counterDescriptors:q,colorKeywords:Y,valueKeywords:V,tokenHooks:{"/":function(_e,oe){return _e.eat("*")?(oe.tokenize=ze,ze(_e,oe)):!1}},name:"css"}),d.defineMIME("text/x-scss",{mediaTypes:T,mediaFeatures:j,mediaValueKeywords:W,propertyKeywords:J,nonStandardPropertyKeywords:G,colorKeywords:Y,valueKeywords:V,fontProperties:M,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(_e,oe){return _e.eat("/")?(_e.skipToEnd(),["comment","comment"]):_e.eat("*")?(oe.tokenize=ze,ze(_e,oe)):["operator","operator"]},":":function(_e){return _e.match(/^\s*\{/,!1)?[null,null]:!1},$:function(_e){return _e.match(/^[\w-]+/),_e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(_e){return _e.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),d.defineMIME("text/x-less",{mediaTypes:T,mediaFeatures:j,mediaValueKeywords:W,propertyKeywords:J,nonStandardPropertyKeywords:G,colorKeywords:Y,valueKeywords:V,fontProperties:M,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(_e,oe){return _e.eat("/")?(_e.skipToEnd(),["comment","comment"]):_e.eat("*")?(oe.tokenize=ze,ze(_e,oe)):["operator","operator"]},"@":function(_e){return _e.eat("{")?[null,"interpolation"]:_e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)?!1:(_e.eatWhile(/[\w\\\-]/),_e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),d.defineMIME("text/x-gss",{documentTypes:b,mediaTypes:T,mediaFeatures:j,propertyKeywords:J,nonStandardPropertyKeywords:G,fontProperties:M,counterDescriptors:q,colorKeywords:Y,valueKeywords:V,supportsAtComponent:!0,tokenHooks:{"/":function(_e,oe){return _e.eat("*")?(oe.tokenize=ze,ze(_e,oe)):!1}},name:"css",helperType:"gss"})})})()),Cf.exports}wm();var jf={exports:{}},Nf;function $x(){return Nf||(Nf=1,(function(l,u){(function(d){d(rs(),bm(),xm(),wm())})(function(d){var g={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function x(W,A,J){var D=W.current(),G=D.search(A);return G>-1?W.backUp(D.length-G):D.match(/<\/?$/)&&(W.backUp(D.length),W.match(A,!1)||W.match(D)),J}var b={};function _(W){var A=b[W];return A||(b[W]=new RegExp("\\s+"+W+`\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))}function T(W,A){var J=W.match(_(A));return J?/^\s*(.*?)\s*$/.exec(J[2])[1]:""}function S(W,A){return new RegExp((A?"^":"")+"</\\s*"+W+"\\s*>","i")}function j(W,A){for(var J in W)for(var D=A[J]||(A[J]=[]),G=W[J],X=G.length-1;X>=0;X--)D.unshift(G[X])}function N(W,A){for(var J=0;J<W.length;J++){var D=W[J];if(!D[0]||D[1].test(T(A,D[0])))return D[2]}}d.defineMode("htmlmixed",function(W,A){var J=d.getMode(W,{name:"xml",htmlMode:!0,multilineTagIndentFactor:A.multilineTagIndentFactor,multilineTagIndentPastTag:A.multilineTagIndentPastTag,allowMissingTagName:A.allowMissingTagName}),D={},G=A&&A.tags,X=A&&A.scriptTypes;if(j(g,D),G&&j(G,D),X)for(var M=X.length-1;M>=0;M--)D.script.unshift(["type",X[M].matches,X[M].mode]);function F(q,H){var Y=J.token(q,H.htmlState),pe=/\btag\b/.test(Y),V;if(pe&&!/[<>\s\/]/.test(q.current())&&(V=H.htmlState.tagName&&H.htmlState.tagName.toLowerCase())&&D.hasOwnProperty(V))H.inTag=V+" ";else if(H.inTag&&pe&&/>$/.test(q.current())){var ye=/^([\S]+) (.*)/.exec(H.inTag);H.inTag=null;var ze=q.current()==">"&&N(D[ye[1]],ye[2]),_e=d.getMode(W,ze),oe=S(ye[1],!0),Ce=S(ye[1],!1);H.token=function(le,ve){return le.match(oe,!1)?(ve.token=F,ve.localState=ve.localMode=null,null):x(le,Ce,ve.localMode.token(le,ve.localState))},H.localMode=_e,H.localState=d.startState(_e,J.indent(H.htmlState,"",""))}else H.inTag&&(H.inTag+=q.current(),q.eol()&&(H.inTag+=" "));return Y}return{startState:function(){var q=d.startState(J);return{token:F,inTag:null,localMode:null,localState:null,htmlState:q}},copyState:function(q){var H;return q.localState&&(H=d.copyState(q.localMode,q.localState)),{token:q.token,inTag:q.inTag,localMode:q.localMode,localState:H,htmlState:d.copyState(J,q.htmlState)}},token:function(q,H){return H.token(q,H)},indent:function(q,H,Y){return!q.localMode||/^\s*<\//.test(H)?J.indent(q.htmlState,H,Y):q.localMode.indent?q.localMode.indent(q.localState,H,Y):d.Pass},innerMode:function(q){return{state:q.localState||q.htmlState,mode:q.localMode||J}}}},"xml","javascript","css"),d.defineMIME("text/html","htmlmixed")})})()),jf.exports}$x();var Ef={exports:{}},Lf;function Gx(){return Lf||(Lf=1,(function(l,u){(function(d){d(rs())})(function(d){var g={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},x=d.Pos;d.defineOption("autoCloseBrackets",!1,function(M,F,q){q&&q!=d.Init&&(M.removeKeyMap(_),M.state.closeBrackets=null),F&&(T(b(F,"pairs")),M.state.closeBrackets=F,M.addKeyMap(_))});function b(M,F){return F=="pairs"&&typeof M=="string"?M:typeof M=="object"&&M[F]!=null?M[F]:g[F]}var _={Backspace:N,Enter:W};function T(M){for(var F=0;F<M.length;F++){var q=M.charAt(F),H="'"+q+"'";_[H]||(_[H]=S(q))}}T(g.pairs+"`");function S(M){return function(F){return D(F,M)}}function j(M){var F=M.state.closeBrackets;if(!F||F.override)return F;var q=M.getModeAt(M.getCursor());return q.closeBrackets||F}function N(M){var F=j(M);if(!F||M.getOption("disableInput"))return d.Pass;for(var q=b(F,"pairs"),H=M.listSelections(),Y=0;Y<H.length;Y++){if(!H[Y].empty())return d.Pass;var pe=G(M,H[Y].head);if(!pe||q.indexOf(pe)%2!=0)return d.Pass}for(var Y=H.length-1;Y>=0;Y--){var V=H[Y].head;M.replaceRange("",x(V.line,V.ch-1),x(V.line,V.ch+1),"+delete")}}function W(M){var F=j(M),q=F&&b(F,"explode");if(!q||M.getOption("disableInput"))return d.Pass;for(var H=M.listSelections(),Y=0;Y<H.length;Y++){if(!H[Y].empty())return d.Pass;var pe=G(M,H[Y].head);if(!pe||q.indexOf(pe)%2!=0)return d.Pass}M.operation(function(){var V=M.lineSeparator()||`
`;M.replaceSelection(V+V,null),A(M,-1),H=M.listSelections();for(var ye=0;ye<H.length;ye++){var ze=H[ye].head.line;M.indentLine(ze,null,!0),M.indentLine(ze+1,null,!0)}})}function A(M,F){for(var q=[],H=M.listSelections(),Y=0,pe=0;pe<H.length;pe++){var V=H[pe];V.head==M.getCursor()&&(Y=pe);var ye=V.head.ch||F>0?{line:V.head.line,ch:V.head.ch+F}:{line:V.head.line-1};q.push({anchor:ye,head:ye})}M.setSelections(q,Y)}function J(M){var F=d.cmpPos(M.anchor,M.head)>0;return{anchor:new x(M.anchor.line,M.anchor.ch+(F?-1:1)),head:new x(M.head.line,M.head.ch+(F?1:-1))}}function D(M,F){var q=j(M);if(!q||M.getOption("disableInput"))return d.Pass;var H=b(q,"pairs"),Y=H.indexOf(F);if(Y==-1)return d.Pass;for(var pe=b(q,"closeBefore"),V=b(q,"triples"),ye=H.charAt(Y+1)==F,ze=M.listSelections(),_e=Y%2==0,oe,Ce=0;Ce<ze.length;Ce++){var le=ze[Ce],ve=le.head,E,ee=M.getRange(ve,x(ve.line,ve.ch+1));if(_e&&!le.empty())E="surround";else if((ye||!_e)&&ee==F)ye&&X(M,ve)?E="both":V.indexOf(F)>=0&&M.getRange(ve,x(ve.line,ve.ch+3))==F+F+F?E="skipThree":E="skip";else if(ye&&ve.ch>1&&V.indexOf(F)>=0&&M.getRange(x(ve.line,ve.ch-2),ve)==F+F){if(ve.ch>2&&/\bstring/.test(M.getTokenTypeAt(x(ve.line,ve.ch-2))))return d.Pass;E="addFour"}else if(ye){var Q=ve.ch==0?" ":M.getRange(x(ve.line,ve.ch-1),ve);if(!d.isWordChar(ee)&&Q!=F&&!d.isWordChar(Q))E="both";else return d.Pass}else if(_e&&(ee.length===0||/\s/.test(ee)||pe.indexOf(ee)>-1))E="both";else return d.Pass;if(!oe)oe=E;else if(oe!=E)return d.Pass}var R=Y%2?H.charAt(Y-1):F,L=Y%2?F:H.charAt(Y+1);M.operation(function(){if(oe=="skip")A(M,1);else if(oe=="skipThree")A(M,3);else if(oe=="surround"){for(var $=M.getSelections(),O=0;O<$.length;O++)$[O]=R+$[O]+L;M.replaceSelections($,"around"),$=M.listSelections().slice();for(var O=0;O<$.length;O++)$[O]=J($[O]);M.setSelections($)}else oe=="both"?(M.replaceSelection(R+L,null),M.triggerElectric(R+L),A(M,-1)):oe=="addFour"&&(M.replaceSelection(R+R+R+R,"before"),A(M,1))})}function G(M,F){var q=M.getRange(x(F.line,F.ch-1),x(F.line,F.ch+1));return q.length==2?q:null}function X(M,F){var q=M.getTokenAt(x(F.line,F.ch+1));return/\bstring/.test(q.type)&&q.start==F.ch&&(F.ch==0||!/\bstring/.test(M.getTokenTypeAt(F)))}})})()),Ef.exports}Gx();var Pf={exports:{}},Af;function Yx(){return Af||(Af=1,(function(l,u){(function(d){d(rs())})(function(d){var g=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),x=d.Pos,b={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function _(A){return A&&A.bracketRegex||/[(){}[\]]/}function T(A,J,D){var G=A.getLineHandle(J.line),X=J.ch-1,M=D&&D.afterCursor;M==null&&(M=/(^| )cm-fat-cursor($| )/.test(A.getWrapperElement().className));var F=_(D),q=!M&&X>=0&&F.test(G.text.charAt(X))&&b[G.text.charAt(X)]||F.test(G.text.charAt(X+1))&&b[G.text.charAt(++X)];if(!q)return null;var H=q.charAt(1)==">"?1:-1;if(D&&D.strict&&H>0!=(X==J.ch))return null;var Y=A.getTokenTypeAt(x(J.line,X+1)),pe=S(A,x(J.line,X+(H>0?1:0)),H,Y,D);return pe==null?null:{from:x(J.line,X),to:pe&&pe.pos,match:pe&&pe.ch==q.charAt(0),forward:H>0}}function S(A,J,D,G,X){for(var M=X&&X.maxScanLineLength||1e4,F=X&&X.maxScanLines||1e3,q=[],H=_(X),Y=D>0?Math.min(J.line+F,A.lastLine()+1):Math.max(A.firstLine()-1,J.line-F),pe=J.line;pe!=Y;pe+=D){var V=A.getLine(pe);if(V){var ye=D>0?0:V.length-1,ze=D>0?V.length:-1;if(!(V.length>M))for(pe==J.line&&(ye=J.ch-(D<0?1:0));ye!=ze;ye+=D){var _e=V.charAt(ye);if(H.test(_e)&&(G===void 0||(A.getTokenTypeAt(x(pe,ye+1))||"")==(G||""))){var oe=b[_e];if(oe&&oe.charAt(1)==">"==D>0)q.push(_e);else if(q.length)q.pop();else return{pos:x(pe,ye),ch:_e}}}}}return pe-D==(D>0?A.lastLine():A.firstLine())?!1:null}function j(A,J,D){for(var G=A.state.matchBrackets.maxHighlightLineLength||1e3,X=D&&D.highlightNonMatching,M=[],F=A.listSelections(),q=0;q<F.length;q++){var H=F[q].empty()&&T(A,F[q].head,D);if(H&&(H.match||X!==!1)&&A.getLine(H.from.line).length<=G){var Y=H.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";M.push(A.markText(H.from,x(H.from.line,H.from.ch+1),{className:Y})),H.to&&A.getLine(H.to.line).length<=G&&M.push(A.markText(H.to,x(H.to.line,H.to.ch+1),{className:Y}))}}if(M.length){g&&A.state.focused&&A.focus();var pe=function(){A.operation(function(){for(var V=0;V<M.length;V++)M[V].clear()})};if(J)setTimeout(pe,800);else return pe}}function N(A){A.operation(function(){A.state.matchBrackets.currentlyHighlighted&&(A.state.matchBrackets.currentlyHighlighted(),A.state.matchBrackets.currentlyHighlighted=null),A.state.matchBrackets.currentlyHighlighted=j(A,!1,A.state.matchBrackets)})}function W(A){A.state.matchBrackets&&A.state.matchBrackets.currentlyHighlighted&&(A.state.matchBrackets.currentlyHighlighted(),A.state.matchBrackets.currentlyHighlighted=null)}d.defineOption("matchBrackets",!1,function(A,J,D){D&&D!=d.Init&&(A.off("cursorActivity",N),A.off("focus",N),A.off("blur",W),W(A)),J&&(A.state.matchBrackets=typeof J=="object"?J:{},A.on("cursorActivity",N),A.on("focus",N),A.on("blur",W))}),d.defineExtension("matchBrackets",function(){j(this,!0)}),d.defineExtension("findMatchingBracket",function(A,J,D){return(D||typeof J=="boolean")&&(D?(D.strict=J,J=D):J=J?{strict:!0}:null),T(this,A,J)}),d.defineExtension("scanForBracket",function(A,J,D,G){return S(this,A,J,D,G)})})})()),Pf.exports}Yx();var Rf={exports:{}},If;function Vx(){return If||(If=1,(function(l,u){(function(d){d(rs())})(function(d){var g="CodeMirror-hint",x="CodeMirror-hint-active";d.showHint=function(M,F,q){if(!F)return M.showHint(q);q&&q.async&&(F.async=!0);var H={hint:F};if(q)for(var Y in q)H[Y]=q[Y];return M.showHint(H)},d.defineExtension("showHint",function(M){M=S(this,this.getCursor("start"),M);var F=this.listSelections();if(!(F.length>1)){if(this.somethingSelected()){if(!M.hint.supportsSelection)return;for(var q=0;q<F.length;q++)if(F[q].head.line!=F[q].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var H=this.state.completionActive=new b(this,M);H.options.hint&&(d.signal(this,"startCompletion",this),H.update(!0))}}),d.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function b(M,F){if(this.cm=M,this.options=F,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var q=this;M.on("cursorActivity",this.activityFunc=function(){q.cursorActivity()})}}var _=window.requestAnimationFrame||function(M){return setTimeout(M,1e3/60)},T=window.cancelAnimationFrame||clearTimeout;b.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&d.signal(this.data,"close"),this.widget&&this.widget.close(),d.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(M,F){var q=M.list[F],H=this;this.cm.operation(function(){q.hint?q.hint(H.cm,M,q):H.cm.replaceRange(j(q),q.from||M.from,q.to||M.to,"complete"),d.signal(M,"pick",q),H.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(T(this.debounce),this.debounce=0);var M=this.startPos;this.data&&(M=this.data.from);var F=this.cm.getCursor(),q=this.cm.getLine(F.line);if(F.line!=this.startPos.line||q.length-F.ch!=this.startLen-this.startPos.ch||F.ch<M.ch||this.cm.somethingSelected()||!F.ch||this.options.closeCharacters.test(q.charAt(F.ch-1)))this.close();else{var H=this;this.debounce=_(function(){H.update()}),this.widget&&this.widget.disable()}},update:function(M){if(this.tick!=null){var F=this,q=++this.tick;D(this.options.hint,this.cm,this.options,function(H){F.tick==q&&F.finishUpdate(H,M)})}},finishUpdate:function(M,F){this.data&&d.signal(this.data,"update");var q=this.widget&&this.widget.picked||F&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=M,M&&M.list.length&&(q&&M.list.length==1?this.pick(M,0):(this.widget=new A(this,M),d.signal(M,"shown")))}};function S(M,F,q){var H=M.options.hintOptions,Y={};for(var pe in X)Y[pe]=X[pe];if(H)for(var pe in H)H[pe]!==void 0&&(Y[pe]=H[pe]);if(q)for(var pe in q)q[pe]!==void 0&&(Y[pe]=q[pe]);return Y.hint.resolve&&(Y.hint=Y.hint.resolve(M,F)),Y}function j(M){return typeof M=="string"?M:M.text}function N(M,F){var q={Up:function(){F.moveFocus(-1)},Down:function(){F.moveFocus(1)},PageUp:function(){F.moveFocus(-F.menuSize()+1,!0)},PageDown:function(){F.moveFocus(F.menuSize()-1,!0)},Home:function(){F.setFocus(0)},End:function(){F.setFocus(F.length-1)},Enter:F.pick,Tab:F.pick,Esc:F.close},H=/Mac/.test(navigator.platform);H&&(q["Ctrl-P"]=function(){F.moveFocus(-1)},q["Ctrl-N"]=function(){F.moveFocus(1)});var Y=M.options.customKeys,pe=Y?{}:q;function V(_e,oe){var Ce;typeof oe!="string"?Ce=function(le){return oe(le,F)}:q.hasOwnProperty(oe)?Ce=q[oe]:Ce=oe,pe[_e]=Ce}if(Y)for(var ye in Y)Y.hasOwnProperty(ye)&&V(ye,Y[ye]);var ze=M.options.extraKeys;if(ze)for(var ye in ze)ze.hasOwnProperty(ye)&&V(ye,ze[ye]);return pe}function W(M,F){for(;F&&F!=M;){if(F.nodeName.toUpperCase()==="LI"&&F.parentNode==M)return F;F=F.parentNode}}function A(M,F){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=M,this.data=F,this.picked=!1;var q=this,H=M.cm,Y=H.getInputField().ownerDocument,pe=Y.defaultView||Y.parentWindow,V=this.hints=Y.createElement("ul");V.setAttribute("role","listbox"),V.setAttribute("aria-expanded","true"),V.id=this.id;var ye=M.cm.options.theme;V.className="CodeMirror-hints "+ye,this.selectedHint=F.selectedHint||0;for(var ze=F.list,_e=0;_e<ze.length;++_e){var oe=V.appendChild(Y.createElement("li")),Ce=ze[_e],le=g+(_e!=this.selectedHint?"":" "+x);Ce.className!=null&&(le=Ce.className+" "+le),oe.className=le,_e==this.selectedHint&&oe.setAttribute("aria-selected","true"),oe.id=this.id+"-"+_e,oe.setAttribute("role","option"),Ce.render?Ce.render(oe,F,Ce):oe.appendChild(Y.createTextNode(Ce.displayText||j(Ce))),oe.hintId=_e}var ve=M.options.container||Y.body,E=H.cursorCoords(M.options.alignWithWord?F.from:null),ee=E.left,Q=E.bottom,R=!0,L=0,$=0;if(ve!==Y.body){var O=["absolute","relative","fixed"].indexOf(pe.getComputedStyle(ve).position)!==-1,Z=O?ve:ve.offsetParent,ke=Z.getBoundingClientRect(),Ie=Y.body.getBoundingClientRect();L=ke.left-Ie.left-Z.scrollLeft,$=ke.top-Ie.top-Z.scrollTop}V.style.left=ee-L+"px",V.style.top=Q-$+"px";var qe=pe.innerWidth||Math.max(Y.body.offsetWidth,Y.documentElement.offsetWidth),Oe=pe.innerHeight||Math.max(Y.body.offsetHeight,Y.documentElement.offsetHeight);ve.appendChild(V),H.getInputField().setAttribute("aria-autocomplete","list"),H.getInputField().setAttribute("aria-owns",this.id),H.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var we=M.options.moveOnOverlap?V.getBoundingClientRect():new DOMRect,Be=M.options.paddingForScrollbar?V.scrollHeight>V.clientHeight+1:!1,Ke;setTimeout(function(){Ke=H.getScrollInfo()});var et=we.bottom-Oe;if(et>0){var $e=we.bottom-we.top,Ft=we.top-(E.bottom-E.top)-2;Oe-we.top<Ft?($e>Ft&&(V.style.height=($e=Ft)+"px"),V.style.top=(Q=E.top-$e)-$+"px",R=!1):V.style.height=Oe-we.top-2+"px"}var Yt=we.right-qe;if(Be&&(Yt+=H.display.nativeBarWidth),Yt>0&&(we.right-we.left>qe&&(V.style.width=qe-5+"px",Yt-=we.right-we.left-qe),V.style.left=(ee=Math.max(E.left-Yt-L,0))+"px"),Be)for(var _t=V.firstChild;_t;_t=_t.nextSibling)_t.style.paddingRight=H.display.nativeBarWidth+"px";if(H.addKeyMap(this.keyMap=N(M,{moveFocus:function(Ue,vt){q.changeActive(q.selectedHint+Ue,vt)},setFocus:function(Ue){q.changeActive(Ue)},menuSize:function(){return q.screenAmount()},length:ze.length,close:function(){M.close()},pick:function(){q.pick()},data:F})),M.options.closeOnUnfocus){var xt;H.on("blur",this.onBlur=function(){xt=setTimeout(function(){M.close()},100)}),H.on("focus",this.onFocus=function(){clearTimeout(xt)})}H.on("scroll",this.onScroll=function(){var Ue=H.getScrollInfo(),vt=H.getWrapperElement().getBoundingClientRect();Ke||(Ke=H.getScrollInfo());var yt=Q+Ke.top-Ue.top,Qe=yt-(pe.pageYOffset||(Y.documentElement||Y.body).scrollTop);if(R||(Qe+=V.offsetHeight),Qe<=vt.top||Qe>=vt.bottom)return M.close();V.style.top=yt+"px",V.style.left=ee+Ke.left-Ue.left+"px"}),d.on(V,"dblclick",function(Ue){var vt=W(V,Ue.target||Ue.srcElement);vt&&vt.hintId!=null&&(q.changeActive(vt.hintId),q.pick())}),d.on(V,"click",function(Ue){var vt=W(V,Ue.target||Ue.srcElement);vt&&vt.hintId!=null&&(q.changeActive(vt.hintId),M.options.completeOnSingleClick&&q.pick())}),d.on(V,"mousedown",function(){setTimeout(function(){H.focus()},20)});var tt=this.getSelectedHintRange();return(tt.from!==0||tt.to!==0)&&this.scrollToActive(),d.signal(F,"select",ze[this.selectedHint],V.childNodes[this.selectedHint]),!0}A.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var M=this.completion.cm.getInputField();M.removeAttribute("aria-activedescendant"),M.removeAttribute("aria-owns");var F=this.completion.cm;this.completion.options.closeOnUnfocus&&(F.off("blur",this.onBlur),F.off("focus",this.onFocus)),F.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var M=this;this.keyMap={Enter:function(){M.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(M,F){if(M>=this.data.list.length?M=F?this.data.list.length-1:0:M<0&&(M=F?0:this.data.list.length-1),this.selectedHint!=M){var q=this.hints.childNodes[this.selectedHint];q&&(q.className=q.className.replace(" "+x,""),q.removeAttribute("aria-selected")),q=this.hints.childNodes[this.selectedHint=M],q.className+=" "+x,q.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",q.id),this.scrollToActive(),d.signal(this.data,"select",this.data.list[this.selectedHint],q)}},scrollToActive:function(){var M=this.getSelectedHintRange(),F=this.hints.childNodes[M.from],q=this.hints.childNodes[M.to],H=this.hints.firstChild;F.offsetTop<this.hints.scrollTop?this.hints.scrollTop=F.offsetTop-H.offsetTop:q.offsetTop+q.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=q.offsetTop+q.offsetHeight-this.hints.clientHeight+H.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var M=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-M),to:Math.min(this.data.list.length-1,this.selectedHint+M)}}};function J(M,F){if(!M.somethingSelected())return F;for(var q=[],H=0;H<F.length;H++)F[H].supportsSelection&&q.push(F[H]);return q}function D(M,F,q,H){if(M.async)M(F,H,q);else{var Y=M(F,q);Y&&Y.then?Y.then(H):H(Y)}}function G(M,F){var q=M.getHelpers(F,"hint"),H;if(q.length){var Y=function(pe,V,ye){var ze=J(pe,q);function _e(oe){if(oe==ze.length)return V(null);D(ze[oe],pe,ye,function(Ce){Ce&&Ce.list.length>0?V(Ce):_e(oe+1)})}_e(0)};return Y.async=!0,Y.supportsSelection=!0,Y}else return(H=M.getHelper(M.getCursor(),"hintWords"))?function(pe){return d.hint.fromList(pe,{words:H})}:d.hint.anyword?function(pe,V){return d.hint.anyword(pe,V)}:function(){}}d.registerHelper("hint","auto",{resolve:G}),d.registerHelper("hint","fromList",function(M,F){var q=M.getCursor(),H=M.getTokenAt(q),Y,pe=d.Pos(q.line,H.start),V=q;H.start<q.ch&&/\w/.test(H.string.charAt(q.ch-H.start-1))?Y=H.string.substr(0,q.ch-H.start):(Y="",pe=q);for(var ye=[],ze=0;ze<F.words.length;ze++){var _e=F.words[ze];_e.slice(0,Y.length)==Y&&ye.push(_e)}if(ye.length)return{list:ye,from:pe,to:V}}),d.commands.autocomplete=d.showHint;var X={hint:d.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};d.defineOption("hintOptions",null)})})()),Rf.exports}Vx();var Of={exports:{}},Mf;function Jx(){return Mf||(Mf=1,(function(l,u){(function(d){d(rs())})(function(d){var g=/[\w$]+/,x=500;d.registerHelper("hint","anyword",function(b,_){for(var T=_&&_.word||g,S=_&&_.range||x,j=b.getCursor(),N=b.getLine(j.line),W=j.ch,A=W;A&&T.test(N.charAt(A-1));)--A;for(var J=A!=W&&N.slice(A,W),D=_&&_.list||[],G={},X=new RegExp(T.source,"g"),M=-1;M<=1;M+=2)for(var F=j.line,q=Math.min(Math.max(F+M*S,b.firstLine()),b.lastLine())+M;F!=q;F+=M)for(var H=b.getLine(F),Y;Y=X.exec(H);)F==j.line&&Y[0]===J||(!J||Y[0].lastIndexOf(J,0)==0)&&!Object.prototype.hasOwnProperty.call(G,Y[0])&&(G[Y[0]]=!0,D.push(Y[0]));return{list:D,from:d.Pos(j.line,A),to:d.Pos(j.line,W)}})})})()),Of.exports}Jx();function Xx(l){return l==="python"?"python":l==="csharp"?"text/x-csharp":l==="java"?"text/x-java":l==="jsx"?{name:"javascript",jsx:!0}:l==="javascript"?"javascript":l==="html"?"htmlmixed":l==="css"?"css":"text/plain"}function km({value:l,onChange:u,language:d}){const g=Te.useRef(null),x=Te.useRef(null),b=Te.useRef(u);return b.current=u,Te.useEffect(()=>{const _=gf.fromTextArea(g.current,{mode:Xx(d),lineNumbers:!0,lineWrapping:!1,indentUnit:4,tabSize:4,indentWithTabs:!1,smartIndent:!0,electricChars:!0,autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,extraKeys:{Tab(S){if(S.somethingSelected())S.execCommand("indentMore");else{const j=S.getOption("indentUnit")-S.getCursor().ch%S.getOption("indentUnit");S.replaceSelection(" ".repeat(j),"end")}},"Shift-Tab":S=>S.execCommand("indentLess"),"Ctrl-Space":S=>S.showHint({hint:gf.hint.anyword,completeSingle:!1})}});_.getInputField().setAttribute("aria-label","Code editor"),_.on("change",S=>{var j;return(j=b.current)==null?void 0:j.call(b,S.getValue())}),x.current=_;const T=typeof ResizeObserver<"u"?new ResizeObserver(()=>_.refresh()):null;return T==null||T.observe(_.getWrapperElement()),()=>{T==null||T.disconnect(),_.toTextArea(),x.current=null}},[d]),Te.useEffect(()=>{const _=x.current;if(_&&_.getValue()!==l){const T=_.getCursor();_.setValue(l??""),_.setCursor(T)}},[l]),p.jsx("div",{className:"code-editor-wrap",children:p.jsx("textarea",{ref:g,"aria-label":"Code editor",defaultValue:l,spellCheck:!1})})}const fd=l=>String(l??"").replace(/\r\n/g,`
`).replace(/\n$/,"");function Qx(l){const u=Array.isArray(l)?l:[];return{passed:u.filter(d=>d.passed===!0).length,total:u.length}}function Df(l,u){const d=String(l||"").split(/\r?\n/).find(x=>x.startsWith("PUBLIC_CHECK_RESULTS="));if(!d)throw new Error("Python returned no example-check results. See Console for errors.");const g=JSON.parse(d.slice(21));if(!Array.isArray(g)||g.length!==u.length)throw new Error("Python did not finish every published example.");return u.map((x,b)=>({call:x.call||"Example "+(b+1),expected:String(x.expected??""),received:String(g[b].actual??""),error:String(g[b].error||""),passed:g[b].ok===!0}))}function Zx(l,u){return u.map((d,g)=>{var x,b,_,T;return{call:"main("+JSON.stringify(d.args||[])+")",expected:fd(d.expected),received:fd((x=l[g])==null?void 0:x.stdout),error:String(((b=l[g])==null?void 0:b.diagnostics)||((_=l[g])==null?void 0:_.stderr)||""),passed:((T=l[g])==null?void 0:T.success)===!0&&fd(l[g].stdout)===fd(d.expected)}})}function eb(l,u,d){return d(l,u.length).map(x=>({call:u[x.index].call,expected:x.expected,received:x.received,error:x.error,passed:x.passed}))}function Sm(l){return(l||[]).map((u,d)=>({call:String(u.call||u.label||"Check "+(d+1)),expected:String(u.expected??"Requirement met"),received:String(u.received??(u.pass===!0||u.passed===!0?"Requirement met":"Not yet met")),error:String(u.error||""),passed:u.pass===!0||u.passed===!0}))}function tb(l){var u;return((u=/^\s*(?:async\s+)?def\s+([A-Za-z_]\w*)\s*\(/m.exec(l))==null?void 0:u[1])||null}function rc(l,u){var d,g,x;return u==="python"?tb(l):u==="javascript"?((d=/(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:d[1])||null:u==="csharp"?((g=/\b(?:public\s+)?static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:g[1])||null:u==="java"&&((x=/\bpublic\s+static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:x[1])||null}const nb=rc;function Yp(l,u,d=null){if(typeof l=="string")return JSON.stringify(l);if(l===null)return"null";if(typeof l=="boolean")return String(l);if(typeof l=="number")return Number.isFinite(l)?String(l):"0";if(Array.isArray(l)){const g=l.every(S=>Number.isInteger(S)),x=l.every(S=>typeof S=="string"),b=l.every(S=>typeof S=="boolean"),_=l.length===0&&d?d:g?"int":x?"string":b?"bool":"double";return"new "+(u==="java"?_==="string"?"String":_==="bool"?"boolean":_:_)+"[]{"+l.map(S=>Yp(S,u)).join(",")+"}"}throw new Error("This example uses a data type unsupported by the browser checker.")}function Vp(l,u,d){var _;const g=rc(d,u)||rc(l.starter||"",u);if(!g)throw new Error("The checker could not find a function declaration.");const x=l.challengeExamples||[],b=(((_=x[0])==null?void 0:_.input)||[]).map((T,S)=>{const j=x.map(N=>{var W;return(W=N.input)==null?void 0:W[S]}).find(N=>Array.isArray(N)&&N.length>0);return Array.isArray(j)?typeof j[0]=="boolean"?"bool":typeof j[0]=="string"?"string":Number.isInteger(j[0])?"int":"double":null});return x.map(T=>({...T,call:g+"("+(T.input||[]).map((S,j)=>Yp(S,u,b[j])).join(", ")+")",expectedLiteral:Yp(T.expected,u),expected:String(T.expected)}))}function rb(l,u,d=!0){const g=rc(l,"python")||rc(u.starter||"","python");if(!g)throw new Error("Define the challenge function before running it.");const x=u.challengeExamples||[];return["import json as __json, io as __io, contextlib as __ctx","__source = "+JSON.stringify(l),"__cases = __json.loads("+JSON.stringify(JSON.stringify(d?x:x.slice(0,1)))+")","__results = []","for __case in __cases:","    try:",'        __env = {"__name__":"student"}','        with __ctx.redirect_stdout(__io.StringIO()): exec(compile(__source,"main.py","exec"),__env)',"        __actual = __env["+JSON.stringify(g)+'](*__case["input"])','        __ok = type(__actual) is type(__case["expected"]) and __actual == __case["expected"]','        __results.append({"ok":__ok,"actual":repr(__actual)[:300],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","error":type(__error).__name__+": "+str(__error)[:300]})','print("PUBLIC_CHECK_RESULTS="+__json.dumps(__results))'].join(`
`)}function ib(l,u){const d=Vp(u,"java",l);if(!d.length)throw new Error("No visible examples are available.");const g=d.map((x,b)=>`try{Object actual=Solution.${x.call}; Object expected=${x.expectedLiteral}; boolean ok=java.util.Objects.deepEquals(actual,expected); String received=java.util.Arrays.deepToString(new Object[]{actual}); received=received.substring(1,received.length()-1); System.out.println("PLAYGROUND_CASE:${b}:"+(ok?"1":"0")+":"+received);}catch(Throwable error){System.out.println("PLAYGROUND_CASE:${b}:0:ERROR "+error.getClass().getSimpleName()+" "+error.getMessage());}`);return l+`
class __PlaygroundPracticeChecks {public static void main(String[] args) {`+g.join(`
`)+"}}"}function sb(l,u){const d=String(l||"").split(/\r?\n/).filter(g=>g.startsWith("PLAYGROUND_CASE:"));if(d.length!==u.length)throw new Error("Java did not return all published examples.");return u.map((g,x)=>{const b=d[x],_=/^PLAYGROUND_CASE:(\d+):([01]):([\s\S]*)$/.exec(b);if(!_||Number(_[1])!==x)throw Error("Java returned invalid check data.");return{call:g.call,expected:g.expected,received:_[3],passed:_[2]==="1",error:_[3].startsWith("ERROR ")?_[3]:""}})}function _m({text:l="",checksText:u="",checkRows:d=null,points:g=null,language:x,activeTab:b,onTabChange:_,previewEnabled:T=!1,previewDoc:S="",previewRef:j}){const N=T?["Preview","Console","Checks"]:["Console","Checks"],W=Array.isArray(d),{passed:A,total:J}=Qx(d),D=Number.isFinite(Number(g))&&g!==null&&J?Number(g)*A/J:null;return p.jsxs("section",{className:"console-pane","aria-label":"Workspace output",children:[p.jsxs("div",{className:"console-heading",children:[p.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Output views",children:N.map(G=>p.jsxs("button",{type:"button",role:"tab","aria-selected":b===G,className:b===G?"active":"",onClick:()=>_(G),children:[G==="Console"&&p.jsx(Ey,{size:14}),G]},G))}),p.jsx("span",{children:"Practice · no submissions"})]}),["html","css","javascript","jsx"].includes(x)&&p.jsx("div",{className:"console-preview",hidden:!T||b!=="Preview",children:p.jsx("iframe",{ref:j,title:"Live student code preview",className:"live-preview-frame",sandbox:"allow-scripts allow-forms",srcDoc:S||"<p>Choose Run to preview your code.</p>"})}),b==="Checks"?p.jsx("div",{className:"practice-check-content",role:"tabpanel","aria-label":"Check feedback",children:W?p.jsxs(p.Fragment,{children:[p.jsxs("p",{className:"check-summary",children:["Checks ",p.jsxs("strong",{children:[A," of ",J," passing"]})]}),p.jsx("p",{className:"check-next",children:A===J?"All published practice checks passed.":"Revise your code, then check again."}),p.jsx("div",{className:"practice-check-cards",children:d.map((G,X)=>p.jsxs("article",{className:"practice-check-card "+(G.passed?"passed":"needs-revision"),children:[p.jsxs("header",{children:[p.jsx("code",{children:G.call||"Example "+(X+1)}),p.jsx("span",{children:G.passed?"Pass":"Review"})]}),p.jsxs("dl",{children:[p.jsx("dt",{children:"Expected"}),p.jsx("dd",{children:p.jsx("pre",{children:G.expected??""})}),p.jsx("dt",{children:G.error?"Error":"Received"}),p.jsx("dd",{children:p.jsx("pre",{children:G.error||G.received||"None"})})]})]},X))}),D!==null&&p.jsxs("p",{className:"check-practice-score",children:["Public-check score: ",Number(D.toFixed(2)),"/",g," practice points · ",A,"/",J," examples passed."]}),p.jsx("p",{className:"check-disclaimer",children:"Public examples only. These results do not award grades, completion, or earned points."})]}):p.jsx("pre",{className:"practice-check-message",children:u})}):b==="Console"?p.jsx("pre",{role:"tabpanel","aria-label":"Console output",children:l}):null]})}const ab="PUBLIC_CHECK_RESULTS=";function ob(l,u){const d=Array.isArray(l==null?void 0:l.cases)?l.cases:[],g=JSON.stringify(String(u)),x=JSON.stringify(JSON.stringify(d));return["import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx","import traceback as __trace","__student = "+g,"__cases = __json.loads("+x+")","__results = []","for __example in __cases:","    __out = __io.StringIO()","    try:",'        __env = {"__name__": "__main__"}',"        with __ctx.redirect_stdout(__out), __ctx.redirect_stderr(__out):",'            exec(compile(__student, "main.py", "exec"), __env)',(l==null?void 0:l.mode)==="function"?'            __actual = eval(compile(__ast.parse(__example["call"], mode="eval"), "example", "eval"), __env)':'            __actual = __out.getvalue().rstrip("\\n")',(l==null?void 0:l.mode)==="function"?'        __expected = __ast.literal_eval(__example["expected"])':'        __expected = __example["expected"].rstrip("\\n")',(l==null?void 0:l.mode)==="function"?"        __ok = type(__actual) is type(__expected) and __actual == __expected":"        __ok = __actual == __expected",'        __results.append({"ok":__ok,"actual":str(__actual)[:240],"expected":str(__expected)[:240],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","expected":str(__example.get("expected",""))[:240],"error":type(__error).__name__+": "+str(__error)[:200]})','print("'+ab+'"+__json.dumps(__results))'].join(`
`)+`
`}function lb(l,u){const d=String(u).split("(",1)[0].trim();return["import ast as __ast, io as __io, json as __json, contextlib as __ctx",'__env={"__name__":"student"}',"__stream=__io.StringIO()","with __ctx.redirect_stdout(__stream):","    exec(compile("+JSON.stringify(String(l))+',"main.py","exec"),__env)',"    __name="+JSON.stringify(d),'    if __name not in __env and callable(__env.get("solution")): __env[__name]=__env["solution"]',"    __value=eval(compile(__ast.parse("+JSON.stringify(String(u))+',mode="eval"),"sample call","eval"),__env)','print("PLAYGROUND_PREVIEW="+__json.dumps({"call":'+JSON.stringify(String(u))+',"returned":repr(__value)[:5000],"printed":__stream.getvalue()[:10000]}))'].join(`
`)}const ub="modulepreload",cb=function(l){return"/playground/integration/"+l},zf={},Cm=function(u,d,g){let x=Promise.resolve();if(d&&d.length>0){let _=function(j){return Promise.all(j.map(N=>Promise.resolve(N).then(W=>({status:"fulfilled",value:W}),W=>({status:"rejected",reason:W}))))};document.getElementsByTagName("link");const T=document.querySelector("meta[property=csp-nonce]"),S=(T==null?void 0:T.nonce)||(T==null?void 0:T.getAttribute("nonce"));x=_(d.map(j=>{if(j=cb(j),j in zf)return;zf[j]=!0;const N=j.endsWith(".css"),W=N?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${j}"]${W}`))return;const A=document.createElement("link");if(A.rel=N?"stylesheet":ub,N||(A.as="script"),A.crossOrigin="",A.href=j,S&&A.setAttribute("nonce",S),document.head.appendChild(A),N)return new Promise((J,D)=>{A.addEventListener("load",J),A.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${j}`)))})}))}function b(_){const T=new Event("vite:preloadError",{cancelable:!0});if(T.payload=_,window.dispatchEvent(T),!T.defaultPrevented)throw _}return x.then(_=>{for(const T of _||[])T.status==="rejected"&&b(T.reason);return u().catch(b)})},Ls="/playground/";async function db(l,u=()=>{}){if(l==="python"){const{PythonRunner:d}=await Cm(async()=>{const{PythonRunner:g}=await import("./pythonRunner-Camw9ZBH.js");return{PythonRunner:g}},[]);return{kind:"python",instance:new d({onStatus:u})}}if(l==="java"){const{JavaRunner:d}=await import(Ls+"java-runner.mjs");return{kind:"java",instance:new d(u)}}if(l==="csharp"){const[{CSharpRunner:d},g]=await Promise.all([import(Ls+"csharp-runner.mjs"),import(Ls+"csharp-protocol.mjs")]);return{kind:"csharp",instance:new d({onStatus:u}),protocol:g}}throw Error("No code compiler for "+l)}function pb(l){var u;return((u=/\b(?:public\s+)?(?:static\s+)?class\s+([A-Za-z_]\w*)/.exec(String(l||"")))==null?void 0:u[1])||""}const Ff='<main class="event-card"><h1>Robotics meetup</h1><p>Thursday at 4 PM in the lab.</p><p>Attendees: <span id="count">0</span></p><button id="join">Join</button></main>',vd=l=>JSON.stringify(String(l)).replace(/</g,"\\u003c");function hb(l){return l==="html"?`(()=>{
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
  })();`}function fb(l,u,d){var _;const g=(u.challengeExamples||[]).slice(0,d?void 0:1);if(!g.length)throw Error("No public challenge examples were published.");const x=(_=/\b(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:_[1];if(!x)throw Error("Define and export the challenge function.");const b=String(l).replace(/\bexport\s+(?=(?:async\s+)?function|const|let|class)/g,"");return`(()=>{
    const cases=${JSON.stringify(g)};
    const results=[];
    try{
      const fn=new Function(${vd(b+"; return "+x+";")})();
      for(const row of cases){
        try{
          const got=fn(...row.input);
          const expected=row.expected;
          const pass=JSON.stringify(got)===JSON.stringify(expected);
          results.push({label:${vd(x)}+'('+row.input.map(x=>JSON.stringify(x)).join(', ')+')',
            expected:JSON.stringify(expected),received:JSON.stringify(got),pass});
        }catch(e){results.push({label:${vd(x)}+'(...)',expected:JSON.stringify(row.expected),
          received:'',error:e.name+': '+e.message,pass:false});}
      }
      if(${d?"true":"false"})send('checks',{results});
      else results.forEach(row=>send('log',{level:row.pass?'info':'warn',text:row.label+' → '+(row.error || row.received)+' (expected '+row.expected+')'}));
    }catch(e){send('error',{text:e.name+': '+e.message});}
  })();`}function mb(l){return"<script>"+l.replace(/<\/script/gi,"<\\/script")+"<\/script>"}async function yh({code:l,language:u,lessonId:d,task:g={},token:x,check:b=!0}){if(!x)throw Error("A preview token is required.");if(g.webFiles){const{assembleWebFiles:G}=await Cm(async()=>{const{assembleWebFiles:V}=await Promise.resolve().then(()=>xb);return{assembleWebFiles:V}},[]),X=u==="jsx"?"App.jsx":"script.js";let M=null;u==="jsx"&&(typeof window.PlaygroundJSX!="function"&&await new Promise((V,ye)=>{const ze=document.createElement("script");ze.src=Ls+"vendor/learning/jsx.js",ze.onload=V,ze.onerror=()=>ye(Error("React JSX compiler could not load.")),document.head.append(ze)}),M=window.PlaygroundJSX(g.webFiles["App.jsx"]||""));const{html:F,linkedStyle:q,linkedScript:H}=G(g.webFiles,{scriptName:X,scriptOverride:M});if(g.projectId){const{buildProjectPreview:V}=await import(Ls+"project-preview.mjs");return V(F,{token:x,step:g.stepId,projectId:g.projectId,check:b})}const Y='<script src="'+Ls+'vendor/learning/react.js"><\/script>',pe=u==="jsx"?/<\/head\s*>/i.test(F)?F.replace(/<\/head\s*>/i,Y+"</head>"):Y+F:F;return yh({code:pe,language:"html",lessonId:d,task:{},token:x,check:b})}if(g.projectId){const{buildProjectPreview:G}=await import(Ls+"project-preview.mjs");return G(l,{token:x,step:g.stepId,projectId:g.projectId,check:b})}const{previewConsoleBridge:_}=await import(Ls+"console-drawer.mjs"),T=mb(_(x)),S=vd;let j="",N="",W="";if(g.isChallenge&&u==="javascript")j="<main><h2>JavaScript challenge</h2><p>See the Checks and Console tabs for actual function results.</p></main>",N=fb(l,g,b);else if(u==="html")j=String(l);else if(u==="css")j="<style>"+String(l).replace(/<\/style/gi,"")+"</style>"+Ff;else if(u==="javascript")j=Ff,N=l;else if(u==="jsx")j='<div id="root"></div>',typeof window.PlaygroundJSX!="function"&&await new Promise((G,X)=>{const M=document.createElement("script");M.src=Ls+"vendor/learning/jsx.js",M.onload=G,M.onerror=()=>X(Error("React JSX compiler could not load.")),document.head.append(M)}),N=window.PlaygroundJSX(l),W='<script src="'+Ls+'vendor/learning/react.js"><\/script>';else throw Error("Preview is not supported for "+u);const A=g.isChallenge&&u==="javascript"?"":hb(d),J=g.isChallenge&&u==="javascript"?"<script>try{"+N+';send("ready");}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>':"<script>try{(0,eval)("+S(N)+');setTimeout(()=>{send("ready");'+(b?A:"")+'},180)}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>',D='<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="form-action &apos;none&apos;"><style>body{font:16px/1.55 system-ui,sans-serif;padding:16px}button{padding:8px 15px}</style>'+T+W;if(u==="html"){const G=String(j).replace(/^\s*<!doctype[^>]*>/i,"");return"<!doctype html>"+(/<head(?:\s[^>]*)?>/i.test(G)?G.replace(/<head(?:\s[^>]*)?>/i,M=>M+D):"<head>"+D+"</head>"+G)+J}return"<!doctype html><html><head>"+D+"</head><body>"+j+J+"</body></html>"}function Tm({lessonId:l,task:u}){const d=u.storageKey||gh.code(l),g=!!u.projectDraft,x=!!u.isChallenge,b=Te.useRef(null),_=Te.useRef(null),T=Te.useRef(null),S=Te.useRef(null),j=Te.useRef(null),[N,W]=Te.useState(!1),[A,J]=Te.useState(u.starter||""),[D,G]=Te.useState(u.console||"Press Run to execute the code."),[X,M]=Te.useState(""),[F,q]=Te.useState("Choose Check to run the published examples. Your scores are not recorded."),[H,Y]=Te.useState(null),[pe,V]=Te.useState(""),ye=["html","css","javascript","jsx"].includes(u.language),ze=ye&&!x,[_e,oe]=Te.useState(ze?"Preview":"Console"),[Ce,le]=$n("designlab:editor-height",300);Te.useEffect(()=>{J(Ed(d)??u.starter??""),G(u.console||"Run to see your program output."),q("Choose Check to run the published examples. Your scores are not recorded."),Y(null),oe(ye&&!x?"Preview":"Console"),V(""),M("")},[d,u.language,u.starter,u.console,ye,x]),Te.useEffect(()=>()=>{var L;clearTimeout(j.current),S.current=null,(L=_.current)==null||L.instance.dispose(),_.current=null},[]),Te.useEffect(()=>{function L($){var ke;const O=S.current;if(!O||!T.current||$.source!==T.current.contentWindow||((ke=$.data)==null?void 0:ke.token)!==O.token)return;const Z=$.data;Z.kind==="log"&&G(Ie=>(Ie==="Run to see your program output."?"":Ie)+"["+(Z.level||"log")+"] "+Z.text+`
`),Z.kind==="clear"&&G(""),Z.kind==="error"&&(clearTimeout(j.current),G(Ie=>Ie+"Error: "+Z.text+`
`),O.check&&q("Fix the runtime error, then try Check again."),S.current=null,W(!1),oe("Console")),(Z.kind==="checks"||Z.kind==="project-checks")&&(clearTimeout(j.current),Y(Sm(Z.results||(Z.text?[{label:Z.text,pass:Z.pass}]:[]))),S.current=null,W(!1),oe("Checks")),Z.kind==="ready"&&!O.check&&(clearTimeout(j.current),S.current=null,W(!1))}return window.addEventListener("message",L),()=>window.removeEventListener("message",L)},[]);function ve(L){if(!b.current)return;const $=b.current.getBoundingClientRect();le(Math.max(160,Math.min($.height-120,L.clientY-$.top)))}async function E(){var L;if(!_.current||_.current.language!==u.language){(L=_.current)==null||L.instance.dispose();const $=await db(u.language,O=>G(O));_.current={...$,language:u.language}}return _.current}async function ee(L){var Z,ke,Ie,qe,Oe,we,Be,Ke,et,$e,Ft,Yt;const $=u.language;if($==="java"&&u.environment==="ide")throw Error("This activity uses Java 26 file I/O and requires a full Java IDE. Browser execution is not supported for this exercise.");const O=await E();if($==="python"){let _t=A;if(x)_t=rb(A,{...u,starter:u.starter},L);else if(L){if(!((Z=u.cases)!=null&&Z.length))throw Error("This lesson has no published examples.");_t=ob(u,A)}else u.mode==="function"&&((Ie=(ke=u.cases)==null?void 0:ke[0])!=null&&Ie.call)&&(_t=lb(A,u.cases[0].call));const xt=await O.instance.run(_t);if(L){const tt=x?u.challengeExamples.map(Ue=>({call:(nb(A,"python")||"Function")+"("+Ue.input.map(vt=>JSON.stringify(vt)).join(", ")+")",expected:JSON.stringify(Ue.expected)})):u.cases;Y(Df(xt.output,tt)),G("Python completed the public checks. Review individual results in Checks.")}else if(x){const tt=Df(xt.output,[{call:"First published example",expected:JSON.stringify(u.challengeExamples[0].expected)}]);G(tt[0].error||"First example returned "+tt[0].received+". Expected "+tt[0].expected+".")}else if(u.mode==="function"&&((Oe=(qe=u.cases)==null?void 0:qe[0])!=null&&Oe.call)){const tt=String(xt.output||"").split(`
`).find(Ue=>Ue.startsWith("PLAYGROUND_PREVIEW="));if(tt){const Ue=JSON.parse(tt.slice(19));G(Ue.call+`
Returned: `+Ue.returned+(Ue.printed?`
Printed: `+Ue.printed:""))}else G(xt.output||"No return value was captured. See your code and retry.")}else G(xt.output||(xt.success?"Program finished with no printed output.":"The Python program stopped."))}if($==="java"){if(u.environment==="ide")throw Error("This lesson uses Java 26 file input and must run in a full Java IDE. Browser execution is not supported.");if(x){const _t=Vp(u,"java",A),xt=L?_t:_t.slice(0,1),tt=await O.instance.run(ib(A,{...u,challengeExamples:xt}),[]);if(!tt.success)throw Error([tt.stdout,tt.stderr,tt.diagnostics].filter(Boolean).join(`
`));const Ue=sb(tt.stdout,xt);L?Y(Ue):G(Ue.map(vt=>vt.call+`
Received: `+vt.received+`
Expected: `+vt.expected).join(`
`))}else{const _t=L?u.cases||[]:[{args:u.runArgs||((Be=(we=u.cases)==null?void 0:we[0])==null?void 0:Be.args)||[]}];if(L&&!_t.length)throw Error("No public Java examples are available for this exercise.");const xt=[];for(const tt of _t){const Ue=await O.instance.run(A,tt.args||[]);if(xt.push(Ue),!Ue.success)break}if(L){const tt=Zx(xt,_t);if(xt.length!==_t.length)throw Error("Java stopped before completing all published examples: "+(((Ke=xt.at(-1))==null?void 0:Ke.diagnostics)||((et=xt.at(-1))==null?void 0:et.stderr)||"Unknown error"));Y(tt),G("Java completed the published checks. Review the Checks tab.")}else G([($e=xt[0])==null?void 0:$e.stdout,(Ft=xt[0])==null?void 0:Ft.stderr,(Yt=xt[0])==null?void 0:Yt.diagnostics].filter(Boolean).join(`
`)||"Java ran without printed output.")}}if($==="csharp"){const _t=O.protocol,xt=x?Vp(u,"csharp",A).map(ae=>({...ae,call:Array.isArray(ae.expected)?ae.call+".SequenceEqual("+ae.expectedLiteral+")":ae.call,arrayResult:Array.isArray(ae.expected),expected:Array.isArray(ae.expected)?"true":ae.expectedLiteral})):u.cases||[],tt=x?"Solution":pb(A),Ue=L||x&&xt.length>0;if(L&&!xt.length)throw Error("No public C# examples are available for this exercise.");if(Ue&&!tt)throw Error("The C# checker could not find the public class name.");const vt=L?xt:xt.slice(0,1),yt=Ue?_t.buildChecks(vt,tt):null,Qe=yt&&vt.some(ae=>ae.arrayResult)?`using System.Linq;
`+yt:yt,ut=await O.instance.run(A,Qe);if(!ut.compiled||!ut.success)throw Error([ut.diagnostics,ut.stderr].filter(Boolean).join(`
`)||"C# could not execute.");if(Ue){const ae=eb(ut.stdout,vt,_t.parseChecks);L?Y(ae):G(ae.map(je=>je.call+`
Received: `+je.received+`
Expected: `+je.expected).join(`
`))}else G(ut.stdout||"C# executed without printed output.")}}async function Q(L){if(!N){W(!0),M(""),Y(null),L?(q("Running published example checks…"),oe("Checks")):(G("Preparing runner…"),oe(ze?"Preview":"Console"));try{if(ye){const $=crypto.randomUUID();S.current={token:$,check:L};const O=await yh({code:A,language:u.language,lessonId:l,task:u,token:$,check:L});V(O),G(""),clearTimeout(j.current),j.current=setTimeout(()=>{var Z;((Z=S.current)==null?void 0:Z.token)===$&&(S.current=null,W(!1),G("The preview did not finish within 7 seconds. Check for errors or an infinite loop."),q("Practice timed out. No result was recorded."),T.current&&(T.current.srcdoc="<p>Preview stopped after timeout.</p>"),oe("Console"))},7e3)}else await ee(L),W(!1)}catch($){clearTimeout(j.current),S.current=null,W(!1);const O=String(($==null?void 0:$.message)||$);G(O),oe("Console"),L&&q("Check unavailable: "+O)}}}function R(L){if(!N){if(L==="Run"||L==="Check"){Q(L==="Check");return}if(L==="Save"){ca(d,A),M("Draft saved in this browser only.");return}L==="Reset"&&(J(u.starter||""),ca(d,u.starter||""),Y(null),V(""),q("Choose Check to run published examples again."),G("Starter code restored. No points were recorded."),oe(ze?"Preview":"Console"))}}return p.jsxs("div",{className:"code-pane",children:[p.jsxs("div",{className:"pane-header",children:[p.jsxs("strong",{children:[p.jsx(Od,{size:16})," Editor"]}),p.jsxs("div",{className:"right-meta",children:[u.language.toUpperCase()," ",p.jsx(ql,{children:"Live practice"})]})]}),p.jsxs("div",{className:"code-workspace",ref:b,style:{"--editor-height":Ce+"px"},children:[p.jsx(km,{value:A,language:u.language,onChange:L=>{J(L),(g||x)&&ca(d,L),M(""),Y(null),q("Code changed. Choose Check to run fresh examples.")}}),p.jsx(lc,{axis:"rows",onDrag:ve}),p.jsx(_m,{text:D,checksText:F,checkRows:H,points:u.points,language:u.language,lessonId:l,previewEnabled:ze,previewDoc:pe,previewRef:T,activeTab:_e,onTabChange:oe})]}),p.jsxs("div",{className:"editor-controls",children:[p.jsxs("div",{children:[["Run","Check","Reset"].map(L=>p.jsx("button",{type:"button",className:"btn",disabled:N,onClick:()=>R(L),children:L},L)),N&&p.jsx("button",{type:"button",className:"btn",onClick:()=>{var L,$,O;(O=(L=_.current)==null?void 0:($=L.instance).stop)==null||O.call($),S.current=null,clearTimeout(j.current),W(!1),G("Execution stopped.")},children:"Stop"})]}),p.jsxs("div",{children:[p.jsxs("button",{type:"button",className:"btn",disabled:N,onClick:()=>R("Save"),children:[p.jsx(Sd,{size:15})," Save"]}),p.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submission and official grading are not connected in this preview",children:[p.jsx(nh,{size:15})," Submit (not enabled)"]})]})]}),p.jsx("div",{className:"editor-note",role:"status",children:X||"Run executes code locally; Check tests public examples only. No grades, points or hand-ins are recorded."})]})}const vh=Object.freeze(["index.html","styles.css","script.js"]),xh=Object.freeze(["index.html","styles.css","App.jsx"]),jm=l=>l==="jsx"?xh:vh,Jp=`<!doctype html>
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
</html>`,gb=`<!doctype html>
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
</html>`;function Nm(l){return l.endsWith(".html")?"html":l.endsWith(".css")?"css":l.endsWith(".jsx")?"jsx":"javascript"}function Xp(l,u=""){const d=String(u).toLowerCase();return l==="jsx"||d==="react"?"App.jsx":l==="css"||/css|style|readable|responsive/.test(d)?"styles.css":l==="javascript"||/\bjs\b|javascript|script|function|array|object|dom|event|state|team|matchup|pick|scor|leaderboard|test|integrat|interact/.test(d)?"script.js":"index.html"}function yb(l,u="script.js"){if(!l.trim())return"";let d=l;if(!/<link\b[^>]*href\s*=\s*["']styles\.css["'][^>]*>/i.test(d)){const g=`  <link rel="stylesheet" href="styles.css">
`;d=/<\/head\s*>/i.test(d)?d.replace(/<\/head\s*>/i,g+"</head>"):g+d}if(!d.includes('src="'+u+'"')&&!d.includes("src='"+u+"'")){const g='  <script src="'+u+`" defer><\/script>
`;d=/<\/body\s*>/i.test(d)?d.replace(/<\/body\s*>/i,g+"</body>"):d+`
`+g}return d}function ic(l){let u=String(l??"");const d=[],g=[];return u=u.replace(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi,(x,b)=>(d.push(b.trim().replace(/^(?: {4}|\t)/gm,"")),"")),u=u.replace(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi,(x,b,_)=>/\bsrc\s*=/.test(b)||/\btype\s*=\s*["'](?:application\/json|application\/ld\+json|importmap)["']/i.test(b)?x:(g.push(_.trim().replace(/^(?: {4}|\t)/gm,"")),"")),{"index.html":yb(u.replace(/\n{3,}/g,`

`).trim(),"script.js"),"styles.css":d.join(`

`),"script.js":g.join(`

`)}}function Em(l,u){const d=String(u??"");if(l==="jsx")return{"index.html":gb,"styles.css":"","App.jsx":d};if(l==="html")return ic(d);if(l==="css")return{"index.html":Jp,"styles.css":d,"script.js":""};if(l==="javascript")return{"index.html":Jp,"styles.css":"","script.js":d};throw Error("Not a web lesson: "+l)}const Lm=l=>ic(l);function Go(l,u){if(![...vh,...xh].includes(u))throw Error("Unknown workspace file");return l+":file:"+u}function Pm({base:l,starters:u,legacy:d,read:g,write:x}){const b=Object.keys(u),_=Object.fromEntries(b.map(N=>[N,g(Go(l,N))]));if(b.some(N=>_[N]!==null&&_[N]!==void 0))return Object.fromEntries(b.map(N=>[N,_[N]??u[N]??""]));const S=d!=null?u["App.jsx"]!==void 0?{...u,"App.jsx":d}:Object.prototype.hasOwnProperty.call(u,"index.html")&&(u["styles.css"]||u["script.js"])&&/<html|<style|<script/i.test(d)||u["index.html"]!==void 0&&/<html|<!doctype|<body/i.test(d)?ic(d):{...u,[u["index.html"]===Jp?u["script.js"]?"script.js":"styles.css":"index.html"]:d}:u,j=Object.fromEntries(b.map(N=>[N,S[N]??u[N]??""]));return b.forEach(N=>x(Go(l,N),j[N])),j}function Wf(l,u){return String(l??"").replace(new RegExp("</"+u,"gi"),"<\\/"+u)}function vb(l,{scriptName:u="script.js",scriptOverride:d=null}={}){let g=String((l==null?void 0:l["index.html"])??"");const x=String((l==null?void 0:l["styles.css"])??""),b=String(d===null?(l==null?void 0:l[u])??"":d);let _=!1,T=!1;if(g=g.replace(/<link\b[^>]*>/gi,S=>/\bhref\s*=\s*["'](?:\.\/)?styles\.css["']/i.test(S)&&/\brel\s*=\s*["']stylesheet["']/i.test(S)?(_=!0,'<style data-web-file="styles.css">'+Wf(x,"style")+"</style>"):S),g=g.replace(/<script\b([^>]*)>\s*<\/script\s*>/gi,(S,j)=>{const N=/\bsrc\s*=\s*["']([^"']+)["']/i.exec(j);return N&&N[1].replace(/^\.\//,"")===u?(T=!0,""):S}),T){const S='<script data-web-file="'+u+'">'+Wf(b,"script")+"<\/script>";g=/<\/body\s*>/i.test(g)?g.replace(/<\/body\s*>/i,S+`
</body>`):g+`
`+S}return{html:g,linkedStyle:_,linkedScript:T}}const xb=Object.freeze(Object.defineProperty({__proto__:null,REACT_FILE_NAMES:xh,WEB_FILE_NAMES:vh,assembleWebFiles:vb,fileLanguage:Nm,fileNamesFor:jm,initialFocus:Xp,lessonStarterFiles:Em,loadWebDrafts:Pm,projectStarterFiles:Lm,splitEmbeddedWebSource:ic,webDraftKey:Go},Symbol.toStringTag,{value:"Module"}));function Am({lessonId:l,task:u}){const d=gh.code(l),g=jm(u.language),x=u.starterFiles||(u.projectDraft?Lm(u.starter):Em(u.language,u.starter)),[b,_]=Te.useState(()=>Pm({base:d,starters:x,legacy:Ed(d),read:Ed,write:ca})),[T,S]=Te.useState(()=>Xp(u.language,u.focus)),[j,N]=Te.useState("Run to render all your linked files together."),[W,A]=Te.useState("Check runs the current published practice requirements."),[J,D]=Te.useState(null),[G,X]=Te.useState(""),[M,F]=Te.useState("Preview"),[q,H]=Te.useState(""),[Y,pe]=Te.useState(!1),[V,ye]=$n("designlab:web-files-editor-height",310),ze=Te.useRef(null),_e=Te.useRef(null),oe=Te.useRef(null),Ce=Te.useRef(null);Te.useEffect(()=>{const O=Xp(u.language,u.focus);S(g.includes(O)?O:"index.html")},[u.stepId,u.focus,u.language]),Te.useEffect(()=>{const O=Z=>{var qe;const ke=_e.current;if(!ke||!ze.current||Z.source!==ze.current.contentWindow||((qe=Z.data)==null?void 0:qe.token)!==ke.token)return;const Ie=Z.data;Ie.kind==="log"&&N(Oe=>Oe+(Ie.level==="error"?"Error: ":"")+Ie.text+`
`),Ie.kind==="clear"&&N(""),Ie.kind==="error"&&(clearTimeout(oe.current),_e.current=null,N(Oe=>Oe+"Error: "+Ie.text+`
`),A("Fix the error reported in Console before checking again."),F("Console"),pe(!1)),(Ie.kind==="checks"||Ie.kind==="project-checks")&&(clearTimeout(oe.current),_e.current=null,D(Sm(Ie.results||(Ie.text?[{label:Ie.text,pass:Ie.pass}]:[]))),F("Checks"),pe(!1)),Ie.kind==="ready"&&!ke.check&&(clearTimeout(oe.current),_e.current=null,pe(!1))};return window.addEventListener("message",O),()=>{clearTimeout(oe.current),_e.current=null,window.removeEventListener("message",O)}},[]);function le(O){_(Z=>({...Z,[T]:O})),ca(Go(d,T),O),H(""),D(null),A("Code changed. Check again to update the results.")}function ve(){g.forEach(O=>ca(Go(d,O),b[O]??"")),H("All three files saved in this browser only.")}function E(){window.confirm("Restore all three starter files? Your current saved changes will be replaced.")&&(_({...x}),g.forEach(O=>ca(Go(d,O),x[O]??"")),D(null),X(""),N("Starter files restored."),A("Run Check to evaluate the restored files."),F("Preview"),H("Starter files restored for this lesson or project."))}function ee(){const O=b[T]||"",Z=document.createElement("a"),ke=URL.createObjectURL(new Blob([O],{type:"text/plain;charset=utf-8"}));Z.href=ke,Z.download=T,document.body.append(Z),Z.click(),Z.remove(),setTimeout(()=>URL.revokeObjectURL(ke),2e3)}function Q(){clearTimeout(oe.current),_e.current=null,pe(!1),X("<p>Preview stopped.</p>"),N("Preview stopped. Check your script for an endless loop."),F("Console")}async function R(O){var Z;if(!Y){pe(!0),D(null),H(""),N(""),A(O?"Checking the published requirements…":"Run Check to review the published requirements."),F(O?"Checks":"Preview");try{L();const ke=crypto.randomUUID();_e.current={token:ke,check:O};const Ie=await yh({language:u.language,code:b[T]||"",lessonId:u.lessonFocus||l,task:{...u,webFiles:b},token:ke,check:O});if(((Z=_e.current)==null?void 0:Z.token)!==ke)return;X(Ie),clearTimeout(oe.current),oe.current=setTimeout(()=>{var qe;((qe=_e.current)==null?void 0:qe.token)===ke&&(Q(),A("The preview timed out. No result was recorded."))},7e3)}catch(ke){clearTimeout(oe.current),_e.current=null,pe(!1),N(String((ke==null?void 0:ke.message)||ke)),A("Checks unavailable: "+String((ke==null?void 0:ke.message)||ke)),F("Console")}}}function L(){g.forEach(O=>ca(Go(d,O),b[O]||""))}function $(O){if(!Ce.current)return;const Z=Ce.current.getBoundingClientRect();ye(Math.max(160,Math.min(Z.height-120,O.clientY-Z.top)))}return p.jsxs("div",{className:"code-pane web-files-pane",children:[p.jsxs("div",{className:"pane-header",children:[p.jsxs("strong",{children:[p.jsx(Od,{size:16})," Project files"]}),p.jsxs("span",{className:"web-file-badge",children:["HTML + CSS + ",u.language==="jsx"?"React":"JavaScript"]})]}),p.jsx("div",{className:"web-file-tabs",role:"tablist","aria-label":"Source files",children:g.map(O=>p.jsx("button",{type:"button",role:"tab","aria-selected":O===T,className:O===T?"active":"",onClick:()=>S(O),children:O},O))}),p.jsxs("div",{className:"code-workspace",ref:Ce,style:{"--editor-height":V+"px"},children:[p.jsx(km,{value:b[T]??"",language:Nm(T),onChange:le},T),p.jsx(lc,{axis:"rows",onDrag:$}),p.jsx(_m,{text:j,checksText:W,checkRows:J,points:null,language:"html",previewEnabled:!0,previewDoc:G,previewRef:ze,activeTab:M,onTabChange:F})]}),p.jsxs("div",{className:"editor-controls",children:[p.jsxs("div",{children:[p.jsx("button",{type:"button",className:"btn",disabled:Y,onClick:()=>R(!1),children:"Run"}),p.jsx("button",{type:"button",className:"btn",disabled:Y,onClick:()=>R(!0),children:"Check"}),p.jsx("button",{type:"button",className:"btn",disabled:Y,onClick:E,children:"Reset"}),Y&&p.jsx("button",{type:"button",className:"btn",onClick:Q,children:"Stop"})]}),p.jsxs("div",{children:[p.jsxs("button",{type:"button",className:"btn",disabled:Y,onClick:ee,children:[p.jsx(hy,{size:15})," Download file"]}),p.jsxs("button",{type:"button",className:"btn",disabled:Y,onClick:ve,children:[p.jsx(Sd,{size:15})," Save"]}),p.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submissions and grading are not connected",children:[p.jsx(nh,{size:15})," Submit (not enabled)"]})]})]}),p.jsx("div",{className:"editor-note",role:"status",children:q||"Edit one file at a time. The HTML link to styles.css and script tag for script.js (or App.jsx) connect the files. Drafts save locally; practice checks award no points."})]})}function bb({lessonId:l,onAnswerChecked:u}){const d=ah[l],[g,x]=Te.useState(null),[b,_]=Te.useState(!1);function T(){_(!0),u==null||u({selected:g,correct:g===d.correct})}function S(){x(null),_(!1),u==null||u(null)}return p.jsxs("section",{className:"tsi-practice","aria-label":"Math question",children:[p.jsxs("div",{className:"tsi-practice-heading",children:[p.jsx(Xf,{size:20}),p.jsxs("div",{children:[p.jsx("h2",{children:"Try this question"}),p.jsx("p",{children:"Choose an answer, then review the explanation on the right."})]})]}),p.jsxs("div",{className:"tsi-question-card",children:[p.jsx("div",{className:"eyebrow",children:"Question"}),p.jsx("h3",{children:d.prompt}),p.jsx("div",{className:"tsi-answers",role:"radiogroup","aria-label":"Choose the correct answer",children:d.options.map((j,N)=>p.jsxs("label",{className:`tsi-choice ${g===N?"selected":""} ${b&&N===d.correct?"correct":""}`,children:[p.jsx("input",{type:"radio",name:`tsi-${l}`,checked:g===N,disabled:b,onChange:()=>x(N)}),p.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+N)}),p.jsx("span",{children:j})]},j))}),b&&p.jsx("p",{className:"tsi-answer-status",role:"status",children:g===d.correct?"Correct! Read why on the right.":"Not quite. Review the explanation on the right."}),p.jsxs("div",{className:"tsi-buttons",children:[p.jsx("button",{className:"btn primary",disabled:g===null||b,onClick:T,children:"Check answer"}),p.jsxs("button",{className:"btn",onClick:S,children:[p.jsx(Dd,{size:15})," Try again"]})]})]})]})}function wb(l){const u=String(l||""),d=u.indexOf("## Learn"),g=u.indexOf("## Practice"),x=u.indexOf("## Reflect");if(d<0||g<d)return{learn:"",reflect:"",questions:[]};const b=u.slice(d,g).trim(),_=u.slice(g,x>g?x:void 0),T=x>g?u.slice(x).trim():"",S=[..._.matchAll(/###\s+(\d+)\.\s+([^\n]+)\n([\s\S]*?)(?=\n###\s+\d+\.|$)/g)].map(j=>({number:Number(j[1]),prompt:j[2].trim(),options:[...j[3].matchAll(/-\s+\*\*([A-D])\.\*\*\s+([^\n]+)/g)].map(N=>({letter:N[1],text:N[2].trim()}))}));return{learn:b,reflect:T,questions:S}}function kb({task:l}){var N;const u=Te.useMemo(()=>wb(l.markdownSource),[l.markdownSource]),d=((N=l.tsiKey)==null?void 0:N.items)||[],[g,x]=Te.useState({}),[b,_]=Te.useState(!1),T=u.questions.filter(W=>{var A;return g[W.number]===((A=d.find(J=>J.question===W.number))==null?void 0:A.correct)}).length,S=u.questions.length===4&&u.questions.every(W=>W.options.length===4),j=S&&d.length===4&&Object.keys(g).length===4;return S?p.jsxs("div",{className:"tsi-strand-workspace",children:[p.jsxs("section",{className:"surface-card tsi-strand-questions","aria-label":"TSI math questions",children:[p.jsxs("div",{className:"tsi-strand-panel-heading",children:[p.jsx("span",{className:"eyebrow",children:"Practice"}),p.jsx("h2",{children:"Questions"}),p.jsx("p",{children:"Solve each problem, then check your answers against the explanations on the right."})]}),p.jsxs("form",{onSubmit:W=>{W.preventDefault(),j&&_(!0)},children:[u.questions.map(W=>{var J;const A=(J=d.find(D=>D.question===W.number))==null?void 0:J.correct;return p.jsxs("fieldset",{className:"tsi-strand-question",disabled:b,children:[p.jsxs("legend",{children:[p.jsx("span",{className:"tsi-strand-question-number",children:W.number})," ",W.prompt]}),p.jsx("div",{className:"tsi-strand-options",children:W.options.map(D=>p.jsxs("label",{className:["tsi-strand-option",g[W.number]===D.letter?"selected":"",b&&A===D.letter?"correct":""].filter(Boolean).join(" "),children:[p.jsx("input",{type:"radio",name:l.id+"-q"+W.number,value:D.letter,checked:g[W.number]===D.letter,onChange:()=>{x(G=>({...G,[W.number]:D.letter})),_(!1)}}),p.jsx("span",{className:"tsi-strand-letter",children:D.letter}),p.jsx("span",{children:D.text})]},D.letter))}),b&&p.jsx("p",{className:"tsi-strand-question-status",role:"status",children:g[W.number]===A?"Correct":"Review question "+W.number+" on the right"})]},W.number)}),p.jsxs("div",{className:"tsi-strand-actions",children:[p.jsx("button",{type:"submit",className:"btn primary",disabled:!j||b,children:"Check answers"}),p.jsxs("button",{type:"button",className:"btn",onClick:()=>{x({}),_(!1)},children:[p.jsx(Dd,{size:15})," Try again"]})]}),p.jsx("p",{className:"tsi-strand-progress",role:"status",children:b?T+" of 4 correct · instructional practice only":Object.keys(g).length+" of 4 answered"})]})]}),p.jsxs("section",{className:"surface-card tsi-strand-explanations","aria-label":"Math explanations",children:[p.jsxs("div",{className:"tsi-strand-panel-heading",children:[p.jsx("span",{className:"eyebrow",children:"Learn"}),p.jsxs("h2",{children:[p.jsx(Rd,{size:20,"aria-hidden":"true"})," Worked explanations"]})]}),p.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Jo(u.learn)}}),p.jsxs("div",{className:"tsi-strand-review","aria-live":"polite",children:[p.jsx("h3",{children:b?p.jsxs(p.Fragment,{children:[p.jsx(nc,{size:18})," Answer explanations"]}):"Review your answers"}),b?u.questions.map(W=>{const A=d.find(J=>J.question===W.number);return p.jsxs("article",{className:"tsi-strand-answer",children:[p.jsxs("h4",{children:["Question ",W.number," · ",g[W.number]===(A==null?void 0:A.correct)?"Correct":"Needs review"]}),p.jsxs("p",{children:["Your choice: ",g[W.number]," · Correct: ",A==null?void 0:A.correct]}),p.jsx("p",{children:(A==null?void 0:A.explanation)||"A worked explanation is not yet available."})]},W.number)}):p.jsxs("p",{children:["Complete all four questions and choose ",p.jsx("strong",{children:"Check answers"})," to see the explanations for each."]})]}),u.reflect&&p.jsx("div",{className:"tsi-strand-reflect markdown-preview",dangerouslySetInnerHTML:{__html:Jo(u.reflect)}})]}),p.jsx("p",{className:"tsi-strand-disclaimer",children:"Draft TSI instructional practice · 30 minutes · Not an official TSIA2 assessment. Answers in this React preview are not submitted or graded."})]}):p.jsxs("section",{className:"surface-card tsi-strand-error",role:"alert",children:[p.jsx("h2",{children:"Practice questions unavailable"}),p.jsx("p",{children:"This draft lesson's multiple-choice questions could not be loaded. No sample questions were substituted."})]})}const xd=[["quantitative","Quantitative Reasoning"],["algebraic","Algebraic Reasoning"],["geometry","Geometric and Spatial Reasoning"],["statistics","Probabilistic and Statistical Reasoning"]];function Sb(l){const u=l.answer,d=Number.isInteger(u)?Math.max(1,Math.round(Math.abs(u)*.15)):Math.max(.125,Math.round(Math.abs(u)*.2*1e3)/1e3),g=[u+d,u-d,u+2*d].map(x=>Number(x.toFixed(4)));return g.splice(l.correct_index??0,0,u),g}function _b(l,u){return Object.fromEntries(xd.map(([d])=>{const g=l.filter(b=>b.strand===d),x=g.filter(b=>u[b.id]!=="skip"&&Number(u[b.id])===b.answer).length;return[d,{correct:x,total:g.length,level:x===g.length?"Advanced":x>=Math.ceil(g.length*.6)?"Proficient":"Basic"}]}))}function Cb({items:l=[],profiles:u=[]}){var X,M,F;const[d,g]=Te.useState({}),[x,b]=Te.useState(""),[_,T]=Te.useState(""),[S,j]=$n("designlab:tsi-math-placement",{}),[N,W]=Te.useState(null),A=Te.useMemo(()=>xd.map(([q,H])=>({id:q,title:H,items:l.filter(Y=>Y.strand===q)})),[l]),J=N||((X=S.diagnostic)==null?void 0:X.latest)&&S.diagnostic.latest.placement;function D(q){q.preventDefault();const H=u.find(Y=>Y.code===x.trim().toUpperCase());if(!H){T("Enter a valid MATH01–MATH81 study code.");return}j(Y=>({...Y,code:H.code,levels:H.levels})),T("Study code applied in this browser. It does not enroll you in a class.")}function G(q){if(q.preventDefault(),l.some(V=>d[V.id]===void 0)){T("Answer or select Not sure for every question.");return}const H=_b(l,d),Y=Object.fromEntries(Object.entries(H).map(([V,ye])=>[V,ye.level])),pe={at:new Date().toISOString(),placement:H,levels:Y,answers:d};j(V=>{var ye;return{...V,levels:Y,diagnostic:{first:((ye=V.diagnostic)==null?void 0:ye.first)||pe,latest:pe}}}),W(H),T("Your recommended starting levels are ready. Results are stored in this browser only.")}return p.jsxs("div",{className:"published-reading surface-card tsi-diagnostic",children:[p.jsx("h2",{children:"Find your starting point"}),p.jsx("p",{children:"This is the existing 24-question, four-strand practice diagnostic. It suggests what to study; it does not predict an official TSIA2 score or assign an enrolled class."}),p.jsxs("form",{onSubmit:D,className:"tsi-code-entry",children:[p.jsx("label",{htmlFor:"math-locator-code",children:"Pearson study code (MATH01–MATH81)"}),p.jsx("input",{id:"math-locator-code",type:"text",placeholder:"MATH01",maxLength:6,value:x,onChange:q=>b(q.target.value)}),p.jsx("button",{className:"btn",type:"submit",children:"Apply code"})]}),!!S.code&&p.jsxs("p",{role:"status",children:["Current code: ",p.jsx("strong",{children:S.code}),"."," ","Recommended levels: ",xd.map(([q,H])=>{var Y;return H+": "+((Y=S.levels)==null?void 0:Y[q])}).join(" · ")]}),p.jsxs("form",{onSubmit:G,children:[p.jsx("h3",{children:"Take the diagnostic"}),p.jsxs("p",{children:["Choose one answer or Not sure for all ",l.length," questions. This open practice records your first and latest attempts in this browser, not the live gradebook."]}),A.map((q,H)=>p.jsxs("section",{className:"tsi-diagnostic-strand surface-card",children:[p.jsxs("div",{className:"tsi-strand-panel-heading",children:[p.jsxs("span",{className:"eyebrow",children:["Strand ",H+1," of ",A.length]}),p.jsx("h3",{children:q.title}),p.jsxs("p",{children:[q.items.length," questions · Choose an answer or Not sure for each question."]})]}),q.items.map((Y,pe)=>p.jsxs("fieldset",{className:"tsi-strand-question",children:[p.jsxs("legend",{children:[p.jsx("span",{className:"tsi-strand-question-number",children:pe+1})," ",Y.prompt]}),p.jsxs("div",{className:"tsi-strand-options",children:[Sb(Y).map((V,ye)=>p.jsxs("label",{className:"tsi-strand-option "+(d[Y.id]===String(V)?"selected":""),children:[p.jsx("input",{type:"radio",name:Y.id,value:V,checked:d[Y.id]===String(V),onChange:()=>g(ze=>({...ze,[Y.id]:String(V)}))}),p.jsx("span",{className:"tsi-strand-letter",children:String.fromCharCode(65+ye)}),p.jsx("span",{children:V})]},ye)),p.jsxs("label",{className:"tsi-strand-option tsi-diagnostic-unsure "+(d[Y.id]==="skip"?"selected":""),children:[p.jsx("input",{type:"radio",name:Y.id,value:"skip",checked:d[Y.id]==="skip",onChange:()=>g(V=>({...V,[Y.id]:"skip"}))}),p.jsx("span",{className:"tsi-strand-letter",children:"?"}),p.jsx("span",{children:"Not sure"})]})]})]},Y.id))]},q.id)),p.jsx("button",{type:"submit",className:"btn primary",children:"Get my recommended levels"})]}),!!_&&p.jsx("p",{role:"status",children:_}),J&&p.jsxs("section",{className:"tsi-diagnostic-results","aria-label":"Diagnostic results",children:[p.jsx("h3",{children:"Recommended starting levels"}),xd.map(([q,H])=>p.jsxs("p",{children:[p.jsxs("strong",{children:[H,": ",J[q].level]})," (",J[q].correct," of ",J[q].total," correct)"]},q)),p.jsx("p",{children:"This diagnostic is instructional, not a verified measure of college readiness. All published lessons remain available regardless of recommendation."}),!!((M=S.diagnostic)!=null&&M.first)&&!!((F=S.diagnostic)!=null&&F.latest)&&p.jsxs("p",{children:["First attempt: ",new Date(S.diagnostic.first.at).toLocaleDateString()," · Latest: ",new Date(S.diagnostic.latest.at).toLocaleDateString()]})]})]})}function Tb({lessonId:l,course:u,unit:d,unitNumber:g,isCompleted:x=!1,assignment:b=null,grade:_=null,onToggleCompleted:T,readOnlyMode:S=!1}){var M;const j=ec(u,l),N=Te.useRef(null),[W,A]=Te.useState(null),[J,D]=$n("designlab:left-width",420);function G(F){if(!N.current)return;const q=N.current.getBoundingClientRect();D(Math.max(260,Math.min(q.width-340,F.clientX-q.left)))}const X=u.id==="tsi-math";return X&&l==="tsi-20d-d01"&&((M=u.diagnosticItems)!=null&&M.length)?p.jsxs("div",{className:"lesson-screen",children:[p.jsxs("header",{className:"lesson-header",children:[p.jsx("div",{className:"eyebrow",children:"Day 1 · TSI Math Advisory"}),p.jsx("h1",{children:j.title}),p.jsx("p",{children:"Diagnostic placement · 30-minute advisory plan"})]}),p.jsx(Cb,{items:u.diagnosticItems,profiles:u.locatorProfiles})]}):j!=null&&j.ready?X&&j.tsiStrandDraft?p.jsxs("div",{className:"lesson-screen",children:[p.jsx(Ku,{task:j,unit:d,unitNumber:g,isTsi:!0,isCompleted:x,assignment:b,grade:_,onToggleCompleted:T,readOnlyMode:S}),p.jsx(kb,{task:j})]}):j.language==="text"&&!X?p.jsxs("div",{className:"lesson-screen",children:[p.jsx(Ku,{task:j,unit:d,unitNumber:g,isTsi:!1,isCompleted:x,assignment:b,grade:_,onToggleCompleted:T,readOnlyMode:S}),p.jsxs("section",{className:"surface-card published-reading",children:[p.jsx("p",{className:"muted",children:"Published written-practice material. Answer checking and verified scores remain on the current Playground."}),p.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Jo(j.markdownSource)}})]})]}):X&&!ah[l]?p.jsxs("div",{className:"lesson-screen",children:[p.jsx(Ku,{task:j,unit:d,unitNumber:g,isTsi:!0,isCompleted:x,assignment:b,grade:_,onToggleCompleted:T,readOnlyMode:S}),p.jsxs("section",{className:"surface-card published-reading",children:[p.jsx("p",{className:"muted",children:"Published draft lesson · practice shown for learning, not an official TSIA2 score predictor."}),p.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Jo(j.markdownSource)}})]})]}):p.jsxs("div",{className:"lesson-screen",children:[p.jsx(Ku,{task:j,unit:d,unitNumber:g,isTsi:X,isCompleted:x,assignment:b,grade:_,onToggleCompleted:T,readOnlyMode:S}),p.jsxs("div",{className:`workspace-grid ${X?"tsi-workspace":""}`,ref:N,style:{"--left-pane":`${J}px`},children:[X?p.jsx(bb,{lessonId:l,onAnswerChecked:A}):p.jsx(ff,{lessonId:l,task:j}),p.jsx(lc,{axis:"columns",onDrag:G}),X?p.jsx(ff,{lessonId:l,task:j,isTsi:!0,tsiAnswer:W}):u.id==="mobile-app-dev"&&["html","css","javascript","jsx"].includes(j.language)?p.jsx(Am,{lessonId:l,task:{...j,lessonFocus:l}},l):p.jsx(Tm,{lessonId:l,task:j})]})]}):p.jsxs("div",{className:"lesson-screen",children:[p.jsx(Ku,{task:j,unit:d,unitNumber:g,isTsi:X,isCompleted:x,assignment:b,grade:_,onToggleCompleted:T,readOnlyMode:S}),p.jsxs("section",{className:"lesson-content-pending surface-card",children:[p.jsx("h2",{children:"Lesson coming soon"}),p.jsx("p",{children:"This scheduled lesson has not been authored yet. No practice or scores are available."})]})]})}function jb({course:l,project:u,stepId:d,openProject:g}){const x=u.steps||[],b=Math.max(0,x.findIndex(J=>J.id===d)),_=x[b],T=Te.useRef(null),[S,j]=$n("designlab:project-left-width",430),N="project:"+l.id+":"+u.id,W={id:N,title:u.title,language:u.language||"html",starter:u.starter||"",starterFiles:u.starterFiles||null,challenge:u.summary||"",console:"Run to see your actual page. Check tests the published step requirements in a sandboxed browser preview.",projectDraft:!0,isPublished:!1,projectId:u.id,stepId:_.id,focus:_.focus};function A(J){if(!T.current)return;const D=T.current.getBoundingClientRect();j(Math.max(260,Math.min(D.width-340,J.clientX-D.left)))}return p.jsxs("div",{className:"lesson-screen project-workspace",children:[p.jsxs("header",{className:"lesson-header",children:[p.jsxs("div",{className:"eyebrow",children:["Published guided project · ",x.length," steps"]}),p.jsx("h1",{children:u.title}),p.jsx("p",{children:u.summary}),p.jsx("p",{className:"muted",children:"Run renders your actual project and Check tests the current step. Drafts save in this browser; Submit and verified grading remain disabled."})]}),p.jsx("nav",{className:"project-step-list","aria-label":"Project steps",children:x.map((J,D)=>p.jsxs("button",{type:"button","aria-current":D===b?"step":void 0,className:D===b?"btn primary":"btn",onClick:()=>g(l.id,u.id,J.id),children:[D+1,". ",J.title]},J.id))}),p.jsxs("div",{className:"workspace-grid",ref:T,style:{"--left-pane":S+"px"},children:[p.jsxs("section",{className:"instructions-pane project-reading",children:[p.jsx("div",{className:"pane-header",children:p.jsxs("strong",{children:["Step ",b+1,": ",_.title]})}),p.jsxs("p",{className:"web-files-reading-note",children:["This published walkthrough was originally written for one HTML file. When it says to add a <style> or <script> block, put that code in",p.jsx("code",{children:"styles.css"})," or ",p.jsx("code",{children:"script.js"})," instead. Keep the file links in",p.jsx("code",{children:"index.html"}),"; Run connects them automatically."]}),p.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Jo(_.markdownSource)}})]}),p.jsx(lc,{axis:"columns",onDrag:A}),p.jsx(Am,{lessonId:N,task:W})]}),p.jsxs("nav",{className:"lesson-next-bar","aria-label":"Project step navigation",children:[b>0&&p.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>g(l.id,u.id,x[b-1].id),children:[p.jsx(Id,{size:16})," ",p.jsxs("span",{children:["Prev: ",x[b-1].title]})]}),b<x.length-1&&p.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>g(l.id,u.id,x[b+1].id),children:[p.jsxs("span",{children:["Next: ",x[b+1].title]})," ",p.jsx(pi,{size:16})]})]})]})}function Nb({courseId:l,lessonId:u,projectId:d,projectStepId:g,availableCourses:x=ns,openCourse:b,openProject:_,openChallenges:T,completedLessons:S=[],assignments:j=[],grades:N=[],onToggleLessonComplete:W,courseColors:A={},onSetCourseColor:J,onResetCourseColor:D,readOnlyMode:G=!1}){const X=x.find(pe=>pe.id===l)||x[0];if(X.id==="test-prep")return p.jsx(Hy,{lessonId:u,openCourse:b,completedLessons:S,onToggleLessonComplete:W});const M=(X.projects||[]).find(pe=>pe.id===d),F=Zu(X),q=X.units.findIndex(pe=>fa(pe).includes(u)),H=X.units[q],Y=F.indexOf(u);return p.jsx("div",{className:"course-layout integrated-course","data-course":X.id,children:p.jsxs("div",{className:"course-main",children:[p.jsxs("div",{className:"course-breadcrumb",children:[p.jsx("button",{onClick:()=>b(null),children:"All playgrounds"}),p.jsx(pi,{size:14}),u||M?p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:()=>b(X.id),children:X.label}),p.jsx(pi,{size:14}),p.jsx("span",{className:"breadcrumb-unit-name",title:H?ha(H):"",children:H?ha(H):(M==null?void 0:M.title)||""})]}):p.jsx("span",{children:X.label})]}),M?p.jsx(jb,{course:X,project:M,stepId:g,openProject:_},M.id):u?p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"lesson-mobile-navigation",children:[p.jsx("label",{htmlFor:"lesson-select",children:"Lesson"}),p.jsx("select",{id:"lesson-select",value:u,onChange:pe=>b(X.id,pe.target.value),children:X.units.map((pe,V)=>p.jsx("optgroup",{label:`Unit ${V+1} · ${ha(pe)}`,children:fa(pe).map(ye=>p.jsx("option",{value:ye,children:Yo(X,ye)},ye))},pe.id))})]}),p.jsx(Tb,{lessonId:u,course:X,unit:H,unitNumber:q+1,isCompleted:S.includes(u),assignment:j.find(pe=>pe.id==="lesson:"+u),grade:N.find(pe=>pe.id==="lesson:"+u),onToggleCompleted:()=>W==null?void 0:W(u),readOnlyMode:G},u),p.jsxs("nav",{className:"lesson-next-bar","aria-label":"Lesson sequence",children:[Y>0&&p.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>b(X.id,F[Y-1]),children:[p.jsx(Id,{size:16,"aria-hidden":"true"}),p.jsxs("span",{children:["Prev: ",Yo(X,F[Y-1])]})]}),Y>=0&&Y<F.length-1&&p.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>b(X.id,F[Y+1]),children:[p.jsxs("span",{children:["Next: ",Yo(X,F[Y+1])]}),p.jsx(pi,{size:16,"aria-hidden":"true"})]})]})]}):p.jsx(Fy,{course:X,openCourse:b,openProject:_,openChallenges:T,completedLessons:S,assignments:j,grades:N,courseColors:A,onSetCourseColor:J,onResetCourseColor:D,readOnlyMode:G})]})})}const Bl=[{id:"p1",period:"1",name:"Period 1",course:"computer-science-1"},{id:"p3",period:"3",name:"Period 3",course:"computer-science-1"},{id:"p5",period:"5",name:"Period 5",course:"mobile-app-dev"},{id:"p6",period:"6",name:"Period 6",course:"game-programming"},{id:"p7",period:"7",name:"Period 7",course:"mobile-app-dev"},{id:"p8",period:"8",name:"Period 8",course:"computer-science-1"}],Eb=l=>Bl.find(u=>u.id===l),Rm=l=>{var u;return(u=Eb(l))==null?void 0:u.period},Lb=[...new Set(Bl.map(l=>l.period))].sort((l,u)=>Number(l)-Number(u)),Im=l=>{var u,d;return((u=l.sheetName)==null?void 0:u.trim())||((d=l.studentName)==null?void 0:d.trim())||l.github},Hf=l=>(l.sheetName||l.studentName||"").trim().split(/\s+/),Pb=(l,u,d)=>{const g=x=>d==="github"?x.github.toLowerCase():d==="first"?(Hf(x)[0]||x.github).toLowerCase():(Hf(x).at(-1)||x.github).toLowerCase();return g(l).localeCompare(g(u),void 0,{numeric:!0})||l.github.localeCompare(u.github)},Ab=[["last","Last name"],["first","First name"],["github","GitHub username"]];function Rb({label:l,value:u,onChange:d}){return p.jsxs("label",{children:[l,p.jsx("select",{value:u,onChange:g=>d(g.target.value),children:Ab.map(([g,x])=>p.jsx("option",{value:g,children:x},g))})]})}Oi("computer-science-1");const Ib="/playground/integration/teacher-bridge.js",Ob=()=>{const l=new Date,u=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(l).filter(g=>g.type!=="literal").map(g=>[g.type,g.value])),d=new Date(u.year+"-"+u.month+"-"+u.day+"T12:00:00Z");return d.setUTCDate(d.getUTCDate()-(d.getUTCDay()+6)%7),d.toISOString().slice(0,10)};function Mb(){const[l,u]=Te.useState(null),[d,g]=Te.useState("loading"),[x,b]=Te.useState(""),[_,T]=Te.useState(null),[S,j]=Te.useState(null),[N,W]=Te.useState(Ob),[A,J]=Te.useState(null),[D,G]=Te.useState(null),[X,M]=Te.useState("");Te.useEffect(()=>{let V=!0;return import(Ib).then(ye=>ye.teacherReadOnlyClient()).then(ye=>{var ze;V&&(u(ye),g(ye.status),ye.status==="ready"&&b(((ze=ye.classes[0])==null?void 0:ze.id)||""))}).catch(()=>{V&&g("unavailable")}),()=>{V=!1}},[]),Te.useEffect(()=>{if(!x||(l==null?void 0:l.status)!=="ready")return;let V=!0;return T(null),j(null),J(null),G(null),M(""),Promise.all([l.rpc("playground_teacher_snapshot",{p_class:x}),l.rpc("playground_teacher_weekly_points",{p_class:x})]).then(([ye,ze])=>{V&&(T(ye),j(ze))}).catch(()=>{V&&M("Section data could not be loaded. No records were changed.")}),()=>{V=!1}},[x,l]),Te.useEffect(()=>{if(!A||!x||!l)return;let V=!0;return G(null),l.rpc("playground_teacher_student_history",{p_class:x,p_student:A}).then(ye=>{V&&G(ye)}).catch(()=>{V&&G({error:"History unavailable"})}),()=>{V=!1}},[A,x,l]);const F=((_==null?void 0:_.roster)||[]).filter(V=>V.status==="approved"),q=((_==null?void 0:_.roster)||[]).filter(V=>V.status==="pending"),H=[...new Set([N,...((S==null?void 0:S.weeks)||[]).map(V=>V.week_start)])].sort().reverse(),Y=new Map(((S==null?void 0:S.weeks)||[]).filter(V=>V.week_start===N).map(V=>[V.user_id,V])),pe=new Map(((_==null?void 0:_.checks)||[]).map(V=>[V.user_id,V]));return p.jsxs("div",{className:"main-content teacher-screen",children:[p.jsx(sh,{eyebrow:"Authorized teacher · Read-only integration",children:"Teacher dashboard"}),p.jsx("p",{className:"page-subtitle",children:"Existing sections, verified weekly points and student assignment history. No approvals, assignments, edits or student data changes are enabled."}),d==="loading"?p.jsx("p",{role:"status",children:"Checking your existing teacher session…"}):d==="signed-out"?p.jsxs("p",{children:["Sign in through the ",p.jsx("a",{href:"/playground/",children:"current Playground"}),", then return here."]}):d==="forbidden"?p.jsx("p",{role:"alert",children:"This account does not have teacher access."}):d!=="ready"?p.jsx("p",{role:"alert",children:"Teacher data is unavailable. Please try again later."}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"surface-card",style:{padding:20,marginBottom:18},children:[p.jsxs("label",{children:["Class section ",p.jsx("select",{value:x,onChange:V=>b(V.target.value),children:l.classes.map(V=>p.jsxs("option",{value:V.id,children:[V.name," · ",V.course_id]},V.id))})]}),p.jsxs("label",{style:{marginLeft:16},children:["Week ",p.jsx("select",{value:N,onChange:V=>W(V.target.value),children:H.map(V=>p.jsx("option",{value:V,children:V},V))})]})]}),X?p.jsx("p",{role:"alert",children:X}):!_||!S?p.jsx("p",{role:"status",children:"Loading authorized section information…"}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"progress-grid",children:[p.jsxs("div",{className:"stat",children:[p.jsx("strong",{children:F.length}),p.jsx("span",{children:"Enrolled students"})]}),p.jsxs("div",{className:"stat",children:[p.jsx("strong",{children:q.length}),p.jsx("span",{children:"Pending requests · view only"})]}),p.jsxs("div",{className:"stat",children:[p.jsx("strong",{children:F.reduce((V,ye)=>{var ze;return V+(Number((ze=Y.get(ye.user_id))==null?void 0:ze.points)||0)},0)}),p.jsx("span",{children:"Verified points this week"})]})]}),p.jsxs("section",{className:"surface-card",style:{padding:20,marginTop:18},children:[p.jsx("h2",{children:"Section roster and verified scores"}),p.jsx("p",{children:"Weekly points count only improvements on server-graded submissions. Practice checks do not earn points."}),p.jsx("div",{className:"teacher-table-wrap",children:p.jsxs("table",{className:"teacher-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Student"}),p.jsx("th",{children:"GitHub"}),p.jsx("th",{children:"Practice checks"}),p.jsx("th",{children:"Weekly points"}),p.jsx("th",{children:"Improved assignments"})]})}),p.jsx("tbody",{children:F.map(V=>{var ye,ze,_e;return p.jsxs("tr",{children:[p.jsx("th",{scope:"row",children:p.jsx("button",{className:"teacher-student-name",onClick:()=>J(oe=>oe===V.user_id?null:V.user_id),children:V.display_name||V.github_account||"Student"})}),p.jsx("td",{children:V.github_account||"—"}),p.jsx("td",{children:Number((ye=pe.get(V.user_id))==null?void 0:ye.checks)||0}),p.jsx("td",{children:Number((ze=Y.get(V.user_id))==null?void 0:ze.points)||0}),p.jsx("td",{children:Number((_e=Y.get(V.user_id))==null?void 0:_e.assignments)||0})]},V.user_id)})})]})})]}),A&&p.jsxs("section",{className:"surface-card",style:{padding:20,marginTop:18},children:[p.jsx("h2",{children:"Assignment history"}),D?D.error?p.jsx("p",{role:"alert",children:D.error}):p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:[(D.submissions||[]).length," saved hand-ins · ",(D.checks||[]).reduce((V,ye)=>V+(Number(ye.checks)||0),0)," practice checks"]}),p.jsx("div",{className:"teacher-table-wrap",children:p.jsxs("table",{className:"teacher-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Activity"}),p.jsx("th",{children:"Submitted"}),p.jsx("th",{children:"Verified grade"})]})}),p.jsx("tbody",{children:(D.submissions||[]).map(V=>p.jsxs("tr",{children:[p.jsx("td",{children:V.activity_id}),p.jsx("td",{children:new Date(V.submitted_at).toLocaleString()}),p.jsx("td",{children:V.grade_status==="graded"?V.points+" / "+V.possible:"Not graded"})]},V.id))})]})})]}):p.jsx("p",{role:"status",children:"Loading history…"})]})]})]})]})}function Db({children:l}){return p.jsx("div",{className:"empty",children:l})}function zb({student:l,isEditing:u,onToggleEdit:d,onDone:g,onPatch:x}){const b=Im(l);return p.jsxs("article",{className:"account-card",children:[p.jsxs("div",{className:"account-row",children:[p.jsx("span",{className:"avatar",children:b.slice(0,1).toUpperCase()}),p.jsxs("div",{className:"account-identity",children:[p.jsx("h3",{children:b}),p.jsxs("small",{children:["@",l.github]})]}),p.jsx("button",{className:"icon-button","aria-label":`Edit ${b}`,onClick:d,children:u?p.jsx(ih,{size:17}):p.jsx(em,{size:17})})]}),p.jsxs("div",{className:"account-footer",children:[p.jsx(ql,{tone:l.sheetName?"success":"",children:l.sheetName?"Sheet matched":"Student name fallback"}),l.sections.map(_=>p.jsxs(ql,{children:["Period ",Rm(_)]},_))]}),u&&p.jsxs("div",{className:"account-edit",children:[p.jsxs("label",{children:["Google Sheet name",p.jsx("input",{value:l.sheetName||"",onChange:_=>x({sheetName:_.target.value||null})})]}),p.jsxs("label",{children:["Student-provided backup",p.jsx("input",{value:l.studentName||"",onChange:_=>x({studentName:_.target.value})})]}),p.jsx("button",{className:"btn",onClick:g,children:"Done"})]})]})}function Fb({students:l,sort:u,setSort:d,patchStudent:g}){const[x,b]=$n("designlab:period-filter","all"),[_,T]=Te.useState(""),[S,j]=Te.useState(null),N=Te.useMemo(()=>{const W=_.toLowerCase();return l.filter(A=>(x==="all"||A.sections.some(J=>Rm(J)===x))&&[Im(A),A.github,A.studentName].some(J=>J.toLowerCase().includes(W))).sort((A,J)=>Pb(A,J,u))},[l,x,u,_]);return p.jsxs("section",{className:"panel",children:[p.jsxs("div",{className:"section-heading",children:[p.jsxs("div",{children:[p.jsx("h2",{children:"Accounts"}),p.jsx("p",{children:"Google Sheet name first, student-entered name second, then GitHub name."})]}),p.jsxs(ql,{children:[N.length," accounts"]})]}),p.jsxs("div",{className:"filters",children:[p.jsxs("label",{children:[p.jsx(Zf,{size:16})," ",p.jsx("input",{"aria-label":"Search accounts",value:_,placeholder:"Search name or GitHub username",onChange:W=>T(W.target.value)})]}),p.jsxs("label",{children:["Class period",p.jsxs("select",{value:x,onChange:W=>b(W.target.value),children:[p.jsx("option",{value:"all",children:"All periods"}),Lb.map(W=>p.jsx("option",{children:W},W))]})]}),p.jsx(Rb,{label:"Sort",value:u,onChange:d})]}),p.jsx("p",{className:"info-text",children:"Change a sample Sheet name to test precedence and fallback behavior. These edits are saved only in browser storage."}),p.jsx("div",{className:"account-grid",children:N.map(W=>p.jsx(zb,{student:W,isEditing:S===W.id,onToggleEdit:()=>j(S===W.id?null:W.id),onDone:()=>j(null),onPatch:A=>g(W.id,A)},W.id))}),!N.length&&p.jsx(Db,{children:"No accounts match those filters."})]})}function Wb({students:l,setStudents:u}){const[d,g]=$n("designlab:admin-sort","last"),[x,b]=Te.useState(""),_=(T,S)=>u(j=>j.map(N=>N.id===T?{...N,...S}:N));return p.jsxs("div",{className:"main-content teacher-screen admin-screen",children:[p.jsx(sh,{eyebrow:"Global management · Frontend preview",actions:p.jsx(ql,{children:"Sample accounts only"}),children:"Admin dashboard"}),p.jsxs("p",{className:"page-subtitle",children:[p.jsx(rh,{size:16,"aria-hidden":"true"})," Account management is separate from class-specific teacher tools. This demo has no real accounts or admin permissions attached."]}),p.jsxs("div",{className:"admin-actions",children:[p.jsxs("button",{type:"button",className:"btn",onClick:()=>{u(bd),b("Fictional account records restored.")},children:[p.jsx(Dd,{size:15})," Reset sample accounts"]}),x&&p.jsx("small",{role:"status",children:x})]}),p.jsx(Fb,{students:l,sort:d,setSort:g,patchStudent:_})]})}const Hb={essay:"Think about a time you solved a difficult problem. Explain what you tried first, how you changed your approach, and what you learned. Use specific evidence.","logic-puzzle":"A robot follows this pattern: 2, 6, 12, 20, 30, __. Find the next number. Explain the pattern and show why your answer fits."},Bf={response:"",type:"essay",aiUse:"",aiDetails:""};function Bb({submissions:l,setSubmissions:u}){var _e;const[d,g]=$n("designlab:journal-section",Bl[0].id),x=Bl.find(oe=>oe.id===d)||Bl[0],b=bd.filter(oe=>oe.sections.includes(x.id)),[_,T]=$n("designlab:journal-student",bd[0].id),S=b.find(oe=>oe.id===_)||b[0],j=Te.useMemo(()=>fg(),[]),[N,W]=$n("designlab:journal-week",j[0]),A=j.includes(N)?N:j[0],[J,D]=$n("designlab:journal-drafts",{}),[G,X]=Te.useState(""),[M,F]=Te.useState(!1),q=mg(x.id,S.id,A),H=J[q]||Bf,Y=l.filter(oe=>oe.studentId===S.id&&oe.sectionId===x.id&&oe.week===A),pe=Y.at(-1),V=H.response.trim()?H.response.trim().split(/\s+/).length:0;function ye(oe,Ce){D(le=>({...le,[q]:{...le[q]||Bf,[oe]:Ce}})),X("Draft saved in this browser.")}function ze(oe){oe.preventDefault();const Ce=gg(H);if(Ce){X(Ce);return}const le={id:`demo-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,sectionId:x.id,studentId:S.id,studentName:`${S.first} ${S.last}`,courseId:x.course,week:A,response:H.response.trim(),type:H.type,aiUse:H.aiUse,aiDetails:H.aiDetails.trim(),submittedAt:new Date().toISOString()};u(ve=>[...ve,le]),X("Demo submission saved locally. Check the Teacher dashboard → Journals tab to review it.")}return p.jsxs("div",{className:"main-content journal-screen",children:[p.jsx("div",{className:"eyebrow",children:"Your classes · Written work"}),p.jsxs("header",{className:"journal-heading",children:[p.jsxs("div",{children:[p.jsx("h1",{children:"Weekly Journals"}),p.jsx("p",{children:"Essay responses, reflections, and logic puzzles—all in one place."})]}),p.jsxs("span",{className:"chip",children:[p.jsx(rh,{size:14})," Local demo only"]})]}),p.jsxs("section",{className:"journal-card journal-selection","aria-label":"Select a journal",children:[p.jsxs("label",{children:["Class section",p.jsx("select",{value:x.id,onChange:oe=>{g(oe.target.value),X("")},children:Bl.map(oe=>{var Ce;return p.jsxs("option",{value:oe.id,children:[oe.name," · ",(Ce=Oi(oe.course))==null?void 0:Ce.label]},oe.id)})})]}),p.jsxs("label",{children:["Preview as student",p.jsx("select",{value:S.id,onChange:oe=>{T(oe.target.value),X("")},children:b.map(oe=>p.jsxs("option",{value:oe.id,children:[oe.first," ",oe.last," (sample)"]},oe.id))})]}),p.jsxs("label",{children:["Journal week",p.jsx("select",{value:A,onChange:oe=>{W(oe.target.value),X("")},children:j.map(oe=>p.jsxs("option",{value:oe,children:["Week of ",Qu(oe)]},oe))})]})]}),p.jsxs("section",{className:"journal-card journal-editor-card",children:[p.jsxs("div",{className:"journal-section-heading",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"eyebrow",children:[(_e=Oi(x.course))==null?void 0:_e.label," · ",x.name]}),p.jsxs("h2",{children:["Journal · Week of ",Qu(A)]})]}),p.jsx("span",{className:`journal-status-pill ${pe?"submitted":""}`,children:pe?"Submitted":"Not submitted"})]}),p.jsx("p",{className:"journal-instructions",children:"This is a fictional prompt for design testing. In production, your teacher would publish the weekly assignment."}),p.jsxs("form",{onSubmit:ze,children:[p.jsxs("label",{children:["Response type",p.jsxs("select",{value:H.type,onChange:oe=>ye("type",oe.target.value),children:[p.jsx("option",{value:"essay",children:"Essay or written reflection"}),p.jsx("option",{value:"logic-puzzle",children:"Logic puzzle or reasoning task"})]})]}),p.jsxs("div",{className:"journal-prompt",children:[p.jsx("strong",{children:"Sample prompt"}),p.jsx("p",{children:Hb[H.type]})]}),p.jsx("label",{htmlFor:"journal-answer",children:"Your response"}),p.jsx("textarea",{id:"journal-answer",rows:"13",maxLength:"100000",spellCheck:!0,placeholder:"Write your explanation here. Show steps and reasoning for logic puzzles.",value:H.response,onChange:oe=>ye("response",oe.target.value)}),p.jsxs("div",{className:"journal-writing-meta",children:[p.jsxs("span",{children:[V," words"]}),p.jsxs("span",{children:[p.jsx(Sd,{size:13})," Autosaved in this browser"]})]}),p.jsxs("div",{className:"journal-integrity",children:[p.jsxs("label",{children:["AI-use declaration",p.jsxs("select",{value:H.aiUse,onChange:oe=>ye("aiUse",oe.target.value),children:[p.jsx("option",{value:"",children:"Choose one"}),p.jsx("option",{value:"none",children:"I did not use AI-generated content"}),p.jsx("option",{value:"disclosed",children:"I used AI and will explain how"})]})]}),p.jsx("p",{className:"hint",children:"This is a declaration for review, not an automatic grade. Follow your teacher's classroom AI policy."}),H.aiUse==="disclosed"&&p.jsxs("label",{children:["Describe the AI assistance",p.jsx("textarea",{rows:"3",value:H.aiDetails,onChange:oe=>ye("aiDetails",oe.target.value),placeholder:"Identify which parts involved AI assistance."})]})]}),p.jsxs("div",{className:"journal-actions",children:[p.jsxs("button",{type:"button",className:"btn",onClick:()=>{X("Draft saved in this browser.")},children:[p.jsx(Sd,{size:15})," Save draft"]}),p.jsxs("button",{type:"submit",className:"btn submit",children:[p.jsx(nh,{size:15})," Demo submit"]})]}),p.jsx("p",{role:"status",className:"journal-submit-status",children:G})]}),p.jsxs("div",{className:"journal-bottom-row",children:[p.jsx("p",{className:"hint",children:"No real submissions are sent. Each demo submission records a separate copy; drafts remain editable."}),p.jsxs("button",{type:"button",className:"btn",onClick:()=>F(oe=>!oe),children:[p.jsx(by,{size:15})," ",M?"Hide history":`Submission history (${Y.length})`]})]}),M&&p.jsx("div",{className:"journal-history",children:Y.length?Y.map(oe=>p.jsxs("details",{className:"journal-history-item",children:[p.jsxs("summary",{children:[p.jsx(nc,{size:16})," Submitted ",new Date(oe.submittedAt).toLocaleString()," · ",oe.type]}),p.jsx("div",{className:"journal-history-answer",children:oe.response})]},oe.id)):p.jsx("p",{className:"muted",children:"No submissions yet for this week."})})]})]})}const Ub=`# Attendance Percentage

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
`,qb=`# Competition Leaderboard Ranks

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
`,Kb=`# Confidence Pool Total

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
`,$b=`# Count Matching Events

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
`,Gb=`# Longest Winning Streak

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
`,Yb=`# Format a Score Line

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
`,Vb=`# Second Largest Distinct Value

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
`,Jb=`# Sum Positive Values

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
`,Xb=`# Count Pairs With Target Sum

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
`,Qb=`# Temperature Alert

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
`,Zb=`using System;

public static class Solution {
    public static int AttendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,e0=`public class Solution {
    public static int attendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,t0=`export function attendancePercent(present, total) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,n0=`def attendance_percent(present: int, total: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,r0=`using System;

public static class Solution {
    public static int[] CompetitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,i0=`public class Solution {
    public static int[] competitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,s0=`export function competitionRanks(scores) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,a0=`def competition_ranks(scores: list[int]) -> list[int]:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,o0=`using System;

public static class Solution {
    public static int ConfidenceTotal(bool[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,l0=`public class Solution {
    public static int confidenceTotal(boolean[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,u0=`export function confidenceTotal(correct, weights) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,c0=`def confidence_total(correct: list[bool], weights: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,d0=`using System;

public static class Solution {
    public static int CountMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,p0=`public class Solution {
    public static int countMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,h0=`export function countMatches(events, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,f0=`def count_matches(events: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,m0=`using System;

public static class Solution {
    public static int LongestWinStreak(bool[] wins) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,g0=`public class Solution {
    public static int longestWinStreak(boolean[] wins) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,y0=`export function longestWinStreak(wins) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,v0=`def longest_win_streak(wins: list[bool]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,x0=`using System;

public static class Solution {
    public static string ScoreLine(string name, int points) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,b0=`public class Solution {
    public static String scoreLine(String name, int points) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,w0=`export function scoreLine(name, points) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,k0=`def score_line(name: str, points: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,S0=`using System;

public static class Solution {
    public static int? SecondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,_0=`public class Solution {
    public static Integer secondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,C0=`export function secondLargestDistinct(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,T0=`def second_largest_distinct(numbers: list[int]) -> int | None:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,j0=`using System;

public static class Solution {
    public static int SumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,N0=`public class Solution {
    public static int sumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,E0=`export function sumPositives(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,L0=`def sum_positives(numbers: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,P0=`using System;

public static class Solution {
    public static int TargetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,A0=`public class Solution {
    public static int targetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,R0=`export function targetPairs(numbers, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,I0=`def target_pairs(numbers: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,O0=`using System;

public static class Solution {
    public static string TemperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,M0=`public class Solution {
    public static String temperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,D0=`export function temperatureAlert(degrees) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,z0=`def temperature_alert(degrees: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,F0="attendance-percent",W0=[{input:[18,20],expected:90},{input:[2,3],expected:66},{input:[0,30],expected:0},{input:[7,7],expected:100}],H0={challengeId:F0,cases:W0},B0="competition-ranks",U0=[{input:[[50,50,40,20,40]],expected:[1,1,3,5,3]},{input:[[7,12,9]],expected:[3,1,2]},{input:[[5,5,5]],expected:[1,1,1]},{input:[[]],expected:[]}],q0={challengeId:B0,cases:U0},K0="confidence-total",$0=[{input:[[!0,!1,!0],[20,18,15]],expected:35},{input:[[!1,!1],[5,8]],expected:0},{input:[[],[]],expected:0}],G0={challengeId:K0,cases:$0},Y0="count-matches",V0=[{input:[[2,1,2,3,2],2],expected:3},{input:[[],7],expected:0},{input:[[3,4],5],expected:0}],J0={challengeId:Y0,cases:V0},X0="longest-win-streak",Q0=[{input:[[!0,!0,!1,!0,!0,!0]],expected:3},{input:[[!1,!1]],expected:0},{input:[[]],expected:0},{input:[[!0,!0]],expected:2}],Z0={challengeId:X0,cases:Q0},ew="score-line",tw=[{input:["Avery",18],expected:"Avery: 18 points"},{input:["Jordan Lee",0],expected:"Jordan Lee: 0 points"},{input:["Mia",-2],expected:"Mia: -2 points"}],nw={challengeId:ew,cases:tw},rw="second-largest-distinct",iw=[{input:[[3,1,3,2]],expected:2},{input:[[5,5]],expected:null},{input:[[-10,-7,-7,-2]],expected:-7},{input:[[1]],expected:null}],sw={challengeId:rw,cases:iw},aw="sum-positives",ow=[{input:[[-3,6,0,2,-1]],expected:8},{input:[[-5,0,-1]],expected:0},{input:[[]],expected:0}],lw={challengeId:aw,cases:ow},uw="target-pairs",cw=[{input:[[1,3,2,2,4],4],expected:2},{input:[[2,2,2],4],expected:3},{input:[[1,2,3],9],expected:0},{input:[[],1],expected:0}],dw={challengeId:uw,cases:cw},pw="temperature-alert",hw=[{input:[32],expected:"Freeze"},{input:[90],expected:"Heat"},{input:[72],expected:"Normal"},{input:[-5],expected:"Freeze"}],fw={challengeId:pw,cases:hw},mw=["python","java","javascript","csharp"],gw=[{id:"temperature-alert",title:"Temperature Alert",summary:"Choose a status label based on a temperature reading.",difficulty:"Very Easy",points:5,tags:["conditionals","comparisons","functions"],prerequisites:["functions","conditionals"],suggestedCourses:["computer-science-1","game-programming","uil"],languages:["python","java","javascript","csharp"],path:"problems/temperature-alert"},{id:"count-matches",title:"Count Matching Events",summary:"Count how often a particular event code appears.",difficulty:"Easy",points:10,tags:["arrays","loops","comparisons"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/count-matches"},{id:"sum-positives",title:"Sum Positive Values",summary:"Add only the positive values in a data set.",difficulty:"Easy",points:10,tags:["arrays","loops","accumulators"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/sum-positives"},{id:"score-line",title:"Format a Score Line",summary:"Format a player score as a clear single line of text.",difficulty:"Easy",points:10,tags:["strings","formatting","functions"],prerequisites:["variables","strings","functions"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/score-line"},{id:"attendance-percent",title:"Attendance Percentage",summary:"Convert an attendance fraction into a whole-number percentage.",difficulty:"Easy",points:10,tags:["arithmetic","integer-division","functions"],prerequisites:["variables","functions","arithmetic"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/attendance-percent"},{id:"longest-win-streak",title:"Longest Winning Streak",summary:"Find the longest consecutive run of winning results.",difficulty:"Medium",points:15,tags:["arrays","loops","state"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/longest-win-streak"},{id:"confidence-total",title:"Confidence Pool Total",summary:"Compute the points earned from predictions.",difficulty:"Medium",points:15,tags:["arrays","loops","parallel-arrays"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/confidence-total"},{id:"second-largest-distinct",title:"Second Largest Distinct Value",summary:"Return the second-highest unique integer in a collection.",difficulty:"Medium",points:20,tags:["arrays","comparisons","distinct-values"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/second-largest-distinct"},{id:"target-pairs",title:"Count Pairs With Target Sum",summary:"Count pairs of positions that add to a target.",difficulty:"Hard",points:25,tags:["arrays","nested-loops","counting"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/target-pairs"},{id:"competition-ranks",title:"Competition Leaderboard Ranks",summary:"Assign ranks while handling tied scores and skipped positions.",difficulty:"Hard",points:25,tags:["arrays","sorting","ties"],prerequisites:["functions","loops","arrays","sorting"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/competition-ranks"}],Om={languages:mw,challenges:gw},yw=Object.assign({"../challenge-bank/problems/attendance-percent/problem.md":Ub,"../challenge-bank/problems/competition-ranks/problem.md":qb,"../challenge-bank/problems/confidence-total/problem.md":Kb,"../challenge-bank/problems/count-matches/problem.md":$b,"../challenge-bank/problems/longest-win-streak/problem.md":Gb,"../challenge-bank/problems/score-line/problem.md":Yb,"../challenge-bank/problems/second-largest-distinct/problem.md":Vb,"../challenge-bank/problems/sum-positives/problem.md":Jb,"../challenge-bank/problems/target-pairs/problem.md":Xb,"../challenge-bank/problems/temperature-alert/problem.md":Qb}),vw=Object.assign({"../challenge-bank/problems/attendance-percent/starters/Solution.cs":Zb,"../challenge-bank/problems/attendance-percent/starters/Solution.java":e0,"../challenge-bank/problems/attendance-percent/starters/javascript.js":t0,"../challenge-bank/problems/attendance-percent/starters/python.py":n0,"../challenge-bank/problems/competition-ranks/starters/Solution.cs":r0,"../challenge-bank/problems/competition-ranks/starters/Solution.java":i0,"../challenge-bank/problems/competition-ranks/starters/javascript.js":s0,"../challenge-bank/problems/competition-ranks/starters/python.py":a0,"../challenge-bank/problems/confidence-total/starters/Solution.cs":o0,"../challenge-bank/problems/confidence-total/starters/Solution.java":l0,"../challenge-bank/problems/confidence-total/starters/javascript.js":u0,"../challenge-bank/problems/confidence-total/starters/python.py":c0,"../challenge-bank/problems/count-matches/starters/Solution.cs":d0,"../challenge-bank/problems/count-matches/starters/Solution.java":p0,"../challenge-bank/problems/count-matches/starters/javascript.js":h0,"../challenge-bank/problems/count-matches/starters/python.py":f0,"../challenge-bank/problems/longest-win-streak/starters/Solution.cs":m0,"../challenge-bank/problems/longest-win-streak/starters/Solution.java":g0,"../challenge-bank/problems/longest-win-streak/starters/javascript.js":y0,"../challenge-bank/problems/longest-win-streak/starters/python.py":v0,"../challenge-bank/problems/score-line/starters/Solution.cs":x0,"../challenge-bank/problems/score-line/starters/Solution.java":b0,"../challenge-bank/problems/score-line/starters/javascript.js":w0,"../challenge-bank/problems/score-line/starters/python.py":k0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.cs":S0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.java":_0,"../challenge-bank/problems/second-largest-distinct/starters/javascript.js":C0,"../challenge-bank/problems/second-largest-distinct/starters/python.py":T0,"../challenge-bank/problems/sum-positives/starters/Solution.cs":j0,"../challenge-bank/problems/sum-positives/starters/Solution.java":N0,"../challenge-bank/problems/sum-positives/starters/javascript.js":E0,"../challenge-bank/problems/sum-positives/starters/python.py":L0,"../challenge-bank/problems/target-pairs/starters/Solution.cs":P0,"../challenge-bank/problems/target-pairs/starters/Solution.java":A0,"../challenge-bank/problems/target-pairs/starters/javascript.js":R0,"../challenge-bank/problems/target-pairs/starters/python.py":I0,"../challenge-bank/problems/temperature-alert/starters/Solution.cs":O0,"../challenge-bank/problems/temperature-alert/starters/Solution.java":M0,"../challenge-bank/problems/temperature-alert/starters/javascript.js":D0,"../challenge-bank/problems/temperature-alert/starters/python.py":z0}),xw=Object.assign({"../challenge-bank/problems/attendance-percent/examples.json":H0,"../challenge-bank/problems/competition-ranks/examples.json":q0,"../challenge-bank/problems/confidence-total/examples.json":G0,"../challenge-bank/problems/count-matches/examples.json":J0,"../challenge-bank/problems/longest-win-streak/examples.json":Z0,"../challenge-bank/problems/score-line/examples.json":nw,"../challenge-bank/problems/second-largest-distinct/examples.json":sw,"../challenge-bank/problems/sum-positives/examples.json":lw,"../challenge-bank/problems/target-pairs/examples.json":dw,"../challenge-bank/problems/temperature-alert/examples.json":fw}),Wd=Om.challenges,Qp=Om.languages,Mm={python:"Python",java:"Java",javascript:"JavaScript",csharp:"C#"},bw={python:"python.py",java:"Solution.java",javascript:"javascript.js",csharp:"Solution.cs"};function Dm(l){return Wd.find(u=>u.id===l)||null}function ww(l){return yw[`../challenge-bank/problems/${l}/problem.md`]??""}function kw(l,u){return vw[`../challenge-bank/problems/${l}/starters/${bw[u]}`]??""}function Sw(l){var u;return((u=xw[`../challenge-bank/problems/${l}/examples.json`])==null?void 0:u.cases)??[]}const _w=[...new Set(Wd.flatMap(l=>l.tags))].sort((l,u)=>l.localeCompare(u)),Cw=["Very Easy","Easy","Medium","Hard"];function Tw({query:l="",topic:u="all",difficulty:d="all",course:g="all",language:x="all"}={}){const b=l.trim().toLocaleLowerCase();return Wd.filter(_=>(!b||[_.title,_.summary,..._.tags].join(" ").toLowerCase().includes(b))&&(u==="all"||_.tags.includes(u))&&(d==="all"||_.difficulty===d)&&(g==="all"||_.suggestedCourses.includes(g))&&(x==="all"||_.languages.includes(x))).slice().sort((_,T)=>_.title.localeCompare(T.title))}function Uf(l,u){var b;const[d,...g]=l.split(":"),x=g.join(":");return d==="lesson"?Yo(Oi(u),x):((b=Dm(x))==null?void 0:b.title)||x}function jw({grades:l=[],assignments:u=[],completedLessons:d=[],readOnlyMode:g=!1,weeklyPoints:x=[],accountStatus:b="disabled"}){const[_,T]=Te.useState("all"),S=_==="all"?l:l.filter(D=>D.courseId===_),j=Bp(S),N=g?_==="all"||_==="computer-science-1"?x:[]:Fg(S),W=N[0],A=ns.filter(D=>!g||D.id==="computer-science-1").map(D=>({...D,...Bp(l.filter(G=>G.courseId===D.id))})),J=u.filter(D=>_==="all"||D.courseId===_).map(D=>({...D,status:Ad(D.id,{assignments:u,grades:l,completedLessons:d})})).filter(D=>D.status.state==="assigned"||D.status.state==="overdue").sort((D,G)=>D.dueDate.localeCompare(G.dueDate));return p.jsxs("div",{className:"main-content grades-screen",children:[p.jsxs("header",{className:"grades-heading",children:[p.jsxs("div",{children:[p.jsx("div",{className:"eyebrow",children:"Your progress"}),p.jsx("h1",{children:"Grades"}),p.jsx("p",{children:g?"Verified Computer Science I scores and weekly improvements. Assignments are not yet connected here.":"See your earned points, weekly scores, and work still due."})]}),p.jsxs("label",{className:"grades-filter",children:["Course",p.jsxs("select",{value:_,onChange:D=>T(D.target.value),children:[p.jsx("option",{value:"all",children:"All courses"}),ns.map(D=>p.jsx("option",{value:D.id,children:D.label},D.id))]})]})]}),p.jsx("p",{className:"grades-preview-note",children:g?b==="signed-in"?"Verified Computer Science I results from your existing Playground account. Submissions and grading remain in the current Playground.":"Sign in on the current Playground to see your own verified results here. No changes are made from this test build.":"This preview does not display real student grades or assignments. Verified scores remain in the current Playground."}),p.jsxs("div",{className:"grades-summary",children:[p.jsxs("div",{className:"grades-stat surface-card",children:[p.jsx(oy,{size:19}),p.jsx("span",{children:"Points earned"}),p.jsxs("strong",{children:[j.earned," ",p.jsxs("small",{children:["/ ",j.possible]})]}),p.jsx("p",{children:j.percent===null?"No graded work yet":`${j.percent}% of graded points`})]}),p.jsxs("div",{className:"grades-stat surface-card",children:[p.jsx(tm,{size:19}),p.jsx("span",{children:"Graded activities"}),p.jsx("strong",{children:j.count}),p.jsx("p",{children:"Lessons and challenges"})]}),p.jsxs("div",{className:"grades-stat surface-card",children:[p.jsx(ay,{size:19}),p.jsx("span",{children:"Most recent scored week"}),p.jsx("strong",{children:W?g?`+${W.earned}`:`${W.earned} / ${W.possible}`:"—"}),p.jsx("p",{children:W?`Week of ${Qu(W.week)}`:"No scores yet"})]})]}),p.jsxs("section",{className:"grades-panel surface-card",children:[p.jsx("h2",{children:g?"Weekly verified point increases":"Weekly scores"}),N.length?p.jsx("div",{className:"grades-weeks",children:N.map(D=>p.jsxs("div",{className:"grades-week",children:[p.jsxs("div",{children:[p.jsxs("strong",{children:["Week of ",Qu(D.week)]}),p.jsxs("small",{children:[D.count," scored ",D.count===1?"activity":"activities"]})]}),p.jsxs("div",{className:"grades-week-score",children:[p.jsx("strong",{children:g?`+${D.earned} pts`:`${D.earned} / ${D.possible} pts`}),!g&&p.jsx("progress",{value:D.earned,max:Math.max(D.possible,1),"aria-label":`Week of ${Qu(D.week)}: ${D.earned} of ${D.possible} points`})]})]},D.week))}):p.jsx("p",{children:"No graded work in this selection."})]}),_==="all"&&p.jsxs("section",{className:"grades-panel surface-card",children:[p.jsx("h2",{children:"By course"}),p.jsx("div",{className:"grades-course-list",children:A.map(D=>p.jsxs("div",{className:"grades-course-row","data-course":D.id,children:[p.jsx("span",{className:"grades-course-dot","aria-hidden":"true"}),p.jsx("strong",{children:D.label}),p.jsx("span",{children:D.count?`${D.earned} / ${D.possible} pts`:"No grades yet"})]},D.id))})]}),p.jsxs("section",{className:"grades-panel surface-card",children:[p.jsx("h2",{children:"Scored work"}),S.length?p.jsx("div",{className:"grades-entries",children:S.slice().sort((D,G)=>G.gradedAt.localeCompare(D.gradedAt)).map(D=>{var G;return p.jsxs("div",{className:"grades-entry",children:[p.jsxs("div",{children:[p.jsx("strong",{children:Uf(D.id,D.courseId)}),p.jsxs("small",{children:[p.jsx(Rd,{size:13}),((G=Oi(D.courseId))==null?void 0:G.label)||D.courseId," · ",kd(D.gradedAt)]})]}),p.jsxs("strong",{children:[D.earned," / ",D.possible," pts"]})]},D.id)})}):p.jsx("p",{children:"No scored lessons or challenges yet."})]}),p.jsxs("section",{className:"grades-panel surface-card",children:[p.jsx("h2",{children:"Still to complete"}),g?p.jsx("p",{children:"Assignment and due-date data will be connected in the next integration stage."}):J.length?p.jsx("div",{className:"grades-entries",children:J.map(D=>{var G;return p.jsxs("div",{className:"grades-entry",children:[p.jsxs("div",{children:[p.jsx("strong",{children:Uf(D.id,D.courseId)}),p.jsx("small",{children:((G=Oi(D.courseId))==null?void 0:G.label)||D.courseId})]}),p.jsxs("div",{className:"grades-due-meta",children:[p.jsx("span",{className:`assignment-status ${D.status.state}`,children:D.status.state==="overdue"?"Overdue":"Assigned"}),p.jsxs("small",{children:["Due ",kd(D.dueDate)]})]})]},D.id)})}):p.jsx("p",{children:"Nothing outstanding in this selection."})]})]})}function Nw({filterCourse:l,onSelect:u,onBrowseCourse:d,grades:g=[]}){const[x,b]=Te.useState(""),[_,T]=Te.useState("all"),[S,j]=Te.useState("all"),[N,W]=Te.useState("all"),A=l||"all",J=Te.useMemo(()=>Tw({query:x,difficulty:_,topic:S,language:N,course:A}),[x,_,S,N,A]),D=()=>{b(""),T("all"),j("all"),W("all"),d(null)};return p.jsxs("div",{className:"main-content challenge-bank-screen",children:[p.jsxs("header",{className:"challenge-bank-intro",children:[p.jsxs("div",{className:"eyebrow",children:[p.jsx(Md,{size:15})," Shared programming practice"]}),p.jsx("h1",{children:"Challenge Bank"}),p.jsx("p",{children:"One problem library for every class. Choose Python, Java, JavaScript, or C# when solving—without duplicating problems across courses."}),p.jsxs("div",{className:"challenge-summary",children:[p.jsx("strong",{children:Wd.length})," original challenges · ",p.jsx("strong",{children:"4"})," languages · ",p.jsx("strong",{children:"1"})," shared library"]})]}),p.jsxs("section",{className:"challenge-filters surface-card","aria-label":"Filter challenges",children:[p.jsxs("div",{className:"filter-title",children:[p.jsx(gy,{size:17}),p.jsx("strong",{children:"Find a challenge"}),p.jsxs("button",{type:"button",className:"filter-clear",onClick:D,children:[p.jsx(ih,{size:14})," Clear filters"]})]}),p.jsxs("div",{className:"challenge-filter-grid",children:[p.jsxs("label",{className:"challenge-search-label",children:["Search",p.jsxs("span",{className:"challenge-search",children:[p.jsx(Zf,{size:16}),p.jsx("input",{type:"search",value:x,placeholder:"Problem, skill, or topic",onChange:G=>b(G.target.value)})]})]}),p.jsxs("label",{children:["Course view",p.jsxs("select",{value:A,onChange:G=>d(G.target.value==="all"?null:G.target.value),children:[p.jsx("option",{value:"all",children:"All courses"}),ns.filter(G=>G.id!=="tsi-math").map(G=>p.jsx("option",{value:G.id,children:G.label},G.id))]})]}),p.jsxs("label",{children:["Difficulty",p.jsxs("select",{value:_,onChange:G=>T(G.target.value),children:[p.jsx("option",{value:"all",children:"Any difficulty"}),Cw.map(G=>p.jsx("option",{value:G,children:G},G))]})]}),p.jsxs("label",{children:["Topic",p.jsxs("select",{value:S,onChange:G=>j(G.target.value),children:[p.jsx("option",{value:"all",children:"Any topic"}),_w.map(G=>p.jsx("option",{value:G,children:G},G))]})]}),p.jsxs("label",{children:["Language",p.jsxs("select",{value:N,onChange:G=>W(G.target.value),children:[p.jsx("option",{value:"all",children:"Any language"}),Qp.map(G=>p.jsx("option",{value:G,children:Mm[G]},G))]})]})]}),p.jsx("p",{className:"challenge-filter-note",children:"Course matching is informational. Confirm students have learned the prerequisite skills before assigning problems."})]}),p.jsxs("div",{className:"challenge-results-heading",children:[p.jsxs("h2",{children:["Available challenges ",p.jsxs("span",{children:["(",J.length,")"]})]}),p.jsx("span",{children:"Alphabetical order"})]}),J.length?p.jsx("div",{className:"challenge-card-grid",children:J.map(G=>p.jsxs("a",{className:"challenge-card surface-card",href:Gf(G.id),onClick:X=>{X.button!==0||X.metaKey||X.ctrlKey||X.shiftKey||X.altKey||(X.preventDefault(),u(G.id))},children:[p.jsxs("div",{className:"challenge-card-top",children:[p.jsx("span",{className:"challenge-level level-"+G.difficulty.toLowerCase().replace(" ","-"),children:G.difficulty}),p.jsx("span",{className:"challenge-points",children:md("challenge:"+G.id,g)?`${md("challenge:"+G.id,g).earned} / ${md("challenge:"+G.id,g).possible} pts earned`:`${G.points} pts available`})]}),p.jsx("h3",{children:G.title}),p.jsx("p",{children:G.summary}),p.jsx("div",{className:"challenge-tags",children:G.tags.map(X=>p.jsx("span",{children:X},X))}),p.jsxs("div",{className:"challenge-course-tags",children:[G.suggestedCourses.slice(0,3).map(X=>{var M,F;return p.jsx("span",{title:(M=Oi(X))==null?void 0:M.label,children:((F=Oi(X))==null?void 0:F.short)||X},X)}),G.suggestedCourses.length>3&&p.jsxs("span",{children:["+",G.suggestedCourses.length-3]})]}),p.jsxs("span",{className:"challenge-open",children:["Open challenge ",p.jsx(Up,{size:16})]})]},G.id))}):p.jsxs("div",{className:"challenge-empty surface-card",children:[p.jsx("h3",{children:"No matching challenges"}),p.jsx("p",{children:"Try a broader topic or clear the filters."}),p.jsx("button",{className:"btn",onClick:D,children:"Show all challenges"})]}),p.jsx("p",{className:"hint challenge-bottom-note",children:"Choose a problem, work through its examples, and compare your approach. Practice here does not count toward your grade."})]})}const Ew=(l,u)=>"designlab:challenge-code:"+l+":"+u;function Lw({challengeId:l,onBack:u}){const d=Dm(l),[g,x]=$n("designlab:challenge-language","python"),b=Qp.includes(g)?g:"python",[_,T]=$n("designlab:challenge-left-width",420),S=Te.useRef(null);if(!d)return p.jsxs("div",{className:"main-content",children:[p.jsx("h1",{children:"Challenge not found"}),p.jsx("button",{className:"btn",onClick:u,children:"Back to bank"})]});const j=kw(l,b),N={id:l,title:d.title,language:b,starter:j,kind:"Challenge",challenge:d.summary,points:d.points,console:"Run or Check executes published examples in your selected language.",storageKey:Ew(l,b),challengeExamples:Sw(l),isChallenge:!0,isPublished:!1},W=A=>{if(!S.current)return;const J=S.current.getBoundingClientRect();T(Math.max(280,Math.min(J.width-360,A.clientX-J.left)))};return p.jsxs("div",{className:"challenge-detail-page",children:[p.jsxs("div",{className:"challenge-breadcrumb",children:[p.jsxs("button",{onClick:u,children:[p.jsx(Jf,{size:16})," Challenge Bank"]}),p.jsx("span",{children:"/"}),p.jsx("span",{children:d.title})]}),p.jsxs("header",{className:"challenge-detail-heading surface-card",children:[p.jsxs("div",{className:"eyebrow",children:["Shared challenge · ",d.difficulty," · ",d.points," available points in the published contract"]}),p.jsx("h1",{children:d.title}),p.jsx("p",{children:d.summary}),p.jsx("p",{children:"Run and Check execute student code using only published examples. No submissions, student records, official points or hidden grading are connected here."}),p.jsxs("div",{className:"challenge-prerequisites",children:[p.jsx("strong",{children:"Prerequisites:"}),d.prerequisites.map(A=>p.jsx("span",{children:A},A))]})]}),p.jsxs("div",{className:"challenge-workspace",ref:S,style:{"--challenge-left":_+"px"},children:[p.jsxs("section",{className:"challenge-instructions",children:[p.jsxs("div",{className:"pane-header",children:[p.jsxs("strong",{children:[p.jsx(sy,{size:16})," Problem & examples"]}),p.jsx("span",{className:"challenge-points",children:"Practice only"})]}),p.jsx("div",{className:"markdown-preview challenge-markdown",dangerouslySetInnerHTML:{__html:Jo(ww(l))}})]}),p.jsx(lc,{axis:"columns",onDrag:W}),p.jsxs("section",{className:"challenge-editor-panel",children:[p.jsxs("div",{className:"challenge-runtime-toolbar",children:[p.jsxs("label",{className:"challenge-language-selector",children:["Language",p.jsx("select",{"aria-label":"Solution language",value:b,onChange:A=>x(A.target.value),children:Qp.map(A=>p.jsx("option",{value:A,children:Mm[A]},A))})]}),p.jsx("span",{children:"Live public-example checks"})]}),p.jsx(Tm,{lessonId:"challenge:"+l+":"+b,task:N},l+":"+b)]})]})]})}function Pw(){var R;const[l,u]=Te.useState(()=>cd()),[d,g]=$n("designlab:course","computer-science-1"),[x,b]=$n("designlab:theme","dark"),[_,T]=$n("designlab:course-colors",{}),[S,j]=$n("designlab:sidebar",!0);$n("designlab:completed-lessons",[]);const[N,W]=Te.useState({status:"loading",grades:[],weeklyPoints:[]}),A=N.grades,J=[],D=Wg([],A),[G,X]=Te.useState({}),[M,F]=Te.useState({}),[q,H]=Te.useState(!0),Y=Te.useMemo(()=>ns.filter(L=>L.id==="computer-science-1").map(L=>{if(L.id==="computer-science-1"||L.id==="test-prep")return L;if(L.id==="capstone")return{...L,units:[],lessons:[],lessonRecords:{},publishedContent:!1,projects:[]};const $=G[L.id];return $?{...L,...$,publishedContent:!0}:{...L,units:[],lessons:[],lessonRecords:{},projects:[],contentLoadingError:M[L.id]||null}}),[G,M]);Te.useEffect(()=>{let L=!0;return Vg().then($=>{L&&W($)}).catch(()=>{L&&W({status:"unavailable",grades:[],weeklyPoints:[],message:"Account lookup unavailable. No production records were changed."})}),()=>{L=!1}},[]),Te.useEffect(()=>{const L=new AbortController;let $=!0;return Promise.all([].map(async O=>{try{return{courseId:O,data:await Yg(O,{signal:L.signal})}}catch(Z){return{courseId:O,error:String((Z==null?void 0:Z.message)||Z)}}})).then(O=>{if(!$)return;const Z={},ke={};for(const Ie of O)Ie.data?Z[Ie.courseId]=Ie.data:ke[Ie.courseId]=Ie.error;X(Z),F(ke),H(!1)}),()=>{$=!1,L.abort()}},[]),Te.useEffect(()=>{u(cd(window.location.pathname,Y))},[Y]);const[pe,V]=$n("designlab:students",bd),[ye,ze]=$n("designlab:journal-submissions",yg);Te.useEffect(()=>{document.documentElement.dataset.theme=x},[x]),Te.useEffect(()=>{Ig(_,ns)},[_]);function _e(L,$){!ns.some(O=>O.id===L)||!Pd($)||T(O=>({...O&&typeof O=="object"?O:{},[L]:$.toUpperCase()}))}function oe(L){T($=>{const O={...$&&typeof $=="object"?$:{}};return delete O[L],O})}Te.useEffect(()=>{var $;l.page==="course"&&g(l.courseId);const L=l.page==="course"?($=Oi(l.courseId))==null?void 0:$.label:l.page==="admin"?"Admin dashboard":l.page==="teacher"?"Teacher dashboard":l.page==="grades"?"Grades":l.page==="journals"?"Weekly journals":l.page==="challenges"?"Challenge Bank":l.page==="challenge"?"Coding challenge":"Your playgrounds";document.title=`${L||"Playground"} | Ms. Whitby's Playground — React Lab`},[l.page,l.courseId,g]),Te.useEffect(()=>{const L=()=>u(cd(window.location.pathname,Y));return window.addEventListener("popstate",L),window.addEventListener("hashchange",L),()=>{window.removeEventListener("popstate",L),window.removeEventListener("hashchange",L)}},[Y]);const Ce=Te.useCallback(L=>{window.location.pathname!==L&&window.history.pushState({},"",L),u(cd(window.location.pathname,Y)),window.scrollTo({top:0,behavior:"auto"})},[Y]);function le(L,$){if(!L)return Ce(Hl());g(L),Ce(th(L,$))}function ve(L,$,O=null){Ce(Yf(L,$,O))}function E(L){L==="teacher"?Ce($h()):L==="admin"?Ce(Zg()):L==="journals"?Ce(ey()):L==="grades"?Ce(ty()):L==="challenges"?Ce(Wl()):L==="course"?le(l.page==="course"?l.courseId:d):Ce(Hl())}const ee=l.page,Q=l.courseId||d;return p.jsxs("div",{className:"app-shell",children:[p.jsx(Py,{sidebarOpen:S,onToggleSidebar:()=>j(!S),onHome:()=>Ce(Hl()),theme:x,setTheme:b,readOnlyMode:qu,accountLabel:(R=N.user)==null?void 0:R.handle}),p.jsxs("div",{className:ua("app-layout",!S&&"sidebar-closed"),children:[p.jsx(Ry,{open:S,page:ee,courseId:Q,lessonId:l.page==="course"?l.lessonId:null,setPage:E,openCourse:le,completedLessons:D,assignments:J,grades:A,availableCourses:Y,readOnlyMode:qu,onOpenProject:ve}),p.jsxs("main",{className:"main-panel",children:[p.jsxs("section",{className:"cs1-integration-notice",role:"status",children:[p.jsx("strong",{children:"Computer Science I · read-only integration test"}),p.jsx("span",{children:N.status==="loading"?"Checking your existing Playground session…":N.status==="signed-in"?"Signed in as "+N.user.handle+" · Your own verified grades are shown.":N.status==="signed-out"?"Sign in on the current Playground to view your existing results.":N.message||"Could not verify your existing session."}),p.jsx("a",{href:"/playground/",children:"Open current Playground"})]}),["home","course","grades","teacher"].includes(ee)?ee==="home"?p.jsx(zy,{availableCourses:Y,completedLessons:D,openCourse:le,openTeacher:()=>Ce($h()),openChallenges:()=>Ce(Wl()),readOnlyMode:qu}):ee==="course"?p.jsx(Nb,{courseId:l.courseId,lessonId:l.lessonId,projectId:l.projectId,projectStepId:l.stepId,availableCourses:Y,openCourse:le,openProject:ve,openChallenges:L=>Ce(Wl(L)),completedLessons:D,assignments:J,grades:A,readOnlyMode:qu,onToggleLessonComplete:void 0,courseColors:_,onSetCourseColor:_e,onResetCourseColor:oe},l.courseId):ee==="grades"?p.jsx(jw,{grades:A,assignments:J,completedLessons:D,readOnlyMode:qu,weeklyPoints:N.weeklyPoints,accountStatus:N.status}):ee==="challenges"?p.jsx(Nw,{grades:A,filterCourse:l.filterCourse,onSelect:L=>Ce(Gf(L)),onBrowseCourse:L=>Ce(Wl(L))}):ee==="challenge"?p.jsx(Lw,{challengeId:l.challengeId,grades:A,onBack:()=>Ce(Wl())},l.challengeId):ee==="journals"?p.jsx(Bb,{submissions:ye,setSubmissions:ze}):ee==="teacher"?p.jsx(Mb,{}):ee==="admin"?p.jsx(Wb,{students:pe,setStudents:V}):q?p.jsxs("div",{className:"main-content route-not-found",role:"status",children:[p.jsx("h1",{children:"Loading published course materials…"}),p.jsx("p",{children:"The lesson and project links will appear once the course catalogs are loaded."})]}):p.jsxs("div",{className:"main-content route-not-found",children:[p.jsx("div",{className:"eyebrow",children:"Link not found"}),p.jsx("h1",{children:"That playground page doesn't exist."}),p.jsx("p",{children:"Check the link or return to the list of playgrounds."}),p.jsx("button",{className:"btn primary",onClick:()=>Ce(Hl()),children:"See all playgrounds"})]}):p.jsxs("div",{className:"main-content",children:[p.jsx("h1",{children:"Not enabled in this test build"}),p.jsx("p",{children:"Teacher tools, journals, challenges, and submissions remain in the current Playground until their permissions and data are integrated."}),p.jsx("a",{href:"/playground/",children:"Return to current Playground"})]})]})]}),p.jsx(Iy,{})]})}dg.createRoot(document.getElementById("root")).render(p.jsx(sg.StrictMode,{children:p.jsx(Pw,{})}));
