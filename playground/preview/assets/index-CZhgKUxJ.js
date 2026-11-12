var Om=Object.defineProperty;var Dm=(u,h,p)=>h in u?Om(u,h,{enumerable:!0,configurable:!0,writable:!0,value:p}):u[h]=p;var sn=(u,h,p)=>Dm(u,typeof h!="symbol"?h+"":h,p);(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))v(x);new MutationObserver(x=>{for(const w of x)if(w.type==="childList")for(const N of w.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&v(N)}).observe(document,{childList:!0,subtree:!0});function p(x){const w={};return x.integrity&&(w.integrity=x.integrity),x.referrerPolicy&&(w.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?w.credentials="include":x.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function v(x){if(x.ep)return;x.ep=!0;const w=p(x);fetch(x.href,w)}})();function If(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var yh={exports:{}},Ku={},vh={exports:{}},jt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function zm(){if(jp)return jt;jp=1;var u=Symbol.for("react.element"),h=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),N=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),M=Symbol.iterator;function I(H){return H===null||typeof H!="object"?null:(H=M&&H[M]||H["@@iterator"],typeof H=="function"?H:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,$={};function se(H,ae,Oe){this.props=H,this.context=ae,this.refs=$,this.updater=Oe||V}se.prototype.isReactComponent={},se.prototype.setState=function(H,ae){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,ae,"setState")},se.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function D(){}D.prototype=se.prototype;function F(H,ae,Oe){this.props=H,this.context=ae,this.refs=$,this.updater=Oe||V}var z=F.prototype=new D;z.constructor=F,ne(z,se.prototype),z.isPureReactComponent=!0;var q=Array.isArray,Y=Object.prototype.hasOwnProperty,ge={current:null},le={key:!0,ref:!0,__self:!0,__source:!0};function ye(H,ae,Oe){var Je,Ve={},Se=null,Me=null;if(ae!=null)for(Je in ae.ref!==void 0&&(Me=ae.ref),ae.key!==void 0&&(Se=""+ae.key),ae)Y.call(ae,Je)&&!le.hasOwnProperty(Je)&&(Ve[Je]=ae[Je]);var He=arguments.length-2;if(He===1)Ve.children=Oe;else if(1<He){for(var Be=Array(He),tt=0;tt<He;tt++)Be[tt]=arguments[tt+2];Ve.children=Be}if(H&&H.defaultProps)for(Je in He=H.defaultProps,He)Ve[Je]===void 0&&(Ve[Je]=He[Je]);return{$$typeof:u,type:H,key:Se,ref:Me,props:Ve,_owner:ge.current}}function We(H,ae){return{$$typeof:u,type:H.type,key:ae,ref:H.ref,props:H.props,_owner:H._owner}}function Te(H){return typeof H=="object"&&H!==null&&H.$$typeof===u}function ie(H){var ae={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(Oe){return ae[Oe]})}var ke=/\/+/g;function re(H,ae){return typeof H=="object"&&H!==null&&H.key!=null?ie(""+H.key):ae.toString(36)}function ve(H,ae,Oe,Je,Ve){var Se=typeof H;(Se==="undefined"||Se==="boolean")&&(H=null);var Me=!1;if(H===null)Me=!0;else switch(Se){case"string":case"number":Me=!0;break;case"object":switch(H.$$typeof){case u:case h:Me=!0}}if(Me)return Me=H,Ve=Ve(Me),H=Je===""?"."+re(Me,0):Je,q(Ve)?(Oe="",H!=null&&(Oe=H.replace(ke,"$&/")+"/"),ve(Ve,ae,Oe,"",function(tt){return tt})):Ve!=null&&(Te(Ve)&&(Ve=We(Ve,Oe+(!Ve.key||Me&&Me.key===Ve.key?"":(""+Ve.key).replace(ke,"$&/")+"/")+H)),ae.push(Ve)),1;if(Me=0,Je=Je===""?".":Je+":",q(H))for(var He=0;He<H.length;He++){Se=H[He];var Be=Je+re(Se,He);Me+=ve(Se,ae,Oe,Be,Ve)}else if(Be=I(H),typeof Be=="function")for(H=Be.call(H),He=0;!(Se=H.next()).done;)Se=Se.value,Be=Je+re(Se,He++),Me+=ve(Se,ae,Oe,Be,Ve);else if(Se==="object")throw ae=String(H),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return Me}function T(H,ae,Oe){if(H==null)return H;var Je=[],Ve=0;return ve(H,Je,"","",function(Se){return ae.call(Oe,Se,Ve++)}),Je}function Q(H){if(H._status===-1){var ae=H._result;ae=ae(),ae.then(function(Oe){(H._status===0||H._status===-1)&&(H._status=1,H._result=Oe)},function(Oe){(H._status===0||H._status===-1)&&(H._status=2,H._result=Oe)}),H._status===-1&&(H._status=0,H._result=ae)}if(H._status===1)return H._result.default;throw H._result}var U={current:null},S={transition:null},P={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:S,ReactCurrentOwner:ge};function G(){throw Error("act(...) is not supported in production builds of React.")}return jt.Children={map:T,forEach:function(H,ae,Oe){T(H,function(){ae.apply(this,arguments)},Oe)},count:function(H){var ae=0;return T(H,function(){ae++}),ae},toArray:function(H){return T(H,function(ae){return ae})||[]},only:function(H){if(!Te(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},jt.Component=se,jt.Fragment=p,jt.Profiler=x,jt.PureComponent=F,jt.StrictMode=v,jt.Suspense=C,jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,jt.act=G,jt.cloneElement=function(H,ae,Oe){if(H==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+H+".");var Je=ne({},H.props),Ve=H.key,Se=H.ref,Me=H._owner;if(ae!=null){if(ae.ref!==void 0&&(Se=ae.ref,Me=ge.current),ae.key!==void 0&&(Ve=""+ae.key),H.type&&H.type.defaultProps)var He=H.type.defaultProps;for(Be in ae)Y.call(ae,Be)&&!le.hasOwnProperty(Be)&&(Je[Be]=ae[Be]===void 0&&He!==void 0?He[Be]:ae[Be])}var Be=arguments.length-2;if(Be===1)Je.children=Oe;else if(1<Be){He=Array(Be);for(var tt=0;tt<Be;tt++)He[tt]=arguments[tt+2];Je.children=He}return{$$typeof:u,type:H.type,key:Ve,ref:Se,props:Je,_owner:Me}},jt.createContext=function(H){return H={$$typeof:N,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},H.Provider={$$typeof:w,_context:H},H.Consumer=H},jt.createElement=ye,jt.createFactory=function(H){var ae=ye.bind(null,H);return ae.type=H,ae},jt.createRef=function(){return{current:null}},jt.forwardRef=function(H){return{$$typeof:E,render:H}},jt.isValidElement=Te,jt.lazy=function(H){return{$$typeof:A,_payload:{_status:-1,_result:H},_init:Q}},jt.memo=function(H,ae){return{$$typeof:L,type:H,compare:ae===void 0?null:ae}},jt.startTransition=function(H){var ae=S.transition;S.transition={};try{H()}finally{S.transition=ae}},jt.unstable_act=G,jt.useCallback=function(H,ae){return U.current.useCallback(H,ae)},jt.useContext=function(H){return U.current.useContext(H)},jt.useDebugValue=function(){},jt.useDeferredValue=function(H){return U.current.useDeferredValue(H)},jt.useEffect=function(H,ae){return U.current.useEffect(H,ae)},jt.useId=function(){return U.current.useId()},jt.useImperativeHandle=function(H,ae,Oe){return U.current.useImperativeHandle(H,ae,Oe)},jt.useInsertionEffect=function(H,ae){return U.current.useInsertionEffect(H,ae)},jt.useLayoutEffect=function(H,ae){return U.current.useLayoutEffect(H,ae)},jt.useMemo=function(H,ae){return U.current.useMemo(H,ae)},jt.useReducer=function(H,ae,Oe){return U.current.useReducer(H,ae,Oe)},jt.useRef=function(H){return U.current.useRef(H)},jt.useState=function(H){return U.current.useState(H)},jt.useSyncExternalStore=function(H,ae,Oe){return U.current.useSyncExternalStore(H,ae,Oe)},jt.useTransition=function(){return U.current.useTransition()},jt.version="18.3.1",jt}var Ep;function $h(){return Ep||(Ep=1,vh.exports=zm()),vh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function Fm(){if(Lp)return Ku;Lp=1;var u=$h(),h=Symbol.for("react.element"),p=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,x=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function N(E,C,L){var A,M={},I=null,V=null;L!==void 0&&(I=""+L),C.key!==void 0&&(I=""+C.key),C.ref!==void 0&&(V=C.ref);for(A in C)v.call(C,A)&&!w.hasOwnProperty(A)&&(M[A]=C[A]);if(E&&E.defaultProps)for(A in C=E.defaultProps,C)M[A]===void 0&&(M[A]=C[A]);return{$$typeof:h,type:E,key:I,ref:V,props:M,_owner:x.current}}return Ku.Fragment=p,Ku.jsx=N,Ku.jsxs=N,Ku}var Pp;function Wm(){return Pp||(Pp=1,yh.exports=Fm()),yh.exports}var c=Wm(),Ae=$h();const Hm=If(Ae);var ld={},xh={exports:{}},ei={},bh={exports:{}},wh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function Bm(){return Ap||(Ap=1,(function(u){function h(S,P){var G=S.length;S.push(P);e:for(;0<G;){var H=G-1>>>1,ae=S[H];if(0<x(ae,P))S[H]=P,S[G]=ae,G=H;else break e}}function p(S){return S.length===0?null:S[0]}function v(S){if(S.length===0)return null;var P=S[0],G=S.pop();if(G!==P){S[0]=G;e:for(var H=0,ae=S.length,Oe=ae>>>1;H<Oe;){var Je=2*(H+1)-1,Ve=S[Je],Se=Je+1,Me=S[Se];if(0>x(Ve,G))Se<ae&&0>x(Me,Ve)?(S[H]=Me,S[Se]=G,H=Se):(S[H]=Ve,S[Je]=G,H=Je);else if(Se<ae&&0>x(Me,G))S[H]=Me,S[Se]=G,H=Se;else break e}}return P}function x(S,P){var G=S.sortIndex-P.sortIndex;return G!==0?G:S.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;u.unstable_now=function(){return w.now()}}else{var N=Date,E=N.now();u.unstable_now=function(){return N.now()-E}}var C=[],L=[],A=1,M=null,I=3,V=!1,ne=!1,$=!1,se=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(S){for(var P=p(L);P!==null;){if(P.callback===null)v(L);else if(P.startTime<=S)v(L),P.sortIndex=P.expirationTime,h(C,P);else break;P=p(L)}}function q(S){if($=!1,z(S),!ne)if(p(C)!==null)ne=!0,Q(Y);else{var P=p(L);P!==null&&U(q,P.startTime-S)}}function Y(S,P){ne=!1,$&&($=!1,D(ye),ye=-1),V=!0;var G=I;try{for(z(P),M=p(C);M!==null&&(!(M.expirationTime>P)||S&&!ie());){var H=M.callback;if(typeof H=="function"){M.callback=null,I=M.priorityLevel;var ae=H(M.expirationTime<=P);P=u.unstable_now(),typeof ae=="function"?M.callback=ae:M===p(C)&&v(C),z(P)}else v(C);M=p(C)}if(M!==null)var Oe=!0;else{var Je=p(L);Je!==null&&U(q,Je.startTime-P),Oe=!1}return Oe}finally{M=null,I=G,V=!1}}var ge=!1,le=null,ye=-1,We=5,Te=-1;function ie(){return!(u.unstable_now()-Te<We)}function ke(){if(le!==null){var S=u.unstable_now();Te=S;var P=!0;try{P=le(!0,S)}finally{P?re():(ge=!1,le=null)}}else ge=!1}var re;if(typeof F=="function")re=function(){F(ke)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,T=ve.port2;ve.port1.onmessage=ke,re=function(){T.postMessage(null)}}else re=function(){se(ke,0)};function Q(S){le=S,ge||(ge=!0,re())}function U(S,P){ye=se(function(){S(u.unstable_now())},P)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(S){S.callback=null},u.unstable_continueExecution=function(){ne||V||(ne=!0,Q(Y))},u.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):We=0<S?Math.floor(1e3/S):5},u.unstable_getCurrentPriorityLevel=function(){return I},u.unstable_getFirstCallbackNode=function(){return p(C)},u.unstable_next=function(S){switch(I){case 1:case 2:case 3:var P=3;break;default:P=I}var G=I;I=P;try{return S()}finally{I=G}},u.unstable_pauseExecution=function(){},u.unstable_requestPaint=function(){},u.unstable_runWithPriority=function(S,P){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var G=I;I=S;try{return P()}finally{I=G}},u.unstable_scheduleCallback=function(S,P,G){var H=u.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?H+G:H):G=H,S){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=G+ae,S={id:A++,callback:P,priorityLevel:S,startTime:G,expirationTime:ae,sortIndex:-1},G>H?(S.sortIndex=G,h(L,S),p(C)===null&&S===p(L)&&($?(D(ye),ye=-1):$=!0,U(q,G-H))):(S.sortIndex=ae,h(C,S),ne||V||(ne=!0,Q(Y))),S},u.unstable_shouldYield=ie,u.unstable_wrapCallback=function(S){var P=I;return function(){var G=I;I=P;try{return S.apply(this,arguments)}finally{I=G}}}})(wh)),wh}var Rp;function Um(){return Rp||(Rp=1,bh.exports=Bm()),bh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function qm(){if(Ip)return ei;Ip=1;var u=$h(),h=Um();function p(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v=new Set,x={};function w(t,r){N(t,r),N(t+"Capture",r)}function N(t,r){for(x[t]=r,t=0;t<r.length;t++)v.add(r[t])}var E=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),C=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A={},M={};function I(t){return C.call(M,t)?!0:C.call(A,t)?!1:L.test(t)?M[t]=!0:(A[t]=!0,!1)}function V(t,r,a,l){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ne(t,r,a,l){if(r===null||typeof r>"u"||V(t,r,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function $(t,r,a,l,f,g,j){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=g,this.removeEmptyString=j}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){se[t]=new $(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];se[r]=new $(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){se[t]=new $(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){se[t]=new $(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){se[t]=new $(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){se[t]=new $(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){se[t]=new $(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){se[t]=new $(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){se[t]=new $(t,5,!1,t.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function F(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(D,F);se[r]=new $(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(D,F);se[r]=new $(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(D,F);se[r]=new $(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){se[t]=new $(t,1,!1,t.toLowerCase(),null,!1,!1)}),se.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){se[t]=new $(t,1,!1,t.toLowerCase(),null,!0,!0)});function z(t,r,a,l){var f=se.hasOwnProperty(r)?se[r]:null;(f!==null?f.type!==0:l||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(ne(r,a,f,l)&&(a=null),l||f===null?I(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(r=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(r):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,r,a):t.setAttribute(r,a))))}var q=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),ge=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),ie=Symbol.for("react.context"),ke=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),S=Symbol.iterator;function P(t){return t===null||typeof t!="object"?null:(t=S&&t[S]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,H;function ae(t){if(H===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);H=r&&r[1]||""}return`
`+H+t}var Oe=!1;function Je(t,r){if(!t||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(he){var l=he}Reflect.construct(t,[],r)}else{try{r.call()}catch(he){l=he}t.call(r.prototype)}else{try{throw Error()}catch(he){l=he}t()}}catch(he){if(he&&l&&typeof he.stack=="string"){for(var f=he.stack.split(`
`),g=l.stack.split(`
`),j=f.length-1,K=g.length-1;1<=j&&0<=K&&f[j]!==g[K];)K--;for(;1<=j&&0<=K;j--,K--)if(f[j]!==g[K]){if(j!==1||K!==1)do if(j--,K--,0>K||f[j]!==g[K]){var X=`
`+f[j].replace(" at new "," at ");return t.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",t.displayName)),X}while(1<=j&&0<=K);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ae(t):""}function Ve(t){switch(t.tag){case 5:return ae(t.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return t=Je(t.type,!1),t;case 11:return t=Je(t.type.render,!1),t;case 1:return t=Je(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case le:return"Fragment";case ge:return"Portal";case We:return"Profiler";case ye:return"StrictMode";case re:return"Suspense";case ve:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ie:return(t.displayName||"Context")+".Consumer";case Te:return(t._context.displayName||"Context")+".Provider";case ke:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case T:return r=t.displayName||null,r!==null?r:Se(t.type)||"Memo";case Q:r=t._payload,t=t._init;try{return Se(t(r))}catch{}}return null}function Me(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(r);case 8:return r===ye?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function He(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Be(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function tt(t){var r=Be(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(j){l=""+j,g.call(this,j)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(j){l=""+j},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ge(t){t._valueTracker||(t._valueTracker=tt(t))}function qt(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return t&&(l=Be(t)?t.checked?"true":"false":t.value),t=l,t!==a?(r.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $t(t,r){var a=r.checked;return G({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function fn(t,r){var a=r.defaultValue==null?"":r.defaultValue,l=r.checked!=null?r.checked:r.defaultChecked;a=He(r.value!=null?r.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function et(t,r){r=r.checked,r!=null&&z(t,"checked",r,!1)}function bt(t,r){et(t,r);var a=He(r.value),l=r.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Zt(t,r.type,a):r.hasOwnProperty("defaultValue")&&Zt(t,r.type,He(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function lt(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;if(!(l!=="submit"&&l!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Zt(t,r,a){(r!=="number"||Qt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ke=Array.isArray;function vt(t,r,a,l){if(t=t.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=r.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+He(a),r=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function oe(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(p(91));return G({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _e(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(p(92));if(Ke(a)){if(1<a.length)throw Error(p(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:He(a)}}function me(t,r){var a=He(r.value),l=He(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function xt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function $e(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function st(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?$e(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qe,mt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(r,a,l,f)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(qe=qe||document.createElement("div"),qe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=qe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function dt(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xn=["Webkit","ms","Moz","O"];Object.keys(mn).forEach(function(t){Xn.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),mn[r]=mn[t]})});function _r(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||mn.hasOwnProperty(t)&&mn[t]?(""+r).trim():r+"px"}function Hr(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=_r(a,r[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var or=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vi(t,r){if(r){if(or[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(p(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(p(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(p(61))}if(r.style!=null&&typeof r.style!="object")throw Error(p(62))}}function gt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function nt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tr=null,Gt=null,At=null;function Rt(t){if(t=dn(t)){if(typeof Tr!="function")throw Error(p(280));var r=t.stateNode;r&&(r=yn(r),Tr(t.stateNode,t.type,r))}}function jn(t){Gt?At?At.push(t):At=[t]:Gt=t}function un(){if(Gt){var t=Gt,r=At;if(At=Gt=null,Rt(t),r)for(t=0;t<r.length;t++)Rt(r[t])}}function ar(t,r){return t(r)}function wn(){}var ni=!1;function In(t,r,a){if(ni)return t(r,a);ni=!0;try{return ar(t,r,a)}finally{ni=!1,(Gt!==null||At!==null)&&(wn(),un())}}function lr(t,r){var a=t.stateNode;if(a===null)return null;var l=yn(a);if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(p(231,r,typeof a));return a}var Br=!1;if(E)try{var En={};Object.defineProperty(En,"passive",{get:function(){Br=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Br=!1}function Nr(t,r,a,l,f,g,j,K,X){var he=Array.prototype.slice.call(arguments,3);try{r.apply(a,he)}catch(Pe){this.onError(Pe)}}var Qn=!1,ri=null,Ur=!1,qr=null,ur={onError:function(t){Qn=!0,ri=t}};function Kr(t,r,a,l,f,g,j,K,X){Qn=!1,ri=null,Nr.apply(ur,arguments)}function Ls(t,r,a,l,f,g,j,K,X){if(Kr.apply(this,arguments),Qn){if(Qn){var he=ri;Qn=!1,ri=null}else throw Error(p(198));Ur||(Ur=!0,qr=he)}}function kn(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function mo(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Rr(t){if(kn(t)!==t)throw Error(p(188))}function Ir(t){var r=t.alternate;if(!r){if(r=kn(t),r===null)throw Error(p(188));return r!==t?null:t}for(var a=t,l=r;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Rr(f),t;if(g===l)return Rr(f),r;g=g.sibling}throw Error(p(188))}if(a.return!==l.return)a=f,l=g;else{for(var j=!1,K=f.child;K;){if(K===a){j=!0,a=f,l=g;break}if(K===l){j=!0,l=f,a=g;break}K=K.sibling}if(!j){for(K=g.child;K;){if(K===a){j=!0,a=g,l=f;break}if(K===l){j=!0,l=g,a=f;break}K=K.sibling}if(!j)throw Error(p(189))}}if(a.alternate!==l)throw Error(p(190))}if(a.tag!==3)throw Error(p(188));return a.stateNode.current===a?t:r}function jr(t){return t=Ir(t),t!==null?Ft(t):null}function Ft(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Ft(t);if(r!==null)return r;t=t.sibling}return null}var Er=h.unstable_scheduleCallback,zi=h.unstable_cancelCallback,ii=h.unstable_shouldYield,xi=h.unstable_requestPaint,Lt=h.unstable_now,os=h.unstable_getCurrentPriorityLevel,bi=h.unstable_ImmediatePriority,Yt=h.unstable_UserBlockingPriority,Xe=h.unstable_NormalPriority,si=h.unstable_LowPriority,cr=h.unstable_IdlePriority,Mn=null,_=null;function W(t){if(_&&typeof _.onCommitFiberRoot=="function")try{_.onCommitFiberRoot(Mn,t,void 0,(t.current.flags&128)===128)}catch{}}var pe=Math.clz32?Math.clz32:Fe,Ne=Math.log,de=Math.LN2;function Fe(t){return t>>>=0,t===0?32:31-(Ne(t)/de|0)|0}var Ct=64,Jt=4194304;function Sn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oi(t,r){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,g=t.pingedLanes,j=a&268435455;if(j!==0){var K=j&~f;K!==0?l=Sn(K):(g&=j,g!==0&&(l=Sn(g)))}else j=a&~f,j!==0?l=Sn(j):g!==0&&(l=Sn(g));if(l===0)return 0;if(r!==0&&r!==l&&(r&f)===0&&(f=l&-l,g=r&-r,f>=g||f===16&&(g&4194240)!==0))return r;if((l&4)!==0&&(l|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=l;0<r;)a=31-pe(r),f=1<<a,l|=t[a],r&=~f;return l}function Xa(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ft(t,r){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,g=t.pendingLanes;0<g;){var j=31-pe(g),K=1<<j,X=f[j];X===-1?((K&a)===0||(K&l)!==0)&&(f[j]=Xa(K,r)):X<=r&&(t.expiredLanes|=K),g&=~K}}function go(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ra(){var t=Ct;return Ct<<=1,(Ct&4194240)===0&&(Ct=64),t}function Fi(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Kn(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-pe(r),t[r]=a}function Ps(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-pe(a),g=1<<f;r[f]=0,l[f]=-1,t[f]=-1,a&=~g}}function as(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var l=31-pe(a),f=1<<l;f&r|t[l]&r&&(t[l]|=r),a&=~f}}var Nt=0;function Wi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var $r,ai,dr,ia,ls,yo=!1,As=[],hr=null,Mr=null,On=null,Rs=new Map,us=new Map,Or=[],Is="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sa(t,r){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Rs.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(r.pointerId)}}function Hi(t,r,a,l,f,g){return t===null||t.nativeEvent!==g?(t={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:g,targetContainers:[f]},r!==null&&(r=dn(r),r!==null&&ai(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function Ms(t,r,a,l,f){switch(r){case"focusin":return hr=Hi(hr,t,r,a,l,f),!0;case"dragenter":return Mr=Hi(Mr,t,r,a,l,f),!0;case"mouseover":return On=Hi(On,t,r,a,l,f),!0;case"pointerover":var g=f.pointerId;return Rs.set(g,Hi(Rs.get(g)||null,t,r,a,l,f)),!0;case"gotpointercapture":return g=f.pointerId,us.set(g,Hi(us.get(g)||null,t,r,a,l,f)),!0}return!1}function vo(t){var r=Ln(t.target);if(r!==null){var a=kn(r);if(a!==null){if(r=a.tag,r===13){if(r=mo(a),r!==null){t.blockedOn=r,ls(t.priority,function(){dr(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ce(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=$n(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Di=l,a.target.dispatchEvent(l),Di=null}else return r=dn(a),r!==null&&ai(r),t.blockedOn=a,!1;r.shift()}return!0}function R(t,r,a){Ce(t)&&a.delete(r)}function J(){yo=!1,hr!==null&&Ce(hr)&&(hr=null),Mr!==null&&Ce(Mr)&&(Mr=null),On!==null&&Ce(On)&&(On=null),Rs.forEach(R),us.forEach(R)}function be(t,r){t.blockedOn===r&&(t.blockedOn=null,yo||(yo=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,J)))}function we(t){function r(f){return be(f,t)}if(0<As.length){be(As[0],t);for(var a=1;a<As.length;a++){var l=As[a];l.blockedOn===t&&(l.blockedOn=null)}}for(hr!==null&&be(hr,t),Mr!==null&&be(Mr,t),On!==null&&be(On,t),Rs.forEach(r),us.forEach(r),a=0;a<Or.length;a++)l=Or[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Or.length&&(a=Or[0],a.blockedOn===null);)vo(a),a.blockedOn===null&&Or.shift()}var Ze=q.ReactCurrentBatchConfig,ut=!0;function kt(t,r,a,l){var f=Nt,g=Ze.transition;Ze.transition=null;try{Nt=1,pr(t,r,a,l)}finally{Nt=f,Ze.transition=g}}function gn(t,r,a,l){var f=Nt,g=Ze.transition;Ze.transition=null;try{Nt=4,pr(t,r,a,l)}finally{Nt=f,Ze.transition=g}}function pr(t,r,a,l){if(ut){var f=$n(t,r,a,l);if(f===null)du(t,r,l,cn,a),sa(t,l);else if(Ms(f,t,r,a,l))l.stopPropagation();else if(sa(t,l),r&4&&-1<Is.indexOf(t)){for(;f!==null;){var g=dn(f);if(g!==null&&$r(g),g=$n(t,r,a,l),g===null&&du(t,r,l,cn,a),g===f)break;f=g}f!==null&&l.stopPropagation()}else du(t,r,l,null,a)}}var cn=null;function $n(t,r,a,l){if(cn=null,t=nt(l),t=Ln(t),t!==null)if(r=kn(t),r===null)t=null;else if(a=r.tag,a===13){if(t=mo(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return cn=t,null}function wi(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(os()){case bi:return 1;case Yt:return 4;case Xe:case si:return 16;case cr:return 536870912;default:return 16}default:return 16}}var Pt=null,xo=null,Qa=null;function Za(){if(Qa)return Qa;var t,r=xo,a=r.length,l,f="value"in Pt?Pt.value:Pt.textContent,g=f.length;for(t=0;t<a&&r[t]===f[t];t++);var j=a-t;for(l=1;l<=j&&r[a-l]===f[g-l];l++);return Qa=f.slice(t,1<l?1-l:void 0)}function oa(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function li(){return!0}function Ja(){return!1}function Cn(t){function r(a,l,f,g,j){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=g,this.target=j,this.currentTarget=null;for(var K in t)t.hasOwnProperty(K)&&(a=t[K],this[K]=a?a(g):g[K]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?li:Ja,this.isPropagationStopped=Ja,this}return G(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),r}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=Cn(Bi),ki=G({},Bi,{view:0,detail:0}),Rd=Cn(ki),Yl,Vl,la,ua=G({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(Yl=t.screenX-la.screenX,Vl=t.screenY-la.screenY):Vl=Yl=0,la=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:Vl}}),Xl=Cn(ua),Id=G({},ua,{dataTransfer:0}),Md=Cn(Id),Od=G({},ki,{relatedTarget:0}),Ql=Cn(Od),uc=G({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Dd=Cn(uc),cc=G({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),el=Cn(cc),bo=G({},Bi,{data:0}),dc=Cn(bo),zd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ca={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dn(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=ca[t])?!!r[t]:!1}function Zl(){return Dn}var hc=G({},ki,{key:function(t){if(t.key){var r=zd[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=oa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?oa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),da=Cn(hc),Wd=G({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jl=Cn(Wd),Hd=G({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),eu=Cn(Hd),pc=G({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bd=Cn(pc),Ud=G({},ua,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fc=Cn(Ud),mc=[9,13,27,32],tu=E&&"CompositionEvent"in window,Ui=null;E&&"documentMode"in document&&(Ui=document.documentMode);var qi=E&&"TextEvent"in window&&!Ui,ha=E&&(!tu||Ui&&8<Ui&&11>=Ui),tl=" ",nu=!1;function ui(t,r){switch(t){case"keyup":return mc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function qd(t,r){switch(t){case"compositionend":return cs(r);case"keypress":return r.which!==32?null:(nu=!0,tl);case"textInput":return t=r.data,t===tl&&nu?null:t;default:return null}}function gc(t,r){if(ds)return t==="compositionend"||!tu&&ui(t,r)?(t=Za(),Qa=xo=Pt=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ha&&r.locale!=="ko"?null:r.data;default:return null}}var Kd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Kd[t.type]:r==="textarea"}function nl(t,r,a,l){jn(l),r=To(r,"onChange"),0<r.length&&(a=new aa("onChange","change",null,a,l),t.push({event:a,listeners:r}))}var Si=null,Lr=null;function yc(t){hl(t,0)}function pa(t){var r=Tn(t);if(qt(r))return t}function $d(t,r){if(t==="change")return r}var vc=!1;if(E){var iu;if(E){var rl="oninput"in document;if(!rl){var su=document.createElement("div");su.setAttribute("oninput","return;"),rl=typeof su.oninput=="function"}iu=rl}else iu=!1;vc=iu&&(!document.documentMode||9<document.documentMode)}function wo(){Si&&(Si.detachEvent("onpropertychange",ou),Lr=Si=null)}function ou(t){if(t.propertyName==="value"&&pa(Lr)){var r=[];nl(r,Lr,t,nt(t)),In(yc,r)}}function xc(t,r,a){t==="focusin"?(wo(),Si=r,Lr=a,Si.attachEvent("onpropertychange",ou)):t==="focusout"&&wo()}function au(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pa(Lr)}function il(t,r){if(t==="click")return pa(r)}function bc(t,r){if(t==="input"||t==="change")return pa(r)}function sl(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var _n=typeof Object.is=="function"?Object.is:sl;function ko(t,r){if(_n(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!C.call(r,f)||!_n(t[f],r[f]))return!1}return!0}function ol(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function al(t,r){var a=ol(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=r&&l>=r)return{node:a,offset:r-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ol(a)}}function lu(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?lu(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function uu(){for(var t=window,r=Qt();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Qt(t.document)}return r}function fa(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Gd(t){var r=uu(),a=t.focusedElem,l=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&lu(a.ownerDocument.documentElement,a)){if(l!==null&&fa(a)){if(r=l.start,t=l.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,g=Math.min(l.start,f);l=l.end===void 0?g:Math.min(l.end,f),!t.extend&&g>l&&(f=l,l=g,g=f),f=al(a,g);var j=al(a,l);f&&j&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==j.node||t.focusOffset!==j.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),g>l?(t.addRange(r),t.extend(j.node,j.offset)):(r.setEnd(j.node,j.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yd=E&&"documentMode"in document&&11>=document.documentMode,So=null,Ki=null,Ci=null,hs=!1;function ll(t,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hs||So==null||So!==Qt(l)||(l=So,"selectionStart"in l&&fa(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ci&&ko(Ci,l)||(Ci=l,l=To(Ki,"onSelect"),0<l.length&&(r=new aa("onSelect","select",null,r,a),t.push({event:r,listeners:l}),r.target=So)))}function Co(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Os={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},ma={},ps={};E&&(ps=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function _i(t){if(ma[t])return ma[t];if(!Os[t])return t;var r=Os[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in ps)return ma[t]=r[a];return t}var er=_i("animationend"),$i=_i("animationiteration"),Gi=_i("animationstart"),ga=_i("transitionend"),wc=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,r){wc.set(t,r),w(r,[t])}for(var ul=0;ul<cu.length;ul++){var ya=cu[ul],cl=ya.toLowerCase(),Vd=ya[0].toUpperCase()+ya.slice(1);Gr(cl,"on"+Vd)}Gr(er,"onAnimationEnd"),Gr($i,"onAnimationIteration"),Gr(Gi,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(ga,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function dl(t,r,a){var l=t.type||"unknown-event";t.currentTarget=a,Ls(l,r,void 0,t),t.currentTarget=null}function hl(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var g=void 0;if(r)for(var j=l.length-1;0<=j;j--){var K=l[j],X=K.instance,he=K.currentTarget;if(K=K.listener,X!==g&&f.isPropagationStopped())break e;dl(f,K,he),g=X}else for(j=0;j<l.length;j++){if(K=l[j],X=K.instance,he=K.currentTarget,K=K.listener,X!==g&&f.isPropagationStopped())break e;dl(f,K,he),g=X}}}if(Ur)throw t=qr,Ur=!1,qr=null,t}function Wt(t,r){var a=r[hu];a===void 0&&(a=r[hu]=new Set);var l=t+"__bubble";a.has(l)||(Sc(r,t,2,!1),a.add(l))}function _o(t,r,a){var l=0;r&&(l|=4),Sc(a,t,l,r)}var va="_reactListening"+Math.random().toString(36).slice(2);function fs(t){if(!t[va]){t[va]=!0,v.forEach(function(a){a!=="selectionchange"&&(kc.has(a)||_o(a,!1,t),_o(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[va]||(r[va]=!0,_o("selectionchange",!1,r))}}function Sc(t,r,a,l){switch(wi(r)){case 1:var f=kt;break;case 4:f=gn;break;default:f=pr}a=f.bind(null,r,a,t),f=void 0,!Br||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(r,a,{capture:!0,passive:f}):t.addEventListener(r,a,!0):f!==void 0?t.addEventListener(r,a,{passive:f}):t.addEventListener(r,a,!1)}function du(t,r,a,l,f){var g=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var j=l.tag;if(j===3||j===4){var K=l.stateNode.containerInfo;if(K===f||K.nodeType===8&&K.parentNode===f)break;if(j===4)for(j=l.return;j!==null;){var X=j.tag;if((X===3||X===4)&&(X=j.stateNode.containerInfo,X===f||X.nodeType===8&&X.parentNode===f))return;j=j.return}for(;K!==null;){if(j=Ln(K),j===null)return;if(X=j.tag,X===5||X===6){l=g=j;continue e}K=K.parentNode}}l=l.return}In(function(){var he=g,Pe=nt(a),Re=[];e:{var Ee=wc.get(t);if(Ee!==void 0){var Qe=aa,rt=t;switch(t){case"keypress":if(oa(a)===0)break e;case"keydown":case"keyup":Qe=da;break;case"focusin":rt="focus",Qe=Ql;break;case"focusout":rt="blur",Qe=Ql;break;case"beforeblur":case"afterblur":Qe=Ql;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=Xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=Md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=eu;break;case er:case $i:case Gi:Qe=Dd;break;case ga:Qe=Bd;break;case"scroll":Qe=Rd;break;case"wheel":Qe=fc;break;case"copy":case"cut":case"paste":Qe=el;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=Jl}var it=(r&4)!==0,qn=!it&&t==="scroll",ue=it?Ee!==null?Ee+"Capture":null:Ee;it=[];for(var ee=he,ce;ee!==null;){ce=ee;var ze=ce.stateNode;if(ce.tag===5&&ze!==null&&(ce=ze,ue!==null&&(ze=lr(ee,ue),ze!=null&&it.push(xa(ee,ze,ce)))),qn)break;ee=ee.return}0<it.length&&(Ee=new Qe(Ee,rt,null,a,Pe),Re.push({event:Ee,listeners:it}))}}if((r&7)===0){e:{if(Ee=t==="mouseover"||t==="pointerover",Qe=t==="mouseout"||t==="pointerout",Ee&&a!==Di&&(rt=a.relatedTarget||a.fromElement)&&(Ln(rt)||rt[Xi]))break e;if((Qe||Ee)&&(Ee=Pe.window===Pe?Pe:(Ee=Pe.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,Qe?(rt=a.relatedTarget||a.toElement,Qe=he,rt=rt?Ln(rt):null,rt!==null&&(qn=kn(rt),rt!==qn||rt.tag!==5&&rt.tag!==6)&&(rt=null)):(Qe=null,rt=he),Qe!==rt)){if(it=Xl,ze="onMouseLeave",ue="onMouseEnter",ee="mouse",(t==="pointerout"||t==="pointerover")&&(it=Jl,ze="onPointerLeave",ue="onPointerEnter",ee="pointer"),qn=Qe==null?Ee:Tn(Qe),ce=rt==null?Ee:Tn(rt),Ee=new it(ze,ee+"leave",Qe,a,Pe),Ee.target=qn,Ee.relatedTarget=ce,ze=null,Ln(Pe)===he&&(it=new it(ue,ee+"enter",rt,a,Pe),it.target=ce,it.relatedTarget=qn,ze=it),qn=ze,Qe&&rt)t:{for(it=Qe,ue=rt,ee=0,ce=it;ce;ce=ms(ce))ee++;for(ce=0,ze=ue;ze;ze=ms(ze))ce++;for(;0<ee-ce;)it=ms(it),ee--;for(;0<ce-ee;)ue=ms(ue),ce--;for(;ee--;){if(it===ue||ue!==null&&it===ue.alternate)break t;it=ms(it),ue=ms(ue)}it=null}else it=null;Qe!==null&&zs(Re,Ee,Qe,it,!1),rt!==null&&qn!==null&&zs(Re,qn,rt,it,!0)}}e:{if(Ee=he?Tn(he):window,Qe=Ee.nodeName&&Ee.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&Ee.type==="file")var at=$d;else if(ru(Ee))if(vc)at=bc;else{at=au;var ht=xc}else(Qe=Ee.nodeName)&&Qe.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(at=il);if(at&&(at=at(t,he))){nl(Re,at,a,Pe);break e}ht&&ht(t,Ee,he),t==="focusout"&&(ht=Ee._wrapperState)&&ht.controlled&&Ee.type==="number"&&Zt(Ee,"number",Ee.value)}switch(ht=he?Tn(he):window,t){case"focusin":(ru(ht)||ht.contentEditable==="true")&&(So=ht,Ki=he,Ci=null);break;case"focusout":Ci=Ki=So=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,ll(Re,a,Pe);break;case"selectionchange":if(Yd)break;case"keydown":case"keyup":ll(Re,a,Pe)}var pt;if(tu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else ds?ui(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(ha&&a.locale!=="ko"&&(ds||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&ds&&(pt=Za()):(Pt=Pe,xo="value"in Pt?Pt.value:Pt.textContent,ds=!0)),ht=To(he,yt),0<ht.length&&(yt=new dc(yt,t,null,a,Pe),Re.push({event:yt,listeners:ht}),pt?yt.data=pt:(pt=cs(a),pt!==null&&(yt.data=pt)))),(pt=qi?qd(t,a):gc(t,a))&&(he=To(he,"onBeforeInput"),0<he.length&&(Pe=new dc("onBeforeInput","beforeinput",null,a,Pe),Re.push({event:Pe,listeners:he}),Pe.data=pt))}hl(Re,r)})}function xa(t,r,a){return{instance:t,listener:r,currentTarget:a}}function To(t,r){for(var a=r+"Capture",l=[];t!==null;){var f=t,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=lr(t,a),g!=null&&l.unshift(xa(t,g,f)),g=lr(t,r),g!=null&&l.push(xa(t,g,f))),t=t.return}return l}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zs(t,r,a,l,f){for(var g=r._reactName,j=[];a!==null&&a!==l;){var K=a,X=K.alternate,he=K.stateNode;if(X!==null&&X===l)break;K.tag===5&&he!==null&&(K=he,f?(X=lr(a,g),X!=null&&j.unshift(xa(a,X,K))):f||(X=lr(a,g),X!=null&&j.push(xa(a,X,K)))),a=a.return}j.length!==0&&t.push({event:r,listeners:j})}var ba=/\r\n?/g,Xd=/\u0000|\uFFFD/g;function wa(t){return(typeof t=="string"?t:""+t).replace(ba,`
`).replace(Xd,"")}function ka(t,r,a){if(r=wa(r),wa(t)!==r&&a)throw Error(p(425))}function gs(){}var pl=null,Yi=null;function Fs(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,Sa=typeof clearTimeout=="function"?clearTimeout:void 0,Ws=typeof Promise=="function"?Promise:void 0,Cc=typeof queueMicrotask=="function"?queueMicrotask:typeof Ws<"u"?function(t){return Ws.resolve(null).then(t).catch(_c)}:Vi;function _c(t){setTimeout(function(){throw t})}function fl(t,r){var a=r,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),we(r);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);we(r)}function ys(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function vs(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Yr,Ca="__reactProps$"+Yr,Xi="__reactContainer$"+Yr,hu="__reactEvents$"+Yr,Qd="__reactListeners$"+Yr,Zd="__reactHandles$"+Yr;function Ln(t){var r=t[Ti];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Xi]||a[Ti]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=vs(t);t!==null;){if(a=t[Ti])return a;t=vs(t)}return r}t=a,a=t.parentNode}return null}function dn(t){return t=t[Ti]||t[Xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Tn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(p(33))}function yn(t){return t[Ca]||null}var Hs=[],No=-1;function ci(t){return{current:t}}function en(t){0>No||(t.current=Hs[No],Hs[No]=null,No--)}function Vt(t,r){No++,Hs[No]=t.current,t.current=r}var xs={},Gn=ci(xs),fr=ci(!1),Qi=xs;function jo(t,r){var a=t.type.contextTypes;if(!a)return xs;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=r[g];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function tr(t){return t=t.childContextTypes,t!=null}function Eo(){en(fr),en(Gn)}function pu(t,r,a){if(Gn.current!==xs)throw Error(p(168));Vt(Gn,r),Vt(fr,a)}function fu(t,r,a){var l=t.stateNode;if(r=r.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in r))throw Error(p(108,Me(t)||"Unknown",f));return G({},a,l)}function Lo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xs,Qi=Gn.current,Vt(Gn,t),Vt(fr,fr.current),!0}function mu(t,r,a){var l=t.stateNode;if(!l)throw Error(p(169));a?(t=fu(t,r,Qi),l.__reactInternalMemoizedMergedChildContext=t,en(fr),en(Gn),Vt(Gn,t)):en(fr),Vt(fr,a)}var Dr=null,ml=!1,Po=!1;function Ni(t){Dr===null?Dr=[t]:Dr.push(t)}function Tc(t){ml=!0,Ni(t)}function bs(){if(!Po&&Dr!==null){Po=!0;var t=0,r=Nt;try{var a=Dr;for(Nt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Dr=null,ml=!1}catch(f){throw Dr!==null&&(Dr=Dr.slice(t+1)),Er(bi,bs),f}finally{Nt=r,Po=!1}}return null}var Bs=[],Yn=0,Et=null,Pr=0,zn=[],Fn=0,ws=null,di=1,ji="";function Us(t,r){Bs[Yn++]=Pr,Bs[Yn++]=Et,Et=t,Pr=r}function gl(t,r,a){zn[Fn++]=di,zn[Fn++]=ji,zn[Fn++]=ws,ws=t;var l=di;t=ji;var f=32-pe(l)-1;l&=~(1<<f),a+=1;var g=32-pe(r)+f;if(30<g){var j=f-f%5;g=(l&(1<<j)-1).toString(32),l>>=j,f-=j,di=1<<32-pe(r)+f|a<<f|l,ji=g+t}else di=1<<g|a<<f|l,ji=t}function qs(t){t.return!==null&&(Us(t,1),gl(t,1,0))}function yl(t){for(;t===Et;)Et=Bs[--Yn],Bs[Yn]=null,Pr=Bs[--Yn],Bs[Yn]=null;for(;t===ws;)ws=zn[--Fn],zn[Fn]=null,ji=zn[--Fn],zn[Fn]=null,di=zn[--Fn],zn[Fn]=null}var mr=null,Pn=null,tn=!1,Vr=null;function Nc(t,r){var a=Mi(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function _a(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,mr=t,Pn=ys(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,mr=t,Pn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ws!==null?{id:di,overflow:ji}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Mi(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,mr=t,Pn=null,!0):!1;default:return!1}}function Ta(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vl(t){if(tn){var r=Pn;if(r){var a=r;if(!_a(t,r)){if(Ta(t))throw Error(p(418));r=ys(a.nextSibling);var l=mr;r&&_a(t,r)?Nc(l,a):(t.flags=t.flags&-4097|2,tn=!1,mr=t)}}else{if(Ta(t))throw Error(p(418));t.flags=t.flags&-4097|2,tn=!1,mr=t}}}function jc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mr=t}function Na(t){if(t!==mr)return!1;if(!tn)return jc(t),tn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Fs(t.type,t.memoizedProps)),r&&(r=Pn)){if(Ta(t))throw Ec(),Error(p(418));for(;r;)Nc(t,r),r=ys(r.nextSibling)}if(jc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){Pn=ys(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}Pn=null}}else Pn=mr?ys(t.stateNode.nextSibling):null;return!0}function Ec(){for(var t=Pn;t;)t=ys(t.nextSibling)}function Ao(){Pn=mr=null,tn=!1}function Ro(t){Vr===null?Vr=[t]:Vr.push(t)}var Lc=q.ReactCurrentBatchConfig;function ja(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(p(309));var l=a.stateNode}if(!l)throw Error(p(147,t));var f=l,g=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(j){var K=f.refs;j===null?delete K[g]:K[g]=j},r._stringRef=g,r)}if(typeof t!="string")throw Error(p(284));if(!a._owner)throw Error(p(290,t))}return t}function xl(t,r){throw t=Object.prototype.toString.call(r),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function gu(t){var r=t._init;return r(t._payload)}function Ks(t){function r(ue,ee){if(t){var ce=ue.deletions;ce===null?(ue.deletions=[ee],ue.flags|=16):ce.push(ee)}}function a(ue,ee){if(!t)return null;for(;ee!==null;)r(ue,ee),ee=ee.sibling;return null}function l(ue,ee){for(ue=new Map;ee!==null;)ee.key!==null?ue.set(ee.key,ee):ue.set(ee.index,ee),ee=ee.sibling;return ue}function f(ue,ee){return ue=Qo(ue,ee),ue.index=0,ue.sibling=null,ue}function g(ue,ee,ce){return ue.index=ce,t?(ce=ue.alternate,ce!==null?(ce=ce.index,ce<ee?(ue.flags|=2,ee):ce):(ue.flags|=2,ee)):(ue.flags|=1048576,ee)}function j(ue){return t&&ue.alternate===null&&(ue.flags|=2),ue}function K(ue,ee,ce,ze){return ee===null||ee.tag!==6?(ee=dh(ce,ue.mode,ze),ee.return=ue,ee):(ee=f(ee,ce),ee.return=ue,ee)}function X(ue,ee,ce,ze){var at=ce.type;return at===le?Pe(ue,ee,ce.props.children,ze,ce.key):ee!==null&&(ee.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===Q&&gu(at)===ee.type)?(ze=f(ee,ce.props),ze.ref=ja(ue,ee,ce),ze.return=ue,ze):(ze=ed(ce.type,ce.key,ce.props,null,ue.mode,ze),ze.ref=ja(ue,ee,ce),ze.return=ue,ze)}function he(ue,ee,ce,ze){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==ce.containerInfo||ee.stateNode.implementation!==ce.implementation?(ee=hh(ce,ue.mode,ze),ee.return=ue,ee):(ee=f(ee,ce.children||[]),ee.return=ue,ee)}function Pe(ue,ee,ce,ze,at){return ee===null||ee.tag!==7?(ee=Ka(ce,ue.mode,ze,at),ee.return=ue,ee):(ee=f(ee,ce),ee.return=ue,ee)}function Re(ue,ee,ce){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return ee=dh(""+ee,ue.mode,ce),ee.return=ue,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Y:return ce=ed(ee.type,ee.key,ee.props,null,ue.mode,ce),ce.ref=ja(ue,null,ee),ce.return=ue,ce;case ge:return ee=hh(ee,ue.mode,ce),ee.return=ue,ee;case Q:var ze=ee._init;return Re(ue,ze(ee._payload),ce)}if(Ke(ee)||P(ee))return ee=Ka(ee,ue.mode,ce,null),ee.return=ue,ee;xl(ue,ee)}return null}function Ee(ue,ee,ce,ze){var at=ee!==null?ee.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return at!==null?null:K(ue,ee,""+ce,ze);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case Y:return ce.key===at?X(ue,ee,ce,ze):null;case ge:return ce.key===at?he(ue,ee,ce,ze):null;case Q:return at=ce._init,Ee(ue,ee,at(ce._payload),ze)}if(Ke(ce)||P(ce))return at!==null?null:Pe(ue,ee,ce,ze,null);xl(ue,ce)}return null}function Qe(ue,ee,ce,ze,at){if(typeof ze=="string"&&ze!==""||typeof ze=="number")return ue=ue.get(ce)||null,K(ee,ue,""+ze,at);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case Y:return ue=ue.get(ze.key===null?ce:ze.key)||null,X(ee,ue,ze,at);case ge:return ue=ue.get(ze.key===null?ce:ze.key)||null,he(ee,ue,ze,at);case Q:var ht=ze._init;return Qe(ue,ee,ce,ht(ze._payload),at)}if(Ke(ze)||P(ze))return ue=ue.get(ce)||null,Pe(ee,ue,ze,at,null);xl(ee,ze)}return null}function rt(ue,ee,ce,ze){for(var at=null,ht=null,pt=ee,yt=ee=0,ir=null;pt!==null&&yt<ce.length;yt++){pt.index>yt?(ir=pt,pt=null):ir=pt.sibling;var Ht=Ee(ue,pt,ce[yt],ze);if(Ht===null){pt===null&&(pt=ir);break}t&&pt&&Ht.alternate===null&&r(ue,pt),ee=g(Ht,ee,yt),ht===null?at=Ht:ht.sibling=Ht,ht=Ht,pt=ir}if(yt===ce.length)return a(ue,pt),tn&&Us(ue,yt),at;if(pt===null){for(;yt<ce.length;yt++)pt=Re(ue,ce[yt],ze),pt!==null&&(ee=g(pt,ee,yt),ht===null?at=pt:ht.sibling=pt,ht=pt);return tn&&Us(ue,yt),at}for(pt=l(ue,pt);yt<ce.length;yt++)ir=Qe(pt,ue,yt,ce[yt],ze),ir!==null&&(t&&ir.alternate!==null&&pt.delete(ir.key===null?yt:ir.key),ee=g(ir,ee,yt),ht===null?at=ir:ht.sibling=ir,ht=ir);return t&&pt.forEach(function(Zo){return r(ue,Zo)}),tn&&Us(ue,yt),at}function it(ue,ee,ce,ze){var at=P(ce);if(typeof at!="function")throw Error(p(150));if(ce=at.call(ce),ce==null)throw Error(p(151));for(var ht=at=null,pt=ee,yt=ee=0,ir=null,Ht=ce.next();pt!==null&&!Ht.done;yt++,Ht=ce.next()){pt.index>yt?(ir=pt,pt=null):ir=pt.sibling;var Zo=Ee(ue,pt,Ht.value,ze);if(Zo===null){pt===null&&(pt=ir);break}t&&pt&&Zo.alternate===null&&r(ue,pt),ee=g(Zo,ee,yt),ht===null?at=Zo:ht.sibling=Zo,ht=Zo,pt=ir}if(Ht.done)return a(ue,pt),tn&&Us(ue,yt),at;if(pt===null){for(;!Ht.done;yt++,Ht=ce.next())Ht=Re(ue,Ht.value,ze),Ht!==null&&(ee=g(Ht,ee,yt),ht===null?at=Ht:ht.sibling=Ht,ht=Ht);return tn&&Us(ue,yt),at}for(pt=l(ue,pt);!Ht.done;yt++,Ht=ce.next())Ht=Qe(pt,ue,yt,Ht.value,ze),Ht!==null&&(t&&Ht.alternate!==null&&pt.delete(Ht.key===null?yt:Ht.key),ee=g(Ht,ee,yt),ht===null?at=Ht:ht.sibling=Ht,ht=Ht);return t&&pt.forEach(function(Mm){return r(ue,Mm)}),tn&&Us(ue,yt),at}function qn(ue,ee,ce,ze){if(typeof ce=="object"&&ce!==null&&ce.type===le&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case Y:e:{for(var at=ce.key,ht=ee;ht!==null;){if(ht.key===at){if(at=ce.type,at===le){if(ht.tag===7){a(ue,ht.sibling),ee=f(ht,ce.props.children),ee.return=ue,ue=ee;break e}}else if(ht.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===Q&&gu(at)===ht.type){a(ue,ht.sibling),ee=f(ht,ce.props),ee.ref=ja(ue,ht,ce),ee.return=ue,ue=ee;break e}a(ue,ht);break}else r(ue,ht);ht=ht.sibling}ce.type===le?(ee=Ka(ce.props.children,ue.mode,ze,ce.key),ee.return=ue,ue=ee):(ze=ed(ce.type,ce.key,ce.props,null,ue.mode,ze),ze.ref=ja(ue,ee,ce),ze.return=ue,ue=ze)}return j(ue);case ge:e:{for(ht=ce.key;ee!==null;){if(ee.key===ht)if(ee.tag===4&&ee.stateNode.containerInfo===ce.containerInfo&&ee.stateNode.implementation===ce.implementation){a(ue,ee.sibling),ee=f(ee,ce.children||[]),ee.return=ue,ue=ee;break e}else{a(ue,ee);break}else r(ue,ee);ee=ee.sibling}ee=hh(ce,ue.mode,ze),ee.return=ue,ue=ee}return j(ue);case Q:return ht=ce._init,qn(ue,ee,ht(ce._payload),ze)}if(Ke(ce))return rt(ue,ee,ce,ze);if(P(ce))return it(ue,ee,ce,ze);xl(ue,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,ee!==null&&ee.tag===6?(a(ue,ee.sibling),ee=f(ee,ce),ee.return=ue,ue=ee):(a(ue,ee),ee=dh(ce,ue.mode,ze),ee.return=ue,ue=ee),j(ue)):a(ue,ee)}return qn}var ks=Ks(!0),Ea=Ks(!1),La=ci(null),Io=null,$s=null,yu=null;function bl(){yu=$s=Io=null}function Wn(t){var r=La.current;en(La),t._currentValue=r}function Mo(t,r,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===a)break;t=t.return}}function Gs(t,r){Io=t,yu=$s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Jn=!0),t.firstContext=null)}function zr(t){var r=t._currentValue;if(yu!==t)if(t={context:t,memoizedValue:r,next:null},$s===null){if(Io===null)throw Error(p(308));$s=t,Io.dependencies={lanes:0,firstContext:t}}else $s=$s.next=t;return r}var Ss=null;function Cs(t){Ss===null?Ss=[t]:Ss.push(t)}function Pa(t,r,a,l){var f=r.interleaved;return f===null?(a.next=a,Cs(r)):(a.next=f.next,f.next=a),r.interleaved=a,Ei(t,l)}function Ei(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Zi=!1;function wl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ys(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function hi(t,r,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(ct&2)!==0){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,Ei(t,a)}return f=l.interleaved,f===null?(r.next=r,Cs(l)):(r.next=f.next,f.next=r),l.interleaved=r,Ei(t,a)}function Aa(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,as(t,a)}}function Oo(t,r){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var j={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=j:g=g.next=j,a=a.next}while(a!==null);g===null?f=g=r:g=g.next=r}else f=g=r;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function kl(t,r,a,l){var f=t.updateQueue;Zi=!1;var g=f.firstBaseUpdate,j=f.lastBaseUpdate,K=f.shared.pending;if(K!==null){f.shared.pending=null;var X=K,he=X.next;X.next=null,j===null?g=he:j.next=he,j=X;var Pe=t.alternate;Pe!==null&&(Pe=Pe.updateQueue,K=Pe.lastBaseUpdate,K!==j&&(K===null?Pe.firstBaseUpdate=he:K.next=he,Pe.lastBaseUpdate=X))}if(g!==null){var Re=f.baseState;j=0,Pe=he=X=null,K=g;do{var Ee=K.lane,Qe=K.eventTime;if((l&Ee)===Ee){Pe!==null&&(Pe=Pe.next={eventTime:Qe,lane:0,tag:K.tag,payload:K.payload,callback:K.callback,next:null});e:{var rt=t,it=K;switch(Ee=r,Qe=a,it.tag){case 1:if(rt=it.payload,typeof rt=="function"){Re=rt.call(Qe,Re,Ee);break e}Re=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=it.payload,Ee=typeof rt=="function"?rt.call(Qe,Re,Ee):rt,Ee==null)break e;Re=G({},Re,Ee);break e;case 2:Zi=!0}}K.callback!==null&&K.lane!==0&&(t.flags|=64,Ee=f.effects,Ee===null?f.effects=[K]:Ee.push(K))}else Qe={eventTime:Qe,lane:Ee,tag:K.tag,payload:K.payload,callback:K.callback,next:null},Pe===null?(he=Pe=Qe,X=Re):Pe=Pe.next=Qe,j|=Ee;if(K=K.next,K===null){if(K=f.shared.pending,K===null)break;Ee=K,K=Ee.next,Ee.next=null,f.lastBaseUpdate=Ee,f.shared.pending=null}}while(!0);if(Pe===null&&(X=Re),f.baseState=X,f.firstBaseUpdate=he,f.lastBaseUpdate=Pe,r=f.shared.interleaved,r!==null){f=r;do j|=f.lane,f=f.next;while(f!==r)}else g===null&&(f.shared.lanes=0);wr|=j,t.lanes=j,t.memoizedState=Re}}function Vs(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var l=t[r],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(p(191,f));f.call(l)}}}var Do={},pi=ci(Do),zo=ci(Do),Ji=ci(Do);function fi(t){if(t===Do)throw Error(p(174));return t}function Xs(t,r){switch(Vt(Ji,r),Vt(zo,t),Vt(pi,Do),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:st(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=st(r,t)}en(pi),Vt(pi,r)}function Pi(){en(pi),en(zo),en(Ji)}function vu(t){fi(Ji.current);var r=fi(pi.current),a=st(r,t.type);r!==a&&(Vt(zo,t),Vt(pi,a))}function xu(t){zo.current===t&&(en(pi),en(zo))}var on=ci(0);function mi(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var _s=[];function Qs(){for(var t=0;t<_s.length;t++)_s[t]._workInProgressVersionPrimary=null;_s.length=0}var Sl=q.ReactCurrentDispatcher,Cl=q.ReactCurrentBatchConfig,Zs=0,hn=null,Hn=null,It=null,Ra=!1,Ia=!1,Ma=0,Jd=0;function Zn(){throw Error(p(321))}function _l(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!_n(t[a],r[a]))return!1;return!0}function Tl(t,r,a,l,f,g){if(Zs=g,hn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Sl.current=t===null||t.memoizedState===null?th:Pu,t=a(l,f),Ia){g=0;do{if(Ia=!1,Ma=0,25<=g)throw Error(p(301));g+=1,It=Hn=null,r.updateQueue=null,Sl.current=Da,t=a(l,f)}while(Ia)}if(Sl.current=Oa,r=Hn!==null&&Hn.next!==null,Zs=0,It=Hn=hn=null,Ra=!1,r)throw Error(p(300));return t}function bu(){var t=Ma!==0;return Ma=0,t}function Ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?hn.memoizedState=It=t:It=It.next=t,It}function Xr(){if(Hn===null){var t=hn.alternate;t=t!==null?t.memoizedState:null}else t=Hn.next;var r=It===null?hn.memoizedState:It.next;if(r!==null)It=r,Hn=t;else{if(t===null)throw Error(p(310));Hn=t,t={memoizedState:Hn.memoizedState,baseState:Hn.baseState,baseQueue:Hn.baseQueue,queue:Hn.queue,next:null},It===null?hn.memoizedState=It=t:It=It.next=t}return It}function Qr(t,r){return typeof r=="function"?r(t):r}function Js(t){var r=Xr(),a=r.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=t;var l=Hn,f=l.baseQueue,g=a.pending;if(g!==null){if(f!==null){var j=f.next;f.next=g.next,g.next=j}l.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,l=l.baseState;var K=j=null,X=null,he=g;do{var Pe=he.lane;if((Zs&Pe)===Pe)X!==null&&(X=X.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),l=he.hasEagerState?he.eagerState:t(l,he.action);else{var Re={lane:Pe,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};X===null?(K=X=Re,j=l):X=X.next=Re,hn.lanes|=Pe,wr|=Pe}he=he.next}while(he!==null&&he!==g);X===null?j=l:X.next=K,_n(l,r.memoizedState)||(Jn=!0),r.memoizedState=l,r.baseState=j,r.baseQueue=X,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do g=f.lane,hn.lanes|=g,wr|=g,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Fo(t){var r=Xr(),a=r.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,g=r.memoizedState;if(f!==null){a.pending=null;var j=f=f.next;do g=t(g,j.action),j=j.next;while(j!==f);_n(g,r.memoizedState)||(Jn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),a.lastRenderedState=g}return[g,l]}function Wo(){}function Ri(t,r){var a=hn,l=Xr(),f=r(),g=!_n(l.memoizedState,f);if(g&&(l.memoizedState=f,Jn=!0),l=l.queue,Cu(eo.bind(null,a,l,t),[t]),l.getSnapshot!==r||g||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,Ts(9,Ac.bind(null,a,l,f,r),void 0,null),Dt===null)throw Error(p(349));(Zs&30)!==0||Pc(a,r,f)}return f}function Pc(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Ac(t,r,a,l){r.value=a,r.getSnapshot=l,wu(r)&&ku(t)}function eo(t,r,a){return a(function(){wu(r)&&ku(t)})}function wu(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!_n(t,a)}catch{return!0}}function ku(t){var r=Ei(t,1);r!==null&&ts(r,t,1,-1)}function Su(t){var r=Ai();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:t},r.queue=t,t=t.dispatch=ju.bind(null,hn,t),[r.memoizedState,t]}function Ts(t,r,a,l){return t={tag:t,create:r,destroy:a,deps:l,next:null},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,r.lastEffect=t)),t}function to(){return Xr().memoizedState}function Ho(t,r,a,l){var f=Ai();hn.flags|=t,f.memoizedState=Ts(1|r,a,void 0,l===void 0?null:l)}function Bo(t,r,a,l){var f=Xr();l=l===void 0?null:l;var g=void 0;if(Hn!==null){var j=Hn.memoizedState;if(g=j.destroy,l!==null&&_l(l,j.deps)){f.memoizedState=Ts(r,a,g,l);return}}hn.flags|=t,f.memoizedState=Ts(1|r,a,g,l)}function Nl(t,r){return Ho(8390656,8,t,r)}function Cu(t,r){return Bo(2048,8,t,r)}function Uo(t,r){return Bo(4,2,t,r)}function _u(t,r){return Bo(4,4,t,r)}function Rc(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Tu(t,r,a){return a=a!=null?a.concat([t]):null,Bo(4,4,Rc.bind(null,r,t),a)}function qo(){}function Ic(t,r){var a=Xr();r=r===void 0?null:r;var l=a.memoizedState;return l!==null&&r!==null&&_l(r,l[1])?l[0]:(a.memoizedState=[t,r],t)}function Mc(t,r){var a=Xr();r=r===void 0?null:r;var l=a.memoizedState;return l!==null&&r!==null&&_l(r,l[1])?l[0]:(t=t(),a.memoizedState=[t,r],t)}function Ko(t,r,a){return(Zs&21)===0?(t.baseState&&(t.baseState=!1,Jn=!0),t.memoizedState=a):(_n(a,r)||(a=ra(),hn.lanes|=a,wr|=a,t.baseState=!0),r)}function Oc(t,r){var a=Nt;Nt=a!==0&&4>a?a:4,t(!0);var l=Cl.transition;Cl.transition={};try{t(!1),r()}finally{Nt=a,Cl.transition=l}}function Nu(){return Xr().memoizedState}function eh(t,r,a){var l=Vo(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Eu(t))Dc(r,a);else if(a=Pa(t,r,a,l),a!==null){var f=Fr();ts(a,t,l,f),Lu(a,r,l)}}function ju(t,r,a){var l=Vo(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Eu(t))Dc(r,f);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var j=r.lastRenderedState,K=g(j,a);if(f.hasEagerState=!0,f.eagerState=K,_n(K,j)){var X=r.interleaved;X===null?(f.next=f,Cs(r)):(f.next=X.next,X.next=f),r.interleaved=f;return}}catch{}finally{}a=Pa(t,r,f,l),a!==null&&(f=Fr(),ts(a,t,l,f),Lu(a,r,l))}}function Eu(t){var r=t.alternate;return t===hn||r!==null&&r===hn}function Dc(t,r){Ia=Ra=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function Lu(t,r,a){if((a&4194240)!==0){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,as(t,a)}}var Oa={readContext:zr,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useInsertionEffect:Zn,useLayoutEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useMutableSource:Zn,useSyncExternalStore:Zn,useId:Zn,unstable_isNewReconciler:!1},th={readContext:zr,useCallback:function(t,r){return Ai().memoizedState=[t,r===void 0?null:r],t},useContext:zr,useEffect:Nl,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Ho(4194308,4,Rc.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Ho(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ho(4,2,t,r)},useMemo:function(t,r){var a=Ai();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var l=Ai();return r=a!==void 0?a(r):r,l.memoizedState=l.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},l.queue=t,t=t.dispatch=eh.bind(null,hn,t),[l.memoizedState,t]},useRef:function(t){var r=Ai();return t={current:t},r.memoizedState=t},useState:Su,useDebugValue:qo,useDeferredValue:function(t){return Ai().memoizedState=t},useTransition:function(){var t=Su(!1),r=t[0];return t=Oc.bind(null,t[1]),Ai().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var l=hn,f=Ai();if(tn){if(a===void 0)throw Error(p(407));a=a()}else{if(a=r(),Dt===null)throw Error(p(349));(Zs&30)!==0||Pc(l,r,a)}f.memoizedState=a;var g={value:a,getSnapshot:r};return f.queue=g,Nl(eo.bind(null,l,g,t),[t]),l.flags|=2048,Ts(9,Ac.bind(null,l,g,a,r),void 0,null),a},useId:function(){var t=Ai(),r=Dt.identifierPrefix;if(tn){var a=ji,l=di;a=(l&~(1<<32-pe(l)-1)).toString(32)+a,r=":"+r+"R"+a,a=Ma++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Jd++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Pu={readContext:zr,useCallback:Ic,useContext:zr,useEffect:Cu,useImperativeHandle:Tu,useInsertionEffect:Uo,useLayoutEffect:_u,useMemo:Mc,useReducer:Js,useRef:to,useState:function(){return Js(Qr)},useDebugValue:qo,useDeferredValue:function(t){var r=Xr();return Ko(r,Hn.memoizedState,t)},useTransition:function(){var t=Js(Qr)[0],r=Xr().memoizedState;return[t,r]},useMutableSource:Wo,useSyncExternalStore:Ri,useId:Nu,unstable_isNewReconciler:!1},Da={readContext:zr,useCallback:Ic,useContext:zr,useEffect:Cu,useImperativeHandle:Tu,useInsertionEffect:Uo,useLayoutEffect:_u,useMemo:Mc,useReducer:Fo,useRef:to,useState:function(){return Fo(Qr)},useDebugValue:qo,useDeferredValue:function(t){var r=Xr();return Hn===null?r.memoizedState=t:Ko(r,Hn.memoizedState,t)},useTransition:function(){var t=Fo(Qr)[0],r=Xr().memoizedState;return[t,r]},useMutableSource:Wo,useSyncExternalStore:Ri,useId:Nu,unstable_isNewReconciler:!1};function gr(t,r){if(t&&t.defaultProps){r=G({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function Au(t,r,a,l){r=t.memoizedState,a=a(l,r),a=a==null?r:G({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var za={isMounted:function(t){return(t=t._reactInternals)?kn(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var l=Fr(),f=Vo(t),g=Li(l,f);g.payload=r,a!=null&&(g.callback=a),r=hi(t,g,f),r!==null&&(ts(r,t,f,l),Aa(r,t,f))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var l=Fr(),f=Vo(t),g=Li(l,f);g.tag=1,g.payload=r,a!=null&&(g.callback=a),r=hi(t,g,f),r!==null&&(ts(r,t,f,l),Aa(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Fr(),l=Vo(t),f=Li(a,l);f.tag=2,r!=null&&(f.callback=r),r=hi(t,f,l),r!==null&&(ts(r,t,l,a),Aa(r,t,l))}};function zc(t,r,a,l,f,g,j){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,g,j):r.prototype&&r.prototype.isPureReactComponent?!ko(a,l)||!ko(f,g):!0}function Fc(t,r,a){var l=!1,f=xs,g=r.contextType;return typeof g=="object"&&g!==null?g=zr(g):(f=tr(r)?Qi:Gn.current,l=r.contextTypes,g=(l=l!=null)?jo(t,f):xs),r=new r(a,g),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=za,t.stateNode=r,r._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=g),r}function Wc(t,r,a,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==t&&za.enqueueReplaceState(r,r.state,null)}function Ru(t,r,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},wl(t);var g=r.contextType;typeof g=="object"&&g!==null?f.context=zr(g):(g=tr(r)?Qi:Gn.current,f.context=jo(t,g)),f.state=t.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Au(t,r,g,a),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&za.enqueueReplaceState(f,f.state,null),kl(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,r){try{var a="",l=r;do a+=Ve(l),l=l.return;while(l);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:r,stack:f,digest:null}}function Iu(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function Mu(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Hc=typeof WeakMap=="function"?WeakMap:Map;function jl(t,r,a){a=Li(-1,a),a.tag=3,a.payload={element:null};var l=r.value;return a.callback=function(){Yc||(Yc=!0,rh=l),Mu(t,r)},a}function Ou(t,r,a){a=Li(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=r.value;a.payload=function(){return l(f)},a.callback=function(){Mu(t,r)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Mu(t,r),typeof l!="function"&&(Go===null?Go=new Set([this]):Go.add(this));var j=r.stack;this.componentDidCatch(r.value,{componentStack:j!==null?j:""})}),a}function Bc(t,r,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Hc;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(a)||(f.add(a),t=Cm.bind(null,t,r,a),r.then(t,t))}function Du(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function ro(t,r,a,l,f){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Li(-1,1),r.tag=2,hi(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Uc=q.ReactCurrentOwner,Jn=!1;function yr(t,r,a,l){r.child=t===null?Ea(r,null,a,l):ks(r,t.child,a,l)}function qc(t,r,a,l,f){a=a.render;var g=r.ref;return Gs(r,f),l=Tl(t,r,a,l,g,f),a=bu(),t!==null&&!Jn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Ar(t,r,f)):(tn&&a&&qs(r),r.flags|=1,yr(t,r,l,f),r.child)}function Kc(t,r,a,l,f){if(t===null){var g=a.type;return typeof g=="function"&&!ch(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=g,Xt(t,r,g,l,f)):(t=ed(a.type,null,l,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(g=t.child,(t.lanes&f)===0){var j=g.memoizedProps;if(a=a.compare,a=a!==null?a:ko,a(j,l)&&t.ref===r.ref)return Ar(t,r,f)}return r.flags|=1,t=Qo(g,l),t.ref=r.ref,t.return=r,r.child=t}function Xt(t,r,a,l,f){if(t!==null){var g=t.memoizedProps;if(ko(g,l)&&t.ref===r.ref)if(Jn=!1,r.pendingProps=l=g,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Jn=!0);else return r.lanes=t.lanes,Ar(t,r,f)}return io(t,r,a,l,f)}function $c(t,r,a){var l=r.pendingProps,f=l.children,g=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(br,Bt),Bt|=a;else{if((a&1073741824)===0)return t=g!==null?g.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Vt(br,Bt),Bt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=g!==null?g.baseLanes:a,Vt(br,Bt),Bt|=l}else g!==null?(l=g.baseLanes|a,r.memoizedState=null):l=a,Vt(br,Bt),Bt|=l;return yr(t,r,f,a),r.child}function El(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function io(t,r,a,l,f){var g=tr(a)?Qi:Gn.current;return g=jo(r,g),Gs(r,f),a=Tl(t,r,a,l,g,f),l=bu(),t!==null&&!Jn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Ar(t,r,f)):(tn&&l&&qs(r),r.flags|=1,yr(t,r,a,f),r.child)}function Zr(t,r,a,l,f){if(tr(a)){var g=!0;Lo(r)}else g=!1;if(Gs(r,f),r.stateNode===null)Ol(t,r),Fc(r,a,l),Ru(r,a,l,f),l=!0;else if(t===null){var j=r.stateNode,K=r.memoizedProps;j.props=K;var X=j.context,he=a.contextType;typeof he=="object"&&he!==null?he=zr(he):(he=tr(a)?Qi:Gn.current,he=jo(r,he));var Pe=a.getDerivedStateFromProps,Re=typeof Pe=="function"||typeof j.getSnapshotBeforeUpdate=="function";Re||typeof j.UNSAFE_componentWillReceiveProps!="function"&&typeof j.componentWillReceiveProps!="function"||(K!==l||X!==he)&&Wc(r,j,l,he),Zi=!1;var Ee=r.memoizedState;j.state=Ee,kl(r,l,j,f),X=r.memoizedState,K!==l||Ee!==X||fr.current||Zi?(typeof Pe=="function"&&(Au(r,a,Pe,l),X=r.memoizedState),(K=Zi||zc(r,a,K,l,Ee,X,he))?(Re||typeof j.UNSAFE_componentWillMount!="function"&&typeof j.componentWillMount!="function"||(typeof j.componentWillMount=="function"&&j.componentWillMount(),typeof j.UNSAFE_componentWillMount=="function"&&j.UNSAFE_componentWillMount()),typeof j.componentDidMount=="function"&&(r.flags|=4194308)):(typeof j.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=X),j.props=l,j.state=X,j.context=he,l=K):(typeof j.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{j=r.stateNode,Ys(t,r),K=r.memoizedProps,he=r.type===r.elementType?K:gr(r.type,K),j.props=he,Re=r.pendingProps,Ee=j.context,X=a.contextType,typeof X=="object"&&X!==null?X=zr(X):(X=tr(a)?Qi:Gn.current,X=jo(r,X));var Qe=a.getDerivedStateFromProps;(Pe=typeof Qe=="function"||typeof j.getSnapshotBeforeUpdate=="function")||typeof j.UNSAFE_componentWillReceiveProps!="function"&&typeof j.componentWillReceiveProps!="function"||(K!==Re||Ee!==X)&&Wc(r,j,l,X),Zi=!1,Ee=r.memoizedState,j.state=Ee,kl(r,l,j,f);var rt=r.memoizedState;K!==Re||Ee!==rt||fr.current||Zi?(typeof Qe=="function"&&(Au(r,a,Qe,l),rt=r.memoizedState),(he=Zi||zc(r,a,he,l,Ee,rt,X)||!1)?(Pe||typeof j.UNSAFE_componentWillUpdate!="function"&&typeof j.componentWillUpdate!="function"||(typeof j.componentWillUpdate=="function"&&j.componentWillUpdate(l,rt,X),typeof j.UNSAFE_componentWillUpdate=="function"&&j.UNSAFE_componentWillUpdate(l,rt,X)),typeof j.componentDidUpdate=="function"&&(r.flags|=4),typeof j.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof j.componentDidUpdate!="function"||K===t.memoizedProps&&Ee===t.memoizedState||(r.flags|=4),typeof j.getSnapshotBeforeUpdate!="function"||K===t.memoizedProps&&Ee===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=rt),j.props=l,j.state=rt,j.context=X,l=he):(typeof j.componentDidUpdate!="function"||K===t.memoizedProps&&Ee===t.memoizedState||(r.flags|=4),typeof j.getSnapshotBeforeUpdate!="function"||K===t.memoizedProps&&Ee===t.memoizedState||(r.flags|=1024),l=!1)}return $o(t,r,a,l,g,f)}function $o(t,r,a,l,f,g){El(t,r);var j=(r.flags&128)!==0;if(!l&&!j)return f&&mu(r,a,!1),Ar(t,r,g);l=r.stateNode,Uc.current=r;var K=j&&typeof a.getDerivedStateFromError!="function"?null:l.render();return r.flags|=1,t!==null&&j?(r.child=ks(r,t.child,null,g),r.child=ks(r,null,K,g)):yr(t,r,K,g),r.memoizedState=l.state,f&&mu(r,a,!0),r.child}function Ll(t){var r=t.stateNode;r.pendingContext?pu(t,r.pendingContext,r.pendingContext!==r.context):r.context&&pu(t,r.context,!1),Xs(t,r.containerInfo)}function zu(t,r,a,l,f){return Ao(),Ro(f),r.flags|=256,yr(t,r,a,l),r.child}var Pl={dehydrated:null,treeContext:null,retryLane:0};function Al(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rl(t,r,a){var l=r.pendingProps,f=on.current,g=!1,j=(r.flags&128)!==0,K;if((K=j)||(K=t!==null&&t.memoizedState===null?!1:(f&2)!==0),K?(g=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Vt(on,f&1),t===null)return vl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(j=l.children,t=l.fallback,g?(l=r.mode,g=r.child,j={mode:"hidden",children:j},(l&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=j):g=td(j,l,0,null),t=Ka(t,l,a,null),g.return=r,t.return=r,g.sibling=t,r.child=g,r.child.memoizedState=Al(a),r.memoizedState=Pl,t):Il(r,j));if(f=t.memoizedState,f!==null&&(K=f.dehydrated,K!==null))return Fu(t,r,j,l,K,f,a);if(g){g=l.fallback,j=r.mode,f=t.child,K=f.sibling;var X={mode:"hidden",children:l.children};return(j&1)===0&&r.child!==f?(l=r.child,l.childLanes=0,l.pendingProps=X,r.deletions=null):(l=Qo(f,X),l.subtreeFlags=f.subtreeFlags&14680064),K!==null?g=Qo(K,g):(g=Ka(g,j,a,null),g.flags|=2),g.return=r,l.return=r,l.sibling=g,r.child=l,l=g,g=r.child,j=t.child.memoizedState,j=j===null?Al(a):{baseLanes:j.baseLanes|a,cachePool:null,transitions:j.transitions},g.memoizedState=j,g.childLanes=t.childLanes&~a,r.memoizedState=Pl,l}return g=t.child,t=g.sibling,l=Qo(g,{mode:"visible",children:l.children}),(r.mode&1)===0&&(l.lanes=a),l.return=r,l.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=l,r.memoizedState=null,l}function Il(t,r){return r=td({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Ml(t,r,a,l){return l!==null&&Ro(l),ks(r,t.child,null,a),t=Il(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Fu(t,r,a,l,f,g,j){if(a)return r.flags&256?(r.flags&=-257,l=Iu(Error(p(422))),Ml(t,r,j,l)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(g=l.fallback,f=r.mode,l=td({mode:"visible",children:l.children},f,0,null),g=Ka(g,f,j,null),g.flags|=2,l.return=r,g.return=r,l.sibling=g,r.child=l,(r.mode&1)!==0&&ks(r,t.child,null,j),r.child.memoizedState=Al(j),r.memoizedState=Pl,g);if((r.mode&1)===0)return Ml(t,r,j,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var K=l.dgst;return l=K,g=Error(p(419)),l=Iu(g,l,void 0),Ml(t,r,j,l)}if(K=(j&t.childLanes)!==0,Jn||K){if(l=Dt,l!==null){switch(j&-j){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|j))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ei(t,f),ts(l,t,f,-1))}return uh(),l=Iu(Error(p(421))),Ml(t,r,j,l)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=_m.bind(null,t),f._reactRetry=r,null):(t=g.treeContext,Pn=ys(f.nextSibling),mr=r,tn=!0,Vr=null,t!==null&&(zn[Fn++]=di,zn[Fn++]=ji,zn[Fn++]=ws,di=t.id,ji=t.overflow,ws=r),r=Il(r,l.children),r.flags|=4096,r)}function Wu(t,r,a){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),Mo(t.return,r,a)}function Mt(t,r,a,l,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=a,g.tailMode=f)}function Hu(t,r,a){var l=r.pendingProps,f=l.revealOrder,g=l.tail;if(yr(t,r,l.children,a),l=on.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wu(t,a,r);else if(t.tag===19)Wu(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Vt(on,l),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(a=r.child,f=null;a!==null;)t=a.alternate,t!==null&&mi(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),Mt(r,!1,f,a,g);break;case"backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&mi(t)===null){r.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Mt(r,!0,a,null,g);break;case"together":Mt(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ol(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Ar(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),wr|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(p(153));if(r.child!==null){for(t=r.child,a=Qo(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Qo(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function nh(t,r,a){switch(r.tag){case 3:Ll(r),Ao();break;case 5:vu(r);break;case 1:tr(r.type)&&Lo(r);break;case 4:Xs(r,r.stateNode.containerInfo);break;case 10:var l=r.type._context,f=r.memoizedProps.value;Vt(La,l._currentValue),l._currentValue=f;break;case 13:if(l=r.memoizedState,l!==null)return l.dehydrated!==null?(Vt(on,on.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Rl(t,r,a):(Vt(on,on.current&1),t=Ar(t,r,a),t!==null?t.sibling:null);Vt(on,on.current&1);break;case 19:if(l=(a&r.childLanes)!==0,(t.flags&128)!==0){if(l)return Hu(t,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Vt(on,on.current),l)break;return null;case 22:case 23:return r.lanes=0,$c(t,r,a)}return Ar(t,r,a)}var Fa,Bu,pn,Gc;Fa=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Bu=function(){},pn=function(t,r,a,l){var f=t.memoizedProps;if(f!==l){t=r.stateNode,fi(pi.current);var g=null;switch(a){case"input":f=$t(t,f),l=$t(t,l),g=[];break;case"select":f=G({},f,{value:void 0}),l=G({},l,{value:void 0}),g=[];break;case"textarea":f=oe(t,f),l=oe(t,l),g=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=gs)}vi(a,l);var j;a=null;for(he in f)if(!l.hasOwnProperty(he)&&f.hasOwnProperty(he)&&f[he]!=null)if(he==="style"){var K=f[he];for(j in K)K.hasOwnProperty(j)&&(a||(a={}),a[j]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(x.hasOwnProperty(he)?g||(g=[]):(g=g||[]).push(he,null));for(he in l){var X=l[he];if(K=f!=null?f[he]:void 0,l.hasOwnProperty(he)&&X!==K&&(X!=null||K!=null))if(he==="style")if(K){for(j in K)!K.hasOwnProperty(j)||X&&X.hasOwnProperty(j)||(a||(a={}),a[j]="");for(j in X)X.hasOwnProperty(j)&&K[j]!==X[j]&&(a||(a={}),a[j]=X[j])}else a||(g||(g=[]),g.push(he,a)),a=X;else he==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,K=K?K.__html:void 0,X!=null&&K!==X&&(g=g||[]).push(he,X)):he==="children"?typeof X!="string"&&typeof X!="number"||(g=g||[]).push(he,""+X):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(x.hasOwnProperty(he)?(X!=null&&he==="onScroll"&&Wt("scroll",t),g||K===X||(g=[])):(g=g||[]).push(he,X))}a&&(g=g||[]).push("style",a);var he=g;(r.updateQueue=he)&&(r.flags|=4)}},Gc=function(t,r,a,l){a!==l&&(r.flags|=4)};function Wa(t,r){if(!tn)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function nr(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(r)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,r}function Dl(t,r,a){var l=r.pendingProps;switch(yl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nr(r),null;case 1:return tr(r.type)&&Eo(),nr(r),null;case 3:return l=r.stateNode,Pi(),en(fr),en(Gn),Qs(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Na(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vr!==null&&(oh(Vr),Vr=null))),Bu(t,r),nr(r),null;case 5:xu(r);var f=fi(Ji.current);if(a=r.type,t!==null&&r.stateNode!=null)pn(t,r,a,l,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!l){if(r.stateNode===null)throw Error(p(166));return nr(r),null}if(t=fi(pi.current),Na(r)){l=r.stateNode,a=r.type;var g=r.memoizedProps;switch(l[Ti]=r,l[Ca]=g,t=(r.mode&1)!==0,a){case"dialog":Wt("cancel",l),Wt("close",l);break;case"iframe":case"object":case"embed":Wt("load",l);break;case"video":case"audio":for(f=0;f<Ds.length;f++)Wt(Ds[f],l);break;case"source":Wt("error",l);break;case"img":case"image":case"link":Wt("error",l),Wt("load",l);break;case"details":Wt("toggle",l);break;case"input":fn(l,g),Wt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!g.multiple},Wt("invalid",l);break;case"textarea":_e(l,g),Wt("invalid",l)}vi(a,g),f=null;for(var j in g)if(g.hasOwnProperty(j)){var K=g[j];j==="children"?typeof K=="string"?l.textContent!==K&&(g.suppressHydrationWarning!==!0&&ka(l.textContent,K,t),f=["children",K]):typeof K=="number"&&l.textContent!==""+K&&(g.suppressHydrationWarning!==!0&&ka(l.textContent,K,t),f=["children",""+K]):x.hasOwnProperty(j)&&K!=null&&j==="onScroll"&&Wt("scroll",l)}switch(a){case"input":Ge(l),lt(l,g,!0);break;case"textarea":Ge(l),xt(l);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(l.onclick=gs)}l=f,r.updateQueue=l,l!==null&&(r.flags|=4)}else{j=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$e(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=j.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=j.createElement(a,{is:l.is}):(t=j.createElement(a),a==="select"&&(j=t,l.multiple?j.multiple=!0:l.size&&(j.size=l.size))):t=j.createElementNS(t,a),t[Ti]=r,t[Ca]=l,Fa(t,r,!1,!1),r.stateNode=t;e:{switch(j=gt(a,l),a){case"dialog":Wt("cancel",t),Wt("close",t),f=l;break;case"iframe":case"object":case"embed":Wt("load",t),f=l;break;case"video":case"audio":for(f=0;f<Ds.length;f++)Wt(Ds[f],t);f=l;break;case"source":Wt("error",t),f=l;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),f=l;break;case"details":Wt("toggle",t),f=l;break;case"input":fn(t,l),f=$t(t,l),Wt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=G({},l,{value:void 0}),Wt("invalid",t);break;case"textarea":_e(t,l),f=oe(t,l),Wt("invalid",t);break;default:f=l}vi(a,f),K=f;for(g in K)if(K.hasOwnProperty(g)){var X=K[g];g==="style"?Hr(t,X):g==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&mt(t,X)):g==="children"?typeof X=="string"?(a!=="textarea"||X!=="")&&dt(t,X):typeof X=="number"&&dt(t,""+X):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(x.hasOwnProperty(g)?X!=null&&g==="onScroll"&&Wt("scroll",t):X!=null&&z(t,g,X,j))}switch(a){case"input":Ge(t),lt(t,l,!1);break;case"textarea":Ge(t),xt(t);break;case"option":l.value!=null&&t.setAttribute("value",""+He(l.value));break;case"select":t.multiple=!!l.multiple,g=l.value,g!=null?vt(t,!!l.multiple,g,!1):l.defaultValue!=null&&vt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=gs)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return nr(r),null;case 6:if(t&&r.stateNode!=null)Gc(t,r,t.memoizedProps,l);else{if(typeof l!="string"&&r.stateNode===null)throw Error(p(166));if(a=fi(Ji.current),fi(pi.current),Na(r)){if(l=r.stateNode,a=r.memoizedProps,l[Ti]=r,(g=l.nodeValue!==a)&&(t=mr,t!==null))switch(t.tag){case 3:ka(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ka(l.nodeValue,a,(t.mode&1)!==0)}g&&(r.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[Ti]=r,r.stateNode=l}return nr(r),null;case 13:if(en(on),l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(tn&&Pn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ec(),Ao(),r.flags|=98560,g=!1;else if(g=Na(r),l!==null&&l.dehydrated!==null){if(t===null){if(!g)throw Error(p(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(p(317));g[Ti]=r}else Ao(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;nr(r),g=!1}else Vr!==null&&(oh(Vr),Vr=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(on.current&1)!==0?Tt===0&&(Tt=3):uh())),r.updateQueue!==null&&(r.flags|=4),nr(r),null);case 4:return Pi(),Bu(t,r),t===null&&fs(r.stateNode.containerInfo),nr(r),null;case 10:return Wn(r.type._context),nr(r),null;case 17:return tr(r.type)&&Eo(),nr(r),null;case 19:if(en(on),g=r.memoizedState,g===null)return nr(r),null;if(l=(r.flags&128)!==0,j=g.rendering,j===null)if(l)Wa(g,!1);else{if(Tt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(j=mi(t),j!==null){for(r.flags|=128,Wa(g,!1),l=j.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),r.subtreeFlags=0,l=a,a=r.child;a!==null;)g=a,t=l,g.flags&=14680066,j=g.alternate,j===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=j.childLanes,g.lanes=j.lanes,g.child=j.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=j.memoizedProps,g.memoizedState=j.memoizedState,g.updateQueue=j.updateQueue,g.type=j.type,t=j.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Vt(on,on.current&1|2),r.child}t=t.sibling}g.tail!==null&&Lt()>zl&&(r.flags|=128,l=!0,Wa(g,!1),r.lanes=4194304)}else{if(!l)if(t=mi(j),t!==null){if(r.flags|=128,l=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Wa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!j.alternate&&!tn)return nr(r),null}else 2*Lt()-g.renderingStartTime>zl&&a!==1073741824&&(r.flags|=128,l=!0,Wa(g,!1),r.lanes=4194304);g.isBackwards?(j.sibling=r.child,r.child=j):(a=g.last,a!==null?a.sibling=j:r.child=j,g.last=j)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Lt(),r.sibling=null,a=on.current,Vt(on,l?a&1|2:a&1),r):(nr(r),null);case 22:case 23:return lh(),l=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(r.flags|=8192),l&&(r.mode&1)!==0?(Bt&1073741824)!==0&&(nr(r),r.subtreeFlags&6&&(r.flags|=8192)):nr(r),null;case 24:return null;case 25:return null}throw Error(p(156,r.tag))}function e(t,r){switch(yl(r),r.tag){case 1:return tr(r.type)&&Eo(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Pi(),en(fr),en(Gn),Qs(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return xu(r),null;case 13:if(en(on),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(p(340));Ao()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return en(on),null;case 4:return Pi(),null;case 10:return Wn(r.type._context),null;case 22:case 23:return lh(),null;case 24:return null;default:return null}}var n=!1,s=!1,i=typeof WeakSet=="function"?WeakSet:Set,o=null;function d(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Rn(t,r,l)}else a.current=null}function m(t,r,a){try{a()}catch(l){Rn(t,r,l)}}var y=!1;function b(t,r){if(pl=ut,t=uu(),fa(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var j=0,K=-1,X=-1,he=0,Pe=0,Re=t,Ee=null;t:for(;;){for(var Qe;Re!==a||f!==0&&Re.nodeType!==3||(K=j+f),Re!==g||l!==0&&Re.nodeType!==3||(X=j+l),Re.nodeType===3&&(j+=Re.nodeValue.length),(Qe=Re.firstChild)!==null;)Ee=Re,Re=Qe;for(;;){if(Re===t)break t;if(Ee===a&&++he===f&&(K=j),Ee===g&&++Pe===l&&(X=j),(Qe=Re.nextSibling)!==null)break;Re=Ee,Ee=Re.parentNode}Re=Qe}a=K===-1||X===-1?null:{start:K,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yi={focusedElem:t,selectionRange:a},ut=!1,o=r;o!==null;)if(r=o,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,o=t;else for(;o!==null;){r=o;try{var rt=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var it=rt.memoizedProps,qn=rt.memoizedState,ue=r.stateNode,ee=ue.getSnapshotBeforeUpdate(r.elementType===r.type?it:gr(r.type,it),qn);ue.__reactInternalSnapshotBeforeUpdate=ee}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(ze){Rn(r,r.return,ze)}if(t=r.sibling,t!==null){t.return=r.return,o=t;break}o=r.return}return rt=y,y=!1,rt}function k(t,r,a){var l=r.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var g=f.destroy;f.destroy=void 0,g!==void 0&&m(r,a,g)}f=f.next}while(f!==l)}}function O(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==r)}}function B(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function te(t){var r=t.alternate;r!==null&&(t.alternate=null,te(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ti],delete r[Ca],delete r[hu],delete r[Qd],delete r[Zd])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z(t){return t.tag===5||t.tag===3||t.tag===4}function fe(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xe(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=gs));else if(l!==4&&(t=t.child,t!==null))for(xe(t,r,a),t=t.sibling;t!==null;)xe(t,r,a),t=t.sibling}function Le(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Le(t,r,a),t=t.sibling;t!==null;)Le(t,r,a),t=t.sibling}var je=null,De=!1;function Ie(t,r,a){for(a=a.child;a!==null;)Ue(t,r,a),a=a.sibling}function Ue(t,r,a){if(_&&typeof _.onCommitFiberUnmount=="function")try{_.onCommitFiberUnmount(Mn,a)}catch{}switch(a.tag){case 5:s||d(a,r);case 6:var l=je,f=De;je=null,Ie(t,r,a),je=l,De=f,je!==null&&(De?(t=je,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):je.removeChild(a.stateNode));break;case 18:je!==null&&(De?(t=je,a=a.stateNode,t.nodeType===8?fl(t.parentNode,a):t.nodeType===1&&fl(t,a),we(t)):fl(je,a.stateNode));break;case 4:l=je,f=De,je=a.stateNode.containerInfo,De=!0,Ie(t,r,a),je=l,De=f;break;case 0:case 11:case 14:case 15:if(!s&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var g=f,j=g.destroy;g=g.tag,j!==void 0&&((g&2)!==0||(g&4)!==0)&&m(a,r,j),f=f.next}while(f!==l)}Ie(t,r,a);break;case 1:if(!s&&(d(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(K){Rn(a,r,K)}Ie(t,r,a);break;case 21:Ie(t,r,a);break;case 22:a.mode&1?(s=(l=s)||a.memoizedState!==null,Ie(t,r,a),s=l):Ie(t,r,a);break;default:Ie(t,r,a)}}function ot(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new i),r.forEach(function(l){var f=Tm.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function Ye(t,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var g=t,j=r,K=j;e:for(;K!==null;){switch(K.tag){case 5:je=K.stateNode,De=!1;break e;case 3:je=K.stateNode.containerInfo,De=!0;break e;case 4:je=K.stateNode.containerInfo,De=!0;break e}K=K.return}if(je===null)throw Error(p(160));Ue(g,j,f),je=null,De=!1;var X=f.alternate;X!==null&&(X.return=null),f.return=null}catch(he){Rn(f,r,he)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)wt(r,t),r=r.sibling}function wt(t,r){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ye(r,t),_t(t),l&4){try{k(3,t,t.return),O(3,t)}catch(it){Rn(t,t.return,it)}try{k(5,t,t.return)}catch(it){Rn(t,t.return,it)}}break;case 1:Ye(r,t),_t(t),l&512&&a!==null&&d(a,a.return);break;case 5:if(Ye(r,t),_t(t),l&512&&a!==null&&d(a,a.return),t.flags&32){var f=t.stateNode;try{dt(f,"")}catch(it){Rn(t,t.return,it)}}if(l&4&&(f=t.stateNode,f!=null)){var g=t.memoizedProps,j=a!==null?a.memoizedProps:g,K=t.type,X=t.updateQueue;if(t.updateQueue=null,X!==null)try{K==="input"&&g.type==="radio"&&g.name!=null&&et(f,g),gt(K,j);var he=gt(K,g);for(j=0;j<X.length;j+=2){var Pe=X[j],Re=X[j+1];Pe==="style"?Hr(f,Re):Pe==="dangerouslySetInnerHTML"?mt(f,Re):Pe==="children"?dt(f,Re):z(f,Pe,Re,he)}switch(K){case"input":bt(f,g);break;case"textarea":me(f,g);break;case"select":var Ee=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var Qe=g.value;Qe!=null?vt(f,!!g.multiple,Qe,!1):Ee!==!!g.multiple&&(g.defaultValue!=null?vt(f,!!g.multiple,g.defaultValue,!0):vt(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ca]=g}catch(it){Rn(t,t.return,it)}}break;case 6:if(Ye(r,t),_t(t),l&4){if(t.stateNode===null)throw Error(p(162));f=t.stateNode,g=t.memoizedProps;try{f.nodeValue=g}catch(it){Rn(t,t.return,it)}}break;case 3:if(Ye(r,t),_t(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{we(r.containerInfo)}catch(it){Rn(t,t.return,it)}break;case 4:Ye(r,t),_t(t);break;case 13:Ye(r,t),_t(t),f=t.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Ha=Lt())),l&4&&ot(t);break;case 22:if(Pe=a!==null&&a.memoizedState!==null,t.mode&1?(s=(he=s)||Pe,Ye(r,t),s=he):Ye(r,t),_t(t),l&8192){if(he=t.memoizedState!==null,(t.stateNode.isHidden=he)&&!Pe&&(t.mode&1)!==0)for(o=t,Pe=t.child;Pe!==null;){for(Re=o=Pe;o!==null;){switch(Ee=o,Qe=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:k(4,Ee,Ee.return);break;case 1:d(Ee,Ee.return);var rt=Ee.stateNode;if(typeof rt.componentWillUnmount=="function"){l=Ee,a=Ee.return;try{r=l,rt.props=r.memoizedProps,rt.state=r.memoizedState,rt.componentWillUnmount()}catch(it){Rn(l,a,it)}}break;case 5:d(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){rr(Re);continue}}Qe!==null?(Qe.return=Ee,o=Qe):rr(Re)}Pe=Pe.sibling}e:for(Pe=null,Re=t;;){if(Re.tag===5){if(Pe===null){Pe=Re;try{f=Re.stateNode,he?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(K=Re.stateNode,X=Re.memoizedProps.style,j=X!=null&&X.hasOwnProperty("display")?X.display:null,K.style.display=_r("display",j))}catch(it){Rn(t,t.return,it)}}}else if(Re.tag===6){if(Pe===null)try{Re.stateNode.nodeValue=he?"":Re.memoizedProps}catch(it){Rn(t,t.return,it)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===t)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===t)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===t)break e;Pe===Re&&(Pe=null),Re=Re.return}Pe===Re&&(Pe=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:Ye(r,t),_t(t),l&4&&ot(t);break;case 21:break;default:Ye(r,t),_t(t)}}function _t(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(Z(a)){var l=a;break e}a=a.return}throw Error(p(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(dt(f,""),l.flags&=-33);var g=fe(t);Le(t,g,f);break;case 3:case 4:var j=l.stateNode.containerInfo,K=fe(t);xe(t,K,j);break;default:throw Error(p(161))}}catch(X){Rn(t,t.return,X)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Bn(t,r,a){o=t,nn(t)}function nn(t,r,a){for(var l=(t.mode&1)!==0;o!==null;){var f=o,g=f.child;if(f.tag===22&&l){var j=f.memoizedState!==null||n;if(!j){var K=f.alternate,X=K!==null&&K.memoizedState!==null||s;K=n;var he=s;if(n=j,(s=X)&&!he)for(o=f;o!==null;)j=o,X=j.child,j.tag===22&&j.memoizedState!==null?vn(f):X!==null?(X.return=j,o=X):vn(f);for(;g!==null;)o=g,nn(g),g=g.sibling;o=f,n=K,s=he}vr(t)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,o=g):vr(t)}}function vr(t){for(;o!==null;){var r=o;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:s||O(5,r);break;case 1:var l=r.stateNode;if(r.flags&4&&!s)if(a===null)l.componentDidMount();else{var f=r.elementType===r.type?a.memoizedProps:gr(r.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&Vs(r,g,l);break;case 3:var j=r.updateQueue;if(j!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Vs(r,j,a)}break;case 5:var K=r.stateNode;if(a===null&&r.flags&4){a=K;var X=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&a.focus();break;case"img":X.src&&(a.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var he=r.alternate;if(he!==null){var Pe=he.memoizedState;if(Pe!==null){var Re=Pe.dehydrated;Re!==null&&we(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}s||r.flags&512&&B(r)}catch(Ee){Rn(r,r.return,Ee)}}if(r===t){o=null;break}if(a=r.sibling,a!==null){a.return=r.return,o=a;break}o=r.return}}function rr(t){for(;o!==null;){var r=o;if(r===t){o=null;break}var a=r.sibling;if(a!==null){a.return=r.return,o=a;break}o=r.return}}function vn(t){for(;o!==null;){var r=o;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{O(4,r)}catch(X){Rn(r,a,X)}break;case 1:var l=r.stateNode;if(typeof l.componentDidMount=="function"){var f=r.return;try{l.componentDidMount()}catch(X){Rn(r,f,X)}}var g=r.return;try{B(r)}catch(X){Rn(r,g,X)}break;case 5:var j=r.return;try{B(r)}catch(X){Rn(r,j,X)}}}catch(X){Rn(r,r.return,X)}if(r===t){o=null;break}var K=r.sibling;if(K!==null){K.return=r.return,o=K;break}o=r.return}}var xr=Math.ceil,Nn=q.ReactCurrentDispatcher,xn=q.ReactCurrentOwner,Ot=q.ReactCurrentBatchConfig,ct=0,Dt=null,rn=null,an=0,Bt=0,br=ci(0),Tt=0,so=null,wr=0,Ii=0,es=0,An=null,Un=null,Ha=0,zl=1/0,oo=null,Yc=!1,rh=null,Go=null,Vc=!1,Yo=null,Xc=0,Uu=0,ih=null,Qc=-1,Zc=0;function Fr(){return(ct&6)!==0?Lt():Qc!==-1?Qc:Qc=Lt()}function Vo(t){return(t.mode&1)===0?1:(ct&2)!==0&&an!==0?an&-an:Lc.transition!==null?(Zc===0&&(Zc=ra()),Zc):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:wi(t.type)),t)}function ts(t,r,a,l){if(50<Uu)throw Uu=0,ih=null,Error(p(185));Kn(t,a,l),((ct&2)===0||t!==Dt)&&(t===Dt&&((ct&2)===0&&(Ii|=a),Tt===4&&Xo(t,an)),Jr(t,l),a===1&&ct===0&&(r.mode&1)===0&&(zl=Lt()+500,ml&&bs()))}function Jr(t,r){var a=t.callbackNode;ft(t,r);var l=oi(t,t===Dt?an:0);if(l===0)a!==null&&zi(a),t.callbackNode=null,t.callbackPriority=0;else if(r=l&-l,t.callbackPriority!==r){if(a!=null&&zi(a),r===1)t.tag===0?Tc(fp.bind(null,t)):Ni(fp.bind(null,t)),Cc(function(){(ct&6)===0&&bs()}),a=null;else{switch(Wi(l)){case 1:a=bi;break;case 4:a=Yt;break;case 16:a=Xe;break;case 536870912:a=cr;break;default:a=Xe}a=kp(a,pp.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function pp(t,r){if(Qc=-1,Zc=0,(ct&6)!==0)throw Error(p(327));var a=t.callbackNode;if(Fl()&&t.callbackNode!==a)return null;var l=oi(t,t===Dt?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||r)r=Jc(t,l);else{r=l;var f=ct;ct|=2;var g=gp();(Dt!==t||an!==r)&&(oo=null,zl=Lt()+500,Ua(t,r));do try{km();break}catch(K){mp(t,K)}while(!0);bl(),Nn.current=g,ct=f,rn!==null?r=0:(Dt=null,an=0,r=Tt)}if(r!==0){if(r===2&&(f=go(t),f!==0&&(l=f,r=sh(t,f))),r===1)throw a=so,Ua(t,0),Xo(t,l),Jr(t,Lt()),a;if(r===6)Xo(t,l);else{if(f=t.current.alternate,(l&30)===0&&!bm(f)&&(r=Jc(t,l),r===2&&(g=go(t),g!==0&&(l=g,r=sh(t,g))),r===1))throw a=so,Ua(t,0),Xo(t,l),Jr(t,Lt()),a;switch(t.finishedWork=f,t.finishedLanes=l,r){case 0:case 1:throw Error(p(345));case 2:qa(t,Un,oo);break;case 3:if(Xo(t,l),(l&130023424)===l&&(r=Ha+500-Lt(),10<r)){if(oi(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Fr(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Vi(qa.bind(null,t,Un,oo),r);break}qa(t,Un,oo);break;case 4:if(Xo(t,l),(l&4194240)===l)break;for(r=t.eventTimes,f=-1;0<l;){var j=31-pe(l);g=1<<j,j=r[j],j>f&&(f=j),l&=~g}if(l=f,l=Lt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*xr(l/1960))-l,10<l){t.timeoutHandle=Vi(qa.bind(null,t,Un,oo),l);break}qa(t,Un,oo);break;case 5:qa(t,Un,oo);break;default:throw Error(p(329))}}}return Jr(t,Lt()),t.callbackNode===a?pp.bind(null,t):null}function sh(t,r){var a=An;return t.current.memoizedState.isDehydrated&&(Ua(t,r).flags|=256),t=Jc(t,r),t!==2&&(r=Un,Un=a,r!==null&&oh(r)),t}function oh(t){Un===null?Un=t:Un.push.apply(Un,t)}function bm(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],g=f.getSnapshot;f=f.value;try{if(!_n(g(),f))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Xo(t,r){for(r&=~es,r&=~Ii,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-pe(r),l=1<<a;t[a]=-1,r&=~l}}function fp(t){if((ct&6)!==0)throw Error(p(327));Fl();var r=oi(t,0);if((r&1)===0)return Jr(t,Lt()),null;var a=Jc(t,r);if(t.tag!==0&&a===2){var l=go(t);l!==0&&(r=l,a=sh(t,l))}if(a===1)throw a=so,Ua(t,0),Xo(t,r),Jr(t,Lt()),a;if(a===6)throw Error(p(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,qa(t,Un,oo),Jr(t,Lt()),null}function ah(t,r){var a=ct;ct|=1;try{return t(r)}finally{ct=a,ct===0&&(zl=Lt()+500,ml&&bs())}}function Ba(t){Yo!==null&&Yo.tag===0&&(ct&6)===0&&Fl();var r=ct;ct|=1;var a=Ot.transition,l=Nt;try{if(Ot.transition=null,Nt=1,t)return t()}finally{Nt=l,Ot.transition=a,ct=r,(ct&6)===0&&bs()}}function lh(){Bt=br.current,en(br)}function Ua(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Sa(a)),rn!==null)for(a=rn.return;a!==null;){var l=a;switch(yl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Eo();break;case 3:Pi(),en(fr),en(Gn),Qs();break;case 5:xu(l);break;case 4:Pi();break;case 13:en(on);break;case 19:en(on);break;case 10:Wn(l.type._context);break;case 22:case 23:lh()}a=a.return}if(Dt=t,rn=t=Qo(t.current,null),an=Bt=r,Tt=0,so=null,es=Ii=wr=0,Un=An=null,Ss!==null){for(r=0;r<Ss.length;r++)if(a=Ss[r],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,g=a.pending;if(g!==null){var j=g.next;g.next=f,l.next=j}a.pending=l}Ss=null}return t}function mp(t,r){do{var a=rn;try{if(bl(),Sl.current=Oa,Ra){for(var l=hn.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ra=!1}if(Zs=0,It=Hn=hn=null,Ia=!1,Ma=0,xn.current=null,a===null||a.return===null){Tt=1,so=r,rn=null;break}e:{var g=t,j=a.return,K=a,X=r;if(r=an,K.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var he=X,Pe=K,Re=Pe.tag;if((Pe.mode&1)===0&&(Re===0||Re===11||Re===15)){var Ee=Pe.alternate;Ee?(Pe.updateQueue=Ee.updateQueue,Pe.memoizedState=Ee.memoizedState,Pe.lanes=Ee.lanes):(Pe.updateQueue=null,Pe.memoizedState=null)}var Qe=Du(j);if(Qe!==null){Qe.flags&=-257,ro(Qe,j,K,g,r),Qe.mode&1&&Bc(g,he,r),r=Qe,X=he;var rt=r.updateQueue;if(rt===null){var it=new Set;it.add(X),r.updateQueue=it}else rt.add(X);break e}else{if((r&1)===0){Bc(g,he,r),uh();break e}X=Error(p(426))}}else if(tn&&K.mode&1){var qn=Du(j);if(qn!==null){(qn.flags&65536)===0&&(qn.flags|=256),ro(qn,j,K,g,r),Ro(no(X,K));break e}}g=X=no(X,K),Tt!==4&&(Tt=2),An===null?An=[g]:An.push(g),g=j;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var ue=jl(g,X,r);Oo(g,ue);break e;case 1:K=X;var ee=g.type,ce=g.stateNode;if((g.flags&128)===0&&(typeof ee.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Go===null||!Go.has(ce)))){g.flags|=65536,r&=-r,g.lanes|=r;var ze=Ou(g,K,r);Oo(g,ze);break e}}g=g.return}while(g!==null)}vp(a)}catch(at){r=at,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function gp(){var t=Nn.current;return Nn.current=Oa,t===null?Oa:t}function uh(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Dt===null||(wr&268435455)===0&&(Ii&268435455)===0||Xo(Dt,an)}function Jc(t,r){var a=ct;ct|=2;var l=gp();(Dt!==t||an!==r)&&(oo=null,Ua(t,r));do try{wm();break}catch(f){mp(t,f)}while(!0);if(bl(),ct=a,Nn.current=l,rn!==null)throw Error(p(261));return Dt=null,an=0,Tt}function wm(){for(;rn!==null;)yp(rn)}function km(){for(;rn!==null&&!ii();)yp(rn)}function yp(t){var r=wp(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,r===null?vp(t):rn=r,xn.current=null}function vp(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=Dl(a,r,Bt),a!==null){rn=a;return}}else{if(a=e(a,r),a!==null){a.flags&=32767,rn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,rn=null;return}}if(r=r.sibling,r!==null){rn=r;return}rn=r=t}while(r!==null);Tt===0&&(Tt=5)}function qa(t,r,a){var l=Nt,f=Ot.transition;try{Ot.transition=null,Nt=1,Sm(t,r,a,l)}finally{Ot.transition=f,Nt=l}return null}function Sm(t,r,a,l){do Fl();while(Yo!==null);if((ct&6)!==0)throw Error(p(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(p(177));t.callbackNode=null,t.callbackPriority=0;var g=a.lanes|a.childLanes;if(Ps(t,g),t===Dt&&(rn=Dt=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Vc||(Vc=!0,kp(Xe,function(){return Fl(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Ot.transition,Ot.transition=null;var j=Nt;Nt=1;var K=ct;ct|=4,xn.current=null,b(t,a),wt(a,t),Gd(Yi),ut=!!pl,Yi=pl=null,t.current=a,Bn(a),xi(),ct=K,Nt=j,Ot.transition=g}else t.current=a;if(Vc&&(Vc=!1,Yo=t,Xc=f),g=t.pendingLanes,g===0&&(Go=null),W(a.stateNode),Jr(t,Lt()),r!==null)for(l=t.onRecoverableError,a=0;a<r.length;a++)f=r[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(Yc)throw Yc=!1,t=rh,rh=null,t;return(Xc&1)!==0&&t.tag!==0&&Fl(),g=t.pendingLanes,(g&1)!==0?t===ih?Uu++:(Uu=0,ih=t):Uu=0,bs(),null}function Fl(){if(Yo!==null){var t=Wi(Xc),r=Ot.transition,a=Nt;try{if(Ot.transition=null,Nt=16>t?16:t,Yo===null)var l=!1;else{if(t=Yo,Yo=null,Xc=0,(ct&6)!==0)throw Error(p(331));var f=ct;for(ct|=4,o=t.current;o!==null;){var g=o,j=g.child;if((o.flags&16)!==0){var K=g.deletions;if(K!==null){for(var X=0;X<K.length;X++){var he=K[X];for(o=he;o!==null;){var Pe=o;switch(Pe.tag){case 0:case 11:case 15:k(8,Pe,g)}var Re=Pe.child;if(Re!==null)Re.return=Pe,o=Re;else for(;o!==null;){Pe=o;var Ee=Pe.sibling,Qe=Pe.return;if(te(Pe),Pe===he){o=null;break}if(Ee!==null){Ee.return=Qe,o=Ee;break}o=Qe}}}var rt=g.alternate;if(rt!==null){var it=rt.child;if(it!==null){rt.child=null;do{var qn=it.sibling;it.sibling=null,it=qn}while(it!==null)}}o=g}}if((g.subtreeFlags&2064)!==0&&j!==null)j.return=g,o=j;else e:for(;o!==null;){if(g=o,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:k(9,g,g.return)}var ue=g.sibling;if(ue!==null){ue.return=g.return,o=ue;break e}o=g.return}}var ee=t.current;for(o=ee;o!==null;){j=o;var ce=j.child;if((j.subtreeFlags&2064)!==0&&ce!==null)ce.return=j,o=ce;else e:for(j=ee;o!==null;){if(K=o,(K.flags&2048)!==0)try{switch(K.tag){case 0:case 11:case 15:O(9,K)}}catch(at){Rn(K,K.return,at)}if(K===j){o=null;break e}var ze=K.sibling;if(ze!==null){ze.return=K.return,o=ze;break e}o=K.return}}if(ct=f,bs(),_&&typeof _.onPostCommitFiberRoot=="function")try{_.onPostCommitFiberRoot(Mn,t)}catch{}l=!0}return l}finally{Nt=a,Ot.transition=r}}return!1}function xp(t,r,a){r=no(a,r),r=jl(t,r,1),t=hi(t,r,1),r=Fr(),t!==null&&(Kn(t,1,r),Jr(t,r))}function Rn(t,r,a){if(t.tag===3)xp(t,t,a);else for(;r!==null;){if(r.tag===3){xp(r,t,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Go===null||!Go.has(l))){t=no(a,t),t=Ou(r,t,1),r=hi(r,t,1),t=Fr(),r!==null&&(Kn(r,1,t),Jr(r,t));break}}r=r.return}}function Cm(t,r,a){var l=t.pingCache;l!==null&&l.delete(r),r=Fr(),t.pingedLanes|=t.suspendedLanes&a,Dt===t&&(an&a)===a&&(Tt===4||Tt===3&&(an&130023424)===an&&500>Lt()-Ha?Ua(t,0):es|=a),Jr(t,r)}function bp(t,r){r===0&&((t.mode&1)===0?r=1:(r=Jt,Jt<<=1,(Jt&130023424)===0&&(Jt=4194304)));var a=Fr();t=Ei(t,r),t!==null&&(Kn(t,r,a),Jr(t,a))}function _m(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),bp(t,a)}function Tm(t,r){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(p(314))}l!==null&&l.delete(r),bp(t,a)}var wp;wp=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||fr.current)Jn=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return Jn=!1,nh(t,r,a);Jn=(t.flags&131072)!==0}else Jn=!1,tn&&(r.flags&1048576)!==0&&gl(r,Pr,r.index);switch(r.lanes=0,r.tag){case 2:var l=r.type;Ol(t,r),t=r.pendingProps;var f=jo(r,Gn.current);Gs(r,a),f=Tl(null,r,l,t,f,a);var g=bu();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,tr(l)?(g=!0,Lo(r)):g=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,wl(r),f.updater=za,r.stateNode=f,f._reactInternals=r,Ru(r,l,t,a),r=$o(null,r,l,!0,g,a)):(r.tag=0,tn&&g&&qs(r),yr(null,r,f,a),r=r.child),r;case 16:l=r.elementType;e:{switch(Ol(t,r),t=r.pendingProps,f=l._init,l=f(l._payload),r.type=l,f=r.tag=jm(l),t=gr(l,t),f){case 0:r=io(null,r,l,t,a);break e;case 1:r=Zr(null,r,l,t,a);break e;case 11:r=qc(null,r,l,t,a);break e;case 14:r=Kc(null,r,l,gr(l.type,t),a);break e}throw Error(p(306,l,""))}return r;case 0:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:gr(l,f),io(t,r,l,f,a);case 1:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:gr(l,f),Zr(t,r,l,f,a);case 3:e:{if(Ll(r),t===null)throw Error(p(387));l=r.pendingProps,g=r.memoizedState,f=g.element,Ys(t,r),kl(r,l,null,a);var j=r.memoizedState;if(l=j.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:j.cache,pendingSuspenseBoundaries:j.pendingSuspenseBoundaries,transitions:j.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){f=no(Error(p(423)),r),r=zu(t,r,l,a,f);break e}else if(l!==f){f=no(Error(p(424)),r),r=zu(t,r,l,a,f);break e}else for(Pn=ys(r.stateNode.containerInfo.firstChild),mr=r,tn=!0,Vr=null,a=Ea(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ao(),l===f){r=Ar(t,r,a);break e}yr(t,r,l,a)}r=r.child}return r;case 5:return vu(r),t===null&&vl(r),l=r.type,f=r.pendingProps,g=t!==null?t.memoizedProps:null,j=f.children,Fs(l,f)?j=null:g!==null&&Fs(l,g)&&(r.flags|=32),El(t,r),yr(t,r,j,a),r.child;case 6:return t===null&&vl(r),null;case 13:return Rl(t,r,a);case 4:return Xs(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=ks(r,null,l,a):yr(t,r,l,a),r.child;case 11:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:gr(l,f),qc(t,r,l,f,a);case 7:return yr(t,r,r.pendingProps,a),r.child;case 8:return yr(t,r,r.pendingProps.children,a),r.child;case 12:return yr(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(l=r.type._context,f=r.pendingProps,g=r.memoizedProps,j=f.value,Vt(La,l._currentValue),l._currentValue=j,g!==null)if(_n(g.value,j)){if(g.children===f.children&&!fr.current){r=Ar(t,r,a);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var K=g.dependencies;if(K!==null){j=g.child;for(var X=K.firstContext;X!==null;){if(X.context===l){if(g.tag===1){X=Li(-1,a&-a),X.tag=2;var he=g.updateQueue;if(he!==null){he=he.shared;var Pe=he.pending;Pe===null?X.next=X:(X.next=Pe.next,Pe.next=X),he.pending=X}}g.lanes|=a,X=g.alternate,X!==null&&(X.lanes|=a),Mo(g.return,a,r),K.lanes|=a;break}X=X.next}}else if(g.tag===10)j=g.type===r.type?null:g.child;else if(g.tag===18){if(j=g.return,j===null)throw Error(p(341));j.lanes|=a,K=j.alternate,K!==null&&(K.lanes|=a),Mo(j,a,r),j=g.sibling}else j=g.child;if(j!==null)j.return=g;else for(j=g;j!==null;){if(j===r){j=null;break}if(g=j.sibling,g!==null){g.return=j.return,j=g;break}j=j.return}g=j}yr(t,r,f.children,a),r=r.child}return r;case 9:return f=r.type,l=r.pendingProps.children,Gs(r,a),f=zr(f),l=l(f),r.flags|=1,yr(t,r,l,a),r.child;case 14:return l=r.type,f=gr(l,r.pendingProps),f=gr(l.type,f),Kc(t,r,l,f,a);case 15:return Xt(t,r,r.type,r.pendingProps,a);case 17:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:gr(l,f),Ol(t,r),r.tag=1,tr(l)?(t=!0,Lo(r)):t=!1,Gs(r,a),Fc(r,l,f),Ru(r,l,f,a),$o(null,r,l,!0,t,a);case 19:return Hu(t,r,a);case 22:return $c(t,r,a)}throw Error(p(156,r.tag))};function kp(t,r){return Er(t,r)}function Nm(t,r,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(t,r,a,l){return new Nm(t,r,a,l)}function ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jm(t){if(typeof t=="function")return ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ke)return 11;if(t===T)return 14}return 2}function Qo(t,r){var a=t.alternate;return a===null?(a=Mi(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function ed(t,r,a,l,f,g){var j=2;if(l=t,typeof t=="function")ch(t)&&(j=1);else if(typeof t=="string")j=5;else e:switch(t){case le:return Ka(a.children,f,g,r);case ye:j=8,f|=8;break;case We:return t=Mi(12,a,r,f|2),t.elementType=We,t.lanes=g,t;case re:return t=Mi(13,a,r,f),t.elementType=re,t.lanes=g,t;case ve:return t=Mi(19,a,r,f),t.elementType=ve,t.lanes=g,t;case U:return td(a,f,g,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Te:j=10;break e;case ie:j=9;break e;case ke:j=11;break e;case T:j=14;break e;case Q:j=16,l=null;break e}throw Error(p(130,t==null?t:typeof t,""))}return r=Mi(j,a,r,f),r.elementType=t,r.type=l,r.lanes=g,r}function Ka(t,r,a,l){return t=Mi(7,t,l,r),t.lanes=a,t}function td(t,r,a,l){return t=Mi(22,t,l,r),t.elementType=U,t.lanes=a,t.stateNode={isHidden:!1},t}function dh(t,r,a){return t=Mi(6,t,null,r),t.lanes=a,t}function hh(t,r,a){return r=Mi(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Em(t,r,a,l,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function ph(t,r,a,l,f,g,j,K,X){return t=new Em(t,r,a,K,X),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Mi(3,null,null,r),t.current=g,g.stateNode=t,g.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},wl(g),t}function Lm(t,r,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:l==null?null:""+l,children:t,containerInfo:r,implementation:a}}function Sp(t){if(!t)return xs;t=t._reactInternals;e:{if(kn(t)!==t||t.tag!==1)throw Error(p(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(tr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(p(171))}if(t.tag===1){var a=t.type;if(tr(a))return fu(t,a,r)}return r}function Cp(t,r,a,l,f,g,j,K,X){return t=ph(a,l,!0,t,f,g,j,K,X),t.context=Sp(null),a=t.current,l=Fr(),f=Vo(a),g=Li(l,f),g.callback=r??null,hi(a,g,f),t.current.lanes=f,Kn(t,f,l),Jr(t,l),t}function nd(t,r,a,l){var f=r.current,g=Fr(),j=Vo(f);return a=Sp(a),r.context===null?r.context=a:r.pendingContext=a,r=Li(g,j),r.payload={element:t},l=l===void 0?null:l,l!==null&&(r.callback=l),t=hi(f,r,j),t!==null&&(ts(t,f,j,g),Aa(t,f,j)),j}function rd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _p(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function fh(t,r){_p(t,r),(t=t.alternate)&&_p(t,r)}function Pm(){return null}var Tp=typeof reportError=="function"?reportError:function(t){console.error(t)};function mh(t){this._internalRoot=t}id.prototype.render=mh.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(p(409));nd(t,r,null,null)},id.prototype.unmount=mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Ba(function(){nd(null,t,null,null)}),r[Xi]=null}};function id(t){this._internalRoot=t}id.prototype.unstable_scheduleHydration=function(t){if(t){var r=ia();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Or.length&&r!==0&&r<Or[a].priority;a++);Or.splice(a,0,t),a===0&&vo(t)}};function gh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Np(){}function Am(t,r,a,l,f){if(f){if(typeof l=="function"){var g=l;l=function(){var he=rd(j);g.call(he)}}var j=Cp(r,l,t,0,null,!1,!1,"",Np);return t._reactRootContainer=j,t[Xi]=j.current,fs(t.nodeType===8?t.parentNode:t),Ba(),j}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var K=l;l=function(){var he=rd(X);K.call(he)}}var X=ph(t,0,!1,null,null,!1,!1,"",Np);return t._reactRootContainer=X,t[Xi]=X.current,fs(t.nodeType===8?t.parentNode:t),Ba(function(){nd(r,X,a,l)}),X}function od(t,r,a,l,f){var g=a._reactRootContainer;if(g){var j=g;if(typeof f=="function"){var K=f;f=function(){var X=rd(j);K.call(X)}}nd(r,j,t,f)}else j=Am(a,r,t,f,l);return rd(j)}$r=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Sn(r.pendingLanes);a!==0&&(as(r,a|1),Jr(r,Lt()),(ct&6)===0&&(zl=Lt()+500,bs()))}break;case 13:Ba(function(){var l=Ei(t,1);if(l!==null){var f=Fr();ts(l,t,1,f)}}),fh(t,1)}},ai=function(t){if(t.tag===13){var r=Ei(t,134217728);if(r!==null){var a=Fr();ts(r,t,134217728,a)}fh(t,134217728)}},dr=function(t){if(t.tag===13){var r=Vo(t),a=Ei(t,r);if(a!==null){var l=Fr();ts(a,t,r,l)}fh(t,r)}},ia=function(){return Nt},ls=function(t,r){var a=Nt;try{return Nt=t,r()}finally{Nt=a}},Tr=function(t,r,a){switch(r){case"input":if(bt(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==t&&l.form===t.form){var f=yn(l);if(!f)throw Error(p(90));qt(l),bt(l,f)}}}break;case"textarea":me(t,a);break;case"select":r=a.value,r!=null&&vt(t,!!a.multiple,r,!1)}},ar=ah,wn=Ba;var Rm={usingClientEntryPoint:!1,Events:[dn,Tn,yn,jn,un,ah]},qu={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Im={bundleType:qu.bundleType,version:qu.version,rendererPackageName:qu.rendererPackageName,rendererConfig:qu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jr(t),t===null?null:t.stateNode},findFiberByHostInstance:qu.findFiberByHostInstance||Pm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ad=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ad.isDisabled&&ad.supportsFiber)try{Mn=ad.inject(Im),_=ad}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rm,ei.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gh(r))throw Error(p(200));return Lm(t,r,null,a)},ei.createRoot=function(t,r){if(!gh(t))throw Error(p(299));var a=!1,l="",f=Tp;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=ph(t,1,!1,null,null,a,!1,l,f),t[Xi]=r.current,fs(t.nodeType===8?t.parentNode:t),new mh(r)},ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=jr(r),t=t===null?null:t.stateNode,t},ei.flushSync=function(t){return Ba(t)},ei.hydrate=function(t,r,a){if(!sd(r))throw Error(p(200));return od(null,t,r,!0,a)},ei.hydrateRoot=function(t,r,a){if(!gh(t))throw Error(p(405));var l=a!=null&&a.hydratedSources||null,f=!1,g="",j=Tp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(j=a.onRecoverableError)),r=Cp(r,null,t,1,a??null,f,!1,g,j),t[Xi]=r.current,fs(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,f]:r.mutableSourceEagerHydrationData.push(a,f);return new id(r)},ei.render=function(t,r,a){if(!sd(r))throw Error(p(200));return od(null,t,r,!1,a)},ei.unmountComponentAtNode=function(t){if(!sd(t))throw Error(p(40));return t._reactRootContainer?(Ba(function(){od(null,null,t,!1,function(){t._reactRootContainer=null,t[Xi]=null})}),!0):!1},ei.unstable_batchedUpdates=ah,ei.unstable_renderSubtreeIntoContainer=function(t,r,a,l){if(!sd(a))throw Error(p(200));if(t==null||t._reactInternals===void 0)throw Error(p(38));return od(t,r,a,!1,l)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var Mp;function Km(){if(Mp)return xh.exports;Mp=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(h){console.error(h)}}return u(),xh.exports=qm(),xh.exports}var Op;function $m(){if(Op)return ld;Op=1;var u=Km();return ld.createRoot=u.createRoot,ld.hydrateRoot=u.hydrateRoot,ld}var Gm=$m();const Ym=[["Avery","Morgan","averym","Avery","p1"],["Jordan","Brooks","jbrooks17","Jordan Brooks","p1"],["Taylor","Reed","treed","T. Reed","p1"],["Casey","Nguyen","cnguyen","Casey","p1"],["Riley","Davis","rileyd","Riley","p1"],["Maya","Patel","maya-p","Maya","p3"],["Cameron","Lee","clee","Cameron Lee","p3"],["Sydney","Wilson","sydneyw","Sydney","p3"],["Quinn","Martinez","qmartinez","Quinn","p3"],["Bailey","Adams","bailey_a","Bailey","p5"],["Sam","Rivera","rivera-s","Sam","p5"],["Charlie","Brown","charlieb","Charlie","p6"],["Drew","Johnson","drewj","Drew","p6"],["Alex","Kim","alexk","Alex","p7"],["Robin","Clark","robin-c","Robin","p7"],["Jamie","Flores","jflores","Jamie","p8"]],gd=Ym.map(([u,h,p,v,x],w)=>({id:`sample-${w+1}`,first:u,last:h,sheetName:w===3||w===11?null:`${u} ${h}`,github:p,studentName:v,sections:w===0?["p1","p3"]:[x],status:w%5===0?"Active now":w%4===0?"Viewing page":"No recent signal",current:w%3===0?"Strings and Variables":w%3===1?"Format a Summary":"Intro to Arrays",assignments:[{id:"strings",name:"Strings and Variables",type:"Lesson",status:"Completed",score:w%4===0?null:8+w%3,possible:10,submitted:"2026-11-02"},{id:"summary",name:"Format a Summary",type:"Challenge",status:w%4===0?"Started":"Completed",score:w%4===0?null:11+w%5,possible:15,submitted:"2026-11-03"},{id:"decisions",name:"Decision Tree",type:"Challenge",status:w%3===0?"Submitted":"Needs revision",score:w%3===0?10:null,possible:20,submitted:"2026-10-28"},{id:"reflection",name:"Debugging Reflection",type:"Lesson",status:"Practice completed",score:null,possible:5,submitted:"2026-10-26"}],weekly:{"2026-11-02":w%4===0?0:19+w%6,"2026-10-26":w%3===0?12:8+w%5}})),Vm=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function yd(u=new Date){const h=Object.fromEntries(Vm.formatToParts(u).filter(v=>v.type!=="literal").map(v=>[v.type,v.value])),p=new Date(Date.UTC(Number(h.year),Number(h.month)-1,Number(h.day)));return p.setUTCDate(p.getUTCDate()-(p.getUTCDay()+6)%7),p.toISOString().slice(0,10)}function Mh(u=new Date,h=8){const p=new Date(yd(u)+"T12:00:00Z");return Array.from({length:h},(v,x)=>{const w=new Date(p);return w.setUTCDate(w.getUTCDate()-x*7),w.toISOString().slice(0,10)})}const Ul=u=>new Date(u+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"America/Chicago"}),Xm=(u,h,p)=>`${u}|${h}|${p}`;function Qm({response:u,type:h,aiUse:p,aiDetails:v}){return["essay","logic-puzzle"].includes(h)?String(u).trim().length<10?"Write your answer and explain your thinking.":["none","disclosed"].includes(p)?p==="disclosed"&&String(v).trim().length<5?"Describe which parts involved AI.":"":"Complete the AI-use declaration.":"Select an essay or logic puzzle."}const Zm=[{id:"seed-journal-1",sectionId:"p1",studentId:"sample-2",studentName:"Jordan Brooks",courseId:"computer-science-1",week:yd(),type:"essay",response:"When I debug code, I first reproduce the problem and read the error carefully. Next I try one small change and test again. I keep notes so I can explain what fixed the problem and why.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()},{id:"seed-journal-2",sectionId:"p1",studentId:"sample-3",studentName:"Taylor Reed",courseId:"computer-science-1",week:yd(),type:"logic-puzzle",response:"The differences are 4, 6, 8, and 10. The next difference is 12, so the next number is 42. This also follows the pattern n(n+1), starting at n = 1.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()}],Ns={"game-programming":[{id:"csharp-foundations",title:"C# Foundations",description:"Build the logic behind games.",lessons:["csharp-variables","csharp-conditionals"]},{id:"unity-systems",title:"Unity Gameplay",description:"Connect scripts and game mechanics.",lessons:["unity-colliders","unity-player-controller","unity-score"]}],"mobile-app-dev":[{id:"web-basics",title:"Web Foundations",description:"Create and style interface elements.",lessons:["web-layout","web-events"]},{id:"react-foundations",title:"React Essentials",description:"Build reusable and interactive UI.",lessons:["react-components","react-state"]}],uil:[{id:"java-language",title:"Java Language & Tracing",description:"Reason about loops and variables.",lessons:["uil-loops","uil-methods"]},{id:"java-data",title:"Data Structures",description:"Trace arrays and string operations.",lessons:["uil-arrays","uil-strings"]}],"tsi-math":[{id:"tsi-quantitative",title:"Quantitative Reasoning",description:"Rates, ratios, percentages, and proportions.",lessons:["tsi-ratios","tsi-percents"]},{id:"tsi-algebra",title:"Algebraic Reasoning",description:"Solve equations and interpret graphs.",lessons:["tsi-equations","tsi-slope"]}],capstone:[{id:"capstone-discover",title:"Discover the Problem",description:"Investigate a need worth solving.",lessons:["capstone-discovery","capstone-interviews"]},{id:"capstone-validate",title:"Prototype & Validate",description:"Turn evidence into an iterated prototype.",lessons:["capstone-prototype","capstone-feedback"]}]},Jm=[{id:"01-how-programs-work/01-first-message",unit:1,unitName:"How Programs Work",lesson:1,slug:"01-first-message",title:"Instructions and output",concept:"Output and strings",summary:"Tell a computer what to display using a simple Python instruction.",mode:"script",starter:`# Use print() to display the exact welcome message.
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
`}],eg=[{id:"02-values-and-variables/01-meet-variables",unit:2,unitName:"Values, Variables & Expressions",lesson:1,slug:"01-meet-variables",title:"Names for changing information",concept:"Variables and assignment  ",summary:"Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.",mode:"script",starter:`# Name the player with a variable, then display the required message.
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
`}],tg=[{id:"03-functions-and-parameters/01-functions-return",unit:3,unitName:"Functions, Parameters & Return Values",lesson:1,slug:"01-functions-return",title:"Returning an answer",concept:"Function definitions and return  ",summary:"A function packages instructions into a reusable operation. A function can give a result back with `return`.",mode:"function",starter:`def increment_number(number):
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
`}],ng=[{id:"04-comparisons-and-boolean-logic/01-comparisons",unit:4,unitName:"Comparisons & Boolean Logic",lesson:1,slug:"01-comparisons",title:"Ask Python a question",concept:"Comparison operators and Boolean values  ",summary:"A comparison is a question that evaluates to a Boolean value: `True` or `False`.",mode:"function",starter:`def has_required_points(current, required):
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
`}],rg=[{id:"05-conditional-execution/01-first-if",unit:5,unitName:"Conditional Execution",lesson:1,slug:"01-first-if",title:"Make a choice with if",concept:"If statements and indentation  ",summary:"Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.",mode:"function",starter:`def classify_temperature(temperature):
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
`}],ig=[{id:"06-iteration/01-for-ranges",unit:6,unitName:"Iteration & Accumulation",lesson:1,slug:"01-for-ranges",title:"Repeat an instruction",concept:"For loops and ranges  ",summary:"A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.",mode:"script",starter:`# Use one loop to print the integers 1 through 4.
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
`}],sg=[{id:"07-strings-and-text/01-index-and-length",unit:7,unitName:"Strings & Text Processing",lesson:1,slug:"01-index-and-length",title:"Read characters by position",concept:"String indexing and length",summary:"A string is an ordered sequence of characters. Positions start at zero, and negative indexes count from the end.",mode:"function",starter:`def edge_letters(text):
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
`}],og=[{id:"08-lists-and-collections/01-list-indexing",unit:8,unitName:"Lists & Collections",lesson:1,slug:"01-list-indexing",title:"Read values from a list",concept:"Lists, indexes, negative positions",summary:"A list stores several values in order, and each can be read using its position.",mode:"function",starter:`def end_points(values):
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
`}],ag=[{id:"09-dictionaries-and-data/01-keys-and-values",unit:9,unitName:"Dictionaries & Data",lesson:1,slug:"01-keys-and-values",title:"Look up information by key",concept:"Dictionary lookup and get",summary:"Dictionaries connect unique keys with values, letting a program retrieve information by name.",mode:"function",starter:`def price_for(prices, item):
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
`}],lg=[{id:"10-algorithms-and-testing/01-while-and-sentinels",unit:10,unitName:"Algorithms & Testing",lesson:1,slug:"01-while-and-sentinels",title:"Repeat until a stop signal",concept:"While loops and sentinel values",summary:"A `while` loop repeats until a condition changes, making it useful when the stopping point is part of the input.",mode:"function",starter:`def before_stop(events):
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
`}],ug=[...Jm,...eg,...tg,...ng,...rg,...ig,...sg,...og,...ag,...lg],Mf={"python-strings":{title:"Strings and Variables",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Create a greeting using a name and a favorite topic.",starter:`name = "Jordan"
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
`,console:"Run, Check and Submit are simulated in this React design lab."},"tsi-percents":{title:"Percents and Discounts",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Use percentages in everyday situations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-equations":{title:"Solve Linear Equations",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Solve a one-variable equation with inverse operations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-slope":{title:"Slope and Rate of Change",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Interpret slope from a table of values.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."}};function Ga(u){return typeof u=="string"?u:typeof(u==null?void 0:u.id)=="string"?u.id:""}function Es(u){return String((u==null?void 0:u.title)||(u==null?void 0:u.unitName)||(u==null?void 0:u.name)||"Lessons")}function sc(u,h=1){return(u==null?void 0:u.number)??(u==null?void 0:u.unit)??h}function rs(u){return((u==null?void 0:u.lessons)||[]).map(Ga).filter(Boolean)}function ec(u){return Array.isArray(u==null?void 0:u.units)?u.units.flatMap(rs):Array.isArray(u==null?void 0:u.lessons)?u.lessons.map(Ga).filter(Boolean):[]}function cg(u,h){return((u==null?void 0:u.units)||[]).some(p=>rs(p).includes(h))}function ea(u,h,p=Mf){var C,L;if(!h)return null;const v=((u==null?void 0:u.units)||[]).find(A=>rs(A).includes(h)),x=((v==null?void 0:v.lessons)||[]).find(A=>Ga(A)===h),w=typeof x=="object"&&x||((C=v==null?void 0:v.lessonMeta)==null?void 0:C[h])||((L=u==null?void 0:u.lessonRecords)==null?void 0:L[h])||{},N=(p==null?void 0:p[h])||{},E=String(w.title||w.name||N.title||h.split("/").at(-1));return{...N,...w,id:h,title:E,kind:w.kind||N.kind||"Lesson",difficulty:w.difficulty||N.difficulty||"",points:w.points??N.points??null,language:w.language||N.language||(u==null?void 0:u.language)||"text",challenge:w.challenge||w.summary||N.challenge||"",starter:w.starter||N.starter||"",console:N.console||(w.markdownSource?w.language==="python"?"Run Python to see your output. Checks use published examples only.":"Preview-only workspace. Use the production Playground for functional language runners and verified checks.":""),ready:!!(p!=null&&p[h])||typeof w.markdownSource=="string"&&w.starter!==void 0,isPublished:typeof w.markdownSource=="string"&&w.starter!==void 0}}function ta(u,h,p=Mf){var v;return((v=ea(u,h,p))==null?void 0:v.title)||""}function $l(u){const h=Array.isArray(u)?{lessons:u}:u||{},p=new Map,v=new Set,x=[],w=(E,C,L,A)=>{const M=String(E);let I=x.find(V=>V.id===M);return I||(I={id:M,title:String(C||"Lessons"),description:String(L||""),number:A,lessons:[]},x.push(I)),I},N=(E,C)=>{const L=Ga(C);!L||v.has(L)||(v.add(L),E.lessons.push(L),p.set(L,typeof C=="string"?{id:L}:{...C}))};return Array.isArray(h.units)?h.units.forEach((E,C)=>{const L=w(E.id||`unit-${C+1}`,Es(E),E.description||E.summary,sc(E,C+1));(E.lessons||[]).forEach(A=>N(L,A))}):Array.isArray(h.lessons)&&h.lessons.forEach((E,C)=>{if(!E||!Ga(E))return;const L=E.unit||null,A=Ga(E).indexOf("/"),M=L!=null?A>=0?Ga(E).slice(0,A):`unit-${L}`:E.competency?`topic-${String(E.competency).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`:"lessons",I=E.unitName||E.competency||"Lessons",V=w(M,I,"",L??x.length+1);N(V,E)}),{units:x,lessonRecords:Object.fromEntries(p),lessons:x.flatMap(rs)}}const kh=$l(ug),ns=[{id:"computer-science-1",units:kh.units,lessonRecords:kh.lessonRecords,language:"python",publishedContent:!0,slug:"computer-science-1",label:"Computer Science I",short:"Python",glyph:"py",color:"#6366F1",description:"Build your problem-solving toolkit with Python.",lessons:kh.lessons,topics:["Variables","Strings","Formatting","Conditions","Lists"]},{id:"game-programming",units:Ns["game-programming"],slug:"game-programming",label:"Game Programming & Design",short:"C# · Unity",glyph:"C#",color:"#C052EB",description:"Make ideas playable with Unity and C#.",lessons:Ns["game-programming"].flatMap(u=>u.lessons),topics:["C# Basics","Rigidbody","Colliders"]},{id:"mobile-app-dev",units:Ns["mobile-app-dev"],slug:"mobile-app-web",label:"Mobile App & Web",short:"React · JavaScript",glyph:"js",color:"#27BBD2",description:"Create useful websites and mobile applications.",lessons:Ns["mobile-app-dev"].flatMap(u=>u.lessons),topics:["HTML","CSS","JavaScript","React"]},{id:"capstone",units:Ns.capstone,slug:"capstone",label:"Capstone",short:"Build for someone",glyph:"++",color:"#FF2D55",description:"Research a problem, prototype, and test a solution.",lessons:Ns.capstone.flatMap(u=>u.lessons),topics:["Research","Prototype","Pitch"]},{id:"uil",units:Ns.uil,slug:"uil",label:"UIL Computer Science",short:"Java",glyph:"jv",color:"#FF9F0A",description:"Trace Java, explain your reasoning, and practice.",lessons:Ns.uil.flatMap(u=>u.lessons),topics:["Java","Arrays","Written","Programming"]},{id:"tsi-math",units:Ns["tsi-math"],slug:"tsi-math",label:"TSI Math Advisory",short:"Math · Open access",glyph:"ma",color:"#30C85A",description:"Quantitative reasoning and algebra practice.",lessons:Ns["tsi-math"].flatMap(u=>u.lessons),topics:["Percents","Ratios","Equations"]}],yi=u=>ns.find(h=>h.id===u),Gh=u=>{var h;return(h=yi(u))==null?void 0:h.label};function Cd(u){return typeof u=="string"&&/^#[0-9a-fA-F]{6}$/.test(u)}function dg(u,h={}){const p=h&&typeof h=="object"?h[u.id]:null;return Cd(p)?p.toUpperCase():u.color}function hg(u){if(!Cd(u))return"#101012";const h=[1,3,5].map(v=>parseInt(u.slice(v,v+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return h[0]*.2126+h[1]*.7152+h[2]*.0722>.179?"#101012":"#FFFFFF"}function pg(u,h,p=document.documentElement){for(const v of h){const x=`--student-course-color-${v.id}`,w=u&&typeof u=="object"?u[v.id]:null,N=`--student-course-ink-${v.id}`;Cd(w)?(p.style.setProperty(x,w),p.style.setProperty(N,hg(w))):(p.style.removeProperty(x),p.style.removeProperty(N))}}function ln(u,h){const[p,v]=Ae.useState(()=>{try{const x=localStorage.getItem(u);return x===null?h:JSON.parse(x)}catch{return h}});return Ae.useEffect(()=>{try{localStorage.setItem(u,JSON.stringify(p))}catch{}},[u,p]),[p,v]}function fg(u,h=[]){return Array.isArray(h)&&h.includes(u)}function Of(u,h=[]){const p=ec(u),v=p.filter(x=>fg(x,h)).length;return{completed:v,total:p.length,percent:p.length?Math.round(v/p.length*100):0}}function mg(u,h){const p=Array.isArray(u)?u:[];return p.includes(h)?p.filter(v=>v!==h):[...p,h]}const gg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function yg(u=new Date){const h=Object.fromEntries(gg.formatToParts(u).filter(p=>p.type!=="literal").map(p=>[p.type,p.value]));return`${h.year}-${h.month}-${h.day}`}function vd(u){return u?new Date(u+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}):""}function tc(u,h=[]){return h.find(p=>p.id===u)||null}function vg(u,h=[]){return h.find(p=>p.id===u)||null}function _d(u,{assignments:h=[],grades:p=[],completedLessons:v=[],today:x=yg()}={}){const w=vg(u,h),N=tc(u,p),E=u.startsWith("lesson:")&&v.includes(u.slice(7)),C=!!N||E;return w!=null&&w.dueDate?{state:C?"completed":w.dueDate<x?"overdue":"assigned",dueDate:w.dueDate,grade:N,completed:C}:{state:C?"completed":"unassigned",dueDate:null,grade:N,completed:C}}function Oh(u=[]){const h=u.reduce((v,x)=>v+x.earned,0),p=u.reduce((v,x)=>v+x.possible,0);return{earned:h,possible:p,percent:p?Math.round(100*h/p):null,count:u.length}}function xg(u=[]){const h=new Map;return u.forEach(p=>{const v=yd(new Date(p.gradedAt+"T12:00:00Z"));h.has(v)||h.set(v,[]),h.get(v).push(p)}),[...h.entries()].map(([p,v])=>({week:p,...Oh(v)})).sort((p,v)=>v.week.localeCompare(p.week))}function bg(u=[],h=[]){return[...new Set([...Array.isArray(u)?u:[],...h.filter(p=>p.id.startsWith("lesson:")).map(p=>p.id.slice(7))])]}const wg="/playground/data",kg=new Set(["game-programming","mobile-app-dev","uil","tsi-math"]);function Sg(u){if(typeof u!="string"||!u||u.startsWith("/")||u.includes("\\")||u.includes("?")||u.includes("#")||u.split("/").some(h=>h===".."||h==="."||h===""))throw new Error("Invalid curriculum resource path");return u}function oc(u,h){if(!kg.has(u))throw new Error("Unknown published course");return wg+"/"+u+"/"+Sg(h)}async function Sr(u,h,p,v,x=!1){const w=await p(oc(u,h),{signal:v,cache:"no-store"});if(!w.ok)throw new Error("Published "+u+" resource unavailable: "+h);return x?w.json():w.text()}function Yh(u,h,p,v,x){var w,N,E;return{...u,markdownSource:h,starter:p??"",language:v,markdownUrl:oc(x,u.markdown),kind:"Lesson",challenge:((w=u.exercise)==null?void 0:w.prompt)||u.summary||u.objective||u.title||"",points:u.points??null,cases:((N=u.exercise)==null?void 0:N.examples)||u.cases||[],hints:((E=u.exercise)==null?void 0:E.hints)||u.hints||[],mode:u.exercise?"function":"script"}}async function Cg(u,h){const p="game-programming",v=await Sr(p,"course.json",u,h,!0),x=await Promise.all(v.units.map(async w=>({id:w.id,number:w.number,title:w.title,description:w.summary||"",lessons:await Promise.all(w.lessons.map(async N=>{var L,A,M,I,V;const E=await Sr(p,N.markdown,u,h);return{...Yh(N,E,(L=N.exercise)==null?void 0:L.starter,"csharp",p),starter:((A=N.exercise)==null?void 0:A.starter)||"",kind:"Lesson",exerciseId:(M=N.exercise)==null?void 0:M.id,challenge:((I=N.exercise)==null?void 0:I.prompt)||N.title,unityTask:N.unityTask||[],markdownSource:E+((V=N.unityTask)!=null&&V.length?`

### Unity activity
`+N.unityTask.map(ne=>"- "+ne).join(`
`):"")}}))})));return{...$l({units:x}),source:"published",projects:[]}}async function _g(u,h){const p="mobile-app-dev",v=await Sr(p,"course.json",u,h,!0),x=await Promise.all(v.lessons.map(async N=>{const[E,C]=await Promise.all([Sr(p,N.markdown,u,h),Sr(p,N.starterFile,u,h)]);return Yh(N,E,C,N.language==="react"?"jsx":N.language,p)})),w=await Promise.all((v.projects||[]).map(async N=>{const E=await Sr(p,N.starterFile,u,h),C=await Promise.all(N.steps.map(async L=>({...L,markdownSource:await Sr(p,L.markdown,u,h),markdownUrl:oc(p,L.markdown)})));return{id:N.id,title:N.title,summary:N.summary,skills:N.skills||[],starter:E,language:"html",steps:C}}));return{...$l({lessons:x}),projects:w,source:"published"}}async function Tg(u,h){const v=await Sr("uil","course.json",u,h,!0),x=await Sr("uil",v.written.markdown,u,h),w=await Sr("uil",v.written.practice,u,h,!0),E=(Array.isArray(w)?w:w.questions||[]).map((M,I)=>{const V=M.choices||M.options||[];return"### Practice question "+(I+1)+`

`+String(M.prompt||M.question||"")+`

`+V.map((ne,$)=>String.fromCharCode(65+$)+". "+ne).join(`

`)}).join(`

`),C={id:"written",title:"Written practice",language:"text",markdown:v.written.markdown,markdownSource:x+`

## Published practice questions

`+E,markdownUrl:oc("uil",v.written.markdown),starter:"",kind:"Practice",challenge:"Review Java reasoning and the published written-practice questions."},L=await Promise.all(v.lessons.map(async M=>{const[I,V]=await Promise.all([Sr("uil",M.markdown,u,h),Sr("uil",M.starterFile,u,h)]);return Yh(M,I,V,"java","uil")}));return{...$l({units:[{id:"written-preparation",number:1,title:"Written preparation",lessons:[C]},{id:"programming-practice",number:2,title:"Java programming practice",lessons:L}]}),source:"published",projects:[]}}async function Ng(u,h){const p="tsi-math",[v,x,w,N]=await Promise.all([Sr(p,"content/20-day-program.json",u,h,!0),Sr(p,"content/strand-lessons-v1.json",u,h,!0),Sr(p,"content/diagnostic-24-mc-v2.json",u,h,!0),Sr(p,"content/math-locator-profiles.json",u,h,!0)]),E=(v.days||[]).map(L=>({id:L.id,title:L.title,challenge:"Day "+L.day+" · "+L.strand+" · 30 minutes",kind:"Planned session",language:"text",starter:"",ready:!1,status:"planned"})),C=await Promise.all((x.lessons||[]).map(async L=>({id:L.id,title:L.title,kind:"Draft practice",status:"draft",language:"text",markdown:L.student_lesson,markdownUrl:oc(p,L.student_lesson),markdownSource:await Sr(p,L.student_lesson,u,h),starter:"",challenge:"Currently authored draft lesson · "+L.minutes+" minutes"})));return{...$l({units:[{id:"study-schedule",number:1,title:"20-day study schedule (in development)",lessons:E},{id:"authored-strands",number:2,title:"Available draft strand lessons",lessons:C}]}),source:"published-draft",projects:[],tsiDraft:!0,diagnosticItems:w.items||[],locatorProfiles:N.profiles||[]}}async function jg(u,{fetchImpl:h=fetch,signal:p}={}){if(u==="game-programming")return Cg(h,p);if(u==="mobile-app-dev")return _g(h,p);if(u==="uil")return Tg(h,p);if(u==="tsi-math")return Ng(h,p);throw new Error("Unknown published course")}const uo=(...u)=>u.filter(Boolean).join(" "),Eg=["temperature-alert","count-matches","sum-positives","score-line","attendance-percent","longest-win-streak","confidence-total","second-largest-distinct","target-pairs","competition-ranks"],Lg="/playground/preview/",Pg="/"+Lg.replace(/^\/+|\/+$/g,""),fo=u=>`${Pg}/#${u}`,Bl=()=>fo("/"),Dp=()=>fo("/teacher"),Ag=()=>fo("/admin"),Rg=()=>fo("/journals"),Ig=()=>fo("/grades"),Wl=(u=null)=>fo(u?`/challenges/course/${encodeURIComponent(u)}`:"/challenges"),Df=u=>fo(`/challenges/${encodeURIComponent(u)}`);function zf(u,h,p=null){const v=typeof u=="string"?yi(u):u;if(!v||!h)return Bl();const x=`/playgrounds/${encodeURIComponent(v.slug)}/projects/${encodeURIComponent(h)}`;return fo(p?`${x}/steps/${encodeURIComponent(p)}`:x)}function Td(u,h){const p=typeof u=="string"?yi(u):u;if(!p)return Bl();const v=`/playgrounds/${encodeURIComponent(p.slug)}`;return fo(h?`${v}/lessons/${encodeURIComponent(h)}`:v)}function ud(u,h=ns){const w=((typeof window<"u"&&window.location.hash.slice(1)||"/").replace(/\/+$/,"")||"/").slice("".length)||"/";if(w==="/")return{page:"home"};if(w==="/teacher")return{page:"teacher"};if(w==="/admin")return{page:"admin"};if(w==="/journals")return{page:"journals"};if(w==="/grades")return{page:"grades"};if(w==="/challenges")return{page:"challenges",filterCourse:null};if(w.startsWith("/challenges/")){const A=w.split("/").filter(Boolean);try{if(A.length===3&&A[1]==="course"){const M=decodeURIComponent(A[2]);return yi(M)?{page:"challenges",filterCourse:M}:{page:"not-found"}}if(A.length===2){const M=decodeURIComponent(A[1]);return Eg.includes(M)?{page:"challenge",challengeId:M}:{page:"not-found"}}}catch{return{page:"not-found"}}return{page:"not-found"}}const N=w.split("/").filter(Boolean);if(N[0]!=="playgrounds"||![2,4,6].includes(N.length))return{page:"not-found"};let E,C;try{E=decodeURIComponent(N[1]),C=N.length===4?decodeURIComponent(N[3]):void 0}catch{return{page:"not-found"}}const L=h.find(A=>A.slug===E);if(!L)return{page:"not-found"};if(N[2]==="projects"&&(N.length===4||N.length===6))try{const A=decodeURIComponent(N[3]),M=(L.projects||[]).find(V=>V.id===A),I=N.length===6?decodeURIComponent(N[5]):null;return!M||I&&(N[4]!=="steps"||!M.steps.some(V=>V.id===I))?{page:"not-found"}:{page:"course",courseId:L.id,lessonId:null,projectId:A,stepId:I}}catch{return{page:"not-found"}}return N.length!==2&&(N.length!==4||N[2]!=="lessons")?{page:"not-found"}:C&&!cg(L,C)?{page:"not-found"}:{page:"course",courseId:L.id,lessonId:C??null}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ff=(...u)=>u.filter((h,p,v)=>!!h&&h.trim()!==""&&v.indexOf(h)===p).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Og={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=Ae.forwardRef(({color:u="currentColor",size:h=24,strokeWidth:p=2,absoluteStrokeWidth:v,className:x="",children:w,iconNode:N,...E},C)=>Ae.createElement("svg",{ref:C,...Og,width:h,height:h,stroke:u,strokeWidth:v?Number(p)*24/Number(h):p,className:Ff("lucide",x),...E},[...N.map(([L,A])=>Ae.createElement(L,A)),...Array.isArray(w)?w:[w]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=(u,h)=>{const p=Ae.forwardRef(({className:v,...x},w)=>Ae.createElement(Dg,{ref:w,iconNode:h,className:Ff(`lucide-${Mg(u)}`,v),...x}));return p.displayName=`${u}`,p};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=St("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=St("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=St("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=St("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=St("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=St("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=St("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=St("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=St("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=St("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=St("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=St("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=St("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=St("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=St("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=St("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=St("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=St("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=St("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=St("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=St("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=St("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=St("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=St("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=St("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=St("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=St("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=St("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=St("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=St("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=St("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=St("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=St("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=St("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=St("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=St("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=St("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=St("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=St("SquareTerminal",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=St("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=St("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=St("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=St("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function is({children:u,tone:h=""}){return c.jsx("span",{className:uo("chip",h&&`chip-${h}`),children:u})}function ay({theme:u,setTheme:h}){const p=u==="dark";return c.jsx("button",{className:"icon-button",title:p?"Switch to light mode":"Switch to dark mode","aria-label":"Toggle light and dark mode",onClick:()=>h(p?"light":"dark"),children:p?c.jsx(sy,{size:17}):c.jsx(ey,{size:17})})}function ly({sidebarOpen:u,onToggleSidebar:h,onHome:p,theme:v,setTheme:x}){return c.jsx("header",{className:"topbar",children:c.jsxs("div",{className:"topbar-inner",children:[c.jsx("button",{className:"icon-button nav-toggle",onClick:h,"aria-label":"Toggle navigation",children:u?c.jsx(ty,{size:18}):c.jsx(Jg,{size:18})}),c.jsxs("button",{className:"brand",onClick:p,children:[c.jsx("span",{className:"brand-logo",children:"{ }"}),c.jsx("strong",{children:"Ms. Whitby's Playground"}),c.jsx("span",{className:"brand-compact",children:"React Lab"})]}),c.jsx("div",{className:"topbar-spacer"}),c.jsx(is,{children:"LOCAL DESIGN LAB"}),c.jsx(ay,{theme:v,setTheme:x}),c.jsx("span",{className:"user-circle",children:"W"})]})})}const uy=[["home","Home",Qg],["challenges","Challenge Bank",jd],["journals","Weekly journals",Xh],["grades","Grades",Vg],["teacher","Teacher dashboard",Qh],["admin","Admin dashboard",tp]];function cy({open:u,page:h,courseId:p,lessonId:v,setPage:x,openCourse:w,onOpenProject:N,availableCourses:E=ns,completedLessons:C=[],assignments:L=[],grades:A=[]}){var I;const M=h==="course"?E.find(V=>V.id===p):null;return c.jsxs("aside",{className:uo("main-sidebar",!u&&"collapsed"),"aria-label":"Playground navigation",children:[c.jsx("div",{className:"side-title",children:"EXPLORE"}),uy.map(([V,ne,$])=>c.jsxs("button",{className:uo("nav-item",(h===V||V==="challenges"&&h==="challenge")&&"active"),onClick:()=>x(V),title:ne,children:[c.jsx($,{size:19}),c.jsx("span",{children:ne})]},V)),M&&c.jsxs("section",{className:"course-outline","data-course":M.id,"aria-label":`${M.label} outline`,children:[c.jsx("div",{className:"side-rule"}),c.jsx("div",{className:"side-title",children:"COURSE CONTENT"}),c.jsxs("button",{className:uo("outline-overview",!v&&"active"),onClick:()=>w(M.id),children:[c.jsx(ac,{size:16}),c.jsx("span",{children:"Course overview"})]}),M.units.map((V,ne)=>c.jsxs("details",{className:"outline-unit",open:rs(V).includes(v)||!v&&ne===0?!0:void 0,children:[c.jsxs("summary",{children:[c.jsx("span",{className:"outline-unit-number",children:String(sc(V,ne+1)).padStart(2,"0")}),c.jsx("span",{className:"outline-unit-title",title:Es(V),children:Es(V)}),c.jsx(Hf,{size:14})]}),c.jsx("div",{className:"outline-lesson-list",children:rs(V).map($=>{const se=ta(M,$),D=_d("lesson:"+$,{assignments:L,grades:A,completedLessons:C}),F=D.completed?"completed":D.dueDate?D.state:"",z=F==="completed"?"Completed":F==="overdue"?"Overdue":F==="assigned"?"Assigned":"";return c.jsxs("button",{onClick:()=>w(M.id,$),className:uo("outline-lesson",$===v&&"selected"),"aria-label":z?`${se}, ${z.toLowerCase()}`:se,title:z?`${se} · ${z}`:se,"aria-current":$===v?"page":void 0,children:[c.jsx("span",{className:"outline-lesson-name",children:se}),z&&c.jsx("span",{className:`assignment-dot ${F}`,"aria-hidden":"true"})]},$)})})]},`${M.id}-${V.id}-${v||"overview"}`)),!!((I=M.projects)!=null&&I.length)&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"side-section-title",children:"PROJECTS"}),M.projects.map(V=>c.jsx("button",{type:"button",className:"outline-lesson",title:V.title,onClick:()=>N==null?void 0:N(M.id,V.id),children:c.jsx("span",{className:"outline-lesson-name",children:V.title})},V.id))]})]}),c.jsx("div",{className:"side-rule"}),c.jsx("div",{className:"side-title",children:"PLAYGROUNDS"}),E.map(V=>c.jsxs("button",{"data-course":V.id,className:uo("nav-item course-nav-item",h==="course"&&p===V.id&&"active"),onClick:()=>w(V.id),title:V.label,children:[c.jsx("span",{className:"nav-dot"}),c.jsx("span",{children:V.label})]},V.id)),c.jsxs("div",{className:"sidebar-bottom",children:[c.jsx(Ug,{size:17}),c.jsx("span",{children:"Your learning spaces"})]})]})}function dy(){return c.jsxs("footer",{className:"site-footer",children:[c.jsx("span",{children:"Ms. Whitby's Playground · React design lab"}),c.jsx("span",{children:"Fictional data · No authentication or backend · No real code execution"})]})}const hy={"computer-science-1":Nd,"game-programming":Yg,"mobile-app-dev":ry,uil:Uf,"tsi-math":Wf,capstone:ny};function py({course:u,onOpen:h,completedLessons:p=[]}){const{completed:v,total:x}=Of(u,p),w=hy[u.id]||Nd;function N(E){E.button!==0||E.metaKey||E.ctrlKey||E.shiftKey||E.altKey||(E.preventDefault(),h())}return c.jsxs("a",{className:"course-card","data-course":u.id,href:Td(u),onClick:N,children:[c.jsxs("div",{className:"course-card-heading",children:[c.jsx("span",{className:"course-glyph","aria-hidden":"true",children:c.jsx(w,{size:24,strokeWidth:2.2})}),c.jsxs("div",{children:[c.jsx("h2",{children:u.label}),c.jsx("p",{children:u.short})]})]}),c.jsx("p",{className:"course-description",children:u.description}),c.jsxs("div",{className:"course-card-footer",children:[c.jsxs("div",{className:"course-meta",children:[c.jsxs("span",{children:[x," ",x===1?"lesson":"lessons"]}),c.jsxs("span",{children:[v," completed"]})]}),c.jsx("progress",{className:"course-progress-track",value:v,max:Math.max(x,1),"aria-label":`${u.label}: ${v} of ${x} lessons completed`})]})]})}function fy({onClick:u}){return c.jsxs("button",{className:"wide-shortcut",onClick:u,children:[c.jsx(Qh,{size:18}),c.jsxs("span",{children:[c.jsx("strong",{children:"Teacher Dashboard preview"}),c.jsx("small",{children:"Section roster, expanded student assignments, account matching, and weekly points"})]}),c.jsx(na,{size:18})]})}function my({openCourse:u,openTeacher:h,openChallenges:p,availableCourses:v=ns,completedLessons:x=[]}){return c.jsxs("div",{className:"main-content",children:[c.jsxs("div",{className:"welcome",children:[c.jsx("div",{className:"eyebrow",children:"Your learning spaces"}),c.jsx("h1",{children:"Your playgrounds"}),c.jsx("p",{children:"Choose a course to continue learning. Complete lessons to fill your progress bars."})]}),c.jsx("div",{className:"course-card-grid",children:v.map(w=>c.jsx(py,{course:w,completedLessons:x,onOpen:()=>u(w.id)},w.id))}),c.jsxs("button",{type:"button",className:"wide-shortcut challenge-bank-shortcut",onClick:p,children:[c.jsx(jd,{size:23}),c.jsxs("span",{children:[c.jsx("strong",{children:"Shared Challenge Bank"}),c.jsx("small",{children:"Practice one problem in Python, Java, JavaScript, or C#."})]}),c.jsx("span",{"aria-hidden":"true",children:"→"})]}),c.jsx(fy,{onClick:h})]})}function gy({course:u,openCourse:h,openProject:p,openChallenges:v,completedLessons:x=[],assignments:w=[],grades:N=[],courseColors:E={},onSetCourseColor:C,onResetCourseColor:L}){var ne;const A=Of(u,x),[M,I]=Ae.useState(!1),V=dg(u,E);return c.jsxs("div",{className:"course-landing",children:[c.jsxs("header",{className:"course-hero surface-card",children:[c.jsx("button",{type:"button",className:"icon-button course-color-settings",onClick:()=>I($=>!$),"aria-label":M?"Close course color settings":`Change ${u.label} color`,title:M?"Close settings":"Course color","aria-expanded":M,"aria-controls":"course-color-controls",children:M?c.jsx(Ed,{size:17}):c.jsx(ep,{size:17})}),c.jsx("div",{className:"eyebrow",children:"Course overview"}),c.jsx("h1",{children:u.label}),c.jsx("p",{children:u.description}),c.jsxs("div",{className:"course-hero-stats",children:[c.jsxs("span",{children:[c.jsx(Zg,{size:16})," ",u.units.length," units"]}),c.jsxs("span",{children:[c.jsx(ac,{size:16})," ",ec(u).length," lessons"]})]}),c.jsxs("button",{className:"btn primary",disabled:!ec(u).length,onClick:()=>h(u.id,ec(u)[0]),children:["Start learning ",c.jsx(na,{size:16})]}),M&&c.jsxs("section",{id:"course-color-controls",className:"course-color-controls","aria-label":"Choose a course color",children:[c.jsxs("div",{className:"course-color-control-copy",children:[c.jsx("strong",{children:"Course color"}),c.jsx("p",{children:"Make this course your own. The color updates throughout your Playground."})]}),c.jsxs("label",{className:"course-color-picker",children:[c.jsx("input",{type:"color",value:V,onChange:$=>C==null?void 0:C(u.id,$.target.value),"aria-label":`Choose a color for ${u.label}`}),c.jsx("span",{children:"Choose color"})]}),c.jsx("button",{type:"button",className:"btn",onClick:()=>L==null?void 0:L(u.id),children:"Reset to default"}),c.jsx("button",{type:"button",className:"btn",onClick:()=>I(!1),children:"Done"})]})]}),u.publishedContent&&c.jsx("p",{className:"course-published-note",children:"Real published lessons are shown here. Practice in this preview does not change your grades."}),u.contentLoadingError&&c.jsxs("p",{className:"course-published-note",role:"alert",children:["Published course materials could not be loaded: ",u.contentLoadingError,". Sample lessons are not substituted."]}),!u.publishedContent&&!u.contentLoadingError&&c.jsx("p",{className:"course-published-note",children:"Course materials are not yet published here. This is a design preview, not a course to assign."}),u.tsiDraft&&c.jsx("p",{className:"course-published-note",children:"The 20-day TSI schedule is an outline; four strand lessons are drafts. Unwritten sessions are not available for practice."}),c.jsxs("p",{className:"course-landing-progress",children:[A.completed," of ",A.total," lessons ",u.publishedContent?"marked complete in preview":"completed"," · ",A.percent,"%"]}),c.jsx("div",{className:"course-landing-heading",children:c.jsxs("div",{children:[c.jsx("h2",{children:"Units & lessons"}),c.jsx("p",{children:"Choose a unit or jump directly into a lesson."})]})}),c.jsx("div",{className:"unit-card-grid",children:u.units.map(($,se)=>c.jsxs("section",{className:"unit-card surface-card",children:[c.jsxs("header",{className:"unit-card-header",children:[c.jsxs("span",{className:"unit-badge",children:["UNIT ",String(sc($,se+1)).padStart(2,"0")]}),c.jsx("h3",{title:Es($),children:Es($)}),$.description&&c.jsx("p",{children:$.description})]}),c.jsx("div",{className:"unit-lessons",children:rs($).map((D,F)=>c.jsxs("a",{className:"unit-lesson-link",href:Td(u,D),onClick:z=>{z.button!==0||z.metaKey||z.ctrlKey||z.shiftKey||z.altKey||(z.preventDefault(),h(u.id,D))},children:[c.jsx("span",{className:"unit-lesson-index",children:F+1}),c.jsxs("span",{className:"unit-lesson-label",children:[c.jsx("strong",{title:ta(u,D),children:ta(u,D)}),(()=>{var q,Y;const z=_d("lesson:"+D,{assignments:w,grades:N,completedLessons:x});return z.dueDate||z.completed?c.jsxs("span",{className:"unit-assignment-meta",children:[c.jsxs("span",{className:`assignment-status ${z.state}`,children:[c.jsx("span",{className:`assignment-dot ${z.state}`,"aria-hidden":"true"}),z.completed?"Completed":z.state==="overdue"?"Overdue":"Assigned"]}),z.dueDate&&c.jsxs("small",{children:["Due ",vd(z.dueDate)]}),z.grade&&c.jsxs("small",{children:[z.grade.earned," / ",z.grade.possible," pts"]})]}):c.jsxs("small",{children:[(q=ea(u,D))==null?void 0:q.kind,(Y=ea(u,D))!=null&&Y.difficulty?` · ${ea(u,D).difficulty}`:""]})})()]}),c.jsx(Dh,{size:16})]},D))})]},$.id))}),!!((ne=u.projects)!=null&&ne.length)&&c.jsxs("section",{className:"course-projects surface-card",children:[c.jsx("div",{className:"eyebrow",children:"Published guided projects"}),c.jsx("h2",{children:"Projects"}),c.jsx("div",{className:"unit-card-grid",children:u.projects.map($=>c.jsxs("a",{className:"unit-lesson-link",href:zf(u,$.id),onClick:se=>{se.button!==0||se.metaKey||se.ctrlKey||se.shiftKey||se.altKey||(se.preventDefault(),p(u.id,$.id))},children:[c.jsxs("span",{className:"unit-lesson-label",children:[c.jsx("strong",{children:$.title}),c.jsxs("small",{children:[$.steps.length," steps · ",$.summary]})]}),c.jsx(Dh,{size:16})]},$.id))})]}),c.jsxs("section",{className:"course-challenges-shelf surface-card",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Shared practice library"}),c.jsx("h2",{children:"Related programming challenges"}),c.jsx("p",{children:"Browse reusable problems suited to this course. Review each challenge's prerequisites before recommending it to students."})]}),c.jsxs("a",{href:Wl(u.id),className:"btn",onClick:$=>{$.button!==0||$.metaKey||$.ctrlKey||$.shiftKey||$.altKey||($.preventDefault(),v(u.id))},children:[c.jsx(jd,{size:16})," Browse challenges"]})]})]})}function rc({axis:u,onDrag:h}){const p=Ae.useRef(!1),v=u==="columns",x=()=>p.current=!1;return c.jsx("div",{className:uo("splitter",v?"column-split":"row-split"),role:"separator","aria-label":v?"Resize instructions and editor":"Resize editor and console","aria-orientation":v?"vertical":"horizontal",tabIndex:0,onPointerDown:w=>{w.preventDefault(),w.currentTarget.setPointerCapture(w.pointerId),p.current=!0},onPointerMove:w=>{p.current&&w.buttons===1&&h(w)},onPointerUp:x,onLostPointerCapture:x,children:c.jsx("span",{})})}function np({eyebrow:u,children:h,actions:p}){return c.jsxs("div",{className:"page-title-row",children:[c.jsxs("div",{children:[u&&c.jsx("div",{className:"eyebrow",children:u}),c.jsx("h1",{children:h})]}),p&&c.jsx("div",{className:"page-actions",children:p})]})}function cd({task:u,unit:h,unitNumber:p,isTsi:v,isCompleted:x=!1,assignment:w=null,grade:N=null,onToggleCompleted:E}){const C=(w==null?void 0:w.id)||(N==null?void 0:N.id)||"",L=_d(C,{assignments:w?[w]:[],grades:N?[N]:[],completedLessons:x?[C.replace(/^lesson:/,"")]:[]});return c.jsxs("div",{className:"lesson-header",children:[c.jsxs("div",{className:"eyebrow",children:["Unit ",sc(h,p)," · ",Es(h)," ",c.jsx("span",{className:"dot",children:"·"})," ",u.kind]}),c.jsx(np,{actions:c.jsxs("div",{className:"lesson-heading-actions",children:[!v&&(u==null?void 0:u.points)!=null&&c.jsx("span",{className:"points-tag",children:N?`${N.earned} / ${N.possible} pts`:`${u.points} points available`}),N?c.jsxs("span",{className:"btn completion-toggle completed",children:[c.jsx(zh,{size:16})," Completed"]}):c.jsxs("button",{type:"button",className:`btn completion-toggle ${x?"completed":""}`,"aria-pressed":x,onClick:E,children:[x?c.jsx(zh,{size:16}):c.jsx(qg,{size:16}),x?"Completed":"Mark complete"]})]}),children:u.title}),c.jsx("p",{children:u.challenge}),(w==null?void 0:w.dueDate)&&c.jsxs("div",{className:"lesson-assignment-info",children:[c.jsx("span",{className:`assignment-status ${L.state}`,children:L.state==="completed"?"Completed":L.state==="overdue"?"Overdue":"Assigned"}),c.jsxs("span",{children:["Due ",vd(w.dueDate)]})]})]})}const rp={"tsi-ratios":{prompt:"A recipe uses 3 cups of water for every 5 cups of rice. How many cups of water are needed for 15 cups of rice?",options:["5 cups","9 cups","12 cups","25 cups"],correct:1,explanation:"15 is three times 5, so multiply the 3 cups of water by 3 to get 9."},"tsi-percents":{prompt:"A $60 backpack is discounted by 25%. What is the sale price?",options:["$15","$35","$45","$75"],correct:2,explanation:"25% of $60 is $15; subtract $15 from $60 to get $45."},"tsi-equations":{prompt:"Solve for x: 4x + 6 = 22.",options:["2","4","6","7"],correct:1,explanation:"Subtract 6 from both sides to get 4x = 16, then divide by 4: x = 4."},"tsi-slope":{prompt:"A table gives points (1, 3), (2, 5), and (3, 7). What is the slope?",options:["1","2","3","4"],correct:1,explanation:"As x goes up by 1, y goes up by 2, so slope = 2/1 = 2."}},yy=`# Find an Inefficiency

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
`,vy=`# Interpret User Feedback

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
`,xy=`# Interview for Evidence

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
`,by=`# Make a Minimum Viable Prototype

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
`,wy=`# Player Decisions

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
`,ky=`# Variables for a Game

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
`,Sy=`# Decision Making

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
`,Cy=`# Format a Summary

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
`,_y=`# Lists and Indexing

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
`,Ty=`# For Loops

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
`,Ny=`# Strings and Variables

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
`,jy=`<!-- Learning example adapted from mswhitby/computer-science-1/docs/units/content/02-values-and-variables/lessons/01-meet-variables.md; displayed in independent React preview. -->
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
`,Ey=`# Your First React Card

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
`,Ly=`# Interactive React State

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
`,Py=`# Solve Linear Equations

## Learn

Solve an equation by doing the same operation to both sides. For 3x + 5 = 20, first subtract 5, then divide by 3.

### Example

Explain the quantities and operations before calculating.

## Practice

Solve 4x + 6 = 22. Explain each step.

Choose an answer in the practice card.
`,Ay=`# Percents and Discounts

## Learn

A percent compares a quantity with 100. To find 20% of 50, multiply 0.20 × 50 = 10.

### Example

Explain the quantities and operations before calculating.

## Practice

A backpack costs $60 and is discounted by 25%. What is the sale price?

Choose an answer in the practice card.
`,Ry=`# Ratios and Rates

## Learn

A ratio compares quantities. A **unit rate** tells us how many of one item correspond to one unit of another.

Example: If 3 markers are shared by 5 students, the number of markers per student is:

**3 ÷ 5 = 0.6 markers per student.**

## Practice

A group of 15 students needs markers at the same rate. How many markers are needed? Explain how you know.
`,Iy=`# Slope and Rate of Change

## Learn

Slope is the change in y divided by the change in x. A constant rate makes a linear relationship.

### Example

Explain the quantities and operations before calculating.

## Practice

The table gives (1, 3), (2, 5), and (3, 7). What is the slope?

Choose an answer in the practice card.
`,My=`# Trace a Java Array

## Learn

An array holds multiple values. Java arrays start at index **0**.

\`\`\`java
int[] scores = {2, 4, 6};
System.out.println(scores[0]); // 2
\`\`\`

## Practice

Trace the loop in the starter code. Record every index and the updated element value in a table. Then write the final array.
`,Oy=`# Trace Java Loops

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
`,Dy=`# Method Calls and Scope

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
`,zy=`# String Indexing

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
`,Fy=`# Collision Events

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
`,Wy=`<!-- Learning example adapted from mswhitby/game-programming/samples/PlayerController.md (sample-lessons); displayed in independent React preview. -->
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
`,Hy=`# Score and Feedback

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
`,By=`# Events and Forms

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
`,Uy=`# Responsive Layouts

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
`;function ip(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Va=ip();function qf(u){Va=u}var nc={exec:()=>null};function Ut(u,h=""){let p=typeof u=="string"?u:u.source;const v={replace:(x,w)=>{let N=typeof w=="string"?w:w.source;return N=N.replace(Wr.caret,"$1"),p=p.replace(x,N),v},getRegex:()=>new RegExp(p,h)};return v}var Wr={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:u=>new RegExp(`^( {0,3}${u})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}#`),htmlBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}<(?:[a-z].*>|!--)`,"i")},qy=/^(?:[ \t]*(?:\n|$))+/,Ky=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,$y=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,lc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Gy=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,sp=/(?:[*+-]|\d{1,9}[.)])/,Kf=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,$f=Ut(Kf).replace(/bull/g,sp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Yy=Ut(Kf).replace(/bull/g,sp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),op=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Vy=/^[^\n]+/,ap=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Xy=Ut(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ap).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Qy=Ut(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,sp).getRegex(),Ld="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",lp=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Zy=Ut("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",lp).replace("tag",Ld).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Gf=Ut(op).replace("hr",lc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ld).getRegex(),Jy=Ut(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Gf).getRegex(),up={blockquote:Jy,code:Ky,def:Xy,fences:$y,heading:Gy,hr:lc,html:Zy,lheading:$f,list:Qy,newline:qy,paragraph:Gf,table:nc,text:Vy},Fp=Ut("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",lc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ld).getRegex(),ev={...up,lheading:Yy,table:Fp,paragraph:Ut(op).replace("hr",lc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Fp).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ld).getRegex()},tv={...up,html:Ut(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",lp).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:nc,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ut(op).replace("hr",lc).replace("heading",` *#{1,6} *[^
]`).replace("lheading",$f).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},nv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,rv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Yf=/^( {2,}|\\)\n(?!\s*$)/,iv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Pd=/[\p{P}\p{S}]/u,cp=/[\s\p{P}\p{S}]/u,Vf=/[^\s\p{P}\p{S}]/u,sv=Ut(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,cp).getRegex(),Xf=/(?!~)[\p{P}\p{S}]/u,ov=/(?!~)[\s\p{P}\p{S}]/u,av=/(?:[^\s\p{P}\p{S}]|~)/u,lv=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Qf=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,uv=Ut(Qf,"u").replace(/punct/g,Pd).getRegex(),cv=Ut(Qf,"u").replace(/punct/g,Xf).getRegex(),Zf="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",dv=Ut(Zf,"gu").replace(/notPunctSpace/g,Vf).replace(/punctSpace/g,cp).replace(/punct/g,Pd).getRegex(),hv=Ut(Zf,"gu").replace(/notPunctSpace/g,av).replace(/punctSpace/g,ov).replace(/punct/g,Xf).getRegex(),pv=Ut("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Vf).replace(/punctSpace/g,cp).replace(/punct/g,Pd).getRegex(),fv=Ut(/\\(punct)/,"gu").replace(/punct/g,Pd).getRegex(),mv=Ut(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),gv=Ut(lp).replace("(?:-->|$)","-->").getRegex(),yv=Ut("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",gv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),bd=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,vv=Ut(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",bd).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Jf=Ut(/^!?\[(label)\]\[(ref)\]/).replace("label",bd).replace("ref",ap).getRegex(),em=Ut(/^!?\[(ref)\](?:\[\])?/).replace("ref",ap).getRegex(),xv=Ut("reflink|nolink(?!\\()","g").replace("reflink",Jf).replace("nolink",em).getRegex(),dp={_backpedal:nc,anyPunctuation:fv,autolink:mv,blockSkip:lv,br:Yf,code:rv,del:nc,emStrongLDelim:uv,emStrongRDelimAst:dv,emStrongRDelimUnd:pv,escape:nv,link:vv,nolink:em,punctuation:sv,reflink:Jf,reflinkSearch:xv,tag:yv,text:iv,url:nc},bv={...dp,link:Ut(/^!?\[(label)\]\((.*?)\)/).replace("label",bd).getRegex(),reflink:Ut(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",bd).getRegex()},Fh={...dp,emStrongRDelimAst:hv,emStrongLDelim:cv,url:Ut(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},wv={...Fh,br:Ut(Yf).replace("{2,}","*").getRegex(),text:Ut(Fh.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},dd={normal:up,gfm:ev,pedantic:tv},$u={normal:dp,gfm:Fh,breaks:wv,pedantic:bv},kv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Wp=u=>kv[u];function js(u,h){if(h){if(Wr.escapeTest.test(u))return u.replace(Wr.escapeReplace,Wp)}else if(Wr.escapeTestNoEncode.test(u))return u.replace(Wr.escapeReplaceNoEncode,Wp);return u}function Hp(u){try{u=encodeURI(u).replace(Wr.percentDecode,"%")}catch{return null}return u}function Bp(u,h){var w;const p=u.replace(Wr.findPipe,(N,E,C)=>{let L=!1,A=E;for(;--A>=0&&C[A]==="\\";)L=!L;return L?"|":" |"}),v=p.split(Wr.splitPipe);let x=0;if(v[0].trim()||v.shift(),v.length>0&&!((w=v.at(-1))!=null&&w.trim())&&v.pop(),h)if(v.length>h)v.splice(h);else for(;v.length<h;)v.push("");for(;x<v.length;x++)v[x]=v[x].trim().replace(Wr.slashPipe,"|");return v}function Gu(u,h,p){const v=u.length;if(v===0)return"";let x=0;for(;x<v&&u.charAt(v-x-1)===h;)x++;return u.slice(0,v-x)}function Sv(u,h){if(u.indexOf(h[1])===-1)return-1;let p=0;for(let v=0;v<u.length;v++)if(u[v]==="\\")v++;else if(u[v]===h[0])p++;else if(u[v]===h[1]&&(p--,p<0))return v;return p>0?-2:-1}function Up(u,h,p,v,x){const w=h.href,N=h.title||null,E=u[1].replace(x.other.outputLinkReplace,"$1");v.state.inLink=!0;const C={type:u[0].charAt(0)==="!"?"image":"link",raw:p,href:w,title:N,text:E,tokens:v.inlineTokens(E)};return v.state.inLink=!1,C}function Cv(u,h,p){const v=u.match(p.other.indentCodeCompensation);if(v===null)return h;const x=v[1];return h.split(`
`).map(w=>{const N=w.match(p.other.beginningSpace);if(N===null)return w;const[E]=N;return E.length>=x.length?w.slice(x.length):w}).join(`
`)}var wd=class{constructor(u){sn(this,"options");sn(this,"rules");sn(this,"lexer");this.options=u||Va}space(u){const h=this.rules.block.newline.exec(u);if(h&&h[0].length>0)return{type:"space",raw:h[0]}}code(u){const h=this.rules.block.code.exec(u);if(h){const p=h[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:h[0],codeBlockStyle:"indented",text:this.options.pedantic?p:Gu(p,`
`)}}}fences(u){const h=this.rules.block.fences.exec(u);if(h){const p=h[0],v=Cv(p,h[3]||"",this.rules);return{type:"code",raw:p,lang:h[2]?h[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):h[2],text:v}}}heading(u){const h=this.rules.block.heading.exec(u);if(h){let p=h[2].trim();if(this.rules.other.endingHash.test(p)){const v=Gu(p,"#");(this.options.pedantic||!v||this.rules.other.endingSpaceChar.test(v))&&(p=v.trim())}return{type:"heading",raw:h[0],depth:h[1].length,text:p,tokens:this.lexer.inline(p)}}}hr(u){const h=this.rules.block.hr.exec(u);if(h)return{type:"hr",raw:Gu(h[0],`
`)}}blockquote(u){const h=this.rules.block.blockquote.exec(u);if(h){let p=Gu(h[0],`
`).split(`
`),v="",x="";const w=[];for(;p.length>0;){let N=!1;const E=[];let C;for(C=0;C<p.length;C++)if(this.rules.other.blockquoteStart.test(p[C]))E.push(p[C]),N=!0;else if(!N)E.push(p[C]);else break;p=p.slice(C);const L=E.join(`
`),A=L.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");v=v?`${v}
${L}`:L,x=x?`${x}
${A}`:A;const M=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(A,w,!0),this.lexer.state.top=M,p.length===0)break;const I=w.at(-1);if((I==null?void 0:I.type)==="code")break;if((I==null?void 0:I.type)==="blockquote"){const V=I,ne=V.raw+`
`+p.join(`
`),$=this.blockquote(ne);w[w.length-1]=$,v=v.substring(0,v.length-V.raw.length)+$.raw,x=x.substring(0,x.length-V.text.length)+$.text;break}else if((I==null?void 0:I.type)==="list"){const V=I,ne=V.raw+`
`+p.join(`
`),$=this.list(ne);w[w.length-1]=$,v=v.substring(0,v.length-I.raw.length)+$.raw,x=x.substring(0,x.length-V.raw.length)+$.raw,p=ne.substring(w.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:v,tokens:w,text:x}}}list(u){let h=this.rules.block.list.exec(u);if(h){let p=h[1].trim();const v=p.length>1,x={type:"list",raw:"",ordered:v,start:v?+p.slice(0,-1):"",loose:!1,items:[]};p=v?`\\d{1,9}\\${p.slice(-1)}`:`\\${p}`,this.options.pedantic&&(p=v?p:"[*+-]");const w=this.rules.other.listItemRegex(p);let N=!1;for(;u;){let C=!1,L="",A="";if(!(h=w.exec(u))||this.rules.block.hr.test(u))break;L=h[0],u=u.substring(L.length);let M=h[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,D=>" ".repeat(3*D.length)),I=u.split(`
`,1)[0],V=!M.trim(),ne=0;if(this.options.pedantic?(ne=2,A=M.trimStart()):V?ne=h[1].length+1:(ne=h[2].search(this.rules.other.nonSpaceChar),ne=ne>4?1:ne,A=M.slice(ne),ne+=h[1].length),V&&this.rules.other.blankLine.test(I)&&(L+=I+`
`,u=u.substring(I.length+1),C=!0),!C){const D=this.rules.other.nextBulletRegex(ne),F=this.rules.other.hrRegex(ne),z=this.rules.other.fencesBeginRegex(ne),q=this.rules.other.headingBeginRegex(ne),Y=this.rules.other.htmlBeginRegex(ne);for(;u;){const ge=u.split(`
`,1)[0];let le;if(I=ge,this.options.pedantic?(I=I.replace(this.rules.other.listReplaceNesting,"  "),le=I):le=I.replace(this.rules.other.tabCharGlobal,"    "),z.test(I)||q.test(I)||Y.test(I)||D.test(I)||F.test(I))break;if(le.search(this.rules.other.nonSpaceChar)>=ne||!I.trim())A+=`
`+le.slice(ne);else{if(V||M.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||z.test(M)||q.test(M)||F.test(M))break;A+=`
`+I}!V&&!I.trim()&&(V=!0),L+=ge+`
`,u=u.substring(ge.length+1),M=le.slice(ne)}}x.loose||(N?x.loose=!0:this.rules.other.doubleBlankLine.test(L)&&(N=!0));let $=null,se;this.options.gfm&&($=this.rules.other.listIsTask.exec(A),$&&(se=$[0]!=="[ ] ",A=A.replace(this.rules.other.listReplaceTask,""))),x.items.push({type:"list_item",raw:L,task:!!$,checked:se,loose:!1,text:A,tokens:[]}),x.raw+=L}const E=x.items.at(-1);if(E)E.raw=E.raw.trimEnd(),E.text=E.text.trimEnd();else return;x.raw=x.raw.trimEnd();for(let C=0;C<x.items.length;C++)if(this.lexer.state.top=!1,x.items[C].tokens=this.lexer.blockTokens(x.items[C].text,[]),!x.loose){const L=x.items[C].tokens.filter(M=>M.type==="space"),A=L.length>0&&L.some(M=>this.rules.other.anyLine.test(M.raw));x.loose=A}if(x.loose)for(let C=0;C<x.items.length;C++)x.items[C].loose=!0;return x}}html(u){const h=this.rules.block.html.exec(u);if(h)return{type:"html",block:!0,raw:h[0],pre:h[1]==="pre"||h[1]==="script"||h[1]==="style",text:h[0]}}def(u){const h=this.rules.block.def.exec(u);if(h){const p=h[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),v=h[2]?h[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",x=h[3]?h[3].substring(1,h[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):h[3];return{type:"def",tag:p,raw:h[0],href:v,title:x}}}table(u){var N;const h=this.rules.block.table.exec(u);if(!h||!this.rules.other.tableDelimiter.test(h[2]))return;const p=Bp(h[1]),v=h[2].replace(this.rules.other.tableAlignChars,"").split("|"),x=(N=h[3])!=null&&N.trim()?h[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],w={type:"table",raw:h[0],header:[],align:[],rows:[]};if(p.length===v.length){for(const E of v)this.rules.other.tableAlignRight.test(E)?w.align.push("right"):this.rules.other.tableAlignCenter.test(E)?w.align.push("center"):this.rules.other.tableAlignLeft.test(E)?w.align.push("left"):w.align.push(null);for(let E=0;E<p.length;E++)w.header.push({text:p[E],tokens:this.lexer.inline(p[E]),header:!0,align:w.align[E]});for(const E of x)w.rows.push(Bp(E,w.header.length).map((C,L)=>({text:C,tokens:this.lexer.inline(C),header:!1,align:w.align[L]})));return w}}lheading(u){const h=this.rules.block.lheading.exec(u);if(h)return{type:"heading",raw:h[0],depth:h[2].charAt(0)==="="?1:2,text:h[1],tokens:this.lexer.inline(h[1])}}paragraph(u){const h=this.rules.block.paragraph.exec(u);if(h){const p=h[1].charAt(h[1].length-1)===`
`?h[1].slice(0,-1):h[1];return{type:"paragraph",raw:h[0],text:p,tokens:this.lexer.inline(p)}}}text(u){const h=this.rules.block.text.exec(u);if(h)return{type:"text",raw:h[0],text:h[0],tokens:this.lexer.inline(h[0])}}escape(u){const h=this.rules.inline.escape.exec(u);if(h)return{type:"escape",raw:h[0],text:h[1]}}tag(u){const h=this.rules.inline.tag.exec(u);if(h)return!this.lexer.state.inLink&&this.rules.other.startATag.test(h[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(h[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(h[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(h[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:h[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:h[0]}}link(u){const h=this.rules.inline.link.exec(u);if(h){const p=h[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(p)){if(!this.rules.other.endAngleBracket.test(p))return;const w=Gu(p.slice(0,-1),"\\");if((p.length-w.length)%2===0)return}else{const w=Sv(h[2],"()");if(w===-2)return;if(w>-1){const E=(h[0].indexOf("!")===0?5:4)+h[1].length+w;h[2]=h[2].substring(0,w),h[0]=h[0].substring(0,E).trim(),h[3]=""}}let v=h[2],x="";if(this.options.pedantic){const w=this.rules.other.pedanticHrefTitle.exec(v);w&&(v=w[1],x=w[3])}else x=h[3]?h[3].slice(1,-1):"";return v=v.trim(),this.rules.other.startAngleBracket.test(v)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(p)?v=v.slice(1):v=v.slice(1,-1)),Up(h,{href:v&&v.replace(this.rules.inline.anyPunctuation,"$1"),title:x&&x.replace(this.rules.inline.anyPunctuation,"$1")},h[0],this.lexer,this.rules)}}reflink(u,h){let p;if((p=this.rules.inline.reflink.exec(u))||(p=this.rules.inline.nolink.exec(u))){const v=(p[2]||p[1]).replace(this.rules.other.multipleSpaceGlobal," "),x=h[v.toLowerCase()];if(!x){const w=p[0].charAt(0);return{type:"text",raw:w,text:w}}return Up(p,x,p[0],this.lexer,this.rules)}}emStrong(u,h,p=""){let v=this.rules.inline.emStrongLDelim.exec(u);if(!v||v[3]&&p.match(this.rules.other.unicodeAlphaNumeric))return;if(!(v[1]||v[2]||"")||!p||this.rules.inline.punctuation.exec(p)){const w=[...v[0]].length-1;let N,E,C=w,L=0;const A=v[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(A.lastIndex=0,h=h.slice(-1*u.length+w);(v=A.exec(h))!=null;){if(N=v[1]||v[2]||v[3]||v[4]||v[5]||v[6],!N)continue;if(E=[...N].length,v[3]||v[4]){C+=E;continue}else if((v[5]||v[6])&&w%3&&!((w+E)%3)){L+=E;continue}if(C-=E,C>0)continue;E=Math.min(E,E+C+L);const M=[...v[0]][0].length,I=u.slice(0,w+v.index+M+E);if(Math.min(w,E)%2){const ne=I.slice(1,-1);return{type:"em",raw:I,text:ne,tokens:this.lexer.inlineTokens(ne)}}const V=I.slice(2,-2);return{type:"strong",raw:I,text:V,tokens:this.lexer.inlineTokens(V)}}}}codespan(u){const h=this.rules.inline.code.exec(u);if(h){let p=h[2].replace(this.rules.other.newLineCharGlobal," ");const v=this.rules.other.nonSpaceChar.test(p),x=this.rules.other.startingSpaceChar.test(p)&&this.rules.other.endingSpaceChar.test(p);return v&&x&&(p=p.substring(1,p.length-1)),{type:"codespan",raw:h[0],text:p}}}br(u){const h=this.rules.inline.br.exec(u);if(h)return{type:"br",raw:h[0]}}del(u){const h=this.rules.inline.del.exec(u);if(h)return{type:"del",raw:h[0],text:h[2],tokens:this.lexer.inlineTokens(h[2])}}autolink(u){const h=this.rules.inline.autolink.exec(u);if(h){let p,v;return h[2]==="@"?(p=h[1],v="mailto:"+p):(p=h[1],v=p),{type:"link",raw:h[0],text:p,href:v,tokens:[{type:"text",raw:p,text:p}]}}}url(u){var p;let h;if(h=this.rules.inline.url.exec(u)){let v,x;if(h[2]==="@")v=h[0],x="mailto:"+v;else{let w;do w=h[0],h[0]=((p=this.rules.inline._backpedal.exec(h[0]))==null?void 0:p[0])??"";while(w!==h[0]);v=h[0],h[1]==="www."?x="http://"+h[0]:x=h[0]}return{type:"link",raw:h[0],text:v,href:x,tokens:[{type:"text",raw:v,text:v}]}}}inlineText(u){const h=this.rules.inline.text.exec(u);if(h){const p=this.lexer.state.inRawBlock;return{type:"text",raw:h[0],text:h[0],escaped:p}}}},co=class Wh{constructor(h){sn(this,"tokens");sn(this,"options");sn(this,"state");sn(this,"tokenizer");sn(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=h||Va,this.options.tokenizer=this.options.tokenizer||new wd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const p={other:Wr,block:dd.normal,inline:$u.normal};this.options.pedantic?(p.block=dd.pedantic,p.inline=$u.pedantic):this.options.gfm&&(p.block=dd.gfm,this.options.breaks?p.inline=$u.breaks:p.inline=$u.gfm),this.tokenizer.rules=p}static get rules(){return{block:dd,inline:$u}}static lex(h,p){return new Wh(p).lex(h)}static lexInline(h,p){return new Wh(p).inlineTokens(h)}lex(h){h=h.replace(Wr.carriageReturn,`
`),this.blockTokens(h,this.tokens);for(let p=0;p<this.inlineQueue.length;p++){const v=this.inlineQueue[p];this.inlineTokens(v.src,v.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(h,p=[],v=!1){var x,w,N;for(this.options.pedantic&&(h=h.replace(Wr.tabCharGlobal,"    ").replace(Wr.spaceLine,""));h;){let E;if((w=(x=this.options.extensions)==null?void 0:x.block)!=null&&w.some(L=>(E=L.call({lexer:this},h,p))?(h=h.substring(E.raw.length),p.push(E),!0):!1))continue;if(E=this.tokenizer.space(h)){h=h.substring(E.raw.length);const L=p.at(-1);E.raw.length===1&&L!==void 0?L.raw+=`
`:p.push(E);continue}if(E=this.tokenizer.code(h)){h=h.substring(E.raw.length);const L=p.at(-1);(L==null?void 0:L.type)==="paragraph"||(L==null?void 0:L.type)==="text"?(L.raw+=`
`+E.raw,L.text+=`
`+E.text,this.inlineQueue.at(-1).src=L.text):p.push(E);continue}if(E=this.tokenizer.fences(h)){h=h.substring(E.raw.length),p.push(E);continue}if(E=this.tokenizer.heading(h)){h=h.substring(E.raw.length),p.push(E);continue}if(E=this.tokenizer.hr(h)){h=h.substring(E.raw.length),p.push(E);continue}if(E=this.tokenizer.blockquote(h)){h=h.substring(E.raw.length),p.push(E);continue}if(E=this.tokenizer.list(h)){h=h.substring(E.raw.length),p.push(E);continue}if(E=this.tokenizer.html(h)){h=h.substring(E.raw.length),p.push(E);continue}if(E=this.tokenizer.def(h)){h=h.substring(E.raw.length);const L=p.at(-1);(L==null?void 0:L.type)==="paragraph"||(L==null?void 0:L.type)==="text"?(L.raw+=`
`+E.raw,L.text+=`
`+E.raw,this.inlineQueue.at(-1).src=L.text):this.tokens.links[E.tag]||(this.tokens.links[E.tag]={href:E.href,title:E.title});continue}if(E=this.tokenizer.table(h)){h=h.substring(E.raw.length),p.push(E);continue}if(E=this.tokenizer.lheading(h)){h=h.substring(E.raw.length),p.push(E);continue}let C=h;if((N=this.options.extensions)!=null&&N.startBlock){let L=1/0;const A=h.slice(1);let M;this.options.extensions.startBlock.forEach(I=>{M=I.call({lexer:this},A),typeof M=="number"&&M>=0&&(L=Math.min(L,M))}),L<1/0&&L>=0&&(C=h.substring(0,L+1))}if(this.state.top&&(E=this.tokenizer.paragraph(C))){const L=p.at(-1);v&&(L==null?void 0:L.type)==="paragraph"?(L.raw+=`
`+E.raw,L.text+=`
`+E.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=L.text):p.push(E),v=C.length!==h.length,h=h.substring(E.raw.length);continue}if(E=this.tokenizer.text(h)){h=h.substring(E.raw.length);const L=p.at(-1);(L==null?void 0:L.type)==="text"?(L.raw+=`
`+E.raw,L.text+=`
`+E.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=L.text):p.push(E);continue}if(h){const L="Infinite loop on byte: "+h.charCodeAt(0);if(this.options.silent){console.error(L);break}else throw new Error(L)}}return this.state.top=!0,p}inline(h,p=[]){return this.inlineQueue.push({src:h,tokens:p}),p}inlineTokens(h,p=[]){var E,C,L;let v=h,x=null;if(this.tokens.links){const A=Object.keys(this.tokens.links);if(A.length>0)for(;(x=this.tokenizer.rules.inline.reflinkSearch.exec(v))!=null;)A.includes(x[0].slice(x[0].lastIndexOf("[")+1,-1))&&(v=v.slice(0,x.index)+"["+"a".repeat(x[0].length-2)+"]"+v.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(x=this.tokenizer.rules.inline.anyPunctuation.exec(v))!=null;)v=v.slice(0,x.index)+"++"+v.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(x=this.tokenizer.rules.inline.blockSkip.exec(v))!=null;)v=v.slice(0,x.index)+"["+"a".repeat(x[0].length-2)+"]"+v.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let w=!1,N="";for(;h;){w||(N=""),w=!1;let A;if((C=(E=this.options.extensions)==null?void 0:E.inline)!=null&&C.some(I=>(A=I.call({lexer:this},h,p))?(h=h.substring(A.raw.length),p.push(A),!0):!1))continue;if(A=this.tokenizer.escape(h)){h=h.substring(A.raw.length),p.push(A);continue}if(A=this.tokenizer.tag(h)){h=h.substring(A.raw.length),p.push(A);continue}if(A=this.tokenizer.link(h)){h=h.substring(A.raw.length),p.push(A);continue}if(A=this.tokenizer.reflink(h,this.tokens.links)){h=h.substring(A.raw.length);const I=p.at(-1);A.type==="text"&&(I==null?void 0:I.type)==="text"?(I.raw+=A.raw,I.text+=A.text):p.push(A);continue}if(A=this.tokenizer.emStrong(h,v,N)){h=h.substring(A.raw.length),p.push(A);continue}if(A=this.tokenizer.codespan(h)){h=h.substring(A.raw.length),p.push(A);continue}if(A=this.tokenizer.br(h)){h=h.substring(A.raw.length),p.push(A);continue}if(A=this.tokenizer.del(h)){h=h.substring(A.raw.length),p.push(A);continue}if(A=this.tokenizer.autolink(h)){h=h.substring(A.raw.length),p.push(A);continue}if(!this.state.inLink&&(A=this.tokenizer.url(h))){h=h.substring(A.raw.length),p.push(A);continue}let M=h;if((L=this.options.extensions)!=null&&L.startInline){let I=1/0;const V=h.slice(1);let ne;this.options.extensions.startInline.forEach($=>{ne=$.call({lexer:this},V),typeof ne=="number"&&ne>=0&&(I=Math.min(I,ne))}),I<1/0&&I>=0&&(M=h.substring(0,I+1))}if(A=this.tokenizer.inlineText(M)){h=h.substring(A.raw.length),A.raw.slice(-1)!=="_"&&(N=A.raw.slice(-1)),w=!0;const I=p.at(-1);(I==null?void 0:I.type)==="text"?(I.raw+=A.raw,I.text+=A.text):p.push(A);continue}if(h){const I="Infinite loop on byte: "+h.charCodeAt(0);if(this.options.silent){console.error(I);break}else throw new Error(I)}}return p}},kd=class{constructor(u){sn(this,"options");sn(this,"parser");this.options=u||Va}space(u){return""}code({text:u,lang:h,escaped:p}){var w;const v=(w=(h||"").match(Wr.notSpaceStart))==null?void 0:w[0],x=u.replace(Wr.endingNewline,"")+`
`;return v?'<pre><code class="language-'+js(v)+'">'+(p?x:js(x,!0))+`</code></pre>
`:"<pre><code>"+(p?x:js(x,!0))+`</code></pre>
`}blockquote({tokens:u}){return`<blockquote>
${this.parser.parse(u)}</blockquote>
`}html({text:u}){return u}heading({tokens:u,depth:h}){return`<h${h}>${this.parser.parseInline(u)}</h${h}>
`}hr(u){return`<hr>
`}list(u){const h=u.ordered,p=u.start;let v="";for(let N=0;N<u.items.length;N++){const E=u.items[N];v+=this.listitem(E)}const x=h?"ol":"ul",w=h&&p!==1?' start="'+p+'"':"";return"<"+x+w+`>
`+v+"</"+x+`>
`}listitem(u){var p;let h="";if(u.task){const v=this.checkbox({checked:!!u.checked});u.loose?((p=u.tokens[0])==null?void 0:p.type)==="paragraph"?(u.tokens[0].text=v+" "+u.tokens[0].text,u.tokens[0].tokens&&u.tokens[0].tokens.length>0&&u.tokens[0].tokens[0].type==="text"&&(u.tokens[0].tokens[0].text=v+" "+js(u.tokens[0].tokens[0].text),u.tokens[0].tokens[0].escaped=!0)):u.tokens.unshift({type:"text",raw:v+" ",text:v+" ",escaped:!0}):h+=v+" "}return h+=this.parser.parse(u.tokens,!!u.loose),`<li>${h}</li>
`}checkbox({checked:u}){return"<input "+(u?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:u}){return`<p>${this.parser.parseInline(u)}</p>
`}table(u){let h="",p="";for(let x=0;x<u.header.length;x++)p+=this.tablecell(u.header[x]);h+=this.tablerow({text:p});let v="";for(let x=0;x<u.rows.length;x++){const w=u.rows[x];p="";for(let N=0;N<w.length;N++)p+=this.tablecell(w[N]);v+=this.tablerow({text:p})}return v&&(v=`<tbody>${v}</tbody>`),`<table>
<thead>
`+h+`</thead>
`+v+`</table>
`}tablerow({text:u}){return`<tr>
${u}</tr>
`}tablecell(u){const h=this.parser.parseInline(u.tokens),p=u.header?"th":"td";return(u.align?`<${p} align="${u.align}">`:`<${p}>`)+h+`</${p}>
`}strong({tokens:u}){return`<strong>${this.parser.parseInline(u)}</strong>`}em({tokens:u}){return`<em>${this.parser.parseInline(u)}</em>`}codespan({text:u}){return`<code>${js(u,!0)}</code>`}br(u){return"<br>"}del({tokens:u}){return`<del>${this.parser.parseInline(u)}</del>`}link({href:u,title:h,tokens:p}){const v=this.parser.parseInline(p),x=Hp(u);if(x===null)return v;u=x;let w='<a href="'+u+'"';return h&&(w+=' title="'+js(h)+'"'),w+=">"+v+"</a>",w}image({href:u,title:h,text:p,tokens:v}){v&&(p=this.parser.parseInline(v,this.parser.textRenderer));const x=Hp(u);if(x===null)return js(p);u=x;let w=`<img src="${u}" alt="${p}"`;return h&&(w+=` title="${js(h)}"`),w+=">",w}text(u){return"tokens"in u&&u.tokens?this.parser.parseInline(u.tokens):"escaped"in u&&u.escaped?u.text:js(u.text)}},hp=class{strong({text:u}){return u}em({text:u}){return u}codespan({text:u}){return u}del({text:u}){return u}html({text:u}){return u}text({text:u}){return u}link({text:u}){return""+u}image({text:u}){return""+u}br(){return""}},ho=class Hh{constructor(h){sn(this,"options");sn(this,"renderer");sn(this,"textRenderer");this.options=h||Va,this.options.renderer=this.options.renderer||new kd,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new hp}static parse(h,p){return new Hh(p).parse(h)}static parseInline(h,p){return new Hh(p).parseInline(h)}parse(h,p=!0){var x,w;let v="";for(let N=0;N<h.length;N++){const E=h[N];if((w=(x=this.options.extensions)==null?void 0:x.renderers)!=null&&w[E.type]){const L=E,A=this.options.extensions.renderers[L.type].call({parser:this},L);if(A!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(L.type)){v+=A||"";continue}}const C=E;switch(C.type){case"space":{v+=this.renderer.space(C);continue}case"hr":{v+=this.renderer.hr(C);continue}case"heading":{v+=this.renderer.heading(C);continue}case"code":{v+=this.renderer.code(C);continue}case"table":{v+=this.renderer.table(C);continue}case"blockquote":{v+=this.renderer.blockquote(C);continue}case"list":{v+=this.renderer.list(C);continue}case"html":{v+=this.renderer.html(C);continue}case"paragraph":{v+=this.renderer.paragraph(C);continue}case"text":{let L=C,A=this.renderer.text(L);for(;N+1<h.length&&h[N+1].type==="text";)L=h[++N],A+=`
`+this.renderer.text(L);p?v+=this.renderer.paragraph({type:"paragraph",raw:A,text:A,tokens:[{type:"text",raw:A,text:A,escaped:!0}]}):v+=A;continue}default:{const L='Token with "'+C.type+'" type was not found.';if(this.options.silent)return console.error(L),"";throw new Error(L)}}}return v}parseInline(h,p=this.renderer){var x,w;let v="";for(let N=0;N<h.length;N++){const E=h[N];if((w=(x=this.options.extensions)==null?void 0:x.renderers)!=null&&w[E.type]){const L=this.options.extensions.renderers[E.type].call({parser:this},E);if(L!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(E.type)){v+=L||"";continue}}const C=E;switch(C.type){case"escape":{v+=p.text(C);break}case"html":{v+=p.html(C);break}case"link":{v+=p.link(C);break}case"image":{v+=p.image(C);break}case"strong":{v+=p.strong(C);break}case"em":{v+=p.em(C);break}case"codespan":{v+=p.codespan(C);break}case"br":{v+=p.br(C);break}case"del":{v+=p.del(C);break}case"text":{v+=p.text(C);break}default:{const L='Token with "'+C.type+'" type was not found.';if(this.options.silent)return console.error(L),"";throw new Error(L)}}}return v}},Ih,pd=(Ih=class{constructor(u){sn(this,"options");sn(this,"block");this.options=u||Va}preprocess(u){return u}postprocess(u){return u}processAllTokens(u){return u}provideLexer(){return this.block?co.lex:co.lexInline}provideParser(){return this.block?ho.parse:ho.parseInline}},sn(Ih,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Ih),_v=class{constructor(...u){sn(this,"defaults",ip());sn(this,"options",this.setOptions);sn(this,"parse",this.parseMarkdown(!0));sn(this,"parseInline",this.parseMarkdown(!1));sn(this,"Parser",ho);sn(this,"Renderer",kd);sn(this,"TextRenderer",hp);sn(this,"Lexer",co);sn(this,"Tokenizer",wd);sn(this,"Hooks",pd);this.use(...u)}walkTokens(u,h){var v,x;let p=[];for(const w of u)switch(p=p.concat(h.call(this,w)),w.type){case"table":{const N=w;for(const E of N.header)p=p.concat(this.walkTokens(E.tokens,h));for(const E of N.rows)for(const C of E)p=p.concat(this.walkTokens(C.tokens,h));break}case"list":{const N=w;p=p.concat(this.walkTokens(N.items,h));break}default:{const N=w;(x=(v=this.defaults.extensions)==null?void 0:v.childTokens)!=null&&x[N.type]?this.defaults.extensions.childTokens[N.type].forEach(E=>{const C=N[E].flat(1/0);p=p.concat(this.walkTokens(C,h))}):N.tokens&&(p=p.concat(this.walkTokens(N.tokens,h)))}}return p}use(...u){const h=this.defaults.extensions||{renderers:{},childTokens:{}};return u.forEach(p=>{const v={...p};if(v.async=this.defaults.async||v.async||!1,p.extensions&&(p.extensions.forEach(x=>{if(!x.name)throw new Error("extension name required");if("renderer"in x){const w=h.renderers[x.name];w?h.renderers[x.name]=function(...N){let E=x.renderer.apply(this,N);return E===!1&&(E=w.apply(this,N)),E}:h.renderers[x.name]=x.renderer}if("tokenizer"in x){if(!x.level||x.level!=="block"&&x.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const w=h[x.level];w?w.unshift(x.tokenizer):h[x.level]=[x.tokenizer],x.start&&(x.level==="block"?h.startBlock?h.startBlock.push(x.start):h.startBlock=[x.start]:x.level==="inline"&&(h.startInline?h.startInline.push(x.start):h.startInline=[x.start]))}"childTokens"in x&&x.childTokens&&(h.childTokens[x.name]=x.childTokens)}),v.extensions=h),p.renderer){const x=this.defaults.renderer||new kd(this.defaults);for(const w in p.renderer){if(!(w in x))throw new Error(`renderer '${w}' does not exist`);if(["options","parser"].includes(w))continue;const N=w,E=p.renderer[N],C=x[N];x[N]=(...L)=>{let A=E.apply(x,L);return A===!1&&(A=C.apply(x,L)),A||""}}v.renderer=x}if(p.tokenizer){const x=this.defaults.tokenizer||new wd(this.defaults);for(const w in p.tokenizer){if(!(w in x))throw new Error(`tokenizer '${w}' does not exist`);if(["options","rules","lexer"].includes(w))continue;const N=w,E=p.tokenizer[N],C=x[N];x[N]=(...L)=>{let A=E.apply(x,L);return A===!1&&(A=C.apply(x,L)),A}}v.tokenizer=x}if(p.hooks){const x=this.defaults.hooks||new pd;for(const w in p.hooks){if(!(w in x))throw new Error(`hook '${w}' does not exist`);if(["options","block"].includes(w))continue;const N=w,E=p.hooks[N],C=x[N];pd.passThroughHooks.has(w)?x[N]=L=>{if(this.defaults.async)return Promise.resolve(E.call(x,L)).then(M=>C.call(x,M));const A=E.call(x,L);return C.call(x,A)}:x[N]=(...L)=>{let A=E.apply(x,L);return A===!1&&(A=C.apply(x,L)),A}}v.hooks=x}if(p.walkTokens){const x=this.defaults.walkTokens,w=p.walkTokens;v.walkTokens=function(N){let E=[];return E.push(w.call(this,N)),x&&(E=E.concat(x.call(this,N))),E}}this.defaults={...this.defaults,...v}}),this}setOptions(u){return this.defaults={...this.defaults,...u},this}lexer(u,h){return co.lex(u,h??this.defaults)}parser(u,h){return ho.parse(u,h??this.defaults)}parseMarkdown(u){return(p,v)=>{const x={...v},w={...this.defaults,...x},N=this.onError(!!w.silent,!!w.async);if(this.defaults.async===!0&&x.async===!1)return N(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof p>"u"||p===null)return N(new Error("marked(): input parameter is undefined or null"));if(typeof p!="string")return N(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(p)+", string expected"));w.hooks&&(w.hooks.options=w,w.hooks.block=u);const E=w.hooks?w.hooks.provideLexer():u?co.lex:co.lexInline,C=w.hooks?w.hooks.provideParser():u?ho.parse:ho.parseInline;if(w.async)return Promise.resolve(w.hooks?w.hooks.preprocess(p):p).then(L=>E(L,w)).then(L=>w.hooks?w.hooks.processAllTokens(L):L).then(L=>w.walkTokens?Promise.all(this.walkTokens(L,w.walkTokens)).then(()=>L):L).then(L=>C(L,w)).then(L=>w.hooks?w.hooks.postprocess(L):L).catch(N);try{w.hooks&&(p=w.hooks.preprocess(p));let L=E(p,w);w.hooks&&(L=w.hooks.processAllTokens(L)),w.walkTokens&&this.walkTokens(L,w.walkTokens);let A=C(L,w);return w.hooks&&(A=w.hooks.postprocess(A)),A}catch(L){return N(L)}}}onError(u,h){return p=>{if(p.message+=`
Please report this to https://github.com/markedjs/marked.`,u){const v="<p>An error occurred:</p><pre>"+js(p.message+"",!0)+"</pre>";return h?Promise.resolve(v):v}if(h)return Promise.reject(p);throw p}}},Ya=new _v;function Kt(u,h){return Ya.parse(u,h)}Kt.options=Kt.setOptions=function(u){return Ya.setOptions(u),Kt.defaults=Ya.defaults,qf(Kt.defaults),Kt};Kt.getDefaults=ip;Kt.defaults=Va;Kt.use=function(...u){return Ya.use(...u),Kt.defaults=Ya.defaults,qf(Kt.defaults),Kt};Kt.walkTokens=function(u,h){return Ya.walkTokens(u,h)};Kt.parseInline=Ya.parseInline;Kt.Parser=ho;Kt.parser=ho.parse;Kt.Renderer=kd;Kt.TextRenderer=hp;Kt.Lexer=co;Kt.lexer=co.lex;Kt.Tokenizer=wd;Kt.Hooks=pd;Kt.parse=Kt;Kt.options;Kt.setOptions;Kt.use;Kt.walkTokens;Kt.parseInline;ho.parse;co.lex;/*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE */function qp(u,h){(h==null||h>u.length)&&(h=u.length);for(var p=0,v=Array(h);p<h;p++)v[p]=u[p];return v}function Tv(u){if(Array.isArray(u))return u}function Nv(u,h){var p=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(p!=null){var v,x,w,N,E=[],C=!0,L=!1;try{if(w=(p=p.call(u)).next,h!==0)for(;!(C=(v=w.call(p)).done)&&(E.push(v.value),E.length!==h);C=!0);}catch(A){L=!0,x=A}finally{try{if(!C&&p.return!=null&&(N=p.return(),Object(N)!==N))return}finally{if(L)throw x}}return E}}function jv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function Ev(u,h){return Tv(u)||Nv(u,h)||Lv(u,h)||jv()}function Lv(u,h){if(u){if(typeof u=="string")return qp(u,h);var p={}.toString.call(u).slice(8,-1);return p==="Object"&&u.constructor&&(p=u.constructor.name),p==="Map"||p==="Set"?Array.from(u):p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)?qp(u,h):void 0}}const tm=Object.entries,Kp=Object.setPrototypeOf,Pv=Object.isFrozen,nm=Object.getPrototypeOf,rm=Object.getOwnPropertyDescriptor;let sr=Object.freeze,Cr=Object.seal,Hl=Object.create,im=typeof Reflect<"u"&&Reflect,Bh=im.apply,Uh=im.construct;sr||(sr=function(h){return h});Cr||(Cr=function(h){return h});Bh||(Bh=function(h,p){for(var v=arguments.length,x=new Array(v>2?v-2:0),w=2;w<v;w++)x[w-2]=arguments[w];return h.apply(p,x)});Uh||(Uh=function(h){for(var p=arguments.length,v=new Array(p>1?p-1:0),x=1;x<p;x++)v[x-1]=arguments[x];return new h(...v)});const ao=bn(Array.prototype.forEach),Av=bn(Array.prototype.lastIndexOf),$p=bn(Array.prototype.pop),Yu=bn(Array.prototype.push),Rv=bn(Array.prototype.slice),Iv=bn(Array.prototype.splice),ql=Array.isArray,Sh=sm(Set),Ch=bn(Set.prototype.add),Vu=bn(Set.prototype.has),$a=bn(String.prototype.toLowerCase),_h=bn(String.prototype.toString),Gp=bn(String.prototype.match),Xu=bn(String.prototype.replace),Yp=bn(String.prototype.indexOf),Mv=bn(String.prototype.trim),Ov=bn(Number.prototype.toString),Dv=bn(Boolean.prototype.toString),Vp=typeof BigInt>"u"?null:bn(BigInt.prototype.toString),Xp=typeof Symbol>"u"?null:bn(Symbol.prototype.toString),ti=bn(Object.prototype.hasOwnProperty),Qu=bn(Object.prototype.toString),kr=bn(RegExp.prototype.test),lo=sm(TypeError);function bn(u){return function(h){h instanceof RegExp&&(h.lastIndex=0);for(var p=arguments.length,v=new Array(p>1?p-1:0),x=1;x<p;x++)v[x-1]=arguments[x];return Bh(u,h,v)}}function sm(u){return function(){for(var h=arguments.length,p=new Array(h),v=0;v<h;v++)p[v]=arguments[v];return Uh(u,p)}}function zt(u,h){let p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:$a;if(Kp&&Kp(u,null),!ql(h))return u;let v=h.length;for(;v--;){let x=h[v];if(typeof x=="string"){const w=p(x);w!==x&&(Pv(h)||(h[v]=w),x=w)}u[x]=!0}return u}function zv(u){for(let h=0;h<u.length;h++)ti(u,h)||(u[h]=null);return u}function gi(u){const h=Hl(null);for(const v of tm(u)){var p=Ev(v,2);const x=p[0],w=p[1];ti(u,x)&&(ql(w)?h[x]=zv(w):w&&typeof w=="object"&&w.constructor===Object?h[x]=gi(w):h[x]=w)}return h}function Fv(u){switch(typeof u){case"string":return u;case"number":return Ov(u);case"boolean":return Dv(u);case"bigint":return Vp?Vp(u):"0";case"symbol":return Xp?Xp(u):"Symbol()";case"undefined":return Qu(u);case"function":case"object":{if(u===null)return Qu(u);const h=u,p=Oi(h,"toString");if(typeof p=="function"){const v=p(h);return typeof v=="string"?v:Qu(v)}return Qu(u)}default:return Qu(u)}}function Oi(u,h){for(;u!==null;){const v=rm(u,h);if(v){if(v.get)return bn(v.get);if(typeof v.value=="function")return bn(v.value)}u=nm(u)}function p(){return null}return p}function Wv(u,h){for(;u!==null;){const p=rm(u,h);if(p)return p.get?bn(p.get):null;u=nm(u)}return null}function Hv(u){try{return kr(u,""),!0}catch{return!1}}const Qp=sr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Th=sr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Nh=sr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Bv=sr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),jh=sr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Uv=sr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Zp=sr(["#text"]),Jp=sr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Eh=sr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ef=sr(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),hd=sr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),qv=Cr(/{{[\w\W]*|^[\w\W]*}}/g),Kv=Cr(/<%[\w\W]*|^[\w\W]*%>/g),$v=Cr(/\${[\w\W]*/g),Gv=Cr(/^data-[\-\w.\u00B7-\uFFFF]+$/),Yv=Cr(/^aria-[\-\w]+$/),tf=Cr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Vv=Cr(/^(?:\w+script|data):/i),Xv=Cr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Qv=Cr(/^html$/i),Zv=Cr(/^[a-z][.\w]*(-[.\w]+)+$/i),Lh=Cr(/<[/\w!]/g),nf=Cr(/<[/\w]/g),Jv=Cr(/<\/no(script|embed|frames)/i),rf=Cr(/\/>/i),Vn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},ex=sr(zt({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),tx=function(){return typeof window>"u"?null:window},nx=function(h,p){if(typeof h!="object"||typeof h.createPolicy!="function")return null;let v=null;const x="data-tt-policy-suffix";p&&p.hasAttribute(x)&&(v=p.getAttribute(x));const w="dompurify"+(v?"#"+v:"");try{return h.createPolicy(w,{createHTML(N){return N},createScriptURL(N){return N}})}catch{return console.warn("TrustedTypes policy "+w+" could not be created."),null}},sf=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Jo=function(h,p,v,x){return ti(h,p)&&ql(h[p])?zt(x.base?gi(x.base):{},h[p],x.transform):v},Ph=function(h,p,v){const x=ti(h,p)?h[p]:void 0;return x&&typeof x=="object"?gi(x):v()};function om(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:tx();const h=Ce=>om(Ce);if(h.version="3.4.17",h.removed=[],!u||!u.document||u.document.nodeType!==Vn.document||!u.Element)return h.isSupported=!1,h;let p=u.document;const v=p,x=v.currentScript;u.DocumentFragment;const w=u.HTMLTemplateElement,N=u.Node,E=u.Element,C=u.NodeFilter;u.NamedNodeMap===void 0&&(u.NamedNodeMap||u.MozNamedAttrMap),u.HTMLFormElement;const L=u.DOMParser,A=u.trustedTypes,M=E.prototype,I=Oi(M,"cloneNode"),V=Oi(M,"remove"),ne=Oi(M,"removeAttributeNode"),$=Oi(M,"nextSibling"),se=Oi(M,"childNodes"),D=Oi(M,"parentNode"),F=Oi(M,"shadowRoot"),z=Oi(M,"attributes"),q=N&&N.prototype?Oi(N.prototype,"nodeType"):null,Y=N&&N.prototype?Oi(N.prototype,"nodeName"):null,ge=N&&N.prototype?Oi(N.prototype,"ownerDocument"):null,le=function(R){return q?q(R):R.nodeType},ye=function(R){return Y?Y(R):R.nodeName},We=Wv(M,"namespaceURI"),Te=function(R){return We?We(R):R.namespaceURI};if(typeof w=="function"){const Ce=p.createElement("template");Ce.content&&Ce.content.ownerDocument&&(p=Ce.content.ownerDocument)}let ie,ke="",re,ve=!1,T=0;const Q=function(){if(T>0)throw lo('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},U=function(R){Q(),T++;try{return ie.createHTML(R)}finally{T--}},S=function(R){Q(),T++;try{return ie.createScriptURL(R)}finally{T--}},P=function(){return ve||(re=nx(A,x),ve=!0),re},G=p,H=G.implementation,ae=G.createNodeIterator,Oe=G.createDocumentFragment,Je=G.getElementsByTagName,Ve=v.importNode;let Se=sf();h.isSupported=typeof tm=="function"&&typeof D=="function"&&H&&H.createHTMLDocument!==void 0;const Me=qv,He=Kv,Be=$v,tt=Gv,Ge=Yv,qt=Vv,Qt=Xv,$t=Zv;let fn=tf,et=null;const bt=zt({},[...Qp,...Th,...Nh,...jh,...Zp]);let lt=null;const Zt=zt({},[...Jp,...Eh,...ef,...hd]);let Ke=Object.seal(Hl(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),vt=null,oe=null;const _e=Object.seal(Hl(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let me=!0,xt=!0,$e=!1,st=!0,qe=!1,mt=!0,dt=!1,mn=!1,Xn=null,_r=null,Hr=!1,or=!1,vi=!1,gt=!1,Di=!0,nt=!1;const Tr="user-content-";let Gt=!0,At=!1,Rt=null,jn={},un=null;const ar=zt({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let wn=null;const ni=zt({},["audio","video","img","source","image","track"]);let In=null;const lr=zt({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Br="http://www.w3.org/1998/Math/MathML",En="http://www.w3.org/2000/svg",Nr="http://www.w3.org/1999/xhtml";let Qn=Nr,ri=!1,Ur=null;const qr=zt({},[Br,En,Nr],_h),ur=sr(["mi","mo","mn","ms","mtext"]);let Kr=zt({},ur);const Ls=sr(["annotation-xml"]);let kn=zt({},Ls);const mo=zt({},["title","style","font","a","script"]);let Rr=null;const Ir=["application/xhtml+xml","text/html"],jr="text/html";let Ft=null,Er=null;const zi=p.createElement("form"),ii=function(R){return R instanceof RegExp||R instanceof Function},xi=function(){let R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Er&&Er===R)return;(!R||typeof R!="object")&&(R={}),R=gi(R),Rr=Ir.indexOf(R.PARSER_MEDIA_TYPE)===-1?jr:R.PARSER_MEDIA_TYPE,Ft=Rr==="application/xhtml+xml"?_h:$a,et=Jo(R,"ALLOWED_TAGS",bt,{transform:Ft}),lt=Jo(R,"ALLOWED_ATTR",Zt,{transform:Ft}),Ur=Jo(R,"ALLOWED_NAMESPACES",qr,{transform:_h}),In=Jo(R,"ADD_URI_SAFE_ATTR",lr,{transform:Ft,base:lr}),wn=Jo(R,"ADD_DATA_URI_TAGS",ni,{transform:Ft,base:ni}),un=Jo(R,"FORBID_CONTENTS",ar,{transform:Ft}),vt=Jo(R,"FORBID_TAGS",gi({}),{transform:Ft}),oe=Jo(R,"FORBID_ATTR",gi({}),{transform:Ft}),jn=ti(R,"USE_PROFILES")?R.USE_PROFILES&&typeof R.USE_PROFILES=="object"?gi(R.USE_PROFILES):R.USE_PROFILES:!1,me=R.ALLOW_ARIA_ATTR!==!1,xt=R.ALLOW_DATA_ATTR!==!1,$e=R.ALLOW_UNKNOWN_PROTOCOLS||!1,st=R.ALLOW_SELF_CLOSE_IN_ATTR!==!1,qe=R.SAFE_FOR_TEMPLATES||!1,mt=R.SAFE_FOR_XML!==!1,dt=R.WHOLE_DOCUMENT||!1,or=R.RETURN_DOM||!1,vi=R.RETURN_DOM_FRAGMENT||!1,gt=R.RETURN_TRUSTED_TYPE||!1,Hr=R.FORCE_BODY||!1,Di=R.SANITIZE_DOM!==!1,nt=R.SANITIZE_NAMED_PROPS||!1,Gt=R.KEEP_CONTENT!==!1,At=R.IN_PLACE||!1,fn=Hv(R.ALLOWED_URI_REGEXP)?R.ALLOWED_URI_REGEXP:tf,Qn=typeof R.NAMESPACE=="string"?R.NAMESPACE:Nr,Kr=Ph(R,"MATHML_TEXT_INTEGRATION_POINTS",()=>zt({},ur)),kn=Ph(R,"HTML_INTEGRATION_POINTS",()=>zt({},Ls));const J=Ph(R,"CUSTOM_ELEMENT_HANDLING",()=>Hl(null));if(Ke=Hl(null),ti(J,"tagNameCheck")&&ii(J.tagNameCheck)&&(Ke.tagNameCheck=J.tagNameCheck),ti(J,"attributeNameCheck")&&ii(J.attributeNameCheck)&&(Ke.attributeNameCheck=J.attributeNameCheck),ti(J,"allowCustomizedBuiltInElements")&&typeof J.allowCustomizedBuiltInElements=="boolean"&&(Ke.allowCustomizedBuiltInElements=J.allowCustomizedBuiltInElements),Cr(Ke),qe&&(xt=!1),vi&&(or=!0),jn&&(et=zt({},Zp),lt=Hl(null),jn.html===!0&&(zt(et,Qp),zt(lt,Jp)),jn.svg===!0&&(zt(et,Th),zt(lt,Eh),zt(lt,hd)),jn.svgFilters===!0&&(zt(et,Nh),zt(lt,Eh),zt(lt,hd)),jn.mathMl===!0&&(zt(et,jh),zt(lt,ef),zt(lt,hd))),_e.tagCheck=null,_e.attributeCheck=null,ti(R,"ADD_TAGS")&&(typeof R.ADD_TAGS=="function"?_e.tagCheck=R.ADD_TAGS:ql(R.ADD_TAGS)&&(et===bt&&(et=gi(et)),zt(et,R.ADD_TAGS,Ft))),ti(R,"ADD_ATTR")&&(typeof R.ADD_ATTR=="function"?_e.attributeCheck=R.ADD_ATTR:ql(R.ADD_ATTR)&&(lt===Zt&&(lt=gi(lt)),zt(lt,R.ADD_ATTR,Ft))),ti(R,"ADD_FORBID_CONTENTS")&&ql(R.ADD_FORBID_CONTENTS)&&(un===ar&&(un=gi(un)),zt(un,R.ADD_FORBID_CONTENTS,Ft)),Gt&&(et["#text"]=!0),dt&&zt(et,["html","head","body"]),et.table&&(zt(et,["tbody"]),delete vt.tbody),R.TRUSTED_TYPES_POLICY){if(typeof R.TRUSTED_TYPES_POLICY.createHTML!="function")throw lo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof R.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw lo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const be=ie;ie=R.TRUSTED_TYPES_POLICY;try{ke=U("")}catch(we){throw ie=be,we}}else R.TRUSTED_TYPES_POLICY===null?(ie=void 0,ke=""):(ie===void 0&&(ie=P()),ie&&typeof ke=="string"&&(ke=U("")));sr&&sr(R),Er=R},Lt=zt({},[...Th,...Nh,...Bv]),os=zt({},[...jh,...Uv]),bi=function(R,J,be){return J.namespaceURI===Nr?R==="svg":J.namespaceURI===Br?R==="svg"&&(be==="annotation-xml"||Kr[be]):!!Lt[R]},Yt=function(R,J,be){return J.namespaceURI===Nr?R==="math":J.namespaceURI===En?R==="math"&&kn[be]:!!os[R]},Xe=function(R,J,be){return J.namespaceURI===En&&!kn[be]||J.namespaceURI===Br&&!Kr[be]?!1:!os[R]&&(mo[R]||!Lt[R])},si=function(R){const J=Te(R),be=$a(ye(R)),we=D(R);let Ze,ut;return we&&le(we)===Vn.element?(Ze={namespaceURI:Te(we)},ut=$a(ye(we))):(Ze={namespaceURI:Qn},ut="template"),Ur[J]?J===En?bi(be,Ze,ut):J===Br?Yt(be,Ze,ut):J===Nr?Xe(be,Ze,ut):!!(Rr==="application/xhtml+xml"&&Ur[J]):!1},cr=function(R){Yu(h.removed,{element:R});try{D(R).removeChild(R)}catch{if(V(R),!D(R))throw lo("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Mn=function(R,J,be){try{ne(R,J)}catch{try{R.removeAttribute(be)}catch{}}},_=function(R){de(R);const J=se(R);J&&ao(Rv(J),we=>{try{V(we)}catch{}});const be=le(R)===Vn.element?z(R):null;if(be)for(let we=be.length-1;we>=0;--we){const Ze=be[we],ut=Ze&&Ze.name;typeof ut=="string"&&Mn(R,Ze,ut)}},W=function(R,J,be){if(!be)try{be=J.getAttributeNode(R)}catch{be=null}Yu(h.removed,{attribute:be||null,from:J});try{be?ne(J,be):J.removeAttribute(R)}catch{try{J.removeAttribute(R)}catch{}}if(R==="is")if(or||vi)try{cr(J)}catch{}else try{J.setAttribute(R,"")}catch{}},pe=function(R){const J=z(R);if(J)for(let be=J.length-1;be>=0;--be){const we=J[be],Ze=we&&we.name;typeof Ze!="string"||lt[Ft(Ze)]||Mn(R,we,Ze)}},Ne=function(R,J){let be=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const we=[R];for(;we.length>0;){const Ze=we.pop();if(J(Ze)===!1)continue;if(be&&le(Ze)===Vn.element){const kt=F(Ze);$r(kt)&&we.push(kt)}const ut=se(Ze);if(ut)for(let kt=ut.length-1;kt>=0;--kt)we.push(ut[kt])}},de=function(R){Ne(R,J=>{le(J)===Vn.element&&pe(J)})},Fe=function(R){const J=[];return Ne(R,be=>{J.push(be)},!0),J},Ct=function(R,J){const be=Sh();ao(Fe(R),we=>{le(we)===Vn.element&&Ch(be,we)}),ao(J,we=>{le(we)===Vn.element&&!Vu(be,we)&&pe(we)})},Jt=function(R,J){let be=!1;return ao(h.removed,we=>{we.element&&(be=be||we.element===R,de(we.element))}),Ct(R,J),be},Sn=8,oi=function(R,J){const be=Rt;let we=null;const Ze=()=>(we||(we=Sh(),ao(J,ut=>{Ch(we,ut)})),we);for(let ut=0;;ut++){const kt=Fe(R),gn=[R];let pr=!1;if(ao(kt,cn=>{le(cn)===Vn.documentFragment?Yu(gn,cn):!pr&&!Vu(be,cn)&&(pr=Vu(Ze(),cn))}),!pr)return;if(ut>=Sn)throw lo("the tree kept changing during in-place sanitization; refusing to return it");ao(gn,(cn,$n)=>{Xa(cn,$n>0,R,Ze())})}},Xa=function(R,J,be,we){const Ze=Kn(R);let ut;for(;ut=Ze.nextNode();)!Vu(we,ut)||Vu(Rt,ut)||(J&&dr(Se.uponSanitizeShadowNode,ut,null),Mr(ut,be),Hi(ut,be),$r(ut.content)&&Ms(ut.content))},ft=function(R){Rt&&Ch(Rt,R)},go=function(R,J){return mt?R==="patchsrc"?!0:R==="for"&&J!=="label"&&J!=="output":!1},ra=function(R){mt&&Ne(R,J=>{const be=le(J);if(be===Vn.processingInstruction||be===Vn.comment&&kr(nf,J.data)){try{V(J)}catch{}return!1}if(be===Vn.element){const we=J,Ze=Ft(ye(J));try{we.hasAttribute&&we.hasAttribute("patchsrc")&&we.removeAttribute("patchsrc"),we.hasAttribute&&we.hasAttribute("for")&&go("for",Ze)&&we.removeAttribute("for")}catch{}}return!0})},Fi=function(R){let J=null,be=null;if(Hr)R="<remove></remove>"+R;else{const ut=Gp(R,/^[\r\n\t ]+/);be=ut&&ut[0]}Rr==="application/xhtml+xml"&&Qn===Nr&&(R='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+R+"</body></html>");const we=ie?U(R):R;if(Qn===Nr)try{J=new L().parseFromString(we,Rr)}catch{}if(!J||!J.documentElement){J=H.createDocument(Qn,"template",null);try{J.documentElement.innerHTML=ri?ke:we}catch{}}const Ze=J.body||J.documentElement;return R&&be&&Ze.insertBefore(p.createTextNode(be),Ze.childNodes[0]||null),Qn===Nr?Je.call(J,dt?"html":"body")[0]:dt?J.documentElement:Ze},Kn=function(R){const J=ge?ge(R):R.ownerDocument;return ae.call(J||R,R,C.SHOW_ELEMENT|C.SHOW_COMMENT|C.SHOW_TEXT|C.SHOW_PROCESSING_INSTRUCTION|C.SHOW_CDATA_SECTION,null)},Ps=function(R){return R=Xu(R,Me," "),R=Xu(R,He," "),R=Xu(R,Be," "),R},as=function(R){var J;Nt(R);const be=(J=R.querySelectorAll)===null||J===void 0?void 0:J.call(R,"template");be&&ao(be,we=>{$r(we.content)&&as(we.content)})},Nt=function(R){R.normalize();const J=ge?ge(R):R.ownerDocument,be=ae.call(J||R,R,C.SHOW_TEXT|C.SHOW_COMMENT|C.SHOW_CDATA_SECTION|C.SHOW_PROCESSING_INSTRUCTION,null);let we=be.nextNode();for(;we;)we.data=Ps(we.data),we=be.nextNode()},Wi=function(R){const J=Y?Y(R):null;return typeof J!="string"||Ft(J)!=="form"?!1:typeof R.nodeName!="string"||typeof R.textContent!="string"||typeof R.removeChild!="function"||R.attributes!==z(R)||typeof R.removeAttribute!="function"||typeof R.removeAttributeNode!="function"||typeof R.getAttributeNode!="function"||typeof R.setAttribute!="function"||typeof R.namespaceURI!="string"||typeof R.insertBefore!="function"||typeof R.hasChildNodes!="function"||R.nodeType!==q(R)||R.childNodes!==se(R)},$r=function(R){if(!q||typeof R!="object"||R===null)return!1;try{return q(R)===Vn.documentFragment}catch{return!1}},ai=function(R){if(!q||typeof R!="object"||R===null)return!1;try{return typeof q(R)=="number"}catch{return!1}};function dr(Ce,R,J){Ce.length!==0&&ao(Ce,be=>{be.call(h,R,J,Er)})}const ia=function(R,J){return!!(mt&&R.hasChildNodes()&&!ai(R.firstElementChild)&&kr(Lh,R.textContent)&&kr(Lh,R.innerHTML)||mt&&ex[J]&&le(R)===Vn.element&&Te(R)===Nr&&(ai(R.firstElementChild)||typeof R.textContent=="string"&&kr(Lh,R.textContent))||R.nodeType===Vn.processingInstruction||mt&&R.nodeType===Vn.comment&&kr(nf,R.data))},ls=function(R,J){if(R instanceof RegExp)return kr(R,J);if(R instanceof Function){for(var be=arguments.length,we=new Array(be>2?be-2:0),Ze=2;Ze<be;Ze++)we[Ze-2]=arguments[Ze];return!!R(J,...we)}return!1},yo=function(R,J,be){if(!vt[J]&&us(J)&&ls(Ke.tagNameCheck,J))return!1;if(Gt&&!un[J]&&!un[$a(J)]){const we=D(R),Ze=se(R);if(Ze&&we){const ut=Ze.length;for(let kt=ut-1;kt>=0;--kt){const gn=R===be?I(Ze[kt],!0):Ze[kt];we.insertBefore(gn,$(R))}}}return cr(R),!0},As=function(R,J,be,we){return R.length===0?J:J===be||J===we?gi(J):J},hr=function(R,J){return R===J||D(R)!==null?!1:(At&&de(R),!0)},Mr=function(R,J){if(ft(R),dr(Se.beforeSanitizeElements,R,null),hr(R,J))return!0;if(Wi(R))return cr(R),!0;const be=Ft(ye(R));if(et=As(Se.uponSanitizeElement,et,bt,Xn),dr(Se.uponSanitizeElement,R,{tagName:be,allowedTags:et}),hr(R,J))return!0;if(ia(R,be))return cr(R),!0;if(vt[be]||!(_e.tagCheck instanceof Function&&_e.tagCheck(be))&&!et[be]){const we=yo(R,be,J);return we===!1&&(dr(Se.afterSanitizeElements,R,null),hr(R,J))?!0:we}if(le(R)===Vn.element&&!si(R)||(be==="noscript"||be==="noembed"||be==="noframes")&&kr(Jv,R.innerHTML))return cr(R),!0;if(qe&&R.nodeType===Vn.text){const we=Ps(R.textContent);R.textContent!==we&&(Yu(h.removed,{element:R.cloneNode()}),R.textContent=we)}return dr(Se.afterSanitizeElements,R,null),hr(R,J)},On=function(R,J,be){if(oe[J]||go(J,R)||Di&&(J==="id"||J==="name")&&(be in p||be in zi))return!1;const we=lt[J]||_e.attributeCheck instanceof Function&&_e.attributeCheck(J,R);return xt&&kr(tt,J)||me&&kr(Ge,J)?!0:we?In[J]||kr(fn,Xu(be,Qt,""))||(J==="src"||J==="xlink:href"||J==="href")&&R!=="script"&&Yp(be,"data:")===0&&wn[R]||$e&&!kr(qt,Xu(be,Qt,""))?!0:!be:us(R)&&ls(Ke.tagNameCheck,R)&&ls(Ke.attributeNameCheck,J,R)||J==="is"&&Ke.allowCustomizedBuiltInElements&&ls(Ke.tagNameCheck,be)},Rs=zt({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),us=function(R){return!Rs[$a(R)]&&kr($t,R)},Or=function(R,J,be,we){if(ie&&typeof A=="object"&&typeof A.getAttributeType=="function"&&!be)switch(A.getAttributeType(R,J)){case"TrustedHTML":return U(we);case"TrustedScriptURL":return S(we)}return we},Is=function(R,J,be,we){try{return be?R.setAttributeNS(be,J,we):R.setAttribute(J,we),Wi(R)?(cr(R),!1):!0}catch{return W(J,R),!1}},sa=function(R,J){return mt&&kr(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,J)?!0:$a(R)==="attributename"&&Gp(J,"href")!==null},Hi=function(R,J){if(dr(Se.beforeSanitizeAttributes,R,null),hr(R,J))return;const be=R.attributes;if(!be||Wi(R))return;lt=As(Se.uponSanitizeAttribute,lt,Zt,_r);const we={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:lt,forceKeepAttr:void 0};let Ze=be.length;const ut=Ft(R.nodeName);for(;Ze--;){const kt=be[Ze],gn=kt.name,pr=kt.namespaceURI,cn=kt.value,$n=Ft(gn),wi=cn;let Pt=gn==="value"?wi:Mv(wi),xo=!1;if(we.attrName=$n,we.attrValue=Pt,we.keepAttr=!0,we.forceKeepAttr=void 0,dr(Se.uponSanitizeAttribute,R,we),Pt=we.attrValue,nt&&($n==="id"||$n==="name")&&Yp(Pt,Tr)!==0&&(W(gn,R,kt),Pt=Tr+Pt,xo=!0),sa(gn,Pt)){W(gn,R,kt);continue}if(!we.forceKeepAttr){if(!we.keepAttr){W(gn,R,kt);continue}if(!st&&kr(rf,Pt)){W(gn,R,kt);continue}if(qe&&(Pt=Ps(Pt)),!On(ut,$n,Pt)){W(gn,R,kt);continue}Pt=Or(ut,$n,pr,Pt),Pt!==wi&&Is(R,gn,pr,Pt)&&xo&&$p(h.removed)}}dr(Se.afterSanitizeAttributes,R,null),hr(R,J)},Ms=function(R){let J=null;const be=Kn(R);for(dr(Se.beforeSanitizeShadowDOM,R,null);J=be.nextNode();)if(dr(Se.uponSanitizeShadowNode,J,null),Mr(J,R),Hi(J,R),$r(J.content)&&Ms(J.content),le(J)===Vn.element){const we=F(J);$r(we)&&(vo(we),Ms(we))}qe&&Nt(R),dr(Se.afterSanitizeShadowDOM,R,null)},vo=function(R){const J=[{node:R,shadow:null}];for(;J.length>0;){const be=J.pop();if(be.shadow){Ms(be.shadow);continue}const we=be.node,Ze=le(we)===Vn.element,ut=se(we);if(ut)for(let kt=ut.length-1;kt>=0;--kt)J.push({node:ut[kt],shadow:null});if(Ze){const kt=Y?Y(we):null;if(typeof kt=="string"&&Ft(kt)==="template"){const gn=we.content;$r(gn)&&J.push({node:gn,shadow:null})}}if(Ze){const kt=F(we);$r(kt)&&J.push({node:null,shadow:kt},{node:kt,shadow:null})}}};return h.sanitize=function(Ce){let R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},J=null,be=null,we=null,Ze=null;if(ri=!Ce,ri&&(Ce="<!-->"),typeof Ce!="string"&&!ai(Ce)&&(Ce=Fv(Ce),typeof Ce!="string"))throw lo("dirty is not a string, aborting");if(!h.isSupported)return Ce;mn?(et=Xn,lt=_r):xi(R),(Se.uponSanitizeElement.length>0||Se.uponSanitizeAttribute.length>0)&&(et=gi(et)),Se.uponSanitizeAttribute.length>0&&(lt=gi(lt)),h.removed=[];const ut=At&&typeof Ce!="string"&&ai(Ce);let kt=[];const gn=Rt;if(ut){ra(Ce);const $n=ye(Ce);if(typeof $n=="string"){const wi=Ft($n);if(!et[wi]||vt[wi])throw _(Ce),lo("root node is forbidden and cannot be sanitized in-place")}if(Wi(Ce))throw _(Ce),lo("root node is clobbered and cannot be sanitized in-place");kt=Fe(Ce),Rt=Sh()}else if(ai(Ce))J=Fi("<!---->"),be=J.ownerDocument.importNode(Ce,!0),be.nodeType===Vn.element&&be.nodeName==="BODY"||be.nodeName==="HTML"?J=be:J.appendChild(be),vo(J);else{if(!or&&!qe&&!dt&&Ce.indexOf("<")===-1)return ie&&gt?U(Ce):Ce;if(J=Fi(Ce),!J)return or?null:gt?ke:""}J&&Hr&&cr(J.firstChild);const pr=ut?Ce:J;try{ut&&vo(Ce);const $n=Kn(pr);for(;we=$n.nextNode();)Mr(we,pr),Hi(we,pr),$r(we.content)&&Ms(we.content);ut&&oi(Ce,kt)}catch($n){throw ut&&(_(Ce),Jt(Ce,kt)),$n}finally{Rt=gn}if(ut){if(Jt(Ce,kt))throw lo("a node selected for removal could not be safely returned; refusing to sanitize in place");return qe&&as(Ce),Ce}if(or){if(qe&&as(J),vi)for(Ze=Oe.call(J.ownerDocument);J.firstChild;)Ze.appendChild(J.firstChild);else Ze=J;return(lt.shadowroot||lt.shadowrootmode)&&(Ze=Ve.call(v,Ze,!0)),Ze}let cn=dt?J.outerHTML:J.innerHTML;return dt&&et["!doctype"]&&J.ownerDocument&&J.ownerDocument.doctype&&J.ownerDocument.doctype.name&&kr(Qv,J.ownerDocument.doctype.name)&&(cn="<!DOCTYPE "+J.ownerDocument.doctype.name+`>
`+cn),qe&&(cn=Ps(cn)),ie&&gt?U(cn):cn},h.setConfig=function(){let Ce=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xi(Ce),mn=!0,Xn=et,_r=lt},h.clearConfig=function(){Er=null,mn=!1,Xn=null,_r=null,ie=re,ke=""},h.isValidAttribute=function(Ce,R,J){Er||xi({});const be=Ft(Ce),we=Ft(R);return typeof J=="string"&&(sa(R,J)||!st&&kr(rf,J))?!1:On(be,we,J)},h.addHook=function(Ce,R){typeof R=="function"&&ti(Se,Ce)&&Yu(Se[Ce],R)},h.removeHook=function(Ce,R){if(ti(Se,Ce)){if(R!==void 0){const J=Av(Se[Ce],R);return J===-1?void 0:Iv(Se[Ce],J,1)[0]}return $p(Se[Ce])}},h.removeHooks=function(Ce){ti(Se,Ce)&&(Se[Ce]=[])},h.removeAllHooks=function(){Se=sf()},h}var rx=om();function ix(u,h=null){const p=String(u||""),v=p.split(`
`),x=v.findIndex(C=>/^##\s+(?:Practice|Solve)(?:\s*[:—-].*)?\s*$/i.test(C)),w=x===-1?-1:v.findIndex((C,L)=>L>x&&/^##\s+(?:Reflect(?:ion)?|Learn|Stop and think|Optional reading)(?:\b|\s*[:—-])/i.test(C)),N=x>=0?v.slice(x,w<0?v.length:w).join(`
`):`# Solve

${(h==null?void 0:h.challenge)||"Try the lesson task before looking at the guide."}`,E=x>=0?[...v.slice(0,x),...w<0?[]:v.slice(w)].join(`
`).trim():p;return{solve:N,learn:E}}function sx(u){const h=String(u||"").split(`
`),p=[];let v=null;h.forEach((N,E)=>{const C=N.trim(),L=/^(`{3,}|~{3,})/.exec(C);if(L){const V=L[1];v?v.char===V[0]&&V.length>=v.length&&(v=null):v={char:V[0],length:V.length};return}if(v)return;const A=/^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(N);if(!A)return;const M=A[2],I=/\bStep\s+\d+(?=\s*(?:[:.·–—-]|$))/i.test(M);p.push({index:E,level:A[1].length,numbered:I})});const x=p.filter(N=>N.numbered),w=(x.length?x:p.filter(N=>N.level===2)).map(N=>N.index);return w.length?{intro:h.slice(0,w[0]).join(`
`).trim(),steps:w.map((N,E)=>h.slice(N,w[E+1]??h.length).join(`
`).trim())}:{intro:h.join(`
`),steps:[]}}const ox=Object.assign({"../content/capstone-discovery.md":yy,"../content/capstone-feedback.md":vy,"../content/capstone-interviews.md":xy,"../content/capstone-prototype.md":by,"../content/csharp-conditionals.md":wy,"../content/csharp-variables.md":ky,"../content/python-decisions.md":Sy,"../content/python-formatting.md":Cy,"../content/python-lists.md":_y,"../content/python-loops.md":Ty,"../content/python-strings.md":Ny,"../content/python-variables.md":jy,"../content/react-components.md":Ey,"../content/react-state.md":Ly,"../content/tsi-equations.md":Py,"../content/tsi-percents.md":Ay,"../content/tsi-ratios.md":Ry,"../content/tsi-slope.md":Iy,"../content/uil-arrays.md":My,"../content/uil-loops.md":Oy,"../content/uil-methods.md":Dy,"../content/uil-strings.md":zy,"../content/unity-colliders.md":Fy,"../content/unity-player-controller.md":Wy,"../content/unity-score.md":Hy,"../content/web-events.md":By,"../content/web-layout.md":Uy}),ax="# Add a Markdown lesson\n\nSave a new `.md` file inside `src/content/`.\n",lx=u=>ox[`../content/${u}.md`]||ax,ic=u=>rx.sanitize(Kt.parse(u,{breaks:!1,gfm:!0}));function ux(u,h=""){if(!(u!=null&&u.isPublished))return"";let p="";const v=Array.isArray(u.cases)?u.cases:[];v.length&&!/##\s+(?:Published )?Examples\b/i.test(h)&&(p+=`

### Published examples
`,v.forEach((w,N)=>{p+=`
**Example `+(N+1)+`**

`,w.call&&(p+="Input: `"+w.call+`\`

`),p+=u.mode==="function"?`Expected return:
`:`Expected output:
`,p+="\n```text\n"+String(w.expected??"")+"\n```\n"}));const x=Array.isArray(u.hints)?u.hints:[];return x.length&&!/<details(?:\s|>)/i.test(h)&&(p+=`

### Need a hint?
`,x.forEach((w,N)=>{p+=`
<details>
<summary>Hint `+(N+1)+`</summary>

`+String(w).replaceAll("<","&lt;")+`

</details>
`})),p}function of(u,h){if(!h)return u;const p="https://github.com/mswhitby/computer-science-1/blob/main/units/",v=h.startsWith("/playground/data/")?new URL(h,"https://www.mswhitby.com"):new URL(h,p);return String(u).replace(/\]\(([^)]+)\)/g,(x,w)=>{if(/^(?:https?:|mailto:|#|data:)/i.test(w))return x;const[N,...E]=w.split(" ");try{const C=new URL(N,v);return C.origin!==v.origin?x:"]("+C.href+(E.length?" "+E.join(" "):"")+")"}catch{return x}})}const am={markdown:u=>`designlab:md:${u}`,code:u=>`designlab:code:${u}`};function Sd(u){try{return localStorage.getItem(u)}catch{return null}}function Kl(u,h){try{localStorage.setItem(u,h)}catch{}}function cx(u){try{localStorage.removeItem(u)}catch{}}function af({lessonId:u,task:h,isTsi:p=!1,tsiAnswer:v=null}){var q;const x=(h==null?void 0:h.markdownSource)||lx(u),w=am.markdown(u),[N,E]=Ae.useState(x),[C,L]=Ae.useState(p?"learn":"solve"),[A,M]=Ae.useState(0),[I,V]=Ae.useState(!1);Ae.useEffect(()=>{E(Sd(w)??x),L(p?"learn":"solve"),M(0),V(!1)},[w,x,p]);const ne=Ae.useMemo(()=>{const Y=ix(N,h),ge=Y.solve+ux(h,Y.solve);return{solve:of(ge,(h==null?void 0:h.markdownUrl)||(h==null?void 0:h.markdown)),learn:of(Y.learn,(h==null?void 0:h.markdownUrl)||(h==null?void 0:h.markdown))}},[N,h]),$=Ae.useMemo(()=>sx(ne.learn),[ne.learn]),se=!p&&C==="learn"&&$.steps.length>0,D=Math.min(A,Math.max(0,$.steps.length-1)),F=p?ne.learn:C==="solve"?ne.solve:se?$.intro+`

`+$.steps[D]:ne.learn,z=Ae.useMemo(()=>ic(F),[F]);return c.jsxs("section",{className:"instructions-pane",children:[c.jsxs("div",{className:"pane-header",children:[p?c.jsx("strong",{className:"tsi-learn-title",children:"Learn"}):c.jsxs("div",{className:"tabs compact",role:"tablist","aria-label":"Lesson views",children:[c.jsx("button",{role:"tab","aria-selected":C==="solve",className:C==="solve"?"active":"",onClick:()=>{L("solve"),M(0)},children:"Solve"}),c.jsx("button",{role:"tab","aria-selected":C==="learn",className:C==="learn"?"active":"",onClick:()=>{L("learn"),M(0)},children:"Learn"})]}),c.jsx("button",{type:"button",className:uo("icon-button",I&&"active"),title:"Edit lesson text","aria-label":"Edit lesson text",onClick:()=>V(!I),children:c.jsx($g,{size:16})})]}),I?c.jsxs("div",{className:"markdown-source",children:[c.jsx("p",{className:"hint",children:"Try editing these instructions. Changes here are just for your preview."}),c.jsx("textarea",{"aria-label":"Markdown source",value:N,onChange:Y=>{E(Y.target.value),M(0),Kl(w,Y.target.value)}}),c.jsx("button",{type:"button",className:"btn",onClick:()=>{cx(w),E(x),M(0)},children:"Reset lesson text"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"markdown-preview",role:"tabpanel",children:[c.jsx("div",{dangerouslySetInnerHTML:{__html:z}}),p&&v&&c.jsxs("section",{className:"tsi-worked-solution",role:"status",children:[c.jsx("h3",{children:v.correct?"Why that works":"Review the solution"}),c.jsx("p",{children:(q=rp[u])==null?void 0:q.explanation})]})]}),se&&c.jsxs("nav",{className:"lesson-step-controls","aria-label":"Learning steps",children:[D>0&&c.jsxs("button",{type:"button",className:"step-link previous",onClick:()=>M(Y=>Math.max(0,Y-1)),children:[c.jsx(Vh,{size:16,"aria-hidden":"true"})," Previous"]}),c.jsxs("span",{children:["Step ",D+1," of ",$.steps.length]}),D<$.steps.length-1&&c.jsxs("button",{type:"button",className:"step-link next",onClick:()=>M(Y=>Math.min($.steps.length-1,Y+1)),children:["Next ",c.jsx(na,{size:16,"aria-hidden":"true"})]})]})]})]})}var fd={exports:{}},dx=fd.exports,lf;function ss(){return lf||(lf=1,(function(u,h){(function(p,v){u.exports=v()})(dx,(function(){var p=navigator.userAgent,v=navigator.platform,x=/gecko\/\d/i.test(p),w=/MSIE \d/.test(p),N=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(p),E=/Edge\/(\d+)/.exec(p),C=w||N||E,L=C&&(w?document.documentMode||6:+(E||N)[1]),A=!E&&/WebKit\//.test(p),M=A&&/Qt\/\d+\.\d+/.test(p),I=!E&&/Chrome\/(\d+)/.exec(p),V=I&&+I[1],ne=/Opera\//.test(p),$=/Apple Computer/.test(navigator.vendor),se=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(p),D=/PhantomJS/.test(p),F=$&&(/Mobile\/\w+/.test(p)||navigator.maxTouchPoints>2),z=/Android/.test(p),q=F||z||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(p),Y=F||/Mac/.test(v),ge=/\bCrOS\b/.test(p),le=/win/i.test(v),ye=ne&&p.match(/Version\/(\d*\.\d*)/);ye&&(ye=Number(ye[1])),ye&&ye>=15&&(ne=!1,A=!0);var We=Y&&(M||ne&&(ye==null||ye<12.11)),Te=x||C&&L>=9;function ie(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var ke=function(e,n){var s=e.className,i=ie(n).exec(s);if(i){var o=s.slice(i.index+i[0].length);e.className=s.slice(0,i.index)+(o?i[1]+o:"")}};function re(e){for(var n=e.childNodes.length;n>0;--n)e.removeChild(e.firstChild);return e}function ve(e,n){return re(e).appendChild(n)}function T(e,n,s,i){var o=document.createElement(e);if(s&&(o.className=s),i&&(o.style.cssText=i),typeof n=="string")o.appendChild(document.createTextNode(n));else if(n)for(var d=0;d<n.length;++d)o.appendChild(n[d]);return o}function Q(e,n,s,i){var o=T(e,n,s,i);return o.setAttribute("role","presentation"),o}var U;document.createRange?U=function(e,n,s,i){var o=document.createRange();return o.setEnd(i||e,s),o.setStart(e,n),o}:U=function(e,n,s){var i=document.body.createTextRange();try{i.moveToElementText(e.parentNode)}catch{return i}return i.collapse(!0),i.moveEnd("character",s),i.moveStart("character",n),i};function S(e,n){if(n.nodeType==3&&(n=n.parentNode),e.contains)return e.contains(n);do if(n.nodeType==11&&(n=n.host),n==e)return!0;while(n=n.parentNode)}function P(e){var n=e.ownerDocument||e,s;try{s=e.activeElement}catch{s=n.body||null}for(;s&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function G(e,n){var s=e.className;ie(n).test(s)||(e.className+=(s?" ":"")+n)}function H(e,n){for(var s=e.split(" "),i=0;i<s.length;i++)s[i]&&!ie(s[i]).test(n)&&(n+=" "+s[i]);return n}var ae=function(e){e.select()};F?ae=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:C&&(ae=function(e){try{e.select()}catch{}});function Oe(e){return e.display.wrapper.ownerDocument}function Je(e){return Ve(e.display.wrapper)}function Ve(e){return e.getRootNode?e.getRootNode():e.ownerDocument}function Se(e){return Oe(e).defaultView}function Me(e){var n=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,n)}}function He(e,n,s){n||(n={});for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s!==!1||!Object.prototype.hasOwnProperty.call(n,i))&&(n[i]=e[i]);return n}function Be(e,n,s,i,o){n==null&&(n=e.search(/[^\s\u00a0]/),n==-1&&(n=e.length));for(var d=i||0,m=o||0;;){var y=e.indexOf("	",d);if(y<0||y>=n)return m+(n-d);m+=y-d,m+=s-m%s,d=y+1}}var tt=function(){this.id=null,this.f=null,this.time=0,this.handler=Me(this.onTimeout,this)};tt.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},tt.prototype.set=function(e,n){this.f=n;var s=+new Date+e;(!this.id||s<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=s)};function Ge(e,n){for(var s=0;s<e.length;++s)if(e[s]==n)return s;return-1}var qt=50,Qt={toString:function(){return"CodeMirror.Pass"}},$t={scroll:!1},fn={origin:"*mouse"},et={origin:"+move"};function bt(e,n,s){for(var i=0,o=0;;){var d=e.indexOf("	",i);d==-1&&(d=e.length);var m=d-i;if(d==e.length||o+m>=n)return i+Math.min(m,n-o);if(o+=d-i,o+=s-o%s,i=d+1,o>=n)return i}}var lt=[""];function Zt(e){for(;lt.length<=e;)lt.push(Ke(lt)+" ");return lt[e]}function Ke(e){return e[e.length-1]}function vt(e,n){for(var s=[],i=0;i<e.length;i++)s[i]=n(e[i],i);return s}function oe(e,n,s){for(var i=0,o=s(n);i<e.length&&s(e[i])<=o;)i++;e.splice(i,0,n)}function _e(){}function me(e,n){var s;return Object.create?s=Object.create(e):(_e.prototype=e,s=new _e),n&&He(n,s),s}var xt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function $e(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||xt.test(e))}function st(e,n){return n?n.source.indexOf("\\w")>-1&&$e(e)?!0:n.test(e):$e(e)}function qe(e){for(var n in e)if(e.hasOwnProperty(n)&&e[n])return!1;return!0}var mt=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function dt(e){return e.charCodeAt(0)>=768&&mt.test(e)}function mn(e,n,s){for(;(s<0?n>0:n<e.length)&&dt(e.charAt(n));)n+=s;return n}function Xn(e,n,s){for(var i=n>s?-1:1;;){if(n==s)return n;var o=(n+s)/2,d=i<0?Math.ceil(o):Math.floor(o);if(d==n)return e(d)?n:s;e(d)?s=d:n=d+i}}function _r(e,n,s,i){if(!e)return i(n,s,"ltr",0);for(var o=!1,d=0;d<e.length;++d){var m=e[d];(m.from<s&&m.to>n||n==s&&m.to==n)&&(i(Math.max(m.from,n),Math.min(m.to,s),m.level==1?"rtl":"ltr",d),o=!0)}o||i(n,s,"ltr")}var Hr=null;function or(e,n,s){var i;Hr=null;for(var o=0;o<e.length;++o){var d=e[o];if(d.from<n&&d.to>n)return o;d.to==n&&(d.from!=d.to&&s=="before"?i=o:Hr=o),d.from==n&&(d.from!=d.to&&s!="before"?i=o:Hr=o)}return i??Hr}var vi=(function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function s(k){return k<=247?e.charAt(k):1424<=k&&k<=1524?"R":1536<=k&&k<=1785?n.charAt(k-1536):1774<=k&&k<=2220?"r":8192<=k&&k<=8203?"w":k==8204?"b":"L"}var i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,d=/[LRr]/,m=/[Lb1n]/,y=/[1n]/;function b(k,O,B){this.level=k,this.from=O,this.to=B}return function(k,O){var B=O=="ltr"?"L":"R";if(k.length==0||O=="ltr"&&!i.test(k))return!1;for(var te=k.length,Z=[],fe=0;fe<te;++fe)Z.push(s(k.charCodeAt(fe)));for(var xe=0,Le=B;xe<te;++xe){var je=Z[xe];je=="m"?Z[xe]=Le:Le=je}for(var De=0,Ie=B;De<te;++De){var Ue=Z[De];Ue=="1"&&Ie=="r"?Z[De]="n":d.test(Ue)&&(Ie=Ue,Ue=="r"&&(Z[De]="R"))}for(var ot=1,Ye=Z[0];ot<te-1;++ot){var wt=Z[ot];wt=="+"&&Ye=="1"&&Z[ot+1]=="1"?Z[ot]="1":wt==","&&Ye==Z[ot+1]&&(Ye=="1"||Ye=="n")&&(Z[ot]=Ye),Ye=wt}for(var _t=0;_t<te;++_t){var Bn=Z[_t];if(Bn==",")Z[_t]="N";else if(Bn=="%"){var nn=void 0;for(nn=_t+1;nn<te&&Z[nn]=="%";++nn);for(var vr=_t&&Z[_t-1]=="!"||nn<te&&Z[nn]=="1"?"1":"N",rr=_t;rr<nn;++rr)Z[rr]=vr;_t=nn-1}}for(var vn=0,xr=B;vn<te;++vn){var Nn=Z[vn];xr=="L"&&Nn=="1"?Z[vn]="L":d.test(Nn)&&(xr=Nn)}for(var xn=0;xn<te;++xn)if(o.test(Z[xn])){var Ot=void 0;for(Ot=xn+1;Ot<te&&o.test(Z[Ot]);++Ot);for(var ct=(xn?Z[xn-1]:B)=="L",Dt=(Ot<te?Z[Ot]:B)=="L",rn=ct==Dt?ct?"L":"R":B,an=xn;an<Ot;++an)Z[an]=rn;xn=Ot-1}for(var Bt=[],br,Tt=0;Tt<te;)if(m.test(Z[Tt])){var so=Tt;for(++Tt;Tt<te&&m.test(Z[Tt]);++Tt);Bt.push(new b(0,so,Tt))}else{var wr=Tt,Ii=Bt.length,es=O=="rtl"?1:0;for(++Tt;Tt<te&&Z[Tt]!="L";++Tt);for(var An=wr;An<Tt;)if(y.test(Z[An])){wr<An&&(Bt.splice(Ii,0,new b(1,wr,An)),Ii+=es);var Un=An;for(++An;An<Tt&&y.test(Z[An]);++An);Bt.splice(Ii,0,new b(2,Un,An)),Ii+=es,wr=An}else++An;wr<Tt&&Bt.splice(Ii,0,new b(1,wr,Tt))}return O=="ltr"&&(Bt[0].level==1&&(br=k.match(/^\s+/))&&(Bt[0].from=br[0].length,Bt.unshift(new b(0,0,br[0].length))),Ke(Bt).level==1&&(br=k.match(/\s+$/))&&(Ke(Bt).to-=br[0].length,Bt.push(new b(0,te-br[0].length,te)))),O=="rtl"?Bt.reverse():Bt}})();function gt(e,n){var s=e.order;return s==null&&(s=e.order=vi(e.text,n)),s}var Di=[],nt=function(e,n,s){if(e.addEventListener)e.addEventListener(n,s,!1);else if(e.attachEvent)e.attachEvent("on"+n,s);else{var i=e._handlers||(e._handlers={});i[n]=(i[n]||Di).concat(s)}};function Tr(e,n){return e._handlers&&e._handlers[n]||Di}function Gt(e,n,s){if(e.removeEventListener)e.removeEventListener(n,s,!1);else if(e.detachEvent)e.detachEvent("on"+n,s);else{var i=e._handlers,o=i&&i[n];if(o){var d=Ge(o,s);d>-1&&(i[n]=o.slice(0,d).concat(o.slice(d+1)))}}}function At(e,n){var s=Tr(e,n);if(s.length)for(var i=Array.prototype.slice.call(arguments,2),o=0;o<s.length;++o)s[o].apply(null,i)}function Rt(e,n,s){return typeof n=="string"&&(n={type:n,preventDefault:function(){this.defaultPrevented=!0}}),At(e,s||n.type,e,n),In(n)||n.codemirrorIgnore}function jn(e){var n=e._handlers&&e._handlers.cursorActivity;if(n)for(var s=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),i=0;i<n.length;++i)Ge(s,n[i])==-1&&s.push(n[i])}function un(e,n){return Tr(e,n).length>0}function ar(e){e.prototype.on=function(n,s){nt(this,n,s)},e.prototype.off=function(n,s){Gt(this,n,s)}}function wn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ni(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function In(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==!1}function lr(e){wn(e),ni(e)}function Br(e){return e.target||e.srcElement}function En(e){var n=e.which;return n==null&&(e.button&1?n=1:e.button&2?n=3:e.button&4&&(n=2)),Y&&e.ctrlKey&&n==1&&(n=3),n}var Nr=(function(){if(C&&L<9)return!1;var e=T("div");return"draggable"in e||"dragDrop"in e})(),Qn;function ri(e){if(Qn==null){var n=T("span","​");ve(e,T("span",[n,document.createTextNode("x")])),e.firstChild.offsetHeight!=0&&(Qn=n.offsetWidth<=1&&n.offsetHeight>2&&!(C&&L<8))}var s=Qn?T("span","​"):T("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return s.setAttribute("cm-text",""),s}var Ur;function qr(e){if(Ur!=null)return Ur;var n=ve(e,document.createTextNode("AخA")),s=U(n,0,1).getBoundingClientRect(),i=U(n,1,2).getBoundingClientRect();return re(e),!s||s.left==s.right?!1:Ur=i.right-s.right<3}var ur=`

b`.split(/\n/).length!=3?function(e){for(var n=0,s=[],i=e.length;n<=i;){var o=e.indexOf(`
`,n);o==-1&&(o=e.length);var d=e.slice(n,e.charAt(o-1)=="\r"?o-1:o),m=d.indexOf("\r");m!=-1?(s.push(d.slice(0,m)),n+=m+1):(s.push(d),n=o+1)}return s}:function(e){return e.split(/\r\n?|\n/)},Kr=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch{return!1}}:function(e){var n;try{n=e.ownerDocument.selection.createRange()}catch{}return!n||n.parentElement()!=e?!1:n.compareEndPoints("StartToEnd",n)!=0},Ls=(function(){var e=T("div");return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),typeof e.oncopy=="function")})(),kn=null;function mo(e){if(kn!=null)return kn;var n=ve(e,T("span","x")),s=n.getBoundingClientRect(),i=U(n,0,1).getBoundingClientRect();return kn=Math.abs(s.left-i.left)>1}var Rr={},Ir={};function jr(e,n){arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),Rr[e]=n}function Ft(e,n){Ir[e]=n}function Er(e){if(typeof e=="string"&&Ir.hasOwnProperty(e))e=Ir[e];else if(e&&typeof e.name=="string"&&Ir.hasOwnProperty(e.name)){var n=Ir[e.name];typeof n=="string"&&(n={name:n}),e=me(n,e),e.name=n.name}else{if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Er("application/xml");if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Er("application/json")}return typeof e=="string"?{name:e}:e||{name:"null"}}function zi(e,n){n=Er(n);var s=Rr[n.name];if(!s)return zi(e,"text/plain");var i=s(e,n);if(ii.hasOwnProperty(n.name)){var o=ii[n.name];for(var d in o)o.hasOwnProperty(d)&&(i.hasOwnProperty(d)&&(i["_"+d]=i[d]),i[d]=o[d])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var m in n.modeProps)i[m]=n.modeProps[m];return i}var ii={};function xi(e,n){var s=ii.hasOwnProperty(e)?ii[e]:ii[e]={};He(n,s)}function Lt(e,n){if(n===!0)return n;if(e.copyState)return e.copyState(n);var s={};for(var i in n){var o=n[i];o instanceof Array&&(o=o.concat([])),s[i]=o}return s}function os(e,n){for(var s;e.innerMode&&(s=e.innerMode(n),!(!s||s.mode==e));)n=s.state,e=s.mode;return s||{mode:e,state:n}}function bi(e,n,s){return e.startState?e.startState(n,s):!0}var Yt=function(e,n,s){this.pos=this.start=0,this.string=e,this.tabSize=n||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=s};Yt.prototype.eol=function(){return this.pos>=this.string.length},Yt.prototype.sol=function(){return this.pos==this.lineStart},Yt.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Yt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Yt.prototype.eat=function(e){var n=this.string.charAt(this.pos),s;if(typeof e=="string"?s=n==e:s=n&&(e.test?e.test(n):e(n)),s)return++this.pos,n},Yt.prototype.eatWhile=function(e){for(var n=this.pos;this.eat(e););return this.pos>n},Yt.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Yt.prototype.skipToEnd=function(){this.pos=this.string.length},Yt.prototype.skipTo=function(e){var n=this.string.indexOf(e,this.pos);if(n>-1)return this.pos=n,!0},Yt.prototype.backUp=function(e){this.pos-=e},Yt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Be(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Be(this.string,this.lineStart,this.tabSize):0)},Yt.prototype.indentation=function(){return Be(this.string,null,this.tabSize)-(this.lineStart?Be(this.string,this.lineStart,this.tabSize):0)},Yt.prototype.match=function(e,n,s){if(typeof e=="string"){var i=function(m){return s?m.toLowerCase():m},o=this.string.substr(this.pos,e.length);if(i(o)==i(e))return n!==!1&&(this.pos+=e.length),!0}else{var d=this.string.slice(this.pos).match(e);return d&&d.index>0?null:(d&&n!==!1&&(this.pos+=d[0].length),d)}},Yt.prototype.current=function(){return this.string.slice(this.start,this.pos)},Yt.prototype.hideFirstChars=function(e,n){this.lineStart+=e;try{return n()}finally{this.lineStart-=e}},Yt.prototype.lookAhead=function(e){var n=this.lineOracle;return n&&n.lookAhead(e)},Yt.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};function Xe(e,n){if(n-=e.first,n<0||n>=e.size)throw new Error("There is no line "+(n+e.first)+" in the document.");for(var s=e;!s.lines;)for(var i=0;;++i){var o=s.children[i],d=o.chunkSize();if(n<d){s=o;break}n-=d}return s.lines[n]}function si(e,n,s){var i=[],o=n.line;return e.iter(n.line,s.line+1,function(d){var m=d.text;o==s.line&&(m=m.slice(0,s.ch)),o==n.line&&(m=m.slice(n.ch)),i.push(m),++o}),i}function cr(e,n,s){var i=[];return e.iter(n,s,function(o){i.push(o.text)}),i}function Mn(e,n){var s=n-e.height;if(s)for(var i=e;i;i=i.parent)i.height+=s}function _(e){if(e.parent==null)return null;for(var n=e.parent,s=Ge(n.lines,e),i=n.parent;i;n=i,i=i.parent)for(var o=0;i.children[o]!=n;++o)s+=i.children[o].chunkSize();return s+n.first}function W(e,n){var s=e.first;e:do{for(var i=0;i<e.children.length;++i){var o=e.children[i],d=o.height;if(n<d){e=o;continue e}n-=d,s+=o.chunkSize()}return s}while(!e.lines);for(var m=0;m<e.lines.length;++m){var y=e.lines[m],b=y.height;if(n<b)break;n-=b}return s+m}function pe(e,n){return n>=e.first&&n<e.first+e.size}function Ne(e,n){return String(e.lineNumberFormatter(n+e.firstLineNumber))}function de(e,n,s){if(s===void 0&&(s=null),!(this instanceof de))return new de(e,n,s);this.line=e,this.ch=n,this.sticky=s}function Fe(e,n){return e.line-n.line||e.ch-n.ch}function Ct(e,n){return e.sticky==n.sticky&&Fe(e,n)==0}function Jt(e){return de(e.line,e.ch)}function Sn(e,n){return Fe(e,n)<0?n:e}function oi(e,n){return Fe(e,n)<0?e:n}function Xa(e,n){return Math.max(e.first,Math.min(n,e.first+e.size-1))}function ft(e,n){if(n.line<e.first)return de(e.first,0);var s=e.first+e.size-1;return n.line>s?de(s,Xe(e,s).text.length):go(n,Xe(e,n.line).text.length)}function go(e,n){var s=e.ch;return s==null||s>n?de(e.line,n):s<0?de(e.line,0):e}function ra(e,n){for(var s=[],i=0;i<n.length;i++)s[i]=ft(e,n[i]);return s}var Fi=function(e,n){this.state=e,this.lookAhead=n},Kn=function(e,n,s,i){this.state=n,this.doc=e,this.line=s,this.maxLookAhead=i||0,this.baseTokens=null,this.baseTokenPos=1};Kn.prototype.lookAhead=function(e){var n=this.doc.getLine(this.line+e);return n!=null&&e>this.maxLookAhead&&(this.maxLookAhead=e),n},Kn.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var n=this.baseTokens[this.baseTokenPos+1];return{type:n&&n.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},Kn.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},Kn.fromSaved=function(e,n,s){return n instanceof Fi?new Kn(e,Lt(e.mode,n.state),s,n.lookAhead):new Kn(e,Lt(e.mode,n),s)},Kn.prototype.save=function(e){var n=e!==!1?Lt(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new Fi(n,this.maxLookAhead):n};function Ps(e,n,s,i){var o=[e.state.modeGen],d={};yo(e,n.text,e.doc.mode,s,function(k,O){return o.push(k,O)},d,i);for(var m=s.state,y=function(k){s.baseTokens=o;var O=e.state.overlays[k],B=1,te=0;s.state=!0,yo(e,n.text,O.mode,s,function(Z,fe){for(var xe=B;te<Z;){var Le=o[B];Le>Z&&o.splice(B,1,Z,o[B+1],Le),B+=2,te=Math.min(Z,Le)}if(fe)if(O.opaque)o.splice(xe,B-xe,Z,"overlay "+fe),B=xe+2;else for(;xe<B;xe+=2){var je=o[xe+1];o[xe+1]=(je?je+" ":"")+"overlay "+fe}},d),s.state=m,s.baseTokens=null,s.baseTokenPos=1},b=0;b<e.state.overlays.length;++b)y(b);return{styles:o,classes:d.bgClass||d.textClass?d:null}}function as(e,n,s){if(!n.styles||n.styles[0]!=e.state.modeGen){var i=Nt(e,_(n)),o=n.text.length>e.options.maxHighlightLength&&Lt(e.doc.mode,i.state),d=Ps(e,n,i);o&&(i.state=o),n.stateAfter=i.save(!o),n.styles=d.styles,d.classes?n.styleClasses=d.classes:n.styleClasses&&(n.styleClasses=null),s===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return n.styles}function Nt(e,n,s){var i=e.doc,o=e.display;if(!i.mode.startState)return new Kn(i,!0,n);var d=As(e,n,s),m=d>i.first&&Xe(i,d-1).stateAfter,y=m?Kn.fromSaved(i,m,d):new Kn(i,bi(i.mode),d);return i.iter(d,n,function(b){Wi(e,b.text,y);var k=y.line;b.stateAfter=k==n-1||k%5==0||k>=o.viewFrom&&k<o.viewTo?y.save():null,y.nextLine()}),s&&(i.modeFrontier=y.line),y}function Wi(e,n,s,i){var o=e.doc.mode,d=new Yt(n,e.options.tabSize,s);for(d.start=d.pos=i||0,n==""&&$r(o,s.state);!d.eol();)ai(o,d,s.state),d.start=d.pos}function $r(e,n){if(e.blankLine)return e.blankLine(n);if(e.innerMode){var s=os(e,n);if(s.mode.blankLine)return s.mode.blankLine(s.state)}}function ai(e,n,s,i){for(var o=0;o<10;o++){i&&(i[0]=os(e,s).mode);var d=e.token(n,s);if(n.pos>n.start)return d}throw new Error("Mode "+e.name+" failed to advance stream.")}var dr=function(e,n,s){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=n||null,this.state=s};function ia(e,n,s,i){var o=e.doc,d=o.mode,m;n=ft(o,n);var y=Xe(o,n.line),b=Nt(e,n.line,s),k=new Yt(y.text,e.options.tabSize,b),O;for(i&&(O=[]);(i||k.pos<n.ch)&&!k.eol();)k.start=k.pos,m=ai(d,k,b.state),i&&O.push(new dr(k,m,Lt(o.mode,b.state)));return i?O:new dr(k,m,b.state)}function ls(e,n){if(e)for(;;){var s=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!s)break;e=e.slice(0,s.index)+e.slice(s.index+s[0].length);var i=s[1]?"bgClass":"textClass";n[i]==null?n[i]=s[2]:new RegExp("(?:^|\\s)"+s[2]+"(?:$|\\s)").test(n[i])||(n[i]+=" "+s[2])}return e}function yo(e,n,s,i,o,d,m){var y=s.flattenSpans;y==null&&(y=e.options.flattenSpans);var b=0,k=null,O=new Yt(n,e.options.tabSize,i),B,te=e.options.addModeClass&&[null];for(n==""&&ls($r(s,i.state),d);!O.eol();){if(O.pos>e.options.maxHighlightLength?(y=!1,m&&Wi(e,n,i,O.pos),O.pos=n.length,B=null):B=ls(ai(s,O,i.state,te),d),te){var Z=te[0].name;Z&&(B="m-"+(B?Z+" "+B:Z))}if(!y||k!=B){for(;b<O.start;)b=Math.min(O.start,b+5e3),o(b,k);k=B}O.start=O.pos}for(;b<O.pos;){var fe=Math.min(O.pos,b+5e3);o(fe,k),b=fe}}function As(e,n,s){for(var i,o,d=e.doc,m=s?-1:n-(e.doc.mode.innerMode?1e3:100),y=n;y>m;--y){if(y<=d.first)return d.first;var b=Xe(d,y-1),k=b.stateAfter;if(k&&(!s||y+(k instanceof Fi?k.lookAhead:0)<=d.modeFrontier))return y;var O=Be(b.text,null,e.options.tabSize);(o==null||i>O)&&(o=y-1,i=O)}return o}function hr(e,n){if(e.modeFrontier=Math.min(e.modeFrontier,n),!(e.highlightFrontier<n-10)){for(var s=e.first,i=n-1;i>s;i--){var o=Xe(e,i).stateAfter;if(o&&(!(o instanceof Fi)||i+o.lookAhead<n)){s=i+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,s)}}var Mr=!1,On=!1;function Rs(){Mr=!0}function us(){On=!0}function Or(e,n,s){this.marker=e,this.from=n,this.to=s}function Is(e,n){if(e)for(var s=0;s<e.length;++s){var i=e[s];if(i.marker==n)return i}}function sa(e,n){for(var s,i=0;i<e.length;++i)e[i]!=n&&(s||(s=[])).push(e[i]);return s}function Hi(e,n,s){var i=s&&window.WeakSet&&(s.markedSpans||(s.markedSpans=new WeakSet));i&&e.markedSpans&&i.has(e.markedSpans)?e.markedSpans.push(n):(e.markedSpans=e.markedSpans?e.markedSpans.concat([n]):[n],i&&i.add(e.markedSpans)),n.marker.attachLine(e)}function Ms(e,n,s){var i;if(e)for(var o=0;o<e.length;++o){var d=e[o],m=d.marker,y=d.from==null||(m.inclusiveLeft?d.from<=n:d.from<n);if(y||d.from==n&&m.type=="bookmark"&&(!s||!d.marker.insertLeft)){var b=d.to==null||(m.inclusiveRight?d.to>=n:d.to>n);(i||(i=[])).push(new Or(m,d.from,b?null:d.to))}}return i}function vo(e,n,s){var i;if(e)for(var o=0;o<e.length;++o){var d=e[o],m=d.marker,y=d.to==null||(m.inclusiveRight?d.to>=n:d.to>n);if(y||d.from==n&&m.type=="bookmark"&&(!s||d.marker.insertLeft)){var b=d.from==null||(m.inclusiveLeft?d.from<=n:d.from<n);(i||(i=[])).push(new Or(m,b?null:d.from-n,d.to==null?null:d.to-n))}}return i}function Ce(e,n){if(n.full)return null;var s=pe(e,n.from.line)&&Xe(e,n.from.line).markedSpans,i=pe(e,n.to.line)&&Xe(e,n.to.line).markedSpans;if(!s&&!i)return null;var o=n.from.ch,d=n.to.ch,m=Fe(n.from,n.to)==0,y=Ms(s,o,m),b=vo(i,d,m),k=n.text.length==1,O=Ke(n.text).length+(k?o:0);if(y)for(var B=0;B<y.length;++B){var te=y[B];if(te.to==null){var Z=Is(b,te.marker);Z?k&&(te.to=Z.to==null?null:Z.to+O):te.to=o}}if(b)for(var fe=0;fe<b.length;++fe){var xe=b[fe];if(xe.to!=null&&(xe.to+=O),xe.from==null){var Le=Is(y,xe.marker);Le||(xe.from=O,k&&(y||(y=[])).push(xe))}else xe.from+=O,k&&(y||(y=[])).push(xe)}y&&(y=R(y)),b&&b!=y&&(b=R(b));var je=[y];if(!k){var De=n.text.length-2,Ie;if(De>0&&y)for(var Ue=0;Ue<y.length;++Ue)y[Ue].to==null&&(Ie||(Ie=[])).push(new Or(y[Ue].marker,null,null));for(var ot=0;ot<De;++ot)je.push(Ie);je.push(b)}return je}function R(e){for(var n=0;n<e.length;++n){var s=e[n];s.from!=null&&s.from==s.to&&s.marker.clearWhenEmpty!==!1&&e.splice(n--,1)}return e.length?e:null}function J(e,n,s){var i=null;if(e.iter(n.line,s.line+1,function(Z){if(Z.markedSpans)for(var fe=0;fe<Z.markedSpans.length;++fe){var xe=Z.markedSpans[fe].marker;xe.readOnly&&(!i||Ge(i,xe)==-1)&&(i||(i=[])).push(xe)}}),!i)return null;for(var o=[{from:n,to:s}],d=0;d<i.length;++d)for(var m=i[d],y=m.find(0),b=0;b<o.length;++b){var k=o[b];if(!(Fe(k.to,y.from)<0||Fe(k.from,y.to)>0)){var O=[b,1],B=Fe(k.from,y.from),te=Fe(k.to,y.to);(B<0||!m.inclusiveLeft&&!B)&&O.push({from:k.from,to:y.from}),(te>0||!m.inclusiveRight&&!te)&&O.push({from:y.to,to:k.to}),o.splice.apply(o,O),b+=O.length-3}}return o}function be(e){var n=e.markedSpans;if(n){for(var s=0;s<n.length;++s)n[s].marker.detachLine(e);e.markedSpans=null}}function we(e,n){if(n){for(var s=0;s<n.length;++s)n[s].marker.attachLine(e);e.markedSpans=n}}function Ze(e){return e.inclusiveLeft?-1:0}function ut(e){return e.inclusiveRight?1:0}function kt(e,n){var s=e.lines.length-n.lines.length;if(s!=0)return s;var i=e.find(),o=n.find(),d=Fe(i.from,o.from)||Ze(e)-Ze(n);if(d)return-d;var m=Fe(i.to,o.to)||ut(e)-ut(n);return m||n.id-e.id}function gn(e,n){var s=On&&e.markedSpans,i;if(s)for(var o=void 0,d=0;d<s.length;++d)o=s[d],o.marker.collapsed&&(n?o.from:o.to)==null&&(!i||kt(i,o.marker)<0)&&(i=o.marker);return i}function pr(e){return gn(e,!0)}function cn(e){return gn(e,!1)}function $n(e,n){var s=On&&e.markedSpans,i;if(s)for(var o=0;o<s.length;++o){var d=s[o];d.marker.collapsed&&(d.from==null||d.from<n)&&(d.to==null||d.to>n)&&(!i||kt(i,d.marker)<0)&&(i=d.marker)}return i}function wi(e,n,s,i,o){var d=Xe(e,n),m=On&&d.markedSpans;if(m)for(var y=0;y<m.length;++y){var b=m[y];if(b.marker.collapsed){var k=b.marker.find(0),O=Fe(k.from,s)||Ze(b.marker)-Ze(o),B=Fe(k.to,i)||ut(b.marker)-ut(o);if(!(O>=0&&B<=0||O<=0&&B>=0)&&(O<=0&&(b.marker.inclusiveRight&&o.inclusiveLeft?Fe(k.to,s)>=0:Fe(k.to,s)>0)||O>=0&&(b.marker.inclusiveRight&&o.inclusiveLeft?Fe(k.from,i)<=0:Fe(k.from,i)<0)))return!0}}}function Pt(e){for(var n;n=pr(e);)e=n.find(-1,!0).line;return e}function xo(e){for(var n;n=cn(e);)e=n.find(1,!0).line;return e}function Qa(e){for(var n,s;n=cn(e);)e=n.find(1,!0).line,(s||(s=[])).push(e);return s}function Za(e,n){var s=Xe(e,n),i=Pt(s);return s==i?n:_(i)}function oa(e,n){if(n>e.lastLine())return n;var s=Xe(e,n),i;if(!li(e,s))return n;for(;i=cn(s);)s=i.find(1,!0).line;return _(s)+1}function li(e,n){var s=On&&n.markedSpans;if(s){for(var i=void 0,o=0;o<s.length;++o)if(i=s[o],!!i.marker.collapsed){if(i.from==null)return!0;if(!i.marker.widgetNode&&i.from==0&&i.marker.inclusiveLeft&&Ja(e,n,i))return!0}}}function Ja(e,n,s){if(s.to==null){var i=s.marker.find(1,!0);return Ja(e,i.line,Is(i.line.markedSpans,s.marker))}if(s.marker.inclusiveRight&&s.to==n.text.length)return!0;for(var o=void 0,d=0;d<n.markedSpans.length;++d)if(o=n.markedSpans[d],o.marker.collapsed&&!o.marker.widgetNode&&o.from==s.to&&(o.to==null||o.to!=s.from)&&(o.marker.inclusiveLeft||s.marker.inclusiveRight)&&Ja(e,n,o))return!0}function Cn(e){e=Pt(e);for(var n=0,s=e.parent,i=0;i<s.lines.length;++i){var o=s.lines[i];if(o==e)break;n+=o.height}for(var d=s.parent;d;s=d,d=s.parent)for(var m=0;m<d.children.length;++m){var y=d.children[m];if(y==s)break;n+=y.height}return n}function Bi(e){if(e.height==0)return 0;for(var n=e.text.length,s,i=e;s=pr(i);){var o=s.find(0,!0);i=o.from.line,n+=o.from.ch-o.to.ch}for(i=e;s=cn(i);){var d=s.find(0,!0);n-=i.text.length-d.from.ch,i=d.to.line,n+=i.text.length-d.to.ch}return n}function aa(e){var n=e.display,s=e.doc;n.maxLine=Xe(s,s.first),n.maxLineLength=Bi(n.maxLine),n.maxLineChanged=!0,s.iter(function(i){var o=Bi(i);o>n.maxLineLength&&(n.maxLineLength=o,n.maxLine=i)})}var ki=function(e,n,s){this.text=e,we(this,n),this.height=s?s(this):1};ki.prototype.lineNo=function(){return _(this)},ar(ki);function Rd(e,n,s,i){e.text=n,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),e.order!=null&&(e.order=null),be(e),we(e,s);var o=i?i(e):1;o!=e.height&&Mn(e,o)}function Yl(e){e.parent=null,be(e)}var Vl={},la={};function ua(e,n){if(!e||/^\s*$/.test(e))return null;var s=n.addModeClass?la:Vl;return s[e]||(s[e]=e.replace(/\S+/g,"cm-$&"))}function Xl(e,n){var s=Q("span",null,null,A?"padding-right: .1px":null),i={pre:Q("pre",[s],"CodeMirror-line"),content:s,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};n.measure={};for(var o=0;o<=(n.rest?n.rest.length:0);o++){var d=o?n.rest[o-1]:n.line,m=void 0;i.pos=0,i.addToken=Md,qr(e.display.measure)&&(m=gt(d,e.doc.direction))&&(i.addToken=Ql(i.addToken,m)),i.map=[];var y=n!=e.display.externalMeasured&&_(d);Dd(d,i,as(e,d,y)),d.styleClasses&&(d.styleClasses.bgClass&&(i.bgClass=H(d.styleClasses.bgClass,i.bgClass||"")),d.styleClasses.textClass&&(i.textClass=H(d.styleClasses.textClass,i.textClass||""))),i.map.length==0&&i.map.push(0,0,i.content.appendChild(ri(e.display.measure))),o==0?(n.measure.map=i.map,n.measure.cache={}):((n.measure.maps||(n.measure.maps=[])).push(i.map),(n.measure.caches||(n.measure.caches=[])).push({}))}if(A){var b=i.content.lastChild;(/\bcm-tab\b/.test(b.className)||b.querySelector&&b.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return At(e,"renderLine",e,n.line,i.pre),i.pre.className&&(i.textClass=H(i.pre.className,i.textClass||"")),i}function Id(e){var n=T("span","•","cm-invalidchar");return n.title="\\u"+e.charCodeAt(0).toString(16),n.setAttribute("aria-label",n.title),n}function Md(e,n,s,i,o,d,m){if(n){var y=e.splitSpaces?Od(n,e.trailingSpace):n,b=e.cm.state.specialChars,k=!1,O;if(!b.test(n))e.col+=n.length,O=document.createTextNode(y),e.map.push(e.pos,e.pos+n.length,O),C&&L<9&&(k=!0),e.pos+=n.length;else{O=document.createDocumentFragment();for(var B=0;;){b.lastIndex=B;var te=b.exec(n),Z=te?te.index-B:n.length-B;if(Z){var fe=document.createTextNode(y.slice(B,B+Z));C&&L<9?O.appendChild(T("span",[fe])):O.appendChild(fe),e.map.push(e.pos,e.pos+Z,fe),e.col+=Z,e.pos+=Z}if(!te)break;B+=Z+1;var xe=void 0;if(te[0]=="	"){var Le=e.cm.options.tabSize,je=Le-e.col%Le;xe=O.appendChild(T("span",Zt(je),"cm-tab")),xe.setAttribute("role","presentation"),xe.setAttribute("cm-text","	"),e.col+=je}else te[0]=="\r"||te[0]==`
`?(xe=O.appendChild(T("span",te[0]=="\r"?"␍":"␤","cm-invalidchar")),xe.setAttribute("cm-text",te[0]),e.col+=1):(xe=e.cm.options.specialCharPlaceholder(te[0]),xe.setAttribute("cm-text",te[0]),C&&L<9?O.appendChild(T("span",[xe])):O.appendChild(xe),e.col+=1);e.map.push(e.pos,e.pos+1,xe),e.pos++}}if(e.trailingSpace=y.charCodeAt(n.length-1)==32,s||i||o||k||d||m){var De=s||"";i&&(De+=i),o&&(De+=o);var Ie=T("span",[O],De,d);if(m)for(var Ue in m)m.hasOwnProperty(Ue)&&Ue!="style"&&Ue!="class"&&Ie.setAttribute(Ue,m[Ue]);return e.content.appendChild(Ie)}e.content.appendChild(O)}}function Od(e,n){if(e.length>1&&!/  /.test(e))return e;for(var s=n,i="",o=0;o<e.length;o++){var d=e.charAt(o);d==" "&&s&&(o==e.length-1||e.charCodeAt(o+1)==32)&&(d=" "),i+=d,s=d==" "}return i}function Ql(e,n){return function(s,i,o,d,m,y,b){o=o?o+" cm-force-border":"cm-force-border";for(var k=s.pos,O=k+i.length;;){for(var B=void 0,te=0;te<n.length&&(B=n[te],!(B.to>k&&B.from<=k));te++);if(B.to>=O)return e(s,i,o,d,m,y,b);e(s,i.slice(0,B.to-k),o,d,null,y,b),d=null,i=i.slice(B.to-k),k=B.to}}}function uc(e,n,s,i){var o=!i&&s.widgetNode;o&&e.map.push(e.pos,e.pos+n,o),!i&&e.cm.display.input.needsContentAttribute&&(o||(o=e.content.appendChild(document.createElement("span"))),o.setAttribute("cm-marker",s.id)),o&&(e.cm.display.input.setUneditable(o),e.content.appendChild(o)),e.pos+=n,e.trailingSpace=!1}function Dd(e,n,s){var i=e.markedSpans,o=e.text,d=0;if(!i){for(var m=1;m<s.length;m+=2)n.addToken(n,o.slice(d,d=s[m]),ua(s[m+1],n.cm.options));return}for(var y=o.length,b=0,k=1,O="",B,te,Z=0,fe,xe,Le,je,De;;){if(Z==b){fe=xe=Le=te="",De=null,je=null,Z=1/0;for(var Ie=[],Ue=void 0,ot=0;ot<i.length;++ot){var Ye=i[ot],wt=Ye.marker;if(wt.type=="bookmark"&&Ye.from==b&&wt.widgetNode)Ie.push(wt);else if(Ye.from<=b&&(Ye.to==null||Ye.to>b||wt.collapsed&&Ye.to==b&&Ye.from==b)){if(Ye.to!=null&&Ye.to!=b&&Z>Ye.to&&(Z=Ye.to,xe=""),wt.className&&(fe+=" "+wt.className),wt.css&&(te=(te?te+";":"")+wt.css),wt.startStyle&&Ye.from==b&&(Le+=" "+wt.startStyle),wt.endStyle&&Ye.to==Z&&(Ue||(Ue=[])).push(wt.endStyle,Ye.to),wt.title&&((De||(De={})).title=wt.title),wt.attributes)for(var _t in wt.attributes)(De||(De={}))[_t]=wt.attributes[_t];wt.collapsed&&(!je||kt(je.marker,wt)<0)&&(je=Ye)}else Ye.from>b&&Z>Ye.from&&(Z=Ye.from)}if(Ue)for(var Bn=0;Bn<Ue.length;Bn+=2)Ue[Bn+1]==Z&&(xe+=" "+Ue[Bn]);if(!je||je.from==b)for(var nn=0;nn<Ie.length;++nn)uc(n,0,Ie[nn]);if(je&&(je.from||0)==b){if(uc(n,(je.to==null?y+1:je.to)-b,je.marker,je.from==null),je.to==null)return;je.to==b&&(je=!1)}}if(b>=y)break;for(var vr=Math.min(y,Z);;){if(O){var rr=b+O.length;if(!je){var vn=rr>vr?O.slice(0,vr-b):O;n.addToken(n,vn,B?B+fe:fe,Le,b+vn.length==Z?xe:"",te,De)}if(rr>=vr){O=O.slice(vr-b),b=vr;break}b=rr,Le=""}O=o.slice(d,d=s[k++]),B=ua(s[k++],n.cm.options)}}}function cc(e,n,s){this.line=n,this.rest=Qa(n),this.size=this.rest?_(Ke(this.rest))-s+1:1,this.node=this.text=null,this.hidden=li(e,n)}function el(e,n,s){for(var i=[],o,d=n;d<s;d=o){var m=new cc(e.doc,Xe(e.doc,d),d);o=d+m.size,i.push(m)}return i}var bo=null;function dc(e){bo?bo.ops.push(e):e.ownsGroup=bo={ops:[e],delayedCallbacks:[]}}function zd(e){var n=e.delayedCallbacks,s=0;do{for(;s<n.length;s++)n[s].call(null);for(var i=0;i<e.ops.length;i++){var o=e.ops[i];if(o.cursorActivityHandlers)for(;o.cursorActivityCalled<o.cursorActivityHandlers.length;)o.cursorActivityHandlers[o.cursorActivityCalled++].call(null,o.cm)}}while(s<n.length)}function Fd(e,n){var s=e.ownsGroup;if(s)try{zd(s)}finally{bo=null,n(s)}}var ca=null;function Dn(e,n){var s=Tr(e,n);if(s.length){var i=Array.prototype.slice.call(arguments,2),o;bo?o=bo.delayedCallbacks:ca?o=ca:(o=ca=[],setTimeout(Zl,0));for(var d=function(y){o.push(function(){return s[y].apply(null,i)})},m=0;m<s.length;++m)d(m)}}function Zl(){var e=ca;ca=null;for(var n=0;n<e.length;++n)e[n]()}function hc(e,n,s,i){for(var o=0;o<n.changes.length;o++){var d=n.changes[o];d=="text"?Hd(e,n):d=="gutter"?pc(e,n,s,i):d=="class"?eu(e,n):d=="widget"&&Bd(e,n,i)}n.changes=null}function da(e){return e.node==e.text&&(e.node=T("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),C&&L<8&&(e.node.style.zIndex=2)),e.node}function Wd(e,n){var s=n.bgClass?n.bgClass+" "+(n.line.bgClass||""):n.line.bgClass;if(s&&(s+=" CodeMirror-linebackground"),n.background)s?n.background.className=s:(n.background.parentNode.removeChild(n.background),n.background=null);else if(s){var i=da(n);n.background=i.insertBefore(T("div",null,s),i.firstChild),e.display.input.setUneditable(n.background)}}function Jl(e,n){var s=e.display.externalMeasured;return s&&s.line==n.line?(e.display.externalMeasured=null,n.measure=s.measure,s.built):Xl(e,n)}function Hd(e,n){var s=n.text.className,i=Jl(e,n);n.text==n.node&&(n.node=i.pre),n.text.parentNode.replaceChild(i.pre,n.text),n.text=i.pre,i.bgClass!=n.bgClass||i.textClass!=n.textClass?(n.bgClass=i.bgClass,n.textClass=i.textClass,eu(e,n)):s&&(n.text.className=s)}function eu(e,n){Wd(e,n),n.line.wrapClass?da(n).className=n.line.wrapClass:n.node!=n.text&&(n.node.className="");var s=n.textClass?n.textClass+" "+(n.line.textClass||""):n.line.textClass;n.text.className=s||""}function pc(e,n,s,i){if(n.gutter&&(n.node.removeChild(n.gutter),n.gutter=null),n.gutterBackground&&(n.node.removeChild(n.gutterBackground),n.gutterBackground=null),n.line.gutterClass){var o=da(n);n.gutterBackground=T("div",null,"CodeMirror-gutter-background "+n.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(n.gutterBackground),o.insertBefore(n.gutterBackground,n.text)}var d=n.line.gutterMarkers;if(e.options.lineNumbers||d){var m=da(n),y=n.gutter=T("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(y.setAttribute("aria-hidden","true"),e.display.input.setUneditable(y),m.insertBefore(y,n.text),n.line.gutterClass&&(y.className+=" "+n.line.gutterClass),e.options.lineNumbers&&(!d||!d["CodeMirror-linenumbers"])&&(n.lineNumber=y.appendChild(T("div",Ne(e.options,s),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),d)for(var b=0;b<e.display.gutterSpecs.length;++b){var k=e.display.gutterSpecs[b].className,O=d.hasOwnProperty(k)&&d[k];O&&y.appendChild(T("div",[O],"CodeMirror-gutter-elt","left: "+i.gutterLeft[k]+"px; width: "+i.gutterWidth[k]+"px"))}}}function Bd(e,n,s){n.alignable&&(n.alignable=null);for(var i=ie("CodeMirror-linewidget"),o=n.node.firstChild,d=void 0;o;o=d)d=o.nextSibling,i.test(o.className)&&n.node.removeChild(o);fc(e,n,s)}function Ud(e,n,s,i){var o=Jl(e,n);return n.text=n.node=o.pre,o.bgClass&&(n.bgClass=o.bgClass),o.textClass&&(n.textClass=o.textClass),eu(e,n),pc(e,n,s,i),fc(e,n,i),n.node}function fc(e,n,s){if(mc(e,n.line,n,s,!0),n.rest)for(var i=0;i<n.rest.length;i++)mc(e,n.rest[i],n,s,!1)}function mc(e,n,s,i,o){if(n.widgets)for(var d=da(s),m=0,y=n.widgets;m<y.length;++m){var b=y[m],k=T("div",[b.node],"CodeMirror-linewidget"+(b.className?" "+b.className:""));b.handleMouseEvents||k.setAttribute("cm-ignore-events","true"),tu(b,k,s,i),e.display.input.setUneditable(k),o&&b.above?d.insertBefore(k,s.gutter||s.text):d.appendChild(k),Dn(b,"redraw")}}function tu(e,n,s,i){if(e.noHScroll){(s.alignable||(s.alignable=[])).push(n);var o=i.wrapperWidth;n.style.left=i.fixedPos+"px",e.coverGutter||(o-=i.gutterTotalWidth,n.style.paddingLeft=i.gutterTotalWidth+"px"),n.style.width=o+"px"}e.coverGutter&&(n.style.zIndex=5,n.style.position="relative",e.noHScroll||(n.style.marginLeft=-i.gutterTotalWidth+"px"))}function Ui(e){if(e.height!=null)return e.height;var n=e.doc.cm;if(!n)return 0;if(!S(document.body,e.node)){var s="position: relative;";e.coverGutter&&(s+="margin-left: -"+n.display.gutters.offsetWidth+"px;"),e.noHScroll&&(s+="width: "+n.display.wrapper.clientWidth+"px;"),ve(n.display.measure,T("div",[e.node],null,s))}return e.height=e.node.parentNode.offsetHeight}function qi(e,n){for(var s=Br(n);s!=e.wrapper;s=s.parentNode)if(!s||s.nodeType==1&&s.getAttribute("cm-ignore-events")=="true"||s.parentNode==e.sizer&&s!=e.mover)return!0}function ha(e){return e.lineSpace.offsetTop}function tl(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function nu(e){if(e.cachedPaddingH)return e.cachedPaddingH;var n=ve(e.measure,T("pre","x","CodeMirror-line-like")),s=window.getComputedStyle?window.getComputedStyle(n):n.currentStyle,i={left:parseInt(s.paddingLeft),right:parseInt(s.paddingRight)};return!isNaN(i.left)&&!isNaN(i.right)&&(e.cachedPaddingH=i),i}function ui(e){return qt-e.display.nativeBarWidth}function cs(e){return e.display.scroller.clientWidth-ui(e)-e.display.barWidth}function ds(e){return e.display.scroller.clientHeight-ui(e)-e.display.barHeight}function qd(e,n,s){var i=e.options.lineWrapping,o=i&&cs(e);if(!n.measure.heights||i&&n.measure.width!=o){var d=n.measure.heights=[];if(i){n.measure.width=o;for(var m=n.text.firstChild.getClientRects(),y=0;y<m.length-1;y++){var b=m[y],k=m[y+1];Math.abs(b.bottom-k.bottom)>2&&d.push((b.bottom+k.top)/2-s.top)}}d.push(s.bottom-s.top)}}function gc(e,n,s){if(e.line==n)return{map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var i=0;i<e.rest.length;i++)if(e.rest[i]==n)return{map:e.measure.maps[i],cache:e.measure.caches[i]};for(var o=0;o<e.rest.length;o++)if(_(e.rest[o])>s)return{map:e.measure.maps[o],cache:e.measure.caches[o],before:!0}}}function Kd(e,n){n=Pt(n);var s=_(n),i=e.display.externalMeasured=new cc(e.doc,n,s);i.lineN=s;var o=i.built=Xl(e,i);return i.text=o.pre,ve(e.display.lineMeasure,o.pre),i}function ru(e,n,s,i){return Lr(e,Si(e,n),s,i)}function nl(e,n){if(n>=e.display.viewFrom&&n<e.display.viewTo)return e.display.view[_i(e,n)];var s=e.display.externalMeasured;if(s&&n>=s.lineN&&n<s.lineN+s.size)return s}function Si(e,n){var s=_(n),i=nl(e,s);i&&!i.text?i=null:i&&i.changes&&(hc(e,i,s,ll(e)),e.curOp.forceUpdate=!0),i||(i=Kd(e,n));var o=gc(i,n,s);return{line:n,view:i,rect:null,map:o.map,cache:o.cache,before:o.before,hasHeights:!1}}function Lr(e,n,s,i,o){n.before&&(s=-1);var d=s+(i||""),m;return n.cache.hasOwnProperty(d)?m=n.cache[d]:(n.rect||(n.rect=n.view.text.getBoundingClientRect()),n.hasHeights||(qd(e,n.view,n.rect),n.hasHeights=!0),m=vc(e,n,s,i),m.bogus||(n.cache[d]=m)),{left:m.left,right:m.right,top:o?m.rtop:m.top,bottom:o?m.rbottom:m.bottom}}var yc={left:0,right:0,top:0,bottom:0};function pa(e,n,s){for(var i,o,d,m,y,b,k=0;k<e.length;k+=3)if(y=e[k],b=e[k+1],n<y?(o=0,d=1,m="left"):n<b?(o=n-y,d=o+1):(k==e.length-3||n==b&&e[k+3]>n)&&(d=b-y,o=d-1,n>=b&&(m="right")),o!=null){if(i=e[k+2],y==b&&s==(i.insertLeft?"left":"right")&&(m=s),s=="left"&&o==0)for(;k&&e[k-2]==e[k-3]&&e[k-1].insertLeft;)i=e[(k-=3)+2],m="left";if(s=="right"&&o==b-y)for(;k<e.length-3&&e[k+3]==e[k+4]&&!e[k+5].insertLeft;)i=e[(k+=3)+2],m="right";break}return{node:i,start:o,end:d,collapse:m,coverStart:y,coverEnd:b}}function $d(e,n){var s=yc;if(n=="left")for(var i=0;i<e.length&&(s=e[i]).left==s.right;i++);else for(var o=e.length-1;o>=0&&(s=e[o]).left==s.right;o--);return s}function vc(e,n,s,i){var o=pa(n.map,s,i),d=o.node,m=o.start,y=o.end,b=o.collapse,k;if(d.nodeType==3){for(var O=0;O<4;O++){for(;m&&dt(n.line.text.charAt(o.coverStart+m));)--m;for(;o.coverStart+y<o.coverEnd&&dt(n.line.text.charAt(o.coverStart+y));)++y;if(C&&L<9&&m==0&&y==o.coverEnd-o.coverStart?k=d.parentNode.getBoundingClientRect():k=$d(U(d,m,y).getClientRects(),i),k.left||k.right||m==0)break;y=m,m=m-1,b="right"}C&&L<11&&(k=iu(e.display.measure,k))}else{m>0&&(b=i="right");var B;e.options.lineWrapping&&(B=d.getClientRects()).length>1?k=B[i=="right"?B.length-1:0]:k=d.getBoundingClientRect()}if(C&&L<9&&!m&&(!k||!k.left&&!k.right)){var te=d.parentNode.getClientRects()[0];te?k={left:te.left,right:te.left+hs(e.display),top:te.top,bottom:te.bottom}:k=yc}for(var Z=k.top-n.rect.top,fe=k.bottom-n.rect.top,xe=(Z+fe)/2,Le=n.view.measure.heights,je=0;je<Le.length-1&&!(xe<Le[je]);je++);var De=je?Le[je-1]:0,Ie=Le[je],Ue={left:(b=="right"?k.right:k.left)-n.rect.left,right:(b=="left"?k.left:k.right)-n.rect.left,top:De,bottom:Ie};return!k.left&&!k.right&&(Ue.bogus=!0),e.options.singleCursorHeightPerLine||(Ue.rtop=Z,Ue.rbottom=fe),Ue}function iu(e,n){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!mo(e))return n;var s=screen.logicalXDPI/screen.deviceXDPI,i=screen.logicalYDPI/screen.deviceYDPI;return{left:n.left*s,right:n.right*s,top:n.top*i,bottom:n.bottom*i}}function rl(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var n=0;n<e.rest.length;n++)e.measure.caches[n]={}}function su(e){e.display.externalMeasure=null,re(e.display.lineMeasure);for(var n=0;n<e.display.view.length;n++)rl(e.display.view[n])}function wo(e){su(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function ou(e){return I&&z?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function xc(e){return I&&z?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function au(e){var n=Pt(e),s=n.widgets,i=0;if(s)for(var o=0;o<s.length;++o)s[o].above&&(i+=Ui(s[o]));return i}function il(e,n,s,i,o){if(!o){var d=au(n);s.top+=d,s.bottom+=d}if(i=="line")return s;i||(i="local");var m=Cn(n);if(i=="local"?m+=ha(e.display):m-=e.display.viewOffset,i=="page"||i=="window"){var y=e.display.lineSpace.getBoundingClientRect();m+=y.top+(i=="window"?0:xc(Oe(e)));var b=y.left+(i=="window"?0:ou(Oe(e)));s.left+=b,s.right+=b}return s.top+=m,s.bottom+=m,s}function bc(e,n,s){if(s=="div")return n;var i=n.left,o=n.top;if(s=="page")i-=ou(Oe(e)),o-=xc(Oe(e));else if(s=="local"||!s){var d=e.display.sizer.getBoundingClientRect();i+=d.left,o+=d.top}var m=e.display.lineSpace.getBoundingClientRect();return{left:i-m.left,top:o-m.top}}function sl(e,n,s,i,o){return i||(i=Xe(e.doc,n.line)),il(e,i,ru(e,i,n.ch,o),s)}function _n(e,n,s,i,o,d){i=i||Xe(e.doc,n.line),o||(o=Si(e,i));function m(fe,xe){var Le=Lr(e,o,fe,xe?"right":"left",d);return xe?Le.left=Le.right:Le.right=Le.left,il(e,i,Le,s)}var y=gt(i,e.doc.direction),b=n.ch,k=n.sticky;if(b>=i.text.length?(b=i.text.length,k="before"):b<=0&&(b=0,k="after"),!y)return m(k=="before"?b-1:b,k=="before");function O(fe,xe,Le){var je=y[xe],De=je.level==1;return m(Le?fe-1:fe,De!=Le)}var B=or(y,b,k),te=Hr,Z=O(b,B,k=="before");return te!=null&&(Z.other=O(b,te,k!="before")),Z}function ko(e,n){var s=0;n=ft(e.doc,n),e.options.lineWrapping||(s=hs(e.display)*n.ch);var i=Xe(e.doc,n.line),o=Cn(i)+ha(e.display);return{left:s,right:s,top:o,bottom:o+i.height}}function ol(e,n,s,i,o){var d=de(e,n,s);return d.xRel=o,i&&(d.outside=i),d}function al(e,n,s){var i=e.doc;if(s+=e.display.viewOffset,s<0)return ol(i.first,0,null,-1,-1);var o=W(i,s),d=i.first+i.size-1;if(o>d)return ol(i.first+i.size-1,Xe(i,d).text.length,null,1,1);n<0&&(n=0);for(var m=Xe(i,o);;){var y=Gd(e,m,o,n,s),b=$n(m,y.ch+(y.xRel>0||y.outside>0?1:0));if(!b)return y;var k=b.find(1);if(k.line==o)return k;m=Xe(i,o=k.line)}}function lu(e,n,s,i){i-=au(n);var o=n.text.length,d=Xn(function(m){return Lr(e,s,m-1).bottom<=i},o,0);return o=Xn(function(m){return Lr(e,s,m).top>i},d,o),{begin:d,end:o}}function uu(e,n,s,i){s||(s=Si(e,n));var o=il(e,n,Lr(e,s,i),"line").top;return lu(e,n,s,o)}function fa(e,n,s,i){return e.bottom<=s?!1:e.top>s?!0:(i?e.left:e.right)>n}function Gd(e,n,s,i,o){o-=Cn(n);var d=Si(e,n),m=au(n),y=0,b=n.text.length,k=!0,O=gt(n,e.doc.direction);if(O){var B=(e.options.lineWrapping?So:Yd)(e,n,s,d,O,i,o);k=B.level!=1,y=k?B.from:B.to-1,b=k?B.to:B.from-1}var te=null,Z=null,fe=Xn(function(ot){var Ye=Lr(e,d,ot);return Ye.top+=m,Ye.bottom+=m,fa(Ye,i,o,!1)?(Ye.top<=o&&Ye.left<=i&&(te=ot,Z=Ye),!0):!1},y,b),xe,Le,je=!1;if(Z){var De=i-Z.left<Z.right-i,Ie=De==k;fe=te+(Ie?0:1),Le=Ie?"after":"before",xe=De?Z.left:Z.right}else{!k&&(fe==b||fe==y)&&fe++,Le=fe==0?"after":fe==n.text.length?"before":Lr(e,d,fe-(k?1:0)).bottom+m<=o==k?"after":"before";var Ue=_n(e,de(s,fe,Le),"line",n,d);xe=Ue.left,je=o<Ue.top?-1:o>=Ue.bottom?1:0}return fe=mn(n.text,fe,1),ol(s,fe,Le,je,i-xe)}function Yd(e,n,s,i,o,d,m){var y=Xn(function(B){var te=o[B],Z=te.level!=1;return fa(_n(e,de(s,Z?te.to:te.from,Z?"before":"after"),"line",n,i),d,m,!0)},0,o.length-1),b=o[y];if(y>0){var k=b.level!=1,O=_n(e,de(s,k?b.from:b.to,k?"after":"before"),"line",n,i);fa(O,d,m,!0)&&O.top>m&&(b=o[y-1])}return b}function So(e,n,s,i,o,d,m){var y=lu(e,n,i,m),b=y.begin,k=y.end;/\s/.test(n.text.charAt(k-1))&&k--;for(var O=null,B=null,te=0;te<o.length;te++){var Z=o[te];if(!(Z.from>=k||Z.to<=b)){var fe=Z.level!=1,xe=Lr(e,i,fe?Math.min(k,Z.to)-1:Math.max(b,Z.from)).right,Le=xe<d?d-xe+1e9:xe-d;(!O||B>Le)&&(O=Z,B=Le)}}return O||(O=o[o.length-1]),O.from<b&&(O={from:b,to:O.to,level:O.level}),O.to>k&&(O={from:O.from,to:k,level:O.level}),O}var Ki;function Ci(e){if(e.cachedTextHeight!=null)return e.cachedTextHeight;if(Ki==null){Ki=T("pre",null,"CodeMirror-line-like");for(var n=0;n<49;++n)Ki.appendChild(document.createTextNode("x")),Ki.appendChild(T("br"));Ki.appendChild(document.createTextNode("x"))}ve(e.measure,Ki);var s=Ki.offsetHeight/50;return s>3&&(e.cachedTextHeight=s),re(e.measure),s||1}function hs(e){if(e.cachedCharWidth!=null)return e.cachedCharWidth;var n=T("span","xxxxxxxxxx"),s=T("pre",[n],"CodeMirror-line-like");ve(e.measure,s);var i=n.getBoundingClientRect(),o=(i.right-i.left)/10;return o>2&&(e.cachedCharWidth=o),o||10}function ll(e){for(var n=e.display,s={},i={},o=n.gutters.clientLeft,d=n.gutters.firstChild,m=0;d;d=d.nextSibling,++m){var y=e.display.gutterSpecs[m].className;s[y]=d.offsetLeft+d.clientLeft+o,i[y]=d.clientWidth}return{fixedPos:Co(n),gutterTotalWidth:n.gutters.offsetWidth,gutterLeft:s,gutterWidth:i,wrapperWidth:n.wrapper.clientWidth}}function Co(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Os(e){var n=Ci(e.display),s=e.options.lineWrapping,i=s&&Math.max(5,e.display.scroller.clientWidth/hs(e.display)-3);return function(o){if(li(e.doc,o))return 0;var d=0;if(o.widgets)for(var m=0;m<o.widgets.length;m++)o.widgets[m].height&&(d+=o.widgets[m].height);return s?d+(Math.ceil(o.text.length/i)||1)*n:d+n}}function ma(e){var n=e.doc,s=Os(e);n.iter(function(i){var o=s(i);o!=i.height&&Mn(i,o)})}function ps(e,n,s,i){var o=e.display;if(!s&&Br(n).getAttribute("cm-not-content")=="true")return null;var d,m,y=o.lineSpace.getBoundingClientRect();try{d=n.clientX-y.left,m=n.clientY-y.top}catch{return null}var b=al(e,d,m),k;if(i&&b.xRel>0&&(k=Xe(e.doc,b.line).text).length==b.ch){var O=Be(k,k.length,e.options.tabSize)-k.length;b=de(b.line,Math.max(0,Math.round((d-nu(e.display).left)/hs(e.display))-O))}return b}function _i(e,n){if(n>=e.display.viewTo||(n-=e.display.viewFrom,n<0))return null;for(var s=e.display.view,i=0;i<s.length;i++)if(n-=s[i].size,n<0)return i}function er(e,n,s,i){n==null&&(n=e.doc.first),s==null&&(s=e.doc.first+e.doc.size),i||(i=0);var o=e.display;if(i&&s<o.viewTo&&(o.updateLineNumbers==null||o.updateLineNumbers>n)&&(o.updateLineNumbers=n),e.curOp.viewChanged=!0,n>=o.viewTo)On&&Za(e.doc,n)<o.viewTo&&Gi(e);else if(s<=o.viewFrom)On&&oa(e.doc,s+i)>o.viewFrom?Gi(e):(o.viewFrom+=i,o.viewTo+=i);else if(n<=o.viewFrom&&s>=o.viewTo)Gi(e);else if(n<=o.viewFrom){var d=ga(e,s,s+i,1);d?(o.view=o.view.slice(d.index),o.viewFrom=d.lineN,o.viewTo+=i):Gi(e)}else if(s>=o.viewTo){var m=ga(e,n,n,-1);m?(o.view=o.view.slice(0,m.index),o.viewTo=m.lineN):Gi(e)}else{var y=ga(e,n,n,-1),b=ga(e,s,s+i,1);y&&b?(o.view=o.view.slice(0,y.index).concat(el(e,y.lineN,b.lineN)).concat(o.view.slice(b.index)),o.viewTo+=i):Gi(e)}var k=o.externalMeasured;k&&(s<k.lineN?k.lineN+=i:n<k.lineN+k.size&&(o.externalMeasured=null))}function $i(e,n,s){e.curOp.viewChanged=!0;var i=e.display,o=e.display.externalMeasured;if(o&&n>=o.lineN&&n<o.lineN+o.size&&(i.externalMeasured=null),!(n<i.viewFrom||n>=i.viewTo)){var d=i.view[_i(e,n)];if(d.node!=null){var m=d.changes||(d.changes=[]);Ge(m,s)==-1&&m.push(s)}}}function Gi(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function ga(e,n,s,i){var o=_i(e,n),d,m=e.display.view;if(!On||s==e.doc.first+e.doc.size)return{index:o,lineN:s};for(var y=e.display.viewFrom,b=0;b<o;b++)y+=m[b].size;if(y!=n){if(i>0){if(o==m.length-1)return null;d=y+m[o].size-n,o++}else d=y-n;n+=d,s+=d}for(;Za(e.doc,s)!=s;){if(o==(i<0?0:m.length-1))return null;s+=i*m[o-(i<0?1:0)].size,o+=i}return{index:o,lineN:s}}function wc(e,n,s){var i=e.display,o=i.view;o.length==0||n>=i.viewTo||s<=i.viewFrom?(i.view=el(e,n,s),i.viewFrom=n):(i.viewFrom>n?i.view=el(e,n,i.viewFrom).concat(i.view):i.viewFrom<n&&(i.view=i.view.slice(_i(e,n))),i.viewFrom=n,i.viewTo<s?i.view=i.view.concat(el(e,i.viewTo,s)):i.viewTo>s&&(i.view=i.view.slice(0,_i(e,s)))),i.viewTo=s}function cu(e){for(var n=e.display.view,s=0,i=0;i<n.length;i++){var o=n[i];!o.hidden&&(!o.node||o.changes)&&++s}return s}function Gr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function ul(e,n){n===void 0&&(n=!0);var s=e.doc,i={},o=i.cursors=document.createDocumentFragment(),d=i.selection=document.createDocumentFragment(),m=e.options.$customCursor;m&&(n=!0);for(var y=0;y<s.sel.ranges.length;y++)if(!(!n&&y==s.sel.primIndex)){var b=s.sel.ranges[y];if(!(b.from().line>=e.display.viewTo||b.to().line<e.display.viewFrom)){var k=b.empty();if(m){var O=m(e,b);O&&ya(e,O,o)}else(k||e.options.showCursorWhenSelecting)&&ya(e,b.head,o);k||Vd(e,b,d)}}return i}function ya(e,n,s){var i=_n(e,n,"div",null,null,!e.options.singleCursorHeightPerLine),o=s.appendChild(T("div"," ","CodeMirror-cursor"));if(o.style.left=i.left+"px",o.style.top=i.top+"px",o.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var d=sl(e,n,"div",null,null),m=d.right-d.left;o.style.width=(m>0?m:e.defaultCharWidth())+"px"}if(i.other){var y=s.appendChild(T("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));y.style.display="",y.style.left=i.other.left+"px",y.style.top=i.other.top+"px",y.style.height=(i.other.bottom-i.other.top)*.85+"px"}}function cl(e,n){return e.top-n.top||e.left-n.left}function Vd(e,n,s){var i=e.display,o=e.doc,d=document.createDocumentFragment(),m=nu(e.display),y=m.left,b=Math.max(i.sizerWidth,cs(e)-i.sizer.offsetLeft)-m.right,k=o.direction=="ltr";function O(Ie,Ue,ot,Ye){Ue<0&&(Ue=0),Ue=Math.round(Ue),Ye=Math.round(Ye),d.appendChild(T("div",null,"CodeMirror-selected","position: absolute; left: "+Ie+`px;
                             top: `+Ue+"px; width: "+(ot??b-Ie)+`px;
                             height: `+(Ye-Ue)+"px"))}function B(Ie,Ue,ot){var Ye=Xe(o,Ie),wt=Ye.text.length,_t,Bn;function nn(vn,xr){return sl(e,de(Ie,vn),"div",Ye,xr)}function vr(vn,xr,Nn){var xn=uu(e,Ye,null,vn),Ot=xr=="ltr"==(Nn=="after")?"left":"right",ct=Nn=="after"?xn.begin:xn.end-(/\s/.test(Ye.text.charAt(xn.end-1))?2:1);return nn(ct,Ot)[Ot]}var rr=gt(Ye,o.direction);return _r(rr,Ue||0,ot??wt,function(vn,xr,Nn,xn){var Ot=Nn=="ltr",ct=nn(vn,Ot?"left":"right"),Dt=nn(xr-1,Ot?"right":"left"),rn=Ue==null&&vn==0,an=ot==null&&xr==wt,Bt=xn==0,br=!rr||xn==rr.length-1;if(Dt.top-ct.top<=3){var Tt=(k?rn:an)&&Bt,so=(k?an:rn)&&br,wr=Tt?y:(Ot?ct:Dt).left,Ii=so?b:(Ot?Dt:ct).right;O(wr,ct.top,Ii-wr,ct.bottom)}else{var es,An,Un,Ha;Ot?(es=k&&rn&&Bt?y:ct.left,An=k?b:vr(vn,Nn,"before"),Un=k?y:vr(xr,Nn,"after"),Ha=k&&an&&br?b:Dt.right):(es=k?vr(vn,Nn,"before"):y,An=!k&&rn&&Bt?b:ct.right,Un=!k&&an&&br?y:Dt.left,Ha=k?vr(xr,Nn,"after"):b),O(es,ct.top,An-es,ct.bottom),ct.bottom<Dt.top&&O(y,ct.bottom,null,Dt.top),O(Un,Dt.top,Ha-Un,Dt.bottom)}(!_t||cl(ct,_t)<0)&&(_t=ct),cl(Dt,_t)<0&&(_t=Dt),(!Bn||cl(ct,Bn)<0)&&(Bn=ct),cl(Dt,Bn)<0&&(Bn=Dt)}),{start:_t,end:Bn}}var te=n.from(),Z=n.to();if(te.line==Z.line)B(te.line,te.ch,Z.ch);else{var fe=Xe(o,te.line),xe=Xe(o,Z.line),Le=Pt(fe)==Pt(xe),je=B(te.line,te.ch,Le?fe.text.length+1:null).end,De=B(Z.line,Le?0:null,Z.ch).start;Le&&(je.top<De.top-2?(O(je.right,je.top,null,je.bottom),O(y,De.top,De.left,De.bottom)):O(je.right,je.top,De.left-je.right,je.bottom)),je.bottom<De.top&&O(y,je.bottom,null,De.top)}s.appendChild(d)}function Ds(e){if(e.state.focused){var n=e.display;clearInterval(n.blinker);var s=!0;n.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?n.blinker=setInterval(function(){e.hasFocus()||Wt(e),n.cursorDiv.style.visibility=(s=!s)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(n.cursorDiv.style.visibility="hidden")}}function kc(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||hl(e))}function dl(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Wt(e))},100)}function hl(e,n){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),e.options.readOnly!="nocursor"&&(e.state.focused||(At(e,"focus",e,n),e.state.focused=!0,G(e.display.wrapper,"CodeMirror-focused"),!e.curOp&&e.display.selForContextMenu!=e.doc.sel&&(e.display.input.reset(),A&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Ds(e))}function Wt(e,n){e.state.delayingBlurEvent||(e.state.focused&&(At(e,"blur",e,n),e.state.focused=!1,ke(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function _o(e){for(var n=e.display,s=n.lineDiv.offsetTop,i=Math.max(0,n.scroller.getBoundingClientRect().top),o=n.lineDiv.getBoundingClientRect().top,d=0,m=0;m<n.view.length;m++){var y=n.view[m],b=e.options.lineWrapping,k=void 0,O=0;if(!y.hidden){if(o+=y.line.height,C&&L<8){var B=y.node.offsetTop+y.node.offsetHeight;k=B-s,s=B}else{var te=y.node.getBoundingClientRect();k=te.bottom-te.top,!b&&y.text.firstChild&&(O=y.text.firstChild.getBoundingClientRect().right-te.left-1)}var Z=y.line.height-k;if((Z>.005||Z<-.005)&&(o<i&&(d-=Z),Mn(y.line,k),va(y.line),y.rest))for(var fe=0;fe<y.rest.length;fe++)va(y.rest[fe]);if(O>e.display.sizerWidth){var xe=Math.ceil(O/hs(e.display));xe>e.display.maxLineLength&&(e.display.maxLineLength=xe,e.display.maxLine=y.line,e.display.maxLineChanged=!0)}}}Math.abs(d)>2&&(n.scroller.scrollTop+=d)}function va(e){if(e.widgets)for(var n=0;n<e.widgets.length;++n){var s=e.widgets[n],i=s.node.parentNode;i&&(s.height=i.offsetHeight)}}function fs(e,n,s){var i=s&&s.top!=null?Math.max(0,s.top):e.scroller.scrollTop;i=Math.floor(i-ha(e));var o=s&&s.bottom!=null?s.bottom:i+e.wrapper.clientHeight,d=W(n,i),m=W(n,o);if(s&&s.ensure){var y=s.ensure.from.line,b=s.ensure.to.line;y<d?(d=y,m=W(n,Cn(Xe(n,y))+e.wrapper.clientHeight)):Math.min(b,n.lastLine())>=m&&(d=W(n,Cn(Xe(n,b))-e.wrapper.clientHeight),m=b)}return{from:d,to:Math.max(m,d+1)}}function Sc(e,n){if(!Rt(e,"scrollCursorIntoView")){var s=e.display,i=s.sizer.getBoundingClientRect(),o=null,d=s.wrapper.ownerDocument;if(n.top+i.top<0?o=!0:n.bottom+i.top>(d.defaultView.innerHeight||d.documentElement.clientHeight)&&(o=!1),o!=null&&!D){var m=T("div","​",null,`position: absolute;
                         top: `+(n.top-s.viewOffset-ha(e.display))+`px;
                         height: `+(n.bottom-n.top+ui(e)+s.barHeight)+`px;
                         left: `+n.left+"px; width: "+Math.max(2,n.right-n.left)+"px;");e.display.lineSpace.appendChild(m),m.scrollIntoView(o),e.display.lineSpace.removeChild(m)}}}function du(e,n,s,i){i==null&&(i=0);var o;!e.options.lineWrapping&&n==s&&(s=n.sticky=="before"?de(n.line,n.ch+1,"before"):n,n=n.ch?de(n.line,n.sticky=="before"?n.ch-1:n.ch,"after"):n);for(var d=0;d<5;d++){var m=!1,y=_n(e,n),b=!s||s==n?y:_n(e,s);o={left:Math.min(y.left,b.left),top:Math.min(y.top,b.top)-i,right:Math.max(y.left,b.left),bottom:Math.max(y.bottom,b.bottom)+i};var k=To(e,o),O=e.doc.scrollTop,B=e.doc.scrollLeft;if(k.scrollTop!=null&&(gs(e,k.scrollTop),Math.abs(e.doc.scrollTop-O)>1&&(m=!0)),k.scrollLeft!=null&&(Yi(e,k.scrollLeft),Math.abs(e.doc.scrollLeft-B)>1&&(m=!0)),!m)break}return o}function xa(e,n){var s=To(e,n);s.scrollTop!=null&&gs(e,s.scrollTop),s.scrollLeft!=null&&Yi(e,s.scrollLeft)}function To(e,n){var s=e.display,i=Ci(e.display);n.top<0&&(n.top=0);var o=e.curOp&&e.curOp.scrollTop!=null?e.curOp.scrollTop:s.scroller.scrollTop,d=ds(e),m={};n.bottom-n.top>d&&(n.bottom=n.top+d);var y=e.doc.height+tl(s),b=n.top<i,k=n.bottom>y-i;if(n.top<o)m.scrollTop=b?0:n.top;else if(n.bottom>o+d){var O=Math.min(n.top,(k?y:n.bottom)-d);O!=o&&(m.scrollTop=O)}var B=e.options.fixedGutter?0:s.gutters.offsetWidth,te=e.curOp&&e.curOp.scrollLeft!=null?e.curOp.scrollLeft:s.scroller.scrollLeft-B,Z=cs(e)-s.gutters.offsetWidth,fe=n.right-n.left>Z;return fe&&(n.right=n.left+Z),n.left<10?m.scrollLeft=0:n.left<te?m.scrollLeft=Math.max(0,n.left+B-(fe?0:10)):n.right>Z+te-3&&(m.scrollLeft=n.right+(fe?0:10)-Z),m}function ms(e,n){n!=null&&(wa(e),e.curOp.scrollTop=(e.curOp.scrollTop==null?e.doc.scrollTop:e.curOp.scrollTop)+n)}function zs(e){wa(e);var n=e.getCursor();e.curOp.scrollToPos={from:n,to:n,margin:e.options.cursorScrollMargin}}function ba(e,n,s){(n!=null||s!=null)&&wa(e),n!=null&&(e.curOp.scrollLeft=n),s!=null&&(e.curOp.scrollTop=s)}function Xd(e,n){wa(e),e.curOp.scrollToPos=n}function wa(e){var n=e.curOp.scrollToPos;if(n){e.curOp.scrollToPos=null;var s=ko(e,n.from),i=ko(e,n.to);ka(e,s,i,n.margin)}}function ka(e,n,s,i){var o=To(e,{left:Math.min(n.left,s.left),top:Math.min(n.top,s.top)-i,right:Math.max(n.right,s.right),bottom:Math.max(n.bottom,s.bottom)+i});ba(e,o.scrollLeft,o.scrollTop)}function gs(e,n){Math.abs(e.doc.scrollTop-n)<2||(x||Qi(e,{top:n}),pl(e,n,!0),x&&Qi(e),Hs(e,100))}function pl(e,n,s){n=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,n)),!(e.display.scroller.scrollTop==n&&!s)&&(e.doc.scrollTop=n,e.display.scrollbars.setScrollTop(n),e.display.scroller.scrollTop!=n&&(e.display.scroller.scrollTop=n))}function Yi(e,n,s,i){n=Math.max(0,Math.min(n,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),!((s?n==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-n)<2)&&!i)&&(e.doc.scrollLeft=n,pu(e),e.display.scroller.scrollLeft!=n&&(e.display.scroller.scrollLeft=n),e.display.scrollbars.setScrollLeft(n))}function Fs(e){var n=e.display,s=n.gutters.offsetWidth,i=Math.round(e.doc.height+tl(e.display));return{clientHeight:n.scroller.clientHeight,viewHeight:n.wrapper.clientHeight,scrollWidth:n.scroller.scrollWidth,clientWidth:n.scroller.clientWidth,viewWidth:n.wrapper.clientWidth,barLeft:e.options.fixedGutter?s:0,docHeight:i,scrollHeight:i+ui(e)+n.barHeight,nativeBarWidth:n.nativeBarWidth,gutterWidth:s}}var Vi=function(e,n,s){this.cm=s;var i=this.vert=T("div",[T("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),o=this.horiz=T("div",[T("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=o.tabIndex=-1,e(i),e(o),nt(i,"scroll",function(){i.clientHeight&&n(i.scrollTop,"vertical")}),nt(o,"scroll",function(){o.clientWidth&&n(o.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,C&&L<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Vi.prototype.update=function(e){var n=e.scrollWidth>e.clientWidth+1,s=e.scrollHeight>e.clientHeight+1,i=e.nativeBarWidth;if(s){this.vert.style.display="block",this.vert.style.bottom=n?i+"px":"0";var o=e.viewHeight-(n?i:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+o)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(n){this.horiz.style.display="block",this.horiz.style.right=s?i+"px":"0",this.horiz.style.left=e.barLeft+"px";var d=e.viewWidth-e.barLeft-(s?i:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+d)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(i==0&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:s?i:0,bottom:n?i:0}},Vi.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Vi.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Vi.prototype.zeroWidthHack=function(){var e=Y&&!se?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new tt,this.disableVert=new tt},Vi.prototype.enableZeroWidthBar=function(e,n,s){e.style.visibility="";function i(){var o=e.getBoundingClientRect(),d=s=="vert"?document.elementFromPoint(o.right-1,(o.top+o.bottom)/2):document.elementFromPoint((o.right+o.left)/2,o.bottom-1);d!=e?e.style.visibility="hidden":n.set(1e3,i)}n.set(1e3,i)},Vi.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var Sa=function(){};Sa.prototype.update=function(){return{bottom:0,right:0}},Sa.prototype.setScrollLeft=function(){},Sa.prototype.setScrollTop=function(){},Sa.prototype.clear=function(){};function Ws(e,n){n||(n=Fs(e));var s=e.display.barWidth,i=e.display.barHeight;Cc(e,n);for(var o=0;o<4&&s!=e.display.barWidth||i!=e.display.barHeight;o++)s!=e.display.barWidth&&e.options.lineWrapping&&_o(e),Cc(e,Fs(e)),s=e.display.barWidth,i=e.display.barHeight}function Cc(e,n){var s=e.display,i=s.scrollbars.update(n);s.sizer.style.paddingRight=(s.barWidth=i.right)+"px",s.sizer.style.paddingBottom=(s.barHeight=i.bottom)+"px",s.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(s.scrollbarFiller.style.display="block",s.scrollbarFiller.style.height=i.bottom+"px",s.scrollbarFiller.style.width=i.right+"px"):s.scrollbarFiller.style.display="",i.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(s.gutterFiller.style.display="block",s.gutterFiller.style.height=i.bottom+"px",s.gutterFiller.style.width=n.gutterWidth+"px"):s.gutterFiller.style.display=""}var _c={native:Vi,null:Sa};function fl(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&ke(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new _c[e.options.scrollbarStyle](function(n){e.display.wrapper.insertBefore(n,e.display.scrollbarFiller),nt(n,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),n.setAttribute("cm-not-content","true")},function(n,s){s=="horizontal"?Yi(e,n):gs(e,n)},e),e.display.scrollbars.addClass&&G(e.display.wrapper,e.display.scrollbars.addClass)}var ys=0;function vs(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++ys,markArrays:null},dc(e.curOp)}function Yr(e){var n=e.curOp;n&&Fd(n,function(s){for(var i=0;i<s.ops.length;i++)s.ops[i].cm.curOp=null;Ti(s)})}function Ti(e){for(var n=e.ops,s=0;s<n.length;s++)Ca(n[s]);for(var i=0;i<n.length;i++)Xi(n[i]);for(var o=0;o<n.length;o++)hu(n[o]);for(var d=0;d<n.length;d++)Qd(n[d]);for(var m=0;m<n.length;m++)Zd(n[m])}function Ca(e){var n=e.cm,s=n.display;en(n),e.updateMaxLine&&aa(n),e.mustUpdate=e.viewChanged||e.forceUpdate||e.scrollTop!=null||e.scrollToPos&&(e.scrollToPos.from.line<s.viewFrom||e.scrollToPos.to.line>=s.viewTo)||s.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new ci(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Xi(e){e.updatedDisplay=e.mustUpdate&&Gn(e.cm,e.update)}function hu(e){var n=e.cm,s=n.display;e.updatedDisplay&&_o(n),e.barMeasure=Fs(n),s.maxLineChanged&&!n.options.lineWrapping&&(e.adjustWidthTo=ru(n,s.maxLine,s.maxLine.text.length).left+3,n.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(s.scroller.clientWidth,s.sizer.offsetLeft+e.adjustWidthTo+ui(n)+n.display.barWidth),e.maxScrollLeft=Math.max(0,s.sizer.offsetLeft+e.adjustWidthTo-cs(n))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=s.input.prepareSelection())}function Qd(e){var n=e.cm;e.adjustWidthTo!=null&&(n.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<n.doc.scrollLeft&&Yi(n,Math.min(n.display.scroller.scrollLeft,e.maxScrollLeft),!0),n.display.maxLineChanged=!1);var s=e.focus&&e.focus==P(Je(n));e.preparedSelection&&n.display.input.showSelection(e.preparedSelection,s),(e.updatedDisplay||e.startHeight!=n.doc.height)&&Ws(n,e.barMeasure),e.updatedDisplay&&Eo(n,e.barMeasure),e.selectionChanged&&Ds(n),n.state.focused&&e.updateInput&&n.display.input.reset(e.typing),s&&kc(e.cm)}function Zd(e){var n=e.cm,s=n.display,i=n.doc;if(e.updatedDisplay&&fr(n,e.update),s.wheelStartX!=null&&(e.scrollTop!=null||e.scrollLeft!=null||e.scrollToPos)&&(s.wheelStartX=s.wheelStartY=null),e.scrollTop!=null&&pl(n,e.scrollTop,e.forceScroll),e.scrollLeft!=null&&Yi(n,e.scrollLeft,!0,!0),e.scrollToPos){var o=du(n,ft(i,e.scrollToPos.from),ft(i,e.scrollToPos.to),e.scrollToPos.margin);Sc(n,o)}var d=e.maybeHiddenMarkers,m=e.maybeUnhiddenMarkers;if(d)for(var y=0;y<d.length;++y)d[y].lines.length||At(d[y],"hide");if(m)for(var b=0;b<m.length;++b)m[b].lines.length&&At(m[b],"unhide");s.wrapper.offsetHeight&&(i.scrollTop=n.display.scroller.scrollTop),e.changeObjs&&At(n,"changes",n,e.changeObjs),e.update&&e.update.finish()}function Ln(e,n){if(e.curOp)return n();vs(e);try{return n()}finally{Yr(e)}}function dn(e,n){return function(){if(e.curOp)return n.apply(e,arguments);vs(e);try{return n.apply(e,arguments)}finally{Yr(e)}}}function Tn(e){return function(){if(this.curOp)return e.apply(this,arguments);vs(this);try{return e.apply(this,arguments)}finally{Yr(this)}}}function yn(e){return function(){var n=this.cm;if(!n||n.curOp)return e.apply(this,arguments);vs(n);try{return e.apply(this,arguments)}finally{Yr(n)}}}function Hs(e,n){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(n,Me(No,e))}function No(e){var n=e.doc;if(!(n.highlightFrontier>=e.display.viewTo)){var s=+new Date+e.options.workTime,i=Nt(e,n.highlightFrontier),o=[];n.iter(i.line,Math.min(n.first+n.size,e.display.viewTo+500),function(d){if(i.line>=e.display.viewFrom){var m=d.styles,y=d.text.length>e.options.maxHighlightLength?Lt(n.mode,i.state):null,b=Ps(e,d,i,!0);y&&(i.state=y),d.styles=b.styles;var k=d.styleClasses,O=b.classes;O?d.styleClasses=O:k&&(d.styleClasses=null);for(var B=!m||m.length!=d.styles.length||k!=O&&(!k||!O||k.bgClass!=O.bgClass||k.textClass!=O.textClass),te=0;!B&&te<m.length;++te)B=m[te]!=d.styles[te];B&&o.push(i.line),d.stateAfter=i.save(),i.nextLine()}else d.text.length<=e.options.maxHighlightLength&&Wi(e,d.text,i),d.stateAfter=i.line%5==0?i.save():null,i.nextLine();if(+new Date>s)return Hs(e,e.options.workDelay),!0}),n.highlightFrontier=i.line,n.modeFrontier=Math.max(n.modeFrontier,i.line),o.length&&Ln(e,function(){for(var d=0;d<o.length;d++)$i(e,o[d],"text")})}}var ci=function(e,n,s){var i=e.display;this.viewport=n,this.visible=fs(i,e.doc,n),this.editorIsHidden=!i.wrapper.offsetWidth,this.wrapperHeight=i.wrapper.clientHeight,this.wrapperWidth=i.wrapper.clientWidth,this.oldDisplayWidth=cs(e),this.force=s,this.dims=ll(e),this.events=[]};ci.prototype.signal=function(e,n){un(e,n)&&this.events.push(arguments)},ci.prototype.finish=function(){for(var e=0;e<this.events.length;e++)At.apply(null,this.events[e])};function en(e){var n=e.display;!n.scrollbarsClipped&&n.scroller.offsetWidth&&(n.nativeBarWidth=n.scroller.offsetWidth-n.scroller.clientWidth,n.heightForcer.style.height=ui(e)+"px",n.sizer.style.marginBottom=-n.nativeBarWidth+"px",n.sizer.style.borderRightWidth=ui(e)+"px",n.scrollbarsClipped=!0)}function Vt(e){if(e.hasFocus())return null;var n=P(Je(e));if(!n||!S(e.display.lineDiv,n))return null;var s={activeElt:n};if(window.getSelection){var i=Se(e).getSelection();i.anchorNode&&i.extend&&S(e.display.lineDiv,i.anchorNode)&&(s.anchorNode=i.anchorNode,s.anchorOffset=i.anchorOffset,s.focusNode=i.focusNode,s.focusOffset=i.focusOffset)}return s}function xs(e){if(!(!e||!e.activeElt||e.activeElt==P(Ve(e.activeElt)))&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&S(document.body,e.anchorNode)&&S(document.body,e.focusNode))){var n=e.activeElt.ownerDocument,s=n.defaultView.getSelection(),i=n.createRange();i.setEnd(e.anchorNode,e.anchorOffset),i.collapse(!1),s.removeAllRanges(),s.addRange(i),s.extend(e.focusNode,e.focusOffset)}}function Gn(e,n){var s=e.display,i=e.doc;if(n.editorIsHidden)return Gi(e),!1;if(!n.force&&n.visible.from>=s.viewFrom&&n.visible.to<=s.viewTo&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo)&&s.renderedView==s.view&&cu(e)==0)return!1;fu(e)&&(Gi(e),n.dims=ll(e));var o=i.first+i.size,d=Math.max(n.visible.from-e.options.viewportMargin,i.first),m=Math.min(o,n.visible.to+e.options.viewportMargin);s.viewFrom<d&&d-s.viewFrom<20&&(d=Math.max(i.first,s.viewFrom)),s.viewTo>m&&s.viewTo-m<20&&(m=Math.min(o,s.viewTo)),On&&(d=Za(e.doc,d),m=oa(e.doc,m));var y=d!=s.viewFrom||m!=s.viewTo||s.lastWrapHeight!=n.wrapperHeight||s.lastWrapWidth!=n.wrapperWidth;wc(e,d,m),s.viewOffset=Cn(Xe(e.doc,s.viewFrom)),e.display.mover.style.top=s.viewOffset+"px";var b=cu(e);if(!y&&b==0&&!n.force&&s.renderedView==s.view&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo))return!1;var k=Vt(e);return b>4&&(s.lineDiv.style.display="none"),jo(e,s.updateLineNumbers,n.dims),b>4&&(s.lineDiv.style.display=""),s.renderedView=s.view,xs(k),re(s.cursorDiv),re(s.selectionDiv),s.gutters.style.height=s.sizer.style.minHeight=0,y&&(s.lastWrapHeight=n.wrapperHeight,s.lastWrapWidth=n.wrapperWidth,Hs(e,400)),s.updateLineNumbers=null,!0}function fr(e,n){for(var s=n.viewport,i=!0;;i=!1){if(!i||!e.options.lineWrapping||n.oldDisplayWidth==cs(e)){if(s&&s.top!=null&&(s={top:Math.min(e.doc.height+tl(e.display)-ds(e),s.top)}),n.visible=fs(e.display,e.doc,s),n.visible.from>=e.display.viewFrom&&n.visible.to<=e.display.viewTo)break}else i&&(n.visible=fs(e.display,e.doc,s));if(!Gn(e,n))break;_o(e);var o=Fs(e);Gr(e),Ws(e,o),Eo(e,o),n.force=!1}n.signal(e,"update",e),(e.display.viewFrom!=e.display.reportedViewFrom||e.display.viewTo!=e.display.reportedViewTo)&&(n.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Qi(e,n){var s=new ci(e,n);if(Gn(e,s)){_o(e),fr(e,s);var i=Fs(e);Gr(e),Ws(e,i),Eo(e,i),s.finish()}}function jo(e,n,s){var i=e.display,o=e.options.lineNumbers,d=i.lineDiv,m=d.firstChild;function y(fe){var xe=fe.nextSibling;return A&&Y&&e.display.currentWheelTarget==fe?fe.style.display="none":fe.parentNode.removeChild(fe),xe}for(var b=i.view,k=i.viewFrom,O=0;O<b.length;O++){var B=b[O];if(!B.hidden)if(!B.node||B.node.parentNode!=d){var te=Ud(e,B,k,s);d.insertBefore(te,m)}else{for(;m!=B.node;)m=y(m);var Z=o&&n!=null&&n<=k&&B.lineNumber;B.changes&&(Ge(B.changes,"gutter")>-1&&(Z=!1),hc(e,B,k,s)),Z&&(re(B.lineNumber),B.lineNumber.appendChild(document.createTextNode(Ne(e.options,k)))),m=B.node.nextSibling}k+=B.size}for(;m;)m=y(m)}function tr(e){var n=e.gutters.offsetWidth;e.sizer.style.marginLeft=n+"px",Dn(e,"gutterChanged",e)}function Eo(e,n){e.display.sizer.style.minHeight=n.docHeight+"px",e.display.heightForcer.style.top=n.docHeight+"px",e.display.gutters.style.height=n.docHeight+e.display.barHeight+ui(e)+"px"}function pu(e){var n=e.display,s=n.view;if(!(!n.alignWidgets&&(!n.gutters.firstChild||!e.options.fixedGutter))){for(var i=Co(n)-n.scroller.scrollLeft+e.doc.scrollLeft,o=n.gutters.offsetWidth,d=i+"px",m=0;m<s.length;m++)if(!s[m].hidden){e.options.fixedGutter&&(s[m].gutter&&(s[m].gutter.style.left=d),s[m].gutterBackground&&(s[m].gutterBackground.style.left=d));var y=s[m].alignable;if(y)for(var b=0;b<y.length;b++)y[b].style.left=d}e.options.fixedGutter&&(n.gutters.style.left=i+o+"px")}}function fu(e){if(!e.options.lineNumbers)return!1;var n=e.doc,s=Ne(e.options,n.first+n.size-1),i=e.display;if(s.length!=i.lineNumChars){var o=i.measure.appendChild(T("div",[T("div",s)],"CodeMirror-linenumber CodeMirror-gutter-elt")),d=o.firstChild.offsetWidth,m=o.offsetWidth-d;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(d,i.lineGutter.offsetWidth-m)+1,i.lineNumWidth=i.lineNumInnerWidth+m,i.lineNumChars=i.lineNumInnerWidth?s.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",tr(e.display),!0}return!1}function Lo(e,n){for(var s=[],i=!1,o=0;o<e.length;o++){var d=e[o],m=null;if(typeof d!="string"&&(m=d.style,d=d.className),d=="CodeMirror-linenumbers")if(n)i=!0;else continue;s.push({className:d,style:m})}return n&&!i&&s.push({className:"CodeMirror-linenumbers",style:null}),s}function mu(e){var n=e.gutters,s=e.gutterSpecs;re(n),e.lineGutter=null;for(var i=0;i<s.length;++i){var o=s[i],d=o.className,m=o.style,y=n.appendChild(T("div",null,"CodeMirror-gutter "+d));m&&(y.style.cssText=m),d=="CodeMirror-linenumbers"&&(e.lineGutter=y,y.style.width=(e.lineNumWidth||1)+"px")}n.style.display=s.length?"":"none",tr(e)}function Dr(e){mu(e.display),er(e),pu(e)}function ml(e,n,s,i){var o=this;this.input=s,o.scrollbarFiller=T("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=T("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=Q("div",null,"CodeMirror-code"),o.selectionDiv=T("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=T("div",null,"CodeMirror-cursors"),o.measure=T("div",null,"CodeMirror-measure"),o.lineMeasure=T("div",null,"CodeMirror-measure"),o.lineSpace=Q("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none");var d=Q("div",[o.lineSpace],"CodeMirror-lines");o.mover=T("div",[d],null,"position: relative"),o.sizer=T("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=T("div",null,null,"position: absolute; height: "+qt+"px; width: 1px;"),o.gutters=T("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=T("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=T("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),I&&V===105&&(o.wrapper.style.clipPath="inset(0px)"),o.wrapper.setAttribute("translate","no"),C&&L<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),!A&&!(x&&q)&&(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=n.first,o.reportedViewFrom=o.reportedViewTo=n.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,o.gutterSpecs=Lo(i.gutters,i.lineNumbers),mu(o),s.init(o)}var Po=0,Ni=null;C?Ni=-.53:x?Ni=15:I?Ni=-.7:$&&(Ni=-1/3);function Tc(e){var n=e.wheelDeltaX,s=e.wheelDeltaY;return n==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(n=e.detail),s==null&&e.detail&&e.axis==e.VERTICAL_AXIS?s=e.detail:s==null&&(s=e.wheelDelta),{x:n,y:s}}function bs(e){var n=Tc(e);return n.x*=Ni,n.y*=Ni,n}function Bs(e,n){I&&V==102&&(e.display.chromeScrollHack==null?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout(function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""},100));var s=Tc(n),i=s.x,o=s.y,d=Ni;n.deltaMode===0&&(i=n.deltaX,o=n.deltaY,d=1);var m=e.display,y=m.scroller,b=y.scrollWidth>y.clientWidth,k=y.scrollHeight>y.clientHeight;if(i&&b||o&&k){if(o&&Y&&A){e:for(var O=n.target,B=m.view;O!=y;O=O.parentNode)for(var te=0;te<B.length;te++)if(B[te].node==O){e.display.currentWheelTarget=O;break e}}if(i&&!x&&!ne&&d!=null){o&&k&&gs(e,Math.max(0,y.scrollTop+o*d)),Yi(e,Math.max(0,y.scrollLeft+i*d)),(!o||o&&k)&&wn(n),m.wheelStartX=null;return}if(o&&d!=null){var Z=o*d,fe=e.doc.scrollTop,xe=fe+m.wrapper.clientHeight;Z<0?fe=Math.max(0,fe+Z-50):xe=Math.min(e.doc.height,xe+Z+50),Qi(e,{top:fe,bottom:xe})}Po<20&&n.deltaMode!==0&&(m.wheelStartX==null?(m.wheelStartX=y.scrollLeft,m.wheelStartY=y.scrollTop,m.wheelDX=i,m.wheelDY=o,setTimeout(function(){if(m.wheelStartX!=null){var Le=y.scrollLeft-m.wheelStartX,je=y.scrollTop-m.wheelStartY,De=je&&m.wheelDY&&je/m.wheelDY||Le&&m.wheelDX&&Le/m.wheelDX;m.wheelStartX=m.wheelStartY=null,De&&(Ni=(Ni*Po+De)/(Po+1),++Po)}},200)):(m.wheelDX+=i,m.wheelDY+=o))}}var Yn=function(e,n){this.ranges=e,this.primIndex=n};Yn.prototype.primary=function(){return this.ranges[this.primIndex]},Yn.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var n=0;n<this.ranges.length;n++){var s=this.ranges[n],i=e.ranges[n];if(!Ct(s.anchor,i.anchor)||!Ct(s.head,i.head))return!1}return!0},Yn.prototype.deepCopy=function(){for(var e=[],n=0;n<this.ranges.length;n++)e[n]=new Et(Jt(this.ranges[n].anchor),Jt(this.ranges[n].head));return new Yn(e,this.primIndex)},Yn.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Yn.prototype.contains=function(e,n){n||(n=e);for(var s=0;s<this.ranges.length;s++){var i=this.ranges[s];if(Fe(n,i.from())>=0&&Fe(e,i.to())<=0)return s}return-1};var Et=function(e,n){this.anchor=e,this.head=n};Et.prototype.from=function(){return oi(this.anchor,this.head)},Et.prototype.to=function(){return Sn(this.anchor,this.head)},Et.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function Pr(e,n,s){var i=e&&e.options.selectionsMayTouch,o=n[s];n.sort(function(te,Z){return Fe(te.from(),Z.from())}),s=Ge(n,o);for(var d=1;d<n.length;d++){var m=n[d],y=n[d-1],b=Fe(y.to(),m.from());if(i&&!m.empty()?b>0:b>=0){var k=oi(y.from(),m.from()),O=Sn(y.to(),m.to()),B=y.empty()?m.from()==m.head:y.from()==y.head;d<=s&&--s,n.splice(--d,2,new Et(B?O:k,B?k:O))}}return new Yn(n,s)}function zn(e,n){return new Yn([new Et(e,n||e)],0)}function Fn(e){return e.text?de(e.from.line+e.text.length-1,Ke(e.text).length+(e.text.length==1?e.from.ch:0)):e.to}function ws(e,n){if(Fe(e,n.from)<0)return e;if(Fe(e,n.to)<=0)return Fn(n);var s=e.line+n.text.length-(n.to.line-n.from.line)-1,i=e.ch;return e.line==n.to.line&&(i+=Fn(n).ch-n.to.ch),de(s,i)}function di(e,n){for(var s=[],i=0;i<e.sel.ranges.length;i++){var o=e.sel.ranges[i];s.push(new Et(ws(o.anchor,n),ws(o.head,n)))}return Pr(e.cm,s,e.sel.primIndex)}function ji(e,n,s){return e.line==n.line?de(s.line,e.ch-n.ch+s.ch):de(s.line+(e.line-n.line),e.ch)}function Us(e,n,s){for(var i=[],o=de(e.first,0),d=o,m=0;m<n.length;m++){var y=n[m],b=ji(y.from,o,d),k=ji(Fn(y),o,d);if(o=y.to,d=k,s=="around"){var O=e.sel.ranges[m],B=Fe(O.head,O.anchor)<0;i[m]=new Et(B?k:b,B?b:k)}else i[m]=new Et(b,b)}return new Yn(i,e.sel.primIndex)}function gl(e){e.doc.mode=zi(e.options,e.doc.modeOption),qs(e)}function qs(e){e.doc.iter(function(n){n.stateAfter&&(n.stateAfter=null),n.styles&&(n.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,Hs(e,100),e.state.modeGen++,e.curOp&&er(e)}function yl(e,n){return n.from.ch==0&&n.to.ch==0&&Ke(n.text)==""&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function mr(e,n,s,i){function o(De){return s?s[De]:null}function d(De,Ie,Ue){Rd(De,Ie,Ue,i),Dn(De,"change",De,n)}function m(De,Ie){for(var Ue=[],ot=De;ot<Ie;++ot)Ue.push(new ki(k[ot],o(ot),i));return Ue}var y=n.from,b=n.to,k=n.text,O=Xe(e,y.line),B=Xe(e,b.line),te=Ke(k),Z=o(k.length-1),fe=b.line-y.line;if(n.full)e.insert(0,m(0,k.length)),e.remove(k.length,e.size-k.length);else if(yl(e,n)){var xe=m(0,k.length-1);d(B,B.text,Z),fe&&e.remove(y.line,fe),xe.length&&e.insert(y.line,xe)}else if(O==B)if(k.length==1)d(O,O.text.slice(0,y.ch)+te+O.text.slice(b.ch),Z);else{var Le=m(1,k.length-1);Le.push(new ki(te+O.text.slice(b.ch),Z,i)),d(O,O.text.slice(0,y.ch)+k[0],o(0)),e.insert(y.line+1,Le)}else if(k.length==1)d(O,O.text.slice(0,y.ch)+k[0]+B.text.slice(b.ch),o(0)),e.remove(y.line+1,fe);else{d(O,O.text.slice(0,y.ch)+k[0],o(0)),d(B,te+B.text.slice(b.ch),Z);var je=m(1,k.length-1);fe>1&&e.remove(y.line+1,fe-1),e.insert(y.line+1,je)}Dn(e,"change",e,n)}function Pn(e,n,s){function i(o,d,m){if(o.linked)for(var y=0;y<o.linked.length;++y){var b=o.linked[y];if(b.doc!=d){var k=m&&b.sharedHist;s&&!k||(n(b.doc,k),i(b.doc,o,k))}}}i(e,null,!0)}function tn(e,n){if(n.cm)throw new Error("This document is already in use.");e.doc=n,n.cm=e,ma(e),gl(e),Vr(e),e.options.direction=n.direction,e.options.lineWrapping||aa(e),e.options.mode=n.modeOption,er(e)}function Vr(e){(e.doc.direction=="rtl"?G:ke)(e.display.lineDiv,"CodeMirror-rtl")}function Nc(e){Ln(e,function(){Vr(e),er(e)})}function _a(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function Ta(e,n){var s={from:Jt(n.from),to:Fn(n),text:si(e,n.from,n.to)};return Lc(e,s,n.from.line,n.to.line+1),Pn(e,function(i){return Lc(i,s,n.from.line,n.to.line+1)},!0),s}function vl(e){for(;e.length;){var n=Ke(e);if(n.ranges)e.pop();else break}}function jc(e,n){if(n)return vl(e.done),Ke(e.done);if(e.done.length&&!Ke(e.done).ranges)return Ke(e.done);if(e.done.length>1&&!e.done[e.done.length-2].ranges)return e.done.pop(),Ke(e.done)}function Na(e,n,s,i){var o=e.history;o.undone.length=0;var d=+new Date,m,y;if((o.lastOp==i||o.lastOrigin==n.origin&&n.origin&&(n.origin.charAt(0)=="+"&&o.lastModTime>d-(e.cm?e.cm.options.historyEventDelay:500)||n.origin.charAt(0)=="*"))&&(m=jc(o,o.lastOp==i)))y=Ke(m.changes),Fe(n.from,n.to)==0&&Fe(n.from,y.to)==0?y.to=Fn(n):m.changes.push(Ta(e,n));else{var b=Ke(o.done);for((!b||!b.ranges)&&Ro(e.sel,o.done),m={changes:[Ta(e,n)],generation:o.generation},o.done.push(m);o.done.length>o.undoDepth;)o.done.shift(),o.done[0].ranges||o.done.shift()}o.done.push(s),o.generation=++o.maxGeneration,o.lastModTime=o.lastSelTime=d,o.lastOp=o.lastSelOp=i,o.lastOrigin=o.lastSelOrigin=n.origin,y||At(e,"historyAdded")}function Ec(e,n,s,i){var o=n.charAt(0);return o=="*"||o=="+"&&s.ranges.length==i.ranges.length&&s.somethingSelected()==i.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function Ao(e,n,s,i){var o=e.history,d=i&&i.origin;s==o.lastSelOp||d&&o.lastSelOrigin==d&&(o.lastModTime==o.lastSelTime&&o.lastOrigin==d||Ec(e,d,Ke(o.done),n))?o.done[o.done.length-1]=n:Ro(n,o.done),o.lastSelTime=+new Date,o.lastSelOrigin=d,o.lastSelOp=s,i&&i.clearRedo!==!1&&vl(o.undone)}function Ro(e,n){var s=Ke(n);s&&s.ranges&&s.equals(e)||n.push(e)}function Lc(e,n,s,i){var o=n["spans_"+e.id],d=0;e.iter(Math.max(e.first,s),Math.min(e.first+e.size,i),function(m){m.markedSpans&&((o||(o=n["spans_"+e.id]={}))[d]=m.markedSpans),++d})}function ja(e){if(!e)return null;for(var n,s=0;s<e.length;++s)e[s].marker.explicitlyCleared?n||(n=e.slice(0,s)):n&&n.push(e[s]);return n?n.length?n:null:e}function xl(e,n){var s=n["spans_"+e.id];if(!s)return null;for(var i=[],o=0;o<n.text.length;++o)i.push(ja(s[o]));return i}function gu(e,n){var s=xl(e,n),i=Ce(e,n);if(!s)return i;if(!i)return s;for(var o=0;o<s.length;++o){var d=s[o],m=i[o];if(d&&m)e:for(var y=0;y<m.length;++y){for(var b=m[y],k=0;k<d.length;++k)if(d[k].marker==b.marker)continue e;d.push(b)}else m&&(s[o]=m)}return s}function Ks(e,n,s){for(var i=[],o=0;o<e.length;++o){var d=e[o];if(d.ranges){i.push(s?Yn.prototype.deepCopy.call(d):d);continue}var m=d.changes,y=[];i.push({changes:y});for(var b=0;b<m.length;++b){var k=m[b],O=void 0;if(y.push({from:k.from,to:k.to,text:k.text}),n)for(var B in k)(O=B.match(/^spans_(\d+)$/))&&Ge(n,Number(O[1]))>-1&&(Ke(y)[B]=k[B],delete k[B])}}return i}function ks(e,n,s,i){if(i){var o=e.anchor;if(s){var d=Fe(n,o)<0;d!=Fe(s,o)<0?(o=n,n=s):d!=Fe(n,s)<0&&(n=s)}return new Et(o,n)}else return new Et(s||n,n)}function Ea(e,n,s,i,o){o==null&&(o=e.cm&&(e.cm.display.shift||e.extend)),Wn(e,new Yn([ks(e.sel.primary(),n,s,o)],0),i)}function La(e,n,s){for(var i=[],o=e.cm&&(e.cm.display.shift||e.extend),d=0;d<e.sel.ranges.length;d++)i[d]=ks(e.sel.ranges[d],n[d],null,o);var m=Pr(e.cm,i,e.sel.primIndex);Wn(e,m,s)}function Io(e,n,s,i){var o=e.sel.ranges.slice(0);o[n]=s,Wn(e,Pr(e.cm,o,e.sel.primIndex),i)}function $s(e,n,s,i){Wn(e,zn(n,s),i)}function yu(e,n,s){var i={ranges:n.ranges,update:function(o){this.ranges=[];for(var d=0;d<o.length;d++)this.ranges[d]=new Et(ft(e,o[d].anchor),ft(e,o[d].head))},origin:s&&s.origin};return At(e,"beforeSelectionChange",e,i),e.cm&&At(e.cm,"beforeSelectionChange",e.cm,i),i.ranges!=n.ranges?Pr(e.cm,i.ranges,i.ranges.length-1):n}function bl(e,n,s){var i=e.history.done,o=Ke(i);o&&o.ranges?(i[i.length-1]=n,Mo(e,n,s)):Wn(e,n,s)}function Wn(e,n,s){Mo(e,n,s),Ao(e,e.sel,e.cm?e.cm.curOp.id:NaN,s)}function Mo(e,n,s){(un(e,"beforeSelectionChange")||e.cm&&un(e.cm,"beforeSelectionChange"))&&(n=yu(e,n,s));var i=s&&s.bias||(Fe(n.primary().head,e.sel.primary().head)<0?-1:1);Gs(e,Ss(e,n,i,!0)),!(s&&s.scroll===!1)&&e.cm&&e.cm.getOption("readOnly")!="nocursor"&&zs(e.cm)}function Gs(e,n){n.equals(e.sel)||(e.sel=n,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,jn(e.cm)),Dn(e,"cursorActivity",e))}function zr(e){Gs(e,Ss(e,e.sel,null,!1))}function Ss(e,n,s,i){for(var o,d=0;d<n.ranges.length;d++){var m=n.ranges[d],y=n.ranges.length==e.sel.ranges.length&&e.sel.ranges[d],b=Pa(e,m.anchor,y&&y.anchor,s,i),k=m.head==m.anchor?b:Pa(e,m.head,y&&y.head,s,i);(o||b!=m.anchor||k!=m.head)&&(o||(o=n.ranges.slice(0,d)),o[d]=new Et(b,k))}return o?Pr(e.cm,o,n.primIndex):n}function Cs(e,n,s,i,o){var d=Xe(e,n.line);if(d.markedSpans)for(var m=0;m<d.markedSpans.length;++m){var y=d.markedSpans[m],b=y.marker,k="selectLeft"in b?!b.selectLeft:b.inclusiveLeft,O="selectRight"in b?!b.selectRight:b.inclusiveRight;if((y.from==null||(k?y.from<=n.ch:y.from<n.ch))&&(y.to==null||(O?y.to>=n.ch:y.to>n.ch))){if(o&&(At(b,"beforeCursorEnter"),b.explicitlyCleared))if(d.markedSpans){--m;continue}else break;if(!b.atomic)continue;if(s){var B=b.find(i<0?1:-1),te=void 0;if((i<0?O:k)&&(B=Ei(e,B,-i,B&&B.line==n.line?d:null)),B&&B.line==n.line&&(te=Fe(B,s))&&(i<0?te<0:te>0))return Cs(e,B,n,i,o)}var Z=b.find(i<0?-1:1);return(i<0?k:O)&&(Z=Ei(e,Z,i,Z.line==n.line?d:null)),Z?Cs(e,Z,n,i,o):null}}return n}function Pa(e,n,s,i,o){var d=i||1,m=Cs(e,n,s,d,o)||!o&&Cs(e,n,s,d,!0)||Cs(e,n,s,-d,o)||!o&&Cs(e,n,s,-d,!0);return m||(e.cantEdit=!0,de(e.first,0))}function Ei(e,n,s,i){return s<0&&n.ch==0?n.line>e.first?ft(e,de(n.line-1)):null:s>0&&n.ch==(i||Xe(e,n.line)).text.length?n.line<e.first+e.size-1?de(n.line+1,0):null:new de(n.line,n.ch+s)}function Zi(e){e.setSelection(de(e.firstLine(),0),de(e.lastLine()),$t)}function wl(e,n,s){var i={canceled:!1,from:n.from,to:n.to,text:n.text,origin:n.origin,cancel:function(){return i.canceled=!0}};return s&&(i.update=function(o,d,m,y){o&&(i.from=ft(e,o)),d&&(i.to=ft(e,d)),m&&(i.text=m),y!==void 0&&(i.origin=y)}),At(e,"beforeChange",e,i),e.cm&&At(e.cm,"beforeChange",e.cm,i),i.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:i.from,to:i.to,text:i.text,origin:i.origin}}function Ys(e,n,s){if(e.cm){if(!e.cm.curOp)return dn(e.cm,Ys)(e,n,s);if(e.cm.state.suppressEdits)return}if(!((un(e,"beforeChange")||e.cm&&un(e.cm,"beforeChange"))&&(n=wl(e,n,!0),!n))){var i=Mr&&!s&&J(e,n.from,n.to);if(i)for(var o=i.length-1;o>=0;--o)Li(e,{from:i[o].from,to:i[o].to,text:o?[""]:n.text,origin:n.origin});else Li(e,n)}}function Li(e,n){if(!(n.text.length==1&&n.text[0]==""&&Fe(n.from,n.to)==0)){var s=di(e,n);Na(e,n,s,e.cm?e.cm.curOp.id:NaN),Oo(e,n,s,Ce(e,n));var i=[];Pn(e,function(o,d){!d&&Ge(i,o.history)==-1&&(zo(o.history,n),i.push(o.history)),Oo(o,n,null,Ce(o,n))})}}function hi(e,n,s){var i=e.cm&&e.cm.state.suppressEdits;if(!(i&&!s)){for(var o=e.history,d,m=e.sel,y=n=="undo"?o.done:o.undone,b=n=="undo"?o.undone:o.done,k=0;k<y.length&&(d=y[k],!(s?d.ranges&&!d.equals(e.sel):!d.ranges));k++);if(k!=y.length){for(o.lastOrigin=o.lastSelOrigin=null;;)if(d=y.pop(),d.ranges){if(Ro(d,b),s&&!d.equals(e.sel)){Wn(e,d,{clearRedo:!1});return}m=d}else if(i){y.push(d);return}else break;var O=[];Ro(m,b),b.push({changes:O,generation:o.generation}),o.generation=d.generation||++o.maxGeneration;for(var B=un(e,"beforeChange")||e.cm&&un(e.cm,"beforeChange"),te=function(xe){var Le=d.changes[xe];if(Le.origin=n,B&&!wl(e,Le,!1))return y.length=0,{};O.push(Ta(e,Le));var je=xe?di(e,Le):Ke(y);Oo(e,Le,je,gu(e,Le)),!xe&&e.cm&&e.cm.scrollIntoView({from:Le.from,to:Fn(Le)});var De=[];Pn(e,function(Ie,Ue){!Ue&&Ge(De,Ie.history)==-1&&(zo(Ie.history,Le),De.push(Ie.history)),Oo(Ie,Le,null,gu(Ie,Le))})},Z=d.changes.length-1;Z>=0;--Z){var fe=te(Z);if(fe)return fe.v}}}}function Aa(e,n){if(n!=0&&(e.first+=n,e.sel=new Yn(vt(e.sel.ranges,function(o){return new Et(de(o.anchor.line+n,o.anchor.ch),de(o.head.line+n,o.head.ch))}),e.sel.primIndex),e.cm)){er(e.cm,e.first,e.first-n,n);for(var s=e.cm.display,i=s.viewFrom;i<s.viewTo;i++)$i(e.cm,i,"gutter")}}function Oo(e,n,s,i){if(e.cm&&!e.cm.curOp)return dn(e.cm,Oo)(e,n,s,i);if(n.to.line<e.first){Aa(e,n.text.length-1-(n.to.line-n.from.line));return}if(!(n.from.line>e.lastLine())){if(n.from.line<e.first){var o=n.text.length-1-(e.first-n.from.line);Aa(e,o),n={from:de(e.first,0),to:de(n.to.line+o,n.to.ch),text:[Ke(n.text)],origin:n.origin}}var d=e.lastLine();n.to.line>d&&(n={from:n.from,to:de(d,Xe(e,d).text.length),text:[n.text[0]],origin:n.origin}),n.removed=si(e,n.from,n.to),s||(s=di(e,n)),e.cm?kl(e.cm,n,i):mr(e,n,i),Mo(e,s,$t),e.cantEdit&&Pa(e,de(e.firstLine(),0))&&(e.cantEdit=!1)}}function kl(e,n,s){var i=e.doc,o=e.display,d=n.from,m=n.to,y=!1,b=d.line;e.options.lineWrapping||(b=_(Pt(Xe(i,d.line))),i.iter(b,m.line+1,function(Z){if(Z==o.maxLine)return y=!0,!0})),i.sel.contains(n.from,n.to)>-1&&jn(e),mr(i,n,s,Os(e)),e.options.lineWrapping||(i.iter(b,d.line+n.text.length,function(Z){var fe=Bi(Z);fe>o.maxLineLength&&(o.maxLine=Z,o.maxLineLength=fe,o.maxLineChanged=!0,y=!1)}),y&&(e.curOp.updateMaxLine=!0)),hr(i,d.line),Hs(e,400);var k=n.text.length-(m.line-d.line)-1;n.full?er(e):d.line==m.line&&n.text.length==1&&!yl(e.doc,n)?$i(e,d.line,"text"):er(e,d.line,m.line+1,k);var O=un(e,"changes"),B=un(e,"change");if(B||O){var te={from:d,to:m,text:n.text,removed:n.removed,origin:n.origin};B&&Dn(e,"change",e,te),O&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(te)}e.display.selForContextMenu=null}function Vs(e,n,s,i,o){var d;i||(i=s),Fe(i,s)<0&&(d=[i,s],s=d[0],i=d[1]),typeof n=="string"&&(n=e.splitLines(n)),Ys(e,{from:s,to:i,text:n,origin:o})}function Do(e,n,s,i){s<e.line?e.line+=i:n<e.line&&(e.line=n,e.ch=0)}function pi(e,n,s,i){for(var o=0;o<e.length;++o){var d=e[o],m=!0;if(d.ranges){d.copied||(d=e[o]=d.deepCopy(),d.copied=!0);for(var y=0;y<d.ranges.length;y++)Do(d.ranges[y].anchor,n,s,i),Do(d.ranges[y].head,n,s,i);continue}for(var b=0;b<d.changes.length;++b){var k=d.changes[b];if(s<k.from.line)k.from=de(k.from.line+i,k.from.ch),k.to=de(k.to.line+i,k.to.ch);else if(n<=k.to.line){m=!1;break}}m||(e.splice(0,o+1),o=0)}}function zo(e,n){var s=n.from.line,i=n.to.line,o=n.text.length-(i-s)-1;pi(e.done,s,i,o),pi(e.undone,s,i,o)}function Ji(e,n,s,i){var o=n,d=n;return typeof n=="number"?d=Xe(e,Xa(e,n)):o=_(n),o==null?null:(i(d,o)&&e.cm&&$i(e.cm,o,s),d)}function fi(e){this.lines=e,this.parent=null;for(var n=0,s=0;s<e.length;++s)e[s].parent=this,n+=e[s].height;this.height=n}fi.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,n){for(var s=e,i=e+n;s<i;++s){var o=this.lines[s];this.height-=o.height,Yl(o),Dn(o,"delete")}this.lines.splice(e,n)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,n,s){this.height+=s,this.lines=this.lines.slice(0,e).concat(n).concat(this.lines.slice(e));for(var i=0;i<n.length;++i)n[i].parent=this},iterN:function(e,n,s){for(var i=e+n;e<i;++e)if(s(this.lines[e]))return!0}};function Xs(e){this.children=e;for(var n=0,s=0,i=0;i<e.length;++i){var o=e[i];n+=o.chunkSize(),s+=o.height,o.parent=this}this.size=n,this.height=s,this.parent=null}Xs.prototype={chunkSize:function(){return this.size},removeInner:function(e,n){this.size-=n;for(var s=0;s<this.children.length;++s){var i=this.children[s],o=i.chunkSize();if(e<o){var d=Math.min(n,o-e),m=i.height;if(i.removeInner(e,d),this.height-=m-i.height,o==d&&(this.children.splice(s--,1),i.parent=null),(n-=d)==0)break;e=0}else e-=o}if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof fi))){var y=[];this.collapse(y),this.children=[new fi(y)],this.children[0].parent=this}},collapse:function(e){for(var n=0;n<this.children.length;++n)this.children[n].collapse(e)},insertInner:function(e,n,s){this.size+=n.length,this.height+=s;for(var i=0;i<this.children.length;++i){var o=this.children[i],d=o.chunkSize();if(e<=d){if(o.insertInner(e,n,s),o.lines&&o.lines.length>50){for(var m=o.lines.length%25+25,y=m;y<o.lines.length;){var b=new fi(o.lines.slice(y,y+=25));o.height-=b.height,this.children.splice(++i,0,b),b.parent=this}o.lines=o.lines.slice(0,m),this.maybeSpill()}break}e-=d}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var n=e.children.splice(e.children.length-5,5),s=new Xs(n);if(e.parent){e.size-=s.size,e.height-=s.height;var o=Ge(e.parent.children,e);e.parent.children.splice(o+1,0,s)}else{var i=new Xs(e.children);i.parent=e,e.children=[i,s],e=i}s.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,n,s){for(var i=0;i<this.children.length;++i){var o=this.children[i],d=o.chunkSize();if(e<d){var m=Math.min(n,d-e);if(o.iterN(e,m,s))return!0;if((n-=m)==0)break;e=0}else e-=d}}};var Pi=function(e,n,s){if(s)for(var i in s)s.hasOwnProperty(i)&&(this[i]=s[i]);this.doc=e,this.node=n};Pi.prototype.clear=function(){var e=this.doc.cm,n=this.line.widgets,s=this.line,i=_(s);if(!(i==null||!n)){for(var o=0;o<n.length;++o)n[o]==this&&n.splice(o--,1);n.length||(s.widgets=null);var d=Ui(this);Mn(s,Math.max(0,s.height-d)),e&&(Ln(e,function(){vu(e,s,-d),$i(e,i,"widget")}),Dn(e,"lineWidgetCleared",e,this,i))}},Pi.prototype.changed=function(){var e=this,n=this.height,s=this.doc.cm,i=this.line;this.height=null;var o=Ui(this)-n;o&&(li(this.doc,i)||Mn(i,i.height+o),s&&Ln(s,function(){s.curOp.forceUpdate=!0,vu(s,i,o),Dn(s,"lineWidgetChanged",s,e,_(i))}))},ar(Pi);function vu(e,n,s){Cn(n)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&ms(e,s)}function xu(e,n,s,i){var o=new Pi(e,s,i),d=e.cm;return d&&o.noHScroll&&(d.display.alignWidgets=!0),Ji(e,n,"widget",function(m){var y=m.widgets||(m.widgets=[]);if(o.insertAt==null?y.push(o):y.splice(Math.min(y.length,Math.max(0,o.insertAt)),0,o),o.line=m,d&&!li(e,m)){var b=Cn(m)<e.scrollTop;Mn(m,m.height+Ui(o)),b&&ms(d,o.height),d.curOp.forceUpdate=!0}return!0}),d&&Dn(d,"lineWidgetAdded",d,o,typeof n=="number"?n:_(n)),o}var on=0,mi=function(e,n){this.lines=[],this.type=n,this.doc=e,this.id=++on};mi.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,n=e&&!e.curOp;if(n&&vs(e),un(this,"clear")){var s=this.find();s&&Dn(this,"clear",s.from,s.to)}for(var i=null,o=null,d=0;d<this.lines.length;++d){var m=this.lines[d],y=Is(m.markedSpans,this);e&&!this.collapsed?$i(e,_(m),"text"):e&&(y.to!=null&&(o=_(m)),y.from!=null&&(i=_(m))),m.markedSpans=sa(m.markedSpans,y),y.from==null&&this.collapsed&&!li(this.doc,m)&&e&&Mn(m,Ci(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var b=0;b<this.lines.length;++b){var k=Pt(this.lines[b]),O=Bi(k);O>e.display.maxLineLength&&(e.display.maxLine=k,e.display.maxLineLength=O,e.display.maxLineChanged=!0)}i!=null&&e&&this.collapsed&&er(e,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&zr(e.doc)),e&&Dn(e,"markerCleared",e,this,i,o),n&&Yr(e),this.parent&&this.parent.clear()}},mi.prototype.find=function(e,n){e==null&&this.type=="bookmark"&&(e=1);for(var s,i,o=0;o<this.lines.length;++o){var d=this.lines[o],m=Is(d.markedSpans,this);if(m.from!=null&&(s=de(n?d:_(d),m.from),e==-1))return s;if(m.to!=null&&(i=de(n?d:_(d),m.to),e==1))return i}return s&&{from:s,to:i}},mi.prototype.changed=function(){var e=this,n=this.find(-1,!0),s=this,i=this.doc.cm;!n||!i||Ln(i,function(){var o=n.line,d=_(n.line),m=nl(i,d);if(m&&(rl(m),i.curOp.selectionChanged=i.curOp.forceUpdate=!0),i.curOp.updateMaxLine=!0,!li(s.doc,o)&&s.height!=null){var y=s.height;s.height=null;var b=Ui(s)-y;b&&Mn(o,o.height+b)}Dn(i,"markerChanged",i,e)})},mi.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(!n.maybeHiddenMarkers||Ge(n.maybeHiddenMarkers,this)==-1)&&(n.maybeUnhiddenMarkers||(n.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},mi.prototype.detachLine=function(e){if(this.lines.splice(Ge(this.lines,e),1),!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(n.maybeHiddenMarkers||(n.maybeHiddenMarkers=[])).push(this)}},ar(mi);function _s(e,n,s,i,o){if(i&&i.shared)return Sl(e,n,s,i,o);if(e.cm&&!e.cm.curOp)return dn(e.cm,_s)(e,n,s,i,o);var d=new mi(e,o),m=Fe(n,s);if(i&&He(i,d,!1),m>0||m==0&&d.clearWhenEmpty!==!1)return d;if(d.replacedWith&&(d.collapsed=!0,d.widgetNode=Q("span",[d.replacedWith],"CodeMirror-widget"),i.handleMouseEvents||d.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(d.widgetNode.insertLeft=!0)),d.collapsed){if(wi(e,n.line,n,s,d)||n.line!=s.line&&wi(e,s.line,n,s,d))throw new Error("Inserting collapsed marker partially overlapping an existing one");us()}d.addToHistory&&Na(e,{from:n,to:s,origin:"markText"},e.sel,NaN);var y=n.line,b=e.cm,k;if(e.iter(y,s.line+1,function(B){b&&d.collapsed&&!b.options.lineWrapping&&Pt(B)==b.display.maxLine&&(k=!0),d.collapsed&&y!=n.line&&Mn(B,0),Hi(B,new Or(d,y==n.line?n.ch:null,y==s.line?s.ch:null),e.cm&&e.cm.curOp),++y}),d.collapsed&&e.iter(n.line,s.line+1,function(B){li(e,B)&&Mn(B,0)}),d.clearOnEnter&&nt(d,"beforeCursorEnter",function(){return d.clear()}),d.readOnly&&(Rs(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),d.collapsed&&(d.id=++on,d.atomic=!0),b){if(k&&(b.curOp.updateMaxLine=!0),d.collapsed)er(b,n.line,s.line+1);else if(d.className||d.startStyle||d.endStyle||d.css||d.attributes||d.title)for(var O=n.line;O<=s.line;O++)$i(b,O,"text");d.atomic&&zr(b.doc),Dn(b,"markerAdded",b,d)}return d}var Qs=function(e,n){this.markers=e,this.primary=n;for(var s=0;s<e.length;++s)e[s].parent=this};Qs.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();Dn(this,"clear")}},Qs.prototype.find=function(e,n){return this.primary.find(e,n)},ar(Qs);function Sl(e,n,s,i,o){i=He(i),i.shared=!1;var d=[_s(e,n,s,i,o)],m=d[0],y=i.widgetNode;return Pn(e,function(b){y&&(i.widgetNode=y.cloneNode(!0)),d.push(_s(b,ft(b,n),ft(b,s),i,o));for(var k=0;k<b.linked.length;++k)if(b.linked[k].isParent)return;m=Ke(d)}),new Qs(d,m)}function Cl(e){return e.findMarks(de(e.first,0),e.clipPos(de(e.lastLine())),function(n){return n.parent})}function Zs(e,n){for(var s=0;s<n.length;s++){var i=n[s],o=i.find(),d=e.clipPos(o.from),m=e.clipPos(o.to);if(Fe(d,m)){var y=_s(e,d,m,i.primary,i.primary.type);i.markers.push(y),y.parent=i}}}function hn(e){for(var n=function(i){var o=e[i],d=[o.primary.doc];Pn(o.primary.doc,function(b){return d.push(b)});for(var m=0;m<o.markers.length;m++){var y=o.markers[m];Ge(d,y.doc)==-1&&(y.parent=null,o.markers.splice(m--,1))}},s=0;s<e.length;s++)n(s)}var Hn=0,It=function(e,n,s,i,o){if(!(this instanceof It))return new It(e,n,s,i,o);s==null&&(s=0),Xs.call(this,[new fi([new ki("",null)])]),this.first=s,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=s;var d=de(s,0);this.sel=zn(d),this.history=new _a(null),this.id=++Hn,this.modeOption=n,this.lineSep=i,this.direction=o=="rtl"?"rtl":"ltr",this.extend=!1,typeof e=="string"&&(e=this.splitLines(e)),mr(this,{from:d,to:d,text:e}),Wn(this,zn(d),$t)};It.prototype=me(Xs.prototype,{constructor:It,iter:function(e,n,s){s?this.iterN(e-this.first,n-e,s):this.iterN(this.first,this.first+this.size,e)},insert:function(e,n){for(var s=0,i=0;i<n.length;++i)s+=n[i].height;this.insertInner(e-this.first,n,s)},remove:function(e,n){this.removeInner(e-this.first,n)},getValue:function(e){var n=cr(this,this.first,this.first+this.size);return e===!1?n:n.join(e||this.lineSeparator())},setValue:yn(function(e){var n=de(this.first,0),s=this.first+this.size-1;Ys(this,{from:n,to:de(s,Xe(this,s).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&ba(this.cm,0,0),Wn(this,zn(n),$t)}),replaceRange:function(e,n,s,i){n=ft(this,n),s=s?ft(this,s):n,Vs(this,e,n,s,i)},getRange:function(e,n,s){var i=si(this,ft(this,e),ft(this,n));return s===!1?i:s===""?i.join(""):i.join(s||this.lineSeparator())},getLine:function(e){var n=this.getLineHandle(e);return n&&n.text},getLineHandle:function(e){if(pe(this,e))return Xe(this,e)},getLineNumber:function(e){return _(e)},getLineHandleVisualStart:function(e){return typeof e=="number"&&(e=Xe(this,e)),Pt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return ft(this,e)},getCursor:function(e){var n=this.sel.primary(),s;return e==null||e=="head"?s=n.head:e=="anchor"?s=n.anchor:e=="end"||e=="to"||e===!1?s=n.to():s=n.from(),s},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:yn(function(e,n,s){$s(this,ft(this,typeof e=="number"?de(e,n||0):e),null,s)}),setSelection:yn(function(e,n,s){$s(this,ft(this,e),ft(this,n||e),s)}),extendSelection:yn(function(e,n,s){Ea(this,ft(this,e),n&&ft(this,n),s)}),extendSelections:yn(function(e,n){La(this,ra(this,e),n)}),extendSelectionsBy:yn(function(e,n){var s=vt(this.sel.ranges,e);La(this,ra(this,s),n)}),setSelections:yn(function(e,n,s){if(e.length){for(var i=[],o=0;o<e.length;o++)i[o]=new Et(ft(this,e[o].anchor),ft(this,e[o].head||e[o].anchor));n==null&&(n=Math.min(e.length-1,this.sel.primIndex)),Wn(this,Pr(this.cm,i,n),s)}}),addSelection:yn(function(e,n,s){var i=this.sel.ranges.slice(0);i.push(new Et(ft(this,e),ft(this,n||e))),Wn(this,Pr(this.cm,i,i.length-1),s)}),getSelection:function(e){for(var n=this.sel.ranges,s,i=0;i<n.length;i++){var o=si(this,n[i].from(),n[i].to());s=s?s.concat(o):o}return e===!1?s:s.join(e||this.lineSeparator())},getSelections:function(e){for(var n=[],s=this.sel.ranges,i=0;i<s.length;i++){var o=si(this,s[i].from(),s[i].to());e!==!1&&(o=o.join(e||this.lineSeparator())),n[i]=o}return n},replaceSelection:function(e,n,s){for(var i=[],o=0;o<this.sel.ranges.length;o++)i[o]=e;this.replaceSelections(i,n,s||"+input")},replaceSelections:yn(function(e,n,s){for(var i=[],o=this.sel,d=0;d<o.ranges.length;d++){var m=o.ranges[d];i[d]={from:m.from(),to:m.to(),text:this.splitLines(e[d]),origin:s}}for(var y=n&&n!="end"&&Us(this,i,n),b=i.length-1;b>=0;b--)Ys(this,i[b]);y?bl(this,y):this.cm&&zs(this.cm)}),undo:yn(function(){hi(this,"undo")}),redo:yn(function(){hi(this,"redo")}),undoSelection:yn(function(){hi(this,"undo",!0)}),redoSelection:yn(function(){hi(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,n=0,s=0,i=0;i<e.done.length;i++)e.done[i].ranges||++n;for(var o=0;o<e.undone.length;o++)e.undone[o].ranges||++s;return{undo:n,redo:s}},clearHistory:function(){var e=this;this.history=new _a(this.history),Pn(this,function(n){return n.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Ks(this.history.done),undone:Ks(this.history.undone)}},setHistory:function(e){var n=this.history=new _a(this.history);n.done=Ks(e.done.slice(0),null,!0),n.undone=Ks(e.undone.slice(0),null,!0)},setGutterMarker:yn(function(e,n,s){return Ji(this,e,"gutter",function(i){var o=i.gutterMarkers||(i.gutterMarkers={});return o[n]=s,!s&&qe(o)&&(i.gutterMarkers=null),!0})}),clearGutter:yn(function(e){var n=this;this.iter(function(s){s.gutterMarkers&&s.gutterMarkers[e]&&Ji(n,s,"gutter",function(){return s.gutterMarkers[e]=null,qe(s.gutterMarkers)&&(s.gutterMarkers=null),!0})})}),lineInfo:function(e){var n;if(typeof e=="number"){if(!pe(this,e)||(n=e,e=Xe(this,e),!e))return null}else if(n=_(e),n==null)return null;return{line:n,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:yn(function(e,n,s){return Ji(this,e,n=="gutter"?"gutter":"class",function(i){var o=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass";if(!i[o])i[o]=s;else{if(ie(s).test(i[o]))return!1;i[o]+=" "+s}return!0})}),removeLineClass:yn(function(e,n,s){return Ji(this,e,n=="gutter"?"gutter":"class",function(i){var o=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass",d=i[o];if(d)if(s==null)i[o]=null;else{var m=d.match(ie(s));if(!m)return!1;var y=m.index+m[0].length;i[o]=d.slice(0,m.index)+(!m.index||y==d.length?"":" ")+d.slice(y)||null}else return!1;return!0})}),addLineWidget:yn(function(e,n,s){return xu(this,e,n,s)}),removeLineWidget:function(e){e.clear()},markText:function(e,n,s){return _s(this,ft(this,e),ft(this,n),s,s&&s.type||"range")},setBookmark:function(e,n){var s={replacedWith:n&&(n.nodeType==null?n.widget:n),insertLeft:n&&n.insertLeft,clearWhenEmpty:!1,shared:n&&n.shared,handleMouseEvents:n&&n.handleMouseEvents};return e=ft(this,e),_s(this,e,e,s,"bookmark")},findMarksAt:function(e){e=ft(this,e);var n=[],s=Xe(this,e.line).markedSpans;if(s)for(var i=0;i<s.length;++i){var o=s[i];(o.from==null||o.from<=e.ch)&&(o.to==null||o.to>=e.ch)&&n.push(o.marker.parent||o.marker)}return n},findMarks:function(e,n,s){e=ft(this,e),n=ft(this,n);var i=[],o=e.line;return this.iter(e.line,n.line+1,function(d){var m=d.markedSpans;if(m)for(var y=0;y<m.length;y++){var b=m[y];!(b.to!=null&&o==e.line&&e.ch>=b.to||b.from==null&&o!=e.line||b.from!=null&&o==n.line&&b.from>=n.ch)&&(!s||s(b.marker))&&i.push(b.marker.parent||b.marker)}++o}),i},getAllMarks:function(){var e=[];return this.iter(function(n){var s=n.markedSpans;if(s)for(var i=0;i<s.length;++i)s[i].from!=null&&e.push(s[i].marker)}),e},posFromIndex:function(e){var n,s=this.first,i=this.lineSeparator().length;return this.iter(function(o){var d=o.text.length+i;if(d>e)return n=e,!0;e-=d,++s}),ft(this,de(s,n))},indexFromPos:function(e){e=ft(this,e);var n=e.ch;if(e.line<this.first||e.ch<0)return 0;var s=this.lineSeparator().length;return this.iter(this.first,e.line,function(i){n+=i.text.length+s}),n},copy:function(e){var n=new It(cr(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,n.sel=this.sel,n.extend=!1,e&&(n.history.undoDepth=this.history.undoDepth,n.setHistory(this.getHistory())),n},linkedDoc:function(e){e||(e={});var n=this.first,s=this.first+this.size;e.from!=null&&e.from>n&&(n=e.from),e.to!=null&&e.to<s&&(s=e.to);var i=new It(cr(this,n,s),e.mode||this.modeOption,n,this.lineSep,this.direction);return e.sharedHist&&(i.history=this.history),(this.linked||(this.linked=[])).push({doc:i,sharedHist:e.sharedHist}),i.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],Zs(i,Cl(this)),i},unlinkDoc:function(e){if(e instanceof Xt&&(e=e.doc),this.linked)for(var n=0;n<this.linked.length;++n){var s=this.linked[n];if(s.doc==e){this.linked.splice(n,1),e.unlinkDoc(this),hn(Cl(this));break}}if(e.history==this.history){var i=[e.id];Pn(e,function(o){return i.push(o.id)},!0),e.history=new _a(null),e.history.done=Ks(this.history.done,i),e.history.undone=Ks(this.history.undone,i)}},iterLinkedDocs:function(e){Pn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):ur(e)},lineSeparator:function(){return this.lineSep||`
`},setDirection:yn(function(e){e!="rtl"&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(n){return n.order=null}),this.cm&&Nc(this.cm))})}),It.prototype.eachLine=It.prototype.iter;var Ra=0;function Ia(e){var n=this;if(Zn(n),!(Rt(n,e)||qi(n.display,e))){wn(e),C&&(Ra=+new Date);var s=ps(n,e,!0),i=e.dataTransfer.files;if(!(!s||n.isReadOnly()))if(i&&i.length&&window.FileReader&&window.File)for(var o=i.length,d=Array(o),m=0,y=function(){++m==o&&dn(n,function(){s=ft(n.doc,s);var Z={from:s,to:s,text:n.doc.splitLines(d.filter(function(fe){return fe!=null}).join(n.doc.lineSeparator())),origin:"paste"};Ys(n.doc,Z),bl(n.doc,zn(ft(n.doc,s),ft(n.doc,Fn(Z))))})()},b=function(Z,fe){if(n.options.allowDropFileTypes&&Ge(n.options.allowDropFileTypes,Z.type)==-1){y();return}var xe=new FileReader;xe.onerror=function(){return y()},xe.onload=function(){var Le=xe.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(Le)){y();return}d[fe]=Le,y()},xe.readAsText(Z)},k=0;k<i.length;k++)b(i[k],k);else{if(n.state.draggingText&&n.doc.sel.contains(s)>-1){n.state.draggingText(e),setTimeout(function(){return n.display.input.focus()},20);return}try{var O=e.dataTransfer.getData("Text");if(O){var B;if(n.state.draggingText&&!n.state.draggingText.copy&&(B=n.listSelections()),Mo(n.doc,zn(s,s)),B)for(var te=0;te<B.length;++te)Vs(n.doc,"",B[te].anchor,B[te].head,"drag");n.replaceSelection(O,"around","paste"),n.display.input.focus()}}catch{}}}}function Ma(e,n){if(C&&(!e.state.draggingText||+new Date-Ra<100)){lr(n);return}if(!(Rt(e,n)||qi(e.display,n))&&(n.dataTransfer.setData("Text",e.getSelection()),n.dataTransfer.effectAllowed="copyMove",n.dataTransfer.setDragImage&&!$)){var s=T("img",null,null,"position: fixed; left: 0; top: 0;");s.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",ne&&(s.width=s.height=1,e.display.wrapper.appendChild(s),s._top=s.offsetTop),n.dataTransfer.setDragImage(s,0,0),ne&&s.parentNode.removeChild(s)}}function Jd(e,n){var s=ps(e,n);if(s){var i=document.createDocumentFragment();ya(e,s,i),e.display.dragCursor||(e.display.dragCursor=T("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),ve(e.display.dragCursor,i)}}function Zn(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function _l(e){if(document.getElementsByClassName){for(var n=document.getElementsByClassName("CodeMirror"),s=[],i=0;i<n.length;i++){var o=n[i].CodeMirror;o&&s.push(o)}s.length&&s[0].operation(function(){for(var d=0;d<s.length;d++)e(s[d])})}}var Tl=!1;function bu(){Tl||(Ai(),Tl=!0)}function Ai(){var e;nt(window,"resize",function(){e==null&&(e=setTimeout(function(){e=null,_l(Xr)},100))}),nt(window,"blur",function(){return _l(Wt)})}function Xr(e){var n=e.display;n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.scrollbarsClipped=!1,e.setSize()}for(var Qr={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Js=0;Js<10;Js++)Qr[Js+48]=Qr[Js+96]=String(Js);for(var Fo=65;Fo<=90;Fo++)Qr[Fo]=String.fromCharCode(Fo);for(var Wo=1;Wo<=12;Wo++)Qr[Wo+111]=Qr[Wo+63235]="F"+Wo;var Ri={};Ri.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ri.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ri.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Ri.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ri.default=Y?Ri.macDefault:Ri.pcDefault;function Pc(e){var n=e.split(/-(?!$)/);e=n[n.length-1];for(var s,i,o,d,m=0;m<n.length-1;m++){var y=n[m];if(/^(cmd|meta|m)$/i.test(y))d=!0;else if(/^a(lt)?$/i.test(y))s=!0;else if(/^(c|ctrl|control)$/i.test(y))i=!0;else if(/^s(hift)?$/i.test(y))o=!0;else throw new Error("Unrecognized modifier name: "+y)}return s&&(e="Alt-"+e),i&&(e="Ctrl-"+e),d&&(e="Cmd-"+e),o&&(e="Shift-"+e),e}function Ac(e){var n={};for(var s in e)if(e.hasOwnProperty(s)){var i=e[s];if(/^(name|fallthrough|(de|at)tach)$/.test(s))continue;if(i=="..."){delete e[s];continue}for(var o=vt(s.split(" "),Pc),d=0;d<o.length;d++){var m=void 0,y=void 0;d==o.length-1?(y=o.join(" "),m=i):(y=o.slice(0,d+1).join(" "),m="...");var b=n[y];if(!b)n[y]=m;else if(b!=m)throw new Error("Inconsistent bindings for "+y)}delete e[s]}for(var k in n)e[k]=n[k];return e}function eo(e,n,s,i){n=Ts(n);var o=n.call?n.call(e,i):n[e];if(o===!1)return"nothing";if(o==="...")return"multi";if(o!=null&&s(o))return"handled";if(n.fallthrough){if(Object.prototype.toString.call(n.fallthrough)!="[object Array]")return eo(e,n.fallthrough,s,i);for(var d=0;d<n.fallthrough.length;d++){var m=eo(e,n.fallthrough[d],s,i);if(m)return m}}}function wu(e){var n=typeof e=="string"?e:Qr[e.keyCode];return n=="Ctrl"||n=="Alt"||n=="Shift"||n=="Mod"}function ku(e,n,s){var i=e;return n.altKey&&i!="Alt"&&(e="Alt-"+e),(We?n.metaKey:n.ctrlKey)&&i!="Ctrl"&&(e="Ctrl-"+e),(We?n.ctrlKey:n.metaKey)&&i!="Mod"&&(e="Cmd-"+e),!s&&n.shiftKey&&i!="Shift"&&(e="Shift-"+e),e}function Su(e,n){if(ne&&e.keyCode==34&&e.char)return!1;var s=Qr[e.keyCode];return s==null||e.altGraphKey?!1:(e.keyCode==3&&e.code&&(s=e.code),ku(s,e,n))}function Ts(e){return typeof e=="string"?Ri[e]:e}function to(e,n){for(var s=e.doc.sel.ranges,i=[],o=0;o<s.length;o++){for(var d=n(s[o]);i.length&&Fe(d.from,Ke(i).to)<=0;){var m=i.pop();if(Fe(m.from,d.from)<0){d.from=m.from;break}}i.push(d)}Ln(e,function(){for(var y=i.length-1;y>=0;y--)Vs(e.doc,"",i[y].from,i[y].to,"+delete");zs(e)})}function Ho(e,n,s){var i=mn(e.text,n+s,s);return i<0||i>e.text.length?null:i}function Bo(e,n,s){var i=Ho(e,n.ch,s);return i==null?null:new de(n.line,i,s<0?"after":"before")}function Nl(e,n,s,i,o){if(e){n.doc.direction=="rtl"&&(o=-o);var d=gt(s,n.doc.direction);if(d){var m=o<0?Ke(d):d[0],y=o<0==(m.level==1),b=y?"after":"before",k;if(m.level>0||n.doc.direction=="rtl"){var O=Si(n,s);k=o<0?s.text.length-1:0;var B=Lr(n,O,k).top;k=Xn(function(te){return Lr(n,O,te).top==B},o<0==(m.level==1)?m.from:m.to-1,k),b=="before"&&(k=Ho(s,k,1))}else k=o<0?m.to:m.from;return new de(i,k,b)}}return new de(i,o<0?s.text.length:0,o<0?"before":"after")}function Cu(e,n,s,i){var o=gt(n,e.doc.direction);if(!o)return Bo(n,s,i);s.ch>=n.text.length?(s.ch=n.text.length,s.sticky="before"):s.ch<=0&&(s.ch=0,s.sticky="after");var d=or(o,s.ch,s.sticky),m=o[d];if(e.doc.direction=="ltr"&&m.level%2==0&&(i>0?m.to>s.ch:m.from<s.ch))return Bo(n,s,i);var y=function(je,De){return Ho(n,je instanceof de?je.ch:je,De)},b,k=function(je){return e.options.lineWrapping?(b=b||Si(e,n),uu(e,n,b,je)):{begin:0,end:n.text.length}},O=k(s.sticky=="before"?y(s,-1):s.ch);if(e.doc.direction=="rtl"||m.level==1){var B=m.level==1==i<0,te=y(s,B?1:-1);if(te!=null&&(B?te<=m.to&&te<=O.end:te>=m.from&&te>=O.begin)){var Z=B?"before":"after";return new de(s.line,te,Z)}}var fe=function(je,De,Ie){for(var Ue=function(_t,Bn){return Bn?new de(s.line,y(_t,1),"before"):new de(s.line,_t,"after")};je>=0&&je<o.length;je+=De){var ot=o[je],Ye=De>0==(ot.level!=1),wt=Ye?Ie.begin:y(Ie.end,-1);if(ot.from<=wt&&wt<ot.to||(wt=Ye?ot.from:y(ot.to,-1),Ie.begin<=wt&&wt<Ie.end))return Ue(wt,Ye)}},xe=fe(d+i,i,O);if(xe)return xe;var Le=i>0?O.end:y(O.begin,-1);return Le!=null&&!(i>0&&Le==n.text.length)&&(xe=fe(i>0?0:o.length-1,i,k(Le)),xe)?xe:null}var Uo={selectAll:Zi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),$t)},killLine:function(e){return to(e,function(n){if(n.empty()){var s=Xe(e.doc,n.head.line).text.length;return n.head.ch==s&&n.head.line<e.lastLine()?{from:n.head,to:de(n.head.line+1,0)}:{from:n.head,to:de(n.head.line,s)}}else return{from:n.from(),to:n.to()}})},deleteLine:function(e){return to(e,function(n){return{from:de(n.from().line,0),to:ft(e.doc,de(n.to().line+1,0))}})},delLineLeft:function(e){return to(e,function(n){return{from:de(n.from().line,0),to:n.from()}})},delWrappedLineLeft:function(e){return to(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return{from:i,to:n.from()}})},delWrappedLineRight:function(e){return to(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div");return{from:n.from(),to:i}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(de(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(de(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(n){return _u(e,n.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(n){return Tu(e,n.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(n){return Rc(e,n.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div")},et)},goLineLeft:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:0,top:s},"div")},et)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return i.ch<e.getLine(i.line).search(/\S/)?Tu(e,n.head):i},et)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("	")},insertSoftTab:function(e){for(var n=[],s=e.listSelections(),i=e.options.tabSize,o=0;o<s.length;o++){var d=s[o].from(),m=Be(e.getLine(d.line),d.ch,i);n.push(Zt(i-m%i))}e.replaceSelections(n)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=[],i=0;i<n.length;i++)if(n[i].empty()){var o=n[i].head,d=Xe(e.doc,o.line).text;if(d){if(o.ch==d.length&&(o=new de(o.line,o.ch-1)),o.ch>0)o=new de(o.line,o.ch+1),e.replaceRange(d.charAt(o.ch-1)+d.charAt(o.ch-2),de(o.line,o.ch-2),o,"+transpose");else if(o.line>e.doc.first){var m=Xe(e.doc,o.line-1).text;m&&(o=new de(o.line,1),e.replaceRange(d.charAt(0)+e.doc.lineSeparator()+m.charAt(m.length-1),de(o.line-1,m.length-1),o,"+transpose"))}}s.push(new Et(o,o))}e.setSelections(s)})},newlineAndIndent:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=n.length-1;s>=0;s--)e.replaceRange(e.doc.lineSeparator(),n[s].anchor,n[s].head,"+input");n=e.listSelections();for(var i=0;i<n.length;i++)e.indentLine(n[i].from().line,null,!0);zs(e)})},openLine:function(e){return e.replaceSelection(`
`,"start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function _u(e,n){var s=Xe(e.doc,n),i=Pt(s);return i!=s&&(n=_(i)),Nl(!0,e,i,n,1)}function Rc(e,n){var s=Xe(e.doc,n),i=xo(s);return i!=s&&(n=_(i)),Nl(!0,e,s,n,-1)}function Tu(e,n){var s=_u(e,n.line),i=Xe(e.doc,s.line),o=gt(i,e.doc.direction);if(!o||o[0].level==0){var d=Math.max(s.ch,i.text.search(/\S/)),m=n.line==s.line&&n.ch<=d&&n.ch;return de(s.line,m?0:d,s.sticky)}return s}function qo(e,n,s){if(typeof n=="string"&&(n=Uo[n],!n))return!1;e.display.input.ensurePolled();var i=e.display.shift,o=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),s&&(e.display.shift=!1),o=n(e)!=Qt}finally{e.display.shift=i,e.state.suppressEdits=!1}return o}function Ic(e,n,s){for(var i=0;i<e.state.keyMaps.length;i++){var o=eo(n,e.state.keyMaps[i],s,e);if(o)return o}return e.options.extraKeys&&eo(n,e.options.extraKeys,s,e)||eo(n,e.options.keyMap,s,e)}var Mc=new tt;function Ko(e,n,s,i){var o=e.state.keySeq;if(o){if(wu(n))return"handled";if(/\'$/.test(n)?e.state.keySeq=null:Mc.set(50,function(){e.state.keySeq==o&&(e.state.keySeq=null,e.display.input.reset())}),Oc(e,o+" "+n,s,i))return!0}return Oc(e,n,s,i)}function Oc(e,n,s,i){var o=Ic(e,n,i);return o=="multi"&&(e.state.keySeq=n),o=="handled"&&Dn(e,"keyHandled",e,n,s),(o=="handled"||o=="multi")&&(wn(s),Ds(e)),!!o}function Nu(e,n){var s=Su(n,!0);return s?n.shiftKey&&!e.state.keySeq?Ko(e,"Shift-"+s,n,function(i){return qo(e,i,!0)})||Ko(e,s,n,function(i){if(typeof i=="string"?/^go[A-Z]/.test(i):i.motion)return qo(e,i)}):Ko(e,s,n,function(i){return qo(e,i)}):!1}function eh(e,n,s){return Ko(e,"'"+s+"'",n,function(i){return qo(e,i,!0)})}var ju=null;function Eu(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&(n.curOp.focus=P(Je(n)),!Rt(n,e))){C&&L<11&&e.keyCode==27&&(e.returnValue=!1);var s=e.keyCode;n.display.shift=s==16||e.shiftKey;var i=Nu(n,e);ne&&(ju=i?s:null,!i&&s==88&&!Ls&&(Y?e.metaKey:e.ctrlKey)&&n.replaceSelection("",null,"cut")),x&&!Y&&!i&&s==46&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),s==18&&!/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className)&&Dc(n)}}function Dc(e){var n=e.display.lineDiv;G(n,"CodeMirror-crosshair");function s(i){(i.keyCode==18||!i.altKey)&&(ke(n,"CodeMirror-crosshair"),Gt(document,"keyup",s),Gt(document,"mouseover",s))}nt(document,"keyup",s),nt(document,"mouseover",s)}function Lu(e){e.keyCode==16&&(this.doc.sel.shift=!1),Rt(this,e)}function Oa(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&!(qi(n.display,e)||Rt(n,e)||e.ctrlKey&&!e.altKey||Y&&e.metaKey)){var s=e.keyCode,i=e.charCode;if(ne&&s==ju){ju=null,wn(e);return}if(!(ne&&(!e.which||e.which<10)&&Nu(n,e))){var o=String.fromCharCode(i??s);o!="\b"&&(eh(n,e,o)||n.display.input.onKeyPress(e))}}}var th=400,Pu=function(e,n,s){this.time=e,this.pos=n,this.button=s};Pu.prototype.compare=function(e,n,s){return this.time+th>e&&Fe(n,this.pos)==0&&s==this.button};var Da,gr;function Au(e,n){var s=+new Date;return gr&&gr.compare(s,e,n)?(Da=gr=null,"triple"):Da&&Da.compare(s,e,n)?(gr=new Pu(s,e,n),Da=null,"double"):(Da=new Pu(s,e,n),gr=null,"single")}function za(e){var n=this,s=n.display;if(!(Rt(n,e)||s.activeTouch&&s.input.supportsTouch())){if(s.input.ensurePolled(),s.shift=e.shiftKey,qi(s,e)){A||(s.scroller.draggable=!1,setTimeout(function(){return s.scroller.draggable=!0},100));return}if(!jl(n,e)){var i=ps(n,e),o=En(e),d=i?Au(i,o):"single";Se(n).focus(),o==1&&n.state.selectingText&&n.state.selectingText(e),!(i&&zc(n,o,i,d,e))&&(o==1?i?Wc(n,i,d,e):Br(e)==s.scroller&&wn(e):o==2?(i&&Ea(n.doc,i),setTimeout(function(){return s.input.focus()},20)):o==3&&(Te?n.display.input.onContextMenu(e):dl(n)))}}}function zc(e,n,s,i,o){var d="Click";return i=="double"?d="Double"+d:i=="triple"&&(d="Triple"+d),d=(n==1?"Left":n==2?"Middle":"Right")+d,Ko(e,ku(d,o),o,function(m){if(typeof m=="string"&&(m=Uo[m]),!m)return!1;var y=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),y=m(e,s)!=Qt}finally{e.state.suppressEdits=!1}return y})}function Fc(e,n,s){var i=e.getOption("configureMouse"),o=i?i(e,n,s):{};if(o.unit==null){var d=ge?s.shiftKey&&s.metaKey:s.altKey;o.unit=d?"rectangle":n=="single"?"char":n=="double"?"word":"line"}return(o.extend==null||e.doc.extend)&&(o.extend=e.doc.extend||s.shiftKey),o.addNew==null&&(o.addNew=Y?s.metaKey:s.ctrlKey),o.moveOnDrag==null&&(o.moveOnDrag=!(Y?s.altKey:s.ctrlKey)),o}function Wc(e,n,s,i){C?setTimeout(Me(kc,e),0):e.curOp.focus=P(Je(e));var o=Fc(e,s,i),d=e.doc.sel,m;e.options.dragDrop&&Nr&&!e.isReadOnly()&&s=="single"&&(m=d.contains(n))>-1&&(Fe((m=d.ranges[m]).from(),n)<0||n.xRel>0)&&(Fe(m.to(),n)>0||n.xRel<0)?Ru(e,i,n,o):Iu(e,i,n,o)}function Ru(e,n,s,i){var o=e.display,d=!1,m=dn(e,function(k){A&&(o.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:dl(e)),Gt(o.wrapper.ownerDocument,"mouseup",m),Gt(o.wrapper.ownerDocument,"mousemove",y),Gt(o.scroller,"dragstart",b),Gt(o.scroller,"drop",m),d||(wn(k),i.addNew||Ea(e.doc,s,null,null,i.extend),A&&!$||C&&L==9?setTimeout(function(){o.wrapper.ownerDocument.body.focus({preventScroll:!0}),o.input.focus()},20):o.input.focus())}),y=function(k){d=d||Math.abs(n.clientX-k.clientX)+Math.abs(n.clientY-k.clientY)>=10},b=function(){return d=!0};A&&(o.scroller.draggable=!0),e.state.draggingText=m,m.copy=!i.moveOnDrag,nt(o.wrapper.ownerDocument,"mouseup",m),nt(o.wrapper.ownerDocument,"mousemove",y),nt(o.scroller,"dragstart",b),nt(o.scroller,"drop",m),e.state.delayingBlurEvent=!0,setTimeout(function(){return o.input.focus()},20),o.scroller.dragDrop&&o.scroller.dragDrop()}function no(e,n,s){if(s=="char")return new Et(n,n);if(s=="word")return e.findWordAt(n);if(s=="line")return new Et(de(n.line,0),ft(e.doc,de(n.line+1,0)));var i=s(e,n);return new Et(i.from,i.to)}function Iu(e,n,s,i){C&&dl(e);var o=e.display,d=e.doc;wn(n);var m,y,b=d.sel,k=b.ranges;if(i.addNew&&!i.extend?(y=d.sel.contains(s),y>-1?m=k[y]:m=new Et(s,s)):(m=d.sel.primary(),y=d.sel.primIndex),i.unit=="rectangle")i.addNew||(m=new Et(s,s)),s=ps(e,n,!0,!0),y=-1;else{var O=no(e,s,i.unit);i.extend?m=ks(m,O.anchor,O.head,i.extend):m=O}i.addNew?y==-1?(y=k.length,Wn(d,Pr(e,k.concat([m]),y),{scroll:!1,origin:"*mouse"})):k.length>1&&k[y].empty()&&i.unit=="char"&&!i.extend?(Wn(d,Pr(e,k.slice(0,y).concat(k.slice(y+1)),0),{scroll:!1,origin:"*mouse"}),b=d.sel):Io(d,y,m,fn):(y=0,Wn(d,new Yn([m],0),fn),b=d.sel);var B=s;function te(Ie){if(Fe(B,Ie)!=0)if(B=Ie,i.unit=="rectangle"){for(var Ue=[],ot=e.options.tabSize,Ye=Be(Xe(d,s.line).text,s.ch,ot),wt=Be(Xe(d,Ie.line).text,Ie.ch,ot),_t=Math.min(Ye,wt),Bn=Math.max(Ye,wt),nn=Math.min(s.line,Ie.line),vr=Math.min(e.lastLine(),Math.max(s.line,Ie.line));nn<=vr;nn++){var rr=Xe(d,nn).text,vn=bt(rr,_t,ot);_t==Bn?Ue.push(new Et(de(nn,vn),de(nn,vn))):rr.length>vn&&Ue.push(new Et(de(nn,vn),de(nn,bt(rr,Bn,ot))))}Ue.length||Ue.push(new Et(s,s)),Wn(d,Pr(e,b.ranges.slice(0,y).concat(Ue),y),{origin:"*mouse",scroll:!1}),e.scrollIntoView(Ie)}else{var xr=m,Nn=no(e,Ie,i.unit),xn=xr.anchor,Ot;Fe(Nn.anchor,xn)>0?(Ot=Nn.head,xn=oi(xr.from(),Nn.anchor)):(Ot=Nn.anchor,xn=Sn(xr.to(),Nn.head));var ct=b.ranges.slice(0);ct[y]=Mu(e,new Et(ft(d,xn),Ot)),Wn(d,Pr(e,ct,y),fn)}}var Z=o.wrapper.getBoundingClientRect(),fe=0;function xe(Ie){var Ue=++fe,ot=ps(e,Ie,!0,i.unit=="rectangle");if(ot)if(Fe(ot,B)!=0){e.curOp.focus=P(Je(e)),te(ot);var Ye=fs(o,d);(ot.line>=Ye.to||ot.line<Ye.from)&&setTimeout(dn(e,function(){fe==Ue&&xe(Ie)}),150)}else{var wt=Ie.clientY<Z.top?-20:Ie.clientY>Z.bottom?20:0;wt&&setTimeout(dn(e,function(){fe==Ue&&(o.scroller.scrollTop+=wt,xe(Ie))}),50)}}function Le(Ie){e.state.selectingText=!1,fe=1/0,Ie&&(wn(Ie),o.input.focus()),Gt(o.wrapper.ownerDocument,"mousemove",je),Gt(o.wrapper.ownerDocument,"mouseup",De),d.history.lastSelOrigin=null}var je=dn(e,function(Ie){Ie.buttons===0||!En(Ie)?Le(Ie):xe(Ie)}),De=dn(e,Le);e.state.selectingText=De,nt(o.wrapper.ownerDocument,"mousemove",je),nt(o.wrapper.ownerDocument,"mouseup",De)}function Mu(e,n){var s=n.anchor,i=n.head,o=Xe(e.doc,s.line);if(Fe(s,i)==0&&s.sticky==i.sticky)return n;var d=gt(o);if(!d)return n;var m=or(d,s.ch,s.sticky),y=d[m];if(y.from!=s.ch&&y.to!=s.ch)return n;var b=m+(y.from==s.ch==(y.level!=1)?0:1);if(b==0||b==d.length)return n;var k;if(i.line!=s.line)k=(i.line-s.line)*(e.doc.direction=="ltr"?1:-1)>0;else{var O=or(d,i.ch,i.sticky),B=O-m||(i.ch-s.ch)*(y.level==1?-1:1);O==b-1||O==b?k=B<0:k=B>0}var te=d[b+(k?-1:0)],Z=k==(te.level==1),fe=Z?te.from:te.to,xe=Z?"after":"before";return s.ch==fe&&s.sticky==xe?n:new Et(new de(s.line,fe,xe),i)}function Hc(e,n,s,i){var o,d;if(n.touches)o=n.touches[0].clientX,d=n.touches[0].clientY;else try{o=n.clientX,d=n.clientY}catch{return!1}if(o>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;i&&wn(n);var m=e.display,y=m.lineDiv.getBoundingClientRect();if(d>y.bottom||!un(e,s))return In(n);d-=y.top-m.viewOffset;for(var b=0;b<e.display.gutterSpecs.length;++b){var k=m.gutters.childNodes[b];if(k&&k.getBoundingClientRect().right>=o){var O=W(e.doc,d),B=e.display.gutterSpecs[b];return At(e,s,e,O,B.className,n),In(n)}}}function jl(e,n){return Hc(e,n,"gutterClick",!0)}function Ou(e,n){qi(e.display,n)||Bc(e,n)||Rt(e,n,"contextmenu")||Te||e.display.input.onContextMenu(n)}function Bc(e,n){return un(e,"gutterContextMenu")?Hc(e,n,"gutterContextMenu",!1):!1}function Du(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),wo(e)}var ro={toString:function(){return"CodeMirror.Init"}},Uc={},Jn={};function yr(e){var n=e.optionHandlers;function s(i,o,d,m){e.defaults[i]=o,d&&(n[i]=m?function(y,b,k){k!=ro&&d(y,b,k)}:d)}e.defineOption=s,e.Init=ro,s("value","",function(i,o){return i.setValue(o)},!0),s("mode",null,function(i,o){i.doc.modeOption=o,gl(i)},!0),s("indentUnit",2,gl,!0),s("indentWithTabs",!1),s("smartIndent",!0),s("tabSize",4,function(i){qs(i),wo(i),er(i)},!0),s("lineSeparator",null,function(i,o){if(i.doc.lineSep=o,!!o){var d=[],m=i.doc.first;i.doc.iter(function(b){for(var k=0;;){var O=b.text.indexOf(o,k);if(O==-1)break;k=O+o.length,d.push(de(m,O))}m++});for(var y=d.length-1;y>=0;y--)Vs(i.doc,o,d[y],de(d[y].line,d[y].ch+o.length))}}),s("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,function(i,o,d){i.state.specialChars=new RegExp(o.source+(o.test("	")?"":"|	"),"g"),d!=ro&&i.refresh()}),s("specialCharPlaceholder",Id,function(i){return i.refresh()},!0),s("electricChars",!0),s("inputStyle",q?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),s("spellcheck",!1,function(i,o){return i.getInputField().spellcheck=o},!0),s("autocorrect",!1,function(i,o){return i.getInputField().autocorrect=o},!0),s("autocapitalize",!1,function(i,o){return i.getInputField().autocapitalize=o},!0),s("rtlMoveVisually",!le),s("wholeLineUpdateBefore",!0),s("theme","default",function(i){Du(i),Dr(i)},!0),s("keyMap","default",function(i,o,d){var m=Ts(o),y=d!=ro&&Ts(d);y&&y.detach&&y.detach(i,m),m.attach&&m.attach(i,y||null)}),s("extraKeys",null),s("configureMouse",null),s("lineWrapping",!1,Kc,!0),s("gutters",[],function(i,o){i.display.gutterSpecs=Lo(o,i.options.lineNumbers),Dr(i)},!0),s("fixedGutter",!0,function(i,o){i.display.gutters.style.left=o?Co(i.display)+"px":"0",i.refresh()},!0),s("coverGutterNextToScrollbar",!1,function(i){return Ws(i)},!0),s("scrollbarStyle","native",function(i){fl(i),Ws(i),i.display.scrollbars.setScrollTop(i.doc.scrollTop),i.display.scrollbars.setScrollLeft(i.doc.scrollLeft)},!0),s("lineNumbers",!1,function(i,o){i.display.gutterSpecs=Lo(i.options.gutters,o),Dr(i)},!0),s("firstLineNumber",1,Dr,!0),s("lineNumberFormatter",function(i){return i},Dr,!0),s("showCursorWhenSelecting",!1,Gr,!0),s("resetSelectionOnContextMenu",!0),s("lineWiseCopyCut",!0),s("pasteLinesPerSelection",!0),s("selectionsMayTouch",!1),s("readOnly",!1,function(i,o){o=="nocursor"&&(Wt(i),i.display.input.blur()),i.display.input.readOnlyChanged(o)}),s("screenReaderLabel",null,function(i,o){o=o===""?null:o,i.display.input.screenReaderLabelChanged(o)}),s("disableInput",!1,function(i,o){o||i.display.input.reset()},!0),s("dragDrop",!0,qc),s("allowDropFileTypes",null),s("cursorBlinkRate",530),s("cursorScrollMargin",0),s("cursorHeight",1,Gr,!0),s("singleCursorHeightPerLine",!0,Gr,!0),s("workTime",100),s("workDelay",100),s("flattenSpans",!0,qs,!0),s("addModeClass",!1,qs,!0),s("pollInterval",100),s("undoDepth",200,function(i,o){return i.doc.history.undoDepth=o}),s("historyEventDelay",1250),s("viewportMargin",10,function(i){return i.refresh()},!0),s("maxHighlightLength",1e4,qs,!0),s("moveInputWithCursor",!0,function(i,o){o||i.display.input.resetPosition()}),s("tabindex",null,function(i,o){return i.display.input.getField().tabIndex=o||""}),s("autofocus",null),s("direction","ltr",function(i,o){return i.doc.setDirection(o)},!0),s("phrases",null)}function qc(e,n,s){var i=s&&s!=ro;if(!n!=!i){var o=e.display.dragFunctions,d=n?nt:Gt;d(e.display.scroller,"dragstart",o.start),d(e.display.scroller,"dragenter",o.enter),d(e.display.scroller,"dragover",o.over),d(e.display.scroller,"dragleave",o.leave),d(e.display.scroller,"drop",o.drop)}}function Kc(e){e.options.lineWrapping?(G(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(ke(e.display.wrapper,"CodeMirror-wrap"),aa(e)),ma(e),er(e),wo(e),setTimeout(function(){return Ws(e)},100)}function Xt(e,n){var s=this;if(!(this instanceof Xt))return new Xt(e,n);this.options=n=n?He(n):{},He(Uc,n,!1);var i=n.value;typeof i=="string"?i=new It(i,n.mode,null,n.lineSeparator,n.direction):n.mode&&(i.modeOption=n.mode),this.doc=i;var o=new Xt.inputStyles[n.inputStyle](this),d=this.display=new ml(e,i,o,n);d.wrapper.CodeMirror=this,Du(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),fl(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new tt,keySeq:null,specialChars:null},n.autofocus&&!q&&d.input.focus(),C&&L<11&&setTimeout(function(){return s.display.input.reset(!0)},20),$c(this),bu(),vs(this),this.curOp.forceUpdate=!0,tn(this,i),n.autofocus&&!q||this.hasFocus()?setTimeout(function(){s.hasFocus()&&!s.state.focused&&hl(s)},20):Wt(this);for(var m in Jn)Jn.hasOwnProperty(m)&&Jn[m](this,n[m],ro);fu(this),n.finishInit&&n.finishInit(this);for(var y=0;y<El.length;++y)El[y](this);Yr(this),A&&n.lineWrapping&&getComputedStyle(d.lineDiv).textRendering=="optimizelegibility"&&(d.lineDiv.style.textRendering="auto")}Xt.defaults=Uc,Xt.optionHandlers=Jn;function $c(e){var n=e.display;nt(n.scroller,"mousedown",dn(e,za)),C&&L<11?nt(n.scroller,"dblclick",dn(e,function(b){if(!Rt(e,b)){var k=ps(e,b);if(!(!k||jl(e,b)||qi(e.display,b))){wn(b);var O=e.findWordAt(k);Ea(e.doc,O.anchor,O.head)}}})):nt(n.scroller,"dblclick",function(b){return Rt(e,b)||wn(b)}),nt(n.scroller,"contextmenu",function(b){return Ou(e,b)}),nt(n.input.getField(),"contextmenu",function(b){n.scroller.contains(b.target)||Ou(e,b)});var s,i={end:0};function o(){n.activeTouch&&(s=setTimeout(function(){return n.activeTouch=null},1e3),i=n.activeTouch,i.end=+new Date)}function d(b){if(b.touches.length!=1)return!1;var k=b.touches[0];return k.radiusX<=1&&k.radiusY<=1}function m(b,k){if(k.left==null)return!0;var O=k.left-b.left,B=k.top-b.top;return O*O+B*B>400}nt(n.scroller,"touchstart",function(b){if(!Rt(e,b)&&!d(b)&&!jl(e,b)){n.input.ensurePolled(),clearTimeout(s);var k=+new Date;n.activeTouch={start:k,moved:!1,prev:k-i.end<=300?i:null},b.touches.length==1&&(n.activeTouch.left=b.touches[0].pageX,n.activeTouch.top=b.touches[0].pageY)}}),nt(n.scroller,"touchmove",function(){n.activeTouch&&(n.activeTouch.moved=!0)}),nt(n.scroller,"touchend",function(b){var k=n.activeTouch;if(k&&!qi(n,b)&&k.left!=null&&!k.moved&&new Date-k.start<300){var O=e.coordsChar(n.activeTouch,"page"),B;!k.prev||m(k,k.prev)?B=new Et(O,O):!k.prev.prev||m(k,k.prev.prev)?B=e.findWordAt(O):B=new Et(de(O.line,0),ft(e.doc,de(O.line+1,0))),e.setSelection(B.anchor,B.head),e.focus(),wn(b)}o()}),nt(n.scroller,"touchcancel",o),nt(n.scroller,"scroll",function(){n.scroller.clientHeight&&(gs(e,n.scroller.scrollTop),Yi(e,n.scroller.scrollLeft,!0),At(e,"scroll",e))}),nt(n.scroller,"mousewheel",function(b){return Bs(e,b)}),nt(n.scroller,"DOMMouseScroll",function(b){return Bs(e,b)}),nt(n.wrapper,"scroll",function(){return n.wrapper.scrollTop=n.wrapper.scrollLeft=0}),n.dragFunctions={enter:function(b){Rt(e,b)||lr(b)},over:function(b){Rt(e,b)||(Jd(e,b),lr(b))},start:function(b){return Ma(e,b)},drop:dn(e,Ia),leave:function(b){Rt(e,b)||Zn(e)}};var y=n.input.getField();nt(y,"keyup",function(b){return Lu.call(e,b)}),nt(y,"keydown",dn(e,Eu)),nt(y,"keypress",dn(e,Oa)),nt(y,"focus",function(b){return hl(e,b)}),nt(y,"blur",function(b){return Wt(e,b)})}var El=[];Xt.defineInitHook=function(e){return El.push(e)};function io(e,n,s,i){var o=e.doc,d;s==null&&(s="add"),s=="smart"&&(o.mode.indent?d=Nt(e,n).state:s="prev");var m=e.options.tabSize,y=Xe(o,n),b=Be(y.text,null,m);y.stateAfter&&(y.stateAfter=null);var k=y.text.match(/^\s*/)[0],O;if(!i&&!/\S/.test(y.text))O=0,s="not";else if(s=="smart"&&(O=o.mode.indent(d,y.text.slice(k.length),y.text),O==Qt||O>150)){if(!i)return;s="prev"}s=="prev"?n>o.first?O=Be(Xe(o,n-1).text,null,m):O=0:s=="add"?O=b+e.options.indentUnit:s=="subtract"?O=b-e.options.indentUnit:typeof s=="number"&&(O=b+s),O=Math.max(0,O);var B="",te=0;if(e.options.indentWithTabs)for(var Z=Math.floor(O/m);Z;--Z)te+=m,B+="	";if(te<O&&(B+=Zt(O-te)),B!=k)return Vs(o,B,de(n,0),de(n,k.length),"+input"),y.stateAfter=null,!0;for(var fe=0;fe<o.sel.ranges.length;fe++){var xe=o.sel.ranges[fe];if(xe.head.line==n&&xe.head.ch<k.length){var Le=de(n,k.length);Io(o,fe,new Et(Le,Le));break}}}var Zr=null;function $o(e){Zr=e}function Ll(e,n,s,i,o){var d=e.doc;e.display.shift=!1,i||(i=d.sel);var m=+new Date-200,y=o=="paste"||e.state.pasteIncoming>m,b=ur(n),k=null;if(y&&i.ranges.length>1)if(Zr&&Zr.text.join(`
`)==n){if(i.ranges.length%Zr.text.length==0){k=[];for(var O=0;O<Zr.text.length;O++)k.push(d.splitLines(Zr.text[O]))}}else b.length==i.ranges.length&&e.options.pasteLinesPerSelection&&(k=vt(b,function(je){return[je]}));for(var B=e.curOp.updateInput,te=i.ranges.length-1;te>=0;te--){var Z=i.ranges[te],fe=Z.from(),xe=Z.to();Z.empty()&&(s&&s>0?fe=de(fe.line,fe.ch-s):e.state.overwrite&&!y?xe=de(xe.line,Math.min(Xe(d,xe.line).text.length,xe.ch+Ke(b).length)):y&&Zr&&Zr.lineWise&&Zr.text.join(`
`)==b.join(`
`)&&(fe=xe=de(fe.line,0)));var Le={from:fe,to:xe,text:k?k[te%k.length]:b,origin:o||(y?"paste":e.state.cutIncoming>m?"cut":"+input")};Ys(e.doc,Le),Dn(e,"inputRead",e,Le)}n&&!y&&Pl(e,n),zs(e),e.curOp.updateInput<2&&(e.curOp.updateInput=B),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function zu(e,n){var s=e.clipboardData&&e.clipboardData.getData("Text");if(s)return e.preventDefault(),!n.isReadOnly()&&!n.options.disableInput&&n.hasFocus()&&Ln(n,function(){return Ll(n,s,0,null,"paste")}),!0}function Pl(e,n){if(!(!e.options.electricChars||!e.options.smartIndent))for(var s=e.doc.sel,i=s.ranges.length-1;i>=0;i--){var o=s.ranges[i];if(!(o.head.ch>100||i&&s.ranges[i-1].head.line==o.head.line)){var d=e.getModeAt(o.head),m=!1;if(d.electricChars){for(var y=0;y<d.electricChars.length;y++)if(n.indexOf(d.electricChars.charAt(y))>-1){m=io(e,o.head.line,"smart");break}}else d.electricInput&&d.electricInput.test(Xe(e.doc,o.head.line).text.slice(0,o.head.ch))&&(m=io(e,o.head.line,"smart"));m&&Dn(e,"electricInput",e,o.head.line)}}}function Al(e){for(var n=[],s=[],i=0;i<e.doc.sel.ranges.length;i++){var o=e.doc.sel.ranges[i].head.line,d={anchor:de(o,0),head:de(o+1,0)};s.push(d),n.push(e.getRange(d.anchor,d.head))}return{text:n,ranges:s}}function Rl(e,n,s,i){e.setAttribute("autocorrect",s?"on":"off"),e.setAttribute("autocapitalize",i?"on":"off"),e.setAttribute("spellcheck",!!n)}function Il(){var e=T("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),n=T("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return A?e.style.width="1000px":e.setAttribute("wrap","off"),F&&(e.style.border="1px solid black"),n}function Ml(e){var n=e.optionHandlers,s=e.helpers={};e.prototype={constructor:e,focus:function(){Se(this).focus(),this.display.input.focus()},setOption:function(i,o){var d=this.options,m=d[i];d[i]==o&&i!="mode"||(d[i]=o,n.hasOwnProperty(i)&&dn(this,n[i])(this,o,m),At(this,"optionChange",this,i))},getOption:function(i){return this.options[i]},getDoc:function(){return this.doc},addKeyMap:function(i,o){this.state.keyMaps[o?"push":"unshift"](Ts(i))},removeKeyMap:function(i){for(var o=this.state.keyMaps,d=0;d<o.length;++d)if(o[d]==i||o[d].name==i)return o.splice(d,1),!0},addOverlay:Tn(function(i,o){var d=i.token?i:e.getMode(this.options,i);if(d.startState)throw new Error("Overlays may not be stateful.");oe(this.state.overlays,{mode:d,modeSpec:i,opaque:o&&o.opaque,priority:o&&o.priority||0},function(m){return m.priority}),this.state.modeGen++,er(this)}),removeOverlay:Tn(function(i){for(var o=this.state.overlays,d=0;d<o.length;++d){var m=o[d].modeSpec;if(m==i||typeof i=="string"&&m.name==i){o.splice(d,1),this.state.modeGen++,er(this);return}}}),indentLine:Tn(function(i,o,d){typeof o!="string"&&typeof o!="number"&&(o==null?o=this.options.smartIndent?"smart":"prev":o=o?"add":"subtract"),pe(this.doc,i)&&io(this,i,o,d)}),indentSelection:Tn(function(i){for(var o=this.doc.sel.ranges,d=-1,m=0;m<o.length;m++){var y=o[m];if(y.empty())y.head.line>d&&(io(this,y.head.line,i,!0),d=y.head.line,m==this.doc.sel.primIndex&&zs(this));else{var b=y.from(),k=y.to(),O=Math.max(d,b.line);d=Math.min(this.lastLine(),k.line-(k.ch?0:1))+1;for(var B=O;B<d;++B)io(this,B,i);var te=this.doc.sel.ranges;b.ch==0&&o.length==te.length&&te[m].from().ch>0&&Io(this.doc,m,new Et(b,te[m].to()),$t)}}}),getTokenAt:function(i,o){return ia(this,i,o)},getLineTokens:function(i,o){return ia(this,de(i),o,!0)},getTokenTypeAt:function(i){i=ft(this.doc,i);var o=as(this,Xe(this.doc,i.line)),d=0,m=(o.length-1)/2,y=i.ch,b;if(y==0)b=o[2];else for(;;){var k=d+m>>1;if((k?o[k*2-1]:0)>=y)m=k;else if(o[k*2+1]<y)d=k+1;else{b=o[k*2+2];break}}var O=b?b.indexOf("overlay "):-1;return O<0?b:O==0?null:b.slice(0,O-1)},getModeAt:function(i){var o=this.doc.mode;return o.innerMode?e.innerMode(o,this.getTokenAt(i).state).mode:o},getHelper:function(i,o){return this.getHelpers(i,o)[0]},getHelpers:function(i,o){var d=[];if(!s.hasOwnProperty(o))return d;var m=s[o],y=this.getModeAt(i);if(typeof y[o]=="string")m[y[o]]&&d.push(m[y[o]]);else if(y[o])for(var b=0;b<y[o].length;b++){var k=m[y[o][b]];k&&d.push(k)}else y.helperType&&m[y.helperType]?d.push(m[y.helperType]):m[y.name]&&d.push(m[y.name]);for(var O=0;O<m._global.length;O++){var B=m._global[O];B.pred(y,this)&&Ge(d,B.val)==-1&&d.push(B.val)}return d},getStateAfter:function(i,o){var d=this.doc;return i=Xa(d,i??d.first+d.size-1),Nt(this,i+1,o).state},cursorCoords:function(i,o){var d,m=this.doc.sel.primary();return i==null?d=m.head:typeof i=="object"?d=ft(this.doc,i):d=i?m.from():m.to(),_n(this,d,o||"page")},charCoords:function(i,o){return sl(this,ft(this.doc,i),o||"page")},coordsChar:function(i,o){return i=bc(this,i,o||"page"),al(this,i.left,i.top)},lineAtHeight:function(i,o){return i=bc(this,{top:i,left:0},o||"page").top,W(this.doc,i+this.display.viewOffset)},heightAtLine:function(i,o,d){var m=!1,y;if(typeof i=="number"){var b=this.doc.first+this.doc.size-1;i<this.doc.first?i=this.doc.first:i>b&&(i=b,m=!0),y=Xe(this.doc,i)}else y=i;return il(this,y,{top:0,left:0},o||"page",d||m).top+(m?this.doc.height-Cn(y):0)},defaultTextHeight:function(){return Ci(this.display)},defaultCharWidth:function(){return hs(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(i,o,d,m,y){var b=this.display;i=_n(this,ft(this.doc,i));var k=i.bottom,O=i.left;if(o.style.position="absolute",o.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(o),b.sizer.appendChild(o),m=="over")k=i.top;else if(m=="above"||m=="near"){var B=Math.max(b.wrapper.clientHeight,this.doc.height),te=Math.max(b.sizer.clientWidth,b.lineSpace.clientWidth);(m=="above"||i.bottom+o.offsetHeight>B)&&i.top>o.offsetHeight?k=i.top-o.offsetHeight:i.bottom+o.offsetHeight<=B&&(k=i.bottom),O+o.offsetWidth>te&&(O=te-o.offsetWidth)}o.style.top=k+"px",o.style.left=o.style.right="",y=="right"?(O=b.sizer.clientWidth-o.offsetWidth,o.style.right="0px"):(y=="left"?O=0:y=="middle"&&(O=(b.sizer.clientWidth-o.offsetWidth)/2),o.style.left=O+"px"),d&&xa(this,{left:O,top:k,right:O+o.offsetWidth,bottom:k+o.offsetHeight})},triggerOnKeyDown:Tn(Eu),triggerOnKeyPress:Tn(Oa),triggerOnKeyUp:Lu,triggerOnMouseDown:Tn(za),execCommand:function(i){if(Uo.hasOwnProperty(i))return Uo[i].call(null,this)},triggerElectric:Tn(function(i){Pl(this,i)}),findPosH:function(i,o,d,m){var y=1;o<0&&(y=-1,o=-o);for(var b=ft(this.doc,i),k=0;k<o&&(b=Fu(this.doc,b,y,d,m),!b.hitSide);++k);return b},moveH:Tn(function(i,o){var d=this;this.extendSelectionsBy(function(m){return d.display.shift||d.doc.extend||m.empty()?Fu(d.doc,m.head,i,o,d.options.rtlMoveVisually):i<0?m.from():m.to()},et)}),deleteH:Tn(function(i,o){var d=this.doc.sel,m=this.doc;d.somethingSelected()?m.replaceSelection("",null,"+delete"):to(this,function(y){var b=Fu(m,y.head,i,o,!1);return i<0?{from:b,to:y.head}:{from:y.head,to:b}})}),findPosV:function(i,o,d,m){var y=1,b=m;o<0&&(y=-1,o=-o);for(var k=ft(this.doc,i),O=0;O<o;++O){var B=_n(this,k,"div");if(b==null?b=B.left:B.left=b,k=Wu(this,B,y,d),k.hitSide)break}return k},moveV:Tn(function(i,o){var d=this,m=this.doc,y=[],b=!this.display.shift&&!m.extend&&m.sel.somethingSelected();if(m.extendSelectionsBy(function(O){if(b)return i<0?O.from():O.to();var B=_n(d,O.head,"div");O.goalColumn!=null&&(B.left=O.goalColumn),y.push(B.left);var te=Wu(d,B,i,o);return o=="page"&&O==m.sel.primary()&&ms(d,sl(d,te,"div").top-B.top),te},et),y.length)for(var k=0;k<m.sel.ranges.length;k++)m.sel.ranges[k].goalColumn=y[k]}),findWordAt:function(i){var o=this.doc,d=Xe(o,i.line).text,m=i.ch,y=i.ch;if(d){var b=this.getHelper(i,"wordChars");(i.sticky=="before"||y==d.length)&&m?--m:++y;for(var k=d.charAt(m),O=st(k,b)?function(B){return st(B,b)}:/\s/.test(k)?function(B){return/\s/.test(B)}:function(B){return!/\s/.test(B)&&!st(B)};m>0&&O(d.charAt(m-1));)--m;for(;y<d.length&&O(d.charAt(y));)++y}return new Et(de(i.line,m),de(i.line,y))},toggleOverwrite:function(i){i!=null&&i==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?G(this.display.cursorDiv,"CodeMirror-overwrite"):ke(this.display.cursorDiv,"CodeMirror-overwrite"),At(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==P(Je(this))},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:Tn(function(i,o){ba(this,i,o)}),getScrollInfo:function(){var i=this.display.scroller;return{left:i.scrollLeft,top:i.scrollTop,height:i.scrollHeight-ui(this)-this.display.barHeight,width:i.scrollWidth-ui(this)-this.display.barWidth,clientHeight:ds(this),clientWidth:cs(this)}},scrollIntoView:Tn(function(i,o){i==null?(i={from:this.doc.sel.primary().head,to:null},o==null&&(o=this.options.cursorScrollMargin)):typeof i=="number"?i={from:de(i,0),to:null}:i.from==null&&(i={from:i,to:null}),i.to||(i.to=i.from),i.margin=o||0,i.from.line!=null?Xd(this,i):ka(this,i.from,i.to,i.margin)}),setSize:Tn(function(i,o){var d=this,m=function(b){return typeof b=="number"||/^\d+$/.test(String(b))?b+"px":b};i!=null&&(this.display.wrapper.style.width=m(i)),o!=null&&(this.display.wrapper.style.height=m(o)),this.options.lineWrapping&&su(this);var y=this.display.viewFrom;this.doc.iter(y,this.display.viewTo,function(b){if(b.widgets){for(var k=0;k<b.widgets.length;k++)if(b.widgets[k].noHScroll){$i(d,y,"widget");break}}++y}),this.curOp.forceUpdate=!0,At(this,"refresh",this)}),operation:function(i){return Ln(this,i)},startOperation:function(){return vs(this)},endOperation:function(){return Yr(this)},refresh:Tn(function(){var i=this.display.cachedTextHeight;er(this),this.curOp.forceUpdate=!0,wo(this),ba(this,this.doc.scrollLeft,this.doc.scrollTop),tr(this.display),(i==null||Math.abs(i-Ci(this.display))>.5||this.options.lineWrapping)&&ma(this),At(this,"refresh",this)}),swapDoc:Tn(function(i){var o=this.doc;return o.cm=null,this.state.selectingText&&this.state.selectingText(),tn(this,i),wo(this),this.display.input.reset(),ba(this,i.scrollLeft,i.scrollTop),this.curOp.forceScroll=!0,Dn(this,"swapDoc",this,o),o}),phrase:function(i){var o=this.options.phrases;return o&&Object.prototype.hasOwnProperty.call(o,i)?o[i]:i},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},ar(e),e.registerHelper=function(i,o,d){s.hasOwnProperty(i)||(s[i]=e[i]={_global:[]}),s[i][o]=d},e.registerGlobalHelper=function(i,o,d,m){e.registerHelper(i,o,m),s[i]._global.push({pred:d,val:m})}}function Fu(e,n,s,i,o){var d=n,m=s,y=Xe(e,n.line),b=o&&e.direction=="rtl"?-s:s;function k(){var De=n.line+b;return De<e.first||De>=e.first+e.size?!1:(n=new de(De,n.ch,n.sticky),y=Xe(e,De))}function O(De){var Ie;if(i=="codepoint"){var Ue=y.text.charCodeAt(n.ch+(s>0?0:-1));if(isNaN(Ue))Ie=null;else{var ot=s>0?Ue>=55296&&Ue<56320:Ue>=56320&&Ue<57343;Ie=new de(n.line,Math.max(0,Math.min(y.text.length,n.ch+s*(ot?2:1))),-s)}}else o?Ie=Cu(e.cm,y,n,s):Ie=Bo(y,n,s);if(Ie==null)if(!De&&k())n=Nl(o,e.cm,y,n.line,b);else return!1;else n=Ie;return!0}if(i=="char"||i=="codepoint")O();else if(i=="column")O(!0);else if(i=="word"||i=="group")for(var B=null,te=i=="group",Z=e.cm&&e.cm.getHelper(n,"wordChars"),fe=!0;!(s<0&&!O(!fe));fe=!1){var xe=y.text.charAt(n.ch)||`
`,Le=st(xe,Z)?"w":te&&xe==`
`?"n":!te||/\s/.test(xe)?null:"p";if(te&&!fe&&!Le&&(Le="s"),B&&B!=Le){s<0&&(s=1,O(),n.sticky="after");break}if(Le&&(B=Le),s>0&&!O(!fe))break}var je=Pa(e,n,d,m,!0);return Ct(d,je)&&(je.hitSide=!0),je}function Wu(e,n,s,i){var o=e.doc,d=n.left,m;if(i=="page"){var y=Math.min(e.display.wrapper.clientHeight,Se(e).innerHeight||o(e).documentElement.clientHeight),b=Math.max(y-.5*Ci(e.display),3);m=(s>0?n.bottom:n.top)+s*b}else i=="line"&&(m=s>0?n.bottom+3:n.top-3);for(var k;k=al(e,d,m),!!k.outside;){if(s<0?m<=0:m>=o.height){k.hitSide=!0;break}m+=s*5}return k}var Mt=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new tt,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};Mt.prototype.init=function(e){var n=this,s=this,i=s.cm,o=s.div=e.lineDiv;o.contentEditable=!0,Rl(o,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize);function d(y){for(var b=y.target;b;b=b.parentNode){if(b==o)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(b.className))break}return!1}nt(o,"paste",function(y){!d(y)||Rt(i,y)||zu(y,i)||L<=11&&setTimeout(dn(i,function(){return n.updateFromDOM()}),20)}),nt(o,"compositionstart",function(y){n.composing={data:y.data,done:!1}}),nt(o,"compositionupdate",function(y){n.composing||(n.composing={data:y.data,done:!1})}),nt(o,"compositionend",function(y){n.composing&&(y.data!=n.composing.data&&n.readFromDOMSoon(),n.composing.done=!0)}),nt(o,"touchstart",function(){return s.forceCompositionEnd()}),nt(o,"input",function(){n.composing||n.readFromDOMSoon()});function m(y){if(!(!d(y)||Rt(i,y))){if(i.somethingSelected())$o({lineWise:!1,text:i.getSelections()}),y.type=="cut"&&i.replaceSelection("",null,"cut");else if(i.options.lineWiseCopyCut){var b=Al(i);$o({lineWise:!0,text:b.text}),y.type=="cut"&&i.operation(function(){i.setSelections(b.ranges,0,$t),i.replaceSelection("",null,"cut")})}else return;if(y.clipboardData){y.clipboardData.clearData();var k=Zr.text.join(`
`);if(y.clipboardData.setData("Text",k),y.clipboardData.getData("Text")==k){y.preventDefault();return}}var O=Il(),B=O.firstChild;Rl(B),i.display.lineSpace.insertBefore(O,i.display.lineSpace.firstChild),B.value=Zr.text.join(`
`);var te=P(Ve(o));ae(B),setTimeout(function(){i.display.lineSpace.removeChild(O),te.focus(),te==o&&s.showPrimarySelection()},50)}}nt(o,"copy",m),nt(o,"cut",m)},Mt.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Mt.prototype.prepareSelection=function(){var e=ul(this.cm,!1);return e.focus=P(Ve(this.div))==this.div,e},Mt.prototype.showSelection=function(e,n){!e||!this.cm.display.view.length||((e.focus||n)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Mt.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Mt.prototype.showPrimarySelection=function(){var e=this.getSelection(),n=this.cm,s=n.doc.sel.primary(),i=s.from(),o=s.to();if(n.display.viewTo==n.display.viewFrom||i.line>=n.display.viewTo||o.line<n.display.viewFrom){e.removeAllRanges();return}var d=Fa(n,e.anchorNode,e.anchorOffset),m=Fa(n,e.focusNode,e.focusOffset);if(!(d&&!d.bad&&m&&!m.bad&&Fe(oi(d,m),i)==0&&Fe(Sn(d,m),o)==0)){var y=n.display.view,b=i.line>=n.display.viewFrom&&Hu(n,i)||{node:y[0].measure.map[2],offset:0},k=o.line<n.display.viewTo&&Hu(n,o);if(!k){var O=y[y.length-1].measure,B=O.maps?O.maps[O.maps.length-1]:O.map;k={node:B[B.length-1],offset:B[B.length-2]-B[B.length-3]}}if(!b||!k){e.removeAllRanges();return}var te=e.rangeCount&&e.getRangeAt(0),Z;try{Z=U(b.node,b.offset,k.offset,k.node)}catch{}Z&&(!x&&n.state.focused?(e.collapse(b.node,b.offset),Z.collapsed||(e.removeAllRanges(),e.addRange(Z))):(e.removeAllRanges(),e.addRange(Z)),te&&e.anchorNode==null?e.addRange(te):x&&this.startGracePeriod()),this.rememberSelection()}},Mt.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Mt.prototype.showMultipleSelections=function(e){ve(this.cm.display.cursorDiv,e.cursors),ve(this.cm.display.selectionDiv,e.selection)},Mt.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Mt.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var n=e.getRangeAt(0).commonAncestorContainer;return S(this.div,n)},Mt.prototype.focus=function(){this.cm.options.readOnly!="nocursor"&&((!this.selectionInEditor()||P(Ve(this.div))!=this.div)&&this.showSelection(this.prepareSelection(),!0),this.div.focus())},Mt.prototype.blur=function(){this.div.blur()},Mt.prototype.getField=function(){return this.div},Mt.prototype.supportsTouch=function(){return!0},Mt.prototype.receivedFocus=function(){var e=this,n=this;this.selectionInEditor()?setTimeout(function(){return e.pollSelection()},20):Ln(this.cm,function(){return n.cm.curOp.selectionChanged=!0});function s(){n.cm.state.focused&&(n.pollSelection(),n.polling.set(n.cm.options.pollInterval,s))}this.polling.set(this.cm.options.pollInterval,s)},Mt.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Mt.prototype.pollSelection=function(){if(!(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged())){var e=this.getSelection(),n=this.cm;if(z&&I&&this.cm.display.gutterSpecs.length&&Ol(e.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();return}if(!this.composing){this.rememberSelection();var s=Fa(n,e.anchorNode,e.anchorOffset),i=Fa(n,e.focusNode,e.focusOffset);s&&i&&Ln(n,function(){Wn(n.doc,zn(s,i),$t),(s.bad||i.bad)&&(n.curOp.selectionChanged=!0)})}}},Mt.prototype.pollContent=function(){this.readDOMTimeout!=null&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e=this.cm,n=e.display,s=e.doc.sel.primary(),i=s.from(),o=s.to();if(i.ch==0&&i.line>e.firstLine()&&(i=de(i.line-1,Xe(e.doc,i.line-1).length)),o.ch==Xe(e.doc,o.line).text.length&&o.line<e.lastLine()&&(o=de(o.line+1,0)),i.line<n.viewFrom||o.line>n.viewTo-1)return!1;var d,m,y;i.line==n.viewFrom||(d=_i(e,i.line))==0?(m=_(n.view[0].line),y=n.view[0].node):(m=_(n.view[d].line),y=n.view[d-1].node.nextSibling);var b=_i(e,o.line),k,O;if(b==n.view.length-1?(k=n.viewTo-1,O=n.lineDiv.lastChild):(k=_(n.view[b+1].line)-1,O=n.view[b+1].node.previousSibling),!y)return!1;for(var B=e.doc.splitLines(nh(e,y,O,m,k)),te=si(e.doc,de(m,0),de(k,Xe(e.doc,k).text.length));B.length>1&&te.length>1;)if(Ke(B)==Ke(te))B.pop(),te.pop(),k--;else if(B[0]==te[0])B.shift(),te.shift(),m++;else break;for(var Z=0,fe=0,xe=B[0],Le=te[0],je=Math.min(xe.length,Le.length);Z<je&&xe.charCodeAt(Z)==Le.charCodeAt(Z);)++Z;for(var De=Ke(B),Ie=Ke(te),Ue=Math.min(De.length-(B.length==1?Z:0),Ie.length-(te.length==1?Z:0));fe<Ue&&De.charCodeAt(De.length-fe-1)==Ie.charCodeAt(Ie.length-fe-1);)++fe;if(B.length==1&&te.length==1&&m==i.line)for(;Z&&Z>i.ch&&De.charCodeAt(De.length-fe-1)==Ie.charCodeAt(Ie.length-fe-1);)Z--,fe++;B[B.length-1]=De.slice(0,De.length-fe).replace(/^\u200b+/,""),B[0]=B[0].slice(Z).replace(/\u200b+$/,"");var ot=de(m,Z),Ye=de(k,te.length?Ke(te).length-fe:0);if(B.length>1||B[0]||Fe(ot,Ye))return Vs(e.doc,B,ot,Ye,"+input"),!0},Mt.prototype.ensurePolled=function(){this.forceCompositionEnd()},Mt.prototype.reset=function(){this.forceCompositionEnd()},Mt.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Mt.prototype.readFromDOMSoon=function(){var e=this;this.readDOMTimeout==null&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing)if(e.composing.done)e.composing=null;else return;e.updateFromDOM()},80))},Mt.prototype.updateFromDOM=function(){var e=this;(this.cm.isReadOnly()||!this.pollContent())&&Ln(this.cm,function(){return er(e.cm)})},Mt.prototype.setUneditable=function(e){e.contentEditable="false"},Mt.prototype.onKeyPress=function(e){e.charCode==0||this.composing||(e.preventDefault(),this.cm.isReadOnly()||dn(this.cm,Ll)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0))},Mt.prototype.readOnlyChanged=function(e){this.div.contentEditable=String(e!="nocursor")},Mt.prototype.onContextMenu=function(){},Mt.prototype.resetPosition=function(){},Mt.prototype.needsContentAttribute=!0;function Hu(e,n){var s=nl(e,n.line);if(!s||s.hidden)return null;var i=Xe(e.doc,n.line),o=gc(s,i,n.line),d=gt(i,e.doc.direction),m="left";if(d){var y=or(d,n.ch);m=y%2?"right":"left"}var b=pa(o.map,n.ch,m);return b.offset=b.collapse=="right"?b.end:b.start,b}function Ol(e){for(var n=e;n;n=n.parentNode)if(/CodeMirror-gutter-wrapper/.test(n.className))return!0;return!1}function Ar(e,n){return n&&(e.bad=!0),e}function nh(e,n,s,i,o){var d="",m=!1,y=e.doc.lineSeparator(),b=!1;function k(Z){return function(fe){return fe.id==Z}}function O(){m&&(d+=y,b&&(d+=y),m=b=!1)}function B(Z){Z&&(O(),d+=Z)}function te(Z){if(Z.nodeType==1){var fe=Z.getAttribute("cm-text");if(fe){B(fe);return}var xe=Z.getAttribute("cm-marker"),Le;if(xe){var je=e.findMarks(de(i,0),de(o+1,0),k(+xe));je.length&&(Le=je[0].find(0))&&B(si(e.doc,Le.from,Le.to).join(y));return}if(Z.getAttribute("contenteditable")=="false")return;var De=/^(pre|div|p|li|table|br)$/i.test(Z.nodeName);if(!/^br$/i.test(Z.nodeName)&&Z.textContent.length==0)return;De&&O();for(var Ie=0;Ie<Z.childNodes.length;Ie++)te(Z.childNodes[Ie]);/^(pre|p)$/i.test(Z.nodeName)&&(b=!0),De&&(m=!0)}else Z.nodeType==3&&B(Z.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;te(n),n!=s;)n=n.nextSibling,b=!1;return d}function Fa(e,n,s){var i;if(n==e.display.lineDiv){if(i=e.display.lineDiv.childNodes[s],!i)return Ar(e.clipPos(de(e.display.viewTo-1)),!0);n=null,s=0}else for(i=n;;i=i.parentNode){if(!i||i==e.display.lineDiv)return null;if(i.parentNode&&i.parentNode==e.display.lineDiv)break}for(var o=0;o<e.display.view.length;o++){var d=e.display.view[o];if(d.node==i)return Bu(d,n,s)}}function Bu(e,n,s){var i=e.text.firstChild,o=!1;if(!n||!S(i,n))return Ar(de(_(e.line),0),!0);if(n==i&&(o=!0,n=i.childNodes[s],s=0,!n)){var d=e.rest?Ke(e.rest):e.line;return Ar(de(_(d),d.text.length),o)}var m=n.nodeType==3?n:null,y=n;for(!m&&n.childNodes.length==1&&n.firstChild.nodeType==3&&(m=n.firstChild,s&&(s=m.nodeValue.length));y.parentNode!=i;)y=y.parentNode;var b=e.measure,k=b.maps;function O(Le,je,De){for(var Ie=-1;Ie<(k?k.length:0);Ie++)for(var Ue=Ie<0?b.map:k[Ie],ot=0;ot<Ue.length;ot+=3){var Ye=Ue[ot+2];if(Ye==Le||Ye==je){var wt=_(Ie<0?e.line:e.rest[Ie]),_t=Ue[ot]+De;return(De<0||Ye!=Le)&&(_t=Ue[ot+(De?1:0)]),de(wt,_t)}}}var B=O(m,y,s);if(B)return Ar(B,o);for(var te=y.nextSibling,Z=m?m.nodeValue.length-s:0;te;te=te.nextSibling){if(B=O(te,te.firstChild,0),B)return Ar(de(B.line,B.ch-Z),o);Z+=te.textContent.length}for(var fe=y.previousSibling,xe=s;fe;fe=fe.previousSibling){if(B=O(fe,fe.firstChild,-1),B)return Ar(de(B.line,B.ch+xe),o);xe+=fe.textContent.length}}var pn=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new tt,this.hasSelection=!1,this.composing=null,this.resetting=!1};pn.prototype.init=function(e){var n=this,s=this,i=this.cm;this.createField(e);var o=this.textarea;e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),F&&(o.style.width="0px"),nt(o,"input",function(){C&&L>=9&&n.hasSelection&&(n.hasSelection=null),s.poll()}),nt(o,"paste",function(m){Rt(i,m)||zu(m,i)||(i.state.pasteIncoming=+new Date,s.fastPoll())});function d(m){if(!Rt(i,m)){if(i.somethingSelected())$o({lineWise:!1,text:i.getSelections()});else if(i.options.lineWiseCopyCut){var y=Al(i);$o({lineWise:!0,text:y.text}),m.type=="cut"?i.setSelections(y.ranges,null,$t):(s.prevInput="",o.value=y.text.join(`
`),ae(o))}else return;m.type=="cut"&&(i.state.cutIncoming=+new Date)}}nt(o,"cut",d),nt(o,"copy",d),nt(e.scroller,"paste",function(m){if(!(qi(e,m)||Rt(i,m))){if(!o.dispatchEvent){i.state.pasteIncoming=+new Date,s.focus();return}var y=new Event("paste");y.clipboardData=m.clipboardData,o.dispatchEvent(y)}}),nt(e.lineSpace,"selectstart",function(m){qi(e,m)||wn(m)}),nt(o,"compositionstart",function(){var m=i.getCursor("from");s.composing&&s.composing.range.clear(),s.composing={start:m,range:i.markText(m,i.getCursor("to"),{className:"CodeMirror-composing"})}}),nt(o,"compositionend",function(){s.composing&&(s.poll(),s.composing.range.clear(),s.composing=null)})},pn.prototype.createField=function(e){this.wrapper=Il(),this.textarea=this.wrapper.firstChild;var n=this.cm.options;Rl(this.textarea,n.spellcheck,n.autocorrect,n.autocapitalize)},pn.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},pn.prototype.prepareSelection=function(){var e=this.cm,n=e.display,s=e.doc,i=ul(e);if(e.options.moveInputWithCursor){var o=_n(e,s.sel.primary().head,"div"),d=n.wrapper.getBoundingClientRect(),m=n.lineDiv.getBoundingClientRect();i.teTop=Math.max(0,Math.min(n.wrapper.clientHeight-10,o.top+m.top-d.top)),i.teLeft=Math.max(0,Math.min(n.wrapper.clientWidth-10,o.left+m.left-d.left))}return i},pn.prototype.showSelection=function(e){var n=this.cm,s=n.display;ve(s.cursorDiv,e.cursors),ve(s.selectionDiv,e.selection),e.teTop!=null&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},pn.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var n=this.cm;if(this.resetting=!0,n.somethingSelected()){this.prevInput="";var s=n.getSelection();this.textarea.value=s,n.state.focused&&ae(this.textarea),C&&L>=9&&(this.hasSelection=s)}else e||(this.prevInput=this.textarea.value="",C&&L>=9&&(this.hasSelection=null));this.resetting=!1}},pn.prototype.getField=function(){return this.textarea},pn.prototype.supportsTouch=function(){return!1},pn.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!q||P(Ve(this.textarea))!=this.textarea))try{this.textarea.focus()}catch{}},pn.prototype.blur=function(){this.textarea.blur()},pn.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},pn.prototype.receivedFocus=function(){this.slowPoll()},pn.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},pn.prototype.fastPoll=function(){var e=!1,n=this;n.pollingFast=!0;function s(){var i=n.poll();!i&&!e?(e=!0,n.polling.set(60,s)):(n.pollingFast=!1,n.slowPoll())}n.polling.set(20,s)},pn.prototype.poll=function(){var e=this,n=this.cm,s=this.textarea,i=this.prevInput;if(this.contextMenuPending||this.resetting||!n.state.focused||Kr(s)&&!i&&!this.composing||n.isReadOnly()||n.options.disableInput||n.state.keySeq)return!1;var o=s.value;if(o==i&&!n.somethingSelected())return!1;if(C&&L>=9&&this.hasSelection===o||Y&&/[\uf700-\uf7ff]/.test(o))return n.display.input.reset(),!1;if(n.doc.sel==n.display.selForContextMenu){var d=o.charCodeAt(0);if(d==8203&&!i&&(i="​"),d==8666)return this.reset(),this.cm.execCommand("undo")}for(var m=0,y=Math.min(i.length,o.length);m<y&&i.charCodeAt(m)==o.charCodeAt(m);)++m;return Ln(n,function(){Ll(n,o.slice(m),i.length-m,null,e.composing?"*compose":null),o.length>1e3||o.indexOf(`
`)>-1?s.value=e.prevInput="":e.prevInput=o,e.composing&&(e.composing.range.clear(),e.composing.range=n.markText(e.composing.start,n.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},pn.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},pn.prototype.onKeyPress=function(){C&&L>=9&&(this.hasSelection=null),this.fastPoll()},pn.prototype.onContextMenu=function(e){var n=this,s=n.cm,i=s.display,o=n.textarea;n.contextMenuPending&&n.contextMenuPending();var d=ps(s,e),m=i.scroller.scrollTop;if(!d||ne)return;var y=s.options.resetSelectionOnContextMenu;y&&s.doc.sel.contains(d)==-1&&dn(s,Wn)(s.doc,zn(d),$t);var b=o.style.cssText,k=n.wrapper.style.cssText,O=n.wrapper.offsetParent.getBoundingClientRect();n.wrapper.style.cssText="position: static",o.style.cssText=`position: absolute; width: 30px; height: 30px;
      top: `+(e.clientY-O.top-5)+"px; left: "+(e.clientX-O.left-5)+`px;
      z-index: 1000; background: `+(C?"rgba(255, 255, 255, .05)":"transparent")+`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;var B;A&&(B=o.ownerDocument.defaultView.scrollY),i.input.focus(),A&&o.ownerDocument.defaultView.scrollTo(null,B),i.input.reset(),s.somethingSelected()||(o.value=n.prevInput=" "),n.contextMenuPending=Z,i.selForContextMenu=s.doc.sel,clearTimeout(i.detectingSelectAll);function te(){if(o.selectionStart!=null){var xe=s.somethingSelected(),Le="​"+(xe?o.value:"");o.value="⇚",o.value=Le,n.prevInput=xe?"":"​",o.selectionStart=1,o.selectionEnd=Le.length,i.selForContextMenu=s.doc.sel}}function Z(){if(n.contextMenuPending==Z&&(n.contextMenuPending=!1,n.wrapper.style.cssText=k,o.style.cssText=b,C&&L<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=m),o.selectionStart!=null)){(!C||C&&L<9)&&te();var xe=0,Le=function(){i.selForContextMenu==s.doc.sel&&o.selectionStart==0&&o.selectionEnd>0&&n.prevInput=="​"?dn(s,Zi)(s):xe++<10?i.detectingSelectAll=setTimeout(Le,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(Le,200)}}if(C&&L>=9&&te(),Te){lr(e);var fe=function(){Gt(window,"mouseup",fe),setTimeout(Z,20)};nt(window,"mouseup",fe)}else setTimeout(Z,50)},pn.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled=e=="nocursor",this.textarea.readOnly=!!e},pn.prototype.setUneditable=function(){},pn.prototype.needsContentAttribute=!1;function Gc(e,n){if(n=n?He(n):{},n.value=e.value,!n.tabindex&&e.tabIndex&&(n.tabindex=e.tabIndex),!n.placeholder&&e.placeholder&&(n.placeholder=e.placeholder),n.autofocus==null){var s=P(Ve(e));n.autofocus=s==e||e.getAttribute("autofocus")!=null&&s==document.body}function i(){e.value=y.getValue()}var o;if(e.form&&(nt(e.form,"submit",i),!n.leaveSubmitMethodAlone)){var d=e.form;o=d.submit;try{var m=d.submit=function(){i(),d.submit=o,d.submit(),d.submit=m}}catch{}}n.finishInit=function(b){b.save=i,b.getTextArea=function(){return e},b.toTextArea=function(){b.toTextArea=isNaN,i(),e.parentNode.removeChild(b.getWrapperElement()),e.style.display="",e.form&&(Gt(e.form,"submit",i),!n.leaveSubmitMethodAlone&&typeof e.form.submit=="function"&&(e.form.submit=o))}},e.style.display="none";var y=Xt(function(b){return e.parentNode.insertBefore(b,e.nextSibling)},n);return y}function Wa(e){e.off=Gt,e.on=nt,e.wheelEventPixels=bs,e.Doc=It,e.splitLines=ur,e.countColumn=Be,e.findColumn=bt,e.isWordChar=$e,e.Pass=Qt,e.signal=At,e.Line=ki,e.changeEnd=Fn,e.scrollbarModel=_c,e.Pos=de,e.cmpPos=Fe,e.modes=Rr,e.mimeModes=Ir,e.resolveMode=Er,e.getMode=zi,e.modeExtensions=ii,e.extendMode=xi,e.copyState=Lt,e.startState=bi,e.innerMode=os,e.commands=Uo,e.keyMap=Ri,e.keyName=Su,e.isModifierKey=wu,e.lookupKey=eo,e.normalizeKeyMap=Ac,e.StringStream=Yt,e.SharedTextMarker=Qs,e.TextMarker=mi,e.LineWidget=Pi,e.e_preventDefault=wn,e.e_stopPropagation=ni,e.e_stop=lr,e.addClass=G,e.contains=S,e.rmClass=ke,e.keyNames=Qr}yr(Xt),Ml(Xt);var nr="iter insert remove copy getEditor constructor".split(" ");for(var Dl in It.prototype)It.prototype.hasOwnProperty(Dl)&&Ge(nr,Dl)<0&&(Xt.prototype[Dl]=(function(e){return function(){return e.apply(this.doc,arguments)}})(It.prototype[Dl]));return ar(It),Xt.inputStyles={textarea:pn,contenteditable:Mt},Xt.defineMode=function(e){!Xt.defaults.mode&&e!="null"&&(Xt.defaults.mode=e),jr.apply(this,arguments)},Xt.defineMIME=Ft,Xt.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),Xt.defineMIME("text/plain","null"),Xt.defineExtension=function(e,n){Xt.prototype[e]=n},Xt.defineDocExtension=function(e,n){It.prototype[e]=n},Xt.fromTextArea=Gc,Wa(Xt),Xt.version="5.65.21",Xt}))})(fd)),fd.exports}var hx=ss();const uf=If(hx);var cf={exports:{}},df;function px(){return df||(df=1,(function(u,h){(function(p){p(ss())})(function(p){function v(L){return new RegExp("^(("+L.join(")|(")+"))\\b")}var x=v(["and","or","not","is"]),w=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],N=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];p.registerHelper("hintWords","python",w.concat(N).concat(["exec","print"]));function E(L){return L.scopes[L.scopes.length-1]}p.defineMode("python",function(L,A){for(var M="error",I=A.delimiters||A.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,V=[A.singleOperators,A.doubleOperators,A.doubleDelimiters,A.tripleDelimiters,A.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],ne=0;ne<V.length;ne++)V[ne]||V.splice(ne--,1);var $=A.hangingIndent||L.indentUnit,se=w,D=N;A.extra_keywords!=null&&(se=se.concat(A.extra_keywords)),A.extra_builtins!=null&&(D=D.concat(A.extra_builtins));var F=!(A.version&&Number(A.version)<3);if(F){var z=A.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;se=se.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),D=D.concat(["ascii","bytes","exec","print"]);var q=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var z=A.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;se=se.concat(["exec","print"]),D=D.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var q=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var Y=v(se),ge=v(D);function le(Q,U){var S=Q.sol()&&U.lastToken!="\\";if(S&&(U.indent=Q.indentation()),S&&E(U).type=="py"){var P=E(U).offset;if(Q.eatSpace()){var G=Q.indentation();return G>P?ie(U):G<P&&re(Q,U)&&Q.peek()!="#"&&(U.errorToken=!0),null}else{var H=ye(Q,U);return P>0&&re(Q,U)&&(H+=" "+M),H}}return ye(Q,U)}function ye(Q,U,S){if(Q.eatSpace())return null;if(!S&&Q.match(/^#.*/))return"comment";if(Q.match(/^[0-9\.]/,!1)){var P=!1;if(Q.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(P=!0),Q.match(/^[\d_]+\.\d*/)&&(P=!0),Q.match(/^\.\d+/)&&(P=!0),P)return Q.eat(/J/i),"number";var G=!1;if(Q.match(/^0x[0-9a-f_]+/i)&&(G=!0),Q.match(/^0b[01_]+/i)&&(G=!0),Q.match(/^0o[0-7_]+/i)&&(G=!0),Q.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(Q.eat(/J/i),G=!0),Q.match(/^0(?![\dx])/i)&&(G=!0),G)return Q.eat(/L/i),"number"}if(Q.match(q)){var H=Q.current().toLowerCase().indexOf("f")!==-1;return H?(U.tokenize=We(Q.current(),U.tokenize),U.tokenize(Q,U)):(U.tokenize=Te(Q.current(),U.tokenize),U.tokenize(Q,U))}for(var ae=0;ae<V.length;ae++)if(Q.match(V[ae]))return"operator";return Q.match(I)?"punctuation":U.lastToken=="."&&Q.match(z)?"property":Q.match(Y)||Q.match(x)?"keyword":Q.match(ge)?"builtin":Q.match(/^(self|cls)\b/)?"variable-2":Q.match(z)?U.lastToken=="def"||U.lastToken=="class"?"def":"variable":(Q.next(),S?null:M)}function We(Q,U){for(;"rubf".indexOf(Q.charAt(0).toLowerCase())>=0;)Q=Q.substr(1);var S=Q.length==1,P="string";function G(ae){return function(Oe,Je){var Ve=ye(Oe,Je,!0);return Ve=="punctuation"&&(Oe.current()=="{"?Je.tokenize=G(ae+1):Oe.current()=="}"&&(ae>1?Je.tokenize=G(ae-1):Je.tokenize=H)),Ve}}function H(ae,Oe){for(;!ae.eol();)if(ae.eatWhile(/[^'"\{\}\\]/),ae.eat("\\")){if(ae.next(),S&&ae.eol())return P}else{if(ae.match(Q))return Oe.tokenize=U,P;if(ae.match("{{"))return P;if(ae.match("{",!1))return Oe.tokenize=G(0),ae.current()?P:Oe.tokenize(ae,Oe);if(ae.match("}}"))return P;if(ae.match("}"))return M;ae.eat(/['"]/)}if(S){if(A.singleLineStringErrors)return M;Oe.tokenize=U}return P}return H.isString=!0,H}function Te(Q,U){for(;"rubf".indexOf(Q.charAt(0).toLowerCase())>=0;)Q=Q.substr(1);var S=Q.length==1,P="string";function G(H,ae){for(;!H.eol();)if(H.eatWhile(/[^'"\\]/),H.eat("\\")){if(H.next(),S&&H.eol())return P}else{if(H.match(Q))return ae.tokenize=U,P;H.eat(/['"]/)}if(S){if(A.singleLineStringErrors)return M;ae.tokenize=U}return P}return G.isString=!0,G}function ie(Q){for(;E(Q).type!="py";)Q.scopes.pop();Q.scopes.push({offset:E(Q).offset+L.indentUnit,type:"py",align:null})}function ke(Q,U,S){var P=Q.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:Q.column()+1;U.scopes.push({offset:U.indent+$,type:S,align:P})}function re(Q,U){for(var S=Q.indentation();U.scopes.length>1&&E(U).offset>S;){if(E(U).type!="py")return!0;U.scopes.pop()}return E(U).offset!=S}function ve(Q,U){Q.sol()&&(U.beginningOfLine=!0,U.dedent=!1);var S=U.tokenize(Q,U),P=Q.current();if(U.beginningOfLine&&P=="@")return Q.match(z,!1)?"meta":F?"operator":M;if(/\S/.test(P)&&(U.beginningOfLine=!1),(S=="variable"||S=="builtin")&&U.lastToken=="meta"&&(S="meta"),(P=="pass"||P=="return")&&(U.dedent=!0),P=="lambda"&&(U.lambda=!0),P==":"&&!U.lambda&&E(U).type=="py"&&Q.match(/^\s*(?:#|$)/,!1)&&ie(U),P.length==1&&!/string|comment/.test(S)){var G="[({".indexOf(P);if(G!=-1&&ke(Q,U,"])}".slice(G,G+1)),G="])}".indexOf(P),G!=-1)if(E(U).type==P)U.indent=U.scopes.pop().offset-$;else return M}return U.dedent&&Q.eol()&&E(U).type=="py"&&U.scopes.length>1&&U.scopes.pop(),S}var T={startState:function(Q){return{tokenize:le,scopes:[{offset:Q||0,type:"py",align:null}],indent:Q||0,lastToken:null,lambda:!1,dedent:0}},token:function(Q,U){var S=U.errorToken;S&&(U.errorToken=!1);var P=ve(Q,U);return P&&P!="comment"&&(U.lastToken=P=="keyword"||P=="punctuation"?Q.current():P),P=="punctuation"&&(P=null),Q.eol()&&U.lambda&&(U.lambda=!1),S?P+" "+M:P},indent:function(Q,U){if(Q.tokenize!=le)return Q.tokenize.isString?p.Pass:0;var S=E(Q),P=S.type==U.charAt(0)||S.type=="py"&&!Q.dedent&&/^(else:|elif |except |finally:)/.test(U);return S.align!=null?S.align-(P?1:0):S.offset-(P?$:0)},electricInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,closeBrackets:{triples:`'"`},lineComment:"#",fold:"indent"};return T}),p.defineMIME("text/x-python","python");var C=function(L){return L.split(" ")};p.defineMIME("text/x-cython",{name:"python",extra_keywords:C("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})})})()),cf.exports}px();var hf={exports:{}},pf;function lm(){return pf||(pf=1,(function(u,h){(function(p){p(ss())})(function(p){p.defineMode("javascript",function(v,x){var w=v.indentUnit,N=x.statementIndent,E=x.jsonld,C=x.json||E,L=x.trackScope!==!1,A=x.typescript,M=x.wordCharacters||/[\w$\xa1-\uffff]/,I=(function(){function _(Jt){return{type:Jt,style:"keyword"}}var W=_("keyword a"),pe=_("keyword b"),Ne=_("keyword c"),de=_("keyword d"),Fe=_("operator"),Ct={type:"atom",style:"atom"};return{if:_("if"),while:W,with:W,else:pe,do:pe,try:pe,finally:pe,return:de,break:de,continue:de,new:_("new"),delete:Ne,void:Ne,throw:Ne,debugger:_("debugger"),var:_("var"),const:_("var"),let:_("var"),function:_("function"),catch:_("catch"),for:_("for"),switch:_("switch"),case:_("case"),default:_("default"),in:Fe,typeof:Fe,instanceof:Fe,true:Ct,false:Ct,null:Ct,undefined:Ct,NaN:Ct,Infinity:Ct,this:_("this"),class:_("class"),super:_("atom"),yield:Ne,export:_("export"),import:_("import"),extends:Ne,await:Ne}})(),V=/[+\-*&%=<>!?|~^@]/,ne=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function $(_){for(var W=!1,pe,Ne=!1;(pe=_.next())!=null;){if(!W){if(pe=="/"&&!Ne)return;pe=="["?Ne=!0:Ne&&pe=="]"&&(Ne=!1)}W=!W&&pe=="\\"}}var se,D;function F(_,W,pe){return se=_,D=pe,W}function z(_,W){var pe=_.next();if(pe=='"'||pe=="'")return W.tokenize=q(pe),W.tokenize(_,W);if(pe=="."&&_.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return F("number","number");if(pe=="."&&_.match(".."))return F("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(pe))return F(pe);if(pe=="="&&_.eat(">"))return F("=>","operator");if(pe=="0"&&_.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return F("number","number");if(/\d/.test(pe))return _.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),F("number","number");if(pe=="/")return _.eat("*")?(W.tokenize=Y,Y(_,W)):_.eat("/")?(_.skipToEnd(),F("comment","comment")):Mn(_,W,1)?($(_),_.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),F("regexp","string-2")):(_.eat("="),F("operator","operator",_.current()));if(pe=="`")return W.tokenize=ge,ge(_,W);if(pe=="#"&&_.peek()=="!")return _.skipToEnd(),F("meta","meta");if(pe=="#"&&_.eatWhile(M))return F("variable","property");if(pe=="<"&&_.match("!--")||pe=="-"&&_.match("->")&&!/\S/.test(_.string.slice(0,_.start)))return _.skipToEnd(),F("comment","comment");if(V.test(pe))return(pe!=">"||!W.lexical||W.lexical.type!=">")&&(_.eat("=")?(pe=="!"||pe=="=")&&_.eat("="):/[<>*+\-|&?]/.test(pe)&&(_.eat(pe),pe==">"&&_.eat(pe))),pe=="?"&&_.eat(".")?F("."):F("operator","operator",_.current());if(M.test(pe)){_.eatWhile(M);var Ne=_.current();if(W.lastType!="."){if(I.propertyIsEnumerable(Ne)){var de=I[Ne];return F(de.type,de.style,Ne)}if(Ne=="async"&&_.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return F("async","keyword",Ne)}return F("variable","variable",Ne)}}function q(_){return function(W,pe){var Ne=!1,de;if(E&&W.peek()=="@"&&W.match(ne))return pe.tokenize=z,F("jsonld-keyword","meta");for(;(de=W.next())!=null&&!(de==_&&!Ne);)Ne=!Ne&&de=="\\";return Ne||(pe.tokenize=z),F("string","string")}}function Y(_,W){for(var pe=!1,Ne;Ne=_.next();){if(Ne=="/"&&pe){W.tokenize=z;break}pe=Ne=="*"}return F("comment","comment")}function ge(_,W){for(var pe=!1,Ne;(Ne=_.next())!=null;){if(!pe&&(Ne=="`"||Ne=="$"&&_.eat("{"))){W.tokenize=z;break}pe=!pe&&Ne=="\\"}return F("quasi","string-2",_.current())}var le="([{}])";function ye(_,W){W.fatArrowAt&&(W.fatArrowAt=null);var pe=_.string.indexOf("=>",_.start);if(!(pe<0)){if(A){var Ne=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(_.string.slice(_.start,pe));Ne&&(pe=Ne.index)}for(var de=0,Fe=!1,Ct=pe-1;Ct>=0;--Ct){var Jt=_.string.charAt(Ct),Sn=le.indexOf(Jt);if(Sn>=0&&Sn<3){if(!de){++Ct;break}if(--de==0){Jt=="("&&(Fe=!0);break}}else if(Sn>=3&&Sn<6)++de;else if(M.test(Jt))Fe=!0;else if(/["'\/`]/.test(Jt))for(;;--Ct){if(Ct==0)return;var oi=_.string.charAt(Ct-1);if(oi==Jt&&_.string.charAt(Ct-2)!="\\"){Ct--;break}}else if(Fe&&!de){++Ct;break}}Fe&&!de&&(W.fatArrowAt=Ct)}}var We={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function Te(_,W,pe,Ne,de,Fe){this.indented=_,this.column=W,this.type=pe,this.prev=de,this.info=Fe,Ne!=null&&(this.align=Ne)}function ie(_,W){if(!L)return!1;for(var pe=_.localVars;pe;pe=pe.next)if(pe.name==W)return!0;for(var Ne=_.context;Ne;Ne=Ne.prev)for(var pe=Ne.vars;pe;pe=pe.next)if(pe.name==W)return!0}function ke(_,W,pe,Ne,de){var Fe=_.cc;for(re.state=_,re.stream=de,re.marked=null,re.cc=Fe,re.style=W,_.lexical.hasOwnProperty("align")||(_.lexical.align=!0);;){var Ct=Fe.length?Fe.pop():C?Ge:Be;if(Ct(pe,Ne)){for(;Fe.length&&Fe[Fe.length-1].lex;)Fe.pop()();return re.marked?re.marked:pe=="variable"&&ie(_,Ne)?"variable-2":W}}}var re={state:null,marked:null,cc:null};function ve(){for(var _=arguments.length-1;_>=0;_--)re.cc.push(arguments[_])}function T(){return ve.apply(null,arguments),!0}function Q(_,W){for(var pe=W;pe;pe=pe.next)if(pe.name==_)return!0;return!1}function U(_){var W=re.state;if(re.marked="def",!!L){if(W.context){if(W.lexical.info=="var"&&W.context&&W.context.block){var pe=S(_,W.context);if(pe!=null){W.context=pe;return}}else if(!Q(_,W.localVars)){W.localVars=new H(_,W.localVars);return}}x.globalVars&&!Q(_,W.globalVars)&&(W.globalVars=new H(_,W.globalVars))}}function S(_,W){if(W)if(W.block){var pe=S(_,W.prev);return pe?pe==W.prev?W:new G(pe,W.vars,!0):null}else return Q(_,W.vars)?W:new G(W.prev,new H(_,W.vars),!1);else return null}function P(_){return _=="public"||_=="private"||_=="protected"||_=="abstract"||_=="readonly"}function G(_,W,pe){this.prev=_,this.vars=W,this.block=pe}function H(_,W){this.name=_,this.next=W}var ae=new H("this",new H("arguments",null));function Oe(){re.state.context=new G(re.state.context,re.state.localVars,!1),re.state.localVars=ae}function Je(){re.state.context=new G(re.state.context,re.state.localVars,!0),re.state.localVars=null}Oe.lex=Je.lex=!0;function Ve(){re.state.localVars=re.state.context.vars,re.state.context=re.state.context.prev}Ve.lex=!0;function Se(_,W){var pe=function(){var Ne=re.state,de=Ne.indented;if(Ne.lexical.type=="stat")de=Ne.lexical.indented;else for(var Fe=Ne.lexical;Fe&&Fe.type==")"&&Fe.align;Fe=Fe.prev)de=Fe.indented;Ne.lexical=new Te(de,re.stream.column(),_,null,Ne.lexical,W)};return pe.lex=!0,pe}function Me(){var _=re.state;_.lexical.prev&&(_.lexical.type==")"&&(_.indented=_.lexical.indented),_.lexical=_.lexical.prev)}Me.lex=!0;function He(_){function W(pe){return pe==_?T():_==";"||pe=="}"||pe==")"||pe=="]"?ve():T(W)}return W}function Be(_,W){return _=="var"?T(Se("vardef",W),ni,He(";"),Me):_=="keyword a"?T(Se("form"),Qt,Be,Me):_=="keyword b"?T(Se("form"),Be,Me):_=="keyword d"?re.stream.match(/^\s*$/,!1)?T():T(Se("stat"),fn,He(";"),Me):_=="debugger"?T(He(";")):_=="{"?T(Se("}"),Je,Xn,Me,Ve):_==";"?T():_=="if"?(re.state.lexical.info=="else"&&re.state.cc[re.state.cc.length-1]==Me&&re.state.cc.pop()(),T(Se("form"),Qt,Be,Me,Qn)):_=="function"?T(ur):_=="for"?T(Se("form"),Je,ri,Be,Ve,Me):_=="class"||A&&W=="interface"?(re.marked="keyword",T(Se("form",_=="class"?_:W),Rr,Me)):_=="variable"?A&&W=="declare"?(re.marked="keyword",T(Be)):A&&(W=="module"||W=="enum"||W=="type")&&re.stream.match(/^\s*\w/,!1)?(re.marked="keyword",W=="enum"?T(Xe):W=="type"?T(Ls,He("operator"),gt,He(";")):T(Se("form"),In,He("{"),Se("}"),Xn,Me,Me)):A&&W=="namespace"?(re.marked="keyword",T(Se("form"),Ge,Be,Me)):A&&W=="abstract"?(re.marked="keyword",T(Be)):T(Se("stat"),xt):_=="switch"?T(Se("form"),Qt,He("{"),Se("}","switch"),Je,Xn,Me,Me,Ve):_=="case"?T(Ge,He(":")):_=="default"?T(He(":")):_=="catch"?T(Se("form"),Oe,tt,Be,Me,Ve):_=="export"?T(Se("stat"),Er,Me):_=="import"?T(Se("stat"),ii,Me):_=="async"?T(Be):W=="@"?T(Ge,Be):ve(Se("stat"),Ge,He(";"),Me)}function tt(_){if(_=="(")return T(kn,He(")"))}function Ge(_,W){return $t(_,W,!1)}function qt(_,W){return $t(_,W,!0)}function Qt(_){return _!="("?ve():T(Se(")"),fn,He(")"),Me)}function $t(_,W,pe){if(re.state.fatArrowAt==re.stream.start){var Ne=pe?vt:Ke;if(_=="(")return T(Oe,Se(")"),dt(kn,")"),Me,He("=>"),Ne,Ve);if(_=="variable")return ve(Oe,In,He("=>"),Ne,Ve)}var de=pe?bt:et;return We.hasOwnProperty(_)?T(de):_=="function"?T(ur,de):_=="class"||A&&W=="interface"?(re.marked="keyword",T(Se("form"),mo,Me)):_=="keyword c"||_=="async"?T(pe?qt:Ge):_=="("?T(Se(")"),fn,He(")"),Me,de):_=="operator"||_=="spread"?T(pe?qt:Ge):_=="["?T(Se("]"),Yt,Me,de):_=="{"?mn(st,"}",null,de):_=="quasi"?ve(lt,de):_=="new"?T(oe(pe)):T()}function fn(_){return _.match(/[;\}\)\],]/)?ve():ve(Ge)}function et(_,W){return _==","?T(fn):bt(_,W,!1)}function bt(_,W,pe){var Ne=pe==!1?et:bt,de=pe==!1?Ge:qt;if(_=="=>")return T(Oe,pe?vt:Ke,Ve);if(_=="operator")return/\+\+|--/.test(W)||A&&W=="!"?T(Ne):A&&W=="<"&&re.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?T(Se(">"),dt(gt,">"),Me,Ne):W=="?"?T(Ge,He(":"),de):T(de);if(_=="quasi")return ve(lt,Ne);if(_!=";"){if(_=="(")return mn(qt,")","call",Ne);if(_==".")return T($e,Ne);if(_=="[")return T(Se("]"),fn,He("]"),Me,Ne);if(A&&W=="as")return re.marked="keyword",T(gt,Ne);if(_=="regexp")return re.state.lastType=re.marked="operator",re.stream.backUp(re.stream.pos-re.stream.start-1),T(de)}}function lt(_,W){return _!="quasi"?ve():W.slice(W.length-2)!="${"?T(lt):T(fn,Zt)}function Zt(_){if(_=="}")return re.marked="string-2",re.state.tokenize=ge,T(lt)}function Ke(_){return ye(re.stream,re.state),ve(_=="{"?Be:Ge)}function vt(_){return ye(re.stream,re.state),ve(_=="{"?Be:qt)}function oe(_){return function(W){return W=="."?T(_?me:_e):W=="variable"&&A?T(un,_?bt:et):ve(_?qt:Ge)}}function _e(_,W){if(W=="target")return re.marked="keyword",T(et)}function me(_,W){if(W=="target")return re.marked="keyword",T(bt)}function xt(_){return _==":"?T(Me,Be):ve(et,He(";"),Me)}function $e(_){if(_=="variable")return re.marked="property",T()}function st(_,W){if(_=="async")return re.marked="property",T(st);if(_=="variable"||re.style=="keyword"){if(re.marked="property",W=="get"||W=="set")return T(qe);var pe;return A&&re.state.fatArrowAt==re.stream.start&&(pe=re.stream.match(/^\s*:\s*/,!1))&&(re.state.fatArrowAt=re.stream.pos+pe[0].length),T(mt)}else{if(_=="number"||_=="string")return re.marked=E?"property":re.style+" property",T(mt);if(_=="jsonld-keyword")return T(mt);if(A&&P(W))return re.marked="keyword",T(st);if(_=="[")return T(Ge,_r,He("]"),mt);if(_=="spread")return T(qt,mt);if(W=="*")return re.marked="keyword",T(st);if(_==":")return ve(mt)}}function qe(_){return _!="variable"?ve(mt):(re.marked="property",T(ur))}function mt(_){if(_==":")return T(qt);if(_=="(")return ve(ur)}function dt(_,W,pe){function Ne(de,Fe){if(pe?pe.indexOf(de)>-1:de==","){var Ct=re.state.lexical;return Ct.info=="call"&&(Ct.pos=(Ct.pos||0)+1),T(function(Jt,Sn){return Jt==W||Sn==W?ve():ve(_)},Ne)}return de==W||Fe==W?T():pe&&pe.indexOf(";")>-1?ve(_):T(He(W))}return function(de,Fe){return de==W||Fe==W?T():ve(_,Ne)}}function mn(_,W,pe){for(var Ne=3;Ne<arguments.length;Ne++)re.cc.push(arguments[Ne]);return T(Se(W,pe),dt(_,W),Me)}function Xn(_){return _=="}"?T():ve(Be,Xn)}function _r(_,W){if(A){if(_==":")return T(gt);if(W=="?")return T(_r)}}function Hr(_,W){if(A&&(_==":"||W=="in"))return T(gt)}function or(_){if(A&&_==":")return re.stream.match(/^\s*\w+\s+is\b/,!1)?T(Ge,vi,gt):T(gt)}function vi(_,W){if(W=="is")return re.marked="keyword",T()}function gt(_,W){if(W=="keyof"||W=="typeof"||W=="infer"||W=="readonly")return re.marked="keyword",T(W=="typeof"?qt:gt);if(_=="variable"||W=="void")return re.marked="type",T(jn);if(W=="|"||W=="&")return T(gt);if(_=="string"||_=="number"||_=="atom")return T(jn);if(_=="[")return T(Se("]"),dt(gt,"]",","),Me,jn);if(_=="{")return T(Se("}"),nt,Me,jn);if(_=="(")return T(dt(Rt,")"),Di,jn);if(_=="<")return T(dt(gt,">"),gt);if(_=="quasi")return ve(Gt,jn)}function Di(_){if(_=="=>")return T(gt)}function nt(_){return _.match(/[\}\)\]]/)?T():_==","||_==";"?T(nt):ve(Tr,nt)}function Tr(_,W){if(_=="variable"||re.style=="keyword")return re.marked="property",T(Tr);if(W=="?"||_=="number"||_=="string")return T(Tr);if(_==":")return T(gt);if(_=="[")return T(He("variable"),Hr,He("]"),Tr);if(_=="(")return ve(Kr,Tr);if(!_.match(/[;\}\)\],]/))return T()}function Gt(_,W){return _!="quasi"?ve():W.slice(W.length-2)!="${"?T(Gt):T(gt,At)}function At(_){if(_=="}")return re.marked="string-2",re.state.tokenize=ge,T(Gt)}function Rt(_,W){return _=="variable"&&re.stream.match(/^\s*[?:]/,!1)||W=="?"?T(Rt):_==":"?T(gt):_=="spread"?T(Rt):ve(gt)}function jn(_,W){if(W=="<")return T(Se(">"),dt(gt,">"),Me,jn);if(W=="|"||_=="."||W=="&")return T(gt);if(_=="[")return T(gt,He("]"),jn);if(W=="extends"||W=="implements")return re.marked="keyword",T(gt);if(W=="?")return T(gt,He(":"),gt)}function un(_,W){if(W=="<")return T(Se(">"),dt(gt,">"),Me,jn)}function ar(){return ve(gt,wn)}function wn(_,W){if(W=="=")return T(gt)}function ni(_,W){return W=="enum"?(re.marked="keyword",T(Xe)):ve(In,_r,En,Nr)}function In(_,W){if(A&&P(W))return re.marked="keyword",T(In);if(_=="variable")return U(W),T();if(_=="spread")return T(In);if(_=="[")return mn(Br,"]");if(_=="{")return mn(lr,"}")}function lr(_,W){return _=="variable"&&!re.stream.match(/^\s*:/,!1)?(U(W),T(En)):(_=="variable"&&(re.marked="property"),_=="spread"?T(In):_=="}"?ve():_=="["?T(Ge,He("]"),He(":"),lr):T(He(":"),In,En))}function Br(){return ve(In,En)}function En(_,W){if(W=="=")return T(qt)}function Nr(_){if(_==",")return T(ni)}function Qn(_,W){if(_=="keyword b"&&W=="else")return T(Se("form","else"),Be,Me)}function ri(_,W){if(W=="await")return T(ri);if(_=="(")return T(Se(")"),Ur,Me)}function Ur(_){return _=="var"?T(ni,qr):_=="variable"?T(qr):ve(qr)}function qr(_,W){return _==")"?T():_==";"?T(qr):W=="in"||W=="of"?(re.marked="keyword",T(Ge,qr)):ve(Ge,qr)}function ur(_,W){if(W=="*")return re.marked="keyword",T(ur);if(_=="variable")return U(W),T(ur);if(_=="(")return T(Oe,Se(")"),dt(kn,")"),Me,or,Be,Ve);if(A&&W=="<")return T(Se(">"),dt(ar,">"),Me,ur)}function Kr(_,W){if(W=="*")return re.marked="keyword",T(Kr);if(_=="variable")return U(W),T(Kr);if(_=="(")return T(Oe,Se(")"),dt(kn,")"),Me,or,Ve);if(A&&W=="<")return T(Se(">"),dt(ar,">"),Me,Kr)}function Ls(_,W){if(_=="keyword"||_=="variable")return re.marked="type",T(Ls);if(W=="<")return T(Se(">"),dt(ar,">"),Me)}function kn(_,W){return W=="@"&&T(Ge,kn),_=="spread"?T(kn):A&&P(W)?(re.marked="keyword",T(kn)):A&&_=="this"?T(_r,En):ve(In,_r,En)}function mo(_,W){return _=="variable"?Rr(_,W):Ir(_,W)}function Rr(_,W){if(_=="variable")return U(W),T(Ir)}function Ir(_,W){if(W=="<")return T(Se(">"),dt(ar,">"),Me,Ir);if(W=="extends"||W=="implements"||A&&_==",")return W=="implements"&&(re.marked="keyword"),T(A?gt:Ge,Ir);if(_=="{")return T(Se("}"),jr,Me)}function jr(_,W){if(_=="async"||_=="variable"&&(W=="static"||W=="get"||W=="set"||A&&P(W))&&re.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return re.marked="keyword",T(jr);if(_=="variable"||re.style=="keyword")return re.marked="property",T(Ft,jr);if(_=="number"||_=="string")return T(Ft,jr);if(_=="[")return T(Ge,_r,He("]"),Ft,jr);if(W=="*")return re.marked="keyword",T(jr);if(A&&_=="(")return ve(Kr,jr);if(_==";"||_==",")return T(jr);if(_=="}")return T();if(W=="@")return T(Ge,jr)}function Ft(_,W){if(W=="!"||W=="?")return T(Ft);if(_==":")return T(gt,En);if(W=="=")return T(qt);var pe=re.state.lexical.prev,Ne=pe&&pe.info=="interface";return ve(Ne?Kr:ur)}function Er(_,W){return W=="*"?(re.marked="keyword",T(bi,He(";"))):W=="default"?(re.marked="keyword",T(Ge,He(";"))):_=="{"?T(dt(zi,"}"),bi,He(";")):ve(Be)}function zi(_,W){if(W=="as")return re.marked="keyword",T(He("variable"));if(_=="variable")return ve(qt,zi)}function ii(_){return _=="string"?T():_=="("?ve(Ge):_=="."?ve(et):ve(xi,Lt,bi)}function xi(_,W){return _=="{"?mn(xi,"}"):(_=="variable"&&U(W),W=="*"&&(re.marked="keyword"),T(os))}function Lt(_){if(_==",")return T(xi,Lt)}function os(_,W){if(W=="as")return re.marked="keyword",T(xi)}function bi(_,W){if(W=="from")return re.marked="keyword",T(Ge)}function Yt(_){return _=="]"?T():ve(dt(qt,"]"))}function Xe(){return ve(Se("form"),In,He("{"),Se("}"),dt(si,"}"),Me,Me)}function si(){return ve(In,En)}function cr(_,W){return _.lastType=="operator"||_.lastType==","||V.test(W.charAt(0))||/[,.]/.test(W.charAt(0))}function Mn(_,W,pe){return W.tokenize==z&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(W.lastType)||W.lastType=="quasi"&&/\{\s*$/.test(_.string.slice(0,_.pos-(pe||0)))}return{startState:function(_){var W={tokenize:z,lastType:"sof",cc:[],lexical:new Te((_||0)-w,0,"block",!1),localVars:x.localVars,context:x.localVars&&new G(null,null,!1),indented:_||0};return x.globalVars&&typeof x.globalVars=="object"&&(W.globalVars=x.globalVars),W},token:function(_,W){if(_.sol()&&(W.lexical.hasOwnProperty("align")||(W.lexical.align=!1),W.indented=_.indentation(),ye(_,W)),W.tokenize!=Y&&_.eatSpace())return null;var pe=W.tokenize(_,W);return se=="comment"?pe:(W.lastType=se=="operator"&&(D=="++"||D=="--")?"incdec":se,ke(W,pe,se,D,_))},indent:function(_,W){if(_.tokenize==Y||_.tokenize==ge)return p.Pass;if(_.tokenize!=z)return 0;var pe=W&&W.charAt(0),Ne=_.lexical,de;if(!/^\s*else\b/.test(W))for(var Fe=_.cc.length-1;Fe>=0;--Fe){var Ct=_.cc[Fe];if(Ct==Me)Ne=Ne.prev;else if(Ct!=Qn&&Ct!=Ve)break}for(;(Ne.type=="stat"||Ne.type=="form")&&(pe=="}"||(de=_.cc[_.cc.length-1])&&(de==et||de==bt)&&!/^[,\.=+\-*:?[\(]/.test(W));)Ne=Ne.prev;N&&Ne.type==")"&&Ne.prev.type=="stat"&&(Ne=Ne.prev);var Jt=Ne.type,Sn=pe==Jt;return Jt=="vardef"?Ne.indented+(_.lastType=="operator"||_.lastType==","?Ne.info.length+1:0):Jt=="form"&&pe=="{"?Ne.indented:Jt=="form"?Ne.indented+w:Jt=="stat"?Ne.indented+(cr(_,W)?N||w:0):Ne.info=="switch"&&!Sn&&x.doubleIndentSwitch!=!1?Ne.indented+(/^(?:case|default)\b/.test(W)?w:2*w):Ne.align?Ne.column+(Sn?0:1):Ne.indented+(Sn?0:w)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:C?null:"/*",blockCommentEnd:C?null:"*/",blockCommentContinue:C?null:" * ",lineComment:C?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:C?"json":"javascript",jsonldMode:E,jsonMode:C,expressionAllowed:Mn,skipExpression:function(_){ke(_,"atom","atom","true",new p.StringStream("",2,null))}}}),p.registerHelper("wordChars","javascript",/[\w$]/),p.defineMIME("text/javascript","javascript"),p.defineMIME("text/ecmascript","javascript"),p.defineMIME("application/javascript","javascript"),p.defineMIME("application/x-javascript","javascript"),p.defineMIME("application/ecmascript","javascript"),p.defineMIME("application/json",{name:"javascript",json:!0}),p.defineMIME("application/x-json",{name:"javascript",json:!0}),p.defineMIME("application/manifest+json",{name:"javascript",json:!0}),p.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),p.defineMIME("text/typescript",{name:"javascript",typescript:!0}),p.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})()),hf.exports}lm();var ff={exports:{}},mf;function fx(){return mf||(mf=1,(function(u,h){(function(p){p(ss())})(function(p){function v(S,P,G,H,ae,Oe){this.indented=S,this.column=P,this.type=G,this.info=H,this.align=ae,this.prev=Oe}function x(S,P,G,H){var ae=S.indented;return S.context&&S.context.type=="statement"&&G!="statement"&&(ae=S.context.indented),S.context=new v(ae,P,G,H,null,S.context)}function w(S){var P=S.context.type;return(P==")"||P=="]"||P=="}")&&(S.indented=S.context.indented),S.context=S.context.prev}function N(S,P,G){if(P.prevToken=="variable"||P.prevToken=="type"||/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(S.string.slice(0,G))||P.typeAtEndOfLine&&S.column()==S.indentation())return!0}function E(S){for(;;){if(!S||S.type=="top")return!0;if(S.type=="}"&&S.prev.info!="namespace")return!1;S=S.prev}}p.defineMode("clike",function(S,P){var G=S.indentUnit,H=P.statementIndentUnit||G,ae=P.dontAlignCalls,Oe=P.keywords||{},Je=P.types||{},Ve=P.builtin||{},Se=P.blockKeywords||{},Me=P.defKeywords||{},He=P.atoms||{},Be=P.hooks||{},tt=P.multiLineStrings,Ge=P.indentStatements!==!1,qt=P.indentSwitch!==!1,Qt=P.namespaceSeparator,$t=P.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,fn=P.numberStart||/[\d\.]/,et=P.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,bt=P.isOperatorChar||/[+\-*&%=<>!?|\/]/,lt=P.isIdentifierChar||/[\w\$_\xa1-\uffff]/,Zt=P.isReservedIdentifier||!1,Ke,vt;function oe($e,st){var qe=$e.next();if(Be[qe]){var mt=Be[qe]($e,st);if(mt!==!1)return mt}if(qe=='"'||qe=="'")return st.tokenize=_e(qe),st.tokenize($e,st);if(fn.test(qe)){if($e.backUp(1),$e.match(et))return"number";$e.next()}if($t.test(qe))return Ke=qe,null;if(qe=="/"){if($e.eat("*"))return st.tokenize=me,me($e,st);if($e.eat("/"))return $e.skipToEnd(),"comment"}if(bt.test(qe)){for(;!$e.match(/^\/[\/*]/,!1)&&$e.eat(bt););return"operator"}if($e.eatWhile(lt),Qt)for(;$e.match(Qt);)$e.eatWhile(lt);var dt=$e.current();return L(Oe,dt)?(L(Se,dt)&&(Ke="newstatement"),L(Me,dt)&&(vt=!0),"keyword"):L(Je,dt)?"type":L(Ve,dt)||Zt&&Zt(dt)?(L(Se,dt)&&(Ke="newstatement"),"builtin"):L(He,dt)?"atom":"variable"}function _e($e){return function(st,qe){for(var mt=!1,dt,mn=!1;(dt=st.next())!=null;){if(dt==$e&&!mt){mn=!0;break}mt=!mt&&dt=="\\"}return(mn||!(mt||tt))&&(qe.tokenize=null),"string"}}function me($e,st){for(var qe=!1,mt;mt=$e.next();){if(mt=="/"&&qe){st.tokenize=null;break}qe=mt=="*"}return"comment"}function xt($e,st){P.typeFirstDefinitions&&$e.eol()&&E(st.context)&&(st.typeAtEndOfLine=N($e,st,$e.pos))}return{startState:function($e){return{tokenize:null,context:new v(($e||0)-G,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function($e,st){var qe=st.context;if($e.sol()&&(qe.align==null&&(qe.align=!1),st.indented=$e.indentation(),st.startOfLine=!0),$e.eatSpace())return xt($e,st),null;Ke=vt=null;var mt=(st.tokenize||oe)($e,st);if(mt=="comment"||mt=="meta")return mt;if(qe.align==null&&(qe.align=!0),Ke==";"||Ke==":"||Ke==","&&$e.match(/^\s*(?:\/\/.*)?$/,!1))for(;st.context.type=="statement";)w(st);else if(Ke=="{")x(st,$e.column(),"}");else if(Ke=="[")x(st,$e.column(),"]");else if(Ke=="(")x(st,$e.column(),")");else if(Ke=="}"){for(;qe.type=="statement";)qe=w(st);for(qe.type=="}"&&(qe=w(st));qe.type=="statement";)qe=w(st)}else Ke==qe.type?w(st):Ge&&((qe.type=="}"||qe.type=="top")&&Ke!=";"||qe.type=="statement"&&Ke=="newstatement")&&x(st,$e.column(),"statement",$e.current());if(mt=="variable"&&(st.prevToken=="def"||P.typeFirstDefinitions&&N($e,st,$e.start)&&E(st.context)&&$e.match(/^\s*\(/,!1))&&(mt="def"),Be.token){var dt=Be.token($e,st,mt);dt!==void 0&&(mt=dt)}return mt=="def"&&P.styleDefs===!1&&(mt="variable"),st.startOfLine=!1,st.prevToken=vt?"def":mt||Ke,xt($e,st),mt},indent:function($e,st){if($e.tokenize!=oe&&$e.tokenize!=null||$e.typeAtEndOfLine&&E($e.context))return p.Pass;var qe=$e.context,mt=st&&st.charAt(0),dt=mt==qe.type;if(qe.type=="statement"&&mt=="}"&&(qe=qe.prev),P.dontIndentStatements)for(;qe.type=="statement"&&P.dontIndentStatements.test(qe.info);)qe=qe.prev;if(Be.indent){var mn=Be.indent($e,qe,st,G);if(typeof mn=="number")return mn}var Xn=qe.prev&&qe.prev.info=="switch";if(P.allmanIndentation&&/[{(]/.test(mt)){for(;qe.type!="top"&&qe.type!="}";)qe=qe.prev;return qe.indented}return qe.type=="statement"?qe.indented+(mt=="{"?0:H):qe.align&&(!ae||qe.type!=")")?qe.column+(dt?0:1):qe.type==")"&&!dt?qe.indented+H:qe.indented+(dt?0:G)+(!dt&&Xn&&!/^(?:case|default)\b/.test(st)?G:0)},electricInput:qt?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});function C(S){for(var P={},G=S.split(" "),H=0;H<G.length;++H)P[G[H]]=!0;return P}function L(S,P){return typeof S=="function"?S(P):S.propertyIsEnumerable(P)}var A="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",M="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",I="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",V="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",ne=C("int long char short double float unsigned signed void bool"),$=C("SEL instancetype id Class Protocol BOOL");function se(S){return L(ne,S)||/.+_t$/.test(S)}function D(S){return se(S)||L($,S)}var F="case do else for if switch while struct enum union",z="struct enum union";function q(S,P){if(!P.startOfLine)return!1;for(var G,H=null;G=S.peek();){if(G=="\\"&&S.match(/^.$/)){H=q;break}else if(G=="/"&&S.match(/^\/[\/\*]/,!1))break;S.next()}return P.tokenize=H,"meta"}function Y(S,P){return P.prevToken=="type"?"type":!1}function ge(S){return!S||S.length<2||S[0]!="_"?!1:S[1]=="_"||S[1]!==S[1].toLowerCase()}function le(S){return S.eatWhile(/[\w\.']/),"number"}function ye(S,P){if(S.backUp(1),S.match(/^(?:R|u8R|uR|UR|LR)/)){var G=S.match(/^"([^\s\\()]{0,16})\(/);return G?(P.cpp11RawStringDelim=G[1],P.tokenize=ie,ie(S,P)):!1}return S.match(/^(?:u8|u|U|L)/)?S.match(/^["']/,!1)?"string":!1:(S.next(),!1)}function We(S){var P=/(\w+)::~?(\w+)$/.exec(S);return P&&P[1]==P[2]}function Te(S,P){for(var G;(G=S.next())!=null;)if(G=='"'&&!S.eat('"')){P.tokenize=null;break}return"string"}function ie(S,P){var G=P.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),H=S.match(new RegExp(".*?\\)"+G+'"'));return H?P.tokenize=null:S.skipToEnd(),"string"}function ke(S,P){typeof S=="string"&&(S=[S]);var G=[];function H(Oe){if(Oe)for(var Je in Oe)Oe.hasOwnProperty(Je)&&G.push(Je)}H(P.keywords),H(P.types),H(P.builtin),H(P.atoms),G.length&&(P.helperType=S[0],p.registerHelper("hintWords",S[0],G));for(var ae=0;ae<S.length;++ae)p.defineMIME(S[ae],P)}ke(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:C(A),types:se,blockKeywords:C(F),defKeywords:C(z),typeFirstDefinitions:!0,atoms:C("NULL true false"),isReservedIdentifier:ge,hooks:{"#":q,"*":Y},modeProps:{fold:["brace","include"]}}),ke(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:C(A+" "+M),types:se,blockKeywords:C(F+" class try catch"),defKeywords:C(z+" class namespace"),typeFirstDefinitions:!0,atoms:C("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:ge,hooks:{"#":q,"*":Y,u:ye,U:ye,L:ye,R:ye,0:le,1:le,2:le,3:le,4:le,5:le,6:le,7:le,8:le,9:le,token:function(S,P,G){if(G=="variable"&&S.peek()=="("&&(P.prevToken==";"||P.prevToken==null||P.prevToken=="}")&&We(S.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),ke("text/x-java",{name:"clike",keywords:C("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:C("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:C("catch class do else finally for if switch try while"),defKeywords:C("class interface enum @interface"),typeFirstDefinitions:!0,atoms:C("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(S){return S.match("interface",!1)?!1:(S.eatWhile(/[\w\$_]/),"meta")},'"':function(S,P){return S.match(/""$/)?(P.tokenize=re,P.tokenize(S,P)):!1}},modeProps:{fold:["brace","import"]}}),ke("text/x-csharp",{name:"clike",keywords:C("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:C("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:C("catch class do else finally for foreach if struct switch try while"),defKeywords:C("class interface namespace record struct var"),typeFirstDefinitions:!0,atoms:C("true false null"),hooks:{"@":function(S,P){return S.eat('"')?(P.tokenize=Te,Te(S,P)):(S.eatWhile(/[\w\$_]/),"meta")}}});function re(S,P){for(var G=!1;!S.eol();){if(!G&&S.match('"""')){P.tokenize=null;break}G=S.next()=="\\"&&!G}return"string"}function ve(S){return function(P,G){for(var H;H=P.next();)if(H=="*"&&P.eat("/"))if(S==1){G.tokenize=null;break}else return G.tokenize=ve(S-1),G.tokenize(P,G);else if(H=="/"&&P.eat("*"))return G.tokenize=ve(S+1),G.tokenize(P,G);return"comment"}}ke("text/x-scala",{name:"clike",keywords:C("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:C("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:C("catch class enum do else finally for forSome if match switch try while"),defKeywords:C("class enum def object package trait type val var"),atoms:C("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(S){return S.eatWhile(/[\w\$_]/),"meta"},'"':function(S,P){return S.match('""')?(P.tokenize=re,P.tokenize(S,P)):!1},"'":function(S){return S.match(/^(\\[^'\s]+|[^\\'])'/)?"string-2":(S.eatWhile(/[\w\$_\xa1-\uffff]/),"atom")},"=":function(S,P){var G=P.context;return G.type=="}"&&G.align&&S.eat(">")?(P.context=new v(G.indented,G.column,G.type,G.info,null,G.prev),"operator"):!1},"/":function(S,P){return S.eat("*")?(P.tokenize=ve(1),P.tokenize(S,P)):!1}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}});function T(S){return function(P,G){for(var H=!1,ae,Oe=!1;!P.eol();){if(!S&&!H&&P.match('"')){Oe=!0;break}if(S&&P.match('"""')){Oe=!0;break}ae=P.next(),!H&&ae=="$"&&P.match("{")&&P.skipTo("}"),H=!H&&ae=="\\"&&!S}return(Oe||!S)&&(G.tokenize=null),"string"}}ke("text/x-kotlin",{name:"clike",keywords:C("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"),types:C("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),indentSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(ul?|l|f)?/i,blockKeywords:C("catch class do else finally for if where try while enum"),defKeywords:C("class val var object interface fun"),atoms:C("true false null this"),hooks:{"@":function(S){return S.eatWhile(/[\w\$_]/),"meta"},"*":function(S,P){return P.prevToken=="."?"variable":"operator"},'"':function(S,P){return P.tokenize=T(S.match('""')),P.tokenize(S,P)},"/":function(S,P){return S.eat("*")?(P.tokenize=ve(1),P.tokenize(S,P)):!1},indent:function(S,P,G,H){var ae=G&&G.charAt(0);if((S.prevToken=="}"||S.prevToken==")")&&G=="")return S.indented;if(S.prevToken=="operator"&&G!="}"&&S.context.type!="}"||S.prevToken=="variable"&&ae=="."||(S.prevToken=="}"||S.prevToken==")")&&ae==".")return H*2+P.indented;if(P.align&&P.type=="}")return P.indented+(S.context.type==(G||"").charAt(0)?0:H)}},modeProps:{closeBrackets:{triples:'"'}}}),ke(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:C("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:C("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:C("for while do if else struct"),builtin:C("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:C("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":q},modeProps:{fold:["brace","include"]}}),ke("text/x-nesc",{name:"clike",keywords:C(A+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:se,blockKeywords:C(F),atoms:C("null true false"),hooks:{"#":q},modeProps:{fold:["brace","include"]}}),ke("text/x-objectivec",{name:"clike",keywords:C(A+" "+I),types:D,builtin:C(V),blockKeywords:C(F+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:C(z+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:C("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ge,hooks:{"#":q,"*":Y},modeProps:{fold:["brace","include"]}}),ke("text/x-objectivec++",{name:"clike",keywords:C(A+" "+I+" "+M),types:D,builtin:C(V),blockKeywords:C(F+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:C(z+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:C("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ge,hooks:{"#":q,"*":Y,u:ye,U:ye,L:ye,R:ye,0:le,1:le,2:le,3:le,4:le,5:le,6:le,7:le,8:le,9:le,token:function(S,P,G){if(G=="variable"&&S.peek()=="("&&(P.prevToken==";"||P.prevToken==null||P.prevToken=="}")&&We(S.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),ke("text/x-squirrel",{name:"clike",keywords:C("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:se,blockKeywords:C("case catch class else for foreach if switch try while"),defKeywords:C("function local class"),typeFirstDefinitions:!0,atoms:C("true false null"),hooks:{"#":q},modeProps:{fold:["brace","include"]}});var Q=null;function U(S){return function(P,G){for(var H=!1,ae,Oe=!1;!P.eol();){if(!H&&P.match('"')&&(S=="single"||P.match('""'))){Oe=!0;break}if(!H&&P.match("``")){Q=U(S),Oe=!0;break}ae=P.next(),H=S=="single"&&!H&&ae=="\\"}return Oe&&(G.tokenize=null),"string"}}ke("text/x-ceylon",{name:"clike",keywords:C("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(S){var P=S.charAt(0);return P===P.toUpperCase()&&P!==P.toLowerCase()},blockKeywords:C("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:C("class dynamic function interface module object package value"),builtin:C("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:C("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(S){return S.eatWhile(/[\w\$_]/),"meta"},'"':function(S,P){return P.tokenize=U(S.match('""')?"triple":"single"),P.tokenize(S,P)},"`":function(S,P){return!Q||!S.match("`")?!1:(P.tokenize=Q,Q=null,P.tokenize(S,P))},"'":function(S){return S.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(S,P,G){if((G=="variable"||G=="type")&&P.prevToken==".")return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})})})()),ff.exports}fx();var gf={exports:{}},yf;function um(){return yf||(yf=1,(function(u,h){(function(p){p(ss())})(function(p){var v={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},x={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};p.defineMode("xml",function(w,N){var E=w.indentUnit,C={},L=N.htmlMode?v:x;for(var A in L)C[A]=L[A];for(var A in N)C[A]=N[A];var M,I;function V(T,Q){function U(G){return Q.tokenize=G,G(T,Q)}var S=T.next();if(S=="<")return T.eat("!")?T.eat("[")?T.match("CDATA[")?U(se("atom","]]>")):null:T.match("--")?U(se("comment","-->")):T.match("DOCTYPE",!0,!0)?(T.eatWhile(/[\w\._\-]/),U(D(1))):null:T.eat("?")?(T.eatWhile(/[\w\._\-]/),Q.tokenize=se("meta","?>"),"meta"):(M=T.eat("/")?"closeTag":"openTag",Q.tokenize=ne,"tag bracket");if(S=="&"){var P;return T.eat("#")?T.eat("x")?P=T.eatWhile(/[a-fA-F\d]/)&&T.eat(";"):P=T.eatWhile(/[\d]/)&&T.eat(";"):P=T.eatWhile(/[\w\.\-:]/)&&T.eat(";"),P?"atom":"error"}else return T.eatWhile(/[^&<]/),null}V.isInText=!0;function ne(T,Q){var U=T.next();if(U==">"||U=="/"&&T.eat(">"))return Q.tokenize=V,M=U==">"?"endTag":"selfcloseTag","tag bracket";if(U=="=")return M="equals",null;if(U=="<"){Q.tokenize=V,Q.state=ge,Q.tagName=Q.tagStart=null;var S=Q.tokenize(T,Q);return S?S+" tag error":"tag error"}else return/[\'\"]/.test(U)?(Q.tokenize=$(U),Q.stringStartCol=T.column(),Q.tokenize(T,Q)):(T.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function $(T){var Q=function(U,S){for(;!U.eol();)if(U.next()==T){S.tokenize=ne;break}return"string"};return Q.isInAttribute=!0,Q}function se(T,Q){return function(U,S){for(;!U.eol();){if(U.match(Q)){S.tokenize=V;break}U.next()}return T}}function D(T){return function(Q,U){for(var S;(S=Q.next())!=null;){if(S=="<")return U.tokenize=D(T+1),U.tokenize(Q,U);if(S==">")if(T==1){U.tokenize=V;break}else return U.tokenize=D(T-1),U.tokenize(Q,U)}return"meta"}}function F(T){return T&&T.toLowerCase()}function z(T,Q,U){this.prev=T.context,this.tagName=Q||"",this.indent=T.indented,this.startOfLine=U,(C.doNotIndent.hasOwnProperty(Q)||T.context&&T.context.noIndent)&&(this.noIndent=!0)}function q(T){T.context&&(T.context=T.context.prev)}function Y(T,Q){for(var U;;){if(!T.context||(U=T.context.tagName,!C.contextGrabbers.hasOwnProperty(F(U))||!C.contextGrabbers[F(U)].hasOwnProperty(F(Q))))return;q(T)}}function ge(T,Q,U){return T=="openTag"?(U.tagStart=Q.column(),le):T=="closeTag"?ye:ge}function le(T,Q,U){return T=="word"?(U.tagName=Q.current(),I="tag",ie):C.allowMissingTagName&&T=="endTag"?(I="tag bracket",ie(T,Q,U)):(I="error",le)}function ye(T,Q,U){if(T=="word"){var S=Q.current();return U.context&&U.context.tagName!=S&&C.implicitlyClosed.hasOwnProperty(F(U.context.tagName))&&q(U),U.context&&U.context.tagName==S||C.matchClosing===!1?(I="tag",We):(I="tag error",Te)}else return C.allowMissingTagName&&T=="endTag"?(I="tag bracket",We(T,Q,U)):(I="error",Te)}function We(T,Q,U){return T!="endTag"?(I="error",We):(q(U),ge)}function Te(T,Q,U){return I="error",We(T,Q,U)}function ie(T,Q,U){if(T=="word")return I="attribute",ke;if(T=="endTag"||T=="selfcloseTag"){var S=U.tagName,P=U.tagStart;return U.tagName=U.tagStart=null,T=="selfcloseTag"||C.autoSelfClosers.hasOwnProperty(F(S))?Y(U,S):(Y(U,S),U.context=new z(U,S,P==U.indented)),ge}return I="error",ie}function ke(T,Q,U){return T=="equals"?re:(C.allowMissing||(I="error"),ie(T,Q,U))}function re(T,Q,U){return T=="string"?ve:T=="word"&&C.allowUnquoted?(I="string",ie):(I="error",ie(T,Q,U))}function ve(T,Q,U){return T=="string"?ve:ie(T,Q,U)}return{startState:function(T){var Q={tokenize:V,state:ge,indented:T||0,tagName:null,tagStart:null,context:null};return T!=null&&(Q.baseIndent=T),Q},token:function(T,Q){if(!Q.tagName&&T.sol()&&(Q.indented=T.indentation()),T.eatSpace())return null;M=null;var U=Q.tokenize(T,Q);return(U||M)&&U!="comment"&&(I=null,Q.state=Q.state(M||U,T,Q),I&&(U=I=="error"?U+" error":I)),U},indent:function(T,Q,U){var S=T.context;if(T.tokenize.isInAttribute)return T.tagStart==T.indented?T.stringStartCol+1:T.indented+E;if(S&&S.noIndent)return p.Pass;if(T.tokenize!=ne&&T.tokenize!=V)return U?U.match(/^(\s*)/)[0].length:0;if(T.tagName)return C.multilineTagIndentPastTag!==!1?T.tagStart+T.tagName.length+2:T.tagStart+E*(C.multilineTagIndentFactor||1);if(C.alignCDATA&&/<!\[CDATA\[/.test(Q))return 0;var P=Q&&/^<(\/)?([\w_:\.-]*)/.exec(Q);if(P&&P[1])for(;S;)if(S.tagName==P[2]){S=S.prev;break}else if(C.implicitlyClosed.hasOwnProperty(F(S.tagName)))S=S.prev;else break;else if(P)for(;S;){var G=C.contextGrabbers[F(S.tagName)];if(G&&G.hasOwnProperty(F(P[2])))S=S.prev;else break}for(;S&&S.prev&&!S.startOfLine;)S=S.prev;return S?S.indent+E:T.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:C.htmlMode?"html":"xml",helperType:C.htmlMode?"html":"xml",skipAttribute:function(T){T.state==re&&(T.state=ie)},xmlCurrentTag:function(T){return T.tagName?{name:T.tagName,close:T.type=="closeTag"}:null},xmlCurrentContext:function(T){for(var Q=[],U=T.context;U;U=U.prev)Q.push(U.tagName);return Q.reverse()}}}),p.defineMIME("text/xml","xml"),p.defineMIME("application/xml","xml"),p.mimeModes.hasOwnProperty("text/html")||p.defineMIME("text/html",{name:"xml",htmlMode:!0})})})()),gf.exports}um();var vf={exports:{}},xf;function cm(){return xf||(xf=1,(function(u,h){(function(p){p(ss())})(function(p){p.defineMode("css",function(Te,ie){var ke=ie.inline;ie.propertyKeywords||(ie=p.resolveMode("text/css"));var re=Te.indentUnit,ve=ie.tokenHooks,T=ie.documentTypes||{},Q=ie.mediaTypes||{},U=ie.mediaFeatures||{},S=ie.mediaValueKeywords||{},P=ie.propertyKeywords||{},G=ie.nonStandardPropertyKeywords||{},H=ie.fontProperties||{},ae=ie.counterDescriptors||{},Oe=ie.colorKeywords||{},Je=ie.valueKeywords||{},Ve=ie.allowNested,Se=ie.lineComment,Me=ie.supportsAtComponent===!0,He=Te.highlightNonStandardPropertyKeywords!==!1,Be,tt;function Ge(oe,_e){return Be=_e,oe}function qt(oe,_e){var me=oe.next();if(ve[me]){var xt=ve[me](oe,_e);if(xt!==!1)return xt}if(me=="@")return oe.eatWhile(/[\w\\\-]/),Ge("def",oe.current());if(me=="="||(me=="~"||me=="|")&&oe.eat("="))return Ge(null,"compare");if(me=='"'||me=="'")return _e.tokenize=Qt(me),_e.tokenize(oe,_e);if(me=="#")return oe.eatWhile(/[\w\\\-]/),Ge("atom","hash");if(me=="!")return oe.match(/^\s*\w*/),Ge("keyword","important");if(/\d/.test(me)||me=="."&&oe.eat(/\d/))return oe.eatWhile(/[\w.%]/),Ge("number","unit");if(me==="-"){if(/[\d.]/.test(oe.peek()))return oe.eatWhile(/[\w.%]/),Ge("number","unit");if(oe.match(/^-[\w\\\-]*/))return oe.eatWhile(/[\w\\\-]/),oe.match(/^\s*:/,!1)?Ge("variable-2","variable-definition"):Ge("variable-2","variable");if(oe.match(/^\w+-/))return Ge("meta","meta")}else return/[,+>*\/]/.test(me)?Ge(null,"select-op"):me=="."&&oe.match(/^-?[_a-z][_a-z0-9-]*/i)?Ge("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(me)?Ge(null,me):oe.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(oe.current())&&(_e.tokenize=$t),Ge("variable callee","variable")):/[\w\\\-]/.test(me)?(oe.eatWhile(/[\w\\\-]/),Ge("property","word")):Ge(null,null)}function Qt(oe){return function(_e,me){for(var xt=!1,$e;($e=_e.next())!=null;){if($e==oe&&!xt){oe==")"&&_e.backUp(1);break}xt=!xt&&$e=="\\"}return($e==oe||!xt&&oe!=")")&&(me.tokenize=null),Ge("string","string")}}function $t(oe,_e){return oe.next(),oe.match(/^\s*[\"\')]/,!1)?_e.tokenize=null:_e.tokenize=Qt(")"),Ge(null,"(")}function fn(oe,_e,me){this.type=oe,this.indent=_e,this.prev=me}function et(oe,_e,me,xt){return oe.context=new fn(me,_e.indentation()+(xt===!1?0:re),oe.context),me}function bt(oe){return oe.context.prev&&(oe.context=oe.context.prev),oe.context.type}function lt(oe,_e,me){return vt[me.context.type](oe,_e,me)}function Zt(oe,_e,me,xt){for(var $e=xt||1;$e>0;$e--)me.context=me.context.prev;return lt(oe,_e,me)}function Ke(oe){var _e=oe.current().toLowerCase();Je.hasOwnProperty(_e)?tt="atom":Oe.hasOwnProperty(_e)?tt="keyword":tt="variable"}var vt={};return vt.top=function(oe,_e,me){if(oe=="{")return et(me,_e,"block");if(oe=="}"&&me.context.prev)return bt(me);if(Me&&/@component/i.test(oe))return et(me,_e,"atComponentBlock");if(/^@(-moz-)?document$/i.test(oe))return et(me,_e,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(oe))return et(me,_e,"atBlock");if(/^@(font-face|counter-style)/i.test(oe))return me.stateArg=oe,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(oe))return"keyframes";if(oe&&oe.charAt(0)=="@")return et(me,_e,"at");if(oe=="hash")tt="builtin";else if(oe=="word")tt="tag";else{if(oe=="variable-definition")return"maybeprop";if(oe=="interpolation")return et(me,_e,"interpolation");if(oe==":")return"pseudo";if(Ve&&oe=="(")return et(me,_e,"parens")}return me.context.type},vt.block=function(oe,_e,me){if(oe=="word"){var xt=_e.current().toLowerCase();return P.hasOwnProperty(xt)?(tt="property","maybeprop"):G.hasOwnProperty(xt)?(tt=He?"string-2":"property","maybeprop"):Ve?(tt=_e.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(tt+=" error","maybeprop")}else return oe=="meta"?"block":!Ve&&(oe=="hash"||oe=="qualifier")?(tt="error","block"):vt.top(oe,_e,me)},vt.maybeprop=function(oe,_e,me){return oe==":"?et(me,_e,"prop"):lt(oe,_e,me)},vt.prop=function(oe,_e,me){if(oe==";")return bt(me);if(oe=="{"&&Ve)return et(me,_e,"propBlock");if(oe=="}"||oe=="{")return Zt(oe,_e,me);if(oe=="(")return et(me,_e,"parens");if(oe=="hash"&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(_e.current()))tt+=" error";else if(oe=="word")Ke(_e);else if(oe=="interpolation")return et(me,_e,"interpolation");return"prop"},vt.propBlock=function(oe,_e,me){return oe=="}"?bt(me):oe=="word"?(tt="property","maybeprop"):me.context.type},vt.parens=function(oe,_e,me){return oe=="{"||oe=="}"?Zt(oe,_e,me):oe==")"?bt(me):oe=="("?et(me,_e,"parens"):oe=="interpolation"?et(me,_e,"interpolation"):(oe=="word"&&Ke(_e),"parens")},vt.pseudo=function(oe,_e,me){return oe=="meta"?"pseudo":oe=="word"?(tt="variable-3",me.context.type):lt(oe,_e,me)},vt.documentTypes=function(oe,_e,me){return oe=="word"&&T.hasOwnProperty(_e.current())?(tt="tag",me.context.type):vt.atBlock(oe,_e,me)},vt.atBlock=function(oe,_e,me){if(oe=="(")return et(me,_e,"atBlock_parens");if(oe=="}"||oe==";")return Zt(oe,_e,me);if(oe=="{")return bt(me)&&et(me,_e,Ve?"block":"top");if(oe=="interpolation")return et(me,_e,"interpolation");if(oe=="word"){var xt=_e.current().toLowerCase();xt=="only"||xt=="not"||xt=="and"||xt=="or"?tt="keyword":Q.hasOwnProperty(xt)?tt="attribute":U.hasOwnProperty(xt)?tt="property":S.hasOwnProperty(xt)?tt="keyword":P.hasOwnProperty(xt)?tt="property":G.hasOwnProperty(xt)?tt=He?"string-2":"property":Je.hasOwnProperty(xt)?tt="atom":Oe.hasOwnProperty(xt)?tt="keyword":tt="error"}return me.context.type},vt.atComponentBlock=function(oe,_e,me){return oe=="}"?Zt(oe,_e,me):oe=="{"?bt(me)&&et(me,_e,Ve?"block":"top",!1):(oe=="word"&&(tt="error"),me.context.type)},vt.atBlock_parens=function(oe,_e,me){return oe==")"?bt(me):oe=="{"||oe=="}"?Zt(oe,_e,me,2):vt.atBlock(oe,_e,me)},vt.restricted_atBlock_before=function(oe,_e,me){return oe=="{"?et(me,_e,"restricted_atBlock"):oe=="word"&&me.stateArg=="@counter-style"?(tt="variable","restricted_atBlock_before"):lt(oe,_e,me)},vt.restricted_atBlock=function(oe,_e,me){return oe=="}"?(me.stateArg=null,bt(me)):oe=="word"?(me.stateArg=="@font-face"&&!H.hasOwnProperty(_e.current().toLowerCase())||me.stateArg=="@counter-style"&&!ae.hasOwnProperty(_e.current().toLowerCase())?tt="error":tt="property","maybeprop"):"restricted_atBlock"},vt.keyframes=function(oe,_e,me){return oe=="word"?(tt="variable","keyframes"):oe=="{"?et(me,_e,"top"):lt(oe,_e,me)},vt.at=function(oe,_e,me){return oe==";"?bt(me):oe=="{"||oe=="}"?Zt(oe,_e,me):(oe=="word"?tt="tag":oe=="hash"&&(tt="builtin"),"at")},vt.interpolation=function(oe,_e,me){return oe=="}"?bt(me):oe=="{"||oe==";"?Zt(oe,_e,me):(oe=="word"?tt="variable":oe!="variable"&&oe!="("&&oe!=")"&&(tt="error"),"interpolation")},{startState:function(oe){return{tokenize:null,state:ke?"block":"top",stateArg:null,context:new fn(ke?"block":"top",oe||0,null)}},token:function(oe,_e){if(!_e.tokenize&&oe.eatSpace())return null;var me=(_e.tokenize||qt)(oe,_e);return me&&typeof me=="object"&&(Be=me[1],me=me[0]),tt=me,Be!="comment"&&(_e.state=vt[_e.state](Be,oe,_e)),tt},indent:function(oe,_e){var me=oe.context,xt=_e&&_e.charAt(0),$e=me.indent;return me.type=="prop"&&(xt=="}"||xt==")")&&(me=me.prev),me.prev&&(xt=="}"&&(me.type=="block"||me.type=="top"||me.type=="interpolation"||me.type=="restricted_atBlock")?(me=me.prev,$e=me.indent):(xt==")"&&(me.type=="parens"||me.type=="atBlock_parens")||xt=="{"&&(me.type=="at"||me.type=="atBlock"))&&($e=Math.max(0,me.indent-re))),$e},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:Se,fold:"brace"}});function v(Te){for(var ie={},ke=0;ke<Te.length;++ke)ie[Te[ke].toLowerCase()]=!0;return ie}var x=["domain","regexp","url","url-prefix"],w=v(x),N=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],E=v(N),C=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],L=v(C),A=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],M=v(A),I=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],V=v(I),ne=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],$=v(ne),se=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],D=v(se),F=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],z=v(F),q=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],Y=v(q),ge=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],le=v(ge),ye=x.concat(N).concat(C).concat(A).concat(I).concat(ne).concat(q).concat(ge);p.registerHelper("hintWords","css",ye);function We(Te,ie){for(var ke=!1,re;(re=Te.next())!=null;){if(ke&&re=="/"){ie.tokenize=null;break}ke=re=="*"}return["comment","comment"]}p.defineMIME("text/css",{documentTypes:w,mediaTypes:E,mediaFeatures:L,mediaValueKeywords:M,propertyKeywords:V,nonStandardPropertyKeywords:$,fontProperties:D,counterDescriptors:z,colorKeywords:Y,valueKeywords:le,tokenHooks:{"/":function(Te,ie){return Te.eat("*")?(ie.tokenize=We,We(Te,ie)):!1}},name:"css"}),p.defineMIME("text/x-scss",{mediaTypes:E,mediaFeatures:L,mediaValueKeywords:M,propertyKeywords:V,nonStandardPropertyKeywords:$,colorKeywords:Y,valueKeywords:le,fontProperties:D,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(Te,ie){return Te.eat("/")?(Te.skipToEnd(),["comment","comment"]):Te.eat("*")?(ie.tokenize=We,We(Te,ie)):["operator","operator"]},":":function(Te){return Te.match(/^\s*\{/,!1)?[null,null]:!1},$:function(Te){return Te.match(/^[\w-]+/),Te.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(Te){return Te.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),p.defineMIME("text/x-less",{mediaTypes:E,mediaFeatures:L,mediaValueKeywords:M,propertyKeywords:V,nonStandardPropertyKeywords:$,colorKeywords:Y,valueKeywords:le,fontProperties:D,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(Te,ie){return Te.eat("/")?(Te.skipToEnd(),["comment","comment"]):Te.eat("*")?(ie.tokenize=We,We(Te,ie)):["operator","operator"]},"@":function(Te){return Te.eat("{")?[null,"interpolation"]:Te.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)?!1:(Te.eatWhile(/[\w\\\-]/),Te.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),p.defineMIME("text/x-gss",{documentTypes:w,mediaTypes:E,mediaFeatures:L,propertyKeywords:V,nonStandardPropertyKeywords:$,fontProperties:D,counterDescriptors:z,colorKeywords:Y,valueKeywords:le,supportsAtComponent:!0,tokenHooks:{"/":function(Te,ie){return Te.eat("*")?(ie.tokenize=We,We(Te,ie)):!1}},name:"css",helperType:"gss"})})})()),vf.exports}cm();var bf={exports:{}},wf;function mx(){return wf||(wf=1,(function(u,h){(function(p){p(ss(),um(),lm(),cm())})(function(p){var v={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function x(M,I,V){var ne=M.current(),$=ne.search(I);return $>-1?M.backUp(ne.length-$):ne.match(/<\/?$/)&&(M.backUp(ne.length),M.match(I,!1)||M.match(ne)),V}var w={};function N(M){var I=w[M];return I||(w[M]=new RegExp("\\s+"+M+`\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))}function E(M,I){var V=M.match(N(I));return V?/^\s*(.*?)\s*$/.exec(V[2])[1]:""}function C(M,I){return new RegExp((I?"^":"")+"</\\s*"+M+"\\s*>","i")}function L(M,I){for(var V in M)for(var ne=I[V]||(I[V]=[]),$=M[V],se=$.length-1;se>=0;se--)ne.unshift($[se])}function A(M,I){for(var V=0;V<M.length;V++){var ne=M[V];if(!ne[0]||ne[1].test(E(I,ne[0])))return ne[2]}}p.defineMode("htmlmixed",function(M,I){var V=p.getMode(M,{name:"xml",htmlMode:!0,multilineTagIndentFactor:I.multilineTagIndentFactor,multilineTagIndentPastTag:I.multilineTagIndentPastTag,allowMissingTagName:I.allowMissingTagName}),ne={},$=I&&I.tags,se=I&&I.scriptTypes;if(L(v,ne),$&&L($,ne),se)for(var D=se.length-1;D>=0;D--)ne.script.unshift(["type",se[D].matches,se[D].mode]);function F(z,q){var Y=V.token(z,q.htmlState),ge=/\btag\b/.test(Y),le;if(ge&&!/[<>\s\/]/.test(z.current())&&(le=q.htmlState.tagName&&q.htmlState.tagName.toLowerCase())&&ne.hasOwnProperty(le))q.inTag=le+" ";else if(q.inTag&&ge&&/>$/.test(z.current())){var ye=/^([\S]+) (.*)/.exec(q.inTag);q.inTag=null;var We=z.current()==">"&&A(ne[ye[1]],ye[2]),Te=p.getMode(M,We),ie=C(ye[1],!0),ke=C(ye[1],!1);q.token=function(re,ve){return re.match(ie,!1)?(ve.token=F,ve.localState=ve.localMode=null,null):x(re,ke,ve.localMode.token(re,ve.localState))},q.localMode=Te,q.localState=p.startState(Te,V.indent(q.htmlState,"",""))}else q.inTag&&(q.inTag+=z.current(),z.eol()&&(q.inTag+=" "));return Y}return{startState:function(){var z=p.startState(V);return{token:F,inTag:null,localMode:null,localState:null,htmlState:z}},copyState:function(z){var q;return z.localState&&(q=p.copyState(z.localMode,z.localState)),{token:z.token,inTag:z.inTag,localMode:z.localMode,localState:q,htmlState:p.copyState(V,z.htmlState)}},token:function(z,q){return q.token(z,q)},indent:function(z,q,Y){return!z.localMode||/^\s*<\//.test(q)?V.indent(z.htmlState,q,Y):z.localMode.indent?z.localMode.indent(z.localState,q,Y):p.Pass},innerMode:function(z){return{state:z.localState||z.htmlState,mode:z.localMode||V}}}},"xml","javascript","css"),p.defineMIME("text/html","htmlmixed")})})()),bf.exports}mx();var kf={exports:{}},Sf;function gx(){return Sf||(Sf=1,(function(u,h){(function(p){p(ss())})(function(p){var v={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},x=p.Pos;p.defineOption("autoCloseBrackets",!1,function(D,F,z){z&&z!=p.Init&&(D.removeKeyMap(N),D.state.closeBrackets=null),F&&(E(w(F,"pairs")),D.state.closeBrackets=F,D.addKeyMap(N))});function w(D,F){return F=="pairs"&&typeof D=="string"?D:typeof D=="object"&&D[F]!=null?D[F]:v[F]}var N={Backspace:A,Enter:M};function E(D){for(var F=0;F<D.length;F++){var z=D.charAt(F),q="'"+z+"'";N[q]||(N[q]=C(z))}}E(v.pairs+"`");function C(D){return function(F){return ne(F,D)}}function L(D){var F=D.state.closeBrackets;if(!F||F.override)return F;var z=D.getModeAt(D.getCursor());return z.closeBrackets||F}function A(D){var F=L(D);if(!F||D.getOption("disableInput"))return p.Pass;for(var z=w(F,"pairs"),q=D.listSelections(),Y=0;Y<q.length;Y++){if(!q[Y].empty())return p.Pass;var ge=$(D,q[Y].head);if(!ge||z.indexOf(ge)%2!=0)return p.Pass}for(var Y=q.length-1;Y>=0;Y--){var le=q[Y].head;D.replaceRange("",x(le.line,le.ch-1),x(le.line,le.ch+1),"+delete")}}function M(D){var F=L(D),z=F&&w(F,"explode");if(!z||D.getOption("disableInput"))return p.Pass;for(var q=D.listSelections(),Y=0;Y<q.length;Y++){if(!q[Y].empty())return p.Pass;var ge=$(D,q[Y].head);if(!ge||z.indexOf(ge)%2!=0)return p.Pass}D.operation(function(){var le=D.lineSeparator()||`
`;D.replaceSelection(le+le,null),I(D,-1),q=D.listSelections();for(var ye=0;ye<q.length;ye++){var We=q[ye].head.line;D.indentLine(We,null,!0),D.indentLine(We+1,null,!0)}})}function I(D,F){for(var z=[],q=D.listSelections(),Y=0,ge=0;ge<q.length;ge++){var le=q[ge];le.head==D.getCursor()&&(Y=ge);var ye=le.head.ch||F>0?{line:le.head.line,ch:le.head.ch+F}:{line:le.head.line-1};z.push({anchor:ye,head:ye})}D.setSelections(z,Y)}function V(D){var F=p.cmpPos(D.anchor,D.head)>0;return{anchor:new x(D.anchor.line,D.anchor.ch+(F?-1:1)),head:new x(D.head.line,D.head.ch+(F?1:-1))}}function ne(D,F){var z=L(D);if(!z||D.getOption("disableInput"))return p.Pass;var q=w(z,"pairs"),Y=q.indexOf(F);if(Y==-1)return p.Pass;for(var ge=w(z,"closeBefore"),le=w(z,"triples"),ye=q.charAt(Y+1)==F,We=D.listSelections(),Te=Y%2==0,ie,ke=0;ke<We.length;ke++){var re=We[ke],ve=re.head,T,Q=D.getRange(ve,x(ve.line,ve.ch+1));if(Te&&!re.empty())T="surround";else if((ye||!Te)&&Q==F)ye&&se(D,ve)?T="both":le.indexOf(F)>=0&&D.getRange(ve,x(ve.line,ve.ch+3))==F+F+F?T="skipThree":T="skip";else if(ye&&ve.ch>1&&le.indexOf(F)>=0&&D.getRange(x(ve.line,ve.ch-2),ve)==F+F){if(ve.ch>2&&/\bstring/.test(D.getTokenTypeAt(x(ve.line,ve.ch-2))))return p.Pass;T="addFour"}else if(ye){var U=ve.ch==0?" ":D.getRange(x(ve.line,ve.ch-1),ve);if(!p.isWordChar(Q)&&U!=F&&!p.isWordChar(U))T="both";else return p.Pass}else if(Te&&(Q.length===0||/\s/.test(Q)||ge.indexOf(Q)>-1))T="both";else return p.Pass;if(!ie)ie=T;else if(ie!=T)return p.Pass}var S=Y%2?q.charAt(Y-1):F,P=Y%2?F:q.charAt(Y+1);D.operation(function(){if(ie=="skip")I(D,1);else if(ie=="skipThree")I(D,3);else if(ie=="surround"){for(var G=D.getSelections(),H=0;H<G.length;H++)G[H]=S+G[H]+P;D.replaceSelections(G,"around"),G=D.listSelections().slice();for(var H=0;H<G.length;H++)G[H]=V(G[H]);D.setSelections(G)}else ie=="both"?(D.replaceSelection(S+P,null),D.triggerElectric(S+P),I(D,-1)):ie=="addFour"&&(D.replaceSelection(S+S+S+S,"before"),I(D,1))})}function $(D,F){var z=D.getRange(x(F.line,F.ch-1),x(F.line,F.ch+1));return z.length==2?z:null}function se(D,F){var z=D.getTokenAt(x(F.line,F.ch+1));return/\bstring/.test(z.type)&&z.start==F.ch&&(F.ch==0||!/\bstring/.test(D.getTokenTypeAt(F)))}})})()),kf.exports}gx();var Cf={exports:{}},_f;function yx(){return _f||(_f=1,(function(u,h){(function(p){p(ss())})(function(p){var v=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),x=p.Pos,w={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function N(I){return I&&I.bracketRegex||/[(){}[\]]/}function E(I,V,ne){var $=I.getLineHandle(V.line),se=V.ch-1,D=ne&&ne.afterCursor;D==null&&(D=/(^| )cm-fat-cursor($| )/.test(I.getWrapperElement().className));var F=N(ne),z=!D&&se>=0&&F.test($.text.charAt(se))&&w[$.text.charAt(se)]||F.test($.text.charAt(se+1))&&w[$.text.charAt(++se)];if(!z)return null;var q=z.charAt(1)==">"?1:-1;if(ne&&ne.strict&&q>0!=(se==V.ch))return null;var Y=I.getTokenTypeAt(x(V.line,se+1)),ge=C(I,x(V.line,se+(q>0?1:0)),q,Y,ne);return ge==null?null:{from:x(V.line,se),to:ge&&ge.pos,match:ge&&ge.ch==z.charAt(0),forward:q>0}}function C(I,V,ne,$,se){for(var D=se&&se.maxScanLineLength||1e4,F=se&&se.maxScanLines||1e3,z=[],q=N(se),Y=ne>0?Math.min(V.line+F,I.lastLine()+1):Math.max(I.firstLine()-1,V.line-F),ge=V.line;ge!=Y;ge+=ne){var le=I.getLine(ge);if(le){var ye=ne>0?0:le.length-1,We=ne>0?le.length:-1;if(!(le.length>D))for(ge==V.line&&(ye=V.ch-(ne<0?1:0));ye!=We;ye+=ne){var Te=le.charAt(ye);if(q.test(Te)&&($===void 0||(I.getTokenTypeAt(x(ge,ye+1))||"")==($||""))){var ie=w[Te];if(ie&&ie.charAt(1)==">"==ne>0)z.push(Te);else if(z.length)z.pop();else return{pos:x(ge,ye),ch:Te}}}}}return ge-ne==(ne>0?I.lastLine():I.firstLine())?!1:null}function L(I,V,ne){for(var $=I.state.matchBrackets.maxHighlightLineLength||1e3,se=ne&&ne.highlightNonMatching,D=[],F=I.listSelections(),z=0;z<F.length;z++){var q=F[z].empty()&&E(I,F[z].head,ne);if(q&&(q.match||se!==!1)&&I.getLine(q.from.line).length<=$){var Y=q.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";D.push(I.markText(q.from,x(q.from.line,q.from.ch+1),{className:Y})),q.to&&I.getLine(q.to.line).length<=$&&D.push(I.markText(q.to,x(q.to.line,q.to.ch+1),{className:Y}))}}if(D.length){v&&I.state.focused&&I.focus();var ge=function(){I.operation(function(){for(var le=0;le<D.length;le++)D[le].clear()})};if(V)setTimeout(ge,800);else return ge}}function A(I){I.operation(function(){I.state.matchBrackets.currentlyHighlighted&&(I.state.matchBrackets.currentlyHighlighted(),I.state.matchBrackets.currentlyHighlighted=null),I.state.matchBrackets.currentlyHighlighted=L(I,!1,I.state.matchBrackets)})}function M(I){I.state.matchBrackets&&I.state.matchBrackets.currentlyHighlighted&&(I.state.matchBrackets.currentlyHighlighted(),I.state.matchBrackets.currentlyHighlighted=null)}p.defineOption("matchBrackets",!1,function(I,V,ne){ne&&ne!=p.Init&&(I.off("cursorActivity",A),I.off("focus",A),I.off("blur",M),M(I)),V&&(I.state.matchBrackets=typeof V=="object"?V:{},I.on("cursorActivity",A),I.on("focus",A),I.on("blur",M))}),p.defineExtension("matchBrackets",function(){L(this,!0)}),p.defineExtension("findMatchingBracket",function(I,V,ne){return(ne||typeof V=="boolean")&&(ne?(ne.strict=V,V=ne):V=V?{strict:!0}:null),E(this,I,V)}),p.defineExtension("scanForBracket",function(I,V,ne,$){return C(this,I,V,ne,$)})})})()),Cf.exports}yx();var Tf={exports:{}},Nf;function vx(){return Nf||(Nf=1,(function(u,h){(function(p){p(ss())})(function(p){var v="CodeMirror-hint",x="CodeMirror-hint-active";p.showHint=function(D,F,z){if(!F)return D.showHint(z);z&&z.async&&(F.async=!0);var q={hint:F};if(z)for(var Y in z)q[Y]=z[Y];return D.showHint(q)},p.defineExtension("showHint",function(D){D=C(this,this.getCursor("start"),D);var F=this.listSelections();if(!(F.length>1)){if(this.somethingSelected()){if(!D.hint.supportsSelection)return;for(var z=0;z<F.length;z++)if(F[z].head.line!=F[z].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var q=this.state.completionActive=new w(this,D);q.options.hint&&(p.signal(this,"startCompletion",this),q.update(!0))}}),p.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function w(D,F){if(this.cm=D,this.options=F,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var z=this;D.on("cursorActivity",this.activityFunc=function(){z.cursorActivity()})}}var N=window.requestAnimationFrame||function(D){return setTimeout(D,1e3/60)},E=window.cancelAnimationFrame||clearTimeout;w.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&p.signal(this.data,"close"),this.widget&&this.widget.close(),p.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(D,F){var z=D.list[F],q=this;this.cm.operation(function(){z.hint?z.hint(q.cm,D,z):q.cm.replaceRange(L(z),z.from||D.from,z.to||D.to,"complete"),p.signal(D,"pick",z),q.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(E(this.debounce),this.debounce=0);var D=this.startPos;this.data&&(D=this.data.from);var F=this.cm.getCursor(),z=this.cm.getLine(F.line);if(F.line!=this.startPos.line||z.length-F.ch!=this.startLen-this.startPos.ch||F.ch<D.ch||this.cm.somethingSelected()||!F.ch||this.options.closeCharacters.test(z.charAt(F.ch-1)))this.close();else{var q=this;this.debounce=N(function(){q.update()}),this.widget&&this.widget.disable()}},update:function(D){if(this.tick!=null){var F=this,z=++this.tick;ne(this.options.hint,this.cm,this.options,function(q){F.tick==z&&F.finishUpdate(q,D)})}},finishUpdate:function(D,F){this.data&&p.signal(this.data,"update");var z=this.widget&&this.widget.picked||F&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=D,D&&D.list.length&&(z&&D.list.length==1?this.pick(D,0):(this.widget=new I(this,D),p.signal(D,"shown")))}};function C(D,F,z){var q=D.options.hintOptions,Y={};for(var ge in se)Y[ge]=se[ge];if(q)for(var ge in q)q[ge]!==void 0&&(Y[ge]=q[ge]);if(z)for(var ge in z)z[ge]!==void 0&&(Y[ge]=z[ge]);return Y.hint.resolve&&(Y.hint=Y.hint.resolve(D,F)),Y}function L(D){return typeof D=="string"?D:D.text}function A(D,F){var z={Up:function(){F.moveFocus(-1)},Down:function(){F.moveFocus(1)},PageUp:function(){F.moveFocus(-F.menuSize()+1,!0)},PageDown:function(){F.moveFocus(F.menuSize()-1,!0)},Home:function(){F.setFocus(0)},End:function(){F.setFocus(F.length-1)},Enter:F.pick,Tab:F.pick,Esc:F.close},q=/Mac/.test(navigator.platform);q&&(z["Ctrl-P"]=function(){F.moveFocus(-1)},z["Ctrl-N"]=function(){F.moveFocus(1)});var Y=D.options.customKeys,ge=Y?{}:z;function le(Te,ie){var ke;typeof ie!="string"?ke=function(re){return ie(re,F)}:z.hasOwnProperty(ie)?ke=z[ie]:ke=ie,ge[Te]=ke}if(Y)for(var ye in Y)Y.hasOwnProperty(ye)&&le(ye,Y[ye]);var We=D.options.extraKeys;if(We)for(var ye in We)We.hasOwnProperty(ye)&&le(ye,We[ye]);return ge}function M(D,F){for(;F&&F!=D;){if(F.nodeName.toUpperCase()==="LI"&&F.parentNode==D)return F;F=F.parentNode}}function I(D,F){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=D,this.data=F,this.picked=!1;var z=this,q=D.cm,Y=q.getInputField().ownerDocument,ge=Y.defaultView||Y.parentWindow,le=this.hints=Y.createElement("ul");le.setAttribute("role","listbox"),le.setAttribute("aria-expanded","true"),le.id=this.id;var ye=D.cm.options.theme;le.className="CodeMirror-hints "+ye,this.selectedHint=F.selectedHint||0;for(var We=F.list,Te=0;Te<We.length;++Te){var ie=le.appendChild(Y.createElement("li")),ke=We[Te],re=v+(Te!=this.selectedHint?"":" "+x);ke.className!=null&&(re=ke.className+" "+re),ie.className=re,Te==this.selectedHint&&ie.setAttribute("aria-selected","true"),ie.id=this.id+"-"+Te,ie.setAttribute("role","option"),ke.render?ke.render(ie,F,ke):ie.appendChild(Y.createTextNode(ke.displayText||L(ke))),ie.hintId=Te}var ve=D.options.container||Y.body,T=q.cursorCoords(D.options.alignWithWord?F.from:null),Q=T.left,U=T.bottom,S=!0,P=0,G=0;if(ve!==Y.body){var H=["absolute","relative","fixed"].indexOf(ge.getComputedStyle(ve).position)!==-1,ae=H?ve:ve.offsetParent,Oe=ae.getBoundingClientRect(),Je=Y.body.getBoundingClientRect();P=Oe.left-Je.left-ae.scrollLeft,G=Oe.top-Je.top-ae.scrollTop}le.style.left=Q-P+"px",le.style.top=U-G+"px";var Ve=ge.innerWidth||Math.max(Y.body.offsetWidth,Y.documentElement.offsetWidth),Se=ge.innerHeight||Math.max(Y.body.offsetHeight,Y.documentElement.offsetHeight);ve.appendChild(le),q.getInputField().setAttribute("aria-autocomplete","list"),q.getInputField().setAttribute("aria-owns",this.id),q.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var Me=D.options.moveOnOverlap?le.getBoundingClientRect():new DOMRect,He=D.options.paddingForScrollbar?le.scrollHeight>le.clientHeight+1:!1,Be;setTimeout(function(){Be=q.getScrollInfo()});var tt=Me.bottom-Se;if(tt>0){var Ge=Me.bottom-Me.top,qt=Me.top-(T.bottom-T.top)-2;Se-Me.top<qt?(Ge>qt&&(le.style.height=(Ge=qt)+"px"),le.style.top=(U=T.top-Ge)-G+"px",S=!1):le.style.height=Se-Me.top-2+"px"}var Qt=Me.right-Ve;if(He&&(Qt+=q.display.nativeBarWidth),Qt>0&&(Me.right-Me.left>Ve&&(le.style.width=Ve-5+"px",Qt-=Me.right-Me.left-Ve),le.style.left=(Q=Math.max(T.left-Qt-P,0))+"px"),He)for(var $t=le.firstChild;$t;$t=$t.nextSibling)$t.style.paddingRight=q.display.nativeBarWidth+"px";if(q.addKeyMap(this.keyMap=A(D,{moveFocus:function(bt,lt){z.changeActive(z.selectedHint+bt,lt)},setFocus:function(bt){z.changeActive(bt)},menuSize:function(){return z.screenAmount()},length:We.length,close:function(){D.close()},pick:function(){z.pick()},data:F})),D.options.closeOnUnfocus){var fn;q.on("blur",this.onBlur=function(){fn=setTimeout(function(){D.close()},100)}),q.on("focus",this.onFocus=function(){clearTimeout(fn)})}q.on("scroll",this.onScroll=function(){var bt=q.getScrollInfo(),lt=q.getWrapperElement().getBoundingClientRect();Be||(Be=q.getScrollInfo());var Zt=U+Be.top-bt.top,Ke=Zt-(ge.pageYOffset||(Y.documentElement||Y.body).scrollTop);if(S||(Ke+=le.offsetHeight),Ke<=lt.top||Ke>=lt.bottom)return D.close();le.style.top=Zt+"px",le.style.left=Q+Be.left-bt.left+"px"}),p.on(le,"dblclick",function(bt){var lt=M(le,bt.target||bt.srcElement);lt&&lt.hintId!=null&&(z.changeActive(lt.hintId),z.pick())}),p.on(le,"click",function(bt){var lt=M(le,bt.target||bt.srcElement);lt&&lt.hintId!=null&&(z.changeActive(lt.hintId),D.options.completeOnSingleClick&&z.pick())}),p.on(le,"mousedown",function(){setTimeout(function(){q.focus()},20)});var et=this.getSelectedHintRange();return(et.from!==0||et.to!==0)&&this.scrollToActive(),p.signal(F,"select",We[this.selectedHint],le.childNodes[this.selectedHint]),!0}I.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var D=this.completion.cm.getInputField();D.removeAttribute("aria-activedescendant"),D.removeAttribute("aria-owns");var F=this.completion.cm;this.completion.options.closeOnUnfocus&&(F.off("blur",this.onBlur),F.off("focus",this.onFocus)),F.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var D=this;this.keyMap={Enter:function(){D.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(D,F){if(D>=this.data.list.length?D=F?this.data.list.length-1:0:D<0&&(D=F?0:this.data.list.length-1),this.selectedHint!=D){var z=this.hints.childNodes[this.selectedHint];z&&(z.className=z.className.replace(" "+x,""),z.removeAttribute("aria-selected")),z=this.hints.childNodes[this.selectedHint=D],z.className+=" "+x,z.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",z.id),this.scrollToActive(),p.signal(this.data,"select",this.data.list[this.selectedHint],z)}},scrollToActive:function(){var D=this.getSelectedHintRange(),F=this.hints.childNodes[D.from],z=this.hints.childNodes[D.to],q=this.hints.firstChild;F.offsetTop<this.hints.scrollTop?this.hints.scrollTop=F.offsetTop-q.offsetTop:z.offsetTop+z.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=z.offsetTop+z.offsetHeight-this.hints.clientHeight+q.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var D=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-D),to:Math.min(this.data.list.length-1,this.selectedHint+D)}}};function V(D,F){if(!D.somethingSelected())return F;for(var z=[],q=0;q<F.length;q++)F[q].supportsSelection&&z.push(F[q]);return z}function ne(D,F,z,q){if(D.async)D(F,q,z);else{var Y=D(F,z);Y&&Y.then?Y.then(q):q(Y)}}function $(D,F){var z=D.getHelpers(F,"hint"),q;if(z.length){var Y=function(ge,le,ye){var We=V(ge,z);function Te(ie){if(ie==We.length)return le(null);ne(We[ie],ge,ye,function(ke){ke&&ke.list.length>0?le(ke):Te(ie+1)})}Te(0)};return Y.async=!0,Y.supportsSelection=!0,Y}else return(q=D.getHelper(D.getCursor(),"hintWords"))?function(ge){return p.hint.fromList(ge,{words:q})}:p.hint.anyword?function(ge,le){return p.hint.anyword(ge,le)}:function(){}}p.registerHelper("hint","auto",{resolve:$}),p.registerHelper("hint","fromList",function(D,F){var z=D.getCursor(),q=D.getTokenAt(z),Y,ge=p.Pos(z.line,q.start),le=z;q.start<z.ch&&/\w/.test(q.string.charAt(z.ch-q.start-1))?Y=q.string.substr(0,z.ch-q.start):(Y="",ge=z);for(var ye=[],We=0;We<F.words.length;We++){var Te=F.words[We];Te.slice(0,Y.length)==Y&&ye.push(Te)}if(ye.length)return{list:ye,from:ge,to:le}}),p.commands.autocomplete=p.showHint;var se={hint:p.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};p.defineOption("hintOptions",null)})})()),Tf.exports}vx();var jf={exports:{}},Ef;function xx(){return Ef||(Ef=1,(function(u,h){(function(p){p(ss())})(function(p){var v=/[\w$]+/,x=500;p.registerHelper("hint","anyword",function(w,N){for(var E=N&&N.word||v,C=N&&N.range||x,L=w.getCursor(),A=w.getLine(L.line),M=L.ch,I=M;I&&E.test(A.charAt(I-1));)--I;for(var V=I!=M&&A.slice(I,M),ne=N&&N.list||[],$={},se=new RegExp(E.source,"g"),D=-1;D<=1;D+=2)for(var F=L.line,z=Math.min(Math.max(F+D*C,w.firstLine()),w.lastLine())+D;F!=z;F+=D)for(var q=w.getLine(F),Y;Y=se.exec(q);)F==L.line&&Y[0]===V||(!V||Y[0].lastIndexOf(V,0)==0)&&!Object.prototype.hasOwnProperty.call($,Y[0])&&($[Y[0]]=!0,ne.push(Y[0]));return{list:ne,from:p.Pos(L.line,I),to:p.Pos(L.line,M)}})})})()),jf.exports}xx();function bx(u){return u==="python"?"python":u==="csharp"?"text/x-csharp":u==="java"?"text/x-java":u==="jsx"?{name:"javascript",jsx:!0}:u==="javascript"?"javascript":u==="html"?"htmlmixed":u==="css"?"css":"text/plain"}function wx({value:u,onChange:h,language:p}){const v=Ae.useRef(null),x=Ae.useRef(null),w=Ae.useRef(h);return w.current=h,Ae.useEffect(()=>{const N=uf.fromTextArea(v.current,{mode:bx(p),lineNumbers:!0,lineWrapping:!1,indentUnit:4,tabSize:4,indentWithTabs:!1,smartIndent:!0,electricChars:!0,autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,extraKeys:{Tab(C){if(C.somethingSelected())C.execCommand("indentMore");else{const L=C.getOption("indentUnit")-C.getCursor().ch%C.getOption("indentUnit");C.replaceSelection(" ".repeat(L),"end")}},"Shift-Tab":C=>C.execCommand("indentLess"),"Ctrl-Space":C=>C.showHint({hint:uf.hint.anyword,completeSingle:!1})}});N.getInputField().setAttribute("aria-label","Code editor"),N.on("change",C=>{var L;return(L=w.current)==null?void 0:L.call(w,C.getValue())}),x.current=N;const E=typeof ResizeObserver<"u"?new ResizeObserver(()=>N.refresh()):null;return E==null||E.observe(N.getWrapperElement()),()=>{E==null||E.disconnect(),N.toTextArea(),x.current=null}},[p]),Ae.useEffect(()=>{const N=x.current;if(N&&N.getValue()!==u){const E=N.getCursor();N.setValue(u??""),N.setCursor(E)}},[u]),c.jsx("div",{className:"code-editor-wrap",children:c.jsx("textarea",{ref:v,"aria-label":"Code editor",defaultValue:u,spellCheck:!1})})}const Lf={"react-components":{title:"Score Card",subtitle:"Player score",value:"18 points",action:"View details"},"react-state":{title:"Counter",subtitle:"Current count",value:"0",action:"Increase"},"web-layout":{title:"Responsive page",subtitle:"Welcome",value:"Your page content",action:"Explore"},"web-events":{title:"Form button",subtitle:"Contact form",value:"Ready",action:"Send"}};function kx({text:u,checksText:h,language:p,lessonId:v,activeTab:x,onTabChange:w}){const N=p==="jsx"?["Preview","Console","Checks"]:["Console","Checks"],E=Lf[v]||Lf["react-components"];return c.jsxs("section",{className:"console-pane","aria-label":"Workspace output",children:[c.jsxs("div",{className:"console-heading",children:[c.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Output views",children:N.map(C=>c.jsxs("button",{type:"button",role:"tab","aria-selected":x===C,className:x===C?"active":"",onClick:()=>w(C),children:[C==="Console"&&c.jsx(oy,{size:14}),C]},C))}),c.jsx("span",{children:"Demo"})]}),x==="Preview"&&p==="jsx"?c.jsxs("div",{className:"console-preview",role:"tabpanel","aria-label":"Interface preview",children:[c.jsxs("div",{className:"console-preview-card",children:[c.jsx("small",{children:E.title}),c.jsx("strong",{children:E.value}),c.jsx("p",{children:E.subtitle}),c.jsx("span",{className:"console-preview-action",children:E.action})]}),c.jsx("p",{className:"console-preview-note",children:"Sample layout. Your code isn't rendered here yet."})]}):c.jsx("pre",{role:"tabpanel","aria-label":x==="Checks"?"Check feedback":"Console output",children:x==="Checks"?h:u})]})}function Ah(u,h,p){switch(u){case"Reset":return"Editor reset to sample starter code.";case"Submit":return"Local preview only: no assignment was submitted and no grade or points were awarded.";case"Run":return`Run preview: code is not executed here.

Your draft contains `+h.split(`
`).length+" lines.";default:return"Sample check: "+(h.trim().length>p.starter.trim().length?"You added content. This is not an automated correctness check.":"Starter code is unchanged. This is only a UI preview.")}}class Sx{constructor({onStatus:h=()=>{},workerFactory:p=w=>new Worker(w),loadTimeout:v=6e4,runTimeout:x=6e3}={}){Object.assign(this,{onStatus:h,workerFactory:p,loadTimeout:v,runTimeout:x}),this.sequence=0,this.worker=null,this.loading=null,this.pending=null,this.closed=!1}init(){if(this.closed)return Promise.reject(Error("Python workspace closed."));if(this.loading)return this.loading;this.onStatus("Loading Python…"),this.loading=new Promise((p,v)=>{this.rejectLoad=v,this.loadTimer=setTimeout(()=>this.stop("Python could not load in time. Try again."),this.loadTimeout);try{this.worker=this.workerFactory(new URL("/playground/preview/python-worker.js",window.location.origin)),this.worker.onmessage=({data:x})=>{var w;if(x.type==="ready")clearTimeout(this.loadTimer),this.rejectLoad=null,this.onStatus("Python ready"),p();else if(x.type==="load-error")this.stop(x.message||"Python could not load.");else if(x.type==="result"&&x.id===((w=this.pending)==null?void 0:w.id)){const N=this.pending;clearTimeout(N.timer),this.pending=null,this.onStatus("Python ready"),N.resolve(x)}},this.worker.onerror=()=>this.stop("Python worker failed. Try again.")}catch(x){this.stop(x.message)}});const h=this.loading;return h.catch(()=>{this.loading===h&&(this.loading=null)}),h}async run(h){if(await this.init(),this.closed)throw Error("Python workspace closed.");if(this.pending)throw Error("Python is already running.");return this.onStatus("Running…"),new Promise((p,v)=>{const x=++this.sequence,w=setTimeout(()=>this.stop("Execution timed out after 6 seconds. Inspect your loops and retry."),this.runTimeout);this.pending={id:x,timer:w,resolve:p,reject:v},this.worker.postMessage({type:"run",id:x,code:h})})}stop(h="Python stopped."){var v,x;clearTimeout(this.loadTimer),(v=this.worker)==null||v.terminate(),this.worker=null;const p=this.pending;this.pending=null,p&&(clearTimeout(p.timer),p.reject(Error(h))),(x=this.rejectLoad)==null||x.call(this,Error(h)),this.rejectLoad=null,this.loading=null,this.onStatus(h)}dispose(){this.closed=!0,this.stop("Python workspace closed.")}}const qh="PUBLIC_CHECK_RESULTS=";function Cx(u,h){const p=Array.isArray(u==null?void 0:u.cases)?u.cases:[],v=JSON.stringify(String(h)),x=JSON.stringify(JSON.stringify(p));return["import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx","import traceback as __trace","__student = "+v,"__cases = __json.loads("+x+")","__results = []","for __example in __cases:","    __out = __io.StringIO()","    try:",'        __env = {"__name__": "__main__"}',"        with __ctx.redirect_stdout(__out), __ctx.redirect_stderr(__out):",'            exec(compile(__student, "main.py", "exec"), __env)',(u==null?void 0:u.mode)==="function"?'            __actual = eval(compile(__ast.parse(__example["call"], mode="eval"), "example", "eval"), __env)':'            __actual = __out.getvalue().rstrip("\\n")',(u==null?void 0:u.mode)==="function"?'        __expected = __ast.literal_eval(__example["expected"])':'        __expected = __example["expected"].rstrip("\\n")',(u==null?void 0:u.mode)==="function"?"        __ok = type(__actual) is type(__expected) and __actual == __expected":"        __ok = __actual == __expected",'        __results.append({"ok":__ok,"actual":str(__actual)[:240],"expected":str(__expected)[:240],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","expected":str(__example.get("expected",""))[:240],"error":type(__error).__name__+": "+str(__error)[:200]})','print("'+qh+'"+__json.dumps(__results))'].join(`
`)+`
`}function _x(u,h){const p=String(u||"").split(`
`).find(v=>v.startsWith(qh));if(!p)return"Checks did not finish. Review the Console output and try again.";try{const v=JSON.parse(p.slice(qh.length));if(!Array.isArray(v)||v.length!==h)throw Error("Incomplete check results");return[`${v.filter(w=>w.ok).length} of ${v.length} published examples matched.`,...v.map((w,N)=>w.ok?`✓ Example ${N+1}: matched`:`✗ Example ${N+1}: ${w.error||"Expected "+w.expected+"; received "+w.actual}`),"","These are practice checks only. No grade or points were recorded."].join(`
`)}catch{return"Checks returned an unexpected result. Please run the code again."}}function dm({lessonId:u,task:h}){const p=am.code(u),v=!!h.projectDraft,x=Ae.useRef(null),w=Ae.useRef(null),[N,E]=Ae.useState(!1),C=!!(h.isPublished&&h.language==="python"),[L,A]=Ae.useState(h.starter),[M,I]=Ae.useState(h.console),[V,ne]=Ae.useState(""),[$,se]=Ae.useState("Choose Check to review this draft. Results are for demonstration only."),[D,F]=Ae.useState(h.language==="jsx"?"Preview":"Console"),[z,q]=ln("designlab:editor-height",300);Ae.useEffect(()=>{A(Sd(p)??h.starter),I(h.console),se("Choose Check to review this draft. Results are for demonstration only."),F(h.language==="jsx"?"Preview":"Console")},[p,h]),Ae.useEffect(()=>()=>{var ye;(ye=w.current)==null||ye.dispose()},[]);async function Y(ye){var Te;if(N)return;E(!0);const We=ye==="Check";F(We?"Checks":"Console"),We?se("Checking published examples…"):I("Preparing Python…"),w.current||(w.current=new Sx({onStatus:ie=>{We||I(ie)}}));try{const ie=We?Cx(h,L):L,ke=await w.current.run(ie);We?se(ke.success?_x(ke.output,((Te=h.cases)==null?void 0:Te.length)||0):"Checks could not finish. Review your code and try again."):I(ke.output||(ke.success?"Program finished with no printed output.":"The program stopped without output."))}catch(ie){const ke=String((ie==null?void 0:ie.message)||ie);We?se("Checks unavailable: "+ke):I("Python unavailable: "+ke)}finally{E(!1)}}function ge(ye){if(!x.current)return;const We=x.current.getBoundingClientRect();q(Math.max(160,Math.min(We.height-120,ye.clientY-We.top)))}function le(ye){if(!N){if(C&&(ye==="Run"||ye==="Check")){Y(ye);return}if(ye==="Save"){Kl(p,L),ne("Draft saved in this browser only.");return}if(ye==="Reset"){A(h.starter),v&&Kl(p,h.starter),se("Choose Check to review this draft. Results are for demonstration only."),I(Ah("Reset",L,h)),F(h.language==="jsx"?"Preview":"Console");return}if(ye==="Check"){se(Ah(ye,L,h)),F("Checks");return}I(Ah(ye,L,h)),F("Console")}}return c.jsxs("div",{className:"code-pane",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx(Nd,{size:16})," Editor"]}),c.jsxs("div",{className:"right-meta",children:[h.language.toUpperCase()," ",c.jsx(is,{children:C?"Practice":"Demo"})]})]}),c.jsxs("div",{className:"code-workspace",ref:x,style:{"--editor-height":`${z}px`},children:[c.jsx(wx,{value:L,language:h.language,onChange:ye=>{A(ye),v&&Kl(p,ye),ne(""),se("Your code has changed. Choose Check to review this draft.")}}),c.jsx(rc,{axis:"rows",onDrag:ge}),c.jsx(kx,{text:M,checksText:$,language:h.language,lessonId:u,activeTab:D,onTabChange:F})]}),c.jsxs("div",{className:"editor-controls",children:[c.jsx("div",{children:["Run","Check","Reset"].map(ye=>c.jsx("button",{className:"btn",disabled:N,onClick:()=>le(ye),children:ye},ye))}),c.jsxs("div",{children:[c.jsxs("button",{className:"btn",disabled:N,onClick:()=>le("Save"),children:[c.jsx(xd,{size:15})," Save"]}),c.jsxs("button",{className:"btn submit",disabled:N,onClick:()=>le("Submit"),children:[c.jsx(Jh,{size:15})," Submit"]})]})]}),c.jsx("div",{className:"editor-note",children:V||(C?"Run your Python code and check the published examples. No scores are recorded here.":"Drag the dividers to resize your workspace. Runs and checks are examples, not grades.")})]})}function Tx({lessonId:u,onAnswerChecked:h}){const p=rp[u],[v,x]=Ae.useState(null),[w,N]=Ae.useState(!1);function E(){N(!0),h==null||h({selected:v,correct:v===p.correct})}function C(){x(null),N(!1),h==null||h(null)}return c.jsxs("section",{className:"tsi-practice","aria-label":"Math question",children:[c.jsxs("div",{className:"tsi-practice-heading",children:[c.jsx(Wf,{size:20}),c.jsxs("div",{children:[c.jsx("h2",{children:"Try this question"}),c.jsx("p",{children:"Choose an answer, then review the explanation on the right."})]})]}),c.jsxs("div",{className:"tsi-question-card",children:[c.jsx("div",{className:"eyebrow",children:"Question"}),c.jsx("h3",{children:p.prompt}),c.jsx("div",{className:"tsi-answers",role:"radiogroup","aria-label":"Choose the correct answer",children:p.options.map((L,A)=>c.jsxs("label",{className:`tsi-choice ${v===A?"selected":""} ${w&&A===p.correct?"correct":""}`,children:[c.jsx("input",{type:"radio",name:`tsi-${u}`,checked:v===A,disabled:w,onChange:()=>x(A)}),c.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+A)}),c.jsx("span",{children:L})]},L))}),w&&c.jsx("p",{className:"tsi-answer-status",role:"status",children:v===p.correct?"Correct! Read why on the right.":"Not quite. Review the explanation on the right."}),c.jsxs("div",{className:"tsi-buttons",children:[c.jsx("button",{className:"btn primary",disabled:v===null||w,onClick:E,children:"Check answer"}),c.jsxs("button",{className:"btn",onClick:C,children:[c.jsx(Zh,{size:15})," Try again"]})]})]})]})}const md=[["quantitative","Quantitative Reasoning"],["algebraic","Algebraic Reasoning"],["geometry","Geometric and Spatial Reasoning"],["statistics","Probabilistic and Statistical Reasoning"]];function Nx(u){const h=u.answer,p=Number.isInteger(h)?Math.max(1,Math.round(Math.abs(h)*.15)):Math.max(.125,Math.round(Math.abs(h)*.2*1e3)/1e3),v=[h+p,h-p,h+2*p].map(x=>Number(x.toFixed(4)));return v.splice(u.correct_index??0,0,h),v}function jx(u,h){return Object.fromEntries(md.map(([p])=>{const v=u.filter(w=>w.strand===p),x=v.filter(w=>h[w.id]!=="skip"&&Number(h[w.id])===w.answer).length;return[p,{correct:x,total:v.length,level:x===v.length?"Advanced":x>=Math.ceil(v.length*.6)?"Proficient":"Basic"}]}))}function Ex({items:u=[],profiles:h=[]}){var se,D,F;const[p,v]=Ae.useState({}),[x,w]=Ae.useState(""),[N,E]=Ae.useState(""),[C,L]=ln("designlab:tsi-math-placement",{}),[A,M]=Ae.useState(null),I=Ae.useMemo(()=>md.map(([z,q])=>({id:z,title:q,items:u.filter(Y=>Y.strand===z)})),[u]),V=A||((se=C.diagnostic)==null?void 0:se.latest)&&C.diagnostic.latest.placement;function ne(z){z.preventDefault();const q=h.find(Y=>Y.code===x.trim().toUpperCase());if(!q){E("Enter a valid MATH01–MATH81 study code.");return}L(Y=>({...Y,code:q.code,levels:q.levels})),E("Study code applied in this browser. It does not enroll you in a class.")}function $(z){if(z.preventDefault(),u.some(le=>p[le.id]===void 0)){E("Answer or select Not sure for every question.");return}const q=jx(u,p),Y=Object.fromEntries(Object.entries(q).map(([le,ye])=>[le,ye.level])),ge={at:new Date().toISOString(),placement:q,levels:Y,answers:p};L(le=>{var ye;return{...le,levels:Y,diagnostic:{first:((ye=le.diagnostic)==null?void 0:ye.first)||ge,latest:ge}}}),M(q),E("Your recommended starting levels are ready. Results are stored in this browser only.")}return c.jsxs("div",{className:"published-reading surface-card tsi-diagnostic",children:[c.jsx("h2",{children:"Find your starting point"}),c.jsx("p",{children:"This is the existing 24-question, four-strand practice diagnostic. It suggests what to study; it does not predict an official TSIA2 score or assign an enrolled class."}),c.jsxs("form",{onSubmit:ne,className:"tsi-code-entry",children:[c.jsx("label",{htmlFor:"math-locator-code",children:"Pearson study code (MATH01–MATH81)"}),c.jsx("input",{id:"math-locator-code",type:"text",placeholder:"MATH01",maxLength:6,value:x,onChange:z=>w(z.target.value)}),c.jsx("button",{className:"btn",type:"submit",children:"Apply code"})]}),!!C.code&&c.jsxs("p",{role:"status",children:["Current code: ",c.jsx("strong",{children:C.code}),"."," ","Recommended levels: ",md.map(([z,q])=>{var Y;return q+": "+((Y=C.levels)==null?void 0:Y[z])}).join(" · ")]}),c.jsxs("form",{onSubmit:$,children:[c.jsx("h3",{children:"Take the diagnostic"}),c.jsxs("p",{children:["Choose one answer or Not sure for all ",u.length," questions. This open practice records your first and latest attempts in this browser, not the live gradebook."]}),I.map(z=>c.jsxs("section",{className:"tsi-diagnostic-strand",children:[c.jsx("h3",{children:z.title}),z.items.map(q=>c.jsxs("fieldset",{className:"tsi-question",children:[c.jsx("legend",{children:q.prompt}),c.jsxs("div",{className:"tsi-answers",children:[Nx(q).map((Y,ge)=>c.jsxs("label",{className:"tsi-choice",children:[c.jsx("input",{type:"radio",name:q.id,value:Y,checked:p[q.id]===String(Y),onChange:()=>v(le=>({...le,[q.id]:String(Y)}))}),c.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+ge)}),c.jsx("span",{children:Y})]},ge)),c.jsxs("label",{className:"tsi-choice",children:[c.jsx("input",{type:"radio",name:q.id,value:"skip",checked:p[q.id]==="skip",onChange:()=>v(Y=>({...Y,[q.id]:"skip"}))}),c.jsx("span",{children:"Not sure"})]})]})]},q.id))]},z.id)),c.jsx("button",{type:"submit",className:"btn primary",children:"Get my recommended levels"})]}),!!N&&c.jsx("p",{role:"status",children:N}),V&&c.jsxs("section",{className:"tsi-diagnostic-results","aria-label":"Diagnostic results",children:[c.jsx("h3",{children:"Recommended starting levels"}),md.map(([z,q])=>c.jsxs("p",{children:[c.jsxs("strong",{children:[q,": ",V[z].level]})," (",V[z].correct," of ",V[z].total," correct)"]},z)),c.jsx("p",{children:"This diagnostic is instructional, not a verified measure of college readiness. All published lessons remain available regardless of recommendation."}),!!((D=C.diagnostic)!=null&&D.first)&&!!((F=C.diagnostic)!=null&&F.latest)&&c.jsxs("p",{children:["First attempt: ",new Date(C.diagnostic.first.at).toLocaleDateString()," · Latest: ",new Date(C.diagnostic.latest.at).toLocaleDateString()]})]})]})}function Lx({lessonId:u,course:h,unit:p,unitNumber:v,isCompleted:x=!1,assignment:w=null,grade:N=null,onToggleCompleted:E}){var se;const C=ea(h,u),L=Ae.useRef(null),[A,M]=Ae.useState(null),[I,V]=ln("designlab:left-width",420);function ne(D){if(!L.current)return;const F=L.current.getBoundingClientRect();V(Math.max(260,Math.min(F.width-340,D.clientX-F.left)))}const $=h.id==="tsi-math";return $&&u==="tsi-20d-d01"&&((se=h.diagnosticItems)!=null&&se.length)?c.jsxs("div",{className:"lesson-screen",children:[c.jsxs("header",{className:"lesson-header",children:[c.jsx("div",{className:"eyebrow",children:"Day 1 · TSI Math Advisory"}),c.jsx("h1",{children:C.title}),c.jsx("p",{children:"Diagnostic placement · 30-minute advisory plan"})]}),c.jsx(Ex,{items:h.diagnosticItems,profiles:h.locatorProfiles})]}):C!=null&&C.ready?C.language==="text"&&!$?c.jsxs("div",{className:"lesson-screen",children:[c.jsx(cd,{task:C,unit:p,unitNumber:v,isTsi:!1,isCompleted:x,assignment:w,grade:N,onToggleCompleted:E}),c.jsxs("section",{className:"surface-card published-reading",children:[c.jsx("p",{className:"muted",children:"Published written-practice material. Answer checking and verified scores remain on the current Playground."}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:ic(C.markdownSource)}})]})]}):$&&!rp[u]?c.jsxs("div",{className:"lesson-screen",children:[c.jsx(cd,{task:C,unit:p,unitNumber:v,isTsi:!0,isCompleted:x,assignment:w,grade:N,onToggleCompleted:E}),c.jsxs("section",{className:"surface-card published-reading",children:[c.jsx("p",{className:"muted",children:"Published draft lesson · practice shown for learning, not an official TSIA2 score predictor."}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:ic(C.markdownSource)}})]})]}):c.jsxs("div",{className:"lesson-screen",children:[c.jsx(cd,{task:C,unit:p,unitNumber:v,isTsi:$,isCompleted:x,assignment:w,grade:N,onToggleCompleted:E}),c.jsxs("div",{className:`workspace-grid ${$?"tsi-workspace":""}`,ref:L,style:{"--left-pane":`${I}px`},children:[$?c.jsx(Tx,{lessonId:u,onAnswerChecked:M}):c.jsx(af,{lessonId:u,task:C}),c.jsx(rc,{axis:"columns",onDrag:ne}),$?c.jsx(af,{lessonId:u,task:C,isTsi:!0,tsiAnswer:A}):c.jsx(dm,{lessonId:u,task:C})]})]}):c.jsxs("div",{className:"lesson-screen",children:[c.jsx(cd,{task:C,unit:p,unitNumber:v,isTsi:$,isCompleted:x,assignment:w,grade:N,onToggleCompleted:E}),c.jsxs("section",{className:"lesson-content-pending surface-card",children:[c.jsx("h2",{children:"Lesson coming soon"}),c.jsx("p",{children:"This scheduled lesson has not been authored yet. No practice or scores are available."})]})]})}function Px({course:u,project:h,stepId:p,openProject:v}){const x=h.steps||[],w=Math.max(0,x.findIndex(V=>V.id===p)),N=x[w],E=Ae.useRef(null),[C,L]=ln("designlab:project-left-width",430),A="project:"+u.id+":"+h.id,M={id:A,title:h.title,language:h.language||"html",starter:h.starter||"",challenge:h.summary||"",console:"Try editing the project. Run and Check are preview-only until the real runtime is connected.",projectDraft:!0,isPublished:!1};function I(V){if(!E.current)return;const ne=E.current.getBoundingClientRect();L(Math.max(260,Math.min(ne.width-340,V.clientX-ne.left)))}return c.jsxs("div",{className:"lesson-screen project-workspace",children:[c.jsxs("header",{className:"lesson-header",children:[c.jsxs("div",{className:"eyebrow",children:["Published guided project · ",x.length," steps"]}),c.jsx("h1",{children:h.title}),c.jsx("p",{children:h.summary}),c.jsx("p",{className:"muted",children:"The walkthrough is published course content. Code edits are saved only in this browser; Run, Check and Submit are not connected to production grading."})]}),c.jsx("nav",{className:"project-step-list","aria-label":"Project steps",children:x.map((V,ne)=>c.jsxs("button",{type:"button","aria-current":ne===w?"step":void 0,className:ne===w?"btn primary":"btn",onClick:()=>v(u.id,h.id,V.id),children:[ne+1,". ",V.title]},V.id))}),c.jsxs("div",{className:"workspace-grid",ref:E,style:{"--left-pane":C+"px"},children:[c.jsxs("section",{className:"instructions-pane project-reading",children:[c.jsx("div",{className:"pane-header",children:c.jsxs("strong",{children:["Step ",w+1,": ",N.title]})}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:ic(N.markdownSource)}})]}),c.jsx(rc,{axis:"columns",onDrag:I}),c.jsx(dm,{lessonId:A,task:M})]}),c.jsxs("nav",{className:"lesson-next-bar","aria-label":"Project step navigation",children:[w>0&&c.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>v(u.id,h.id,x[w-1].id),children:[c.jsx(Vh,{size:16})," ",c.jsxs("span",{children:["Prev: ",x[w-1].title]})]}),w<x.length-1&&c.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>v(u.id,h.id,x[w+1].id),children:[c.jsxs("span",{children:["Next: ",x[w+1].title]})," ",c.jsx(na,{size:16})]})]})]})}function Ax({courseId:u,lessonId:h,projectId:p,projectStepId:v,availableCourses:x=ns,openCourse:w,openProject:N,openChallenges:E,completedLessons:C=[],assignments:L=[],grades:A=[],onToggleLessonComplete:M,courseColors:I={},onSetCourseColor:V,onResetCourseColor:ne}){const $=x.find(Y=>Y.id===u)||x[0],se=($.projects||[]).find(Y=>Y.id===p),D=ec($),F=$.units.findIndex(Y=>rs(Y).includes(h)),z=$.units[F],q=D.indexOf(h);return c.jsx("div",{className:"course-layout integrated-course","data-course":$.id,children:c.jsxs("div",{className:"course-main",children:[c.jsxs("div",{className:"course-breadcrumb",children:[c.jsx("button",{onClick:()=>w(null),children:"All playgrounds"}),c.jsx(na,{size:14}),h||se?c.jsxs(c.Fragment,{children:[c.jsx("button",{onClick:()=>w($.id),children:$.label}),c.jsx(na,{size:14}),c.jsx("span",{className:"breadcrumb-unit-name",title:z?Es(z):"",children:z?Es(z):(se==null?void 0:se.title)||""})]}):c.jsx("span",{children:$.label})]}),se?c.jsx(Px,{course:$,project:se,stepId:v,openProject:N},se.id):h?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"lesson-mobile-navigation",children:[c.jsx("label",{htmlFor:"lesson-select",children:"Lesson"}),c.jsx("select",{id:"lesson-select",value:h,onChange:Y=>w($.id,Y.target.value),children:$.units.map((Y,ge)=>c.jsx("optgroup",{label:`Unit ${ge+1} · ${Es(Y)}`,children:rs(Y).map(le=>c.jsx("option",{value:le,children:ta($,le)},le))},Y.id))})]}),c.jsx(Lx,{lessonId:h,course:$,unit:z,unitNumber:F+1,isCompleted:C.includes(h),assignment:L.find(Y=>Y.id==="lesson:"+h),grade:A.find(Y=>Y.id==="lesson:"+h),onToggleCompleted:()=>M==null?void 0:M(h)},h),c.jsxs("nav",{className:"lesson-next-bar","aria-label":"Lesson sequence",children:[q>0&&c.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>w($.id,D[q-1]),children:[c.jsx(Vh,{size:16,"aria-hidden":"true"}),c.jsxs("span",{children:["Prev: ",ta($,D[q-1])]})]}),q>=0&&q<D.length-1&&c.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>w($.id,D[q+1]),children:[c.jsxs("span",{children:["Next: ",ta($,D[q+1])]}),c.jsx(na,{size:16,"aria-hidden":"true"})]})]})]}):c.jsx(gy,{course:$,openCourse:w,openProject:N,openChallenges:E,completedLessons:C,assignments:L,grades:A,courseColors:I,onSetCourseColor:V,onResetCourseColor:ne})]})})}const po=[{id:"p1",period:"1",name:"Period 1",course:"computer-science-1"},{id:"p3",period:"3",name:"Period 3",course:"computer-science-1"},{id:"p5",period:"5",name:"Period 5",course:"mobile-app-dev"},{id:"p6",period:"6",name:"Period 6",course:"game-programming"},{id:"p7",period:"7",name:"Period 7",course:"mobile-app-dev"},{id:"p8",period:"8",name:"Period 8",course:"computer-science-1"}],hm=u=>po.find(h=>h.id===u),pm=u=>{var h;return(h=hm(u))==null?void 0:h.period},Rx=[...new Set(po.map(u=>u.period))].sort((u,h)=>Number(u)-Number(h)),fm=[{key:"2026-11-02",label:"Nov 2 – Nov 8, 2026"},{key:"2026-10-26",label:"Oct 26 – Nov 1, 2026"}],Gl=u=>{var h,p;return((h=u.sheetName)==null?void 0:h.trim())||((p=u.studentName)==null?void 0:p.trim())||u.github},Pf=u=>(u.sheetName||u.studentName||"").trim().split(/\s+/),mm=(u,h,p)=>{const v=x=>p==="github"?x.github.toLowerCase():p==="first"?(Pf(x)[0]||x.github).toLowerCase():(Pf(x).at(-1)||x.github).toLowerCase();return v(u).localeCompare(v(h),void 0,{numeric:!0})||u.github.localeCompare(h.github)},Ix=[["last","Last name"],["first","First name"],["github","GitHub username"]];function Mx({sectionId:u,onSectionChange:h,setupOpen:p,onToggleSetup:v}){return c.jsxs("div",{className:"teacher-toolbar",children:[c.jsxs("label",{children:["Class section",c.jsx("select",{value:u,onChange:x=>h(x.target.value),children:po.map(x=>c.jsxs("option",{value:x.id,children:[x.name," · ",Gh(x.course)]},x.id))})]}),c.jsxs("button",{type:"button",className:"btn section-setup-toggle","aria-expanded":p,"aria-controls":"teacher-section-setup",onClick:v,children:[p?c.jsx(Ed,{size:16}):c.jsx(ep,{size:16}),p?"Close section setup":"Section setup"]})]})}const Ox=[["overview","Class overview",Qh],["curriculum","Curriculum",ac],["journals","Journals",Xh]];function Dx({tab:u,onChange:h}){return c.jsx("div",{className:"tabs teacher-tabs",role:"tablist","aria-label":"Teacher dashboard tabs",children:Ox.map(([p,v,x])=>c.jsxs("button",{type:"button",role:"tab","aria-selected":u===p,className:u===p?"active":"",onClick:()=>h(p),children:[c.jsx(x,{size:16}),v]},p))})}function zx({section:u}){return c.jsxs("div",{className:"section-banner",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Selected section"}),c.jsxs("h2",{children:[u.name," ",c.jsxs("span",{className:"muted",children:["· ",Gh(u.course)]})]})]}),c.jsx(is,{children:"Demo join code: LOCAL01"})]})}function Fx({students:u}){const h=[[u.length,"Enrolled students"],[u.filter(p=>p.status==="Active now").length,"Recently interacting"],[u.filter(p=>p.sheetName).length,"Sheet names matched"]];return c.jsx("div",{className:"stat-grid",children:h.map(([p,v])=>c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:p}),c.jsx("span",{children:v})]},v))})}function Wx({students:u,week:h,setWeek:p}){const v=Ae.useMemo(()=>[...u].sort((x,w)=>(w.weekly[h]||0)-(x.weekly[h]||0)),[u,h]);return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Weekly points"}),c.jsx("p",{children:"Mock verified points · Monday–Sunday in Central Time"})]}),c.jsxs("label",{children:["Week",c.jsx("select",{value:h,onChange:x=>p(x.target.value),children:fm.map(x=>c.jsx("option",{value:x.key,children:x.label},x.key))})]})]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Student"}),c.jsx("th",{children:"Weekly points"}),c.jsx("th",{children:"Sample assignments"})]})}),c.jsx("tbody",{children:v.map(x=>c.jsxs("tr",{children:[c.jsxs("th",{children:[Gl(x),c.jsxs("small",{children:["@",x.github]})]}),c.jsx("td",{children:c.jsx("strong",{children:x.weekly[h]||0})}),c.jsx("td",{children:x.assignments.filter(w=>w.score!==null).length})]},x.id))})]})})]})}function gm({label:u,value:h,onChange:p}){return c.jsxs("label",{children:[u,c.jsx("select",{value:h,onChange:v=>p(v.target.value),children:Ix.map(([v,x])=>c.jsx("option",{value:v,children:x},v))})]})}const Hx=u=>u.includes("Completed")?"success":u==="Needs revision"?"warning":"";function Bx({student:u,week:h}){const[p,v]=Ae.useState(null),x=u.assignments,w=x.filter(E=>E.status==="Completed"||E.status==="Practice completed").length,N=x.filter(E=>E.score!==null).length;return c.jsxs("div",{className:"expanded-student",children:[c.jsxs("div",{className:"expanded-header",children:[c.jsxs("div",{children:[c.jsx("h3",{children:"Assignment history"}),c.jsxs("p",{className:"muted",children:["Sample records for ",Gl(u),". No student data is loaded."]})]}),c.jsxs(is,{tone:"success",children:[u.weekly[h]||0," verified pts this week"]})]}),c.jsxs("div",{className:"mini-stats",children:[c.jsxs("span",{children:[c.jsx("strong",{children:w})," completed"]}),c.jsxs("span",{children:[c.jsx("strong",{children:N})," graded"]}),c.jsxs("span",{children:[c.jsx("strong",{children:x.length})," tracked"]})]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table assignment-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Assignment"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Score"}),c.jsx("th",{children:"Updated"}),c.jsx("th",{children:"Action"})]})}),c.jsx("tbody",{children:x.map(E=>{const C=p===E.id;return c.jsxs(Ae.Fragment,{children:[c.jsxs("tr",{children:[c.jsxs("th",{children:[E.name,c.jsx("small",{children:E.type})]}),c.jsx("td",{children:c.jsx(is,{tone:Hx(E.status),children:E.status})}),c.jsx("td",{children:E.score===null?"—":`${E.score} / ${E.possible}`}),c.jsx("td",{children:E.submitted}),c.jsx("td",{children:c.jsx("button",{className:"small-link",onClick:()=>v(C?null:E.id),children:C?"Hide details":"View details"})})]}),C&&c.jsx("tr",{className:"receipt-preview",children:c.jsxs("td",{colSpan:"5",children:[c.jsx("strong",{children:"Sample assignment detail"}),c.jsx("p",{children:"This is a mock submitted-copy preview for layout testing, not the student's actual code."})]})})]},E.id)})})]})})]})}function Ux({students:u,week:h,sort:p,setSort:v,expanded:x,setExpanded:w}){return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Section roster & activity"}),c.jsx("p",{children:"Click a student's name to expand their assignments directly inside the roster."})]}),c.jsx(gm,{label:"Sort students by",value:p,onChange:v})]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table roster-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Student"}),c.jsx("th",{children:"Activity signal"}),c.jsx("th",{children:"Current activity"}),c.jsx("th",{children:"Practice"}),c.jsx("th",{children:"Hand-ins"})]})}),c.jsx("tbody",{children:u.map(N=>{const E=x===N.id;return c.jsxs(Ae.Fragment,{children:[c.jsxs("tr",{className:E?"selected-row":"",children:[c.jsxs("th",{children:[c.jsxs("button",{className:"student-name-button","aria-expanded":E,onClick:()=>w(E?null:N.id),children:[E?c.jsx(Hf,{size:16}):c.jsx(na,{size:16})," ",Gl(N)]}),c.jsxs("small",{children:["@",N.github,N.sections.length>1?" · Sheet periods 1, 3":""]})]}),c.jsx("td",{children:c.jsx(is,{tone:N.status==="Active now"?"success":"",children:N.status})}),c.jsx("td",{children:N.current}),c.jsxs("td",{children:[N.assignments.filter(C=>C.status.includes("Completed")).length," complete"]}),c.jsx("td",{children:N.assignments.filter(C=>C.score!==null).length})]}),E&&c.jsx("tr",{className:"expansion-row",children:c.jsx("td",{colSpan:"5",children:c.jsx(Bx,{student:N,week:h})})})]},N.id)})})]})})]})}function qx({section:u,students:h,week:p,setWeek:v,sort:x,setSort:w,expanded:N,setExpanded:E}){return c.jsxs(c.Fragment,{children:[c.jsx(zx,{section:u}),c.jsx(Fx,{students:h}),c.jsx(Wx,{students:h,week:p,setWeek:v}),c.jsx(Ux,{students:h,week:p,sort:x,setSort:w,expanded:N,setExpanded:E})]})}function ym(u,h){return u+"::"+h}function Kx(u,h=[]){if(!(u!=null&&u.sectionId)||!u.lessonId)return"Choose a section and lesson.";if(u.sectionCourseId&&u.sectionCourseId!=="computer-science-1")return"This section uses a different course. Only Computer Science I is connected.";if(!/^\d{4}-\d{2}-\d{2}$/.test(u.dueDate||""))return"Choose a valid due date.";const[p,v,x]=u.dueDate.split("-").map(Number);if(new Date(Date.UTC(p,v-1,x)).toISOString().slice(0,10)!==u.dueDate)return"Choose a valid due date.";const N=Number(u.points);if(!Number.isFinite(N)||!Number.isInteger(N)||N<0||N>1e3)return"Points must be a whole number between 0 and 1,000.";if(u.scope!=="section"&&u.scope!=="selected")return"Choose who receives the assignment.";if(u.scope==="selected"){const E=new Set(h.map(L=>L.id)),C=[...new Set(u.studentIds||[])];if(!C.length||C.some(L=>!E.has(L)))return"Select at least one student from this section."}return null}function $x(u,h=[]){const p=Kx(u,h);if(p)throw new Error(p);return{id:ym(u.sectionId,u.lessonId),sectionId:u.sectionId,courseId:"computer-science-1",lessonId:u.lessonId,scope:u.scope,studentIds:u.scope==="selected"?[...new Set(u.studentIds)].sort():[],dueDate:u.dueDate,points:Number(u.points)}}function Gx(u,h){return[...(Array.isArray(u)?u:[]).filter(p=>p.id!==h.id),h]}function Rh(u,h,p){return(u||[]).find(v=>v.id===ym(h,p))||null}const Yx="/playground/data/computer-science-1/course.json",Zu=yi("computer-science-1");function Vx({section:u,students:h=[],assignments:p=[],setAssignments:v}){const[x,w]=Ae.useState(null),[N,E]=Ae.useState("loading"),[C,L]=Ae.useState(Zu.lessons[0]),[A,M]=Ae.useState("section"),[I,V]=Ae.useState([]),[ne,$]=Ae.useState(""),[se,D]=Ae.useState(""),[F,z]=Ae.useState("starter"),[q,Y]=Ae.useState("");Ae.useEffect(()=>{const U=new AbortController;return fetch(Yx,{signal:U.signal,cache:"no-store"}).then(S=>{if(!S.ok)throw new Error("Curriculum unavailable");return S.json()}).then(S=>{if(!Array.isArray(S.lessons)||!S.lessons.length)throw new Error("Unexpected curriculum response");w($l(S)),E("live")}).catch(S=>{S.name!=="AbortError"&&E("snapshot")}),()=>U.abort()},[]);const ge=Ae.useMemo(()=>x?{...Zu,...x}:Zu,[x]),le=ge.lessons,ye=le.includes(C)?C:le[0],We=ea(ge,ye),Te=le.reduce((U,S)=>{var P;return U+(Number((P=ea(ge,S))==null?void 0:P.points)||0)},0),ie=Zu.lessons.includes(ye),ke=(u==null?void 0:u.course)==="computer-science-1",re=Rh(p,u==null?void 0:u.id,ye),ve=h.filter(U=>U.sections.includes(u==null?void 0:u.id));Ae.useEffect(()=>{var S;const U=Rh(p,u==null?void 0:u.id,ye);M((U==null?void 0:U.scope)||"section"),V((U==null?void 0:U.studentIds)||[]),$((U==null?void 0:U.dueDate)||""),D(String((U==null?void 0:U.points)??((S=ea(ge,ye))==null?void 0:S.points)??0)),Y(""),z("starter")},[ye,u==null?void 0:u.id]);function T(U){U.preventDefault();try{const S=$x({sectionId:u==null?void 0:u.id,sectionCourseId:u==null?void 0:u.course,lessonId:ye,scope:A,studentIds:I,dueDate:ne,points:se},ve);v==null||v(P=>Gx(P,S)),Y("Preview assignment saved in this browser. No students were notified.")}catch(S){Y(S.message)}}function Q(){v==null||v(U=>(U||[]).filter(S=>S.id!==(re==null?void 0:re.id))),Y("Preview assignment cleared. Live student records were not changed.")}return c.jsxs("section",{className:"panel curriculum-panel","aria-label":"Published curriculum",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsxs("h2",{children:[c.jsx(ac,{size:18})," Computer Science I curriculum"]}),c.jsxs("p",{children:[ge.units.length," original units · ",le.length," lessons · ",Te," available lesson points"]})]}),c.jsx("span",{className:"curriculum-source",role:"status",children:N==="live"?"Published course • current":N==="loading"?"Checking published course…":"Bundled preview snapshot"})]}),c.jsx("p",{className:"curriculum-explanation",children:"Lesson titles, published points, starter code, and unit order come from the real CS1 catalog. Assignment controls below are a browser-only preview and do not affect live students."}),c.jsxs("div",{className:"curriculum-grid",children:[c.jsx("div",{className:"curriculum-units","aria-label":"Unit and lesson list",children:ge.units.map((U,S)=>c.jsxs("details",{open:rs(U).includes(ye)||S===0,children:[c.jsxs("summary",{children:["Unit ",sc(U,S+1)," · ",Es(U)]}),c.jsx("div",{children:rs(U).map(P=>c.jsxs("button",{type:"button",className:P===ye?"curriculum-lesson selected":"curriculum-lesson","aria-current":P===ye?"true":void 0,onClick:()=>L(P),children:[ta(ge,P),Rh(p,u==null?void 0:u.id,P)&&c.jsx("small",{children:" · Assigned in preview"})]},P))})]},U.id))}),c.jsxs("article",{className:"curriculum-lesson-preview",children:[c.jsx("div",{className:"eyebrow",children:"Published lesson"}),c.jsx("h3",{children:We.title}),c.jsx("p",{children:We.summary||We.challenge||"Practice the skills from this unit."}),c.jsxs("div",{className:"curriculum-meta",children:[c.jsxs("span",{children:[We.points??0," published points"]}),c.jsxs("span",{children:[We.mode==="function"?"Function":"Script"," · Python"]})]}),c.jsxs("div",{className:"curriculum-code-tabs",role:"tablist","aria-label":"Lesson code",children:[c.jsx("button",{type:"button",role:"tab","aria-selected":F==="starter",className:F==="starter"?"active":"",onClick:()=>z("starter"),children:"Starter code"}),c.jsxs("button",{type:"button",role:"tab","aria-selected":F==="solution",className:F==="solution"?"active":"",onClick:()=>z("solution"),children:[c.jsx(zp,{size:14})," Solution"]})]}),F==="starter"?c.jsx("pre",{className:"curriculum-code",children:c.jsx("code",{children:We.starter||"# No starter code provided"})}):c.jsxs("div",{className:"curriculum-solution-locked",role:"status",children:[c.jsx(zp,{size:20}),c.jsxs("div",{children:[c.jsx("strong",{children:"Teacher-only solutions"}),c.jsx("p",{children:"Solutions must be loaded from protected storage after teacher sign-in and authorization. Answer keys are not included in the public React preview."})]})]}),ie?c.jsxs("a",{className:"btn",href:Td(Zu,ye),children:["Open lesson in React preview ",c.jsx(Kg,{size:14})]}):c.jsx("p",{className:"muted",children:"This newer published lesson is not yet in the React snapshot."}),c.jsxs("div",{className:"curriculum-assignment-editor",children:[c.jsx("h4",{children:"Assign lesson"}),ke?c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"curriculum-assignment-warning",children:"Preview only. Assignments are saved in this browser, not sent to students or the live gradebook."}),c.jsxs("form",{onSubmit:T,className:"curriculum-assignment-form",children:[c.jsxs("label",{children:["Assign to",c.jsxs("select",{value:A,onChange:U=>M(U.target.value),children:[c.jsxs("option",{value:"section",children:["Whole class · ",ve.length," sample students"]}),c.jsx("option",{value:"selected",children:"Selected students"})]})]}),A==="selected"&&c.jsxs("fieldset",{className:"curriculum-recipient-picker",children:[c.jsx("legend",{children:"Choose students"}),ve.length?ve.map(U=>c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:I.includes(U.id),onChange:S=>V(P=>S.target.checked?[...P,U.id]:P.filter(G=>G!==U.id))}),c.jsx("span",{children:Gl(U)})]},U.id)):c.jsx("p",{children:"No sample students are enrolled in this section."})]}),c.jsxs("div",{className:"curriculum-assignment-fields",children:[c.jsxs("label",{children:["Due date",c.jsx("input",{type:"date",required:!0,value:ne,onChange:U=>$(U.target.value)})]}),c.jsxs("label",{children:["Points",c.jsx("input",{type:"number",required:!0,min:"0",max:"1000",step:"1",value:se,onChange:U=>D(U.target.value)})]})]}),c.jsxs("div",{className:"curriculum-assignment-actions",children:[c.jsx("button",{type:"submit",className:"btn primary",children:re?"Update preview assignment":"Save preview assignment"}),re&&c.jsx("button",{type:"button",className:"btn",onClick:Q,children:"Remove assignment"})]})]}),re&&c.jsxs("p",{className:"curriculum-current-assignment",children:["Saved for ",re.scope==="section"?"whole class":re.studentIds.length+" selected students"," · ","Due ",re.dueDate," · ",re.points," points"]}),q&&c.jsx("p",{className:"curriculum-assignment-feedback",role:"status",children:q})]}):c.jsxs("p",{className:"curriculum-assignment-warning",children:[(u==null?void 0:u.name)||"This section"," uses a different course. Choose a Computer Science I section to assign CS1 lessons."]})]})]})]})]})}function Xx({students:u}){return c.jsxs("section",{className:"panel",children:[c.jsx("h2",{children:"Section setup"}),c.jsx("p",{children:"Visual preview of configured sections. This sandbox cannot create live classes or assign students."}),c.jsx("div",{className:"setup-grid",children:po.map(h=>c.jsxs("div",{className:"setup-card",children:[c.jsx("div",{className:"eyebrow",children:h.name}),c.jsx("h3",{children:Gh(h.course)}),c.jsxs("span",{children:[u.filter(p=>p.sections.includes(h.id)).length," sample students"]})]},h.id))})]})}function Qx({section:u,students:h,submissions:p}){const[v,x]=Ae.useState(Mh()[0]),[w,N]=Ae.useState(null),E=Mh(),C=h.map(A=>{const M=p.filter(I=>I.studentId===A.id&&I.sectionId===u.id&&I.week===v);return{student:A,copies:M,latest:M.at(-1)}}),L=C.filter(A=>A.latest).length;return c.jsxs("section",{className:"panel journal-inbox",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Teacher review · Sample records"}),c.jsxs("h2",{children:[c.jsx(Xh,{size:19})," Weekly journal submissions"]}),c.jsx("p",{children:"Review essays and logic puzzles from this section. Journals are never automatically graded."})]}),c.jsxs("label",{children:["Journal week ",c.jsx("select",{value:v,onChange:A=>{x(A.target.value),N(null)},children:E.map(A=>c.jsx("option",{value:A,children:Ul(A)},A))})]})]}),c.jsxs("div",{className:"stat-grid",children:[c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:L}),c.jsx("span",{children:"Submitted"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:C.length-L}),c.jsx("span",{children:"Missing"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:C.length}),c.jsx("span",{children:"Students in section"})]})]}),c.jsx("div",{className:"journal-inbox-rows",children:C.map(({student:A,latest:M,copies:I})=>c.jsxs("div",{className:"journal-inbox-row",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:[A.first," ",A.last]}),c.jsxs("small",{children:["@",A.github]})]}),c.jsx("span",{className:`journal-status-pill ${M?"submitted":""}`,children:M?"Submitted":"Missing"}),c.jsx("span",{className:"journal-inbox-date",children:M?new Date(M.submittedAt).toLocaleString():"—"}),c.jsx("button",{className:"btn",disabled:!M,onClick:()=>N(w===A.id?null:A.id),children:w===A.id?"Close":"Review"}),w===A.id&&M&&c.jsxs("div",{className:"journal-review-detail",children:[c.jsxs("div",{className:"eyebrow",children:[M.type.replace("-"," ")," · ",I.length," ",I.length===1?"hand-in":"hand-ins"," · Manual review"]}),c.jsx("div",{className:"journal-history-answer",children:M.response}),c.jsxs("p",{className:"hint",children:["AI declaration: ",M.aiUse==="none"?"No AI reported":`Disclosed · ${M.aiDetails}`]})]})]},A.id))}),c.jsx("p",{className:"hint",children:"This inbox uses fictional students and demo submissions created in this browser. No grades or messages are sent."})]})}function Zx({students:u,journalSubmissions:h}){const[p,v]=ln("designlab:teacher-tab","overview"),[x,w]=ln("designlab:section","p1"),[N,E]=ln("designlab:sort","last"),[C,L]=ln("designlab:week",fm[0].key),[A,M]=Ae.useState(null),[I,V]=Ae.useState(!1),[ne,$]=ln("designlab:teacher-preview-assignments",[]),se=["overview","curriculum","journals"].includes(p)?p:"overview",D=hm(x)||po[0],F=Ae.useMemo(()=>u.filter(z=>z.sections.includes(x)).sort((z,q)=>mm(z,q,N)),[u,x,N]);return c.jsxs("div",{className:"main-content teacher-screen",children:[c.jsx(np,{eyebrow:"Your classroom · Frontend preview",actions:c.jsx(is,{children:se==="curriculum"?"Real CS1 catalog · demo assignments":"Sample student data"}),children:"Teacher dashboard"}),c.jsx("p",{className:"page-subtitle",children:se==="curriculum"?"Browse published Computer Science I lessons and configure preview-only section assignments.":"Explore your class layout with fictional students. No real student information is loaded."}),c.jsx(Mx,{sectionId:D.id,onSectionChange:z=>{w(z),M(null)},setupOpen:I,onToggleSetup:()=>V(z=>!z)}),I&&c.jsx("div",{id:"teacher-section-setup",children:c.jsx(Xx,{students:u})}),c.jsx(Dx,{tab:se,onChange:z=>{v(z),M(null)}}),se==="curriculum"&&c.jsx(Vx,{section:D,students:F,assignments:ne,setAssignments:$}),se==="overview"&&c.jsx(qx,{section:D,students:F,week:C,setWeek:L,sort:N,setSort:E,expanded:A,setExpanded:M}),se==="journals"&&c.jsx(Qx,{section:D,students:F,submissions:h})]})}function Jx({children:u}){return c.jsx("div",{className:"empty",children:u})}function e0({student:u,isEditing:h,onToggleEdit:p,onDone:v,onPatch:x}){const w=Gl(u);return c.jsxs("article",{className:"account-card",children:[c.jsxs("div",{className:"account-row",children:[c.jsx("span",{className:"avatar",children:w.slice(0,1).toUpperCase()}),c.jsxs("div",{className:"account-identity",children:[c.jsx("h3",{children:w}),c.jsxs("small",{children:["@",u.github]})]}),c.jsx("button",{className:"icon-button","aria-label":`Edit ${w}`,onClick:p,children:h?c.jsx(Ed,{size:17}):c.jsx(ep,{size:17})})]}),c.jsxs("div",{className:"account-footer",children:[c.jsx(is,{tone:u.sheetName?"success":"",children:u.sheetName?"Sheet matched":"Student name fallback"}),u.sections.map(N=>c.jsxs(is,{children:["Period ",pm(N)]},N))]}),h&&c.jsxs("div",{className:"account-edit",children:[c.jsxs("label",{children:["Google Sheet name",c.jsx("input",{value:u.sheetName||"",onChange:N=>x({sheetName:N.target.value||null})})]}),c.jsxs("label",{children:["Student-provided backup",c.jsx("input",{value:u.studentName||"",onChange:N=>x({studentName:N.target.value})})]}),c.jsx("button",{className:"btn",onClick:v,children:"Done"})]})]})}function t0({students:u,sort:h,setSort:p,patchStudent:v}){const[x,w]=ln("designlab:period-filter","all"),[N,E]=Ae.useState(""),[C,L]=Ae.useState(null),A=Ae.useMemo(()=>{const M=N.toLowerCase();return u.filter(I=>(x==="all"||I.sections.some(V=>pm(V)===x))&&[Gl(I),I.github,I.studentName].some(V=>V.toLowerCase().includes(M))).sort((I,V)=>mm(I,V,h))},[u,x,h,N]);return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Accounts"}),c.jsx("p",{children:"Google Sheet name first, student-entered name second, then GitHub name."})]}),c.jsxs(is,{children:[A.length," accounts"]})]}),c.jsxs("div",{className:"filters",children:[c.jsxs("label",{children:[c.jsx(Bf,{size:16})," ",c.jsx("input",{"aria-label":"Search accounts",value:N,placeholder:"Search name or GitHub username",onChange:M=>E(M.target.value)})]}),c.jsxs("label",{children:["Class period",c.jsxs("select",{value:x,onChange:M=>w(M.target.value),children:[c.jsx("option",{value:"all",children:"All periods"}),Rx.map(M=>c.jsx("option",{children:M},M))]})]}),c.jsx(gm,{label:"Sort",value:h,onChange:p})]}),c.jsx("p",{className:"info-text",children:"Change a sample Sheet name to test precedence and fallback behavior. These edits are saved only in browser storage."}),c.jsx("div",{className:"account-grid",children:A.map(M=>c.jsx(e0,{student:M,isEditing:C===M.id,onToggleEdit:()=>L(C===M.id?null:M.id),onDone:()=>L(null),onPatch:I=>v(M.id,I)},M.id))}),!A.length&&c.jsx(Jx,{children:"No accounts match those filters."})]})}function n0({students:u,setStudents:h}){const[p,v]=ln("designlab:admin-sort","last"),[x,w]=Ae.useState(""),N=(E,C)=>h(L=>L.map(A=>A.id===E?{...A,...C}:A));return c.jsxs("div",{className:"main-content teacher-screen admin-screen",children:[c.jsx(np,{eyebrow:"Global management · Frontend preview",actions:c.jsx(is,{children:"Sample accounts only"}),children:"Admin dashboard"}),c.jsxs("p",{className:"page-subtitle",children:[c.jsx(tp,{size:16,"aria-hidden":"true"})," Account management is separate from class-specific teacher tools. This demo has no real accounts or admin permissions attached."]}),c.jsxs("div",{className:"admin-actions",children:[c.jsxs("button",{type:"button",className:"btn",onClick:()=>{h(gd),w("Fictional account records restored.")},children:[c.jsx(Zh,{size:15})," Reset sample accounts"]}),x&&c.jsx("small",{role:"status",children:x})]}),c.jsx(t0,{students:u,sort:p,setSort:v,patchStudent:N})]})}const r0={essay:"Think about a time you solved a difficult problem. Explain what you tried first, how you changed your approach, and what you learned. Use specific evidence.","logic-puzzle":"A robot follows this pattern: 2, 6, 12, 20, 30, __. Find the next number. Explain the pattern and show why your answer fits."},Af={response:"",type:"essay",aiUse:"",aiDetails:""};function i0({submissions:u,setSubmissions:h}){var Te;const[p,v]=ln("designlab:journal-section",po[0].id),x=po.find(ie=>ie.id===p)||po[0],w=gd.filter(ie=>ie.sections.includes(x.id)),[N,E]=ln("designlab:journal-student",gd[0].id),C=w.find(ie=>ie.id===N)||w[0],L=Ae.useMemo(()=>Mh(),[]),[A,M]=ln("designlab:journal-week",L[0]),I=L.includes(A)?A:L[0],[V,ne]=ln("designlab:journal-drafts",{}),[$,se]=Ae.useState(""),[D,F]=Ae.useState(!1),z=Xm(x.id,C.id,I),q=V[z]||Af,Y=u.filter(ie=>ie.studentId===C.id&&ie.sectionId===x.id&&ie.week===I),ge=Y.at(-1),le=q.response.trim()?q.response.trim().split(/\s+/).length:0;function ye(ie,ke){ne(re=>({...re,[z]:{...re[z]||Af,[ie]:ke}})),se("Draft saved in this browser.")}function We(ie){ie.preventDefault();const ke=Qm(q);if(ke){se(ke);return}const re={id:`demo-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,sectionId:x.id,studentId:C.id,studentName:`${C.first} ${C.last}`,courseId:x.course,week:I,response:q.response.trim(),type:q.type,aiUse:q.aiUse,aiDetails:q.aiDetails.trim(),submittedAt:new Date().toISOString()};h(ve=>[...ve,re]),se("Demo submission saved locally. Check the Teacher dashboard → Journals tab to review it.")}return c.jsxs("div",{className:"main-content journal-screen",children:[c.jsx("div",{className:"eyebrow",children:"Your classes · Written work"}),c.jsxs("header",{className:"journal-heading",children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Weekly Journals"}),c.jsx("p",{children:"Essay responses, reflections, and logic puzzles—all in one place."})]}),c.jsxs("span",{className:"chip",children:[c.jsx(tp,{size:14})," Local demo only"]})]}),c.jsxs("section",{className:"journal-card journal-selection","aria-label":"Select a journal",children:[c.jsxs("label",{children:["Class section",c.jsx("select",{value:x.id,onChange:ie=>{v(ie.target.value),se("")},children:po.map(ie=>{var ke;return c.jsxs("option",{value:ie.id,children:[ie.name," · ",(ke=yi(ie.course))==null?void 0:ke.label]},ie.id)})})]}),c.jsxs("label",{children:["Preview as student",c.jsx("select",{value:C.id,onChange:ie=>{E(ie.target.value),se("")},children:w.map(ie=>c.jsxs("option",{value:ie.id,children:[ie.first," ",ie.last," (sample)"]},ie.id))})]}),c.jsxs("label",{children:["Journal week",c.jsx("select",{value:I,onChange:ie=>{M(ie.target.value),se("")},children:L.map(ie=>c.jsxs("option",{value:ie,children:["Week of ",Ul(ie)]},ie))})]})]}),c.jsxs("section",{className:"journal-card journal-editor-card",children:[c.jsxs("div",{className:"journal-section-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"eyebrow",children:[(Te=yi(x.course))==null?void 0:Te.label," · ",x.name]}),c.jsxs("h2",{children:["Journal · Week of ",Ul(I)]})]}),c.jsx("span",{className:`journal-status-pill ${ge?"submitted":""}`,children:ge?"Submitted":"Not submitted"})]}),c.jsx("p",{className:"journal-instructions",children:"This is a fictional prompt for design testing. In production, your teacher would publish the weekly assignment."}),c.jsxs("form",{onSubmit:We,children:[c.jsxs("label",{children:["Response type",c.jsxs("select",{value:q.type,onChange:ie=>ye("type",ie.target.value),children:[c.jsx("option",{value:"essay",children:"Essay or written reflection"}),c.jsx("option",{value:"logic-puzzle",children:"Logic puzzle or reasoning task"})]})]}),c.jsxs("div",{className:"journal-prompt",children:[c.jsx("strong",{children:"Sample prompt"}),c.jsx("p",{children:r0[q.type]})]}),c.jsx("label",{htmlFor:"journal-answer",children:"Your response"}),c.jsx("textarea",{id:"journal-answer",rows:"13",maxLength:"100000",spellCheck:!0,placeholder:"Write your explanation here. Show steps and reasoning for logic puzzles.",value:q.response,onChange:ie=>ye("response",ie.target.value)}),c.jsxs("div",{className:"journal-writing-meta",children:[c.jsxs("span",{children:[le," words"]}),c.jsxs("span",{children:[c.jsx(xd,{size:13})," Autosaved in this browser"]})]}),c.jsxs("div",{className:"journal-integrity",children:[c.jsxs("label",{children:["AI-use declaration",c.jsxs("select",{value:q.aiUse,onChange:ie=>ye("aiUse",ie.target.value),children:[c.jsx("option",{value:"",children:"Choose one"}),c.jsx("option",{value:"none",children:"I did not use AI-generated content"}),c.jsx("option",{value:"disclosed",children:"I used AI and will explain how"})]})]}),c.jsx("p",{className:"hint",children:"This is a declaration for review, not an automatic grade. Follow your teacher's classroom AI policy."}),q.aiUse==="disclosed"&&c.jsxs("label",{children:["Describe the AI assistance",c.jsx("textarea",{rows:"3",value:q.aiDetails,onChange:ie=>ye("aiDetails",ie.target.value),placeholder:"Identify which parts involved AI assistance."})]})]}),c.jsxs("div",{className:"journal-actions",children:[c.jsxs("button",{type:"button",className:"btn",onClick:()=>{se("Draft saved in this browser.")},children:[c.jsx(xd,{size:15})," Save draft"]}),c.jsxs("button",{type:"submit",className:"btn submit",children:[c.jsx(Jh,{size:15})," Demo submit"]})]}),c.jsx("p",{role:"status",className:"journal-submit-status",children:$})]}),c.jsxs("div",{className:"journal-bottom-row",children:[c.jsx("p",{className:"hint",children:"No real submissions are sent. Each demo submission records a separate copy; drafts remain editable."}),c.jsxs("button",{type:"button",className:"btn",onClick:()=>F(ie=>!ie),children:[c.jsx(Xg,{size:15})," ",D?"Hide history":`Submission history (${Y.length})`]})]}),D&&c.jsx("div",{className:"journal-history",children:Y.length?Y.map(ie=>c.jsxs("details",{className:"journal-history-item",children:[c.jsxs("summary",{children:[c.jsx(zh,{size:16})," Submitted ",new Date(ie.submittedAt).toLocaleString()," · ",ie.type]}),c.jsx("div",{className:"journal-history-answer",children:ie.response})]},ie.id)):c.jsx("p",{className:"muted",children:"No submissions yet for this week."})})]})]})}const s0=`# Attendance Percentage

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
`,o0=`# Competition Leaderboard Ranks

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
`,a0=`# Confidence Pool Total

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
`,l0=`# Count Matching Events

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
`,u0=`# Longest Winning Streak

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
`,c0=`# Format a Score Line

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
`,d0=`# Second Largest Distinct Value

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
`,h0=`# Sum Positive Values

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
`,p0=`# Count Pairs With Target Sum

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
`,f0=`# Temperature Alert

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
`,m0=`using System;

public static class Solution {
    public static int AttendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,g0=`public class Solution {
    public static int attendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,y0=`export function attendancePercent(present, total) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,v0=`def attendance_percent(present: int, total: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,x0=`using System;

public static class Solution {
    public static int[] CompetitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,b0=`public class Solution {
    public static int[] competitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,w0=`export function competitionRanks(scores) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,k0=`def competition_ranks(scores: list[int]) -> list[int]:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,S0=`using System;

public static class Solution {
    public static int ConfidenceTotal(bool[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,C0=`public class Solution {
    public static int confidenceTotal(boolean[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,_0=`export function confidenceTotal(correct, weights) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,T0=`def confidence_total(correct: list[bool], weights: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,N0=`using System;

public static class Solution {
    public static int CountMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,j0=`public class Solution {
    public static int countMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,E0=`export function countMatches(events, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,L0=`def count_matches(events: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,P0=`using System;

public static class Solution {
    public static int LongestWinStreak(bool[] wins) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,A0=`public class Solution {
    public static int longestWinStreak(boolean[] wins) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,R0=`export function longestWinStreak(wins) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,I0=`def longest_win_streak(wins: list[bool]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,M0=`using System;

public static class Solution {
    public static string ScoreLine(string name, int points) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,O0=`public class Solution {
    public static String scoreLine(String name, int points) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,D0=`export function scoreLine(name, points) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,z0=`def score_line(name: str, points: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,F0=`using System;

public static class Solution {
    public static int? SecondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,W0=`public class Solution {
    public static Integer secondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,H0=`export function secondLargestDistinct(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,B0=`def second_largest_distinct(numbers: list[int]) -> int | None:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,U0=`using System;

public static class Solution {
    public static int SumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,q0=`public class Solution {
    public static int sumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,K0=`export function sumPositives(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,$0=`def sum_positives(numbers: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,G0=`using System;

public static class Solution {
    public static int TargetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Y0=`public class Solution {
    public static int targetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,V0=`export function targetPairs(numbers, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,X0=`def target_pairs(numbers: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Q0=`using System;

public static class Solution {
    public static string TemperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Z0=`public class Solution {
    public static String temperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,J0=`export function temperatureAlert(degrees) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,eb=`def temperature_alert(degrees: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,tb="attendance-percent",nb=[{input:[18,20],expected:90},{input:[2,3],expected:66},{input:[0,30],expected:0},{input:[7,7],expected:100}],rb={challengeId:tb,cases:nb},ib="competition-ranks",sb=[{input:[[50,50,40,20,40]],expected:[1,1,3,5,3]},{input:[[7,12,9]],expected:[3,1,2]},{input:[[5,5,5]],expected:[1,1,1]},{input:[[]],expected:[]}],ob={challengeId:ib,cases:sb},ab="confidence-total",lb=[{input:[[!0,!1,!0],[20,18,15]],expected:35},{input:[[!1,!1],[5,8]],expected:0},{input:[[],[]],expected:0}],ub={challengeId:ab,cases:lb},cb="count-matches",db=[{input:[[2,1,2,3,2],2],expected:3},{input:[[],7],expected:0},{input:[[3,4],5],expected:0}],hb={challengeId:cb,cases:db},pb="longest-win-streak",fb=[{input:[[!0,!0,!1,!0,!0,!0]],expected:3},{input:[[!1,!1]],expected:0},{input:[[]],expected:0},{input:[[!0,!0]],expected:2}],mb={challengeId:pb,cases:fb},gb="score-line",yb=[{input:["Avery",18],expected:"Avery: 18 points"},{input:["Jordan Lee",0],expected:"Jordan Lee: 0 points"},{input:["Mia",-2],expected:"Mia: -2 points"}],vb={challengeId:gb,cases:yb},xb="second-largest-distinct",bb=[{input:[[3,1,3,2]],expected:2},{input:[[5,5]],expected:null},{input:[[-10,-7,-7,-2]],expected:-7},{input:[[1]],expected:null}],wb={challengeId:xb,cases:bb},kb="sum-positives",Sb=[{input:[[-3,6,0,2,-1]],expected:8},{input:[[-5,0,-1]],expected:0},{input:[[]],expected:0}],Cb={challengeId:kb,cases:Sb},_b="target-pairs",Tb=[{input:[[1,3,2,2,4],4],expected:2},{input:[[2,2,2],4],expected:3},{input:[[1,2,3],9],expected:0},{input:[[],1],expected:0}],Nb={challengeId:_b,cases:Tb},jb="temperature-alert",Eb=[{input:[32],expected:"Freeze"},{input:[90],expected:"Heat"},{input:[72],expected:"Normal"},{input:[-5],expected:"Freeze"}],Lb={challengeId:jb,cases:Eb},Pb=["python","java","javascript","csharp"],Ab=[{id:"temperature-alert",title:"Temperature Alert",summary:"Choose a status label based on a temperature reading.",difficulty:"Very Easy",points:5,tags:["conditionals","comparisons","functions"],prerequisites:["functions","conditionals"],suggestedCourses:["computer-science-1","game-programming","uil"],languages:["python","java","javascript","csharp"],path:"problems/temperature-alert"},{id:"count-matches",title:"Count Matching Events",summary:"Count how often a particular event code appears.",difficulty:"Easy",points:10,tags:["arrays","loops","comparisons"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/count-matches"},{id:"sum-positives",title:"Sum Positive Values",summary:"Add only the positive values in a data set.",difficulty:"Easy",points:10,tags:["arrays","loops","accumulators"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/sum-positives"},{id:"score-line",title:"Format a Score Line",summary:"Format a player score as a clear single line of text.",difficulty:"Easy",points:10,tags:["strings","formatting","functions"],prerequisites:["variables","strings","functions"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/score-line"},{id:"attendance-percent",title:"Attendance Percentage",summary:"Convert an attendance fraction into a whole-number percentage.",difficulty:"Easy",points:10,tags:["arithmetic","integer-division","functions"],prerequisites:["variables","functions","arithmetic"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/attendance-percent"},{id:"longest-win-streak",title:"Longest Winning Streak",summary:"Find the longest consecutive run of winning results.",difficulty:"Medium",points:15,tags:["arrays","loops","state"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/longest-win-streak"},{id:"confidence-total",title:"Confidence Pool Total",summary:"Compute the points earned from predictions.",difficulty:"Medium",points:15,tags:["arrays","loops","parallel-arrays"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/confidence-total"},{id:"second-largest-distinct",title:"Second Largest Distinct Value",summary:"Return the second-highest unique integer in a collection.",difficulty:"Medium",points:20,tags:["arrays","comparisons","distinct-values"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/second-largest-distinct"},{id:"target-pairs",title:"Count Pairs With Target Sum",summary:"Count pairs of positions that add to a target.",difficulty:"Hard",points:25,tags:["arrays","nested-loops","counting"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/target-pairs"},{id:"competition-ranks",title:"Competition Leaderboard Ranks",summary:"Assign ranks while handling tied scores and skipped positions.",difficulty:"Hard",points:25,tags:["arrays","sorting","ties"],prerequisites:["functions","loops","arrays","sorting"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/competition-ranks"}],vm={languages:Pb,challenges:Ab},Rb=Object.assign({"../challenge-bank/problems/attendance-percent/problem.md":s0,"../challenge-bank/problems/competition-ranks/problem.md":o0,"../challenge-bank/problems/confidence-total/problem.md":a0,"../challenge-bank/problems/count-matches/problem.md":l0,"../challenge-bank/problems/longest-win-streak/problem.md":u0,"../challenge-bank/problems/score-line/problem.md":c0,"../challenge-bank/problems/second-largest-distinct/problem.md":d0,"../challenge-bank/problems/sum-positives/problem.md":h0,"../challenge-bank/problems/target-pairs/problem.md":p0,"../challenge-bank/problems/temperature-alert/problem.md":f0}),Ib=Object.assign({"../challenge-bank/problems/attendance-percent/starters/Solution.cs":m0,"../challenge-bank/problems/attendance-percent/starters/Solution.java":g0,"../challenge-bank/problems/attendance-percent/starters/javascript.js":y0,"../challenge-bank/problems/attendance-percent/starters/python.py":v0,"../challenge-bank/problems/competition-ranks/starters/Solution.cs":x0,"../challenge-bank/problems/competition-ranks/starters/Solution.java":b0,"../challenge-bank/problems/competition-ranks/starters/javascript.js":w0,"../challenge-bank/problems/competition-ranks/starters/python.py":k0,"../challenge-bank/problems/confidence-total/starters/Solution.cs":S0,"../challenge-bank/problems/confidence-total/starters/Solution.java":C0,"../challenge-bank/problems/confidence-total/starters/javascript.js":_0,"../challenge-bank/problems/confidence-total/starters/python.py":T0,"../challenge-bank/problems/count-matches/starters/Solution.cs":N0,"../challenge-bank/problems/count-matches/starters/Solution.java":j0,"../challenge-bank/problems/count-matches/starters/javascript.js":E0,"../challenge-bank/problems/count-matches/starters/python.py":L0,"../challenge-bank/problems/longest-win-streak/starters/Solution.cs":P0,"../challenge-bank/problems/longest-win-streak/starters/Solution.java":A0,"../challenge-bank/problems/longest-win-streak/starters/javascript.js":R0,"../challenge-bank/problems/longest-win-streak/starters/python.py":I0,"../challenge-bank/problems/score-line/starters/Solution.cs":M0,"../challenge-bank/problems/score-line/starters/Solution.java":O0,"../challenge-bank/problems/score-line/starters/javascript.js":D0,"../challenge-bank/problems/score-line/starters/python.py":z0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.cs":F0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.java":W0,"../challenge-bank/problems/second-largest-distinct/starters/javascript.js":H0,"../challenge-bank/problems/second-largest-distinct/starters/python.py":B0,"../challenge-bank/problems/sum-positives/starters/Solution.cs":U0,"../challenge-bank/problems/sum-positives/starters/Solution.java":q0,"../challenge-bank/problems/sum-positives/starters/javascript.js":K0,"../challenge-bank/problems/sum-positives/starters/python.py":$0,"../challenge-bank/problems/target-pairs/starters/Solution.cs":G0,"../challenge-bank/problems/target-pairs/starters/Solution.java":Y0,"../challenge-bank/problems/target-pairs/starters/javascript.js":V0,"../challenge-bank/problems/target-pairs/starters/python.py":X0,"../challenge-bank/problems/temperature-alert/starters/Solution.cs":Q0,"../challenge-bank/problems/temperature-alert/starters/Solution.java":Z0,"../challenge-bank/problems/temperature-alert/starters/javascript.js":J0,"../challenge-bank/problems/temperature-alert/starters/python.py":eb}),Mb=Object.assign({"../challenge-bank/problems/attendance-percent/examples.json":rb,"../challenge-bank/problems/competition-ranks/examples.json":ob,"../challenge-bank/problems/confidence-total/examples.json":ub,"../challenge-bank/problems/count-matches/examples.json":hb,"../challenge-bank/problems/longest-win-streak/examples.json":mb,"../challenge-bank/problems/score-line/examples.json":vb,"../challenge-bank/problems/second-largest-distinct/examples.json":wb,"../challenge-bank/problems/sum-positives/examples.json":Cb,"../challenge-bank/problems/target-pairs/examples.json":Nb,"../challenge-bank/problems/temperature-alert/examples.json":Lb}),Ad=vm.challenges,Kh=vm.languages,Ju={python:"Python",java:"Java",javascript:"JavaScript",csharp:"C#"},Ob={python:"python.py",java:"Solution.java",javascript:"javascript.js",csharp:"Solution.cs"};function xm(u){return Ad.find(h=>h.id===u)||null}function Db(u){return Rb[`../challenge-bank/problems/${u}/problem.md`]??""}function zb(u,h){return Ib[`../challenge-bank/problems/${u}/starters/${Ob[h]}`]??""}function Fb(u){var h;return((h=Mb[`../challenge-bank/problems/${u}/examples.json`])==null?void 0:h.cases)??[]}const Wb=[...new Set(Ad.flatMap(u=>u.tags))].sort((u,h)=>u.localeCompare(h)),Hb=["Very Easy","Easy","Medium","Hard"];function Bb({query:u="",topic:h="all",difficulty:p="all",course:v="all",language:x="all"}={}){const w=u.trim().toLocaleLowerCase();return Ad.filter(N=>(!w||[N.title,N.summary,...N.tags].join(" ").toLowerCase().includes(w))&&(h==="all"||N.tags.includes(h))&&(p==="all"||N.difficulty===p)&&(v==="all"||N.suggestedCourses.includes(v))&&(x==="all"||N.languages.includes(x))).slice().sort((N,E)=>N.title.localeCompare(E.title))}function Rf(u,h){var w;const[p,...v]=u.split(":"),x=v.join(":");return p==="lesson"?ta(yi(h),x):((w=xm(x))==null?void 0:w.title)||x}function Ub({grades:u=[],assignments:h=[],completedLessons:p=[]}){const[v,x]=Ae.useState("all"),w=v==="all"?u:u.filter(M=>M.courseId===v),N=Oh(w),E=xg(w),C=E[0],L=ns.map(M=>({...M,...Oh(u.filter(I=>I.courseId===M.id))})),A=h.filter(M=>v==="all"||M.courseId===v).map(M=>({...M,status:_d(M.id,{assignments:h,grades:u,completedLessons:p})})).filter(M=>M.status.state==="assigned"||M.status.state==="overdue").sort((M,I)=>M.dueDate.localeCompare(I.dueDate));return c.jsxs("div",{className:"main-content grades-screen",children:[c.jsxs("header",{className:"grades-heading",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Your progress"}),c.jsx("h1",{children:"Grades"}),c.jsx("p",{children:"See your earned points, weekly scores, and work still due."})]}),c.jsxs("label",{className:"grades-filter",children:["Course",c.jsxs("select",{value:v,onChange:M=>x(M.target.value),children:[c.jsx("option",{value:"all",children:"All courses"}),ns.map(M=>c.jsx("option",{value:M.id,children:M.label},M.id))]})]})]}),c.jsx("p",{className:"grades-preview-note",children:"This preview does not display real student grades or assignments. Verified scores remain in the current Playground."}),c.jsxs("div",{className:"grades-summary",children:[c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(Hg,{size:19}),c.jsx("span",{children:"Points earned"}),c.jsxs("strong",{children:[N.earned," ",c.jsxs("small",{children:["/ ",N.possible]})]}),c.jsx("p",{children:N.percent===null?"No graded work yet":`${N.percent}% of graded points`})]}),c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(Uf,{size:19}),c.jsx("span",{children:"Graded activities"}),c.jsx("strong",{children:N.count}),c.jsx("p",{children:"Lessons and challenges"})]}),c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(Wg,{size:19}),c.jsx("span",{children:"Most recent scored week"}),c.jsx("strong",{children:C?`${C.earned} / ${C.possible}`:"—"}),c.jsx("p",{children:C?`Week of ${Ul(C.week)}`:"No scores yet"})]})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"Weekly scores"}),E.length?c.jsx("div",{className:"grades-weeks",children:E.map(M=>c.jsxs("div",{className:"grades-week",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:["Week of ",Ul(M.week)]}),c.jsxs("small",{children:[M.count," scored ",M.count===1?"activity":"activities"]})]}),c.jsxs("div",{className:"grades-week-score",children:[c.jsxs("strong",{children:[M.earned," / ",M.possible," pts"]}),c.jsx("progress",{value:M.earned,max:Math.max(M.possible,1),"aria-label":`Week of ${Ul(M.week)}: ${M.earned} of ${M.possible} points`})]})]},M.week))}):c.jsx("p",{children:"No graded work in this selection."})]}),v==="all"&&c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"By course"}),c.jsx("div",{className:"grades-course-list",children:L.map(M=>c.jsxs("div",{className:"grades-course-row","data-course":M.id,children:[c.jsx("span",{className:"grades-course-dot","aria-hidden":"true"}),c.jsx("strong",{children:M.label}),c.jsx("span",{children:M.count?`${M.earned} / ${M.possible} pts`:"No grades yet"})]},M.id))})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"Scored work"}),w.length?c.jsx("div",{className:"grades-entries",children:w.slice().sort((M,I)=>I.gradedAt.localeCompare(M.gradedAt)).map(M=>{var I;return c.jsxs("div",{className:"grades-entry",children:[c.jsxs("div",{children:[c.jsx("strong",{children:Rf(M.id,M.courseId)}),c.jsxs("small",{children:[c.jsx(ac,{size:13}),((I=yi(M.courseId))==null?void 0:I.label)||M.courseId," · ",vd(M.gradedAt)]})]}),c.jsxs("strong",{children:[M.earned," / ",M.possible," pts"]})]},M.id)})}):c.jsx("p",{children:"No scored lessons or challenges yet."})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"Still to complete"}),A.length?c.jsx("div",{className:"grades-entries",children:A.map(M=>{var I;return c.jsxs("div",{className:"grades-entry",children:[c.jsxs("div",{children:[c.jsx("strong",{children:Rf(M.id,M.courseId)}),c.jsx("small",{children:((I=yi(M.courseId))==null?void 0:I.label)||M.courseId})]}),c.jsxs("div",{className:"grades-due-meta",children:[c.jsx("span",{className:`assignment-status ${M.status.state}`,children:M.status.state==="overdue"?"Overdue":"Assigned"}),c.jsxs("small",{children:["Due ",vd(M.dueDate)]})]})]},M.id)})}):c.jsx("p",{children:"Nothing outstanding in this selection."})]})]})}function qb({filterCourse:u,onSelect:h,onBrowseCourse:p,grades:v=[]}){const[x,w]=Ae.useState(""),[N,E]=Ae.useState("all"),[C,L]=Ae.useState("all"),[A,M]=Ae.useState("all"),I=u||"all",V=Ae.useMemo(()=>Bb({query:x,difficulty:N,topic:C,language:A,course:I}),[x,N,C,A,I]),ne=()=>{w(""),E("all"),L("all"),M("all"),p(null)};return c.jsxs("div",{className:"main-content challenge-bank-screen",children:[c.jsxs("header",{className:"challenge-bank-intro",children:[c.jsxs("div",{className:"eyebrow",children:[c.jsx(jd,{size:15})," Shared programming practice"]}),c.jsx("h1",{children:"Challenge Bank"}),c.jsx("p",{children:"One problem library for every class. Choose Python, Java, JavaScript, or C# when solving—without duplicating problems across courses."}),c.jsxs("div",{className:"challenge-summary",children:[c.jsx("strong",{children:Ad.length})," original challenges · ",c.jsx("strong",{children:"4"})," languages · ",c.jsx("strong",{children:"1"})," shared library"]})]}),c.jsxs("section",{className:"challenge-filters surface-card","aria-label":"Filter challenges",children:[c.jsxs("div",{className:"filter-title",children:[c.jsx(Gg,{size:17}),c.jsx("strong",{children:"Find a challenge"}),c.jsxs("button",{type:"button",className:"filter-clear",onClick:ne,children:[c.jsx(Ed,{size:14})," Clear filters"]})]}),c.jsxs("div",{className:"challenge-filter-grid",children:[c.jsxs("label",{className:"challenge-search-label",children:["Search",c.jsxs("span",{className:"challenge-search",children:[c.jsx(Bf,{size:16}),c.jsx("input",{type:"search",value:x,placeholder:"Problem, skill, or topic",onChange:$=>w($.target.value)})]})]}),c.jsxs("label",{children:["Course view",c.jsxs("select",{value:I,onChange:$=>p($.target.value==="all"?null:$.target.value),children:[c.jsx("option",{value:"all",children:"All courses"}),ns.filter($=>$.id!=="tsi-math").map($=>c.jsx("option",{value:$.id,children:$.label},$.id))]})]}),c.jsxs("label",{children:["Difficulty",c.jsxs("select",{value:N,onChange:$=>E($.target.value),children:[c.jsx("option",{value:"all",children:"Any difficulty"}),Hb.map($=>c.jsx("option",{value:$,children:$},$))]})]}),c.jsxs("label",{children:["Topic",c.jsxs("select",{value:C,onChange:$=>L($.target.value),children:[c.jsx("option",{value:"all",children:"Any topic"}),Wb.map($=>c.jsx("option",{value:$,children:$},$))]})]}),c.jsxs("label",{children:["Language",c.jsxs("select",{value:A,onChange:$=>M($.target.value),children:[c.jsx("option",{value:"all",children:"Any language"}),Kh.map($=>c.jsx("option",{value:$,children:Ju[$]},$))]})]})]}),c.jsx("p",{className:"challenge-filter-note",children:"Course matching is informational. Confirm students have learned the prerequisite skills before assigning problems."})]}),c.jsxs("div",{className:"challenge-results-heading",children:[c.jsxs("h2",{children:["Available challenges ",c.jsxs("span",{children:["(",V.length,")"]})]}),c.jsx("span",{children:"Alphabetical order"})]}),V.length?c.jsx("div",{className:"challenge-card-grid",children:V.map($=>c.jsxs("a",{className:"challenge-card surface-card",href:Df($.id),onClick:se=>{se.button!==0||se.metaKey||se.ctrlKey||se.shiftKey||se.altKey||(se.preventDefault(),h($.id))},children:[c.jsxs("div",{className:"challenge-card-top",children:[c.jsx("span",{className:"challenge-level level-"+$.difficulty.toLowerCase().replace(" ","-"),children:$.difficulty}),c.jsx("span",{className:"challenge-points",children:tc("challenge:"+$.id,v)?`${tc("challenge:"+$.id,v).earned} / ${tc("challenge:"+$.id,v).possible} pts earned`:`${$.points} pts available`})]}),c.jsx("h3",{children:$.title}),c.jsx("p",{children:$.summary}),c.jsx("div",{className:"challenge-tags",children:$.tags.map(se=>c.jsx("span",{children:se},se))}),c.jsxs("div",{className:"challenge-course-tags",children:[$.suggestedCourses.slice(0,3).map(se=>{var D,F;return c.jsx("span",{title:(D=yi(se))==null?void 0:D.label,children:((F=yi(se))==null?void 0:F.short)||se},se)}),$.suggestedCourses.length>3&&c.jsxs("span",{children:["+",$.suggestedCourses.length-3]})]}),c.jsxs("span",{className:"challenge-open",children:["Open challenge ",c.jsx(Dh,{size:16})]})]},$.id))}):c.jsxs("div",{className:"challenge-empty surface-card",children:[c.jsx("h3",{children:"No matching challenges"}),c.jsx("p",{children:"Try a broader topic or clear the filters."}),c.jsx("button",{className:"btn",onClick:ne,children:"Show all challenges"})]}),c.jsx("p",{className:"hint challenge-bottom-note",children:"Choose a problem, work through its examples, and compare your approach. Practice here does not count toward your grade."})]})}const Kb=(u,h)=>"designlab:challenge-code:"+u+":"+h;function $b({challengeId:u,onBack:h,grades:p=[]}){const v=xm(u),x=tc("challenge:"+u,p),[w,N]=ln("designlab:challenge-language","python"),E=Kh.includes(w)?w:"python",C=Kb(u,E),L=zb(u,E),[A,M]=Ae.useState(()=>Sd(C)??L),[I,V]=Ae.useState("Run and Check are simulations. This preview does not execute code."),[ne,$]=Ae.useState(""),[se,D]=Ae.useState("Choose Check to review the published examples."),[F,z]=Ae.useState("Console"),[q,Y]=ln("designlab:challenge-attempts",[]),[ge,le]=ln("designlab:challenge-left-width",420),[ye,We]=ln("designlab:challenge-editor-height",330),Te=Ae.useRef(null),ie=Ae.useRef(null),ke=Fb(u),re=q.filter(S=>S.challengeId===u);Ae.useEffect(()=>{M(Sd(C)??L),V("Run / Check are design-only controls—no program is executed."),$(""),D("Choose Check to review the published examples."),z("Console")},[C,L]);const ve=S=>{M(S),Kl(C,S),$("Draft saved in this browser for "+Ju[E]+".")},T=S=>{if(S==="Reset"){ve(L),V("Starter restored; nothing was executed."),D("Choose Check to review the published examples."),z("Console");return}if(S==="Save"){Kl(C,A),$("Draft saved in this browser.");return}if(S==="Submit"){Y(G=>[...G,{id:"demo-"+Date.now()+"-"+Math.random().toString(36).slice(2),challengeId:u,language:E,code:A,submittedAt:new Date().toISOString()}]),$("Demo hand-in recorded locally. No code was graded or delivered to a teacher.");return}const P=ke.map((G,H)=>"Example "+(H+1)+": input "+JSON.stringify(G.input)+" → expected "+JSON.stringify(G.expected)).join(`
`);S==="Check"?(D(`Published examples (not checked against your code):

`+P),z("Checks")):(V(`Expected sample outputs (your code has not run):

`+P),z("Console"))},Q=S=>{if(!Te.current)return;const P=Te.current.getBoundingClientRect();le(Math.max(280,Math.min(P.width-360,S.clientX-P.left)))},U=S=>{if(!ie.current)return;const P=ie.current.getBoundingClientRect();We(Math.max(180,Math.min(P.height-130,S.clientY-P.top)))};return v?c.jsxs("div",{className:"challenge-detail-page",children:[c.jsxs("div",{className:"challenge-breadcrumb",children:[c.jsxs("button",{onClick:h,children:[c.jsx(zg,{size:16})," Challenge Bank"]}),c.jsx("span",{children:"/"}),c.jsx("span",{children:v.title})]}),c.jsxs("header",{className:"challenge-detail-heading surface-card",children:[c.jsxs("div",{className:"eyebrow",children:["Shared challenge · ",v.difficulty," · ",v.points," possible points"]}),c.jsx("h1",{children:v.title}),c.jsx("p",{children:v.summary}),x&&c.jsxs("div",{className:"challenge-earned-points",children:["Completed · ",x.earned," / ",x.possible," points earned"]}),c.jsxs("div",{className:"challenge-prerequisites",children:[c.jsx("strong",{children:"Prerequisites:"}),v.prerequisites.map(S=>c.jsx("span",{children:S},S))]})]}),c.jsxs("div",{className:"challenge-workspace",ref:Te,style:{"--challenge-left":ge+"px"},children:[c.jsxs("section",{className:"challenge-instructions",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx(Fg,{size:16})," Problem & examples"]}),c.jsxs("span",{className:"challenge-points",children:[v.points," pts"]})]}),c.jsx("div",{className:"markdown-preview challenge-markdown",dangerouslySetInnerHTML:{__html:ic(Db(u))}})]}),c.jsx(rc,{axis:"columns",onDrag:Q}),c.jsxs("section",{className:"challenge-editor-panel",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx(Nd,{size:16})," Solution editor"]}),c.jsxs("label",{className:"challenge-language-selector",children:["Language ",c.jsx("select",{"aria-label":"Solution language",value:E,onChange:S=>N(S.target.value),children:Kh.map(S=>c.jsx("option",{value:S,children:Ju[S]},S))})]})]}),c.jsxs("div",{className:"challenge-code-layout",ref:ie,style:{"--challenge-editor-height":ye+"px"},children:[c.jsx("textarea",{className:"code-editor challenge-editor",spellCheck:!1,"aria-label":Ju[E]+" solution editor",value:A,onChange:S=>ve(S.target.value)}),c.jsx(rc,{axis:"rows",onDrag:U}),c.jsxs("div",{className:"console-pane",children:[c.jsxs("div",{className:"console-heading",children:[c.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Challenge results",children:["Console","Checks"].map(S=>c.jsxs("button",{type:"button",role:"tab","aria-selected":F===S,className:F===S?"active":"",onClick:()=>z(S),children:[S==="Console"&&c.jsx(iy,{size:14})," ",S]},S))}),c.jsx("span",{children:"Demo"})]}),c.jsx("pre",{role:"tabpanel","aria-label":F==="Checks"?"Checks":"Console output",children:F==="Checks"?se:I})]})]}),c.jsxs("div",{className:"editor-controls challenge-controls",children:[c.jsxs("div",{children:[c.jsx("button",{className:"btn",onClick:()=>T("Run"),children:"Run"}),c.jsxs("button",{className:"btn",onClick:()=>T("Check"),children:[c.jsx(Bg,{size:15})," Check"]}),c.jsxs("button",{className:"btn",onClick:()=>T("Reset"),children:[c.jsx(Zh,{size:15})," Reset"]})]}),c.jsxs("div",{children:[c.jsxs("button",{className:"btn",onClick:()=>T("Save"),children:[c.jsx(xd,{size:15})," Save"]}),c.jsxs("button",{className:"btn submit",onClick:()=>T("Submit"),children:[c.jsx(Jh,{size:15})," Demo submit"]})]})]}),c.jsx("p",{className:"challenge-editor-message",role:"status",children:ne||"Drag the dividers to resize your workspace. Each language keeps its own draft."})]})]}),re.length>0&&c.jsxs("section",{className:"challenge-history surface-card",children:[c.jsxs("h2",{children:["Demo hand-ins (",re.length,")"]}),c.jsx("p",{children:"These are saved only in your browser, not real grades."}),re.slice().reverse().map(S=>c.jsxs("details",{children:[c.jsxs("summary",{children:[Ju[S.language]," · ",new Date(S.submittedAt).toLocaleString()]}),c.jsx("pre",{children:S.code})]},S.id))]})]}):c.jsxs("div",{className:"main-content",children:[c.jsx("h1",{children:"Challenge not found"}),c.jsx("button",{className:"btn",onClick:h,children:"Back to bank"})]})}function Gb(){const[u,h]=Ae.useState(()=>ud()),[p,v]=ln("designlab:course","computer-science-1"),[x,w]=ln("designlab:theme","dark"),[N,E]=ln("designlab:course-colors",{}),[C,L]=ln("designlab:sidebar",!0),[A,M]=ln("designlab:completed-lessons",[]),I=[],V=[],ne=bg(A,I),[$,se]=Ae.useState({}),[D,F]=Ae.useState({}),[z,q]=Ae.useState(!0),Y=Ae.useMemo(()=>ns.map(S=>{if(S.id==="computer-science-1")return S;if(S.id==="capstone")return{...S,units:[],lessons:[],lessonRecords:{},publishedContent:!1,projects:[]};const P=$[S.id];return P?{...S,...P,publishedContent:!0}:{...S,units:[],lessons:[],lessonRecords:{},projects:[],contentLoadingError:D[S.id]||null}}),[$,D]);Ae.useEffect(()=>{const S=new AbortController;let P=!0;return Promise.all(["game-programming","mobile-app-dev","uil","tsi-math"].map(async G=>{try{return{courseId:G,data:await jg(G,{signal:S.signal})}}catch(H){return{courseId:G,error:String((H==null?void 0:H.message)||H)}}})).then(G=>{if(!P)return;const H={},ae={};for(const Oe of G)Oe.data?H[Oe.courseId]=Oe.data:ae[Oe.courseId]=Oe.error;se(H),F(ae),q(!1)}),()=>{P=!1,S.abort()}},[]),Ae.useEffect(()=>{h(ud(window.location.pathname,Y))},[Y]);const[ge,le]=ln("designlab:students",gd),[ye,We]=ln("designlab:journal-submissions",Zm);Ae.useEffect(()=>{document.documentElement.dataset.theme=x},[x]),Ae.useEffect(()=>{pg(N,ns)},[N]);function Te(S,P){!ns.some(G=>G.id===S)||!Cd(P)||E(G=>({...G&&typeof G=="object"?G:{},[S]:P.toUpperCase()}))}function ie(S){E(P=>{const G={...P&&typeof P=="object"?P:{}};return delete G[S],G})}Ae.useEffect(()=>{var P;u.page==="course"&&v(u.courseId);const S=u.page==="course"?(P=yi(u.courseId))==null?void 0:P.label:u.page==="admin"?"Admin dashboard":u.page==="teacher"?"Teacher dashboard":u.page==="grades"?"Grades":u.page==="journals"?"Weekly journals":u.page==="challenges"?"Challenge Bank":u.page==="challenge"?"Coding challenge":"Your playgrounds";document.title=`${S||"Playground"} | Ms. Whitby's Playground — React Lab`},[u.page,u.courseId,v]),Ae.useEffect(()=>{const S=()=>h(ud(window.location.pathname,Y));return window.addEventListener("popstate",S),window.addEventListener("hashchange",S),()=>{window.removeEventListener("popstate",S),window.removeEventListener("hashchange",S)}},[Y]);const ke=Ae.useCallback(S=>{window.location.pathname!==S&&window.history.pushState({},"",S),h(ud(window.location.pathname,Y)),window.scrollTo({top:0,behavior:"auto"})},[Y]);function re(S,P){if(!S)return ke(Bl());v(S),ke(Td(S,P))}function ve(S,P,G=null){ke(zf(S,P,G))}function T(S){S==="teacher"?ke(Dp()):S==="admin"?ke(Ag()):S==="journals"?ke(Rg()):S==="grades"?ke(Ig()):S==="challenges"?ke(Wl()):S==="course"?re(u.page==="course"?u.courseId:p):ke(Bl())}const Q=u.page,U=u.courseId||p;return c.jsxs("div",{className:"app-shell",children:[c.jsx(ly,{sidebarOpen:C,onToggleSidebar:()=>L(!C),onHome:()=>ke(Bl()),theme:x,setTheme:w}),c.jsxs("div",{className:uo("app-layout",!C&&"sidebar-closed"),children:[c.jsx(cy,{open:C,page:Q,courseId:U,lessonId:u.page==="course"?u.lessonId:null,setPage:T,openCourse:re,completedLessons:ne,assignments:V,grades:I,availableCourses:Y,onOpenProject:ve}),c.jsx("main",{className:"main-panel",children:Q==="home"?c.jsx(my,{availableCourses:Y,completedLessons:ne,openCourse:re,openTeacher:()=>ke(Dp()),openChallenges:()=>ke(Wl())}):Q==="course"?c.jsx(Ax,{courseId:u.courseId,lessonId:u.lessonId,projectId:u.projectId,projectStepId:u.stepId,availableCourses:Y,openCourse:re,openProject:ve,openChallenges:S=>ke(Wl(S)),completedLessons:ne,assignments:V,grades:I,onToggleLessonComplete:S=>M(P=>mg(P,S)),courseColors:N,onSetCourseColor:Te,onResetCourseColor:ie},u.courseId):Q==="grades"?c.jsx(Ub,{grades:I,assignments:V,completedLessons:ne}):Q==="challenges"?c.jsx(qb,{grades:I,filterCourse:u.filterCourse,onSelect:S=>ke(Df(S)),onBrowseCourse:S=>ke(Wl(S))}):Q==="challenge"?c.jsx($b,{challengeId:u.challengeId,grades:I,onBack:()=>ke(Wl())},u.challengeId):Q==="journals"?c.jsx(i0,{submissions:ye,setSubmissions:We}):Q==="teacher"?c.jsx(Zx,{students:ge,journalSubmissions:ye}):Q==="admin"?c.jsx(n0,{students:ge,setStudents:le}):z?c.jsxs("div",{className:"main-content route-not-found",role:"status",children:[c.jsx("h1",{children:"Loading published course materials…"}),c.jsx("p",{children:"The lesson and project links will appear once the course catalogs are loaded."})]}):c.jsxs("div",{className:"main-content route-not-found",children:[c.jsx("div",{className:"eyebrow",children:"Link not found"}),c.jsx("h1",{children:"That playground page doesn't exist."}),c.jsx("p",{children:"Check the link or return to the list of playgrounds."}),c.jsx("button",{className:"btn primary",onClick:()=>ke(Bl()),children:"See all playgrounds"})]})})]}),c.jsx(dy,{})]})}Gm.createRoot(document.getElementById("root")).render(c.jsx(Hm.StrictMode,{children:c.jsx(Gb,{})}));
